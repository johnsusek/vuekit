// Recursively attaches a console.log statement to every function call
// of the passed object

import { getTypeAsString } from './type';

const ignoreFns = [
  '_prebugger_inner',

  'getType',
  'snakeToCamel',
  'snakeToPascal',
  'capitalize',
  'splitOnCaps',

  'normalizeVNode',
  'isSameVNodeType',
  'createReactiveEffect',
  'normalizePropsOptions',
  'cleanup',
  'withCtx',
  'isVNode',
  'queueCb',
  'queuePostFlushCb',
  'queueFlush',
  'getAllPropertyNames',
  'isRef',
  'track',
  'flushJobs',
  'flushPreFlushCbs',
  'flushPostFlushCbs',
  'toRaw',
  'reactive',
  'isReadonly',
  'resolve',
  'effect',
  'isEffect'
];

const traceFns = ['renderSlot'];

function getArgValHint(arg) {
  let typeHint = getTypeAsString(arg);
  let argValHint = '';

  if (arg === null) {
    argValHint = 'Null';
  }
  else if (arg === undefined) {
    argValHint = 'Undefined';
  }
  else if (typeHint === 'Function') {
    argValHint = `${arg.name}()`;
  }
  else if (typeHint === 'String') {
    argValHint = `"${arg}"`;
  }
  else if (Array.isArray(arg)) {
    argValHint = `[${arg.length}]`;
  }
  else if (typeHint === 'Object') {
    argValHint = `{ ${Object.keys(arg).join(', ')} }`;
  }
  else {
    argValHint = arg.toString();
  }

  return argValHint;
}

function getFunctionParameters(func) {
  let fnStr = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
  let argsList = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'));
  let result = argsList.match(/(?:^|,)\s*([^\s,=]+)/g) || [];

  return result.map(r => r.replace(/[\s,]/g, ''));
}

function autoDebug(funcRef, includeTrace) {
  let skipFns = [autoDebug, prebugger, getTypeAsString, getFunctionParameters, getArgValHint];
  if (skipFns.includes(funcRef)) return funcRef;
  if (ignoreFns.includes(funcRef.name)) return funcRef;

  function newFn(fn) {
    function _prebugger_inner(...args) {
      let styles = [];

      styles = styles.concat(['font-weight: 500', 'font-weight: normal']);
      styles = styles.concat(['color: gray; font-weight: normal']);

      let funcParams = getFunctionParameters(fn);
      let isValCheck = (args.length === 1 && funcParams[0] === 'val');

      if (isValCheck) return fn.apply(this, args);

      let out = `%c${funcRef.name}%c%c(`;

      if (args && args.length) {
        out += funcParams.map((param, idx) => {
          // let arg = args[idx];
          let line = '';

          // if (includeTypes) {
          //   let typeHint = getTypeAsString(arg);

          //   styles = styles.concat(['font-weight: normal; color: gray', 'color: initial']);
          //   styles = styles.concat(['font-weight: normal; color: gray']);

          //   let typeHintSymbols = {
          //     Object: '🄾',
          //     Function: '🄵',
          //     String: '🅂',
          //     Boolean: '🄱',
          //     Undefined: '⍰',
          //     Null: '⍰',
          //     Number: '🄽'
          //   };

          //   typeHint = typeHintSymbols[typeHint] || typeHint;

          //   line += `%c${typeHint}%c `;
          // }

          line += `%c${param}%c`;

          // if (includeValues) {
          //   let valHint = getArgValHint(arg);
          //   let valHintSymbols = {
          //     Undefined: 'undefined',
          //     Null: 'null'
          //   };

          //   line += ` ${valHintSymbols[valHint] || valHint}`;
          // }

          styles = styles.concat(['color: purple; font-weight: normal', 'color: initial; font-weight: normal;']);

          return line;
        }).join(', ');
      }

      styles = styles.concat(['color: gray; font-weight: normal']);

      out += '%c)';

      console.groupCollapsed(out, ...styles);
      if (funcParams && funcParams.length) {
        console.dir(funcParams.map((name, i) => ({
          [name]: args[i]
        })));
      }
      if (includeTrace) console.trace();
      console.groupEnd();

      return fn.apply(this, args);
    }

    return _prebugger_inner;
  }

  return newFn(funcRef);
}

function prebugger(owner) {
  for (const [key, value] of Object.entries(owner)) {
    let includeTrace = traceFns.includes(key);

    if (typeof value === 'function') {
      if (ignoreFns.includes(key)) continue;

      owner[key] = autoDebug(value, includeTrace);
    }
    else if (typeof value === 'object') {
      if (value !== null) {
        prebugger(value);
      }
    }
    else if (Array.isArray(value)) {
      value.forEach(vv => prebugger(vv));
    }
  }
}

prebugger(globalThis);
