import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMetadataGroupExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc @available(OSX 10.11.3, *) var classifyingLabel: String? { @objc get }
	@objc var items: [AVMetadataItem] { @objc get }
	@objc @available(OSX 10.11.3, *) var uniqueID: String? { @objc get }

	// Constructors
	@objc static func create() -> AVMetadataGroup
}

extension AVMetadataGroup: AVMetadataGroupExports {
	@objc class func create() -> AVMetadataGroup {
		return AVMetadataGroup()
	}

}
