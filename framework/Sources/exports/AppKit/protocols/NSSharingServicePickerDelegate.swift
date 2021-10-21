import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSharingServicePickerDelegateExports: JSExport, NSObjectExports {
  @objc (sharingServicePicker:delegateForSharingService:) func sharingServicePicker(_: NSSharingServicePicker, delegateFor: NSSharingService) -> NSSharingServiceDelegate?
  @objc (sharingServicePicker:didChooseSharingService:) func sharingServicePicker(_: NSSharingServicePicker, didChoose: NSSharingService?)
  @objc func sharingServicePicker(_: NSSharingServicePicker, sharingServicesForItems: [Any], proposedSharingServices: [NSSharingService]) -> [NSSharingService]
}

