import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIKernelExports: JSExport {
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (applyWithExtent:roiCallback:arguments:) @available(OSX 10.11, *) func apply(extent: NSRect, roiCallback: JSValue, `arguments`: [Any]?) -> CIImage?
	@objc @available(OSX 10.4, *) func setROISelector(_: Selector)

	// Own Instance Properties
	@objc @available(OSX 10.4, *) var name: String { @objc get }

	// Constructors
	@objc static func create() -> CIKernel
	@objc @available(OSX 10.13, *) static func kernelWithFunctionName(fromMetalLibraryData: String, error: Data) -> CIKernel?
	@objc @available(OSX 10.13, *) static func kernelWithFunctionName(fromMetalLibraryData: String, outputPixelFormat: Data, error: CIFormat) -> CIKernel?
}

extension CIKernel: CIKernelExports {
	@objc class func create() -> CIKernel {
		return CIKernel()
	}

	@objc @available(OSX 10.13, *) class func kernelWithFunctionName(fromMetalLibraryData: String, error: Data) -> CIKernel? {
		return kernelWithFunctionName(fromMetalLibraryData: fromMetalLibraryData, error: error)
	}

	@objc @available(OSX 10.13, *) class func kernelWithFunctionName(fromMetalLibraryData: String, outputPixelFormat: Data, error: CIFormat) -> CIKernel? {
		return kernelWithFunctionName(fromMetalLibraryData: fromMetalLibraryData, outputPixelFormat: outputPixelFormat, error: error)
	}

}
