import AppKit
import JavaScriptCore
import VueKitBridge

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {
  func applicationDidFinishLaunching(_: Notification) {
    let context = JSContext()!

    _ = context.setObject(DispatchQueue.self, forKeyedSubscript: "DispatchQueue" as (NSCopying & NSObjectProtocol)?)

    let bridgeTender = BridgeTender(context: context)
    bridgeTender.loadJSBundle()
  }
}
