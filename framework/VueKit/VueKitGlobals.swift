import AppKit
import JavaScriptCore

class VueKitGlobals {
  let context: JSContext

  init(context: JSContext) {
    self.context = context
  }

  func install() {
    let timeoutHandler = VueKitPolyFills(context: context)
    timeoutHandler.setGlobals()

    let swiftLog: @convention(block) (JSValue) -> Void = { objectToLog in
      print("JSValue>", objectToLog.toObject()! as Any)
    }

    context.setObject(swiftLog, forKeyedSubscript: "swiftLog" as (NSCopying & NSObjectProtocol)?)

    context.setObject(VueKitStore.self, forKeyedSubscript: "VueKitStore" as (NSCopying & NSObjectProtocol)?)

    // TODO: register all the global funcs/vars
    // RegisterGlobals.register(context: context)
  }
}
