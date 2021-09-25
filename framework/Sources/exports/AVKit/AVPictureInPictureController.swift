import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVKit

@objc protocol AVPictureInPictureControllerExports: JSExport {
	// Static Methods
	@objc static func isPictureInPictureSupported() -> Bool

	// Own Static Properties
	@objc static var pictureInPictureButtonStartImage: NSImage { @objc get }
	@objc static var pictureInPictureButtonStopImage: NSImage { @objc get }

	// Instance Methods
	@objc func startPictureInPicture()
	@objc func stopPictureInPicture()

	// Own Instance Properties
	@objc var delegate: AVPictureInPictureControllerDelegate? { @objc get @objc (setDelegate:) set }
	@objc var isPictureInPictureActive: Bool { @objc get }
	@objc var isPictureInPicturePossible: Bool { @objc get }
	@objc var isPictureInPictureSuspended: Bool { @objc get }
	@objc var playerLayer: AVPlayerLayer { @objc get }

	// Constructors
	@objc static func create() -> AVPictureInPictureController
	@objc static func create(playerLayer: AVPlayerLayer) -> AVPictureInPictureController?
}

extension AVPictureInPictureController: AVPictureInPictureControllerExports {
	@objc class func create() -> AVPictureInPictureController {
		return AVPictureInPictureController()
	}

	@objc class func create(playerLayer: AVPlayerLayer) -> AVPictureInPictureController? {
		return AVPictureInPictureController(playerLayer: playerLayer)
	}

}
