import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSplitViewDelegateExports: JSExport, NSObjectExports {
  @objc (splitView:shouldHideDividerAtIndex:) @available(OSX 10.5, *) func splitView(_: NSSplitView, shouldHideDividerAt: Int) -> Bool
  @objc (splitView:effectiveRect:forDrawnRect:ofDividerAtIndex:) @available(OSX 10.5, *) func splitView(_: NSSplitView, effectiveRect: NSRect, forDrawnRect: NSRect, ofDividerAt: Int) -> NSRect
  @objc (splitView:additionalEffectiveRectOfDividerAtIndex:) @available(OSX 10.5, *) func splitView(_: NSSplitView, additionalEffectiveRectOfDividerAt: Int) -> NSRect
  @objc func splitView(_: NSSplitView, canCollapseSubview: NSView) -> Bool
  @objc func splitView(_: NSSplitView, constrainMaxCoordinate: Float, ofSubviewAt: Int) -> CGFloat
  @objc func splitView(_: NSSplitView, constrainMinCoordinate: Float, ofSubviewAt: Int) -> CGFloat
  @objc func splitView(_: NSSplitView, constrainSplitPosition: Float, ofSubviewAt: Int) -> CGFloat
  @objc func splitView(_: NSSplitView, resizeSubviewsWithOldSize: NSSize)
  @objc @available(OSX 10.6, *) func splitView(_: NSSplitView, shouldAdjustSizeOfSubview: NSView) -> Bool
  @objc func splitViewDidResizeSubviews(_: Notification)
  @objc func splitViewWillResizeSubviews(_: Notification)
}

