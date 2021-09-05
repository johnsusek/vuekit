import AppKit
import JavaScriptCore

@objc protocol NSTableHeaderViewExports: JSExport {
	@objc var draggedColumn: Int { @objc get }
	@objc var draggedDistance: CGFloat { @objc get }
	@objc var resizedColumn: Int { @objc get }
	@objc var tableView: NSTableView? { @objc get @objc (setTableView:) set }
	@objc (columnAtPoint:) func column(at: NSPoint) -> Int
	@objc (headerRectOfColumn:) func headerRect(ofColumn: Int) -> NSRect
	@objc static func create() -> TableHeaderView
}

class TableHeaderView: NSTableHeaderView, NSTableHeaderViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> TableHeaderView {
		return TableHeaderView()
	}
}
