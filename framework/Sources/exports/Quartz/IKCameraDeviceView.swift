import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol IKCameraDeviceViewExports: JSExport, NSViewExports {
	// Static Methods

	// Instance Methods
	@objc func deleteSelectedItems(_: Any)
	@objc func downloadAllItems(_: Any)
	@objc func downloadSelectedItems(_: Any)
	@objc func rotateLeft(_: Any)
	@objc func rotateRight(_: Any)
	@objc (selectIndexes:byExtendingSelection:) func select(_: IndexSet, byExtendingSelection: Bool)
	@objc func selectedIndexes() -> IndexSet

	// Own Instance Properties
	@objc var cameraDevice: ICCameraDevice { @objc get @objc (setCameraDevice:) set }
	@objc var canDeleteSelectedItems: Bool { @objc get }
	@objc var canDownloadSelectedItems: Bool { @objc get }
	@objc var canRotateSelectedItemsLeft: Bool { @objc get }
	@objc var canRotateSelectedItemsRight: Bool { @objc get }
	@objc var delegate: IKCameraDeviceViewDelegate { @objc get @objc (setDelegate:) set }
	@objc var displaysDownloadsDirectoryControl: Bool { @objc get @objc (setDisplaysDownloadsDirectoryControl:) set }
	@objc var displaysPostProcessApplicationControl: Bool { @objc get @objc (setDisplaysPostProcessApplicationControl:) set }
	@objc var downloadAllControlLabel: String { @objc get @objc (setDownloadAllControlLabel:) set }
	@objc var downloadSelectedControlLabel: String { @objc get @objc (setDownloadSelectedControlLabel:) set }
	@objc var downloadsDirectory: URL! { get set }
	@objc var hasDisplayModeIcon: Bool { @objc get @objc (setHasDisplayModeIcon:) set }
	@objc var hasDisplayModeTable: Bool { @objc get @objc (setHasDisplayModeTable:) set }
	@objc var iconSize: Int { @objc get @objc (setIconSize:) set }
	@objc var mode: IKCameraDeviceViewDisplayMode { @objc get @objc (setMode:) set }
	@objc var postProcessApplication: URL! { get set }
	@objc var transferMode: IKCameraDeviceViewTransferMode { @objc get @objc (setTransferMode:) set }
}

@objc protocol CameraDeviceViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> CameraDeviceView
}

class CameraDeviceView: IKCameraDeviceView, CameraDeviceViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> CameraDeviceView {
		return CameraDeviceView()
	}

}

extension IKCameraDeviceView: IKCameraDeviceViewExports {}
