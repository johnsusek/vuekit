import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTextInputTraitsExports: JSExport {
  var autocorrectionType: NSTextInputTraitType { @objc get @objc (setAutocorrectionType:) set }
  var dataDetectionType: NSTextInputTraitType { @objc get @objc (setDataDetectionType:) set }
  var grammarCheckingType: NSTextInputTraitType { @objc get @objc (setGrammarCheckingType:) set }
  var linkDetectionType: NSTextInputTraitType { @objc get @objc (setLinkDetectionType:) set }
  var smartDashesType: NSTextInputTraitType { @objc get @objc (setSmartDashesType:) set }
  var smartInsertDeleteType: NSTextInputTraitType { @objc get @objc (setSmartInsertDeleteType:) set }
  var smartQuotesType: NSTextInputTraitType { @objc get @objc (setSmartQuotesType:) set }
  var spellCheckingType: NSTextInputTraitType { @objc get @objc (setSpellCheckingType:) set }
  var textCompletionType: NSTextInputTraitType { @objc get @objc (setTextCompletionType:) set }
  var textReplacementType: NSTextInputTraitType { @objc get @objc (setTextReplacementType:) set }
}

