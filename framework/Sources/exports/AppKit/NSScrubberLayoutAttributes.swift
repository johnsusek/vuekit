import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrubberLayoutAttributesExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Own Instance Properties
	@objc var alpha: CGFloat { get set }
	@objc var frame: NSRect { @objc get @objc (setFrame:) set }
	@objc var itemIndex: Int { @objc get @objc (setItemIndex:) set }

	// Constructors
	@objc static func create(forItemAt: Int) -> NSScrubberLayoutAttributes
}

extension NSScrubberLayoutAttributes: NSScrubberLayoutAttributesExports {
	@objc class func create(forItemAt: Int) -> NSScrubberLayoutAttributes {
		return NSScrubberLayoutAttributes(forItemAt: forItemAt)
	}

}
