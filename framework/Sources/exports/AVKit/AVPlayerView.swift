import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVKit

@objc protocol AVPlayerViewExports: JSExport, NSViewExports {
	// Static Methods

	// Instance Methods
	// jsvalue - @objc (beginTrimmingWithCompletionHandler:) func beginTrimming(completionHandler: JSValue)
	@objc func flashChapterNumber(_: Int, chapterTitle: String?)

	// Own Instance Properties
	@objc var actionPopUpButtonMenu: NSMenu? { @objc get @objc (setActionPopUpButtonMenu:) set }
	@objc @available(OSX 10.15, *) var allowsPictureInPicturePlayback: Bool { @objc get @objc (setAllowsPictureInPicturePlayback:) set }
	@objc var canBeginTrimming: Bool { @objc get }
	@objc @available(OSX 10.10, *) var contentOverlayView: NSView? { @objc get }
	@objc var controlsStyle: AVPlayerViewControlsStyle { @objc get @objc (setControlsStyle:) set }
	@objc @available(OSX 10.15, *) var pictureInPictureDelegate: AVPlayerViewPictureInPictureDelegate? { @objc get @objc (setPictureInPictureDelegate:) set }
	@objc var player: AVPlayer? { @objc get @objc (setPlayer:) set }
	@objc @available(OSX 10.10, *) var isReadyForDisplay: Bool { @objc get }
	@objc var showsFrameSteppingButtons: Bool { @objc get @objc (setShowsFrameSteppingButtons:) set }
	@objc var showsFullScreenToggleButton: Bool { @objc get @objc (setShowsFullScreenToggleButton:) set }
	@objc var showsSharingServiceButton: Bool { @objc get @objc (setShowsSharingServiceButton:) set }
	@objc @available(OSX 10.15, *) var showsTimecodes: Bool { @objc get @objc (setShowsTimecodes:) set }
	@objc @available(OSX 10.13, *) var updatesNowPlayingInfoCenter: Bool { @objc get @objc (setUpdatesNowPlayingInfoCenter:) set }
	@objc @available(OSX 10.10, *) var videoBounds: NSRect { @objc get }
	@objc @available(OSX 10.10, *) var videoGravity: AVLayerVideoGravity { @objc get @objc (setVideoGravity:) set }
}

@objc protocol PlayerViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> PlayerView
}

class PlayerView: AVPlayerView, PlayerViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> PlayerView {
		return PlayerView()
	}

}

extension AVPlayerView: AVPlayerViewExports {}
