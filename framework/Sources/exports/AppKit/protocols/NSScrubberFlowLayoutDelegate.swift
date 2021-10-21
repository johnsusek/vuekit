import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSScrubberFlowLayoutDelegateExports: JSExport, NSScrubberDelegateExports {
  @objc (scrubber:layout:sizeForItemAtIndex:) func scrubber(_: NSScrubber, layout: NSScrubberFlowLayout, sizeForItemAt: Int) -> NSSize
}

