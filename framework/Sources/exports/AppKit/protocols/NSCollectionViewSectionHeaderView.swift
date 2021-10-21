import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCollectionViewSectionHeaderViewExports: JSExport, NSCollectionViewElementExports {
  var sectionCollapseButton: NSButton? { @objc get @objc (setSectionCollapseButton:) set }
}

