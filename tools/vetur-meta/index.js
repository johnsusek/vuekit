let fs = require('fs');
let path = require('path');
let { buildFrameworks } = require("./buildFrameworks");
let { buildEnums } = require("./buildEnums");
let { buildVetur } = require("./buildVetur");
let metaPath = path.join(__dirname, "../../../vuekit-bridge/metadata/meta");

let dstPath = path.join(__dirname, "../../vscode/vetur");
if (!fs.existsSync(dstPath)) fs.mkdirSync(dstPath);

(async () => {
  let frameworks = await buildFrameworks(metaPath);
  fs.writeFileSync(path.join(dstPath, "frameworks.json"), JSON.stringify(frameworks, null, 2));

  let enums = buildEnums(frameworks);
  fs.writeFileSync(path.join(dstPath, "enums.json"), JSON.stringify(enums, null, 2));

  let { tags, attrs } = buildVetur(frameworks, enums);
  fs.writeFileSync(path.join(dstPath, "tags.json"), JSON.stringify(tags, null, 2));
  fs.writeFileSync(path.join(dstPath, "attributes.json"), JSON.stringify(attrs, null, 2));
})();

