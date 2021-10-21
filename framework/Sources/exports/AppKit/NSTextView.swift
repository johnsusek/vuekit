import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextViewExports: JSExport, NSTextExports {
	// , NSAccessibilityNavigableStaticTextExports, NSColorChangingExports, NSDraggingSourceExports, NSMenuItemValidationExports, NSStandardKeyBindingRespondingExports, NSTextInputExports, NSTextInputClientExports, NSTextLayoutOrientationProviderExports, NSUserInterfaceValidationsExports, NSCandidateListTouchBarItemDelegateExports, NSTouchBarDelegateExports
	// Static Methods
	@objc static func registerForServices()
	@objc @available(OSX 10.14, *) static func scrollableDocumentContentTextView() -> NSScrollView
	@objc @available(OSX 10.14, *) static func scrollablePlainDocumentContentTextView() -> NSScrollView
	@objc @available(OSX 10.14, *) static func scrollableTextView() -> NSScrollView

	// Own Static Properties
	@objc @available(OSX 10.12, *) static var stronglyReferencesTextStorage: Bool { @objc get }

	// Instance Methods
	@objc func alignJustified(_: Any?)
	@objc func breakUndoCoalescing()
	@objc func changeAttributes(_: Any?)
	@objc func changeDocumentBackgroundColor(_: Any?)
	@objc @available(OSX 10.7, *) func changeLayoutOrientation(_: Any?)
	@objc (characterIndexForInsertionAtPoint:) @available(OSX 10.5, *) func characterIndexForInsertion(at: NSPoint) -> Int
	@objc @available(OSX 10.6, *) func checkTextInDocument(_: Any?)
	@objc (checkTextInRange:types:options:) @available(OSX 10.6, *) func checkText(in range: NSRange, types checkingTypes: NSTextCheckingTypes, options: [NSSpellChecker.OptionKey : Any])
	@objc @available(OSX 10.6, *) func checkTextInSelection(_: Any?)
	@objc func cleanUpAfterDragOperation()
	@objc (clickedOnLink:atIndex:) func clicked(onLink: Any, at: Int)
	@objc (completionsForPartialWordRange:indexOfSelectedItem:) func completions(forPartialWordRange: NSRange, indexOfSelectedItem: UnsafeMutablePointer<Int>) -> [String]?
	@objc func didChangeText()
	@objc (dragImageForSelectionWithEvent:origin:) func dragImageForSelection(with: NSEvent, origin: UnsafeMutablePointer<NSPoint>?) -> NSImage?
	@objc (dragOperationForDraggingInfo:type:) func dragOperation(`for`: NSDraggingInfo, type: NSPasteboard.PasteboardType) -> NSDragOperation
	@objc (dragSelectionWithEvent:offset:slideBack:) func dragSelection(with: NSEvent, offset: NSSize, slideBack: Bool) -> Bool
	@objc (drawInsertionPointInRect:color:turnedOn:) func drawInsertionPoint(in: NSRect, color: NSColor, turnedOn: Bool)
	@objc (drawViewBackgroundInRect:) func drawBackground(in: NSRect)
	// 	@objc (handleTextCheckingResults:forRange:types:options:orthography:wordCount:) @available(OSX 10.6, *) func handleTextCheckingResults(_: [NSTextCheckingResult], forRange: NSRange, types: UInt64, options: [String: Any], orthography: NSOrthography, wordCount: Int)
	@objc func insertCompletion(_: String, forPartialWordRange: NSRange, movement: Int, isFinal: Bool)
	@objc func invalidateTextContainerOrigin()
	@objc func loosenKerning(_: Any?)
	@objc func lowerBaseline(_: Any?)
	@objc func orderFrontLinkPanel(_: Any?)
	@objc func orderFrontListPanel(_: Any?)
	@objc @available(OSX 10.8, *) func orderFrontSharingServicePicker(_: Any?)
	@objc func orderFrontSpacingPanel(_: Any?)
	@objc @available(OSX 10.6, *) func orderFrontSubstitutionsPanel(_: Any?)
	@objc func orderFrontTablePanel(_: Any?)
	@objc func outline(_: Any?)
	@objc func pasteAsPlainText(_: Any?)
	@objc func pasteAsRichText(_: Any?)
	@objc func performFindPanelAction(_: Any?)
	@objc (performValidatedReplacementInRange:withAttributedString:) @available(OSX 10.14, *) func performValidatedReplacement(in: NSRange, with: NSAttributedString) -> Bool
	@objc (preferredPasteboardTypeFromArray:restrictedToTypesFromArray:) func preferredPasteboardType(from availableTypes: [NSPasteboard.PasteboardType], restrictedToTypesFrom allowedTypes: [NSPasteboard.PasteboardType]?) -> NSPasteboard.PasteboardType?
	// @objc @available(OSX 10.7, *) func quickLookPreviewableItemsInRanges(_: [NSValue]) -> [QLPreviewItem]
	@objc func raiseBaseline(_: Any?)
	@objc (readSelectionFromPasteboard:) func readSelection(from: NSPasteboard) -> Bool
	@objc (readSelectionFromPasteboard:type:) func readSelection(from: NSPasteboard, type: NSPasteboard.PasteboardType) -> Bool
	@objc func replaceTextContainer(_: NSTextContainer)
	@objc (selectionRangeForProposedRange:granularity:) func selectionRange(forProposedRange: NSRange, granularity: NSSelectionGranularity) -> NSRange
	@objc func setAlignment(_: NSTextAlignment, range: NSRange)
	@objc func setBaseWritingDirection(_: NSWritingDirection, range: NSRange)
	@objc func setConstrainedFrameSize(_: NSSize)
	@objc @available(OSX 10.7, *) func setLayoutOrientation(_: NSLayoutManager.TextLayoutOrientation)
	@objc (setNeedsDisplayInRect:avoidAdditionalLayout:) func setNeedsDisplay(_: NSRect, avoidAdditionalLayout: Bool)
	@objc func setSelectedRange(_: NSRange)
	@objc func setSelectedRange(_: NSRange, affinity: NSSelectionAffinity, stillSelecting: Bool)
	@objc func setSelectedRanges(_: [NSValue], affinity: NSSelectionAffinity, stillSelecting: Bool)
	@objc @available(OSX 10.5, *) func setSpellingState(_: Int, range: NSRange)
	@objc (shouldChangeTextInRange:replacementString:) func shouldChangeText(in: NSRange, replacementString: String?) -> Bool
	@objc (shouldChangeTextInRanges:replacementStrings:) func shouldChangeText(inRanges: [NSValue], replacementStrings: [String]?) -> Bool
	@objc (showFindIndicatorForRange:) @available(OSX 10.5, *) func showFindIndicator(`for`: NSRange)
	@objc (smartDeleteRangeForProposedRange:) func smartDeleteRange(forProposedRange: NSRange) -> NSRange
	@objc (smartInsertAfterStringForString:replacingRange:) func smartInsert(afterStringFor: String, replacing: NSRange) -> String?
	@objc (smartInsertBeforeStringForString:replacingRange:) func smartInsert(beforeStringFor: String, replacing: NSRange) -> String?
	@objc (smartInsertForString:replacingRange:beforeString:afterString:) func smartInsert(for pasteString: String, replacing charRangeToReplace: NSRange, before beforeString: AutoreleasingUnsafeMutablePointer<NSString?>?, after afterString: AutoreleasingUnsafeMutablePointer<NSString?>?)
	@objc func startSpeaking(_: Any?)
	@objc func stopSpeaking(_: Any?)
	@objc func tightenKerning(_: Any?)
	@objc @available(OSX 10.6, *) func toggleAutomaticDashSubstitution(_: Any?)
	@objc @available(OSX 10.6, *) func toggleAutomaticDataDetection(_: Any?)
	@objc @available(OSX 10.5, *) func toggleAutomaticLinkDetection(_: Any?)
	@objc @available(OSX 10.5, *) func toggleAutomaticQuoteSubstitution(_: Any?)
	@objc @available(OSX 10.6, *) func toggleAutomaticSpellingCorrection(_: Any?)
	@objc @available(OSX 10.12.2, *) func toggleAutomaticTextCompletion(_: Any?)
	@objc @available(OSX 10.6, *) func toggleAutomaticTextReplacement(_: Any?)
	@objc func toggleContinuousSpellChecking(_: Any?)
	@objc @available(OSX 10.5, *) func toggleGrammarChecking(_: Any?)
	@objc @available(OSX 10.7, *) func toggleQuickLookPreviewPanel(_: Any?)
	@objc func toggleSmartInsertDelete(_: Any?)
	@objc func turnOffKerning(_: Any?)
	@objc func turnOffLigatures(_: Any?)
	@objc @available(OSX 10.12.2, *) func updateCandidates()
	@objc func updateDragTypeRegistration()
	@objc func updateFontPanel()
	@objc func updateInsertionPointStateAndRestartTimer(_: Bool)
	@objc @available(OSX 10.7, *) func updateQuickLookPreviewPanel()
	@objc func updateRuler()
	@objc @available(OSX 10.12.2, *) func updateTextTouchBarItems()
	@objc @available(OSX 10.12.2, *) func updateTouchBarItemIdentifiers()
	@objc func useAllLigatures(_: Any?)
	@objc func useStandardKerning(_: Any?)
	@objc func useStandardLigatures(_: Any?)
	@objc (writeSelectionToPasteboard:type:) func writeSelection(to: NSPasteboard, type: NSPasteboard.PasteboardType) -> Bool
	@objc (writeSelectionToPasteboard:types:) func writeSelection(to pboard: NSPasteboard, types: [NSPasteboard.PasteboardType]) -> Bool

	// Own Instance Properties
	@objc var acceptableDragTypes: [NSPasteboard.PasteboardType] { get }
	@objc var acceptsGlyphInfo: Bool { @objc get @objc (setAcceptsGlyphInfo:) set }
	@objc @available(OSX 10.5, *) var allowedInputSourceLocales: [String]? { @objc get @objc (setAllowedInputSourceLocales:) set }
	@objc @available(OSX 10.12.2, *) var allowsCharacterPickerTouchBarItem: Bool { @objc get @objc (setAllowsCharacterPickerTouchBarItem:) set }
	@objc var allowsDocumentBackgroundColorChange: Bool { @objc get @objc (setAllowsDocumentBackgroundColorChange:) set }
	@objc @available(OSX 10.5, *) var allowsImageEditing: Bool { @objc get @objc (setAllowsImageEditing:) set }
	@objc var allowsUndo: Bool { @objc get @objc (setAllowsUndo:) set }
	@objc @available(OSX 10.6, *) var isAutomaticDashSubstitutionEnabled: Bool { @objc get @objc (setAutomaticDashSubstitutionEnabled:) set }
	@objc @available(OSX 10.6, *) var isAutomaticDataDetectionEnabled: Bool { @objc get @objc (setAutomaticDataDetectionEnabled:) set }
	@objc @available(OSX 10.5, *) var isAutomaticLinkDetectionEnabled: Bool { @objc get @objc (setAutomaticLinkDetectionEnabled:) set }
	@objc @available(OSX 10.5, *) var isAutomaticQuoteSubstitutionEnabled: Bool { @objc get @objc (setAutomaticQuoteSubstitutionEnabled:) set }
	@objc @available(OSX 10.6, *) var isAutomaticSpellingCorrectionEnabled: Bool { @objc get @objc (setAutomaticSpellingCorrectionEnabled:) set }
	@objc @available(OSX 10.12.2, *) var isAutomaticTextCompletionEnabled: Bool { @objc get @objc (setAutomaticTextCompletionEnabled:) set }
	@objc @available(OSX 10.6, *) var isAutomaticTextReplacementEnabled: Bool { @objc get @objc (setAutomaticTextReplacementEnabled:) set }
	@objc @available(OSX 10.6, *) var isCoalescingUndo: Bool { @objc get }
	@objc var isContinuousSpellCheckingEnabled: Bool { @objc get @objc (setContinuousSpellCheckingEnabled:) set }
	@objc var defaultParagraphStyle: NSParagraphStyle? { @objc get @objc (setDefaultParagraphStyle:) set }
	@objc var delegate: NSTextViewDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.5, *) var displaysLinkToolTips: Bool { @objc get @objc (setDisplaysLinkToolTips:) set }
	@objc @available(OSX 10.6, *) var enabledTextCheckingTypes: UInt64 { @objc get @objc (setEnabledTextCheckingTypes:) set }
	@objc @available(OSX 10.5, *) var isGrammarCheckingEnabled: Bool { @objc get @objc (setGrammarCheckingEnabled:) set }
	@objc @available(OSX 10.7, *) var isIncrementalSearchingEnabled: Bool { @objc get @objc (setIncrementalSearchingEnabled:) set }
	@objc var insertionPointColor: NSColor { @objc get @objc (setInsertionPointColor:) set }
	@objc var layoutManager: NSLayoutManager? { @objc get }
	@objc var linkTextAttributes: [NSAttributedString.Key : Any]? { get set }
	@objc var markedTextAttributes: [NSAttributedString.Key : Any]? { get set }
	@objc var rangeForUserCharacterAttributeChange: NSRange { @objc get }
	@objc var rangeForUserCompletion: NSRange { @objc get }
	@objc var rangeForUserParagraphAttributeChange: NSRange { @objc get }
	@objc var rangeForUserTextChange: NSRange { @objc get }
	@objc var rangesForUserCharacterAttributeChange: [NSValue]? { @objc get }
	@objc var rangesForUserParagraphAttributeChange: [NSValue]? { @objc get }
	@objc var rangesForUserTextChange: [NSValue]? { @objc get }
	@objc var readablePasteboardTypes: [NSPasteboard.PasteboardType] { get }
	@objc var isRulerVisible: Bool { @objc get @objc (setRulerVisible:) set }
	@objc var selectedRanges: [NSValue] { @objc get @objc (setSelectedRanges:) set }
	@objc var selectedTextAttributes: [NSAttributedString.Key : Any] { get set }
	@objc var selectionAffinity: NSSelectionAffinity { @objc get }
	@objc var selectionGranularity: NSSelectionGranularity { @objc get @objc (setSelectionGranularity:) set }
	@objc var shouldDrawInsertionPoint: Bool { @objc get }
	@objc var smartInsertDeleteEnabled: Bool { @objc get @objc (setSmartInsertDeleteEnabled:) set }
	@objc var spellCheckerDocumentTag: Int { @objc get }
	@objc var textContainer: NSTextContainer? { @objc get @objc (setTextContainer:) set }
	@objc var textContainerInset: NSSize { @objc get @objc (setTextContainerInset:) set }
	@objc var textContainerOrigin: NSPoint { @objc get }
	@objc var textStorage: NSTextStorage? { @objc get }
	@objc var typingAttributes: [NSAttributedString.Key : Any] { get set }
	@objc @available(OSX 10.14, *) var usesAdaptiveColorMappingForDarkAppearance: Bool { @objc get @objc (setUsesAdaptiveColorMappingForDarkAppearance:) set }
	@objc @available(OSX 10.7, *) var usesFindBar: Bool { @objc get @objc (setUsesFindBar:) set }
	@objc var usesFindPanel: Bool { @objc get @objc (setUsesFindPanel:) set }
	@objc @available(OSX 10.7, *) var usesInspectorBar: Bool { @objc get @objc (setUsesInspectorBar:) set }
	@objc @available(OSX 10.10, *) var usesRolloverButtonForSelection: Bool { @objc get @objc (setUsesRolloverButtonForSelection:) set }
	@objc var usesRuler: Bool { @objc get @objc (setUsesRuler:) set }
	@objc var writablePasteboardTypes: [NSPasteboard.PasteboardType] { get }
}

@objc protocol TextViewExports: JSExport {
	@objc static func create() -> TextView
	// 	@objc @available(OSX 10.14, *) static func fieldEditor() -> NSTextView
	@objc static func create(frame: NSRect, textContainer: NSTextContainer?) -> TextView

}

class TextView: NSTextView, TextViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> TextView {
		return TextView()
	}

	@objc class func create(frame: NSRect, textContainer: NSTextContainer?) -> TextView {
		return TextView(frame: frame, textContainer: textContainer)
	}

}

extension NSTextView: NSTextViewExports {}
