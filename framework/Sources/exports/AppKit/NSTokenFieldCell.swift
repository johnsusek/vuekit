import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTokenFieldCellExports: JSExport, NSTextFieldCellExports {
	// Static Methods

	// Own Static Properties
	@objc static var defaultCompletionDelay: TimeInterval { @objc get }
	@objc static var defaultTokenizingCharacterSet: CharacterSet { @objc get }

	// Own Instance Properties
	@objc var completionDelay: TimeInterval { @objc get @objc (setCompletionDelay:) set }
	@objc var delegate: NSTokenFieldCellDelegate? { @objc get @objc (setDelegate:) set }
	@objc var tokenStyle: NSTokenField.TokenStyle { @objc get @objc (setTokenStyle:) set }
	@objc var tokenizingCharacterSet: CharacterSet! { @objc get @objc (setTokenizingCharacterSet:) set }

	// Constructors
	@objc static func create() -> NSTokenFieldCell
}

extension NSTokenFieldCell: NSTokenFieldCellExports {
	@objc override class func create() -> NSTokenFieldCell {
		return NSTokenFieldCell()
	}

}
