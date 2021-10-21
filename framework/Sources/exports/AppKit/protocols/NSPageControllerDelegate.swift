import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSPageControllerDelegateExports: JSExport, NSObjectExports {
  @objc (pageController:identifierForObject:) func pageController(_: NSPageController, identifierFor: Any) -> NSPageController.ObjectIdentifier
  @objc (pageController:frameForObject:) func pageController(_: NSPageController, frameFor: Any?) -> NSRect
  @objc (pageController:prepareViewController:withObject:) func pageController(_: NSPageController, prepare: NSViewController, with: Any?)
  @objc (pageController:didTransitionToObject:) func pageController(_: NSPageController, didTransitionTo: Any)
  @objc func pageController(_: NSPageController, viewControllerForIdentifier: NSPageController.ObjectIdentifier) -> NSViewController
  @objc func pageControllerDidEndLiveTransition(_: NSPageController)
  @objc func pageControllerWillStartLiveTransition(_: NSPageController)
}

