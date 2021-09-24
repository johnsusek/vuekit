import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSGroupTouchBarItemExports: JSExport, NSTouchBarItemExports {
	// Static Methods

	// Own Instance Properties
	@objc var customizationLabel: String! { @objc get @objc (setCustomizationLabel:) set }
	@objc @available(OSX 10.13, *) var effectiveCompressionOptions: NSUserInterfaceCompressionOptions { @objc get }
	@objc var groupTouchBar: NSTouchBar { @objc get @objc (setGroupTouchBar:) set }
	@objc @available(OSX 10.13, *) var groupUserInterfaceLayoutDirection: NSUserInterfaceLayoutDirection { @objc get @objc (setGroupUserInterfaceLayoutDirection:) set }
	@objc @available(OSX 10.13, *) var preferredItemWidth: CGFloat { get set }
	@objc @available(OSX 10.13, *) var prefersEqualWidths: Bool { @objc get @objc (setPrefersEqualWidths:) set }
	@objc @available(OSX 10.13, *) var prioritizedCompressionOptions: [NSUserInterfaceCompressionOptions] { @objc get @objc (setPrioritizedCompressionOptions:) set }

	// Constructors
	@objc @available(OSX 10.13, *) static func create(alertStyleWithIdentifier: NSTouchBarItem.Identifier) -> NSGroupTouchBarItem
	@objc static func create(identifier: NSTouchBarItem.Identifier, items: [NSTouchBarItem]) -> NSGroupTouchBarItem
	@objc @available(OSX 10.13, *) static func create(identifier: NSTouchBarItem.Identifier, items: [NSTouchBarItem], allowedCompressionOptions: NSUserInterfaceCompressionOptions) -> NSGroupTouchBarItem
}

extension NSGroupTouchBarItem: NSGroupTouchBarItemExports {
	@objc class func create(identifier: NSTouchBarItem.Identifier, items: [NSTouchBarItem]) -> NSGroupTouchBarItem {
		return NSGroupTouchBarItem(identifier: identifier, items: items)
	}

	@objc @available(OSX 10.13, *) class func create(identifier: NSTouchBarItem.Identifier, items: [NSTouchBarItem], allowedCompressionOptions: NSUserInterfaceCompressionOptions) -> NSGroupTouchBarItem {
		return NSGroupTouchBarItem(identifier: identifier, items: items, allowedCompressionOptions: allowedCompressionOptions)
	}

	@objc @available(OSX 10.13, *) class func create(alertStyleWithIdentifier: NSTouchBarItem.Identifier) -> NSGroupTouchBarItem {
		return NSGroupTouchBarItem(alertStyleWithIdentifier: alertStyleWithIdentifier)
	}

}
