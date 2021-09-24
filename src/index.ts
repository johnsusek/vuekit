import './types';
import './types/macos/AppKit.d.ts';
import './types/macos/AVFoundation.d.ts';
import './types/macos/AVKit.d.ts';
import './types/macos/CloudKit.d.ts';
import './types/macos/CoreFoundation.d.ts';
import './types/macos/CoreGraphics.d.ts';
import './types/macos/Foundation.d.ts';
import './types/macos/ObjectiveC.d.ts';
import './types/macos/Quartz.d.ts';
import './types/macos/QuartzCore.d.ts';

if (globalThis.hostLog) {
  let originalConsoleLog = console.log;
  console.log = (...data) => {
    originalConsoleLog(...data);
    globalThis.hostLog(...data);
  };
}

export * from './createRenderer'