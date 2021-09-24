import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSUserDefaultsControllerExports: JSExport, NSControllerExports {
	// Static Methods

	// Own Static Properties
	@objc (sharedUserDefaultsController) static var shared: NSUserDefaultsController { @objc (sharedUserDefaultsController) get }

	// Instance Methods
	@objc func revert(_: Any?)
	@objc func revertToInitialValues(_: Any?)
	@objc func save(_: Any?)

	// Own Instance Properties
	@objc var appliesImmediately: Bool { @objc get @objc (setAppliesImmediately:) set }
	@objc var defaults: UserDefaults { @objc get }
	@objc var hasUnappliedChanges: Bool { @objc get }
	@objc var initialValues: [String: Any]? { @objc get @objc (setInitialValues:) set }
	@objc var values: Any { @objc get }

	// Constructors
	@objc static func create(defaults: UserDefaults?, initialValues: [String: Any]?) -> NSUserDefaultsController
}

extension NSUserDefaultsController: NSUserDefaultsControllerExports {
	@objc class func create(defaults: UserDefaults?, initialValues: [String: Any]?) -> NSUserDefaultsController {
		return NSUserDefaultsController(defaults: defaults, initialValues: initialValues)
	}

}
