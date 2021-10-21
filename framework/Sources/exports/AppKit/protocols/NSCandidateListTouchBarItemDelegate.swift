import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCandidateListTouchBarItemDelegateExports: JSExport, NSObjectExports {
  @objc (candidateListTouchBarItem:beginSelectingCandidateAtIndex:) @available(OSX 10.12.2, *) func candidateListTouchBarItem(_: NSCandidateListTouchBarItem<AnyObject>, beginSelectingCandidateAt: Int)
  @objc (candidateListTouchBarItem:changeSelectionFromCandidateAtIndex:toIndex:) @available(OSX 10.12.2, *) func candidateListTouchBarItem(_: NSCandidateListTouchBarItem<AnyObject>, changeSelectionFromCandidateAt: Int, to: Int)
  @objc (candidateListTouchBarItem:endSelectingCandidateAtIndex:) @available(OSX 10.12.2, *) func candidateListTouchBarItem(_: NSCandidateListTouchBarItem<AnyObject>, endSelectingCandidateAt: Int)
  @objc @available(OSX 10.12.2, *) func candidateListTouchBarItem(_: NSCandidateListTouchBarItem<AnyObject>, changedCandidateListVisibility: Bool)
}

