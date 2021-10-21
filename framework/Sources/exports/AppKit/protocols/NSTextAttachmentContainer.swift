import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextAttachmentContainerExports: JSExport, NSObjectExports {
  @objc (attachmentBoundsForTextContainer:proposedLineFragment:glyphPosition:characterIndex:) @available(OSX 10.11, *) func attachmentBounds(`for`: NSTextContainer?, proposedLineFragment: NSRect, glyphPosition: NSPoint, characterIndex: Int) -> NSRect
  @objc (imageForBounds:textContainer:characterIndex:) @available(OSX 10.11, *) func image(forBounds: NSRect, textContainer: NSTextContainer?, characterIndex: Int) -> NSImage?
}

