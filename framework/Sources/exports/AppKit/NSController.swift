import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSControllerExports: JSExport {
	// , NSCodingExports, NSEditorExports, NSEditorRegistrationExports
	// Static Methods

	// Own Instance Properties
	@objc var isEditing: Bool { @objc get }

	// Constructors
}

extension NSController: NSControllerExports {
}