import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol ValueTransformerExports: JSExport {
	// Static Methods
	@objc static func allowsReverseTransformation() -> Bool
	@objc static func setValueTransformer(_: ValueTransformer?, forName: NSValueTransformerName)
	@objc static func transformedValueClass() -> AnyClass
	@objc static func valueTransformerNames() -> [NSValueTransformerName]

	// Instance Methods
	@objc func reverseTransformedValue(_: Any?) -> Any?
	@objc func transformedValue(_: Any?) -> Any?

	// Constructors
	@objc static func create() -> ValueTransformer
}

extension ValueTransformer: ValueTransformerExports {
	@objc class func create() -> ValueTransformer {
		return ValueTransformer()
	}

}
