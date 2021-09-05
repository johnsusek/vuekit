import AppKit
import JavaScriptCore

@objc protocol NSLayoutDimensionExports: JSExport {
	@objc (constraintEqualToAnchor:multiplier:) func constraint(equalTo: NSLayoutDimension, multiplier: CGFloat) -> NSLayoutConstraint
	@objc (constraintEqualToAnchor:multiplier:constant:) func constraint(equalTo: NSLayoutDimension, multiplier: CGFloat, constant: CGFloat) -> NSLayoutConstraint
	@objc (constraintEqualToConstant:) func constraint(equalToConstant: CGFloat) -> NSLayoutConstraint
	@objc (constraintGreaterThanOrEqualToAnchor:multiplier:) func constraint(greaterThanOrEqualTo: NSLayoutDimension, multiplier: CGFloat) -> NSLayoutConstraint
	@objc (constraintGreaterThanOrEqualToAnchor:multiplier:constant:) func constraint(greaterThanOrEqualTo: NSLayoutDimension, multiplier: CGFloat, constant: CGFloat) -> NSLayoutConstraint
	@objc (constraintGreaterThanOrEqualToConstant:) func constraint(greaterThanOrEqualToConstant: CGFloat) -> NSLayoutConstraint
	@objc (constraintLessThanOrEqualToAnchor:multiplier:) func constraint(lessThanOrEqualTo: NSLayoutDimension, multiplier: CGFloat) -> NSLayoutConstraint
	@objc (constraintLessThanOrEqualToAnchor:multiplier:constant:) func constraint(lessThanOrEqualTo: NSLayoutDimension, multiplier: CGFloat, constant: CGFloat) -> NSLayoutConstraint
	@objc (constraintLessThanOrEqualToConstant:) func constraint(lessThanOrEqualToConstant: CGFloat) -> NSLayoutConstraint
}

extension NSLayoutDimension: NSLayoutDimensionExports {
	@objc override class func create() -> NSLayoutDimension {
		return NSLayoutDimension()
	}
}
