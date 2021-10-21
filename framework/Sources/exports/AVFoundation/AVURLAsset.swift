import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVURLAssetExports: JSExport, AVAssetExports {
	// , AVContentKeyRecipientExports
	// Static Methods
	@objc @available(OSX 10.7, *) static func audiovisualMIMETypes() -> [String]
	@objc @available(OSX 10.7, *) static func audiovisualTypes() -> [AVFileType]
	@objc @available(OSX 10.7, *) static func isPlayableExtendedMIMEType(_: String) -> Bool

	// Instance Methods
	@objc (compatibleTrackForCompositionTrack:) func compatibleTrack(`for`: AVCompositionTrack) -> AVAssetTrack?

	// Own Instance Properties
	// @objc (URL) var URL: URL { get }
	@objc @available(OSX 10.12, *) var assetCache: AVAssetCache? { @objc get }
	@objc @available(OSX 10.9, *) var resourceLoader: AVAssetResourceLoader { @objc get }

	// Constructors
	@objc static func create(url: URL, options: [String: Any]?) -> AVURLAsset
}

extension AVURLAsset: AVURLAssetExports {
	@objc class func create(url: URL, options: [String: Any]?) -> AVURLAsset {
		return AVURLAsset(url: url, options: options)
	}
}
