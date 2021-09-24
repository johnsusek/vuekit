import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSFilePromiseReceiverExports: JSExport {
	// , NSPasteboardReadingExports
	// Static Methods

	// Own Static Properties
	@objc static var readableDraggedTypes: [String] { @objc get }

	// Instance Methods
	// jsvalue - @objc (receivePromisedFilesAtDestination:options:operationQueue:reader:) func receivePromisedFiles(atDestination: NSURL, options: [AnyHashable: Any], operationQueue: OperationQueue, reader: JSValue)

	// Own Instance Properties
	@objc var fileNames: [String] { @objc get }
	@objc var fileTypes: [String] { @objc get }

	// Constructors
}

extension NSFilePromiseReceiver: NSFilePromiseReceiverExports {
}
