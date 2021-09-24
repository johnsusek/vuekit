import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSLayoutGuideExports: JSExport {
	// , NSCodingExports, NSUserInterfaceItemIdentificationExports
	// Static Methods

	// Instance Methods
	@objc (constraintsAffectingLayoutForOrientation:) @available(OSX 10.12, *) func constraintsAffectingLayout(`for`: NSLayoutConstraint.Orientation) -> [NSLayoutConstraint]

	// Own Instance Properties
	@objc var bottomAnchor: NSLayoutYAxisAnchor { @objc get }
	@objc var centerXAnchor: NSLayoutXAxisAnchor { @objc get }
	@objc var centerYAnchor: NSLayoutYAxisAnchor { @objc get }
	@objc var frame: NSRect { @objc get }
	@objc @available(OSX 10.12, *) var hasAmbiguousLayout: Bool { @objc get }
	@objc var heightAnchor: NSLayoutDimension { @objc get }
	@objc var leadingAnchor: NSLayoutXAxisAnchor { @objc get }
	@objc var leftAnchor: NSLayoutXAxisAnchor { @objc get }
	@objc var owningView: NSView? { @objc get @objc (setOwningView:) set }
	@objc var rightAnchor: NSLayoutXAxisAnchor { @objc get }
	@objc var topAnchor: NSLayoutYAxisAnchor { @objc get }
	@objc var trailingAnchor: NSLayoutXAxisAnchor { @objc get }
	@objc var widthAnchor: NSLayoutDimension { @objc get }

	// Constructors
}

extension NSLayoutGuide: NSLayoutGuideExports {
}
