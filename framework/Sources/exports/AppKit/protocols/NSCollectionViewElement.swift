import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCollectionViewElementExports: JSExport, NSObjectExports, NSUserInterfaceItemIdentificationExports {
  @objc (applyLayoutAttributes:) @available(OSX 10.11, *) func apply(_: NSCollectionViewLayoutAttributes)
  @objc (didTransitionFromLayout:toLayout:) @available(OSX 10.11, *) func didTransition(from: NSCollectionViewLayout, to: NSCollectionViewLayout)
  @objc (preferredLayoutAttributesFittingAttributes:) @available(OSX 10.11, *) func preferredLayoutAttributesFitting(_: NSCollectionViewLayoutAttributes) -> NSCollectionViewLayoutAttributes
  @objc @available(OSX 10.11, *) func prepareForReuse()
  @objc (willTransitionFromLayout:toLayout:) @available(OSX 10.11, *) func willTransition(from: NSCollectionViewLayout, to: NSCollectionViewLayout)
}

