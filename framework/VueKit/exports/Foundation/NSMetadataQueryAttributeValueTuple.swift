import AppKit
import JavaScriptCore

@objc protocol NSMetadataQueryAttributeValueTupleExports: JSExport {
	@objc var attribute: String { @objc get }
	@objc var count: Int { @objc get }
	@objc var value: Any? { @objc get }
}

extension NSMetadataQueryAttributeValueTuple: NSMetadataQueryAttributeValueTupleExports {
	@objc override class func create() -> NSMetadataQueryAttributeValueTuple {
		return NSMetadataQueryAttributeValueTuple()
	}
}
