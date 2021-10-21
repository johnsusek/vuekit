import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSScrubberDataSourceExports: JSExport, NSObjectExports {
  @objc (numberOfItemsForScrubber:) @available(OSX 10.12.2, *) func numberOfItems(`for`: NSScrubber) -> Int
  @objc (scrubber:viewForItemAtIndex:) @available(OSX 10.12.2, *) func scrubber(_: NSScrubber, viewForItemAt: Int) -> NSScrubberItemView
}

