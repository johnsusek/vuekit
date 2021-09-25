import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTouchBarExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Own Static Properties
	@objc @available(OSX 10.15, *) static var isAutomaticCustomizeTouchBarMenuItemEnabled: Bool { @objc get @objc (setAutomaticCustomizeTouchBarMenuItemEnabled:) set }

	// Instance Methods
	@objc (itemForIdentifier:) func item(forIdentifier: NSTouchBarItem.Identifier) -> NSTouchBarItem?

	// Own Instance Properties
	@objc var customizationAllowedItemIdentifiers: [NSTouchBarItem.Identifier] { get set }
	@objc var customizationIdentifier: NSTouchBar.CustomizationIdentifier? { @objc get @objc (setCustomizationIdentifier:) set }
	@objc var customizationRequiredItemIdentifiers: [NSTouchBarItem.Identifier] { get set }
	@objc var defaultItemIdentifiers: [NSTouchBarItem.Identifier] { get set }
	@objc var delegate: NSTouchBarDelegate? { @objc get @objc (setDelegate:) set }
	@objc var escapeKeyReplacementItemIdentifier: NSTouchBarItem.Identifier? { @objc get @objc (setEscapeKeyReplacementItemIdentifier:) set }
	@objc var itemIdentifiers: [NSTouchBarItem.Identifier] { get }
	@objc var principalItemIdentifier: NSTouchBarItem.Identifier? { @objc get @objc (setPrincipalItemIdentifier:) set }
	@objc var templateItems: Set<NSTouchBarItem> { @objc get @objc (setTemplateItems:) set }
	@objc var isVisible: Bool { @objc get }

	// Constructors
	@objc static func create() -> NSTouchBar
}

extension NSTouchBar: NSTouchBarExports {
	@objc class func create() -> NSTouchBar {
		return NSTouchBar()
	}

}
