import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAMetalLayerExports: JSExport, CALayerExports {
	// Static Methods

	// Instance Methods
	@objc func nextDrawable() -> CAMetalDrawable?

	// Own Instance Properties
	@objc (EDRMetadata) @available(OSX 10.15, *) var edrMetadata: CAEDRMetadata? { @objc (EDRMetadata) get @objc (setEDRMetadata:) set }
	@objc @available(OSX 10.13, *) var allowsNextDrawableTimeout: Bool { @objc get @objc (setAllowsNextDrawableTimeout:) set }
	@objc var colorspace: CGColorSpace? { @objc get @objc (setColorspace:) set }
	@objc var device: MTLDevice? { @objc get @objc (setDevice:) set }
	@objc @available(OSX 10.13, *) var displaySyncEnabled: Bool { @objc get @objc (setDisplaySyncEnabled:) set }
	@objc var drawableSize: NSSize { @objc get @objc (setDrawableSize:) set }
	@objc var framebufferOnly: Bool { @objc get @objc (setFramebufferOnly:) set }
	@objc @available(OSX 10.13.2, *) var maximumDrawableCount: Int { @objc get @objc (setMaximumDrawableCount:) set }
	@objc var pixelFormat: MTLPixelFormat { @objc get @objc (setPixelFormat:) set }
	@objc @available(OSX 10.15, *) var preferredDevice: MTLDevice? { @objc get }
	@objc var presentsWithTransaction: Bool { @objc get @objc (setPresentsWithTransaction:) set }
	@objc var wantsExtendedDynamicRangeContent: Bool { @objc get @objc (setWantsExtendedDynamicRangeContent:) set }

	// Constructors
}

extension CAMetalLayer: CAMetalLayerExports {
}
