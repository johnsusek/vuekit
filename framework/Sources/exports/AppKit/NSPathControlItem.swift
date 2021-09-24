import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPathControlItemExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc (URL) var url: URL? { get }
	@objc var attributedTitle: NSAttributedString { @objc get @objc (setAttributedTitle:) set }
	@objc var image: NSImage? { @objc get @objc (setImage:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }

	// Constructors
}

extension NSPathControlItem: NSPathControlItemExports {
}
