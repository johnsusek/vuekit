import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol ProcessExports: JSExport {
	// Static Methods
	// jsvalue - @objc (launchedTaskWithExecutableURL:arguments:error:terminationHandler:) @available(OSX 10.13, *) static func run(_: NSURL, _: [String], `arguments`: UnsafeMutablePointer<Error>?, terminationHandler: JSValue) -> Process?

	// Instance Methods
	@objc func interrupt()
	@objc @available(OSX 10.13, *) func run() -> Bool
	@objc func resume() -> Bool
	@objc func suspend() -> Bool
	@objc func terminate()
	@objc func waitUntilExit()

	// Own Instance Properties
	@objc var `arguments`: [String]? { @objc get @objc (setArguments:) set }
	@objc @available(OSX 10.13, *) var currentDirectoryURL: URL? { @objc get @objc (setCurrentDirectoryURL:) set }
	@objc var environment: [String: String]? { @objc get @objc (setEnvironment:) set }
	@objc @available(OSX 10.13, *) var executableURL: URL? { @objc get @objc (setExecutableURL:) set }
	@objc var processIdentifier: Int32 { @objc get }
	@objc @available(OSX 10.10, *) var qualityOfService: QualityOfService { @objc get @objc (setQualityOfService:) set }
	@objc var isRunning: Bool { @objc (isRunning) get }
	@objc var standardError: Any? { @objc get @objc (setStandardError:) set }
	@objc var standardInput: Any? { @objc get @objc (setStandardInput:) set }
	@objc var standardOutput: Any? { @objc get @objc (setStandardOutput:) set }
	// @objc @available(OSX 10.7, *) var terminationHandler: JSValue? { @objc get @objc (setTerminationHandler:) set }
	@objc @available(OSX 10.6, *) var terminationReason: Process.TerminationReason { @objc get }
	@objc var terminationStatus: Int32 { @objc get }

	// Constructors
	@objc static func create() -> Process
}

extension Process: ProcessExports {
	class func create() -> Process {
		return Process()
	}

	func run() -> Bool {
		return self.run();
	}
}
