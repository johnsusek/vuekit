import AppKit
import JavaScriptCore

@objc protocol NSLayoutConstraintExports: JSExport {
	@objc (activateConstraints:) @available(OSX 10.10, *) static func activate(_: [NSLayoutConstraint])
	@objc (constraintsWithVisualFormat:options:metrics:views:) @available(OSX 10.7, *) static func constraints(withVisualFormat: String, options: NSLayoutConstraint.FormatOptions, metrics: [String: Any]?, views: [String: Any]) -> [NSLayoutConstraint]
	@objc (deactivateConstraints:) @available(OSX 10.10, *) static func deactivate(_: [NSLayoutConstraint])
	@objc @available(OSX 10.10, *) var isActive: Bool { @objc get @objc (setActive:) set }
	@objc var constant: CGFloat { @objc get @objc (setConstant:) set }
	@objc @available(OSX 10.12, *) var firstAnchor: NSLayoutAnchor<AnyObject> { @objc get }
	@objc var firstAttribute: NSLayoutConstraint.Attribute { @objc get }
	@objc var firstItem: AnyObject? { @objc get }
	@objc @available(OSX 10.7, *) var identifier: String? { @objc get @objc (setIdentifier:) set }
	@objc var multiplier: CGFloat { @objc get }
	@objc var priority: NSLayoutConstraint.Priority { @objc get @objc (setPriority:) set }
	@objc var relation: NSLayoutConstraint.Relation { @objc get }
	@objc @available(OSX 10.12, *) var secondAnchor: NSLayoutAnchor<AnyObject>? { @objc get }
	@objc var secondAttribute: NSLayoutConstraint.Attribute { @objc get }
	@objc var secondItem: AnyObject? { @objc get }
	@objc var shouldBeArchived: Bool { @objc get @objc (setShouldBeArchived:) set }
	@objc @available(OSX 10.7, *) static func create(item: Any, attribute: NSLayoutConstraint.Attribute, relatedBy: NSLayoutConstraint.Relation, toItem: Any?, attribute attribute5: NSLayoutConstraint.Attribute, multiplier: CGFloat, constant: CGFloat) -> NSLayoutConstraint
}

extension NSLayoutConstraint: NSLayoutConstraintExports {
	@objc @available(OSX 10.7, *) class func create(item: Any, attribute: NSLayoutConstraint.Attribute, relatedBy: NSLayoutConstraint.Relation, toItem: Any?, attribute attribute5: NSLayoutConstraint.Attribute, multiplier: CGFloat, constant: CGFloat) -> NSLayoutConstraint {
		return NSLayoutConstraint(item: item, attribute: attribute, relatedBy: relatedBy, toItem: toItem, attribute: attribute5, multiplier: multiplier, constant: constant)
	}

	@objc override class func create() -> NSLayoutConstraint {
		return NSLayoutConstraint()
	}
}
