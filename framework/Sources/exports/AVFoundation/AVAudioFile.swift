import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioFileExports: JSExport {
	// Static Methods

	// Instance Methods
	// throws - @objc func readIntoBuffer(error: AVAudioPCMBuffer) -> Bool
	// throws - @objc func readIntoBuffer(frameCount: AVAudioPCMBuffer, error: AVAudioFrameCount) -> Bool
	// throws - @objc func writeFromBuffer(error: const AVAudioPCMBuffer) -> Bool

	// Own Instance Properties
	@objc var fileFormat: AVAudioFormat { @objc get }
	@objc var framePosition: AVAudioFramePosition { @objc get @objc (setFramePosition:) set }
	@objc var length: AVAudioFramePosition { @objc get }
	@objc var processingFormat: AVAudioFormat { @objc get }
	@objc var url: URL { get }
}

extension AVAudioFile: AVAudioFileExports {}
