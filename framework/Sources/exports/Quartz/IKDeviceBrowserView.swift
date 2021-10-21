import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol IKDeviceBrowserViewExports: JSExport, NSViewExports {
	// Static Methods

	// Own Instance Properties
	@objc var delegate: IKDeviceBrowserViewDelegate { @objc get @objc (setDelegate:) set }
	@objc var displaysLocalCameras: Bool { @objc get @objc (setDisplaysLocalCameras:) set }
	@objc var displaysLocalScanners: Bool { @objc get @objc (setDisplaysLocalScanners:) set }
	@objc var displaysNetworkCameras: Bool { @objc get @objc (setDisplaysNetworkCameras:) set }
	@objc var displaysNetworkScanners: Bool { @objc get @objc (setDisplaysNetworkScanners:) set }
	@objc var mode: IKDeviceBrowserViewDisplayMode { @objc get @objc (setMode:) set }
	@objc var selectedDevice: ICDevice { @objc get }
}

@objc protocol DeviceBrowserViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> DeviceBrowserView
}

class DeviceBrowserView: IKDeviceBrowserView, DeviceBrowserViewExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> DeviceBrowserView {
		return DeviceBrowserView()
	}

}

extension IKDeviceBrowserView: IKDeviceBrowserViewExports {}
