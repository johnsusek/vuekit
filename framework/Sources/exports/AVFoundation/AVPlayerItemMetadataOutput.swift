import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVPlayerItemMetadataOutputExports: JSExport, AVPlayerItemOutputExports {
	// Static Methods

	// Instance Methods
	@objc func setDelegate(_: AVPlayerItemMetadataOutputPushDelegate?, queue: DispatchQueue?)

	// Own Instance Properties
	@objc var advanceIntervalForDelegateInvocation: TimeInterval { @objc get @objc (setAdvanceIntervalForDelegateInvocation:) set }
	@objc var delegate: AVPlayerItemMetadataOutputPushDelegate? { @objc get }
	@objc var delegateQueue: DispatchQueue? { @objc get }

	// Constructors
	@objc static func create() -> AVPlayerItemMetadataOutput
	@objc static func create(identifiers: [String]?) -> AVPlayerItemMetadataOutput
}

extension AVPlayerItemMetadataOutput: AVPlayerItemMetadataOutputExports {
	@objc override class func create() -> AVPlayerItemMetadataOutput {
		return AVPlayerItemMetadataOutput()
	}

	@objc class func create(identifiers: [String]?) -> AVPlayerItemMetadataOutput {
		return AVPlayerItemMetadataOutput(identifiers: identifiers)
	}

}
