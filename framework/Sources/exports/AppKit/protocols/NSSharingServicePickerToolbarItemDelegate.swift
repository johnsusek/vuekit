import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSharingServicePickerToolbarItemDelegateExports: JSExport, NSSharingServicePickerDelegateExports {
  @objc (itemsForSharingServicePickerToolbarItem:) func items(`for`: NSSharingServicePickerToolbarItem) -> [Any]
}

