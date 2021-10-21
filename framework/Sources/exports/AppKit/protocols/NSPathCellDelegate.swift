import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSPathCellDelegateExports: JSExport, NSObjectExports {
  @objc (pathCell:willDisplayOpenPanel:) func pathCell(_: NSPathCell, willDisplay: NSOpenPanel)
  @objc (pathCell:willPopUpMenu:) func pathCell(_: NSPathCell, willPopUp: NSMenu)
}

