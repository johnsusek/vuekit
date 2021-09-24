import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetCacheExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (mediaSelectionOptionsInMediaSelectionGroup:) func mediaSelectionOptions(in: AVMediaSelectionGroup) -> [AVMediaSelectionOption]

	// Own Instance Properties
	@objc var isPlayableOffline: Bool { @objc get }

	// Constructors
}

extension AVAssetCache: AVAssetCacheExports {
}
