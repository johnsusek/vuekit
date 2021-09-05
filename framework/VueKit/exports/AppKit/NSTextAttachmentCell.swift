import AppKit
import JavaScriptCore

@objc protocol NSTextAttachmentCellExports: JSExport {
}

extension NSTextAttachmentCell: NSTextAttachmentCellExports {
	@objc override class func create() -> NSTextAttachmentCell {
		return NSTextAttachmentCell()
	}
}
