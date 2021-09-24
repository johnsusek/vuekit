import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSUserAutomatorTaskExports: JSExport, NSUserScriptTaskExports {
	// Static Methods

	// Instance Methods
	@objc (executeWithInput:completionHandler:) func execute(withInput input: NSSecureCoding?, completionHandler handler: NSUserAutomatorTask.CompletionHandler?)

	// Own Instance Properties
	@objc var variables: [String: Any]? { @objc get @objc (setVariables:) set }
}

extension NSUserAutomatorTask: NSUserAutomatorTaskExports {}
