import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSAppearanceExports: JSExport {
	// , NSSecureCodingExports
	// Static Methods

	// Instance Methods
	@objc (bestMatchFromAppearancesWithNames:) @available(OSX 10.14, *) func bestMatch(from appearances: [NSAppearance.Name]) -> NSAppearance.Name?

	// Own Instance Properties
	@objc @available(OSX 10.10, *) var allowsVibrancy: Bool { @objc get }
	@objc @available(OSX 10.9, *) var name: NSAppearance.Name { @objc get }

	// Constructors
	@objc static func create(appearanceNamed: NSAppearance.Name, bundle: Bundle?) -> NSAppearance?
}

extension NSAppearance: NSAppearanceExports {
	@objc class func create(appearanceNamed: NSAppearance.Name, bundle: Bundle?) -> NSAppearance? {
		return NSAppearance(appearanceNamed: appearanceNamed, bundle: bundle)
	}

}
