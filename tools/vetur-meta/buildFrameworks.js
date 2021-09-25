let fsPromise = require('fs/promises');
let path = require('path');
let cq = require('concurrent-queue');
let YAML = require('yaml');

let cores = require('os').cpus().length;

async function yamlFromFilePath(filePath) {
  let yamlString = await fsPromise.readFile(filePath, 'utf-8');
  let yaml = YAML.parse(yamlString);
  return yaml;
}

async function buildFrameworks(yamlPath) {
  let queue = cq().limit({ concurrency: cores }).process(yamlFromFilePath);
  let files = await fsPromise.readdir(yamlPath);
  let frameworks = {};

  for (let file of files) {
    if (!file.endsWith('.yaml'))
      continue;

    let framework = path.parse(file).name;
    let yamlFilePath = path.join(yamlPath, file);

    queue(yamlFilePath).then((yaml) => {
      frameworks[framework] = yaml;
    });
  }

  return new Promise((resolve) => {
    queue.drained(() => resolve(frameworks));
  });
}

module.exports = {
  buildFrameworks
}