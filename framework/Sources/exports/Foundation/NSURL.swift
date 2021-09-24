import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSURLExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports, NSItemProviderReadingExports, NSItemProviderWritingExports, NSPasteboardReadingExports, NSPasteboardWritingExports, QLPreviewItemExports
	// Static Methods
	@objc static func create(from: NSPasteboard) -> NSURL?
	// 	@objc (absoluteURLWithDataRepresentation:relativeToURL:) @available(OSX 10.11, *) static func absoluteURL(withDataRepresentation: Data, relativeTo: NSURL?) -> NSURL
	// 	@objc @available(OSX 10.6, *) static func bookmarkDataWithContentsOfURL(error: NSURL) -> Data?
	// 	@objc (fileURLWithFileSystemRepresentation:isDirectory:relativeToURL:) @available(OSX 10.9, *) static func fileURL(withFileSystemRepresentation: UnsafePointer<Int8>, isDirectory: Bool, relativeTo: NSURL?) -> NSURL
	// 	@objc (fileURLWithPath:) static func fileURL(withPath: String) -> NSURL
	// 	@objc (fileURLWithPath:isDirectory:) @available(OSX 10.5, *) static func fileURL(withPath: String, isDirectory: Bool) -> NSURL
	// 	@objc (fileURLWithPath:isDirectory:relativeToURL:) @available(OSX 10.11, *) static func fileURL(withPath: String, isDirectory: Bool, relativeTo: NSURL?) -> NSURL
	// 	@objc (fileURLWithPath:relativeToURL:) @available(OSX 10.11, *) static func fileURL(withPath: String, relativeTo: NSURL?) -> NSURL
	// 	@objc (fileURLWithPathComponents:) @available(OSX 10.6, *) static func fileURL(withPathComponents: [String]) -> NSURL?
	@objc (resourceValuesForKeys:fromBookmarkData:) @available(OSX 10.6, *) static func resourceValues(forKeys keys: [URLResourceKey], fromBookmarkData bookmarkData: Data) -> [URLResourceKey : Any]?
	// 	@objc @available(OSX 10.6, *) static func writeBookmarkData(toURL: Data, options: NSURL, error: NSURL.BookmarkFileCreationOptions) -> Bool

	// Instance Methods
	// 	@objc (URLByAppendingPathComponent:) @available(OSX 10.6, *) func appendingPathComponent(_: String) -> NSURL?
	// 	@objc (URLByAppendingPathComponent:isDirectory:) @available(OSX 10.7, *) func appendingPathComponent(_: String, isDirectory: Bool) -> NSURL?
	// 	@objc (URLByAppendingPathExtension:) @available(OSX 10.6, *) func appendingPathExtension(_: String) -> NSURL?
	// 	@objc @available(OSX 10.6, *) func bookmarkDataWithOptions(includingResourceValuesForKeys: NSURL.BookmarkCreationOptions, relativeToURL: [String]?, error: NSURL?) -> Data?
	// 	@objc @available(OSX 10.10, *) func checkPromisedItemIsReachableAndReturnError() -> Bool
	// 	@objc @available(OSX 10.6, *) func checkResourceIsReachableAndReturnError() -> Bool
	// 	@objc (fileReferenceURL) @available(OSX 10.6, *) func fileReferenceURL() -> NSURL?
	@objc @available(OSX 10.9, *) func getFileSystemRepresentation(_ buffer: UnsafeMutablePointer<Int8>, maxLength maxBufferLength: Int) -> Bool
	// 	@objc @available(OSX 10.10, *) func getPromisedItemResourceValue(forKey: UnsafeMutablePointer<Any>, error: URLResourceKey) -> Bool
	// 	@objc @available(OSX 10.6, *) func getResourceValue(forKey: UnsafeMutablePointer<Any>, error: URLResourceKey) -> Bool
	@objc @available(OSX 10.6, *) func isFileReferenceURL() -> Bool
	// 	@objc @available(OSX 10.10, *) func promisedItemResourceValuesForKeys(error: [String]) -> [String: Any]?
	@objc @available(OSX 10.9, *) func removeAllCachedResourceValues()
	@objc (removeCachedResourceValueForKey:) @available(OSX 10.9, *) func removeCachedResourceValue(forKey: URLResourceKey)
	// 	@objc @available(OSX 10.6, *) func resourceValuesForKeys(error: [String]) -> [String: Any]?
	// 	@objc @available(OSX 10.6, *) func setResourceValue(forKey: Any?, error: URLResourceKey) -> Bool
	// 	@objc @available(OSX 10.6, *) func setResourceValues(error: [String: Any]) -> Bool
	@objc @available(OSX 10.9, *) func setTemporaryResourceValue(_: Any?, forKey: URLResourceKey)
	@objc @available(OSX 10.7, *) func startAccessingSecurityScopedResource() -> Bool
	@objc @available(OSX 10.7, *) func stopAccessingSecurityScopedResource()
	@objc (writeToPasteboard:) func write(to: NSPasteboard)

	// Own Instance Properties
	@objc (URLByDeletingLastPathComponent) @available(OSX 10.6, *) var deletingLastPathComponent: URL? { get }
	@objc (URLByDeletingPathExtension) @available(OSX 10.6, *) var deletingPathExtension: URL? { get }
	@objc (URLByResolvingSymlinksInPath) @available(OSX 10.6, *) var resolvingSymlinksInPath: URL? { get }
	@objc (URLByStandardizingPath) @available(OSX 10.6, *) var standardizingPath: URL? { get }
	@objc var absoluteString: String? { @objc get }
	@objc (absoluteURL) var absoluteURL: URL? { get }
	@objc (baseURL) var baseURL: URL? { get }
	@objc @available(OSX 10.11, *) var dataRepresentation: Data { @objc get }
	@objc (filePathURL) @available(OSX 10.6, *) var filePathURL: URL? { get }
	@objc @available(OSX 10.9, *) var fileSystemRepresentation: UnsafePointer<Int8> { @objc get }
	@objc var isFileURL: Bool { @objc get }
	@objc var fragment: String? { @objc get }
	@objc @available(OSX 10.11, *) var hasDirectoryPath: Bool { @objc get }
	@objc var host: String? { @objc get }
	@objc @available(OSX 10.6, *) var lastPathComponent: String? { @objc get }
	@objc var password: String? { @objc get }
	@objc var path: String? { @objc get }
	@objc @available(OSX 10.6, *) var pathComponents: [String]? { @objc get }
	@objc @available(OSX 10.6, *) var pathExtension: String? { @objc get }
	@objc var port: NSNumber? { @objc get }
	@objc var query: String? { @objc get }
	@objc var relativePath: String? { @objc get }
	@objc var relativeString: String { @objc get }
	@objc var resourceSpecifier: String? { @objc get }
	@objc var scheme: String? { @objc get }
	@objc (standardizedURL) var standardized: URL? { get }
	@objc var user: String? { @objc get }

	// Constructors
	@objc @available(OSX 10.10, *) static func create(resolvingAliasFileAt: URL, options: NSURL.BookmarkResolutionOptions) -> NSURL?
	@objc @available(OSX 10.6, *) static func URLByResolvingBookmarkData(options: Data, relativeToURL: NSURL.BookmarkResolutionOptions, bookmarkDataIsStale: NSURL?, error: UnsafeMutablePointer<Bool>?) -> NSURL?
	@objc @available(OSX 10.11, *) static func create(absoluteURLWithDataRepresentation: Data, relativeTo: URL?) -> NSURL
	// @objc @available(OSX 10.6, *) static func create(byResolvingBookmarkData: Data, options: NSURL.BookmarkResolutionOptions, relativeToURL: URL?, bookmarkDataIsStale: UnsafeMutablePointer<Bool>?) -> NSURL?
	@objc @available(OSX 10.9, *) static func create(fileURLWithFileSystemRepresentation: UnsafePointer<Int8>, isDirectory: Bool, relativeTo: URL?) -> NSURL
	@objc static func create(fileURLWithPath: String) -> NSURL
	@objc @available(OSX 10.5, *) static func create(fileURLWithPath: String, isDirectory: Bool) -> NSURL
	@objc @available(OSX 10.11, *) static func create(fileURLWithPath: String, isDirectory: Bool, relativeTo: URL?) -> NSURL
	@objc @available(OSX 10.11, *) static func create(fileURLWithPath: String, relativeTo: URL?) -> NSURL
	@objc @available(OSX 10.11, *) static func create(dataRepresentation: Data, relativeTo: URL?) -> NSURL
	@objc static func create(string: String) -> NSURL?
	@objc static func create(string: String, relativeTo: URL?) -> NSURL?
}

extension NSURL: NSURLExports {
	@objc @available(OSX 10.10, *) class func create(resolvingAliasFileAt: URL, options: NSURL.BookmarkResolutionOptions) -> NSURL? {
		return try? NSURL(resolvingAliasFileAt: resolvingAliasFileAt, options: options)
	}

	@objc @available(OSX 10.6, *) class func URLByResolvingBookmarkData(options: Data, relativeToURL: NSURL.BookmarkResolutionOptions, bookmarkDataIsStale: NSURL?, error: UnsafeMutablePointer<Bool>?) -> NSURL? {
		return URLByResolvingBookmarkData(options: options, relativeToURL: relativeToURL, bookmarkDataIsStale: bookmarkDataIsStale, error: error)
	}

	@objc class func create(from: NSPasteboard) -> NSURL? {
		return NSURL(from: from)
	}

	// @objc @available(OSX 10.6, *) class func create(byResolvingBookmarkData: Data, options: NSURL.BookmarkResolutionOptions, relativeTo: URL?, bookmarkDataIsStale: UnsafeMutablePointer<ObjCBool>?) -> NSURL? {
	// 	return try? NSURL(byResolvingBookmarkData: byResolvingBookmarkData, options: options, relativeTo: relativeTo, bookmarkDataIsStale: bookmarkDataIsStale)
	// }

	@objc @available(OSX 10.11, *) class func create(absoluteURLWithDataRepresentation: Data, relativeTo: URL?) -> NSURL {
		return NSURL(absoluteURLWithDataRepresentation: absoluteURLWithDataRepresentation, relativeTo: relativeTo)
	}

	@objc @available(OSX 10.9, *) class func create(fileURLWithFileSystemRepresentation: UnsafePointer<Int8>, isDirectory: Bool, relativeTo: URL?) -> NSURL {
		return NSURL(fileURLWithFileSystemRepresentation: fileURLWithFileSystemRepresentation, isDirectory: isDirectory, relativeTo: relativeTo)
	}

	@objc class func create(fileURLWithPath: String) -> NSURL {
		return NSURL(fileURLWithPath: fileURLWithPath)
	}

	@objc @available(OSX 10.5, *) class func create(fileURLWithPath: String, isDirectory: Bool) -> NSURL {
		return NSURL(fileURLWithPath: fileURLWithPath, isDirectory: isDirectory)
	}

	@objc @available(OSX 10.11, *) class func create(fileURLWithPath: String, isDirectory: Bool, relativeTo: URL?) -> NSURL {
		return NSURL(fileURLWithPath: fileURLWithPath, isDirectory: isDirectory, relativeTo: relativeTo)
	}

	@objc @available(OSX 10.11, *) class func create(fileURLWithPath: String, relativeTo: URL?) -> NSURL {
		return NSURL(fileURLWithPath: fileURLWithPath, relativeTo: relativeTo)
	}

	@objc @available(OSX 10.11, *) class func create(dataRepresentation: Data, relativeTo: URL?) -> NSURL {
		return NSURL(dataRepresentation: dataRepresentation, relativeTo: relativeTo)
	}

	@objc class func create(string: String) -> NSURL? {
		return NSURL(string: string)
	}

	@objc class func create(string: String, relativeTo: URL?) -> NSURL? {
		return NSURL(string: string, relativeTo: relativeTo)
	}

}
