import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit

@objc protocol NSPathCellExports: JSExport, NSActionCellExports {
	// , NSMenuItemValidationExports, NSOpenSavePanelDelegateExports
	// Static Methods

	// Own Static Properties
	@objc static var pathComponentCellClass: AnyClass { @objc get }

	// Instance Methods
	@objc (mouseEntered:withFrame:inView:) func mouseEntered(with: NSEvent, frame: NSRect, in: NSView)
	@objc (mouseExited:withFrame:inView:) func mouseExited(with: NSEvent, frame: NSRect, in: NSView)
	@objc (pathComponentCellAtPoint:withFrame:inView:) func pathComponentCell(at: NSPoint, withFrame: NSRect, in: NSView) -> NSPathComponentCell?
	@objc (rectOfPathComponentCell:withFrame:inView:) func rect(of: NSPathComponentCell, withFrame: NSRect, in: NSView) -> NSRect
	@objc func setObjectValue(_ obj: NSCopying?)

	// Own Instance Properties
	@objc (URL) var url: URL? { get set }
	@objc var allowedTypes: [String]? { @objc get @objc (setAllowedTypes:) set }
	@objc var backgroundColor: NSColor? { @objc get @objc (setBackgroundColor:) set }
	@objc var clickedPathComponentCell: NSPathComponentCell? { @objc get }
	@objc var delegate: NSPathCellDelegate? { @objc get @objc (setDelegate:) set }
	@objc var doubleAction: Selector? { @objc get @objc (setDoubleAction:) set }
	@objc var pathComponentCells: [NSPathComponentCell] { @objc get @objc (setPathComponentCells:) set }
	@objc var pathStyle: NSPathControl.Style { @objc get @objc (setPathStyle:) set }
	@objc var placeholderAttributedString: NSAttributedString? { @objc get @objc (setPlaceholderAttributedString:) set }
	@objc var placeholderString: String? { @objc get @objc (setPlaceholderString:) set }

	// Constructors
}

extension NSPathCell: NSPathCellExports {
}
