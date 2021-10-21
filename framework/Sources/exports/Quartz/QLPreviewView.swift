import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol QLPreviewViewExports: JSExport, NSViewExports {
	// Static Methods

	// Instance Methods
	@objc func close()
	@objc func refreshPreviewItem()

	// Own Instance Properties
	@objc var autostarts: Bool { @objc get @objc (setAutostarts:) set }
	@objc var displayState: Any { @objc get @objc (setDisplayState:) set }
	@objc var previewItem: QLPreviewItem { @objc get @objc (setPreviewItem:) set }
	@objc var shouldCloseWithWindow: Bool { @objc get @objc (setShouldCloseWithWindow:) set }
}

@objc protocol PreviewViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> PreviewView
	@objc @available(OSX 10.7, *) static func create(frame: NSRect, style: QLPreviewViewStyle) -> PreviewView
}

class PreviewView: QLPreviewView, PreviewViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> PreviewView {
		return PreviewView()
	}

	@objc @available(OSX 10.7, *) class func create(frame: NSRect, style: QLPreviewViewStyle) -> PreviewView {
		return PreviewView(frame: frame, style: style)
	}

}

extension QLPreviewView: QLPreviewViewExports {}
