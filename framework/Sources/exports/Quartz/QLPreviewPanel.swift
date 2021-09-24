import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol QLPreviewPanelExports: JSExport, NSPanelExports {
	// Static Methods
	@objc (sharedPreviewPanel) static func shared() -> QLPreviewPanel
	@objc static func sharedPreviewPanelExists() -> Bool

	// Instance Methods
	@objc func enterFullScreenMode(_: NSScreen, withOptions: [AnyHashable: Any]) -> Bool
	@objc (exitFullScreenModeWithOptions:) func exitFullScreenMode(options: [AnyHashable: Any])
	@objc func refreshCurrentPreviewItem()
	@objc func reloadData()
	@objc func updateController()

	// Own Instance Properties
	@objc var currentController: Any { @objc get }
	@objc var currentPreviewItem: QLPreviewItem { @objc get }
	@objc var currentPreviewItemIndex: Int { @objc get @objc (setCurrentPreviewItemIndex:) set }
	@objc var dataSource: QLPreviewPanelDataSource { @objc get @objc (setDataSource:) set }
	@objc var delegate: AnyObject! { get set }
	@objc var displayState: Any { @objc get @objc (setDisplayState:) set }
	@objc var isInFullScreenMode: Bool { @objc get }

	// Constructors
}

extension QLPreviewPanel: QLPreviewPanelExports {
}
