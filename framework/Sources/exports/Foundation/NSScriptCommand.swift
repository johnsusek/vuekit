import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSScriptCommandExports: JSExport {
	// , NSCodingExports
	// Static Methods
	@objc (currentCommand) static func current() -> NSScriptCommand?

	// Instance Methods
	@objc (executeCommand) func execute() -> Any?
	@objc func performDefaultImplementation() -> Any?
	@objc (resumeExecutionWithResult:) func resumeExecution(withResult: Any?)
	@objc func suspendExecution()

	// Own Instance Properties
	@objc var appleEvent: NSAppleEventDescriptor? { @objc get }
	@objc var `arguments`: [String: Any]? { @objc get @objc (setArguments:) set }
	@objc var commandDescription: NSScriptCommandDescription { @objc get }
	@objc var directParameter: Any? { @objc get @objc (setDirectParameter:) set }
	@objc var evaluatedArguments: [String: Any]? { @objc get }
	@objc var evaluatedReceivers: Any? { @objc get }
	@objc var receiversSpecifier: NSScriptObjectSpecifier? { @objc get @objc (setReceiversSpecifier:) set }
	@objc @available(OSX 10.5, *) var scriptErrorExpectedTypeDescriptor: NSAppleEventDescriptor? { @objc get @objc (setScriptErrorExpectedTypeDescriptor:) set }
	@objc var scriptErrorNumber: Int { @objc get @objc (setScriptErrorNumber:) set }
	@objc @available(OSX 10.5, *) var scriptErrorOffendingObjectDescriptor: NSAppleEventDescriptor? { @objc get @objc (setScriptErrorOffendingObjectDescriptor:) set }
	@objc var scriptErrorString: String? { @objc get @objc (setScriptErrorString:) set }
	@objc var isWellFormed: Bool { @objc get }

	// Constructors
	@objc static func create() -> NSScriptCommand
	@objc static func create(commandDescription: NSScriptCommandDescription) -> NSScriptCommand
}

extension NSScriptCommand: NSScriptCommandExports {
	@objc class func create() -> NSScriptCommand {
		return NSScriptCommand()
	}

	@objc class func create(commandDescription: NSScriptCommandDescription) -> NSScriptCommand {
		return NSScriptCommand(commandDescription: commandDescription)
	}

}
