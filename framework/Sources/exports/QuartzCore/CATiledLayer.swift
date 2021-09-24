import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CATiledLayerExports: JSExport, CALayerExports {
	// Static Methods
	@objc static func fadeDuration() -> CFTimeInterval

	// Own Instance Properties
	@objc var levelsOfDetail: Int { get set }
	@objc var levelsOfDetailBias: Int { get set }
	@objc var tileSize: NSSize { @objc get @objc (setTileSize:) set }

	// Constructors
}

extension CATiledLayer: CATiledLayerExports {
}
