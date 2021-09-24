import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVRouteDetectorExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var multipleRoutesDetected: Bool { @objc get }
	@objc var isRouteDetectionEnabled: Bool { @objc get @objc (setRouteDetectionEnabled:) set }

	// Constructors
}

extension AVRouteDetector: AVRouteDetectorExports {
}
