import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSRunningApplicationExports: JSExport {
	// Static Methods
	@objc (runningApplicationsWithBundleIdentifier:) static func runningApplications(withBundleIdentifier: String) -> [NSRunningApplication]
	@objc static func terminateAutomaticallyTerminableApplications()

	// Own Static Properties
	@objc (currentApplication) static var current: NSRunningApplication { @objc (currentApplication) get }

	// Instance Methods
	@objc (activateWithOptions:) func activate(options: NSApplication.ActivationOptions) -> Bool
	@objc func forceTerminate() -> Bool
	@objc func hide() -> Bool
	@objc func terminate() -> Bool
	@objc func unhide() -> Bool

	// Own Instance Properties
	@objc var activationPolicy: NSApplication.ActivationPolicy { @objc get }
	@objc var isActive: Bool { @objc get }
	@objc var bundleIdentifier: String? { @objc get }
	@objc var bundleURL: URL? { get }
	@objc var executableArchitecture: Int { @objc get }
	@objc var executableURL: URL? { get }
	@objc var isFinishedLaunching: Bool { @objc get }
	@objc var isHidden: Bool { @objc get }
	@objc var icon: NSImage? { @objc get }
	@objc var launchDate: Date? { @objc get }
	@objc var localizedName: String? { @objc get }
	@objc @available(OSX 10.7, *) var ownsMenuBar: Bool { @objc get }
	@objc var processIdentifier: pid_t { @objc get }
	@objc var isTerminated: Bool { @objc get }

	// Constructors
}

extension NSRunningApplication: NSRunningApplicationExports {
}
