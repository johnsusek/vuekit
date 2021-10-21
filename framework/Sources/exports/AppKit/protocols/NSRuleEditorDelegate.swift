import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSRuleEditorDelegateExports: JSExport, NSObjectExports {
  @objc (ruleEditor:numberOfChildrenForCriterion:withRowType:) func ruleEditor(_: NSRuleEditor, numberOfChildrenForCriterion: Any?, with: NSRuleEditor.RowType) -> Int
  @objc (ruleEditor:child:forCriterion:withRowType:) func ruleEditor(_: NSRuleEditor, child: Int, forCriterion: Any?, with: NSRuleEditor.RowType) -> Any
  @objc func ruleEditor(_: NSRuleEditor, displayValueForCriterion: Any, inRow: Int) -> Any
  @objc func ruleEditor(_: NSRuleEditor, predicatePartsForCriterion: Any, withDisplayValue: Any, inRow: Int) -> [String: Any]?
  @objc func ruleEditorRowsDidChange(_: Notification)
}

