import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSharingServiceDelegateExports: JSExport, NSObjectExports {
  @objc (anchoringViewForSharingService:showRelativeToRect:preferredEdge:) func anchoringView(`for`: NSSharingService, showRelativeTo: NSRect, preferredEdge: NSRectEdge) -> NSView?
  @objc func sharingService(_: NSSharingService, didFailToShareItems: [Any], error: Error)
  @objc func sharingService(_: NSSharingService, didShareItems: [Any])
  @objc func sharingService(_: NSSharingService, sourceFrameOnScreenForShareItem: Any) -> NSRect
  @objc func sharingService(_: NSSharingService, sourceWindowForShareItems: [Any], sharingContentScope: NSSharingService.SharingContentScope) -> NSWindow?
  @objc func sharingService(_: NSSharingService, transitionImageForShareItem: Any, contentRect: NSRect) -> NSImage?
  @objc func sharingService(_: NSSharingService, willShareItems: [Any])
}

