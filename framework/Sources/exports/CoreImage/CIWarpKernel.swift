import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIWarpKernelExports: JSExport, CIKernelExports {
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (applyWithExtent:roiCallback:inputImage:arguments:) func apply(extent: NSRect, roiCallback: JSValue, image: CIImage, `arguments`: [Any]?) -> CIImage?

	// Constructors
}

extension CIWarpKernel: CIWarpKernelExports {
}
