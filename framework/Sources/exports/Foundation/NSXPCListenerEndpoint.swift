import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSXPCListenerEndpointExports: JSExport {
	// , NSSecureCodingExports
	// Static Methods

	// Constructors
	@objc static func create() -> NSXPCListenerEndpoint
}

extension NSXPCListenerEndpoint: NSXPCListenerEndpointExports {
	@objc class func create() -> NSXPCListenerEndpoint {
		return NSXPCListenerEndpoint()
	}

}
