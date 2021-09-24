import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSegmentedControlExports: JSExport, NSControlExports {
	// , NSUserInterfaceCompressionExports
	// Static Methods

	// Instance Methods
	@objc (alignmentForSegment:) @available(OSX 10.13, *) func alignment(forSegment: Int) -> NSTextAlignment
	@objc (imageForSegment:) func image(forSegment: Int) -> NSImage?
	@objc (imageScalingForSegment:) @available(OSX 10.5, *) func imageScaling(forSegment: Int) -> NSImageScaling
	@objc (isEnabledForSegment:) func isEnabled(forSegment: Int) -> Bool
	@objc (isSelectedForSegment:) func isSelected(forSegment: Int) -> Bool
	@objc (labelForSegment:) func label(forSegment: Int) -> String?
	@objc (menuForSegment:) func menu(forSegment: Int) -> NSMenu?
	@objc (selectSegmentWithTag:) func selectSegment(withTag: Int) -> Bool
	@objc @available(OSX 10.13, *) func setAlignment(_: NSTextAlignment, forSegment: Int)
	@objc func setEnabled(_: Bool, forSegment: Int)
	@objc func setImage(_: NSImage?, forSegment: Int)
	@objc @available(OSX 10.5, *) func setImageScaling(_: NSImageScaling, forSegment: Int)
	@objc func setLabel(_: String, forSegment: Int)
	@objc func setMenu(_: NSMenu?, forSegment: Int)
	@objc func setSelected(_: Bool, forSegment: Int)
	@objc @available(OSX 10.13, *) func setShowsMenuIndicator(_: Bool, forSegment: Int)
	@objc @available(OSX 10.13, *) func setTag(_: Int, forSegment: Int)
	@objc @available(OSX 10.13, *) func setToolTip(_: String?, forSegment: Int)
	@objc func setWidth(_ width: CGFloat, forSegment segment: Int)
	@objc (showsMenuIndicatorForSegment:) @available(OSX 10.13, *) func showsMenuIndicator(forSegment: Int) -> Bool
	@objc (tagForSegment:) @available(OSX 10.13, *) func tag(forSegment: Int) -> Int
	@objc (toolTipForSegment:) @available(OSX 10.13, *) func toolTip(forSegment: Int) -> String?
	@objc (widthForSegment:) func width(forSegment: Int) -> CGFloat

	// Own Instance Properties
	@objc @available(OSX 10.10.3, *) var doubleValueForSelectedSegment: Double { @objc get }
	@objc @available(OSX 10.4, *) var indexOfSelectedItem: Int { @objc get }
	@objc var segmentCount: Int { @objc get @objc (setSegmentCount:) set }
	@objc @available(OSX 10.13, *) var segmentDistribution: NSSegmentedControl.Distribution { @objc get @objc (setSegmentDistribution:) set }
	@objc @available(OSX 10.5, *) var segmentStyle: NSSegmentedControl.Style { @objc get @objc (setSegmentStyle:) set }
	@objc var selectedSegment: Int { @objc get @objc (setSelectedSegment:) set }
	@objc @available(OSX 10.12.2, *) var selectedSegmentBezelColor: NSColor? { @objc get @objc (setSelectedSegmentBezelColor:) set }
	@objc @available(OSX 10.10.3, *) var isSpringLoaded: Bool { @objc get @objc (setSpringLoaded:) set }
	@objc @available(OSX 10.10.3, *) var trackingMode: NSSegmentedControl.SwitchTracking { @objc get @objc (setTrackingMode:) set }
}

@objc protocol SegmentedControlExports: JSExport, NSControlExports {
	// Constructors
	@objc static func create() -> SegmentedControl
}

class SegmentedControl: NSSegmentedControl, SegmentedControlExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> SegmentedControl {
		return SegmentedControl()
	}

}

extension NSSegmentedControl: NSSegmentedControlExports {}
