import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioUnitComponentManagerExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (componentsMatchingDescription:) func components(matching: AudioComponentDescription) -> [AVAudioUnitComponent]
	@objc (componentsMatchingPredicate:) func components(matching: NSPredicate) -> [AVAudioUnitComponent]
	@objc (componentsPassingTest:) func components(passingTest testHandler: @escaping (AVAudioUnitComponent, UnsafeMutablePointer<ObjCBool>) -> Bool) -> [AVAudioUnitComponent]

	// Own Instance Properties
	@objc var standardLocalizedTagNames: [String] { @objc get }
	@objc var tagNames: [String] { @objc get }
}

extension AVAudioUnitComponentManager: AVAudioUnitComponentManagerExports {}
