import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSpeechRecognizerExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func startListening()
	@objc func stopListening()

	// Own Instance Properties
	@objc var blocksOtherRecognizers: Bool { @objc get @objc (setBlocksOtherRecognizers:) set }
	@objc var commands: [String]? { @objc get @objc (setCommands:) set }
	@objc var delegate: NSSpeechRecognizerDelegate? { @objc get @objc (setDelegate:) set }
	@objc var displayedCommandsTitle: String? { @objc get @objc (setDisplayedCommandsTitle:) set }
	@objc var listensInForegroundOnly: Bool { @objc get @objc (setListensInForegroundOnly:) set }

	// Constructors
}

extension NSSpeechRecognizer: NSSpeechRecognizerExports {
}
