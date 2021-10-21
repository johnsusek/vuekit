import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSPrintPanelAccessorizingExports: JSExport {
  @objc func keyPathsForValuesAffectingPreview() -> Set<String>
  @objc func localizedSummaryItems() -> [[String: String]]
}

