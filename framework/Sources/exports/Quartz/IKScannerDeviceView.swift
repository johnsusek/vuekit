import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol IKScannerDeviceViewExports: JSExport, NSViewExports {
	// Static Methods

	// Own Instance Properties
	@objc var delegate: IKScannerDeviceViewDelegate { @objc get @objc (setDelegate:) set }
	@objc var displaysDownloadsDirectoryControl: Bool { @objc get @objc (setDisplaysDownloadsDirectoryControl:) set }
	@objc var displaysPostProcessApplicationControl: Bool { @objc get @objc (setDisplaysPostProcessApplicationControl:) set }
	@objc var documentName: String { @objc get @objc (setDocumentName:) set }
	@objc var downloadsDirectory: URL! { get set }
	@objc var hasDisplayModeAdvanced: Bool { @objc get @objc (setHasDisplayModeAdvanced:) set }
	@objc var hasDisplayModeSimple: Bool { @objc get @objc (setHasDisplayModeSimple:) set }
	@objc var mode: IKScannerDeviceViewDisplayMode { @objc get @objc (setMode:) set }
	@objc var overviewControlLabel: String { @objc get @objc (setOverviewControlLabel:) set }
	@objc var postProcessApplication: URL! { get set }
	@objc var scanControlLabel: String { @objc get @objc (setScanControlLabel:) set }
	@objc var scannerDevice: ICScannerDevice { @objc get @objc (setScannerDevice:) set }
	@objc var transferMode: IKScannerDeviceViewTransferMode { @objc get @objc (setTransferMode:) set }
}

@objc protocol ScannerDeviceViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> ScannerDeviceView
}

class ScannerDeviceView: IKScannerDeviceView, ScannerDeviceViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> ScannerDeviceView {
		return ScannerDeviceView()
	}

}

extension IKScannerDeviceView: IKScannerDeviceViewExports {}
