import AppKit
import VueKit
import JavaScriptCore

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {
  func applicationDidFinishLaunching(_: Notification) {
    let context = JSContext()!
    let bridgeTender = BridgeTender(context: context)
    bridgeTender.loadJSBundle()
  }
}

