import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSBackgroundActivitySchedulerExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func invalidate()
	// jsvalue - @objc (scheduleWithBlock:) func schedule(_: JSValue)

	// Own Instance Properties
	@objc var identifier: String { @objc get }
	@objc var interval: TimeInterval { @objc get @objc (setInterval:) set }
	@objc var qualityOfService: QualityOfService { @objc get @objc (setQualityOfService:) set }
	@objc var repeats: Bool { @objc get @objc (setRepeats:) set }
	@objc var shouldDefer: Bool { @objc get }
	@objc var tolerance: TimeInterval { @objc get @objc (setTolerance:) set }

	// Constructors
	@objc static func create(identifier: String) -> NSBackgroundActivityScheduler
}

extension NSBackgroundActivityScheduler: NSBackgroundActivitySchedulerExports {
	@objc class func create(identifier: String) -> NSBackgroundActivityScheduler {
		return NSBackgroundActivityScheduler(identifier: identifier)
	}

}
