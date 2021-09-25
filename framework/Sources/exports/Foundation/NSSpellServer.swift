import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSSpellServerExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (isWordInUserDictionaries:caseSensitive:) func isWord(inUserDictionaries: String, caseSensitive: Bool) -> Bool
	@objc func registerLanguage(_: String?, byVendor: String?) -> Bool
	@objc func run()

	// Own Instance Properties
	@objc var delegate: NSSpellServerDelegate? { @objc get @objc (setDelegate:) set }

	// Constructors
	@objc static func create() -> NSSpellServer
}

extension NSSpellServer: NSSpellServerExports {
	@objc class func create() -> NSSpellServer {
		return NSSpellServer()
	}

}
