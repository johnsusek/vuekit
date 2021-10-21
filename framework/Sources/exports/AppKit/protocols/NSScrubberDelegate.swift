import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSScrubberDelegateExports: JSExport, NSObjectExports {
  @objc (didBeginInteractingWithScrubber:) @available(OSX 10.12.2, *) func didBeginInteracting(with: NSScrubber)
  @objc (didCancelInteractingWithScrubber:) @available(OSX 10.12.2, *) func didCancelInteracting(with: NSScrubber)
  @objc (didFinishInteractingWithScrubber:) @available(OSX 10.12.2, *) func didFinishInteracting(with: NSScrubber)
  @objc (scrubber:didSelectItemAtIndex:) @available(OSX 10.12.2, *) func scrubber(_: NSScrubber, didSelectItemAt: Int)
  @objc (scrubber:didHighlightItemAtIndex:) @available(OSX 10.12.2, *) func scrubber(_: NSScrubber, didHighlightItemAt: Int)
  @objc @available(OSX 10.12.2, *) func scrubber(_: NSScrubber, didChangeVisibleRange: NSRange)
}

