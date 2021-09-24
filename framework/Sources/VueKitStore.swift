import AppKit
// import Combine
import JavaScriptCore
// import SwiftyJSON

typealias StringObject = [String: Any]

@objc class VueKitStore: NSObject {
  // @objc class func create() -> (VueKitStore) {
  //   let stateContext = VueKitStore()

  //   // stateContext.json = [:]
  //   stateContext.state = CKRecord(recordType: "Recipe")

  //   return stateContext
  // }

  // dynamic var state: CKRecord?

  // dynamic var jsonInternal: JSON!

  // dynamic var json: JSON! {
  //   get { jsonInternal }

  //   set {
  //     jsonInternal = newValue

  //     if newValue != nil, newValue!.dictionaryObject != nil, state != nil {
  //       // TODO: what about removed keys? nested stuff?
  //       state!.setValuesForKeys(newValue!.dictionaryObject!)
  //     }

  //     if sendPatch {
  //       if patch != nil {
  //         patch!.call(withArguments: [jsonInternal.dictionaryObject! as Any])
  //       }
  //     }
  //     else {
  //       sendPatch = true
  //     }
  //   }
  // }

  @objc var patch: JSValue?
  var sendPatch = true

  @objc var token: NSKeyValueObservation?

  // @objc func setValue(_ prop: String, _ value: Any) {
  //   json[prop] = JSON(value)
  // }
}

// @objc protocol StateContextJSExport: JSExport {
//   @objc static func create() -> (VueKitStore)
//   @objc func setValue(_ prop: String, _ value: Any)
//   @objc var patch: JSValue? { @objc get @objc set }
// }
