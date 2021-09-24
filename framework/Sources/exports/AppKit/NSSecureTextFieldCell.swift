import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSecureTextFieldCellExports: JSExport, NSTextFieldCellExports {
	// Static Methods

	// Own Instance Properties
	@objc var echosBullets: Bool { @objc get @objc (setEchosBullets:) set }

	// Constructors
}

extension NSSecureTextFieldCell: NSSecureTextFieldCellExports {
}
