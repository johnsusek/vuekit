import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol JSONSerializationExports: JSExport {
	// Static Methods
	// 	@objc static func JSONObjectWithData(options: Data, error: JSONSerialization.ReadingOptions) -> Any?
	// 	@objc static func JSONObjectWithStream(options: InputStream, error: JSONSerialization.ReadingOptions) -> Any?
	// 	@objc static func dataWithJSONObject(options: Any, error: JSONSerialization.WritingOptions) -> Data?
	@objc static func isValidJSONObject(_: Any) -> Bool
	// 	@objc static func writeJSONObject(toStream: Any, options: OutputStream, error: JSONSerialization.WritingOptions) -> Int

	// Constructors
}

extension JSONSerialization: JSONSerializationExports {
}
