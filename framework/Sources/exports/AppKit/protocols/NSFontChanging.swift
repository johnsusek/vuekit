import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSFontChangingExports: JSExport, NSObjectExports {
  @objc func changeFont(_: NSFontManager?)
  @objc func validModesForFontPanel(_: NSFontPanel) -> NSFontPanel.ModeMask
}

