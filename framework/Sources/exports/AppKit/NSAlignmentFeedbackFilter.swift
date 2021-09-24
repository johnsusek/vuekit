import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSAlignmentFeedbackFilterExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc static var inputEventMask: NSEvent.EventTypeMask { @objc get }

	// Instance Methods
	@objc (alignmentFeedbackTokenForHorizontalMovementInView:previousX:alignedX:defaultX:) func alignmentFeedbackTokenForHorizontalMovement(in view: NSView?, previousX: CGFloat, alignedX: CGFloat, defaultX: CGFloat) -> NSAlignmentFeedbackToken?
	@objc (alignmentFeedbackTokenForMovementInView:previousPoint:alignedPoint:defaultPoint:) func alignmentFeedbackTokenForMovement(in: NSView?, previousPoint: NSPoint, alignedPoint: NSPoint, defaultPoint: NSPoint) -> NSAlignmentFeedbackToken?
	@objc (alignmentFeedbackTokenForVerticalMovementInView:previousY:alignedY:defaultY:) func alignmentFeedbackTokenForVerticalMovement(in view: NSView?, previousY: CGFloat, alignedY: CGFloat, defaultY: CGFloat) -> NSAlignmentFeedbackToken?
	@objc func performFeedback(_: [NSAlignmentFeedbackToken], performanceTime: NSHapticFeedbackManager.PerformanceTime)
	@objc (updateWithEvent:) func update(with: NSEvent)
	@objc (updateWithPanRecognizer:) func update(withPanRecognizer: NSPanGestureRecognizer)

	// Constructors
}

extension NSAlignmentFeedbackFilter: NSAlignmentFeedbackFilterExports {
}
