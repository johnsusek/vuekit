import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextAttachmentCellExports: JSExport, NSObjectExports {
  var attachment: NSTextAttachment? { @objc get @objc (setAttachment:) set }
  @objc func cellBaselineOffset() -> NSPoint
  @objc func cellFrameForTextContainer(_: NSTextContainer, proposedLineFragment: NSRect, glyphPosition: NSPoint, characterIndex: Int) -> NSRect
  @objc func cellSize() -> NSSize
  @objc func drawWithFrame(_: NSRect, inView: NSView?)
  @objc func drawWithFrame(_: NSRect, inView: NSView?, characterIndex: Int)
  @objc func drawWithFrame(_: NSRect, inView: NSView?, characterIndex: Int, layoutManager: NSLayoutManager)
  @objc func highlight(_: Bool, withFrame: NSRect, inView: NSView?)
  @objc func trackMouse(_: NSEvent, inRect: NSRect, ofView: NSView?, atCharacterIndex: Int, untilMouseUp: Bool) -> Bool
  @objc func trackMouse(_: NSEvent, inRect: NSRect, ofView: NSView?, untilMouseUp: Bool) -> Bool
  @objc func wantsToTrackMouse() -> Bool
  @objc func wantsToTrackMouseForEvent(_: NSEvent, inRect: NSRect, ofView: NSView?, atCharacterIndex: Int) -> Bool
}

