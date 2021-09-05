import AppKit
import JavaScriptCore

@objc protocol NSSegmentedCellExports: JSExport {
	@objc var segmentCount: Int { @objc get @objc (setSegmentCount:) set }
	@objc @available(OSX 10.5, *) var segmentStyle: NSSegmentedControl.Style { @objc get @objc (setSegmentStyle:) set }
	@objc var selectedSegment: Int { @objc get @objc (setSelectedSegment:) set }
	@objc var trackingMode: NSSegmentedControl.SwitchTracking { @objc get @objc (setTrackingMode:) set }
	@objc (drawSegment:inFrame:withView:) func drawSegment(_: Int, inFrame: NSRect, with: NSView)
	@objc (imageForSegment:) func image(forSegment: Int) -> NSImage?
	@objc (imageScalingForSegment:) @available(OSX 10.5, *) func imageScaling(forSegment: Int) -> NSImageScaling
	@objc (interiorBackgroundStyleForSegment:) @available(OSX 10.5, *) func interiorBackgroundStyle(forSegment: Int) -> NSView.BackgroundStyle
	@objc (isEnabledForSegment:) func isEnabled(forSegment: Int) -> Bool
	@objc (isSelectedForSegment:) func isSelected(forSegment: Int) -> Bool
	@objc (labelForSegment:) func label(forSegment: Int) -> String?
	@objc func makeNextSegmentKey()
	@objc func makePreviousSegmentKey()
	@objc (menuForSegment:) func menu(forSegment: Int) -> NSMenu?
	@objc (selectSegmentWithTag:) func selectSegment(withTag: Int) -> Bool
	@objc func setEnabled(_: Bool, forSegment: Int)
	@objc func setImage(_: NSImage?, forSegment: Int)
	@objc @available(OSX 10.5, *) func setImageScaling(_: NSImageScaling, forSegment: Int)
	@objc func setLabel(_: String, forSegment: Int)
	@objc func setMenu(_: NSMenu?, forSegment: Int)
	@objc func setSelected(_: Bool, forSegment: Int)
	@objc func setTag(_: Int, forSegment: Int)
	@objc func setToolTip(_: String?, forSegment: Int)
	@objc func setWidth(_: CGFloat, forSegment: Int)
	@objc (tagForSegment:) func tag(forSegment: Int) -> Int
	@objc (toolTipForSegment:) func toolTip(forSegment: Int) -> String?
	@objc (widthForSegment:) func width(forSegment: Int) -> CGFloat
}

extension NSSegmentedCell: NSSegmentedCellExports {
	@objc override class func create() -> NSSegmentedCell {
		return NSSegmentedCell()
	}
}
