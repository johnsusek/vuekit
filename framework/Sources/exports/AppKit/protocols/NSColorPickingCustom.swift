import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSColorPickingCustomExports: JSExport, NSColorPickingDefaultExports {
  @objc func currentMode() -> NSColorPanel.Mode
  @objc func provideNewView(_: Bool) -> NSView
  @objc func setColor(_: NSColor)
  @objc func supportsMode(_: NSColorPanel.Mode) -> Bool
}

