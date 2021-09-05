import AppKit
import JavaScriptCore

@objc protocol NSButtonExports: JSExport {
	@objc var allowsMixedState: Bool { @objc get @objc (setAllowsMixedState:) set }
	@objc var alternateImage: NSImage? { @objc get @objc (setAlternateImage:) set }
	@objc var alternateTitle: String { @objc get @objc (setAlternateTitle:) set }
	@objc var attributedAlternateTitle: NSAttributedString { @objc get @objc (setAttributedAlternateTitle:) set }
	@objc var attributedTitle: NSAttributedString { @objc get @objc (setAttributedTitle:) set }
	@objc @available(OSX 10.12.2, *) var bezelColor: NSColor? { @objc get @objc (setBezelColor:) set }
	@objc var bezelStyle: NSButton.BezelStyle { @objc get @objc (setBezelStyle:) set }
	@objc var isBordered: Bool { @objc get @objc (setBordered:) set }
	@objc @available(OSX 10.14, *) var contentTintColor: NSColor? { @objc get @objc (setContentTintColor:) set }
	@objc var image: NSImage? { @objc get @objc (setImage:) set }
	@objc @available(OSX 10.12, *) var imageHugsTitle: Bool { @objc get @objc (setImageHugsTitle:) set }
	@objc var imagePosition: NSControl.ImagePosition { @objc get @objc (setImagePosition:) set }
	@objc @available(OSX 10.5, *) var imageScaling: NSImageScaling { @objc get @objc (setImageScaling:) set }
	@objc var keyEquivalent: String { @objc get @objc (setKeyEquivalent:) set }
	@objc var keyEquivalentModifierMask: NSEvent.ModifierFlags { @objc get @objc (setKeyEquivalentModifierMask:) set }
	@objc @available(OSX 10.10.3, *) var maxAcceleratorLevel: Int { @objc get @objc (setMaxAcceleratorLevel:) set }
	@objc var showsBorderOnlyWhileMouseInside: Bool { @objc get @objc (setShowsBorderOnlyWhileMouseInside:) set }
	@objc var sound: NSSound? { @objc get @objc (setSound:) set }
	@objc @available(OSX 10.10.3, *) var isSpringLoaded: Bool { @objc get @objc (setSpringLoaded:) set }
	@objc var state: NSControl.StateValue { @objc get @objc (setState:) set }
	@objc var title: String { @objc get @objc (setTitle:) set }
	@objc var isTransparent: Bool { @objc get @objc (setTransparent:) set }
//	@objc func getPeriodicDelay(_: UnsafeMutablePointer<CGFloat>, interval: UnsafeMutablePointer<CGFloat>)
	@objc func highlight(_: Bool)
	@objc func setButtonType(_: NSButton.ButtonType)
	@objc func setNextState()
	@objc func setPeriodicDelay(_: Float, interval: Float)
	@objc @available(OSX 10.12, *) static func create(image: NSImage) -> Button
	@objc @available(OSX 10.12, *) static func create(title: String, image: NSImage) -> Button
	@objc @available(OSX 10.12, *) static func create(title: String) -> Button
	@objc @available(OSX 10.12, *) static func create(checkboxWithTitle: String) -> Button
	@objc @available(OSX 10.12, *) static func create(radioButtonWithTitle: String) -> Button
	@objc static func create() -> Button
}

class Button: NSButton, NSButtonExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc @available(OSX 10.12, *) class func create(image: NSImage) -> Button {
		return Button(image: image, target: nil, action: nil)
	}

	@objc @available(OSX 10.12, *) class func create(title: String, image: NSImage) -> Button {
		return Button(title: title, image: image, target: nil, action: nil)
	}

	@objc @available(OSX 10.12, *) class func create(title: String) -> Button {
		return Button(title: title, target: nil, action: nil)
	}

	@objc @available(OSX 10.12, *) class func create(checkboxWithTitle: String) -> Button {
		return Button(checkboxWithTitle: checkboxWithTitle, target: nil, action: nil)
	}

	@objc @available(OSX 10.12, *) class func create(radioButtonWithTitle: String) -> Button {
		return Button(radioButtonWithTitle: radioButtonWithTitle, target: nil, action: nil)
	}

	@objc override class func create() -> Button {
		return Button()
	}
}
