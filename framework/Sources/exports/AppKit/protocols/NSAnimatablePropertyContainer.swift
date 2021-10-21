import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAnimatablePropertyContainerExports: JSExport {
  var animations: [String: Any] { @objc get @objc (setAnimations:) set }
  @objc (animationForKey:) @available(OSX 10.5, *) func animation(forKey: NSAnimatablePropertyKey) -> Any?
  @objc @available(OSX 10.5, *) func animator() -> NSAnimatablePropertyContainer
}

