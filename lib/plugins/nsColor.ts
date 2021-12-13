import { App } from '@vue/runtime-core';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $nscolor: (name: string) => NSColor
  }
}

export function nscolor(name: string) {
  let colorName = `${name}Color`;

  if (typeof NSColor[colorName] === 'function') {
    return NSColor[colorName]();
  }

  return NSColor({ catalogName: 'System', colorName });
}

export default {
  install: (app: App): void => {
    app.config.globalProperties.$nscolor = nscolor;
  }
};
