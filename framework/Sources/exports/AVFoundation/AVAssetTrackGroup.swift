import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetTrackGroupExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var trackIDs: [NSNumber] { @objc get }

	// Constructors
}

extension AVAssetTrackGroup: AVAssetTrackGroupExports {
}
