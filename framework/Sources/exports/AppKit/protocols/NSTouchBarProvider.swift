import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTouchBarProviderExports: JSExport, NSObjectExports {
  var touchBar: NSTouchBar? { @objc get }
}

