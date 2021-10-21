import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCloudSharingValidationExports: JSExport, NSObjectExports {
  @objc (cloudShareForUserInterfaceItem:) func cloudShare(`for`: NSValidatedUserInterfaceItem) -> CKShare?
}

