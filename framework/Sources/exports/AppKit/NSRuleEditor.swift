import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSRuleEditorExports: JSExport, NSControlExports {
	// Static Methods

	// Instance Methods
	@objc func addRow(_: Any?)
	@objc (criteriaForRow:) func criteria(forRow: Int) -> [Any]
	@objc (displayValuesForRow:) func displayValues(forRow: Int) -> [Any]
	@objc (insertRowAtIndex:withType:asSubrowOfRow:animate:) func insertRow(at: Int, with: NSRuleEditor.RowType, asSubrowOfRow: Int, animate: Bool)
	@objc (parentRowForRow:) func parentRow(forRow: Int) -> Int
	@objc (predicateForRow:) func predicate(forRow: Int) -> NSPredicate?
	@objc func reloadCriteria()
	@objc func reloadPredicate()
	@objc (removeRowAtIndex:) func removeRow(at: Int)
	@objc (removeRowsAtIndexes:includeSubrows:) func removeRows(at: IndexSet, includeSubrows: Bool)
	@objc (rowForDisplayValue:) func row(forDisplayValue: Any) -> Int
	@objc (rowTypeForRow:) func rowType(forRow: Int) -> NSRuleEditor.RowType
	@objc func selectRowIndexes(_: IndexSet, byExtendingSelection: Bool)
	@objc (setCriteria:andDisplayValues:forRowAtIndex:) func setCriteria(_: [Any], andDisplayValues: [Any], forRowAt: Int)
	@objc (subrowIndexesForRow:) func subrowIndexes(forRow: Int) -> IndexSet

	// Own Instance Properties
	@objc var canRemoveAllRows: Bool { @objc get @objc (setCanRemoveAllRows:) set }
	@objc var criteriaKeyPath: String { @objc get @objc (setCriteriaKeyPath:) set }
	@objc var delegate: NSRuleEditorDelegate? { @objc get @objc (setDelegate:) set }
	@objc var displayValuesKeyPath: String { @objc get @objc (setDisplayValuesKeyPath:) set }
	@objc var isEditable: Bool { @objc get @objc (setEditable:) set }
	@objc var formattingDictionary: [String: String]? { @objc get @objc (setFormattingDictionary:) set }
	@objc var formattingStringsFilename: String? { @objc get @objc (setFormattingStringsFilename:) set }
	@objc var nestingMode: NSRuleEditor.NestingMode { @objc get @objc (setNestingMode:) set }
	@objc var numberOfRows: Int { @objc get }
	@objc var predicate: NSPredicate? { @objc get }
	@objc var rowClass: AnyClass { @objc get @objc (setRowClass:) set }
	@objc var rowHeight: CGFloat { get set }
	@objc var rowTypeKeyPath: String { @objc get @objc (setRowTypeKeyPath:) set }
	@objc var selectedRowIndexes: IndexSet { @objc get }
	@objc var subrowsKeyPath: String { @objc get @objc (setSubrowsKeyPath:) set }
}

@objc protocol RuleEditorExports: JSExport, NSControlExports {
	// Constructors
	@objc static func create() -> RuleEditor
}

class RuleEditor: NSRuleEditor, RuleEditorExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> RuleEditor {
		return RuleEditor()
	}

}

extension NSRuleEditor: NSRuleEditorExports {}
