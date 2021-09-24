import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSLocaleExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods
	@objc (canonicalLanguageIdentifierFromString:) static func canonicalLanguageIdentifier(from: String) -> String
	@objc (canonicalLocaleIdentifierFromString:) static func canonicalLocaleIdentifier(from: String) -> String
	@objc (characterDirectionForLanguage:) @available(OSX 10.6, *) static func characterDirection(forLanguage: String) -> NSLocale.LanguageDirection
	@objc (componentsFromLocaleIdentifier:) static func components(fromLocaleIdentifier: String) -> [String: String]
	@objc (lineDirectionForLanguage:) @available(OSX 10.6, *) static func lineDirection(forLanguage: String) -> NSLocale.LanguageDirection
	@objc (localeIdentifierFromComponents:) static func localeIdentifier(fromComponents: [String: String]) -> String
	@objc (localeIdentifierFromWindowsLocaleCode:) @available(OSX 10.6, *) static func localeIdentifier(fromWindowsLocaleCode: UInt32) -> String?
	@objc (windowsLocaleCodeFromLocaleIdentifier:) @available(OSX 10.6, *) static func windowsLocaleCode(fromLocaleIdentifier: String) -> UInt32

	// Own Static Properties
	@objc static var isoCountryCodes: [String] { @objc (ISOCountryCodes) get }
	@objc static var isoCurrencyCodes: [String] { @objc (ISOCurrencyCodes) get }
	@objc static var isoLanguageCodes: [String] { @objc (ISOLanguageCodes) get }
	@objc @available(OSX 10.5, *) static var autoupdatingCurrent: Locale { @objc (autoupdatingCurrentLocale) get }
	@objc static var availableLocaleIdentifiers: [String] { @objc get }
	@objc @available(OSX 10.5, *) static var commonISOCurrencyCodes: [String] { @objc get }
	@objc static var current: Locale { @objc (currentLocale) get }
	@objc @available(OSX 10.5, *) static var preferredLanguages: [String] { @objc get }
	@objc static var system: Locale { @objc (systemLocale) get }

	// Instance Methods
	@objc (displayNameForKey:value:) func displayName(forKey: NSLocale.Key, value: Any) -> String?
	@objc (localizedStringForCalendarIdentifier:) @available(OSX 10.12, *) func localizedString(forCalendarIdentifier: String) -> String?
	@objc (localizedStringForCollationIdentifier:) @available(OSX 10.12, *) func localizedString(forCollationIdentifier: String) -> String?
	@objc (localizedStringForCollatorIdentifier:) @available(OSX 10.12, *) func localizedString(forCollatorIdentifier: String) -> String?
	@objc (localizedStringForCountryCode:) @available(OSX 10.12, *) func localizedString(forCountryCode: String) -> String?
	@objc (localizedStringForCurrencyCode:) @available(OSX 10.12, *) func localizedString(forCurrencyCode: String) -> String?
	@objc (localizedStringForLanguageCode:) @available(OSX 10.12, *) func localizedString(forLanguageCode: String) -> String?
	@objc (localizedStringForLocaleIdentifier:) @available(OSX 10.12, *) func localizedString(forLocaleIdentifier: String) -> String
	@objc (localizedStringForScriptCode:) @available(OSX 10.12, *) func localizedString(forScriptCode: String) -> String?
	@objc (localizedStringForVariantCode:) @available(OSX 10.12, *) func localizedString(forVariantCode: String) -> String?
	@objc (objectForKey:) func object(forKey: NSLocale.Key) -> Any?

	// Own Instance Properties
	@objc @available(OSX 10.12, *) var alternateQuotationBeginDelimiter: String { @objc get }
	@objc @available(OSX 10.12, *) var alternateQuotationEndDelimiter: String { @objc get }
	@objc @available(OSX 10.12, *) var calendarIdentifier: String { @objc get }
	@objc @available(OSX 10.12, *) var collationIdentifier: String? { @objc get }
	@objc @available(OSX 10.12, *) var collatorIdentifier: String { @objc get }
	@objc @available(OSX 10.12, *) var countryCode: String? { @objc get }
	@objc @available(OSX 10.12, *) var currencyCode: String? { @objc get }
	@objc @available(OSX 10.12, *) var currencySymbol: String { @objc get }
	@objc @available(OSX 10.12, *) var decimalSeparator: String { @objc get }
	@objc @available(OSX 10.12, *) var exemplarCharacterSet: CharacterSet { @objc get }
	@objc @available(OSX 10.12, *) var groupingSeparator: String { @objc get }
	@objc @available(OSX 10.12, *) var languageCode: String { @objc get }
	@objc var localeIdentifier: String { @objc get }
	@objc @available(OSX 10.12, *) var quotationBeginDelimiter: String { @objc get }
	@objc @available(OSX 10.12, *) var quotationEndDelimiter: String { @objc get }
	@objc @available(OSX 10.12, *) var scriptCode: String? { @objc get }
	@objc @available(OSX 10.12, *) var usesMetricSystem: Bool { @objc get }
	@objc @available(OSX 10.12, *) var variantCode: String? { @objc get }
}

extension NSLocale: NSLocaleExports {}
