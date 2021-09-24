import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSOrthographyExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (dominantLanguageForScript:) @available(OSX 10.6, *) func dominantLanguage(forScript: String) -> String?
	@objc (languagesForScript:) @available(OSX 10.6, *) func languages(forScript: String) -> [String]?

	// Own Instance Properties
	@objc @available(OSX 10.6, *) var allLanguages: [String] { @objc get }
	@objc @available(OSX 10.6, *) var allScripts: [String] { @objc get }
	@objc @available(OSX 10.6, *) var dominantLanguage: String { @objc get }
	@objc var dominantScript: String { @objc get }
	@objc var languageMap: [String: [String]] { @objc get }
}

extension NSOrthography: NSOrthographyExports {}
