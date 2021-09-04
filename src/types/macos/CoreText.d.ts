
interface ALMXGlyphEntry {
	GlyphIndexOffset: number;
	HorizontalAdvance: number;
	XOffsetToHOrigin: number;
	VerticalAdvance: number;
	YOffsetToVOrigin: number;
}
declare var ALMXGlyphEntry: ALMXGlyphEntry;

interface AnchorPoint {
	x: number;
	y: number;
}
declare var AnchorPoint: AnchorPoint;

interface AnchorPointTable {
	nPoints: number;
	points: AnchorPoint;
}
declare var AnchorPointTable: AnchorPointTable;

interface AnkrTable {
	version: number;
	flags: number;
	lookupTableOffset: number;
	anchorPointTableOffset: number;
}
declare var AnkrTable: AnkrTable;

interface BslnFormat0Part {
	deltas: number;
}
declare var BslnFormat0Part: BslnFormat0Part;

interface BslnFormat2Part {
	stdGlyph: number;
	ctlPoints: number;
}
declare var BslnFormat2Part: BslnFormat2Part;

enum CTCharacterCollection {

	kCTCharacterCollectionIdentityMapping = 0,

	kCTCharacterCollectionAdobeCNS1 = 1,

	kCTCharacterCollectionAdobeGB1 = 2,

	kCTCharacterCollectionAdobeJapan1 = 3,

	kCTCharacterCollectionAdobeJapan2 = 4,

	kCTCharacterCollectionAdobeKorea1 = 5,

	kCTIdentityMappingCharacterCollection = 0,

	kCTAdobeCNS1CharacterCollection = 1,

	kCTAdobeGB1CharacterCollection = 2,

	kCTAdobeJapan1CharacterCollection = 3,

	kCTAdobeJapan2CharacterCollection = 4,

	kCTAdobeKorea1CharacterCollection = 5
}


declare function CTFontCollectionCopyExclusionDescriptors(collection: NSFontCollection): NSArray<any>;

declare function CTFontCollectionCopyFontAttribute(collection: NSFontCollection, attributeName: string, options: CTFontCollectionCopyOptions): NSArray<any>;

declare function CTFontCollectionCopyFontAttributes(collection: NSFontCollection, attributeNames: NSSet<any>, options: CTFontCollectionCopyOptions): NSArray<any>;

enum CTFontCollectionCopyOptions {

	kCTFontCollectionCopyDefaultOptions = 0,

	kCTFontCollectionCopyUnique = 1,

	kCTFontCollectionCopyStandardSort = 2
}


declare function CTFontCollectionCopyQueryDescriptors(collection: NSFontCollection): NSArray<any>;

declare function CTFontCollectionCreateCopyWithFontDescriptors(original: NSFontCollection, queryDescriptors: NSArray<any> | any[], options: NSDictionary<any, any>): NSFontCollection;

declare function CTFontCollectionCreateFromAvailableFonts(options: NSDictionary<any, any>): NSFontCollection;

declare function CTFontCollectionCreateMatchingFontDescriptors(collection: NSFontCollection): NSArray<any>;

declare function CTFontCollectionCreateMatchingFontDescriptorsForFamily(collection: NSFontCollection, familyName: string, options: NSDictionary<any, any>): NSArray<any>;

declare function CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback(collection: NSFontCollection, sortCallback: (p1: NSFontDescriptor, p2: NSFontDescriptor, p3: any) => CFComparisonResult, refCon: any): NSArray<any>;

declare function CTFontCollectionCreateMatchingFontDescriptorsWithOptions(collection: NSFontCollection, options: NSDictionary<any, any>): NSArray<any>;

declare function CTFontCollectionCreateMutableCopy(original: NSFontCollection): NSFontCollection;

declare function CTFontCollectionCreateWithFontDescriptors(queryDescriptors: NSArray<any> | any[], options: NSDictionary<any, any>): NSFontCollection;

declare function CTFontCollectionGetTypeID(): number;

declare function CTFontCollectionSetExclusionDescriptors(collection: NSFontCollection, descriptors: NSArray<any> | any[]): void;

declare function CTFontCollectionSetQueryDescriptors(collection: NSFontCollection, descriptors: NSArray<any> | any[]): void;

declare function CTFontCopyAttribute(font: NSFont, attribute: string): any;

declare function CTFontCopyAvailableTables(font: NSFont, options: CTFontTableOptions): NSArray<any>;

declare function CTFontCopyCharacterSet(font: NSFont): NSCharacterSet;

declare function CTFontCopyDefaultCascadeListForLanguages(font: NSFont, languagePrefList: NSArray<any> | any[]): NSArray<any>;

declare function CTFontCopyDisplayName(font: NSFont): string;

declare function CTFontCopyFamilyName(font: NSFont): string;

declare function CTFontCopyFeatureSettings(font: NSFont): NSArray<any>;

declare function CTFontCopyFeatures(font: NSFont): NSArray<any>;

declare function CTFontCopyFontDescriptor(font: NSFont): NSFontDescriptor;

declare function CTFontCopyFullName(font: NSFont): string;

declare function CTFontCopyGraphicsFont(font: NSFont, attributes: NSFontDescriptor): any;

declare function CTFontCopyLocalizedName(font: NSFont, nameKey: string, actualLanguage: string): string;

declare function CTFontCopyName(font: NSFont, nameKey: string): string;

declare function CTFontCopyPostScriptName(font: NSFont): string;

declare function CTFontCopySupportedLanguages(font: NSFont): NSArray<any>;

declare function CTFontCopyTable(font: NSFont, table: number, options: CTFontTableOptions): NSData;

declare function CTFontCopyTraits(font: NSFont): NSDictionary<any, any>;

declare function CTFontCopyVariation(font: NSFont): NSDictionary<any, any>;

declare function CTFontCopyVariationAxes(font: NSFont): NSArray<any>;

declare function CTFontCreateCopyWithAttributes(font: NSFont, size: number, matrix: CGAffineTransform, attributes: NSFontDescriptor): NSFont;

declare function CTFontCreateCopyWithFamily(font: NSFont, size: number, matrix: CGAffineTransform, family: string): NSFont;

declare function CTFontCreateCopyWithSymbolicTraits(font: NSFont, size: number, matrix: CGAffineTransform, symTraitValue: CTFontSymbolicTraits, symTraitMask: CTFontSymbolicTraits): NSFont;

declare function CTFontCreateForString(currentFont: NSFont, string: string, range: CFRange): NSFont;

declare function CTFontCreateForStringWithLanguage(currentFont: NSFont, string: string, range: CFRange, language: string): NSFont;

declare function CTFontCreatePathForGlyph(font: NSFont, glyph: number, matrix: CGAffineTransform): any;

declare function CTFontCreateUIFontForLanguage(uiType: CTFontUIFontType, size: number, language: string): NSFont;

declare function CTFontCreateWithFontDescriptor(descriptor: NSFontDescriptor, size: number, matrix: CGAffineTransform): NSFont;

declare function CTFontCreateWithFontDescriptorAndOptions(descriptor: NSFontDescriptor, size: number, matrix: CGAffineTransform, options: CTFontOptions): NSFont;

declare function CTFontCreateWithGraphicsFont(graphicsFont: any, size: number, matrix: CGAffineTransform, attributes: NSFontDescriptor): NSFont;

declare function CTFontCreateWithName(name: string, size: number, matrix: CGAffineTransform): NSFont;

declare function CTFontCreateWithNameAndOptions(name: string, size: number, matrix: CGAffineTransform, options: CTFontOptions): NSFont;

declare function CTFontCreateWithPlatformFont(platformFont: number, size: number, matrix: CGAffineTransform, attributes: NSFontDescriptor): NSFont;

declare function CTFontDescriptorCopyAttribute(descriptor: NSFontDescriptor, attribute: string): any;

declare function CTFontDescriptorCopyAttributes(descriptor: NSFontDescriptor): NSDictionary<any, any>;

declare function CTFontDescriptorCopyLocalizedAttribute(descriptor: NSFontDescriptor, attribute: string, language: string): any;

declare function CTFontDescriptorCreateCopyWithAttributes(original: NSFontDescriptor, attributes: NSDictionary<any, any>): NSFontDescriptor;

declare function CTFontDescriptorCreateCopyWithFamily(original: NSFontDescriptor, family: string): NSFontDescriptor;

declare function CTFontDescriptorCreateCopyWithFeature(original: NSFontDescriptor, featureTypeIdentifier: number, featureSelectorIdentifier: number): NSFontDescriptor;

declare function CTFontDescriptorCreateCopyWithSymbolicTraits(original: NSFontDescriptor, symTraitValue: CTFontSymbolicTraits, symTraitMask: CTFontSymbolicTraits): NSFontDescriptor;

declare function CTFontDescriptorCreateCopyWithVariation(original: NSFontDescriptor, variationIdentifier: number, variationValue: number): NSFontDescriptor;

declare function CTFontDescriptorCreateMatchingFontDescriptor(descriptor: NSFontDescriptor, mandatoryAttributes: NSSet<any>): NSFontDescriptor;

declare function CTFontDescriptorCreateMatchingFontDescriptors(descriptor: NSFontDescriptor, mandatoryAttributes: NSSet<any>): NSArray<any>;

declare function CTFontDescriptorCreateWithAttributes(attributes: NSDictionary<any, any>): NSFontDescriptor;

declare function CTFontDescriptorCreateWithNameAndSize(name: string, size: number): NSFontDescriptor;

declare function CTFontDescriptorGetTypeID(): number;

declare function CTFontDescriptorMatchFontDescriptorsWithProgressHandler(descriptors: NSArray<any> | any[], mandatoryAttributes: NSSet<any>, progressBlock: (p1: CTFontDescriptorMatchingState, p2: NSDictionary<any, any>) => boolean): boolean;

enum CTFontDescriptorMatchingState {

	kCTFontDescriptorMatchingDidBegin = 0,

	kCTFontDescriptorMatchingDidFinish = 1,

	kCTFontDescriptorMatchingWillBeginQuerying = 2,

	kCTFontDescriptorMatchingStalled = 3,

	kCTFontDescriptorMatchingWillBeginDownloading = 4,

	kCTFontDescriptorMatchingDownloading = 5,

	kCTFontDescriptorMatchingDidFinishDownloading = 6,

	kCTFontDescriptorMatchingDidMatch = 7,

	kCTFontDescriptorMatchingDidFailWithError = 8
}


declare function CTFontDrawGlyphs(font: NSFont, glyphs: number, positions: CGPoint, count: number, context: any): void;

enum CTFontFormat {

	kCTFontFormatUnrecognized = 0,

	kCTFontFormatOpenTypePostScript = 1,

	kCTFontFormatOpenTypeTrueType = 2,

	kCTFontFormatTrueType = 3,

	kCTFontFormatPostScript = 4,

	kCTFontFormatBitmap = 5
}


declare function CTFontGetAdvancesForGlyphs(font: NSFont, orientation: CTFontOrientation, glyphs: number, advances: CGSize, count: number): number;

declare function CTFontGetAscent(font: NSFont): number;

declare function CTFontGetBoundingBox(font: NSFont): CGRect;

declare function CTFontGetBoundingRectsForGlyphs(font: NSFont, orientation: CTFontOrientation, glyphs: number, boundingRects: CGRect, count: number): CGRect;

declare function CTFontGetCapHeight(font: NSFont): number;

declare function CTFontGetDescent(font: NSFont): number;

declare function CTFontGetGlyphCount(font: NSFont): number;

declare function CTFontGetGlyphWithName(font: NSFont, glyphName: string): number;

declare function CTFontGetGlyphsForCharacters(font: NSFont, characters: number, glyphs: number, count: number): boolean;

declare function CTFontGetLeading(font: NSFont): number;

declare function CTFontGetLigatureCaretPositions(font: NSFont, glyph: number, positions: number, maxPositions: number): number;

declare function CTFontGetMatrix(font: NSFont): CGAffineTransform;

declare function CTFontGetOpticalBoundsForGlyphs(font: NSFont, glyphs: number, boundingRects: CGRect, count: number, options: number): CGRect;

declare function CTFontGetPlatformFont(font: NSFont, attributes: NSFontDescriptor): number;

declare function CTFontGetSize(font: NSFont): number;

declare function CTFontGetSlantAngle(font: NSFont): number;

declare function CTFontGetStringEncoding(font: NSFont): number;

declare function CTFontGetSymbolicTraits(font: NSFont): CTFontSymbolicTraits;

declare function CTFontGetTypeID(): number;

declare function CTFontGetUnderlinePosition(font: NSFont): number;

declare function CTFontGetUnderlineThickness(font: NSFont): number;

declare function CTFontGetUnitsPerEm(font: NSFont): number;

declare function CTFontGetVerticalTranslationsForGlyphs(font: NSFont, glyphs: number, translations: CGSize, count: number): void;

declare function CTFontGetXHeight(font: NSFont): number;

enum CTFontManagerAutoActivationSetting {

	kCTFontManagerAutoActivationDefault = 0,

	kCTFontManagerAutoActivationDisabled = 1,

	kCTFontManagerAutoActivationEnabled = 2,

	kCTFontManagerAutoActivationPromptUser = 3
}


declare function CTFontManagerCompareFontFamilyNames(family1: any, family2: any, context: any): CFComparisonResult;

declare function CTFontManagerCopyAvailableFontFamilyNames(): NSArray<any>;

declare function CTFontManagerCopyAvailableFontURLs(): NSArray<any>;

declare function CTFontManagerCopyAvailablePostScriptNames(): NSArray<any>;

declare function CTFontManagerCreateFontDescriptorFromData(data: NSData): NSFontDescriptor;

declare function CTFontManagerCreateFontDescriptorsFromData(data: NSData): NSArray<any>;

declare function CTFontManagerCreateFontDescriptorsFromURL(fileURL: NSURL): NSArray<any>;

declare function CTFontManagerCreateFontRequestRunLoopSource(sourceOrder: number, createMatchesCallback: (p1: NSDictionary<any, any>, p2: number) => NSArray<any>): any;

declare function CTFontManagerEnableFontDescriptors(descriptors: NSArray<any> | any[], enable: boolean): void;

enum CTFontManagerError {

	kCTFontManagerErrorFileNotFound = 101,

	kCTFontManagerErrorInsufficientPermissions = 102,

	kCTFontManagerErrorUnrecognizedFormat = 103,

	kCTFontManagerErrorInvalidFontData = 104,

	kCTFontManagerErrorAlreadyRegistered = 105,

	kCTFontManagerErrorExceededResourceLimit = 106,

	kCTFontManagerErrorAssetNotFound = 107,

	kCTFontManagerErrorNotRegistered = 201,

	kCTFontManagerErrorInUse = 202,

	kCTFontManagerErrorSystemRequired = 203,

	kCTFontManagerErrorRegistrationFailed = 301,

	kCTFontManagerErrorMissingEntitlement = 302,

	kCTFontManagerErrorInsufficientInfo = 303,

	kCTFontManagerErrorCancelledByUser = 304,

	kCTFontManagerErrorDuplicatedName = 305,

	kCTFontManagerErrorInvalidFilePath = 306
}


declare function CTFontManagerGetAutoActivationSetting(bundleIdentifier: string): CTFontManagerAutoActivationSetting;

declare function CTFontManagerGetScopeForURL(fontURL: NSURL): CTFontManagerScope;

declare function CTFontManagerIsSupportedFont(fontURL: NSURL): boolean;

declare function CTFontManagerRegisterFontDescriptors(fontDescriptors: NSArray<any> | any[], scope: CTFontManagerScope, enabled: boolean, registrationHandler: (p1: NSArray<any>, p2: boolean) => boolean): void;

declare function CTFontManagerRegisterFontURLs(fontURLs: NSArray<any> | any[], scope: CTFontManagerScope, enabled: boolean, registrationHandler: (p1: NSArray<any>, p2: boolean) => boolean): void;

declare function CTFontManagerRegisterFontsForURL(fontURL: NSURL, scope: CTFontManagerScope, error: NSError): boolean;

declare function CTFontManagerRegisterGraphicsFont(font: any, error: NSError): boolean;

enum CTFontManagerScope {

	kCTFontManagerScopeNone = 0,

	kCTFontManagerScopeProcess = 1,

	kCTFontManagerScopePersistent = 2,

	kCTFontManagerScopeSession = 3,

	kCTFontManagerScopeUser = 2
}


declare function CTFontManagerSetAutoActivationSetting(bundleIdentifier: string, setting: CTFontManagerAutoActivationSetting): void;

declare function CTFontManagerUnregisterFontDescriptors(fontDescriptors: NSArray<any> | any[], scope: CTFontManagerScope, registrationHandler: (p1: NSArray<any>, p2: boolean) => boolean): void;

declare function CTFontManagerUnregisterFontURLs(fontURLs: NSArray<any> | any[], scope: CTFontManagerScope, registrationHandler: (p1: NSArray<any>, p2: boolean) => boolean): void;

declare function CTFontManagerUnregisterFontsForURL(fontURL: NSURL, scope: CTFontManagerScope, error: NSError): boolean;

declare function CTFontManagerUnregisterGraphicsFont(font: any, error: NSError): boolean;

enum CTFontOptions {

	kCTFontOptionsDefault = 0,

	kCTFontOptionsPreventAutoActivation = 1,

	kCTFontOptionsPreferSystemFont = 4
}


enum CTFontOrientation {

	kCTFontOrientationDefault = 0,

	kCTFontOrientationHorizontal = 1,

	kCTFontOrientationVertical = 2,

	kCTFontDefaultOrientation = 0,

	kCTFontHorizontalOrientation = 1,

	kCTFontVerticalOrientation = 2
}


enum CTFontStylisticClass {

	kCTFontClassUnknown = 0,

	kCTFontClassOldStyleSerifs = 268435456,

	kCTFontClassTransitionalSerifs = 536870912,

	kCTFontClassModernSerifs = 805306368,

	kCTFontClassClarendonSerifs = 1073741824,

	kCTFontClassSlabSerifs = 1342177280,

	kCTFontClassFreeformSerifs = 1879048192,

	kCTFontClassSansSerif = 2147483648,

	kCTFontClassOrnamentals = 2415919104,

	kCTFontClassScripts = 2684354560,

	kCTFontClassSymbolic = 3221225472,

	kCTFontUnknownClass = 0,

	kCTFontOldStyleSerifsClass = 268435456,

	kCTFontTransitionalSerifsClass = 536870912,

	kCTFontModernSerifsClass = 805306368,

	kCTFontClarendonSerifsClass = 1073741824,

	kCTFontSlabSerifsClass = 1342177280,

	kCTFontFreeformSerifsClass = 1879048192,

	kCTFontSansSerifClass = 2147483648,

	kCTFontOrnamentalsClass = 2415919104,

	kCTFontScriptsClass = 2684354560,

	kCTFontSymbolicClass = 3221225472
}


enum CTFontSymbolicTraits {

	kCTFontTraitItalic = 1,

	kCTFontTraitBold = 2,

	kCTFontTraitExpanded = 32,

	kCTFontTraitCondensed = 64,

	kCTFontTraitMonoSpace = 1024,

	kCTFontTraitVertical = 2048,

	kCTFontTraitUIOptimized = 4096,

	kCTFontTraitColorGlyphs = 8192,

	kCTFontTraitComposite = 16384,

	kCTFontTraitClassMask = 4026531840,

	kCTFontItalicTrait = 1,

	kCTFontBoldTrait = 2,

	kCTFontExpandedTrait = 32,

	kCTFontCondensedTrait = 64,

	kCTFontMonoSpaceTrait = 1024,

	kCTFontVerticalTrait = 2048,

	kCTFontUIOptimizedTrait = 4096,

	kCTFontColorGlyphsTrait = 8192,

	kCTFontCompositeTrait = 16384,

	kCTFontClassMaskTrait = 4026531840
}


enum CTFontTableOptions {

	kCTFontTableOptionNoOptions = 0,

	kCTFontTableOptionExcludeSynthetic = 1
}


enum CTFontUIFontType {

	kCTFontUIFontNone = 4294967295,

	kCTFontUIFontUser = 0,

	kCTFontUIFontUserFixedPitch = 1,

	kCTFontUIFontSystem = 2,

	kCTFontUIFontEmphasizedSystem = 3,

	kCTFontUIFontSmallSystem = 4,

	kCTFontUIFontSmallEmphasizedSystem = 5,

	kCTFontUIFontMiniSystem = 6,

	kCTFontUIFontMiniEmphasizedSystem = 7,

	kCTFontUIFontViews = 8,

	kCTFontUIFontApplication = 9,

	kCTFontUIFontLabel = 10,

	kCTFontUIFontMenuTitle = 11,

	kCTFontUIFontMenuItem = 12,

	kCTFontUIFontMenuItemMark = 13,

	kCTFontUIFontMenuItemCmdKey = 14,

	kCTFontUIFontWindowTitle = 15,

	kCTFontUIFontPushButton = 16,

	kCTFontUIFontUtilityWindowTitle = 17,

	kCTFontUIFontAlertHeader = 18,

	kCTFontUIFontSystemDetail = 19,

	kCTFontUIFontEmphasizedSystemDetail = 20,

	kCTFontUIFontToolbar = 21,

	kCTFontUIFontSmallToolbar = 22,

	kCTFontUIFontMessage = 23,

	kCTFontUIFontPalette = 24,

	kCTFontUIFontToolTip = 25,

	kCTFontUIFontControlContent = 26,

	kCTFontNoFontType = 4294967295,

	kCTFontUserFontType = 0,

	kCTFontUserFixedPitchFontType = 1,

	kCTFontSystemFontType = 2,

	kCTFontEmphasizedSystemFontType = 3,

	kCTFontSmallSystemFontType = 4,

	kCTFontSmallEmphasizedSystemFontType = 5,

	kCTFontMiniSystemFontType = 6,

	kCTFontMiniEmphasizedSystemFontType = 7,

	kCTFontViewsFontType = 8,

	kCTFontApplicationFontType = 9,

	kCTFontLabelFontType = 10,

	kCTFontMenuTitleFontType = 11,

	kCTFontMenuItemFontType = 12,

	kCTFontMenuItemMarkFontType = 13,

	kCTFontMenuItemCmdKeyFontType = 14,

	kCTFontWindowTitleFontType = 15,

	kCTFontPushButtonFontType = 16,

	kCTFontUtilityWindowTitleFontType = 17,

	kCTFontAlertHeaderFontType = 18,

	kCTFontSystemDetailFontType = 19,

	kCTFontEmphasizedSystemDetailFontType = 20,

	kCTFontToolbarFontType = 21,

	kCTFontSmallToolbarFontType = 22,

	kCTFontMessageFontType = 23,

	kCTFontPaletteFontType = 24,

	kCTFontToolTipFontType = 25,

	kCTFontControlContentFontType = 26
}


declare function CTFrameDraw(frame: any, context: any): void;

declare function CTFrameGetFrameAttributes(frame: any): NSDictionary<any, any>;

declare function CTFrameGetLineOrigins(frame: any, range: CFRange, origins: CGPoint): void;

declare function CTFrameGetLines(frame: any): NSArray<any>;

declare function CTFrameGetPath(frame: any): any;

declare function CTFrameGetStringRange(frame: any): CFRange;

declare function CTFrameGetTypeID(): number;

declare function CTFrameGetVisibleStringRange(frame: any): CFRange;

enum CTFramePathFillRule {

	kCTFramePathFillEvenOdd = 0,

	kCTFramePathFillWindingNumber = 1
}


enum CTFrameProgression {

	kCTFrameProgressionTopToBottom = 0,

	kCTFrameProgressionRightToLeft = 1,

	kCTFrameProgressionLeftToRight = 2
}


declare function CTFramesetterCreateFrame(framesetter: any, stringRange: CFRange, path: any, frameAttributes: NSDictionary<any, any>): any;

declare function CTFramesetterCreateWithAttributedString(attrString: NSAttributedString): any;

declare function CTFramesetterCreateWithTypesetter(typesetter: any): any;

declare function CTFramesetterGetTypeID(): number;

declare function CTFramesetterGetTypesetter(framesetter: any): any;

declare function CTFramesetterSuggestFrameSizeWithConstraints(framesetter: any, stringRange: CFRange, frameAttributes: NSDictionary<any, any>, constraints: CGSize, fitRange: CFRange): CGSize;

declare function CTGetCoreTextVersion(): number;

declare function CTGlyphInfoCreateWithCharacterIdentifier(cid: number, collection: CTCharacterCollection, baseString: string): NSGlyphInfo;

declare function CTGlyphInfoCreateWithGlyph(glyph: number, font: NSFont, baseString: string): NSGlyphInfo;

declare function CTGlyphInfoCreateWithGlyphName(glyphName: string, font: NSFont, baseString: string): NSGlyphInfo;

declare function CTGlyphInfoGetCharacterCollection(glyphInfo: NSGlyphInfo): CTCharacterCollection;

declare function CTGlyphInfoGetCharacterIdentifier(glyphInfo: NSGlyphInfo): number;

declare function CTGlyphInfoGetGlyph(glyphInfo: NSGlyphInfo): number;

declare function CTGlyphInfoGetGlyphName(glyphInfo: NSGlyphInfo): string;

declare function CTGlyphInfoGetTypeID(): number;

enum CTLineBoundsOptions {

	kCTLineBoundsExcludeTypographicLeading = 1,

	kCTLineBoundsExcludeTypographicShifts = 2,

	kCTLineBoundsUseHangingPunctuation = 4,

	kCTLineBoundsUseGlyphPathBounds = 8,

	kCTLineBoundsUseOpticalBounds = 16,

	kCTLineBoundsIncludeLanguageExtents = 32
}


enum CTLineBreakMode {

	kCTLineBreakByWordWrapping = 0,

	kCTLineBreakByCharWrapping = 1,

	kCTLineBreakByClipping = 2,

	kCTLineBreakByTruncatingHead = 3,

	kCTLineBreakByTruncatingTail = 4,

	kCTLineBreakByTruncatingMiddle = 5
}


declare function CTLineCreateJustifiedLine(line: any, justificationFactor: number, justificationWidth: number): any;

declare function CTLineCreateTruncatedLine(line: any, width: number, truncationType: CTLineTruncationType, truncationToken: any): any;

declare function CTLineCreateWithAttributedString(attrString: NSAttributedString): any;

declare function CTLineDraw(line: any, context: any): void;

declare function CTLineEnumerateCaretOffsets(line: any, block: (p1: number, p2: number, p3: boolean, p4: boolean) => void): void;

declare function CTLineGetBoundsWithOptions(line: any, options: CTLineBoundsOptions): CGRect;

declare function CTLineGetGlyphCount(line: any): number;

declare function CTLineGetGlyphRuns(line: any): NSArray<any>;

declare function CTLineGetImageBounds(line: any, context: any): CGRect;

declare function CTLineGetOffsetForStringIndex(line: any, charIndex: number, secondaryOffset: number): number;

declare function CTLineGetPenOffsetForFlush(line: any, flushFactor: number, flushWidth: number): number;

declare function CTLineGetStringIndexForPosition(line: any, position: CGPoint): number;

declare function CTLineGetStringRange(line: any): CFRange;

declare function CTLineGetTrailingWhitespaceWidth(line: any): number;

declare function CTLineGetTypeID(): number;

declare function CTLineGetTypographicBounds(line: any, ascent: number, descent: number, leading: number): number;

enum CTLineTruncationType {

	kCTLineTruncationStart = 0,

	kCTLineTruncationEnd = 1,

	kCTLineTruncationMiddle = 2
}


declare function CTParagraphStyleCreate(settings: CTParagraphStyleSetting, settingCount: number): any;

declare function CTParagraphStyleCreateCopy(paragraphStyle: any): any;

declare function CTParagraphStyleGetTypeID(): number;

declare function CTParagraphStyleGetValueForSpecifier(paragraphStyle: any, spec: CTParagraphStyleSpecifier, valueBufferSize: number, valueBuffer: any): boolean;

interface CTParagraphStyleSetting {
	spec: CTParagraphStyleSpecifier;
	valueSize: number;
	value: any;
}
declare var CTParagraphStyleSetting: CTParagraphStyleSetting;

enum CTParagraphStyleSpecifier {

	kCTParagraphStyleSpecifierAlignment = 0,

	kCTParagraphStyleSpecifierFirstLineHeadIndent = 1,

	kCTParagraphStyleSpecifierHeadIndent = 2,

	kCTParagraphStyleSpecifierTailIndent = 3,

	kCTParagraphStyleSpecifierTabStops = 4,

	kCTParagraphStyleSpecifierDefaultTabInterval = 5,

	kCTParagraphStyleSpecifierLineBreakMode = 6,

	kCTParagraphStyleSpecifierLineHeightMultiple = 7,

	kCTParagraphStyleSpecifierMaximumLineHeight = 8,

	kCTParagraphStyleSpecifierMinimumLineHeight = 9,

	kCTParagraphStyleSpecifierLineSpacing = 10,

	kCTParagraphStyleSpecifierParagraphSpacing = 11,

	kCTParagraphStyleSpecifierParagraphSpacingBefore = 12,

	kCTParagraphStyleSpecifierBaseWritingDirection = 13,

	kCTParagraphStyleSpecifierMaximumLineSpacing = 14,

	kCTParagraphStyleSpecifierMinimumLineSpacing = 15,

	kCTParagraphStyleSpecifierLineSpacingAdjustment = 16,

	kCTParagraphStyleSpecifierLineBoundsOptions = 17,

	kCTParagraphStyleSpecifierCount = 18
}


enum CTRubyAlignment {

	kCTRubyAlignmentInvalid = 255,

	kCTRubyAlignmentAuto = 0,

	kCTRubyAlignmentStart = 1,

	kCTRubyAlignmentCenter = 2,

	kCTRubyAlignmentEnd = 3,

	kCTRubyAlignmentDistributeLetter = 4,

	kCTRubyAlignmentDistributeSpace = 5,

	kCTRubyAlignmentLineEdge = 6
}


declare function CTRubyAnnotationCreate(alignment: CTRubyAlignment, overhang: CTRubyOverhang, sizeFactor: number, text: string): any;

declare function CTRubyAnnotationCreateCopy(rubyAnnotation: any): any;

declare function CTRubyAnnotationCreateWithAttributes(alignment: CTRubyAlignment, overhang: CTRubyOverhang, position: CTRubyPosition, string: string, attributes: NSDictionary<any, any>): any;

declare function CTRubyAnnotationGetAlignment(rubyAnnotation: any): CTRubyAlignment;

declare function CTRubyAnnotationGetOverhang(rubyAnnotation: any): CTRubyOverhang;

declare function CTRubyAnnotationGetSizeFactor(rubyAnnotation: any): number;

declare function CTRubyAnnotationGetTextForPosition(rubyAnnotation: any, position: CTRubyPosition): string;

declare function CTRubyAnnotationGetTypeID(): number;

enum CTRubyOverhang {

	kCTRubyOverhangInvalid = 255,

	kCTRubyOverhangAuto = 0,

	kCTRubyOverhangStart = 1,

	kCTRubyOverhangEnd = 2,

	kCTRubyOverhangNone = 3
}


enum CTRubyPosition {

	kCTRubyPositionBefore = 0,

	kCTRubyPositionAfter = 1,

	kCTRubyPositionInterCharacter = 2,

	kCTRubyPositionInline = 3,

	kCTRubyPositionCount = 4
}


interface CTRunDelegateCallbacks {
	version: number;
	dealloc: (p1: any) => void;
	getAscent: (p1: any) => number;
	getDescent: (p1: any) => number;
	getWidth: (p1: any) => number;
}
declare var CTRunDelegateCallbacks: CTRunDelegateCallbacks;

declare function CTRunDelegateCreate(callbacks: CTRunDelegateCallbacks, refCon: any): any;

declare function CTRunDelegateGetRefCon(runDelegate: any): any;

declare function CTRunDelegateGetTypeID(): number;

declare function CTRunDraw(run: any, context: any, range: CFRange): void;

declare function CTRunGetAdvances(run: any, range: CFRange, buffer: CGSize): void;

declare function CTRunGetAdvancesPtr(run: any): CGSize;

declare function CTRunGetAttributes(run: any): NSDictionary<any, any>;

declare function CTRunGetBaseAdvancesAndOrigins(runRef: any, range: CFRange, advancesBuffer: CGSize, originsBuffer: CGPoint): void;

declare function CTRunGetGlyphCount(run: any): number;

declare function CTRunGetGlyphs(run: any, range: CFRange, buffer: number): void;

declare function CTRunGetGlyphsPtr(run: any): number;

declare function CTRunGetImageBounds(run: any, context: any, range: CFRange): CGRect;

declare function CTRunGetPositions(run: any, range: CFRange, buffer: CGPoint): void;

declare function CTRunGetPositionsPtr(run: any): CGPoint;

declare function CTRunGetStatus(run: any): CTRunStatus;

declare function CTRunGetStringIndices(run: any, range: CFRange, buffer: number): void;

declare function CTRunGetStringIndicesPtr(run: any): number;

declare function CTRunGetStringRange(run: any): CFRange;

declare function CTRunGetTextMatrix(run: any): CGAffineTransform;

declare function CTRunGetTypeID(): number;

declare function CTRunGetTypographicBounds(run: any, range: CFRange, ascent: number, descent: number, leading: number): number;

enum CTRunStatus {

	kCTRunStatusNoStatus = 0,

	kCTRunStatusRightToLeft = 1,

	kCTRunStatusNonMonotonic = 2,

	kCTRunStatusHasNonIdentityMatrix = 4
}


enum CTTextAlignment {

	kCTTextAlignmentLeft = 0,

	kCTTextAlignmentRight = 1,

	kCTTextAlignmentCenter = 2,

	kCTTextAlignmentJustified = 3,

	kCTTextAlignmentNatural = 4,

	kCTLeftTextAlignment = 0,

	kCTRightTextAlignment = 1,

	kCTCenterTextAlignment = 2,

	kCTJustifiedTextAlignment = 3,

	kCTNaturalTextAlignment = 4
}


declare function CTTextTabCreate(alignment: CTTextAlignment, location: number, options: NSDictionary<any, any>): any;

declare function CTTextTabGetAlignment(tab: any): CTTextAlignment;

declare function CTTextTabGetLocation(tab: any): number;

declare function CTTextTabGetOptions(tab: any): NSDictionary<any, any>;

declare function CTTextTabGetTypeID(): number;

declare function CTTypesetterCreateLine(typesetter: any, stringRange: CFRange): any;

declare function CTTypesetterCreateLineWithOffset(typesetter: any, stringRange: CFRange, offset: number): any;

declare function CTTypesetterCreateWithAttributedString(string: NSAttributedString): any;

declare function CTTypesetterCreateWithAttributedStringAndOptions(string: NSAttributedString, options: NSDictionary<any, any>): any;

declare function CTTypesetterGetTypeID(): number;

declare function CTTypesetterSuggestClusterBreak(typesetter: any, startIndex: number, width: number): number;

declare function CTTypesetterSuggestClusterBreakWithOffset(typesetter: any, startIndex: number, width: number, offset: number): number;

declare function CTTypesetterSuggestLineBreak(typesetter: any, startIndex: number, width: number): number;

declare function CTTypesetterSuggestLineBreakWithOffset(typesetter: any, startIndex: number, width: number, offset: number): number;

enum CTUnderlineStyle {

	kCTUnderlineStyleNone = 0,

	kCTUnderlineStyleSingle = 1,

	kCTUnderlineStyleThick = 2,

	kCTUnderlineStyleDouble = 9
}


enum CTUnderlineStyleModifiers {

	kCTUnderlinePatternSolid = 0,

	kCTUnderlinePatternDot = 256,

	kCTUnderlinePatternDash = 512,

	kCTUnderlinePatternDashDot = 768,

	kCTUnderlinePatternDashDotDot = 1024
}


enum CTWritingDirection {

	kCTWritingDirectionNatural = -1,

	kCTWritingDirectionLeftToRight = 0,

	kCTWritingDirectionRightToLeft = 1
}


interface FontVariation {
	name: number;
	value: number;
}
declare var FontVariation: FontVariation;

interface JustPCAction {
	actionCount: number;
	actions: JustPCActionSubrecord;
}
declare var JustPCAction: JustPCAction;

interface JustPCActionSubrecord {
	theClass: number;
	theType: number;
	length: number;
	data: number;
}
declare var JustPCActionSubrecord: JustPCActionSubrecord;

interface JustPCConditionalAddAction {
	substThreshold: number;
	addGlyph: number;
	substGlyph: number;
}
declare var JustPCConditionalAddAction: JustPCConditionalAddAction;

interface JustPCDecompositionAction {
	lowerLimit: number;
	upperLimit: number;
	order: number;
	count: number;
	glyphs: number;
}
declare var JustPCDecompositionAction: JustPCDecompositionAction;

interface JustPCDuctilityAction {
	ductilityAxis: number;
	minimumLimit: number;
	noStretchValue: number;
	maximumLimit: number;
}
declare var JustPCDuctilityAction: JustPCDuctilityAction;

interface JustPCGlyphRepeatAddAction {
	flags: number;
	glyph: number;
}
declare var JustPCGlyphRepeatAddAction: JustPCGlyphRepeatAddAction;

interface JustTable {
	version: number;
	format: number;
	horizHeaderOffset: number;
	vertHeaderOffset: number;
}
declare var JustTable: JustTable;

interface JustWidthDeltaEntry {
	justClass: number;
	beforeGrowLimit: number;
	beforeShrinkLimit: number;
	afterGrowLimit: number;
	afterShrinkLimit: number;
	growFlags: number;
	shrinkFlags: number;
}
declare var JustWidthDeltaEntry: JustWidthDeltaEntry;

interface JustWidthDeltaGroup {
	count: number;
	entries: JustWidthDeltaEntry;
}
declare var JustWidthDeltaGroup: JustWidthDeltaGroup;

interface KernIndexArrayHeader {
	glyphCount: number;
	kernValueCount: number;
	leftClassCount: number;
	rightClassCount: number;
	flags: number;
	kernValue: number;
	leftClass: number;
	rightClass: number;
	kernIndex: number;
}
declare var KernIndexArrayHeader: KernIndexArrayHeader;

interface KernKerningPair {
	left: number;
	right: number;
}
declare var KernKerningPair: KernKerningPair;

interface KernOffsetTable {
	firstGlyph: number;
	nGlyphs: number;
	offsetTable: number;
}
declare var KernOffsetTable: KernOffsetTable;

interface KernOrderedListEntry {
	pair: KernKerningPair;
	value: number;
}
declare var KernOrderedListEntry: KernOrderedListEntry;

interface KernOrderedListHeader {
	nPairs: number;
	searchRange: number;
	entrySelector: number;
	rangeShift: number;
	table: number;
}
declare var KernOrderedListHeader: KernOrderedListHeader;

interface KernSimpleArrayHeader {
	rowWidth: number;
	leftOffsetTable: number;
	rightOffsetTable: number;
	theArray: number;
	firstTable: number;
}
declare var KernSimpleArrayHeader: KernSimpleArrayHeader;

interface KernStateEntry {
	newState: number;
	flags: number;
}
declare var KernStateEntry: KernStateEntry;

interface KernStateHeader {
	header: STHeader;
	valueTable: number;
	firstTable: number;
}
declare var KernStateHeader: KernStateHeader;

interface KernTableHeader {
	version: number;
	nTables: number;
	firstSubtable: number;
}
declare var KernTableHeader: KernTableHeader;

interface KernVersion0Header {
	version: number;
	nTables: number;
	firstSubtable: number;
}
declare var KernVersion0Header: KernVersion0Header;

interface KerxAnchorPointAction {
	markAnchorPoint: number;
	currAnchorPoint: number;
}
declare var KerxAnchorPointAction: KerxAnchorPointAction;

interface KerxControlPointAction {
	markControlPoint: number;
	currControlPoint: number;
}
declare var KerxControlPointAction: KerxControlPointAction;

interface KerxControlPointEntry {
	newState: number;
	flags: number;
	actionIndex: number;
}
declare var KerxControlPointEntry: KerxControlPointEntry;

interface KerxControlPointHeader {
	header: STXHeader;
	flags: number;
	firstTable: number;
}
declare var KerxControlPointHeader: KerxControlPointHeader;

interface KerxCoordinateAction {
	markX: number;
	markY: number;
	currX: number;
	currY: number;
}
declare var KerxCoordinateAction: KerxCoordinateAction;

interface KerxIndexArrayHeader {
	flags: number;
	rowCount: number;
	columnCount: number;
	rowIndexTableOffset: number;
	columnIndexTableOffset: number;
	kerningArrayOffset: number;
	kerningVectorOffset: number;
}
declare var KerxIndexArrayHeader: KerxIndexArrayHeader;

interface KerxKerningPair {
	left: number;
	right: number;
}
declare var KerxKerningPair: KerxKerningPair;

interface KerxOrderedListEntry {
	pair: KerxKerningPair;
	value: number;
}
declare var KerxOrderedListEntry: KerxOrderedListEntry;

interface KerxOrderedListHeader {
	nPairs: number;
	searchRange: number;
	entrySelector: number;
	rangeShift: number;
	table: number;
}
declare var KerxOrderedListHeader: KerxOrderedListHeader;

interface KerxSimpleArrayHeader {
	rowWidth: number;
	leftOffsetTable: number;
	rightOffsetTable: number;
	theArray: number;
	firstTable: number;
}
declare var KerxSimpleArrayHeader: KerxSimpleArrayHeader;

interface KerxStateEntry {
	newState: number;
	flags: number;
	valueIndex: number;
}
declare var KerxStateEntry: KerxStateEntry;

interface KerxStateHeader {
	header: STXHeader;
	valueTable: number;
	firstTable: number;
}
declare var KerxStateHeader: KerxStateHeader;

interface KerxTableHeader {
	version: number;
	nTables: number;
	firstSubtable: number;
}
declare var KerxTableHeader: KerxTableHeader;

interface LcarCaretClassEntry {
	count: number;
	partials: number;
}
declare var LcarCaretClassEntry: LcarCaretClassEntry;

interface LtagStringRange {
	offset: number;
	length: number;
}
declare var LtagStringRange: LtagStringRange;

interface LtagTable {
	version: number;
	flags: number;
	numTags: number;
	tagRange: LtagStringRange;
}
declare var LtagTable: LtagTable;

interface MortChain {
	defaultFlags: number;
	length: number;
	nFeatures: number;
	nSubtables: number;
	featureEntries: MortFeatureEntry;
}
declare var MortChain: MortChain;

interface MortContextualSubtable {
	header: STHeader;
	substitutionTableOffset: number;
}
declare var MortContextualSubtable: MortContextualSubtable;

interface MortFeatureEntry {
	featureType: number;
	featureSelector: number;
	enableFlags: number;
	disableFlags: number;
}
declare var MortFeatureEntry: MortFeatureEntry;

interface MortInsertionSubtable {
	header: STHeader;
}
declare var MortInsertionSubtable: MortInsertionSubtable;

interface MortLigatureSubtable {
	header: STHeader;
	ligatureActionTableOffset: number;
	componentTableOffset: number;
	ligatureTableOffset: number;
}
declare var MortLigatureSubtable: MortLigatureSubtable;

interface MortRearrangementSubtable {
	header: STHeader;
}
declare var MortRearrangementSubtable: MortRearrangementSubtable;

interface MortTable {
	version: number;
	nChains: number;
	chains: MortChain;
}
declare var MortTable: MortTable;

interface MorxChain {
	defaultFlags: number;
	length: number;
	nFeatures: number;
	nSubtables: number;
	featureEntries: MortFeatureEntry;
}
declare var MorxChain: MorxChain;

interface MorxContextualSubtable {
	header: STXHeader;
	substitutionTableOffset: number;
}
declare var MorxContextualSubtable: MorxContextualSubtable;

interface MorxInsertionSubtable {
	header: STXHeader;
	insertionGlyphTableOffset: number;
}
declare var MorxInsertionSubtable: MorxInsertionSubtable;

interface MorxLigatureSubtable {
	header: STXHeader;
	ligatureActionTableOffset: number;
	componentTableOffset: number;
	ligatureTableOffset: number;
}
declare var MorxLigatureSubtable: MorxLigatureSubtable;

interface MorxRearrangementSubtable {
	header: STXHeader;
}
declare var MorxRearrangementSubtable: MorxRearrangementSubtable;

interface MorxTable {
	version: number;
	nChains: number;
	chains: MorxChain;
}
declare var MorxTable: MorxTable;

interface OpbdSideValues {
	leftSideShift: number;
	topSideShift: number;
	rightSideShift: number;
	bottomSideShift: number;
}
declare var OpbdSideValues: OpbdSideValues;

interface PropLookupSegment {
	lastGlyph: number;
	firstGlyph: number;
	value: number;
}
declare var PropLookupSegment: PropLookupSegment;

interface PropLookupSingle {
	glyph: number;
	props: number;
}
declare var PropLookupSingle: PropLookupSingle;

interface ROTAGlyphEntry {
	GlyphIndexOffset: number;
	HBaselineOffset: number;
	VBaselineOffset: number;
}
declare var ROTAGlyphEntry: ROTAGlyphEntry;

interface SFNTLookupArrayHeader {
	lookupValues: number;
}
declare var SFNTLookupArrayHeader: SFNTLookupArrayHeader;

interface SFNTLookupBinarySearchHeader {
	unitSize: number;
	nUnits: number;
	searchRange: number;
	entrySelector: number;
	rangeShift: number;
}
declare var SFNTLookupBinarySearchHeader: SFNTLookupBinarySearchHeader;

interface SFNTLookupSegment {
	lastGlyph: number;
	firstGlyph: number;
	value: number;
}
declare var SFNTLookupSegment: SFNTLookupSegment;

interface SFNTLookupSegmentHeader {
	binSearch: SFNTLookupBinarySearchHeader;
	segments: SFNTLookupSegment;
}
declare var SFNTLookupSegmentHeader: SFNTLookupSegmentHeader;

interface SFNTLookupSingle {
	glyph: number;
	value: number;
}
declare var SFNTLookupSingle: SFNTLookupSingle;

interface SFNTLookupSingleHeader {
	binSearch: SFNTLookupBinarySearchHeader;
	entries: SFNTLookupSingle;
}
declare var SFNTLookupSingleHeader: SFNTLookupSingleHeader;

interface SFNTLookupTrimmedArrayHeader {
	firstGlyph: number;
	count: number;
	valueArray: number;
}
declare var SFNTLookupTrimmedArrayHeader: SFNTLookupTrimmedArrayHeader;

interface SFNTLookupVectorHeader {
	valueSize: number;
	firstGlyph: number;
	count: number;
	values: number;
}
declare var SFNTLookupVectorHeader: SFNTLookupVectorHeader;

interface STClassTable {
	firstGlyph: number;
	nGlyphs: number;
	classes: number;
}
declare var STClassTable: STClassTable;

interface STEntryOne {
	newState: number;
	flags: number;
	offset1: number;
}
declare var STEntryOne: STEntryOne;

interface STEntryTwo {
	newState: number;
	flags: number;
	offset1: number;
	offset2: number;
}
declare var STEntryTwo: STEntryTwo;

interface STEntryZero {
	newState: number;
	flags: number;
}
declare var STEntryZero: STEntryZero;

interface STHeader {
	filler: number;
	nClasses: number;
	classTableOffset: number;
	stateArrayOffset: number;
	entryTableOffset: number;
}
declare var STHeader: STHeader;

interface STXEntryOne {
	newState: number;
	flags: number;
	index1: number;
}
declare var STXEntryOne: STXEntryOne;

interface STXEntryTwo {
	newState: number;
	flags: number;
	index1: number;
	index2: number;
}
declare var STXEntryTwo: STXEntryTwo;

interface STXEntryZero {
	newState: number;
	flags: number;
}
declare var STXEntryZero: STXEntryZero;

interface STXHeader {
	nClasses: number;
	classTableOffset: number;
	stateArrayOffset: number;
	entryTableOffset: number;
}
declare var STXHeader: STXHeader;

interface TrakTable {
	version: number;
	format: number;
	horizOffset: number;
	vertOffset: number;
}
declare var TrakTable: TrakTable;

interface TrakTableData {
	nTracks: number;
	nSizes: number;
	sizeTableOffset: number;
	trakTable: TrakTableEntry;
}
declare var TrakTableData: TrakTableData;

interface TrakTableEntry {
	track: number;
	nameTableIndex: number;
	sizesOffset: number;
}
declare var TrakTableEntry: TrakTableEntry;

declare const cmapFontTableTag: number;

declare const descriptorFontTableTag: number;

declare const featureFontTableTag: number;

declare const kANKRCurrentVersion: number;

declare const kAbbrevSquaredLigaturesOffSelector: number;

declare const kAbbrevSquaredLigaturesOnSelector: number;

declare const kAllCapsSelector: number;

declare const kAllLowerCaseSelector: number;

declare const kAllTypeFeaturesOffSelector: number;

declare const kAllTypeFeaturesOnSelector: number;

declare const kAllTypographicFeaturesType: number;

declare const kAltHalfWidthTextSelector: number;

declare const kAltProportionalTextSelector: number;

declare const kAlternateHorizKanaOffSelector: number;

declare const kAlternateHorizKanaOnSelector: number;

declare const kAlternateKanaType: number;

declare const kAlternateVertKanaOffSelector: number;

declare const kAlternateVertKanaOnSelector: number;

declare const kAnnotationType: number;

declare const kAsteriskToMultiplyOffSelector: number;

declare const kAsteriskToMultiplyOnSelector: number;

declare const kBSLNControlPointFormatNoMap: number;

declare const kBSLNControlPointFormatWithMap: number;

declare const kBSLNCurrentVersion: number;

declare const kBSLNDistanceFormatNoMap: number;

declare const kBSLNDistanceFormatWithMap: number;

declare const kBSLNHangingBaseline: number;

declare const kBSLNIdeographicCenterBaseline: number;

declare const kBSLNIdeographicHighBaseline: number;

declare const kBSLNIdeographicLowBaseline: number;

declare const kBSLNLastBaseline: number;

declare const kBSLNMathBaseline: number;

declare const kBSLNNoBaseline: number;

declare const kBSLNNoBaselineOverride: number;

declare const kBSLNNumBaselineClasses: number;

declare const kBSLNRomanBaseline: number;

declare const kBSLNTag: number;

declare const kBoxAnnotationSelector: number;

declare const kCJKItalicRomanOffSelector: number;

declare const kCJKItalicRomanOnSelector: number;

declare const kCJKItalicRomanSelector: number;

declare const kCJKRomanSpacingType: number;

declare const kCJKSymbolAltFiveSelector: number;

declare const kCJKSymbolAltFourSelector: number;

declare const kCJKSymbolAltOneSelector: number;

declare const kCJKSymbolAltThreeSelector: number;

declare const kCJKSymbolAltTwoSelector: number;

declare const kCJKSymbolAlternativesType: number;

declare const kCJKVerticalRomanCenteredSelector: number;

declare const kCJKVerticalRomanHBaselineSelector: number;

declare const kCJKVerticalRomanPlacementType: number;

declare var kCTBackgroundColorAttributeName: string;

declare var kCTBaselineClassAttributeName: string;

declare var kCTBaselineClassHanging: string;

declare var kCTBaselineClassIdeographicCentered: string;

declare var kCTBaselineClassIdeographicHigh: string;

declare var kCTBaselineClassIdeographicLow: string;

declare var kCTBaselineClassMath: string;

declare var kCTBaselineClassRoman: string;

declare var kCTBaselineInfoAttributeName: string;

declare var kCTBaselineOffsetAttributeName: string;

declare var kCTBaselineOriginalFont: string;

declare var kCTBaselineReferenceFont: string;

declare var kCTBaselineReferenceInfoAttributeName: string;

declare var kCTFontAttributeName: string;

declare var kCTFontBaselineAdjustAttribute: string;

declare var kCTFontCascadeListAttribute: string;

declare var kCTFontCharacterSetAttribute: string;

declare const kCTFontClassMaskShift: number;

declare var kCTFontCollectionDisallowAutoActivationOption: string;

declare var kCTFontCollectionIncludeDisabledFontsOption: string;

declare var kCTFontCollectionRemoveDuplicatesOption: string;

declare var kCTFontCopyrightNameKey: string;

declare var kCTFontDescriptionNameKey: string;

declare var kCTFontDescriptorMatchingCurrentAssetSize: string;

declare var kCTFontDescriptorMatchingDescriptors: string;

declare var kCTFontDescriptorMatchingError: string;

declare var kCTFontDescriptorMatchingPercentage: string;

declare var kCTFontDescriptorMatchingResult: string;

declare var kCTFontDescriptorMatchingSourceDescriptor: string;

declare var kCTFontDescriptorMatchingTotalAssetSize: string;

declare var kCTFontDescriptorMatchingTotalDownloadedSize: string;

declare var kCTFontDesignerNameKey: string;

declare var kCTFontDesignerURLNameKey: string;

declare var kCTFontDisplayNameAttribute: string;

declare var kCTFontDownloadableAttribute: string;

declare var kCTFontDownloadedAttribute: string;

declare var kCTFontEnabledAttribute: string;

declare var kCTFontFamilyNameAttribute: string;

declare var kCTFontFamilyNameKey: string;

declare var kCTFontFeatureSampleTextKey: string;

declare var kCTFontFeatureSelectorDefaultKey: string;

declare var kCTFontFeatureSelectorIdentifierKey: string;

declare var kCTFontFeatureSelectorNameKey: string;

declare var kCTFontFeatureSelectorSettingKey: string;

declare var kCTFontFeatureSettingsAttribute: string;

declare var kCTFontFeatureTooltipTextKey: string;

declare var kCTFontFeatureTypeExclusiveKey: string;

declare var kCTFontFeatureTypeIdentifierKey: string;

declare var kCTFontFeatureTypeNameKey: string;

declare var kCTFontFeatureTypeSelectorsKey: string;

declare var kCTFontFeaturesAttribute: string;

declare var kCTFontFixedAdvanceAttribute: string;

declare var kCTFontFormatAttribute: string;

declare var kCTFontFullNameKey: string;

declare var kCTFontLanguagesAttribute: string;

declare var kCTFontLicenseNameKey: string;

declare var kCTFontLicenseURLNameKey: string;

declare var kCTFontMacintoshEncodingsAttribute: string;

declare var kCTFontManagerBundleIdentifier: string;

declare var kCTFontManagerErrorDomain: string;

declare var kCTFontManagerErrorFontURLsKey: string;

declare var kCTFontManagerRegisteredFontsChangedNotification: string;

declare var kCTFontManufacturerNameKey: string;

declare var kCTFontMatrixAttribute: string;

declare var kCTFontNameAttribute: string;

declare var kCTFontOpenTypeFeatureTag: string;

declare var kCTFontOpenTypeFeatureValue: string;

declare var kCTFontOrientationAttribute: string;

declare var kCTFontPostScriptCIDNameKey: string;

declare var kCTFontPostScriptNameKey: string;

declare var kCTFontPriorityAttribute: string;

declare const kCTFontPriorityComputer: number;

declare const kCTFontPriorityDynamic: number;

declare const kCTFontPriorityNetwork: number;

declare const kCTFontPriorityProcess: number;

declare const kCTFontPrioritySystem: number;

declare const kCTFontPriorityUser: number;

declare var kCTFontRegistrationScopeAttribute: string;

declare var kCTFontSampleTextNameKey: string;

declare var kCTFontSizeAttribute: string;

declare var kCTFontSlantTrait: string;

declare var kCTFontStyleNameAttribute: string;

declare var kCTFontStyleNameKey: string;

declare var kCTFontSubFamilyNameKey: string;

declare var kCTFontSymbolicTrait: string;

declare const kCTFontTableAcnt: number;

declare const kCTFontTableAnkr: number;

declare const kCTFontTableAvar: number;

declare const kCTFontTableBASE: number;

declare const kCTFontTableBdat: number;

declare const kCTFontTableBhed: number;

declare const kCTFontTableBloc: number;

declare const kCTFontTableBsln: number;

declare const kCTFontTableCBDT: number;

declare const kCTFontTableCBLC: number;

declare const kCTFontTableCFF: number;

declare const kCTFontTableCFF2: number;

declare const kCTFontTableCOLR: number;

declare const kCTFontTableCPAL: number;

declare const kCTFontTableCidg: number;

declare const kCTFontTableCmap: number;

declare const kCTFontTableCvar: number;

declare const kCTFontTableCvt: number;

declare const kCTFontTableDSIG: number;

declare const kCTFontTableEBDT: number;

declare const kCTFontTableEBLC: number;

declare const kCTFontTableEBSC: number;

declare const kCTFontTableFdsc: number;

declare const kCTFontTableFeat: number;

declare const kCTFontTableFmtx: number;

declare const kCTFontTableFond: number;

declare const kCTFontTableFpgm: number;

declare const kCTFontTableFvar: number;

declare const kCTFontTableGDEF: number;

declare const kCTFontTableGPOS: number;

declare const kCTFontTableGSUB: number;

declare const kCTFontTableGasp: number;

declare const kCTFontTableGlyf: number;

declare const kCTFontTableGvar: number;

declare const kCTFontTableHVAR: number;

declare const kCTFontTableHdmx: number;

declare const kCTFontTableHead: number;

declare const kCTFontTableHhea: number;

declare const kCTFontTableHmtx: number;

declare const kCTFontTableHsty: number;

declare const kCTFontTableJSTF: number;

declare const kCTFontTableJust: number;

declare const kCTFontTableKern: number;

declare const kCTFontTableKerx: number;

declare const kCTFontTableLTSH: number;

declare const kCTFontTableLcar: number;

declare const kCTFontTableLoca: number;

declare const kCTFontTableLtag: number;

declare const kCTFontTableMATH: number;

declare const kCTFontTableMERG: number;

declare const kCTFontTableMVAR: number;

declare const kCTFontTableMaxp: number;

declare const kCTFontTableMeta: number;

declare const kCTFontTableMort: number;

declare const kCTFontTableMorx: number;

declare const kCTFontTableName: number;

declare const kCTFontTableOS2: number;

declare const kCTFontTableOpbd: number;

declare const kCTFontTablePCLT: number;

declare const kCTFontTablePost: number;

declare const kCTFontTablePrep: number;

declare const kCTFontTableProp: number;

declare const kCTFontTableSTAT: number;

declare const kCTFontTableSVG: number;

declare const kCTFontTableSbit: number;

declare const kCTFontTableSbix: number;

declare const kCTFontTableTrak: number;

declare const kCTFontTableVDMX: number;

declare const kCTFontTableVORG: number;

declare const kCTFontTableVVAR: number;

declare const kCTFontTableVhea: number;

declare const kCTFontTableVmtx: number;

declare const kCTFontTableXref: number;

declare const kCTFontTableZapf: number;

declare var kCTFontTrademarkNameKey: string;

declare var kCTFontTraitsAttribute: string;

declare var kCTFontURLAttribute: string;

declare var kCTFontUniqueNameKey: string;

declare var kCTFontVariationAttribute: string;

declare var kCTFontVariationAxisDefaultValueKey: string;

declare var kCTFontVariationAxisHiddenKey: string;

declare var kCTFontVariationAxisIdentifierKey: string;

declare var kCTFontVariationAxisMaximumValueKey: string;

declare var kCTFontVariationAxisMinimumValueKey: string;

declare var kCTFontVariationAxisNameKey: string;

declare var kCTFontVendorURLNameKey: string;

declare var kCTFontVersionNameKey: string;

declare var kCTFontWeightTrait: string;

declare var kCTFontWidthTrait: string;

declare var kCTForegroundColorAttributeName: string;

declare var kCTForegroundColorFromContextAttributeName: string;

declare var kCTFrameClippingPathsAttributeName: string;

declare var kCTFramePathClippingPathAttributeName: string;

declare var kCTFramePathFillRuleAttributeName: string;

declare var kCTFramePathWidthAttributeName: string;

declare var kCTFrameProgressionAttributeName: string;

declare var kCTGlyphInfoAttributeName: string;

declare var kCTHorizontalInVerticalFormsAttributeName: string;

declare var kCTKernAttributeName: string;

declare var kCTLanguageAttributeName: string;

declare var kCTLigatureAttributeName: string;

declare var kCTParagraphStyleAttributeName: string;

declare var kCTRubyAnnotationAttributeName: string;

declare var kCTRubyAnnotationScaleToFitAttributeName: string;

declare var kCTRubyAnnotationSizeFactorAttributeName: string;

declare var kCTRunDelegateAttributeName: string;

declare const kCTRunDelegateCurrentVersion: number;

declare const kCTRunDelegateVersion1: number;

declare var kCTStrokeColorAttributeName: string;

declare var kCTStrokeWidthAttributeName: string;

declare var kCTSuperscriptAttributeName: string;

declare var kCTTabColumnTerminatorsAttributeName: string;

declare var kCTTrackingAttributeName: string;

declare var kCTTypesetterOptionAllowUnboundedLayout: string;

declare var kCTTypesetterOptionForcedEmbeddingLevel: string;

declare var kCTUnderlineColorAttributeName: string;

declare var kCTUnderlineStyleAttributeName: string;

declare var kCTVerticalFormsAttributeName: string;

declare var kCTWritingDirectionAttributeName: string;

declare const kCTWritingDirectionEmbedding: number;

declare const kCTWritingDirectionOverride: number;

declare const kCanonicalCompositionOffSelector: number;

declare const kCanonicalCompositionOnSelector: number;

declare const kCaseSensitiveLayoutOffSelector: number;

declare const kCaseSensitiveLayoutOnSelector: number;

declare const kCaseSensitiveLayoutType: number;

declare const kCaseSensitiveSpacingOffSelector: number;

declare const kCaseSensitiveSpacingOnSelector: number;

declare const kCharacterAlternativesType: number;

declare const kCharacterShapeType: number;

declare const kCircleAnnotationSelector: number;

declare const kCommonLigaturesOffSelector: number;

declare const kCommonLigaturesOnSelector: number;

declare const kCompatibilityCompositionOffSelector: number;

declare const kCompatibilityCompositionOnSelector: number;

declare const kContextualAlternatesOffSelector: number;

declare const kContextualAlternatesOnSelector: number;

declare const kContextualAlternatesType: number;

declare const kContextualLigaturesOffSelector: number;

declare const kContextualLigaturesOnSelector: number;

declare const kContextualSwashAlternatesOffSelector: number;

declare const kContextualSwashAlternatesOnSelector: number;

declare const kCursiveConnectionType: number;

declare const kCursiveSelector: number;

declare const kDecomposeDiacriticsSelector: number;

declare const kDecorativeBordersSelector: number;

declare const kDefaultCJKRomanSelector: number;

declare const kDefaultLowerCaseSelector: number;

declare const kDefaultUpperCaseSelector: number;

declare const kDesignComplexityType: number;

declare const kDesignLevel1Selector: number;

declare const kDesignLevel2Selector: number;

declare const kDesignLevel3Selector: number;

declare const kDesignLevel4Selector: number;

declare const kDesignLevel5Selector: number;

declare const kDiacriticsType: number;

declare const kDiagonalFractionsSelector: number;

declare const kDiamondAnnotationSelector: number;

declare const kDingbatsSelector: number;

declare const kDiphthongLigaturesOffSelector: number;

declare const kDiphthongLigaturesOnSelector: number;

declare const kDisplayTextSelector: number;

declare const kEngravedTextSelector: number;

declare const kExpertCharactersSelector: number;

declare const kExponentsOffSelector: number;

declare const kExponentsOnSelector: number;

declare const kFleuronsSelector: number;

declare const kFontAlbanianLanguage: number;

declare const kFontAmharicLanguage: number;

declare const kFontAmharicScript: number;

declare const kFontArabicLanguage: number;

declare const kFontArabicScript: number;

declare const kFontArmenianLanguage: number;

declare const kFontArmenianScript: number;

declare const kFontAssameseLanguage: number;

declare const kFontAymaraLanguage: number;

declare const kFontAzerbaijanArLanguage: number;

declare const kFontAzerbaijaniLanguage: number;

declare const kFontBasqueLanguage: number;

declare const kFontBengaliLanguage: number;

declare const kFontBengaliScript: number;

declare const kFontBulgarianLanguage: number;

declare const kFontBurmeseLanguage: number;

declare const kFontBurmeseScript: number;

declare const kFontByelorussianLanguage: number;

declare const kFontCatalanLanguage: number;

declare const kFontChewaLanguage: number;

declare const kFontChineseScript: number;

declare const kFontCopyrightName: number;

declare const kFontCroatianLanguage: number;

declare const kFontCustom16BitScript: number;

declare const kFontCustom816BitScript: number;

declare const kFontCustom8BitScript: number;

declare const kFontCustomPlatform: number;

declare const kFontCyrillicScript: number;

declare const kFontCzechLanguage: number;

declare const kFontDanishLanguage: number;

declare const kFontDescriptionName: number;

declare const kFontDesignerName: number;

declare const kFontDesignerURLName: number;

declare const kFontDevanagariScript: number;

declare const kFontDutchLanguage: number;

declare const kFontDzongkhaLanguage: number;

declare const kFontEastEuropeanRomanScript: number;

declare const kFontEnglishLanguage: number;

declare const kFontEsperantoLanguage: number;

declare const kFontEstonianLanguage: number;

declare const kFontEthiopicScript: number;

declare const kFontExtendedArabicScript: number;

declare const kFontFaeroeseLanguage: number;

declare const kFontFamilyName: number;

declare const kFontFarsiLanguage: number;

declare const kFontFinnishLanguage: number;

declare const kFontFlemishLanguage: number;

declare const kFontFrenchLanguage: number;

declare const kFontFullName: number;

declare const kFontGallaLanguage: number;

declare const kFontGeezScript: number;

declare const kFontGeorgianLanguage: number;

declare const kFontGeorgianScript: number;

declare const kFontGermanLanguage: number;

declare const kFontGreekLanguage: number;

declare const kFontGreekScript: number;

declare const kFontGuaraniLanguage: number;

declare const kFontGujaratiLanguage: number;

declare const kFontGujaratiScript: number;

declare const kFontGurmukhiScript: number;

declare const kFontHebrewLanguage: number;

declare const kFontHebrewScript: number;

declare const kFontHindiLanguage: number;

declare const kFontHungarianLanguage: number;

declare const kFontISO10646_1993Semantics: number;

declare const kFontIcelandicLanguage: number;

declare const kFontIndonesianLanguage: number;

declare const kFontIrishLanguage: number;

declare const kFontItalianLanguage: number;

declare const kFontJapaneseLanguage: number;

declare const kFontJapaneseScript: number;

declare const kFontJavaneseRomLanguage: number;

declare const kFontKannadaLanguage: number;

declare const kFontKannadaScript: number;

declare const kFontKashmiriLanguage: number;

declare const kFontKazakhLanguage: number;

declare const kFontKhmerLanguage: number;

declare const kFontKhmerScript: number;

declare const kFontKirghizLanguage: number;

declare const kFontKoreanLanguage: number;

declare const kFontKoreanScript: number;

declare const kFontKurdishLanguage: number;

declare const kFontLaoLanguage: number;

declare const kFontLaotianScript: number;

declare const kFontLappishLanguage: number;

declare const kFontLastReservedName: number;

declare const kFontLatinLanguage: number;

declare const kFontLatvianLanguage: number;

declare const kFontLettishLanguage: number;

declare const kFontLicenseDescriptionName: number;

declare const kFontLicenseInfoURLName: number;

declare const kFontLithuanianLanguage: number;

declare const kFontMacCompatibleFullName: number;

declare const kFontMacedonianLanguage: number;

declare const kFontMacintoshPlatform: number;

declare const kFontMalagasyLanguage: number;

declare const kFontMalayArabicLanguage: number;

declare const kFontMalayRomanLanguage: number;

declare const kFontMalayalamLanguage: number;

declare const kFontMalayalamScript: number;

declare const kFontMalteseLanguage: number;

declare const kFontManufacturerName: number;

declare const kFontMarathiLanguage: number;

declare const kFontMicrosoftPlatform: number;

declare const kFontMicrosoftStandardScript: number;

declare const kFontMicrosoftSymbolScript: number;

declare const kFontMicrosoftUCS4Script: number;

declare const kFontMoldavianLanguage: number;

declare const kFontMongolianCyrLanguage: number;

declare const kFontMongolianLanguage: number;

declare const kFontMongolianScript: number;

declare const kFontNepaliLanguage: number;

declare const kFontNoLanguageCode: number;

declare const kFontNoNameCode: number;

declare const kFontNoPlatformCode: number;

declare const kFontNoScriptCode: number;

declare const kFontNorwegianLanguage: number;

declare const kFontOriyaLanguage: number;

declare const kFontOriyaScript: number;

declare const kFontOromoLanguage: number;

declare const kFontPashtoLanguage: number;

declare const kFontPersianLanguage: number;

declare const kFontPolishLanguage: number;

declare const kFontPortugueseLanguage: number;

declare const kFontPostScriptCIDName: number;

declare const kFontPostscriptName: number;

declare const kFontPreferredFamilyName: number;

declare const kFontPreferredSubfamilyName: number;

declare const kFontPunjabiLanguage: number;

declare const kFontQuechuaLanguage: number;

declare const kFontRSymbolScript: number;

declare const kFontReservedPlatform: number;

declare const kFontRomanScript: number;

declare const kFontRomanianLanguage: number;

declare const kFontRuandaLanguage: number;

declare const kFontRundiLanguage: number;

declare const kFontRussian: number;

declare const kFontRussianLanguage: number;

declare const kFontSaamiskLanguage: number;

declare const kFontSampleTextName: number;

declare const kFontSanskritLanguage: number;

declare const kFontSerbianLanguage: number;

declare const kFontSimpChineseLanguage: number;

declare const kFontSimpleChineseScript: number;

declare const kFontSindhiLanguage: number;

declare const kFontSindhiScript: number;

declare const kFontSinhaleseLanguage: number;

declare const kFontSinhaleseScript: number;

declare const kFontSlavicScript: number;

declare const kFontSlovakLanguage: number;

declare const kFontSlovenianLanguage: number;

declare const kFontSomaliLanguage: number;

declare const kFontSpanishLanguage: number;

declare const kFontStyleName: number;

declare const kFontSundaneseRomLanguage: number;

declare const kFontSwahiliLanguage: number;

declare const kFontSwedishLanguage: number;

declare const kFontTagalogLanguage: number;

declare const kFontTajikiLanguage: number;

declare const kFontTamilLanguage: number;

declare const kFontTamilScript: number;

declare const kFontTatarLanguage: number;

declare const kFontTeluguLanguage: number;

declare const kFontTeluguScript: number;

declare const kFontThaiLanguage: number;

declare const kFontThaiScript: number;

declare const kFontTibetanLanguage: number;

declare const kFontTibetanScript: number;

declare const kFontTigrinyaLanguage: number;

declare const kFontTradChineseLanguage: number;

declare const kFontTrademarkName: number;

declare const kFontTraditionalChineseScript: number;

declare const kFontTurkishLanguage: number;

declare const kFontTurkmenLanguage: number;

declare const kFontUighurLanguage: number;

declare const kFontUkrainianLanguage: number;

declare const kFontUnicodeDefaultSemantics: number;

declare const kFontUnicodePlatform: number;

declare const kFontUnicodeV1_1Semantics: number;

declare const kFontUnicodeV2_0BMPOnlySemantics: number;

declare const kFontUnicodeV2_0FullCoverageSemantics: number;

declare const kFontUnicodeV4_0VariationSequenceSemantics: number;

declare const kFontUnicode_FullRepertoire: number;

declare const kFontUninterpretedScript: number;

declare const kFontUniqueName: number;

declare const kFontUrduLanguage: number;

declare const kFontUzbekLanguage: number;

declare const kFontVendorURLName: number;

declare const kFontVersionName: number;

declare const kFontVietnameseLanguage: number;

declare const kFontVietnameseScript: number;

declare const kFontWelshLanguage: number;

declare const kFontYiddishLanguage: number;

declare const kFormInterrobangOffSelector: number;

declare const kFormInterrobangOnSelector: number;

declare const kFractionsType: number;

declare const kFullWidthCJKRomanSelector: number;

declare const kFullWidthIdeographsSelector: number;

declare const kFullWidthKanaSelector: number;

declare const kHalfWidthCJKRomanSelector: number;

declare const kHalfWidthIdeographsSelector: number;

declare const kHalfWidthTextSelector: number;

declare const kHanjaToHangulAltOneSelector: number;

declare const kHanjaToHangulAltThreeSelector: number;

declare const kHanjaToHangulAltTwoSelector: number;

declare const kHanjaToHangulSelector: number;

declare const kHideDiacriticsSelector: number;

declare const kHiraganaToKatakanaSelector: number;

declare const kHistoricalLigaturesOffSelector: number;

declare const kHistoricalLigaturesOnSelector: number;

declare const kHojoCharactersSelector: number;

declare const kHyphenToEnDashOffSelector: number;

declare const kHyphenToEnDashOnSelector: number;

declare const kHyphenToMinusOffSelector: number;

declare const kHyphenToMinusOnSelector: number;

declare const kHyphensToEmDashOffSelector: number;

declare const kHyphensToEmDashOnSelector: number;

declare const kIdeographicAltFiveSelector: number;

declare const kIdeographicAltFourSelector: number;

declare const kIdeographicAltOneSelector: number;

declare const kIdeographicAltThreeSelector: number;

declare const kIdeographicAltTwoSelector: number;

declare const kIdeographicAlternativesType: number;

declare const kIdeographicSpacingType: number;

declare const kIlluminatedCapsSelector: number;

declare const kInequalityLigaturesOffSelector: number;

declare const kInequalityLigaturesOnSelector: number;

declare const kInferiorsSelector: number;

declare const kInitialCapsAndSmallCapsSelector: number;

declare const kInitialCapsSelector: number;

declare const kInternationalSymbolsSelector: number;

declare const kInvertedBoxAnnotationSelector: number;

declare const kInvertedCircleAnnotationSelector: number;

declare const kInvertedRoundedBoxAnnotationSelector: number;

declare const kItalicCJKRomanType: number;

declare const kJIS1978CharactersSelector: number;

declare const kJIS1983CharactersSelector: number;

declare const kJIS1990CharactersSelector: number;

declare const kJIS2004CharactersSelector: number;

declare const kJUSTCurrentVersion: number;

declare const kJUSTKashidaPriority: number;

declare const kJUSTLetterPriority: number;

declare const kJUSTNullPriority: number;

declare const kJUSTOverrideLimits: number;

declare const kJUSTOverridePriority: number;

declare const kJUSTOverrideUnlimited: number;

declare const kJUSTPriorityCount: number;

declare const kJUSTPriorityMask: number;

declare const kJUSTSpacePriority: number;

declare const kJUSTStandardFormat: number;

declare const kJUSTTag: number;

declare const kJUSTUnlimited: number;

declare const kJUSTnoGlyphcode: number;

declare const kJUSTpcConditionalAddAction: number;

declare const kJUSTpcDecompositionAction: number;

declare const kJUSTpcDuctilityAction: number;

declare const kJUSTpcGlyphRepeatAddAction: number;

declare const kJUSTpcGlyphStretchAction: number;

declare const kJUSTpcUnconditionalAddAction: number;

declare const kKERNCrossStream: number;

declare const kKERNCrossStreamResetNote: number;

declare const kKERNCurrentVersion: number;

declare const kKERNFormatMask: number;

declare const kKERNIndexArray: number;

declare const kKERNLineEndKerning: number;

declare const kKERNLineStart: number;

declare const kKERNNoCrossKerning: number;

declare const kKERNNoStakeNote: number;

declare const kKERNNotApplied: number;

declare const kKERNNotesRequested: number;

declare const kKERNOrderedList: number;

declare const kKERNResetCrossStream: number;

declare const kKERNSimpleArray: number;

declare const kKERNStateTable: number;

declare const kKERNTag: number;

declare const kKERNUnusedBits: number;

declare const kKERNVariation: number;

declare const kKERNVertical: number;

declare const kKERXActionOffsetMask: number;

declare const kKERXActionTypeAnchorPoints: number;

declare const kKERXActionTypeControlPoints: number;

declare const kKERXActionTypeCoordinates: number;

declare const kKERXActionTypeMask: number;

declare const kKERXControlPoint: number;

declare const kKERXCrossStream: number;

declare const kKERXCrossStreamResetNote: number;

declare const kKERXCurrentVersion: number;

declare const kKERXDescending: number;

declare const kKERXFormatMask: number;

declare const kKERXIndexArray: number;

declare const kKERXLineEndKerning: number;

declare const kKERXLineStart: number;

declare const kKERXNoCrossKerning: number;

declare const kKERXNoStakeNote: number;

declare const kKERXNotApplied: number;

declare const kKERXNotesRequested: number;

declare const kKERXOrderedList: number;

declare const kKERXResetCrossStream: number;

declare const kKERXSimpleArray: number;

declare const kKERXStateTable: number;

declare const kKERXTag: number;

declare const kKERXUnusedBits: number;

declare const kKERXUnusedFlags: number;

declare const kKERXValuesAreLong: number;

declare const kKERXVariation: number;

declare const kKERXVertical: number;

declare const kKanaSpacingType: number;

declare const kKanaToRomanizationSelector: number;

declare const kKatakanaToHiraganaSelector: number;

declare const kLCARCtlPointFormat: number;

declare const kLCARCurrentVersion: number;

declare const kLCARLinearFormat: number;

declare const kLCARTag: number;

declare const kLTAGCurrentVersion: number;

declare const kLanguageTagType: number;

declare const kLastFeatureType: number;

declare const kLetterCaseType: number;

declare const kLigaturesType: number;

declare const kLineFinalSwashesOffSelector: number;

declare const kLineFinalSwashesOnSelector: number;

declare const kLineInitialSwashesOffSelector: number;

declare const kLineInitialSwashesOnSelector: number;

declare const kLinguisticRearrangementOffSelector: number;

declare const kLinguisticRearrangementOnSelector: number;

declare const kLinguisticRearrangementType: number;

declare const kLogosOffSelector: number;

declare const kLogosOnSelector: number;

declare const kLowerCaseNumbersSelector: number;

declare const kLowerCasePetiteCapsSelector: number;

declare const kLowerCaseSmallCapsSelector: number;

declare const kLowerCaseType: number;

declare const kMORTContextualType: number;

declare const kMORTCoverDescending: number;

declare const kMORTCoverIgnoreVertical: number;

declare const kMORTCoverTypeMask: number;

declare const kMORTCoverVertical: number;

declare const kMORTCurrInsertBefore: number;

declare const kMORTCurrInsertCountMask: number;

declare const kMORTCurrInsertCountShift: number;

declare const kMORTCurrInsertKashidaLike: number;

declare const kMORTCurrJustTableCountMask: number;

declare const kMORTCurrJustTableCountShift: number;

declare const kMORTCurrentVersion: number;

declare const kMORTDoInsertionsBefore: number;

declare const kMORTInsertionType: number;

declare const kMORTInsertionsCountMask: number;

declare const kMORTIsSplitVowelPiece: number;

declare const kMORTLigFormOffsetMask: number;

declare const kMORTLigFormOffsetShift: number;

declare const kMORTLigLastAction: number;

declare const kMORTLigStoreLigature: number;

declare const kMORTLigatureType: number;

declare const kMORTMarkInsertBefore: number;

declare const kMORTMarkInsertCountMask: number;

declare const kMORTMarkInsertCountShift: number;

declare const kMORTMarkInsertKashidaLike: number;

declare const kMORTMarkJustTableCountMask: number;

declare const kMORTMarkJustTableCountShift: number;

declare const kMORTRearrangementType: number;

declare const kMORTSwashType: number;

declare const kMORTTag: number;

declare const kMORTraCDx: number;

declare const kMORTraCDxA: number;

declare const kMORTraCDxAB: number;

declare const kMORTraCDxBA: number;

declare const kMORTraDCx: number;

declare const kMORTraDCxA: number;

declare const kMORTraDCxAB: number;

declare const kMORTraDCxBA: number;

declare const kMORTraDx: number;

declare const kMORTraDxA: number;

declare const kMORTraDxAB: number;

declare const kMORTraDxBA: number;

declare const kMORTraNoAction: number;

declare const kMORTraxA: number;

declare const kMORTraxAB: number;

declare const kMORTraxBA: number;

declare const kMORXCoverDescending: number;

declare const kMORXCoverIgnoreVertical: number;

declare const kMORXCoverLogicalOrder: number;

declare const kMORXCoverTypeMask: number;

declare const kMORXCoverVertical: number;

declare const kMORXCurrentVersion: number;

declare const kMORXTag: number;

declare const kMathSymbolsSelector: number;

declare const kMathematicalExtrasType: number;

declare const kMathematicalGreekOffSelector: number;

declare const kMathematicalGreekOnSelector: number;

declare const kMonospacedNumbersSelector: number;

declare const kMonospacedTextSelector: number;

declare const kNLCCharactersSelector: number;

declare const kNoAlternatesSelector: number;

declare const kNoAnnotationSelector: number;

declare const kNoCJKItalicRomanSelector: number;

declare const kNoCJKSymbolAlternativesSelector: number;

declare const kNoFractionsSelector: number;

declare const kNoIdeographicAlternativesSelector: number;

declare const kNoOrnamentsSelector: number;

declare const kNoRubyKanaSelector: number;

declare const kNoStyleOptionsSelector: number;

declare const kNoStylisticAlternatesSelector: number;

declare const kNoTransliterationSelector: number;

declare const kNonFinalSwashesOffSelector: number;

declare const kNonFinalSwashesOnSelector: number;

declare const kNormalPositionSelector: number;

declare const kNumberCaseType: number;

declare const kNumberSpacingType: number;

declare const kOPBDControlPointFormat: number;

declare const kOPBDCurrentVersion: number;

declare const kOPBDDistanceFormat: number;

declare const kOPBDTag: number;

declare const kOrdinalsSelector: number;

declare const kOrnamentSetsType: number;

declare const kOverlappingCharactersType: number;

declare const kPROPALDirectionClass: number;

declare const kPROPANDirectionClass: number;

declare const kPROPBNDirectionClass: number;

declare const kPROPCSDirectionClass: number;

declare const kPROPCanHangLTMask: number;

declare const kPROPCanHangRBMask: number;

declare const kPROPCurrentVersion: number;

declare const kPROPDirectionMask: number;

declare const kPROPENDirectionClass: number;

declare const kPROPESDirectionClass: number;

declare const kPROPETDirectionClass: number;

declare const kPROPIsFloaterMask: number;

declare const kPROPLDirectionClass: number;

declare const kPROPLREDirectionClass: number;

declare const kPROPLRODirectionClass: number;

declare const kPROPNSMDirectionClass: number;

declare const kPROPNumDirectionClasses: number;

declare const kPROPONDirectionClass: number;

declare const kPROPPDFDirectionClass: number;

declare const kPROPPSDirectionClass: number;

declare const kPROPPairOffsetMask: number;

declare const kPROPPairOffsetShift: number;

declare const kPROPPairOffsetSign: number;

declare const kPROPRDirectionClass: number;

declare const kPROPRLEDirectionClass: number;

declare const kPROPRLODirectionClass: number;

declare const kPROPRightConnectMask: number;

declare const kPROPSDirectionClass: number;

declare const kPROPSENDirectionClass: number;

declare const kPROPTag: number;

declare const kPROPUseRLPairMask: number;

declare const kPROPWSDirectionClass: number;

declare const kPROPZeroReserved: number;

declare const kParenthesisAnnotationSelector: number;

declare const kPartiallyConnectedSelector: number;

declare const kPeriodAnnotationSelector: number;

declare const kPeriodsToEllipsisOffSelector: number;

declare const kPeriodsToEllipsisOnSelector: number;

declare const kPiCharactersSelector: number;

declare const kPreventOverlapOffSelector: number;

declare const kPreventOverlapOnSelector: number;

declare const kProportionalCJKRomanSelector: number;

declare const kProportionalIdeographsSelector: number;

declare const kProportionalKanaSelector: number;

declare const kProportionalNumbersSelector: number;

declare const kProportionalTextSelector: number;

declare const kQuarterWidthNumbersSelector: number;

declare const kQuarterWidthTextSelector: number;

declare const kRareLigaturesOffSelector: number;

declare const kRareLigaturesOnSelector: number;

declare const kRebusPicturesOffSelector: number;

declare const kRebusPicturesOnSelector: number;

declare const kRequiredLigaturesOffSelector: number;

declare const kRequiredLigaturesOnSelector: number;

declare const kRomanNumeralAnnotationSelector: number;

declare const kRomanizationToHiraganaSelector: number;

declare const kRomanizationToKatakanaSelector: number;

declare const kRoundedBoxAnnotationSelector: number;

declare const kRubyKanaOffSelector: number;

declare const kRubyKanaOnSelector: number;

declare const kRubyKanaSelector: number;

declare const kRubyKanaType: number;

declare const kSFNTLookupSegmentArray: number;

declare const kSFNTLookupSegmentSingle: number;

declare const kSFNTLookupSimpleArray: number;

declare const kSFNTLookupSingleTable: number;

declare const kSFNTLookupTrimmedArray: number;

declare const kSFNTLookupVector: number;

declare const kSTClassDeletedGlyph: number;

declare const kSTClassEndOfLine: number;

declare const kSTClassEndOfText: number;

declare const kSTClassOutOfBounds: number;

declare const kSTKCrossStreamReset: number;

declare const kSTLigActionMask: number;

declare const kSTMarkEnd: number;

declare const kSTNoAdvance: number;

declare const kSTRearrVerbMask: number;

declare const kSTSetMark: number;

declare const kSTXHasLigAction: number;

declare const kScientificInferiorsSelector: number;

declare const kShowDiacriticsSelector: number;

declare const kSimplifiedCharactersSelector: number;

declare const kSlashToDivideOffSelector: number;

declare const kSlashToDivideOnSelector: number;

declare const kSlashedZeroOffSelector: number;

declare const kSlashedZeroOnSelector: number;

declare const kSmallCapsSelector: number;

declare const kSmartQuotesOffSelector: number;

declare const kSmartQuotesOnSelector: number;

declare const kSmartSwashType: number;

declare const kSquaredLigaturesOffSelector: number;

declare const kSquaredLigaturesOnSelector: number;

declare const kStyleOptionsType: number;

declare const kStylisticAltEightOffSelector: number;

declare const kStylisticAltEightOnSelector: number;

declare const kStylisticAltEighteenOffSelector: number;

declare const kStylisticAltEighteenOnSelector: number;

declare const kStylisticAltElevenOffSelector: number;

declare const kStylisticAltElevenOnSelector: number;

declare const kStylisticAltFifteenOffSelector: number;

declare const kStylisticAltFifteenOnSelector: number;

declare const kStylisticAltFiveOffSelector: number;

declare const kStylisticAltFiveOnSelector: number;

declare const kStylisticAltFourOffSelector: number;

declare const kStylisticAltFourOnSelector: number;

declare const kStylisticAltFourteenOffSelector: number;

declare const kStylisticAltFourteenOnSelector: number;

declare const kStylisticAltNineOffSelector: number;

declare const kStylisticAltNineOnSelector: number;

declare const kStylisticAltNineteenOffSelector: number;

declare const kStylisticAltNineteenOnSelector: number;

declare const kStylisticAltOneOffSelector: number;

declare const kStylisticAltOneOnSelector: number;

declare const kStylisticAltSevenOffSelector: number;

declare const kStylisticAltSevenOnSelector: number;

declare const kStylisticAltSeventeenOffSelector: number;

declare const kStylisticAltSeventeenOnSelector: number;

declare const kStylisticAltSixOffSelector: number;

declare const kStylisticAltSixOnSelector: number;

declare const kStylisticAltSixteenOffSelector: number;

declare const kStylisticAltSixteenOnSelector: number;

declare const kStylisticAltTenOffSelector: number;

declare const kStylisticAltTenOnSelector: number;

declare const kStylisticAltThirteenOffSelector: number;

declare const kStylisticAltThirteenOnSelector: number;

declare const kStylisticAltThreeOffSelector: number;

declare const kStylisticAltThreeOnSelector: number;

declare const kStylisticAltTwelveOffSelector: number;

declare const kStylisticAltTwelveOnSelector: number;

declare const kStylisticAltTwentyOffSelector: number;

declare const kStylisticAltTwentyOnSelector: number;

declare const kStylisticAltTwoOffSelector: number;

declare const kStylisticAltTwoOnSelector: number;

declare const kStylisticAlternativesType: number;

declare const kSubstituteVerticalFormsOffSelector: number;

declare const kSubstituteVerticalFormsOnSelector: number;

declare const kSuperiorsSelector: number;

declare const kSwashAlternatesOffSelector: number;

declare const kSwashAlternatesOnSelector: number;

declare const kSymbolLigaturesOffSelector: number;

declare const kSymbolLigaturesOnSelector: number;

declare const kTRAKCurrentVersion: number;

declare const kTRAKTag: number;

declare const kTRAKUniformFormat: number;

declare const kTallCapsSelector: number;

declare const kTextSpacingType: number;

declare const kThirdWidthNumbersSelector: number;

declare const kThirdWidthTextSelector: number;

declare const kTitlingCapsSelector: number;

declare const kTraditionalAltFiveSelector: number;

declare const kTraditionalAltFourSelector: number;

declare const kTraditionalAltOneSelector: number;

declare const kTraditionalAltThreeSelector: number;

declare const kTraditionalAltTwoSelector: number;

declare const kTraditionalCharactersSelector: number;

declare const kTraditionalNamesCharactersSelector: number;

declare const kTranscodingCompositionOffSelector: number;

declare const kTranscodingCompositionOnSelector: number;

declare const kTransliterationType: number;

declare const kTypographicExtrasType: number;

declare const kUnconnectedSelector: number;

declare const kUnicodeDecompositionType: number;

declare const kUpperAndLowerCaseSelector: number;

declare const kUpperCaseNumbersSelector: number;

declare const kUpperCasePetiteCapsSelector: number;

declare const kUpperCaseSmallCapsSelector: number;

declare const kUpperCaseType: number;

declare const kVerticalFractionsSelector: number;

declare const kVerticalPositionType: number;

declare const kVerticalSubstitutionType: number;

declare const kWordFinalSwashesOffSelector: number;

declare const kWordFinalSwashesOnSelector: number;

declare const kWordInitialSwashesOffSelector: number;

declare const kWordInitialSwashesOnSelector: number;

declare const nameFontTableTag: number;

declare const nonGlyphID: number;

declare const os2FontTableTag: number;

interface sfntCMapEncoding {
	platformID: number;
	scriptID: number;
	offset: number;
}
declare var sfntCMapEncoding: sfntCMapEncoding;

interface sfntCMapExtendedSubHeader {
	format: number;
	reserved: number;
	length: number;
	language: number;
}
declare var sfntCMapExtendedSubHeader: sfntCMapExtendedSubHeader;

interface sfntCMapHeader {
	version: number;
	numTables: number;
	encoding: sfntCMapEncoding;
}
declare var sfntCMapHeader: sfntCMapHeader;

interface sfntCMapSubHeader {
	format: number;
	length: number;
	languageID: number;
}
declare var sfntCMapSubHeader: sfntCMapSubHeader;

interface sfntDescriptorHeader {
	version: number;
	descriptorCount: number;
	descriptor: sfntFontDescriptor;
}
declare var sfntDescriptorHeader: sfntDescriptorHeader;

interface sfntDirectory {
	format: number;
	numOffsets: number;
	searchRange: number;
	entrySelector: number;
	rangeShift: number;
	table: sfntDirectoryEntry;
}
declare var sfntDirectory: sfntDirectory;

interface sfntDirectoryEntry {
	tableTag: number;
	checkSum: number;
	offset: number;
	length: number;
}
declare var sfntDirectoryEntry: sfntDirectoryEntry;

interface sfntFeatureHeader {
	version: number;
	featureNameCount: number;
	featureSetCount: number;
	reserved: number;
	names: sfntFeatureName;
	settings: sfntFontFeatureSetting;
	runs: sfntFontRunFeature;
}
declare var sfntFeatureHeader: sfntFeatureHeader;

interface sfntFeatureName {
	featureType: number;
	settingCount: number;
	offsetToSettings: number;
	featureFlags: number;
	nameID: number;
}
declare var sfntFeatureName: sfntFeatureName;

interface sfntFontDescriptor {
	name: number;
	value: number;
}
declare var sfntFontDescriptor: sfntFontDescriptor;

interface sfntFontFeatureSetting {
	setting: number;
	nameID: number;
}
declare var sfntFontFeatureSetting: sfntFontFeatureSetting;

interface sfntFontRunFeature {
	featureType: number;
	setting: number;
}
declare var sfntFontRunFeature: sfntFontRunFeature;

interface sfntInstance {
	nameID: number;
	flags: number;
	coord: number;
}
declare var sfntInstance: sfntInstance;

interface sfntNameHeader {
	format: number;
	count: number;
	stringOffset: number;
	rec: sfntNameRecord;
}
declare var sfntNameHeader: sfntNameHeader;

interface sfntNameRecord {
	platformID: number;
	scriptID: number;
	languageID: number;
	nameID: number;
	length: number;
	offset: number;
}
declare var sfntNameRecord: sfntNameRecord;

interface sfntVariationAxis {
	axisTag: number;
	minValue: number;
	defaultValue: number;
	maxValue: number;
	flags: number;
	nameID: number;
}
declare var sfntVariationAxis: sfntVariationAxis;

interface sfntVariationHeader {
	version: number;
	offsetToData: number;
	countSizePairs: number;
	axisCount: number;
	axisSize: number;
	instanceCount: number;
	instanceSize: number;
	axis: sfntVariationAxis;
	instance: sfntInstance;
}
declare var sfntVariationHeader: sfntVariationHeader;

declare const sizeof_sfntCMapEncoding: number;

declare const sizeof_sfntCMapExtendedSubHeader: number;

declare const sizeof_sfntCMapHeader: number;

declare const sizeof_sfntCMapSubHeader: number;

declare const sizeof_sfntDescriptorHeader: number;

declare const sizeof_sfntDirectory: number;

declare const sizeof_sfntInstance: number;

declare const sizeof_sfntNameHeader: number;

declare const sizeof_sfntNameRecord: number;

declare const sizeof_sfntVariationAxis: number;

declare const sizeof_sfntVariationHeader: number;

declare const variationFontTableTag: number;
