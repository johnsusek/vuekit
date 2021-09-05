import AppKit
import JavaScriptCore

@objc protocol NSResponderExports: JSExport {
	@objc var acceptsFirstResponder: Bool { @objc get }
	@objc var menu: NSMenu? { @objc get @objc (setMenu:) set }
	@objc var nextResponder: NSResponder? { @objc get @objc (setNextResponder:) set }
	@objc @available(OSX 10.12.2, *) var touchBar: NSTouchBar? { @objc get @objc (setTouchBar:) set }
	@objc var undoManager: UndoManager? { @objc get }
	@objc @available(OSX 10.10, *) var userActivity: NSUserActivity? { @objc get @objc (setUserActivity:) set }
	@objc @available(OSX 10.7, *) static var restorableStateKeyPaths: [String] { @objc get }
	@objc func becomeFirstResponder() -> Bool
	@objc (beginGestureWithEvent:) @available(OSX 10.5, *) func beginGesture(with: NSEvent)
	@objc (changeModeWithEvent:) @available(OSX 10.15, *) func changeMode(with: NSEvent)
	@objc (cursorUpdate:) @available(OSX 10.5, *) func cursorUpdate(with: NSEvent)
	@objc (encodeRestorableStateWithCoder:) @available(OSX 10.7, *) func encodeRestorableState(with: NSCoder)
	@objc (encodeRestorableStateWithCoder:backgroundQueue:) @available(OSX 10.13, *) func encodeRestorableState(with: NSCoder, backgroundQueue: OperationQueue)
	@objc (endGestureWithEvent:) @available(OSX 10.5, *) func endGesture(with: NSEvent)
	@objc (flagsChanged:) func flagsChanged(with: NSEvent)
	@objc func flushBufferedKeyEvents()
	@objc func helpRequested(_: NSEvent)
	@objc func interpretKeyEvents(_: [NSEvent])
	@objc @available(OSX 10.7, *) func invalidateRestorableState()
	@objc (keyDown:) func keyDown(with: NSEvent)
	@objc (keyUp:) func keyUp(with: NSEvent)
	@objc (magnifyWithEvent:) @available(OSX 10.5, *) func magnify(with: NSEvent)
	@objc @available(OSX 10.12.2, *) func makeTouchBar() -> NSTouchBar?
	@objc (mouseDown:) func mouseDown(with: NSEvent)
	@objc (mouseDragged:) func mouseDragged(with: NSEvent)
	@objc (mouseEntered:) func mouseEntered(with: NSEvent)
	@objc (mouseExited:) func mouseExited(with: NSEvent)
	@objc (mouseMoved:) func mouseMoved(with: NSEvent)
	@objc (mouseUp:) func mouseUp(with: NSEvent)
	@objc @available(OSX 10.12, *) func newWindowForTab(_: Any?)
	@objc (noResponderFor:) func noResponder(`for`: Selector)
	@objc (otherMouseDown:) func otherMouseDown(with: NSEvent)
	@objc (otherMouseDragged:) func otherMouseDragged(with: NSEvent)
	@objc (otherMouseUp:) func otherMouseUp(with: NSEvent)
	@objc (performKeyEquivalent:) func performKeyEquivalent(with: NSEvent) -> Bool
	@objc @available(OSX 10.7, *) func performTextFinderAction(_: Any?)
	@objc func presentError(_: Error) -> Bool
	@objc (presentError:modalForWindow:delegate:didPresentSelector:contextInfo:) func presentError(_: Error, modalFor: NSWindow, delegate: Any?, didPresent: Selector?, contextInfo: UnsafeMutableRawPointer?)
	@objc (pressureChangeWithEvent:) @available(OSX 10.10.3, *) func pressureChange(with: NSEvent)
	@objc (quickLookWithEvent:) @available(OSX 10.8, *) func quickLook(with: NSEvent)
	@objc func resignFirstResponder() -> Bool
	@objc (restoreStateWithCoder:) @available(OSX 10.7, *) func restoreState(with: NSCoder)
	@objc (rightMouseDown:) func rightMouseDown(with: NSEvent)
	@objc (rightMouseDragged:) func rightMouseDragged(with: NSEvent)
	@objc (rightMouseUp:) func rightMouseUp(with: NSEvent)
	@objc (rotateWithEvent:) @available(OSX 10.5, *) func rotate(with: NSEvent)
	@objc (scrollWheel:) func scrollWheel(with: NSEvent)
	@objc (shouldBeTreatedAsInkEvent:) func shouldBeTreatedAsInkEvent(_: NSEvent) -> Bool
	@objc func showContextHelp(_: Any?)
	@objc (smartMagnifyWithEvent:) @available(OSX 10.8, *) func smartMagnify(with: NSEvent)
	@objc (supplementalTargetForAction:sender:) @available(OSX 10.7, *) func supplementalTarget(forAction: Selector, sender: Any?) -> Any?
	@objc (swipeWithEvent:) @available(OSX 10.5, *) func swipe(with: NSEvent)
	@objc (tabletPoint:) func tabletPoint(with: NSEvent)
	@objc (tabletProximity:) func tabletProximity(with: NSEvent)
	@objc (touchesBeganWithEvent:) @available(OSX 10.6, *) func touchesBegan(with: NSEvent)
	@objc (touchesCancelledWithEvent:) @available(OSX 10.6, *) func touchesCancelled(with: NSEvent)
	@objc (touchesEndedWithEvent:) @available(OSX 10.6, *) func touchesEnded(with: NSEvent)
	@objc (touchesMovedWithEvent:) @available(OSX 10.6, *) func touchesMoved(with: NSEvent)
	@objc (tryToPerform:with:) func tryToPerform(_: Selector, with: Any?) -> Bool
	@objc @available(OSX 10.10, *) func updateUserActivityState(_: NSUserActivity)
	@objc (validRequestorForSendType:returnType:) func validRequestor(forSendType: NSPasteboard.PasteboardType?, returnType: NSPasteboard.PasteboardType?) -> Any?
	@objc (validateProposedFirstResponder:forEvent:) @available(OSX 10.7, *) func validateProposedFirstResponder(_: NSResponder, `for`: NSEvent?) -> Bool
	@objc (wantsForwardedScrollEventsForAxis:) @available(OSX 10.7, *) func wantsForwardedScrollEvents(`for`: NSEvent.GestureAxis) -> Bool
	@objc (wantsScrollEventsForSwipeTrackingOnAxis:) @available(OSX 10.7, *) func wantsScrollEventsForSwipeTracking(on: NSEvent.GestureAxis) -> Bool
	@objc func willPresentError(_: Error) -> Error
}

extension NSResponder: NSResponderExports {
	@objc override class func create() -> NSResponder {
		return NSResponder()
	}
}
