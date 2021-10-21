import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPredicateEditorExports: JSExport, NSRuleEditorExports {
	// Static Methods

	// Own Instance Properties
	@objc var rowTemplates: [NSPredicateEditorRowTemplate] { @objc get @objc (setRowTemplates:) set }
}

@objc protocol PredicateEditorExports: JSExport, NSRuleEditorExports {
	// Constructors
	@objc static func create() -> PredicateEditor
}

class PredicateEditor: NSPredicateEditor, PredicateEditorExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> PredicateEditor {
		return PredicateEditor()
	}

}

extension NSPredicateEditor: NSPredicateEditorExports {}
