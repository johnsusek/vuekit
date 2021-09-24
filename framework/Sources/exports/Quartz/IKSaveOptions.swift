import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol IKSaveOptionsExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc (addSaveOptionsAccessoryViewToSavePanel:) func addAccessoryView(to: NSSavePanel)
	@objc (addSaveOptionsToView:) func add(to: NSView)

	// Own Instance Properties
	@objc var delegate: AnyObject! { get set }
	@objc var imageProperties: [AnyHashable: Any] { @objc get }
	@objc var imageUTType: String { @objc get }
	@objc var userSelection: [AnyHashable: Any] { @objc get }

	// Constructors
	@objc static func create(imageProperties: [AnyHashable: Any], imageUTType: String) -> IKSaveOptions
}

extension IKSaveOptions: IKSaveOptionsExports {
	@objc class func create(imageProperties: [AnyHashable: Any], imageUTType: String) -> IKSaveOptions {
		return IKSaveOptions(imageProperties: imageProperties, imageUTType: imageUTType)
	}

}
