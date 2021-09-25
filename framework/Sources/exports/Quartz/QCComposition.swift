import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol QCCompositionExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc func attributes() -> [AnyHashable: Any]
	@objc func identifier() -> String
	@objc func inputKeys() -> [Any]
	@objc func outputKeys() -> [Any]
	@objc func protocols() -> [Any]

	// Constructors
	@objc static func create() -> QCComposition
}

extension QCComposition: QCCompositionExports {
	@objc class func create() -> QCComposition {
		return QCComposition()
	}

}
