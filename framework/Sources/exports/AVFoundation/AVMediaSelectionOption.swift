import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMediaSelectionOptionExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc (associatedMediaSelectionOptionInMediaSelectionGroup:) func associatedMediaSelectionOption(in: AVMediaSelectionGroup) -> AVMediaSelectionOption?
	@objc (displayNameWithLocale:) @available(OSX 10.9, *) func displayName(with: Locale) -> String
	@objc func hasMediaCharacteristic(_: AVMediaCharacteristic) -> Bool
	@objc (metadataForFormat:) func metadata(forFormat: String) -> [AVMetadataItem]
	@objc func propertyList() -> Any

	// Own Instance Properties
	@objc var availableMetadataFormats: [String] { @objc get }
	@objc var commonMetadata: [AVMetadataItem] { @objc get }
	@objc @available(OSX 10.9, *) var displayName: String { @objc get }
	@objc @available(OSX 10.9, *) var extendedLanguageTag: String? { @objc get }
	@objc var locale: Locale? { @objc get }
	@objc var mediaSubTypes: [NSNumber] { @objc get }
	@objc var mediaType: AVMediaType { @objc get }
	@objc var isPlayable: Bool { @objc get }

	// Constructors
}

extension AVMediaSelectionOption: AVMediaSelectionOptionExports {
}
