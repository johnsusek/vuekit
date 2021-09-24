import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSRegularExpressionExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods
	@objc (escapedPatternForString:) static func escapedPattern(`for`: String) -> String
	@objc (escapedTemplateForString:) static func escapedTemplate(`for`: String) -> String
	// 	@objc static func regularExpressionWithPattern(options: String, error: NSRegularExpression.Options) -> NSRegularExpression?

	// Instance Methods
	@objc (enumerateMatchesInString:options:range:usingBlock:) func enumerateMatches(in string: String, options: NSRegularExpression.MatchingOptions, range: NSRange, using block: (NSTextCheckingResult?, NSRegularExpression.MatchingFlags, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc (firstMatchInString:options:range:) func firstMatch(in: String, options: NSRegularExpression.MatchingOptions, range: NSRange) -> NSTextCheckingResult?
	@objc (matchesInString:options:range:) func matches(in: String, options: NSRegularExpression.MatchingOptions, range: NSRange) -> [NSTextCheckingResult]
	@objc (numberOfMatchesInString:options:range:) func numberOfMatches(in: String, options: NSRegularExpression.MatchingOptions, range: NSRange) -> Int
	@objc (rangeOfFirstMatchInString:options:range:) func rangeOfFirstMatch(in: String, options: NSRegularExpression.MatchingOptions, range: NSRange) -> NSRange
	@objc (replaceMatchesInString:options:range:withTemplate:) func replaceMatches(in: NSMutableString, options: NSRegularExpression.MatchingOptions, range: NSRange, withTemplate: String) -> Int
	@objc (replacementStringForResult:inString:offset:template:) func replacementString(`for`: NSTextCheckingResult, in: String, offset: Int, template: String) -> String
	@objc (stringByReplacingMatchesInString:options:range:withTemplate:) func stringByReplacingMatches(in: String, options: NSRegularExpression.MatchingOptions, range: NSRange, withTemplate: String) -> String

	// Own Instance Properties
	@objc var numberOfCaptureGroups: Int { @objc get }
	@objc var options: NSRegularExpression.Options { @objc get }
	@objc var pattern: String { @objc get }
}

extension NSRegularExpression: NSRegularExpressionExports {}
