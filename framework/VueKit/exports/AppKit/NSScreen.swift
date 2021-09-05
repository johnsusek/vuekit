import AppKit
import JavaScriptCore

@objc protocol NSScreenExports: JSExport {
	@objc @available(OSX 10.7, *) var backingScaleFactor: CGFloat { @objc get }
	@objc @available(OSX 10.6, *) var colorSpace: NSColorSpace? { @objc get }
	@objc var depth: NSWindow.Depth { @objc get }
	@objc var deviceDescription: [NSDeviceDescriptionKey: Any] { @objc get }
	@objc var frame: NSRect { @objc get }
	@objc @available(OSX 10.15, *) var localizedName: String { @objc get }
	@objc @available(OSX 10.11, *) var maximumExtendedDynamicRangeColorComponentValue: CGFloat { @objc get }
	@objc @available(OSX 10.15, *) var maximumPotentialExtendedDynamicRangeColorComponentValue: CGFloat { @objc get }
	@objc @available(OSX 10.15, *) var maximumReferenceExtendedDynamicRangeColorComponentValue: CGFloat { @objc get }
	@objc var supportedWindowDepths: UnsafePointer<NSWindow.Depth> { @objc get }
	@objc var visibleFrame: NSRect { @objc get }
	@objc static var deepest: NSScreen? { @objc (deepestScreen) get }
	@objc static var main: NSScreen? { @objc (mainScreen) get }
	@objc static var screens: [NSScreen] { @objc get }
	@objc @available(OSX 10.9, *) static var screensHaveSeparateSpaces: Bool { @objc get }
	@objc @available(OSX 10.7, *) func backingAlignedRect(_: NSRect, options: AlignmentOptions) -> NSRect
	@objc (canRepresentDisplayGamut:) @available(OSX 10.12, *) func canRepresent(_: NSDisplayGamut) -> Bool
	@objc @available(OSX 10.7, *) func convertRectFromBacking(_: NSRect) -> NSRect
	@objc @available(OSX 10.7, *) func convertRectToBacking(_: NSRect) -> NSRect
}

extension NSScreen: NSScreenExports {
	@objc override class func create() -> NSScreen {
		return NSScreen()
	}
}
