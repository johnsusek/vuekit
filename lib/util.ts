import { snakeToCamel } from './string';

export function debounce<T>(fn: T, wait: number) {
  let timer: ReturnType<typeof globalThis.setTimeout>;
  return (event: any) => {
    if (timer) globalThis.clearTimeout(timer);
    timer = globalThis.setTimeout(() => {
      if (typeof fn === 'function') {
        fn(event);
      }
    }, wait);
  };
}

let classCache = new Map();

export function getClassName(obj) {
  if (!obj) return;

  let cacheObject = obj.prototype || obj;

  if (classCache.has(cacheObject)) {
    return classCache.get(cacheObject);
  }

  let res = Object.prototype.toString.call(cacheObject).slice(8, obj.prototype ? -12 : -10);

  classCache.set(cacheObject, res);

  return res;
}

export type FetchResponse = { data: any, response: StringObject }

let fetchDefaults = { useJSON: true };

export function fetch(url: NSURL, { useJSON } = fetchDefaults): Promise<FetchResponse> {
  return new Promise((resolve, reject) => {
    log.debug('🔺 Sending request:', url.absoluteString);

    // @ts-ignore
    let sess = NSURLSession.sharedSession().dataTaskWithCompletionHandler(
      url,
      (rawData, response, error) => {
        if (error instanceof NSNull) {
          let data;

          if (useJSON) {
            let stringData = NSString({ data: rawData, encoding: 4 }) as string;
            data = JSON.parse(stringData);
          }
          else {
            data = rawData;
          }

          log.debug('🔻 Received response:', { data, response, url: url.absoluteString });

          DispatchQueue.main().async(() => {
            resolve({ data, response });
          });
        }
        else {
          console.error('Communication error: ', error);
          reject(error);
        }
      }
    );

    sess.resume();
  });
}

export function snakeToCamelObject(obj = {}): StringObject {
  return Object.entries(obj).reduce((acc, curr) => {
    acc[snakeToCamel(curr[0])] = curr[1];
    return acc;
  }, {});
}
