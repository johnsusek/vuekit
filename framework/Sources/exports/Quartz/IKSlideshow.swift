import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol IKSlideshowExports: JSExport {
	// Static Methods
	@objc (canExportToApplication:) static func canExport(toApplication: String) -> Bool
	@objc (exportSlideshowItem:toApplication:) static func exportItem(_: Any, toApplication: String)
	@objc (sharedSlideshow) static func shared() -> IKSlideshow

	// Instance Methods
	@objc func indexOfCurrentSlideshowItem() -> Int
	@objc func reloadData()
	@objc (reloadSlideshowItemAtIndex:) func reloadItem(at: Int)
	@objc (runSlideshowWithDataSource:inMode:options:) func run(with: IKSlideshowDataSource, inMode: String, options: [AnyHashable: Any])
	@objc (stopSlideshow:) func stop(_: Any)

	// Own Instance Properties
	@objc var autoPlayDelay: TimeInterval { @objc get @objc (setAutoPlayDelay:) set }

	// Constructors
}

extension IKSlideshow: IKSlideshowExports {
}
