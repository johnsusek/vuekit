import AppKit
import JavaScriptCore

class VueKitCallbacks {
  static func VoidCallbackEnumerator(_ callback: JSValue) -> (Any, UnsafeMutablePointer<ObjectiveC.ObjCBool>) -> Void {
    return { setObject, stop in
      if let res = callback.call(withArguments: [setObject as AnyObject]) {
        if res.isEqual(to: true) {
          stop.pointee = true
        }
      }
    }
  }

  static func BoolCallbackEnumerator(_ callback: JSValue) -> (Any, UnsafeMutablePointer<ObjectiveC.ObjCBool>) -> Bool {
    return { setObject, stop in
      if let res = callback.call(withArguments: [setObject as AnyObject]) {
        if res.isEqual(to: true) {
          return true
        }
        return false
      }
      return false
    }
  }
}
