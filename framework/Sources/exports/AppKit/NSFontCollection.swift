import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSFontCollectionExports: JSExport {
	// , NSCodingExports, NSCopyingExports, NSMutableCopyingExports
	// Static Methods
	// 	@objc static func hideFontCollectionWithName(visibility: NSFontCollection.Name, error: NSFontCollection.Visibility) -> Bool
	// last error param - @objc (renameFontCollectionWithName:visibility:toName:error:) static func rename(fromName: NSFontCollection.Name, visibility: NSFontCollection.Visibility, toName: NSFontCollection.Name) -> Bool
	// 	@objc static func showFontCollection(withName: NSFontCollection, visibility: NSFontCollection.Name, error: NSFontCollection.Visibility) -> Bool

	// Own Static Properties
	@objc static var allFontCollectionNames: [NSFontCollection.Name] { get }
	@objc (fontCollectionWithAllAvailableDescriptors) static var withAllAvailableDescriptors: NSFontCollection { @objc (fontCollectionWithAllAvailableDescriptors) get }

	// Instance Methods
	@objc (matchingDescriptorsForFamily:) func matchingDescriptors(forFamily: String) -> [NSFontDescriptor]?
	@objc (matchingDescriptorsForFamily:options:) func matchingDescriptors(forFamily family: String, options: [NSFontCollectionMatchingOptionKey : NSNumber]?) -> [NSFontDescriptor]?
	@objc (matchingDescriptorsWithOptions:) func matchingDescriptors(options: [NSFontCollectionMatchingOptionKey : NSNumber]?) -> [NSFontDescriptor]?

	// Own Instance Properties
	@objc var exclusionDescriptors: [NSFontDescriptor]? { @objc get }
	@objc var matchingDescriptors: [NSFontDescriptor]? { @objc get }
	@objc var queryDescriptors: [NSFontDescriptor]? { @objc get }

	// Constructors
}

extension NSFontCollection: NSFontCollectionExports {
}
