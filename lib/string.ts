export function splitOnCaps(original: string): string[] {
  let lowercased = original.toLowerCase();
  let result = '';

  for (let i = 0; i < original.length; i++) {
    if (original[i] !== lowercased[i]) {
      result = `${result} ${original[i]}`;
    } else {
      result += lowercased[i];
    }
  }

  return result.split(' ');
}

export function snakeToCamel(str): string {
  return str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
}

export function snakeToPascal(str): string {
  return capitalize(snakeToCamel(str));
}

export function capitalize(str): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
