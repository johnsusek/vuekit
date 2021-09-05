import AppKit
import JavaScriptCore

@objc protocol NSPathControlExports: JSExport {
	@objc var url: URL? { @objc (URL) get @objc (setURL:) set }
	@objc @available(OSX 10.10, *) var allowedTypes: [String]? { @objc get @objc (setAllowedTypes:) set }
	@objc var backgroundColor: NSColor? { @objc get @objc (setBackgroundColor:) set }
	@objc @available(OSX 10.10, *) var clickedPathItem: NSPathControlItem? { @objc get }
	@objc var delegate: NSPathControlDelegate? { @objc get @objc (setDelegate:) set }
	@objc var doubleAction: Selector? { @objc get @objc (setDoubleAction:) set }
	@objc @available(OSX 10.10, *) var isEditable: Bool { @objc get @objc (setEditable:) set }
	@objc @available(OSX 10.10, *) var pathItems: [NSPathControlItem] { @objc get @objc (setPathItems:) set }
	@objc var pathStyle: NSPathControl.Style { @objc get @objc (setPathStyle:) set }
	@objc @available(OSX 10.10, *) var placeholderAttributedString: NSAttributedString? { @objc get @objc (setPlaceholderAttributedString:) set }
	@objc @available(OSX 10.10, *) var placeholderString: String? { @objc get @objc (setPlaceholderString:) set }
	@objc func setDraggingSourceOperationMask(_: NSDragOperation, forLocal: Bool)
	@objc static func create() -> PathControl
}

class PathControl: NSPathControl, NSPathControlExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> PathControl {
		return PathControl()
	}
}
