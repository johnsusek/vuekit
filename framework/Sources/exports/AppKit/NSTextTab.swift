import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextTabExports: JSExport {
	// , NSCodingExports, NSCopyingExports, NSSecureCodingExports
	// Static Methods
	@objc (columnTerminatorsForLocale:) @available(OSX 10.11, *) static func columnTerminators(`for`: Locale?) -> CharacterSet

	// Instance Methods

	// Own Instance Properties
	@objc var alignment: NSTextAlignment { @objc get }
	@objc var location: CGFloat { get }
	@objc var options: [NSTextTab.OptionKey : Any] { get }
	@objc var tabStopType: NSParagraphStyle.TextTabType { @objc get }
}

extension NSTextTab: NSTextTabExports {}
