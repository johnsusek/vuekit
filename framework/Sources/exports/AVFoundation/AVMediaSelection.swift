import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMediaSelectionExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports
	// Static Methods

	// Instance Methods
	@objc (mediaSelectionCriteriaCanBeAppliedAutomaticallyToMediaSelectionGroup:) func mediaSelectionCriteriaCanBeAppliedAutomatically(to: AVMediaSelectionGroup) -> Bool
	@objc (selectedMediaOptionInMediaSelectionGroup:) func selectedMediaOption(in: AVMediaSelectionGroup) -> AVMediaSelectionOption?

	// Own Instance Properties
	@objc var asset: AVAsset? { @objc get }

	// Constructors
}

extension AVMediaSelection: AVMediaSelectionExports {
}
