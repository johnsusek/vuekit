import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSTextCheckingResultExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods
	@objc (addressCheckingResultWithRange:components:) static func addressCheckingResult(range: NSRange, components: [NSTextCheckingKey : String]) -> NSTextCheckingResult
	@objc (correctionCheckingResultWithRange:replacementString:) static func correctionCheckingResult(range: NSRange, replacementString: String) -> NSTextCheckingResult
	@objc (correctionCheckingResultWithRange:replacementString:alternativeStrings:) @available(OSX 10.9, *) static func correctionCheckingResult(range: NSRange, replacementString: String, alternativeStrings: [String]) -> NSTextCheckingResult
	@objc (dashCheckingResultWithRange:replacementString:) static func dashCheckingResult(range: NSRange, replacementString: String) -> NSTextCheckingResult
	@objc (dateCheckingResultWithRange:date:) static func dateCheckingResult(range: NSRange, date: Date) -> NSTextCheckingResult
	@objc (dateCheckingResultWithRange:date:timeZone:duration:) static func dateCheckingResult(range: NSRange, date: Date, timeZone: TimeZone, duration: TimeInterval) -> NSTextCheckingResult
	@objc (grammarCheckingResultWithRange:details:) static func grammarCheckingResult(range: NSRange, details: [[String: Any]]) -> NSTextCheckingResult
	@objc (linkCheckingResultWithRange:URL:) static func linkCheckingResult(range: NSRange, url: URL) -> NSTextCheckingResult
	@objc (orthographyCheckingResultWithRange:orthography:) static func orthographyCheckingResult(range: NSRange, orthography: NSOrthography) -> NSTextCheckingResult
	@objc (phoneNumberCheckingResultWithRange:phoneNumber:) @available(OSX 10.7, *) static func phoneNumberCheckingResult(range: NSRange, phoneNumber: String) -> NSTextCheckingResult
	@objc (quoteCheckingResultWithRange:replacementString:) static func quoteCheckingResult(range: NSRange, replacementString: String) -> NSTextCheckingResult
	@objc (regularExpressionCheckingResultWithRanges:count:regularExpression:) @available(OSX 10.7, *) static func regularExpressionCheckingResult(ranges: UnsafeMutablePointer<NSRange>, count: Int, regularExpression: NSRegularExpression) -> NSTextCheckingResult
	@objc (replacementCheckingResultWithRange:replacementString:) static func replacementCheckingResult(range: NSRange, replacementString: String) -> NSTextCheckingResult
	@objc (spellCheckingResultWithRange:) static func spellCheckingResult(range: NSRange) -> NSTextCheckingResult
	@objc (transitInformationCheckingResultWithRange:components:) @available(OSX 10.7, *) static func transitInformationCheckingResult(range: NSRange, components: [NSTextCheckingKey : String]) -> NSTextCheckingResult

	// Instance Methods
	@objc (rangeAtIndex:) @available(OSX 10.7, *) func range(at: Int) -> NSRange
	@objc (rangeWithName:) @available(OSX 10.13, *) func range(withName: String) -> NSRange
	@objc (resultByAdjustingRangesWithOffset:) @available(OSX 10.7, *) func adjustingRanges(offset: Int) -> NSTextCheckingResult

	// Own Instance Properties
	@objc (URL) var url: URL? { get }
	@objc var addressComponents: [NSTextCheckingKey : String]? { get }
	@objc @available(OSX 10.9, *) var alternativeStrings: [String]? { @objc get }
	@objc @available(OSX 10.7, *) var components: [NSTextCheckingKey : String]? { get }
	@objc var date: Date? { @objc get }
	@objc var duration: TimeInterval { @objc get }
	@objc var grammarDetails: [[String: Any]]? { @objc get }
	@objc @available(OSX 10.7, *) var numberOfRanges: Int { @objc get }
	@objc var orthography: NSOrthography? { @objc get }
	@objc @available(OSX 10.7, *) var phoneNumber: String? { @objc get }
	@objc var range: NSRange { @objc get }
	@objc @available(OSX 10.7, *) var regularExpression: NSRegularExpression? { @objc get }
	@objc var replacementString: String? { @objc get }
	@objc var resultType: NSTextCheckingResult.CheckingType { @objc get }
	@objc var timeZone: TimeZone? { get }

	// Constructors
}

extension NSTextCheckingResult: NSTextCheckingResultExports {
}
