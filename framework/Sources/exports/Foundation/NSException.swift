import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSExceptionExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc func raise()

	// Own Instance Properties
	@objc @available(OSX 10.5, *) var callStackReturnAddresses: [NSNumber] { @objc get }
	@objc @available(OSX 10.6, *) var callStackSymbols: [String] { @objc get }
	@objc var name: NSExceptionName { @objc get }
	@objc var reason: String? { @objc get }
	@objc var userInfo: [AnyHashable: Any]? { @objc get }

	// Constructors
	@objc static func create(name: NSExceptionName, reason: String?, userInfo: [AnyHashable: Any]?) -> NSException
}

extension NSException: NSExceptionExports {
	@objc class func create(name: NSExceptionName, reason: String?, userInfo: [AnyHashable: Any]?) -> NSException {
		return NSException(name: name, reason: reason, userInfo: userInfo)
	}

}
