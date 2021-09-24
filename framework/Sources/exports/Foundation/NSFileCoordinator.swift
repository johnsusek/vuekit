import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSFileCoordinatorExports: JSExport {
	// Static Methods
	@objc static func addFilePresenter(_: NSFilePresenter)
	@objc static func removeFilePresenter(_: NSFilePresenter)

	// Own Static Properties
	@objc static var filePresenters: [NSFilePresenter] { @objc get }

	// Instance Methods
	@objc func cancel()
	@objc (coordinateAccessWithIntents:queue:byAccessor:) @available(OSX 10.10, *) func coordinate(with intents: [NSFileAccessIntent], queue: OperationQueue, byAccessor accessor: @escaping (Error?) -> Void)
	@objc (coordinateReadingItemAtURL:options:error:byAccessor:) func coordinate(readingItemAt url: URL, options: NSFileCoordinator.ReadingOptions, error outError: NSErrorPointer, byAccessor reader: (URL) -> Void)
	@objc (coordinateReadingItemAtURL:options:writingItemAtURL:options:error:byAccessor:) func coordinate(readingItemAt readingURL: URL, options readingOptions: NSFileCoordinator.ReadingOptions, writingItemAt writingURL: URL, options writingOptions: NSFileCoordinator.WritingOptions, error outError: NSErrorPointer, byAccessor readerWriter: (URL, URL) -> Void)
	@objc (coordinateWritingItemAtURL:options:error:byAccessor:) func coordinate(writingItemAt url: URL, options: NSFileCoordinator.WritingOptions, error outError: NSErrorPointer, byAccessor writer: (URL) -> Void)
	@objc (coordinateWritingItemAtURL:options:writingItemAtURL:options:error:byAccessor:) func coordinate(writingItemAt url1: URL, options options1: NSFileCoordinator.WritingOptions, writingItemAt url2: URL, options options2: NSFileCoordinator.WritingOptions, error outError: NSErrorPointer, byAccessor writer: (URL, URL) -> Void)
	@objc (itemAtURL:didChangeUbiquityAttributes:) @available(OSX 10.13, *) func item(at url: URL, didChangeUbiquityAttributes attributes: Set<URLResourceKey>)
	@objc (itemAtURL:didMoveToURL:) func item(at oldURL: URL, didMoveTo newURL: URL)
	@objc (itemAtURL:willMoveToURL:) @available(OSX 10.8, *) func item(at oldURL: URL, willMoveTo newURL: URL)
	// 	@objc (prepareForReadingItemsAtURLs:options:writingItemsAtURLs:options:error:byAccessor:) func prepare(forReadingItemsAt: [NSURL], options: NSFileCoordinator.ReadingOptions, writingItemsAt: [NSURL], options options4: NSFileCoordinator.WritingOptions, error: UnsafeMutablePointer<Error>?, byAccessor: JSValue)

	// Own Instance Properties
	@objc @available(OSX 10.7, *) var purposeIdentifier: String { @objc get @objc (setPurposeIdentifier:) set }
}

extension NSFileCoordinator: NSFileCoordinatorExports {}
