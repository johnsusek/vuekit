import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrubberProportionalLayoutExports: JSExport, NSScrubberLayoutExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var numberOfVisibleItems: Int { @objc get @objc (setNumberOfVisibleItems:) set }

	// Constructors
	@objc static func create(numberOfVisibleItems: Int) -> NSScrubberProportionalLayout
}

extension NSScrubberProportionalLayout: NSScrubberProportionalLayoutExports {
	@objc class func create(numberOfVisibleItems: Int) -> NSScrubberProportionalLayout {
		return NSScrubberProportionalLayout(numberOfVisibleItems: numberOfVisibleItems)
	}

}
