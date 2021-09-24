import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSDataExports: JSExport {
	// , NSCopyingExports, NSMutableCopyingExports, NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (base64EncodedDataWithOptions:) @available(OSX 10.9, *) func base64EncodedData(options: NSData.Base64EncodingOptions) -> Data
	@objc (base64EncodedStringWithOptions:) @available(OSX 10.9, *) func base64EncodedString(options: NSData.Base64EncodingOptions) -> String
	// last error param - @objc (compressedDataUsingAlgorithm:error:) @available(OSX 10.15, *) func compressed(using: NSData.CompressionAlgorithm) -> Data?
	// last error param - @objc (decompressedDataUsingAlgorithm:error:) @available(OSX 10.15, *) func decompressed(using: NSData.CompressionAlgorithm) -> Data?
	@objc (enumerateByteRangesUsingBlock:) @available(OSX 10.9, *) func enumerateBytes(_ block: (UnsafeRawPointer, NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
	@objc func getBytes(_: UnsafeMutableRawPointer, length: Int)
	@objc func getBytes(_: UnsafeMutableRawPointer, range: NSRange)
	@objc (isEqualToData:) func isEqual(to: Data) -> Bool
	@objc (rangeOfData:options:range:) @available(OSX 10.6, *) func range(of: Data, options: NSData.SearchOptions, in: NSRange) -> NSRange
	@objc (subdataWithRange:) func subdata(with: NSRange) -> Data
	@objc (writeToFile:atomically:) func write(toFile: String, atomically: Bool) -> Bool
	// 	@objc func writeToFile(options: String, error: NSData.WritingOptions) -> Bool
	@objc (writeToURL:atomically:) func write(to url: URL, atomically: Bool) -> Bool
	// 	@objc func writeToURL(options: NSURL, error: NSData.WritingOptions) -> Bool

	// Own Instance Properties
	@objc var bytes: UnsafeRawPointer { @objc get }
	@objc var length: Int { @objc get }
}

extension NSData: NSDataExports {}
