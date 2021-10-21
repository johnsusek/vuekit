import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSoundDelegateExports: JSExport, NSObjectExports {
  @objc func sound(_: NSSound, didFinishPlaying: Bool)
}

