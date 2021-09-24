import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTextCheckingControllerExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func changeSpelling(_: Any?)
	@objc func checkSpelling(_: Any?)
	@objc func checkTextInDocument(_: Any?)
	@objc (checkTextInRange:types:options:) func checkText(in range: NSRange, types checkingTypes: NSTextCheckingTypes, options: [NSSpellChecker.OptionKey : Any])
	@objc func checkTextInSelection(_: Any?)
	@objc (considerTextCheckingForRange:) func considerTextChecking(`for`: NSRange)
	@objc func didChangeSelectedRange()
	@objc (didChangeTextInRange:) func didChangeText(in: NSRange)
	@objc func ignoreSpelling(_: Any?)
	@objc (insertedTextInRange:) func insertedText(in: NSRange)
	@objc func invalidate()
	@objc (menuAtIndex:clickedOnSelection:effectiveRange:) func menu(at: Int, clickedOnSelection: Bool, effectiveRange: UnsafeMutablePointer<NSRange>) -> NSMenu?
	@objc func orderFrontSubstitutionsPanel(_: Any?)
	@objc func showGuessPanel(_: Any?)
	@objc func updateCandidates()
	@objc func validAnnotations() -> [NSAttributedString.Key]

	// Own Instance Properties
	@objc var client: NSTextCheckingClient { @objc get }
	@objc var spellCheckerDocumentTag: Int { @objc get @objc (setSpellCheckerDocumentTag:) set }
}

extension NSTextCheckingController: NSTextCheckingControllerExports {}
