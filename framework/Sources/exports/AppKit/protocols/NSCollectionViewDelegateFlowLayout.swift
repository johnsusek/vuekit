import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCollectionViewDelegateFlowLayoutExports: JSExport, NSCollectionViewDelegateExports {
  @objc (collectionView:layout:sizeForItemAtIndexPath:) func collectionView(_: NSCollectionView, layout: NSCollectionViewLayout, sizeForItemAt: IndexPath) -> NSSize
  @objc (collectionView:layout:insetForSectionAtIndex:) func collectionView(_: NSCollectionView, layout: NSCollectionViewLayout, insetForSectionAt: Int) -> NSEdgeInsets
  @objc (collectionView:layout:minimumLineSpacingForSectionAtIndex:) func collectionView(_: NSCollectionView, layout: NSCollectionViewLayout, minimumLineSpacingForSectionAt: Int) -> CGFloat
  @objc (collectionView:layout:minimumInteritemSpacingForSectionAtIndex:) func collectionView(_: NSCollectionView, layout: NSCollectionViewLayout, minimumInteritemSpacingForSectionAt: Int) -> CGFloat
  @objc func collectionView(_: NSCollectionView, layout: NSCollectionViewLayout, referenceSizeForFooterInSection: Int) -> NSSize
  @objc func collectionView(_: NSCollectionView, layout: NSCollectionViewLayout, referenceSizeForHeaderInSection: Int) -> NSSize
}

