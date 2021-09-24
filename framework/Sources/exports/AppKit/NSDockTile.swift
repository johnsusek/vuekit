import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSDockTileExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func display()

	// Own Instance Properties
	@objc var badgeLabel: String? { @objc get @objc (setBadgeLabel:) set }
	@objc var contentView: NSView? { @objc get @objc (setContentView:) set }
	@objc var owner: AnyObject? { get }
	@objc var showsApplicationBadge: Bool { @objc get @objc (setShowsApplicationBadge:) set }
	@objc var size: NSSize { @objc get }

	// Constructors
}

extension NSDockTile: NSDockTileExports {
}
