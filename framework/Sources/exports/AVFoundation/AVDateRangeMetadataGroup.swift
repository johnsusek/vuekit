import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVDateRangeMetadataGroupExports: JSExport, AVMetadataGroupExports {
	// , NSCopyingExports, NSMutableCopyingExports
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var endDate: Date? { @objc get }
	@objc var startDate: Date { @objc get }
}

extension AVDateRangeMetadataGroup: AVDateRangeMetadataGroupExports {}
