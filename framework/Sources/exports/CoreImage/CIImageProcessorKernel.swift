import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIImageProcessorKernelExports: JSExport {
	// Static Methods
	// 	@objc static func applyWithExtent(inputs: NSRect, `arguments`: [CIImage]?, error: [String: Any]?) -> CIImage?
	@objc (formatForInputAtIndex:) static func formatForInput(at input: Int32) -> CIFormat
	// 	@objc static func processWithInputs(`arguments`: [CIImageProcessorInput]?, output: [String: Any]?, error: CIImageProcessorOutput) -> Bool
	// 	@objc (roiForInput:arguments:outputRect:) static func roi(forInput: Int, `arguments`: [String: Any]?, outputRect: NSRect) -> NSRect

	// Own Static Properties
	@objc static var outputFormat: CIFormat { @objc get }
	@objc @available(OSX 10.13, *) static var outputIsOpaque: Bool { @objc get }
	@objc static var synchronizeInputs: Bool { @objc get }

	// Constructors
}

extension CIImageProcessorKernel: CIImageProcessorKernelExports {
}
