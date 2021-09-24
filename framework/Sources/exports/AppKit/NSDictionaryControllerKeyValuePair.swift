import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSDictionaryControllerKeyValuePairExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var isExplicitlyIncluded: Bool { @objc get }
	@objc var key: String? { @objc get @objc (setKey:) set }
	@objc var localizedKey: String? { @objc get @objc (setLocalizedKey:) set }
	@objc var value: Any? { @objc get @objc (setValue:) set }

	// Constructors
}

extension NSDictionaryControllerKeyValuePair: NSDictionaryControllerKeyValuePairExports {
}
