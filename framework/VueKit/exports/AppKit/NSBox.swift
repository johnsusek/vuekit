import AppKit
import JavaScriptCore

@objc protocol NSBoxExports: JSExport {
	@objc @available(OSX 10.5, *) var borderColor: NSColor { @objc get @objc (setBorderColor:) set }
	@objc var borderRect: NSRect { @objc get }
	@objc @available(OSX 10.5, *) var borderWidth: CGFloat { @objc get @objc (setBorderWidth:) set }
	@objc var boxType: NSBox.BoxType { @objc get @objc (setBoxType:) set }
	@objc var contentView: NSView? { @objc get @objc (setContentView:) set }
	@objc var contentViewMargins: NSSize { @objc get @objc (setContentViewMargins:) set }
	@objc @available(OSX 10.5, *) var cornerRadius: CGFloat { @objc get @objc (setCornerRadius:) set }
	@objc @available(OSX 10.5, *) var fillColor: NSColor { @objc get @objc (setFillColor:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }
	@objc var titleCell: Any { @objc get }
	@objc var titleFont: NSFont { @objc get @objc (setTitleFont:) set }
	@objc var titlePosition: NSBox.TitlePosition { @objc get @objc (setTitlePosition:) set }
	@objc var titleRect: NSRect { @objc get }
	@objc @available(OSX 10.5, *) var isTransparent: Bool { @objc get @objc (setTransparent:) set }
	@objc func setFrameFromContentFrame(_: NSRect)
	@objc func sizeToFit()
	@objc static func create() -> Box
}

class Box: NSBox, NSBoxExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> Box {
		return Box()
	}
}
