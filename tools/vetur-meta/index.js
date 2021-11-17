let fs = require('fs');
let path = require('path');
let { buildFrameworks } = require("./buildFrameworks");
let { buildEnums } = require("./buildEnums");
let { buildVetur } = require("./buildVetur");
let metaPath = path.join(__dirname, "../../../framework-bridge/metadata/meta");

let dstPath = path.join(__dirname, "../../vscode/vetur");
if (!fs.existsSync(dstPath)) fs.mkdirSync(dstPath);

(async () => {
  console.log('Building frameworks...');

  let frameworks = await buildFrameworks(metaPath);
  fs.writeFileSync(path.join(dstPath, "frameworks.json"), JSON.stringify(frameworks, null, 2));

  console.log('Building enums...');

  let enums = buildEnums(frameworks);
  fs.writeFileSync(path.join(dstPath, "enums.json"), JSON.stringify(enums, null, 2));

  console.log('Building vetur tags/attributes...');

  let { tags, attrs } = buildVetur(frameworks, enums);
  fs.writeFileSync(path.join(dstPath, "tags.json"), JSON.stringify(tags, null, 2));
  fs.writeFileSync(path.join(dstPath, "attributes.json"), JSON.stringify(attrs, null, 2));

  console.log(`${Object.values(frameworks).length} frameworks, ${Object.keys(enums).length} enums, ${Object.keys(tags).length} vetur tags, ${Object.keys(attrs).length} vetur attributes done.`);
})();
