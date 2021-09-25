import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSMetadataQueryExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func disableUpdates()
	@objc func enableUpdates()
	// jsvalue - @objc (enumerateResultsUsingBlock:) @available(OSX 10.9, *) func enumerateResults(_: JSValue)
	// jsvalue - @objc (enumerateResultsWithOptions:usingBlock:) @available(OSX 10.9, *) func enumerateResults(options: NSEnumerationOptions, using: JSValue)
	@objc (indexOfResult:) func index(ofResult: Any) -> Int
	@objc (resultAtIndex:) func result(at: Int) -> Any
	@objc (startQuery) func start() -> Bool
	@objc (stopQuery) func stop()
	@objc (valueOfAttribute:forResultAtIndex:) func value(ofAttribute: String, forResultAt: Int) -> Any?

	// Own Instance Properties
	@objc var delegate: NSMetadataQueryDelegate? { @objc get @objc (setDelegate:) set }
	@objc var isGathering: Bool { @objc get }
	@objc var groupedResults: [NSMetadataQueryResultGroup] { @objc get }
	@objc var groupingAttributes: [String]? { @objc get @objc (setGroupingAttributes:) set }
	@objc var notificationBatchingInterval: TimeInterval { @objc get @objc (setNotificationBatchingInterval:) set }
	@objc @available(OSX 10.9, *) var operationQueue: OperationQueue? { @objc get @objc (setOperationQueue:) set }
	@objc var predicate: NSPredicate? { @objc get @objc (setPredicate:) set }
	@objc var resultCount: Int { @objc get }
	@objc var results: [Any] { @objc get }
	@objc @available(OSX 10.9, *) var searchItems: [Any]? { @objc get @objc (setSearchItems:) set }
	@objc var searchScopes: [Any] { @objc get @objc (setSearchScopes:) set }
	@objc var sortDescriptors: [NSSortDescriptor] { @objc get @objc (setSortDescriptors:) set }
	@objc var isStarted: Bool { @objc get }
	@objc var isStopped: Bool { @objc get }
	@objc var valueListAttributes: [String] { @objc get @objc (setValueListAttributes:) set }
	@objc var valueLists: [String: [NSMetadataQueryAttributeValueTuple]] { @objc get }

	// Constructors
	@objc static func create() -> NSMetadataQuery
}

extension NSMetadataQuery: NSMetadataQueryExports {
	@objc class func create() -> NSMetadataQuery {
		return NSMetadataQuery()
	}

}
