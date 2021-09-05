import AppKit
import JavaScriptCore

@objc protocol NSTextStorageExports: JSExport {
	@objc var attributeRuns: [NSTextStorage] { @objc get @objc (setAttributeRuns:) set }
	@objc var changeInLength: Int { @objc get }
	@objc var characters: [NSTextStorage] { @objc get @objc (setCharacters:) set }
	@objc var delegate: NSTextStorageDelegate? { @objc get @objc (setDelegate:) set }
	@objc var editedMask: NSTextStorageEditActions { @objc get }
	@objc var editedRange: NSRange { @objc get }
	@objc var fixesAttributesLazily: Bool { @objc get }
	@objc var font: NSFont? { @objc get @objc (setFont:) set }
	@objc var foregroundColor: NSColor? { @objc get @objc (setForegroundColor:) set }
	@objc var layoutManagers: [NSLayoutManager] { @objc get }
	@objc var paragraphs: [NSTextStorage] { @objc get @objc (setParagraphs:) set }
	@objc var words: [NSTextStorage] { @objc get @objc (setWords:) set }
	@objc func addLayoutManager(_: NSLayoutManager)
	@objc func edited(_: NSTextStorageEditActions, range: NSRange, changeInLength: Int)
	@objc (ensureAttributesAreFixedInRange:) func ensureAttributesAreFixed(in: NSRange)
	@objc (invalidateAttributesInRange:) func invalidateAttributes(in: NSRange)
	@objc func processEditing()
	@objc func removeLayoutManager(_: NSLayoutManager)
}

extension NSTextStorage: NSTextStorageExports {
	@objc override class func create() -> NSTextStorage {
		return NSTextStorage()
	}
}
