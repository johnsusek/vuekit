import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioBufferExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var audioBufferList: UnsafePointer<AudioBufferList> { @objc get }
	@objc var format: AVAudioFormat { @objc get }
	@objc var mutableAudioBufferList: UnsafeMutablePointer<AudioBufferList> { @objc get }

	// Constructors
}

extension AVAudioBuffer: AVAudioBufferExports {
}
