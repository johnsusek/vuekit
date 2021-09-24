import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSCharacterSetExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports, NSSecureCodingExports
	// Static Methods

	// Own Static Properties
	@objc (URLFragmentAllowedCharacterSet) @available(OSX 10.9, *) static var urlFragmentAllowed: CharacterSet { @objc (URLFragmentAllowedCharacterSet) get }
	@objc (URLHostAllowedCharacterSet) @available(OSX 10.9, *) static var urlHostAllowed: CharacterSet { @objc (URLHostAllowedCharacterSet) get }
	@objc (URLPasswordAllowedCharacterSet) @available(OSX 10.9, *) static var urlPasswordAllowed: CharacterSet { @objc (URLPasswordAllowedCharacterSet) get }
	@objc (URLPathAllowedCharacterSet) @available(OSX 10.9, *) static var urlPathAllowed: CharacterSet { @objc (URLPathAllowedCharacterSet) get }
	@objc (URLQueryAllowedCharacterSet) @available(OSX 10.9, *) static var urlQueryAllowed: CharacterSet { @objc (URLQueryAllowedCharacterSet) get }
	@objc (URLUserAllowedCharacterSet) @available(OSX 10.9, *) static var urlUserAllowed: CharacterSet { @objc (URLUserAllowedCharacterSet) get }
	@objc (alphanumericCharacterSet) static var alphanumerics: CharacterSet { @objc (alphanumericCharacterSet) get }
	@objc (capitalizedLetterCharacterSet) static var capitalizedLetters: CharacterSet { @objc (capitalizedLetterCharacterSet) get }
	@objc (controlCharacterSet) static var controlCharacters: CharacterSet { @objc (controlCharacterSet) get }
	@objc (decimalDigitCharacterSet) static var decimalDigits: CharacterSet { @objc (decimalDigitCharacterSet) get }
	@objc (decomposableCharacterSet) static var decomposables: CharacterSet { @objc (decomposableCharacterSet) get }
	@objc (illegalCharacterSet) static var illegalCharacters: CharacterSet { @objc (illegalCharacterSet) get }
	@objc (letterCharacterSet) static var letters: CharacterSet { @objc (letterCharacterSet) get }
	@objc (lowercaseLetterCharacterSet) static var lowercaseLetters: CharacterSet { @objc (lowercaseLetterCharacterSet) get }
	@objc (newlineCharacterSet) @available(OSX 10.5, *) static var newlines: CharacterSet { @objc (newlineCharacterSet) get }
	@objc (nonBaseCharacterSet) static var nonBaseCharacters: CharacterSet { @objc (nonBaseCharacterSet) get }
	@objc (punctuationCharacterSet) static var punctuationCharacters: CharacterSet { @objc (punctuationCharacterSet) get }
	@objc (symbolCharacterSet) static var symbols: CharacterSet { @objc (symbolCharacterSet) get }
	@objc (uppercaseLetterCharacterSet) static var uppercaseLetters: CharacterSet { @objc (uppercaseLetterCharacterSet) get }
	@objc (whitespaceAndNewlineCharacterSet) static var whitespacesAndNewlines: CharacterSet { @objc (whitespaceAndNewlineCharacterSet) get }
	@objc (whitespaceCharacterSet) static var whitespaces: CharacterSet { @objc (whitespaceCharacterSet) get }

	// Instance Methods
	@objc func characterIsMember(_ aCharacter: unichar) -> Bool
	@objc (hasMemberInPlane:) func hasMemberInPlane(_: UInt8) -> Bool
	@objc (isSupersetOfSet:) func isSuperset(of: CharacterSet) -> Bool
	@objc func longCharacterIsMember(_: UTF32Char) -> Bool

	// Own Instance Properties
	@objc var bitmapRepresentation: Data { @objc get }
	@objc (invertedSet) var inverted: CharacterSet { @objc (invertedSet) get }

	// Constructors
}

extension NSCharacterSet: NSCharacterSetExports {
}
