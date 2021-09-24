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
}

extension NSClassDescription: NSClassDescriptionExports {
}
