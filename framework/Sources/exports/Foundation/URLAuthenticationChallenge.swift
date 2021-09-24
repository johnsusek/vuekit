import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLAuthenticationChallengeExports: JSExport {
	// , NSSecureCodingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var error: Error? { @objc get }
	@objc var failureResponse: URLResponse? { @objc get }
	@objc var previousFailureCount: Int { @objc get }
	@objc var proposedCredential: URLCredential? { @objc get }
	@objc var protectionSpace: URLProtectionSpace { @objc get }
	@objc var sender: URLAuthenticationChallengeSender? { @objc get }
}

extension URLAuthenticationChallenge: URLAuthenticationChallengeExports {}
