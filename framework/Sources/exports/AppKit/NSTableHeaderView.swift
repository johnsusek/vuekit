import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTableHeaderViewExports: JSExport, NSViewExports {
	// , NSViewToolTipOwnerExports
	// Static Methods

	// Instance Methods
	@objc (columnAtPoint:) func column(at: NSPoint) -> Int
	@objc (headerRectOfColumn:) func headerRect(ofColumn: Int) -> NSRect

	// Own Instance Properties
	@objc var draggedColumn: Int { @objc get }
	@objc var draggedDistance: CGFloat { get }
	@objc var resizedColumn: Int { @objc get }
	@objc var tableView: NSTableView? { @objc get @objc (setTableView:) set }
}

@objc protocol TableHeaderViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> TableHeaderView
}

class TableHeaderView: NSTableHeaderView, TableHeaderViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> TableHeaderView {
		return TableHeaderView()
	}

}

extension NSTableHeaderView: NSTableHeaderViewExports {}
