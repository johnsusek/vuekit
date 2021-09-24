import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSpellCheckerExports: JSExport {
	// Static Methods
	@objc static func uniqueSpellDocumentTag() -> Int

	// Own Static Properties
	@objc @available(OSX 10.12, *) static var isAutomaticCapitalizationEnabled: Bool { @objc get }
	@objc @available(OSX 10.9, *) static var isAutomaticDashSubstitutionEnabled: Bool { @objc get }
	@objc @available(OSX 10.12, *) static var isAutomaticPeriodSubstitutionEnabled: Bool { @objc get }
	@objc @available(OSX 10.9, *) static var isAutomaticQuoteSubstitutionEnabled: Bool { @objc get }
	@objc @available(OSX 10.7, *) static var isAutomaticSpellingCorrectionEnabled: Bool { @objc get }
	@objc @available(OSX 10.12.2, *) static var isAutomaticTextCompletionEnabled: Bool { @objc get }
	@objc @available(OSX 10.7, *) static var isAutomaticTextReplacementEnabled: Bool { @objc get }
	@objc (sharedSpellChecker) static var shared: NSSpellChecker { @objc (sharedSpellChecker) get }
	@objc static var sharedSpellCheckerExists: Bool { @objc get }

	// Instance Methods
	@objc (checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details:) @available(OSX 10.5, *) func checkGrammar(of stringToCheck: String, startingAt startingOffset: Int, language: String?, wrap wrapFlag: Bool, inSpellDocumentWithTag tag: Int, details: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> NSRange
	@objc (checkSpellingOfString:startingAt:) func checkSpelling(of: String, startingAt: Int) -> NSRange
	@objc (checkSpellingOfString:startingAt:language:wrap:inSpellDocumentWithTag:wordCount:) func checkSpelling(of: String, startingAt: Int, language: String?, wrap: Bool, inSpellDocumentWithTag: Int, wordCount: UnsafeMutablePointer<Int>?) -> NSRange
	@objc (checkString:range:types:options:inSpellDocumentWithTag:orthography:wordCount:) @available(OSX 10.6, *) func check(_ stringToCheck: String, range: NSRange, types checkingTypes: NSTextCheckingTypes, options: [NSSpellChecker.OptionKey : Any]?, inSpellDocumentWithTag tag: Int, orthography: AutoreleasingUnsafeMutablePointer<NSOrthography?>?, wordCount: UnsafeMutablePointer<Int>?) -> [NSTextCheckingResult]
	@objc (closeSpellDocumentWithTag:) func closeSpellDocument(withTag: Int)
	@objc (completionsForPartialWordRange:inString:language:inSpellDocumentWithTag:) func completions(forPartialWordRange: NSRange, in: String, language: String?, inSpellDocumentWithTag: Int) -> [String]?
	@objc (correctionForWordRange:inString:language:inSpellDocumentWithTag:) @available(OSX 10.7, *) func correction(forWordRange: NSRange, in: String, language: String, inSpellDocumentWithTag: Int) -> String?
	@objc (countWordsInString:language:) func countWords(in: String, language: String?) -> Int
	@objc @available(OSX 10.12.2, *) func deletesAutospaceBetweenString(_: String, andString: String, language: String?) -> Bool
	@objc (dismissCorrectionIndicatorForView:) @available(OSX 10.7, *) func dismissCorrectionIndicator(`for`: NSView)
	@objc (guessesForWordRange:inString:language:inSpellDocumentWithTag:) @available(OSX 10.6, *) func guesses(forWordRange: NSRange, in: String, language: String?, inSpellDocumentWithTag: Int) -> [String]?
	@objc @available(OSX 10.5, *) func hasLearnedWord(_: String) -> Bool
	@objc func ignoreWord(_: String, inSpellDocumentWithTag: Int)
	@objc (ignoredWordsInSpellDocumentWithTag:) func ignoredWords(inSpellDocumentWithTag: Int) -> [String]?
	@objc func language() -> String
	@objc (languageForWordRange:inString:orthography:) @available(OSX 10.7, *) func language(forWordRange: NSRange, in: String, orthography: NSOrthography?) -> String?
	@objc func learnWord(_: String)
	@objc (menuForResult:string:options:atLocation:inView:) @available(OSX 10.6, *) func menu(for result: NSTextCheckingResult, string checkedString: String, options: [NSSpellChecker.OptionKey : Any]?, atLocation location: NSPoint, in view: NSView) -> NSMenu?
	@objc (preventsAutocorrectionBeforeString:language:) @available(OSX 10.12, *) func preventsAutocorrection(before: String, language: String?) -> Bool
	@objc (recordResponse:toCorrection:forWord:language:inSpellDocumentWithTag:) @available(OSX 10.7, *) func record(_: NSSpellChecker.CorrectionResponse, toCorrection: String, forWord: String, language: String?, inSpellDocumentWithTag: Int)
	// jsvalue - @objc (requestCandidatesForSelectedRange:inString:types:options:inSpellDocumentWithTag:completionHandler:) @available(OSX 10.12.2, *) func requestCandidates(forSelectedRange: NSRange, in: String, types: UInt64, options: [String: Any]?, inSpellDocumentWithTag: Int, completionHandler: JSValue) -> Int
	// jsvalue - @objc (requestCheckingOfString:range:types:options:inSpellDocumentWithTag:completionHandler:) @available(OSX 10.6, *) func requestChecking(of: String, range: NSRange, types: UInt64, options: [String: Any]?, inSpellDocumentWithTag: Int, completionHandler: JSValue) -> Int
	@objc func setIgnoredWords(_: [String], inSpellDocumentWithTag: Int)
	@objc func setLanguage(_: String) -> Bool
	@objc func setWordFieldStringValue(_: String)
	// jsvalue - @objc (showCorrectionIndicatorOfType:primaryString:alternativeStrings:forStringInRect:view:completionHandler:) @available(OSX 10.7, *) func showCorrectionIndicator(of: NSSpellChecker.CorrectionIndicatorType, primaryString: String, alternativeStrings: [String], forStringIn: NSRect, view: NSView, completionHandler: JSValue)
	@objc @available(OSX 10.5, *) func unlearnWord(_: String)
	@objc @available(OSX 10.6, *) func updatePanels()
	@objc (updateSpellingPanelWithGrammarString:detail:) @available(OSX 10.5, *) func updateSpellingPanel(withGrammarString: String, detail: [String: Any])
	@objc (updateSpellingPanelWithMisspelledWord:) func updateSpellingPanel(withMisspelledWord: String)
	@objc (userQuotesArrayForLanguage:) @available(OSX 10.6, *) func userQuotesArray(forLanguage: String) -> [String]

	// Own Instance Properties
	@objc var accessoryView: NSView? { @objc get @objc (setAccessoryView:) set }
	@objc @available(OSX 10.6, *) var automaticallyIdentifiesLanguages: Bool { @objc get @objc (setAutomaticallyIdentifiesLanguages:) set }
	@objc @available(OSX 10.5, *) var availableLanguages: [String] { @objc get }
	@objc var spellingPanel: NSPanel { @objc get }
	@objc @available(OSX 10.6, *) var substitutionsPanel: NSPanel { @objc get }
	@objc @available(OSX 10.6, *) var substitutionsPanelAccessoryViewController: NSViewController? { @objc get @objc (setSubstitutionsPanelAccessoryViewController:) set }
	@objc @available(OSX 10.6, *) var userPreferredLanguages: [String] { @objc get }
	@objc @available(OSX 10.6, *) var userReplacementsDictionary: [String: String] { @objc get }

	// Constructors
}

extension NSSpellChecker: NSSpellCheckerExports {
}
