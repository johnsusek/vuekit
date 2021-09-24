import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSUserUnixTaskExports: JSExport, NSUserScriptTaskExports {
	// Static Methods

	// Instance Methods
	@objc (executeWithArguments:completionHandler:) func execute(withArguments arguments: [String]?, completionHandler handler: NSUserUnixTask.CompletionHandler?)

	// Own Instance Properties
	@objc var standardError: FileHandle? { @objc get @objc (setStandardError:) set }
	@objc var standardInput: FileHandle? { @objc get @objc (setStandardInput:) set }
	@objc var standardOutput: FileHandle? { @objc get @objc (setStandardOutput:) set }
}

extension NSUserUnixTask: NSUserUnixTaskExports {}
