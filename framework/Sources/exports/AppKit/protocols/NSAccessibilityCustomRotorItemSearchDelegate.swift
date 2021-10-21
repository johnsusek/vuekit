import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityCustomRotorItemSearchDelegateExports: JSExport, NSObjectExports {
  @objc (rotor:resultForSearchParameters:) func rotor(_: NSAccessibilityCustomRotor, resultFor: NSAccessibilityCustomRotor.SearchParameters) -> NSAccessibilityCustomRotor.ItemResult?
}

