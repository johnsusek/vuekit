import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSMutableCharacterSetExports: JSExport, NSCharacterSetExports {
	// , NSCopyingExports, NSMutableCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (addCharactersInRange:) func addCharacters(in: NSRange)
	@objc (addCharactersInString:) func addCharacters(in: String)
	@objc (formIntersectionWithCharacterSet:) func formIntersection(with: CharacterSet)
	@objc (formUnionWithCharacterSet:) func formUnion(with: CharacterSet)
	@objc func invert()
	@objc (removeCharactersInRange:) func removeCharacters(in: NSRange)
	@objc (removeCharactersInString:) func removeCharacters(in: String)

	// Constructors
}

extension NSMutableCharacterSet: NSMutableCharacterSetExports {
}
