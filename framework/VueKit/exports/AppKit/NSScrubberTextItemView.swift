import AppKit
import JavaScriptCore

@objc protocol NSScrubberTextItemViewExports: JSExport {
	@objc var textField: NSTextField { @objc get }
	@objc var title: String { @objc get @objc (setTitle:) set }
	@objc static func create() -> ScrubberTextItemView
}

class ScrubberTextItemView: NSScrubberTextItemView, NSScrubberTextItemViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> ScrubberTextItemView {
		return ScrubberTextItemView()
	}
}
