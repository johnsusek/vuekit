import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSharingServicePickerExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (showRelativeToRect:ofView:preferredEdge:) func show(relativeTo: NSRect, of: NSView, preferredEdge: NSRectEdge)

	// Own Instance Properties
	@objc var delegate: NSSharingServicePickerDelegate? { @objc get @objc (setDelegate:) set }

	// Constructors
	@objc static func create(items: [Any]) -> NSSharingServicePicker
}

extension NSSharingServicePicker: NSSharingServicePickerExports {
	@objc class func create(items: [Any]) -> NSSharingServicePicker {
		return NSSharingServicePicker(items: items)
	}

}
