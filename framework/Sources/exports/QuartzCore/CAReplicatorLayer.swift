import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import QuartzCore

@objc protocol CAReplicatorLayerExports: JSExport, CALayerExports {
	// Static Methods

	// Own Instance Properties
	@objc var instanceAlphaOffset: Float { @objc get @objc (setInstanceAlphaOffset:) set }
	@objc var instanceBlueOffset: Float { @objc get @objc (setInstanceBlueOffset:) set }
	@objc var instanceColor: CGColor? { @objc get @objc (setInstanceColor:) set }
	@objc var instanceCount: Int { @objc get @objc (setInstanceCount:) set }
	@objc var instanceDelay: CFTimeInterval { @objc get @objc (setInstanceDelay:) set }
	@objc var instanceGreenOffset: Float { @objc get @objc (setInstanceGreenOffset:) set }
	@objc var instanceRedOffset: Float { @objc get @objc (setInstanceRedOffset:) set }
	@objc var instanceTransform: CATransform3D { @objc get @objc (setInstanceTransform:) set }
	@objc var preservesDepth: Bool { @objc get @objc (setPreservesDepth:) set }

	// Constructors
}

extension CAReplicatorLayer: CAReplicatorLayerExports {
}
