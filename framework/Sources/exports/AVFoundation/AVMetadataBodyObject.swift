import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMetadataBodyObjectExports: JSExport, AVMetadataObjectExports {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var bodyID: Int { @objc get }

	// Constructors
}

extension AVMetadataBodyObject: AVMetadataBodyObjectExports {
}
