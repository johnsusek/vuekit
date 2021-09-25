import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerItemMetadataCollectorExports: JSExport, AVPlayerItemMediaDataCollectorExports {
	// Static Methods

	// Instance Methods
	@objc func setDelegate(_: AVPlayerItemMetadataCollectorPushDelegate?, queue: DispatchQueue?)

	// Own Instance Properties
	@objc var delegate: AVPlayerItemMetadataCollectorPushDelegate? { @objc get }
	@objc var delegateQueue: DispatchQueue? { @objc get }

	// Constructors
	@objc static func create() -> AVPlayerItemMetadataCollector
	@objc static func create(identifiers: [String]?, classifyingLabels: [String]?) -> AVPlayerItemMetadataCollector
}

extension AVPlayerItemMetadataCollector: AVPlayerItemMetadataCollectorExports {
	@objc override class func create() -> AVPlayerItemMetadataCollector {
		return AVPlayerItemMetadataCollector()
	}

	@objc class func create(identifiers: [String]?, classifyingLabels: [String]?) -> AVPlayerItemMetadataCollector {
		return AVPlayerItemMetadataCollector(identifiers: identifiers, classifyingLabels: classifyingLabels)
	}

}
