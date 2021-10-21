import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSApplicationDelegateExports: JSExport, NSObjectExports {
  // jsvalue - @objc (application:continueUserActivity:restorationHandler:) @available(OSX 10.10, *) func application(_: NSApplication, continue: NSUserActivity, restorationHandler: JSValue) -> Bool
  @objc (application:openURLs:) @available(OSX 10.13, *) func application(_: NSApplication, open: [NSURL])
  @objc (application:userDidAcceptCloudKitShareWithMetadata:) @available(OSX 10.12, *) func application(_: NSApplication, userDidAcceptCloudKitShareWith: CKShare.Metadata)
  @objc (application:didUpdateUserActivity:) @available(OSX 10.10, *) func application(_: NSApplication, didUpdate: NSUserActivity)
  @objc func application(_: NSApplication, delegateHandlesKey: String) -> Bool
  @objc @available(OSX 10.7, *) func application(_: NSApplication, didDecodeRestorableState: NSCoder)
  @objc @available(OSX 10.10, *) func application(_: NSApplication, didFailToContinueUserActivityWithType: String, error: Error)
  @objc @available(OSX 10.7, *) func application(_: NSApplication, didFailToRegisterForRemoteNotificationsWithError: Error)
  @objc @available(OSX 10.7, *) func application(_: NSApplication, didReceiveRemoteNotification: [String: Any])
  @objc @available(OSX 10.7, *) func application(_: NSApplication, didRegisterForRemoteNotificationsWithDeviceToken: Data)
  @objc func application(_: NSApplication, openFile: String) -> Bool
  @objc func application(_: NSApplication, openFiles: [String])
  @objc func application(_: Any, openFileWithoutUI: String) -> Bool
  @objc func application(_: NSApplication, openTempFile: String) -> Bool
  @objc func application(_: NSApplication, printFile: String) -> Bool
  @objc func application(_: NSApplication, printFiles: [String], withSettings: [String: Any], showPrintPanels: Bool) -> NSApplication.PrintReply
  @objc @available(OSX 10.10, *) func application(_: NSApplication, willContinueUserActivityWithType: String) -> Bool
  @objc @available(OSX 10.7, *) func application(_: NSApplication, willEncodeRestorableState: NSCoder)
  @objc func application(_: NSApplication, willPresentError: Error) -> Error
  @objc func applicationDidBecomeActive(_: Notification)
  @objc @available(OSX 10.9, *) func applicationDidChangeOcclusionState(_: Notification)
  @objc func applicationDidChangeScreenParameters(_: Notification)
  @objc func applicationDidFinishLaunching(_: Notification)
  @objc func applicationDidHide(_: Notification)
  @objc func applicationDidResignActive(_: Notification)
  @objc func applicationDidUnhide(_: Notification)
  @objc func applicationDidUpdate(_: Notification)
  @objc func applicationDockMenu(_: NSApplication) -> NSMenu?
  @objc func applicationOpenUntitledFile(_: NSApplication) -> Bool
  @objc func applicationShouldHandleReopen(_: NSApplication, hasVisibleWindows: Bool) -> Bool
  @objc func applicationShouldOpenUntitledFile(_: NSApplication) -> Bool
  @objc func applicationShouldTerminate(_: NSApplication) -> NSApplication.TerminateReply
  @objc func applicationShouldTerminateAfterLastWindowClosed(_: NSApplication) -> Bool
  @objc func applicationWillBecomeActive(_: Notification)
  @objc func applicationWillFinishLaunching(_: Notification)
  @objc func applicationWillHide(_: Notification)
  @objc func applicationWillResignActive(_: Notification)
  @objc func applicationWillTerminate(_: Notification)
  @objc func applicationWillUnhide(_: Notification)
  @objc func applicationWillUpdate(_: Notification)
}

