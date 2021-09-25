import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextAttachmentExports: JSExport {
	// , NSSecureCodingExports, NSTextAttachmentContainerExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc @available(OSX 10.0, *) var attachmentCell: NSTextAttachmentCellProtocol? { @objc get @objc (setAttachmentCell:) set }
	@objc @available(OSX 10.11, *) var bounds: NSRect { @objc get @objc (setBounds:) set }
	@objc @available(OSX 10.11, *) var contents: Data? { @objc get @objc (setContents:) set }
	@objc @available(OSX 10.11, *) var fileType: String? { @objc get @objc (setFileType:) set }
	@objc var fileWrapper: FileWrapper? { @objc get @objc (setFileWrapper:) set }
	@objc @available(OSX 10.11, *) var image: NSImage? { @objc get @objc (setImage:) set }

	// Constructors
	@objc static func create() -> NSTextAttachment
	@objc @available(OSX 10.11, *) static func create(data: Data?, ofType: String?) -> NSTextAttachment
	@objc static func create(fileWrapper: FileWrapper?) -> NSTextAttachment
}

extension NSTextAttachment: NSTextAttachmentExports {
	@objc class func create() -> NSTextAttachment {
		return NSTextAttachment()
	}

	@objc @available(OSX 10.11, *) class func create(data: Data?, ofType: String?) -> NSTextAttachment {
		return NSTextAttachment(data: data, ofType: ofType)
	}

	@objc class func create(fileWrapper: FileWrapper?) -> NSTextAttachment {
		return NSTextAttachment(fileWrapper: fileWrapper)
	}

}
