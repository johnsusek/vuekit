import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSScriptCoercionHandlerExports: JSExport {
	// Static Methods
	@objc (sharedCoercionHandler) static func shared() -> NSScriptCoercionHandler

	// Instance Methods
	@objc (coerceValue:toClass:) func coerceValue(_: Any, to: AnyClass) -> Any?
	@objc (registerCoercer:selector:toConvertFromClass:toClass:) func registerCoercer(_: Any, selector: Selector, toConvertFrom: AnyClass, to: AnyClass)

	// Constructors
	@objc static func create() -> NSScriptCoercionHandler
}

extension NSScriptCoercionHandler: NSScriptCoercionHandlerExports {
	@objc class func create() -> NSScriptCoercionHandler {
		return NSScriptCoercionHandler()
	}

}
