import AppKit
import JavaScriptCore

@objc protocol NSShadowExports: JSExport {
	@objc var shadowBlurRadius: CGFloat { @objc get @objc (setShadowBlurRadius:) set }
	@objc var shadowColor: NSColor? { @objc get @objc (setShadowColor:) set }
	@objc var shadowOffset: NSSize { @objc get @objc (setShadowOffset:) set }
	@objc func set()
}

extension NSShadow: NSShadowExports {
	@objc override class func create() -> NSShadow {
		return NSShadow()
	}
}
