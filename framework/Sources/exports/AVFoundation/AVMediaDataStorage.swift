import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMediaDataStorageExports: JSExport {
	// Static Methods

	// Instance Methods
	// 	@objc (URL) func url() -> NSURL?
}

extension AVMediaDataStorage: AVMediaDataStorageExports {}
