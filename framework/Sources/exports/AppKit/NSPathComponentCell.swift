import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPathComponentCellExports: JSExport, NSTextFieldCellExports {
	// Static Methods

	// Own Instance Properties
	@objc (URL) var url: URL? { get set }

	// Constructors
}

extension NSPathComponentCell: NSPathComponentCellExports {
}
