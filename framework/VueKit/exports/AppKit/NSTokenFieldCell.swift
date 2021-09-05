import AppKit
import JavaScriptCore

@objc protocol NSTokenFieldCellExports: JSExport {
	@objc var completionDelay: TimeInterval { @objc get @objc (setCompletionDelay:) set }
	@objc var delegate: NSTokenFieldCellDelegate? { @objc get @objc (setDelegate:) set }
	@objc var tokenStyle: NSTokenField.TokenStyle { @objc get @objc (setTokenStyle:) set }
	@objc var tokenizingCharacterSet: CharacterSet! { @objc get @objc (setTokenizingCharacterSet:) set }
	@objc static var defaultCompletionDelay: TimeInterval { @objc get }
	@objc static var defaultTokenizingCharacterSet: CharacterSet { @objc get }
}

extension NSTokenFieldCell: NSTokenFieldCellExports {
	@objc override class func create() -> NSTokenFieldCell {
		return NSTokenFieldCell()
	}
}
