import AppKit
import JavaScriptCore

@objc protocol NSSharingServicePickerToolbarItemExports: JSExport {
	@objc var delegate: NSSharingServicePickerToolbarItemDelegate? { @objc get @objc (setDelegate:) set }
}

extension NSSharingServicePickerToolbarItem: NSSharingServicePickerToolbarItemExports {
	@objc override class func create() -> NSSharingServicePickerToolbarItem {
		return NSSharingServicePickerToolbarItem()
	}
}
