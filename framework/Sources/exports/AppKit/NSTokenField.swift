import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSTokenFieldExports: JSExport, NSTextFieldExports {
	// Static Methods

	// Own Static Properties
	@objc static var defaultCompletionDelay: TimeInterval { @objc get }
	@objc static var defaultTokenizingCharacterSet: CharacterSet { @objc get }

	// Own Instance Properties
	@objc var completionDelay: TimeInterval { @objc get @objc (setCompletionDelay:) set }
	@objc var delegate: NSTokenFieldDelegate? { @objc get @objc (setDelegate:) set }
	@objc var tokenStyle: NSTokenField.TokenStyle { @objc get @objc (setTokenStyle:) set }
	@objc var tokenizingCharacterSet: CharacterSet! { @objc get @objc (setTokenizingCharacterSet:) set }
}

@objc protocol TokenFieldExports: JSExport, NSTextFieldExports {
	// Constructors
	@objc static func create() -> TokenField
}

class TokenField: NSTokenField, TokenFieldExports, JSOverridableView {
  var draw: JSValue?

  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> TokenField {
		return TokenField()
	}

}

extension NSTokenField: NSTokenFieldExports {}
