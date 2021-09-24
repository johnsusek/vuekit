import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSDraggingItemExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func setDraggingFrame(_: NSRect, contents: Any?)

	// Own Instance Properties
	@objc var draggingFrame: NSRect { @objc get @objc (setDraggingFrame:) set }
	@objc var imageComponents: [NSDraggingImageComponent]? { @objc get }
	@objc var imageComponentsProvider: (() -> [NSDraggingImageComponent])? { get set }
	@objc var item: Any { get }
}

extension NSDraggingItem: NSDraggingItemExports {}
