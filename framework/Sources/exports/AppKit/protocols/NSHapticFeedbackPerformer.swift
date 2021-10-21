import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSHapticFeedbackPerformerExports: JSExport, NSObjectExports {
  @objc (performFeedbackPattern:performanceTime:) func perform(_: NSHapticFeedbackManager.FeedbackPattern, performanceTime: NSHapticFeedbackManager.PerformanceTime)
}

