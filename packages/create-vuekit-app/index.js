#!/usr/bin/env node

// Based on https://github.com/vitejs/vite/blob/main/packages/create-vite/index.js

let fs = require('fs');
let path = require('path');
let argv = require('minimist')(process.argv.slice(2), { string: ['_'] });
let prompts = require('prompts');
let { lightYellow, red } = require('kolorist');

let cwd = process.cwd();

let FRAMEWORKS = [
  {
    name: 'VueKit MacOS App',
    template: 'vuekit-app',
    color: lightYellow
  }
];

let TEMPLATES = FRAMEWORKS.map(
  f => (f.variants && f.variants.map(v => v.name)) || [f.name]
).reduce((a, b) => a.concat(b), []);

let renameFiles = {
  _gitignore: '.gitignore'
};

function copy(src, dest) {
  let stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (let file of fs.readdirSync(srcDir)) {
    let srcFile = path.resolve(srcDir, file);
    let destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

function isEmpty(p) {
  return fs.readdirSync(p).length === 0;
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  for (let file of fs.readdirSync(dir)) {
    let abs = path.resolve(dir, file);
    // baseline is Node 12 so can't use rmSync :(
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      fs.rmdirSync(abs);
    } else {
      fs.unlinkSync(abs);
    }
  }
}

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName
  );
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-');
}

/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
function pkgFromUserAgent(userAgent) {
  if (!userAgent) return undefined;
  let pkgSpec = userAgent.split(' ')[0];
  let pkgSpecArr = pkgSpec.split('/');
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  };
}

async function init() {
  let targetDir = argv._[0];
  let template = argv.template || argv.t;

  let defaultProjectName = !targetDir ? 'vuekit-app' : targetDir;

  let result = { };

  try {
    result = await prompts(
      [
        {
          type: targetDir ? null : 'text',
          name: 'projectName',
          message: 'Project name:',
          initial: defaultProjectName,
          onState: state => (targetDir = state.value.trim() || defaultProjectName)
        },
        {
          type: () => (!fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm'),
          name: 'overwrite',
          message: () => `${targetDir === '.'
            ? 'Current directory'
            : `Target directory "${targetDir}"`
            } is not empty. Remove existing files and continue?`
        },
        {
          type: (_, { overwrite } = { }) => {
            if (overwrite === false) {
              throw new Error(`${red('✖')} Operation cancelled`);
            }
            return null;
          },
          name: 'overwriteChecker'
        },
        {
          type: () => (isValidPackageName(targetDir) ? null : 'text'),
          name: 'packageName',
          message: 'Package name:',
          initial: () => toValidPackageName(targetDir),
          validate: dir => isValidPackageName(dir) || 'Invalid package.json name'
        },
        {
          type: template && TEMPLATES.includes(template) ? null : 'select',
          name: 'framework',
          message:
            typeof template === 'string' && !TEMPLATES.includes(template)
              ? `"${template}" isn't a valid template. Please choose from below: `
              : 'Select a framework:',
          initial: 0,
          choices: FRAMEWORKS.map((framework) => {
            let frameworkColor = framework.color;
            return {
              title: frameworkColor(framework.name),
              value: framework
            };
          })
        },
        {
          type: framework => (framework && framework.variants ? 'select' : null),
          name: 'variant',
          message: 'Select a variant:',
          // @ts-ignore
          choices: framework => framework.variants.map((variant) => {
            let variantColor = variant.color;
            return {
              title: variantColor(variant.name),
              value: variant.name
            };
          })
        }
      ],
      {
        onCancel: () => {
          throw new Error(`${red('✖')} Operation cancelled`);
        }
      }
    );
  } catch (cancelled) {
    console.log(cancelled.message);
    return;
  }

  // user choice associated with prompts
  let { overwrite, packageName, framework } = result;

  let root = path.join(cwd, targetDir);

  if (overwrite) {
    emptyDir(root);
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root);
  }

  console.log(`\nScaffolding project in ${root}...`);

  let templateDir = path.join(__dirname, `template-${framework.template}`);

  let write = (file, content) => {
    let targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file);
    if (content) {
      fs.writeFileSync(targetPath, content);
    } else {
      copy(path.join(templateDir, file), targetPath);
    }
  };

  let files = fs.readdirSync(templateDir);
  for (let file of files.filter(f => f !== 'package.json')) {
    write(file);
  }

  let pkg = require(path.join(templateDir, 'package.json'));

  let pkgName = packageName || targetDir;

  pkg.name = pkgName;

  write('package.json', JSON.stringify(pkg, null, 2));

  let prj = require(path.join(templateDir, '.config/xcodeproj.json'));

  prj.name = pkgName;
  prj.targets.VueKitApp.scheme.testTargets[0].name = `${pkgName}-tests`;
  prj.targets.VueKitAppTests.dependencies[0].target = pkgName;
  prj.targets[pkgName] = prj.targets.VueKitApp;
  prj.targets[`${pkgName}-tests`] = prj.targets.VueKitAppTests;
  delete prj.targets.VueKitApp;
  delete prj.targets.VueKitAppTests;

  write('.config/xcodeproj.json', JSON.stringify(prj, null, 2));

  let pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
  let pkgManager = pkgInfo ? pkgInfo.name : 'npm';

  console.log('\nDone. Now run:\n');
  if (root !== cwd) {
    console.log(`  cd ${path.relative(cwd, root)}`);
  }
  switch (pkgManager) {
    case 'yarn':
      console.log('  yarn run setup');
      break;
    default:
      console.log(`  ${pkgManager} run setup`);
      break;
  }
  console.log();
}

init().catch((e) => {
  console.error(e);
});
