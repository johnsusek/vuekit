import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSecureTextFieldExports: JSExport, NSTextFieldExports {
	// Static Methods
}

@objc protocol SecureTextFieldExports: JSExport, NSTextFieldExports {
	// Constructors
	@objc static func create() -> SecureTextField
}

class SecureTextField: NSSecureTextField, SecureTextFieldExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> SecureTextField {
		return SecureTextField()
	}

}

extension NSSecureTextField: NSSecureTextFieldExports {}
