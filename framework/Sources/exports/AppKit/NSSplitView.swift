import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSSplitViewExports: JSExport, NSViewExports {
	// Static Methods

	// Instance Methods
	@objc @available(OSX 10.11, *) func addArrangedSubview(_: NSView)
	@objc func adjustSubviews()
	@objc (drawDividerInRect:) func drawDivider(in: NSRect)
	@objc (holdingPriorityForSubviewAtIndex:) @available(OSX 10.8, *) func holdingPriorityForSubview(at: Int) -> NSLayoutConstraint.Priority
	@objc (insertArrangedSubview:atIndex:) @available(OSX 10.11, *) func insertArrangedSubview(_: NSView, at: Int)
	@objc func isSubviewCollapsed(_: NSView) -> Bool
	@objc (maxPossiblePositionOfDividerAtIndex:) @available(OSX 10.5, *) func maxPossiblePositionOfDivider(at: Int) -> CGFloat
	@objc (minPossiblePositionOfDividerAtIndex:) @available(OSX 10.5, *) func minPossiblePositionOfDivider(at: Int) -> CGFloat
	@objc @available(OSX 10.11, *) func removeArrangedSubview(_: NSView)
	@objc (setHoldingPriority:forSubviewAtIndex:) @available(OSX 10.8, *) func setHoldingPriority(_: NSLayoutConstraint.Priority, forSubviewAt: Int)
	@objc (setPosition:ofDividerAtIndex:) @available(OSX 10.5, *) func setPosition(_ position: CGFloat, ofDividerAt dividerIndex: Int)

	// Own Instance Properties
	@objc @available(OSX 10.11, *) var arrangedSubviews: [NSView] { @objc get }
	@objc @available(OSX 10.11, *) var arrangesAllSubviews: Bool { @objc get @objc (setArrangesAllSubviews:) set }
	@objc @available(OSX 10.5, *) var autosaveName: NSSplitView.AutosaveName? { @objc get @objc (setAutosaveName:) set }
	@objc var delegate: NSSplitViewDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.5, *) var dividerColor: NSColor { @objc get }
	@objc @available(OSX 10.5, *) var dividerStyle: NSSplitView.DividerStyle { @objc get @objc (setDividerStyle:) set }
	@objc var dividerThickness: CGFloat { get }
	@objc var isVertical: Bool { @objc get @objc (setVertical:) set }
}

@objc protocol SplitViewExports: JSExport, NSViewExports {
	// Constructors
	@objc static func create() -> SplitView
}

class SplitView: NSSplitView, SplitViewExports, JSOverridable {
  var draw: JSValue?
  
  override func draw(_ dirtyRect: NSRect) {
    super.draw(dirtyRect)
    drawOverride(dirtyRect)
  }

	@objc class func create() -> SplitView {
		return SplitView()
	}

}

extension NSSplitView: NSSplitViewExports {}
