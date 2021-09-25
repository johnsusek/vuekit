import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAConstraintLayoutManagerExports: JSExport {
	// , CALayoutManagerExports
	// Static Methods

	// Constructors
	@objc static func create() -> CAConstraintLayoutManager
}

extension CAConstraintLayoutManager: CAConstraintLayoutManagerExports {
	@objc class func create() -> CAConstraintLayoutManager {
		return CAConstraintLayoutManager()
	}

}
