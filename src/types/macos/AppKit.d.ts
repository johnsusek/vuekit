
declare class NSATSTypesetter extends NSTypesetter {

	static sharedTypesetter(): NSATSTypesetter;
}

declare var NSAbortModalException: string;

declare var NSAbortPrintingException: string;

declare var NSAboutPanelOptionApplicationIcon: string;

declare var NSAboutPanelOptionApplicationName: string;

declare var NSAboutPanelOptionApplicationVersion: string;

declare var NSAboutPanelOptionCredits: string;

declare var NSAboutPanelOptionVersion: string;

interface NSAccessibility extends NSObjectProtocol {

	setAccessibilityActivationPoint(_: CGPoint)

	accessibilityActivationPoint: CGPoint;

	setAccessibilityAllowedValues(_: NSArray<number>)

	accessibilityAllowedValues: NSArray<number>;

	setAccessibilityAlternateUIVisible(_: boolean)

	isAccessibilityAlternateUIVisible: boolean;

	setAccessibilityApplicationFocusedUIElement(_: any)

	accessibilityApplicationFocusedUIElement: any;

	setAccessibilityCancelButton(_: any)

	accessibilityCancelButton: any;

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>;

	setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)

	accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;

	setAccessibilityClearButton(_: any)

	accessibilityClearButton: any;

	setAccessibilityCloseButton(_: any)

	accessibilityCloseButton: any;

	setAccessibilityColumnCount(_: number)

	accessibilityColumnCount: number;

	setAccessibilityColumnHeaderUIElements(_: NSArray<any>)

	accessibilityColumnHeaderUIElements: NSArray<any>;

	setAccessibilityColumnIndexRange(_: NSRange)

	accessibilityColumnIndexRange: NSRange;

	setAccessibilityColumns(_: NSArray<any>)

	accessibilityColumns: NSArray<any>;

	setAccessibilityColumnTitles(_: NSArray<any>)

	accessibilityColumnTitles: NSArray<any>;

	setAccessibilityContents(_: NSArray<any>)

	accessibilityContents: NSArray<any>;

	setAccessibilityCriticalValue(_: any)

	accessibilityCriticalValue: any;

	setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)

	accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;

	setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)

	accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;

	setAccessibilityDecrementButton(_: any)

	accessibilityDecrementButton: any;

	setAccessibilityDefaultButton(_: any)

	accessibilityDefaultButton: any;

	setAccessibilityDisclosed(_: boolean)

	isAccessibilityDisclosed: boolean;

	setAccessibilityDisclosedByRow(_: any)

	accessibilityDisclosedByRow: any;

	setAccessibilityDisclosedRows(_: any)

	accessibilityDisclosedRows: any;

	setAccessibilityDisclosureLevel(_: number)

	accessibilityDisclosureLevel: number;

	setAccessibilityDocument(_: string)

	accessibilityDocument: string;

	setAccessibilityEdited(_: boolean)

	isAccessibilityEdited: boolean;

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean;

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean;

	setAccessibilityExpanded(_: boolean)

	isAccessibilityExpanded: boolean;

	setAccessibilityExtrasMenuBar(_: any)

	accessibilityExtrasMenuBar: any;

	setAccessibilityFilename(_: string)

	accessibilityFilename: string;

	setAccessibilityFocused(_: boolean)

	isAccessibilityFocused: boolean;

	setAccessibilityFocusedWindow(_: any)

	accessibilityFocusedWindow: any;

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect;

	setAccessibilityFrontmost(_: boolean)

	isAccessibilityFrontmost: boolean;

	setAccessibilityFullScreenButton(_: any)

	accessibilityFullScreenButton: any;

	setAccessibilityGrowArea(_: any)

	accessibilityGrowArea: any;

	setAccessibilityHandles(_: NSArray<any>)

	accessibilityHandles: NSArray<any>;

	setAccessibilityHeader(_: any)

	accessibilityHeader: any;

	setAccessibilityHelp(_: string)

	accessibilityHelp: string;

	setAccessibilityHidden(_: boolean)

	isAccessibilityHidden: boolean;

	setAccessibilityHorizontalScrollBar(_: any)

	accessibilityHorizontalScrollBar: any;

	setAccessibilityHorizontalUnitDescription(_: string)

	accessibilityHorizontalUnitDescription: string;

	setAccessibilityHorizontalUnits(_: NSAccessibilityUnits)

	accessibilityHorizontalUnits: NSAccessibilityUnits;

	setAccessibilityIdentifier(_: string)

	accessibilityIdentifier: string;

	setAccessibilityIncrementButton(_: any)

	accessibilityIncrementButton: any;

	setAccessibilityIndex(_: number)

	accessibilityIndex: number;

	setAccessibilityInsertionPointLineNumber(_: number)

	accessibilityInsertionPointLineNumber: number;

	setAccessibilityLabel(_: string)

	accessibilityLabel: string;

	setAccessibilityLabelUIElements(_: NSArray<any>)

	accessibilityLabelUIElements: NSArray<any>;

	setAccessibilityLabelValue(_: number)

	accessibilityLabelValue: number;

	setAccessibilityLinkedUIElements(_: NSArray<any>)

	accessibilityLinkedUIElements: NSArray<any>;

	setAccessibilityMain(_: boolean)

	isAccessibilityMain: boolean;

	setAccessibilityMainWindow(_: any)

	accessibilityMainWindow: any;

	setAccessibilityMarkerGroupUIElement(_: any)

	accessibilityMarkerGroupUIElement: any;

	setAccessibilityMarkerTypeDescription(_: string)

	accessibilityMarkerTypeDescription: string;

	setAccessibilityMarkerUIElements(_: NSArray<any>)

	accessibilityMarkerUIElements: NSArray<any>;

	setAccessibilityMarkerValues(_: any)

	accessibilityMarkerValues: any;

	setAccessibilityMaxValue(_: any)

	accessibilityMaxValue: any;

	setAccessibilityMenuBar(_: any)

	accessibilityMenuBar: any;

	setAccessibilityMinimizeButton(_: any)

	accessibilityMinimizeButton: any;

	setAccessibilityMinimized(_: boolean)

	isAccessibilityMinimized: boolean;

	setAccessibilityMinValue(_: any)

	accessibilityMinValue: any;

	setAccessibilityModal(_: boolean)

	isAccessibilityModal: boolean;

	setAccessibilityNextContents(_: NSArray<any>)

	accessibilityNextContents: NSArray<any>;

	setAccessibilityNumberOfCharacters(_: number)

	accessibilityNumberOfCharacters: number;

	setAccessibilityOrderedByRow(_: boolean)

	isAccessibilityOrderedByRow: boolean;

	setAccessibilityOrientation(_: NSAccessibilityOrientation)

	accessibilityOrientation: NSAccessibilityOrientation;

	setAccessibilityOverflowButton(_: any)

	accessibilityOverflowButton: any;

	setAccessibilityParent(_: any)

	accessibilityParent: any;

	setAccessibilityPlaceholderValue(_: string)

	accessibilityPlaceholderValue: string;

	setAccessibilityPreviousContents(_: NSArray<any>)

	accessibilityPreviousContents: NSArray<any>;

	setAccessibilityProtectedContent(_: boolean)

	isAccessibilityProtectedContent: boolean;

	setAccessibilityProxy(_: any)

	accessibilityProxy: any;

	setAccessibilityRequired(_: boolean)

	isAccessibilityRequired: boolean;

	setAccessibilityRole(_: string)

	accessibilityRole: string;

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string;

	setAccessibilityRowCount(_: number)

	accessibilityRowCount: number;

	setAccessibilityRowHeaderUIElements(_: NSArray<any>)

	accessibilityRowHeaderUIElements: NSArray<any>;

	setAccessibilityRowIndexRange(_: NSRange)

	accessibilityRowIndexRange: NSRange;

	setAccessibilityRows(_: NSArray<any>)

	accessibilityRows: NSArray<any>;

	setAccessibilityRulerMarkerType(_: NSAccessibilityRulerMarkerType)

	accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType;

	setAccessibilitySearchButton(_: any)

	accessibilitySearchButton: any;

	setAccessibilitySearchMenu(_: any)

	accessibilitySearchMenu: any;

	setAccessibilitySelected(_: boolean)

	isAccessibilitySelected: boolean;

	setAccessibilitySelectedCells(_: NSArray<any>)

	accessibilitySelectedCells: NSArray<any>;

	setAccessibilitySelectedChildren(_: NSArray<any>)

	accessibilitySelectedChildren: NSArray<any>;

	setAccessibilitySelectedColumns(_: NSArray<any>)

	accessibilitySelectedColumns: NSArray<any>;

	setAccessibilitySelectedRows(_: NSArray<any>)

	accessibilitySelectedRows: NSArray<any>;

	setAccessibilitySelectedText(_: string)

	accessibilitySelectedText: string;

	setAccessibilitySelectedTextRange(_: NSRange)

	accessibilitySelectedTextRange: NSRange;

	setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)

	accessibilitySelectedTextRanges: NSArray<NSValue>;

	setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)

	accessibilityServesAsTitleForUIElements: NSArray<any>;

	setAccessibilitySharedCharacterRange(_: NSRange)

	accessibilitySharedCharacterRange: NSRange;

	setAccessibilitySharedFocusElements(_: NSArray<any>)

	accessibilitySharedFocusElements: NSArray<any>;

	setAccessibilitySharedTextUIElements(_: NSArray<any>)

	accessibilitySharedTextUIElements: NSArray<any>;

	setAccessibilityShownMenu(_: any)

	accessibilityShownMenu: any;

	setAccessibilitySortDirection(_: NSAccessibilitySortDirection)

	accessibilitySortDirection: NSAccessibilitySortDirection;

	setAccessibilitySplitters(_: NSArray<any>)

	accessibilitySplitters: NSArray<any>;

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string;

	setAccessibilityTabs(_: NSArray<any>)

	accessibilityTabs: NSArray<any>;

	setAccessibilityTitle(_: string)

	accessibilityTitle: string;

	setAccessibilityTitleUIElement(_: any)

	accessibilityTitleUIElement: any;

	setAccessibilityToolbarButton(_: any)

	accessibilityToolbarButton: any;

	setAccessibilityTopLevelUIElement(_: any)

	accessibilityTopLevelUIElement: any;

	setAccessibilityUnitDescription(_: string)

	accessibilityUnitDescription: string;

	setAccessibilityUnits(_: NSAccessibilityUnits)

	accessibilityUnits: NSAccessibilityUnits;

	setAccessibilityURL(_: NSURL)

	accessibilityURL: NSURL;

	setAccessibilityValue(_: any)

	accessibilityValue: any;

	setAccessibilityValueDescription(_: string)

	accessibilityValueDescription: string;

	setAccessibilityVerticalScrollBar(_: any)

	accessibilityVerticalScrollBar: any;

	setAccessibilityVerticalUnitDescription(_: string)

	accessibilityVerticalUnitDescription: string;

	setAccessibilityVerticalUnits(_: NSAccessibilityUnits)

	accessibilityVerticalUnits: NSAccessibilityUnits;

	setAccessibilityVisibleCells(_: NSArray<any>)

	accessibilityVisibleCells: NSArray<any>;

	setAccessibilityVisibleCharacterRange(_: NSRange)

	accessibilityVisibleCharacterRange: NSRange;

	setAccessibilityVisibleChildren(_: NSArray<any>)

	accessibilityVisibleChildren: NSArray<any>;

	setAccessibilityVisibleColumns(_: NSArray<any>)

	accessibilityVisibleColumns: NSArray<any>;

	setAccessibilityVisibleRows(_: NSArray<any>)

	accessibilityVisibleRows: NSArray<any>;

	setAccessibilityWarningValue(_: any)

	accessibilityWarningValue: any;

	setAccessibilityWindow(_: any)

	accessibilityWindow: any;

	setAccessibilityWindows(_: NSArray<any>)

	accessibilityWindows: NSArray<any>;

	setAccessibilityZoomButton(_: any)

	accessibilityZoomButton: any;

	accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;

	accessibilityCellForColumnRow(_: number, row: number): any;

	accessibilityFrameForRange(_: NSRange): CGRect;

	accessibilityLayoutPointForScreenPoint(_: CGPoint): CGPoint;

	accessibilityLayoutSizeForScreenSize(_: CGSize): CGSize;

	accessibilityLineForIndex(_: number): number;

	accessibilityPerformCancel(): boolean;

	accessibilityPerformConfirm(): boolean;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformDelete(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPick(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityPerformRaise(): boolean;

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	accessibilityPerformShowMenu(): boolean;

	accessibilityRangeForIndex(_: number): NSRange;

	accessibilityRangeForLine(_: number): NSRange;

	accessibilityRangeForPosition(_: CGPoint): NSRange;

	accessibilityRTFForRange(_: NSRange): NSData;

	accessibilityScreenPointForLayoutPoint(_: CGPoint): CGPoint;

	accessibilityScreenSizeForLayoutSize(_: CGSize): CGSize;

	accessibilityStringForRange(_: NSRange): string;

	accessibilityStyleRangeForIndex(_: number): NSRange;

	isAccessibilitySelectorAllowed(_: string): boolean;
}
declare var NSAccessibility: {

	prototype: NSAccessibility;
};

declare function NSAccessibilityActionDescription(action: string): string;

declare var NSAccessibilityActivationPointAttribute: string;

declare var NSAccessibilityAllowedValuesAttribute: string;

declare var NSAccessibilityAlternateUIVisibleAttribute: string;

declare var NSAccessibilityAnnotationElement: string;

declare var NSAccessibilityAnnotationLabel: string;

declare var NSAccessibilityAnnotationLocation: string;

enum NSAccessibilityAnnotationPosition {

	FullRange = 0,

	Start = 1,

	End = 2
}

globalThis.NSAccessibilityAnnotationPosition = NSAccessibilityAnnotationPosition;

declare var NSAccessibilityAnnotationTextAttribute: string;

declare var NSAccessibilityAnnouncementKey: string;

declare var NSAccessibilityAnnouncementRequestedNotification: string;

declare var NSAccessibilityApplicationActivatedNotification: string;

declare var NSAccessibilityApplicationDeactivatedNotification: string;

declare var NSAccessibilityApplicationHiddenNotification: string;

declare var NSAccessibilityApplicationRole: string;

declare var NSAccessibilityApplicationShownNotification: string;

declare var NSAccessibilityAscendingSortDirectionValue: string;

declare var NSAccessibilityAttachmentTextAttribute: string;

declare var NSAccessibilityAttributedStringForRangeParameterizedAttribute: string;

declare var NSAccessibilityAutocorrectedTextAttribute: string;

declare var NSAccessibilityBackgroundColorTextAttribute: string;

declare var NSAccessibilityBoundsForRangeParameterizedAttribute: string;

declare var NSAccessibilityBrowserRole: string;

declare var NSAccessibilityBusyIndicatorRole: string;

interface NSAccessibilityButton extends NSAccessibilityElementProtocol {

	accessibilityLabel(): string;

	accessibilityPerformPress(): boolean;
}
declare var NSAccessibilityButton: {

	prototype: NSAccessibilityButton;
};

declare var NSAccessibilityButtonRole: string;

declare var NSAccessibilityCancelAction: string;

declare var NSAccessibilityCancelButtonAttribute: string;

declare var NSAccessibilityCellForColumnAndRowParameterizedAttribute: string;

declare var NSAccessibilityCellRole: string;

declare var NSAccessibilityCenterTabStopMarkerTypeValue: string;

declare var NSAccessibilityCentimetersUnitValue: string;

interface NSAccessibilityCheckBox extends NSAccessibilityButton {

	accessibilityValue(): number;
}
declare var NSAccessibilityCheckBox: {

	prototype: NSAccessibilityCheckBox;
};

declare var NSAccessibilityCheckBoxRole: string;

declare var NSAccessibilityChildrenAttribute: string;

declare var NSAccessibilityClearButtonAttribute: string;

declare var NSAccessibilityCloseButtonAttribute: string;

declare var NSAccessibilityCloseButtonSubrole: string;

declare var NSAccessibilityCollectionListSubrole: string;

declare var NSAccessibilityColorWellRole: string;

declare var NSAccessibilityColumnCountAttribute: string;

declare var NSAccessibilityColumnHeaderUIElementsAttribute: string;

declare var NSAccessibilityColumnIndexRangeAttribute: string;

declare var NSAccessibilityColumnRole: string;

declare var NSAccessibilityColumnTitlesAttribute: string;

declare var NSAccessibilityColumnsAttribute: string;

declare var NSAccessibilityComboBoxRole: string;

declare var NSAccessibilityConfirmAction: string;

declare var NSAccessibilityContainsProtectedContentAttribute: string;

interface NSAccessibilityContainsTransientUI extends NSAccessibilityElementProtocol {

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	isAccessibilityAlternateUIVisible(): boolean;
}
declare var NSAccessibilityContainsTransientUI: {

	prototype: NSAccessibilityContainsTransientUI;
};

declare var NSAccessibilityContentListSubrole: string;

declare var NSAccessibilityContentsAttribute: string;

declare var NSAccessibilityCreatedNotification: string;

declare var NSAccessibilityCriticalValueAttribute: string;

declare class NSAccessibilityCustomAction extends NSObject {

	setHandler(_: () => boolean)

	handler: () => boolean;

	setName(_: string)

	name: string;

	setSelector(_: string)

	selector: string;

	setTarget(_: NSObjectProtocol)

	target: NSObjectProtocol;

	static create(name: string, handler: () => boolean);

	static create(name: string, target: NSObjectProtocol, selector: string);
}

declare class NSAccessibilityCustomRotor extends NSObject {

	setItemLoadingDelegate(_: NSAccessibilityElementLoading)

	itemLoadingDelegate: NSAccessibilityElementLoading;

	setItemSearchDelegate(_: NSAccessibilityCustomRotorItemSearchDelegate)

	itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate;

	setLabel(_: string)

	label: string;

	setType(_: NSAccessibilityCustomRotorType)

	type: NSAccessibilityCustomRotorType;

	static create(label: string, itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate);

	static create(rotorType: NSAccessibilityCustomRotorType, itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate);
}

declare class NSAccessibilityCustomRotorItemResult extends NSObject {

	setCustomLabel(_: string)

	customLabel: string;

	readonly itemLoadingToken: any;

	readonly targetElement: NSAccessibilityElementProtocol;

	setTargetRange(_: NSRange)

	targetRange: NSRange;

	static create(itemLoadingToken: any, customLabel: string);

	static create(targetElement: NSAccessibilityElementProtocol);
}

interface NSAccessibilityCustomRotorItemSearchDelegate extends NSObjectProtocol {

	rotorResultForSearchParameters(_: NSAccessibilityCustomRotor, resultFor: NSAccessibilityCustomRotorSearchParameters): NSAccessibilityCustomRotorItemResult;
}
declare var NSAccessibilityCustomRotorItemSearchDelegate: {

	prototype: NSAccessibilityCustomRotorItemSearchDelegate;
};

enum NSAccessibilityCustomRotorSearchDirection {

	Previous = 0,

	Next = 1
}

globalThis.NSAccessibilityCustomRotorSearchDirection = NSAccessibilityCustomRotorSearchDirection;

declare class NSAccessibilityCustomRotorSearchParameters extends NSObject {

	setCurrentItem(_: NSAccessibilityCustomRotorItemResult)

	currentItem: NSAccessibilityCustomRotorItemResult;

	setFilterString(_: string)

	filterString: string;

	setSearchDirection(_: NSAccessibilityCustomRotorSearchDirection)

	searchDirection: NSAccessibilityCustomRotorSearchDirection;
}

enum NSAccessibilityCustomRotorType {

	Custom = 0,

	Any = 1,

	Annotation = 2,

	BoldText = 3,

	Heading = 4,

	HeadingLevel1 = 5,

	HeadingLevel2 = 6,

	HeadingLevel3 = 7,

	HeadingLevel4 = 8,

	HeadingLevel5 = 9,

	HeadingLevel6 = 10,

	Image = 11,

	ItalicText = 12,

	Landmark = 13,

	Link = 14,

	List = 15,

	MisspelledWord = 16,

	Table = 17,

	TextField = 18,

	UnderlinedText = 19,

	VisitedLink = 20
}

globalThis.NSAccessibilityCustomRotorType = NSAccessibilityCustomRotorType;

declare var NSAccessibilityCustomTextAttribute: string;

declare var NSAccessibilityDecimalTabStopMarkerTypeValue: string;

declare var NSAccessibilityDecrementAction: string;

declare var NSAccessibilityDecrementArrowSubrole: string;

declare var NSAccessibilityDecrementButtonAttribute: string;

declare var NSAccessibilityDecrementPageSubrole: string;

declare var NSAccessibilityDefaultButtonAttribute: string;

declare var NSAccessibilityDefinitionListSubrole: string;

declare var NSAccessibilityDeleteAction: string;

declare var NSAccessibilityDescendingSortDirectionValue: string;

declare var NSAccessibilityDescriptionAttribute: string;

declare var NSAccessibilityDescriptionListSubrole: string;

declare var NSAccessibilityDialogSubrole: string;

declare var NSAccessibilityDisclosedByRowAttribute: string;

declare var NSAccessibilityDisclosedRowsAttribute: string;

declare var NSAccessibilityDisclosingAttribute: string;

declare var NSAccessibilityDisclosureLevelAttribute: string;

declare var NSAccessibilityDisclosureTriangleRole: string;

declare var NSAccessibilityDocumentAttribute: string;

declare var NSAccessibilityDrawerCreatedNotification: string;

declare var NSAccessibilityDrawerRole: string;

declare var NSAccessibilityEditedAttribute: string;

declare class NSAccessibilityElement extends NSObject implements NSAccessibility {

	static accessibilityElementWithRoleFrameLabelParent(withRole: string, frame: CGRect, label?: string, parent?: any): any;

	setAccessibilityFrameInParentSpace(_: CGRect)

	accessibilityFrameInParentSpace: CGRect;

	setAccessibilityActivationPoint(_: CGPoint)

	accessibilityActivationPoint: CGPoint; // inherited from NSAccessibility

	setAccessibilityAllowedValues(_: NSArray<number>)

	accessibilityAllowedValues: NSArray<number>; // inherited from NSAccessibility

	setAccessibilityAlternateUIVisible(_: boolean)

	isAccessibilityAlternateUIVisible: boolean; // inherited from NSAccessibility

	setAccessibilityApplicationFocusedUIElement(_: any)

	accessibilityApplicationFocusedUIElement: any; // inherited from NSAccessibility

	setAccessibilityCancelButton(_: any)

	accessibilityCancelButton: any; // inherited from NSAccessibility

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)

	accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>; // inherited from NSAccessibility

	setAccessibilityClearButton(_: any)

	accessibilityClearButton: any; // inherited from NSAccessibility

	setAccessibilityCloseButton(_: any)

	accessibilityCloseButton: any; // inherited from NSAccessibility

	setAccessibilityColumnCount(_: number)

	accessibilityColumnCount: number; // inherited from NSAccessibility

	setAccessibilityColumnHeaderUIElements(_: NSArray<any>)

	accessibilityColumnHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumnIndexRange(_: NSRange)

	accessibilityColumnIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityColumnTitles(_: NSArray<any>)

	accessibilityColumnTitles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumns(_: NSArray<any>)

	accessibilityColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityContents(_: NSArray<any>)

	accessibilityContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityCriticalValue(_: any)

	accessibilityCriticalValue: any; // inherited from NSAccessibility

	setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)

	accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>; // inherited from NSAccessibility

	setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)

	accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>; // inherited from NSAccessibility

	setAccessibilityDecrementButton(_: any)

	accessibilityDecrementButton: any; // inherited from NSAccessibility

	setAccessibilityDefaultButton(_: any)

	accessibilityDefaultButton: any; // inherited from NSAccessibility

	setAccessibilityDisclosed(_: boolean)

	isAccessibilityDisclosed: boolean; // inherited from NSAccessibility

	setAccessibilityDisclosedByRow(_: any)

	accessibilityDisclosedByRow: any; // inherited from NSAccessibility

	setAccessibilityDisclosedRows(_: any)

	accessibilityDisclosedRows: any; // inherited from NSAccessibility

	setAccessibilityDisclosureLevel(_: number)

	accessibilityDisclosureLevel: number; // inherited from NSAccessibility

	setAccessibilityDocument(_: string)

	accessibilityDocument: string; // inherited from NSAccessibility

	setAccessibilityEdited(_: boolean)

	isAccessibilityEdited: boolean; // inherited from NSAccessibility

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean; // inherited from NSAccessibility

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean; // inherited from NSAccessibility

	setAccessibilityExpanded(_: boolean)

	isAccessibilityExpanded: boolean; // inherited from NSAccessibility

	setAccessibilityExtrasMenuBar(_: any)

	accessibilityExtrasMenuBar: any; // inherited from NSAccessibility

	setAccessibilityFilename(_: string)

	accessibilityFilename: string; // inherited from NSAccessibility

	setAccessibilityFocused(_: boolean)

	isAccessibilityFocused: boolean; // inherited from NSAccessibility

	setAccessibilityFocusedWindow(_: any)

	accessibilityFocusedWindow: any; // inherited from NSAccessibility

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect; // inherited from NSAccessibility

	setAccessibilityFrontmost(_: boolean)

	isAccessibilityFrontmost: boolean; // inherited from NSAccessibility

	setAccessibilityFullScreenButton(_: any)

	accessibilityFullScreenButton: any; // inherited from NSAccessibility

	setAccessibilityGrowArea(_: any)

	accessibilityGrowArea: any; // inherited from NSAccessibility

	setAccessibilityHandles(_: NSArray<any>)

	accessibilityHandles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityHeader(_: any)

	accessibilityHeader: any; // inherited from NSAccessibility

	setAccessibilityHelp(_: string)

	accessibilityHelp: string; // inherited from NSAccessibility

	setAccessibilityHidden(_: boolean)

	isAccessibilityHidden: boolean; // inherited from NSAccessibility

	setAccessibilityHorizontalScrollBar(_: any)

	accessibilityHorizontalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityHorizontalUnitDescription(_: string)

	accessibilityHorizontalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityHorizontalUnits(_: NSAccessibilityUnits)

	accessibilityHorizontalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityIdentifier(_: string)

	accessibilityIdentifier: string; // inherited from NSAccessibility

	setAccessibilityIncrementButton(_: any)

	accessibilityIncrementButton: any; // inherited from NSAccessibility

	setAccessibilityIndex(_: number)

	accessibilityIndex: number; // inherited from NSAccessibility

	setAccessibilityInsertionPointLineNumber(_: number)

	accessibilityInsertionPointLineNumber: number; // inherited from NSAccessibility

	setAccessibilityLabel(_: string)

	accessibilityLabel: string; // inherited from NSAccessibility

	setAccessibilityLabelUIElements(_: NSArray<any>)

	accessibilityLabelUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityLabelValue(_: number)

	accessibilityLabelValue: number; // inherited from NSAccessibility

	setAccessibilityLinkedUIElements(_: NSArray<any>)

	accessibilityLinkedUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMain(_: boolean)

	isAccessibilityMain: boolean; // inherited from NSAccessibility

	setAccessibilityMainWindow(_: any)

	accessibilityMainWindow: any; // inherited from NSAccessibility

	setAccessibilityMarkerGroupUIElement(_: any)

	accessibilityMarkerGroupUIElement: any; // inherited from NSAccessibility

	setAccessibilityMarkerTypeDescription(_: string)

	accessibilityMarkerTypeDescription: string; // inherited from NSAccessibility

	setAccessibilityMarkerUIElements(_: NSArray<any>)

	accessibilityMarkerUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMarkerValues(_: any)

	accessibilityMarkerValues: any; // inherited from NSAccessibility

	setAccessibilityMaxValue(_: any)

	accessibilityMaxValue: any; // inherited from NSAccessibility

	setAccessibilityMenuBar(_: any)

	accessibilityMenuBar: any; // inherited from NSAccessibility

	setAccessibilityMinValue(_: any)

	accessibilityMinValue: any; // inherited from NSAccessibility

	setAccessibilityMinimizeButton(_: any)

	accessibilityMinimizeButton: any; // inherited from NSAccessibility

	setAccessibilityMinimized(_: boolean)

	isAccessibilityMinimized: boolean; // inherited from NSAccessibility

	setAccessibilityModal(_: boolean)

	isAccessibilityModal: boolean; // inherited from NSAccessibility

	setAccessibilityNextContents(_: NSArray<any>)

	accessibilityNextContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityNumberOfCharacters(_: number)

	accessibilityNumberOfCharacters: number; // inherited from NSAccessibility

	setAccessibilityOrderedByRow(_: boolean)

	isAccessibilityOrderedByRow: boolean; // inherited from NSAccessibility

	setAccessibilityOrientation(_: NSAccessibilityOrientation)

	accessibilityOrientation: NSAccessibilityOrientation; // inherited from NSAccessibility

	setAccessibilityOverflowButton(_: any)

	accessibilityOverflowButton: any; // inherited from NSAccessibility

	setAccessibilityParent(_: any)

	accessibilityParent: any; // inherited from NSAccessibility

	setAccessibilityPlaceholderValue(_: string)

	accessibilityPlaceholderValue: string; // inherited from NSAccessibility

	setAccessibilityPreviousContents(_: NSArray<any>)

	accessibilityPreviousContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityProtectedContent(_: boolean)

	isAccessibilityProtectedContent: boolean; // inherited from NSAccessibility

	setAccessibilityProxy(_: any)

	accessibilityProxy: any; // inherited from NSAccessibility

	setAccessibilityRequired(_: boolean)

	isAccessibilityRequired: boolean; // inherited from NSAccessibility

	setAccessibilityRole(_: string)

	accessibilityRole: string; // inherited from NSAccessibility

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string; // inherited from NSAccessibility

	setAccessibilityRowCount(_: number)

	accessibilityRowCount: number; // inherited from NSAccessibility

	setAccessibilityRowHeaderUIElements(_: NSArray<any>)

	accessibilityRowHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRowIndexRange(_: NSRange)

	accessibilityRowIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityRows(_: NSArray<any>)

	accessibilityRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRulerMarkerType(_: NSAccessibilityRulerMarkerType)

	accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType; // inherited from NSAccessibility

	setAccessibilitySearchButton(_: any)

	accessibilitySearchButton: any; // inherited from NSAccessibility

	setAccessibilitySearchMenu(_: any)

	accessibilitySearchMenu: any; // inherited from NSAccessibility

	setAccessibilitySelected(_: boolean)

	isAccessibilitySelected: boolean; // inherited from NSAccessibility

	setAccessibilitySelectedCells(_: NSArray<any>)

	accessibilitySelectedCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedChildren(_: NSArray<any>)

	accessibilitySelectedChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedColumns(_: NSArray<any>)

	accessibilitySelectedColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedRows(_: NSArray<any>)

	accessibilitySelectedRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedText(_: string)

	accessibilitySelectedText: string; // inherited from NSAccessibility

	setAccessibilitySelectedTextRange(_: NSRange)

	accessibilitySelectedTextRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)

	accessibilitySelectedTextRanges: NSArray<NSValue>; // inherited from NSAccessibility

	setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)

	accessibilityServesAsTitleForUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedCharacterRange(_: NSRange)

	accessibilitySharedCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySharedFocusElements(_: NSArray<any>)

	accessibilitySharedFocusElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedTextUIElements(_: NSArray<any>)

	accessibilitySharedTextUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityShownMenu(_: any)

	accessibilityShownMenu: any; // inherited from NSAccessibility

	setAccessibilitySortDirection(_: NSAccessibilitySortDirection)

	accessibilitySortDirection: NSAccessibilitySortDirection; // inherited from NSAccessibility

	setAccessibilitySplitters(_: NSArray<any>)

	accessibilitySplitters: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string; // inherited from NSAccessibility

	setAccessibilityTabs(_: NSArray<any>)

	accessibilityTabs: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityTitle(_: string)

	accessibilityTitle: string; // inherited from NSAccessibility

	setAccessibilityTitleUIElement(_: any)

	accessibilityTitleUIElement: any; // inherited from NSAccessibility

	setAccessibilityToolbarButton(_: any)

	accessibilityToolbarButton: any; // inherited from NSAccessibility

	setAccessibilityTopLevelUIElement(_: any)

	accessibilityTopLevelUIElement: any; // inherited from NSAccessibility

	setAccessibilityURL(_: NSURL)

	accessibilityURL: NSURL; // inherited from NSAccessibility

	setAccessibilityUnitDescription(_: string)

	accessibilityUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityUnits(_: NSAccessibilityUnits)

	accessibilityUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityValue(_: any)

	accessibilityValue: any; // inherited from NSAccessibility

	setAccessibilityValueDescription(_: string)

	accessibilityValueDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalScrollBar(_: any)

	accessibilityVerticalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityVerticalUnitDescription(_: string)

	accessibilityVerticalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalUnits(_: NSAccessibilityUnits)

	accessibilityVerticalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityVisibleCells(_: NSArray<any>)

	accessibilityVisibleCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleCharacterRange(_: NSRange)

	accessibilityVisibleCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilityVisibleChildren(_: NSArray<any>)

	accessibilityVisibleChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleColumns(_: NSArray<any>)

	accessibilityVisibleColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleRows(_: NSArray<any>)

	accessibilityVisibleRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityWarningValue(_: any)

	accessibilityWarningValue: any; // inherited from NSAccessibility

	setAccessibilityWindow(_: any)

	accessibilityWindow: any; // inherited from NSAccessibility

	setAccessibilityWindows(_: NSArray<any>)

	accessibilityWindows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityZoomButton(_: any)

	accessibilityZoomButton: any; // inherited from NSAccessibility

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityAddChildElement(_: NSAccessibilityElement): void;

	accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;

	accessibilityCellForColumnRow(_: number, row: number): any;

	accessibilityFrameForRange(_: NSRange): CGRect;

	accessibilityLayoutPointForScreenPoint(_: CGPoint): CGPoint;

	accessibilityLayoutSizeForScreenSize(_: CGSize): CGSize;

	accessibilityLineForIndex(_: number): number;

	accessibilityPerformCancel(): boolean;

	accessibilityPerformConfirm(): boolean;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformDelete(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPick(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityPerformRaise(): boolean;

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	accessibilityPerformShowMenu(): boolean;

	accessibilityRTFForRange(_: NSRange): NSData;

	accessibilityRangeForIndex(_: number): NSRange;

	accessibilityRangeForLine(_: number): NSRange;

	accessibilityRangeForPosition(_: CGPoint): NSRange;

	accessibilityScreenPointForLayoutPoint(_: CGPoint): CGPoint;

	accessibilityScreenSizeForLayoutSize(_: CGSize): CGSize;

	accessibilityStringForRange(_: NSRange): string;

	accessibilityStyleRangeForIndex(_: number): NSRange;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isAccessibilitySelectorAllowed(_: string): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

interface NSAccessibilityElementLoading extends NSObjectProtocol {

	accessibilityElementWithToken(withToken: any): NSAccessibilityElementProtocol;

	accessibilityRangeInTargetElementWithToken?(withToken: any): NSRange;
}
declare var NSAccessibilityElementLoading: {

	prototype: NSAccessibilityElementLoading;
};

interface NSAccessibilityElementProtocol extends NSObjectProtocol {

	accessibilityFrame(): CGRect;

	accessibilityIdentifier?(): string;

	accessibilityParent(): any;

	isAccessibilityFocused?(): boolean;
}
declare var NSAccessibilityElementProtocol: {

	prototype: NSAccessibilityElementProtocol;
};

declare var NSAccessibilityEnabledAttribute: string;

declare var NSAccessibilityErrorCodeExceptionInfo: string;

declare var NSAccessibilityExpandedAttribute: string;

declare var NSAccessibilityExtrasMenuBarAttribute: string;

declare var NSAccessibilityFilenameAttribute: string;

declare var NSAccessibilityFirstLineIndentMarkerTypeValue: string;

declare var NSAccessibilityFloatingWindowSubrole: string;

declare var NSAccessibilityFocusedAttribute: string;

declare var NSAccessibilityFocusedUIElementAttribute: string;

declare var NSAccessibilityFocusedUIElementChangedNotification: string;

declare var NSAccessibilityFocusedWindowAttribute: string;

declare var NSAccessibilityFocusedWindowChangedNotification: string;

declare var NSAccessibilityFontFamilyKey: string;

declare var NSAccessibilityFontNameKey: string;

declare var NSAccessibilityFontSizeKey: string;

declare var NSAccessibilityFontTextAttribute: string;

declare var NSAccessibilityForegroundColorTextAttribute: string;

declare function NSAccessibilityFrameInView(parentView: NSView, frame: CGRect): CGRect;

declare var NSAccessibilityFrontmostAttribute: string;

declare var NSAccessibilityFullScreenButtonAttribute: string;

declare var NSAccessibilityFullScreenButtonSubrole: string;

declare var NSAccessibilityGridRole: string;

interface NSAccessibilityGroup extends NSAccessibilityElementProtocol {
}
declare var NSAccessibilityGroup: {

	prototype: NSAccessibilityGroup;
};

declare var NSAccessibilityGroupRole: string;

declare var NSAccessibilityGrowAreaAttribute: string;

declare var NSAccessibilityGrowAreaRole: string;

declare var NSAccessibilityHandleRole: string;

declare var NSAccessibilityHandlesAttribute: string;

declare var NSAccessibilityHeadIndentMarkerTypeValue: string;

declare var NSAccessibilityHeaderAttribute: string;

declare var NSAccessibilityHelpAttribute: string;

declare var NSAccessibilityHelpTagCreatedNotification: string;

declare var NSAccessibilityHelpTagRole: string;

declare var NSAccessibilityHiddenAttribute: string;

declare var NSAccessibilityHorizontalOrientationValue: string;

declare var NSAccessibilityHorizontalScrollBarAttribute: string;

declare var NSAccessibilityHorizontalUnitDescriptionAttribute: string;

declare var NSAccessibilityHorizontalUnitsAttribute: string;

declare var NSAccessibilityIdentifierAttribute: string;

interface NSAccessibilityImage extends NSAccessibilityElementProtocol {

	accessibilityLabel(): string;
}
declare var NSAccessibilityImage: {

	prototype: NSAccessibilityImage;
};

declare var NSAccessibilityImageRole: string;

declare var NSAccessibilityInchesUnitValue: string;

declare var NSAccessibilityIncrementAction: string;

declare var NSAccessibilityIncrementArrowSubrole: string;

declare var NSAccessibilityIncrementButtonAttribute: string;

declare var NSAccessibilityIncrementPageSubrole: string;

declare var NSAccessibilityIncrementorRole: string;

declare var NSAccessibilityIndexAttribute: string;

declare var NSAccessibilityInsertionPointLineNumberAttribute: string;

declare var NSAccessibilityLabelUIElementsAttribute: string;

declare var NSAccessibilityLabelValueAttribute: string;

declare var NSAccessibilityLanguageTextAttribute: string;

interface NSAccessibilityLayoutArea extends NSAccessibilityGroup {

	accessibilityFocusedUIElement: any;

	accessibilityChildren(): NSArray<any>;

	accessibilityLabel(): string;

	accessibilitySelectedChildren(): NSArray<any>;
}
declare var NSAccessibilityLayoutArea: {

	prototype: NSAccessibilityLayoutArea;
};

declare var NSAccessibilityLayoutAreaRole: string;

declare var NSAccessibilityLayoutChangedNotification: string;

interface NSAccessibilityLayoutItem extends NSAccessibilityGroup {

	setAccessibilityFrame?(_: CGRect): void;
}
declare var NSAccessibilityLayoutItem: {

	prototype: NSAccessibilityLayoutItem;
};

declare var NSAccessibilityLayoutItemRole: string;

declare var NSAccessibilityLayoutPointForScreenPointParameterizedAttribute: string;

declare var NSAccessibilityLayoutSizeForScreenSizeParameterizedAttribute: string;

declare var NSAccessibilityLeftTabStopMarkerTypeValue: string;

declare var NSAccessibilityLevelIndicatorRole: string;

declare var NSAccessibilityLineForIndexParameterizedAttribute: string;

declare var NSAccessibilityLinkRole: string;

declare var NSAccessibilityLinkTextAttribute: string;

declare var NSAccessibilityLinkedUIElementsAttribute: string;

interface NSAccessibilityList extends NSAccessibilityTable {
}
declare var NSAccessibilityList: {

	prototype: NSAccessibilityList;
};

declare var NSAccessibilityListItemIndexTextAttribute: string;

declare var NSAccessibilityListItemLevelTextAttribute: string;

declare var NSAccessibilityListItemPrefixTextAttribute: string;

declare var NSAccessibilityListRole: string;

declare var NSAccessibilityMainAttribute: string;

declare var NSAccessibilityMainWindowAttribute: string;

declare var NSAccessibilityMainWindowChangedNotification: string;

declare var NSAccessibilityMarkedMisspelledTextAttribute: string;

declare var NSAccessibilityMarkerGroupUIElementAttribute: string;

declare var NSAccessibilityMarkerTypeAttribute: string;

declare var NSAccessibilityMarkerTypeDescriptionAttribute: string;

declare var NSAccessibilityMarkerUIElementsAttribute: string;

declare var NSAccessibilityMarkerValuesAttribute: string;

declare var NSAccessibilityMatteRole: string;

declare var NSAccessibilityMaxValueAttribute: string;

declare var NSAccessibilityMenuBarAttribute: string;

declare var NSAccessibilityMenuBarItemRole: string;

declare var NSAccessibilityMenuBarRole: string;

declare var NSAccessibilityMenuButtonRole: string;

declare var NSAccessibilityMenuItemRole: string;

declare var NSAccessibilityMenuRole: string;

declare var NSAccessibilityMinValueAttribute: string;

declare var NSAccessibilityMinimizeButtonAttribute: string;

declare var NSAccessibilityMinimizeButtonSubrole: string;

declare var NSAccessibilityMinimizedAttribute: string;

declare var NSAccessibilityMisspelledTextAttribute: string;

declare var NSAccessibilityModalAttribute: string;

declare var NSAccessibilityMovedNotification: string;

interface NSAccessibilityNavigableStaticText extends NSAccessibilityStaticText {

	accessibilityFrameForRange(for_: NSRange): CGRect;

	accessibilityLineForIndex(for_: number): number;

	accessibilityRangeForLine(forLine: number): NSRange;

	accessibilityStringForRange(for_: NSRange): string;
}
declare var NSAccessibilityNavigableStaticText: {

	prototype: NSAccessibilityNavigableStaticText;
};

declare var NSAccessibilityNextContentsAttribute: string;

declare var NSAccessibilityNumberOfCharactersAttribute: string;

declare var NSAccessibilityOrderedByRowAttribute: string;

enum NSAccessibilityOrientation {

	Unknown = 0,

	Vertical = 1,

	Horizontal = 2
}

globalThis.NSAccessibilityOrientation = NSAccessibilityOrientation;

declare var NSAccessibilityOrientationAttribute: string;

interface NSAccessibilityOutline extends NSAccessibilityTable {
}
declare var NSAccessibilityOutline: {

	prototype: NSAccessibilityOutline;
};

declare var NSAccessibilityOutlineRole: string;

declare var NSAccessibilityOutlineRowSubrole: string;

declare var NSAccessibilityOverflowButtonAttribute: string;

declare var NSAccessibilityPageRole: string;

declare var NSAccessibilityParentAttribute: string;

declare var NSAccessibilityPicasUnitValue: string;

declare var NSAccessibilityPickAction: string;

declare var NSAccessibilityPlaceholderValueAttribute: string;

declare function NSAccessibilityPointInView(parentView: NSView, point: CGPoint): CGPoint;

declare var NSAccessibilityPointsUnitValue: string;

declare var NSAccessibilityPopUpButtonRole: string;

declare var NSAccessibilityPopoverRole: string;

declare var NSAccessibilityPositionAttribute: string;

declare function NSAccessibilityPostNotification(element: any, notification: string): void;

declare function NSAccessibilityPostNotificationWithUserInfo(element: any, notification: string, userInfo: NSDictionary<string, any>): void;

declare var NSAccessibilityPressAction: string;

declare var NSAccessibilityPreviousContentsAttribute: string;

declare var NSAccessibilityPriorityKey: string;

enum NSAccessibilityPriorityLevel {

	Low = 10,

	Medium = 50,

	High = 90
}

globalThis.NSAccessibilityPriorityLevel = NSAccessibilityPriorityLevel;

interface NSAccessibilityProgressIndicator extends NSAccessibilityGroup {

	accessibilityValue(): number;
}
declare var NSAccessibilityProgressIndicator: {

	prototype: NSAccessibilityProgressIndicator;
};

declare var NSAccessibilityProgressIndicatorRole: string;

declare var NSAccessibilityProxyAttribute: string;

declare var NSAccessibilityRTFForRangeParameterizedAttribute: string;

interface NSAccessibilityRadioButton extends NSAccessibilityButton {

	accessibilityValue(): number;
}
declare var NSAccessibilityRadioButton: {

	prototype: NSAccessibilityRadioButton;
};

declare var NSAccessibilityRadioButtonRole: string;

declare var NSAccessibilityRadioGroupRole: string;

declare var NSAccessibilityRaiseAction: string;

declare var NSAccessibilityRangeForIndexParameterizedAttribute: string;

declare var NSAccessibilityRangeForLineParameterizedAttribute: string;

declare var NSAccessibilityRangeForPositionParameterizedAttribute: string;

declare var NSAccessibilityRatingIndicatorSubrole: string;

declare var NSAccessibilityRelevanceIndicatorRole: string;

declare var NSAccessibilityRequiredAttribute: string;

declare var NSAccessibilityResizedNotification: string;

declare var NSAccessibilityRightTabStopMarkerTypeValue: string;

declare var NSAccessibilityRoleAttribute: string;

declare function NSAccessibilityRoleDescription(role: string, subrole: string): string;

declare var NSAccessibilityRoleDescriptionAttribute: string;

declare function NSAccessibilityRoleDescriptionForUIElement(element: any): string;

interface NSAccessibilityRow extends NSAccessibilityGroup {

	accessibilityDisclosureLevel?(): number;

	accessibilityIndex(): number;
}
declare var NSAccessibilityRow: {

	prototype: NSAccessibilityRow;
};

declare var NSAccessibilityRowCollapsedNotification: string;

declare var NSAccessibilityRowCountAttribute: string;

declare var NSAccessibilityRowCountChangedNotification: string;

declare var NSAccessibilityRowExpandedNotification: string;

declare var NSAccessibilityRowHeaderUIElementsAttribute: string;

declare var NSAccessibilityRowIndexRangeAttribute: string;

declare var NSAccessibilityRowRole: string;

declare var NSAccessibilityRowsAttribute: string;

declare var NSAccessibilityRulerMarkerRole: string;

enum NSAccessibilityRulerMarkerType {

	Unknown = 0,

	TabStopLeft = 1,

	TabStopRight = 2,

	TabStopCenter = 3,

	TabStopDecimal = 4,

	IndentHead = 5,

	IndentTail = 6,

	IndentFirstLine = 7
}

globalThis.NSAccessibilityRulerMarkerType = NSAccessibilityRulerMarkerType;

declare var NSAccessibilityRulerRole: string;

declare var NSAccessibilityScreenPointForLayoutPointParameterizedAttribute: string;

declare var NSAccessibilityScreenSizeForLayoutSizeParameterizedAttribute: string;

declare var NSAccessibilityScrollAreaRole: string;

declare var NSAccessibilityScrollBarRole: string;

declare var NSAccessibilitySearchButtonAttribute: string;

declare var NSAccessibilitySearchFieldSubrole: string;

declare var NSAccessibilitySearchMenuAttribute: string;

declare var NSAccessibilitySectionListSubrole: string;

declare var NSAccessibilitySecureTextFieldSubrole: string;

declare var NSAccessibilitySelectedAttribute: string;

declare var NSAccessibilitySelectedCellsAttribute: string;

declare var NSAccessibilitySelectedCellsChangedNotification: string;

declare var NSAccessibilitySelectedChildrenAttribute: string;

declare var NSAccessibilitySelectedChildrenChangedNotification: string;

declare var NSAccessibilitySelectedChildrenMovedNotification: string;

declare var NSAccessibilitySelectedColumnsAttribute: string;

declare var NSAccessibilitySelectedColumnsChangedNotification: string;

declare var NSAccessibilitySelectedRowsAttribute: string;

declare var NSAccessibilitySelectedRowsChangedNotification: string;

declare var NSAccessibilitySelectedTextAttribute: string;

declare var NSAccessibilitySelectedTextChangedNotification: string;

declare var NSAccessibilitySelectedTextRangeAttribute: string;

declare var NSAccessibilitySelectedTextRangesAttribute: string;

declare var NSAccessibilityServesAsTitleForUIElementsAttribute: string;

declare function NSAccessibilitySetMayContainProtectedContent(flag: boolean): boolean;

declare var NSAccessibilityShadowTextAttribute: string;

declare var NSAccessibilitySharedCharacterRangeAttribute: string;

declare var NSAccessibilitySharedFocusElementsAttribute: string;

declare var NSAccessibilitySharedTextUIElementsAttribute: string;

declare var NSAccessibilitySheetCreatedNotification: string;

declare var NSAccessibilitySheetRole: string;

declare var NSAccessibilityShowAlternateUIAction: string;

declare var NSAccessibilityShowDefaultUIAction: string;

declare var NSAccessibilityShowMenuAction: string;

declare var NSAccessibilityShownMenuAttribute: string;

declare var NSAccessibilitySizeAttribute: string;

interface NSAccessibilitySlider extends NSAccessibilityElementProtocol {

	accessibilityLabel(): string;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityValue(): any;
}
declare var NSAccessibilitySlider: {

	prototype: NSAccessibilitySlider;
};

declare var NSAccessibilitySliderRole: string;

declare var NSAccessibilitySortButtonSubrole: string;

enum NSAccessibilitySortDirection {

	Unknown = 0,

	Ascending = 1,

	Descending = 2
}

globalThis.NSAccessibilitySortDirection = NSAccessibilitySortDirection;

declare var NSAccessibilitySortDirectionAttribute: string;

declare var NSAccessibilitySplitGroupRole: string;

declare var NSAccessibilitySplitterRole: string;

declare var NSAccessibilitySplittersAttribute: string;

declare var NSAccessibilityStandardWindowSubrole: string;

interface NSAccessibilityStaticText extends NSAccessibilityElementProtocol {

	accessibilityAttributedStringForRange?(for_: NSRange): NSAttributedString;

	accessibilityValue(): string;

	accessibilityVisibleCharacterRange?(): NSRange;
}
declare var NSAccessibilityStaticText: {

	prototype: NSAccessibilityStaticText;
};

declare var NSAccessibilityStaticTextRole: string;

interface NSAccessibilityStepper extends NSAccessibilityElementProtocol {

	accessibilityLabel(): string;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityValue?(): any;
}
declare var NSAccessibilityStepper: {

	prototype: NSAccessibilityStepper;
};

declare var NSAccessibilityStrikethroughColorTextAttribute: string;

declare var NSAccessibilityStrikethroughTextAttribute: string;

declare var NSAccessibilityStringForRangeParameterizedAttribute: string;

declare var NSAccessibilityStyleRangeForIndexParameterizedAttribute: string;

declare var NSAccessibilitySubroleAttribute: string;

declare var NSAccessibilitySuperscriptTextAttribute: string;

interface NSAccessibilitySwitch extends NSAccessibilityButton {

	accessibilityPerformDecrement?(): boolean;

	accessibilityPerformIncrement?(): boolean;

	accessibilityValue(): string;
}
declare var NSAccessibilitySwitch: {

	prototype: NSAccessibilitySwitch;
};

declare var NSAccessibilitySwitchSubrole: string;

declare var NSAccessibilitySystemDialogSubrole: string;

declare var NSAccessibilitySystemFloatingWindowSubrole: string;

declare var NSAccessibilitySystemWideRole: string;

declare var NSAccessibilityTabButtonSubrole: string;

declare var NSAccessibilityTabGroupRole: string;

interface NSAccessibilityTable extends NSAccessibilityGroup {

	accessibilityColumnHeaderUIElements?(): NSArray<any>;

	accessibilityColumns?(): NSArray<any>;

	accessibilityLabel(): string;

	accessibilityRowHeaderUIElements?(): NSArray<any>;

	accessibilityRows(): NSArray<NSAccessibilityRow>;

	accessibilitySelectedCells?(): NSArray<any>;

	accessibilitySelectedColumns?(): NSArray<any>;

	accessibilitySelectedRows?(): NSArray<NSAccessibilityRow>;

	accessibilityVisibleCells?(): NSArray<any>;

	accessibilityVisibleColumns?(): NSArray<any>;

	accessibilityVisibleRows?(): NSArray<NSAccessibilityRow>;

	setAccessibilitySelectedRows?(_: NSArray<NSAccessibilityRow>): void;
}
declare var NSAccessibilityTable: {

	prototype: NSAccessibilityTable;
};

declare var NSAccessibilityTableRole: string;

declare var NSAccessibilityTableRowSubrole: string;

declare var NSAccessibilityTabsAttribute: string;

declare var NSAccessibilityTailIndentMarkerTypeValue: string;

declare var NSAccessibilityTextAlignmentAttribute: string;

declare var NSAccessibilityTextAreaRole: string;

declare var NSAccessibilityTextAttachmentSubrole: string;

declare var NSAccessibilityTextFieldRole: string;

declare var NSAccessibilityTextLinkSubrole: string;

declare var NSAccessibilityTimelineSubrole: string;

declare var NSAccessibilityTitleAttribute: string;

declare var NSAccessibilityTitleChangedNotification: string;

declare var NSAccessibilityTitleUIElementAttribute: string;

declare var NSAccessibilityToggleSubrole: string;

declare var NSAccessibilityToolbarButtonAttribute: string;

declare var NSAccessibilityToolbarButtonSubrole: string;

declare var NSAccessibilityToolbarRole: string;

declare var NSAccessibilityTopLevelUIElementAttribute: string;

declare var NSAccessibilityUIElementDestroyedNotification: string;

declare var NSAccessibilityUIElementsKey: string;

declare var NSAccessibilityURLAttribute: string;

declare var NSAccessibilityUnderlineColorTextAttribute: string;

declare var NSAccessibilityUnderlineTextAttribute: string;

declare function NSAccessibilityUnignoredAncestor(element: any): any;

declare function NSAccessibilityUnignoredChildren(originalChildren: NSArray<any> | any[]): NSArray<any>;

declare function NSAccessibilityUnignoredChildrenForOnlyChild(originalChild: any): NSArray<any>;

declare function NSAccessibilityUnignoredDescendant(element: any): any;

declare var NSAccessibilityUnitDescriptionAttribute: string;

enum NSAccessibilityUnits {

	Unknown = 0,

	Inches = 1,

	Centimeters = 2,

	Points = 3,

	Picas = 4
}

globalThis.NSAccessibilityUnits = NSAccessibilityUnits;

declare var NSAccessibilityUnitsAttribute: string;

declare var NSAccessibilityUnitsChangedNotification: string;

declare var NSAccessibilityUnknownMarkerTypeValue: string;

declare var NSAccessibilityUnknownOrientationValue: string;

declare var NSAccessibilityUnknownRole: string;

declare var NSAccessibilityUnknownSortDirectionValue: string;

declare var NSAccessibilityUnknownSubrole: string;

declare var NSAccessibilityUnknownUnitValue: string;

declare var NSAccessibilityValueAttribute: string;

declare var NSAccessibilityValueChangedNotification: string;

declare var NSAccessibilityValueDescriptionAttribute: string;

declare var NSAccessibilityValueIndicatorRole: string;

declare var NSAccessibilityVerticalOrientationValue: string;

declare var NSAccessibilityVerticalScrollBarAttribute: string;

declare var NSAccessibilityVerticalUnitDescriptionAttribute: string;

declare var NSAccessibilityVerticalUnitsAttribute: string;

declare var NSAccessibilityVisibleCellsAttribute: string;

declare var NSAccessibilityVisibleCharacterRangeAttribute: string;

declare var NSAccessibilityVisibleChildrenAttribute: string;

declare var NSAccessibilityVisibleColumnsAttribute: string;

declare var NSAccessibilityVisibleNameKey: string;

declare var NSAccessibilityVisibleRowsAttribute: string;

declare var NSAccessibilityWarningValueAttribute: string;

declare var NSAccessibilityWindowAttribute: string;

declare var NSAccessibilityWindowCreatedNotification: string;

declare var NSAccessibilityWindowDeminiaturizedNotification: string;

declare var NSAccessibilityWindowMiniaturizedNotification: string;

declare var NSAccessibilityWindowMovedNotification: string;

declare var NSAccessibilityWindowResizedNotification: string;

declare var NSAccessibilityWindowRole: string;

declare var NSAccessibilityWindowsAttribute: string;

declare var NSAccessibilityZoomButtonAttribute: string;

declare var NSAccessibilityZoomButtonSubrole: string;

declare class NSActionCell extends NSCell {
}

declare class NSAlert extends NSObject {

	static alertWithError(error: NSError): NSAlert;

	setAccessoryView(_: NSView)

	accessoryView: NSView;

	setAlertStyle(_: NSAlertStyle)

	alertStyle: NSAlertStyle;

	readonly buttons: NSArray<NSButton>;

	setDelegate(_: NSAlertDelegate)

	delegate: NSAlertDelegate;

	setHelpAnchor(_: string)

	helpAnchor: string;

	setIcon(_: NSImage)

	icon: NSImage;

	setInformativeText(_: string)

	informativeText: string;

	setMessageText(_: string)

	messageText: string;

	setShowsHelp(_: boolean)

	showsHelp: boolean;

	setShowsSuppressionButton(_: boolean)

	showsSuppressionButton: boolean;

	readonly suppressionButton: NSButton;

	readonly window: NSWindow;

	addButtonWithTitle(withTitle: string): NSButton;

	beginSheetModalForWindowCompletionHandler(for_: NSWindow, completionHandler?: (p1: number) => void): void;

	layout(): void;

	runModal(): number;
}

interface NSAlertDelegate extends NSObjectProtocol {

	alertShowHelp?(_: NSAlert): boolean;
}
declare var NSAlertDelegate: {

	prototype: NSAlertDelegate;
};

declare var NSAlertFirstButtonReturn: number;

declare var NSAlertSecondButtonReturn: number;

enum NSAlertStyle {

	Warning = 0,

	Informational = 1,

	Critical = 2
}

globalThis.NSAlertStyle = NSAlertStyle;

declare var NSAlertThirdButtonReturn: number;

declare var NSAlignmentBinding: string;

declare class NSAlignmentFeedbackFilter extends NSObject {

	static inputEventMask(): NSEventMask;

	alignmentFeedbackTokenForHorizontalMovementInViewPreviousXAlignedXDefaultX(in_?: NSView, previousX: number, alignedX: number, defaultX: number): NSAlignmentFeedbackToken;

	alignmentFeedbackTokenForMovementInViewPreviousPointAlignedPointDefaultPoint(in_?: NSView, previousPoint: CGPoint, alignedPoint: CGPoint, defaultPoint: CGPoint): NSAlignmentFeedbackToken;

	alignmentFeedbackTokenForVerticalMovementInViewPreviousYAlignedYDefaultY(in_?: NSView, previousY: number, alignedY: number, defaultY: number): NSAlignmentFeedbackToken;

	performFeedbackPerformanceTime(_: NSArray<NSAlignmentFeedbackToken>, performanceTime: NSHapticFeedbackPerformanceTime): void;

	updateWithEvent(with_: NSEvent): void;

	updateWithPanRecognizer(withPanRecognizer: NSPanGestureRecognizer): void;
}

interface NSAlignmentFeedbackToken extends NSObjectProtocol {
}
declare var NSAlignmentFeedbackToken: {

	prototype: NSAlignmentFeedbackToken;
};

declare var NSAllRomanInputSourcesLocaleIdentifier: string;

declare var NSAllowsEditingMultipleValuesSelectionBindingOption: string;

declare var NSAllowsNullArgumentBindingOption: string;

declare var NSAlternateImageBinding: string;

declare var NSAlternateTitleBinding: string;

declare var NSAlwaysPresentsApplicationModalAlertsBindingOption: string;

interface NSAnimatablePropertyContainer {

	setAnimations(_: NSDictionary<string, any>)

	animations: NSDictionary<string, any>;

	animationForKey(forKey: string): any;

	animator(): NSAnimatablePropertyContainer;
}
declare var NSAnimatablePropertyContainer: {

	prototype: NSAnimatablePropertyContainer;

	defaultAnimationForKey(forKey: string): any;
};

declare var NSAnimateBinding: string;

declare class NSAnimation extends NSObject implements NSCoding, NSCopying {

	readonly isAnimating: boolean;

	setAnimationBlockingMode(_: NSAnimationBlockingMode)

	animationBlockingMode: NSAnimationBlockingMode;

	setAnimationCurve(_: NSAnimationCurve)

	animationCurve: NSAnimationCurve;

	setCurrentProgress(_: number)

	currentProgress: number;

	readonly currentValue: number;

	setDelegate(_: NSAnimationDelegate)

	delegate: NSAnimationDelegate;

	setDuration(_: number)

	duration: number;

	setFrameRate(_: number)

	frameRate: number;

	setProgressMarks(_: NSArray<number>)

	progressMarks: NSArray<number>;

	readonly runLoopModesForAnimating: NSArray<string>;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(duration: number, animationCurve: NSAnimationCurve);

	addProgressMark(_: number): void;

	clearStartAnimation(): void;

	clearStopAnimation(): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	removeProgressMark(_: number): void;

	startAnimation(): void;

	startWhenAnimationReachesProgress(when: NSAnimation, reachesProgress: number): void;

	stopAnimation(): void;

	stopWhenAnimationReachesProgress(when: NSAnimation, reachesProgress: number): void;
}

enum NSAnimationBlockingMode {

	Blocking = 0,

	Nonblocking = 1,

	NonblockingThreaded = 2
}

globalThis.NSAnimationBlockingMode = NSAnimationBlockingMode;

declare class NSAnimationContext extends NSObject {

	static beginGrouping(): void;

	static endGrouping(): void;

	static runAnimationGroup(_: (p1: NSAnimationContext) => void): void;

	static runAnimationGroupCompletionHandler(_: (p1: NSAnimationContext) => void, completionHandler?: () => void): void;

	setAllowsImplicitAnimation(_: boolean)

	allowsImplicitAnimation: boolean;

	setCompletionHandler(_: () => void)

	completionHandler: () => void;

	setDuration(_: number)

	duration: number;

	setTimingFunction(_: CAMediaTimingFunction)

	timingFunction: CAMediaTimingFunction;

	static currentContext(): NSAnimationContext;
}

enum NSAnimationCurve {

	EaseInOut = 0,

	EaseIn = 1,

	EaseOut = 2,

	Linear = 3
}

globalThis.NSAnimationCurve = NSAnimationCurve;

declare var NSAnimationDelayBinding: string;

interface NSAnimationDelegate extends NSObjectProtocol {

	animationDidReachProgressMark?(_: NSAnimation, didReachProgressMark: number): void;

	animationValueForProgress?(_: NSAnimation, valueForProgress: number): number;

	animationDidEnd?(_: NSAnimation): void;

	animationDidStop?(_: NSAnimation): void;

	animationShouldStart?(_: NSAnimation): boolean;
}
declare var NSAnimationDelegate: {

	prototype: NSAnimationDelegate;
};

enum NSAnimationEffect {

	DisappearingItemDefault = 0,

	Poof = 10
}

globalThis.NSAnimationEffect = NSAnimationEffect;

declare var NSAnimationProgressMark: string;

declare var NSAnimationProgressMarkNotification: string;

declare var NSAnimationTriggerOrderIn: string;

declare var NSAnimationTriggerOrderOut: string;

declare var NSAntialiasThresholdChangedNotification: string;

declare var NSApp: NSApplication;

declare var NSAppKitIgnoredException: string;

declare var NSAppKitVersionNumber: number;

declare var NSAppKitVersionNumber10_0: number;

declare var NSAppKitVersionNumber10_1: number;

declare var NSAppKitVersionNumber10_10: number;

declare var NSAppKitVersionNumber10_10_2: number;

declare var NSAppKitVersionNumber10_10_3: number;

declare var NSAppKitVersionNumber10_10_4: number;

declare var NSAppKitVersionNumber10_10_5: number;

declare var NSAppKitVersionNumber10_10_Max: number;

declare var NSAppKitVersionNumber10_11: number;

declare var NSAppKitVersionNumber10_11_1: number;

declare var NSAppKitVersionNumber10_11_2: number;

declare var NSAppKitVersionNumber10_11_3: number;

declare var NSAppKitVersionNumber10_12: number;

declare var NSAppKitVersionNumber10_12_1: number;

declare var NSAppKitVersionNumber10_12_2: number;

declare var NSAppKitVersionNumber10_13: number;

declare var NSAppKitVersionNumber10_13_1: number;

declare var NSAppKitVersionNumber10_13_2: number;

declare var NSAppKitVersionNumber10_13_4: number;

declare var NSAppKitVersionNumber10_14: number;

declare var NSAppKitVersionNumber10_14_1: number;

declare var NSAppKitVersionNumber10_14_2: number;

declare var NSAppKitVersionNumber10_14_3: number;

declare var NSAppKitVersionNumber10_14_4: number;

declare var NSAppKitVersionNumber10_14_5: number;

declare var NSAppKitVersionNumber10_2: number;

declare var NSAppKitVersionNumber10_2_3: number;

declare var NSAppKitVersionNumber10_3: number;

declare var NSAppKitVersionNumber10_3_2: number;

declare var NSAppKitVersionNumber10_3_3: number;

declare var NSAppKitVersionNumber10_3_5: number;

declare var NSAppKitVersionNumber10_3_7: number;

declare var NSAppKitVersionNumber10_3_9: number;

declare var NSAppKitVersionNumber10_4: number;

declare var NSAppKitVersionNumber10_4_1: number;

declare var NSAppKitVersionNumber10_4_3: number;

declare var NSAppKitVersionNumber10_4_4: number;

declare var NSAppKitVersionNumber10_4_7: number;

declare var NSAppKitVersionNumber10_5: number;

declare var NSAppKitVersionNumber10_5_2: number;

declare var NSAppKitVersionNumber10_5_3: number;

declare var NSAppKitVersionNumber10_6: number;

declare var NSAppKitVersionNumber10_7: number;

declare var NSAppKitVersionNumber10_7_2: number;

declare var NSAppKitVersionNumber10_7_3: number;

declare var NSAppKitVersionNumber10_7_4: number;

declare var NSAppKitVersionNumber10_8: number;

declare var NSAppKitVersionNumber10_9: number;

declare var NSAppKitVersionNumberWithColumnResizingBrowser: number;

declare var NSAppKitVersionNumberWithContinuousScrollingBrowser: number;

declare var NSAppKitVersionNumberWithCursorSizeSupport: number;

declare var NSAppKitVersionNumberWithCustomSheetPosition: number;

declare var NSAppKitVersionNumberWithDeferredWindowDisplaySupport: number;

declare var NSAppKitVersionNumberWithDirectionalTabs: number;

declare var NSAppKitVersionNumberWithDockTilePlugInSupport: number;

declare var NSAppKitVersionNumberWithPatternColorLeakFix: number;

declare var NSAppKitVirtualMemoryException: string;

declare class NSAppearance extends NSObject implements NSSecureCoding {

	static appearanceNamed(named: string): NSAppearance;

	readonly allowsVibrancy: boolean;

	readonly name: string;

	static setCurrentAppearance(_: NSAppearance)

	currentAppearance: NSAppearance;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(appearanceNamed: string, bundle: NSBundle);

	static create(coder: NSCoder); // inherited from NSCoding

	bestMatchFromAppearancesWithNames(from: NSArray<string>): string;

	encodeWithCoder(_: NSCoder): void;
}

interface NSAppearanceCustomization extends NSObjectProtocol {

	setAppearance(_: NSAppearance)

	appearance: NSAppearance;

	effectiveAppearance: NSAppearance;
}
declare var NSAppearanceCustomization: {

	prototype: NSAppearanceCustomization;
};

declare var NSAppearanceDocumentAttribute: string;

declare var NSAppearanceNameAccessibilityHighContrastAqua: string;

declare var NSAppearanceNameAccessibilityHighContrastDarkAqua: string;

declare var NSAppearanceNameAccessibilityHighContrastVibrantDark: string;

declare var NSAppearanceNameAccessibilityHighContrastVibrantLight: string;

declare var NSAppearanceNameAqua: string;

declare var NSAppearanceNameDarkAqua: string;

declare var NSAppearanceNameVibrantDark: string;

declare var NSAppearanceNameVibrantLight: string;

declare class NSApplication extends NSResponder implements NSAccessibility, NSAccessibilityElementProtocol, NSMenuItemValidation, NSUserInterfaceValidations, NSAppearanceCustomization {

	static detachDrawingThreadToTargetWithObject(_: string, toTarget: any, with_?: any): void;

	readonly isActive: boolean;

	setApplicationIconImage(_: NSImage)

	applicationIconImage: NSImage;

	setAutomaticCustomizeTouchBarMenuItemEnabled(_: boolean)

	isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;

	readonly currentEvent: NSEvent;

	readonly currentSystemPresentationOptions: NSApplicationPresentationOptions;

	setDelegate(_: NSApplicationDelegate)

	delegate: NSApplicationDelegate;

	readonly dockTile: NSDockTile;

	readonly enabledRemoteNotificationTypes: NSRemoteNotificationType;

	readonly isFullKeyboardAccessEnabled: boolean;

	setHelpMenu(_: NSMenu)

	helpMenu: NSMenu;

	readonly isHidden: boolean;

	readonly keyWindow: NSWindow;

	setMainMenu(_: NSMenu)

	mainMenu: NSMenu;

	readonly mainWindow: NSWindow;

	readonly modalWindow: NSWindow;

	readonly occlusionState: NSApplicationOcclusionState;

	readonly orderedDocuments: NSArray<NSDocument>;

	readonly orderedWindows: NSArray<NSWindow>;

	setPresentationOptions(_: NSApplicationPresentationOptions)

	presentationOptions: NSApplicationPresentationOptions;

	readonly isRegisteredForRemoteNotifications: boolean;

	readonly isRunning: boolean;

	setServicesMenu(_: NSMenu)

	servicesMenu: NSMenu;

	setServicesProvider(_: any)

	servicesProvider: any;

	readonly userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection;

	readonly windows: NSArray<NSWindow>;

	setWindowsMenu(_: NSMenu)

	windowsMenu: NSMenu;

	static sharedApplication(): NSApplication;

	setAccessibilityActivationPoint(_: CGPoint)

	accessibilityActivationPoint: CGPoint; // inherited from NSAccessibility

	setAccessibilityAllowedValues(_: NSArray<number>)

	accessibilityAllowedValues: NSArray<number>; // inherited from NSAccessibility

	setAccessibilityAlternateUIVisible(_: boolean)

	isAccessibilityAlternateUIVisible: boolean; // inherited from NSAccessibility

	setAccessibilityApplicationFocusedUIElement(_: any)

	accessibilityApplicationFocusedUIElement: any; // inherited from NSAccessibility

	setAccessibilityCancelButton(_: any)

	accessibilityCancelButton: any; // inherited from NSAccessibility

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)

	accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>; // inherited from NSAccessibility

	setAccessibilityClearButton(_: any)

	accessibilityClearButton: any; // inherited from NSAccessibility

	setAccessibilityCloseButton(_: any)

	accessibilityCloseButton: any; // inherited from NSAccessibility

	setAccessibilityColumnCount(_: number)

	accessibilityColumnCount: number; // inherited from NSAccessibility

	setAccessibilityColumnHeaderUIElements(_: NSArray<any>)

	accessibilityColumnHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumnIndexRange(_: NSRange)

	accessibilityColumnIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityColumnTitles(_: NSArray<any>)

	accessibilityColumnTitles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumns(_: NSArray<any>)

	accessibilityColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityContents(_: NSArray<any>)

	accessibilityContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityCriticalValue(_: any)

	accessibilityCriticalValue: any; // inherited from NSAccessibility

	setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)

	accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>; // inherited from NSAccessibility

	setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)

	accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>; // inherited from NSAccessibility

	setAccessibilityDecrementButton(_: any)

	accessibilityDecrementButton: any; // inherited from NSAccessibility

	setAccessibilityDefaultButton(_: any)

	accessibilityDefaultButton: any; // inherited from NSAccessibility

	setAccessibilityDisclosed(_: boolean)

	isAccessibilityDisclosed: boolean; // inherited from NSAccessibility

	setAccessibilityDisclosedByRow(_: any)

	accessibilityDisclosedByRow: any; // inherited from NSAccessibility

	setAccessibilityDisclosedRows(_: any)

	accessibilityDisclosedRows: any; // inherited from NSAccessibility

	setAccessibilityDisclosureLevel(_: number)

	accessibilityDisclosureLevel: number; // inherited from NSAccessibility

	setAccessibilityDocument(_: string)

	accessibilityDocument: string; // inherited from NSAccessibility

	setAccessibilityEdited(_: boolean)

	isAccessibilityEdited: boolean; // inherited from NSAccessibility

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean; // inherited from NSAccessibility

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean; // inherited from NSAccessibility

	setAccessibilityExpanded(_: boolean)

	isAccessibilityExpanded: boolean; // inherited from NSAccessibility

	setAccessibilityExtrasMenuBar(_: any)

	accessibilityExtrasMenuBar: any; // inherited from NSAccessibility

	setAccessibilityFilename(_: string)

	accessibilityFilename: string; // inherited from NSAccessibility

	setAccessibilityFocused(_: boolean)

	isAccessibilityFocused: boolean; // inherited from NSAccessibility

	setAccessibilityFocusedWindow(_: any)

	accessibilityFocusedWindow: any; // inherited from NSAccessibility

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect; // inherited from NSAccessibility

	setAccessibilityFrontmost(_: boolean)

	isAccessibilityFrontmost: boolean; // inherited from NSAccessibility

	setAccessibilityFullScreenButton(_: any)

	accessibilityFullScreenButton: any; // inherited from NSAccessibility

	setAccessibilityGrowArea(_: any)

	accessibilityGrowArea: any; // inherited from NSAccessibility

	setAccessibilityHandles(_: NSArray<any>)

	accessibilityHandles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityHeader(_: any)

	accessibilityHeader: any; // inherited from NSAccessibility

	setAccessibilityHelp(_: string)

	accessibilityHelp: string; // inherited from NSAccessibility

	setAccessibilityHidden(_: boolean)

	isAccessibilityHidden: boolean; // inherited from NSAccessibility

	setAccessibilityHorizontalScrollBar(_: any)

	accessibilityHorizontalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityHorizontalUnitDescription(_: string)

	accessibilityHorizontalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityHorizontalUnits(_: NSAccessibilityUnits)

	accessibilityHorizontalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityIdentifier(_: string)

	accessibilityIdentifier: string; // inherited from NSAccessibility

	setAccessibilityIncrementButton(_: any)

	accessibilityIncrementButton: any; // inherited from NSAccessibility

	setAccessibilityIndex(_: number)

	accessibilityIndex: number; // inherited from NSAccessibility

	setAccessibilityInsertionPointLineNumber(_: number)

	accessibilityInsertionPointLineNumber: number; // inherited from NSAccessibility

	setAccessibilityLabel(_: string)

	accessibilityLabel: string; // inherited from NSAccessibility

	setAccessibilityLabelUIElements(_: NSArray<any>)

	accessibilityLabelUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityLabelValue(_: number)

	accessibilityLabelValue: number; // inherited from NSAccessibility

	setAccessibilityLinkedUIElements(_: NSArray<any>)

	accessibilityLinkedUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMain(_: boolean)

	isAccessibilityMain: boolean; // inherited from NSAccessibility

	setAccessibilityMainWindow(_: any)

	accessibilityMainWindow: any; // inherited from NSAccessibility

	setAccessibilityMarkerGroupUIElement(_: any)

	accessibilityMarkerGroupUIElement: any; // inherited from NSAccessibility

	setAccessibilityMarkerTypeDescription(_: string)

	accessibilityMarkerTypeDescription: string; // inherited from NSAccessibility

	setAccessibilityMarkerUIElements(_: NSArray<any>)

	accessibilityMarkerUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMarkerValues(_: any)

	accessibilityMarkerValues: any; // inherited from NSAccessibility

	setAccessibilityMaxValue(_: any)

	accessibilityMaxValue: any; // inherited from NSAccessibility

	setAccessibilityMenuBar(_: any)

	accessibilityMenuBar: any; // inherited from NSAccessibility

	setAccessibilityMinValue(_: any)

	accessibilityMinValue: any; // inherited from NSAccessibility

	setAccessibilityMinimizeButton(_: any)

	accessibilityMinimizeButton: any; // inherited from NSAccessibility

	setAccessibilityMinimized(_: boolean)

	isAccessibilityMinimized: boolean; // inherited from NSAccessibility

	setAccessibilityModal(_: boolean)

	isAccessibilityModal: boolean; // inherited from NSAccessibility

	setAccessibilityNextContents(_: NSArray<any>)

	accessibilityNextContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityNumberOfCharacters(_: number)

	accessibilityNumberOfCharacters: number; // inherited from NSAccessibility

	setAccessibilityOrderedByRow(_: boolean)

	isAccessibilityOrderedByRow: boolean; // inherited from NSAccessibility

	setAccessibilityOrientation(_: NSAccessibilityOrientation)

	accessibilityOrientation: NSAccessibilityOrientation; // inherited from NSAccessibility

	setAccessibilityOverflowButton(_: any)

	accessibilityOverflowButton: any; // inherited from NSAccessibility

	setAccessibilityParent(_: any)

	accessibilityParent: any; // inherited from NSAccessibility

	setAccessibilityPlaceholderValue(_: string)

	accessibilityPlaceholderValue: string; // inherited from NSAccessibility

	setAccessibilityPreviousContents(_: NSArray<any>)

	accessibilityPreviousContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityProtectedContent(_: boolean)

	isAccessibilityProtectedContent: boolean; // inherited from NSAccessibility

	setAccessibilityProxy(_: any)

	accessibilityProxy: any; // inherited from NSAccessibility

	setAccessibilityRequired(_: boolean)

	isAccessibilityRequired: boolean; // inherited from NSAccessibility

	setAccessibilityRole(_: string)

	accessibilityRole: string; // inherited from NSAccessibility

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string; // inherited from NSAccessibility

	setAccessibilityRowCount(_: number)

	accessibilityRowCount: number; // inherited from NSAccessibility

	setAccessibilityRowHeaderUIElements(_: NSArray<any>)

	accessibilityRowHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRowIndexRange(_: NSRange)

	accessibilityRowIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityRows(_: NSArray<any>)

	accessibilityRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRulerMarkerType(_: NSAccessibilityRulerMarkerType)

	accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType; // inherited from NSAccessibility

	setAccessibilitySearchButton(_: any)

	accessibilitySearchButton: any; // inherited from NSAccessibility

	setAccessibilitySearchMenu(_: any)

	accessibilitySearchMenu: any; // inherited from NSAccessibility

	setAccessibilitySelected(_: boolean)

	isAccessibilitySelected: boolean; // inherited from NSAccessibility

	setAccessibilitySelectedCells(_: NSArray<any>)

	accessibilitySelectedCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedChildren(_: NSArray<any>)

	accessibilitySelectedChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedColumns(_: NSArray<any>)

	accessibilitySelectedColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedRows(_: NSArray<any>)

	accessibilitySelectedRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedText(_: string)

	accessibilitySelectedText: string; // inherited from NSAccessibility

	setAccessibilitySelectedTextRange(_: NSRange)

	accessibilitySelectedTextRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)

	accessibilitySelectedTextRanges: NSArray<NSValue>; // inherited from NSAccessibility

	setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)

	accessibilityServesAsTitleForUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedCharacterRange(_: NSRange)

	accessibilitySharedCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySharedFocusElements(_: NSArray<any>)

	accessibilitySharedFocusElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedTextUIElements(_: NSArray<any>)

	accessibilitySharedTextUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityShownMenu(_: any)

	accessibilityShownMenu: any; // inherited from NSAccessibility

	setAccessibilitySortDirection(_: NSAccessibilitySortDirection)

	accessibilitySortDirection: NSAccessibilitySortDirection; // inherited from NSAccessibility

	setAccessibilitySplitters(_: NSArray<any>)

	accessibilitySplitters: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string; // inherited from NSAccessibility

	setAccessibilityTabs(_: NSArray<any>)

	accessibilityTabs: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityTitle(_: string)

	accessibilityTitle: string; // inherited from NSAccessibility

	setAccessibilityTitleUIElement(_: any)

	accessibilityTitleUIElement: any; // inherited from NSAccessibility

	setAccessibilityToolbarButton(_: any)

	accessibilityToolbarButton: any; // inherited from NSAccessibility

	setAccessibilityTopLevelUIElement(_: any)

	accessibilityTopLevelUIElement: any; // inherited from NSAccessibility

	setAccessibilityURL(_: NSURL)

	accessibilityURL: NSURL; // inherited from NSAccessibility

	setAccessibilityUnitDescription(_: string)

	accessibilityUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityUnits(_: NSAccessibilityUnits)

	accessibilityUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityValue(_: any)

	accessibilityValue: any; // inherited from NSAccessibility

	setAccessibilityValueDescription(_: string)

	accessibilityValueDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalScrollBar(_: any)

	accessibilityVerticalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityVerticalUnitDescription(_: string)

	accessibilityVerticalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalUnits(_: NSAccessibilityUnits)

	accessibilityVerticalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityVisibleCells(_: NSArray<any>)

	accessibilityVisibleCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleCharacterRange(_: NSRange)

	accessibilityVisibleCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilityVisibleChildren(_: NSArray<any>)

	accessibilityVisibleChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleColumns(_: NSArray<any>)

	accessibilityVisibleColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleRows(_: NSArray<any>)

	accessibilityVisibleRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityWarningValue(_: any)

	accessibilityWarningValue: any; // inherited from NSAccessibility

	setAccessibilityWindow(_: any)

	accessibilityWindow: any; // inherited from NSAccessibility

	setAccessibilityWindows(_: NSArray<any>)

	accessibilityWindows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityZoomButton(_: any)

	accessibilityZoomButton: any; // inherited from NSAccessibility

	setAppearance(_: NSAppearance)

	appearance: NSAppearance; // inherited from NSAppearanceCustomization

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly effectiveAppearance: NSAppearance; // inherited from NSAppearanceCustomization

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	abortModal(): void;

	accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;

	accessibilityCellForColumnRow(_: number, row: number): any;

	accessibilityFrame(): CGRect;

	accessibilityFrameForRange(_: NSRange): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLayoutPointForScreenPoint(_: CGPoint): CGPoint;

	accessibilityLayoutSizeForScreenSize(_: CGSize): CGSize;

	accessibilityLineForIndex(_: number): number;

	accessibilityParent(): any;

	accessibilityPerformCancel(): boolean;

	accessibilityPerformConfirm(): boolean;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformDelete(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPick(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityPerformRaise(): boolean;

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	accessibilityPerformShowMenu(): boolean;

	accessibilityRTFForRange(_: NSRange): NSData;

	accessibilityRangeForIndex(_: number): NSRange;

	accessibilityRangeForLine(_: number): NSRange;

	accessibilityRangeForPosition(_: CGPoint): NSRange;

	accessibilityScreenPointForLayoutPoint(_: CGPoint): CGPoint;

	accessibilityScreenSizeForLayoutSize(_: CGSize): CGSize;

	accessibilityStringForRange(_: NSRange): string;

	accessibilityStyleRangeForIndex(_: number): NSRange;

	activateContextHelpMode(_?: any): void;

	activateIgnoringOtherApps(ignoringOtherApps: boolean): void;

	activationPolicy(): NSApplicationActivationPolicy;

	addWindowsItemTitleFilename(_: NSWindow, title: string, filename: boolean): void;

	arrangeInFront(_?: any): void;

	beginModalSessionForWindow(for_: NSWindow): any;

	cancelUserAttentionRequest(_: number): void;

	changeWindowsItemTitleFilename(_: NSWindow, title: string, filename: boolean): void;

	completeStateRestoration(): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	deactivate(): void;

	disableRelaunchOnLogin(): void;

	discardEventsMatchingMaskBeforeEvent(matching: NSEventMask, before?: NSEvent): void;

	enableRelaunchOnLogin(): void;

	endModalSession(_: any): void;

	enumerateWindowsWithOptionsUsingBlock(options: NSWindowListOptions, using: (p1: NSWindow, p2: boolean) => void): void;

	extendStateRestoration(): void;

	finishLaunching(): void;

	hide(_?: any): void;

	hideOtherApplications(_?: any): void;

	isAccessibilityFocused(): boolean;

	isAccessibilitySelectorAllowed(_: string): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	miniaturizeAll(_?: any): void;

	nextEventMatchingMaskUntilDateInModeDequeue(matching: NSEventMask, until?: Date, inMode: string, dequeue: boolean): NSEvent;

	orderFrontCharacterPalette(_?: any): void;

	orderFrontColorPanel(_?: any): void;

	orderFrontStandardAboutPanel(_?: any): void;

	orderFrontStandardAboutPanelWithOptions(options: NSDictionary<string, any>): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	postEventAtStart(_: NSEvent, atStart: boolean): void;

	preventWindowOrdering(): void;

	registerForRemoteNotificationTypes(matching: NSRemoteNotificationType): void;

	registerForRemoteNotifications(): void;

	registerServicesMenuSendTypesReturnTypes(_: NSArray<string>, returnTypes: NSArray<string>): void;

	registerUserInterfaceItemSearchHandler(_: NSUserInterfaceItemSearching): void;

	removeWindowsItem(_: NSWindow): void;

	replyToApplicationShouldTerminate(toApplicationShouldTerminate: boolean): void;

	replyToOpenOrPrint(toOpenOrPrint: NSApplicationDelegateReply): void;

	reportException(_: NSException): void;

	requestUserAttention(_: NSRequestUserAttentionType): number;

	respondsToSelector(_: string): boolean;

	restoreWindowWithIdentifierStateCompletionHandler(withIdentifier: string, state: NSCoder, completionHandler?: (p1: NSWindow, p2: NSError) => void): boolean;

	retainCount(): number;

	run(): void;

	runModalForWindow(for_: NSWindow): number;

	runModalSession(_: any): number;

	runPageLayout(_?: any): void;

	searchStringInUserInterfaceItemStringSearchRangeFoundRange(_: string, inUserInterfaceItemString: string, range: NSRange, found?: NSRange): boolean;

	self(): this;

	sendActionToFrom(_: string, to?: any, from?: any): boolean;

	sendEvent(_: NSEvent): void;

	setActivationPolicy(_: NSApplicationActivationPolicy): boolean;

	setWindowsNeedUpdate(_: boolean): void;

	showHelp(_?: any): void;

	stop(_?: any): void;

	stopModal(): void;

	stopModalWithCode(withCode: number): void;

	targetForAction(forAction: string): any;

	targetForActionToFrom(forAction: string, to?: any, from?: any): any;

	terminate(_?: any): void;

	toggleTouchBarCustomizationPalette(_?: any): void;

	unhide(_?: any): void;

	unhideAllApplications(_?: any): void;

	unhideWithoutActivation(): void;

	unregisterForRemoteNotifications(): void;

	unregisterUserInterfaceItemSearchHandler(_: NSUserInterfaceItemSearching): void;

	updateWindows(): void;

	updateWindowsItem(_: NSWindow): void;

	validateMenuItem(_: NSMenuItem): boolean;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;

	windowWithWindowNumber(withWindowNumber: number): NSWindow;
}

enum NSApplicationActivationOptions {

	ActivateAllWindows = 1,

	ActivateIgnoringOtherApps = 2
}

globalThis.NSApplicationActivationOptions = NSApplicationActivationOptions;

enum NSApplicationActivationPolicy {

	Regular = 0,

	Accessory = 1,

	Prohibited = 2
}

globalThis.NSApplicationActivationPolicy = NSApplicationActivationPolicy;

interface NSApplicationDelegate extends NSObjectProtocol {

	applicationContinueUserActivityRestorationHandler?(_: NSApplication, continue_: NSUserActivity, restorationHandler: (p1: NSArray<NSUserActivityRestoring>) => void): boolean;

	applicationOpenURLs?(_: NSApplication, open: NSArray<NSURL>): void;

	applicationUserDidAcceptCloudKitShareWithMetadata?(_: NSApplication, userDidAcceptCloudKitShareWith: CKShareMetadata): void;

	applicationDidUpdateUserActivity?(_: NSApplication, didUpdate: NSUserActivity): void;

	applicationDelegateHandlesKey?(_: NSApplication, delegateHandlesKey: string): boolean;

	applicationDidDecodeRestorableState?(_: NSApplication, didDecodeRestorableState: NSCoder): void;

	applicationDidFailToContinueUserActivityWithTypeError?(_: NSApplication, didFailToContinueUserActivityWithType: string, error: NSError): void;

	applicationDidFailToRegisterForRemoteNotificationsWithError?(_: NSApplication, didFailToRegisterForRemoteNotificationsWithError: NSError): void;

	applicationDidReceiveRemoteNotification?(_: NSApplication, didReceiveRemoteNotification: NSDictionary<string, any>): void;

	applicationDidRegisterForRemoteNotificationsWithDeviceToken?(_: NSApplication, didRegisterForRemoteNotificationsWithDeviceToken: NSData): void;

	applicationOpenFile?(_: NSApplication, openFile: string): boolean;

	applicationOpenFiles?(_: NSApplication, openFiles: NSArray<string>): void;

	applicationOpenFileWithoutUI?(_: any, openFileWithoutUI: string): boolean;

	applicationOpenTempFile?(_: NSApplication, openTempFile: string): boolean;

	applicationPrintFile?(_: NSApplication, printFile: string): boolean;

	applicationPrintFilesWithSettingsShowPrintPanels?(_: NSApplication, printFiles: NSArray<string>, withSettings: NSDictionary<string, any>, showPrintPanels: boolean): NSApplicationPrintReply;

	applicationWillContinueUserActivityWithType?(_: NSApplication, willContinueUserActivityWithType: string): boolean;

	applicationWillEncodeRestorableState?(_: NSApplication, willEncodeRestorableState: NSCoder): void;

	applicationWillPresentError?(_: NSApplication, willPresentError: NSError): NSError;

	applicationDidBecomeActive?(_: NSNotification): void;

	applicationDidChangeOcclusionState?(_: NSNotification): void;

	applicationDidChangeScreenParameters?(_: NSNotification): void;

	applicationDidFinishLaunching?(_: NSNotification): void;

	applicationDidHide?(_: NSNotification): void;

	applicationDidResignActive?(_: NSNotification): void;

	applicationDidUnhide?(_: NSNotification): void;

	applicationDidUpdate?(_: NSNotification): void;

	applicationDockMenu?(_: NSApplication): NSMenu;

	applicationOpenUntitledFile?(_: NSApplication): boolean;

	applicationShouldHandleReopenHasVisibleWindows?(_: NSApplication, hasVisibleWindows: boolean): boolean;

	applicationShouldOpenUntitledFile?(_: NSApplication): boolean;

	applicationShouldTerminate?(_: NSApplication): NSApplicationTerminateReply;

	applicationShouldTerminateAfterLastWindowClosed?(_: NSApplication): boolean;

	applicationWillBecomeActive?(_: NSNotification): void;

	applicationWillFinishLaunching?(_: NSNotification): void;

	applicationWillHide?(_: NSNotification): void;

	applicationWillResignActive?(_: NSNotification): void;

	applicationWillTerminate?(_: NSNotification): void;

	applicationWillUnhide?(_: NSNotification): void;

	applicationWillUpdate?(_: NSNotification): void;
}
declare var NSApplicationDelegate: {

	prototype: NSApplicationDelegate;
};

enum NSApplicationDelegateReply {

	Success = 0,

	Cancel = 1,

	Failure = 2
}

globalThis.NSApplicationDelegateReply = NSApplicationDelegateReply;

declare var NSApplicationDidBecomeActiveNotification: string;

declare var NSApplicationDidChangeOcclusionStateNotification: string;

declare var NSApplicationDidChangeScreenParametersNotification: string;

declare var NSApplicationDidFinishLaunchingNotification: string;

declare var NSApplicationDidFinishRestoringWindowsNotification: string;

declare var NSApplicationDidHideNotification: string;

declare var NSApplicationDidResignActiveNotification: string;

declare var NSApplicationDidUnhideNotification: string;

declare var NSApplicationDidUpdateNotification: string;

declare var NSApplicationLaunchIsDefaultLaunchKey: string;

declare var NSApplicationLaunchUserNotificationKey: string;

declare function NSApplicationLoad(): boolean;

declare function NSApplicationMain(argc: number, argv: string): never;

enum NSApplicationOcclusionState {

	Visible = 2
}

globalThis.NSApplicationOcclusionState = NSApplicationOcclusionState;

enum NSApplicationPresentationOptions {

	Default = 0,

	AutoHideDock = 1,

	HideDock = 2,

	AutoHideMenuBar = 4,

	HideMenuBar = 8,

	DisableAppleMenu = 16,

	DisableProcessSwitching = 32,

	DisableForceQuit = 64,

	DisableSessionTermination = 128,

	DisableHideApplication = 256,

	DisableMenuBarTransparency = 512,

	FullScreen = 1024,

	AutoHideToolbar = 2048,

	DisableCursorLocationAssistance = 4096
}

globalThis.NSApplicationPresentationOptions = NSApplicationPresentationOptions;

enum NSApplicationPrintReply {

	PrintingCancelled = 0,

	PrintingSuccess = 1,

	PrintingFailure = 3,

	PrintingReplyLater = 2
}

globalThis.NSApplicationPrintReply = NSApplicationPrintReply;

enum NSApplicationTerminateReply {

	TerminateCancel = 0,

	TerminateNow = 1,

	TerminateLater = 2
}

globalThis.NSApplicationTerminateReply = NSApplicationTerminateReply;

declare var NSApplicationWillBecomeActiveNotification: string;

declare var NSApplicationWillFinishLaunchingNotification: string;

declare var NSApplicationWillHideNotification: string;

declare var NSApplicationWillResignActiveNotification: string;

declare var NSApplicationWillTerminateNotification: string;

declare var NSApplicationWillUnhideNotification: string;

declare var NSApplicationWillUpdateNotification: string;

declare var NSArgumentBinding: string;

declare class NSArrayController extends NSObjectController {

	setAlwaysUsesMultipleValuesMarker(_: boolean)

	alwaysUsesMultipleValuesMarker: boolean;

	readonly arrangedObjects: any;

	readonly automaticRearrangementKeyPaths: NSArray<string>;

	setAutomaticallyRearrangesObjects(_: boolean)

	automaticallyRearrangesObjects: boolean;

	setAvoidsEmptySelection(_: boolean)

	avoidsEmptySelection: boolean;

	readonly canInsert: boolean;

	readonly canSelectNext: boolean;

	readonly canSelectPrevious: boolean;

	setClearsFilterPredicateOnInsertion(_: boolean)

	clearsFilterPredicateOnInsertion: boolean;

	setFilterPredicate(_: NSPredicate)

	filterPredicate: NSPredicate;

	setPreservesSelection(_: boolean)

	preservesSelection: boolean;

	readonly selectionIndex: number;

	readonly selectionIndexes: NSIndexSet;

	setSelectsInsertedObjects(_: boolean)

	selectsInsertedObjects: boolean;

	setSortDescriptors(_: NSArray<NSSortDescriptor>)

	sortDescriptors: NSArray<NSSortDescriptor>;

	addObjects(contentsOf: NSArray<any>): void;

	addSelectedObjects(_: NSArray<any>): boolean;

	addSelectionIndexes(_: NSIndexSet): boolean;

	arrangeObjects(_: NSArray<any>): NSArray<any>;

	didChangeArrangementCriteria(): void;

	insert(_?: any): void;

	insertObjectAtArrangedObjectIndex(_: any, atArrangedObjectIndex: number): void;

	insertObjectsAtArrangedObjectIndexes(contentsOf: NSArray<any>, atArrangedObjectIndexes: NSIndexSet): void;

	rearrangeObjects(): void;

	removeObjectAtArrangedObjectIndex(atArrangedObjectIndex: number): void;

	removeObjects(contentsOf: NSArray<any>): void;

	removeObjectsAtArrangedObjectIndexes(atArrangedObjectIndexes: NSIndexSet): void;

	removeSelectedObjects(_: NSArray<any>): boolean;

	removeSelectionIndexes(_: NSIndexSet): boolean;

	selectNext(_?: any): void;

	selectPrevious(_?: any): void;

	setSelectedObjects(_: NSArray<any>): boolean;

	setSelectionIndex(_: number): boolean;

	setSelectionIndexes(_: NSIndexSet): boolean;
}

declare var NSAttachmentAttributeName: string;

declare const NSAttachmentCharacter: number;

declare var NSAttributedStringBinding: string;

declare var NSAuthorDocumentAttribute: string;

declare var NSAutoPagination: NSPrintingPaginationMode;

enum NSAutoresizingMaskOptions {

	ViewNotSizable = 0,

	ViewMinXMargin = 1,

	ViewWidthSizable = 2,

	ViewMaxXMargin = 4,

	ViewMinYMargin = 8,

	ViewHeightSizable = 16,

	ViewMaxYMargin = 32
}

globalThis.NSAutoresizingMaskOptions = NSAutoresizingMaskOptions;

declare function NSAvailableWindowDepths(): NSWindowDepth;

declare const NSBackTabCharacter: number;

declare var NSBackgroundColorAttributeName: string;

declare var NSBackgroundColorDocumentAttribute: string;

enum NSBackgroundStyle {

	Normal = 0,

	Emphasized = 1,

	Raised = 2,

	Lowered = 3
}

globalThis.NSBackgroundStyle = NSBackgroundStyle;

declare var NSBackgroundStyleDark: NSBackgroundStyle;

declare var NSBackgroundStyleLight: NSBackgroundStyle;

declare var NSBackingPropertyOldColorSpaceKey: string;

declare var NSBackingPropertyOldScaleFactorKey: string;

enum NSBackingStoreType {

	Retained = 0,

	Nonretained = 1,

	Buffered = 2
}

globalThis.NSBackingStoreType = NSBackingStoreType;

declare const NSBackspaceCharacter: number;

declare const NSBacktabTextMovement: number;

declare var NSBadBitmapParametersException: string;

declare var NSBadComparisonException: string;

declare var NSBadRTFColorTableException: string;

declare var NSBadRTFDirectiveException: string;

declare var NSBadRTFFontTableException: string;

declare var NSBadRTFStyleSheetException: string;

declare var NSBaseURLDocumentOption: string;

declare var NSBaselineOffsetAttributeName: string;

declare function NSBeep(): void;

declare const NSBeginFunctionKey: number;

declare function NSBestDepth(colorSpace: string, bps: number, bpp: number, planar: boolean, exactMatch: boolean): NSWindowDepth;

declare var NSBevelLineJoinStyle: NSLineJoinStyle;

enum NSBezelStyle {

	Rounded = 1,

	RegularSquare = 2,

	Disclosure = 5,

	ShadowlessSquare = 6,

	Circular = 7,

	TexturedSquare = 8,

	HelpButton = 9,

	SmallSquare = 10,

	TexturedRounded = 11,

	RoundRect = 12,

	Recessed = 13,

	RoundedDisclosure = 14,

	Inline = 15
}

globalThis.NSBezelStyle = NSBezelStyle;

declare class NSBezierPath extends NSObject implements NSCopying, NSSecureCoding {

	static bezierPath(): NSBezierPath;

	static bezierPathWithOvalInRect(ovalIn: CGRect): NSBezierPath;

	static bezierPathWithRect(rect: CGRect): NSBezierPath;

	static bezierPathWithRoundedRectXRadiusYRadius(roundedRect: CGRect, xRadius: number, yRadius: number): NSBezierPath;

	static clipRect(_: CGRect): void;

	static drawPackedGlyphsAtPoint(_: string, at: CGPoint): void;

	static fillRect(_: CGRect): void;

	static strokeLineFromPointToPoint(from: CGPoint, to: CGPoint): void;

	static strokeRect(_: CGRect): void;

	readonly bezierPathByFlatteningPath: NSBezierPath;

	readonly bezierPathByReversingPath: NSBezierPath;

	readonly bounds: CGRect;

	readonly controlPointBounds: CGRect;

	readonly currentPoint: CGPoint;

	readonly elementCount: number;

	readonly isEmpty: boolean;

	setFlatness(_: number)

	flatness: number;

	setLineCapStyle(_: NSLineCapStyle)

	lineCapStyle: NSLineCapStyle;

	setLineJoinStyle(_: NSLineJoinStyle)

	lineJoinStyle: NSLineJoinStyle;

	setLineWidth(_: number)

	lineWidth: number;

	setMiterLimit(_: number)

	miterLimit: number;

	setWindingRule(_: NSWindingRule)

	windingRule: NSWindingRule;

	static setDefaultFlatness(_: number)

	defaultFlatness: number;

	static setDefaultLineCapStyle(_: NSLineCapStyle)

	defaultLineCapStyle: NSLineCapStyle;

	static setDefaultLineJoinStyle(_: NSLineJoinStyle)

	defaultLineJoinStyle: NSLineJoinStyle;

	static setDefaultLineWidth(_: number)

	defaultLineWidth: number;

	static setDefaultMiterLimit(_: number)

	defaultMiterLimit: number;

	static setDefaultWindingRule(_: NSWindingRule)

	defaultWindingRule: NSWindingRule;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addClip(): void;

	appendBezierPath(_: NSBezierPath): void;

	appendBezierPathWithArcFromPointToPointRadius(from: CGPoint, to: CGPoint, radius: number): void;

	appendBezierPathWithArcWithCenterRadiusStartAngleEndAngle(withCenter: CGPoint, radius: number, startAngle: number, endAngle: number): void;

	appendBezierPathWithArcWithCenterRadiusStartAngleEndAngleClockwise(withCenter: CGPoint, radius: number, startAngle: number, endAngle: number, clockwise: boolean): void;

	appendBezierPathWithCGGlyphInFont(withCGGlyph: number, in_: NSFont): void;

	appendBezierPathWithCGGlyphsCountInFont(withCGGlyphs: number, count: number, in_: NSFont): void;

	appendBezierPathWithOvalInRect(in_: CGRect): void;

	appendBezierPathWithPointsCount(_: CGPoint, count: number): void;

	appendBezierPathWithRect(_: CGRect): void;

	appendBezierPathWithRoundedRectXRadiusYRadius(_: CGRect, xRadius: number, yRadius: number): void;

	closePath(): void;

	containsPoint(_: CGPoint): boolean;

	copyWithZone(_?: any): any;

	curveToPointControlPoint1ControlPoint2(to: CGPoint, controlPoint1: CGPoint, controlPoint2: CGPoint): void;

	elementAtIndex(at: number): NSBezierPathElement;

	elementAtIndexAssociatedPoints(at: number, associatedPoints?: CGPoint): NSBezierPathElement;

	encodeWithCoder(_: NSCoder): void;

	fill(): void;

	getLineDashCountPhase(_?: number, count?: number, phase?: number): void;

	lineToPoint(to: CGPoint): void;

	moveToPoint(to: CGPoint): void;

	relativeCurveToPointControlPoint1ControlPoint2(to: CGPoint, controlPoint1: CGPoint, controlPoint2: CGPoint): void;

	relativeLineToPoint(to: CGPoint): void;

	relativeMoveToPoint(to: CGPoint): void;

	removeAllPoints(): void;

	setAssociatedPointsAtIndex(_?: CGPoint, at: number): void;

	setClip(): void;

	setLineDashCountPhase(_?: number, count: number, phase: number): void;

	stroke(): void;

	transformUsingAffineTransform(using: NSAffineTransform): void;
}

enum NSBezierPathElement {

	MoveTo = 0,

	LineTo = 1,

	CurveTo = 2,

	ClosePath = 3
}

globalThis.NSBezierPathElement = NSBezierPathElement;

declare class NSBindingSelectionMarker extends NSObject implements NSCopying {

	static defaultPlaceholderForMarkerOnClassWithBinding(for_?: NSBindingSelectionMarker, on: typeof NSObject, withBinding: string): any;

	static setDefaultPlaceholderForMarkerOnClassWithBinding(_?: any, for_?: NSBindingSelectionMarker, on: typeof NSObject, withBinding: string): void;

	static multipleValuesSelectionMarker(): NSBindingSelectionMarker;

	static noSelectionMarker(): NSBindingSelectionMarker;

	static notApplicableSelectionMarker(): NSBindingSelectionMarker;

	copyWithZone(_?: any): any;
}

enum NSBitmapFormat {

	AlphaFirst = 1,

	AlphaNonpremultiplied = 2,

	FloatingPointSamples = 4,

	SixteenBitLittleEndian = 256,

	ThirtyTwoBitLittleEndian = 512,

	SixteenBitBigEndian = 1024,

	ThirtyTwoBitBigEndian = 2048
}

globalThis.NSBitmapFormat = NSBitmapFormat;

enum NSBitmapImageFileType {

	TIFF = 0,

	BMP = 1,

	GIF = 2,

	JPEG = 3,

	PNG = 4,

	JPEG2000 = 5
}

globalThis.NSBitmapImageFileType = NSBitmapImageFileType;

declare class NSBitmapImageRep extends NSImageRep implements NSSecureCoding {

	static TIFFRepresentationOfImageRepsInArray(in_: NSArray<NSImageRep>): NSData;

	static TIFFRepresentationOfImageRepsInArrayUsingCompressionFactor(in_: NSArray<NSImageRep>, using: NSTIFFCompression, factor: number): NSData;

	static getTIFFCompressionTypesCount(_?: NSTIFFCompression, count: number): void;

	static imageRepWithData(data: NSData): NSBitmapImageRep;

	static imageRepsWithData(with_: NSData): NSArray<NSImageRep>;

	static localizedNameForTIFFCompressionType(forTIFFCompressionType: NSTIFFCompression): string;

	static representationOfImageRepsInArrayUsingTypeProperties(in_: NSArray<NSImageRep>, using: NSBitmapImageFileType, properties: NSDictionary<string, any>): NSData;

	readonly CGImage: any;

	readonly TIFFRepresentation: NSData;

	readonly bitmapData: string;

	readonly bitmapFormat: NSBitmapFormat;

	readonly bitsPerPixel: number;

	readonly bytesPerPlane: number;

	readonly bytesPerRow: number;

	readonly colorSpace: NSColorSpace;

	readonly numberOfPlanes: number;

	readonly isPlanar: boolean;

	readonly samplesPerPixel: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(forIncrementalLoad: void);

	static create(bitmapDataPlanes: string, pixelsWide: number, pixelsHigh: number, bitsPerSample: number, samplesPerPixel: number, hasAlpha: boolean, isPlanar: boolean, colorSpaceName: string, bitmapFormat: NSBitmapFormat, bytesPerRow: number, bitsPerPixel: number);

	static create(bitmapDataPlanes: string, pixelsWide: number, pixelsHigh: number, bitsPerSample: number, samplesPerPixel: number, hasAlpha: boolean, isPlanar: boolean, colorSpaceName: string, bytesPerRow: number, bitsPerPixel: number);

	static create(CGImage: any);

	static create(CIImage: CIImage);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(data: NSData);

	TIFFRepresentationUsingCompressionFactor(using: NSTIFFCompression, factor: number): NSData;

	bitmapImageRepByConvertingToColorSpaceRenderingIntent(to: NSColorSpace, renderingIntent: NSColorRenderingIntent): NSBitmapImageRep;

	bitmapImageRepByRetaggingWithColorSpace(with_: NSColorSpace): NSBitmapImageRep;

	canBeCompressedUsing(using: NSTIFFCompression): boolean;

	colorAtXY(x: number, y: number): NSColor;

	colorizeByMappingGrayToColorBlackMappingWhiteMapping(byMappingGray: number, to?: NSColor, blackMapping?: NSColor, whiteMapping?: NSColor): void;

	encodeWithCoder(_: NSCoder): void;

	getBitmapDataPlanes(_?: string): void;

	getCompressionFactor(_?: NSTIFFCompression, factor?: number): void;

	getPixelAtXY(_: number, atX: number, y: number): void;

	incrementalLoadFromDataComplete(from: NSData, complete: boolean): number;

	representationUsingTypeProperties(using: NSBitmapImageFileType, properties: NSDictionary<string, any>): NSData;

	setColorAtXY(_: NSColor, atX: number, y: number): void;

	setCompressionFactor(_: NSTIFFCompression, factor: number): void;

	setPixelAtXY(_: number, atX: number, y: number): void;

	setPropertyWithValue(_: string, withValue?: any): void;

	valueForProperty(forProperty: string): any;
}

declare function NSBitsPerPixelFromDepth(depth: NSWindowDepth): number;

declare function NSBitsPerSampleFromDepth(depth: NSWindowDepth): number;

declare var NSBlack: number;

enum NSBorderType {

	NoBorder = 0,

	LineBorder = 1,

	BezelBorder = 2,

	GrooveBorder = 3
}

globalThis.NSBorderType = NSBorderType;

declare var NSBottomMarginDocumentAttribute: string;

declare class NSBox extends NSView {

	setBorderColor(_: NSColor)

	borderColor: NSColor;

	readonly borderRect: CGRect;

	setBorderWidth(_: number)

	borderWidth: number;

	setBoxType(_: NSBoxType)

	boxType: NSBoxType;

	setContentView(_: NSView)

	contentView: NSView;

	setContentViewMargins(_: CGSize)

	contentViewMargins: CGSize;

	setCornerRadius(_: number)

	cornerRadius: number;

	setFillColor(_: NSColor)

	fillColor: NSColor;

	setTitle(_: string)

	title: string;

	readonly titleCell: any;

	setTitleFont(_: NSFont)

	titleFont: NSFont;

	setTitlePosition(_: NSTitlePosition)

	titlePosition: NSTitlePosition;

	readonly titleRect: CGRect;

	setTransparent(_: boolean)

	isTransparent: boolean;

	setFrameFromContentFrame(_: CGRect): void;

	sizeToFit(): void;
}

declare var NSBoxOldStyle: NSBoxType;

declare var NSBoxSecondary: NSBoxType;

enum NSBoxType {

	Primary = 0,

	Separator = 2,

	Custom = 4
}

globalThis.NSBoxType = NSBoxType;

declare const NSBreakFunctionKey: number;

declare class NSBrowser extends NSControl {

	static removeSavedColumnsWithAutosaveName(withAutosaveName: string): void;

	setAllowsBranchSelection(_: boolean)

	allowsBranchSelection: boolean;

	setAllowsEmptySelection(_: boolean)

	allowsEmptySelection: boolean;

	setAllowsMultipleSelection(_: boolean)

	allowsMultipleSelection: boolean;

	setAllowsTypeSelect(_: boolean)

	allowsTypeSelect: boolean;

	setAutohidesScroller(_: boolean)

	autohidesScroller: boolean;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setCellPrototype(_: any)

	cellPrototype: any;

	readonly clickedColumn: number;

	readonly clickedRow: number;

	setColumnResizingType(_: NSBrowserColumnResizingType)

	columnResizingType: NSBrowserColumnResizingType;

	setColumnsAutosaveName(_: string)

	columnsAutosaveName: string;

	setDelegate(_: NSBrowserDelegate)

	delegate: NSBrowserDelegate;

	setDoubleAction(_: string)

	doubleAction: string;

	readonly firstVisibleColumn: number;

	setHasHorizontalScroller(_: boolean)

	hasHorizontalScroller: boolean;

	setLastColumn(_: number)

	lastColumn: number;

	readonly lastVisibleColumn: number;

	readonly isLoaded: boolean;

	setMaxVisibleColumns(_: number)

	maxVisibleColumns: number;

	setMinColumnWidth(_: number)

	minColumnWidth: number;

	readonly numberOfVisibleColumns: number;

	setPathSeparator(_: string)

	pathSeparator: string;

	setPrefersAllColumnUserResizing(_: boolean)

	prefersAllColumnUserResizing: boolean;

	setReusesColumns(_: boolean)

	reusesColumns: boolean;

	setRowHeight(_: number)

	rowHeight: number;

	readonly selectedCell: any;

	readonly selectedCells: NSArray<NSCell>;

	readonly selectedColumn: number;

	setSelectionIndexPath(_: NSIndexPath)

	selectionIndexPath: NSIndexPath;

	setSelectionIndexPaths(_: NSArray<NSIndexPath>)

	selectionIndexPaths: NSArray<NSIndexPath>;

	setSendsActionOnArrowKeys(_: boolean)

	sendsActionOnArrowKeys: boolean;

	setSeparatesColumns(_: boolean)

	separatesColumns: boolean;

	setTakesTitleFromPreviousColumn(_: boolean)

	takesTitleFromPreviousColumn: boolean;

	readonly titleHeight: number;

	setTitled(_: boolean)

	isTitled: boolean;

	static cellClass(): typeof NSObject;

	addColumn(): void;

	canDragRowsWithIndexesInColumnWithEvent(with_: NSIndexSet, inColumn: number, with_: NSEvent): boolean;

	columnContentWidthForColumnWidth(forColumnWidth: number): number;

	columnWidthForColumnContentWidth(forColumnContentWidth: number): number;

	defaultColumnWidth(): number;

	doClick(_?: any): void;

	doDoubleClick(_?: any): void;

	draggingImageForRowsWithIndexesInColumnWithEventOffset(with_: NSIndexSet, inColumn: number, with_: NSEvent, offset?: CGPoint): NSImage;

	drawTitleOfColumnInRect(ofColumn: number, in_: CGRect): void;

	editItemAtIndexPathWithEventSelect(at: NSIndexPath, with_?: NSEvent, select: boolean): void;

	frameOfColumn(ofColumn: number): CGRect;

	frameOfInsideOfColumn(ofInsideOfColumn: number): CGRect;

	frameOfRowInColumn(ofRow: number, inColumn: number): CGRect;

	getRowColumnForPoint(_?: number, column?: number, for_: CGPoint): boolean;

	indexPathForColumn(forColumn: number): NSIndexPath;

	isLeafItem(_?: any): boolean;

	itemAtIndexPath(at: NSIndexPath): any;

	itemAtRowInColumn(atRow: number, inColumn: number): any;

	loadColumnZero(): void;

	loadedCellAtRowColumn(atRow: number, column: number): any;

	noteHeightOfRowsWithIndexesChangedInColumn(_: NSIndexSet, inColumn: number): void;

	parentForItemsInColumn(inColumn: number): any;

	path(): string;

	pathToColumn(toColumn: number): string;

	reloadColumn(_: number): void;

	reloadDataForRowIndexesInColumn(forRowIndexes: NSIndexSet, inColumn: number): void;

	scrollColumnToVisible(_: number): void;

	scrollColumnsLeftBy(by: number): void;

	scrollColumnsRightBy(by: number): void;

	scrollRowToVisibleInColumn(_: number, inColumn: number): void;

	selectRowInColumn(_: number, inColumn: number): void;

	selectRowIndexesInColumn(_: NSIndexSet, inColumn: number): void;

	selectedCellInColumn(inColumn: number): any;

	selectedRowInColumn(inColumn: number): number;

	selectedRowIndexesInColumn(inColumn: number): NSIndexSet;

	sendAction(): boolean;

	setCellClass(_: typeof NSObject): void;

	setDefaultColumnWidth(_: number): void;

	setDraggingSourceOperationMaskForLocal(_: NSDragOperation, forLocal: boolean): void;

	setPath(_: string): boolean;

	setTitleOfColumn(_: string, ofColumn: number): void;

	setWidthOfColumn(_: number, ofColumn: number): void;

	tile(): void;

	titleFrameOfColumn(ofColumn: number): CGRect;

	titleOfColumn(ofColumn: number): string;

	validateVisibleColumns(): void;

	widthOfColumn(ofColumn: number): number;
}

declare class NSBrowserCell extends NSCell {

	setAlternateImage(_: NSImage)

	alternateImage: NSImage;

	setLeaf(_: boolean)

	isLeaf: boolean;

	setLoaded(_: boolean)

	isLoaded: boolean;

	static branchImage(): NSImage;

	static highlightedBranchImage(): NSImage;

	highlightColorInView(in_: NSView): NSColor;

	reset(): void;

	set(): void;
}

declare var NSBrowserColumnConfigurationDidChangeNotification: string;

enum NSBrowserColumnResizingType {

	NoColumnResizing = 0,

	AutoColumnResizing = 1,

	UserColumnResizing = 2
}

globalThis.NSBrowserColumnResizingType = NSBrowserColumnResizingType;

interface NSBrowserDelegate extends NSObjectProtocol {

	browserCreateRowsForColumnInMatrix?(_: NSBrowser, createRowsForColumn: number, in_: NSMatrix): void;

	browserNextTypeSelectMatchFromRowToRowInColumnForString?(_: NSBrowser, nextTypeSelectMatchFromRow: number, toRow: number, inColumn: number, for_?: string): number;

	browserShouldTypeSelectForEventWithCurrentSearchString?(_: NSBrowser, shouldTypeSelectFor: NSEvent, withCurrentSearch?: string): boolean;

	browserSelectCellWithStringInColumn?(_: NSBrowser, selectCellWith: string, inColumn: number): boolean;

	browserDraggingImageForRowsWithIndexesInColumnWithEventOffset?(_: NSBrowser, draggingImageForRowsWith: NSIndexSet, inColumn: number, with_: NSEvent, offset: CGPoint): NSImage;

	browserCanDragRowsWithIndexesInColumnWithEvent?(_: NSBrowser, canDragRowsWith: NSIndexSet, inColumn: number, with_: NSEvent): boolean;

	browserWriteRowsWithIndexesInColumnToPasteboard?(_: NSBrowser, writeRowsWith: NSIndexSet, inColumn: number, to: NSPasteboard): boolean;

	browserAcceptDropAtRowColumnDropOperation?(_: NSBrowser, acceptDrop: NSDraggingInfo, atRow: number, column: number, dropOperation: NSBrowserDropOperation): boolean;

	browserChildOfItem?(_: NSBrowser, child: number, ofItem?: any): any;

	browserDidChangeLastColumnToColumn?(_: NSBrowser, didChangeLastColumn: number, toColumn: number): void;

	browserHeaderViewControllerForItem?(_: NSBrowser, headerViewControllerForItem?: any): NSViewController;

	browserHeightOfRowInColumn?(_: NSBrowser, heightOfRow: number, inColumn: number): number;

	browserIsColumnValid?(_: NSBrowser, isColumnValid: number): boolean;

	browserIsLeafItem?(_: NSBrowser, isLeafItem?: any): boolean;

	browserNumberOfChildrenOfItem?(_: NSBrowser, numberOfChildrenOfItem?: any): number;

	browserNumberOfRowsInColumn?(_: NSBrowser, numberOfRowsInColumn: number): number;

	browserObjectValueForItem?(_: NSBrowser, objectValueForItem?: any): any;

	browserPreviewViewControllerForLeafItem?(_: NSBrowser, previewViewControllerForLeafItem: any): NSViewController;

	browserSelectionIndexesForProposedSelectionInColumn?(_: NSBrowser, selectionIndexesForProposedSelection: NSIndexSet, inColumn: number): NSIndexSet;

	browserSelectRowInColumn?(_: NSBrowser, selectRow: number, inColumn: number): boolean;

	browserSetObjectValueForItem?(_: NSBrowser, setObjectValue?: any, forItem?: any): void;

	browserShouldEditItem?(_: NSBrowser, shouldEditItem?: any): boolean;

	browserShouldShowCellExpansionForRowColumn?(_: NSBrowser, shouldShowCellExpansionForRow: number, column: number): boolean;

	browserShouldSizeColumnForUserResizeToWidth?(_: NSBrowser, shouldSizeColumn: number, forUserResize: boolean, toWidth: number): number;

	browserSizeToFitWidthOfColumn?(_: NSBrowser, sizeToFitWidthOfColumn: number): number;

	browserTitleOfColumn?(_: NSBrowser, titleOfColumn: number): string;

	browserTypeSelectStringForRowInColumn?(_: NSBrowser, typeSelectStringForRow: number, inColumn: number): string;

	browserValidateDropProposedRowColumnDropOperation?(_: NSBrowser, validateDrop: NSDraggingInfo, proposedRow: number, column: number, dropOperation: NSBrowserDropOperation): NSDragOperation;

	browserWillDisplayCellAtRowColumn?(_: NSBrowser, willDisplayCell: any, atRow: number, column: number): void;

	browserColumnConfigurationDidChange?(_: NSNotification): void;

	browserDidScroll?(_: NSBrowser): void;

	browserWillScroll?(_: NSBrowser): void;

	rootItemForBrowser?(for_: NSBrowser): any;
}
declare var NSBrowserDelegate: {

	prototype: NSBrowserDelegate;
};

enum NSBrowserDropOperation {

	On = 0,

	Above = 1
}

globalThis.NSBrowserDropOperation = NSBrowserDropOperation;

declare var NSBrowserIllegalDelegateException: string;

declare var NSButtLineCapStyle: NSLineCapStyle;

declare class NSButton extends NSControl implements NSAccessibilityButton, NSUserInterfaceCompression, NSUserInterfaceValidations {

	static buttonWithImageTargetAction(image: NSImage, target?: any, action?: string): NSButton;

	static buttonWithTitleImageTargetAction(title: string, image: NSImage, target?: any, action?: string): NSButton;

	static buttonWithTitleTargetAction(title: string, target?: any, action?: string): NSButton;

	static checkboxWithTitleTargetAction(checkboxWithTitle: string, target?: any, action?: string): NSButton;

	static radioButtonWithTitleTargetAction(radioButtonWithTitle: string, target?: any, action?: string): NSButton;

	setAllowsMixedState(_: boolean)

	allowsMixedState: boolean;

	setAlternateImage(_: NSImage)

	alternateImage: NSImage;

	setAlternateTitle(_: string)

	alternateTitle: string;

	setAttributedAlternateTitle(_: NSAttributedString)

	attributedAlternateTitle: NSAttributedString;

	setAttributedTitle(_: NSAttributedString)

	attributedTitle: NSAttributedString;

	setBezelColor(_: NSColor)

	bezelColor: NSColor;

	setBezelStyle(_: NSBezelStyle)

	bezelStyle: NSBezelStyle;

	setBordered(_: boolean)

	isBordered: boolean;

	setContentTintColor(_: NSColor)

	contentTintColor: NSColor;

	setImage(_: NSImage)

	image: NSImage;

	setImageHugsTitle(_: boolean)

	imageHugsTitle: boolean;

	setImagePosition(_: NSCellImagePosition)

	imagePosition: NSCellImagePosition;

	setImageScaling(_: NSImageScaling)

	imageScaling: NSImageScaling;

	setKeyEquivalent(_: string)

	keyEquivalent: string;

	setKeyEquivalentModifierMask(_: NSEventModifierFlags)

	keyEquivalentModifierMask: NSEventModifierFlags;

	setMaxAcceleratorLevel(_: number)

	maxAcceleratorLevel: number;

	setShowsBorderOnlyWhileMouseInside(_: boolean)

	showsBorderOnlyWhileMouseInside: boolean;

	setSound(_: NSSound)

	sound: NSSound;

	setSpringLoaded(_: boolean)

	isSpringLoaded: boolean;

	setState(_: number)

	state: number;

	setTitle(_: string)

	title: string;

	setTransparent(_: boolean)

	isTransparent: boolean;

	readonly activeCompressionOptions: NSUserInterfaceCompressionOptions; // inherited from NSUserInterfaceCompression

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityFrame(): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLabel(): string;

	accessibilityParent(): any;

	accessibilityPerformPress(): boolean;

	compressWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	getPeriodicDelayInterval(_: number, interval: number): void;

	highlight(_: boolean): void;

	isAccessibilityFocused(): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	minimumSizeWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): CGSize;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setButtonType(_: NSButtonType): void;

	setNextState(): void;

	setPeriodicDelayInterval(_: number, interval: number): void;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}

declare class NSButtonCell extends NSActionCell {

	setAlternateImage(_: NSImage)

	alternateImage: NSImage;

	setAlternateTitle(_: string)

	alternateTitle: string;

	setAttributedAlternateTitle(_: NSAttributedString)

	attributedAlternateTitle: NSAttributedString;

	setAttributedTitle(_: NSAttributedString)

	attributedTitle: NSAttributedString;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setBezelStyle(_: NSBezelStyle)

	bezelStyle: NSBezelStyle;

	setHighlightsBy(_: NSCellStyleMask)

	highlightsBy: NSCellStyleMask;

	setImageDimsWhenDisabled(_: boolean)

	imageDimsWhenDisabled: boolean;

	setImagePosition(_: NSCellImagePosition)

	imagePosition: NSCellImagePosition;

	setImageScaling(_: NSImageScaling)

	imageScaling: NSImageScaling;

	setKeyEquivalent(_: string)

	keyEquivalent: string;

	setKeyEquivalentModifierMask(_: NSEventModifierFlags)

	keyEquivalentModifierMask: NSEventModifierFlags;

	setShowsBorderOnlyWhileMouseInside(_: boolean)

	showsBorderOnlyWhileMouseInside: boolean;

	setShowsStateBy(_: NSCellStyleMask)

	showsStateBy: NSCellStyleMask;

	setSound(_: NSSound)

	sound: NSSound;

	setTransparent(_: boolean)

	isTransparent: boolean;

	drawBezelWithFrameInView(withFrame: CGRect, in_: NSView): void;

	drawImageWithFrameInView(_: NSImage, withFrame: CGRect, in_: NSView): void;

	drawTitleWithFrameInView(_: NSAttributedString, withFrame: CGRect, in_: NSView): CGRect;

	mouseEntered(with_: NSEvent): void;

	mouseExited(with_: NSEvent): void;

	setButtonType(_: NSButtonType): void;

	setPeriodicDelayInterval(_: number, interval: number): void;
}

declare class NSButtonTouchBarItem extends NSTouchBarItem {

	static buttonTouchBarItemWithIdentifierImageTargetAction(identifier: string, image: NSImage, target?: any, action?: string): NSButtonTouchBarItem;

	static buttonTouchBarItemWithIdentifierTitleImageTargetAction(identifier: string, title: string, image: NSImage, target?: any, action?: string): NSButtonTouchBarItem;

	static buttonTouchBarItemWithIdentifierTitleTargetAction(identifier: string, title: string, target?: any, action?: string): NSButtonTouchBarItem;

	setAction(_: string)

	action: string;

	setBezelColor(_: NSColor)

	bezelColor: NSColor;

	setCustomizationLabel(_: string)

	customizationLabel: string;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setImage(_: NSImage)

	image: NSImage;

	setTarget(_: any)

	target: any;

	setTitle(_: string)

	title: string;
}

enum NSButtonType {

	MomentaryLight = 0,

	PushOnPushOff = 1,

	Toggle = 2,

	Switch = 3,

	Radio = 4,

	MomentaryChange = 5,

	OnOff = 6,

	MomentaryPushIn = 7,

	Accelerator = 8,

	MultiLevelAccelerator = 9
}

globalThis.NSButtonType = NSButtonType;

declare class NSCIImageRep extends NSImageRep {

	static imageRepWithCIImage(ciImage: CIImage): NSCIImageRep;

	readonly CIImage: CIImage;

	static create(CIImage: CIImage);
}

declare var NSCalibratedRGBColorSpace: string;

declare var NSCalibratedWhiteColorSpace: string;

declare const NSCancelTextMovement: number;

declare class NSCandidateListTouchBarItem<CandidateType> extends NSTouchBarItem {

	setAllowsCollapsing(_: boolean)

	allowsCollapsing: boolean;

	setAllowsTextInputContextCandidates(_: boolean)

	allowsTextInputContextCandidates: boolean;

	setAttributedStringForCandidate(_: (p1: CandidateType, p2: number) => NSAttributedString)

	attributedStringForCandidate: (p1: CandidateType, p2: number) => NSAttributedString;

	readonly isCandidateListVisible: boolean;

	readonly candidates: NSArray<CandidateType>;

	setClient(_: NSView)

	client: NSView;

	setCollapsed(_: boolean)

	isCollapsed: boolean;

	setCustomizationLabel(_: string)

	customizationLabel: string;

	setDelegate(_: NSCandidateListTouchBarItemDelegate)

	delegate: NSCandidateListTouchBarItemDelegate;

	setCandidatesForSelectedRangeInString(_: NSArray<CandidateType>, forSelectedRange: NSRange, in_?: string): void;

	updateWithInsertionPointVisibility(withInsertionPointVisibility: boolean): void;
}

interface NSCandidateListTouchBarItemDelegate extends NSObjectProtocol {

	candidateListTouchBarItemWith_BeginSelectingCandidateAt?(_: NSCandidateListTouchBarItem<any>, beginSelectingCandidateAt: number): void;

	candidateListTouchBarItemWith_ChangeSelectionFromCandidateAtTo?(_: NSCandidateListTouchBarItem<any>, changeSelectionFromCandidateAt: number, to: number): void;

	candidateListTouchBarItemWith_EndSelectingCandidateAt?(_: NSCandidateListTouchBarItem<any>, endSelectingCandidateAt: number): void;

	candidateListTouchBarItemWithChangedCandidateListVisibility?(_: NSCandidateListTouchBarItem<any>, changedCandidateListVisibility: boolean): void;
}
declare var NSCandidateListTouchBarItemDelegate: {

	prototype: NSCandidateListTouchBarItemDelegate;
};

declare const NSCarriageReturnCharacter: number;

declare var NSCategoryDocumentAttribute: string;

declare class NSCell extends NSObject implements NSAccessibility, NSAccessibilityElementProtocol, NSCoding, NSCopying, NSUserInterfaceItemIdentification {

	readonly acceptsFirstResponder: boolean;

	setAction(_: string)

	action: string;

	setAlignment(_: NSTextAlignment)

	alignment: NSTextAlignment;

	setAllowsEditingTextAttributes(_: boolean)

	allowsEditingTextAttributes: boolean;

	setAllowsMixedState(_: boolean)

	allowsMixedState: boolean;

	setAllowsUndo(_: boolean)

	allowsUndo: boolean;

	setAttributedStringValue(_: NSAttributedString)

	attributedStringValue: NSAttributedString;

	setBackgroundStyle(_: NSBackgroundStyle)

	backgroundStyle: NSBackgroundStyle;

	setBaseWritingDirection(_: NSWritingDirection)

	baseWritingDirection: NSWritingDirection;

	setBezeled(_: boolean)

	isBezeled: boolean;

	setBordered(_: boolean)

	isBordered: boolean;

	readonly cellSize: CGSize;

	setContinuous(_: boolean)

	isContinuous: boolean;

	setControlSize(_: NSControlSize)

	controlSize: NSControlSize;

	setControlView(_: NSView)

	controlView: NSView;

	setDoubleValue(_: number)

	doubleValue: number;

	setEditable(_: boolean)

	isEditable: boolean;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setFloatValue(_: number)

	floatValue: number;

	setFocusRingType(_: NSFocusRingType)

	focusRingType: NSFocusRingType;

	setFont(_: NSFont)

	font: NSFont;

	setFormatter(_: NSFormatter)

	formatter: NSFormatter;

	readonly hasValidObjectValue: boolean;

	setHighlighted(_: boolean)

	isHighlighted: boolean;

	setImage(_: NSImage)

	image: NSImage;

	setImportsGraphics(_: boolean)

	importsGraphics: boolean;

	setIntValue(_: number)

	intValue: number;

	setIntegerValue(_: number)

	integerValue: number;

	readonly interiorBackgroundStyle: NSBackgroundStyle;

	readonly keyEquivalent: string;

	setLineBreakMode(_: NSLineBreakMode)

	lineBreakMode: NSLineBreakMode;

	setMenu(_: NSMenu)

	menu: NSMenu;

	readonly mouseDownFlags: number;

	readonly nextState: number;

	setObjectValue(_: any)

	objectValue: any;

	readonly isOpaque: boolean;

	setRefusesFirstResponder(_: boolean)

	refusesFirstResponder: boolean;

	setRepresentedObject(_: any)

	representedObject: any;

	setScrollable(_: boolean)

	isScrollable: boolean;

	setSelectable(_: boolean)

	isSelectable: boolean;

	setSendsActionOnEndEditing(_: boolean)

	sendsActionOnEndEditing: boolean;

	setShowsFirstResponder(_: boolean)

	showsFirstResponder: boolean;

	setState(_: number)

	state: number;

	setStringValue(_: string)

	stringValue: string;

	setTag(_: number)

	tag: number;

	setTarget(_: any)

	target: any;

	setTitle(_: string)

	title: string;

	setTruncatesLastVisibleLine(_: boolean)

	truncatesLastVisibleLine: boolean;

	setType(_: NSCellType)

	type: NSCellType;

	setUserInterfaceLayoutDirection(_: NSUserInterfaceLayoutDirection)

	userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection;

	setUsesSingleLineMode(_: boolean)

	usesSingleLineMode: boolean;

	readonly wantsNotificationForMarkedText: boolean;

	setWraps(_: boolean)

	wraps: boolean;

	static defaultFocusRingType(): NSFocusRingType;

	static defaultMenu(): NSMenu;

	static prefersTrackingUntilMouseUp(): boolean;

	setAccessibilityActivationPoint(_: CGPoint)

	accessibilityActivationPoint: CGPoint; // inherited from NSAccessibility

	setAccessibilityAllowedValues(_: NSArray<number>)

	accessibilityAllowedValues: NSArray<number>; // inherited from NSAccessibility

	setAccessibilityAlternateUIVisible(_: boolean)

	isAccessibilityAlternateUIVisible: boolean; // inherited from NSAccessibility

	setAccessibilityApplicationFocusedUIElement(_: any)

	accessibilityApplicationFocusedUIElement: any; // inherited from NSAccessibility

	setAccessibilityCancelButton(_: any)

	accessibilityCancelButton: any; // inherited from NSAccessibility

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)

	accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>; // inherited from NSAccessibility

	setAccessibilityClearButton(_: any)

	accessibilityClearButton: any; // inherited from NSAccessibility

	setAccessibilityCloseButton(_: any)

	accessibilityCloseButton: any; // inherited from NSAccessibility

	setAccessibilityColumnCount(_: number)

	accessibilityColumnCount: number; // inherited from NSAccessibility

	setAccessibilityColumnHeaderUIElements(_: NSArray<any>)

	accessibilityColumnHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumnIndexRange(_: NSRange)

	accessibilityColumnIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityColumnTitles(_: NSArray<any>)

	accessibilityColumnTitles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumns(_: NSArray<any>)

	accessibilityColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityContents(_: NSArray<any>)

	accessibilityContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityCriticalValue(_: any)

	accessibilityCriticalValue: any; // inherited from NSAccessibility

	setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)

	accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>; // inherited from NSAccessibility

	setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)

	accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>; // inherited from NSAccessibility

	setAccessibilityDecrementButton(_: any)

	accessibilityDecrementButton: any; // inherited from NSAccessibility

	setAccessibilityDefaultButton(_: any)

	accessibilityDefaultButton: any; // inherited from NSAccessibility

	setAccessibilityDisclosed(_: boolean)

	isAccessibilityDisclosed: boolean; // inherited from NSAccessibility

	setAccessibilityDisclosedByRow(_: any)

	accessibilityDisclosedByRow: any; // inherited from NSAccessibility

	setAccessibilityDisclosedRows(_: any)

	accessibilityDisclosedRows: any; // inherited from NSAccessibility

	setAccessibilityDisclosureLevel(_: number)

	accessibilityDisclosureLevel: number; // inherited from NSAccessibility

	setAccessibilityDocument(_: string)

	accessibilityDocument: string; // inherited from NSAccessibility

	setAccessibilityEdited(_: boolean)

	isAccessibilityEdited: boolean; // inherited from NSAccessibility

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean; // inherited from NSAccessibility

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean; // inherited from NSAccessibility

	setAccessibilityExpanded(_: boolean)

	isAccessibilityExpanded: boolean; // inherited from NSAccessibility

	setAccessibilityExtrasMenuBar(_: any)

	accessibilityExtrasMenuBar: any; // inherited from NSAccessibility

	setAccessibilityFilename(_: string)

	accessibilityFilename: string; // inherited from NSAccessibility

	setAccessibilityFocused(_: boolean)

	isAccessibilityFocused: boolean; // inherited from NSAccessibility

	setAccessibilityFocusedWindow(_: any)

	accessibilityFocusedWindow: any; // inherited from NSAccessibility

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect; // inherited from NSAccessibility

	setAccessibilityFrontmost(_: boolean)

	isAccessibilityFrontmost: boolean; // inherited from NSAccessibility

	setAccessibilityFullScreenButton(_: any)

	accessibilityFullScreenButton: any; // inherited from NSAccessibility

	setAccessibilityGrowArea(_: any)

	accessibilityGrowArea: any; // inherited from NSAccessibility

	setAccessibilityHandles(_: NSArray<any>)

	accessibilityHandles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityHeader(_: any)

	accessibilityHeader: any; // inherited from NSAccessibility

	setAccessibilityHelp(_: string)

	accessibilityHelp: string; // inherited from NSAccessibility

	setAccessibilityHidden(_: boolean)

	isAccessibilityHidden: boolean; // inherited from NSAccessibility

	setAccessibilityHorizontalScrollBar(_: any)

	accessibilityHorizontalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityHorizontalUnitDescription(_: string)

	accessibilityHorizontalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityHorizontalUnits(_: NSAccessibilityUnits)

	accessibilityHorizontalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityIdentifier(_: string)

	accessibilityIdentifier: string; // inherited from NSAccessibility

	setAccessibilityIncrementButton(_: any)

	accessibilityIncrementButton: any; // inherited from NSAccessibility

	setAccessibilityIndex(_: number)

	accessibilityIndex: number; // inherited from NSAccessibility

	setAccessibilityInsertionPointLineNumber(_: number)

	accessibilityInsertionPointLineNumber: number; // inherited from NSAccessibility

	setAccessibilityLabel(_: string)

	accessibilityLabel: string; // inherited from NSAccessibility

	setAccessibilityLabelUIElements(_: NSArray<any>)

	accessibilityLabelUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityLabelValue(_: number)

	accessibilityLabelValue: number; // inherited from NSAccessibility

	setAccessibilityLinkedUIElements(_: NSArray<any>)

	accessibilityLinkedUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMain(_: boolean)

	isAccessibilityMain: boolean; // inherited from NSAccessibility

	setAccessibilityMainWindow(_: any)

	accessibilityMainWindow: any; // inherited from NSAccessibility

	setAccessibilityMarkerGroupUIElement(_: any)

	accessibilityMarkerGroupUIElement: any; // inherited from NSAccessibility

	setAccessibilityMarkerTypeDescription(_: string)

	accessibilityMarkerTypeDescription: string; // inherited from NSAccessibility

	setAccessibilityMarkerUIElements(_: NSArray<any>)

	accessibilityMarkerUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMarkerValues(_: any)

	accessibilityMarkerValues: any; // inherited from NSAccessibility

	setAccessibilityMaxValue(_: any)

	accessibilityMaxValue: any; // inherited from NSAccessibility

	setAccessibilityMenuBar(_: any)

	accessibilityMenuBar: any; // inherited from NSAccessibility

	setAccessibilityMinValue(_: any)

	accessibilityMinValue: any; // inherited from NSAccessibility

	setAccessibilityMinimizeButton(_: any)

	accessibilityMinimizeButton: any; // inherited from NSAccessibility

	setAccessibilityMinimized(_: boolean)

	isAccessibilityMinimized: boolean; // inherited from NSAccessibility

	setAccessibilityModal(_: boolean)

	isAccessibilityModal: boolean; // inherited from NSAccessibility

	setAccessibilityNextContents(_: NSArray<any>)

	accessibilityNextContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityNumberOfCharacters(_: number)

	accessibilityNumberOfCharacters: number; // inherited from NSAccessibility

	setAccessibilityOrderedByRow(_: boolean)

	isAccessibilityOrderedByRow: boolean; // inherited from NSAccessibility

	setAccessibilityOrientation(_: NSAccessibilityOrientation)

	accessibilityOrientation: NSAccessibilityOrientation; // inherited from NSAccessibility

	setAccessibilityOverflowButton(_: any)

	accessibilityOverflowButton: any; // inherited from NSAccessibility

	setAccessibilityParent(_: any)

	accessibilityParent: any; // inherited from NSAccessibility

	setAccessibilityPlaceholderValue(_: string)

	accessibilityPlaceholderValue: string; // inherited from NSAccessibility

	setAccessibilityPreviousContents(_: NSArray<any>)

	accessibilityPreviousContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityProtectedContent(_: boolean)

	isAccessibilityProtectedContent: boolean; // inherited from NSAccessibility

	setAccessibilityProxy(_: any)

	accessibilityProxy: any; // inherited from NSAccessibility

	setAccessibilityRequired(_: boolean)

	isAccessibilityRequired: boolean; // inherited from NSAccessibility

	setAccessibilityRole(_: string)

	accessibilityRole: string; // inherited from NSAccessibility

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string; // inherited from NSAccessibility

	setAccessibilityRowCount(_: number)

	accessibilityRowCount: number; // inherited from NSAccessibility

	setAccessibilityRowHeaderUIElements(_: NSArray<any>)

	accessibilityRowHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRowIndexRange(_: NSRange)

	accessibilityRowIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityRows(_: NSArray<any>)

	accessibilityRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRulerMarkerType(_: NSAccessibilityRulerMarkerType)

	accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType; // inherited from NSAccessibility

	setAccessibilitySearchButton(_: any)

	accessibilitySearchButton: any; // inherited from NSAccessibility

	setAccessibilitySearchMenu(_: any)

	accessibilitySearchMenu: any; // inherited from NSAccessibility

	setAccessibilitySelected(_: boolean)

	isAccessibilitySelected: boolean; // inherited from NSAccessibility

	setAccessibilitySelectedCells(_: NSArray<any>)

	accessibilitySelectedCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedChildren(_: NSArray<any>)

	accessibilitySelectedChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedColumns(_: NSArray<any>)

	accessibilitySelectedColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedRows(_: NSArray<any>)

	accessibilitySelectedRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedText(_: string)

	accessibilitySelectedText: string; // inherited from NSAccessibility

	setAccessibilitySelectedTextRange(_: NSRange)

	accessibilitySelectedTextRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)

	accessibilitySelectedTextRanges: NSArray<NSValue>; // inherited from NSAccessibility

	setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)

	accessibilityServesAsTitleForUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedCharacterRange(_: NSRange)

	accessibilitySharedCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySharedFocusElements(_: NSArray<any>)

	accessibilitySharedFocusElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedTextUIElements(_: NSArray<any>)

	accessibilitySharedTextUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityShownMenu(_: any)

	accessibilityShownMenu: any; // inherited from NSAccessibility

	setAccessibilitySortDirection(_: NSAccessibilitySortDirection)

	accessibilitySortDirection: NSAccessibilitySortDirection; // inherited from NSAccessibility

	setAccessibilitySplitters(_: NSArray<any>)

	accessibilitySplitters: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string; // inherited from NSAccessibility

	setAccessibilityTabs(_: NSArray<any>)

	accessibilityTabs: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityTitle(_: string)

	accessibilityTitle: string; // inherited from NSAccessibility

	setAccessibilityTitleUIElement(_: any)

	accessibilityTitleUIElement: any; // inherited from NSAccessibility

	setAccessibilityToolbarButton(_: any)

	accessibilityToolbarButton: any; // inherited from NSAccessibility

	setAccessibilityTopLevelUIElement(_: any)

	accessibilityTopLevelUIElement: any; // inherited from NSAccessibility

	setAccessibilityURL(_: NSURL)

	accessibilityURL: NSURL; // inherited from NSAccessibility

	setAccessibilityUnitDescription(_: string)

	accessibilityUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityUnits(_: NSAccessibilityUnits)

	accessibilityUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityValue(_: any)

	accessibilityValue: any; // inherited from NSAccessibility

	setAccessibilityValueDescription(_: string)

	accessibilityValueDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalScrollBar(_: any)

	accessibilityVerticalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityVerticalUnitDescription(_: string)

	accessibilityVerticalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalUnits(_: NSAccessibilityUnits)

	accessibilityVerticalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityVisibleCells(_: NSArray<any>)

	accessibilityVisibleCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleCharacterRange(_: NSRange)

	accessibilityVisibleCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilityVisibleChildren(_: NSArray<any>)

	accessibilityVisibleChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleColumns(_: NSArray<any>)

	accessibilityVisibleColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleRows(_: NSArray<any>)

	accessibilityVisibleRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityWarningValue(_: any)

	accessibilityWarningValue: any; // inherited from NSAccessibility

	setAccessibilityWindow(_: any)

	accessibilityWindow: any; // inherited from NSAccessibility

	setAccessibilityWindows(_: NSArray<any>)

	accessibilityWindows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityZoomButton(_: any)

	accessibilityZoomButton: any; // inherited from NSAccessibility

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	setIdentifier(_: string)

	identifier: string; // inherited from NSUserInterfaceItemIdentification

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(imageCell: NSImage);

	static create(textCell: string);

	static create(coder: NSCoder); // inherited from NSCoding

	accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;

	accessibilityCellForColumnRow(_: number, row: number): any;

	accessibilityFrame(): CGRect;

	accessibilityFrameForRange(_: NSRange): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLayoutPointForScreenPoint(_: CGPoint): CGPoint;

	accessibilityLayoutSizeForScreenSize(_: CGSize): CGSize;

	accessibilityLineForIndex(_: number): number;

	accessibilityParent(): any;

	accessibilityPerformCancel(): boolean;

	accessibilityPerformConfirm(): boolean;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformDelete(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPick(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityPerformRaise(): boolean;

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	accessibilityPerformShowMenu(): boolean;

	accessibilityRTFForRange(_: NSRange): NSData;

	accessibilityRangeForIndex(_: number): NSRange;

	accessibilityRangeForLine(_: number): NSRange;

	accessibilityRangeForPosition(_: CGPoint): NSRange;

	accessibilityScreenPointForLayoutPoint(_: CGPoint): CGPoint;

	accessibilityScreenSizeForLayoutSize(_: CGSize): CGSize;

	accessibilityStringForRange(_: NSRange): string;

	accessibilityStyleRangeForIndex(_: number): NSRange;

	calcDrawInfo(_: CGRect): void;

	cellAttribute(_: NSCellAttribute): number;

	cellSizeForBounds(forBounds: CGRect): CGSize;

	compare(_: any): NSComparisonResult;

	conformsToProtocol(_: any /* Protocol */): boolean;

	continueTrackingAtInView(last: CGPoint, current: CGPoint, in_: NSView): boolean;

	copyWithZone(_?: any): any;

	draggingImageComponentsWithFrameInView(withFrame: CGRect, in_: NSView): NSArray<NSDraggingImageComponent>;

	drawFocusRingMaskWithFrameInView(withFrame: CGRect, in_: NSView): void;

	drawInteriorWithFrameInView(withFrame: CGRect, in_: NSView): void;

	drawWithExpansionFrameInView(withExpansionFrame: CGRect, in_: NSView): void;

	drawWithFrameInView(withFrame: CGRect, in_: NSView): void;

	drawingRectForBounds(forBounds: CGRect): CGRect;

	editWithFrameInViewEditorDelegateEvent(withFrame: CGRect, in_: NSView, editor: NSText, delegate?: any, event?: NSEvent): void;

	encodeWithCoder(_: NSCoder): void;

	endEditing(_: NSText): void;

	expansionFrameWithFrameInView(withFrame: CGRect, in_: NSView): CGRect;

	fieldEditorForView(for_: NSView): NSTextView;

	focusRingMaskBoundsForFrameInView(forFrame: CGRect, in_: NSView): CGRect;

	getPeriodicDelayInterval(_: number, interval: number): void;

	highlightWithFrameInView(_: boolean, withFrame: CGRect, in_: NSView): void;

	highlightColorWithFrameInView(withFrame: CGRect, in_: NSView): NSColor;

	hitTestForEventInRectOfView(for_: NSEvent, in_: CGRect, of: NSView): NSCellHitResult;

	imageRectForBounds(forBounds: CGRect): CGRect;

	isAccessibilityFocused(): boolean;

	isAccessibilitySelectorAllowed(_: string): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	menuForEventInRectOfView(for_: NSEvent, in_: CGRect, of: NSView): NSMenu;

	performClick(_?: any): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	resetCursorRectInView(_: CGRect, in_: NSView): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	selectWithFrameInViewEditorDelegateStartLength(withFrame: CGRect, in_: NSView, editor: NSText, delegate?: any, start: number, length: number): void;

	self(): this;

	sendActionOn(on: NSEventMask): number;

	setCellAttributeTo(_: NSCellAttribute, to: number): void;

	setNextState(): void;

	setUpFieldEditorAttributes(_: NSText): NSText;

	startTrackingAtInView(at: CGPoint, in_: NSView): boolean;

	stopTrackingAtInViewMouseIsUp(last: CGPoint, current: CGPoint, in_: NSView, mouseIsUp: boolean): void;

	takeDoubleValueFrom(_?: any): void;

	takeFloatValueFrom(_?: any): void;

	takeIntValueFrom(_?: any): void;

	takeIntegerValueFrom(_?: any): void;

	takeObjectValueFrom(_?: any): void;

	takeStringValueFrom(_?: any): void;

	titleRectForBounds(forBounds: CGRect): CGRect;

	trackMouseInRectOfViewUntilMouseUp(with_: NSEvent, in_: CGRect, of: NSView, untilMouseUp: boolean): boolean;
}

enum NSCellAttribute {

	CellDisabled = 0,

	CellState = 1,

	PushInCell = 2,

	CellEditable = 3,

	ChangeGrayCell = 4,

	CellHighlighted = 5,

	CellLightsByContents = 6,

	CellLightsByGray = 7,

	ChangeBackgroundCell = 8,

	CellLightsByBackground = 9,

	CellIsBordered = 10,

	CellHasOverlappingImage = 11,

	CellHasImageHorizontal = 12,

	CellHasImageOnLeftOrBottom = 13,

	CellChangesContents = 14,

	CellIsInsetButton = 15,

	CellAllowsMixedState = 16
}

globalThis.NSCellAttribute = NSCellAttribute;

enum NSCellHitResult {

	None = 0,

	ContentArea = 1,

	EditableTextArea = 2,

	TrackableArea = 4
}

globalThis.NSCellHitResult = NSCellHitResult;

enum NSCellImagePosition {

	NoImage = 0,

	ImageOnly = 1,

	ImageLeft = 2,

	ImageRight = 3,

	ImageBelow = 4,

	ImageAbove = 5,

	ImageOverlaps = 6,

	ImageLeading = 7,

	ImageTrailing = 8
}

globalThis.NSCellImagePosition = NSCellImagePosition;

enum NSCellStyleMask {

	NoCellMask = 0,

	ContentsCellMask = 1,

	PushInCellMask = 2,

	ChangeGrayCellMask = 4,

	ChangeBackgroundCellMask = 8
}

globalThis.NSCellStyleMask = NSCellStyleMask;

enum NSCellType {

	NullCellType = 0,

	TextCellType = 1,

	ImageCellType = 2
}

globalThis.NSCellType = NSCellType;

interface NSChangeSpelling {

	changeSpelling(_?: any): void;
}
declare var NSChangeSpelling: {

	prototype: NSChangeSpelling;
};

enum NSCharacterCollection {

	IdentityMappingCharacterCollection = 0,

	AdobeCNS1CharacterCollection = 1,

	AdobeGB1CharacterCollection = 2,

	AdobeJapan1CharacterCollection = 3,

	AdobeJapan2CharacterCollection = 4,

	AdobeKorea1CharacterCollection = 5
}

globalThis.NSCharacterCollection = NSCharacterCollection;

declare var NSCharacterEncodingDocumentAttribute: string;

declare var NSCharacterEncodingDocumentOption: string;

declare const NSClearDisplayFunctionKey: number;

declare const NSClearLineFunctionKey: number;

declare class NSClickGestureRecognizer extends NSGestureRecognizer implements NSCoding {

	setButtonMask(_: number)

	buttonMask: number;

	setNumberOfClicksRequired(_: number)

	numberOfClicksRequired: number;

	setNumberOfTouchesRequired(_: number)

	numberOfTouchesRequired: number;

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare var NSClipPagination: NSPrintingPaginationMode;

declare class NSClipView extends NSView {

	setAutomaticallyAdjustsContentInsets(_: boolean)

	automaticallyAdjustsContentInsets: boolean;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setContentInsets(_: NSEdgeInsets)

	contentInsets: NSEdgeInsets;

	setDocumentCursor(_: NSCursor)

	documentCursor: NSCursor;

	readonly documentRect: CGRect;

	setDocumentView(_: NSView)

	documentView: NSView;

	readonly documentVisibleRect: CGRect;

	setDrawsBackground(_: boolean)

	drawsBackground: boolean;

	constrainBoundsRect(_: CGRect): CGRect;

	scrollToPoint(to: CGPoint): void;

	viewBoundsChanged(_: NSNotification): void;

	viewFrameChanged(_: NSNotification): void;
}

declare var NSClockAndCalendarDatePickerStyle: NSDatePickerStyle;

declare var NSClosePathBezierPathElement: NSBezierPathElement;

enum NSCloudKitSharingServiceOptions {

	Standard = 0,

	AllowPublic = 1,

	AllowPrivate = 2,

	AllowReadOnly = 16,

	AllowReadWrite = 32
}

globalThis.NSCloudKitSharingServiceOptions = NSCloudKitSharingServiceOptions;

interface NSCloudSharingServiceDelegate extends NSSharingServiceDelegate {

	optionsForSharingServiceShareProvider?(for_: NSSharingService, share: NSItemProvider): NSCloudKitSharingServiceOptions;

	sharingServiceDidSaveShare?(_: NSSharingService, didSave: CKShare): void;

	sharingServiceDidCompleteForItemsError?(_: NSSharingService, didCompleteForItems: NSArray<any>, error?: NSError): void;

	sharingServiceDidStopSharing?(_: NSSharingService, didStopSharing: CKShare): void;
}
declare var NSCloudSharingServiceDelegate: {

	prototype: NSCloudSharingServiceDelegate;
};

interface NSCloudSharingValidation extends NSObjectProtocol {

	cloudShareForUserInterfaceItem(for_: NSValidatedUserInterfaceItem): CKShare;
}
declare var NSCloudSharingValidation: {

	prototype: NSCloudSharingValidation;
};

declare var NSCocoaVersionDocumentAttribute: string;

enum NSCollectionElementCategory {

	Item = 0,

	SupplementaryView = 1,

	DecorationView = 2,

	InterItemGap = 3
}

globalThis.NSCollectionElementCategory = NSCollectionElementCategory;

declare var NSCollectionElementKindInterItemGapIndicator: string;

declare var NSCollectionElementKindSectionFooter: string;

declare var NSCollectionElementKindSectionHeader: string;

declare class NSCollectionLayoutAnchor extends NSObject implements NSCopying {

	static layoutAnchorWithEdges(edges: NSDirectionalRectEdge): NSCollectionLayoutAnchor;

	static layoutAnchorWithEdgesAbsoluteOffset(edges: NSDirectionalRectEdge, absoluteOffset: CGPoint): NSCollectionLayoutAnchor;

	static layoutAnchorWithEdgesFractionalOffset(edges: NSDirectionalRectEdge, fractionalOffset: CGPoint): NSCollectionLayoutAnchor;

	readonly edges: NSDirectionalRectEdge;

	readonly isAbsoluteOffset: boolean;

	readonly isFractionalOffset: boolean;

	readonly offset: CGPoint;

	copyWithZone(_?: any): any;
}

declare class NSCollectionLayoutBoundarySupplementaryItem extends NSCollectionLayoutSupplementaryItem implements NSCopying {

	static boundarySupplementaryItemWithLayoutSizeElementKindAlignment(layoutSize: NSCollectionLayoutSize, elementKind: string, alignment: NSRectAlignment): NSCollectionLayoutBoundarySupplementaryItem;

	static boundarySupplementaryItemWithLayoutSizeElementKindAlignmentAbsoluteOffset(layoutSize: NSCollectionLayoutSize, elementKind: string, alignment: NSRectAlignment, absoluteOffset: CGPoint): NSCollectionLayoutBoundarySupplementaryItem;

	static itemWithLayoutSize(layoutSize: NSCollectionLayoutSize): NSCollectionLayoutBoundarySupplementaryItem; // inherited from NSCollectionLayoutItem

	static itemWithLayoutSizeSupplementaryItems(layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>): NSCollectionLayoutBoundarySupplementaryItem; // inherited from NSCollectionLayoutItem

	static supplementaryItemWithLayoutSizeElementKindContainerAnchor(layoutSize: NSCollectionLayoutSize, elementKind: string, containerAnchor: NSCollectionLayoutAnchor): NSCollectionLayoutBoundarySupplementaryItem; // inherited from NSCollectionLayoutSupplementaryItem

	static supplementaryItemWithLayoutSizeElementKindContainerAnchorItemAnchor(layoutSize: NSCollectionLayoutSize, elementKind: string, containerAnchor: NSCollectionLayoutAnchor, itemAnchor: NSCollectionLayoutAnchor): NSCollectionLayoutBoundarySupplementaryItem; // inherited from NSCollectionLayoutSupplementaryItem

	readonly alignment: NSRectAlignment;

	setExtendsBoundary(_: boolean)

	extendsBoundary: boolean;

	readonly offset: CGPoint;

	setPinToVisibleBounds(_: boolean)

	pinToVisibleBounds: boolean;

	copyWithZone(_?: any): any;
}

interface NSCollectionLayoutContainer extends NSObjectProtocol {

	contentInsets: NSDirectionalEdgeInsets;

	contentSize: CGSize;

	effectiveContentInsets: NSDirectionalEdgeInsets;

	effectiveContentSize: CGSize;
}
declare var NSCollectionLayoutContainer: {

	prototype: NSCollectionLayoutContainer;
};

declare class NSCollectionLayoutDecorationItem extends NSCollectionLayoutItem implements NSCopying {

	static backgroundDecorationItemWithElementKind(elementKind: string): NSCollectionLayoutDecorationItem;

	static itemWithLayoutSize(layoutSize: NSCollectionLayoutSize): NSCollectionLayoutDecorationItem; // inherited from NSCollectionLayoutItem

	static itemWithLayoutSizeSupplementaryItems(layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>): NSCollectionLayoutDecorationItem; // inherited from NSCollectionLayoutItem

	readonly elementKind: string;

	setZIndex(_: number)

	zIndex: number;

	copyWithZone(_?: any): any;
}

declare class NSCollectionLayoutDimension extends NSObject implements NSCopying {

	static absoluteDimension(_: number): NSCollectionLayoutDimension;

	static estimatedDimension(_: number): NSCollectionLayoutDimension;

	static fractionalHeightDimension(_: number): NSCollectionLayoutDimension;

	static fractionalWidthDimension(_: number): NSCollectionLayoutDimension;

	readonly dimension: number;

	readonly isAbsolute: boolean;

	readonly isEstimated: boolean;

	readonly isFractionalHeight: boolean;

	readonly isFractionalWidth: boolean;

	copyWithZone(_?: any): any;
}

declare class NSCollectionLayoutEdgeSpacing extends NSObject implements NSCopying {

	static spacingForLeadingTopTrailingBottom(leading?: NSCollectionLayoutSpacing, top?: NSCollectionLayoutSpacing, trailing?: NSCollectionLayoutSpacing, bottom?: NSCollectionLayoutSpacing): NSCollectionLayoutEdgeSpacing;

	readonly bottom: NSCollectionLayoutSpacing;

	readonly leading: NSCollectionLayoutSpacing;

	readonly top: NSCollectionLayoutSpacing;

	readonly trailing: NSCollectionLayoutSpacing;

	copyWithZone(_?: any): any;
}

interface NSCollectionLayoutEnvironment extends NSObjectProtocol {

	container: NSCollectionLayoutContainer;
}
declare var NSCollectionLayoutEnvironment: {

	prototype: NSCollectionLayoutEnvironment;
};

declare class NSCollectionLayoutGroup extends NSCollectionLayoutItem implements NSCopying {

	static customGroupWithLayoutSizeItemProvider(layoutSize: NSCollectionLayoutSize, itemProvider: (p1: NSCollectionLayoutEnvironment) => NSArray<NSCollectionLayoutGroupCustomItem>): NSCollectionLayoutGroup;

	static horizontalGroupWithLayoutSizeSubitemCount(layoutSize: NSCollectionLayoutSize, subitem: NSCollectionLayoutItem, count: number): NSCollectionLayoutGroup;

	static horizontalGroupWithLayoutSizeSubitems(layoutSize: NSCollectionLayoutSize, subitems: NSArray<NSCollectionLayoutItem>): NSCollectionLayoutGroup;

	static itemWithLayoutSize(layoutSize: NSCollectionLayoutSize): NSCollectionLayoutGroup; // inherited from NSCollectionLayoutItem

	static itemWithLayoutSizeSupplementaryItems(layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>): NSCollectionLayoutGroup; // inherited from NSCollectionLayoutItem

	static verticalGroupWithLayoutSizeSubitemCount(layoutSize: NSCollectionLayoutSize, subitem: NSCollectionLayoutItem, count: number): NSCollectionLayoutGroup;

	static verticalGroupWithLayoutSizeSubitems(layoutSize: NSCollectionLayoutSize, subitems: NSArray<NSCollectionLayoutItem>): NSCollectionLayoutGroup;

	setInterItemSpacing(_: NSCollectionLayoutSpacing)

	interItemSpacing: NSCollectionLayoutSpacing;

	readonly subitems: NSArray<NSCollectionLayoutItem>;

	setSupplementaryItems(_: NSArray<NSCollectionLayoutSupplementaryItem>)

	supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>;

	copyWithZone(_?: any): any;

	visualDescription(): string;
}

declare class NSCollectionLayoutGroupCustomItem extends NSObject implements NSCopying {

	static customItemWithFrame(frame: CGRect): NSCollectionLayoutGroupCustomItem;

	static customItemWithFrameZIndex(frame: CGRect, zIndex: number): NSCollectionLayoutGroupCustomItem;

	readonly frame: CGRect;

	readonly zIndex: number;

	copyWithZone(_?: any): any;
}

declare class NSCollectionLayoutItem extends NSObject implements NSCopying {

	static itemWithLayoutSize(layoutSize: NSCollectionLayoutSize): NSCollectionLayoutItem;

	static itemWithLayoutSizeSupplementaryItems(layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>): NSCollectionLayoutItem;

	setContentInsets(_: NSDirectionalEdgeInsets)

	contentInsets: NSDirectionalEdgeInsets;

	setEdgeSpacing(_: NSCollectionLayoutEdgeSpacing)

	edgeSpacing: NSCollectionLayoutEdgeSpacing;

	readonly layoutSize: NSCollectionLayoutSize;

	readonly supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>;

	copyWithZone(_?: any): any;
}

declare class NSCollectionLayoutSection extends NSObject implements NSCopying {

	static sectionWithGroup(group: NSCollectionLayoutGroup): NSCollectionLayoutSection;

	setBoundarySupplementaryItems(_: NSArray<NSCollectionLayoutBoundarySupplementaryItem>)

	boundarySupplementaryItems: NSArray<NSCollectionLayoutBoundarySupplementaryItem>;

	setContentInsets(_: NSDirectionalEdgeInsets)

	contentInsets: NSDirectionalEdgeInsets;

	setDecorationItems(_: NSArray<NSCollectionLayoutDecorationItem>)

	decorationItems: NSArray<NSCollectionLayoutDecorationItem>;

	setInterGroupSpacing(_: number)

	interGroupSpacing: number;

	setOrthogonalScrollingBehavior(_: NSCollectionLayoutSectionOrthogonalScrollingBehavior)

	orthogonalScrollingBehavior: NSCollectionLayoutSectionOrthogonalScrollingBehavior;

	setSupplementariesFollowContentInsets(_: boolean)

	supplementariesFollowContentInsets: boolean;

	setVisibleItemsInvalidationHandler(_: (p1: NSArray<NSCollectionLayoutVisibleItem>, p2: CGPoint, p3: NSCollectionLayoutEnvironment) => void)

	visibleItemsInvalidationHandler: (p1: NSArray<NSCollectionLayoutVisibleItem>, p2: CGPoint, p3: NSCollectionLayoutEnvironment) => void;

	copyWithZone(_?: any): any;
}

enum NSCollectionLayoutSectionOrthogonalScrollingBehavior {

	None = 0,

	Continuous = 1,

	ContinuousGroupLeadingBoundary = 2,

	Paging = 3,

	GroupPaging = 4,

	GroupPagingCentered = 5
}

globalThis.NSCollectionLayoutSectionOrthogonalScrollingBehavior = NSCollectionLayoutSectionOrthogonalScrollingBehavior;

declare class NSCollectionLayoutSize extends NSObject implements NSCopying {

	static sizeWithWidthDimensionHeightDimension(widthDimension: NSCollectionLayoutDimension, heightDimension: NSCollectionLayoutDimension): NSCollectionLayoutSize;

	readonly heightDimension: NSCollectionLayoutDimension;

	readonly widthDimension: NSCollectionLayoutDimension;

	copyWithZone(_?: any): any;
}

declare class NSCollectionLayoutSpacing extends NSObject implements NSCopying {

	static fixedSpacing(_: number): NSCollectionLayoutSpacing;

	static flexibleSpacing(_: number): NSCollectionLayoutSpacing;

	readonly isFixedSpacing: boolean;

	readonly isFlexibleSpacing: boolean;

	readonly spacing: number;

	copyWithZone(_?: any): any;
}

declare class NSCollectionLayoutSupplementaryItem extends NSCollectionLayoutItem implements NSCopying {

	static itemWithLayoutSize(layoutSize: NSCollectionLayoutSize): NSCollectionLayoutSupplementaryItem; // inherited from NSCollectionLayoutItem

	static itemWithLayoutSizeSupplementaryItems(layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>): NSCollectionLayoutSupplementaryItem; // inherited from NSCollectionLayoutItem

	static supplementaryItemWithLayoutSizeElementKindContainerAnchor(layoutSize: NSCollectionLayoutSize, elementKind: string, containerAnchor: NSCollectionLayoutAnchor): NSCollectionLayoutSupplementaryItem;

	static supplementaryItemWithLayoutSizeElementKindContainerAnchorItemAnchor(layoutSize: NSCollectionLayoutSize, elementKind: string, containerAnchor: NSCollectionLayoutAnchor, itemAnchor: NSCollectionLayoutAnchor): NSCollectionLayoutSupplementaryItem;

	readonly containerAnchor: NSCollectionLayoutAnchor;

	readonly elementKind: string;

	readonly itemAnchor: NSCollectionLayoutAnchor;

	setZIndex(_: number)

	zIndex: number;

	copyWithZone(_?: any): any;
}

interface NSCollectionLayoutVisibleItem extends NSObjectProtocol {

	setAlpha(_: number)

	alpha: number;

	bounds: CGRect;

	setCenter(_: CGPoint)

	center: CGPoint;

	frame: CGRect;

	setHidden(_: boolean)

	isHidden: boolean;

	indexPath: NSIndexPath;

	name: string;

	representedElementCategory: NSCollectionElementCategory;

	representedElementKind: string;

	setZIndex(_: number)

	zIndex: number;
}
declare var NSCollectionLayoutVisibleItem: {

	prototype: NSCollectionLayoutVisibleItem;
};

enum NSCollectionUpdateAction {

	Insert = 0,

	Delete = 1,

	Reload = 2,

	Move = 3,

	None = 4
}

globalThis.NSCollectionUpdateAction = NSCollectionUpdateAction;

declare class NSCollectionView extends NSView implements NSDraggingDestination, NSDraggingSource {

	setAllowsEmptySelection(_: boolean)

	allowsEmptySelection: boolean;

	setAllowsMultipleSelection(_: boolean)

	allowsMultipleSelection: boolean;

	setBackgroundColors(_: NSArray<NSColor>)

	backgroundColors: NSArray<NSColor>;

	setBackgroundView(_: NSView)

	backgroundView: NSView;

	setBackgroundViewScrollsWithContent(_: boolean)

	backgroundViewScrollsWithContent: boolean;

	setCollectionViewLayout(_: NSCollectionViewLayout)

	collectionViewLayout: NSCollectionViewLayout;

	setContent(_: NSArray<any>)

	content: NSArray<any>;

	setDataSource(_: NSCollectionViewDataSource)

	dataSource: NSCollectionViewDataSource;

	setDelegate(_: NSCollectionViewDelegate)

	delegate: NSCollectionViewDelegate;

	readonly isFirstResponder: boolean;

	readonly numberOfSections: number;

	setPrefetchDataSource(_: NSCollectionViewPrefetching)

	prefetchDataSource: NSCollectionViewPrefetching;

	setSelectable(_: boolean)

	isSelectable: boolean;

	setSelectionIndexPaths(_: NSSet<NSIndexPath>)

	selectionIndexPaths: NSSet<NSIndexPath>;

	setSelectionIndexes(_: NSIndexSet)

	selectionIndexes: NSIndexSet;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	concludeDragOperation(_?: NSDraggingInfo): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	deleteItemsWithAt(at: NSSet<NSIndexPath>): void;

	deleteSections(_: NSIndexSet): void;

	deselectAll(_?: any): void;

	deselectItemsWithAt(at: NSSet<NSIndexPath>): void;

	draggingEnded(_: NSDraggingInfo): void;

	draggingEntered(_: NSDraggingInfo): NSDragOperation;

	draggingExited(_?: NSDraggingInfo): void;

	draggingImageForItemsWithAtWithOffset(at: NSSet<NSIndexPath>, with_: NSEvent, offset: CGPoint): NSImage;

	draggingImageForItemsAtIndexesWithEventOffset(at: NSIndexSet, with_: NSEvent, offset: CGPoint): NSImage;

	draggingSessionEndedAtPointOperation(_: NSDraggingSession, endedAt: CGPoint, operation: NSDragOperation): void;

	draggingSessionMovedToPoint(_: NSDraggingSession, movedTo: CGPoint): void;

	draggingSessionSourceOperationMaskForDraggingContext(_: NSDraggingSession, sourceOperationMaskFor: NSDraggingContext): NSDragOperation;

	draggingSessionWillBeginAtPoint(_: NSDraggingSession, willBeginAt: CGPoint): void;

	draggingUpdated(_: NSDraggingInfo): NSDragOperation;

	frameForItemAtIndex(at: number): CGRect;

	frameForItemAtIndexWithNumberOfItems(at: number, withNumberOfItems: number): CGRect;

	ignoreModifierKeysForDraggingSession(for_: NSDraggingSession): boolean;

	indexPathForItem(for_: NSCollectionViewItem): NSIndexPath;

	indexPathForItemAtPoint(at: CGPoint): NSIndexPath;

	indexPathsForVisibleItems(): NSSet<NSIndexPath>;

	indexPathsForVisibleSupplementaryElementsOfKind(ofKind: string): NSSet<NSIndexPath>;

	insertItemsWithAt(at: NSSet<NSIndexPath>): void;

	insertSections(_: NSIndexSet): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	itemAtIndex(at: number): NSCollectionViewItem;

	itemAtIndexPath(at: NSIndexPath): NSCollectionViewItem;

	layoutAttributesForItemAtIndexPath(at: NSIndexPath): NSCollectionViewLayoutAttributes;

	layoutAttributesForSupplementaryElementOfKindAtIndexPath(ofKind: string, at: NSIndexPath): NSCollectionViewLayoutAttributes;

	makeItemWithIdentifierForIndexPath(withIdentifier: string, for_: NSIndexPath): NSCollectionViewItem;

	makeSupplementaryViewOfKindWithIdentifierForIndexPath(ofKind: string, withIdentifier: string, for_: NSIndexPath): NSView;

	moveItemAtIndexPathToIndexPath(at: NSIndexPath, to: NSIndexPath): void;

	moveSectionToSection(_: number, toSection: number): void;

	numberOfItemsInSection(inSection: number): number;

	performBatchUpdatesCompletionHandler(_?: () => void, completionHandler?: (p1: boolean) => void): void;

	performDragOperation(_: NSDraggingInfo): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	prepareForDragOperation(_: NSDraggingInfo): boolean;

	registerClassForItemWithIdentifier(_?: typeof NSObject, forItemWithIdentifier: string): void;

	registerClassForSupplementaryViewOfKindWithIdentifier(_?: typeof NSObject, forSupplementaryViewOfKind: string, withIdentifier: string): void;

	registerNibForItemWithIdentifier(_?: NSNib, forItemWithIdentifier: string): void;

	registerNibForSupplementaryViewOfKindWithIdentifier(_?: NSNib, forSupplementaryViewOfKind: string, withIdentifier: string): void;

	reloadData(): void;

	reloadItemsWithAt(at: NSSet<NSIndexPath>): void;

	reloadSections(_: NSIndexSet): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	scrollToItemsWithAtScrollPosition(at: NSSet<NSIndexPath>, scrollPosition: NSCollectionViewScrollPosition): void;

	selectItemsWithAtScrollPosition(at: NSSet<NSIndexPath>, scrollPosition: NSCollectionViewScrollPosition): void;

	self(): this;

	setDraggingSourceOperationMaskForLocal(_: NSDragOperation, forLocal: boolean): void;

	supplementaryViewForElementKindAtIndexPath(forElementKind: string, at: NSIndexPath): NSView;

	toggleSectionCollapse(_: any): void;

	updateDraggingItemsForDrag(_?: NSDraggingInfo): void;

	visibleItems(): NSArray<NSCollectionViewItem>;

	visibleSupplementaryViewsOfKind(ofKind: string): NSArray<NSView>;

	wantsPeriodicDraggingUpdates(): boolean;
}

declare class NSCollectionViewCompositionalLayout extends NSCollectionViewLayout {

	setConfiguration(_: NSCollectionViewCompositionalLayoutConfiguration)

	configuration: NSCollectionViewCompositionalLayoutConfiguration;

	static create(section: NSCollectionLayoutSection);

	static create(section: NSCollectionLayoutSection, configuration: NSCollectionViewCompositionalLayoutConfiguration);

	static create(sectionProvider: (p1: number, p2: NSCollectionLayoutEnvironment) => NSCollectionLayoutSection);

	static create(sectionProvider: (p1: number, p2: NSCollectionLayoutEnvironment) => NSCollectionLayoutSection, configuration: NSCollectionViewCompositionalLayoutConfiguration);
}

declare class NSCollectionViewCompositionalLayoutConfiguration extends NSObject implements NSCopying {

	setBoundarySupplementaryItems(_: NSArray<NSCollectionLayoutBoundarySupplementaryItem>)

	boundarySupplementaryItems: NSArray<NSCollectionLayoutBoundarySupplementaryItem>;

	setInterSectionSpacing(_: number)

	interSectionSpacing: number;

	setScrollDirection(_: NSCollectionViewScrollDirection)

	scrollDirection: NSCollectionViewScrollDirection;

	copyWithZone(_?: any): any;
}

interface NSCollectionViewDataSource extends NSObjectProtocol {

	collectionViewItemForRepresentedObjectAtIndexPath(_: NSCollectionView, itemForRepresentedObjectAt: NSIndexPath): NSCollectionViewItem;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath?(_: NSCollectionView, viewForSupplementaryElementOfKind: string, at: NSIndexPath): NSView;

	collectionViewNumberOfItemsInSection(_: NSCollectionView, numberOfItemsInSection: number): number;

	numberOfSectionsInCollectionView?(in_: NSCollectionView): number;
}
declare var NSCollectionViewDataSource: {

	prototype: NSCollectionViewDataSource;
};

interface NSCollectionViewDelegate extends NSObjectProtocol {

	collectionViewWith_CanDragItemsAtWith?(_: NSCollectionView, canDragItemsAt: NSSet<NSIndexPath>, with_: NSEvent): boolean;

	collectionViewCanDragItemsAtIndexesWithEvent?(_: NSCollectionView, canDragItemsAt: NSIndexSet, with_: NSEvent): boolean;

	collectionViewWith_WriteItemsAtTo?(_: NSCollectionView, writeItemsAt: NSSet<NSIndexPath>, to: NSPasteboard): boolean;

	collectionViewWriteItemsAtIndexesToPasteboard?(_: NSCollectionView, writeItemsAt: NSIndexSet, to: NSPasteboard): boolean;

	collectionViewWith_DraggingImageForItemsAtWithOffset?(_: NSCollectionView, draggingImageForItemsAt: NSSet<NSIndexPath>, with_: NSEvent, offset: CGPoint): NSImage;

	collectionViewDraggingImageForItemsAtIndexesWithEventOffset?(_: NSCollectionView, draggingImageForItemsAt: NSIndexSet, with_: NSEvent, offset: CGPoint): NSImage;

	collectionViewPasteboardWriterForItemAtIndexPath?(_: NSCollectionView, pasteboardWriterForItemAt: NSIndexPath): NSPasteboardWriting;

	collectionViewPasteboardWriterForItemAtIndex?(_: NSCollectionView, pasteboardWriterForItemAt: number): NSPasteboardWriting;

	collectionViewWith_DraggingSessionWillBeginAtForItemsAt?(_: NSCollectionView, draggingSession: NSDraggingSession, willBeginAt: CGPoint, forItemsAt: NSSet<NSIndexPath>): void;

	collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexes?(_: NSCollectionView, draggingSession: NSDraggingSession, willBeginAt: CGPoint, forItemsAt: NSIndexSet): void;

	collectionViewDraggingSessionEndedAtPointDragOperation?(_: NSCollectionView, draggingSession: NSDraggingSession, endedAt: CGPoint, dragOperation: NSDragOperation): void;

	collectionViewWith_ShouldChangeItemsAtTo?(_: NSCollectionView, shouldChangeItemsAt: NSSet<NSIndexPath>, to: NSCollectionViewItemHighlightState): NSSet<NSIndexPath>;

	collectionViewWith_DidChangeItemsAtTo?(_: NSCollectionView, didChangeItemsAt: NSSet<NSIndexPath>, to: NSCollectionViewItemHighlightState): void;

	collectionViewWith_ShouldSelectItemsAt?(_: NSCollectionView, shouldSelectItemsAt: NSSet<NSIndexPath>): NSSet<NSIndexPath>;

	collectionViewWith_ShouldDeselectItemsAt?(_: NSCollectionView, shouldDeselectItemsAt: NSSet<NSIndexPath>): NSSet<NSIndexPath>;

	collectionViewWith_DidSelectItemsAt?(_: NSCollectionView, didSelectItemsAt: NSSet<NSIndexPath>): void;

	collectionViewWith_DidDeselectItemsAt?(_: NSCollectionView, didDeselectItemsAt: NSSet<NSIndexPath>): void;

	collectionViewWillDisplayItemForRepresentedObjectAtIndexPath?(_: NSCollectionView, willDisplay: NSCollectionViewItem, forRepresentedObjectAt: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath?(_: NSCollectionView, willDisplaySupplementaryView: NSView, forElementKind: string, at: NSIndexPath): void;

	collectionViewDidEndDisplayingItemForRepresentedObjectAtIndexPath?(_: NSCollectionView, didEndDisplaying: NSCollectionViewItem, forRepresentedObjectAt: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath?(_: NSCollectionView, didEndDisplayingSupplementaryView: NSView, forElementOfKind: string, at: NSIndexPath): void;

	collectionViewAcceptDropIndexDropOperation?(_: NSCollectionView, acceptDrop: NSDraggingInfo, index: number, dropOperation: NSCollectionViewDropOperation): boolean;

	collectionViewAcceptDropIndexPathDropOperation?(_: NSCollectionView, acceptDrop: NSDraggingInfo, indexPath: NSIndexPath, dropOperation: NSCollectionViewDropOperation): boolean;

	collectionViewTransitionLayoutForOldLayoutNewLayout?(_: NSCollectionView, transitionLayoutForOldLayout: NSCollectionViewLayout, newLayout: NSCollectionViewLayout): NSCollectionViewTransitionLayout;

	collectionViewUpdateDraggingItemsForDrag?(_: NSCollectionView, updateDraggingItemsForDrag: NSDraggingInfo): void;

	collectionViewValidateDropProposedIndexDropOperation?(_: NSCollectionView, validateDrop: NSDraggingInfo, proposedIndex: number, dropOperation: NSCollectionViewDropOperation): NSDragOperation;

	collectionViewValidateDropProposedIndexPathDropOperation?(_: NSCollectionView, validateDrop: NSDraggingInfo, proposedIndexPath: NSIndexPath, dropOperation: NSCollectionViewDropOperation): NSDragOperation;
}
declare var NSCollectionViewDelegate: {

	prototype: NSCollectionViewDelegate;
};

interface NSCollectionViewDelegateFlowLayout extends NSCollectionViewDelegate {

	collectionViewLayoutSizeForItemAtIndexPath?(_: NSCollectionView, layout: NSCollectionViewLayout, sizeForItemAt: NSIndexPath): CGSize;

	collectionViewLayoutInsetForSectionAtIndex?(_: NSCollectionView, layout: NSCollectionViewLayout, insetForSectionAt: number): NSEdgeInsets;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex?(_: NSCollectionView, layout: NSCollectionViewLayout, minimumLineSpacingForSectionAt: number): number;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex?(_: NSCollectionView, layout: NSCollectionViewLayout, minimumInteritemSpacingForSectionAt: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection?(_: NSCollectionView, layout: NSCollectionViewLayout, referenceSizeForFooterInSection: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection?(_: NSCollectionView, layout: NSCollectionViewLayout, referenceSizeForHeaderInSection: number): CGSize;
}
declare var NSCollectionViewDelegateFlowLayout: {

	prototype: NSCollectionViewDelegateFlowLayout;
};

declare class NSCollectionViewDiffableDataSource<SectionIdentifierType, ItemIdentifierType> extends NSObject implements NSCollectionViewDataSource {

	setSupplementaryViewProvider(_: (p1: NSCollectionView, p2: string, p3: NSIndexPath) => NSView)

	supplementaryViewProvider: (p1: NSCollectionView, p2: string, p3: NSIndexPath) => NSView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(collectionView: NSCollectionView, itemProvider: (p1: NSCollectionView, p2: NSIndexPath, p3: ItemIdentifierType) => NSCollectionViewItem);

	applySnapshotWithAnimatingDifferences(_: NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType>, animatingDifferences: boolean): void;

	collectionViewItemForRepresentedObjectAtIndexPath(_: NSCollectionView, itemForRepresentedObjectAt: NSIndexPath): NSCollectionViewItem;

	collectionViewNumberOfItemsInSection(_: NSCollectionView, numberOfItemsInSection: number): number;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(_: NSCollectionView, viewForSupplementaryElementOfKind: string, at: NSIndexPath): NSView;

	conformsToProtocol(_: any /* Protocol */): boolean;

	indexPathForItemIdentifier(_: ItemIdentifierType): NSIndexPath;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	itemIdentifierForIndexPath(_: NSIndexPath): ItemIdentifierType;

	numberOfSectionsInCollectionView(in_: NSCollectionView): number;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	snapshot(): NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType>;
}

enum NSCollectionViewDropOperation {

	On = 0,

	Before = 1
}

globalThis.NSCollectionViewDropOperation = NSCollectionViewDropOperation;

interface NSCollectionViewElement extends NSObjectProtocol, NSUserInterfaceItemIdentification {

	applyLayoutAttributes?(_: NSCollectionViewLayoutAttributes): void;

	didTransitionFromLayoutToLayout?(from: NSCollectionViewLayout, to: NSCollectionViewLayout): void;

	preferredLayoutAttributesFittingAttributes?(_: NSCollectionViewLayoutAttributes): NSCollectionViewLayoutAttributes;

	prepareForReuse?(): void;

	willTransitionFromLayoutToLayout?(from: NSCollectionViewLayout, to: NSCollectionViewLayout): void;
}
declare var NSCollectionViewElement: {

	prototype: NSCollectionViewElement;
};

declare class NSCollectionViewFlowLayout extends NSCollectionViewLayout {

	setEstimatedItemSize(_: CGSize)

	estimatedItemSize: CGSize;

	setFooterReferenceSize(_: CGSize)

	footerReferenceSize: CGSize;

	setHeaderReferenceSize(_: CGSize)

	headerReferenceSize: CGSize;

	setItemSize(_: CGSize)

	itemSize: CGSize;

	setMinimumInteritemSpacing(_: number)

	minimumInteritemSpacing: number;

	setMinimumLineSpacing(_: number)

	minimumLineSpacing: number;

	setScrollDirection(_: NSCollectionViewScrollDirection)

	scrollDirection: NSCollectionViewScrollDirection;

	setSectionFootersPinToVisibleBounds(_: boolean)

	sectionFootersPinToVisibleBounds: boolean;

	setSectionHeadersPinToVisibleBounds(_: boolean)

	sectionHeadersPinToVisibleBounds: boolean;

	setSectionInset(_: NSEdgeInsets)

	sectionInset: NSEdgeInsets;

	collapseSectionAtIndex(at: number): void;

	expandSectionAtIndex(at: number): void;

	sectionAtIndexIsCollapsed(atIndexIsCollapsed: number): boolean;
}

declare class NSCollectionViewFlowLayoutInvalidationContext extends NSCollectionViewLayoutInvalidationContext {

	setInvalidateFlowLayoutAttributes(_: boolean)

	invalidateFlowLayoutAttributes: boolean;

	setInvalidateFlowLayoutDelegateMetrics(_: boolean)

	invalidateFlowLayoutDelegateMetrics: boolean;
}

declare class NSCollectionViewGridLayout extends NSCollectionViewLayout {

	setBackgroundColors(_: NSArray<NSColor>)

	backgroundColors: NSArray<NSColor>;

	setMargins(_: NSEdgeInsets)

	margins: NSEdgeInsets;

	setMaximumItemSize(_: CGSize)

	maximumItemSize: CGSize;

	setMaximumNumberOfColumns(_: number)

	maximumNumberOfColumns: number;

	setMaximumNumberOfRows(_: number)

	maximumNumberOfRows: number;

	setMinimumInteritemSpacing(_: number)

	minimumInteritemSpacing: number;

	setMinimumItemSize(_: CGSize)

	minimumItemSize: CGSize;

	setMinimumLineSpacing(_: number)

	minimumLineSpacing: number;
}

declare class NSCollectionViewItem extends NSViewController implements NSCollectionViewElement, NSCopying {

	readonly collectionView: NSCollectionView;

	readonly draggingImageComponents: NSArray<NSDraggingImageComponent>;

	setHighlightState(_: NSCollectionViewItemHighlightState)

	highlightState: NSCollectionViewItemHighlightState;

	setImageView(_: NSImageView)

	imageView: NSImageView;

	setSelected(_: boolean)

	isSelected: boolean;

	setTextField(_: NSTextField)

	textField: NSTextField;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	setIdentifier(_: string)

	identifier: string; // inherited from NSUserInterfaceItemIdentification

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	applyLayoutAttributes(_: NSCollectionViewLayoutAttributes): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	didTransitionFromLayoutToLayout(from: NSCollectionViewLayout, to: NSCollectionViewLayout): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	preferredLayoutAttributesFittingAttributes(_: NSCollectionViewLayoutAttributes): NSCollectionViewLayoutAttributes;

	prepareForReuse(): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	willTransitionFromLayoutToLayout(from: NSCollectionViewLayout, to: NSCollectionViewLayout): void;
}

enum NSCollectionViewItemHighlightState {

	None = 0,

	ForSelection = 1,

	ForDeselection = 2,

	AsDropTarget = 3
}

globalThis.NSCollectionViewItemHighlightState = NSCollectionViewItemHighlightState;

declare class NSCollectionViewLayout extends NSObject implements NSCoding {

	readonly collectionView: NSCollectionView;

	readonly collectionViewContentSize: CGSize;

	static invalidationContextClass(): typeof NSObject;

	static layoutAttributesClass(): typeof NSObject;

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	finalLayoutAttributesForDisappearingDecorationElementOfKindAtIndexPath(ofKind: string, at: NSIndexPath): NSCollectionViewLayoutAttributes;

	finalLayoutAttributesForDisappearingItemAtIndexPath(at: NSIndexPath): NSCollectionViewLayoutAttributes;

	finalLayoutAttributesForDisappearingSupplementaryElementOfKindAtIndexPath(ofKind: string, at: NSIndexPath): NSCollectionViewLayoutAttributes;

	finalizeAnimatedBoundsChange(): void;

	finalizeCollectionViewUpdates(): void;

	finalizeLayoutTransition(): void;

	indexPathsToDeleteForDecorationViewOfKind(ofKind: string): NSSet<NSIndexPath>;

	indexPathsToDeleteForSupplementaryViewOfKind(ofKind: string): NSSet<NSIndexPath>;

	indexPathsToInsertForDecorationViewOfKind(ofKind: string): NSSet<NSIndexPath>;

	indexPathsToInsertForSupplementaryViewOfKind(ofKind: string): NSSet<NSIndexPath>;

	initialLayoutAttributesForAppearingDecorationElementOfKindAtIndexPath(ofKind: string, at: NSIndexPath): NSCollectionViewLayoutAttributes;

	initialLayoutAttributesForAppearingItemAtIndexPath(at: NSIndexPath): NSCollectionViewLayoutAttributes;

	initialLayoutAttributesForAppearingSupplementaryElementOfKindAtIndexPath(ofKind: string, at: NSIndexPath): NSCollectionViewLayoutAttributes;

	invalidateLayout(): void;

	invalidateLayoutWithContext(with_: NSCollectionViewLayoutInvalidationContext): void;

	invalidationContextForBoundsChange(forBoundsChange: CGRect): NSCollectionViewLayoutInvalidationContext;

	invalidationContextForPreferredLayoutAttributesWithOriginalAttributes(forPreferredLayoutAttributes: NSCollectionViewLayoutAttributes, withOriginalAttributes: NSCollectionViewLayoutAttributes): NSCollectionViewLayoutInvalidationContext;

	layoutAttributesForDecorationViewOfKindAtIndexPath(ofKind: string, at: NSIndexPath): NSCollectionViewLayoutAttributes;

	layoutAttributesForDropTargetAtPoint(at: CGPoint): NSCollectionViewLayoutAttributes;

	layoutAttributesForElementsInRect(in_: CGRect): NSArray<NSCollectionViewLayoutAttributes>;

	layoutAttributesForInterItemGapBeforeIndexPath(before: NSIndexPath): NSCollectionViewLayoutAttributes;

	layoutAttributesForItemAtIndexPath(at: NSIndexPath): NSCollectionViewLayoutAttributes;

	layoutAttributesForSupplementaryViewOfKindAtIndexPath(ofKind: string, at: NSIndexPath): NSCollectionViewLayoutAttributes;

	prepareForAnimatedBoundsChange(forAnimatedBoundsChange: CGRect): void;

	prepareForCollectionViewUpdates(forCollectionViewUpdates: NSArray<NSCollectionViewUpdateItem>): void;

	prepareForTransitionFromLayout(from: NSCollectionViewLayout): void;

	prepareForTransitionToLayout(to: NSCollectionViewLayout): void;

	prepareLayout(): void;

	registerClassForDecorationViewOfKind(_?: typeof NSObject, forDecorationViewOfKind: string): void;

	registerNibForDecorationViewOfKind(_?: NSNib, forDecorationViewOfKind: string): void;

	shouldInvalidateLayoutForBoundsChange(forBoundsChange: CGRect): boolean;

	shouldInvalidateLayoutForPreferredLayoutAttributesWithOriginalAttributes(forPreferredLayoutAttributes: NSCollectionViewLayoutAttributes, withOriginalAttributes: NSCollectionViewLayoutAttributes): boolean;

	targetContentOffsetForProposedContentOffset(forProposedContentOffset: CGPoint): CGPoint;

	targetContentOffsetForProposedContentOffsetWithScrollingVelocity(forProposedContentOffset: CGPoint, withScrollingVelocity: CGPoint): CGPoint;
}

declare class NSCollectionViewLayoutAttributes extends NSObject implements NSCopying {

	static layoutAttributesForDecorationViewOfKindWithIndexPath(forDecorationViewOfKind: string, with_: NSIndexPath): NSCollectionViewLayoutAttributes;

	static layoutAttributesForInterItemGapBeforeIndexPath(forInterItemGapBefore: NSIndexPath): NSCollectionViewLayoutAttributes;

	static layoutAttributesForItemWithIndexPath(forItemWith: NSIndexPath): NSCollectionViewLayoutAttributes;

	static layoutAttributesForSupplementaryViewOfKindWithIndexPath(forSupplementaryViewOfKind: string, with_: NSIndexPath): NSCollectionViewLayoutAttributes;

	setAlpha(_: number)

	alpha: number;

	setFrame(_: CGRect)

	frame: CGRect;

	setHidden(_: boolean)

	isHidden: boolean;

	setIndexPath(_: NSIndexPath)

	indexPath: NSIndexPath;

	readonly representedElementCategory: NSCollectionElementCategory;

	readonly representedElementKind: string;

	setSize(_: CGSize)

	size: CGSize;

	setZIndex(_: number)

	zIndex: number;

	copyWithZone(_?: any): any;
}

declare class NSCollectionViewLayoutInvalidationContext extends NSObject {

	setContentOffsetAdjustment(_: CGPoint)

	contentOffsetAdjustment: CGPoint;

	setContentSizeAdjustment(_: CGSize)

	contentSizeAdjustment: CGSize;

	readonly invalidateDataSourceCounts: boolean;

	readonly invalidateEverything: boolean;

	readonly invalidatedDecorationIndexPaths: NSDictionary<string, NSSet<NSIndexPath>>;

	readonly invalidatedItemIndexPaths: NSSet<NSIndexPath>;

	readonly invalidatedSupplementaryIndexPaths: NSDictionary<string, NSSet<NSIndexPath>>;

	invalidateDecorationElementsOfKindAt(ofKind: string, at: NSSet<NSIndexPath>): void;

	invalidateItemsWithAt(at: NSSet<NSIndexPath>): void;

	invalidateSupplementaryElementsOfKindAt(ofKind: string, at: NSSet<NSIndexPath>): void;
}

interface NSCollectionViewPrefetching extends NSObjectProtocol {

	collectionViewPrefetchItemsAtIndexPaths(_: NSCollectionView, prefetchItemsAt: NSArray<NSIndexPath>): void;

	collectionViewCancelPrefetchingForItemsAtIndexPaths?(_: NSCollectionView, cancelPrefetchingForItemsAt: NSArray<NSIndexPath>): void;
}
declare var NSCollectionViewPrefetching: {

	prototype: NSCollectionViewPrefetching;
};

enum NSCollectionViewScrollDirection {

	Vertical = 0,

	Horizontal = 1
}

globalThis.NSCollectionViewScrollDirection = NSCollectionViewScrollDirection;

enum NSCollectionViewScrollPosition {

	None = 0,

	Top = 1,

	CenteredVertically = 2,

	Bottom = 4,

	NearestHorizontalEdge = 512,

	Left = 8,

	CenteredHorizontally = 16,

	Right = 32,

	LeadingEdge = 64,

	TrailingEdge = 128,

	NearestVerticalEdge = 256
}

globalThis.NSCollectionViewScrollPosition = NSCollectionViewScrollPosition;

interface NSCollectionViewSectionHeaderView extends NSCollectionViewElement {

	setSectionCollapseButton(_: NSButton)

	sectionCollapseButton?: NSButton;
}
declare var NSCollectionViewSectionHeaderView: {

	prototype: NSCollectionViewSectionHeaderView;
};

declare class NSCollectionViewTransitionLayout extends NSCollectionViewLayout {

	readonly currentLayout: NSCollectionViewLayout;

	readonly nextLayout: NSCollectionViewLayout;

	setTransitionProgress(_: number)

	transitionProgress: number;

	static create(currentLayout: NSCollectionViewLayout, nextLayout: NSCollectionViewLayout);

	updateValueForAnimatedKey(_: number, forAnimatedKey: string): void;

	valueForAnimatedKey(forAnimatedKey: string): number;
}

declare class NSCollectionViewUpdateItem extends NSObject {

	readonly indexPathAfterUpdate: NSIndexPath;

	readonly indexPathBeforeUpdate: NSIndexPath;

	readonly updateAction: NSCollectionUpdateAction;
}

declare class NSColor extends NSObject implements NSCopying, NSPasteboardReading, NSPasteboardWriting, NSSecureCoding {

	static colorForControlTint(for_: NSControlTint): NSColor;

	static colorFromPasteboard(from: NSPasteboard): NSColor;

	static colorNamed(named: string): NSColor;

	static colorNamedBundle(named: string, bundle?: NSBundle): NSColor;

	static colorWithCGColor(cgColor: any): NSColor;

	static colorWithCIColor(ciColor: CIColor): NSColor;

	static colorWithCalibratedHueSaturationBrightnessAlpha(calibratedHue: number, saturation: number, brightness: number, alpha: number): NSColor;

	static colorWithCalibratedRedGreenBlueAlpha(calibratedRed: number, green: number, blue: number, alpha: number): NSColor;

	static colorWithCalibratedWhiteAlpha(calibratedWhite: number, alpha: number): NSColor;

	static colorWithCatalogNameColorName(catalogName: string, colorName: string): NSColor;

	static colorWithColorSpaceComponentsCount(colorSpace: NSColorSpace, components: number, count: number): NSColor;

	static colorWithColorSpaceHueSaturationBrightnessAlpha(colorSpace: NSColorSpace, hue: number, saturation: number, brightness: number, alpha: number): NSColor;

	static colorWithDeviceCyanMagentaYellowBlackAlpha(deviceCyan: number, magenta: number, yellow: number, black: number, alpha: number): NSColor;

	static colorWithDeviceHueSaturationBrightnessAlpha(deviceHue: number, saturation: number, brightness: number, alpha: number): NSColor;

	static colorWithDeviceRedGreenBlueAlpha(deviceRed: number, green: number, blue: number, alpha: number): NSColor;

	static colorWithDeviceWhiteAlpha(deviceWhite: number, alpha: number): NSColor;

	static colorWithDisplayP3RedGreenBlueAlpha(displayP3Red: number, green: number, blue: number, alpha: number): NSColor;

	static colorWithGenericGamma22WhiteAlpha(genericGamma22White: number, alpha: number): NSColor;

	static colorWithHueSaturationBrightnessAlpha(hue: number, saturation: number, brightness: number, alpha: number): NSColor;

	static colorWithNameDynamicProvider(name?: string, dynamicProvider: (p1: NSAppearance) => NSColor): NSColor;

	static colorWithPatternImage(patternImage: NSImage): NSColor;

	static colorWithRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): NSColor;

	static colorWithSRGBRedGreenBlueAlpha(srgbRed: number, green: number, blue: number, alpha: number): NSColor;

	static colorWithWhiteAlpha(white: number, alpha: number): NSColor;

	static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardReadingOptions;

	readonly CGColor: any;

	readonly alphaComponent: number;

	readonly blackComponent: number;

	readonly blueComponent: number;

	readonly brightnessComponent: number;

	readonly catalogNameComponent: string;

	readonly colorNameComponent: string;

	readonly colorSpace: NSColorSpace;

	readonly cyanComponent: number;

	readonly greenComponent: number;

	readonly hueComponent: number;

	readonly localizedCatalogNameComponent: string;

	readonly localizedColorNameComponent: string;

	readonly magentaComponent: number;

	readonly numberOfComponents: number;

	readonly patternImage: NSImage;

	readonly redComponent: number;

	readonly saturationComponent: number;

	readonly type: NSColorType;

	readonly whiteComponent: number;

	readonly yellowComponent: number;

	static alternateSelectedControlTextColor(): NSColor;

	static alternatingContentBackgroundColors(): NSArray<NSColor>;

	static blackColor(): NSColor;

	static blueColor(): NSColor;

	static brownColor(): NSColor;

	static clearColor(): NSColor;

	static controlAccentColor(): NSColor;

	static controlBackgroundColor(): NSColor;

	static controlColor(): NSColor;

	static controlTextColor(): NSColor;

	static currentControlTint(): NSControlTint;

	static cyanColor(): NSColor;

	static darkGrayColor(): NSColor;

	static disabledControlTextColor(): NSColor;

	static findHighlightColor(): NSColor;

	static grayColor(): NSColor;

	static greenColor(): NSColor;

	static gridColor(): NSColor;

	static headerTextColor(): NSColor;

	static highlightColor(): NSColor;

	static setIgnoresAlpha(_: boolean)

	ignoresAlpha: boolean;

	static keyboardFocusIndicatorColor(): NSColor;

	static labelColor(): NSColor;

	static lightGrayColor(): NSColor;

	static linkColor(): NSColor;

	static magentaColor(): NSColor;

	static orangeColor(): NSColor;

	static placeholderTextColor(): NSColor;

	static purpleColor(): NSColor;

	static quaternaryLabelColor(): NSColor;

	static redColor(): NSColor;

	static scrubberTexturedBackgroundColor(): NSColor;

	static secondaryLabelColor(): NSColor;

	static selectedContentBackgroundColor(): NSColor;

	static selectedControlColor(): NSColor;

	static selectedControlTextColor(): NSColor;

	static selectedMenuItemTextColor(): NSColor;

	static selectedTextBackgroundColor(): NSColor;

	static selectedTextColor(): NSColor;

	static separatorColor(): NSColor;

	static shadowColor(): NSColor;

	static systemBlueColor(): NSColor;

	static systemBrownColor(): NSColor;

	static systemGrayColor(): NSColor;

	static systemGreenColor(): NSColor;

	static systemIndigoColor(): NSColor;

	static systemOrangeColor(): NSColor;

	static systemPinkColor(): NSColor;

	static systemPurpleColor(): NSColor;

	static systemRedColor(): NSColor;

	static systemTealColor(): NSColor;

	static systemYellowColor(): NSColor;

	static tertiaryLabelColor(): NSColor;

	static textBackgroundColor(): NSColor;

	static textColor(): NSColor;

	static underPageBackgroundColor(): NSColor;

	static unemphasizedSelectedContentBackgroundColor(): NSColor;

	static unemphasizedSelectedTextBackgroundColor(): NSColor;

	static unemphasizedSelectedTextColor(): NSColor;

	static whiteColor(): NSColor;

	static windowBackgroundColor(): NSColor;

	static windowFrameTextColor(): NSColor;

	static yellowColor(): NSColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(pasteboardPropertyList: any, ofType: string); // inherited from NSPasteboardReading

	blendedColorWithFractionOfColor(withFraction: number, of: NSColor): NSColor;

	colorUsingColorSpace(_: NSColorSpace): NSColor;

	colorUsingType(_: NSColorType): NSColor;

	colorWithAlphaComponent(_: number): NSColor;

	colorWithSystemEffect(_: NSColorSystemEffect): NSColor;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	drawSwatchInRect(in_: CGRect): void;

	encodeWithCoder(_: NSCoder): void;

	getComponents(_: number): void;

	getCyanMagentaYellowBlackAlpha(_?: number, magenta?: number, yellow?: number, black?: number, alpha?: number): void;

	getHueSaturationBrightnessAlpha(_?: number, saturation?: number, brightness?: number, alpha?: number): void;

	getRedGreenBlueAlpha(_?: number, green?: number, blue?: number, alpha?: number): void;

	getWhiteAlpha(_?: number, alpha?: number): void;

	highlightWithLevel(withLevel: number): NSColor;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	pasteboardPropertyListForType(forType: string): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	set(): void;

	setFill(): void;

	setStroke(): void;

	shadowWithLevel(withLevel: number): NSColor;

	writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	writeToPasteboard(to: NSPasteboard): void;

	writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
}

interface NSColorChanging extends NSObjectProtocol {

	changeColor(_?: NSColorPanel): void;
}
declare var NSColorChanging: {

	prototype: NSColorChanging;
};

declare class NSColorList extends NSObject implements NSSecureCoding {

	static colorListNamed(named: string): NSColorList;

	readonly allKeys: NSArray<string>;

	readonly isEditable: boolean;

	readonly name: string;

	static availableColorLists(): NSArray<NSColorList>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(name: string);

	static create(name: string, fromFile: string);

	colorWithKey(withKey: string): NSColor;

	encodeWithCoder(_: NSCoder): void;

	insertColorKeyAtIndex(_: NSColor, key: string, at: number): void;

	removeColorWithKey(withKey: string): void;

	removeFile(): void;

	setColorForKey(_: NSColor, forKey: string): void;

	writeToURLError(error?: NSURL): boolean;
}

declare var NSColorListDidChangeNotification: string;

declare var NSColorListIOException: string;

declare var NSColorListNotEditableException: string;

declare class NSColorPanel extends NSPanel {

	static dragColorWithEventFromView(_: NSColor, with_: NSEvent, from: NSView): boolean;

	static setPickerMask(_: NSColorPanelOptions): void;

	static setPickerMode(_: NSColorPanelMode): void;

	static windowWithContentViewController(contentViewController: NSViewController): NSColorPanel; // inherited from NSWindow

	setAccessoryView(_: NSView)

	accessoryView: NSView;

	readonly alpha: number;

	setColor(_: NSColor)

	color: NSColor;

	setContinuous(_: boolean)

	isContinuous: boolean;

	setMode(_: NSColorPanelMode)

	mode: NSColorPanelMode;

	setShowsAlpha(_: boolean)

	showsAlpha: boolean;

	static sharedColorPanel(): NSColorPanel;

	static sharedColorPanelExists(): boolean;

	attachColorList(_: NSColorList): void;

	detachColorList(_: NSColorList): void;

	setAction(_?: string): void;

	setTarget(_?: any): void;
}

declare var NSColorPanelColorDidChangeNotification: string;

enum NSColorPanelMode {

	None = -1,

	Gray = 0,

	RGB = 1,

	CMYK = 2,

	HSB = 3,

	CustomPalette = 4,

	ColorList = 5,

	Wheel = 6,

	Crayon = 7
}

globalThis.NSColorPanelMode = NSColorPanelMode;

enum NSColorPanelOptions {

	GrayModeMask = 1,

	RGBModeMask = 2,

	CMYKModeMask = 4,

	HSBModeMask = 8,

	CustomPaletteModeMask = 16,

	ColorListModeMask = 32,

	WheelModeMask = 64,

	CrayonModeMask = 128,

	AllModesMask = 65535
}

globalThis.NSColorPanelOptions = NSColorPanelOptions;

declare class NSColorPicker extends NSObject implements NSColorPickingDefault {

	readonly buttonToolTip: string;

	readonly colorPanel: NSColorPanel;

	readonly minContentSize: CGSize;

	readonly provideNewButtonImage: NSImage;

	static create(pickerMask: number, colorPanel: NSColorPanel); // inherited from NSColorPickingDefault

	alphaControlAddedOrRemoved(_?: any): void;

	attachColorList(_: NSColorList): void;

	detachColorList(_: NSColorList): void;

	insertNewButtonImageIn(_: NSImage, in_: NSButtonCell): void;

	setMode(_: NSColorPanelMode): void;

	viewSizeChanged(_?: any): void;
}

declare class NSColorPickerTouchBarItem extends NSTouchBarItem {

	static colorPickerWithIdentifier(withIdentifier: string): NSColorPickerTouchBarItem;

	static colorPickerWithIdentifierButtonImage(withIdentifier: string, buttonImage: NSImage): NSColorPickerTouchBarItem;

	static strokeColorPickerWithIdentifier(withIdentifier: string): NSColorPickerTouchBarItem;

	static textColorPickerWithIdentifier(withIdentifier: string): NSColorPickerTouchBarItem;

	setAction(_: string)

	action: string;

	setAllowedColorSpaces(_: NSArray<NSColorSpace>)

	allowedColorSpaces: NSArray<NSColorSpace>;

	setColor(_: NSColor)

	color: NSColor;

	setColorList(_: NSColorList)

	colorList: NSColorList;

	setCustomizationLabel(_: string)

	customizationLabel: string;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setShowsAlpha(_: boolean)

	showsAlpha: boolean;

	setTarget(_: any)

	target: any;
}

interface NSColorPickingCustom extends NSColorPickingDefault {

	currentMode(): NSColorPanelMode;

	provideNewView(_: boolean): NSView;

	setColor(_: NSColor): void;

	supportsMode(_: NSColorPanelMode): boolean;
}
declare var NSColorPickingCustom: {

	prototype: NSColorPickingCustom;
};

interface NSColorPickingDefault {

	provideNewButtonImage: NSImage;

	buttonToolTip: string;

	minContentSize: CGSize;

	alphaControlAddedOrRemoved(_?: any): void;

	attachColorList(_: NSColorList): void;

	detachColorList(_: NSColorList): void;

	initWithPickerMaskColorPanel?(pickerMask: number, colorPanel: NSColorPanel): NSColorPickingDefault;

	insertNewButtonImageIn(_: NSImage, in_: NSButtonCell): void;

	setMode(_: NSColorPanelMode): void;

	viewSizeChanged(_?: any): void;
}
declare var NSColorPickingDefault: {

	prototype: NSColorPickingDefault;
};

enum NSColorRenderingIntent {

	Default = 0,

	AbsoluteColorimetric = 1,

	RelativeColorimetric = 2,

	Perceptual = 3,

	Saturation = 4
}

globalThis.NSColorRenderingIntent = NSColorRenderingIntent;

declare class NSColorSampler extends NSObject {

	showSamplerWithSelectionHandler(selectionHandler?: (p1: NSColor) => void): void;
}

declare class NSColorSpace extends NSObject implements NSSecureCoding {

	static availableColorSpacesWithModel(with_: NSColorSpaceModel): NSArray<NSColorSpace>;

	readonly CGColorSpace: any;

	readonly ICCProfileData: NSData;

	readonly colorSpaceModel: NSColorSpaceModel;

	readonly colorSyncProfile: any;

	readonly localizedName: string;

	readonly numberOfColorComponents: number;

	static adobeRGB1998ColorSpace(): NSColorSpace;

	static deviceCMYKColorSpace(): NSColorSpace;

	static deviceGrayColorSpace(): NSColorSpace;

	static deviceRGBColorSpace(): NSColorSpace;

	static displayP3ColorSpace(): NSColorSpace;

	static extendedGenericGamma22GrayColorSpace(): NSColorSpace;

	static extendedSRGBColorSpace(): NSColorSpace;

	static genericCMYKColorSpace(): NSColorSpace;

	static genericGamma22GrayColorSpace(): NSColorSpace;

	static genericGrayColorSpace(): NSColorSpace;

	static genericRGBColorSpace(): NSColorSpace;

	static sRGBColorSpace(): NSColorSpace;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(CGColorSpace: any);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(colorSyncProfile: any);

	static create(ICCProfileData: NSData);

	encodeWithCoder(_: NSCoder): void;
}

declare function NSColorSpaceFromDepth(depth: NSWindowDepth): string;

enum NSColorSpaceModel {

	Unknown = -1,

	Gray = 0,

	RGB = 1,

	CMYK = 2,

	LAB = 3,

	DeviceN = 4,

	Indexed = 5,

	Patterned = 6
}

globalThis.NSColorSpaceModel = NSColorSpaceModel;

enum NSColorSystemEffect {

	None = 0,

	Pressed = 1,

	DeepPressed = 2,

	Disabled = 3,

	Rollover = 4
}

globalThis.NSColorSystemEffect = NSColorSystemEffect;

enum NSColorType {

	ComponentBased = 0,

	Pattern = 1,

	Catalog = 2
}

globalThis.NSColorType = NSColorType;

declare class NSColorWell extends NSControl {

	readonly isActive: boolean;

	setBordered(_: boolean)

	isBordered: boolean;

	setColor(_: NSColor)

	color: NSColor;

	activate(_: boolean): void;

	deactivate(): void;

	drawWellInside(inside: CGRect): void;

	takeColorFrom(_?: any): void;
}

declare class NSComboBox extends NSTextField {

	static labelWithAttributedString(labelWithAttributedString: NSAttributedString): NSComboBox; // inherited from NSTextField

	static labelWithString(labelWithString: string): NSComboBox; // inherited from NSTextField

	static textFieldWithString(string: string): NSComboBox; // inherited from NSTextField

	static wrappingLabelWithString(wrappingLabelWithString: string): NSComboBox; // inherited from NSTextField

	setButtonBordered(_: boolean)

	isButtonBordered: boolean;

	setCompletes(_: boolean)

	completes: boolean;

	setDataSource(_: NSComboBoxDataSource)

	dataSource: NSComboBoxDataSource;

	setDelegate(_: NSComboBoxDelegate)

	delegate: NSComboBoxDelegate;

	setHasVerticalScroller(_: boolean)

	hasVerticalScroller: boolean;

	readonly indexOfSelectedItem: number;

	setIntercellSpacing(_: CGSize)

	intercellSpacing: CGSize;

	setItemHeight(_: number)

	itemHeight: number;

	readonly numberOfItems: number;

	setNumberOfVisibleItems(_: number)

	numberOfVisibleItems: number;

	readonly objectValueOfSelectedItem: any;

	readonly objectValues: NSArray<any>;

	setUsesDataSource(_: boolean)

	usesDataSource: boolean;

	addItemWithObjectValue(withObjectValue: any): void;

	addItemsWithObjectValues(withObjectValues: NSArray<any>): void;

	deselectItemAtIndex(at: number): void;

	indexOfItemWithObjectValue(withObjectValue: any): number;

	insertItemWithObjectValueAtIndex(withObjectValue: any, at: number): void;

	itemObjectValueAtIndex(at: number): any;

	noteNumberOfItemsChanged(): void;

	reloadData(): void;

	removeAllItems(): void;

	removeItemAtIndex(at: number): void;

	removeItemWithObjectValue(withObjectValue: any): void;

	scrollItemAtIndexToTop(_: number): void;

	scrollItemAtIndexToVisible(_: number): void;

	selectItemAtIndex(at: number): void;

	selectItemWithObjectValue(withObjectValue?: any): void;
}

declare class NSComboBoxCell extends NSTextFieldCell {

	setButtonBordered(_: boolean)

	isButtonBordered: boolean;

	setCompletes(_: boolean)

	completes: boolean;

	setDataSource(_: NSComboBoxCellDataSource)

	dataSource: NSComboBoxCellDataSource;

	setHasVerticalScroller(_: boolean)

	hasVerticalScroller: boolean;

	readonly indexOfSelectedItem: number;

	setIntercellSpacing(_: CGSize)

	intercellSpacing: CGSize;

	setItemHeight(_: number)

	itemHeight: number;

	readonly numberOfItems: number;

	setNumberOfVisibleItems(_: number)

	numberOfVisibleItems: number;

	readonly objectValueOfSelectedItem: any;

	readonly objectValues: NSArray<any>;

	setUsesDataSource(_: boolean)

	usesDataSource: boolean;

	addItemWithObjectValue(withObjectValue: any): void;

	addItemsWithObjectValues(withObjectValues: NSArray<any>): void;

	completedString(_: string): string;

	deselectItemAtIndex(at: number): void;

	indexOfItemWithObjectValue(withObjectValue: any): number;

	insertItemWithObjectValueAtIndex(withObjectValue: any, at: number): void;

	itemObjectValueAtIndex(at: number): any;

	noteNumberOfItemsChanged(): void;

	reloadData(): void;

	removeAllItems(): void;

	removeItemAtIndex(at: number): void;

	removeItemWithObjectValue(withObjectValue: any): void;

	scrollItemAtIndexToTop(_: number): void;

	scrollItemAtIndexToVisible(_: number): void;

	selectItemAtIndex(at: number): void;

	selectItemWithObjectValue(withObjectValue?: any): void;
}

interface NSComboBoxCellDataSource extends NSObjectProtocol {

	comboBoxCellObjectValueForItemAtIndex?(_: NSComboBoxCell, objectValueForItemAt: number): any;

	comboBoxCellCompletedString?(_: NSComboBoxCell, completedString: string): string;

	comboBoxCellIndexOfItemWithStringValue?(_: NSComboBoxCell, indexOfItemWithStringValue: string): number;

	numberOfItemsInComboBoxCell?(in_: NSComboBoxCell): number;
}
declare var NSComboBoxCellDataSource: {

	prototype: NSComboBoxCellDataSource;
};

interface NSComboBoxDataSource extends NSObjectProtocol {

	comboBoxObjectValueForItemAtIndex?(_: NSComboBox, objectValueForItemAt: number): any;

	comboBoxCompletedString?(_: NSComboBox, completedString: string): string;

	comboBoxIndexOfItemWithStringValue?(_: NSComboBox, indexOfItemWithStringValue: string): number;

	numberOfItemsInComboBox?(in_: NSComboBox): number;
}
declare var NSComboBoxDataSource: {

	prototype: NSComboBoxDataSource;
};

interface NSComboBoxDelegate extends NSTextFieldDelegate {

	comboBoxSelectionDidChange?(_: NSNotification): void;

	comboBoxSelectionIsChanging?(_: NSNotification): void;

	comboBoxWillDismiss?(_: NSNotification): void;

	comboBoxWillPopUp?(_: NSNotification): void;
}
declare var NSComboBoxDelegate: {

	prototype: NSComboBoxDelegate;
};

declare var NSComboBoxSelectionDidChangeNotification: string;

declare var NSComboBoxSelectionIsChangingNotification: string;

declare var NSComboBoxWillDismissNotification: string;

declare var NSComboBoxWillPopUpNotification: string;

declare var NSCommentDocumentAttribute: string;

declare var NSCompanyDocumentAttribute: string;

enum NSCompositingOperation {

	Clear = 0,

	Copy = 1,

	SourceOver = 2,

	SourceIn = 3,

	SourceOut = 4,

	SourceAtop = 5,

	DestinationOver = 6,

	DestinationIn = 7,

	DestinationOut = 8,

	DestinationAtop = 9,

	XOR = 10,

	PlusDarker = 11,

	Highlight = 12,

	PlusLighter = 13,

	Multiply = 14,

	Screen = 15,

	Overlay = 16,

	Darken = 17,

	Lighten = 18,

	ColorDodge = 19,

	ColorBurn = 20,

	SoftLight = 21,

	HardLight = 22,

	Difference = 23,

	Exclusion = 24,

	Hue = 25,

	Saturation = 26,

	Color = 27,

	Luminosity = 28
}

globalThis.NSCompositingOperation = NSCompositingOperation;

declare var NSConditionallySetsEditableBindingOption: string;

declare var NSConditionallySetsEnabledBindingOption: string;

declare var NSConditionallySetsHiddenBindingOption: string;

declare var NSContentArrayBinding: string;

declare var NSContentArrayForMultipleSelectionBinding: string;

declare var NSContentBinding: string;

declare var NSContentDictionaryBinding: string;

declare var NSContentHeightBinding: string;

declare var NSContentObjectBinding: string;

declare var NSContentObjectsBinding: string;

declare var NSContentPlacementTagBindingOption: string;

declare var NSContentSetBinding: string;

declare var NSContentValuesBinding: string;

declare var NSContentWidthBinding: string;

declare var NSContextHelpModeDidActivateNotification: string;

declare var NSContextHelpModeDidDeactivateNotification: string;

declare var NSContinuouslyUpdatesValueBindingOption: string;

declare class NSControl extends NSView {

	setAction(_: string)

	action: string;

	setAlignment(_: NSTextAlignment)

	alignment: NSTextAlignment;

	setAllowsExpansionToolTips(_: boolean)

	allowsExpansionToolTips: boolean;

	setAttributedStringValue(_: NSAttributedString)

	attributedStringValue: NSAttributedString;

	setBaseWritingDirection(_: NSWritingDirection)

	baseWritingDirection: NSWritingDirection;

	setCell(_: NSCell)

	cell: NSCell;

	setContinuous(_: boolean)

	isContinuous: boolean;

	setControlSize(_: NSControlSize)

	controlSize: NSControlSize;

	setDoubleValue(_: number)

	doubleValue: number;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setFloatValue(_: number)

	floatValue: number;

	setFont(_: NSFont)

	font: NSFont;

	setFormatter(_: NSFormatter)

	formatter: NSFormatter;

	setHighlighted(_: boolean)

	isHighlighted: boolean;

	setIgnoresMultiClick(_: boolean)

	ignoresMultiClick: boolean;

	setIntValue(_: number)

	intValue: number;

	setIntegerValue(_: number)

	integerValue: number;

	setLineBreakMode(_: NSLineBreakMode)

	lineBreakMode: NSLineBreakMode;

	setObjectValue(_: any)

	objectValue: any;

	setRefusesFirstResponder(_: boolean)

	refusesFirstResponder: boolean;

	setStringValue(_: string)

	stringValue: string;

	setTag(_: number)

	tag: number;

	setTarget(_: any)

	target: any;

	setUsesSingleLineMode(_: boolean)

	usesSingleLineMode: boolean;

	static setCellClass(_: typeof NSObject)

	cellClass: typeof NSObject;

	abortEditing(): boolean;

	currentEditor(): NSText;

	drawCell(_: NSCell): void;

	drawCellInside(_: NSCell): void;

	drawWithExpansionFrameInView(withExpansionFrame: CGRect, in_: NSView): void;

	editWithFrameEditorDelegateEvent(withFrame: CGRect, editor: NSText, delegate?: any, event: NSEvent): void;

	endEditing(_: NSText): void;

	expansionFrameWithFrame(withFrame: CGRect): CGRect;

	invalidateIntrinsicContentSizeForCell(for_: NSCell): void;

	performClick(_?: any): void;

	selectCell(_: NSCell): void;

	selectWithFrameEditorDelegateStartLength(withFrame: CGRect, editor: NSText, delegate?: any, start: number, length: number): void;

	selectedCell(): NSCell;

	selectedTag(): number;

	sendActionTo(_?: string, to?: any): boolean;

	sendActionOn(on: NSEventMask): number;

	sizeThatFits(_: CGSize): CGSize;

	sizeToFit(): void;

	takeDoubleValueFrom(_?: any): void;

	takeFloatValueFrom(_?: any): void;

	takeIntValueFrom(_?: any): void;

	takeIntegerValueFrom(_?: any): void;

	takeObjectValueFrom(_?: any): void;

	takeStringValueFrom(_?: any): void;

	updateCell(_: NSCell): void;

	updateCellInside(_: NSCell): void;

	validateEditing(): void;
}

enum NSControlCharacterAction {

	ZeroAdvancement = 1,

	Whitespace = 2,

	HorizontalTab = 4,

	LineBreak = 8,

	ParagraphBreak = 16,

	ContainerBreak = 32
}

globalThis.NSControlCharacterAction = NSControlCharacterAction;

declare const NSControlGlyph: number;

enum NSControlSize {

	Regular = 0,

	Small = 1,

	Mini = 2
}

globalThis.NSControlSize = NSControlSize;

declare var NSControlStateValueMixed: number;

declare var NSControlStateValueOff: number;

declare var NSControlStateValueOn: number;

declare var NSControlTextDidBeginEditingNotification: string;

declare var NSControlTextDidChangeNotification: string;

declare var NSControlTextDidEndEditingNotification: string;

interface NSControlTextEditingDelegate extends NSObjectProtocol {

	controlTextViewDoCommandBySelector?(_: NSControl, textView: NSTextView, doCommandBy: string): boolean;

	controlDidFailToFormatStringErrorDescription?(_: NSControl, didFailToFormatString: string, errorDescription?: string): boolean;

	controlDidFailToValidatePartialStringErrorDescription?(_: NSControl, didFailToValidatePartialString: string, errorDescription?: string): void;

	controlIsValidObject?(_: NSControl, isValidObject?: any): boolean;

	controlTextShouldBeginEditing?(_: NSControl, textShouldBeginEditing: NSText): boolean;

	controlTextShouldEndEditing?(_: NSControl, textShouldEndEditing: NSText): boolean;

	controlTextViewCompletionsForPartialWordRangeIndexOfSelectedItem?(_: NSControl, textView: NSTextView, completions: NSArray<string>, forPartialWordRange: NSRange, indexOfSelectedItem: number): NSArray<string>;

	controlTextDidBeginEditing?(_: NSNotification): void;

	controlTextDidChange?(_: NSNotification): void;

	controlTextDidEndEditing?(_: NSNotification): void;
}
declare var NSControlTextEditingDelegate: {

	prototype: NSControlTextEditingDelegate;
};

enum NSControlTint {

	DefaultControlTint = 0,

	BlueControlTint = 1,

	GraphiteControlTint = 6,

	ClearControlTint = 7
}

globalThis.NSControlTint = NSControlTint;

declare var NSControlTintDidChangeNotification: string;

declare class NSController extends NSObject implements NSCoding, NSEditor, NSEditorRegistration {

	readonly isEditing: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(coder: NSCoder); // inherited from NSCoding

	commitEditing(): boolean;

	commitEditingAndReturnError(): boolean;

	commitEditingWithDelegateDidCommitSelectorContextInfo(withDelegate?: any, didCommit?: string, contextInfo?: any): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	discardEditing(): void;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	objectDidBeginEditing(_: NSEditor): void;

	objectDidEndEditing(_: NSEditor): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var NSConvertedDocumentAttribute: string;

declare var NSCopyrightDocumentAttribute: string;

enum NSCorrectionIndicatorType {

	Default = 0,

	Reversion = 1,

	Guesses = 2
}

globalThis.NSCorrectionIndicatorType = NSCorrectionIndicatorType;

enum NSCorrectionResponse {

	None = 0,

	Accepted = 1,

	Rejected = 2,

	Ignored = 3,

	Edited = 4,

	Reverted = 5
}

globalThis.NSCorrectionResponse = NSCorrectionResponse;

declare function NSCreateFileContentsPboardType(fileType: string): string;

declare function NSCreateFilenamePboardType(fileType: string): string;

declare var NSCreatesSortDescriptorBindingOption: string;

declare var NSCreationTimeDocumentAttribute: string;

declare var NSCriticalValueBinding: string;

declare class NSCursor extends NSObject implements NSCoding {

	static hide(): void;

	static pop(): void;

	static setHiddenUntilMouseMoves(_: boolean): void;

	static unhide(): void;

	readonly hotSpot: CGPoint;

	readonly image: NSImage;

	static IBeamCursor(): NSCursor;

	static IBeamCursorForVerticalLayout(): NSCursor;

	static arrowCursor(): NSCursor;

	static closedHandCursor(): NSCursor;

	static contextualMenuCursor(): NSCursor;

	static crosshairCursor(): NSCursor;

	static currentCursor(): NSCursor;

	static currentSystemCursor(): NSCursor;

	static disappearingItemCursor(): NSCursor;

	static dragCopyCursor(): NSCursor;

	static dragLinkCursor(): NSCursor;

	static openHandCursor(): NSCursor;

	static operationNotAllowedCursor(): NSCursor;

	static pointingHandCursor(): NSCursor;

	static resizeDownCursor(): NSCursor;

	static resizeLeftCursor(): NSCursor;

	static resizeLeftRightCursor(): NSCursor;

	static resizeRightCursor(): NSCursor;

	static resizeUpCursor(): NSCursor;

	static resizeUpDownCursor(): NSCursor;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(image: NSImage, hotSpot: CGPoint);

	encodeWithCoder(_: NSCoder): void;

	pop(): void;

	push(): void;

	set(): void;
}

declare var NSCursorAttributeName: string;

declare var NSCurveToBezierPathElement: NSBezierPathElement;

declare var NSCustomColorSpace: string;

declare class NSCustomImageRep extends NSImageRep {

	readonly delegate: any;

	readonly drawSelector: string;

	readonly drawingHandler: (p1: CGRect) => boolean;

	static create(drawSelector: string, delegate: any);

	static create(size: CGSize, flipped: boolean, drawingHandler: (p1: CGRect) => boolean);
}

declare class NSCustomTouchBarItem extends NSTouchBarItem {

	setCustomizationLabel(_: string)

	customizationLabel: string;

	setView(_: NSView)

	view: NSView;

	setViewController(_: NSViewController)

	viewController: NSViewController;
}

declare var NSDarkGray: number;

declare class NSDataAsset extends NSObject implements NSCopying {

	readonly data: NSData;

	readonly name: string;

	readonly typeIdentifier: string;

	static create(name: string);

	static create(name: string, bundle: NSBundle);

	copyWithZone(_?: any): any;
}

declare var NSDataBinding: string;

declare class NSDatePicker extends NSControl {

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setBezeled(_: boolean)

	isBezeled: boolean;

	setBordered(_: boolean)

	isBordered: boolean;

	setCalendar(_: NSCalendar)

	calendar: NSCalendar;

	setDatePickerElements(_: NSDatePickerElementFlags)

	datePickerElements: NSDatePickerElementFlags;

	setDatePickerMode(_: NSDatePickerMode)

	datePickerMode: NSDatePickerMode;

	setDatePickerStyle(_: NSDatePickerStyle)

	datePickerStyle: NSDatePickerStyle;

	setDateValue(_: Date)

	dateValue: Date;

	setDelegate(_: NSDatePickerCellDelegate)

	delegate: NSDatePickerCellDelegate;

	setDrawsBackground(_: boolean)

	drawsBackground: boolean;

	setLocale(_: NSLocale)

	locale: NSLocale;

	setMaxDate(_: Date)

	maxDate: Date;

	setMinDate(_: Date)

	minDate: Date;

	setPresentsCalendarOverlay(_: boolean)

	presentsCalendarOverlay: boolean;

	setTextColor(_: NSColor)

	textColor: NSColor;

	setTimeInterval(_: number)

	timeInterval: number;

	setTimeZone(_: NSTimeZone)

	timeZone: NSTimeZone;
}

declare class NSDatePickerCell extends NSActionCell {

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setCalendar(_: NSCalendar)

	calendar: NSCalendar;

	setDatePickerElements(_: NSDatePickerElementFlags)

	datePickerElements: NSDatePickerElementFlags;

	setDatePickerMode(_: NSDatePickerMode)

	datePickerMode: NSDatePickerMode;

	setDatePickerStyle(_: NSDatePickerStyle)

	datePickerStyle: NSDatePickerStyle;

	setDateValue(_: Date)

	dateValue: Date;

	setDelegate(_: NSDatePickerCellDelegate)

	delegate: NSDatePickerCellDelegate;

	setDrawsBackground(_: boolean)

	drawsBackground: boolean;

	setLocale(_: NSLocale)

	locale: NSLocale;

	setMaxDate(_: Date)

	maxDate: Date;

	setMinDate(_: Date)

	minDate: Date;

	setTextColor(_: NSColor)

	textColor: NSColor;

	setTimeInterval(_: number)

	timeInterval: number;

	setTimeZone(_: NSTimeZone)

	timeZone: NSTimeZone;
}

interface NSDatePickerCellDelegate extends NSObjectProtocol {

	datePickerCellValidateProposedDateValueTimeInterval?(_: NSDatePickerCell, validateProposedDateValue: Date, timeInterval?: number): void;
}
declare var NSDatePickerCellDelegate: {

	prototype: NSDatePickerCellDelegate;
};

enum NSDatePickerElementFlags {

	HourMinute = 12,

	HourMinuteSecond = 14,

	TimeZone = 16,

	YearMonth = 192,

	YearMonthDay = 224,

	Era = 256
}

globalThis.NSDatePickerElementFlags = NSDatePickerElementFlags;

enum NSDatePickerMode {

	Single = 0,

	Range = 1
}

globalThis.NSDatePickerMode = NSDatePickerMode;

enum NSDatePickerStyle {

	TextFieldAndStepper = 0,

	ClockAndCalendar = 1,

	TextField = 2
}

globalThis.NSDatePickerStyle = NSDatePickerStyle;

declare var NSDefaultAttributesDocumentAttribute: string;

declare var NSDefaultAttributesDocumentOption: string;

declare var NSDefaultTabIntervalDocumentAttribute: string;

declare var NSDefinitionPresentationTypeDictionaryApplication: string;

declare var NSDefinitionPresentationTypeKey: string;

declare var NSDefinitionPresentationTypeOverlay: string;

declare const NSDeleteCharFunctionKey: number;

declare const NSDeleteCharacter: number;

declare const NSDeleteFunctionKey: number;

declare const NSDeleteLineFunctionKey: number;

declare var NSDeletesObjectsOnRemoveBindingsOption: string;

declare var NSDeviceBitsPerSample: string;

declare var NSDeviceCMYKColorSpace: string;

declare var NSDeviceColorSpaceName: string;

declare var NSDeviceIsPrinter: string;

declare var NSDeviceIsScreen: string;

declare var NSDeviceRGBColorSpace: string;

declare var NSDeviceResolution: string;

declare var NSDeviceSize: string;

declare var NSDeviceWhiteColorSpace: string;

declare class NSDictionaryController extends NSArrayController {

	setExcludedKeys(_: NSArray<string>)

	excludedKeys: NSArray<string>;

	setIncludedKeys(_: NSArray<string>)

	includedKeys: NSArray<string>;

	setInitialKey(_: string)

	initialKey: string;

	setInitialValue(_: any)

	initialValue: any;

	setLocalizedKeyDictionary(_: NSDictionary<string, string>)

	localizedKeyDictionary: NSDictionary<string, string>;

	setLocalizedKeyTable(_: string)

	localizedKeyTable: string;

	newObject(): NSDictionaryControllerKeyValuePair;
}

declare class NSDictionaryControllerKeyValuePair extends NSObject {

	readonly isExplicitlyIncluded: boolean;

	setKey(_: string)

	key: string;

	setLocalizedKey(_: string)

	localizedKey: string;

	setValue(_: any)

	value: any;
}

declare class NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType> extends NSObject implements NSCopying {

	readonly itemIdentifiers: NSArray<ItemIdentifierType>;

	readonly numberOfItems: number;

	readonly numberOfSections: number;

	readonly sectionIdentifiers: NSArray<SectionIdentifierType>;

	appendItemsWithIdentifiers(_: NSArray<ItemIdentifierType>): void;

	appendItemsWithIdentifiersIntoSectionWithIdentifier(_: NSArray<ItemIdentifierType>, intoSectionWithIdentifier: SectionIdentifierType): void;

	appendSectionsWithIdentifiers(_: NSArray<any>): void;

	copyWithZone(_?: any): any;

	deleteAllItems(): void;

	deleteItemsWithIdentifiers(_: NSArray<ItemIdentifierType>): void;

	deleteSectionsWithIdentifiers(_: NSArray<SectionIdentifierType>): void;

	indexOfItemIdentifier(_: ItemIdentifierType): number;

	indexOfSectionIdentifier(_: SectionIdentifierType): number;

	insertItemsWithIdentifiersAfterItemWithIdentifier(_: NSArray<ItemIdentifierType>, afterItemWithIdentifier: ItemIdentifierType): void;

	insertItemsWithIdentifiersBeforeItemWithIdentifier(_: NSArray<ItemIdentifierType>, beforeItemWithIdentifier: ItemIdentifierType): void;

	insertSectionsWithIdentifiersAfterSectionWithIdentifier(_: NSArray<SectionIdentifierType>, afterSectionWithIdentifier: SectionIdentifierType): void;

	insertSectionsWithIdentifiersBeforeSectionWithIdentifier(_: NSArray<SectionIdentifierType>, beforeSectionWithIdentifier: SectionIdentifierType): void;

	itemIdentifiersInSectionWithIdentifier(_: SectionIdentifierType): NSArray<ItemIdentifierType>;

	moveItemWithIdentifierAfterItemWithIdentifier(_: ItemIdentifierType, afterItemWithIdentifier: ItemIdentifierType): void;

	moveItemWithIdentifierBeforeItemWithIdentifier(_: ItemIdentifierType, beforeItemWithIdentifier: ItemIdentifierType): void;

	moveSectionWithIdentifierAfterSectionWithIdentifier(_: SectionIdentifierType, afterSectionWithIdentifier: SectionIdentifierType): void;

	moveSectionWithIdentifierBeforeSectionWithIdentifier(_: SectionIdentifierType, beforeSectionWithIdentifier: SectionIdentifierType): void;

	numberOfItemsInSection(_: SectionIdentifierType): number;

	reloadItemsWithIdentifiers(_: NSArray<ItemIdentifierType>): void;

	reloadSectionsWithIdentifiers(_: NSArray<SectionIdentifierType>): void;

	sectionIdentifierForSectionContainingItemIdentifier(_: ItemIdentifierType): SectionIdentifierType;
}

interface NSDirectionalEdgeInsets {
	top: number;
	leading: number;
	bottom: number;
	trailing: number;
}
declare var NSDirectionalEdgeInsets: NSDirectionalEdgeInsets;

declare var NSDirectionalEdgeInsetsZero: NSDirectionalEdgeInsets;

enum NSDirectionalRectEdge {

	None = 0,

	Top = 1,

	Leading = 2,

	Bottom = 4,

	Trailing = 8,

	All = 15
}

globalThis.NSDirectionalRectEdge = NSDirectionalRectEdge;

enum NSDisplayGamut {

	SRGB = 1,

	P3 = 2
}

globalThis.NSDisplayGamut = NSDisplayGamut;

declare var NSDisplayNameBindingOption: string;

declare var NSDisplayPatternBindingOption: string;

declare var NSDisplayPatternTitleBinding: string;

declare var NSDisplayPatternValueBinding: string;

declare const NSDisplayWindowRunLoopOrdering: number;

declare var NSDocFormatTextDocumentType: string;

declare class NSDockTile extends NSObject {

	setBadgeLabel(_: string)

	badgeLabel: string;

	setContentView(_: NSView)

	contentView: NSView;

	readonly owner: any;

	setShowsApplicationBadge(_: boolean)

	showsApplicationBadge: boolean;

	readonly size: CGSize;

	display(): void;
}

interface NSDockTilePlugIn extends NSObjectProtocol {

	dockMenu?(): NSMenu;

	setDockTile(_?: NSDockTile): void;
}
declare var NSDockTilePlugIn: {

	prototype: NSDockTilePlugIn;
};

declare class NSDocument extends NSObject implements NSEditorRegistration, NSFilePresenter, NSMenuItemValidation, NSUserInterfaceValidations, NSUserActivityRestoring {

	static canConcurrentlyReadDocumentsOfType(ofType: string): boolean;

	static isNativeType(_: string): boolean;

	readonly PDFPrintOperation: NSPrintOperation;

	readonly allowsDocumentSharing: boolean;

	setAutosavedContentsFileURL(_: NSURL)

	autosavedContentsFileURL: NSURL;

	readonly autosavingFileType: string;

	readonly autosavingIsImplicitlyCancellable: boolean;

	readonly backupFileURL: NSURL;

	readonly isBrowsingVersions: boolean;

	setDisplayName(_: string)

	displayName: string;

	readonly isDocumentEdited: boolean;

	setDraft(_: boolean)

	isDraft: boolean;

	readonly isEntireFileLoaded: boolean;

	setFileModificationDate(_: Date)

	fileModificationDate: Date;

	readonly fileNameExtensionWasHiddenInLastRunSavePanel: boolean;

	setFileType(_: string)

	fileType: string;

	readonly fileTypeFromLastRunSavePanel: string;

	setFileURL(_: NSURL)

	fileURL: NSURL;

	readonly hasUnautosavedChanges: boolean;

	setHasUndoManager(_: boolean)

	hasUndoManager: boolean;

	readonly isInViewingMode: boolean;

	readonly keepBackupFile: boolean;

	setLastComponentOfFileName(_: string)

	lastComponentOfFileName: string;

	readonly isLocked: boolean;

	setPrintInfo(_: NSPrintInfo)

	printInfo: NSPrintInfo;

	readonly shouldRunSavePanelWithAccessoryView: boolean;

	setUndoManager(_: NSUndoManager)

	undoManager: NSUndoManager;

	setUserActivity(_: NSUserActivity)

	userActivity: NSUserActivity;

	readonly windowControllers: NSArray<NSWindowController>;

	readonly windowForSheet: NSWindow;

	readonly windowNibName: string;

	static autosavesDrafts(): boolean;

	static autosavesInPlace(): boolean;

	static preservesVersions(): boolean;

	static readableTypes(): NSArray<string>;

	static restorableStateKeyPaths(): NSArray<string>;

	static usesUbiquitousStorage(): boolean;

	static writableTypes(): NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly observedPresentedItemUbiquityAttributes: NSSet<string>; // inherited from NSFilePresenter

	readonly presentedItemOperationQueue: NSOperationQueue; // inherited from NSFilePresenter

	readonly presentedItemURL: NSURL; // inherited from NSFilePresenter

	readonly primaryPresentedItemURL: NSURL; // inherited from NSFilePresenter

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(forURL: NSURL, withContentsOfURL: NSURL, ofType: string);

	static create(contentsOfURL: NSURL, ofType: string);

	static create(type: string);

	accommodatePresentedItemDeletionWithCompletionHandler(_?: (p1: NSError) => void): void;

	accommodatePresentedSubitemDeletionAtURLCompletionHandler(_: NSURL, completionHandler?: (p1: NSError) => void): void;

	addWindowController(_: NSWindowController): void;

	autosaveDocumentWithDelegateDidAutosaveSelectorContextInfo(withDelegate?: any, didAutosave?: string, contextInfo?: any): void;

	autosaveWithImplicitCancellabilityCompletionHandler(withImplicitCancellability: boolean, completionHandler?: (p1: NSError) => void): void;

	browseDocumentVersions(_?: any): void;

	canAsynchronouslyWriteToURLOfTypeForSaveOperation(to: NSURL, ofType: string, for_: NSSaveOperationType): boolean;

	canCloseDocumentWithDelegateShouldCloseSelectorContextInfo(withDelegate: any, shouldClose?: string, contextInfo?: any): void;

	changeCountTokenForSaveOperation(for_: NSSaveOperationType): any;

	checkAutosavingSafetyAndReturnError(): boolean;

	close(): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	continueActivityUsingBlock(_: () => void): void;

	continueAsynchronousWorkOnMainThreadUsingBlock(_: () => void): void;

	dataOfTypeError(error: string): NSData;

	defaultDraftName(): string;

	duplicateAndReturnError(): NSDocument;

	duplicateDocument(_?: any): void;

	duplicateDocumentWithDelegateDidDuplicateSelectorContextInfo(withDelegate?: any, didDuplicate?: string, contextInfo?: any): void;

	encodeRestorableStateWithCoder(with_: NSCoder): void;

	encodeRestorableStateWithCoderBackgroundQueue(with_: NSCoder, backgroundQueue: NSOperationQueue): void;

	fileAttributesToWriteToURLOfTypeForSaveOperationOriginalContentsURLError(ofType: NSURL, forSaveOperation: string, originalContentsURL: NSSaveOperationType, error?: NSURL): NSDictionary<string, any>;

	fileNameExtensionForTypeSaveOperation(forType: string, saveOperation: NSSaveOperationType): string;

	fileWrapperOfTypeError(error: string): NSFileWrapper;

	handleCloseScriptCommand(_: NSCloseCommand): any;

	handlePrintScriptCommand(_: NSScriptCommand): any;

	handleSaveScriptCommand(_: NSScriptCommand): any;

	invalidateRestorableState(): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	lockDocument(_?: any): void;

	lockDocumentWithCompletionHandler(completionHandler?: (p1: boolean) => void): void;

	lockWithCompletionHandler(completionHandler?: (p1: NSError) => void): void;

	makeWindowControllers(): void;

	moveDocument(_?: any): void;

	moveDocumentToUbiquityContainer(_?: any): void;

	moveDocumentWithCompletionHandler(completionHandler?: (p1: boolean) => void): void;

	moveToURLCompletionHandler(to: NSURL, completionHandler?: (p1: NSError) => void): void;

	objectDidBeginEditing(_: NSEditor): void;

	objectDidEndEditing(_: NSEditor): void;

	performActivityWithSynchronousWaitingUsingBlock(withSynchronousWaiting: boolean, using: (p1: () => void) => void): void;

	performAsynchronousFileAccessUsingBlock(_: (p1: () => void) => void): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	performSynchronousFileAccessUsingBlock(_: () => void): void;

	preparePageLayout(_: NSPageLayout): boolean;

	prepareSavePanel(_: NSSavePanel): boolean;

	prepareSharingServicePicker(_: NSSharingServicePicker): void;

	presentError(_: NSError): boolean;

	presentErrorModalForWindowDelegateDidPresentSelectorContextInfo(_: NSError, modalFor: NSWindow, delegate?: any, didPresent?: string, contextInfo?: any): void;

	presentedItemDidChange(): void;

	presentedItemDidChangeUbiquityAttributes(_: NSSet<string>): void;

	presentedItemDidGainVersion(_: NSFileVersion): void;

	presentedItemDidLoseVersion(_: NSFileVersion): void;

	presentedItemDidMoveToURL(_: NSURL): void;

	presentedItemDidResolveConflictVersion(_: NSFileVersion): void;

	presentedSubitemAtURLDidGainVersion(_: NSURL, didGainVersion: NSFileVersion): void;

	presentedSubitemAtURLDidLoseVersion(_: NSURL, didLoseVersion: NSFileVersion): void;

	presentedSubitemAtURLDidMoveToURL(_: NSURL, didMoveToURL: NSURL): void;

	presentedSubitemAtURLDidResolveConflictVersion(_: NSURL, didResolveConflictVersion: NSFileVersion): void;

	presentedSubitemDidAppearAtURL(_: NSURL): void;

	presentedSubitemDidChangeAtURL(_: NSURL): void;

	printDocument(_?: any): void;

	printDocumentWithSettingsShowPrintPanelDelegateDidPrintSelectorContextInfo(withSettings: NSDictionary<string, any>, showPrintPanel: boolean, delegate?: any, didPrint?: string, contextInfo?: any): void;

	printOperationWithSettingsError(error: NSDictionary<string, any>): NSPrintOperation;

	readFromDataOfTypeError(ofType: NSData, error: string): boolean;

	readFromFileWrapperOfTypeError(ofType: NSFileWrapper, error: string): boolean;

	readFromURLOfTypeError(ofType: NSURL, error: string): boolean;

	relinquishPresentedItemToReader(_?: (p1: () => void) => void): void;

	relinquishPresentedItemToWriter(_?: (p1: () => void) => void): void;

	removeWindowController(_: NSWindowController): void;

	renameDocument(_?: any): void;

	respondsToSelector(_: string): boolean;

	restoreDocumentWindowWithIdentifierStateCompletionHandler(withIdentifier: string, state: NSCoder, completionHandler?: (p1: NSWindow, p2: NSError) => void): void;

	restoreStateWithCoder(with_: NSCoder): void;

	restoreUserActivityState(_: NSUserActivity): void;

	retainCount(): number;

	revertDocumentToSaved(_?: any): void;

	revertToContentsOfURLOfTypeError(ofType: NSURL, error: string): boolean;

	runModalPageLayoutWithPrintInfoDelegateDidRunSelectorContextInfo(with_: NSPrintInfo, delegate?: any, didRun?: string, contextInfo?: any): void;

	runModalPrintOperationDelegateDidRunSelectorContextInfo(_: NSPrintOperation, delegate?: any, didRun?: string, contextInfo?: any): void;

	runModalSavePanelForSaveOperationDelegateDidSaveSelectorContextInfo(for_: NSSaveOperationType, delegate?: any, didSave?: string, contextInfo?: any): void;

	runPageLayout(_?: any): void;

	saveDocument(_?: any): void;

	saveDocumentAs(_?: any): void;

	saveDocumentTo(_?: any): void;

	saveDocumentToPDF(_?: any): void;

	saveDocumentWithDelegateDidSaveSelectorContextInfo(withDelegate?: any, didSave?: string, contextInfo?: any): void;

	savePresentedItemChangesWithCompletionHandler(_?: (p1: NSError) => void): void;

	saveToURLOfTypeForSaveOperationCompletionHandler(to: NSURL, ofType: string, for_: NSSaveOperationType, completionHandler?: (p1: NSError) => void): void;

	saveToURLOfTypeForSaveOperationDelegateDidSaveSelectorContextInfo(to: NSURL, ofType: string, for_: NSSaveOperationType, delegate?: any, didSave?: string, contextInfo?: any): void;

	scheduleAutosaving(): void;

	self(): this;

	setDisplayName(_?: string): void;

	setWindow(_?: NSWindow): void;

	shareDocumentWithSharingServiceCompletionHandler(with_: NSSharingService, completionHandler?: (p1: boolean) => void): void;

	shouldChangePrintInfo(_: NSPrintInfo): boolean;

	shouldCloseWindowControllerDelegateShouldCloseSelectorContextInfo(_: NSWindowController, delegate?: any, shouldClose?: string, contextInfo?: any): void;

	showWindows(): void;

	stopBrowsingVersionsWithCompletionHandler(completionHandler?: () => void): void;

	unblockUserInteraction(): void;

	unlockDocument(_?: any): void;

	unlockDocumentWithCompletionHandler(completionHandler?: (p1: boolean) => void): void;

	unlockWithCompletionHandler(completionHandler?: (p1: NSError) => void): void;

	updateChangeCount(_: NSDocumentChangeType): void;

	updateChangeCountWithTokenForSaveOperation(withToken: any, for_: NSSaveOperationType): void;

	updateUserActivityState(_: NSUserActivity): void;

	validateMenuItem(_: NSMenuItem): boolean;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;

	willNotPresentError(_: NSError): void;

	willPresentError(_: NSError): NSError;

	windowControllerDidLoadNib(_: NSWindowController): void;

	windowControllerWillLoadNib(_: NSWindowController): void;

	writableTypesForSaveOperation(for_: NSSaveOperationType): NSArray<string>;

	writeSafelyToURLOfTypeForSaveOperationError(ofType: NSURL, forSaveOperation: string, error: NSSaveOperationType): boolean;

	writeToURLOfTypeError(ofType: NSURL, error: string): boolean;

	writeToURLOfTypeForSaveOperationOriginalContentsURLError(ofType: NSURL, forSaveOperation: string, originalContentsURL: NSSaveOperationType, error?: NSURL): boolean;
}

enum NSDocumentChangeType {

	ChangeDone = 0,

	ChangeUndone = 1,

	ChangeRedone = 5,

	ChangeCleared = 2,

	ChangeReadOtherContents = 3,

	ChangeAutosaved = 4,

	ChangeDiscardable = 256
}

globalThis.NSDocumentChangeType = NSDocumentChangeType;

declare class NSDocumentController extends NSObject implements NSCoding, NSMenuItemValidation, NSUserInterfaceValidations, NSWindowRestoration {

	static restoreWindowWithIdentifierStateCompletionHandler(withIdentifier: string, state: NSCoder, completionHandler?: (p1: NSWindow, p2: NSError) => void): void;

	readonly allowsAutomaticShareMenu: boolean;

	setAutosavingDelay(_: number)

	autosavingDelay: number;

	readonly currentDirectory: string;

	readonly currentDocument: NSDocument;

	readonly defaultType: string;

	readonly documentClassNames: NSArray<string>;

	readonly documents: NSArray<NSDocument>;

	readonly hasEditedDocuments: boolean;

	readonly maximumRecentDocumentCount: number;

	readonly recentDocumentURLs: NSArray<NSURL>;

	static sharedDocumentController(): NSDocumentController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(coder: NSCoder); // inherited from NSCoding

	URLsFromRunningOpenPanel(): NSArray<NSURL>;

	addDocument(_: NSDocument): void;

	beginOpenPanelForTypesCompletionHandler(_: NSOpenPanel, forTypes?: NSArray<string>, completionHandler: (p1: number) => void): void;

	beginOpenPanelWithCompletionHandler(completionHandler?: (p1: NSArray<NSURL>) => void): void;

	clearRecentDocuments(_?: any): void;

	closeAllDocumentsWithDelegateDidCloseAllSelectorContextInfo(withDelegate?: any, didCloseAllSelector?: string, contextInfo?: any): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	displayNameForType(forType: string): string;

	documentClassForType(forType: string): typeof NSObject;

	documentForURL(for_: NSURL): NSDocument;

	documentForWindow(for_: NSWindow): NSDocument;

	duplicateDocumentWithContentsOfURLCopyingDisplayNameError(copying: NSURL, displayName: boolean, error?: string): NSDocument;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	makeDocumentForURLWithContentsOfURLOfTypeError(withContentsOfURL?: NSURL, ofType: NSURL, error: string): NSDocument;

	makeDocumentWithContentsOfURLOfTypeError(ofType: NSURL, error: string): NSDocument;

	makeUntitledDocumentOfTypeError(error: string): NSDocument;

	newDocument(_?: any): void;

	noteNewRecentDocument(_: NSDocument): void;

	noteNewRecentDocumentURL(_: NSURL): void;

	openDocument(_?: any): void;

	openDocumentWithContentsOfURLDisplayCompletionHandler(withContentsOf: NSURL, display: boolean, completionHandler?: (p1: NSDocument, p2: boolean, p3: NSError) => void): void;

	openUntitledDocumentAndDisplayError(error: boolean): NSDocument;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	presentError(_: NSError): boolean;

	presentErrorModalForWindowDelegateDidPresentSelectorContextInfo(_: NSError, modalFor: NSWindow, delegate?: any, didPresent?: string, contextInfo?: any): void;

	removeDocument(_: NSDocument): void;

	reopenDocumentForURLWithContentsOfURLDisplayCompletionHandler(for_?: NSURL, withContentsOf: NSURL, display: boolean, completionHandler?: (p1: NSDocument, p2: boolean, p3: NSError) => void): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	reviewUnsavedDocumentsWithAlertTitleCancellableDelegateDidReviewAllSelectorContextInfo(withAlertTitle?: string, cancellable: boolean, delegate?: any, didReviewAllSelector?: string, contextInfo?: any): void;

	runModalOpenPanelForTypes(_: NSOpenPanel, forTypes?: NSArray<string>): number;

	saveAllDocuments(_?: any): void;

	self(): this;

	standardShareMenuItem(): NSMenuItem;

	typeForContentsOfURLError(error: NSURL): string;

	validateMenuItem(_: NSMenuItem): boolean;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;

	willPresentError(_: NSError): NSError;
}

declare var NSDocumentEditedBinding: string;

declare var NSDocumentTypeDocumentAttribute: string;

declare var NSDocumentTypeDocumentOption: string;

declare function NSDottedFrameRect(rect: CGRect): void;

declare var NSDoubleClickArgumentBinding: string;

declare var NSDoubleClickTargetBinding: string;

declare const NSDownArrowFunctionKey: number;

declare const NSDownTextMovement: number;

enum NSDragOperation {

	None = 0,

	Copy = 1,

	Link = 2,

	Generic = 4,

	Private = 8,

	Move = 16,

	Delete = 32,

	Every = -1,

	All_Obsolete = 15,

	All = 15
}

globalThis.NSDragOperation = NSDragOperation;

enum NSDraggingContext {

	OutsideApplication = 0,

	WithinApplication = 1
}

globalThis.NSDraggingContext = NSDraggingContext;

interface NSDraggingDestination extends NSObjectProtocol {

	concludeDragOperation?(_?: NSDraggingInfo): void;

	draggingEnded?(_: NSDraggingInfo): void;

	draggingEntered?(_: NSDraggingInfo): NSDragOperation;

	draggingExited?(_?: NSDraggingInfo): void;

	draggingUpdated?(_: NSDraggingInfo): NSDragOperation;

	performDragOperation?(_: NSDraggingInfo): boolean;

	prepareForDragOperation?(_: NSDraggingInfo): boolean;

	updateDraggingItemsForDrag?(_?: NSDraggingInfo): void;

	wantsPeriodicDraggingUpdates?(): boolean;
}
declare var NSDraggingDestination: {

	prototype: NSDraggingDestination;
};

declare var NSDraggingException: string;

enum NSDraggingFormation {

	Default = 0,

	None = 1,

	Pile = 2,

	List = 3,

	Stack = 4
}

globalThis.NSDraggingFormation = NSDraggingFormation;

declare class NSDraggingImageComponent extends NSObject {

	static draggingImageComponentWithKey(key: string): NSDraggingImageComponent;

	setContents(_: any)

	contents: any;

	setFrame(_: CGRect)

	frame: CGRect;

	setKey(_: string)

	key: string;

	static create(key: string);
}

declare var NSDraggingImageComponentIconKey: string;

declare var NSDraggingImageComponentLabelKey: string;

interface NSDraggingInfo extends NSObjectProtocol {

	setAnimatesToDestination(_: boolean)

	animatesToDestination: boolean;

	draggedImage: NSImage;

	draggedImageLocation: CGPoint;

	draggingDestinationWindow: NSWindow;

	setDraggingFormation(_: NSDraggingFormation)

	draggingFormation: NSDraggingFormation;

	draggingLocation: CGPoint;

	draggingPasteboard: NSPasteboard;

	draggingSequenceNumber: number;

	draggingSource: any;

	draggingSourceOperationMask: NSDragOperation;

	setNumberOfValidItemsForDrop(_: number)

	numberOfValidItemsForDrop: number;

	springLoadingHighlight: NSSpringLoadingHighlight;

	enumerateDraggingItemsWithOptionsForViewClassesSearchOptionsUsingBlock(options: NSDraggingItemEnumerationOptions, for_?: NSView, classes: NSArray<typeof NSObject>, searchOptions: NSDictionary<string, any>, using: (p1: NSDraggingItem, p2: number, p3: boolean) => void): void;

	resetSpringLoading(): void;

	slideDraggedImageTo(to: CGPoint): void;
}
declare var NSDraggingInfo: {

	prototype: NSDraggingInfo;
};

declare class NSDraggingItem extends NSObject {

	setDraggingFrame(_: CGRect)

	draggingFrame: CGRect;

	readonly imageComponents: NSArray<NSDraggingImageComponent>;

	setImageComponentsProvider(_: () => NSArray<NSDraggingImageComponent>)

	imageComponentsProvider: () => NSArray<NSDraggingImageComponent>;

	readonly item: any;

	static create(pasteboardWriter: NSPasteboardWriting);

	setDraggingFrameContents(_: CGRect, contents?: any): void;
}

enum NSDraggingItemEnumerationOptions {

	Concurrent = 1,

	ClearNonenumeratedImages = 65536
}

globalThis.NSDraggingItemEnumerationOptions = NSDraggingItemEnumerationOptions;

declare class NSDraggingSession extends NSObject {

	setAnimatesToStartingPositionsOnCancelOrFail(_: boolean)

	animatesToStartingPositionsOnCancelOrFail: boolean;

	setDraggingFormation(_: NSDraggingFormation)

	draggingFormation: NSDraggingFormation;

	setDraggingLeaderIndex(_: number)

	draggingLeaderIndex: number;

	readonly draggingLocation: CGPoint;

	readonly draggingPasteboard: NSPasteboard;

	readonly draggingSequenceNumber: number;

	enumerateDraggingItemsWithOptionsForViewClassesSearchOptionsUsingBlock(options: NSDraggingItemEnumerationOptions, for_?: NSView, classes: NSArray<typeof NSObject>, searchOptions: NSDictionary<string, any>, using: (p1: NSDraggingItem, p2: number, p3: boolean) => void): void;
}

interface NSDraggingSource extends NSObjectProtocol {

	draggingSessionSourceOperationMaskForDraggingContext(_: NSDraggingSession, sourceOperationMaskFor: NSDraggingContext): NSDragOperation;

	draggingSessionWillBeginAtPoint?(_: NSDraggingSession, willBeginAt: CGPoint): void;

	draggingSessionMovedToPoint?(_: NSDraggingSession, movedTo: CGPoint): void;

	draggingSessionEndedAtPointOperation?(_: NSDraggingSession, endedAt: CGPoint, operation: NSDragOperation): void;

	ignoreModifierKeysForDraggingSession?(for_: NSDraggingSession): boolean;
}
declare var NSDraggingSource: {

	prototype: NSDraggingSource;
};

declare function NSDrawBitmap(rect: CGRect, width: number, height: number, bps: number, spp: number, bpp: number, bpr: number, isPlanar: boolean, hasAlpha: boolean, colorSpaceName: string, data: string): void;

declare function NSDrawButton(rect: CGRect, clipRect: CGRect): void;

declare function NSDrawColorTiledRects(boundsRect: CGRect, clipRect: CGRect, sides: NSRectEdge, colors: NSColor, count: number): CGRect;

declare function NSDrawDarkBezel(rect: CGRect, clipRect: CGRect): void;

declare function NSDrawGrayBezel(rect: CGRect, clipRect: CGRect): void;

declare function NSDrawGroove(rect: CGRect, clipRect: CGRect): void;

declare function NSDrawLightBezel(rect: CGRect, clipRect: CGRect): void;

declare function NSDrawNinePartImage(frame: CGRect, topLeftCorner: NSImage, topEdgeFill: NSImage, topRightCorner: NSImage, leftEdgeFill: NSImage, centerFill: NSImage, rightEdgeFill: NSImage, bottomLeftCorner: NSImage, bottomEdgeFill: NSImage, bottomRightCorner: NSImage, op: NSCompositingOperation, alphaFraction: number, flipped: boolean): void;

declare function NSDrawThreePartImage(frame: CGRect, startCap: NSImage, centerFill: NSImage, endCap: NSImage, vertical: boolean, op: NSCompositingOperation, alphaFraction: number, flipped: boolean): void;

declare function NSDrawTiledRects(boundsRect: CGRect, clipRect: CGRect, sides: NSRectEdge, grays: number, count: number): CGRect;

declare function NSDrawWhiteBezel(rect: CGRect, clipRect: CGRect): void;

declare function NSDrawWindowBackground(rect: CGRect): void;

interface NSDrawerDelegate extends NSObjectProtocol {
}
declare var NSDrawerDelegate: {

	prototype: NSDrawerDelegate;
};

enum NSDrawerState {

	ClosedState = 0,

	OpeningState = 1,

	OpenState = 2,

	ClosingState = 3
}

globalThis.NSDrawerState = NSDrawerState;

declare class NSEPSImageRep extends NSImageRep {

	static imageRepWithData(data: NSData): NSEPSImageRep;

	readonly EPSRepresentation: NSData;

	readonly boundingBox: CGRect;

	static create(data: NSData);
}

declare var NSEditableBinding: string;

interface NSEditor extends NSObjectProtocol {

	commitEditing(): boolean;

	commitEditingWithDelegateDidCommitSelectorContextInfo(withDelegate?: any, didCommit?: string, contextInfo?: any): void;

	commitEditingAndReturnError(): boolean;

	discardEditing(): void;
}
declare var NSEditor: {

	prototype: NSEditor;
};

declare var NSEditorDocumentAttribute: string;

interface NSEditorRegistration extends NSObjectProtocol {

	objectDidBeginEditing?(_: NSEditor): void;

	objectDidEndEditing?(_: NSEditor): void;
}
declare var NSEditorRegistration: {

	prototype: NSEditorRegistration;
};

declare var NSEnabledBinding: string;

declare const NSEndFunctionKey: number;

declare const NSEnterCharacter: number;

declare var NSEraDatePickerElementFlag: NSDatePickerElementFlags;

declare function NSEraseRect(rect: CGRect): void;

declare var NSEvenOddWindingRule: NSWindingRule;

declare class NSEvent extends NSObject implements NSCoding, NSCopying {

	static addGlobalMonitorForEventsMatchingMaskHandler(matching: NSEventMask, handler: (p1: NSEvent) => void): any;

	static addLocalMonitorForEventsMatchingMaskHandler(matching: NSEventMask, handler?: (p1: NSEvent) => NSEvent): any;

	static enterExitEventWithTypeLocationModifierFlagsTimestampWindowNumberContextEventNumberTrackingNumberUserData(with_: NSEventType, location: CGPoint, modifierFlags: NSEventModifierFlags, timestamp: number, windowNumber: number, context?: NSGraphicsContext, eventNumber: number, trackingNumber: number, userData?: any): NSEvent;

	static eventWithCGEvent(cgEvent: any): NSEvent;

	static eventWithEventRef(eventRef: any): NSEvent;

	static keyEventWithTypeLocationModifierFlagsTimestampWindowNumberContextCharactersCharactersIgnoringModifiersIsARepeatKeyCode(with_: NSEventType, location: CGPoint, modifierFlags: NSEventModifierFlags, timestamp: number, windowNumber: number, context?: NSGraphicsContext, characters: string, charactersIgnoringModifiers: string, isARepeat: boolean, keyCode: number): NSEvent;

	static mouseEventWithTypeLocationModifierFlagsTimestampWindowNumberContextEventNumberClickCountPressure(with_: NSEventType, location: CGPoint, modifierFlags: NSEventModifierFlags, timestamp: number, windowNumber: number, context?: NSGraphicsContext, eventNumber: number, clickCount: number, pressure: number): NSEvent;

	static otherEventWithTypeLocationModifierFlagsTimestampWindowNumberContextSubtypeData1Data2(with_: NSEventType, location: CGPoint, modifierFlags: NSEventModifierFlags, timestamp: number, windowNumber: number, context?: NSGraphicsContext, subtype: number, data1: number, data2: number): NSEvent;

	static removeMonitor(_: any): void;

	static startPeriodicEventsAfterDelayWithPeriod(afterDelay: number, withPeriod: number): void;

	static stopPeriodicEvents(): void;

	readonly isARepeat: boolean;

	readonly CGEvent: any;

	readonly absoluteX: number;

	readonly absoluteY: number;

	readonly absoluteZ: number;

	readonly associatedEventsMask: NSEventMask;

	readonly buttonMask: NSEventButtonMask;

	readonly buttonNumber: number;

	readonly capabilityMask: number;

	readonly characters: string;

	readonly charactersIgnoringModifiers: string;

	readonly clickCount: number;

	readonly data1: number;

	readonly data2: number;

	readonly deltaX: number;

	readonly deltaY: number;

	readonly deltaZ: number;

	readonly deviceID: number;

	readonly isDirectionInvertedFromDevice: boolean;

	readonly isEnteringProximity: boolean;

	readonly eventNumber: number;

	readonly eventRef: any;

	readonly hasPreciseScrollingDeltas: boolean;

	readonly keyCode: number;

	readonly locationInWindow: CGPoint;

	readonly magnification: number;

	readonly modifierFlags: NSEventModifierFlags;

	readonly momentumPhase: NSEventPhase;

	readonly phase: NSEventPhase;

	readonly pointingDeviceID: number;

	readonly pointingDeviceSerialNumber: number;

	readonly pointingDeviceType: NSPointingDeviceType;

	readonly pressure: number;

	readonly pressureBehavior: NSPressureBehavior;

	readonly rotation: number;

	readonly scrollingDeltaX: number;

	readonly scrollingDeltaY: number;

	readonly stage: number;

	readonly stageTransition: number;

	readonly subtype: NSEventSubtype;

	readonly systemTabletID: number;

	readonly tabletID: number;

	readonly tangentialPressure: number;

	readonly tilt: CGPoint;

	readonly timestamp: number;

	readonly trackingArea: NSTrackingArea;

	readonly trackingNumber: number;

	readonly type: NSEventType;

	readonly uniqueID: number;

	readonly userData: any;

	readonly vendorDefined: any;

	readonly vendorID: number;

	readonly vendorPointingDeviceType: number;

	readonly window: NSWindow;

	readonly windowNumber: number;

	static doubleClickInterval(): number;

	static keyRepeatDelay(): number;

	static keyRepeatInterval(): number;

	static modifierFlags(): NSEventModifierFlags;

	static setMouseCoalescingEnabled(_: boolean)

	isMouseCoalescingEnabled: boolean;

	static mouseLocation(): CGPoint;

	static pressedMouseButtons(): number;

	static isSwipeTrackingFromScrollEventsEnabled(): boolean;

	static create(coder: NSCoder); // inherited from NSCoding

	allTouches(): NSSet<NSTouch>;

	charactersByApplyingModifiers(byApplyingModifiers: NSEventModifierFlags): string;

	coalescedTouchesForTouch(for_: NSTouch): NSArray<NSTouch>;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	touchesForView(for_: NSView): NSSet<NSTouch>;

	touchesMatchingPhaseInView(matching: NSTouchPhase, in_?: NSView): NSSet<NSTouch>;

	trackSwipeEventWithOptionsDampenAmountThresholdMinMaxUsingHandler(options: NSEventSwipeTrackingOptions, dampenAmountThresholdMin: number, max: number, usingHandler: (p1: number, p2: NSEventPhase, p3: boolean, p4: boolean) => void): void;
}

enum NSEventButtonMask {

	PenTip = 1,

	PenLowerSide = 2,

	PenUpperSide = 4
}

globalThis.NSEventButtonMask = NSEventButtonMask;

declare var NSEventDurationForever: number;

enum NSEventGestureAxis {

	None = 0,

	Horizontal = 1,

	Vertical = 2
}

globalThis.NSEventGestureAxis = NSEventGestureAxis;

enum NSEventMask {

	LeftMouseDown = 2,

	LeftMouseUp = 4,

	RightMouseDown = 8,

	RightMouseUp = 16,

	MouseMoved = 32,

	LeftMouseDragged = 64,

	RightMouseDragged = 128,

	MouseEntered = 256,

	MouseExited = 512,

	KeyDown = 1024,

	KeyUp = 2048,

	FlagsChanged = 4096,

	AppKitDefined = 8192,

	SystemDefined = 16384,

	ApplicationDefined = 32768,

	Periodic = 65536,

	CursorUpdate = 131072,

	ScrollWheel = 4194304,

	TabletPoint = 8388608,

	TabletProximity = 16777216,

	OtherMouseDown = 33554432,

	OtherMouseUp = 67108864,

	OtherMouseDragged = 134217728,

	Gesture = 536870912,

	Magnify = 1073741824,

	Swipe = 2147483648,

	Rotate = 262144,

	BeginGesture = 524288,

	EndGesture = 1048576,

	SmartMagnify = 4294967296,

	Pressure = 17179869184,

	DirectTouch = 137438953472,

	ChangeMode = 274877906944,

	Any = -1
}

globalThis.NSEventMask = NSEventMask;

enum NSEventModifierFlags {

	CapsLock = 65536,

	Shift = 131072,

	Control = 262144,

	Option = 524288,

	Command = 1048576,

	NumericPad = 2097152,

	Help = 4194304,

	Function = 8388608,

	DeviceIndependentFlagsMask = 4294901760
}

globalThis.NSEventModifierFlags = NSEventModifierFlags;

enum NSEventPhase {

	None = 0,

	Began = 1,

	Stationary = 2,

	Changed = 4,

	Ended = 8,

	Cancelled = 16,

	MayBegin = 32
}

globalThis.NSEventPhase = NSEventPhase;

enum NSEventSubtype {

	WindowExposed = 0,

	ApplicationActivated = 1,

	ApplicationDeactivated = 2,

	WindowMoved = 4,

	ScreenChanged = 8,

	PowerOff = 1,

	MouseEvent = 0,

	TabletPoint = 1,

	TabletProximity = 2,

	Touch = 3
}

globalThis.NSEventSubtype = NSEventSubtype;

enum NSEventSwipeTrackingOptions {

	LockDirection = 1,

	ClampGestureAmount = 2
}

globalThis.NSEventSwipeTrackingOptions = NSEventSwipeTrackingOptions;

declare var NSEventTrackingRunLoopMode: string;

enum NSEventType {

	LeftMouseDown = 1,

	LeftMouseUp = 2,

	RightMouseDown = 3,

	RightMouseUp = 4,

	MouseMoved = 5,

	LeftMouseDragged = 6,

	RightMouseDragged = 7,

	MouseEntered = 8,

	MouseExited = 9,

	KeyDown = 10,

	KeyUp = 11,

	FlagsChanged = 12,

	AppKitDefined = 13,

	SystemDefined = 14,

	ApplicationDefined = 15,

	Periodic = 16,

	CursorUpdate = 17,

	ScrollWheel = 22,

	TabletPoint = 23,

	TabletProximity = 24,

	OtherMouseDown = 25,

	OtherMouseUp = 26,

	OtherMouseDragged = 27,

	Gesture = 29,

	Magnify = 30,

	Swipe = 31,

	Rotate = 18,

	BeginGesture = 19,

	EndGesture = 20,

	SmartMagnify = 32,

	QuickLook = 33,

	Pressure = 34,

	DirectTouch = 37,

	ChangeMode = 38
}

globalThis.NSEventType = NSEventType;

declare var NSExcludedElementsDocumentAttribute: string;

declare var NSExcludedKeysBinding: string;

declare const NSExecuteFunctionKey: number;

declare var NSExpansionAttributeName: string;

declare const NSF10FunctionKey: number;

declare const NSF11FunctionKey: number;

declare const NSF12FunctionKey: number;

declare const NSF13FunctionKey: number;

declare const NSF14FunctionKey: number;

declare const NSF15FunctionKey: number;

declare const NSF16FunctionKey: number;

declare const NSF17FunctionKey: number;

declare const NSF18FunctionKey: number;

declare const NSF19FunctionKey: number;

declare const NSF1FunctionKey: number;

declare const NSF20FunctionKey: number;

declare const NSF21FunctionKey: number;

declare const NSF22FunctionKey: number;

declare const NSF23FunctionKey: number;

declare const NSF24FunctionKey: number;

declare const NSF25FunctionKey: number;

declare const NSF26FunctionKey: number;

declare const NSF27FunctionKey: number;

declare const NSF28FunctionKey: number;

declare const NSF29FunctionKey: number;

declare const NSF2FunctionKey: number;

declare const NSF30FunctionKey: number;

declare const NSF31FunctionKey: number;

declare const NSF32FunctionKey: number;

declare const NSF33FunctionKey: number;

declare const NSF34FunctionKey: number;

declare const NSF35FunctionKey: number;

declare const NSF3FunctionKey: number;

declare const NSF4FunctionKey: number;

declare const NSF5FunctionKey: number;

declare const NSF6FunctionKey: number;

declare const NSF7FunctionKey: number;

declare const NSF8FunctionKey: number;

declare const NSF9FunctionKey: number;

declare const NSFPCurrentField: number;

declare const NSFPPreviewButton: number;

declare const NSFPPreviewField: number;

declare const NSFPRevertButton: number;

declare const NSFPSetButton: number;

declare const NSFPSizeField: number;

declare const NSFPSizeTitle: number;

declare var NSFileContentsPboardType: string;

declare class NSFilePromiseProvider extends NSObject implements NSPasteboardWriting {

	setDelegate(_: NSFilePromiseProviderDelegate)

	delegate: NSFilePromiseProviderDelegate;

	setFileType(_: string)

	fileType: string;

	setUserInfo(_: any)

	userInfo: any;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(fileType: string, delegate: NSFilePromiseProviderDelegate);

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	pasteboardPropertyListForType(forType: string): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
}

interface NSFilePromiseProviderDelegate extends NSObjectProtocol {

	filePromiseProviderWritePromiseToURLCompletionHandler(_: NSFilePromiseProvider, writePromiseTo: NSURL, completionHandler?: (p1: NSError) => void): void;

	filePromiseProviderFileNameForType(_: NSFilePromiseProvider, fileNameForType: string): string;

	operationQueueForFilePromiseProvider?(for_: NSFilePromiseProvider): NSOperationQueue;
}
declare var NSFilePromiseProviderDelegate: {

	prototype: NSFilePromiseProviderDelegate;
};

declare class NSFilePromiseReceiver extends NSObject implements NSPasteboardReading {

	static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardReadingOptions;

	readonly fileNames: NSArray<string>;

	readonly fileTypes: NSArray<string>;

	static readableDraggedTypes(): NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(pasteboardPropertyList: any, ofType: string); // inherited from NSPasteboardReading

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	receivePromisedFilesAtDestinationOptionsOperationQueueReader(atDestination: NSURL, options: NSDictionary<any, any>, operationQueue: NSOperationQueue, reader?: (p1: NSURL, p2: NSError) => void): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var NSFileTypeDocumentAttribute: string;

declare var NSFileTypeDocumentOption: string;

declare var NSFilterPredicateBinding: string;

declare const NSFindFunctionKey: number;

enum NSFindPanelAction {

	ShowFindPanel = 1,

	Next = 2,

	Previous = 3,

	ReplaceAll = 4,

	Replace = 5,

	ReplaceAndFind = 6,

	SetFindString = 7,

	ReplaceAllInSelection = 8,

	SelectAll = 9,

	SelectAllInSelection = 10
}

globalThis.NSFindPanelAction = NSFindPanelAction;

declare var NSFindPanelCaseInsensitiveSearch: string;

declare var NSFindPanelSearchOptionsPboardType: string;

declare var NSFindPanelSubstringMatch: string;

enum NSFindPanelSubstringMatchType {

	Contains = 0,

	StartsWith = 1,

	FullWord = 2,

	EndsWith = 3
}

globalThis.NSFindPanelSubstringMatchType = NSFindPanelSubstringMatchType;

declare var NSFitPagination: NSPrintingPaginationMode;

declare var NSFloatingWindowLevel: number;

enum NSFocusRingPlacement {

	Only = 0,

	Below = 1,

	Above = 2
}

globalThis.NSFocusRingPlacement = NSFocusRingPlacement;

enum NSFocusRingType {

	Default = 0,

	None = 1,

	Exterior = 2
}

globalThis.NSFocusRingType = NSFocusRingType;

declare class NSFont extends NSObject implements NSCopying, NSSecureCoding {

	static boldSystemFontOfSize(ofSize: number): NSFont;

	static controlContentFontOfSize(ofSize: number): NSFont;

	static fontWithDescriptorSize(descriptor: NSFontDescriptor, size: number): NSFont;

	static fontWithDescriptorTextTransform(descriptor: NSFontDescriptor, textTransform?: NSAffineTransform): NSFont;

	static fontWithNameMatrix(name: string, matrix: number): NSFont;

	static fontWithNameSize(name: string, size: number): NSFont;

	static labelFontOfSize(ofSize: number): NSFont;

	static menuBarFontOfSize(ofSize: number): NSFont;

	static menuFontOfSize(ofSize: number): NSFont;

	static messageFontOfSize(ofSize: number): NSFont;

	static monospacedDigitSystemFontOfSizeWeight(ofSize: number, weight: number): NSFont;

	static monospacedSystemFontOfSizeWeight(ofSize: number, weight: number): NSFont;

	static paletteFontOfSize(ofSize: number): NSFont;

	static setUserFixedPitchFont(_?: NSFont): void;

	static setUserFont(_?: NSFont): void;

	static systemFontOfSize(ofSize: number): NSFont;

	static systemFontOfSizeWeight(ofSize: number, weight: number): NSFont;

	static systemFontSizeForControlSize(for_: NSControlSize): number;

	static titleBarFontOfSize(ofSize: number): NSFont;

	static toolTipsFontOfSize(ofSize: number): NSFont;

	static userFixedPitchFontOfSize(ofSize: number): NSFont;

	static userFontOfSize(ofSize: number): NSFont;

	readonly ascender: number;

	readonly boundingRectForFont: CGRect;

	readonly capHeight: number;

	readonly coveredCharacterSet: NSCharacterSet;

	readonly descender: number;

	readonly displayName: string;

	readonly familyName: string;

	readonly isFixedPitch: boolean;

	readonly fontDescriptor: NSFontDescriptor;

	readonly fontName: string;

	readonly italicAngle: number;

	readonly leading: number;

	readonly matrix: number;

	readonly maximumAdvancement: CGSize;

	readonly mostCompatibleStringEncoding: number;

	readonly numberOfGlyphs: number;

	readonly pointSize: number;

	readonly printerFont: NSFont;

	readonly renderingMode: NSFontRenderingMode;

	readonly screenFont: NSFont;

	readonly textTransform: NSAffineTransform;

	readonly underlinePosition: number;

	readonly underlineThickness: number;

	readonly isVertical: boolean;

	readonly verticalFont: NSFont;

	readonly xHeight: number;

	static labelFontSize(): number;

	static smallSystemFontSize(): number;

	static systemFontSize(): number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	advancementForCGGlyph(forCGGlyph: number): CGSize;

	advancementForGlyph(forGlyph: number): CGSize;

	boundingRectForCGGlyph(forCGGlyph: number): CGRect;

	boundingRectForGlyph(forGlyph: number): CGRect;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	getAdvancementsForCGGlyphsCount(_: CGSize, forCGGlyphs: number, count: number): void;

	getAdvancementsForGlyphsCount(_: CGSize, forGlyphs: number, count: number): void;

	getAdvancementsForPackedGlyphsLength(_: CGSize, forPackedGlyphs: any, length: number): void;

	getBoundingRectsForCGGlyphsCount(_: CGRect, forCGGlyphs: number, count: number): void;

	getBoundingRectsForGlyphsCount(_: CGRect, forGlyphs: number, count: number): void;

	glyphWithName(withName: string): number;

	screenFontWithRenderingMode(with_: NSFontRenderingMode): NSFont;

	set(): void;

	setInContext(in_: NSGraphicsContext): void;
}

enum NSFontAction {

	NoFontChangeAction = 0,

	ViaPanelFontAction = 1,

	AddTraitFontAction = 2,

	SizeUpFontAction = 3,

	SizeDownFontAction = 4,

	HeavierFontAction = 5,

	LighterFontAction = 6,

	RemoveTraitFontAction = 7
}

globalThis.NSFontAction = NSFontAction;

declare const NSFontAssetDownloadError: number;

declare class NSFontAssetRequest extends NSObject implements NSProgressReporting {

	readonly downloadedFontDescriptors: NSArray<NSFontDescriptor>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly progress: NSProgress; // inherited from NSProgressReporting

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(fontDescriptors: NSArray<NSFontDescriptor> | NSFontDescriptor[], options: NSFontAssetRequestOptions);

	conformsToProtocol(_: any /* Protocol */): boolean;

	downloadFontAssetsWithCompletionHandler(withCompletionHandler?: (p1: NSError) => boolean): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

enum NSFontAssetRequestOptions {

	UsesStandardUI = 1
}

globalThis.NSFontAssetRequestOptions = NSFontAssetRequestOptions;

declare var NSFontAttributeName: string;

declare var NSFontBinding: string;

declare var NSFontBoldBinding: string;

declare const NSFontBoldTrait: number;

declare var NSFontCascadeListAttribute: string;

interface NSFontChanging extends NSObjectProtocol {

	changeFont?(_?: NSFontManager): void;

	validModesForFontPanel?(_: NSFontPanel): NSFontPanelModeMask;
}
declare var NSFontChanging: {

	prototype: NSFontChanging;
};

declare var NSFontCharacterSetAttribute: string;

declare const NSFontClarendonSerifsClass: number;

declare class NSFontCollection extends NSObject implements NSCoding, NSCopying, NSMutableCopying {

	static fontCollectionWithDescriptors(descriptors: NSArray<NSFontDescriptor>): NSFontCollection;

	static fontCollectionWithLocale(locale: NSLocale): NSFontCollection;

	static fontCollectionWithName(name: string): NSFontCollection;

	static fontCollectionWithNameVisibility(name: string, visibility: NSFontCollectionVisibility): NSFontCollection;

	static hideFontCollectionWithNameVisibilityError(visibility: string, error: NSFontCollectionVisibility): boolean;

	static renameFontCollectionWithNameVisibilityToNameError(fromName: string, visibility: NSFontCollectionVisibility, toName: string): boolean;

	static showFontCollectionWithNameVisibilityError(withName: NSFontCollection, visibility: string, error: NSFontCollectionVisibility): boolean;

	readonly exclusionDescriptors: NSArray<NSFontDescriptor>;

	readonly matchingDescriptors: NSArray<NSFontDescriptor>;

	readonly queryDescriptors: NSArray<NSFontDescriptor>;

	static allFontCollectionNames(): NSArray<string>;

	static fontCollectionWithAllAvailableDescriptors(): NSFontCollection;

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	matchingDescriptorsForFamily(forFamily: string): NSArray<NSFontDescriptor>;

	matchingDescriptorsForFamilyOptions(forFamily: string, options?: NSDictionary<string, number>): NSArray<NSFontDescriptor>;

	matchingDescriptorsWithOptions(options?: NSDictionary<string, number>): NSArray<NSFontDescriptor>;

	mutableCopyWithZone(_?: any): any;
}

declare var NSFontCollectionActionKey: string;

declare var NSFontCollectionAllFonts: string;

declare var NSFontCollectionDidChangeNotification: string;

declare var NSFontCollectionDisallowAutoActivationOption: string;

declare var NSFontCollectionFavorites: string;

declare var NSFontCollectionIncludeDisabledFontsOption: string;

declare var NSFontCollectionNameKey: string;

declare var NSFontCollectionOldNameKey: string;

enum NSFontCollectionOptions {

	ApplicationOnlyMask = 1
}

globalThis.NSFontCollectionOptions = NSFontCollectionOptions;

declare var NSFontCollectionRecentlyUsed: string;

declare var NSFontCollectionRemoveDuplicatesOption: string;

declare var NSFontCollectionUser: string;

enum NSFontCollectionVisibility {

	Process = 1,

	User = 2,

	Computer = 4
}

globalThis.NSFontCollectionVisibility = NSFontCollectionVisibility;

declare var NSFontCollectionVisibilityKey: string;

declare var NSFontCollectionWasHidden: string;

declare var NSFontCollectionWasRenamed: string;

declare var NSFontCollectionWasShown: string;

declare const NSFontCondensedTrait: number;

declare class NSFontDescriptor extends NSObject implements NSCopying, NSSecureCoding {

	static fontDescriptorWithFontAttributes(fontAttributes?: NSDictionary<string, any>): NSFontDescriptor;

	static fontDescriptorWithNameMatrix(name: string, matrix: NSAffineTransform): NSFontDescriptor;

	static fontDescriptorWithNameSize(name: string, size: number): NSFontDescriptor;

	readonly fontAttributes: NSDictionary<string, any>;

	readonly matrix: NSAffineTransform;

	readonly pointSize: number;

	readonly postscriptName: string;

	readonly requiresFontAssetRequest: boolean;

	readonly symbolicTraits: NSFontDescriptorSymbolicTraits;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(fontAttributes: NSDictionary<string, any>);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	fontDescriptorByAddingAttributes(_: NSDictionary<string, any>): NSFontDescriptor;

	fontDescriptorWithDesign(_: string): this;

	fontDescriptorWithFace(_: string): NSFontDescriptor;

	fontDescriptorWithFamily(_: string): NSFontDescriptor;

	fontDescriptorWithMatrix(_: NSAffineTransform): NSFontDescriptor;

	fontDescriptorWithSize(_: number): NSFontDescriptor;

	fontDescriptorWithSymbolicTraits(_: NSFontDescriptorSymbolicTraits): NSFontDescriptor;

	matchingFontDescriptorWithWithMandatoryKeys(withMandatoryKeys?: NSSet<string>): NSFontDescriptor;

	matchingFontDescriptorsWithWithMandatoryKeys(withMandatoryKeys?: NSSet<string>): NSArray<NSFontDescriptor>;

	objectForKey(forKey: string): any;
}

enum NSFontDescriptorSymbolicTraits {

	TraitItalic = 1,

	TraitBold = 2,

	TraitExpanded = 32,

	TraitCondensed = 64,

	TraitMonoSpace = 1024,

	TraitVertical = 2048,

	TraitUIOptimized = 4096,

	TraitTightLeading = 32768,

	TraitLooseLeading = 65536,

	ClassMask = 4026531840,

	ClassUnknown = 0,

	ClassOldStyleSerifs = 268435456,

	ClassTransitionalSerifs = 536870912,

	ClassModernSerifs = 805306368,

	ClassClarendonSerifs = 1073741824,

	ClassSlabSerifs = 1342177280,

	ClassFreeformSerifs = 1879048192,

	ClassSansSerif = 2147483648,

	ClassOrnamentals = 2415919104,

	ClassScripts = 2684354560,

	ClassSymbolic = 3221225472
}

globalThis.NSFontDescriptorSymbolicTraits = NSFontDescriptorSymbolicTraits;

declare var NSFontDescriptorSystemDesignDefault: string;

declare var NSFontDescriptorSystemDesignMonospaced: string;

declare var NSFontDescriptorSystemDesignRounded: string;

declare var NSFontDescriptorSystemDesignSerif: string;

declare const NSFontErrorMaximum: number;

declare const NSFontErrorMinimum: number;

declare const NSFontExpandedTrait: number;

declare var NSFontFaceAttribute: string;

declare var NSFontFamilyAttribute: string;

declare const NSFontFamilyClassMask: number;

declare var NSFontFamilyNameBinding: string;

declare var NSFontFeatureSelectorIdentifierKey: string;

declare var NSFontFeatureSettingsAttribute: string;

declare var NSFontFeatureTypeIdentifierKey: string;

declare var NSFontFixedAdvanceAttribute: string;

declare const NSFontFreeformSerifsClass: number;

declare var NSFontIdentityMatrix: number;

declare var NSFontItalicBinding: string;

declare const NSFontItalicTrait: number;

declare class NSFontManager extends NSObject implements NSMenuItemValidation {

	static setFontManagerFactory(_?: typeof NSObject): void;

	static setFontPanelFactory(_?: typeof NSObject): void;

	setAction(_: string)

	action: string;

	readonly availableFontFamilies: NSArray<string>;

	readonly availableFonts: NSArray<string>;

	readonly currentFontAction: NSFontAction;

	setEnabled(_: boolean)

	isEnabled: boolean;

	readonly isMultiple: boolean;

	readonly selectedFont: NSFont;

	setTarget(_: any)

	target: any;

	static sharedFontManager(): NSFontManager;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	addFontTrait(_?: any): void;

	availableFontNamesWithTraits(with_: NSFontTraitMask): NSArray<string>;

	availableMembersOfFontFamily(ofFontFamily: string): NSArray<NSArray<any>>;

	conformsToProtocol(_: any /* Protocol */): boolean;

	convertAttributes(_: NSDictionary<string, any>): NSDictionary<string, any>;

	convertFont(_: NSFont): NSFont;

	convertFontToFace(_: NSFont, toFace: string): NSFont;

	convertFontToFamily(_: NSFont, toFamily: string): NSFont;

	convertFontToHaveTrait(_: NSFont, toHaveTrait: NSFontTraitMask): NSFont;

	convertFontToNotHaveTrait(_: NSFont, toNotHaveTrait: NSFontTraitMask): NSFont;

	convertFontToSize(_: NSFont, toSize: number): NSFont;

	convertFontTraits(_: NSFontTraitMask): NSFontTraitMask;

	convertWeightOfFont(_: boolean, of: NSFont): NSFont;

	fontMenu(_: boolean): NSMenu;

	fontNamedHasTraits(_: string, hasTraits: NSFontTraitMask): boolean;

	fontPanel(_: boolean): NSFontPanel;

	fontWithFamilyTraitsWeightSize(withFamily: string, traits: NSFontTraitMask, weight: number, size: number): NSFont;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	localizedNameForFamilyFace(forFamily: string, face?: string): string;

	modifyFont(_?: any): void;

	modifyFontViaPanel(_?: any): void;

	orderFrontFontPanel(_?: any): void;

	orderFrontStylesPanel(_?: any): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeFontTrait(_?: any): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	sendAction(): boolean;

	setFontMenu(_: NSMenu): void;

	setSelectedAttributesIsMultiple(_: NSDictionary<string, any>, isMultiple: boolean): void;

	setSelectedFontIsMultiple(_: NSFont, isMultiple: boolean): void;

	traitsOfFont(of: NSFont): NSFontTraitMask;

	validateMenuItem(_: NSMenuItem): boolean;

	weightOfFont(of: NSFont): number;
}

declare var NSFontMatrixAttribute: string;

declare const NSFontModernSerifsClass: number;

declare const NSFontMonoSpaceTrait: number;

declare var NSFontNameAttribute: string;

declare var NSFontNameBinding: string;

declare const NSFontOldStyleSerifsClass: number;

declare const NSFontOrnamentalsClass: number;

declare class NSFontPanel extends NSPanel {

	static windowWithContentViewController(contentViewController: NSViewController): NSFontPanel; // inherited from NSWindow

	setAccessoryView(_: NSView)

	accessoryView: NSView;

	setEnabled(_: boolean)

	isEnabled: boolean;

	static sharedFontPanel(): NSFontPanel;

	static sharedFontPanelExists(): boolean;

	panelConvertFont(_: NSFont): NSFont;

	reloadDefaultFontFamilies(): void;

	setPanelFontIsMultiple(_: NSFont, isMultiple: boolean): void;
}

declare const NSFontPanelAllEffectsModeMask: number;

declare const NSFontPanelAllModesMask: number;

declare const NSFontPanelCollectionModeMask: number;

declare const NSFontPanelDocumentColorEffectModeMask: number;

declare const NSFontPanelFaceModeMask: number;

enum NSFontPanelModeMask {

	ModeMaskFace = 1,

	ModeMaskSize = 2,

	ModeMaskCollection = 4,

	ModeMaskUnderlineEffect = 256,

	ModeMaskStrikethroughEffect = 512,

	ModeMaskTextColorEffect = 1024,

	ModeMaskDocumentColorEffect = 2048,

	ModeMaskShadowEffect = 4096,

	ModeMaskAllEffects = 1048320,

	ModesMaskStandardModes = 65535,

	ModesMaskAllModes = 4294967295
}

globalThis.NSFontPanelModeMask = NSFontPanelModeMask;

declare const NSFontPanelShadowEffectModeMask: number;

declare const NSFontPanelSizeModeMask: number;

declare const NSFontPanelStandardModesMask: number;

declare const NSFontPanelStrikethroughEffectModeMask: number;

declare const NSFontPanelTextColorEffectModeMask: number;

declare const NSFontPanelUnderlineEffectModeMask: number;

enum NSFontRenderingMode {

	DefaultRenderingMode = 0,

	AntialiasedRenderingMode = 1,

	IntegerAdvancementsRenderingMode = 2,

	AntialiasedIntegerAdvancementsRenderingMode = 3
}

globalThis.NSFontRenderingMode = NSFontRenderingMode;

declare const NSFontSansSerifClass: number;

declare const NSFontScriptsClass: number;

declare var NSFontSetChangedNotification: string;

declare var NSFontSizeAttribute: string;

declare var NSFontSizeBinding: string;

declare const NSFontSlabSerifsClass: number;

declare var NSFontSlantTrait: string;

declare const NSFontSymbolicClass: number;

declare var NSFontSymbolicTrait: string;

enum NSFontTraitMask {

	ItalicFontMask = 1,

	BoldFontMask = 2,

	UnboldFontMask = 4,

	NonStandardCharacterSetFontMask = 8,

	NarrowFontMask = 16,

	ExpandedFontMask = 32,

	CondensedFontMask = 64,

	SmallCapsFontMask = 128,

	PosterFontMask = 256,

	CompressedFontMask = 512,

	FixedPitchFontMask = 1024,

	UnitalicFontMask = 16777216
}

globalThis.NSFontTraitMask = NSFontTraitMask;

declare var NSFontTraitsAttribute: string;

declare const NSFontTransitionalSerifsClass: number;

declare const NSFontUIOptimizedTrait: number;

declare var NSFontUnavailableException: string;

declare const NSFontUnknownClass: number;

declare var NSFontVariationAttribute: string;

declare var NSFontVariationAxisDefaultValueKey: string;

declare var NSFontVariationAxisIdentifierKey: string;

declare var NSFontVariationAxisMaximumValueKey: string;

declare var NSFontVariationAxisMinimumValueKey: string;

declare var NSFontVariationAxisNameKey: string;

declare const NSFontVerticalTrait: number;

declare var NSFontVisibleNameAttribute: string;

declare var NSFontWeightBlack: number;

declare var NSFontWeightBold: number;

declare var NSFontWeightHeavy: number;

declare var NSFontWeightLight: number;

declare var NSFontWeightMedium: number;

declare var NSFontWeightRegular: number;

declare var NSFontWeightSemibold: number;

declare var NSFontWeightThin: number;

declare var NSFontWeightTrait: string;

declare var NSFontWeightUltraLight: number;

declare var NSFontWidthTrait: string;

declare var NSForegroundColorAttributeName: string;

declare class NSFormCell extends NSActionCell {

	setAttributedTitle(_: NSAttributedString)

	attributedTitle: NSAttributedString;

	setPlaceholderAttributedString(_: NSAttributedString)

	placeholderAttributedString: NSAttributedString;

	setPlaceholderString(_: string)

	placeholderString: string;

	setPreferredTextFieldWidth(_: number)

	preferredTextFieldWidth: number;

	setTitleAlignment(_: NSTextAlignment)

	titleAlignment: NSTextAlignment;

	setTitleBaseWritingDirection(_: NSWritingDirection)

	titleBaseWritingDirection: NSWritingDirection;

	setTitleFont(_: NSFont)

	titleFont: NSFont;

	setTitleWidth(_: number)

	titleWidth: number;

	titleWidth(_: CGSize): number;
}

declare const NSFormFeedCharacter: number;

declare function NSFrameRect(rect: CGRect): void;

declare function NSFrameRectWithWidth(rect: CGRect, frameWidth: number): void;

declare function NSFrameRectWithWidthUsingOperation(rect: CGRect, frameWidth: number, op: NSCompositingOperation): void;

declare var NSFullScreenModeAllScreens: string;

declare var NSFullScreenModeApplicationPresentationOptions: string;

declare var NSFullScreenModeSetting: string;

declare var NSFullScreenModeWindowLevel: string;

declare class NSGestureRecognizer extends NSObject implements NSCoding {

	setAction(_: string)

	action: string;

	setAllowedTouchTypes(_: NSTouchTypeMask)

	allowedTouchTypes: NSTouchTypeMask;

	setDelaysKeyEvents(_: boolean)

	delaysKeyEvents: boolean;

	setDelaysMagnificationEvents(_: boolean)

	delaysMagnificationEvents: boolean;

	setDelaysOtherMouseButtonEvents(_: boolean)

	delaysOtherMouseButtonEvents: boolean;

	setDelaysPrimaryMouseButtonEvents(_: boolean)

	delaysPrimaryMouseButtonEvents: boolean;

	setDelaysRotationEvents(_: boolean)

	delaysRotationEvents: boolean;

	setDelaysSecondaryMouseButtonEvents(_: boolean)

	delaysSecondaryMouseButtonEvents: boolean;

	setDelegate(_: NSGestureRecognizerDelegate)

	delegate: NSGestureRecognizerDelegate;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setPressureConfiguration(_: NSPressureConfiguration)

	pressureConfiguration: NSPressureConfiguration;

	setState(_: NSGestureRecognizerState)

	state: NSGestureRecognizerState;

	setTarget(_: any)

	target: any;

	readonly view: NSView;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(target: any, action: string);

	canBePreventedByGestureRecognizer(by: NSGestureRecognizer): boolean;

	canPreventGestureRecognizer(_: NSGestureRecognizer): boolean;

	encodeWithCoder(_: NSCoder): void;

	flagsChanged(with_: NSEvent): void;

	keyDown(with_: NSEvent): void;

	keyUp(with_: NSEvent): void;

	locationInView(in_?: NSView): CGPoint;

	magnifyWithEvent(with_: NSEvent): void;

	mouseDown(with_: NSEvent): void;

	mouseDragged(with_: NSEvent): void;

	mouseUp(with_: NSEvent): void;

	otherMouseDown(with_: NSEvent): void;

	otherMouseDragged(with_: NSEvent): void;

	otherMouseUp(with_: NSEvent): void;

	pressureChangeWithEvent(with_: NSEvent): void;

	reset(): void;

	rightMouseDown(with_: NSEvent): void;

	rightMouseDragged(with_: NSEvent): void;

	rightMouseUp(with_: NSEvent): void;

	rotateWithEvent(with_: NSEvent): void;

	shouldBeRequiredToFailByGestureRecognizer(by: NSGestureRecognizer): boolean;

	shouldRequireFailureOfGestureRecognizer(of: NSGestureRecognizer): boolean;

	tabletPoint(with_: NSEvent): void;

	touchesBeganWithEvent(with_: NSEvent): void;

	touchesCancelledWithEvent(with_: NSEvent): void;

	touchesEndedWithEvent(with_: NSEvent): void;

	touchesMovedWithEvent(with_: NSEvent): void;
}

interface NSGestureRecognizerDelegate extends NSObjectProtocol {

	gestureRecognizerShouldAttemptToRecognizeWithEvent?(_: NSGestureRecognizer, shouldAttemptToRecognizeWith: NSEvent): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer?(_: NSGestureRecognizer, shouldRecognizeSimultaneouslyWith: NSGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer?(_: NSGestureRecognizer, shouldRequireFailureOf: NSGestureRecognizer): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer?(_: NSGestureRecognizer, shouldBeRequiredToFailBy: NSGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveTouch?(_: NSGestureRecognizer, shouldReceive: NSTouch): boolean;

	gestureRecognizerShouldBegin?(_: NSGestureRecognizer): boolean;
}
declare var NSGestureRecognizerDelegate: {

	prototype: NSGestureRecognizerDelegate;
};

enum NSGestureRecognizerState {

	Possible = 0,

	Began = 1,

	Changed = 2,

	Ended = 3,

	Cancelled = 4,

	Failed = 5,

	Recognized = 3
}

globalThis.NSGestureRecognizerState = NSGestureRecognizerState;

declare function NSGetFileType(pboardType: string): string;

declare function NSGetFileTypes(pboardTypes: NSArray<string> | string[]): NSArray<string>;

declare class NSGlyphGenerator extends NSObject {

	static sharedGlyphGenerator(): NSGlyphGenerator;

	generateGlyphsForGlyphStorageDesiredNumberOfCharactersGlyphIndexCharacterIndex(for_: NSGlyphStorage, desiredNumberOfCharacters: number, glyphIndex?: number, characterIndex?: number): void;
}

declare class NSGlyphInfo extends NSObject implements NSCopying, NSSecureCoding {

	static glyphInfoWithCGGlyphForFontBaseString(cgGlyph: number, for_: NSFont, baseString: string): NSGlyphInfo;

	static glyphInfoWithCharacterIdentifierCollectionBaseString(characterIdentifier: number, collection: NSCharacterCollection, baseString: string): NSGlyphInfo;

	static glyphInfoWithGlyphForFontBaseString(glyph: number, for_: NSFont, baseString: string): NSGlyphInfo;

	static glyphInfoWithGlyphNameForFontBaseString(glyphName: string, for_: NSFont, baseString: string): NSGlyphInfo;

	readonly baseString: string;

	readonly characterCollection: NSCharacterCollection;

	readonly characterIdentifier: number;

	readonly glyphID: number;

	readonly glyphName: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var NSGlyphInfoAttributeName: string;

enum NSGlyphProperty {

	Null = 1,

	ControlCharacter = 2,

	Elastic = 4,

	NonBaseCharacter = 8
}

globalThis.NSGlyphProperty = NSGlyphProperty;

interface NSGlyphStorage {

	attributedString(): NSAttributedString;

	insertGlyphsLengthForStartingGlyphAtIndexCharacterIndex(_: number, length: number, forStartingGlyphAt: number, characterIndex: number): void;

	layoutOptions(): number;

	setIntAttributeValueForGlyphAtIndex(_: number, value: number, forGlyphAt: number): void;
}
declare var NSGlyphStorage: {

	prototype: NSGlyphStorage;
};

declare class NSGradient extends NSObject implements NSCopying, NSSecureCoding {

	readonly colorSpace: NSColorSpace;

	readonly numberOfColorStops: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(colors: NSArray<NSColor> | NSColor[]);

	static create(colors: NSArray<NSColor> | NSColor[], atLocations: number, colorSpace: NSColorSpace);

	static create(colorsAndLocations: NSColor);

	static create(startingColor: NSColor, endingColor: NSColor);

	copyWithZone(_?: any): any;

	drawFromCenterRadiusToCenterRadiusOptions(fromCenter: CGPoint, radius: number, toCenter: CGPoint, radius: number, options: NSGradientDrawingOptions): void;

	drawFromPointToPointOptions(from: CGPoint, to: CGPoint, options: NSGradientDrawingOptions): void;

	drawInBezierPathAngle(in_: NSBezierPath, angle: number): void;

	drawInBezierPathRelativeCenterPosition(in_: NSBezierPath, relativeCenterPosition: CGPoint): void;

	drawInRectAngle(in_: CGRect, angle: number): void;

	drawInRectRelativeCenterPosition(in_: CGRect, relativeCenterPosition: CGPoint): void;

	encodeWithCoder(_: NSCoder): void;

	getColorLocationAtIndex(_?: NSColor, location?: number, at: number): void;

	interpolatedColorAtLocation(atLocation: number): NSColor;
}

enum NSGradientDrawingOptions {

	DrawsBeforeStartingLocation = 1,

	DrawsAfterEndingLocation = 2
}

globalThis.NSGradientDrawingOptions = NSGradientDrawingOptions;

declare class NSGraphicsContext extends NSObject {

	static currentContextDrawingToScreen(): boolean;

	static graphicsContextWithAttributes(attributes: NSDictionary<string, any>): NSGraphicsContext;

	static graphicsContextWithBitmapImageRep(bitmapImageRep: NSBitmapImageRep): NSGraphicsContext;

	static graphicsContextWithCGContextFlipped(cgContext: any, flipped: boolean): NSGraphicsContext;

	static graphicsContextWithWindow(window: NSWindow): NSGraphicsContext;

	static restoreGraphicsState(): void;

	static saveGraphicsState(): void;

	readonly CGContext: any;

	readonly CIContext: CIContext;

	readonly attributes: NSDictionary<string, any>;

	setColorRenderingIntent(_: NSColorRenderingIntent)

	colorRenderingIntent: NSColorRenderingIntent;

	setCompositingOperation(_: NSCompositingOperation)

	compositingOperation: NSCompositingOperation;

	readonly isDrawingToScreen: boolean;

	readonly isFlipped: boolean;

	setImageInterpolation(_: NSImageInterpolation)

	imageInterpolation: NSImageInterpolation;

	setPatternPhase(_: CGPoint)

	patternPhase: CGPoint;

	setShouldAntialias(_: boolean)

	shouldAntialias: boolean;

	static setCurrentContext(_: NSGraphicsContext)

	currentContext: NSGraphicsContext;

	flushGraphics(): void;

	restoreGraphicsState(): void;

	saveGraphicsState(): void;
}

declare var NSGraphicsContextDestinationAttributeName: string;

declare var NSGraphicsContextPDFFormat: string;

declare var NSGraphicsContextPSFormat: string;

declare var NSGraphicsContextRepresentationFormatAttributeName: string;

declare class NSGridCell extends NSObject implements NSCoding {

	readonly column: NSGridColumn;

	setContentView(_: NSView)

	contentView: NSView;

	setCustomPlacementConstraints(_: NSArray<NSLayoutConstraint>)

	customPlacementConstraints: NSArray<NSLayoutConstraint>;

	readonly row: NSGridRow;

	setRowAlignment(_: NSGridRowAlignment)

	rowAlignment: NSGridRowAlignment;

	setXPlacement(_: NSGridCellPlacement)

	xPlacement: NSGridCellPlacement;

	setYPlacement(_: NSGridCellPlacement)

	yPlacement: NSGridCellPlacement;

	static emptyContentView(): NSView;

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum NSGridCellPlacement {

	Inherited = 0,

	None = 1,

	Leading = 2,

	Top = 2,

	Trailing = 3,

	Bottom = 3,

	Center = 4,

	Fill = 5
}

globalThis.NSGridCellPlacement = NSGridCellPlacement;

declare class NSGridColumn extends NSObject implements NSCoding {

	readonly gridView: NSGridView;

	setHidden(_: boolean)

	isHidden: boolean;

	setLeadingPadding(_: number)

	leadingPadding: number;

	readonly numberOfCells: number;

	setTrailingPadding(_: number)

	trailingPadding: number;

	setWidth(_: number)

	width: number;

	setXPlacement(_: NSGridCellPlacement)

	xPlacement: NSGridCellPlacement;

	static create(coder: NSCoder); // inherited from NSCoding

	cellAtIndex(at: number): NSGridCell;

	encodeWithCoder(_: NSCoder): void;

	mergeCellsInRange(in_: NSRange): void;
}

declare class NSGridRow extends NSObject implements NSCoding {

	setBottomPadding(_: number)

	bottomPadding: number;

	readonly gridView: NSGridView;

	setHeight(_: number)

	height: number;

	setHidden(_: boolean)

	isHidden: boolean;

	readonly numberOfCells: number;

	setRowAlignment(_: NSGridRowAlignment)

	rowAlignment: NSGridRowAlignment;

	setTopPadding(_: number)

	topPadding: number;

	setYPlacement(_: NSGridCellPlacement)

	yPlacement: NSGridCellPlacement;

	static create(coder: NSCoder); // inherited from NSCoding

	cellAtIndex(at: number): NSGridCell;

	encodeWithCoder(_: NSCoder): void;

	mergeCellsInRange(in_: NSRange): void;
}

enum NSGridRowAlignment {

	Inherited = 0,

	None = 1,

	FirstBaseline = 2,

	LastBaseline = 3
}

globalThis.NSGridRowAlignment = NSGridRowAlignment;

declare class NSGridView extends NSView {

	static gridViewWithNumberOfColumnsRows(numberOfColumns: number, rows: number): NSGridView;

	static gridViewWithViews(views: NSArray<NSArray<NSView>>): NSGridView;

	setColumnSpacing(_: number)

	columnSpacing: number;

	readonly numberOfColumns: number;

	readonly numberOfRows: number;

	setRowAlignment(_: NSGridRowAlignment)

	rowAlignment: NSGridRowAlignment;

	setRowSpacing(_: number)

	rowSpacing: number;

	setXPlacement(_: NSGridCellPlacement)

	xPlacement: NSGridCellPlacement;

	setYPlacement(_: NSGridCellPlacement)

	yPlacement: NSGridCellPlacement;

	addColumnWithViews(with_: NSArray<NSView>): NSGridColumn;

	addRowWithViews(with_: NSArray<NSView>): NSGridRow;

	cellAtColumnIndexRowIndex(atColumnIndex: number, rowIndex: number): NSGridCell;

	cellForView(for_: NSView): NSGridCell;

	columnAtIndex(at: number): NSGridColumn;

	indexOfColumn(of: NSGridColumn): number;

	indexOfRow(of: NSGridRow): number;

	insertColumnAtIndexWithViews(at: number, with_: NSArray<NSView>): NSGridColumn;

	insertRowAtIndexWithViews(at: number, with_: NSArray<NSView>): NSGridRow;

	mergeCellsInHorizontalRangeVerticalRange(inHorizontalRange: NSRange, verticalRange: NSRange): void;

	moveColumnAtIndexToIndex(at: number, to: number): void;

	moveRowAtIndexToIndex(at: number, to: number): void;

	removeColumnAtIndex(at: number): void;

	removeRowAtIndex(at: number): void;

	rowAtIndex(at: number): NSGridRow;
}

declare var NSGridViewSizeForContent: number;

declare class NSGroupTouchBarItem extends NSTouchBarItem {

	static alertStyleGroupItemWithIdentifier(alertStyleWithIdentifier: string): NSGroupTouchBarItem;

	static groupItemWithIdentifierItems(identifier: string, items: NSArray<NSTouchBarItem>): NSGroupTouchBarItem;

	static groupItemWithIdentifierItemsAllowedCompressionOptions(identifier: string, items: NSArray<NSTouchBarItem>, allowedCompressionOptions: NSUserInterfaceCompressionOptions): NSGroupTouchBarItem;

	setCustomizationLabel(_: string)

	customizationLabel: string;

	readonly effectiveCompressionOptions: NSUserInterfaceCompressionOptions;

	setGroupTouchBar(_: NSTouchBar)

	groupTouchBar: NSTouchBar;

	setGroupUserInterfaceLayoutDirection(_: NSUserInterfaceLayoutDirection)

	groupUserInterfaceLayoutDirection: NSUserInterfaceLayoutDirection;

	setPreferredItemWidth(_: number)

	preferredItemWidth: number;

	setPrefersEqualWidths(_: boolean)

	prefersEqualWidths: boolean;

	setPrioritizedCompressionOptions(_: NSArray<NSUserInterfaceCompressionOptions>)

	prioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>;
}

declare var NSHTMLTextDocumentType: string;

declare var NSHandlesContentAsCompoundValueBindingOption: string;

declare class NSHapticFeedbackManager extends NSObject {

	static defaultPerformer(): NSHapticFeedbackPerformer;
}

enum NSHapticFeedbackPattern {

	Generic = 0,

	Alignment = 1,

	LevelChange = 2
}

globalThis.NSHapticFeedbackPattern = NSHapticFeedbackPattern;

enum NSHapticFeedbackPerformanceTime {

	Default = 0,

	Now = 1,

	DrawCompleted = 2
}

globalThis.NSHapticFeedbackPerformanceTime = NSHapticFeedbackPerformanceTime;

interface NSHapticFeedbackPerformer extends NSObjectProtocol {

	performFeedbackPatternPerformanceTime(_: NSHapticFeedbackPattern, performanceTime: NSHapticFeedbackPerformanceTime): void;
}
declare var NSHapticFeedbackPerformer: {

	prototype: NSHapticFeedbackPerformer;
};

declare var NSHeaderTitleBinding: string;

declare const NSHelpFunctionKey: number;

declare class NSHelpManager extends NSObject {

	static setContextHelpModeActive(_: boolean)

	isContextHelpModeActive: boolean;

	static sharedHelpManager(): NSHelpManager;

	contextHelpForObject(for_: any): NSAttributedString;

	findStringInBook(_: string, inBook?: string): void;

	openHelpAnchorInBook(_: string, inBook?: string): void;

	registerBooksInBundle(in_: NSBundle): boolean;

	removeContextHelpForObject(for_: any): void;

	setContextHelpForObject(_: NSAttributedString, for_: any): void;

	showContextHelpForObjectLocationHint(for_: any, locationHint: CGPoint): boolean;
}

declare var NSHiddenBinding: string;

declare const NSHomeFunctionKey: number;

declare var NSHourMinuteDatePickerElementFlag: NSDatePickerElementFlags;

declare var NSHourMinuteSecondDatePickerElementFlag: NSDatePickerElementFlags;

declare var NSHyphenationFactorDocumentAttribute: string;

interface NSIgnoreMisspelledWords {

	ignoreSpelling(_?: any): void;
}
declare var NSIgnoreMisspelledWords: {

	prototype: NSIgnoreMisspelledWords;
};

declare var NSIllegalSelectorException: string;

declare const NSIllegalTextMovement: number;

declare class NSImage extends NSObject implements NSCopying, NSPasteboardReading, NSPasteboardWriting, NSSecureCoding {

	static canInitWithPasteboard(with_: NSPasteboard): boolean;

	static imageNamed(named: string): NSImage;

	static imageWithSizeFlippedDrawingHandler(size: CGSize, flipped: boolean, drawingHandler: (p1: CGRect) => boolean): NSImage;

	static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardReadingOptions;

	readonly TIFFRepresentation: NSData;

	setAccessibilityDescription(_: string)

	accessibilityDescription: string;

	setAlignmentRect(_: CGRect)

	alignmentRect: CGRect;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setCacheMode(_: NSImageCacheMode)

	cacheMode: NSImageCacheMode;

	setCapInsets(_: NSEdgeInsets)

	capInsets: NSEdgeInsets;

	setDelegate(_: NSImageDelegate)

	delegate: NSImageDelegate;

	setMatchesOnMultipleResolution(_: boolean)

	matchesOnMultipleResolution: boolean;

	setMatchesOnlyOnBestFittingAxis(_: boolean)

	matchesOnlyOnBestFittingAxis: boolean;

	setPrefersColorMatch(_: boolean)

	prefersColorMatch: boolean;

	readonly representations: NSArray<NSImageRep>;

	setResizingMode(_: NSImageResizingMode)

	resizingMode: NSImageResizingMode;

	setSize(_: CGSize)

	size: CGSize;

	setTemplate(_: boolean)

	isTemplate: boolean;

	setUsesEPSOnResolutionMismatch(_: boolean)

	usesEPSOnResolutionMismatch: boolean;

	readonly isValid: boolean;

	static imageTypes(): NSArray<string>;

	static imageUnfilteredTypes(): NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(byReferencingFile: string);

	static create(byReferencingURL: NSURL);

	static create(CGImage: any, size: CGSize);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(contentsOfFile: string);

	static create(contentsOfURL: NSURL);

	static create(data: NSData);

	static create(dataIgnoringOrientation: NSData);

	static create(iconRef: any);

	static create(pasteboard: NSPasteboard);

	static create(pasteboardPropertyList: any, ofType: string); // inherited from NSPasteboardReading

	static create(size: CGSize);

	CGImageForProposedRectContextHints(forProposedRect?: CGRect, context?: NSGraphicsContext, hints?: NSDictionary<string, any>): any;

	TIFFRepresentationUsingCompressionFactor(using: NSTIFFCompression, factor: number): NSData;

	addRepresentation(_: NSImageRep): void;

	addRepresentations(_: NSArray<NSImageRep>): void;

	bestRepresentationForRectContextHints(for_: CGRect, context?: NSGraphicsContext, hints?: NSDictionary<string, any>): NSImageRep;

	cancelIncrementalLoad(): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	drawAtPointFromRectOperationFraction(at: CGPoint, from: CGRect, operation: NSCompositingOperation, fraction: number): void;

	drawInRect(in_: CGRect): void;

	drawInRectFromRectOperationFraction(in_: CGRect, from: CGRect, operation: NSCompositingOperation, fraction: number): void;

	drawInRectFromRectOperationFractionRespectFlippedHints(in_: CGRect, from: CGRect, operation: NSCompositingOperation, fraction: number, respectFlipped: boolean, hints?: NSDictionary<string, any>): void;

	drawRepresentationInRect(_: NSImageRep, in_: CGRect): boolean;

	encodeWithCoder(_: NSCoder): void;

	hitTestRectWithImageDestinationRectContextHintsFlipped(_: CGRect, withDestinationRect: CGRect, context?: NSGraphicsContext, hints?: NSDictionary<string, any>, flipped: boolean): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	layerContentsForContentsScale(forContentsScale: number): any;

	lockFocus(): void;

	lockFocusFlipped(_: boolean): void;

	name(): string;

	pasteboardPropertyListForType(forType: string): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	recache(): void;

	recommendedLayerContentsScale(_: number): number;

	removeRepresentation(_: NSImageRep): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setName(_?: string): boolean;

	unlockFocus(): void;

	writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
}

enum NSImageAlignment {

	Center = 0,

	Top = 1,

	TopLeft = 2,

	TopRight = 3,

	Left = 4,

	Bottom = 5,

	BottomLeft = 6,

	BottomRight = 7,

	Right = 8
}

globalThis.NSImageAlignment = NSImageAlignment;

declare var NSImageBinding: string;

declare var NSImageCacheException: string;

enum NSImageCacheMode {

	Default = 0,

	Always = 1,

	BySize = 2,

	Never = 3
}

globalThis.NSImageCacheMode = NSImageCacheMode;

declare class NSImageCell extends NSCell implements NSCoding, NSCopying {

	setImageAlignment(_: NSImageAlignment)

	imageAlignment: NSImageAlignment;

	setImageFrameStyle(_: NSImageFrameStyle)

	imageFrameStyle: NSImageFrameStyle;

	setImageScaling(_: NSImageScaling)

	imageScaling: NSImageScaling;

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var NSImageColorSyncProfileData: string;

declare var NSImageCompressionFactor: string;

declare var NSImageCompressionMethod: string;

declare var NSImageCurrentFrame: string;

declare var NSImageCurrentFrameDuration: string;

interface NSImageDelegate extends NSObjectProtocol {

	imageDidLoadRepresentationWithStatus?(_: NSImage, didLoadRepresentation: NSImageRep, with_: NSImageLoadStatus): void;

	imageDidLoadPartOfRepresentationWithValidRows?(_: NSImage, didLoadPartOfRepresentation: NSImageRep, withValidRows: number): void;

	imageDidLoadRepresentationHeader?(_: NSImage, didLoadRepresentationHeader: NSImageRep): void;

	imageWillLoadRepresentation?(_: NSImage, willLoadRepresentation: NSImageRep): void;

	imageDidNotDrawInRect?(_: NSImage, in_: CGRect): NSImage;
}
declare var NSImageDelegate: {

	prototype: NSImageDelegate;
};

declare var NSImageDitherTransparency: string;

declare var NSImageEXIFData: string;

declare var NSImageFallbackBackgroundColor: string;

declare var NSImageFrameCount: string;

enum NSImageFrameStyle {

	None = 0,

	Photo = 1,

	GrayBezel = 2,

	Groove = 3,

	Button = 4
}

globalThis.NSImageFrameStyle = NSImageFrameStyle;

declare var NSImageGamma: string;

declare var NSImageHintCTM: string;

declare var NSImageHintInterpolation: string;

declare var NSImageHintUserInterfaceLayoutDirection: string;

declare var NSImageInterlaced: string;

enum NSImageInterpolation {

	Default = 0,

	None = 1,

	Low = 2,

	Medium = 4,

	High = 3
}

globalThis.NSImageInterpolation = NSImageInterpolation;

enum NSImageLayoutDirection {

	Unspecified = -1,

	LeftToRight = 2,

	RightToLeft = 3
}

globalThis.NSImageLayoutDirection = NSImageLayoutDirection;

enum NSImageLoadStatus {

	Completed = 0,

	Cancelled = 1,

	InvalidData = 2,

	UnexpectedEOF = 3,

	ReadError = 4
}

globalThis.NSImageLoadStatus = NSImageLoadStatus;

declare var NSImageLoopCount: string;

declare var NSImageNameActionTemplate: string;

declare var NSImageNameAddTemplate: string;

declare var NSImageNameAdvanced: string;

declare var NSImageNameApplicationIcon: string;

declare var NSImageNameBluetoothTemplate: string;

declare var NSImageNameBonjour: string;

declare var NSImageNameBookmarksTemplate: string;

declare var NSImageNameCaution: string;

declare var NSImageNameColorPanel: string;

declare var NSImageNameColumnViewTemplate: string;

declare var NSImageNameComputer: string;

declare var NSImageNameEnterFullScreenTemplate: string;

declare var NSImageNameEveryone: string;

declare var NSImageNameExitFullScreenTemplate: string;

declare var NSImageNameFlowViewTemplate: string;

declare var NSImageNameFolder: string;

declare var NSImageNameFolderBurnable: string;

declare var NSImageNameFolderSmart: string;

declare var NSImageNameFollowLinkFreestandingTemplate: string;

declare var NSImageNameFontPanel: string;

declare var NSImageNameGoBackTemplate: string;

declare var NSImageNameGoForwardTemplate: string;

declare var NSImageNameGoLeftTemplate: string;

declare var NSImageNameGoRightTemplate: string;

declare var NSImageNameHomeTemplate: string;

declare var NSImageNameIChatTheaterTemplate: string;

declare var NSImageNameIconViewTemplate: string;

declare var NSImageNameInfo: string;

declare var NSImageNameInvalidDataFreestandingTemplate: string;

declare var NSImageNameLeftFacingTriangleTemplate: string;

declare var NSImageNameListViewTemplate: string;

declare var NSImageNameLockLockedTemplate: string;

declare var NSImageNameLockUnlockedTemplate: string;

declare var NSImageNameMenuMixedStateTemplate: string;

declare var NSImageNameMenuOnStateTemplate: string;

declare var NSImageNameMobileMe: string;

declare var NSImageNameMultipleDocuments: string;

declare var NSImageNameNetwork: string;

declare var NSImageNamePathTemplate: string;

declare var NSImageNamePreferencesGeneral: string;

declare var NSImageNameQuickLookTemplate: string;

declare var NSImageNameRefreshFreestandingTemplate: string;

declare var NSImageNameRefreshTemplate: string;

declare var NSImageNameRemoveTemplate: string;

declare var NSImageNameRevealFreestandingTemplate: string;

declare var NSImageNameRightFacingTriangleTemplate: string;

declare var NSImageNameShareTemplate: string;

declare var NSImageNameSlideshowTemplate: string;

declare var NSImageNameSmartBadgeTemplate: string;

declare var NSImageNameStatusAvailable: string;

declare var NSImageNameStatusNone: string;

declare var NSImageNameStatusPartiallyAvailable: string;

declare var NSImageNameStatusUnavailable: string;

declare var NSImageNameStopProgressFreestandingTemplate: string;

declare var NSImageNameStopProgressTemplate: string;

declare var NSImageNameTouchBarAddDetailTemplate: string;

declare var NSImageNameTouchBarAddTemplate: string;

declare var NSImageNameTouchBarAlarmTemplate: string;

declare var NSImageNameTouchBarAudioInputMuteTemplate: string;

declare var NSImageNameTouchBarAudioInputTemplate: string;

declare var NSImageNameTouchBarAudioOutputMuteTemplate: string;

declare var NSImageNameTouchBarAudioOutputVolumeHighTemplate: string;

declare var NSImageNameTouchBarAudioOutputVolumeLowTemplate: string;

declare var NSImageNameTouchBarAudioOutputVolumeMediumTemplate: string;

declare var NSImageNameTouchBarAudioOutputVolumeOffTemplate: string;

declare var NSImageNameTouchBarBookmarksTemplate: string;

declare var NSImageNameTouchBarColorPickerFill: string;

declare var NSImageNameTouchBarColorPickerFont: string;

declare var NSImageNameTouchBarColorPickerStroke: string;

declare var NSImageNameTouchBarCommunicationAudioTemplate: string;

declare var NSImageNameTouchBarCommunicationVideoTemplate: string;

declare var NSImageNameTouchBarComposeTemplate: string;

declare var NSImageNameTouchBarDeleteTemplate: string;

declare var NSImageNameTouchBarDownloadTemplate: string;

declare var NSImageNameTouchBarEnterFullScreenTemplate: string;

declare var NSImageNameTouchBarExitFullScreenTemplate: string;

declare var NSImageNameTouchBarFastForwardTemplate: string;

declare var NSImageNameTouchBarFolderCopyToTemplate: string;

declare var NSImageNameTouchBarFolderMoveToTemplate: string;

declare var NSImageNameTouchBarFolderTemplate: string;

declare var NSImageNameTouchBarGetInfoTemplate: string;

declare var NSImageNameTouchBarGoBackTemplate: string;

declare var NSImageNameTouchBarGoDownTemplate: string;

declare var NSImageNameTouchBarGoForwardTemplate: string;

declare var NSImageNameTouchBarGoUpTemplate: string;

declare var NSImageNameTouchBarHistoryTemplate: string;

declare var NSImageNameTouchBarIconViewTemplate: string;

declare var NSImageNameTouchBarListViewTemplate: string;

declare var NSImageNameTouchBarMailTemplate: string;

declare var NSImageNameTouchBarNewFolderTemplate: string;

declare var NSImageNameTouchBarNewMessageTemplate: string;

declare var NSImageNameTouchBarOpenInBrowserTemplate: string;

declare var NSImageNameTouchBarPauseTemplate: string;

declare var NSImageNameTouchBarPlayPauseTemplate: string;

declare var NSImageNameTouchBarPlayTemplate: string;

declare var NSImageNameTouchBarPlayheadTemplate: string;

declare var NSImageNameTouchBarQuickLookTemplate: string;

declare var NSImageNameTouchBarRecordStartTemplate: string;

declare var NSImageNameTouchBarRecordStopTemplate: string;

declare var NSImageNameTouchBarRefreshTemplate: string;

declare var NSImageNameTouchBarRemoveTemplate: string;

declare var NSImageNameTouchBarRewindTemplate: string;

declare var NSImageNameTouchBarRotateLeftTemplate: string;

declare var NSImageNameTouchBarRotateRightTemplate: string;

declare var NSImageNameTouchBarSearchTemplate: string;

declare var NSImageNameTouchBarShareTemplate: string;

declare var NSImageNameTouchBarSidebarTemplate: string;

declare var NSImageNameTouchBarSkipAhead15SecondsTemplate: string;

declare var NSImageNameTouchBarSkipAhead30SecondsTemplate: string;

declare var NSImageNameTouchBarSkipAheadTemplate: string;

declare var NSImageNameTouchBarSkipBack15SecondsTemplate: string;

declare var NSImageNameTouchBarSkipBack30SecondsTemplate: string;

declare var NSImageNameTouchBarSkipBackTemplate: string;

declare var NSImageNameTouchBarSkipToEndTemplate: string;

declare var NSImageNameTouchBarSkipToStartTemplate: string;

declare var NSImageNameTouchBarSlideshowTemplate: string;

declare var NSImageNameTouchBarTagIconTemplate: string;

declare var NSImageNameTouchBarTextBoldTemplate: string;

declare var NSImageNameTouchBarTextBoxTemplate: string;

declare var NSImageNameTouchBarTextCenterAlignTemplate: string;

declare var NSImageNameTouchBarTextItalicTemplate: string;

declare var NSImageNameTouchBarTextJustifiedAlignTemplate: string;

declare var NSImageNameTouchBarTextLeftAlignTemplate: string;

declare var NSImageNameTouchBarTextListTemplate: string;

declare var NSImageNameTouchBarTextRightAlignTemplate: string;

declare var NSImageNameTouchBarTextStrikethroughTemplate: string;

declare var NSImageNameTouchBarTextUnderlineTemplate: string;

declare var NSImageNameTouchBarUserAddTemplate: string;

declare var NSImageNameTouchBarUserGroupTemplate: string;

declare var NSImageNameTouchBarUserTemplate: string;

declare var NSImageNameTouchBarVolumeDownTemplate: string;

declare var NSImageNameTouchBarVolumeUpTemplate: string;

declare var NSImageNameTrashEmpty: string;

declare var NSImageNameTrashFull: string;

declare var NSImageNameUser: string;

declare var NSImageNameUserAccounts: string;

declare var NSImageNameUserGroup: string;

declare var NSImageNameUserGuest: string;

declare var NSImageProgressive: string;

declare var NSImageRGBColorTable: string;

declare class NSImageRep extends NSObject implements NSCoding, NSCopying {

	static canInitWithData(with_: NSData): boolean;

	static canInitWithPasteboard(with_: NSPasteboard): boolean;

	static imageRepClassForData(for_: NSData): typeof NSObject;

	static imageRepClassForType(forType: string): typeof NSObject;

	static imageRepWithContentsOfFile(contentsOfFile: string): NSImageRep;

	static imageRepWithContentsOfURL(contentsOf: NSURL): NSImageRep;

	static imageRepWithPasteboard(pasteboard: NSPasteboard): NSImageRep;

	static imageRepsWithContentsOfFile(withContentsOfFile: string): NSArray<NSImageRep>;

	static imageRepsWithContentsOfURL(withContentsOf: NSURL): NSArray<NSImageRep>;

	static imageRepsWithPasteboard(with_: NSPasteboard): NSArray<NSImageRep>;

	static registerImageRepClass(_: typeof NSObject): void;

	static unregisterImageRepClass(_: typeof NSObject): void;

	setAlpha(_: boolean)

	hasAlpha: boolean;

	setBitsPerSample(_: number)

	bitsPerSample: number;

	setColorSpaceName(_: string)

	colorSpaceName: string;

	setLayoutDirection(_: NSImageLayoutDirection)

	layoutDirection: NSImageLayoutDirection;

	setOpaque(_: boolean)

	isOpaque: boolean;

	setPixelsHigh(_: number)

	pixelsHigh: number;

	setPixelsWide(_: number)

	pixelsWide: number;

	setSize(_: CGSize)

	size: CGSize;

	static imageTypes(): NSArray<string>;

	static imageUnfilteredTypes(): NSArray<string>;

	static registeredImageRepClasses(): NSArray<typeof NSObject>;

	static create(coder: NSCoder); // inherited from NSCoding

	CGImageForProposedRectContextHints(forProposedRect?: CGRect, context?: NSGraphicsContext, hints?: NSDictionary<string, any>): any;

	copyWithZone(_?: any): any;

	draw(): boolean;

	drawAtPoint(at: CGPoint): boolean;

	drawInRect(in_: CGRect): boolean;

	drawInRectFromRectOperationFractionRespectFlippedHints(in_: CGRect, from: CGRect, operation: NSCompositingOperation, fraction: number, respectFlipped: boolean, hints?: NSDictionary<string, any>): boolean;

	encodeWithCoder(_: NSCoder): void;
}

enum NSImageRepLoadStatus {

	UnknownType = -1,

	ReadingHeader = -2,

	WillNeedAllData = -3,

	InvalidData = -4,

	UnexpectedEOF = -5,

	Completed = -6
}

globalThis.NSImageRepLoadStatus = NSImageRepLoadStatus;

declare const NSImageRepMatchesDevice: number;

declare var NSImageRepRegistryDidChangeNotification: string;

enum NSImageResizingMode {

	Stretch = 0,

	Tile = 1
}

globalThis.NSImageResizingMode = NSImageResizingMode;

enum NSImageScaling {

	ImageScaleProportionallyDown = 0,

	ImageScaleAxesIndependently = 1,

	ImageScaleNone = 2,

	ImageScaleProportionallyUpOrDown = 3,

	ScaleProportionally = 0,

	ScaleToFit = 1,

	ScaleNone = 2
}

globalThis.NSImageScaling = NSImageScaling;

declare class NSImageView extends NSControl implements NSAccessibilityImage, NSMenuItemValidation {

	static imageViewWithImage(image: NSImage): NSImageView;

	setAllowsCutCopyPaste(_: boolean)

	allowsCutCopyPaste: boolean;

	setAnimates(_: boolean)

	animates: boolean;

	setContentTintColor(_: NSColor)

	contentTintColor: NSColor;

	setEditable(_: boolean)

	isEditable: boolean;

	setImage(_: NSImage)

	image: NSImage;

	setImageAlignment(_: NSImageAlignment)

	imageAlignment: NSImageAlignment;

	setImageFrameStyle(_: NSImageFrameStyle)

	imageFrameStyle: NSImageFrameStyle;

	setImageScaling(_: NSImageScaling)

	imageScaling: NSImageScaling;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityFrame(): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLabel(): string;

	accessibilityParent(): any;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isAccessibilityFocused(): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	validateMenuItem(_: NSMenuItem): boolean;
}

declare var NSIncludedKeysBinding: string;

declare var NSInitialKeyBinding: string;

declare var NSInitialValueBinding: string;

interface NSInputServerMouseTracker {
}
declare var NSInputServerMouseTracker: {

	prototype: NSInputServerMouseTracker;
};

interface NSInputServiceProvider {
}
declare var NSInputServiceProvider: {

	prototype: NSInputServiceProvider;
};

declare const NSInsertCharFunctionKey: number;

declare const NSInsertFunctionKey: number;

declare const NSInsertLineFunctionKey: number;

declare var NSInsertsNullPlaceholderBindingOption: string;

declare var NSInvokesSeparatelyWithArrayObjectsBindingOption: string;

declare function NSIsControllerMarker(object_: any): boolean;

declare var NSIsIndeterminateBinding: string;

declare var NSKernAttributeName: string;

declare var NSKeywordsDocumentAttribute: string;

declare var NSLabelBinding: string;

declare class NSLayoutAnchor<AnchorType> extends NSObject implements NSCoding, NSCopying {

	readonly constraintsAffectingLayout: NSArray<NSLayoutConstraint>;

	readonly hasAmbiguousLayout: boolean;

	readonly item: any;

	readonly name: string;

	static create(coder: NSCoder); // inherited from NSCoding

	constraintWithEqualTo(equalTo: NSLayoutAnchor<AnchorType>): NSLayoutConstraint;

	constraintWithEqualToConstant(equalTo: NSLayoutAnchor<AnchorType>, constant: number): NSLayoutConstraint;

	constraintWithGreaterThanOrEqualTo(greaterThanOrEqualTo: NSLayoutAnchor<AnchorType>): NSLayoutConstraint;

	constraintWithGreaterThanOrEqualToConstant(greaterThanOrEqualTo: NSLayoutAnchor<AnchorType>, constant: number): NSLayoutConstraint;

	constraintWithLessThanOrEqualTo(lessThanOrEqualTo: NSLayoutAnchor<AnchorType>): NSLayoutConstraint;

	constraintWithLessThanOrEqualToConstant(lessThanOrEqualTo: NSLayoutAnchor<AnchorType>, constant: number): NSLayoutConstraint;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NSLayoutAttribute {

	Left = 1,

	Right = 2,

	Top = 3,

	Bottom = 4,

	Leading = 5,

	Trailing = 6,

	Width = 7,

	Height = 8,

	CenterX = 9,

	CenterY = 10,

	LastBaseline = 11,

	Baseline = 11,

	FirstBaseline = 12,

	NotAnAttribute = 0
}

globalThis.NSLayoutAttribute = NSLayoutAttribute;

declare class NSLayoutConstraint extends NSObject implements NSAnimatablePropertyContainer {

	static activateConstraints(_: NSArray<NSLayoutConstraint>): void;

	static constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(item: any, attribute: NSLayoutAttribute, relatedBy: NSLayoutRelation, toItem?: any, attribute: NSLayoutAttribute, multiplier: number, constant: number): NSLayoutConstraint;

	static constraintsWithVisualFormatOptionsMetricsViews(withVisualFormat: string, options: NSLayoutFormatOptions, metrics?: NSDictionary<string, any>, views: NSDictionary<string, any>): NSArray<NSLayoutConstraint>;

	static deactivateConstraints(_: NSArray<NSLayoutConstraint>): void;

	static defaultAnimationForKey(forKey: string): any;

	setActive(_: boolean)

	isActive: boolean;

	setConstant(_: number)

	constant: number;

	readonly firstAnchor: NSLayoutAnchor<any>;

	readonly firstAttribute: NSLayoutAttribute;

	readonly firstItem: any;

	setIdentifier(_: string)

	identifier: string;

	readonly multiplier: number;

	setPriority(_: number)

	priority: number;

	readonly relation: NSLayoutRelation;

	readonly secondAnchor: NSLayoutAnchor<any>;

	readonly secondAttribute: NSLayoutAttribute;

	readonly secondItem: any;

	setShouldBeArchived(_: boolean)

	shouldBeArchived: boolean;

	setAnimations(_: NSDictionary<string, any>)

	animations: NSDictionary<string, any>; // inherited from NSAnimatablePropertyContainer

	animationForKey(forKey: string): any;

	animator(): this;
}

enum NSLayoutConstraintOrientation {

	Horizontal = 0,

	Vertical = 1
}

globalThis.NSLayoutConstraintOrientation = NSLayoutConstraintOrientation;

declare class NSLayoutDimension extends NSLayoutAnchor<NSLayoutDimension> {

	constraintEqualToAnchorMultiplier(equalTo: NSLayoutDimension, multiplier: number): NSLayoutConstraint;

	constraintEqualToAnchorMultiplierConstant(equalTo: NSLayoutDimension, multiplier: number, constant: number): NSLayoutConstraint;

	constraintEqualToConstant(equalToConstant: number): NSLayoutConstraint;

	constraintGreaterThanOrEqualToAnchorMultiplier(greaterThanOrEqualTo: NSLayoutDimension, multiplier: number): NSLayoutConstraint;

	constraintGreaterThanOrEqualToAnchorMultiplierConstant(greaterThanOrEqualTo: NSLayoutDimension, multiplier: number, constant: number): NSLayoutConstraint;

	constraintGreaterThanOrEqualToConstant(greaterThanOrEqualToConstant: number): NSLayoutConstraint;

	constraintLessThanOrEqualToAnchorMultiplier(lessThanOrEqualTo: NSLayoutDimension, multiplier: number): NSLayoutConstraint;

	constraintLessThanOrEqualToAnchorMultiplierConstant(lessThanOrEqualTo: NSLayoutDimension, multiplier: number, constant: number): NSLayoutConstraint;

	constraintLessThanOrEqualToConstant(lessThanOrEqualToConstant: number): NSLayoutConstraint;
}

enum NSLayoutFormatOptions {

	AlignAllLeft = 2,

	AlignAllRight = 4,

	AlignAllTop = 8,

	AlignAllBottom = 16,

	AlignAllLeading = 32,

	AlignAllTrailing = 64,

	AlignAllCenterX = 512,

	AlignAllCenterY = 1024,

	AlignAllLastBaseline = 2048,

	AlignAllFirstBaseline = 4096,

	AlignAllBaseline = 2048,

	AlignmentMask = 65535,

	DirectionLeadingToTrailing = 0,

	DirectionLeftToRight = 65536,

	DirectionRightToLeft = 131072,

	DirectionMask = 196608
}

globalThis.NSLayoutFormatOptions = NSLayoutFormatOptions;

declare class NSLayoutGuide extends NSObject implements NSCoding, NSUserInterfaceItemIdentification {

	readonly bottomAnchor: NSLayoutYAxisAnchor;

	readonly centerXAnchor: NSLayoutXAxisAnchor;

	readonly centerYAnchor: NSLayoutYAxisAnchor;

	readonly frame: CGRect;

	readonly hasAmbiguousLayout: boolean;

	readonly heightAnchor: NSLayoutDimension;

	readonly leadingAnchor: NSLayoutXAxisAnchor;

	readonly leftAnchor: NSLayoutXAxisAnchor;

	setOwningView(_: NSView)

	owningView: NSView;

	readonly rightAnchor: NSLayoutXAxisAnchor;

	readonly topAnchor: NSLayoutYAxisAnchor;

	readonly trailingAnchor: NSLayoutXAxisAnchor;

	readonly widthAnchor: NSLayoutDimension;

	setIdentifier(_: string)

	identifier: string; // inherited from NSUserInterfaceItemIdentification

	static create(coder: NSCoder); // inherited from NSCoding

	constraintsAffectingLayoutForOrientation(for_: NSLayoutConstraintOrientation): NSArray<NSLayoutConstraint>;

	encodeWithCoder(_: NSCoder): void;
}

declare class NSLayoutManager extends NSObject implements NSSecureCoding, NSGlyphStorage {

	setAllowsNonContiguousLayout(_: boolean)

	allowsNonContiguousLayout: boolean;

	setBackgroundLayoutEnabled(_: boolean)

	backgroundLayoutEnabled: boolean;

	setDefaultAttachmentScaling(_: NSImageScaling)

	defaultAttachmentScaling: NSImageScaling;

	setDelegate(_: NSLayoutManagerDelegate)

	delegate: NSLayoutManagerDelegate;

	readonly extraLineFragmentRect: CGRect;

	readonly extraLineFragmentTextContainer: NSTextContainer;

	readonly extraLineFragmentUsedRect: CGRect;

	readonly firstTextView: NSTextView;

	setGlyphGenerator(_: NSGlyphGenerator)

	glyphGenerator: NSGlyphGenerator;

	readonly hasNonContiguousLayout: boolean;

	setLimitsLayoutForSuspiciousContents(_: boolean)

	limitsLayoutForSuspiciousContents: boolean;

	readonly numberOfGlyphs: number;

	setShowsControlCharacters(_: boolean)

	showsControlCharacters: boolean;

	setShowsInvisibleCharacters(_: boolean)

	showsInvisibleCharacters: boolean;

	readonly textContainers: NSArray<NSTextContainer>;

	setTextStorage(_: NSTextStorage)

	textStorage: NSTextStorage;

	readonly textViewForBeginningOfSelection: NSTextView;

	setTypesetter(_: NSTypesetter)

	typesetter: NSTypesetter;

	setTypesetterBehavior(_: NSTypesetterBehavior)

	typesetterBehavior: NSTypesetterBehavior;

	setUsesDefaultHyphenation(_: boolean)

	usesDefaultHyphenation: boolean;

	setUsesFontLeading(_: boolean)

	usesFontLeading: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	CGGlyphAtIndex(at: number): number;

	CGGlyphAtIndexIsValidIndex(at: number, isValidIndex?: boolean): number;

	addTemporaryAttributeValueForCharacterRange(_: string, value: any, forCharacterRange: NSRange): void;

	addTemporaryAttributesForCharacterRange(_: NSDictionary<string, any>, forCharacterRange: NSRange): void;

	addTextContainer(_: NSTextContainer): void;

	attachmentSizeForGlyphAtIndex(forGlyphAt: number): CGSize;

	attributedString(): NSAttributedString;

	boundingRectForGlyphRangeInTextContainer(forGlyphRange: NSRange, in_: NSTextContainer): CGRect;

	boundsRectForTextBlockAtIndexEffectiveRange(for_: NSTextBlock, at: number, effectiveRange?: NSRange): CGRect;

	boundsRectForTextBlockGlyphRange(for_: NSTextBlock, glyphRange: NSRange): CGRect;

	characterIndexForGlyphAtIndex(at: number): number;

	characterIndexForPointInTextContainerFractionOfDistanceBetweenInsertionPoints(for_: CGPoint, in_: NSTextContainer, fractionOfDistanceBetweenInsertionPoints?: number): number;

	characterRangeForGlyphRangeActualGlyphRange(forGlyphRange: NSRange, actualGlyphRange?: NSRange): NSRange;

	defaultBaselineOffsetForFont(for_: NSFont): number;

	defaultLineHeightForFont(for_: NSFont): number;

	drawBackgroundForGlyphRangeAtPoint(forGlyphRange: NSRange, at: CGPoint): void;

	drawGlyphsForGlyphRangeAtPoint(forGlyphRange: NSRange, at: CGPoint): void;

	drawStrikethroughForGlyphRangeStrikethroughTypeBaselineOffsetLineFragmentRectLineFragmentGlyphRangeContainerOrigin(forGlyphRange: NSRange, strikethroughType: NSUnderlineStyle, baselineOffset: number, lineFragmentRect: CGRect, lineFragmentGlyphRange: NSRange, containerOrigin: CGPoint): void;

	drawUnderlineForGlyphRangeUnderlineTypeBaselineOffsetLineFragmentRectLineFragmentGlyphRangeContainerOrigin(forGlyphRange: NSRange, underlineType: NSUnderlineStyle, baselineOffset: number, lineFragmentRect: CGRect, lineFragmentGlyphRange: NSRange, containerOrigin: CGPoint): void;

	drawsOutsideLineFragmentForGlyphAtIndex(forGlyphAt: number): boolean;

	encodeWithCoder(_: NSCoder): void;

	ensureGlyphsForCharacterRange(forCharacterRange: NSRange): void;

	ensureGlyphsForGlyphRange(forGlyphRange: NSRange): void;

	ensureLayoutForBoundingRectInTextContainer(forBoundingRect: CGRect, in_: NSTextContainer): void;

	ensureLayoutForCharacterRange(forCharacterRange: NSRange): void;

	ensureLayoutForGlyphRange(forGlyphRange: NSRange): void;

	ensureLayoutForTextContainer(for_: NSTextContainer): void;

	enumerateEnclosingRectsForGlyphRangeWithinSelectedGlyphRangeInTextContainerUsingBlock(forGlyphRange: NSRange, withinSelectedGlyphRange: NSRange, in_: NSTextContainer, using: (p1: CGRect, p2: boolean) => void): void;

	enumerateLineFragmentsForGlyphRangeUsingBlock(forGlyphRange: NSRange, using: (p1: CGRect, p2: CGRect, p3: NSTextContainer, p4: NSRange, p5: boolean) => void): void;

	fillBackgroundRectArrayCountForCharacterRangeColor(_: CGRect, count: number, forCharacterRange: NSRange, color: NSColor): void;

	firstUnlaidCharacterIndex(): number;

	firstUnlaidGlyphIndex(): number;

	fractionOfDistanceThroughGlyphForPointInTextContainer(for_: CGPoint, in_: NSTextContainer): number;

	getFirstUnlaidCharacterIndexGlyphIndex(_?: number, glyphIndex?: number): void;

	getGlyphsInRangeGlyphsPropertiesCharacterIndexesBidiLevels(in_: NSRange, glyphs?: number, properties?: NSGlyphProperty, characterIndexes?: number, bidiLevels?: string): number;

	getLineFragmentInsertionPointsForCharacterAtIndexAlternatePositionsInDisplayOrderPositionsCharacterIndexes(forCharacterAt: number, alternatePositions: boolean, inDisplayOrder: boolean, positions?: number, characterIndexes?: number): number;

	glyphAtIndex(at: number): number;

	glyphAtIndexIsValidIndex(at: number, isValidIndex?: boolean): number;

	glyphIndexForCharacterAtIndex(at: number): number;

	glyphIndexForPointInTextContainer(for_: CGPoint, in_: NSTextContainer): number;

	glyphIndexForPointInTextContainerFractionOfDistanceThroughGlyph(for_: CGPoint, in_: NSTextContainer, fractionOfDistanceThroughGlyph?: number): number;

	glyphRangeForBoundingRectInTextContainer(forBoundingRect: CGRect, in_: NSTextContainer): NSRange;

	glyphRangeForBoundingRectWithoutAdditionalLayoutInTextContainer(forBoundingRectWithoutAdditionalLayout: CGRect, in_: NSTextContainer): NSRange;

	glyphRangeForCharacterRangeActualCharacterRange(forCharacterRange: NSRange, actualCharacterRange?: NSRange): NSRange;

	glyphRangeForTextContainer(for_: NSTextContainer): NSRange;

	insertGlyphsLengthForStartingGlyphAtIndexCharacterIndex(_: number, length: number, forStartingGlyphAt: number, characterIndex: number): void;

	insertTextContainerAtIndex(_: NSTextContainer, at: number): void;

	invalidateDisplayForCharacterRange(forCharacterRange: NSRange): void;

	invalidateDisplayForGlyphRange(forGlyphRange: NSRange): void;

	invalidateGlyphsForCharacterRangeChangeInLengthActualCharacterRange(forCharacterRange: NSRange, changeInLength: number, actualCharacterRange?: NSRange): void;

	invalidateLayoutForCharacterRangeActualCharacterRange(forCharacterRange: NSRange, actualCharacterRange?: NSRange): void;

	isValidGlyphIndex(_: number): boolean;

	layoutManagerOwnsFirstResponderInWindow(in_: NSWindow): boolean;

	layoutOptions(): number;

	layoutRectForTextBlockAtIndexEffectiveRange(for_: NSTextBlock, at: number, effectiveRange?: NSRange): CGRect;

	layoutRectForTextBlockGlyphRange(for_: NSTextBlock, glyphRange: NSRange): CGRect;

	lineFragmentRectForGlyphAtIndexEffectiveRange(forGlyphAt: number, effectiveRange?: NSRange): CGRect;

	lineFragmentRectForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(forGlyphAt: number, effectiveRange?: NSRange, withoutAdditionalLayout: boolean): CGRect;

	lineFragmentUsedRectForGlyphAtIndexEffectiveRange(forGlyphAt: number, effectiveRange?: NSRange): CGRect;

	lineFragmentUsedRectForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(forGlyphAt: number, effectiveRange?: NSRange, withoutAdditionalLayout: boolean): CGRect;

	locationForGlyphAtIndex(forGlyphAt: number): CGPoint;

	notShownAttributeForGlyphAtIndex(forGlyphAt: number): boolean;

	processEditingForTextStorageEditedRangeChangeInLengthInvalidatedRange(for_: NSTextStorage, edited: NSTextStorageEditActions, range: NSRange, changeInLength: number, invalidatedRange: NSRange): void;

	propertyForGlyphAtIndex(at: number): NSGlyphProperty;

	rangeOfNominallySpacedGlyphsContainingIndex(ofNominallySpacedGlyphsContaining: number): NSRange;

	rectArrayForCharacterRangeWithinSelectedCharacterRangeInTextContainerRectCount(forCharacterRange: NSRange, withinSelectedCharacterRange: NSRange, in_: NSTextContainer, rectCount: number): CGRect;

	rectArrayForGlyphRangeWithinSelectedGlyphRangeInTextContainerRectCount(forGlyphRange: NSRange, withinSelectedGlyphRange: NSRange, in_: NSTextContainer, rectCount: number): CGRect;

	removeTemporaryAttributeForCharacterRange(_: string, forCharacterRange: NSRange): void;

	removeTextContainerAtIndex(at: number): void;

	replaceTextStorage(_: NSTextStorage): void;

	rulerAccessoryViewForTextViewParagraphStyleRulerEnabled(for_: NSTextView, paragraphStyle: NSParagraphStyle, ruler: NSRulerView, enabled: boolean): NSView;

	rulerMarkersForTextViewParagraphStyleRuler(for_: NSTextView, paragraphStyle: NSParagraphStyle, ruler: NSRulerView): NSArray<NSRulerMarker>;

	setAttachmentSizeForGlyphRange(_: CGSize, forGlyphRange: NSRange): void;

	setBoundsRectForTextBlockGlyphRange(_: CGRect, for_: NSTextBlock, glyphRange: NSRange): void;

	setDrawsOutsideLineFragmentForGlyphAtIndex(_: boolean, forGlyphAt: number): void;

	setExtraLineFragmentRectUsedRectTextContainer(_: CGRect, usedRect: CGRect, textContainer: NSTextContainer): void;

	setGlyphsPropertiesCharacterIndexesFontForGlyphRange(_: number, properties: NSGlyphProperty, characterIndexes: number, font: NSFont, forGlyphRange: NSRange): void;

	setIntAttributeValueForGlyphAtIndex(_: number, value: number, forGlyphAt: number): void;

	setLayoutRectForTextBlockGlyphRange(_: CGRect, for_: NSTextBlock, glyphRange: NSRange): void;

	setLineFragmentRectForGlyphRangeUsedRect(_: CGRect, forGlyphRange: NSRange, usedRect: CGRect): void;

	setLocationForStartOfGlyphRange(_: CGPoint, forStartOfGlyphRange: NSRange): void;

	setNotShownAttributeForGlyphAtIndex(_: boolean, forGlyphAt: number): void;

	setTemporaryAttributesForCharacterRange(_: NSDictionary<string, any>, forCharacterRange: NSRange): void;

	setTextContainerForGlyphRange(_: NSTextContainer, forGlyphRange: NSRange): void;

	showAttachmentCellInRectCharacterIndex(_: NSCell, in_: CGRect, characterIndex: number): void;

	showCGGlyphsPositionsCountFontTextMatrixAttributesInContext(_: number, positions: CGPoint, count: number, font: NSFont, textMatrix: CGAffineTransform, attributes: NSDictionary<string, any>, in_: any): void;

	strikethroughGlyphRangeStrikethroughTypeLineFragmentRectLineFragmentGlyphRangeContainerOrigin(_: NSRange, strikethroughType: NSUnderlineStyle, lineFragmentRect: CGRect, lineFragmentGlyphRange: NSRange, containerOrigin: CGPoint): void;

	temporaryAttributeAtCharacterIndexEffectiveRange(_: string, atCharacterIndex: number, effectiveRange?: NSRange): any;

	temporaryAttributeAtCharacterIndexLongestEffectiveRangeInRange(_: string, atCharacterIndex: number, longestEffectiveRange?: NSRange, in_: NSRange): any;

	temporaryAttributesAtCharacterIndexEffectiveRange(atCharacterIndex: number, effectiveRange?: NSRange): NSDictionary<string, any>;

	temporaryAttributesAtCharacterIndexLongestEffectiveRangeInRange(atCharacterIndex: number, longestEffectiveRange?: NSRange, in_: NSRange): NSDictionary<string, any>;

	textContainerChangedGeometry(_: NSTextContainer): void;

	textContainerChangedTextView(_: NSTextContainer): void;

	textContainerForGlyphAtIndexEffectiveRange(forGlyphAt: number, effectiveRange?: NSRange): NSTextContainer;

	textContainerForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(forGlyphAt: number, effectiveRange?: NSRange, withoutAdditionalLayout: boolean): NSTextContainer;

	truncatedGlyphRangeInLineFragmentForGlyphAtIndex(inLineFragmentForGlyphAt: number): NSRange;

	underlineGlyphRangeUnderlineTypeLineFragmentRectLineFragmentGlyphRangeContainerOrigin(_: NSRange, underlineType: NSUnderlineStyle, lineFragmentRect: CGRect, lineFragmentGlyphRange: NSRange, containerOrigin: CGPoint): void;

	usedRectForTextContainer(for_: NSTextContainer): CGRect;
}

interface NSLayoutManagerDelegate extends NSObjectProtocol {

	layoutManagerLineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(_: NSLayoutManager, lineSpacingAfterGlyphAt: number, withProposedLineFragmentRect: CGRect): number;

	layoutManagerParagraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect?(_: NSLayoutManager, paragraphSpacingBeforeGlyphAt: number, withProposedLineFragmentRect: CGRect): number;

	layoutManagerParagraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(_: NSLayoutManager, paragraphSpacingAfterGlyphAt: number, withProposedLineFragmentRect: CGRect): number;

	layoutManagerShouldUseActionForControlCharacterAtIndex?(_: NSLayoutManager, shouldUse: NSControlCharacterAction, forControlCharacterAt: number): NSControlCharacterAction;

	layoutManagerShouldBreakLineByWordBeforeCharacterAtIndex?(_: NSLayoutManager, shouldBreakLineByWordBeforeCharacterAt: number): boolean;

	layoutManagerShouldBreakLineByHyphenatingBeforeCharacterAtIndex?(_: NSLayoutManager, shouldBreakLineByHyphenatingBeforeCharacterAt: number): boolean;

	layoutManagerBoundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex?(_: NSLayoutManager, boundingBoxForControlGlyphAt: number, for_: NSTextContainer, proposedLineFragment: CGRect, glyphPosition: CGPoint, characterIndex: number): CGRect;

	layoutManagerShouldSetLineFragmentRectLineFragmentUsedRectBaselineOffsetInTextContainerForGlyphRange?(_: NSLayoutManager, shouldSetLineFragmentRect: CGRect, lineFragmentUsedRect: CGRect, baselineOffset: number, in_: NSTextContainer, forGlyphRange: NSRange): boolean;

	layoutManagerDidCompleteLayoutForTextContainerAtEnd?(_: NSLayoutManager, didCompleteLayoutFor?: NSTextContainer, atEnd: boolean): void;

	layoutManagerTextContainerDidChangeGeometryFromSize?(_: NSLayoutManager, textContainer: NSTextContainer, didChangeGeometryFrom: CGSize): void;

	layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange?(_: NSLayoutManager, shouldGenerateGlyphs: number, properties: NSGlyphProperty, characterIndexes: number, font: NSFont, forGlyphRange: NSRange): number;

	layoutManagerShouldUseTemporaryAttributesForDrawingToScreenAtCharacterIndexEffectiveRange?(_: NSLayoutManager, shouldUseTemporaryAttributes: NSDictionary<string, any>, forDrawingToScreen: boolean, atCharacterIndex: number, effectiveRange?: NSRange): NSDictionary<string, any>;

	layoutManagerDidInvalidateLayout?(_: NSLayoutManager): void;
}
declare var NSLayoutManagerDelegate: {

	prototype: NSLayoutManagerDelegate;
};

declare var NSLayoutPriorityDefaultHigh: number;

declare var NSLayoutPriorityDefaultLow: number;

declare var NSLayoutPriorityDragThatCanResizeWindow: number;

declare var NSLayoutPriorityDragThatCannotResizeWindow: number;

declare var NSLayoutPriorityFittingSizeCompression: number;

declare var NSLayoutPriorityRequired: number;

declare var NSLayoutPriorityWindowSizeStayPut: number;

enum NSLayoutRelation {

	LessThanOrEqual = -1,

	Equal = 0,

	GreaterThanOrEqual = 1
}

globalThis.NSLayoutRelation = NSLayoutRelation;

declare class NSLayoutXAxisAnchor extends NSLayoutAnchor<NSLayoutXAxisAnchor> {

	anchorWithOffsetToAnchor(to: NSLayoutXAxisAnchor): NSLayoutDimension;
}

declare class NSLayoutYAxisAnchor extends NSLayoutAnchor<NSLayoutYAxisAnchor> {

	anchorWithOffsetToAnchor(to: NSLayoutYAxisAnchor): NSLayoutDimension;
}

declare const NSLeftArrowFunctionKey: number;

declare var NSLeftMarginDocumentAttribute: string;

declare const NSLeftTextMovement: number;

declare class NSLevelIndicator extends NSControl {

	setCriticalFillColor(_: NSColor)

	criticalFillColor: NSColor;

	setCriticalValue(_: number)

	criticalValue: number;

	setDrawsTieredCapacityLevels(_: boolean)

	drawsTieredCapacityLevels: boolean;

	setEditable(_: boolean)

	isEditable: boolean;

	setFillColor(_: NSColor)

	fillColor: NSColor;

	setLevelIndicatorStyle(_: NSLevelIndicatorStyle)

	levelIndicatorStyle: NSLevelIndicatorStyle;

	setMaxValue(_: number)

	maxValue: number;

	setMinValue(_: number)

	minValue: number;

	setNumberOfMajorTickMarks(_: number)

	numberOfMajorTickMarks: number;

	setNumberOfTickMarks(_: number)

	numberOfTickMarks: number;

	setPlaceholderVisibility(_: NSLevelIndicatorPlaceholderVisibility)

	placeholderVisibility: NSLevelIndicatorPlaceholderVisibility;

	setRatingImage(_: NSImage)

	ratingImage: NSImage;

	setRatingPlaceholderImage(_: NSImage)

	ratingPlaceholderImage: NSImage;

	setTickMarkPosition(_: NSTickMarkPosition)

	tickMarkPosition: NSTickMarkPosition;

	setWarningFillColor(_: NSColor)

	warningFillColor: NSColor;

	setWarningValue(_: number)

	warningValue: number;

	rectOfTickMarkAtIndex(at: number): CGRect;

	tickMarkValueAtIndex(at: number): number;
}

declare class NSLevelIndicatorCell extends NSActionCell {

	setCriticalValue(_: number)

	criticalValue: number;

	setLevelIndicatorStyle(_: NSLevelIndicatorStyle)

	levelIndicatorStyle: NSLevelIndicatorStyle;

	setMaxValue(_: number)

	maxValue: number;

	setMinValue(_: number)

	minValue: number;

	setNumberOfMajorTickMarks(_: number)

	numberOfMajorTickMarks: number;

	setNumberOfTickMarks(_: number)

	numberOfTickMarks: number;

	setTickMarkPosition(_: NSTickMarkPosition)

	tickMarkPosition: NSTickMarkPosition;

	setWarningValue(_: number)

	warningValue: number;

	static create(levelIndicatorStyle: NSLevelIndicatorStyle);

	rectOfTickMarkAtIndex(at: number): CGRect;

	tickMarkValueAtIndex(at: number): number;
}

enum NSLevelIndicatorPlaceholderVisibility {

	Automatic = 0,

	Always = 1,

	WhileEditing = 2
}

globalThis.NSLevelIndicatorPlaceholderVisibility = NSLevelIndicatorPlaceholderVisibility;

enum NSLevelIndicatorStyle {

	Relevancy = 0,

	ContinuousCapacity = 1,

	DiscreteCapacity = 2,

	Rating = 3
}

globalThis.NSLevelIndicatorStyle = NSLevelIndicatorStyle;

declare var NSLigatureAttributeName: string;

declare var NSLightGray: number;

enum NSLineBreakMode {

	ByWordWrapping = 0,

	ByCharWrapping = 1,

	ByClipping = 2,

	ByTruncatingHead = 3,

	ByTruncatingTail = 4,

	ByTruncatingMiddle = 5
}

globalThis.NSLineBreakMode = NSLineBreakMode;

enum NSLineCapStyle {

	Butt = 0,

	Round = 1,

	Square = 2
}

globalThis.NSLineCapStyle = NSLineCapStyle;

enum NSLineJoinStyle {

	Miter = 0,

	Round = 1,

	Bevel = 2
}

globalThis.NSLineJoinStyle = NSLineJoinStyle;

enum NSLineMovementDirection {

	DoesntMove = 0,

	MovesLeft = 1,

	MovesRight = 2,

	MovesDown = 3,

	MovesUp = 4
}

globalThis.NSLineMovementDirection = NSLineMovementDirection;

declare const NSLineSeparatorCharacter: number;

enum NSLineSweepDirection {

	Left = 0,

	Right = 1,

	Down = 2,

	Up = 3
}

globalThis.NSLineSweepDirection = NSLineSweepDirection;

declare var NSLineToBezierPathElement: NSBezierPathElement;

declare var NSLinkAttributeName: string;

declare var NSLocalizedKeyDictionaryBinding: string;

declare var NSMacSimpleTextDocumentType: string;

declare class NSMagnificationGestureRecognizer extends NSGestureRecognizer {

	setMagnification(_: number)

	magnification: number;
}

declare var NSMainMenuWindowLevel: number;

declare var NSManagedObjectContextBinding: string;

declare var NSManagerDocumentAttribute: string;

declare var NSMarkedClauseSegmentAttributeName: string;

declare class NSMatrix extends NSControl implements NSUserInterfaceValidations, NSViewToolTipOwner {

	setAllowsEmptySelection(_: boolean)

	allowsEmptySelection: boolean;

	setAutorecalculatesCellSize(_: boolean)

	autorecalculatesCellSize: boolean;

	setAutoscroll(_: boolean)

	isAutoscroll: boolean;

	setAutosizesCells(_: boolean)

	autosizesCells: boolean;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setCellBackgroundColor(_: NSColor)

	cellBackgroundColor: NSColor;

	setCellClass(_: typeof NSObject)

	cellClass: typeof NSObject;

	setCellSize(_: CGSize)

	cellSize: CGSize;

	readonly cells: NSArray<NSCell>;

	setDelegate(_: NSMatrixDelegate)

	delegate: NSMatrixDelegate;

	setDoubleAction(_: string)

	doubleAction: string;

	setDrawsBackground(_: boolean)

	drawsBackground: boolean;

	setDrawsCellBackground(_: boolean)

	drawsCellBackground: boolean;

	setIntercellSpacing(_: CGSize)

	intercellSpacing: CGSize;

	setKeyCell(_: NSCell)

	keyCell: NSCell;

	setMode(_: NSMatrixMode)

	mode: NSMatrixMode;

	readonly mouseDownFlags: number;

	readonly numberOfColumns: number;

	readonly numberOfRows: number;

	setPrototype(_: NSCell)

	prototype: NSCell;

	readonly selectedCell: NSCell;

	readonly selectedCells: NSArray<NSCell>;

	readonly selectedColumn: number;

	readonly selectedRow: number;

	setSelectionByRect(_: boolean)

	isSelectionByRect: boolean;

	setTabKeyTraversesCells(_: boolean)

	tabKeyTraversesCells: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(frame: CGRect, mode: NSMatrixMode, cellClass: typeof NSObject, numberOfRows: number, numberOfColumns: number);

	static create(frame: CGRect, mode: NSMatrixMode, prototype: NSCell, numberOfRows: number, numberOfColumns: number);

	addColumn(): void;

	addColumnWithCells(with_: NSArray<NSCell>): void;

	addRow(): void;

	addRowWithCells(with_: NSArray<NSCell>): void;

	cellAtRowColumn(atRow: number, column: number): NSCell;

	cellFrameAtRowColumn(atRow: number, column: number): CGRect;

	cellWithTag(withTag: number): NSCell;

	conformsToProtocol(_: any /* Protocol */): boolean;

	deselectAllCells(): void;

	deselectSelectedCell(): void;

	drawCellAtRowColumn(atRow: number, column: number): void;

	getNumberOfRowsColumns(_?: number, columns?: number): void;

	getRowColumnForPoint(_: number, column: number, for_: CGPoint): boolean;

	getRowColumnOfCell(_: number, column: number, of: NSCell): boolean;

	highlightCellAtRowColumn(_: boolean, atRow: number, column: number): void;

	insertColumn(_: number): void;

	insertColumnWithCells(_: number, with_?: NSArray<NSCell>): void;

	insertRow(_: number): void;

	insertRowWithCells(_: number, with_?: NSArray<NSCell>): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	makeCellAtRowColumn(atRow: number, column: number): NSCell;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	putCellAtRowColumn(_: NSCell, atRow: number, column: number): void;

	removeColumn(_: number): void;

	removeRow(_: number): void;

	renewRowsColumns(_: number, columns: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	scrollCellToVisibleAtRowColumn(atRow: number, column: number): void;

	selectCellAtRowColumn(atRow: number, column: number): void;

	selectCellWithTag(withTag: number): boolean;

	selectText(_?: any): void;

	selectTextAtRowColumn(atRow: number, column: number): NSCell;

	self(): this;

	sendAction(): boolean;

	sendActionToForAllCells(_: string, to: any, forAllCells: boolean): void;

	sendDoubleAction(): void;

	setScrollable(_: boolean): void;

	setSelectionFromToAnchorHighlight(_: number, to: number, anchor: number, highlight: boolean): void;

	setStateAtRowColumn(_: number, atRow: number, column: number): void;

	setToolTipForCell(_?: string, for_: NSCell): void;

	setValidateSize(_: boolean): void;

	sizeToCells(): void;

	sortUsingFunctionContext(using?: (p1: any, p2: any, p3: any) => number, context?: any): void;

	sortUsingSelector(using: string): void;

	textDidBeginEditing(_: NSNotification): void;

	textDidChange(_: NSNotification): void;

	textDidEndEditing(_: NSNotification): void;

	textShouldBeginEditing(_: NSText): boolean;

	textShouldEndEditing(_: NSText): boolean;

	toolTipForCell(for_: NSCell): string;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;

	viewStringForToolTipPointUserData(_: NSView, stringForToolTip: number, point: CGPoint, userData?: any): string;
}

interface NSMatrixDelegate extends NSControlTextEditingDelegate {
}
declare var NSMatrixDelegate: {

	prototype: NSMatrixDelegate;
};

enum NSMatrixMode {

	RadioModeMatrix = 0,

	HighlightModeMatrix = 1,

	ListModeMatrix = 2,

	TrackModeMatrix = 3
}

globalThis.NSMatrixMode = NSMatrixMode;

declare var NSMaxValueBinding: string;

declare var NSMaxWidthBinding: string;

declare var NSMaximumRecentsBinding: string;

enum NSMediaLibrary {

	Audio = 1,

	Image = 2,

	Movie = 4
}

globalThis.NSMediaLibrary = NSMediaLibrary;

declare class NSMediaLibraryBrowserController extends NSObject {

	setFrame(_: CGRect)

	frame: CGRect;

	setMediaLibraries(_: NSMediaLibrary)

	mediaLibraries: NSMediaLibrary;

	setVisible(_: boolean)

	isVisible: boolean;

	static sharedMediaLibraryBrowserController(): NSMediaLibraryBrowserController;

	togglePanel(_?: any): void;
}

declare class NSMenu extends NSObject implements NSAccessibility, NSAccessibilityElementProtocol, NSCoding, NSCopying, NSUserInterfaceItemIdentification {

	static menuBarVisible(): boolean;

	static popUpContextMenuWithEventForView(_: NSMenu, with_: NSEvent, for_: NSView): void;

	static popUpContextMenuWithEventForViewWithFont(_: NSMenu, with_: NSEvent, for_: NSView, with_?: NSFont): void;

	static setMenuBarVisible(_: boolean): void;

	setAllowsContextMenuPlugIns(_: boolean)

	allowsContextMenuPlugIns: boolean;

	setAutoenablesItems(_: boolean)

	autoenablesItems: boolean;

	setDelegate(_: NSMenuDelegate)

	delegate: NSMenuDelegate;

	setFont(_: NSFont)

	font: NSFont;

	readonly highlightedItem: NSMenuItem;

	setItemArray(_: NSArray<NSMenuItem>)

	itemArray: NSArray<NSMenuItem>;

	readonly menuBarHeight: number;

	setMinimumWidth(_: number)

	minimumWidth: number;

	readonly numberOfItems: number;

	readonly propertiesToUpdate: NSMenuProperties;

	setShowsStateColumn(_: boolean)

	showsStateColumn: boolean;

	readonly size: CGSize;

	setSupermenu(_: NSMenu)

	supermenu: NSMenu;

	setTitle(_: string)

	title: string;

	setUserInterfaceLayoutDirection(_: NSUserInterfaceLayoutDirection)

	userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection;

	setAccessibilityActivationPoint(_: CGPoint)

	accessibilityActivationPoint: CGPoint; // inherited from NSAccessibility

	setAccessibilityAllowedValues(_: NSArray<number>)

	accessibilityAllowedValues: NSArray<number>; // inherited from NSAccessibility

	setAccessibilityAlternateUIVisible(_: boolean)

	isAccessibilityAlternateUIVisible: boolean; // inherited from NSAccessibility

	setAccessibilityApplicationFocusedUIElement(_: any)

	accessibilityApplicationFocusedUIElement: any; // inherited from NSAccessibility

	setAccessibilityCancelButton(_: any)

	accessibilityCancelButton: any; // inherited from NSAccessibility

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)

	accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>; // inherited from NSAccessibility

	setAccessibilityClearButton(_: any)

	accessibilityClearButton: any; // inherited from NSAccessibility

	setAccessibilityCloseButton(_: any)

	accessibilityCloseButton: any; // inherited from NSAccessibility

	setAccessibilityColumnCount(_: number)

	accessibilityColumnCount: number; // inherited from NSAccessibility

	setAccessibilityColumnHeaderUIElements(_: NSArray<any>)

	accessibilityColumnHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumnIndexRange(_: NSRange)

	accessibilityColumnIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityColumnTitles(_: NSArray<any>)

	accessibilityColumnTitles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumns(_: NSArray<any>)

	accessibilityColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityContents(_: NSArray<any>)

	accessibilityContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityCriticalValue(_: any)

	accessibilityCriticalValue: any; // inherited from NSAccessibility

	setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)

	accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>; // inherited from NSAccessibility

	setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)

	accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>; // inherited from NSAccessibility

	setAccessibilityDecrementButton(_: any)

	accessibilityDecrementButton: any; // inherited from NSAccessibility

	setAccessibilityDefaultButton(_: any)

	accessibilityDefaultButton: any; // inherited from NSAccessibility

	setAccessibilityDisclosed(_: boolean)

	isAccessibilityDisclosed: boolean; // inherited from NSAccessibility

	setAccessibilityDisclosedByRow(_: any)

	accessibilityDisclosedByRow: any; // inherited from NSAccessibility

	setAccessibilityDisclosedRows(_: any)

	accessibilityDisclosedRows: any; // inherited from NSAccessibility

	setAccessibilityDisclosureLevel(_: number)

	accessibilityDisclosureLevel: number; // inherited from NSAccessibility

	setAccessibilityDocument(_: string)

	accessibilityDocument: string; // inherited from NSAccessibility

	setAccessibilityEdited(_: boolean)

	isAccessibilityEdited: boolean; // inherited from NSAccessibility

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean; // inherited from NSAccessibility

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean; // inherited from NSAccessibility

	setAccessibilityExpanded(_: boolean)

	isAccessibilityExpanded: boolean; // inherited from NSAccessibility

	setAccessibilityExtrasMenuBar(_: any)

	accessibilityExtrasMenuBar: any; // inherited from NSAccessibility

	setAccessibilityFilename(_: string)

	accessibilityFilename: string; // inherited from NSAccessibility

	setAccessibilityFocused(_: boolean)

	isAccessibilityFocused: boolean; // inherited from NSAccessibility

	setAccessibilityFocusedWindow(_: any)

	accessibilityFocusedWindow: any; // inherited from NSAccessibility

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect; // inherited from NSAccessibility

	setAccessibilityFrontmost(_: boolean)

	isAccessibilityFrontmost: boolean; // inherited from NSAccessibility

	setAccessibilityFullScreenButton(_: any)

	accessibilityFullScreenButton: any; // inherited from NSAccessibility

	setAccessibilityGrowArea(_: any)

	accessibilityGrowArea: any; // inherited from NSAccessibility

	setAccessibilityHandles(_: NSArray<any>)

	accessibilityHandles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityHeader(_: any)

	accessibilityHeader: any; // inherited from NSAccessibility

	setAccessibilityHelp(_: string)

	accessibilityHelp: string; // inherited from NSAccessibility

	setAccessibilityHidden(_: boolean)

	isAccessibilityHidden: boolean; // inherited from NSAccessibility

	setAccessibilityHorizontalScrollBar(_: any)

	accessibilityHorizontalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityHorizontalUnitDescription(_: string)

	accessibilityHorizontalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityHorizontalUnits(_: NSAccessibilityUnits)

	accessibilityHorizontalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityIdentifier(_: string)

	accessibilityIdentifier: string; // inherited from NSAccessibility

	setAccessibilityIncrementButton(_: any)

	accessibilityIncrementButton: any; // inherited from NSAccessibility

	setAccessibilityIndex(_: number)

	accessibilityIndex: number; // inherited from NSAccessibility

	setAccessibilityInsertionPointLineNumber(_: number)

	accessibilityInsertionPointLineNumber: number; // inherited from NSAccessibility

	setAccessibilityLabel(_: string)

	accessibilityLabel: string; // inherited from NSAccessibility

	setAccessibilityLabelUIElements(_: NSArray<any>)

	accessibilityLabelUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityLabelValue(_: number)

	accessibilityLabelValue: number; // inherited from NSAccessibility

	setAccessibilityLinkedUIElements(_: NSArray<any>)

	accessibilityLinkedUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMain(_: boolean)

	isAccessibilityMain: boolean; // inherited from NSAccessibility

	setAccessibilityMainWindow(_: any)

	accessibilityMainWindow: any; // inherited from NSAccessibility

	setAccessibilityMarkerGroupUIElement(_: any)

	accessibilityMarkerGroupUIElement: any; // inherited from NSAccessibility

	setAccessibilityMarkerTypeDescription(_: string)

	accessibilityMarkerTypeDescription: string; // inherited from NSAccessibility

	setAccessibilityMarkerUIElements(_: NSArray<any>)

	accessibilityMarkerUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMarkerValues(_: any)

	accessibilityMarkerValues: any; // inherited from NSAccessibility

	setAccessibilityMaxValue(_: any)

	accessibilityMaxValue: any; // inherited from NSAccessibility

	setAccessibilityMenuBar(_: any)

	accessibilityMenuBar: any; // inherited from NSAccessibility

	setAccessibilityMinValue(_: any)

	accessibilityMinValue: any; // inherited from NSAccessibility

	setAccessibilityMinimizeButton(_: any)

	accessibilityMinimizeButton: any; // inherited from NSAccessibility

	setAccessibilityMinimized(_: boolean)

	isAccessibilityMinimized: boolean; // inherited from NSAccessibility

	setAccessibilityModal(_: boolean)

	isAccessibilityModal: boolean; // inherited from NSAccessibility

	setAccessibilityNextContents(_: NSArray<any>)

	accessibilityNextContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityNumberOfCharacters(_: number)

	accessibilityNumberOfCharacters: number; // inherited from NSAccessibility

	setAccessibilityOrderedByRow(_: boolean)

	isAccessibilityOrderedByRow: boolean; // inherited from NSAccessibility

	setAccessibilityOrientation(_: NSAccessibilityOrientation)

	accessibilityOrientation: NSAccessibilityOrientation; // inherited from NSAccessibility

	setAccessibilityOverflowButton(_: any)

	accessibilityOverflowButton: any; // inherited from NSAccessibility

	setAccessibilityParent(_: any)

	accessibilityParent: any; // inherited from NSAccessibility

	setAccessibilityPlaceholderValue(_: string)

	accessibilityPlaceholderValue: string; // inherited from NSAccessibility

	setAccessibilityPreviousContents(_: NSArray<any>)

	accessibilityPreviousContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityProtectedContent(_: boolean)

	isAccessibilityProtectedContent: boolean; // inherited from NSAccessibility

	setAccessibilityProxy(_: any)

	accessibilityProxy: any; // inherited from NSAccessibility

	setAccessibilityRequired(_: boolean)

	isAccessibilityRequired: boolean; // inherited from NSAccessibility

	setAccessibilityRole(_: string)

	accessibilityRole: string; // inherited from NSAccessibility

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string; // inherited from NSAccessibility

	setAccessibilityRowCount(_: number)

	accessibilityRowCount: number; // inherited from NSAccessibility

	setAccessibilityRowHeaderUIElements(_: NSArray<any>)

	accessibilityRowHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRowIndexRange(_: NSRange)

	accessibilityRowIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityRows(_: NSArray<any>)

	accessibilityRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRulerMarkerType(_: NSAccessibilityRulerMarkerType)

	accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType; // inherited from NSAccessibility

	setAccessibilitySearchButton(_: any)

	accessibilitySearchButton: any; // inherited from NSAccessibility

	setAccessibilitySearchMenu(_: any)

	accessibilitySearchMenu: any; // inherited from NSAccessibility

	setAccessibilitySelected(_: boolean)

	isAccessibilitySelected: boolean; // inherited from NSAccessibility

	setAccessibilitySelectedCells(_: NSArray<any>)

	accessibilitySelectedCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedChildren(_: NSArray<any>)

	accessibilitySelectedChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedColumns(_: NSArray<any>)

	accessibilitySelectedColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedRows(_: NSArray<any>)

	accessibilitySelectedRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedText(_: string)

	accessibilitySelectedText: string; // inherited from NSAccessibility

	setAccessibilitySelectedTextRange(_: NSRange)

	accessibilitySelectedTextRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)

	accessibilitySelectedTextRanges: NSArray<NSValue>; // inherited from NSAccessibility

	setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)

	accessibilityServesAsTitleForUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedCharacterRange(_: NSRange)

	accessibilitySharedCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySharedFocusElements(_: NSArray<any>)

	accessibilitySharedFocusElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedTextUIElements(_: NSArray<any>)

	accessibilitySharedTextUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityShownMenu(_: any)

	accessibilityShownMenu: any; // inherited from NSAccessibility

	setAccessibilitySortDirection(_: NSAccessibilitySortDirection)

	accessibilitySortDirection: NSAccessibilitySortDirection; // inherited from NSAccessibility

	setAccessibilitySplitters(_: NSArray<any>)

	accessibilitySplitters: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string; // inherited from NSAccessibility

	setAccessibilityTabs(_: NSArray<any>)

	accessibilityTabs: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityTitle(_: string)

	accessibilityTitle: string; // inherited from NSAccessibility

	setAccessibilityTitleUIElement(_: any)

	accessibilityTitleUIElement: any; // inherited from NSAccessibility

	setAccessibilityToolbarButton(_: any)

	accessibilityToolbarButton: any; // inherited from NSAccessibility

	setAccessibilityTopLevelUIElement(_: any)

	accessibilityTopLevelUIElement: any; // inherited from NSAccessibility

	setAccessibilityURL(_: NSURL)

	accessibilityURL: NSURL; // inherited from NSAccessibility

	setAccessibilityUnitDescription(_: string)

	accessibilityUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityUnits(_: NSAccessibilityUnits)

	accessibilityUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityValue(_: any)

	accessibilityValue: any; // inherited from NSAccessibility

	setAccessibilityValueDescription(_: string)

	accessibilityValueDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalScrollBar(_: any)

	accessibilityVerticalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityVerticalUnitDescription(_: string)

	accessibilityVerticalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalUnits(_: NSAccessibilityUnits)

	accessibilityVerticalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityVisibleCells(_: NSArray<any>)

	accessibilityVisibleCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleCharacterRange(_: NSRange)

	accessibilityVisibleCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilityVisibleChildren(_: NSArray<any>)

	accessibilityVisibleChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleColumns(_: NSArray<any>)

	accessibilityVisibleColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleRows(_: NSArray<any>)

	accessibilityVisibleRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityWarningValue(_: any)

	accessibilityWarningValue: any; // inherited from NSAccessibility

	setAccessibilityWindow(_: any)

	accessibilityWindow: any; // inherited from NSAccessibility

	setAccessibilityWindows(_: NSArray<any>)

	accessibilityWindows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityZoomButton(_: any)

	accessibilityZoomButton: any; // inherited from NSAccessibility

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	setIdentifier(_: string)

	identifier: string; // inherited from NSUserInterfaceItemIdentification

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(coder: NSCoder); // inherited from NSCoding

	static create(title: string);

	accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;

	accessibilityCellForColumnRow(_: number, row: number): any;

	accessibilityFrame(): CGRect;

	accessibilityFrameForRange(_: NSRange): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLayoutPointForScreenPoint(_: CGPoint): CGPoint;

	accessibilityLayoutSizeForScreenSize(_: CGSize): CGSize;

	accessibilityLineForIndex(_: number): number;

	accessibilityParent(): any;

	accessibilityPerformCancel(): boolean;

	accessibilityPerformConfirm(): boolean;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformDelete(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPick(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityPerformRaise(): boolean;

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	accessibilityPerformShowMenu(): boolean;

	accessibilityRTFForRange(_: NSRange): NSData;

	accessibilityRangeForIndex(_: number): NSRange;

	accessibilityRangeForLine(_: number): NSRange;

	accessibilityRangeForPosition(_: CGPoint): NSRange;

	accessibilityScreenPointForLayoutPoint(_: CGPoint): CGPoint;

	accessibilityScreenSizeForLayoutSize(_: CGSize): CGSize;

	accessibilityStringForRange(_: NSRange): string;

	accessibilityStyleRangeForIndex(_: number): NSRange;

	addItem(_: NSMenuItem): void;

	addItemWithTitleActionKeyEquivalent(withTitle: string, action?: string, keyEquivalent: string): NSMenuItem;

	cancelTracking(): void;

	cancelTrackingWithoutAnimation(): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	indexOfItem(of: NSMenuItem): number;

	indexOfItemWithRepresentedObject(withRepresentedObject?: any): number;

	indexOfItemWithSubmenu(withSubmenu?: NSMenu): number;

	indexOfItemWithTag(withTag: number): number;

	indexOfItemWithTargetAndAction(withTarget?: any, andAction?: string): number;

	indexOfItemWithTitle(withTitle: string): number;

	insertItemAtIndex(_: NSMenuItem, at: number): void;

	insertItemWithTitleActionKeyEquivalentAtIndex(withTitle: string, action?: string, keyEquivalent: string, at: number): NSMenuItem;

	isAccessibilityFocused(): boolean;

	isAccessibilitySelectorAllowed(_: string): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	itemAtIndex(at: number): NSMenuItem;

	itemChanged(_: NSMenuItem): void;

	itemWithTag(withTag: number): NSMenuItem;

	itemWithTitle(withTitle: string): NSMenuItem;

	performActionForItemAtIndex(at: number): void;

	performKeyEquivalent(with_: NSEvent): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	popUpMenuPositioningItemAtLocationInView(positioning?: NSMenuItem, at: CGPoint, in_?: NSView): boolean;

	removeAllItems(): void;

	removeItem(_: NSMenuItem): void;

	removeItemAtIndex(at: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setSubmenuForItem(_?: NSMenu, for_: NSMenuItem): void;

	submenuAction(_?: any): void;

	update(): void;
}

interface NSMenuDelegate extends NSObjectProtocol {

	confinementRectForMenuOnScreen?(for_: NSMenu, on?: NSScreen): CGRect;

	menuUpdateItemAtIndexShouldCancel?(_: NSMenu, update: NSMenuItem, at: number, shouldCancel: boolean): boolean;

	menuWillHighlightItem?(_: NSMenu, willHighlight?: NSMenuItem): void;

	menuDidClose?(_: NSMenu): void;

	menuHasKeyEquivalentForEventTargetAction?(_: NSMenu, for_: NSEvent, target?: any, action?: string): boolean;

	menuNeedsUpdate?(_: NSMenu): void;

	menuWillOpen?(_: NSMenu): void;

	numberOfItemsInMenu?(in_: NSMenu): number;
}
declare var NSMenuDelegate: {

	prototype: NSMenuDelegate;
};

declare var NSMenuDidAddItemNotification: string;

declare var NSMenuDidBeginTrackingNotification: string;

declare var NSMenuDidChangeItemNotification: string;

declare var NSMenuDidEndTrackingNotification: string;

declare var NSMenuDidRemoveItemNotification: string;

declare var NSMenuDidSendActionNotification: string;

declare const NSMenuFunctionKey: number;

declare class NSMenuItem extends NSObject implements NSAccessibility, NSAccessibilityElementProtocol, NSCoding, NSCopying, NSUserInterfaceItemIdentification, NSValidatedUserInterfaceItem {

	static separatorItem(): NSMenuItem;

	setAction(_: string)

	action: string;

	setAllowsKeyEquivalentWhenHidden(_: boolean)

	allowsKeyEquivalentWhenHidden: boolean;

	setAlternate(_: boolean)

	isAlternate: boolean;

	setAttributedTitle(_: NSAttributedString)

	attributedTitle: NSAttributedString;

	setEnabled(_: boolean)

	isEnabled: boolean;

	readonly hasSubmenu: boolean;

	setHidden(_: boolean)

	isHidden: boolean;

	readonly isHiddenOrHasHiddenAncestor: boolean;

	readonly isHighlighted: boolean;

	setImage(_: NSImage)

	image: NSImage;

	setIndentationLevel(_: number)

	indentationLevel: number;

	setKeyEquivalent(_: string)

	keyEquivalent: string;

	setKeyEquivalentModifierMask(_: NSEventModifierFlags)

	keyEquivalentModifierMask: NSEventModifierFlags;

	setMenu(_: NSMenu)

	menu: NSMenu;

	setMixedStateImage(_: NSImage)

	mixedStateImage: NSImage;

	setOffStateImage(_: NSImage)

	offStateImage: NSImage;

	setOnStateImage(_: NSImage)

	onStateImage: NSImage;

	readonly parentItem: NSMenuItem;

	setRepresentedObject(_: any)

	representedObject: any;

	readonly isSeparatorItem: boolean;

	setState(_: number)

	state: number;

	setSubmenu(_: NSMenu)

	submenu: NSMenu;

	setTag(_: number)

	tag: number;

	setTarget(_: any)

	target: any;

	setTitle(_: string)

	title: string;

	setToolTip(_: string)

	toolTip: string;

	readonly userKeyEquivalent: string;

	setView(_: NSView)

	view: NSView;

	static setUsesUserKeyEquivalents(_: boolean)

	usesUserKeyEquivalents: boolean;

	setAccessibilityActivationPoint(_: CGPoint)

	accessibilityActivationPoint: CGPoint; // inherited from NSAccessibility

	setAccessibilityAllowedValues(_: NSArray<number>)

	accessibilityAllowedValues: NSArray<number>; // inherited from NSAccessibility

	setAccessibilityAlternateUIVisible(_: boolean)

	isAccessibilityAlternateUIVisible: boolean; // inherited from NSAccessibility

	setAccessibilityApplicationFocusedUIElement(_: any)

	accessibilityApplicationFocusedUIElement: any; // inherited from NSAccessibility

	setAccessibilityCancelButton(_: any)

	accessibilityCancelButton: any; // inherited from NSAccessibility

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)

	accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>; // inherited from NSAccessibility

	setAccessibilityClearButton(_: any)

	accessibilityClearButton: any; // inherited from NSAccessibility

	setAccessibilityCloseButton(_: any)

	accessibilityCloseButton: any; // inherited from NSAccessibility

	setAccessibilityColumnCount(_: number)

	accessibilityColumnCount: number; // inherited from NSAccessibility

	setAccessibilityColumnHeaderUIElements(_: NSArray<any>)

	accessibilityColumnHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumnIndexRange(_: NSRange)

	accessibilityColumnIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityColumnTitles(_: NSArray<any>)

	accessibilityColumnTitles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumns(_: NSArray<any>)

	accessibilityColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityContents(_: NSArray<any>)

	accessibilityContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityCriticalValue(_: any)

	accessibilityCriticalValue: any; // inherited from NSAccessibility

	setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)

	accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>; // inherited from NSAccessibility

	setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)

	accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>; // inherited from NSAccessibility

	setAccessibilityDecrementButton(_: any)

	accessibilityDecrementButton: any; // inherited from NSAccessibility

	setAccessibilityDefaultButton(_: any)

	accessibilityDefaultButton: any; // inherited from NSAccessibility

	setAccessibilityDisclosed(_: boolean)

	isAccessibilityDisclosed: boolean; // inherited from NSAccessibility

	setAccessibilityDisclosedByRow(_: any)

	accessibilityDisclosedByRow: any; // inherited from NSAccessibility

	setAccessibilityDisclosedRows(_: any)

	accessibilityDisclosedRows: any; // inherited from NSAccessibility

	setAccessibilityDisclosureLevel(_: number)

	accessibilityDisclosureLevel: number; // inherited from NSAccessibility

	setAccessibilityDocument(_: string)

	accessibilityDocument: string; // inherited from NSAccessibility

	setAccessibilityEdited(_: boolean)

	isAccessibilityEdited: boolean; // inherited from NSAccessibility

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean; // inherited from NSAccessibility

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean; // inherited from NSAccessibility

	setAccessibilityExpanded(_: boolean)

	isAccessibilityExpanded: boolean; // inherited from NSAccessibility

	setAccessibilityExtrasMenuBar(_: any)

	accessibilityExtrasMenuBar: any; // inherited from NSAccessibility

	setAccessibilityFilename(_: string)

	accessibilityFilename: string; // inherited from NSAccessibility

	setAccessibilityFocused(_: boolean)

	isAccessibilityFocused: boolean; // inherited from NSAccessibility

	setAccessibilityFocusedWindow(_: any)

	accessibilityFocusedWindow: any; // inherited from NSAccessibility

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect; // inherited from NSAccessibility

	setAccessibilityFrontmost(_: boolean)

	isAccessibilityFrontmost: boolean; // inherited from NSAccessibility

	setAccessibilityFullScreenButton(_: any)

	accessibilityFullScreenButton: any; // inherited from NSAccessibility

	setAccessibilityGrowArea(_: any)

	accessibilityGrowArea: any; // inherited from NSAccessibility

	setAccessibilityHandles(_: NSArray<any>)

	accessibilityHandles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityHeader(_: any)

	accessibilityHeader: any; // inherited from NSAccessibility

	setAccessibilityHelp(_: string)

	accessibilityHelp: string; // inherited from NSAccessibility

	setAccessibilityHidden(_: boolean)

	isAccessibilityHidden: boolean; // inherited from NSAccessibility

	setAccessibilityHorizontalScrollBar(_: any)

	accessibilityHorizontalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityHorizontalUnitDescription(_: string)

	accessibilityHorizontalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityHorizontalUnits(_: NSAccessibilityUnits)

	accessibilityHorizontalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityIdentifier(_: string)

	accessibilityIdentifier: string; // inherited from NSAccessibility

	setAccessibilityIncrementButton(_: any)

	accessibilityIncrementButton: any; // inherited from NSAccessibility

	setAccessibilityIndex(_: number)

	accessibilityIndex: number; // inherited from NSAccessibility

	setAccessibilityInsertionPointLineNumber(_: number)

	accessibilityInsertionPointLineNumber: number; // inherited from NSAccessibility

	setAccessibilityLabel(_: string)

	accessibilityLabel: string; // inherited from NSAccessibility

	setAccessibilityLabelUIElements(_: NSArray<any>)

	accessibilityLabelUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityLabelValue(_: number)

	accessibilityLabelValue: number; // inherited from NSAccessibility

	setAccessibilityLinkedUIElements(_: NSArray<any>)

	accessibilityLinkedUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMain(_: boolean)

	isAccessibilityMain: boolean; // inherited from NSAccessibility

	setAccessibilityMainWindow(_: any)

	accessibilityMainWindow: any; // inherited from NSAccessibility

	setAccessibilityMarkerGroupUIElement(_: any)

	accessibilityMarkerGroupUIElement: any; // inherited from NSAccessibility

	setAccessibilityMarkerTypeDescription(_: string)

	accessibilityMarkerTypeDescription: string; // inherited from NSAccessibility

	setAccessibilityMarkerUIElements(_: NSArray<any>)

	accessibilityMarkerUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMarkerValues(_: any)

	accessibilityMarkerValues: any; // inherited from NSAccessibility

	setAccessibilityMaxValue(_: any)

	accessibilityMaxValue: any; // inherited from NSAccessibility

	setAccessibilityMenuBar(_: any)

	accessibilityMenuBar: any; // inherited from NSAccessibility

	setAccessibilityMinValue(_: any)

	accessibilityMinValue: any; // inherited from NSAccessibility

	setAccessibilityMinimizeButton(_: any)

	accessibilityMinimizeButton: any; // inherited from NSAccessibility

	setAccessibilityMinimized(_: boolean)

	isAccessibilityMinimized: boolean; // inherited from NSAccessibility

	setAccessibilityModal(_: boolean)

	isAccessibilityModal: boolean; // inherited from NSAccessibility

	setAccessibilityNextContents(_: NSArray<any>)

	accessibilityNextContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityNumberOfCharacters(_: number)

	accessibilityNumberOfCharacters: number; // inherited from NSAccessibility

	setAccessibilityOrderedByRow(_: boolean)

	isAccessibilityOrderedByRow: boolean; // inherited from NSAccessibility

	setAccessibilityOrientation(_: NSAccessibilityOrientation)

	accessibilityOrientation: NSAccessibilityOrientation; // inherited from NSAccessibility

	setAccessibilityOverflowButton(_: any)

	accessibilityOverflowButton: any; // inherited from NSAccessibility

	setAccessibilityParent(_: any)

	accessibilityParent: any; // inherited from NSAccessibility

	setAccessibilityPlaceholderValue(_: string)

	accessibilityPlaceholderValue: string; // inherited from NSAccessibility

	setAccessibilityPreviousContents(_: NSArray<any>)

	accessibilityPreviousContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityProtectedContent(_: boolean)

	isAccessibilityProtectedContent: boolean; // inherited from NSAccessibility

	setAccessibilityProxy(_: any)

	accessibilityProxy: any; // inherited from NSAccessibility

	setAccessibilityRequired(_: boolean)

	isAccessibilityRequired: boolean; // inherited from NSAccessibility

	setAccessibilityRole(_: string)

	accessibilityRole: string; // inherited from NSAccessibility

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string; // inherited from NSAccessibility

	setAccessibilityRowCount(_: number)

	accessibilityRowCount: number; // inherited from NSAccessibility

	setAccessibilityRowHeaderUIElements(_: NSArray<any>)

	accessibilityRowHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRowIndexRange(_: NSRange)

	accessibilityRowIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityRows(_: NSArray<any>)

	accessibilityRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRulerMarkerType(_: NSAccessibilityRulerMarkerType)

	accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType; // inherited from NSAccessibility

	setAccessibilitySearchButton(_: any)

	accessibilitySearchButton: any; // inherited from NSAccessibility

	setAccessibilitySearchMenu(_: any)

	accessibilitySearchMenu: any; // inherited from NSAccessibility

	setAccessibilitySelected(_: boolean)

	isAccessibilitySelected: boolean; // inherited from NSAccessibility

	setAccessibilitySelectedCells(_: NSArray<any>)

	accessibilitySelectedCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedChildren(_: NSArray<any>)

	accessibilitySelectedChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedColumns(_: NSArray<any>)

	accessibilitySelectedColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedRows(_: NSArray<any>)

	accessibilitySelectedRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedText(_: string)

	accessibilitySelectedText: string; // inherited from NSAccessibility

	setAccessibilitySelectedTextRange(_: NSRange)

	accessibilitySelectedTextRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)

	accessibilitySelectedTextRanges: NSArray<NSValue>; // inherited from NSAccessibility

	setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)

	accessibilityServesAsTitleForUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedCharacterRange(_: NSRange)

	accessibilitySharedCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySharedFocusElements(_: NSArray<any>)

	accessibilitySharedFocusElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedTextUIElements(_: NSArray<any>)

	accessibilitySharedTextUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityShownMenu(_: any)

	accessibilityShownMenu: any; // inherited from NSAccessibility

	setAccessibilitySortDirection(_: NSAccessibilitySortDirection)

	accessibilitySortDirection: NSAccessibilitySortDirection; // inherited from NSAccessibility

	setAccessibilitySplitters(_: NSArray<any>)

	accessibilitySplitters: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string; // inherited from NSAccessibility

	setAccessibilityTabs(_: NSArray<any>)

	accessibilityTabs: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityTitle(_: string)

	accessibilityTitle: string; // inherited from NSAccessibility

	setAccessibilityTitleUIElement(_: any)

	accessibilityTitleUIElement: any; // inherited from NSAccessibility

	setAccessibilityToolbarButton(_: any)

	accessibilityToolbarButton: any; // inherited from NSAccessibility

	setAccessibilityTopLevelUIElement(_: any)

	accessibilityTopLevelUIElement: any; // inherited from NSAccessibility

	setAccessibilityURL(_: NSURL)

	accessibilityURL: NSURL; // inherited from NSAccessibility

	setAccessibilityUnitDescription(_: string)

	accessibilityUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityUnits(_: NSAccessibilityUnits)

	accessibilityUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityValue(_: any)

	accessibilityValue: any; // inherited from NSAccessibility

	setAccessibilityValueDescription(_: string)

	accessibilityValueDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalScrollBar(_: any)

	accessibilityVerticalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityVerticalUnitDescription(_: string)

	accessibilityVerticalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalUnits(_: NSAccessibilityUnits)

	accessibilityVerticalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityVisibleCells(_: NSArray<any>)

	accessibilityVisibleCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleCharacterRange(_: NSRange)

	accessibilityVisibleCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilityVisibleChildren(_: NSArray<any>)

	accessibilityVisibleChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleColumns(_: NSArray<any>)

	accessibilityVisibleColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleRows(_: NSArray<any>)

	accessibilityVisibleRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityWarningValue(_: any)

	accessibilityWarningValue: any; // inherited from NSAccessibility

	setAccessibilityWindow(_: any)

	accessibilityWindow: any; // inherited from NSAccessibility

	setAccessibilityWindows(_: NSArray<any>)

	accessibilityWindows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityZoomButton(_: any)

	accessibilityZoomButton: any; // inherited from NSAccessibility

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	setIdentifier(_: string)

	identifier: string; // inherited from NSUserInterfaceItemIdentification

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(coder: NSCoder); // inherited from NSCoding

	static create(title: string, action: string, keyEquivalent: string);

	accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;

	accessibilityCellForColumnRow(_: number, row: number): any;

	accessibilityFrame(): CGRect;

	accessibilityFrameForRange(_: NSRange): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLayoutPointForScreenPoint(_: CGPoint): CGPoint;

	accessibilityLayoutSizeForScreenSize(_: CGSize): CGSize;

	accessibilityLineForIndex(_: number): number;

	accessibilityParent(): any;

	accessibilityPerformCancel(): boolean;

	accessibilityPerformConfirm(): boolean;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformDelete(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPick(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityPerformRaise(): boolean;

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	accessibilityPerformShowMenu(): boolean;

	accessibilityRTFForRange(_: NSRange): NSData;

	accessibilityRangeForIndex(_: number): NSRange;

	accessibilityRangeForLine(_: number): NSRange;

	accessibilityRangeForPosition(_: CGPoint): NSRange;

	accessibilityScreenPointForLayoutPoint(_: CGPoint): CGPoint;

	accessibilityScreenSizeForLayoutSize(_: CGSize): CGSize;

	accessibilityStringForRange(_: NSRange): string;

	accessibilityStyleRangeForIndex(_: number): NSRange;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isAccessibilityFocused(): boolean;

	isAccessibilitySelectorAllowed(_: string): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class NSMenuItemCell extends NSButtonCell {

	readonly imageWidth: number;

	readonly keyEquivalentWidth: number;

	setMenuItem(_: NSMenuItem)

	menuItem: NSMenuItem;

	setNeedsDisplay(_: boolean)

	needsDisplay: boolean;

	setNeedsSizing(_: boolean)

	needsSizing: boolean;

	readonly stateImageWidth: number;

	readonly titleWidth: number;

	calcSize(): void;

	drawBorderAndBackgroundWithFrameInView(withFrame: CGRect, in_: NSView): void;

	drawImageWithFrameInView(withFrame: CGRect, in_: NSView): void;

	drawKeyEquivalentWithFrameInView(withFrame: CGRect, in_: NSView): void;

	drawSeparatorItemWithFrameInView(withFrame: CGRect, in_: NSView): void;

	drawStateImageWithFrameInView(withFrame: CGRect, in_: NSView): void;

	drawTitleWithFrameInView(withFrame: CGRect, in_: NSView): void;

	keyEquivalentRectForBounds(forBounds: CGRect): CGRect;

	stateImageRectForBounds(forBounds: CGRect): CGRect;
}

declare var NSMenuItemImportFromDeviceIdentifier: string;

interface NSMenuItemValidation extends NSObjectProtocol {

	validateMenuItem(_: NSMenuItem): boolean;
}
declare var NSMenuItemValidation: {

	prototype: NSMenuItemValidation;
};

enum NSMenuProperties {

	PropertyItemTitle = 1,

	PropertyItemAttributedTitle = 2,

	PropertyItemKeyEquivalent = 4,

	PropertyItemImage = 8,

	PropertyItemEnabled = 16,

	PropertyItemAccessibilityDescription = 32
}

globalThis.NSMenuProperties = NSMenuProperties;

declare class NSMenuToolbarItem extends NSToolbarItem {

	setMenu(_: NSMenu)

	menu: NSMenu;

	setShowsIndicator(_: boolean)

	showsIndicator: boolean;
}

declare var NSMenuWillSendActionNotification: string;

declare var NSMinValueBinding: string;

declare var NSMinWidthBinding: string;

declare var NSMiterLineJoinStyle: NSLineJoinStyle;

declare var NSMixedStateImageBinding: string;

declare var NSModalPanelRunLoopMode: string;

declare var NSModalPanelWindowLevel: number;

declare var NSModalResponseAbort: number;

declare var NSModalResponseCancel: number;

declare var NSModalResponseContinue: number;

declare var NSModalResponseOK: number;

declare var NSModalResponseStop: number;

declare const NSModeSwitchFunctionKey: number;

declare var NSModificationTimeDocumentAttribute: string;

declare var NSMoveToBezierPathElement: NSBezierPathElement;

declare var NSMultipleValuesMarker: any;

declare var NSMultipleValuesPlaceholderBindingOption: string;

declare class NSMutableFontCollection extends NSFontCollection {

	setExclusionDescriptors(_: NSArray<NSFontDescriptor>)

	exclusionDescriptors: NSArray<NSFontDescriptor>;

	setQueryDescriptors(_: NSArray<NSFontDescriptor>)

	queryDescriptors: NSArray<NSFontDescriptor>;

	static fontCollectionWithAllAvailableDescriptors(): NSMutableFontCollection;

	addQueryForDescriptors(for_: NSArray<NSFontDescriptor>): void;

	removeQueryForDescriptors(for_: NSArray<NSFontDescriptor>): void;
}

declare class NSMutableParagraphStyle extends NSParagraphStyle {

	setAlignment(_: NSTextAlignment)

	alignment: NSTextAlignment;

	setAllowsDefaultTighteningForTruncation(_: boolean)

	allowsDefaultTighteningForTruncation: boolean;

	setBaseWritingDirection(_: NSWritingDirection)

	baseWritingDirection: NSWritingDirection;

	setDefaultTabInterval(_: number)

	defaultTabInterval: number;

	setFirstLineHeadIndent(_: number)

	firstLineHeadIndent: number;

	setHeadIndent(_: number)

	headIndent: number;

	setHeaderLevel(_: number)

	headerLevel: number;

	setHyphenationFactor(_: number)

	hyphenationFactor: number;

	setLineBreakMode(_: NSLineBreakMode)

	lineBreakMode: NSLineBreakMode;

	setLineHeightMultiple(_: number)

	lineHeightMultiple: number;

	setLineSpacing(_: number)

	lineSpacing: number;

	setMaximumLineHeight(_: number)

	maximumLineHeight: number;

	setMinimumLineHeight(_: number)

	minimumLineHeight: number;

	setParagraphSpacing(_: number)

	paragraphSpacing: number;

	setParagraphSpacingBefore(_: number)

	paragraphSpacingBefore: number;

	setTabStops(_: NSArray<NSTextTab>)

	tabStops: NSArray<NSTextTab>;

	setTailIndent(_: number)

	tailIndent: number;

	setTextBlocks(_: NSArray<NSTextBlock>)

	textBlocks: NSArray<NSTextBlock>;

	setTextLists(_: NSArray<NSTextList>)

	textLists: NSArray<NSTextList>;

	setTighteningFactorForTruncation(_: number)

	tighteningFactorForTruncation: number;

	addTabStop(_: NSTextTab): void;

	removeTabStop(_: NSTextTab): void;

	setParagraphStyle(_: NSParagraphStyle): void;
}

declare var NSNamedColorSpace: string;

declare const NSNewlineCharacter: number;

declare const NSNextFunctionKey: number;

declare class NSNib extends NSObject implements NSCoding {

	static create(coder: NSCoder); // inherited from NSCoding

	static create(nibData: NSData, bundle: NSBundle);

	static create(nibNamed: string, bundle: NSBundle);

	encodeWithCoder(_: NSCoder): void;

	instantiateWithOwnerTopLevelObjects(withOwner?: any, topLevelObjects?: NSArray<any>): boolean;
}

declare var NSNibLoadingException: string;

declare var NSNoSelectionMarker: any;

declare var NSNoSelectionPlaceholderBindingOption: string;

declare var NSNonZeroWindingRule: NSWindingRule;

declare var NSNormalWindowLevel: number;

declare var NSNotApplicableMarker: any;

declare var NSNotApplicablePlaceholderBindingOption: string;

declare const NSNullGlyph: number;

declare var NSNullPlaceholderBindingOption: string;

declare function NSNumberOfColorComponents(colorSpaceName: string): number;

declare class NSObjectController extends NSController {

	setAutomaticallyPreparesContent(_: boolean)

	automaticallyPreparesContent: boolean;

	readonly canAdd: boolean;

	readonly canRemove: boolean;

	setContent(_: any)

	content: any;

	setEditable(_: boolean)

	isEditable: boolean;

	setEntityName(_: string)

	entityName: string;

	setFetchPredicate(_: NSPredicate)

	fetchPredicate: NSPredicate;

	setManagedObjectContext(_: NSManagedObjectContext)

	managedObjectContext: NSManagedObjectContext;

	setObjectClass(_: typeof NSObject)

	objectClass: typeof NSObject;

	readonly selectedObjects: NSArray<any>;

	readonly selection: any;

	setUsesLazyFetching(_: boolean)

	usesLazyFetching: boolean;

	static create(content: any);

	add(_?: any): void;

	addObject(_: any): void;

	defaultFetchRequest(): NSFetchRequest<any>;

	fetch(_?: any): void;

	fetchWithRequestWithMergeError(merge?: NSFetchRequest<any>, error: boolean): boolean;

	newObject(): any;

	prepareContent(): void;

	remove(_?: any): void;

	removeObject(_: any): void;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}

declare var NSObliquenessAttributeName: string;

declare var NSObservedKeyPathKey: string;

declare var NSObservedObjectKey: string;

declare var NSOffStateImageBinding: string;

declare var NSOfficeOpenXMLTextDocumentType: string;

declare var NSOnStateImageBinding: string;

declare var NSOpenDocumentTextDocumentType: string;

declare class NSOpenPanel extends NSSavePanel {

	static openPanel(): NSOpenPanel;

	static windowWithContentViewController(contentViewController: NSViewController): NSOpenPanel; // inherited from NSWindow

	readonly URLs: NSArray<NSURL>;

	setAccessoryViewDisclosed(_: boolean)

	isAccessoryViewDisclosed: boolean;

	setAllowsMultipleSelection(_: boolean)

	allowsMultipleSelection: boolean;

	setCanChooseDirectories(_: boolean)

	canChooseDirectories: boolean;

	setCanChooseFiles(_: boolean)

	canChooseFiles: boolean;

	setCanDownloadUbiquitousContents(_: boolean)

	canDownloadUbiquitousContents: boolean;

	setCanResolveUbiquitousConflicts(_: boolean)

	canResolveUbiquitousConflicts: boolean;

	setResolvesAliases(_: boolean)

	resolvesAliases: boolean;
}

interface NSOpenSavePanelDelegate extends NSObjectProtocol {

	panelShouldEnableURL?(_: any, shouldEnable: NSURL): boolean;

	panelDidChangeToDirectoryURL?(_: any, didChangeToDirectoryURL?: NSURL): void;

	panelUserEnteredFilenameConfirmed?(_: any, userEnteredFilename: string, confirmed: boolean): string;

	panelValidateURLError?(validateURL: any, error: NSURL): boolean;

	panelWillExpand?(_: any, willExpand: boolean): void;

	panelSelectionDidChange?(_?: any): void;
}
declare var NSOpenSavePanelDelegate: {

	prototype: NSOpenSavePanelDelegate;
};

declare var NSOptionsKey: string;

declare const NSOtherTextMovement: number;

declare class NSOutlineView extends NSTableView implements NSAccessibilityOutline {

	setAutoresizesOutlineColumn(_: boolean)

	autoresizesOutlineColumn: boolean;

	setAutosaveExpandedItems(_: boolean)

	autosaveExpandedItems: boolean;

	setDataSource(_: NSOutlineViewDataSource)

	dataSource: NSOutlineViewDataSource;

	setDelegate(_: NSOutlineViewDelegate)

	delegate: NSOutlineViewDelegate;

	setIndentationMarkerFollowsCell(_: boolean)

	indentationMarkerFollowsCell: boolean;

	setIndentationPerLevel(_: number)

	indentationPerLevel: number;

	setOutlineTableColumn(_: NSTableColumn)

	outlineTableColumn: NSTableColumn;

	setStronglyReferencesItems(_: boolean)

	stronglyReferencesItems: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityColumnHeaderUIElements(): NSArray<any>;

	accessibilityColumns(): NSArray<any>;

	accessibilityFrame(): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLabel(): string;

	accessibilityParent(): any;

	accessibilityRowHeaderUIElements(): NSArray<any>;

	accessibilityRows(): NSArray<NSAccessibilityRow>;

	accessibilitySelectedCells(): NSArray<any>;

	accessibilitySelectedColumns(): NSArray<any>;

	accessibilitySelectedRows(): NSArray<NSAccessibilityRow>;

	accessibilityVisibleCells(): NSArray<any>;

	accessibilityVisibleColumns(): NSArray<any>;

	accessibilityVisibleRows(): NSArray<NSAccessibilityRow>;

	childOfItem(_: number, ofItem?: any): any;

	childIndexForItem(forItem: any): number;

	collapseItem(_?: any): void;

	collapseItemCollapseChildren(_?: any, collapseChildren: boolean): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	expandItem(_?: any): void;

	expandItemExpandChildren(_?: any, expandChildren: boolean): void;

	frameOfOutlineCellAtRow(atRow: number): CGRect;

	insertItemsAtIndexesInParentWithAnimation(at: NSIndexSet, inParent?: any, withAnimation: NSTableViewAnimationOptions): void;

	isAccessibilityFocused(): boolean;

	isEqual(_: any): boolean;

	isExpandable(_?: any): boolean;

	isItemExpanded(_?: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	itemAtRow(atRow: number): any;

	levelForItem(forItem?: any): number;

	levelForRow(forRow: number): number;

	moveItemAtIndexInParentToIndexInParent(at: number, inParent?: any, to: number, inParent?: any): void;

	numberOfChildrenOfItem(ofItem?: any): number;

	parentForItem(forItem?: any): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	reloadItem(_?: any): void;

	reloadItemReloadChildren(_?: any, reloadChildren: boolean): void;

	removeItemsAtIndexesInParentWithAnimation(at: NSIndexSet, inParent?: any, withAnimation: NSTableViewAnimationOptions): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	rowForItem(forItem?: any): number;

	self(): this;

	setAccessibilitySelectedRows(_: NSArray<NSAccessibilityRow>): void;

	setDropItemDropChildIndex(_?: any, dropChildIndex: number): void;

	shouldCollapseAutoExpandedItemsForDeposited(forDeposited: boolean): boolean;
}

declare var NSOutlineViewColumnDidMoveNotification: string;

declare var NSOutlineViewColumnDidResizeNotification: string;

interface NSOutlineViewDataSource extends NSObjectProtocol {

	outlineViewObjectValueForTableColumnByItem?(_: NSOutlineView, objectValueFor?: NSTableColumn, byItem?: any): any;

	outlineViewSetObjectValueForTableColumnByItem?(_: NSOutlineView, setObjectValue?: any, for_?: NSTableColumn, byItem?: any): void;

	outlineViewDraggingSessionWillBeginAtPointForItems?(_: NSOutlineView, draggingSession: NSDraggingSession, willBeginAt: CGPoint, forItems: NSArray<any>): void;

	outlineViewDraggingSessionEndedAtPointOperation?(_: NSOutlineView, draggingSession: NSDraggingSession, endedAt: CGPoint, operation: NSDragOperation): void;

	outlineViewWriteItemsToPasteboard?(_: NSOutlineView, writeItems: NSArray<any>, to: NSPasteboard): boolean;

	outlineViewAcceptDropItemChildIndex?(_: NSOutlineView, acceptDrop: NSDraggingInfo, item?: any, childIndex: number): boolean;

	outlineViewChildOfItem?(_: NSOutlineView, child: number, ofItem?: any): any;

	outlineViewIsItemExpandable?(_: NSOutlineView, isItemExpandable: any): boolean;

	outlineViewItemForPersistentObject?(_: NSOutlineView, itemForPersistentObject: any): any;

	outlineViewNumberOfChildrenOfItem?(_: NSOutlineView, numberOfChildrenOfItem?: any): number;

	outlineViewPasteboardWriterForItem?(_: NSOutlineView, pasteboardWriterForItem: any): NSPasteboardWriting;

	outlineViewPersistentObjectForItem?(_: NSOutlineView, persistentObjectForItem?: any): any;

	outlineViewSortDescriptorsDidChange?(_: NSOutlineView, sortDescriptorsDidChange: NSArray<NSSortDescriptor>): void;

	outlineViewUpdateDraggingItemsForDrag?(_: NSOutlineView, updateDraggingItemsForDrag: NSDraggingInfo): void;

	outlineViewValidateDropProposedItemProposedChildIndex?(_: NSOutlineView, validateDrop: NSDraggingInfo, proposedItem?: any, proposedChildIndex: number): NSDragOperation;
}
declare var NSOutlineViewDataSource: {

	prototype: NSOutlineViewDataSource;
};

interface NSOutlineViewDelegate extends NSControlTextEditingDelegate {

	outlineViewViewForTableColumnItem?(_: NSOutlineView, viewFor?: NSTableColumn, item: any): NSView;

	outlineViewWillDisplayOutlineCellForTableColumnItem?(_: NSOutlineView, willDisplayOutlineCell: any, for_?: NSTableColumn, item: any): void;

	outlineViewDidAddRowViewForRow?(_: NSOutlineView, didAdd: NSTableRowView, forRow: number): void;

	outlineViewDidRemoveRowViewForRow?(_: NSOutlineView, didRemove: NSTableRowView, forRow: number): void;

	outlineViewWillDisplayCellForTableColumnItem?(_: NSOutlineView, willDisplayCell: any, for_?: NSTableColumn, item: any): void;

	outlineViewShouldEditTableColumnItem?(_: NSOutlineView, shouldEdit?: NSTableColumn, item: any): boolean;

	outlineViewDataCellForTableColumnItem?(_: NSOutlineView, dataCellFor?: NSTableColumn, item: any): NSCell;

	outlineViewShouldTrackCellForTableColumnItem?(_: NSOutlineView, shouldTrackCell: NSCell, for_?: NSTableColumn, item: any): boolean;

	outlineViewShouldShowCellExpansionForTableColumnItem?(_: NSOutlineView, shouldShowCellExpansionFor?: NSTableColumn, item: any): boolean;

	outlineViewShouldSelectTableColumn?(_: NSOutlineView, shouldSelect?: NSTableColumn): boolean;

	outlineViewMouseDownInHeaderOfTableColumn?(_: NSOutlineView, mouseDownInHeaderOf: NSTableColumn): void;

	outlineViewDidClickTableColumn?(_: NSOutlineView, didClick: NSTableColumn): void;

	outlineViewDidDragTableColumn?(_: NSOutlineView, didDrag: NSTableColumn): void;

	outlineViewToolTipForCellRectTableColumnItemMouseLocation?(_: NSOutlineView, toolTipFor: NSCell, rect: CGRect, tableColumn?: NSTableColumn, item: any, mouseLocation: CGPoint): string;

	outlineViewShouldTypeSelectForEventWithCurrentSearchString?(_: NSOutlineView, shouldTypeSelectFor: NSEvent, withCurrentSearch?: string): boolean;

	outlineViewTypeSelectStringForTableColumnItem?(_: NSOutlineView, typeSelectStringFor?: NSTableColumn, item: any): string;

	outlineViewNextTypeSelectMatchFromItemToItemForString?(_: NSOutlineView, nextTypeSelectMatchFromItem: any, toItem: any, for_: string): any;

	outlineViewHeightOfRowByItem?(_: NSOutlineView, heightOfRowByItem: any): number;

	outlineViewIsGroupItem?(_: NSOutlineView, isGroupItem: any): boolean;

	outlineViewRowViewForItem?(_: NSOutlineView, rowViewForItem: any): NSTableRowView;

	outlineViewSelectionIndexesForProposedSelection?(_: NSOutlineView, selectionIndexesForProposedSelection: NSIndexSet): NSIndexSet;

	outlineViewShouldCollapseItem?(_: NSOutlineView, shouldCollapseItem: any): boolean;

	outlineViewShouldExpandItem?(_: NSOutlineView, shouldExpandItem: any): boolean;

	outlineViewShouldReorderColumnToColumn?(_: NSOutlineView, shouldReorderColumn: number, toColumn: number): boolean;

	outlineViewShouldSelectItem?(_: NSOutlineView, shouldSelectItem: any): boolean;

	outlineViewShouldShowOutlineCellForItem?(_: NSOutlineView, shouldShowOutlineCellForItem: any): boolean;

	outlineViewSizeToFitWidthOfColumn?(_: NSOutlineView, sizeToFitWidthOfColumn: number): number;

	outlineViewColumnDidMove?(_: NSNotification): void;

	outlineViewColumnDidResize?(_: NSNotification): void;

	outlineViewItemDidCollapse?(_: NSNotification): void;

	outlineViewItemDidExpand?(_: NSNotification): void;

	outlineViewItemWillCollapse?(_: NSNotification): void;

	outlineViewItemWillExpand?(_: NSNotification): void;

	outlineViewSelectionDidChange?(_: NSNotification): void;

	outlineViewSelectionIsChanging?(_: NSNotification): void;

	selectionShouldChangeInOutlineView?(in_: NSOutlineView): boolean;
}
declare var NSOutlineViewDelegate: {

	prototype: NSOutlineViewDelegate;
};

declare var NSOutlineViewDisclosureButtonKey: string;

declare const NSOutlineViewDropOnItemIndex: number;

declare var NSOutlineViewItemDidCollapseNotification: string;

declare var NSOutlineViewItemDidExpandNotification: string;

declare var NSOutlineViewItemWillCollapseNotification: string;

declare var NSOutlineViewItemWillExpandNotification: string;

declare var NSOutlineViewSelectionDidChangeNotification: string;

declare var NSOutlineViewSelectionIsChangingNotification: string;

declare var NSOutlineViewShowHideButtonKey: string;

declare class NSPDFImageRep extends NSImageRep {

	static imageRepWithData(data: NSData): NSPDFImageRep;

	readonly PDFRepresentation: NSData;

	readonly bounds: CGRect;

	setCurrentPage(_: number)

	currentPage: number;

	readonly pageCount: number;

	static create(data: NSData);
}

declare class NSPDFInfo extends NSObject implements NSCoding, NSCopying {

	setURL(_: NSURL)

	URL: NSURL;

	readonly attributes: NSMutableDictionary<string, any>;

	setFileExtensionHidden(_: boolean)

	isFileExtensionHidden: boolean;

	setOrientation(_: NSPaperOrientation)

	orientation: NSPaperOrientation;

	setPaperSize(_: CGSize)

	paperSize: CGSize;

	setTagNames(_: NSArray<string>)

	tagNames: NSArray<string>;

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NSPDFPanel extends NSObject {

	static panel(): NSPDFPanel;

	setAccessoryController(_: NSViewController)

	accessoryController: NSViewController;

	setDefaultFileName(_: string)

	defaultFileName: string;

	setOptions(_: NSPDFPanelOptions)

	options: NSPDFPanelOptions;

	beginSheetWithPDFInfoModalForWindowCompletionHandler(with_: NSPDFInfo, modalFor?: NSWindow, completionHandler: (p1: number) => void): void;
}

enum NSPDFPanelOptions {

	ShowsPaperSize = 4,

	ShowsOrientation = 8,

	RequestsParentDirectory = 16777216
}

globalThis.NSPDFPanelOptions = NSPDFPanelOptions;

declare class NSPICTImageRep extends NSImageRep {

	static imageRepWithData(data: NSData): NSPICTImageRep;

	readonly PICTRepresentation: NSData;

	readonly boundingBox: CGRect;

	static create(data: NSData);
}

declare var NSPPDIncludeNotFoundException: string;

declare var NSPPDIncludeStackOverflowException: string;

declare var NSPPDIncludeStackUnderflowException: string;

declare var NSPPDParseException: string;

declare class NSPageController extends NSViewController implements NSAnimatablePropertyContainer, NSCoding {

	static defaultAnimationForKey(forKey: string): any;

	setArrangedObjects(_: NSArray<any>)

	arrangedObjects: NSArray<any>;

	setDelegate(_: NSPageControllerDelegate)

	delegate: NSPageControllerDelegate;

	setSelectedIndex(_: number)

	selectedIndex: number;

	readonly selectedViewController: NSViewController;

	setTransitionStyle(_: NSPageControllerTransitionStyle)

	transitionStyle: NSPageControllerTransitionStyle;

	setAnimations(_: NSDictionary<string, any>)

	animations: NSDictionary<string, any>; // inherited from NSAnimatablePropertyContainer

	static create(coder: NSCoder); // inherited from NSCoding

	animationForKey(forKey: string): any;

	animator(): this;

	completeTransition(): void;

	encodeWithCoder(_: NSCoder): void;

	navigateBack(_?: any): void;

	navigateForward(_?: any): void;

	navigateForwardToObject(to: any): void;

	takeSelectedIndexFrom(_?: any): void;
}

interface NSPageControllerDelegate extends NSObjectProtocol {

	pageControllerIdentifierForObject?(_: NSPageController, identifierFor: any): string;

	pageControllerFrameForObject?(_: NSPageController, frameFor?: any): CGRect;

	pageControllerPrepareViewControllerWithObject?(_: NSPageController, prepare: NSViewController, with_?: any): void;

	pageControllerDidTransitionToObject?(_: NSPageController, didTransitionTo: any): void;

	pageControllerViewControllerForIdentifier?(_: NSPageController, viewControllerForIdentifier: string): NSViewController;

	pageControllerDidEndLiveTransition?(_: NSPageController): void;

	pageControllerWillStartLiveTransition?(_: NSPageController): void;
}
declare var NSPageControllerDelegate: {

	prototype: NSPageControllerDelegate;
};

enum NSPageControllerTransitionStyle {

	StackHistory = 0,

	StackBook = 1,

	HorizontalStrip = 2
}

globalThis.NSPageControllerTransitionStyle = NSPageControllerTransitionStyle;

declare const NSPageDownFunctionKey: number;

declare class NSPageLayout extends NSObject {

	static pageLayout(): NSPageLayout;

	readonly accessoryControllers: NSArray<NSViewController>;

	readonly printInfo: NSPrintInfo;

	addAccessoryController(_: NSViewController): void;

	beginSheetWithPrintInfoModalForWindowDelegateDidEndSelectorContextInfo(with_: NSPrintInfo, modalFor: NSWindow, delegate?: any, didEnd?: string, contextInfo?: any): void;

	removeAccessoryController(_: NSViewController): void;

	runModal(): number;

	runModalWithPrintInfo(with_: NSPrintInfo): number;
}

declare const NSPageUpFunctionKey: number;

declare class NSPanGestureRecognizer extends NSGestureRecognizer implements NSCoding {

	setButtonMask(_: number)

	buttonMask: number;

	setNumberOfTouchesRequired(_: number)

	numberOfTouchesRequired: number;

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	setTranslationInView(_: CGPoint, in_?: NSView): void;

	translationInView(in_?: NSView): CGPoint;

	velocityInView(in_?: NSView): CGPoint;
}

declare class NSPanel extends NSWindow {

	static windowWithContentViewController(contentViewController: NSViewController): NSPanel; // inherited from NSWindow

	setBecomesKeyOnlyIfNeeded(_: boolean)

	becomesKeyOnlyIfNeeded: boolean;

	setFloatingPanel(_: boolean)

	isFloatingPanel: boolean;

	setWorksWhenModal(_: boolean)

	worksWhenModal: boolean;
}

enum NSPaperOrientation {

	Portrait = 0,

	Landscape = 1
}

globalThis.NSPaperOrientation = NSPaperOrientation;

declare var NSPaperSizeDocumentAttribute: string;

declare const NSParagraphSeparatorCharacter: number;

declare class NSParagraphStyle extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static defaultWritingDirectionForLanguage(forLanguage?: string): NSWritingDirection;

	readonly alignment: NSTextAlignment;

	readonly allowsDefaultTighteningForTruncation: boolean;

	readonly baseWritingDirection: NSWritingDirection;

	readonly defaultTabInterval: number;

	readonly firstLineHeadIndent: number;

	readonly headIndent: number;

	readonly headerLevel: number;

	readonly hyphenationFactor: number;

	readonly lineBreakMode: NSLineBreakMode;

	readonly lineHeightMultiple: number;

	readonly lineSpacing: number;

	readonly maximumLineHeight: number;

	readonly minimumLineHeight: number;

	readonly paragraphSpacing: number;

	readonly paragraphSpacingBefore: number;

	readonly tabStops: NSArray<NSTextTab>;

	readonly tailIndent: number;

	readonly textBlocks: NSArray<NSTextBlock>;

	readonly textLists: NSArray<NSTextList>;

	readonly tighteningFactorForTruncation: number;

	static defaultParagraphStyle(): NSParagraphStyle;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	mutableCopyWithZone(_?: any): any;
}

declare var NSParagraphStyleAttributeName: string;

declare class NSPasteboard extends NSObject {

	static pasteboardByFilteringDataOfType(byFilteringData: NSData, ofType: string): NSPasteboard;

	static pasteboardByFilteringFile(byFilteringFile: string): NSPasteboard;

	static pasteboardByFilteringTypesInPasteboard(byFilteringTypesIn: NSPasteboard): NSPasteboard;

	static pasteboardWithName(name: string): NSPasteboard;

	static pasteboardWithUniqueName(): NSPasteboard;

	static typesFilterableTo(filterableTo: string): NSArray<string>;

	readonly changeCount: number;

	readonly name: string;

	readonly pasteboardItems: NSArray<NSPasteboardItem>;

	readonly types: NSArray<string>;

	static generalPasteboard(): NSPasteboard;

	addTypesOwner(_: NSArray<string>, owner?: any): number;

	availableTypeFromArray(from: NSArray<string>): string;

	canReadItemWithDataConformingToTypes(withDataConformingToTypes: NSArray<string>): boolean;

	canReadObjectForClassesOptions(forClasses: NSArray<typeof NSObject>, options?: NSDictionary<string, any>): boolean;

	clearContents(): number;

	dataForType(forType: string): NSData;

	declareTypesOwner(_: NSArray<string>, owner?: any): number;

	indexOfPasteboardItem(of: NSPasteboardItem): number;

	prepareForNewContentsWithOptions(with_: NSPasteboardContentsOptions): number;

	propertyListForType(forType: string): any;

	readFileContentsTypeToFile(_?: string, toFile: string): string;

	readFileWrapper(): NSFileWrapper;

	readObjectsForClassesOptions(forClasses: NSArray<typeof NSObject>, options?: NSDictionary<string, any>): NSArray<any>;

	releaseGlobally(): void;

	setDataForType(_?: NSData, forType: string): boolean;

	setPropertyListForType(_: any, forType: string): boolean;

	setStringForType(_: string, forType: string): boolean;

	stringForType(forType: string): string;

	writeFileContents(_: string): boolean;

	writeFileWrapper(_: NSFileWrapper): boolean;

	writeObjects(_: NSArray<NSPasteboardWriting>): boolean;
}

declare var NSPasteboardCommunicationException: string;

enum NSPasteboardContentsOptions {

	CurrentHostOnly = 1
}

globalThis.NSPasteboardContentsOptions = NSPasteboardContentsOptions;

declare class NSPasteboardItem extends NSObject implements NSPasteboardReading, NSPasteboardWriting {

	static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardReadingOptions;

	readonly types: NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(pasteboardPropertyList: any, ofType: string); // inherited from NSPasteboardReading

	availableTypeFromArray(from: NSArray<string>): string;

	conformsToProtocol(_: any /* Protocol */): boolean;

	dataForType(forType: string): NSData;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	pasteboardPropertyListForType(forType: string): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	propertyListForType(forType: string): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setDataForType(_: NSData, forType: string): boolean;

	setDataProviderForTypes(_: NSPasteboardItemDataProvider, forTypes: NSArray<string>): boolean;

	setPropertyListForType(_: any, forType: string): boolean;

	setStringForType(_: string, forType: string): boolean;

	stringForType(forType: string): string;

	writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
}

interface NSPasteboardItemDataProvider extends NSObjectProtocol {

	pasteboardItemProvideDataForType(_?: NSPasteboard, item: NSPasteboardItem, provideDataForType: string): void;

	pasteboardFinishedWithDataProvider?(_: NSPasteboard): void;
}
declare var NSPasteboardItemDataProvider: {

	prototype: NSPasteboardItemDataProvider;
};

declare var NSPasteboardNameDrag: string;

declare var NSPasteboardNameFind: string;

declare var NSPasteboardNameFont: string;

declare var NSPasteboardNameGeneral: string;

declare var NSPasteboardNameRuler: string;

interface NSPasteboardReading extends NSObjectProtocol {

	initWithPasteboardPropertyListOfType?(pasteboardPropertyList: any, ofType: string): NSPasteboardReading;
}
declare var NSPasteboardReading: {

	prototype: NSPasteboardReading;

	readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	readingOptionsForTypePasteboard?(forType: string, pasteboard: NSPasteboard): NSPasteboardReadingOptions;
};

enum NSPasteboardReadingOptions {

	AsData = 0,

	AsString = 1,

	AsPropertyList = 2,

	AsKeyedArchive = 4
}

globalThis.NSPasteboardReadingOptions = NSPasteboardReadingOptions;

declare var NSPasteboardTypeColor: string;

declare var NSPasteboardTypeFileURL: string;

declare var NSPasteboardTypeFont: string;

declare var NSPasteboardTypeHTML: string;

declare var NSPasteboardTypeMultipleTextSelection: string;

interface NSPasteboardTypeOwner extends NSObjectProtocol {

	pasteboardProvideDataForType(_: NSPasteboard, provideDataForType: string): void;

	pasteboardChangedOwner?(_: NSPasteboard): void;
}
declare var NSPasteboardTypeOwner: {

	prototype: NSPasteboardTypeOwner;
};

declare var NSPasteboardTypePDF: string;

declare var NSPasteboardTypePNG: string;

declare var NSPasteboardTypeRTF: string;

declare var NSPasteboardTypeRTFD: string;

declare var NSPasteboardTypeRuler: string;

declare var NSPasteboardTypeSound: string;

declare var NSPasteboardTypeString: string;

declare var NSPasteboardTypeTIFF: string;

declare var NSPasteboardTypeTabularText: string;

declare var NSPasteboardTypeTextFinderOptions: string;

declare var NSPasteboardTypeURL: string;

declare var NSPasteboardURLReadingContentsConformToTypesKey: string;

declare var NSPasteboardURLReadingFileURLsOnlyKey: string;

interface NSPasteboardWriting extends NSObjectProtocol {

	pasteboardPropertyListForType(forType: string): any;

	writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	writingOptionsForTypePasteboard?(forType: string, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
}
declare var NSPasteboardWriting: {

	prototype: NSPasteboardWriting;
};

enum NSPasteboardWritingOptions {

	Promised = 512
}

globalThis.NSPasteboardWritingOptions = NSPasteboardWritingOptions;

declare class NSPathCell extends NSActionCell implements NSMenuItemValidation, NSOpenSavePanelDelegate {

	setURL(_: NSURL)

	URL: NSURL;

	setAllowedTypes(_: NSArray<string>)

	allowedTypes: NSArray<string>;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	readonly clickedPathComponentCell: NSPathComponentCell;

	setDelegate(_: NSPathCellDelegate)

	delegate: NSPathCellDelegate;

	setDoubleAction(_: string)

	doubleAction: string;

	setPathComponentCells(_: NSArray<NSPathComponentCell>)

	pathComponentCells: NSArray<NSPathComponentCell>;

	setPathStyle(_: NSPathStyle)

	pathStyle: NSPathStyle;

	setPlaceholderAttributedString(_: NSAttributedString)

	placeholderAttributedString: NSAttributedString;

	setPlaceholderString(_: string)

	placeholderString: string;

	static pathComponentCellClass(): typeof NSObject;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	mouseEnteredWithFrameInView(with_: NSEvent, frame: CGRect, in_: NSView): void;

	mouseExitedWithFrameInView(with_: NSEvent, frame: CGRect, in_: NSView): void;

	panelDidChangeToDirectoryURL(_: any, didChangeToDirectoryURL?: NSURL): void;

	panelShouldEnableURL(_: any, shouldEnable: NSURL): boolean;

	panelUserEnteredFilenameConfirmed(_: any, userEnteredFilename: string, confirmed: boolean): string;

	panelValidateURLError(validateURL: any, error: NSURL): boolean;

	panelWillExpand(_: any, willExpand: boolean): void;

	panelSelectionDidChange(_?: any): void;

	pathComponentCellAtPointWithFrameInView(at: CGPoint, withFrame: CGRect, in_: NSView): NSPathComponentCell;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	rectOfPathComponentCellWithFrameInView(of: NSPathComponentCell, withFrame: CGRect, in_: NSView): CGRect;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setObjectValue(_?: any): void;

	validateMenuItem(_: NSMenuItem): boolean;
}

interface NSPathCellDelegate extends NSObjectProtocol {

	pathCellWillDisplayOpenPanel?(_: NSPathCell, willDisplay: NSOpenPanel): void;

	pathCellWillPopUpMenu?(_: NSPathCell, willPopUp: NSMenu): void;
}
declare var NSPathCellDelegate: {

	prototype: NSPathCellDelegate;
};

declare class NSPathComponentCell extends NSTextFieldCell {

	setURL(_: NSURL)

	URL: NSURL;
}

declare class NSPathControl extends NSControl {

	setURL(_: NSURL)

	URL: NSURL;

	setAllowedTypes(_: NSArray<string>)

	allowedTypes: NSArray<string>;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	readonly clickedPathItem: NSPathControlItem;

	setDelegate(_: NSPathControlDelegate)

	delegate: NSPathControlDelegate;

	setDoubleAction(_: string)

	doubleAction: string;

	setEditable(_: boolean)

	isEditable: boolean;

	setPathItems(_: NSArray<NSPathControlItem>)

	pathItems: NSArray<NSPathControlItem>;

	setPathStyle(_: NSPathStyle)

	pathStyle: NSPathStyle;

	setPlaceholderAttributedString(_: NSAttributedString)

	placeholderAttributedString: NSAttributedString;

	setPlaceholderString(_: string)

	placeholderString: string;

	setDraggingSourceOperationMaskForLocal(_: NSDragOperation, forLocal: boolean): void;
}

interface NSPathControlDelegate extends NSObjectProtocol {

	pathControlShouldDragItemWithPasteboard?(_: NSPathControl, shouldDrag: NSPathControlItem, with_: NSPasteboard): boolean;

	pathControlShouldDragPathComponentCellWithPasteboard?(_: NSPathControl, shouldDrag: NSPathComponentCell, with_: NSPasteboard): boolean;

	pathControlWillDisplayOpenPanel?(_: NSPathControl, willDisplay: NSOpenPanel): void;

	pathControlWillPopUpMenu?(_: NSPathControl, willPopUp: NSMenu): void;

	pathControlAcceptDrop?(_: NSPathControl, acceptDrop: NSDraggingInfo): boolean;

	pathControlValidateDrop?(_: NSPathControl, validateDrop: NSDraggingInfo): NSDragOperation;
}
declare var NSPathControlDelegate: {

	prototype: NSPathControlDelegate;
};

declare class NSPathControlItem extends NSObject {

	readonly URL: NSURL;

	setAttributedTitle(_: NSAttributedString)

	attributedTitle: NSAttributedString;

	setImage(_: NSImage)

	image: NSImage;

	setTitle(_: string)

	title: string;
}

enum NSPathStyle {

	Standard = 0,

	PopUp = 2,

	NavigationBar = 1
}

globalThis.NSPathStyle = NSPathStyle;

declare var NSPatternColorSpace: string;

declare const NSPauseFunctionKey: number;

declare function NSPerformService(itemName: string, pboard: NSPasteboard): boolean;

declare class NSPersistentDocument extends NSDocument {

	setManagedObjectContext(_: NSManagedObjectContext)

	managedObjectContext: NSManagedObjectContext;

	readonly managedObjectModel: NSManagedObjectModel;

	configurePersistentStoreCoordinatorForURLOfTypeModelConfigurationStoreOptionsError(ofType: NSURL, modelConfiguration: string, storeOptions?: string, error?: NSDictionary<string, any>): boolean;

	persistentStoreTypeForFileType(forFileType: string): string;
}

declare class NSPickerTouchBarItem extends NSTouchBarItem {

	static pickerTouchBarItemWithIdentifierImagesSelectionModeTargetAction(identifier: string, images: NSArray<NSImage>, selectionMode: NSPickerTouchBarItemSelectionMode, target?: any, action?: string): NSPickerTouchBarItem;

	static pickerTouchBarItemWithIdentifierLabelsSelectionModeTargetAction(identifier: string, labels: NSArray<string>, selectionMode: NSPickerTouchBarItemSelectionMode, target?: any, action?: string): NSPickerTouchBarItem;

	setAction(_: string)

	action: string;

	setCollapsedRepresentationImage(_: NSImage)

	collapsedRepresentationImage: NSImage;

	setCollapsedRepresentationLabel(_: string)

	collapsedRepresentationLabel: string;

	setControlRepresentation(_: NSPickerTouchBarItemControlRepresentation)

	controlRepresentation: NSPickerTouchBarItemControlRepresentation;

	setCustomizationLabel(_: string)

	customizationLabel: string;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setNumberOfOptions(_: number)

	numberOfOptions: number;

	setSelectedIndex(_: number)

	selectedIndex: number;

	setSelectionColor(_: NSColor)

	selectionColor: NSColor;

	setSelectionMode(_: NSPickerTouchBarItemSelectionMode)

	selectionMode: NSPickerTouchBarItemSelectionMode;

	setTarget(_: any)

	target: any;

	imageAtIndex(at: number): NSImage;

	isEnabledAtIndex(at: number): boolean;

	labelAtIndex(at: number): string;

	setEnabledAtIndex(_: boolean, at: number): void;

	setImageAtIndex(_?: NSImage, at: number): void;

	setLabelAtIndex(_: string, at: number): void;
}

enum NSPickerTouchBarItemControlRepresentation {

	Automatic = 0,

	Expanded = 1,

	Collapsed = 2
}

globalThis.NSPickerTouchBarItemControlRepresentation = NSPickerTouchBarItemControlRepresentation;

enum NSPickerTouchBarItemSelectionMode {

	SelectOne = 0,

	SelectAny = 1,

	Momentary = 2
}

globalThis.NSPickerTouchBarItemSelectionMode = NSPickerTouchBarItemSelectionMode;

declare var NSPlainTextDocumentType: string;

declare function NSPlanarFromDepth(depth: NSWindowDepth): boolean;

enum NSPointingDeviceType {

	Unknown = 0,

	Pen = 1,

	Cursor = 2,

	Eraser = 3
}

globalThis.NSPointingDeviceType = NSPointingDeviceType;

enum NSPopUpArrowPosition {

	NoArrow = 0,

	ArrowAtCenter = 1,

	ArrowAtBottom = 2
}

globalThis.NSPopUpArrowPosition = NSPopUpArrowPosition;

declare class NSPopUpButton extends NSButton {

	static buttonWithImageTargetAction(image: NSImage, target?: any, action?: string): NSPopUpButton; // inherited from NSButton

	static buttonWithTitleImageTargetAction(title: string, image: NSImage, target?: any, action?: string): NSPopUpButton; // inherited from NSButton

	static buttonWithTitleTargetAction(title: string, target?: any, action?: string): NSPopUpButton; // inherited from NSButton

	static checkboxWithTitleTargetAction(checkboxWithTitle: string, target?: any, action?: string): NSPopUpButton; // inherited from NSButton

	static radioButtonWithTitleTargetAction(radioButtonWithTitle: string, target?: any, action?: string): NSPopUpButton; // inherited from NSButton

	setAutoenablesItems(_: boolean)

	autoenablesItems: boolean;

	readonly indexOfSelectedItem: number;

	readonly itemArray: NSArray<NSMenuItem>;

	readonly itemTitles: NSArray<string>;

	readonly lastItem: NSMenuItem;

	readonly numberOfItems: number;

	setPreferredEdge(_: NSRectEdge)

	preferredEdge: NSRectEdge;

	setPullsDown(_: boolean)

	pullsDown: boolean;

	readonly selectedItem: NSMenuItem;

	readonly selectedTag: number;

	readonly titleOfSelectedItem: string;

	static create(frame: CGRect, pullsDown: boolean);

	addItemWithTitle(withTitle: string): void;

	addItemsWithTitles(withTitles: NSArray<string>): void;

	indexOfItem(of: NSMenuItem): number;

	indexOfItemWithRepresentedObject(withRepresentedObject?: any): number;

	indexOfItemWithTag(withTag: number): number;

	indexOfItemWithTargetAndAction(withTarget?: any, andAction?: string): number;

	indexOfItemWithTitle(withTitle: string): number;

	insertItemWithTitleAtIndex(withTitle: string, at: number): void;

	itemAtIndex(at: number): NSMenuItem;

	itemTitleAtIndex(at: number): string;

	itemWithTitle(withTitle: string): NSMenuItem;

	removeAllItems(): void;

	removeItemAtIndex(at: number): void;

	removeItemWithTitle(withTitle: string): void;

	selectItem(_?: NSMenuItem): void;

	selectItemAtIndex(at: number): void;

	selectItemWithTag(withTag: number): boolean;

	selectItemWithTitle(withTitle: string): void;

	setTitle(_: string): void;

	synchronizeTitleAndSelectedItem(): void;
}

declare class NSPopUpButtonCell extends NSMenuItemCell implements NSMenuItemValidation {

	setAltersStateOfSelectedItem(_: boolean)

	altersStateOfSelectedItem: boolean;

	setArrowPosition(_: NSPopUpArrowPosition)

	arrowPosition: NSPopUpArrowPosition;

	setAutoenablesItems(_: boolean)

	autoenablesItems: boolean;

	readonly indexOfSelectedItem: number;

	readonly itemArray: NSArray<NSMenuItem>;

	readonly itemTitles: NSArray<string>;

	readonly lastItem: NSMenuItem;

	readonly numberOfItems: number;

	setPreferredEdge(_: NSRectEdge)

	preferredEdge: NSRectEdge;

	setPullsDown(_: boolean)

	pullsDown: boolean;

	readonly selectedItem: NSMenuItem;

	readonly titleOfSelectedItem: string;

	setUsesItemFromMenu(_: boolean)

	usesItemFromMenu: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(textCell: string, pullsDown: boolean);

	addItemWithTitle(withTitle: string): void;

	addItemsWithTitles(withTitles: NSArray<string>): void;

	attachPopUpWithFrameInView(withFrame: CGRect, in_: NSView): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	dismissPopUp(): void;

	indexOfItem(of: NSMenuItem): number;

	indexOfItemWithRepresentedObject(withRepresentedObject?: any): number;

	indexOfItemWithTag(withTag: number): number;

	indexOfItemWithTargetAndAction(withTarget?: any, andAction?: string): number;

	indexOfItemWithTitle(withTitle: string): number;

	insertItemWithTitleAtIndex(withTitle: string, at: number): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	itemAtIndex(at: number): NSMenuItem;

	itemTitleAtIndex(at: number): string;

	itemWithTitle(withTitle: string): NSMenuItem;

	performClickWithFrameInView(withFrame: CGRect, in_: NSView): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeAllItems(): void;

	removeItemAtIndex(at: number): void;

	removeItemWithTitle(withTitle: string): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	selectItem(_?: NSMenuItem): void;

	selectItemAtIndex(at: number): void;

	selectItemWithTag(withTag: number): boolean;

	selectItemWithTitle(withTitle: string): void;

	self(): this;

	setTitle(_?: string): void;

	synchronizeTitleAndSelectedItem(): void;

	validateMenuItem(_: NSMenuItem): boolean;
}

declare var NSPopUpButtonCellWillPopUpNotification: string;

declare var NSPopUpButtonWillPopUpNotification: string;

declare var NSPopUpMenuWindowLevel: number;

declare class NSPopover extends NSResponder implements NSAccessibility, NSAccessibilityElementProtocol, NSAppearanceCustomization {

	setAnimates(_: boolean)

	animates: boolean;

	setBehavior(_: NSPopoverBehavior)

	behavior: NSPopoverBehavior;

	setContentSize(_: CGSize)

	contentSize: CGSize;

	setContentViewController(_: NSViewController)

	contentViewController: NSViewController;

	setDelegate(_: NSPopoverDelegate)

	delegate: NSPopoverDelegate;

	readonly isDetached: boolean;

	setPositioningRect(_: CGRect)

	positioningRect: CGRect;

	readonly isShown: boolean;

	setAccessibilityActivationPoint(_: CGPoint)

	accessibilityActivationPoint: CGPoint; // inherited from NSAccessibility

	setAccessibilityAllowedValues(_: NSArray<number>)

	accessibilityAllowedValues: NSArray<number>; // inherited from NSAccessibility

	setAccessibilityAlternateUIVisible(_: boolean)

	isAccessibilityAlternateUIVisible: boolean; // inherited from NSAccessibility

	setAccessibilityApplicationFocusedUIElement(_: any)

	accessibilityApplicationFocusedUIElement: any; // inherited from NSAccessibility

	setAccessibilityCancelButton(_: any)

	accessibilityCancelButton: any; // inherited from NSAccessibility

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)

	accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>; // inherited from NSAccessibility

	setAccessibilityClearButton(_: any)

	accessibilityClearButton: any; // inherited from NSAccessibility

	setAccessibilityCloseButton(_: any)

	accessibilityCloseButton: any; // inherited from NSAccessibility

	setAccessibilityColumnCount(_: number)

	accessibilityColumnCount: number; // inherited from NSAccessibility

	setAccessibilityColumnHeaderUIElements(_: NSArray<any>)

	accessibilityColumnHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumnIndexRange(_: NSRange)

	accessibilityColumnIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityColumnTitles(_: NSArray<any>)

	accessibilityColumnTitles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumns(_: NSArray<any>)

	accessibilityColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityContents(_: NSArray<any>)

	accessibilityContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityCriticalValue(_: any)

	accessibilityCriticalValue: any; // inherited from NSAccessibility

	setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)

	accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>; // inherited from NSAccessibility

	setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)

	accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>; // inherited from NSAccessibility

	setAccessibilityDecrementButton(_: any)

	accessibilityDecrementButton: any; // inherited from NSAccessibility

	setAccessibilityDefaultButton(_: any)

	accessibilityDefaultButton: any; // inherited from NSAccessibility

	setAccessibilityDisclosed(_: boolean)

	isAccessibilityDisclosed: boolean; // inherited from NSAccessibility

	setAccessibilityDisclosedByRow(_: any)

	accessibilityDisclosedByRow: any; // inherited from NSAccessibility

	setAccessibilityDisclosedRows(_: any)

	accessibilityDisclosedRows: any; // inherited from NSAccessibility

	setAccessibilityDisclosureLevel(_: number)

	accessibilityDisclosureLevel: number; // inherited from NSAccessibility

	setAccessibilityDocument(_: string)

	accessibilityDocument: string; // inherited from NSAccessibility

	setAccessibilityEdited(_: boolean)

	isAccessibilityEdited: boolean; // inherited from NSAccessibility

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean; // inherited from NSAccessibility

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean; // inherited from NSAccessibility

	setAccessibilityExpanded(_: boolean)

	isAccessibilityExpanded: boolean; // inherited from NSAccessibility

	setAccessibilityExtrasMenuBar(_: any)

	accessibilityExtrasMenuBar: any; // inherited from NSAccessibility

	setAccessibilityFilename(_: string)

	accessibilityFilename: string; // inherited from NSAccessibility

	setAccessibilityFocused(_: boolean)

	isAccessibilityFocused: boolean; // inherited from NSAccessibility

	setAccessibilityFocusedWindow(_: any)

	accessibilityFocusedWindow: any; // inherited from NSAccessibility

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect; // inherited from NSAccessibility

	setAccessibilityFrontmost(_: boolean)

	isAccessibilityFrontmost: boolean; // inherited from NSAccessibility

	setAccessibilityFullScreenButton(_: any)

	accessibilityFullScreenButton: any; // inherited from NSAccessibility

	setAccessibilityGrowArea(_: any)

	accessibilityGrowArea: any; // inherited from NSAccessibility

	setAccessibilityHandles(_: NSArray<any>)

	accessibilityHandles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityHeader(_: any)

	accessibilityHeader: any; // inherited from NSAccessibility

	setAccessibilityHelp(_: string)

	accessibilityHelp: string; // inherited from NSAccessibility

	setAccessibilityHidden(_: boolean)

	isAccessibilityHidden: boolean; // inherited from NSAccessibility

	setAccessibilityHorizontalScrollBar(_: any)

	accessibilityHorizontalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityHorizontalUnitDescription(_: string)

	accessibilityHorizontalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityHorizontalUnits(_: NSAccessibilityUnits)

	accessibilityHorizontalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityIdentifier(_: string)

	accessibilityIdentifier: string; // inherited from NSAccessibility

	setAccessibilityIncrementButton(_: any)

	accessibilityIncrementButton: any; // inherited from NSAccessibility

	setAccessibilityIndex(_: number)

	accessibilityIndex: number; // inherited from NSAccessibility

	setAccessibilityInsertionPointLineNumber(_: number)

	accessibilityInsertionPointLineNumber: number; // inherited from NSAccessibility

	setAccessibilityLabel(_: string)

	accessibilityLabel: string; // inherited from NSAccessibility

	setAccessibilityLabelUIElements(_: NSArray<any>)

	accessibilityLabelUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityLabelValue(_: number)

	accessibilityLabelValue: number; // inherited from NSAccessibility

	setAccessibilityLinkedUIElements(_: NSArray<any>)

	accessibilityLinkedUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMain(_: boolean)

	isAccessibilityMain: boolean; // inherited from NSAccessibility

	setAccessibilityMainWindow(_: any)

	accessibilityMainWindow: any; // inherited from NSAccessibility

	setAccessibilityMarkerGroupUIElement(_: any)

	accessibilityMarkerGroupUIElement: any; // inherited from NSAccessibility

	setAccessibilityMarkerTypeDescription(_: string)

	accessibilityMarkerTypeDescription: string; // inherited from NSAccessibility

	setAccessibilityMarkerUIElements(_: NSArray<any>)

	accessibilityMarkerUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMarkerValues(_: any)

	accessibilityMarkerValues: any; // inherited from NSAccessibility

	setAccessibilityMaxValue(_: any)

	accessibilityMaxValue: any; // inherited from NSAccessibility

	setAccessibilityMenuBar(_: any)

	accessibilityMenuBar: any; // inherited from NSAccessibility

	setAccessibilityMinValue(_: any)

	accessibilityMinValue: any; // inherited from NSAccessibility

	setAccessibilityMinimizeButton(_: any)

	accessibilityMinimizeButton: any; // inherited from NSAccessibility

	setAccessibilityMinimized(_: boolean)

	isAccessibilityMinimized: boolean; // inherited from NSAccessibility

	setAccessibilityModal(_: boolean)

	isAccessibilityModal: boolean; // inherited from NSAccessibility

	setAccessibilityNextContents(_: NSArray<any>)

	accessibilityNextContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityNumberOfCharacters(_: number)

	accessibilityNumberOfCharacters: number; // inherited from NSAccessibility

	setAccessibilityOrderedByRow(_: boolean)

	isAccessibilityOrderedByRow: boolean; // inherited from NSAccessibility

	setAccessibilityOrientation(_: NSAccessibilityOrientation)

	accessibilityOrientation: NSAccessibilityOrientation; // inherited from NSAccessibility

	setAccessibilityOverflowButton(_: any)

	accessibilityOverflowButton: any; // inherited from NSAccessibility

	setAccessibilityParent(_: any)

	accessibilityParent: any; // inherited from NSAccessibility

	setAccessibilityPlaceholderValue(_: string)

	accessibilityPlaceholderValue: string; // inherited from NSAccessibility

	setAccessibilityPreviousContents(_: NSArray<any>)

	accessibilityPreviousContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityProtectedContent(_: boolean)

	isAccessibilityProtectedContent: boolean; // inherited from NSAccessibility

	setAccessibilityProxy(_: any)

	accessibilityProxy: any; // inherited from NSAccessibility

	setAccessibilityRequired(_: boolean)

	isAccessibilityRequired: boolean; // inherited from NSAccessibility

	setAccessibilityRole(_: string)

	accessibilityRole: string; // inherited from NSAccessibility

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string; // inherited from NSAccessibility

	setAccessibilityRowCount(_: number)

	accessibilityRowCount: number; // inherited from NSAccessibility

	setAccessibilityRowHeaderUIElements(_: NSArray<any>)

	accessibilityRowHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRowIndexRange(_: NSRange)

	accessibilityRowIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityRows(_: NSArray<any>)

	accessibilityRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRulerMarkerType(_: NSAccessibilityRulerMarkerType)

	accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType; // inherited from NSAccessibility

	setAccessibilitySearchButton(_: any)

	accessibilitySearchButton: any; // inherited from NSAccessibility

	setAccessibilitySearchMenu(_: any)

	accessibilitySearchMenu: any; // inherited from NSAccessibility

	setAccessibilitySelected(_: boolean)

	isAccessibilitySelected: boolean; // inherited from NSAccessibility

	setAccessibilitySelectedCells(_: NSArray<any>)

	accessibilitySelectedCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedChildren(_: NSArray<any>)

	accessibilitySelectedChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedColumns(_: NSArray<any>)

	accessibilitySelectedColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedRows(_: NSArray<any>)

	accessibilitySelectedRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedText(_: string)

	accessibilitySelectedText: string; // inherited from NSAccessibility

	setAccessibilitySelectedTextRange(_: NSRange)

	accessibilitySelectedTextRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)

	accessibilitySelectedTextRanges: NSArray<NSValue>; // inherited from NSAccessibility

	setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)

	accessibilityServesAsTitleForUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedCharacterRange(_: NSRange)

	accessibilitySharedCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySharedFocusElements(_: NSArray<any>)

	accessibilitySharedFocusElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedTextUIElements(_: NSArray<any>)

	accessibilitySharedTextUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityShownMenu(_: any)

	accessibilityShownMenu: any; // inherited from NSAccessibility

	setAccessibilitySortDirection(_: NSAccessibilitySortDirection)

	accessibilitySortDirection: NSAccessibilitySortDirection; // inherited from NSAccessibility

	setAccessibilitySplitters(_: NSArray<any>)

	accessibilitySplitters: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string; // inherited from NSAccessibility

	setAccessibilityTabs(_: NSArray<any>)

	accessibilityTabs: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityTitle(_: string)

	accessibilityTitle: string; // inherited from NSAccessibility

	setAccessibilityTitleUIElement(_: any)

	accessibilityTitleUIElement: any; // inherited from NSAccessibility

	setAccessibilityToolbarButton(_: any)

	accessibilityToolbarButton: any; // inherited from NSAccessibility

	setAccessibilityTopLevelUIElement(_: any)

	accessibilityTopLevelUIElement: any; // inherited from NSAccessibility

	setAccessibilityURL(_: NSURL)

	accessibilityURL: NSURL; // inherited from NSAccessibility

	setAccessibilityUnitDescription(_: string)

	accessibilityUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityUnits(_: NSAccessibilityUnits)

	accessibilityUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityValue(_: any)

	accessibilityValue: any; // inherited from NSAccessibility

	setAccessibilityValueDescription(_: string)

	accessibilityValueDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalScrollBar(_: any)

	accessibilityVerticalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityVerticalUnitDescription(_: string)

	accessibilityVerticalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalUnits(_: NSAccessibilityUnits)

	accessibilityVerticalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityVisibleCells(_: NSArray<any>)

	accessibilityVisibleCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleCharacterRange(_: NSRange)

	accessibilityVisibleCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilityVisibleChildren(_: NSArray<any>)

	accessibilityVisibleChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleColumns(_: NSArray<any>)

	accessibilityVisibleColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleRows(_: NSArray<any>)

	accessibilityVisibleRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityWarningValue(_: any)

	accessibilityWarningValue: any; // inherited from NSAccessibility

	setAccessibilityWindow(_: any)

	accessibilityWindow: any; // inherited from NSAccessibility

	setAccessibilityWindows(_: NSArray<any>)

	accessibilityWindows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityZoomButton(_: any)

	accessibilityZoomButton: any; // inherited from NSAccessibility

	setAppearance(_: NSAppearance)

	appearance: NSAppearance; // inherited from NSAppearanceCustomization

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly effectiveAppearance: NSAppearance; // inherited from NSAppearanceCustomization

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;

	accessibilityCellForColumnRow(_: number, row: number): any;

	accessibilityFrame(): CGRect;

	accessibilityFrameForRange(_: NSRange): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLayoutPointForScreenPoint(_: CGPoint): CGPoint;

	accessibilityLayoutSizeForScreenSize(_: CGSize): CGSize;

	accessibilityLineForIndex(_: number): number;

	accessibilityParent(): any;

	accessibilityPerformCancel(): boolean;

	accessibilityPerformConfirm(): boolean;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformDelete(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPick(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityPerformRaise(): boolean;

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	accessibilityPerformShowMenu(): boolean;

	accessibilityRTFForRange(_: NSRange): NSData;

	accessibilityRangeForIndex(_: number): NSRange;

	accessibilityRangeForLine(_: number): NSRange;

	accessibilityRangeForPosition(_: CGPoint): NSRange;

	accessibilityScreenPointForLayoutPoint(_: CGPoint): CGPoint;

	accessibilityScreenSizeForLayoutSize(_: CGSize): CGSize;

	accessibilityStringForRange(_: NSRange): string;

	accessibilityStyleRangeForIndex(_: number): NSRange;

	close(): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isAccessibilityFocused(): boolean;

	isAccessibilitySelectorAllowed(_: string): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performClose(_?: any): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	showRelativeToRectOfViewPreferredEdge(relativeTo: CGRect, of: NSView, preferredEdge: NSRectEdge): void;
}

enum NSPopoverBehavior {

	ApplicationDefined = 0,

	Transient = 1,

	Semitransient = 2
}

globalThis.NSPopoverBehavior = NSPopoverBehavior;

declare var NSPopoverCloseReasonDetachToWindow: string;

declare var NSPopoverCloseReasonKey: string;

declare var NSPopoverCloseReasonStandard: string;

interface NSPopoverDelegate extends NSObjectProtocol {

	detachableWindowForPopover?(for_: NSPopover): NSWindow;

	popoverDidClose?(_: NSNotification): void;

	popoverDidDetach?(_: NSPopover): void;

	popoverDidShow?(_: NSNotification): void;

	popoverShouldClose?(_: NSPopover): boolean;

	popoverShouldDetach?(_: NSPopover): boolean;

	popoverWillClose?(_: NSNotification): void;

	popoverWillShow?(_: NSNotification): void;
}
declare var NSPopoverDelegate: {

	prototype: NSPopoverDelegate;
};

declare var NSPopoverDidCloseNotification: string;

declare var NSPopoverDidShowNotification: string;

declare class NSPopoverTouchBarItem extends NSTouchBarItem {

	setCollapsedRepresentation(_: NSView)

	collapsedRepresentation: NSView;

	setCollapsedRepresentationImage(_: NSImage)

	collapsedRepresentationImage: NSImage;

	setCollapsedRepresentationLabel(_: string)

	collapsedRepresentationLabel: string;

	setCustomizationLabel(_: string)

	customizationLabel: string;

	setPopoverTouchBar(_: NSTouchBar)

	popoverTouchBar: NSTouchBar;

	setPressAndHoldTouchBar(_: NSTouchBar)

	pressAndHoldTouchBar: NSTouchBar;

	setShowsCloseButton(_: boolean)

	showsCloseButton: boolean;

	dismissPopover(_?: any): void;

	makeStandardActivatePopoverGestureRecognizer(): NSGestureRecognizer;

	showPopover(_?: any): void;
}

declare var NSPopoverWillCloseNotification: string;

declare var NSPopoverWillShowNotification: string;

declare var NSPositioningRectBinding: string;

declare var NSPredicateBinding: string;

declare class NSPredicateEditor extends NSRuleEditor {

	setRowTemplates(_: NSArray<NSPredicateEditorRowTemplate>)

	rowTemplates: NSArray<NSPredicateEditorRowTemplate>;
}

declare class NSPredicateEditorRowTemplate extends NSObject implements NSCoding, NSCopying {

	static templatesWithAttributeKeyPathsInEntityDescription(withAttributeKeyPaths: NSArray<string>, in_: NSEntityDescription): NSArray<NSPredicateEditorRowTemplate>;

	readonly compoundTypes: NSArray<number>;

	readonly leftExpressions: NSArray<NSExpression>;

	readonly modifier: NSComparisonPredicateModifier;

	readonly operators: NSArray<number>;

	readonly options: number;

	readonly rightExpressionAttributeType: NSAttributeType;

	readonly rightExpressions: NSArray<NSExpression>;

	readonly templateViews: NSArray<NSView>;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(compoundTypes: NSArray<number> | number[]);

	static create(leftExpressions: NSArray<NSExpression> | NSExpression[], rightExpressionAttributeType: NSAttributeType, modifier: NSComparisonPredicateModifier, operators: NSArray<number> | number[], options: number);

	static create(leftExpressions: NSArray<NSExpression> | NSExpression[], rightExpressions: NSArray<NSExpression> | NSExpression[], modifier: NSComparisonPredicateModifier, operators: NSArray<number> | number[], options: number);

	copyWithZone(_?: any): any;

	displayableSubpredicatesOfPredicate(of: NSPredicate): NSArray<NSPredicate>;

	encodeWithCoder(_: NSCoder): void;

	matchForPredicate(for_: NSPredicate): number;

	predicateWithSubpredicates(withSubpredicates?: NSArray<NSPredicate>): NSPredicate;

	setPredicate(_: NSPredicate): void;
}

declare var NSPredicateFormatBindingOption: string;

declare var NSPreferredScrollerStyleDidChangeNotification: string;

declare var NSPrefixSpacesDocumentAttribute: string;

declare class NSPressGestureRecognizer extends NSGestureRecognizer implements NSCoding {

	setAllowableMovement(_: number)

	allowableMovement: number;

	setButtonMask(_: number)

	buttonMask: number;

	setMinimumPressDuration(_: number)

	minimumPressDuration: number;

	setNumberOfTouchesRequired(_: number)

	numberOfTouchesRequired: number;

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum NSPressureBehavior {

	Unknown = -1,

	PrimaryDefault = 0,

	PrimaryClick = 1,

	PrimaryGeneric = 2,

	PrimaryAccelerator = 3,

	PrimaryDeepClick = 5,

	PrimaryDeepDrag = 6
}

globalThis.NSPressureBehavior = NSPressureBehavior;

declare class NSPressureConfiguration extends NSObject {

	readonly pressureBehavior: NSPressureBehavior;

	static create(pressureBehavior: NSPressureBehavior);

	set(): void;
}

declare const NSPrevFunctionKey: number;

declare var NSPrintAllPages: string;

declare var NSPrintAllPresetsJobStyleHint: string;

declare var NSPrintBottomMargin: string;

declare var NSPrintCancelJob: string;

declare var NSPrintCopies: string;

declare var NSPrintDetailedErrorReporting: string;

declare var NSPrintFaxNumber: string;

declare var NSPrintFirstPage: string;

declare const NSPrintFunctionKey: number;

declare var NSPrintHeaderAndFooter: string;

declare var NSPrintHorizontalPagination: string;

declare var NSPrintHorizontallyCentered: string;

declare class NSPrintInfo extends NSObject implements NSCoding, NSCopying {

	setBottomMargin(_: number)

	bottomMargin: number;

	setHorizontalPagination(_: NSPrintingPaginationMode)

	horizontalPagination: NSPrintingPaginationMode;

	setHorizontallyCentered(_: boolean)

	isHorizontallyCentered: boolean;

	readonly imageablePageBounds: CGRect;

	setJobDisposition(_: string)

	jobDisposition: string;

	setLeftMargin(_: number)

	leftMargin: number;

	readonly localizedPaperName: string;

	setOrientation(_: NSPaperOrientation)

	orientation: NSPaperOrientation;

	setPaperName(_: string)

	paperName: string;

	setPaperSize(_: CGSize)

	paperSize: CGSize;

	readonly printSettings: NSMutableDictionary<string, any>;

	setPrinter(_: NSPrinter)

	printer: NSPrinter;

	setRightMargin(_: number)

	rightMargin: number;

	setScalingFactor(_: number)

	scalingFactor: number;

	setSelectionOnly(_: boolean)

	isSelectionOnly: boolean;

	setTopMargin(_: number)

	topMargin: number;

	setVerticalPagination(_: NSPrintingPaginationMode)

	verticalPagination: NSPrintingPaginationMode;

	setVerticallyCentered(_: boolean)

	isVerticallyCentered: boolean;

	static defaultPrinter(): NSPrinter;

	static setSharedPrintInfo(_: NSPrintInfo)

	sharedPrintInfo: NSPrintInfo;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(dictionary: NSDictionary<string, any>);

	PMPageFormat(): any;

	PMPrintSession(): any;

	PMPrintSettings(): any;

	copyWithZone(_?: any): any;

	dictionary(): NSMutableDictionary<string, any>;

	encodeWithCoder(_: NSCoder): void;

	setUpPrintOperationDefaultValues(): void;

	takeSettingsFromPDFInfo(from: NSPDFInfo): void;

	updateFromPMPageFormat(): void;

	updateFromPMPrintSettings(): void;
}

declare var NSPrintJobDisposition: string;

declare var NSPrintJobSavingFileNameExtensionHidden: string;

declare var NSPrintJobSavingURL: string;

declare var NSPrintLastPage: string;

declare var NSPrintLeftMargin: string;

declare var NSPrintMustCollate: string;

declare var NSPrintNoPresetsJobStyleHint: string;

declare class NSPrintOperation extends NSObject {

	static EPSOperationWithViewInsideRectToData(with_: NSView, inside: CGRect, to?: NSMutableData): NSPrintOperation;

	static EPSOperationWithViewInsideRectToDataPrintInfo(with_: NSView, inside: CGRect, to: NSMutableData, printInfo: NSPrintInfo): NSPrintOperation;

	static EPSOperationWithViewInsideRectToPathPrintInfo(with_: NSView, inside: CGRect, toPath: string, printInfo: NSPrintInfo): NSPrintOperation;

	static PDFOperationWithViewInsideRectToData(with_: NSView, inside: CGRect, to: NSMutableData): NSPrintOperation;

	static PDFOperationWithViewInsideRectToDataPrintInfo(with_: NSView, inside: CGRect, to: NSMutableData, printInfo: NSPrintInfo): NSPrintOperation;

	static PDFOperationWithViewInsideRectToPathPrintInfo(with_: NSView, inside: CGRect, toPath: string, printInfo: NSPrintInfo): NSPrintOperation;

	static printOperationWithView(view: NSView): NSPrintOperation;

	static printOperationWithViewPrintInfo(view: NSView, printInfo: NSPrintInfo): NSPrintOperation;

	setPDFPanel(_: NSPDFPanel)

	PDFPanel: NSPDFPanel;

	setCanSpawnSeparateThread(_: boolean)

	canSpawnSeparateThread: boolean;

	readonly context: NSGraphicsContext;

	readonly isCopyingOperation: boolean;

	readonly currentPage: number;

	setJobTitle(_: string)

	jobTitle: string;

	setPageOrder(_: NSPrintingPageOrder)

	pageOrder: NSPrintingPageOrder;

	readonly pageRange: NSRange;

	readonly preferredRenderingQuality: NSPrintRenderingQuality;

	setPrintInfo(_: NSPrintInfo)

	printInfo: NSPrintInfo;

	setPrintPanel(_: NSPrintPanel)

	printPanel: NSPrintPanel;

	setShowsPrintPanel(_: boolean)

	showsPrintPanel: boolean;

	setShowsProgressPanel(_: boolean)

	showsProgressPanel: boolean;

	readonly view: NSView;

	static setCurrentOperation(_: NSPrintOperation)

	currentOperation: NSPrintOperation;

	cleanUpOperation(): void;

	createContext(): NSGraphicsContext;

	deliverResult(): boolean;

	destroyContext(): void;

	runOperation(): boolean;

	runOperationModalForWindowDelegateDidRunSelectorContextInfo(for_: NSWindow, delegate?: any, didRun?: string, contextInfo?: any): void;
}

declare var NSPrintOperationExistsException: string;

declare var NSPrintOrientation: string;

declare var NSPrintPackageException: string;

declare var NSPrintPagesAcross: string;

declare var NSPrintPagesDown: string;

declare class NSPrintPanel extends NSObject {

	static printPanel(): NSPrintPanel;

	readonly accessoryControllers: NSArray<NSViewController>;

	setHelpAnchor(_: string)

	helpAnchor: string;

	setJobStyleHint(_: string)

	jobStyleHint: string;

	setOptions(_: NSPrintPanelOptions)

	options: NSPrintPanelOptions;

	readonly printInfo: NSPrintInfo;

	addAccessoryController(_: NSViewController): void;

	beginSheetWithPrintInfoModalForWindowDelegateDidEndSelectorContextInfo(with_: NSPrintInfo, modalFor: NSWindow, delegate?: any, didEnd?: string, contextInfo?: any): void;

	defaultButtonTitle(): string;

	removeAccessoryController(_: NSViewController): void;

	runModal(): number;

	runModalWithPrintInfo(with_: NSPrintInfo): number;

	setDefaultButtonTitle(_?: string): void;
}

interface NSPrintPanelAccessorizing {

	keyPathsForValuesAffectingPreview?(): NSSet<string>;

	localizedSummaryItems(): NSArray<NSDictionary<string, string>>;
}
declare var NSPrintPanelAccessorizing: {

	prototype: NSPrintPanelAccessorizing;
};

declare var NSPrintPanelAccessorySummaryItemDescriptionKey: string;

declare var NSPrintPanelAccessorySummaryItemNameKey: string;

enum NSPrintPanelOptions {

	ShowsCopies = 1,

	ShowsPageRange = 2,

	ShowsPaperSize = 4,

	ShowsOrientation = 8,

	ShowsScaling = 16,

	ShowsPrintSelection = 32,

	ShowsPageSetupAccessory = 256,

	ShowsPreview = 131072
}

globalThis.NSPrintPanelOptions = NSPrintPanelOptions;

declare var NSPrintPaperName: string;

declare var NSPrintPaperSize: string;

declare var NSPrintPhotoJobStyleHint: string;

declare var NSPrintPreviewJob: string;

declare var NSPrintPrinter: string;

declare var NSPrintPrinterName: string;

enum NSPrintRenderingQuality {

	Best = 0,

	Responsive = 1
}

globalThis.NSPrintRenderingQuality = NSPrintRenderingQuality;

declare var NSPrintReversePageOrder: string;

declare var NSPrintRightMargin: string;

declare var NSPrintSaveJob: string;

declare var NSPrintScalingFactor: string;

declare const NSPrintScreenFunctionKey: number;

declare var NSPrintSelectionOnly: string;

declare var NSPrintSpoolJob: string;

declare var NSPrintTime: string;

declare var NSPrintTopMargin: string;

declare var NSPrintVerticalPagination: string;

declare var NSPrintVerticallyCentered: string;

declare class NSPrinter extends NSObject implements NSCoding, NSCopying {

	static printerWithName(name: string): NSPrinter;

	static printerWithType(type: string): NSPrinter;

	readonly deviceDescription: NSDictionary<string, any>;

	readonly languageLevel: number;

	readonly name: string;

	readonly type: string;

	static printerNames(): NSArray<string>;

	static printerTypes(): NSArray<string>;

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	pageSizeForPaper(forPaper: string): CGSize;
}

enum NSPrinterTableStatus {

	OK = 0,

	NotFound = 1,

	Error = 2
}

globalThis.NSPrinterTableStatus = NSPrinterTableStatus;

declare var NSPrintingCommunicationException: string;

enum NSPrintingPageOrder {

	DescendingPageOrder = -1,

	SpecialPageOrder = 0,

	AscendingPageOrder = 1,

	UnknownPageOrder = 2
}

globalThis.NSPrintingPageOrder = NSPrintingPageOrder;

enum NSPrintingPaginationMode {

	Automatic = 0,

	Fit = 1,

	Clip = 2
}

globalThis.NSPrintingPaginationMode = NSPrintingPaginationMode;

declare class NSProgressIndicator extends NSView implements NSAccessibilityProgressIndicator {

	setBezeled(_: boolean)

	isBezeled: boolean;

	setControlSize(_: NSControlSize)

	controlSize: NSControlSize;

	setControlTint(_: NSControlTint)

	controlTint: NSControlTint;

	setDisplayedWhenStopped(_: boolean)

	isDisplayedWhenStopped: boolean;

	setDoubleValue(_: number)

	doubleValue: number;

	setIndeterminate(_: boolean)

	isIndeterminate: boolean;

	setMaxValue(_: number)

	maxValue: number;

	setMinValue(_: number)

	minValue: number;

	setStyle(_: NSProgressIndicatorStyle)

	style: NSProgressIndicatorStyle;

	setUsesThreadedAnimation(_: boolean)

	usesThreadedAnimation: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityFrame(): CGRect;

	accessibilityIdentifier(): string;

	accessibilityParent(): any;

	accessibilityValue(): number;

	conformsToProtocol(_: any /* Protocol */): boolean;

	incrementBy(by: number): void;

	isAccessibilityFocused(): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	sizeToFit(): void;

	startAnimation(_?: any): void;

	stopAnimation(_?: any): void;
}

enum NSProgressIndicatorStyle {

	Bar = 0,

	Spinning = 1
}

globalThis.NSProgressIndicatorStyle = NSProgressIndicatorStyle;

declare var NSRTFDTextDocumentType: string;

declare var NSRTFPropertyStackOverflowException: string;

declare var NSRTFTextDocumentType: string;

declare var NSRaisesForNotApplicableKeysBindingOption: string;

declare var NSRangeDateMode: NSDatePickerMode;

declare var NSReadOnlyDocumentAttribute: string;

declare var NSRecentSearchesBinding: string;

enum NSRectAlignment {

	None = 0,

	Top = 1,

	TopLeading = 2,

	Leading = 3,

	BottomLeading = 4,

	Bottom = 5,

	BottomTrailing = 6,

	Trailing = 7,

	TopTrailing = 8
}

globalThis.NSRectAlignment = NSRectAlignment;

declare function NSRectClip(rect: CGRect): void;

declare function NSRectClipList(rects: CGRect, count: number): void;

declare function NSRectFill(rect: CGRect): void;

declare function NSRectFillList(rects: CGRect, count: number): void;

declare function NSRectFillListUsingOperation(rects: CGRect, count: number, op: NSCompositingOperation): void;

declare function NSRectFillListWithColors(rects: CGRect, colors: NSColor, num: number): void;

declare function NSRectFillListWithColorsUsingOperation(rects: CGRect, colors: NSColor, num: number, op: NSCompositingOperation): void;

declare function NSRectFillListWithGrays(rects: CGRect, grays: number, num: number): void;

declare function NSRectFillUsingOperation(rect: CGRect, op: NSCompositingOperation): void;

declare const NSRedoFunctionKey: number;

declare function NSRegisterServicesProvider(provider: any, name: string): void;

enum NSRemoteNotificationType {

	None = 0,

	Badge = 1,

	Sound = 2,

	Alert = 4
}

globalThis.NSRemoteNotificationType = NSRemoteNotificationType;

declare var NSRepresentedFilenameBinding: string;

enum NSRequestUserAttentionType {

	CriticalRequest = 0,

	InformationalRequest = 10
}

globalThis.NSRequestUserAttentionType = NSRequestUserAttentionType;

declare const NSResetCursorRectsRunLoopOrdering: number;

declare const NSResetFunctionKey: number;

declare class NSResponder extends NSObject implements NSCoding, NSStandardKeyBindingResponding, NSUserActivityRestoring, NSTouchBarProvider {

	readonly acceptsFirstResponder: boolean;

	setMenu(_: NSMenu)

	menu: NSMenu;

	setNextResponder(_: NSResponder)

	nextResponder: NSResponder;

	setTouchBar(_: NSTouchBar)

	touchBar: NSTouchBar;

	readonly undoManager: NSUndoManager;

	setUserActivity(_: NSUserActivity)

	userActivity: NSUserActivity;

	static restorableStateKeyPaths(): NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(coder: NSCoder); // inherited from NSCoding

	becomeFirstResponder(): boolean;

	beginGestureWithEvent(with_: NSEvent): void;

	cancelOperation(_?: any): void;

	capitalizeWord(_?: any): void;

	centerSelectionInVisibleArea(_?: any): void;

	changeCaseOfLetter(_?: any): void;

	changeModeWithEvent(with_: NSEvent): void;

	complete(_?: any): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	cursorUpdate(with_: NSEvent): void;

	deleteBackward(_?: any): void;

	deleteBackwardByDecomposingPreviousCharacter(_?: any): void;

	deleteForward(_?: any): void;

	deleteToBeginningOfLine(_?: any): void;

	deleteToBeginningOfParagraph(_?: any): void;

	deleteToEndOfLine(_?: any): void;

	deleteToEndOfParagraph(_?: any): void;

	deleteToMark(_?: any): void;

	deleteWordBackward(_?: any): void;

	deleteWordForward(_?: any): void;

	doCommandBySelector(by: string): void;

	encodeRestorableStateWithCoder(with_: NSCoder): void;

	encodeRestorableStateWithCoderBackgroundQueue(with_: NSCoder, backgroundQueue: NSOperationQueue): void;

	encodeWithCoder(_: NSCoder): void;

	endGestureWithEvent(with_: NSEvent): void;

	flagsChanged(with_: NSEvent): void;

	flushBufferedKeyEvents(): void;

	helpRequested(_: NSEvent): void;

	indent(_?: any): void;

	insertBacktab(_?: any): void;

	insertContainerBreak(_?: any): void;

	insertDoubleQuoteIgnoringSubstitution(_?: any): void;

	insertLineBreak(_?: any): void;

	insertNewline(_?: any): void;

	insertNewlineIgnoringFieldEditor(_?: any): void;

	insertParagraphSeparator(_?: any): void;

	insertSingleQuoteIgnoringSubstitution(_?: any): void;

	insertTab(_?: any): void;

	insertTabIgnoringFieldEditor(_?: any): void;

	insertText(_: any): void;

	interpretKeyEvents(_: NSArray<NSEvent>): void;

	invalidateRestorableState(): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	keyDown(with_: NSEvent): void;

	keyUp(with_: NSEvent): void;

	lowercaseWord(_?: any): void;

	magnifyWithEvent(with_: NSEvent): void;

	makeBaseWritingDirectionLeftToRight(_?: any): void;

	makeBaseWritingDirectionNatural(_?: any): void;

	makeBaseWritingDirectionRightToLeft(_?: any): void;

	makeTextWritingDirectionLeftToRight(_?: any): void;

	makeTextWritingDirectionNatural(_?: any): void;

	makeTextWritingDirectionRightToLeft(_?: any): void;

	makeTouchBar(): NSTouchBar;

	mouseDown(with_: NSEvent): void;

	mouseDragged(with_: NSEvent): void;

	mouseEntered(with_: NSEvent): void;

	mouseExited(with_: NSEvent): void;

	mouseMoved(with_: NSEvent): void;

	mouseUp(with_: NSEvent): void;

	moveBackward(_?: any): void;

	moveBackwardAndModifySelection(_?: any): void;

	moveDown(_?: any): void;

	moveDownAndModifySelection(_?: any): void;

	moveForward(_?: any): void;

	moveForwardAndModifySelection(_?: any): void;

	moveLeft(_?: any): void;

	moveLeftAndModifySelection(_?: any): void;

	moveParagraphBackwardAndModifySelection(_?: any): void;

	moveParagraphForwardAndModifySelection(_?: any): void;

	moveRight(_?: any): void;

	moveRightAndModifySelection(_?: any): void;

	moveToBeginningOfDocument(_?: any): void;

	moveToBeginningOfDocumentAndModifySelection(_?: any): void;

	moveToBeginningOfLine(_?: any): void;

	moveToBeginningOfLineAndModifySelection(_?: any): void;

	moveToBeginningOfParagraph(_?: any): void;

	moveToBeginningOfParagraphAndModifySelection(_?: any): void;

	moveToEndOfDocument(_?: any): void;

	moveToEndOfDocumentAndModifySelection(_?: any): void;

	moveToEndOfLine(_?: any): void;

	moveToEndOfLineAndModifySelection(_?: any): void;

	moveToEndOfParagraph(_?: any): void;

	moveToEndOfParagraphAndModifySelection(_?: any): void;

	moveToLeftEndOfLine(_?: any): void;

	moveToLeftEndOfLineAndModifySelection(_?: any): void;

	moveToRightEndOfLine(_?: any): void;

	moveToRightEndOfLineAndModifySelection(_?: any): void;

	moveUp(_?: any): void;

	moveUpAndModifySelection(_?: any): void;

	moveWordBackward(_?: any): void;

	moveWordBackwardAndModifySelection(_?: any): void;

	moveWordForward(_?: any): void;

	moveWordForwardAndModifySelection(_?: any): void;

	moveWordLeft(_?: any): void;

	moveWordLeftAndModifySelection(_?: any): void;

	moveWordRight(_?: any): void;

	moveWordRightAndModifySelection(_?: any): void;

	newWindowForTab(_?: any): void;

	noResponderFor(for_: string): void;

	otherMouseDown(with_: NSEvent): void;

	otherMouseDragged(with_: NSEvent): void;

	otherMouseUp(with_: NSEvent): void;

	pageDown(_?: any): void;

	pageDownAndModifySelection(_?: any): void;

	pageUp(_?: any): void;

	pageUpAndModifySelection(_?: any): void;

	performKeyEquivalent(with_: NSEvent): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	performTextFinderAction(_?: any): void;

	presentError(_: NSError): boolean;

	presentErrorModalForWindowDelegateDidPresentSelectorContextInfo(_: NSError, modalFor: NSWindow, delegate?: any, didPresent?: string, contextInfo?: any): void;

	pressureChangeWithEvent(with_: NSEvent): void;

	quickLookPreviewItems(_?: any): void;

	quickLookWithEvent(with_: NSEvent): void;

	resignFirstResponder(): boolean;

	respondsToSelector(_: string): boolean;

	restoreStateWithCoder(with_: NSCoder): void;

	restoreUserActivityState(_: NSUserActivity): void;

	retainCount(): number;

	rightMouseDown(with_: NSEvent): void;

	rightMouseDragged(with_: NSEvent): void;

	rightMouseUp(with_: NSEvent): void;

	rotateWithEvent(with_: NSEvent): void;

	scrollLineDown(_?: any): void;

	scrollLineUp(_?: any): void;

	scrollPageDown(_?: any): void;

	scrollPageUp(_?: any): void;

	scrollToBeginningOfDocument(_?: any): void;

	scrollToEndOfDocument(_?: any): void;

	scrollWheel(with_: NSEvent): void;

	selectAll(_?: any): void;

	selectLine(_?: any): void;

	selectParagraph(_?: any): void;

	selectToMark(_?: any): void;

	selectWord(_?: any): void;

	self(): this;

	setMark(_?: any): void;

	shouldBeTreatedAsInkEvent(_: NSEvent): boolean;

	showContextHelp(_?: any): void;

	smartMagnifyWithEvent(with_: NSEvent): void;

	supplementalTargetForActionSender(forAction: string, sender?: any): any;

	swapWithMark(_?: any): void;

	swipeWithEvent(with_: NSEvent): void;

	tabletPoint(with_: NSEvent): void;

	tabletProximity(with_: NSEvent): void;

	touchesBeganWithEvent(with_: NSEvent): void;

	touchesCancelledWithEvent(with_: NSEvent): void;

	touchesEndedWithEvent(with_: NSEvent): void;

	touchesMovedWithEvent(with_: NSEvent): void;

	transpose(_?: any): void;

	transposeWords(_?: any): void;

	tryToPerformWith(_: string, with_?: any): boolean;

	updateUserActivityState(_: NSUserActivity): void;

	uppercaseWord(_?: any): void;

	validRequestorForSendTypeReturnType(forSendType?: string, returnType?: string): any;

	validateProposedFirstResponderForEvent(_: NSResponder, for_?: NSEvent): boolean;

	wantsForwardedScrollEventsForAxis(for_: NSEventGestureAxis): boolean;

	wantsScrollEventsForSwipeTrackingOnAxis(on: NSEventGestureAxis): boolean;

	willPresentError(_: NSError): NSError;

	yank(_?: any): void;
}

declare const NSReturnTextMovement: number;

declare const NSRightArrowFunctionKey: number;

declare var NSRightMarginDocumentAttribute: string;

declare const NSRightTextMovement: number;

declare class NSRotationGestureRecognizer extends NSGestureRecognizer {

	setRotation(_: number)

	rotation: number;

	setRotationInDegrees(_: number)

	rotationInDegrees: number;
}

declare var NSRoundLineCapStyle: NSLineCapStyle;

declare var NSRoundLineJoinStyle: NSLineJoinStyle;

declare var NSRowHeightBinding: string;

declare class NSRuleEditor extends NSControl {

	setCanRemoveAllRows(_: boolean)

	canRemoveAllRows: boolean;

	setCriteriaKeyPath(_: string)

	criteriaKeyPath: string;

	setDelegate(_: NSRuleEditorDelegate)

	delegate: NSRuleEditorDelegate;

	setDisplayValuesKeyPath(_: string)

	displayValuesKeyPath: string;

	setEditable(_: boolean)

	isEditable: boolean;

	setFormattingDictionary(_: NSDictionary<string, string>)

	formattingDictionary: NSDictionary<string, string>;

	setFormattingStringsFilename(_: string)

	formattingStringsFilename: string;

	setNestingMode(_: NSRuleEditorNestingMode)

	nestingMode: NSRuleEditorNestingMode;

	readonly numberOfRows: number;

	readonly predicate: NSPredicate;

	setRowClass(_: typeof NSObject)

	rowClass: typeof NSObject;

	setRowHeight(_: number)

	rowHeight: number;

	setRowTypeKeyPath(_: string)

	rowTypeKeyPath: string;

	readonly selectedRowIndexes: NSIndexSet;

	setSubrowsKeyPath(_: string)

	subrowsKeyPath: string;

	addRow(_?: any): void;

	criteriaForRow(forRow: number): NSArray<any>;

	displayValuesForRow(forRow: number): NSArray<any>;

	insertRowAtIndexWithTypeAsSubrowOfRowAnimate(at: number, with_: NSRuleEditorRowType, asSubrowOfRow: number, animate: boolean): void;

	parentRowForRow(forRow: number): number;

	predicateForRow(forRow: number): NSPredicate;

	reloadCriteria(): void;

	reloadPredicate(): void;

	removeRowAtIndex(at: number): void;

	removeRowsAtIndexesIncludeSubrows(at: NSIndexSet, includeSubrows: boolean): void;

	rowForDisplayValue(forDisplayValue: any): number;

	rowTypeForRow(forRow: number): NSRuleEditorRowType;

	selectRowIndexesByExtendingSelection(_: NSIndexSet, byExtendingSelection: boolean): void;

	setCriteriaAndDisplayValuesForRowAtIndex(_: NSArray<any>, andDisplayValues: NSArray<any>, forRowAt: number): void;

	subrowIndexesForRow(forRow: number): NSIndexSet;
}

interface NSRuleEditorDelegate extends NSObjectProtocol {

	ruleEditorNumberOfChildrenForCriterionWithRowType(_: NSRuleEditor, numberOfChildrenForCriterion?: any, with_: NSRuleEditorRowType): number;

	ruleEditorChildForCriterionWithRowType(_: NSRuleEditor, child: number, forCriterion?: any, with_: NSRuleEditorRowType): any;

	ruleEditorDisplayValueForCriterionInRow(_: NSRuleEditor, displayValueForCriterion: any, inRow: number): any;

	ruleEditorPredicatePartsForCriterionWithDisplayValueInRow?(_: NSRuleEditor, predicatePartsForCriterion: any, withDisplayValue: any, inRow: number): NSDictionary<string, any>;

	ruleEditorRowsDidChange?(_: NSNotification): void;
}
declare var NSRuleEditorDelegate: {

	prototype: NSRuleEditorDelegate;
};

enum NSRuleEditorNestingMode {

	Single = 0,

	List = 1,

	Compound = 2,

	Simple = 3
}

globalThis.NSRuleEditorNestingMode = NSRuleEditorNestingMode;

declare var NSRuleEditorPredicateComparisonModifier: string;

declare var NSRuleEditorPredicateCompoundType: string;

declare var NSRuleEditorPredicateCustomSelector: string;

declare var NSRuleEditorPredicateLeftExpression: string;

declare var NSRuleEditorPredicateOperatorType: string;

declare var NSRuleEditorPredicateOptions: string;

declare var NSRuleEditorPredicateRightExpression: string;

enum NSRuleEditorRowType {

	Simple = 0,

	Compound = 1
}

globalThis.NSRuleEditorRowType = NSRuleEditorRowType;

declare var NSRuleEditorRowsDidChangeNotification: string;

declare class NSRulerMarker extends NSObject implements NSCoding, NSCopying {

	readonly isDragging: boolean;

	setImage(_: NSImage)

	image: NSImage;

	setImageOrigin(_: CGPoint)

	imageOrigin: CGPoint;

	readonly imageRectInRuler: CGRect;

	setMarkerLocation(_: number)

	markerLocation: number;

	setMovable(_: boolean)

	isMovable: boolean;

	setRemovable(_: boolean)

	isRemovable: boolean;

	setRepresentedObject(_: any)

	representedObject: any;

	readonly ruler: NSRulerView;

	readonly thicknessRequiredInRuler: number;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(rulerView: NSRulerView, markerLocation: number, image: NSImage, imageOrigin: CGPoint);

	copyWithZone(_?: any): any;

	drawRect(_: CGRect): void;

	encodeWithCoder(_: NSCoder): void;

	trackMouseAdding(with_: NSEvent, adding: boolean): boolean;
}

enum NSRulerOrientation {

	HorizontalRuler = 0,

	VerticalRuler = 1
}

globalThis.NSRulerOrientation = NSRulerOrientation;

declare class NSRulerView extends NSView {

	static registerUnitWithNameAbbreviationUnitToPointsConversionFactorStepUpCycleStepDownCycle(withName: string, abbreviation: string, unitToPointsConversionFactor: number, stepUpCycle: NSArray<number>, stepDownCycle: NSArray<number>): void;

	setAccessoryView(_: NSView)

	accessoryView: NSView;

	readonly baselineLocation: number;

	setClientView(_: NSView)

	clientView: NSView;

	setMarkers(_: NSArray<NSRulerMarker>)

	markers: NSArray<NSRulerMarker>;

	setMeasurementUnits(_: string)

	measurementUnits: string;

	setOrientation(_: NSRulerOrientation)

	orientation: NSRulerOrientation;

	setOriginOffset(_: number)

	originOffset: number;

	readonly requiredThickness: number;

	setReservedThicknessForAccessoryView(_: number)

	reservedThicknessForAccessoryView: number;

	setReservedThicknessForMarkers(_: number)

	reservedThicknessForMarkers: number;

	setRuleThickness(_: number)

	ruleThickness: number;

	setScrollView(_: NSScrollView)

	scrollView: NSScrollView;

	static create(scrollView: NSScrollView, orientation: NSRulerOrientation);

	addMarker(_: NSRulerMarker): void;

	drawHashMarksAndLabelsInRect(in_: CGRect): void;

	drawMarkersInRect(in_: CGRect): void;

	invalidateHashMarks(): void;

	moveRulerlineFromLocationToLocation(fromLocation: number, toLocation: number): void;

	removeMarker(_: NSRulerMarker): void;

	trackMarkerWithMouseEvent(_: NSRulerMarker, withMouseEvent: NSEvent): boolean;
}

declare var NSRulerViewUnitCentimeters: string;

declare var NSRulerViewUnitInches: string;

declare var NSRulerViewUnitPicas: string;

declare var NSRulerViewUnitPoints: string;

declare class NSRunningApplication extends NSObject {

	static runningApplicationWithProcessIdentifier(processIdentifier: number): NSRunningApplication;

	static runningApplicationsWithBundleIdentifier(withBundleIdentifier: string): NSArray<NSRunningApplication>;

	static terminateAutomaticallyTerminableApplications(): void;

	readonly activationPolicy: NSApplicationActivationPolicy;

	readonly isActive: boolean;

	readonly bundleIdentifier: string;

	readonly bundleURL: NSURL;

	readonly executableArchitecture: number;

	readonly executableURL: NSURL;

	readonly isFinishedLaunching: boolean;

	readonly isHidden: boolean;

	readonly icon: NSImage;

	readonly launchDate: Date;

	readonly localizedName: string;

	readonly ownsMenuBar: boolean;

	readonly processIdentifier: number;

	readonly isTerminated: boolean;

	static currentApplication(): NSRunningApplication;

	activateWithOptions(options: NSApplicationActivationOptions): boolean;

	forceTerminate(): boolean;

	hide(): boolean;

	terminate(): boolean;

	unhide(): boolean;
}

enum NSSaveOperationType {

	SaveOperation = 0,

	SaveAsOperation = 1,

	SaveToOperation = 2,

	AutosaveInPlaceOperation = 4,

	AutosaveElsewhereOperation = 3,

	AutosaveAsOperation = 5,

	AutosaveOperation = 3
}

globalThis.NSSaveOperationType = NSSaveOperationType;

declare class NSSavePanel extends NSPanel {

	static savePanel(): NSSavePanel;

	static windowWithContentViewController(contentViewController: NSViewController): NSSavePanel; // inherited from NSWindow

	readonly URL: NSURL;

	setAccessoryView(_: NSView)

	accessoryView: NSView;

	setAllowsOtherFileTypes(_: boolean)

	allowsOtherFileTypes: boolean;

	setCanCreateDirectories(_: boolean)

	canCreateDirectories: boolean;

	setCanSelectHiddenExtension(_: boolean)

	canSelectHiddenExtension: boolean;

	setDelegate(_: NSOpenSavePanelDelegate)

	delegate: NSOpenSavePanelDelegate;

	setDirectoryURL(_: NSURL)

	directoryURL: NSURL;

	readonly isExpanded: boolean;

	setExtensionHidden(_: boolean)

	isExtensionHidden: boolean;

	setMessage(_: string)

	message: string;

	setNameFieldLabel(_: string)

	nameFieldLabel: string;

	setNameFieldStringValue(_: string)

	nameFieldStringValue: string;

	setPrompt(_: string)

	prompt: string;

	setShowsHiddenFiles(_: boolean)

	showsHiddenFiles: boolean;

	setShowsTagField(_: boolean)

	showsTagField: boolean;

	setTagNames(_: NSArray<string>)

	tagNames: NSArray<string>;

	setTreatsFilePackagesAsDirectories(_: boolean)

	treatsFilePackagesAsDirectories: boolean;

	beginSheetModalForWindowCompletionHandler(for_: NSWindow, completionHandler: (p1: number) => void): void;

	beginWithCompletionHandler(completionHandler: (p1: number) => void): void;

	cancel(_?: any): void;

	ok(_?: any): void;

	runModal(): number;

	validateVisibleColumns(): void;
}

declare class NSScreen extends NSObject {

	readonly backingScaleFactor: number;

	readonly colorSpace: NSColorSpace;

	readonly depth: NSWindowDepth;

	readonly deviceDescription: NSDictionary<string, any>;

	readonly frame: CGRect;

	readonly localizedName: string;

	readonly maximumExtendedDynamicRangeColorComponentValue: number;

	readonly maximumPotentialExtendedDynamicRangeColorComponentValue: number;

	readonly maximumReferenceExtendedDynamicRangeColorComponentValue: number;

	readonly supportedWindowDepths: NSWindowDepth;

	readonly visibleFrame: CGRect;

	static deepestScreen(): NSScreen;

	static mainScreen(): NSScreen;

	static screens(): NSArray<NSScreen>;

	static screensHaveSeparateSpaces(): boolean;

	backingAlignedRectOptions(_: CGRect, options: NSAlignmentOptions): CGRect;

	canRepresentDisplayGamut(_: NSDisplayGamut): boolean;

	convertRectFromBacking(_: CGRect): CGRect;

	convertRectToBacking(_: CGRect): CGRect;
}

declare var NSScreenColorSpaceDidChangeNotification: string;

declare var NSScreenSaverWindowLevel: number;

enum NSScrollElasticity {

	Automatic = 0,

	None = 1,

	Allowed = 2
}

globalThis.NSScrollElasticity = NSScrollElasticity;

declare const NSScrollLockFunctionKey: number;

declare class NSScrollView extends NSView implements NSTextFinderBarContainer {

	static contentSizeForFrameSizeHorizontalScrollerClassVerticalScrollerClassBorderTypeControlSizeScrollerStyle(forFrameSize: CGSize, horizontalScrollerClass?: typeof NSObject, verticalScrollerClass?: typeof NSObject, borderType: NSBorderType, controlSize: NSControlSize, scrollerStyle: NSScrollerStyle): CGSize;

	static frameSizeForContentSizeHorizontalScrollerClassVerticalScrollerClassBorderTypeControlSizeScrollerStyle(forContentSize: CGSize, horizontalScrollerClass?: typeof NSObject, verticalScrollerClass?: typeof NSObject, borderType: NSBorderType, controlSize: NSControlSize, scrollerStyle: NSScrollerStyle): CGSize;

	setAllowsMagnification(_: boolean)

	allowsMagnification: boolean;

	setAutohidesScrollers(_: boolean)

	autohidesScrollers: boolean;

	setAutomaticallyAdjustsContentInsets(_: boolean)

	automaticallyAdjustsContentInsets: boolean;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setBorderType(_: NSBorderType)

	borderType: NSBorderType;

	setContentInsets(_: NSEdgeInsets)

	contentInsets: NSEdgeInsets;

	readonly contentSize: CGSize;

	setContentView(_: NSClipView)

	contentView: NSClipView;

	setDocumentCursor(_: NSCursor)

	documentCursor: NSCursor;

	setDocumentView(_: NSView)

	documentView: NSView;

	readonly documentVisibleRect: CGRect;

	setDrawsBackground(_: boolean)

	drawsBackground: boolean;

	setFindBarPosition(_: NSScrollViewFindBarPosition)

	findBarPosition: NSScrollViewFindBarPosition;

	setHasHorizontalRuler(_: boolean)

	hasHorizontalRuler: boolean;

	setHasHorizontalScroller(_: boolean)

	hasHorizontalScroller: boolean;

	setHasVerticalRuler(_: boolean)

	hasVerticalRuler: boolean;

	setHasVerticalScroller(_: boolean)

	hasVerticalScroller: boolean;

	setHorizontalLineScroll(_: number)

	horizontalLineScroll: number;

	setHorizontalPageScroll(_: number)

	horizontalPageScroll: number;

	setHorizontalRulerView(_: NSRulerView)

	horizontalRulerView: NSRulerView;

	setHorizontalScrollElasticity(_: NSScrollElasticity)

	horizontalScrollElasticity: NSScrollElasticity;

	setHorizontalScroller(_: NSScroller)

	horizontalScroller: NSScroller;

	setLineScroll(_: number)

	lineScroll: number;

	setMagnification(_: number)

	magnification: number;

	setMaxMagnification(_: number)

	maxMagnification: number;

	setMinMagnification(_: number)

	minMagnification: number;

	setPageScroll(_: number)

	pageScroll: number;

	setRulersVisible(_: boolean)

	rulersVisible: boolean;

	setScrollerInsets(_: NSEdgeInsets)

	scrollerInsets: NSEdgeInsets;

	setScrollerKnobStyle(_: NSScrollerKnobStyle)

	scrollerKnobStyle: NSScrollerKnobStyle;

	setScrollerStyle(_: NSScrollerStyle)

	scrollerStyle: NSScrollerStyle;

	setScrollsDynamically(_: boolean)

	scrollsDynamically: boolean;

	setUsesPredominantAxisScrolling(_: boolean)

	usesPredominantAxisScrolling: boolean;

	setVerticalLineScroll(_: number)

	verticalLineScroll: number;

	setVerticalPageScroll(_: number)

	verticalPageScroll: number;

	setVerticalRulerView(_: NSRulerView)

	verticalRulerView: NSRulerView;

	setVerticalScrollElasticity(_: NSScrollElasticity)

	verticalScrollElasticity: NSScrollElasticity;

	setVerticalScroller(_: NSScroller)

	verticalScroller: NSScroller;

	static setRulerViewClass(_: typeof NSObject)

	rulerViewClass: typeof NSObject;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	setFindBarView(_: NSView)

	findBarView: NSView; // inherited from NSTextFinderBarContainer

	setFindBarVisible(_: boolean)

	isFindBarVisible: boolean; // inherited from NSTextFinderBarContainer

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	addFloatingSubviewForAxis(_: NSView, for_: NSEventGestureAxis): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	findBarViewDidChangeHeight(): void;

	flashScrollers(): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	magnifyToFitRect(toFit: CGRect): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setMagnificationCenteredAtPoint(_: number, centeredAt: CGPoint): void;

	tile(): void;
}

declare var NSScrollViewDidEndLiveMagnifyNotification: string;

declare var NSScrollViewDidEndLiveScrollNotification: string;

declare var NSScrollViewDidLiveScrollNotification: string;

enum NSScrollViewFindBarPosition {

	AboveHorizontalRuler = 0,

	AboveContent = 1,

	BelowContent = 2
}

globalThis.NSScrollViewFindBarPosition = NSScrollViewFindBarPosition;

declare var NSScrollViewWillStartLiveMagnifyNotification: string;

declare var NSScrollViewWillStartLiveScrollNotification: string;

declare class NSScroller extends NSControl {

	static scrollerWidthForControlSizeScrollerStyle(for_: NSControlSize, scrollerStyle: NSScrollerStyle): number;

	readonly hitPart: NSScrollerPart;

	setKnobProportion(_: number)

	knobProportion: number;

	setKnobStyle(_: NSScrollerKnobStyle)

	knobStyle: NSScrollerKnobStyle;

	setScrollerStyle(_: NSScrollerStyle)

	scrollerStyle: NSScrollerStyle;

	readonly usableParts: NSUsableScrollerParts;

	static isCompatibleWithOverlayScrollers(): boolean;

	static preferredScrollerStyle(): NSScrollerStyle;

	checkSpaceForParts(): void;

	drawKnob(): void;

	drawKnobSlotInRectHighlight(in_: CGRect, highlight: boolean): void;

	rectForPart(for_: NSScrollerPart): CGRect;

	setKnobProportion(_: number): void;

	testPart(_: CGPoint): NSScrollerPart;

	trackKnob(with_: NSEvent): void;
}

enum NSScrollerKnobStyle {

	Default = 0,

	Dark = 1,

	Light = 2
}

globalThis.NSScrollerKnobStyle = NSScrollerKnobStyle;

enum NSScrollerPart {

	NoPart = 0,

	DecrementPage = 1,

	Knob = 2,

	IncrementPage = 3,

	DecrementLine = 4,

	IncrementLine = 5,

	KnobSlot = 6
}

globalThis.NSScrollerPart = NSScrollerPart;

enum NSScrollerStyle {

	Legacy = 0,

	Overlay = 1
}

globalThis.NSScrollerStyle = NSScrollerStyle;

declare class NSScrubber extends NSView {

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setBackgroundView(_: NSView)

	backgroundView: NSView;

	setContinuous(_: boolean)

	isContinuous: boolean;

	setDataSource(_: NSScrubberDataSource)

	dataSource: NSScrubberDataSource;

	setDelegate(_: NSScrubberDelegate)

	delegate: NSScrubberDelegate;

	setFloatsSelectionViews(_: boolean)

	floatsSelectionViews: boolean;

	readonly highlightedIndex: number;

	setItemAlignment(_: NSScrubberAlignment)

	itemAlignment: NSScrubberAlignment;

	setMode(_: NSScrubberMode)

	mode: NSScrubberMode;

	readonly numberOfItems: number;

	setScrubberLayout(_: NSScrubberLayout)

	scrubberLayout: NSScrubberLayout;

	setSelectedIndex(_: number)

	selectedIndex: number;

	setSelectionBackgroundStyle(_: NSScrubberSelectionStyle)

	selectionBackgroundStyle: NSScrubberSelectionStyle;

	setSelectionOverlayStyle(_: NSScrubberSelectionStyle)

	selectionOverlayStyle: NSScrubberSelectionStyle;

	setShowsAdditionalContentIndicators(_: boolean)

	showsAdditionalContentIndicators: boolean;

	setShowsArrowButtons(_: boolean)

	showsArrowButtons: boolean;

	insertItemsAtIndexes(at: NSIndexSet): void;

	itemViewForItemAtIndex(at: number): NSScrubberItemView;

	makeItemWithIdentifierOwner(withIdentifier: string, owner?: any): NSScrubberItemView;

	moveItemAtIndexToIndex(at: number, to: number): void;

	performSequentialBatchUpdates(_: () => void): void;

	registerClassForItemIdentifier(_?: typeof NSObject, forItemIdentifier: string): void;

	registerNibForItemIdentifier(_?: NSNib, forItemIdentifier: string): void;

	reloadData(): void;

	reloadItemsAtIndexes(at: NSIndexSet): void;

	removeItemsAtIndexes(at: NSIndexSet): void;

	scrollItemAtIndexToAlignment(at: number, to: NSScrubberAlignment): void;
}

enum NSScrubberAlignment {

	None = 0,

	Leading = 1,

	Trailing = 2,

	Center = 3
}

globalThis.NSScrubberAlignment = NSScrubberAlignment;

declare class NSScrubberArrangedView extends NSView {

	setHighlighted(_: boolean)

	isHighlighted: boolean;

	setSelected(_: boolean)

	isSelected: boolean;

	applyLayoutAttributes(_: NSScrubberLayoutAttributes): void;
}

interface NSScrubberDataSource extends NSObjectProtocol {

	numberOfItemsForScrubber(for_: NSScrubber): number;

	scrubberViewForItemAtIndex(_: NSScrubber, viewForItemAt: number): NSScrubberItemView;
}
declare var NSScrubberDataSource: {

	prototype: NSScrubberDataSource;
};

interface NSScrubberDelegate extends NSObjectProtocol {

	didBeginInteractingWithScrubber?(with_: NSScrubber): void;

	didCancelInteractingWithScrubber?(with_: NSScrubber): void;

	didFinishInteractingWithScrubber?(with_: NSScrubber): void;

	scrubberDidSelectItemAtIndex?(_: NSScrubber, didSelectItemAt: number): void;

	scrubberDidHighlightItemAtIndex?(_: NSScrubber, didHighlightItemAt: number): void;

	scrubberDidChangeVisibleRange?(_: NSScrubber, didChangeVisibleRange: NSRange): void;
}
declare var NSScrubberDelegate: {

	prototype: NSScrubberDelegate;
};

declare class NSScrubberFlowLayout extends NSScrubberLayout {

	setItemSize(_: CGSize)

	itemSize: CGSize;

	setItemSpacing(_: number)

	itemSpacing: number;

	invalidateLayoutForItemsAtIndexes(at: NSIndexSet): void;
}

interface NSScrubberFlowLayoutDelegate extends NSScrubberDelegate {

	scrubberLayoutSizeForItemAtIndex?(_: NSScrubber, layout: NSScrubberFlowLayout, sizeForItemAt: number): CGSize;
}
declare var NSScrubberFlowLayoutDelegate: {

	prototype: NSScrubberFlowLayoutDelegate;
};

declare class NSScrubberImageItemView extends NSScrubberItemView {

	setImage(_: NSImage)

	image: NSImage;

	setImageAlignment(_: NSImageAlignment)

	imageAlignment: NSImageAlignment;

	readonly imageView: NSImageView;
}

declare class NSScrubberItemView extends NSScrubberArrangedView {
}

declare class NSScrubberLayout extends NSObject implements NSCoding {

	readonly automaticallyMirrorsInRightToLeftLayout: boolean;

	readonly scrubber: NSScrubber;

	readonly scrubberContentSize: CGSize;

	readonly shouldInvalidateLayoutForHighlightChange: boolean;

	readonly shouldInvalidateLayoutForSelectionChange: boolean;

	readonly visibleRect: CGRect;

	static layoutAttributesClass(): typeof NSObject;

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	invalidateLayout(): void;

	layoutAttributesForItemAtIndex(at: number): NSScrubberLayoutAttributes;

	layoutAttributesForItemsInRect(in_: CGRect): NSSet<NSScrubberLayoutAttributes>;

	prepareLayout(): void;

	shouldInvalidateLayoutForChangeFromVisibleRectToVisibleRect(fromVisibleRect: CGRect, toVisibleRect: CGRect): boolean;
}

declare class NSScrubberLayoutAttributes extends NSObject implements NSCopying {

	static layoutAttributesForItemAtIndex(forItemAt: number): NSScrubberLayoutAttributes;

	setAlpha(_: number)

	alpha: number;

	setFrame(_: CGRect)

	frame: CGRect;

	setItemIndex(_: number)

	itemIndex: number;

	copyWithZone(_?: any): any;
}

enum NSScrubberMode {

	Fixed = 0,

	Free = 1
}

globalThis.NSScrubberMode = NSScrubberMode;

declare class NSScrubberProportionalLayout extends NSScrubberLayout {

	setNumberOfVisibleItems(_: number)

	numberOfVisibleItems: number;

	static create(numberOfVisibleItems: number);
}

declare class NSScrubberSelectionStyle extends NSObject implements NSCoding {

	static outlineOverlayStyle(): NSScrubberSelectionStyle;

	static roundedBackgroundStyle(): NSScrubberSelectionStyle;

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	makeSelectionView(): NSScrubberSelectionView;
}

declare class NSScrubberSelectionView extends NSScrubberArrangedView {
}

declare class NSScrubberTextItemView extends NSScrubberItemView {

	readonly textField: NSTextField;

	setTitle(_: string)

	title: string;
}

declare class NSSearchField extends NSTextField {

	static labelWithAttributedString(labelWithAttributedString: NSAttributedString): NSSearchField; // inherited from NSTextField

	static labelWithString(labelWithString: string): NSSearchField; // inherited from NSTextField

	static textFieldWithString(string: string): NSSearchField; // inherited from NSTextField

	static wrappingLabelWithString(wrappingLabelWithString: string): NSSearchField; // inherited from NSTextField

	setDelegate(_: NSSearchFieldDelegate)

	delegate: NSSearchFieldDelegate;

	setMaximumRecents(_: number)

	maximumRecents: number;

	setRecentSearches(_: NSArray<string>)

	recentSearches: NSArray<string>;

	setRecentsAutosaveName(_: string)

	recentsAutosaveName: string;

	setSearchMenuTemplate(_: NSMenu)

	searchMenuTemplate: NSMenu;

	setSendsSearchStringImmediately(_: boolean)

	sendsSearchStringImmediately: boolean;

	setSendsWholeSearchString(_: boolean)

	sendsWholeSearchString: boolean;

	rectForCancelButtonWhenCentered(whenCentered: boolean): CGRect;

	rectForSearchButtonWhenCentered(whenCentered: boolean): CGRect;

	rectForSearchTextWhenCentered(whenCentered: boolean): CGRect;
}

declare class NSSearchFieldCell extends NSTextFieldCell {

	setCancelButtonCell(_: NSButtonCell)

	cancelButtonCell: NSButtonCell;

	setMaximumRecents(_: number)

	maximumRecents: number;

	setRecentSearches(_: NSArray<string>)

	recentSearches: NSArray<string>;

	setRecentsAutosaveName(_: string)

	recentsAutosaveName: string;

	setSearchButtonCell(_: NSButtonCell)

	searchButtonCell: NSButtonCell;

	setSearchMenuTemplate(_: NSMenu)

	searchMenuTemplate: NSMenu;

	setSendsSearchStringImmediately(_: boolean)

	sendsSearchStringImmediately: boolean;

	setSendsWholeSearchString(_: boolean)

	sendsWholeSearchString: boolean;

	cancelButtonRectForBounds(forBounds: CGRect): CGRect;

	resetCancelButtonCell(): void;

	resetSearchButtonCell(): void;

	searchButtonRectForBounds(forBounds: CGRect): CGRect;

	searchTextRectForBounds(forBounds: CGRect): CGRect;
}

declare var NSSearchFieldClearRecentsMenuItemTag: number;

interface NSSearchFieldDelegate extends NSTextFieldDelegate {

	searchFieldDidEndSearching?(_: NSSearchField): void;

	searchFieldDidStartSearching?(_: NSSearchField): void;
}
declare var NSSearchFieldDelegate: {

	prototype: NSSearchFieldDelegate;
};

declare var NSSearchFieldNoRecentsMenuItemTag: number;

declare var NSSearchFieldRecentsMenuItemTag: number;

declare var NSSearchFieldRecentsTitleMenuItemTag: number;

declare class NSSecureTextField extends NSTextField {

	static labelWithAttributedString(labelWithAttributedString: NSAttributedString): NSSecureTextField; // inherited from NSTextField

	static labelWithString(labelWithString: string): NSSecureTextField; // inherited from NSTextField

	static textFieldWithString(string: string): NSSecureTextField; // inherited from NSTextField

	static wrappingLabelWithString(wrappingLabelWithString: string): NSSecureTextField; // inherited from NSTextField
}

declare class NSSecureTextFieldCell extends NSTextFieldCell {

	setEchosBullets(_: boolean)

	echosBullets: boolean;
}

enum NSSegmentDistribution {

	Fit = 0,

	Fill = 1,

	FillEqually = 2,

	FillProportionally = 3
}

globalThis.NSSegmentDistribution = NSSegmentDistribution;

enum NSSegmentStyle {

	Automatic = 0,

	Rounded = 1,

	RoundRect = 3,

	TexturedSquare = 4,

	SmallSquare = 6,

	Separated = 8,

	TexturedRounded = 2,

	Capsule = 5
}

globalThis.NSSegmentStyle = NSSegmentStyle;

enum NSSegmentSwitchTracking {

	SelectOne = 0,

	SelectAny = 1,

	Momentary = 2,

	MomentaryAccelerator = 3
}

globalThis.NSSegmentSwitchTracking = NSSegmentSwitchTracking;

declare class NSSegmentedCell extends NSActionCell {

	setSegmentCount(_: number)

	segmentCount: number;

	setSegmentStyle(_: NSSegmentStyle)

	segmentStyle: NSSegmentStyle;

	setSelectedSegment(_: number)

	selectedSegment: number;

	setTrackingMode(_: NSSegmentSwitchTracking)

	trackingMode: NSSegmentSwitchTracking;

	drawSegmentInFrameWithView(_: number, inFrame: CGRect, with_: NSView): void;

	imageForSegment(forSegment: number): NSImage;

	imageScalingForSegment(forSegment: number): NSImageScaling;

	interiorBackgroundStyleForSegment(forSegment: number): NSBackgroundStyle;

	isEnabledForSegment(forSegment: number): boolean;

	isSelectedForSegment(forSegment: number): boolean;

	labelForSegment(forSegment: number): string;

	makeNextSegmentKey(): void;

	makePreviousSegmentKey(): void;

	menuForSegment(forSegment: number): NSMenu;

	selectSegmentWithTag(withTag: number): boolean;

	setEnabledForSegment(_: boolean, forSegment: number): void;

	setImageForSegment(_?: NSImage, forSegment: number): void;

	setImageScalingForSegment(_: NSImageScaling, forSegment: number): void;

	setLabelForSegment(_: string, forSegment: number): void;

	setMenuForSegment(_?: NSMenu, forSegment: number): void;

	setSelectedForSegment(_: boolean, forSegment: number): void;

	setTagForSegment(_: number, forSegment: number): void;

	setToolTipForSegment(_?: string, forSegment: number): void;

	setWidthForSegment(_: number, forSegment: number): void;

	tagForSegment(forSegment: number): number;

	toolTipForSegment(forSegment: number): string;

	widthForSegment(forSegment: number): number;
}

declare class NSSegmentedControl extends NSControl implements NSUserInterfaceCompression {

	static segmentedControlWithImagesTrackingModeTargetAction(images: NSArray<NSImage>, trackingMode: NSSegmentSwitchTracking, target?: any, action?: string): NSSegmentedControl;

	static segmentedControlWithLabelsTrackingModeTargetAction(labels: NSArray<string>, trackingMode: NSSegmentSwitchTracking, target?: any, action?: string): NSSegmentedControl;

	readonly doubleValueForSelectedSegment: number;

	readonly indexOfSelectedItem: number;

	setSegmentCount(_: number)

	segmentCount: number;

	setSegmentDistribution(_: NSSegmentDistribution)

	segmentDistribution: NSSegmentDistribution;

	setSegmentStyle(_: NSSegmentStyle)

	segmentStyle: NSSegmentStyle;

	setSelectedSegment(_: number)

	selectedSegment: number;

	setSelectedSegmentBezelColor(_: NSColor)

	selectedSegmentBezelColor: NSColor;

	setSpringLoaded(_: boolean)

	isSpringLoaded: boolean;

	setTrackingMode(_: NSSegmentSwitchTracking)

	trackingMode: NSSegmentSwitchTracking;

	readonly activeCompressionOptions: NSUserInterfaceCompressionOptions; // inherited from NSUserInterfaceCompression

	alignmentForSegment(forSegment: number): NSTextAlignment;

	compressWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): void;

	imageForSegment(forSegment: number): NSImage;

	imageScalingForSegment(forSegment: number): NSImageScaling;

	isEnabledForSegment(forSegment: number): boolean;

	isSelectedForSegment(forSegment: number): boolean;

	labelForSegment(forSegment: number): string;

	menuForSegment(forSegment: number): NSMenu;

	minimumSizeWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): CGSize;

	selectSegmentWithTag(withTag: number): boolean;

	setAlignmentForSegment(_: NSTextAlignment, forSegment: number): void;

	setEnabledForSegment(_: boolean, forSegment: number): void;

	setImageForSegment(_?: NSImage, forSegment: number): void;

	setImageScalingForSegment(_: NSImageScaling, forSegment: number): void;

	setLabelForSegment(_: string, forSegment: number): void;

	setMenuForSegment(_?: NSMenu, forSegment: number): void;

	setSelectedForSegment(_: boolean, forSegment: number): void;

	setShowsMenuIndicatorForSegment(_: boolean, forSegment: number): void;

	setTagForSegment(_: number, forSegment: number): void;

	setToolTipForSegment(_?: string, forSegment: number): void;

	setWidthForSegment(_: number, forSegment: number): void;

	showsMenuIndicatorForSegment(forSegment: number): boolean;

	tagForSegment(forSegment: number): number;

	toolTipForSegment(forSegment: number): string;

	widthForSegment(forSegment: number): number;
}

interface NSSeguePerforming extends NSObjectProtocol {

	performSegueWithIdentifierSender?(withIdentifier: string, sender?: any): void;

	prepareForSegueSender?(for_: NSStoryboardSegue, sender?: any): void;

	shouldPerformSegueWithIdentifierSender?(withIdentifier: string, sender?: any): boolean;
}
declare var NSSeguePerforming: {

	prototype: NSSeguePerforming;
};

declare const NSSelectFunctionKey: number;

declare var NSSelectedIdentifierBinding: string;

declare var NSSelectedIndexBinding: string;

declare var NSSelectedLabelBinding: string;

declare var NSSelectedObjectBinding: string;

declare var NSSelectedObjectsBinding: string;

declare var NSSelectedTagBinding: string;

declare var NSSelectedValueBinding: string;

declare var NSSelectedValuesBinding: string;

enum NSSelectionAffinity {

	Upstream = 0,

	Downstream = 1
}

globalThis.NSSelectionAffinity = NSSelectionAffinity;

enum NSSelectionDirection {

	DirectSelection = 0,

	SelectingNext = 1,

	SelectingPrevious = 2
}

globalThis.NSSelectionDirection = NSSelectionDirection;

enum NSSelectionGranularity {

	ByCharacter = 0,

	ByWord = 1,

	ByParagraph = 2
}

globalThis.NSSelectionGranularity = NSSelectionGranularity;

declare var NSSelectionIndexPathsBinding: string;

declare var NSSelectionIndexesBinding: string;

declare var NSSelectorNameBindingOption: string;

declare var NSSelectsAllWhenSettingContentBindingOption: string;

declare const NSServiceApplicationLaunchFailedError: number;

declare const NSServiceApplicationNotFoundError: number;

declare const NSServiceErrorMaximum: number;

declare const NSServiceErrorMinimum: number;

declare const NSServiceInvalidPasteboardDataError: number;

declare const NSServiceMalformedServiceDictionaryError: number;

declare const NSServiceMiscellaneousError: number;

declare const NSServiceRequestTimedOutError: number;

interface NSServicesMenuRequestor extends NSObjectProtocol {

	readSelectionFromPasteboard?(from: NSPasteboard): boolean;

	writeSelectionToPasteboardTypes?(to: NSPasteboard, types: NSArray<string>): boolean;
}
declare var NSServicesMenuRequestor: {

	prototype: NSServicesMenuRequestor;
};

declare function NSSetFocusRingStyle(placement: NSFocusRingPlacement): void;

declare function NSSetShowsServicesMenuItem(itemName: string, enabled: boolean): number;

declare class NSShadow extends NSObject implements NSCopying, NSSecureCoding {

	setShadowBlurRadius(_: number)

	shadowBlurRadius: number;

	setShadowColor(_: NSColor)

	shadowColor: NSColor;

	setShadowOffset(_: CGSize)

	shadowOffset: CGSize;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	set(): void;
}

declare var NSShadowAttributeName: string;

enum NSSharingContentScope {

	Item = 0,

	Partial = 1,

	Full = 2
}

globalThis.NSSharingContentScope = NSSharingContentScope;

declare class NSSharingService extends NSObject {

	static sharingServiceNamed(named: string): NSSharingService;

	static sharingServicesForItems(forItems: NSArray<any>): NSArray<NSSharingService>;

	readonly accountName: string;

	readonly alternateImage: NSImage;

	readonly attachmentFileURLs: NSArray<NSURL>;

	setDelegate(_: NSSharingServiceDelegate)

	delegate: NSSharingServiceDelegate;

	readonly image: NSImage;

	setMenuItemTitle(_: string)

	menuItemTitle: string;

	readonly messageBody: string;

	readonly permanentLink: NSURL;

	setRecipients(_: NSArray<string>)

	recipients: NSArray<string>;

	setSubject(_: string)

	subject: string;

	readonly title: string;

	static create(title: string, image: NSImage, alternateImage: NSImage, handler: () => void);

	canPerformWithItems(withItems?: NSArray<any>): boolean;

	performWithItems(withItems: NSArray<any>): void;
}

interface NSSharingServiceDelegate extends NSObjectProtocol {

	anchoringViewForSharingServiceShowRelativeToRectPreferredEdge?(for_: NSSharingService, showRelativeTo: CGRect, preferredEdge: NSRectEdge): NSView;

	sharingServiceDidFailToShareItemsError?(_: NSSharingService, didFailToShareItems: NSArray<any>, error: NSError): void;

	sharingServiceDidShareItems?(_: NSSharingService, didShareItems: NSArray<any>): void;

	sharingServiceSourceFrameOnScreenForShareItem?(_: NSSharingService, sourceFrameOnScreenForShareItem: any): CGRect;

	sharingServiceSourceWindowForShareItemsSharingContentScope?(_: NSSharingService, sourceWindowForShareItems: NSArray<any>, sharingContentScope: NSSharingContentScope): NSWindow;

	sharingServiceTransitionImageForShareItemContentRect?(_: NSSharingService, transitionImageForShareItem: any, contentRect: CGRect): NSImage;

	sharingServiceWillShareItems?(_: NSSharingService, willShareItems: NSArray<any>): void;
}
declare var NSSharingServiceDelegate: {

	prototype: NSSharingServiceDelegate;
};

declare const NSSharingServiceErrorMaximum: number;

declare const NSSharingServiceErrorMinimum: number;

declare var NSSharingServiceNameAddToAperture: string;

declare var NSSharingServiceNameAddToIPhoto: string;

declare var NSSharingServiceNameAddToSafariReadingList: string;

declare var NSSharingServiceNameCloudSharing: string;

declare var NSSharingServiceNameComposeEmail: string;

declare var NSSharingServiceNameComposeMessage: string;

declare var NSSharingServiceNameSendViaAirDrop: string;

declare var NSSharingServiceNameUseAsDesktopPicture: string;

declare const NSSharingServiceNotConfiguredError: number;

declare class NSSharingServicePicker extends NSObject {

	setDelegate(_: NSSharingServicePickerDelegate)

	delegate: NSSharingServicePickerDelegate;

	static create(items: NSArray<any> | any[]);

	showRelativeToRectOfViewPreferredEdge(relativeTo: CGRect, of: NSView, preferredEdge: NSRectEdge): void;
}

interface NSSharingServicePickerDelegate extends NSObjectProtocol {

	sharingServicePickerDelegateForSharingService?(_: NSSharingServicePicker, delegateFor: NSSharingService): NSSharingServiceDelegate;

	sharingServicePickerDidChooseSharingService?(_: NSSharingServicePicker, didChoose?: NSSharingService): void;

	sharingServicePickerSharingServicesForItemsProposedSharingServices?(_: NSSharingServicePicker, sharingServicesForItems: NSArray<any>, proposedSharingServices: NSArray<NSSharingService>): NSArray<NSSharingService>;
}
declare var NSSharingServicePickerDelegate: {

	prototype: NSSharingServicePickerDelegate;
};

declare class NSSharingServicePickerToolbarItem extends NSToolbarItem {

	setDelegate(_: NSSharingServicePickerToolbarItemDelegate)

	delegate: NSSharingServicePickerToolbarItemDelegate;
}

interface NSSharingServicePickerToolbarItemDelegate extends NSSharingServicePickerDelegate {

	itemsForSharingServicePickerToolbarItem(for_: NSSharingServicePickerToolbarItem): NSArray<any>;
}
declare var NSSharingServicePickerToolbarItemDelegate: {

	prototype: NSSharingServicePickerToolbarItemDelegate;
};

declare class NSSharingServicePickerTouchBarItem extends NSTouchBarItem {

	setButtonImage(_: NSImage)

	buttonImage: NSImage;

	setButtonTitle(_: string)

	buttonTitle: string;

	setDelegate(_: NSSharingServicePickerTouchBarItemDelegate)

	delegate: NSSharingServicePickerTouchBarItemDelegate;

	setEnabled(_: boolean)

	isEnabled: boolean;
}

interface NSSharingServicePickerTouchBarItemDelegate extends NSSharingServicePickerDelegate {

	itemsForSharingServicePickerTouchBarItem(for_: NSSharingServicePickerTouchBarItem): NSArray<any>;
}
declare var NSSharingServicePickerTouchBarItemDelegate: {

	prototype: NSSharingServicePickerTouchBarItemDelegate;
};

declare function NSShowAnimationEffect(animationEffect: NSAnimationEffect, centerLocation: CGPoint, size: CGSize, animationDelegate: any, didEndSelector: string, contextInfo: any): void;

declare const NSShowControlGlyphs: number;

declare const NSShowInvisibleGlyphs: number;

declare function NSShowsServicesMenuItem(itemName: string): boolean;

declare var NSSingleDateMode: NSDatePickerMode;

declare class NSSlider extends NSControl implements NSAccessibilitySlider {

	static sliderWithTargetAction(target?: any, action?: string): NSSlider;

	static sliderWithValueMinValueMaxValueTargetAction(value: number, minValue: number, maxValue: number, target?: any, action?: string): NSSlider;

	setAllowsTickMarkValuesOnly(_: boolean)

	allowsTickMarkValuesOnly: boolean;

	setAltIncrementValue(_: number)

	altIncrementValue: number;

	readonly knobThickness: number;

	setMaxValue(_: number)

	maxValue: number;

	setMinValue(_: number)

	minValue: number;

	setNumberOfTickMarks(_: number)

	numberOfTickMarks: number;

	setSliderType(_: NSSliderType)

	sliderType: NSSliderType;

	setTickMarkPosition(_: NSTickMarkPosition)

	tickMarkPosition: NSTickMarkPosition;

	setTrackFillColor(_: NSColor)

	trackFillColor: NSColor;

	readonly isVertical: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityFrame(): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLabel(): string;

	accessibilityParent(): any;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityValue(): any;

	closestTickMarkValueToValue(toValue: number): number;

	conformsToProtocol(_: any /* Protocol */): boolean;

	indexOfTickMarkAtPoint(at: CGPoint): number;

	isAccessibilityFocused(): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	rectOfTickMarkAtIndex(at: number): CGRect;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	tickMarkValueAtIndex(at: number): number;
}

declare class NSSliderAccessory extends NSObject implements NSCoding, NSAccessibility, NSAccessibilityElementProtocol {

	static accessoryWithImage(image: NSImage): NSSliderAccessory;

	setBehavior(_: NSSliderAccessoryBehavior)

	behavior: NSSliderAccessoryBehavior;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setAccessibilityActivationPoint(_: CGPoint)

	accessibilityActivationPoint: CGPoint; // inherited from NSAccessibility

	setAccessibilityAllowedValues(_: NSArray<number>)

	accessibilityAllowedValues: NSArray<number>; // inherited from NSAccessibility

	setAccessibilityAlternateUIVisible(_: boolean)

	isAccessibilityAlternateUIVisible: boolean; // inherited from NSAccessibility

	setAccessibilityApplicationFocusedUIElement(_: any)

	accessibilityApplicationFocusedUIElement: any; // inherited from NSAccessibility

	setAccessibilityCancelButton(_: any)

	accessibilityCancelButton: any; // inherited from NSAccessibility

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)

	accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>; // inherited from NSAccessibility

	setAccessibilityClearButton(_: any)

	accessibilityClearButton: any; // inherited from NSAccessibility

	setAccessibilityCloseButton(_: any)

	accessibilityCloseButton: any; // inherited from NSAccessibility

	setAccessibilityColumnCount(_: number)

	accessibilityColumnCount: number; // inherited from NSAccessibility

	setAccessibilityColumnHeaderUIElements(_: NSArray<any>)

	accessibilityColumnHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumnIndexRange(_: NSRange)

	accessibilityColumnIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityColumnTitles(_: NSArray<any>)

	accessibilityColumnTitles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumns(_: NSArray<any>)

	accessibilityColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityContents(_: NSArray<any>)

	accessibilityContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityCriticalValue(_: any)

	accessibilityCriticalValue: any; // inherited from NSAccessibility

	setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)

	accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>; // inherited from NSAccessibility

	setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)

	accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>; // inherited from NSAccessibility

	setAccessibilityDecrementButton(_: any)

	accessibilityDecrementButton: any; // inherited from NSAccessibility

	setAccessibilityDefaultButton(_: any)

	accessibilityDefaultButton: any; // inherited from NSAccessibility

	setAccessibilityDisclosed(_: boolean)

	isAccessibilityDisclosed: boolean; // inherited from NSAccessibility

	setAccessibilityDisclosedByRow(_: any)

	accessibilityDisclosedByRow: any; // inherited from NSAccessibility

	setAccessibilityDisclosedRows(_: any)

	accessibilityDisclosedRows: any; // inherited from NSAccessibility

	setAccessibilityDisclosureLevel(_: number)

	accessibilityDisclosureLevel: number; // inherited from NSAccessibility

	setAccessibilityDocument(_: string)

	accessibilityDocument: string; // inherited from NSAccessibility

	setAccessibilityEdited(_: boolean)

	isAccessibilityEdited: boolean; // inherited from NSAccessibility

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean; // inherited from NSAccessibility

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean; // inherited from NSAccessibility

	setAccessibilityExpanded(_: boolean)

	isAccessibilityExpanded: boolean; // inherited from NSAccessibility

	setAccessibilityExtrasMenuBar(_: any)

	accessibilityExtrasMenuBar: any; // inherited from NSAccessibility

	setAccessibilityFilename(_: string)

	accessibilityFilename: string; // inherited from NSAccessibility

	setAccessibilityFocused(_: boolean)

	isAccessibilityFocused: boolean; // inherited from NSAccessibility

	setAccessibilityFocusedWindow(_: any)

	accessibilityFocusedWindow: any; // inherited from NSAccessibility

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect; // inherited from NSAccessibility

	setAccessibilityFrontmost(_: boolean)

	isAccessibilityFrontmost: boolean; // inherited from NSAccessibility

	setAccessibilityFullScreenButton(_: any)

	accessibilityFullScreenButton: any; // inherited from NSAccessibility

	setAccessibilityGrowArea(_: any)

	accessibilityGrowArea: any; // inherited from NSAccessibility

	setAccessibilityHandles(_: NSArray<any>)

	accessibilityHandles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityHeader(_: any)

	accessibilityHeader: any; // inherited from NSAccessibility

	setAccessibilityHelp(_: string)

	accessibilityHelp: string; // inherited from NSAccessibility

	setAccessibilityHidden(_: boolean)

	isAccessibilityHidden: boolean; // inherited from NSAccessibility

	setAccessibilityHorizontalScrollBar(_: any)

	accessibilityHorizontalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityHorizontalUnitDescription(_: string)

	accessibilityHorizontalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityHorizontalUnits(_: NSAccessibilityUnits)

	accessibilityHorizontalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityIdentifier(_: string)

	accessibilityIdentifier: string; // inherited from NSAccessibility

	setAccessibilityIncrementButton(_: any)

	accessibilityIncrementButton: any; // inherited from NSAccessibility

	setAccessibilityIndex(_: number)

	accessibilityIndex: number; // inherited from NSAccessibility

	setAccessibilityInsertionPointLineNumber(_: number)

	accessibilityInsertionPointLineNumber: number; // inherited from NSAccessibility

	setAccessibilityLabel(_: string)

	accessibilityLabel: string; // inherited from NSAccessibility

	setAccessibilityLabelUIElements(_: NSArray<any>)

	accessibilityLabelUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityLabelValue(_: number)

	accessibilityLabelValue: number; // inherited from NSAccessibility

	setAccessibilityLinkedUIElements(_: NSArray<any>)

	accessibilityLinkedUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMain(_: boolean)

	isAccessibilityMain: boolean; // inherited from NSAccessibility

	setAccessibilityMainWindow(_: any)

	accessibilityMainWindow: any; // inherited from NSAccessibility

	setAccessibilityMarkerGroupUIElement(_: any)

	accessibilityMarkerGroupUIElement: any; // inherited from NSAccessibility

	setAccessibilityMarkerTypeDescription(_: string)

	accessibilityMarkerTypeDescription: string; // inherited from NSAccessibility

	setAccessibilityMarkerUIElements(_: NSArray<any>)

	accessibilityMarkerUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMarkerValues(_: any)

	accessibilityMarkerValues: any; // inherited from NSAccessibility

	setAccessibilityMaxValue(_: any)

	accessibilityMaxValue: any; // inherited from NSAccessibility

	setAccessibilityMenuBar(_: any)

	accessibilityMenuBar: any; // inherited from NSAccessibility

	setAccessibilityMinValue(_: any)

	accessibilityMinValue: any; // inherited from NSAccessibility

	setAccessibilityMinimizeButton(_: any)

	accessibilityMinimizeButton: any; // inherited from NSAccessibility

	setAccessibilityMinimized(_: boolean)

	isAccessibilityMinimized: boolean; // inherited from NSAccessibility

	setAccessibilityModal(_: boolean)

	isAccessibilityModal: boolean; // inherited from NSAccessibility

	setAccessibilityNextContents(_: NSArray<any>)

	accessibilityNextContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityNumberOfCharacters(_: number)

	accessibilityNumberOfCharacters: number; // inherited from NSAccessibility

	setAccessibilityOrderedByRow(_: boolean)

	isAccessibilityOrderedByRow: boolean; // inherited from NSAccessibility

	setAccessibilityOrientation(_: NSAccessibilityOrientation)

	accessibilityOrientation: NSAccessibilityOrientation; // inherited from NSAccessibility

	setAccessibilityOverflowButton(_: any)

	accessibilityOverflowButton: any; // inherited from NSAccessibility

	setAccessibilityParent(_: any)

	accessibilityParent: any; // inherited from NSAccessibility

	setAccessibilityPlaceholderValue(_: string)

	accessibilityPlaceholderValue: string; // inherited from NSAccessibility

	setAccessibilityPreviousContents(_: NSArray<any>)

	accessibilityPreviousContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityProtectedContent(_: boolean)

	isAccessibilityProtectedContent: boolean; // inherited from NSAccessibility

	setAccessibilityProxy(_: any)

	accessibilityProxy: any; // inherited from NSAccessibility

	setAccessibilityRequired(_: boolean)

	isAccessibilityRequired: boolean; // inherited from NSAccessibility

	setAccessibilityRole(_: string)

	accessibilityRole: string; // inherited from NSAccessibility

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string; // inherited from NSAccessibility

	setAccessibilityRowCount(_: number)

	accessibilityRowCount: number; // inherited from NSAccessibility

	setAccessibilityRowHeaderUIElements(_: NSArray<any>)

	accessibilityRowHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRowIndexRange(_: NSRange)

	accessibilityRowIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityRows(_: NSArray<any>)

	accessibilityRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRulerMarkerType(_: NSAccessibilityRulerMarkerType)

	accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType; // inherited from NSAccessibility

	setAccessibilitySearchButton(_: any)

	accessibilitySearchButton: any; // inherited from NSAccessibility

	setAccessibilitySearchMenu(_: any)

	accessibilitySearchMenu: any; // inherited from NSAccessibility

	setAccessibilitySelected(_: boolean)

	isAccessibilitySelected: boolean; // inherited from NSAccessibility

	setAccessibilitySelectedCells(_: NSArray<any>)

	accessibilitySelectedCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedChildren(_: NSArray<any>)

	accessibilitySelectedChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedColumns(_: NSArray<any>)

	accessibilitySelectedColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedRows(_: NSArray<any>)

	accessibilitySelectedRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedText(_: string)

	accessibilitySelectedText: string; // inherited from NSAccessibility

	setAccessibilitySelectedTextRange(_: NSRange)

	accessibilitySelectedTextRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)

	accessibilitySelectedTextRanges: NSArray<NSValue>; // inherited from NSAccessibility

	setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)

	accessibilityServesAsTitleForUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedCharacterRange(_: NSRange)

	accessibilitySharedCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySharedFocusElements(_: NSArray<any>)

	accessibilitySharedFocusElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedTextUIElements(_: NSArray<any>)

	accessibilitySharedTextUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityShownMenu(_: any)

	accessibilityShownMenu: any; // inherited from NSAccessibility

	setAccessibilitySortDirection(_: NSAccessibilitySortDirection)

	accessibilitySortDirection: NSAccessibilitySortDirection; // inherited from NSAccessibility

	setAccessibilitySplitters(_: NSArray<any>)

	accessibilitySplitters: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string; // inherited from NSAccessibility

	setAccessibilityTabs(_: NSArray<any>)

	accessibilityTabs: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityTitle(_: string)

	accessibilityTitle: string; // inherited from NSAccessibility

	setAccessibilityTitleUIElement(_: any)

	accessibilityTitleUIElement: any; // inherited from NSAccessibility

	setAccessibilityToolbarButton(_: any)

	accessibilityToolbarButton: any; // inherited from NSAccessibility

	setAccessibilityTopLevelUIElement(_: any)

	accessibilityTopLevelUIElement: any; // inherited from NSAccessibility

	setAccessibilityURL(_: NSURL)

	accessibilityURL: NSURL; // inherited from NSAccessibility

	setAccessibilityUnitDescription(_: string)

	accessibilityUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityUnits(_: NSAccessibilityUnits)

	accessibilityUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityValue(_: any)

	accessibilityValue: any; // inherited from NSAccessibility

	setAccessibilityValueDescription(_: string)

	accessibilityValueDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalScrollBar(_: any)

	accessibilityVerticalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityVerticalUnitDescription(_: string)

	accessibilityVerticalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalUnits(_: NSAccessibilityUnits)

	accessibilityVerticalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityVisibleCells(_: NSArray<any>)

	accessibilityVisibleCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleCharacterRange(_: NSRange)

	accessibilityVisibleCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilityVisibleChildren(_: NSArray<any>)

	accessibilityVisibleChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleColumns(_: NSArray<any>)

	accessibilityVisibleColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleRows(_: NSArray<any>)

	accessibilityVisibleRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityWarningValue(_: any)

	accessibilityWarningValue: any; // inherited from NSAccessibility

	setAccessibilityWindow(_: any)

	accessibilityWindow: any; // inherited from NSAccessibility

	setAccessibilityWindows(_: NSArray<any>)

	accessibilityWindows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityZoomButton(_: any)

	accessibilityZoomButton: any; // inherited from NSAccessibility

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(coder: NSCoder); // inherited from NSCoding

	accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;

	accessibilityCellForColumnRow(_: number, row: number): any;

	accessibilityFrame(): CGRect;

	accessibilityFrameForRange(_: NSRange): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLayoutPointForScreenPoint(_: CGPoint): CGPoint;

	accessibilityLayoutSizeForScreenSize(_: CGSize): CGSize;

	accessibilityLineForIndex(_: number): number;

	accessibilityParent(): any;

	accessibilityPerformCancel(): boolean;

	accessibilityPerformConfirm(): boolean;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformDelete(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPick(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityPerformRaise(): boolean;

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	accessibilityPerformShowMenu(): boolean;

	accessibilityRTFForRange(_: NSRange): NSData;

	accessibilityRangeForIndex(_: number): NSRange;

	accessibilityRangeForLine(_: number): NSRange;

	accessibilityRangeForPosition(_: CGPoint): NSRange;

	accessibilityScreenPointForLayoutPoint(_: CGPoint): CGPoint;

	accessibilityScreenSizeForLayoutSize(_: CGSize): CGSize;

	accessibilityStringForRange(_: NSRange): string;

	accessibilityStyleRangeForIndex(_: number): NSRange;

	conformsToProtocol(_: any /* Protocol */): boolean;

	encodeWithCoder(_: NSCoder): void;

	isAccessibilityFocused(): boolean;

	isAccessibilitySelectorAllowed(_: string): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class NSSliderAccessoryBehavior extends NSObject implements NSCoding, NSCopying {

	static behaviorWithHandler(handler: (p1: NSSliderAccessory) => void): NSSliderAccessoryBehavior;

	static behaviorWithTargetAction(target?: any, action: string): NSSliderAccessoryBehavior;

	static automaticBehavior(): NSSliderAccessoryBehavior;

	static valueResetBehavior(): NSSliderAccessoryBehavior;

	static valueStepBehavior(): NSSliderAccessoryBehavior;

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	handleAction(_: NSSliderAccessory): void;
}

declare var NSSliderAccessoryWidthDefault: number;

declare var NSSliderAccessoryWidthWide: number;

declare class NSSliderCell extends NSActionCell {

	setAllowsTickMarkValuesOnly(_: boolean)

	allowsTickMarkValuesOnly: boolean;

	setAltIncrementValue(_: number)

	altIncrementValue: number;

	readonly knobThickness: number;

	setMaxValue(_: number)

	maxValue: number;

	setMinValue(_: number)

	minValue: number;

	setNumberOfTickMarks(_: number)

	numberOfTickMarks: number;

	setSliderType(_: NSSliderType)

	sliderType: NSSliderType;

	setTickMarkPosition(_: NSTickMarkPosition)

	tickMarkPosition: NSTickMarkPosition;

	readonly trackRect: CGRect;

	readonly isVertical: boolean;

	barRectFlipped(flipped: boolean): CGRect;

	closestTickMarkValueToValue(toValue: number): number;

	drawBarInsideFlipped(inside: CGRect, flipped: boolean): void;

	drawKnob(): void;

	drawKnob(_: CGRect): void;

	drawTickMarks(): void;

	indexOfTickMarkAtPoint(at: CGPoint): number;

	knobRectFlipped(flipped: boolean): CGRect;

	rectOfTickMarkAtIndex(at: number): CGRect;

	tickMarkValueAtIndex(at: number): number;
}

declare class NSSliderTouchBarItem extends NSTouchBarItem {

	setAction(_: string)

	action: string;

	setCustomizationLabel(_: string)

	customizationLabel: string;

	setDoubleValue(_: number)

	doubleValue: number;

	setLabel(_: string)

	label: string;

	setMaximumSliderWidth(_: number)

	maximumSliderWidth: number;

	setMaximumValueAccessory(_: NSSliderAccessory)

	maximumValueAccessory: NSSliderAccessory;

	setMinimumSliderWidth(_: number)

	minimumSliderWidth: number;

	setMinimumValueAccessory(_: NSSliderAccessory)

	minimumValueAccessory: NSSliderAccessory;

	setSlider(_: NSSlider)

	slider: NSSlider;

	setTarget(_: any)

	target: any;

	setValueAccessoryWidth(_: number)

	valueAccessoryWidth: number;

	readonly view: NSView;
}

enum NSSliderType {

	Linear = 0,

	Circular = 1
}

globalThis.NSSliderType = NSSliderType;

declare var NSSortDescriptorsBinding: string;

declare class NSSound extends NSObject implements NSCopying, NSPasteboardReading, NSPasteboardWriting, NSSecureCoding {

	static canInitWithPasteboard(with_: NSPasteboard): boolean;

	static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardReadingOptions;

	static soundNamed(named: string): NSSound;

	setCurrentTime(_: number)

	currentTime: number;

	setDelegate(_: NSSoundDelegate)

	delegate: NSSoundDelegate;

	readonly duration: number;

	setLoops(_: boolean)

	loops: boolean;

	readonly name: string;

	setPlaybackDeviceIdentifier(_: string)

	playbackDeviceIdentifier: string;

	readonly isPlaying: boolean;

	setVolume(_: number)

	volume: number;

	static soundUnfilteredTypes(): NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(contentsOfFile: string, byReference: boolean);

	static create(contentsOfURL: NSURL, byReference: boolean);

	static create(data: NSData);

	static create(pasteboard: NSPasteboard);

	static create(pasteboardPropertyList: any, ofType: string); // inherited from NSPasteboardReading

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	pasteboardPropertyListForType(forType: string): any;

	pause(): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	play(): boolean;

	respondsToSelector(_: string): boolean;

	resume(): boolean;

	retainCount(): number;

	self(): this;

	setName(_?: string): boolean;

	stop(): boolean;

	writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	writeToPasteboard(to: NSPasteboard): void;

	writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
}

interface NSSoundDelegate extends NSObjectProtocol {

	soundDidFinishPlaying?(_: NSSound, didFinishPlaying: boolean): void;
}
declare var NSSoundDelegate: {

	prototype: NSSoundDelegate;
};

declare var NSSoundPboardType: string;

declare var NSSourceTextScalingDocumentAttribute: string;

declare var NSSourceTextScalingDocumentOption: string;

enum NSSpeechBoundary {

	ImmediateBoundary = 0,

	WordBoundary = 1,

	SentenceBoundary = 2
}

globalThis.NSSpeechBoundary = NSSpeechBoundary;

declare var NSSpeechCharacterModeProperty: string;

declare var NSSpeechCommandDelimiterProperty: string;

declare var NSSpeechCommandPrefix: string;

declare var NSSpeechCommandSuffix: string;

declare var NSSpeechCurrentVoiceProperty: string;

declare var NSSpeechDictionaryAbbreviations: string;

declare var NSSpeechDictionaryEntryPhonemes: string;

declare var NSSpeechDictionaryEntrySpelling: string;

declare var NSSpeechDictionaryLocaleIdentifier: string;

declare var NSSpeechDictionaryModificationDate: string;

declare var NSSpeechDictionaryPronunciations: string;

declare var NSSpeechErrorCount: string;

declare var NSSpeechErrorNewestCharacterOffset: string;

declare var NSSpeechErrorNewestCode: string;

declare var NSSpeechErrorOldestCharacterOffset: string;

declare var NSSpeechErrorOldestCode: string;

declare var NSSpeechErrorsProperty: string;

declare var NSSpeechInputModeProperty: string;

declare var NSSpeechModeLiteral: string;

declare var NSSpeechModeNormal: string;

declare var NSSpeechModePhoneme: string;

declare var NSSpeechModeText: string;

declare var NSSpeechNumberModeProperty: string;

declare var NSSpeechOutputToFileURLProperty: string;

declare var NSSpeechPhonemeInfoExample: string;

declare var NSSpeechPhonemeInfoHiliteEnd: string;

declare var NSSpeechPhonemeInfoHiliteStart: string;

declare var NSSpeechPhonemeInfoOpcode: string;

declare var NSSpeechPhonemeInfoSymbol: string;

declare var NSSpeechPhonemeSymbolsProperty: string;

declare var NSSpeechPitchBaseProperty: string;

declare var NSSpeechPitchModProperty: string;

declare var NSSpeechRateProperty: string;

declare var NSSpeechRecentSyncProperty: string;

declare class NSSpeechRecognizer extends NSObject {

	setBlocksOtherRecognizers(_: boolean)

	blocksOtherRecognizers: boolean;

	setCommands(_: NSArray<string>)

	commands: NSArray<string>;

	setDelegate(_: NSSpeechRecognizerDelegate)

	delegate: NSSpeechRecognizerDelegate;

	setDisplayedCommandsTitle(_: string)

	displayedCommandsTitle: string;

	setListensInForegroundOnly(_: boolean)

	listensInForegroundOnly: boolean;

	startListening(): void;

	stopListening(): void;
}

interface NSSpeechRecognizerDelegate extends NSObjectProtocol {

	speechRecognizerDidRecognizeCommand?(_: NSSpeechRecognizer, didRecognizeCommand: string): void;
}
declare var NSSpeechRecognizerDelegate: {

	prototype: NSSpeechRecognizerDelegate;
};

declare var NSSpeechResetProperty: string;

declare var NSSpeechStatusNumberOfCharactersLeft: string;

declare var NSSpeechStatusOutputBusy: string;

declare var NSSpeechStatusOutputPaused: string;

declare var NSSpeechStatusPhonemeCode: string;

declare var NSSpeechStatusProperty: string;

declare class NSSpeechSynthesizer extends NSObject {

	static attributesForVoice(forVoice: string): NSDictionary<string, any>;

	setDelegate(_: NSSpeechSynthesizerDelegate)

	delegate: NSSpeechSynthesizerDelegate;

	setRate(_: number)

	rate: number;

	readonly isSpeaking: boolean;

	setUsesFeedbackWindow(_: boolean)

	usesFeedbackWindow: boolean;

	setVolume(_: number)

	volume: number;

	static isAnyApplicationSpeaking(): boolean;

	static availableVoices(): NSArray<string>;

	static defaultVoice(): string;

	static create(voice: string);

	addSpeechDictionary(_: NSDictionary<string, any>): void;

	continueSpeaking(): void;

	objectForPropertyError(error: string): any;

	pauseSpeakingAtBoundary(at: NSSpeechBoundary): void;

	phonemesFromText(from: string): string;

	setObjectForPropertyError(forProperty?: any, error: string): boolean;

	setVoice(_?: string): boolean;

	startSpeakingString(_: string): boolean;

	startSpeakingStringToURL(_: string, to: NSURL): boolean;

	stopSpeaking(): void;

	stopSpeakingAtBoundary(at: NSSpeechBoundary): void;

	voice(): string;
}

interface NSSpeechSynthesizerDelegate extends NSObjectProtocol {

	speechSynthesizerWillSpeakWordOfString?(_: NSSpeechSynthesizer, willSpeakWord: NSRange, of: string): void;

	speechSynthesizerDidEncounterErrorAtIndexOfStringMessage?(_: NSSpeechSynthesizer, didEncounterErrorAt: number, of: string, message: string): void;

	speechSynthesizerDidEncounterSyncMessage?(_: NSSpeechSynthesizer, didEncounterSyncMessage: string): void;

	speechSynthesizerDidFinishSpeaking?(_: NSSpeechSynthesizer, didFinishSpeaking: boolean): void;

	speechSynthesizerWillSpeakPhoneme?(_: NSSpeechSynthesizer, willSpeakPhoneme: number): void;
}
declare var NSSpeechSynthesizerDelegate: {

	prototype: NSSpeechSynthesizerDelegate;
};

declare var NSSpeechSynthesizerInfoIdentifier: string;

declare var NSSpeechSynthesizerInfoProperty: string;

declare var NSSpeechSynthesizerInfoVersion: string;

declare var NSSpeechVolumeProperty: string;

declare class NSSpellChecker extends NSObject {

	static uniqueSpellDocumentTag(): number;

	setAccessoryView(_: NSView)

	accessoryView: NSView;

	setAutomaticallyIdentifiesLanguages(_: boolean)

	automaticallyIdentifiesLanguages: boolean;

	readonly availableLanguages: NSArray<string>;

	readonly spellingPanel: NSPanel;

	readonly substitutionsPanel: NSPanel;

	setSubstitutionsPanelAccessoryViewController(_: NSViewController)

	substitutionsPanelAccessoryViewController: NSViewController;

	readonly userPreferredLanguages: NSArray<string>;

	readonly userReplacementsDictionary: NSDictionary<string, string>;

	static isAutomaticCapitalizationEnabled(): boolean;

	static isAutomaticDashSubstitutionEnabled(): boolean;

	static isAutomaticPeriodSubstitutionEnabled(): boolean;

	static isAutomaticQuoteSubstitutionEnabled(): boolean;

	static isAutomaticSpellingCorrectionEnabled(): boolean;

	static isAutomaticTextCompletionEnabled(): boolean;

	static isAutomaticTextReplacementEnabled(): boolean;

	static sharedSpellChecker(): NSSpellChecker;

	static sharedSpellCheckerExists(): boolean;

	checkGrammarOfStringStartingAtLanguageWrapInSpellDocumentWithTagDetails(of: string, startingAt: number, language?: string, wrap: boolean, inSpellDocumentWithTag: number, details?: NSArray<NSDictionary<string, any>>): NSRange;

	checkSpellingOfStringStartingAt(of: string, startingAt: number): NSRange;

	checkSpellingOfStringStartingAtLanguageWrapInSpellDocumentWithTagWordCount(of: string, startingAt: number, language?: string, wrap: boolean, inSpellDocumentWithTag: number, wordCount?: number): NSRange;

	checkStringRangeTypesOptionsInSpellDocumentWithTagOrthographyWordCount(_: string, range: NSRange, types: number, options?: NSDictionary<string, any>, inSpellDocumentWithTag: number, orthography?: NSOrthography, wordCount?: number): NSArray<NSTextCheckingResult>;

	closeSpellDocumentWithTag(withTag: number): void;

	completionsForPartialWordRangeInStringLanguageInSpellDocumentWithTag(forPartialWordRange: NSRange, in_: string, language?: string, inSpellDocumentWithTag: number): NSArray<string>;

	correctionForWordRangeInStringLanguageInSpellDocumentWithTag(forWordRange: NSRange, in_: string, language: string, inSpellDocumentWithTag: number): string;

	countWordsInStringLanguage(in_: string, language?: string): number;

	deletesAutospaceBetweenStringAndStringLanguage(_: string, andString: string, language?: string): boolean;

	dismissCorrectionIndicatorForView(for_: NSView): void;

	guessesForWordRangeInStringLanguageInSpellDocumentWithTag(forWordRange: NSRange, in_: string, language?: string, inSpellDocumentWithTag: number): NSArray<string>;

	hasLearnedWord(_: string): boolean;

	ignoreWordInSpellDocumentWithTag(_: string, inSpellDocumentWithTag: number): void;

	ignoredWordsInSpellDocumentWithTag(inSpellDocumentWithTag: number): NSArray<string>;

	language(): string;

	languageForWordRangeInStringOrthography(forWordRange: NSRange, in_: string, orthography?: NSOrthography): string;

	learnWord(_: string): void;

	menuForResultStringOptionsAtLocationInView(for_: NSTextCheckingResult, string: string, options?: NSDictionary<string, any>, atLocation: CGPoint, in_: NSView): NSMenu;

	preventsAutocorrectionBeforeStringLanguage(before: string, language?: string): boolean;

	recordResponseToCorrectionForWordLanguageInSpellDocumentWithTag(_: NSCorrectionResponse, toCorrection: string, forWord: string, language?: string, inSpellDocumentWithTag: number): void;

	requestCandidatesForSelectedRangeInStringTypesOptionsInSpellDocumentWithTagCompletionHandler(forSelectedRange: NSRange, in_: string, types: number, options?: NSDictionary<string, any>, inSpellDocumentWithTag: number, completionHandler?: (p1: number, p2: NSArray<NSTextCheckingResult>) => void): number;

	requestCheckingOfStringRangeTypesOptionsInSpellDocumentWithTagCompletionHandler(of: string, range: NSRange, types: number, options?: NSDictionary<string, any>, inSpellDocumentWithTag: number, completionHandler?: (p1: number, p2: NSArray<NSTextCheckingResult>, p3: NSOrthography, p4: number) => void): number;

	setIgnoredWordsInSpellDocumentWithTag(_: NSArray<string>, inSpellDocumentWithTag: number): void;

	setLanguage(_: string): boolean;

	setWordFieldStringValue(_: string): void;

	showCorrectionIndicatorOfTypePrimaryStringAlternativeStringsForStringInRectViewCompletionHandler(of: NSCorrectionIndicatorType, primaryString: string, alternativeStrings: NSArray<string>, forStringIn: CGRect, view: NSView, completionHandler?: (p1: string) => void): void;

	unlearnWord(_: string): void;

	updatePanels(): void;

	updateSpellingPanelWithGrammarStringDetail(withGrammarString: string, detail: NSDictionary<string, any>): void;

	updateSpellingPanelWithMisspelledWord(withMisspelledWord: string): void;

	userQuotesArrayForLanguage(forLanguage: string): NSArray<string>;
}

declare var NSSpellCheckerDidChangeAutomaticCapitalizationNotification: string;

declare var NSSpellCheckerDidChangeAutomaticDashSubstitutionNotification: string;

declare var NSSpellCheckerDidChangeAutomaticPeriodSubstitutionNotification: string;

declare var NSSpellCheckerDidChangeAutomaticQuoteSubstitutionNotification: string;

declare var NSSpellCheckerDidChangeAutomaticSpellingCorrectionNotification: string;

declare var NSSpellCheckerDidChangeAutomaticTextCompletionNotification: string;

declare var NSSpellCheckerDidChangeAutomaticTextReplacementNotification: string;

enum NSSpellingState {

	SpellingFlag = 1,

	GrammarFlag = 2
}

globalThis.NSSpellingState = NSSpellingState;

declare var NSSpellingStateAttributeName: string;

declare class NSSplitView extends NSView {

	readonly arrangedSubviews: NSArray<NSView>;

	setArrangesAllSubviews(_: boolean)

	arrangesAllSubviews: boolean;

	setAutosaveName(_: string)

	autosaveName: string;

	setDelegate(_: NSSplitViewDelegate)

	delegate: NSSplitViewDelegate;

	readonly dividerColor: NSColor;

	setDividerStyle(_: NSSplitViewDividerStyle)

	dividerStyle: NSSplitViewDividerStyle;

	readonly dividerThickness: number;

	setVertical(_: boolean)

	isVertical: boolean;

	addArrangedSubview(_: NSView): void;

	adjustSubviews(): void;

	drawDividerInRect(in_: CGRect): void;

	holdingPriorityForSubviewAtIndex(at: number): number;

	insertArrangedSubviewAtIndex(_: NSView, at: number): void;

	isSubviewCollapsed(_: NSView): boolean;

	maxPossiblePositionOfDividerAtIndex(at: number): number;

	minPossiblePositionOfDividerAtIndex(at: number): number;

	removeArrangedSubview(_: NSView): void;

	setHoldingPriorityForSubviewAtIndex(_: number, forSubviewAt: number): void;

	setPositionOfDividerAtIndex(_: number, ofDividerAt: number): void;
}

declare class NSSplitViewController extends NSViewController implements NSSplitViewDelegate, NSUserInterfaceValidations {

	setMinimumThicknessForInlineSidebars(_: number)

	minimumThicknessForInlineSidebars: number;

	setSplitView(_: NSSplitView)

	splitView: NSSplitView;

	setSplitViewItems(_: NSArray<NSSplitViewItem>)

	splitViewItems: NSArray<NSSplitViewItem>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	addSplitViewItem(_: NSSplitViewItem): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	insertSplitViewItemAtIndex(_: NSSplitViewItem, at: number): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeSplitViewItem(_: NSSplitViewItem): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	splitViewAdditionalEffectiveRectOfDividerAtIndex(_: NSSplitView, additionalEffectiveRectOfDividerAt: number): CGRect;

	splitViewCanCollapseSubview(_: NSSplitView, canCollapseSubview: NSView): boolean;

	splitViewConstrainMaxCoordinateOfSubviewAt(_: NSSplitView, constrainMaxCoordinate: number, ofSubviewAt: number): number;

	splitViewConstrainMinCoordinateOfSubviewAt(_: NSSplitView, constrainMinCoordinate: number, ofSubviewAt: number): number;

	splitViewConstrainSplitPositionOfSubviewAt(_: NSSplitView, constrainSplitPosition: number, ofSubviewAt: number): number;

	splitViewEffectiveRectForDrawnRectOfDividerAtIndex(_: NSSplitView, effectiveRect: CGRect, forDrawnRect: CGRect, ofDividerAt: number): CGRect;

	splitViewResizeSubviewsWithOldSize(_: NSSplitView, resizeSubviewsWithOldSize: CGSize): void;

	splitViewShouldAdjustSizeOfSubview(_: NSSplitView, shouldAdjustSizeOfSubview: NSView): boolean;

	splitViewShouldHideDividerAtIndex(_: NSSplitView, shouldHideDividerAt: number): boolean;

	splitViewDidResizeSubviews(_: NSNotification): void;

	splitViewItemForViewController(for_: NSViewController): NSSplitViewItem;

	splitViewWillResizeSubviews(_: NSNotification): void;

	toggleSidebar(_?: any): void;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}

declare var NSSplitViewControllerAutomaticDimension: number;

interface NSSplitViewDelegate extends NSObjectProtocol {

	splitViewShouldHideDividerAtIndex?(_: NSSplitView, shouldHideDividerAt: number): boolean;

	splitViewEffectiveRectForDrawnRectOfDividerAtIndex?(_: NSSplitView, effectiveRect: CGRect, forDrawnRect: CGRect, ofDividerAt: number): CGRect;

	splitViewAdditionalEffectiveRectOfDividerAtIndex?(_: NSSplitView, additionalEffectiveRectOfDividerAt: number): CGRect;

	splitViewCanCollapseSubview?(_: NSSplitView, canCollapseSubview: NSView): boolean;

	splitViewConstrainMaxCoordinateOfSubviewAt?(_: NSSplitView, constrainMaxCoordinate: number, ofSubviewAt: number): number;

	splitViewConstrainMinCoordinateOfSubviewAt?(_: NSSplitView, constrainMinCoordinate: number, ofSubviewAt: number): number;

	splitViewConstrainSplitPositionOfSubviewAt?(_: NSSplitView, constrainSplitPosition: number, ofSubviewAt: number): number;

	splitViewResizeSubviewsWithOldSize?(_: NSSplitView, resizeSubviewsWithOldSize: CGSize): void;

	splitViewShouldAdjustSizeOfSubview?(_: NSSplitView, shouldAdjustSizeOfSubview: NSView): boolean;

	splitViewDidResizeSubviews?(_: NSNotification): void;

	splitViewWillResizeSubviews?(_: NSNotification): void;
}
declare var NSSplitViewDelegate: {

	prototype: NSSplitViewDelegate;
};

declare var NSSplitViewDidResizeSubviewsNotification: string;

enum NSSplitViewDividerStyle {

	Thick = 1,

	Thin = 2,

	PaneSplitter = 3
}

globalThis.NSSplitViewDividerStyle = NSSplitViewDividerStyle;

declare class NSSplitViewItem extends NSObject implements NSAnimatablePropertyContainer, NSCoding {

	static contentListWithViewController(contentListWithViewController: NSViewController): NSSplitViewItem;

	static defaultAnimationForKey(forKey: string): any;

	static sidebarWithViewController(sidebarWithViewController: NSViewController): NSSplitViewItem;

	static splitViewItemWithViewController(viewController: NSViewController): NSSplitViewItem;

	setAutomaticMaximumThickness(_: number)

	automaticMaximumThickness: number;

	readonly behavior: NSSplitViewItemBehavior;

	setCanCollapse(_: boolean)

	canCollapse: boolean;

	setCollapseBehavior(_: NSSplitViewItemCollapseBehavior)

	collapseBehavior: NSSplitViewItemCollapseBehavior;

	setCollapsed(_: boolean)

	isCollapsed: boolean;

	setHoldingPriority(_: number)

	holdingPriority: number;

	setMaximumThickness(_: number)

	maximumThickness: number;

	setMinimumThickness(_: number)

	minimumThickness: number;

	setPreferredThicknessFraction(_: number)

	preferredThicknessFraction: number;

	setSpringLoaded(_: boolean)

	isSpringLoaded: boolean;

	setViewController(_: NSViewController)

	viewController: NSViewController;

	setAnimations(_: NSDictionary<string, any>)

	animations: NSDictionary<string, any>; // inherited from NSAnimatablePropertyContainer

	static create(coder: NSCoder); // inherited from NSCoding

	animationForKey(forKey: string): any;

	animator(): this;

	encodeWithCoder(_: NSCoder): void;
}

enum NSSplitViewItemBehavior {

	Default = 0,

	Sidebar = 1,

	ContentList = 2
}

globalThis.NSSplitViewItemBehavior = NSSplitViewItemBehavior;

enum NSSplitViewItemCollapseBehavior {

	Default = 0,

	PreferResizingSplitViewWithFixedSiblings = 1,

	PreferResizingSiblingsWithFixedSplitView = 2,

	UseConstraints = 3
}

globalThis.NSSplitViewItemCollapseBehavior = NSSplitViewItemCollapseBehavior;

declare var NSSplitViewItemUnspecifiedDimension: number;

declare var NSSplitViewWillResizeSubviewsNotification: string;

interface NSSpringLoadingDestination extends NSObjectProtocol {

	draggingEnded?(_: NSDraggingInfo): void;

	springLoadingActivatedDraggingInfo(_: boolean, draggingInfo: NSDraggingInfo): void;

	springLoadingEntered?(_: NSDraggingInfo): NSSpringLoadingOptions;

	springLoadingExited?(_: NSDraggingInfo): void;

	springLoadingHighlightChanged(_: NSDraggingInfo): void;

	springLoadingUpdated?(_: NSDraggingInfo): NSSpringLoadingOptions;
}
declare var NSSpringLoadingDestination: {

	prototype: NSSpringLoadingDestination;
};

enum NSSpringLoadingHighlight {

	None = 0,

	Standard = 1,

	Emphasized = 2
}

globalThis.NSSpringLoadingHighlight = NSSpringLoadingHighlight;

enum NSSpringLoadingOptions {

	Disabled = 0,

	Enabled = 1,

	ContinuousActivation = 2,

	NoHover = 8
}

globalThis.NSSpringLoadingOptions = NSSpringLoadingOptions;

declare var NSSquareLineCapStyle: NSLineCapStyle;

declare var NSSquareStatusItemLength: number;

declare class NSStackView extends NSView {

	static stackViewWithViews(views: NSArray<NSView>): NSStackView;

	setAlignment(_: NSLayoutAttribute)

	alignment: NSLayoutAttribute;

	readonly arrangedSubviews: NSArray<NSView>;

	setDelegate(_: NSStackViewDelegate)

	delegate: NSStackViewDelegate;

	readonly detachedViews: NSArray<NSView>;

	setDetachesHiddenViews(_: boolean)

	detachesHiddenViews: boolean;

	setDistribution(_: NSStackViewDistribution)

	distribution: NSStackViewDistribution;

	setEdgeInsets(_: NSEdgeInsets)

	edgeInsets: NSEdgeInsets;

	setOrientation(_: NSUserInterfaceLayoutOrientation)

	orientation: NSUserInterfaceLayoutOrientation;

	setSpacing(_: number)

	spacing: number;

	readonly views: NSArray<NSView>;

	addArrangedSubview(_: NSView): void;

	addViewInGravity(_: NSView, in_: NSStackViewGravity): void;

	clippingResistancePriorityForOrientation(for_: NSLayoutConstraintOrientation): number;

	customSpacingAfterView(after: NSView): number;

	huggingPriorityForOrientation(for_: NSLayoutConstraintOrientation): number;

	insertArrangedSubviewAtIndex(_: NSView, at: number): void;

	insertViewAtIndexInGravity(_: NSView, at: number, in_: NSStackViewGravity): void;

	removeArrangedSubview(_: NSView): void;

	removeView(_: NSView): void;

	setClippingResistancePriorityForOrientation(_: number, for_: NSLayoutConstraintOrientation): void;

	setCustomSpacingAfterView(_: number, after: NSView): void;

	setHuggingPriorityForOrientation(_: number, for_: NSLayoutConstraintOrientation): void;

	setViewsInGravity(_: NSArray<NSView>, in_: NSStackViewGravity): void;

	setVisibilityPriorityForView(_: number, for_: NSView): void;

	viewsInGravity(in_: NSStackViewGravity): NSArray<NSView>;

	visibilityPriorityForView(for_: NSView): number;
}

interface NSStackViewDelegate extends NSObjectProtocol {

	stackViewWillDetachViews?(_: NSStackView, willDetach: NSArray<NSView>): void;

	stackViewDidReattachViews?(_: NSStackView, didReattach: NSArray<NSView>): void;
}
declare var NSStackViewDelegate: {

	prototype: NSStackViewDelegate;
};

enum NSStackViewDistribution {

	GravityAreas = -1,

	Fill = 0,

	FillEqually = 1,

	FillProportionally = 2,

	EqualSpacing = 3,

	EqualCentering = 4
}

globalThis.NSStackViewDistribution = NSStackViewDistribution;

enum NSStackViewGravity {

	Top = 1,

	Leading = 1,

	Center = 2,

	Bottom = 3,

	Trailing = 3
}

globalThis.NSStackViewGravity = NSStackViewGravity;

declare var NSStackViewSpacingUseDefault: number;

declare var NSStackViewVisibilityPriorityDetachOnlyIfNecessary: number;

declare var NSStackViewVisibilityPriorityMustHold: number;

declare var NSStackViewVisibilityPriorityNotVisible: number;

interface NSStandardKeyBindingResponding extends NSObjectProtocol {

	cancelOperation?(_?: any): void;

	capitalizeWord?(_?: any): void;

	centerSelectionInVisibleArea?(_?: any): void;

	changeCaseOfLetter?(_?: any): void;

	complete?(_?: any): void;

	deleteBackward?(_?: any): void;

	deleteBackwardByDecomposingPreviousCharacter?(_?: any): void;

	deleteForward?(_?: any): void;

	deleteToBeginningOfLine?(_?: any): void;

	deleteToBeginningOfParagraph?(_?: any): void;

	deleteToEndOfLine?(_?: any): void;

	deleteToEndOfParagraph?(_?: any): void;

	deleteToMark?(_?: any): void;

	deleteWordBackward?(_?: any): void;

	deleteWordForward?(_?: any): void;

	doCommandBySelector?(by: string): void;

	indent?(_?: any): void;

	insertBacktab?(_?: any): void;

	insertContainerBreak?(_?: any): void;

	insertDoubleQuoteIgnoringSubstitution?(_?: any): void;

	insertLineBreak?(_?: any): void;

	insertNewline?(_?: any): void;

	insertNewlineIgnoringFieldEditor?(_?: any): void;

	insertParagraphSeparator?(_?: any): void;

	insertSingleQuoteIgnoringSubstitution?(_?: any): void;

	insertTab?(_?: any): void;

	insertTabIgnoringFieldEditor?(_?: any): void;

	insertText?(_: any): void;

	lowercaseWord?(_?: any): void;

	makeBaseWritingDirectionLeftToRight?(_?: any): void;

	makeBaseWritingDirectionNatural?(_?: any): void;

	makeBaseWritingDirectionRightToLeft?(_?: any): void;

	makeTextWritingDirectionLeftToRight?(_?: any): void;

	makeTextWritingDirectionNatural?(_?: any): void;

	makeTextWritingDirectionRightToLeft?(_?: any): void;

	moveBackward?(_?: any): void;

	moveBackwardAndModifySelection?(_?: any): void;

	moveDown?(_?: any): void;

	moveDownAndModifySelection?(_?: any): void;

	moveForward?(_?: any): void;

	moveForwardAndModifySelection?(_?: any): void;

	moveLeft?(_?: any): void;

	moveLeftAndModifySelection?(_?: any): void;

	moveParagraphBackwardAndModifySelection?(_?: any): void;

	moveParagraphForwardAndModifySelection?(_?: any): void;

	moveRight?(_?: any): void;

	moveRightAndModifySelection?(_?: any): void;

	moveToBeginningOfDocument?(_?: any): void;

	moveToBeginningOfDocumentAndModifySelection?(_?: any): void;

	moveToBeginningOfLine?(_?: any): void;

	moveToBeginningOfLineAndModifySelection?(_?: any): void;

	moveToBeginningOfParagraph?(_?: any): void;

	moveToBeginningOfParagraphAndModifySelection?(_?: any): void;

	moveToEndOfDocument?(_?: any): void;

	moveToEndOfDocumentAndModifySelection?(_?: any): void;

	moveToEndOfLine?(_?: any): void;

	moveToEndOfLineAndModifySelection?(_?: any): void;

	moveToEndOfParagraph?(_?: any): void;

	moveToEndOfParagraphAndModifySelection?(_?: any): void;

	moveToLeftEndOfLine?(_?: any): void;

	moveToLeftEndOfLineAndModifySelection?(_?: any): void;

	moveToRightEndOfLine?(_?: any): void;

	moveToRightEndOfLineAndModifySelection?(_?: any): void;

	moveUp?(_?: any): void;

	moveUpAndModifySelection?(_?: any): void;

	moveWordBackward?(_?: any): void;

	moveWordBackwardAndModifySelection?(_?: any): void;

	moveWordForward?(_?: any): void;

	moveWordForwardAndModifySelection?(_?: any): void;

	moveWordLeft?(_?: any): void;

	moveWordLeftAndModifySelection?(_?: any): void;

	moveWordRight?(_?: any): void;

	moveWordRightAndModifySelection?(_?: any): void;

	pageDown?(_?: any): void;

	pageDownAndModifySelection?(_?: any): void;

	pageUp?(_?: any): void;

	pageUpAndModifySelection?(_?: any): void;

	quickLookPreviewItems?(_?: any): void;

	scrollLineDown?(_?: any): void;

	scrollLineUp?(_?: any): void;

	scrollPageDown?(_?: any): void;

	scrollPageUp?(_?: any): void;

	scrollToBeginningOfDocument?(_?: any): void;

	scrollToEndOfDocument?(_?: any): void;

	selectAll?(_?: any): void;

	selectLine?(_?: any): void;

	selectParagraph?(_?: any): void;

	selectToMark?(_?: any): void;

	selectWord?(_?: any): void;

	setMark?(_?: any): void;

	swapWithMark?(_?: any): void;

	transpose?(_?: any): void;

	transposeWords?(_?: any): void;

	uppercaseWord?(_?: any): void;

	yank?(_?: any): void;
}
declare var NSStandardKeyBindingResponding: {

	prototype: NSStandardKeyBindingResponding;
};

declare class NSStatusBar extends NSObject {

	readonly thickness: number;

	readonly isVertical: boolean;

	static systemStatusBar(): NSStatusBar;

	removeStatusItem(_: NSStatusItem): void;

	statusItemWithLength(withLength: number): NSStatusItem;
}

declare class NSStatusBarButton extends NSButton {

	static buttonWithImageTargetAction(image: NSImage, target?: any, action?: string): NSStatusBarButton; // inherited from NSButton

	static buttonWithTitleImageTargetAction(title: string, image: NSImage, target?: any, action?: string): NSStatusBarButton; // inherited from NSButton

	static buttonWithTitleTargetAction(title: string, target?: any, action?: string): NSStatusBarButton; // inherited from NSButton

	static checkboxWithTitleTargetAction(checkboxWithTitle: string, target?: any, action?: string): NSStatusBarButton; // inherited from NSButton

	static radioButtonWithTitleTargetAction(radioButtonWithTitle: string, target?: any, action?: string): NSStatusBarButton; // inherited from NSButton

	setAppearsDisabled(_: boolean)

	appearsDisabled: boolean;
}

declare class NSStatusItem extends NSObject {

	setAutosaveName(_: string)

	autosaveName: string;

	setBehavior(_: NSStatusItemBehavior)

	behavior: NSStatusItemBehavior;

	readonly button: NSStatusBarButton;

	setLength(_: number)

	length: number;

	setMenu(_: NSMenu)

	menu: NSMenu;

	readonly statusBar: NSStatusBar;

	setVisible(_: boolean)

	isVisible: boolean;
}

enum NSStatusItemBehavior {

	RemovalAllowed = 2,

	TerminationOnRemoval = 4
}

globalThis.NSStatusItemBehavior = NSStatusItemBehavior;

declare var NSStatusWindowLevel: number;

declare class NSStepper extends NSControl implements NSAccessibilityStepper {

	setAutorepeat(_: boolean)

	autorepeat: boolean;

	setIncrement(_: number)

	increment: number;

	setMaxValue(_: number)

	maxValue: number;

	setMinValue(_: number)

	minValue: number;

	setValueWraps(_: boolean)

	valueWraps: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityFrame(): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLabel(): string;

	accessibilityParent(): any;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityValue(): any;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isAccessibilityFocused(): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class NSStepperCell extends NSActionCell {

	setAutorepeat(_: boolean)

	autorepeat: boolean;

	setIncrement(_: number)

	increment: number;

	setMaxValue(_: number)

	maxValue: number;

	setMinValue(_: number)

	minValue: number;

	setValueWraps(_: boolean)

	valueWraps: boolean;
}

declare class NSStepperTouchBarItem extends NSTouchBarItem {

	static stepperTouchBarItemWithIdentifierDrawingHandler(identifier: string, drawingHandler: (p1: CGRect, p2: number) => void): NSStepperTouchBarItem;

	static stepperTouchBarItemWithIdentifierFormatter(identifier: string, formatter: NSFormatter): NSStepperTouchBarItem;

	setAction(_: string)

	action: string;

	setCustomizationLabel(_: string)

	customizationLabel: string;

	setIncrement(_: number)

	increment: number;

	setMaxValue(_: number)

	maxValue: number;

	setMinValue(_: number)

	minValue: number;

	setTarget(_: any)

	target: any;

	setValue(_: number)

	value: number;
}

declare const NSStopFunctionKey: number;

declare class NSStoryboard extends NSObject {

	static storyboardWithNameBundle(name: string, bundle?: NSBundle): NSStoryboard;

	static mainStoryboard(): NSStoryboard;

	instantiateControllerWithIdentifier(withIdentifier: string): any;

	instantiateControllerWithIdentifierCreator(_: string, creator?: (p1: NSCoder) => any): any;

	instantiateInitialController(): any;

	instantiateInitialControllerWithCreator(_?: (p1: NSCoder) => any): any;
}

declare class NSStoryboardSegue extends NSObject {

	static segueWithIdentifierSourceDestinationPerformHandler(identifier: string, source: any, destination: any, performHandler: () => void): NSStoryboardSegue;

	readonly destinationController: any;

	readonly identifier: string;

	readonly sourceController: any;

	static create(identifier: string, source: any, destination: any);

	perform(): void;
}

declare var NSStrikethroughColorAttributeName: string;

declare var NSStrikethroughStyleAttributeName: string;

declare class NSStringDrawingContext extends NSObject {

	readonly actualScaleFactor: number;

	setMinimumScaleFactor(_: number)

	minimumScaleFactor: number;

	readonly totalBounds: CGRect;
}

enum NSStringDrawingOptions {

	UsesLineFragmentOrigin = 1,

	UsesFontLeading = 2,

	UsesDeviceMetrics = 8,

	TruncatesLastVisibleLine = 32,

	DisableScreenFontSubstitution = 4,

	OneShot = 16
}

globalThis.NSStringDrawingOptions = NSStringDrawingOptions;

declare var NSStrokeColorAttributeName: string;

declare var NSStrokeWidthAttributeName: string;

declare var NSSubjectDocumentAttribute: string;

declare var NSSubmenuWindowLevel: number;

declare var NSSuperscriptAttributeName: string;

declare class NSSwitch extends NSControl implements NSAccessibilitySwitch {

	setState(_: number)

	state: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityFrame(): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLabel(): string;

	accessibilityParent(): any;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityValue(): string;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isAccessibilityFocused(): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const NSSysReqFunctionKey: number;

declare var NSSystemColorsDidChangeNotification: string;

declare const NSSystemFunctionKey: number;

enum NSTIFFCompression {

	None = 1,

	CCITTFAX3 = 3,

	CCITTFAX4 = 4,

	LZW = 5,

	JPEG = 6,

	NEXT = 32766,

	PackBits = 32773,

	OldJPEG = 32865
}

globalThis.NSTIFFCompression = NSTIFFCompression;

declare var NSTIFFException: string;

declare const NSTabCharacter: number;

declare var NSTabColumnTerminatorsAttributeName: string;

enum NSTabPosition {

	None = 0,

	Top = 1,

	Left = 2,

	Bottom = 3,

	Right = 4
}

globalThis.NSTabPosition = NSTabPosition;

enum NSTabState {

	SelectedTab = 0,

	BackgroundTab = 1,

	PressedTab = 2
}

globalThis.NSTabState = NSTabState;

declare const NSTabTextMovement: number;

declare class NSTabView extends NSView {

	setAllowsTruncatedLabels(_: boolean)

	allowsTruncatedLabels: boolean;

	readonly contentRect: CGRect;

	setControlSize(_: NSControlSize)

	controlSize: NSControlSize;

	setDelegate(_: NSTabViewDelegate)

	delegate: NSTabViewDelegate;

	setDrawsBackground(_: boolean)

	drawsBackground: boolean;

	setFont(_: NSFont)

	font: NSFont;

	readonly minimumSize: CGSize;

	readonly numberOfTabViewItems: number;

	readonly selectedTabViewItem: NSTabViewItem;

	setTabPosition(_: NSTabPosition)

	tabPosition: NSTabPosition;

	setTabViewBorderType(_: NSTabViewBorderType)

	tabViewBorderType: NSTabViewBorderType;

	setTabViewItems(_: NSArray<NSTabViewItem>)

	tabViewItems: NSArray<NSTabViewItem>;

	setTabViewType(_: NSTabViewType)

	tabViewType: NSTabViewType;

	addTabViewItem(_: NSTabViewItem): void;

	indexOfTabViewItem(_: NSTabViewItem): number;

	indexOfTabViewItemWithIdentifier(withIdentifier: any): number;

	insertTabViewItemAtIndex(_: NSTabViewItem, at: number): void;

	removeTabViewItem(_: NSTabViewItem): void;

	selectFirstTabViewItem(_?: any): void;

	selectLastTabViewItem(_?: any): void;

	selectNextTabViewItem(_?: any): void;

	selectPreviousTabViewItem(_?: any): void;

	selectTabViewItem(_?: NSTabViewItem): void;

	selectTabViewItemAtIndex(at: number): void;

	selectTabViewItemWithIdentifier(withIdentifier: any): void;

	tabViewItemAtIndex(at: number): NSTabViewItem;

	tabViewItemAtPoint(at: CGPoint): NSTabViewItem;

	takeSelectedTabViewItemFromSender(_?: any): void;
}

enum NSTabViewBorderType {

	None = 0,

	Line = 1,

	Bezel = 2
}

globalThis.NSTabViewBorderType = NSTabViewBorderType;

declare class NSTabViewController extends NSViewController implements NSTabViewDelegate, NSToolbarDelegate {

	setCanPropagateSelectedChildViewControllerTitle(_: boolean)

	canPropagateSelectedChildViewControllerTitle: boolean;

	setSelectedTabViewItemIndex(_: number)

	selectedTabViewItemIndex: number;

	setTabStyle(_: NSTabViewControllerTabStyle)

	tabStyle: NSTabViewControllerTabStyle;

	setTabView(_: NSTabView)

	tabView: NSTabView;

	setTabViewItems(_: NSArray<NSTabViewItem>)

	tabViewItems: NSArray<NSTabViewItem>;

	setTransitionOptions(_: NSViewControllerTransitionOptions)

	transitionOptions: NSViewControllerTransitionOptions;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	addTabViewItem(_: NSTabViewItem): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	insertTabViewItemAtIndex(_: NSTabViewItem, at: number): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeTabViewItem(_: NSTabViewItem): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	tabViewDidSelectTabViewItem(_: NSTabView, didSelect?: NSTabViewItem): void;

	tabViewShouldSelectTabViewItem(_: NSTabView, shouldSelect?: NSTabViewItem): boolean;

	tabViewWillSelectTabViewItem(_: NSTabView, willSelect?: NSTabViewItem): void;

	tabViewDidChangeNumberOfTabViewItems(_: NSTabView): void;

	tabViewItemForViewController(for_: NSViewController): NSTabViewItem;

	toolbarItemForItemIdentifierWillBeInsertedIntoToolbar(_: NSToolbar, itemForItemIdentifier: string, willBeInsertedIntoToolbar: boolean): NSToolbarItem;

	toolbarAllowedItemIdentifiers(_: NSToolbar): NSArray<string>;

	toolbarDefaultItemIdentifiers(_: NSToolbar): NSArray<string>;

	toolbarDidRemoveItem(_: NSNotification): void;

	toolbarSelectableItemIdentifiers(_: NSToolbar): NSArray<string>;

	toolbarWillAddItem(_: NSNotification): void;
}

enum NSTabViewControllerTabStyle {

	SegmentedControlOnTop = 0,

	SegmentedControlOnBottom = 1,

	Toolbar = 2,

	Unspecified = -1
}

globalThis.NSTabViewControllerTabStyle = NSTabViewControllerTabStyle;

interface NSTabViewDelegate extends NSObjectProtocol {

	tabViewShouldSelectTabViewItem?(_: NSTabView, shouldSelect?: NSTabViewItem): boolean;

	tabViewWillSelectTabViewItem?(_: NSTabView, willSelect?: NSTabViewItem): void;

	tabViewDidSelectTabViewItem?(_: NSTabView, didSelect?: NSTabViewItem): void;

	tabViewDidChangeNumberOfTabViewItems?(_: NSTabView): void;
}
declare var NSTabViewDelegate: {

	prototype: NSTabViewDelegate;
};

declare class NSTabViewItem extends NSObject implements NSCoding {

	static tabViewItemWithViewController(viewController: NSViewController): NSTabViewItem;

	setColor(_: NSColor)

	color: NSColor;

	setIdentifier(_: any)

	identifier: any;

	setImage(_: NSImage)

	image: NSImage;

	setInitialFirstResponder(_: NSView)

	initialFirstResponder: NSView;

	setLabel(_: string)

	label: string;

	readonly tabState: NSTabState;

	readonly tabView: NSTabView;

	setToolTip(_: string)

	toolTip: string;

	setView(_: NSView)

	view: NSView;

	setViewController(_: NSViewController)

	viewController: NSViewController;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(identifier: any);

	drawLabelInRect(_: boolean, in_: CGRect): void;

	encodeWithCoder(_: NSCoder): void;

	sizeOfLabel(_: boolean): CGSize;
}

enum NSTabViewType {

	TopTabsBezelBorder = 0,

	LeftTabsBezelBorder = 1,

	BottomTabsBezelBorder = 2,

	RightTabsBezelBorder = 3,

	NoTabsBezelBorder = 4,

	NoTabsLineBorder = 5,

	NoTabsNoBorder = 6
}

globalThis.NSTabViewType = NSTabViewType;

declare class NSTableCellView extends NSView {

	setBackgroundStyle(_: NSBackgroundStyle)

	backgroundStyle: NSBackgroundStyle;

	readonly draggingImageComponents: NSArray<NSDraggingImageComponent>;

	setImageView(_: NSImageView)

	imageView: NSImageView;

	setObjectValue(_: any)

	objectValue: any;

	setRowSizeStyle(_: NSTableViewRowSizeStyle)

	rowSizeStyle: NSTableViewRowSizeStyle;

	setTextField(_: NSTextField)

	textField: NSTextField;
}

declare class NSTableColumn extends NSObject implements NSCoding, NSUserInterfaceItemIdentification {

	setDataCell(_: any)

	dataCell: any;

	setEditable(_: boolean)

	isEditable: boolean;

	setHeaderCell(_: NSTableHeaderCell)

	headerCell: NSTableHeaderCell;

	setHeaderToolTip(_: string)

	headerToolTip: string;

	setHidden(_: boolean)

	isHidden: boolean;

	setMaxWidth(_: number)

	maxWidth: number;

	setMinWidth(_: number)

	minWidth: number;

	setResizingMask(_: NSTableColumnResizingOptions)

	resizingMask: NSTableColumnResizingOptions;

	setSortDescriptorPrototype(_: NSSortDescriptor)

	sortDescriptorPrototype: NSSortDescriptor;

	setTableView(_: NSTableView)

	tableView: NSTableView;

	setTitle(_: string)

	title: string;

	setWidth(_: number)

	width: number;

	setIdentifier(_: string)

	identifier: string; // inherited from NSUserInterfaceItemIdentification

	static create(coder: NSCoder); // inherited from NSCoding

	static create(identifier: string);

	dataCellForRow(forRow: number): any;

	encodeWithCoder(_: NSCoder): void;

	sizeToFit(): void;
}

enum NSTableColumnResizingOptions {

	NoResizing = 0,

	AutoresizingMask = 1,

	UserResizingMask = 2
}

globalThis.NSTableColumnResizingOptions = NSTableColumnResizingOptions;

declare class NSTableHeaderCell extends NSTextFieldCell {

	drawSortIndicatorWithFrameInViewAscendingPriority(withFrame: CGRect, in_: NSView, ascending: boolean, priority: number): void;

	sortIndicatorRectForBounds(forBounds: CGRect): CGRect;
}

declare class NSTableHeaderView extends NSView implements NSViewToolTipOwner {

	readonly draggedColumn: number;

	readonly draggedDistance: number;

	readonly resizedColumn: number;

	setTableView(_: NSTableView)

	tableView: NSTableView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	columnAtPoint(at: CGPoint): number;

	conformsToProtocol(_: any /* Protocol */): boolean;

	headerRectOfColumn(ofColumn: number): CGRect;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	viewStringForToolTipPointUserData(_: NSView, stringForToolTip: number, point: CGPoint, userData?: any): string;
}

enum NSTableRowActionEdge {

	Leading = 0,

	Trailing = 1
}

globalThis.NSTableRowActionEdge = NSTableRowActionEdge;

declare class NSTableRowView extends NSView implements NSAccessibilityRow {

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setDraggingDestinationFeedbackStyle(_: NSTableViewDraggingDestinationFeedbackStyle)

	draggingDestinationFeedbackStyle: NSTableViewDraggingDestinationFeedbackStyle;

	setEmphasized(_: boolean)

	isEmphasized: boolean;

	setFloating(_: boolean)

	isFloating: boolean;

	setGroupRowStyle(_: boolean)

	isGroupRowStyle: boolean;

	setIndentationForDropOperation(_: number)

	indentationForDropOperation: number;

	readonly interiorBackgroundStyle: NSBackgroundStyle;

	setNextRowSelected(_: boolean)

	isNextRowSelected: boolean;

	readonly numberOfColumns: number;

	setPreviousRowSelected(_: boolean)

	isPreviousRowSelected: boolean;

	setSelected(_: boolean)

	isSelected: boolean;

	setSelectionHighlightStyle(_: NSTableViewSelectionHighlightStyle)

	selectionHighlightStyle: NSTableViewSelectionHighlightStyle;

	setTargetForDropOperation(_: boolean)

	isTargetForDropOperation: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityDisclosureLevel(): number;

	accessibilityFrame(): CGRect;

	accessibilityIdentifier(): string;

	accessibilityIndex(): number;

	accessibilityParent(): any;

	conformsToProtocol(_: any /* Protocol */): boolean;

	drawBackgroundInRect(in_: CGRect): void;

	drawDraggingDestinationFeedbackInRect(in_: CGRect): void;

	drawSelectionInRect(in_: CGRect): void;

	drawSeparatorInRect(in_: CGRect): void;

	isAccessibilityFocused(): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	viewAtColumn(atColumn: number): any;
}

declare class NSTableView extends NSControl implements NSAccessibilityTable, NSDraggingSource, NSTextViewDelegate, NSUserInterfaceValidations {

	setAllowsColumnReordering(_: boolean)

	allowsColumnReordering: boolean;

	setAllowsColumnResizing(_: boolean)

	allowsColumnResizing: boolean;

	setAllowsColumnSelection(_: boolean)

	allowsColumnSelection: boolean;

	setAllowsEmptySelection(_: boolean)

	allowsEmptySelection: boolean;

	setAllowsMultipleSelection(_: boolean)

	allowsMultipleSelection: boolean;

	setAllowsTypeSelect(_: boolean)

	allowsTypeSelect: boolean;

	setAutosaveName(_: string)

	autosaveName: string;

	setAutosaveTableColumns(_: boolean)

	autosaveTableColumns: boolean;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	readonly clickedColumn: number;

	readonly clickedRow: number;

	setColumnAutoresizingStyle(_: NSTableViewColumnAutoresizingStyle)

	columnAutoresizingStyle: NSTableViewColumnAutoresizingStyle;

	setCornerView(_: NSView)

	cornerView: NSView;

	setDataSource(_: NSTableViewDataSource)

	dataSource: NSTableViewDataSource;

	setDelegate(_: NSTableViewDelegate)

	delegate: NSTableViewDelegate;

	setDoubleAction(_: string)

	doubleAction: string;

	setDraggingDestinationFeedbackStyle(_: NSTableViewDraggingDestinationFeedbackStyle)

	draggingDestinationFeedbackStyle: NSTableViewDraggingDestinationFeedbackStyle;

	readonly editedColumn: number;

	readonly editedRow: number;

	readonly effectiveRowSizeStyle: NSTableViewRowSizeStyle;

	setFloatsGroupRows(_: boolean)

	floatsGroupRows: boolean;

	setGridColor(_: NSColor)

	gridColor: NSColor;

	setGridStyleMask(_: NSTableViewGridLineStyle)

	gridStyleMask: NSTableViewGridLineStyle;

	setHeaderView(_: NSTableHeaderView)

	headerView: NSTableHeaderView;

	readonly hiddenRowIndexes: NSIndexSet;

	setHighlightedTableColumn(_: NSTableColumn)

	highlightedTableColumn: NSTableColumn;

	setIntercellSpacing(_: CGSize)

	intercellSpacing: CGSize;

	readonly numberOfColumns: number;

	readonly numberOfRows: number;

	readonly numberOfSelectedColumns: number;

	readonly numberOfSelectedRows: number;

	readonly registeredNibsByIdentifier: NSDictionary<string, NSNib>;

	setRowActionsVisible(_: boolean)

	rowActionsVisible: boolean;

	setRowHeight(_: number)

	rowHeight: number;

	setRowSizeStyle(_: NSTableViewRowSizeStyle)

	rowSizeStyle: NSTableViewRowSizeStyle;

	readonly selectedColumn: number;

	readonly selectedColumnIndexes: NSIndexSet;

	readonly selectedRow: number;

	readonly selectedRowIndexes: NSIndexSet;

	setSelectionHighlightStyle(_: NSTableViewSelectionHighlightStyle)

	selectionHighlightStyle: NSTableViewSelectionHighlightStyle;

	setSortDescriptors(_: NSArray<NSSortDescriptor>)

	sortDescriptors: NSArray<NSSortDescriptor>;

	readonly tableColumns: NSArray<NSTableColumn>;

	setUsesAlternatingRowBackgroundColors(_: boolean)

	usesAlternatingRowBackgroundColors: boolean;

	setUsesAutomaticRowHeights(_: boolean)

	usesAutomaticRowHeights: boolean;

	setUsesStaticContents(_: boolean)

	usesStaticContents: boolean;

	setVerticalMotionCanBeginDrag(_: boolean)

	verticalMotionCanBeginDrag: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityColumnHeaderUIElements(): NSArray<any>;

	accessibilityColumns(): NSArray<any>;

	accessibilityFrame(): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLabel(): string;

	accessibilityParent(): any;

	accessibilityRowHeaderUIElements(): NSArray<any>;

	accessibilityRows(): NSArray<NSAccessibilityRow>;

	accessibilitySelectedCells(): NSArray<any>;

	accessibilitySelectedColumns(): NSArray<any>;

	accessibilitySelectedRows(): NSArray<NSAccessibilityRow>;

	accessibilityVisibleCells(): NSArray<any>;

	accessibilityVisibleColumns(): NSArray<any>;

	accessibilityVisibleRows(): NSArray<NSAccessibilityRow>;

	addTableColumn(_: NSTableColumn): void;

	beginUpdates(): void;

	canDragRowsWithIndexesAtPoint(with_: NSIndexSet, at: CGPoint): boolean;

	columnAtPoint(at: CGPoint): number;

	columnForView(for_: NSView): number;

	columnIndexesInRect(in_: CGRect): NSIndexSet;

	columnWithIdentifier(withIdentifier: string): number;

	conformsToProtocol(_: any /* Protocol */): boolean;

	deselectAll(_?: any): void;

	deselectColumn(_: number): void;

	deselectRow(_: number): void;

	didAddRowViewForRow(_: NSTableRowView, forRow: number): void;

	didRemoveRowViewForRow(_: NSTableRowView, forRow: number): void;

	dragImageForRowsWithIndexesTableColumnsEventOffset(with_: NSIndexSet, tableColumns: NSArray<NSTableColumn>, event: NSEvent, offset: CGPoint): NSImage;

	draggingSessionEndedAtPointOperation(_: NSDraggingSession, endedAt: CGPoint, operation: NSDragOperation): void;

	draggingSessionMovedToPoint(_: NSDraggingSession, movedTo: CGPoint): void;

	draggingSessionSourceOperationMaskForDraggingContext(_: NSDraggingSession, sourceOperationMaskFor: NSDraggingContext): NSDragOperation;

	draggingSessionWillBeginAtPoint(_: NSDraggingSession, willBeginAt: CGPoint): void;

	drawBackgroundInClipRect(inClipRect: CGRect): void;

	drawGridInClipRect(inClipRect: CGRect): void;

	drawRowClipRect(_: number, clipRect: CGRect): void;

	editColumnRowWithEventSelect(_: number, row: number, with_?: NSEvent, select: boolean): void;

	endUpdates(): void;

	enumerateAvailableRowViewsUsingBlock(_: (p1: NSTableRowView, p2: number) => void): void;

	frameOfCellAtColumnRow(atColumn: number, row: number): CGRect;

	hideRowsAtIndexesWithAnimation(at: NSIndexSet, withAnimation: NSTableViewAnimationOptions): void;

	highlightSelectionInClipRect(inClipRect: CGRect): void;

	ignoreModifierKeysForDraggingSession(for_: NSDraggingSession): boolean;

	indicatorImageInTableColumn(in_: NSTableColumn): NSImage;

	insertRowsAtIndexesWithAnimation(at: NSIndexSet, withAnimation: NSTableViewAnimationOptions): void;

	isAccessibilityFocused(): boolean;

	isColumnSelected(_: number): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	isRowSelected(_: number): boolean;

	makeViewWithIdentifierOwner(withIdentifier: string, owner?: any): NSView;

	moveColumnToColumn(_: number, toColumn: number): void;

	moveRowAtIndexToIndex(at: number, to: number): void;

	noteHeightOfRowsWithIndexesChanged(withIndexesChanged: NSIndexSet): void;

	noteNumberOfRowsChanged(): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	rectOfColumn(ofColumn: number): CGRect;

	rectOfRow(ofRow: number): CGRect;

	registerNibForIdentifier(_?: NSNib, forIdentifier: string): void;

	reloadData(): void;

	reloadDataForRowIndexesColumnIndexes(forRowIndexes: NSIndexSet, columnIndexes: NSIndexSet): void;

	removeRowsAtIndexesWithAnimation(at: NSIndexSet, withAnimation: NSTableViewAnimationOptions): void;

	removeTableColumn(_: NSTableColumn): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	rowAtPoint(at: CGPoint): number;

	rowForView(for_: NSView): number;

	rowViewAtRowMakeIfNecessary(atRow: number, makeIfNecessary: boolean): NSTableRowView;

	rowsInRect(in_: CGRect): NSRange;

	scrollColumnToVisible(_: number): void;

	scrollRowToVisible(_: number): void;

	selectColumnIndexesByExtendingSelection(_: NSIndexSet, byExtendingSelection: boolean): void;

	selectRowIndexesByExtendingSelection(_: NSIndexSet, byExtendingSelection: boolean): void;

	self(): this;

	setAccessibilitySelectedRows(_: NSArray<NSAccessibilityRow>): void;

	setDraggingSourceOperationMaskForLocal(_: NSDragOperation, forLocal: boolean): void;

	setDropRowDropOperation(_: number, dropOperation: NSTableViewDropOperation): void;

	setIndicatorImageInTableColumn(_?: NSImage, in_: NSTableColumn): void;

	sizeLastColumnToFit(): void;

	tableColumnWithIdentifier(withIdentifier: string): NSTableColumn;

	textDidBeginEditing(_: NSNotification): void;

	textDidChange(_: NSNotification): void;

	textDidEndEditing(_: NSNotification): void;

	textShouldBeginEditing(_: NSText): boolean;

	textShouldEndEditing(_: NSText): boolean;

	textViewURLForContentsOfTextAttachmentAtIndex(_: NSTextView, urlForContentsOf: NSTextAttachment, at: number): NSURL;

	textViewCandidatesForSelectedRange(_: NSTextView, candidates: NSArray<NSTextCheckingResult>, forSelectedRange: NSRange): NSArray<NSTextCheckingResult>;

	textViewCandidatesForSelectedRange(_: NSTextView, candidatesForSelectedRange: NSRange): NSArray<any>;

	textViewClickedOnCellInRectAtIndex(_: NSTextView, clickedOn: NSTextAttachmentCellProtocol, in_: CGRect, at: number): void;

	textViewClickedOnLinkAtIndex(_: NSTextView, clickedOnLink: any, at: number): boolean;

	textViewCompletionsForPartialWordRangeIndexOfSelectedItem(_: NSTextView, completions: NSArray<string>, forPartialWordRange: NSRange, indexOfSelectedItem?: number): NSArray<string>;

	textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount(_: NSTextView, didCheckTextIn: NSRange, types: number, options: NSDictionary<string, any>, results: NSArray<NSTextCheckingResult>, orthography: NSOrthography, wordCount: number): NSArray<NSTextCheckingResult>;

	textViewDoCommandBySelector(_: NSTextView, doCommandBy: string): boolean;

	textViewDoubleClickedOnCellInRectAtIndex(_: NSTextView, doubleClickedOn: NSTextAttachmentCellProtocol, in_: CGRect, at: number): void;

	textViewDraggedCellInRectEventAtIndex(_: NSTextView, draggedCell: NSTextAttachmentCellProtocol, in_: CGRect, event: NSEvent, at: number): void;

	textViewMenuForEventAtIndex(_: NSTextView, menu: NSMenu, for_: NSEvent, at: number): NSMenu;

	textViewShouldChangeTextInRangeReplacementString(_: NSTextView, shouldChangeTextIn: NSRange, replacementString?: string): boolean;

	textViewShouldChangeTextInRangesReplacementStrings(_: NSTextView, shouldChangeTextInRanges: NSArray<NSValue>, replacementStrings?: NSArray<string>): boolean;

	textViewShouldChangeTypingAttributesToAttributes(_: NSTextView, shouldChangeTypingAttributes: NSDictionary<string, any>, toAttributes: NSDictionary<string, any>): NSDictionary<string, any>;

	textViewShouldSelectCandidateAtIndex(_: NSTextView, shouldSelectCandidateAt: number): boolean;

	textViewShouldSetSpellingStateRange(_: NSTextView, shouldSetSpellingState: number, range: NSRange): number;

	textViewShouldUpdateTouchBarItemIdentifiers(_: NSTextView, shouldUpdateTouchBarItemIdentifiers: NSArray<string>): NSArray<string>;

	textViewWillChangeSelectionFromCharacterRangeToCharacterRange(_: NSTextView, willChangeSelectionFromCharacterRange: NSRange, toCharacterRange: NSRange): NSRange;

	textViewWillChangeSelectionFromCharacterRangesToCharacterRanges(_: NSTextView, willChangeSelectionFromCharacterRanges: NSArray<NSValue>, toCharacterRanges: NSArray<NSValue>): NSArray<NSValue>;

	textViewWillCheckTextInRangeOptionsTypes(_: NSTextView, willCheckTextIn: NSRange, options: NSDictionary<string, any>, types: number): NSDictionary<string, any>;

	textViewWillDisplayToolTipForCharacterAtIndex(_: NSTextView, willDisplayToolTip: string, forCharacterAt: number): string;

	textViewWillShowSharingServicePickerForItems(_: NSTextView, willShow: NSSharingServicePicker, forItems: NSArray<any>): NSSharingServicePicker;

	textViewWritablePasteboardTypesForCellAtIndex(_: NSTextView, writablePasteboardTypesFor: NSTextAttachmentCellProtocol, at: number): NSArray<string>;

	textViewWriteCellAtIndexToPasteboardType(_: NSTextView, write: NSTextAttachmentCellProtocol, at: number, to: NSPasteboard, type: string): boolean;

	textViewDidChangeSelection(_: NSNotification): void;

	textViewDidChangeTypingAttributes(_: NSNotification): void;

	tile(): void;

	undoManagerForTextView(for_: NSTextView): NSUndoManager;

	unhideRowsAtIndexesWithAnimation(at: NSIndexSet, withAnimation: NSTableViewAnimationOptions): void;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;

	viewAtColumnRowMakeIfNecessary(atColumn: number, row: number, makeIfNecessary: boolean): NSView;
}

enum NSTableViewAnimationOptions {

	EffectNone = 0,

	EffectFade = 1,

	EffectGap = 2,

	SlideUp = 16,

	SlideDown = 32,

	SlideLeft = 48,

	SlideRight = 64
}

globalThis.NSTableViewAnimationOptions = NSTableViewAnimationOptions;

enum NSTableViewColumnAutoresizingStyle {

	NoColumnAutoresizing = 0,

	UniformColumnAutoresizingStyle = 1,

	SequentialColumnAutoresizingStyle = 2,

	ReverseSequentialColumnAutoresizingStyle = 3,

	LastColumnOnlyAutoresizingStyle = 4,

	FirstColumnOnlyAutoresizingStyle = 5
}

globalThis.NSTableViewColumnAutoresizingStyle = NSTableViewColumnAutoresizingStyle;

declare var NSTableViewColumnDidMoveNotification: string;

declare var NSTableViewColumnDidResizeNotification: string;

interface NSTableViewDataSource extends NSObjectProtocol {

	numberOfRowsInTableView?(in_: NSTableView): number;

	tableViewObjectValueForTableColumnRow?(_: NSTableView, objectValueFor?: NSTableColumn, row: number): any;

	tableViewSetObjectValueForTableColumnRow?(_: NSTableView, setObjectValue?: any, for_?: NSTableColumn, row: number): void;

	tableViewDraggingSessionWillBeginAtPointForRowIndexes?(_: NSTableView, draggingSession: NSDraggingSession, willBeginAt: CGPoint, forRowIndexes: NSIndexSet): void;

	tableViewDraggingSessionEndedAtPointOperation?(_: NSTableView, draggingSession: NSDraggingSession, endedAt: CGPoint, operation: NSDragOperation): void;

	tableViewWriteRowsWithIndexesToPasteboard?(_: NSTableView, writeRowsWith: NSIndexSet, to: NSPasteboard): boolean;

	tableViewAcceptDropRowDropOperation?(_: NSTableView, acceptDrop: NSDraggingInfo, row: number, dropOperation: NSTableViewDropOperation): boolean;

	tableViewPasteboardWriterForRow?(_: NSTableView, pasteboardWriterForRow: number): NSPasteboardWriting;

	tableViewSortDescriptorsDidChange?(_: NSTableView, sortDescriptorsDidChange: NSArray<NSSortDescriptor>): void;

	tableViewUpdateDraggingItemsForDrag?(_: NSTableView, updateDraggingItemsForDrag: NSDraggingInfo): void;

	tableViewValidateDropProposedRowProposedDropOperation?(_: NSTableView, validateDrop: NSDraggingInfo, proposedRow: number, proposedDropOperation: NSTableViewDropOperation): NSDragOperation;
}
declare var NSTableViewDataSource: {

	prototype: NSTableViewDataSource;
};

interface NSTableViewDelegate extends NSControlTextEditingDelegate {

	selectionShouldChangeInTableView?(in_: NSTableView): boolean;

	tableViewViewForTableColumnRow?(_: NSTableView, viewFor?: NSTableColumn, row: number): NSView;

	tableViewDidAddRowViewForRow?(_: NSTableView, didAdd: NSTableRowView, forRow: number): void;

	tableViewDidRemoveRowViewForRow?(_: NSTableView, didRemove: NSTableRowView, forRow: number): void;

	tableViewWillDisplayCellForTableColumnRow?(_: NSTableView, willDisplayCell: any, for_?: NSTableColumn, row: number): void;

	tableViewShouldEditTableColumnRow?(_: NSTableView, shouldEdit?: NSTableColumn, row: number): boolean;

	tableViewToolTipForCellRectTableColumnRowMouseLocation?(_: NSTableView, toolTipFor: NSCell, rect: CGRect, tableColumn?: NSTableColumn, row: number, mouseLocation: CGPoint): string;

	tableViewShouldShowCellExpansionForTableColumnRow?(_: NSTableView, shouldShowCellExpansionFor?: NSTableColumn, row: number): boolean;

	tableViewShouldTrackCellForTableColumnRow?(_: NSTableView, shouldTrackCell: NSCell, for_?: NSTableColumn, row: number): boolean;

	tableViewDataCellForTableColumnRow?(_: NSTableView, dataCellFor?: NSTableColumn, row: number): NSCell;

	tableViewShouldSelectTableColumn?(_: NSTableView, shouldSelect?: NSTableColumn): boolean;

	tableViewMouseDownInHeaderOfTableColumn?(_: NSTableView, mouseDownInHeaderOf: NSTableColumn): void;

	tableViewDidClickTableColumn?(_: NSTableView, didClick: NSTableColumn): void;

	tableViewDidDragTableColumn?(_: NSTableView, didDrag: NSTableColumn): void;

	tableViewTypeSelectStringForTableColumnRow?(_: NSTableView, typeSelectStringFor?: NSTableColumn, row: number): string;

	tableViewNextTypeSelectMatchFromRowToRowForString?(_: NSTableView, nextTypeSelectMatchFromRow: number, toRow: number, for_: string): number;

	tableViewShouldTypeSelectForEventWithCurrentSearchString?(_: NSTableView, shouldTypeSelectFor: NSEvent, withCurrentSearch?: string): boolean;

	tableViewHeightOfRow?(_: NSTableView, heightOfRow: number): number;

	tableViewIsGroupRow?(_: NSTableView, isGroupRow: number): boolean;

	tableViewRowActionsForRowEdge?(_: NSTableView, rowActionsForRow: number, edge: NSTableRowActionEdge): NSArray<NSTableViewRowAction>;

	tableViewRowViewForRow?(_: NSTableView, rowViewForRow: number): NSTableRowView;

	tableViewSelectionIndexesForProposedSelection?(_: NSTableView, selectionIndexesForProposedSelection: NSIndexSet): NSIndexSet;

	tableViewShouldReorderColumnToColumn?(_: NSTableView, shouldReorderColumn: number, toColumn: number): boolean;

	tableViewShouldSelectRow?(_: NSTableView, shouldSelectRow: number): boolean;

	tableViewSizeToFitWidthOfColumn?(_: NSTableView, sizeToFitWidthOfColumn: number): number;

	tableViewColumnDidMove?(_: NSNotification): void;

	tableViewColumnDidResize?(_: NSNotification): void;

	tableViewSelectionDidChange?(_: NSNotification): void;

	tableViewSelectionIsChanging?(_: NSNotification): void;
}
declare var NSTableViewDelegate: {

	prototype: NSTableViewDelegate;
};

enum NSTableViewDraggingDestinationFeedbackStyle {

	None = -1,

	Regular = 0,

	SourceList = 1,

	Gap = 2
}

globalThis.NSTableViewDraggingDestinationFeedbackStyle = NSTableViewDraggingDestinationFeedbackStyle;

enum NSTableViewDropOperation {

	On = 0,

	Above = 1
}

globalThis.NSTableViewDropOperation = NSTableViewDropOperation;

enum NSTableViewGridLineStyle {

	GridNone = 0,

	SolidVerticalGridLineMask = 1,

	SolidHorizontalGridLineMask = 2,

	DashedHorizontalGridLineMask = 8
}

globalThis.NSTableViewGridLineStyle = NSTableViewGridLineStyle;

declare class NSTableViewRowAction extends NSObject implements NSCopying {

	static rowActionWithStyleTitleHandler(style: NSTableViewRowActionStyle, title: string, handler: (p1: NSTableViewRowAction, p2: number) => void): NSTableViewRowAction;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setImage(_: NSImage)

	image: NSImage;

	readonly style: NSTableViewRowActionStyle;

	setTitle(_: string)

	title: string;

	copyWithZone(_?: any): any;
}

enum NSTableViewRowActionStyle {

	Regular = 0,

	Destructive = 1
}

globalThis.NSTableViewRowActionStyle = NSTableViewRowActionStyle;

enum NSTableViewRowSizeStyle {

	Default = -1,

	Custom = 0,

	Small = 1,

	Medium = 2,

	Large = 3
}

globalThis.NSTableViewRowSizeStyle = NSTableViewRowSizeStyle;

declare var NSTableViewRowViewKey: string;

declare var NSTableViewSelectionDidChangeNotification: string;

enum NSTableViewSelectionHighlightStyle {

	None = -1,

	Regular = 0,

	SourceList = 1
}

globalThis.NSTableViewSelectionHighlightStyle = NSTableViewSelectionHighlightStyle;

declare var NSTableViewSelectionIsChangingNotification: string;

declare var NSTargetBinding: string;

declare var NSTargetTextScalingDocumentOption: string;

declare class NSText extends NSView implements NSChangeSpelling, NSIgnoreMisspelledWords {

	setAlignment(_: NSTextAlignment)

	alignment: NSTextAlignment;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setBaseWritingDirection(_: NSWritingDirection)

	baseWritingDirection: NSWritingDirection;

	setDelegate(_: NSTextDelegate)

	delegate: NSTextDelegate;

	setDrawsBackground(_: boolean)

	drawsBackground: boolean;

	setEditable(_: boolean)

	isEditable: boolean;

	setFieldEditor(_: boolean)

	isFieldEditor: boolean;

	setFont(_: NSFont)

	font: NSFont;

	setHorizontallyResizable(_: boolean)

	isHorizontallyResizable: boolean;

	setImportsGraphics(_: boolean)

	importsGraphics: boolean;

	setMaxSize(_: CGSize)

	maxSize: CGSize;

	setMinSize(_: CGSize)

	minSize: CGSize;

	setRichText(_: boolean)

	isRichText: boolean;

	readonly isRulerVisible: boolean;

	setSelectable(_: boolean)

	isSelectable: boolean;

	setSelectedRange(_: NSRange)

	selectedRange: NSRange;

	setString(_: string)

	string: string;

	setTextColor(_: NSColor)

	textColor: NSColor;

	setUsesFontPanel(_: boolean)

	usesFontPanel: boolean;

	setVerticallyResizable(_: boolean)

	isVerticallyResizable: boolean;

	RTFDFromRange(from: NSRange): NSData;

	RTFFromRange(from: NSRange): NSData;

	alignCenter(_?: any): void;

	alignLeft(_?: any): void;

	alignRight(_?: any): void;

	changeSpelling(_?: any): void;

	checkSpelling(_?: any): void;

	copy(_?: any): void;

	copyFont(_?: any): void;

	copyRuler(_?: any): void;

	cut(_?: any): void;

	delete(_?: any): void;

	ignoreSpelling(_?: any): void;

	paste(_?: any): void;

	pasteFont(_?: any): void;

	pasteRuler(_?: any): void;

	readRTFDFromFile(fromFile: string): boolean;

	replaceCharactersInRangeWithRTF(in_: NSRange, withRTF: NSData): void;

	replaceCharactersInRangeWithRTFD(in_: NSRange, withRTFD: NSData): void;

	replaceCharactersInRangeWithString(in_: NSRange, with_: string): void;

	scrollRangeToVisible(_: NSRange): void;

	setFontRange(_: NSFont, range: NSRange): void;

	setTextColorRange(_?: NSColor, range: NSRange): void;

	showGuessPanel(_?: any): void;

	sizeToFit(): void;

	subscript(_?: any): void;

	superscript(_?: any): void;

	toggleRuler(_?: any): void;

	underline(_?: any): void;

	unscript(_?: any): void;

	writeRTFDToFileAtomically(toFile: string, atomically: boolean): boolean;
}

enum NSTextAlignment {

	Left = 0,

	Right = 1,

	Center = 2,

	Justified = 3,

	Natural = 4
}

globalThis.NSTextAlignment = NSTextAlignment;

declare class NSTextAlternatives extends NSObject implements NSSecureCoding {

	readonly alternativeStrings: NSArray<string>;

	readonly primaryString: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(primaryString: string, alternativeStrings: NSArray<string> | string[]);

	encodeWithCoder(_: NSCoder): void;

	noteSelectedAlternativeString(_: string): void;
}

declare var NSTextAlternativesAttributeName: string;

declare var NSTextAlternativesSelectedAlternativeStringNotification: string;

declare class NSTextAttachment extends NSObject implements NSSecureCoding, NSTextAttachmentContainer {

	setAttachmentCell(_: NSTextAttachmentCellProtocol)

	attachmentCell: NSTextAttachmentCellProtocol;

	setBounds(_: CGRect)

	bounds: CGRect;

	setContents(_: NSData)

	contents: NSData;

	setFileType(_: string)

	fileType: string;

	setFileWrapper(_: NSFileWrapper)

	fileWrapper: NSFileWrapper;

	setImage(_: NSImage)

	image: NSImage;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(data: NSData, ofType: string);

	static create(fileWrapper: NSFileWrapper);

	attachmentBoundsForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(for_?: NSTextContainer, proposedLineFragment: CGRect, glyphPosition: CGPoint, characterIndex: number): CGRect;

	conformsToProtocol(_: any /* Protocol */): boolean;

	encodeWithCoder(_: NSCoder): void;

	imageForBoundsTextContainerCharacterIndex(forBounds: CGRect, textContainer?: NSTextContainer, characterIndex: number): NSImage;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class NSTextAttachmentCell extends NSCell implements NSTextAttachmentCellProtocol {

	setAttachment(_: NSTextAttachment)

	attachment: NSTextAttachment; // inherited from NSTextAttachmentCellProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	cellBaselineOffset(): CGPoint;

	cellFrameForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(_: NSTextContainer, proposedLineFragment: CGRect, glyphPosition: CGPoint, characterIndex: number): CGRect;

	cellSize(): CGSize;

	conformsToProtocol(_: any /* Protocol */): boolean;

	drawWithFrameInView(_: CGRect, inView?: NSView): void;

	drawWithFrameInViewCharacterIndex(_: CGRect, inView?: NSView, characterIndex: number): void;

	drawWithFrameInViewCharacterIndexLayoutManager(_: CGRect, inView?: NSView, characterIndex: number, layoutManager: NSLayoutManager): void;

	highlightWithFrameInView(_: boolean, withFrame: CGRect, inView?: NSView): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	trackMouseInRectOfViewAtCharacterIndexUntilMouseUp(_: NSEvent, inRect: CGRect, ofView?: NSView, atCharacterIndex: number, untilMouseUp: boolean): boolean;

	trackMouseInRectOfViewUntilMouseUp(_: NSEvent, inRect: CGRect, ofView?: NSView, untilMouseUp: boolean): boolean;

	wantsToTrackMouse(): boolean;

	wantsToTrackMouseForEventInRectOfViewAtCharacterIndex(_: NSEvent, inRect: CGRect, ofView?: NSView, atCharacterIndex: number): boolean;
}

interface NSTextAttachmentCellProtocol extends NSObjectProtocol {

	setAttachment(_: NSTextAttachment)

	attachment: NSTextAttachment;

	cellBaselineOffset(): CGPoint;

	cellFrameForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(_: NSTextContainer, proposedLineFragment: CGRect, glyphPosition: CGPoint, characterIndex: number): CGRect;

	cellSize(): CGSize;

	drawWithFrameInView(_: CGRect, inView?: NSView): void;

	drawWithFrameInViewCharacterIndex(_: CGRect, inView?: NSView, characterIndex: number): void;

	drawWithFrameInViewCharacterIndexLayoutManager(_: CGRect, inView?: NSView, characterIndex: number, layoutManager: NSLayoutManager): void;

	highlightWithFrameInView(_: boolean, withFrame: CGRect, inView?: NSView): void;

	trackMouseInRectOfViewAtCharacterIndexUntilMouseUp(_: NSEvent, inRect: CGRect, ofView?: NSView, atCharacterIndex: number, untilMouseUp: boolean): boolean;

	trackMouseInRectOfViewUntilMouseUp(_: NSEvent, inRect: CGRect, ofView?: NSView, untilMouseUp: boolean): boolean;

	wantsToTrackMouse(): boolean;

	wantsToTrackMouseForEventInRectOfViewAtCharacterIndex(_: NSEvent, inRect: CGRect, ofView?: NSView, atCharacterIndex: number): boolean;
}
declare var NSTextAttachmentCellProtocol: {

	prototype: NSTextAttachmentCellProtocol;
};

interface NSTextAttachmentContainer extends NSObjectProtocol {

	attachmentBoundsForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(for_?: NSTextContainer, proposedLineFragment: CGRect, glyphPosition: CGPoint, characterIndex: number): CGRect;

	imageForBoundsTextContainerCharacterIndex(forBounds: CGRect, textContainer?: NSTextContainer, characterIndex: number): NSImage;
}
declare var NSTextAttachmentContainer: {

	prototype: NSTextAttachmentContainer;
};

declare class NSTextBlock extends NSObject implements NSCopying, NSSecureCoding {

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	readonly contentWidth: number;

	readonly contentWidthValueType: NSTextBlockValueType;

	setVerticalAlignment(_: NSTextBlockVerticalAlignment)

	verticalAlignment: NSTextBlockVerticalAlignment;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	borderColorForEdge(for_: NSRectEdge): NSColor;

	boundsRectForContentRectInRectTextContainerCharacterRange(forContentRect: CGRect, in_: CGRect, textContainer: NSTextContainer, characterRange: NSRange): CGRect;

	copyWithZone(_?: any): any;

	drawBackgroundWithFrameInViewCharacterRangeLayoutManager(withFrame: CGRect, in_: NSView, characterRange: NSRange, layoutManager: NSLayoutManager): void;

	encodeWithCoder(_: NSCoder): void;

	rectForLayoutAtPointInRectTextContainerCharacterRange(at: CGPoint, in_: CGRect, textContainer: NSTextContainer, characterRange: NSRange): CGRect;

	setBorderColor(_?: NSColor): void;

	setBorderColorForEdge(_?: NSColor, for_: NSRectEdge): void;

	setContentWidthType(_: number, type: NSTextBlockValueType): void;

	setValueTypeForDimension(_: number, type: NSTextBlockValueType, for_: NSTextBlockDimension): void;

	setWidthTypeForLayer(_: number, type: NSTextBlockValueType, for_: NSTextBlockLayer): void;

	setWidthTypeForLayerEdge(_: number, type: NSTextBlockValueType, for_: NSTextBlockLayer, edge: NSRectEdge): void;

	valueForDimension(for_: NSTextBlockDimension): number;

	valueTypeForDimension(for_: NSTextBlockDimension): NSTextBlockValueType;

	widthForLayerEdge(for_: NSTextBlockLayer, edge: NSRectEdge): number;

	widthValueTypeForLayerEdge(for_: NSTextBlockLayer, edge: NSRectEdge): NSTextBlockValueType;
}

enum NSTextBlockDimension {

	Width = 0,

	MinimumWidth = 1,

	MaximumWidth = 2,

	Height = 4,

	MinimumHeight = 5,

	MaximumHeight = 6
}

globalThis.NSTextBlockDimension = NSTextBlockDimension;

enum NSTextBlockLayer {

	Padding = -1,

	Border = 0,

	Margin = 1
}

globalThis.NSTextBlockLayer = NSTextBlockLayer;

enum NSTextBlockValueType {

	AbsoluteValueType = 0,

	PercentageValueType = 1
}

globalThis.NSTextBlockValueType = NSTextBlockValueType;

enum NSTextBlockVerticalAlignment {

	TopAlignment = 0,

	MiddleAlignment = 1,

	BottomAlignment = 2,

	BaselineAlignment = 3
}

globalThis.NSTextBlockVerticalAlignment = NSTextBlockVerticalAlignment;

interface NSTextCheckingClient extends NSTextInputClient, NSTextInputTraits {

	addAnnotationsRange(_: NSDictionary<string, string>, range: NSRange): void;

	annotatedSubstringForProposedRangeActualRange(forProposedRange: NSRange, actualRange?: NSRange): NSAttributedString;

	candidateListTouchBarItem(): NSCandidateListTouchBarItem<any>;

	removeAnnotationRange(_: string, range: NSRange): void;

	replaceCharactersInRangeWithAnnotatedString(in_: NSRange, withAnnotatedString: NSAttributedString): void;

	selectAndShowRange(_: NSRange): void;

	setAnnotationsRange(_: NSDictionary<string, string>, range: NSRange): void;

	viewForRangeFirstRectActualRange(for_: NSRange, firstRect?: CGRect, actualRange?: NSRange): NSView;
}
declare var NSTextCheckingClient: {

	prototype: NSTextCheckingClient;
};

declare class NSTextCheckingController extends NSObject {

	readonly client: NSTextCheckingClient;

	setSpellCheckerDocumentTag(_: number)

	spellCheckerDocumentTag: number;

	static create(client: NSTextCheckingClient);

	changeSpelling(_?: any): void;

	checkSpelling(_?: any): void;

	checkTextInDocument(_?: any): void;

	checkTextInRangeTypesOptions(in_: NSRange, types: number, options: NSDictionary<string, any>): void;

	checkTextInSelection(_?: any): void;

	considerTextCheckingForRange(for_: NSRange): void;

	didChangeSelectedRange(): void;

	didChangeTextInRange(in_: NSRange): void;

	ignoreSpelling(_?: any): void;

	insertedTextInRange(in_: NSRange): void;

	invalidate(): void;

	menuAtIndexClickedOnSelectionEffectiveRange(at: number, clickedOnSelection: boolean, effectiveRange: NSRange): NSMenu;

	orderFrontSubstitutionsPanel(_?: any): void;

	showGuessPanel(_?: any): void;

	updateCandidates(): void;

	validAnnotations(): NSArray<string>;
}

declare var NSTextCheckingDocumentAuthorKey: string;

declare var NSTextCheckingDocumentTitleKey: string;

declare var NSTextCheckingDocumentURLKey: string;

declare var NSTextCheckingOrthographyKey: string;

declare var NSTextCheckingQuotesKey: string;

declare var NSTextCheckingReferenceDateKey: string;

declare var NSTextCheckingReferenceTimeZoneKey: string;

declare var NSTextCheckingRegularExpressionsKey: string;

declare var NSTextCheckingReplacementsKey: string;

declare var NSTextCheckingSelectedRangeKey: string;

declare var NSTextColorBinding: string;

declare class NSTextContainer extends NSObject implements NSSecureCoding, NSTextLayoutOrientationProvider {

	setContainerSize(_: CGSize)

	containerSize: CGSize;

	setExclusionPaths(_: NSArray<NSBezierPath>)

	exclusionPaths: NSArray<NSBezierPath>;

	setHeightTracksTextView(_: boolean)

	heightTracksTextView: boolean;

	setLayoutManager(_: NSLayoutManager)

	layoutManager: NSLayoutManager;

	setLineBreakMode(_: NSLineBreakMode)

	lineBreakMode: NSLineBreakMode;

	setLineFragmentPadding(_: number)

	lineFragmentPadding: number;

	setMaximumNumberOfLines(_: number)

	maximumNumberOfLines: number;

	readonly isSimpleRectangularTextContainer: boolean;

	setSize(_: CGSize)

	size: CGSize;

	setTextView(_: NSTextView)

	textView: NSTextView;

	setWidthTracksTextView(_: boolean)

	widthTracksTextView: boolean;

	readonly layoutOrientation: NSTextLayoutOrientation; // inherited from NSTextLayoutOrientationProvider

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(containerSize: CGSize);

	static create(size: CGSize);

	encodeWithCoder(_: NSCoder): void;

	lineFragmentRectForProposedRectAtIndexWritingDirectionRemainingRect(forProposedRect: CGRect, at: number, writingDirection: NSWritingDirection, remaining?: CGRect): CGRect;

	lineFragmentRectForProposedRectSweepDirectionMovementDirectionRemainingRect(forProposedRect: CGRect, sweepDirection: NSLineSweepDirection, movementDirection: NSLineMovementDirection, remaining?: CGRect): CGRect;

	replaceLayoutManager(_: NSLayoutManager): void;
}

interface NSTextDelegate extends NSObjectProtocol {

	textDidBeginEditing?(_: NSNotification): void;

	textDidChange?(_: NSNotification): void;

	textDidEndEditing?(_: NSNotification): void;

	textShouldBeginEditing?(_: NSText): boolean;

	textShouldEndEditing?(_: NSText): boolean;
}
declare var NSTextDelegate: {

	prototype: NSTextDelegate;
};

declare var NSTextDidBeginEditingNotification: string;

declare var NSTextDidChangeNotification: string;

declare var NSTextDidEndEditingNotification: string;

declare var NSTextEffectAttributeName: string;

declare var NSTextEffectLetterpressStyle: string;

declare var NSTextEncodingNameDocumentAttribute: string;

declare var NSTextEncodingNameDocumentOption: string;

declare class NSTextField extends NSControl implements NSAccessibilityNavigableStaticText, NSUserInterfaceValidations {

	static labelWithAttributedString(labelWithAttributedString: NSAttributedString): NSTextField;

	static labelWithString(labelWithString: string): NSTextField;

	static textFieldWithString(string: string): NSTextField;

	static wrappingLabelWithString(wrappingLabelWithString: string): NSTextField;

	setAllowsCharacterPickerTouchBarItem(_: boolean)

	allowsCharacterPickerTouchBarItem: boolean;

	setAllowsDefaultTighteningForTruncation(_: boolean)

	allowsDefaultTighteningForTruncation: boolean;

	setAllowsEditingTextAttributes(_: boolean)

	allowsEditingTextAttributes: boolean;

	setAutomaticTextCompletionEnabled(_: boolean)

	isAutomaticTextCompletionEnabled: boolean;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setBezelStyle(_: NSTextFieldBezelStyle)

	bezelStyle: NSTextFieldBezelStyle;

	setBezeled(_: boolean)

	isBezeled: boolean;

	setBordered(_: boolean)

	isBordered: boolean;

	setDelegate(_: NSTextFieldDelegate)

	delegate: NSTextFieldDelegate;

	setDrawsBackground(_: boolean)

	drawsBackground: boolean;

	setEditable(_: boolean)

	isEditable: boolean;

	setImportsGraphics(_: boolean)

	importsGraphics: boolean;

	setMaximumNumberOfLines(_: number)

	maximumNumberOfLines: number;

	setPlaceholderAttributedString(_: NSAttributedString)

	placeholderAttributedString: NSAttributedString;

	setPlaceholderString(_: string)

	placeholderString: string;

	setPreferredMaxLayoutWidth(_: number)

	preferredMaxLayoutWidth: number;

	setSelectable(_: boolean)

	isSelectable: boolean;

	setTextColor(_: NSColor)

	textColor: NSColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	accessibilityAttributedStringForRange(for_: NSRange): NSAttributedString;

	accessibilityFrame(): CGRect;

	accessibilityFrameForRange(for_: NSRange): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLineForIndex(for_: number): number;

	accessibilityParent(): any;

	accessibilityRangeForLine(forLine: number): NSRange;

	accessibilityStringForRange(for_: NSRange): string;

	accessibilityValue(): string;

	accessibilityVisibleCharacterRange(): NSRange;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isAccessibilityFocused(): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	selectText(_?: any): void;

	self(): this;

	textDidBeginEditing(_: NSNotification): void;

	textDidChange(_: NSNotification): void;

	textDidEndEditing(_: NSNotification): void;

	textShouldBeginEditing(_: NSText): boolean;

	textShouldEndEditing(_: NSText): boolean;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}

declare var NSTextFieldAndStepperDatePickerStyle: NSDatePickerStyle;

enum NSTextFieldBezelStyle {

	SquareBezel = 0,

	RoundedBezel = 1
}

globalThis.NSTextFieldBezelStyle = NSTextFieldBezelStyle;

declare class NSTextFieldCell extends NSActionCell {

	setAllowedInputSourceLocales(_: NSArray<string>)

	allowedInputSourceLocales: NSArray<string>;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setBezelStyle(_: NSTextFieldBezelStyle)

	bezelStyle: NSTextFieldBezelStyle;

	setDrawsBackground(_: boolean)

	drawsBackground: boolean;

	setPlaceholderAttributedString(_: NSAttributedString)

	placeholderAttributedString: NSAttributedString;

	setPlaceholderString(_: string)

	placeholderString: string;

	setTextColor(_: NSColor)

	textColor: NSColor;

	setWantsNotificationForMarkedText(_: boolean): void;
}

declare var NSTextFieldDatePickerStyle: NSDatePickerStyle;

interface NSTextFieldDelegate extends NSControlTextEditingDelegate {

	textFieldTextViewShouldSelectCandidateAtIndex?(_: NSTextField, textView: NSTextView, shouldSelectCandidateAt: number): boolean;

	textFieldTextViewCandidatesForSelectedRange?(_: NSTextField, textView: NSTextView, candidates: NSArray<NSTextCheckingResult>, forSelectedRange: NSRange): NSArray<NSTextCheckingResult>;

	textFieldTextViewCandidatesForSelectedRange?(_: NSTextField, textView: NSTextView, candidatesForSelectedRange: NSRange): NSArray<any>;
}
declare var NSTextFieldDelegate: {

	prototype: NSTextFieldDelegate;
};

declare class NSTextFinder extends NSObject implements NSCoding {

	static drawIncrementalMatchHighlightInRect(in_: CGRect): void;

	setClient(_: NSTextFinderClient)

	client: NSTextFinderClient;

	setFindBarContainer(_: NSTextFinderBarContainer)

	findBarContainer: NSTextFinderBarContainer;

	setFindIndicatorNeedsUpdate(_: boolean)

	findIndicatorNeedsUpdate: boolean;

	readonly incrementalMatchRanges: NSArray<NSValue>;

	setIncrementalSearchingEnabled(_: boolean)

	isIncrementalSearchingEnabled: boolean;

	setIncrementalSearchingShouldDimContentView(_: boolean)

	incrementalSearchingShouldDimContentView: boolean;

	static create(coder: NSCoder); // inherited from NSCoding

	cancelFindIndicator(): void;

	encodeWithCoder(_: NSCoder): void;

	noteClientStringWillChange(): void;

	performAction(_: NSTextFinderAction): void;

	validateAction(_: NSTextFinderAction): boolean;
}

enum NSTextFinderAction {

	ShowFindInterface = 1,

	NextMatch = 2,

	PreviousMatch = 3,

	ReplaceAll = 4,

	Replace = 5,

	ReplaceAndFind = 6,

	SetSearchString = 7,

	ReplaceAllInSelection = 8,

	SelectAll = 9,

	SelectAllInSelection = 10,

	HideFindInterface = 11,

	ShowReplaceInterface = 12,

	HideReplaceInterface = 13
}

globalThis.NSTextFinderAction = NSTextFinderAction;

interface NSTextFinderBarContainer extends NSObjectProtocol {

	setFindBarView(_: NSView)

	findBarView: NSView;

	setFindBarVisible(_: boolean)

	isFindBarVisible: boolean;

	contentView: NSView;

	findBarViewDidChangeHeight(): void;
}
declare var NSTextFinderBarContainer: {

	prototype: NSTextFinderBarContainer;
};

declare var NSTextFinderCaseInsensitiveKey: string;

interface NSTextFinderClient extends NSObjectProtocol {

	allowsMultipleSelection?: boolean;

	isEditable?: boolean;

	firstSelectedRange?: NSRange;

	isSelectable?: boolean;

	setSelectedRanges(_: NSArray<NSValue>)

	selectedRanges?: NSArray<NSValue>;

	string?: string;

	visibleCharacterRanges?: NSArray<NSValue>;

	contentViewAtIndexEffectiveCharacterRange?(at: number, effectiveCharacterRange: NSRange): NSView;

	didReplaceCharacters?(): void;

	drawCharactersInRangeForContentView?(in_: NSRange, forContentView: NSView): void;

	rectsForCharacterRange?(forCharacterRange: NSRange): NSArray<NSValue>;

	replaceCharactersInRangeWithString?(in_: NSRange, with_: string): void;

	scrollRangeToVisible?(_: NSRange): void;

	shouldReplaceCharactersInRangesWithStrings?(inRanges: NSArray<NSValue>, with_: NSArray<string>): boolean;

	stringAtIndexEffectiveRangeEndsWithSearchBoundary?(at: number, effectiveRange: NSRange, endsWithSearchBoundary: boolean): string;

	stringLength?(): number;
}
declare var NSTextFinderClient: {

	prototype: NSTextFinderClient;
};

enum NSTextFinderMatchingType {

	Contains = 0,

	StartsWith = 1,

	FullWord = 2,

	EndsWith = 3
}

globalThis.NSTextFinderMatchingType = NSTextFinderMatchingType;

declare var NSTextFinderMatchingTypeKey: string;

interface NSTextInput {
}
declare var NSTextInput: {

	prototype: NSTextInput;
};

interface NSTextInputClient {

	attributedString?(): NSAttributedString;

	attributedSubstringForProposedRangeActualRange(forProposedRange: NSRange, actualRange?: NSRange): NSAttributedString;

	baselineDeltaForCharacterAtIndex?(at: number): number;

	characterIndexForPoint(for_: CGPoint): number;

	doCommandBySelector(by: string): void;

	drawsVerticallyForCharacterAtIndex?(at: number): boolean;

	firstRectForCharacterRangeActualRange(forCharacterRange: NSRange, actualRange?: NSRange): CGRect;

	fractionOfDistanceThroughGlyphForPoint?(for_: CGPoint): number;

	hasMarkedText(): boolean;

	insertTextReplacementRange(_: any, replacementRange: NSRange): void;

	markedRange(): NSRange;

	selectedRange(): NSRange;

	setMarkedTextSelectedRangeReplacementRange(_: any, selectedRange: NSRange, replacementRange: NSRange): void;

	unmarkText(): void;

	validAttributesForMarkedText(): NSArray<string>;

	windowLevel?(): number;
}
declare var NSTextInputClient: {

	prototype: NSTextInputClient;
};

declare class NSTextInputContext extends NSObject {

	static localizedNameForInputSource(forInputSource: string): string;

	setAcceptsGlyphInfo(_: boolean)

	acceptsGlyphInfo: boolean;

	setAllowedInputSourceLocales(_: NSArray<string>)

	allowedInputSourceLocales: NSArray<string>;

	readonly client: NSTextInputClient;

	readonly keyboardInputSources: NSArray<string>;

	setSelectedKeyboardInputSource(_: string)

	selectedKeyboardInputSource: string;

	static currentInputContext(): NSTextInputContext;

	static create(client: NSTextInputClient);

	activate(): void;

	deactivate(): void;

	discardMarkedText(): void;

	handleEvent(_: NSEvent): boolean;

	invalidateCharacterCoordinates(): void;
}

declare var NSTextInputContextKeyboardSelectionDidChangeNotification: string;

enum NSTextInputTraitType {

	Default = 0,

	No = 1,

	Yes = 2
}

globalThis.NSTextInputTraitType = NSTextInputTraitType;

interface NSTextInputTraits {

	setAutocorrectionType(_: NSTextInputTraitType)

	autocorrectionType?: NSTextInputTraitType;

	setDataDetectionType(_: NSTextInputTraitType)

	dataDetectionType?: NSTextInputTraitType;

	setGrammarCheckingType(_: NSTextInputTraitType)

	grammarCheckingType?: NSTextInputTraitType;

	setLinkDetectionType(_: NSTextInputTraitType)

	linkDetectionType?: NSTextInputTraitType;

	setSmartDashesType(_: NSTextInputTraitType)

	smartDashesType?: NSTextInputTraitType;

	setSmartInsertDeleteType(_: NSTextInputTraitType)

	smartInsertDeleteType?: NSTextInputTraitType;

	setSmartQuotesType(_: NSTextInputTraitType)

	smartQuotesType?: NSTextInputTraitType;

	setSpellCheckingType(_: NSTextInputTraitType)

	spellCheckingType?: NSTextInputTraitType;

	setTextCompletionType(_: NSTextInputTraitType)

	textCompletionType?: NSTextInputTraitType;

	setTextReplacementType(_: NSTextInputTraitType)

	textReplacementType?: NSTextInputTraitType;
}
declare var NSTextInputTraits: {

	prototype: NSTextInputTraits;
};

enum NSTextLayoutOrientation {

	Horizontal = 0,

	Vertical = 1
}

globalThis.NSTextLayoutOrientation = NSTextLayoutOrientation;

interface NSTextLayoutOrientationProvider {

	layoutOrientation: NSTextLayoutOrientation;
}
declare var NSTextLayoutOrientationProvider: {

	prototype: NSTextLayoutOrientationProvider;
};

declare var NSTextLayoutSectionOrientation: string;

declare var NSTextLayoutSectionRange: string;

declare var NSTextLayoutSectionsAttribute: string;

declare var NSTextLineTooLongException: string;

declare class NSTextList extends NSObject implements NSCopying, NSSecureCoding {

	readonly listOptions: NSTextListOptions;

	readonly markerFormat: string;

	setStartingItemNumber(_: number)

	startingItemNumber: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(markerFormat: string, options: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	markerForItemNumber(forItemNumber: number): string;
}

declare var NSTextListMarkerBox: string;

declare var NSTextListMarkerCheck: string;

declare var NSTextListMarkerCircle: string;

declare var NSTextListMarkerDecimal: string;

declare var NSTextListMarkerDiamond: string;

declare var NSTextListMarkerDisc: string;

declare var NSTextListMarkerHyphen: string;

declare var NSTextListMarkerLowercaseAlpha: string;

declare var NSTextListMarkerLowercaseHexadecimal: string;

declare var NSTextListMarkerLowercaseLatin: string;

declare var NSTextListMarkerLowercaseRoman: string;

declare var NSTextListMarkerOctal: string;

declare var NSTextListMarkerSquare: string;

declare var NSTextListMarkerUppercaseAlpha: string;

declare var NSTextListMarkerUppercaseHexadecimal: string;

declare var NSTextListMarkerUppercaseLatin: string;

declare var NSTextListMarkerUppercaseRoman: string;

enum NSTextListOptions {

	PrependEnclosingMarker = 1
}

globalThis.NSTextListOptions = NSTextListOptions;

enum NSTextMovement {

	Return = 16,

	Tab = 17,

	Backtab = 18,

	Left = 19,

	Right = 20,

	Up = 21,

	Down = 22,

	Cancel = 23,

	Other = 0
}

globalThis.NSTextMovement = NSTextMovement;

declare var NSTextMovementUserInfoKey: string;

declare var NSTextNoSelectionException: string;

declare var NSTextReadException: string;

declare const NSTextReadInapplicableDocumentTypeError: number;

declare const NSTextReadWriteErrorMaximum: number;

declare const NSTextReadWriteErrorMinimum: number;

declare var NSTextScalingDocumentAttribute: string;

enum NSTextScalingType {

	Standard = 0,

	iOS = 1
}

globalThis.NSTextScalingType = NSTextScalingType;

declare var NSTextSizeMultiplierDocumentOption: string;

declare class NSTextStorage extends NSMutableAttributedString implements NSSecureCoding {

	setAttributeRuns(_: NSArray<NSTextStorage>)

	attributeRuns: NSArray<NSTextStorage>;

	readonly changeInLength: number;

	setCharacters(_: NSArray<NSTextStorage>)

	characters: NSArray<NSTextStorage>;

	setDelegate(_: NSTextStorageDelegate)

	delegate: NSTextStorageDelegate;

	readonly editedMask: NSTextStorageEditActions;

	readonly editedRange: NSRange;

	readonly fixesAttributesLazily: boolean;

	setFont(_: NSFont)

	font: NSFont;

	setForegroundColor(_: NSColor)

	foregroundColor: NSColor;

	readonly layoutManagers: NSArray<NSLayoutManager>;

	setParagraphs(_: NSArray<NSTextStorage>)

	paragraphs: NSArray<NSTextStorage>;

	setWords(_: NSArray<NSTextStorage>)

	words: NSArray<NSTextStorage>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addLayoutManager(_: NSLayoutManager): void;

	editedRangeChangeInLength(_: NSTextStorageEditActions, range: NSRange, changeInLength: number): void;

	encodeWithCoder(_: NSCoder): void;

	ensureAttributesAreFixedInRange(in_: NSRange): void;

	invalidateAttributesInRange(in_: NSRange): void;

	processEditing(): void;

	removeLayoutManager(_: NSLayoutManager): void;
}

interface NSTextStorageDelegate extends NSObjectProtocol {

	textStorageDidProcessEditingRangeChangeInLength?(_: NSTextStorage, didProcessEditing: NSTextStorageEditActions, range: NSRange, changeInLength: number): void;

	textStorageWillProcessEditingRangeChangeInLength?(_: NSTextStorage, willProcessEditing: NSTextStorageEditActions, range: NSRange, changeInLength: number): void;
}
declare var NSTextStorageDelegate: {

	prototype: NSTextStorageDelegate;
};

declare var NSTextStorageDidProcessEditingNotification: string;

enum NSTextStorageEditActions {

	EditedAttributes = 1,

	EditedCharacters = 2
}

globalThis.NSTextStorageEditActions = NSTextStorageEditActions;

declare var NSTextStorageWillProcessEditingNotification: string;

declare class NSTextTab extends NSObject implements NSCoding, NSCopying, NSSecureCoding {

	static columnTerminatorsForLocale(for_?: NSLocale): NSCharacterSet;

	readonly alignment: NSTextAlignment;

	readonly location: number;

	readonly options: NSDictionary<string, any>;

	readonly tabStopType: NSTextTabType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(textAlignment: NSTextAlignment, location: number, options: NSDictionary<string, any>);

	static create(type: NSTextTabType, location: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NSTextTabType {

	LeftTabStopType = 0,

	RightTabStopType = 1,

	CenterTabStopType = 2,

	DecimalTabStopType = 3
}

globalThis.NSTextTabType = NSTextTabType;

declare class NSTextTable extends NSTextBlock {

	setCollapsesBorders(_: boolean)

	collapsesBorders: boolean;

	setHidesEmptyCells(_: boolean)

	hidesEmptyCells: boolean;

	setLayoutAlgorithm(_: NSTextTableLayoutAlgorithm)

	layoutAlgorithm: NSTextTableLayoutAlgorithm;

	setNumberOfColumns(_: number)

	numberOfColumns: number;

	boundsRectForBlockContentRectInRectTextContainerCharacterRange(for_: NSTextTableBlock, contentRect: CGRect, in_: CGRect, textContainer: NSTextContainer, characterRange: NSRange): CGRect;

	drawBackgroundForBlockWithFrameInViewCharacterRangeLayoutManager(for_: NSTextTableBlock, withFrame: CGRect, in_: NSView, characterRange: NSRange, layoutManager: NSLayoutManager): void;

	rectForBlockLayoutAtPointInRectTextContainerCharacterRange(for_: NSTextTableBlock, layoutAt: CGPoint, in_: CGRect, textContainer: NSTextContainer, characterRange: NSRange): CGRect;
}

declare class NSTextTableBlock extends NSTextBlock {

	readonly columnSpan: number;

	readonly rowSpan: number;

	readonly startingColumn: number;

	readonly startingRow: number;

	readonly table: NSTextTable;

	static create(table: NSTextTable, startingRow: number, rowSpan: number, startingColumn: number, columnSpan: number);
}

enum NSTextTableLayoutAlgorithm {

	AutomaticLayoutAlgorithm = 0,

	FixedLayoutAlgorithm = 1
}

globalThis.NSTextTableLayoutAlgorithm = NSTextTableLayoutAlgorithm;

declare class NSTextView extends NSText implements NSAccessibilityNavigableStaticText, NSColorChanging, NSDraggingSource, NSMenuItemValidation, NSStandardKeyBindingResponding, NSTextInput, NSTextInputClient, NSTextLayoutOrientationProvider, NSUserInterfaceValidations, NSCandidateListTouchBarItemDelegate, NSTouchBarDelegate {

	static fieldEditor(): NSTextView;

	static registerForServices(): void;

	static scrollableDocumentContentTextView(): NSScrollView;

	static scrollablePlainDocumentContentTextView(): NSScrollView;

	static scrollableTextView(): NSScrollView;

	readonly acceptableDragTypes: NSArray<string>;

	setAcceptsGlyphInfo(_: boolean)

	acceptsGlyphInfo: boolean;

	setAllowedInputSourceLocales(_: NSArray<string>)

	allowedInputSourceLocales: NSArray<string>;

	setAllowsCharacterPickerTouchBarItem(_: boolean)

	allowsCharacterPickerTouchBarItem: boolean;

	setAllowsDocumentBackgroundColorChange(_: boolean)

	allowsDocumentBackgroundColorChange: boolean;

	setAllowsImageEditing(_: boolean)

	allowsImageEditing: boolean;

	setAllowsUndo(_: boolean)

	allowsUndo: boolean;

	setAutomaticDashSubstitutionEnabled(_: boolean)

	isAutomaticDashSubstitutionEnabled: boolean;

	setAutomaticDataDetectionEnabled(_: boolean)

	isAutomaticDataDetectionEnabled: boolean;

	setAutomaticLinkDetectionEnabled(_: boolean)

	isAutomaticLinkDetectionEnabled: boolean;

	setAutomaticQuoteSubstitutionEnabled(_: boolean)

	isAutomaticQuoteSubstitutionEnabled: boolean;

	setAutomaticSpellingCorrectionEnabled(_: boolean)

	isAutomaticSpellingCorrectionEnabled: boolean;

	setAutomaticTextCompletionEnabled(_: boolean)

	isAutomaticTextCompletionEnabled: boolean;

	setAutomaticTextReplacementEnabled(_: boolean)

	isAutomaticTextReplacementEnabled: boolean;

	readonly isCoalescingUndo: boolean;

	setContinuousSpellCheckingEnabled(_: boolean)

	isContinuousSpellCheckingEnabled: boolean;

	setDefaultParagraphStyle(_: NSParagraphStyle)

	defaultParagraphStyle: NSParagraphStyle;

	setDelegate(_: NSTextViewDelegate)

	delegate: NSTextViewDelegate;

	setDisplaysLinkToolTips(_: boolean)

	displaysLinkToolTips: boolean;

	setEnabledTextCheckingTypes(_: number)

	enabledTextCheckingTypes: number;

	setGrammarCheckingEnabled(_: boolean)

	isGrammarCheckingEnabled: boolean;

	setIncrementalSearchingEnabled(_: boolean)

	isIncrementalSearchingEnabled: boolean;

	setInsertionPointColor(_: NSColor)

	insertionPointColor: NSColor;

	readonly layoutManager: NSLayoutManager;

	setLinkTextAttributes(_: NSDictionary<string, any>)

	linkTextAttributes: NSDictionary<string, any>;

	setMarkedTextAttributes(_: NSDictionary<string, any>)

	markedTextAttributes: NSDictionary<string, any>;

	readonly rangeForUserCharacterAttributeChange: NSRange;

	readonly rangeForUserCompletion: NSRange;

	readonly rangeForUserParagraphAttributeChange: NSRange;

	readonly rangeForUserTextChange: NSRange;

	readonly rangesForUserCharacterAttributeChange: NSArray<NSValue>;

	readonly rangesForUserParagraphAttributeChange: NSArray<NSValue>;

	readonly rangesForUserTextChange: NSArray<NSValue>;

	readonly readablePasteboardTypes: NSArray<string>;

	setRulerVisible(_: boolean)

	isRulerVisible: boolean;

	setSelectedRanges(_: NSArray<NSValue>)

	selectedRanges: NSArray<NSValue>;

	setSelectedTextAttributes(_: NSDictionary<string, any>)

	selectedTextAttributes: NSDictionary<string, any>;

	readonly selectionAffinity: NSSelectionAffinity;

	setSelectionGranularity(_: NSSelectionGranularity)

	selectionGranularity: NSSelectionGranularity;

	readonly shouldDrawInsertionPoint: boolean;

	setSmartInsertDeleteEnabled(_: boolean)

	smartInsertDeleteEnabled: boolean;

	readonly spellCheckerDocumentTag: number;

	setTextContainer(_: NSTextContainer)

	textContainer: NSTextContainer;

	setTextContainerInset(_: CGSize)

	textContainerInset: CGSize;

	readonly textContainerOrigin: CGPoint;

	readonly textStorage: NSTextStorage;

	setTypingAttributes(_: NSDictionary<string, any>)

	typingAttributes: NSDictionary<string, any>;

	setUsesAdaptiveColorMappingForDarkAppearance(_: boolean)

	usesAdaptiveColorMappingForDarkAppearance: boolean;

	setUsesFindBar(_: boolean)

	usesFindBar: boolean;

	setUsesFindPanel(_: boolean)

	usesFindPanel: boolean;

	setUsesInspectorBar(_: boolean)

	usesInspectorBar: boolean;

	setUsesRolloverButtonForSelection(_: boolean)

	usesRolloverButtonForSelection: boolean;

	setUsesRuler(_: boolean)

	usesRuler: boolean;

	readonly writablePasteboardTypes: NSArray<string>;

	static stronglyReferencesTextStorage(): boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly layoutOrientation: NSTextLayoutOrientation; // inherited from NSTextLayoutOrientationProvider

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(frame: CGRect, textContainer: NSTextContainer);

	accessibilityAttributedStringForRange(for_: NSRange): NSAttributedString;

	accessibilityFrame(): CGRect;

	accessibilityFrameForRange(for_: NSRange): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLineForIndex(for_: number): number;

	accessibilityParent(): any;

	accessibilityRangeForLine(forLine: number): NSRange;

	accessibilityStringForRange(for_: NSRange): string;

	accessibilityValue(): string;

	accessibilityVisibleCharacterRange(): NSRange;

	alignJustified(_?: any): void;

	attributedString(): NSAttributedString;

	attributedSubstringForProposedRangeActualRange(forProposedRange: NSRange, actualRange?: NSRange): NSAttributedString;

	baselineDeltaForCharacterAtIndex(at: number): number;

	breakUndoCoalescing(): void;

	cancelOperation(_?: any): void;

	candidateListTouchBarItemWith_BeginSelectingCandidateAt(_: NSCandidateListTouchBarItem<any>, beginSelectingCandidateAt: number): void;

	candidateListTouchBarItemWith_ChangeSelectionFromCandidateAtTo(_: NSCandidateListTouchBarItem<any>, changeSelectionFromCandidateAt: number, to: number): void;

	candidateListTouchBarItemWithChangedCandidateListVisibility(_: NSCandidateListTouchBarItem<any>, changedCandidateListVisibility: boolean): void;

	candidateListTouchBarItemWith_EndSelectingCandidateAt(_: NSCandidateListTouchBarItem<any>, endSelectingCandidateAt: number): void;

	capitalizeWord(_?: any): void;

	centerSelectionInVisibleArea(_?: any): void;

	changeAttributes(_?: any): void;

	changeCaseOfLetter(_?: any): void;

	changeColor(_?: NSColorPanel): void;

	changeDocumentBackgroundColor(_?: any): void;

	changeLayoutOrientation(_?: any): void;

	characterIndexForInsertionAtPoint(at: CGPoint): number;

	characterIndexForPoint(for_: CGPoint): number;

	checkTextInDocument(_?: any): void;

	checkTextInRangeTypesOptions(in_: NSRange, types: number, options: NSDictionary<string, any>): void;

	checkTextInSelection(_?: any): void;

	cleanUpAfterDragOperation(): void;

	clickedOnLinkAtIndex(onLink: any, at: number): void;

	complete(_?: any): void;

	completionsForPartialWordRangeIndexOfSelectedItem(forPartialWordRange: NSRange, indexOfSelectedItem: number): NSArray<string>;

	conformsToProtocol(_: any /* Protocol */): boolean;

	deleteBackward(_?: any): void;

	deleteBackwardByDecomposingPreviousCharacter(_?: any): void;

	deleteForward(_?: any): void;

	deleteToBeginningOfLine(_?: any): void;

	deleteToBeginningOfParagraph(_?: any): void;

	deleteToEndOfLine(_?: any): void;

	deleteToEndOfParagraph(_?: any): void;

	deleteToMark(_?: any): void;

	deleteWordBackward(_?: any): void;

	deleteWordForward(_?: any): void;

	didChangeText(): void;

	doCommandBySelector(by: string): void;

	dragImageForSelectionWithEventOrigin(with_: NSEvent, origin?: CGPoint): NSImage;

	dragOperationForDraggingInfoType(for_: NSDraggingInfo, type: string): NSDragOperation;

	dragSelectionWithEventOffsetSlideBack(with_: NSEvent, offset: CGSize, slideBack: boolean): boolean;

	draggingSessionEndedAtPointOperation(_: NSDraggingSession, endedAt: CGPoint, operation: NSDragOperation): void;

	draggingSessionMovedToPoint(_: NSDraggingSession, movedTo: CGPoint): void;

	draggingSessionSourceOperationMaskForDraggingContext(_: NSDraggingSession, sourceOperationMaskFor: NSDraggingContext): NSDragOperation;

	draggingSessionWillBeginAtPoint(_: NSDraggingSession, willBeginAt: CGPoint): void;

	drawInsertionPointInRectColorTurnedOn(in_: CGRect, color: NSColor, turnedOn: boolean): void;

	drawViewBackgroundInRect(in_: CGRect): void;

	drawsVerticallyForCharacterAtIndex(at: number): boolean;

	firstRectForCharacterRangeActualRange(forCharacterRange: NSRange, actualRange?: NSRange): CGRect;

	fractionOfDistanceThroughGlyphForPoint(for_: CGPoint): number;

	handleTextCheckingResultsForRangeTypesOptionsOrthographyWordCount(_: NSArray<NSTextCheckingResult>, forRange: NSRange, types: number, options: NSDictionary<string, any>, orthography: NSOrthography, wordCount: number): void;

	hasMarkedText(): boolean;

	ignoreModifierKeysForDraggingSession(for_: NSDraggingSession): boolean;

	indent(_?: any): void;

	insertBacktab(_?: any): void;

	insertCompletionForPartialWordRangeMovementIsFinal(_: string, forPartialWordRange: NSRange, movement: number, isFinal: boolean): void;

	insertContainerBreak(_?: any): void;

	insertDoubleQuoteIgnoringSubstitution(_?: any): void;

	insertLineBreak(_?: any): void;

	insertNewline(_?: any): void;

	insertNewlineIgnoringFieldEditor(_?: any): void;

	insertParagraphSeparator(_?: any): void;

	insertSingleQuoteIgnoringSubstitution(_?: any): void;

	insertTab(_?: any): void;

	insertTabIgnoringFieldEditor(_?: any): void;

	insertText(_: any): void;

	insertTextReplacementRange(_: any, replacementRange: NSRange): void;

	invalidateTextContainerOrigin(): void;

	isAccessibilityFocused(): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	loosenKerning(_?: any): void;

	lowerBaseline(_?: any): void;

	lowercaseWord(_?: any): void;

	makeBaseWritingDirectionLeftToRight(_?: any): void;

	makeBaseWritingDirectionNatural(_?: any): void;

	makeBaseWritingDirectionRightToLeft(_?: any): void;

	makeTextWritingDirectionLeftToRight(_?: any): void;

	makeTextWritingDirectionNatural(_?: any): void;

	makeTextWritingDirectionRightToLeft(_?: any): void;

	markedRange(): NSRange;

	moveBackward(_?: any): void;

	moveBackwardAndModifySelection(_?: any): void;

	moveDown(_?: any): void;

	moveDownAndModifySelection(_?: any): void;

	moveForward(_?: any): void;

	moveForwardAndModifySelection(_?: any): void;

	moveLeft(_?: any): void;

	moveLeftAndModifySelection(_?: any): void;

	moveParagraphBackwardAndModifySelection(_?: any): void;

	moveParagraphForwardAndModifySelection(_?: any): void;

	moveRight(_?: any): void;

	moveRightAndModifySelection(_?: any): void;

	moveToBeginningOfDocument(_?: any): void;

	moveToBeginningOfDocumentAndModifySelection(_?: any): void;

	moveToBeginningOfLine(_?: any): void;

	moveToBeginningOfLineAndModifySelection(_?: any): void;

	moveToBeginningOfParagraph(_?: any): void;

	moveToBeginningOfParagraphAndModifySelection(_?: any): void;

	moveToEndOfDocument(_?: any): void;

	moveToEndOfDocumentAndModifySelection(_?: any): void;

	moveToEndOfLine(_?: any): void;

	moveToEndOfLineAndModifySelection(_?: any): void;

	moveToEndOfParagraph(_?: any): void;

	moveToEndOfParagraphAndModifySelection(_?: any): void;

	moveToLeftEndOfLine(_?: any): void;

	moveToLeftEndOfLineAndModifySelection(_?: any): void;

	moveToRightEndOfLine(_?: any): void;

	moveToRightEndOfLineAndModifySelection(_?: any): void;

	moveUp(_?: any): void;

	moveUpAndModifySelection(_?: any): void;

	moveWordBackward(_?: any): void;

	moveWordBackwardAndModifySelection(_?: any): void;

	moveWordForward(_?: any): void;

	moveWordForwardAndModifySelection(_?: any): void;

	moveWordLeft(_?: any): void;

	moveWordLeftAndModifySelection(_?: any): void;

	moveWordRight(_?: any): void;

	moveWordRightAndModifySelection(_?: any): void;

	orderFrontLinkPanel(_?: any): void;

	orderFrontListPanel(_?: any): void;

	orderFrontSharingServicePicker(_?: any): void;

	orderFrontSpacingPanel(_?: any): void;

	orderFrontSubstitutionsPanel(_?: any): void;

	orderFrontTablePanel(_?: any): void;

	outline(_?: any): void;

	pageDown(_?: any): void;

	pageDownAndModifySelection(_?: any): void;

	pageUp(_?: any): void;

	pageUpAndModifySelection(_?: any): void;

	pasteAsPlainText(_?: any): void;

	pasteAsRichText(_?: any): void;

	performFindPanelAction(_?: any): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	performValidatedReplacementInRangeWithAttributedString(in_: NSRange, with_: NSAttributedString): boolean;

	preferredPasteboardTypeFromArrayRestrictedToTypesFromArray(from: NSArray<string>, restrictedToTypesFrom?: NSArray<string>): string;

	quickLookPreviewItems(_?: any): void;

	quickLookPreviewableItemsInRanges(_: NSArray<NSValue>): NSArray<QLPreviewItem>;

	raiseBaseline(_?: any): void;

	readSelectionFromPasteboard(from: NSPasteboard): boolean;

	readSelectionFromPasteboardType(from: NSPasteboard, type: string): boolean;

	replaceTextContainer(_: NSTextContainer): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	scrollLineDown(_?: any): void;

	scrollLineUp(_?: any): void;

	scrollPageDown(_?: any): void;

	scrollPageUp(_?: any): void;

	scrollToBeginningOfDocument(_?: any): void;

	scrollToEndOfDocument(_?: any): void;

	selectAll(_?: any): void;

	selectLine(_?: any): void;

	selectParagraph(_?: any): void;

	selectToMark(_?: any): void;

	selectWord(_?: any): void;

	selectedRange(): NSRange;

	selectionRangeForProposedRangeGranularity(forProposedRange: NSRange, granularity: NSSelectionGranularity): NSRange;

	self(): this;

	setAlignmentRange(_: NSTextAlignment, range: NSRange): void;

	setBaseWritingDirectionRange(_: NSWritingDirection, range: NSRange): void;

	setConstrainedFrameSize(_: CGSize): void;

	setLayoutOrientation(_: NSTextLayoutOrientation): void;

	setMark(_?: any): void;

	setMarkedTextSelectedRangeReplacementRange(_: any, selectedRange: NSRange, replacementRange: NSRange): void;

	setNeedsDisplayInRectAvoidAdditionalLayout(_: CGRect, avoidAdditionalLayout: boolean): void;

	setSelectedRange(_: NSRange): void;

	setSelectedRangeAffinityStillSelecting(_: NSRange, affinity: NSSelectionAffinity, stillSelecting: boolean): void;

	setSelectedRangesAffinityStillSelecting(_: NSArray<NSValue>, affinity: NSSelectionAffinity, stillSelecting: boolean): void;

	setSpellingStateRange(_: number, range: NSRange): void;

	shouldChangeTextInRangeReplacementString(in_: NSRange, replacementString?: string): boolean;

	shouldChangeTextInRangesReplacementStrings(inRanges: NSArray<NSValue>, replacementStrings?: NSArray<string>): boolean;

	showFindIndicatorForRange(for_: NSRange): void;

	smartDeleteRangeForProposedRange(forProposedRange: NSRange): NSRange;

	smartInsertAfterStringForStringReplacingRange(afterStringFor: string, replacing: NSRange): string;

	smartInsertBeforeStringForStringReplacingRange(beforeStringFor: string, replacing: NSRange): string;

	smartInsertForStringReplacingRangeBeforeStringAfterString(for_: string, replacing: NSRange, before?: string, after?: string): void;

	startSpeaking(_?: any): void;

	stopSpeaking(_?: any): void;

	swapWithMark(_?: any): void;

	tightenKerning(_?: any): void;

	toggleAutomaticDashSubstitution(_?: any): void;

	toggleAutomaticDataDetection(_?: any): void;

	toggleAutomaticLinkDetection(_?: any): void;

	toggleAutomaticQuoteSubstitution(_?: any): void;

	toggleAutomaticSpellingCorrection(_?: any): void;

	toggleAutomaticTextCompletion(_?: any): void;

	toggleAutomaticTextReplacement(_?: any): void;

	toggleContinuousSpellChecking(_?: any): void;

	toggleGrammarChecking(_?: any): void;

	toggleQuickLookPreviewPanel(_?: any): void;

	toggleSmartInsertDelete(_?: any): void;

	touchBarMakeItemForIdentifier(_: NSTouchBar, makeItemForIdentifier: string): NSTouchBarItem;

	transpose(_?: any): void;

	transposeWords(_?: any): void;

	turnOffKerning(_?: any): void;

	turnOffLigatures(_?: any): void;

	unmarkText(): void;

	updateCandidates(): void;

	updateDragTypeRegistration(): void;

	updateFontPanel(): void;

	updateInsertionPointStateAndRestartTimer(_: boolean): void;

	updateQuickLookPreviewPanel(): void;

	updateRuler(): void;

	updateTextTouchBarItems(): void;

	updateTouchBarItemIdentifiers(): void;

	uppercaseWord(_?: any): void;

	useAllLigatures(_?: any): void;

	useStandardKerning(_?: any): void;

	useStandardLigatures(_?: any): void;

	validAttributesForMarkedText(): NSArray<string>;

	validateMenuItem(_: NSMenuItem): boolean;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;

	windowLevel(): number;

	writeSelectionToPasteboardType(to: NSPasteboard, type: string): boolean;

	writeSelectionToPasteboardTypes(to: NSPasteboard, types: NSArray<string>): boolean;

	yank(_?: any): void;
}

interface NSTextViewDelegate extends NSTextDelegate {

	textViewClickedOnLinkAtIndex?(_: NSTextView, clickedOnLink: any, at: number): boolean;

	textViewClickedOnCellInRectAtIndex?(_: NSTextView, clickedOn: NSTextAttachmentCellProtocol, in_: CGRect, at: number): void;

	textViewDoubleClickedOnCellInRectAtIndex?(_: NSTextView, doubleClickedOn: NSTextAttachmentCellProtocol, in_: CGRect, at: number): void;

	textViewDraggedCellInRectEventAtIndex?(_: NSTextView, draggedCell: NSTextAttachmentCellProtocol, in_: CGRect, event: NSEvent, at: number): void;

	textViewWritablePasteboardTypesForCellAtIndex?(_: NSTextView, writablePasteboardTypesFor: NSTextAttachmentCellProtocol, at: number): NSArray<string>;

	textViewWriteCellAtIndexToPasteboardType?(_: NSTextView, write: NSTextAttachmentCellProtocol, at: number, to: NSPasteboard, type: string): boolean;

	textViewWillDisplayToolTipForCharacterAtIndex?(_: NSTextView, willDisplayToolTip: string, forCharacterAt: number): string;

	textViewShouldChangeTextInRangeReplacementString?(_: NSTextView, shouldChangeTextIn: NSRange, replacementString?: string): boolean;

	textViewDoCommandBySelector?(_: NSTextView, doCommandBy: string): boolean;

	textViewMenuForEventAtIndex?(_: NSTextView, menu: NSMenu, for_: NSEvent, at: number): NSMenu;

	textViewWillCheckTextInRangeOptionsTypes?(_: NSTextView, willCheckTextIn: NSRange, options: NSDictionary<string, any>, types: number): NSDictionary<string, any>;

	textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount?(_: NSTextView, didCheckTextIn: NSRange, types: number, options: NSDictionary<string, any>, results: NSArray<NSTextCheckingResult>, orthography: NSOrthography, wordCount: number): NSArray<NSTextCheckingResult>;

	textViewURLForContentsOfTextAttachmentAtIndex?(_: NSTextView, urlForContentsOf: NSTextAttachment, at: number): NSURL;

	textViewWillShowSharingServicePickerForItems?(_: NSTextView, willShow: NSSharingServicePicker, forItems: NSArray<any>): NSSharingServicePicker;

	textViewShouldSelectCandidateAtIndex?(_: NSTextView, shouldSelectCandidateAt: number): boolean;

	textViewCandidatesForSelectedRange?(_: NSTextView, candidates: NSArray<NSTextCheckingResult>, forSelectedRange: NSRange): NSArray<NSTextCheckingResult>;

	textViewCandidatesForSelectedRange?(_: NSTextView, candidatesForSelectedRange: NSRange): NSArray<any>;

	textViewCompletionsForPartialWordRangeIndexOfSelectedItem?(_: NSTextView, completions: NSArray<string>, forPartialWordRange: NSRange, indexOfSelectedItem?: number): NSArray<string>;

	textViewShouldChangeTextInRangesReplacementStrings?(_: NSTextView, shouldChangeTextInRanges: NSArray<NSValue>, replacementStrings?: NSArray<string>): boolean;

	textViewShouldChangeTypingAttributesToAttributes?(_: NSTextView, shouldChangeTypingAttributes: NSDictionary<string, any>, toAttributes: NSDictionary<string, any>): NSDictionary<string, any>;

	textViewShouldSetSpellingStateRange?(_: NSTextView, shouldSetSpellingState: number, range: NSRange): number;

	textViewShouldUpdateTouchBarItemIdentifiers?(_: NSTextView, shouldUpdateTouchBarItemIdentifiers: NSArray<string>): NSArray<string>;

	textViewWillChangeSelectionFromCharacterRangeToCharacterRange?(_: NSTextView, willChangeSelectionFromCharacterRange: NSRange, toCharacterRange: NSRange): NSRange;

	textViewWillChangeSelectionFromCharacterRangesToCharacterRanges?(_: NSTextView, willChangeSelectionFromCharacterRanges: NSArray<NSValue>, toCharacterRanges: NSArray<NSValue>): NSArray<NSValue>;

	textViewDidChangeSelection?(_: NSNotification): void;

	textViewDidChangeTypingAttributes?(_: NSNotification): void;

	undoManagerForTextView?(for_: NSTextView): NSUndoManager;
}
declare var NSTextViewDelegate: {

	prototype: NSTextViewDelegate;
};

declare var NSTextViewDidChangeSelectionNotification: string;

declare var NSTextViewDidChangeTypingAttributesNotification: string;

declare var NSTextViewWillChangeNotifyingTextViewNotification: string;

declare var NSTextWriteException: string;

declare const NSTextWriteInapplicableDocumentTypeError: number;

enum NSTickMarkPosition {

	Below = 0,

	Above = 1,

	Leading = 1,

	Trailing = 0
}

globalThis.NSTickMarkPosition = NSTickMarkPosition;

declare var NSTimeZoneDatePickerElementFlag: NSDatePickerElementFlags;

declare var NSTimeoutDocumentOption: string;

declare var NSTitleBinding: string;

declare var NSTitleDocumentAttribute: string;

enum NSTitlePosition {

	NoTitle = 0,

	AboveTop = 1,

	AtTop = 2,

	BelowTop = 3,

	AboveBottom = 4,

	AtBottom = 5,

	BelowBottom = 6
}

globalThis.NSTitlePosition = NSTitlePosition;

declare class NSTitlebarAccessoryViewController extends NSViewController implements NSAnimatablePropertyContainer, NSAnimationDelegate {

	static defaultAnimationForKey(forKey: string): any;

	setFullScreenMinHeight(_: number)

	fullScreenMinHeight: number;

	setHidden(_: boolean)

	isHidden: boolean;

	setLayoutAttribute(_: NSLayoutAttribute)

	layoutAttribute: NSLayoutAttribute;

	setAnimations(_: NSDictionary<string, any>)

	animations: NSDictionary<string, any>; // inherited from NSAnimatablePropertyContainer

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	animationDidReachProgressMark(_: NSAnimation, didReachProgressMark: number): void;

	animationValueForProgress(_: NSAnimation, valueForProgress: number): number;

	animationDidEnd(_: NSAnimation): void;

	animationDidStop(_: NSAnimation): void;

	animationForKey(forKey: string): any;

	animationShouldStart(_: NSAnimation): boolean;

	animator(): this;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class NSTokenField extends NSTextField {

	static labelWithAttributedString(labelWithAttributedString: NSAttributedString): NSTokenField; // inherited from NSTextField

	static labelWithString(labelWithString: string): NSTokenField; // inherited from NSTextField

	static textFieldWithString(string: string): NSTokenField; // inherited from NSTextField

	static wrappingLabelWithString(wrappingLabelWithString: string): NSTokenField; // inherited from NSTextField

	setCompletionDelay(_: number)

	completionDelay: number;

	setDelegate(_: NSTokenFieldDelegate)

	delegate: NSTokenFieldDelegate;

	setTokenStyle(_: NSTokenStyle)

	tokenStyle: NSTokenStyle;

	setTokenizingCharacterSet(_: NSCharacterSet)

	tokenizingCharacterSet: NSCharacterSet;

	static defaultCompletionDelay(): number;

	static defaultTokenizingCharacterSet(): NSCharacterSet;
}

declare class NSTokenFieldCell extends NSTextFieldCell {

	setCompletionDelay(_: number)

	completionDelay: number;

	setDelegate(_: NSTokenFieldCellDelegate)

	delegate: NSTokenFieldCellDelegate;

	setTokenStyle(_: NSTokenStyle)

	tokenStyle: NSTokenStyle;

	setTokenizingCharacterSet(_: NSCharacterSet)

	tokenizingCharacterSet: NSCharacterSet;

	static defaultCompletionDelay(): number;

	static defaultTokenizingCharacterSet(): NSCharacterSet;
}

interface NSTokenFieldCellDelegate extends NSObjectProtocol {

	tokenFieldCellShouldAddObjectsAtIndex?(_: NSTokenFieldCell, shouldAdd: NSArray<any>, at: number): NSArray<any>;

	tokenFieldCellRepresentedObjectForEditingString?(_: NSTokenFieldCell, representedObjectForEditing: string): any;

	tokenFieldCellWriteRepresentedObjectsToPasteboard?(_: NSTokenFieldCell, writeRepresentedObjects: NSArray<any>, to: NSPasteboard): boolean;

	tokenFieldCellReadFromPasteboard?(_: NSTokenFieldCell, readFrom: NSPasteboard): NSArray<any>;

	tokenFieldCellCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(_: NSTokenFieldCell, completionsForSubstring: string, indexOfToken: number, indexOfSelectedItem: number): NSArray<any>;

	tokenFieldCellDisplayStringForRepresentedObject?(_: NSTokenFieldCell, displayStringForRepresentedObject: any): string;

	tokenFieldCellEditingStringForRepresentedObject?(_: NSTokenFieldCell, editingStringForRepresentedObject: any): string;

	tokenFieldCellHasMenuForRepresentedObject?(_: NSTokenFieldCell, hasMenuForRepresentedObject: any): boolean;

	tokenFieldCellMenuForRepresentedObject?(_: NSTokenFieldCell, menuForRepresentedObject: any): NSMenu;

	tokenFieldCellStyleForRepresentedObject?(_: NSTokenFieldCell, styleForRepresentedObject: any): NSTokenStyle;
}
declare var NSTokenFieldCellDelegate: {

	prototype: NSTokenFieldCellDelegate;
};

interface NSTokenFieldDelegate extends NSTextFieldDelegate {

	tokenFieldShouldAddObjectsAtIndex?(_: NSTokenField, shouldAdd: NSArray<any>, at: number): NSArray<any>;

	tokenFieldRepresentedObjectForEditingString?(_: NSTokenField, representedObjectForEditing: string): any;

	tokenFieldWriteRepresentedObjectsToPasteboard?(_: NSTokenField, writeRepresentedObjects: NSArray<any>, to: NSPasteboard): boolean;

	tokenFieldReadFromPasteboard?(_: NSTokenField, readFrom: NSPasteboard): NSArray<any>;

	tokenFieldCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(_: NSTokenField, completionsForSubstring: string, indexOfToken: number, indexOfSelectedItem?: number): NSArray<any>;

	tokenFieldDisplayStringForRepresentedObject?(_: NSTokenField, displayStringForRepresentedObject: any): string;

	tokenFieldEditingStringForRepresentedObject?(_: NSTokenField, editingStringForRepresentedObject: any): string;

	tokenFieldHasMenuForRepresentedObject?(_: NSTokenField, hasMenuForRepresentedObject: any): boolean;

	tokenFieldMenuForRepresentedObject?(_: NSTokenField, menuForRepresentedObject: any): NSMenu;

	tokenFieldStyleForRepresentedObject?(_: NSTokenField, styleForRepresentedObject: any): NSTokenStyle;
}
declare var NSTokenFieldDelegate: {

	prototype: NSTokenFieldDelegate;
};

enum NSTokenStyle {

	Default = 0,

	None = 1,

	Rounded = 2,

	Squared = 3,

	PlainSquared = 4
}

globalThis.NSTokenStyle = NSTokenStyle;

declare var NSToolTipAttributeName: string;

declare var NSToolTipBinding: string;

declare class NSToolbar extends NSObject {

	setAllowsExtensionItems(_: boolean)

	allowsExtensionItems: boolean;

	setAllowsUserCustomization(_: boolean)

	allowsUserCustomization: boolean;

	setAutosavesConfiguration(_: boolean)

	autosavesConfiguration: boolean;

	setCenteredItemIdentifier(_: string)

	centeredItemIdentifier: string;

	readonly configurationDictionary: NSDictionary<string, any>;

	readonly customizationPaletteIsRunning: boolean;

	setDelegate(_: NSToolbarDelegate)

	delegate: NSToolbarDelegate;

	setDisplayMode(_: NSToolbarDisplayMode)

	displayMode: NSToolbarDisplayMode;

	readonly identifier: string;

	readonly items: NSArray<NSToolbarItem>;

	setSelectedItemIdentifier(_: string)

	selectedItemIdentifier: string;

	setShowsBaselineSeparator(_: boolean)

	showsBaselineSeparator: boolean;

	setSizeMode(_: NSToolbarSizeMode)

	sizeMode: NSToolbarSizeMode;

	setVisible(_: boolean)

	isVisible: boolean;

	readonly visibleItems: NSArray<NSToolbarItem>;

	static create(identifier: string);

	insertItemWithItemIdentifierAtIndex(withItemIdentifier: string, at: number): void;

	removeItemAtIndex(at: number): void;

	runCustomizationPalette(_?: any): void;

	setConfigurationFromDictionary(_: NSDictionary<string, any>): void;

	validateVisibleItems(): void;
}

declare var NSToolbarCloudSharingItemIdentifier: string;

declare var NSToolbarCustomizeToolbarItemIdentifier: string;

interface NSToolbarDelegate extends NSObjectProtocol {

	toolbarItemForItemIdentifierWillBeInsertedIntoToolbar?(_: NSToolbar, itemForItemIdentifier: string, willBeInsertedIntoToolbar: boolean): NSToolbarItem;

	toolbarAllowedItemIdentifiers?(_: NSToolbar): NSArray<string>;

	toolbarDefaultItemIdentifiers?(_: NSToolbar): NSArray<string>;

	toolbarDidRemoveItem?(_: NSNotification): void;

	toolbarSelectableItemIdentifiers?(_: NSToolbar): NSArray<string>;

	toolbarWillAddItem?(_: NSNotification): void;
}
declare var NSToolbarDelegate: {

	prototype: NSToolbarDelegate;
};

declare var NSToolbarDidRemoveItemNotification: string;

enum NSToolbarDisplayMode {

	Default = 0,

	IconAndLabel = 1,

	IconOnly = 2,

	LabelOnly = 3
}

globalThis.NSToolbarDisplayMode = NSToolbarDisplayMode;

declare var NSToolbarFlexibleSpaceItemIdentifier: string;

declare class NSToolbarItem extends NSObject implements NSCopying, NSMenuItemValidation, NSValidatedUserInterfaceItem {

	setAction(_: string)

	action: string;

	readonly allowsDuplicatesInToolbar: boolean;

	setAutovalidates(_: boolean)

	autovalidates: boolean;

	setBordered(_: boolean)

	isBordered: boolean;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setImage(_: NSImage)

	image: NSImage;

	readonly itemIdentifier: string;

	setLabel(_: string)

	label: string;

	setMenuFormRepresentation(_: NSMenuItem)

	menuFormRepresentation: NSMenuItem;

	setPaletteLabel(_: string)

	paletteLabel: string;

	setTag(_: number)

	tag: number;

	setTarget(_: any)

	target: any;

	setTitle(_: string)

	title: string;

	setToolTip(_: string)

	toolTip: string;

	readonly toolbar: NSToolbar;

	setView(_: NSView)

	view: NSView;

	setVisibilityPriority(_: number)

	visibilityPriority: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(itemIdentifier: string);

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	validate(): void;

	validateMenuItem(_: NSMenuItem): boolean;
}

declare class NSToolbarItemGroup extends NSToolbarItem {

	static groupWithItemIdentifierImagesSelectionModeLabelsTargetAction(itemIdentifier: string, images: NSArray<NSImage>, selectionMode: NSToolbarItemGroupSelectionMode, labels?: NSArray<string>, target?: any, action?: string): NSToolbarItemGroup;

	static groupWithItemIdentifierTitlesSelectionModeLabelsTargetAction(itemIdentifier: string, titles: NSArray<string>, selectionMode: NSToolbarItemGroupSelectionMode, labels?: NSArray<string>, target?: any, action?: string): NSToolbarItemGroup;

	setControlRepresentation(_: NSToolbarItemGroupControlRepresentation)

	controlRepresentation: NSToolbarItemGroupControlRepresentation;

	setSelectedIndex(_: number)

	selectedIndex: number;

	setSelectionMode(_: NSToolbarItemGroupSelectionMode)

	selectionMode: NSToolbarItemGroupSelectionMode;

	setSubitems(_: NSArray<NSToolbarItem>)

	subitems: NSArray<NSToolbarItem>;

	isSelectedAtIndex(at: number): boolean;

	setSelectedAtIndex(_: boolean, at: number): void;
}

enum NSToolbarItemGroupControlRepresentation {

	Automatic = 0,

	Expanded = 1,

	Collapsed = 2
}

globalThis.NSToolbarItemGroupControlRepresentation = NSToolbarItemGroupControlRepresentation;

enum NSToolbarItemGroupSelectionMode {

	SelectOne = 0,

	SelectAny = 1,

	Momentary = 2
}

globalThis.NSToolbarItemGroupSelectionMode = NSToolbarItemGroupSelectionMode;

interface NSToolbarItemValidation extends NSObjectProtocol {

	validateToolbarItem(_: NSToolbarItem): boolean;
}
declare var NSToolbarItemValidation: {

	prototype: NSToolbarItemValidation;
};

declare var NSToolbarItemVisibilityPriorityHigh: number;

declare var NSToolbarItemVisibilityPriorityLow: number;

declare var NSToolbarItemVisibilityPriorityStandard: number;

declare var NSToolbarItemVisibilityPriorityUser: number;

declare var NSToolbarPrintItemIdentifier: string;

declare var NSToolbarSeparatorItemIdentifier: string;

declare var NSToolbarShowColorsItemIdentifier: string;

declare var NSToolbarShowFontsItemIdentifier: string;

enum NSToolbarSizeMode {

	Default = 0,

	Regular = 1,

	Small = 2
}

globalThis.NSToolbarSizeMode = NSToolbarSizeMode;

declare var NSToolbarSpaceItemIdentifier: string;

declare var NSToolbarToggleSidebarItemIdentifier: string;

declare var NSToolbarWillAddItemNotification: string;

declare var NSTopMarginDocumentAttribute: string;

declare var NSTornOffMenuWindowLevel: number;

declare class NSTouch extends NSObject implements NSCopying {

	readonly device: any;

	readonly deviceSize: CGSize;

	readonly identity: any;

	readonly normalizedPosition: CGPoint;

	readonly phase: NSTouchPhase;

	readonly isResting: boolean;

	readonly type: NSTouchType;

	copyWithZone(_?: any): any;

	locationInView(in_?: NSView): CGPoint;

	previousLocationInView(in_?: NSView): CGPoint;
}

declare class NSTouchBar extends NSObject implements NSCoding {

	setCustomizationAllowedItemIdentifiers(_: NSArray<string>)

	customizationAllowedItemIdentifiers: NSArray<string>;

	setCustomizationIdentifier(_: string)

	customizationIdentifier: string;

	setCustomizationRequiredItemIdentifiers(_: NSArray<string>)

	customizationRequiredItemIdentifiers: NSArray<string>;

	setDefaultItemIdentifiers(_: NSArray<string>)

	defaultItemIdentifiers: NSArray<string>;

	setDelegate(_: NSTouchBarDelegate)

	delegate: NSTouchBarDelegate;

	setEscapeKeyReplacementItemIdentifier(_: string)

	escapeKeyReplacementItemIdentifier: string;

	readonly itemIdentifiers: NSArray<string>;

	setPrincipalItemIdentifier(_: string)

	principalItemIdentifier: string;

	setTemplateItems(_: NSSet<NSTouchBarItem>)

	templateItems: NSSet<NSTouchBarItem>;

	readonly isVisible: boolean;

	static setAutomaticCustomizeTouchBarMenuItemEnabled(_: boolean)

	isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	itemForIdentifier(forIdentifier: string): NSTouchBarItem;
}

interface NSTouchBarDelegate extends NSObjectProtocol {

	touchBarMakeItemForIdentifier?(_: NSTouchBar, makeItemForIdentifier: string): NSTouchBarItem;
}
declare var NSTouchBarDelegate: {

	prototype: NSTouchBarDelegate;
};

declare class NSTouchBarItem extends NSObject implements NSCoding {

	readonly customizationLabel: string;

	readonly identifier: string;

	readonly view: NSView;

	readonly viewController: NSViewController;

	setVisibilityPriority(_: number)

	visibilityPriority: number;

	readonly isVisible: boolean;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(identifier: string);

	encodeWithCoder(_: NSCoder): void;
}

declare var NSTouchBarItemIdentifierCandidateList: string;

declare var NSTouchBarItemIdentifierCharacterPicker: string;

declare var NSTouchBarItemIdentifierFixedSpaceLarge: string;

declare var NSTouchBarItemIdentifierFixedSpaceSmall: string;

declare var NSTouchBarItemIdentifierFlexibleSpace: string;

declare var NSTouchBarItemIdentifierOtherItemsProxy: string;

declare var NSTouchBarItemIdentifierTextAlignment: string;

declare var NSTouchBarItemIdentifierTextColorPicker: string;

declare var NSTouchBarItemIdentifierTextFormat: string;

declare var NSTouchBarItemIdentifierTextList: string;

declare var NSTouchBarItemIdentifierTextStyle: string;

declare var NSTouchBarItemPriorityHigh: number;

declare var NSTouchBarItemPriorityLow: number;

declare var NSTouchBarItemPriorityNormal: number;

interface NSTouchBarProvider extends NSObjectProtocol {

	touchBar: NSTouchBar;
}
declare var NSTouchBarProvider: {

	prototype: NSTouchBarProvider;
};

enum NSTouchPhase {

	Began = 1,

	Moved = 2,

	Stationary = 4,

	Ended = 8,

	Cancelled = 16,

	Touching = 7,

	Any = -1
}

globalThis.NSTouchPhase = NSTouchPhase;

enum NSTouchType {

	Direct = 0,

	Indirect = 1
}

globalThis.NSTouchType = NSTouchType;

enum NSTouchTypeMask {

	Direct = 1,

	Indirect = 2
}

globalThis.NSTouchTypeMask = NSTouchTypeMask;

declare class NSTrackingArea extends NSObject implements NSCoding, NSCopying {

	readonly options: NSTrackingAreaOptions;

	readonly owner: any;

	readonly rect: CGRect;

	readonly userInfo: NSDictionary<any, any>;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(rect: CGRect, options: NSTrackingAreaOptions, owner: any, userInfo: NSDictionary<any, any>);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NSTrackingAreaOptions {

	MouseEnteredAndExited = 1,

	MouseMoved = 2,

	CursorUpdate = 4,

	ActiveWhenFirstResponder = 16,

	ActiveInKeyWindow = 32,

	ActiveInActiveApp = 64,

	ActiveAlways = 128,

	AssumeInside = 256,

	InVisibleRect = 512,

	EnabledDuringMouseDrag = 1024
}

globalThis.NSTrackingAreaOptions = NSTrackingAreaOptions;

declare var NSTransparentBinding: string;

declare class NSTreeController extends NSObjectController {

	setAlwaysUsesMultipleValuesMarker(_: boolean)

	alwaysUsesMultipleValuesMarker: boolean;

	readonly arrangedObjects: NSTreeNode;

	setAvoidsEmptySelection(_: boolean)

	avoidsEmptySelection: boolean;

	readonly canAddChild: boolean;

	readonly canInsert: boolean;

	readonly canInsertChild: boolean;

	setChildrenKeyPath(_: string)

	childrenKeyPath: string;

	setCountKeyPath(_: string)

	countKeyPath: string;

	setLeafKeyPath(_: string)

	leafKeyPath: string;

	setPreservesSelection(_: boolean)

	preservesSelection: boolean;

	readonly selectedNodes: NSArray<NSTreeNode>;

	readonly selectionIndexPath: NSIndexPath;

	readonly selectionIndexPaths: NSArray<NSIndexPath>;

	setSelectsInsertedObjects(_: boolean)

	selectsInsertedObjects: boolean;

	setSortDescriptors(_: NSArray<NSSortDescriptor>)

	sortDescriptors: NSArray<NSSortDescriptor>;

	addChild(_?: any): void;

	addSelectionIndexPaths(_: NSArray<NSIndexPath>): boolean;

	childrenKeyPathForNode(for_: NSTreeNode): string;

	countKeyPathForNode(for_: NSTreeNode): string;

	insert(_?: any): void;

	insertChild(_?: any): void;

	insertObjectAtArrangedObjectIndexPath(_?: any, atArrangedObjectIndexPath: NSIndexPath): void;

	insertObjectsAtArrangedObjectIndexPaths(_: NSArray<any>, atArrangedObjectIndexPaths: NSArray<NSIndexPath>): void;

	leafKeyPathForNode(for_: NSTreeNode): string;

	moveNodeToIndexPath(_: NSTreeNode, to: NSIndexPath): void;

	moveNodesToIndexPath(_: NSArray<NSTreeNode>, to: NSIndexPath): void;

	rearrangeObjects(): void;

	removeObjectAtArrangedObjectIndexPath(atArrangedObjectIndexPath: NSIndexPath): void;

	removeObjectsAtArrangedObjectIndexPaths(atArrangedObjectIndexPaths: NSArray<NSIndexPath>): void;

	removeSelectionIndexPaths(_: NSArray<NSIndexPath>): boolean;

	setSelectionIndexPath(_?: NSIndexPath): boolean;

	setSelectionIndexPaths(_: NSArray<NSIndexPath>): boolean;
}

declare class NSTreeNode extends NSObject {

	static treeNodeWithRepresentedObject(representedObject?: any): NSTreeNode;

	readonly childNodes: NSArray<NSTreeNode>;

	readonly indexPath: NSIndexPath;

	readonly isLeaf: boolean;

	readonly mutableChildNodes: NSMutableArray<NSTreeNode>;

	readonly parentNode: NSTreeNode;

	readonly representedObject: any;

	static create(representedObject: any);

	descendantNodeAtIndexPath(at: NSIndexPath): NSTreeNode;

	sortWithSortDescriptorsRecursively(with_: NSArray<NSSortDescriptor>, recursively: boolean): void;
}

declare var NSTypeIdentifierAddressText: string;

declare var NSTypeIdentifierDateText: string;

declare var NSTypeIdentifierPhoneNumberText: string;

declare var NSTypeIdentifierTransitInformationText: string;

declare var NSTypedStreamVersionException: string;

declare class NSTypesetter extends NSObject {

	static printingAdjustmentInLayoutManagerForNominallySpacedGlyphRangePackedGlyphsCount(in_: NSLayoutManager, forNominallySpacedGlyphRange: NSRange, packedGlyphs: string, count: number): CGSize;

	static sharedSystemTypesetterForBehavior(for_: NSTypesetterBehavior): any;

	setAttributedString(_: NSAttributedString)

	attributedString: NSAttributedString;

	readonly attributesForExtraLineFragment: NSDictionary<string, any>;

	setBidiProcessingEnabled(_: boolean)

	bidiProcessingEnabled: boolean;

	readonly currentParagraphStyle: NSParagraphStyle;

	readonly currentTextContainer: NSTextContainer;

	setHyphenationFactor(_: number)

	hyphenationFactor: number;

	readonly layoutManager: NSLayoutManager;

	setLineFragmentPadding(_: number)

	lineFragmentPadding: number;

	readonly paragraphCharacterRange: NSRange;

	readonly paragraphGlyphRange: NSRange;

	readonly paragraphSeparatorCharacterRange: NSRange;

	readonly paragraphSeparatorGlyphRange: NSRange;

	readonly textContainers: NSArray<NSTextContainer>;

	setTypesetterBehavior(_: NSTypesetterBehavior)

	typesetterBehavior: NSTypesetterBehavior;

	setUsesFontLeading(_: boolean)

	usesFontLeading: boolean;

	static defaultTypesetterBehavior(): NSTypesetterBehavior;

	static sharedSystemTypesetter(): NSTypesetter;

	actionForControlCharacterAtIndex(at: number): NSTypesetterControlCharacterAction;

	baselineOffsetInLayoutManagerGlyphIndex(in_: NSLayoutManager, glyphIndex: number): number;

	beginLineWithGlyphAtIndex(withGlyphAt: number): void;

	beginParagraph(): void;

	boundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(forControlGlyphAt: number, for_: NSTextContainer, proposedLineFragment: CGRect, glyphPosition: CGPoint, characterIndex: number): CGRect;

	characterRangeForGlyphRangeActualGlyphRange(forGlyphRange: NSRange, actualGlyphRange?: NSRange): NSRange;

	endLineWithGlyphRange(withGlyphRange: NSRange): void;

	endParagraph(): void;

	getLineFragmentRectUsedRectForParagraphSeparatorGlyphRangeAtProposedOrigin(_: CGRect, usedRect: CGRect, forParagraphSeparatorGlyphRange: NSRange, atProposedOrigin: CGPoint): void;

	getLineFragmentRectUsedRectRemainingRectForStartingGlyphAtIndexProposedRectLineSpacingParagraphSpacingBeforeParagraphSpacingAfter(_: CGRect, usedRect: CGRect, remaining: CGRect, forStartingGlyphAt: number, proposedRect: CGRect, lineSpacing: number, paragraphSpacingBefore: number, paragraphSpacingAfter: number): void;

	glyphRangeForCharacterRangeActualCharacterRange(forCharacterRange: NSRange, actualCharacterRange?: NSRange): NSRange;

	hyphenCharacterForGlyphAtIndex(forGlyphAt: number): number;

	hyphenationFactorForGlyphAtIndex(forGlyphAt: number): number;

	layoutCharactersInRangeForLayoutManagerMaximumNumberOfLineFragments(in_: NSRange, for_: NSLayoutManager, maximumNumberOfLineFragments: number): NSRange;

	layoutGlyphsInLayoutManagerStartingAtGlyphIndexMaxNumberOfLineFragmentsNextGlyphIndex(in_: NSLayoutManager, startingAtGlyphIndex: number, maxNumberOfLineFragments: number, nextGlyphIndex: number): void;

	layoutParagraphAtPoint(at: CGPoint): number;

	lineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect(afterGlyphAt: number, withProposedLineFragmentRect: CGRect): number;

	paragraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect(afterGlyphAt: number, withProposedLineFragmentRect: CGRect): number;

	paragraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect(beforeGlyphAt: number, withProposedLineFragmentRect: CGRect): number;

	setAttachmentSizeForGlyphRange(_: CGSize, forGlyphRange: NSRange): void;

	setBidiLevelsForGlyphRange(_: string, forGlyphRange: NSRange): void;

	setDrawsOutsideLineFragmentForGlyphRange(_: boolean, forGlyphRange: NSRange): void;

	setHardInvalidationForGlyphRange(_: boolean, forGlyphRange: NSRange): void;

	setLineFragmentRectForGlyphRangeUsedRectBaselineOffset(_: CGRect, forGlyphRange: NSRange, usedRect: CGRect, baselineOffset: number): void;

	setLocationWithAdvancementsForStartOfGlyphRange(_: CGPoint, withAdvancements: number, forStartOfGlyphRange: NSRange): void;

	setNotShownAttributeForGlyphRange(_: boolean, forGlyphRange: NSRange): void;

	setParagraphGlyphRangeSeparatorGlyphRange(_: NSRange, separatorGlyphRange: NSRange): void;

	shouldBreakLineByHyphenatingBeforeCharacterAtIndex(byHyphenatingBeforeCharacterAt: number): boolean;

	shouldBreakLineByWordBeforeCharacterAtIndex(byWordBeforeCharacterAt: number): boolean;

	substituteFontForFont(for_: NSFont): NSFont;

	textTabForGlyphLocationWritingDirectionMaxLocation(forGlyphLocation: number, writingDirection: NSWritingDirection, maxLocation: number): NSTextTab;

	willSetLineFragmentRectForGlyphRangeUsedRectBaselineOffset(_: CGRect, forGlyphRange: NSRange, usedRect: CGRect, baselineOffset: number): void;
}

enum NSTypesetterBehavior {

	LatestBehavior = -1,

	OriginalBehavior = 0,

	Behavior_10_2_WithCompatibility = 1,

	Behavior_10_2 = 2,

	Behavior_10_3 = 3,

	Behavior_10_4 = 4
}

globalThis.NSTypesetterBehavior = NSTypesetterBehavior;

enum NSTypesetterControlCharacterAction {

	ZeroAdvancementAction = 1,

	WhitespaceAction = 2,

	HorizontalTabAction = 4,

	LineBreakAction = 8,

	ParagraphBreakAction = 16,

	ContainerBreakAction = 32
}

globalThis.NSTypesetterControlCharacterAction = NSTypesetterControlCharacterAction;

declare var NSUnderlineByWord: NSUnderlineStyle;

declare var NSUnderlineColorAttributeName: string;

declare var NSUnderlinePatternDash: NSUnderlineStyle;

declare var NSUnderlinePatternDashDot: NSUnderlineStyle;

declare var NSUnderlinePatternDashDotDot: NSUnderlineStyle;

declare var NSUnderlinePatternDot: NSUnderlineStyle;

declare var NSUnderlinePatternSolid: NSUnderlineStyle;

enum NSUnderlineStyle {

	None = 0,

	Single = 1,

	Thick = 2,

	Double = 9,

	PatternSolid = 0,

	PatternDot = 256,

	PatternDash = 512,

	PatternDashDot = 768,

	PatternDashDotDot = 1024,

	ByWord = 32768
}

globalThis.NSUnderlineStyle = NSUnderlineStyle;

declare var NSUnderlineStyleAttributeName: string;

declare const NSUndoFunctionKey: number;

declare function NSUnregisterServicesProvider(name: string): void;

declare const NSUpArrowFunctionKey: number;

declare const NSUpTextMovement: number;

declare function NSUpdateDynamicServices(): void;

declare const NSUpdateWindowsRunLoopOrdering: number;

enum NSUsableScrollerParts {

	NoScrollerParts = 0,

	OnlyScrollerArrows = 1,

	AllScrollerParts = 2
}

globalThis.NSUsableScrollerParts = NSUsableScrollerParts;

declare var NSUserActivityDocumentURLKey: string;

interface NSUserActivityRestoring extends NSObjectProtocol {

	restoreUserActivityState(_: NSUserActivity): void;
}
declare var NSUserActivityRestoring: {

	prototype: NSUserActivityRestoring;
};

declare class NSUserDefaultsController extends NSController {

	setAppliesImmediately(_: boolean)

	appliesImmediately: boolean;

	readonly defaults: NSUserDefaults;

	readonly hasUnappliedChanges: boolean;

	setInitialValues(_: NSDictionary<string, any>)

	initialValues: NSDictionary<string, any>;

	readonly values: any;

	static sharedUserDefaultsController(): NSUserDefaultsController;

	static create(defaults: NSUserDefaults, initialValues: NSDictionary<string, any>);

	revert(_?: any): void;

	revertToInitialValues(_?: any): void;

	save(_?: any): void;
}

declare const NSUserFunctionKey: number;

interface NSUserInterfaceCompression {

	activeCompressionOptions: NSUserInterfaceCompressionOptions;

	compressWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): void;

	minimumSizeWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): CGSize;
}
declare var NSUserInterfaceCompression: {

	prototype: NSUserInterfaceCompression;
};

declare class NSUserInterfaceCompressionOptions extends NSObject implements NSCoding, NSCopying {

	readonly isEmpty: boolean;

	static breakEqualWidthsOption(): NSUserInterfaceCompressionOptions;

	static hideImagesOption(): NSUserInterfaceCompressionOptions;

	static hideTextOption(): NSUserInterfaceCompressionOptions;

	static reduceMetricsOption(): NSUserInterfaceCompressionOptions;

	static standardOptions(): NSUserInterfaceCompressionOptions;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(compressionOptions: NSSet<NSUserInterfaceCompressionOptions>);

	static create(identifier: string);

	containsOptions(_: NSUserInterfaceCompressionOptions): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	intersectsOptions(_: NSUserInterfaceCompressionOptions): boolean;

	optionsByAddingOptions(_: NSUserInterfaceCompressionOptions): NSUserInterfaceCompressionOptions;

	optionsByRemovingOptions(_: NSUserInterfaceCompressionOptions): NSUserInterfaceCompressionOptions;
}

interface NSUserInterfaceItemIdentification {

	setIdentifier(_: string)

	identifier: string;
}
declare var NSUserInterfaceItemIdentification: {

	prototype: NSUserInterfaceItemIdentification;
};

interface NSUserInterfaceItemSearching extends NSObjectProtocol {

	localizedTitlesForItem(forItem: any): NSArray<string>;

	performActionForItem?(forItem: any): void;

	searchForItemsWithSearchStringResultLimitMatchedItemHandler(withSearch: string, resultLimit: number, matchedItemHandler: (p1: NSArray<any>) => void): void;

	showAllHelpTopicsForSearchString?(forSearch: string): void;
}
declare var NSUserInterfaceItemSearching: {

	prototype: NSUserInterfaceItemSearching;
};

enum NSUserInterfaceLayoutDirection {

	LeftToRight = 0,

	RightToLeft = 1
}

globalThis.NSUserInterfaceLayoutDirection = NSUserInterfaceLayoutDirection;

enum NSUserInterfaceLayoutOrientation {

	Horizontal = 0,

	Vertical = 1
}

globalThis.NSUserInterfaceLayoutOrientation = NSUserInterfaceLayoutOrientation;

interface NSUserInterfaceValidations {

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}
declare var NSUserInterfaceValidations: {

	prototype: NSUserInterfaceValidations;
};

interface NSValidatedUserInterfaceItem {

	action: string;

	tag: number;
}
declare var NSValidatedUserInterfaceItem: {

	prototype: NSValidatedUserInterfaceItem;
};

declare var NSValidatesImmediatelyBindingOption: string;

declare var NSValueBinding: string;

declare var NSValuePathBinding: string;

declare var NSValueTransformerBindingOption: string;

declare var NSValueTransformerNameBindingOption: string;

declare var NSValueURLBinding: string;

declare var NSVariableStatusItemLength: number;

declare var NSVerticalGlyphFormAttributeName: string;

declare class NSView extends NSResponder implements NSAccessibility, NSAccessibilityElementProtocol, NSAnimatablePropertyContainer, NSAppearanceCustomization, NSDraggingDestination, NSUserInterfaceItemIdentification {

	static defaultAnimationForKey(forKey: string): any;

	readonly alignmentRectInsets: NSEdgeInsets;

	setAllowedTouchTypes(_: NSTouchTypeMask)

	allowedTouchTypes: NSTouchTypeMask;

	readonly allowsVibrancy: boolean;

	setAlphaValue(_: number)

	alphaValue: number;

	setAutoresizesSubviews(_: boolean)

	autoresizesSubviews: boolean;

	setAutoresizingMask(_: NSAutoresizingMaskOptions)

	autoresizingMask: NSAutoresizingMaskOptions;

	setBackgroundFilters(_: NSArray<CIFilter>)

	backgroundFilters: NSArray<CIFilter>;

	readonly baselineOffsetFromBottom: number;

	readonly bottomAnchor: NSLayoutYAxisAnchor;

	setBounds(_: CGRect)

	bounds: CGRect;

	setBoundsRotation(_: number)

	boundsRotation: number;

	readonly canBecomeKeyView: boolean;

	setCanDrawConcurrently(_: boolean)

	canDrawConcurrently: boolean;

	setCanDrawSubviewsIntoLayer(_: boolean)

	canDrawSubviewsIntoLayer: boolean;

	readonly candidateListTouchBarItem: NSCandidateListTouchBarItem<any>;

	readonly centerXAnchor: NSLayoutXAxisAnchor;

	readonly centerYAnchor: NSLayoutYAxisAnchor;

	setCompositingFilter(_: CIFilter)

	compositingFilter: CIFilter;

	readonly constraints: NSArray<NSLayoutConstraint>;

	setContentFilters(_: NSArray<CIFilter>)

	contentFilters: NSArray<CIFilter>;

	readonly isDrawingFindIndicator: boolean;

	readonly enclosingMenuItem: NSMenuItem;

	readonly enclosingScrollView: NSScrollView;

	readonly firstBaselineAnchor: NSLayoutYAxisAnchor;

	readonly firstBaselineOffsetFromTop: number;

	readonly fittingSize: CGSize;

	readonly isFlipped: boolean;

	readonly focusRingMaskBounds: CGRect;

	setFocusRingType(_: NSFocusRingType)

	focusRingType: NSFocusRingType;

	setFrame(_: CGRect)

	frame: CGRect;

	setFrameCenterRotation(_: number)

	frameCenterRotation: number;

	setFrameRotation(_: number)

	frameRotation: number;

	setGestureRecognizers(_: NSArray<NSGestureRecognizer>)

	gestureRecognizers: NSArray<NSGestureRecognizer>;

	readonly hasAmbiguousLayout: boolean;

	readonly heightAdjustLimit: number;

	readonly heightAnchor: NSLayoutDimension;

	setHidden(_: boolean)

	isHidden: boolean;

	readonly isHiddenOrHasHiddenAncestor: boolean;

	setHorizontalContentSizeConstraintActive(_: boolean)

	isHorizontalContentSizeConstraintActive: boolean;

	readonly isInFullScreenMode: boolean;

	readonly inLiveResize: boolean;

	readonly inputContext: NSTextInputContext;

	readonly intrinsicContentSize: CGSize;

	readonly lastBaselineAnchor: NSLayoutYAxisAnchor;

	readonly lastBaselineOffsetFromBottom: number;

	setLayer(_: CALayer)

	layer: CALayer;

	setLayerContentsPlacement(_: NSViewLayerContentsPlacement)

	layerContentsPlacement: NSViewLayerContentsPlacement;

	setLayerContentsRedrawPolicy(_: NSViewLayerContentsRedrawPolicy)

	layerContentsRedrawPolicy: NSViewLayerContentsRedrawPolicy;

	setLayerUsesCoreImageFilters(_: boolean)

	layerUsesCoreImageFilters: boolean;

	readonly layoutGuides: NSArray<NSLayoutGuide>;

	readonly leadingAnchor: NSLayoutXAxisAnchor;

	readonly leftAnchor: NSLayoutXAxisAnchor;

	readonly mouseDownCanMoveWindow: boolean;

	setNeedsDisplay(_: boolean)

	needsDisplay: boolean;

	setNeedsLayout(_: boolean)

	needsLayout: boolean;

	readonly needsPanelToBecomeKey: boolean;

	setNeedsUpdateConstraints(_: boolean)

	needsUpdateConstraints: boolean;

	setNextKeyView(_: NSView)

	nextKeyView: NSView;

	readonly nextValidKeyView: NSView;

	readonly isOpaque: boolean;

	readonly opaqueAncestor: NSView;

	readonly pageFooter: NSAttributedString;

	readonly pageHeader: NSAttributedString;

	setPostsBoundsChangedNotifications(_: boolean)

	postsBoundsChangedNotifications: boolean;

	setPostsFrameChangedNotifications(_: boolean)

	postsFrameChangedNotifications: boolean;

	setPreparedContentRect(_: CGRect)

	preparedContentRect: CGRect;

	readonly preservesContentDuringLiveResize: boolean;

	setPressureConfiguration(_: NSPressureConfiguration)

	pressureConfiguration: NSPressureConfiguration;

	readonly previousKeyView: NSView;

	readonly previousValidKeyView: NSView;

	readonly printJobTitle: string;

	readonly rectPreservedDuringLiveResize: CGRect;

	readonly registeredDraggedTypes: NSArray<string>;

	readonly rightAnchor: NSLayoutXAxisAnchor;

	readonly isRotatedFromBase: boolean;

	readonly isRotatedOrScaledFromBase: boolean;

	setShadow(_: NSShadow)

	shadow: NSShadow;

	setSubviews(_: NSArray<NSView>)

	subviews: NSArray<NSView>;

	readonly superview: NSView;

	readonly tag: number;

	setToolTip(_: string)

	toolTip: string;

	readonly topAnchor: NSLayoutYAxisAnchor;

	readonly trackingAreas: NSArray<NSTrackingArea>;

	readonly trailingAnchor: NSLayoutXAxisAnchor;

	setTranslatesAutoresizingMaskIntoConstraints(_: boolean)

	translatesAutoresizingMaskIntoConstraints: boolean;

	setUserInterfaceLayoutDirection(_: NSUserInterfaceLayoutDirection)

	userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection;

	setVerticalContentSizeConstraintActive(_: boolean)

	isVerticalContentSizeConstraintActive: boolean;

	readonly visibleRect: CGRect;

	readonly wantsDefaultClipping: boolean;

	setWantsLayer(_: boolean)

	wantsLayer: boolean;

	setWantsRestingTouches(_: boolean)

	wantsRestingTouches: boolean;

	readonly wantsUpdateLayer: boolean;

	readonly widthAdjustLimit: number;

	readonly widthAnchor: NSLayoutDimension;

	readonly window: NSWindow;

	static isCompatibleWithResponsiveScrolling(): boolean;

	static defaultFocusRingType(): NSFocusRingType;

	static defaultMenu(): NSMenu;

	static focusView(): NSView;

	static requiresConstraintBasedLayout(): boolean;

	setAccessibilityActivationPoint(_: CGPoint)

	accessibilityActivationPoint: CGPoint; // inherited from NSAccessibility

	setAccessibilityAllowedValues(_: NSArray<number>)

	accessibilityAllowedValues: NSArray<number>; // inherited from NSAccessibility

	setAccessibilityAlternateUIVisible(_: boolean)

	isAccessibilityAlternateUIVisible: boolean; // inherited from NSAccessibility

	setAccessibilityApplicationFocusedUIElement(_: any)

	accessibilityApplicationFocusedUIElement: any; // inherited from NSAccessibility

	setAccessibilityCancelButton(_: any)

	accessibilityCancelButton: any; // inherited from NSAccessibility

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)

	accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>; // inherited from NSAccessibility

	setAccessibilityClearButton(_: any)

	accessibilityClearButton: any; // inherited from NSAccessibility

	setAccessibilityCloseButton(_: any)

	accessibilityCloseButton: any; // inherited from NSAccessibility

	setAccessibilityColumnCount(_: number)

	accessibilityColumnCount: number; // inherited from NSAccessibility

	setAccessibilityColumnHeaderUIElements(_: NSArray<any>)

	accessibilityColumnHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumnIndexRange(_: NSRange)

	accessibilityColumnIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityColumnTitles(_: NSArray<any>)

	accessibilityColumnTitles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumns(_: NSArray<any>)

	accessibilityColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityContents(_: NSArray<any>)

	accessibilityContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityCriticalValue(_: any)

	accessibilityCriticalValue: any; // inherited from NSAccessibility

	setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)

	accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>; // inherited from NSAccessibility

	setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)

	accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>; // inherited from NSAccessibility

	setAccessibilityDecrementButton(_: any)

	accessibilityDecrementButton: any; // inherited from NSAccessibility

	setAccessibilityDefaultButton(_: any)

	accessibilityDefaultButton: any; // inherited from NSAccessibility

	setAccessibilityDisclosed(_: boolean)

	isAccessibilityDisclosed: boolean; // inherited from NSAccessibility

	setAccessibilityDisclosedByRow(_: any)

	accessibilityDisclosedByRow: any; // inherited from NSAccessibility

	setAccessibilityDisclosedRows(_: any)

	accessibilityDisclosedRows: any; // inherited from NSAccessibility

	setAccessibilityDisclosureLevel(_: number)

	accessibilityDisclosureLevel: number; // inherited from NSAccessibility

	setAccessibilityDocument(_: string)

	accessibilityDocument: string; // inherited from NSAccessibility

	setAccessibilityEdited(_: boolean)

	isAccessibilityEdited: boolean; // inherited from NSAccessibility

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean; // inherited from NSAccessibility

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean; // inherited from NSAccessibility

	setAccessibilityExpanded(_: boolean)

	isAccessibilityExpanded: boolean; // inherited from NSAccessibility

	setAccessibilityExtrasMenuBar(_: any)

	accessibilityExtrasMenuBar: any; // inherited from NSAccessibility

	setAccessibilityFilename(_: string)

	accessibilityFilename: string; // inherited from NSAccessibility

	setAccessibilityFocused(_: boolean)

	isAccessibilityFocused: boolean; // inherited from NSAccessibility

	setAccessibilityFocusedWindow(_: any)

	accessibilityFocusedWindow: any; // inherited from NSAccessibility

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect; // inherited from NSAccessibility

	setAccessibilityFrontmost(_: boolean)

	isAccessibilityFrontmost: boolean; // inherited from NSAccessibility

	setAccessibilityFullScreenButton(_: any)

	accessibilityFullScreenButton: any; // inherited from NSAccessibility

	setAccessibilityGrowArea(_: any)

	accessibilityGrowArea: any; // inherited from NSAccessibility

	setAccessibilityHandles(_: NSArray<any>)

	accessibilityHandles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityHeader(_: any)

	accessibilityHeader: any; // inherited from NSAccessibility

	setAccessibilityHelp(_: string)

	accessibilityHelp: string; // inherited from NSAccessibility

	setAccessibilityHidden(_: boolean)

	isAccessibilityHidden: boolean; // inherited from NSAccessibility

	setAccessibilityHorizontalScrollBar(_: any)

	accessibilityHorizontalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityHorizontalUnitDescription(_: string)

	accessibilityHorizontalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityHorizontalUnits(_: NSAccessibilityUnits)

	accessibilityHorizontalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityIdentifier(_: string)

	accessibilityIdentifier: string; // inherited from NSAccessibility

	setAccessibilityIncrementButton(_: any)

	accessibilityIncrementButton: any; // inherited from NSAccessibility

	setAccessibilityIndex(_: number)

	accessibilityIndex: number; // inherited from NSAccessibility

	setAccessibilityInsertionPointLineNumber(_: number)

	accessibilityInsertionPointLineNumber: number; // inherited from NSAccessibility

	setAccessibilityLabel(_: string)

	accessibilityLabel: string; // inherited from NSAccessibility

	setAccessibilityLabelUIElements(_: NSArray<any>)

	accessibilityLabelUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityLabelValue(_: number)

	accessibilityLabelValue: number; // inherited from NSAccessibility

	setAccessibilityLinkedUIElements(_: NSArray<any>)

	accessibilityLinkedUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMain(_: boolean)

	isAccessibilityMain: boolean; // inherited from NSAccessibility

	setAccessibilityMainWindow(_: any)

	accessibilityMainWindow: any; // inherited from NSAccessibility

	setAccessibilityMarkerGroupUIElement(_: any)

	accessibilityMarkerGroupUIElement: any; // inherited from NSAccessibility

	setAccessibilityMarkerTypeDescription(_: string)

	accessibilityMarkerTypeDescription: string; // inherited from NSAccessibility

	setAccessibilityMarkerUIElements(_: NSArray<any>)

	accessibilityMarkerUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMarkerValues(_: any)

	accessibilityMarkerValues: any; // inherited from NSAccessibility

	setAccessibilityMaxValue(_: any)

	accessibilityMaxValue: any; // inherited from NSAccessibility

	setAccessibilityMenuBar(_: any)

	accessibilityMenuBar: any; // inherited from NSAccessibility

	setAccessibilityMinValue(_: any)

	accessibilityMinValue: any; // inherited from NSAccessibility

	setAccessibilityMinimizeButton(_: any)

	accessibilityMinimizeButton: any; // inherited from NSAccessibility

	setAccessibilityMinimized(_: boolean)

	isAccessibilityMinimized: boolean; // inherited from NSAccessibility

	setAccessibilityModal(_: boolean)

	isAccessibilityModal: boolean; // inherited from NSAccessibility

	setAccessibilityNextContents(_: NSArray<any>)

	accessibilityNextContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityNumberOfCharacters(_: number)

	accessibilityNumberOfCharacters: number; // inherited from NSAccessibility

	setAccessibilityOrderedByRow(_: boolean)

	isAccessibilityOrderedByRow: boolean; // inherited from NSAccessibility

	setAccessibilityOrientation(_: NSAccessibilityOrientation)

	accessibilityOrientation: NSAccessibilityOrientation; // inherited from NSAccessibility

	setAccessibilityOverflowButton(_: any)

	accessibilityOverflowButton: any; // inherited from NSAccessibility

	setAccessibilityParent(_: any)

	accessibilityParent: any; // inherited from NSAccessibility

	setAccessibilityPlaceholderValue(_: string)

	accessibilityPlaceholderValue: string; // inherited from NSAccessibility

	setAccessibilityPreviousContents(_: NSArray<any>)

	accessibilityPreviousContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityProtectedContent(_: boolean)

	isAccessibilityProtectedContent: boolean; // inherited from NSAccessibility

	setAccessibilityProxy(_: any)

	accessibilityProxy: any; // inherited from NSAccessibility

	setAccessibilityRequired(_: boolean)

	isAccessibilityRequired: boolean; // inherited from NSAccessibility

	setAccessibilityRole(_: string)

	accessibilityRole: string; // inherited from NSAccessibility

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string; // inherited from NSAccessibility

	setAccessibilityRowCount(_: number)

	accessibilityRowCount: number; // inherited from NSAccessibility

	setAccessibilityRowHeaderUIElements(_: NSArray<any>)

	accessibilityRowHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRowIndexRange(_: NSRange)

	accessibilityRowIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityRows(_: NSArray<any>)

	accessibilityRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRulerMarkerType(_: NSAccessibilityRulerMarkerType)

	accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType; // inherited from NSAccessibility

	setAccessibilitySearchButton(_: any)

	accessibilitySearchButton: any; // inherited from NSAccessibility

	setAccessibilitySearchMenu(_: any)

	accessibilitySearchMenu: any; // inherited from NSAccessibility

	setAccessibilitySelected(_: boolean)

	isAccessibilitySelected: boolean; // inherited from NSAccessibility

	setAccessibilitySelectedCells(_: NSArray<any>)

	accessibilitySelectedCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedChildren(_: NSArray<any>)

	accessibilitySelectedChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedColumns(_: NSArray<any>)

	accessibilitySelectedColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedRows(_: NSArray<any>)

	accessibilitySelectedRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedText(_: string)

	accessibilitySelectedText: string; // inherited from NSAccessibility

	setAccessibilitySelectedTextRange(_: NSRange)

	accessibilitySelectedTextRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)

	accessibilitySelectedTextRanges: NSArray<NSValue>; // inherited from NSAccessibility

	setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)

	accessibilityServesAsTitleForUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedCharacterRange(_: NSRange)

	accessibilitySharedCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySharedFocusElements(_: NSArray<any>)

	accessibilitySharedFocusElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedTextUIElements(_: NSArray<any>)

	accessibilitySharedTextUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityShownMenu(_: any)

	accessibilityShownMenu: any; // inherited from NSAccessibility

	setAccessibilitySortDirection(_: NSAccessibilitySortDirection)

	accessibilitySortDirection: NSAccessibilitySortDirection; // inherited from NSAccessibility

	setAccessibilitySplitters(_: NSArray<any>)

	accessibilitySplitters: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string; // inherited from NSAccessibility

	setAccessibilityTabs(_: NSArray<any>)

	accessibilityTabs: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityTitle(_: string)

	accessibilityTitle: string; // inherited from NSAccessibility

	setAccessibilityTitleUIElement(_: any)

	accessibilityTitleUIElement: any; // inherited from NSAccessibility

	setAccessibilityToolbarButton(_: any)

	accessibilityToolbarButton: any; // inherited from NSAccessibility

	setAccessibilityTopLevelUIElement(_: any)

	accessibilityTopLevelUIElement: any; // inherited from NSAccessibility

	setAccessibilityURL(_: NSURL)

	accessibilityURL: NSURL; // inherited from NSAccessibility

	setAccessibilityUnitDescription(_: string)

	accessibilityUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityUnits(_: NSAccessibilityUnits)

	accessibilityUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityValue(_: any)

	accessibilityValue: any; // inherited from NSAccessibility

	setAccessibilityValueDescription(_: string)

	accessibilityValueDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalScrollBar(_: any)

	accessibilityVerticalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityVerticalUnitDescription(_: string)

	accessibilityVerticalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalUnits(_: NSAccessibilityUnits)

	accessibilityVerticalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityVisibleCells(_: NSArray<any>)

	accessibilityVisibleCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleCharacterRange(_: NSRange)

	accessibilityVisibleCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilityVisibleChildren(_: NSArray<any>)

	accessibilityVisibleChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleColumns(_: NSArray<any>)

	accessibilityVisibleColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleRows(_: NSArray<any>)

	accessibilityVisibleRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityWarningValue(_: any)

	accessibilityWarningValue: any; // inherited from NSAccessibility

	setAccessibilityWindow(_: any)

	accessibilityWindow: any; // inherited from NSAccessibility

	setAccessibilityWindows(_: NSArray<any>)

	accessibilityWindows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityZoomButton(_: any)

	accessibilityZoomButton: any; // inherited from NSAccessibility

	setAnimations(_: NSDictionary<string, any>)

	animations: NSDictionary<string, any>; // inherited from NSAnimatablePropertyContainer

	setAppearance(_: NSAppearance)

	appearance: NSAppearance; // inherited from NSAppearanceCustomization

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly effectiveAppearance: NSAppearance; // inherited from NSAppearanceCustomization

	readonly hash: number; // inherited from NSObjectProtocol

	setIdentifier(_: string)

	identifier: string; // inherited from NSUserInterfaceItemIdentification

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(frame: CGRect);

	acceptsFirstMouse(for_?: NSEvent): boolean;

	accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;

	accessibilityCellForColumnRow(_: number, row: number): any;

	accessibilityFrame(): CGRect;

	accessibilityFrameForRange(_: NSRange): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLayoutPointForScreenPoint(_: CGPoint): CGPoint;

	accessibilityLayoutSizeForScreenSize(_: CGSize): CGSize;

	accessibilityLineForIndex(_: number): number;

	accessibilityParent(): any;

	accessibilityPerformCancel(): boolean;

	accessibilityPerformConfirm(): boolean;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformDelete(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPick(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityPerformRaise(): boolean;

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	accessibilityPerformShowMenu(): boolean;

	accessibilityRTFForRange(_: NSRange): NSData;

	accessibilityRangeForIndex(_: number): NSRange;

	accessibilityRangeForLine(_: number): NSRange;

	accessibilityRangeForPosition(_: CGPoint): NSRange;

	accessibilityScreenPointForLayoutPoint(_: CGPoint): CGPoint;

	accessibilityScreenSizeForLayoutSize(_: CGSize): CGSize;

	accessibilityStringForRange(_: NSRange): string;

	accessibilityStyleRangeForIndex(_: number): NSRange;

	addConstraint(_: NSLayoutConstraint): void;

	addConstraints(_: NSArray<NSLayoutConstraint>): void;

	addCursorRectCursor(_: CGRect, cursor: NSCursor): void;

	addGestureRecognizer(_: NSGestureRecognizer): void;

	addLayoutGuide(_: NSLayoutGuide): void;

	addSubview(_: NSView): void;

	addSubviewPositionedRelativeTo(_: NSView, positioned: NSWindowOrderingMode, relativeTo?: NSView): void;

	addToolTipRectOwnerUserData(_: CGRect, owner: any, userData?: any): number;

	addTrackingArea(_: NSTrackingArea): void;

	addTrackingRectOwnerUserDataAssumeInside(_: CGRect, owner: any, userData?: any, assumeInside: boolean): number;

	adjustPageHeightNewTopBottomLimit(_: number, top: number, bottom: number, limit: number): void;

	adjustPageWidthNewLeftRightLimit(_: number, left: number, right: number, limit: number): void;

	adjustScroll(_: CGRect): CGRect;

	alignmentRectForFrame(forFrame: CGRect): CGRect;

	ancestorSharedWithView(with_: NSView): NSView;

	animationForKey(forKey: string): any;

	animator(): this;

	autoscroll(with_: NSEvent): boolean;

	backingAlignedRectOptions(_: CGRect, options: NSAlignmentOptions): CGRect;

	beginDocument(): void;

	beginDraggingSessionWithItemsEventSource(with_: NSArray<NSDraggingItem>, event: NSEvent, source: NSDraggingSource): NSDraggingSession;

	beginPageInRectAtPlacement(in_: CGRect, atPlacement: CGPoint): void;

	bitmapImageRepForCachingDisplayInRect(in_: CGRect): NSBitmapImageRep;

	cacheDisplayInRectToBitmapImageRep(in_: CGRect, to: NSBitmapImageRep): void;

	centerScanRect(_: CGRect): CGRect;

	concludeDragOperation(_?: NSDraggingInfo): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	constraintsAffectingLayoutForOrientation(for_: NSLayoutConstraintOrientation): NSArray<NSLayoutConstraint>;

	contentCompressionResistancePriorityForOrientation(for_: NSLayoutConstraintOrientation): number;

	contentHuggingPriorityForOrientation(for_: NSLayoutConstraintOrientation): number;

	convertPointFromView(_: CGPoint, from?: NSView): CGPoint;

	convertPointToView(_: CGPoint, to?: NSView): CGPoint;

	convertPointFromBacking(_: CGPoint): CGPoint;

	convertPointFromLayer(_: CGPoint): CGPoint;

	convertPointToBacking(_: CGPoint): CGPoint;

	convertPointToLayer(_: CGPoint): CGPoint;

	convertRectFromView(_: CGRect, from?: NSView): CGRect;

	convertRectToView(_: CGRect, to?: NSView): CGRect;

	convertRectFromBacking(_: CGRect): CGRect;

	convertRectFromLayer(_: CGRect): CGRect;

	convertRectToBacking(_: CGRect): CGRect;

	convertRectToLayer(_: CGRect): CGRect;

	convertSizeFromView(_: CGSize, from?: NSView): CGSize;

	convertSizeToView(_: CGSize, to?: NSView): CGSize;

	convertSizeFromBacking(_: CGSize): CGSize;

	convertSizeFromLayer(_: CGSize): CGSize;

	convertSizeToBacking(_: CGSize): CGSize;

	convertSizeToLayer(_: CGSize): CGSize;

	dataWithEPSInsideRect(inside: CGRect): NSData;

	dataWithPDFInsideRect(inside: CGRect): NSData;

	didAddSubview(_: NSView): void;

	didCloseMenuWithEvent(_: NSMenu, with_?: NSEvent): void;

	discardCursorRects(): void;

	display(): void;

	displayIfNeeded(): void;

	displayIfNeededIgnoringOpacity(): void;

	displayIfNeededInRect(_: CGRect): void;

	displayIfNeededInRectIgnoringOpacity(_: CGRect): void;

	displayRect(_: CGRect): void;

	displayRectIgnoringOpacity(_: CGRect): void;

	displayRectIgnoringOpacityInContext(_: CGRect, in_: NSGraphicsContext): void;

	draggingEnded(_: NSDraggingInfo): void;

	draggingEntered(_: NSDraggingInfo): NSDragOperation;

	draggingExited(_?: NSDraggingInfo): void;

	draggingUpdated(_: NSDraggingInfo): NSDragOperation;

	drawFocusRingMask(): void;

	drawPageBorderWithSize(with_: CGSize): void;

	drawRect(_: CGRect): void;

	endDocument(): void;

	endPage(): void;

	enterFullScreenModeWithOptions(_: NSScreen, withOptions?: NSDictionary<string, any>): boolean;

	exerciseAmbiguityInLayout(): void;

	exitFullScreenModeWithOptions(options?: NSDictionary<string, any>): void;

	frameForAlignmentRect(forAlignmentRect: CGRect): CGRect;

	getRectsBeingDrawnCount(_?: CGRect, count?: number): void;

	getRectsExposedDuringLiveResizeCount(_: CGRect, count: number): void;

	hitTest(_: CGPoint): NSView;

	invalidateIntrinsicContentSize(): void;

	isAccessibilityFocused(): boolean;

	isAccessibilitySelectorAllowed(_: string): boolean;

	isDescendantOf(of: NSView): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	knowsPageRange(_: NSRange): boolean;

	layout(): void;

	layoutSubtreeIfNeeded(): void;

	locationOfPrintRect(_: CGRect): CGPoint;

	makeBackingLayer(): CALayer;

	menuForEvent(for_: NSEvent): NSMenu;

	mouseInRect(_: CGPoint, in_: CGRect): boolean;

	needsToDrawRect(_: CGRect): boolean;

	noteFocusRingMaskChanged(): void;

	performDragOperation(_: NSDraggingInfo): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	prepareContentInRect(in_: CGRect): void;

	prepareForDragOperation(_: NSDraggingInfo): boolean;

	prepareForReuse(): void;

	print(_?: any): void;

	rectForPage(_: number): CGRect;

	rectForSmartMagnificationAtPointInRect(at: CGPoint, in_: CGRect): CGRect;

	reflectScrolledClipView(_: NSClipView): void;

	registerForDraggedTypes(_: NSArray<string>): void;

	removeAllToolTips(): void;

	removeConstraint(_: NSLayoutConstraint): void;

	removeConstraints(_: NSArray<NSLayoutConstraint>): void;

	removeCursorRectCursor(_: CGRect, cursor: NSCursor): void;

	removeFromSuperview(): void;

	removeFromSuperviewWithoutNeedingDisplay(): void;

	removeGestureRecognizer(_: NSGestureRecognizer): void;

	removeLayoutGuide(_: NSLayoutGuide): void;

	removeToolTip(_: number): void;

	removeTrackingArea(_: NSTrackingArea): void;

	removeTrackingRect(_: number): void;

	replaceSubviewWith(_: NSView, with_: NSView): void;

	resetCursorRects(): void;

	resizeSubviewsWithOldSize(withOldSize: CGSize): void;

	resizeWithOldSuperviewSize(withOldSuperviewSize: CGSize): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	rotateByAngle(byDegrees: number): void;

	rulerViewDidAddMarker(_: NSRulerView, didAdd: NSRulerMarker): void;

	rulerViewDidMoveMarker(_: NSRulerView, didMove: NSRulerMarker): void;

	rulerViewDidRemoveMarker(_: NSRulerView, didRemove: NSRulerMarker): void;

	rulerViewHandleMouseDown(_: NSRulerView, handleMouseDownWith: NSEvent): void;

	rulerViewLocationForPoint(_: NSRulerView, locationFor: CGPoint): number;

	rulerViewPointForLocation(_: NSRulerView, pointForLocation: number): CGPoint;

	rulerViewShouldAddMarker(_: NSRulerView, shouldAdd: NSRulerMarker): boolean;

	rulerViewShouldMoveMarker(_: NSRulerView, shouldMove: NSRulerMarker): boolean;

	rulerViewShouldRemoveMarker(_: NSRulerView, shouldRemove: NSRulerMarker): boolean;

	rulerViewWillAddMarkerAtLocation(_: NSRulerView, willAdd: NSRulerMarker, atLocation: number): number;

	rulerViewWillMoveMarkerToLocation(_: NSRulerView, willMove: NSRulerMarker, toLocation: number): number;

	rulerViewWillSetClientView(_: NSRulerView, willSetClientView: NSView): void;

	scaleUnitSquareToSize(to: CGSize): void;

	scrollClipViewToPoint(_: NSClipView, to: CGPoint): void;

	scrollPoint(_: CGPoint): void;

	scrollRectToVisible(_: CGRect): boolean;

	self(): this;

	setBoundsOrigin(_: CGPoint): void;

	setBoundsSize(_: CGSize): void;

	setContentCompressionResistancePriorityForOrientation(_: number, for_: NSLayoutConstraintOrientation): void;

	setContentHuggingPriorityForOrientation(_: number, for_: NSLayoutConstraintOrientation): void;

	setFrameOrigin(_: CGPoint): void;

	setFrameSize(_: CGSize): void;

	setKeyboardFocusRingNeedsDisplayInRect(_: CGRect): void;

	setNeedsDisplayInRect(_: CGRect): void;

	shouldDelayWindowOrderingForEvent(for_: NSEvent): boolean;

	showDefinitionForAttributedStringAtPoint(for_?: NSAttributedString, at: CGPoint): void;

	showDefinitionForAttributedStringRangeOptionsBaselineOriginProvider(for_?: NSAttributedString, range: NSRange, options?: NSDictionary<string, any>, baselineOriginProvider?: (p1: NSRange) => CGPoint): void;

	sortSubviewsUsingFunctionContext(_?: (p1: NSView, p2: NSView, p3: any) => NSComparisonResult, context?: any): void;

	translateOriginToPoint(to: CGPoint): void;

	translateRectsNeedingDisplayInRectBy(in_: CGRect, by: CGSize): void;

	unregisterDraggedTypes(): void;

	updateConstraints(): void;

	updateConstraintsForSubtreeIfNeeded(): void;

	updateDraggingItemsForDrag(_?: NSDraggingInfo): void;

	updateLayer(): void;

	updateTrackingAreas(): void;

	viewDidChangeBackingProperties(): void;

	viewDidChangeEffectiveAppearance(): void;

	viewDidEndLiveResize(): void;

	viewDidHide(): void;

	viewDidMoveToSuperview(): void;

	viewDidMoveToWindow(): void;

	viewDidUnhide(): void;

	viewWillDraw(): void;

	viewWillMoveToSuperview(toSuperview?: NSView): void;

	viewWillMoveToWindow(toWindow?: NSWindow): void;

	viewWillStartLiveResize(): void;

	viewWithTag(_: number): NSView;

	wantsPeriodicDraggingUpdates(): boolean;

	willOpenMenuWithEvent(_: NSMenu, with_: NSEvent): void;

	willRemoveSubview(_: NSView): void;

	writeEPSInsideRectToPasteboard(inside: CGRect, to: NSPasteboard): void;

	writePDFInsideRectToPasteboard(inside: CGRect, to: NSPasteboard): void;
}

declare class NSViewAnimation extends NSAnimation {

	setViewAnimations(_: NSArray<NSDictionary<string, any>>)

	viewAnimations: NSArray<NSDictionary<string, any>>;

	static create(viewAnimations: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]);
}

declare var NSViewAnimationEffectKey: string;

declare var NSViewAnimationEndFrameKey: string;

declare var NSViewAnimationFadeInEffect: string;

declare var NSViewAnimationFadeOutEffect: string;

declare var NSViewAnimationStartFrameKey: string;

declare var NSViewAnimationTargetKey: string;

declare var NSViewBoundsDidChangeNotification: string;

declare class NSViewController extends NSResponder implements NSEditor, NSSeguePerforming, NSUserInterfaceItemIdentification, NSExtensionRequestHandling {

	setChildViewControllers(_: NSArray<NSViewController>)

	childViewControllers: NSArray<NSViewController>;

	readonly extensionContext: NSExtensionContext;

	readonly nibBundle: NSBundle;

	readonly nibName: string;

	readonly parentViewController: NSViewController;

	setPreferredContentSize(_: CGSize)

	preferredContentSize: CGSize;

	readonly preferredMaximumSize: CGSize;

	readonly preferredMinimumSize: CGSize;

	setPreferredScreenOrigin(_: CGPoint)

	preferredScreenOrigin: CGPoint;

	readonly presentedViewControllers: NSArray<NSViewController>;

	readonly presentingViewController: NSViewController;

	setRepresentedObject(_: any)

	representedObject: any;

	setSourceItemView(_: NSView)

	sourceItemView: NSView;

	readonly storyboard: NSStoryboard;

	setTitle(_: string)

	title: string;

	setView(_: NSView)

	view: NSView;

	readonly isViewLoaded: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	setIdentifier(_: string)

	identifier: string; // inherited from NSUserInterfaceItemIdentification

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(nibName: string, bundle: NSBundle);

	addChildViewController(_: NSViewController): void;

	beginRequestWithExtensionContext(_: NSExtensionContext): void;

	commitEditing(): boolean;

	commitEditingAndReturnError(): boolean;

	commitEditingWithDelegateDidCommitSelectorContextInfo(withDelegate?: any, didCommit?: string, contextInfo?: any): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	discardEditing(): void;

	dismissController(_?: any): void;

	dismissViewController(_: NSViewController): void;

	insertChildViewControllerAtIndex(_: NSViewController, at: number): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	loadView(): void;

	performSegueWithIdentifierSender(withIdentifier: string, sender?: any): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	preferredContentSizeDidChangeForViewController(for_: NSViewController): void;

	prepareForSegueSender(for_: NSStoryboardSegue, sender?: any): void;

	presentViewControllerAnimator(_: NSViewController, animator: NSViewControllerPresentationAnimator): void;

	presentViewControllerAsPopoverRelativeToRectOfViewPreferredEdgeBehavior(_: NSViewController, asPopoverRelativeTo: CGRect, of: NSView, preferredEdge: NSRectEdge, behavior: NSPopoverBehavior): void;

	presentViewControllerAsModalWindow(_: NSViewController): void;

	presentViewControllerAsSheet(_: NSViewController): void;

	removeChildViewControllerAtIndex(at: number): void;

	removeFromParentViewController(): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	shouldPerformSegueWithIdentifierSender(withIdentifier: string, sender?: any): boolean;

	transitionFromViewControllerToViewControllerOptionsCompletionHandler(from: NSViewController, to: NSViewController, options: NSViewControllerTransitionOptions, completionHandler?: () => void): void;

	updateViewConstraints(): void;

	viewDidAppear(): void;

	viewDidDisappear(): void;

	viewDidLayout(): void;

	viewDidLoad(): void;

	viewWillAppear(): void;

	viewWillDisappear(): void;

	viewWillLayout(): void;

	viewWillTransitionToSize(to: CGSize): void;
}

interface NSViewControllerPresentationAnimator extends NSObjectProtocol {

	animateDismissalOfViewControllerFromViewController(of: NSViewController, from: NSViewController): void;

	animatePresentationOfViewControllerFromViewController(of: NSViewController, from: NSViewController): void;
}
declare var NSViewControllerPresentationAnimator: {

	prototype: NSViewControllerPresentationAnimator;
};

enum NSViewControllerTransitionOptions {

	None = 0,

	Crossfade = 1,

	SlideUp = 16,

	SlideDown = 32,

	SlideLeft = 64,

	SlideRight = 128,

	SlideForward = 320,

	SlideBackward = 384,

	AllowUserInteraction = 4096
}

globalThis.NSViewControllerTransitionOptions = NSViewControllerTransitionOptions;

declare var NSViewDidUpdateTrackingAreasNotification: string;

declare var NSViewFrameDidChangeNotification: string;

interface NSViewLayerContentScaleDelegate extends NSObjectProtocol {

	layerShouldInheritContentsScaleFromWindow?(_: CALayer, shouldInheritContentsScale: number, from: NSWindow): boolean;
}
declare var NSViewLayerContentScaleDelegate: {

	prototype: NSViewLayerContentScaleDelegate;
};

enum NSViewLayerContentsPlacement {

	ScaleAxesIndependently = 0,

	ScaleProportionallyToFit = 1,

	ScaleProportionallyToFill = 2,

	Center = 3,

	Top = 4,

	TopRight = 5,

	Right = 6,

	BottomRight = 7,

	Bottom = 8,

	BottomLeft = 9,

	Left = 10,

	TopLeft = 11
}

globalThis.NSViewLayerContentsPlacement = NSViewLayerContentsPlacement;

enum NSViewLayerContentsRedrawPolicy {

	Never = 0,

	OnSetNeedsDisplay = 1,

	DuringViewResize = 2,

	BeforeViewResize = 3,

	Crossfade = 4
}

globalThis.NSViewLayerContentsRedrawPolicy = NSViewLayerContentsRedrawPolicy;

declare var NSViewModeDocumentAttribute: string;

declare var NSViewNoIntrinsicMetric: number;

declare var NSViewSizeDocumentAttribute: string;

interface NSViewToolTipOwner extends NSObjectProtocol {

	viewStringForToolTipPointUserData(_: NSView, stringForToolTip: number, point: CGPoint, userData?: any): string;
}
declare var NSViewToolTipOwner: {

	prototype: NSViewToolTipOwner;
};

declare var NSViewZoomDocumentAttribute: string;

declare var NSVisibleBinding: string;

enum NSVisualEffectBlendingMode {

	BehindWindow = 0,

	WithinWindow = 1
}

globalThis.NSVisualEffectBlendingMode = NSVisualEffectBlendingMode;

enum NSVisualEffectMaterial {

	Titlebar = 3,

	Selection = 4,

	Menu = 5,

	Popover = 6,

	Sidebar = 7,

	HeaderView = 10,

	Sheet = 11,

	WindowBackground = 12,

	HUDWindow = 13,

	FullScreenUI = 15,

	ToolTip = 17,

	ContentBackground = 18,

	UnderWindowBackground = 21,

	UnderPageBackground = 22,

	AppearanceBased = 0,

	Light = 1,

	Dark = 2,

	MediumLight = 8,

	UltraDark = 9
}

globalThis.NSVisualEffectMaterial = NSVisualEffectMaterial;

enum NSVisualEffectState {

	FollowsWindowActiveState = 0,

	Active = 1,

	Inactive = 2
}

globalThis.NSVisualEffectState = NSVisualEffectState;

declare class NSVisualEffectView extends NSView {

	setBlendingMode(_: NSVisualEffectBlendingMode)

	blendingMode: NSVisualEffectBlendingMode;

	setEmphasized(_: boolean)

	isEmphasized: boolean;

	readonly interiorBackgroundStyle: NSBackgroundStyle;

	setMaskImage(_: NSImage)

	maskImage: NSImage;

	setMaterial(_: NSVisualEffectMaterial)

	material: NSVisualEffectMaterial;

	setState(_: NSVisualEffectState)

	state: NSVisualEffectState;
}

declare var NSVoiceAge: string;

declare var NSVoiceDemoText: string;

declare var NSVoiceGender: string;

declare var NSVoiceGenderFemale: string;

declare var NSVoiceGenderMale: string;

declare var NSVoiceGenderNeuter: string;

declare var NSVoiceIdentifier: string;

declare var NSVoiceIndividuallySpokenCharacters: string;

declare var NSVoiceLocaleIdentifier: string;

declare var NSVoiceName: string;

declare var NSVoiceSupportedCharacters: string;

declare const NSWantsBidiLevels: number;

declare var NSWarningValueBinding: string;

declare var NSWebArchiveTextDocumentType: string;

declare var NSWebPreferencesDocumentOption: string;

declare var NSWebResourceLoadDelegateDocumentOption: string;

declare var NSWhite: number;

declare var NSWidthBinding: string;

enum NSWindingRule {

	NonZero = 0,

	EvenOdd = 1
}

globalThis.NSWindingRule = NSWindingRule;

declare class NSWindow extends NSResponder implements NSAccessibility, NSAccessibilityElementProtocol, NSAnimatablePropertyContainer, NSAppearanceCustomization, NSMenuItemValidation, NSUserInterfaceItemIdentification, NSUserInterfaceValidations {

	static contentRectForFrameRectStyleMask(forFrameRect: CGRect, styleMask: NSWindowStyleMask): CGRect;

	static defaultAnimationForKey(forKey: string): any;

	static frameRectForContentRectStyleMask(forContentRect: CGRect, styleMask: NSWindowStyleMask): CGRect;

	static minFrameWidthWithTitleStyleMask(withTitle: string, styleMask: NSWindowStyleMask): number;

	static removeFrameUsingName(usingName: string): void;

	static standardWindowButtonForStyleMask(_: NSWindowButton, for_: NSWindowStyleMask): NSButton;

	static windowNumberAtPointBelowWindowWithWindowNumber(at: CGPoint, belowWindowWithWindowNumber: number): number;

	static windowNumbersWithOptions(options: NSWindowNumberListOptions): NSArray<number>;

	static windowWithContentViewController(contentViewController: NSViewController): NSWindow;

	setAcceptsMouseMovedEvents(_: boolean)

	acceptsMouseMovedEvents: boolean;

	setAllowsConcurrentViewDrawing(_: boolean)

	allowsConcurrentViewDrawing: boolean;

	setAllowsToolTipsWhenApplicationIsInactive(_: boolean)

	allowsToolTipsWhenApplicationIsInactive: boolean;

	setAlphaValue(_: number)

	alphaValue: number;

	setAnimationBehavior(_: NSWindowAnimationBehavior)

	animationBehavior: NSWindowAnimationBehavior;

	setAppearanceSource(_: NSObject)

	appearanceSource: NSObject;

	readonly areCursorRectsEnabled: boolean;

	setAspectRatio(_: CGSize)

	aspectRatio: CGSize;

	readonly attachedSheet: NSWindow;

	setAutorecalculatesKeyViewLoop(_: boolean)

	autorecalculatesKeyViewLoop: boolean;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	readonly backingScaleFactor: number;

	setBackingType(_: NSBackingStoreType)

	backingType: NSBackingStoreType;

	readonly canBecomeKeyWindow: boolean;

	readonly canBecomeMainWindow: boolean;

	setCanBecomeVisibleWithoutLogin(_: boolean)

	canBecomeVisibleWithoutLogin: boolean;

	setCanHide(_: boolean)

	canHide: boolean;

	readonly childWindows: NSArray<NSWindow>;

	setCollectionBehavior(_: NSWindowCollectionBehavior)

	collectionBehavior: NSWindowCollectionBehavior;

	setColorSpace(_: NSColorSpace)

	colorSpace: NSColorSpace;

	setContentAspectRatio(_: CGSize)

	contentAspectRatio: CGSize;

	readonly contentLayoutGuide: any;

	readonly contentLayoutRect: CGRect;

	setContentMaxSize(_: CGSize)

	contentMaxSize: CGSize;

	setContentMinSize(_: CGSize)

	contentMinSize: CGSize;

	setContentResizeIncrements(_: CGSize)

	contentResizeIncrements: CGSize;

	setContentView(_: NSView)

	contentView: NSView;

	setContentViewController(_: NSViewController)

	contentViewController: NSViewController;

	readonly currentEvent: NSEvent;

	readonly deepestScreen: NSScreen;

	setDefaultButtonCell(_: NSButtonCell)

	defaultButtonCell: NSButtonCell;

	setDelegate(_: NSWindowDelegate)

	delegate: NSWindowDelegate;

	setDepthLimit(_: NSWindowDepth)

	depthLimit: NSWindowDepth;

	readonly deviceDescription: NSDictionary<string, any>;

	setDisplaysWhenScreenProfileChanges(_: boolean)

	displaysWhenScreenProfileChanges: boolean;

	readonly dockTile: NSDockTile;

	setDocumentEdited(_: boolean)

	isDocumentEdited: boolean;

	setExcludedFromWindowsMenu(_: boolean)

	isExcludedFromWindowsMenu: boolean;

	readonly firstResponder: NSResponder;

	readonly isFloatingPanel: boolean;

	readonly frame: CGRect;

	readonly frameAutosaveName: string;

	readonly hasCloseBox: boolean;

	readonly hasDynamicDepthLimit: boolean;

	setHasShadow(_: boolean)

	hasShadow: boolean;

	readonly hasTitleBar: boolean;

	setHidesOnDeactivate(_: boolean)

	hidesOnDeactivate: boolean;

	setIgnoresMouseEvents(_: boolean)

	ignoresMouseEvents: boolean;

	readonly inLiveResize: boolean;

	setInitialFirstResponder(_: NSView)

	initialFirstResponder: NSView;

	readonly keyViewSelectionDirection: NSSelectionDirection;

	readonly isKeyWindow: boolean;

	setLevel(_: number)

	level: number;

	readonly isMainWindow: boolean;

	setMaxFullScreenContentSize(_: CGSize)

	maxFullScreenContentSize: CGSize;

	setMaxSize(_: CGSize)

	maxSize: CGSize;

	setMinFullScreenContentSize(_: CGSize)

	minFullScreenContentSize: CGSize;

	setMinSize(_: CGSize)

	minSize: CGSize;

	readonly isMiniaturizable: boolean;

	readonly isMiniaturized: boolean;

	setMiniwindowImage(_: NSImage)

	miniwindowImage: NSImage;

	setMiniwindowTitle(_: string)

	miniwindowTitle: string;

	readonly isModalPanel: boolean;

	readonly mouseLocationOutsideOfEventStream: CGPoint;

	setMovable(_: boolean)

	isMovable: boolean;

	setMovableByWindowBackground(_: boolean)

	isMovableByWindowBackground: boolean;

	readonly occlusionState: NSWindowOcclusionState;

	readonly isOnActiveSpace: boolean;

	setOpaque(_: boolean)

	isOpaque: boolean;

	setOrderedIndex(_: number)

	orderedIndex: number;

	setParentWindow(_: NSWindow)

	parentWindow: NSWindow;

	setPreservesContentDuringLiveResize(_: boolean)

	preservesContentDuringLiveResize: boolean;

	setPreventsApplicationTerminationWhenModal(_: boolean)

	preventsApplicationTerminationWhenModal: boolean;

	setReleasedWhenClosed(_: boolean)

	isReleasedWhenClosed: boolean;

	setRepresentedFilename(_: string)

	representedFilename: string;

	setRepresentedURL(_: NSURL)

	representedURL: NSURL;

	readonly isResizable: boolean;

	readonly resizeFlags: NSEventModifierFlags;

	setResizeIncrements(_: CGSize)

	resizeIncrements: CGSize;

	setRestorable(_: boolean)

	isRestorable: boolean;

	setRestorationClass(_: typeof NSObject)

	restorationClass: typeof NSObject;

	readonly screen: NSScreen;

	setSharingType(_: NSWindowSharingType)

	sharingType: NSWindowSharingType;

	readonly isSheet: boolean;

	readonly sheetParent: NSWindow;

	readonly sheets: NSArray<NSWindow>;

	setShowsResizeIndicator(_: boolean)

	showsResizeIndicator: boolean;

	setShowsToolbarButton(_: boolean)

	showsToolbarButton: boolean;

	readonly stringWithSavedFrame: string;

	setStyleMask(_: NSWindowStyleMask)

	styleMask: NSWindowStyleMask;

	readonly tab: NSWindowTab;

	readonly tabGroup: NSWindowTabGroup;

	readonly tabbedWindows: NSArray<NSWindow>;

	setTabbingIdentifier(_: string)

	tabbingIdentifier: string;

	setTabbingMode(_: NSWindowTabbingMode)

	tabbingMode: NSWindowTabbingMode;

	setTitle(_: string)

	title: string;

	setTitleVisibility(_: NSWindowTitleVisibility)

	titleVisibility: NSWindowTitleVisibility;

	setTitlebarAccessoryViewControllers(_: NSArray<NSTitlebarAccessoryViewController>)

	titlebarAccessoryViewControllers: NSArray<NSTitlebarAccessoryViewController>;

	setTitlebarAppearsTransparent(_: boolean)

	titlebarAppearsTransparent: boolean;

	setToolbar(_: NSToolbar)

	toolbar: NSToolbar;

	setViewsNeedDisplay(_: boolean)

	viewsNeedDisplay: boolean;

	readonly isVisible: boolean;

	setWindowController(_: NSWindowController)

	windowController: NSWindowController;

	readonly windowNumber: number;

	readonly windowRef: any;

	readonly windowTitlebarLayoutDirection: NSUserInterfaceLayoutDirection;

	readonly worksWhenModal: boolean;

	readonly isZoomable: boolean;

	readonly isZoomed: boolean;

	static setAllowsAutomaticWindowTabbing(_: boolean)

	allowsAutomaticWindowTabbing: boolean;

	static defaultDepthLimit(): NSWindowDepth;

	static userTabbingPreference(): NSWindowUserTabbingPreference;

	setAccessibilityActivationPoint(_: CGPoint)

	accessibilityActivationPoint: CGPoint; // inherited from NSAccessibility

	setAccessibilityAllowedValues(_: NSArray<number>)

	accessibilityAllowedValues: NSArray<number>; // inherited from NSAccessibility

	setAccessibilityAlternateUIVisible(_: boolean)

	isAccessibilityAlternateUIVisible: boolean; // inherited from NSAccessibility

	setAccessibilityApplicationFocusedUIElement(_: any)

	accessibilityApplicationFocusedUIElement: any; // inherited from NSAccessibility

	setAccessibilityCancelButton(_: any)

	accessibilityCancelButton: any; // inherited from NSAccessibility

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)

	accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>; // inherited from NSAccessibility

	setAccessibilityClearButton(_: any)

	accessibilityClearButton: any; // inherited from NSAccessibility

	setAccessibilityCloseButton(_: any)

	accessibilityCloseButton: any; // inherited from NSAccessibility

	setAccessibilityColumnCount(_: number)

	accessibilityColumnCount: number; // inherited from NSAccessibility

	setAccessibilityColumnHeaderUIElements(_: NSArray<any>)

	accessibilityColumnHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumnIndexRange(_: NSRange)

	accessibilityColumnIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityColumnTitles(_: NSArray<any>)

	accessibilityColumnTitles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityColumns(_: NSArray<any>)

	accessibilityColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityContents(_: NSArray<any>)

	accessibilityContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityCriticalValue(_: any)

	accessibilityCriticalValue: any; // inherited from NSAccessibility

	setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)

	accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>; // inherited from NSAccessibility

	setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)

	accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>; // inherited from NSAccessibility

	setAccessibilityDecrementButton(_: any)

	accessibilityDecrementButton: any; // inherited from NSAccessibility

	setAccessibilityDefaultButton(_: any)

	accessibilityDefaultButton: any; // inherited from NSAccessibility

	setAccessibilityDisclosed(_: boolean)

	isAccessibilityDisclosed: boolean; // inherited from NSAccessibility

	setAccessibilityDisclosedByRow(_: any)

	accessibilityDisclosedByRow: any; // inherited from NSAccessibility

	setAccessibilityDisclosedRows(_: any)

	accessibilityDisclosedRows: any; // inherited from NSAccessibility

	setAccessibilityDisclosureLevel(_: number)

	accessibilityDisclosureLevel: number; // inherited from NSAccessibility

	setAccessibilityDocument(_: string)

	accessibilityDocument: string; // inherited from NSAccessibility

	setAccessibilityEdited(_: boolean)

	isAccessibilityEdited: boolean; // inherited from NSAccessibility

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean; // inherited from NSAccessibility

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean; // inherited from NSAccessibility

	setAccessibilityExpanded(_: boolean)

	isAccessibilityExpanded: boolean; // inherited from NSAccessibility

	setAccessibilityExtrasMenuBar(_: any)

	accessibilityExtrasMenuBar: any; // inherited from NSAccessibility

	setAccessibilityFilename(_: string)

	accessibilityFilename: string; // inherited from NSAccessibility

	setAccessibilityFocused(_: boolean)

	isAccessibilityFocused: boolean; // inherited from NSAccessibility

	setAccessibilityFocusedWindow(_: any)

	accessibilityFocusedWindow: any; // inherited from NSAccessibility

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect; // inherited from NSAccessibility

	setAccessibilityFrontmost(_: boolean)

	isAccessibilityFrontmost: boolean; // inherited from NSAccessibility

	setAccessibilityFullScreenButton(_: any)

	accessibilityFullScreenButton: any; // inherited from NSAccessibility

	setAccessibilityGrowArea(_: any)

	accessibilityGrowArea: any; // inherited from NSAccessibility

	setAccessibilityHandles(_: NSArray<any>)

	accessibilityHandles: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityHeader(_: any)

	accessibilityHeader: any; // inherited from NSAccessibility

	setAccessibilityHelp(_: string)

	accessibilityHelp: string; // inherited from NSAccessibility

	setAccessibilityHidden(_: boolean)

	isAccessibilityHidden: boolean; // inherited from NSAccessibility

	setAccessibilityHorizontalScrollBar(_: any)

	accessibilityHorizontalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityHorizontalUnitDescription(_: string)

	accessibilityHorizontalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityHorizontalUnits(_: NSAccessibilityUnits)

	accessibilityHorizontalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityIdentifier(_: string)

	accessibilityIdentifier: string; // inherited from NSAccessibility

	setAccessibilityIncrementButton(_: any)

	accessibilityIncrementButton: any; // inherited from NSAccessibility

	setAccessibilityIndex(_: number)

	accessibilityIndex: number; // inherited from NSAccessibility

	setAccessibilityInsertionPointLineNumber(_: number)

	accessibilityInsertionPointLineNumber: number; // inherited from NSAccessibility

	setAccessibilityLabel(_: string)

	accessibilityLabel: string; // inherited from NSAccessibility

	setAccessibilityLabelUIElements(_: NSArray<any>)

	accessibilityLabelUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityLabelValue(_: number)

	accessibilityLabelValue: number; // inherited from NSAccessibility

	setAccessibilityLinkedUIElements(_: NSArray<any>)

	accessibilityLinkedUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMain(_: boolean)

	isAccessibilityMain: boolean; // inherited from NSAccessibility

	setAccessibilityMainWindow(_: any)

	accessibilityMainWindow: any; // inherited from NSAccessibility

	setAccessibilityMarkerGroupUIElement(_: any)

	accessibilityMarkerGroupUIElement: any; // inherited from NSAccessibility

	setAccessibilityMarkerTypeDescription(_: string)

	accessibilityMarkerTypeDescription: string; // inherited from NSAccessibility

	setAccessibilityMarkerUIElements(_: NSArray<any>)

	accessibilityMarkerUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityMarkerValues(_: any)

	accessibilityMarkerValues: any; // inherited from NSAccessibility

	setAccessibilityMaxValue(_: any)

	accessibilityMaxValue: any; // inherited from NSAccessibility

	setAccessibilityMenuBar(_: any)

	accessibilityMenuBar: any; // inherited from NSAccessibility

	setAccessibilityMinValue(_: any)

	accessibilityMinValue: any; // inherited from NSAccessibility

	setAccessibilityMinimizeButton(_: any)

	accessibilityMinimizeButton: any; // inherited from NSAccessibility

	setAccessibilityMinimized(_: boolean)

	isAccessibilityMinimized: boolean; // inherited from NSAccessibility

	setAccessibilityModal(_: boolean)

	isAccessibilityModal: boolean; // inherited from NSAccessibility

	setAccessibilityNextContents(_: NSArray<any>)

	accessibilityNextContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityNumberOfCharacters(_: number)

	accessibilityNumberOfCharacters: number; // inherited from NSAccessibility

	setAccessibilityOrderedByRow(_: boolean)

	isAccessibilityOrderedByRow: boolean; // inherited from NSAccessibility

	setAccessibilityOrientation(_: NSAccessibilityOrientation)

	accessibilityOrientation: NSAccessibilityOrientation; // inherited from NSAccessibility

	setAccessibilityOverflowButton(_: any)

	accessibilityOverflowButton: any; // inherited from NSAccessibility

	setAccessibilityParent(_: any)

	accessibilityParent: any; // inherited from NSAccessibility

	setAccessibilityPlaceholderValue(_: string)

	accessibilityPlaceholderValue: string; // inherited from NSAccessibility

	setAccessibilityPreviousContents(_: NSArray<any>)

	accessibilityPreviousContents: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityProtectedContent(_: boolean)

	isAccessibilityProtectedContent: boolean; // inherited from NSAccessibility

	setAccessibilityProxy(_: any)

	accessibilityProxy: any; // inherited from NSAccessibility

	setAccessibilityRequired(_: boolean)

	isAccessibilityRequired: boolean; // inherited from NSAccessibility

	setAccessibilityRole(_: string)

	accessibilityRole: string; // inherited from NSAccessibility

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string; // inherited from NSAccessibility

	setAccessibilityRowCount(_: number)

	accessibilityRowCount: number; // inherited from NSAccessibility

	setAccessibilityRowHeaderUIElements(_: NSArray<any>)

	accessibilityRowHeaderUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRowIndexRange(_: NSRange)

	accessibilityRowIndexRange: NSRange; // inherited from NSAccessibility

	setAccessibilityRows(_: NSArray<any>)

	accessibilityRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityRulerMarkerType(_: NSAccessibilityRulerMarkerType)

	accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType; // inherited from NSAccessibility

	setAccessibilitySearchButton(_: any)

	accessibilitySearchButton: any; // inherited from NSAccessibility

	setAccessibilitySearchMenu(_: any)

	accessibilitySearchMenu: any; // inherited from NSAccessibility

	setAccessibilitySelected(_: boolean)

	isAccessibilitySelected: boolean; // inherited from NSAccessibility

	setAccessibilitySelectedCells(_: NSArray<any>)

	accessibilitySelectedCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedChildren(_: NSArray<any>)

	accessibilitySelectedChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedColumns(_: NSArray<any>)

	accessibilitySelectedColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedRows(_: NSArray<any>)

	accessibilitySelectedRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySelectedText(_: string)

	accessibilitySelectedText: string; // inherited from NSAccessibility

	setAccessibilitySelectedTextRange(_: NSRange)

	accessibilitySelectedTextRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)

	accessibilitySelectedTextRanges: NSArray<NSValue>; // inherited from NSAccessibility

	setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)

	accessibilityServesAsTitleForUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedCharacterRange(_: NSRange)

	accessibilitySharedCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilitySharedFocusElements(_: NSArray<any>)

	accessibilitySharedFocusElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySharedTextUIElements(_: NSArray<any>)

	accessibilitySharedTextUIElements: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityShownMenu(_: any)

	accessibilityShownMenu: any; // inherited from NSAccessibility

	setAccessibilitySortDirection(_: NSAccessibilitySortDirection)

	accessibilitySortDirection: NSAccessibilitySortDirection; // inherited from NSAccessibility

	setAccessibilitySplitters(_: NSArray<any>)

	accessibilitySplitters: NSArray<any>; // inherited from NSAccessibility

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string; // inherited from NSAccessibility

	setAccessibilityTabs(_: NSArray<any>)

	accessibilityTabs: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityTitle(_: string)

	accessibilityTitle: string; // inherited from NSAccessibility

	setAccessibilityTitleUIElement(_: any)

	accessibilityTitleUIElement: any; // inherited from NSAccessibility

	setAccessibilityToolbarButton(_: any)

	accessibilityToolbarButton: any; // inherited from NSAccessibility

	setAccessibilityTopLevelUIElement(_: any)

	accessibilityTopLevelUIElement: any; // inherited from NSAccessibility

	setAccessibilityURL(_: NSURL)

	accessibilityURL: NSURL; // inherited from NSAccessibility

	setAccessibilityUnitDescription(_: string)

	accessibilityUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityUnits(_: NSAccessibilityUnits)

	accessibilityUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityValue(_: any)

	accessibilityValue: any; // inherited from NSAccessibility

	setAccessibilityValueDescription(_: string)

	accessibilityValueDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalScrollBar(_: any)

	accessibilityVerticalScrollBar: any; // inherited from NSAccessibility

	setAccessibilityVerticalUnitDescription(_: string)

	accessibilityVerticalUnitDescription: string; // inherited from NSAccessibility

	setAccessibilityVerticalUnits(_: NSAccessibilityUnits)

	accessibilityVerticalUnits: NSAccessibilityUnits; // inherited from NSAccessibility

	setAccessibilityVisibleCells(_: NSArray<any>)

	accessibilityVisibleCells: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleCharacterRange(_: NSRange)

	accessibilityVisibleCharacterRange: NSRange; // inherited from NSAccessibility

	setAccessibilityVisibleChildren(_: NSArray<any>)

	accessibilityVisibleChildren: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleColumns(_: NSArray<any>)

	accessibilityVisibleColumns: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityVisibleRows(_: NSArray<any>)

	accessibilityVisibleRows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityWarningValue(_: any)

	accessibilityWarningValue: any; // inherited from NSAccessibility

	setAccessibilityWindow(_: any)

	accessibilityWindow: any; // inherited from NSAccessibility

	setAccessibilityWindows(_: NSArray<any>)

	accessibilityWindows: NSArray<any>; // inherited from NSAccessibility

	setAccessibilityZoomButton(_: any)

	accessibilityZoomButton: any; // inherited from NSAccessibility

	setAnimations(_: NSDictionary<string, any>)

	animations: NSDictionary<string, any>; // inherited from NSAnimatablePropertyContainer

	setAppearance(_: NSAppearance)

	appearance: NSAppearance; // inherited from NSAppearanceCustomization

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly effectiveAppearance: NSAppearance; // inherited from NSAppearanceCustomization

	readonly hash: number; // inherited from NSObjectProtocol

	setIdentifier(_: string)

	identifier: string; // inherited from NSUserInterfaceItemIdentification

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(contentRect: CGRect, styleMask: NSWindowStyleMask, backing: NSBackingStoreType, defer: boolean);

	static create(contentRect: CGRect, styleMask: NSWindowStyleMask, backing: NSBackingStoreType, defer: boolean, screen: NSScreen);

	static create(windowRef: any);

	accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;

	accessibilityCellForColumnRow(_: number, row: number): any;

	accessibilityFrame(): CGRect;

	accessibilityFrameForRange(_: NSRange): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLayoutPointForScreenPoint(_: CGPoint): CGPoint;

	accessibilityLayoutSizeForScreenSize(_: CGSize): CGSize;

	accessibilityLineForIndex(_: number): number;

	accessibilityParent(): any;

	accessibilityPerformCancel(): boolean;

	accessibilityPerformConfirm(): boolean;

	accessibilityPerformDecrement(): boolean;

	accessibilityPerformDelete(): boolean;

	accessibilityPerformIncrement(): boolean;

	accessibilityPerformPick(): boolean;

	accessibilityPerformPress(): boolean;

	accessibilityPerformRaise(): boolean;

	accessibilityPerformShowAlternateUI(): boolean;

	accessibilityPerformShowDefaultUI(): boolean;

	accessibilityPerformShowMenu(): boolean;

	accessibilityRTFForRange(_: NSRange): NSData;

	accessibilityRangeForIndex(_: number): NSRange;

	accessibilityRangeForLine(_: number): NSRange;

	accessibilityRangeForPosition(_: CGPoint): NSRange;

	accessibilityScreenPointForLayoutPoint(_: CGPoint): CGPoint;

	accessibilityScreenSizeForLayoutSize(_: CGSize): CGSize;

	accessibilityStringForRange(_: NSRange): string;

	accessibilityStyleRangeForIndex(_: number): NSRange;

	addChildWindowOrdered(_: NSWindow, ordered: NSWindowOrderingMode): void;

	addTabbedWindowOrdered(_: NSWindow, ordered: NSWindowOrderingMode): void;

	addTitlebarAccessoryViewController(_: NSTitlebarAccessoryViewController): void;

	anchorAttributeForOrientation(for_: NSLayoutConstraintOrientation): NSLayoutAttribute;

	animationForKey(forKey: string): any;

	animationResizeTime(_: CGRect): number;

	animator(): this;

	autorecalculatesContentBorderThicknessForEdge(for_: NSRectEdge): boolean;

	backingAlignedRectOptions(_: CGRect, options: NSAlignmentOptions): CGRect;

	becomeKeyWindow(): void;

	becomeMainWindow(): void;

	beginCriticalSheetCompletionHandler(_: NSWindow, completionHandler?: (p1: number) => void): void;

	beginSheetCompletionHandler(_: NSWindow, completionHandler?: (p1: number) => void): void;

	canRepresentDisplayGamut(_: NSDisplayGamut): boolean;

	cascadeTopLeftFromPoint(from: CGPoint): CGPoint;

	center(): void;

	close(): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	constrainFrameRectToScreen(_: CGRect, to?: NSScreen): CGRect;

	contentBorderThicknessForEdge(for_: NSRectEdge): number;

	contentRectForFrameRect(forFrameRect: CGRect): CGRect;

	convertPointFromBacking(_: CGPoint): CGPoint;

	convertPointFromScreen(fromScreen: CGPoint): CGPoint;

	convertPointToBacking(_: CGPoint): CGPoint;

	convertPointToScreen(toScreen: CGPoint): CGPoint;

	convertRectFromBacking(_: CGRect): CGRect;

	convertRectFromScreen(_: CGRect): CGRect;

	convertRectToBacking(_: CGRect): CGRect;

	convertRectToScreen(_: CGRect): CGRect;

	dataWithEPSInsideRect(inside: CGRect): NSData;

	dataWithPDFInsideRect(inside: CGRect): NSData;

	deminiaturize(_?: any): void;

	disableCursorRects(): void;

	disableKeyEquivalentForDefaultButtonCell(): void;

	disableScreenUpdatesUntilFlush(): void;

	disableSnapshotRestoration(): void;

	discardCursorRects(): void;

	discardEventsMatchingMaskBeforeEvent(matching: NSEventMask, before?: NSEvent): void;

	display(): void;

	displayIfNeeded(): void;

	dragImageAtOffsetEventPasteboardSourceSlideBack(_: NSImage, at: CGPoint, offset: CGSize, event: NSEvent, pasteboard: NSPasteboard, source: any, slideBack: boolean): void;

	enableCursorRects(): void;

	enableKeyEquivalentForDefaultButtonCell(): void;

	enableSnapshotRestoration(): void;

	endEditingFor(for_?: any): void;

	endSheet(_: NSWindow): void;

	endSheetReturnCode(_: NSWindow, returnCode: number): void;

	fieldEditorForObject(_: boolean, for_?: any): NSText;

	frameRectForContentRect(forContentRect: CGRect): CGRect;

	handleCloseScriptCommand(_: NSCloseCommand): any;

	handlePrintScriptCommand(_: NSScriptCommand): any;

	handleSaveScriptCommand(_: NSScriptCommand): any;

	insertTitlebarAccessoryViewControllerAtIndex(_: NSTitlebarAccessoryViewController, at: number): void;

	invalidateCursorRectsForView(for_: NSView): void;

	invalidateShadow(): void;

	isAccessibilityFocused(): boolean;

	isAccessibilitySelectorAllowed(_: string): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	layoutIfNeeded(): void;

	makeFirstResponder(_?: NSResponder): boolean;

	makeKeyAndOrderFront(_?: any): void;

	makeKeyWindow(): void;

	makeMainWindow(): void;

	mergeAllWindows(_?: any): void;

	miniaturize(_?: any): void;

	moveTabToNewWindow(_?: any): void;

	nextEventMatchingMask(matching: NSEventMask): NSEvent;

	nextEventMatchingMaskUntilDateInModeDequeue(matching: NSEventMask, until?: Date, inMode: string, dequeue: boolean): NSEvent;

	orderBack(_?: any): void;

	orderFront(_?: any): void;

	orderFrontRegardless(): void;

	orderOut(_?: any): void;

	orderWindowRelativeTo(_: NSWindowOrderingMode, relativeTo: number): void;

	performClose(_?: any): void;

	performMiniaturize(_?: any): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	performWindowDragWithEvent(with_: NSEvent): void;

	performZoom(_?: any): void;

	postEventAtStart(_: NSEvent, atStart: boolean): void;

	print(_?: any): void;

	recalculateKeyViewLoop(): void;

	registerForDraggedTypes(_: NSArray<string>): void;

	removeChildWindow(_: NSWindow): void;

	removeTitlebarAccessoryViewControllerAtIndex(at: number): void;

	resetCursorRects(): void;

	resignKeyWindow(): void;

	resignMainWindow(): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	runToolbarCustomizationPalette(_?: any): void;

	saveFrameUsingName(usingName: string): void;

	selectKeyViewFollowingView(following: NSView): void;

	selectKeyViewPrecedingView(preceding: NSView): void;

	selectNextKeyView(_?: any): void;

	selectNextTab(_?: any): void;

	selectPreviousKeyView(_?: any): void;

	selectPreviousTab(_?: any): void;

	self(): this;

	sendEvent(_: NSEvent): void;

	setAnchorAttributeForOrientation(_: NSLayoutAttribute, for_: NSLayoutConstraintOrientation): void;

	setAutorecalculatesContentBorderThicknessForEdge(_: boolean, for_: NSRectEdge): void;

	setContentBorderThicknessForEdge(_: number, for_: NSRectEdge): void;

	setContentSize(_: CGSize): void;

	setDynamicDepthLimit(_: boolean): void;

	setFrameDisplay(_: CGRect, display: boolean): void;

	setFrameDisplayAnimate(_: CGRect, display: boolean, animate: boolean): void;

	setFrameAutosaveName(_: string): boolean;

	setFrameFromString(from: string): void;

	setFrameOrigin(_: CGPoint): void;

	setFrameTopLeftPoint(_: CGPoint): void;

	setFrameUsingName(_: string): boolean;

	setFrameUsingNameForce(_: string, force: boolean): boolean;

	setIsMiniaturized(_: boolean): void;

	setIsVisible(_: boolean): void;

	setIsZoomed(_: boolean): void;

	setTitleWithRepresentedFilename(_: string): void;

	standardWindowButton(_: NSWindowButton): NSButton;

	toggleFullScreen(_?: any): void;

	toggleTabBar(_?: any): void;

	toggleTabOverview(_?: any): void;

	toggleToolbarShown(_?: any): void;

	trackEventsMatchingMaskTimeoutModeHandler(matching: NSEventMask, timeout: number, mode: string, handler?: (p1: NSEvent, p2: boolean) => void): void;

	unregisterDraggedTypes(): void;

	update(): void;

	updateConstraintsIfNeeded(): void;

	validateMenuItem(_: NSMenuItem): boolean;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;

	visualizeConstraints(_?: NSArray<NSLayoutConstraint>): void;

	zoom(_?: any): void;
}

enum NSWindowAnimationBehavior {

	Default = 0,

	None = 2,

	DocumentWindow = 3,

	UtilityWindow = 4,

	AlertPanel = 5
}

globalThis.NSWindowAnimationBehavior = NSWindowAnimationBehavior;

enum NSWindowButton {

	CloseButton = 0,

	MiniaturizeButton = 1,

	ZoomButton = 2,

	ToolbarButton = 3,

	DocumentIconButton = 4,

	DocumentVersionsButton = 6
}

globalThis.NSWindowButton = NSWindowButton;

enum NSWindowCollectionBehavior {

	Default = 0,

	CanJoinAllSpaces = 1,

	MoveToActiveSpace = 2,

	Managed = 4,

	Transient = 8,

	Stationary = 16,

	ParticipatesInCycle = 32,

	IgnoresCycle = 64,

	FullScreenPrimary = 128,

	FullScreenAuxiliary = 256,

	FullScreenNone = 512,

	FullScreenAllowsTiling = 2048,

	FullScreenDisallowsTiling = 4096
}

globalThis.NSWindowCollectionBehavior = NSWindowCollectionBehavior;

declare class NSWindowController extends NSResponder implements NSSeguePerforming {

	setContentViewController(_: NSViewController)

	contentViewController: NSViewController;

	setDocument(_: any)

	document: any;

	readonly owner: any;

	setShouldCascadeWindows(_: boolean)

	shouldCascadeWindows: boolean;

	setShouldCloseDocument(_: boolean)

	shouldCloseDocument: boolean;

	readonly storyboard: NSStoryboard;

	setWindow(_: NSWindow)

	window: NSWindow;

	setWindowFrameAutosaveName(_: string)

	windowFrameAutosaveName: string;

	readonly isWindowLoaded: boolean;

	readonly windowNibName: string;

	readonly windowNibPath: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create(window: NSWindow);

	static create(windowNibName: string);

	static create(windowNibName: string, owner: any);

	static create(windowNibPath: string, owner: any);

	close(): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	dismissController(_?: any): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	loadWindow(): void;

	performSegueWithIdentifierSender(withIdentifier: string, sender?: any): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	prepareForSegueSender(for_: NSStoryboardSegue, sender?: any): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setDocumentEdited(_: boolean): void;

	shouldPerformSegueWithIdentifierSender(withIdentifier: string, sender?: any): boolean;

	showWindow(_?: any): void;

	synchronizeWindowTitleWithDocumentName(): void;

	windowDidLoad(): void;

	windowTitleForDocumentDisplayName(forDocumentDisplayName: string): string;

	windowWillLoad(): void;
}

interface NSWindowDelegate extends NSObjectProtocol {

	customWindowsToEnterFullScreenForWindow?(for_: NSWindow): NSArray<NSWindow>;

	customWindowsToEnterFullScreenForWindowOnScreen?(for_: NSWindow, on: NSScreen): NSArray<NSWindow>;

	customWindowsToExitFullScreenForWindow?(for_: NSWindow): NSArray<NSWindow>;

	windowWillPositionSheetUsingRect?(_: NSWindow, willPositionSheet: NSWindow, using: CGRect): CGRect;

	windowShouldDragDocumentWithEventFromWithPasteboard?(_: NSWindow, shouldDragDocumentWith: NSEvent, from: CGPoint, with_: NSPasteboard): boolean;

	windowStartCustomAnimationToEnterFullScreenOnScreenWithDuration?(_: NSWindow, startCustomAnimationToEnterFullScreenOn: NSScreen, withDuration: number): void;

	windowDidDecodeRestorableState?(_: NSWindow, didDecodeRestorableState: NSCoder): void;

	windowShouldPopUpDocumentPathMenu?(_: NSWindow, shouldPopUpDocumentPathMenu: NSMenu): boolean;

	windowStartCustomAnimationToEnterFullScreenWithDuration?(_: NSWindow, startCustomAnimationToEnterFullScreenWithDuration: number): void;

	windowStartCustomAnimationToExitFullScreenWithDuration?(_: NSWindow, startCustomAnimationToExitFullScreenWithDuration: number): void;

	windowWillEncodeRestorableState?(_: NSWindow, willEncodeRestorableState: NSCoder): void;

	windowWillResizeForVersionBrowserWithMaxPreferredSizeMaxAllowedSize?(_: NSWindow, willResizeForVersionBrowserWithMaxPreferredSize: CGSize, maxAllowedSize: CGSize): CGSize;

	windowWillUseFullScreenContentSize?(_: NSWindow, willUseFullScreenContentSize: CGSize): CGSize;

	windowWillUseFullScreenPresentationOptions?(_: NSWindow, willUseFullScreenPresentationOptions: NSApplicationPresentationOptions): NSApplicationPresentationOptions;

	windowDidBecomeKey?(_: NSNotification): void;

	windowDidBecomeMain?(_: NSNotification): void;

	windowDidChangeBackingProperties?(_: NSNotification): void;

	windowDidChangeOcclusionState?(_: NSNotification): void;

	windowDidChangeScreen?(_: NSNotification): void;

	windowDidChangeScreenProfile?(_: NSNotification): void;

	windowDidDeminiaturize?(_: NSNotification): void;

	windowDidEndLiveResize?(_: NSNotification): void;

	windowDidEndSheet?(_: NSNotification): void;

	windowDidEnterFullScreen?(_: NSNotification): void;

	windowDidEnterVersionBrowser?(_: NSNotification): void;

	windowDidExitFullScreen?(_: NSNotification): void;

	windowDidExitVersionBrowser?(_: NSNotification): void;

	windowDidExpose?(_: NSNotification): void;

	windowDidFailToEnterFullScreen?(_: NSWindow): void;

	windowDidFailToExitFullScreen?(_: NSWindow): void;

	windowDidMiniaturize?(_: NSNotification): void;

	windowDidMove?(_: NSNotification): void;

	windowDidResignKey?(_: NSNotification): void;

	windowDidResignMain?(_: NSNotification): void;

	windowDidResize?(_: NSNotification): void;

	windowDidUpdate?(_: NSNotification): void;

	windowShouldClose?(_: NSWindow): boolean;

	windowShouldZoomToFrame?(_: NSWindow, toFrame: CGRect): boolean;

	windowWillBeginSheet?(_: NSNotification): void;

	windowWillClose?(_: NSNotification): void;

	windowWillEnterFullScreen?(_: NSNotification): void;

	windowWillEnterVersionBrowser?(_: NSNotification): void;

	windowWillExitFullScreen?(_: NSNotification): void;

	windowWillExitVersionBrowser?(_: NSNotification): void;

	windowWillMiniaturize?(_: NSNotification): void;

	windowWillMove?(_: NSNotification): void;

	windowWillResizeToSize?(_: NSWindow, to: CGSize): CGSize;

	windowWillReturnFieldEditorToObject?(_: NSWindow, to?: any): any;

	windowWillReturnUndoManager?(_: NSWindow): NSUndoManager;

	windowWillStartLiveResize?(_: NSNotification): void;

	windowWillUseStandardFrameDefaultFrame?(_: NSWindow, defaultFrame: CGRect): CGRect;
}
declare var NSWindowDelegate: {

	prototype: NSWindowDelegate;
};

enum NSWindowDepth {

	TwentyfourBitRGB = 520,

	SixtyfourBitRGB = 528,

	OnehundredtwentyeightBitRGB = 544
}

globalThis.NSWindowDepth = NSWindowDepth;

declare var NSWindowDidBecomeKeyNotification: string;

declare var NSWindowDidBecomeMainNotification: string;

declare var NSWindowDidChangeBackingPropertiesNotification: string;

declare var NSWindowDidChangeOcclusionStateNotification: string;

declare var NSWindowDidChangeScreenNotification: string;

declare var NSWindowDidChangeScreenProfileNotification: string;

declare var NSWindowDidDeminiaturizeNotification: string;

declare var NSWindowDidEndLiveResizeNotification: string;

declare var NSWindowDidEndSheetNotification: string;

declare var NSWindowDidEnterFullScreenNotification: string;

declare var NSWindowDidEnterVersionBrowserNotification: string;

declare var NSWindowDidExitFullScreenNotification: string;

declare var NSWindowDidExitVersionBrowserNotification: string;

declare var NSWindowDidExposeNotification: string;

declare var NSWindowDidMiniaturizeNotification: string;

declare var NSWindowDidMoveNotification: string;

declare var NSWindowDidResignKeyNotification: string;

declare var NSWindowDidResignMainNotification: string;

declare var NSWindowDidResizeNotification: string;

declare var NSWindowDidUpdateNotification: string;

enum NSWindowListOptions {

	OrderedFrontToBack = 1
}

globalThis.NSWindowListOptions = NSWindowListOptions;

enum NSWindowNumberListOptions {

	AllApplications = 1,

	AllSpaces = 16
}

globalThis.NSWindowNumberListOptions = NSWindowNumberListOptions;

enum NSWindowOcclusionState {

	Visible = 2
}

globalThis.NSWindowOcclusionState = NSWindowOcclusionState;

enum NSWindowOrderingMode {

	Above = 1,

	Below = -1,

	Out = 0
}

globalThis.NSWindowOrderingMode = NSWindowOrderingMode;

interface NSWindowRestoration extends NSObjectProtocol {
}
declare var NSWindowRestoration: {

	prototype: NSWindowRestoration;

	restoreWindowWithIdentifierStateCompletionHandler(withIdentifier: string, state: NSCoder, completionHandler?: (p1: NSWindow, p2: NSError) => void): void;
};

declare var NSWindowServerCommunicationException: string;

enum NSWindowSharingType {

	None = 0,

	ReadOnly = 1,

	ReadWrite = 2
}

globalThis.NSWindowSharingType = NSWindowSharingType;

enum NSWindowStyleMask {

	Borderless = 0,

	Titled = 1,

	Closable = 2,

	Miniaturizable = 4,

	Resizable = 8,

	TexturedBackground = 256,

	UnifiedTitleAndToolbar = 4096,

	FullScreen = 16384,

	FullSizeContentView = 32768,

	UtilityWindow = 16,

	DocModalWindow = 64,

	NonactivatingPanel = 128,

	HUDWindow = 8192
}

globalThis.NSWindowStyleMask = NSWindowStyleMask;

declare class NSWindowTab extends NSObject {

	setAccessoryView(_: NSView)

	accessoryView: NSView;

	setAttributedTitle(_: NSAttributedString)

	attributedTitle: NSAttributedString;

	setTitle(_: string)

	title: string;

	setToolTip(_: string)

	toolTip: string;
}

declare class NSWindowTabGroup extends NSObject {

	readonly identifier: string;

	setOverviewVisible(_: boolean)

	isOverviewVisible: boolean;

	setSelectedWindow(_: NSWindow)

	selectedWindow: NSWindow;

	readonly isTabBarVisible: boolean;

	readonly windows: NSArray<NSWindow>;

	addWindow(_: NSWindow): void;

	insertWindowAtIndex(_: NSWindow, at: number): void;

	removeWindow(_: NSWindow): void;
}

enum NSWindowTabbingMode {

	Automatic = 0,

	Preferred = 1,

	Disallowed = 2
}

globalThis.NSWindowTabbingMode = NSWindowTabbingMode;

enum NSWindowTitleVisibility {

	Visible = 0,

	Hidden = 1
}

globalThis.NSWindowTitleVisibility = NSWindowTitleVisibility;

enum NSWindowUserTabbingPreference {

	Manual = 0,

	Always = 1,

	InFullScreen = 2
}

globalThis.NSWindowUserTabbingPreference = NSWindowUserTabbingPreference;

declare var NSWindowWillBeginSheetNotification: string;

declare var NSWindowWillCloseNotification: string;

declare var NSWindowWillEnterFullScreenNotification: string;

declare var NSWindowWillEnterVersionBrowserNotification: string;

declare var NSWindowWillExitFullScreenNotification: string;

declare var NSWindowWillExitVersionBrowserNotification: string;

declare var NSWindowWillMiniaturizeNotification: string;

declare var NSWindowWillMoveNotification: string;

declare var NSWindowWillStartLiveResizeNotification: string;

declare var NSWordMLTextDocumentType: string;

declare var NSWordTablesReadException: string;

declare var NSWordTablesWriteException: string;

declare class NSWorkspace extends NSObject {

	readonly accessibilityDisplayShouldDifferentiateWithoutColor: boolean;

	readonly accessibilityDisplayShouldIncreaseContrast: boolean;

	readonly accessibilityDisplayShouldInvertColors: boolean;

	readonly accessibilityDisplayShouldReduceMotion: boolean;

	readonly accessibilityDisplayShouldReduceTransparency: boolean;

	readonly fileLabelColors: NSArray<NSColor>;

	readonly fileLabels: NSArray<string>;

	readonly frontmostApplication: NSRunningApplication;

	readonly menuBarOwningApplication: NSRunningApplication;

	readonly notificationCenter: NSNotificationCenter;

	readonly runningApplications: NSArray<NSRunningApplication>;

	readonly isSwitchControlEnabled: boolean;

	readonly isVoiceOverEnabled: boolean;

	static sharedWorkspace(): NSWorkspace;

	URLForApplicationToOpenURL(toOpen: NSURL): NSURL;

	URLForApplicationWithBundleIdentifier(withBundleIdentifier: string): NSURL;

	absolutePathForAppBundleWithIdentifier(withBundleIdentifier: string): string;

	activateFileViewerSelectingURLs(_: NSArray<NSURL>): void;

	desktopImageOptionsForScreen(for_: NSScreen): NSDictionary<string, any>;

	desktopImageURLForScreen(for_: NSScreen): NSURL;

	duplicateURLsCompletionHandler(_: NSArray<NSURL>, completionHandler?: (p1: NSDictionary<NSURL, NSURL>, p2: NSError) => void): void;

	extendPowerOffBy(by: number): number;

	fullPathForApplication(forApplication: string): string;

	getFileSystemInfoForPathIsRemovableIsWritableIsUnmountableDescriptionType(forPath: string, isRemovable?: boolean, isWritable?: boolean, isUnmountable?: boolean, description?: string, type?: string): boolean;

	hideOtherApplications(): void;

	iconForFile(forFile: string): NSImage;

	iconForFileType(forFileType: string): NSImage;

	iconForFiles(forFiles: NSArray<string>): NSImage;

	isFilePackageAtPath(atPath: string): boolean;

	launchAppWithBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifier(withBundleIdentifier: string, options: NSWorkspaceLaunchOptions, additionalEventParamDescriptor?: NSAppleEventDescriptor, launchIdentifier?: number): boolean;

	launchApplicationAtURLOptionsConfigurationError(options: NSURL, configuration: NSWorkspaceLaunchOptions, error: NSDictionary<string, any>): NSRunningApplication;

	localizedDescriptionForType(forType: string): string;

	noteFileSystemChanged(_: string): void;

	openApplicationAtURLConfigurationCompletionHandler(at: NSURL, configuration: NSWorkspaceOpenConfiguration, completionHandler?: (p1: NSRunningApplication, p2: NSError) => void): void;

	openURL(_: NSURL): boolean;

	openURLConfigurationCompletionHandler(_: NSURL, configuration: NSWorkspaceOpenConfiguration, completionHandler?: (p1: NSRunningApplication, p2: NSError) => void): void;

	openURLOptionsConfigurationError(options: NSURL, configuration: NSWorkspaceLaunchOptions, error: NSDictionary<string, any>): NSRunningApplication;

	openURLsWithAppBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifiers(_: NSArray<NSURL>, withAppBundleIdentifier?: string, options: NSWorkspaceLaunchOptions, additionalEventParamDescriptor?: NSAppleEventDescriptor, launchIdentifiers?: NSArray<number>): boolean;

	openURLsWithApplicationAtURLConfigurationCompletionHandler(_: NSArray<NSURL>, withApplicationAt: NSURL, configuration: NSWorkspaceOpenConfiguration, completionHandler?: (p1: NSRunningApplication, p2: NSError) => void): void;

	openURLsWithApplicationAtURLOptionsConfigurationError(withApplicationAtURL: NSArray<NSURL>, options: NSURL, configuration: NSWorkspaceLaunchOptions, error: NSDictionary<string, any>): NSRunningApplication;

	preferredFilenameExtensionForType(forType: string): string;

	recycleURLsCompletionHandler(_: NSArray<NSURL>, completionHandler?: (p1: NSDictionary<NSURL, NSURL>, p2: NSError) => void): void;

	requestAuthorizationOfTypeCompletionHandler(to: NSWorkspaceAuthorizationType, completionHandler?: (p1: NSWorkspaceAuthorization, p2: NSError) => void): void;

	selectFileInFileViewerRootedAtPath(_?: string, inFileViewerRootedAtPath: string): boolean;

	setDesktopImageURLForScreenOptionsError(forScreen: NSURL, options: NSScreen, error: NSDictionary<string, any>): boolean;

	setIconForFileOptions(_?: NSImage, forFile: string, options: NSWorkspaceIconCreationOptions): boolean;

	showSearchResultsForQueryString(forQueryString: string): boolean;

	typeOfFileError(error: string): string;

	unmountAndEjectDeviceAtPath(atPath: string): boolean;

	unmountAndEjectDeviceAtURLError(error: NSURL): boolean;
}

declare var NSWorkspaceAccessibilityDisplayOptionsDidChangeNotification: string;

declare var NSWorkspaceActiveSpaceDidChangeNotification: string;

declare var NSWorkspaceApplicationKey: string;

declare class NSWorkspaceAuthorization extends NSObject {
}

declare const NSWorkspaceAuthorizationInvalidError: number;

enum NSWorkspaceAuthorizationType {

	CreateSymbolicLink = 0,

	SetAttributes = 1,

	ReplaceFile = 2
}

globalThis.NSWorkspaceAuthorizationType = NSWorkspaceAuthorizationType;

declare var NSWorkspaceDesktopImageAllowClippingKey: string;

declare var NSWorkspaceDesktopImageFillColorKey: string;

declare var NSWorkspaceDesktopImageScalingKey: string;

declare var NSWorkspaceDidActivateApplicationNotification: string;

declare var NSWorkspaceDidChangeFileLabelsNotification: string;

declare var NSWorkspaceDidDeactivateApplicationNotification: string;

declare var NSWorkspaceDidHideApplicationNotification: string;

declare var NSWorkspaceDidLaunchApplicationNotification: string;

declare var NSWorkspaceDidMountNotification: string;

declare var NSWorkspaceDidRenameVolumeNotification: string;

declare var NSWorkspaceDidTerminateApplicationNotification: string;

declare var NSWorkspaceDidUnhideApplicationNotification: string;

declare var NSWorkspaceDidUnmountNotification: string;

declare var NSWorkspaceDidWakeNotification: string;

declare const NSWorkspaceErrorMaximum: number;

declare const NSWorkspaceErrorMinimum: number;

enum NSWorkspaceIconCreationOptions {

	ExcludeQuickDrawElementsIconCreationOption = 2,

	Exclude10_4ElementsIconCreationOption = 4
}

globalThis.NSWorkspaceIconCreationOptions = NSWorkspaceIconCreationOptions;

declare var NSWorkspaceLaunchConfigurationAppleEvent: string;

declare var NSWorkspaceLaunchConfigurationArchitecture: string;

declare var NSWorkspaceLaunchConfigurationArguments: string;

declare var NSWorkspaceLaunchConfigurationEnvironment: string;

enum NSWorkspaceLaunchOptions {

	AndPrint = 2,

	WithErrorPresentation = 64,

	InhibitingBackgroundOnly = 128,

	WithoutAddingToRecents = 256,

	WithoutActivation = 512,

	Async = 65536,

	NewInstance = 524288,

	AndHide = 1048576,

	AndHideOthers = 2097152,

	Default = 65536,

	AllowingClassicStartup = 131072,

	PreferringClassic = 262144
}

globalThis.NSWorkspaceLaunchOptions = NSWorkspaceLaunchOptions;

declare class NSWorkspaceOpenConfiguration extends NSObject implements NSCopying {

	static configuration(): NSWorkspaceOpenConfiguration;

	setActivates(_: boolean)

	activates: boolean;

	setAddsToRecentItems(_: boolean)

	addsToRecentItems: boolean;

	setAllowsRunningApplicationSubstitution(_: boolean)

	allowsRunningApplicationSubstitution: boolean;

	setAppleEvent(_: NSAppleEventDescriptor)

	appleEvent: NSAppleEventDescriptor;

	setArchitecture(_: number)

	architecture: number;

	setArguments(_: NSArray<string>)

	arguments: NSArray<string>;

	setCreatesNewApplicationInstance(_: boolean)

	createsNewApplicationInstance: boolean;

	setEnvironment(_: NSDictionary<string, string>)

	environment: NSDictionary<string, string>;

	setForPrinting(_: boolean)

	isForPrinting: boolean;

	setHides(_: boolean)

	hides: boolean;

	setHidesOthers(_: boolean)

	hidesOthers: boolean;

	setPromptsUserIfNeeded(_: boolean)

	promptsUserIfNeeded: boolean;

	setRequiresUniversalLinks(_: boolean)

	requiresUniversalLinks: boolean;

	copyWithZone(_?: any): any;
}

declare var NSWorkspaceScreensDidSleepNotification: string;

declare var NSWorkspaceScreensDidWakeNotification: string;

declare var NSWorkspaceSessionDidBecomeActiveNotification: string;

declare var NSWorkspaceSessionDidResignActiveNotification: string;

declare var NSWorkspaceVolumeLocalizedNameKey: string;

declare var NSWorkspaceVolumeOldLocalizedNameKey: string;

declare var NSWorkspaceVolumeOldURLKey: string;

declare var NSWorkspaceVolumeURLKey: string;

declare var NSWorkspaceWillLaunchApplicationNotification: string;

declare var NSWorkspaceWillPowerOffNotification: string;

declare var NSWorkspaceWillSleepNotification: string;

declare var NSWorkspaceWillUnmountNotification: string;

enum NSWritingDirection {

	Natural = -1,

	LeftToRight = 0,

	RightToLeft = 1
}

globalThis.NSWritingDirection = NSWritingDirection;

declare var NSWritingDirectionAttributeName: string;

enum NSWritingDirectionFormatType {

	Embedding = 0,

	Override = 2
}

globalThis.NSWritingDirectionFormatType = NSWritingDirectionFormatType;

declare var NSYearMonthDatePickerElementFlag: NSDatePickerElementFlags;

declare var NSYearMonthDayDatePickerElementFlag: NSDatePickerElementFlags;

interface _OVFlags {
	unused3: number;
	dataSourceObjectValueByItem: number;
	allowAutomaticAnimations: number;
	dontRedisplayOnFrameChange: number;
	_isSpringLoadingFlashing: number;
	unused2: number;
	delegateShouldAutoExpandItem: number;
	delegateAutoCollapseItem: number;
	delegateAutoExpandItem: number;
	delegateShouldShowOutlineCellForItem: number;
	dataSourceDraggedImageMovedTo: number;
	dataSourceDraggingEndedAt: number;
	reloadingData: number;
	validDataSourceMethods: number;
	numberOfRowsDataExpandEntered: number;
	delayRowEntryFreeDisabled: number;
	delegateHeightOfRowByItem: number;
	animateExpandAndCollapse: number;
	stronglyReferencesItems: number;
	selectionAdjustmentDisabled: number;
	subclassRowForItem: number;
	delegateWillDisplayOutlineCell: number;
	enableExpandNotifications: number;
	autoSaveExpandItems: number;
	autoresizesOutlineColumn: number;
	delegateShouldExpandItem: number;
	delegateShouldCollapseItem: number;
	delegateSelectionShouldChangeInOutlineView: number;
	delegateShouldSelectTableColumn: number;
	delegateShouldSelectItem: number;
	delegateShouldEditTableColumn: number;
	delegateWillDisplayCell: number;
}
declare var _OVFlags: _OVFlags;
