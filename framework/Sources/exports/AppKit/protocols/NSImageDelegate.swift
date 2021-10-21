import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSImageDelegateExports: JSExport, NSObjectExports {
  @objc (image:didLoadRepresentation:withStatus:) func image(_: NSImage, didLoadRepresentation: NSImageRep, with: NSImage.LoadStatus)
  @objc func image(_: NSImage, didLoadPartOfRepresentation: NSImageRep, withValidRows: Int)
  @objc func image(_: NSImage, didLoadRepresentationHeader: NSImageRep)
  @objc func image(_: NSImage, willLoadRepresentation: NSImageRep)
  @objc (imageDidNotDraw:inRect:) func imageDidNotDraw(_: NSImage, in: NSRect) -> NSImage?
}

