import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol BlockOperationExports: JSExport, OperationExports {
	// Static Methods

	// Instance Methods
	@objc func addExecutionBlock(_ block: @escaping () -> Void)

	// Own Instance Properties
	@objc var executionBlocks: [@convention(block) () -> Void] { get }
}

extension BlockOperation: BlockOperationExports {}
