import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSFontAssetRequestExports: JSExport {
	// , ProgressReportingExports
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (downloadFontAssetsWithCompletionHandler:) func download(withCompletionHandler: JSValue)

	// Own Instance Properties
	@objc var downloadedFontDescriptors: [NSFontDescriptor] { @objc get }

	// Constructors
	@objc static func create(fontDescriptors: [NSFontDescriptor], options: NSFontAssetRequest.Options) -> NSFontAssetRequest
}

extension NSFontAssetRequest: NSFontAssetRequestExports {
	@objc class func create(fontDescriptors: [NSFontDescriptor], options: NSFontAssetRequest.Options) -> NSFontAssetRequest {
		return NSFontAssetRequest(fontDescriptors: fontDescriptors, options: options)
	}

}
