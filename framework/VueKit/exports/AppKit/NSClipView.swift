import AppKit
import JavaScriptCore

@objc protocol NSClipViewExports: JSExport {
	@objc @available(OSX 10.10, *) var automaticallyAdjustsContentInsets: Bool { @objc get @objc (setAutomaticallyAdjustsContentInsets:) set }
	@objc var backgroundColor: NSColor { @objc get @objc (setBackgroundColor:) set }
	@objc @available(OSX 10.10, *) var contentInsets: NSEdgeInsets { @objc get @objc (setContentInsets:) set }
	@objc var documentCursor: NSCursor? { @objc get @objc (setDocumentCursor:) set }
	@objc var documentRect: NSRect { @objc get }
	@objc var documentView: NSView? { @objc get @objc (setDocumentView:) set }
	@objc var documentVisibleRect: NSRect { @objc get }
	@objc var drawsBackground: Bool { @objc get @objc (setDrawsBackground:) set }
	@objc @available(OSX 10.9, *) func constrainBoundsRect(_: NSRect) -> NSRect
	@objc (scrollToPoint:) func scroll(to: NSPoint)
	@objc func viewBoundsChanged(_: Notification)
	@objc func viewFrameChanged(_: Notification)
	@objc static func create() -> ClipView
}

class ClipView: NSClipView, NSClipViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> ClipView {
		return ClipView()
	}
}
