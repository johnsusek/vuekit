import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAudioUnitComponentExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc @available(OSX 10.10, *) func supportsNumberInputChannels(_: Int, outputChannels: Int) -> Bool

	// Own Instance Properties
	@objc var allTagNames: [String] { @objc get }
	@objc var audioComponent: AudioComponent { get }
	@objc var audioComponentDescription: AudioComponentDescription { @objc get }
	@objc @available(OSX 10.10, *) var availableArchitectures: [NSNumber] { @objc get }
	@objc @available(OSX 10.10, *) var configurationDictionary: [String: Any] { @objc get }
	@objc @available(OSX 10.10, *) var hasCustomView: Bool { @objc get }
	@objc var hasMIDIInput: Bool { @objc get }
	@objc var hasMIDIOutput: Bool { @objc get }
	@objc @available(OSX 10.11, *) var icon: NSImage? { @objc get }
	@objc @available(OSX 10.10, *) var iconURL: URL? { get }
	@objc var localizedTypeName: String { @objc get }
	@objc var manufacturerName: String { @objc get }
	@objc var name: String { @objc get }
	@objc @available(OSX 10.10, *) var passesAUVal: Bool { @objc get }
	@objc var isSandboxSafe: Bool { @objc get }
	@objc var typeName: String { @objc get }
	@objc @available(OSX 10.10, *) var userTagNames: [String] { @objc get @objc (setUserTagNames:) set }
	@objc var version: Int { @objc get }
	@objc var versionString: String { @objc get }

	// Constructors
}

extension AVAudioUnitComponent: AVAudioUnitComponentExports {
}
