import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSWorkspaceExports: JSExport {
	// Static Methods

	// Own Static Properties
	@objc (sharedWorkspace) static var shared: NSWorkspace { @objc (sharedWorkspace) get }

	// Instance Methods
	// 	@objc (URLForApplicationToOpenURL:) @available(OSX 10.6, *) func urlForApplication(toOpen: NSURL) -> NSURL?
	// 	@objc (URLForApplicationWithBundleIdentifier:) @available(OSX 10.6, *) func urlForApplication(withBundleIdentifier: String) -> NSURL?
	@objc (activateFileViewerSelectingURLs:) @available(OSX 10.6, *) func activateFileViewerSelecting(_ fileURLs: [URL])
	@objc (desktopImageOptionsForScreen:) @available(OSX 10.6, *) func desktopImageOptions(for screen: NSScreen) -> [NSWorkspace.DesktopImageOptionKey : Any]?
	// 	@objc (desktopImageURLForScreen:) @available(OSX 10.6, *) func desktopImageURL(`for`: NSScreen) -> NSURL?
	// 	@objc (duplicateURLs:completionHandler:) @available(OSX 10.6, *) func duplicate(_: [NSURL], completionHandler: JSValue)
	@objc (extendPowerOffBy:) func extendPowerOff(by: Int) -> Int
	@objc (getFileSystemInfoForPath:isRemovable:isWritable:isUnmountable:description:type:) func getFileSystemInfo(forPath fullPath: String, isRemovable removableFlag: UnsafeMutablePointer<ObjCBool>?, isWritable writableFlag: UnsafeMutablePointer<ObjCBool>?, isUnmountable unmountableFlag: UnsafeMutablePointer<ObjCBool>?, description: AutoreleasingUnsafeMutablePointer<NSString?>?, type fileSystemType: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool
	@objc func hideOtherApplications()
	@objc (iconForFile:) func icon(forFile: String) -> NSImage
	@objc (iconForFiles:) func icon(forFiles: [String]) -> NSImage?
	@objc (isFilePackageAtPath:) func isFilePackage(atPath: String) -> Bool
	// 	@objc @available(OSX 10.6, *) func launchApplicationAtURL(options: NSURL, configuration: NSWorkspace.LaunchOptions, error: [String: Any]) -> NSRunningApplication?
	@objc func noteFileSystemChanged(_: String)
	@objc (openApplicationAtURL:configuration:completionHandler:) @available(OSX 10.15, *) func openApplication(at applicationURL: URL, configuration: NSWorkspace.OpenConfiguration, completionHandler: ((NSRunningApplication?, Error?) -> Void)?)
	@objc (openURL:) func open(_ url: URL) -> Bool
	@objc (openURL:configuration:completionHandler:) @available(OSX 10.15, *) func open(_ url: URL, configuration: NSWorkspace.OpenConfiguration, completionHandler: ((NSRunningApplication?, Error?) -> Void)?)
	// 	@objc @available(OSX 10.10, *) func openURL(options: NSURL, configuration: NSWorkspace.LaunchOptions, error: [String: Any]) -> NSRunningApplication?
	// 	@objc (openURLs:withApplicationAtURL:configuration:completionHandler:) @available(OSX 10.15, *) func open(_: [NSURL], withApplicationAt: NSURL, configuration: NSWorkspace.OpenConfiguration, completionHandler: JSValue)
	// 	@objc @available(OSX 10.10, *) func openURLs(withApplicationAtURL: [NSURL], options: NSURL, configuration: NSWorkspace.LaunchOptions, error: [String: Any]) -> NSRunningApplication?
	// 	@objc (recycleURLs:completionHandler:) @available(OSX 10.6, *) func recycle(_: [NSURL], completionHandler: JSValue)
	@objc (requestAuthorizationOfType:completionHandler:) @available(OSX 10.14, *) func requestAuthorization(to type: NSWorkspace.AuthorizationType, completionHandler: @escaping (NSWorkspace.Authorization?, Error?) -> Void)
	@objc func selectFile(_: String?, inFileViewerRootedAtPath: String) -> Bool
	// 	@objc @available(OSX 10.6, *) func setDesktopImageURL(forScreen: NSURL, options: NSScreen, error: [String: Any]) -> Bool
	@objc func setIcon(_: NSImage?, forFile: String, options: NSWorkspace.IconCreationOptions) -> Bool
	@objc (showSearchResultsForQueryString:) @available(OSX 10.6, *) func showSearchResults(forQueryString: String) -> Bool
	// throws - @objc @available(OSX 10.5, *) func typeOfFile(error: String) -> String?
	@objc (unmountAndEjectDeviceAtPath:) func unmountAndEjectDevice(atPath: String) -> Bool
	// 	@objc @available(OSX 10.6, *) func unmountAndEjectDeviceAtURL(error: NSURL) -> Bool

	// Own Instance Properties
	@objc @available(OSX 10.10, *) var accessibilityDisplayShouldDifferentiateWithoutColor: Bool { @objc get }
	@objc @available(OSX 10.10, *) var accessibilityDisplayShouldIncreaseContrast: Bool { @objc get }
	@objc @available(OSX 10.12, *) var accessibilityDisplayShouldInvertColors: Bool { @objc get }
	@objc @available(OSX 10.12, *) var accessibilityDisplayShouldReduceMotion: Bool { @objc get }
	@objc @available(OSX 10.10, *) var accessibilityDisplayShouldReduceTransparency: Bool { @objc get }
	@objc @available(OSX 10.6, *) var fileLabelColors: [NSColor] { @objc get }
	@objc @available(OSX 10.6, *) var fileLabels: [String] { @objc get }
	@objc @available(OSX 10.7, *) var frontmostApplication: NSRunningApplication? { @objc get }
	@objc @available(OSX 10.7, *) var menuBarOwningApplication: NSRunningApplication? { @objc get }
	@objc var notificationCenter: NotificationCenter { @objc get }
	@objc @available(OSX 10.6, *) var runningApplications: [NSRunningApplication] { @objc get }
	@objc @available(OSX 10.13, *) var isSwitchControlEnabled: Bool { @objc get }
	@objc @available(OSX 10.13, *) var isVoiceOverEnabled: Bool { @objc get }

	// Constructors
}

extension NSWorkspace: NSWorkspaceExports {
}
