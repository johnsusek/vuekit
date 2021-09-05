import AppKit
import JavaScriptCore

@objc protocol NSActionCellExports: JSExport {
}

extension NSActionCell: NSActionCellExports {
	@objc override class func create() -> NSActionCell {
		return NSActionCell()
	}
}
