import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSOpenPanelExports: JSExport, NSSavePanelExports {
	// Static Methods

	// Own Instance Properties
	@objc (URLs) var urls: [URL] { get }
	@objc @available(OSX 10.11, *) var isAccessoryViewDisclosed: Bool { @objc get @objc (setAccessoryViewDisclosed:) set }
	@objc var allowsMultipleSelection: Bool { @objc get @objc (setAllowsMultipleSelection:) set }
	@objc var canChooseDirectories: Bool { @objc get @objc (setCanChooseDirectories:) set }
	@objc var canChooseFiles: Bool { @objc get @objc (setCanChooseFiles:) set }
	@objc @available(OSX 10.10, *) var canDownloadUbiquitousContents: Bool { @objc get @objc (setCanDownloadUbiquitousContents:) set }
	@objc @available(OSX 10.10, *) var canResolveUbiquitousConflicts: Bool { @objc get @objc (setCanResolveUbiquitousConflicts:) set }
	@objc var resolvesAliases: Bool { @objc get @objc (setResolvesAliases:) set }

	// Constructors
}

extension NSOpenPanel: NSOpenPanelExports {
}
