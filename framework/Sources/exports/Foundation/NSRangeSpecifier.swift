import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSRangeSpecifierExports: JSExport, NSScriptObjectSpecifierExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var endSpecifier: NSScriptObjectSpecifier? { @objc get @objc (setEndSpecifier:) set }
	@objc var startSpecifier: NSScriptObjectSpecifier? { @objc get @objc (setStartSpecifier:) set }
}

extension NSRangeSpecifier: NSRangeSpecifierExports {}
