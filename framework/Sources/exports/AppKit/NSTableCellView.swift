import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTableCellViewExports: JSExport, NSViewExports {
	// Static Methods

	// Own Instance Properties
	@objc var backgroundStyle: NSView.BackgroundStyle { @objc get @objc (setBackgroundStyle:) set }
	@objc var draggingImageComponents: [NSDraggingImageComponent] { @objc get }
	@objc var imageView: NSImageView? { @objc get @objc (setImageView:) set }
	@objc var objectValue: Any? { @objc get @objc (setObjectValue:) set }
	@objc var rowSizeStyle: NSTableView.RowSizeStyle { @objc get @objc (setRowSizeStyle:) set }
	@objc var textField: NSTextField? { @objc get @objc (setTextField:) set }
}

@objc protocol TableCellViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> TableCellView
}

class TableCellView: NSTableCellView, TableCellViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> TableCellView {
		return TableCellView()
	}

}

extension NSTableCellView: NSTableCellViewExports {}
