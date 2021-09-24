import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol OperationExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func addDependency(_: Operation)
	@objc func cancel()
	@objc func main()
	@objc func removeDependency(_: Operation)
	@objc func start()
	@objc @available(OSX 10.6, *) func waitUntilFinished()

	// Own Instance Properties
	// 	@objc @available(OSX 10.8, *) var asynchronous: Bool { @objc (isAsynchronous) get }
	// 	@objc var cancelled: Bool { @objc (isCancelled) get }
	@objc @available(OSX 10.6, *) var completionBlock: (() -> Void)? { get set }
	// 	@objc var concurrent: Bool { @objc (isConcurrent) get }
	@objc var dependencies: [Operation] { @objc get }
	// 	@objc var executing: Bool { @objc (isExecuting) get }
	// 	@objc var finished: Bool { @objc (isFinished) get }
	@objc @available(OSX 10.10, *) var name: String? { @objc get @objc (setName:) set }
	@objc @available(OSX 10.10, *) var qualityOfService: QualityOfService { @objc get @objc (setQualityOfService:) set }
	@objc var queuePriority: Operation.QueuePriority { @objc get @objc (setQueuePriority:) set }
	// 	@objc var ready: Bool { @objc (isReady) get }

	// Constructors
}

extension Operation: OperationExports {
}
