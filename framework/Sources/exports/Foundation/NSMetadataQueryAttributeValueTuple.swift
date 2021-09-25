import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSMetadataQueryAttributeValueTupleExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var attribute: String { @objc get }
	@objc var count: Int { @objc get }
	@objc var value: Any? { @objc get }

	// Constructors
	@objc static func create() -> NSMetadataQueryAttributeValueTuple
}

extension NSMetadataQueryAttributeValueTuple: NSMetadataQueryAttributeValueTupleExports {
	@objc class func create() -> NSMetadataQueryAttributeValueTuple {
		return NSMetadataQueryAttributeValueTuple()
	}

}
