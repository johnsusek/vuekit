import AppKit
import JavaScriptCore

@objc protocol NSLayoutAnchorExports: JSExport {
	@objc @available(OSX 10.12, *) var constraintsAffectingLayout: [NSLayoutConstraint] { @objc get }
	@objc @available(OSX 10.12, *) var hasAmbiguousLayout: Bool { @objc get }
	@objc @available(OSX 10.12, *) var item: AnyObject? { @objc get }
	@objc @available(OSX 10.12, *) var name: String { @objc get }
	@objc func constraint(equalTo: JSValue) -> NSLayoutConstraint
	@objc func constraint(equalTo: JSValue, constant: CGFloat) -> NSLayoutConstraint
	@objc func constraint(greaterThanOrEqualTo: JSValue) -> NSLayoutConstraint
	@objc func constraint(greaterThanOrEqualTo: JSValue, constant: CGFloat) -> NSLayoutConstraint
	@objc func constraint(lessThanOrEqualTo: JSValue) -> NSLayoutConstraint
	@objc func constraint(lessThanOrEqualTo: JSValue, constant: CGFloat) -> NSLayoutConstraint
}

extension NSLayoutAnchor: NSLayoutAnchorExports {
	@objc func constraint(equalTo: JSValue) -> NSLayoutConstraint {
		return self.constraint(equalTo: equalTo.toObjectOf(NSLayoutAnchor.self) as! NSLayoutAnchor<AnchorType>)
	}

	@objc func constraint(equalTo: JSValue, constant: CGFloat) -> NSLayoutConstraint {
		return self.constraint(equalTo: equalTo.toObjectOf(NSLayoutAnchor.self) as! NSLayoutAnchor<AnchorType>, constant: constant)
	}

	@objc func constraint(greaterThanOrEqualTo: JSValue) -> NSLayoutConstraint {
		return self.constraint(greaterThanOrEqualTo: greaterThanOrEqualTo.toObjectOf(NSLayoutAnchor.self) as! NSLayoutAnchor<AnchorType>)
	}

	@objc func constraint(greaterThanOrEqualTo: JSValue, constant: CGFloat) -> NSLayoutConstraint {
		return self.constraint(greaterThanOrEqualTo: greaterThanOrEqualTo.toObjectOf(NSLayoutAnchor.self) as! NSLayoutAnchor<AnchorType>, constant: constant)
	}

	@objc func constraint(lessThanOrEqualTo: JSValue) -> NSLayoutConstraint {
		return self.constraint(lessThanOrEqualTo: lessThanOrEqualTo.toObjectOf(NSLayoutAnchor.self) as! NSLayoutAnchor<AnchorType>)
	}

	@objc func constraint(lessThanOrEqualTo: JSValue, constant: CGFloat) -> NSLayoutConstraint {
		return self.constraint(lessThanOrEqualTo: lessThanOrEqualTo.toObjectOf(NSLayoutAnchor.self) as! NSLayoutAnchor<AnchorType>, constant: constant)
	}

}
