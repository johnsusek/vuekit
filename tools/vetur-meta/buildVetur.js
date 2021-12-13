let { headerCase } = require("change-case");
let { getSigType } = require("./getSigType");
let inheritence = require('./inheritence.json');

let skippedClasses = ['NSObject'];

function buildVetur(frameworks, enums) {
  let tags = {};
  let attrs = {};
  let frameworkMap = {};
  let frameworkMap2 = {};

  for (let [fwName, framework] of Object.entries(frameworks)) {
    if (!frameworkMap[fwName]) frameworkMap[fwName] = {};

    for (let item of framework.Items) {
      if (!item.isView && item.JsName !== "NSView" && item.JsName !== "NSWindow" && item.JsName !== "NSTableColumn") continue;
      frameworkMap[fwName][item.JsName] = item;
    }

    console.log('Done building items tree for ' + fwName)
  }

  for (let [frameworkName, framework] of Object.entries(frameworkMap)) {
    for (let namespace of Object.values(framework)) {
      let baseName = namespace.Base;

      if (baseName) {
        let super1 = frameworkMap['AppKit'][baseName];
        let super2 = frameworkMap['Foundation'][baseName];
        let super3 = frameworkMap[frameworkName][baseName];
        if (super1) namespace.InstanceMethods = [...namespace.InstanceMethods, ...super1.InstanceMethods];
        if (super2) namespace.InstanceMethods = [...namespace.InstanceMethods, ...super2.InstanceMethods];
        if (super3) namespace.InstanceMethods = [...namespace.InstanceMethods, ...super1.InstanceMethods];

      }

      console.log('Done populating items tree for ' + framework.JSName + ' ' + baseName);
    }
  }

  debugger;

  for (let [frameworkName, framework] of Object.entries(frameworkMap2)) {
    for (let [itemName, itemEntry] of Object.entries(framework)) {
      console.log(itemName, itemEntry.length)
      if (itemName === "NSOutlineView") debugger;
      if (itemName === "OutlineView") debugger;
      if (itemName === "Outline") debugger;
      for (let item of itemEntry.Items) {
        if (item.JsName === "NSOutlineView") debugger;
        if (item.JsName === "OutlineView") debugger;
        if (item.JsName === "Outline") debugger;
        // let itemSwiftName = item.JsName.replace(/^NS/, '');

        // if (itemSwiftName !== "TextView") {
        //   itemSwiftName = itemSwiftName.replace(/View$/, '');
        // }

        // tags[itemName] = tags[itemName] || {};

        // let tag = {};
        // if (item.IntroducedIn)
        //   tag.description = "Introduced in " + item.IntroducedIn;
        // tag.attributes = item.InstanceProperties?.filter(p => p).map(p => headerCase(p.JsName).toLowerCase());
        // tags[itemName] = tag;

        // if (item.StaticProperties) {
        //   for (let prop of [...item.StaticProperties, ...item.InstanceProperties]) {
        //     let propSwiftName = headerCase(prop.JsName).toLowerCase();
        //     let type = getSigType(prop);
        //     let options;

        //     if (prop.Getter?.Signature?.[0].Type === "Enum") {
        //       if (enums[type]) options = Object.keys(enums[type]);
        //       type = undefined;
        //     }

        //     attrs[itemSwiftName + "/" + propSwiftName] = {
        //       type,
        //       options
        //     };
        //   }
        // }
      }
    }
  }

  return { tags, attrs };
}

module.exports = {
  buildVetur
}
