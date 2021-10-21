import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCollectionViewPrefetchingExports: JSExport, NSObjectExports {
  @objc (collectionView:prefetchItemsAtIndexPaths:) func collectionView(_: NSCollectionView, prefetchItemsAt: [IndexPath])
  @objc (collectionView:cancelPrefetchingForItemsAtIndexPaths:) func collectionView(_: NSCollectionView, cancelPrefetchingForItemsAt: [IndexPath])
}

