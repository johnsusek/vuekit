
interface ATSFSSpec {
	vRefNum: number;
	parID: number;
	name: number;
}
declare var ATSFSSpec: ATSFSSpec;

enum ATSFontFilterSelector {

	kATSFontFilterSelectorUnspecified = 0,

	kATSFontFilterSelectorGeneration = 3,

	kATSFontFilterSelectorFontFamily = 7,

	kATSFontFilterSelectorFontFamilyApplierFunction = 8,

	kATSFontFilterSelectorFontApplierFunction = 9,

	kATSFileReferenceFilterSelector = 10
}


interface ATSFontMetrics {
	version: number;
	ascent: number;
	descent: number;
	leading: number;
	avgAdvanceWidth: number;
	maxAdvanceWidth: number;
	minLeftSideBearing: number;
	minRightSideBearing: number;
	stemWidth: number;
	stemHeight: number;
	capHeight: number;
	xHeight: number;
	italicAngle: number;
	underlinePosition: number;
	underlineThickness: number;
}
declare var ATSFontMetrics: ATSFontMetrics;

enum ATSFontNotifyAction {

	kATSFontNotifyActionFontsChanged = 1,

	kATSFontNotifyActionDirectoriesChanged = 2
}


enum ATSFontNotifyOption {

	kATSFontNotifyOptionDefault = 0,

	kATSFontNotifyOptionReceiveWhileSuspended = 1
}


enum ATSFontQueryMessageID {

	kATSQueryActivateFontMessage = 1635021665
}


interface ATSFontQuerySourceContext {
	version: number;
	refCon: any;
	retain: (p1: any) => any;
	release: (p1: any) => void;
}
declare var ATSFontQuerySourceContext: ATSFontQuerySourceContext;

interface ATSGlyphIdealMetrics {
	advance: CGPoint;
	sideBearing: CGPoint;
	otherSideBearing: CGPoint;
}
declare var ATSGlyphIdealMetrics: ATSGlyphIdealMetrics;

interface ATSGlyphScreenMetrics {
	deviceAdvance: CGPoint;
	topLeft: CGPoint;
	height: number;
	width: number;
	sideBearing: CGPoint;
	otherSideBearing: CGPoint;
}
declare var ATSGlyphScreenMetrics: ATSGlyphScreenMetrics;

interface ATSJustWidthDeltaEntryOverride {
	beforeGrowLimit: number;
	beforeShrinkLimit: number;
	afterGrowLimit: number;
	afterShrinkLimit: number;
	growFlags: number;
	shrinkFlags: number;
}
declare var ATSJustWidthDeltaEntryOverride: ATSJustWidthDeltaEntryOverride;

interface ATSLayoutRecord {
	glyphID: number;
	flags: number;
	originalOffset: number;
	realPos: number;
}
declare var ATSLayoutRecord: ATSLayoutRecord;

interface ATSTrapezoid {
	upperLeft: FixedPoint;
	upperRight: FixedPoint;
	lowerRight: FixedPoint;
	lowerLeft: FixedPoint;
}
declare var ATSTrapezoid: ATSTrapezoid;

interface ATSUCurvePath {
	vectors: number;
	controlBits: number;
	vector: CGPoint;
}
declare var ATSUCurvePath: ATSUCurvePath;

interface ATSUCurvePaths {
	contours: number;
	contour: ATSUCurvePath;
}
declare var ATSUCurvePaths: ATSUCurvePaths;

interface ATSULayoutOperationOverrideSpecifier {
	operationSelector: number;
	overrideUPP: (p1: number, p2: any, p3: any, p4: any, p5: number) => number;
}
declare var ATSULayoutOperationOverrideSpecifier: ATSULayoutOperationOverrideSpecifier;

enum AXCopyMultipleAttributeOptions {

	kAXCopyMultipleAttributeOptionStopOnError = 1
}


enum AXError {

	kAXErrorSuccess = 0,

	kAXErrorFailure = -25200,

	kAXErrorIllegalArgument = -25201,

	kAXErrorInvalidUIElement = -25202,

	kAXErrorInvalidUIElementObserver = -25203,

	kAXErrorCannotComplete = -25204,

	kAXErrorAttributeUnsupported = -25205,

	kAXErrorActionUnsupported = -25206,

	kAXErrorNotificationUnsupported = -25207,

	kAXErrorNotImplemented = -25208,

	kAXErrorNotificationAlreadyRegistered = -25209,

	kAXErrorNotificationNotRegistered = -25210,

	kAXErrorAPIDisabled = -25211,

	kAXErrorNoValue = -25212,

	kAXErrorParameterizedAttributeUnsupported = -25213,

	kAXErrorNotEnoughPrecision = -25214
}


declare function AXIsProcessTrusted(): boolean;

declare function AXIsProcessTrustedWithOptions(options: NSDictionary<any, any>): boolean;

enum AXMenuItemModifiers {

	kAXMenuItemModifierNone = 0,

	kAXMenuItemModifierShift = 1,

	kAXMenuItemModifierOption = 2,

	kAXMenuItemModifierControl = 4,

	kAXMenuItemModifierNoCommand = 8
}


declare function AXObserverAddNotification(observer: any, element: any, notification: string, refcon: any): AXError;

declare function AXObserverCreate(application: number, callback: (p1: any, p2: any, p3: string, p4: any) => void, outObserver: any): AXError;

declare function AXObserverCreateWithInfoCallback(application: number, callback: (p1: any, p2: any, p3: string, p4: NSDictionary<any, any>, p5: any) => void, outObserver: any): AXError;

declare function AXObserverGetRunLoopSource(observer: any): any;

declare function AXObserverGetTypeID(): number;

declare function AXObserverRemoveNotification(observer: any, element: any, notification: string): AXError;

enum AXPriority {

	kAXPriorityLow = 10,

	kAXPriorityMedium = 50,

	kAXPriorityHigh = 90
}


declare function AXUIElementCopyActionDescription(element: any, action: string, description: string): AXError;

declare function AXUIElementCopyActionNames(element: any, names: NSArray<any>): AXError;

declare function AXUIElementCopyAttributeNames(element: any, names: NSArray<any>): AXError;

declare function AXUIElementCopyAttributeValue(element: any, attribute: string, value: any): AXError;

declare function AXUIElementCopyAttributeValues(element: any, attribute: string, index: number, maxValues: number, values: NSArray<any>): AXError;

declare function AXUIElementCopyElementAtPosition(application: any, x: number, y: number, element: any): AXError;

declare function AXUIElementCopyMultipleAttributeValues(element: any, attributes: NSArray<any> | any[], options: AXCopyMultipleAttributeOptions, values: NSArray<any>): AXError;

declare function AXUIElementCopyParameterizedAttributeNames(element: any, names: NSArray<any>): AXError;

declare function AXUIElementCopyParameterizedAttributeValue(element: any, parameterizedAttribute: string, parameter: any, result: any): AXError;

declare function AXUIElementCreateApplication(pid: number): any;

declare function AXUIElementCreateSystemWide(): any;

declare function AXUIElementGetAttributeValueCount(element: any, attribute: string, count: number): AXError;

declare function AXUIElementGetPid(element: any, pid: number): AXError;

declare function AXUIElementGetTypeID(): number;

declare function AXUIElementIsAttributeSettable(element: any, attribute: string, settable: string | any): AXError;

declare function AXUIElementPerformAction(element: any, action: string): AXError;

declare function AXUIElementSetAttributeValue(element: any, attribute: string, value: any): AXError;

declare function AXUIElementSetMessagingTimeout(element: any, timeoutInSeconds: number): AXError;

enum AXUnderlineStyle {

	kAXUnderlineStyleNone = 0,

	kAXUnderlineStyleSingle = 1,

	kAXUnderlineStyleThick = 2,

	kAXUnderlineStyleDouble = 9
}


declare function AXValueCreate(theType: AXValueType, valuePtr: any): any;

declare function AXValueGetType(value: any): AXValueType;

declare function AXValueGetTypeID(): number;

declare function AXValueGetValue(value: any, theType: AXValueType, valuePtr: any): boolean;

enum AXValueType {

	kAXValueTypeCGPoint = 1,

	kAXValueTypeCGSize = 2,

	kAXValueTypeCGRect = 3,

	kAXValueTypeCFRange = 4,

	kAXValueTypeAXError = 5,

	kAXValueTypeIllegal = 0
}


interface AppParameters {
	theMsgEvent: { what: number; message: number; when: number; where: Point; modifiers: number; };
	eventRefCon: number;
	messageLength: number;
}
declare var AppParameters: AppParameters;

interface AsscEntry {
	fontSize: number;
	fontStyle: number;
	fontID: number;
}
declare var AsscEntry: AsscEntry;

interface BitMap {
	baseAddr: string;
	rowBytes: number;
	bounds: Rect;
}
declare var BitMap: BitMap;

interface CM2Header {
	size: number;
	CMMType: number;
	profileVersion: number;
	profileClass: number;
	dataColorSpace: number;
	profileConnectionSpace: number;
	dateTime: CMDateTime;
	CS2profileSignature: number;
	platform: number;
	flags: number;
	deviceManufacturer: number;
	deviceModel: number;
	deviceAttributes: number;
	renderingIntent: number;
	white: CMFixedXYZColor;
	creator: number;
	reserved: number;
}
declare var CM2Header: CM2Header;

interface CM2Profile {
	header: CM2Header;
	tagTable: CMTagElemTable;
	elemData: number;
}
declare var CM2Profile: CM2Profile;

interface CM4Header {
	size: number;
	CMMType: number;
	profileVersion: number;
	profileClass: number;
	dataColorSpace: number;
	profileConnectionSpace: number;
	dateTime: CMDateTime;
	CS2profileSignature: number;
	platform: number;
	flags: number;
	deviceManufacturer: number;
	deviceModel: number;
	deviceAttributes: number;
	renderingIntent: number;
	white: CMFixedXYZColor;
	creator: number;
	digest: number;
	reserved: number;
}
declare var CM4Header: CM4Header;

interface CMAdaptationMatrixType {
	typeDescriptor: number;
	reserved: number;
	adaptationMatrix: number;
}
declare var CMAdaptationMatrixType: CMAdaptationMatrixType;

interface CMBitmap {
	image: string;
	width: number;
	height: number;
	rowBytes: number;
	pixelSize: number;
	space: number;
	user1: number;
	user2: number;
}
declare var CMBitmap: CMBitmap;

interface CMBufferLocation {
	buffer: any;
	size: number;
}
declare var CMBufferLocation: CMBufferLocation;

interface CMCMYColor {
	cyan: number;
	magenta: number;
	yellow: number;
}
declare var CMCMYColor: CMCMYColor;

interface CMCMYKColor {
	cyan: number;
	magenta: number;
	yellow: number;
	black: number;
}
declare var CMCMYKColor: CMCMYKColor;

interface CMConcatProfileSet {
	keyIndex: number;
	count: number;
	profileSet: any;
}
declare var CMConcatProfileSet: CMConcatProfileSet;

interface CMCurveType {
	typeDescriptor: number;
	reserved: number;
	countValue: number;
	data: number;
}
declare var CMCurveType: CMCurveType;

interface CMDataType {
	typeDescriptor: number;
	reserved: number;
	dataFlag: number;
	data: number;
}
declare var CMDataType: CMDataType;

interface CMDateTime {
	year: number;
	month: number;
	dayOfTheMonth: number;
	hours: number;
	minutes: number;
	seconds: number;
}
declare var CMDateTime: CMDateTime;

interface CMDateTimeType {
	typeDescriptor: number;
	reserved: number;
	dateTime: CMDateTime;
}
declare var CMDateTimeType: CMDateTimeType;

interface CMDeviceInfo {
	dataVersion: number;
	deviceClass: number;
	deviceID: number;
	deviceScope: CMDeviceScope;
	deviceState: number;
	defaultProfileID: number;
	deviceName: NSDictionary<any, any>;
	profileCount: number;
	reserved: number;
}
declare var CMDeviceInfo: CMDeviceInfo;

interface CMDeviceScope {
	deviceUser: string;
	deviceHost: string;
}
declare var CMDeviceScope: CMDeviceScope;

interface CMFixedXYColor {
	x: number;
	y: number;
}
declare var CMFixedXYColor: CMFixedXYColor;

interface CMFixedXYZColor {
	X: number;
	Y: number;
	Z: number;
}
declare var CMFixedXYZColor: CMFixedXYZColor;

interface CMFloatBitmap {
	version: number;
	buffers: number;
	height: number;
	width: number;
	rowStride: number;
	colStride: number;
	space: number;
	flags: CMFloatBitmapFlags;
}
declare var CMFloatBitmap: CMFloatBitmap;

enum CMFloatBitmapFlags {

	kCMFloatBitmapFlagsNone = 0,

	kCMFloatBitmapFlagsAlpha = 1,

	kCMFloatBitmapFlagsAlphaPremul = 2,

	kCMFloatBitmapFlagsRangeClipped = 4
}


interface CMGrayColor {
	gray: number;
}
declare var CMGrayColor: CMGrayColor;

interface CMHLSColor {
	hue: number;
	lightness: number;
	saturation: number;
}
declare var CMHLSColor: CMHLSColor;

interface CMHSVColor {
	hue: number;
	saturation: number;
	value: number;
}
declare var CMHSVColor: CMHSVColor;

interface CMHandleLocation {
	h: string;
}
declare var CMHandleLocation: CMHandleLocation;

interface CMIntentCRDVMSize {
	renderingIntent: number;
	VMSize: number;
}
declare var CMIntentCRDVMSize: CMIntentCRDVMSize;

interface CMLabColor {
	L: number;
	a: number;
	b: number;
}
declare var CMLabColor: CMLabColor;

interface CMLut16Type {
	typeDescriptor: number;
	reserved: number;
	inputChannels: number;
	outputChannels: number;
	gridPoints: number;
	reserved2: number;
	matrix: number;
	inputTableEntries: number;
	outputTableEntries: number;
	inputTable: number;
}
declare var CMLut16Type: CMLut16Type;

interface CMLut8Type {
	typeDescriptor: number;
	reserved: number;
	inputChannels: number;
	outputChannels: number;
	gridPoints: number;
	reserved2: number;
	matrix: number;
	inputTable: number;
}
declare var CMLut8Type: CMLut8Type;

interface CMLuvColor {
	L: number;
	u: number;
	v: number;
}
declare var CMLuvColor: CMLuvColor;

interface CMMInfo {
	dataSize: number;
	CMMType: number;
	CMMMfr: number;
	CMMVersion: number;
	ASCIIName: number;
	ASCIIDesc: number;
	UniCodeNameCount: number;
	UniCodeName: number;
	UniCodeDescCount: number;
	UniCodeDesc: number;
}
declare var CMMInfo: CMMInfo;

interface CMMakeAndModel {
	manufacturer: number;
	model: number;
	serialNumber: number;
	manufactureDate: number;
	reserved1: number;
	reserved2: number;
	reserved3: number;
	reserved4: number;
}
declare var CMMakeAndModel: CMMakeAndModel;

interface CMMakeAndModelType {
	typeDescriptor: number;
	reserved: number;
	makeAndModel: CMMakeAndModel;
}
declare var CMMakeAndModelType: CMMakeAndModelType;

interface CMMeasurementType {
	typeDescriptor: number;
	reserved: number;
	standardObserver: number;
	backingXYZ: CMFixedXYZColor;
	geometry: number;
	flare: number;
	illuminant: number;
}
declare var CMMeasurementType: CMMeasurementType;

interface CMMultiFunctCLUTType {
	gridPoints: number;
	entrySize: number;
	reserved: number;
	data: number;
}
declare var CMMultiFunctCLUTType: CMMultiFunctCLUTType;

interface CMMultiFunctLutType {
	typeDescriptor: number;
	reserved: number;
	inputChannels: number;
	outputChannels: number;
	reserved2: number;
	offsetBcurves: number;
	offsetMatrix: number;
	offsetMcurves: number;
	offsetCLUT: number;
	offsetAcurves: number;
	data: number;
}
declare var CMMultiFunctLutType: CMMultiFunctLutType;

interface CMMultiLocalizedUniCodeEntryRec {
	languageCode: number;
	regionCode: number;
	textLength: number;
	textOffset: number;
}
declare var CMMultiLocalizedUniCodeEntryRec: CMMultiLocalizedUniCodeEntryRec;

interface CMMultiLocalizedUniCodeType {
	typeDescriptor: number;
	reserved: number;
	entryCount: number;
	entrySize: number;
}
declare var CMMultiLocalizedUniCodeType: CMMultiLocalizedUniCodeType;

interface CMMultichannel5Color {
	components: number;
}
declare var CMMultichannel5Color: CMMultichannel5Color;

interface CMMultichannel6Color {
	components: number;
}
declare var CMMultichannel6Color: CMMultichannel6Color;

interface CMMultichannel7Color {
	components: number;
}
declare var CMMultichannel7Color: CMMultichannel7Color;

interface CMMultichannel8Color {
	components: number;
}
declare var CMMultichannel8Color: CMMultichannel8Color;

interface CMNamedColor {
	namedColorIndex: number;
}
declare var CMNamedColor: CMNamedColor;

interface CMNamedColor2EntryType {
	rootName: number;
	PCSColorCoords: number;
	DeviceColorCoords: number;
}
declare var CMNamedColor2EntryType: CMNamedColor2EntryType;

interface CMNamedColor2Type {
	typeDescriptor: number;
	reserved: number;
	vendorFlag: number;
	count: number;
	deviceChannelCount: number;
	prefixName: number;
	suffixName: number;
	data: number;
}
declare var CMNamedColor2Type: CMNamedColor2Type;

interface CMNamedColorType {
	typeDescriptor: number;
	reserved: number;
	vendorFlag: number;
	count: number;
	prefixName: number;
}
declare var CMNamedColorType: CMNamedColorType;

interface CMNativeDisplayInfo {
	dataSize: number;
	redPhosphor: CMFixedXYColor;
	greenPhosphor: CMFixedXYColor;
	bluePhosphor: CMFixedXYColor;
	whitePoint: CMFixedXYColor;
	redGammaValue: number;
	greenGammaValue: number;
	blueGammaValue: number;
	gammaChannels: number;
	gammaEntryCount: number;
	gammaEntrySize: number;
	gammaData: number;
}
declare var CMNativeDisplayInfo: CMNativeDisplayInfo;

interface CMNativeDisplayInfoType {
	typeDescriptor: number;
	reserved: number;
	nativeDisplayInfo: CMNativeDisplayInfo;
}
declare var CMNativeDisplayInfoType: CMNativeDisplayInfoType;

interface CMPS2CRDVMSizeType {
	typeDescriptor: number;
	reserved: number;
	count: number;
	intentCRD: CMIntentCRDVMSize;
}
declare var CMPS2CRDVMSizeType: CMPS2CRDVMSizeType;

interface CMParametricCurveType {
	typeDescriptor: number;
	reserved: number;
	functionType: number;
	reserved2: number;
	value: number;
}
declare var CMParametricCurveType: CMParametricCurveType;

interface CMPathLocation {
	path: number;
}
declare var CMPathLocation: CMPathLocation;

interface CMProfileSequenceDescType {
	typeDescriptor: number;
	reserved: number;
	count: number;
	data: number;
}
declare var CMProfileSequenceDescType: CMProfileSequenceDescType;

interface CMRGBColor {
	red: number;
	green: number;
	blue: number;
}
declare var CMRGBColor: CMRGBColor;

interface CMS15Fixed16ArrayType {
	typeDescriptor: number;
	reserved: number;
	value: number;
}
declare var CMS15Fixed16ArrayType: CMS15Fixed16ArrayType;

interface CMScreeningChannelRec {
	frequency: number;
	angle: number;
	spotFunction: number;
}
declare var CMScreeningChannelRec: CMScreeningChannelRec;

interface CMScreeningType {
	typeDescriptor: number;
	reserved: number;
	screeningFlag: number;
	channelCount: number;
	channelInfo: CMScreeningChannelRec;
}
declare var CMScreeningType: CMScreeningType;

interface CMSignatureType {
	typeDescriptor: number;
	reserved: number;
	signature: number;
}
declare var CMSignatureType: CMSignatureType;

interface CMTagElemTable {
	count: number;
	tagList: CMTagRecord;
}
declare var CMTagElemTable: CMTagElemTable;

interface CMTagRecord {
	tag: number;
	elementOffset: number;
	elementSize: number;
}
declare var CMTagRecord: CMTagRecord;

interface CMTextDescriptionType {
	typeDescriptor: number;
	reserved: number;
	ASCIICount: number;
	ASCIIName: number;
}
declare var CMTextDescriptionType: CMTextDescriptionType;

interface CMTextType {
	typeDescriptor: number;
	reserved: number;
	text: number;
}
declare var CMTextType: CMTextType;

interface CMU16Fixed16ArrayType {
	typeDescriptor: number;
	reserved: number;
	value: number;
}
declare var CMU16Fixed16ArrayType: CMU16Fixed16ArrayType;

interface CMUInt16ArrayType {
	typeDescriptor: number;
	reserved: number;
	value: number;
}
declare var CMUInt16ArrayType: CMUInt16ArrayType;

interface CMUInt32ArrayType {
	typeDescriptor: number;
	reserved: number;
	value: number;
}
declare var CMUInt32ArrayType: CMUInt32ArrayType;

interface CMUInt64ArrayType {
	typeDescriptor: number;
	reserved: number;
	value: number;
}
declare var CMUInt64ArrayType: CMUInt64ArrayType;

interface CMUInt8ArrayType {
	typeDescriptor: number;
	reserved: number;
	value: number;
}
declare var CMUInt8ArrayType: CMUInt8ArrayType;

interface CMUcrBgType {
	typeDescriptor: number;
	reserved: number;
	ucrCount: number;
	ucrValues: number;
}
declare var CMUcrBgType: CMUcrBgType;

interface CMUnicodeTextType {
	typeDescriptor: number;
	reserved: number;
	text: number;
}
declare var CMUnicodeTextType: CMUnicodeTextType;

interface CMVideoCardGammaFormula {
	redGamma: number;
	redMin: number;
	redMax: number;
	greenGamma: number;
	greenMin: number;
	greenMax: number;
	blueGamma: number;
	blueMin: number;
	blueMax: number;
}
declare var CMVideoCardGammaFormula: CMVideoCardGammaFormula;

interface CMVideoCardGammaTable {
	channels: number;
	entryCount: number;
	entrySize: number;
	data: number;
}
declare var CMVideoCardGammaTable: CMVideoCardGammaTable;

interface CMViewingConditionsType {
	typeDescriptor: number;
	reserved: number;
	illuminant: CMFixedXYZColor;
	surround: CMFixedXYZColor;
	stdIlluminant: number;
}
declare var CMViewingConditionsType: CMViewingConditionsType;

interface CMXYZColor {
	X: number;
	Y: number;
	Z: number;
}
declare var CMXYZColor: CMXYZColor;

interface CMXYZType {
	typeDescriptor: number;
	reserved: number;
	XYZ: CMFixedXYZColor;
}
declare var CMXYZType: CMXYZType;

interface CMYxyColor {
	capY: number;
	x: number;
	y: number;
}
declare var CMYxyColor: CMYxyColor;

interface CQDProcs {
	textProc: (p1: number, p2: any, p3: Point, p4: Point) => void;
	lineProc: (p1: Point) => void;
	rectProc: (p1: number, p2: Rect) => void;
	rRectProc: (p1: number, p2: Rect, p3: number, p4: number) => void;
	ovalProc: (p1: number, p2: Rect) => void;
	arcProc: (p1: number, p2: Rect, p3: number, p4: number) => void;
	polyProc: (p1: number, p2: MacPolygon) => void;
	rgnProc: (p1: number, p2: any) => void;
	bitsProc: (p1: BitMap, p2: Rect, p3: Rect, p4: number, p5: any) => void;
	commentProc: (p1: number, p2: number, p3: string) => void;
	txMeasProc: (p1: number, p2: any, p3: Point, p4: Point, p5: FontInfo) => number;
	getPicProc: (p1: any, p2: number) => void;
	putPicProc: (p1: any, p2: number) => void;
	opcodeProc: (p1: Rect, p2: Rect, p3: number, p4: number) => void;
	newProc1: () => number;
	glyphsProc: (p1: any, p2: number) => number;
	printerStatusProc: (p1: number, p2: any, p3: any) => number;
	newProc4: () => number;
	newProc5: () => number;
	newProc6: () => number;
}
declare var CQDProcs: CQDProcs;

declare const CS_MAX_PATH: number;

interface ColorSpec {
	value: number;
	rgb: RGBColor;
}
declare var ColorSpec: ColorSpec;

interface ColorTable {
	ctSeed: number;
	ctFlags: number;
	ctSize: number;
	ctTable: ColorSpec;
}
declare var ColorTable: ColorTable;

declare function ContinueSpeech(chan: SpeechChannelRecord): number;

declare function CopyPhonemesFromText(chan: SpeechChannelRecord, text: string, phonemes: string): number;

declare function CopySpeechProperty(chan: SpeechChannelRecord, property: string, object_: any): number;

declare function CountVoices(numVoices: number): number;

interface DCMDictionaryHeader {
	headerSignature: number;
	headerVersion: number;
	headerSize: number;
	accessMethod: number;
}
declare var DCMDictionaryHeader: DCMDictionaryHeader;

interface DelimiterInfo {
	startDelimiter: number;
	endDelimiter: number;
}
declare var DelimiterInfo: DelimiterInfo;

declare function DisposeIconActionUPP(userUPP: (p1: number, p2: string, p3: any) => number): void;

declare function DisposeIconGetterUPP(userUPP: (p1: number, p2: any) => string): void;

declare function DisposeSpeechChannel(chan: SpeechChannelRecord): number;

interface FMFontDirectoryFilter {
	fontFolderDomain: number;
	reserved: number;
}
declare var FMFontDirectoryFilter: FMFontDirectoryFilter;

interface FMFontFamilyInstance {
	fontFamily: number;
	fontStyle: number;
}
declare var FMFontFamilyInstance: FMFontFamilyInstance;

interface FMFontFamilyInstanceIterator {
	reserved: number;
}
declare var FMFontFamilyInstanceIterator: FMFontFamilyInstanceIterator;

interface FMFontFamilyIterator {
	reserved: number;
}
declare var FMFontFamilyIterator: FMFontFamilyIterator;

interface FMFontIterator {
	reserved: number;
}
declare var FMFontIterator: FMFontIterator;

interface FMInput {
	family: number;
	size: number;
	face: number;
	needBits: boolean;
	device: number;
	numer: Point;
	denom: Point;
}
declare var FMInput: FMInput;

interface FamRec {
	ffFlags: number;
	ffFamID: number;
	ffFirstChar: number;
	ffLastChar: number;
	ffAscent: number;
	ffDescent: number;
	ffLeading: number;
	ffWidMax: number;
	ffWTabOff: number;
	ffKernOff: number;
	ffStylOff: number;
	ffProperty: number;
	ffIntl: number;
	ffVersion: number;
}
declare var FamRec: FamRec;

interface FontAssoc {
	numAssoc: number;
}
declare var FontAssoc: FontAssoc;

interface FontInfo {
	ascent: number;
	descent: number;
	widMax: number;
	leading: number;
}
declare var FontInfo: FontInfo;

interface FontRec {
	fontType: number;
	firstChar: number;
	lastChar: number;
	widMax: number;
	kernMax: number;
	nDescent: number;
	fRectWidth: number;
	fRectHeight: number;
	owTLoc: number;
	ascent: number;
	descent: number;
	leading: number;
	rowWords: number;
}
declare var FontRec: FontRec;

interface GDevice {
	gdRefNum: number;
	gdID: number;
	gdType: number;
	gdITable: string;
	gdResPref: number;
	gdSearchProc: string;
	gdCompProc: string;
	gdFlags: number;
	gdPMap: PixMap;
	gdRefCon: number;
	gdNextGD: GDevice;
	gdRect: Rect;
	gdMode: number;
	gdCCBytes: number;
	gdCCDepth: number;
	gdCCXData: string;
	gdCCXMask: string;
	gdExt: string;
}
declare var GDevice: GDevice;

declare function GetIconFamilyData(iconFamily: IconFamilyResource, iconType: number, h: string): number;

declare function GetIconRefVariant(inIconRef: any, inVariant: number, outTransform: number): any;

declare function GetIndVoice(index: number, voice: VoiceSpec): number;

declare function GetSpeechPitch(chan: SpeechChannelRecord, pitch: number): number;

declare function GetSpeechRate(chan: SpeechChannelRecord, rate: number): number;

declare function GetVoiceDescription(voice: VoiceSpec, info: VoiceDescription, infoLength: number): number;

declare function GetVoiceInfo(voice: VoiceSpec, selector: number, voiceInfo: any): number;

interface GrafPort {
	whatever: number;
}
declare var GrafPort: GrafPort;

declare function HIShapeContainsPoint(inShape: any, inPoint: CGPoint): boolean;

declare function HIShapeCreateCopy(inShape: any): any;

declare function HIShapeCreateDifference(inShape1: any, inShape2: any): any;

declare function HIShapeCreateEmpty(): any;

declare function HIShapeCreateIntersection(inShape1: any, inShape2: any): any;

declare function HIShapeCreateMutable(): any;

declare function HIShapeCreateMutableCopy(inOrig: any): any;

declare function HIShapeCreateMutableWithRect(inRect: CGRect): any;

declare function HIShapeCreateUnion(inShape1: any, inShape2: any): any;

declare function HIShapeCreateWithQDRgn(inRgn: any): any;

declare function HIShapeCreateWithRect(inRect: CGRect): any;

declare function HIShapeCreateXor(inShape1: any, inShape2: any): any;

declare function HIShapeDifference(inShape1: any, inShape2: any, outResult: any): number;

declare function HIShapeEnumerate(inShape: any, inOptions: number, inProc: (p1: number, p2: any, p3: CGRect, p4: any) => number, inRefcon: any): number;

declare function HIShapeGetAsQDRgn(inShape: any, outRgn: any): number;

declare function HIShapeGetBounds(inShape: any, outRect: CGRect): CGRect;

declare function HIShapeGetTypeID(): number;

declare function HIShapeInset(inShape: any, inDX: number, inDY: number): number;

declare function HIShapeIntersect(inShape1: any, inShape2: any, outResult: any): number;

declare function HIShapeIntersectsRect(inShape: any, inRect: CGRect): boolean;

declare function HIShapeIsEmpty(inShape: any): boolean;

declare function HIShapeIsRectangular(inShape: any): boolean;

declare function HIShapeOffset(inShape: any, inDX: number, inDY: number): number;

declare function HIShapeReplacePathInCGContext(inShape: any, inContext: any): number;

declare function HIShapeSetEmpty(inShape: any): number;

declare function HIShapeSetWithShape(inDestShape: any, inSrcShape: any): number;

declare function HIShapeUnion(inShape1: any, inShape2: any, outResult: any): number;

declare function HIShapeUnionWithRect(inShape: any, inRect: CGRect): number;

declare function HIShapeXor(inShape1: any, inShape2: any, outResult: any): number;

interface HomographDicInfoRec {
	dictionaryID: any;
	uniqueID: number;
}
declare var HomographDicInfoRec: HomographDicInfoRec;

interface ICAppSpec {
	fCreator: number;
	name: number;
}
declare var ICAppSpec: ICAppSpec;

interface ICAppSpecList {
	numberOfItems: number;
	appSpecs: ICAppSpec;
}
declare var ICAppSpecList: ICAppSpecList;

interface ICCharTable {
	netToMac: number;
	macToNet: number;
}
declare var ICCharTable: ICCharTable;

interface ICFileSpec {
	volName: number;
	volCreationDate: number;
	fss: FSSpec;
	alias: AliasRecord;
}
declare var ICFileSpec: ICFileSpec;

interface ICFontRecord {
	size: number;
	face: number;
	pad: number;
	font: number;
}
declare var ICFontRecord: ICFontRecord;

interface ICMapEntry {
	totalLength: number;
	fixedLength: number;
	version: number;
	fileType: number;
	fileCreator: number;
	postCreator: number;
	flags: number;
	extension: number;
	creatorAppName: number;
	postAppName: number;
	MIMEType: number;
	entryName: number;
}
declare var ICMapEntry: ICMapEntry;

interface ICServiceEntry {
	name: number;
	port: number;
	flags: number;
}
declare var ICServiceEntry: ICServiceEntry;

interface ICServices {
	count: number;
	services: ICServiceEntry;
}
declare var ICServices: ICServices;

declare function IconRefContainsCGPoint(testPt: CGPoint, iconRect: CGRect, align: number, iconServicesUsageFlags: number, theIconRef: any): boolean;

declare function IconRefIntersectsCGRect(testRect: CGRect, iconRect: CGRect, align: number, iconServicesUsageFlags: number, theIconRef: any): boolean;

declare function IconRefToHIShape(iconRect: CGRect, align: number, iconServicesUsageFlags: number, theIconRef: any): any;

declare function IconRefToIconFamily(theIconRef: any, whichIcons: number, iconFamily: IconFamilyResource): number;

declare function InvokeIconActionUPP(theType: number, theIcon: string, yourDataPtr: any, userUPP: (p1: number, p2: string, p3: any) => number): number;

declare function InvokeIconGetterUPP(theType: number, yourDataPtr: any, userUPP: (p1: number, p2: any) => string): string;

declare function IsIconRefMaskEmpty(iconRef: any): boolean;

interface KernEntry {
	kernStyle: number;
	kernLength: number;
}
declare var KernEntry: KernEntry;

interface KernPair {
	kernFirst: number;
	kernSecond: number;
	kernWidth: number;
}
declare var KernPair: KernPair;

interface KernTable {
	numKerns: number;
}
declare var KernTable: KernTable;

interface LAMorphemeRec {
	sourceTextLength: number;
	sourceTextPtr: any;
	morphemeTextLength: number;
	morphemeTextPtr: any;
	partOfSpeech: number;
}
declare var LAMorphemeRec: LAMorphemeRec;

interface LAMorphemesArray {
	morphemesCount: number;
	processedTextLength: number;
	morphemesTextLength: number;
	morphemes: LAMorphemeRec;
}
declare var LAMorphemesArray: LAMorphemesArray;

interface LaunchParamBlockRec {
	reserved1: number;
	reserved2: number;
	launchBlockID: number;
	launchEPBLength: number;
	launchFileFlags: number;
	launchControlFlags: number;
	launchAppRef: FSRef;
	launchProcessSN: ProcessSerialNumber;
	launchPreferredSize: number;
	launchMinimumSize: number;
	launchAvailableSize: number;
	launchAppParameters: AppParameters;
}
declare var LaunchParamBlockRec: LaunchParamBlockRec;

interface MacPolygon {
	polySize: number;
	polyBBox: Rect;
	polyPoints: Point;
}
declare var MacPolygon: MacPolygon;

declare function MakeVoiceSpec(creator: number, id: number, voice: VoiceSpec): number;

interface MorphemeTextRange {
	sourceOffset: number;
	length: number;
}
declare var MorphemeTextRange: MorphemeTextRange;

interface NCMConcatProfileSet {
	cmm: number;
	flags: number;
	flagsMask: number;
	profileCount: number;
	profileSpecs: NCMConcatProfileSpec;
}
declare var NCMConcatProfileSet: NCMConcatProfileSet;

interface NCMConcatProfileSpec {
	renderingIntent: number;
	transformTag: number;
	profile: any;
}
declare var NCMConcatProfileSpec: NCMConcatProfileSpec;

interface NameTable {
	stringCount: number;
	baseFontName: number;
}
declare var NameTable: NameTable;

declare function NewIconActionUPP(userRoutine: (p1: number, p2: string, p3: any) => number): (p1: number, p2: string, p3: any) => number;

declare function NewIconGetterUPP(userRoutine: (p1: number, p2: any) => string): (p1: number, p2: any) => string;

declare function NewSpeechChannel(voice: VoiceSpec, chan: SpeechChannelRecord): number;

interface OpenCPicParams {
	srcRect: Rect;
	hRes: number;
	vRes: number;
	version: number;
	reserved1: number;
	reserved2: number;
}
declare var OpenCPicParams: OpenCPicParams;

declare function PMCGImageCreateWithEPSDataProvider(epsDataProvider: any, epsPreview: any): any;

declare function PMCopyAvailablePPDs(domain: number, ppds: NSArray<any>): number;

declare function PMCopyLocalizedPPD(ppd: NSURL, localizedPPD: NSURL): number;

declare function PMCopyPPDData(ppd: NSURL, data: NSData): number;

declare function PMCopyPageFormat(formatSrc: any, formatDest: any): number;

declare function PMCopyPrintSettings(settingSrc: any, settingDest: any): number;

declare function PMCreateGenericPrinter(printer: any): number;

declare function PMCreatePageFormat(pageFormat: any): number;

declare function PMCreatePageFormatWithPMPaper(pageFormat: any, paper: any): number;

declare function PMCreatePrintSettings(printSettings: any): number;

declare function PMCreateSession(printSession: any): number;

enum PMDataFormat {

	kPMDataFormatXMLDefault = 0,

	kPMDataFormatXMLMinimal = 1,

	kPMDataFormatXMLCompressed = 2
}


declare function PMGetAdjustedPageRect(pageFormat: any, pageRect: PMRect): number;

declare function PMGetAdjustedPaperRect(pageFormat: any, paperRect: PMRect): number;

declare function PMGetCollate(printSettings: any, collate: string | any): number;

declare function PMGetCopies(printSettings: any, copies: number): number;

declare function PMGetDuplex(printSettings: any, duplexSetting: number): number;

declare function PMGetFirstPage(printSettings: any, first: number): number;

declare function PMGetLastPage(printSettings: any, last: number): number;

declare function PMGetOrientation(pageFormat: any, orientation: number): number;

declare function PMGetPageFormatExtendedData(pageFormat: any, dataID: number, size: number, extendedData: any): number;

declare function PMGetPageFormatPaper(format: any, paper: any): number;

declare function PMGetPageRange(printSettings: any, minPage: number, maxPage: number): number;

declare function PMGetScale(pageFormat: any, scale: number): number;

declare function PMGetUnadjustedPageRect(pageFormat: any, pageRect: PMRect): number;

declare function PMGetUnadjustedPaperRect(pageFormat: any, paperRect: PMRect): number;

interface PMLanguageInfo {
	level: number;
	version: number;
	release: number;
}
declare var PMLanguageInfo: PMLanguageInfo;

declare function PMPageFormatCreateDataRepresentation(pageFormat: any, data: NSData, format: PMDataFormat): number;

declare function PMPageFormatCreateWithDataRepresentation(data: NSData, pageFormat: any): number;

declare function PMPageFormatGetPrinterID(pageFormat: any, printerID: string): number;

enum PMPageToPaperMappingType {

	kPMPageToPaperMappingNone = 1,

	kPMPageToPaperMappingScaleToFit = 2
}


declare function PMPaperCreateCustom(printer: any, id: string, name: string, width: number, height: number, margins: PMRect, paperP: any): number;

declare function PMPaperCreateLocalizedName(paper: any, printer: any, paperName: string): number;

declare function PMPaperGetHeight(paper: any, paperHeight: number): number;

declare function PMPaperGetID(paper: any, paperID: string): number;

declare function PMPaperGetMargins(paper: any, paperMargins: PMRect): number;

declare function PMPaperGetPPDPaperName(paper: any, paperName: string): number;

declare function PMPaperGetPrinterID(paper: any, printerID: string): number;

declare function PMPaperGetWidth(paper: any, paperWidth: number): number;

declare function PMPaperIsCustom(paper: any): boolean;

declare function PMPresetCopyName(preset: any, name: string): number;

declare function PMPresetCreatePrintSettings(preset: any, session: any, printSettings: any): number;

declare function PMPresetGetAttributes(preset: any, attributes: NSDictionary<any, any>): number;

declare function PMPrintSettingsCopyAsDictionary(printSettings: any, settingsDictionary: NSDictionary<any, any>): number;

declare function PMPrintSettingsCopyKeys(printSettings: any, settingsKeys: NSArray<any>): number;

declare function PMPrintSettingsCreateDataRepresentation(printSettings: any, data: NSData, format: PMDataFormat): number;

declare function PMPrintSettingsCreateWithDataRepresentation(data: NSData, printSettings: any): number;

declare function PMPrintSettingsGetJobName(printSettings: any, name: string): number;

declare function PMPrintSettingsGetValue(printSettings: any, key: string, value: any): number;

declare function PMPrintSettingsSetJobName(printSettings: any, name: string): number;

declare function PMPrintSettingsSetValue(printSettings: any, key: string, value: any, locked: boolean): number;

declare function PMPrintSettingsToOptions(settings: any, options: string): number;

declare function PMPrintSettingsToOptionsWithPrinterAndPageFormat(settings: any, printer: any, pageFormat: any, options: string): number;

declare function PMPrinterCopyDescriptionURL(printer: any, descriptionType: string, fileURL: NSURL): number;

declare function PMPrinterCopyDeviceURI(printer: any, deviceURI: NSURL): number;

declare function PMPrinterCopyHostName(printer: any, hostNameP: string): number;

declare function PMPrinterCopyPresets(printer: any, presetList: NSArray<any>): number;

declare function PMPrinterCopyState(printer: any, stateDict: NSDictionary<any, any>): number;

declare function PMPrinterCreateFromPrinterID(printerID: string): any;

declare function PMPrinterGetCommInfo(printer: any, supportsControlCharRangeP: string | any, supportsEightBitP: string | any): number;

declare function PMPrinterGetDriverCreator(printer: any, creator: number): number;

declare function PMPrinterGetDriverReleaseInfo(printer: any, release: VersRec): number;

declare function PMPrinterGetID(printer: any): string;

declare function PMPrinterGetIndexedPrinterResolution(printer: any, index: number, resolutionP: PMResolution): number;

declare function PMPrinterGetLanguageInfo(printer: any, info: PMLanguageInfo): number;

declare function PMPrinterGetLocation(printer: any): string;

declare function PMPrinterGetMakeAndModelName(printer: any, makeAndModel: string): number;

declare function PMPrinterGetMimeTypes(printer: any, settings: any, mimeTypes: NSArray<any>): number;

declare function PMPrinterGetName(printer: any): string;

declare function PMPrinterGetOutputResolution(printer: any, printSettings: any, resolutionP: PMResolution): number;

declare function PMPrinterGetPaperList(printer: any, paperList: NSArray<any>): number;

declare function PMPrinterGetPrinterResolutionCount(printer: any, countP: number): number;

declare function PMPrinterGetState(printer: any, state: number): number;

declare function PMPrinterIsDefault(printer: any): boolean;

declare function PMPrinterIsFavorite(printer: any): boolean;

declare function PMPrinterIsPostScriptCapable(printer: any): boolean;

declare function PMPrinterIsPostScriptPrinter(printer: any, isPSPrinter: string | any): number;

declare function PMPrinterIsRemote(printer: any, isRemoteP: string | any): number;

declare function PMPrinterPrintWithFile(printer: any, settings: any, format: any, mimeType: string, fileURL: NSURL): number;

declare function PMPrinterPrintWithProvider(printer: any, settings: any, format: any, mimeType: string, provider: any): number;

declare function PMPrinterSendCommand(printer: any, commandString: string, jobTitle: string, options: NSDictionary<any, any>): number;

declare function PMPrinterSetDefault(printer: any): number;

declare function PMPrinterSetOutputResolution(printer: any, printSettings: any, resolutionP: PMResolution): number;

declare function PMPrinterWritePostScriptToURL(printer: any, settings: any, format: any, mimeType: string, sourceFileURL: NSURL, destinationFileURL: NSURL): number;

interface PMRect {
	top: number;
	left: number;
	bottom: number;
	right: number;
}
declare var PMRect: PMRect;

declare function PMRelease(object_: any): number;

interface PMResolution {
	hRes: number;
	vRes: number;
}
declare var PMResolution: PMResolution;

declare function PMRetain(object_: any): number;

declare function PMServerCreatePrinterList(server: any, printerList: NSArray<any>): number;

declare function PMServerLaunchPrinterBrowser(server: any, options: NSDictionary<any, any>): number;

declare function PMSessionBeginCGDocumentNoDialog(printSession: any, printSettings: any, pageFormat: any): number;

declare function PMSessionBeginPageNoDialog(printSession: any, pageFormat: any, pageFrame: PMRect): number;

declare function PMSessionCopyDestinationFormat(printSession: any, printSettings: any, destFormatP: string): number;

declare function PMSessionCopyDestinationLocation(printSession: any, printSettings: any, destLocationP: NSURL): number;

declare function PMSessionCopyOutputFormatList(printSession: any, destType: number, documentFormatP: NSArray<any>): number;

declare function PMSessionCreatePageFormatList(printSession: any, printer: any, pageFormatList: NSArray<any>): number;

declare function PMSessionCreatePrinterList(printSession: any, printerList: NSArray<any>, currentIndex: number, currentPrinter: any): number;

declare function PMSessionDefaultPageFormat(printSession: any, pageFormat: any): number;

declare function PMSessionDefaultPrintSettings(printSession: any, printSettings: any): number;

declare function PMSessionEndDocumentNoDialog(printSession: any): number;

declare function PMSessionEndPageNoDialog(printSession: any): number;

declare function PMSessionError(printSession: any): number;

declare function PMSessionGetCGGraphicsContext(printSession: any, context: any): number;

declare function PMSessionGetCurrentPrinter(printSession: any, currentPrinter: any): number;

declare function PMSessionGetDataFromSession(printSession: any, key: string, data: any): number;

declare function PMSessionGetDestinationType(printSession: any, printSettings: any, destTypeP: number): number;

declare function PMSessionSetCurrentPMPrinter(session: any, printer: any): number;

declare function PMSessionSetDataInSession(printSession: any, key: string, data: any): number;

declare function PMSessionSetDestination(printSession: any, printSettings: any, destType: number, destFormat: string, destLocation: NSURL): number;

declare function PMSessionSetError(printSession: any, printError: number): number;

declare function PMSessionValidatePageFormat(printSession: any, pageFormat: any, changed: string | any): number;

declare function PMSessionValidatePrintSettings(printSession: any, printSettings: any, changed: string | any): number;

declare function PMSetCollate(printSettings: any, collate: boolean): number;

declare function PMSetCopies(printSettings: any, copies: number, lock: boolean): number;

declare function PMSetDuplex(printSettings: any, duplexSetting: number): number;

declare function PMSetFirstPage(printSettings: any, first: number, lock: boolean): number;

declare function PMSetLastPage(printSettings: any, last: number, lock: boolean): number;

declare function PMSetOrientation(pageFormat: any, orientation: number, lock: boolean): number;

declare function PMSetPageFormatExtendedData(pageFormat: any, dataID: number, size: number, extendedData: any): number;

declare function PMSetPageRange(printSettings: any, minPage: number, maxPage: number): number;

declare function PMSetScale(pageFormat: any, scale: number): number;

declare function PMWorkflowCopyItems(workflowItems: NSArray<any>): number;

declare function PMWorkflowSubmitPDFWithOptions(workflowItem: NSURL, title: string, options: string | any, pdfFile: NSURL): number;

declare function PMWorkflowSubmitPDFWithSettings(workflowItem: NSURL, settings: any, pdfFile: NSURL): number;

declare function PasteboardClear(inPasteboard: any): number;

declare function PasteboardCopyItemFlavorData(inPasteboard: any, inItem: any, inFlavorType: string, outData: NSData): number;

declare function PasteboardCopyItemFlavors(inPasteboard: any, inItem: any, outFlavorTypes: NSArray<any>): number;

declare function PasteboardCopyName(inPasteboard: any, outName: string): number;

declare function PasteboardCopyPasteLocation(inPasteboard: any, outPasteLocation: NSURL): number;

declare function PasteboardCreate(inName: string, outPasteboard: any): number;

enum PasteboardFlavorFlags {

	kPasteboardFlavorNoFlags = 0,

	kPasteboardFlavorSenderOnly = 1,

	kPasteboardFlavorSenderTranslated = 2,

	kPasteboardFlavorNotSaved = 4,

	kPasteboardFlavorRequestOnly = 8,

	kPasteboardFlavorSystemTranslated = 256,

	kPasteboardFlavorPromised = 512
}


declare function PasteboardGetItemCount(inPasteboard: any, outItemCount: number): number;

declare function PasteboardGetItemFlavorFlags(inPasteboard: any, inItem: any, inFlavorType: string, outFlags: PasteboardFlavorFlags): number;

declare function PasteboardGetItemIdentifier(inPasteboard: any, inIndex: number, outItem: any): number;

declare function PasteboardGetTypeID(): number;

declare function PasteboardPutItemFlavor(inPasteboard: any, inItem: any, inFlavorType: string, inData: NSData, inFlags: PasteboardFlavorFlags): number;

declare function PasteboardResolvePromises(inPasteboard: any): number;

declare function PasteboardSetPasteLocation(inPasteboard: any, inPasteLocation: NSURL): number;

declare function PasteboardSetPromiseKeeper(inPasteboard: any, inPromiseKeeper: (p1: any, p2: any, p3: string, p4: any) => number, inContext: any): number;

enum PasteboardStandardLocation {

	kPasteboardStandardLocationTrash = 1953657704,

	kPasteboardStandardLocationUnknown = 1970170734
}


enum PasteboardSyncFlags {

	kPasteboardModified = 1,

	kPasteboardClientIsOwner = 2
}


declare function PasteboardSynchronize(inPasteboard: any): PasteboardSyncFlags;

interface Pattern {
	pat: number;
}
declare var Pattern: Pattern;

declare function PauseSpeechAt(chan: SpeechChannelRecord, whereToPause: number): number;

interface PhonemeDescriptor {
	phonemeCount: number;
	thePhonemes: PhonemeInfo;
}
declare var PhonemeDescriptor: PhonemeDescriptor;

interface PhonemeInfo {
	opcode: number;
	phStr: number;
	exampleStr: number;
	hiliteStart: number;
	hiliteEnd: number;
}
declare var PhonemeInfo: PhonemeInfo;

interface Picture {
	picSize: number;
	picFrame: Rect;
}
declare var Picture: Picture;

interface PixMap {
	baseAddr: string;
	rowBytes: number;
	bounds: Rect;
	pmVersion: number;
	packType: number;
	packSize: number;
	hRes: number;
	vRes: number;
	pixelType: number;
	pixelSize: number;
	cmpCount: number;
	cmpSize: number;
	pixelFormat: number;
	pmTable: ColorTable;
	pmExt: any;
}
declare var PixMap: PixMap;

interface PixPat {
	patType: number;
	patMap: PixMap;
	patData: string;
	patXData: string;
	patXValid: number;
	patXMap: string;
	pat1Data: Pattern;
}
declare var PixPat: PixPat;

declare function PlotIconRefInContext(inContext: any, inRect: CGRect, inAlign: number, inTransform: number, inLabelColor: RGBColor, inFlags: number, inIconRef: any): number;

interface ProcessInfoExtendedRec {
	processInfoLength: number;
	processName: string;
	processNumber: ProcessSerialNumber;
	processType: number;
	processSignature: number;
	processMode: number;
	processLocation: string;
	processSize: number;
	processFreeMem: number;
	processLauncher: ProcessSerialNumber;
	processLaunchDate: number;
	processActiveTime: number;
	processAppRef: FSRef;
	processTempMemTotal: number;
	processPurgeableTempMemTotal: number;
}
declare var ProcessInfoExtendedRec: ProcessInfoExtendedRec;

interface ProcessInfoRec {
	processInfoLength: number;
	processName: string;
	processNumber: ProcessSerialNumber;
	processType: number;
	processSignature: number;
	processMode: number;
	processLocation: string;
	processSize: number;
	processFreeMem: number;
	processLauncher: ProcessSerialNumber;
	processLaunchDate: number;
	processActiveTime: number;
	processAppRef: FSRef;
}
declare var ProcessInfoRec: ProcessInfoRec;

interface RGBColor {
	red: number;
	green: number;
	blue: number;
}
declare var RGBColor: RGBColor;

declare function SetIconFamilyData(iconFamily: IconFamilyResource, iconType: number, h: string): number;

declare function SetSpeechPitch(chan: SpeechChannelRecord, pitch: number): number;

declare function SetSpeechProperty(chan: SpeechChannelRecord, property: string, object_: any): number;

declare function SetSpeechRate(chan: SpeechChannelRecord, rate: number): number;

interface SizeResourceRec {
	flags: number;
	preferredHeapSize: number;
	minimumHeapSize: number;
}
declare var SizeResourceRec: SizeResourceRec;

declare function SpeakCFString(chan: SpeechChannelRecord, aString: string, options: NSDictionary<any, any>): number;

declare function SpeechBusy(): number;

declare function SpeechBusySystemWide(): number;

interface SpeechChannelRecord {
	data: number;
}
declare var SpeechChannelRecord: SpeechChannelRecord;

interface SpeechErrorInfo {
	count: number;
	oldest: number;
	oldPos: number;
	newest: number;
	newPos: number;
}
declare var SpeechErrorInfo: SpeechErrorInfo;

declare function SpeechManagerVersion(): NumVersion;

interface SpeechStatusInfo {
	outputBusy: boolean;
	outputPaused: boolean;
	inputBytesLeft: number;
	phonemeCode: number;
}
declare var SpeechStatusInfo: SpeechStatusInfo;

declare function SpeechSynthesisRegisterModuleURL(url: NSURL): number;

declare function SpeechSynthesisUnregisterModuleURL(url: NSURL): number;

interface SpeechVersionInfo {
	synthType: number;
	synthSubType: number;
	synthManufacturer: number;
	synthFlags: number;
	synthVersion: NumVersion;
}
declare var SpeechVersionInfo: SpeechVersionInfo;

interface SpeechXtndData {
	synthCreator: number;
	synthData: number;
}
declare var SpeechXtndData: SpeechXtndData;

declare function StopSpeech(chan: SpeechChannelRecord): number;

declare function StopSpeechAt(chan: SpeechChannelRecord, whereToStop: number): number;

interface StyleTable {
	fontClass: number;
	offset: number;
	reserved: number;
	indexes: number;
}
declare var StyleTable: StyleTable;

declare function TransformProcessType(psn: ProcessSerialNumber, transformState: number): number;

declare function TranslationCopyDestinationType(inTranslation: any, outDestinationType: string): number;

declare function TranslationCopySourceType(inTranslation: any, outSourceType: string): number;

declare function TranslationCreate(inSourceType: string, inDestinationType: string, inTranslationFlags: number, outTranslation: any): number;

declare function TranslationCreateWithSourceArray(inSourceTypes: NSArray<any> | any[], inTranslationFlags: number, outDestinationTypes: NSArray<any>, outTranslations: NSDictionary<any, any>): number;

declare function TranslationGetTranslationFlags(inTranslation: any, outTranslationFlags: number): number;

declare function TranslationGetTypeID(): number;

declare function TranslationPerformForData(inTranslation: any, inSourceData: NSData, outDestinationData: NSData): number;

declare function TranslationPerformForFile(inTranslation: any, inSourceFile: FSRef, inDestinationDirectory: FSRef, inDestinationName: string, outTranslatedFile: FSRef): number;

declare function TranslationPerformForURL(inTranslation: any, inSourceURL: NSURL, inDestinationURL: NSURL, outTranslatedURL: NSURL): number;

declare function UAZoomChangeFocus(inRect: CGRect, inHighlightRect: CGRect, inType: number): number;

declare function UAZoomEnabled(): boolean;

declare function UseSpeechDictionary(chan: SpeechChannelRecord, speechDictionary: NSDictionary<any, any>): number;

interface VDGammaRecord {
	csGTable: string;
}
declare var VDGammaRecord: VDGammaRecord;

interface VoiceDescription {
	length: number;
	voice: VoiceSpec;
	version: number;
	name: number;
	comment: number;
	gender: number;
	age: number;
	script: number;
	language: number;
	region: number;
	reserved: number;
}
declare var VoiceDescription: VoiceDescription;

interface VoiceFileInfo {
	fileSpec: FSSpec;
	resID: number;
}
declare var VoiceFileInfo: VoiceFileInfo;

interface VoiceSpec {
	creator: number;
	id: number;
}
declare var VoiceSpec: VoiceSpec;

declare const activDev: number;

declare const atAbsoluteCenter: number;

declare const atBottom: number;

declare const atBottomLeft: number;

declare const atBottomRight: number;

declare const atCenterBottom: number;

declare const atCenterLeft: number;

declare const atCenterRight: number;

declare const atCenterTop: number;

declare const atHorizontalCenter: number;

declare const atLeft: number;

declare const atNone: number;

declare const atRight: number;

declare const atTop: number;

declare const atTopLeft: number;

declare const atTopRight: number;

declare const atVerticalCenter: number;

declare const badPasteboardFlavorErr: number;

declare const badPasteboardIndexErr: number;

declare const badPasteboardItemErr: number;

declare const badPasteboardSyncErr: number;

declare const badTranslationRefErr: number;

declare const cdevGenErr: number;

declare const cdevMemErr: number;

declare const cdevResErr: number;

declare const cdevUnset: number;

declare const clearDev: number;

declare const closeDev: number;

declare const cm10CLRData: number;

declare const cm11CLRData: number;

declare const cm12CLRData: number;

declare const cm13CLRData: number;

declare const cm14CLRData: number;

declare const cm15CLRData: number;

declare const cm16_8ColorPacking: number;

declare const cm24_8ColorPacking: number;

declare const cm32_16ColorPacking: number;

declare const cm32_32ColorPacking: number;

declare const cm32_8ColorPacking: number;

declare const cm3CLRData: number;

declare const cm40_8ColorPacking: number;

declare const cm48_16ColorPacking: number;

declare const cm48_8ColorPacking: number;

declare const cm4CLRData: number;

declare const cm56_8ColorPacking: number;

declare const cm5CLRData: number;

declare const cm64_16ColorPacking: number;

declare const cm64_8ColorPacking: number;

declare const cm6CLRData: number;

declare const cm7CLRData: number;

declare const cm8CLRData: number;

declare const cm8_8ColorPacking: number;

declare const cm9CLRData: number;

declare const cmARGB32PmulSpace: number;

declare const cmARGB32Space: number;

declare const cmARGB64LPmulSpace: number;

declare const cmARGB64LSpace: number;

declare const cmARGB64PmulSpace: number;

declare const cmARGB64Space: number;

declare const cmAToB0Tag: number;

declare const cmAToB1Tag: number;

declare const cmAToB2Tag: number;

declare const cmAbortWriteAccess: number;

declare const cmAbsoluteColorimetric: number;

declare const cmAbstractClass: number;

declare const cmAlphaFirstPacking: number;

declare const cmAlphaLastPacking: number;

declare const cmAlphaPmulSpace: number;

declare const cmAlphaSpace: number;

declare const cmAsciiData: number;

declare const cmBToA0Tag: number;

declare const cmBToA1Tag: number;

declare const cmBToA2Tag: number;

declare const cmBeginAccess: number;

declare const cmBestMode: number;

declare const cmBinaryData: number;

declare const cmBlackPointCompensation: number;

declare const cmBlackPointCompensationMask: number;

declare const cmBlueColorantTag: number;

declare const cmBlueTRCTag: number;

declare const cmBradfordChromaticAdaptation: number;

declare const cmBufferBasedProfile: number;

declare const cmCMSReservedFlagsMask: number;

declare const cmCMYData: number;

declare const cmCMYK32Space: number;

declare const cmCMYK64LSpace: number;

declare const cmCMYK64Space: number;

declare const cmCMYKData: number;

declare const cmCMYKSpace: number;

declare const cmCS1ChromTag: number;

declare const cmCS1CustTag: number;

declare const cmCS1NameTag: number;

declare const cmCS1ProfileVersion: number;

declare const cmCS1TRCTag: number;

declare const cmCS2ProfileVersion: number;

declare const cmCalibrationDateTimeTag: number;

declare const cmCameraDeviceClass: number;

declare const cmCharTargetTag: number;

declare const cmChromaticAdaptationTag: number;

declare const cmCloseAccess: number;

declare const cmCloseSpool: number;

declare const cmColorSpaceAlphaMask: number;

declare const cmColorSpaceClass: number;

declare const cmColorSpaceEncodingMask: number;

declare const cmColorSpacePackingMask: number;

declare const cmColorSpacePremulAlphaMask: number;

declare const cmColorSpaceReservedMask: number;

declare const cmColorSpaceSpaceAndAlphaMask: number;

declare const cmColorSpaceSpaceMask: number;

declare const cmCopyrightTag: number;

declare const cmCreateNewAccess: number;

declare const cmCurrentDeviceInfoVersion: number;

declare const cmCurrentProfileInfoVersion: number;

declare const cmCurrentProfileLocationSize: number;

declare const cmCurrentProfileMajorVersion: number;

declare const cmDefaultDeviceID: number;

declare const cmDefaultProfileID: number;

declare const cmDeviceAlreadyRegistered: number;

declare const cmDeviceDBNotFoundErr: number;

declare const cmDeviceInfoVersion1: number;

declare const cmDeviceMfgDescTag: number;

declare const cmDeviceModelDescTag: number;

declare const cmDeviceNotRegistered: number;

declare const cmDeviceProfileInfoVersion1: number;

declare const cmDeviceProfileInfoVersion2: number;

declare const cmDeviceProfilesNotFound: number;

declare const cmDeviceStateAppleRsvdBits: number;

declare const cmDeviceStateBusy: number;

declare const cmDeviceStateDefault: number;

declare const cmDeviceStateDeviceRsvdBits: number;

declare const cmDeviceStateForceNotify: number;

declare const cmDeviceStateOffline: number;

declare const cmDisplayClass: number;

declare const cmDisplayDeviceClass: number;

declare const cmDisplayUse: number;

declare const cmDraftMode: number;

declare const cmEmbeddedMask: number;

declare const cmEmbeddedProfile: number;

declare const cmEmbeddedUse: number;

declare const cmEmbeddedUseMask: number;

declare const cmEndAccess: number;

declare const cmFlare0: number;

declare const cmFlare100: number;

declare const cmGamutCheckingMask: number;

declare const cmGamutResult1Space: number;

declare const cmGamutResultSpace: number;

declare const cmGamutTag: number;

declare const cmGeometry045or450: number;

declare const cmGeometry0dord0: number;

declare const cmGeometryUnknown: number;

declare const cmGlossy: number;

declare const cmGlossyMatteMask: number;

declare const cmGray16LSpace: number;

declare const cmGray16Space: number;

declare const cmGray8Space: number;

declare const cmGrayA16PmulSpace: number;

declare const cmGrayA16Space: number;

declare const cmGrayA32LPmulSpace: number;

declare const cmGrayA32LSpace: number;

declare const cmGrayA32PmulSpace: number;

declare const cmGrayA32Space: number;

declare const cmGrayAPmulSpace: number;

declare const cmGrayASpace: number;

declare const cmGrayData: number;

declare const cmGraySpace: number;

declare const cmGrayTRCTag: number;

declare const cmGreenColorantTag: number;

declare const cmGreenTRCTag: number;

declare const cmHLS32Space: number;

declare const cmHLSData: number;

declare const cmHLSSpace: number;

declare const cmHSV32Space: number;

declare const cmHSVData: number;

declare const cmHSVSpace: number;

declare const cmICCProfileVersion2: number;

declare const cmICCProfileVersion21: number;

declare const cmICCProfileVersion4: number;

declare const cmICCReservedFlagsMask: number;

declare const cmIlluminantA: number;

declare const cmIlluminantD50: number;

declare const cmIlluminantD55: number;

declare const cmIlluminantD65: number;

declare const cmIlluminantD93: number;

declare const cmIlluminantEquiPower: number;

declare const cmIlluminantF2: number;

declare const cmIlluminantF8: number;

declare const cmIlluminantUnknown: number;

declare const cmInputClass: number;

declare const cmInputUse: number;

declare const cmInternalCFErr: number;

declare const cmInterpolationMask: number;

declare const cmIterateAllDeviceProfiles: number;

declare const cmIterateCurrentDeviceProfiles: number;

declare const cmIterateCustomDeviceProfiles: number;

declare const cmIterateDeviceProfilesMask: number;

declare const cmIterateFactoryDeviceProfiles: number;

declare const cmLAB24Space: number;

declare const cmLAB32Space: number;

declare const cmLAB48LSpace: number;

declare const cmLAB48Space: number;

declare const cmLABSpace: number;

declare const cmLUV32Space: number;

declare const cmLUVSpace: number;

declare const cmLabData: number;

declare const cmLinearChromaticAdaptation: number;

declare const cmLinesPer: number;

declare const cmLinkClass: number;

declare const cmLittleEndianPacking: number;

declare const cmLong10ColorPacking: number;

declare const cmLong8ColorPacking: number;

declare const cmLuminanceTag: number;

declare const cmLuvData: number;

declare const cmMCEight8Space: number;

declare const cmMCEightSpace: number;

declare const cmMCFive8Space: number;

declare const cmMCFiveSpace: number;

declare const cmMCH5Data: number;

declare const cmMCH6Data: number;

declare const cmMCH7Data: number;

declare const cmMCH8Data: number;

declare const cmMCSeven8Space: number;

declare const cmMCSevenSpace: number;

declare const cmMCSix8Space: number;

declare const cmMCSixSpace: number;

declare const cmMacintosh: number;

declare const cmMagicNumber: number;

declare const cmMakeAndModelTag: number;

declare const cmMeasurementTag: number;

declare const cmMediaBlackPointTag: number;

declare const cmMediaWhitePointTag: number;

declare const cmMicrosoft: number;

declare const cmNamedColor2Tag: number;

declare const cmNamedColorClass: number;

declare const cmNamedColorTag: number;

declare const cmNamedData: number;

declare const cmNamedIndexed32LSpace: number;

declare const cmNamedIndexed32Space: number;

declare const cmNamedIndexedSpace: number;

declare const cmNativeDisplayInfoTag: number;

declare const cmNoColorPacking: number;

declare const cmNoProfileBase: number;

declare const cmNoSpace: number;

declare const cmNormalMode: number;

declare const cmNumHeaderElements: number;

declare const cmOneBitDirectPacking: number;

declare const cmOpenReadAccess: number;

declare const cmOpenReadSpool: number;

declare const cmOpenWriteAccess: number;

declare const cmOpenWriteSpool: number;

declare const cmOriginalProfileLocationSize: number;

declare const cmOutputClass: number;

declare const cmOutputUse: number;

declare const cmPS2CRD0Tag: number;

declare const cmPS2CRD1Tag: number;

declare const cmPS2CRD2Tag: number;

declare const cmPS2CRD3Tag: number;

declare const cmPS2CRDVMSizeTag: number;

declare const cmPS2CSATag: number;

declare const cmPS2RenderingIntentTag: number;

declare const cmPS7bit: number;

declare const cmPS8bit: number;

declare const cmParametricType0: number;

declare const cmParametricType1: number;

declare const cmParametricType2: number;

declare const cmParametricType3: number;

declare const cmParametricType4: number;

declare const cmPathBasedProfile: number;

declare const cmPerceptual: number;

declare const cmPrefsSynchError: number;

declare const cmPreview0Tag: number;

declare const cmPreview1Tag: number;

declare const cmPreview2Tag: number;

declare const cmPrinterDeviceClass: number;

declare const cmProfileDescriptionMLTag: number;

declare const cmProfileDescriptionTag: number;

declare const cmProfileIterateDataVersion1: number;

declare const cmProfileIterateDataVersion2: number;

declare const cmProfileIterateDataVersion3: number;

declare const cmProfileIterateDataVersion4: number;

declare const cmProfileMajorVersionMask: number;

declare const cmProfileSequenceDescTag: number;

declare const cmProofDeviceClass: number;

declare const cmProofUse: number;

declare const cmPrtrDefaultScreens: number;

declare const cmQualityMask: number;

declare const cmRGB16LSpace: number;

declare const cmRGB16Space: number;

declare const cmRGB24Space: number;

declare const cmRGB32Space: number;

declare const cmRGB48LSpace: number;

declare const cmRGB48Space: number;

declare const cmRGB565LSpace: number;

declare const cmRGB565Space: number;

declare const cmRGBA32PmulSpace: number;

declare const cmRGBA32Space: number;

declare const cmRGBA64LPmulSpace: number;

declare const cmRGBA64LSpace: number;

declare const cmRGBA64PmulSpace: number;

declare const cmRGBA64Space: number;

declare const cmRGBAPmulSpace: number;

declare const cmRGBASpace: number;

declare const cmRGBData: number;

declare const cmRGBSpace: number;

declare const cmReadAccess: number;

declare const cmReadSpool: number;

declare const cmRedColorantTag: number;

declare const cmRedTRCTag: number;

declare const cmReflective: number;

declare const cmReflectiveTransparentMask: number;

declare const cmRelativeColorimetric: number;

declare const cmReservedSpace1: number;

declare const cmReservedSpace2: number;

declare const cmReverseChannelPacking: number;

declare const cmSRGB16ChannelEncoding: number;

declare const cmSRGBData: number;

declare const cmSaturation: number;

declare const cmScannerDeviceClass: number;

declare const cmScreeningDescTag: number;

declare const cmScreeningTag: number;

declare const cmSigCrdInfoType: number;

declare const cmSigCurveType: number;

declare const cmSigDataType: number;

declare const cmSigDateTimeType: number;

declare const cmSigLut16Type: number;

declare const cmSigLut8Type: number;

declare const cmSigMakeAndModelType: number;

declare const cmSigMeasurementType: number;

declare const cmSigMultiFunctA2BType: number;

declare const cmSigMultiFunctB2AType: number;

declare const cmSigMultiLocalizedUniCodeType: number;

declare const cmSigNamedColor2Type: number;

declare const cmSigNamedColorType: number;

declare const cmSigNativeDisplayInfoType: number;

declare const cmSigPS2CRDVMSizeType: number;

declare const cmSigParametricCurveType: number;

declare const cmSigProfileDescriptionType: number;

declare const cmSigProfileSequenceDescType: number;

declare const cmSigS15Fixed16Type: number;

declare const cmSigScreeningType: number;

declare const cmSigSignatureType: number;

declare const cmSigTextType: number;

declare const cmSigU16Fixed16Type: number;

declare const cmSigU1Fixed15Type: number;

declare const cmSigUInt16Type: number;

declare const cmSigUInt32Type: number;

declare const cmSigUInt64Type: number;

declare const cmSigUInt8Type: number;

declare const cmSigUcrBgType: number;

declare const cmSigUnicodeTextType: number;

declare const cmSigVideoCardGammaType: number;

declare const cmSigViewingConditionsType: number;

declare const cmSigXYZType: number;

declare const cmSiliconGraphics: number;

declare const cmSolaris: number;

declare const cmSpotFunctionCross: number;

declare const cmSpotFunctionDefault: number;

declare const cmSpotFunctionDiamond: number;

declare const cmSpotFunctionEllipse: number;

declare const cmSpotFunctionLine: number;

declare const cmSpotFunctionRound: number;

declare const cmSpotFunctionSquare: number;

declare const cmSpotFunctionUnknown: number;

declare const cmStdobs1931TwoDegrees: number;

declare const cmStdobs1964TenDegrees: number;

declare const cmStdobsUnknown: number;

declare const cmTaligent: number;

declare const cmTechnologyAMDisplay: number;

declare const cmTechnologyCRTDisplay: number;

declare const cmTechnologyDigitalCamera: number;

declare const cmTechnologyDyeSublimationPrinter: number;

declare const cmTechnologyElectrophotographicPrinter: number;

declare const cmTechnologyElectrostaticPrinter: number;

declare const cmTechnologyFilmScanner: number;

declare const cmTechnologyFilmWriter: number;

declare const cmTechnologyFlexography: number;

declare const cmTechnologyGravure: number;

declare const cmTechnologyInkJetPrinter: number;

declare const cmTechnologyOffsetLithography: number;

declare const cmTechnologyPMDisplay: number;

declare const cmTechnologyPhotoCD: number;

declare const cmTechnologyPhotoImageSetter: number;

declare const cmTechnologyPhotographicPaperPrinter: number;

declare const cmTechnologyProjectionTelevision: number;

declare const cmTechnologyReflectiveScanner: number;

declare const cmTechnologySilkscreen: number;

declare const cmTechnologyTag: number;

declare const cmTechnologyThermalWaxPrinter: number;

declare const cmTechnologyVideoCamera: number;

declare const cmTechnologyVideoMonitor: number;

declare const cmUcrBgTag: number;

declare const cmUseDefaultChromaticAdaptation: number;

declare const cmVideoCardGammaFormulaType: number;

declare const cmVideoCardGammaTableType: number;

declare const cmVideoCardGammaTag: number;

declare const cmViewingConditionsDescTag: number;

declare const cmViewingConditionsTag: number;

declare const cmVonKriesChromaticAdaptation: number;

declare const cmWord565ColorPacking: number;

declare const cmWord5ColorPacking: number;

declare const cmWriteAccess: number;

declare const cmWriteSpool: number;

declare const cmXYZ24Space: number;

declare const cmXYZ32Space: number;

declare const cmXYZ48LSpace: number;

declare const cmXYZ48Space: number;

declare const cmXYZData: number;

declare const cmXYZSpace: number;

declare const cmYCbCrData: number;

declare const cmYXY32Space: number;

declare const cmYXYSpace: number;

declare const cmYxyData: number;

declare const copyDev: number;

declare const cursorDev: number;

declare const cutDev: number;

declare const deactivDev: number;

declare const duplicatePasteboardFlavorErr: number;

declare const extendedBlock: number;

declare const extendedBlockLen: number;

declare const hitDev: number;

declare const icConfigInappropriateErr: number;

declare const icConfigNotFoundErr: number;

declare const icInternalErr: number;

declare const icNoMoreWritersErr: number;

declare const icNoPerm: number;

declare const icNoURLErr: number;

declare const icNothingToOverrideErr: number;

declare const icPermErr: number;

declare const icPrefDataErr: number;

declare const icPrefNotFoundErr: number;

declare const icProfileNotFoundErr: number;

declare const icReadOnlyPerm: number;

declare const icReadWritePerm: number;

declare const icTooManyProfilesErr: number;

declare const icTruncatedErr: number;

declare const initDev: number;

declare const k16BE555PixelFormat: number;

declare const k16BE565PixelFormat: number;

declare const k16LE5551PixelFormat: number;

declare const k16LE555PixelFormat: number;

declare const k16LE565PixelFormat: number;

declare const k1IndexedGrayPixelFormat: number;

declare const k1MonochromePixelFormat: number;

declare const k24BGRPixelFormat: number;

declare const k24RGBPixelFormat: number;

declare const k2IndexedGrayPixelFormat: number;

declare const k2IndexedPixelFormat: number;

declare const k2vuyPixelFormat: number;

declare const k32ABGRPixelFormat: number;

declare const k32ARGBPixelFormat: number;

declare const k32BGRAPixelFormat: number;

declare const k32RGBAPixelFormat: number;

declare const k4IndexedGrayPixelFormat: number;

declare const k4IndexedPixelFormat: number;

declare const k8IndexedGrayPixelFormat: number;

declare const k8IndexedPixelFormat: number;

declare const kAEFetchURL: number;

declare const kAEGetURL: number;

declare const kATSBoldQDStretch: number;

declare const kATSCubicCurveType: number;

declare const kATSDeletedGlyphcode: number;

declare const kATSFontAutoActivationAsk: number;

declare const kATSFontAutoActivationDefault: number;

declare const kATSFontAutoActivationDisabled: number;

declare const kATSFontAutoActivationEnabled: number;

declare const kATSFontContainerRefUnspecified: number;

declare const kATSFontContextGlobal: number;

declare const kATSFontContextLocal: number;

declare const kATSFontContextUnspecified: number;

declare const kATSFontFamilyRefUnspecified: number;

declare const kATSFontFilterCurrentVersion: number;

declare const kATSFontFormatUnspecified: number;

declare const kATSFontRefUnspecified: number;

declare const kATSGenerationUnspecified: number;

declare const kATSGlyphInfoAppleReserved: number;

declare const kATSGlyphInfoByteSizeMask: number;

declare const kATSGlyphInfoHasImposedWidth: number;

declare const kATSGlyphInfoIsAttachment: number;

declare const kATSGlyphInfoIsLTHanger: number;

declare const kATSGlyphInfoIsRBHanger: number;

declare const kATSGlyphInfoIsWhiteSpace: number;

declare const kATSGlyphInfoTerminatorGlyph: number;

declare const kATSInvalidFontAccess: number;

declare const kATSInvalidFontContainerAccess: number;

declare const kATSInvalidFontFamilyAccess: number;

declare const kATSInvalidFontTableAccess: number;

declare const kATSInvalidGlyphAccess: number;

declare const kATSItalicQDSkew: number;

declare const kATSIterationCompleted: number;

declare const kATSIterationScopeModified: number;

declare const kATSLineAppleReserved: number;

declare const kATSLineApplyAntiAliasing: number;

declare const kATSLineBreakToNearestCharacter: number;

declare const kATSLineDisableAllBaselineAdjustments: number;

declare const kATSLineDisableAllGlyphMorphing: number;

declare const kATSLineDisableAllJustification: number;

declare const kATSLineDisableAllKerningAdjustments: number;

declare const kATSLineDisableAllLayoutOperations: number;

declare const kATSLineDisableAllTrackingAdjustments: number;

declare const kATSLineDisableAutoAdjustDisplayPos: number;

declare const kATSLineDisableNegativeJustification: number;

declare const kATSLineFillOutToWidth: number;

declare const kATSLineFractDisable: number;

declare const kATSLineHasNoHangers: number;

declare const kATSLineHasNoOpticalAlignment: number;

declare const kATSLineIgnoreFontLeading: number;

declare const kATSLineImposeNoAngleForEnds: number;

declare const kATSLineIsDisplayOnly: number;

declare const kATSLineKeepSpacesOutOfMargin: number;

declare const kATSLineLastNoJustification: number;

declare const kATSLineNoAntiAliasing: number;

declare const kATSLineNoLayoutOptions: number;

declare const kATSLineNoSpecialJustification: number;

declare const kATSLineTabAdjustEnabled: number;

declare const kATSLineUseDeviceMetrics: number;

declare const kATSLineUseQDRendering: number;

declare const kATSNoTracking: number;

declare const kATSOptionFlagsActivateDisabled: number;

declare const kATSOptionFlagsComposeFontPostScriptName: number;

declare const kATSOptionFlagsDefault: number;

declare const kATSOptionFlagsDefaultScope: number;

declare const kATSOptionFlagsDoNotNotify: number;

declare const kATSOptionFlagsIncludeDisabledMask: number;

declare const kATSOptionFlagsIterateByPrecedenceMask: number;

declare const kATSOptionFlagsIterationScopeMask: number;

declare const kATSOptionFlagsProcessSubdirectories: number;

declare const kATSOptionFlagsRecordPersistently: number;

declare const kATSOptionFlagsRestrictedScope: number;

declare const kATSOptionFlagsUnRestrictedScope: number;

declare const kATSOptionFlagsUseDataFork: number;

declare const kATSOptionFlagsUseDataForkAsResourceFork: number;

declare const kATSOptionFlagsUseResourceFork: number;

declare const kATSOtherCurveType: number;

declare const kATSQuadCurveType: number;

declare const kATSRadiansFactor: number;

declare const kATSStyleAppleReserved: number;

declare const kATSStyleApplyAntiAliasing: number;

declare const kATSStyleApplyHints: number;

declare const kATSStyleNoAntiAliasing: number;

declare const kATSStyleNoHinting: number;

declare const kATSStyleNoOptions: number;

declare const kATSULayoutOperationAppleReserved: number;

declare const kATSULayoutOperationBaselineAdjustment: number;

declare const kATSULayoutOperationCallbackStatusContinue: number;

declare const kATSULayoutOperationCallbackStatusHandled: number;

declare const kATSULayoutOperationJustification: number;

declare const kATSULayoutOperationKerningAdjustment: number;

declare const kATSULayoutOperationMorph: number;

declare const kATSULayoutOperationNone: number;

declare const kATSULayoutOperationPostLayoutAdjustment: number;

declare const kATSULayoutOperationTrackingAdjustment: number;

declare const kATSUseCaretOrigins: number;

declare const kATSUseDeviceOrigins: number;

declare const kATSUseFractionalOrigins: number;

declare const kATSUseGlyphAdvance: number;

declare const kATSUseLineHeight: number;

declare const kATSUseOriginFlags: number;

declare var kAXAttachmentTextAttribute: string;

declare var kAXAutocorrectedTextAttribute: string;

declare var kAXBackgroundColorTextAttribute: string;

declare var kAXFontFamilyKey: string;

declare var kAXFontNameKey: string;

declare var kAXFontSizeKey: string;

declare var kAXFontTextAttribute: string;

declare var kAXForegoundColorTextAttribute: string;

declare var kAXForegroundColorTextAttribute: string;

declare var kAXLinkTextAttribute: string;

declare var kAXListItemIndexTextAttribute: string;

declare var kAXListItemLevelTextAttribute: string;

declare var kAXListItemPrefixTextAttribute: string;

declare var kAXMarkedMisspelledTextAttribute: string;

declare var kAXMisspelledTextAttribute: string;

declare var kAXNaturalLanguageTextAttribute: string;

declare var kAXReplacementStringTextAttribute: string;

declare var kAXShadowTextAttribute: string;

declare var kAXStrikethroughColorTextAttribute: string;

declare var kAXStrikethroughTextAttribute: string;

declare var kAXSuperscriptTextAttribute: string;

declare var kAXTrustedCheckOptionPrompt: string;

declare var kAXUnderlineColorTextAttribute: string;

declare var kAXUnderlineTextAttribute: string;

declare var kAXValueAXErrorType: number;

declare var kAXValueCFRangeType: number;

declare var kAXValueCGPointType: number;

declare var kAXValueCGRectType: number;

declare var kAXValueCGSizeType: number;

declare var kAXValueIllegalType: number;

declare var kAXVisibleNameKey: string;

declare const kAlignAbsoluteCenter: number;

declare const kAlignBottom: number;

declare const kAlignBottomLeft: number;

declare const kAlignBottomRight: number;

declare const kAlignCenterBottom: number;

declare const kAlignCenterLeft: number;

declare const kAlignCenterRight: number;

declare const kAlignCenterTop: number;

declare const kAlignHorizontalCenter: number;

declare const kAlignLeft: number;

declare const kAlignNone: number;

declare const kAlignRight: number;

declare const kAlignTop: number;

declare const kAlignTopLeft: number;

declare const kAlignTopRight: number;

declare const kAlignVerticalCenter: number;

declare const kAllPPDDomains: number;

declare const kAppleJapaneseDictionarySignature: number;

declare const kAudioUnitProperty_SpeechChannel: number;

declare const kAudioUnitProperty_Voice: number;

declare const kAudioUnitSubType_SpeechSynthesis: number;

declare const kCUPSPPDDomain: number;

declare const kCurrentProcess: number;

declare const kDCMAllowListing: number;

declare const kDCMAnyFieldTag: number;

declare const kDCMAnyFieldType: number;

declare const kDCMBasicDictionaryClass: number;

declare const kDCMCanAddDictionaryFieldMask: number;

declare const kDCMCanCreateDictionaryMask: number;

declare const kDCMCanHaveMultipleIndexMask: number;

declare const kDCMCanModifyDictionaryMask: number;

declare const kDCMCanStreamDictionaryMask: number;

declare const kDCMCanUseFileDictionaryMask: number;

declare const kDCMCanUseMemoryDictionaryMask: number;

declare const kDCMCanUseTransactionMask: number;

declare const kDCMDictionaryHeaderSignature: number;

declare const kDCMDictionaryHeaderVersion: number;

declare const kDCMFindMethodBackwardTrie: number;

declare const kDCMFindMethodBeginningMatch: number;

declare const kDCMFindMethodContainsMatch: number;

declare const kDCMFindMethodEndingMatch: number;

declare const kDCMFindMethodExactMatch: number;

declare const kDCMFindMethodForwardTrie: number;

declare const kDCMFixedSizeFieldMask: number;

declare const kDCMHiddenFieldMask: number;

declare const kDCMIdentifyFieldMask: number;

declare const kDCMIndexedFieldMask: number;

declare const kDCMJapaneseAccentTag: number;

declare const kDCMJapaneseAccentType: number;

declare const kDCMJapaneseFukugouInfoTag: number;

declare const kDCMJapaneseFukugouInfoType: number;

declare const kDCMJapaneseHinshiTag: number;

declare const kDCMJapaneseHinshiType: number;

declare const kDCMJapaneseHyokiTag: number;

declare const kDCMJapaneseHyokiType: number;

declare const kDCMJapaneseOnKunReadingTag: number;

declare const kDCMJapaneseOnKunReadingType: number;

declare const kDCMJapanesePhoneticTag: number;

declare const kDCMJapanesePhoneticType: number;

declare const kDCMJapaneseWeightTag: number;

declare const kDCMJapaneseWeightType: number;

declare const kDCMJapaneseYomiTag: number;

declare const kDCMJapaneseYomiType: number;

declare const kDCMProhibitListing: number;

declare const kDCMReadOnlyDictionary: number;

declare const kDCMReadWriteDictionary: number;

declare const kDCMRequiredFieldMask: number;

declare const kDCMSpecificDictionaryClass: number;

declare const kDCMUserDictionaryClass: number;

declare const kDefaultCMMSignature: number;

declare const kDeviceToPCS: number;

declare const kDictionaryFileType: number;

declare const kEndOfSentence: number;

declare const kEndOfWord: number;

declare const kFMCurrentFilterFormat: number;

declare const kFMFontCallbackFilterSelector: number;

declare const kFMFontContainerFilterSelector: number;

declare const kFMFontDirectoryFilterSelector: number;

declare const kFMFontFamilyCallbackFilterSelector: number;

declare const kFMFontFileRefFilterSelector: number;

declare const kFMFontTechnologyFilterSelector: number;

declare const kFMGenerationFilterSelector: number;

declare const kFMPostScriptFontTechnology: number;

declare const kFMTrueTypeFontTechnology: number;

declare const kFemale: number;

declare const kFontNoLanguage: number;

declare const kFontNoName: number;

declare const kFontNoPlatform: number;

declare const kFontNoScript: number;

declare const kHIShapeEnumerateInit: number;

declare const kHIShapeEnumerateRect: number;

declare const kHIShapeEnumerateTerminate: number;

declare const kHIShapeParseFromBottom: number;

declare const kHIShapeParseFromBottomRight: number;

declare const kHIShapeParseFromLeft: number;

declare const kHIShapeParseFromRight: number;

declare const kHIShapeParseFromTop: number;

declare const kHIShapeParseFromTopLeft: number;

declare const kHorizontalConstraint: number;

declare const kICAttrLockedBit: number;

declare const kICAttrLockedMask: number;

declare const kICAttrNoChange: number;

declare const kICAttrVolatileBit: number;

declare const kICAttrVolatileMask: number;

declare const kICComponentInterfaceVersion: number;

declare const kICComponentInterfaceVersion0: number;

declare const kICComponentInterfaceVersion1: number;

declare const kICComponentInterfaceVersion2: number;

declare const kICComponentInterfaceVersion3: number;

declare const kICComponentInterfaceVersion4: number;

declare const kICComponentVersion: number;

declare const kICCreator: number;

declare const kICEditPreferenceEvent: number;

declare const kICEditPreferenceEventClass: number;

declare const kICFileSpecHeaderSize: number;

declare const kICFileType: number;

declare const kICMapBinaryBit: number;

declare const kICMapBinaryMask: number;

declare const kICMapDataForkBit: number;

declare const kICMapDataForkMask: number;

declare const kICMapFixedLength: number;

declare const kICMapNotIncomingBit: number;

declare const kICMapNotIncomingMask: number;

declare const kICMapNotOutgoingBit: number;

declare const kICMapNotOutgoingMask: number;

declare const kICMapPostBit: number;

declare const kICMapPostMask: number;

declare const kICMapResourceForkBit: number;

declare const kICMapResourceForkMask: number;

declare const kICNilProfileID: number;

declare const kICNoUserInteractionBit: number;

declare const kICNoUserInteractionMask: number;

declare const kICNumVersion: number;

declare const kICServicesTCPBit: number;

declare const kICServicesTCPMask: number;

declare const kICServicesUDPBit: number;

declare const kICServicesUDPMask: number;

declare const kImmediate: number;

declare const kInternetEventClass: number;

declare const kInvalidFont: number;

declare const kInvalidFontFamily: number;

declare const kInvalidGeneration: number;

declare const kLAAllMorphemes: number;

declare const kLADefaultEdge: number;

declare const kLAEndOfSourceTextMask: number;

declare const kLAFreeEdge: number;

declare const kLAIncompleteEdge: number;

declare const kLAMorphemesArrayVersion: number;

declare const kLASpeechBagyouGodan: number;

declare const kLASpeechChimei: number;

declare const kLASpeechChimeiSetsubigo: number;

declare const kLASpeechDokuritsugo: number;

declare const kLASpeechDoushi: number;

declare const kLASpeechFukushi: number;

declare const kLASpeechFutsuuMeishi: number;

declare const kLASpeechGagyouGodan: number;

declare const kLASpeechGodanDoushi: number;

declare const kLASpeechIchidanDoushi: number;

declare const kLASpeechJinmei: number;

declare const kLASpeechJinmeiMei: number;

declare const kLASpeechJinmeiSei: number;

declare const kLASpeechJinmeiSetsubigo: number;

declare const kLASpeechJodoushi: number;

declare const kLASpeechJoshi: number;

declare const kLASpeechKagyouGodan: number;

declare const kLASpeechKahenDoushi: number;

declare const kLASpeechKandoushi: number;

declare const kLASpeechKatsuyouGokan: number;

declare const kLASpeechKatsuyouKatei: number;

declare const kLASpeechKatsuyouMask: number;

declare const kLASpeechKatsuyouMeirei: number;

declare const kLASpeechKatsuyouMizen: number;

declare const kLASpeechKatsuyouRentai: number;

declare const kLASpeechKatsuyouRenyou: number;

declare const kLASpeechKatsuyouSyuushi: number;

declare const kLASpeechKeidouMeishi: number;

declare const kLASpeechKeiyoudoushi: number;

declare const kLASpeechKeiyoushi: number;

declare const kLASpeechKigou: number;

declare const kLASpeechKoyuuMeishi: number;

declare const kLASpeechKuten: number;

declare const kLASpeechMagyouGodan: number;

declare const kLASpeechMediumClassMask: number;

declare const kLASpeechMeishi: number;

declare const kLASpeechMuhinshi: number;

declare const kLASpeechNagyouGodan: number;

declare const kLASpeechRagyouGodan: number;

declare const kLASpeechRentaishi: number;

declare const kLASpeechRoughClassMask: number;

declare const kLASpeechSagyouGodan: number;

declare const kLASpeechSahenDoushi: number;

declare const kLASpeechSahenMeishi: number;

declare const kLASpeechSeiku: number;

declare const kLASpeechSetsubiChimei: number;

declare const kLASpeechSetsubigo: number;

declare const kLASpeechSetsuzokushi: number;

declare const kLASpeechSettougo: number;

declare const kLASpeechSoshikimei: number;

declare const kLASpeechSoshikimeiSetsubigo: number;

declare const kLASpeechStrictClassMask: number;

declare const kLASpeechSuujiSetsubigo: number;

declare const kLASpeechSuujiSettougo: number;

declare const kLASpeechSuushi: number;

declare const kLASpeechTagyouGodan: number;

declare const kLASpeechTankanji: number;

declare const kLASpeechTouten: number;

declare const kLASpeechWagyouGodan: number;

declare const kLASpeechZahenDoushi: number;

declare const kLocalPPDDomain: number;

declare const kMale: number;

declare const kMaxInputLengthOfAppleJapaneseEngine: number;

declare const kMaxKanjiLengthInAppleJapaneseDictionary: number;

declare const kMaxYomiLengthInAppleJapaneseDictionary: number;

declare const kNetworkPPDDomain: number;

declare const kNeuter: number;

declare const kNoConstraint: number;

declare const kNoEndingProsody: number;

declare const kNoProcess: number;

declare const kNoSpeechInterrupt: number;

declare const kNoTransform: number;

declare const kPCSToDevice: number;

declare const kPCSToPCS: number;

declare const kPMAllocationFailure: number;

declare const kPMBorderDoubleHairline: number;

declare const kPMBorderDoubleThickline: number;

declare const kPMBorderSingleHairline: number;

declare const kPMBorderSingleThickline: number;

declare const kPMCMYKColorSpaceModel: number;

declare const kPMCVMSymbolNotFound: number;

declare const kPMCancel: number;

declare const kPMCloseFailed: number;

declare const kPMCoverPageAfter: number;

declare const kPMCoverPageBefore: number;

declare const kPMCoverPageNone: number;

declare const kPMCreateMessageFailed: number;

declare const kPMDeleteSubTicketFailed: number;

declare const kPMDestinationFax: number;

declare const kPMDestinationFile: number;

declare const kPMDestinationInvalid: number;

declare const kPMDestinationPreview: number;

declare const kPMDestinationPrinter: number;

declare const kPMDestinationProcessPDF: number;

declare const kPMDevNColorSpaceModel: number;

declare const kPMDocumentNotFound: number;

declare const kPMDontSwitchPDEError: number;

declare const kPMDuplexNoTumble: number;

declare const kPMDuplexNone: number;

declare const kPMDuplexTumble: number;

declare const kPMEditRequestFailed: number;

declare const kPMFeatureNotInstalled: number;

declare const kPMFileOrDirOperationFailed: number;

declare const kPMFontNameTooLong: number;

declare const kPMFontNotFound: number;

declare const kPMGeneralCGError: number;

declare const kPMGeneralError: number;

declare const kPMGrayColorSpaceModel: number;

declare const kPMHideInlineItems: number;

declare const kPMIOAttrNotAvailable: number;

declare const kPMIOMSymbolNotFound: number;

declare const kPMInternalError: number;

declare const kPMInvalidAllocator: number;

declare const kPMInvalidCVMContext: number;

declare const kPMInvalidCalibrationTarget: number;

declare const kPMInvalidConnection: number;

declare const kPMInvalidFileType: number;

declare const kPMInvalidIOMContext: number;

declare const kPMInvalidIndex: number;

declare const kPMInvalidItem: number;

declare const kPMInvalidJobID: number;

declare const kPMInvalidJobTemplate: number;

declare const kPMInvalidKey: number;

declare const kPMInvalidLookupSpec: number;

declare const kPMInvalidObject: number;

declare const kPMInvalidPBMRef: number;

declare const kPMInvalidPDEContext: number;

declare const kPMInvalidPMContext: number;

declare const kPMInvalidPageFormat: number;

declare const kPMInvalidPaper: number;

declare const kPMInvalidParameter: number;

declare const kPMInvalidPreset: number;

declare const kPMInvalidPrintSession: number;

declare const kPMInvalidPrintSettings: number;

declare const kPMInvalidPrinter: number;

declare const kPMInvalidPrinterAddress: number;

declare const kPMInvalidPrinterInfo: number;

declare const kPMInvalidReply: number;

declare const kPMInvalidState: number;

declare const kPMInvalidSubTicket: number;

declare const kPMInvalidTicket: number;

declare const kPMInvalidType: number;

declare const kPMInvalidValue: number;

declare const kPMItemIsLocked: number;

declare const kPMJobBusy: number;

declare const kPMJobCanceled: number;

declare const kPMJobGetTicketBadFormatError: number;

declare const kPMJobGetTicketReadError: number;

declare const kPMJobManagerAborted: number;

declare const kPMJobNotFound: number;

declare const kPMJobStreamEndError: number;

declare const kPMJobStreamOpenFailed: number;

declare const kPMJobStreamReadFailed: number;

declare const kPMKeyNotFound: number;

declare const kPMKeyNotUnique: number;

declare const kPMKeyOrValueNotFound: number;

declare const kPMLandscape: number;

declare const kPMLastErrorCodeToMakeMaintenanceOfThisListEasier: number;

declare const kPMLayoutBottomTopLeftRight: number;

declare const kPMLayoutBottomTopRightLeft: number;

declare const kPMLayoutLeftRightBottomTop: number;

declare const kPMLayoutLeftRightTopBottom: number;

declare const kPMLayoutRightLeftBottomTop: number;

declare const kPMLayoutRightLeftTopBottom: number;

declare const kPMLayoutTopBottomLeftRight: number;

declare const kPMLayoutTopBottomRightLeft: number;

declare const kPMMessagingError: number;

declare const kPMNoDefaultItem: number;

declare const kPMNoDefaultPrinter: number;

declare const kPMNoDefaultSettings: number;

declare const kPMNoError: number;

declare const kPMNoPrinterJobID: number;

declare const kPMNoSelectedPrinters: number;

declare const kPMNoSuchEntry: number;

declare const kPMNotImplemented: number;

declare const kPMObjectInUse: number;

declare const kPMOpenFailed: number;

declare const kPMOutOfScope: number;

declare const kPMPMSymbolNotFound: number;

declare const kPMPaperTypeCoated: number;

declare const kPMPaperTypeGlossy: number;

declare const kPMPaperTypePlain: number;

declare const kPMPaperTypePremium: number;

declare const kPMPaperTypeTShirt: number;

declare const kPMPaperTypeTransparency: number;

declare const kPMPaperTypeUnknown: number;

declare const kPMPermissionError: number;

declare const kPMPluginNotFound: number;

declare const kPMPluginRegisterationFailed: number;

declare const kPMPortrait: number;

declare const kPMPrBrowserNoUI: number;

declare const kPMPrintAllPages: number;

declare const kPMPrinterIdle: number;

declare const kPMPrinterProcessing: number;

declare const kPMPrinterStopped: number;

declare const kPMQualityBest: number;

declare const kPMQualityDraft: number;

declare const kPMQualityHighest: number;

declare const kPMQualityInkSaver: number;

declare const kPMQualityLowest: number;

declare const kPMQualityNormal: number;

declare const kPMQualityPhoto: number;

declare const kPMQueueAlreadyExists: number;

declare const kPMQueueJobFailed: number;

declare const kPMQueueNotFound: number;

declare const kPMRGBColorSpaceModel: number;

declare const kPMReadFailed: number;

declare const kPMReadGotZeroData: number;

declare const kPMReverseLandscape: number;

declare const kPMReversePortrait: number;

declare const kPMScalingCenterOnImgArea: number;

declare const kPMScalingCenterOnPaper: number;

declare const kPMScalingPinBottomLeft: number;

declare const kPMScalingPinBottomRight: number;

declare const kPMScalingPinTopLeft: number;

declare const kPMScalingPinTopRight: number;

declare const kPMServerAlreadyRunning: number;

declare const kPMServerAttributeRestricted: number;

declare const kPMServerCommunicationFailed: number;

declare const kPMServerNotFound: number;

declare const kPMServerSuspended: number;

declare const kPMShowDefaultInlineItems: number;

declare const kPMShowInlineCopies: number;

declare const kPMShowInlineOrientation: number;

declare const kPMShowInlinePageRange: number;

declare const kPMShowInlinePageRangeWithSelection: number;

declare const kPMShowInlinePaperSize: number;

declare const kPMShowInlineScale: number;

declare const kPMShowPageAttributesPDE: number;

declare const kPMSimplexTumble: number;

declare const kPMStatusFailed: number;

declare const kPMStringConversionFailure: number;

declare const kPMSubTicketNotFound: number;

declare const kPMSyncRequestFailed: number;

declare const kPMTemplateIsLocked: number;

declare const kPMTicketIsLocked: number;

declare const kPMTicketTypeNotFound: number;

declare const kPMUnableToFindProcess: number;

declare const kPMUnexpectedImagingError: number;

declare const kPMUnknownColorSpaceModel: number;

declare const kPMUnknownDataType: number;

declare const kPMUnknownMessage: number;

declare const kPMUnlocked: number;

declare const kPMUnsupportedConnection: number;

declare const kPMUpdateTicketFailed: number;

declare const kPMUserOrGroupNotFound: number;

declare const kPMValidateTicketFailed: number;

declare const kPMValueOutOfRange: number;

declare const kPMWriteFailed: number;

declare const kPMXMLParseError: number;

declare const kPlotIconRefNoImage: number;

declare const kPlotIconRefNoMask: number;

declare const kPlotIconRefNormalFlags: number;

declare const kPreflightThenPause: number;

declare const kProcessDictionaryIncludeAllInformationMask: number;

declare const kProcessTransformToBackgroundApplication: number;

declare const kProcessTransformToForegroundApplication: number;

declare const kProcessTransformToUIElementApplication: number;

declare const kQuitAtNormalTimeMask: number;

declare const kQuitBeforeFBAsQuitMask: number;

declare const kQuitBeforeNormalTimeMask: number;

declare const kQuitBeforeShellQuitsMask: number;

declare const kQuitBeforeTerminatorAppQuitsMask: number;

declare const kQuitNeverMask: number;

declare const kQuitNotQuitDuringInstallMask: number;

declare const kQuitNotQuitDuringLogoutMask: number;

declare const kQuitOptionsMask: number;

declare const kSelectorAll1BitData: number;

declare const kSelectorAll32BitData: number;

declare const kSelectorAll4BitData: number;

declare const kSelectorAll8BitData: number;

declare const kSelectorAllAvailableData: number;

declare const kSelectorAllHugeData: number;

declare const kSelectorAllLargeData: number;

declare const kSelectorAllMiniData: number;

declare const kSelectorAllSmallData: number;

declare const kSelectorHuge1Bit: number;

declare const kSelectorHuge32Bit: number;

declare const kSelectorHuge4Bit: number;

declare const kSelectorHuge8Bit: number;

declare const kSelectorHuge8BitMask: number;

declare const kSelectorLarge1Bit: number;

declare const kSelectorLarge32Bit: number;

declare const kSelectorLarge4Bit: number;

declare const kSelectorLarge8Bit: number;

declare const kSelectorLarge8BitMask: number;

declare const kSelectorMini1Bit: number;

declare const kSelectorMini4Bit: number;

declare const kSelectorMini8Bit: number;

declare const kSelectorSmall1Bit: number;

declare const kSelectorSmall32Bit: number;

declare const kSelectorSmall4Bit: number;

declare const kSelectorSmall8Bit: number;

declare const kSelectorSmall8BitMask: number;

declare const kSetFrontProcessCausedByUser: number;

declare const kSetFrontProcessFrontWindowOnly: number;

declare var kSpeechAudioGraphProperty: string;

declare var kSpeechAudioOutputFormatProperty: string;

declare var kSpeechAudioUnitProperty: string;

declare var kSpeechCharacterModeProperty: string;

declare var kSpeechCommandDelimiterProperty: string;

declare var kSpeechCommandPrefix: string;

declare var kSpeechCommandSuffix: string;

declare var kSpeechCurrentVoiceProperty: string;

declare var kSpeechDictionaryAbbreviations: string;

declare var kSpeechDictionaryEntryPhonemes: string;

declare var kSpeechDictionaryEntrySpelling: string;

declare var kSpeechDictionaryLocaleIdentifier: string;

declare var kSpeechDictionaryModificationDate: string;

declare var kSpeechDictionaryPronunciations: string;

declare var kSpeechErrorCFCallBack: string;

declare var kSpeechErrorCallbackCharacterOffset: string;

declare var kSpeechErrorCallbackSpokenString: string;

declare var kSpeechErrorCount: string;

declare var kSpeechErrorNewest: string;

declare var kSpeechErrorNewestCharacterOffset: string;

declare var kSpeechErrorOldest: string;

declare var kSpeechErrorOldestCharacterOffset: string;

declare var kSpeechErrorsProperty: string;

declare const kSpeechGenerateTune: number;

declare var kSpeechInputModeProperty: string;

declare var kSpeechModeLiteral: string;

declare var kSpeechModeNormal: string;

declare var kSpeechModePhoneme: string;

declare var kSpeechModeText: string;

declare var kSpeechModeTune: string;

declare var kSpeechNoEndingProsody: string;

declare var kSpeechNoSpeechInterrupt: string;

declare var kSpeechNumberModeProperty: string;

declare var kSpeechOutputChannelMapProperty: string;

declare var kSpeechOutputToAudioDeviceProperty: string;

declare var kSpeechOutputToExtAudioFileProperty: string;

declare var kSpeechOutputToFileDescriptorProperty: string;

declare var kSpeechOutputToFileURLProperty: string;

declare var kSpeechPhonemeCallBack: string;

declare var kSpeechPhonemeInfoExample: string;

declare var kSpeechPhonemeInfoHiliteEnd: string;

declare var kSpeechPhonemeInfoHiliteStart: string;

declare var kSpeechPhonemeInfoOpcode: string;

declare var kSpeechPhonemeInfoSymbol: string;

declare var kSpeechPhonemeOptionsProperty: string;

declare var kSpeechPhonemeSymbolsProperty: string;

declare var kSpeechPitchBaseProperty: string;

declare var kSpeechPitchModProperty: string;

declare var kSpeechPreflightThenPause: string;

declare var kSpeechRateProperty: string;

declare var kSpeechRecentSyncProperty: string;

declare var kSpeechRefConProperty: string;

declare const kSpeechRelativeDuration: number;

declare const kSpeechRelativePitch: number;

declare var kSpeechResetProperty: string;

declare const kSpeechShowSyllables: number;

declare var kSpeechSpeechDoneCallBack: string;

declare var kSpeechStatusNumberOfCharactersLeft: string;

declare var kSpeechStatusOutputBusy: string;

declare var kSpeechStatusOutputPaused: string;

declare var kSpeechStatusPhonemeCode: string;

declare var kSpeechStatusProperty: string;

declare var kSpeechSyncCallBack: string;

declare var kSpeechSynthExtensionProperty: string;

declare var kSpeechSynthesizerInfoIdentifier: string;

declare var kSpeechSynthesizerInfoManufacturer: string;

declare var kSpeechSynthesizerInfoProperty: string;

declare var kSpeechSynthesizerInfoVersion: string;

declare var kSpeechTextDoneCallBack: string;

declare var kSpeechVoiceCreator: string;

declare var kSpeechVoiceID: string;

declare var kSpeechVolumeProperty: string;

declare var kSpeechWordCFCallBack: string;

declare const kSystemPPDDomain: number;

declare const kSystemProcess: number;

declare const kTextToSpeechSynthType: number;

declare const kTextToSpeechVoiceBundleType: number;

declare const kTextToSpeechVoiceFileType: number;

declare const kTextToSpeechVoiceType: number;

declare const kTransformDisabled: number;

declare const kTransformLabel1: number;

declare const kTransformLabel2: number;

declare const kTransformLabel3: number;

declare const kTransformLabel4: number;

declare const kTransformLabel5: number;

declare const kTransformLabel6: number;

declare const kTransformLabel7: number;

declare const kTransformNone: number;

declare const kTransformOffline: number;

declare const kTransformOpen: number;

declare const kTransformSelected: number;

declare const kTransformSelectedDisabled: number;

declare const kTransformSelectedOffline: number;

declare const kTransformSelectedOpen: number;

declare const kTranslationDataTranslation: number;

declare const kTranslationFileTranslation: number;

declare const kUAZoomFocusTypeInsertionPoint: number;

declare const kUAZoomFocusTypeOther: number;

declare const kUYVY422PixelFormat: number;

declare const kUseAtoB: number;

declare const kUseBtoA: number;

declare const kUseBtoB: number;

declare const kUseProfileIntent: number;

declare const kUserPPDDomain: number;

declare const kVerticalConstraint: number;

declare const kYUV211PixelFormat: number;

declare const kYUV411PixelFormat: number;

declare const kYUVSPixelFormat: number;

declare const kYUVUPixelFormat: number;

declare const kYVU9PixelFormat: number;

declare const kYVYU422PixelFormat: number;

declare const keyAEAttaching: number;

declare const keyAEHomographAccent: number;

declare const keyAEHomographDicInfo: number;

declare const keyAEHomographWeight: number;

declare const keyAELAHomograph: number;

declare const keyAELAMorpheme: number;

declare const keyAELAMorphemeBundle: number;

declare const keyAELAMorphemePath: number;

declare const keyAEMorphemePartOfSpeechCode: number;

declare const keyAEMorphemeTextRange: number;

declare const keyDCMFieldAttributes: number;

declare const keyDCMFieldDefaultData: number;

declare const keyDCMFieldFindMethods: number;

declare const keyDCMFieldName: number;

declare const keyDCMFieldTag: number;

declare const keyDCMFieldType: number;

declare const keyDCMMaxRecordSize: number;

declare const keyEvtDev: number;

declare const keyICEditPreferenceDestination: number;

declare const launchAllow24Bit: number;

declare const launchContinue: number;

declare const launchDontSwitch: number;

declare const launchInhibitDaemon: number;

declare const launchNoFileFlags: number;

declare const launchUseMinimum: number;

declare const macDev: number;

declare const mode32BitCompatible: number;

declare const modeCanBackground: number;

declare const modeControlPanel: number;

declare const modeDeskAccessory: number;

declare const modeDisplayManagerAware: number;

declare const modeDoesActivateOnFGSwitch: number;

declare const modeGetAppDiedMsg: number;

declare const modeGetFrontClicks: number;

declare const modeHighLevelEventAware: number;

declare const modeLaunchDontSwitch: number;

declare const modeLiteral: number;

declare const modeLocalAndRemoteHLEvents: number;

declare const modeMultiLaunch: number;

declare const modeNeedSuspendResume: number;

declare const modeNormal: number;

declare const modeOnlyBackground: number;

declare const modePhonemes: number;

declare const modeReserved: number;

declare const modeStationeryAware: number;

declare const modeText: number;

declare const modeTune: number;

declare const modeUseTextEditServices: number;

declare const noPasteboardPromiseKeeperErr: number;

declare const notPasteboardOwnerErr: number;

declare const nulDev: number;

declare const pDCMAccessMethod: number;

declare const pDCMClass: number;

declare const pDCMCopyright: number;

declare const pDCMListing: number;

declare const pDCMLocale: number;

declare const pDCMMaintenance: number;

declare const pDCMPermission: number;

declare const pasteDev: number;

declare const soCharacterMode: number;

declare const soCommandDelimiter: number;

declare const soCurrentA5: number;

declare const soCurrentVoice: number;

declare const soErrorCallBack: number;

declare const soErrors: number;

declare const soInputMode: number;

declare const soNumberMode: number;

declare const soOutputToAudioDevice: number;

declare const soOutputToExtAudioFile: number;

declare const soOutputToFileWithCFURL: number;

declare const soPhonemeCallBack: number;

declare const soPhonemeOptions: number;

declare const soPhonemeSymbols: number;

declare const soPitchBase: number;

declare const soPitchMod: number;

declare const soRate: number;

declare const soRecentSync: number;

declare const soRefCon: number;

declare const soReset: number;

declare const soSoundOutput: number;

declare const soSpeechDoneCallBack: number;

declare const soStatus: number;

declare const soSyncCallBack: number;

declare const soSynthExtension: number;

declare const soSynthType: number;

declare const soTextDoneCallBack: number;

declare const soVoiceDescription: number;

declare const soVoiceFile: number;

declare const soVolume: number;

declare const soWordCallBack: number;

declare const srcCopy: number;

declare const svAll1BitData: number;

declare const svAll4BitData: number;

declare const svAll8BitData: number;

declare const svAllAvailableData: number;

declare const svAllLargeData: number;

declare const svAllMiniData: number;

declare const svAllSmallData: number;

declare const svLarge1Bit: number;

declare const svLarge4Bit: number;

declare const svLarge8Bit: number;

declare const svMini1Bit: number;

declare const svMini4Bit: number;

declare const svMini8Bit: number;

declare const svSmall1Bit: number;

declare const svSmall4Bit: number;

declare const svSmall8Bit: number;

declare const ttDisabled: number;

declare const ttLabel1: number;

declare const ttLabel2: number;

declare const ttLabel3: number;

declare const ttLabel4: number;

declare const ttLabel5: number;

declare const ttLabel6: number;

declare const ttLabel7: number;

declare const ttNone: number;

declare const ttOffline: number;

declare const ttOpen: number;

declare const ttSelected: number;

declare const ttSelectedDisabled: number;

declare const ttSelectedOffline: number;

declare const ttSelectedOpen: number;

declare const typeAEHomographAccent: number;

declare const typeAEHomographDicInfo: number;

declare const typeAEHomographWeight: number;

declare const typeAEMorphemePartOfSpeechCode: number;

declare const typeAEMorphemeTextRange: number;

declare const typeDCMFieldAttributes: number;

declare const typeDCMFindMethod: number;

declare const typeLAHomograph: number;

declare const typeLAMorpheme: number;

declare const typeLAMorphemeBundle: number;

declare const typeLAMorphemePath: number;

declare const undoDev: number;

declare const updateDev: number;
