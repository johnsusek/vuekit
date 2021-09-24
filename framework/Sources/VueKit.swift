import AppKit
import JavaScriptCore

// VueKit is the main class that sets up the JSContext environment
// and loads the bundled Javascript

// let vueKit = VueKit()
// let vueKitDev = VueKitDev(vueKit: vueKit)

public class VueKit {
  static var current: VueKit!
  let context: JSContext!

  public init(context: JSContext) {
    self.context = context
    print("🌉 VueKit starting...")
    VueKit.current = self

    let registration = VueKitRegistration(context: context)

    registration.registerClasses()

    let errorHandling = VueKitErrorHandling(context: context)

    errorHandling.addJSExceptionHandler()
    errorHandling.addNSExceptionHandler()

    let globals = VueKitGlobals(context: context)

    globals.install()

    let events = VueKitNodeEvents()

    events.startMonitoring()
  }

  public func loadBundle(url bundleUrl: URL) {
    print("Loading bundle")

    do {
      let script = try String(contentsOf: bundleUrl, encoding: .utf8)

      context.evaluateScript(script)

      print("Evaluated bundle js")
    } catch {
      print("Unexpected error: \(error).")
    }
  }
}
