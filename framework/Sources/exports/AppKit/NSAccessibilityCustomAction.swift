import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSAccessibilityCustomActionExports: JSExport {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var handler: (() -> Bool)? { get set }
	@objc var name: String { @objc get @objc (setName:) set }
	@objc var selector: Selector? { @objc get @objc (setSelector:) set }
	@objc var target: NSObjectProtocol? { get set }
}

extension NSAccessibilityCustomAction: NSAccessibilityCustomActionExports {}
