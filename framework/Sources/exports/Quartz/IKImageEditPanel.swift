import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol IKImageEditPanelExports: JSExport, NSPanelExports {
	// Static Methods
	@objc (sharedImageEditPanel) static func shared() -> IKImageEditPanel

	// Instance Methods
	@objc func reloadData()

	// Own Instance Properties
	@objc var dataSource: IKImageEditPanelDataSource { @objc get @objc (setDataSource:) set }
	@objc var filterArray: [Any] { @objc get }

	// Constructors
}

extension IKImageEditPanel: IKImageEditPanelExports {
}
