let { headerCase } = require("change-case");
let { getSigType } = require("./getSigType");

function buildVetur(frameworks, enums) {
  let tags = {};
  let attrs = {};

  for (let framework of Object.values(frameworks)) {
    for (let item of framework.Items) {
      if (!item.isView && item.SwiftName !== "NSWindow" && item.SwiftName !== "NSTableColumn") continue;

      let itemSwiftName = item.SwiftName.replace(/^NS/, '');

      if (itemSwiftName !== "TextView") {
        itemSwiftName = itemSwiftName.replace(/View$/, '');
      }

      tags[itemSwiftName] = tags[itemSwiftName] || {};
      console.log("  item: " + itemSwiftName);

      let tag = {};
      if (item.IntroducedIn)
        tag.description = "Introduced in " + item.IntroducedIn;
      tag.attributes = item.InstanceProperties?.filter(p => p).map(p => headerCase(p.SwiftName).toLowerCase());
      tags[itemSwiftName] = tag;

      if (item.StaticProperties) {
        for (let prop of [...item.StaticProperties, ...item.InstanceProperties]) {
          let propSwiftName = headerCase(prop.SwiftName).toLowerCase();
          let type = getSigType(prop);
          let options;

          if (prop.Getter?.Signature?.[0].Type === "Enum") {
            options = Object.keys(enums[type]);
            type = undefined;
          }

          attrs[itemSwiftName + "/" + propSwiftName] = {
            type,
            options
          };
        }
      }
    }
  }

  return { tags, attrs };
}

module.exports = {
  buildVetur
}
