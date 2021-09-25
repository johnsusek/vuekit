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
	// jsvalue - @objc func addExecutionBlock(_: JSValue)

	// Own Instance Properties
	@objc var executionBlocks: [@convention(block) () -> Void] { get }

	// Constructors
	@objc static func create() -> BlockOperation
// 	// jsvalue - @objc static func blockOperationWithBlock(_: JSValue) -> BlockOperation
}

extension BlockOperation: BlockOperationExports {
	@objc override class func create() -> BlockOperation {
		return BlockOperation()
	}

}
