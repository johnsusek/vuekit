import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIFilterGeneratorExports: JSExport {
	// , CIFilterConstructorExports, NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (connectObject:withKey:toObject:withKey:) func connect(_: Any, withKey: String?, to: Any, withKey withKey4: String)
	@objc (disconnectObject:withKey:toObject:withKey:) func disconnectObject(_: Any, withKey: String, to: Any, withKey withKey4: String)
	@objc (exportKey:fromObject:withName:) func exportKey(_: String, from: Any, withName: String?)
	@objc func filter() -> CIFilter
	@objc func registerFilterName(_: String)
	@objc func removeExportedKey(_: String)
	@objc func setAttributes(_: [AnyHashable: Any], forExportedKey: String)
	@objc (writeToURL:atomically:) func write(to aURL: URL, atomically flag: Bool) -> Bool

	// Own Instance Properties
	@objc var classAttributes: [AnyHashable: Any] { @objc get @objc (setClassAttributes:) set }
	@objc var exportedKeys: [AnyHashable: Any] { @objc get }
}

extension CIFilterGenerator: CIFilterGeneratorExports {}
