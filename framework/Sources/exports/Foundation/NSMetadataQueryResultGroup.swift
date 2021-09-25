import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSMetadataQueryResultGroupExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (resultAtIndex:) func result(at: Int) -> Any

	// Own Instance Properties
	@objc var attribute: String { @objc get }
	@objc var resultCount: Int { @objc get }
	@objc var results: [Any] { @objc get }
	@objc var subgroups: [NSMetadataQueryResultGroup]? { @objc get }
	@objc var value: Any { @objc get }

	// Constructors
	@objc static func create() -> NSMetadataQueryResultGroup
}

extension NSMetadataQueryResultGroup: NSMetadataQueryResultGroupExports {
	@objc class func create() -> NSMetadataQueryResultGroup {
		return NSMetadataQueryResultGroup()
	}

}
