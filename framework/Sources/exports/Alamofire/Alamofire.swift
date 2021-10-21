import Foundation
import JavaScriptCore
import Alamofire

@objc public protocol AlamofireExports: JSExport {
	@objc static func request(url: String, method: String, callback: JSValue)
}

@objc public class Alamofire: NSObject, AlamofireExports {
  @objc public class func request(url: String, method: String, callback: JSValue) {
    guard let urlConvertible = URL(string: url) else { return }

    let req = AF.request(urlConvertible, method: HTTPMethod(rawValue: method))

    req.response(responseSerializer: StringResponseSerializer()) { response in
      var responseStr = ""

      if let data = response.data {
        responseStr = String(decoding: data, as: UTF8.self)
      }

      callback.call(withArguments: [responseStr, response.response as AnyObject])
    }
	}
}
