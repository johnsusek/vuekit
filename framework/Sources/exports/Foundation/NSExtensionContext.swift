import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSExtensionContextExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (cancelRequestWithError:) func cancelRequest(withError: Error)
	// jsvalue - @objc (completeRequestReturningItems:completionHandler:) func completeRequest(returningItems: [Any]?, completionHandler: JSValue)
	// jsvalue - @objc (openURL:completionHandler:) func open(_: NSURL, completionHandler: JSValue)

	// Own Instance Properties
	@objc var inputItems: [Any] { @objc get }

	// Constructors
	@objc static func create() -> NSExtensionContext
}

extension NSExtensionContext: NSExtensionContextExports {
	@objc class func create() -> NSExtensionContext {
		return NSExtensionContext()
	}

}
