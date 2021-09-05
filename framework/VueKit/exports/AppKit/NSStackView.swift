import AppKit
import JavaScriptCore

@objc protocol NSStackViewExports: JSExport {
	@objc var alignment: NSLayoutConstraint.Attribute { @objc get @objc (setAlignment:) set }
	@objc @available(OSX 10.11, *) var arrangedSubviews: [NSView] { @objc get }
	@objc var delegate: NSStackViewDelegate? { @objc get @objc (setDelegate:) set }
	@objc var detachedViews: [NSView] { @objc get }
	@objc @available(OSX 10.11, *) var detachesHiddenViews: Bool { @objc get @objc (setDetachesHiddenViews:) set }
	@objc @available(OSX 10.11, *) var distribution: NSStackView.Distribution { @objc get @objc (setDistribution:) set }
	@objc var edgeInsets: NSEdgeInsets { @objc get @objc (setEdgeInsets:) set }
	@objc var orientation: NSUserInterfaceLayoutOrientation { @objc get @objc (setOrientation:) set }
	@objc var spacing: CGFloat { @objc get @objc (setSpacing:) set }
	@objc var views: [NSView] { @objc get }
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
	@objc (setCustomSpacing:afterView:) func setCustomSpacing(_: CGFloat, after: NSView)
	@objc (setHuggingPriority:forOrientation:) func setHuggingPriority(_: NSLayoutConstraint.Priority, `for`: NSLayoutConstraint.Orientation)
	@objc (setViews:inGravity:) func setViews(_: [NSView], in: NSStackView.Gravity)
	@objc (setVisibilityPriority:forView:) func setVisibilityPriority(_: NSStackView.VisibilityPriority, `for`: NSView)
	@objc (viewsInGravity:) func views(in: NSStackView.Gravity) -> [NSView]
	@objc (visibilityPriorityForView:) func visibilityPriority(`for`: NSView) -> NSStackView.VisibilityPriority
	@objc static func create(views: JSValue) -> StackView
	@objc static func create() -> StackView
}

class StackView: NSStackView, NSStackViewExports, JSOverridable {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create(views: JSValue) -> StackView {
		return StackView(views: views.toObjectOf(NSArray.self) as! [NSView])
	}

	@objc override class func create() -> StackView {
		return StackView()
	}
}
