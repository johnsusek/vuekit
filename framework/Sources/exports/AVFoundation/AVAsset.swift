import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVAssetExports: JSExport {
	// , AVAsynchronousKeyValueLoadingExports, NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc func cancelLoading()
	@objc (chapterMetadataGroupsBestMatchingPreferredLanguages:) @available(OSX 10.8, *) func chapterMetadataGroups(bestMatchingPreferredLanguages: [String]) -> [AVTimedMetadataGroup]
	@objc (chapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys:) @available(OSX 10.7, *) func chapterMetadataGroups(withTitleLocale locale: Locale, containingItemsWithCommonKeys commonKeys: [AVMetadataKey]?) -> [AVTimedMetadataGroup]
	@objc (mediaSelectionGroupForMediaCharacteristic:) @available(OSX 10.8, *) func mediaSelectionGroup(forMediaCharacteristic: AVMediaCharacteristic) -> AVMediaSelectionGroup?
	@objc (metadataForFormat:) func metadata(forFormat: AVMetadataFormat) -> [AVMetadataItem]
	@objc (trackWithTrackID:) func track(withTrackID: CMPersistentTrackID) -> AVAssetTrack?
	@objc (tracksWithMediaCharacteristic:) func tracks(withMediaCharacteristic: AVMediaCharacteristic) -> [AVAssetTrack]
	@objc (tracksWithMediaType:) func tracks(withMediaType: AVMediaType) -> [AVAssetTrack]
	@objc func unusedTrackID() -> CMPersistentTrackID

	// Own Instance Properties
	@objc @available(OSX 10.13, *) var allMediaSelections: [AVMediaSelection] { @objc get }
	@objc @available(OSX 10.7, *) var availableChapterLocales: [Locale] { @objc get }
	@objc @available(OSX 10.8, *) var availableMediaCharacteristicsWithMediaSelectionOptions: [AVMediaCharacteristic] { get }
	@objc var availableMetadataFormats: [AVMetadataFormat] { get }
	@objc @available(OSX 10.11, *) var canContainFragments: Bool { @objc get }
	@objc var commonMetadata: [AVMetadataItem] { @objc get }
	@objc @available(OSX 10.11, *) var isCompatibleWithAirPlayVideo: Bool { @objc get }
	@objc @available(OSX 10.7, *) var isComposable: Bool { @objc get }
	@objc @available(OSX 10.11, *) var containsFragments: Bool { @objc get }
	@objc @available(OSX 10.8, *) var creationDate: AVMetadataItem? { @objc get }
	@objc var duration: CMTime { @objc get }
	@objc @available(OSX 10.7, *) var isExportable: Bool { @objc get }
	@objc @available(OSX 10.7, *) var hasProtectedContent: Bool { @objc get }
	@objc var lyrics: String? { @objc get }
	@objc @available(OSX 10.10, *) var metadata: [AVMetadataItem] { @objc get }
	@objc @available(OSX 10.15, *) var minimumTimeOffsetFromLive: CMTime { @objc get }
	@objc @available(OSX 10.12.2, *) var overallDurationHint: CMTime { @objc get }
	@objc @available(OSX 10.7, *) var isPlayable: Bool { @objc get }
	@objc @available(OSX 10.11, *) var preferredMediaSelection: AVMediaSelection { @objc get }
	@objc var preferredRate: Float { @objc get }
	@objc var preferredTransform: CGAffineTransform { @objc get }
	@objc var preferredVolume: Float { @objc get }
	@objc var providesPreciseDurationAndTiming: Bool { @objc get }
	@objc @available(OSX 10.7, *) var isReadable: Bool { @objc get }
	@objc @available(OSX 10.7, *) var referenceRestrictions: AVAssetReferenceRestrictions { @objc get }
	@objc @available(OSX 10.9, *) var trackGroups: [AVAssetTrackGroup] { @objc get }
	@objc var tracks: [AVAssetTrack] { @objc get }

	// Constructors
}

extension AVAsset: AVAssetExports {
}
