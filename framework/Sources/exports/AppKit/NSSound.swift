import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSoundExports: JSExport {
	// , NSCopyingExports, NSPasteboardReadingExports, NSPasteboardWritingExports, NSSecureCodingExports
	// Static Methods
	@objc (canInitWithPasteboard:) static func canInit(with: NSPasteboard) -> Bool

	// Own Static Properties
	@objc @available(OSX 10.5, *) static var soundUnfilteredTypes: [String] { @objc get }

	// Instance Methods
	@objc func pause() -> Bool
	@objc func play() -> Bool
	@objc func resume() -> Bool
	@objc func setName(_: NSSound.Name?) -> Bool
	@objc func stop() -> Bool
	@objc (writeToPasteboard:) func write(to: NSPasteboard)

	// Own Instance Properties
	@objc @available(OSX 10.5, *) var currentTime: TimeInterval { @objc get @objc (setCurrentTime:) set }
	@objc var delegate: NSSoundDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.5, *) var duration: TimeInterval { @objc get }
	@objc @available(OSX 10.5, *) var loops: Bool { @objc get @objc (setLoops:) set }
	@objc var name: NSSound.Name? { @objc get }
	@objc @available(OSX 10.5, *) var playbackDeviceIdentifier: NSSound.PlaybackDeviceIdentifier? { @objc get @objc (setPlaybackDeviceIdentifier:) set }
	@objc var isPlaying: Bool { @objc get }
	@objc @available(OSX 10.5, *) var volume: Float { @objc get @objc (setVolume:) set }
}

extension NSSound: NSSoundExports {}
