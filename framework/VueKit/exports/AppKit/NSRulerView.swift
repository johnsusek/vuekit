import AppKit
import JavaScriptCore

@objc protocol NSRulerViewExports: JSExport {
	@objc (registerUnitWithName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:) static func registerUnit(withName: NSRulerView.UnitName, abbreviation: String, unitToPointsConversionFactor: CGFloat, stepUpCycle: [NSNumber], stepDownCycle: [NSNumber])
	@objc var accessoryView: NSView? { @objc get @objc (setAccessoryView:) set }
	@objc var baselineLocation: CGFloat { @objc get }
	@objc var clientView: NSView? { @objc get @objc (setClientView:) set }
	@objc var markers: [NSRulerMarker]? { @objc get @objc (setMarkers:) set }
	@objc var measurementUnits: NSRulerView.UnitName { @objc get @objc (setMeasurementUnits:) set }
	@objc var orientation: NSRulerView.Orientation { @objc get @objc (setOrientation:) set }
	@objc var originOffset: CGFloat { @objc get @objc (setOriginOffset:) set }
	@objc var requiredThickness: CGFloat { @objc get }
	@objc var reservedThicknessForAccessoryView: CGFloat { @objc get @objc (setReservedThicknessForAccessoryView:) set }
	@objc var reservedThicknessForMarkers: CGFloat { @objc get @objc (setReservedThicknessForMarkers:) set }
	@objc var ruleThickness: CGFloat { @objc get @objc (setRuleThickness:) set }
	@objc var scrollView: NSScrollView? { @objc get @objc (setScrollView:) set }
	@objc func addMarker(_: NSRulerMarker)
	@objc (drawHashMarksAndLabelsInRect:) func drawHashMarksAndLabels(in: NSRect)
	@objc (drawMarkersInRect:) func drawMarkers(in: NSRect)
	@objc func invalidateHashMarks()
	@objc (moveRulerlineFromLocation:toLocation:) func moveRulerline(fromLocation: CGFloat, toLocation: CGFloat)
	@objc func removeMarker(_: NSRulerMarker)
	@objc func trackMarker(_: NSRulerMarker, withMouseEvent: NSEvent) -> Bool
	@objc static func create(scrollView: NSScrollView?, orientation: NSRulerView.Orientation) -> RulerView
	@objc static func create() -> RulerView
}

class RulerView: NSRulerView, NSRulerViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create(scrollView: NSScrollView?, orientation: NSRulerView.Orientation) -> RulerView {
		return RulerView(scrollView: scrollView, orientation: orientation)
	}

	@objc override class func create() -> RulerView {
		return RulerView()
	}
}
