import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSTabViewDelegateExports: JSExport, NSObjectExports {
  @objc (tabView:shouldSelectTabViewItem:) func tabView(_: NSTabView, shouldSelect: NSTabViewItem?) -> Bool
  @objc (tabView:willSelectTabViewItem:) func tabView(_: NSTabView, willSelect: NSTabViewItem?)
  @objc (tabView:didSelectTabViewItem:) func tabView(_: NSTabView, didSelect: NSTabViewItem?)
  @objc func tabViewDidChangeNumberOfTabViewItems(_: NSTabView)
}

