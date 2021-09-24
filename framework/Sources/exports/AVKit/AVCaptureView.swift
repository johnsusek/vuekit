import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVKit

@objc protocol AVCaptureViewExports: JSExport, NSViewExports {
	// Static Methods

	// Instance Methods
	@objc func setSession(_: AVCaptureSession?, showVideoPreview: Bool, showAudioPreview: Bool)

	// Own Instance Properties
	@objc var controlsStyle: AVCaptureViewControlsStyle { @objc get @objc (setControlsStyle:) set }
	@objc var delegate: AVCaptureViewDelegate? { @objc get @objc (setDelegate:) set }
	@objc var fileOutput: AVCaptureFileOutput? { @objc get }
	@objc var session: AVCaptureSession? { @objc get }
	@objc var videoGravity: AVLayerVideoGravity { @objc get @objc (setVideoGravity:) set }
}

@objc protocol CaptureViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> CaptureView
}

class CaptureView: AVCaptureView, CaptureViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> CaptureView {
		return CaptureView()
	}

}

extension AVCaptureView: AVCaptureViewExports {}
