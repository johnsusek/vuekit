import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIRenderInfoExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var kernelExecutionTime: TimeInterval { @objc get }
	@objc var passCount: Int { @objc get }
	@objc var pixelsProcessed: Int { @objc get }

	// Constructors
	@objc static func create() -> CIRenderInfo
}

extension CIRenderInfo: CIRenderInfoExports {
	@objc class func create() -> CIRenderInfo {
		return CIRenderInfo()
	}

}
