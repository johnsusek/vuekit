import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSScrubberSelectionStyleExports: JSExport {
	// , NSCodingExports
	// Static Methods

	// Own Static Properties
	@objc (outlineOverlayStyle) static var outlineOverlay: NSScrubberSelectionStyle { @objc (outlineOverlayStyle) get }
	@objc (roundedBackgroundStyle) static var roundedBackground: NSScrubberSelectionStyle { @objc (roundedBackgroundStyle) get }

	// Instance Methods
	@objc func makeSelectionView() -> NSScrubberSelectionView?

	// Constructors
}

extension NSScrubberSelectionStyle: NSScrubberSelectionStyleExports {
}
