import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSUserAppleScriptTaskExports: JSExport, NSUserScriptTaskExports {
	// Static Methods

	// Instance Methods
	@objc (executeWithAppleEvent:completionHandler:) func execute(withAppleEvent event: NSAppleEventDescriptor?, completionHandler handler: NSUserAppleScriptTask.CompletionHandler?)
}

extension NSUserAppleScriptTask: NSUserAppleScriptTaskExports {}
