import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSErrorExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods
	@objc (setUserInfoValueProviderForDomain:provider:) @available(OSX 10.11, *) static func setUserInfoValueProvider(forDomain errorDomain: String, provider: ((Error, String) -> Any?)?)
	// jsvalue - @objc (userInfoValueProviderForDomain:) @available(OSX 10.11, *) static func userInfoValueProvider(forDomain: NSErrorDomain) -> JSValue

	// Instance Methods

	// Own Instance Properties
	@objc var code: Int { @objc get }
	@objc var domain: String { get }
	@objc var helpAnchor: String? { @objc get }
	@objc var localizedDescription: String { @objc get }
	@objc var localizedFailureReason: String? { @objc get }
	@objc var localizedRecoveryOptions: [String]? { @objc get }
	@objc var localizedRecoverySuggestion: String? { @objc get }
	@objc var recoveryAttempter: Any? { @objc get }
	@objc var userInfo: [String: Any] { @objc get }
}

extension NSError: NSErrorExports {}
