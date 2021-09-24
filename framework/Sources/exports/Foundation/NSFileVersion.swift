import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSFileVersionExports: JSExport {
	// Static Methods
	// throws - @objc @available(OSX 10.7, *) static func addVersionOfItemAtURL(withContentsOfURL: NSURL, options: NSURL, error: NSFileVersion.AddingOptions) -> NSFileVersion?
	@objc (currentVersionOfItemAtURL:) static func currentVersionOfItem(at url: URL) -> NSFileVersion?
	@objc (getNonlocalVersionsOfItemAtURL:completionHandler:) @available(OSX 10.10, *) static func getNonlocalVersionsOfItem(at url: URL, completionHandler: @escaping ([NSFileVersion]?, Error?) -> Void)
	@objc (otherVersionsOfItemAtURL:) static func otherVersionsOfItem(at url: URL) -> [NSFileVersion]?
	// throws - @objc static func removeOtherVersionsOfItemAtURL(error: NSURL) -> Bool
	// 	@objc (temporaryDirectoryURLForNewVersionOfItemAtURL:) @available(OSX 10.7, *) static func temporaryDirectoryURLForNewVersionOfItem(at: NSURL) -> NSURL
	@objc (unresolvedConflictVersionsOfItemAtURL:) static func unresolvedConflictVersionsOfItem(at url: URL) -> [NSFileVersion]?

	// Instance Methods
	// throws - @objc func removeAndReturnError() -> Bool
	// 	@objc func replaceItemAtURL(options: NSURL, error: NSFileVersion.ReplacingOptions) -> NSURL?

	// Own Instance Properties
	@objc (URL) var url: URL { get }
	@objc var isConflict: Bool { @objc get }
	@objc @available(OSX 10.7, *) var isDiscardable: Bool { @objc get @objc (setDiscardable:) set }
	@objc @available(OSX 10.10, *) var hasLocalContents: Bool { @objc get }
	@objc @available(OSX 10.10, *) var hasThumbnail: Bool { @objc get }
	@objc var localizedName: String? { @objc get }
	@objc var localizedNameOfSavingComputer: String? { @objc get }
	@objc var modificationDate: Date? { @objc get }
	@objc @available(OSX 10.12, *) var originatorNameComponents: PersonNameComponents? { get }
	@objc var persistentIdentifier: NSCoding { @objc get }
	@objc var isResolved: Bool { @objc get @objc (setResolved:) set }

	// Constructors
}

extension NSFileVersion: NSFileVersionExports {
}
