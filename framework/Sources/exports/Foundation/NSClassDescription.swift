import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSClassDescriptionExports: JSExport {
	// Static Methods
	@objc static func invalidateClassDescriptionCache()
	@objc (registerClassDescription:forClass:) static func register(_: NSClassDescription, `for`: AnyClass)

	// Constructors
	@objc static func create() -> NSClassDescription
}

extension NSClassDescription: NSClassDescriptionExports {
	@objc class func create() -> NSClassDescription {
		return NSClassDescription()
	}

}
