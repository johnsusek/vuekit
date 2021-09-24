import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSFontDescriptorExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (fontDescriptorByAddingAttributes:) func addingAttributes(_ attributes: [NSFontDescriptor.AttributeName : Any]) -> NSFontDescriptor
	@objc (fontDescriptorWithDesign:) @available(OSX 10.15, *) func withDesign(_: NSFontDescriptor.SystemDesign) -> NSFontDescriptor?
	@objc (fontDescriptorWithFace:) func withFace(_: String) -> NSFontDescriptor
	@objc (fontDescriptorWithFamily:) func withFamily(_: String) -> NSFontDescriptor
	@objc (fontDescriptorWithMatrix:) func withMatrix(_: AffineTransform) -> NSFontDescriptor
	@objc (fontDescriptorWithSize:) func withSize(_ newPointSize: CGFloat) -> NSFontDescriptor
	@objc (fontDescriptorWithSymbolicTraits:) func withSymbolicTraits(_: NSFontDescriptor.SymbolicTraits) -> NSFontDescriptor
	@objc (matchingFontDescriptorWithMandatoryKeys:) @available(OSX 10.5, *) func matchingFontDescriptor(withMandatoryKeys: Set<NSFontDescriptor.AttributeName>?) -> NSFontDescriptor?
	@objc (matchingFontDescriptorsWithMandatoryKeys:) func matchingFontDescriptors(withMandatoryKeys: Set<NSFontDescriptor.AttributeName>?) -> [NSFontDescriptor]
	@objc (objectForKey:) func object(forKey: NSFontDescriptor.AttributeName) -> Any?

	// Own Instance Properties
	@objc var fontAttributes: [NSFontDescriptor.AttributeName : Any] { get }
	@objc var matrix: AffineTransform? { @objc get }
	@objc var pointSize: CGFloat { get }
	@objc var postscriptName: String? { @objc get }
	@objc @available(OSX 10.13, *) var requiresFontAssetRequest: Bool { @objc get }
	@objc var symbolicTraits: NSFontDescriptor.SymbolicTraits { @objc get }
}

extension NSFontDescriptor: NSFontDescriptorExports {}
