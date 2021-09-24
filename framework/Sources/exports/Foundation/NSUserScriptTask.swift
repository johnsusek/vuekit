import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSUserScriptTaskExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (executeWithCompletionHandler:) func execute(completionHandler handler: NSUserScriptTask.CompletionHandler?)

	// Own Instance Properties
	@objc var scriptURL: URL { get }
}

extension NSUserScriptTask: NSUserScriptTaskExports {}
