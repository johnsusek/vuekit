import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSDockTilePlugInExports: JSExport, NSObjectExports {
  @objc func dockMenu() -> NSMenu?
  @objc func setDockTile(_: NSDockTile?)
}

