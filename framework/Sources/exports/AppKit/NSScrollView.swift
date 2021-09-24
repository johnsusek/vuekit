import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrollViewExports: JSExport, NSViewExports {
	// , NSTextFinderBarContainerExports
	// Static Methods
	@objc (contentSizeForFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:) @available(OSX 10.7, *) static func contentSize(forFrameSize: NSSize, horizontalScrollerClass: AnyClass?, verticalScrollerClass: AnyClass?, borderType: NSBorderType, controlSize: NSControl.ControlSize, scrollerStyle: NSScroller.Style) -> NSSize
	@objc (frameSizeForContentSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:) @available(OSX 10.7, *) static func frameSize(forContentSize: NSSize, horizontalScrollerClass: AnyClass?, verticalScrollerClass: AnyClass?, borderType: NSBorderType, controlSize: NSControl.ControlSize, scrollerStyle: NSScroller.Style) -> NSSize

	// Own Static Properties
	@objc static var rulerViewClass: AnyClass! { @objc get @objc (setRulerViewClass:) set }

	// Instance Methods
	@objc (addFloatingSubview:forAxis:) @available(OSX 10.9, *) func addFloatingSubview(_: NSView, `for`: NSEvent.GestureAxis)
	@objc @available(OSX 10.7, *) func flashScrollers()
	@objc (magnifyToFitRect:) @available(OSX 10.8, *) func magnify(toFit: NSRect)
	@objc (setMagnification:centeredAtPoint:) @available(OSX 10.8, *) func setMagnification(_ magnification: CGFloat, centeredAt point: NSPoint)
	@objc func tile()

	// Own Instance Properties
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
	@objc var horizontalLineScroll: CGFloat { get set }
	@objc var horizontalPageScroll: CGFloat { get set }
	@objc var horizontalRulerView: NSRulerView? { @objc get @objc (setHorizontalRulerView:) set }
	@objc @available(OSX 10.7, *) var horizontalScrollElasticity: NSScrollView.Elasticity { @objc get @objc (setHorizontalScrollElasticity:) set }
	@objc var horizontalScroller: NSScroller? { @objc get @objc (setHorizontalScroller:) set }
	@objc var lineScroll: CGFloat { get set }
	@objc @available(OSX 10.8, *) var magnification: CGFloat { get set }
	@objc @available(OSX 10.8, *) var maxMagnification: CGFloat { get set }
	@objc @available(OSX 10.8, *) var minMagnification: CGFloat { get set }
	@objc var pageScroll: CGFloat { get set }
	@objc var rulersVisible: Bool { @objc get @objc (setRulersVisible:) set }
	@objc @available(OSX 10.10, *) var scrollerInsets: NSEdgeInsets { @objc get @objc (setScrollerInsets:) set }
	@objc @available(OSX 10.7, *) var scrollerKnobStyle: NSScroller.KnobStyle { @objc get @objc (setScrollerKnobStyle:) set }
	@objc @available(OSX 10.7, *) var scrollerStyle: NSScroller.Style { @objc get @objc (setScrollerStyle:) set }
	@objc var scrollsDynamically: Bool { @objc get @objc (setScrollsDynamically:) set }
	@objc @available(OSX 10.7, *) var usesPredominantAxisScrolling: Bool { @objc get @objc (setUsesPredominantAxisScrolling:) set }
	@objc var verticalLineScroll: CGFloat { get set }
	@objc var verticalPageScroll: CGFloat { get set }
	@objc var verticalRulerView: NSRulerView? { @objc get @objc (setVerticalRulerView:) set }
	@objc @available(OSX 10.7, *) var verticalScrollElasticity: NSScrollView.Elasticity { @objc get @objc (setVerticalScrollElasticity:) set }
	@objc var verticalScroller: NSScroller? { @objc get @objc (setVerticalScroller:) set }
}

@objc protocol ScrollViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> ScrollView
}

class ScrollView: NSScrollView, ScrollViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ScrollView {
		return ScrollView()
	}

}

extension NSScrollView: NSScrollViewExports {}
