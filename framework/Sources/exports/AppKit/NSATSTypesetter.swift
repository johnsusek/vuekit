import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSATSTypesetterExports: JSExport, NSTypesetterExports {
	// Static Methods

	// Own Static Properties
	@objc (sharedTypesetter) static var shared: NSATSTypesetter { @objc (sharedTypesetter) get }

	// Constructors
}

extension NSATSTypesetter: NSATSTypesetterExports {
}
