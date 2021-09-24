import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSPurgeableDataExports: JSExport, NSMutableDataExports {
	// , NSDiscardableContentExports
	// Static Methods
}

extension NSPurgeableData: NSPurgeableDataExports {}
