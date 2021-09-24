import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSCollectionViewCompositionalLayoutExports: JSExport, NSCollectionViewLayoutExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var configuration: NSCollectionViewCompositionalLayoutConfiguration { @objc get @objc (setConfiguration:) set }

	// Constructors
	@objc static func create(section: NSCollectionLayoutSection) -> NSCollectionViewCompositionalLayout
	@objc static func create(section: NSCollectionLayoutSection, configuration: NSCollectionViewCompositionalLayoutConfiguration) -> NSCollectionViewCompositionalLayout
// 	@objc static func create(sectionProvider: JSValue) -> NSCollectionViewCompositionalLayout
// 	@objc static func create(sectionProvider: JSValue, configuration: NSCollectionViewCompositionalLayoutConfiguration) -> NSCollectionViewCompositionalLayout
}

extension NSCollectionViewCompositionalLayout: NSCollectionViewCompositionalLayoutExports {
	@objc class func create(section: NSCollectionLayoutSection) -> NSCollectionViewCompositionalLayout {
		return NSCollectionViewCompositionalLayout(section: section)
	}

	@objc class func create(section: NSCollectionLayoutSection, configuration: NSCollectionViewCompositionalLayoutConfiguration) -> NSCollectionViewCompositionalLayout {
		return NSCollectionViewCompositionalLayout(section: section, configuration: configuration)
	}

}
