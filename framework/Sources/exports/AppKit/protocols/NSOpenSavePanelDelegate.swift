import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSOpenSavePanelDelegateExports: JSExport, NSObjectExports {
  @objc (panel:shouldEnableURL:) @available(OSX 10.6, *) func panel(_: Any, shouldEnable: NSURL) -> Bool
  @objc @available(OSX 10.6, *) func panel(_: Any, didChangeToDirectoryURL: NSURL?)
  @objc func panel(_: Any, userEnteredFilename: String, confirmed: Bool) -> String?
  // throws - @objc @available(OSX 10.6, *) func panel(validateURL: Any, error: NSURL) -> Bool
  @objc func panel(_: Any, willExpand: Bool)
  @objc func panelSelectionDidChange(_: Any?)
}

