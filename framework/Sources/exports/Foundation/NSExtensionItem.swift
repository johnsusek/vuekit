import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSExtensionItemExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Own Instance Properties
	@objc var attachments: [NSItemProvider]? { @objc get @objc (setAttachments:) set }
	@objc var attributedContentText: NSAttributedString? { @objc get @objc (setAttributedContentText:) set }
	@objc var attributedTitle: NSAttributedString? { @objc get @objc (setAttributedTitle:) set }
	@objc var userInfo: [AnyHashable: Any]? { @objc get @objc (setUserInfo:) set }

	// Constructors
}

extension NSExtensionItem: NSExtensionItemExports {
}
