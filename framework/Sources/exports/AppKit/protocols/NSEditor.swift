import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSEditorExports: JSExport, NSObjectExports {
  @objc func commitEditing() -> Bool
  @objc (commitEditingWithDelegate:didCommitSelector:contextInfo:) func commitEditing(withDelegate: Any?, didCommit: Selector?, contextInfo: UnsafeMutableRawPointer?)
  @objc @available(OSX 10.7, *) func commitEditingAndReturnError() -> Bool
  @objc func discardEditing()
}

