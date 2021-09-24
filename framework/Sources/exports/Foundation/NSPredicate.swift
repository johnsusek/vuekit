import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSPredicateExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc @available(OSX 10.9, *) func allowEvaluation()
	@objc (evaluateWithObject:) func evaluate(with: Any?) -> Bool
	@objc (evaluateWithObject:substitutionVariables:) @available(OSX 10.5, *) func evaluate(with: Any?, substitutionVariables: [String: Any]?) -> Bool
	@objc (predicateWithSubstitutionVariables:) func withSubstitutionVariables(_: [String: Any]) -> NSPredicate

	// Own Instance Properties
	@objc var predicateFormat: String { @objc get }
}

extension NSPredicate: NSPredicateExports {}
