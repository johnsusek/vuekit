import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSAnimationExports: JSExport {
	// , NSCodingExports, NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc func addProgressMark(_: NSAnimation.Progress)
	@objc (clearStartAnimation) func clearStart()
	@objc (clearStopAnimation) func clearStop()
	@objc func removeProgressMark(_: NSAnimation.Progress)
	@objc (startAnimation) func start()
	@objc (startWhenAnimation:reachesProgress:) func start(when: NSAnimation, reachesProgress: NSAnimation.Progress)
	@objc (stopAnimation) func stop()
	@objc (stopWhenAnimation:reachesProgress:) func stop(when: NSAnimation, reachesProgress: NSAnimation.Progress)

	// Own Instance Properties
	@objc var isAnimating: Bool { @objc get }
	@objc var animationBlockingMode: NSAnimation.BlockingMode { @objc get @objc (setAnimationBlockingMode:) set }
	@objc var animationCurve: NSAnimation.Curve { @objc get @objc (setAnimationCurve:) set }
	@objc var currentProgress: NSAnimation.Progress { @objc get @objc (setCurrentProgress:) set }
	@objc var currentValue: Float { @objc get }
	@objc var delegate: NSAnimationDelegate? { @objc get @objc (setDelegate:) set }
	@objc var duration: TimeInterval { @objc get @objc (setDuration:) set }
	@objc var frameRate: Float { @objc get @objc (setFrameRate:) set }
	@objc var progressMarks: [NSNumber] { @objc get @objc (setProgressMarks:) set }
	@objc var runLoopModesForAnimating: [RunLoop.Mode]? { get }

	// Constructors
	@objc static func create(duration: TimeInterval, animationCurve: NSAnimation.Curve) -> NSAnimation
}

extension NSAnimation: NSAnimationExports {
	@objc class func create(duration: TimeInterval, animationCurve: NSAnimation.Curve) -> NSAnimation {
		return NSAnimation(duration: duration, animationCurve: animationCurve)
	}

}
