import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVTextStyleRuleExports: JSExport {
	// , NSCopyingExports
	// Static Methods
	@objc (propertyListForTextStyleRules:) static func propertyList(`for`: [AVTextStyleRule]) -> Any
	@objc (textStyleRulesFromPropertyList:) static func textStyleRules(fromPropertyList: Any) -> [AVTextStyleRule]?

	// Instance Methods

	// Own Instance Properties
	@objc var textMarkupAttributes: [String: Any] { @objc get }
	@objc var textSelector: String? { @objc get }

	// Constructors
	@objc static func create(textMarkupAttributes: [String: Any]) -> AVTextStyleRule?
	@objc static func create(textMarkupAttributes: [String: Any], textSelector: String?) -> AVTextStyleRule?
}

extension AVTextStyleRule: AVTextStyleRuleExports {
	@objc class func create(textMarkupAttributes: [String: Any]) -> AVTextStyleRule? {
		return AVTextStyleRule(textMarkupAttributes: textMarkupAttributes)
	}

	@objc class func create(textMarkupAttributes: [String: Any], textSelector: String?) -> AVTextStyleRule? {
		return AVTextStyleRule(textMarkupAttributes: textMarkupAttributes, textSelector: textSelector)
	}

}
