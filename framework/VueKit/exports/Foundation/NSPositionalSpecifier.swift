import AppKit
import JavaScriptCore

@objc protocol NSPositionalSpecifierExports: JSExport {
	@objc var insertionContainer: Any? { @objc get }
	@objc var insertionIndex: Int { @objc get }
	@objc var insertionKey: String? { @objc get }
	@objc var insertionReplaces: Bool { @objc get }
	@objc @available(OSX 10.5, *) var position: NSPositionalSpecifier.InsertionPosition { @objc get }
	@objc func evaluate()
	@objc func setInsertionClassDescription(_: NSScriptClassDescription)
	@objc static func create(position: NSPositionalSpecifier.InsertionPosition, objectSpecifier: NSScriptObjectSpecifier) -> NSPositionalSpecifier
}

extension NSPositionalSpecifier: NSPositionalSpecifierExports {
	@objc class func create(position: NSPositionalSpecifier.InsertionPosition, objectSpecifier: NSScriptObjectSpecifier) -> NSPositionalSpecifier {
		return NSPositionalSpecifier(position: position, objectSpecifier: objectSpecifier)
	}

	@objc override class func create() -> NSPositionalSpecifier {
		return NSPositionalSpecifier()
	}
}
