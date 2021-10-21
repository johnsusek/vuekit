import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSColorChangingExports: JSExport, NSObjectExports {
  @objc func changeColor(_: NSColorPanel?)
}

