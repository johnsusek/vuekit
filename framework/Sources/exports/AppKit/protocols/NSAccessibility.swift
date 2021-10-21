import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSAccessibilityExports: JSExport, NSObjectExports {
  var accessibilityActivationPoint: NSPoint { @objc get @objc (setAccessibilityActivationPoint:) set }
  var accessibilityAllowedValues: [NSNumber]? { @objc get @objc (setAccessibilityAllowedValues:) set }
  var isAccessibilityAlternateUIVisible: Bool { @objc (isAccessibilityAlternateUIVisible) get @objc (setAccessibilityAlternateUIVisible:) set }
  var accessibilityApplicationFocusedUIElement: Any? { @objc get @objc (setAccessibilityApplicationFocusedUIElement:) set }
  var accessibilityCancelButton: Any? { @objc get @objc (setAccessibilityCancelButton:) set }
  var accessibilityChildren: [Any]? { @objc get @objc (setAccessibilityChildren:) set }
  var accessibilityChildrenInNavigationOrder: [NSAccessibilityElementProtocol]? { @objc get @objc (setAccessibilityChildrenInNavigationOrder:) set }
  var accessibilityClearButton: Any? { @objc get @objc (setAccessibilityClearButton:) set }
  var accessibilityCloseButton: Any? { @objc get @objc (setAccessibilityCloseButton:) set }
  var accessibilityColumnCount: Int { @objc get @objc (setAccessibilityColumnCount:) set }
  var accessibilityColumnHeaderUIElements: [Any]? { @objc get @objc (setAccessibilityColumnHeaderUIElements:) set }
  var accessibilityColumnIndexRange: NSRange { @objc get @objc (setAccessibilityColumnIndexRange:) set }
  var accessibilityColumns: [Any]? { @objc get @objc (setAccessibilityColumns:) set }
  var accessibilityColumnTitles: [Any]? { @objc get @objc (setAccessibilityColumnTitles:) set }
  var accessibilityContents: [Any]? { @objc get @objc (setAccessibilityContents:) set }
  var accessibilityCriticalValue: Any? { @objc get @objc (setAccessibilityCriticalValue:) set }
  var accessibilityCustomActions: [NSAccessibilityCustomAction]? { @objc get @objc (setAccessibilityCustomActions:) set }
  var accessibilityCustomRotors: [NSAccessibilityCustomRotor] { @objc get @objc (setAccessibilityCustomRotors:) set }
  var accessibilityDecrementButton: Any? { @objc get @objc (setAccessibilityDecrementButton:) set }
  var accessibilityDefaultButton: Any? { @objc get @objc (setAccessibilityDefaultButton:) set }
  var isAccessibilityDisclosed: Bool { @objc (isAccessibilityDisclosed) get @objc (setAccessibilityDisclosed:) set }
  var accessibilityDisclosedByRow: Any? { @objc get @objc (setAccessibilityDisclosedByRow:) set }
  var accessibilityDisclosedRows: Any? { @objc get @objc (setAccessibilityDisclosedRows:) set }
  var accessibilityDisclosureLevel: Int { @objc get @objc (setAccessibilityDisclosureLevel:) set }
  var accessibilityDocument: String? { @objc get @objc (setAccessibilityDocument:) set }
  var isAccessibilityEdited: Bool { @objc (isAccessibilityEdited) get @objc (setAccessibilityEdited:) set }
  var isAccessibilityElement: Bool { @objc (isAccessibilityElement) get @objc (setAccessibilityElement:) set }
  var isAccessibilityEnabled: Bool { @objc (isAccessibilityEnabled) get @objc (setAccessibilityEnabled:) set }
  var isAccessibilityExpanded: Bool { @objc (isAccessibilityExpanded) get @objc (setAccessibilityExpanded:) set }
  var accessibilityExtrasMenuBar: Any? { @objc get @objc (setAccessibilityExtrasMenuBar:) set }
  var accessibilityFilename: String? { @objc get @objc (setAccessibilityFilename:) set }
  var isAccessibilityFocused: Bool { @objc (isAccessibilityFocused) get @objc (setAccessibilityFocused:) set }
  var accessibilityFocusedWindow: Any? { @objc get @objc (setAccessibilityFocusedWindow:) set }
  var accessibilityFrame: NSRect { @objc get @objc (setAccessibilityFrame:) set }
  var isAccessibilityFrontmost: Bool { @objc (isAccessibilityFrontmost) get @objc (setAccessibilityFrontmost:) set }
  var accessibilityFullScreenButton: Any? { @objc get @objc (setAccessibilityFullScreenButton:) set }
  var accessibilityGrowArea: Any? { @objc get @objc (setAccessibilityGrowArea:) set }
  var accessibilityHandles: [Any]? { @objc get @objc (setAccessibilityHandles:) set }
  var accessibilityHeader: Any? { @objc get @objc (setAccessibilityHeader:) set }
  var accessibilityHelp: String? { @objc get @objc (setAccessibilityHelp:) set }
  var isAccessibilityHidden: Bool { @objc (isAccessibilityHidden) get @objc (setAccessibilityHidden:) set }
  var accessibilityHorizontalScrollBar: Any? { @objc get @objc (setAccessibilityHorizontalScrollBar:) set }
  var accessibilityHorizontalUnitDescription: String? { @objc get @objc (setAccessibilityHorizontalUnitDescription:) set }
  var accessibilityHorizontalUnits: NSAccessibilityUnits { @objc get @objc (setAccessibilityHorizontalUnits:) set }
  var accessibilityIdentifier: String? { @objc get @objc (setAccessibilityIdentifier:) set }
  var accessibilityIncrementButton: Any? { @objc get @objc (setAccessibilityIncrementButton:) set }
  var accessibilityIndex: Int { @objc get @objc (setAccessibilityIndex:) set }
  var accessibilityInsertionPointLineNumber: Int { @objc get @objc (setAccessibilityInsertionPointLineNumber:) set }
  var accessibilityLabel: String? { @objc get @objc (setAccessibilityLabel:) set }
  var accessibilityLabelUIElements: [Any]? { @objc get @objc (setAccessibilityLabelUIElements:) set }
  var accessibilityLabelValue: Float { @objc get @objc (setAccessibilityLabelValue:) set }
  var accessibilityLinkedUIElements: [Any]? { @objc get @objc (setAccessibilityLinkedUIElements:) set }
  var isAccessibilityMain: Bool { @objc (isAccessibilityMain) get @objc (setAccessibilityMain:) set }
  var accessibilityMainWindow: Any? { @objc get @objc (setAccessibilityMainWindow:) set }
  var accessibilityMarkerGroupUIElement: Any? { @objc get @objc (setAccessibilityMarkerGroupUIElement:) set }
  var accessibilityMarkerTypeDescription: String? { @objc get @objc (setAccessibilityMarkerTypeDescription:) set }
  var accessibilityMarkerUIElements: [Any]? { @objc get @objc (setAccessibilityMarkerUIElements:) set }
  var accessibilityMarkerValues: Any? { @objc get @objc (setAccessibilityMarkerValues:) set }
  var accessibilityMaxValue: Any? { @objc get @objc (setAccessibilityMaxValue:) set }
  var accessibilityMenuBar: Any? { @objc get @objc (setAccessibilityMenuBar:) set }
  var accessibilityMinimizeButton: Any? { @objc get @objc (setAccessibilityMinimizeButton:) set }
  var isAccessibilityMinimized: Bool { @objc (isAccessibilityMinimized) get @objc (setAccessibilityMinimized:) set }
  var accessibilityMinValue: Any? { @objc get @objc (setAccessibilityMinValue:) set }
  var isAccessibilityModal: Bool { @objc (isAccessibilityModal) get @objc (setAccessibilityModal:) set }
  var accessibilityNextContents: [Any]? { @objc get @objc (setAccessibilityNextContents:) set }
  var accessibilityNumberOfCharacters: Int { @objc get @objc (setAccessibilityNumberOfCharacters:) set }
  var isAccessibilityOrderedByRow: Bool { @objc (isAccessibilityOrderedByRow) get @objc (setAccessibilityOrderedByRow:) set }
  var accessibilityOrientation: NSAccessibilityOrientation { @objc get @objc (setAccessibilityOrientation:) set }
  var accessibilityOverflowButton: Any? { @objc get @objc (setAccessibilityOverflowButton:) set }
  var accessibilityParent: Any? { @objc get @objc (setAccessibilityParent:) set }
  var accessibilityPlaceholderValue: String? { @objc get @objc (setAccessibilityPlaceholderValue:) set }
  var accessibilityPreviousContents: [Any]? { @objc get @objc (setAccessibilityPreviousContents:) set }
  var isAccessibilityProtectedContent: Bool { @objc (isAccessibilityProtectedContent) get @objc (setAccessibilityProtectedContent:) set }
  var accessibilityProxy: Any? { @objc get @objc (setAccessibilityProxy:) set }
  var isAccessibilityRequired: Bool { @objc (isAccessibilityRequired) get @objc (setAccessibilityRequired:) set }
  var accessibilityRole: NSAccessibility.Role? { @objc get @objc (setAccessibilityRole:) set }
  var accessibilityRoleDescription: String? { @objc get @objc (setAccessibilityRoleDescription:) set }
  var accessibilityRowCount: Int { @objc get @objc (setAccessibilityRowCount:) set }
  var accessibilityRowHeaderUIElements: [Any]? { @objc get @objc (setAccessibilityRowHeaderUIElements:) set }
  var accessibilityRowIndexRange: NSRange { @objc get @objc (setAccessibilityRowIndexRange:) set }
  var accessibilityRows: [Any]? { @objc get @objc (setAccessibilityRows:) set }
  var accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType { @objc get @objc (setAccessibilityRulerMarkerType:) set }
  var accessibilitySearchButton: Any? { @objc get @objc (setAccessibilitySearchButton:) set }
  var accessibilitySearchMenu: Any? { @objc get @objc (setAccessibilitySearchMenu:) set }
  var isAccessibilitySelected: Bool { @objc (isAccessibilitySelected) get @objc (setAccessibilitySelected:) set }
  var accessibilitySelectedCells: [Any]? { @objc get @objc (setAccessibilitySelectedCells:) set }
  var accessibilitySelectedChildren: [Any]? { @objc get @objc (setAccessibilitySelectedChildren:) set }
  var accessibilitySelectedColumns: [Any]? { @objc get @objc (setAccessibilitySelectedColumns:) set }
  var accessibilitySelectedRows: [Any]? { @objc get @objc (setAccessibilitySelectedRows:) set }
  var accessibilitySelectedText: String? { @objc get @objc (setAccessibilitySelectedText:) set }
  var accessibilitySelectedTextRange: NSRange { @objc get @objc (setAccessibilitySelectedTextRange:) set }
  var accessibilitySelectedTextRanges: [NSValue]? { @objc get @objc (setAccessibilitySelectedTextRanges:) set }
  var accessibilityServesAsTitleForUIElements: [Any]? { @objc get @objc (setAccessibilityServesAsTitleForUIElements:) set }
  var accessibilitySharedCharacterRange: NSRange { @objc get @objc (setAccessibilitySharedCharacterRange:) set }
  var accessibilitySharedFocusElements: [Any]? { @objc get @objc (setAccessibilitySharedFocusElements:) set }
  var accessibilitySharedTextUIElements: [Any]? { @objc get @objc (setAccessibilitySharedTextUIElements:) set }
  var accessibilityShownMenu: Any? { @objc get @objc (setAccessibilityShownMenu:) set }
  var accessibilitySortDirection: NSAccessibilitySortDirection { @objc get @objc (setAccessibilitySortDirection:) set }
  var accessibilitySplitters: [Any]? { @objc get @objc (setAccessibilitySplitters:) set }
  var accessibilitySubrole: NSAccessibility.Subrole? { @objc get @objc (setAccessibilitySubrole:) set }
  var accessibilityTabs: [Any]? { @objc get @objc (setAccessibilityTabs:) set }
  var accessibilityTitle: String? { @objc get @objc (setAccessibilityTitle:) set }
  var accessibilityTitleUIElement: Any? { @objc get @objc (setAccessibilityTitleUIElement:) set }
  var accessibilityToolbarButton: Any? { @objc get @objc (setAccessibilityToolbarButton:) set }
  var accessibilityTopLevelUIElement: Any? { @objc get @objc (setAccessibilityTopLevelUIElement:) set }
  var accessibilityUnitDescription: String? { @objc get @objc (setAccessibilityUnitDescription:) set }
  var accessibilityUnits: NSAccessibilityUnits { @objc get @objc (setAccessibilityUnits:) set }
  var accessibilityURL: NSURL? { @objc get @objc (setAccessibilityURL:) set }
  var accessibilityValue: Any? { @objc get @objc (setAccessibilityValue:) set }
  var accessibilityValueDescription: String? { @objc get @objc (setAccessibilityValueDescription:) set }
  var accessibilityVerticalScrollBar: Any? { @objc get @objc (setAccessibilityVerticalScrollBar:) set }
  var accessibilityVerticalUnitDescription: String? { @objc get @objc (setAccessibilityVerticalUnitDescription:) set }
  var accessibilityVerticalUnits: NSAccessibilityUnits { @objc get @objc (setAccessibilityVerticalUnits:) set }
  var accessibilityVisibleCells: [Any]? { @objc get @objc (setAccessibilityVisibleCells:) set }
  var accessibilityVisibleCharacterRange: NSRange { @objc get @objc (setAccessibilityVisibleCharacterRange:) set }
  var accessibilityVisibleChildren: [Any]? { @objc get @objc (setAccessibilityVisibleChildren:) set }
  var accessibilityVisibleColumns: [Any]? { @objc get @objc (setAccessibilityVisibleColumns:) set }
  var accessibilityVisibleRows: [Any]? { @objc get @objc (setAccessibilityVisibleRows:) set }
  var accessibilityWarningValue: Any? { @objc get @objc (setAccessibilityWarningValue:) set }
  var accessibilityWindow: Any? { @objc get @objc (setAccessibilityWindow:) set }
  var accessibilityWindows: [Any]? { @objc get @objc (setAccessibilityWindows:) set }
  var accessibilityZoomButton: Any? { @objc get @objc (setAccessibilityZoomButton:) set }
  @objc @available(OSX 10.10, *) func accessibilityAttributedStringForRange(_: NSRange) -> NSAttributedString?
  @objc @available(OSX 10.10, *) func accessibilityCellForColumn(_: Int, row: Int) -> Any?
  @objc @available(OSX 10.10, *) func accessibilityFrameForRange(_: NSRange) -> NSRect
  @objc @available(OSX 10.10, *) func accessibilityLayoutPointForScreenPoint(_: NSPoint) -> NSPoint
  @objc @available(OSX 10.10, *) func accessibilityLayoutSizeForScreenSize(_: NSSize) -> NSSize
  @objc @available(OSX 10.10, *) func accessibilityLineForIndex(_: Int) -> Int
  @objc @available(OSX 10.10, *) func accessibilityPerformCancel() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityPerformConfirm() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityPerformDecrement() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityPerformDelete() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityPerformIncrement() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityPerformPick() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityPerformPress() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityPerformRaise() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityPerformShowAlternateUI() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityPerformShowDefaultUI() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityPerformShowMenu() -> Bool
  @objc @available(OSX 10.10, *) func accessibilityRangeForIndex(_: Int) -> NSRange
  @objc @available(OSX 10.10, *) func accessibilityRangeForLine(_: Int) -> NSRange
  @objc @available(OSX 10.10, *) func accessibilityRangeForPosition(_: NSPoint) -> NSRange
  @objc @available(OSX 10.10, *) func accessibilityRTFForRange(_: NSRange) -> Data?
  @objc @available(OSX 10.10, *) func accessibilityScreenPointForLayoutPoint(_: NSPoint) -> NSPoint
  @objc @available(OSX 10.10, *) func accessibilityScreenSizeForLayoutSize(_: NSSize) -> NSSize
  @objc @available(OSX 10.10, *) func accessibilityStringForRange(_: NSRange) -> String?
  @objc @available(OSX 10.10, *) func accessibilityStyleRangeForIndex(_: Int) -> NSRange
  @objc @available(OSX 10.10, *) func isAccessibilitySelectorAllowed(_: Selector) -> Bool
}

