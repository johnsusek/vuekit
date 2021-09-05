import AppKit
import JavaScriptCore

@objc protocol NSScrubberSelectionStyleExports: JSExport {
	@objc static var outlineOverlay: NSScrubberSelectionStyle { @objc (outlineOverlayStyle) get }
	@objc static var roundedBackground: NSScrubberSelectionStyle { @objc (roundedBackgroundStyle) get }
	@objc func makeSelectionView() -> NSScrubberSelectionView?
}

extension NSScrubberSelectionStyle: NSScrubberSelectionStyleExports {
	@objc override class func create() -> NSScrubberSelectionStyle {
		return NSScrubberSelectionStyle()
	}
}
