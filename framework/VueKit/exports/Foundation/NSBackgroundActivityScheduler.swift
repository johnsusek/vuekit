import AppKit
import JavaScriptCore

@objc protocol NSBackgroundActivitySchedulerExports: JSExport {
	@objc var identifier: String { @objc get }
	@objc var interval: TimeInterval { @objc get @objc (setInterval:) set }
	@objc var qualityOfService: QualityOfService { @objc get @objc (setQualityOfService:) set }
	@objc var repeats: Bool { @objc get @objc (setRepeats:) set }
	@objc var shouldDefer: Bool { @objc get }
	@objc var tolerance: TimeInterval { @objc get @objc (setTolerance:) set }
	@objc func invalidate()
	// @objc func scheduleWithBlock(_: JSManagedValue /* JSManagedValue /* NSBackgroundActivityScheduler.Result: Void */: Void */)
	@objc static func create(identifier: String) -> NSBackgroundActivityScheduler
}

extension NSBackgroundActivityScheduler: NSBackgroundActivitySchedulerExports {
	@objc class func create(identifier: String) -> NSBackgroundActivityScheduler {
		return NSBackgroundActivityScheduler(identifier: identifier)
	}

	@objc override class func create() -> NSBackgroundActivityScheduler {
		return NSBackgroundActivityScheduler()
	}
}
