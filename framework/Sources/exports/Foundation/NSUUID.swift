import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSUUIDExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (getUUIDBytes:) func getBytes(_: UnsafeMutablePointer<UInt8>)

	// Own Instance Properties
	@objc var uuidString: String { @objc (UUIDString) get }
}

extension NSUUID: NSUUIDExports {}
