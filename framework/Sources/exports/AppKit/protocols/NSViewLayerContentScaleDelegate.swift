import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSViewLayerContentScaleDelegateExports: JSExport, NSObjectExports {
  @objc (layer:shouldInheritContentsScale:fromWindow:) @available(OSX 10.7, *) func layer(_: CALayer, shouldInheritContentsScale: Float, from: NSWindow) -> Bool
}

