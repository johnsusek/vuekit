import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSDataAssetExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var data: Data { @objc get }
	@objc var name: NSDataAsset.Name { @objc get }
	@objc var typeIdentifier: String { @objc get }

	// Constructors
	@objc static func create(name: NSDataAsset.Name) -> NSDataAsset?
	@objc static func create(name: NSDataAsset.Name, bundle: Bundle) -> NSDataAsset?
}

extension NSDataAsset: NSDataAssetExports {
	@objc class func create(name: NSDataAsset.Name) -> NSDataAsset? {
		return NSDataAsset(name: name)
	}

	@objc class func create(name: NSDataAsset.Name, bundle: Bundle) -> NSDataAsset? {
		return NSDataAsset(name: name, bundle: bundle)
	}

}
