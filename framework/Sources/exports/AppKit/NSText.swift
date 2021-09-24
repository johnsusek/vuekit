import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextExports: JSExport, NSViewExports {
	// , NSChangeSpellingExports, NSIgnoreMisspelledWordsExports
	// Static Methods

	// Instance Methods
	@objc (RTFDFromRange:) func rtfd(from: NSRange) -> Data?
	@objc (RTFFromRange:) func rtf(from: NSRange) -> Data?
	@objc func alignCenter(_: Any?)
	@objc func alignLeft(_: Any?)
	@objc func alignRight(_: Any?)
	@objc func checkSpelling(_: Any?)
	@objc func copyFont(_: Any?)
	@objc func copyRuler(_: Any?)
	@objc func cut(_: Any?)
	@objc func delete(_: Any?)
	@objc func paste(_: Any?)
	@objc func pasteFont(_: Any?)
	@objc func pasteRuler(_: Any?)
	@objc (readRTFDFromFile:) func readRTFD(fromFile: String) -> Bool
	@objc (replaceCharactersInRange:withRTF:) func replaceCharacters(in: NSRange, withRTF: Data)
	@objc (replaceCharactersInRange:withRTFD:) func replaceCharacters(in: NSRange, withRTFD: Data)
	@objc (replaceCharactersInRange:withString:) func replaceCharacters(in: NSRange, with: String)
	@objc func scrollRangeToVisible(_: NSRange)
	@objc func setFont(_: NSFont, range: NSRange)
	@objc func setTextColor(_: NSColor?, range: NSRange)
	@objc func showGuessPanel(_: Any?)
	@objc func sizeToFit()
	@objc func superscript(_: Any?)
	@objc func toggleRuler(_: Any?)
	@objc func underline(_: Any?)
	@objc func unscript(_: Any?)
	@objc (writeRTFDToFile:atomically:) func writeRTFD(toFile: String, atomically: Bool) -> Bool

	// Own Instance Properties
	@objc var alignment: NSTextAlignment { @objc get @objc (setAlignment:) set }
	@objc var backgroundColor: NSColor? { @objc get @objc (setBackgroundColor:) set }
	@objc var baseWritingDirection: NSWritingDirection { @objc get @objc (setBaseWritingDirection:) set }
	@objc var delegate: NSTextDelegate? { @objc get @objc (setDelegate:) set }
	@objc var drawsBackground: Bool { @objc get @objc (setDrawsBackground:) set }
	@objc var isEditable: Bool { @objc get @objc (setEditable:) set }
	@objc var isFieldEditor: Bool { @objc get @objc (setFieldEditor:) set }
	@objc var font: NSFont? { @objc get @objc (setFont:) set }
	@objc var isHorizontallyResizable: Bool { @objc get @objc (setHorizontallyResizable:) set }
	@objc var importsGraphics: Bool { @objc get @objc (setImportsGraphics:) set }
	@objc var maxSize: NSSize { @objc get @objc (setMaxSize:) set }
	@objc var minSize: NSSize { @objc get @objc (setMinSize:) set }
	@objc var isRichText: Bool { @objc get @objc (setRichText:) set }
	@objc var isRulerVisible: Bool { @objc get }
	@objc var isSelectable: Bool { @objc get @objc (setSelectable:) set }
	@objc var selectedRange: NSRange { @objc get @objc (setSelectedRange:) set }
	@objc var string: String { @objc get @objc (setString:) set }
	@objc var textColor: NSColor? { @objc get @objc (setTextColor:) set }
	@objc var usesFontPanel: Bool { @objc get @objc (setUsesFontPanel:) set }
	@objc var isVerticallyResizable: Bool { @objc get @objc (setVerticallyResizable:) set }
}

@objc protocol TextExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> Text
}

class Text: NSText, TextExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> Text {
		return Text()
	}

}

extension NSText: NSTextExports {}
