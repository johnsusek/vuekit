import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSAccessibilityCustomRotorExports: JSExport {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var itemLoadingDelegate: NSAccessibilityElementLoading? { @objc get @objc (setItemLoadingDelegate:) set }
	@objc var itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate? { @objc get @objc (setItemSearchDelegate:) set }
	@objc var label: String { @objc get @objc (setLabel:) set }
	@objc var type: NSAccessibilityCustomRotor.RotorType { @objc get @objc (setType:) set }
}

extension NSAccessibilityCustomRotor: NSAccessibilityCustomRotorExports {}
