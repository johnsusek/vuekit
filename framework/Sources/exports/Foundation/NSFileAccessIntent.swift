import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSFileAccessIntentExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc (URL) var url: URL { get }

	// Constructors
	@objc (readingIntentWithURL:options:) static func readingIntent(with: NSURL, options: NSFileCoordinator.ReadingOptions) -> NSFileAccessIntent
	@objc (writingIntentWithURL:options:) static func writingIntent(with: NSURL, options: NSFileCoordinator.WritingOptions) -> NSFileAccessIntent
}

extension NSFileAccessIntent: NSFileAccessIntentExports {
	@objc (readingIntentWithURL:options:) class func readingIntent(with: NSURL, options: NSFileCoordinator.ReadingOptions) -> NSFileAccessIntent {
		return readingIntent(with: with, options: options)
	}

	@objc (writingIntentWithURL:options:) class func writingIntent(with: NSURL, options: NSFileCoordinator.WritingOptions) -> NSFileAccessIntent {
		return writingIntent(with: with, options: options)
	}

}
