import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import CoreImage

@objc protocol CIDetectorExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (featuresInImage:) @available(OSX 10.7, *) func features(in: CIImage) -> [CIFeature]
	@objc (featuresInImage:options:) @available(OSX 10.8, *) func features(in: CIImage, options: [String: Any]?) -> [CIFeature]

	// Constructors
}

extension CIDetector: CIDetectorExports {
}
