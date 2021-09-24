import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSGlyphGeneratorExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc (sharedGlyphGenerator) static var shared: NSGlyphGenerator { @objc (sharedGlyphGenerator) get }

	// Instance Methods
	@objc (generateGlyphsForGlyphStorage:desiredNumberOfCharacters:glyphIndex:characterIndex:) func generateGlyphs(`for`: NSGlyphStorage, desiredNumberOfCharacters: Int, glyphIndex: UnsafeMutablePointer<Int>?, characterIndex: UnsafeMutablePointer<Int>?)

	// Constructors
}

extension NSGlyphGenerator: NSGlyphGeneratorExports {
}
