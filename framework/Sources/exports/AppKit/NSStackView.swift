import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSStackViewExports: JSExport, NSViewExports {
	// Static Methods

	// Instance Methods
	@objc @available(OSX 10.11, *) func addArrangedSubview(_: NSView)
	@objc (addView:inGravity:) func addView(_: NSView, in: NSStackView.Gravity)
	@objc (clippingResistancePriorityForOrientation:) func clippingResistancePriority(`for`: NSLayoutConstraint.Orientation) -> NSLayoutConstraint.Priority
	@objc (customSpacingAfterView:) func customSpacing(after: NSView) -> CGFloat
	@objc (huggingPriorityForOrientation:) func huggingPriority(`for`: NSLayoutConstraint.Orientation) -> NSLayoutConstraint.Priority
	@objc (insertArrangedSubview:atIndex:) @available(OSX 10.11, *) func insertArrangedSubview(_: NSView, at: Int)
	@objc (insertView:atIndex:inGravity:) func insertView(_: NSView, at: Int, in: NSStackView.Gravity)
	@objc @available(OSX 10.11, *) func removeArrangedSubview(_: NSView)
	@objc func removeView(_: NSView)
	@objc (setClippingResistancePriority:forOrientation:) func setClippingResistancePriority(_: NSLayoutConstraint.Priority, `for`: NSLayoutConstraint.Orientation)
	@objc (setCustomSpacing:afterView:) func setCustomSpacing(_ spacing: CGFloat, after view: NSView)
	@objc (setHuggingPriority:forOrientation:) func setHuggingPriority(_: NSLayoutConstraint.Priority, `for`: NSLayoutConstraint.Orientation)
	@objc (setViews:inGravity:) func setViews(_: [NSView], in: NSStackView.Gravity)
	@objc (setVisibilityPriority:forView:) func setVisibilityPriority(_: NSStackView.VisibilityPriority, `for`: NSView)
	@objc (viewsInGravity:) func views(in: NSStackView.Gravity) -> [NSView]
	@objc (visibilityPriorityForView:) func visibilityPriority(`for`: NSView) -> NSStackView.VisibilityPriority

	// Own Instance Properties
	@objc var alignment: NSLayoutConstraint.Attribute { @objc get @objc (setAlignment:) set }
	@objc @available(OSX 10.11, *) var arrangedSubviews: [NSView] { @objc get }
	@objc var delegate: NSStackViewDelegate? { @objc get @objc (setDelegate:) set }
	@objc var detachedViews: [NSView] { @objc get }
	@objc @available(OSX 10.11, *) var detachesHiddenViews: Bool { @objc get @objc (setDetachesHiddenViews:) set }
	@objc @available(OSX 10.11, *) var distribution: NSStackView.Distribution { @objc get @objc (setDistribution:) set }
	@objc var edgeInsets: NSEdgeInsets { @objc get @objc (setEdgeInsets:) set }
	@objc var orientation: NSUserInterfaceLayoutOrientation { @objc get @objc (setOrientation:) set }
	@objc var spacing: CGFloat { get set }
	@objc var views: [NSView] { @objc get }
}

@objc protocol StackViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> StackView
}

class StackView: NSStackView, StackViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> StackView {
		return StackView()
	}

}

extension NSStackView: NSStackViewExports {}
