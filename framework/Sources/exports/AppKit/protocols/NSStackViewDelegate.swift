import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSStackViewDelegateExports: JSExport, NSObjectExports {
  @objc (stackView:willDetachViews:) func stackView(_: NSStackView, willDetach: [NSView])
  @objc (stackView:didReattachViews:) func stackView(_: NSStackView, didReattach: [NSView])
}

