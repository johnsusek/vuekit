import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMetadataItemValueRequestExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (respondWithError:) func respond(error: Error)
	@objc (respondWithValue:) func respond(value: NSCopying & NSObjectProtocol)

	// Own Instance Properties
	@objc var metadataItem: AVMetadataItem? { @objc get }

	// Constructors
	@objc static func create() -> AVMetadataItemValueRequest
}

extension AVMetadataItemValueRequest: AVMetadataItemValueRequestExports {
	@objc class func create() -> AVMetadataItemValueRequest {
		return AVMetadataItemValueRequest()
	}

}
