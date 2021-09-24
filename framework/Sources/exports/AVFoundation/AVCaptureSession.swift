import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVCaptureSessionExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (addConnection:) func addConnection(_: AVCaptureConnection)
	@objc func addInput(_: AVCaptureInput)
	@objc func addInputWithNoConnections(_: AVCaptureInput)
	@objc func addOutput(_: AVCaptureOutput)
	@objc func addOutputWithNoConnections(_: AVCaptureOutput)
	@objc func beginConfiguration()
	@objc (canAddConnection:) func canAddConnection(_: AVCaptureConnection) -> Bool
	@objc func canAddInput(_: AVCaptureInput) -> Bool
	@objc func canAddOutput(_: AVCaptureOutput) -> Bool
	@objc func canSetSessionPreset(_: AVCaptureSession.Preset) -> Bool
	@objc func commitConfiguration()
	@objc (removeConnection:) func removeConnection(_: AVCaptureConnection)
	@objc func removeInput(_: AVCaptureInput)
	@objc func removeOutput(_: AVCaptureOutput)
	@objc func startRunning()
	@objc func stopRunning()

	// Own Instance Properties
	@objc @available(OSX 10.15, *) var connections: [AVCaptureConnection] { @objc get }
	@objc var inputs: [AVCaptureInput] { @objc get }
	@objc @available(OSX 10.9, *) var masterClock: CMClock? { @objc get }
	@objc var outputs: [AVCaptureOutput] { @objc get }
	@objc var isRunning: Bool { @objc get }
	@objc var sessionPreset: AVCaptureSession.Preset { @objc get @objc (setSessionPreset:) set }

	// Constructors
}

extension AVCaptureSession: AVCaptureSessionExports {
}
