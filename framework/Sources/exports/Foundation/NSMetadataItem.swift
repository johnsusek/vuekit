import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSMetadataItemExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (valueForAttribute:) func value(forAttribute: String) -> Any?
	@objc (valuesForAttributes:) func values(forAttributes: [String]) -> [String: Any]?

	// Own Instance Properties
	@objc var attributes: [String] { @objc get }
}

extension NSMetadataItem: NSMetadataItemExports {}
