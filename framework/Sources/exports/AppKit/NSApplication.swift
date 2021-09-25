import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSApplicationExports: JSExport, NSResponderExports {
	// , NSAccessibilityExports, NSAccessibilityElementExports, NSMenuItemValidationExports, NSUserInterfaceValidationsExports, NSAppearanceCustomizationExports
	// Static Methods
	@objc (detachDrawingThread:toTarget:withObject:) static func detachDrawingThread(_: Selector, toTarget: Any, with: Any?)

	// Own Static Properties
	// @objc (sharedApplication) static var sharedApplication: NSApplication { @objc (sharedApplication) get }

	// Instance Methods
	@objc func abortModal()
	@objc func activateContextHelpMode(_: Any?)
	@objc (activateIgnoringOtherApps:) func activate(ignoringOtherApps: Bool)
	@objc @available(OSX 10.6, *) func activationPolicy() -> NSApplication.ActivationPolicy
	@objc func addWindowsItem(_: NSWindow, title: String, filename: Bool)
	@objc func arrangeInFront(_: Any?)
	@objc (beginModalSessionForWindow:) func beginModalSession(`for`: NSWindow) -> NSApplication.ModalSession
	@objc func cancelUserAttentionRequest(_: Int)
	@objc func changeWindowsItem(_: NSWindow, title: String, filename: Bool)
	@objc @available(OSX 10.7, *) func completeStateRestoration()
	@objc func deactivate()
	@objc @available(OSX 10.7, *) func disableRelaunchOnLogin()
	@objc (discardEventsMatchingMask:beforeEvent:) func discardEvents(matching: NSEvent.EventTypeMask, before: NSEvent?)
	@objc @available(OSX 10.7, *) func enableRelaunchOnLogin()
	@objc (endModalSession:) func endModalSession(_ session: NSApplication.ModalSession)
	// jsvalue - @objc (enumerateWindowsWithOptions:usingBlock:) @available(OSX 10.12, *) func enumerateWindows(options: NSApplication.WindowListOptions, using: JSValue)
	@objc @available(OSX 10.7, *) func extendStateRestoration()
	@objc func finishLaunching()
	@objc func hide(_: Any?)
	@objc func hideOtherApplications(_: Any?)
	@objc func miniaturizeAll(_: Any?)
	@objc (nextEventMatchingMask:untilDate:inMode:dequeue:) func nextEvent(matching: NSEvent.EventTypeMask, until: Date?, inMode: RunLoop.Mode, dequeue: Bool) -> NSEvent?
	@objc func orderFrontCharacterPalette(_: Any?)
	@objc func orderFrontColorPanel(_: Any?)
	@objc func orderFrontStandardAboutPanel(_: Any?)
	@objc (orderFrontStandardAboutPanelWithOptions:) func orderFrontStandardAboutPanel(options optionsDictionary: [NSApplication.AboutPanelOptionKey : Any])
	@objc (postEvent:atStart:) func postEvent(_: NSEvent, atStart: Bool)
	@objc func preventWindowOrdering()
	@objc (registerForRemoteNotificationTypes:) @available(OSX 10.7, *) func registerForRemoteNotifications(matching: NSApplication.RemoteNotificationType)
	@objc @available(OSX 10.14, *) func registerForRemoteNotifications()
	@objc func registerServicesMenuSendTypes(_ sendTypes: [NSPasteboard.PasteboardType], returnTypes: [NSPasteboard.PasteboardType])
	@objc @available(OSX 10.6, *) func registerUserInterfaceItemSearchHandler(_: NSUserInterfaceItemSearching)
	@objc func removeWindowsItem(_: NSWindow)
	@objc (replyToApplicationShouldTerminate:) func reply(toApplicationShouldTerminate: Bool)
	@objc (replyToOpenOrPrint:) func reply(toOpenOrPrint: NSApplication.DelegateReply)
	@objc (reportException:) func reportException(_: NSException)
	@objc func requestUserAttention(_: NSApplication.RequestUserAttentionType) -> Int
	// jsvalue - @objc (restoreWindowWithIdentifier:state:completionHandler:) @available(OSX 10.7, *) func restoreWindow(withIdentifier: NSUserInterfaceItemIdentifier, state: NSCoder, completionHandler: JSValue) -> Bool
	@objc func run()
	@objc (runModalForWindow:) func runModal(`for`: NSWindow) -> NSApplication.ModalResponse
	@objc (runModalSession:) func runModalSession(_ session: NSApplication.ModalSession) -> NSApplication.ModalResponse
	@objc func runPageLayout(_: Any?)
	@objc (searchString:inUserInterfaceItemString:searchRange:foundRange:) @available(OSX 10.6, *) func searchString(_: String, inUserInterfaceItemString: String, range: NSRange, found: UnsafeMutablePointer<NSRange>?) -> Bool
	@objc func sendAction(_: Selector, to: Any?, from: Any?) -> Bool
	@objc (sendEvent:) func sendEvent(_: NSEvent)
	@objc @available(OSX 10.6, *) func setActivationPolicy(_: NSApplication.ActivationPolicy) -> Bool
	@objc func setWindowsNeedUpdate(_: Bool)
	@objc func showHelp(_: Any?)
	@objc func stop(_: Any?)
	@objc func stopModal()
	@objc (stopModalWithCode:) func stopModal(withCode: NSApplication.ModalResponse)
	@objc (targetForAction:) func target(forAction: Selector) -> Any?
	@objc (targetForAction:to:from:) func target(forAction: Selector, to: Any?, from: Any?) -> Any?
	@objc func terminate(_: Any?)
	@objc @available(OSX 10.12.2, *) func toggleTouchBarCustomizationPalette(_: Any?)
	@objc func unhide(_: Any?)
	@objc func unhideAllApplications(_: Any?)
	@objc func unhideWithoutActivation()
	@objc @available(OSX 10.7, *) func unregisterForRemoteNotifications()
	@objc @available(OSX 10.6, *) func unregisterUserInterfaceItemSearchHandler(_: NSUserInterfaceItemSearching)
	@objc func updateWindows()
	@objc func updateWindowsItem(_: NSWindow)
	@objc (windowWithWindowNumber:) func window(withWindowNumber: Int) -> NSWindow?

	// Own Instance Properties
	@objc var isActive: Bool { @objc get }
	@objc var applicationIconImage: NSImage! { @objc get @objc (setApplicationIconImage:) set }
	@objc @available(OSX 10.12.2, *) var isAutomaticCustomizeTouchBarMenuItemEnabled: Bool { @objc get @objc (setAutomaticCustomizeTouchBarMenuItemEnabled:) set }
	@objc var currentEvent: NSEvent? { @objc get }
	@objc @available(OSX 10.6, *) var currentSystemPresentationOptions: NSApplication.PresentationOptions { @objc get }
	@objc var delegate: NSApplicationDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.5, *) var dockTile: NSDockTile { @objc get }
	@objc @available(OSX 10.7, *) var enabledRemoteNotificationTypes: NSApplication.RemoteNotificationType { @objc get }
	@objc @available(OSX 10.6, *) var isFullKeyboardAccessEnabled: Bool { @objc get }
	@objc @available(OSX 10.6, *) var helpMenu: NSMenu? { @objc get @objc (setHelpMenu:) set }
	@objc var isHidden: Bool { @objc get }
	@objc var keyWindow: NSWindow? { @objc get }
	@objc var mainMenu: NSMenu? { @objc get @objc (setMainMenu:) set }
	@objc var mainWindow: NSWindow? { @objc get }
	@objc var modalWindow: NSWindow? { @objc get }
	@objc @available(OSX 10.9, *) var occlusionState: NSApplication.OcclusionState { @objc get }
	@objc var orderedDocuments: [NSDocument] { @objc get }
	@objc var orderedWindows: [NSWindow] { @objc get }
	@objc @available(OSX 10.6, *) var presentationOptions: NSApplication.PresentationOptions { @objc get @objc (setPresentationOptions:) set }
	@objc @available(OSX 10.14, *) var isRegisteredForRemoteNotifications: Bool { @objc get }
	@objc var isRunning: Bool { @objc get }
	@objc var servicesMenu: NSMenu? { @objc get @objc (setServicesMenu:) set }
	@objc var servicesProvider: Any? { @objc get @objc (setServicesProvider:) set }
	@objc @available(OSX 10.6, *) var userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection { @objc get }
	@objc var windows: [NSWindow] { @objc get }
	@objc var windowsMenu: NSMenu? { @objc get @objc (setWindowsMenu:) set }

	// Constructors
	@objc static func create() -> NSApplication
}

extension NSApplication: NSApplicationExports {
	@objc class func create() -> NSApplication {
		return NSApplication()
	}

}
