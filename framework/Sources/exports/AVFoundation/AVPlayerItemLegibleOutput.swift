import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerItemLegibleOutputExports: JSExport, AVPlayerItemOutputExports {
	// Static Methods

	// Instance Methods
	@objc func setDelegate(_: AVPlayerItemLegibleOutputPushDelegate?, queue: DispatchQueue?)

	// Own Instance Properties
	@objc var advanceIntervalForDelegateInvocation: TimeInterval { @objc get @objc (setAdvanceIntervalForDelegateInvocation:) set }
	@objc var delegate: AVPlayerItemLegibleOutputPushDelegate? { @objc get }
	@objc var delegateQueue: DispatchQueue? { @objc get }
	@objc var textStylingResolution: AVPlayerItemLegibleOutput.TextStylingResolution { @objc get @objc (setTextStylingResolution:) set }

	// Constructors
	@objc static func create() -> AVPlayerItemLegibleOutput
	@objc static func create(mediaSubtypesForNativeRepresentation: [NSNumber]) -> AVPlayerItemLegibleOutput
}

extension AVPlayerItemLegibleOutput: AVPlayerItemLegibleOutputExports {
	@objc override class func create() -> AVPlayerItemLegibleOutput {
		return AVPlayerItemLegibleOutput()
	}

	@objc class func create(mediaSubtypesForNativeRepresentation: [NSNumber]) -> AVPlayerItemLegibleOutput {
		return AVPlayerItemLegibleOutput(mediaSubtypesForNativeRepresentation: mediaSubtypesForNativeRepresentation)
	}

}
