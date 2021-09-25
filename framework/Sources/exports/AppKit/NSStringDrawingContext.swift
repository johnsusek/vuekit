import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSStringDrawingContextExports: JSExport {
	// Static Methods

	// Own Instance Properties
	@objc var actualScaleFactor: CGFloat { get }
	@objc var minimumScaleFactor: CGFloat { get set }
	@objc var totalBounds: NSRect { @objc get }

	// Constructors
	@objc static func create() -> NSStringDrawingContext
}

extension NSStringDrawingContext: NSStringDrawingContextExports {
	@objc class func create() -> NSStringDrawingContext {
		return NSStringDrawingContext()
	}

}
