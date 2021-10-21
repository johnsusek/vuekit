import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSUserInterfaceItemSearchingExports: JSExport, NSObjectExports {
  @objc (localizedTitlesForItem:) func localizedTitles(forItem: Any) -> [String]
  @objc (performActionForItem:) func performAction(forItem: Any)
  // jsvalue - @objc (searchForItemsWithSearchString:resultLimit:matchedItemHandler:) func searchForItems(withSearch: String, resultLimit: Int, matchedItemHandler: JSValue)
  @objc (showAllHelpTopicsForSearchString:) func showAllHelpTopics(forSearch: String)
}

