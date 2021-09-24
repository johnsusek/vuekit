import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSImageExports: JSExport {
	// , NSCopyingExports, NSPasteboardReadingExports, NSPasteboardWritingExports, NSSecureCodingExports
	// Static Methods
	@objc (canInitWithPasteboard:) static func canInit(with: NSPasteboard) -> Bool

	// Own Static Properties
	@objc @available(OSX 10.5, *) static var imageTypes: [String] { @objc get }
	@objc @available(OSX 10.5, *) static var imageUnfilteredTypes: [String] { @objc get }

	// Instance Methods
	@objc (CGImageForProposedRect:context:hints:) @available(OSX 10.6, *) func cgImage(forProposedRect proposedDestRect: UnsafeMutablePointer<NSRect>?, context referenceContext: NSGraphicsContext?, hints: [NSImageRep.HintKey : Any]?) -> CGImage?
	@objc (TIFFRepresentationUsingCompression:factor:) func tiffRepresentation(using: NSBitmapImageRep.TIFFCompression, factor: Float) -> Data?
	@objc func addRepresentation(_: NSImageRep)
	@objc func addRepresentations(_: [NSImageRep])
	@objc (bestRepresentationForRect:context:hints:) @available(OSX 10.6, *) func bestRepresentation(for rect: NSRect, context referenceContext: NSGraphicsContext?, hints: [NSImageRep.HintKey : Any]?) -> NSImageRep?
	@objc func cancelIncrementalLoad()
	@objc (drawAtPoint:fromRect:operation:fraction:) func draw(at point: NSPoint, from fromRect: NSRect, operation op: NSCompositingOperation, fraction delta: CGFloat)
	@objc (drawInRect:) @available(OSX 10.9, *) func draw(in: NSRect)
	@objc (drawInRect:fromRect:operation:fraction:) func draw(in rect: NSRect, from fromRect: NSRect, operation op: NSCompositingOperation, fraction delta: CGFloat)
	@objc (drawInRect:fromRect:operation:fraction:respectFlipped:hints:) @available(OSX 10.6, *) func draw(in dstSpacePortionRect: NSRect, from srcSpacePortionRect: NSRect, operation op: NSCompositingOperation, fraction requestedAlpha: CGFloat, respectFlipped respectContextIsFlipped: Bool, hints: [NSImageRep.HintKey : Any]?)
	@objc (drawRepresentation:inRect:) func drawRepresentation(_: NSImageRep, in: NSRect) -> Bool
	@objc (hitTestRect:withImageDestinationRect:context:hints:flipped:) @available(OSX 10.6, *) func hitTest(_ testRectDestSpace: NSRect, withDestinationRect imageRectDestSpace: NSRect, context: NSGraphicsContext?, hints: [NSImageRep.HintKey : Any]?, flipped: Bool) -> Bool
	@objc (layerContentsForContentsScale:) @available(OSX 10.7, *) func layerContents(forContentsScale layerContentsScale: CGFloat) -> Any
	@objc func lockFocus()
	@objc @available(OSX 10.6, *) func lockFocusFlipped(_: Bool)
	@objc func name() -> NSImage.Name?
	@objc func recache()
	@objc @available(OSX 10.7, *) func recommendedLayerContentsScale(_ preferredContentsScale: CGFloat) -> CGFloat
	@objc func removeRepresentation(_: NSImageRep)
	@objc func setName(_: NSImage.Name?) -> Bool
	@objc func unlockFocus()

	// Own Instance Properties
	@objc var tiffRepresentation: Data? { @objc (TIFFRepresentation) get }
	@objc @available(OSX 10.6, *) var accessibilityDescription: String? { @objc get @objc (setAccessibilityDescription:) set }
	@objc @available(OSX 10.5, *) var alignmentRect: NSRect { @objc get @objc (setAlignmentRect:) set }
	@objc var backgroundColor: NSColor { @objc get @objc (setBackgroundColor:) set }
	@objc var cacheMode: NSImage.CacheMode { @objc get @objc (setCacheMode:) set }
	@objc @available(OSX 10.10, *) var capInsets: NSEdgeInsets { @objc get @objc (setCapInsets:) set }
	@objc var delegate: NSImageDelegate? { @objc get @objc (setDelegate:) set }
	@objc var matchesOnMultipleResolution: Bool { @objc get @objc (setMatchesOnMultipleResolution:) set }
	@objc @available(OSX 10.7, *) var matchesOnlyOnBestFittingAxis: Bool { @objc get @objc (setMatchesOnlyOnBestFittingAxis:) set }
	@objc var prefersColorMatch: Bool { @objc get @objc (setPrefersColorMatch:) set }
	@objc var representations: [NSImageRep] { @objc get }
	@objc @available(OSX 10.10, *) var resizingMode: NSImage.ResizingMode { @objc get @objc (setResizingMode:) set }
	@objc var size: NSSize { @objc get @objc (setSize:) set }
	@objc @available(OSX 10.5, *) var isTemplate: Bool { @objc get @objc (setTemplate:) set }
	@objc var usesEPSOnResolutionMismatch: Bool { @objc get @objc (setUsesEPSOnResolutionMismatch:) set }
	@objc var isValid: Bool { @objc get }
}

extension NSImage: NSImageExports {}
