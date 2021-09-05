import AppKit
import JavaScriptCore

@objc protocol NSPathComponentCellExports: JSExport {
	@objc var url: URL? { @objc (URL) get @objc (setURL:) set }
}

extension NSPathComponentCell: NSPathComponentCellExports {
	@objc override class func create() -> NSPathComponentCell {
		return NSPathComponentCell()
	}
}
