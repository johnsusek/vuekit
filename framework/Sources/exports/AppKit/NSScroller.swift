import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrollerExports: JSExport, NSControlExports {
	// Static Methods
	@objc (scrollerWidthForControlSize:scrollerStyle:) @available(OSX 10.7, *) static func scrollerWidth(`for`: NSControl.ControlSize, scrollerStyle: NSScroller.Style) -> CGFloat

	// Own Static Properties
	@objc @available(OSX 10.7, *) static var isCompatibleWithOverlayScrollers: Bool { @objc get }
	@objc @available(OSX 10.7, *) static var preferredScrollerStyle: NSScroller.Style { @objc get }

	// Instance Methods
	@objc func checkSpaceForParts()
	@objc func drawKnob()
	@objc (drawKnobSlotInRect:highlight:) func drawKnobSlot(in: NSRect, highlight: Bool)
	@objc (rectForPart:) func rect(`for`: NSScroller.Part) -> NSRect
	// 	@objc @available(OSX 10.5, *) func setKnobProportion(_: Float)
	@objc func testPart(_: NSPoint) -> NSScroller.Part
	@objc (trackKnob:) func trackKnob(with: NSEvent)

	// Own Instance Properties
	@objc var hitPart: NSScroller.Part { @objc get }
	@objc var knobProportion: CGFloat { get set }
	@objc @available(OSX 10.7, *) var knobStyle: NSScroller.KnobStyle { @objc get @objc (setKnobStyle:) set }
	@objc @available(OSX 10.7, *) var scrollerStyle: NSScroller.Style { @objc get @objc (setScrollerStyle:) set }
	@objc var usableParts: NSScroller.UsableParts { @objc get }
}

@objc protocol ScrollerExports: JSExport {
	// Constructors
	@objc static func create() -> Scroller
}

class Scroller: NSScroller, ScrollerExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> Scroller {
		return Scroller()
	}

}

extension NSScroller: NSScrollerExports {}
