import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSharingServicePickerTouchBarItemDelegateExports: JSExport, NSSharingServicePickerDelegateExports {
  @objc (itemsForSharingServicePickerTouchBarItem:) func items(`for`: NSSharingServicePickerTouchBarItem) -> [Any]
}

