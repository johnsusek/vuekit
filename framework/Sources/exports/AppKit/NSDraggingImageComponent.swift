import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSDraggingImageComponentExports: JSExport {
	// Static Methods
	// 	@objc static func create(key: NSDraggingItem.ImageComponentKey) -> NSDraggingImageComponent

	// Instance Methods

	// Own Instance Properties
	@objc var contents: Any? { @objc get @objc (setContents:) set }
	@objc var frame: NSRect { @objc get @objc (setFrame:) set }
	@objc var key: NSDraggingItem.ImageComponentKey { @objc get @objc (setKey:) set }
}

extension NSDraggingImageComponent: NSDraggingImageComponentExports {}
