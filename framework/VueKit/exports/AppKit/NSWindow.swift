import AppKit
import JavaScriptCore

@objc protocol NSWindowExports: JSExport {
	@objc (contentRectForFrameRect:styleMask:) static func contentRect(forFrameRect: NSRect, styleMask: NSWindow.StyleMask) -> NSRect
	@objc (frameRectForContentRect:styleMask:) static func frameRect(forContentRect: NSRect, styleMask: NSWindow.StyleMask) -> NSRect
	@objc (minFrameWidthWithTitle:styleMask:) static func minFrameWidth(withTitle: String, styleMask: NSWindow.StyleMask) -> CGFloat
	@objc (removeFrameUsingName:) static func removeFrame(usingName: NSWindow.FrameAutosaveName)
	@objc (standardWindowButton:forStyleMask:) static func standardWindowButton(_: NSWindow.ButtonType, `for`: NSWindow.StyleMask) -> NSButton?
	@objc (windowNumberAtPoint:belowWindowWithWindowNumber:) @available(OSX 10.6, *) static func windowNumber(at: NSPoint, belowWindowWithWindowNumber: Int) -> Int
	@objc (windowNumbersWithOptions:) @available(OSX 10.6, *) static func windowNumbers(options: NSWindow.NumberListOptions) -> [NSNumber]?
	@objc var acceptsMouseMovedEvents: Bool { @objc get @objc (setAcceptsMouseMovedEvents:) set }
	@objc @available(OSX 10.6, *) var allowsConcurrentViewDrawing: Bool { @objc get @objc (setAllowsConcurrentViewDrawing:) set }
	@objc var allowsToolTipsWhenApplicationIsInactive: Bool { @objc get @objc (setAllowsToolTipsWhenApplicationIsInactive:) set }
	@objc var alphaValue: CGFloat { @objc get @objc (setAlphaValue:) set }
	@objc @available(OSX 10.7, *) var animationBehavior: NSWindow.AnimationBehavior { @objc get @objc (setAnimationBehavior:) set }
	@objc @available(OSX 10.14, *) var appearanceSource: NSAppearanceCustomization! { @objc get @objc (setAppearanceSource:) set }
	@objc var areCursorRectsEnabled: Bool { @objc get }
	@objc var aspectRatio: NSSize { @objc get @objc (setAspectRatio:) set }
	@objc var attachedSheet: NSWindow? { @objc get }
	@objc var autorecalculatesKeyViewLoop: Bool { @objc get @objc (setAutorecalculatesKeyViewLoop:) set }
	@objc var backgroundColor: NSColor! { @objc get @objc (setBackgroundColor:) set }
	@objc @available(OSX 10.7, *) var backingScaleFactor: CGFloat { @objc get }
	@objc var backingType: NSWindow.BackingStoreType { @objc get @objc (setBackingType:) set }
	@objc var canBecomeKey: Bool { @objc (canBecomeKeyWindow) get }
	@objc var canBecomeMain: Bool { @objc (canBecomeMainWindow) get }
	@objc @available(OSX 10.5, *) var canBecomeVisibleWithoutLogin: Bool { @objc get @objc (setCanBecomeVisibleWithoutLogin:) set }
	@objc var canHide: Bool { @objc get @objc (setCanHide:) set }
	@objc var childWindows: [NSWindow]? { @objc get }
	@objc @available(OSX 10.5, *) var collectionBehavior: NSWindow.CollectionBehavior { @objc get @objc (setCollectionBehavior:) set }
	@objc @available(OSX 10.6, *) var colorSpace: NSColorSpace? { @objc get @objc (setColorSpace:) set }
	@objc var contentAspectRatio: NSSize { @objc get @objc (setContentAspectRatio:) set }
	@objc @available(OSX 10.10, *) var contentLayoutGuide: Any? { @objc get }
	@objc @available(OSX 10.10, *) var contentLayoutRect: NSRect { @objc get }
	@objc var contentMaxSize: NSSize { @objc get @objc (setContentMaxSize:) set }
	@objc var contentMinSize: NSSize { @objc get @objc (setContentMinSize:) set }
	@objc var contentResizeIncrements: NSSize { @objc get @objc (setContentResizeIncrements:) set }
	@objc var contentView: NSView? { @objc get @objc (setContentView:) set }
	@objc @available(OSX 10.10, *) var contentViewController: NSViewController? { @objc get @objc (setContentViewController:) set }
	@objc var currentEvent: NSEvent? { @objc get }
	@objc var deepestScreen: NSScreen? { @objc get }
	@objc var defaultButtonCell: NSButtonCell? { @objc get @objc (setDefaultButtonCell:) set }
	@objc var delegate: NSWindowDelegate? { @objc get @objc (setDelegate:) set }
	@objc var depthLimit: NSWindow.Depth { @objc get @objc (setDepthLimit:) set }
	@objc var deviceDescription: [NSDeviceDescriptionKey: Any] { @objc get }
	@objc var displaysWhenScreenProfileChanges: Bool { @objc get @objc (setDisplaysWhenScreenProfileChanges:) set }
	@objc @available(OSX 10.5, *) var dockTile: NSDockTile { @objc get }
	@objc var isDocumentEdited: Bool { @objc get @objc (setDocumentEdited:) set }
	@objc var isExcludedFromWindowsMenu: Bool { @objc get @objc (setExcludedFromWindowsMenu:) set }
	@objc var firstResponder: NSResponder? { @objc get }
	@objc var isFloatingPanel: Bool { @objc get }
	@objc var frame: NSRect { @objc get }
	@objc var frameAutosaveName: NSWindow.FrameAutosaveName { @objc get }
	@objc var hasCloseBox: Bool { @objc get }
	@objc var hasDynamicDepthLimit: Bool { @objc get }
	@objc var hasShadow: Bool { @objc get @objc (setHasShadow:) set }
	@objc var hasTitleBar: Bool { @objc get }
	@objc var hidesOnDeactivate: Bool { @objc get @objc (setHidesOnDeactivate:) set }
	@objc var ignoresMouseEvents: Bool { @objc get @objc (setIgnoresMouseEvents:) set }
	@objc @available(OSX 10.6, *) var inLiveResize: Bool { @objc get }
	@objc var initialFirstResponder: NSView? { @objc get @objc (setInitialFirstResponder:) set }
	@objc var keyViewSelectionDirection: NSWindow.SelectionDirection { @objc get }
	@objc var isKeyWindow: Bool { @objc get }
	@objc var level: NSWindow.Level { @objc get @objc (setLevel:) set }
	@objc var isMainWindow: Bool { @objc get }
	@objc @available(OSX 10.11, *) var maxFullScreenContentSize: NSSize { @objc get @objc (setMaxFullScreenContentSize:) set }
	@objc var maxSize: NSSize { @objc get @objc (setMaxSize:) set }
	@objc @available(OSX 10.11, *) var minFullScreenContentSize: NSSize { @objc get @objc (setMinFullScreenContentSize:) set }
	@objc var minSize: NSSize { @objc get @objc (setMinSize:) set }
	@objc var isMiniaturizable: Bool { @objc get }
	@objc var isMiniaturized: Bool { @objc get }
	@objc var miniwindowImage: NSImage? { @objc get @objc (setMiniwindowImage:) set }
	@objc var miniwindowTitle: String! { @objc get @objc (setMiniwindowTitle:) set }
	@objc var isModalPanel: Bool { @objc get }
	@objc var mouseLocationOutsideOfEventStream: NSPoint { @objc get }
	@objc @available(OSX 10.6, *) var isMovable: Bool { @objc get @objc (setMovable:) set }
	@objc var isMovableByWindowBackground: Bool { @objc get @objc (setMovableByWindowBackground:) set }
	@objc @available(OSX 10.9, *) var occlusionState: NSWindow.OcclusionState { @objc get }
	@objc @available(OSX 10.6, *) var isOnActiveSpace: Bool { @objc get }
	@objc var isOpaque: Bool { @objc get @objc (setOpaque:) set }
	@objc var orderedIndex: Int { @objc get @objc (setOrderedIndex:) set }
	@objc var parent: NSWindow? { @objc (parentWindow) get @objc (setParentWindow:) set }
	@objc var preservesContentDuringLiveResize: Bool { @objc get @objc (setPreservesContentDuringLiveResize:) set }
	@objc @available(OSX 10.6, *) var preventsApplicationTerminationWhenModal: Bool { @objc get @objc (setPreventsApplicationTerminationWhenModal:) set }
	@objc var isReleasedWhenClosed: Bool { @objc get @objc (setReleasedWhenClosed:) set }
	@objc var representedFilename: String { @objc get @objc (setRepresentedFilename:) set }
	@objc @available(OSX 10.5, *) var representedURL: URL? { @objc get @objc (setRepresentedURL:) set }
	@objc var isResizable: Bool { @objc get }
	@objc var resizeFlags: NSEvent.ModifierFlags { @objc get }
	@objc var resizeIncrements: NSSize { @objc get @objc (setResizeIncrements:) set }
	@objc @available(OSX 10.7, *) var isRestorable: Bool { @objc get @objc (setRestorable:) set }
	@objc @available(OSX 10.7, *) var restorationClass: NSWindowRestoration.Type? { @objc get @objc (setRestorationClass:) set }
	@objc var screen: NSScreen? { @objc get }
	@objc @available(OSX 10.5, *) var sharingType: NSWindow.SharingType { @objc get @objc (setSharingType:) set }
	@objc var isSheet: Bool { @objc get }
	@objc @available(OSX 10.9, *) var sheetParent: NSWindow? { @objc get }
	@objc @available(OSX 10.9, *) var sheets: [NSWindow] { @objc get }
	@objc var showsResizeIndicator: Bool { @objc get @objc (setShowsResizeIndicator:) set }
	@objc var showsToolbarButton: Bool { @objc get @objc (setShowsToolbarButton:) set }
	@objc var frameDescriptor: NSWindow.PersistableFrameDescriptor { @objc (stringWithSavedFrame) get }
	@objc var styleMask: NSWindow.StyleMask { @objc get @objc (setStyleMask:) set }
	@objc @available(OSX 10.13, *) var tab: NSWindowTab { @objc get }
	@objc @available(OSX 10.13, *) var tabGroup: NSWindowTabGroup? { @objc get }
	@objc @available(OSX 10.12, *) var tabbedWindows: [NSWindow]? { @objc get }
	@objc @available(OSX 10.12, *) var tabbingIdentifier: NSWindow.TabbingIdentifier { @objc get @objc (setTabbingIdentifier:) set }
	@objc @available(OSX 10.12, *) var tabbingMode: NSWindow.TabbingMode { @objc get @objc (setTabbingMode:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }
	@objc @available(OSX 10.10, *) var titleVisibility: NSWindow.TitleVisibility { @objc get @objc (setTitleVisibility:) set }
	@objc @available(OSX 10.10, *) var titlebarAccessoryViewControllers: [NSTitlebarAccessoryViewController] { @objc get @objc (setTitlebarAccessoryViewControllers:) set }
	@objc @available(OSX 10.10, *) var titlebarAppearsTransparent: Bool { @objc get @objc (setTitlebarAppearsTransparent:) set }
	@objc var toolbar: NSToolbar? { @objc get @objc (setToolbar:) set }
	@objc var viewsNeedDisplay: Bool { @objc get @objc (setViewsNeedDisplay:) set }
	@objc var isVisible: Bool { @objc get }
	@objc var windowController: NSWindowController? { @objc get @objc (setWindowController:) set }
	@objc var windowNumber: Int { @objc get }
	@objc var windowRef: UnsafeMutableRawPointer { @objc get }
	@objc @available(OSX 10.12, *) var windowTitlebarLayoutDirection: NSUserInterfaceLayoutDirection { @objc get }
	@objc var worksWhenModal: Bool { @objc get }
	@objc var isZoomable: Bool { @objc get }
	@objc var isZoomed: Bool { @objc get }
	@objc @available(OSX 10.12, *) static var allowsAutomaticWindowTabbing: Bool { @objc get @objc (setAllowsAutomaticWindowTabbing:) set }
	@objc static var defaultDepthLimit: NSWindow.Depth { @objc get }
	@objc @available(OSX 10.12, *) static var userTabbingPreference: NSWindow.UserTabbingPreference { @objc get }
	@objc func addChildWindow(_: NSWindow, ordered: NSWindow.OrderingMode)
	@objc @available(OSX 10.12, *) func addTabbedWindow(_: NSWindow, ordered: NSWindow.OrderingMode)
	@objc @available(OSX 10.10, *) func addTitlebarAccessoryViewController(_: NSTitlebarAccessoryViewController)
	@objc (anchorAttributeForOrientation:) func anchorAttribute(`for`: NSLayoutConstraint.Orientation) -> NSLayoutConstraint.Attribute
	@objc func animationResizeTime(_: NSRect) -> TimeInterval
	@objc (autorecalculatesContentBorderThicknessForEdge:) @available(OSX 10.5, *) func autorecalculatesContentBorderThickness(`for`: NSRectEdge) -> Bool
	@objc @available(OSX 10.7, *) func backingAlignedRect(_: NSRect, options: AlignmentOptions) -> NSRect
	@objc (becomeKeyWindow) func becomeKey()
	@objc (becomeMainWindow) func becomeMain()
	// @objc @available(OSX 10.9, *) func beginCriticalSheet(_: NSWindow, completionHandler: JSManagedValue /* void (^ _Nullable)(NSModalResponse): Void */?)
	// @objc @available(OSX 10.9, *) func beginSheet(_: NSWindow, completionHandler: JSManagedValue /* void (^ _Nullable)(NSModalResponse): Void */?)
	@objc (canRepresentDisplayGamut:) @available(OSX 10.12, *) func canRepresent(_: NSDisplayGamut) -> Bool
	@objc (cascadeTopLeftFromPoint:) func cascadeTopLeft(from: NSPoint) -> NSPoint
	@objc func center()
	@objc func close()
	@objc (constrainFrameRect:toScreen:) func constrainFrameRect(_: NSRect, to: NSScreen?) -> NSRect
	@objc (contentBorderThicknessForEdge:) @available(OSX 10.5, *) func contentBorderThickness(`for`: NSRectEdge) -> CGFloat
	@objc (contentRectForFrameRect:) func contentRect(forFrameRect: NSRect) -> NSRect
	@objc @available(OSX 10.14, *) func convertPointFromBacking(_: NSPoint) -> NSPoint
	@objc (convertPointFromScreen:) @available(OSX 10.12, *) func convertPoint(fromScreen: NSPoint) -> NSPoint
	@objc @available(OSX 10.14, *) func convertPointToBacking(_: NSPoint) -> NSPoint
	@objc (convertPointToScreen:) @available(OSX 10.12, *) func convertPoint(toScreen: NSPoint) -> NSPoint
	@objc (convertRectFromBacking:) @available(OSX 10.7, *) func convertFromBacking(_: NSRect) -> NSRect
	@objc (convertRectFromScreen:) @available(OSX 10.7, *) func convertFromScreen(_: NSRect) -> NSRect
	@objc (convertRectToBacking:) @available(OSX 10.7, *) func convertToBacking(_: NSRect) -> NSRect
	@objc (convertRectToScreen:) @available(OSX 10.7, *) func convertToScreen(_: NSRect) -> NSRect
	@objc (dataWithEPSInsideRect:) func dataWithEPS(inside: NSRect) -> Data
	@objc (dataWithPDFInsideRect:) func dataWithPDF(inside: NSRect) -> Data
	@objc func deminiaturize(_: Any?)
	@objc func disableCursorRects()
	@objc func disableKeyEquivalentForDefaultButtonCell()
	@objc func disableScreenUpdatesUntilFlush()
	@objc func disableSnapshotRestoration()
	@objc func discardCursorRects()
	@objc (discardEventsMatchingMask:beforeEvent:) func discardEvents(matching: NSEvent.EventTypeMask, before: NSEvent?)
	@objc func display()
	@objc func displayIfNeeded()
	@objc (dragImage:at:offset:event:pasteboard:source:slideBack:) func drag(_: NSImage, at: NSPoint, offset: NSSize, event: NSEvent, pasteboard: NSPasteboard, source: Any, slideBack: Bool)
	@objc func enableCursorRects()
	@objc func enableKeyEquivalentForDefaultButtonCell()
	@objc func enableSnapshotRestoration()
	@objc (endEditingFor:) func endEditing(`for`: Any?)
	@objc @available(OSX 10.9, *) func endSheet(_: NSWindow)
	@objc @available(OSX 10.9, *) func endSheet(_: NSWindow, returnCode: NSApplication.ModalResponse)
	@objc (fieldEditor:forObject:) func fieldEditor(_: Bool, `for`: Any?) -> NSText?
	@objc (frameRectForContentRect:) func frameRect(forContentRect: NSRect) -> NSRect
	@objc (handleCloseScriptCommand:) func handleClose(_: NSCloseCommand) -> Any?
	@objc (handlePrintScriptCommand:) func handlePrint(_: NSScriptCommand) -> Any?
	@objc (handleSaveScriptCommand:) func handleSave(_: NSScriptCommand) -> Any?
	@objc (insertTitlebarAccessoryViewController:atIndex:) @available(OSX 10.10, *) func insertTitlebarAccessoryViewController(_: NSTitlebarAccessoryViewController, at: Int)
	@objc (invalidateCursorRectsForView:) func invalidateCursorRects(`for`: NSView)
	@objc func invalidateShadow()
	@objc @available(OSX 10.7, *) func layoutIfNeeded()
	@objc func makeFirstResponder(_: NSResponder?) -> Bool
	@objc func makeKeyAndOrderFront(_: Any?)
	@objc (makeKeyWindow) func makeKey()
	@objc (makeMainWindow) func makeMain()
	@objc @available(OSX 10.12, *) func mergeAllWindows(_: Any?)
	@objc func miniaturize(_: Any?)
	@objc @available(OSX 10.12, *) func moveTabToNewWindow(_: Any?)
	@objc (nextEventMatchingMask:) func nextEvent(matching: NSEvent.EventTypeMask) -> NSEvent?
	@objc (nextEventMatchingMask:untilDate:inMode:dequeue:) func nextEvent(matching: NSEvent.EventTypeMask, until: Date?, inMode: RunLoop.Mode, dequeue: Bool) -> NSEvent?
	@objc func orderBack(_: Any?)
	@objc func orderFront(_: Any?)
	@objc func orderFrontRegardless()
	@objc func orderOut(_: Any?)
	@objc (orderWindow:relativeTo:) func order(_: NSWindow.OrderingMode, relativeTo: Int)
	@objc func performClose(_: Any?)
	@objc func performMiniaturize(_: Any?)
	@objc (performWindowDragWithEvent:) @available(OSX 10.11, *) func performDrag(with: NSEvent)
	@objc func performZoom(_: Any?)
	@objc (postEvent:atStart:) func postEvent(_: NSEvent, atStart: Bool)
	@objc (print:) func printWindow(_: Any?)
	@objc func recalculateKeyViewLoop()
	@objc (registerForDraggedTypes:) func registerForDraggedTypes(_: [NSPasteboard.PasteboardType])
	@objc func removeChildWindow(_: NSWindow)
	@objc (removeTitlebarAccessoryViewControllerAtIndex:) @available(OSX 10.10, *) func removeTitlebarAccessoryViewController(at: Int)
	@objc func resetCursorRects()
	@objc (resignKeyWindow) func resignKey()
	@objc (resignMainWindow) func resignMain()
	@objc func runToolbarCustomizationPalette(_: Any?)
	@objc (saveFrameUsingName:) func saveFrame(usingName: NSWindow.FrameAutosaveName)
	@objc (selectKeyViewFollowingView:) func selectKeyView(following: NSView)
	@objc (selectKeyViewPrecedingView:) func selectKeyView(preceding: NSView)
	@objc func selectNextKeyView(_: Any?)
	@objc @available(OSX 10.12, *) func selectNextTab(_: Any?)
	@objc func selectPreviousKeyView(_: Any?)
	@objc @available(OSX 10.12, *) func selectPreviousTab(_: Any?)
	@objc (sendEvent:) func sendEvent(_: NSEvent)
	@objc (setAnchorAttribute:forOrientation:) func setAnchorAttribute(_: NSLayoutConstraint.Attribute, `for`: NSLayoutConstraint.Orientation)
	@objc (setAutorecalculatesContentBorderThickness:forEdge:) @available(OSX 10.5, *) func setAutorecalculatesContentBorderThickness(_: Bool, `for`: NSRectEdge)
	@objc (setContentBorderThickness:forEdge:) @available(OSX 10.5, *) func setContentBorderThickness(_: CGFloat, `for`: NSRectEdge)
	@objc func setContentSize(_: NSSize)
	@objc func setDynamicDepthLimit(_: Bool)
	@objc func setFrame(_: NSRect, display: Bool)
	@objc func setFrame(_: NSRect, display: Bool, animate: Bool)
	@objc func setFrameAutosaveName(_: NSWindow.FrameAutosaveName) -> Bool
	@objc (setFrameFromString:) func setFrame(from: NSWindow.PersistableFrameDescriptor)
	@objc func setFrameOrigin(_: NSPoint)
	@objc func setFrameTopLeftPoint(_: NSPoint)
	@objc func setFrameUsingName(_: NSWindow.FrameAutosaveName) -> Bool
	@objc func setFrameUsingName(_: NSWindow.FrameAutosaveName, force: Bool) -> Bool
	@objc func setIsMiniaturized(_: Bool)
	@objc func setIsVisible(_: Bool)
	@objc func setIsZoomed(_: Bool)
	@objc func setTitleWithRepresentedFilename(_: String)
	@objc func standardWindowButton(_: NSWindow.ButtonType) -> NSButton?
	@objc @available(OSX 10.7, *) func toggleFullScreen(_: Any?)
	@objc @available(OSX 10.12, *) func toggleTabBar(_: Any?)
	@objc @available(OSX 10.13, *) func toggleTabOverview(_: Any?)
	@objc func toggleToolbarShown(_: Any?)
	// @objc (trackEventsMatchingMask:timeout:mode:handler:) @available(OSX 10.10, *) func trackEvents(matching: NSEvent.EventTypeMask, timeout: TimeInterval, mode: RunLoop.Mode, handler: JSManagedValue /* NSEvent, UnsafeMutablePointer<Bool>: Void */?)
	@objc func unregisterDraggedTypes()
	@objc func update()
	@objc @available(OSX 10.7, *) func updateConstraintsIfNeeded()
	@objc @available(OSX 10.7, *) func visualizeConstraints(_: [NSLayoutConstraint]?)
	@objc func zoom(_: Any?)
	@objc @available(OSX 10.10, *) static func create(contentViewController: NSViewController) -> Window
	@objc static func create(contentRect: NSRect, styleMask: NSWindow.StyleMask, backing: NSWindow.BackingStoreType, `defer`: Bool) -> Window
	@objc static func create(contentRect: NSRect, styleMask: NSWindow.StyleMask, backing: NSWindow.BackingStoreType, `defer`: Bool, screen: NSScreen?) -> Window
	@objc static func create(windowRef: UnsafeMutableRawPointer) -> Window?
	@objc static func create() -> Window
}

class Window: NSWindow, NSWindowExports {
	@objc @available(OSX 10.10, *) class func create(contentViewController: NSViewController) -> Window {
		return Window(contentViewController: contentViewController)
	}

	@objc class func create(contentRect: NSRect, styleMask: NSWindow.StyleMask, backing: NSWindow.BackingStoreType, `defer`: Bool) -> Window {
		return Window(contentRect: contentRect, styleMask: styleMask, backing: backing, `defer`: `defer`)
	}

	@objc class func create(contentRect: NSRect, styleMask: NSWindow.StyleMask, backing: NSWindow.BackingStoreType, `defer`: Bool, screen: NSScreen?) -> Window {
		return Window(contentRect: contentRect, styleMask: styleMask, backing: backing, `defer`: `defer`, screen: screen)
	}

	@objc class func create(windowRef: UnsafeMutableRawPointer) -> Window? {
		return Window(windowRef: windowRef)
	}

	@objc override class func create() -> Window {
		return Window()
	}
}
