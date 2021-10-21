import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSGlyphStorageExports: JSExport {
  @objc func attributedString() -> NSAttributedString
  @objc (insertGlyphs:length:forStartingGlyphAtIndex:characterIndex:) func insertGlyphs(_: NSGlyph, length: Int, forStartingGlyphAt: Int, characterIndex: Int)
  @objc func layoutOptions() -> Int
  @objc (setIntAttribute:value:forGlyphAtIndex:) func setIntAttribute(_: Int, value: Int, forGlyphAt: Int)
}

