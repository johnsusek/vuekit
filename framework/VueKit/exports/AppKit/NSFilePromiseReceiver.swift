import AppKit
import JavaScriptCore

@objc protocol NSFilePromiseReceiverExports: JSExport {
	@objc var fileNames: [String] { @objc get }
	@objc var fileTypes: [String] { @objc get }
	@objc static var readableDraggedTypes: [String] { @objc get }
	// @objc (receivePromisedFilesAtDestination:options:operationQueue:reader:) func receivePromisedFiles(atDestination: URL, options: NSDictionary<AnyObject, AnyObject>, operationQueue: OperationQueue, reader: JSManagedValue /* URL, Error: Void */?)
}

extension NSFilePromiseReceiver: NSFilePromiseReceiverExports {
	@objc override class func create() -> NSFilePromiseReceiver {
		return NSFilePromiseReceiver()
	}
}
