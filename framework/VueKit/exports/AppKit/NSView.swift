import AppKit
import JavaScriptCore

@objc protocol NSViewExports: JSExport {
	@objc @available(OSX 10.7, *) var alignmentRectInsets: NSEdgeInsets { @objc get }
	@objc @available(OSX 10.12.2, *) var allowedTouchTypes: NSTouch.TouchTypeMask { @objc get @objc (setAllowedTouchTypes:) set }
	@objc @available(OSX 10.10, *) var allowsVibrancy: Bool { @objc get }
	@objc @available(OSX 10.5, *) var alphaValue: CGFloat { @objc get @objc (setAlphaValue:) set }
	@objc var autoresizesSubviews: Bool { @objc get @objc (setAutoresizesSubviews:) set }
	@objc var autoresizingMask: NSView.AutoresizingMask { @objc get @objc (setAutoresizingMask:) set }
	@objc @available(OSX 10.5, *) var backgroundFilters: [CIFilter] { @objc get @objc (setBackgroundFilters:) set }
	@objc @available(OSX 10.7, *) var baselineOffsetFromBottom: CGFloat { @objc get }
	@objc @available(OSX 10.11, *) var bottomAnchor: NSLayoutYAxisAnchor { @objc get }
	@objc var bounds: NSRect { @objc get @objc (setBounds:) set }
	@objc var boundsRotation: CGFloat { @objc get @objc (setBoundsRotation:) set }
	@objc var canBecomeKeyView: Bool { @objc get }
	@objc @available(OSX 10.6, *) var canDrawConcurrently: Bool { @objc get @objc (setCanDrawConcurrently:) set }
	@objc @available(OSX 10.9, *) var canDrawSubviewsIntoLayer: Bool { @objc get @objc (setCanDrawSubviewsIntoLayer:) set }
	@objc @available(OSX 10.12.2, *) var candidateListTouchBarItem: NSCandidateListTouchBarItem<AnyObject>? { @objc get }
	@objc @available(OSX 10.11, *) var centerXAnchor: NSLayoutXAxisAnchor { @objc get }
	@objc @available(OSX 10.11, *) var centerYAnchor: NSLayoutYAxisAnchor { @objc get }
	@objc @available(OSX 10.5, *) var compositingFilter: CIFilter? { @objc get @objc (setCompositingFilter:) set }
	@objc @available(OSX 10.7, *) var constraints: [NSLayoutConstraint] { @objc get }
	@objc @available(OSX 10.5, *) var contentFilters: [CIFilter] { @objc get @objc (setContentFilters:) set }
	@objc @available(OSX 10.7, *) var isDrawingFindIndicator: Bool { @objc get }
	@objc @available(OSX 10.5, *) var enclosingMenuItem: NSMenuItem? { @objc get }
	@objc var enclosingScrollView: NSScrollView? { @objc get }
	@objc @available(OSX 10.11, *) var firstBaselineAnchor: NSLayoutYAxisAnchor { @objc get }
	@objc @available(OSX 10.11, *) var firstBaselineOffsetFromTop: CGFloat { @objc get }
	@objc @available(OSX 10.7, *) var fittingSize: NSSize { @objc get }
	@objc var isFlipped: Bool { @objc get }
	@objc @available(OSX 10.7, *) var focusRingMaskBounds: NSRect { @objc get }
	@objc var focusRingType: NSFocusRingType { @objc get @objc (setFocusRingType:) set }
	@objc var frame: NSRect { @objc get @objc (setFrame:) set }
	@objc @available(OSX 10.5, *) var frameCenterRotation: CGFloat { @objc get @objc (setFrameCenterRotation:) set }
	@objc var frameRotation: CGFloat { @objc get @objc (setFrameRotation:) set }
	@objc @available(OSX 10.10, *) var gestureRecognizers: [NSGestureRecognizer] { @objc get @objc (setGestureRecognizers:) set }
	@objc @available(OSX 10.7, *) var hasAmbiguousLayout: Bool { @objc get }
	@objc var heightAdjustLimit: CGFloat { @objc get }
	@objc @available(OSX 10.11, *) var heightAnchor: NSLayoutDimension { @objc get }
	@objc var isHidden: Bool { @objc get @objc (setHidden:) set }
	@objc var isHiddenOrHasHiddenAncestor: Bool { @objc get }
	@objc @available(OSX 10.15, *) var isHorizontalContentSizeConstraintActive: Bool { @objc get @objc (setHorizontalContentSizeConstraintActive:) set }
	@objc @available(OSX 10.5, *) var isInFullScreenMode: Bool { @objc get }
	@objc var inLiveResize: Bool { @objc get }
	@objc @available(OSX 10.6, *) var inputContext: NSTextInputContext? { @objc get }
	@objc @available(OSX 10.7, *) var intrinsicContentSize: NSSize { @objc get }
	@objc @available(OSX 10.11, *) var lastBaselineAnchor: NSLayoutYAxisAnchor { @objc get }
	@objc @available(OSX 10.11, *) var lastBaselineOffsetFromBottom: CGFloat { @objc get }
	@objc @available(OSX 10.5, *) var layer: CALayer? { @objc get @objc (setLayer:) set }
	@objc @available(OSX 10.6, *) var layerContentsPlacement: NSView.LayerContentsPlacement { @objc get @objc (setLayerContentsPlacement:) set }
	@objc @available(OSX 10.6, *) var layerContentsRedrawPolicy: NSView.LayerContentsRedrawPolicy { @objc get @objc (setLayerContentsRedrawPolicy:) set }
	@objc @available(OSX 10.9, *) var layerUsesCoreImageFilters: Bool { @objc get @objc (setLayerUsesCoreImageFilters:) set }
	@objc @available(OSX 10.11, *) var layoutGuides: [NSLayoutGuide] { @objc get }
	@objc @available(OSX 10.11, *) var leadingAnchor: NSLayoutXAxisAnchor { @objc get }
	@objc @available(OSX 10.11, *) var leftAnchor: NSLayoutXAxisAnchor { @objc get }
	@objc var mouseDownCanMoveWindow: Bool { @objc get }
	@objc var needsDisplay: Bool { @objc get @objc (setNeedsDisplay:) set }
	@objc @available(OSX 10.7, *) var needsLayout: Bool { @objc get @objc (setNeedsLayout:) set }
	@objc var needsPanelToBecomeKey: Bool { @objc get }
	@objc @available(OSX 10.7, *) var needsUpdateConstraints: Bool { @objc get @objc (setNeedsUpdateConstraints:) set }
	@objc var nextKeyView: NSView? { @objc get @objc (setNextKeyView:) set }
	@objc var nextValidKeyView: NSView? { @objc get }
	@objc var isOpaque: Bool { @objc get }
	@objc var opaqueAncestor: NSView? { @objc get }
	@objc var pageFooter: NSAttributedString { @objc get }
	@objc var pageHeader: NSAttributedString { @objc get }
	@objc var postsBoundsChangedNotifications: Bool { @objc get @objc (setPostsBoundsChangedNotifications:) set }
	@objc var postsFrameChangedNotifications: Bool { @objc get @objc (setPostsFrameChangedNotifications:) set }
	@objc @available(OSX 10.9, *) var preparedContentRect: NSRect { @objc get @objc (setPreparedContentRect:) set }
	@objc var preservesContentDuringLiveResize: Bool { @objc get }
	@objc @available(OSX 10.11, *) var pressureConfiguration: NSPressureConfiguration? { @objc get @objc (setPressureConfiguration:) set }
	@objc var previousKeyView: NSView? { @objc get }
	@objc var previousValidKeyView: NSView? { @objc get }
	@objc var printJobTitle: String { @objc get }
	@objc var rectPreservedDuringLiveResize: NSRect { @objc get }
	@objc var registeredDraggedTypes: [NSPasteboard.PasteboardType] { @objc get }
	@objc @available(OSX 10.11, *) var rightAnchor: NSLayoutXAxisAnchor { @objc get }
	@objc var isRotatedFromBase: Bool { @objc get }
	@objc var isRotatedOrScaledFromBase: Bool { @objc get }
	@objc @available(OSX 10.5, *) var shadow: NSShadow? { @objc get @objc (setShadow:) set }
	@objc var subviews: [NSView] { @objc get @objc (setSubviews:) set }
	@objc var superview: NSView? { @objc get }
	@objc var tag: Int { @objc get }
	@objc var toolTip: String? { @objc get @objc (setToolTip:) set }
	@objc @available(OSX 10.11, *) var topAnchor: NSLayoutYAxisAnchor { @objc get }
	@objc @available(OSX 10.5, *) var trackingAreas: [NSTrackingArea] { @objc get }
	@objc @available(OSX 10.11, *) var trailingAnchor: NSLayoutXAxisAnchor { @objc get }
	@objc @available(OSX 10.7, *) var translatesAutoresizingMaskIntoConstraints: Bool { @objc get @objc (setTranslatesAutoresizingMaskIntoConstraints:) set }
	@objc @available(OSX 10.8, *) var userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection { @objc get @objc (setUserInterfaceLayoutDirection:) set }
	@objc @available(OSX 10.15, *) var isVerticalContentSizeConstraintActive: Bool { @objc get @objc (setVerticalContentSizeConstraintActive:) set }
	@objc var visibleRect: NSRect { @objc get }
	@objc var wantsDefaultClipping: Bool { @objc get }
	@objc @available(OSX 10.5, *) var wantsLayer: Bool { @objc get @objc (setWantsLayer:) set }
	@objc @available(OSX 10.6, *) var wantsRestingTouches: Bool { @objc get @objc (setWantsRestingTouches:) set }
	@objc @available(OSX 10.8, *) var wantsUpdateLayer: Bool { @objc get }
	@objc var widthAdjustLimit: CGFloat { @objc get }
	@objc @available(OSX 10.11, *) var widthAnchor: NSLayoutDimension { @objc get }
	@objc var window: NSWindow? { @objc get }
	@objc @available(OSX 10.9, *) static var isCompatibleWithResponsiveScrolling: Bool { @objc get }
	@objc static var defaultFocusRingType: NSFocusRingType { @objc get }
	@objc static var defaultMenu: NSMenu? { @objc get }
	@objc static var focusView: NSView? { @objc get }
	@objc @available(OSX 10.7, *) static var requiresConstraintBasedLayout: Bool { @objc get }
	@objc (acceptsFirstMouse:) func acceptsFirstMouse(`for`: NSEvent?) -> Bool
	@objc @available(OSX 10.7, *) func addConstraint(_: NSLayoutConstraint)
	@objc @available(OSX 10.7, *) func addConstraints(_: [NSLayoutConstraint])
	@objc func addCursorRect(_: NSRect, cursor: NSCursor)
	@objc @available(OSX 10.10, *) func addGestureRecognizer(_: NSGestureRecognizer)
	@objc @available(OSX 10.11, *) func addLayoutGuide(_: NSLayoutGuide)
	@objc func addSubview(_: NSView)
	@objc func addSubview(_: NSView, positioned: NSWindow.OrderingMode, relativeTo: NSView?)
	@objc (addToolTipRect:owner:userData:) func addToolTip(_: NSRect, owner: Any, userData: UnsafeMutableRawPointer?) -> NSView.ToolTipTag
	@objc @available(OSX 10.5, *) func addTrackingArea(_: NSTrackingArea)
	@objc func addTrackingRect(_: NSRect, owner: Any, userData: UnsafeMutableRawPointer?, assumeInside: Bool) -> NSView.TrackingRectTag
	@objc func adjustPageHeightNew(_: UnsafeMutablePointer<CGFloat>, top: CGFloat, bottom: CGFloat, limit: CGFloat)
	@objc func adjustPageWidthNew(_: UnsafeMutablePointer<CGFloat>, left: CGFloat, right: CGFloat, limit: CGFloat)
	@objc func adjustScroll(_: NSRect) -> NSRect
	@objc (alignmentRectForFrame:) @available(OSX 10.7, *) func alignmentRect(forFrame: NSRect) -> NSRect
	@objc (ancestorSharedWithView:) func ancestorShared(with: NSView) -> NSView?
	@objc (autoscroll:) func autoscroll(with: NSEvent) -> Bool
	@objc @available(OSX 10.7, *) func backingAlignedRect(_: NSRect, options: AlignmentOptions) -> NSRect
	@objc func beginDocument()
	@objc (beginDraggingSessionWithItems:event:source:) @available(OSX 10.7, *) func beginDraggingSession(with: [NSDraggingItem], event: NSEvent, source: NSDraggingSource) -> NSDraggingSession
	@objc (beginPageInRect:atPlacement:) func beginPage(in: NSRect, atPlacement: NSPoint)
	@objc (bitmapImageRepForCachingDisplayInRect:) func bitmapImageRepForCachingDisplay(in: NSRect) -> NSBitmapImageRep?
	@objc (cacheDisplayInRect:toBitmapImageRep:) func cacheDisplay(in: NSRect, to: NSBitmapImageRep)
	@objc func centerScanRect(_: NSRect) -> NSRect
	@objc (constraintsAffectingLayoutForOrientation:) @available(OSX 10.7, *) func constraintsAffectingLayout(`for`: NSLayoutConstraint.Orientation) -> [NSLayoutConstraint]
	@objc (contentCompressionResistancePriorityForOrientation:) @available(OSX 10.7, *) func contentCompressionResistancePriority(`for`: NSLayoutConstraint.Orientation) -> NSLayoutConstraint.Priority
	@objc (contentHuggingPriorityForOrientation:) @available(OSX 10.7, *) func contentHuggingPriority(`for`: NSLayoutConstraint.Orientation) -> NSLayoutConstraint.Priority
	@objc (convertPoint:fromView:) func convert(_: NSPoint, from: NSView?) -> NSPoint
	@objc (convertPoint:toView:) func convert(_: NSPoint, to: NSView?) -> NSPoint
	@objc (convertPointFromBacking:) @available(OSX 10.7, *) func convertFromBacking(_: NSPoint) -> NSPoint
	@objc (convertPointFromLayer:) @available(OSX 10.7, *) func convertFromLayer(_: NSPoint) -> NSPoint
	@objc (convertPointToBacking:) @available(OSX 10.7, *) func convertToBacking(_: NSPoint) -> NSPoint
	@objc (convertPointToLayer:) @available(OSX 10.7, *) func convertToLayer(_: NSPoint) -> NSPoint
	@objc (convertRect:fromView:) func convert(_: NSRect, from: NSView?) -> NSRect
	@objc (convertRect:toView:) func convert(_: NSRect, to: NSView?) -> NSRect
	@objc (convertRectFromBacking:) @available(OSX 10.7, *) func convertFromBacking(_: NSRect) -> NSRect
	@objc (convertRectFromLayer:) @available(OSX 10.7, *) func convertFromLayer(_: NSRect) -> NSRect
	@objc (convertRectToBacking:) @available(OSX 10.7, *) func convertToBacking(_: NSRect) -> NSRect
	@objc (convertRectToLayer:) @available(OSX 10.7, *) func convertToLayer(_: NSRect) -> NSRect
	@objc (convertSize:fromView:) func convert(_: NSSize, from: NSView?) -> NSSize
	@objc (convertSize:toView:) func convert(_: NSSize, to: NSView?) -> NSSize
	@objc (convertSizeFromBacking:) @available(OSX 10.7, *) func convertFromBacking(_: NSSize) -> NSSize
	@objc (convertSizeFromLayer:) @available(OSX 10.7, *) func convertFromLayer(_: NSSize) -> NSSize
	@objc (convertSizeToBacking:) @available(OSX 10.7, *) func convertToBacking(_: NSSize) -> NSSize
	@objc (convertSizeToLayer:) @available(OSX 10.7, *) func convertToLayer(_: NSSize) -> NSSize
	@objc (dataWithEPSInsideRect:) func dataWithEPS(inside: NSRect) -> Data
	@objc (dataWithPDFInsideRect:) func dataWithPDF(inside: NSRect) -> Data
	@objc func didAddSubview(_: NSView)
	@objc (didCloseMenu:withEvent:) @available(OSX 10.11, *) func didCloseMenu(_: NSMenu, with: NSEvent?)
	@objc func discardCursorRects()
	@objc func display()
	@objc func displayIfNeeded()
	@objc func displayIfNeededIgnoringOpacity()
	@objc (displayIfNeededInRect:) func displayIfNeeded(_: NSRect)
	@objc (displayIfNeededInRectIgnoringOpacity:) func displayIfNeededIgnoringOpacity(_: NSRect)
	@objc (displayRect:) func display(_: NSRect)
	@objc (displayRectIgnoringOpacity:) func displayIgnoringOpacity(_: NSRect)
	@objc (displayRectIgnoringOpacity:inContext:) func displayIgnoringOpacity(_: NSRect, in: NSGraphicsContext)
	@objc @available(OSX 10.7, *) func drawFocusRingMask()
	@objc (drawPageBorderWithSize:) func drawPageBorder(with: NSSize)
	@objc (drawRect:) func draw(_: NSRect)
	@objc func endDocument()
	@objc func endPage()
	@objc @available(OSX 10.5, *) func enterFullScreenMode(_: NSScreen, withOptions: [NSView.FullScreenModeOptionKey: Any]?) -> Bool
	@objc @available(OSX 10.7, *) func exerciseAmbiguityInLayout()
	@objc (exitFullScreenModeWithOptions:) @available(OSX 10.5, *) func exitFullScreenMode(options: [NSView.FullScreenModeOptionKey: Any]?)
	@objc (frameForAlignmentRect:) @available(OSX 10.7, *) func frame(forAlignmentRect: NSRect) -> NSRect
	// @objc func getRectsBeingDrawn(_: UnsafePointer<UnsafePointer<NSRect>?>??, count: UnsafeMutablePointer<Int>?)
	@objc func getRectsExposedDuringLiveResize(_: UnsafeMutablePointer<NSRect>, count: UnsafeMutablePointer<Int>)
	@objc func hitTest(_: NSPoint) -> NSView?
	@objc @available(OSX 10.7, *) func invalidateIntrinsicContentSize()
	@objc (isDescendantOf:) func isDescendant(of: NSView) -> Bool
	@objc func knowsPageRange(_: UnsafeMutablePointer<NSRange>) -> Bool
	@objc @available(OSX 10.7, *) func layout()
	@objc @available(OSX 10.7, *) func layoutSubtreeIfNeeded()
	@objc (locationOfPrintRect:) func locationOfPrintRect(_: NSRect) -> NSPoint
	@objc @available(OSX 10.6, *) func makeBackingLayer() -> CALayer
	@objc (menuForEvent:) func menu(`for`: NSEvent) -> NSMenu?
	@objc (mouse:inRect:) func isMousePoint(_: NSPoint, in: NSRect) -> Bool
	@objc (needsToDrawRect:) func needsToDraw(_: NSRect) -> Bool
	@objc @available(OSX 10.7, *) func noteFocusRingMaskChanged()
	@objc (prepareContentInRect:) @available(OSX 10.9, *) func prepareContent(in: NSRect)
	@objc @available(OSX 10.7, *) func prepareForReuse()
	@objc (print:) func printView(_: Any?)
	@objc (rectForPage:) func rectForPage(_: Int) -> NSRect
	@objc (rectForSmartMagnificationAtPoint:inRect:) @available(OSX 10.8, *) func rectForSmartMagnification(at: NSPoint, in: NSRect) -> NSRect
	@objc func reflectScrolledClipView(_: NSClipView)
	@objc (registerForDraggedTypes:) func registerForDraggedTypes(_: [NSPasteboard.PasteboardType])
	@objc func removeAllToolTips()
	@objc @available(OSX 10.7, *) func removeConstraint(_: NSLayoutConstraint)
	@objc @available(OSX 10.7, *) func removeConstraints(_: [NSLayoutConstraint])
	@objc func removeCursorRect(_: NSRect, cursor: NSCursor)
	@objc func removeFromSuperview()
	@objc func removeFromSuperviewWithoutNeedingDisplay()
	@objc @available(OSX 10.10, *) func removeGestureRecognizer(_: NSGestureRecognizer)
	@objc @available(OSX 10.11, *) func removeLayoutGuide(_: NSLayoutGuide)
	@objc func removeToolTip(_: NSView.ToolTipTag)
	@objc @available(OSX 10.5, *) func removeTrackingArea(_: NSTrackingArea)
	@objc func removeTrackingRect(_: NSView.TrackingRectTag)
	@objc func replaceSubview(_: NSView, with: NSView)
	@objc func resetCursorRects()
	@objc (resizeSubviewsWithOldSize:) func resizeSubviews(withOldSize: NSSize)
	@objc (resizeWithOldSuperviewSize:) func resize(withOldSuperviewSize: NSSize)
	@objc (rotateByAngle:) func rotate(byDegrees: CGFloat)
	@objc (rulerView:didAddMarker:) func rulerView(_: NSRulerView, didAdd: NSRulerMarker)
	@objc (rulerView:didMoveMarker:) func rulerView(_: NSRulerView, didMove: NSRulerMarker)
	@objc (rulerView:didRemoveMarker:) func rulerView(_: NSRulerView, didRemove: NSRulerMarker)
	@objc (rulerView:handleMouseDown:) func rulerView(_: NSRulerView, handleMouseDownWith: NSEvent)
	@objc (rulerView:locationForPoint:) @available(OSX 10.7, *) func rulerView(_: NSRulerView, locationFor: NSPoint) -> CGFloat
	@objc @available(OSX 10.7, *) func rulerView(_: NSRulerView, pointForLocation: CGFloat) -> NSPoint
	@objc (rulerView:shouldAddMarker:) func rulerView(_: NSRulerView, shouldAdd: NSRulerMarker) -> Bool
	@objc (rulerView:shouldMoveMarker:) func rulerView(_: NSRulerView, shouldMove: NSRulerMarker) -> Bool
	@objc (rulerView:shouldRemoveMarker:) func rulerView(_: NSRulerView, shouldRemove: NSRulerMarker) -> Bool
	@objc (rulerView:willAddMarker:atLocation:) func rulerView(_: NSRulerView, willAdd: NSRulerMarker, atLocation: CGFloat) -> CGFloat
	@objc (rulerView:willMoveMarker:toLocation:) func rulerView(_: NSRulerView, willMove: NSRulerMarker, toLocation: CGFloat) -> CGFloat
	@objc func rulerView(_: NSRulerView, willSetClientView: NSView)
	@objc (scaleUnitSquareToSize:) func scaleUnitSquare(to: NSSize)
	@objc (scrollClipView:toPoint:) func scroll(_: NSClipView, to: NSPoint)
	@objc (scrollPoint:) func scroll(_: NSPoint)
	@objc (scrollRectToVisible:) func scrollToVisible(_: NSRect) -> Bool
	@objc func setBoundsOrigin(_: NSPoint)
	@objc func setBoundsSize(_: NSSize)
	@objc (setContentCompressionResistancePriority:forOrientation:) @available(OSX 10.7, *) func setContentCompressionResistancePriority(_: NSLayoutConstraint.Priority, `for`: NSLayoutConstraint.Orientation)
	@objc (setContentHuggingPriority:forOrientation:) @available(OSX 10.7, *) func setContentHuggingPriority(_: NSLayoutConstraint.Priority, `for`: NSLayoutConstraint.Orientation)
	@objc func setFrameOrigin(_: NSPoint)
	@objc func setFrameSize(_: NSSize)
	@objc (setKeyboardFocusRingNeedsDisplayInRect:) func setKeyboardFocusRingNeedsDisplay(_: NSRect)
	@objc (setNeedsDisplayInRect:) func setNeedsDisplay(_: NSRect)
	@objc (shouldDelayWindowOrderingForEvent:) func shouldDelayWindowOrdering(`for`: NSEvent) -> Bool
	@objc (showDefinitionForAttributedString:atPoint:) @available(OSX 10.6, *) func showDefinition(`for`: NSAttributedString?, at: NSPoint)
	// @objc (showDefinitionForAttributedString:range:options:baselineOriginProvider:) @available(OSX 10.6, *) func showDefinition(`for`: NSAttributedString?, range: NSRange, options: [NSView.DefinitionOptionKey: Any]?, baselineOriginProvider: JSManagedValue /* NSRange: NSPoint */?)
	// @objc (sortSubviewsUsingFunction:context:) func sortSubviews(_: JSManagedValue /* NSView, NSView, UnsafeMutableRawPointer: ComparisonResult */?, context: UnsafeMutableRawPointer?)
	@objc (translateOriginToPoint:) func translateOrigin(to: NSPoint)
	@objc (translateRectsNeedingDisplayInRect:by:) @available(OSX 10.5, *) func translateRectsNeedingDisplay(in: NSRect, by: NSSize)
	@objc func unregisterDraggedTypes()
	@objc @available(OSX 10.7, *) func updateConstraints()
	@objc @available(OSX 10.7, *) func updateConstraintsForSubtreeIfNeeded()
	@objc @available(OSX 10.8, *) func updateLayer()
	@objc @available(OSX 10.5, *) func updateTrackingAreas()
	@objc @available(OSX 10.7, *) func viewDidChangeBackingProperties()
	@objc @available(OSX 10.14, *) func viewDidChangeEffectiveAppearance()
	@objc func viewDidEndLiveResize()
	@objc @available(OSX 10.5, *) func viewDidHide()
	@objc func viewDidMoveToSuperview()
	@objc func viewDidMoveToWindow()
	@objc @available(OSX 10.5, *) func viewDidUnhide()
	@objc @available(OSX 10.5, *) func viewWillDraw()
	@objc (viewWillMoveToSuperview:) func viewWillMove(toSuperview: NSView?)
	@objc (viewWillMoveToWindow:) func viewWillMove(toWindow: NSWindow?)
	@objc func viewWillStartLiveResize()
	@objc (viewWithTag:) func viewWithTag(_: Int) -> NSView?
	@objc (willOpenMenu:withEvent:) @available(OSX 10.11, *) func willOpenMenu(_: NSMenu, with: NSEvent)
	@objc func willRemoveSubview(_: NSView)
	@objc (writeEPSInsideRect:toPasteboard:) func writeEPS(inside: NSRect, to: NSPasteboard)
	@objc (writePDFInsideRect:toPasteboard:) func writePDF(inside: NSRect, to: NSPasteboard)
	@objc static func create(frame: NSRect) -> NSView
}

extension NSView: NSViewExports {
	@objc class func create(frame: NSRect) -> NSView {
		return NSView(frame: frame)
	}

	@objc override class func create() -> NSView {
		return NSView()
	}
}
