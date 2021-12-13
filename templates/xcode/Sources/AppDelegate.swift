import AppKit
import JavaScriptCore
import VueKitBridge

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {
  func applicationDidFinishLaunching(_: Notification) {
   guard let context = JSContext() else {
     NSLog("Could not create JSContext!")
     return
   }

   let bridgeTender = BridgeTender(context: context)
   bridgeTender.loadJSBundle()
  }
}
