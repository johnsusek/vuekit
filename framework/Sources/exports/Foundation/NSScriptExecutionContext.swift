import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSScriptExecutionContextExports: JSExport {
	// Static Methods
	@objc (sharedScriptExecutionContext) static func shared() -> NSScriptExecutionContext

	// Own Instance Properties
	@objc var objectBeingTested: Any? { @objc get @objc (setObjectBeingTested:) set }
	@objc var rangeContainerObject: Any? { @objc get @objc (setRangeContainerObject:) set }
	@objc var topLevelObject: Any? { @objc get @objc (setTopLevelObject:) set }

	// Constructors
}

extension NSScriptExecutionContext: NSScriptExecutionContextExports {
}
