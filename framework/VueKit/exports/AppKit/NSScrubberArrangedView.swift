import AppKit
import JavaScriptCore

@objc protocol NSScrubberArrangedViewExports: JSExport {
	@objc var isHighlighted: Bool { @objc get @objc (setHighlighted:) set }
	@objc var isSelected: Bool { @objc get @objc (setSelected:) set }
	@objc (applyLayoutAttributes:) func apply(_: NSScrubberLayoutAttributes)
	@objc static func create() -> ScrubberArrangedView
}

class ScrubberArrangedView: NSScrubberArrangedView, NSScrubberArrangedViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> ScrubberArrangedView {
		return ScrubberArrangedView()
	}
}
