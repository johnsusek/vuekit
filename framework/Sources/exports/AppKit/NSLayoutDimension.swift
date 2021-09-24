import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSLayoutDimensionExports: JSExport, NSLayoutAnchorExports {
	// Static Methods

	// Instance Methods
	@objc (constraintEqualToAnchor:multiplier:) func constraint(equalTo anchor: NSLayoutDimension, multiplier m: CGFloat) -> NSLayoutConstraint
	@objc (constraintEqualToAnchor:multiplier:constant:) func constraint(equalTo anchor: NSLayoutDimension, multiplier m: CGFloat, constant c: CGFloat) -> NSLayoutConstraint
	@objc (constraintEqualToConstant:) func constraint(equalToConstant c: CGFloat) -> NSLayoutConstraint
	@objc (constraintGreaterThanOrEqualToAnchor:multiplier:) func constraint(greaterThanOrEqualTo anchor: NSLayoutDimension, multiplier m: CGFloat) -> NSLayoutConstraint
	@objc (constraintGreaterThanOrEqualToAnchor:multiplier:constant:) func constraint(greaterThanOrEqualTo anchor: NSLayoutDimension, multiplier m: CGFloat, constant c: CGFloat) -> NSLayoutConstraint
	@objc (constraintGreaterThanOrEqualToConstant:) func constraint(greaterThanOrEqualToConstant c: CGFloat) -> NSLayoutConstraint
	@objc (constraintLessThanOrEqualToAnchor:multiplier:) func constraint(lessThanOrEqualTo anchor: NSLayoutDimension, multiplier m: CGFloat) -> NSLayoutConstraint
	@objc (constraintLessThanOrEqualToAnchor:multiplier:constant:) func constraint(lessThanOrEqualTo anchor: NSLayoutDimension, multiplier m: CGFloat, constant c: CGFloat) -> NSLayoutConstraint
	@objc (constraintLessThanOrEqualToConstant:) func constraint(lessThanOrEqualToConstant c: CGFloat) -> NSLayoutConstraint

	// Constructors
}

extension NSLayoutDimension: NSLayoutDimensionExports {
}
