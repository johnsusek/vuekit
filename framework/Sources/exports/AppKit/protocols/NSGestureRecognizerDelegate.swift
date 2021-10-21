import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSGestureRecognizerDelegateExports: JSExport, NSObjectExports {
  @objc (gestureRecognizer:shouldAttemptToRecognizeWithEvent:) @available(OSX 10.11, *) func gestureRecognizer(_: NSGestureRecognizer, shouldAttemptToRecognizeWith: NSEvent) -> Bool
  @objc (gestureRecognizer:shouldRecognizeSimultaneouslyWithGestureRecognizer:) func gestureRecognizer(_: NSGestureRecognizer, shouldRecognizeSimultaneouslyWith: NSGestureRecognizer) -> Bool
  @objc (gestureRecognizer:shouldRequireFailureOfGestureRecognizer:) func gestureRecognizer(_: NSGestureRecognizer, shouldRequireFailureOf: NSGestureRecognizer) -> Bool
  @objc (gestureRecognizer:shouldBeRequiredToFailByGestureRecognizer:) func gestureRecognizer(_: NSGestureRecognizer, shouldBeRequiredToFailBy: NSGestureRecognizer) -> Bool
  @objc (gestureRecognizer:shouldReceiveTouch:) @available(OSX 10.12.2, *) func gestureRecognizer(_: NSGestureRecognizer, shouldReceive: NSTouch) -> Bool
  @objc func gestureRecognizerShouldBegin(_: NSGestureRecognizer) -> Bool
}

