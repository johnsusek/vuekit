import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCollectionLayoutVisibleItemExports: JSExport, NSObjectExports {
  var alpha: Float { @objc get @objc (setAlpha:) set }
  var bounds: NSRect { @objc get }
  var center: NSPoint { @objc get @objc (setCenter:) set }
  var frame: NSRect { @objc get }
  var isHidden: Bool { @objc get @objc (setHidden:) set }
  var indexPath: IndexPath { @objc get }
  var name: String { @objc get }
  var representedElementCategory: NSCollectionElementCategory { @objc get }
  var representedElementKind: String? { @objc get }
  var zIndex: Int { @objc get @objc (setZIndex:) set }
}

