import AppKit
import JavaScriptCore

@objc protocol NSColorSamplerExports: JSExport {
	// @objc (showSamplerWithSelectionHandler:) func show(selectionHandler: JSManagedValue /* NSColor: Void */?)
}

extension NSColorSampler: NSColorSamplerExports {
	@objc override class func create() -> NSColorSampler {
		return NSColorSampler()
	}
}
