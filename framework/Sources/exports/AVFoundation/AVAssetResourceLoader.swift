import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetResourceLoaderExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func setDelegate(_: AVAssetResourceLoaderDelegate?, queue: DispatchQueue?)

	// Own Instance Properties
	@objc var delegate: AVAssetResourceLoaderDelegate? { @objc get }
	@objc var delegateQueue: DispatchQueue? { @objc get }
	@objc @available(OSX 10.11, *) var preloadsEligibleContentKeys: Bool { @objc get @objc (setPreloadsEligibleContentKeys:) set }

	// Constructors
}

extension AVAssetResourceLoader: AVAssetResourceLoaderExports {
}
