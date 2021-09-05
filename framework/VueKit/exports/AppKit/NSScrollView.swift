import AppKit
import JavaScriptCore

@objc protocol NSScrollViewExports: JSExport {
	@objc (contentSizeForFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:) @available(OSX 10.7, *) static func contentSize(forFrameSize: NSSize, horizontalScrollerClass: AnyClass?, verticalScrollerClass: AnyClass?, borderType: NSBorderType, controlSize: NSControl.ControlSize, scrollerStyle: NSScroller.Style) -> NSSize
	@objc (frameSizeForContentSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:) @available(OSX 10.7, *) static func frameSize(forContentSize: NSSize, horizontalScrollerClass: AnyClass?, verticalScrollerClass: AnyClass?, borderType: NSBorderType, controlSize: NSControl.ControlSize, scrollerStyle: NSScroller.Style) -> NSSize
	@objc @available(OSX 10.8, *) var allowsMagnification: Bool { @objc get @objc (setAllowsMagnification:) set }
	@objc var autohidesScrollers: Bool { @objc get @objc (setAutohidesScrollers:) set }
	@objc @available(OSX 10.10, *) var automaticallyAdjustsContentInsets: Bool { @objc get @objc (setAutomaticallyAdjustsContentInsets:) set }
	@objc var backgroundColor: NSColor { @objc get @objc (setBackgroundColor:) set }
	@objc var borderType: NSBorderType { @objc get @objc (setBorderType:) set }
	@objc @available(OSX 10.10, *) var contentInsets: NSEdgeInsets { @objc get @objc (setContentInsets:) set }
	@objc var contentSize: NSSize { @objc get }
	@objc var contentView: NSClipView { @objc get @objc (setContentView:) set }
	@objc var documentCursor: NSCursor? { @objc get @objc (setDocumentCursor:) set }
	@objc var documentView: NSView? { @objc get @objc (setDocumentView:) set }
	@objc var documentVisibleRect: NSRect { @objc get }
	@objc var drawsBackground: Bool { @objc get @objc (setDrawsBackground:) set }
	@objc @available(OSX 10.7, *) var findBarPosition: NSScrollView.FindBarPosition { @objc get @objc (setFindBarPosition:) set }
	@objc var hasHorizontalRuler: Bool { @objc get @objc (setHasHorizontalRuler:) set }
	@objc var hasHorizontalScroller: Bool { @objc get @objc (setHasHorizontalScroller:) set }
	@objc var hasVerticalRuler: Bool { @objc get @objc (setHasVerticalRuler:) set }
	@objc var hasVerticalScroller: Bool { @objc get @objc (setHasVerticalScroller:) set }
	@objc var horizontalLineScroll: CGFloat { @objc get @objc (setHorizontalLineScroll:) set }
	@objc var horizontalPageScroll: CGFloat { @objc get @objc (setHorizontalPageScroll:) set }
	@objc var horizontalRulerView: NSRulerView? { @objc get @objc (setHorizontalRulerView:) set }
	@objc @available(OSX 10.7, *) var horizontalScrollElasticity: NSScrollView.Elasticity { @objc get @objc (setHorizontalScrollElasticity:) set }
	@objc var horizontalScroller: NSScroller? { @objc get @objc (setHorizontalScroller:) set }
	@objc var lineScroll: CGFloat { @objc get @objc (setLineScroll:) set }
	@objc @available(OSX 10.8, *) var magnification: CGFloat { @objc get @objc (setMagnification:) set }
	@objc @available(OSX 10.8, *) var maxMagnification: CGFloat { @objc get @objc (setMaxMagnification:) set }
	@objc @available(OSX 10.8, *) var minMagnification: CGFloat { @objc get @objc (setMinMagnification:) set }
	@objc var pageScroll: CGFloat { @objc get @objc (setPageScroll:) set }
	@objc var rulersVisible: Bool { @objc get @objc (setRulersVisible:) set }
	@objc @available(OSX 10.10, *) var scrollerInsets: NSEdgeInsets { @objc get @objc (setScrollerInsets:) set }
	@objc @available(OSX 10.7, *) var scrollerKnobStyle: NSScroller.KnobStyle { @objc get @objc (setScrollerKnobStyle:) set }
	@objc @available(OSX 10.7, *) var scrollerStyle: NSScroller.Style { @objc get @objc (setScrollerStyle:) set }
	@objc var scrollsDynamically: Bool { @objc get @objc (setScrollsDynamically:) set }
	@objc @available(OSX 10.7, *) var usesPredominantAxisScrolling: Bool { @objc get @objc (setUsesPredominantAxisScrolling:) set }
	@objc var verticalLineScroll: CGFloat { @objc get @objc (setVerticalLineScroll:) set }
	@objc var verticalPageScroll: CGFloat { @objc get @objc (setVerticalPageScroll:) set }
	@objc var verticalRulerView: NSRulerView? { @objc get @objc (setVerticalRulerView:) set }
	@objc @available(OSX 10.7, *) var verticalScrollElasticity: NSScrollView.Elasticity { @objc get @objc (setVerticalScrollElasticity:) set }
	@objc var verticalScroller: NSScroller? { @objc get @objc (setVerticalScroller:) set }
	@objc static var rulerViewClass: AnyClass! { @objc get @objc (setRulerViewClass:) set }
	@objc (addFloatingSubview:forAxis:) @available(OSX 10.9, *) func addFloatingSubview(_: NSView, `for`: NSEvent.GestureAxis)
	@objc @available(OSX 10.7, *) func flashScrollers()
	@objc (magnifyToFitRect:) @available(OSX 10.8, *) func magnify(toFit: NSRect)
	@objc (setMagnification:centeredAtPoint:) @available(OSX 10.8, *) func setMagnification(_: CGFloat, centeredAt: NSPoint)
	@objc func tile()
	@objc static func create() -> ScrollView
}

class ScrollView: NSScrollView, NSScrollViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> ScrollView {
		return ScrollView()
	}
}
