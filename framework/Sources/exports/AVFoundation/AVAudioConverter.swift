import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioConverterExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (convertToBuffer:error:withInputFromBlock:) func convert(to outputBuffer: AVAudioBuffer, error outError: NSErrorPointer, withInputFrom inputBlock: @escaping AVAudioConverterInputBlock) -> AVAudioConverterOutputStatus
	// throws - @objc func convertToBuffer(fromBuffer: AVAudioPCMBuffer, error: const AVAudioPCMBuffer) -> Bool
	@objc func reset()

	// Own Instance Properties
	@objc var applicableEncodeBitRates: [NSNumber]? { @objc get }
	@objc var applicableEncodeSampleRates: [NSNumber]? { @objc get }
	@objc var availableEncodeBitRates: [NSNumber]? { @objc get }
	@objc var availableEncodeChannelLayoutTags: [NSNumber]? { @objc get }
	@objc var availableEncodeSampleRates: [NSNumber]? { @objc get }
	@objc var bitRate: Int { @objc get @objc (setBitRate:) set }
	@objc var bitRateStrategy: String? { @objc get @objc (setBitRateStrategy:) set }
	@objc var channelMap: [NSNumber] { @objc get @objc (setChannelMap:) set }
	@objc var dither: Bool { @objc get @objc (setDither:) set }
	@objc var downmix: Bool { @objc get @objc (setDownmix:) set }
	@objc var inputFormat: AVAudioFormat { @objc get }
	@objc var magicCookie: Data? { @objc get @objc (setMagicCookie:) set }
	@objc var maximumOutputPacketSize: Int { @objc get }
	@objc var outputFormat: AVAudioFormat { @objc get }
	@objc var primeInfo: AVAudioConverterPrimeInfo { @objc get @objc (setPrimeInfo:) set }
	@objc var primeMethod: AVAudioConverterPrimeMethod { @objc get @objc (setPrimeMethod:) set }
	@objc var sampleRateConverterAlgorithm: String? { @objc get @objc (setSampleRateConverterAlgorithm:) set }
	@objc var sampleRateConverterQuality: Int { @objc get @objc (setSampleRateConverterQuality:) set }
}

extension AVAudioConverter: AVAudioConverterExports {}
