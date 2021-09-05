import AppKit
import JavaScriptCore

class VueKitErrorHandling {
  let context: JSContext

  init(context: JSContext) {
    self.context = context
  }

  func addJSExceptionHandler() {
    context.exceptionHandler = { _, value in
      guard let exception = value else {
        print("! JS Exception: nil")
        return
      }

      let name = exception.objectForKeyedSubscript("name").toString() ?? " "
      let message = exception.objectForKeyedSubscript("message").toString() ?? " "
      let moreInfo = "\(name): \(message)"
      print("! JS Exception: \(moreInfo)")
    }
  }

  func addNSExceptionHandler() {
    NSSetUncaughtExceptionHandler { exception in
      let stack = exception.callStackReturnAddresses
      print("\(exception): \(stack)")
    }
  }
}
