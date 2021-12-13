export const valueTypeForJSType = (valueType: string): string => {
  switch (valueType) {
    case 'number':
      return 'floatValue';
    case 'string':
      return 'stringValue';
    case 'boolean':
    case 'object':
    case 'undefined':
      return 'objectValue';
    default:
      console.info(`unknown model value type ${valueType}, using objectValue`);
      return 'objectValue';
  }
};

let cachedTypes = new Map();

export function getTypeAsString(value: any): string {
  let type = ({}.toString.call(value));

  if (cachedTypes.has(type)) return cachedTypes.get(type);

  // "[object FooBar]" -> "FooBar"
  let parts = type.split(/[ [\]]/);
  if (parts.length === 4 && parts[1] === 'object') {
    cachedTypes.set(type, parts[2].replace(/Constructor$/, ''));
    return cachedTypes.get(type);
  }

  throw new Error(`Malformed type when attempted to parse to string: ${type}`);
}
