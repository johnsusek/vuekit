import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSLayoutConstraintExports: JSExport {
	// , NSAnimatablePropertyContainerExports
	// Static Methods
	@objc (activateConstraints:) @available(OSX 10.10, *) static func activate(_: [NSLayoutConstraint])
	@objc (constraintsWithVisualFormat:options:metrics:views:) @available(OSX 10.7, *) static func constraints(withVisualFormat: String, options: NSLayoutConstraint.FormatOptions, metrics: [String: Any]?, views: [String: Any]) -> [NSLayoutConstraint]
	@objc (deactivateConstraints:) @available(OSX 10.10, *) static func deactivate(_: [NSLayoutConstraint])

	// Own Instance Properties
	@objc @available(OSX 10.10, *) var isActive: Bool { @objc get @objc (setActive:) set }
	@objc var constant: CGFloat { get set }
	@objc @available(OSX 10.12, *) var firstAnchor: NSLayoutAnchor<AnyObject> { @objc get }
	@objc var firstAttribute: NSLayoutConstraint.Attribute { @objc get }
	@objc var firstItem: AnyObject? { @objc get }
	@objc @available(OSX 10.7, *) var identifier: String? { @objc get @objc (setIdentifier:) set }
	@objc var multiplier: CGFloat { get }
	@objc var priority: NSLayoutConstraint.Priority { @objc get @objc (setPriority:) set }
	@objc var relation: NSLayoutConstraint.Relation { @objc get }
	@objc @available(OSX 10.12, *) var secondAnchor: NSLayoutAnchor<AnyObject>? { @objc get }
	@objc var secondAttribute: NSLayoutConstraint.Attribute { @objc get }
	@objc var secondItem: AnyObject? { @objc get }
	@objc var shouldBeArchived: Bool { @objc get @objc (setShouldBeArchived:) set }

	// Constructors
}

extension NSLayoutConstraint: NSLayoutConstraintExports {
}
