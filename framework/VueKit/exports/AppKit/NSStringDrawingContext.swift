import AppKit
import JavaScriptCore

@objc protocol NSStringDrawingContextExports: JSExport {
	@objc var actualScaleFactor: CGFloat { @objc get }
	@objc var minimumScaleFactor: CGFloat { @objc get @objc (setMinimumScaleFactor:) set }
	@objc var totalBounds: NSRect { @objc get }
}

extension NSStringDrawingContext: NSStringDrawingContextExports {
	@objc override class func create() -> NSStringDrawingContext {
		return NSStringDrawingContext()
	}
}
