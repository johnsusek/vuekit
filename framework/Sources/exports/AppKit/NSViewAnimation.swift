import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSViewAnimationExports: JSExport, NSAnimationExports {
	// Static Methods

	// Instance Methods

	// Own Instance Properties
	@objc var viewAnimations: [[NSViewAnimation.Key : Any]] { get set }
}

extension NSViewAnimation: NSViewAnimationExports {}
