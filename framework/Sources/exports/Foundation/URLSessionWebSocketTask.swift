import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol URLSessionWebSocketTaskExports: JSExport, URLSessionTaskExports {
	// Static Methods

	// Instance Methods
	// @objc func cancelWithCloseCode(_: URLSessionWebSocketTask.CloseCode, reason: Data?)
	// jsvalue - @objc func receiveMessageWithCompletionHandler(_: JSValue)
	// jsvalue - @objc func sendMessage(_: NSURLSessionWebSocketMessage, completionHandler: JSValue)
	// jsvalue - @objc func sendPingWithPongReceiveHandler(_: JSValue)

	// Own Instance Properties
	@objc var closeCode: URLSessionWebSocketTask.CloseCode { @objc get }
	@objc var closeReason: Data? { @objc get }
	@objc var maximumMessageSize: Int { @objc get @objc (setMaximumMessageSize:) set }

}

extension URLSessionWebSocketTask: URLSessionWebSocketTaskExports {
}
