import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSGlyphInfoExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Own Instance Properties
	@objc @available(OSX 10.13, *) var baseString: String { @objc get }
	@objc var characterCollection: NSCharacterCollection { @objc get }
	@objc var characterIdentifier: Int { @objc get }
	@objc @available(OSX 10.13, *) var glyphID: UInt16 { @objc get }
	@objc var glyphName: String? { @objc get }

	// Constructors
	@objc static func create() -> NSGlyphInfo
}

extension NSGlyphInfo: NSGlyphInfoExports {
	@objc class func create() -> NSGlyphInfo {
		return NSGlyphInfo()
	}

}
