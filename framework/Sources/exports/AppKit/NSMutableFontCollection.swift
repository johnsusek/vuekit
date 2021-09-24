import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSMutableFontCollectionExports: JSExport, NSFontCollectionExports {
	// Static Methods

	// Own Static Properties
	@objc (fontCollectionWithAllAvailableDescriptors) static var withAllAvailableDescriptors: NSMutableFontCollection { @objc (fontCollectionWithAllAvailableDescriptors) get }

	// Instance Methods
	@objc (addQueryForDescriptors:) func addQuery(`for`: [NSFontDescriptor])
	@objc (removeQueryForDescriptors:) func removeQuery(`for`: [NSFontDescriptor])

	// Own Instance Properties
	@objc var exclusionDescriptors: [NSFontDescriptor]? { @objc get @objc (setExclusionDescriptors:) set }
	@objc var queryDescriptors: [NSFontDescriptor]? { @objc get @objc (setQueryDescriptors:) set }

	// Constructors
}

extension NSMutableFontCollection: NSMutableFontCollectionExports {
}
