function getSigType(prop) {
  if (!prop.Getter)
    return '';
  if (!prop.Getter.Signature)
    return '';
  if (!prop.Getter.Signature.length)
    return '';

  const sig = prop.Getter.Signature[0];

  let type = '';

  if (!sig.Type)
    return type;

  try {
    switch (sig.Type) {
      case "Interface":
      case "Enum":
      case "Struct":
        type = sig.Name;
        break;

      case "Bool":
        type = "boolean";
        break;

      case "Selector":
        type = "string";
        break;

      case "Float":
      case "Double":
      case "Long":
      case "ULong":
      case "ULongLong":
      case "Int":
      case "UInt":
        type = "number";
        break;

      case "Id":
        type = sig.WithProtocols?.[0] || 'Id';
        break;

      default:
        type = sig.Type.toString().toLowerCase();
        break;
    }

  } catch (error) {
    return '';
  }

  type = type.replace(/^CG/, 'NS');

  if (['NSString'].includes(type))
    type = type.substring(2);

  return type;
}

module.exports = {
  getSigType
}
