import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSComparisonPredicateExports: JSExport, NSPredicateExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var comparisonPredicateModifier: NSComparisonPredicate.Modifier { @objc get }
	@objc var customSelector: Selector? { @objc get }
	@objc var leftExpression: NSExpression { @objc get }
	@objc var options: NSComparisonPredicate.Options { @objc get }
	@objc var predicateOperatorType: NSComparisonPredicate.Operator { @objc get }
	@objc var rightExpression: NSExpression { @objc get }
}

extension NSComparisonPredicate: NSComparisonPredicateExports {}
