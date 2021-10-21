import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSeguePerformingExports: JSExport, NSObjectExports {
  @objc (performSegueWithIdentifier:sender:) @available(OSX 10.10, *) func performSegue(withIdentifier: NSStoryboardSegue.Identifier, sender: Any?)
  @objc (prepareForSegue:sender:) @available(OSX 10.10, *) func prepare(`for`: NSStoryboardSegue, sender: Any?)
  @objc (shouldPerformSegueWithIdentifier:sender:) @available(OSX 10.10, *) func shouldPerformSegue(withIdentifier: NSStoryboardSegue.Identifier, sender: Any?) -> Bool
}

