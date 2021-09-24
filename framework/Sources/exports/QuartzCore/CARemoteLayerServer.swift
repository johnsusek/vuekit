import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CARemoteLayerServerExports: JSExport {
	// Static Methods
	@objc (sharedServer) static func shared() -> CARemoteLayerServer

	// Own Instance Properties
	@objc var serverPort: mach_port_t { @objc get }

	// Constructors
}

extension CARemoteLayerServer: CARemoteLayerServerExports {
}
