import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSSearchFieldDelegateExports: JSExport, NSTextFieldDelegateExports {
  @objc @available(OSX 10.11, *) func searchFieldDidEndSearching(_: NSSearchField)
  @objc @available(OSX 10.11, *) func searchFieldDidStartSearching(_: NSSearchField)
}

