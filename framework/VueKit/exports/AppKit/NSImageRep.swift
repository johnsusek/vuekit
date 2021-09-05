import AppKit
import JavaScriptCore

@objc protocol NSImageRepExports: JSExport {
	@objc (canInitWithData:) static func canInit(with: Data) -> Bool
	@objc (canInitWithPasteboard:) static func canInit(with: NSPasteboard) -> Bool
	@objc static func create(contentsOfFile: String) -> NSImageRep?
	@objc static func create(contentsOf: URL) -> NSImageRep?
	@objc static func create(pasteboard: NSPasteboard) -> NSImageRep?
	@objc (imageRepsWithContentsOfFile:) static func imageReps(withContentsOfFile: String) -> [NSImageRep]?
	@objc (imageRepsWithContentsOfURL:) static func imageReps(withContentsOf: URL) -> [NSImageRep]?
	@objc (imageRepsWithPasteboard:) static func imageReps(with: NSPasteboard) -> [NSImageRep]?
	@objc (registerImageRepClass:) static func registerClass(_: AnyClass)
	@objc (unregisterImageRepClass:) static func unregisterClass(_: AnyClass)
	@objc var hasAlpha: Bool { @objc get @objc (setAlpha:) set }
	@objc var bitsPerSample: Int { @objc get @objc (setBitsPerSample:) set }
	@objc var colorSpaceName: NSColorSpaceName { @objc get @objc (setColorSpaceName:) set }
	@objc @available(OSX 10.12, *) var layoutDirection: NSImage.LayoutDirection { @objc get @objc (setLayoutDirection:) set }
	@objc var isOpaque: Bool { @objc get @objc (setOpaque:) set }
	@objc var pixelsHigh: Int { @objc get @objc (setPixelsHigh:) set }
	@objc var pixelsWide: Int { @objc get @objc (setPixelsWide:) set }
	@objc var size: NSSize { @objc get @objc (setSize:) set }
	@objc @available(OSX 10.5, *) static var imageTypes: [String] { @objc get }
	@objc @available(OSX 10.5, *) static var imageUnfilteredTypes: [String] { @objc get }
	@objc static var registeredClasses: [AnyClass] { @objc (registeredImageRepClasses) get }
	@objc (CGImageForProposedRect:context:hints:) @available(OSX 10.6, *) func cgImage(forProposedRect: UnsafeMutablePointer<NSRect>?, context: NSGraphicsContext?, hints: [NSImageRep.HintKey: Any]?) -> CGImage?
	@objc func draw() -> Bool
	@objc (drawAtPoint:) func draw(at: NSPoint) -> Bool
	@objc (drawInRect:) func draw(in: NSRect) -> Bool
	@objc (drawInRect:fromRect:operation:fraction:respectFlipped:hints:) @available(OSX 10.6, *) func draw(in: NSRect, from: NSRect, operation: NSCompositingOperation, fraction: CGFloat, respectFlipped: Bool, hints: [NSImageRep.HintKey: Any]?) -> Bool
}

extension NSImageRep: NSImageRepExports {
	@objc class func create(contentsOfFile: String) -> NSImageRep? {
		return NSImageRep(contentsOfFile: contentsOfFile)
	}

	@objc class func create(contentsOf: URL) -> NSImageRep? {
		return NSImageRep(contentsOf: contentsOf)
	}

	@objc class func create(pasteboard: NSPasteboard) -> NSImageRep? {
		return NSImageRep(pasteboard: pasteboard)
	}

	@objc override class func create() -> NSImageRep {
		return NSImageRep()
	}
}
