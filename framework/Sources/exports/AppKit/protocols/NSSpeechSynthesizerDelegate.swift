import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSpeechSynthesizerDelegateExports: JSExport, NSObjectExports {
  @objc (speechSynthesizer:willSpeakWord:ofString:) func speechSynthesizer(_: NSSpeechSynthesizer, willSpeakWord: NSRange, of: String)
  @objc (speechSynthesizer:didEncounterErrorAtIndex:ofString:message:) @available(OSX 10.5, *) func speechSynthesizer(_: NSSpeechSynthesizer, didEncounterErrorAt: Int, of: String, message: String)
  @objc @available(OSX 10.5, *) func speechSynthesizer(_: NSSpeechSynthesizer, didEncounterSyncMessage: String)
  @objc func speechSynthesizer(_: NSSpeechSynthesizer, didFinishSpeaking: Bool)
  @objc func speechSynthesizer(_: NSSpeechSynthesizer, willSpeakPhoneme: UInt16)
}

