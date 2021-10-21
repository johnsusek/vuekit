import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSColorPickingDefaultExports: JSExport {
  var provideNewButtonImage: NSImage { @objc get }
  var buttonToolTip: String { @objc get }
  var minContentSize: NSSize { @objc get }
  @objc func alphaControlAddedOrRemoved(_: Any?)
  @objc func attachColorList(_: NSColorList)
  @objc func detachColorList(_: NSColorList)
  @objc func create(pickerMask: Int, colorPanel: NSColorPanel) -> NSColorPickingDefault?
  @objc func insertNewButtonImage(_: NSImage, in: NSButtonCell)
  @objc func setMode(_: NSColorPanel.Mode)
  @objc func viewSizeChanged(_: Any?)
}

