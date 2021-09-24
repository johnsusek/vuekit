import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVMutableDateRangeMetadataGroupExports: JSExport, AVDateRangeMetadataGroupExports {
	// Static Methods

	// Own Instance Properties
	@objc var endDate: Date? { @objc get @objc (setEndDate:) set }
	@objc var items: [AVMetadataItem] { @objc get @objc (setItems:) set }
	@objc var startDate: Date { @objc get @objc (setStartDate:) set }
}

extension AVMutableDateRangeMetadataGroup: AVMutableDateRangeMetadataGroupExports {}
