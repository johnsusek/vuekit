import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSAppleScriptExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc func compileAndReturnError(_ errorInfo: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) -> Bool
	@objc func executeAndReturnError(_ errorInfo: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) -> NSAppleEventDescriptor
	@objc func executeAppleEvent(_ event: NSAppleEventDescriptor, error errorInfo: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) -> NSAppleEventDescriptor

	// Own Instance Properties
	@objc var isCompiled: Bool { @objc get }
	@objc var richTextSource: NSAttributedString? { @objc get }
	@objc var source: String? { @objc get }
}

extension NSAppleScript: NSAppleScriptExports {}
