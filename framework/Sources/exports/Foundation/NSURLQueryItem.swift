import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSURLQueryItemExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var name: String { @objc get }
	@objc var value: String? { @objc get }
}

extension NSURLQueryItem: NSURLQueryItemExports {}
