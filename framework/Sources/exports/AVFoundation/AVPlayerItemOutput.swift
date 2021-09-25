import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerItemOutputExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (itemTimeForCVTimeStamp:) @available(OSX 10.8, *) func itemTime(`for`: CVTimeStamp) -> CMTime
	@objc (itemTimeForHostTime:) func itemTime(forHostTime: CFTimeInterval) -> CMTime
	@objc (itemTimeForMachAbsoluteTime:) func itemTime(forMachAbsoluteTime: Int64) -> CMTime

	// Own Instance Properties
	@objc @available(OSX 10.8, *) var suppressesPlayerRendering: Bool { @objc get @objc (setSuppressesPlayerRendering:) set }

	// Constructors
	@objc static func create() -> AVPlayerItemOutput
}

extension AVPlayerItemOutput: AVPlayerItemOutputExports {
	@objc class func create() -> AVPlayerItemOutput {
		return AVPlayerItemOutput()
	}

}
