import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol PipeExports: JSExport {
	// Static Methods
	// @objc static func pipe() -> Pipe

	// Own Instance Properties
	@objc var fileHandleForReading: FileHandle { @objc get }
	@objc var fileHandleForWriting: FileHandle { @objc get }

	// Constructors
	@objc static func create() -> Pipe
}

extension Pipe: PipeExports {
	class func create() -> Pipe {
		return Pipe()
	}

}
