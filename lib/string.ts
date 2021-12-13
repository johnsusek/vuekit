export function snakeToCamel(str): string {
  return str.replace(/([-_]\w)/g, g => g[1].toUpperCase());
}

export function snakeToPascal(str): string {
  return capitalize(snakeToCamel(str));
}

export function capitalize(str): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function decapitalize(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
