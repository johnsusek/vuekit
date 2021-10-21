import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSValidatedUserInterfaceItemExports: JSExport {
  var action: Selector? { @objc get }
  var tag: Int { @objc get }
}

