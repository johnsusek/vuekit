import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVFragmentedAssetMinderExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func addFragmentedAsset(_ asset: AVAsset & AVFragmentMinding)
	@objc func removeFragmentedAsset(_ asset: AVAsset & AVFragmentMinding)

	// Own Instance Properties
	@objc var assets: [AVAsset & AVFragmentMinding] { get }
	@objc var mindingInterval: TimeInterval { @objc get @objc (setMindingInterval:) set }
}

extension AVFragmentedAssetMinder: AVFragmentedAssetMinderExports {}
