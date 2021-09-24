import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSBindingSelectionMarkerExports: JSExport {
	// , NSCopyingExports
	// Static Methods
	@objc (defaultPlaceholderForMarker:onClass:withBinding:) @available(OSX 10.15, *) static func defaultPlaceholder(`for`: NSBindingSelectionMarker?, on: AnyClass, withBinding: NSBindingName) -> Any?
	@objc (setDefaultPlaceholder:forMarker:onClass:withBinding:) @available(OSX 10.15, *) static func setDefaultPlaceholder(_: Any?, `for`: NSBindingSelectionMarker?, on: AnyClass, withBinding: NSBindingName)

	// Own Static Properties
	@objc (multipleValuesSelectionMarker) @available(OSX 10.14, *) static var multipleValues: NSBindingSelectionMarker { @objc (multipleValuesSelectionMarker) get }
	@objc (noSelectionMarker) @available(OSX 10.14, *) static var noSelection: NSBindingSelectionMarker { @objc (noSelectionMarker) get }
	@objc (notApplicableSelectionMarker) @available(OSX 10.14, *) static var notApplicable: NSBindingSelectionMarker { @objc (notApplicableSelectionMarker) get }

	// Constructors
}

extension NSBindingSelectionMarker: NSBindingSelectionMarkerExports {
}
