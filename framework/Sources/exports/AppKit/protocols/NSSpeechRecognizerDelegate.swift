import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSpeechRecognizerDelegateExports: JSExport, NSObjectExports {
  @objc func speechRecognizer(_: NSSpeechRecognizer, didRecognizeCommand: String)
}

