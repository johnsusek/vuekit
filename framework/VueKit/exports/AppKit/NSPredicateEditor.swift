import AppKit
import JavaScriptCore

@objc protocol NSPredicateEditorExports: JSExport {
	@objc var rowTemplates: [NSPredicateEditorRowTemplate] { @objc get @objc (setRowTemplates:) set }
	@objc static func create() -> PredicateEditor
}

class PredicateEditor: NSPredicateEditor, NSPredicateEditorExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc override class func create() -> PredicateEditor {
		return PredicateEditor()
	}
}
