import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAnimationDelegateExports: JSExport, NSObjectExports {
  @objc func animation(_: NSAnimation, didReachProgressMark: NSAnimation.Progress)
  @objc func animation(_: NSAnimation, valueForProgress: NSAnimation.Progress) -> Float
  @objc func animationDidEnd(_: NSAnimation)
  @objc func animationDidStop(_: NSAnimation)
  @objc func animationShouldStart(_: NSAnimation) -> Bool
}

