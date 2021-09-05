import AppKit
import JavaScriptCore

@objc protocol NSAppearanceExports: JSExport {
	@objc static func create(named: NSAppearance.Name) -> NSAppearance?
	@objc @available(OSX 10.10, *) var allowsVibrancy: Bool { @objc get }
	@objc @available(OSX 10.9, *) var name: NSAppearance.Name { @objc get }
	@objc static var current: NSAppearance! { @objc (currentAppearance) get @objc (setCurrentAppearance:) set }
	@objc (bestMatchFromAppearancesWithNames:) @available(OSX 10.14, *) func bestMatch(from: [NSAppearance.Name]) -> NSAppearance.Name?
	@objc static func create(appearanceNamed: NSAppearance.Name, bundle: Bundle?) -> NSAppearance?
}

extension NSAppearance: NSAppearanceExports {
	@objc class func create(named: NSAppearance.Name) -> NSAppearance? {
		return NSAppearance(named: named)
	}

	@objc class func create(appearanceNamed: NSAppearance.Name, bundle: Bundle?) -> NSAppearance? {
		return NSAppearance(appearanceNamed: appearanceNamed, bundle: bundle)
	}

	@objc override class func create() -> NSAppearance {
		return NSAppearance()
	}
}
