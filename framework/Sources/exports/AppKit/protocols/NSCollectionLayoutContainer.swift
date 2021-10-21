import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCollectionLayoutContainerExports: JSExport, NSObjectExports {
  var contentInsets: NSDirectionalEdgeInsets { @objc get }
  var contentSize: NSSize { @objc get }
  var effectiveContentInsets: NSDirectionalEdgeInsets { @objc get }
  var effectiveContentSize: NSSize { @objc get }
}

