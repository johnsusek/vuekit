import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSCompoundPredicateExports: JSExport, NSPredicateExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var compoundPredicateType: NSCompoundPredicate.LogicalType { @objc get }
	@objc var subpredicates: [Any] { @objc get }
}

extension NSCompoundPredicate: NSCompoundPredicateExports {}
