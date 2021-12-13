import { getTypeAsString } from './type';

declare global {
  let log: Logger;
}

let log: Logger;

interface Logger {
  /**
   * Use this level to capture stacktraces that may be useful during development or while troubleshooting a specific problem.
   *
   * @param {...any[]} data
   * @memberof Logger
   */
  trace(...data: any[]): void;

  /**
   * Use this level to capture information that may be useful during development or while troubleshooting a specific problem.
   *
   * @param {...any[]} data
   * @memberof Logger
   */
  debug(...data: any[]): void;

  /**
   * Use this level to capture information that may be helpful, but not essential, for troubleshooting errors.
   *
   * @param {...any[]} data
   * @memberof Logger
   */
  info(...data: any[]): void;

  /**
   * Use this level to capture information about things that might result in a failure.
   *
   * @param {...any[]} data
   * @memberof Logger
   */
  warn(...data: any[]): void;

  /**
   * Use this log level to report process-level errors.
   *
   * @param {...any[]} data
   * @memberof Logger
   */
  error(...data: any[]): void;

  /**
   * Use this level only to capture system-level or multiprocess information when reporting system errors.
   *
   * @param {...any[]} data
   * @memberof Logger
   */
  fault(...data: any[]): void;
}

// https://developer.apple.com/documentation/os/oslogtype

export const levels = {
  'TRACE': 0,
  'DEBUG': 1,
  'INFO': 2,
  'WARN': 3,
  'ERROR': 4,
  'FAULT': 5,
  'SILENT': 6
};

const methods = [
  'trace',
  'debug',
  'info',
  'warn',
  'error'
];

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => { };

function formatForBridgedLog(line, arg) {
  if (typeof arg === 'object') {
    let currs;

    if (Object.keys(arg).length === 0) {
      currs = `{${getTypeAsString(arg)}}`;
    }
    else {
      currs = JSON.stringify(arg);
    }

    line += currs.substring(0, 80);
    if (currs.length > 80) line += ' [...]';
  }
  else {
    line += arg?.toString() || '';
  }

  line += ' ';

  return line;
}

function actualMethod(methodName) {
  if (methodName === 'debug') methodName = 'log';
  if (methodName === 'trace') methodName = 'log';

  if (console[methodName] !== undefined) {
    return console[methodName].bind(console);
  }

  if (log.debug !== undefined) {
    return console['log'].bind(console);
  }

  return noop;
}

// Sets the log levels below threshold to noop, otherwise send to actualMethod
function replaceMethods(level) {
  // @ts-ignore
  globalThis.log = {};

  for (let i = 0; i < methods.length; i++) {
    let methodName = methods[i];
    // @ts-ignore
    globalThis.log[methodName] = (i < level) ? noop : actualMethod(methodName);
  }
}

export function setLevel(level = '') {
  let levelVal = levels[level.toUpperCase()];

  if (typeof levelVal === 'number' && levelVal >= 0 && levelVal <= levels.SILENT) {
    replaceMethods(levelVal);
  }
  else {
    throw new Error(`Invalid logging level: ${level}`);
  }
}

// Also send console logs to Swift side using bridged VueKitLog
for (const level of methods) {
  let originalMethod = console[level];

  console[level] = (...args: any[]) => {
    originalMethod(...args);
    // TODO: Update VueKitLog to use OSLog and match level
    globalThis.VueKitLog(level, args.reduce(formatForBridgedLog, ''));
  };
}

export default { setLevel, levels };
