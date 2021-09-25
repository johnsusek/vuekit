import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSPositionalSpecifierExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func evaluate()
	@objc func setInsertionClassDescription(_: NSScriptClassDescription)

	// Own Instance Properties
	@objc var insertionContainer: Any? { @objc get }
	@objc var insertionIndex: Int { @objc get }
	@objc var insertionKey: String? { @objc get }
	@objc var insertionReplaces: Bool { @objc get }
	@objc @available(OSX 10.5, *) var position: NSPositionalSpecifier.InsertionPosition { @objc get }

	// Constructors
	@objc static func create() -> NSPositionalSpecifier
	@objc static func create(position: NSPositionalSpecifier.InsertionPosition, objectSpecifier: NSScriptObjectSpecifier) -> NSPositionalSpecifier
}

extension NSPositionalSpecifier: NSPositionalSpecifierExports {
	@objc class func create() -> NSPositionalSpecifier {
		return NSPositionalSpecifier()
	}

	@objc class func create(position: NSPositionalSpecifier.InsertionPosition, objectSpecifier: NSScriptObjectSpecifier) -> NSPositionalSpecifier {
		return NSPositionalSpecifier(position: position, objectSpecifier: objectSpecifier)
	}

}
