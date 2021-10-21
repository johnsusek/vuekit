import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCloudSharingServiceDelegateExports: JSExport, NSSharingServiceDelegateExports {
  @objc (optionsForSharingService:shareProvider:) func options(`for`: NSSharingService, share: NSItemProvider) -> NSSharingService.CloudKitOptions
  @objc (sharingService:didSaveShare:) func sharingService(_: NSSharingService, didSave: CKShare)
  @objc func sharingService(_: NSSharingService, didCompleteForItems: [Any], error: Error?)
  @objc func sharingService(_: NSSharingService, didStopSharing: CKShare)
}

