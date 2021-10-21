import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextFinderBarContainerExports: JSExport, NSObjectExports {
  var findBarView: NSView? { @objc get @objc (setFindBarView:) set }
  var isFindBarVisible: Bool { @objc get @objc (setFindBarVisible:) set }
  var contentView: NSView? { @objc get }
  @objc func findBarViewDidChangeHeight()
}

