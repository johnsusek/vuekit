import Cocoa
import VueKit
import JavaScriptCore

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {
  func applicationDidFinishLaunching(_: Notification) {
    let context = JSContext()!
    let vueKit = VueKit(context: context)

    guard let bundleUrl = Bundle.main.url(forResource: "vuekit-bundle.iife", withExtension: "js") else {
      print("! Could not find bundle js at app bundle root")
      NSApp.terminate(self)
      return
    }

    vueKit.loadBundle(url: bundleUrl)
  }
}
