import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSFormCellExports: JSExport, NSActionCellExports {
	// Static Methods

	// Instance Methods
	@objc func titleWidth(_: NSSize) -> CGFloat

	// Own Instance Properties
	@objc var attributedTitle: NSAttributedString { @objc get @objc (setAttributedTitle:) set }
	@objc var placeholderAttributedString: NSAttributedString? { @objc get @objc (setPlaceholderAttributedString:) set }
	@objc var placeholderString: String? { @objc get @objc (setPlaceholderString:) set }
	@objc @available(OSX 10.8, *) var preferredTextFieldWidth: CGFloat { get set }
	@objc var titleAlignment: NSTextAlignment { @objc get @objc (setTitleAlignment:) set }
	@objc var titleBaseWritingDirection: NSWritingDirection { @objc get @objc (setTitleBaseWritingDirection:) set }
	@objc var titleFont: NSFont { @objc get @objc (setTitleFont:) set }
	@objc var titleWidth: CGFloat { get set }

	// Constructors
}

extension NSFormCell: NSFormCellExports {
}
