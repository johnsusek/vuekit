import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSUserInterfaceCompressionOptionsExports: JSExport {
	// , NSCodingExports, NSCopyingExports
	// Static Methods

	// Own Static Properties
	@objc static var breakEqualWidths: NSUserInterfaceCompressionOptions { @objc (breakEqualWidthsOption) get }
	@objc static var hideImages: NSUserInterfaceCompressionOptions { @objc (hideImagesOption) get }
	@objc static var hideText: NSUserInterfaceCompressionOptions { @objc (hideTextOption) get }
	@objc static var reduceMetrics: NSUserInterfaceCompressionOptions { @objc (reduceMetricsOption) get }
	@objc static var standardOptions: NSUserInterfaceCompressionOptions { @objc get }

	// Instance Methods
	@objc (containsOptions:) func contains(_: NSUserInterfaceCompressionOptions) -> Bool
	@objc (intersectsOptions:) func intersects(_: NSUserInterfaceCompressionOptions) -> Bool
	@objc (optionsByAddingOptions:) func union(_: NSUserInterfaceCompressionOptions) -> NSUserInterfaceCompressionOptions
	@objc (optionsByRemovingOptions:) func subtracting(_: NSUserInterfaceCompressionOptions) -> NSUserInterfaceCompressionOptions

	// Own Instance Properties
	@objc var isEmpty: Bool { @objc get }
}

extension NSUserInterfaceCompressionOptions: NSUserInterfaceCompressionOptionsExports {}
