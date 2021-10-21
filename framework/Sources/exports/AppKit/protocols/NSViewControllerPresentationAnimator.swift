import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSViewControllerPresentationAnimatorExports: JSExport, NSObjectExports {
  @objc (animateDismissalOfViewController:fromViewController:) @available(OSX 10.10, *) func animateDismissal(of: NSViewController, from: NSViewController)
  @objc (animatePresentationOfViewController:fromViewController:) @available(OSX 10.10, *) func animatePresentation(of: NSViewController, from: NSViewController)
}

