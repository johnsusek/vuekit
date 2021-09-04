
declare class PDFAction extends NSObject implements NSCopying {

	readonly type: string;

	copyWithZone(_?: any): any;
}

declare class PDFActionGoTo extends PDFAction implements NSCopying {

	setDestination(_: PDFDestination)

	destination: PDFDestination;

	static create(destination: PDFDestination);

	copyWithZone(_?: any): any;
}

declare class PDFActionNamed extends PDFAction implements NSCopying {

	setName(_: PDFActionNamedName)

	name: PDFActionNamedName;

	static create(name: PDFActionNamedName);

	copyWithZone(_?: any): any;
}

enum PDFActionNamedName {

	kPDFActionNamedNone = 0,

	kPDFActionNamedNextPage = 1,

	kPDFActionNamedPreviousPage = 2,

	kPDFActionNamedFirstPage = 3,

	kPDFActionNamedLastPage = 4,

	kPDFActionNamedGoBack = 5,

	kPDFActionNamedGoForward = 6,

	kPDFActionNamedGoToPage = 7,

	kPDFActionNamedFind = 8,

	kPDFActionNamedPrint = 9,

	kPDFActionNamedZoomIn = 10,

	kPDFActionNamedZoomOut = 11
}


declare class PDFActionRemoteGoTo extends PDFAction implements NSCopying {

	setURL(_: NSURL)

	URL: NSURL;

	setPageIndex(_: number)

	pageIndex: number;

	setPoint(_: CGPoint)

	point: CGPoint;

	static create(pageIndex: number, atPoint: CGPoint, fileURL: NSURL);

	copyWithZone(_?: any): any;
}

declare class PDFActionResetForm extends PDFAction implements NSCopying {

	setFields(_: NSArray<string>)

	fields: NSArray<string>;

	setFieldsIncludedAreCleared(_: boolean)

	fieldsIncludedAreCleared: boolean;

	copyWithZone(_?: any): any;
}

declare class PDFActionURL extends PDFAction implements NSCopying {

	setURL(_: NSURL)

	URL: NSURL;

	static create(URL: NSURL);

	copyWithZone(_?: any): any;
}

declare class PDFAnnotation extends NSObject implements NSCoding, NSCopying {

	static lineStyleFromName(_: string): PDFLineStyle;

	static nameForLineStyle(_: PDFLineStyle): string;

	setURL(_: NSURL)

	URL: NSURL;

	setAction(_: PDFAction)

	action: PDFAction;

	setAlignment(_: NSTextAlignment)

	alignment: NSTextAlignment;

	setAllowsToggleToOff(_: boolean)

	allowsToggleToOff: boolean;

	readonly annotationKeyValues: NSDictionary<any, any>;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setBorder(_: PDFBorder)

	border: PDFBorder;

	setBounds(_: CGRect)

	bounds: CGRect;

	setButtonWidgetState(_: PDFWidgetCellState)

	buttonWidgetState: PDFWidgetCellState;

	setButtonWidgetStateString(_: string)

	buttonWidgetStateString: string;

	setCaption(_: string)

	caption: string;

	setChoices(_: NSArray<string>)

	choices: NSArray<string>;

	setColor(_: NSColor)

	color: NSColor;

	setComb(_: boolean)

	hasComb: boolean;

	setContents(_: string)

	contents: string;

	setDestination(_: PDFDestination)

	destination: PDFDestination;

	setEndLineStyle(_: PDFLineStyle)

	endLineStyle: PDFLineStyle;

	setEndPoint(_: CGPoint)

	endPoint: CGPoint;

	setFieldName(_: string)

	fieldName: string;

	setFont(_: NSFont)

	font: NSFont;

	setFontColor(_: NSColor)

	fontColor: NSColor;

	readonly hasAppearanceStream: boolean;

	setHighlighted(_: boolean)

	isHighlighted: boolean;

	setIconType(_: PDFTextAnnotationIconType)

	iconType: PDFTextAnnotationIconType;

	setInteriorColor(_: NSColor)

	interiorColor: NSColor;

	readonly isPasswordField: boolean;

	setListChoice(_: boolean)

	isListChoice: boolean;

	setMarkupType(_: PDFMarkupType)

	markupType: PDFMarkupType;

	setMaximumLength(_: number)

	maximumLength: number;

	setModificationDate(_: Date)

	modificationDate: Date;

	setMultiline(_: boolean)

	isMultiline: boolean;

	setOpen(_: boolean)

	isOpen: boolean;

	setPage(_: PDFPage)

	page: PDFPage;

	readonly paths: NSArray<NSBezierPath>;

	setQuadrilateralPoints(_: NSArray<NSValue>)

	quadrilateralPoints: NSArray<NSValue>;

	setRadiosInUnison(_: boolean)

	radiosInUnison: boolean;

	setReadOnly(_: boolean)

	isReadOnly: boolean;

	setShouldDisplay(_: boolean)

	shouldDisplay: boolean;

	setShouldPrint(_: boolean)

	shouldPrint: boolean;

	setStampName(_: string)

	stampName: string;

	setStartLineStyle(_: PDFLineStyle)

	startLineStyle: PDFLineStyle;

	setStartPoint(_: CGPoint)

	startPoint: CGPoint;

	setType(_: string)

	type: string;

	setUserName(_: string)

	userName: string;

	setValues(_: NSArray<string>)

	values: NSArray<string>;

	setWidgetControlType(_: PDFWidgetControlType)

	widgetControlType: PDFWidgetControlType;

	setWidgetDefaultStringValue(_: string)

	widgetDefaultStringValue: string;

	setWidgetFieldType(_: string)

	widgetFieldType: string;

	setWidgetStringValue(_: string)

	widgetStringValue: string;

	static create(bounds: CGRect, forType: string, withProperties: NSDictionary<any, any>);

	static create(coder: NSCoder); // inherited from NSCoding

	addBezierPath(_: NSBezierPath): void;

	copyWithZone(_?: any): any;

	drawWithBoxInContext(_: PDFDisplayBox, inContext: any): void;

	encodeWithCoder(_: NSCoder): void;

	removeBezierPath(_: NSBezierPath): void;

	removeValueForAnnotationKey(_: string): void;

	setBooleanForAnnotationKey(_: boolean, forAnnotationKey: string): boolean;

	setRectForAnnotationKey(_: CGRect, forAnnotationKey: string): boolean;

	setValueForAnnotationKey(_: any, forAnnotationKey: string): boolean;

	valueForAnnotationKey(_: string): any;
}

declare var PDFAnnotationHighlightingModeInvert: string;

declare var PDFAnnotationHighlightingModeNone: string;

declare var PDFAnnotationHighlightingModeOutline: string;

declare var PDFAnnotationHighlightingModePush: string;

declare var PDFAnnotationKeyAction: string;

declare var PDFAnnotationKeyAdditionalActions: string;

declare var PDFAnnotationKeyAppearanceDictionary: string;

declare var PDFAnnotationKeyAppearanceState: string;

declare var PDFAnnotationKeyBorder: string;

declare var PDFAnnotationKeyBorderStyle: string;

declare var PDFAnnotationKeyColor: string;

declare var PDFAnnotationKeyContents: string;

declare var PDFAnnotationKeyDate: string;

declare var PDFAnnotationKeyDefaultAppearance: string;

declare var PDFAnnotationKeyDestination: string;

declare var PDFAnnotationKeyFlags: string;

declare var PDFAnnotationKeyHighlightingMode: string;

declare var PDFAnnotationKeyIconName: string;

declare var PDFAnnotationKeyInklist: string;

declare var PDFAnnotationKeyInteriorColor: string;

declare var PDFAnnotationKeyLineEndingStyles: string;

declare var PDFAnnotationKeyLinePoints: string;

declare var PDFAnnotationKeyName: string;

declare var PDFAnnotationKeyOpen: string;

declare var PDFAnnotationKeyPage: string;

declare var PDFAnnotationKeyParent: string;

declare var PDFAnnotationKeyPopup: string;

declare var PDFAnnotationKeyQuadPoints: string;

declare var PDFAnnotationKeyQuadding: string;

declare var PDFAnnotationKeyRect: string;

declare var PDFAnnotationKeySubtype: string;

declare var PDFAnnotationKeyTextLabel: string;

declare var PDFAnnotationKeyWidgetAppearanceDictionary: string;

declare var PDFAnnotationKeyWidgetBackgroundColor: string;

declare var PDFAnnotationKeyWidgetBorderColor: string;

declare var PDFAnnotationKeyWidgetCaption: string;

declare var PDFAnnotationKeyWidgetDefaultValue: string;

declare var PDFAnnotationKeyWidgetDownCaption: string;

declare var PDFAnnotationKeyWidgetFieldFlags: string;

declare var PDFAnnotationKeyWidgetFieldType: string;

declare var PDFAnnotationKeyWidgetMaxLen: string;

declare var PDFAnnotationKeyWidgetOptions: string;

declare var PDFAnnotationKeyWidgetRolloverCaption: string;

declare var PDFAnnotationKeyWidgetRotation: string;

declare var PDFAnnotationKeyWidgetTextLabelUI: string;

declare var PDFAnnotationKeyWidgetValue: string;

declare var PDFAnnotationLineEndingStyleCircle: string;

declare var PDFAnnotationLineEndingStyleClosedArrow: string;

declare var PDFAnnotationLineEndingStyleDiamond: string;

declare var PDFAnnotationLineEndingStyleNone: string;

declare var PDFAnnotationLineEndingStyleOpenArrow: string;

declare var PDFAnnotationLineEndingStyleSquare: string;

declare var PDFAnnotationSubtypeCircle: string;

declare var PDFAnnotationSubtypeFreeText: string;

declare var PDFAnnotationSubtypeHighlight: string;

declare var PDFAnnotationSubtypeInk: string;

declare var PDFAnnotationSubtypeLine: string;

declare var PDFAnnotationSubtypeLink: string;

declare var PDFAnnotationSubtypePopup: string;

declare var PDFAnnotationSubtypeSquare: string;

declare var PDFAnnotationSubtypeStamp: string;

declare var PDFAnnotationSubtypeStrikeOut: string;

declare var PDFAnnotationSubtypeText: string;

declare var PDFAnnotationSubtypeUnderline: string;

declare var PDFAnnotationSubtypeWidget: string;

declare var PDFAnnotationTextIconTypeComment: string;

declare var PDFAnnotationTextIconTypeHelp: string;

declare var PDFAnnotationTextIconTypeInsert: string;

declare var PDFAnnotationTextIconTypeKey: string;

declare var PDFAnnotationTextIconTypeNewParagraph: string;

declare var PDFAnnotationTextIconTypeNote: string;

declare var PDFAnnotationTextIconTypeParagraph: string;

declare var PDFAnnotationWidgetSubtypeButton: string;

declare var PDFAnnotationWidgetSubtypeChoice: string;

declare var PDFAnnotationWidgetSubtypeSignature: string;

declare var PDFAnnotationWidgetSubtypeText: string;

declare class PDFAppearanceCharacteristics extends NSObject implements NSCopying {

	readonly appearanceCharacteristicsKeyValues: NSDictionary<any, any>;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setBorderColor(_: NSColor)

	borderColor: NSColor;

	setCaption(_: string)

	caption: string;

	setControlType(_: PDFWidgetControlType)

	controlType: PDFWidgetControlType;

	setDownCaption(_: string)

	downCaption: string;

	setRolloverCaption(_: string)

	rolloverCaption: string;

	setRotation(_: number)

	rotation: number;

	copyWithZone(_?: any): any;
}

declare var PDFAppearanceCharacteristicsKeyBackgroundColor: string;

declare var PDFAppearanceCharacteristicsKeyBorderColor: string;

declare var PDFAppearanceCharacteristicsKeyCaption: string;

declare var PDFAppearanceCharacteristicsKeyDownCaption: string;

declare var PDFAppearanceCharacteristicsKeyRolloverCaption: string;

declare var PDFAppearanceCharacteristicsKeyRotation: string;

enum PDFAreaOfInterest {

	kPDFNoArea = 0,

	kPDFPageArea = 1,

	kPDFTextArea = 2,

	kPDFAnnotationArea = 4,

	kPDFLinkArea = 8,

	kPDFControlArea = 16,

	kPDFTextFieldArea = 32,

	kPDFIconArea = 64,

	kPDFPopupArea = 128,

	kPDFImageArea = 256
}


declare class PDFBorder extends NSObject implements NSCoding, NSCopying {

	readonly borderKeyValues: NSDictionary<any, any>;

	setDashPattern(_: NSArray<any>)

	dashPattern: NSArray<any>;

	setLineWidth(_: number)

	lineWidth: number;

	setStyle(_: PDFBorderStyle)

	style: PDFBorderStyle;

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	drawInRect(_: CGRect): void;

	encodeWithCoder(_: NSCoder): void;
}

declare var PDFBorderKeyDashPattern: string;

declare var PDFBorderKeyLineWidth: string;

declare var PDFBorderKeyStyle: string;

enum PDFBorderStyle {

	kPDFBorderStyleSolid = 0,

	kPDFBorderStyleDashed = 1,

	kPDFBorderStyleBeveled = 2,

	kPDFBorderStyleInset = 3,

	kPDFBorderStyleUnderline = 4
}


declare class PDFDestination extends NSObject implements NSCopying {

	readonly page: PDFPage;

	readonly point: CGPoint;

	setZoom(_: number)

	zoom: number;

	static create(page: PDFPage, atPoint: CGPoint);

	compare(_: PDFDestination): NSComparisonResult;

	copyWithZone(_?: any): any;
}

enum PDFDisplayBox {

	kPDFDisplayBoxMediaBox = 0,

	kPDFDisplayBoxCropBox = 1,

	kPDFDisplayBoxBleedBox = 2,

	kPDFDisplayBoxTrimBox = 3,

	kPDFDisplayBoxArtBox = 4
}


enum PDFDisplayDirection {

	kPDFDisplayDirectionVertical = 0,

	kPDFDisplayDirectionHorizontal = 1
}


enum PDFDisplayMode {

	kPDFDisplaySinglePage = 0,

	kPDFDisplaySinglePageContinuous = 1,

	kPDFDisplayTwoUp = 2,

	kPDFDisplayTwoUpContinuous = 3
}


declare class PDFDocument extends NSObject implements NSCopying {

	readonly allowsCommenting: boolean;

	readonly allowsContentAccessibility: boolean;

	readonly allowsCopying: boolean;

	readonly allowsDocumentAssembly: boolean;

	readonly allowsDocumentChanges: boolean;

	readonly allowsFormFieldEntry: boolean;

	readonly allowsPrinting: boolean;

	setDelegate(_: PDFDocumentDelegate)

	delegate: PDFDocumentDelegate;

	setDocumentAttributes(_: NSDictionary<any, any>)

	documentAttributes: NSDictionary<any, any>;

	readonly documentRef: any;

	readonly documentURL: NSURL;

	readonly isEncrypted: boolean;

	readonly isFinding: boolean;

	readonly isLocked: boolean;

	readonly majorVersion: number;

	readonly minorVersion: number;

	setOutlineRoot(_: PDFOutline)

	outlineRoot: PDFOutline;

	readonly pageClass: typeof NSObject;

	readonly pageCount: number;

	readonly permissionsStatus: PDFDocumentPermissions;

	readonly selectionForEntireDocument: PDFSelection;

	readonly string: string;

	static create(data: NSData);

	static create(URL: NSURL);

	beginFindStringWithOptions(_: string, withOptions: NSStringCompareOptions): void;

	beginFindStringsWithOptions(_: NSArray<string>, withOptions: NSStringCompareOptions): void;

	cancelFindString(): void;

	copyWithZone(_?: any): any;

	dataRepresentation(): NSData;

	dataRepresentationWithOptions(_: NSDictionary<any, any>): NSData;

	exchangePageAtIndexWithPageAtIndex(_: number, withPageAtIndex: number): void;

	findStringFromSelectionWithOptions(_: string, fromSelection?: PDFSelection, withOptions: NSStringCompareOptions): PDFSelection;

	findStringWithOptions(_: string, withOptions: NSStringCompareOptions): NSArray<PDFSelection>;

	indexForPage(_: PDFPage): number;

	insertPageAtIndex(_: PDFPage, atIndex: number): void;

	outlineItemForSelection(_: PDFSelection): PDFOutline;

	pageAtIndex(_: number): PDFPage;

	printOperationForPrintInfoScalingModeAutoRotate(_?: NSPrintInfo, scalingMode: PDFPrintScalingMode, autoRotate: boolean): NSPrintOperation;

	removePageAtIndex(_: number): void;

	selectionFromPageAtCharacterIndexToPageAtCharacterIndex(_: PDFPage, atCharacterIndex: number, toPage: PDFPage, atCharacterIndex: number): PDFSelection;

	selectionFromPageAtPointToPageAtPoint(_: PDFPage, atPoint: CGPoint, toPage: PDFPage, atPoint: CGPoint): PDFSelection;

	unlockWithPassword(_: string): boolean;

	writeToFile(_: string): boolean;

	writeToFileWithOptions(_: string, withOptions?: NSDictionary<string, any>): boolean;

	writeToURL(_: NSURL): boolean;

	writeToURLWithOptions(_: NSURL, withOptions?: NSDictionary<string, any>): boolean;
}

declare var PDFDocumentAuthorAttribute: string;

declare var PDFDocumentCreationDateAttribute: string;

declare var PDFDocumentCreatorAttribute: string;

interface PDFDocumentDelegate extends NSObjectProtocol {

	classForAnnotationType?(_: string): typeof NSObject;

	classForPage?(): typeof NSObject;

	didMatchString?(_: PDFSelection): void;

	documentDidBeginDocumentFind?(_: NSNotification): void;

	documentDidBeginPageFind?(_: NSNotification): void;

	documentDidEndDocumentFind?(_: NSNotification): void;

	documentDidEndPageFind?(_: NSNotification): void;

	documentDidFindMatch?(_: NSNotification): void;

	documentDidUnlock?(_: NSNotification): void;
}
declare var PDFDocumentDelegate: {

	prototype: PDFDocumentDelegate;
};

declare var PDFDocumentDidBeginFindNotification: string;

declare var PDFDocumentDidBeginPageFindNotification: string;

declare var PDFDocumentDidBeginPageWriteNotification: string;

declare var PDFDocumentDidBeginWriteNotification: string;

declare var PDFDocumentDidEndFindNotification: string;

declare var PDFDocumentDidEndPageFindNotification: string;

declare var PDFDocumentDidEndPageWriteNotification: string;

declare var PDFDocumentDidEndWriteNotification: string;

declare var PDFDocumentDidFindMatchNotification: string;

declare var PDFDocumentDidUnlockNotification: string;

declare var PDFDocumentKeywordsAttribute: string;

declare var PDFDocumentModificationDateAttribute: string;

declare var PDFDocumentOwnerPasswordOption: string;

enum PDFDocumentPermissions {

	kPDFDocumentPermissionsNone = 0,

	kPDFDocumentPermissionsUser = 1,

	kPDFDocumentPermissionsOwner = 2
}


declare var PDFDocumentProducerAttribute: string;

declare var PDFDocumentSubjectAttribute: string;

declare var PDFDocumentTitleAttribute: string;

declare var PDFDocumentUserPasswordOption: string;

enum PDFInterpolationQuality {

	kPDFInterpolationQualityNone = 0,

	kPDFInterpolationQualityLow = 1,

	kPDFInterpolationQualityHigh = 2
}


enum PDFLineStyle {

	kPDFLineStyleNone = 0,

	kPDFLineStyleSquare = 1,

	kPDFLineStyleCircle = 2,

	kPDFLineStyleDiamond = 3,

	kPDFLineStyleOpenArrow = 4,

	kPDFLineStyleClosedArrow = 5
}


enum PDFMarkupType {

	kPDFMarkupTypeHighlight = 0,

	kPDFMarkupTypeStrikeOut = 1,

	kPDFMarkupTypeUnderline = 2
}


declare class PDFOutline extends NSObject {

	setAction(_: PDFAction)

	action: PDFAction;

	setDestination(_: PDFDestination)

	destination: PDFDestination;

	readonly document: PDFDocument;

	readonly index: number;

	setIsOpen(_: boolean)

	isOpen: boolean;

	setLabel(_: string)

	label: string;

	readonly numberOfChildren: number;

	readonly parent: PDFOutline;

	childAtIndex(_: number): PDFOutline;

	insertChildAtIndex(_: PDFOutline, atIndex: number): void;

	removeFromParent(): void;
}

declare class PDFPage extends NSObject implements NSCopying {

	readonly annotations: NSArray<PDFAnnotation>;

	readonly attributedString: NSAttributedString;

	readonly dataRepresentation: NSData;

	setDisplaysAnnotations(_: boolean)

	displaysAnnotations: boolean;

	readonly document: PDFDocument;

	readonly label: string;

	readonly numberOfCharacters: number;

	readonly pageRef: any;

	setRotation(_: number)

	rotation: number;

	readonly string: string;

	static create(image: NSImage);

	addAnnotation(_: PDFAnnotation): void;

	annotationAtPoint(_: CGPoint): PDFAnnotation;

	boundsForBox(_: PDFDisplayBox): CGRect;

	characterBoundsAtIndex(_: number): CGRect;

	characterIndexAtPoint(_: CGPoint): number;

	copyWithZone(_?: any): any;

	drawWithBoxToContext(_: PDFDisplayBox, toContext: any): void;

	removeAnnotation(_: PDFAnnotation): void;

	selectionForLineAtPoint(_: CGPoint): PDFSelection;

	selectionForRange(_: NSRange): PDFSelection;

	selectionForRect(_: CGRect): PDFSelection;

	selectionForWordAtPoint(_: CGPoint): PDFSelection;

	selectionFromPointToPoint(_: CGPoint, toPoint: CGPoint): PDFSelection;

	setBoundsForBox(_: CGRect, forBox: PDFDisplayBox): void;

	thumbnailOfSizeForBox(_: CGSize, forBox: PDFDisplayBox): NSImage;

	transformContextForBox(_: any, forBox: PDFDisplayBox): void;

	transformForBox(_: PDFDisplayBox): CGAffineTransform;
}

enum PDFPrintScalingMode {

	kPDFPrintPageScaleNone = 0,

	kPDFPrintPageScaleToFit = 1,

	kPDFPrintPageScaleDownToFit = 2
}


declare class PDFSelection extends NSObject implements NSCopying {

	readonly attributedString: NSAttributedString;

	setColor(_: NSColor)

	color: NSColor;

	readonly pages: NSArray<PDFPage>;

	readonly string: string;

	static create(document: PDFDocument);

	addSelection(_: PDFSelection): void;

	addSelections(_: NSArray<PDFSelection>): void;

	boundsForPage(_: PDFPage): CGRect;

	copyWithZone(_?: any): any;

	drawForPageActive(_: PDFPage, active: boolean): void;

	drawForPageWithBoxActive(_: PDFPage, withBox: PDFDisplayBox, active: boolean): void;

	extendSelectionAtEnd(_: number): void;

	extendSelectionAtStart(_: number): void;

	extendSelectionForLineBoundaries(): void;

	numberOfTextRangesOnPage(_: PDFPage): number;

	rangeAtIndexOnPage(_: number, onPage: PDFPage): NSRange;

	selectionsByLine(): NSArray<PDFSelection>;
}

enum PDFTextAnnotationIconType {

	kPDFTextAnnotationIconComment = 0,

	kPDFTextAnnotationIconKey = 1,

	kPDFTextAnnotationIconNote = 2,

	kPDFTextAnnotationIconHelp = 3,

	kPDFTextAnnotationIconNewParagraph = 4,

	kPDFTextAnnotationIconParagraph = 5,

	kPDFTextAnnotationIconInsert = 6
}


declare class PDFThumbnailView extends NSView implements NSCoding {

	setPDFView(_: PDFView)

	PDFView: PDFView;

	setAllowsDragging(_: boolean)

	allowsDragging: boolean;

	setAllowsMultipleSelection(_: boolean)

	allowsMultipleSelection: boolean;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setLabelFont(_: NSFont)

	labelFont: NSFont;

	setMaximumNumberOfColumns(_: number)

	maximumNumberOfColumns: number;

	readonly selectedPages: NSArray<PDFPage>;

	setThumbnailSize(_: CGSize)

	thumbnailSize: CGSize;

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare var PDFThumbnailViewDocumentEditedNotification: string;

declare class PDFView extends NSView implements NSAnimationDelegate, NSMenuDelegate {

	setAcceptsDraggedFiles(_: boolean)

	acceptsDraggedFiles: boolean;

	setAutoScales(_: boolean)

	autoScales: boolean;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	readonly canGoBack: boolean;

	readonly canGoForward: boolean;

	readonly canGoToFirstPage: boolean;

	readonly canGoToLastPage: boolean;

	readonly canGoToNextPage: boolean;

	readonly canGoToPreviousPage: boolean;

	readonly canZoomIn: boolean;

	readonly canZoomOut: boolean;

	readonly currentDestination: PDFDestination;

	readonly currentPage: PDFPage;

	setCurrentSelection(_: PDFSelection)

	currentSelection: PDFSelection;

	setDelegate(_: PDFViewDelegate)

	delegate: PDFViewDelegate;

	setDisplayBox(_: PDFDisplayBox)

	displayBox: PDFDisplayBox;

	setDisplayDirection(_: PDFDisplayDirection)

	displayDirection: PDFDisplayDirection;

	setDisplayMode(_: PDFDisplayMode)

	displayMode: PDFDisplayMode;

	setDisplaysAsBook(_: boolean)

	displaysAsBook: boolean;

	setDisplaysPageBreaks(_: boolean)

	displaysPageBreaks: boolean;

	setDisplaysRTL(_: boolean)

	displaysRTL: boolean;

	setDocument(_: PDFDocument)

	document: PDFDocument;

	readonly documentView: NSView;

	setEnableDataDetectors(_: boolean)

	enableDataDetectors: boolean;

	setHighlightedSelections(_: NSArray<PDFSelection>)

	highlightedSelections: NSArray<PDFSelection>;

	setInterpolationQuality(_: PDFInterpolationQuality)

	interpolationQuality: PDFInterpolationQuality;

	setMaxScaleFactor(_: number)

	maxScaleFactor: number;

	setMinScaleFactor(_: number)

	minScaleFactor: number;

	setPageBreakMargins(_: NSEdgeInsets)

	pageBreakMargins: NSEdgeInsets;

	enablePageShadows(_: boolean)

	pageShadowsEnabled: boolean;

	setScaleFactor(_: number)

	scaleFactor: number;

	readonly scaleFactorForSizeToFit: number;

	readonly visiblePages: NSArray<PDFPage>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animationDidReachProgressMark(_: NSAnimation, didReachProgressMark: number): void;

	animationValueForProgress(_: NSAnimation, valueForProgress: number): number;

	animationDidEnd(_: NSAnimation): void;

	animationDidStop(_: NSAnimation): void;

	animationShouldStart(_: NSAnimation): boolean;

	annotationsChangedOnPage(_: PDFPage): void;

	areaOfInterestForMouse(_: NSEvent): PDFAreaOfInterest;

	areaOfInterestForPoint(_: CGPoint): PDFAreaOfInterest;

	clearSelection(): void;

	confinementRectForMenuOnScreen(for_: NSMenu, on?: NSScreen): CGRect;

	conformsToProtocol(_: any /* Protocol */): boolean;

	convertPointFromPage(_: CGPoint, fromPage: PDFPage): CGPoint;

	convertPointToPage(_: CGPoint, toPage: PDFPage): CGPoint;

	convertRectFromPage(_: CGRect, fromPage: PDFPage): CGRect;

	convertRectToPage(_: CGRect, toPage: PDFPage): CGRect;

	copy(_?: any): void;

	drawPageToContext(_: PDFPage, toContext: any): void;

	drawPagePostToContext(_: PDFPage, toContext: any): void;

	goBack(_?: any): void;

	goForward(_?: any): void;

	goToDestination(_: PDFDestination): void;

	goToFirstPage(_?: any): void;

	goToLastPage(_?: any): void;

	goToNextPage(_?: any): void;

	goToPage(_: PDFPage): void;

	goToPreviousPage(_?: any): void;

	goToRectOnPage(_: CGRect, onPage: PDFPage): void;

	goToSelection(_: PDFSelection): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	layoutDocumentView(): void;

	menuUpdateItemAtIndexShouldCancel(_: NSMenu, update: NSMenuItem, at: number, shouldCancel: boolean): boolean;

	menuWillHighlightItem(_: NSMenu, willHighlight?: NSMenuItem): void;

	menuDidClose(_: NSMenu): void;

	menuHasKeyEquivalentForEventTargetAction(_: NSMenu, for_: NSEvent, target?: any, action?: string): boolean;

	menuNeedsUpdate(_: NSMenu): void;

	menuWillOpen(_: NSMenu): void;

	numberOfItemsInMenu(in_: NSMenu): number;

	pageForPointNearest(_: CGPoint, nearest: boolean): PDFPage;

	performAction(_: PDFAction): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	printWithInfoAutoRotate(_: NSPrintInfo, autoRotate: boolean): void;

	printWithInfoAutoRotatePageScaling(_: NSPrintInfo, autoRotate: boolean, pageScaling: PDFPrintScalingMode): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	rowSizeForPage(_: PDFPage): CGSize;

	scrollSelectionToVisible(_?: any): void;

	self(): this;

	setCurrentSelectionAnimate(_?: PDFSelection, animate: boolean): void;

	setCursorForAreaOfInterest(_: PDFAreaOfInterest): void;

	zoomIn(_?: any): void;

	zoomOut(_?: any): void;
}

declare var PDFViewAnnotationHitNotification: string;

declare var PDFViewAnnotationWillHitNotification: string;

declare var PDFViewChangedHistoryNotification: string;

declare var PDFViewCopyPermissionNotification: string;

interface PDFViewDelegate extends NSObjectProtocol {

	PDFViewOpenPDFForRemoteGoToAction?(_: PDFView, forRemoteGoToAction: PDFActionRemoteGoTo): void;

	PDFViewPerformFind?(_: PDFView): void;

	PDFViewPerformGoToPage?(_: PDFView): void;

	PDFViewPerformPrint?(_: PDFView): void;

	PDFViewPrintJobTitle?(_: PDFView): string;

	PDFViewWillChangeScaleFactorToScale?(_: PDFView, toScale: number): number;

	PDFViewWillClickOnLinkWithURL?(_: PDFView, withURL: NSURL): void;
}
declare var PDFViewDelegate: {

	prototype: PDFViewDelegate;
};

declare var PDFViewDisplayBoxChangedNotification: string;

declare var PDFViewDisplayModeChangedNotification: string;

declare var PDFViewDocumentChangedNotification: string;

declare var PDFViewPageChangedNotification: string;

declare var PDFViewPrintPermissionNotification: string;

declare var PDFViewScaleChangedNotification: string;

declare var PDFViewSelectionChangedNotification: string;

declare var PDFViewVisiblePagesChangedNotification: string;

enum PDFWidgetCellState {

	kPDFWidgetMixedState = -1,

	kPDFWidgetOffState = 0,

	kPDFWidgetOnState = 1
}


enum PDFWidgetControlType {

	kPDFWidgetUnknownControl = -1,

	kPDFWidgetPushButtonControl = 0,

	kPDFWidgetRadioButtonControl = 1,

	kPDFWidgetCheckBoxControl = 2
}


declare var kPDFDestinationUnspecifiedValue: number;
