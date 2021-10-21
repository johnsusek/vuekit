import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionViewExports: JSExport, NSViewExports {
	// , NSDraggingDestinationExports, NSDraggingSourceExports
	// Static Methods

	// Instance Methods
	@objc (deleteItemsAtIndexPaths:) @available(OSX 10.11, *) func deleteItems(at: Set<IndexPath>)
	@objc @available(OSX 10.11, *) func deleteSections(_: IndexSet)
	@objc func deselectAll(_: Any?)
	@objc (deselectItemsAtIndexPaths:) @available(OSX 10.11, *) func deselectItems(at: Set<IndexPath>)
	@objc (draggingImageForItemsAtIndexPaths:withEvent:offset:) @available(OSX 10.11, *) func draggingImageForItems(at: Set<IndexPath>, with: NSEvent, offset: UnsafeMutablePointer<NSPoint>) -> NSImage
	@objc (draggingImageForItemsAtIndexes:withEvent:offset:) @available(OSX 10.6, *) func draggingImageForItems(at: IndexSet, with: NSEvent, offset: UnsafeMutablePointer<NSPoint>) -> NSImage
	@objc (frameForItemAtIndex:) @available(OSX 10.6, *) func frameForItem(at: Int) -> NSRect
	@objc (frameForItemAtIndex:withNumberOfItems:) @available(OSX 10.7, *) func frameForItem(at: Int, withNumberOfItems: Int) -> NSRect
	@objc (indexPathForItem:) @available(OSX 10.11, *) func indexPath(`for`: NSCollectionViewItem) -> IndexPath?
	@objc (indexPathForItemAtPoint:) @available(OSX 10.11, *) func indexPathForItem(at: NSPoint) -> IndexPath?
	@objc @available(OSX 10.11, *) func indexPathsForVisibleItems() -> Set<IndexPath>
	@objc (indexPathsForVisibleSupplementaryElementsOfKind:) @available(OSX 10.11, *) func indexPathsForVisibleSupplementaryElements(ofKind: NSCollectionView.SupplementaryElementKind) -> Set<IndexPath>
	@objc (insertItemsAtIndexPaths:) @available(OSX 10.11, *) func insertItems(at: Set<IndexPath>)
	@objc @available(OSX 10.11, *) func insertSections(_: IndexSet)
	@objc (itemAtIndex:) @available(OSX 10.6, *) func item(at: Int) -> NSCollectionViewItem?
	@objc (itemAtIndexPath:) @available(OSX 10.11, *) func item(at: IndexPath) -> NSCollectionViewItem?
	@objc (layoutAttributesForItemAtIndexPath:) @available(OSX 10.11, *) func layoutAttributesForItem(at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc (layoutAttributesForSupplementaryElementOfKind:atIndexPath:) @available(OSX 10.11, *) func layoutAttributesForSupplementaryElement(ofKind: NSCollectionView.SupplementaryElementKind, at: IndexPath) -> NSCollectionViewLayoutAttributes?
	@objc (makeItemWithIdentifier:forIndexPath:) @available(OSX 10.11, *) func makeItem(withIdentifier: NSUserInterfaceItemIdentifier, `for`: IndexPath) -> NSCollectionViewItem
	@objc (makeSupplementaryViewOfKind:withIdentifier:forIndexPath:) @available(OSX 10.11, *) func makeSupplementaryView(ofKind: NSCollectionView.SupplementaryElementKind, withIdentifier: NSUserInterfaceItemIdentifier, `for`: IndexPath) -> NSView
	@objc (moveItemAtIndexPath:toIndexPath:) @available(OSX 10.11, *) func moveItem(at: IndexPath, to: IndexPath)
	@objc @available(OSX 10.11, *) func moveSection(_: Int, toSection: Int)
	@objc (numberOfItemsInSection:) @available(OSX 10.11, *) func numberOfItems(inSection: Int) -> Int
	// 	@objc @available(OSX 10.11, *) func performBatchUpdates(_: JSValue, completionHandler: JSValue)
	@objc (registerClass:forItemWithIdentifier:) @available(OSX 10.11, *) func register(_: AnyClass?, forItemWithIdentifier: NSUserInterfaceItemIdentifier)
	@objc (registerClass:forSupplementaryViewOfKind:withIdentifier:) @available(OSX 10.11, *) func register(_: AnyClass?, forSupplementaryViewOfKind: NSCollectionView.SupplementaryElementKind, withIdentifier: NSUserInterfaceItemIdentifier)
	@objc (registerNib:forItemWithIdentifier:) @available(OSX 10.11, *) func register(_: NSNib?, forItemWithIdentifier: NSUserInterfaceItemIdentifier)
	@objc (registerNib:forSupplementaryViewOfKind:withIdentifier:) @available(OSX 10.11, *) func register(_: NSNib?, forSupplementaryViewOfKind: NSCollectionView.SupplementaryElementKind, withIdentifier: NSUserInterfaceItemIdentifier)
	@objc @available(OSX 10.11, *) func reloadData()
	@objc (reloadItemsAtIndexPaths:) @available(OSX 10.11, *) func reloadItems(at: Set<IndexPath>)
	@objc @available(OSX 10.11, *) func reloadSections(_: IndexSet)
	@objc (scrollToItemsAtIndexPaths:scrollPosition:) @available(OSX 10.11, *) func scrollToItems(at: Set<IndexPath>, scrollPosition: NSCollectionView.ScrollPosition)
	@objc (selectItemsAtIndexPaths:scrollPosition:) @available(OSX 10.11, *) func selectItems(at: Set<IndexPath>, scrollPosition: NSCollectionView.ScrollPosition)
	@objc @available(OSX 10.6, *) func setDraggingSourceOperationMask(_: NSDragOperation, forLocal: Bool)
	// 	@objc (supplementaryViewForElementKind:atIndexPath:) @available(OSX 10.11, *) func supplementaryView(forElementKind: NSCollectionView.SupplementaryElementKind, at: IndexPath) -> NSView<NSCollectionViewElement>?
	@objc @available(OSX 10.12, *) func toggleSectionCollapse(_: Any)
	@objc @available(OSX 10.11, *) func visibleItems() -> [NSCollectionViewItem]
	@objc (visibleSupplementaryViewsOfKind:) @available(OSX 10.11, *) func visibleSupplementaryViews(ofKind elementKind: NSCollectionView.SupplementaryElementKind) -> [NSView & NSCollectionViewElement]

	// Own Instance Properties
	@objc @available(OSX 10.11, *) var allowsEmptySelection: Bool { @objc get @objc (setAllowsEmptySelection:) set }
	@objc var allowsMultipleSelection: Bool { @objc get @objc (setAllowsMultipleSelection:) set }
	@objc var backgroundColors: [NSColor]! { @objc get @objc (setBackgroundColors:) set }
	@objc @available(OSX 10.11, *) var backgroundView: NSView? { @objc get @objc (setBackgroundView:) set }
	@objc @available(OSX 10.12, *) var backgroundViewScrollsWithContent: Bool { @objc get @objc (setBackgroundViewScrollsWithContent:) set }
	@objc @available(OSX 10.11, *) var collectionViewLayout: NSCollectionViewLayout? { @objc get @objc (setCollectionViewLayout:) set }
	@objc var content: [Any] { @objc get @objc (setContent:) set }
	@objc @available(OSX 10.11, *) var dataSource: NSCollectionViewDataSource? { @objc get @objc (setDataSource:) set }
	@objc var delegate: NSCollectionViewDelegate? { @objc get @objc (setDelegate:) set }
	@objc var isFirstResponder: Bool { @objc get }
	@objc @available(OSX 10.11, *) var numberOfSections: Int { @objc get }
	@objc @available(OSX 10.13, *) var prefetchDataSource: NSCollectionViewPrefetching? { @objc get @objc (setPrefetchDataSource:) set }
	@objc var isSelectable: Bool { @objc get @objc (setSelectable:) set }
	@objc @available(OSX 10.11, *) var selectionIndexPaths: Set<IndexPath> { @objc get @objc (setSelectionIndexPaths:) set }
	@objc var selectionIndexes: IndexSet { @objc get @objc (setSelectionIndexes:) set }
}

@objc protocol CollectionViewExports: JSExport {
	// Constructors
	@objc static func create() -> CollectionView
}

class CollectionView: NSCollectionView, CollectionViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> CollectionView {
		return CollectionView()
	}

}

extension NSCollectionView: NSCollectionViewExports {}
