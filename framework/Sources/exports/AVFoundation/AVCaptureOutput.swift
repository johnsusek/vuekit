import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCaptureOutputExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (connectionWithMediaType:) func connection(with: AVMediaType) -> AVCaptureConnection?
	@objc (metadataOutputRectOfInterestForRect:) @available(OSX 10.15, *) func metadataOutputRectConverted(fromOutputRect: NSRect) -> NSRect
	@objc (rectForMetadataOutputRectOfInterest:) @available(OSX 10.15, *) func outputRectConverted(fromMetadataOutputRect: NSRect) -> NSRect
	@objc (transformedMetadataObjectForMetadataObject:connection:) @available(OSX 10.15, *) func transformedMetadataObject(`for`: AVMetadataObject, connection: AVCaptureConnection) -> AVMetadataObject?

	// Own Instance Properties
	@objc var connections: [AVCaptureConnection] { @objc get }

	// Constructors
}

extension AVCaptureOutput: AVCaptureOutputExports {
}
