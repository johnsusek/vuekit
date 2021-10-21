import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSFilePromiseProviderDelegateExports: JSExport, NSObjectExports {
  // jsvalue - @objc (filePromiseProvider:writePromiseToURL:completionHandler:) func filePromiseProvider(_: NSFilePromiseProvider, writePromiseTo: NSURL, completionHandler: JSValue)
  @objc func filePromiseProvider(_: NSFilePromiseProvider, fileNameForType: String) -> String
  @objc (operationQueueForFilePromiseProvider:) func operationQueue(`for`: NSFilePromiseProvider) -> OperationQueue
}

