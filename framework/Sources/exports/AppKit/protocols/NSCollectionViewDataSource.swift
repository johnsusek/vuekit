import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSCollectionViewDataSourceExports: JSExport, NSObjectExports {
  @objc (collectionView:itemForRepresentedObjectAtIndexPath:) @available(OSX 10.11, *) func collectionView(_: NSCollectionView, itemForRepresentedObjectAt: IndexPath) -> NSCollectionViewItem
  @objc (collectionView:viewForSupplementaryElementOfKind:atIndexPath:) func collectionView(_: NSCollectionView, viewForSupplementaryElementOfKind: NSCollectionView.SupplementaryElementKind, at: IndexPath) -> NSView
  @objc @available(OSX 10.11, *) func collectionView(_: NSCollectionView, numberOfItemsInSection: Int) -> Int
  @objc (numberOfSectionsInCollectionView:) @available(OSX 10.11, *) func numberOfSections(in: NSCollectionView) -> Int
}

