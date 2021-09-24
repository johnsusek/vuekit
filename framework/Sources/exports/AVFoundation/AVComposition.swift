import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCompositionExports: JSExport, AVAssetExports {
	// , NSMutableCopyingExports
	// Static Methods

	// Instance Methods
	@objc (trackWithTrackID:) func track(withTrackID: CMPersistentTrackID) -> AVCompositionTrack?

	// Own Instance Properties
	@objc (URLAssetInitializationOptions) @available(OSX 10.11, *) var urlAssetInitializationOptions: [String: Any] { @objc (URLAssetInitializationOptions) get }
	@objc var naturalSize: NSSize { @objc get }

	// Constructors
}

extension AVComposition: AVCompositionExports {
}
