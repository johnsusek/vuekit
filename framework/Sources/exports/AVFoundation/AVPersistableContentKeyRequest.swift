import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPersistableContentKeyRequestExports: JSExport, AVContentKeyRequestExports {
	// Static Methods

	// Instance Methods
	// throws - @objc func persistableContentKeyFromKeyVendorResponse(options: Data, error: [String: Any]?) -> Data?

	// Constructors
}

extension AVPersistableContentKeyRequest: AVPersistableContentKeyRequestExports {
}
