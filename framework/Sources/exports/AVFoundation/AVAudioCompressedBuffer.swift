import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioCompressedBufferExports: JSExport, AVAudioBufferExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc @available(OSX 10.13, *) var byteCapacity: UInt32 { @objc get }
	@objc @available(OSX 10.13, *) var byteLength: UInt32 { @objc get @objc (setByteLength:) set }
	@objc var data: UnsafeMutableRawPointer { @objc get }
	@objc var maximumPacketSize: Int { @objc get }
	@objc var packetCapacity: AVAudioPacketCount { @objc get }
	@objc var packetCount: AVAudioPacketCount { @objc get @objc (setPacketCount:) set }
	@objc var packetDescriptions: UnsafeMutablePointer<AudioStreamPacketDescription>? { @objc get }

	// Constructors
	@objc static func create(format: AVAudioFormat, packetCapacity: AVAudioPacketCount) -> AVAudioCompressedBuffer
	@objc static func create(format: AVAudioFormat, packetCapacity: AVAudioPacketCount, maximumPacketSize: Int) -> AVAudioCompressedBuffer
}

extension AVAudioCompressedBuffer: AVAudioCompressedBufferExports {
	@objc class func create(format: AVAudioFormat, packetCapacity: AVAudioPacketCount) -> AVAudioCompressedBuffer {
		return AVAudioCompressedBuffer(format: format, packetCapacity: packetCapacity)
	}

	@objc class func create(format: AVAudioFormat, packetCapacity: AVAudioPacketCount, maximumPacketSize: Int) -> AVAudioCompressedBuffer {
		return AVAudioCompressedBuffer(format: format, packetCapacity: packetCapacity, maximumPacketSize: maximumPacketSize)
	}

}
