import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSFontManagerExports: JSExport {
	// , NSMenuItemValidationExports
	// Static Methods
	@objc static func setFontManagerFactory(_: AnyClass?)
	@objc static func setFontPanelFactory(_: AnyClass?)

	// Own Static Properties
	@objc (sharedFontManager) static var shared: NSFontManager { @objc (sharedFontManager) get }

	// Instance Methods
	@objc func addFontTrait(_: Any?)
	@objc (availableFontNamesWithTraits:) func availableFontNames(with: NSFontTraitMask) -> [String]?
	@objc (availableMembersOfFontFamily:) func availableMembers(ofFontFamily: String) -> [[Any]]?
	@objc func convertAttributes(_: [String: Any]) -> [String: Any]
	@objc (convertFont:) func convert(_: NSFont) -> NSFont
	@objc (convertFont:toFace:) func convert(_: NSFont, toFace: String) -> NSFont?
	@objc (convertFont:toFamily:) func convert(_: NSFont, toFamily: String) -> NSFont
	@objc (convertFont:toHaveTrait:) func convert(_: NSFont, toHaveTrait: NSFontTraitMask) -> NSFont
	@objc (convertFont:toNotHaveTrait:) func convert(_: NSFont, toNotHaveTrait: NSFontTraitMask) -> NSFont
	@objc (convertFont:toSize:) func convert(_ fontObj: NSFont, toSize size: CGFloat) -> NSFont
	@objc @available(OSX 10.5, *) func convertFontTraits(_: NSFontTraitMask) -> NSFontTraitMask
	@objc (convertWeight:ofFont:) func convertWeight(_: Bool, of: NSFont) -> NSFont
	@objc func fontMenu(_: Bool) -> NSMenu?
	@objc func fontNamed(_: String, hasTraits: NSFontTraitMask) -> Bool
	@objc func fontPanel(_: Bool) -> NSFontPanel?
	@objc (fontWithFamily:traits:weight:size:) func font(withFamily family: String, traits: NSFontTraitMask, weight: Int, size: CGFloat) -> NSFont?
	@objc (localizedNameForFamily:face:) func localizedName(forFamily: String, face: String?) -> String
	@objc func modifyFont(_: Any?)
	@objc func modifyFontViaPanel(_: Any?)
	@objc func orderFrontFontPanel(_: Any?)
	@objc func orderFrontStylesPanel(_: Any?)
	@objc func removeFontTrait(_: Any?)
	@objc func sendAction() -> Bool
	@objc func setFontMenu(_: NSMenu)
	@objc func setSelectedAttributes(_: [String: Any], isMultiple: Bool)
	@objc func setSelectedFont(_: NSFont, isMultiple: Bool)
	@objc (traitsOfFont:) func traits(of: NSFont) -> NSFontTraitMask
	@objc (weightOfFont:) func weight(of: NSFont) -> Int

	// Own Instance Properties
	@objc var action: Selector { @objc get @objc (setAction:) set }
	@objc var availableFontFamilies: [String] { @objc get }
	@objc var availableFonts: [String] { @objc get }
	@objc @available(OSX 10.5, *) var currentFontAction: NSFontAction { @objc get }
	@objc var isEnabled: Bool { @objc get @objc (setEnabled:) set }
	@objc var isMultiple: Bool { @objc get }
	@objc var selectedFont: NSFont? { @objc get }
	@objc @available(OSX 10.5, *) var target: AnyObject? { @objc get @objc (setTarget:) set }

	// Constructors
}

extension NSFontManager: NSFontManagerExports {
}
