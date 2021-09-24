import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetResourceLoadingRequestorExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var providesExpiredSessionReports: Bool { @objc get }

	// Constructors
}

extension AVAssetResourceLoadingRequestor: AVAssetResourceLoadingRequestorExports {
}
