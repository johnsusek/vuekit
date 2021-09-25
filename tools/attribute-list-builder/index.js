let fs = require('fs');
let path = require('path');
let jsonata = require('jsonata');

let args = process.argv.slice(2);

if (args.length < 3) {
  console.log('createAttributeLookuptable <frameworks JSON> <ast path> <attr out path>');
  process.exit(1);
}

let frameworksPath = args[0];
let astPath = args[1];
let outPath = args[2];

if (!fs.existsSync(frameworksPath)) {
  console.log(frameworksPath + ' does not exist.');
  process.exit(1);
}

let frameworks = JSON.parse(fs.readFileSync(frameworksPath));
let vlist = {};

for (let framework of Object.keys(frameworks)) {
  let swiftSyntaxFile = path.join(astPath, `${framework}+SwiftSyntax.json`);

  if (!fs.existsSync(swiftSyntaxFile)) {
    console.log(swiftSyntaxFile + ' does not exist.');
    continue;
  }

  let swiftSyntaxContext = fs.readFileSync(swiftSyntaxFile);
  let swiftSyntax = JSON.parse(swiftSyntaxContext);

  for (let codeBlockItem of swiftSyntax[0].children[0].children) {
    let type = codeBlockItem.children[0];
    if (!type) continue;
    decideAdd(type, null, framework);
  }

  let yamlFilename = `${framework}-AttributeList.yaml`
  fs.writeFileSync(outPath + "/" + yamlFilename, JSON.stringify(vlist[framework], null, 2));
  console.log('Wrote', yamlFilename)
}

function doAddContainer(containerType, type, framework) {
  let containerName = type.children.find(v => v.text === 'SimpleTypeIdentifier')?.children[0].text;

  if (!containerName) {
    let typeParts = jsonata("**[text]").evaluate(type?.children.find(v => v.text === 'MemberTypeIdentifier')?.children);
    if (typeParts && typeParts.length) {
      containerName = typeParts.reduce((acc, curr) => {
        if (!curr.text) return acc;
        if (curr.text === "SimpleTypeIdentifier") return acc;
        acc += curr.text;
        return acc;
      }, "");
    }
  }

  if (!containerName) {
    let kIdx = type.children.findIndex(c => c.text === containerType);
    containerName = type.children[kIdx + 1]?.text;
  }

  if (!containerName) {
    // console.log("Skipping, could not find container name.");
    return;
  }

  console.log(`${framework} - ${containerName} - ${type.text}`);

  let memberDeclBlock = type.children.find(v => v.text === 'MemberDeclBlock');
  let memberDeclListItems = memberDeclBlock.children.find(v => v.text === 'MemberDeclList').children
  let declTypes = memberDeclListItems?.map(c => c.children)?.map(c => c[0]);

  if (!declTypes || !declTypes.length) {
    return;
  }

  for (let declType of declTypes) {
    decideAdd(declType, containerName, framework);
  }
}

function textFromAv(availabilityText, availabilityArgument) {
  let text;
  let addl = "";

  switch (availabilityText.text) {
    case "OSX":
      if (availabilityArgument.text === "AvailabilityVersionRestriction") {
        text = "available";
      }
      break;
    case "unavailable":
      text = availabilityText.text;
      break;
    case "introduced":
    case "renamed":
    case "deprecated":
    case "obsoleted":
    case "message":
      text = availabilityText.text;
      break;
    case "VersionTuple":
      addl = availabilityText.children.map(c => c.text).join('');
      break;
    case ":":
      break;
    default:
      if (text == "renamed") {
        if (availabilityText.text) {
          addl += availabilityText.text.substring(1, availabilityText.text.length - 1);
        }
      }
      else {
        if (availabilityText.text) addl += availabilityText.text.replace(/(^"|"$)/g, '');
      }
      break;
  }

  return { text, addl };
}

function buildFromOuterAttrs(type) {
  let outerAttrs = type.children.find(v => v.text === 'AttributeList')?.children;

  if (!outerAttrs) return;

  let attributesDraft = {};

  for (let outerAttr of outerAttrs) {
    for (let outerAttrChild of outerAttr.children) {
      if (outerAttrChild["text"] === "AvailabilitySpecList") {
        for (let availabilitySpecs of outerAttrChild["children"]) {
          if (availabilitySpecs["text"] === "AvailabilityArgument") {
            for (let availabilityArgument of availabilitySpecs["children"]) {
              if (!availabilityArgument.children) {
                if (availabilityArgument.text) {
                  let { text, addl } = textFromAv(availabilityArgument, availabilityArgument);
                  if (text) {
                    attributesDraft[text] = addl || true;
                  }
                }
              }
              else {
                let text;
                let addl = "";
                for (let availabilityText of availabilityArgument["children"]) {
                  switch (availabilityText.text) {
                    case "OSX":
                      if (availabilityArgument.text === "AvailabilityVersionRestriction") {
                        text = "available";
                      }
                      break;
                    case "unavailable":
                      text = availabilityText.text;
                      break;
                    case "introduced":
                    case "renamed":
                    case "deprecated":
                    case "obsoleted":
                    case "message":
                      text = availabilityText.text;
                      break;
                    case "VersionTuple":
                      addl = availabilityText.children.map(c => c.text).join('');
                      break;
                    case ":":
                      break;
                    default:
                      if (text == "renamed") {
                        if (availabilityText.text) {
                          addl += availabilityText.text.substring(1, availabilityText.text.length - 1);
                        }
                      }
                      else {
                        if (availabilityText.text) addl += availabilityText.text.replace(/(^"|"$)/g, '');
                      }
                      break;
                  }
                }
                if (text) {
                  // TODO append if message
                  attributesDraft[text] = addl || true;
                }
              }
            }
          }
        }
      }
    }
  }

  return attributesDraft;
}

function addToVlist(framework, name, prefix, attributesDraft) {
  if (!attributesDraft) {
    return;
  }

  if (Object.keys(attributesDraft).length === 0) return;

  let key = name;

  if (prefix) key = prefix + "." + name;
  if (!vlist[framework]) vlist[framework] = {};

  vlist[framework][key] = attributesDraft;
}

function nameFromType(type, isFunc) {
  let id = jsonata(`**[text="IdentifierPattern"]`).evaluate(type);
  let name = id?.children?.[0].text

  if (!name) {
    let kIdx = type.children.findIndex(c => c.text === 'func');
    name = type.children[kIdx + 1]?.text;
  }

  if (isFunc) {
    let functionParams = jsonata(`**[text="FunctionParameterList"]`).evaluate(type);

    if (functionParams?.children) {
      let children = functionParams?.children.filter(c => c.children[0].text !== "_").map(c => c.children[0].text);
      name += ":" + children.join(':');
      if (children.length > 0) {
        name += ":";
      }
    }
  }

  return name;
}

function decideAdd(type, prefix, framework) {
  switch (type.text) {
    case "ClassDecl":
      doAddContainer('class', type, framework);
      break;
    case "ProtocolDecl":
      doAddContainer('protocol', type, framework);
      break;
    case "ExtensionDecl":
      doAddContainer('extension', type, framework);
      break;
    case "ImportDecl":
    case "SubscriptDecl":
    case "SequenceExpr":
    case "StructDecl":
    case "EnumDecl":
    case "TypealiasDecl":
    case "InitializerDecl":
      break;
    case "UnknownDecl": {
      addToVlist(framework, nameFromType(type), prefix, buildFromOuterAttrs(type));
      break;
    }
    case "VariableDecl":
    case "FunctionDecl":
      addToVlist(framework, nameFromType(type, true), prefix, buildFromOuterAttrs(type));
      break;
    default:
      debugger;
      break;
  }
}
