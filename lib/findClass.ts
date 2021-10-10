import { capitalize, snakeToCamel } from './string';

export function findClass(type: string) {
  let formattedType = capitalize(snakeToCamel(type));

  // This will try the prefixed version first
  // av-capture -> AvCapture
  // Strip framework prefixes and try again
  // av-capture -> Capture
  let unprefixedType = type.replace(/[(av|ns|ik)]-/, '');
  let unprefixedFormattedType = capitalize(snakeToCamel(unprefixedType));

  let namesToTry = [
    formattedType,
    unprefixedFormattedType,
    `${formattedType}View`,
    `${unprefixedFormattedType}View`,
    `NS${unprefixedFormattedType}` // for non-view components like Window
  ];

  // Try adding `View` suffix and try again
  // av-capture -> AvCaptureView
  // Strip prefix and add `View` suffix
  // av-capture -> CaptureView
  for (const nameToTry of namesToTry) {
    if (globalThis[nameToTry]) {
      // console.log(`Found globalThis.${nameToTry} for type ${type}`);
      return nameToTry;
    }
  }

  throw new Error(`Bridged Class ${type} not found - did you forget to import the component?.`);
}
