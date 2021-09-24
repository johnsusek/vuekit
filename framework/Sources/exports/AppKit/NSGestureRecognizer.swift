import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSGestureRecognizerExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Instance Methods
	@objc (canBePreventedByGestureRecognizer:) func canBePrevented(by: NSGestureRecognizer) -> Bool
	@objc (canPreventGestureRecognizer:) func canPrevent(_: NSGestureRecognizer) -> Bool
	@objc (flagsChanged:) func flagsChanged(with: NSEvent)
	@objc (keyDown:) func keyDown(with: NSEvent)
	@objc (keyUp:) func keyUp(with: NSEvent)
	@objc (locationInView:) func location(in: NSView?) -> NSPoint
	@objc (magnifyWithEvent:) func magnify(with: NSEvent)
	@objc (mouseDown:) func mouseDown(with: NSEvent)
	@objc (mouseDragged:) func mouseDragged(with: NSEvent)
	@objc (mouseUp:) func mouseUp(with: NSEvent)
	@objc (otherMouseDown:) func otherMouseDown(with: NSEvent)
	@objc (otherMouseDragged:) func otherMouseDragged(with: NSEvent)
	@objc (otherMouseUp:) func otherMouseUp(with: NSEvent)
	@objc (pressureChangeWithEvent:) @available(OSX 10.10.3, *) func pressureChange(with: NSEvent)
	@objc func reset()
	@objc (rightMouseDown:) func rightMouseDown(with: NSEvent)
	@objc (rightMouseDragged:) func rightMouseDragged(with: NSEvent)
	@objc (rightMouseUp:) func rightMouseUp(with: NSEvent)
	@objc (rotateWithEvent:) func rotate(with: NSEvent)
	@objc (shouldBeRequiredToFailByGestureRecognizer:) func shouldBeRequiredToFail(by: NSGestureRecognizer) -> Bool
	@objc (shouldRequireFailureOfGestureRecognizer:) func shouldRequireFailure(of: NSGestureRecognizer) -> Bool
	@objc (tabletPoint:) func tabletPoint(with: NSEvent)
	@objc (touchesBeganWithEvent:) @available(OSX 10.12.2, *) func touchesBegan(with: NSEvent)
	@objc (touchesCancelledWithEvent:) @available(OSX 10.12.2, *) func touchesCancelled(with: NSEvent)
	@objc (touchesEndedWithEvent:) @available(OSX 10.12.2, *) func touchesEnded(with: NSEvent)
	@objc (touchesMovedWithEvent:) @available(OSX 10.12.2, *) func touchesMoved(with: NSEvent)

	// Own Instance Properties
	@objc var action: Selector? { @objc get @objc (setAction:) set }
	@objc @available(OSX 10.12.2, *) var allowedTouchTypes: NSTouch.TouchTypeMask { @objc get @objc (setAllowedTouchTypes:) set }
	@objc var delaysKeyEvents: Bool { @objc get @objc (setDelaysKeyEvents:) set }
	@objc var delaysMagnificationEvents: Bool { @objc get @objc (setDelaysMagnificationEvents:) set }
	@objc var delaysOtherMouseButtonEvents: Bool { @objc get @objc (setDelaysOtherMouseButtonEvents:) set }
	@objc var delaysPrimaryMouseButtonEvents: Bool { @objc get @objc (setDelaysPrimaryMouseButtonEvents:) set }
	@objc var delaysRotationEvents: Bool { @objc get @objc (setDelaysRotationEvents:) set }
	@objc var delaysSecondaryMouseButtonEvents: Bool { @objc get @objc (setDelaysSecondaryMouseButtonEvents:) set }
	@objc var delegate: NSGestureRecognizerDelegate? { @objc get @objc (setDelegate:) set }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc @available(OSX 10.11, *) var pressureConfiguration: NSPressureConfiguration { @objc get @objc (setPressureConfiguration:) set }
	@objc var state: NSGestureRecognizer.State { @objc get @objc (setState:) set }
	@objc var target: AnyObject? { @objc get @objc (setTarget:) set }
	@objc var view: NSView? { @objc get }

	// Constructors
	@objc static func create() -> NSGestureRecognizer
}

extension NSGestureRecognizer: NSGestureRecognizerExports {
	@objc class func create() -> NSGestureRecognizer {
		return NSGestureRecognizer(target: nil, action: nil)
	}

}
