import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextInputContextExports: JSExport {
	// Static Methods
	@objc (localizedNameForInputSource:) static func localizedName(forInputSource: NSTextInputSourceIdentifier) -> String?

	// Own Static Properties
	@objc static var current: NSTextInputContext? { @objc (currentInputContext) get }

	// Instance Methods
	@objc func activate()
	@objc func deactivate()
	@objc func discardMarkedText()
	@objc (handleEvent:) func handleEvent(_: NSEvent) -> Bool
	@objc func invalidateCharacterCoordinates()

	// Own Instance Properties
	@objc var acceptsGlyphInfo: Bool { @objc get @objc (setAcceptsGlyphInfo:) set }
	@objc var allowedInputSourceLocales: [String]? { @objc get @objc (setAllowedInputSourceLocales:) set }
	@objc var client: NSTextInputClient { @objc get }
	@objc var keyboardInputSources: [String]? { @objc get }
	@objc var selectedKeyboardInputSource: NSTextInputSourceIdentifier? { @objc get @objc (setSelectedKeyboardInputSource:) set }
}

extension NSTextInputContext: NSTextInputContextExports {}
