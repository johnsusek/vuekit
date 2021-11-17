function enumsFromFrameworkData(framework) {
  let values = {};
  let enums = framework.Items.filter(item => item.Type === "Enum" && item.JsName)

  for (let enu of enums) {
    values[enu.JsName] = {};

    for (let nameField of enu.SwiftNameFields) {
      let [key, value] = Object.entries(nameField)[0];

      values[enu.JsName][key] = parseInt(value, 10);
    }
  }

  return values;
}

function buildEnums(frameworks) {
  let enums = {};

  for (let framework of Object.values(frameworks)) {
    enums = { ...enums, ...enumsFromFrameworkData(framework) };
  }

  return enums;
}

module.exports = {
  buildEnums
}
