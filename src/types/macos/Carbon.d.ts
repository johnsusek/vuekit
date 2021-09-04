
declare function AEGetInteractionAllowed(level: number): number;

declare function AEGetTheCurrentEvent(theAppleEvent: AEDesc): number;

declare function AEInteractWithUser(timeOutInTicks: number, nmReqPtr: NMRec, idleProc: (p1: EventRecord, p2: number, p3: any) => boolean): number;

declare function AEProcessAppleEvent(theEventRecord: EventRecord): number;

declare function AEProcessEvent(inEvent: any): number;

declare function AEResetTimer(reply: AEDesc): number;

declare function AEResumeTheCurrentEvent(theAppleEvent: AEDesc, reply: AEDesc, dispatcher: (p1: AEDesc, p2: AEDesc, p3: any) => number, handlerRefcon: any): number;

declare function AESend(theAppleEvent: AEDesc, reply: AEDesc, sendMode: number, sendPriority: number, timeOutInTicks: number, idleProc: (p1: EventRecord, p2: number, p3: any) => boolean, filterProc: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean): number;

declare function AESetInteractionAllowed(level: number): number;

declare function AESetTheCurrentEvent(theAppleEvent: AEDesc): number;

declare function AESuspendTheCurrentEvent(theAppleEvent: AEDesc): number;

declare function AHGotoPage(bookname: string, path: string, anchor: string): number;

declare function AHLookupAnchor(bookname: string, anchor: string): number;

declare function AHRegisterHelpBookWithURL(applicationURL: NSURL): number;

declare function AHSearch(bookname: string, query: string): number;

declare function ASCopySourceAttributes(scriptingComponent: ComponentInstanceRecord, resultingSourceAttributes: NSArray<any>): number;

declare function ASGetSourceStyleNames(scriptingComponent: ComponentInstanceRecord, modeFlags: number, resultingSourceStyleNamesList: AEDesc): number;

declare function ASInit(scriptingComponent: ComponentInstanceRecord, modeFlags: number, minStackSize: number, preferredStackSize: number, maxStackSize: number, minHeapSize: number, preferredHeapSize: number, maxHeapSize: number): number;

declare function ASSetSourceAttributes(scriptingComponent: ComponentInstanceRecord, sourceAttributes: NSArray<any> | any[]): number;

declare function AcquireFirstMatchingEventInQueue(inQueue: any, inNumTypes: number, inList: EventTypeSpec, inOptions: number): any;

declare function AddEventTypesToHandler(inHandlerRef: any, inNumTypes: number, inList: EventTypeSpec): number;

interface AlertStdAlertParamRec {
	movable: boolean;
	helpButton: boolean;
	filterProc: (p1: any, p2: EventRecord, p3: number) => boolean;
	defaultText: string;
	cancelText: string;
	otherText: string;
	defaultButton: number;
	cancelButton: number;
	position: number;
}
declare var AlertStdAlertParamRec: AlertStdAlertParamRec;

interface AlertStdCFStringAlertParamRec {
	version: number;
	movable: boolean;
	helpButton: boolean;
	defaultText: string;
	cancelText: string;
	otherText: string;
	defaultButton: number;
	cancelButton: number;
	position: number;
	flags: number;
	icon: any;
}
declare var AlertStdCFStringAlertParamRec: AlertStdCFStringAlertParamRec;

interface AlertTemplate {
	boundsRect: Rect;
	itemsID: number;
	stages: number;
}
declare var AlertTemplate: AlertTemplate;

declare function CMPluginExamineContext(thisInstance: any, inContext: AEDesc, outCommandPairs: AEDesc): number;

declare function CMPluginHandleSelection(thisInstance: any, inContext: AEDesc, inCommandID: number): number;

declare function CMPluginPostMenuCleanup(thisInstance: any): void;

declare function CallNextEventHandler(inCallRef: any, inEvent: any): number;

declare function CheckEventQueueForUserCancel(): boolean;

interface ContextualMenuInterfaceStruct {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	ExamineContext: (p1: any, p2: AEDesc, p3: AEDesc) => number;
	HandleSelection: (p1: any, p2: AEDesc, p3: number) => number;
	PostMenuCleanup: (p1: any) => void;
}
declare var ContextualMenuInterfaceStruct: ContextualMenuInterfaceStruct;

interface ControlEditTextSelectionRec {
	selStart: number;
	selEnd: number;
}
declare var ControlEditTextSelectionRec: ControlEditTextSelectionRec;

interface ControlFontStyleRec {
	flags: number;
	font: number;
	size: number;
	style: number;
	mode: number;
	just: number;
	foreColor: RGBColor;
	backColor: RGBColor;
}
declare var ControlFontStyleRec: ControlFontStyleRec;

interface ControlID {
	signature: number;
	id: number;
}
declare var ControlID: ControlID;

interface ControlKind {
	signature: number;
	kind: number;
}
declare var ControlKind: ControlKind;

interface ControlTabInfoRec {
	version: number;
	iconSuiteID: number;
	name: number;
}
declare var ControlTabInfoRec: ControlTabInfoRec;

interface ControlTabInfoRecV1 {
	version: number;
	iconSuiteID: number;
	name: string;
}
declare var ControlTabInfoRecV1: ControlTabInfoRecV1;

interface ControlTemplate {
	controlRect: Rect;
	controlValue: number;
	controlVisible: boolean;
	fill: number;
	controlMaximum: number;
	controlMinimum: number;
	controlDefProcID: number;
	controlReference: number;
	controlTitle: number;
}
declare var ControlTemplate: ControlTemplate;

declare function CopyEvent(inOther: any): any;

declare function CopyEventAs(inAllocator: any, inOther: any, inEventClass: number, inEventKind: number): any;

declare function CopyEventCGEvent(inEvent: any): any;

declare function CopySymbolicHotKeys(outHotKeyArray: NSArray<any>): number;

declare function CopyThemeIdentifier(outIdentifier: string): number;

declare function CreateEvent(inAllocator: any, inClassID: number, inKind: number, inWhen: number, inAttributes: number, outEvent: any): number;

declare function CreateEventWithCGEvent(inAllocator: any, inEvent: any, inAttributes: number, outEvent: any): number;

interface CtlCTab {
	ccSeed: number;
	ccRider: number;
	ctSize: number;
	ctTable: ColorSpec;
}
declare var CtlCTab: CtlCTab;

declare const DRAWHook: number;

interface DataBrowserAccessibilityItemInfoV0 {
	container: number;
	item: number;
	columnProperty: number;
	propertyPart: number;
}
declare var DataBrowserAccessibilityItemInfoV0: DataBrowserAccessibilityItemInfoV0;

interface DataBrowserAccessibilityItemInfoV1 {
	container: number;
	item: number;
	columnProperty: number;
	propertyPart: number;
	rowIndex: number;
	columnIndex: number;
}
declare var DataBrowserAccessibilityItemInfoV1: DataBrowserAccessibilityItemInfoV1;

interface DataBrowserPropertyDesc {
	propertyID: number;
	propertyType: number;
	propertyFlags: number;
}
declare var DataBrowserPropertyDesc: DataBrowserPropertyDesc;

declare function DebugPrintEvent(inEvent: any): void;

declare function DebugPrintMainEventQueue(): void;

interface DialogTemplate {
	boundsRect: Rect;
	procID: number;
	visible: boolean;
	filler1: boolean;
	goAwayFlag: boolean;
	filler2: boolean;
	refCon: number;
	itemsID: number;
	title: number;
}
declare var DialogTemplate: DialogTemplate;

declare function DisableSecureEventInput(): number;

declare function DisposeAEFilterUPP(userUPP: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean): void;

declare function DisposeAEIdleUPP(userUPP: (p1: EventRecord, p2: number, p3: any) => boolean): void;

declare function DisposeCalibrateEventUPP(userUPP: (p1: EventRecord) => void): void;

declare function DisposeCanCalibrateUPP(userUPP: (p1: number, p2: number) => boolean): void;

declare function DisposeControlActionUPP(userUPP: (p1: any, p2: number) => void): void;

declare function DisposeControlEditTextValidationUPP(userUPP: (p1: any) => void): void;

declare function DisposeControlKeyFilterUPP(userUPP: (p1: any, p2: number, p3: number, p4: number) => number): void;

declare function DisposeControlUserPaneActivateUPP(userUPP: (p1: any, p2: boolean) => void): void;

declare function DisposeControlUserPaneDrawUPP(userUPP: (p1: any, p2: number) => void): void;

declare function DisposeControlUserPaneFocusUPP(userUPP: (p1: any, p2: number) => number): void;

declare function DisposeControlUserPaneHitTestUPP(userUPP: (p1: any, p2: Point) => number): void;

declare function DisposeControlUserPaneIdleUPP(userUPP: (p1: any) => void): void;

declare function DisposeControlUserPaneKeyDownUPP(userUPP: (p1: any, p2: number, p3: number, p4: number) => number): void;

declare function DisposeControlUserPaneTrackingUPP(userUPP: (p1: any, p2: Point, p3: (p1: any, p2: number) => void) => number): void;

declare function DisposeDataBrowserAcceptDragUPP(userUPP: (p1: any, p2: any, p3: number) => boolean): void;

declare function DisposeDataBrowserAddDragItemUPP(userUPP: (p1: any, p2: any, p3: number, p4: any) => boolean): void;

declare function DisposeDataBrowserDrawItemUPP(userUPP: (p1: any, p2: number, p3: number, p4: number, p5: Rect, p6: number, p7: boolean) => void): void;

declare function DisposeDataBrowserEditItemUPP(userUPP: (p1: any, p2: number, p3: number, p4: string, p5: Rect, p6: string) => boolean): void;

declare function DisposeDataBrowserGetContextualMenuUPP(userUPP: (p1: any, p2: any, p3: number, p4: string, p5: AEDesc) => void): void;

declare function DisposeDataBrowserHitTestUPP(userUPP: (p1: any, p2: number, p3: number, p4: Rect, p5: Rect) => boolean): void;

declare function DisposeDataBrowserItemAcceptDragUPP(userUPP: (p1: any, p2: number, p3: number, p4: Rect, p5: any) => number): void;

declare function DisposeDataBrowserItemCompareUPP(userUPP: (p1: any, p2: number, p3: number, p4: number) => boolean): void;

declare function DisposeDataBrowserItemDataUPP(userUPP: (p1: any, p2: number, p3: number, p4: any, p5: boolean) => number): void;

declare function DisposeDataBrowserItemDragRgnUPP(userUPP: (p1: any, p2: number, p3: number, p4: Rect, p5: any) => void): void;

declare function DisposeDataBrowserItemNotificationUPP(userUPP: (p1: any, p2: number, p3: number) => void): void;

declare function DisposeDataBrowserItemNotificationWithItemUPP(userUPP: (p1: any, p2: number, p3: number, p4: any) => void): void;

declare function DisposeDataBrowserItemReceiveDragUPP(userUPP: (p1: any, p2: number, p3: number, p4: number, p5: any) => boolean): void;

declare function DisposeDataBrowserItemUPP(userUPP: (p1: number, p2: number, p3: any) => void): void;

declare function DisposeDataBrowserPostProcessDragUPP(userUPP: (p1: any, p2: any, p3: number) => void): void;

declare function DisposeDataBrowserReceiveDragUPP(userUPP: (p1: any, p2: any, p3: number) => boolean): void;

declare function DisposeDataBrowserSelectContextualMenuUPP(userUPP: (p1: any, p2: any, p3: number, p4: number, p5: number) => void): void;

declare function DisposeDataBrowserTrackingUPP(userUPP: (p1: any, p2: number, p3: number, p4: Rect, p5: Point, p6: number) => number): void;

declare function DisposeDragInputUPP(userUPP: (p1: Point, p2: number, p3: any, p4: any) => number): void;

declare function DisposeEditUnicodePostUpdateUPP(userUPP: (p1: number, p2: number, p3: number, p4: number, p5: any) => boolean): void;

declare function DisposeEventComparatorUPP(userUPP: (p1: any, p2: any) => boolean): void;

declare function DisposeEventHandlerUPP(userUPP: (p1: any, p2: any, p3: any) => number): void;

declare function DisposeEventLoopIdleTimerUPP(userUPP: (p1: any, p2: number, p3: any) => void): void;

declare function DisposeEventLoopTimerUPP(userUPP: (p1: any, p2: any) => void): void;

declare function DisposeModalFilterUPP(userUPP: (p1: any, p2: EventRecord, p3: number) => boolean): void;

declare function DisposeModalFilterYDUPP(userUPP: (p1: any, p2: EventRecord, p3: number, p4: any) => boolean): void;

declare function DisposeNMUPP(userUPP: (p1: NMRec) => void): void;

declare function DisposeOSAActiveUPP(userUPP: (p1: any) => number): void;

declare function DisposeOSACreateAppleEventUPP(userUPP: (p1: number, p2: number, p3: AEDesc, p4: number, p5: number, p6: AEDesc, p7: any) => number): void;

declare function DisposeOSASendUPP(userUPP: (p1: AEDesc, p2: AEDesc, p3: number, p4: number, p5: number, p6: (p1: EventRecord, p2: number, p3: any) => boolean, p7: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean, p8: any) => number): void;

declare function DisposeTXNActionNameMapperUPP(userUPP: (p1: string, p2: number, p3: any) => string): void;

declare function DisposeTXNContextualMenuSetupUPP(userUPP: (p1: any, p2: any, p3: any) => void): void;

declare function DisposeTXNFindUPP(userUPP: (p1: TXNMatchTextRecord, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: number, p9: number, p10: string, p11: any) => number): void;

declare function DisposeTXNScrollInfoUPP(userUPP: (p1: number, p2: number, p3: number, p4: any) => void): void;

declare function DisposeUserItemUPP(userUPP: (p1: any, p2: number) => void): void;

declare const EOLHook: number;

declare function EnableSecureEventInput(): number;

interface EvQEl {
	qLink: QElem;
	qType: number;
	evtQWhat: number;
	evtQMessage: number;
	evtQWhen: number;
	evtQWhere: Point;
	evtQModifiers: number;
}
declare var EvQEl: EvQEl;

interface EventHotKeyID {
	signature: number;
	id: number;
}
declare var EventHotKeyID: EventHotKeyID;

interface EventRecord {
	what: number;
	message: number;
	when: number;
	where: Point;
	modifiers: number;
}
declare var EventRecord: EventRecord;

interface EventTypeSpec {
	eventClass: number;
	eventKind: number;
}
declare var EventTypeSpec: EventTypeSpec;

declare function FCAddCollection(iCollection: string, iCollectionOptions: number): number;

declare function FCAddFontDescriptorToCollection(iDescriptor: any, iCollection: string): number;

declare function FCCopyCollectionNames(): NSArray<any>;

declare function FCCopyFontDescriptorsInCollection(iCollection: string): NSArray<any>;

declare function FCFontDescriptorCreateWithFontAttributes(iAttributes: NSDictionary<any, any>): any;

declare function FCFontDescriptorCreateWithName(iFontName: string, iSize: number): any;

declare function FCRemoveCollection(iCollection: string): number;

declare function FCRemoveFontDescriptorFromCollection(iDescriptor: any, iCollection: string): number;

declare function FPIsFontPanelVisible(): boolean;

declare function FPShowHideFontPanel(): number;

interface FileTranslationList {
	modDate: number;
	groupCount: number;
}
declare var FileTranslationList: FileTranslationList;

interface FileTranslationSpec {
	componentSignature: number;
	translationSystemInfo: any;
	src: FileTypeSpec;
	dst: FileTypeSpec;
}
declare var FileTranslationSpec: FileTranslationSpec;

interface FileTypeSpec {
	format: number;
	hint: number;
	flags: number;
	catInfoType: number;
	catInfoCreator: number;
}
declare var FileTypeSpec: FileTypeSpec;

declare function FindSpecificEventInQueue(inQueue: any, inComparator: (p1: any, p2: any) => boolean, inCompareData: any): any;

declare function FlushEventQueue(inQueue: any): number;

declare function FlushEventsMatchingListFromQueue(inQueue: any, inNumTypes: number, inList: EventTypeSpec): number;

declare function FlushSpecificEventsFromQueue(inQueue: any, inComparator: (p1: any, p2: any) => boolean, inCompareData: any): number;

interface FontSelectionQDStyle {
	version: number;
	instance: FMFontFamilyInstance;
	size: number;
	hasColor: boolean;
	reserved: number;
	color: RGBColor;
}
declare var FontSelectionQDStyle: FontSelectionQDStyle;

declare function GetApplicationEventTarget(): any;

declare function GetApplicationTextEncoding(): number;

declare function GetCFRunLoopFromEventLoop(inEventLoop: any): any;

declare function GetColor(where: Point, prompt: string | any, inColor: RGBColor, outColor: RGBColor): boolean;

declare function GetCurrentButtonState(): number;

declare function GetCurrentEvent(): any;

declare function GetCurrentEventButtonState(): number;

declare function GetCurrentEventKeyModifiers(): number;

declare function GetCurrentEventLoop(): any;

declare function GetCurrentEventQueue(): any;

declare function GetCurrentEventTime(): number;

declare function GetCurrentKeyModifiers(): number;

declare function GetEventClass(inEvent: any): number;

declare function GetEventDispatcherTarget(): any;

declare function GetEventKind(inEvent: any): number;

declare function GetEventMonitorTarget(): any;

declare function GetEventParameter(inEvent: any, inName: number, inDesiredType: number, outActualType: number, inBufferSize: number, outActualSize: number, outData: any): number;

declare function GetEventRetainCount(inEvent: any): number;

declare function GetEventTime(inEvent: any): number;

interface GetGrowImageRegionRec {
	growRect: Rect;
	growImageRegion: any;
}
declare var GetGrowImageRegionRec: GetGrowImageRegionRec;

declare function GetKeys(theKeys: BigEndianUInt32): void;

declare function GetMainEventLoop(): any;

declare function GetMainEventQueue(): any;

declare function GetMenuTrackingData(theMenu: any, outData: MenuTrackingData): number;

declare function GetNumEventsInQueue(inQueue: any): number;

declare function GetSymbolicHotKeyMode(): number;

declare function GetSystemUIMode(outMode: number, outOptions: number): void;

declare function GetThemeMenuItemExtra(inItemType: number, outHeight: number, outWidth: number): number;

declare function GetThemeMenuSeparatorHeight(outHeight: number): number;

declare function GetThemeMenuTitleExtra(outWidth: number, inIsSquished: boolean): number;

declare function GetThemeMetric(inMetric: number, outMetric: number): number;

interface GetWindowRegionRec {
	winRgn: any;
	regionCode: number;
}
declare var GetWindowRegionRec: GetWindowRegionRec;

interface HFSFlavor {
	fileType: number;
	fileCreator: number;
	fdFlags: number;
	fileSpec: FSSpec;
}
declare var HFSFlavor: HFSFlavor;

interface HIAxisPosition {
	toView: any;
	kind: number;
	offset: number;
}
declare var HIAxisPosition: HIAxisPosition;

interface HIAxisScale {
	toView: any;
	kind: number;
	ratio: number;
}
declare var HIAxisScale: HIAxisScale;

interface HIBinding {
	top: HISideBinding;
	left: HISideBinding;
	bottom: HISideBinding;
	right: HISideBinding;
}
declare var HIBinding: HIBinding;

interface HICommand {
	attributes: number;
	commandID: number;
	menu: { menuRef: any; menuItemIndex: number; };
}
declare var HICommand: HICommand;

interface HIContentBorderMetrics {
	top: number;
	left: number;
	bottom: number;
	right: number;
}
declare var HIContentBorderMetrics: HIContentBorderMetrics;

declare function HIDictionaryWindowShow(dictionary: any, textString: any, selectionRange: CFRange, textFont: NSFont, textOrigin: CGPoint, verticalText: boolean, viewTransform: CGAffineTransform): void;

declare function HIGetMousePosition(inSpace: number, inObject: any, outPoint: CGPoint): CGPoint;

interface HILayoutInfo {
	version: number;
	binding: HIBinding;
	scale: HIScaling;
	position: HIPositioning;
}
declare var HILayoutInfo: HILayoutInfo;

declare function HIMouseTrackingGetParameters(inSelector: number, outTime: number, outDistance: CGSize): number;

declare function HIObjectAddDelegate(inObject: any, inDelegate: any, inPosition: number): number;

declare function HIObjectCopyClassID(inObject: any): string;

declare function HIObjectCopyDelegates(inObject: any, outDelegates: NSDictionary<any, any>): number;

declare function HIObjectCreate(inClassID: string, inConstructData: any, outObject: any): number;

declare function HIObjectCreateFromBundle(inBundle: any, outObject: any): number;

declare function HIObjectDynamicCast(inObject: any, inClassID: string): any;

declare function HIObjectFromEventTarget(inTarget: any): any;

declare function HIObjectGetEventHandlerObject(inRef: any): any;

declare function HIObjectGetEventTarget(inObject: any): any;

declare function HIObjectIsArchivingIgnored(inObject: any): boolean;

declare function HIObjectIsOfClass(inObject: any, inObjectClassID: string): boolean;

declare function HIObjectPrintDebugInfo(inObject: any): void;

declare function HIObjectRegisterSubclass(inClassID: string, inBaseClassID: string, inOptions: number, inConstructProc: (p1: any, p2: any, p3: any) => number, inNumEvents: number, inEventList: EventTypeSpec, inConstructData: any, outClassRef: any): number;

declare function HIObjectRemoveDelegate(inObject: any, inDelegate: any, inPosition: number): number;

declare function HIObjectUnregisterClass(inClassRef: any): number;

declare function HIPointConvert(ioPoint: CGPoint, inSourceSpace: number, inSourceObject: any, inDestinationSpace: number, inDestinationObject: any): void;

interface HIPositioning {
	x: HIAxisPosition;
	y: HIAxisPosition;
}
declare var HIPositioning: HIPositioning;

declare function HIRectConvert(ioRect: CGRect, inSourceSpace: number, inSourceObject: any, inDestinationSpace: number, inDestinationObject: any): void;

interface HIScaling {
	x: HIAxisScale;
	y: HIAxisScale;
}
declare var HIScaling: HIScaling;

interface HIScrollBarTrackInfo {
	version: number;
	enableState: number;
	pressState: number;
	viewsize: number;
}
declare var HIScrollBarTrackInfo: HIScrollBarTrackInfo;

declare function HISearchWindowShow(inSearchString: string, inFlags: number): number;

interface HISideBinding {
	toView: any;
	kind: number;
	offset: number;
}
declare var HISideBinding: HISideBinding;

declare function HISizeConvert(ioSize: CGSize, inSourceSpace: number, inSourceObject: any, inDestinationSpace: number, inDestinationObject: any): void;

declare const HITTESTHook: number;

interface HIThemeAnimationFrameInfo {
	index: number;
}
declare var HIThemeAnimationFrameInfo: HIThemeAnimationFrameInfo;

interface HIThemeAnimationTimeInfo {
	start: number;
	current: number;
}
declare var HIThemeAnimationTimeInfo: HIThemeAnimationTimeInfo;

declare function HIThemeApplyBackground(inBounds: CGRect, inDrawInfo: HIThemeBackgroundDrawInfo, inContext: any, inOrientation: number): number;

interface HIThemeBackgroundDrawInfo {
	version: number;
	state: number;
	kind: number;
}
declare var HIThemeBackgroundDrawInfo: HIThemeBackgroundDrawInfo;

declare function HIThemeBeginFocus(inContext: any, inRing: number, inReserved: any): number;

declare function HIThemeBrushCreateCGColor(inBrush: number, outColor: any): number;

interface HIThemeChasingArrowsDrawInfo {
	version: number;
	state: number;
	index: number;
}
declare var HIThemeChasingArrowsDrawInfo: HIThemeChasingArrowsDrawInfo;

declare function HIThemeDrawBackground(inBounds: CGRect, inDrawInfo: HIThemeBackgroundDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawChasingArrows(inBounds: CGRect, inDrawInfo: HIThemeChasingArrowsDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawFocusRect(inRect: CGRect, inHasFocus: boolean, inContext: any, inOrientation: number): number;

declare function HIThemeDrawFrame(inRect: CGRect, inDrawInfo: HIThemeFrameDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawGrabber(inRect: CGRect, inDrawInfo: HIThemeGrabberDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawGroupBox(inRect: CGRect, inDrawInfo: HIThemeGroupBoxDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawGrowBox(inOrigin: CGPoint, inDrawInfo: HIThemeGrowBoxDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawHeader(inRect: CGRect, inDrawInfo: HIThemeHeaderDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawMenuBackground(inMenuRect: CGRect, inMenuDrawInfo: HIThemeMenuDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawMenuBarBackground(inBounds: CGRect, inDrawInfo: HIThemeMenuBarDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawMenuItem(inMenuRect: CGRect, inItemRect: CGRect, inItemDrawInfo: HIThemeMenuItemDrawInfo, inContext: any, inOrientation: number, outContentRect: CGRect): number;

declare function HIThemeDrawMenuSeparator(inMenuRect: CGRect, inItemRect: CGRect, inItemDrawInfo: HIThemeMenuItemDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawMenuTitle(inMenuBarRect: CGRect, inTitleRect: CGRect, inDrawInfo: HIThemeMenuTitleDrawInfo, inContext: any, inOrientation: number, outLabelRect: CGRect): number;

declare function HIThemeDrawPaneSplitter(inRect: CGRect, inDrawInfo: HIThemeSplitterDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawPlacard(inRect: CGRect, inDrawInfo: HIThemePlacardDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawPopupArrow(inBounds: CGRect, inDrawInfo: HIThemePopupArrowDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawScrollBarDelimiters(inContRect: CGRect, inDrawInfo: HIThemeScrollBarDelimitersDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawSegment(inBounds: CGRect, inDrawInfo: HIThemeSegmentDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawSeparator(inRect: CGRect, inDrawInfo: HIThemeSeparatorDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawTab(inRect: CGRect, inDrawInfo: HIThemeTabDrawInfo, inContext: any, inOrientation: number, outLabelRect: CGRect): number;

declare function HIThemeDrawTabPane(inRect: CGRect, inDrawInfo: HIThemeTabPaneDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawTextBox(inString: any, inBounds: CGRect, inTextInfo: HIThemeTextInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawTickMark(inBounds: CGRect, inDrawInfo: HIThemeTickMarkDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawTitleBarWidget(inContRect: CGRect, inDrawInfo: HIThemeWindowWidgetDrawInfo, inContext: any, inOrientation: number): number;

declare function HIThemeDrawWindowFrame(inContRect: CGRect, inDrawInfo: HIThemeWindowDrawInfo, inContext: any, inOrientation: number, outTitleRect: CGRect): number;

declare function HIThemeEndFocus(inContext: any): number;

interface HIThemeFrameDrawInfo {
	version: number;
	kind: number;
	state: number;
	isFocused: boolean;
}
declare var HIThemeFrameDrawInfo: HIThemeFrameDrawInfo;

declare function HIThemeGetGrowBoxBounds(inOrigin: CGPoint, inDrawInfo: HIThemeGrowBoxDrawInfo, outBounds: CGRect): number;

declare function HIThemeGetMenuBackgroundShape(inMenuRect: CGRect, inMenuDrawInfo: HIThemeMenuDrawInfo, outShape: any): number;

declare function HIThemeGetScrollBarTrackRect(inBounds: CGRect, inTrackInfo: HIScrollBarTrackInfo, inIsHoriz: boolean, outTrackBounds: CGRect): number;

declare function HIThemeGetTabDrawShape(inRect: CGRect, inDrawInfo: HIThemeTabDrawInfo, outShape: any): number;

declare function HIThemeGetTabPaneContentShape(inRect: CGRect, inDirection: number, inTabSize: number, outShape: any): number;

declare function HIThemeGetTabPaneDrawShape(inRect: CGRect, inDirection: number, inTabSize: number, outShape: any): number;

declare function HIThemeGetTabShape(inRect: CGRect, inDrawInfo: HIThemeTabDrawInfo, outShape: any): number;

declare function HIThemeGetTextColorForThemeBrush(inBrush: number, inWindowIsActive: boolean, outColor: number): number;

declare function HIThemeGetTextDimensions(inString: any, inWidth: number, inTextInfo: HIThemeTextInfo, outWidth: number, outHeight: number, outBaseline: number): number;

declare function HIThemeGetUIFontType(inFontID: number): CTFontUIFontType;

declare function HIThemeGetWindowRegionHit(inContRect: CGRect, inDrawInfo: HIThemeWindowDrawInfo, inPoint: CGPoint, outRegionHit: number): boolean;

declare function HIThemeGetWindowShape(inContRect: CGRect, inDrawInfo: HIThemeWindowDrawInfo, inWinRegion: number, outShape: any): number;

interface HIThemeGrabberDrawInfo {
	version: number;
	state: number;
}
declare var HIThemeGrabberDrawInfo: HIThemeGrabberDrawInfo;

interface HIThemeGroupBoxDrawInfo {
	version: number;
	state: number;
	kind: number;
}
declare var HIThemeGroupBoxDrawInfo: HIThemeGroupBoxDrawInfo;

interface HIThemeGrowBoxDrawInfo {
	version: number;
	state: number;
	kind: number;
	direction: number;
	size: number;
}
declare var HIThemeGrowBoxDrawInfo: HIThemeGrowBoxDrawInfo;

interface HIThemeHeaderDrawInfo {
	version: number;
	state: number;
	kind: number;
}
declare var HIThemeHeaderDrawInfo: HIThemeHeaderDrawInfo;

declare function HIThemeHitTestScrollBarArrows(inScrollBarBounds: CGRect, inTrackInfo: HIScrollBarTrackInfo, inIsHoriz: boolean, inPtHit: CGPoint, outTrackBounds: CGRect, outPartCode: number): boolean;

interface HIThemeMenuBarDrawInfo {
	version: number;
	state: number;
	attributes: number;
}
declare var HIThemeMenuBarDrawInfo: HIThemeMenuBarDrawInfo;

interface HIThemeMenuDrawInfo {
	version: number;
	menuType: number;
	reserved1: number;
	reserved2: number;
	menuDirection: number;
	reserved3: number;
	reserved4: number;
}
declare var HIThemeMenuDrawInfo: HIThemeMenuDrawInfo;

interface HIThemeMenuDrawInfoVersionZero {
	version: number;
	menuType: number;
}
declare var HIThemeMenuDrawInfoVersionZero: HIThemeMenuDrawInfoVersionZero;

interface HIThemeMenuItemDrawInfo {
	version: number;
	itemType: number;
	state: number;
}
declare var HIThemeMenuItemDrawInfo: HIThemeMenuItemDrawInfo;

interface HIThemeMenuTitleDrawInfo {
	version: number;
	state: number;
	attributes: number;
	condensedTitleExtra: number;
}
declare var HIThemeMenuTitleDrawInfo: HIThemeMenuTitleDrawInfo;

interface HIThemePlacardDrawInfo {
	version: number;
	state: number;
}
declare var HIThemePlacardDrawInfo: HIThemePlacardDrawInfo;

interface HIThemePopupArrowDrawInfo {
	version: number;
	state: number;
	orientation: number;
	size: number;
}
declare var HIThemePopupArrowDrawInfo: HIThemePopupArrowDrawInfo;

interface HIThemeScrollBarDelimitersDrawInfo {
	version: number;
	state: number;
	windowType: number;
	attributes: number;
}
declare var HIThemeScrollBarDelimitersDrawInfo: HIThemeScrollBarDelimitersDrawInfo;

interface HIThemeSegmentDrawInfo {
	version: number;
	state: number;
	value: number;
	size: number;
	kind: number;
	position: number;
	adornment: number;
}
declare var HIThemeSegmentDrawInfo: HIThemeSegmentDrawInfo;

interface HIThemeSeparatorDrawInfo {
	version: number;
	state: number;
}
declare var HIThemeSeparatorDrawInfo: HIThemeSeparatorDrawInfo;

declare function HIThemeSetFill(inBrush: number, inInfo: any, inContext: any, inOrientation: number): number;

declare function HIThemeSetStroke(inBrush: number, inInfo: any, inContext: any, inOrientation: number): number;

declare function HIThemeSetTextFill(inColor: number, inInfo: any, inContext: any, inOrientation: number): number;

interface HIThemeSplitterDrawInfo {
	version: number;
	state: number;
	adornment: number;
}
declare var HIThemeSplitterDrawInfo: HIThemeSplitterDrawInfo;

interface HIThemeTabDrawInfo {
	version: number;
	style: number;
	direction: number;
	size: number;
	adornment: number;
	kind: number;
	position: number;
}
declare var HIThemeTabDrawInfo: HIThemeTabDrawInfo;

interface HIThemeTabDrawInfoVersionZero {
	version: number;
	style: number;
	direction: number;
	size: number;
	adornment: number;
}
declare var HIThemeTabDrawInfoVersionZero: HIThemeTabDrawInfoVersionZero;

interface HIThemeTabPaneDrawInfo {
	version: number;
	state: number;
	direction: number;
	size: number;
	kind: number;
	adornment: number;
}
declare var HIThemeTabPaneDrawInfo: HIThemeTabPaneDrawInfo;

interface HIThemeTabPaneDrawInfoVersionZero {
	version: number;
	state: number;
	direction: number;
	size: number;
}
declare var HIThemeTabPaneDrawInfoVersionZero: HIThemeTabPaneDrawInfoVersionZero;

interface HIThemeTextInfo {
	version: number;
	state: number;
	fontID: number;
	horizontalFlushness: number;
	verticalFlushness: number;
	options: number;
	truncationPosition: number;
	truncationMaxLines: number;
	truncationHappened: boolean;
	filler1: number;
	font: NSFont;
}
declare var HIThemeTextInfo: HIThemeTextInfo;

interface HIThemeTickMarkDrawInfo {
	version: number;
	state: number;
}
declare var HIThemeTickMarkDrawInfo: HIThemeTickMarkDrawInfo;

interface HIThemeWindowDrawInfo {
	version: number;
	state: number;
	windowType: number;
	attributes: number;
	titleHeight: number;
	titleWidth: number;
}
declare var HIThemeWindowDrawInfo: HIThemeWindowDrawInfo;

interface HIThemeWindowWidgetDrawInfo {
	version: number;
	widgetState: number;
	widgetType: number;
	windowState: number;
	windowType: number;
	attributes: number;
	titleHeight: number;
	titleWidth: number;
}
declare var HIThemeWindowWidgetDrawInfo: HIThemeWindowWidgetDrawInfo;

interface HITypeAndCreator {
	type: number;
	creator: number;
}
declare var HITypeAndCreator: HITypeAndCreator;

interface HIViewFrameMetrics {
	top: number;
	left: number;
	bottom: number;
	right: number;
}
declare var HIViewFrameMetrics: HIViewFrameMetrics;

interface HIViewKind {
	signature: number;
	kind: number;
}
declare var HIViewKind: HIViewKind;

interface HMStringResType {
	hmmResID: number;
	hmmIndex: number;
}
declare var HMStringResType: HMStringResType;

interface HMenuBarHeader {
	lastHMenu: number;
	menuTitleBits: PixMap;
}
declare var HMenuBarHeader: HMenuBarHeader;

interface HMenuBarMenu {
	menu: any;
	reserved: number;
}
declare var HMenuBarMenu: HMenuBarMenu;

interface IMKTextInput {

	attributedSubstringFromRange(_: NSRange): NSAttributedString;

	attributesForCharacterIndexLineHeightRectangle(_: number, lineHeightRectangle: CGRect): NSDictionary<any, any>;

	bundleIdentifier(): string;

	characterIndexForPointTrackingInMarkedRange(_: CGPoint, tracking: number, inMarkedRange: boolean): number;

	firstRectForCharacterRangeActualRange(_: NSRange, actualRange: NSRange): CGRect;

	insertTextReplacementRange(_: any, replacementRange: NSRange): void;

	length(): number;

	markedRange(): NSRange;

	overrideKeyboardWithKeyboardNamed(_: string): void;

	selectedRange(): NSRange;

	selectInputMode(_: string): void;

	setMarkedTextSelectionRangeReplacementRange(_: any, selectionRange: NSRange, replacementRange: NSRange): void;

	stringFromRangeActualRange(_: NSRange, actualRange: NSRange): string;

	supportsProperty(_: number): boolean;

	supportsUnicode(): boolean;

	uniqueClientIdentifierString(): string;

	validAttributesForMarkedText(): NSArray<any>;

	windowLevel(): number;
}
declare var IMKTextInput: {

	prototype: IMKTextInput;
};

declare var IMKTextOrientationName: string;

interface IMKUnicodeTextInput {

	insertText(_: any): void;
}
declare var IMKUnicodeTextInput: {

	prototype: IMKUnicodeTextInput;
};

interface IndicatorDragConstraint {
	limitRect: Rect;
	slopRect: Rect;
	axis: number;
}
declare var IndicatorDragConstraint: IndicatorDragConstraint;

declare function InstallEventHandler(inTarget: any, inHandler: (p1: any, p2: any, p3: any) => number, inNumTypes: number, inList: EventTypeSpec, inUserData: any, outRef: any): number;

declare function InstallEventLoopTimer(inEventLoop: any, inFireDelay: number, inInterval: number, inTimerProc: (p1: any, p2: any) => void, inTimerData: any, outTimer: any): number;

declare function InvokeAEFilterUPP(theEvent: EventRecord, returnID: number, transactionID: number, sender: AEDesc, userUPP: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean): boolean;

declare function InvokeAEIdleUPP(theEvent: EventRecord, sleepTime: number, mouseRgn: any, userUPP: (p1: EventRecord, p2: number, p3: any) => boolean): boolean;

declare function InvokeCalibrateEventUPP(event: EventRecord, userUPP: (p1: EventRecord) => void): void;

declare function InvokeCanCalibrateUPP(displayID: number, errMessage: number, userUPP: (p1: number, p2: number) => boolean): boolean;

declare function InvokeControlActionUPP(theControl: any, partCode: number, userUPP: (p1: any, p2: number) => void): void;

declare function InvokeControlEditTextValidationUPP(control: any, userUPP: (p1: any) => void): void;

declare function InvokeControlKeyFilterUPP(theControl: any, keyCode: number, charCode: number, modifiers: number, userUPP: (p1: any, p2: number, p3: number, p4: number) => number): number;

declare function InvokeControlUserPaneActivateUPP(control: any, activating: boolean, userUPP: (p1: any, p2: boolean) => void): void;

declare function InvokeControlUserPaneDrawUPP(control: any, part: number, userUPP: (p1: any, p2: number) => void): void;

declare function InvokeControlUserPaneFocusUPP(control: any, action: number, userUPP: (p1: any, p2: number) => number): number;

declare function InvokeControlUserPaneHitTestUPP(control: any, where: Point, userUPP: (p1: any, p2: Point) => number): number;

declare function InvokeControlUserPaneIdleUPP(control: any, userUPP: (p1: any) => void): void;

declare function InvokeControlUserPaneKeyDownUPP(control: any, keyCode: number, charCode: number, modifiers: number, userUPP: (p1: any, p2: number, p3: number, p4: number) => number): number;

declare function InvokeControlUserPaneTrackingUPP(control: any, startPt: Point, actionProc: (p1: any, p2: number) => void, userUPP: (p1: any, p2: Point, p3: (p1: any, p2: number) => void) => number): number;

declare function InvokeDataBrowserAcceptDragUPP(browser: any, theDrag: any, item: number, userUPP: (p1: any, p2: any, p3: number) => boolean): boolean;

declare function InvokeDataBrowserAddDragItemUPP(browser: any, theDrag: any, item: number, itemRef: any, userUPP: (p1: any, p2: any, p3: number, p4: any) => boolean): boolean;

declare function InvokeDataBrowserDrawItemUPP(browser: any, item: number, property: number, itemState: number, theRect: Rect, gdDepth: number, colorDevice: boolean, userUPP: (p1: any, p2: number, p3: number, p4: number, p5: Rect, p6: number, p7: boolean) => void): void;

declare function InvokeDataBrowserEditItemUPP(browser: any, item: number, property: number, theString: string, maxEditTextRect: Rect, shrinkToFit: string | any, userUPP: (p1: any, p2: number, p3: number, p4: string, p5: Rect, p6: string) => boolean): boolean;

declare function InvokeDataBrowserGetContextualMenuUPP(browser: any, menu: any, helpType: number, helpItemString: string, selection: AEDesc, userUPP: (p1: any, p2: any, p3: number, p4: string, p5: AEDesc) => void): void;

declare function InvokeDataBrowserHitTestUPP(browser: any, itemID: number, property: number, theRect: Rect, mouseRect: Rect, userUPP: (p1: any, p2: number, p3: number, p4: Rect, p5: Rect) => boolean): boolean;

declare function InvokeDataBrowserItemAcceptDragUPP(browser: any, itemID: number, property: number, theRect: Rect, theDrag: any, userUPP: (p1: any, p2: number, p3: number, p4: Rect, p5: any) => number): number;

declare function InvokeDataBrowserItemCompareUPP(browser: any, itemOne: number, itemTwo: number, sortProperty: number, userUPP: (p1: any, p2: number, p3: number, p4: number) => boolean): boolean;

declare function InvokeDataBrowserItemDataUPP(browser: any, item: number, property: number, itemData: any, setValue: boolean, userUPP: (p1: any, p2: number, p3: number, p4: any, p5: boolean) => number): number;

declare function InvokeDataBrowserItemDragRgnUPP(browser: any, itemID: number, property: number, theRect: Rect, dragRgn: any, userUPP: (p1: any, p2: number, p3: number, p4: Rect, p5: any) => void): void;

declare function InvokeDataBrowserItemNotificationUPP(browser: any, item: number, message: number, userUPP: (p1: any, p2: number, p3: number) => void): void;

declare function InvokeDataBrowserItemNotificationWithItemUPP(browser: any, item: number, message: number, itemData: any, userUPP: (p1: any, p2: number, p3: number, p4: any) => void): void;

declare function InvokeDataBrowserItemReceiveDragUPP(browser: any, itemID: number, property: number, dragFlags: number, theDrag: any, userUPP: (p1: any, p2: number, p3: number, p4: number, p5: any) => boolean): boolean;

declare function InvokeDataBrowserItemUPP(item: number, state: number, clientData: any, userUPP: (p1: number, p2: number, p3: any) => void): void;

declare function InvokeDataBrowserPostProcessDragUPP(browser: any, theDrag: any, trackDragResult: number, userUPP: (p1: any, p2: any, p3: number) => void): void;

declare function InvokeDataBrowserReceiveDragUPP(browser: any, theDrag: any, item: number, userUPP: (p1: any, p2: any, p3: number) => boolean): boolean;

declare function InvokeDataBrowserSelectContextualMenuUPP(browser: any, menu: any, selectionType: number, menuID: number, menuItem: number, userUPP: (p1: any, p2: any, p3: number, p4: number, p5: number) => void): void;

declare function InvokeDataBrowserTrackingUPP(browser: any, itemID: number, property: number, theRect: Rect, startPt: Point, modifiers: number, userUPP: (p1: any, p2: number, p3: number, p4: Rect, p5: Point, p6: number) => number): number;

declare function InvokeDragInputUPP(mouse: Point, modifiers: number, dragInputRefCon: any, theDrag: any, userUPP: (p1: Point, p2: number, p3: any, p4: any) => number): number;

declare function InvokeEditUnicodePostUpdateUPP(uniText: number, uniTextLength: number, iStartOffset: number, iEndOffset: number, refcon: any, userUPP: (p1: number, p2: number, p3: number, p4: number, p5: any) => boolean): boolean;

declare function InvokeEventComparatorUPP(inEvent: any, inCompareData: any, userUPP: (p1: any, p2: any) => boolean): boolean;

declare function InvokeEventHandlerUPP(inHandlerCallRef: any, inEvent: any, inUserData: any, userUPP: (p1: any, p2: any, p3: any) => number): number;

declare function InvokeEventLoopIdleTimerUPP(inTimer: any, inState: number, inUserData: any, userUPP: (p1: any, p2: number, p3: any) => void): void;

declare function InvokeEventLoopTimerUPP(inTimer: any, inUserData: any, userUPP: (p1: any, p2: any) => void): void;

declare function InvokeModalFilterUPP(theDialog: any, theEvent: EventRecord, itemHit: number, userUPP: (p1: any, p2: EventRecord, p3: number) => boolean): boolean;

declare function InvokeModalFilterYDUPP(theDialog: any, theEvent: EventRecord, itemHit: number, yourDataPtr: any, userUPP: (p1: any, p2: EventRecord, p3: number, p4: any) => boolean): boolean;

declare function InvokeNMUPP(nmReqPtr: NMRec, userUPP: (p1: NMRec) => void): void;

declare function InvokeOSAActiveUPP(refCon: any, userUPP: (p1: any) => number): number;

declare function InvokeOSACreateAppleEventUPP(theAEEventClass: number, theAEEventID: number, target: AEDesc, returnID: number, transactionID: number, result: AEDesc, refCon: any, userUPP: (p1: number, p2: number, p3: AEDesc, p4: number, p5: number, p6: AEDesc, p7: any) => number): number;

declare function InvokeOSASendUPP(theAppleEvent: AEDesc, reply: AEDesc, sendMode: number, sendPriority: number, timeOutInTicks: number, idleProc: (p1: EventRecord, p2: number, p3: any) => boolean, filterProc: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean, refCon: any, userUPP: (p1: AEDesc, p2: AEDesc, p3: number, p4: number, p5: number, p6: (p1: EventRecord, p2: number, p3: any) => boolean, p7: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean, p8: any) => number): number;

declare function InvokeTXNActionNameMapperUPP(actionName: string, commandID: number, inUserData: any, userUPP: (p1: string, p2: number, p3: any) => string): string;

declare function InvokeTXNContextualMenuSetupUPP(iContextualMenu: any, object_: any, inUserData: any, userUPP: (p1: any, p2: any, p3: any) => void): void;

declare function InvokeTXNFindUPP(matchData: TXNMatchTextRecord, iDataType: number, iMatchOptions: number, iSearchTextPtr: any, encoding: number, absStartOffset: number, searchTextLength: number, oStartMatch: number, oEndMatch: number, ofound: string | any, refCon: any, userUPP: (p1: TXNMatchTextRecord, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: number, p9: number, p10: string, p11: any) => number): number;

declare function InvokeTXNScrollInfoUPP(iValue: number, iMaximumValue: number, iScrollBarOrientation: number, iRefCon: any, userUPP: (p1: number, p2: number, p3: number, p4: any) => void): void;

declare function InvokeUserItemUPP(theDialog: any, itemNo: number, userUPP: (p1: any, p2: number) => void): void;

declare function IsEventInQueue(inQueue: any, inEvent: any): boolean;

declare function IsSecureEventInputEnabled(): boolean;

declare function IsUserCancelEventRef(event: any): boolean;

declare function KBGetLayoutType(iKeyboardType: number): number;

interface LHElement {
	lhHeight: number;
	lhAscent: number;
}
declare var LHElement: LHElement;

declare function LMGetKbdLast(): number;

declare function LMGetKbdType(): number;

declare function LMGetKeyRepThresh(): number;

declare function LMGetKeyThresh(): number;

interface ListRec {
	rView: Rect;
	port: any;
	indent: Point;
	cellSize: Point;
	visible: Rect;
	vScroll: any;
	hScroll: any;
	selFlags: number;
	lActive: boolean;
	lReserved: number;
	listFlags: number;
	clikTime: number;
	clikLoc: Point;
	mouseLoc: Point;
	lClickLoop: () => boolean;
	lastClick: Point;
	refCon: number;
	listDefProc: string;
	userHandle: string;
	dataBounds: Rect;
	cells: string;
	maxIndex: number;
	cellArray: number;
}
declare var ListRec: ListRec;

interface MCEntry {
	mctID: number;
	mctItem: number;
	mctRGB1: RGBColor;
	mctRGB2: RGBColor;
	mctRGB3: RGBColor;
	mctRGB4: RGBColor;
	mctReserved: number;
}
declare var MCEntry: MCEntry;

interface MDEFDrawData {
	trackingData: MenuTrackingData;
	context: any;
}
declare var MDEFDrawData: MDEFDrawData;

interface MDEFDrawItemsData {
	firstItem: number;
	lastItem: number;
	trackingData: MenuTrackingData;
	context: any;
}
declare var MDEFDrawItemsData: MDEFDrawItemsData;

interface MDEFFindItemData {
	trackingData: MenuTrackingData;
	context: any;
}
declare var MDEFFindItemData: MDEFFindItemData;

interface MDEFHiliteItemData {
	previousItem: number;
	newItem: number;
	context: any;
}
declare var MDEFHiliteItemData: MDEFHiliteItemData;

interface MeasureWindowTitleRec {
	fullTitleWidth: number;
	titleTextWidth: number;
	isUnicodeTitle: boolean;
	unused: boolean;
}
declare var MeasureWindowTitleRec: MeasureWindowTitleRec;

interface MenuBarHeader {
	lastMenu: number;
	lastRight: number;
	mbResID: number;
}
declare var MenuBarHeader: MenuBarHeader;

interface MenuBarMenu {
	menu: any;
	menuLeft: number;
}
declare var MenuBarMenu: MenuBarMenu;

interface MenuCRsrc {
	numEntries: number;
	mcEntryRecs: MCEntry;
}
declare var MenuCRsrc: MenuCRsrc;

interface MenuItemDataRec {
	whichData: number;
	text: string;
	mark: number;
	cmdKey: number;
	cmdKeyGlyph: number;
	cmdKeyModifiers: number;
	style: number;
	enabled: boolean;
	iconEnabled: boolean;
	filler1: number;
	iconID: number;
	iconType: number;
	iconHandle: string;
	cmdID: number;
	encoding: number;
	submenuID: number;
	submenuHandle: any;
	fontID: number;
	refcon: any;
	attr: number;
	cfText: string;
	properties: any;
	indent: number;
	cmdVirtualKey: number;
	attributedText: NSAttributedString;
	font: NSFont;
}
declare var MenuItemDataRec: MenuItemDataRec;

interface MenuTrackingData {
	menu: any;
	itemSelected: number;
	itemUnderMouse: number;
	itemRect: Rect;
	virtualMenuTop: number;
	virtualMenuBottom: number;
}
declare var MenuTrackingData: MenuTrackingData;

interface NMRec {
	qLink: QElem;
	qType: number;
	nmFlags: number;
	nmPrivate: any;
	nmReserved: number;
	nmMark: number;
	nmIcon: string;
	nmSound: string;
	nmStr: string;
	nmResp: (p1: NMRec) => void;
	nmRefCon: any;
}
declare var NMRec: NMRec;

declare function NewAEFilterUPP(userRoutine: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean): (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean;

declare function NewAEIdleUPP(userRoutine: (p1: EventRecord, p2: number, p3: any) => boolean): (p1: EventRecord, p2: number, p3: any) => boolean;

declare function NewCalibrateEventUPP(userRoutine: (p1: EventRecord) => void): (p1: EventRecord) => void;

declare function NewCanCalibrateUPP(userRoutine: (p1: number, p2: number) => boolean): (p1: number, p2: number) => boolean;

declare function NewControlActionUPP(userRoutine: (p1: any, p2: number) => void): (p1: any, p2: number) => void;

declare function NewControlEditTextValidationUPP(userRoutine: (p1: any) => void): (p1: any) => void;

declare function NewControlKeyFilterUPP(userRoutine: (p1: any, p2: number, p3: number, p4: number) => number): (p1: any, p2: number, p3: number, p4: number) => number;

declare function NewControlUserPaneActivateUPP(userRoutine: (p1: any, p2: boolean) => void): (p1: any, p2: boolean) => void;

declare function NewControlUserPaneDrawUPP(userRoutine: (p1: any, p2: number) => void): (p1: any, p2: number) => void;

declare function NewControlUserPaneFocusUPP(userRoutine: (p1: any, p2: number) => number): (p1: any, p2: number) => number;

declare function NewControlUserPaneHitTestUPP(userRoutine: (p1: any, p2: Point) => number): (p1: any, p2: Point) => number;

declare function NewControlUserPaneIdleUPP(userRoutine: (p1: any) => void): (p1: any) => void;

declare function NewControlUserPaneKeyDownUPP(userRoutine: (p1: any, p2: number, p3: number, p4: number) => number): (p1: any, p2: number, p3: number, p4: number) => number;

declare function NewControlUserPaneTrackingUPP(userRoutine: (p1: any, p2: Point, p3: (p1: any, p2: number) => void) => number): (p1: any, p2: Point, p3: (p1: any, p2: number) => void) => number;

declare function NewDataBrowserAcceptDragUPP(userRoutine: (p1: any, p2: any, p3: number) => boolean): (p1: any, p2: any, p3: number) => boolean;

declare function NewDataBrowserAddDragItemUPP(userRoutine: (p1: any, p2: any, p3: number, p4: any) => boolean): (p1: any, p2: any, p3: number, p4: any) => boolean;

declare function NewDataBrowserDrawItemUPP(userRoutine: (p1: any, p2: number, p3: number, p4: number, p5: Rect, p6: number, p7: boolean) => void): (p1: any, p2: number, p3: number, p4: number, p5: Rect, p6: number, p7: boolean) => void;

declare function NewDataBrowserEditItemUPP(userRoutine: (p1: any, p2: number, p3: number, p4: string, p5: Rect, p6: string) => boolean): (p1: any, p2: number, p3: number, p4: string, p5: Rect, p6: string) => boolean;

declare function NewDataBrowserGetContextualMenuUPP(userRoutine: (p1: any, p2: any, p3: number, p4: string, p5: AEDesc) => void): (p1: any, p2: any, p3: number, p4: string, p5: AEDesc) => void;

declare function NewDataBrowserHitTestUPP(userRoutine: (p1: any, p2: number, p3: number, p4: Rect, p5: Rect) => boolean): (p1: any, p2: number, p3: number, p4: Rect, p5: Rect) => boolean;

declare function NewDataBrowserItemAcceptDragUPP(userRoutine: (p1: any, p2: number, p3: number, p4: Rect, p5: any) => number): (p1: any, p2: number, p3: number, p4: Rect, p5: any) => number;

declare function NewDataBrowserItemCompareUPP(userRoutine: (p1: any, p2: number, p3: number, p4: number) => boolean): (p1: any, p2: number, p3: number, p4: number) => boolean;

declare function NewDataBrowserItemDataUPP(userRoutine: (p1: any, p2: number, p3: number, p4: any, p5: boolean) => number): (p1: any, p2: number, p3: number, p4: any, p5: boolean) => number;

declare function NewDataBrowserItemDragRgnUPP(userRoutine: (p1: any, p2: number, p3: number, p4: Rect, p5: any) => void): (p1: any, p2: number, p3: number, p4: Rect, p5: any) => void;

declare function NewDataBrowserItemNotificationUPP(userRoutine: (p1: any, p2: number, p3: number) => void): (p1: any, p2: number, p3: number) => void;

declare function NewDataBrowserItemNotificationWithItemUPP(userRoutine: (p1: any, p2: number, p3: number, p4: any) => void): (p1: any, p2: number, p3: number, p4: any) => void;

declare function NewDataBrowserItemReceiveDragUPP(userRoutine: (p1: any, p2: number, p3: number, p4: number, p5: any) => boolean): (p1: any, p2: number, p3: number, p4: number, p5: any) => boolean;

declare function NewDataBrowserItemUPP(userRoutine: (p1: number, p2: number, p3: any) => void): (p1: number, p2: number, p3: any) => void;

declare function NewDataBrowserPostProcessDragUPP(userRoutine: (p1: any, p2: any, p3: number) => void): (p1: any, p2: any, p3: number) => void;

declare function NewDataBrowserReceiveDragUPP(userRoutine: (p1: any, p2: any, p3: number) => boolean): (p1: any, p2: any, p3: number) => boolean;

declare function NewDataBrowserSelectContextualMenuUPP(userRoutine: (p1: any, p2: any, p3: number, p4: number, p5: number) => void): (p1: any, p2: any, p3: number, p4: number, p5: number) => void;

declare function NewDataBrowserTrackingUPP(userRoutine: (p1: any, p2: number, p3: number, p4: Rect, p5: Point, p6: number) => number): (p1: any, p2: number, p3: number, p4: Rect, p5: Point, p6: number) => number;

declare function NewDragInputUPP(userRoutine: (p1: Point, p2: number, p3: any, p4: any) => number): (p1: Point, p2: number, p3: any, p4: any) => number;

declare function NewEditUnicodePostUpdateUPP(userRoutine: (p1: number, p2: number, p3: number, p4: number, p5: any) => boolean): (p1: number, p2: number, p3: number, p4: number, p5: any) => boolean;

declare function NewEventComparatorUPP(userRoutine: (p1: any, p2: any) => boolean): (p1: any, p2: any) => boolean;

declare function NewEventHandlerUPP(userRoutine: (p1: any, p2: any, p3: any) => number): (p1: any, p2: any, p3: any) => number;

declare function NewEventLoopIdleTimerUPP(userRoutine: (p1: any, p2: number, p3: any) => void): (p1: any, p2: number, p3: any) => void;

declare function NewEventLoopTimerUPP(userRoutine: (p1: any, p2: any) => void): (p1: any, p2: any) => void;

declare function NewModalFilterUPP(userRoutine: (p1: any, p2: EventRecord, p3: number) => boolean): (p1: any, p2: EventRecord, p3: number) => boolean;

declare function NewModalFilterYDUPP(userRoutine: (p1: any, p2: EventRecord, p3: number, p4: any) => boolean): (p1: any, p2: EventRecord, p3: number, p4: any) => boolean;

declare function NewNMUPP(userRoutine: (p1: NMRec) => void): (p1: NMRec) => void;

declare function NewOSAActiveUPP(userRoutine: (p1: any) => number): (p1: any) => number;

declare function NewOSACreateAppleEventUPP(userRoutine: (p1: number, p2: number, p3: AEDesc, p4: number, p5: number, p6: AEDesc, p7: any) => number): (p1: number, p2: number, p3: AEDesc, p4: number, p5: number, p6: AEDesc, p7: any) => number;

declare function NewOSASendUPP(userRoutine: (p1: AEDesc, p2: AEDesc, p3: number, p4: number, p5: number, p6: (p1: EventRecord, p2: number, p3: any) => boolean, p7: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean, p8: any) => number): (p1: AEDesc, p2: AEDesc, p3: number, p4: number, p5: number, p6: (p1: EventRecord, p2: number, p3: any) => boolean, p7: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean, p8: any) => number;

declare function NewTXNActionNameMapperUPP(userRoutine: (p1: string, p2: number, p3: any) => string): (p1: string, p2: number, p3: any) => string;

declare function NewTXNContextualMenuSetupUPP(userRoutine: (p1: any, p2: any, p3: any) => void): (p1: any, p2: any, p3: any) => void;

declare function NewTXNFindUPP(userRoutine: (p1: TXNMatchTextRecord, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: number, p9: number, p10: string, p11: any) => number): (p1: TXNMatchTextRecord, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: number, p9: number, p10: string, p11: any) => number;

declare function NewTXNScrollInfoUPP(userRoutine: (p1: number, p2: number, p3: number, p4: any) => void): (p1: number, p2: number, p3: number, p4: any) => void;

declare function NewUserItemUPP(userRoutine: (p1: any, p2: number) => void): (p1: any, p2: number) => void;

interface NullStRec {
	teReserved: number;
	nullScrap: StScrpRec;
}
declare var NullStRec: NullStRec;

declare function OSAAddStorageType(scriptData: any, dscType: number): number;

declare function OSAAvailableDialectCodeList(scriptingComponent: ComponentInstanceRecord, resultingDialectCodeList: AEDesc): number;

declare function OSAAvailableDialects(scriptingComponent: ComponentInstanceRecord, resultingDialectInfoList: AEDesc): number;

declare function OSACoerceFromDesc(scriptingComponent: ComponentInstanceRecord, scriptData: AEDesc, modeFlags: number, resultingScriptID: number): number;

declare function OSACoerceToDesc(scriptingComponent: ComponentInstanceRecord, scriptID: number, desiredType: number, modeFlags: number, result: AEDesc): number;

declare function OSACompile(scriptingComponent: ComponentInstanceRecord, sourceData: AEDesc, modeFlags: number, previousAndResultingScriptID: number): number;

declare function OSACompileExecute(scriptingComponent: ComponentInstanceRecord, sourceData: AEDesc, contextID: number, modeFlags: number, resultingScriptValueID: number): number;

declare function OSACopyDisplayString(scriptingComponent: ComponentInstanceRecord, scriptID: number, modeFlags: number, result: NSAttributedString): number;

declare function OSACopyID(scriptingComponent: ComponentInstanceRecord, fromID: number, toID: number): number;

declare function OSACopyScript(scriptingComponent: ComponentInstanceRecord, fromID: number, toID: number): number;

declare function OSACopyScriptingDefinition(ref: FSRef, modeFlags: number, sdef: NSData): number;

declare function OSACopyScriptingDefinitionFromURL(url: NSURL, modeFlags: number, sdef: NSData): number;

declare function OSACopySourceString(scriptingComponent: ComponentInstanceRecord, scriptID: number, modeFlags: number, result: NSAttributedString): number;

declare function OSADisplay(scriptingComponent: ComponentInstanceRecord, scriptValueID: number, desiredType: number, modeFlags: number, resultingText: AEDesc): number;

declare function OSADispose(scriptingComponent: ComponentInstanceRecord, scriptID: number): number;

declare function OSADoEvent(scriptingComponent: ComponentInstanceRecord, theAppleEvent: AEDesc, contextID: number, modeFlags: number, reply: AEDesc): number;

declare function OSADoScript(scriptingComponent: ComponentInstanceRecord, sourceData: AEDesc, contextID: number, desiredType: number, modeFlags: number, resultingText: AEDesc): number;

declare function OSADoScriptFile(scriptingComponent: ComponentInstanceRecord, scriptFile: FSRef, contextID: number, desiredType: number, modeFlags: number, resultingText: AEDesc): number;

declare function OSAExecute(scriptingComponent: ComponentInstanceRecord, compiledScriptID: number, contextID: number, modeFlags: number, resultingScriptValueID: number): number;

declare function OSAExecuteEvent(scriptingComponent: ComponentInstanceRecord, theAppleEvent: AEDesc, contextID: number, modeFlags: number, resultingScriptValueID: number): number;

declare function OSAGenericToRealID(genericScriptingComponent: ComponentInstanceRecord, theScriptID: number, theExactComponent: ComponentInstanceRecord): number;

declare function OSAGetActiveProc(scriptingComponent: ComponentInstanceRecord, activeProc: (p1: any) => number, refCon: any): number;

declare function OSAGetCreateProc(scriptingComponent: ComponentInstanceRecord, createProc: (p1: number, p2: number, p3: AEDesc, p4: number, p5: number, p6: AEDesc, p7: any) => number, refCon: any): number;

declare function OSAGetCurrentDialect(scriptingComponent: ComponentInstanceRecord, resultingDialectCode: number): number;

declare function OSAGetDefaultScriptingComponent(genericScriptingComponent: ComponentInstanceRecord, scriptingSubType: number): number;

declare function OSAGetDialectInfo(scriptingComponent: ComponentInstanceRecord, dialectCode: number, selector: number, resultingDialectInfo: AEDesc): number;

declare function OSAGetHandler(scriptingComponent: ComponentInstanceRecord, modeFlags: number, contextID: number, handlerName: AEDesc, resultingCompiledScriptID: number): number;

declare function OSAGetHandlerNames(scriptingComponent: ComponentInstanceRecord, modeFlags: number, contextID: number, resultingHandlerNames: AEDesc): number;

declare function OSAGetProperty(scriptingComponent: ComponentInstanceRecord, modeFlags: number, contextID: number, variableName: AEDesc, resultingScriptValueID: number): number;

declare function OSAGetPropertyNames(scriptingComponent: ComponentInstanceRecord, modeFlags: number, contextID: number, resultingPropertyNames: AEDesc): number;

declare function OSAGetResumeDispatchProc(scriptingComponent: ComponentInstanceRecord, resumeDispatchProc: (p1: AEDesc, p2: AEDesc, p3: any) => number, refCon: any): number;

declare function OSAGetScriptDataFromURL(scriptURL: NSURL, storable: string | any, modeFlags: number, resultingScriptData: AEDesc): number;

declare function OSAGetScriptInfo(scriptingComponent: ComponentInstanceRecord, scriptID: number, selector: number, result: number): number;

declare function OSAGetScriptingComponent(genericScriptingComponent: ComponentInstanceRecord, scriptingSubType: number, scriptingInstance: ComponentInstanceRecord): number;

declare function OSAGetScriptingComponentFromStored(genericScriptingComponent: ComponentInstanceRecord, scriptData: AEDesc, scriptingSubType: number): number;

declare function OSAGetSendProc(scriptingComponent: ComponentInstanceRecord, sendProc: (p1: AEDesc, p2: AEDesc, p3: number, p4: number, p5: number, p6: (p1: EventRecord, p2: number, p3: any) => boolean, p7: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean, p8: any) => number, refCon: any): number;

declare function OSAGetSource(scriptingComponent: ComponentInstanceRecord, scriptID: number, desiredType: number, resultingSourceData: AEDesc): number;

declare function OSAGetStorageType(scriptData: any, dscType: number): number;

declare function OSAGetSysTerminology(scriptingComponent: ComponentInstanceRecord, modeFlags: number, terminologyID: number, terminologyList: AEDesc): number;

declare function OSALoad(scriptingComponent: ComponentInstanceRecord, scriptData: AEDesc, modeFlags: number, resultingScriptID: number): number;

declare function OSALoadExecute(scriptingComponent: ComponentInstanceRecord, scriptData: AEDesc, contextID: number, modeFlags: number, resultingScriptValueID: number): number;

declare function OSALoadExecuteFile(scriptingComponent: ComponentInstanceRecord, scriptFile: FSRef, contextID: number, modeFlags: number, resultingScriptValueID: number): number;

declare function OSALoadFile(scriptingComponent: ComponentInstanceRecord, scriptFile: FSRef, storable: string | any, modeFlags: number, resultingScriptID: number): number;

declare function OSALoadScriptData(scriptingComponent: ComponentInstanceRecord, scriptData: AEDesc, fromURL: NSURL, modeFlags: number, resultingScriptID: number): number;

declare function OSAMakeContext(scriptingComponent: ComponentInstanceRecord, contextName: AEDesc, parentContext: number, resultingContextID: number): number;

declare function OSARealToGenericID(genericScriptingComponent: ComponentInstanceRecord, theScriptID: number, theExactComponent: ComponentInstanceRecord): number;

declare function OSARemoveStorageType(scriptData: any): number;

declare function OSAScriptError(scriptingComponent: ComponentInstanceRecord, selector: number, desiredType: number, resultingErrorDescription: AEDesc): number;

declare function OSAScriptingComponentName(scriptingComponent: ComponentInstanceRecord, resultingScriptingComponentName: AEDesc): number;

declare function OSASetActiveProc(scriptingComponent: ComponentInstanceRecord, activeProc: (p1: any) => number, refCon: any): number;

declare function OSASetCreateProc(scriptingComponent: ComponentInstanceRecord, createProc: (p1: number, p2: number, p3: AEDesc, p4: number, p5: number, p6: AEDesc, p7: any) => number, refCon: any): number;

declare function OSASetCurrentDialect(scriptingComponent: ComponentInstanceRecord, dialectCode: number): number;

declare function OSASetDefaultScriptingComponent(genericScriptingComponent: ComponentInstanceRecord, scriptingSubType: number): number;

declare function OSASetDefaultTarget(scriptingComponent: ComponentInstanceRecord, target: AEDesc): number;

declare function OSASetHandler(scriptingComponent: ComponentInstanceRecord, modeFlags: number, contextID: number, handlerName: AEDesc, compiledScriptID: number): number;

declare function OSASetProperty(scriptingComponent: ComponentInstanceRecord, modeFlags: number, contextID: number, variableName: AEDesc, scriptValueID: number): number;

declare function OSASetResumeDispatchProc(scriptingComponent: ComponentInstanceRecord, resumeDispatchProc: (p1: AEDesc, p2: AEDesc, p3: any) => number, refCon: any): number;

declare function OSASetScriptInfo(scriptingComponent: ComponentInstanceRecord, scriptID: number, selector: number, value: number): number;

declare function OSASetSendProc(scriptingComponent: ComponentInstanceRecord, sendProc: (p1: AEDesc, p2: AEDesc, p3: number, p4: number, p5: number, p6: (p1: EventRecord, p2: number, p3: any) => boolean, p7: (p1: EventRecord, p2: number, p3: number, p4: AEDesc) => boolean, p8: any) => number, refCon: any): number;

declare function OSAStartRecording(scriptingComponent: ComponentInstanceRecord, compiledScriptToModifyID: number): number;

declare function OSAStopRecording(scriptingComponent: ComponentInstanceRecord, compiledScriptID: number): number;

declare function OSAStore(scriptingComponent: ComponentInstanceRecord, scriptID: number, desiredType: number, modeFlags: number, resultingScriptData: AEDesc): number;

declare function OSAStoreFile(scriptingComponent: ComponentInstanceRecord, scriptID: number, desiredType: number, modeFlags: number, scriptFile: FSRef): number;

interface PickerMenuItemInfo {
	editMenuID: number;
	cutItem: number;
	copyItem: number;
	pasteItem: number;
	clearItem: number;
	undoItem: number;
}
declare var PickerMenuItemInfo: PickerMenuItemInfo;

declare function PopSymbolicHotKeyMode(inToken: any): void;

declare function PostEventToQueue(inQueue: any, inEvent: any, inPriority: number): number;

declare function ProcessHICommand(inCommand: HICommand): number;

interface ProgressTrackInfo {
	phase: number;
}
declare var ProgressTrackInfo: ProgressTrackInfo;

interface PromiseHFSFlavor {
	fileType: number;
	fileCreator: number;
	fdFlags: number;
	promisedFlavor: number;
}
declare var PromiseHFSFlavor: PromiseHFSFlavor;

declare function PushSymbolicHotKeyMode(inOptions: number): any;

declare function QuitEventLoop(inEventLoop: any): number;

declare function ReceiveNextEvent(inNumTypes: number, inList: EventTypeSpec, inTimeout: number, inPullEvent: boolean, outEvent: any): number;

declare function RegisterEventHotKey(inHotKeyCode: number, inHotKeyModifiers: number, inHotKeyID: EventHotKeyID, inTarget: any, inOptions: number, outRef: any): number;

declare function ReleaseEvent(inEvent: any): void;

declare function RemoveEventFromQueue(inQueue: any, inEvent: any): number;

declare function RemoveEventHandler(inHandlerRef: any): number;

declare function RemoveEventLoopTimer(inTimer: any): number;

declare function RemoveEventParameter(inEvent: any, inName: number): number;

declare function RemoveEventTypesFromHandler(inHandlerRef: any, inNumTypes: number, inList: EventTypeSpec): number;

declare function RetainEvent(inEvent: any): any;

declare function RunCurrentEventLoop(inTimeout: number): number;

interface SRCallBackParam {
	callBack: (p1: SRCallBackStruct) => void;
	refCon: any;
}
declare var SRCallBackParam: SRCallBackParam;

interface SRCallBackStruct {
	what: number;
	message: number;
	instance: any;
	status: number;
	flags: number;
	refCon: any;
}
declare var SRCallBackStruct: SRCallBackStruct;

interface STElement {
	stCount: number;
	stHeight: number;
	stAscent: number;
	stFont: number;
	stFace: number;
	stSize: number;
	stColor: RGBColor;
}
declare var STElement: STElement;

interface ScrapFlavorInfo {
	flavorType: number;
	flavorFlags: number;
}
declare var ScrapFlavorInfo: ScrapFlavorInfo;

interface ScrapTranslationList {
	modDate: number;
	groupCount: number;
}
declare var ScrapTranslationList: ScrapTranslationList;

interface ScrapTypeSpec {
	format: number;
	hint: number;
}
declare var ScrapTypeSpec: ScrapTypeSpec;

interface ScriptLanguageRecord {
	fScript: number;
	fLanguage: number;
}
declare var ScriptLanguageRecord: ScriptLanguageRecord;

interface ScriptLanguageSupport {
	fScriptLanguageCount: number;
	fScriptLanguageArray: ScriptLanguageRecord;
}
declare var ScriptLanguageSupport: ScriptLanguageSupport;

interface ScrollBarTrackInfo {
	viewsize: number;
	pressState: number;
}
declare var ScrollBarTrackInfo: ScrollBarTrackInfo;

interface ScrpSTElement {
	scrpStartChar: number;
	scrpHeight: number;
	scrpAscent: number;
	scrpFont: number;
	scrpFace: number;
	scrpSize: number;
	scrpColor: RGBColor;
}
declare var ScrpSTElement: ScrpSTElement;

declare function SendEventToEventTarget(inEvent: any, inTarget: any): number;

declare function SendEventToEventTargetWithOptions(inEvent: any, inTarget: any, inOptions: number): number;

declare function SetEventLoopTimerNextFireTime(inTimer: any, inNextFire: number): number;

declare function SetEventParameter(inEvent: any, inName: number, inType: number, inSize: number, inDataPtr: any): number;

declare function SetEventTime(inEvent: any, inTime: number): number;

declare function SetFontInfoForSelection(iStyleType: number, iNumStyles: number, iStyles: any, iFPEventTarget: any): number;

declare function SetSystemUIMode(inMode: number, inOptions: number): number;

interface SetupWindowProxyDragImageRec {
	imageGWorld: any;
	imageRgn: any;
	outlineRgn: any;
}
declare var SetupWindowProxyDragImageRec: SetupWindowProxyDragImageRec;

interface SliderTrackInfo {
	thumbDir: number;
	pressState: number;
}
declare var SliderTrackInfo: SliderTrackInfo;

interface StScrpRec {
	scrpNStyles: number;
	scrpStyleTab: ScrpSTElement;
}
declare var StScrpRec: StScrpRec;

interface StandardIconListCellDataRec {
	iconHandle: string;
	font: number;
	face: number;
	size: number;
	name: number;
}
declare var StandardIconListCellDataRec: StandardIconListCellDataRec;

interface StyleRun {
	startChar: number;
	styleIndex: number;
}
declare var StyleRun: StyleRun;

interface TERec {
	destRect: Rect;
	viewRect: Rect;
	selRect: Rect;
	lineHeight: number;
	fontAscent: number;
	selPoint: Point;
	selStart: number;
	selEnd: number;
	active: number;
	wordBreak: (p1: string, p2: number) => boolean;
	clickLoop: (p1: TERec) => boolean;
	clickTime: number;
	clickLoc: number;
	caretTime: number;
	caretState: number;
	just: number;
	teLength: number;
	hText: string;
	hDispatchRec: number;
	clikStuff: number;
	crOnly: number;
	txFont: number;
	txFace: number;
	txMode: number;
	txSize: number;
	inPort: any;
	highHook: (p1: Rect, p2: TERec) => void;
	caretHook: (p1: Rect, p2: TERec) => void;
	nLines: number;
	lineStarts: number;
}
declare var TERec: TERec;

interface TEStyleRec {
	nRuns: number;
	nStyles: number;
	styleTab: STElement;
	lhTab: LHElement;
	teRefCon: number;
	nullStyle: NullStRec;
	runs: StyleRun;
}
declare var TEStyleRec: TEStyleRec;

declare function TISCopyCurrentASCIICapableKeyboardInputSource(): any;

declare function TISCopyCurrentASCIICapableKeyboardLayoutInputSource(): any;

declare function TISCopyCurrentKeyboardInputSource(): any;

declare function TISCopyCurrentKeyboardLayoutInputSource(): any;

declare function TISCopyInputMethodKeyboardLayoutOverride(): any;

declare function TISCopyInputSourceForLanguage(language: string): any;

declare function TISCreateASCIICapableInputSourceList(): NSArray<any>;

declare function TISCreateInputSourceList(properties: NSDictionary<any, any>, includeAllInstalled: boolean): NSArray<any>;

declare function TISDeselectInputSource(inputSource: any): number;

declare function TISDisableInputSource(inputSource: any): number;

declare function TISEnableInputSource(inputSource: any): number;

declare function TISGetInputSourceProperty(inputSource: any, propertyKey: string): any;

declare function TISInputSourceGetTypeID(): number;

declare function TISRegisterInputSource(location: NSURL): number;

declare function TISSelectInputSource(inputSource: any): number;

declare function TISSetInputMethodKeyboardLayoutOverride(keyboardLayout: any): number;

declare function TSMGetActiveDocument(): any;

declare function TSMGetDocumentProperty(docID: any, propertyTag: number, bufferSize: number, actualSize: number, propertyBuffer: any): number;

interface TSMGlyphInfo {
	range: CFRange;
	fontRef: number;
	collection: number;
	glyphID: number;
}
declare var TSMGlyphInfo: TSMGlyphInfo;

interface TSMGlyphInfoArray {
	numGlyphInfo: number;
	glyphInfo: TSMGlyphInfo;
}
declare var TSMGlyphInfoArray: TSMGlyphInfoArray;

declare function TSMRemoveDocumentProperty(docID: any, propertyTag: number): number;

declare function TSMSetDocumentProperty(docID: any, propertyTag: number, propertySize: number, propertyData: any): number;

interface TXNATSUIFeatures {
	featureCount: number;
	featureTypes: number;
	featureSelectors: number;
}
declare var TXNATSUIFeatures: TXNATSUIFeatures;

interface TXNATSUIVariations {
	variationCount: number;
	variationAxis: number;
	variationValues: number;
}
declare var TXNATSUIVariations: TXNATSUIVariations;

interface TXNBackground {
	bgType: number;
	bg: TXNBackgroundData;
}
declare var TXNBackground: TXNBackground;

interface TXNBackgroundData {
	color: RGBColor;
}
declare var TXNBackgroundData: TXNBackgroundData;

interface TXNCarbonEventInfo {
	useCarbonEvents: boolean;
	filler: number;
	flags: number;
	fDictionary: NSDictionary<any, any>;
}
declare var TXNCarbonEventInfo: TXNCarbonEventInfo;

interface TXNLongRect {
	top: number;
	left: number;
	bottom: number;
	right: number;
}
declare var TXNLongRect: TXNLongRect;

interface TXNMargins {
	topMargin: number;
	leftMargin: number;
	bottomMargin: number;
	rightMargin: number;
}
declare var TXNMargins: TXNMargins;

interface TXNMatchTextRecord {
	iTextPtr: any;
	iTextToMatchLength: number;
	iTextEncoding: number;
}
declare var TXNMatchTextRecord: TXNMatchTextRecord;

interface TXNTab {
	value: number;
	tabType: number;
	filler: number;
}
declare var TXNTab: TXNTab;

interface TabletPointRec {
	absX: number;
	absY: number;
	absZ: number;
	buttons: number;
	pressure: number;
	tiltX: number;
	tiltY: number;
	rotation: number;
	tangentialPressure: number;
	deviceID: number;
	vendor1: number;
	vendor2: number;
	vendor3: number;
}
declare var TabletPointRec: TabletPointRec;

interface TabletProximityRec {
	vendorID: number;
	tabletID: number;
	pointerID: number;
	deviceID: number;
	systemTabletID: number;
	vendorPointerType: number;
	pointerSerialNumber: number;
	uniqueID: number;
	capabilityMask: number;
	pointerType: number;
	enterProximity: number;
}
declare var TabletProximityRec: TabletProximityRec;

interface TextServiceInfo {
	fComponent: ComponentRecord;
	fItemName: number;
}
declare var TextServiceInfo: TextServiceInfo;

interface TextServiceList {
	fTextServiceCount: number;
	fServices: TextServiceInfo;
}
declare var TextServiceList: TextServiceList;

interface TextStyle {
	tsFont: number;
	tsFace: number;
	tsSize: number;
	tsColor: RGBColor;
}
declare var TextStyle: TextStyle;

declare const TextWidthHook: number;

interface ThemeButtonDrawInfo {
	state: number;
	value: number;
	adornment: number;
}
declare var ThemeButtonDrawInfo: ThemeButtonDrawInfo;

interface ThemeWindowMetrics {
	metricSize: number;
	titleHeight: number;
	titleWidth: number;
	popupTabOffset: number;
	popupTabWidth: number;
	popupTabPosition: number;
}
declare var ThemeWindowMetrics: ThemeWindowMetrics;

interface TransitionWindowOptions {
	version: number;
	duration: number;
	window: any;
	userData: any;
}
declare var TransitionWindowOptions: TransitionWindowOptions;

interface TypeSelectRecord {
	tsrLastKeyTime: number;
	tsrScript: number;
	tsrKeyStrokes: number;
}
declare var TypeSelectRecord: TypeSelectRecord;

interface URLCallbackInfo {
	version: number;
	urlRef: any;
	property: string;
	currentSize: number;
	systemEvent: EventRecord;
}
declare var URLCallbackInfo: URLCallbackInfo;

declare function UnregisterEventHotKey(inHotKey: any): number;

declare const WIDTHHook: number;

interface WStateData {
	userState: Rect;
	stdState: Rect;
}
declare var WStateData: WStateData;

interface WinCTab {
	wCSeed: number;
	wCReserved: number;
	ctSize: number;
	ctTable: ColorSpec;
}
declare var WinCTab: WinCTab;

declare const _KeyboardDispatch: number;

declare const activMask: number;

declare const activateEvt: number;

declare const activeFlag: number;

declare const activeFlagBit: number;

declare const adbAddrMask: number;

declare const addSize: number;

declare const addSizeBit: number;

declare const alphaLock: number;

declare const alphaLockBit: number;

declare const altDBoxProc: number;

declare const app1Evt: number;

declare const app1Mask: number;

declare const app2Evt: number;

declare const app2Mask: number;

declare const app3Evt: number;

declare const app3Mask: number;

declare const app4Evt: number;

declare const app4Mask: number;

declare const appearanceBadBrushIndexErr: number;

declare const appearanceBadCursorIndexErr: number;

declare const appearanceBadTextColorIndexErr: number;

declare const appearanceProcessNotRegisteredErr: number;

declare const appearanceProcessRegisteredErr: number;

declare const appearanceThemeHasNoAccents: number;

declare const appendDITLBottom: number;

declare const appendDITLRight: number;

declare const autoKey: number;

declare const autoKeyMask: number;

declare const bHandleAERecording: number;

declare const bLanguageMask: number;

declare const bScriptLanguageMask: number;

declare const bScriptMask: number;

declare const bTakeActiveEvent: number;

declare const btnCtrl: number;

declare const btnState: number;

declare const btnStateBit: number;

declare const cAccessoryProcess: number;

declare const cAccessorySuitcase: number;

declare const cAddress: number;

declare const cAliasFile: number;

declare const cAliasList: number;

declare const cAliasOrString: number;

declare const cApplicationFile: number;

declare const cApplicationProcess: number;

declare const cApril: number;

declare const cAugust: number;

declare const cBodyColor: number;

declare const cClassIdentifier: number;

declare const cClippingFile: number;

declare const cClippingWindow: number;

declare const cClosure: number;

declare const cCoerceKataHiragana: number;

declare const cCoerceLowerCase: number;

declare const cCoerceOneByteToTwoByte: number;

declare const cCoerceRemoveDiacriticals: number;

declare const cCoerceRemoveHyphens: number;

declare const cCoerceRemovePunctuation: number;

declare const cCoerceRemoveWhiteSpace: number;

declare const cCoerceSmallKana: number;

declare const cCoerceUpperCase: number;

declare const cCoerceZenkakuhankaku: number;

declare const cCoercion: number;

declare const cConstant: number;

declare const cContainer: number;

declare const cContainerWindow: number;

declare const cContentSpace: number;

declare const cControlPanelFile: number;

declare const cDTPWindow: number;

declare const cDecember: number;

declare const cDeskAccessoryFile: number;

declare const cDesktop: number;

declare const cDesktopPrinter: number;

declare const cDisk: number;

declare const cDocumentFile: number;

declare const cDynamicLibrary: number;

declare const cEntireContents: number;

declare const cEventIdentifier: number;

declare const cFebruary: number;

declare const cFolder: number;

declare const cFontFile: number;

declare const cFontSuitcase: number;

declare const cFrameColor: number;

declare const cFramework: number;

declare const cFriday: number;

declare const cGroup: number;

declare const cHandleBreakpoint: number;

declare const cHandler: number;

declare const cIconFamily: number;

declare const cInfoWindow: number;

declare const cInternalFinderObject: number;

declare const cJanuary: number;

declare const cJuly: number;

declare const cJune: number;

declare const cKeyForm: number;

declare const cKeyIdentifier: number;

declare const cLabel: number;

declare const cLinkedList: number;

declare const cList: number;

declare const cListElement: number;

declare const cListOrRecord: number;

declare const cListOrString: number;

declare const cListRecordOrString: number;

declare const cMachine: number;

declare const cMarch: number;

declare const cMay: number;

declare const cMissingValue: number;

declare const cMonday: number;

declare const cMonth: number;

declare const cNovember: number;

declare const cNumber: number;

declare const cNumberDateTimeOrString: number;

declare const cNumberOrDateTime: number;

declare const cNumberOrString: number;

declare const cObjectBeingExamined: number;

declare const cOctober: number;

declare const cOnlineDisk: number;

declare const cOnlineLocalDisk: number;

declare const cOnlineRemoteDisk: number;

declare const cPackage: number;

declare const cPreferences: number;

declare const cPreferencesWindow: number;

declare const cPreposition: number;

declare const cProcedure: number;

declare const cProcess: number;

declare const cRawData: number;

declare const cReal: number;

declare const cRecord: number;

declare const cReference: number;

declare const cRunningAddress: number;

declare const cSaturday: number;

declare const cScript: number;

declare const cScriptingAddition: number;

declare const cSeconds: number;

declare const cSeptember: number;

declare const cSharableContainer: number;

declare const cSharingPrivileges: number;

declare const cSharingWindow: number;

declare const cSmallReal: number;

declare const cSound: number;

declare const cSoundFile: number;

declare const cSpecialFolders: number;

declare const cStatusWindow: number;

declare const cStorage: number;

declare const cString: number;

declare const cStringClass: number;

declare const cSuitcase: number;

declare const cSunday: number;

declare const cSymbol: number;

declare const cTextColor: number;

declare const cThumbColor: number;

declare const cThursday: number;

declare const cTrash: number;

declare const cTuesday: number;

declare const cUndefined: number;

declare const cUser: number;

declare const cUserIdentifier: number;

declare const cVector: number;

declare const cWednesday: number;

declare const cWeekday: number;

declare const cWritingCodeInfo: number;

declare const cZone: number;

declare const cancel: number;

declare const cautionIcon: number;

declare const charCodeMask: number;

declare const checkBoxProc: number;

declare const chkCtrl: number;

declare const clrBit: number;

declare const cmdKey: number;

declare const cmdKeyBit: number;

declare const controlKey: number;

declare const controlKeyBit: number;

declare const ctrlItem: number;

declare const dBoxProc: number;

declare const deskPatID: number;

declare const dialogKind: number;

declare const diskEvt: number;

declare const diskMask: number;

declare const doAll: number;

declare const doColor: number;

declare const doFace: number;

declare const doFont: number;

declare const doSize: number;

declare const doToggle: number;

declare const documentProc: number;

declare const domCannot: number;

declare const domNative: number;

declare const domTranslateFirst: number;

declare const domWildcard: number;

declare const driverEvt: number;

declare const driverMask: number;

declare const editText: number;

declare const enumAfterDate: number;

declare const enumAliases: number;

declare const enumAllDisks: number;

declare const enumAllDocuments: number;

declare const enumAllLocalDisks: number;

declare const enumAllOpenFolders: number;

declare const enumAllRemoteDisks: number;

declare const enumAnyDate: number;

declare const enumArrangement: number;

declare const enumBeforeDate: number;

declare const enumBetweenDate: number;

declare const enumBooleanValues: number;

declare const enumConflicts: number;

declare const enumConsiderations: number;

declare const enumConsidsAndIgnores: number;

declare const enumDate: number;

declare const enumExistingItems: number;

declare const enumFolders: number;

declare const enumFontsPanel: number;

declare const enumGeneralPanel: number;

declare const enumGestalt: number;

declare const enumIconSize: number;

declare const enumInfoWindowPanel: number;

declare const enumLargeIconSize: number;

declare const enumLastMonth: number;

declare const enumLastWeek: number;

declare const enumLastYear: number;

declare const enumMemoryPanel: number;

declare const enumMiniIconSize: number;

declare const enumMiscValues: number;

declare const enumOlderItems: number;

declare const enumOnDate: number;

declare const enumPrefsButtonViewPanel: number;

declare const enumPrefsGeneralPanel: number;

declare const enumPrefsIconViewPanel: number;

declare const enumPrefsLabelPanel: number;

declare const enumPrefsListViewPanel: number;

declare const enumPrefsWindowPanel: number;

declare const enumSharingPanel: number;

declare const enumSmallIconSize: number;

declare const enumSortDirection: number;

declare const enumSortDirectionNormal: number;

declare const enumSortDirectionReverse: number;

declare const enumStationery: number;

declare const enumStatusNConfigPanel: number;

declare const enumThisMonth: number;

declare const enumThisWeek: number;

declare const enumThisYear: number;

declare const enumToday: number;

declare const enumViewBy: number;

declare const enumWhere: number;

declare const enumYesterday: number;

declare const errAEValueOutOfRange: number;

declare const errDataBrowserInvalidPropertyData: number;

declare const errDataBrowserInvalidPropertyPart: number;

declare const errDataBrowserItemNotAdded: number;

declare const errDataBrowserItemNotFound: number;

declare const errDataBrowserNotConfigured: number;

declare const errDataBrowserPropertyNotFound: number;

declare const errDataBrowserPropertyNotSupported: number;

declare const errFinderAppFolderProtected: number;

declare const errFinderBadPackageContents: number;

declare const errFinderBoundsWrong: number;

declare const errFinderCannotPutAway: number;

declare const errFinderCantDeleteImmediately: number;

declare const errFinderCantMoveSource: number;

declare const errFinderCantMoveToAncestor: number;

declare const errFinderCantMoveToDestination: number;

declare const errFinderCantOverwrite: number;

declare const errFinderCantUseTrashedItems: number;

declare const errFinderCorruptOpenFolderList: number;

declare const errFinderFileSharingMustBeOn: number;

declare const errFinderIncestuousMove: number;

declare const errFinderIsBusy: number;

declare const errFinderItemAlreadyInDest: number;

declare const errFinderLastReserved: number;

declare const errFinderLockedItemsInTrash: number;

declare const errFinderMustBeActive: number;

declare const errFinderNoInvisibleFiles: number;

declare const errFinderOnlyLockedItemsInTrash: number;

declare const errFinderProgramLinkingMustBeOn: number;

declare const errFinderPropertyDoesNotApply: number;

declare const errFinderPropertyNowWindowBased: number;

declare const errFinderSharePointsCantInherit: number;

declare const errFinderSysFolderProtected: number;

declare const errFinderUnknownUser: number;

declare const errFinderUnsupportedInsidePackages: number;

declare const errFinderVolumeNotFound: number;

declare const errFinderWindowMustBeButtonView: number;

declare const errFinderWindowMustBeIconView: number;

declare const errFinderWindowMustBeListView: number;

declare const errFinderWindowNotOpen: number;

declare const errFinderWindowWrongType: number;

declare const errHMIllegalContentForMaximumState: number;

declare const errHMIllegalContentForMinimumState: number;

declare const errKBFailSettingID: number;

declare const errKBFailSettingTranslationTable: number;

declare const errKBFailWritePreference: number;

declare const errKBIlligalParameters: number;

declare const errKBPS2KeyboardNotAvailable: number;

declare const errNeedsCompositedWindow: number;

declare const eventAlreadyPostedErr: number;

declare const eventClassIncorrectErr: number;

declare const eventClassInvalidErr: number;

declare const eventDeferAccessibilityEventErr: number;

declare const eventHandlerAlreadyInstalledErr: number;

declare const eventHotKeyExistsErr: number;

declare const eventHotKeyInvalidErr: number;

declare const eventInternalErr: number;

declare const eventKindIncorrectErr: number;

declare const eventLoopQuitErr: number;

declare const eventLoopTimedOutErr: number;

declare const eventNotHandledErr: number;

declare const eventNotInQueueErr: number;

declare const eventParameterNotFoundErr: number;

declare const eventPassToNextTargetErr: number;

declare const eventTargetBusyErr: number;

declare const everyEvent: number;

declare const faceBit: number;

declare const flavorDataPromised: number;

declare const flavorNotSaved: number;

declare const flavorSenderOnly: number;

declare const flavorSenderTranslated: number;

declare const flavorSystemTranslated: number;

declare const flavorTypeHFS: number;

declare const flavorTypePromiseHFS: number;

declare const floatGrowProc: number;

declare const floatProc: number;

declare const floatSideGrowProc: number;

declare const floatSideProc: number;

declare const floatSideZoomGrowProc: number;

declare const floatSideZoomProc: number;

declare const floatZoomGrowProc: number;

declare const floatZoomProc: number;

declare const fontBit: number;

declare const fontPanelFontSelectionQDStyleVersionErr: number;

declare const fontPanelSelectionStyleErr: number;

declare const fontPanelShowErr: number;

declare const formAlias: number;

declare const formCreator: number;

declare const formUserPropertyID: number;

declare const gestaltContextualMenuAttr: number;

declare const gestaltContextualMenuHasAttributeAndModifierKeys: number;

declare const gestaltContextualMenuHasUnicodeSupport: number;

declare const gestaltContextualMenuTrapAvailable: number;

declare const gestaltContextualMenuUnusedBit: number;

declare const gestaltKBPS2Keyboards: number;

declare const gestaltKBPS2SetIDToAny: number;

declare const gestaltKBPS2SetTranslationTable: number;

declare const gestaltKeyboardsAttr: number;

declare const hAxisOnly: number;

declare const hMenuCmd: number;

declare const hiArchiveEncodingCompleteErr: number;

declare const hiArchiveHIObjectIgnoresArchivingErr: number;

declare const hiArchiveKeyNotAvailableErr: number;

declare const hiArchiveTypeMismatchErr: number;

declare const hiObjectCannotSubclassSingletonErr: number;

declare const hiObjectClassExistsErr: number;

declare const hiObjectClassHasInstancesErr: number;

declare const hiObjectClassHasSubclassesErr: number;

declare const hiObjectClassIsAbstractErr: number;

declare const hiObjectDelegateAlreadyExistsErr: number;

declare const hiObjectDelegateNotFoundErr: number;

declare const hierMenu: number;

declare const highLevelEventMask: number;

declare const iconItem: number;

declare const inCollapseBox: number;

declare const inContent: number;

declare const inDesk: number;

declare const inDrag: number;

declare const inGoAway: number;

declare const inGrow: number;

declare const inMenuBar: number;

declare const inNoWindow: number;

declare const inProxyIcon: number;

declare const inStructure: number;

declare const inSysWindow: number;

declare const inToolbarButton: number;

declare const inZoomIn: number;

declare const inZoomOut: number;

declare const intDrawHook: number;

declare const intEOLHook: number;

declare const intHitTestHook: number;

declare const intInlineInputTSMTEPostUpdateHook: number;

declare const intInlineInputTSMTEPreUpdateHook: number;

declare const intNWidthHook: number;

declare const intTextWidthHook: number;

declare const intWidthHook: number;

declare const itemDisable: number;

declare const kAEAppearanceChanged: number;

declare const kAECase: number;

declare const kAECaseConsiderMask: number;

declare const kAECaseIgnoreMask: number;

declare const kAECleanUp: number;

declare const kAEDatabaseSuite: number;

declare const kAEDiacritic: number;

declare const kAEDiacriticConsiderMask: number;

declare const kAEDiacriticIgnoreMask: number;

declare const kAEDoNotIgnoreHandler: number;

declare const kAEDontDisposeOnResume: number;

declare const kAEEject: number;

declare const kAEEmpty: number;

declare const kAEErase: number;

declare const kAEExpansion: number;

declare const kAEExpansionConsiderMask: number;

declare const kAEExpansionIgnoreMask: number;

declare const kAEFalse: number;

declare const kAEFinderSuite: number;

declare const kAEGestalt: number;

declare const kAEHyphens: number;

declare const kAEHyphensConsiderMask: number;

declare const kAEHyphensIgnoreMask: number;

declare const kAEIgnoreAppEventHandler: number;

declare const kAEIgnoreAppPhacHandler: number;

declare const kAEIgnoreSysEventHandler: number;

declare const kAEIgnoreSysPhacHandler: number;

declare const kAEIngoreBuiltInEventHandler: number;

declare const kAEInteractWithAll: number;

declare const kAEInteractWithLocal: number;

declare const kAEInteractWithSelf: number;

declare const kAEInterceptOpen: number;

declare const kAEKataHiragana: number;

declare const kAENoDispatch: number;

declare const kAEPunctuation: number;

declare const kAEPunctuationConsiderMask: number;

declare const kAEPunctuationIgnoreMask: number;

declare const kAEPutAway: number;

declare const kAERebuildDesktopDB: number;

declare const kAESmallKana: number;

declare const kAESmallSystemFontChanged: number;

declare const kAESort: number;

declare const kAESpeechDetected: number;

declare const kAESpeechDone: number;

declare const kAESpeechSuite: number;

declare const kAESync: number;

declare const kAESystemFontChanged: number;

declare const kAEThemeSwitch: number;

declare const kAETrue: number;

declare const kAEUseStandardDispatch: number;

declare const kAEViewsFontChanged: number;

declare const kAEWhiteSpace: number;

declare const kAEWhiteSpaceConsiderMask: number;

declare const kAEWhiteSpaceIgnoreMask: number;

declare const kAEZenkakuHankaku: number;

declare const kAHInternalErr: number;

declare const kAHInternetConfigPrefErr: number;

declare const kAHTOCTypeDeveloper: number;

declare const kAHTOCTypeUser: number;

declare const kASAdd: number;

declare const kASAnd: number;

declare const kASAppleScriptSuite: number;

declare const kASComesAfter: number;

declare const kASComesBefore: number;

declare const kASComment: number;

declare const kASCommentEvent: number;

declare const kASConcatenate: number;

declare const kASConsiderReplies: number;

declare const kASConsiderRepliesConsiderMask: number;

declare const kASConsiderRepliesIgnoreMask: number;

declare const kASContains: number;

declare const kASCurrentApplication: number;

declare const kASDefaultMaxHeapSize: number;

declare const kASDefaultMaxStackSize: number;

declare const kASDefaultMinHeapSize: number;

declare const kASDefaultMinStackSize: number;

declare const kASDefaultPreferredHeapSize: number;

declare const kASDefaultPreferredStackSize: number;

declare const kASDivide: number;

declare const kASEndsWith: number;

declare const kASEqual: number;

declare const kASErrorEventCode: number;

declare const kASExcluding: number;

declare const kASGreaterThan: number;

declare const kASGreaterThanOrEqual: number;

declare const kASHasOpenHandler: number;

declare const kASImporting: number;

declare const kASInitializeEventCode: number;

declare const kASLaunchEvent: number;

declare const kASLessThan: number;

declare const kASLessThanOrEqual: number;

declare const kASMagicEndTellEvent: number;

declare const kASMagicTellEvent: number;

declare const kASMinimumVersion: number;

declare const kASMultiply: number;

declare const kASNegate: number;

declare const kASNot: number;

declare const kASNotEqual: number;

declare const kASNumberOfSourceStyles: number;

declare const kASNumericStrings: number;

declare const kASNumericStringsConsiderMask: number;

declare const kASNumericStringsIgnoreMask: number;

declare const kASOr: number;

declare const kASPower: number;

declare const kASPrepositionalSubroutine: number;

declare const kASQuotient: number;

declare const kASRemainder: number;

declare const kASScriptEditorSuite: number;

declare const kASSelectCopySourceAttributes: number;

declare const kASSelectGetAppTerminology: number;

declare const kASSelectGetAppTerminologyObsolete: number;

declare const kASSelectGetHandler: number;

declare const kASSelectGetHandlerNames: number;

declare const kASSelectGetHandlerObsolete: number;

declare const kASSelectGetProperty: number;

declare const kASSelectGetPropertyNames: number;

declare const kASSelectGetPropertyObsolete: number;

declare const kASSelectGetSourceStyleNames: number;

declare const kASSelectGetSourceStyles: number;

declare const kASSelectGetSysTerminology: number;

declare const kASSelectInit: number;

declare const kASSelectSetHandler: number;

declare const kASSelectSetHandlerObsolete: number;

declare const kASSelectSetProperty: number;

declare const kASSelectSetPropertyObsolete: number;

declare const kASSelectSetSourceAttributes: number;

declare const kASSelectSetSourceStyles: number;

declare const kASSourceStyleApplicationKeyword: number;

declare const kASSourceStyleClass: number;

declare const kASSourceStyleComment: number;

declare const kASSourceStyleDynamicClass: number;

declare const kASSourceStyleDynamicEnumValue: number;

declare const kASSourceStyleDynamicEventName: number;

declare const kASSourceStyleDynamicParameterName: number;

declare const kASSourceStyleDynamicProperty: number;

declare const kASSourceStyleEnumValue: number;

declare const kASSourceStyleEventName: number;

declare const kASSourceStyleLanguageKeyword: number;

declare const kASSourceStyleLiteral: number;

declare const kASSourceStyleNormalText: number;

declare const kASSourceStyleObjectSpecifier: number;

declare const kASSourceStyleParameterName: number;

declare const kASSourceStyleProperty: number;

declare const kASSourceStyleString: number;

declare const kASSourceStyleUncompiledText: number;

declare const kASSourceStyleUserSymbol: number;

declare const kASStartLogEvent: number;

declare const kASStartsWith: number;

declare const kASStopLogEvent: number;

declare const kASSubroutineEvent: number;

declare const kASSubtract: number;

declare const kASTypeNamesSuite: number;

declare const kASUseEventCode: number;

declare const kActivateAndHandleClick: number;

declare const kActivateAndIgnoreClick: number;

declare const kAlertCautionAlert: number;

declare const kAlertDefaultCancelText: number;

declare const kAlertDefaultOKText: number;

declare const kAlertDefaultOtherText: number;

declare const kAlertFlagsAlertIsMovable: number;

declare const kAlertFlagsUseCompositing: number;

declare const kAlertFlagsUseControlHierarchy: number;

declare const kAlertFlagsUseThemeBackground: number;

declare const kAlertFlagsUseThemeControls: number;

declare const kAlertNoteAlert: number;

declare const kAlertPlainAlert: number;

declare const kAlertStdAlertCancelButton: number;

declare const kAlertStdAlertHelpButton: number;

declare const kAlertStdAlertOKButton: number;

declare const kAlertStdAlertOtherButton: number;

declare const kAlertStopAlert: number;

declare const kAlertVariantCode: number;

declare const kAlertWindowClass: number;

declare const kAllWindowClasses: number;

declare const kAltPlainWindowClass: number;

declare const kAppearanceEventClass: number;

declare const kAppearancePartDownButton: number;

declare const kAppearancePartIndicator: number;

declare const kAppearancePartLeftButton: number;

declare const kAppearancePartMetaDisabled: number;

declare const kAppearancePartMetaInactive: number;

declare const kAppearancePartMetaNone: number;

declare const kAppearancePartPageDownArea: number;

declare const kAppearancePartPageLeftArea: number;

declare const kAppearancePartPageRightArea: number;

declare const kAppearancePartPageUpArea: number;

declare const kAppearancePartRightButton: number;

declare const kAppearancePartUpButton: number;

declare const kAppearanceRegionCloseBox: number;

declare const kAppearanceRegionCollapseBox: number;

declare const kAppearanceRegionContent: number;

declare const kAppearanceRegionDrag: number;

declare const kAppearanceRegionGrow: number;

declare const kAppearanceRegionStructure: number;

declare const kAppearanceRegionTitleBar: number;

declare const kAppearanceRegionTitleProxyIcon: number;

declare const kAppearanceRegionTitleText: number;

declare const kAppearanceRegionToolbarButton: number;

declare const kAppearanceRegionZoomBox: number;

declare const kAppleLogoCharCode: number;

declare const kAppleLogoUnicode: number;

declare const kAppleScriptSubtype: number;

declare const kApplicationWindowKind: number;

declare const kAtSpecifiedOrigin: number;

declare const kAvailBoundsChangedForDisplay: number;

declare const kAvailBoundsChangedForDock: number;

declare const kAvailBoundsChangedForMenuBar: number;

declare const kBackspaceCharCode: number;

declare const kBellCharCode: number;

declare const kBulletCharCode: number;

declare const kBulletUnicode: number;

declare const kButtonDialogItem: number;

declare const kCMActivateTextService: number;

declare const kCMCopyTextServiceInputModeList: number;

declare const kCMDeactivateTextService: number;

declare const kCMFixTextService: number;

declare const kCMGetInputModePaletteMenu: number;

declare const kCMGetScriptLangSupport: number;

declare const kCMGetTextServiceMenu: number;

declare const kCMGetTextServiceProperty: number;

declare const kCMHelpItemAppleGuide: number;

declare const kCMHelpItemNoHelp: number;

declare const kCMHelpItemOtherHelp: number;

declare const kCMHelpItemRemoveHelp: number;

declare const kCMHidePaletteWindows: number;

declare const kCMInitiateTextService: number;

declare const kCMInputModePaletteItemHit: number;

declare const kCMMenuItemSelected: number;

declare const kCMNothingSelected: number;

declare const kCMSetTextServiceCursor: number;

declare const kCMSetTextServiceProperty: number;

declare const kCMShowHelpSelected: number;

declare const kCMTerminateTextService: number;

declare const kCMTextServiceEvent: number;

declare const kCMTextServiceEventRef: number;

declare const kCMTextServiceMenuSelect: number;

declare const kCMUCTextServiceEvent: number;

declare const kCalibratorNamePrefix: number;

declare const kCautionIcon: number;

declare const kCenterOnMainScreen: number;

declare const kCenterOnScreen: number;

declare const kCharacterPaletteInputMethodClass: number;

declare const kCheckBoxDialogItem: number;

declare const kCheckCharCode: number;

declare const kCheckUnicode: number;

declare const kCleanUpAEUT: number;

declare const kClearCharCode: number;

declare const kColorPickerAppIsColorSyncAware: number;

declare const kColorPickerCallColorProcLive: number;

declare const kColorPickerCanAnimatePalette: number;

declare const kColorPickerCanModifyPalette: number;

declare const kColorPickerDetachedFromChoices: number;

declare const kColorPickerDialogIsModal: number;

declare const kColorPickerDialogIsMoveable: number;

declare const kColorPickerInApplicationDialog: number;

declare const kColorPickerInPickerDialog: number;

declare const kColorPickerInSystemDialog: number;

declare const kCommandCharCode: number;

declare const kCommandUnicode: number;

declare const kControlAddFontSizeMask: number;

declare const kControlAddToMetaFontMask: number;

declare const kControlAutoToggles: number;

declare const kControlBehaviorCommandMenu: number;

declare const kControlBehaviorMultiValueMenu: number;

declare const kControlBehaviorOffsetContents: number;

declare const kControlBehaviorPushbutton: number;

declare const kControlBehaviorSingleValueMenu: number;

declare const kControlBehaviorSticky: number;

declare const kControlBehaviorToggles: number;

declare const kControlBevelButtonAlignBottom: number;

declare const kControlBevelButtonAlignBottomLeft: number;

declare const kControlBevelButtonAlignBottomRight: number;

declare const kControlBevelButtonAlignCenter: number;

declare const kControlBevelButtonAlignLeft: number;

declare const kControlBevelButtonAlignRight: number;

declare const kControlBevelButtonAlignSysDirection: number;

declare const kControlBevelButtonAlignTextCenter: number;

declare const kControlBevelButtonAlignTextFlushLeft: number;

declare const kControlBevelButtonAlignTextFlushRight: number;

declare const kControlBevelButtonAlignTextSysDirection: number;

declare const kControlBevelButtonAlignTop: number;

declare const kControlBevelButtonAlignTopLeft: number;

declare const kControlBevelButtonAlignTopRight: number;

declare const kControlBevelButtonCenterPopupGlyphTag: number;

declare const kControlBevelButtonContentTag: number;

declare const kControlBevelButtonGraphicAlignTag: number;

declare const kControlBevelButtonGraphicOffsetTag: number;

declare const kControlBevelButtonIsMultiValueMenuTag: number;

declare const kControlBevelButtonKindTag: number;

declare const kControlBevelButtonLargeBevel: number;

declare const kControlBevelButtonLargeBevelProc: number;

declare const kControlBevelButtonLargeBevelVariant: number;

declare const kControlBevelButtonLastMenuTag: number;

declare const kControlBevelButtonMenuDelayTag: number;

declare const kControlBevelButtonMenuHandleTag: number;

declare const kControlBevelButtonMenuOnBottom: number;

declare const kControlBevelButtonMenuOnRight: number;

declare const kControlBevelButtonMenuOnRightVariant: number;

declare const kControlBevelButtonMenuRefTag: number;

declare const kControlBevelButtonMenuValueTag: number;

declare const kControlBevelButtonNormalBevel: number;

declare const kControlBevelButtonNormalBevelProc: number;

declare const kControlBevelButtonNormalBevelVariant: number;

declare const kControlBevelButtonOwnedMenuRefTag: number;

declare const kControlBevelButtonPlaceAboveGraphic: number;

declare const kControlBevelButtonPlaceBelowGraphic: number;

declare const kControlBevelButtonPlaceNormally: number;

declare const kControlBevelButtonPlaceSysDirection: number;

declare const kControlBevelButtonPlaceToLeftOfGraphic: number;

declare const kControlBevelButtonPlaceToRightOfGraphic: number;

declare const kControlBevelButtonScaleIconTag: number;

declare const kControlBevelButtonSmallBevel: number;

declare const kControlBevelButtonSmallBevelProc: number;

declare const kControlBevelButtonSmallBevelVariant: number;

declare const kControlBevelButtonTextAlignTag: number;

declare const kControlBevelButtonTextOffsetTag: number;

declare const kControlBevelButtonTextPlaceTag: number;

declare const kControlBevelButtonTransformTag: number;

declare const kControlBoundsChangePositionChanged: number;

declare const kControlBoundsChangeSizeChanged: number;

declare const kControlButtonPart: number;

declare const kControlChasingArrowsAnimatingTag: number;

declare const kControlChasingArrowsProc: number;

declare const kControlCheckBoxAutoToggleProc: number;

declare const kControlCheckBoxCheckedValue: number;

declare const kControlCheckBoxMixedValue: number;

declare const kControlCheckBoxPart: number;

declare const kControlCheckBoxProc: number;

declare const kControlCheckBoxUncheckedValue: number;

declare const kControlClickableMetaPart: number;

declare const kControlClockAMPMPart: number;

declare const kControlClockAbsoluteTimeTag: number;

declare const kControlClockAnimatingTag: number;

declare const kControlClockDateProc: number;

declare const kControlClockFlagDisplayOnly: number;

declare const kControlClockFlagLive: number;

declare const kControlClockFlagStandard: number;

declare const kControlClockFontStyleTag: number;

declare const kControlClockHourDayPart: number;

declare const kControlClockIsDisplayOnly: number;

declare const kControlClockIsLive: number;

declare const kControlClockLongDateTag: number;

declare const kControlClockMinuteMonthPart: number;

declare const kControlClockMonthYearProc: number;

declare const kControlClockNoFlags: number;

declare const kControlClockPart: number;

declare const kControlClockSecondYearPart: number;

declare const kControlClockTimeProc: number;

declare const kControlClockTimeSecondsProc: number;

declare const kControlClockTypeHourMinute: number;

declare const kControlClockTypeHourMinuteSecond: number;

declare const kControlClockTypeMonthDayYear: number;

declare const kControlClockTypeMonthYear: number;

declare const kControlCollectionTagBounds: number;

declare const kControlCollectionTagCommand: number;

declare const kControlCollectionTagIDID: number;

declare const kControlCollectionTagIDSignature: number;

declare const kControlCollectionTagMaximum: number;

declare const kControlCollectionTagMinimum: number;

declare const kControlCollectionTagRefCon: number;

declare const kControlCollectionTagTitle: number;

declare const kControlCollectionTagUnicodeTitle: number;

declare const kControlCollectionTagValue: number;

declare const kControlCollectionTagVarCode: number;

declare const kControlCollectionTagViewSize: number;

declare const kControlCollectionTagVisibility: number;

declare const kControlColorTableResourceType: number;

declare const kControlContentAlertIconRes: number;

declare const kControlContentCGImageRef: number;

declare const kControlContentCIconHandle: number;

declare const kControlContentCIconRes: number;

declare const kControlContentICON: number;

declare const kControlContentICONRes: number;

declare const kControlContentIconRef: number;

declare const kControlContentIconSuiteHandle: number;

declare const kControlContentIconSuiteRes: number;

declare const kControlContentMetaPart: number;

declare const kControlContentPictHandle: number;

declare const kControlContentPictRes: number;

declare const kControlContentTag: number;

declare const kControlContentTextOnly: number;

declare const kControlDataBrowserDraggedPart: number;

declare const kControlDataBrowserEditTextKeyFilterTag: number;

declare const kControlDataBrowserEditTextValidationProcTag: number;

declare const kControlDataBrowserIncludesFrameAndFocusTag: number;

declare const kControlDataBrowserKeyFilterTag: number;

declare const kControlDataBrowserPart: number;

declare const kControlDefProcResourceType: number;

declare const kControlDefProcType: number;

declare const kControlDialogItem: number;

declare const kControlDisabledPart: number;

declare const kControlDisclosureButtonClosed: number;

declare const kControlDisclosureButtonDisclosed: number;

declare const kControlDisclosureTrianglePointDefault: number;

declare const kControlDisclosureTrianglePointLeft: number;

declare const kControlDisclosureTrianglePointRight: number;

declare const kControlDownButtonPart: number;

declare const kControlEditTextCFStringTag: number;

declare const kControlEditTextCharCount: number;

declare const kControlEditTextFixedTextTag: number;

declare const kControlEditTextInlineInputProc: number;

declare const kControlEditTextInlinePostUpdateProcTag: number;

declare const kControlEditTextInlinePreUpdateProcTag: number;

declare const kControlEditTextInsertCFStringRefTag: number;

declare const kControlEditTextInsertTextBufferTag: number;

declare const kControlEditTextKeyFilterTag: number;

declare const kControlEditTextKeyScriptBehaviorTag: number;

declare const kControlEditTextLockedTag: number;

declare const kControlEditTextPart: number;

declare const kControlEditTextPasswordCFStringTag: number;

declare const kControlEditTextPasswordProc: number;

declare const kControlEditTextPasswordTag: number;

declare const kControlEditTextProc: number;

declare const kControlEditTextSelectionTag: number;

declare const kControlEditTextSingleLineTag: number;

declare const kControlEditTextSpellCheckAsYouTypeTag: number;

declare const kControlEditTextSpellCheckingTag: number;

declare const kControlEditTextStyleTag: number;

declare const kControlEditTextTEHandleTag: number;

declare const kControlEditTextTextTag: number;

declare const kControlEditTextValidationProcTag: number;

declare const kControlEditUnicodeTextPasswordProc: number;

declare const kControlEditUnicodeTextPostUpdateProcTag: number;

declare const kControlEditUnicodeTextProc: number;

declare const kControlEntireControl: number;

declare const kControlFocusNextPart: number;

declare const kControlFocusNoPart: number;

declare const kControlFocusPrevPart: number;

declare const kControlFontBigSystemFont: number;

declare const kControlFontMiniSystemFont: number;

declare const kControlFontSmallBoldSystemFont: number;

declare const kControlFontSmallSystemFont: number;

declare const kControlFontStyleTag: number;

declare const kControlFontViewSystemFont: number;

declare const kControlGetsFocusOnClick: number;

declare const kControlGroupBoxCheckBoxProc: number;

declare const kControlGroupBoxFontStyleTag: number;

declare const kControlGroupBoxFrameRectTag: number;

declare const kControlGroupBoxMenuHandleTag: number;

declare const kControlGroupBoxMenuRefTag: number;

declare const kControlGroupBoxPopupButtonProc: number;

declare const kControlGroupBoxSecondaryCheckBoxProc: number;

declare const kControlGroupBoxSecondaryPopupButtonProc: number;

declare const kControlGroupBoxSecondaryTextTitleProc: number;

declare const kControlGroupBoxTextTitleProc: number;

declare const kControlGroupBoxTitleRectTag: number;

declare const kControlHandlesTracking: number;

declare const kControlHasRadioBehavior: number;

declare const kControlHasSpecialBackground: number;

declare const kControlIconAlignmentTag: number;

declare const kControlIconContentTag: number;

declare const kControlIconNoTrackProc: number;

declare const kControlIconPart: number;

declare const kControlIconProc: number;

declare const kControlIconRefNoTrackProc: number;

declare const kControlIconRefProc: number;

declare const kControlIconResourceIDTag: number;

declare const kControlIconSuiteNoTrackProc: number;

declare const kControlIconSuiteProc: number;

declare const kControlIconTransformTag: number;

declare const kControlIdlesWithTimer: number;

declare const kControlImageWellContentTag: number;

declare const kControlImageWellIsDragDestinationTag: number;

declare const kControlImageWellPart: number;

declare const kControlImageWellProc: number;

declare const kControlImageWellTransformTag: number;

declare const kControlInactivePart: number;

declare const kControlIndicatorPart: number;

declare const kControlInvertsUpDownValueMeaning: number;

declare const kControlKeyFilterBlockKey: number;

declare const kControlKeyFilterPassKey: number;

declare const kControlKeyFilterTag: number;

declare const kControlKeyScriptBehaviorAllowAnyScript: number;

declare const kControlKeyScriptBehaviorPrefersRoman: number;

declare const kControlKeyScriptBehaviorRequiresRoman: number;

declare const kControlKindBevelButton: number;

declare const kControlKindChasingArrows: number;

declare const kControlKindCheckBox: number;

declare const kControlKindCheckGroupBox: number;

declare const kControlKindClock: number;

declare const kControlKindDataBrowser: number;

declare const kControlKindDisclosureButton: number;

declare const kControlKindDisclosureTriangle: number;

declare const kControlKindEditText: number;

declare const kControlKindEditUnicodeText: number;

declare const kControlKindGroupBox: number;

declare const kControlKindHIComboBox: number;

declare const kControlKindHIGrowBoxView: number;

declare const kControlKindHIImageView: number;

declare const kControlKindHIMenuView: number;

declare const kControlKindHIScrollView: number;

declare const kControlKindHISearchField: number;

declare const kControlKindHIStandardMenuView: number;

declare const kControlKindHITextView: number;

declare const kControlKindIcon: number;

declare const kControlKindImageWell: number;

declare const kControlKindListBox: number;

declare const kControlKindLittleArrows: number;

declare const kControlKindPicture: number;

declare const kControlKindPlacard: number;

declare const kControlKindPopupArrow: number;

declare const kControlKindPopupButton: number;

declare const kControlKindPopupGroupBox: number;

declare const kControlKindProgressBar: number;

declare const kControlKindPushButton: number;

declare const kControlKindPushIconButton: number;

declare const kControlKindRadioButton: number;

declare const kControlKindRadioGroup: number;

declare const kControlKindRelevanceBar: number;

declare const kControlKindRoundButton: number;

declare const kControlKindScrollBar: number;

declare const kControlKindScrollingTextBox: number;

declare const kControlKindSeparator: number;

declare const kControlKindSignatureApple: number;

declare const kControlKindSlider: number;

declare const kControlKindStaticText: number;

declare const kControlKindTabs: number;

declare const kControlKindTag: number;

declare const kControlKindUserPane: number;

declare const kControlKindWindowHeader: number;

declare const kControlLabelPart: number;

declare const kControlListBoxAutoSizeProc: number;

declare const kControlListBoxDoubleClickPart: number;

declare const kControlListBoxDoubleClickTag: number;

declare const kControlListBoxFontStyleTag: number;

declare const kControlListBoxKeyFilterTag: number;

declare const kControlListBoxLDEFTag: number;

declare const kControlListBoxListHandleTag: number;

declare const kControlListBoxPart: number;

declare const kControlListBoxProc: number;

declare const kControlListDescResType: number;

declare const kControlLittleArrowsIncrementValueTag: number;

declare const kControlLittleArrowsProc: number;

declare const kControlMenuPart: number;

declare const kControlNoContent: number;

declare const kControlNoPart: number;

declare const kControlNoVariant: number;

declare const kControlOpaqueMetaPart: number;

declare const kControlPageDownPart: number;

declare const kControlPageUpPart: number;

declare const kControlPictureHandleTag: number;

declare const kControlPictureNoTrackProc: number;

declare const kControlPicturePart: number;

declare const kControlPictureProc: number;

declare const kControlPlacardProc: number;

declare const kControlPopupArrowEastProc: number;

declare const kControlPopupArrowNorthProc: number;

declare const kControlPopupArrowOrientationEast: number;

declare const kControlPopupArrowOrientationNorth: number;

declare const kControlPopupArrowOrientationSouth: number;

declare const kControlPopupArrowOrientationWest: number;

declare const kControlPopupArrowSizeNormal: number;

declare const kControlPopupArrowSizeSmall: number;

declare const kControlPopupArrowSmallEastProc: number;

declare const kControlPopupArrowSmallNorthProc: number;

declare const kControlPopupArrowSmallSouthProc: number;

declare const kControlPopupArrowSmallWestProc: number;

declare const kControlPopupArrowSouthProc: number;

declare const kControlPopupArrowWestProc: number;

declare const kControlPopupButtonCheckCurrentTag: number;

declare const kControlPopupButtonExtraHeightTag: number;

declare const kControlPopupButtonMenuHandleTag: number;

declare const kControlPopupButtonMenuIDTag: number;

declare const kControlPopupButtonMenuRefTag: number;

declare const kControlPopupButtonOwnedMenuRefTag: number;

declare const kControlPopupButtonProc: number;

declare const kControlPopupFixedWidthVariant: number;

declare const kControlPopupUseAddResMenuVariant: number;

declare const kControlPopupUseWFontVariant: number;

declare const kControlPopupVariableWidthVariant: number;

declare const kControlProgressBarAnimatingTag: number;

declare const kControlProgressBarIndeterminateTag: number;

declare const kControlProgressBarProc: number;

declare const kControlPropertyPersistent: number;

declare const kControlPushButLeftIconProc: number;

declare const kControlPushButRightIconProc: number;

declare const kControlPushButtonAnimatingTag: number;

declare const kControlPushButtonCancelTag: number;

declare const kControlPushButtonContentTag: number;

declare const kControlPushButtonDefaultTag: number;

declare const kControlPushButtonIconAlignmentTag: number;

declare const kControlPushButtonIconOnLeft: number;

declare const kControlPushButtonIconOnRight: number;

declare const kControlPushButtonIsTexturedTag: number;

declare const kControlPushButtonProc: number;

declare const kControlRadioButtonAutoToggleProc: number;

declare const kControlRadioButtonCheckedValue: number;

declare const kControlRadioButtonMixedValue: number;

declare const kControlRadioButtonPart: number;

declare const kControlRadioButtonProc: number;

declare const kControlRadioButtonUncheckedValue: number;

declare const kControlRadioGroupPart: number;

declare const kControlRadioGroupProc: number;

declare const kControlRelevanceBarProc: number;

declare const kControlRoundButtonContentTag: number;

declare const kControlRoundButtonLargeSize: number;

declare const kControlRoundButtonNormalSize: number;

declare const kControlRoundButtonSizeTag: number;

declare const kControlScrollBarLiveProc: number;

declare const kControlScrollBarProc: number;

declare const kControlScrollBarShowsArrowsTag: number;

declare const kControlScrollTextBoxAnimatingTag: number;

declare const kControlScrollTextBoxAutoScrollAmountTag: number;

declare const kControlScrollTextBoxAutoScrollProc: number;

declare const kControlScrollTextBoxContentsTag: number;

declare const kControlScrollTextBoxDelayBeforeAutoScrollTag: number;

declare const kControlScrollTextBoxDelayBetweenAutoScrollTag: number;

declare const kControlScrollTextBoxProc: number;

declare const kControlSearchFieldCancelPart: number;

declare const kControlSearchFieldMenuPart: number;

declare const kControlSeparatorLineProc: number;

declare const kControlSizeAuto: number;

declare const kControlSizeLarge: number;

declare const kControlSizeMini: number;

declare const kControlSizeNormal: number;

declare const kControlSizeSmall: number;

declare const kControlSizeTag: number;

declare const kControlSliderDoesNotPoint: number;

declare const kControlSliderHasTickMarks: number;

declare const kControlSliderLiveFeedback: number;

declare const kControlSliderNonDirectional: number;

declare const kControlSliderPointsDownOrRight: number;

declare const kControlSliderPointsUpOrLeft: number;

declare const kControlSliderProc: number;

declare const kControlSliderReverseDirection: number;

declare const kControlStaticTextCFStringTag: number;

declare const kControlStaticTextIsMultilineTag: number;

declare const kControlStaticTextProc: number;

declare const kControlStaticTextStyleTag: number;

declare const kControlStaticTextTextHeightTag: number;

declare const kControlStaticTextTextTag: number;

declare const kControlStaticTextTruncTag: number;

declare const kControlStructureMetaPart: number;

declare const kControlSupportsCalcBestRect: number;

declare const kControlSupportsClickActivation: number;

declare const kControlSupportsContextualMenus: number;

declare const kControlSupportsDataAccess: number;

declare const kControlSupportsDragAndDrop: number;

declare const kControlSupportsEmbedding: number;

declare const kControlSupportsFlattening: number;

declare const kControlSupportsFocus: number;

declare const kControlSupportsGetRegion: number;

declare const kControlSupportsGhosting: number;

declare const kControlSupportsLiveFeedback: number;

declare const kControlSupportsSetCursor: number;

declare const kControlTabContentRectTag: number;

declare const kControlTabDirectionEast: number;

declare const kControlTabDirectionNorth: number;

declare const kControlTabDirectionSouth: number;

declare const kControlTabDirectionWest: number;

declare const kControlTabEnabledFlagTag: number;

declare const kControlTabFontStyleTag: number;

declare const kControlTabImageContentTag: number;

declare const kControlTabInfoTag: number;

declare const kControlTabInfoVersionOne: number;

declare const kControlTabInfoVersionZero: number;

declare const kControlTabLargeEastProc: number;

declare const kControlTabLargeNorthProc: number;

declare const kControlTabLargeProc: number;

declare const kControlTabLargeSouthProc: number;

declare const kControlTabLargeWestProc: number;

declare const kControlTabListResType: number;

declare const kControlTabSizeLarge: number;

declare const kControlTabSizeMini: number;

declare const kControlTabSizeSmall: number;

declare const kControlTabSmallEastProc: number;

declare const kControlTabSmallNorthProc: number;

declare const kControlTabSmallProc: number;

declare const kControlTabSmallSouthProc: number;

declare const kControlTabSmallWestProc: number;

declare const kControlTemplateResourceType: number;

declare const kControlThemeTextFontTag: number;

declare const kControlThemeTextHorizontalFlushTag: number;

declare const kControlThemeTextInfoTag: number;

declare const kControlThemeTextTruncationTag: number;

declare const kControlThemeTextVerticalFlushTag: number;

declare const kControlTriangleAutoToggleProc: number;

declare const kControlTriangleLastValueTag: number;

declare const kControlTriangleLeftFacingAutoToggleProc: number;

declare const kControlTriangleLeftFacingProc: number;

declare const kControlTrianglePart: number;

declare const kControlTriangleProc: number;

declare const kControlUnicode: number;

declare const kControlUpButtonPart: number;

declare const kControlUseAllMask: number;

declare const kControlUseBackColorMask: number;

declare const kControlUseFaceMask: number;

declare const kControlUseFontMask: number;

declare const kControlUseForeColorMask: number;

declare const kControlUseJustMask: number;

declare const kControlUseModeMask: number;

declare const kControlUseSizeMask: number;

declare const kControlUseThemeFontIDMask: number;

declare const kControlUserItemDrawProcTag: number;

declare const kControlUserPaneActivateProcTag: number;

declare const kControlUserPaneBackgroundProcTag: number;

declare const kControlUserPaneDrawProcTag: number;

declare const kControlUserPaneFocusProcTag: number;

declare const kControlUserPaneHitTestProcTag: number;

declare const kControlUserPaneIdleProcTag: number;

declare const kControlUserPaneKeyDownProcTag: number;

declare const kControlUserPaneProc: number;

declare const kControlUserPaneTrackingProcTag: number;

declare const kControlUsesOwningWindowsFontVariant: number;

declare const kControlWantsActivate: number;

declare const kControlWantsIdle: number;

declare const kControlWindowHeaderIsListHeaderTag: number;

declare const kControlWindowHeaderProc: number;

declare const kControlWindowListViewHeaderProc: number;

declare const kDataBrowserAlwaysExtendSelection: number;

declare const kDataBrowserAttributeAutoHideScrollBars: number;

declare const kDataBrowserAttributeColumnViewResizeWindow: number;

declare const kDataBrowserAttributeListViewAlternatingRowColors: number;

declare const kDataBrowserAttributeListViewDrawColumnDividers: number;

declare const kDataBrowserAttributeNone: number;

declare const kDataBrowserAttributeReserveGrowBoxSpace: number;

declare const kDataBrowserCheckboxTriState: number;

declare const kDataBrowserCheckboxType: number;

declare const kDataBrowserClientPropertyFlagsMask: number;

declare const kDataBrowserClientPropertyFlagsOffset: number;

declare const kDataBrowserCmdTogglesSelection: number;

declare const kDataBrowserColumnView: number;

declare const kDataBrowserColumnViewPreviewProperty: number;

declare const kDataBrowserContainerAliasIDProperty: number;

declare const kDataBrowserContainerClosed: number;

declare const kDataBrowserContainerClosing: number;

declare const kDataBrowserContainerIsClosableProperty: number;

declare const kDataBrowserContainerIsOpen: number;

declare const kDataBrowserContainerIsOpenableProperty: number;

declare const kDataBrowserContainerIsSortableProperty: number;

declare const kDataBrowserContainerOpened: number;

declare const kDataBrowserContainerSorted: number;

declare const kDataBrowserContainerSorting: number;

declare const kDataBrowserContentHit: number;

declare const kDataBrowserCustomType: number;

declare const kDataBrowserDateTimeDateOnly: number;

declare const kDataBrowserDateTimeRelative: number;

declare const kDataBrowserDateTimeSecondsToo: number;

declare const kDataBrowserDateTimeTimeOnly: number;

declare const kDataBrowserDateTimeType: number;

declare const kDataBrowserDefaultPropertyFlags: number;

declare const kDataBrowserDoNotTruncateText: number;

declare const kDataBrowserDragSelect: number;

declare const kDataBrowserEditMsgClear: number;

declare const kDataBrowserEditMsgCopy: number;

declare const kDataBrowserEditMsgCut: number;

declare const kDataBrowserEditMsgPaste: number;

declare const kDataBrowserEditMsgRedo: number;

declare const kDataBrowserEditMsgSelectAll: number;

declare const kDataBrowserEditMsgUndo: number;

declare const kDataBrowserEditStarted: number;

declare const kDataBrowserEditStopped: number;

declare const kDataBrowserIconAndTextType: number;

declare const kDataBrowserIconType: number;

declare const kDataBrowserItemAdded: number;

declare const kDataBrowserItemAnyState: number;

declare const kDataBrowserItemDeselected: number;

declare const kDataBrowserItemDoubleClicked: number;

declare const kDataBrowserItemIsActiveProperty: number;

declare const kDataBrowserItemIsContainerProperty: number;

declare const kDataBrowserItemIsDragTarget: number;

declare const kDataBrowserItemIsEditableProperty: number;

declare const kDataBrowserItemIsSelectableProperty: number;

declare const kDataBrowserItemIsSelected: number;

declare const kDataBrowserItemNoProperty: number;

declare const kDataBrowserItemNoState: number;

declare const kDataBrowserItemParentContainerProperty: number;

declare const kDataBrowserItemRemoved: number;

declare const kDataBrowserItemSelected: number;

declare const kDataBrowserItemSelfIdentityProperty: number;

declare const kDataBrowserItemsAdd: number;

declare const kDataBrowserItemsAssign: number;

declare const kDataBrowserItemsRemove: number;

declare const kDataBrowserItemsToggle: number;

declare const kDataBrowserLatestCallbacks: number;

declare const kDataBrowserLatestCustomCallbacks: number;

declare const kDataBrowserListView: number;

declare const kDataBrowserListViewAppendColumn: number;

declare const kDataBrowserListViewDefaultColumnFlags: number;

declare const kDataBrowserListViewLatestHeaderDesc: number;

declare const kDataBrowserListViewMovableColumn: number;

declare const kDataBrowserListViewNoGapForIconInHeaderButton: number;

declare const kDataBrowserListViewSelectionColumn: number;

declare const kDataBrowserListViewSortableColumn: number;

declare const kDataBrowserListViewTypeSelectColumn: number;

declare const kDataBrowserMetricCellContentInset: number;

declare const kDataBrowserMetricDisclosureColumnEdgeInset: number;

declare const kDataBrowserMetricDisclosureColumnPerDepthGap: number;

declare const kDataBrowserMetricDisclosureTriangleAndContentGap: number;

declare const kDataBrowserMetricIconAndTextGap: number;

declare const kDataBrowserMetricLast: number;

declare const kDataBrowserNeverEmptySelectionSet: number;

declare const kDataBrowserNoDisjointSelection: number;

declare const kDataBrowserNoItem: number;

declare const kDataBrowserNoView: number;

declare const kDataBrowserNothingHit: number;

declare const kDataBrowserOrderDecreasing: number;

declare const kDataBrowserOrderIncreasing: number;

declare const kDataBrowserOrderUndefined: number;

declare const kDataBrowserPopupMenuButtonless: number;

declare const kDataBrowserPopupMenuType: number;

declare const kDataBrowserProgressBarType: number;

declare const kDataBrowserPropertyCheckboxPart: number;

declare const kDataBrowserPropertyContentPart: number;

declare const kDataBrowserPropertyDisclosurePart: number;

declare const kDataBrowserPropertyEnclosingPart: number;

declare const kDataBrowserPropertyFlagsMask: number;

declare const kDataBrowserPropertyFlagsOffset: number;

declare const kDataBrowserPropertyIconPart: number;

declare const kDataBrowserPropertyIsEditable: number;

declare const kDataBrowserPropertyIsMutable: number;

declare const kDataBrowserPropertyModificationFlags: number;

declare const kDataBrowserPropertyProgressBarPart: number;

declare const kDataBrowserPropertyRelevanceRankPart: number;

declare const kDataBrowserPropertySliderPart: number;

declare const kDataBrowserPropertyTextPart: number;

declare const kDataBrowserRelativeDateTime: number;

declare const kDataBrowserRelevanceRankType: number;

declare const kDataBrowserResetSelection: number;

declare const kDataBrowserRevealAndCenterInView: number;

declare const kDataBrowserRevealOnly: number;

declare const kDataBrowserRevealWithoutSelecting: number;

declare const kDataBrowserSelectOnlyOne: number;

declare const kDataBrowserSelectionAnchorDown: number;

declare const kDataBrowserSelectionAnchorLeft: number;

declare const kDataBrowserSelectionAnchorRight: number;

declare const kDataBrowserSelectionAnchorUp: number;

declare const kDataBrowserSelectionSetChanged: number;

declare const kDataBrowserSliderDownwardThumb: number;

declare const kDataBrowserSliderPlainThumb: number;

declare const kDataBrowserSliderType: number;

declare const kDataBrowserSliderUpwardThumb: number;

declare const kDataBrowserStopTracking: number;

declare const kDataBrowserTableViewFillHilite: number;

declare const kDataBrowserTableViewLastColumn: number;

declare const kDataBrowserTableViewMinimalHilite: number;

declare const kDataBrowserTableViewSelectionColumn: number;

declare const kDataBrowserTargetChanged: number;

declare const kDataBrowserTextType: number;

declare const kDataBrowserTruncateTextAtEnd: number;

declare const kDataBrowserTruncateTextAtStart: number;

declare const kDataBrowserTruncateTextMiddle: number;

declare const kDataBrowserUniversalPropertyFlags: number;

declare const kDataBrowserUniversalPropertyFlagsMask: number;

declare const kDataBrowserUserStateChanged: number;

declare const kDataBrowserUserToggledContainer: number;

declare const kDataBrowserViewSpecificFlagsMask: number;

declare const kDataBrowserViewSpecificFlagsOffset: number;

declare const kDataBrowserViewSpecificPropertyFlags: number;

declare const kDeepestColorScreen: number;

declare const kDefaultColorPickerHeight: number;

declare const kDefaultColorPickerWidth: number;

declare const kDeleteCharCode: number;

declare const kDialectBundleResType: number;

declare const kDialogFlagsHandleMovableModal: number;

declare const kDialogFlagsUseCompositing: number;

declare const kDialogFlagsUseControlHierarchy: number;

declare const kDialogFlagsUseThemeBackground: number;

declare const kDialogFlagsUseThemeControls: number;

declare const kDialogFontAddFontSizeMask: number;

declare const kDialogFontAddToMetaFontMask: number;

declare const kDialogFontNoFontStyle: number;

declare const kDialogFontUseAllMask: number;

declare const kDialogFontUseBackColorMask: number;

declare const kDialogFontUseFaceMask: number;

declare const kDialogFontUseFontMask: number;

declare const kDialogFontUseFontNameMask: number;

declare const kDialogFontUseForeColorMask: number;

declare const kDialogFontUseJustMask: number;

declare const kDialogFontUseModeMask: number;

declare const kDialogFontUseSizeMask: number;

declare const kDialogFontUseThemeFontIDMask: number;

declare const kDialogWindowKind: number;

declare const kDiamondCharCode: number;

declare const kDiamondUnicode: number;

declare const kDigiHubBlankCD: number;

declare const kDigiHubBlankDVD: number;

declare const kDigiHubEventClass: number;

declare const kDigiHubMusicCD: number;

declare const kDigiHubPictureCD: number;

declare const kDigiHubVideoDVD: number;

declare const kDoNotActivateAndHandleClick: number;

declare const kDoNotActivateAndIgnoreClick: number;

declare const kDocumentWindowClass: number;

declare const kDocumentWindowVariantCode: number;

declare const kDownArrowCharCode: number;

declare const kDragActionAlias: number;

declare const kDragActionAll: number;

declare const kDragActionCopy: number;

declare const kDragActionDelete: number;

declare const kDragActionGeneric: number;

declare const kDragActionMove: number;

declare const kDragActionNothing: number;

declare const kDragActionPrivate: number;

declare const kDragBehaviorNone: number;

declare const kDragBehaviorZoomBackAnimation: number;

declare const kDragDarkTranslucency: number;

declare const kDragDarkerTranslucency: number;

declare const kDragDoNotScaleImage: number;

declare const kDragFlavorTypeHFS: number;

declare const kDragFlavorTypePromiseHFS: number;

declare const kDragHasLeftSenderWindow: number;

declare const kDragInsideSenderApplication: number;

declare const kDragInsideSenderWindow: number;

declare const kDragOpaqueTranslucency: number;

declare const kDragPromisedFlavor: number;

declare const kDragPromisedFlavorFindFile: number;

declare const kDragPseudoCreatorVolumeOrDirectory: number;

declare const kDragPseudoFileTypeDirectory: number;

declare const kDragPseudoFileTypeVolume: number;

declare const kDragRegionAndImage: number;

declare const kDragRegionBegin: number;

declare const kDragRegionDraw: number;

declare const kDragRegionEnd: number;

declare const kDragRegionHide: number;

declare const kDragRegionIdle: number;

declare const kDragStandardDropLocationTrash: number;

declare const kDragStandardDropLocationUnknown: number;

declare const kDragStandardTranslucency: number;

declare const kDragTrackingEnterControl: number;

declare const kDragTrackingEnterHandler: number;

declare const kDragTrackingEnterWindow: number;

declare const kDragTrackingInControl: number;

declare const kDragTrackingInWindow: number;

declare const kDragTrackingLeaveControl: number;

declare const kDragTrackingLeaveHandler: number;

declare const kDragTrackingLeaveWindow: number;

declare const kDrawControlEntireControl: number;

declare const kDrawControlIndicatorOnly: number;

declare const kDrawerWindowClass: number;

declare const kEditTextDialogItem: number;

declare const kEndCharCode: number;

declare const kEnterCharCode: number;

declare const kEscapeCharCode: number;

declare const kEventAccessibleGetAllActionNames: number;

declare const kEventAccessibleGetAllAttributeNames: number;

declare const kEventAccessibleGetAllParameterizedAttributeNames: number;

declare const kEventAccessibleGetChildAtPoint: number;

declare const kEventAccessibleGetFocusedChild: number;

declare const kEventAccessibleGetNamedActionDescription: number;

declare const kEventAccessibleGetNamedAttribute: number;

declare const kEventAccessibleIsNamedAttributeSettable: number;

declare const kEventAccessiblePerformNamedAction: number;

declare const kEventAccessibleSetNamedAttribute: number;

declare const kEventAppActivated: number;

declare const kEventAppActiveWindowChanged: number;

declare const kEventAppAvailableWindowBoundsChanged: number;

declare const kEventAppDeactivated: number;

declare const kEventAppFocusDrawer: number;

declare const kEventAppFocusMenuBar: number;

declare const kEventAppFocusNextDocumentWindow: number;

declare const kEventAppFocusNextFloatingWindow: number;

declare const kEventAppFocusToolbar: number;

declare const kEventAppFrontSwitched: number;

declare const kEventAppGetDockTileMenu: number;

declare const kEventAppHidden: number;

declare const kEventAppIsEventInInstantMouser: number;

declare const kEventAppLaunchNotification: number;

declare const kEventAppLaunched: number;

declare const kEventAppQuit: number;

declare const kEventAppShown: number;

declare const kEventAppSystemUIModeChanged: number;

declare const kEventAppTerminated: number;

declare const kEventAppUpdateDockTile: number;

declare const kEventAppearanceScrollBarVariantChanged: number;

declare const kEventAppleEvent: number;

declare const kEventAttributeMonitored: number;

declare const kEventAttributeNone: number;

declare const kEventAttributeUserEvent: number;

declare const kEventClassAccessibility: number;

declare const kEventClassAppearance: number;

declare const kEventClassAppleEvent: number;

declare const kEventClassApplication: number;

declare const kEventClassClockView: number;

declare const kEventClassCommand: number;

declare const kEventClassControl: number;

declare const kEventClassDataBrowser: number;

declare const kEventClassDelegate: number;

declare const kEventClassEPPC: number;

declare const kEventClassFont: number;

declare const kEventClassGesture: number;

declare const kEventClassHIComboBox: number;

declare const kEventClassHIObject: number;

declare const kEventClassInk: number;

declare const kEventClassKeyboard: number;

declare const kEventClassMenu: number;

declare const kEventClassMouse: number;

declare const kEventClassScrollable: number;

declare const kEventClassSearchField: number;

declare const kEventClassService: number;

declare const kEventClassSystem: number;

declare const kEventClassTSMDocumentAccess: number;

declare const kEventClassTablet: number;

declare const kEventClassTextField: number;

declare const kEventClassTextInput: number;

declare const kEventClassToolbar: number;

declare const kEventClassToolbarItem: number;

declare const kEventClassToolbarItemView: number;

declare const kEventClassVolume: number;

declare const kEventClassWindow: number;

declare const kEventClockDateOrTimeChanged: number;

declare const kEventComboBoxListItemSelected: number;

declare const kEventCommandProcess: number;

declare const kEventCommandUpdateStatus: number;

declare const kEventControlActivate: number;

declare const kEventControlAddedSubControl: number;

declare const kEventControlApplyTextColor: number;

declare const kEventControlBoundsChanged: number;

declare const kEventControlClick: number;

declare const kEventControlContextualMenuClick: number;

declare const kEventControlDeactivate: number;

declare const kEventControlDispose: number;

declare const kEventControlDragEnter: number;

declare const kEventControlDragLeave: number;

declare const kEventControlDragReceive: number;

declare const kEventControlDragWithin: number;

declare const kEventControlDraw: number;

declare const kEventControlEnabledStateChanged: number;

declare const kEventControlFocusPartChanged: number;

declare const kEventControlGetActionProcPart: number;

declare const kEventControlGetAutoToggleValue: number;

declare const kEventControlGetClickActivation: number;

declare const kEventControlGetData: number;

declare const kEventControlGetFocusPart: number;

declare const kEventControlGetFrameMetrics: number;

declare const kEventControlGetIndicatorDragConstraint: number;

declare const kEventControlGetNextFocusCandidate: number;

declare const kEventControlGetOptimalBounds: number;

declare const kEventControlGetPartBounds: number;

declare const kEventControlGetPartRegion: number;

declare const kEventControlGetScrollToHereStartPoint: number;

declare const kEventControlGetSizeConstraints: number;

declare const kEventControlGetSubviewForMouseEvent: number;

declare const kEventControlGhostingFinished: number;

declare const kEventControlHiliteChanged: number;

declare const kEventControlHit: number;

declare const kEventControlHitTest: number;

declare const kEventControlIndicatorMoved: number;

declare const kEventControlInitialize: number;

declare const kEventControlInterceptSubviewClick: number;

declare const kEventControlInvalidateForSizeChange: number;

declare const kEventControlLayoutInfoChanged: number;

declare const kEventControlOptimalBoundsChanged: number;

declare const kEventControlOwningWindowChanged: number;

declare const kEventControlRemovingSubControl: number;

declare const kEventControlSetCursor: number;

declare const kEventControlSetData: number;

declare const kEventControlSetFocusPart: number;

declare const kEventControlSimulateHit: number;

declare const kEventControlTitleChanged: number;

declare const kEventControlTrack: number;

declare const kEventControlTrackingAreaEntered: number;

declare const kEventControlTrackingAreaExited: number;

declare const kEventControlValueFieldChanged: number;

declare const kEventControlVisibilityChanged: number;

declare const kEventDataBrowserDrawCustomItem: number;

declare const kEventDelegateGetGroupClasses: number;

declare const kEventDelegateGetTargetClasses: number;

declare const kEventDelegateInstalled: number;

declare const kEventDelegateIsGroup: number;

declare const kEventDelegateRemoved: number;

declare const kEventFontPanelClosed: number;

declare const kEventFontSelection: number;

declare const kEventGestureEnded: number;

declare const kEventGestureMagnify: number;

declare const kEventGestureRotate: number;

declare const kEventGestureStarted: number;

declare const kEventGestureSwipe: number;

declare const kEventGetSelectedText: number;

declare const kEventHIObjectConstruct: number;

declare const kEventHIObjectCreatedFromArchive: number;

declare const kEventHIObjectDestruct: number;

declare const kEventHIObjectEncode: number;

declare const kEventHIObjectGetInitParameters: number;

declare const kEventHIObjectInitialize: number;

declare const kEventHIObjectIsEqual: number;

declare const kEventHIObjectPrintDebugInfo: number;

declare const kEventHighLevelEvent: number;

declare const kEventHotKeyExclusive: number;

declare const kEventHotKeyNoOptions: number;

declare const kEventHotKeyPressed: number;

declare const kEventHotKeyReleased: number;

declare const kEventInkGesture: number;

declare const kEventInkPoint: number;

declare const kEventInkText: number;

declare const kEventKeyModifierFnBit: number;

declare const kEventKeyModifierFnMask: number;

declare const kEventKeyModifierNumLockBit: number;

declare const kEventKeyModifierNumLockMask: number;

declare const kEventLeaveInQueue: number;

declare const kEventLoopIdleTimerIdling: number;

declare const kEventLoopIdleTimerStarted: number;

declare const kEventLoopIdleTimerStopped: number;

declare const kEventMenuBarHidden: number;

declare const kEventMenuBarShown: number;

declare const kEventMenuBecomeScrollable: number;

declare const kEventMenuBeginTracking: number;

declare const kEventMenuCalculateSize: number;

declare const kEventMenuCeaseToBeScrollable: number;

declare const kEventMenuChangeTrackingMode: number;

declare const kEventMenuClosed: number;

declare const kEventMenuCreateFrameView: number;

declare const kEventMenuDispose: number;

declare const kEventMenuDrawItem: number;

declare const kEventMenuDrawItemContent: number;

declare const kEventMenuEnableItems: number;

declare const kEventMenuEndTracking: number;

declare const kEventMenuGetFrameBounds: number;

declare const kEventMenuMatchKey: number;

declare const kEventMenuMeasureItemHeight: number;

declare const kEventMenuMeasureItemWidth: number;

declare const kEventMenuOpening: number;

declare const kEventMenuPopulate: number;

declare const kEventMenuTargetItem: number;

declare const kEventMouseButtonPrimary: number;

declare const kEventMouseButtonSecondary: number;

declare const kEventMouseButtonTertiary: number;

declare const kEventMouseDown: number;

declare const kEventMouseDragged: number;

declare const kEventMouseEntered: number;

declare const kEventMouseExited: number;

declare const kEventMouseMoved: number;

declare const kEventMouseScroll: number;

declare const kEventMouseUp: number;

declare const kEventMouseWheelAxisX: number;

declare const kEventMouseWheelAxisY: number;

declare const kEventMouseWheelMoved: number;

declare const kEventOffsetToPos: number;

declare const kEventParamAEEventClass: number;

declare const kEventParamAEEventID: number;

declare const kEventParamATSUFontID: number;

declare const kEventParamATSUFontSize: number;

declare const kEventParamAccessibilityEventQueued: number;

declare const kEventParamAccessibleActionDescription: number;

declare const kEventParamAccessibleActionName: number;

declare const kEventParamAccessibleActionNames: number;

declare const kEventParamAccessibleAttributeName: number;

declare const kEventParamAccessibleAttributeNames: number;

declare const kEventParamAccessibleAttributeParameter: number;

declare const kEventParamAccessibleAttributeSettable: number;

declare const kEventParamAccessibleAttributeValue: number;

declare const kEventParamAccessibleChild: number;

declare const kEventParamAccessibleObject: number;

declare const kEventParamAfterDelegates: number;

declare const kEventParamAppleEvent: number;

declare const kEventParamAppleEventReply: number;

declare const kEventParamAttributes: number;

declare const kEventParamAvailableBounds: number;

declare const kEventParamBeforeDelegates: number;

declare const kEventParamBounds: number;

declare const kEventParamCGContextRef: number;

declare const kEventParamCGImageRef: number;

declare const kEventParamCTFontDescriptor: number;

declare const kEventParamCandidateText: number;

declare const kEventParamClickActivation: number;

declare const kEventParamClickCount: number;

declare const kEventParamComboBoxListSelectedItemIndex: number;

declare const kEventParamControlAction: number;

declare const kEventParamControlClickActivationResult: number;

declare const kEventParamControlCurrentOwningWindow: number;

declare const kEventParamControlCurrentPart: number;

declare const kEventParamControlDataBuffer: number;

declare const kEventParamControlDataBufferSize: number;

declare const kEventParamControlDataTag: number;

declare const kEventParamControlDrawDepth: number;

declare const kEventParamControlDrawEngraved: number;

declare const kEventParamControlDrawInColor: number;

declare const kEventParamControlFeatures: number;

declare const kEventParamControlFocusEverything: number;

declare const kEventParamControlFrameMetrics: number;

declare const kEventParamControlHit: number;

declare const kEventParamControlIndicatorDragConstraint: number;

declare const kEventParamControlIndicatorOffset: number;

declare const kEventParamControlIndicatorRegion: number;

declare const kEventParamControlInvalRgn: number;

declare const kEventParamControlIsGhosting: number;

declare const kEventParamControlMessage: number;

declare const kEventParamControlOptimalBaselineOffset: number;

declare const kEventParamControlOptimalBounds: number;

declare const kEventParamControlOriginalOwningWindow: number;

declare const kEventParamControlParam: number;

declare const kEventParamControlPart: number;

declare const kEventParamControlPartAutoRepeats: number;

declare const kEventParamControlPartBounds: number;

declare const kEventParamControlPrefersShape: number;

declare const kEventParamControlPreviousPart: number;

declare const kEventParamControlRef: number;

declare const kEventParamControlRegion: number;

declare const kEventParamControlResult: number;

declare const kEventParamControlSubControl: number;

declare const kEventParamControlSubview: number;

declare const kEventParamControlValue: number;

declare const kEventParamControlWouldAcceptDrop: number;

declare const kEventParamCurrentBounds: number;

declare const kEventParamCurrentDockDevice: number;

declare const kEventParamCurrentDockRect: number;

declare const kEventParamCurrentMenuTrackingMode: number;

declare const kEventParamCurrentWindow: number;

declare const kEventParamDataBrowserItemID: number;

declare const kEventParamDataBrowserItemState: number;

declare const kEventParamDataBrowserPropertyID: number;

declare const kEventParamDecodingForEditor: number;

declare const kEventParamDelegateGroupClasses: number;

declare const kEventParamDelegateGroupParameters: number;

declare const kEventParamDelegateTarget: number;

declare const kEventParamDelegateTargetClasses: number;

declare const kEventParamDeviceColor: number;

declare const kEventParamDeviceDepth: number;

declare const kEventParamDictionary: number;

declare const kEventParamDimensions: number;

declare const kEventParamDirectObject: number;

declare const kEventParamDirectionInverted: number;

declare const kEventParamDisplayChangeFlags: number;

declare const kEventParamDisplayDevice: number;

declare const kEventParamDragRef: number;

declare const kEventParamEnableMenuForKeyEvent: number;

declare const kEventParamEnabled: number;

declare const kEventParamEventRef: number;

declare const kEventParamFMFontFamily: number;

declare const kEventParamFMFontSize: number;

declare const kEventParamFMFontStyle: number;

declare const kEventParamFontColor: number;

declare const kEventParamGDevice: number;

declare const kEventParamGrafPort: number;

declare const kEventParamHIArchive: number;

declare const kEventParamHICommand: number;

declare const kEventParamHIObjectInstance: number;

declare const kEventParamHIViewTrackingArea: number;

declare const kEventParamImageSize: number;

declare const kEventParamIndex: number;

declare const kEventParamInitCollection: number;

declare const kEventParamInitParameters: number;

declare const kEventParamInkGestureBounds: number;

declare const kEventParamInkGestureHotspot: number;

declare const kEventParamInkGestureKind: number;

declare const kEventParamInkKeyboardShortcut: number;

declare const kEventParamInkTextRef: number;

declare const kEventParamIsInInstantMouser: number;

declare const kEventParamKeyCode: number;

declare const kEventParamKeyMacCharCodes: number;

declare const kEventParamKeyModifiers: number;

declare const kEventParamKeyUnicodes: number;

declare const kEventParamKeyboardType: number;

declare const kEventParamLaunchErr: number;

declare const kEventParamLaunchRefCon: number;

declare const kEventParamLineSize: number;

declare const kEventParamMagnificationAmount: number;

declare const kEventParamMaximumSize: number;

declare const kEventParamMenuCommand: number;

declare const kEventParamMenuCommandKeyBounds: number;

declare const kEventParamMenuContext: number;

declare const kEventParamMenuContextHeight: number;

declare const kEventParamMenuDirection: number;

declare const kEventParamMenuDismissed: number;

declare const kEventParamMenuDrawState: number;

declare const kEventParamMenuEventOptions: number;

declare const kEventParamMenuFirstOpen: number;

declare const kEventParamMenuFrameView: number;

declare const kEventParamMenuIconBounds: number;

declare const kEventParamMenuIsPopup: number;

declare const kEventParamMenuItemBounds: number;

declare const kEventParamMenuItemHeight: number;

declare const kEventParamMenuItemIndex: number;

declare const kEventParamMenuItemType: number;

declare const kEventParamMenuItemWidth: number;

declare const kEventParamMenuMarkBounds: number;

declare const kEventParamMenuPopupItem: number;

declare const kEventParamMenuRef: number;

declare const kEventParamMenuTextBaseline: number;

declare const kEventParamMenuTextBounds: number;

declare const kEventParamMenuType: number;

declare const kEventParamMenuVirtualBottom: number;

declare const kEventParamMenuVirtualTop: number;

declare const kEventParamMinimumSize: number;

declare const kEventParamModalClickResult: number;

declare const kEventParamModalWindow: number;

declare const kEventParamMouseButton: number;

declare const kEventParamMouseChord: number;

declare const kEventParamMouseDelta: number;

declare const kEventParamMouseLocation: number;

declare const kEventParamMouseTrackingRef: number;

declare const kEventParamMouseWheelAxis: number;

declare const kEventParamMouseWheelDelta: number;

declare const kEventParamMouseWheelSmoothHorizontalDelta: number;

declare const kEventParamMouseWheelSmoothVerticalDelta: number;

declare const kEventParamMutableArray: number;

declare const kEventParamNewMenuTrackingMode: number;

declare const kEventParamNewScrollBarVariant: number;

declare const kEventParamNextControl: number;

declare const kEventParamOrigin: number;

declare const kEventParamOriginalBounds: number;

declare const kEventParamParentMenu: number;

declare const kEventParamParentMenuItem: number;

declare const kEventParamPasteboardRef: number;

declare const kEventParamPostOptions: number;

declare const kEventParamPostTarget: number;

declare const kEventParamPreviousBounds: number;

declare const kEventParamPreviousDockDevice: number;

declare const kEventParamPreviousDockRect: number;

declare const kEventParamPreviousWindow: number;

declare const kEventParamProcessID: number;

declare const kEventParamReason: number;

declare const kEventParamReplacementText: number;

declare const kEventParamResult: number;

declare const kEventParamRgnHandle: number;

declare const kEventParamRotationAmount: number;

declare const kEventParamScrapRef: number;

declare const kEventParamServiceCopyTypes: number;

declare const kEventParamServiceMessageName: number;

declare const kEventParamServicePasteTypes: number;

declare const kEventParamServiceUserData: number;

declare const kEventParamShape: number;

declare const kEventParamStartControl: number;

declare const kEventParamSwipeDirection: number;

declare const kEventParamSystemUIMode: number;

declare const kEventParamSystemUIOptions: number;

declare const kEventParamTSMDocAccessBaselineDelta: number;

declare const kEventParamTSMDocAccessCharacterCount: number;

declare const kEventParamTSMDocAccessEffectiveRange: number;

declare const kEventParamTSMDocAccessLineBounds: number;

declare const kEventParamTSMDocAccessLockCount: number;

declare const kEventParamTSMDocAccessReplyATSFont: number;

declare const kEventParamTSMDocAccessReplyATSUGlyphSelector: number;

declare const kEventParamTSMDocAccessReplyCTFontRef: number;

declare const kEventParamTSMDocAccessReplyCTGlyphInfoRef: number;

declare const kEventParamTSMDocAccessReplyCharacterRange: number;

declare const kEventParamTSMDocAccessReplyCharactersPtr: number;

declare const kEventParamTSMDocAccessReplyFontSize: number;

declare const kEventParamTSMDocAccessRequestedCharacterAttributes: number;

declare const kEventParamTSMDocAccessSendCharacterIndex: number;

declare const kEventParamTSMDocAccessSendCharacterRange: number;

declare const kEventParamTSMDocAccessSendCharactersPtr: number;

declare const kEventParamTSMDocAccessSendComponentInstance: number;

declare const kEventParamTSMDocAccessSendRefCon: number;

declare const kEventParamTSMSendComponentInstance: number;

declare const kEventParamTSMSendRefCon: number;

declare const kEventParamTabletEventType: number;

declare const kEventParamTabletPointRec: number;

declare const kEventParamTabletPointerRec: number;

declare const kEventParamTabletProximityRec: number;

declare const kEventParamTextInputGlyphInfoArray: number;

declare const kEventParamTextInputReplyATSFont: number;

declare const kEventParamTextInputReplyAttributedString: number;

declare const kEventParamTextInputReplyCTFontRef: number;

declare const kEventParamTextInputReplyFMFont: number;

declare const kEventParamTextInputReplyFont: number;

declare const kEventParamTextInputReplyGlyphInfoArray: number;

declare const kEventParamTextInputReplyLeadingEdge: number;

declare const kEventParamTextInputReplyLineAscent: number;

declare const kEventParamTextInputReplyLineHeight: number;

declare const kEventParamTextInputReplyMacEncoding: number;

declare const kEventParamTextInputReplyPoint: number;

declare const kEventParamTextInputReplyPointSize: number;

declare const kEventParamTextInputReplyRegionClass: number;

declare const kEventParamTextInputReplySLRec: number;

declare const kEventParamTextInputReplyShowHide: number;

declare const kEventParamTextInputReplyText: number;

declare const kEventParamTextInputReplyTextAngle: number;

declare const kEventParamTextInputReplyTextOffset: number;

declare const kEventParamTextInputSendAttributedString: number;

declare const kEventParamTextInputSendClauseRng: number;

declare const kEventParamTextInputSendComponentInstance: number;

declare const kEventParamTextInputSendCurrentPoint: number;

declare const kEventParamTextInputSendDraggingMode: number;

declare const kEventParamTextInputSendFixLen: number;

declare const kEventParamTextInputSendGlyphInfoArray: number;

declare const kEventParamTextInputSendHiliteRng: number;

declare const kEventParamTextInputSendKeyboardEvent: number;

declare const kEventParamTextInputSendLeadingEdge: number;

declare const kEventParamTextInputSendMouseEvent: number;

declare const kEventParamTextInputSendPinRng: number;

declare const kEventParamTextInputSendRefCon: number;

declare const kEventParamTextInputSendReplaceRange: number;

declare const kEventParamTextInputSendSLRec: number;

declare const kEventParamTextInputSendShowHide: number;

declare const kEventParamTextInputSendText: number;

declare const kEventParamTextInputSendTextOffset: number;

declare const kEventParamTextInputSendTextServiceEncoding: number;

declare const kEventParamTextInputSendTextServiceMacEncoding: number;

declare const kEventParamTextInputSendUpdateRng: number;

declare const kEventParamTextLength: number;

declare const kEventParamTextSelection: number;

declare const kEventParamToolbar: number;

declare const kEventParamToolbarDisplayMode: number;

declare const kEventParamToolbarDisplaySize: number;

declare const kEventParamToolbarItem: number;

declare const kEventParamToolbarItemConfigData: number;

declare const kEventParamToolbarItemIdentifier: number;

declare const kEventParamTransactionID: number;

declare const kEventParamUnconfirmedRange: number;

declare const kEventParamUnconfirmedText: number;

declare const kEventParamUserData: number;

declare const kEventParamViewAttributesDictionary: number;

declare const kEventParamViewSize: number;

declare const kEventParamWindowContentBounds: number;

declare const kEventParamWindowDefPart: number;

declare const kEventParamWindowDragHiliteFlag: number;

declare const kEventParamWindowFeatures: number;

declare const kEventParamWindowGrowRect: number;

declare const kEventParamWindowModality: number;

declare const kEventParamWindowModifiedFlag: number;

declare const kEventParamWindowMouseLocation: number;

declare const kEventParamWindowPartCode: number;

declare const kEventParamWindowProxyGWorldPtr: number;

declare const kEventParamWindowProxyImageRgn: number;

declare const kEventParamWindowProxyOutlineRgn: number;

declare const kEventParamWindowRef: number;

declare const kEventParamWindowRegionCode: number;

declare const kEventParamWindowStateChangedFlags: number;

declare const kEventParamWindowTitleFullWidth: number;

declare const kEventParamWindowTitleTextWidth: number;

declare const kEventParamWindowTransitionAction: number;

declare const kEventParamWindowTransitionEffect: number;

declare const kEventPosToOffset: number;

declare const kEventPriorityHigh: number;

declare const kEventPriorityLow: number;

declare const kEventPriorityStandard: number;

declare const kEventProcessCommand: number;

declare const kEventQueueOptionsNone: number;

declare const kEventRawKeyDown: number;

declare const kEventRawKeyModifiersChanged: number;

declare const kEventRawKeyRepeat: number;

declare const kEventRawKeyUp: number;

declare const kEventRemoveFromQueue: number;

declare const kEventScrollableGetInfo: number;

declare const kEventScrollableInfoChanged: number;

declare const kEventScrollableScrollTo: number;

declare const kEventSearchFieldCancelClicked: number;

declare const kEventSearchFieldSearchClicked: number;

declare const kEventServiceCopy: number;

declare const kEventServiceGetTypes: number;

declare const kEventServicePaste: number;

declare const kEventServicePerform: number;

declare const kEventShowHideBottomWindow: number;

declare const kEventSystemDisplayReconfigured: number;

declare const kEventSystemDisplaysAsleep: number;

declare const kEventSystemDisplaysAwake: number;

declare const kEventSystemTimeDateChanged: number;

declare const kEventSystemUserSessionActivated: number;

declare const kEventSystemUserSessionDeactivated: number;

declare const kEventTSMDocumentAccessGetCharacters: number;

declare const kEventTSMDocumentAccessGetCharactersPtr: number;

declare const kEventTSMDocumentAccessGetCharactersPtrForLargestBuffer: number;

declare const kEventTSMDocumentAccessGetFirstRectForRange: number;

declare const kEventTSMDocumentAccessGetFont: number;

declare const kEventTSMDocumentAccessGetGlyphInfo: number;

declare const kEventTSMDocumentAccessGetLength: number;

declare const kEventTSMDocumentAccessGetSelectedRange: number;

declare const kEventTSMDocumentAccessLockDocument: number;

declare const kEventTSMDocumentAccessUnlockDocument: number;

declare const kEventTabletPoint: number;

declare const kEventTabletPointer: number;

declare const kEventTabletProximity: number;

declare const kEventTargetDontPropagate: number;

declare const kEventTargetSendToAllHandlers: number;

declare const kEventTextAccepted: number;

declare const kEventTextDidChange: number;

declare const kEventTextInputFilterText: number;

declare const kEventTextInputGetSelectedText: number;

declare const kEventTextInputIsMouseEventInInlineInputArea: number;

declare const kEventTextInputOffsetToPos: number;

declare const kEventTextInputPosToOffset: number;

declare const kEventTextInputShowHideBottomWindow: number;

declare const kEventTextInputUnicodeForKeyEvent: number;

declare const kEventTextInputUnicodeText: number;

declare const kEventTextInputUpdateActiveInputArea: number;

declare const kEventTextShouldChangeInRange: number;

declare const kEventToolbarBeginMultiChange: number;

declare const kEventToolbarCreateItemFromDrag: number;

declare const kEventToolbarCreateItemWithIdentifier: number;

declare const kEventToolbarDisplayModeChanged: number;

declare const kEventToolbarDisplaySizeChanged: number;

declare const kEventToolbarEndMultiChange: number;

declare const kEventToolbarGetAllowedIdentifiers: number;

declare const kEventToolbarGetDefaultIdentifiers: number;

declare const kEventToolbarGetSelectableIdentifiers: number;

declare const kEventToolbarItemAcceptDrop: number;

declare const kEventToolbarItemAdded: number;

declare const kEventToolbarItemCommandIDChanged: number;

declare const kEventToolbarItemCreateCustomView: number;

declare const kEventToolbarItemEnabledStateChanged: number;

declare const kEventToolbarItemGetPersistentData: number;

declare const kEventToolbarItemHelpTextChanged: number;

declare const kEventToolbarItemImageChanged: number;

declare const kEventToolbarItemLabelChanged: number;

declare const kEventToolbarItemPerformAction: number;

declare const kEventToolbarItemRemoved: number;

declare const kEventToolbarItemSelectedStateChanged: number;

declare const kEventToolbarItemViewConfigForMode: number;

declare const kEventToolbarItemViewConfigForSize: number;

declare const kEventToolbarItemViewEnterConfigMode: number;

declare const kEventToolbarItemViewExitConfigMode: number;

declare const kEventToolbarItemWouldAcceptDrop: number;

declare const kEventToolbarLayoutChanged: number;

declare const kEventUnicodeForKeyEvent: number;

declare const kEventUpdateActiveInputArea: number;

declare const kEventVolumeMounted: number;

declare const kEventVolumeUnmounted: number;

declare const kEventWindowActivated: number;

declare const kEventWindowAttributesChanged: number;

declare const kEventWindowBoundsChanged: number;

declare const kEventWindowBoundsChanging: number;

declare const kEventWindowClose: number;

declare const kEventWindowCloseAll: number;

declare const kEventWindowClosed: number;

declare const kEventWindowCollapse: number;

declare const kEventWindowCollapseAll: number;

declare const kEventWindowCollapsed: number;

declare const kEventWindowCollapsing: number;

declare const kEventWindowColorSpaceChanged: number;

declare const kEventWindowConstrain: number;

declare const kEventWindowContextualMenuSelect: number;

declare const kEventWindowCursorChange: number;

declare const kEventWindowDeactivated: number;

declare const kEventWindowDefDispose: number;

declare const kEventWindowDefDragHilite: number;

declare const kEventWindowDefDrawFrame: number;

declare const kEventWindowDefDrawGrowBox: number;

declare const kEventWindowDefDrawPart: number;

declare const kEventWindowDefGetGrowImageRegion: number;

declare const kEventWindowDefGetRegion: number;

declare const kEventWindowDefHitTest: number;

declare const kEventWindowDefInit: number;

declare const kEventWindowDefMeasureTitle: number;

declare const kEventWindowDefModified: number;

declare const kEventWindowDefSetupProxyDragImage: number;

declare const kEventWindowDefStateChanged: number;

declare const kEventWindowDispose: number;

declare const kEventWindowDragCompleted: number;

declare const kEventWindowDragHilite: number;

declare const kEventWindowDragStarted: number;

declare const kEventWindowDrawFrame: number;

declare const kEventWindowDrawGrowBox: number;

declare const kEventWindowDrawPart: number;

declare const kEventWindowDrawerClosed: number;

declare const kEventWindowDrawerClosing: number;

declare const kEventWindowDrawerOpened: number;

declare const kEventWindowDrawerOpening: number;

declare const kEventWindowExpand: number;

declare const kEventWindowExpandAll: number;

declare const kEventWindowExpanded: number;

declare const kEventWindowExpanding: number;

declare const kEventWindowFocusAcquired: number;

declare const kEventWindowFocusContent: number;

declare const kEventWindowFocusDrawer: number;

declare const kEventWindowFocusLost: number;

declare const kEventWindowFocusRelinquish: number;

declare const kEventWindowFocusRestored: number;

declare const kEventWindowFocusToolbar: number;

declare const kEventWindowFullScreenEnterCompleted: number;

declare const kEventWindowFullScreenEnterStarted: number;

declare const kEventWindowFullScreenExitCompleted: number;

declare const kEventWindowFullScreenExitStarted: number;

declare const kEventWindowGetClickActivation: number;

declare const kEventWindowGetClickModality: number;

declare const kEventWindowGetDockTileMenu: number;

declare const kEventWindowGetFullScreenContentSize: number;

declare const kEventWindowGetGrowImageRegion: number;

declare const kEventWindowGetIdealSize: number;

declare const kEventWindowGetIdealStandardState: number;

declare const kEventWindowGetMaximumSize: number;

declare const kEventWindowGetMinimumSize: number;

declare const kEventWindowGetRegion: number;

declare const kEventWindowHandleActivate: number;

declare const kEventWindowHandleDeactivate: number;

declare const kEventWindowHidden: number;

declare const kEventWindowHiding: number;

declare const kEventWindowHitTest: number;

declare const kEventWindowInit: number;

declare const kEventWindowMeasureTitle: number;

declare const kEventWindowModified: number;

declare const kEventWindowPaint: number;

declare const kEventWindowPathSelect: number;

declare const kEventWindowProxyBeginDrag: number;

declare const kEventWindowProxyEndDrag: number;

declare const kEventWindowResizeCompleted: number;

declare const kEventWindowResizeStarted: number;

declare const kEventWindowRestoreFromDock: number;

declare const kEventWindowRestoredAfterRelaunch: number;

declare const kEventWindowSetupProxyDragImage: number;

declare const kEventWindowSheetClosed: number;

declare const kEventWindowSheetClosing: number;

declare const kEventWindowSheetOpened: number;

declare const kEventWindowSheetOpening: number;

declare const kEventWindowShowing: number;

declare const kEventWindowShown: number;

declare const kEventWindowStateChanged: number;

declare const kEventWindowTitleChanged: number;

declare const kEventWindowToolbarSwitchMode: number;

declare const kEventWindowTransitionCompleted: number;

declare const kEventWindowTransitionStarted: number;

declare const kEventWindowUpdateDockTile: number;

declare const kEventWindowZoom: number;

declare const kEventWindowZoomAll: number;

declare const kEventWindowZoomed: number;

declare var kFCFontCGColorAttribute: string;

declare var kFCFontFaceAttribute: string;

declare var kFCFontFamilyAttribute: string;

declare var kFCFontNameAttribute: string;

declare var kFCFontSizeAttribute: string;

declare var kFCFontVisibleNameAttribute: string;

declare const kFillScreen: number;

declare const kFitToScreen: number;

declare const kFlavorTypeClippingFilename: number;

declare const kFlavorTypeClippingName: number;

declare const kFlavorTypeDragToTrashOnly: number;

declare const kFlavorTypeFinderNoTrackingBehavior: number;

declare const kFlavorTypeUnicodeClippingFilename: number;

declare const kFlavorTypeUnicodeClippingName: number;

declare const kFloatingWindowClass: number;

declare const kFloatingWindowDefinition: number;

declare var kFontPanelATSUFontIDKey: string;

declare var kFontPanelAttributeSizesKey: string;

declare var kFontPanelAttributeTagsKey: string;

declare var kFontPanelAttributeValuesKey: string;

declare var kFontPanelAttributesKey: string;

declare var kFontPanelBackgroundColorAttributeName: string;

declare var kFontPanelFeatureSelectorsKey: string;

declare var kFontPanelFeatureTypesKey: string;

declare var kFontPanelMouseTrackingState: string;

declare var kFontPanelVariationAxesKey: string;

declare var kFontPanelVariationValuesKey: string;

declare const kFontSelectionATSUIType: number;

declare const kFontSelectionCoreTextType: number;

declare const kFontSelectionQDStyleVersionZero: number;

declare const kFontSelectionQDType: number;

declare const kFormFeedCharCode: number;

declare const kFunctionKeyCharCode: number;

declare const kGSSSelectGenericToRealID: number;

declare const kGSSSelectGetDefaultScriptingComponent: number;

declare const kGSSSelectGetScriptingComponent: number;

declare const kGSSSelectGetScriptingComponentFromStored: number;

declare const kGSSSelectOutOfRange: number;

declare const kGSSSelectRealToGenericID: number;

declare const kGSSSelectSetDefaultScriptingComponent: number;

declare const kGenericComponentVersion: number;

declare const kGetAETE: number;

declare const kGetAEUT: number;

declare const kHIArchiveDecodeSuperclassForUnregisteredObjects: number;

declare const kHIArchiveDecodingForEditor: number;

declare const kHIClassOptionSingleton: number;

declare const kHIComboBoxAutoCompletionAttribute: number;

declare const kHIComboBoxAutoDisclosureAttribute: number;

declare const kHIComboBoxAutoSizeListAttribute: number;

declare const kHIComboBoxAutoSortAttribute: number;

declare const kHIComboBoxDisclosurePart: number;

declare const kHIComboBoxEditTextPart: number;

declare const kHIComboBoxListPixelHeightTag: number;

declare const kHIComboBoxListPixelWidthTag: number;

declare const kHIComboBoxListTag: number;

declare const kHIComboBoxNoAttributes: number;

declare const kHIComboBoxNumVisibleItemsTag: number;

declare const kHIComboBoxStandardAttributes: number;

declare const kHICommandAbout: number;

declare const kHICommandAppHelp: number;

declare const kHICommandArrangeInFront: number;

declare const kHICommandBringAllToFront: number;

declare const kHICommandCancel: number;

declare const kHICommandChangeSpelling: number;

declare const kHICommandCheckSpelling: number;

declare const kHICommandCheckSpellingAsYouType: number;

declare const kHICommandClear: number;

declare const kHICommandClose: number;

declare const kHICommandCloseAll: number;

declare const kHICommandCloseFile: number;

declare const kHICommandCopy: number;

declare const kHICommandCustomizeToolbar: number;

declare const kHICommandCut: number;

declare const kHICommandCycleToolbarModeLarger: number;

declare const kHICommandCycleToolbarModeSmaller: number;

declare const kHICommandFromControl: number;

declare const kHICommandFromMenu: number;

declare const kHICommandFromWindow: number;

declare const kHICommandHide: number;

declare const kHICommandHideOthers: number;

declare const kHICommandHideToolbar: number;

declare const kHICommandIgnoreSpelling: number;

declare const kHICommandLearnWord: number;

declare const kHICommandMaximizeAll: number;

declare const kHICommandMaximizeWindow: number;

declare const kHICommandMinimizeAll: number;

declare const kHICommandMinimizeWindow: number;

declare const kHICommandNew: number;

declare const kHICommandOK: number;

declare const kHICommandOpen: number;

declare const kHICommandOther: number;

declare const kHICommandPageSetup: number;

declare const kHICommandPaste: number;

declare const kHICommandPreferences: number;

declare const kHICommandPrint: number;

declare const kHICommandQuit: number;

declare const kHICommandQuitAndDiscardWindows: number;

declare const kHICommandQuitAndKeepWindows: number;

declare const kHICommandRedo: number;

declare const kHICommandRevert: number;

declare const kHICommandRotateFloatingWindowsBackward: number;

declare const kHICommandRotateFloatingWindowsForward: number;

declare const kHICommandRotateWindowsBackward: number;

declare const kHICommandRotateWindowsForward: number;

declare const kHICommandSave: number;

declare const kHICommandSaveAs: number;

declare const kHICommandSelectAll: number;

declare const kHICommandSelectWindow: number;

declare const kHICommandShowAll: number;

declare const kHICommandShowCharacterPalette: number;

declare const kHICommandShowHideFontPanel: number;

declare const kHICommandShowSpellingPanel: number;

declare const kHICommandShowToolbar: number;

declare const kHICommandStartDictation: number;

declare const kHICommandToggleAllToolbars: number;

declare const kHICommandToggleFullScreen: number;

declare const kHICommandToggleToolbar: number;

declare const kHICommandUndo: number;

declare const kHICommandWindowListSeparator: number;

declare const kHICommandWindowListTerminator: number;

declare const kHICommandZoomWindow: number;

declare const kHICoordSpace72DPIGlobal: number;

declare const kHICoordSpaceScreenPixel: number;

declare const kHICoordSpaceView: number;

declare const kHICoordSpaceWindow: number;

declare const kHIDelegateAfter: number;

declare var kHIDelegateAfterKey: string;

declare const kHIDelegateAll: number;

declare const kHIDelegateBefore: number;

declare var kHIDelegateBeforeKey: string;

declare const kHIHotKeyModeAllDisabled: number;

declare const kHIHotKeyModeAllDisabledExceptUniversalAccess: number;

declare const kHIHotKeyModeAllEnabled: number;

declare const kHIImageViewAutoTransformNone: number;

declare const kHIImageViewAutoTransformOnDeactivate: number;

declare const kHIImageViewAutoTransformOnDisable: number;

declare const kHIImageViewImageTag: number;

declare const kHILayoutBindBottom: number;

declare const kHILayoutBindLeft: number;

declare const kHILayoutBindMax: number;

declare const kHILayoutBindMin: number;

declare const kHILayoutBindNone: number;

declare const kHILayoutBindRight: number;

declare const kHILayoutBindTop: number;

declare const kHILayoutInfoVersionZero: number;

declare const kHILayoutPositionBottom: number;

declare const kHILayoutPositionCenter: number;

declare const kHILayoutPositionLeft: number;

declare const kHILayoutPositionMax: number;

declare const kHILayoutPositionMin: number;

declare const kHILayoutPositionNone: number;

declare const kHILayoutPositionRight: number;

declare const kHILayoutPositionTop: number;

declare const kHILayoutScaleAbsolute: number;

declare const kHIMenuAppendItem: number;

declare const kHIMenuCenterDirection: number;

declare const kHIMenuDismissedByActivationChange: number;

declare const kHIMenuDismissedByAppSwitch: number;

declare const kHIMenuDismissedByCancelMenuTracking: number;

declare const kHIMenuDismissedByFocusChange: number;

declare const kHIMenuDismissedByKeyEvent: number;

declare const kHIMenuDismissedByMouseDown: number;

declare const kHIMenuDismissedByMouseUp: number;

declare const kHIMenuDismissedBySelection: number;

declare const kHIMenuDismissedByTimeout: number;

declare const kHIMenuDismissedByUserCancel: number;

declare const kHIMenuLeftDirection: number;

declare const kHIMenuRightDirection: number;

declare const kHIModalClickAllowEvent: number;

declare const kHIModalClickAnnounce: number;

declare const kHIModalClickIsModal: number;

declare const kHIModalClickRaiseWindow: number;

declare var kHIObjectCustomDataCDEFProcIDKey: string;

declare var kHIObjectCustomDataClassIDKey: string;

declare var kHIObjectCustomDataDelegateGroupParametersKey: string;

declare var kHIObjectCustomDataParameterNamesKey: string;

declare var kHIObjectCustomDataParameterTypesKey: string;

declare var kHIObjectCustomDataParameterValuesKey: string;

declare var kHIObjectCustomDataSuperClassIDKey: string;

declare var kHIObjectInitParamDescription: string;

declare var kHIObjectInitParamEventName: string;

declare var kHIObjectInitParamEventType: string;

declare var kHIObjectInitParamUserName: string;

declare const kHIScrollViewOptionsAllowGrow: number;

declare const kHIScrollViewOptionsDisableSmoothScrolling: number;

declare const kHIScrollViewOptionsFillGrowArea: number;

declare const kHIScrollViewOptionsHorizScroll: number;

declare const kHIScrollViewOptionsVertScroll: number;

declare const kHIScrollViewPageDown: number;

declare const kHIScrollViewPageLeft: number;

declare const kHIScrollViewPageRight: number;

declare const kHIScrollViewPageUp: number;

declare const kHIScrollViewScrollToBottom: number;

declare const kHIScrollViewScrollToLeft: number;

declare const kHIScrollViewScrollToRight: number;

declare const kHIScrollViewScrollToTop: number;

declare const kHIScrollViewValidOptions: number;

declare const kHISearchFieldAttributesCancel: number;

declare const kHISearchFieldAttributesSearchIcon: number;

declare const kHISearchFieldNoAttributes: number;

declare const kHISegmentBehaviorMomentary: number;

declare const kHISegmentBehaviorRadio: number;

declare const kHISegmentBehaviorSticky: number;

declare const kHISegmentBehaviorToggles: number;

declare const kHISegmentNoAttributes: number;

declare const kHISegmentSendCmdToUserFocus: number;

declare const kHISegmentedViewKind: number;

declare var kHITextViewClassID: string;

declare const kHIThemeFocusRingAbove: number;

declare const kHIThemeFocusRingBelow: number;

declare const kHIThemeFocusRingOnly: number;

declare const kHIThemeFrameListBox: number;

declare const kHIThemeFrameTextFieldRound: number;

declare const kHIThemeFrameTextFieldRoundMini: number;

declare const kHIThemeFrameTextFieldRoundSmall: number;

declare const kHIThemeFrameTextFieldSquare: number;

declare const kHIThemeGroupBoxKindPrimary: number;

declare const kHIThemeGroupBoxKindPrimaryOpaque: number;

declare const kHIThemeGroupBoxKindSecondary: number;

declare const kHIThemeGroupBoxKindSecondaryOpaque: number;

declare const kHIThemeGrowBoxKindNone: number;

declare const kHIThemeGrowBoxKindNormal: number;

declare const kHIThemeGrowBoxSizeNormal: number;

declare const kHIThemeGrowBoxSizeSmall: number;

declare const kHIThemeHeaderKindList: number;

declare const kHIThemeHeaderKindWindow: number;

declare const kHIThemeMenuDrawInfoVersionOne: number;

declare const kHIThemeMenuDrawInfoVersionZero: number;

declare const kHIThemeMenuTitleDrawCondensed: number;

declare const kHIThemeOrientationInverted: number;

declare const kHIThemeOrientationNormal: number;

declare const kHIThemeSegmentAdornmentFocus: number;

declare const kHIThemeSegmentAdornmentLeadingSeparator: number;

declare const kHIThemeSegmentAdornmentNone: number;

declare const kHIThemeSegmentAdornmentTrailingSeparator: number;

declare const kHIThemeSegmentKindInset: number;

declare const kHIThemeSegmentKindNormal: number;

declare const kHIThemeSegmentKindTextured: number;

declare const kHIThemeSegmentPositionFirst: number;

declare const kHIThemeSegmentPositionLast: number;

declare const kHIThemeSegmentPositionMiddle: number;

declare const kHIThemeSegmentPositionOnly: number;

declare const kHIThemeSegmentSizeMini: number;

declare const kHIThemeSegmentSizeNormal: number;

declare const kHIThemeSegmentSizeSmall: number;

declare const kHIThemeSplitterAdornmentMetal: number;

declare const kHIThemeSplitterAdornmentNone: number;

declare const kHIThemeTabAdornmentFocus: number;

declare const kHIThemeTabAdornmentLeadingSeparator: number;

declare const kHIThemeTabAdornmentNone: number;

declare const kHIThemeTabAdornmentTrailingSeparator: number;

declare const kHIThemeTabKindNormal: number;

declare const kHIThemeTabPaneAdornmentNormal: number;

declare const kHIThemeTabPositionFirst: number;

declare const kHIThemeTabPositionLast: number;

declare const kHIThemeTabPositionMiddle: number;

declare const kHIThemeTabPositionOnly: number;

declare const kHIThemeTabSizeMini: number;

declare const kHIThemeTabSizeNormal: number;

declare const kHIThemeTabSizeSmall: number;

declare const kHIThemeTextBoxOptionDontClip: number;

declare const kHIThemeTextBoxOptionEngraved: number;

declare const kHIThemeTextBoxOptionNone: number;

declare const kHIThemeTextBoxOptionStronglyVertical: number;

declare const kHIThemeTextHorizontalFlushCenter: number;

declare const kHIThemeTextHorizontalFlushDefault: number;

declare const kHIThemeTextHorizontalFlushLeft: number;

declare const kHIThemeTextHorizontalFlushRight: number;

declare const kHIThemeTextInfoVersionOne: number;

declare const kHIThemeTextInfoVersionZero: number;

declare const kHIThemeTextTruncationDefault: number;

declare const kHIThemeTextTruncationEnd: number;

declare const kHIThemeTextTruncationMiddle: number;

declare const kHIThemeTextTruncationNone: number;

declare const kHIThemeTextVerticalFlushBottom: number;

declare const kHIThemeTextVerticalFlushCenter: number;

declare const kHIThemeTextVerticalFlushDefault: number;

declare const kHIThemeTextVerticalFlushTop: number;

declare const kHIToolbarAutoSavesConfig: number;

declare const kHIToolbarCommandPressAction: number;

declare const kHIToolbarDisplayModeDefault: number;

declare const kHIToolbarDisplayModeIconAndLabel: number;

declare const kHIToolbarDisplayModeIconOnly: number;

declare const kHIToolbarDisplayModeLabelOnly: number;

declare const kHIToolbarDisplaySizeDefault: number;

declare const kHIToolbarDisplaySizeNormal: number;

declare const kHIToolbarDisplaySizeSmall: number;

declare const kHIToolbarIsConfigurable: number;

declare const kHIToolbarItemAllowDuplicates: number;

declare const kHIToolbarItemAnchoredLeft: number;

declare const kHIToolbarItemCantBeRemoved: number;

declare const kHIToolbarItemDisabled: number;

declare const kHIToolbarItemIsSeparator: number;

declare const kHIToolbarItemLabelDisabled: number;

declare const kHIToolbarItemMutableAttrs: number;

declare const kHIToolbarItemNoAttributes: number;

declare const kHIToolbarItemSelected: number;

declare const kHIToolbarItemSendCmdToUserFocus: number;

declare const kHIToolbarItemValidAttrs: number;

declare const kHIToolbarNoAttributes: number;

declare const kHIToolbarValidAttrs: number;

declare const kHIToolbarViewDrawBackgroundTag: number;

declare var kHIToolboxVersionNumber: number;

declare const kHITransformDisabled: number;

declare const kHITransformNone: number;

declare const kHITransformSelected: number;

declare const kHIViewAllowsSubviews: number;

declare const kHIViewAttributeIsFieldEditor: number;

declare const kHIViewAttributeSendCommandToUserFocus: number;

declare const kHIViewAutoToggles: number;

declare const kHIViewClickableMetaPart: number;

declare const kHIViewContentAlertIconType: number;

declare const kHIViewContentCGImageRef: number;

declare const kHIViewContentIconRef: number;

declare const kHIViewContentIconSuiteRef: number;

declare const kHIViewContentIconTypeAndCreator: number;

declare const kHIViewContentImageFile: number;

declare const kHIViewContentImageResource: number;

declare const kHIViewContentMetaPart: number;

declare const kHIViewContentNSImage: number;

declare const kHIViewContentNone: number;

declare const kHIViewContentTextOnly: number;

declare const kHIViewDisabledPart: number;

declare const kHIViewDoesNotDraw: number;

declare const kHIViewDoesNotUseSpecialParts: number;

declare const kHIViewEntireView: number;

declare const kHIViewFeatureAllowsSubviews: number;

declare const kHIViewFeatureAutoToggles: number;

declare const kHIViewFeatureDoesNotDraw: number;

declare const kHIViewFeatureDoesNotUseSpecialParts: number;

declare const kHIViewFeatureGetsFocusOnClick: number;

declare const kHIViewFeatureIdlesWithTimer: number;

declare const kHIViewFeatureIgnoresClicks: number;

declare const kHIViewFeatureInvertsUpDownValueMeaning: number;

declare const kHIViewFeatureIsOpaque: number;

declare const kHIViewFeatureSupportsGhosting: number;

declare const kHIViewFeatureSupportsLiveFeedback: number;

declare const kHIViewFeatureSupportsRadioBehavior: number;

declare const kHIViewFocusNextPart: number;

declare const kHIViewFocusNoPart: number;

declare const kHIViewFocusOnAnyControl: number;

declare const kHIViewFocusPrevPart: number;

declare const kHIViewFocusTraditionally: number;

declare const kHIViewFocusWithoutWrapping: number;

declare const kHIViewGetsFocusOnClick: number;

declare const kHIViewIdlesWithTimer: number;

declare const kHIViewIgnoresClicks: number;

declare const kHIViewInactivePart: number;

declare const kHIViewIndicatorPart: number;

declare const kHIViewInvertsUpDownValueMeaning: number;

declare const kHIViewIsOpaque: number;

declare const kHIViewKindSignatureApple: number;

declare var kHIViewMenuContentID: ControlID;

declare const kHIViewNoPart: number;

declare const kHIViewOffscreenImageUseWindowBackingResolution: number;

declare const kHIViewOpaqueMetaPart: number;

declare const kHIViewSendCommandToUserFocus: number;

declare const kHIViewStructureMetaPart: number;

declare const kHIViewSupportsGhosting: number;

declare const kHIViewSupportsLiveFeedback: number;

declare const kHIViewSupportsRadioBehavior: number;

declare const kHIViewValidFeaturesForPanther: number;

declare var kHIViewWindowCloseBoxID: ControlID;

declare var kHIViewWindowCollapseBoxID: ControlID;

declare var kHIViewWindowContentID: ControlID;

declare var kHIViewWindowGrowBoxID: ControlID;

declare var kHIViewWindowTitleID: ControlID;

declare var kHIViewWindowToolbarButtonID: ControlID;

declare var kHIViewWindowToolbarID: ControlID;

declare var kHIViewWindowZoomBoxID: ControlID;

declare const kHIViewZOrderAbove: number;

declare const kHIViewZOrderBelow: number;

declare const kHIWindowBackingLocationDefault: number;

declare const kHIWindowBackingLocationMainMemory: number;

declare const kHIWindowBackingLocationVideoMemory: number;

declare const kHIWindowBehaviorStationary: number;

declare const kHIWindowBehaviorTransient: number;

declare const kHIWindowBitAsyncDrag: number;

declare const kHIWindowBitAutoCalibration: number;

declare const kHIWindowBitAutoViewDragTracking: number;

declare const kHIWindowBitCanBeVisibleWithoutLogin: number;

declare const kHIWindowBitCloseBox: number;

declare const kHIWindowBitCollapseBox: number;

declare const kHIWindowBitCompositing: number;

declare const kHIWindowBitDoesNotCycle: number;

declare const kHIWindowBitDoesNotHide: number;

declare const kHIWindowBitFrameworkScaled: number;

declare const kHIWindowBitFullScreenAuxiliary: number;

declare const kHIWindowBitFullScreenPrimary: number;

declare const kHIWindowBitHideOnFullScreen: number;

declare const kHIWindowBitHideOnSuspend: number;

declare const kHIWindowBitHighResolutionCapable: number;

declare const kHIWindowBitIgnoreClicks: number;

declare const kHIWindowBitInWindowMenu: number;

declare const kHIWindowBitLiveResize: number;

declare const kHIWindowBitNoActivates: number;

declare const kHIWindowBitNoConstrain: number;

declare const kHIWindowBitNoShadow: number;

declare const kHIWindowBitNoTexturedContentSeparator: number;

declare const kHIWindowBitNoTitleBar: number;

declare const kHIWindowBitNoUpdates: number;

declare const kHIWindowBitOpaqueForEvents: number;

declare const kHIWindowBitResizable: number;

declare const kHIWindowBitRoundBottomBarCorners: number;

declare const kHIWindowBitSideTitlebar: number;

declare const kHIWindowBitStandardHandler: number;

declare const kHIWindowBitTextured: number;

declare const kHIWindowBitTexturedSquareCorners: number;

declare const kHIWindowBitToolbarButton: number;

declare const kHIWindowBitUnifiedTitleAndToolbar: number;

declare const kHIWindowBitZoomBox: number;

declare const kHIWindowCanJoinAllSpaces: number;

declare const kHIWindowDepth32Bit: number;

declare const kHIWindowDepth64Bit: number;

declare const kHIWindowDepthFloat: number;

declare const kHIWindowDepthInvalid: number;

declare const kHIWindowDragPart: number;

declare const kHIWindowExposeHidden: number;

declare const kHIWindowIgnoreObscuringWindows: number;

declare const kHIWindowMenuCreator: number;

declare const kHIWindowMenuWindowTag: number;

declare const kHIWindowMoveToActiveSpace: number;

declare const kHIWindowScaleModeFrameworkScaled: number;

declare const kHIWindowScaleModeMagnified: number;

declare const kHIWindowScaleModeUnscaled: number;

declare const kHIWindowSharingNone: number;

declare const kHIWindowSharingReadOnly: number;

declare const kHIWindowSharingReadWrite: number;

declare const kHIWindowTitleBarPart: number;

declare const kHIWindowTitleProxyIconPart: number;

declare const kHIWindowVisibleInAllSpaces: number;

declare const kHMAbsoluteCenterAligned: number;

declare const kHMBottomLeftCorner: number;

declare const kHMBottomRightCorner: number;

declare const kHMBottomSide: number;

declare const kHMCFStringContent: number;

declare const kHMCFStringLocalizedContent: number;

declare const kHMContentNotProvided: number;

declare const kHMContentNotProvidedDontPropagate: number;

declare const kHMContentProvided: number;

declare const kHMDefaultSide: number;

declare const kHMDisposeContent: number;

declare const kHMHelpMenuID: number;

declare const kHMHideTagFade: number;

declare const kHMHideTagImmediately: number;

declare const kHMIllegalContentForMinimumState: number;

declare const kHMInsideBottomCenterAligned: number;

declare const kHMInsideBottomLeftCorner: number;

declare const kHMInsideBottomRightCorner: number;

declare const kHMInsideLeftCenterAligned: number;

declare const kHMInsideRightCenterAligned: number;

declare const kHMInsideTopCenterAligned: number;

declare const kHMInsideTopLeftCorner: number;

declare const kHMInsideTopRightCorner: number;

declare const kHMLeftBottomCorner: number;

declare const kHMLeftSide: number;

declare const kHMLeftTopCorner: number;

declare const kHMMaximumContentIndex: number;

declare const kHMMinimumContentIndex: number;

declare const kHMNoContent: number;

declare const kHMOutsideBottomCenterAligned: number;

declare const kHMOutsideBottomLeftAligned: number;

declare const kHMOutsideBottomRightAligned: number;

declare const kHMOutsideBottomScriptAligned: number;

declare const kHMOutsideLeftBottomAligned: number;

declare const kHMOutsideLeftCenterAligned: number;

declare const kHMOutsideLeftTopAligned: number;

declare const kHMOutsideRightBottomAligned: number;

declare const kHMOutsideRightCenterAligned: number;

declare const kHMOutsideRightTopAligned: number;

declare const kHMOutsideTopCenterAligned: number;

declare const kHMOutsideTopLeftAligned: number;

declare const kHMOutsideTopRightAligned: number;

declare const kHMOutsideTopScriptAligned: number;

declare const kHMPascalStrContent: number;

declare const kHMRightBottomCorner: number;

declare const kHMRightSide: number;

declare const kHMRightTopCorner: number;

declare const kHMStrResContent: number;

declare const kHMStringResContent: number;

declare const kHMSupplyContent: number;

declare const kHMTEHandleContent: number;

declare const kHMTextResContent: number;

declare const kHMTopLeftCorner: number;

declare const kHMTopRightCorner: number;

declare const kHMTopSide: number;

declare const kHelpCharCode: number;

declare const kHelpDialogItem: number;

declare const kHelpTagEventHandlerTag: number;

declare const kHelpWindowClass: number;

declare const kHierarchicalFontMenuOption: number;

declare const kHighLevelEvent: number;

declare const kHomeCharCode: number;

declare const kIBCarbonRuntimeCantFindNibFile: number;

declare const kIBCarbonRuntimeCantFindObject: number;

declare const kIBCarbonRuntimeObjectNotOfRequestedType: number;

declare const kIMJaTypingMethodKana: number;

declare const kIMJaTypingMethodProperty: number;

declare const kIMJaTypingMethodRoman: number;

declare const kIMKMouseTrackingMode: number;

declare const kIMKNearestBoundaryMode: number;

declare const kIconDialogItem: number;

declare const kInkInputMethodClass: number;

declare const kInsertHierarchicalMenu: number;

declare const kItemDisableBit: number;

declare const kKLGroupIdentifier: number;

declare const kKLIcon: number;

declare const kKLIdentifier: number;

declare const kKLKCHRData: number;

declare const kKLKCHRKind: number;

declare const kKLKCHRuchrKind: number;

declare const kKLKind: number;

declare const kKLLanguageCode: number;

declare const kKLLocalizedName: number;

declare const kKLName: number;

declare const kKLUSKeyboard: number;

declare const kKLuchrData: number;

declare const kKLuchrKind: number;

declare const kKeyboardANSI: number;

declare const kKeyboardISO: number;

declare const kKeyboardInputMethodClass: number;

declare const kKeyboardJIS: number;

declare const kKeyboardUnknown: number;

declare const kLeftArrowCharCode: number;

declare const kLineFeedCharCode: number;

declare const kListDefProcPtr: number;

declare const kListDefStandardIconType: number;

declare const kListDefStandardTextType: number;

declare const kListDefUserProcType: number;

declare const kMacHelpVersion: number;

declare const kMenuAppleLogoFilledGlyph: number;

declare const kMenuAppleLogoOutlineGlyph: number;

declare const kMenuAttrAutoDisable: number;

declare const kMenuAttrCondenseSeparators: number;

declare const kMenuAttrDoNotCacheImage: number;

declare const kMenuAttrDoNotUseUserCommandKeys: number;

declare const kMenuAttrExcludesMarkColumn: number;

declare const kMenuAttrHidden: number;

declare const kMenuAttrUsePencilGlyph: number;

declare const kMenuBlankGlyph: number;

declare const kMenuCGImageRefType: number;

declare const kMenuCalcItemMsg: number;

declare const kMenuCapsLockGlyph: number;

declare const kMenuCheckmarkGlyph: number;

declare const kMenuClearGlyph: number;

declare const kMenuColorIconType: number;

declare const kMenuCommandGlyph: number;

declare const kMenuContextCommandIDSearch: number;

declare const kMenuContextContextualMenu: number;

declare const kMenuContextDontUpdateEnabled: number;

declare const kMenuContextDontUpdateIcon: number;

declare const kMenuContextDontUpdateKey: number;

declare const kMenuContextDontUpdateText: number;

declare const kMenuContextInspection: number;

declare const kMenuContextKeyMatching: number;

declare const kMenuContextMenuBar: number;

declare const kMenuContextMenuBarTracking: number;

declare const kMenuContextMenuEnabling: number;

declare const kMenuContextPopUp: number;

declare const kMenuContextPopUpTracking: number;

declare const kMenuContextPullDown: number;

declare const kMenuContextSubmenu: number;

declare const kMenuContextualMenuGlyph: number;

declare const kMenuControlGlyph: number;

declare const kMenuControlISOGlyph: number;

declare const kMenuControlModifier: number;

declare const kMenuDefClassID: number;

declare const kMenuDefProcPtr: number;

declare const kMenuDeleteLeftGlyph: number;

declare const kMenuDeleteRightGlyph: number;

declare const kMenuDiamondGlyph: number;

declare const kMenuDisposeMsg: number;

declare const kMenuDownArrowGlyph: number;

declare const kMenuDownwardArrowDashedGlyph: number;

declare const kMenuDrawItemsMsg: number;

declare const kMenuDrawMsg: number;

declare const kMenuEisuGlyph: number;

declare const kMenuEjectGlyph: number;

declare const kMenuEnterGlyph: number;

declare const kMenuEscapeGlyph: number;

declare const kMenuEventDontCheckSubmenus: number;

declare const kMenuEventIncludeDisabledItems: number;

declare const kMenuEventQueryOnly: number;

declare const kMenuF10Glyph: number;

declare const kMenuF11Glyph: number;

declare const kMenuF12Glyph: number;

declare const kMenuF13Glyph: number;

declare const kMenuF14Glyph: number;

declare const kMenuF15Glyph: number;

declare const kMenuF16Glyph: number;

declare const kMenuF17Glyph: number;

declare const kMenuF18Glyph: number;

declare const kMenuF19Glyph: number;

declare const kMenuF1Glyph: number;

declare const kMenuF2Glyph: number;

declare const kMenuF3Glyph: number;

declare const kMenuF4Glyph: number;

declare const kMenuF5Glyph: number;

declare const kMenuF6Glyph: number;

declare const kMenuF7Glyph: number;

declare const kMenuF8Glyph: number;

declare const kMenuF9Glyph: number;

declare const kMenuFindItemMsg: number;

declare const kMenuHelpGlyph: number;

declare const kMenuHiliteItemMsg: number;

declare const kMenuIconRefType: number;

declare const kMenuIconResourceType: number;

declare const kMenuIconSuiteType: number;

declare const kMenuIconType: number;

declare const kMenuInitMsg: number;

declare const kMenuItemAttrAutoDisable: number;

declare const kMenuItemAttrAutoRepeat: number;

declare const kMenuItemAttrCustomDraw: number;

declare const kMenuItemAttrDisabled: number;

declare const kMenuItemAttrDynamic: number;

declare const kMenuItemAttrHidden: number;

declare const kMenuItemAttrIconDisabled: number;

declare const kMenuItemAttrIgnoreMeta: number;

declare const kMenuItemAttrIncludeInCmdKeyMatching: number;

declare const kMenuItemAttrNotPreviousAlternate: number;

declare const kMenuItemAttrSectionHeader: number;

declare const kMenuItemAttrSeparator: number;

declare const kMenuItemAttrSubmenuParentChoosable: number;

declare const kMenuItemAttrUpdateSingleItem: number;

declare const kMenuItemAttrUseVirtualKey: number;

declare const kMenuItemDataAllDataVersionOne: number;

declare const kMenuItemDataAllDataVersionThree: number;

declare const kMenuItemDataAllDataVersionTwo: number;

declare const kMenuItemDataAttributedText: number;

declare const kMenuItemDataAttributes: number;

declare const kMenuItemDataCFString: number;

declare const kMenuItemDataCmdKey: number;

declare const kMenuItemDataCmdKeyGlyph: number;

declare const kMenuItemDataCmdKeyModifiers: number;

declare const kMenuItemDataCmdVirtualKey: number;

declare const kMenuItemDataCommandID: number;

declare const kMenuItemDataEnabled: number;

declare const kMenuItemDataFont: number;

declare const kMenuItemDataFontID: number;

declare const kMenuItemDataIconEnabled: number;

declare const kMenuItemDataIconHandle: number;

declare const kMenuItemDataIconID: number;

declare const kMenuItemDataIndent: number;

declare const kMenuItemDataMark: number;

declare const kMenuItemDataProperties: number;

declare const kMenuItemDataRefcon: number;

declare const kMenuItemDataStyle: number;

declare const kMenuItemDataSubmenuHandle: number;

declare const kMenuItemDataSubmenuID: number;

declare const kMenuItemDataText: number;

declare const kMenuItemDataTextEncoding: number;

declare const kMenuKanaGlyph: number;

declare const kMenuLeftArrowDashedGlyph: number;

declare const kMenuLeftArrowGlyph: number;

declare const kMenuLeftDoubleQuotesJapaneseGlyph: number;

declare const kMenuNoCommandModifier: number;

declare const kMenuNoIcon: number;

declare const kMenuNoModifiers: number;

declare const kMenuNonmarkingReturnGlyph: number;

declare const kMenuNorthwestArrowGlyph: number;

declare const kMenuNullGlyph: number;

declare const kMenuOptionGlyph: number;

declare const kMenuOptionModifier: number;

declare const kMenuPageDownGlyph: number;

declare const kMenuPageUpGlyph: number;

declare const kMenuParagraphKoreanGlyph: number;

declare const kMenuPencilGlyph: number;

declare const kMenuPopUpMsg: number;

declare const kMenuPowerGlyph: number;

declare const kMenuPropertyPersistent: number;

declare const kMenuReturnGlyph: number;

declare const kMenuReturnR2LGlyph: number;

declare const kMenuRightArrowDashedGlyph: number;

declare const kMenuRightArrowGlyph: number;

declare const kMenuRightDoubleQuotesJapaneseGlyph: number;

declare const kMenuShiftGlyph: number;

declare const kMenuShiftModifier: number;

declare const kMenuShrinkIconType: number;

declare const kMenuSizeMsg: number;

declare const kMenuSmallIconType: number;

declare const kMenuSoutheastArrowGlyph: number;

declare const kMenuSpaceGlyph: number;

declare const kMenuStdMenuBarProc: number;

declare const kMenuStdMenuProc: number;

declare const kMenuSystemIconSelectorType: number;

declare const kMenuTabLeftGlyph: number;

declare const kMenuTabRightGlyph: number;

declare const kMenuThemeSavvyMsg: number;

declare const kMenuTrackingModeKeyboard: number;

declare const kMenuTrackingModeMouse: number;

declare const kMenuTrademarkJapaneseGlyph: number;

declare const kMenuUpArrowDashedGlyph: number;

declare const kMenuUpArrowGlyph: number;

declare const kModalDialogVariantCode: number;

declare const kModalWindowClass: number;

declare const kMouseParamsClickAndHold: number;

declare const kMouseParamsDragInitiation: number;

declare const kMouseParamsProxyIcon: number;

declare const kMouseParamsSticky: number;

declare const kMouseTrackingClientEvent: number;

declare const kMouseTrackingKeyModifiersChanged: number;

declare const kMouseTrackingMouseDown: number;

declare const kMouseTrackingMouseDragged: number;

declare const kMouseTrackingMouseEntered: number;

declare const kMouseTrackingMouseExited: number;

declare const kMouseTrackingMouseMoved: number;

declare const kMouseTrackingMousePressed: number;

declare const kMouseTrackingMouseReleased: number;

declare const kMouseTrackingMouseUp: number;

declare const kMouseTrackingScrollWheel: number;

declare const kMouseTrackingTimedOut: number;

declare const kMouseTrackingUserCancelled: number;

declare const kMouseUpOutOfSlop: number;

declare const kMovableAlertVariantCode: number;

declare const kMovableAlertWindowClass: number;

declare const kMovableModalDialogVariantCode: number;

declare const kMovableModalWindowClass: number;

declare const kNeutralScript: number;

declare const kNextWindowGroup: number;

declare const kNonBreakingSpaceCharCode: number;

declare const kNoteIcon: number;

declare const kNullCharCode: number;

declare const kNumberCtlCTabEntries: number;

declare const kOCRInputMethodClass: number;

declare const kOSACanGetSource: number;

declare const kOSAComponentType: number;

declare const kOSADontUsePhac: number;

declare const kOSAErrorApp: number;

declare const kOSAErrorArgs: number;

declare const kOSAErrorBriefMessage: number;

declare const kOSAErrorExpectedType: number;

declare const kOSAErrorMessage: number;

declare const kOSAErrorNumber: number;

declare const kOSAErrorOffendingObject: number;

declare const kOSAErrorPartialResult: number;

declare const kOSAErrorRange: number;

declare const kOSAFileType: number;

declare const kOSAGenericScriptingComponentSubtype: number;

declare const kOSAModeAlwaysInteract: number;

declare const kOSAModeAugmentContext: number;

declare const kOSAModeCanInteract: number;

declare const kOSAModeCantSwitchLayer: number;

declare const kOSAModeCompileIntoContext: number;

declare const kOSAModeDispatchToDirectObject: number;

declare const kOSAModeDisplayForHumans: number;

declare const kOSAModeDoRecord: number;

declare const kOSAModeDontDefine: number;

declare const kOSAModeDontGetDataForArguments: number;

declare const kOSAModeDontReconnect: number;

declare const kOSAModeDontStoreParent: number;

declare const kOSAModeFullyQualifyDescriptors: number;

declare const kOSAModeNeverInteract: number;

declare const kOSAModeNull: number;

declare const kOSAModePreventGetSource: number;

declare const kOSANoDispatch: number;

declare const kOSANullMode: number;

declare const kOSANullScript: number;

declare const kOSARecordedText: number;

declare const kOSAScriptBestType: number;

declare const kOSAScriptIsModified: number;

declare const kOSAScriptIsTypeCompiledScript: number;

declare const kOSAScriptIsTypeScriptContext: number;

declare const kOSAScriptIsTypeScriptValue: number;

declare const kOSAScriptResourceType: number;

declare const kOSASelectAvailableDialectCodeList: number;

declare const kOSASelectAvailableDialects: number;

declare const kOSASelectCoerceFromDesc: number;

declare const kOSASelectCoerceToDesc: number;

declare const kOSASelectCompile: number;

declare const kOSASelectCompileExecute: number;

declare const kOSASelectComponentSpecificStart: number;

declare const kOSASelectCopyDisplayString: number;

declare const kOSASelectCopyID: number;

declare const kOSASelectCopyScript: number;

declare const kOSASelectCopySourceString: number;

declare const kOSASelectDisplay: number;

declare const kOSASelectDispose: number;

declare const kOSASelectDoEvent: number;

declare const kOSASelectDoScript: number;

declare const kOSASelectExecute: number;

declare const kOSASelectExecuteEvent: number;

declare const kOSASelectGetActiveProc: number;

declare const kOSASelectGetCreateProc: number;

declare const kOSASelectGetCurrentDialect: number;

declare const kOSASelectGetDialectInfo: number;

declare const kOSASelectGetResumeDispatchProc: number;

declare const kOSASelectGetScriptInfo: number;

declare const kOSASelectGetSendProc: number;

declare const kOSASelectGetSource: number;

declare const kOSASelectLoad: number;

declare const kOSASelectLoadExecute: number;

declare const kOSASelectMakeContext: number;

declare const kOSASelectScriptError: number;

declare const kOSASelectScriptingComponentName: number;

declare const kOSASelectSetActiveProc: number;

declare const kOSASelectSetCreateProc: number;

declare const kOSASelectSetCurrentDialect: number;

declare const kOSASelectSetDefaultTarget: number;

declare const kOSASelectSetResumeDispatchProc: number;

declare const kOSASelectSetScriptInfo: number;

declare const kOSASelectSetSendProc: number;

declare const kOSASelectStartRecording: number;

declare const kOSASelectStopRecording: number;

declare const kOSASelectStore: number;

declare const kOSASuite: number;

declare const kOSASupportsAECoercion: number;

declare const kOSASupportsAESending: number;

declare const kOSASupportsCompiling: number;

declare const kOSASupportsConvenience: number;

declare const kOSASupportsDialects: number;

declare const kOSASupportsEventHandling: number;

declare const kOSASupportsGetSource: number;

declare const kOSASupportsRecording: number;

declare const kOSAUseStandardDispatch: number;

declare const kOptionUnicode: number;

declare const kOutputTextInUnicodeEncodingBit: number;

declare const kOutputTextInUnicodeEncodingMask: number;

declare const kOverlayWindowClass: number;

declare const kPageDownCharCode: number;

declare const kPageUpCharCode: number;

declare const kPencilLeftUnicode: number;

declare const kPencilUnicode: number;

declare const kPictureDialogItem: number;

declare const kPlainDialogVariantCode: number;

declare const kPlainWindowClass: number;

declare const kPreviousWindowGroup: number;

declare const kPublicThemeFontCount: number;

declare const kRadioButtonDialogItem: number;

declare const kResourceControlDialogItem: number;

declare const kReturnCharCode: number;

declare const kRightArrowCharCode: number;

declare const kRoundWindowDefinition: number;

declare const kSRAlreadyFinished: number;

declare const kSRAlreadyListening: number;

declare const kSRAlreadyReleased: number;

declare const kSRAutoFinishingParam: number;

declare const kSRBadParameter: number;

declare const kSRBadSelector: number;

declare const kSRBlockBackground: number;

declare const kSRBlockModally: number;

declare const kSRBufferTooSmall: number;

declare const kSRCallBackParam: number;

declare const kSRCancelOnSoundOut: number;

declare const kSRCanned22kHzSpeechSource: number;

declare const kSRCantAdd: number;

declare const kSRCantGetProperty: number;

declare const kSRCantReadLanguageObject: number;

declare const kSRCantSetDuringRecognition: number;

declare const kSRCantSetProperty: number;

declare const kSRCleanupOnClientExit: number;

declare const kSRComponentNotFound: number;

declare const kSRDefaultRecognitionSystemID: number;

declare const kSRDefaultRejectionLevel: number;

declare const kSRDefaultSpeechSource: number;

declare const kSREnabled: number;

declare const kSRExpansionTooDeep: number;

declare const kSRFeedbackAndListeningModes: number;

declare const kSRFeedbackNotAvail: number;

declare const kSRForegroundOnly: number;

declare const kSRHasFeedbackHasListenModes: number;

declare const kSRHasNoSubItems: number;

declare const kSRIdleRecognizer: number;

declare const kSRInternalError: number;

declare const kSRKeyExpected: number;

declare const kSRKeyWord: number;

declare const kSRLMObjType: number;

declare const kSRLanguageModelFormat: number;

declare const kSRLanguageModelTooBig: number;

declare const kSRLanguageModelType: number;

declare const kSRListenKeyCombo: number;

declare const kSRListenKeyMode: number;

declare const kSRListenKeyName: number;

declare const kSRLiveDesktopSpeechSource: number;

declare const kSRModelMismatch: number;

declare const kSRMustCancelSearch: number;

declare const kSRNoClientLanguageModel: number;

declare const kSRNoFeedbackHasListenModes: number;

declare const kSRNoFeedbackNoListenModes: number;

declare const kSRNoPendingUtterances: number;

declare const kSRNotARecSystem: number;

declare const kSRNotASpeechObject: number;

declare const kSRNotAvailable: number;

declare const kSRNotFinishedWithRejection: number;

declare const kSRNotImplementedYet: number;

declare const kSRNotListeningState: number;

declare const kSRNotificationParam: number;

declare const kSRNotifyRecognitionBeginning: number;

declare const kSRNotifyRecognitionDone: number;

declare const kSROptional: number;

declare const kSROtherRecAlreadyModal: number;

declare const kSROutOfMemory: number;

declare const kSRParamOutOfRange: number;

declare const kSRPathFormat: number;

declare const kSRPathType: number;

declare const kSRPendingSearch: number;

declare const kSRPhraseFormat: number;

declare const kSRPhraseType: number;

declare const kSRReadAudioFSSpec: number;

declare const kSRReadAudioURL: number;

declare const kSRRecognitionCanceled: number;

declare const kSRRecognitionDone: number;

declare const kSRRefCon: number;

declare const kSRRejectable: number;

declare const kSRRejectedWord: number;

declare const kSRRejectionLevel: number;

declare const kSRRepeatable: number;

declare const kSRSearchInProgress: number;

declare const kSRSearchStatusParam: number;

declare const kSRSearchWaitForAllClients: number;

declare const kSRSndInSourceDisconnected: number;

declare const kSRSoundInVolume: number;

declare const kSRSpeedVsAccuracyParam: number;

declare const kSRSpelling: number;

declare const kSRSubItemNotFound: number;

declare const kSRTEXTFormat: number;

declare const kSRTooManyElements: number;

declare const kSRUsePushToTalk: number;

declare const kSRUseToggleListen: number;

declare const kSRWantsAutoFBGestures: number;

declare const kSRWantsResultTextDrawn: number;

declare const kSRWordNotFound: number;

declare const kSRWordType: number;

declare const kScrapClearNamedScrap: number;

declare const kScrapFlavorMaskNone: number;

declare const kScrapFlavorMaskSenderOnly: number;

declare const kScrapFlavorMaskTranslated: number;

declare const kScrapFlavorSizeUnknown: number;

declare const kScrapFlavorTypeMovie: number;

declare const kScrapFlavorTypePicture: number;

declare const kScrapFlavorTypeSound: number;

declare const kScrapFlavorTypeText: number;

declare const kScrapFlavorTypeTextStyle: number;

declare const kScrapFlavorTypeUTF16External: number;

declare const kScrapFlavorTypeUnicode: number;

declare const kScrapFlavorTypeUnicodeStyle: number;

declare const kScrapGetNamedScrap: number;

declare const kScrapReservedFlavorType: number;

declare const kScrollBarsAlwaysActive: number;

declare const kScrollBarsSyncWithFocus: number;

declare const kScrollWindowEraseToPortBackground: number;

declare const kScrollWindowInvalidate: number;

declare const kScrollWindowNoOptions: number;

declare const kShadowDialogVariantCode: number;

declare const kSheetAlertWindowClass: number;

declare const kSheetWindowClass: number;

declare const kShiftUnicode: number;

declare const kSideFloaterVariantCode: number;

declare const kSimpleWindowClass: number;

declare const kSpaceCharCode: number;

declare const kSpeechInputMethodClass: number;

declare const kStandardWindowDefinition: number;

declare const kStaticTextDialogItem: number;

declare const kStdAlertDoNotAnimateOnCancel: number;

declare const kStdAlertDoNotAnimateOnDefault: number;

declare const kStdAlertDoNotAnimateOnOther: number;

declare const kStdAlertDoNotCloseOnHelp: number;

declare const kStdAlertDoNotDisposeSheet: number;

declare const kStdCFStringAlertVersionOne: number;

declare const kStdCFStringAlertVersionTwo: number;

declare const kStdCancelItemIndex: number;

declare const kStdOkItemIndex: number;

declare const kStopIcon: number;

declare const kStoredBasicWindowDescriptionID: number;

declare const kStoredWindowPascalTitleID: number;

declare const kStoredWindowSystemTag: number;

declare const kStoredWindowTitleCFStringID: number;

declare const kSupportsFileTranslation: number;

declare const kSupportsScrapTranslation: number;

declare var kTISCategoryInkInputSource: string;

declare var kTISCategoryKeyboardInputSource: string;

declare var kTISCategoryPaletteInputSource: string;

declare var kTISNotifyEnabledKeyboardInputSourcesChanged: string;

declare var kTISNotifySelectedKeyboardInputSourceChanged: string;

declare var kTISPropertyBundleID: string;

declare var kTISPropertyIconImageURL: string;

declare var kTISPropertyIconRef: string;

declare var kTISPropertyInputModeID: string;

declare var kTISPropertyInputSourceCategory: string;

declare var kTISPropertyInputSourceID: string;

declare var kTISPropertyInputSourceIsASCIICapable: string;

declare var kTISPropertyInputSourceIsEnableCapable: string;

declare var kTISPropertyInputSourceIsEnabled: string;

declare var kTISPropertyInputSourceIsSelectCapable: string;

declare var kTISPropertyInputSourceIsSelected: string;

declare var kTISPropertyInputSourceLanguages: string;

declare var kTISPropertyInputSourceType: string;

declare var kTISPropertyLocalizedName: string;

declare var kTISPropertyUnicodeKeyLayoutData: string;

declare var kTISTypeCharacterPalette: string;

declare var kTISTypeInk: string;

declare var kTISTypeKeyboardInputMethodModeEnabled: string;

declare var kTISTypeKeyboardInputMethodWithoutModes: string;

declare var kTISTypeKeyboardInputMode: string;

declare var kTISTypeKeyboardLayout: string;

declare var kTISTypeKeyboardViewer: string;

declare const kTSM15Version: number;

declare const kTSM20Version: number;

declare const kTSM22Version: number;

declare const kTSM23Version: number;

declare const kTSM24Version: number;

declare const kTSMDocAccessEffectiveRangeAttribute: number;

declare const kTSMDocAccessEffectiveRangeAttributeBit: number;

declare const kTSMDocAccessFontSizeAttribute: number;

declare const kTSMDocAccessFontSizeAttributeBit: number;

declare const kTSMDocumentEnabledInputSourcesPropertyTag: number;

declare const kTSMDocumentInputModePropertyTag: number;

declare const kTSMDocumentInputSourceOverridePropertyTag: number;

declare const kTSMDocumentPropertySupportGlyphInfo: number;

declare const kTSMDocumentPropertyUnicodeInputWindow: number;

declare const kTSMDocumentRefconPropertyTag: number;

declare const kTSMDocumentSupportDocumentAccessPropertyTag: number;

declare const kTSMDocumentSupportGlyphInfoPropertyTag: number;

declare const kTSMDocumentTSMTEPropertyTag: number;

declare const kTSMDocumentTextServicePropertyTag: number;

declare const kTSMDocumentUnicodeInputWindowPropertyTag: number;

declare const kTSMDocumentUnicodePropertyTag: number;

declare const kTSMDocumentUseFloatingWindowPropertyTag: number;

declare const kTSMDocumentWindowLevelPropertyTag: number;

declare const kTSMTEDocumentInterfaceType: number;

declare const kTSMVersion: number;

declare const kTXNAIFFFile: number;

declare const kTXNATSUIFontFeaturesAttribute: number;

declare const kTXNATSUIFontVariationsAttribute: number;

declare const kTXNATSUIStyle: number;

declare const kTXNATSUIStyleContinuousBit: number;

declare const kTXNATSUIStyleContinuousMask: number;

declare const kTXNATSUIStyleSize: number;

declare var kTXNActionAlignCenter: string;

declare var kTXNActionAlignLeft: string;

declare var kTXNActionAlignRight: string;

declare var kTXNActionChangeColor: string;

declare var kTXNActionChangeFont: string;

declare var kTXNActionChangeFontFeature: string;

declare var kTXNActionChangeFontVariation: string;

declare var kTXNActionChangeGlyphVariation: string;

declare var kTXNActionChangeSize: string;

declare var kTXNActionChangeStyle: string;

declare var kTXNActionChangeTextPosition: string;

declare var kTXNActionClear: string;

declare var kTXNActionCountOfAllChanges: string;

declare var kTXNActionCountOfStyleChanges: string;

declare var kTXNActionCountOfTextChanges: string;

declare var kTXNActionCut: string;

declare var kTXNActionDrop: string;

declare var kTXNActionMove: string;

declare var kTXNActionPaste: string;

declare var kTXNActionTyping: string;

declare var kTXNActionUndoLast: string;

declare const kTXNAlignCenterAction: number;

declare const kTXNAlignLeftAction: number;

declare const kTXNAlignRightAction: number;

declare const kTXNAllCountMask: number;

declare const kTXNAlwaysWrapAtViewEdgeBit: number;

declare const kTXNAlwaysWrapAtViewEdgeMask: number;

declare const kTXNAutoIndentOff: number;

declare const kTXNAutoIndentOn: number;

declare const kTXNAutoIndentStateTag: number;

declare const kTXNAutoScrollBehaviorTag: number;

declare const kTXNAutoScrollInsertionIntoView: number;

declare const kTXNAutoScrollNever: number;

declare const kTXNAutoScrollWhenInsertionVisible: number;

declare const kTXNAutoWrap: number;

declare const kTXNBackgroundTypeRGB: number;

declare const kTXNCenter: number;

declare const kTXNCenterTab: number;

declare const kTXNChangeFontAction: number;

declare const kTXNChangeFontColorAction: number;

declare const kTXNChangeFontSizeAction: number;

declare const kTXNChangeStyleAction: number;

declare const kTXNClearAction: number;

declare const kTXNClearTheseFontFeatures: number;

declare const kTXNClearThisControl: number;

declare const kTXNColorContinuousBit: number;

declare const kTXNColorContinuousMask: number;

declare const kTXNCutAction: number;

declare var kTXNDataOptionCharacterEncodingKey: string;

declare var kTXNDataOptionDocumentTypeKey: string;

declare const kTXNDecrementTypeSize: number;

declare const kTXNDestinationRectKey: number;

declare const kTXNDisableDragAndDrop: number;

declare const kTXNDisableDragAndDropBit: number;

declare const kTXNDisableDragAndDropMask: number;

declare const kTXNDisableDragAndDropTag: number;

declare const kTXNDisableLayoutAndDraw: number;

declare const kTXNDisableLayoutAndDrawTag: number;

declare const kTXNDisabledFunctionalityErr: number;

declare const kTXNDoFontSubstitution: number;

declare const kTXNDoFontSubstitutionBit: number;

declare const kTXNDoFontSubstitutionMask: number;

declare const kTXNDoNotInstallDragProcsBit: number;

declare const kTXNDoNotInstallDragProcsMask: number;

declare var kTXNDocumentAttributeAuthorKey: string;

declare var kTXNDocumentAttributeCommentKey: string;

declare var kTXNDocumentAttributeCompanyNameKey: string;

declare var kTXNDocumentAttributeCopyrightKey: string;

declare var kTXNDocumentAttributeCreationTimeKey: string;

declare var kTXNDocumentAttributeEditorKey: string;

declare var kTXNDocumentAttributeKeywordsKey: string;

declare var kTXNDocumentAttributeModificationTimeKey: string;

declare var kTXNDocumentAttributeSubjectKey: string;

declare var kTXNDocumentAttributeTitleKey: string;

declare const kTXNDontCareTypeSize: number;

declare const kTXNDontCareTypeStyle: number;

declare const kTXNDontDrawCaretWhenInactive: number;

declare const kTXNDontDrawCaretWhenInactiveBit: number;

declare const kTXNDontDrawCaretWhenInactiveMask: number;

declare const kTXNDontDrawSelectionWhenInactive: number;

declare const kTXNDontDrawSelectionWhenInactiveBit: number;

declare const kTXNDontDrawSelectionWhenInactiveMask: number;

declare const kTXNDrawCaretWhenInactive: number;

declare const kTXNDrawCaretWhenInactiveTag: number;

declare const kTXNDrawGrowIconBit: number;

declare const kTXNDrawGrowIconMask: number;

declare const kTXNDrawItemAllMask: number;

declare const kTXNDrawItemScrollbarsBit: number;

declare const kTXNDrawItemScrollbarsMask: number;

declare const kTXNDrawItemTextAndSelectionBit: number;

declare const kTXNDrawItemTextAndSelectionMask: number;

declare const kTXNDrawItemTextBit: number;

declare const kTXNDrawItemTextMask: number;

declare const kTXNDrawSelectionWhenInactive: number;

declare const kTXNDrawSelectionWhenInactiveTag: number;

declare const kTXNDropAction: number;

declare const kTXNEnableDragAndDrop: number;

declare const kTXNEnableLayoutAndDraw: number;

declare const kTXNEndOffset: number;

declare const kTXNEntireWordBit: number;

declare const kTXNEntireWordMask: number;

declare const kTXNFlattenMoviesTag: number;

declare const kTXNFlushDefault: number;

declare const kTXNFlushLeft: number;

declare const kTXNFlushRight: number;

declare const kTXNFontContinuousBit: number;

declare const kTXNFontContinuousMask: number;

declare const kTXNFontFeatureAction: number;

declare const kTXNFontSizeAttributeSize: number;

declare const kTXNFontVariationAction: number;

declare const kTXNForceFullJust: number;

declare const kTXNFullJust: number;

declare const kTXNHorizontal: number;

declare const kTXNHorizontalScrollBarRectKey: number;

declare const kTXNIOPrivilegesTag: number;

declare const kTXNIgnoreCaseBit: number;

declare const kTXNIgnoreCaseMask: number;

declare const kTXNImageWithQDBit: number;

declare const kTXNImageWithQDMask: number;

declare const kTXNIncrementTypeSize: number;

declare const kTXNInlineStateTag: number;

declare const kTXNJustificationTag: number;

declare const kTXNLeftTab: number;

declare const kTXNLeftToRight: number;

declare const kTXNLineDirectionTag: number;

declare const kTXNLinkNotPressed: number;

declare const kTXNLinkTracking: number;

declare const kTXNLinkWasPressed: number;

declare var kTXNMLTEDocumentType: string;

declare const kTXNMacOSEncoding: number;

declare const kTXNMarginsTag: number;

declare const kTXNMonostyledTextBit: number;

declare const kTXNMonostyledTextMask: number;

declare const kTXNMoveAction: number;

declare const kTXNMultipleFrameType: number;

declare const kTXNMultipleStylesPerTextDocumentResType: number;

declare const kTXNNoAppleEventHandlersBit: number;

declare const kTXNNoAppleEventHandlersMask: number;

declare const kTXNNoAutoWrap: number;

declare const kTXNNoFontVariations: number;

declare const kTXNNoSelectionBit: number;

declare const kTXNNoSelectionMask: number;

declare const kTXNNoTSMEverBit: number;

declare const kTXNNoTSMEverMask: number;

declare const kTXNNoUserIOTag: number;

declare const kTXNOperationNotAllowedErr: number;

declare const kTXNPageFrameType: number;

declare const kTXNPasteAction: number;

declare var kTXNPlainTextDocumentType: string;

declare const kTXNQDFontColorAttribute: number;

declare const kTXNQDFontColorAttributeSize: number;

declare const kTXNQDFontFamilyIDAttribute: number;

declare const kTXNQDFontFamilyIDAttributeSize: number;

declare const kTXNQDFontNameAttribute: number;

declare const kTXNQDFontNameAttributeSize: number;

declare const kTXNQDFontSizeAttribute: number;

declare const kTXNQDFontSizeAttributeSize: number;

declare const kTXNQDFontStyleAttribute: number;

declare const kTXNQDFontStyleAttributeSize: number;

declare var kTXNQuickTimeDocumentType: string;

declare var kTXNRTFDocumentType: string;

declare const kTXNReadOnly: number;

declare const kTXNReadOnlyBit: number;

declare const kTXNReadOnlyMask: number;

declare const kTXNReadWrite: number;

declare const kTXNRefConTag: number;

declare const kTXNRestartAppleEventHandlersBit: number;

declare const kTXNRestartAppleEventHandlersMask: number;

declare const kTXNRichTextFormatData: number;

declare const kTXNRightTab: number;

declare const kTXNRightToLeft: number;

declare const kTXNRunCountBit: number;

declare const kTXNRunCountMask: number;

declare const kTXNSaveStylesAsSTYLResourceBit: number;

declare const kTXNSaveStylesAsSTYLResourceMask: number;

declare const kTXNScrollUnitsInLines: number;

declare const kTXNScrollUnitsInPixels: number;

declare const kTXNScrollUnitsInViewRects: number;

declare const kTXNSelectionOff: number;

declare const kTXNSelectionOn: number;

declare const kTXNSelectionStateTag: number;

declare const kTXNShowEnd: number;

declare const kTXNShowStart: number;

declare const kTXNShowWindowBit: number;

declare const kTXNShowWindowMask: number;

declare const kTXNSingleLevelUndoTag: number;

declare const kTXNSingleLineOnlyBit: number;

declare const kTXNSingleLineOnlyMask: number;

declare const kTXNSingleStylePerTextDocumentResType: number;

declare const kTXNSizeContinuousBit: number;

declare const kTXNSizeContinuousMask: number;

declare const kTXNStartOffset: number;

declare const kTXNStyleContinuousBit: number;

declare const kTXNStyleContinuousMask: number;

declare const kTXNSupportEditCommandProcessing: number;

declare const kTXNSupportEditCommandUpdating: number;

declare const kTXNSupportFontCommandProcessing: number;

declare const kTXNSupportFontCommandUpdating: number;

declare const kTXNSupportSpellCheckCommandProcessing: number;

declare const kTXNSupportSpellCheckCommandUpdating: number;

declare const kTXNSystemDefaultEncoding: number;

declare const kTXNTabSettingsTag: number;

declare const kTXNTextData: number;

declare const kTXNTextEditStyleFrameType: number;

declare const kTXNTextEncodingAttribute: number;

declare const kTXNTextEncodingAttributeSize: number;

declare const kTXNTextFile: number;

declare const kTXNTextInputCountBit: number;

declare const kTXNTextInputCountMask: number;

declare const kTXNTextRectKey: number;

declare const kTXNTextensionFile: number;

declare const kTXNTypingAction: number;

declare const kTXNURLAttribute: number;

declare const kTXNUndoLastAction: number;

declare const kTXNUnicodeEncoding: number;

declare const kTXNUnicodeTextData: number;

declare const kTXNUnicodeTextFile: number;

declare const kTXNUseBottomline: number;

declare const kTXNUseCarbonEvents: number;

declare const kTXNUseCurrentSelection: number;

declare const kTXNUseEncodingWordRulesBit: number;

declare const kTXNUseEncodingWordRulesMask: number;

declare const kTXNUseInline: number;

declare const kTXNUseQDforImagingBit: number;

declare const kTXNUseQDforImagingMask: number;

declare const kTXNUseScriptDefaultValue: number;

declare const kTXNVertical: number;

declare const kTXNVerticalScrollBarRectKey: number;

declare const kTXNViewRectKey: number;

declare const kTXNVisibilityTag: number;

declare const kTXNWantHScrollBarBit: number;

declare const kTXNWantHScrollBarMask: number;

declare const kTXNWantVScrollBarBit: number;

declare const kTXNWantVScrollBarMask: number;

declare const kTXNWillDefaultToATSUIBit: number;

declare const kTXNWillDefaultToATSUIMask: number;

declare const kTXNWillDefaultToCarbonEventBit: number;

declare const kTXNWillDefaultToCarbonEventMask: number;

declare const kTXNWordWrapStateTag: number;

declare const kTabCharCode: number;

declare const kTextService: number;

declare const kTextServiceDocumentInterfaceType: number;

declare const kTextServiceInputModePropertyTag: number;

declare const kTextServiceJaTypingMethodPropertyTag: number;

declare const kThemeActiveAlertBackgroundBrush: number;

declare const kThemeActiveAlertTextColor: number;

declare const kThemeActiveBevelButtonTextColor: number;

declare const kThemeActiveDialogBackgroundBrush: number;

declare const kThemeActiveDialogTextColor: number;

declare const kThemeActiveDocumentWindowTitleTextColor: number;

declare const kThemeActiveMenuItemTextColor: number;

declare const kThemeActiveModelessDialogBackgroundBrush: number;

declare const kThemeActiveModelessDialogTextColor: number;

declare const kThemeActiveMovableModalWindowTitleTextColor: number;

declare const kThemeActivePlacardTextColor: number;

declare const kThemeActivePopupArrowBrush: number;

declare const kThemeActivePopupButtonTextColor: number;

declare const kThemeActivePopupLabelTextColor: number;

declare const kThemeActivePopupWindowTitleColor: number;

declare const kThemeActivePushButtonTextColor: number;

declare const kThemeActiveRootMenuTextColor: number;

declare const kThemeActiveScrollBarDelimiterBrush: number;

declare const kThemeActiveUtilityWindowBackgroundBrush: number;

declare const kThemeActiveUtilityWindowTitleTextColor: number;

declare const kThemeActiveWindowHeaderTextColor: number;

declare const kThemeAdornmentArrowDoubleArrow: number;

declare const kThemeAdornmentArrowDownArrow: number;

declare const kThemeAdornmentArrowLeftArrow: number;

declare const kThemeAdornmentArrowRightArrow: number;

declare const kThemeAdornmentArrowUpArrow: number;

declare const kThemeAdornmentDefault: number;

declare const kThemeAdornmentDrawIndicatorOnly: number;

declare const kThemeAdornmentFocus: number;

declare const kThemeAdornmentHeaderButtonLeftNeighborSelected: number;

declare const kThemeAdornmentHeaderButtonNoShadow: number;

declare const kThemeAdornmentHeaderButtonNoSortArrow: number;

declare const kThemeAdornmentHeaderButtonRightNeighborSelected: number;

declare const kThemeAdornmentHeaderButtonShadowOnly: number;

declare const kThemeAdornmentHeaderButtonSortUp: number;

declare const kThemeAdornmentHeaderMenuButton: number;

declare const kThemeAdornmentNoShadow: number;

declare const kThemeAdornmentNone: number;

declare const kThemeAdornmentRightToLeft: number;

declare const kThemeAdornmentShadowOnly: number;

declare const kThemeAlertHeaderFont: number;

declare const kThemeAlertWindow: number;

declare const kThemeAliasArrowCursor: number;

declare const kThemeAppearanceFileNameTag: number;

declare const kThemeAppleGuideCoachmarkBrush: number;

declare const kThemeApplicationFont: number;

declare const kThemeArrow3pt: number;

declare const kThemeArrow5pt: number;

declare const kThemeArrow7pt: number;

declare const kThemeArrow9pt: number;

declare const kThemeArrowButton: number;

declare const kThemeArrowButtonMini: number;

declare const kThemeArrowButtonSmall: number;

declare const kThemeArrowCursor: number;

declare const kThemeArrowDown: number;

declare const kThemeArrowLeft: number;

declare const kThemeArrowRight: number;

declare const kThemeArrowUp: number;

declare const kThemeBackgroundListViewWindowHeader: number;

declare const kThemeBackgroundMetal: number;

declare const kThemeBackgroundPlacard: number;

declare const kThemeBackgroundSecondaryGroupBox: number;

declare const kThemeBackgroundTabPane: number;

declare const kThemeBackgroundWindowHeader: number;

declare const kThemeBevelButton: number;

declare const kThemeBevelButtonInset: number;

declare const kThemeBevelButtonLarge: number;

declare const kThemeBevelButtonMedium: number;

declare const kThemeBevelButtonSmall: number;

declare const kThemeBottomInsideArrowPressed: number;

declare const kThemeBottomOutsideArrowPressed: number;

declare const kThemeBottomTrackPressed: number;

declare const kThemeBrushActiveAreaFill: number;

declare const kThemeBrushAlertBackgroundActive: number;

declare const kThemeBrushAlertBackgroundInactive: number;

declare const kThemeBrushAlternatePrimaryHighlightColor: number;

declare const kThemeBrushAppleGuideCoachmark: number;

declare const kThemeBrushBevelActiveDark: number;

declare const kThemeBrushBevelActiveLight: number;

declare const kThemeBrushBevelInactiveDark: number;

declare const kThemeBrushBevelInactiveLight: number;

declare const kThemeBrushBlack: number;

declare const kThemeBrushButtonActiveDarkHighlight: number;

declare const kThemeBrushButtonActiveDarkShadow: number;

declare const kThemeBrushButtonActiveLightHighlight: number;

declare const kThemeBrushButtonActiveLightShadow: number;

declare const kThemeBrushButtonFaceActive: number;

declare const kThemeBrushButtonFaceInactive: number;

declare const kThemeBrushButtonFacePressed: number;

declare const kThemeBrushButtonFrameActive: number;

declare const kThemeBrushButtonFrameInactive: number;

declare const kThemeBrushButtonInactiveDarkHighlight: number;

declare const kThemeBrushButtonInactiveDarkShadow: number;

declare const kThemeBrushButtonInactiveLightHighlight: number;

declare const kThemeBrushButtonInactiveLightShadow: number;

declare const kThemeBrushButtonPressedDarkHighlight: number;

declare const kThemeBrushButtonPressedDarkShadow: number;

declare const kThemeBrushButtonPressedLightHighlight: number;

declare const kThemeBrushButtonPressedLightShadow: number;

declare const kThemeBrushChasingArrows: number;

declare const kThemeBrushDialogBackgroundActive: number;

declare const kThemeBrushDialogBackgroundInactive: number;

declare const kThemeBrushDocumentWindowBackground: number;

declare const kThemeBrushDragHilite: number;

declare const kThemeBrushDrawerBackground: number;

declare const kThemeBrushFinderWindowBackground: number;

declare const kThemeBrushFocusHighlight: number;

declare const kThemeBrushIconLabelBackground: number;

declare const kThemeBrushIconLabelBackgroundSelected: number;

declare const kThemeBrushListViewBackground: number;

declare const kThemeBrushListViewColumnDivider: number;

declare const kThemeBrushListViewEvenRowBackground: number;

declare const kThemeBrushListViewOddRowBackground: number;

declare const kThemeBrushListViewSeparator: number;

declare const kThemeBrushListViewSortColumnBackground: number;

declare const kThemeBrushMenuBackground: number;

declare const kThemeBrushMenuBackgroundSelected: number;

declare const kThemeBrushModelessDialogBackgroundActive: number;

declare const kThemeBrushModelessDialogBackgroundInactive: number;

declare const kThemeBrushMovableModalBackground: number;

declare const kThemeBrushNotificationWindowBackground: number;

declare const kThemeBrushPassiveAreaFill: number;

declare const kThemeBrushPopupArrowActive: number;

declare const kThemeBrushPopupArrowInactive: number;

declare const kThemeBrushPopupArrowPressed: number;

declare const kThemeBrushPrimaryHighlightColor: number;

declare const kThemeBrushScrollBarDelimiterActive: number;

declare const kThemeBrushScrollBarDelimiterInactive: number;

declare const kThemeBrushSecondaryHighlightColor: number;

declare const kThemeBrushSheetBackground: number;

declare const kThemeBrushSheetBackgroundOpaque: number;

declare const kThemeBrushSheetBackgroundTransparent: number;

declare const kThemeBrushStaticAreaFill: number;

declare const kThemeBrushToolbarBackground: number;

declare const kThemeBrushUtilityWindowBackgroundActive: number;

declare const kThemeBrushUtilityWindowBackgroundInactive: number;

declare const kThemeBrushWhite: number;

declare const kThemeButtonMixed: number;

declare const kThemeButtonOff: number;

declare const kThemeButtonOn: number;

declare const kThemeChasingArrowsBrush: number;

declare const kThemeCheckBox: number;

declare const kThemeCheckBoxCheckMark: number;

declare const kThemeCheckBoxClassicX: number;

declare const kThemeCheckBoxMini: number;

declare const kThemeCheckBoxSmall: number;

declare const kThemeClosedHandCursor: number;

declare const kThemeComboBox: number;

declare const kThemeComboBoxMini: number;

declare const kThemeComboBoxSmall: number;

declare const kThemeContextualMenuArrowCursor: number;

declare const kThemeControlSoundsMask: number;

declare const kThemeCopyArrowCursor: number;

declare const kThemeCountingDownHandCursor: number;

declare const kThemeCountingUpAndDownHandCursor: number;

declare const kThemeCountingUpHandCursor: number;

declare const kThemeCrossCursor: number;

declare const kThemeCurrentPortFont: number;

declare const kThemeCustomThemesFileType: number;

declare const kThemeDataFileType: number;

declare const kThemeDblClickCollapseTag: number;

declare const kThemeDefaultAdornment: number;

declare const kThemeDesktopPatternNameTag: number;

declare const kThemeDesktopPatternTag: number;

declare const kThemeDesktopPictureAliasTag: number;

declare const kThemeDesktopPictureAlignmentTag: number;

declare const kThemeDesktopPictureNameTag: number;

declare const kThemeDialogWindow: number;

declare const kThemeDisabledMenuItemTextColor: number;

declare const kThemeDisabledRootMenuTextColor: number;

declare const kThemeDisclosureButton: number;

declare const kThemeDisclosureDown: number;

declare const kThemeDisclosureLeft: number;

declare const kThemeDisclosureRight: number;

declare const kThemeDisclosureTriangle: number;

declare const kThemeDocumentWindow: number;

declare const kThemeDocumentWindowBackgroundBrush: number;

declare const kThemeDragHiliteBrush: number;

declare const kThemeDragSoundDragging: number;

declare const kThemeDragSoundGrowUtilWindow: number;

declare const kThemeDragSoundGrowWindow: number;

declare const kThemeDragSoundMoveAlert: number;

declare const kThemeDragSoundMoveDialog: number;

declare const kThemeDragSoundMoveIcon: number;

declare const kThemeDragSoundMoveUtilWindow: number;

declare const kThemeDragSoundMoveWindow: number;

declare const kThemeDragSoundNone: number;

declare const kThemeDragSoundScrollBarArrowDecreasing: number;

declare const kThemeDragSoundScrollBarArrowIncreasing: number;

declare const kThemeDragSoundScrollBarGhost: number;

declare const kThemeDragSoundScrollBarThumb: number;

declare const kThemeDragSoundSliderGhost: number;

declare const kThemeDragSoundSliderThumb: number;

declare const kThemeDrawIndicatorOnly: number;

declare const kThemeDrawerWindow: number;

declare const kThemeEmphasizedSystemFont: number;

declare const kThemeExamplePictureIDTag: number;

declare const kThemeFinderSoundsMask: number;

declare const kThemeFinderWindowBackgroundBrush: number;

declare const kThemeFocusAdornment: number;

declare const kThemeFocusHighlightBrush: number;

declare const kThemeGrowDown: number;

declare const kThemeGrowLeft: number;

declare const kThemeGrowRight: number;

declare const kThemeGrowUp: number;

declare const kThemeHighlightColorNameTag: number;

declare const kThemeHighlightColorTag: number;

declare const kThemeIBeamCursor: number;

declare const kThemeIconLabelBackgroundBrush: number;

declare const kThemeIconLabelTextColor: number;

declare const kThemeInactiveAlertBackgroundBrush: number;

declare const kThemeInactiveAlertTextColor: number;

declare const kThemeInactiveBevelButtonTextColor: number;

declare const kThemeInactiveDialogBackgroundBrush: number;

declare const kThemeInactiveDialogTextColor: number;

declare const kThemeInactiveDocumentWindowTitleTextColor: number;

declare const kThemeInactiveModelessDialogBackgroundBrush: number;

declare const kThemeInactiveModelessDialogTextColor: number;

declare const kThemeInactiveMovableModalWindowTitleTextColor: number;

declare const kThemeInactivePlacardTextColor: number;

declare const kThemeInactivePopupArrowBrush: number;

declare const kThemeInactivePopupButtonTextColor: number;

declare const kThemeInactivePopupLabelTextColor: number;

declare const kThemeInactivePopupWindowTitleColor: number;

declare const kThemeInactivePushButtonTextColor: number;

declare const kThemeInactiveScrollBarDelimiterBrush: number;

declare const kThemeInactiveUtilityWindowBackgroundBrush: number;

declare const kThemeInactiveUtilityWindowTitleTextColor: number;

declare const kThemeInactiveWindowHeaderTextColor: number;

declare const kThemeIncDecButton: number;

declare const kThemeIncDecButtonMini: number;

declare const kThemeIncDecButtonSmall: number;

declare const kThemeIndeterminateBar: number;

declare const kThemeIndeterminateBarLarge: number;

declare const kThemeIndeterminateBarMedium: number;

declare const kThemeIndeterminateBarMini: number;

declare const kThemeLabelFont: number;

declare const kThemeLargeBevelButton: number;

declare const kThemeLargeIndeterminateBar: number;

declare const kThemeLargeProgressBar: number;

declare const kThemeLargeRoundButton: number;

declare const kThemeLargeTabHeight: number;

declare const kThemeLargeTabHeightMax: number;

declare const kThemeLeftInsideArrowPressed: number;

declare const kThemeLeftOutsideArrowPressed: number;

declare const kThemeLeftTrackPressed: number;

declare const kThemeListHeaderButton: number;

declare const kThemeListViewBackgroundBrush: number;

declare const kThemeListViewSeparatorBrush: number;

declare const kThemeListViewSortColumnBackgroundBrush: number;

declare const kThemeListViewTextColor: number;

declare const kThemeMediumBevelButton: number;

declare const kThemeMediumIndeterminateBar: number;

declare const kThemeMediumProgressBar: number;

declare const kThemeMediumScrollBar: number;

declare const kThemeMediumSlider: number;

declare const kThemeMenuActive: number;

declare const kThemeMenuBarInactive: number;

declare const kThemeMenuBarNormal: number;

declare const kThemeMenuBarSelected: number;

declare const kThemeMenuDisabled: number;

declare const kThemeMenuItemAlignRight: number;

declare const kThemeMenuItemAtBottom: number;

declare const kThemeMenuItemAtTop: number;

declare const kThemeMenuItemCmdKeyFont: number;

declare const kThemeMenuItemFont: number;

declare const kThemeMenuItemHasIcon: number;

declare const kThemeMenuItemHierBackground: number;

declare const kThemeMenuItemHierarchical: number;

declare const kThemeMenuItemMarkFont: number;

declare const kThemeMenuItemNoBackground: number;

declare const kThemeMenuItemPlain: number;

declare const kThemeMenuItemPopUpBackground: number;

declare const kThemeMenuItemScrollDownArrow: number;

declare const kThemeMenuItemScrollUpArrow: number;

declare const kThemeMenuSelected: number;

declare const kThemeMenuSoundsMask: number;

declare const kThemeMenuSquareMenuBar: number;

declare const kThemeMenuTitleFont: number;

declare const kThemeMenuTypeHierarchical: number;

declare const kThemeMenuTypeInactive: number;

declare const kThemeMenuTypePopUp: number;

declare const kThemeMenuTypePullDown: number;

declare const kThemeMetricBestListHeaderHeight: number;

declare const kThemeMetricButtonRoundedHeight: number;

declare const kThemeMetricButtonRoundedRecessedHeight: number;

declare const kThemeMetricCheckBoxGlyphHeight: number;

declare const kThemeMetricCheckBoxHeight: number;

declare const kThemeMetricCheckBoxWidth: number;

declare const kThemeMetricComboBoxLargeBottomShadowOffset: number;

declare const kThemeMetricComboBoxLargeDisclosureWidth: number;

declare const kThemeMetricComboBoxLargeRightShadowOffset: number;

declare const kThemeMetricComboBoxMiniBottomShadowOffset: number;

declare const kThemeMetricComboBoxMiniDisclosureWidth: number;

declare const kThemeMetricComboBoxMiniRightShadowOffset: number;

declare const kThemeMetricComboBoxSmallBottomShadowOffset: number;

declare const kThemeMetricComboBoxSmallDisclosureWidth: number;

declare const kThemeMetricComboBoxSmallRightShadowOffset: number;

declare const kThemeMetricDisclosureButtonHeight: number;

declare const kThemeMetricDisclosureButtonSize: number;

declare const kThemeMetricDisclosureButtonWidth: number;

declare const kThemeMetricDisclosureTriangleHeight: number;

declare const kThemeMetricDisclosureTriangleWidth: number;

declare const kThemeMetricEditTextFrameOutset: number;

declare const kThemeMetricEditTextWhitespace: number;

declare const kThemeMetricFocusRectOutset: number;

declare const kThemeMetricHSliderHeight: number;

declare const kThemeMetricHSliderTickHeight: number;

declare const kThemeMetricHSliderTickOffset: number;

declare const kThemeMetricImageWellThickness: number;

declare const kThemeMetricLargeProgressBarThickness: number;

declare const kThemeMetricLargeRoundButtonSize: number;

declare const kThemeMetricLargeTabCapsWidth: number;

declare const kThemeMetricLargeTabHeight: number;

declare const kThemeMetricListBoxFrameOutset: number;

declare const kThemeMetricListHeaderHeight: number;

declare const kThemeMetricLittleArrowsHeight: number;

declare const kThemeMetricLittleArrowsMiniHeight: number;

declare const kThemeMetricLittleArrowsMiniWidth: number;

declare const kThemeMetricLittleArrowsSmallHeight: number;

declare const kThemeMetricLittleArrowsSmallWidth: number;

declare const kThemeMetricLittleArrowsWidth: number;

declare const kThemeMetricMenuExcludedMarkColumnWidth: number;

declare const kThemeMetricMenuIconTrailingEdgeMargin: number;

declare const kThemeMetricMenuIndentWidth: number;

declare const kThemeMetricMenuMarkColumnWidth: number;

declare const kThemeMetricMenuMarkIndent: number;

declare const kThemeMetricMenuTextLeadingEdgeMargin: number;

declare const kThemeMetricMenuTextTrailingEdgeMargin: number;

declare const kThemeMetricMiniCheckBoxHeight: number;

declare const kThemeMetricMiniCheckBoxWidth: number;

declare const kThemeMetricMiniDisclosureButtonHeight: number;

declare const kThemeMetricMiniDisclosureButtonWidth: number;

declare const kThemeMetricMiniHSliderHeight: number;

declare const kThemeMetricMiniHSliderMinThumbWidth: number;

declare const kThemeMetricMiniHSliderTickHeight: number;

declare const kThemeMetricMiniHSliderTickOffset: number;

declare const kThemeMetricMiniPopupButtonHeight: number;

declare const kThemeMetricMiniPullDownHeight: number;

declare const kThemeMetricMiniPushButtonHeight: number;

declare const kThemeMetricMiniRadioButtonHeight: number;

declare const kThemeMetricMiniRadioButtonWidth: number;

declare const kThemeMetricMiniTabCapsWidth: number;

declare const kThemeMetricMiniTabFrameOverlap: number;

declare const kThemeMetricMiniTabHeight: number;

declare const kThemeMetricMiniTabOverlap: number;

declare const kThemeMetricMiniVSliderMinThumbHeight: number;

declare const kThemeMetricMiniVSliderTickOffset: number;

declare const kThemeMetricMiniVSliderTickWidth: number;

declare const kThemeMetricMiniVSliderWidth: number;

declare const kThemeMetricNormalProgressBarThickness: number;

declare const kThemeMetricPaneSplitterHeight: number;

declare const kThemeMetricPopupButtonHeight: number;

declare const kThemeMetricPrimaryGroupBoxContentInset: number;

declare const kThemeMetricProgressBarShadowOutset: number;

declare const kThemeMetricProgressBarThickness: number;

declare const kThemeMetricPullDownHeight: number;

declare const kThemeMetricPushButtonHeight: number;

declare const kThemeMetricRadioButtonGlyphHeight: number;

declare const kThemeMetricRadioButtonHeight: number;

declare const kThemeMetricRadioButtonWidth: number;

declare const kThemeMetricRelevanceIndicatorHeight: number;

declare const kThemeMetricResizeControlHeight: number;

declare const kThemeMetricRoundButtonSize: number;

declare const kThemeMetricRoundTextFieldContentHeight: number;

declare const kThemeMetricRoundTextFieldContentInsetBottom: number;

declare const kThemeMetricRoundTextFieldContentInsetLeft: number;

declare const kThemeMetricRoundTextFieldContentInsetRight: number;

declare const kThemeMetricRoundTextFieldContentInsetTop: number;

declare const kThemeMetricRoundTextFieldContentInsetWithIconLeft: number;

declare const kThemeMetricRoundTextFieldContentInsetWithIconRight: number;

declare const kThemeMetricRoundTextFieldMiniContentHeight: number;

declare const kThemeMetricRoundTextFieldMiniContentInsetBottom: number;

declare const kThemeMetricRoundTextFieldMiniContentInsetLeft: number;

declare const kThemeMetricRoundTextFieldMiniContentInsetRight: number;

declare const kThemeMetricRoundTextFieldMiniContentInsetTop: number;

declare const kThemeMetricRoundTextFieldMiniContentInsetWithIconLeft: number;

declare const kThemeMetricRoundTextFieldMiniContentInsetWithIconRight: number;

declare const kThemeMetricRoundTextFieldSmallContentHeight: number;

declare const kThemeMetricRoundTextFieldSmallContentInsetBottom: number;

declare const kThemeMetricRoundTextFieldSmallContentInsetLeft: number;

declare const kThemeMetricRoundTextFieldSmallContentInsetRight: number;

declare const kThemeMetricRoundTextFieldSmallContentInsetTop: number;

declare const kThemeMetricRoundTextFieldSmallContentInsetWithIconLeft: number;

declare const kThemeMetricRoundTextFieldSmallContentInsetWithIconRight: number;

declare const kThemeMetricScrollBarMinThumbHeight: number;

declare const kThemeMetricScrollBarMinThumbWidth: number;

declare const kThemeMetricScrollBarOverlap: number;

declare const kThemeMetricScrollBarWidth: number;

declare const kThemeMetricSecondaryGroupBoxContentInset: number;

declare const kThemeMetricSeparatorSize: number;

declare const kThemeMetricSliderMinThumbHeight: number;

declare const kThemeMetricSliderMinThumbWidth: number;

declare const kThemeMetricSmallCheckBoxHeight: number;

declare const kThemeMetricSmallCheckBoxWidth: number;

declare const kThemeMetricSmallDisclosureButtonHeight: number;

declare const kThemeMetricSmallDisclosureButtonWidth: number;

declare const kThemeMetricSmallHSliderHeight: number;

declare const kThemeMetricSmallHSliderMinThumbWidth: number;

declare const kThemeMetricSmallHSliderTickHeight: number;

declare const kThemeMetricSmallHSliderTickOffset: number;

declare const kThemeMetricSmallPaneSplitterHeight: number;

declare const kThemeMetricSmallPopupButtonHeight: number;

declare const kThemeMetricSmallProgressBarShadowOutset: number;

declare const kThemeMetricSmallProgressBarThickness: number;

declare const kThemeMetricSmallPullDownHeight: number;

declare const kThemeMetricSmallPushButtonHeight: number;

declare const kThemeMetricSmallRadioButtonHeight: number;

declare const kThemeMetricSmallRadioButtonWidth: number;

declare const kThemeMetricSmallResizeControlHeight: number;

declare const kThemeMetricSmallScrollBarMinThumbHeight: number;

declare const kThemeMetricSmallScrollBarMinThumbWidth: number;

declare const kThemeMetricSmallScrollBarWidth: number;

declare const kThemeMetricSmallTabCapsWidth: number;

declare const kThemeMetricSmallTabFrameOverlap: number;

declare const kThemeMetricSmallTabHeight: number;

declare const kThemeMetricSmallTabOverlap: number;

declare const kThemeMetricSmallVSliderMinThumbHeight: number;

declare const kThemeMetricSmallVSliderTickOffset: number;

declare const kThemeMetricSmallVSliderTickWidth: number;

declare const kThemeMetricSmallVSliderWidth: number;

declare const kThemeMetricTabFrameOverlap: number;

declare const kThemeMetricTabIndentOrStyle: number;

declare const kThemeMetricTabOverlap: number;

declare const kThemeMetricTexturedPushButtonHeight: number;

declare const kThemeMetricTexturedSmallPushButtonHeight: number;

declare const kThemeMetricTitleBarControlsHeight: number;

declare const kThemeMetricVSliderTickOffset: number;

declare const kThemeMetricVSliderTickWidth: number;

declare const kThemeMetricVSliderWidth: number;

declare const kThemeMiniCheckBox: number;

declare const kThemeMiniIndeterminateBar: number;

declare const kThemeMiniProgressBar: number;

declare const kThemeMiniRadioButton: number;

declare const kThemeMiniScrollBar: number;

declare const kThemeMiniSlider: number;

declare const kThemeMiniSystemFont: number;

declare const kThemeMovableAlertWindow: number;

declare const kThemeMovableDialogWindow: number;

declare const kThemeNameTag: number;

declare const kThemeNoAdornment: number;

declare const kThemeNoSounds: number;

declare const kThemeNormalCheckBox: number;

declare const kThemeNormalRadioButton: number;

declare const kThemeNotAllowedCursor: number;

declare const kThemeOpenHandCursor: number;

declare const kThemePlainDialogWindow: number;

declare const kThemePlatinumFileType: number;

declare const kThemePlusCursor: number;

declare const kThemePointingHandCursor: number;

declare const kThemePoofCursor: number;

declare const kThemePopupButton: number;

declare const kThemePopupButtonMini: number;

declare const kThemePopupButtonNormal: number;

declare const kThemePopupButtonSmall: number;

declare const kThemePopupTabCenterOnOffset: number;

declare const kThemePopupTabCenterOnWindow: number;

declare const kThemePopupTabNormalPosition: number;

declare const kThemePopupWindow: number;

declare const kThemePressedBevelButtonTextColor: number;

declare const kThemePressedPlacardTextColor: number;

declare const kThemePressedPopupArrowBrush: number;

declare const kThemePressedPopupButtonTextColor: number;

declare const kThemePressedPushButtonTextColor: number;

declare const kThemeProgressBar: number;

declare const kThemeProgressBarLarge: number;

declare const kThemeProgressBarMedium: number;

declare const kThemeProgressBarMini: number;

declare const kThemePushButton: number;

declare const kThemePushButtonFont: number;

declare const kThemePushButtonInset: number;

declare const kThemePushButtonInsetSmall: number;

declare const kThemePushButtonMini: number;

declare const kThemePushButtonNormal: number;

declare const kThemePushButtonSmall: number;

declare const kThemePushButtonTextured: number;

declare const kThemePushButtonTexturedSmall: number;

declare const kThemeRadioButton: number;

declare const kThemeRadioButtonMini: number;

declare const kThemeRadioButtonSmall: number;

declare const kThemeRelevanceBar: number;

declare const kThemeResizeDownCursor: number;

declare const kThemeResizeLeftCursor: number;

declare const kThemeResizeLeftRightCursor: number;

declare const kThemeResizeRightCursor: number;

declare const kThemeResizeUpCursor: number;

declare const kThemeResizeUpDownCursor: number;

declare const kThemeRightInsideArrowPressed: number;

declare const kThemeRightOutsideArrowPressed: number;

declare const kThemeRightToLeftAdornment: number;

declare const kThemeRightTrackPressed: number;

declare const kThemeRoundButton: number;

declare const kThemeRoundButtonHelp: number;

declare const kThemeRoundButtonLarge: number;

declare const kThemeRoundedBevelButton: number;

declare const kThemeSavvyMenuResponse: number;

declare const kThemeScrollBar: number;

declare const kThemeScrollBarArrowStyleTag: number;

declare const kThemeScrollBarArrowsLowerRight: number;

declare const kThemeScrollBarArrowsSingle: number;

declare const kThemeScrollBarMedium: number;

declare const kThemeScrollBarMini: number;

declare const kThemeScrollBarSmall: number;

declare const kThemeScrollBarThumbNormal: number;

declare const kThemeScrollBarThumbProportional: number;

declare const kThemeScrollBarThumbStyleTag: number;

declare const kThemeSelectedMenuItemTextColor: number;

declare const kThemeSelectedRootMenuTextColor: number;

declare const kThemeShadowDialogWindow: number;

declare const kThemeSheetWindow: number;

declare const kThemeSlider: number;

declare const kThemeSliderMedium: number;

declare const kThemeSliderMini: number;

declare const kThemeSliderSmall: number;

declare const kThemeSmallBevelButton: number;

declare const kThemeSmallCheckBox: number;

declare const kThemeSmallEmphasizedSystemFont: number;

declare const kThemeSmallRadioButton: number;

declare const kThemeSmallScrollBar: number;

declare const kThemeSmallSlider: number;

declare const kThemeSmallSystemFont: number;

declare const kThemeSmallSystemFontTag: number;

declare const kThemeSmallTabHeight: number;

declare const kThemeSmallTabHeightMax: number;

declare const kThemeSmoothFontEnabledTag: number;

declare const kThemeSmoothFontMinSizeTag: number;

declare const kThemeSoundAlertClose: number;

declare const kThemeSoundAlertOpen: number;

declare const kThemeSoundBalloonClose: number;

declare const kThemeSoundBalloonOpen: number;

declare const kThemeSoundBevelEnter: number;

declare const kThemeSoundBevelExit: number;

declare const kThemeSoundBevelPress: number;

declare const kThemeSoundBevelRelease: number;

declare const kThemeSoundButtonEnter: number;

declare const kThemeSoundButtonExit: number;

declare const kThemeSoundButtonPress: number;

declare const kThemeSoundButtonRelease: number;

declare const kThemeSoundCancelButtonEnter: number;

declare const kThemeSoundCancelButtonExit: number;

declare const kThemeSoundCancelButtonPress: number;

declare const kThemeSoundCancelButtonRelease: number;

declare const kThemeSoundCheckboxEnter: number;

declare const kThemeSoundCheckboxExit: number;

declare const kThemeSoundCheckboxPress: number;

declare const kThemeSoundCheckboxRelease: number;

declare const kThemeSoundCopyDone: number;

declare const kThemeSoundDefaultButtonEnter: number;

declare const kThemeSoundDefaultButtonExit: number;

declare const kThemeSoundDefaultButtonPress: number;

declare const kThemeSoundDefaultButtonRelease: number;

declare const kThemeSoundDialogClose: number;

declare const kThemeSoundDialogOpen: number;

declare const kThemeSoundDisclosureEnter: number;

declare const kThemeSoundDisclosureExit: number;

declare const kThemeSoundDisclosurePress: number;

declare const kThemeSoundDisclosureRelease: number;

declare const kThemeSoundDiskEject: number;

declare const kThemeSoundDiskInsert: number;

declare const kThemeSoundDragTargetDrop: number;

declare const kThemeSoundDragTargetHilite: number;

declare const kThemeSoundDragTargetUnhilite: number;

declare const kThemeSoundEmptyTrash: number;

declare const kThemeSoundFinderDragOffIcon: number;

declare const kThemeSoundFinderDragOnIcon: number;

declare const kThemeSoundLaunchApp: number;

declare const kThemeSoundLittleArrowDnPress: number;

declare const kThemeSoundLittleArrowDnRelease: number;

declare const kThemeSoundLittleArrowEnter: number;

declare const kThemeSoundLittleArrowExit: number;

declare const kThemeSoundLittleArrowUpPress: number;

declare const kThemeSoundLittleArrowUpRelease: number;

declare const kThemeSoundMaskTag: number;

declare const kThemeSoundMenuClose: number;

declare const kThemeSoundMenuItemHilite: number;

declare const kThemeSoundMenuItemRelease: number;

declare const kThemeSoundMenuOpen: number;

declare const kThemeSoundNewItem: number;

declare const kThemeSoundNone: number;

declare const kThemeSoundPopupEnter: number;

declare const kThemeSoundPopupExit: number;

declare const kThemeSoundPopupPress: number;

declare const kThemeSoundPopupRelease: number;

declare const kThemeSoundPopupWindowClose: number;

declare const kThemeSoundPopupWindowOpen: number;

declare const kThemeSoundRadioEnter: number;

declare const kThemeSoundRadioExit: number;

declare const kThemeSoundRadioPress: number;

declare const kThemeSoundRadioRelease: number;

declare const kThemeSoundReceiveDrop: number;

declare const kThemeSoundResolveAlias: number;

declare const kThemeSoundScrollArrowEnter: number;

declare const kThemeSoundScrollArrowExit: number;

declare const kThemeSoundScrollArrowPress: number;

declare const kThemeSoundScrollArrowRelease: number;

declare const kThemeSoundScrollEndOfTrack: number;

declare const kThemeSoundScrollTrackPress: number;

declare const kThemeSoundSelectItem: number;

declare const kThemeSoundSliderEndOfTrack: number;

declare const kThemeSoundSliderTrackPress: number;

declare const kThemeSoundTabEnter: number;

declare const kThemeSoundTabExit: number;

declare const kThemeSoundTabPressed: number;

declare const kThemeSoundTabRelease: number;

declare const kThemeSoundTrackFileType: number;

declare const kThemeSoundTrackNameTag: number;

declare const kThemeSoundUtilWinCloseEnter: number;

declare const kThemeSoundUtilWinCloseExit: number;

declare const kThemeSoundUtilWinClosePress: number;

declare const kThemeSoundUtilWinCloseRelease: number;

declare const kThemeSoundUtilWinCollapseEnter: number;

declare const kThemeSoundUtilWinCollapseExit: number;

declare const kThemeSoundUtilWinCollapsePress: number;

declare const kThemeSoundUtilWinCollapseRelease: number;

declare const kThemeSoundUtilWinDragBoundary: number;

declare const kThemeSoundUtilWinZoomEnter: number;

declare const kThemeSoundUtilWinZoomExit: number;

declare const kThemeSoundUtilWinZoomPress: number;

declare const kThemeSoundUtilWinZoomRelease: number;

declare const kThemeSoundUtilWindowActivate: number;

declare const kThemeSoundUtilWindowClose: number;

declare const kThemeSoundUtilWindowCollapseDown: number;

declare const kThemeSoundUtilWindowCollapseUp: number;

declare const kThemeSoundUtilWindowOpen: number;

declare const kThemeSoundUtilWindowZoomIn: number;

declare const kThemeSoundUtilWindowZoomOut: number;

declare const kThemeSoundWindowActivate: number;

declare const kThemeSoundWindowClose: number;

declare const kThemeSoundWindowCloseEnter: number;

declare const kThemeSoundWindowCloseExit: number;

declare const kThemeSoundWindowClosePress: number;

declare const kThemeSoundWindowCloseRelease: number;

declare const kThemeSoundWindowCollapseDown: number;

declare const kThemeSoundWindowCollapseEnter: number;

declare const kThemeSoundWindowCollapseExit: number;

declare const kThemeSoundWindowCollapsePress: number;

declare const kThemeSoundWindowCollapseRelease: number;

declare const kThemeSoundWindowCollapseUp: number;

declare const kThemeSoundWindowDragBoundary: number;

declare const kThemeSoundWindowOpen: number;

declare const kThemeSoundWindowZoomEnter: number;

declare const kThemeSoundWindowZoomExit: number;

declare const kThemeSoundWindowZoomIn: number;

declare const kThemeSoundWindowZoomOut: number;

declare const kThemeSoundWindowZoomPress: number;

declare const kThemeSoundWindowZoomRelease: number;

declare const kThemeSoundsEnabledTag: number;

declare const kThemeSpecifiedFont: number;

declare const kThemeSpinningCursor: number;

declare const kThemeStateActive: number;

declare const kThemeStateDisabled: number;

declare const kThemeStateInactive: number;

declare const kThemeStatePressed: number;

declare const kThemeStatePressedDown: number;

declare const kThemeStatePressedUp: number;

declare const kThemeStateRollover: number;

declare const kThemeStateUnavailable: number;

declare const kThemeStateUnavailableInactive: number;

declare const kThemeSystemFont: number;

declare const kThemeSystemFontDetail: number;

declare const kThemeSystemFontDetailEmphasized: number;

declare const kThemeSystemFontTag: number;

declare const kThemeTabEast: number;

declare const kThemeTabFront: number;

declare const kThemeTabFrontInactive: number;

declare const kThemeTabFrontUnavailable: number;

declare const kThemeTabNonFront: number;

declare const kThemeTabNonFrontInactive: number;

declare const kThemeTabNonFrontPressed: number;

declare const kThemeTabNonFrontUnavailable: number;

declare const kThemeTabNorth: number;

declare const kThemeTabPaneOverlap: number;

declare const kThemeTabSouth: number;

declare const kThemeTabWest: number;

declare const kThemeTextColorAlertActive: number;

declare const kThemeTextColorAlertInactive: number;

declare const kThemeTextColorBevelButtonActive: number;

declare const kThemeTextColorBevelButtonInactive: number;

declare const kThemeTextColorBevelButtonPressed: number;

declare const kThemeTextColorBevelButtonStickyActive: number;

declare const kThemeTextColorBevelButtonStickyInactive: number;

declare const kThemeTextColorBlack: number;

declare const kThemeTextColorDialogActive: number;

declare const kThemeTextColorDialogInactive: number;

declare const kThemeTextColorDocumentWindowTitleActive: number;

declare const kThemeTextColorDocumentWindowTitleInactive: number;

declare const kThemeTextColorIconLabel: number;

declare const kThemeTextColorIconLabelSelected: number;

declare const kThemeTextColorListView: number;

declare const kThemeTextColorMenuItemActive: number;

declare const kThemeTextColorMenuItemDisabled: number;

declare const kThemeTextColorMenuItemSelected: number;

declare const kThemeTextColorModelessDialogActive: number;

declare const kThemeTextColorModelessDialogInactive: number;

declare const kThemeTextColorMovableModalWindowTitleActive: number;

declare const kThemeTextColorMovableModalWindowTitleInactive: number;

declare const kThemeTextColorNotification: number;

declare const kThemeTextColorPlacardActive: number;

declare const kThemeTextColorPlacardInactive: number;

declare const kThemeTextColorPlacardPressed: number;

declare const kThemeTextColorPopupButtonActive: number;

declare const kThemeTextColorPopupButtonInactive: number;

declare const kThemeTextColorPopupButtonPressed: number;

declare const kThemeTextColorPopupLabelActive: number;

declare const kThemeTextColorPopupLabelInactive: number;

declare const kThemeTextColorPopupWindowTitleActive: number;

declare const kThemeTextColorPopupWindowTitleInactive: number;

declare const kThemeTextColorPushButtonActive: number;

declare const kThemeTextColorPushButtonInactive: number;

declare const kThemeTextColorPushButtonPressed: number;

declare const kThemeTextColorRootMenuActive: number;

declare const kThemeTextColorRootMenuDisabled: number;

declare const kThemeTextColorRootMenuSelected: number;

declare const kThemeTextColorSystemDetail: number;

declare const kThemeTextColorTabFrontActive: number;

declare const kThemeTextColorTabFrontInactive: number;

declare const kThemeTextColorTabNonFrontActive: number;

declare const kThemeTextColorTabNonFrontInactive: number;

declare const kThemeTextColorTabNonFrontPressed: number;

declare const kThemeTextColorUtilityWindowTitleActive: number;

declare const kThemeTextColorUtilityWindowTitleInactive: number;

declare const kThemeTextColorWhite: number;

declare const kThemeTextColorWindowHeaderActive: number;

declare const kThemeTextColorWindowHeaderInactive: number;

declare const kThemeThumbDownward: number;

declare const kThemeThumbPlain: number;

declare const kThemeThumbPressed: number;

declare const kThemeThumbUpward: number;

declare const kThemeToolbarFont: number;

declare const kThemeTopInsideArrowPressed: number;

declare const kThemeTopOutsideArrowPressed: number;

declare const kThemeTopTrackPressed: number;

declare const kThemeTrackActive: number;

declare const kThemeTrackDisabled: number;

declare const kThemeTrackHasFocus: number;

declare const kThemeTrackHideTrack: number;

declare const kThemeTrackHorizontal: number;

declare const kThemeTrackInactive: number;

declare const kThemeTrackNoScrollBarArrows: number;

declare const kThemeTrackNothingToScroll: number;

declare const kThemeTrackRightToLeft: number;

declare const kThemeTrackShowThumb: number;

declare const kThemeTrackThumbRgnIsNotGhost: number;

declare const kThemeUserDefinedTag: number;

declare const kThemeUtilitySideWindow: number;

declare const kThemeUtilityWindow: number;

declare const kThemeUtilityWindowTitleFont: number;

declare const kThemeVariantBaseTintTag: number;

declare const kThemeVariantNameTag: number;

declare const kThemeViewsFont: number;

declare const kThemeViewsFontSizeTag: number;

declare const kThemeViewsFontTag: number;

declare const kThemeWatchCursor: number;

declare const kThemeWidgetCloseBox: number;

declare const kThemeWidgetCollapseBox: number;

declare const kThemeWidgetDirtyCloseBox: number;

declare const kThemeWidgetToolbarButton: number;

declare const kThemeWidgetZoomBox: number;

declare const kThemeWindowHasCloseBox: number;

declare const kThemeWindowHasCollapseBox: number;

declare const kThemeWindowHasDirty: number;

declare const kThemeWindowHasFullZoom: number;

declare const kThemeWindowHasGrow: number;

declare const kThemeWindowHasHorizontalZoom: number;

declare const kThemeWindowHasTitleText: number;

declare const kThemeWindowHasToolbarButton: number;

declare const kThemeWindowHasVerticalZoom: number;

declare const kThemeWindowIsCollapsed: number;

declare const kThemeWindowSoundsMask: number;

declare const kThemeWindowTitleFont: number;

declare const kTiledOnScreen: number;

declare const kToolbarWindowClass: number;

declare const kTrackMouseLocationOptionDontConsumeMouseUp: number;

declare const kTrackMouseLocationOptionIncludeScrollWheel: number;

declare const kTranslateGetFileTranslationList: number;

declare const kTranslateGetScrapTranslationList: number;

declare const kTranslateGetScrapTranslationListConsideringData: number;

declare const kTranslateGetTranslatedFilename: number;

declare const kTranslateIdentifyFile: number;

declare const kTranslateIdentifyScrap: number;

declare const kTranslateTranslateFile: number;

declare const kTranslateTranslateScrap: number;

declare const kTranslationScrapProgressDialogID: number;

declare const kTranslatorCanGenerateFilename: number;

declare const kUIModeAllHidden: number;

declare const kUIModeAllSuppressed: number;

declare const kUIModeContentHidden: number;

declare const kUIModeContentSuppressed: number;

declare const kUIModeNormal: number;

declare const kUIOptionAnimateMenuBar: number;

declare const kUIOptionAutoShowMenuBar: number;

declare const kUIOptionDisableAppleMenu: number;

declare const kUIOptionDisableForceQuit: number;

declare const kUIOptionDisableHide: number;

declare const kUIOptionDisableMenuBarTransparency: number;

declare const kUIOptionDisableProcessSwitch: number;

declare const kUIOptionDisableSessionTerminate: number;

declare const kURLAbortInitiatedEvent: number;

declare const kURLAbortInitiatedMask: number;

declare const kURLAbortingState: number;

declare const kURLAllBufferEventsMask: number;

declare const kURLAllEventsMask: number;

declare const kURLAllNonBufferEventsMask: number;

declare const kURLBinHexFileFlag: number;

declare const kURLCompletedEvent: number;

declare const kURLCompletedEventMask: number;

declare const kURLCompletedState: number;

declare const kURLConnectingState: number;

declare const kURLDataAvailableEvent: number;

declare const kURLDataAvailableEventMask: number;

declare const kURLDataAvailableState: number;

declare const kURLDebinhexOnlyFlag: number;

declare const kURLDirectoryListingFlag: number;

declare const kURLDisplayAuthFlag: number;

declare const kURLDisplayProgressFlag: number;

declare const kURLDoNotDeleteOnErrorFlag: number;

declare const kURLDoNotTryAnonymousFlag: number;

declare const kURLDownloadingEvent: number;

declare const kURLDownloadingMask: number;

declare const kURLDownloadingState: number;

declare const kURLErrorOccurredEvent: number;

declare const kURLErrorOccurredEventMask: number;

declare const kURLErrorOccurredState: number;

declare const kURLExpandAndVerifyFlag: number;

declare const kURLExpandFileFlag: number;

declare const kURLInitiatedEvent: number;

declare const kURLInitiatedEventMask: number;

declare const kURLInitiatingState: number;

declare const kURLIsDirectoryHintFlag: number;

declare const kURLLookingUpHostState: number;

declare const kURLNoAutoRedirectFlag: number;

declare const kURLNullState: number;

declare const kURLPercentEvent: number;

declare const kURLPercentEventMask: number;

declare const kURLPeriodicEvent: number;

declare const kURLPeriodicEventMask: number;

declare const kURLPropertyChangedEvent: number;

declare const kURLPropertyChangedEventMask: number;

declare const kURLReplaceExistingFlag: number;

declare const kURLReservedFlag: number;

declare const kURLResourceFoundEvent: number;

declare const kURLResourceFoundEventMask: number;

declare const kURLResourceFoundState: number;

declare const kURLResumeDownloadFlag: number;

declare const kURLSystemEvent: number;

declare const kURLSystemEventMask: number;

declare const kURLTransactionCompleteEvent: number;

declare const kURLTransactionCompleteEventMask: number;

declare const kURLTransactionCompleteState: number;

declare const kURLUploadFlag: number;

declare const kURLUploadingEvent: number;

declare const kURLUploadingMask: number;

declare const kURLUploadingState: number;

declare const kUnicodeDocument: number;

declare const kUnicodeDocumentInterfaceType: number;

declare const kUnknownLanguage: number;

declare const kUnknownScript: number;

declare const kUpArrowCharCode: number;

declare const kUpdateAETE: number;

declare const kUpdateAEUT: number;

declare const kUseBestGuess: number;

declare const kUserDialogItem: number;

declare const kUserNameAndPasswordFlag: number;

declare const kUtilityWindowClass: number;

declare const kVK_ANSI_0: number;

declare const kVK_ANSI_1: number;

declare const kVK_ANSI_2: number;

declare const kVK_ANSI_3: number;

declare const kVK_ANSI_4: number;

declare const kVK_ANSI_5: number;

declare const kVK_ANSI_6: number;

declare const kVK_ANSI_7: number;

declare const kVK_ANSI_8: number;

declare const kVK_ANSI_9: number;

declare const kVK_ANSI_A: number;

declare const kVK_ANSI_B: number;

declare const kVK_ANSI_Backslash: number;

declare const kVK_ANSI_C: number;

declare const kVK_ANSI_Comma: number;

declare const kVK_ANSI_D: number;

declare const kVK_ANSI_E: number;

declare const kVK_ANSI_Equal: number;

declare const kVK_ANSI_F: number;

declare const kVK_ANSI_G: number;

declare const kVK_ANSI_Grave: number;

declare const kVK_ANSI_H: number;

declare const kVK_ANSI_I: number;

declare const kVK_ANSI_J: number;

declare const kVK_ANSI_K: number;

declare const kVK_ANSI_Keypad0: number;

declare const kVK_ANSI_Keypad1: number;

declare const kVK_ANSI_Keypad2: number;

declare const kVK_ANSI_Keypad3: number;

declare const kVK_ANSI_Keypad4: number;

declare const kVK_ANSI_Keypad5: number;

declare const kVK_ANSI_Keypad6: number;

declare const kVK_ANSI_Keypad7: number;

declare const kVK_ANSI_Keypad8: number;

declare const kVK_ANSI_Keypad9: number;

declare const kVK_ANSI_KeypadClear: number;

declare const kVK_ANSI_KeypadDecimal: number;

declare const kVK_ANSI_KeypadDivide: number;

declare const kVK_ANSI_KeypadEnter: number;

declare const kVK_ANSI_KeypadEquals: number;

declare const kVK_ANSI_KeypadMinus: number;

declare const kVK_ANSI_KeypadMultiply: number;

declare const kVK_ANSI_KeypadPlus: number;

declare const kVK_ANSI_L: number;

declare const kVK_ANSI_LeftBracket: number;

declare const kVK_ANSI_M: number;

declare const kVK_ANSI_Minus: number;

declare const kVK_ANSI_N: number;

declare const kVK_ANSI_O: number;

declare const kVK_ANSI_P: number;

declare const kVK_ANSI_Period: number;

declare const kVK_ANSI_Q: number;

declare const kVK_ANSI_Quote: number;

declare const kVK_ANSI_R: number;

declare const kVK_ANSI_RightBracket: number;

declare const kVK_ANSI_S: number;

declare const kVK_ANSI_Semicolon: number;

declare const kVK_ANSI_Slash: number;

declare const kVK_ANSI_T: number;

declare const kVK_ANSI_U: number;

declare const kVK_ANSI_V: number;

declare const kVK_ANSI_W: number;

declare const kVK_ANSI_X: number;

declare const kVK_ANSI_Y: number;

declare const kVK_ANSI_Z: number;

declare const kVK_CapsLock: number;

declare const kVK_Command: number;

declare const kVK_Control: number;

declare const kVK_Delete: number;

declare const kVK_DownArrow: number;

declare const kVK_End: number;

declare const kVK_Escape: number;

declare const kVK_F1: number;

declare const kVK_F10: number;

declare const kVK_F11: number;

declare const kVK_F12: number;

declare const kVK_F13: number;

declare const kVK_F14: number;

declare const kVK_F15: number;

declare const kVK_F16: number;

declare const kVK_F17: number;

declare const kVK_F18: number;

declare const kVK_F19: number;

declare const kVK_F2: number;

declare const kVK_F20: number;

declare const kVK_F3: number;

declare const kVK_F4: number;

declare const kVK_F5: number;

declare const kVK_F6: number;

declare const kVK_F7: number;

declare const kVK_F8: number;

declare const kVK_F9: number;

declare const kVK_ForwardDelete: number;

declare const kVK_Function: number;

declare const kVK_Help: number;

declare const kVK_Home: number;

declare const kVK_ISO_Section: number;

declare const kVK_JIS_Eisu: number;

declare const kVK_JIS_Kana: number;

declare const kVK_JIS_KeypadComma: number;

declare const kVK_JIS_Underscore: number;

declare const kVK_JIS_Yen: number;

declare const kVK_LeftArrow: number;

declare const kVK_Mute: number;

declare const kVK_Option: number;

declare const kVK_PageDown: number;

declare const kVK_PageUp: number;

declare const kVK_Return: number;

declare const kVK_RightArrow: number;

declare const kVK_RightCommand: number;

declare const kVK_RightControl: number;

declare const kVK_RightOption: number;

declare const kVK_RightShift: number;

declare const kVK_Shift: number;

declare const kVK_Space: number;

declare const kVK_Tab: number;

declare const kVK_UpArrow: number;

declare const kVK_VolumeDown: number;

declare const kVK_VolumeUp: number;

declare const kVerticalTabCharCode: number;

declare const kWindowActivationScopeAll: number;

declare const kWindowActivationScopeIndependent: number;

declare const kWindowActivationScopeNone: number;

declare const kWindowAlertPositionMainScreen: number;

declare const kWindowAlertPositionOnMainScreen: number;

declare const kWindowAlertPositionOnParentWindow: number;

declare const kWindowAlertPositionOnParentWindowScreen: number;

declare const kWindowAlertPositionParentWindow: number;

declare const kWindowAlertPositionParentWindowScreen: number;

declare const kWindowAlertProc: number;

declare const kWindowAsyncDragAttribute: number;

declare const kWindowBoundsChangeOriginChanged: number;

declare const kWindowBoundsChangeSizeChanged: number;

declare const kWindowBoundsChangeUserDrag: number;

declare const kWindowBoundsChangeUserResize: number;

declare const kWindowBoundsChangeZoom: number;

declare const kWindowCanBeVisibleWithoutLoginAttribute: number;

declare const kWindowCanCollapse: number;

declare const kWindowCanDrawInCurrentPort: number;

declare const kWindowCanGetWindowRegion: number;

declare const kWindowCanGrow: number;

declare const kWindowCanMeasureTitle: number;

declare const kWindowCanSetupProxyDragImage: number;

declare const kWindowCanZoom: number;

declare const kWindowCascadeOnMainScreen: number;

declare const kWindowCascadeOnParentWindow: number;

declare const kWindowCascadeOnParentWindowScreen: number;

declare const kWindowCascadeStartAtParentWindowScreen: number;

declare const kWindowCenterMainScreen: number;

declare const kWindowCenterOnMainScreen: number;

declare const kWindowCenterOnParentWindow: number;

declare const kWindowCenterOnParentWindowScreen: number;

declare const kWindowCenterParentWindow: number;

declare const kWindowCenterParentWindowScreen: number;

declare const kWindowCloseBoxAttribute: number;

declare const kWindowCloseBoxRgn: number;

declare const kWindowCollapseBoxAttribute: number;

declare const kWindowCollapseBoxRgn: number;

declare const kWindowCompositingAttribute: number;

declare const kWindowConstrainAllowPartial: number;

declare const kWindowConstrainCalcOnly: number;

declare const kWindowConstrainMayResize: number;

declare const kWindowConstrainMoveMinimum: number;

declare const kWindowConstrainMoveRegardlessOfFit: number;

declare const kWindowConstrainStandardOptions: number;

declare const kWindowConstrainUseSpecifiedBounds: number;

declare const kWindowConstrainUseTransitionWindow: number;

declare const kWindowContentRgn: number;

declare const kWindowDefHIView: number;

declare const kWindowDefObjectClass: number;

declare const kWindowDefProcID: number;

declare const kWindowDefProcPtr: number;

declare const kWindowDefProcType: number;

declare const kWindowDefSupportsColorGrafPort: number;

declare const kWindowDefaultPosition: number;

declare const kWindowDefinitionVersionOne: number;

declare const kWindowDefinitionVersionTwo: number;

declare const kWindowDialogDefProcResID: number;

declare const kWindowDocumentDefProcResID: number;

declare const kWindowDocumentProc: number;

declare const kWindowDoesNotCycleAttribute: number;

declare const kWindowDragRgn: number;

declare const kWindowDrawerClosed: number;

declare const kWindowDrawerClosing: number;

declare const kWindowDrawerOpen: number;

declare const kWindowDrawerOpening: number;

declare const kWindowEdgeBottom: number;

declare const kWindowEdgeDefault: number;

declare const kWindowEdgeLeft: number;

declare const kWindowEdgeRight: number;

declare const kWindowEdgeTop: number;

declare const kWindowFadeTransitionEffect: number;

declare const kWindowFloatFullZoomGrowProc: number;

declare const kWindowFloatFullZoomProc: number;

declare const kWindowFloatGrowProc: number;

declare const kWindowFloatHorizZoomGrowProc: number;

declare const kWindowFloatHorizZoomProc: number;

declare const kWindowFloatProc: number;

declare const kWindowFloatSideFullZoomGrowProc: number;

declare const kWindowFloatSideFullZoomProc: number;

declare const kWindowFloatSideGrowProc: number;

declare const kWindowFloatSideHorizZoomGrowProc: number;

declare const kWindowFloatSideHorizZoomProc: number;

declare const kWindowFloatSideProc: number;

declare const kWindowFloatSideVertZoomGrowProc: number;

declare const kWindowFloatSideVertZoomProc: number;

declare const kWindowFloatVertZoomGrowProc: number;

declare const kWindowFloatVertZoomProc: number;

declare const kWindowFrameworkScaledAttribute: number;

declare const kWindowFullZoomAttribute: number;

declare const kWindowFullZoomDocumentProc: number;

declare const kWindowFullZoomGrowDocumentProc: number;

declare const kWindowGenieTransitionEffect: number;

declare const kWindowGlobalPortRgn: number;

declare const kWindowGroupAttrFixedLevel: number;

declare const kWindowGroupAttrHideOnCollapse: number;

declare const kWindowGroupAttrLayerTogether: number;

declare const kWindowGroupAttrMoveTogether: number;

declare const kWindowGroupAttrPositionFixed: number;

declare const kWindowGroupAttrSelectAsLayer: number;

declare const kWindowGroupAttrSelectable: number;

declare const kWindowGroupAttrSharedActivation: number;

declare const kWindowGroupAttrZOrderFixed: number;

declare const kWindowGroupContentsRecurse: number;

declare const kWindowGroupContentsReturnWindows: number;

declare const kWindowGroupContentsVisible: number;

declare const kWindowGroupLevelActive: number;

declare const kWindowGroupLevelInactive: number;

declare const kWindowGroupLevelPromoted: number;

declare const kWindowGrowDocumentProc: number;

declare const kWindowGrowRgn: number;

declare const kWindowHasRoundBottomBarCornersAttribute: number;

declare const kWindowHasTitleBar: number;

declare const kWindowHideOnFullScreenAttribute: number;

declare const kWindowHideOnSuspendAttribute: number;

declare const kWindowHideTransitionAction: number;

declare const kWindowHighResolutionCapableAttribute: number;

declare const kWindowHorizZoomDocumentProc: number;

declare const kWindowHorizZoomGrowDocumentProc: number;

declare const kWindowHorizontalZoomAttribute: number;

declare const kWindowIgnoreClicksAttribute: number;

declare const kWindowInWindowMenuAttribute: number;

declare const kWindowIsAlert: number;

declare const kWindowIsCollapsedState: number;

declare const kWindowIsModal: number;

declare const kWindowIsOpaque: number;

declare const kWindowLatentVisibleAppHidden: number;

declare const kWindowLatentVisibleCollapsedGroup: number;

declare const kWindowLatentVisibleCollapsedOwner: number;

declare const kWindowLatentVisibleFloater: number;

declare const kWindowLatentVisibleFullScreen: number;

declare const kWindowLatentVisibleSuspend: number;

declare const kWindowLiveResizeAttribute: number;

declare const kWindowMenuIncludeRotate: number;

declare const kWindowMetalAttribute: number;

declare const kWindowMetalNoContentSeparatorAttribute: number;

declare const kWindowModalDialogProc: number;

declare const kWindowModalityAppModal: number;

declare const kWindowModalityNone: number;

declare const kWindowModalitySystemModal: number;

declare const kWindowModalityWindowModal: number;

declare const kWindowMovableAlertProc: number;

declare const kWindowMovableModalDialogProc: number;

declare const kWindowMovableModalGrowProc: number;

declare const kWindowMoveTransitionAction: number;

declare const kWindowMsgCalculateShape: number;

declare const kWindowMsgCleanUp: number;

declare const kWindowMsgDragHilite: number;

declare const kWindowMsgDraw: number;

declare const kWindowMsgDrawGrowBox: number;

declare const kWindowMsgDrawGrowOutline: number;

declare const kWindowMsgDrawInCurrentPort: number;

declare const kWindowMsgGetFeatures: number;

declare const kWindowMsgGetGrowImageRegion: number;

declare const kWindowMsgGetRegion: number;

declare const kWindowMsgHitTest: number;

declare const kWindowMsgInitialize: number;

declare const kWindowMsgMeasureTitle: number;

declare const kWindowMsgModified: number;

declare const kWindowMsgSetupProxyDragImage: number;

declare const kWindowMsgStateChanged: number;

declare const kWindowNoActivatesAttribute: number;

declare const kWindowNoAttributes: number;

declare const kWindowNoConstrainAttribute: number;

declare const kWindowNoPosition: number;

declare const kWindowNoShadowAttribute: number;

declare const kWindowNoTitleBarAttribute: number;

declare const kWindowNoUpdatesAttribute: number;

declare const kWindowOpaqueForEventsAttribute: number;

declare const kWindowOpaqueRgn: number;

declare const kWindowOverlayProc: number;

declare const kWindowPaintProcOptionsNone: number;

declare const kWindowPlainDialogProc: number;

declare const kWindowPropertyPersistent: number;

declare const kWindowResizableAttribute: number;

declare const kWindowResizeTransitionAction: number;

declare const kWindowShadowDialogProc: number;

declare const kWindowSheetAlertDefProcResID: number;

declare const kWindowSheetAlertProc: number;

declare const kWindowSheetDefProcResID: number;

declare const kWindowSheetProc: number;

declare const kWindowSheetTransitionEffect: number;

declare const kWindowShowTransitionAction: number;

declare const kWindowSideTitlebarAttribute: number;

declare const kWindowSimpleDefProcResID: number;

declare const kWindowSimpleFrameProc: number;

declare const kWindowSimpleProc: number;

declare const kWindowSlideTransitionEffect: number;

declare const kWindowStaggerMainScreen: number;

declare const kWindowStaggerParentWindow: number;

declare const kWindowStaggerParentWindowScreen: number;

declare const kWindowStandardDocumentAttributes: number;

declare const kWindowStandardFloatingAttributes: number;

declare const kWindowStandardHandlerAttribute: number;

declare const kWindowStateTitleChanged: number;

declare const kWindowStructureRgn: number;

declare const kWindowSupportsDragHilite: number;

declare const kWindowSupportsGetGrowImageRegion: number;

declare const kWindowSupportsModifiedBit: number;

declare const kWindowTexturedSquareCornersAttribute: number;

declare const kWindowTitleBarRgn: number;

declare const kWindowTitleProxyIconRgn: number;

declare const kWindowTitleTextRgn: number;

declare const kWindowToolbarButtonAttribute: number;

declare const kWindowToolbarButtonRgn: number;

declare const kWindowUnifiedTitleAndToolbarAttribute: number;

declare const kWindowUpdateRgn: number;

declare const kWindowUtilityDefProcResID: number;

declare const kWindowUtilitySideTitleDefProcResID: number;

declare const kWindowVertZoomDocumentProc: number;

declare const kWindowVertZoomGrowDocumentProc: number;

declare const kWindowVerticalZoomAttribute: number;

declare const kWindowWantsDisposeAtProcessDeath: number;

declare const kWindowZoomBoxRgn: number;

declare const kWindowZoomTransitionEffect: number;

declare const kZoomAccelerate: number;

declare const kZoomDecelerate: number;

declare const kZoomNoAcceleration: number;

declare const key32BitIcon: number;

declare const key4BitIcon: number;

declare const key8BitIcon: number;

declare const key8BitMask: number;

declare const keyAEErrorObject: number;

declare const keyAENoAutoRouting: number;

declare const keyAEReplacing: number;

declare const keyAETarget: number;

declare const keyAEUsing: number;

declare const keyASArg: number;

declare const keyASPositionalArgs: number;

declare const keyASPrepositionAbout: number;

declare const keyASPrepositionAbove: number;

declare const keyASPrepositionAgainst: number;

declare const keyASPrepositionApartFrom: number;

declare const keyASPrepositionAround: number;

declare const keyASPrepositionAsideFrom: number;

declare const keyASPrepositionAt: number;

declare const keyASPrepositionBelow: number;

declare const keyASPrepositionBeneath: number;

declare const keyASPrepositionBeside: number;

declare const keyASPrepositionBetween: number;

declare const keyASPrepositionBy: number;

declare const keyASPrepositionFor: number;

declare const keyASPrepositionFrom: number;

declare const keyASPrepositionGiven: number;

declare const keyASPrepositionHas: number;

declare const keyASPrepositionIn: number;

declare const keyASPrepositionInsteadOf: number;

declare const keyASPrepositionInto: number;

declare const keyASPrepositionOn: number;

declare const keyASPrepositionOnto: number;

declare const keyASPrepositionOutOf: number;

declare const keyASPrepositionOver: number;

declare const keyASPrepositionSince: number;

declare const keyASPrepositionThrough: number;

declare const keyASPrepositionThru: number;

declare const keyASPrepositionTo: number;

declare const keyASPrepositionUnder: number;

declare const keyASPrepositionUntil: number;

declare const keyASPrepositionWith: number;

declare const keyASPrepositionWithout: number;

declare const keyASReturning: number;

declare const keyASSubroutineName: number;

declare const keyASUserRecordFields: number;

declare const keyAll: number;

declare const keyAppHandledCoercion: number;

declare const keyCodeMask: number;

declare const keyContextualMenuAttributes: number;

declare const keyContextualMenuCommandID: number;

declare const keyContextualMenuModifiers: number;

declare const keyContextualMenuName: number;

declare const keyContextualMenuSubmenu: number;

declare const keyDown: number;

declare const keyDownMask: number;

declare const keyGlobalPositionList: number;

declare const keyIconAndMask: number;

declare const keyLocalPositionList: number;

declare const keyMini1BitMask: number;

declare const keyMini4BitIcon: number;

declare const keyMini8BitIcon: number;

declare const keyOSADialectCode: number;

declare const keyOSADialectLangCode: number;

declare const keyOSADialectName: number;

declare const keyOSADialectScriptCode: number;

declare const keyOSASourceEnd: number;

declare const keyOSASourceStart: number;

declare const keyOldFinderItems: number;

declare const keyRedirectedDocumentList: number;

declare const keySRRecognizer: number;

declare const keySRSpeechResult: number;

declare const keySRSpeechStatus: number;

declare const keyScszResource: number;

declare const keySmall32BitIcon: number;

declare const keySmall4BitIcon: number;

declare const keySmall8BitIcon: number;

declare const keySmall8BitMask: number;

declare const keySmallIconAndMask: number;

declare const keySubjectAttr: number;

declare const keyUp: number;

declare const keyUpMask: number;

declare const lCloseMsg: number;

declare const lDoHAutoscroll: number;

declare const lDoHAutoscrollBit: number;

declare const lDoVAutoscroll: number;

declare const lDoVAutoscrollBit: number;

declare const lDrawMsg: number;

declare const lDrawingModeOff: number;

declare const lDrawingModeOffBit: number;

declare const lExtendDrag: number;

declare const lExtendDragBit: number;

declare const lHiliteMsg: number;

declare const lInitMsg: number;

declare const lNoDisjoint: number;

declare const lNoDisjointBit: number;

declare const lNoExtend: number;

declare const lNoExtendBit: number;

declare const lNoNilHilite: number;

declare const lNoNilHiliteBit: number;

declare const lNoRect: number;

declare const lNoRectBit: number;

declare const lOnlyOne: number;

declare const lOnlyOneBit: number;

declare const lUseSense: number;

declare const lUseSenseBit: number;

declare const mCalcItemMsg: number;

declare const mDownMask: number;

declare const mDrawMsg: number;

declare const mPopUpMsg: number;

declare const mSizeMsg: number;

declare const mUpMask: number;

declare const mctAllItems: number;

declare const mctLastIDIndic: number;

declare const mouseDown: number;

declare const mouseMovedMessage: number;

declare const mouseUp: number;

declare const movableDBoxProc: number;

declare const nWIDTHHook: number;

declare const networkEvt: number;

declare const networkMask: number;

declare const noConstraint: number;

declare const noGrowDocProc: number;

declare const noMark: number;

declare const noteIcon: number;

declare const nullEvent: number;

declare const ok: number;

declare const optionKey: number;

declare const optionKeyBit: number;

declare const osEvt: number;

declare const osEvtMessageMask: number;

declare const osMask: number;

declare const overlayDITL: number;

declare const pARADialIn: number;

declare const pASDateString: number;

declare const pASDay: number;

declare const pASDays: number;

declare const pASHours: number;

declare const pASIt: number;

declare const pASMe: number;

declare const pASMinutes: number;

declare const pASMonth: number;

declare const pASParent: number;

declare const pASPi: number;

declare const pASPrintDepth: number;

declare const pASPrintLength: number;

declare const pASQuote: number;

declare const pASRequiredImportItems: number;

declare const pASResult: number;

declare const pASReturn: number;

declare const pASSeconds: number;

declare const pASSpace: number;

declare const pASTab: number;

declare const pASTime: number;

declare const pASTimeString: number;

declare const pASTopLevelScript: number;

declare const pASWeekday: number;

declare const pASWeeks: number;

declare const pASYear: number;

declare const pAboutMacintosh: number;

declare const pAppPartition: number;

declare const pAppleMenuItemsFolder: number;

declare const pApplicationFile: number;

declare const pArePrivilegesInherited: number;

declare const pButtonViewArrangement: number;

declare const pByCreationDateArrangement: number;

declare const pByKindArrangement: number;

declare const pByLabelArrangement: number;

declare const pByModificationDateArrangement: number;

declare const pByNameArrangement: number;

declare const pBySizeArrangement: number;

declare const pCallBackNumber: number;

declare const pCanChangePassword: number;

declare const pCanConnect: number;

declare const pCanDoProgramLinking: number;

declare const pCapacity: number;

declare const pComment: number;

declare const pCompletelyExpanded: number;

declare const pContainer: number;

declare const pContainerWindow: number;

declare const pContentSpace: number;

declare const pControlPanelsFolder: number;

declare const pCreationDate: number;

declare const pCreationDateOld: number;

declare const pDefaultButtonViewIconSize: number;

declare const pDefaultIconViewIconSize: number;

declare const pDefaultListViewIconSize: number;

declare const pDelayBeforeSpringing: number;

declare const pDescription: number;

declare const pDeskAccessoryFile: number;

declare const pDesktop: number;

declare const pDisk: number;

declare const pEjectable: number;

declare const pEntireContents: number;

declare const pExpandable: number;

declare const pExpanded: number;

declare const pExported: number;

declare const pExtensionsFolder: number;

declare const pFile: number;

declare const pFileCreator: number;

declare const pFileShareOn: number;

declare const pFileShareStartingUp: number;

declare const pFileType: number;

declare const pFileTypeOld: number;

declare const pFinderPreferences: number;

declare const pFolder: number;

declare const pFolderOld: number;

declare const pFontsFolder: number;

declare const pFontsFolderPreAllegro: number;

declare const pFreeSpace: number;

declare const pGrid: number;

declare const pGridIcons: number;

declare const pGroup: number;

declare const pGroupPrivileges: number;

declare const pGuestPrivileges: number;

declare const pHasScriptingTerminology: number;

declare const pIconBitmap: number;

declare const pIconSize: number;

declare const pIconViewArrangement: number;

declare const pInfoPanel: number;

declare const pInfoWindow: number;

declare const pInherits: number;

declare const pInternetLocation: number;

declare const pIsCollapsed: number;

declare const pIsLocked: number;

declare const pIsLockedOld: number;

declare const pIsOwner: number;

declare const pIsPopup: number;

declare const pIsPulledOpen: number;

declare const pIsScriptable: number;

declare const pIsSelected: number;

declare const pIsStartup: number;

declare const pIsZoomedFull: number;

declare const pKeepArranged: number;

declare const pKeepArrangedBy: number;

declare const pKind: number;

declare const pLabel1: number;

declare const pLabel2: number;

declare const pLabel3: number;

declare const pLabel4: number;

declare const pLabel5: number;

declare const pLabel6: number;

declare const pLabel7: number;

declare const pLabelIndex: number;

declare const pLangCode: number;

declare const pLargeButton: number;

declare const pLargestFreeBlock: number;

declare const pLength: number;

declare const pListViewIconSize: number;

declare const pLocal: number;

declare const pLocalAndRemoteEvents: number;

declare const pMakeChanges: number;

declare const pMinAppPartition: number;

declare const pModificationDate: number;

declare const pModificationDateOld: number;

declare const pMounted: number;

declare const pNoArrangement: number;

declare const pObject: number;

declare const pOriginalItem: number;

declare const pOwner: number;

declare const pOwnerPrivileges: number;

declare const pPartitionSpaceUsed: number;

declare const pPhysicalSize: number;

declare const pPosition: number;

declare const pPreferencesFolder: number;

declare const pPreferencesWindow: number;

declare const pPreviousView: number;

declare const pProductVersion: number;

declare const pProgramLinkingOn: number;

declare const pProperties: number;

declare const pRest: number;

declare const pReverse: number;

declare const pScriptCode: number;

declare const pSeeFiles: number;

declare const pSeeFolders: number;

declare const pSharableContainer: number;

declare const pSharing: number;

declare const pSharingProtection: number;

declare const pSharingWindow: number;

declare const pShortCuts: number;

declare const pShouldCallBack: number;

declare const pShowComment: number;

declare const pShowCreationDate: number;

declare const pShowDate: number;

declare const pShowDiskInfo: number;

declare const pShowFolderSize: number;

declare const pShowKind: number;

declare const pShowLabel: number;

declare const pShowModificationDate: number;

declare const pShowSize: number;

declare const pShowVersion: number;

declare const pShutdownFolder: number;

declare const pSize: number;

declare const pSmallButton: number;

declare const pSmallIcon: number;

declare const pSnapToGridArrangement: number;

declare const pSortDirection: number;

declare const pSound: number;

declare const pSpringOpenFolders: number;

declare const pStaggerIcons: number;

declare const pStartingUp: number;

declare const pStartupDisk: number;

declare const pStartupItemsFolder: number;

declare const pSuggestedAppPartition: number;

declare const pSystemFolder: number;

declare const pTemporaryFolder: number;

declare const pTrash: number;

declare const pUseRelativeDate: number;

declare const pUseShortMenus: number;

declare const pUseWideGrid: number;

declare const pView: number;

declare const pViewFont: number;

declare const pViewFontSize: number;

declare const pViewPreferences: number;

declare const pWarnOnEmpty: number;

declare const pWindow: number;

declare const picItem: number;

declare const plainDBox: number;

declare const popupFixedWidth: number;

declare const popupMenuProc: number;

declare const popupTitleBold: number;

declare const popupTitleCenterJust: number;

declare const popupTitleCondense: number;

declare const popupTitleExtend: number;

declare const popupTitleItalic: number;

declare const popupTitleLeftJust: number;

declare const popupTitleNoStyle: number;

declare const popupTitleOutline: number;

declare const popupTitleRightJust: number;

declare const popupTitleShadow: number;

declare const popupTitleUnderline: number;

declare const popupUseAddResMenu: number;

declare const popupUseWFont: number;

declare const popupVariableWidth: number;

declare const pushButProc: number;

declare const radCtrl: number;

declare const radioButProc: number;

declare const resCtrl: number;

declare const resumeFlag: number;

declare const rightControlKey: number;

declare const rightControlKeyBit: number;

declare const rightOptionKey: number;

declare const rightOptionKeyBit: number;

declare const rightShiftKey: number;

declare const rightShiftKeyBit: number;

declare const scrollBarProc: number;

declare const shiftKey: number;

declare const shiftKeyBit: number;

declare const sizeBit: number;

declare const statText: number;

declare const stopIcon: number;

declare const suspendResumeMessage: number;

declare const taDstDocNeedsResourceFork: number;

declare const taDstIsAppTranslation: number;

declare const teBitClear: number;

declare const teBitSet: number;

declare const teBitTest: number;

declare const teCaret: number;

declare const teCenter: number;

declare const teDraw: number;

declare const teFAutoScroll: number;

declare const teFIdleWithEventLoopTimer: number;

declare const teFInlineInput: number;

declare const teFInlineInputAutoScroll: number;

declare const teFOutlineHilite: number;

declare const teFTextBuffering: number;

declare const teFUseInlineInput: number;

declare const teFUseTextServices: number;

declare const teFUseWhiteBackground: number;

declare const teFind: number;

declare const teFlushDefault: number;

declare const teFlushLeft: number;

declare const teFlushRight: number;

declare const teForceLeft: number;

declare const teFromFind: number;

declare const teFromRecal: number;

declare const teHighlight: number;

declare const teJustCenter: number;

declare const teJustLeft: number;

declare const teJustRight: number;

declare const teWordDrag: number;

declare const teWordSelect: number;

declare const textMenuProc: number;

declare const toggleBit: number;

declare const tsNextSelectMode: number;

declare const tsNormalSelectMode: number;

declare const tsPreviousSelectMode: number;

declare const type32BitIcon: number;

declare const type4BitIcon: number;

declare const type8BitIcon: number;

declare const type8BitMask: number;

declare const typeAETE: number;

declare const typeAEUT: number;

declare const typeASStorage: number;

declare const typeATSFontRef: number;

declare const typeATSUFontID: number;

declare const typeATSUSize: number;

declare const typeAppleScript: number;

declare const typeByteCount: number;

declare const typeByteOffset: number;

declare const typeCFIndex: number;

declare const typeCFRange: number;

declare const typeCGContextRef: number;

declare const typeCGDisplayChangeFlags: number;

declare const typeCGDisplayID: number;

declare const typeCGFloat: number;

declare const typeCGFloat72DPIGlobal: number;

declare const typeCGFloatScreenPixel: number;

declare const typeCGImageRef: number;

declare const typeCTFontDescriptorRef: number;

declare const typeCTFontRef: number;

declare const typeCTGlyphInfoRef: number;

declare const typeClickActivationResult: number;

declare const typeCollection: number;

declare const typeConceptualTime: number;

declare const typeControlActionUPP: number;

declare const typeControlFrameMetrics: number;

declare const typeControlPartCode: number;

declare const typeControlRef: number;

declare const typeDragRef: number;

declare const typeEventHotKeyID: number;

declare const typeEventTargetOptions: number;

declare const typeEventTargetRef: number;

declare const typeFMFontFamily: number;

declare const typeFMFontSize: number;

declare const typeFMFontStyle: number;

declare const typeFSVolumeRefNum: number;

declare const typeFontColor: number;

declare const typeGDHandle: number;

declare const typeGWorldPtr: number;

declare const typeGlyphSelector: number;

declare const typeGrafPtr: number;

declare const typeHICommand: number;

declare const typeHIObjectRef: number;

declare const typeHIPoint: number;

declare const typeHIPoint72DPIGlobal: number;

declare const typeHIPointScreenPixel: number;

declare const typeHIRect: number;

declare const typeHIRect72DPIGlobal: number;

declare const typeHIRectScreenPixel: number;

declare const typeHIShapeRef: number;

declare const typeHISize: number;

declare const typeHISize72DPIGlobal: number;

declare const typeHISizeScreenPixel: number;

declare const typeHIToolbarDisplayMode: number;

declare const typeHIToolbarDisplaySize: number;

declare const typeHIToolbarItemRef: number;

declare const typeHIToolbarRef: number;

declare const typeHIViewTrackingAreaRef: number;

declare const typeIconAndMask: number;

declare const typeIconFamily: number;

declare const typeIndicatorDragConstraint: number;

declare const typeMenuCommand: number;

declare const typeMenuDirection: number;

declare const typeMenuEventOptions: number;

declare const typeMenuItemIndex: number;

declare const typeMenuRef: number;

declare const typeMenuTrackingMode: number;

declare const typeModalClickResult: number;

declare const typeMouseButton: number;

declare const typeMouseTrackingRef: number;

declare const typeMouseWheelAxis: number;

declare const typeOSADialectInfo: number;

declare const typeOSAErrorRange: number;

declare const typeOSAGenericStorage: number;

declare const typeOSStatus: number;

declare const typePasteboardRef: number;

declare const typeQDRgnHandle: number;

declare const typeRefCon: number;

declare const typeRelativeTime: number;

declare const typeSRRecognizer: number;

declare const typeSRSpeechResult: number;

declare const typeScrapRef: number;

declare const typeScszResource: number;

declare const typeSecIdentityRef: number;

declare const typeSignedByteCount: number;

declare const typeSignedByteOffset: number;

declare const typeSmall32BitIcon: number;

declare const typeSmall4BitIcon: number;

declare const typeSmall8BitIcon: number;

declare const typeSmall8BitMask: number;

declare const typeSmallIconAndMask: number;

declare const typeSound: number;

declare const typeTabletPointRec: number;

declare const typeTabletPointerRec: number;

declare const typeTabletProximityRec: number;

declare const typeThemeMenuItemType: number;

declare const typeThemeMenuState: number;

declare const typeThemeMenuType: number;

declare const typeUserRecordFields: number;

declare const typeVoidPtr: number;

declare const typeWindowDefPartCode: number;

declare const typeWindowModality: number;

declare const typeWindowPartCode: number;

declare const typeWindowRef: number;

declare const typeWindowRegionCode: number;

declare const typeWindowTransitionAction: number;

declare const typeWindowTransitionEffect: number;

declare const updateEvt: number;

declare const updateMask: number;

declare const userItem: number;

declare const userKind: number;

declare const vAxisOnly: number;

declare const wCalcRgns: number;

declare const wContentColor: number;

declare const wDispose: number;

declare const wDraw: number;

declare const wDrawGIcon: number;

declare const wFrameColor: number;

declare const wGrow: number;

declare const wHiliteColor: number;

declare const wHit: number;

declare const wInCollapseBox: number;

declare const wInContent: number;

declare const wInDrag: number;

declare const wInGoAway: number;

declare const wInGrow: number;

declare const wInProxyIcon: number;

declare const wInStructure: number;

declare const wInToolbarButton: number;

declare const wInZoomIn: number;

declare const wInZoomOut: number;

declare const wNew: number;

declare const wNoHit: number;

declare const wTextColor: number;

declare const wTitleBarColor: number;

declare const zoomDocProc: number;

declare const zoomNoGrow: number;
