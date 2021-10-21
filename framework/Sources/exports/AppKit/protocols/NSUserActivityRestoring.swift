import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSUserActivityRestoringExports: JSExport, NSObjectExports {
  @objc @available(OSX 10.10, *) func restoreUserActivityState(_: NSUserActivity)
}

