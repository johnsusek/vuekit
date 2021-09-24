import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CARemoteLayerClientExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func invalidate()

	// Own Instance Properties
	@objc var clientId: UInt32 { @objc get }
	@objc var layer: CALayer? { @objc get @objc (setLayer:) set }

	// Constructors
	@objc static func create(serverPort: mach_port_t) -> CARemoteLayerClient
}

extension CARemoteLayerClient: CARemoteLayerClientExports {
	@objc class func create(serverPort: mach_port_t) -> CARemoteLayerClient {
		return CARemoteLayerClient(serverPort: serverPort)
	}

}
