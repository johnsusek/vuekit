import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSFilePromiseProviderExports: JSExport {
	// , NSPasteboardWritingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var delegate: NSFilePromiseProviderDelegate? { @objc get @objc (setDelegate:) set }
	@objc var fileType: String { @objc get @objc (setFileType:) set }
	@objc var userInfo: Any? { @objc get @objc (setUserInfo:) set }
}

extension NSFilePromiseProvider: NSFilePromiseProviderExports {}
