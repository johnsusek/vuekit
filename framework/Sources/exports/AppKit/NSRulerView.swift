import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSRulerViewExports: JSExport, NSViewExports {
	// Static Methods
	@objc (registerUnitWithName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:) static func registerUnit(withName unitName: NSRulerView.UnitName, abbreviation: String, unitToPointsConversionFactor conversionFactor: CGFloat, stepUpCycle: [NSNumber], stepDownCycle: [NSNumber])

	// Instance Methods
	@objc func addMarker(_: NSRulerMarker)
	@objc (drawHashMarksAndLabelsInRect:) func drawHashMarksAndLabels(in: NSRect)
	@objc (drawMarkersInRect:) func drawMarkers(in: NSRect)
	@objc func invalidateHashMarks()
	@objc (moveRulerlineFromLocation:toLocation:) func moveRulerline(fromLocation oldLocation: CGFloat, toLocation newLocation: CGFloat)
	@objc func removeMarker(_: NSRulerMarker)
	@objc func trackMarker(_: NSRulerMarker, withMouseEvent: NSEvent) -> Bool

	// Own Instance Properties
	@objc var accessoryView: NSView? { @objc get @objc (setAccessoryView:) set }
	@objc var baselineLocation: CGFloat { get }
	@objc var clientView: NSView? { @objc get @objc (setClientView:) set }
	@objc var markers: [NSRulerMarker]? { @objc get @objc (setMarkers:) set }
	@objc var measurementUnits: NSRulerView.UnitName { @objc get @objc (setMeasurementUnits:) set }
	@objc var orientation: NSRulerView.Orientation { @objc get @objc (setOrientation:) set }
	@objc var originOffset: CGFloat { get set }
	@objc var requiredThickness: CGFloat { get }
	@objc var reservedThicknessForAccessoryView: CGFloat { get set }
	@objc var reservedThicknessForMarkers: CGFloat { get set }
	@objc var ruleThickness: CGFloat { get set }
	@objc var scrollView: NSScrollView? { @objc get @objc (setScrollView:) set }
}

@objc protocol RulerViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> RulerView
	@objc static func create(scrollView: NSScrollView?, orientation: NSRulerView.Orientation) -> RulerView
}

class RulerView: NSRulerView, RulerViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> RulerView {
		return RulerView()
	}

	@objc class func create(scrollView: NSScrollView?, orientation: NSRulerView.Orientation) -> RulerView {
		return RulerView(scrollView: scrollView, orientation: orientation)
	}

}

extension NSRulerView: NSRulerViewExports {}
