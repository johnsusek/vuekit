import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIPlugInExports: JSExport {
	// Static Methods
	@objc @available(OSX 10.15, *) static func loadNonExecutablePlugIn(_ url: URL!)
	@objc static func loadNonExecutablePlugIns()

	// Constructors
	@objc static func create() -> CIPlugIn
}

extension CIPlugIn: CIPlugInExports {
	@objc class func create() -> CIPlugIn {
		return CIPlugIn()
	}

}
