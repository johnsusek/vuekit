import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSColorSamplerExports: JSExport {
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (showSamplerWithSelectionHandler:) func show(selectionHandler: JSValue)

	// Constructors
	@objc static func create() -> NSColorSampler
}

extension NSColorSampler: NSColorSamplerExports {
	@objc class func create() -> NSColorSampler {
		return NSColorSampler()
	}

}
