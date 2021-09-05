import AppKit
import JavaScriptCore

@objc protocol NSGlyphGeneratorExports: JSExport {
	@objc static var shared: NSGlyphGenerator { @objc (sharedGlyphGenerator) get }
	@objc (generateGlyphsForGlyphStorage:desiredNumberOfCharacters:glyphIndex:characterIndex:) func generateGlyphs(`for`: NSGlyphStorage, desiredNumberOfCharacters: Int, glyphIndex: UnsafeMutablePointer<Int>?, characterIndex: UnsafeMutablePointer<Int>?)
}

extension NSGlyphGenerator: NSGlyphGeneratorExports {
	@objc override class func create() -> NSGlyphGenerator {
		return NSGlyphGenerator()
	}
}
