import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSMutableDataExports: JSExport, NSDataExports {
	// Static Methods

	// Instance Methods
	@objc (appendBytes:length:) func append(_: UnsafeRawPointer, length: Int)
	@objc (appendData:) func append(_: Data)
	// 	@objc @available(OSX 10.15, *) func compressUsingAlgorithm(error: NSData.CompressionAlgorithm) -> Bool
	// 	@objc @available(OSX 10.15, *) func decompressUsingAlgorithm(error: NSData.CompressionAlgorithm) -> Bool
	@objc (increaseLengthBy:) func increaseLength(by: Int)
	@objc (replaceBytesInRange:withBytes:) func replaceBytes(in: NSRange, withBytes: UnsafeRawPointer)
	@objc (replaceBytesInRange:withBytes:length:) func replaceBytes(in: NSRange, withBytes: UnsafeRawPointer?, length: Int)
	@objc (resetBytesInRange:) func resetBytes(in: NSRange)
	@objc func setData(_: Data)

	// Own Instance Properties
	@objc var length: Int { @objc get @objc (setLength:) set }
	@objc var mutableBytes: UnsafeMutableRawPointer { @objc get }
}

extension NSMutableData: NSMutableDataExports {}
