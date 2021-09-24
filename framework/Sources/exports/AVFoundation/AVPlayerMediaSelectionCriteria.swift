import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerMediaSelectionCriteriaExports: JSExport {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var preferredLanguages: [String]? { @objc get }
	@objc var preferredMediaCharacteristics: [AVMediaCharacteristic]? { get }
	@objc @available(OSX 10.14, *) var principalMediaCharacteristics: [AVMediaCharacteristic]? { get }
}

extension AVPlayerMediaSelectionCriteria: AVPlayerMediaSelectionCriteriaExports {}
