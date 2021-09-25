import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPredicateEditorRowTemplateExports: JSExport {
	// , NSCodingExports, NSCopyingExports
	// Static Methods
	@objc (templatesWithAttributeKeyPaths:inEntityDescription:) static func templates(withAttributeKeyPaths: [String], in: NSEntityDescription) -> [NSPredicateEditorRowTemplate]

	// Instance Methods
	@objc (displayableSubpredicatesOfPredicate:) func displayableSubpredicates(of: NSPredicate) -> [NSPredicate]?
	@objc (matchForPredicate:) func match(`for`: NSPredicate) -> Double
	@objc (predicateWithSubpredicates:) func predicate(withSubpredicates: [NSPredicate]?) -> NSPredicate
	@objc func setPredicate(_: NSPredicate)

	// Own Instance Properties
	@objc var compoundTypes: [NSNumber]? { @objc get }
	@objc var leftExpressions: [NSExpression]? { @objc get }
	@objc var modifier: NSComparisonPredicate.Modifier { @objc get }
	@objc var operators: [NSNumber]? { @objc get }
	@objc var options: Int { @objc get }
	@objc var rightExpressionAttributeType: NSAttributeType { @objc get }
	@objc var rightExpressions: [NSExpression]? { @objc get }
	@objc var templateViews: [NSView] { @objc get }

	// Constructors
	@objc static func create() -> NSPredicateEditorRowTemplate
	@objc static func create(compoundTypes: [NSNumber]) -> NSPredicateEditorRowTemplate
	@objc static func create(leftExpressions: [NSExpression], rightExpressionAttributeType: NSAttributeType, modifier: NSComparisonPredicate.Modifier, operators: [NSNumber], options: Int) -> NSPredicateEditorRowTemplate
	@objc static func create(leftExpressions: [NSExpression], rightExpressions: [NSExpression], modifier: NSComparisonPredicate.Modifier, operators: [NSNumber], options: Int) -> NSPredicateEditorRowTemplate
}

extension NSPredicateEditorRowTemplate: NSPredicateEditorRowTemplateExports {
	@objc class func create() -> NSPredicateEditorRowTemplate {
		return NSPredicateEditorRowTemplate()
	}

	@objc class func create(compoundTypes: [NSNumber]) -> NSPredicateEditorRowTemplate {
		return NSPredicateEditorRowTemplate(compoundTypes: compoundTypes)
	}

	@objc class func create(leftExpressions: [NSExpression], rightExpressionAttributeType: NSAttributeType, modifier: NSComparisonPredicate.Modifier, operators: [NSNumber], options: Int) -> NSPredicateEditorRowTemplate {
		return NSPredicateEditorRowTemplate(leftExpressions: leftExpressions, rightExpressionAttributeType: rightExpressionAttributeType, modifier: modifier, operators: operators, options: options)
	}

	@objc class func create(leftExpressions: [NSExpression], rightExpressions: [NSExpression], modifier: NSComparisonPredicate.Modifier, operators: [NSNumber], options: Int) -> NSPredicateEditorRowTemplate {
		return NSPredicateEditorRowTemplate(leftExpressions: leftExpressions, rightExpressions: rightExpressions, modifier: modifier, operators: operators, options: options)
	}

}
