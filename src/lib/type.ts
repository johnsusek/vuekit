export const valueTypeForJSType = (valueType: string) => {
  switch (valueType) {
    // case 'boolean':
    //   return 'booleanValue';
    case 'number':
      return 'floatValue';
    case 'string':
      return 'stringValue';
    case 'boolean':
    case 'object':
    case 'undefined':
      return 'objectValue';
    default:
      console.log(`unknown model value type ${valueType}, using objectValue`);
      return 'objectValue';
  }
};

export function getTypeAsString(value: any) {
  let type = ({}.toString.call(value));

  // "[object FooBar]" -> "FooBar"
  let parts = type.split(/[ [\]]/);
  if (parts.length === 4 && parts[1] === 'object') return parts[2];

  throw new Error(`Malformed type when attempted to parse to string: ${type}`);
}
