import AppKit
import JavaScriptCore

@objc protocol NSLayoutGuideExports: JSExport {
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
	@objc (constraintsAffectingLayoutForOrientation:) @available(OSX 10.12, *) func constraintsAffectingLayout(`for`: NSLayoutConstraint.Orientation) -> [NSLayoutConstraint]
}

extension NSLayoutGuide: NSLayoutGuideExports {
	@objc override class func create() -> NSLayoutGuide {
		return NSLayoutGuide()
	}
}
