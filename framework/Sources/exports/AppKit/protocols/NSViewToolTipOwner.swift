import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSViewToolTipOwnerExports: JSExport, NSObjectExports {
  @objc func view(_: NSView, stringForToolTip: NSView.ToolTipTag, point: NSPoint, userData: UnsafeMutableRawPointer?) -> String
}

