import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol IKPictureTakerExports: JSExport, NSPanelExports {
	// Static Methods
	@objc static func pictureTaker() -> IKPictureTaker

	// Instance Methods
	@objc (beginPictureTakerSheetForWindow:withDelegate:didEndSelector:contextInfo:) func beginSheet(`for`: NSWindow, withDelegate: Any, didEnd: Selector!, contextInfo: UnsafeMutableRawPointer)
	@objc (beginPictureTakerWithDelegate:didEndSelector:contextInfo:) func begin(withDelegate: Any, didEnd: Selector!, contextInfo: UnsafeMutableRawPointer)
	@objc func inputImage() -> NSImage
	@objc func mirroring() -> Bool
	@objc func outputImage() -> NSImage
	@objc (popUpRecentsMenuForView:withDelegate:didEndSelector:contextInfo:) func popUpRecentsMenu(`for`: NSView, withDelegate: Any, didEnd: Selector!, contextInfo: UnsafeMutableRawPointer)
	@objc func runModal() -> Int
	@objc func setInputImage(_: NSImage)
	@objc func setMirroring(_: Bool)

	// Constructors
}

extension IKPictureTaker: IKPictureTakerExports {
}
