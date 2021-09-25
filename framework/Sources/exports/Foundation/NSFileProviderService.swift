import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSFileProviderServiceExports: JSExport {
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (getFileProviderConnectionWithCompletionHandler:) func getFileProviderConnection(completionHandler: JSValue)

	// Own Instance Properties
	@objc var name: NSFileProviderServiceName { @objc get }

	// Constructors
	@objc static func create() -> NSFileProviderService
}

extension NSFileProviderService: NSFileProviderServiceExports {
	@objc class func create() -> NSFileProviderService {
		return NSFileProviderService()
	}

}
