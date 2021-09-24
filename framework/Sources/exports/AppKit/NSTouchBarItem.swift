import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTouchBarItemExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var customizationLabel: String { @objc get }
	@objc var identifier: NSTouchBarItem.Identifier { @objc get }
	@objc var view: NSView? { @objc get }
	@objc var viewController: NSViewController? { @objc get }
	@objc var visibilityPriority: NSTouchBarItem.Priority { @objc get @objc (setVisibilityPriority:) set }
	@objc var isVisible: Bool { @objc get }

	// Constructors
	@objc static func create(identifier: NSTouchBarItem.Identifier) -> NSTouchBarItem
}

extension NSTouchBarItem: NSTouchBarItemExports {
	@objc class func create(identifier: NSTouchBarItem.Identifier) -> NSTouchBarItem {
		return NSTouchBarItem(identifier: identifier)
	}

}
