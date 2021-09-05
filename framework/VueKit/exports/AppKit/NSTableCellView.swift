import AppKit
import JavaScriptCore

@objc protocol NSTableCellViewExports: JSExport {
	@objc var backgroundStyle: NSView.BackgroundStyle { @objc get @objc (setBackgroundStyle:) set }
	@objc var draggingImageComponents: [NSDraggingImageComponent] { @objc get }
	@objc var imageView: NSImageView? { @objc get @objc (setImageView:) set }
	@objc var objectValue: Any? { @objc get @objc (setObjectValue:) set }
	@objc var rowSizeStyle: NSTableView.RowSizeStyle { @objc get @objc (setRowSizeStyle:) set }
	@objc var textField: NSTextField? { @objc get @objc (setTextField:) set }
	@objc static func create() -> TableCellView
}

class TableCellView: NSTableCellView, NSTableCellViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> TableCellView {
		return TableCellView()
	}
}
