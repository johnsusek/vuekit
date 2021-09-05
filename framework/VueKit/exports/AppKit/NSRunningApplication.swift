import AppKit
import JavaScriptCore

@objc protocol NSRunningApplicationExports: JSExport {
	@objc (runningApplicationsWithBundleIdentifier:) static func runningApplications(withBundleIdentifier: String) -> [NSRunningApplication]
	@objc static func terminateAutomaticallyTerminableApplications()
	@objc var activationPolicy: NSApplication.ActivationPolicy { @objc get }
	@objc var isActive: Bool { @objc get }
	@objc var bundleIdentifier: String? { @objc get }
	@objc var bundleURL: URL? { @objc get }
	@objc var executableArchitecture: Int { @objc get }
	@objc var executableURL: URL? { @objc get }
	@objc var isFinishedLaunching: Bool { @objc get }
	@objc var isHidden: Bool { @objc get }
	@objc var icon: NSImage? { @objc get }
	@objc var launchDate: Date? { @objc get }
	@objc var localizedName: String? { @objc get }
	@objc @available(OSX 10.7, *) var ownsMenuBar: Bool { @objc get }
	@objc var processIdentifier: Int32 { @objc get }
	@objc var isTerminated: Bool { @objc get }
	@objc static var current: NSRunningApplication { @objc (currentApplication) get }
	@objc (activateWithOptions:) func activate(options: NSApplication.ActivationOptions) -> Bool
	@objc func forceTerminate() -> Bool
	@objc func hide() -> Bool
	@objc func terminate() -> Bool
	@objc func unhide() -> Bool
	@objc static func create(processIdentifier: Int32) -> NSRunningApplication?
}

extension NSRunningApplication: NSRunningApplicationExports {
	@objc class func create(processIdentifier: Int32) -> NSRunningApplication? {
		return NSRunningApplication(processIdentifier: processIdentifier)
	}

	@objc override class func create() -> NSRunningApplication {
		return NSRunningApplication()
	}
}
