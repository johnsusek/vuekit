
declare const NSASCIIStringEncoding: number;

enum NSActivityOptions {

	IdleDisplaySleepDisabled = 1099511627776,

	IdleSystemSleepDisabled = 1048576,

	SuddenTerminationDisabled = 16384,

	AutomaticTerminationDisabled = 32768,

	UserInitiated = 16777215,

	UserInitiatedAllowingIdleSystemSleep = 15728639,

	Background = 255,

	LatencyCritical = 1095216660480
}

globalThis.NSActivityOptions = NSActivityOptions;

declare class NSAffineTransform extends NSObject implements NSCopying, NSSecureCoding {

	static transform(): NSAffineTransform;

	setTransformStruct(_: NSAffineTransformStruct)

	transformStruct: NSAffineTransformStruct;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(transform: NSAffineTransform);

	appendTransform(_: NSAffineTransform): void;

	concat(): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	invert(): void;

	prependTransform(_: NSAffineTransform): void;

	rotateByDegrees(_: number): void;

	rotateByRadians(_: number): void;

	scaleBy(_: number): void;

	scaleXByYBy(_: number, yBy: number): void;

	set(): void;

	transformBezierPath(_: NSBezierPath): NSBezierPath;

	transformPoint(_: CGPoint): CGPoint;

	transformSize(_: CGSize): CGSize;

	translateXByYBy(_: number, yBy: number): void;
}

interface NSAffineTransformStruct {
	m11: number;
	m12: number;
	m21: number;
	m22: number;
	tX: number;
	tY: number;
}
declare var NSAffineTransformStruct: NSAffineTransformStruct;

enum NSAlignmentOptions {

	MinXInward = 1,

	MinYInward = 2,

	MaxXInward = 4,

	MaxYInward = 8,

	WidthInward = 16,

	HeightInward = 32,

	MinXOutward = 256,

	MinYOutward = 512,

	MaxXOutward = 1024,

	MaxYOutward = 2048,

	WidthOutward = 4096,

	HeightOutward = 8192,

	MinXNearest = 65536,

	MinYNearest = 131072,

	MaxXNearest = 262144,

	MaxYNearest = 524288,

	WidthNearest = 1048576,

	HeightNearest = 2097152,

	RectFlipped = -9223372036854775808,

	AllEdgesInward = 15,

	AllEdgesOutward = 3840,

	AllEdgesNearest = 983040
}

globalThis.NSAlignmentOptions = NSAlignmentOptions;

declare function NSAllHashTableObjects(table: NSHashTable<any>): NSArray<any>;

declare function NSAllMapTableKeys(table: NSMapTable<any, any>): NSArray<any>;

declare function NSAllMapTableValues(table: NSMapTable<any, any>): NSArray<any>;

declare function NSAllocateMemoryPages(bytes: number): any;

declare function NSAllocateObject(aClass: typeof NSObject, extraBytes: number, zone: any): any;

declare class NSAppleEventDescriptor extends NSObject implements NSCopying, NSSecureCoding {

	static appleEventWithEventClassEventIDTargetDescriptorReturnIDTransactionID(_: number, eventID: number, targetDescriptor?: NSAppleEventDescriptor, returnID: number, transactionID: number): NSAppleEventDescriptor;

	static currentProcessDescriptor(): NSAppleEventDescriptor;

	static descriptorWithApplicationURL(_: NSURL): NSAppleEventDescriptor;

	static descriptorWithBoolean(_: boolean): NSAppleEventDescriptor;

	static descriptorWithBundleIdentifier(_: string): NSAppleEventDescriptor;

	static descriptorWithDate(_: Date): NSAppleEventDescriptor;

	static descriptorWithDescriptorTypeBytesLength(_: number, bytes?: any, length: number): NSAppleEventDescriptor;

	static descriptorWithDescriptorTypeData(_: number, data?: NSData): NSAppleEventDescriptor;

	static descriptorWithDouble(_: number): NSAppleEventDescriptor;

	static descriptorWithEnumCode(_: number): NSAppleEventDescriptor;

	static descriptorWithFileURL(_: NSURL): NSAppleEventDescriptor;

	static descriptorWithInt32(_: number): NSAppleEventDescriptor;

	static descriptorWithProcessIdentifier(_: number): NSAppleEventDescriptor;

	static descriptorWithString(_: string): NSAppleEventDescriptor;

	static descriptorWithTypeCode(_: number): NSAppleEventDescriptor;

	static listDescriptor(): NSAppleEventDescriptor;

	static nullDescriptor(): NSAppleEventDescriptor;

	static recordDescriptor(): NSAppleEventDescriptor;

	readonly aeDesc: AEDesc;

	readonly booleanValue: boolean;

	readonly data: NSData;

	readonly dateValue: Date;

	readonly descriptorType: number;

	readonly doubleValue: number;

	readonly enumCodeValue: number;

	readonly eventClass: number;

	readonly eventID: number;

	readonly fileURLValue: NSURL;

	readonly int32Value: number;

	readonly isRecordDescriptor: boolean;

	readonly numberOfItems: number;

	readonly returnID: number;

	readonly stringValue: string;

	readonly transactionID: number;

	readonly typeCodeValue: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(listDescriptor: void);

	static create(recordDescriptor: void);

	static create(AEDescNoCopy: AEDesc);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(descriptorType: number, bytes: any, length: number);

	static create(descriptorType: number, data: NSData);

	static create(eventClass: number, eventID: number, targetDescriptor: NSAppleEventDescriptor, returnID: number, transactionID: number);

	attributeDescriptorForKeyword(_: number): NSAppleEventDescriptor;

	coerceToDescriptorType(_: number): NSAppleEventDescriptor;

	copyWithZone(_?: any): any;

	descriptorAtIndex(_: number): NSAppleEventDescriptor;

	descriptorForKeyword(_: number): NSAppleEventDescriptor;

	encodeWithCoder(_: NSCoder): void;

	insertDescriptorAtIndex(_: NSAppleEventDescriptor, atIndex: number): void;

	keywordForDescriptorAtIndex(_: number): number;

	paramDescriptorForKeyword(_: number): NSAppleEventDescriptor;

	removeDescriptorAtIndex(_: number): void;

	removeDescriptorWithKeyword(_: number): void;

	removeParamDescriptorWithKeyword(_: number): void;

	sendEventWithOptionsTimeoutError(timeout: NSAppleEventSendOptions, error: number): NSAppleEventDescriptor;

	setAttributeDescriptorForKeyword(_: NSAppleEventDescriptor, forKeyword: number): void;

	setDescriptorForKeyword(_: NSAppleEventDescriptor, forKeyword: number): void;

	setParamDescriptorForKeyword(_: NSAppleEventDescriptor, forKeyword: number): void;
}

declare class NSAppleEventManager extends NSObject {

	static sharedAppleEventManager(): NSAppleEventManager;

	readonly currentAppleEvent: NSAppleEventDescriptor;

	readonly currentReplyAppleEvent: NSAppleEventDescriptor;

	appleEventForSuspensionID(_: any): NSAppleEventDescriptor;

	dispatchRawAppleEventWithRawReplyHandlerRefCon(_: AEDesc, withRawReply: AEDesc, handlerRefCon: any): number;

	removeEventHandlerForEventClassAndEventID(_: number, andEventID: number): void;

	replyAppleEventForSuspensionID(_: any): NSAppleEventDescriptor;

	resumeWithSuspensionID(_: any): void;

	setCurrentAppleEventAndReplyEventWithSuspensionID(_: any): void;

	setEventHandlerAndSelectorForEventClassAndEventID(_: any, andSelector: string, forEventClass: number, andEventID: number): void;

	suspendCurrentAppleEvent(): any;
}

declare var NSAppleEventManagerWillProcessFirstEventNotification: string;

enum NSAppleEventSendOptions {

	NoReply = 1,

	QueueReply = 2,

	WaitForReply = 3,

	NeverInteract = 16,

	CanInteract = 32,

	AlwaysInteract = 48,

	CanSwitchLayer = 64,

	DontRecord = 4096,

	DontExecute = 8192,

	DontAnnotate = 65536,

	DefaultOptions = 35
}

globalThis.NSAppleEventSendOptions = NSAppleEventSendOptions;

declare var NSAppleEventTimeOutDefault: number;

declare var NSAppleEventTimeOutNone: number;

declare class NSAppleScript extends NSObject implements NSCopying {

	readonly isCompiled: boolean;

	readonly richTextSource: NSAttributedString;

	readonly source: string;

	static create(contentsOfURL: NSURL, error: NSDictionary<string, any>);

	static create(source: string);

	compileAndReturnError(_?: NSDictionary<string, any>): boolean;

	copyWithZone(_?: any): any;

	executeAndReturnError(_?: NSDictionary<string, any>): NSAppleEventDescriptor;

	executeAppleEventError(_: NSAppleEventDescriptor, error?: NSDictionary<string, any>): NSAppleEventDescriptor;
}

declare var NSAppleScriptErrorAppName: string;

declare var NSAppleScriptErrorBriefMessage: string;

declare var NSAppleScriptErrorMessage: string;

declare var NSAppleScriptErrorNumber: string;

declare var NSAppleScriptErrorRange: string;

declare var NSArgumentDomain: string;

declare const NSArgumentEvaluationScriptError: number;

declare const NSArgumentsWrongScriptError: number;

declare class NSArray<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding {

	static array<ObjectType>(): NSArray<ObjectType>;

	static arrayWithArray<ObjectType>(_: NSArray<ObjectType>): NSArray<ObjectType>;

	static arrayWithContentsOfFile<ObjectType>(_: string): NSArray<ObjectType>;

	static arrayWithContentsOfURL<ObjectType>(_: NSURL): NSArray<ObjectType>;

	static arrayWithObject<ObjectType>(_: ObjectType): NSArray<ObjectType>;

	static arrayWithObjects<ObjectType>(_: ObjectType): NSArray<ObjectType>;

	static arrayWithObjectsCount<ObjectType>(_: ObjectType, count: number): NSArray<ObjectType>;

	readonly count: number;

	readonly firstObject: ObjectType;

	readonly lastObject: ObjectType;

	readonly sortedArrayHint: NSData;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(array: NSArray<ObjectType> | ObjectType[]);

	static create(array: NSArray<ObjectType> | ObjectType[], copyItems: boolean);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(contentsOfFile: string);

	static create(contentsOfURL: NSURL);

	static create(contentsOfURL: NSURL);

	static create(objects: ObjectType);

	static create(objects: ObjectType, count: number);

	addObserverToObjectsAtIndexesForKeyPathOptionsContext(_: NSObject, toObjectsAtIndexes: NSIndexSet, forKeyPath: string, options: NSKeyValueObservingOptions, context?: any): void;

	arrayByAddingObject(_: ObjectType): NSArray<ObjectType>;

	arrayByAddingObjectsFromArray(_: NSArray<ObjectType>): NSArray<ObjectType>;

	componentsJoinedByString(_: string): string;

	containsObject(_: ObjectType): boolean;

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	descriptionWithLocale(_?: any): string;

	descriptionWithLocaleIndent(_?: any, indent: number): string;

	encodeWithCoder(_: NSCoder): void;

	enumerateObjectsAtIndexesOptionsUsingBlock(_: NSIndexSet, options: NSEnumerationOptions, usingBlock: (p1: ObjectType, p2: number, p3: boolean) => void): void;

	enumerateObjectsUsingBlock(_: (p1: ObjectType, p2: number, p3: boolean) => void): void;

	enumerateObjectsWithOptionsUsingBlock(_: NSEnumerationOptions, usingBlock: (p1: ObjectType, p2: number, p3: boolean) => void): void;

	filteredArrayUsingPredicate(using: NSPredicate): NSArray<ObjectType>;

	firstObjectCommonWithArray(_: NSArray<ObjectType>): ObjectType;

	indexOfObject(_: ObjectType): number;

	indexOfObjectInRange(_: ObjectType, inRange: NSRange): number;

	indexOfObjectInSortedRangeOptionsUsingComparator(_: ObjectType, inSortedRange: NSRange, options: NSBinarySearchingOptions, usingComparator: (p1: any, p2: any) => NSComparisonResult): number;

	indexOfObjectAtIndexesOptionsPassingTest(_: NSIndexSet, options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;

	indexOfObjectIdenticalTo(_: ObjectType): number;

	indexOfObjectIdenticalToInRange(_: ObjectType, inRange: NSRange): number;

	indexOfObjectPassingTest(_: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;

	indexOfObjectWithOptionsPassingTest(_: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;

	indexesOfObjectsAtIndexesOptionsPassingTest(_: NSIndexSet, options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): NSIndexSet;

	indexesOfObjectsPassingTest(_: (p1: ObjectType, p2: number, p3: boolean) => boolean): NSIndexSet;

	indexesOfObjectsWithOptionsPassingTest(_: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): NSIndexSet;

	isEqualToArray(_: NSArray<ObjectType>): boolean;

	mutableCopyWithZone(_?: any): any;

	objectAtIndex(_: number): ObjectType;

	objectAtIndexedSubscript(_: number): ObjectType;

	objectEnumerator(): NSEnumerator<ObjectType>;

	objectsAtIndexes(_: NSIndexSet): NSArray<ObjectType>;

	pathsMatchingExtensions(_: NSArray<string>): NSArray<string>;

	removeObserverFromObjectsAtIndexesForKeyPath(_: NSObject, fromObjectsAtIndexes: NSIndexSet, forKeyPath: string): void;

	removeObserverFromObjectsAtIndexesForKeyPathContext(_: NSObject, fromObjectsAtIndexes: NSIndexSet, forKeyPath: string, context?: any): void;

	reverseObjectEnumerator(): NSEnumerator<ObjectType>;

	sortedArrayUsingComparator(_: (p1: any, p2: any) => NSComparisonResult): NSArray<ObjectType>;

	sortedArrayUsingDescriptors(_: NSArray<NSSortDescriptor>): NSArray<ObjectType>;

	sortedArrayUsingFunctionContext(_?: (p1: ObjectType, p2: ObjectType, p3: any) => number, context?: any): NSArray<ObjectType>;

	sortedArrayUsingFunctionContextHint(_?: (p1: ObjectType, p2: ObjectType, p3: any) => number, context?: any, hint?: NSData): NSArray<ObjectType>;

	sortedArrayUsingSelector(_: string): NSArray<ObjectType>;

	sortedArrayWithOptionsUsingComparator(_: NSSortOptions, usingComparator: (p1: any, p2: any) => NSComparisonResult): NSArray<ObjectType>;

	subarrayWithRange(_: NSRange): NSArray<ObjectType>;

	writeToFileAtomically(_: string, atomically: boolean): boolean;

	writeToURLAtomically(_: NSURL, atomically: boolean): boolean;

	writeToURLError(error: NSURL): boolean;
}

declare class NSAssertionHandler extends NSObject {

	static currentHandler(): NSAssertionHandler;
}

declare var NSAssertionHandlerKey: string;

declare class NSAttributedString extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding, NSPasteboardReading, NSPasteboardWriting {

	static attributedStringWithAttachment(_: NSTextAttachment): NSAttributedString;

	static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardReadingOptions;

	readonly containsAttachments: boolean;

	readonly length: number;

	readonly string: string;

	static textTypes(): NSArray<string>;

	static textUnfilteredTypes(): NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(attributedString: NSAttributedString);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(data: NSData, options: NSDictionary<string, any>, documentAttributes: NSDictionary<string, any>);

	static create(docFormat: NSData, documentAttributes: NSDictionary<string, any>);

	static create(HTML: NSData, baseURL: NSURL, documentAttributes: NSDictionary<string, any>);

	static create(HTML: NSData, documentAttributes: NSDictionary<string, any>);

	static create(HTML: NSData, options: NSDictionary<string, any>, documentAttributes: NSDictionary<string, any>);

	static create(pasteboardPropertyList: any, ofType: string); // inherited from NSPasteboardReading

	static create(RTF: NSData, documentAttributes: NSDictionary<string, any>);

	static create(RTFD: NSData, documentAttributes: NSDictionary<string, any>);

	static create(RTFDFileWrapper: NSFileWrapper, documentAttributes: NSDictionary<string, any>);

	static create(string: string);

	static create(string: string, attributes: NSDictionary<string, any>);

	static create(URL: NSURL, options: NSDictionary<string, any>, documentAttributes: NSDictionary<string, any>);

	RTFDFileWrapperFromRangeDocumentAttributes(_: NSRange, documentAttributes: NSDictionary<string, any>): NSFileWrapper;

	RTFDFromRangeDocumentAttributes(_: NSRange, documentAttributes: NSDictionary<string, any>): NSData;

	RTFFromRangeDocumentAttributes(_: NSRange, documentAttributes: NSDictionary<string, any>): NSData;

	attributeAtIndexEffectiveRange(_: string, atIndex: number, effectiveRange?: NSRange): any;

	attributeAtIndexLongestEffectiveRangeInRange(_: string, atIndex: number, longestEffectiveRange?: NSRange, inRange: NSRange): any;

	attributedSubstringFromRange(_: NSRange): NSAttributedString;

	attributesAtIndexEffectiveRange(_: number, effectiveRange?: NSRange): NSDictionary<string, any>;

	attributesAtIndexLongestEffectiveRangeInRange(_: number, longestEffectiveRange?: NSRange, inRange: NSRange): NSDictionary<string, any>;

	boundingRectWithSizeOptions(_: CGSize, options: NSStringDrawingOptions): CGRect;

	boundingRectWithSizeOptionsContext(_: CGSize, options: NSStringDrawingOptions, context?: NSStringDrawingContext): CGRect;

	conformsToProtocol(_: any /* Protocol */): boolean;

	containsAttachmentsInRange(_: NSRange): boolean;

	copyWithZone(_?: any): any;

	dataFromRangeDocumentAttributesError(documentAttributes: NSRange, error: NSDictionary<string, any>): NSData;

	docFormatFromRangeDocumentAttributes(_: NSRange, documentAttributes: NSDictionary<string, any>): NSData;

	doubleClickAtIndex(_: number): NSRange;

	drawAtPoint(_: CGPoint): void;

	drawInRect(_: CGRect): void;

	drawWithRectOptions(_: CGRect, options: NSStringDrawingOptions): void;

	drawWithRectOptionsContext(_: CGRect, options: NSStringDrawingOptions, context?: NSStringDrawingContext): void;

	encodeWithCoder(_: NSCoder): void;

	enumerateAttributeInRangeOptionsUsingBlock(_: string, inRange: NSRange, options: NSAttributedStringEnumerationOptions, usingBlock?: (p1: any, p2: NSRange, p3: boolean) => void): void;

	enumerateAttributesInRangeOptionsUsingBlock(_: NSRange, options: NSAttributedStringEnumerationOptions, usingBlock: (p1: NSDictionary<string, any>, p2: NSRange, p3: boolean) => void): void;

	fileWrapperFromRangeDocumentAttributesError(documentAttributes: NSRange, error: NSDictionary<string, any>): NSFileWrapper;

	fontAttributesInRange(_: NSRange): NSDictionary<string, any>;

	isEqual(_: any): boolean;

	isEqualToAttributedString(_: NSAttributedString): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	itemNumberInTextListAtIndex(_: NSTextList, atIndex: number): number;

	lineBreakBeforeIndexWithinRange(_: number, withinRange: NSRange): number;

	lineBreakByHyphenatingBeforeIndexWithinRange(_: number, withinRange: NSRange): number;

	mutableCopyWithZone(_?: any): any;

	nextWordFromIndexForward(_: number, forward: boolean): number;

	pasteboardPropertyListForType(forType: string): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	rangeOfTextBlockAtIndex(_: NSTextBlock, atIndex: number): NSRange;

	rangeOfTextListAtIndex(_: NSTextList, atIndex: number): NSRange;

	rangeOfTextTableAtIndex(_: NSTextTable, atIndex: number): NSRange;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	rulerAttributesInRange(_: NSRange): NSDictionary<string, any>;

	self(): this;

	size(): CGSize;

	writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
}

enum NSAttributedStringEnumerationOptions {

	Reverse = 2,

	LongestEffectiveRangeNotRequired = 1048576
}

globalThis.NSAttributedStringEnumerationOptions = NSAttributedStringEnumerationOptions;

declare class NSAutoreleasePool extends NSObject {

	static addObject(_: any): void;

	static showPools(): void;

	addObject(_: any): void;

	drain(): void;
}

declare var NSAverageKeyValueOperator: string;

enum NSBackgroundActivityResult {

	Finished = 1,

	Deferred = 2
}

globalThis.NSBackgroundActivityResult = NSBackgroundActivityResult;

declare class NSBackgroundActivityScheduler extends NSObject {

	readonly identifier: string;

	setInterval(_: number)

	interval: number;

	setQualityOfService(_: NSQualityOfService)

	qualityOfService: NSQualityOfService;

	setRepeats(_: boolean)

	repeats: boolean;

	readonly shouldDefer: boolean;

	setTolerance(_: number)

	tolerance: number;

	static create(identifier: string);

	invalidate(): void;

	scheduleWithBlock(_: (p1: (p1: NSBackgroundActivityResult) => void) => void): void;
}

enum NSBinarySearchingOptions {

	FirstEqual = 256,

	LastEqual = 512,

	InsertionIndex = 1024
}

globalThis.NSBinarySearchingOptions = NSBinarySearchingOptions;

declare class NSBlockOperation extends NSOperation {

	static blockOperationWithBlock(_: () => void): NSBlockOperation;

	readonly executionBlocks: NSArray<() => void>;

	addExecutionBlock(_: () => void): void;
}

declare class NSBundle extends NSObject {

	static URLForResourceWithExtensionSubdirectoryInBundleWithURL(forResource?: string, withExtension?: string, subdirectory?: string, in_: NSURL): NSURL;

	static URLsForResourcesWithExtensionSubdirectoryInBundleWithURL(forResourcesWithExtension?: string, subdirectory?: string, in_: NSURL): NSArray<NSURL>;

	static bundleForClass(_: typeof NSObject): NSBundle;

	static bundleWithIdentifier(_: string): NSBundle;

	static bundleWithPath(_: string): NSBundle;

	static bundleWithURL(_: NSURL): NSBundle;

	static pathForResourceOfTypeInDirectory(forResource?: string, ofType?: string, inDirectory: string): string;

	static pathsForResourcesOfTypeInDirectory(forResourcesOfType?: string, inDirectory: string): NSArray<string>;

	static preferredLocalizationsFromArray(_: NSArray<string>): NSArray<string>;

	static preferredLocalizationsFromArrayForPreferences(_: NSArray<string>, forPreferences?: NSArray<string>): NSArray<string>;

	readonly appStoreReceiptURL: NSURL;

	readonly builtInPlugInsPath: string;

	readonly builtInPlugInsURL: NSURL;

	readonly bundleIdentifier: string;

	readonly bundlePath: string;

	readonly bundleURL: NSURL;

	readonly developmentLocalization: string;

	readonly executableArchitectures: NSArray<number>;

	readonly executablePath: string;

	readonly executableURL: NSURL;

	readonly infoDictionary: NSDictionary<string, any>;

	readonly isLoaded: boolean;

	readonly localizations: NSArray<string>;

	readonly localizedInfoDictionary: NSDictionary<string, any>;

	readonly preferredLocalizations: NSArray<string>;

	readonly principalClass: typeof NSObject;

	readonly privateFrameworksPath: string;

	readonly privateFrameworksURL: NSURL;

	readonly resourcePath: string;

	readonly resourceURL: NSURL;

	readonly sharedFrameworksPath: string;

	readonly sharedFrameworksURL: NSURL;

	readonly sharedSupportPath: string;

	readonly sharedSupportURL: NSURL;

	static allBundles(): NSArray<NSBundle>;

	static allFrameworks(): NSArray<NSBundle>;

	static mainBundle(): NSBundle;

	static create(path: string);

	static create(URL: NSURL);

	URLForAuxiliaryExecutable(forAuxiliaryExecutable: string): NSURL;

	URLForImageResource(_: string): NSURL;

	URLForResourceWithExtension(forResource?: string, withExtension?: string): NSURL;

	URLForResourceWithExtensionSubdirectory(forResource?: string, withExtension?: string, subdirectory?: string): NSURL;

	URLForResourceWithExtensionSubdirectoryLocalization(_?: string, withExtension?: string, subdirectory?: string, localization?: string): NSURL;

	URLsForResourcesWithExtensionSubdirectory(forResourcesWithExtension?: string, subdirectory?: string): NSArray<NSURL>;

	URLsForResourcesWithExtensionSubdirectoryLocalization(forResourcesWithExtension?: string, subdirectory?: string, localization?: string): NSArray<NSURL>;

	classNamed(_: string): typeof NSObject;

	contextHelpForKey(_: string): NSAttributedString;

	imageForResource(_: string): NSImage;

	load(): boolean;

	loadAndReturnError(): boolean;

	loadNibNamedOwnerTopLevelObjects(_: string, owner?: any, topLevelObjects?: NSArray<any>): boolean;

	localizedStringForKeyValueTable(_: string, value?: string, table?: string): string;

	objectForInfoDictionaryKey(forInfoDictionaryKey: string): any;

	pathForAuxiliaryExecutable(forAuxiliaryExecutable: string): string;

	pathForImageResource(_: string): string;

	pathForResourceOfType(forResource?: string, ofType?: string): string;

	pathForResourceOfTypeInDirectory(forResource?: string, ofType?: string, inDirectory?: string): string;

	pathForResourceOfTypeInDirectoryForLocalization(forResource?: string, ofType?: string, inDirectory?: string, forLocalization?: string): string;

	pathForSoundResource(_: string): string;

	pathsForResourcesOfTypeInDirectory(forResourcesOfType?: string, inDirectory?: string): NSArray<string>;

	pathsForResourcesOfTypeInDirectoryForLocalization(forResourcesOfType?: string, inDirectory?: string, forLocalization?: string): NSArray<string>;

	preflightAndReturnError(): boolean;

	unload(): boolean;
}

declare var NSBundleDidLoadNotification: string;

declare const NSBundleErrorMaximum: number;

declare const NSBundleErrorMinimum: number;

declare const NSBundleExecutableArchitectureI386: number;

declare const NSBundleExecutableArchitecturePPC: number;

declare const NSBundleExecutableArchitecturePPC64: number;

declare const NSBundleExecutableArchitectureX86_64: number;

declare class NSByteCountFormatter extends NSFormatter {

	static stringFromByteCountCountStyle(_: number, countStyle: NSByteCountFormatterCountStyle): string;

	static stringFromMeasurementWithCountStyle(_: NSMeasurement<NSUnitInformationStorage>, countStyle: NSByteCountFormatterCountStyle): string;

	setAdaptive(_: boolean)

	isAdaptive: boolean;

	setAllowedUnits(_: NSByteCountFormatterUnits)

	allowedUnits: NSByteCountFormatterUnits;

	setAllowsNonnumericFormatting(_: boolean)

	allowsNonnumericFormatting: boolean;

	setCountStyle(_: NSByteCountFormatterCountStyle)

	countStyle: NSByteCountFormatterCountStyle;

	setFormattingContext(_: NSFormattingContext)

	formattingContext: NSFormattingContext;

	setIncludesActualByteCount(_: boolean)

	includesActualByteCount: boolean;

	setIncludesCount(_: boolean)

	includesCount: boolean;

	setIncludesUnit(_: boolean)

	includesUnit: boolean;

	setZeroPadsFractionDigits(_: boolean)

	zeroPadsFractionDigits: boolean;

	stringFromByteCount(fromByteCount: number): string;

	stringFromMeasurement(_: NSMeasurement<NSUnitInformationStorage>): string;
}

enum NSByteCountFormatterCountStyle {

	File = 0,

	Memory = 1,

	Decimal = 2,

	Binary = 3
}

globalThis.NSByteCountFormatterCountStyle = NSByteCountFormatterCountStyle;

enum NSByteCountFormatterUnits {

	UseDefault = 0,

	UseBytes = 1,

	UseKB = 2,

	UseMB = 4,

	UseGB = 8,

	UseTB = 16,

	UsePB = 32,

	UseEB = 64,

	UseZB = 128,

	UseYBOrHigher = 65280,

	UseAll = 65535
}

globalThis.NSByteCountFormatterUnits = NSByteCountFormatterUnits;

declare class NSCache<KeyType, ObjectType> extends NSObject {

	setCountLimit(_: number)

	countLimit: number;

	setDelegate(_: NSCacheDelegate)

	delegate: NSCacheDelegate;

	setEvictsObjectsWithDiscardedContent(_: boolean)

	evictsObjectsWithDiscardedContent: boolean;

	setName(_: string)

	name: string;

	setTotalCostLimit(_: number)

	totalCostLimit: number;

	objectForKey(_: KeyType): ObjectType;

	removeAllObjects(): void;

	removeObjectForKey(_: KeyType): void;

	setObjectForKey(_: ObjectType, forKey: KeyType): void;

	setObjectForKeyCost(_: ObjectType, forKey: KeyType, cost: number): void;
}

interface NSCacheDelegate extends NSObjectProtocol {

	cacheWithWillEvictObject?(_: NSCache<any, any>, willEvictObject: any): void;
}
declare var NSCacheDelegate: {

	prototype: NSCacheDelegate;
};

declare class NSCachedURLResponse extends NSObject implements NSCopying, NSSecureCoding {

	readonly data: NSData;

	readonly response: NSURLResponse;

	readonly storagePolicy: NSURLCacheStoragePolicy;

	readonly userInfo: NSDictionary<any, any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(response: NSURLResponse, data: NSData);

	static create(response: NSURLResponse, data: NSData, userInfo: NSDictionary<any, any>, storagePolicy: NSURLCacheStoragePolicy);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NSCalculationError {

	NoError = 0,

	LossOfPrecision = 1,

	Underflow = 2,

	Overflow = 3,

	DivideByZero = 4
}

globalThis.NSCalculationError = NSCalculationError;

declare class NSCalendar extends NSObject implements NSCopying, NSSecureCoding {

	static calendarWithIdentifier(_: string): NSCalendar;

	readonly AMSymbol: string;

	readonly PMSymbol: string;

	readonly calendarIdentifier: string;

	readonly eraSymbols: NSArray<string>;

	setFirstWeekday(_: number)

	firstWeekday: number;

	setLocale(_: NSLocale)

	locale: NSLocale;

	readonly longEraSymbols: NSArray<string>;

	setMinimumDaysInFirstWeek(_: number)

	minimumDaysInFirstWeek: number;

	readonly monthSymbols: NSArray<string>;

	readonly quarterSymbols: NSArray<string>;

	readonly shortMonthSymbols: NSArray<string>;

	readonly shortQuarterSymbols: NSArray<string>;

	readonly shortStandaloneMonthSymbols: NSArray<string>;

	readonly shortStandaloneQuarterSymbols: NSArray<string>;

	readonly shortStandaloneWeekdaySymbols: NSArray<string>;

	readonly shortWeekdaySymbols: NSArray<string>;

	readonly standaloneMonthSymbols: NSArray<string>;

	readonly standaloneQuarterSymbols: NSArray<string>;

	readonly standaloneWeekdaySymbols: NSArray<string>;

	setTimeZone(_: NSTimeZone)

	timeZone: NSTimeZone;

	readonly veryShortMonthSymbols: NSArray<string>;

	readonly veryShortStandaloneMonthSymbols: NSArray<string>;

	readonly veryShortStandaloneWeekdaySymbols: NSArray<string>;

	readonly veryShortWeekdaySymbols: NSArray<string>;

	readonly weekdaySymbols: NSArray<string>;

	static autoupdatingCurrentCalendar(): NSCalendar;

	static currentCalendar(): NSCalendar;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(calendarIdentifier: string);

	static create(coder: NSCoder); // inherited from NSCoding

	compareDateToDateToUnitGranularity(_: Date, toDate: Date, toUnitGranularity: NSCalendarUnit): NSComparisonResult;

	componentFromDate(_: NSCalendarUnit, fromDate: Date): number;

	componentsFromDate(_: NSCalendarUnit, fromDate: Date): NSDateComponents;

	componentsFromDateToDateOptions(_: NSCalendarUnit, fromDate: Date, toDate: Date, options: NSCalendarOptions): NSDateComponents;

	componentsFromDateComponentsToDateComponentsOptions(_: NSCalendarUnit, fromDateComponents: NSDateComponents, toDateComponents: NSDateComponents, options: NSCalendarOptions): NSDateComponents;

	componentsInTimeZoneFromDate(_: NSTimeZone, fromDate: Date): NSDateComponents;

	copyWithZone(_?: any): any;

	dateMatchesComponents(_: Date, matchesComponents: NSDateComponents): boolean;

	dateByAddingComponentsToDateOptions(_: NSDateComponents, toDate: Date, options: NSCalendarOptions): Date;

	dateByAddingUnitValueToDateOptions(_: NSCalendarUnit, value: number, toDate: Date, options: NSCalendarOptions): Date;

	dateBySettingHourMinuteSecondOfDateOptions(_: number, minute: number, second: number, ofDate: Date, options: NSCalendarOptions): Date;

	dateBySettingUnitValueOfDateOptions(_: NSCalendarUnit, value: number, ofDate: Date, options: NSCalendarOptions): Date;

	dateFromComponents(_: NSDateComponents): Date;

	dateWithEraYearMonthDayHourMinuteSecondNanosecond(era: number, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number): Date;

	dateWithEraYearForWeekOfYearWeekOfYearWeekdayHourMinuteSecondNanosecond(era: number, yearForWeekOfYear: number, weekOfYear: number, weekday: number, hour: number, minute: number, second: number, nanosecond: number): Date;

	encodeWithCoder(_: NSCoder): void;

	enumerateDatesStartingAfterDateMatchingComponentsOptionsUsingBlock(startingAfter: Date, matching: NSDateComponents, options: NSCalendarOptions, using?: (p1: Date, p2: boolean, p3: boolean) => void): void;

	getEraYearMonthDayFromDate(_?: number, year?: number, month?: number, day?: number, fromDate: Date): void;

	getEraYearForWeekOfYearWeekOfYearWeekdayFromDate(_?: number, yearForWeekOfYear?: number, weekOfYear?: number, weekday?: number, fromDate: Date): void;

	getHourMinuteSecondNanosecondFromDate(_?: number, minute?: number, second?: number, nanosecond?: number, fromDate: Date): void;

	isDateEqualToDateToUnitGranularity(_: Date, equalToDate: Date, toUnitGranularity: NSCalendarUnit): boolean;

	isDateInSameDayAsDate(_: Date, inSameDayAsDate: Date): boolean;

	isDateInToday(_: Date): boolean;

	isDateInTomorrow(_: Date): boolean;

	isDateInWeekend(_: Date): boolean;

	isDateInYesterday(_: Date): boolean;

	maximumRangeOfUnit(_: NSCalendarUnit): NSRange;

	minimumRangeOfUnit(_: NSCalendarUnit): NSRange;

	nextDateAfterDateMatchingComponentsOptions(_: Date, matchingComponents: NSDateComponents, options: NSCalendarOptions): Date;

	nextDateAfterDateMatchingHourMinuteSecondOptions(_: Date, matchingHour: number, minute: number, second: number, options: NSCalendarOptions): Date;

	nextDateAfterDateMatchingUnitValueOptions(_: Date, matchingUnit: NSCalendarUnit, value: number, options: NSCalendarOptions): Date;

	nextWeekendStartDateIntervalOptionsAfterDate(_?: Date, interval?: number, options: NSCalendarOptions, afterDate: Date): boolean;

	ordinalityOfUnitInUnitForDate(_: NSCalendarUnit, inUnit: NSCalendarUnit, forDate: Date): number;

	rangeOfUnitInUnitForDate(_: NSCalendarUnit, inUnit: NSCalendarUnit, forDate: Date): NSRange;

	rangeOfUnitStartDateIntervalForDate(_: NSCalendarUnit, startDate?: Date, interval?: number, forDate: Date): boolean;

	rangeOfWeekendStartDateIntervalContainingDate(_?: Date, interval?: number, containingDate: Date): boolean;

	startOfDayForDate(_: Date): Date;
}

declare var NSCalendarDayChangedNotification: string;

declare var NSCalendarIdentifierBuddhist: string;

declare var NSCalendarIdentifierChinese: string;

declare var NSCalendarIdentifierCoptic: string;

declare var NSCalendarIdentifierEthiopicAmeteAlem: string;

declare var NSCalendarIdentifierEthiopicAmeteMihret: string;

declare var NSCalendarIdentifierGregorian: string;

declare var NSCalendarIdentifierHebrew: string;

declare var NSCalendarIdentifierISO8601: string;

declare var NSCalendarIdentifierIndian: string;

declare var NSCalendarIdentifierIslamic: string;

declare var NSCalendarIdentifierIslamicCivil: string;

declare var NSCalendarIdentifierIslamicTabular: string;

declare var NSCalendarIdentifierIslamicUmmAlQura: string;

declare var NSCalendarIdentifierJapanese: string;

declare var NSCalendarIdentifierPersian: string;

declare var NSCalendarIdentifierRepublicOfChina: string;

enum NSCalendarOptions {

	WrapComponents = 1,

	MatchStrictly = 2,

	SearchBackwards = 4,

	MatchPreviousTimePreservingSmallerUnits = 256,

	MatchNextTimePreservingSmallerUnits = 512,

	MatchNextTime = 1024,

	MatchFirst = 4096,

	MatchLast = 8192
}

globalThis.NSCalendarOptions = NSCalendarOptions;

enum NSCalendarUnit {

	CalendarUnitEra = 2,

	CalendarUnitYear = 4,

	CalendarUnitMonth = 8,

	CalendarUnitDay = 16,

	CalendarUnitHour = 32,

	CalendarUnitMinute = 64,

	CalendarUnitSecond = 128,

	CalendarUnitWeekday = 512,

	CalendarUnitWeekdayOrdinal = 1024,

	CalendarUnitQuarter = 2048,

	CalendarUnitWeekOfMonth = 4096,

	CalendarUnitWeekOfYear = 8192,

	CalendarUnitYearForWeekOfYear = 16384,

	CalendarUnitNanosecond = 32768,

	CalendarUnitCalendar = 1048576,

	CalendarUnitTimeZone = 2097152,

	EraCalendarUnit = 2,

	YearCalendarUnit = 4,

	MonthCalendarUnit = 8,

	DayCalendarUnit = 16,

	HourCalendarUnit = 32,

	MinuteCalendarUnit = 64,

	SecondCalendarUnit = 128,

	WeekCalendarUnit = 256,

	WeekdayCalendarUnit = 512,

	WeekdayOrdinalCalendarUnit = 1024,

	QuarterCalendarUnit = 2048,

	WeekOfMonthCalendarUnit = 4096,

	WeekOfYearCalendarUnit = 8192,

	YearForWeekOfYearCalendarUnit = 16384,

	CalendarCalendarUnit = 1048576,

	TimeZoneCalendarUnit = 2097152
}

globalThis.NSCalendarUnit = NSCalendarUnit;

declare const NSCannotCreateScriptCommandError: number;

declare var NSCharacterConversionException: string;

declare class NSCharacterSet extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static characterSetWithBitmapRepresentation(_: NSData): NSCharacterSet;

	static characterSetWithCharactersInString(_: string): NSCharacterSet;

	static characterSetWithContentsOfFile(_: string): NSCharacterSet;

	static characterSetWithRange(_: NSRange): NSCharacterSet;

	readonly bitmapRepresentation: NSData;

	readonly invertedSet: NSCharacterSet;

	static URLFragmentAllowedCharacterSet(): NSCharacterSet;

	static URLHostAllowedCharacterSet(): NSCharacterSet;

	static URLPasswordAllowedCharacterSet(): NSCharacterSet;

	static URLPathAllowedCharacterSet(): NSCharacterSet;

	static URLQueryAllowedCharacterSet(): NSCharacterSet;

	static URLUserAllowedCharacterSet(): NSCharacterSet;

	static alphanumericCharacterSet(): NSCharacterSet;

	static capitalizedLetterCharacterSet(): NSCharacterSet;

	static controlCharacterSet(): NSCharacterSet;

	static decimalDigitCharacterSet(): NSCharacterSet;

	static decomposableCharacterSet(): NSCharacterSet;

	static illegalCharacterSet(): NSCharacterSet;

	static letterCharacterSet(): NSCharacterSet;

	static lowercaseLetterCharacterSet(): NSCharacterSet;

	static newlineCharacterSet(): NSCharacterSet;

	static nonBaseCharacterSet(): NSCharacterSet;

	static punctuationCharacterSet(): NSCharacterSet;

	static symbolCharacterSet(): NSCharacterSet;

	static uppercaseLetterCharacterSet(): NSCharacterSet;

	static whitespaceAndNewlineCharacterSet(): NSCharacterSet;

	static whitespaceCharacterSet(): NSCharacterSet;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	characterIsMember(_: string): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	hasMemberInPlane(_: number): boolean;

	isSupersetOfSet(_: NSCharacterSet): boolean;

	longCharacterIsMember(_: number): boolean;

	mutableCopyWithZone(_?: any): any;
}

declare class NSClassDescription extends NSObject {

	static classDescriptionForClass(_: typeof NSObject): NSClassDescription;

	static invalidateClassDescriptionCache(): void;

	static registerClassDescriptionForClass(_: NSClassDescription, forClass: typeof NSObject): void;
}

declare var NSClassDescriptionNeededForClassNotification: string;

declare function NSClassFromString(aClassName: string): typeof NSObject;

declare class NSCloneCommand extends NSScriptCommand {

	readonly keySpecifier: NSScriptObjectSpecifier;

	setReceiversSpecifier(_?: NSScriptObjectSpecifier): void;
}

declare class NSCloseCommand extends NSScriptCommand {

	readonly saveOptions: NSSaveOptions;
}

declare const NSCloudSharingConflictError: number;

declare const NSCloudSharingErrorMaximum: number;

declare const NSCloudSharingErrorMinimum: number;

declare const NSCloudSharingNetworkFailureError: number;

declare const NSCloudSharingNoPermissionError: number;

declare const NSCloudSharingOtherError: number;

declare const NSCloudSharingQuotaExceededError: number;

declare const NSCloudSharingTooManyParticipantsError: number;

declare var NSCocoaErrorDomain: string;

declare class NSCoder extends NSObject {

	readonly allowedClasses: NSSet<typeof NSObject>;

	readonly allowsKeyedCoding: boolean;

	readonly decodingFailurePolicy: NSDecodingFailurePolicy;

	readonly error: NSError;

	readonly requiresSecureCoding: boolean;

	readonly systemVersion: number;

	containsValueForKey(_: string): boolean;

	decodeArrayOfObjCTypeCountAt(_: string, count: number, at: any): void;

	decodeBoolForKey(_: string): boolean;

	decodeBytesForKeyReturnedLength(_: string, returnedLength?: number): string;

	decodeBytesWithReturnedLength(_: number): any;

	decodeDataObject(): NSData;

	decodeDoubleForKey(_: string): number;

	decodeFloatForKey(_: string): number;

	decodeInt32ForKey(_: string): number;

	decodeInt64ForKey(_: string): number;

	decodeIntForKey(forKey: string): number;

	decodeIntegerForKey(_: string): number;

	decodeObject(): any;

	decodeObjectForKey(_: string): any;

	decodeObjectOfClassForKey(_: typeof NSObject, forKey: string): any;

	decodeObjectOfClassesForKey(_?: NSSet<typeof NSObject>, forKey: string): any;

	decodePoint(): CGPoint;

	decodePointForKey(_: string): CGPoint;

	decodePropertyList(): any;

	decodePropertyListForKey(_: string): any;

	decodeRect(): CGRect;

	decodeRectForKey(_: string): CGRect;

	decodeSize(): CGSize;

	decodeSizeForKey(_: string): CGSize;

	decodeValueOfObjCTypeAt(_: string, at: any): void;

	decodeValueOfObjCTypeAtSize(_: string, at: any, size: number): void;

	encodeArrayOfObjCTypeCountAt(_: string, count: number, at: any): void;

	encodeBoolForKey(_: boolean, forKey: string): void;

	encodeBycopyObject(_?: any): void;

	encodeByrefObject(_?: any): void;

	encodeBytesLength(_?: any, length: number): void;

	encodeBytesLengthForKey(_?: string, length: number, forKey: string): void;

	encodeConditionalObject(_?: any): void;

	encodeConditionalObjectForKey(_?: any, forKey: string): void;

	encodeDataObject(_: NSData): void;

	encodeDoubleForKey(_: number, forKey: string): void;

	encodeFloatForKey(_: number, forKey: string): void;

	encodeInt32ForKey(_: number, forKey: string): void;

	encodeInt64ForKey(_: number, forKey: string): void;

	encodeIntForKey(_: number, forKey: string): void;

	encodeIntegerForKey(_: number, forKey: string): void;

	encodeObject(_?: any): void;

	encodeObjectForKey(_?: any, forKey: string): void;

	encodePoint(_: CGPoint): void;

	encodePointForKey(_: CGPoint, forKey: string): void;

	encodePropertyList(_: any): void;

	encodeRect(_: CGRect): void;

	encodeRectForKey(_: CGRect, forKey: string): void;

	encodeRootObject(_: any): void;

	encodeSize(_: CGSize): void;

	encodeSizeForKey(_: CGSize, forKey: string): void;

	encodeValueOfObjCTypeAt(_: string, at: any): void;

	failWithError(_: NSError): void;

	objectZone(): any;

	setObjectZone(_?: any): void;

	versionForClassName(_: string): number;
}

declare const NSCoderErrorMaximum: number;

declare const NSCoderErrorMinimum: number;

declare const NSCoderInvalidValueError: number;

declare const NSCoderReadCorruptError: number;

declare const NSCoderValueNotFoundError: number;

interface NSCoding {

	encodeWithCoder(_: NSCoder): void;

	initWithCoder?(coder: NSCoder): NSCoding;
}
declare var NSCoding: {

	prototype: NSCoding;
};

enum NSCollectionChangeType {

	Insert = 0,

	Remove = 1
}

globalThis.NSCollectionChangeType = NSCollectionChangeType;

declare const NSCollectorDisabledOption: number;

declare function NSCompareHashTables(table1: NSHashTable<any>, table2: NSHashTable<any>): boolean;

declare function NSCompareMapTables(table1: NSMapTable<any, any>, table2: NSMapTable<any, any>): boolean;

declare class NSComparisonPredicate extends NSPredicate {

	static predicateWithLeftExpressionRightExpressionCustomSelector(_: NSExpression, rightExpression: NSExpression, customSelector: string): NSComparisonPredicate;

	static predicateWithLeftExpressionRightExpressionModifierTypeOptions(_: NSExpression, rightExpression: NSExpression, modifier: NSComparisonPredicateModifier, type: NSPredicateOperatorType, options: NSComparisonPredicateOptions): NSComparisonPredicate;

	readonly comparisonPredicateModifier: NSComparisonPredicateModifier;

	readonly customSelector: string;

	readonly leftExpression: NSExpression;

	readonly options: NSComparisonPredicateOptions;

	readonly predicateOperatorType: NSPredicateOperatorType;

	readonly rightExpression: NSExpression;

	static create(leftExpression: NSExpression, rightExpression: NSExpression, customSelector: string);

	static create(leftExpression: NSExpression, rightExpression: NSExpression, modifier: NSComparisonPredicateModifier, type: NSPredicateOperatorType, options: NSComparisonPredicateOptions);
}

enum NSComparisonPredicateModifier {

	DirectPredicateModifier = 0,

	AllPredicateModifier = 1,

	AnyPredicateModifier = 2
}

globalThis.NSComparisonPredicateModifier = NSComparisonPredicateModifier;

enum NSComparisonPredicateOptions {

	CaseInsensitivePredicateOption = 1,

	DiacriticInsensitivePredicateOption = 2,

	NormalizedPredicateOption = 4
}

globalThis.NSComparisonPredicateOptions = NSComparisonPredicateOptions;

enum NSComparisonResult {

	OrderedAscending = -1,

	OrderedSame = 0,

	OrderedDescending = 1
}

globalThis.NSComparisonResult = NSComparisonResult;

declare class NSCompoundPredicate extends NSPredicate {

	static andPredicateWithSubpredicates(_: NSArray<NSPredicate>): NSCompoundPredicate;

	static notPredicateWithSubpredicate(_: NSPredicate): NSCompoundPredicate;

	static orPredicateWithSubpredicates(_: NSArray<NSPredicate>): NSCompoundPredicate;

	readonly compoundPredicateType: NSCompoundPredicateType;

	readonly subpredicates: NSArray<any>;

	static create(type: NSCompoundPredicateType, subpredicates: NSArray<NSPredicate> | NSPredicate[]);
}

enum NSCompoundPredicateType {

	NotPredicateType = 0,

	AndPredicateType = 1,

	OrPredicateType = 2
}

globalThis.NSCompoundPredicateType = NSCompoundPredicateType;

declare const NSCompressionErrorMaximum: number;

declare const NSCompressionErrorMinimum: number;

declare const NSCompressionFailedError: number;

declare class NSCondition extends NSObject implements NSLocking {

	setName(_: string)

	name: string;

	broadcast(): void;

	lock(): void;

	signal(): void;

	unlock(): void;

	wait(): void;

	waitUntilDate(_: Date): boolean;
}

declare class NSConditionLock extends NSObject implements NSLocking {

	readonly condition: number;

	setName(_: string)

	name: string;

	static create(condition: number);

	lock(): void;

	lockBeforeDate(_: Date): boolean;

	lockWhenCondition(_: number): void;

	lockWhenConditionBeforeDate(_: number, beforeDate: Date): boolean;

	tryLock(): boolean;

	tryLockWhenCondition(whenCondition: number): boolean;

	unlock(): void;

	unlockWithCondition(_: number): void;
}

declare const NSContainerSpecifierError: number;

declare function NSContainsRect(aRect: CGRect, bRect: CGRect): boolean;

declare function NSCopyHashTableWithZone(table: NSHashTable<any>, zone: any): NSHashTable<any>;

declare function NSCopyMapTableWithZone(table: NSMapTable<any, any>, zone: any): NSMapTable<any, any>;

declare function NSCopyMemoryPages(source: any, dest: any, bytes: number): void;

interface NSCopying {

	copyWithZone(_?: any): any;
}
declare var NSCopying: {

	prototype: NSCopying;
};

declare class NSCountCommand extends NSScriptCommand {
}

declare function NSCountFrames(): number;

declare function NSCountHashTable(table: NSHashTable<any>): number;

declare var NSCountKeyValueOperator: string;

declare function NSCountMapTable(table: NSMapTable<any, any>): number;

declare class NSCountedSet<ObjectType> extends NSMutableSet<ObjectType> {

	static set<ObjectType>(): NSCountedSet<ObjectType>; // inherited from NSSet

	static setWithArray<ObjectType>(_: NSArray<ObjectType>): NSCountedSet<ObjectType>; // inherited from NSSet

	static setWithCapacity<ObjectType>(_: number): NSCountedSet<ObjectType>; // inherited from NSMutableSet

	static setWithCollectionViewIndexPath<ObjectType>(_: NSIndexPath): NSCountedSet<ObjectType>; // inherited from NSSet

	static setWithCollectionViewIndexPaths<ObjectType>(_: NSArray<NSIndexPath>): NSCountedSet<ObjectType>; // inherited from NSSet

	static setWithObject<ObjectType>(_: ObjectType): NSCountedSet<ObjectType>; // inherited from NSSet

	static setWithObjects<ObjectType>(_: ObjectType): NSCountedSet<ObjectType>; // inherited from NSSet

	static setWithObjectsCount<ObjectType>(_: ObjectType, count: number): NSCountedSet<ObjectType>; // inherited from NSSet

	static setWithSet<ObjectType>(_: NSSet<ObjectType>): NSCountedSet<ObjectType>; // inherited from NSSet

	countForObject(_: ObjectType): number;
}

declare class NSCreateCommand extends NSScriptCommand {

	readonly createClassDescription: NSScriptClassDescription;

	readonly resolvedKeyDictionary: NSDictionary<string, any>;
}

declare function NSCreateHashTable(callBacks: NSHashTableCallBacks, capacity: number): NSHashTable<any>;

declare function NSCreateHashTableWithZone(callBacks: NSHashTableCallBacks, capacity: number, zone: any): NSHashTable<any>;

declare function NSCreateMapTable(keyCallBacks: NSMapTableKeyCallBacks, valueCallBacks: NSMapTableValueCallBacks, capacity: number): NSMapTable<any, any>;

declare function NSCreateMapTableWithZone(keyCallBacks: NSMapTableKeyCallBacks, valueCallBacks: NSMapTableValueCallBacks, capacity: number, zone: any): NSMapTable<any, any>;

declare var NSCurrentLocaleDidChangeNotification: string;

declare class NSData extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static data(): NSData;

	static dataWithBytesLength(_?: any, length: number): NSData;

	static dataWithBytesNoCopyLength(_: any, length: number): NSData;

	static dataWithBytesNoCopyLengthFreeWhenDone(_: any, length: number, freeWhenDone: boolean): NSData;

	static dataWithContentsOfFile(_: string): NSData;

	static dataWithContentsOfFileOptionsError(options: string, error: NSDataReadingOptions): NSData;

	static dataWithContentsOfURL(_: NSURL): NSData;

	static dataWithContentsOfURLOptionsError(options: NSURL, error: NSDataReadingOptions): NSData;

	static dataWithData(_: NSData): NSData;

	readonly bytes: any;

	readonly length: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(base64EncodedData: NSData, options: NSDataBase64DecodingOptions);

	static create(base64EncodedString: string, options: NSDataBase64DecodingOptions);

	static create(bytes: any, length: number);

	static create(bytesNoCopy: any, length: number);

	static create(bytesNoCopy: any, length: number, deallocator: (p1: any, p2: number) => void);

	static create(bytesNoCopy: any, length: number, freeWhenDone: boolean);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(contentsOfFile: string);

	static create(contentsOfFile: string, options: NSDataReadingOptions);

	static create(contentsOfURL: NSURL);

	static create(contentsOfURL: NSURL, options: NSDataReadingOptions);

	static create(data: NSData);

	base64EncodedDataWithOptions(_: NSDataBase64EncodingOptions): NSData;

	base64EncodedStringWithOptions(_: NSDataBase64EncodingOptions): string;

	compressedDataUsingAlgorithmError(using: NSDataCompressionAlgorithm): this;

	copyWithZone(_?: any): any;

	decompressedDataUsingAlgorithmError(using: NSDataCompressionAlgorithm): this;

	encodeWithCoder(_: NSCoder): void;

	enumerateByteRangesUsingBlock(_: (p1: any, p2: NSRange, p3: boolean) => void): void;

	getBytesLength(_: any, length: number): void;

	getBytesRange(_: any, range: NSRange): void;

	isEqualToData(_: NSData): boolean;

	mutableCopyWithZone(_?: any): any;

	rangeOfDataOptionsRange(of: NSData, options: NSDataSearchOptions, in_: NSRange): NSRange;

	subdataWithRange(_: NSRange): NSData;

	writeToFileAtomically(_: string, atomically: boolean): boolean;

	writeToFileOptionsError(options: string, error: NSDataWritingOptions): boolean;

	writeToURLAtomically(_: NSURL, atomically: boolean): boolean;

	writeToURLOptionsError(options: NSURL, error: NSDataWritingOptions): boolean;
}

enum NSDataBase64DecodingOptions {

	IgnoreUnknownCharacters = 1
}

globalThis.NSDataBase64DecodingOptions = NSDataBase64DecodingOptions;

enum NSDataBase64EncodingOptions {

	Encoding64CharacterLineLength = 1,

	Encoding76CharacterLineLength = 2,

	EncodingEndLineWithCarriageReturn = 16,

	EncodingEndLineWithLineFeed = 32
}

globalThis.NSDataBase64EncodingOptions = NSDataBase64EncodingOptions;

enum NSDataCompressionAlgorithm {

	LZFSE = 0,

	LZ4 = 1,

	LZMA = 2,

	Zlib = 3
}

globalThis.NSDataCompressionAlgorithm = NSDataCompressionAlgorithm;

declare class NSDataDetector extends NSRegularExpression {

	static dataDetectorWithTypesError(error: number): NSDataDetector;

	readonly checkingTypes: number;

	static create(types: number);
}

enum NSDataReadingOptions {

	DataReadingMappedIfSafe = 1,

	DataReadingUncached = 2,

	DataReadingMappedAlways = 8,

	DataReadingMapped = 1,

	MappedRead = 1,

	UncachedRead = 2
}

globalThis.NSDataReadingOptions = NSDataReadingOptions;

enum NSDataSearchOptions {

	Backwards = 1,

	Anchored = 2
}

globalThis.NSDataSearchOptions = NSDataSearchOptions;

enum NSDataWritingOptions {

	DataWritingAtomic = 1,

	DataWritingWithoutOverwriting = 2,

	DataWritingFileProtectionNone = 268435456,

	DataWritingFileProtectionComplete = 536870912,

	DataWritingFileProtectionCompleteUnlessOpen = 805306368,

	DataWritingFileProtectionCompleteUntilFirstUserAuthentication = 1073741824,

	DataWritingFileProtectionMask = 4026531840,

	AtomicWrite = 1
}

globalThis.NSDataWritingOptions = NSDataWritingOptions;

declare class NSDate extends NSObject implements NSCopying, NSSecureCoding {

	static date(): NSDate;

	static dateWithTimeIntervalSinceDate(_: number, sinceDate: Date): NSDate;

	static dateWithTimeIntervalSince1970(_: number): NSDate;

	static dateWithTimeIntervalSinceNow(_: number): NSDate;

	static dateWithTimeIntervalSinceReferenceDate(_: number): NSDate;

	readonly timeIntervalSince1970: number;

	readonly timeIntervalSinceNow: number;

	readonly timeIntervalSinceReferenceDate: number;

	static distantFuture(): Date;

	static distantPast(): Date;

	static now(): Date;

	static timeIntervalSinceReferenceDate(): number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(timeInterval: number, sinceDate: Date);

	static create(timeIntervalSince1970: number);

	static create(timeIntervalSinceNow: number);

	static create(timeIntervalSinceReferenceDate: number);

	compare(_: Date): NSComparisonResult;

	copyWithZone(_?: any): any;

	dateByAddingTimeInterval(_: number): this;

	descriptionWithLocale(with_?: any): string;

	earlierDate(_: Date): Date;

	encodeWithCoder(_: NSCoder): void;

	isEqualToDate(_: Date): boolean;

	laterDate(_: Date): Date;

	timeIntervalSinceDate(_: Date): number;
}

declare const NSDateComponentUndefined: number;

declare class NSDateComponents extends NSObject implements NSCopying, NSSecureCoding {

	setCalendar(_: NSCalendar)

	calendar: NSCalendar;

	readonly date: Date;

	setDay(_: number)

	day: number;

	setEra(_: number)

	era: number;

	setHour(_: number)

	hour: number;

	setLeapMonth(_: boolean)

	isLeapMonth: boolean;

	setMinute(_: number)

	minute: number;

	setMonth(_: number)

	month: number;

	setNanosecond(_: number)

	nanosecond: number;

	setQuarter(_: number)

	quarter: number;

	setSecond(_: number)

	second: number;

	setTimeZone(_: NSTimeZone)

	timeZone: NSTimeZone;

	readonly isValidDate: boolean;

	setWeekOfMonth(_: number)

	weekOfMonth: number;

	setWeekOfYear(_: number)

	weekOfYear: number;

	setWeekday(_: number)

	weekday: number;

	setWeekdayOrdinal(_: number)

	weekdayOrdinal: number;

	setYear(_: number)

	year: number;

	setYearForWeekOfYear(_: number)

	yearForWeekOfYear: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isValidDateInCalendar(_: NSCalendar): boolean;

	setValueForComponent(_: number, forComponent: NSCalendarUnit): void;

	valueForComponent(_: NSCalendarUnit): number;
}

declare class NSDateComponentsFormatter extends NSFormatter {

	static localizedStringFromDateComponentsUnitsStyle(_: NSDateComponents, unitsStyle: NSDateComponentsFormatterUnitsStyle): string;

	setAllowedUnits(_: NSCalendarUnit)

	allowedUnits: NSCalendarUnit;

	setAllowsFractionalUnits(_: boolean)

	allowsFractionalUnits: boolean;

	setCalendar(_: NSCalendar)

	calendar: NSCalendar;

	setCollapsesLargestUnit(_: boolean)

	collapsesLargestUnit: boolean;

	setFormattingContext(_: NSFormattingContext)

	formattingContext: NSFormattingContext;

	setIncludesApproximationPhrase(_: boolean)

	includesApproximationPhrase: boolean;

	setIncludesTimeRemainingPhrase(_: boolean)

	includesTimeRemainingPhrase: boolean;

	setMaximumUnitCount(_: number)

	maximumUnitCount: number;

	setReferenceDate(_: Date)

	referenceDate: Date;

	setUnitsStyle(_: NSDateComponentsFormatterUnitsStyle)

	unitsStyle: NSDateComponentsFormatterUnitsStyle;

	setZeroFormattingBehavior(_: NSDateComponentsFormatterZeroFormattingBehavior)

	zeroFormattingBehavior: NSDateComponentsFormatterZeroFormattingBehavior;

	stringFromDateToDate(_: Date, toDate: Date): string;

	stringFromDateComponents(_: NSDateComponents): string;

	stringFromTimeInterval(from: number): string;
}

enum NSDateComponentsFormatterUnitsStyle {

	Positional = 0,

	Abbreviated = 1,

	Short = 2,

	Full = 3,

	SpellOut = 4,

	Brief = 5
}

globalThis.NSDateComponentsFormatterUnitsStyle = NSDateComponentsFormatterUnitsStyle;

enum NSDateComponentsFormatterZeroFormattingBehavior {

	None = 0,

	Default = 1,

	DropLeading = 2,

	DropMiddle = 4,

	DropTrailing = 8,

	DropAll = 14,

	Pad = 65536
}

globalThis.NSDateComponentsFormatterZeroFormattingBehavior = NSDateComponentsFormatterZeroFormattingBehavior;

declare class NSDateFormatter extends NSFormatter {

	static dateFormatFromTemplateOptionsLocale(_: string, options: number, locale?: NSLocale): string;

	static localizedStringFromDateDateStyleTimeStyle(from: Date, dateStyle: NSDateFormatterStyle, timeStyle: NSDateFormatterStyle): string;

	setAMSymbol(_: string)

	AMSymbol: string;

	setPMSymbol(_: string)

	PMSymbol: string;

	setCalendar(_: NSCalendar)

	calendar: NSCalendar;

	setDateFormat(_: string)

	dateFormat: string;

	setDateStyle(_: NSDateFormatterStyle)

	dateStyle: NSDateFormatterStyle;

	setDefaultDate(_: Date)

	defaultDate: Date;

	setDoesRelativeDateFormatting(_: boolean)

	doesRelativeDateFormatting: boolean;

	setEraSymbols(_: NSArray<string>)

	eraSymbols: NSArray<string>;

	setFormatterBehavior(_: NSDateFormatterBehavior)

	formatterBehavior: NSDateFormatterBehavior;

	setFormattingContext(_: NSFormattingContext)

	formattingContext: NSFormattingContext;

	setGeneratesCalendarDates(_: boolean)

	generatesCalendarDates: boolean;

	setGregorianStartDate(_: Date)

	gregorianStartDate: Date;

	setLenient(_: boolean)

	isLenient: boolean;

	setLocale(_: NSLocale)

	locale: NSLocale;

	setLongEraSymbols(_: NSArray<string>)

	longEraSymbols: NSArray<string>;

	setMonthSymbols(_: NSArray<string>)

	monthSymbols: NSArray<string>;

	setQuarterSymbols(_: NSArray<string>)

	quarterSymbols: NSArray<string>;

	setShortMonthSymbols(_: NSArray<string>)

	shortMonthSymbols: NSArray<string>;

	setShortQuarterSymbols(_: NSArray<string>)

	shortQuarterSymbols: NSArray<string>;

	setShortStandaloneMonthSymbols(_: NSArray<string>)

	shortStandaloneMonthSymbols: NSArray<string>;

	setShortStandaloneQuarterSymbols(_: NSArray<string>)

	shortStandaloneQuarterSymbols: NSArray<string>;

	setShortStandaloneWeekdaySymbols(_: NSArray<string>)

	shortStandaloneWeekdaySymbols: NSArray<string>;

	setShortWeekdaySymbols(_: NSArray<string>)

	shortWeekdaySymbols: NSArray<string>;

	setStandaloneMonthSymbols(_: NSArray<string>)

	standaloneMonthSymbols: NSArray<string>;

	setStandaloneQuarterSymbols(_: NSArray<string>)

	standaloneQuarterSymbols: NSArray<string>;

	setStandaloneWeekdaySymbols(_: NSArray<string>)

	standaloneWeekdaySymbols: NSArray<string>;

	setTimeStyle(_: NSDateFormatterStyle)

	timeStyle: NSDateFormatterStyle;

	setTimeZone(_: NSTimeZone)

	timeZone: NSTimeZone;

	setTwoDigitStartDate(_: Date)

	twoDigitStartDate: Date;

	setVeryShortMonthSymbols(_: NSArray<string>)

	veryShortMonthSymbols: NSArray<string>;

	setVeryShortStandaloneMonthSymbols(_: NSArray<string>)

	veryShortStandaloneMonthSymbols: NSArray<string>;

	setVeryShortStandaloneWeekdaySymbols(_: NSArray<string>)

	veryShortStandaloneWeekdaySymbols: NSArray<string>;

	setVeryShortWeekdaySymbols(_: NSArray<string>)

	veryShortWeekdaySymbols: NSArray<string>;

	setWeekdaySymbols(_: NSArray<string>)

	weekdaySymbols: NSArray<string>;

	static setDefaultFormatterBehavior(_: NSDateFormatterBehavior)

	defaultFormatterBehavior: NSDateFormatterBehavior;

	dateFromString(_: string): Date;

	getObjectValueForStringRangeError(forString?: any, range: string, error?: NSRange): boolean;

	setLocalizedDateFormatFromTemplate(_: string): void;

	stringFromDate(_: Date): string;
}

enum NSDateFormatterBehavior {

	BehaviorDefault = 0,

	Behavior10_0 = 1000,

	Behavior10_4 = 1040
}

globalThis.NSDateFormatterBehavior = NSDateFormatterBehavior;

enum NSDateFormatterStyle {

	NoStyle = 0,

	ShortStyle = 1,

	MediumStyle = 2,

	LongStyle = 3,

	FullStyle = 4
}

globalThis.NSDateFormatterStyle = NSDateFormatterStyle;

declare class NSDateInterval extends NSObject implements NSCopying, NSSecureCoding {

	readonly duration: number;

	readonly endDate: Date;

	readonly startDate: Date;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(startDate: Date, duration: number);

	static create(startDate: Date, endDate: Date);

	compare(_: NSDateInterval): NSComparisonResult;

	containsDate(_: Date): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	intersectionWithDateInterval(_: NSDateInterval): NSDateInterval;

	intersectsDateInterval(_: NSDateInterval): boolean;

	isEqualToDateInterval(_: NSDateInterval): boolean;
}

declare class NSDateIntervalFormatter extends NSFormatter {

	setCalendar(_: NSCalendar)

	calendar: NSCalendar;

	setDateStyle(_: NSDateIntervalFormatterStyle)

	dateStyle: NSDateIntervalFormatterStyle;

	setDateTemplate(_: string)

	dateTemplate: string;

	setLocale(_: NSLocale)

	locale: NSLocale;

	setTimeStyle(_: NSDateIntervalFormatterStyle)

	timeStyle: NSDateIntervalFormatterStyle;

	setTimeZone(_: NSTimeZone)

	timeZone: NSTimeZone;

	stringFromDateToDate(_: Date, toDate: Date): string;

	stringFromDateInterval(_: NSDateInterval): string;
}

enum NSDateIntervalFormatterStyle {

	NoStyle = 0,

	ShortStyle = 1,

	MediumStyle = 2,

	LongStyle = 3,

	FullStyle = 4
}

globalThis.NSDateIntervalFormatterStyle = NSDateIntervalFormatterStyle;

declare function NSDeallocateMemoryPages(ptr: any, bytes: number): void;

declare function NSDeallocateObject(object_: any): void;

declare var NSDeallocateZombies: boolean;

declare var NSDebugDescriptionErrorKey: string;

declare var NSDebugEnabled: boolean;

interface NSDecimal {
	_exponent: number;
	_length: number;
	_isNegative: number;
	_isCompact: number;
	_reserved: number;
	_mantissa: number;
}
declare var NSDecimal: NSDecimal;

declare function NSDecimalAdd(result: NSDecimal, leftOperand: NSDecimal, rightOperand: NSDecimal, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecimalCompact(number: NSDecimal): void;

declare function NSDecimalCompare(leftOperand: NSDecimal, rightOperand: NSDecimal): NSComparisonResult;

declare function NSDecimalCopy(destination: NSDecimal, source: NSDecimal): void;

declare function NSDecimalDivide(result: NSDecimal, leftOperand: NSDecimal, rightOperand: NSDecimal, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecimalMultiply(result: NSDecimal, leftOperand: NSDecimal, rightOperand: NSDecimal, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecimalMultiplyByPowerOf10(result: NSDecimal, number: NSDecimal, power: number, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecimalNormalize(number1: NSDecimal, number2: NSDecimal, roundingMode: NSRoundingMode): NSCalculationError;

declare class NSDecimalNumber extends NSNumber {

	static decimalNumberWithDecimal(_: NSDecimal): NSDecimalNumber;

	static decimalNumberWithMantissaExponentIsNegative(_: number, exponent: number, isNegative: boolean): NSDecimalNumber;

	static decimalNumberWithString(_?: string): NSDecimalNumber;

	static decimalNumberWithStringLocale(_?: string, locale?: any): NSDecimalNumber;

	static setDefaultBehavior(_: NSDecimalNumberBehaviors)

	defaultBehavior: NSDecimalNumberBehaviors;

	static maximumDecimalNumber(): NSDecimalNumber;

	static minimumDecimalNumber(): NSDecimalNumber;

	static notANumber(): NSDecimalNumber;

	static one(): NSDecimalNumber;

	static zero(): NSDecimalNumber;

	static create(decimal: NSDecimal);

	static create(mantissa: number, exponent: number, isNegative: boolean);

	static create(string: string);

	static create(string: string, locale: any);

	decimalNumberByAdding(_: NSDecimalNumber): NSDecimalNumber;

	decimalNumberByAddingWithBehavior(_: NSDecimalNumber, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberByDividingBy(_: NSDecimalNumber): NSDecimalNumber;

	decimalNumberByDividingByWithBehavior(_: NSDecimalNumber, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberByMultiplyingBy(_: NSDecimalNumber): NSDecimalNumber;

	decimalNumberByMultiplyingByWithBehavior(_: NSDecimalNumber, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberByMultiplyingByPowerOf10(_: number): NSDecimalNumber;

	decimalNumberByMultiplyingByPowerOf10WithBehavior(_: number, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberByRaisingToPower(_: number): NSDecimalNumber;

	decimalNumberByRaisingToPowerWithBehavior(_: number, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberByRoundingAccordingToBehavior(_?: NSDecimalNumberBehaviors): NSDecimalNumber;

	decimalNumberBySubtracting(_: NSDecimalNumber): NSDecimalNumber;

	decimalNumberBySubtractingWithBehavior(_: NSDecimalNumber, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;
}

interface NSDecimalNumberBehaviors {

	exceptionDuringOperationErrorLeftOperandRightOperand(_: string, error: NSCalculationError, leftOperand: NSDecimalNumber, rightOperand?: NSDecimalNumber): NSDecimalNumber;

	roundingMode(): NSRoundingMode;

	scale(): number;
}
declare var NSDecimalNumberBehaviors: {

	prototype: NSDecimalNumberBehaviors;
};

declare var NSDecimalNumberDivideByZeroException: string;

declare var NSDecimalNumberExactnessException: string;

declare class NSDecimalNumberHandler extends NSObject implements NSCoding, NSDecimalNumberBehaviors {

	static decimalNumberHandlerWithRoundingModeScaleRaiseOnExactnessRaiseOnOverflowRaiseOnUnderflowRaiseOnDivideByZero(_: NSRoundingMode, scale: number, raiseOnExactness: boolean, raiseOnOverflow: boolean, raiseOnUnderflow: boolean, raiseOnDivideByZero: boolean): NSDecimalNumberHandler;

	static defaultDecimalNumberHandler(): NSDecimalNumberHandler;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(roundingMode: NSRoundingMode, scale: number, raiseOnExactness: boolean, raiseOnOverflow: boolean, raiseOnUnderflow: boolean, raiseOnDivideByZero: boolean);

	encodeWithCoder(_: NSCoder): void;

	exceptionDuringOperationErrorLeftOperandRightOperand(_: string, error: NSCalculationError, leftOperand: NSDecimalNumber, rightOperand?: NSDecimalNumber): NSDecimalNumber;

	roundingMode(): NSRoundingMode;

	scale(): number;
}

declare var NSDecimalNumberOverflowException: string;

declare var NSDecimalNumberUnderflowException: string;

declare function NSDecimalPower(result: NSDecimal, number: NSDecimal, power: number, roundingMode: NSRoundingMode): NSCalculationError;

declare function NSDecimalRound(result: NSDecimal, number: NSDecimal, scale: number, roundingMode: NSRoundingMode): void;

declare function NSDecimalString(dcm: NSDecimal, locale: any): string;

declare function NSDecimalSubtract(result: NSDecimal, leftOperand: NSDecimal, rightOperand: NSDecimal, roundingMode: NSRoundingMode): NSCalculationError;

enum NSDecodingFailurePolicy {

	RaiseException = 0,

	SetErrorAndReturn = 1
}

globalThis.NSDecodingFailurePolicy = NSDecodingFailurePolicy;

declare const NSDecompressionFailedError: number;

declare function NSDecrementExtraRefCountWasZero(object_: any): boolean;

declare var NSDefaultRunLoopMode: string;

declare class NSDeleteCommand extends NSScriptCommand {

	readonly keySpecifier: NSScriptObjectSpecifier;

	setReceiversSpecifier(_?: NSScriptObjectSpecifier): void;
}

declare var NSDestinationInvalidException: string;

declare class NSDictionary<KeyType, ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding, NSFastEnumeration {

	static dictionary<KeyType, ObjectType>(): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithContentsOfFile<KeyType, ObjectType>(_: string): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithContentsOfURL<KeyType, ObjectType>(_: NSURL): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithDictionary<KeyType, ObjectType>(_: NSDictionary<KeyType, ObjectType>): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithObjectForKey<KeyType, ObjectType>(_: ObjectType, forKey: KeyType): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithObjectsForKeys<KeyType, ObjectType>(_: NSArray<ObjectType>, forKeys: NSArray<KeyType>): NSDictionary<KeyType, ObjectType>;

	static dictionaryWithObjectsForKeysCount<KeyType, ObjectType>(_?: ObjectType, forKeys?: KeyType, count: number): NSDictionary<KeyType, ObjectType>;

	static sharedKeySetForKeys<KeyType>(_: NSArray<KeyType>): any;

	readonly allKeys: NSArray<KeyType>;

	readonly allValues: NSArray<ObjectType>;

	readonly count: number;

	readonly descriptionInStringsFileFormat: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(contentsOfFile: string);

	static create(contentsOfURL: NSURL);

	static create(contentsOfURL: NSURL);

	static create(dictionary: NSDictionary<KeyType, ObjectType>);

	static create(dictionary: NSDictionary<KeyType, ObjectType>, copyItems: boolean);

	static create(objects: NSArray<ObjectType> | ObjectType[], forKeys: NSArray<KeyType> | KeyType[]);

	static create(objects: ObjectType, forKeys: KeyType, count: number);

	static create(objectsAndKeys: any);

	allKeysForObject(_: ObjectType): NSArray<KeyType>;

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: K, count: number): number;

	descriptionWithLocale(_?: any): string;

	descriptionWithLocaleIndent(_?: any, indent: number): string;

	encodeWithCoder(_: NSCoder): void;

	enumerateKeysAndObjectsUsingBlock(_: (p1: KeyType, p2: ObjectType, p3: boolean) => void): void;

	enumerateKeysAndObjectsWithOptionsUsingBlock(_: NSEnumerationOptions, usingBlock: (p1: KeyType, p2: ObjectType, p3: boolean) => void): void;

	fileCreationDate(): Date;

	fileExtensionHidden(): boolean;

	fileGroupOwnerAccountID(): number;

	fileGroupOwnerAccountName(): string;

	fileHFSCreatorCode(): number;

	fileHFSTypeCode(): number;

	fileIsAppendOnly(): boolean;

	fileIsImmutable(): boolean;

	fileModificationDate(): Date;

	fileOwnerAccountID(): number;

	fileOwnerAccountName(): string;

	filePosixPermissions(): number;

	fileSize(): number;

	fileSystemFileNumber(): number;

	fileSystemNumber(): number;

	fileType(): string;

	isEqualToDictionary(_: NSDictionary<KeyType, ObjectType>): boolean;

	keyEnumerator(): NSEnumerator<KeyType>;

	keysOfEntriesPassingTest(_: (p1: KeyType, p2: ObjectType, p3: boolean) => boolean): NSSet<KeyType>;

	keysOfEntriesWithOptionsPassingTest(_: NSEnumerationOptions, passingTest: (p1: KeyType, p2: ObjectType, p3: boolean) => boolean): NSSet<KeyType>;

	keysSortedByValueUsingComparator(_: (p1: any, p2: any) => NSComparisonResult): NSArray<KeyType>;

	keysSortedByValueUsingSelector(_: string): NSArray<KeyType>;

	keysSortedByValueWithOptionsUsingComparator(_: NSSortOptions, usingComparator: (p1: any, p2: any) => NSComparisonResult): NSArray<KeyType>;

	mutableCopyWithZone(_?: any): any;

	objectEnumerator(): NSEnumerator<ObjectType>;

	objectForKey(_: KeyType): ObjectType;

	objectForKeyedSubscript(_: KeyType): ObjectType;

	objectsForKeysNotFoundMarker(_: NSArray<KeyType>, notFoundMarker: ObjectType): NSArray<ObjectType>;

	valueForKey(_: string): ObjectType;

	writeToFileAtomically(_: string, atomically: boolean): boolean;

	writeToURLAtomically(_: NSURL, atomically: boolean): boolean;

	writeToURLError(error: NSURL): boolean;
}

declare var NSDidBecomeSingleThreadedNotification: string;

declare class NSDimension extends NSUnit implements NSSecureCoding {

	static baseUnit(): NSDimension;

	readonly converter: NSUnitConverter;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(symbol: string, converter: NSUnitConverter);

	encodeWithCoder(_: NSCoder): void;
}

enum NSDirectoryEnumerationOptions {

	SkipsSubdirectoryDescendants = 1,

	SkipsPackageDescendants = 2,

	SkipsHiddenFiles = 4,

	IncludesDirectoriesPostOrder = 8,

	ProducesRelativePathURLs = 16
}

globalThis.NSDirectoryEnumerationOptions = NSDirectoryEnumerationOptions;

declare class NSDirectoryEnumerator<ObjectType> extends NSEnumerator<ObjectType> {

	readonly directoryAttributes: NSDictionary<string, any>;

	readonly fileAttributes: NSDictionary<string, any>;

	readonly isEnumeratingDirectoryPostOrder: boolean;

	readonly level: number;

	skipDescendants(): void;

	skipDescendents(): void;
}

interface NSDiscardableContent {

	beginContentAccess(): boolean;

	discardContentIfPossible(): void;

	endContentAccess(): void;

	isContentDiscarded(): boolean;
}
declare var NSDiscardableContent: {

	prototype: NSDiscardableContent;
};

declare var NSDistinctUnionOfArraysKeyValueOperator: string;

declare var NSDistinctUnionOfObjectsKeyValueOperator: string;

declare var NSDistinctUnionOfSetsKeyValueOperator: string;

declare class NSDistributedLock extends NSObject {

	static lockWithPath(_: string): NSDistributedLock;

	readonly lockDate: Date;

	static create(path: string);

	breakLock(): void;

	tryLock(): boolean;

	unlock(): void;
}

declare class NSDistributedNotificationCenter extends NSNotificationCenter {

	static notificationCenterForType(_: string): NSDistributedNotificationCenter;

	setSuspended(_: boolean)

	suspended: boolean;

	addObserverSelectorNameObject(_: any, selector: string, name?: string, object_?: string): void;

	addObserverSelectorNameObjectSuspensionBehavior(_: any, selector: string, name?: string, object_?: string, suspensionBehavior: NSNotificationSuspensionBehavior): void;

	postNotificationNameObject(_: string, object_?: string): void;

	postNotificationNameObjectUserInfo(_: string, object_?: string, userInfo?: NSDictionary<any, any>): void;

	postNotificationNameObjectUserInfoDeliverImmediately(_: string, object_?: string, userInfo?: NSDictionary<any, any>, deliverImmediately: boolean): void;

	postNotificationNameObjectUserInfoOptions(_: string, object_?: string, userInfo?: NSDictionary<any, any>, options: NSDistributedNotificationOptions): void;

	removeObserverNameObject(_: any, name?: string, object_?: string): void;
}

enum NSDistributedNotificationOptions {

	DeliverImmediately = 1,

	PostToAllSessions = 2
}

globalThis.NSDistributedNotificationOptions = NSDistributedNotificationOptions;

declare function NSDivideRect(inRect: CGRect, slice: CGRect, rem: CGRect, amount: number, edge: NSRectEdge): void;

interface NSEdgeInsets {
	top: number;
	left: number;
	bottom: number;
	right: number;
}
declare var NSEdgeInsets: NSEdgeInsets;

declare function NSEdgeInsetsEqual(aInsets: NSEdgeInsets, bInsets: NSEdgeInsets): boolean;

declare var NSEdgeInsetsZero: NSEdgeInsets;

declare function NSEndHashTableEnumeration(enumerator: NSHashEnumerator): void;

declare function NSEndMapTableEnumeration(enumerator: NSMapEnumerator): void;

declare class NSEnergyFormatter extends NSFormatter {

	setForFoodEnergyUse(_: boolean)

	isForFoodEnergyUse: boolean;

	setNumberFormatter(_: NSNumberFormatter)

	numberFormatter: NSNumberFormatter;

	setUnitStyle(_: NSFormattingUnitStyle)

	unitStyle: NSFormattingUnitStyle;

	stringFromJoules(_: number): string;

	stringFromValueUnit(_: number, unit: NSEnergyFormatterUnit): string;

	unitStringFromJoulesUsedUnit(_: number, usedUnit?: NSEnergyFormatterUnit): string;

	unitStringFromValueUnit(_: number, unit: NSEnergyFormatterUnit): string;
}

enum NSEnergyFormatterUnit {

	Joule = 11,

	Kilojoule = 14,

	Calorie = 1793,

	Kilocalorie = 1794
}

globalThis.NSEnergyFormatterUnit = NSEnergyFormatterUnit;

declare function NSEnumerateHashTable(table: NSHashTable<any>): NSHashEnumerator;

declare function NSEnumerateMapTable(table: NSMapTable<any, any>): NSMapEnumerator;

enum NSEnumerationOptions {

	Concurrent = 1,

	Reverse = 2
}

globalThis.NSEnumerationOptions = NSEnumerationOptions;

declare class NSEnumerator<ObjectType> extends NSObject implements NSFastEnumeration {

	readonly allObjects: NSArray<ObjectType>;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	nextObject(): ObjectType;
}

declare function NSEqualPoints(aPoint: CGPoint, bPoint: CGPoint): boolean;

declare function NSEqualRects(aRect: CGRect, bRect: CGRect): boolean;

declare function NSEqualSizes(aSize: CGSize, bSize: CGSize): boolean;

declare class NSError extends NSObject implements NSCopying, NSSecureCoding {

	static errorWithDomainCodeUserInfo(_: string, code: number, userInfo?: NSDictionary<string, any>): NSError;

	static setUserInfoValueProviderForDomainProvider(forDomain: string, provider?: (p1: NSError, p2: string) => any): void;

	static userInfoValueProviderForDomain(_: string): (p1: NSError, p2: string) => any;

	readonly code: number;

	readonly domain: string;

	readonly helpAnchor: string;

	readonly localizedDescription: string;

	readonly localizedFailureReason: string;

	readonly localizedRecoveryOptions: NSArray<string>;

	readonly localizedRecoverySuggestion: string;

	readonly recoveryAttempter: any;

	readonly userInfo: NSDictionary<string, any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(domain: string, code: number, userInfo: NSDictionary<string, any>);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NSException extends NSObject implements NSCopying, NSSecureCoding {

	static exceptionWithNameReasonUserInfo(_: string, reason?: string, userInfo?: NSDictionary<any, any>): NSException;

	readonly callStackReturnAddresses: NSArray<number>;

	readonly callStackSymbols: NSArray<string>;

	readonly name: string;

	readonly reason: string;

	readonly userInfo: NSDictionary<any, any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(name: string, reason: string, userInfo: NSDictionary<any, any>);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	raise(): void;
}

declare const NSExecutableArchitectureMismatchError: number;

declare const NSExecutableErrorMaximum: number;

declare const NSExecutableErrorMinimum: number;

declare const NSExecutableLinkError: number;

declare const NSExecutableLoadError: number;

declare const NSExecutableNotLoadableError: number;

declare const NSExecutableRuntimeMismatchError: number;

declare class NSExistsCommand extends NSScriptCommand {
}

declare class NSExpression extends NSObject implements NSCopying, NSSecureCoding {

	static expressionForAggregate(_: NSArray<NSExpression>): NSExpression;

	static expressionForAnyKey(): NSExpression;

	static expressionForBlockArguments(block?: (p1: any, p2: NSArray<NSExpression>, p3: NSMutableDictionary<any, any>) => any, arguments_?: NSArray<NSExpression>): NSExpression;

	static expressionForConditionalTrueExpressionFalseExpression(_: NSPredicate, trueExpression: NSExpression, falseExpression: NSExpression): NSExpression;

	static expressionForConstantValue(_?: any): NSExpression;

	static expressionForEvaluatedObject(): NSExpression;

	static expressionForFunctionArguments(_: string, arguments_: NSArray<any>): NSExpression;

	static expressionForFunctionSelectorNameArguments(_: NSExpression, selectorName: string, arguments_?: NSArray<any>): NSExpression;

	static expressionForIntersectSetWith(_: NSExpression, with_: NSExpression): NSExpression;

	static expressionForKeyPath(_: string): NSExpression;

	static expressionForMinusSetWith(_: NSExpression, with_: NSExpression): NSExpression;

	static expressionForSubqueryUsingIteratorVariablePredicate(_: NSExpression, usingIteratorVariable: string, predicate: NSPredicate): NSExpression;

	static expressionForUnionSetWith(_: NSExpression, with_: NSExpression): NSExpression;

	static expressionForVariable(_: string): NSExpression;

	static expressionWithFormatArgumentArray(_: string, argumentArray: NSArray<any>): NSExpression;

	readonly arguments: NSArray<NSExpression>;

	readonly collection: any;

	readonly constantValue: any;

	readonly expressionBlock: (p1: any, p2: NSArray<NSExpression>, p3: NSMutableDictionary<any, any>) => any;

	readonly expressionType: NSExpressionType;

	readonly falseExpression: NSExpression;

	readonly function: string;

	readonly keyPath: string;

	readonly leftExpression: NSExpression;

	readonly operand: NSExpression;

	readonly predicate: NSPredicate;

	readonly rightExpression: NSExpression;

	readonly trueExpression: NSExpression;

	readonly variable: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(expressionType: NSExpressionType);

	allowEvaluation(): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	expressionValueWithObjectWithContext(_?: any, context?: NSMutableDictionary<any, any>): any;
}

enum NSExpressionType {

	ConstantValueExpressionType = 0,

	EvaluatedObjectExpressionType = 1,

	VariableExpressionType = 2,

	KeyPathExpressionType = 3,

	FunctionExpressionType = 4,

	UnionSetExpressionType = 5,

	IntersectSetExpressionType = 6,

	MinusSetExpressionType = 7,

	SubqueryExpressionType = 13,

	AggregateExpressionType = 14,

	AnyKeyExpressionType = 15,

	BlockExpressionType = 19,

	ConditionalExpressionType = 20
}

globalThis.NSExpressionType = NSExpressionType;

declare class NSExtensionContext extends NSObject {

	readonly inputItems: NSArray<any>;

	cancelRequestWithError(withError: NSError): void;

	completeRequestReturningItemsCompletionHandler(returningItems?: NSArray<any>, completionHandler?: (p1: boolean) => void): void;

	openURLCompletionHandler(_: NSURL, completionHandler?: (p1: boolean) => void): void;
}

declare class NSExtensionItem extends NSObject implements NSCopying, NSSecureCoding {

	setAttachments(_: NSArray<NSItemProvider>)

	attachments: NSArray<NSItemProvider>;

	setAttributedContentText(_: NSAttributedString)

	attributedContentText: NSAttributedString;

	setAttributedTitle(_: NSAttributedString)

	attributedTitle: NSAttributedString;

	setUserInfo(_: NSDictionary<any, any>)

	userInfo: NSDictionary<any, any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var NSExtensionItemAttachmentsKey: string;

declare var NSExtensionItemAttributedContentTextKey: string;

declare var NSExtensionItemAttributedTitleKey: string;

declare var NSExtensionItemsAndErrorsKey: string;

declare var NSExtensionJavaScriptPreprocessingResultsKey: string;

interface NSExtensionRequestHandling extends NSObjectProtocol {

	beginRequestWithExtensionContext(_: NSExtensionContext): void;
}
declare var NSExtensionRequestHandling: {

	prototype: NSExtensionRequestHandling;
};

declare function NSExtraRefCount(object_: any): number;

interface NSFastEnumeration {

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;
}
declare var NSFastEnumeration: {

	prototype: NSFastEnumeration;
};

interface NSFastEnumerationState {
	state: number;
	itemsPtr: any;
	mutationsPtr: number;
	extra: number;
}
declare var NSFastEnumerationState: NSFastEnumerationState;

declare const NSFeatureUnsupportedError: number;

declare class NSFileAccessIntent extends NSObject {

	static readingIntentWithURLOptions(_: NSURL, options: NSFileCoordinatorReadingOptions): NSFileAccessIntent;

	static writingIntentWithURLOptions(_: NSURL, options: NSFileCoordinatorWritingOptions): NSFileAccessIntent;

	readonly URL: NSURL;
}

declare var NSFileAppendOnly: string;

declare var NSFileBusy: string;

declare class NSFileCoordinator extends NSObject {

	static addFilePresenter(_: NSFilePresenter): void;

	static removeFilePresenter(_: NSFilePresenter): void;

	setPurposeIdentifier(_: string)

	purposeIdentifier: string;

	static filePresenters(): NSArray<NSFilePresenter>;

	static create(filePresenter: NSFilePresenter);

	cancel(): void;

	coordinateAccessWithIntentsQueueByAccessor(with_: NSArray<NSFileAccessIntent>, queue: NSOperationQueue, byAccessor?: (p1: NSError) => void): void;

	coordinateReadingItemAtURLOptionsErrorByAccessor(readingItemAt: NSURL, options: NSFileCoordinatorReadingOptions, error?: NSError, byAccessor: (p1: NSURL) => void): void;

	coordinateReadingItemAtURLOptionsWritingItemAtURLOptionsErrorByAccessor(readingItemAt: NSURL, options: NSFileCoordinatorReadingOptions, writingItemAt: NSURL, options: NSFileCoordinatorWritingOptions, error?: NSError, byAccessor: (p1: NSURL, p2: NSURL) => void): void;

	coordinateWritingItemAtURLOptionsErrorByAccessor(writingItemAt: NSURL, options: NSFileCoordinatorWritingOptions, error?: NSError, byAccessor: (p1: NSURL) => void): void;

	coordinateWritingItemAtURLOptionsWritingItemAtURLOptionsErrorByAccessor(writingItemAt: NSURL, options: NSFileCoordinatorWritingOptions, writingItemAt: NSURL, options: NSFileCoordinatorWritingOptions, error?: NSError, byAccessor: (p1: NSURL, p2: NSURL) => void): void;

	itemAtURLWithDidChangeUbiquityAttributes(_: NSURL, didChangeUbiquityAttributes: NSSet<string>): void;

	itemAtURLDidMoveToURL(_: NSURL, didMoveToURL: NSURL): void;

	itemAtURLWillMoveToURL(_: NSURL, willMoveToURL: NSURL): void;

	prepareForReadingItemsAtURLsOptionsWritingItemsAtURLsOptionsErrorByAccessor(forReadingItemsAt: NSArray<NSURL>, options: NSFileCoordinatorReadingOptions, writingItemsAt: NSArray<NSURL>, options: NSFileCoordinatorWritingOptions, error?: NSError, byAccessor: (p1: () => void) => void): void;
}

enum NSFileCoordinatorReadingOptions {

	WithoutChanges = 1,

	ResolvesSymbolicLink = 2,

	ImmediatelyAvailableMetadataOnly = 4,

	ForUploading = 8
}

globalThis.NSFileCoordinatorReadingOptions = NSFileCoordinatorReadingOptions;

enum NSFileCoordinatorWritingOptions {

	ForDeleting = 1,

	ForMoving = 2,

	ForMerging = 4,

	ForReplacing = 8,

	ContentIndependentMetadataOnly = 16
}

globalThis.NSFileCoordinatorWritingOptions = NSFileCoordinatorWritingOptions;

declare var NSFileCreationDate: string;

declare var NSFileDeviceIdentifier: string;

declare const NSFileErrorMaximum: number;

declare const NSFileErrorMinimum: number;

declare var NSFileExtensionHidden: string;

declare var NSFileGroupOwnerAccountID: string;

declare var NSFileGroupOwnerAccountName: string;

declare var NSFileHFSCreatorCode: string;

declare var NSFileHFSTypeCode: string;

declare class NSFileHandle extends NSObject implements NSSecureCoding {

	static fileHandleForReadingAtPath(_: string): NSFileHandle;

	static fileHandleForReadingFromURLError(error: NSURL): NSFileHandle;

	static fileHandleForUpdatingAtPath(_: string): NSFileHandle;

	static fileHandleForUpdatingURLError(error: NSURL): NSFileHandle;

	static fileHandleForWritingAtPath(_: string): NSFileHandle;

	static fileHandleForWritingToURLError(error: NSURL): NSFileHandle;

	readonly availableData: NSData;

	readonly fileDescriptor: number;

	readonly offsetInFile: number;

	setReadabilityHandler(_: (p1: NSFileHandle) => void)

	readabilityHandler: (p1: NSFileHandle) => void;

	setWriteabilityHandler(_: (p1: NSFileHandle) => void)

	writeabilityHandler: (p1: NSFileHandle) => void;

	static fileHandleWithNullDevice(): NSFileHandle;

	static fileHandleWithStandardError(): NSFileHandle;

	static fileHandleWithStandardInput(): NSFileHandle;

	static fileHandleWithStandardOutput(): NSFileHandle;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(fileDescriptor: number);

	static create(fileDescriptor: number, closeOnDealloc: boolean);

	acceptConnectionInBackgroundAndNotify(): void;

	acceptConnectionInBackgroundAndNotifyForModes(_?: NSArray<string>): void;

	closeAndReturnError(): boolean;

	closeFile(): void;

	encodeWithCoder(_: NSCoder): void;

	getOffsetError(error: number): boolean;

	readDataOfLength(_: number): NSData;

	readDataToEndOfFile(): NSData;

	readDataToEndOfFileAndReturnError(): NSData;

	readDataUpToLengthError(error: number): NSData;

	readInBackgroundAndNotify(): void;

	readInBackgroundAndNotifyForModes(_?: NSArray<string>): void;

	readToEndOfFileInBackgroundAndNotify(): void;

	readToEndOfFileInBackgroundAndNotifyForModes(_?: NSArray<string>): void;

	seekToEndOfFile(): number;

	seekToEndReturningOffsetError(error?: number): boolean;

	seekToFileOffset(_: number): void;

	seekToOffsetError(error: number): boolean;

	synchronizeAndReturnError(): boolean;

	synchronizeFile(): void;

	truncateAtOffsetError(error: number): boolean;

	truncateFileAtOffset(_: number): void;

	waitForDataInBackgroundAndNotify(): void;

	waitForDataInBackgroundAndNotifyForModes(_?: NSArray<string>): void;

	writeData(_: NSData): void;

	writeDataError(error: NSData): boolean;
}

declare var NSFileHandleConnectionAcceptedNotification: string;

declare var NSFileHandleDataAvailableNotification: string;

declare var NSFileHandleNotificationDataItem: string;

declare var NSFileHandleNotificationFileHandleItem: string;

declare var NSFileHandleOperationException: string;

declare var NSFileHandleReadCompletionNotification: string;

declare var NSFileHandleReadToEndOfFileCompletionNotification: string;

declare var NSFileImmutable: string;

declare const NSFileLockingError: number;

declare class NSFileManager extends NSObject {

	static fileManagerWithAuthorization(_: NSWorkspaceAuthorization): NSFileManager;

	readonly currentDirectoryPath: string;

	setDelegate(_: NSFileManagerDelegate)

	delegate: NSFileManagerDelegate;

	readonly homeDirectoryForCurrentUser: NSURL;

	readonly temporaryDirectory: NSURL;

	readonly ubiquityIdentityToken: any;

	static defaultManager(): NSFileManager;

	URLForDirectoryInDomainAppropriateForURLCreateError(for_: NSSearchPathDirectory, in_: NSSearchPathDomainMask, appropriateFor?: NSURL, create: boolean): NSURL;

	URLForPublishingUbiquitousItemAtURLExpirationDateError(forPublishingUbiquitousItemAt: NSURL, expiration?: Date): NSURL;

	URLForUbiquityContainerIdentifier(forUbiquityContainerIdentifier?: string): NSURL;

	URLsForDirectoryInDomains(for_: NSSearchPathDirectory, in_: NSSearchPathDomainMask): NSArray<NSURL>;

	attributesOfFileSystemForPathError(error: string): NSDictionary<string, any>;

	attributesOfItemAtPathError(error: string): NSDictionary<string, any>;

	changeCurrentDirectoryPath(_: string): boolean;

	componentsToDisplayForPath(_: string): NSArray<string>;

	containerURLForSecurityApplicationGroupIdentifier(forSecurityApplicationGroupIdentifier: string): NSURL;

	contentsAtPath(_: string): NSData;

	contentsEqualAtPathAndPath(_: string, andPath: string): boolean;

	contentsOfDirectoryAtPathError(error: string): NSArray<string>;

	contentsOfDirectoryAtURLIncludingPropertiesForKeysOptionsError(includingPropertiesForKeys: NSURL, options?: NSArray<string>, error: NSDirectoryEnumerationOptions): NSArray<NSURL>;

	copyItemAtPathToPathError(toPath: string, error: string): boolean;

	copyItemAtURLToURLError(toURL: NSURL, error: NSURL): boolean;

	createDirectoryAtPathWithIntermediateDirectoriesAttributesError(withIntermediateDirectories: string, attributes: boolean, error?: NSDictionary<string, any>): boolean;

	createDirectoryAtURLWithIntermediateDirectoriesAttributesError(withIntermediateDirectories: NSURL, attributes: boolean, error?: NSDictionary<string, any>): boolean;

	createFileAtPathContentsAttributes(_: string, contents?: NSData, attributes?: NSDictionary<string, any>): boolean;

	createSymbolicLinkAtPathWithDestinationPathError(withDestinationPath: string, error: string): boolean;

	createSymbolicLinkAtURLWithDestinationURLError(withDestinationURL: NSURL, error: NSURL): boolean;

	destinationOfSymbolicLinkAtPathError(error: string): string;

	displayNameAtPath(_: string): string;

	enumeratorAtPath(_: string): NSDirectoryEnumerator<string>;

	enumeratorAtURLIncludingPropertiesForKeysOptionsErrorHandler(_: NSURL, includingPropertiesForKeys?: NSArray<string>, options: NSDirectoryEnumerationOptions, errorHandler?: (p1: NSURL, p2: NSError) => boolean): NSDirectoryEnumerator<NSURL>;

	evictUbiquitousItemAtURLError(error: NSURL): boolean;

	fileExistsAtPath(_: string): boolean;

	fileExistsAtPathIsDirectory(_: string, isDirectory?: boolean): boolean;

	fileSystemRepresentationWithPath(_: string): string;

	getFileProviderServicesForItemAtURLCompletionHandler(_: NSURL, completionHandler?: (p1: NSDictionary<string, NSFileProviderService>, p2: NSError) => void): void;

	getRelationshipOfDirectoryInDomainToItemAtURLError(ofDirectory: NSURLRelationship, inDomain: NSSearchPathDirectory, toItemAtURL: NSSearchPathDomainMask, error: NSURL): boolean;

	getRelationshipOfDirectoryAtURLToItemAtURLError(ofDirectoryAtURL: NSURLRelationship, toItemAtURL: NSURL, error: NSURL): boolean;

	homeDirectoryForUser(_: string): NSURL;

	isDeletableFileAtPath(_: string): boolean;

	isExecutableFileAtPath(_: string): boolean;

	isReadableFileAtPath(_: string): boolean;

	isUbiquitousItemAtURL(_: NSURL): boolean;

	isWritableFileAtPath(_: string): boolean;

	linkItemAtPathToPathError(toPath: string, error: string): boolean;

	linkItemAtURLToURLError(toURL: NSURL, error: NSURL): boolean;

	mountedVolumeURLsIncludingResourceValuesForKeysOptions(includingResourceValuesForKeys?: NSArray<string>, options: NSVolumeEnumerationOptions): NSArray<NSURL>;

	moveItemAtPathToPathError(toPath: string, error: string): boolean;

	moveItemAtURLToURLError(toURL: NSURL, error: NSURL): boolean;

	removeItemAtPathError(error: string): boolean;

	removeItemAtURLError(error: NSURL): boolean;

	replaceItemAtURLWithItemAtURLBackupItemNameOptionsResultingItemURLError(withItemAtURL: NSURL, backupItemName: NSURL, options?: string, resultingItemURL: NSFileManagerItemReplacementOptions, error?: NSURL): boolean;

	setAttributesOfItemAtPathError(ofItemAtPath: NSDictionary<string, any>, error: string): boolean;

	setUbiquitousItemAtURLDestinationURLError(itemAtURL: boolean, destinationURL: NSURL, error: NSURL): boolean;

	startDownloadingUbiquitousItemAtURLError(error: NSURL): boolean;

	stringWithFileSystemRepresentationLength(_: string, length: number): string;

	subpathsAtPath(_: string): NSArray<string>;

	subpathsOfDirectoryAtPathError(error: string): NSArray<string>;

	trashItemAtURLResultingItemURLError(resultingItemURL: NSURL, error?: NSURL): boolean;

	unmountVolumeAtURLOptionsCompletionHandler(_: NSURL, options: NSFileManagerUnmountOptions, completionHandler?: (p1: NSError) => void): void;
}

interface NSFileManagerDelegate extends NSObjectProtocol {

	fileManagerShouldCopyItemAtPathToPath?(_: NSFileManager, shouldCopyItemAtPath: string, toPath: string): boolean;

	fileManagerShouldCopyItemAtURLToURL?(_: NSFileManager, shouldCopyItemAtURL: NSURL, toURL: NSURL): boolean;

	fileManagerShouldLinkItemAtPathToPath?(_: NSFileManager, shouldLinkItemAtPath: string, toPath: string): boolean;

	fileManagerShouldLinkItemAtURLToURL?(_: NSFileManager, shouldLinkItemAtURL: NSURL, toURL: NSURL): boolean;

	fileManagerShouldMoveItemAtPathToPath?(_: NSFileManager, shouldMoveItemAtPath: string, toPath: string): boolean;

	fileManagerShouldMoveItemAtURLToURL?(_: NSFileManager, shouldMoveItemAtURL: NSURL, toURL: NSURL): boolean;

	fileManagerShouldProceedAfterErrorCopyingItemAtPathToPath?(_: NSFileManager, shouldProceedAfterError: NSError, copyingItemAtPath: string, toPath: string): boolean;

	fileManagerShouldProceedAfterErrorCopyingItemAtURLToURL?(_: NSFileManager, shouldProceedAfterError: NSError, copyingItemAtURL: NSURL, toURL: NSURL): boolean;

	fileManagerShouldProceedAfterErrorLinkingItemAtPathToPath?(_: NSFileManager, shouldProceedAfterError: NSError, linkingItemAtPath: string, toPath: string): boolean;

	fileManagerShouldProceedAfterErrorLinkingItemAtURLToURL?(_: NSFileManager, shouldProceedAfterError: NSError, linkingItemAtURL: NSURL, toURL: NSURL): boolean;

	fileManagerShouldProceedAfterErrorMovingItemAtPathToPath?(_: NSFileManager, shouldProceedAfterError: NSError, movingItemAtPath: string, toPath: string): boolean;

	fileManagerShouldProceedAfterErrorMovingItemAtURLToURL?(_: NSFileManager, shouldProceedAfterError: NSError, movingItemAtURL: NSURL, toURL: NSURL): boolean;

	fileManagerShouldProceedAfterErrorRemovingItemAtPath?(_: NSFileManager, shouldProceedAfterError: NSError, removingItemAtPath: string): boolean;

	fileManagerShouldProceedAfterErrorRemovingItemAtURL?(_: NSFileManager, shouldProceedAfterError: NSError, removingItemAtURL: NSURL): boolean;

	fileManagerShouldRemoveItemAtPath?(_: NSFileManager, shouldRemoveItemAtPath: string): boolean;

	fileManagerShouldRemoveItemAtURL?(_: NSFileManager, shouldRemoveItemAtURL: NSURL): boolean;
}
declare var NSFileManagerDelegate: {

	prototype: NSFileManagerDelegate;
};

enum NSFileManagerItemReplacementOptions {

	UsingNewMetadataOnly = 1,

	WithoutDeletingBackupItem = 2
}

globalThis.NSFileManagerItemReplacementOptions = NSFileManagerItemReplacementOptions;

declare const NSFileManagerUnmountBusyError: number;

declare var NSFileManagerUnmountDissentingProcessIdentifierErrorKey: string;

enum NSFileManagerUnmountOptions {

	AllPartitionsAndEjectDisk = 1,

	WithoutUI = 2
}

globalThis.NSFileManagerUnmountOptions = NSFileManagerUnmountOptions;

declare const NSFileManagerUnmountUnknownError: number;

declare var NSFileModificationDate: string;

declare const NSFileNoSuchFileError: number;

declare var NSFileOwnerAccountID: string;

declare var NSFileOwnerAccountName: string;

declare var NSFilePathErrorKey: string;

declare var NSFilePosixPermissions: string;

interface NSFilePresenter extends NSObjectProtocol {

	observedPresentedItemUbiquityAttributes?: NSSet<string>;

	presentedItemOperationQueue: NSOperationQueue;

	presentedItemURL: NSURL;

	primaryPresentedItemURL?: NSURL;

	accommodatePresentedItemDeletionWithCompletionHandler?(_?: (p1: NSError) => void): void;

	accommodatePresentedSubitemDeletionAtURLCompletionHandler?(_: NSURL, completionHandler?: (p1: NSError) => void): void;

	presentedItemDidChange?(): void;

	presentedItemDidChangeUbiquityAttributes?(_: NSSet<string>): void;

	presentedItemDidGainVersion?(_: NSFileVersion): void;

	presentedItemDidLoseVersion?(_: NSFileVersion): void;

	presentedItemDidMoveToURL?(_: NSURL): void;

	presentedItemDidResolveConflictVersion?(_: NSFileVersion): void;

	presentedSubitemAtURLDidGainVersion?(_: NSURL, didGainVersion: NSFileVersion): void;

	presentedSubitemAtURLDidLoseVersion?(_: NSURL, didLoseVersion: NSFileVersion): void;

	presentedSubitemAtURLDidMoveToURL?(_: NSURL, didMoveToURL: NSURL): void;

	presentedSubitemAtURLDidResolveConflictVersion?(_: NSURL, didResolveConflictVersion: NSFileVersion): void;

	presentedSubitemDidAppearAtURL?(_: NSURL): void;

	presentedSubitemDidChangeAtURL?(_: NSURL): void;

	relinquishPresentedItemToReader?(_?: (p1: () => void) => void): void;

	relinquishPresentedItemToWriter?(_?: (p1: () => void) => void): void;

	savePresentedItemChangesWithCompletionHandler?(_?: (p1: NSError) => void): void;
}
declare var NSFilePresenter: {

	prototype: NSFilePresenter;
};

declare class NSFileProviderService extends NSObject {

	readonly name: string;

	getFileProviderConnectionWithCompletionHandler(_?: (p1: NSXPCConnection, p2: NSError) => void): void;
}

declare const NSFileReadCorruptFileError: number;

declare const NSFileReadInapplicableStringEncodingError: number;

declare const NSFileReadInvalidFileNameError: number;

declare const NSFileReadNoPermissionError: number;

declare const NSFileReadNoSuchFileError: number;

declare const NSFileReadTooLargeError: number;

declare const NSFileReadUnknownError: number;

declare const NSFileReadUnknownStringEncodingError: number;

declare const NSFileReadUnsupportedSchemeError: number;

declare var NSFileReferenceCount: string;

declare class NSFileSecurity extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var NSFileSize: string;

declare var NSFileSystemFileNumber: string;

declare var NSFileSystemFreeNodes: string;

declare var NSFileSystemFreeSize: string;

declare var NSFileSystemNodes: string;

declare var NSFileSystemNumber: string;

declare var NSFileSystemSize: string;

declare var NSFileType: string;

declare var NSFileTypeBlockSpecial: string;

declare var NSFileTypeCharacterSpecial: string;

declare var NSFileTypeDirectory: string;

declare function NSFileTypeForHFSTypeCode(hfsFileTypeCode: number): string;

declare var NSFileTypeRegular: string;

declare var NSFileTypeSocket: string;

declare var NSFileTypeSymbolicLink: string;

declare var NSFileTypeUnknown: string;

declare class NSFileVersion extends NSObject {

	static addVersionOfItemAtURLWithContentsOfURLOptionsError(withContentsOfURL: NSURL, options: NSURL, error: NSFileVersionAddingOptions): NSFileVersion;

	static currentVersionOfItemAtURL(_: NSURL): NSFileVersion;

	static getNonlocalVersionsOfItemAtURLCompletionHandler(_: NSURL, completionHandler?: (p1: NSArray<NSFileVersion>, p2: NSError) => void): void;

	static otherVersionsOfItemAtURL(_: NSURL): NSArray<NSFileVersion>;

	static removeOtherVersionsOfItemAtURLError(error: NSURL): boolean;

	static temporaryDirectoryURLForNewVersionOfItemAtURL(_: NSURL): NSURL;

	static unresolvedConflictVersionsOfItemAtURL(_: NSURL): NSArray<NSFileVersion>;

	static versionOfItemAtURLForPersistentIdentifier(itemAt: NSURL, forPersistentIdentifier: any): NSFileVersion;

	readonly URL: NSURL;

	readonly isConflict: boolean;

	setDiscardable(_: boolean)

	isDiscardable: boolean;

	readonly hasLocalContents: boolean;

	readonly hasThumbnail: boolean;

	readonly localizedName: string;

	readonly localizedNameOfSavingComputer: string;

	readonly modificationDate: Date;

	readonly originatorNameComponents: NSPersonNameComponents;

	readonly persistentIdentifier: NSCoding;

	setResolved(_: boolean)

	isResolved: boolean;

	removeAndReturnError(): boolean;

	replaceItemAtURLOptionsError(options: NSURL, error: NSFileVersionReplacingOptions): NSURL;
}

enum NSFileVersionAddingOptions {

	ByMoving = 1
}

globalThis.NSFileVersionAddingOptions = NSFileVersionAddingOptions;

enum NSFileVersionReplacingOptions {

	ByMoving = 1
}

globalThis.NSFileVersionReplacingOptions = NSFileVersionReplacingOptions;

declare class NSFileWrapper extends NSObject implements NSSecureCoding {

	readonly isDirectory: boolean;

	setFileAttributes(_: NSDictionary<string, any>)

	fileAttributes: NSDictionary<string, any>;

	readonly fileWrappers: NSDictionary<string, NSFileWrapper>;

	setFilename(_: string)

	filename: string;

	setIcon(_: NSImage)

	icon: NSImage;

	setPreferredFilename(_: string)

	preferredFilename: string;

	readonly isRegularFile: boolean;

	readonly regularFileContents: NSData;

	readonly serializedRepresentation: NSData;

	readonly isSymbolicLink: boolean;

	readonly symbolicLinkDestinationURL: NSURL;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(directoryWithFileWrappers: NSDictionary<string, NSFileWrapper>);

	static create(regularFileWithContents: NSData);

	static create(symbolicLinkWithDestinationURL: NSURL);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(serializedRepresentation: NSData);

	static create(URL: NSURL, options: NSFileWrapperReadingOptions);

	addFileWrapper(_: NSFileWrapper): string;

	addRegularFileWithContentsPreferredFilename(_: NSData, preferredFilename: string): string;

	encodeWithCoder(_: NSCoder): void;

	keyForFileWrapper(_: NSFileWrapper): string;

	matchesContentsOfURL(_: NSURL): boolean;

	readFromURLOptionsError(options: NSURL, error: NSFileWrapperReadingOptions): boolean;

	removeFileWrapper(_: NSFileWrapper): void;

	writeToURLOptionsOriginalContentsURLError(options: NSURL, originalContentsURL: NSFileWrapperWritingOptions, error?: NSURL): boolean;
}

enum NSFileWrapperReadingOptions {

	Immediate = 1,

	WithoutMapping = 2
}

globalThis.NSFileWrapperReadingOptions = NSFileWrapperReadingOptions;

enum NSFileWrapperWritingOptions {

	Atomic = 1,

	WithNameUpdating = 2
}

globalThis.NSFileWrapperWritingOptions = NSFileWrapperWritingOptions;

declare const NSFileWriteFileExistsError: number;

declare const NSFileWriteInapplicableStringEncodingError: number;

declare const NSFileWriteInvalidFileNameError: number;

declare const NSFileWriteNoPermissionError: number;

declare const NSFileWriteOutOfSpaceError: number;

declare const NSFileWriteUnknownError: number;

declare const NSFileWriteUnsupportedSchemeError: number;

declare const NSFileWriteVolumeReadOnlyError: number;

declare class NSFormatter extends NSObject implements NSCoding, NSCopying {

	static create(coder: NSCoder); // inherited from NSCoding

	attributedStringForObjectValueWithDefaultAttributes(_: any, withDefaultAttributes?: NSDictionary<string, any>): NSAttributedString;

	copyWithZone(_?: any): any;

	editingStringForObjectValue(_: any): string;

	encodeWithCoder(_: NSCoder): void;

	getObjectValueForStringErrorDescription(_?: any, forString: string, errorDescription?: string): boolean;

	isPartialStringValidNewEditingStringErrorDescription(_: string, newEditingString?: string, errorDescription?: string): boolean;

	isPartialStringValidProposedSelectedRangeOriginalStringOriginalSelectedRangeErrorDescription(_: string, proposedSelectedRange?: NSRange, originalString: string, originalSelectedRange: NSRange, errorDescription?: string): boolean;

	stringForObjectValue(_?: any): string;
}

enum NSFormattingContext {

	Unknown = 0,

	Dynamic = 1,

	Standalone = 2,

	ListItem = 3,

	BeginningOfSentence = 4,

	MiddleOfSentence = 5
}

globalThis.NSFormattingContext = NSFormattingContext;

declare const NSFormattingError: number;

declare const NSFormattingErrorMaximum: number;

declare const NSFormattingErrorMinimum: number;

enum NSFormattingUnitStyle {

	Short = 1,

	Medium = 2,

	Long = 3
}

globalThis.NSFormattingUnitStyle = NSFormattingUnitStyle;

declare var NSFoundationVersionNumber: number;

declare function NSFrameAddress(frame: number): any;

declare function NSFreeHashTable(table: NSHashTable<any>): void;

declare function NSFreeMapTable(table: NSMapTable<any, any>): void;

declare function NSFullUserName(): string;

declare var NSGenericException: string;

declare class NSGetCommand extends NSScriptCommand {
}

declare function NSGetSizeAndAlignment(typePtr: string | any, sizep: number, alignp: number): string;

declare function NSGetUncaughtExceptionHandler(): (p1: NSException) => void;

declare var NSGlobalDomain: string;

declare var NSGrammarCorrections: string;

declare var NSGrammarRange: string;

declare var NSGrammarUserDescription: string;

declare function NSHFSTypeCodeFromFileType(fileTypeString: string): number;

declare function NSHFSTypeOfFile(fullFilePath: string): string;

declare const NSHPUXOperatingSystem: number;

declare class NSHTTPCookie extends NSObject {

	static cookieWithProperties(_: NSDictionary<string, any>): NSHTTPCookie;

	static cookiesWithResponseHeaderFieldsForURL(_: NSDictionary<string, string>, forURL: NSURL): NSArray<NSHTTPCookie>;

	static requestHeaderFieldsWithCookies(_: NSArray<NSHTTPCookie>): NSDictionary<string, string>;

	readonly isHTTPOnly: boolean;

	readonly comment: string;

	readonly commentURL: NSURL;

	readonly domain: string;

	readonly expiresDate: Date;

	readonly name: string;

	readonly path: string;

	readonly portList: NSArray<number>;

	readonly properties: NSDictionary<string, any>;

	readonly sameSitePolicy: string;

	readonly isSecure: boolean;

	readonly isSessionOnly: boolean;

	readonly value: string;

	readonly version: number;

	static create(properties: NSDictionary<string, any>);
}

enum NSHTTPCookieAcceptPolicy {

	Always = 0,

	Never = 1,

	OnlyFromMainDocumentDomain = 2
}

globalThis.NSHTTPCookieAcceptPolicy = NSHTTPCookieAcceptPolicy;

declare var NSHTTPCookieComment: string;

declare var NSHTTPCookieCommentURL: string;

declare var NSHTTPCookieDiscard: string;

declare var NSHTTPCookieDomain: string;

declare var NSHTTPCookieExpires: string;

declare var NSHTTPCookieManagerAcceptPolicyChangedNotification: string;

declare var NSHTTPCookieManagerCookiesChangedNotification: string;

declare var NSHTTPCookieMaximumAge: string;

declare var NSHTTPCookieName: string;

declare var NSHTTPCookieOriginURL: string;

declare var NSHTTPCookiePath: string;

declare var NSHTTPCookiePort: string;

declare var NSHTTPCookieSameSiteLax: string;

declare var NSHTTPCookieSameSitePolicy: string;

declare var NSHTTPCookieSameSiteStrict: string;

declare var NSHTTPCookieSecure: string;

declare class NSHTTPCookieStorage extends NSObject {

	static sharedCookieStorageForGroupContainerIdentifier(_: string): NSHTTPCookieStorage;

	setCookieAcceptPolicy(_: NSHTTPCookieAcceptPolicy)

	cookieAcceptPolicy: NSHTTPCookieAcceptPolicy;

	readonly cookies: NSArray<NSHTTPCookie>;

	static sharedHTTPCookieStorage(): NSHTTPCookieStorage;

	cookiesForURL(_: NSURL): NSArray<NSHTTPCookie>;

	deleteCookie(_: NSHTTPCookie): void;

	getCookiesForTaskCompletionHandler(_: NSURLSessionTask, completionHandler?: (p1: NSArray<NSHTTPCookie>) => void): void;

	removeCookiesSinceDate(_: Date): void;

	setCookie(_: NSHTTPCookie): void;

	setCookiesForURLMainDocumentURL(_: NSArray<NSHTTPCookie>, forURL?: NSURL, mainDocumentURL?: NSURL): void;

	sortedCookiesUsingDescriptors(_: NSArray<NSSortDescriptor>): NSArray<NSHTTPCookie>;

	storeCookiesForTask(_: NSArray<NSHTTPCookie>, forTask: NSURLSessionTask): void;
}

declare var NSHTTPCookieValue: string;

declare var NSHTTPCookieVersion: string;

declare class NSHTTPURLResponse extends NSURLResponse {

	static localizedStringForStatusCode(_: number): string;

	readonly allHeaderFields: NSDictionary<any, any>;

	readonly statusCode: number;

	static create(URL: NSURL, statusCode: number, HTTPVersion: string, headerFields: NSDictionary<string, string>);

	valueForHTTPHeaderField(_: string): string;
}

interface NSHashEnumerator {
	_pi: number;
	_si: number;
	_bs: any;
}
declare var NSHashEnumerator: NSHashEnumerator;

declare function NSHashGet(table: NSHashTable<any>, pointer: any): any;

declare function NSHashInsert(table: NSHashTable<any>, pointer: any): void;

declare function NSHashInsertIfAbsent(table: NSHashTable<any>, pointer: any): any;

declare function NSHashInsertKnownAbsent(table: NSHashTable<any>, pointer: any): void;

declare function NSHashRemove(table: NSHashTable<any>, pointer: any): void;

declare class NSHashTable<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSSecureCoding {

	static hashTableWithOptions<ObjectType>(_: NSPointerFunctionsOptions): NSHashTable<ObjectType>;

	static weakObjectsHashTable<ObjectType>(): NSHashTable<ObjectType>;

	readonly allObjects: NSArray<ObjectType>;

	readonly anyObject: ObjectType;

	readonly count: number;

	readonly pointerFunctions: NSPointerFunctions;

	readonly setRepresentation: NSSet<ObjectType>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(options: NSPointerFunctionsOptions, capacity: number);

	static create(pointerFunctions: NSPointerFunctions, capacity: number);

	addObject(_?: ObjectType): void;

	containsObject(_?: ObjectType): boolean;

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	encodeWithCoder(_: NSCoder): void;

	intersectHashTable(_: NSHashTable<ObjectType>): void;

	intersectsHashTable(_: NSHashTable<ObjectType>): boolean;

	isEqualToHashTable(_: NSHashTable<ObjectType>): boolean;

	isSubsetOfHashTable(_: NSHashTable<ObjectType>): boolean;

	member(_?: ObjectType): ObjectType;

	minusHashTable(_: NSHashTable<ObjectType>): void;

	objectEnumerator(): NSEnumerator<ObjectType>;

	removeAllObjects(): void;

	removeObject(_?: ObjectType): void;

	unionHashTable(_: NSHashTable<ObjectType>): void;
}

interface NSHashTableCallBacks {
	hash: (p1: NSHashTable<any>, p2: any) => number;
	isEqual: (p1: NSHashTable<any>, p2: any, p3: any) => boolean;
	retain: (p1: NSHashTable<any>, p2: any) => void;
	release: (p1: NSHashTable<any>, p2: any) => void;
	describe: (p1: NSHashTable<any>, p2: any) => string;
}
declare var NSHashTableCallBacks: NSHashTableCallBacks;

declare var NSHashTableCopyIn: NSPointerFunctionsOptions;

declare var NSHashTableObjectPointerPersonality: NSPointerFunctionsOptions;

declare var NSHashTableStrongMemory: NSPointerFunctionsOptions;

declare var NSHashTableWeakMemory: NSPointerFunctionsOptions;

declare var NSHelpAnchorErrorKey: string;

declare function NSHomeDirectory(): string;

declare function NSHomeDirectoryForUser(userName: string): string;

declare class NSHost extends NSObject {

	static currentHost(): NSHost;

	static hostWithAddress(_: string): NSHost;

	static hostWithName(_?: string): NSHost;

	readonly address: string;

	readonly addresses: NSArray<string>;

	readonly localizedName: string;

	readonly name: string;

	readonly names: NSArray<string>;

	isEqualToHost(_: NSHost): boolean;
}

declare const NSISO2022JPStringEncoding: number;

enum NSISO8601DateFormatOptions {

	WithYear = 1,

	WithMonth = 2,

	WithWeekOfYear = 4,

	WithDay = 16,

	WithTime = 32,

	WithTimeZone = 64,

	WithSpaceBetweenDateAndTime = 128,

	WithDashSeparatorInDate = 256,

	WithColonSeparatorInTime = 512,

	WithColonSeparatorInTimeZone = 1024,

	WithFractionalSeconds = 2048,

	WithFullDate = 275,

	WithFullTime = 1632,

	WithInternetDateTime = 1907
}

globalThis.NSISO8601DateFormatOptions = NSISO8601DateFormatOptions;

declare class NSISO8601DateFormatter extends NSFormatter implements NSSecureCoding {

	static stringFromDateTimeZoneFormatOptions(_: Date, timeZone: NSTimeZone, formatOptions: NSISO8601DateFormatOptions): string;

	setFormatOptions(_: NSISO8601DateFormatOptions)

	formatOptions: NSISO8601DateFormatOptions;

	setTimeZone(_: NSTimeZone)

	timeZone: NSTimeZone;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	dateFromString(_: string): Date;

	encodeWithCoder(_: NSCoder): void;

	stringFromDate(_: Date): string;
}

declare const NSISOLatin1StringEncoding: number;

declare const NSISOLatin2StringEncoding: number;

declare var NSInconsistentArchiveException: string;

declare function NSIncrementExtraRefCount(object_: any): void;

declare class NSIndexPath extends NSObject implements NSCopying, NSSecureCoding {

	static indexPathForItemInSection(_: number, inSection: number): NSIndexPath;

	static indexPathWithIndex(_: number): NSIndexPath;

	static indexPathWithIndexesLength(_?: number, length: number): NSIndexPath;

	readonly item: number;

	readonly length: number;

	readonly section: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(index: number);

	static create(indexes: number, length: number);

	compare(_: NSIndexPath): NSComparisonResult;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	getIndexes(_: number): void;

	getIndexesRange(_: number, range: NSRange): void;

	indexAtPosition(_: number): number;

	indexPathByAddingIndex(_: number): NSIndexPath;

	indexPathByRemovingLastIndex(): NSIndexPath;
}

declare class NSIndexSet extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static indexSet(): NSIndexSet;

	static indexSetWithIndex(_: number): NSIndexSet;

	static indexSetWithIndexesInRange(_: NSRange): NSIndexSet;

	readonly count: number;

	readonly firstIndex: number;

	readonly lastIndex: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(index: number);

	static create(indexSet: NSIndexSet);

	static create(indexesInRange: NSRange);

	containsIndex(_: number): boolean;

	containsIndexes(_: NSIndexSet): boolean;

	containsIndexesInRange(_: NSRange): boolean;

	copyWithZone(_?: any): any;

	countOfIndexesInRange(_: NSRange): number;

	encodeWithCoder(_: NSCoder): void;

	enumerateIndexesInRangeOptionsUsingBlock(_: NSRange, options: NSEnumerationOptions, usingBlock: (p1: number, p2: boolean) => void): void;

	enumerateIndexesUsingBlock(_: (p1: number, p2: boolean) => void): void;

	enumerateIndexesWithOptionsUsingBlock(_: NSEnumerationOptions, usingBlock: (p1: number, p2: boolean) => void): void;

	enumerateRangesInRangeOptionsUsingBlock(_: NSRange, options: NSEnumerationOptions, usingBlock: (p1: NSRange, p2: boolean) => void): void;

	enumerateRangesUsingBlock(_: (p1: NSRange, p2: boolean) => void): void;

	enumerateRangesWithOptionsUsingBlock(_: NSEnumerationOptions, usingBlock: (p1: NSRange, p2: boolean) => void): void;

	getIndexesMaxCountInIndexRange(_: number, maxCount: number, inIndexRange?: NSRange): number;

	indexGreaterThanIndex(_: number): number;

	indexGreaterThanOrEqualToIndex(_: number): number;

	indexInRangeOptionsPassingTest(_: NSRange, options: NSEnumerationOptions, passingTest: (p1: number, p2: boolean) => boolean): number;

	indexLessThanIndex(_: number): number;

	indexLessThanOrEqualToIndex(_: number): number;

	indexPassingTest(_: (p1: number, p2: boolean) => boolean): number;

	indexWithOptionsPassingTest(_: NSEnumerationOptions, passingTest: (p1: number, p2: boolean) => boolean): number;

	indexesInRangeOptionsPassingTest(_: NSRange, options: NSEnumerationOptions, passingTest: (p1: number, p2: boolean) => boolean): NSIndexSet;

	indexesPassingTest(_: (p1: number, p2: boolean) => boolean): NSIndexSet;

	indexesWithOptionsPassingTest(_: NSEnumerationOptions, passingTest: (p1: number, p2: boolean) => boolean): NSIndexSet;

	intersectsIndexesInRange(_: NSRange): boolean;

	isEqualToIndexSet(_: NSIndexSet): boolean;

	mutableCopyWithZone(_?: any): any;
}

declare class NSIndexSpecifier extends NSScriptObjectSpecifier {

	setIndex(_: number)

	index: number;

	static create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier, key: string, index: number);
}

declare class NSInputStream extends NSStream {

	static inputStreamWithData(_: NSData): NSInputStream;

	static inputStreamWithFileAtPath(_: string): NSInputStream;

	static inputStreamWithURL(_: NSURL): NSInputStream;

	readonly hasBytesAvailable: boolean;

	static create(data: NSData);

	static create(fileAtPath: string);

	static create(URL: NSURL);

	getBufferLength(_?: string, length: number): boolean;

	readMaxLength(_: string, maxLength: number): number;
}

enum NSInsertionPosition {

	PositionAfter = 0,

	PositionBefore = 1,

	PositionBeginning = 2,

	PositionEnd = 3,

	PositionReplace = 4
}

globalThis.NSInsertionPosition = NSInsertionPosition;

declare function NSInsetRect(aRect: CGRect, dX: number, dY: number): CGRect;

declare var NSIntegerHashCallBacks: NSHashTableCallBacks;

declare var NSIntegerMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSIntegerMapValueCallBacks: NSMapTableValueCallBacks;

declare function NSIntegralRect(aRect: CGRect): CGRect;

declare function NSIntegralRectWithOptions(aRect: CGRect, opts: NSAlignmentOptions): CGRect;

declare var NSInternalInconsistencyException: string;

declare const NSInternalScriptError: number;

declare const NSInternalSpecifierError: number;

declare function NSIntersectionRange(range1: NSRange, range2: NSRange): NSRange;

declare function NSIntersectionRect(aRect: CGRect, bRect: CGRect): CGRect;

declare function NSIntersectsRect(aRect: CGRect, bRect: CGRect): boolean;

declare var NSInvalidArchiveOperationException: string;

declare var NSInvalidArgumentException: string;

declare const NSInvalidIndexSpecifierError: number;

declare var NSInvalidReceivePortException: string;

declare var NSInvalidSendPortException: string;

declare var NSInvalidUnarchiveOperationException: string;

declare var NSInvocationOperationCancelledException: string;

declare var NSInvocationOperationVoidResultException: string;

declare function NSIsEmptyRect(aRect: CGRect): boolean;

declare function NSIsFreedObject(anObject: any): boolean;

declare var NSIsNilTransformerName: string;

declare var NSIsNotNilTransformerName: string;

declare class NSItemProvider extends NSObject implements NSCopying {

	readonly containerFrame: CGRect;

	readonly preferredPresentationSize: CGSize;

	setPreviewImageHandler(_: (p1: (p1: NSSecureCoding, p2: NSError) => void, p2: typeof NSObject, p3: NSDictionary<any, any>) => void)

	previewImageHandler: (p1: (p1: NSSecureCoding, p2: NSError) => void, p2: typeof NSObject, p3: NSDictionary<any, any>) => void;

	readonly registeredTypeIdentifiers: NSArray<string>;

	readonly sourceFrame: CGRect;

	setSuggestedName(_: string)

	suggestedName: string;

	static create(contentsOfURL: NSURL);

	static create(item: NSSecureCoding, typeIdentifier: string);

	static create(object: NSItemProviderWriting);

	canLoadObjectOfClass(_: typeof NSObject): boolean;

	copyWithZone(_?: any): any;

	hasItemConformingToTypeIdentifier(_: string): boolean;

	hasRepresentationConformingToTypeIdentifierFileOptions(_: string, fileOptions: NSItemProviderFileOptions): boolean;

	loadDataRepresentationForTypeIdentifierCompletionHandler(_: string, completionHandler?: (p1: NSData, p2: NSError) => void): NSProgress;

	loadFileRepresentationForTypeIdentifierCompletionHandler(_: string, completionHandler?: (p1: NSURL, p2: NSError) => void): NSProgress;

	loadInPlaceFileRepresentationForTypeIdentifierCompletionHandler(_: string, completionHandler?: (p1: NSURL, p2: boolean, p3: NSError) => void): NSProgress;

	loadItemForTypeIdentifierOptionsCompletionHandler(_: string, options?: NSDictionary<any, any>, completionHandler?: (p1: NSSecureCoding, p2: NSError) => void): void;

	loadObjectOfClassCompletionHandler(_: typeof NSObject, completionHandler?: (p1: NSItemProviderReading, p2: NSError) => void): NSProgress;

	loadPreviewImageWithOptionsCompletionHandler(_: NSDictionary<any, any>, completionHandler: (p1: NSSecureCoding, p2: NSError) => void): void;

	registerCloudKitShareContainer(_: CKShare, container: CKContainer): void;

	registerCloudKitShareWithPreparationHandler(_?: (p1: (p1: CKShare, p2: CKContainer, p3: NSError) => void) => void): void;

	registerDataRepresentationForTypeIdentifierVisibilityLoadHandler(_: string, visibility: NSItemProviderRepresentationVisibility, loadHandler?: (p1: (p1: NSData, p2: NSError) => void) => NSProgress): void;

	registerFileRepresentationForTypeIdentifierFileOptionsVisibilityLoadHandler(_: string, fileOptions: NSItemProviderFileOptions, visibility: NSItemProviderRepresentationVisibility, loadHandler?: (p1: (p1: NSURL, p2: boolean, p3: NSError) => void) => NSProgress): void;

	registerItemForTypeIdentifierLoadHandler(_: string, loadHandler: (p1: (p1: NSSecureCoding, p2: NSError) => void, p2: typeof NSObject, p3: NSDictionary<any, any>) => void): void;

	registerObjectVisibility(_: NSItemProviderWriting, visibility: NSItemProviderRepresentationVisibility): void;

	registerObjectOfClassVisibilityLoadHandler(_: typeof NSObject, visibility: NSItemProviderRepresentationVisibility, loadHandler?: (p1: (p1: NSItemProviderWriting, p2: NSError) => void) => NSProgress): void;

	registeredTypeIdentifiersWithFileOptions(_: NSItemProviderFileOptions): NSArray<string>;
}

enum NSItemProviderErrorCode {

	UnknownError = -1,

	ItemUnavailableError = -1000,

	UnexpectedValueClassError = -1100,

	UnavailableCoercionError = -1200
}

globalThis.NSItemProviderErrorCode = NSItemProviderErrorCode;

declare var NSItemProviderErrorDomain: string;

enum NSItemProviderFileOptions {

	OpenInPlace = 1
}

globalThis.NSItemProviderFileOptions = NSItemProviderFileOptions;

declare var NSItemProviderPreferredImageSizeKey: string;

interface NSItemProviderReading extends NSObjectProtocol {
}
declare var NSItemProviderReading: {

	prototype: NSItemProviderReading;

	objectWithItemProviderDataTypeIdentifierError(typeIdentifier: NSData, error: string): NSItemProviderReading;
};

enum NSItemProviderRepresentationVisibility {

	All = 0,

	Team = 1,

	Group = 2,

	OwnProcess = 3
}

globalThis.NSItemProviderRepresentationVisibility = NSItemProviderRepresentationVisibility;

interface NSItemProviderWriting extends NSObjectProtocol {

	writableTypeIdentifiersForItemProvider?: NSArray<string>;

	itemProviderVisibilityForRepresentationWithTypeIdentifier?(_: string): NSItemProviderRepresentationVisibility;

	loadDataWithTypeIdentifierForItemProviderCompletionHandler(_: string, forItemProviderCompletionHandler?: (p1: NSData, p2: NSError) => void): NSProgress;
}
declare var NSItemProviderWriting: {

	prototype: NSItemProviderWriting;

	itemProviderVisibilityForRepresentationWithTypeIdentifier?(_: string): NSItemProviderRepresentationVisibility;
};

enum NSJSONReadingOptions {

	MutableContainers = 1,

	MutableLeaves = 2,

	FragmentsAllowed = 4,

	AllowFragments = 4
}

globalThis.NSJSONReadingOptions = NSJSONReadingOptions;

declare class NSJSONSerialization extends NSObject {

	static JSONObjectWithDataOptionsError(options: NSData, error: NSJSONReadingOptions): any;

	static JSONObjectWithStreamOptionsError(options: NSInputStream, error: NSJSONReadingOptions): any;

	static dataWithJSONObjectOptionsError(options: any, error: NSJSONWritingOptions): NSData;

	static isValidJSONObject(_: any): boolean;

	static writeJSONObjectToStreamOptionsError(toStream: any, options: NSOutputStream, error: NSJSONWritingOptions): number;
}

enum NSJSONWritingOptions {

	PrettyPrinted = 1,

	SortedKeys = 2,

	FragmentsAllowed = 4,

	WithoutEscapingSlashes = 8
}

globalThis.NSJSONWritingOptions = NSJSONWritingOptions;

declare const NSJapaneseEUCStringEncoding: number;

declare var NSKeepAllocationStatistics: boolean;

declare const NSKeySpecifierEvaluationScriptError: number;

enum NSKeyValueChange {

	Setting = 1,

	Insertion = 2,

	Removal = 3,

	Replacement = 4
}

globalThis.NSKeyValueChange = NSKeyValueChange;

declare var NSKeyValueChangeIndexesKey: string;

declare var NSKeyValueChangeKindKey: string;

declare var NSKeyValueChangeNewKey: string;

declare var NSKeyValueChangeNotificationIsPriorKey: string;

declare var NSKeyValueChangeOldKey: string;

enum NSKeyValueObservingOptions {

	New = 1,

	Old = 2,

	Initial = 4,

	Prior = 8
}

globalThis.NSKeyValueObservingOptions = NSKeyValueObservingOptions;

enum NSKeyValueSetMutationKind {

	UnionSetMutation = 1,

	MinusSetMutation = 2,

	IntersectSetMutation = 3,

	SetSetMutation = 4
}

globalThis.NSKeyValueSetMutationKind = NSKeyValueSetMutationKind;

declare const NSKeyValueValidationError: number;

declare var NSKeyedArchiveRootObjectKey: string;

declare class NSKeyedArchiver extends NSCoder {

	static archivedDataWithRootObjectRequiringSecureCodingError(requiringSecureCoding: any, error: boolean): NSData;

	static classNameForClass(_: typeof NSObject): string;

	static setClassNameForClass(_?: string, forClass: typeof NSObject): void;

	setDelegate(_: NSKeyedArchiverDelegate)

	delegate: NSKeyedArchiverDelegate;

	readonly encodedData: NSData;

	setOutputFormat(_: NSPropertyListFormat)

	outputFormat: NSPropertyListFormat;

	setRequiresSecureCoding(_: boolean)

	requiresSecureCoding: boolean;

	static create(requiringSecureCoding: boolean);

	classNameForClass(_: typeof NSObject): string;

	finishEncoding(): void;

	setClassNameForClass(_?: string, forClass: typeof NSObject): void;
}

interface NSKeyedArchiverDelegate extends NSObjectProtocol {

	archiverDidEncodeObject?(_: NSKeyedArchiver, didEncodeObject?: any): void;

	archiverWillEncodeObject?(_: NSKeyedArchiver, willEncodeObject: any): any;

	archiverWillReplaceObjectWithObject?(_: NSKeyedArchiver, willReplaceObject?: any, withObject?: any): void;

	archiverDidFinish?(_: NSKeyedArchiver): void;

	archiverWillFinish?(_: NSKeyedArchiver): void;
}
declare var NSKeyedArchiverDelegate: {

	prototype: NSKeyedArchiverDelegate;
};

declare class NSKeyedUnarchiver extends NSCoder {

	static classForClassName(_: string): typeof NSObject;

	static setClassForClassName(_?: typeof NSObject, forClassName: string): void;

	static unarchivedObjectOfClassFromDataError(fromData: typeof NSObject, error: NSData): any;

	static unarchivedObjectOfClassesWithFromDataError(fromData: NSSet<typeof NSObject>, error: NSData): any;

	setDecodingFailurePolicy(_: NSDecodingFailurePolicy)

	decodingFailurePolicy: NSDecodingFailurePolicy;

	setDelegate(_: NSKeyedUnarchiverDelegate)

	delegate: NSKeyedUnarchiverDelegate;

	setRequiresSecureCoding(_: boolean)

	requiresSecureCoding: boolean;

	static create(forReadingFromData: NSData);

	classForClassName(_: string): typeof NSObject;

	finishDecoding(): void;

	setClassForClassName(_?: typeof NSObject, forClassName: string): void;
}

interface NSKeyedUnarchiverDelegate extends NSObjectProtocol {

	unarchiverCannotDecodeObjectOfClassNameOriginalClasses?(_: NSKeyedUnarchiver, cannotDecodeObjectOfClassName: string, originalClasses: NSArray<string>): typeof NSObject;

	unarchiverDidDecodeObject?(_: NSKeyedUnarchiver, didDecodeObject?: any): any;

	unarchiverWillReplaceObjectWithObject?(_: NSKeyedUnarchiver, willReplaceObject: any, withObject: any): void;

	unarchiverDidFinish?(_: NSKeyedUnarchiver): void;

	unarchiverWillFinish?(_: NSKeyedUnarchiver): void;
}
declare var NSKeyedUnarchiverDelegate: {

	prototype: NSKeyedUnarchiverDelegate;
};

declare class NSLengthFormatter extends NSFormatter {

	setForPersonHeightUse(_: boolean)

	isForPersonHeightUse: boolean;

	setNumberFormatter(_: NSNumberFormatter)

	numberFormatter: NSNumberFormatter;

	setUnitStyle(_: NSFormattingUnitStyle)

	unitStyle: NSFormattingUnitStyle;

	stringFromMeters(_: number): string;

	stringFromValueUnit(_: number, unit: NSLengthFormatterUnit): string;

	unitStringFromMetersUsedUnit(_: number, usedUnit?: NSLengthFormatterUnit): string;

	unitStringFromValueUnit(_: number, unit: NSLengthFormatterUnit): string;
}

enum NSLengthFormatterUnit {

	Millimeter = 8,

	Centimeter = 9,

	Meter = 11,

	Kilometer = 14,

	Inch = 1281,

	Foot = 1282,

	Yard = 1283,

	Mile = 1284
}

globalThis.NSLengthFormatterUnit = NSLengthFormatterUnit;

declare var NSLinguisticTagAdjective: string;

declare var NSLinguisticTagAdverb: string;

declare var NSLinguisticTagClassifier: string;

declare var NSLinguisticTagCloseParenthesis: string;

declare var NSLinguisticTagCloseQuote: string;

declare var NSLinguisticTagConjunction: string;

declare var NSLinguisticTagDash: string;

declare var NSLinguisticTagDeterminer: string;

declare var NSLinguisticTagIdiom: string;

declare var NSLinguisticTagInterjection: string;

declare var NSLinguisticTagNoun: string;

declare var NSLinguisticTagNumber: string;

declare var NSLinguisticTagOpenParenthesis: string;

declare var NSLinguisticTagOpenQuote: string;

declare var NSLinguisticTagOrganizationName: string;

declare var NSLinguisticTagOther: string;

declare var NSLinguisticTagOtherPunctuation: string;

declare var NSLinguisticTagOtherWhitespace: string;

declare var NSLinguisticTagOtherWord: string;

declare var NSLinguisticTagParagraphBreak: string;

declare var NSLinguisticTagParticle: string;

declare var NSLinguisticTagPersonalName: string;

declare var NSLinguisticTagPlaceName: string;

declare var NSLinguisticTagPreposition: string;

declare var NSLinguisticTagPronoun: string;

declare var NSLinguisticTagPunctuation: string;

declare var NSLinguisticTagSchemeLanguage: string;

declare var NSLinguisticTagSchemeLemma: string;

declare var NSLinguisticTagSchemeLexicalClass: string;

declare var NSLinguisticTagSchemeNameType: string;

declare var NSLinguisticTagSchemeNameTypeOrLexicalClass: string;

declare var NSLinguisticTagSchemeScript: string;

declare var NSLinguisticTagSchemeTokenType: string;

declare var NSLinguisticTagSentenceTerminator: string;

declare var NSLinguisticTagVerb: string;

declare var NSLinguisticTagWhitespace: string;

declare var NSLinguisticTagWord: string;

declare var NSLinguisticTagWordJoiner: string;

declare class NSLinguisticTagger extends NSObject {

	static availableTagSchemesForLanguage(_: string): NSArray<string>;

	static availableTagSchemesForUnitLanguage(_: NSLinguisticTaggerUnit, language: string): NSArray<string>;

	static dominantLanguageForString(_: string): string;

	static enumerateTagsForStringRangeUnitSchemeOptionsOrthographyUsingBlock(_: string, range: NSRange, unit: NSLinguisticTaggerUnit, scheme: string, options: NSLinguisticTaggerOptions, orthography?: NSOrthography, usingBlock?: (p1: string, p2: NSRange, p3: boolean) => void): void;

	static tagForStringAtIndexUnitSchemeOrthographyTokenRange(_: string, atIndex: number, unit: NSLinguisticTaggerUnit, scheme: string, orthography?: NSOrthography, tokenRange?: NSRange): string;

	static tagsForStringRangeUnitSchemeOptionsOrthographyTokenRanges(_: string, range: NSRange, unit: NSLinguisticTaggerUnit, scheme: string, options: NSLinguisticTaggerOptions, orthography?: NSOrthography, tokenRanges?: NSArray<NSValue>): NSArray<string>;

	readonly dominantLanguage: string;

	setString(_: string)

	string: string;

	readonly tagSchemes: NSArray<string>;

	static create(tagSchemes: NSArray<string> | string[], options: number);

	enumerateTagsInRangeSchemeOptionsUsingBlock(_: NSRange, scheme: string, options: NSLinguisticTaggerOptions, usingBlock?: (p1: string, p2: NSRange, p3: NSRange, p4: boolean) => void): void;

	enumerateTagsInRangeUnitSchemeOptionsUsingBlock(_: NSRange, unit: NSLinguisticTaggerUnit, scheme: string, options: NSLinguisticTaggerOptions, usingBlock?: (p1: string, p2: NSRange, p3: boolean) => void): void;

	orthographyAtIndexEffectiveRange(_: number, effectiveRange?: NSRange): NSOrthography;

	possibleTagsAtIndexSchemeTokenRangeSentenceRangeScores(_: number, scheme: string, tokenRange?: NSRange, sentenceRange?: NSRange, scores?: NSArray<NSValue>): NSArray<string>;

	sentenceRangeForRange(_: NSRange): NSRange;

	setOrthographyRange(_?: NSOrthography, range: NSRange): void;

	stringEditedInRangeChangeInLength(_: NSRange, changeInLength: number): void;

	tagAtIndexSchemeTokenRangeSentenceRange(_: number, scheme: string, tokenRange?: NSRange, sentenceRange?: NSRange): string;

	tagAtIndexUnitSchemeTokenRange(_: number, unit: NSLinguisticTaggerUnit, scheme: string, tokenRange?: NSRange): string;

	tagsInRangeSchemeOptionsTokenRanges(_: NSRange, scheme: string, options: NSLinguisticTaggerOptions, tokenRanges?: NSArray<NSValue>): NSArray<string>;

	tagsInRangeUnitSchemeOptionsTokenRanges(_: NSRange, unit: NSLinguisticTaggerUnit, scheme: string, options: NSLinguisticTaggerOptions, tokenRanges?: NSArray<NSValue>): NSArray<string>;

	tokenRangeAtIndexUnit(_: number, unit: NSLinguisticTaggerUnit): NSRange;
}

enum NSLinguisticTaggerOptions {

	OmitWords = 1,

	OmitPunctuation = 2,

	OmitWhitespace = 4,

	OmitOther = 8,

	JoinNames = 16
}

globalThis.NSLinguisticTaggerOptions = NSLinguisticTaggerOptions;

enum NSLinguisticTaggerUnit {

	Word = 0,

	Sentence = 1,

	Paragraph = 2,

	Document = 3
}

globalThis.NSLinguisticTaggerUnit = NSLinguisticTaggerUnit;

declare class NSListFormatter extends NSFormatter {

	static localizedStringByJoiningStrings(_: NSArray<string>): string;

	setItemFormatter(_: NSFormatter)

	itemFormatter: NSFormatter;

	setLocale(_: NSLocale)

	locale: NSLocale;

	stringFromItems(from: NSArray<any>): string;
}

declare var NSLoadedClasses: string;

declare var NSLocalNotificationCenterType: string;

declare class NSLocale extends NSObject implements NSCopying, NSSecureCoding {

	static canonicalLanguageIdentifierFromString(_: string): string;

	static canonicalLocaleIdentifierFromString(_: string): string;

	static characterDirectionForLanguage(_: string): NSLocaleLanguageDirection;

	static componentsFromLocaleIdentifier(_: string): NSDictionary<string, string>;

	static lineDirectionForLanguage(_: string): NSLocaleLanguageDirection;

	static localeIdentifierFromComponents(_: NSDictionary<string, string>): string;

	static localeIdentifierFromWindowsLocaleCode(_: number): string;

	static localeWithLocaleIdentifier(_: string): NSLocale;

	static windowsLocaleCodeFromLocaleIdentifier(_: string): number;

	readonly alternateQuotationBeginDelimiter: string;

	readonly alternateQuotationEndDelimiter: string;

	readonly calendarIdentifier: string;

	readonly collationIdentifier: string;

	readonly collatorIdentifier: string;

	readonly countryCode: string;

	readonly currencyCode: string;

	readonly currencySymbol: string;

	readonly decimalSeparator: string;

	readonly exemplarCharacterSet: NSCharacterSet;

	readonly groupingSeparator: string;

	readonly languageCode: string;

	readonly localeIdentifier: string;

	readonly quotationBeginDelimiter: string;

	readonly quotationEndDelimiter: string;

	readonly scriptCode: string;

	readonly usesMetricSystem: boolean;

	readonly variantCode: string;

	static ISOCountryCodes(): NSArray<string>;

	static ISOCurrencyCodes(): NSArray<string>;

	static ISOLanguageCodes(): NSArray<string>;

	static autoupdatingCurrentLocale(): NSLocale;

	static availableLocaleIdentifiers(): NSArray<string>;

	static commonISOCurrencyCodes(): NSArray<string>;

	static currentLocale(): NSLocale;

	static preferredLanguages(): NSArray<string>;

	static systemLocale(): NSLocale;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(localeIdentifier: string);

	copyWithZone(_?: any): any;

	displayNameForKeyValue(_: string, value: any): string;

	encodeWithCoder(_: NSCoder): void;

	localizedStringForCalendarIdentifier(_: string): string;

	localizedStringForCollationIdentifier(_: string): string;

	localizedStringForCollatorIdentifier(_: string): string;

	localizedStringForCountryCode(_: string): string;

	localizedStringForCurrencyCode(_: string): string;

	localizedStringForLanguageCode(_: string): string;

	localizedStringForLocaleIdentifier(_: string): string;

	localizedStringForScriptCode(_: string): string;

	localizedStringForVariantCode(_: string): string;

	objectForKey(_: string): any;
}

declare var NSLocaleAlternateQuotationBeginDelimiterKey: string;

declare var NSLocaleAlternateQuotationEndDelimiterKey: string;

declare var NSLocaleCalendar: string;

declare var NSLocaleCollationIdentifier: string;

declare var NSLocaleCollatorIdentifier: string;

declare var NSLocaleCountryCode: string;

declare var NSLocaleCurrencyCode: string;

declare var NSLocaleCurrencySymbol: string;

declare var NSLocaleDecimalSeparator: string;

declare var NSLocaleExemplarCharacterSet: string;

declare var NSLocaleGroupingSeparator: string;

declare var NSLocaleIdentifier: string;

declare var NSLocaleLanguageCode: string;

enum NSLocaleLanguageDirection {

	Unknown = 0,

	LeftToRight = 1,

	RightToLeft = 2,

	TopToBottom = 3,

	BottomToTop = 4
}

globalThis.NSLocaleLanguageDirection = NSLocaleLanguageDirection;

declare var NSLocaleMeasurementSystem: string;

declare var NSLocaleQuotationBeginDelimiterKey: string;

declare var NSLocaleQuotationEndDelimiterKey: string;

declare var NSLocaleScriptCode: string;

declare var NSLocaleUsesMetricSystem: string;

declare var NSLocaleVariantCode: string;

declare var NSLocalizedDescriptionKey: string;

declare var NSLocalizedFailureErrorKey: string;

declare var NSLocalizedFailureReasonErrorKey: string;

declare var NSLocalizedRecoveryOptionsErrorKey: string;

declare var NSLocalizedRecoverySuggestionErrorKey: string;

declare class NSLock extends NSObject implements NSLocking {

	setName(_: string)

	name: string;

	lock(): void;

	lockBeforeDate(_: Date): boolean;

	tryLock(): boolean;

	unlock(): void;
}

interface NSLocking {

	lock(): void;

	unlock(): void;
}
declare var NSLocking: {

	prototype: NSLocking;
};

declare function NSLogPageSize(): number;

declare class NSLogicalTest extends NSScriptWhoseTest {

	static create(andTestWithTests: NSArray<NSSpecifierTest> | NSSpecifierTest[]);

	static create(notTestWithTest: NSScriptWhoseTest);

	static create(orTestWithTests: NSArray<NSSpecifierTest> | NSSpecifierTest[]);
}

declare const NSMACHOperatingSystem: number;

declare const NSMacOSRomanStringEncoding: number;

declare var NSMachErrorDomain: string;

declare class NSMachPort extends NSPort {

	static portWithMachPort(_: number): NSPort;

	static portWithMachPortOptions(_: number, options: NSMachPortOptions): NSPort;

	readonly machPort: number;

	static create(machPort: number);

	static create(machPort: number, options: NSMachPortOptions);

	delegate(): NSMachPortDelegate;

	setDelegate(_?: NSMachPortDelegate): void;
}

interface NSMachPortDelegate extends NSPortDelegate {

	handleMachMessage?(_: any): void;
}
declare var NSMachPortDelegate: {

	prototype: NSMachPortDelegate;
};

enum NSMachPortOptions {

	DeallocateNone = 0,

	DeallocateSendRight = 1,

	DeallocateReceiveRight = 2
}

globalThis.NSMachPortOptions = NSMachPortOptions;

declare var NSMallocException: string;

interface NSMapEnumerator {
	_pi: number;
	_si: number;
	_bs: any;
}
declare var NSMapEnumerator: NSMapEnumerator;

declare function NSMapGet(table: NSMapTable<any, any>, key: any): any;

declare function NSMapInsert(table: NSMapTable<any, any>, key: any, value: any): void;

declare function NSMapInsertIfAbsent(table: NSMapTable<any, any>, key: any, value: any): any;

declare function NSMapInsertKnownAbsent(table: NSMapTable<any, any>, key: any, value: any): void;

declare function NSMapMember(table: NSMapTable<any, any>, key: any, originalKey: any, value: any): boolean;

declare function NSMapRemove(table: NSMapTable<any, any>, key: any): void;

declare class NSMapTable<KeyType, ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSSecureCoding {

	static mapTableWithKeyOptionsValueOptions<KeyType, ObjectType>(_: NSPointerFunctionsOptions, valueOptions: NSPointerFunctionsOptions): NSMapTable<KeyType, ObjectType>;

	static strongToStrongObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;

	static strongToWeakObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;

	static weakToStrongObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;

	static weakToWeakObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;

	readonly count: number;

	readonly keyPointerFunctions: NSPointerFunctions;

	readonly valuePointerFunctions: NSPointerFunctions;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(keyOptions: NSPointerFunctionsOptions, valueOptions: NSPointerFunctionsOptions, capacity: number);

	static create(keyPointerFunctions: NSPointerFunctions, valuePointerFunctions: NSPointerFunctions, capacity: number);

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	dictionaryRepresentation(): NSDictionary<KeyType, ObjectType>;

	encodeWithCoder(_: NSCoder): void;

	keyEnumerator(): NSEnumerator<KeyType>;

	objectEnumerator(): NSEnumerator<ObjectType>;

	objectForKey(_?: KeyType): ObjectType;

	removeAllObjects(): void;

	removeObjectForKey(_?: KeyType): void;

	setObjectForKey(_?: ObjectType, forKey?: KeyType): void;
}

declare var NSMapTableCopyIn: NSPointerFunctionsOptions;

interface NSMapTableKeyCallBacks {
	hash: (p1: NSMapTable<any, any>, p2: any) => number;
	isEqual: (p1: NSMapTable<any, any>, p2: any, p3: any) => boolean;
	retain: (p1: NSMapTable<any, any>, p2: any) => void;
	release: (p1: NSMapTable<any, any>, p2: any) => void;
	describe: (p1: NSMapTable<any, any>, p2: any) => string;
	notAKeyMarker: any;
}
declare var NSMapTableKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSMapTableObjectPointerPersonality: NSPointerFunctionsOptions;

declare var NSMapTableStrongMemory: NSPointerFunctionsOptions;

interface NSMapTableValueCallBacks {
	retain: (p1: NSMapTable<any, any>, p2: any) => void;
	release: (p1: NSMapTable<any, any>, p2: any) => void;
	describe: (p1: NSMapTable<any, any>, p2: any) => string;
}
declare var NSMapTableValueCallBacks: NSMapTableValueCallBacks;

declare var NSMapTableWeakMemory: NSPointerFunctionsOptions;

declare class NSMassFormatter extends NSFormatter {

	setForPersonMassUse(_: boolean)

	isForPersonMassUse: boolean;

	setNumberFormatter(_: NSNumberFormatter)

	numberFormatter: NSNumberFormatter;

	setUnitStyle(_: NSFormattingUnitStyle)

	unitStyle: NSFormattingUnitStyle;

	stringFromKilograms(_: number): string;

	stringFromValueUnit(_: number, unit: NSMassFormatterUnit): string;

	unitStringFromKilogramsUsedUnit(_: number, usedUnit?: NSMassFormatterUnit): string;

	unitStringFromValueUnit(_: number, unit: NSMassFormatterUnit): string;
}

enum NSMassFormatterUnit {

	Gram = 11,

	Kilogram = 14,

	Ounce = 1537,

	Pound = 1538,

	Stone = 1539
}

globalThis.NSMassFormatterUnit = NSMassFormatterUnit;

enum NSMatchingFlags {

	Progress = 1,

	Completed = 2,

	HitEnd = 4,

	RequiredEnd = 8,

	InternalError = 16
}

globalThis.NSMatchingFlags = NSMatchingFlags;

enum NSMatchingOptions {

	ReportProgress = 1,

	ReportCompletion = 2,

	Anchored = 4,

	WithTransparentBounds = 8,

	WithoutAnchoringBounds = 16
}

globalThis.NSMatchingOptions = NSMatchingOptions;

declare var NSMaximumKeyValueOperator: string;

declare class NSMeasurement<UnitType> extends NSObject implements NSCopying, NSSecureCoding {

	readonly doubleValue: number;

	readonly unit: UnitType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(doubleValue: number, unit: UnitType);

	canBeConvertedToUnit(_: NSUnit): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	measurementByAddingMeasurement(_: NSMeasurement<UnitType>): NSMeasurement<UnitType>;

	measurementByConvertingToUnit(_: NSUnit): NSMeasurement<any>;

	measurementBySubtractingMeasurement(_: NSMeasurement<UnitType>): NSMeasurement<UnitType>;
}

declare class NSMeasurementFormatter extends NSFormatter implements NSSecureCoding {

	setLocale(_: NSLocale)

	locale: NSLocale;

	setNumberFormatter(_: NSNumberFormatter)

	numberFormatter: NSNumberFormatter;

	setUnitOptions(_: NSMeasurementFormatterUnitOptions)

	unitOptions: NSMeasurementFormatterUnitOptions;

	setUnitStyle(_: NSFormattingUnitStyle)

	unitStyle: NSFormattingUnitStyle;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	stringFromMeasurement(_: NSMeasurement<any>): string;

	stringFromUnit(_: NSUnit): string;
}

enum NSMeasurementFormatterUnitOptions {

	ProvidedUnit = 1,

	NaturalScale = 2,

	TemperatureWithoutUnit = 4
}

globalThis.NSMeasurementFormatterUnitOptions = NSMeasurementFormatterUnitOptions;

declare class NSMessagePort extends NSPort {
}

declare class NSMetadataItem extends NSObject {

	readonly attributes: NSArray<string>;

	static create(URL: NSURL);

	valueForAttribute(_: string): any;

	valuesForAttributes(_: NSArray<string>): NSDictionary<string, any>;
}

declare var NSMetadataItemAcquisitionMakeKey: string;

declare var NSMetadataItemAcquisitionModelKey: string;

declare var NSMetadataItemAlbumKey: string;

declare var NSMetadataItemAltitudeKey: string;

declare var NSMetadataItemApertureKey: string;

declare var NSMetadataItemAppleLoopDescriptorsKey: string;

declare var NSMetadataItemAppleLoopsKeyFilterTypeKey: string;

declare var NSMetadataItemAppleLoopsLoopModeKey: string;

declare var NSMetadataItemAppleLoopsRootKeyKey: string;

declare var NSMetadataItemApplicationCategoriesKey: string;

declare var NSMetadataItemAttributeChangeDateKey: string;

declare var NSMetadataItemAudiencesKey: string;

declare var NSMetadataItemAudioBitRateKey: string;

declare var NSMetadataItemAudioChannelCountKey: string;

declare var NSMetadataItemAudioEncodingApplicationKey: string;

declare var NSMetadataItemAudioSampleRateKey: string;

declare var NSMetadataItemAudioTrackNumberKey: string;

declare var NSMetadataItemAuthorAddressesKey: string;

declare var NSMetadataItemAuthorEmailAddressesKey: string;

declare var NSMetadataItemAuthorsKey: string;

declare var NSMetadataItemBitsPerSampleKey: string;

declare var NSMetadataItemCFBundleIdentifierKey: string;

declare var NSMetadataItemCameraOwnerKey: string;

declare var NSMetadataItemCityKey: string;

declare var NSMetadataItemCodecsKey: string;

declare var NSMetadataItemColorSpaceKey: string;

declare var NSMetadataItemCommentKey: string;

declare var NSMetadataItemComposerKey: string;

declare var NSMetadataItemContactKeywordsKey: string;

declare var NSMetadataItemContentCreationDateKey: string;

declare var NSMetadataItemContentModificationDateKey: string;

declare var NSMetadataItemContentTypeKey: string;

declare var NSMetadataItemContentTypeTreeKey: string;

declare var NSMetadataItemContributorsKey: string;

declare var NSMetadataItemCopyrightKey: string;

declare var NSMetadataItemCountryKey: string;

declare var NSMetadataItemCoverageKey: string;

declare var NSMetadataItemCreatorKey: string;

declare var NSMetadataItemDateAddedKey: string;

declare var NSMetadataItemDeliveryTypeKey: string;

declare var NSMetadataItemDescriptionKey: string;

declare var NSMetadataItemDirectorKey: string;

declare var NSMetadataItemDisplayNameKey: string;

declare var NSMetadataItemDownloadedDateKey: string;

declare var NSMetadataItemDueDateKey: string;

declare var NSMetadataItemDurationSecondsKey: string;

declare var NSMetadataItemEXIFGPSVersionKey: string;

declare var NSMetadataItemEXIFVersionKey: string;

declare var NSMetadataItemEditorsKey: string;

declare var NSMetadataItemEmailAddressesKey: string;

declare var NSMetadataItemEncodingApplicationsKey: string;

declare var NSMetadataItemExecutableArchitecturesKey: string;

declare var NSMetadataItemExecutablePlatformKey: string;

declare var NSMetadataItemExposureModeKey: string;

declare var NSMetadataItemExposureProgramKey: string;

declare var NSMetadataItemExposureTimeSecondsKey: string;

declare var NSMetadataItemExposureTimeStringKey: string;

declare var NSMetadataItemFNumberKey: string;

declare var NSMetadataItemFSContentChangeDateKey: string;

declare var NSMetadataItemFSCreationDateKey: string;

declare var NSMetadataItemFSNameKey: string;

declare var NSMetadataItemFSSizeKey: string;

declare var NSMetadataItemFinderCommentKey: string;

declare var NSMetadataItemFlashOnOffKey: string;

declare var NSMetadataItemFocalLength35mmKey: string;

declare var NSMetadataItemFocalLengthKey: string;

declare var NSMetadataItemFontsKey: string;

declare var NSMetadataItemGPSAreaInformationKey: string;

declare var NSMetadataItemGPSDOPKey: string;

declare var NSMetadataItemGPSDateStampKey: string;

declare var NSMetadataItemGPSDestBearingKey: string;

declare var NSMetadataItemGPSDestDistanceKey: string;

declare var NSMetadataItemGPSDestLatitudeKey: string;

declare var NSMetadataItemGPSDestLongitudeKey: string;

declare var NSMetadataItemGPSDifferentalKey: string;

declare var NSMetadataItemGPSMapDatumKey: string;

declare var NSMetadataItemGPSMeasureModeKey: string;

declare var NSMetadataItemGPSProcessingMethodKey: string;

declare var NSMetadataItemGPSStatusKey: string;

declare var NSMetadataItemGPSTrackKey: string;

declare var NSMetadataItemGenreKey: string;

declare var NSMetadataItemHasAlphaChannelKey: string;

declare var NSMetadataItemHeadlineKey: string;

declare var NSMetadataItemISOSpeedKey: string;

declare var NSMetadataItemIdentifierKey: string;

declare var NSMetadataItemImageDirectionKey: string;

declare var NSMetadataItemInformationKey: string;

declare var NSMetadataItemInstantMessageAddressesKey: string;

declare var NSMetadataItemInstructionsKey: string;

declare var NSMetadataItemIsApplicationManagedKey: string;

declare var NSMetadataItemIsGeneralMIDISequenceKey: string;

declare var NSMetadataItemIsLikelyJunkKey: string;

declare var NSMetadataItemIsUbiquitousKey: string;

declare var NSMetadataItemKeySignatureKey: string;

declare var NSMetadataItemKeywordsKey: string;

declare var NSMetadataItemKindKey: string;

declare var NSMetadataItemLanguagesKey: string;

declare var NSMetadataItemLastUsedDateKey: string;

declare var NSMetadataItemLatitudeKey: string;

declare var NSMetadataItemLayerNamesKey: string;

declare var NSMetadataItemLensModelKey: string;

declare var NSMetadataItemLongitudeKey: string;

declare var NSMetadataItemLyricistKey: string;

declare var NSMetadataItemMaxApertureKey: string;

declare var NSMetadataItemMediaTypesKey: string;

declare var NSMetadataItemMeteringModeKey: string;

declare var NSMetadataItemMusicalGenreKey: string;

declare var NSMetadataItemMusicalInstrumentCategoryKey: string;

declare var NSMetadataItemMusicalInstrumentNameKey: string;

declare var NSMetadataItemNamedLocationKey: string;

declare var NSMetadataItemNumberOfPagesKey: string;

declare var NSMetadataItemOrganizationsKey: string;

declare var NSMetadataItemOrientationKey: string;

declare var NSMetadataItemOriginalFormatKey: string;

declare var NSMetadataItemOriginalSourceKey: string;

declare var NSMetadataItemPageHeightKey: string;

declare var NSMetadataItemPageWidthKey: string;

declare var NSMetadataItemParticipantsKey: string;

declare var NSMetadataItemPathKey: string;

declare var NSMetadataItemPerformersKey: string;

declare var NSMetadataItemPhoneNumbersKey: string;

declare var NSMetadataItemPixelCountKey: string;

declare var NSMetadataItemPixelHeightKey: string;

declare var NSMetadataItemPixelWidthKey: string;

declare var NSMetadataItemProducerKey: string;

declare var NSMetadataItemProfileNameKey: string;

declare var NSMetadataItemProjectsKey: string;

declare var NSMetadataItemPublishersKey: string;

declare var NSMetadataItemRecipientAddressesKey: string;

declare var NSMetadataItemRecipientEmailAddressesKey: string;

declare var NSMetadataItemRecipientsKey: string;

declare var NSMetadataItemRecordingDateKey: string;

declare var NSMetadataItemRecordingYearKey: string;

declare var NSMetadataItemRedEyeOnOffKey: string;

declare var NSMetadataItemResolutionHeightDPIKey: string;

declare var NSMetadataItemResolutionWidthDPIKey: string;

declare var NSMetadataItemRightsKey: string;

declare var NSMetadataItemSecurityMethodKey: string;

declare var NSMetadataItemSpeedKey: string;

declare var NSMetadataItemStarRatingKey: string;

declare var NSMetadataItemStateOrProvinceKey: string;

declare var NSMetadataItemStreamableKey: string;

declare var NSMetadataItemSubjectKey: string;

declare var NSMetadataItemTempoKey: string;

declare var NSMetadataItemTextContentKey: string;

declare var NSMetadataItemThemeKey: string;

declare var NSMetadataItemTimeSignatureKey: string;

declare var NSMetadataItemTimestampKey: string;

declare var NSMetadataItemTitleKey: string;

declare var NSMetadataItemTotalBitRateKey: string;

declare var NSMetadataItemURLKey: string;

declare var NSMetadataItemVersionKey: string;

declare var NSMetadataItemVideoBitRateKey: string;

declare var NSMetadataItemWhereFromsKey: string;

declare var NSMetadataItemWhiteBalanceKey: string;

declare class NSMetadataQuery extends NSObject {

	setDelegate(_: NSMetadataQueryDelegate)

	delegate: NSMetadataQueryDelegate;

	readonly isGathering: boolean;

	readonly groupedResults: NSArray<NSMetadataQueryResultGroup>;

	setGroupingAttributes(_: NSArray<string>)

	groupingAttributes: NSArray<string>;

	setNotificationBatchingInterval(_: number)

	notificationBatchingInterval: number;

	setOperationQueue(_: NSOperationQueue)

	operationQueue: NSOperationQueue;

	setPredicate(_: NSPredicate)

	predicate: NSPredicate;

	readonly resultCount: number;

	readonly results: NSArray<any>;

	setSearchItems(_: NSArray<any>)

	searchItems: NSArray<any>;

	setSearchScopes(_: NSArray<any>)

	searchScopes: NSArray<any>;

	setSortDescriptors(_: NSArray<NSSortDescriptor>)

	sortDescriptors: NSArray<NSSortDescriptor>;

	readonly isStarted: boolean;

	readonly isStopped: boolean;

	setValueListAttributes(_: NSArray<string>)

	valueListAttributes: NSArray<string>;

	readonly valueLists: NSDictionary<string, NSArray<NSMetadataQueryAttributeValueTuple>>;

	disableUpdates(): void;

	enableUpdates(): void;

	enumerateResultsUsingBlock(_: (p1: any, p2: number, p3: boolean) => void): void;

	enumerateResultsWithOptionsUsingBlock(_: NSEnumerationOptions, usingBlock: (p1: any, p2: number, p3: boolean) => void): void;

	indexOfResult(_: any): number;

	resultAtIndex(_: number): any;

	startQuery(): boolean;

	stopQuery(): void;

	valueOfAttributeForResultAtIndex(_: string, forResultAtIndex: number): any;
}

declare var NSMetadataQueryAccessibleUbiquitousExternalDocumentsScope: string;

declare class NSMetadataQueryAttributeValueTuple extends NSObject {

	readonly attribute: string;

	readonly count: number;

	readonly value: any;
}

interface NSMetadataQueryDelegate extends NSObjectProtocol {

	metadataQueryReplacementObjectForResultObject?(_: NSMetadataQuery, replacementObjectForResultObject: NSMetadataItem): any;

	metadataQueryReplacementValueForAttributeValue?(_: NSMetadataQuery, replacementValueForAttribute: string, value: any): any;
}
declare var NSMetadataQueryDelegate: {

	prototype: NSMetadataQueryDelegate;
};

declare var NSMetadataQueryDidFinishGatheringNotification: string;

declare var NSMetadataQueryDidStartGatheringNotification: string;

declare var NSMetadataQueryDidUpdateNotification: string;

declare var NSMetadataQueryGatheringProgressNotification: string;

declare var NSMetadataQueryIndexedLocalComputerScope: string;

declare var NSMetadataQueryIndexedNetworkScope: string;

declare var NSMetadataQueryLocalComputerScope: string;

declare var NSMetadataQueryNetworkScope: string;

declare var NSMetadataQueryResultContentRelevanceAttribute: string;

declare class NSMetadataQueryResultGroup extends NSObject {

	readonly attribute: string;

	readonly resultCount: number;

	readonly results: NSArray<any>;

	readonly subgroups: NSArray<NSMetadataQueryResultGroup>;

	readonly value: any;

	resultAtIndex(_: number): any;
}

declare var NSMetadataQueryUbiquitousDataScope: string;

declare var NSMetadataQueryUbiquitousDocumentsScope: string;

declare var NSMetadataQueryUpdateAddedItemsKey: string;

declare var NSMetadataQueryUpdateChangedItemsKey: string;

declare var NSMetadataQueryUpdateRemovedItemsKey: string;

declare var NSMetadataQueryUserHomeScope: string;

declare var NSMetadataUbiquitousItemContainerDisplayNameKey: string;

declare var NSMetadataUbiquitousItemDownloadRequestedKey: string;

declare var NSMetadataUbiquitousItemDownloadingErrorKey: string;

declare var NSMetadataUbiquitousItemDownloadingStatusCurrent: string;

declare var NSMetadataUbiquitousItemDownloadingStatusDownloaded: string;

declare var NSMetadataUbiquitousItemDownloadingStatusKey: string;

declare var NSMetadataUbiquitousItemDownloadingStatusNotDownloaded: string;

declare var NSMetadataUbiquitousItemHasUnresolvedConflictsKey: string;

declare var NSMetadataUbiquitousItemIsDownloadingKey: string;

declare var NSMetadataUbiquitousItemIsExternalDocumentKey: string;

declare var NSMetadataUbiquitousItemIsSharedKey: string;

declare var NSMetadataUbiquitousItemIsUploadedKey: string;

declare var NSMetadataUbiquitousItemIsUploadingKey: string;

declare var NSMetadataUbiquitousItemPercentDownloadedKey: string;

declare var NSMetadataUbiquitousItemPercentUploadedKey: string;

declare var NSMetadataUbiquitousItemURLInLocalContainerKey: string;

declare var NSMetadataUbiquitousItemUploadingErrorKey: string;

declare var NSMetadataUbiquitousSharedItemCurrentUserPermissionsKey: string;

declare var NSMetadataUbiquitousSharedItemCurrentUserRoleKey: string;

declare var NSMetadataUbiquitousSharedItemMostRecentEditorNameComponentsKey: string;

declare var NSMetadataUbiquitousSharedItemOwnerNameComponentsKey: string;

declare var NSMetadataUbiquitousSharedItemPermissionsReadOnly: string;

declare var NSMetadataUbiquitousSharedItemPermissionsReadWrite: string;

declare var NSMetadataUbiquitousSharedItemRoleOwner: string;

declare var NSMetadataUbiquitousSharedItemRoleParticipant: string;

declare class NSMiddleSpecifier extends NSScriptObjectSpecifier {
}

declare var NSMinimumKeyValueOperator: string;

declare function NSMouseInRect(aPoint: CGPoint, aRect: CGRect, flipped: boolean): boolean;

declare class NSMoveCommand extends NSScriptCommand {

	readonly keySpecifier: NSScriptObjectSpecifier;

	setReceiversSpecifier(_?: NSScriptObjectSpecifier): void;
}

declare class NSMutableArray<ObjectType> extends NSArray<ObjectType> {

	static array<ObjectType>(): NSMutableArray<ObjectType>; // inherited from NSArray

	static arrayWithArray<ObjectType>(_: NSArray<ObjectType>): NSMutableArray<ObjectType>; // inherited from NSArray

	static arrayWithCapacity<ObjectType>(_: number): NSMutableArray<ObjectType>;

	static arrayWithContentsOfFile<ObjectType>(_: string): NSMutableArray<ObjectType>;

	static arrayWithContentsOfURL<ObjectType>(_: NSURL): NSMutableArray<ObjectType>;

	static arrayWithObject<ObjectType>(_: ObjectType): NSMutableArray<ObjectType>; // inherited from NSArray

	static arrayWithObjects<ObjectType>(_: ObjectType): NSMutableArray<ObjectType>; // inherited from NSArray

	static arrayWithObjectsCount<ObjectType>(_: ObjectType, count: number): NSMutableArray<ObjectType>; // inherited from NSArray

	static create(capacity: number);

	addObject(_: ObjectType): void;

	addObjectsFromArray(_: NSArray<ObjectType>): void;

	exchangeObjectAtIndexWithObjectAtIndex(_: number, withObjectAtIndex: number): void;

	filterUsingPredicate(_: NSPredicate): void;

	insertObjectAtIndex(_: ObjectType, atIndex: number): void;

	insertObjectsAtIndexes(_: NSArray<ObjectType>, atIndexes: NSIndexSet): void;

	removeAllObjects(): void;

	removeLastObject(): void;

	removeObject(_: ObjectType): void;

	removeObjectInRange(_: ObjectType, inRange: NSRange): void;

	removeObjectAtIndex(_: number): void;

	removeObjectIdenticalTo(identicalTo: ObjectType): void;

	removeObjectIdenticalToInRange(identicalTo: ObjectType, in_: NSRange): void;

	removeObjectsAtIndexes(_: NSIndexSet): void;

	removeObjectsInArray(_: NSArray<ObjectType>): void;

	removeObjectsInRange(_: NSRange): void;

	replaceObjectAtIndexWithObject(_: number, withObject: ObjectType): void;

	replaceObjectsAtIndexesWithObjects(_: NSIndexSet, withObjects: NSArray<ObjectType>): void;

	replaceObjectsInRangeWithObjectsFromArray(_: NSRange, withObjectsFromArray: NSArray<ObjectType>): void;

	replaceObjectsInRangeWithObjectsFromArrayRange(_: NSRange, withObjectsFromArray: NSArray<ObjectType>, range: NSRange): void;

	setArray(_: NSArray<ObjectType>): void;

	setObjectAtIndexedSubscript(_: ObjectType, atIndexedSubscript: number): void;

	sortUsingComparator(_: (p1: any, p2: any) => NSComparisonResult): void;

	sortUsingDescriptors(_: NSArray<NSSortDescriptor>): void;

	sortUsingFunctionContext(_?: (p1: ObjectType, p2: ObjectType, p3: any) => number, context?: any): void;

	sortUsingSelector(_: string): void;

	sortWithOptionsUsingComparator(_: NSSortOptions, usingComparator: (p1: any, p2: any) => NSComparisonResult): void;
}

declare class NSMutableAttributedString extends NSAttributedString {

	readonly mutableString: NSMutableString;

	addAttributeValueRange(_: string, value: any, range: NSRange): void;

	addAttributesRange(_: NSDictionary<string, any>, range: NSRange): void;

	appendAttributedString(_: NSAttributedString): void;

	applyFontTraitsRange(_: NSFontTraitMask, range: NSRange): void;

	beginEditing(): void;

	deleteCharactersInRange(_: NSRange): void;

	endEditing(): void;

	fixAttachmentAttributeInRange(_: NSRange): void;

	fixAttributesInRange(_: NSRange): void;

	fixFontAttributeInRange(_: NSRange): void;

	fixParagraphStyleAttributeInRange(_: NSRange): void;

	insertAttributedStringAtIndex(_: NSAttributedString, atIndex: number): void;

	readFromDataOptionsDocumentAttributesError(options: NSData, documentAttributes: NSDictionary<string, any>, error?: NSDictionary<string, any>): boolean;

	readFromURLOptionsDocumentAttributesError(options: NSURL, documentAttributes: NSDictionary<string, any>, error?: NSDictionary<string, any>): boolean;

	removeAttributeRange(_: string, range: NSRange): void;

	replaceCharactersInRangeWithAttributedString(_: NSRange, withAttributedString: NSAttributedString): void;

	replaceCharactersInRangeWithString(_: NSRange, withString: string): void;

	setAlignmentRange(_: NSTextAlignment, range: NSRange): void;

	setAttributedString(_: NSAttributedString): void;

	setAttributesRange(_?: NSDictionary<string, any>, range: NSRange): void;

	setBaseWritingDirectionRange(_: NSWritingDirection, range: NSRange): void;

	subscriptRange(_: NSRange): void;

	superscriptRange(_: NSRange): void;

	unscriptRange(_: NSRange): void;

	updateAttachmentsFromPath(_: string): void;
}

declare class NSMutableCharacterSet extends NSCharacterSet implements NSCopying, NSMutableCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addCharactersInRange(_: NSRange): void;

	addCharactersInString(_: string): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	formIntersectionWithCharacterSet(_: NSCharacterSet): void;

	formUnionWithCharacterSet(_: NSCharacterSet): void;

	invert(): void;

	mutableCopyWithZone(_?: any): any;

	removeCharactersInRange(_: NSRange): void;

	removeCharactersInString(_: string): void;
}

interface NSMutableCopying {

	mutableCopyWithZone(_?: any): any;
}
declare var NSMutableCopying: {

	prototype: NSMutableCopying;
};

declare class NSMutableData extends NSData {

	static data(): NSMutableData; // inherited from NSData

	static dataWithBytesLength(_?: any, length: number): NSMutableData; // inherited from NSData

	static dataWithBytesNoCopyLength(_: any, length: number): NSMutableData; // inherited from NSData

	static dataWithBytesNoCopyLengthFreeWhenDone(_: any, length: number, freeWhenDone: boolean): NSMutableData; // inherited from NSData

	static dataWithCapacity(_: number): NSMutableData;

	static dataWithContentsOfFile(_: string): NSMutableData; // inherited from NSData

	static dataWithContentsOfFileOptionsError(options: string, error: NSDataReadingOptions): NSMutableData; // inherited from NSData

	static dataWithContentsOfURL(_: NSURL): NSMutableData; // inherited from NSData

	static dataWithContentsOfURLOptionsError(options: NSURL, error: NSDataReadingOptions): NSMutableData; // inherited from NSData

	static dataWithData(_: NSData): NSMutableData; // inherited from NSData

	static dataWithLength(_: number): NSMutableData;

	setLength(_: number)

	length: number;

	readonly mutableBytes: any;

	static create(capacity: number);

	static create(length: number);

	appendBytesLength(_: any, length: number): void;

	appendData(_: NSData): void;

	compressUsingAlgorithmError(error: NSDataCompressionAlgorithm): boolean;

	decompressUsingAlgorithmError(error: NSDataCompressionAlgorithm): boolean;

	increaseLengthBy(_: number): void;

	replaceBytesInRangeWithBytes(_: NSRange, withBytes: any): void;

	replaceBytesInRangeWithBytesLength(_: NSRange, withBytes?: any, length: number): void;

	resetBytesInRange(_: NSRange): void;

	setData(_: NSData): void;
}

declare class NSMutableDictionary<KeyType, ObjectType> extends NSDictionary<KeyType, ObjectType> {

	static dictionary<KeyType, ObjectType>(): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithCapacity<KeyType, ObjectType>(_: number): NSMutableDictionary<KeyType, ObjectType>;

	static dictionaryWithContentsOfFile<KeyType, ObjectType>(_: string): NSMutableDictionary<KeyType, ObjectType>;

	static dictionaryWithContentsOfURL<KeyType, ObjectType>(_: NSURL): NSMutableDictionary<KeyType, ObjectType>;

	static dictionaryWithDictionary<KeyType, ObjectType>(_: NSDictionary<KeyType, ObjectType>): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithObjectForKey<KeyType, ObjectType>(_: ObjectType, forKey: KeyType): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithObjectsForKeys<KeyType, ObjectType>(_: NSArray<ObjectType>, forKeys: NSArray<KeyType>): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithObjectsForKeysCount<KeyType, ObjectType>(_?: ObjectType, forKeys?: KeyType, count: number): NSMutableDictionary<KeyType, ObjectType>; // inherited from NSDictionary

	static dictionaryWithSharedKeySet<KeyType, ObjectType>(_: any): NSMutableDictionary<KeyType, ObjectType>;

	static create(capacity: number);

	addEntriesFromDictionary(_: NSDictionary<KeyType, ObjectType>): void;

	removeAllObjects(): void;

	removeObjectForKey(_: KeyType): void;

	removeObjectsForKeys(_: NSArray<KeyType>): void;

	setDictionary(_: NSDictionary<KeyType, ObjectType>): void;

	setObjectForKey(_: ObjectType, forKey: KeyType): void;

	setObjectForKeyedSubscript(_?: ObjectType, forKeyedSubscript: KeyType): void;

	setValueForKey(_?: ObjectType, forKey: string): void;
}

declare class NSMutableIndexSet extends NSIndexSet {

	static indexSet(): NSMutableIndexSet; // inherited from NSIndexSet

	static indexSetWithIndex(_: number): NSMutableIndexSet; // inherited from NSIndexSet

	static indexSetWithIndexesInRange(_: NSRange): NSMutableIndexSet; // inherited from NSIndexSet

	addIndex(_: number): void;

	addIndexes(_: NSIndexSet): void;

	addIndexesInRange(_: NSRange): void;

	removeAllIndexes(): void;

	removeIndex(_: number): void;

	removeIndexes(_: NSIndexSet): void;

	removeIndexesInRange(_: NSRange): void;

	shiftIndexesStartingAtIndexBy(_: number, by: number): void;
}

declare class NSMutableOrderedSet<ObjectType> extends NSOrderedSet<ObjectType> {

	static orderedSet<ObjectType>(): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithArray<ObjectType>(_: NSArray<ObjectType>): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithArrayRangeCopyItems<ObjectType>(_: NSArray<ObjectType>, range: NSRange, copyItems: boolean): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithCapacity<ObjectType>(_: number): NSMutableOrderedSet<ObjectType>;

	static orderedSetWithObject<ObjectType>(_: ObjectType): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithObjects<ObjectType>(_: ObjectType): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithObjectsCount<ObjectType>(_: ObjectType, count: number): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithOrderedSet<ObjectType>(_: NSOrderedSet<ObjectType>): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithOrderedSetWithRangeCopyItems<ObjectType>(_: NSOrderedSet<ObjectType>, range: NSRange, copyItems: boolean): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithSet<ObjectType>(_: NSSet<ObjectType>): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static orderedSetWithSetWithCopyItems<ObjectType>(_: NSSet<ObjectType>, copyItems: boolean): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet

	static create(capacity: number);

	addObject(_: ObjectType): void;

	addObjectsCount(_?: ObjectType, count: number): void;

	addObjectsFromArray(_: NSArray<ObjectType>): void;

	exchangeObjectAtIndexWithObjectAtIndex(_: number, withObjectAtIndex: number): void;

	filterUsingPredicate(_: NSPredicate): void;

	insertObjectAtIndex(_: ObjectType, atIndex: number): void;

	insertObjectsAtIndexes(_: NSArray<ObjectType>, atIndexes: NSIndexSet): void;

	intersectOrderedSet(_: NSOrderedSet<ObjectType>): void;

	intersectSet(_: NSSet<ObjectType>): void;

	minusOrderedSet(_: NSOrderedSet<ObjectType>): void;

	minusSet(_: NSSet<ObjectType>): void;

	moveObjectsAtIndexesToIndex(_: NSIndexSet, toIndex: number): void;

	removeAllObjects(): void;

	removeObject(_: ObjectType): void;

	removeObjectAtIndex(_: number): void;

	removeObjectsAtIndexes(_: NSIndexSet): void;

	removeObjectsInArray(_: NSArray<ObjectType>): void;

	removeObjectsInRange(_: NSRange): void;

	replaceObjectAtIndexWithObject(_: number, withObject: ObjectType): void;

	replaceObjectsAtIndexesWithObjects(_: NSIndexSet, withObjects: NSArray<ObjectType>): void;

	replaceObjectsInRangeWithObjectsCount(_: NSRange, withObjects?: ObjectType, count: number): void;

	setObjectAtIndex(_: ObjectType, atIndex: number): void;

	setObjectAtIndexedSubscript(_: ObjectType, atIndexedSubscript: number): void;

	sortRangeOptionsUsingComparator(_: NSRange, options: NSSortOptions, usingComparator: (p1: any, p2: any) => NSComparisonResult): void;

	sortUsingComparator(_: (p1: any, p2: any) => NSComparisonResult): void;

	sortUsingDescriptors(_: NSArray<NSSortDescriptor>): void;

	sortWithOptionsUsingComparator(_: NSSortOptions, usingComparator: (p1: any, p2: any) => NSComparisonResult): void;

	unionOrderedSet(_: NSOrderedSet<ObjectType>): void;

	unionSet(_: NSSet<ObjectType>): void;
}

declare class NSMutableSet<ObjectType> extends NSSet<ObjectType> {

	static set<ObjectType>(): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithArray<ObjectType>(_: NSArray<ObjectType>): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithCapacity<ObjectType>(_: number): NSMutableSet<ObjectType>;

	static setWithCollectionViewIndexPath<ObjectType>(_: NSIndexPath): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithCollectionViewIndexPaths<ObjectType>(_: NSArray<NSIndexPath>): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithObject<ObjectType>(_: ObjectType): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithObjects<ObjectType>(_: ObjectType): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithObjectsCount<ObjectType>(_: ObjectType, count: number): NSMutableSet<ObjectType>; // inherited from NSSet

	static setWithSet<ObjectType>(_: NSSet<ObjectType>): NSMutableSet<ObjectType>; // inherited from NSSet

	static create(capacity: number);

	addObject(_: ObjectType): void;

	addObjectsFromArray(_: NSArray<ObjectType>): void;

	filterUsingPredicate(_: NSPredicate): void;

	intersectSet(_: NSSet<ObjectType>): void;

	minusSet(_: NSSet<ObjectType>): void;

	removeAllObjects(): void;

	removeObject(_: ObjectType): void;

	setSet(_: NSSet<ObjectType>): void;

	unionSet(_: NSSet<ObjectType>): void;
}

declare class NSMutableString extends NSString {

	static objectWithItemProviderDataTypeIdentifierError(typeIdentifier: NSData, error: string): NSMutableString; // inherited from NSItemProviderReading

	static string(): NSMutableString; // inherited from NSString

	static stringWithCStringEncoding(_: string, encoding: number): NSMutableString; // inherited from NSString

	static stringWithCapacity(_: number): NSMutableString;

	static stringWithCharactersLength(_: string, length: number): NSMutableString; // inherited from NSString

	static stringWithContentsOfFileEncodingError(encoding: string, error: number): NSMutableString; // inherited from NSString

	static stringWithContentsOfFileUsedEncodingError(usedEncoding: string, error?: number): NSMutableString; // inherited from NSString

	static stringWithContentsOfURLEncodingError(encoding: NSURL, error: number): NSMutableString; // inherited from NSString

	static stringWithContentsOfURLUsedEncodingError(usedEncoding: NSURL, error?: number): NSMutableString; // inherited from NSString

	static stringWithString(_: string): NSMutableString; // inherited from NSString

	static stringWithUTF8String(_: string): NSMutableString; // inherited from NSString

	static create(capacity: number);

	appendString(_: string): void;

	applyTransformReverseRangeUpdatedRange(_: string, reverse: boolean, range: NSRange, updatedRange?: NSRange): boolean;

	deleteCharactersInRange(_: NSRange): void;

	insertStringAtIndex(_: string, atIndex: number): void;

	replaceCharactersInRangeWithString(_: NSRange, withString: string): void;

	replaceOccurrencesOfStringWithStringOptionsRange(_: string, withString: string, options: NSStringCompareOptions, range: NSRange): number;

	setString(_: string): void;
}

declare class NSMutableURLRequest extends NSURLRequest {

	static requestWithURL(_: NSURL): NSMutableURLRequest; // inherited from NSURLRequest

	static requestWithURLCachePolicyTimeoutInterval(_: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: number): NSMutableURLRequest; // inherited from NSURLRequest

	setHTTPBody(_: NSData)

	HTTPBody: NSData;

	setHTTPBodyStream(_: NSInputStream)

	HTTPBodyStream: NSInputStream;

	setHTTPMethod(_: string)

	HTTPMethod: string;

	setHTTPShouldHandleCookies(_: boolean)

	HTTPShouldHandleCookies: boolean;

	setHTTPShouldUsePipelining(_: boolean)

	HTTPShouldUsePipelining: boolean;

	setURL(_: NSURL)

	URL: NSURL;

	setAllHTTPHeaderFields(_: NSDictionary<string, string>)

	allHTTPHeaderFields: NSDictionary<string, string>;

	setAllowsCellularAccess(_: boolean)

	allowsCellularAccess: boolean;

	setAllowsConstrainedNetworkAccess(_: boolean)

	allowsConstrainedNetworkAccess: boolean;

	setAllowsExpensiveNetworkAccess(_: boolean)

	allowsExpensiveNetworkAccess: boolean;

	setCachePolicy(_: NSURLRequestCachePolicy)

	cachePolicy: NSURLRequestCachePolicy;

	setMainDocumentURL(_: NSURL)

	mainDocumentURL: NSURL;

	setNetworkServiceType(_: NSURLRequestNetworkServiceType)

	networkServiceType: NSURLRequestNetworkServiceType;

	setTimeoutInterval(_: number)

	timeoutInterval: number;

	addValueForHTTPHeaderField(_: string, forHTTPHeaderField: string): void;

	setValueForHTTPHeaderField(_?: string, forHTTPHeaderField: string): void;
}

declare const NSNEXTSTEPStringEncoding: number;

declare class NSNameSpecifier extends NSScriptObjectSpecifier {

	setName(_: string)

	name: string;

	static create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier, key: string, name: string);
}

declare var NSNegateBooleanTransformerName: string;

declare class NSNetService extends NSObject {

	static dataFromTXTRecordDictionary(_: NSDictionary<string, NSData>): NSData;

	static dictionaryFromTXTRecordData(_: NSData): NSDictionary<string, NSData>;

	readonly addresses: NSArray<NSData>;

	setDelegate(_: NSNetServiceDelegate)

	delegate: NSNetServiceDelegate;

	readonly domain: string;

	readonly hostName: string;

	setIncludesPeerToPeer(_: boolean)

	includesPeerToPeer: boolean;

	readonly name: string;

	readonly port: number;

	readonly type: string;

	static create(domain: string, type: string, name: string);

	static create(domain: string, type: string, name: string, port: number);

	TXTRecordData(): NSData;

	getInputStreamOutputStream(_?: NSInputStream, outputStream?: NSOutputStream): boolean;

	publish(): void;

	publishWithOptions(_: NSNetServiceOptions): void;

	removeFromRunLoopForMode(_: NSRunLoop, forMode: string): void;

	resolveWithTimeout(_: number): void;

	scheduleInRunLoopForMode(_: NSRunLoop, forMode: string): void;

	setTXTRecordData(_?: NSData): boolean;

	startMonitoring(): void;

	stop(): void;

	stopMonitoring(): void;
}

declare class NSNetServiceBrowser extends NSObject {

	setDelegate(_: NSNetServiceBrowserDelegate)

	delegate: NSNetServiceBrowserDelegate;

	setIncludesPeerToPeer(_: boolean)

	includesPeerToPeer: boolean;

	removeFromRunLoopForMode(_: NSRunLoop, forMode: string): void;

	scheduleInRunLoopForMode(_: NSRunLoop, forMode: string): void;

	searchForBrowsableDomains(): void;

	searchForRegistrationDomains(): void;

	searchForServicesOfTypeInDomain(_: string, inDomain: string): void;

	stop(): void;
}

interface NSNetServiceBrowserDelegate extends NSObjectProtocol {

	netServiceBrowserDidFindDomainMoreComing?(_: NSNetServiceBrowser, didFindDomain: string, moreComing: boolean): void;

	netServiceBrowserDidFindServiceMoreComing?(_: NSNetServiceBrowser, didFindService: NSNetService, moreComing: boolean): void;

	netServiceBrowserDidNotSearch?(_: NSNetServiceBrowser, didNotSearch: NSDictionary<string, number>): void;

	netServiceBrowserDidRemoveDomainMoreComing?(_: NSNetServiceBrowser, didRemoveDomain: string, moreComing: boolean): void;

	netServiceBrowserDidRemoveServiceMoreComing?(_: NSNetServiceBrowser, didRemoveService: NSNetService, moreComing: boolean): void;

	netServiceBrowserDidStopSearch?(_: NSNetServiceBrowser): void;

	netServiceBrowserWillSearch?(_: NSNetServiceBrowser): void;
}
declare var NSNetServiceBrowserDelegate: {

	prototype: NSNetServiceBrowserDelegate;
};

interface NSNetServiceDelegate extends NSObjectProtocol {

	netServiceDidAcceptConnectionWithInputStreamOutputStream?(_: NSNetService, didAcceptConnectionWithInputStream: NSInputStream, outputStream: NSOutputStream): void;

	netServiceDidNotPublish?(_: NSNetService, didNotPublish: NSDictionary<string, number>): void;

	netServiceDidNotResolve?(_: NSNetService, didNotResolve: NSDictionary<string, number>): void;

	netServiceDidUpdateTXTRecordData?(_: NSNetService, didUpdateTXTRecordData: NSData): void;

	netServiceDidPublish?(_: NSNetService): void;

	netServiceDidResolveAddress?(_: NSNetService): void;

	netServiceDidStop?(_: NSNetService): void;

	netServiceWillPublish?(_: NSNetService): void;

	netServiceWillResolve?(_: NSNetService): void;
}
declare var NSNetServiceDelegate: {

	prototype: NSNetServiceDelegate;
};

enum NSNetServiceOptions {

	NoAutoRename = 1,

	ListenForConnections = 2
}

globalThis.NSNetServiceOptions = NSNetServiceOptions;

enum NSNetServicesError {

	UnknownError = -72000,

	CollisionError = -72001,

	NotFoundError = -72002,

	ActivityInProgress = -72003,

	BadArgumentError = -72004,

	CancelledError = -72005,

	InvalidError = -72006,

	TimeoutError = -72007
}

globalThis.NSNetServicesError = NSNetServicesError;

declare var NSNetServicesErrorCode: string;

declare var NSNetServicesErrorDomain: string;

declare function NSNextHashEnumeratorItem(enumerator: NSHashEnumerator): any;

declare function NSNextMapEnumeratorPair(enumerator: NSMapEnumerator, key: any, value: any): boolean;

declare const NSNoScriptError: number;

declare const NSNoSpecifierError: number;

declare const NSNoTopLevelContainersSpecifierError: number;

declare const NSNonLossyASCIIStringEncoding: number;

declare var NSNonOwnedPointerHashCallBacks: NSHashTableCallBacks;

declare var NSNonOwnedPointerMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSNonOwnedPointerMapValueCallBacks: NSMapTableValueCallBacks;

declare var NSNonOwnedPointerOrNullMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSNonRetainedObjectHashCallBacks: NSHashTableCallBacks;

declare var NSNonRetainedObjectMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSNonRetainedObjectMapValueCallBacks: NSMapTableValueCallBacks;

declare var NSNotFound: number;

declare class NSNotification extends NSObject implements NSCoding, NSCopying {

	static notificationWithNameObject(_: string, object_?: any): NSNotification;

	static notificationWithNameObjectUserInfo(_: string, object_?: any, userInfo?: NSDictionary<any, any>): NSNotification;

	readonly name: string;

	readonly object: any;

	readonly userInfo: NSDictionary<any, any>;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(name: string, object: any, userInfo: NSDictionary<any, any>);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NSNotificationCenter extends NSObject {

	static defaultCenter(): NSNotificationCenter;

	addObserverSelectorNameObject(_: any, selector: string, name?: string, object_?: any): void;

	addObserverForNameObjectQueueUsingBlock(_?: string, object_?: any, queue?: NSOperationQueue, usingBlock: (p1: NSNotification) => void): NSObjectProtocol;

	postNotification(_: NSNotification): void;

	postNotificationNameObject(name: string, object_?: any): void;

	postNotificationNameObjectUserInfo(name: string, object_?: any, userInfo?: NSDictionary<any, any>): void;

	removeObserver(_: any): void;

	removeObserverNameObject(_: any, name?: string, object_?: any): void;
}

enum NSNotificationCoalescing {

	NoCoalescing = 0,

	CoalescingOnName = 1,

	CoalescingOnSender = 2
}

globalThis.NSNotificationCoalescing = NSNotificationCoalescing;

declare var NSNotificationDeliverImmediately: NSDistributedNotificationOptions;

declare var NSNotificationPostToAllSessions: NSDistributedNotificationOptions;

declare class NSNotificationQueue extends NSObject {

	static defaultQueue(): NSNotificationQueue;

	static create(notificationCenter: NSNotificationCenter);

	dequeueNotificationsMatchingCoalesceMask(_: NSNotification, coalesceMask: number): void;

	enqueueNotificationPostingStyle(_: NSNotification, postingStyle: NSPostingStyle): void;

	enqueueNotificationPostingStyleCoalesceMaskForModes(_: NSNotification, postingStyle: NSPostingStyle, coalesceMask: NSNotificationCoalescing, forModes?: NSArray<string>): void;
}

enum NSNotificationSuspensionBehavior {

	Drop = 1,

	Coalesce = 2,

	Hold = 3,

	DeliverImmediately = 4
}

globalThis.NSNotificationSuspensionBehavior = NSNotificationSuspensionBehavior;

declare class NSNull extends NSObject implements NSCopying, NSSecureCoding, CAAction {

	static null(): NSNull;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	runActionForKeyObjectArguments(_: string, object_: any, arguments_?: NSDictionary<any, any>): void;
}

declare class NSNumber extends NSValue {

	static numberWithBool(_: boolean): number;

	static numberWithChar(_: number): number;

	static numberWithDouble(_: number): number;

	static numberWithFloat(_: number): number;

	static numberWithInt(_: number): number;

	static numberWithInteger(_: number): number;

	static numberWithLong(_: number): number;

	static numberWithLongLong(_: number): number;

	static numberWithShort(_: number): number;

	static numberWithUnsignedChar(_: number): number;

	static numberWithUnsignedInt(_: number): number;

	static numberWithUnsignedInteger(_: number): number;

	static numberWithUnsignedLong(_: number): number;

	static numberWithUnsignedLongLong(_: number): number;

	static numberWithUnsignedShort(_: number): number;

	readonly boolValue: boolean;

	readonly charValue: number;

	readonly decimalValue: NSDecimal;

	readonly doubleValue: number;

	readonly floatValue: number;

	readonly intValue: number;

	readonly integerValue: number;

	readonly longLongValue: number;

	readonly longValue: number;

	readonly shortValue: number;

	readonly stringValue: string;

	readonly unsignedCharValue: number;

	readonly unsignedIntValue: number;

	readonly unsignedIntegerValue: number;

	readonly unsignedLongLongValue: number;

	readonly unsignedLongValue: number;

	readonly unsignedShortValue: number;

	static create(bool: boolean);

	static create(char: number);

	static create(double: number);

	static create(float: number);

	static create(int: number);

	static create(integer: number);

	static create(long: number);

	static create(longLong: number);

	static create(short: number);

	static create(unsignedChar: number);

	static create(unsignedInt: number);

	static create(unsignedInteger: number);

	static create(unsignedLong: number);

	static create(unsignedLongLong: number);

	static create(unsignedShort: number);

	compare(_: number): NSComparisonResult;

	descriptionWithLocale(_?: any): string;

	isEqualToNumber(_: number): boolean;
}

declare class NSNumberFormatter extends NSFormatter {

	static defaultFormatterBehavior(): NSNumberFormatterBehavior;

	static localizedStringFromNumberNumberStyle(_: number, numberStyle: NSNumberFormatterStyle): string;

	static setDefaultFormatterBehavior(_: NSNumberFormatterBehavior): void;

	setAllowsFloats(_: boolean)

	allowsFloats: boolean;

	setAlwaysShowsDecimalSeparator(_: boolean)

	alwaysShowsDecimalSeparator: boolean;

	setAttributedStringForNil(_: NSAttributedString)

	attributedStringForNil: NSAttributedString;

	setAttributedStringForNotANumber(_: NSAttributedString)

	attributedStringForNotANumber: NSAttributedString;

	setAttributedStringForZero(_: NSAttributedString)

	attributedStringForZero: NSAttributedString;

	setCurrencyCode(_: string)

	currencyCode: string;

	setCurrencyDecimalSeparator(_: string)

	currencyDecimalSeparator: string;

	setCurrencyGroupingSeparator(_: string)

	currencyGroupingSeparator: string;

	setCurrencySymbol(_: string)

	currencySymbol: string;

	setDecimalSeparator(_: string)

	decimalSeparator: string;

	setExponentSymbol(_: string)

	exponentSymbol: string;

	setFormat(_: string)

	format: string;

	setFormatWidth(_: number)

	formatWidth: number;

	setFormatterBehavior(_: NSNumberFormatterBehavior)

	formatterBehavior: NSNumberFormatterBehavior;

	setFormattingContext(_: NSFormattingContext)

	formattingContext: NSFormattingContext;

	setGeneratesDecimalNumbers(_: boolean)

	generatesDecimalNumbers: boolean;

	setGroupingSeparator(_: string)

	groupingSeparator: string;

	setGroupingSize(_: number)

	groupingSize: number;

	setHasThousandSeparators(_: boolean)

	hasThousandSeparators: boolean;

	setInternationalCurrencySymbol(_: string)

	internationalCurrencySymbol: string;

	setLenient(_: boolean)

	isLenient: boolean;

	setLocale(_: NSLocale)

	locale: NSLocale;

	setLocalizesFormat(_: boolean)

	localizesFormat: boolean;

	setMaximum(_: number)

	maximum: number;

	setMaximumFractionDigits(_: number)

	maximumFractionDigits: number;

	setMaximumIntegerDigits(_: number)

	maximumIntegerDigits: number;

	setMaximumSignificantDigits(_: number)

	maximumSignificantDigits: number;

	setMinimum(_: number)

	minimum: number;

	setMinimumFractionDigits(_: number)

	minimumFractionDigits: number;

	setMinimumIntegerDigits(_: number)

	minimumIntegerDigits: number;

	setMinimumSignificantDigits(_: number)

	minimumSignificantDigits: number;

	setMinusSign(_: string)

	minusSign: string;

	setMultiplier(_: number)

	multiplier: number;

	setNegativeFormat(_: string)

	negativeFormat: string;

	setNegativeInfinitySymbol(_: string)

	negativeInfinitySymbol: string;

	setNegativePrefix(_: string)

	negativePrefix: string;

	setNegativeSuffix(_: string)

	negativeSuffix: string;

	setNilSymbol(_: string)

	nilSymbol: string;

	setNotANumberSymbol(_: string)

	notANumberSymbol: string;

	setNumberStyle(_: NSNumberFormatterStyle)

	numberStyle: NSNumberFormatterStyle;

	setPaddingCharacter(_: string)

	paddingCharacter: string;

	setPaddingPosition(_: NSNumberFormatterPadPosition)

	paddingPosition: NSNumberFormatterPadPosition;

	setPartialStringValidationEnabled(_: boolean)

	isPartialStringValidationEnabled: boolean;

	setPerMillSymbol(_: string)

	perMillSymbol: string;

	setPercentSymbol(_: string)

	percentSymbol: string;

	setPlusSign(_: string)

	plusSign: string;

	setPositiveFormat(_: string)

	positiveFormat: string;

	setPositiveInfinitySymbol(_: string)

	positiveInfinitySymbol: string;

	setPositivePrefix(_: string)

	positivePrefix: string;

	setPositiveSuffix(_: string)

	positiveSuffix: string;

	setRoundingBehavior(_: NSDecimalNumberHandler)

	roundingBehavior: NSDecimalNumberHandler;

	setRoundingIncrement(_: number)

	roundingIncrement: number;

	setRoundingMode(_: NSNumberFormatterRoundingMode)

	roundingMode: NSNumberFormatterRoundingMode;

	setSecondaryGroupingSize(_: number)

	secondaryGroupingSize: number;

	setTextAttributesForNegativeInfinity(_: NSDictionary<string, any>)

	textAttributesForNegativeInfinity: NSDictionary<string, any>;

	setTextAttributesForNegativeValues(_: NSDictionary<string, any>)

	textAttributesForNegativeValues: NSDictionary<string, any>;

	setTextAttributesForNil(_: NSDictionary<string, any>)

	textAttributesForNil: NSDictionary<string, any>;

	setTextAttributesForNotANumber(_: NSDictionary<string, any>)

	textAttributesForNotANumber: NSDictionary<string, any>;

	setTextAttributesForPositiveInfinity(_: NSDictionary<string, any>)

	textAttributesForPositiveInfinity: NSDictionary<string, any>;

	setTextAttributesForPositiveValues(_: NSDictionary<string, any>)

	textAttributesForPositiveValues: NSDictionary<string, any>;

	setTextAttributesForZero(_: NSDictionary<string, any>)

	textAttributesForZero: NSDictionary<string, any>;

	setThousandSeparator(_: string)

	thousandSeparator: string;

	setUsesGroupingSeparator(_: boolean)

	usesGroupingSeparator: boolean;

	setUsesSignificantDigits(_: boolean)

	usesSignificantDigits: boolean;

	setZeroSymbol(_: string)

	zeroSymbol: string;

	getObjectValueForStringRangeError(forString?: any, range: string, error?: NSRange): boolean;

	numberFromString(_: string): number;

	stringFromNumber(_: number): string;
}

enum NSNumberFormatterBehavior {

	BehaviorDefault = 0,

	Behavior10_0 = 1000,

	Behavior10_4 = 1040
}

globalThis.NSNumberFormatterBehavior = NSNumberFormatterBehavior;

enum NSNumberFormatterPadPosition {

	BeforePrefix = 0,

	AfterPrefix = 1,

	BeforeSuffix = 2,

	AfterSuffix = 3
}

globalThis.NSNumberFormatterPadPosition = NSNumberFormatterPadPosition;

enum NSNumberFormatterRoundingMode {

	Ceiling = 0,

	Floor = 1,

	Down = 2,

	Up = 3,

	HalfEven = 4,

	HalfDown = 5,

	HalfUp = 6
}

globalThis.NSNumberFormatterRoundingMode = NSNumberFormatterRoundingMode;

enum NSNumberFormatterStyle {

	NoStyle = 0,

	DecimalStyle = 1,

	CurrencyStyle = 2,

	PercentStyle = 3,

	ScientificStyle = 4,

	SpellOutStyle = 5,

	OrdinalStyle = 6,

	CurrencyISOCodeStyle = 8,

	CurrencyPluralStyle = 9,

	CurrencyAccountingStyle = 10
}

globalThis.NSNumberFormatterStyle = NSNumberFormatterStyle;

declare const NSOSF1OperatingSystem: number;

declare var NSOSStatusErrorDomain: string;

declare var NSObjectHashCallBacks: NSHashTableCallBacks;

declare var NSObjectInaccessibleException: string;

declare var NSObjectMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSObjectMapValueCallBacks: NSMapTableValueCallBacks;

declare var NSObjectNotAvailableException: string;

declare function NSOffsetRect(aRect: CGRect, dX: number, dY: number): CGRect;

declare var NSOldStyleException: string;

declare function NSOpenStepRootDirectory(): string;

declare const NSOpenStepUnicodeReservedBase: number;

interface NSOperatingSystemVersion {
	majorVersion: number;
	minorVersion: number;
	patchVersion: number;
}
declare var NSOperatingSystemVersion: NSOperatingSystemVersion;

declare class NSOperation extends NSObject {

	readonly isAsynchronous: boolean;

	readonly isCancelled: boolean;

	setCompletionBlock(_: () => void)

	completionBlock: () => void;

	readonly isConcurrent: boolean;

	readonly dependencies: NSArray<NSOperation>;

	readonly isExecuting: boolean;

	readonly isFinished: boolean;

	setName(_: string)

	name: string;

	setQualityOfService(_: NSQualityOfService)

	qualityOfService: NSQualityOfService;

	setQueuePriority(_: NSOperationQueuePriority)

	queuePriority: NSOperationQueuePriority;

	readonly isReady: boolean;

	addDependency(_: NSOperation): void;

	cancel(): void;

	main(): void;

	removeDependency(_: NSOperation): void;

	start(): void;

	waitUntilFinished(): void;
}

declare var NSOperationNotSupportedForKeyException: string;

declare const NSOperationNotSupportedForKeyScriptError: number;

declare const NSOperationNotSupportedForKeySpecifierError: number;

declare class NSOperationQueue extends NSObject implements NSProgressReporting {

	setMaxConcurrentOperationCount(_: number)

	maxConcurrentOperationCount: number;

	setName(_: string)

	name: string;

	readonly operationCount: number;

	readonly operations: NSArray<NSOperation>;

	setQualityOfService(_: NSQualityOfService)

	qualityOfService: NSQualityOfService;

	setSuspended(_: boolean)

	isSuspended: boolean;

	setUnderlyingQueue(_: NSObject)

	underlyingQueue: NSObject;

	static currentQueue(): NSOperationQueue;

	static mainQueue(): NSOperationQueue;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly progress: NSProgress; // inherited from NSProgressReporting

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	addBarrierBlock(_: () => void): void;

	addOperation(_: NSOperation): void;

	addOperationWithBlock(_: () => void): void;

	addOperationsWaitUntilFinished(_: NSArray<NSOperation>, waitUntilFinished: boolean): void;

	cancelAllOperations(): void;

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

	waitUntilAllOperationsAreFinished(): void;
}

declare var NSOperationQueueDefaultMaxConcurrentOperationCount: number;

enum NSOperationQueuePriority {

	VeryLow = -8,

	Low = -4,

	Normal = 0,

	High = 4,

	VeryHigh = 8
}

globalThis.NSOperationQueuePriority = NSOperationQueuePriority;

declare class NSOrderedCollectionChange<ObjectType> extends NSObject {

	static changeWithObjectTypeIndex<ObjectType>(_?: ObjectType, type: NSCollectionChangeType, index: number): NSOrderedCollectionChange<ObjectType>;

	static changeWithObjectTypeIndexAssociatedIndex<ObjectType>(_?: ObjectType, type: NSCollectionChangeType, index: number, associatedIndex: number): NSOrderedCollectionChange<ObjectType>;

	readonly associatedIndex: number;

	readonly changeType: NSCollectionChangeType;

	readonly index: number;

	readonly object: ObjectType;

	static create(object: ObjectType, type: NSCollectionChangeType, index: number);

	static create(object: ObjectType, type: NSCollectionChangeType, index: number, associatedIndex: number);
}

declare class NSOrderedCollectionDifference<ObjectType> extends NSObject implements NSFastEnumeration {

	readonly hasChanges: boolean;

	readonly insertions: NSArray<NSOrderedCollectionChange<ObjectType>>;

	readonly removals: NSArray<NSOrderedCollectionChange<ObjectType>>;

	static create(changes: NSArray<NSOrderedCollectionChange<ObjectType>> | NSOrderedCollectionChange<ObjectType>[]);

	static create(insertIndexes: NSIndexSet, insertedObjects: NSArray<ObjectType> | ObjectType[], removeIndexes: NSIndexSet, removedObjects: NSArray<ObjectType> | ObjectType[]);

	static create(insertIndexes: NSIndexSet, insertedObjects: NSArray<ObjectType> | ObjectType[], removeIndexes: NSIndexSet, removedObjects: NSArray<ObjectType> | ObjectType[], additionalChanges: NSArray<NSOrderedCollectionChange<ObjectType>> | NSOrderedCollectionChange<ObjectType>[]);

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	differenceByTransformingChangesWithBlock(_: (p1: NSOrderedCollectionChange<ObjectType>) => NSOrderedCollectionChange<any>): NSOrderedCollectionDifference<any>;

	inverseDifference(): this;
}

enum NSOrderedCollectionDifferenceCalculationOptions {

	OmitInsertedObjects = 1,

	OmitRemovedObjects = 2,

	InferMoves = 4
}

globalThis.NSOrderedCollectionDifferenceCalculationOptions = NSOrderedCollectionDifferenceCalculationOptions;

declare class NSOrderedSet<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding {

	static orderedSet<ObjectType>(): NSOrderedSet<ObjectType>;

	static orderedSetWithArray<ObjectType>(_: NSArray<ObjectType>): NSOrderedSet<ObjectType>;

	static orderedSetWithArrayRangeCopyItems<ObjectType>(_: NSArray<ObjectType>, range: NSRange, copyItems: boolean): NSOrderedSet<ObjectType>;

	static orderedSetWithObject<ObjectType>(_: ObjectType): NSOrderedSet<ObjectType>;

	static orderedSetWithObjects<ObjectType>(_: ObjectType): NSOrderedSet<ObjectType>;

	static orderedSetWithObjectsCount<ObjectType>(_: ObjectType, count: number): NSOrderedSet<ObjectType>;

	static orderedSetWithOrderedSet<ObjectType>(_: NSOrderedSet<ObjectType>): NSOrderedSet<ObjectType>;

	static orderedSetWithOrderedSetWithRangeCopyItems<ObjectType>(_: NSOrderedSet<ObjectType>, range: NSRange, copyItems: boolean): NSOrderedSet<ObjectType>;

	static orderedSetWithSet<ObjectType>(_: NSSet<ObjectType>): NSOrderedSet<ObjectType>;

	static orderedSetWithSetWithCopyItems<ObjectType>(_: NSSet<ObjectType>, copyItems: boolean): NSOrderedSet<ObjectType>;

	readonly array: NSArray<ObjectType>;

	readonly count: number;

	readonly firstObject: ObjectType;

	readonly lastObject: ObjectType;

	readonly reversedOrderedSet: NSOrderedSet<ObjectType>;

	readonly set: NSSet<ObjectType>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(array: NSArray<ObjectType> | ObjectType[]);

	static create(array: NSArray<ObjectType> | ObjectType[], copyItems: boolean);

	static create(array: NSArray<ObjectType> | ObjectType[], range: NSRange, copyItems: boolean);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(object: ObjectType);

	static create(objects: ObjectType);

	static create(objects: ObjectType, count: number);

	static create(orderedSet: NSOrderedSet<ObjectType>);

	static create(orderedSet: NSOrderedSet<ObjectType>, copyItems: boolean);

	static create(orderedSet: NSOrderedSet<ObjectType>, range: NSRange, copyItems: boolean);

	static create(set: NSSet<ObjectType>);

	static create(set: NSSet<ObjectType>, copyItems: boolean);

	containsObject(_: ObjectType): boolean;

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	descriptionWithLocale(_?: any): string;

	descriptionWithLocaleIndent(_?: any, indent: number): string;

	encodeWithCoder(_: NSCoder): void;

	enumerateObjectsAtIndexesOptionsUsingBlock(_: NSIndexSet, options: NSEnumerationOptions, usingBlock: (p1: ObjectType, p2: number, p3: boolean) => void): void;

	enumerateObjectsUsingBlock(_: (p1: ObjectType, p2: number, p3: boolean) => void): void;

	enumerateObjectsWithOptionsUsingBlock(options: NSEnumerationOptions, using: (p1: ObjectType, p2: number, p3: boolean) => void): void;

	filteredOrderedSetUsingPredicate(using: NSPredicate): NSOrderedSet<ObjectType>;

	indexOfObject(_: ObjectType): number;

	indexOfObjectInSortedRangeOptionsUsingComparator(_: ObjectType, inSortedRange: NSRange, options: NSBinarySearchingOptions, usingComparator: (p1: any, p2: any) => NSComparisonResult): number;

	indexOfObjectAtIndexesOptionsPassingTest(ofObjectAt: NSIndexSet, options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;

	indexOfObjectPassingTest(ofObjectPassingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;

	indexOfObjectWithOptionsPassingTest(_: NSEnumerationOptions, ofObjectPassingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;

	indexesOfObjectsAtIndexesOptionsPassingTest(ofObjectsAt: NSIndexSet, options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): NSIndexSet;

	indexesOfObjectsPassingTest(ofObjectsPassingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): NSIndexSet;

	indexesOfObjectsWithOptionsPassingTest(options: NSEnumerationOptions, ofObjectsPassingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): NSIndexSet;

	intersectsOrderedSet(_: NSOrderedSet<ObjectType>): boolean;

	intersectsSet(_: NSSet<ObjectType>): boolean;

	isEqualToOrderedSet(_: NSOrderedSet<ObjectType>): boolean;

	isSubsetOfOrderedSet(_: NSOrderedSet<ObjectType>): boolean;

	isSubsetOfSet(_: NSSet<ObjectType>): boolean;

	mutableCopyWithZone(_?: any): any;

	objectAtIndex(_: number): ObjectType;

	objectAtIndexedSubscript(_: number): ObjectType;

	objectEnumerator(): NSEnumerator<ObjectType>;

	objectsAtIndexes(_: NSIndexSet): NSArray<ObjectType>;

	reverseObjectEnumerator(): NSEnumerator<ObjectType>;

	sortedArrayUsingComparator(_: (p1: any, p2: any) => NSComparisonResult): NSArray<ObjectType>;

	sortedArrayUsingDescriptors(_: NSArray<NSSortDescriptor>): NSArray<ObjectType>;

	sortedArrayWithOptionsUsingComparator(_: NSSortOptions, usingComparator: (p1: any, p2: any) => NSComparisonResult): NSArray<ObjectType>;
}

declare class NSOrthography extends NSObject implements NSCopying, NSSecureCoding {

	static defaultOrthographyForLanguage(_: string): NSOrthography;

	static orthographyWithDominantScriptLanguageMap(_: string, languageMap: NSDictionary<string, NSArray<string>>): NSOrthography;

	readonly allLanguages: NSArray<string>;

	readonly allScripts: NSArray<string>;

	readonly dominantLanguage: string;

	readonly dominantScript: string;

	readonly languageMap: NSDictionary<string, NSArray<string>>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(dominantScript: string, languageMap: NSDictionary<string, NSArray<string>>);

	copyWithZone(_?: any): any;

	dominantLanguageForScript(_: string): string;

	encodeWithCoder(_: NSCoder): void;

	languagesForScript(_: string): NSArray<string>;
}

declare class NSOutputStream extends NSStream {

	static outputStreamToBufferCapacity(_: string, capacity: number): NSOutputStream;

	static outputStreamToFileAtPathAppend(_: string, append: boolean): NSOutputStream;

	static outputStreamToMemory(): NSOutputStream;

	static outputStreamWithURLAppend(_: NSURL, append: boolean): NSOutputStream;

	readonly hasSpaceAvailable: boolean;

	static create(toBuffer: string | any, capacity: number);

	static create(toFileAtPath: string, append: boolean);

	static create(toMemory: void);

	static create(URL: NSURL, append: boolean);

	writeMaxLength(_: string, maxLength: number): number;
}

declare var NSOwnedObjectIdentityHashCallBacks: NSHashTableCallBacks;

declare var NSOwnedPointerHashCallBacks: NSHashTableCallBacks;

declare var NSOwnedPointerMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSOwnedPointerMapValueCallBacks: NSMapTableValueCallBacks;

declare var NSPOSIXErrorDomain: string;

declare function NSPageSize(): number;

declare var NSParseErrorException: string;

declare var NSPersonNameComponentDelimiter: string;

declare var NSPersonNameComponentFamilyName: string;

declare var NSPersonNameComponentGivenName: string;

declare var NSPersonNameComponentKey: string;

declare var NSPersonNameComponentMiddleName: string;

declare var NSPersonNameComponentNickname: string;

declare var NSPersonNameComponentPrefix: string;

declare var NSPersonNameComponentSuffix: string;

declare class NSPersonNameComponents extends NSObject implements NSCopying, NSSecureCoding {

	setFamilyName(_: string)

	familyName: string;

	setGivenName(_: string)

	givenName: string;

	setMiddleName(_: string)

	middleName: string;

	setNamePrefix(_: string)

	namePrefix: string;

	setNameSuffix(_: string)

	nameSuffix: string;

	setNickname(_: string)

	nickname: string;

	setPhoneticRepresentation(_: NSPersonNameComponents)

	phoneticRepresentation: NSPersonNameComponents;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NSPersonNameComponentsFormatter extends NSFormatter {

	static localizedStringFromPersonNameComponentsStyleOptions(_: NSPersonNameComponents, style: NSPersonNameComponentsFormatterStyle, options: NSPersonNameComponentsFormatterOptions): string;

	setPhonetic(_: boolean)

	isPhonetic: boolean;

	setStyle(_: NSPersonNameComponentsFormatterStyle)

	style: NSPersonNameComponentsFormatterStyle;

	annotatedStringFromPersonNameComponents(_: NSPersonNameComponents): NSAttributedString;

	personNameComponentsFromString(_: string): NSPersonNameComponents;

	stringFromPersonNameComponents(_: NSPersonNameComponents): string;
}

enum NSPersonNameComponentsFormatterOptions {

	Phonetic = 2
}

globalThis.NSPersonNameComponentsFormatterOptions = NSPersonNameComponentsFormatterOptions;

enum NSPersonNameComponentsFormatterStyle {

	Default = 0,

	Short = 1,

	Medium = 2,

	Long = 3,

	Abbreviated = 4
}

globalThis.NSPersonNameComponentsFormatterStyle = NSPersonNameComponentsFormatterStyle;

declare class NSPipe extends NSObject {

	static pipe(): NSPipe;

	readonly fileHandleForReading: NSFileHandle;

	readonly fileHandleForWriting: NSFileHandle;
}

declare function NSPointFromString(aString: string): CGPoint;

declare function NSPointInRect(aPoint: CGPoint, aRect: CGRect): boolean;

declare class NSPointerArray extends NSObject implements NSCopying, NSFastEnumeration, NSSecureCoding {

	static pointerArrayWithOptions(_: NSPointerFunctionsOptions): NSPointerArray;

	static pointerArrayWithPointerFunctions(_: NSPointerFunctions): NSPointerArray;

	static strongObjectsPointerArray(): NSPointerArray;

	static weakObjectsPointerArray(): NSPointerArray;

	readonly allObjects: NSArray<any>;

	setCount(_: number)

	count: number;

	readonly pointerFunctions: NSPointerFunctions;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(options: NSPointerFunctionsOptions);

	static create(pointerFunctions: NSPointerFunctions);

	addPointer(_?: any): void;

	compact(): void;

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	encodeWithCoder(_: NSCoder): void;

	insertPointerAtIndex(_?: any, atIndex: number): void;

	pointerAtIndex(_: number): any;

	removePointerAtIndex(_: number): void;

	replacePointerAtIndexWithPointer(_: number, withPointer?: any): void;
}

declare class NSPointerFunctions extends NSObject implements NSCopying {

	static pointerFunctionsWithOptions(_: NSPointerFunctionsOptions): NSPointerFunctions;

	setAcquireFunction(_: (p1: any, p2: (p1: any) => number, p3: boolean) => any)

	acquireFunction: (p1: any, p2: (p1: any) => number, p3: boolean) => any;

	setDescriptionFunction(_: (p1: any) => string)

	descriptionFunction: (p1: any) => string;

	setHashFunction(_: (p1: any, p2: (p1: any) => number) => number)

	hashFunction: (p1: any, p2: (p1: any) => number) => number;

	setIsEqualFunction(_: (p1: any, p2: any, p3: (p1: any) => number) => boolean)

	isEqualFunction: (p1: any, p2: any, p3: (p1: any) => number) => boolean;

	setRelinquishFunction(_: (p1: any, p2: (p1: any) => number) => void)

	relinquishFunction: (p1: any, p2: (p1: any) => number) => void;

	setSizeFunction(_: (p1: any) => number)

	sizeFunction: (p1: any) => number;

	static create(options: NSPointerFunctionsOptions);

	copyWithZone(_?: any): any;
}

enum NSPointerFunctionsOptions {

	StrongMemory = 0,

	ZeroingWeakMemory = 1,

	OpaqueMemory = 2,

	MallocMemory = 3,

	MachVirtualMemory = 4,

	WeakMemory = 5,

	ObjectPersonality = 0,

	OpaquePersonality = 256,

	ObjectPointerPersonality = 512,

	CStringPersonality = 768,

	StructPersonality = 1024,

	IntegerPersonality = 1280,

	CopyIn = 65536
}

globalThis.NSPointerFunctionsOptions = NSPointerFunctionsOptions;

declare var NSPointerToStructHashCallBacks: NSHashTableCallBacks;

declare class NSPort extends NSObject implements NSCoding, NSCopying {

	static port(): NSPort;

	readonly reservedSpaceLength: number;

	readonly isValid: boolean;

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	delegate(): NSPortDelegate;

	encodeWithCoder(_: NSCoder): void;

	invalidate(): void;

	removeFromRunLoopForMode(_: NSRunLoop, forMode: string): void;

	scheduleInRunLoopForMode(_: NSRunLoop, forMode: string): void;

	sendBeforeDateWithComponentsFromReserved(_: Date, components?: NSMutableArray<any>, from?: NSPort, reserved: number): boolean;

	sendBeforeDateWithMsgidComponentsFromReserved(_: Date, msgid: number, components?: NSMutableArray<any>, from?: NSPort, reserved: number): boolean;

	setDelegate(_?: NSPortDelegate): void;
}

interface NSPortDelegate extends NSObjectProtocol {

	handlePortMessage?(_: NSPortMessage): void;
}
declare var NSPortDelegate: {

	prototype: NSPortDelegate;
};

declare var NSPortDidBecomeInvalidNotification: string;

declare class NSPortMessage extends NSObject {

	readonly components: NSArray<any>;

	setMsgid(_: number)

	msgid: number;

	readonly receivePort: NSPort;

	readonly sendPort: NSPort;

	static create(sendPort: NSPort, receivePort: NSPort, components: NSArray<any> | any[]);

	sendBeforeDate(_: Date): boolean;
}

declare var NSPortReceiveException: string;

declare var NSPortSendException: string;

declare var NSPortTimeoutException: string;

declare class NSPositionalSpecifier extends NSObject {

	readonly insertionContainer: any;

	readonly insertionIndex: number;

	readonly insertionKey: string;

	readonly insertionReplaces: boolean;

	readonly position: NSInsertionPosition;

	static create(position: NSInsertionPosition, objectSpecifier: NSScriptObjectSpecifier);

	evaluate(): void;

	setInsertionClassDescription(_: NSScriptClassDescription): void;
}

enum NSPostingStyle {

	WhenIdle = 1,

	ASAP = 2,

	Now = 3
}

globalThis.NSPostingStyle = NSPostingStyle;

declare class NSPredicate extends NSObject implements NSCopying, NSSecureCoding {

	static predicateFromMetadataQueryString(_: string): NSPredicate;

	static predicateWithBlock(_?: (p1: any, p2: NSDictionary<string, any>) => boolean): NSPredicate;

	static predicateWithFormatArgumentArray(_: string, argumentArray?: NSArray<any>): NSPredicate;

	static predicateWithValue(_: boolean): NSPredicate;

	readonly predicateFormat: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	allowEvaluation(): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	evaluateWithObject(_?: any): boolean;

	evaluateWithObjectSubstitutionVariables(_?: any, substitutionVariables?: NSDictionary<string, any>): boolean;

	predicateWithSubstitutionVariables(_: NSDictionary<string, any>): this;
}

enum NSPredicateOperatorType {

	LessThanPredicateOperatorType = 0,

	LessThanOrEqualToPredicateOperatorType = 1,

	GreaterThanPredicateOperatorType = 2,

	GreaterThanOrEqualToPredicateOperatorType = 3,

	EqualToPredicateOperatorType = 4,

	NotEqualToPredicateOperatorType = 5,

	MatchesPredicateOperatorType = 6,

	LikePredicateOperatorType = 7,

	BeginsWithPredicateOperatorType = 8,

	EndsWithPredicateOperatorType = 9,

	InPredicateOperatorType = 10,

	CustomSelectorPredicateOperatorType = 11,

	ContainsPredicateOperatorType = 99,

	BetweenPredicateOperatorType = 100
}

globalThis.NSPredicateOperatorType = NSPredicateOperatorType;

declare class NSProcessInfo extends NSObject {

	readonly activeProcessorCount: number;

	readonly arguments: NSArray<string>;

	setAutomaticTerminationSupportEnabled(_: boolean)

	automaticTerminationSupportEnabled: boolean;

	readonly environment: NSDictionary<string, string>;

	readonly fullUserName: string;

	readonly globallyUniqueString: string;

	readonly hostName: string;

	readonly isMacCatalystApp: boolean;

	readonly operatingSystemVersion: NSOperatingSystemVersion;

	readonly operatingSystemVersionString: string;

	readonly physicalMemory: number;

	readonly processIdentifier: number;

	setProcessName(_: string)

	processName: string;

	readonly processorCount: number;

	readonly systemUptime: number;

	readonly thermalState: NSProcessInfoThermalState;

	readonly userName: string;

	static processInfo(): NSProcessInfo;

	beginActivityWithOptionsReason(_: NSActivityOptions, reason: string): NSObjectProtocol;

	disableAutomaticTermination(_: string): void;

	disableSuddenTermination(): void;

	enableAutomaticTermination(_: string): void;

	enableSuddenTermination(): void;

	endActivity(_: NSObjectProtocol): void;

	isOperatingSystemAtLeastVersion(_: NSOperatingSystemVersion): boolean;

	performActivityWithOptionsReasonUsingBlock(_: NSActivityOptions, reason: string, usingBlock: () => void): void;
}

enum NSProcessInfoThermalState {

	Nominal = 0,

	Fair = 1,

	Serious = 2,

	Critical = 3
}

globalThis.NSProcessInfoThermalState = NSProcessInfoThermalState;

declare var NSProcessInfoThermalStateDidChangeNotification: string;

declare class NSProgress extends NSObject {

	static addSubscriberForFileURLWithPublishingHandler(_: NSURL, withPublishingHandler: (p1: NSProgress) => () => void): any;

	static currentProgress(): NSProgress;

	static discreteProgressWithTotalUnitCount(totalUnitCount: number): NSProgress;

	static progressWithTotalUnitCount(_: number): NSProgress;

	static progressWithTotalUnitCountParentPendingUnitCount(_: number, parent: NSProgress, pendingUnitCount: number): NSProgress;

	static removeSubscriber(_: any): void;

	setCancellable(_: boolean)

	isCancellable: boolean;

	setCancellationHandler(_: () => void)

	cancellationHandler: () => void;

	readonly isCancelled: boolean;

	setCompletedUnitCount(_: number)

	completedUnitCount: number;

	setEstimatedTimeRemaining(_: number)

	estimatedTimeRemaining: number;

	setFileCompletedCount(_: number)

	fileCompletedCount: number;

	setFileOperationKind(_: string)

	fileOperationKind: string;

	setFileTotalCount(_: number)

	fileTotalCount: number;

	setFileURL(_: NSURL)

	fileURL: NSURL;

	readonly isFinished: boolean;

	readonly fractionCompleted: number;

	readonly isIndeterminate: boolean;

	setKind(_: string)

	kind: string;

	setLocalizedAdditionalDescription(_: string)

	localizedAdditionalDescription: string;

	setLocalizedDescription(_: string)

	localizedDescription: string;

	readonly isOld: boolean;

	setPausable(_: boolean)

	isPausable: boolean;

	readonly isPaused: boolean;

	setPausingHandler(_: () => void)

	pausingHandler: () => void;

	setResumingHandler(_: () => void)

	resumingHandler: () => void;

	setThroughput(_: number)

	throughput: number;

	setTotalUnitCount(_: number)

	totalUnitCount: number;

	readonly userInfo: NSDictionary<string, any>;

	static create(parent: NSProgress, userInfo: NSDictionary<string, any>);

	addChildWithPendingUnitCount(_: NSProgress, withPendingUnitCount: number): void;

	becomeCurrentWithPendingUnitCount(_: number): void;

	cancel(): void;

	pause(): void;

	performAsCurrentWithPendingUnitCountUsingBlock(_: number, usingBlock: () => void): void;

	publish(): void;

	resignCurrent(): void;

	resume(): void;

	setUserInfoObjectForKey(_?: any, forKey: string): void;

	unpublish(): void;
}

declare var NSProgressEstimatedTimeRemainingKey: string;

declare var NSProgressFileAnimationImageKey: string;

declare var NSProgressFileAnimationImageOriginalRectKey: string;

declare var NSProgressFileCompletedCountKey: string;

declare var NSProgressFileIconKey: string;

declare var NSProgressFileOperationKindCopying: string;

declare var NSProgressFileOperationKindDecompressingAfterDownloading: string;

declare var NSProgressFileOperationKindDownloading: string;

declare var NSProgressFileOperationKindKey: string;

declare var NSProgressFileOperationKindReceiving: string;

declare var NSProgressFileTotalCountKey: string;

declare var NSProgressFileURLKey: string;

declare var NSProgressKindFile: string;

interface NSProgressReporting extends NSObjectProtocol {

	progress: NSProgress;
}
declare var NSProgressReporting: {

	prototype: NSProgressReporting;
};

declare var NSProgressThroughputKey: string;

declare const NSPropertyListErrorMaximum: number;

declare const NSPropertyListErrorMinimum: number;

enum NSPropertyListFormat {

	OpenStepFormat = 1,

	XMLFormat_v1_0 = 100,

	BinaryFormat_v1_0 = 200
}

globalThis.NSPropertyListFormat = NSPropertyListFormat;

enum NSPropertyListMutabilityOptions {

	Immutable = 0,

	MutableContainers = 1,

	MutableContainersAndLeaves = 2
}

globalThis.NSPropertyListMutabilityOptions = NSPropertyListMutabilityOptions;

declare const NSPropertyListReadCorruptError: number;

declare const NSPropertyListReadStreamError: number;

declare const NSPropertyListReadUnknownVersionError: number;

declare class NSPropertyListSerialization extends NSObject {

	static dataWithPropertyListFormatOptionsError(fromPropertyList: any, format: NSPropertyListFormat, options: number): NSData;

	static propertyListIsValidForFormat(_: any, isValidForFormat: NSPropertyListFormat): boolean;

	static propertyListWithDataOptionsFormatError(from: NSData, options: NSPropertyListMutabilityOptions, format?: NSPropertyListFormat): any;

	static propertyListWithStreamOptionsFormatError(options: NSInputStream, format: NSPropertyListMutabilityOptions, error?: NSPropertyListFormat): any;

	static writePropertyListToStreamFormatOptionsError(toStream: any, format: NSOutputStream, options: NSPropertyListFormat, error: number): number;
}

declare const NSPropertyListWriteInvalidError: number;

declare const NSPropertyListWriteStreamError: number;

declare class NSPropertySpecifier extends NSScriptObjectSpecifier {
}

declare const NSProprietaryStringEncoding: number;

declare class NSProtocolChecker extends NSProxy {

	static alloc(): NSProtocolChecker; // inherited from NSProxy

	static allocWithZone(_?: any): NSProtocolChecker; // inherited from NSProxy

	static protocolCheckerWithTargetProtocol(_: NSObject, protocol: any /* Protocol */): NSProtocolChecker;

	readonly protocol: any /* Protocol */;

	readonly target: NSObject;

	static create(target: NSObject, protocol: any /* Protocol */);
}

declare function NSProtocolFromString(namestr: string): any /* Protocol */;

declare class NSProxy implements NSObjectProtocol {

	static alloc(): NSProxy;

	static allocWithZone(_?: any): NSProxy;

	static class(): typeof NSObject;

	static respondsToSelector(_: string): boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	dealloc(): void;

	finalize(): void;

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

declare class NSPurgeableData extends NSMutableData implements NSDiscardableContent {

	static data(): NSPurgeableData; // inherited from NSData

	static dataWithBytesLength(_?: any, length: number): NSPurgeableData; // inherited from NSData

	static dataWithBytesNoCopyLength(_: any, length: number): NSPurgeableData; // inherited from NSData

	static dataWithBytesNoCopyLengthFreeWhenDone(_: any, length: number, freeWhenDone: boolean): NSPurgeableData; // inherited from NSData

	static dataWithCapacity(_: number): NSPurgeableData; // inherited from NSMutableData

	static dataWithContentsOfFile(_: string): NSPurgeableData; // inherited from NSData

	static dataWithContentsOfFileOptionsError(options: string, error: NSDataReadingOptions): NSPurgeableData; // inherited from NSData

	static dataWithContentsOfURL(_: NSURL): NSPurgeableData; // inherited from NSData

	static dataWithContentsOfURLOptionsError(options: NSURL, error: NSDataReadingOptions): NSPurgeableData; // inherited from NSData

	static dataWithData(_: NSData): NSPurgeableData; // inherited from NSData

	static dataWithLength(_: number): NSPurgeableData; // inherited from NSMutableData

	beginContentAccess(): boolean;

	discardContentIfPossible(): void;

	endContentAccess(): void;

	isContentDiscarded(): boolean;
}

enum NSQualityOfService {

	UserInteractive = 33,

	UserInitiated = 25,

	Utility = 17,

	Background = 9,

	Default = -1
}

globalThis.NSQualityOfService = NSQualityOfService;

declare class NSQuitCommand extends NSScriptCommand {

	readonly saveOptions: NSSaveOptions;
}

declare class NSRandomSpecifier extends NSScriptObjectSpecifier {
}

interface NSRange {
	location: number;
	length: number;
}
declare var NSRange: NSRange;

declare var NSRangeException: string;

declare function NSRangeFromString(aString: string): NSRange;

declare class NSRangeSpecifier extends NSScriptObjectSpecifier {

	setEndSpecifier(_: NSScriptObjectSpecifier)

	endSpecifier: NSScriptObjectSpecifier;

	setStartSpecifier(_: NSScriptObjectSpecifier)

	startSpecifier: NSScriptObjectSpecifier;

	static create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier, key: string, startSpecifier: NSScriptObjectSpecifier, endSpecifier: NSScriptObjectSpecifier);
}

declare const NSReceiverEvaluationScriptError: number;

declare const NSReceiversCantHandleCommandScriptError: number;

declare function NSRecordAllocationEvent(eventType: number, object_: any): void;

declare var NSRecoveryAttempterErrorKey: string;

enum NSRectEdge {

	RectEdgeMinX = 0,

	RectEdgeMinY = 1,

	RectEdgeMaxX = 2,

	RectEdgeMaxY = 3,

	MinXEdge = 0,

	MinYEdge = 1,

	MaxXEdge = 2,

	MaxYEdge = 3
}

globalThis.NSRectEdge = NSRectEdge;

declare function NSRectFromString(aString: string): CGRect;

declare class NSRecursiveLock extends NSObject implements NSLocking {

	setName(_: string)

	name: string;

	lock(): void;

	lockBeforeDate(_: Date): boolean;

	tryLock(): boolean;

	unlock(): void;
}

declare var NSRegistrationDomain: string;

declare class NSRegularExpression extends NSObject implements NSCopying, NSSecureCoding {

	static escapedPatternForString(_: string): string;

	static escapedTemplateForString(_: string): string;

	static regularExpressionWithPatternOptionsError(options: string, error: NSRegularExpressionOptions): NSRegularExpression;

	readonly numberOfCaptureGroups: number;

	readonly options: NSRegularExpressionOptions;

	readonly pattern: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(pattern: string, options: NSRegularExpressionOptions);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	enumerateMatchesInStringOptionsRangeUsingBlock(_: string, options: NSMatchingOptions, range: NSRange, usingBlock?: (p1: NSTextCheckingResult, p2: NSMatchingFlags, p3: boolean) => void): void;

	firstMatchInStringOptionsRange(_: string, options: NSMatchingOptions, range: NSRange): NSTextCheckingResult;

	matchesInStringOptionsRange(_: string, options: NSMatchingOptions, range: NSRange): NSArray<NSTextCheckingResult>;

	numberOfMatchesInStringOptionsRange(_: string, options: NSMatchingOptions, range: NSRange): number;

	rangeOfFirstMatchInStringOptionsRange(_: string, options: NSMatchingOptions, range: NSRange): NSRange;

	replaceMatchesInStringOptionsRangeWithTemplate(_: NSMutableString, options: NSMatchingOptions, range: NSRange, withTemplate: string): number;

	replacementStringForResultInStringOffsetTemplate(_: NSTextCheckingResult, inString: string, offset: number, template: string): string;

	stringByReplacingMatchesInStringOptionsRangeWithTemplate(_: string, options: NSMatchingOptions, range: NSRange, withTemplate: string): string;
}

enum NSRegularExpressionOptions {

	CaseInsensitive = 1,

	AllowCommentsAndWhitespace = 2,

	IgnoreMetacharacters = 4,

	DotMatchesLineSeparators = 8,

	AnchorsMatchLines = 16,

	UseUnixLineSeparators = 32,

	UseUnicodeWordBoundaries = 64
}

globalThis.NSRegularExpressionOptions = NSRegularExpressionOptions;

declare class NSRelativeDateTimeFormatter extends NSFormatter {

	setCalendar(_: NSCalendar)

	calendar: NSCalendar;

	setDateTimeStyle(_: NSRelativeDateTimeFormatterStyle)

	dateTimeStyle: NSRelativeDateTimeFormatterStyle;

	setFormattingContext(_: NSFormattingContext)

	formattingContext: NSFormattingContext;

	setLocale(_: NSLocale)

	locale: NSLocale;

	setUnitsStyle(_: NSRelativeDateTimeFormatterUnitsStyle)

	unitsStyle: NSRelativeDateTimeFormatterUnitsStyle;

	localizedStringForDateRelativeToDate(_: Date, relativeToDate: Date): string;

	localizedStringFromDateComponents(_: NSDateComponents): string;

	localizedStringFromTimeInterval(_: number): string;
}

enum NSRelativeDateTimeFormatterStyle {

	Numeric = 0,

	Named = 1
}

globalThis.NSRelativeDateTimeFormatterStyle = NSRelativeDateTimeFormatterStyle;

enum NSRelativeDateTimeFormatterUnitsStyle {

	Full = 0,

	SpellOut = 1,

	Short = 2,

	Abbreviated = 3
}

globalThis.NSRelativeDateTimeFormatterUnitsStyle = NSRelativeDateTimeFormatterUnitsStyle;

enum NSRelativePosition {

	After = 0,

	Before = 1
}

globalThis.NSRelativePosition = NSRelativePosition;

declare class NSRelativeSpecifier extends NSScriptObjectSpecifier {

	setBaseSpecifier(_: NSScriptObjectSpecifier)

	baseSpecifier: NSScriptObjectSpecifier;

	setRelativePosition(_: NSRelativePosition)

	relativePosition: NSRelativePosition;

	static create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier, key: string, relativePosition: NSRelativePosition, baseSpecifier: NSScriptObjectSpecifier);
}

declare const NSRequiredArgumentsMissingScriptError: number;

declare function NSResetHashTable(table: NSHashTable<any>): void;

declare function NSResetMapTable(table: NSMapTable<any, any>): void;

declare function NSReturnAddress(frame: number): any;

declare function NSRoundDownToMultipleOfPageSize(bytes: number): number;

declare function NSRoundUpToMultipleOfPageSize(bytes: number): number;

enum NSRoundingMode {

	Plain = 0,

	Down = 1,

	Up = 2,

	Bankers = 3
}

globalThis.NSRoundingMode = NSRoundingMode;

declare class NSRunLoop extends NSObject {

	readonly currentMode: string;

	static currentRunLoop(): NSRunLoop;

	static mainRunLoop(): NSRunLoop;

	acceptInputForModeBeforeDate(_: string, beforeDate: Date): void;

	addPortForMode(_: NSPort, forMode: string): void;

	addTimerForMode(_: NSTimer, forMode: string): void;

	cancelPerformSelectorTargetArgument(_: string, target: any, argument?: any): void;

	cancelPerformSelectorsWithTarget(_: any): void;

	getCFRunLoop(): any;

	limitDateForMode(_: string): Date;

	performBlock(_: () => void): void;

	performInModesBlock(_: NSArray<string>, block: () => void): void;

	performSelectorTargetArgumentOrderModes(_: string, target: any, argument?: any, order: number, modes: NSArray<string>): void;

	removePortForMode(_: NSPort, forMode: string): void;

	run(): void;

	runModeBeforeDate(mode: string, before: Date): boolean;

	runUntilDate(_: Date): void;
}

declare var NSRunLoopCommonModes: string;

enum NSSaveOptions {

	Yes = 0,

	No = 1,

	Ask = 2
}

globalThis.NSSaveOptions = NSSaveOptions;

declare const NSScannedOption: number;

declare class NSScanner extends NSObject implements NSCopying {

	static localizedScannerWithString(_: string): any;

	static scannerWithString(_: string): NSScanner;

	readonly isAtEnd: boolean;

	setCaseSensitive(_: boolean)

	caseSensitive: boolean;

	setCharactersToBeSkipped(_: NSCharacterSet)

	charactersToBeSkipped: NSCharacterSet;

	setLocale(_: any)

	locale: any;

	setScanLocation(_: number)

	scanLocation: number;

	readonly string: string;

	static create(string: string);

	copyWithZone(_?: any): any;

	scanCharactersFromSetIntoString(_: NSCharacterSet, intoString?: string): boolean;

	scanDecimal(_?: NSDecimal): boolean;

	scanDouble(_?: number): boolean;

	scanFloat(_?: number): boolean;

	scanHexDouble(_?: number): boolean;

	scanHexFloat(_?: number): boolean;

	scanHexInt(_?: number): boolean;

	scanHexLongLong(_?: number): boolean;

	scanInt(_?: number): boolean;

	scanInteger(_?: number): boolean;

	scanLongLong(_?: number): boolean;

	scanStringIntoString(_: string, intoString?: string): boolean;

	scanUnsignedLongLong(_?: number): boolean;

	scanUpToCharactersFromSetIntoString(_: NSCharacterSet, intoString?: string): boolean;

	scanUpToStringIntoString(_: string, into?: string): boolean;
}

declare class NSScriptClassDescription extends NSClassDescription {

	readonly appleEventCode: number;

	readonly defaultSubcontainerAttributeKey: string;

	readonly implementationClassName: string;

	readonly suiteName: string;

	readonly superclassDescription: NSScriptClassDescription;

	static create(suiteName: string, className: string, dictionary: NSDictionary<any, any>);

	appleEventCodeForKey(_: string): number;

	classDescriptionForKey(_: string): NSScriptClassDescription;

	hasOrderedToManyRelationshipForKey(_: string): boolean;

	hasPropertyForKey(_: string): boolean;

	hasReadablePropertyForKey(_: string): boolean;

	hasWritablePropertyForKey(_: string): boolean;

	isLocationRequiredToCreateForKey(_: string): boolean;

	keyWithAppleEventCode(_: number): string;

	matchesAppleEventCode(_: number): boolean;

	selectorForCommand(_: NSScriptCommandDescription): string;

	supportsCommand(_: NSScriptCommandDescription): boolean;

	typeForKey(_: string): string;
}

declare class NSScriptCoercionHandler extends NSObject {

	static sharedCoercionHandler(): NSScriptCoercionHandler;

	coerceValueToClass(_: any, toClass: typeof NSObject): any;

	registerCoercerSelectorToConvertFromClassToClass(_: any, selector: string, toConvertFromClass: typeof NSObject, toClass: typeof NSObject): void;
}

declare class NSScriptCommand extends NSObject implements NSCoding {

	static currentCommand(): NSScriptCommand;

	readonly appleEvent: NSAppleEventDescriptor;

	setArguments(_: NSDictionary<string, any>)

	arguments: NSDictionary<string, any>;

	readonly commandDescription: NSScriptCommandDescription;

	setDirectParameter(_: any)

	directParameter: any;

	readonly evaluatedArguments: NSDictionary<string, any>;

	readonly evaluatedReceivers: any;

	setReceiversSpecifier(_: NSScriptObjectSpecifier)

	receiversSpecifier: NSScriptObjectSpecifier;

	setScriptErrorExpectedTypeDescriptor(_: NSAppleEventDescriptor)

	scriptErrorExpectedTypeDescriptor: NSAppleEventDescriptor;

	setScriptErrorNumber(_: number)

	scriptErrorNumber: number;

	setScriptErrorOffendingObjectDescriptor(_: NSAppleEventDescriptor)

	scriptErrorOffendingObjectDescriptor: NSAppleEventDescriptor;

	setScriptErrorString(_: string)

	scriptErrorString: string;

	readonly isWellFormed: boolean;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(commandDescription: NSScriptCommandDescription);

	encodeWithCoder(_: NSCoder): void;

	executeCommand(): any;

	performDefaultImplementation(): any;

	resumeExecutionWithResult(_?: any): void;

	suspendExecution(): void;
}

declare class NSScriptCommandDescription extends NSObject implements NSCoding {

	readonly appleEventClassCode: number;

	readonly appleEventCode: number;

	readonly appleEventCodeForReturnType: number;

	readonly argumentNames: NSArray<string>;

	readonly commandClassName: string;

	readonly commandName: string;

	readonly returnType: string;

	readonly suiteName: string;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(suiteName: string, commandName: string, dictionary: NSDictionary<any, any>);

	appleEventCodeForArgumentWithName(_: string): number;

	createCommandInstance(): NSScriptCommand;

	createCommandInstanceWithZone(_?: any): NSScriptCommand;

	encodeWithCoder(_: NSCoder): void;

	isOptionalArgumentWithName(_: string): boolean;

	typeForArgumentWithName(_: string): string;
}

declare class NSScriptExecutionContext extends NSObject {

	static sharedScriptExecutionContext(): NSScriptExecutionContext;

	setObjectBeingTested(_: any)

	objectBeingTested: any;

	setRangeContainerObject(_: any)

	rangeContainerObject: any;

	setTopLevelObject(_: any)

	topLevelObject: any;
}

declare class NSScriptObjectSpecifier extends NSObject implements NSCoding {

	static objectSpecifierWithDescriptor(_: NSAppleEventDescriptor): NSScriptObjectSpecifier;

	setChildSpecifier(_: NSScriptObjectSpecifier)

	childSpecifier: NSScriptObjectSpecifier;

	setContainerClassDescription(_: NSScriptClassDescription)

	containerClassDescription: NSScriptClassDescription;

	setContainerIsObjectBeingTested(_: boolean)

	containerIsObjectBeingTested: boolean;

	setContainerIsRangeContainerObject(_: boolean)

	containerIsRangeContainerObject: boolean;

	setContainerSpecifier(_: NSScriptObjectSpecifier)

	containerSpecifier: NSScriptObjectSpecifier;

	readonly descriptor: NSAppleEventDescriptor;

	setEvaluationErrorNumber(_: number)

	evaluationErrorNumber: number;

	readonly evaluationErrorSpecifier: NSScriptObjectSpecifier;

	setKey(_: string)

	key: string;

	readonly keyClassDescription: NSScriptClassDescription;

	readonly objectsByEvaluatingSpecifier: any;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier, key: string);

	static create(containerSpecifier: NSScriptObjectSpecifier, key: string);

	encodeWithCoder(_: NSCoder): void;

	indicesOfObjectsByEvaluatingWithContainerCount(_: any, count: number): number;

	objectsByEvaluatingWithContainers(_: any): any;
}

declare class NSScriptSuiteRegistry extends NSObject {

	static setSharedScriptSuiteRegistry(_: NSScriptSuiteRegistry): void;

	static sharedScriptSuiteRegistry(): NSScriptSuiteRegistry;

	readonly suiteNames: NSArray<string>;

	aeteResource(_: string): NSData;

	appleEventCodeForSuite(_: string): number;

	bundleForSuite(_: string): NSBundle;

	classDescriptionWithAppleEventCode(_: number): NSScriptClassDescription;

	classDescriptionsInSuite(_: string): NSDictionary<string, NSScriptClassDescription>;

	commandDescriptionWithAppleEventClassAndAppleEventCode(_: number, andAppleEventCode: number): NSScriptCommandDescription;

	commandDescriptionsInSuite(_: string): NSDictionary<string, NSScriptCommandDescription>;

	loadSuiteWithDictionaryFromBundle(_: NSDictionary<any, any>, fromBundle: NSBundle): void;

	loadSuitesFromBundle(_: NSBundle): void;

	registerClassDescription(_: NSScriptClassDescription): void;

	registerCommandDescription(_: NSScriptCommandDescription): void;

	suiteForAppleEventCode(_: number): string;
}

declare class NSScriptWhoseTest extends NSObject implements NSCoding {

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	isTrue(): boolean;
}

enum NSSearchPathDirectory {

	ApplicationDirectory = 1,

	DemoApplicationDirectory = 2,

	DeveloperApplicationDirectory = 3,

	AdminApplicationDirectory = 4,

	LibraryDirectory = 5,

	DeveloperDirectory = 6,

	UserDirectory = 7,

	DocumentationDirectory = 8,

	DocumentDirectory = 9,

	CoreServiceDirectory = 10,

	AutosavedInformationDirectory = 11,

	DesktopDirectory = 12,

	CachesDirectory = 13,

	ApplicationSupportDirectory = 14,

	DownloadsDirectory = 15,

	InputMethodsDirectory = 16,

	MoviesDirectory = 17,

	MusicDirectory = 18,

	PicturesDirectory = 19,

	PrinterDescriptionDirectory = 20,

	SharedPublicDirectory = 21,

	PreferencePanesDirectory = 22,

	ApplicationScriptsDirectory = 23,

	ItemReplacementDirectory = 99,

	AllApplicationsDirectory = 100,

	AllLibrariesDirectory = 101,

	TrashDirectory = 102
}

globalThis.NSSearchPathDirectory = NSSearchPathDirectory;

enum NSSearchPathDomainMask {

	UserDomainMask = 1,

	LocalDomainMask = 2,

	NetworkDomainMask = 4,

	SystemDomainMask = 8,

	AllDomainsMask = 65535
}

globalThis.NSSearchPathDomainMask = NSSearchPathDomainMask;

declare function NSSearchPathForDirectoriesInDomains(directory: NSSearchPathDirectory, domainMask: NSSearchPathDomainMask, expandTilde: boolean): NSArray<string>;

interface NSSecureCoding extends NSCoding {
}
declare var NSSecureCoding: {

	prototype: NSSecureCoding;
};

declare class NSSecureUnarchiveFromDataTransformer extends NSValueTransformer {

	static allowedTopLevelClasses(): NSArray<typeof NSObject>;
}

declare var NSSecureUnarchiveFromDataTransformerName: string;

declare function NSSelectorFromString(aSelectorName: string): string;

declare class NSSet<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding {

	static set<ObjectType>(): NSSet<ObjectType>;

	static setWithArray<ObjectType>(_: NSArray<ObjectType>): NSSet<ObjectType>;

	static setWithCollectionViewIndexPath<ObjectType>(_: NSIndexPath): NSSet<ObjectType>;

	static setWithCollectionViewIndexPaths<ObjectType>(_: NSArray<NSIndexPath>): NSSet<ObjectType>;

	static setWithObject<ObjectType>(_: ObjectType): NSSet<ObjectType>;

	static setWithObjects<ObjectType>(_: ObjectType): NSSet<ObjectType>;

	static setWithObjectsCount<ObjectType>(_: ObjectType, count: number): NSSet<ObjectType>;

	static setWithSet<ObjectType>(_: NSSet<ObjectType>): NSSet<ObjectType>;

	readonly allObjects: NSArray<ObjectType>;

	readonly count: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(array: NSArray<ObjectType> | ObjectType[]);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(objects: ObjectType);

	static create(objects: ObjectType, count: number);

	static create(set: NSSet<ObjectType>);

	static create(set: NSSet<ObjectType>, copyItems: boolean);

	anyObject(): ObjectType;

	containsObject(_: ObjectType): boolean;

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	descriptionWithLocale(_?: any): string;

	encodeWithCoder(_: NSCoder): void;

	enumerateIndexPathsWithOptionsUsingBlock(_: NSEnumerationOptions, usingBlock: (p1: NSIndexPath, p2: boolean) => void): void;

	enumerateObjectsUsingBlock(_: (p1: ObjectType, p2: boolean) => void): void;

	enumerateObjectsWithOptionsUsingBlock(_: NSEnumerationOptions, usingBlock: (p1: ObjectType, p2: boolean) => void): void;

	filteredSetUsingPredicate(using: NSPredicate): NSSet<ObjectType>;

	intersectsSet(_: NSSet<ObjectType>): boolean;

	isEqualToSet(_: NSSet<ObjectType>): boolean;

	isSubsetOfSet(_: NSSet<ObjectType>): boolean;

	member(_: ObjectType): ObjectType;

	mutableCopyWithZone(_?: any): any;

	objectEnumerator(): NSEnumerator<ObjectType>;

	objectsPassingTest(_: (p1: ObjectType, p2: boolean) => boolean): NSSet<ObjectType>;

	objectsWithOptionsPassingTest(_: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: boolean) => boolean): NSSet<ObjectType>;

	setByAddingObject(_: ObjectType): NSSet<ObjectType>;

	setByAddingObjectsFromArray(_: NSArray<ObjectType>): NSSet<ObjectType>;

	setByAddingObjectsFromSet(_: NSSet<ObjectType>): NSSet<ObjectType>;

	sortedArrayUsingDescriptors(_: NSArray<NSSortDescriptor>): NSArray<ObjectType>;
}

declare class NSSetCommand extends NSScriptCommand {

	readonly keySpecifier: NSScriptObjectSpecifier;

	setReceiversSpecifier(_?: NSScriptObjectSpecifier): void;
}

declare function NSSetUncaughtExceptionHandler(p1: (p1: NSException) => void): void;

declare const NSShiftJISStringEncoding: number;

declare function NSShouldRetainWithZone(anObject: any, requestedZone: any): boolean;

declare function NSSizeFromString(aString: string): CGSize;

declare class NSSocketPort extends NSPort {

	readonly address: NSData;

	readonly protocol: number;

	readonly protocolFamily: number;

	readonly socket: number;

	readonly socketType: number;

	static create(remoteWithProtocolFamily: number, socketType: number, protocol: number, address: NSData);

	static create(remoteWithTCPPort: number, host: string);

	static create(protocolFamily: number, socketType: number, protocol: number, address: NSData);

	static create(protocolFamily: number, socketType: number, protocol: number, socket: number);

	static create(TCPPort: number);
}

declare const NSSolarisOperatingSystem: number;

declare class NSSortDescriptor extends NSObject implements NSCopying, NSSecureCoding {

	static sortDescriptorWithKeyAscending(_?: string, ascending: boolean): NSSortDescriptor;

	static sortDescriptorWithKeyAscendingComparator(_?: string, ascending: boolean, comparator: (p1: any, p2: any) => NSComparisonResult): NSSortDescriptor;

	static sortDescriptorWithKeyAscendingSelector(_?: string, ascending: boolean, selector?: string): NSSortDescriptor;

	readonly ascending: boolean;

	readonly comparator: (p1: any, p2: any) => NSComparisonResult;

	readonly key: string;

	readonly reversedSortDescriptor: any;

	readonly selector: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(key: string, ascending: boolean);

	static create(key: string, ascending: boolean, comparator: (p1: any, p2: any) => NSComparisonResult);

	static create(key: string, ascending: boolean, selector: string);

	allowEvaluation(): void;

	compareObjectToObject(_: any, toObject: any): NSComparisonResult;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NSSortOptions {

	Concurrent = 1,

	Stable = 16
}

globalThis.NSSortOptions = NSSortOptions;

declare class NSSpecifierTest extends NSScriptWhoseTest {

	static create(objectSpecifier: NSScriptObjectSpecifier, comparisonOperator: NSTestComparisonOperation, testObject: any);
}

declare class NSSpellServer extends NSObject {

	setDelegate(_: NSSpellServerDelegate)

	delegate: NSSpellServerDelegate;

	isWordInUserDictionariesCaseSensitive(_: string, caseSensitive: boolean): boolean;

	registerLanguageByVendor(_?: string, byVendor?: string): boolean;

	run(): void;
}

interface NSSpellServerDelegate extends NSObjectProtocol {

	spellServerCheckGrammarInStringLanguageDetails?(_: NSSpellServer, checkGrammarInString: string, language?: string, details?: NSArray<NSDictionary<string, any>>): NSRange;

	spellServerCheckStringOffsetTypesOptionsOrthographyWordCount?(_: NSSpellServer, checkString: string, offset: number, types: number, options?: NSDictionary<string, any>, orthography?: NSOrthography, wordCount: number): NSArray<NSTextCheckingResult>;

	spellServerDidForgetWordInLanguage?(_: NSSpellServer, didForgetWord: string, inLanguage: string): void;

	spellServerDidLearnWordInLanguage?(_: NSSpellServer, didLearnWord: string, inLanguage: string): void;

	spellServerFindMisspelledWordInStringLanguageWordCountCountOnly?(_: NSSpellServer, findMisspelledWordInString: string, language: string, wordCount: number, countOnly: boolean): NSRange;

	spellServerRecordResponseToCorrectionForWordLanguage?(_: NSSpellServer, recordResponse: number, toCorrection: string, forWord: string, language: string): void;

	spellServerSuggestCompletionsForPartialWordRangeInStringLanguage?(_: NSSpellServer, suggestCompletionsForPartialWordRange: NSRange, inString: string, language: string): NSArray<string>;

	spellServerSuggestGuessesForWordInLanguage?(_: NSSpellServer, suggestGuessesForWord: string, inLanguage: string): NSArray<string>;
}
declare var NSSpellServerDelegate: {

	prototype: NSSpellServerDelegate;
};

declare class NSStream extends NSObject {

	static getBoundStreamsWithBufferSizeInputStreamOutputStream(_: number, inputStream?: NSInputStream, outputStream?: NSOutputStream): void;

	static getStreamsToHostWithNamePortInputStreamOutputStream(_: string, port: number, inputStream?: NSInputStream, outputStream?: NSOutputStream): void;

	setDelegate(_: NSStreamDelegate)

	delegate: NSStreamDelegate;

	readonly streamError: NSError;

	readonly streamStatus: NSStreamStatus;

	close(): void;

	open(): void;

	propertyForKey(_: string): any;

	removeFromRunLoopForMode(_: NSRunLoop, forMode: string): void;

	scheduleInRunLoopForMode(_: NSRunLoop, forMode: string): void;

	setPropertyForKey(_?: any, forKey: string): boolean;
}

declare var NSStreamDataWrittenToMemoryStreamKey: string;

interface NSStreamDelegate extends NSObjectProtocol {

	streamHandleEvent?(_: NSStream, handleEvent: NSStreamEvent): void;
}
declare var NSStreamDelegate: {

	prototype: NSStreamDelegate;
};

enum NSStreamEvent {

	None = 0,

	OpenCompleted = 1,

	HasBytesAvailable = 2,

	HasSpaceAvailable = 4,

	ErrorOccurred = 8,

	EndEncountered = 16
}

globalThis.NSStreamEvent = NSStreamEvent;

declare var NSStreamFileCurrentOffsetKey: string;

declare var NSStreamNetworkServiceType: string;

declare var NSStreamNetworkServiceTypeBackground: string;

declare var NSStreamNetworkServiceTypeCallSignaling: string;

declare var NSStreamNetworkServiceTypeVideo: string;

declare var NSStreamNetworkServiceTypeVoIP: string;

declare var NSStreamNetworkServiceTypeVoice: string;

declare var NSStreamSOCKSErrorDomain: string;

declare var NSStreamSOCKSProxyConfigurationKey: string;

declare var NSStreamSOCKSProxyHostKey: string;

declare var NSStreamSOCKSProxyPasswordKey: string;

declare var NSStreamSOCKSProxyPortKey: string;

declare var NSStreamSOCKSProxyUserKey: string;

declare var NSStreamSOCKSProxyVersion4: string;

declare var NSStreamSOCKSProxyVersion5: string;

declare var NSStreamSOCKSProxyVersionKey: string;

declare var NSStreamSocketSSLErrorDomain: string;

declare var NSStreamSocketSecurityLevelKey: string;

declare var NSStreamSocketSecurityLevelNegotiatedSSL: string;

declare var NSStreamSocketSecurityLevelNone: string;

declare var NSStreamSocketSecurityLevelSSLv2: string;

declare var NSStreamSocketSecurityLevelSSLv3: string;

declare var NSStreamSocketSecurityLevelTLSv1: string;

enum NSStreamStatus {

	NotOpen = 0,

	Opening = 1,

	Open = 2,

	Reading = 3,

	Writing = 4,

	AtEnd = 5,

	Closed = 6,

	Error = 7
}

globalThis.NSStreamStatus = NSStreamStatus;

declare class NSString extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding, NSItemProviderReading, NSItemProviderWriting, NSPasteboardReading, NSPasteboardWriting {

	static itemProviderVisibilityForRepresentationWithTypeIdentifier(_: string): NSItemProviderRepresentationVisibility;

	static localizedNameOfStringEncoding(of: number): string;

	static objectWithItemProviderDataTypeIdentifierError(typeIdentifier: NSData, error: string): NSString;

	static pathWithComponents(_: NSArray<string>): string;

	static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardReadingOptions;

	static string(): NSString;

	static stringEncodingForDataEncodingOptionsConvertedStringUsedLossyConversion(_: NSData, encodingOptions?: NSDictionary<string, any>, convertedString?: string, usedLossyConversion?: boolean): number;

	static stringWithCStringEncoding(_: string, encoding: number): NSString;

	static stringWithCharactersLength(_: string, length: number): NSString;

	static stringWithContentsOfFileEncodingError(encoding: string, error: number): NSString;

	static stringWithContentsOfFileUsedEncodingError(usedEncoding: string, error?: number): NSString;

	static stringWithContentsOfURLEncodingError(encoding: NSURL, error: number): NSString;

	static stringWithContentsOfURLUsedEncodingError(usedEncoding: NSURL, error?: number): NSString;

	static stringWithString(_: string): NSString;

	static stringWithUTF8String(_: string): NSString;

	readonly UTF8String: string;

	readonly isAbsolutePath: boolean;

	readonly boolValue: boolean;

	readonly capitalizedString: string;

	readonly decomposedStringWithCanonicalMapping: string;

	readonly decomposedStringWithCompatibilityMapping: string;

	readonly doubleValue: number;

	readonly fastestEncoding: number;

	readonly fileSystemRepresentation: string;

	readonly floatValue: number;

	readonly intValue: number;

	readonly integerValue: number;

	readonly lastPathComponent: string;

	readonly length: number;

	readonly localizedCapitalizedString: string;

	readonly localizedLowercaseString: string;

	readonly localizedUppercaseString: string;

	readonly longLongValue: number;

	readonly lowercaseString: string;

	readonly pathComponents: NSArray<string>;

	readonly pathExtension: string;

	readonly precomposedStringWithCanonicalMapping: string;

	readonly precomposedStringWithCompatibilityMapping: string;

	readonly smallestEncoding: number;

	readonly stringByAbbreviatingWithTildeInPath: string;

	readonly stringByDeletingLastPathComponent: string;

	readonly stringByDeletingPathExtension: string;

	readonly stringByExpandingTildeInPath: string;

	readonly stringByRemovingPercentEncoding: string;

	readonly stringByResolvingSymlinksInPath: string;

	readonly stringByStandardizingPath: string;

	readonly uppercaseString: string;

	static availableStringEncodings(): number;

	static defaultCStringEncoding(): number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly writableTypeIdentifiersForItemProvider: NSArray<string>; // inherited from NSItemProviderWriting

	static readableTypeIdentifiersForItemProvider(): NSArray<string>; // inherited from NSItemProviderReading

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static writableTypeIdentifiersForItemProvider(): NSArray<string>; // inherited from NSItemProviderWriting

	static create(bytes: any, length: number, encoding: number);

	static create(bytesNoCopy: any, length: number, encoding: number, freeWhenDone: boolean);

	static create(CString: string | any, encoding: number);

	static create(characters: string, length: number);

	static create(charactersNoCopy: string, length: number, freeWhenDone: boolean);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(contentsOfFile: string, encoding: number);

	static create(contentsOfFile: string, usedEncoding: number);

	static create(contentsOfURL: NSURL, encoding: number);

	static create(contentsOfURL: NSURL, usedEncoding: number);

	static create(data: NSData, encoding: number);

	static create(pasteboardPropertyList: any, ofType: string); // inherited from NSPasteboardReading

	static create(string: string);

	static create(UTF8String: string | any);

	boundingRectWithSizeOptionsAttributes(_: CGSize, options: NSStringDrawingOptions, attributes?: NSDictionary<string, any>): CGRect;

	boundingRectWithSizeOptionsAttributesContext(_: CGSize, options: NSStringDrawingOptions, attributes?: NSDictionary<string, any>, context?: NSStringDrawingContext): CGRect;

	cStringUsingEncoding(using: number): string;

	canBeConvertedToEncoding(to: number): boolean;

	capitalizedStringWithLocale(with_?: NSLocale): string;

	caseInsensitiveCompare(_: string): NSComparisonResult;

	characterAtIndex(_: number): string;

	commonPrefixWithStringOptions(_: string, options: NSStringCompareOptions): string;

	compare(_: string): NSComparisonResult;

	compareOptions(_: string, options: NSStringCompareOptions): NSComparisonResult;

	compareOptionsRange(_: string, options: NSStringCompareOptions, range: NSRange): NSComparisonResult;

	compareOptionsRangeLocale(_: string, options: NSStringCompareOptions, range: NSRange, locale?: any): NSComparisonResult;

	completePathIntoStringCaseSensitiveMatchesIntoArrayFilterTypes(_?: string, caseSensitive: boolean, matchesIntoArray?: NSArray<string>, filterTypes?: NSArray<string>): number;

	componentsSeparatedByCharactersInSet(separatedBy: NSCharacterSet): NSArray<string>;

	componentsSeparatedByString(separatedBy: string): NSArray<string>;

	conformsToProtocol(_: any /* Protocol */): boolean;

	containsString(_: string): boolean;

	copyWithZone(_?: any): any;

	dataUsingEncoding(using: number): NSData;

	dataUsingEncodingAllowLossyConversion(using: number, allowLossyConversion: boolean): NSData;

	drawAtPointWithAttributes(_: CGPoint, withAttributes?: NSDictionary<string, any>): void;

	drawInRectWithAttributes(_: CGRect, withAttributes?: NSDictionary<string, any>): void;

	drawWithRectOptionsAttributes(_: CGRect, options: NSStringDrawingOptions, attributes?: NSDictionary<string, any>): void;

	drawWithRectOptionsAttributesContext(_: CGRect, options: NSStringDrawingOptions, attributes?: NSDictionary<string, any>, context?: NSStringDrawingContext): void;

	encodeWithCoder(_: NSCoder): void;

	enumerateLinesUsingBlock(_: (p1: string, p2: boolean) => void): void;

	enumerateLinguisticTagsInRangeSchemeOptionsOrthographyUsingBlock(_: NSRange, scheme: string, options: NSLinguisticTaggerOptions, orthography?: NSOrthography, usingBlock?: (p1: string, p2: NSRange, p3: NSRange, p4: boolean) => void): void;

	enumerateSubstringsInRangeOptionsUsingBlock(_: NSRange, options: NSStringEnumerationOptions, usingBlock?: (p1: string, p2: NSRange, p3: NSRange, p4: boolean) => void): void;

	getBytesMaxLengthUsedLengthEncodingOptionsRangeRemainingRange(_?: any, maxLength: number, usedLength?: number, encoding: number, options: NSStringEncodingConversionOptions, range: NSRange, remainingRange?: NSRange): boolean;

	getCStringMaxLengthEncoding(_: string, maxLength: number, encoding: number): boolean;

	getCharacters(_: string): void;

	getCharactersRange(_: string, range: NSRange): void;

	getFileSystemRepresentationMaxLength(_: string, maxLength: number): boolean;

	getLineStartEndContentsEndForRange(_?: number, end?: number, contentsEnd?: number, forRange: NSRange): void;

	getParagraphStartEndContentsEndForRange(_?: number, end?: number, contentsEnd?: number, forRange: NSRange): void;

	hasPrefix(_: string): boolean;

	hasSuffix(_: string): boolean;

	isEqual(_: any): boolean;

	isEqualToString(_: string): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	itemProviderVisibilityForRepresentationWithTypeIdentifier(_: string): NSItemProviderRepresentationVisibility;

	lengthOfBytesUsingEncoding(using: number): number;

	lineRangeForRange(_: NSRange): NSRange;

	linguisticTagsInRangeSchemeOptionsOrthographyTokenRanges(_: NSRange, scheme: string, options: NSLinguisticTaggerOptions, orthography?: NSOrthography, tokenRanges?: NSArray<NSValue>): NSArray<string>;

	loadDataWithTypeIdentifierForItemProviderCompletionHandler(_: string, forItemProviderCompletionHandler?: (p1: NSData, p2: NSError) => void): NSProgress;

	localizedCaseInsensitiveCompare(_: string): NSComparisonResult;

	localizedCaseInsensitiveContainsString(_: string): boolean;

	localizedCompare(_: string): NSComparisonResult;

	localizedStandardCompare(_: string): NSComparisonResult;

	localizedStandardContainsString(_: string): boolean;

	localizedStandardRangeOfString(_: string): NSRange;

	lowercaseStringWithLocale(with_?: NSLocale): string;

	maximumLengthOfBytesUsingEncoding(using: number): number;

	mutableCopyWithZone(_?: any): any;

	paragraphRangeForRange(_: NSRange): NSRange;

	pasteboardPropertyListForType(forType: string): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	propertyList(): any;

	propertyListFromStringsFileFormat(): NSDictionary<any, any>;

	rangeOfCharacterFromSet(_: NSCharacterSet): NSRange;

	rangeOfCharacterFromSetOptions(_: NSCharacterSet, options: NSStringCompareOptions): NSRange;

	rangeOfCharacterFromSetOptionsRange(_: NSCharacterSet, options: NSStringCompareOptions, range: NSRange): NSRange;

	rangeOfComposedCharacterSequenceAtIndex(_: number): NSRange;

	rangeOfComposedCharacterSequencesForRange(_: NSRange): NSRange;

	rangeOfString(_: string): NSRange;

	rangeOfStringOptions(_: string, options: NSStringCompareOptions): NSRange;

	rangeOfStringOptionsRange(_: string, options: NSStringCompareOptions, range: NSRange): NSRange;

	rangeOfStringOptionsRangeLocale(_: string, options: NSStringCompareOptions, range: NSRange, locale?: NSLocale): NSRange;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	sizeWithAttributes(withAttributes?: NSDictionary<string, any>): CGSize;

	stringByAddingPercentEncodingWithAllowedCharacters(_: NSCharacterSet): string;

	stringByAppendingPathComponent(_: string): string;

	stringByAppendingPathExtension(_: string): string;

	stringByAppendingString(_: string): string;

	stringByApplyingTransformReverse(_: string, reverse: boolean): string;

	stringByFoldingWithOptionsLocale(_: NSStringCompareOptions, locale?: NSLocale): string;

	stringByPaddingToLengthWithStringStartingAtIndex(toLength: number, withPad: string, startingAt: number): string;

	stringByReplacingCharactersInRangeWithString(_: NSRange, withString: string): string;

	stringByReplacingOccurrencesOfStringWithString(_: string, withString: string): string;

	stringByReplacingOccurrencesOfStringWithStringOptionsRange(_: string, withString: string, options: NSStringCompareOptions, range: NSRange): string;

	stringByTrimmingCharactersInSet(_: NSCharacterSet): string;

	stringsByAppendingPaths(_: NSArray<string>): NSArray<string>;

	substringFromIndex(_: number): string;

	substringToIndex(_: number): string;

	substringWithRange(_: NSRange): string;

	uppercaseStringWithLocale(with_?: NSLocale): string;

	variantFittingPresentationWidth(_: number): string;

	writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	writeToFileAtomicallyEncodingError(atomically: string, encoding: boolean, error: number): boolean;

	writeToURLAtomicallyEncodingError(atomically: NSURL, encoding: boolean, error: number): boolean;

	writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
}

enum NSStringCompareOptions {

	CaseInsensitiveSearch = 1,

	LiteralSearch = 2,

	BackwardsSearch = 4,

	AnchoredSearch = 8,

	NumericSearch = 64,

	DiacriticInsensitiveSearch = 128,

	WidthInsensitiveSearch = 256,

	ForcedOrderingSearch = 512,

	RegularExpressionSearch = 1024
}

globalThis.NSStringCompareOptions = NSStringCompareOptions;

enum NSStringEncodingConversionOptions {

	AllowLossy = 1,

	ExternalRepresentation = 2
}

globalThis.NSStringEncodingConversionOptions = NSStringEncodingConversionOptions;

declare var NSStringEncodingDetectionAllowLossyKey: string;

declare var NSStringEncodingDetectionDisallowedEncodingsKey: string;

declare var NSStringEncodingDetectionFromWindowsKey: string;

declare var NSStringEncodingDetectionLikelyLanguageKey: string;

declare var NSStringEncodingDetectionLossySubstitutionKey: string;

declare var NSStringEncodingDetectionSuggestedEncodingsKey: string;

declare var NSStringEncodingDetectionUseOnlySuggestedEncodingsKey: string;

declare var NSStringEncodingErrorKey: string;

enum NSStringEnumerationOptions {

	ByLines = 0,

	ByParagraphs = 1,

	ByComposedCharacterSequences = 2,

	ByWords = 3,

	BySentences = 4,

	Reverse = 256,

	SubstringNotRequired = 512,

	Localized = 1024
}

globalThis.NSStringEnumerationOptions = NSStringEnumerationOptions;

declare function NSStringFromClass(aClass: typeof NSObject): string;

declare function NSStringFromHashTable(table: NSHashTable<any>): string;

declare function NSStringFromMapTable(table: NSMapTable<any, any>): string;

declare function NSStringFromPoint(aPoint: CGPoint): string;

declare function NSStringFromProtocol(proto: any /* Protocol */): string;

declare function NSStringFromRange(range: NSRange): string;

declare function NSStringFromRect(aRect: CGRect): string;

declare function NSStringFromSelector(aSelector: string): string;

declare function NSStringFromSize(aSize: CGSize): string;

declare var NSStringTransformFullwidthToHalfwidth: string;

declare var NSStringTransformHiraganaToKatakana: string;

declare var NSStringTransformLatinToArabic: string;

declare var NSStringTransformLatinToCyrillic: string;

declare var NSStringTransformLatinToGreek: string;

declare var NSStringTransformLatinToHangul: string;

declare var NSStringTransformLatinToHebrew: string;

declare var NSStringTransformLatinToHiragana: string;

declare var NSStringTransformLatinToKatakana: string;

declare var NSStringTransformLatinToThai: string;

declare var NSStringTransformMandarinToLatin: string;

declare var NSStringTransformStripCombiningMarks: string;

declare var NSStringTransformStripDiacritics: string;

declare var NSStringTransformToLatin: string;

declare var NSStringTransformToUnicodeName: string;

declare var NSStringTransformToXMLHex: string;

declare var NSSumKeyValueOperator: string;

declare const NSSunOSOperatingSystem: number;

interface NSSwappedDouble {
	v: number;
}
declare var NSSwappedDouble: NSSwappedDouble;

interface NSSwappedFloat {
	v: number;
}
declare var NSSwappedFloat: NSSwappedFloat;

declare const NSSymbolStringEncoding: number;

declare var NSSystemClockDidChangeNotification: string;

declare var NSSystemTimeZoneDidChangeNotification: string;

declare class NSTask extends NSObject {

	static launchedTaskWithExecutableURLArgumentsErrorTerminationHandler(_: NSURL, _: NSArray<string>, arguments_?: NSError, terminationHandler?: (p1: NSTask) => void): NSTask;

	static launchedTaskWithLaunchPathArguments(launchPath: string, arguments_: NSArray<string>): NSTask;

	setArguments(_: NSArray<string>)

	arguments: NSArray<string>;

	setCurrentDirectoryPath(_: string)

	currentDirectoryPath: string;

	setCurrentDirectoryURL(_: NSURL)

	currentDirectoryURL: NSURL;

	setEnvironment(_: NSDictionary<string, string>)

	environment: NSDictionary<string, string>;

	setExecutableURL(_: NSURL)

	executableURL: NSURL;

	setLaunchPath(_: string)

	launchPath: string;

	readonly processIdentifier: number;

	setQualityOfService(_: NSQualityOfService)

	qualityOfService: NSQualityOfService;

	readonly isRunning: boolean;

	setStandardError(_: any)

	standardError: any;

	setStandardInput(_: any)

	standardInput: any;

	setStandardOutput(_: any)

	standardOutput: any;

	setTerminationHandler(_: (p1: NSTask) => void)

	terminationHandler: (p1: NSTask) => void;

	readonly terminationReason: NSTaskTerminationReason;

	readonly terminationStatus: number;

	interrupt(): void;

	launch(): void;

	launchAndReturnError(): boolean;

	resume(): boolean;

	suspend(): boolean;

	terminate(): void;

	waitUntilExit(): void;
}

declare var NSTaskDidTerminateNotification: string;

enum NSTaskTerminationReason {

	Exit = 1,

	UncaughtSignal = 2
}

globalThis.NSTaskTerminationReason = NSTaskTerminationReason;

declare function NSTemporaryDirectory(): string;

enum NSTestComparisonOperation {

	EqualToComparison = 0,

	LessThanOrEqualToComparison = 1,

	LessThanComparison = 2,

	GreaterThanOrEqualToComparison = 3,

	GreaterThanComparison = 4,

	BeginsWithComparison = 5,

	EndsWithComparison = 6,

	ContainsComparison = 7
}

globalThis.NSTestComparisonOperation = NSTestComparisonOperation;

declare var NSTextCheckingAirlineKey: string;

declare const NSTextCheckingAllCustomTypes: number;

declare const NSTextCheckingAllSystemTypes: number;

declare const NSTextCheckingAllTypes: number;

declare var NSTextCheckingCityKey: string;

declare var NSTextCheckingCountryKey: string;

declare var NSTextCheckingFlightKey: string;

declare var NSTextCheckingJobTitleKey: string;

declare var NSTextCheckingNameKey: string;

declare var NSTextCheckingOrganizationKey: string;

declare var NSTextCheckingPhoneKey: string;

declare class NSTextCheckingResult extends NSObject implements NSCopying, NSSecureCoding {

	static addressCheckingResultWithRangeComponents(range: NSRange, components: NSDictionary<string, string>): NSTextCheckingResult;

	static correctionCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;

	static correctionCheckingResultWithRangeReplacementStringAlternativeStrings(range: NSRange, replacementString: string, alternativeStrings: NSArray<string>): NSTextCheckingResult;

	static dashCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;

	static dateCheckingResultWithRangeDate(range: NSRange, date: Date): NSTextCheckingResult;

	static dateCheckingResultWithRangeDateTimeZoneDuration(range: NSRange, date: Date, timeZone: NSTimeZone, duration: number): NSTextCheckingResult;

	static grammarCheckingResultWithRangeDetails(range: NSRange, details: NSArray<NSDictionary<string, any>>): NSTextCheckingResult;

	static linkCheckingResultWithRangeURL(range: NSRange, url: NSURL): NSTextCheckingResult;

	static orthographyCheckingResultWithRangeOrthography(range: NSRange, orthography: NSOrthography): NSTextCheckingResult;

	static phoneNumberCheckingResultWithRangePhoneNumber(range: NSRange, phoneNumber: string): NSTextCheckingResult;

	static quoteCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;

	static regularExpressionCheckingResultWithRangesCountRegularExpression(ranges: NSRange, count: number, regularExpression: NSRegularExpression): NSTextCheckingResult;

	static replacementCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;

	static spellCheckingResultWithRange(range: NSRange): NSTextCheckingResult;

	static transitInformationCheckingResultWithRangeComponents(range: NSRange, components: NSDictionary<string, string>): NSTextCheckingResult;

	readonly URL: NSURL;

	readonly addressComponents: NSDictionary<string, string>;

	readonly alternativeStrings: NSArray<string>;

	readonly components: NSDictionary<string, string>;

	readonly date: Date;

	readonly duration: number;

	readonly grammarDetails: NSArray<NSDictionary<string, any>>;

	readonly numberOfRanges: number;

	readonly orthography: NSOrthography;

	readonly phoneNumber: string;

	readonly range: NSRange;

	readonly regularExpression: NSRegularExpression;

	readonly replacementString: string;

	readonly resultType: NSTextCheckingType;

	readonly timeZone: NSTimeZone;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	rangeAtIndex(at: number): NSRange;

	rangeWithName(_: string): NSRange;

	resultByAdjustingRangesWithOffset(offset: number): NSTextCheckingResult;
}

declare var NSTextCheckingStateKey: string;

declare var NSTextCheckingStreetKey: string;

enum NSTextCheckingType {

	Orthography = 1,

	Spelling = 2,

	Grammar = 4,

	Date = 8,

	Address = 16,

	Link = 32,

	Quote = 64,

	Dash = 128,

	Replacement = 256,

	Correction = 512,

	RegularExpression = 1024,

	PhoneNumber = 2048,

	TransitInformation = 4096
}

globalThis.NSTextCheckingType = NSTextCheckingType;

declare var NSTextCheckingZIPKey: string;

declare class NSThread extends NSObject {

	static detachNewThreadSelectorToTargetWithObject(_: string, toTarget: any, withObject?: any): void;

	static detachNewThreadWithBlock(_: () => void): void;

	static exit(): void;

	static isMultiThreaded(): boolean;

	static setThreadPriority(_: number): boolean;

	static sleepForTimeInterval(_: number): void;

	static sleepUntilDate(_: Date): void;

	static threadPriority(): number;

	readonly isCancelled: boolean;

	readonly isExecuting: boolean;

	readonly isFinished: boolean;

	readonly isMainThread: boolean;

	setName(_: string)

	name: string;

	setQualityOfService(_: NSQualityOfService)

	qualityOfService: NSQualityOfService;

	setStackSize(_: number)

	stackSize: number;

	readonly threadDictionary: NSMutableDictionary<any, any>;

	setThreadPriority(_: number)

	threadPriority: number;

	static callStackReturnAddresses(): NSArray<number>;

	static callStackSymbols(): NSArray<string>;

	static currentThread(): NSThread;

	static isMainThread(): boolean;

	static mainThread(): NSThread;

	static create(block: () => void);

	static create(target: any, selector: string, object: any);

	cancel(): void;

	main(): void;

	start(): void;
}

declare var NSThreadWillExitNotification: string;

declare var NSThumbnail1024x1024SizeKey: string;

declare class NSTimeZone extends NSObject implements NSCopying, NSSecureCoding {

	static resetSystemTimeZone(): void;

	static timeZoneForSecondsFromGMT(_: number): NSTimeZone;

	static timeZoneWithAbbreviation(_: string): NSTimeZone;

	static timeZoneWithName(_: string): NSTimeZone;

	static timeZoneWithNameData(_: string, data?: NSData): NSTimeZone;

	readonly abbreviation: string;

	readonly data: NSData;

	readonly isDaylightSavingTime: boolean;

	readonly daylightSavingTimeOffset: number;

	readonly name: string;

	readonly nextDaylightSavingTimeTransition: Date;

	readonly secondsFromGMT: number;

	static setAbbreviationDictionary(_: NSDictionary<string, string>)

	abbreviationDictionary: NSDictionary<string, string>;

	static setDefaultTimeZone(_: NSTimeZone)

	defaultTimeZone: NSTimeZone;

	static knownTimeZoneNames(): NSArray<string>;

	static localTimeZone(): NSTimeZone;

	static systemTimeZone(): NSTimeZone;

	static timeZoneDataVersion(): string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(name: string);

	static create(name: string, data: NSData);

	abbreviationForDate(_: Date): string;

	copyWithZone(_?: any): any;

	daylightSavingTimeOffsetForDate(_: Date): number;

	encodeWithCoder(_: NSCoder): void;

	isDaylightSavingTimeForDate(_: Date): boolean;

	isEqualToTimeZone(_: NSTimeZone): boolean;

	localizedNameLocale(_: NSTimeZoneNameStyle, locale?: NSLocale): string;

	nextDaylightSavingTimeTransitionAfterDate(_: Date): Date;

	secondsFromGMTForDate(_: Date): number;
}

enum NSTimeZoneNameStyle {

	Standard = 0,

	ShortStandard = 1,

	DaylightSaving = 2,

	ShortDaylightSaving = 3,

	Generic = 4,

	ShortGeneric = 5
}

globalThis.NSTimeZoneNameStyle = NSTimeZoneNameStyle;

declare class NSTimer extends NSObject {

	static scheduledTimerWithTimeIntervalRepeatsBlock(_: number, repeats: boolean, block: (p1: NSTimer) => void): NSTimer;

	static scheduledTimerWithTimeIntervalTargetSelectorUserInfoRepeats(timeInterval: number, target: any, selector: string, userInfo?: any, repeats: boolean): NSTimer;

	static timerWithTimeIntervalRepeatsBlock(_: number, repeats: boolean, block: (p1: NSTimer) => void): NSTimer;

	static timerWithTimeIntervalTargetSelectorUserInfoRepeats(_: number, target: any, selector: string, userInfo?: any, repeats: boolean): NSTimer;

	setFireDate(_: Date)

	fireDate: Date;

	readonly timeInterval: number;

	setTolerance(_: number)

	tolerance: number;

	readonly userInfo: any;

	readonly isValid: boolean;

	static create(fireDate: Date, interval: number, repeats: boolean, block: (p1: NSTimer) => void);

	static create(fireDate: Date, interval: number, target: any, selector: string, userInfo: any, repeats: boolean);

	fire(): void;

	invalidate(): void;
}

declare class NSURL extends NSObject implements NSCopying, NSSecureCoding, NSItemProviderReading, NSItemProviderWriting, NSPasteboardReading, NSPasteboardWriting, QLPreviewItem {

	static URLByResolvingAliasFileAtURLOptionsError(resolvingAliasFileAt: NSURL, options: NSURLBookmarkResolutionOptions): NSURL;

	static URLByResolvingBookmarkDataOptionsRelativeToURLBookmarkDataIsStaleError(options: NSData, relativeToURL: NSURLBookmarkResolutionOptions, bookmarkDataIsStale?: NSURL, error?: boolean): NSURL;

	static URLFromPasteboard(_: NSPasteboard): NSURL;

	static URLWithDataRepresentationRelativeToURL(_: NSData, relativeToURL?: NSURL): NSURL;

	static URLWithString(_: string): NSURL;

	static URLWithStringRelativeToURL(_: string, relativeToURL?: NSURL): NSURL;

	static absoluteURLWithDataRepresentationRelativeToURL(_: NSData, relativeToURL?: NSURL): NSURL;

	static bookmarkDataWithContentsOfURLError(error: NSURL): NSData;

	static fileURLWithFileSystemRepresentationIsDirectoryRelativeToURL(_: string, isDirectory: boolean, relativeToURL?: NSURL): NSURL;

	static fileURLWithPath(_: string): NSURL;

	static fileURLWithPathIsDirectory(_: string, isDirectory: boolean): NSURL;

	static fileURLWithPathIsDirectoryRelativeToURL(_: string, isDirectory: boolean, relativeToURL?: NSURL): NSURL;

	static fileURLWithPathRelativeToURL(_: string, relativeToURL?: NSURL): NSURL;

	static fileURLWithPathComponents(_: NSArray<string>): NSURL;

	static itemProviderVisibilityForRepresentationWithTypeIdentifier(_: string): NSItemProviderRepresentationVisibility;

	static objectWithItemProviderDataTypeIdentifierError(typeIdentifier: NSData, error: string): NSURL;

	static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardReadingOptions;

	static resourceValuesForKeysFromBookmarkData(_: NSArray<string>, fromBookmarkData: NSData): NSDictionary<string, any>;

	static writeBookmarkDataToURLOptionsError(toURL: NSData, options: NSURL, error: number): boolean;

	readonly URLByDeletingLastPathComponent: NSURL;

	readonly URLByDeletingPathExtension: NSURL;

	readonly URLByResolvingSymlinksInPath: NSURL;

	readonly URLByStandardizingPath: NSURL;

	readonly absoluteString: string;

	readonly absoluteURL: NSURL;

	readonly baseURL: NSURL;

	readonly dataRepresentation: NSData;

	readonly filePathURL: NSURL;

	readonly fileSystemRepresentation: string;

	readonly isFileURL: boolean;

	readonly fragment: string;

	readonly hasDirectoryPath: boolean;

	readonly host: string;

	readonly lastPathComponent: string;

	readonly password: string;

	readonly path: string;

	readonly pathComponents: NSArray<string>;

	readonly pathExtension: string;

	readonly port: number;

	readonly query: string;

	readonly relativePath: string;

	readonly relativeString: string;

	readonly resourceSpecifier: string;

	readonly scheme: string;

	readonly standardizedURL: NSURL;

	readonly user: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly previewItemDisplayState: any; // inherited from QLPreviewItem

	readonly previewItemTitle: string; // inherited from QLPreviewItem

	readonly previewItemURL: NSURL; // inherited from QLPreviewItem

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly writableTypeIdentifiersForItemProvider: NSArray<string>; // inherited from NSItemProviderWriting

	static readableTypeIdentifiersForItemProvider(): NSArray<string>; // inherited from NSItemProviderReading

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static writableTypeIdentifiersForItemProvider(): NSArray<string>; // inherited from NSItemProviderWriting

	static create(absoluteURLWithDataRepresentation: NSData, relativeToURL: NSURL);

	static create(byResolvingBookmarkData: NSData, options: NSURLBookmarkResolutionOptions, relativeToURL: NSURL, bookmarkDataIsStale: boolean);

	static create(fileURLWithFileSystemRepresentation: string | any, isDirectory: boolean, relativeToURL: NSURL);

	static create(fileURLWithPath: string);

	static create(fileURLWithPath: string, isDirectory: boolean);

	static create(fileURLWithPath: string, isDirectory: boolean, relativeToURL: NSURL);

	static create(fileURLWithPath: string, relativeToURL: NSURL);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(dataRepresentation: NSData, relativeToURL: NSURL);

	static create(pasteboardPropertyList: any, ofType: string); // inherited from NSPasteboardReading

	static create(string: string);

	static create(string: string, relativeToURL: NSURL);

	URLByAppendingPathComponent(_: string): NSURL;

	URLByAppendingPathComponentIsDirectory(_: string, isDirectory: boolean): NSURL;

	URLByAppendingPathExtension(_: string): NSURL;

	bookmarkDataWithOptionsIncludingResourceValuesForKeysRelativeToURLError(includingResourceValuesForKeys: NSURLBookmarkCreationOptions, relativeToURL?: NSArray<string>, error?: NSURL): NSData;

	checkPromisedItemIsReachableAndReturnError(): boolean;

	checkResourceIsReachableAndReturnError(): boolean;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	fileReferenceURL(): NSURL;

	getFileSystemRepresentationMaxLength(_: string, maxLength: number): boolean;

	getPromisedItemResourceValueForKeyError(forKey?: any, error: string): boolean;

	getResourceValueForKeyError(forKey?: any, error: string): boolean;

	isEqual(_: any): boolean;

	isFileReferenceURL(): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	itemProviderVisibilityForRepresentationWithTypeIdentifier(_: string): NSItemProviderRepresentationVisibility;

	loadDataWithTypeIdentifierForItemProviderCompletionHandler(_: string, forItemProviderCompletionHandler?: (p1: NSData, p2: NSError) => void): NSProgress;

	pasteboardPropertyListForType(forType: string): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	promisedItemResourceValuesForKeysError(error: NSArray<string>): NSDictionary<string, any>;

	removeAllCachedResourceValues(): void;

	removeCachedResourceValueForKey(_: string): void;

	resourceValuesForKeysError(error: NSArray<string>): NSDictionary<string, any>;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setResourceValueForKeyError(forKey?: any, error: string): boolean;

	setResourceValuesError(error: NSDictionary<string, any>): boolean;

	setTemporaryResourceValueForKey(_?: any, forKey: string): void;

	startAccessingSecurityScopedResource(): boolean;

	stopAccessingSecurityScopedResource(): void;

	writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;

	writeToPasteboard(_: NSPasteboard): void;

	writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
}

declare var NSURLAddedToDirectoryDateKey: string;

declare var NSURLApplicationIsScriptableKey: string;

declare var NSURLAttributeModificationDateKey: string;

declare class NSURLAuthenticationChallenge extends NSObject implements NSSecureCoding {

	readonly error: NSError;

	readonly failureResponse: NSURLResponse;

	readonly previousFailureCount: number;

	readonly proposedCredential: NSURLCredential;

	readonly protectionSpace: NSURLProtectionSpace;

	readonly sender: NSURLAuthenticationChallengeSender;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(authenticationChallenge: NSURLAuthenticationChallenge, sender: NSURLAuthenticationChallengeSender);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(protectionSpace: NSURLProtectionSpace, proposedCredential: NSURLCredential, previousFailureCount: number, failureResponse: NSURLResponse, error: NSError, sender: NSURLAuthenticationChallengeSender);

	encodeWithCoder(_: NSCoder): void;
}

interface NSURLAuthenticationChallengeSender extends NSObjectProtocol {

	cancelAuthenticationChallenge(_: NSURLAuthenticationChallenge): void;

	continueWithoutCredentialForAuthenticationChallenge(_: NSURLAuthenticationChallenge): void;

	performDefaultHandlingForAuthenticationChallenge?(_: NSURLAuthenticationChallenge): void;

	rejectProtectionSpaceAndContinueWithChallenge?(_: NSURLAuthenticationChallenge): void;

	useCredentialForAuthenticationChallenge(_: NSURLCredential, forAuthenticationChallenge: NSURLAuthenticationChallenge): void;
}
declare var NSURLAuthenticationChallengeSender: {

	prototype: NSURLAuthenticationChallengeSender;
};

declare var NSURLAuthenticationMethodClientCertificate: string;

declare var NSURLAuthenticationMethodDefault: string;

declare var NSURLAuthenticationMethodHTMLForm: string;

declare var NSURLAuthenticationMethodHTTPBasic: string;

declare var NSURLAuthenticationMethodHTTPDigest: string;

declare var NSURLAuthenticationMethodNTLM: string;

declare var NSURLAuthenticationMethodNegotiate: string;

declare var NSURLAuthenticationMethodServerTrust: string;

enum NSURLBookmarkCreationOptions {

	PreferFileIDResolution = 256,

	MinimalBookmark = 512,

	SuitableForBookmarkFile = 1024,

	WithSecurityScope = 2048,

	SecurityScopeAllowOnlyReadAccess = 4096
}

globalThis.NSURLBookmarkCreationOptions = NSURLBookmarkCreationOptions;

enum NSURLBookmarkResolutionOptions {

	WithoutUI = 256,

	WithoutMounting = 512,

	WithSecurityScope = 1024
}

globalThis.NSURLBookmarkResolutionOptions = NSURLBookmarkResolutionOptions;

declare class NSURLCache extends NSObject {

	readonly currentDiskUsage: number;

	readonly currentMemoryUsage: number;

	setDiskCapacity(_: number)

	diskCapacity: number;

	setMemoryCapacity(_: number)

	memoryCapacity: number;

	static setSharedURLCache(_: NSURLCache)

	sharedURLCache: NSURLCache;

	static create(memoryCapacity: number, diskCapacity: number, directoryURL: NSURL);

	static create(memoryCapacity: number, diskCapacity: number, diskPath: string);

	cachedResponseForRequest(_: NSURLRequest): NSCachedURLResponse;

	getCachedResponseForDataTaskCompletionHandler(_: NSURLSessionDataTask, completionHandler?: (p1: NSCachedURLResponse) => void): void;

	removeAllCachedResponses(): void;

	removeCachedResponseForDataTask(_: NSURLSessionDataTask): void;

	removeCachedResponseForRequest(_: NSURLRequest): void;

	removeCachedResponsesSinceDate(_: Date): void;

	storeCachedResponseForDataTask(_: NSCachedURLResponse, forDataTask: NSURLSessionDataTask): void;

	storeCachedResponseForRequest(_: NSCachedURLResponse, forRequest: NSURLRequest): void;
}

enum NSURLCacheStoragePolicy {

	Allowed = 0,

	AllowedInMemoryOnly = 1,

	NotAllowed = 2
}

globalThis.NSURLCacheStoragePolicy = NSURLCacheStoragePolicy;

declare var NSURLCanonicalPathKey: string;

declare class NSURLComponents extends NSObject implements NSCopying {

	static componentsWithString(_: string): NSURLComponents;

	static componentsWithURLResolvingAgainstBaseURL(_: NSURL, resolvingAgainstBaseURL: boolean): NSURLComponents;

	readonly URL: NSURL;

	setFragment(_: string)

	fragment: string;

	setHost(_: string)

	host: string;

	setPassword(_: string)

	password: string;

	setPath(_: string)

	path: string;

	setPercentEncodedFragment(_: string)

	percentEncodedFragment: string;

	setPercentEncodedHost(_: string)

	percentEncodedHost: string;

	setPercentEncodedPassword(_: string)

	percentEncodedPassword: string;

	setPercentEncodedPath(_: string)

	percentEncodedPath: string;

	setPercentEncodedQuery(_: string)

	percentEncodedQuery: string;

	setPercentEncodedQueryItems(_: NSArray<NSURLQueryItem>)

	percentEncodedQueryItems: NSArray<NSURLQueryItem>;

	setPercentEncodedUser(_: string)

	percentEncodedUser: string;

	setPort(_: number)

	port: number;

	setQuery(_: string)

	query: string;

	setQueryItems(_: NSArray<NSURLQueryItem>)

	queryItems: NSArray<NSURLQueryItem>;

	readonly rangeOfFragment: NSRange;

	readonly rangeOfHost: NSRange;

	readonly rangeOfPassword: NSRange;

	readonly rangeOfPath: NSRange;

	readonly rangeOfPort: NSRange;

	readonly rangeOfQuery: NSRange;

	readonly rangeOfScheme: NSRange;

	readonly rangeOfUser: NSRange;

	setScheme(_: string)

	scheme: string;

	readonly string: string;

	setUser(_: string)

	user: string;

	static create(string: string);

	static create(URL: NSURL, resolvingAgainstBaseURL: boolean);

	URLRelativeToURL(relativeTo?: NSURL): NSURL;

	copyWithZone(_?: any): any;
}

declare class NSURLConnection extends NSObject {

	static canHandleRequest(_: NSURLRequest): boolean;

	readonly currentRequest: NSURLRequest;

	readonly originalRequest: NSURLRequest;

	cancel(): void;

	scheduleInRunLoopForMode(_: NSRunLoop, forMode: string): void;

	setDelegateQueue(_?: NSOperationQueue): void;

	start(): void;

	unscheduleFromRunLoopForMode(_: NSRunLoop, forMode: string): void;
}

interface NSURLConnectionDataDelegate extends NSURLConnectionDelegate {

	connectionDidReceiveData?(_: NSURLConnection, didReceiveData: NSData): void;

	connectionDidReceiveResponse?(_: NSURLConnection, didReceiveResponse: NSURLResponse): void;

	connectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite?(_: NSURLConnection, didSendBodyData: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	connectionNeedNewBodyStream?(_: NSURLConnection, needNewBodyStream: NSURLRequest): NSInputStream;

	connectionWillCacheResponse?(_: NSURLConnection, willCacheResponse: NSCachedURLResponse): NSCachedURLResponse;

	connectionWillSendRequestRedirectResponse?(_: NSURLConnection, willSendRequest: NSURLRequest, redirectResponse?: NSURLResponse): NSURLRequest;

	connectionDidFinishLoading?(_: NSURLConnection): void;
}
declare var NSURLConnectionDataDelegate: {

	prototype: NSURLConnectionDataDelegate;
};

interface NSURLConnectionDelegate extends NSObjectProtocol {

	connectionDidFailWithError?(_: NSURLConnection, didFailWithError: NSError): void;

	connectionWillSendRequestForAuthenticationChallenge?(_: NSURLConnection, willSendRequestForAuthenticationChallenge: NSURLAuthenticationChallenge): void;

	connectionShouldUseCredentialStorage?(_: NSURLConnection): boolean;
}
declare var NSURLConnectionDelegate: {

	prototype: NSURLConnectionDelegate;
};

interface NSURLConnectionDownloadDelegate extends NSURLConnectionDelegate {

	connectionDidWriteDataTotalBytesWrittenExpectedTotalBytes?(_: NSURLConnection, didWriteData: number, totalBytesWritten: number, expectedTotalBytes: number): void;

	connectionDidFinishDownloadingDestinationURL(_: NSURLConnection, destinationURL: NSURL): void;

	connectionDidResumeDownloadingTotalBytesWrittenExpectedTotalBytes?(_: NSURLConnection, totalBytesWritten: number, expectedTotalBytes: number): void;
}
declare var NSURLConnectionDownloadDelegate: {

	prototype: NSURLConnectionDownloadDelegate;
};

declare var NSURLContentAccessDateKey: string;

declare var NSURLContentModificationDateKey: string;

declare var NSURLCreationDateKey: string;

declare class NSURLCredential extends NSObject implements NSCopying, NSSecureCoding {

	static credentialForTrust(trust: any): NSURLCredential;

	static credentialWithIdentityCertificatesPersistence(_: any, certificates?: NSArray<any>, persistence: NSURLCredentialPersistence): NSURLCredential;

	static credentialWithUserPasswordPersistence(_: string, password: string, persistence: NSURLCredentialPersistence): NSURLCredential;

	readonly certificates: NSArray<any>;

	readonly hasPassword: boolean;

	readonly identity: any;

	readonly password: string;

	readonly persistence: NSURLCredentialPersistence;

	readonly user: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(identity: any, certificates: NSArray<any> | any[], persistence: NSURLCredentialPersistence);

	static create(trust: any);

	static create(user: string, password: string, persistence: NSURLCredentialPersistence);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NSURLCredentialPersistence {

	None = 0,

	ForSession = 1,

	Permanent = 2,

	Synchronizable = 3
}

globalThis.NSURLCredentialPersistence = NSURLCredentialPersistence;

declare class NSURLCredentialStorage extends NSObject {

	readonly allCredentials: NSDictionary<NSURLProtectionSpace, NSDictionary<string, NSURLCredential>>;

	static sharedCredentialStorage(): NSURLCredentialStorage;

	credentialsForProtectionSpace(_: NSURLProtectionSpace): NSDictionary<string, NSURLCredential>;

	defaultCredentialForProtectionSpace(_: NSURLProtectionSpace): NSURLCredential;

	getCredentialsForProtectionSpaceTaskCompletionHandler(for_: NSURLProtectionSpace, task: NSURLSessionTask, completionHandler?: (p1: NSDictionary<string, NSURLCredential>) => void): void;

	getDefaultCredentialForProtectionSpaceTaskCompletionHandler(_: NSURLProtectionSpace, task: NSURLSessionTask, completionHandler?: (p1: NSURLCredential) => void): void;

	removeCredentialForProtectionSpace(_: NSURLCredential, forProtectionSpace: NSURLProtectionSpace): void;

	removeCredentialForProtectionSpaceOptions(_: NSURLCredential, forProtectionSpace: NSURLProtectionSpace, options?: NSDictionary<string, any>): void;

	removeCredentialForProtectionSpaceOptionsTask(_: NSURLCredential, forProtectionSpace: NSURLProtectionSpace, options?: NSDictionary<string, any>, task: NSURLSessionTask): void;

	setCredentialForProtectionSpace(_: NSURLCredential, for_: NSURLProtectionSpace): void;

	setCredentialForProtectionSpaceTask(_: NSURLCredential, for_: NSURLProtectionSpace, task: NSURLSessionTask): void;

	setDefaultCredentialForProtectionSpace(_: NSURLCredential, forProtectionSpace: NSURLProtectionSpace): void;

	setDefaultCredentialForProtectionSpaceTask(_: NSURLCredential, forProtectionSpace: NSURLProtectionSpace, task: NSURLSessionTask): void;
}

declare var NSURLCredentialStorageChangedNotification: string;

declare var NSURLCredentialStorageRemoveSynchronizableCredentials: string;

declare var NSURLCustomIconKey: string;

declare var NSURLDocumentIdentifierKey: string;

declare class NSURLDownload extends NSObject {

	static canResumeDownloadDecodedWithEncodingMIMEType(_: string): boolean;

	setDeletesFileUponFailure(_: boolean)

	deletesFileUponFailure: boolean;

	readonly request: NSURLRequest;

	readonly resumeData: NSData;

	cancel(): void;

	setDestinationAllowOverwrite(_: string, allowOverwrite: boolean): void;
}

interface NSURLDownloadDelegate extends NSObjectProtocol {

	downloadCanAuthenticateAgainstProtectionSpace?(_: NSURLDownload, canAuthenticateAgainstProtectionSpace: NSURLProtectionSpace): boolean;

	downloadDecideDestinationWithSuggestedFilename?(_: NSURLDownload, decideDestinationWithSuggestedFilename: string): void;

	downloadDidCancelAuthenticationChallenge?(_: NSURLDownload, didCancelAuthenticationChallenge: NSURLAuthenticationChallenge): void;

	downloadDidCreateDestination?(_: NSURLDownload, didCreateDestination: string): void;

	downloadDidFailWithError?(_: NSURLDownload, didFailWithError: NSError): void;

	downloadDidReceiveAuthenticationChallenge?(_: NSURLDownload, didReceiveAuthenticationChallenge: NSURLAuthenticationChallenge): void;

	downloadDidReceiveDataOfLength?(_: NSURLDownload, didReceiveDataOfLength: number): void;

	downloadDidReceiveResponse?(_: NSURLDownload, didReceiveResponse: NSURLResponse): void;

	downloadShouldDecodeSourceDataOfMIMEType?(_: NSURLDownload, shouldDecodeSourceDataOfMIMEType: string): boolean;

	downloadWillResumeWithResponseFromByte?(_: NSURLDownload, willResumeWithResponse: NSURLResponse, fromByte: number): void;

	downloadWillSendRequestRedirectResponse?(_: NSURLDownload, willSendRequest: NSURLRequest, redirectResponse?: NSURLResponse): NSURLRequest;

	downloadDidBegin?(_: NSURLDownload): void;

	downloadDidFinish?(_: NSURLDownload): void;

	downloadShouldUseCredentialStorage?(_: NSURLDownload): boolean;
}
declare var NSURLDownloadDelegate: {

	prototype: NSURLDownloadDelegate;
};

declare var NSURLEffectiveIconKey: string;

declare const NSURLErrorAppTransportSecurityRequiresSecureConnection: number;

declare const NSURLErrorBackgroundSessionInUseByAnotherProcess: number;

declare const NSURLErrorBackgroundSessionRequiresSharedContainer: number;

declare const NSURLErrorBackgroundSessionWasDisconnected: number;

declare var NSURLErrorBackgroundTaskCancelledReasonKey: string;

declare const NSURLErrorBadServerResponse: number;

declare const NSURLErrorBadURL: number;

declare const NSURLErrorCallIsActive: number;

declare const NSURLErrorCancelled: number;

declare const NSURLErrorCancelledReasonBackgroundUpdatesDisabled: number;

declare const NSURLErrorCancelledReasonInsufficientSystemResources: number;

declare const NSURLErrorCancelledReasonUserForceQuitApplication: number;

declare const NSURLErrorCannotCloseFile: number;

declare const NSURLErrorCannotConnectToHost: number;

declare const NSURLErrorCannotCreateFile: number;

declare const NSURLErrorCannotDecodeContentData: number;

declare const NSURLErrorCannotDecodeRawData: number;

declare const NSURLErrorCannotFindHost: number;

declare const NSURLErrorCannotLoadFromNetwork: number;

declare const NSURLErrorCannotMoveFile: number;

declare const NSURLErrorCannotOpenFile: number;

declare const NSURLErrorCannotParseResponse: number;

declare const NSURLErrorCannotRemoveFile: number;

declare const NSURLErrorCannotWriteToFile: number;

declare const NSURLErrorClientCertificateRejected: number;

declare const NSURLErrorClientCertificateRequired: number;

declare const NSURLErrorDNSLookupFailed: number;

declare const NSURLErrorDataLengthExceedsMaximum: number;

declare const NSURLErrorDataNotAllowed: number;

declare var NSURLErrorDomain: string;

declare const NSURLErrorDownloadDecodingFailedMidStream: number;

declare const NSURLErrorDownloadDecodingFailedToComplete: number;

declare var NSURLErrorFailingURLErrorKey: string;

declare var NSURLErrorFailingURLPeerTrustErrorKey: string;

declare var NSURLErrorFailingURLStringErrorKey: string;

declare const NSURLErrorFileDoesNotExist: number;

declare const NSURLErrorFileIsDirectory: number;

declare const NSURLErrorFileOutsideSafeArea: number;

declare const NSURLErrorHTTPTooManyRedirects: number;

declare const NSURLErrorInternationalRoamingOff: number;

declare var NSURLErrorKey: string;

declare const NSURLErrorNetworkConnectionLost: number;

enum NSURLErrorNetworkUnavailableReason {

	Cellular = 0,

	Expensive = 1,

	Constrained = 2
}

globalThis.NSURLErrorNetworkUnavailableReason = NSURLErrorNetworkUnavailableReason;

declare var NSURLErrorNetworkUnavailableReasonKey: string;

declare const NSURLErrorNoPermissionsToReadFile: number;

declare const NSURLErrorNotConnectedToInternet: number;

declare const NSURLErrorRedirectToNonExistentLocation: number;

declare const NSURLErrorRequestBodyStreamExhausted: number;

declare const NSURLErrorResourceUnavailable: number;

declare const NSURLErrorSecureConnectionFailed: number;

declare const NSURLErrorServerCertificateHasBadDate: number;

declare const NSURLErrorServerCertificateHasUnknownRoot: number;

declare const NSURLErrorServerCertificateNotYetValid: number;

declare const NSURLErrorServerCertificateUntrusted: number;

declare const NSURLErrorTimedOut: number;

declare const NSURLErrorUnknown: number;

declare const NSURLErrorUnsupportedURL: number;

declare const NSURLErrorUserAuthenticationRequired: number;

declare const NSURLErrorUserCancelledAuthentication: number;

declare const NSURLErrorZeroByteResource: number;

declare var NSURLFileAllocatedSizeKey: string;

declare var NSURLFileResourceIdentifierKey: string;

declare var NSURLFileResourceTypeBlockSpecial: string;

declare var NSURLFileResourceTypeCharacterSpecial: string;

declare var NSURLFileResourceTypeDirectory: string;

declare var NSURLFileResourceTypeKey: string;

declare var NSURLFileResourceTypeNamedPipe: string;

declare var NSURLFileResourceTypeRegular: string;

declare var NSURLFileResourceTypeSocket: string;

declare var NSURLFileResourceTypeSymbolicLink: string;

declare var NSURLFileResourceTypeUnknown: string;

declare var NSURLFileScheme: string;

declare var NSURLFileSecurityKey: string;

declare var NSURLFileSizeKey: string;

declare var NSURLGenerationIdentifierKey: string;

declare class NSURLHandle extends NSObject {
}

enum NSURLHandleStatus {

	NotLoaded = 0,

	LoadSucceeded = 1,

	LoadInProgress = 2,

	LoadFailed = 3
}

globalThis.NSURLHandleStatus = NSURLHandleStatus;

declare var NSURLHasHiddenExtensionKey: string;

declare var NSURLIsAliasFileKey: string;

declare var NSURLIsApplicationKey: string;

declare var NSURLIsDirectoryKey: string;

declare var NSURLIsExcludedFromBackupKey: string;

declare var NSURLIsExecutableKey: string;

declare var NSURLIsHiddenKey: string;

declare var NSURLIsMountTriggerKey: string;

declare var NSURLIsPackageKey: string;

declare var NSURLIsReadableKey: string;

declare var NSURLIsRegularFileKey: string;

declare var NSURLIsSymbolicLinkKey: string;

declare var NSURLIsSystemImmutableKey: string;

declare var NSURLIsUbiquitousItemKey: string;

declare var NSURLIsUserImmutableKey: string;

declare var NSURLIsVolumeKey: string;

declare var NSURLIsWritableKey: string;

declare var NSURLKeysOfUnsetValuesKey: string;

declare var NSURLLabelColorKey: string;

declare var NSURLLabelNumberKey: string;

declare var NSURLLinkCountKey: string;

declare var NSURLLocalizedLabelKey: string;

declare var NSURLLocalizedNameKey: string;

declare var NSURLLocalizedTypeDescriptionKey: string;

declare var NSURLNameKey: string;

declare var NSURLParentDirectoryURLKey: string;

declare var NSURLPathKey: string;

declare var NSURLPreferredIOBlockSizeKey: string;

declare class NSURLProtectionSpace extends NSObject implements NSCopying, NSSecureCoding {

	readonly authenticationMethod: string;

	readonly distinguishedNames: NSArray<NSData>;

	readonly host: string;

	readonly isProxy: boolean;

	readonly port: number;

	readonly protocol: string;

	readonly proxyType: string;

	readonly realm: string;

	readonly receivesCredentialSecurely: boolean;

	readonly serverTrust: any;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(host: string, port: number, protocol: string, realm: string, authenticationMethod: string);

	static create(proxyHost: string, port: number, type: string, realm: string, authenticationMethod: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var NSURLProtectionSpaceFTP: string;

declare var NSURLProtectionSpaceFTPProxy: string;

declare var NSURLProtectionSpaceHTTP: string;

declare var NSURLProtectionSpaceHTTPProxy: string;

declare var NSURLProtectionSpaceHTTPS: string;

declare var NSURLProtectionSpaceHTTPSProxy: string;

declare var NSURLProtectionSpaceSOCKSProxy: string;

declare class NSURLProtocol extends NSObject {

	static canInitWithRequest(_: NSURLRequest): boolean;

	static canInitWithTask(_: NSURLSessionTask): boolean;

	static canonicalRequestForRequest(_: NSURLRequest): NSURLRequest;

	static propertyForKeyInRequest(_: string, inRequest: NSURLRequest): any;

	static registerClass(_: typeof NSObject): boolean;

	static removePropertyForKeyInRequest(_: string, inRequest: NSMutableURLRequest): void;

	static requestIsCacheEquivalentToRequest(_: NSURLRequest, toRequest: NSURLRequest): boolean;

	static setPropertyForKeyInRequest(_: any, forKey: string, inRequest: NSMutableURLRequest): void;

	static unregisterClass(_: typeof NSObject): void;

	readonly cachedResponse: NSCachedURLResponse;

	readonly client: NSURLProtocolClient;

	readonly request: NSURLRequest;

	readonly task: NSURLSessionTask;

	static create(request: NSURLRequest, cachedResponse: NSCachedURLResponse, client: NSURLProtocolClient);

	static create(task: NSURLSessionTask, cachedResponse: NSCachedURLResponse, client: NSURLProtocolClient);

	startLoading(): void;

	stopLoading(): void;
}

interface NSURLProtocolClient extends NSObjectProtocol {

	URLProtocolCachedResponseIsValid(_: NSURLProtocol, cachedResponseIsValid: NSCachedURLResponse): void;

	URLProtocolDidCancelAuthenticationChallenge(_: NSURLProtocol, didCancelAuthenticationChallenge: NSURLAuthenticationChallenge): void;

	URLProtocolDidFailWithError(_: NSURLProtocol, didFailWithError: NSError): void;

	URLProtocolDidLoadData(_: NSURLProtocol, didLoadData: NSData): void;

	URLProtocolDidReceiveAuthenticationChallenge(_: NSURLProtocol, didReceiveAuthenticationChallenge: NSURLAuthenticationChallenge): void;

	URLProtocolDidReceiveResponseCacheStoragePolicy(_: NSURLProtocol, didReceiveResponse: NSURLResponse, cacheStoragePolicy: NSURLCacheStoragePolicy): void;

	URLProtocolWasRedirectedToRequestRedirectResponse(_: NSURLProtocol, wasRedirectedToRequest: NSURLRequest, redirectResponse: NSURLResponse): void;

	URLProtocolDidFinishLoading(_: NSURLProtocol): void;
}
declare var NSURLProtocolClient: {

	prototype: NSURLProtocolClient;
};

declare var NSURLQuarantinePropertiesKey: string;

declare class NSURLQueryItem extends NSObject implements NSCopying, NSSecureCoding {

	static queryItemWithNameValue(_: string, value?: string): NSURLQueryItem;

	readonly name: string;

	readonly value: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(name: string, value: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NSURLRelationship {

	Contains = 0,

	Same = 1,

	Other = 2
}

globalThis.NSURLRelationship = NSURLRelationship;

declare class NSURLRequest extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static requestWithURL(_: NSURL): NSURLRequest;

	static requestWithURLCachePolicyTimeoutInterval(_: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: number): NSURLRequest;

	readonly HTTPBody: NSData;

	readonly HTTPBodyStream: NSInputStream;

	readonly HTTPMethod: string;

	readonly HTTPShouldHandleCookies: boolean;

	readonly HTTPShouldUsePipelining: boolean;

	readonly URL: NSURL;

	readonly allHTTPHeaderFields: NSDictionary<string, string>;

	readonly allowsCellularAccess: boolean;

	readonly allowsConstrainedNetworkAccess: boolean;

	readonly allowsExpensiveNetworkAccess: boolean;

	readonly cachePolicy: NSURLRequestCachePolicy;

	readonly mainDocumentURL: NSURL;

	readonly networkServiceType: NSURLRequestNetworkServiceType;

	readonly timeoutInterval: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(URL: NSURL);

	static create(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	mutableCopyWithZone(_?: any): any;

	valueForHTTPHeaderField(_: string): string;
}

enum NSURLRequestCachePolicy {

	UseProtocolCachePolicy = 0,

	ReloadIgnoringLocalCacheData = 1,

	ReloadIgnoringLocalAndRemoteCacheData = 4,

	ReloadIgnoringCacheData = 1,

	ReturnCacheDataElseLoad = 2,

	ReturnCacheDataDontLoad = 3,

	ReloadRevalidatingCacheData = 5
}

globalThis.NSURLRequestCachePolicy = NSURLRequestCachePolicy;

enum NSURLRequestNetworkServiceType {

	NetworkServiceTypeDefault = 0,

	NetworkServiceTypeVoIP = 1,

	NetworkServiceTypeVideo = 2,

	NetworkServiceTypeBackground = 3,

	NetworkServiceTypeVoice = 4,

	NetworkServiceTypeResponsiveData = 6,

	NetworkServiceTypeAVStreaming = 8,

	NetworkServiceTypeResponsiveAV = 9,

	NetworkServiceTypeCallSignaling = 11
}

globalThis.NSURLRequestNetworkServiceType = NSURLRequestNetworkServiceType;

declare class NSURLResponse extends NSObject implements NSCopying, NSSecureCoding {

	readonly MIMEType: string;

	readonly URL: NSURL;

	readonly expectedContentLength: number;

	readonly suggestedFilename: string;

	readonly textEncodingName: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(URL: NSURL, MIMEType: string, expectedContentLength: number, textEncodingName: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NSURLSession extends NSObject {

	static sessionWithConfiguration(_: NSURLSessionConfiguration): NSURLSession;

	static sessionWithConfigurationDelegateDelegateQueue(_: NSURLSessionConfiguration, delegate?: NSURLSessionDelegate, delegateQueue?: NSOperationQueue): NSURLSession;

	readonly configuration: NSURLSessionConfiguration;

	readonly delegate: NSURLSessionDelegate;

	readonly delegateQueue: NSOperationQueue;

	setSessionDescription(_: string)

	sessionDescription: string;

	static sharedSession(): NSURLSession;

	dataTaskWithRequest(_: NSURLRequest): NSURLSessionDataTask;

	dataTaskWithRequestCompletionHandler(_: NSURLRequest, completionHandler?: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDataTask;

	dataTaskWithURL(_: NSURL): NSURLSessionDataTask;

	dataTaskWithURLCompletionHandler(_: NSURL, completionHandler?: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDataTask;

	downloadTaskWithRequest(_: NSURLRequest): NSURLSessionDownloadTask;

	downloadTaskWithRequestCompletionHandler(_: NSURLRequest, completionHandler?: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDownloadTask;

	downloadTaskWithResumeData(_: NSData): NSURLSessionDownloadTask;

	downloadTaskWithResumeDataCompletionHandler(_: NSData, completionHandler?: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDownloadTask;

	downloadTaskWithURL(_: NSURL): NSURLSessionDownloadTask;

	downloadTaskWithURLCompletionHandler(_: NSURL, completionHandler?: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDownloadTask;

	finishTasksAndInvalidate(): void;

	flushWithCompletionHandler(_: () => void): void;

	getAllTasksWithCompletionHandler(_: (p1: NSArray<NSURLSessionTask>) => void): void;

	getTasksWithCompletionHandler(_: (p1: NSArray<NSURLSessionDataTask>, p2: NSArray<NSURLSessionUploadTask>, p3: NSArray<NSURLSessionDownloadTask>) => void): void;

	invalidateAndCancel(): void;

	resetWithCompletionHandler(_: () => void): void;

	streamTaskWithHostNamePort(_: string, port: number): NSURLSessionStreamTask;

	streamTaskWithNetService(_: NSNetService): NSURLSessionStreamTask;

	uploadTaskWithRequestFromData(_: NSURLRequest, fromData: NSData): NSURLSessionUploadTask;

	uploadTaskWithRequestFromDataCompletionHandler(_: NSURLRequest, fromData?: NSData, completionHandler?: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionUploadTask;

	uploadTaskWithRequestFromFile(_: NSURLRequest, fromFile: NSURL): NSURLSessionUploadTask;

	uploadTaskWithRequestFromFileCompletionHandler(_: NSURLRequest, fromFile: NSURL, completionHandler?: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): NSURLSessionUploadTask;

	uploadTaskWithStreamedRequest(_: NSURLRequest): NSURLSessionUploadTask;

	webSocketTaskWithRequest(_: NSURLRequest): NSURLSessionWebSocketTask;

	webSocketTaskWithURL(_: NSURL): NSURLSessionWebSocketTask;

	webSocketTaskWithURLProtocols(_: NSURL, protocols: NSArray<string>): NSURLSessionWebSocketTask;
}

enum NSURLSessionAuthChallengeDisposition {

	UseCredential = 0,

	PerformDefaultHandling = 1,

	CancelAuthenticationChallenge = 2,

	RejectProtectionSpace = 3
}

globalThis.NSURLSessionAuthChallengeDisposition = NSURLSessionAuthChallengeDisposition;

declare class NSURLSessionConfiguration extends NSObject implements NSCopying {

	static backgroundSessionConfigurationWithIdentifier(withIdentifier: string): NSURLSessionConfiguration;

	setHTTPAdditionalHeaders(_: NSDictionary<any, any>)

	HTTPAdditionalHeaders: NSDictionary<any, any>;

	setHTTPCookieAcceptPolicy(_: NSHTTPCookieAcceptPolicy)

	HTTPCookieAcceptPolicy: NSHTTPCookieAcceptPolicy;

	setHTTPCookieStorage(_: NSHTTPCookieStorage)

	HTTPCookieStorage: NSHTTPCookieStorage;

	setHTTPMaximumConnectionsPerHost(_: number)

	HTTPMaximumConnectionsPerHost: number;

	setHTTPShouldSetCookies(_: boolean)

	HTTPShouldSetCookies: boolean;

	setHTTPShouldUsePipelining(_: boolean)

	HTTPShouldUsePipelining: boolean;

	setTLSMaximumSupportedProtocol(_: SSLProtocol)

	TLSMaximumSupportedProtocol: SSLProtocol;

	setTLSMaximumSupportedProtocolVersion(_: tls_protocol_version_t)

	TLSMaximumSupportedProtocolVersion: tls_protocol_version_t;

	setTLSMinimumSupportedProtocol(_: SSLProtocol)

	TLSMinimumSupportedProtocol: SSLProtocol;

	setTLSMinimumSupportedProtocolVersion(_: tls_protocol_version_t)

	TLSMinimumSupportedProtocolVersion: tls_protocol_version_t;

	setURLCache(_: NSURLCache)

	URLCache: NSURLCache;

	setURLCredentialStorage(_: NSURLCredentialStorage)

	URLCredentialStorage: NSURLCredentialStorage;

	setAllowsCellularAccess(_: boolean)

	allowsCellularAccess: boolean;

	setAllowsConstrainedNetworkAccess(_: boolean)

	allowsConstrainedNetworkAccess: boolean;

	setAllowsExpensiveNetworkAccess(_: boolean)

	allowsExpensiveNetworkAccess: boolean;

	setConnectionProxyDictionary(_: NSDictionary<any, any>)

	connectionProxyDictionary: NSDictionary<any, any>;

	setDiscretionary(_: boolean)

	isDiscretionary: boolean;

	readonly identifier: string;

	setNetworkServiceType(_: NSURLRequestNetworkServiceType)

	networkServiceType: NSURLRequestNetworkServiceType;

	setProtocolClasses(_: NSArray<typeof NSObject>)

	protocolClasses: NSArray<typeof NSObject>;

	setRequestCachePolicy(_: NSURLRequestCachePolicy)

	requestCachePolicy: NSURLRequestCachePolicy;

	setSharedContainerIdentifier(_: string)

	sharedContainerIdentifier: string;

	setShouldUseExtendedBackgroundIdleMode(_: boolean)

	shouldUseExtendedBackgroundIdleMode: boolean;

	setTimeoutIntervalForRequest(_: number)

	timeoutIntervalForRequest: number;

	setTimeoutIntervalForResource(_: number)

	timeoutIntervalForResource: number;

	setWaitsForConnectivity(_: boolean)

	waitsForConnectivity: boolean;

	static defaultSessionConfiguration(): NSURLSessionConfiguration;

	static ephemeralSessionConfiguration(): NSURLSessionConfiguration;

	copyWithZone(_?: any): any;
}

interface NSURLSessionDataDelegate extends NSURLSessionTaskDelegate {

	URLSessionDataTaskDidBecomeDownloadTask?(_: NSURLSession, dataTask: NSURLSessionDataTask, didBecomeDownloadTask: NSURLSessionDownloadTask): void;

	URLSessionDataTaskDidBecomeStreamTask?(_: NSURLSession, dataTask: NSURLSessionDataTask, didBecomeStreamTask: NSURLSessionStreamTask): void;

	URLSessionDataTaskDidReceiveData?(_: NSURLSession, dataTask: NSURLSessionDataTask, didReceiveData: NSData): void;

	URLSessionDataTaskDidReceiveResponseCompletionHandler?(_: NSURLSession, dataTask: NSURLSessionDataTask, didReceiveResponse: NSURLResponse, completionHandler: (p1: NSURLSessionResponseDisposition) => void): void;

	URLSessionDataTaskWillCacheResponseCompletionHandler?(_: NSURLSession, dataTask: NSURLSessionDataTask, willCacheResponse: NSCachedURLResponse, completionHandler?: (p1: NSCachedURLResponse) => void): void;
}
declare var NSURLSessionDataDelegate: {

	prototype: NSURLSessionDataDelegate;
};

declare class NSURLSessionDataTask extends NSURLSessionTask {
}

enum NSURLSessionDelayedRequestDisposition {

	ContinueLoading = 0,

	UseNewRequest = 1,

	Cancel = 2
}

globalThis.NSURLSessionDelayedRequestDisposition = NSURLSessionDelayedRequestDisposition;

interface NSURLSessionDelegate extends NSObjectProtocol {

	URLSessionDidBecomeInvalidWithError?(_: NSURLSession, didBecomeInvalidWithError?: NSError): void;

	URLSessionDidReceiveChallengeCompletionHandler?(_: NSURLSession, didReceiveChallenge: NSURLAuthenticationChallenge, completionHandler?: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;
}
declare var NSURLSessionDelegate: {

	prototype: NSURLSessionDelegate;
};

interface NSURLSessionDownloadDelegate extends NSURLSessionTaskDelegate {

	URLSessionDownloadTaskDidFinishDownloadingToURL(_: NSURLSession, downloadTask: NSURLSessionDownloadTask, didFinishDownloadingToURL: NSURL): void;

	URLSessionDownloadTaskDidResumeAtOffsetExpectedTotalBytes?(_: NSURLSession, downloadTask: NSURLSessionDownloadTask, didResumeAtOffset: number, expectedTotalBytes: number): void;

	URLSessionDownloadTaskDidWriteDataTotalBytesWrittenTotalBytesExpectedToWrite?(_: NSURLSession, downloadTask: NSURLSessionDownloadTask, didWriteData: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;
}
declare var NSURLSessionDownloadDelegate: {

	prototype: NSURLSessionDownloadDelegate;
};

declare class NSURLSessionDownloadTask extends NSURLSessionTask {

	cancelByProducingResumeData(_?: (p1: NSData) => void): void;
}

declare var NSURLSessionDownloadTaskResumeData: string;

enum NSURLSessionResponseDisposition {

	Cancel = 0,

	Allow = 1,

	BecomeDownload = 2,

	BecomeStream = 3
}

globalThis.NSURLSessionResponseDisposition = NSURLSessionResponseDisposition;

interface NSURLSessionStreamDelegate extends NSURLSessionTaskDelegate {

	URLSessionBetterRouteDiscoveredForStreamTask?(_: NSURLSession, betterRouteDiscoveredForStreamTask: NSURLSessionStreamTask): void;

	URLSessionReadClosedForStreamTask?(_: NSURLSession, readClosedForStreamTask: NSURLSessionStreamTask): void;

	URLSessionStreamTaskDidBecomeInputStreamOutputStream?(_: NSURLSession, streamTask: NSURLSessionStreamTask, didBecomeInputStream: NSInputStream, outputStream: NSOutputStream): void;

	URLSessionWriteClosedForStreamTask?(_: NSURLSession, writeClosedForStreamTask: NSURLSessionStreamTask): void;
}
declare var NSURLSessionStreamDelegate: {

	prototype: NSURLSessionStreamDelegate;
};

declare class NSURLSessionStreamTask extends NSURLSessionTask {

	captureStreams(): void;

	closeRead(): void;

	closeWrite(): void;

	readDataOfMinLengthMaxLengthTimeoutCompletionHandler(_: number, maxLength: number, timeout: number, completionHandler?: (p1: NSData, p2: boolean, p3: NSError) => void): void;

	startSecureConnection(): void;

	writeDataTimeoutCompletionHandler(_: NSData, timeout: number, completionHandler?: (p1: NSError) => void): void;
}

declare class NSURLSessionTask extends NSObject implements NSCopying, NSProgressReporting {

	setCountOfBytesClientExpectsToReceive(_: number)

	countOfBytesClientExpectsToReceive: number;

	setCountOfBytesClientExpectsToSend(_: number)

	countOfBytesClientExpectsToSend: number;

	readonly countOfBytesExpectedToReceive: number;

	readonly countOfBytesExpectedToSend: number;

	readonly countOfBytesReceived: number;

	readonly countOfBytesSent: number;

	readonly currentRequest: NSURLRequest;

	setEarliestBeginDate(_: Date)

	earliestBeginDate: Date;

	readonly error: NSError;

	readonly originalRequest: NSURLRequest;

	setPriority(_: number)

	priority: number;

	readonly response: NSURLResponse;

	readonly state: NSURLSessionTaskState;

	setTaskDescription(_: string)

	taskDescription: string;

	readonly taskIdentifier: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly progress: NSProgress; // inherited from NSProgressReporting

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	cancel(): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	resume(): void;

	retainCount(): number;

	self(): this;

	suspend(): void;
}

interface NSURLSessionTaskDelegate extends NSURLSessionDelegate {

	URLSessionTaskDidCompleteWithError?(_: NSURLSession, task: NSURLSessionTask, didCompleteWithError?: NSError): void;

	URLSessionTaskDidFinishCollectingMetrics?(_: NSURLSession, task: NSURLSessionTask, didFinishCollectingMetrics: NSURLSessionTaskMetrics): void;

	URLSessionTaskDidReceiveChallengeCompletionHandler?(_: NSURLSession, task: NSURLSessionTask, didReceiveChallenge: NSURLAuthenticationChallenge, completionHandler?: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend?(_: NSURLSession, task: NSURLSessionTask, didSendBodyData: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;

	URLSessionTaskNeedNewBodyStream?(_: NSURLSession, task: NSURLSessionTask, needNewBodyStream?: (p1: NSInputStream) => void): void;

	URLSessionTaskWillBeginDelayedRequestCompletionHandler?(_: NSURLSession, task: NSURLSessionTask, willBeginDelayedRequest: NSURLRequest, completionHandler?: (p1: NSURLSessionDelayedRequestDisposition, p2: NSURLRequest) => void): void;

	URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler?(_: NSURLSession, task: NSURLSessionTask, willPerformHTTPRedirection: NSHTTPURLResponse, newRequest: NSURLRequest, completionHandler?: (p1: NSURLRequest) => void): void;

	URLSessionTaskIsWaitingForConnectivity?(_: NSURLSession, taskIsWaitingForConnectivity: NSURLSessionTask): void;
}
declare var NSURLSessionTaskDelegate: {

	prototype: NSURLSessionTaskDelegate;
};

declare class NSURLSessionTaskMetrics extends NSObject {

	readonly redirectCount: number;

	readonly taskInterval: NSDateInterval;

	readonly transactionMetrics: NSArray<NSURLSessionTaskTransactionMetrics>;
}

enum NSURLSessionTaskMetricsResourceFetchType {

	Unknown = 0,

	NetworkLoad = 1,

	ServerPush = 2,

	LocalCache = 3
}

globalThis.NSURLSessionTaskMetricsResourceFetchType = NSURLSessionTaskMetricsResourceFetchType;

declare var NSURLSessionTaskPriorityDefault: number;

declare var NSURLSessionTaskPriorityHigh: number;

declare var NSURLSessionTaskPriorityLow: number;

enum NSURLSessionTaskState {

	Running = 0,

	Suspended = 1,

	Canceling = 2,

	Completed = 3
}

globalThis.NSURLSessionTaskState = NSURLSessionTaskState;

declare class NSURLSessionTaskTransactionMetrics extends NSObject {

	readonly isCellular: boolean;

	readonly connectEndDate: Date;

	readonly connectStartDate: Date;

	readonly isConstrained: boolean;

	readonly countOfRequestBodyBytesBeforeEncoding: number;

	readonly countOfRequestBodyBytesSent: number;

	readonly countOfRequestHeaderBytesSent: number;

	readonly countOfResponseBodyBytesAfterDecoding: number;

	readonly countOfResponseBodyBytesReceived: number;

	readonly countOfResponseHeaderBytesReceived: number;

	readonly domainLookupEndDate: Date;

	readonly domainLookupStartDate: Date;

	readonly isExpensive: boolean;

	readonly fetchStartDate: Date;

	readonly localAddress: string;

	readonly localPort: number;

	readonly isMultipath: boolean;

	readonly negotiatedTLSCipherSuite: number;

	readonly negotiatedTLSProtocolVersion: number;

	readonly networkProtocolName: string;

	readonly isProxyConnection: boolean;

	readonly remoteAddress: string;

	readonly remotePort: number;

	readonly request: NSURLRequest;

	readonly requestEndDate: Date;

	readonly requestStartDate: Date;

	readonly resourceFetchType: NSURLSessionTaskMetricsResourceFetchType;

	readonly response: NSURLResponse;

	readonly responseEndDate: Date;

	readonly responseStartDate: Date;

	readonly isReusedConnection: boolean;

	readonly secureConnectionEndDate: Date;

	readonly secureConnectionStartDate: Date;
}

declare var NSURLSessionTransferSizeUnknown: number;

declare class NSURLSessionUploadTask extends NSURLSessionDataTask {
}

enum NSURLSessionWebSocketCloseCode {

	Invalid = 0,

	NormalClosure = 1000,

	GoingAway = 1001,

	ProtocolError = 1002,

	UnsupportedData = 1003,

	NoStatusReceived = 1005,

	AbnormalClosure = 1006,

	InvalidFramePayloadData = 1007,

	PolicyViolation = 1008,

	MessageTooBig = 1009,

	MandatoryExtensionMissing = 1010,

	InternalServerError = 1011,

	TLSHandshakeFailure = 1015
}

globalThis.NSURLSessionWebSocketCloseCode = NSURLSessionWebSocketCloseCode;

interface NSURLSessionWebSocketDelegate extends NSURLSessionTaskDelegate {

	URLSessionWebSocketTaskDidCloseWithCodeReason?(_: NSURLSession, webSocketTask: NSURLSessionWebSocketTask, didCloseWithCode: NSURLSessionWebSocketCloseCode, reason?: NSData): void;

	URLSessionWebSocketTaskDidOpenWithProtocol?(_: NSURLSession, webSocketTask: NSURLSessionWebSocketTask, didOpenWithProtocol?: string): void;
}
declare var NSURLSessionWebSocketDelegate: {

	prototype: NSURLSessionWebSocketDelegate;
};

declare class NSURLSessionWebSocketMessage extends NSObject {

	readonly data: NSData;

	readonly string: string;

	readonly type: NSURLSessionWebSocketMessageType;

	static create(data: NSData);

	static create(string: string);
}

enum NSURLSessionWebSocketMessageType {

	Data = 0,

	String = 1
}

globalThis.NSURLSessionWebSocketMessageType = NSURLSessionWebSocketMessageType;

declare class NSURLSessionWebSocketTask extends NSURLSessionTask {

	readonly closeCode: NSURLSessionWebSocketCloseCode;

	readonly closeReason: NSData;

	setMaximumMessageSize(_: number)

	maximumMessageSize: number;

	cancelWithCloseCodeReason(_: NSURLSessionWebSocketCloseCode, reason?: NSData): void;

	receiveMessageWithCompletionHandler(_?: (p1: NSURLSessionWebSocketMessage, p2: NSError) => void): void;

	sendMessageCompletionHandler(_: NSURLSessionWebSocketMessage, completionHandler?: (p1: NSError) => void): void;

	sendPingWithPongReceiveHandler(_?: (p1: NSError) => void): void;
}

declare var NSURLTagNamesKey: string;

declare var NSURLThumbnailDictionaryKey: string;

declare var NSURLThumbnailKey: string;

declare var NSURLTotalFileAllocatedSizeKey: string;

declare var NSURLTotalFileSizeKey: string;

declare var NSURLTypeIdentifierKey: string;

declare var NSURLUbiquitousItemContainerDisplayNameKey: string;

declare var NSURLUbiquitousItemDownloadRequestedKey: string;

declare var NSURLUbiquitousItemDownloadingErrorKey: string;

declare var NSURLUbiquitousItemDownloadingStatusCurrent: string;

declare var NSURLUbiquitousItemDownloadingStatusDownloaded: string;

declare var NSURLUbiquitousItemDownloadingStatusKey: string;

declare var NSURLUbiquitousItemDownloadingStatusNotDownloaded: string;

declare var NSURLUbiquitousItemHasUnresolvedConflictsKey: string;

declare var NSURLUbiquitousItemIsDownloadingKey: string;

declare var NSURLUbiquitousItemIsSharedKey: string;

declare var NSURLUbiquitousItemIsUploadedKey: string;

declare var NSURLUbiquitousItemIsUploadingKey: string;

declare var NSURLUbiquitousItemUploadingErrorKey: string;

declare var NSURLUbiquitousSharedItemCurrentUserPermissionsKey: string;

declare var NSURLUbiquitousSharedItemCurrentUserRoleKey: string;

declare var NSURLUbiquitousSharedItemMostRecentEditorNameComponentsKey: string;

declare var NSURLUbiquitousSharedItemOwnerNameComponentsKey: string;

declare var NSURLUbiquitousSharedItemPermissionsReadOnly: string;

declare var NSURLUbiquitousSharedItemPermissionsReadWrite: string;

declare var NSURLUbiquitousSharedItemRoleOwner: string;

declare var NSURLUbiquitousSharedItemRoleParticipant: string;

declare var NSURLVolumeAvailableCapacityForImportantUsageKey: string;

declare var NSURLVolumeAvailableCapacityForOpportunisticUsageKey: string;

declare var NSURLVolumeAvailableCapacityKey: string;

declare var NSURLVolumeCreationDateKey: string;

declare var NSURLVolumeIdentifierKey: string;

declare var NSURLVolumeIsAutomountedKey: string;

declare var NSURLVolumeIsBrowsableKey: string;

declare var NSURLVolumeIsEjectableKey: string;

declare var NSURLVolumeIsEncryptedKey: string;

declare var NSURLVolumeIsInternalKey: string;

declare var NSURLVolumeIsJournalingKey: string;

declare var NSURLVolumeIsLocalKey: string;

declare var NSURLVolumeIsReadOnlyKey: string;

declare var NSURLVolumeIsRemovableKey: string;

declare var NSURLVolumeIsRootFileSystemKey: string;

declare var NSURLVolumeLocalizedFormatDescriptionKey: string;

declare var NSURLVolumeLocalizedNameKey: string;

declare var NSURLVolumeMaximumFileSizeKey: string;

declare var NSURLVolumeNameKey: string;

declare var NSURLVolumeResourceCountKey: string;

declare var NSURLVolumeSupportsAccessPermissionsKey: string;

declare var NSURLVolumeSupportsAdvisoryFileLockingKey: string;

declare var NSURLVolumeSupportsCasePreservedNamesKey: string;

declare var NSURLVolumeSupportsCaseSensitiveNamesKey: string;

declare var NSURLVolumeSupportsCompressionKey: string;

declare var NSURLVolumeSupportsExclusiveRenamingKey: string;

declare var NSURLVolumeSupportsExtendedSecurityKey: string;

declare var NSURLVolumeSupportsFileCloningKey: string;

declare var NSURLVolumeSupportsHardLinksKey: string;

declare var NSURLVolumeSupportsImmutableFilesKey: string;

declare var NSURLVolumeSupportsJournalingKey: string;

declare var NSURLVolumeSupportsPersistentIDsKey: string;

declare var NSURLVolumeSupportsRenamingKey: string;

declare var NSURLVolumeSupportsRootDirectoryDatesKey: string;

declare var NSURLVolumeSupportsSparseFilesKey: string;

declare var NSURLVolumeSupportsSwapRenamingKey: string;

declare var NSURLVolumeSupportsSymbolicLinksKey: string;

declare var NSURLVolumeSupportsVolumeSizesKey: string;

declare var NSURLVolumeSupportsZeroRunsKey: string;

declare var NSURLVolumeTotalCapacityKey: string;

declare var NSURLVolumeURLForRemountingKey: string;

declare var NSURLVolumeURLKey: string;

declare var NSURLVolumeUUIDStringKey: string;

declare const NSUTF16BigEndianStringEncoding: number;

declare const NSUTF16LittleEndianStringEncoding: number;

declare const NSUTF16StringEncoding: number;

declare const NSUTF32BigEndianStringEncoding: number;

declare const NSUTF32LittleEndianStringEncoding: number;

declare const NSUTF32StringEncoding: number;

declare const NSUTF8StringEncoding: number;

declare class NSUUID extends NSObject implements NSCopying, NSSecureCoding {

	static UUID(): NSUUID;

	readonly UUIDString: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(UUIDBytes: number);

	static create(UUIDString: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	getUUIDBytes(_: number): void;
}

declare const NSUbiquitousFileErrorMaximum: number;

declare const NSUbiquitousFileErrorMinimum: number;

declare const NSUbiquitousFileNotUploadedDueToQuotaError: number;

declare const NSUbiquitousFileUbiquityServerNotAvailable: number;

declare const NSUbiquitousFileUnavailableError: number;

declare class NSUbiquitousKeyValueStore extends NSObject {

	readonly dictionaryRepresentation: NSDictionary<string, any>;

	static defaultStore(): NSUbiquitousKeyValueStore;

	arrayForKey(_: string): NSArray<any>;

	boolForKey(_: string): boolean;

	dataForKey(_: string): NSData;

	dictionaryForKey(_: string): NSDictionary<string, any>;

	doubleForKey(_: string): number;

	longLongForKey(_: string): number;

	objectForKey(_: string): any;

	removeObjectForKey(_: string): void;

	setArrayForKey(_?: NSArray<any>, forKey: string): void;

	setBoolForKey(_: boolean, forKey: string): void;

	setDataForKey(_?: NSData, forKey: string): void;

	setDictionaryForKey(_?: NSDictionary<string, any>, forKey: string): void;

	setDoubleForKey(_: number, forKey: string): void;

	setLongLongForKey(_: number, forKey: string): void;

	setObjectForKey(_?: any, forKey: string): void;

	setStringForKey(_?: string, forKey: string): void;

	stringForKey(_: string): string;

	synchronize(): boolean;
}

declare const NSUbiquitousKeyValueStoreAccountChange: number;

declare var NSUbiquitousKeyValueStoreChangeReasonKey: string;

declare var NSUbiquitousKeyValueStoreChangedKeysKey: string;

declare var NSUbiquitousKeyValueStoreDidChangeExternallyNotification: string;

declare const NSUbiquitousKeyValueStoreInitialSyncChange: number;

declare const NSUbiquitousKeyValueStoreQuotaViolationChange: number;

declare const NSUbiquitousKeyValueStoreServerChange: number;

declare var NSUbiquityIdentityDidChangeNotification: string;

declare var NSUndefinedKeyException: string;

declare var NSUnderlyingErrorKey: string;

declare var NSUndoCloseGroupingRunLoopOrdering: number;

declare class NSUndoManager extends NSObject {

	readonly canRedo: boolean;

	readonly canUndo: boolean;

	readonly groupingLevel: number;

	setGroupsByEvent(_: boolean)

	groupsByEvent: boolean;

	setLevelsOfUndo(_: number)

	levelsOfUndo: number;

	readonly redoActionIsDiscardable: boolean;

	readonly redoActionName: string;

	readonly redoMenuItemTitle: string;

	readonly isRedoing: boolean;

	setRunLoopModes(_: NSArray<string>)

	runLoopModes: NSArray<string>;

	readonly undoActionIsDiscardable: boolean;

	readonly undoActionName: string;

	readonly undoMenuItemTitle: string;

	readonly isUndoRegistrationEnabled: boolean;

	readonly isUndoing: boolean;

	beginUndoGrouping(): void;

	disableUndoRegistration(): void;

	enableUndoRegistration(): void;

	endUndoGrouping(): void;

	prepareWithInvocationTarget(_: any): any;

	redo(): void;

	redoMenuTitleForUndoActionName(_: string): string;

	registerUndoWithTargetHandler(_: any, handler: (p1: any) => void): void;

	registerUndoWithTargetSelectorObject(_: any, selector: string, object_?: any): void;

	removeAllActions(): void;

	removeAllActionsWithTarget(_: any): void;

	setActionIsDiscardable(_: boolean): void;

	setActionName(_: string): void;

	undo(): void;

	undoMenuTitleForUndoActionName(_: string): string;

	undoNestedGroup(): void;
}

declare var NSUndoManagerCheckpointNotification: string;

declare var NSUndoManagerDidCloseUndoGroupNotification: string;

declare var NSUndoManagerDidOpenUndoGroupNotification: string;

declare var NSUndoManagerDidRedoChangeNotification: string;

declare var NSUndoManagerDidUndoChangeNotification: string;

declare var NSUndoManagerGroupIsDiscardableKey: string;

declare var NSUndoManagerWillCloseUndoGroupNotification: string;

declare var NSUndoManagerWillRedoChangeNotification: string;

declare var NSUndoManagerWillUndoChangeNotification: string;

declare const NSUnicodeStringEncoding: number;

declare var NSUnionOfArraysKeyValueOperator: string;

declare var NSUnionOfObjectsKeyValueOperator: string;

declare var NSUnionOfSetsKeyValueOperator: string;

declare function NSUnionRange(range1: NSRange, range2: NSRange): NSRange;

declare function NSUnionRect(aRect: CGRect, bRect: CGRect): CGRect;

declare class NSUniqueIDSpecifier extends NSScriptObjectSpecifier {

	setUniqueID(_: any)

	uniqueID: any;

	static create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier, key: string, uniqueID: any);
}

declare class NSUnit extends NSObject implements NSCopying, NSSecureCoding {

	readonly symbol: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(symbol: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitAcceleration extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitAcceleration; // inherited from NSDimension

	static gravity(): NSUnitAcceleration;

	static metersPerSecondSquared(): NSUnitAcceleration;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitAngle extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitAngle; // inherited from NSDimension

	static arcMinutes(): NSUnitAngle;

	static arcSeconds(): NSUnitAngle;

	static degrees(): NSUnitAngle;

	static gradians(): NSUnitAngle;

	static radians(): NSUnitAngle;

	static revolutions(): NSUnitAngle;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitArea extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitArea; // inherited from NSDimension

	static acres(): NSUnitArea;

	static ares(): NSUnitArea;

	static hectares(): NSUnitArea;

	static squareCentimeters(): NSUnitArea;

	static squareFeet(): NSUnitArea;

	static squareInches(): NSUnitArea;

	static squareKilometers(): NSUnitArea;

	static squareMegameters(): NSUnitArea;

	static squareMeters(): NSUnitArea;

	static squareMicrometers(): NSUnitArea;

	static squareMiles(): NSUnitArea;

	static squareMillimeters(): NSUnitArea;

	static squareNanometers(): NSUnitArea;

	static squareYards(): NSUnitArea;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitConcentrationMass extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitConcentrationMass; // inherited from NSDimension

	static millimolesPerLiterWithGramsPerMole(_: number): NSUnitConcentrationMass;

	static gramsPerLiter(): NSUnitConcentrationMass;

	static milligramsPerDeciliter(): NSUnitConcentrationMass;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitConverter extends NSObject {

	baseUnitValueFromValue(_: number): number;

	valueFromBaseUnitValue(_: number): number;
}

declare class NSUnitConverterLinear extends NSUnitConverter implements NSSecureCoding {

	readonly coefficient: number;

	readonly constant: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(coefficient: number);

	static create(coefficient: number, constant: number);

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitDispersion extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitDispersion; // inherited from NSDimension

	static partsPerMillion(): NSUnitDispersion;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitDuration extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitDuration; // inherited from NSDimension

	static hours(): NSUnitDuration;

	static microseconds(): NSUnitDuration;

	static milliseconds(): NSUnitDuration;

	static minutes(): NSUnitDuration;

	static nanoseconds(): NSUnitDuration;

	static picoseconds(): NSUnitDuration;

	static seconds(): NSUnitDuration;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitElectricCharge extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitElectricCharge; // inherited from NSDimension

	static ampereHours(): NSUnitElectricCharge;

	static coulombs(): NSUnitElectricCharge;

	static kiloampereHours(): NSUnitElectricCharge;

	static megaampereHours(): NSUnitElectricCharge;

	static microampereHours(): NSUnitElectricCharge;

	static milliampereHours(): NSUnitElectricCharge;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitElectricCurrent extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitElectricCurrent; // inherited from NSDimension

	static amperes(): NSUnitElectricCurrent;

	static kiloamperes(): NSUnitElectricCurrent;

	static megaamperes(): NSUnitElectricCurrent;

	static microamperes(): NSUnitElectricCurrent;

	static milliamperes(): NSUnitElectricCurrent;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitElectricPotentialDifference extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitElectricPotentialDifference; // inherited from NSDimension

	static kilovolts(): NSUnitElectricPotentialDifference;

	static megavolts(): NSUnitElectricPotentialDifference;

	static microvolts(): NSUnitElectricPotentialDifference;

	static millivolts(): NSUnitElectricPotentialDifference;

	static volts(): NSUnitElectricPotentialDifference;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitElectricResistance extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitElectricResistance; // inherited from NSDimension

	static kiloohms(): NSUnitElectricResistance;

	static megaohms(): NSUnitElectricResistance;

	static microohms(): NSUnitElectricResistance;

	static milliohms(): NSUnitElectricResistance;

	static ohms(): NSUnitElectricResistance;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitEnergy extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitEnergy; // inherited from NSDimension

	static calories(): NSUnitEnergy;

	static joules(): NSUnitEnergy;

	static kilocalories(): NSUnitEnergy;

	static kilojoules(): NSUnitEnergy;

	static kilowattHours(): NSUnitEnergy;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitFrequency extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitFrequency; // inherited from NSDimension

	static framesPerSecond(): NSUnitFrequency;

	static gigahertz(): NSUnitFrequency;

	static hertz(): NSUnitFrequency;

	static kilohertz(): NSUnitFrequency;

	static megahertz(): NSUnitFrequency;

	static microhertz(): NSUnitFrequency;

	static millihertz(): NSUnitFrequency;

	static nanohertz(): NSUnitFrequency;

	static terahertz(): NSUnitFrequency;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitFuelEfficiency extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitFuelEfficiency; // inherited from NSDimension

	static litersPer100Kilometers(): NSUnitFuelEfficiency;

	static milesPerGallon(): NSUnitFuelEfficiency;

	static milesPerImperialGallon(): NSUnitFuelEfficiency;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitIlluminance extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitIlluminance; // inherited from NSDimension

	static lux(): NSUnitIlluminance;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitInformationStorage extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitInformationStorage; // inherited from NSDimension

	static bits(): NSUnitInformationStorage;

	static bytes(): NSUnitInformationStorage;

	static exabits(): NSUnitInformationStorage;

	static exabytes(): NSUnitInformationStorage;

	static exbibits(): NSUnitInformationStorage;

	static exbibytes(): NSUnitInformationStorage;

	static gibibits(): NSUnitInformationStorage;

	static gibibytes(): NSUnitInformationStorage;

	static gigabits(): NSUnitInformationStorage;

	static gigabytes(): NSUnitInformationStorage;

	static kibibits(): NSUnitInformationStorage;

	static kibibytes(): NSUnitInformationStorage;

	static kilobits(): NSUnitInformationStorage;

	static kilobytes(): NSUnitInformationStorage;

	static mebibits(): NSUnitInformationStorage;

	static mebibytes(): NSUnitInformationStorage;

	static megabits(): NSUnitInformationStorage;

	static megabytes(): NSUnitInformationStorage;

	static nibbles(): NSUnitInformationStorage;

	static pebibits(): NSUnitInformationStorage;

	static pebibytes(): NSUnitInformationStorage;

	static petabits(): NSUnitInformationStorage;

	static petabytes(): NSUnitInformationStorage;

	static tebibits(): NSUnitInformationStorage;

	static tebibytes(): NSUnitInformationStorage;

	static terabits(): NSUnitInformationStorage;

	static terabytes(): NSUnitInformationStorage;

	static yobibits(): NSUnitInformationStorage;

	static yobibytes(): NSUnitInformationStorage;

	static yottabits(): NSUnitInformationStorage;

	static yottabytes(): NSUnitInformationStorage;

	static zebibits(): NSUnitInformationStorage;

	static zebibytes(): NSUnitInformationStorage;

	static zettabits(): NSUnitInformationStorage;

	static zettabytes(): NSUnitInformationStorage;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitLength extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitLength; // inherited from NSDimension

	static astronomicalUnits(): NSUnitLength;

	static centimeters(): NSUnitLength;

	static decameters(): NSUnitLength;

	static decimeters(): NSUnitLength;

	static fathoms(): NSUnitLength;

	static feet(): NSUnitLength;

	static furlongs(): NSUnitLength;

	static hectometers(): NSUnitLength;

	static inches(): NSUnitLength;

	static kilometers(): NSUnitLength;

	static lightyears(): NSUnitLength;

	static megameters(): NSUnitLength;

	static meters(): NSUnitLength;

	static micrometers(): NSUnitLength;

	static miles(): NSUnitLength;

	static millimeters(): NSUnitLength;

	static nanometers(): NSUnitLength;

	static nauticalMiles(): NSUnitLength;

	static parsecs(): NSUnitLength;

	static picometers(): NSUnitLength;

	static scandinavianMiles(): NSUnitLength;

	static yards(): NSUnitLength;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitMass extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitMass; // inherited from NSDimension

	static carats(): NSUnitMass;

	static centigrams(): NSUnitMass;

	static decigrams(): NSUnitMass;

	static grams(): NSUnitMass;

	static kilograms(): NSUnitMass;

	static metricTons(): NSUnitMass;

	static micrograms(): NSUnitMass;

	static milligrams(): NSUnitMass;

	static nanograms(): NSUnitMass;

	static ounces(): NSUnitMass;

	static ouncesTroy(): NSUnitMass;

	static picograms(): NSUnitMass;

	static poundsMass(): NSUnitMass;

	static shortTons(): NSUnitMass;

	static slugs(): NSUnitMass;

	static stones(): NSUnitMass;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitPower extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitPower; // inherited from NSDimension

	static femtowatts(): NSUnitPower;

	static gigawatts(): NSUnitPower;

	static horsepower(): NSUnitPower;

	static kilowatts(): NSUnitPower;

	static megawatts(): NSUnitPower;

	static microwatts(): NSUnitPower;

	static milliwatts(): NSUnitPower;

	static nanowatts(): NSUnitPower;

	static picowatts(): NSUnitPower;

	static terawatts(): NSUnitPower;

	static watts(): NSUnitPower;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitPressure extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitPressure; // inherited from NSDimension

	static bars(): NSUnitPressure;

	static gigapascals(): NSUnitPressure;

	static hectopascals(): NSUnitPressure;

	static inchesOfMercury(): NSUnitPressure;

	static kilopascals(): NSUnitPressure;

	static megapascals(): NSUnitPressure;

	static millibars(): NSUnitPressure;

	static millimetersOfMercury(): NSUnitPressure;

	static newtonsPerMetersSquared(): NSUnitPressure;

	static poundsForcePerSquareInch(): NSUnitPressure;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitSpeed extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitSpeed; // inherited from NSDimension

	static kilometersPerHour(): NSUnitSpeed;

	static knots(): NSUnitSpeed;

	static metersPerSecond(): NSUnitSpeed;

	static milesPerHour(): NSUnitSpeed;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitTemperature extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitTemperature; // inherited from NSDimension

	static celsius(): NSUnitTemperature;

	static fahrenheit(): NSUnitTemperature;

	static kelvin(): NSUnitTemperature;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class NSUnitVolume extends NSDimension implements NSSecureCoding {

	static baseUnit(): NSUnitVolume; // inherited from NSDimension

	static acreFeet(): NSUnitVolume;

	static bushels(): NSUnitVolume;

	static centiliters(): NSUnitVolume;

	static cubicCentimeters(): NSUnitVolume;

	static cubicDecimeters(): NSUnitVolume;

	static cubicFeet(): NSUnitVolume;

	static cubicInches(): NSUnitVolume;

	static cubicKilometers(): NSUnitVolume;

	static cubicMeters(): NSUnitVolume;

	static cubicMiles(): NSUnitVolume;

	static cubicMillimeters(): NSUnitVolume;

	static cubicYards(): NSUnitVolume;

	static cups(): NSUnitVolume;

	static deciliters(): NSUnitVolume;

	static fluidOunces(): NSUnitVolume;

	static gallons(): NSUnitVolume;

	static imperialFluidOunces(): NSUnitVolume;

	static imperialGallons(): NSUnitVolume;

	static imperialPints(): NSUnitVolume;

	static imperialQuarts(): NSUnitVolume;

	static imperialTablespoons(): NSUnitVolume;

	static imperialTeaspoons(): NSUnitVolume;

	static kiloliters(): NSUnitVolume;

	static liters(): NSUnitVolume;

	static megaliters(): NSUnitVolume;

	static metricCups(): NSUnitVolume;

	static milliliters(): NSUnitVolume;

	static pints(): NSUnitVolume;

	static quarts(): NSUnitVolume;

	static tablespoons(): NSUnitVolume;

	static teaspoons(): NSUnitVolume;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare const NSUnknownKeyScriptError: number;

declare const NSUnknownKeySpecifierError: number;

declare class NSUserActivity extends NSObject {

	readonly activityType: string;

	setDelegate(_: NSUserActivityDelegate)

	delegate: NSUserActivityDelegate;

	setEligibleForHandoff(_: boolean)

	isEligibleForHandoff: boolean;

	setEligibleForPublicIndexing(_: boolean)

	isEligibleForPublicIndexing: boolean;

	setEligibleForSearch(_: boolean)

	isEligibleForSearch: boolean;

	setExpirationDate(_: Date)

	expirationDate: Date;

	setKeywords(_: NSSet<string>)

	keywords: NSSet<string>;

	setNeedsSave(_: boolean)

	needsSave: boolean;

	setReferrerURL(_: NSURL)

	referrerURL: NSURL;

	setRequiredUserInfoKeys(_: NSSet<string>)

	requiredUserInfoKeys: NSSet<string>;

	setSupportsContinuationStreams(_: boolean)

	supportsContinuationStreams: boolean;

	setTargetContentIdentifier(_: string)

	targetContentIdentifier: string;

	setTitle(_: string)

	title: string;

	setUserInfo(_: NSDictionary<any, any>)

	userInfo: NSDictionary<any, any>;

	setWebpageURL(_: NSURL)

	webpageURL: NSURL;

	static create(activityType: string);

	addUserInfoEntriesFromDictionary(_: NSDictionary<any, any>): void;

	becomeCurrent(): void;

	getContinuationStreamsWithCompletionHandler(_?: (p1: NSInputStream, p2: NSOutputStream, p3: NSError) => void): void;

	invalidate(): void;

	resignCurrent(): void;
}

declare const NSUserActivityConnectionUnavailableError: number;

interface NSUserActivityDelegate extends NSObjectProtocol {

	userActivityDidReceiveInputStreamOutputStream?(_: NSUserActivity, didReceiveInputStream: NSInputStream, outputStream: NSOutputStream): void;

	userActivityWasContinued?(_: NSUserActivity): void;

	userActivityWillSave?(_: NSUserActivity): void;
}
declare var NSUserActivityDelegate: {

	prototype: NSUserActivityDelegate;
};

declare const NSUserActivityErrorMaximum: number;

declare const NSUserActivityErrorMinimum: number;

declare const NSUserActivityHandoffFailedError: number;

declare const NSUserActivityHandoffUserInfoTooLargeError: number;

declare const NSUserActivityRemoteApplicationTimedOutError: number;

declare var NSUserActivityTypeBrowsingWeb: string;

declare class NSUserAppleScriptTask extends NSUserScriptTask {

	executeWithAppleEventCompletionHandler(_?: NSAppleEventDescriptor, completionHandler?: (p1: NSAppleEventDescriptor, p2: NSError) => void): void;
}

declare class NSUserAutomatorTask extends NSUserScriptTask {

	setVariables(_: NSDictionary<string, any>)

	variables: NSDictionary<string, any>;

	executeWithInputCompletionHandler(_?: NSSecureCoding, completionHandler?: (p1: any, p2: NSError) => void): void;
}

declare const NSUserCancelledError: number;

declare class NSUserDefaults extends NSObject {

	static resetStandardUserDefaults(): void;

	readonly volatileDomainNames: NSArray<string>;

	static standardUserDefaults(): NSUserDefaults;

	static create(suiteName: string);

	URLForKey(_: string): NSURL;

	addSuiteNamed(named: string): void;

	arrayForKey(_: string): NSArray<any>;

	boolForKey(_: string): boolean;

	dataForKey(_: string): NSData;

	dictionaryForKey(_: string): NSDictionary<string, any>;

	dictionaryRepresentation(): NSDictionary<string, any>;

	doubleForKey(_: string): number;

	floatForKey(_: string): number;

	integerForKey(_: string): number;

	objectForKey(_: string): any;

	objectIsForcedForKey(_: string): boolean;

	objectIsForcedForKeyInDomain(_: string, inDomain: string): boolean;

	persistentDomainForName(_: string): NSDictionary<string, any>;

	registerDefaults(defaults: NSDictionary<string, any>): void;

	removeObjectForKey(_: string): void;

	removePersistentDomainForName(_: string): void;

	removeSuiteNamed(named: string): void;

	removeVolatileDomainForName(_: string): void;

	setBoolForKey(_: boolean, forKey: string): void;

	setDoubleForKey(_: number, forKey: string): void;

	setFloatForKey(_: number, forKey: string): void;

	setIntegerForKey(_: number, forKey: string): void;

	setObjectForKey(_?: any, forKey: string): void;

	setPersistentDomainForName(_: NSDictionary<string, any>, forName: string): void;

	setURLForKey(_?: NSURL, forKey: string): void;

	setVolatileDomainForName(_: NSDictionary<string, any>, forName: string): void;

	stringArrayForKey(_: string): NSArray<string>;

	stringForKey(_: string): string;

	synchronize(): boolean;

	volatileDomainForName(_: string): NSDictionary<string, any>;
}

declare var NSUserDefaultsDidChangeNotification: string;

declare function NSUserName(): string;

declare class NSUserNotification extends NSObject implements NSCopying {

	setActionButtonTitle(_: string)

	actionButtonTitle: string;

	readonly activationType: NSUserNotificationActivationType;

	readonly actualDeliveryDate: Date;

	setAdditionalActions(_: NSArray<NSUserNotificationAction>)

	additionalActions: NSArray<NSUserNotificationAction>;

	readonly additionalActivationAction: NSUserNotificationAction;

	setContentImage(_: NSImage)

	contentImage: NSImage;

	setDeliveryDate(_: Date)

	deliveryDate: Date;

	setDeliveryRepeatInterval(_: NSDateComponents)

	deliveryRepeatInterval: NSDateComponents;

	setDeliveryTimeZone(_: NSTimeZone)

	deliveryTimeZone: NSTimeZone;

	setHasActionButton(_: boolean)

	hasActionButton: boolean;

	setHasReplyButton(_: boolean)

	hasReplyButton: boolean;

	setIdentifier(_: string)

	identifier: string;

	setInformativeText(_: string)

	informativeText: string;

	setOtherButtonTitle(_: string)

	otherButtonTitle: string;

	readonly isPresented: boolean;

	readonly isRemote: boolean;

	readonly response: NSAttributedString;

	setResponsePlaceholder(_: string)

	responsePlaceholder: string;

	setSoundName(_: string)

	soundName: string;

	setSubtitle(_: string)

	subtitle: string;

	setTitle(_: string)

	title: string;

	setUserInfo(_: NSDictionary<string, any>)

	userInfo: NSDictionary<string, any>;

	copyWithZone(_?: any): any;
}

declare class NSUserNotificationAction extends NSObject implements NSCopying {

	static actionWithIdentifierTitle(_?: string, title?: string): NSUserNotificationAction;

	readonly identifier: string;

	readonly title: string;

	copyWithZone(_?: any): any;
}

enum NSUserNotificationActivationType {

	None = 0,

	ContentsClicked = 1,

	ActionButtonClicked = 2,

	Replied = 3,

	AdditionalActionClicked = 4
}

globalThis.NSUserNotificationActivationType = NSUserNotificationActivationType;

declare class NSUserNotificationCenter extends NSObject {

	setDelegate(_: NSUserNotificationCenterDelegate)

	delegate: NSUserNotificationCenterDelegate;

	readonly deliveredNotifications: NSArray<NSUserNotification>;

	setScheduledNotifications(_: NSArray<NSUserNotification>)

	scheduledNotifications: NSArray<NSUserNotification>;

	static defaultUserNotificationCenter(): NSUserNotificationCenter;

	deliverNotification(_: NSUserNotification): void;

	removeAllDeliveredNotifications(): void;

	removeDeliveredNotification(_: NSUserNotification): void;

	removeScheduledNotification(_: NSUserNotification): void;

	scheduleNotification(_: NSUserNotification): void;
}

interface NSUserNotificationCenterDelegate extends NSObjectProtocol {

	userNotificationCenterDidActivateNotification?(_: NSUserNotificationCenter, didActivateNotification: NSUserNotification): void;

	userNotificationCenterDidDeliverNotification?(_: NSUserNotificationCenter, didDeliverNotification: NSUserNotification): void;

	userNotificationCenterShouldPresentNotification?(_: NSUserNotificationCenter, shouldPresentNotification: NSUserNotification): boolean;
}
declare var NSUserNotificationCenterDelegate: {

	prototype: NSUserNotificationCenterDelegate;
};

declare var NSUserNotificationDefaultSoundName: string;

declare class NSUserScriptTask extends NSObject {

	readonly scriptURL: NSURL;

	static create(URL: NSURL);

	executeWithCompletionHandler(_?: (p1: NSError) => void): void;
}

declare class NSUserUnixTask extends NSUserScriptTask {

	setStandardError(_: NSFileHandle)

	standardError: NSFileHandle;

	setStandardInput(_: NSFileHandle)

	standardInput: NSFileHandle;

	setStandardOutput(_: NSFileHandle)

	standardOutput: NSFileHandle;

	executeWithArgumentsCompletionHandler(_?: NSArray<string>, completionHandler?: (p1: NSError) => void): void;
}

declare const NSValidationErrorMaximum: number;

declare const NSValidationErrorMinimum: number;

declare class NSValue extends NSObject implements NSCopying, NSSecureCoding {

	static valueWithObjCType(_: any, withObjCType: string): NSValue;

	static valueWithBytesObjCType(_: any, objCType: string): NSValue;

	static valueWithCATransform3D(_: CATransform3D): NSValue;

	static valueWithEdgeInsets(_: NSEdgeInsets): NSValue;

	static valueWithNonretainedObject(_?: any): NSValue;

	static valueWithPoint(_: CGPoint): NSValue;

	static valueWithPointer(_?: any): NSValue;

	static valueWithRange(_: NSRange): NSValue;

	static valueWithRect(_: CGRect): NSValue;

	static valueWithSize(_: CGSize): NSValue;

	readonly CATransform3DValue: CATransform3D;

	readonly edgeInsetsValue: NSEdgeInsets;

	readonly nonretainedObjectValue: any;

	readonly objCType: string;

	readonly pointValue: CGPoint;

	readonly pointerValue: any;

	readonly rangeValue: NSRange;

	readonly rectValue: CGRect;

	readonly sizeValue: CGSize;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(bytes: any, objCType: string | any);

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	getValue(_: any): void;

	getValueSize(_: any, size: number): void;

	isEqualToValue(_: NSValue): boolean;
}

declare class NSValueTransformer extends NSObject {

	static allowsReverseTransformation(): boolean;

	static setValueTransformerForName(_?: NSValueTransformer, forName: string): void;

	static transformedValueClass(): typeof NSObject;

	static valueTransformerForName(_: string): NSValueTransformer;

	static valueTransformerNames(): NSArray<string>;

	reverseTransformedValue(_?: any): any;

	transformedValue(_?: any): any;
}

enum NSVolumeEnumerationOptions {

	SkipHiddenVolumes = 2,

	ProduceFileReferenceURLs = 4
}

globalThis.NSVolumeEnumerationOptions = NSVolumeEnumerationOptions;

declare class NSWhoseSpecifier extends NSScriptObjectSpecifier {

	setEndSubelementIdentifier(_: NSWhoseSubelementIdentifier)

	endSubelementIdentifier: NSWhoseSubelementIdentifier;

	setEndSubelementIndex(_: number)

	endSubelementIndex: number;

	setStartSubelementIdentifier(_: NSWhoseSubelementIdentifier)

	startSubelementIdentifier: NSWhoseSubelementIdentifier;

	setStartSubelementIndex(_: number)

	startSubelementIndex: number;

	setTest(_: NSScriptWhoseTest)

	test: NSScriptWhoseTest;

	static create(containerClassDescription: NSScriptClassDescription, containerSpecifier: NSScriptObjectSpecifier, key: string, test: NSScriptWhoseTest);
}

enum NSWhoseSubelementIdentifier {

	IndexSubelement = 0,

	EverySubelement = 1,

	MiddleSubelement = 2,

	RandomSubelement = 3,

	NoSubelement = 4
}

globalThis.NSWhoseSubelementIdentifier = NSWhoseSubelementIdentifier;

declare var NSWillBecomeMultiThreadedNotification: string;

declare const NSWindows95OperatingSystem: number;

declare const NSWindowsCP1250StringEncoding: number;

declare const NSWindowsCP1251StringEncoding: number;

declare const NSWindowsCP1252StringEncoding: number;

declare const NSWindowsCP1253StringEncoding: number;

declare const NSWindowsCP1254StringEncoding: number;

declare const NSWindowsNTOperatingSystem: number;

declare class NSXMLDTD extends NSXMLNode {

	static predefinedEntityDeclarationForName(_: string): NSXMLDTDNode;

	setPublicID(_: string)

	publicID: string;

	setSystemID(_: string)

	systemID: string;

	static create(contentsOfURL: NSURL, options: NSXMLNodeOptions);

	static create(data: NSData, options: NSXMLNodeOptions);

	addChild(_: NSXMLNode): void;

	attributeDeclarationForNameElementName(_: string, elementName: string): NSXMLDTDNode;

	elementDeclarationForName(_: string): NSXMLDTDNode;

	entityDeclarationForName(_: string): NSXMLDTDNode;

	insertChildAtIndex(_: NSXMLNode, atIndex: number): void;

	insertChildrenAtIndex(_: NSArray<NSXMLNode>, atIndex: number): void;

	notationDeclarationForName(_: string): NSXMLDTDNode;

	removeChildAtIndex(_: number): void;

	replaceChildAtIndexWithNode(_: number, withNode: NSXMLNode): void;

	setChildren(_?: NSArray<NSXMLNode>): void;
}

declare class NSXMLDTDNode extends NSXMLNode {

	setDTDKind(_: NSXMLDTDNodeKind)

	DTDKind: NSXMLDTDNodeKind;

	readonly isExternal: boolean;

	setNotationName(_: string)

	notationName: string;

	setPublicID(_: string)

	publicID: string;

	setSystemID(_: string)

	systemID: string;

	static create(XMLString: string);
}

enum NSXMLDTDNodeKind {

	EntityGeneralKind = 1,

	EntityParsedKind = 2,

	EntityUnparsedKind = 3,

	EntityParameterKind = 4,

	EntityPredefined = 5,

	AttributeCDATAKind = 6,

	AttributeIDKind = 7,

	AttributeIDRefKind = 8,

	AttributeIDRefsKind = 9,

	AttributeEntityKind = 10,

	AttributeEntitiesKind = 11,

	AttributeNMTokenKind = 12,

	AttributeNMTokensKind = 13,

	AttributeEnumerationKind = 14,

	AttributeNotationKind = 15,

	ElementDeclarationUndefinedKind = 16,

	ElementDeclarationEmptyKind = 17,

	ElementDeclarationAnyKind = 18,

	ElementDeclarationMixedKind = 19,

	ElementDeclarationElementKind = 20
}

globalThis.NSXMLDTDNodeKind = NSXMLDTDNodeKind;

declare class NSXMLDocument extends NSXMLNode {

	static replacementClassForClass(_: typeof NSObject): typeof NSObject;

	setDTD(_: NSXMLDTD)

	DTD: NSXMLDTD;

	setMIMEType(_: string)

	MIMEType: string;

	readonly XMLData: NSData;

	setCharacterEncoding(_: string)

	characterEncoding: string;

	setDocumentContentKind(_: NSXMLDocumentContentKind)

	documentContentKind: NSXMLDocumentContentKind;

	setStandalone(_: boolean)

	isStandalone: boolean;

	setVersion(_: string)

	version: string;

	static create(contentsOfURL: NSURL, options: NSXMLNodeOptions);

	static create(data: NSData, options: NSXMLNodeOptions);

	static create(rootElement: NSXMLElement);

	static create(XMLString: string, options: NSXMLNodeOptions);

	XMLDataWithOptions(_: NSXMLNodeOptions): NSData;

	addChild(_: NSXMLNode): void;

	insertChildAtIndex(_: NSXMLNode, atIndex: number): void;

	insertChildrenAtIndex(_: NSArray<NSXMLNode>, atIndex: number): void;

	objectByApplyingXSLTArgumentsError(arguments_: NSData, error?: NSDictionary<string, string>): any;

	objectByApplyingXSLTAtURLArgumentsError(arguments_: NSURL, error?: NSDictionary<string, string>): any;

	objectByApplyingXSLTStringArgumentsError(arguments_: string, error?: NSDictionary<string, string>): any;

	removeChildAtIndex(_: number): void;

	replaceChildAtIndexWithNode(_: number, withNode: NSXMLNode): void;

	rootElement(): NSXMLElement;

	setChildren(_?: NSArray<NSXMLNode>): void;

	setRootElement(_: NSXMLElement): void;

	validateAndReturnError(): boolean;
}

enum NSXMLDocumentContentKind {

	XMLKind = 0,

	XHTMLKind = 1,

	HTMLKind = 2,

	TextKind = 3
}

globalThis.NSXMLDocumentContentKind = NSXMLDocumentContentKind;

declare class NSXMLElement extends NSXMLNode {

	setAttributes(_: NSArray<NSXMLNode>)

	attributes: NSArray<NSXMLNode>;

	setNamespaces(_: NSArray<NSXMLNode>)

	namespaces: NSArray<NSXMLNode>;

	static create(name: string);

	static create(name: string, URI: string);

	static create(name: string, stringValue: string);

	static create(XMLString: string);

	addAttribute(_: NSXMLNode): void;

	addChild(_: NSXMLNode): void;

	addNamespace(_: NSXMLNode): void;

	attributeForLocalNameURI(_: string, URI?: string): NSXMLNode;

	attributeForName(_: string): NSXMLNode;

	elementsForLocalNameURI(_: string, URI?: string): NSArray<NSXMLElement>;

	elementsForName(_: string): NSArray<NSXMLElement>;

	insertChildAtIndex(_: NSXMLNode, atIndex: number): void;

	insertChildrenAtIndex(_: NSArray<NSXMLNode>, atIndex: number): void;

	namespaceForPrefix(_: string): NSXMLNode;

	normalizeAdjacentTextNodesPreservingCDATA(_: boolean): void;

	removeAttributeForName(_: string): void;

	removeChildAtIndex(_: number): void;

	removeNamespaceForPrefix(_: string): void;

	replaceChildAtIndexWithNode(_: number, withNode: NSXMLNode): void;

	resolveNamespaceForName(_: string): NSXMLNode;

	resolvePrefixForNamespaceURI(_: string): string;

	setAttributesAsDictionary(_: NSDictionary<any, any>): void;

	setAttributesWithDictionary(_: NSDictionary<string, string>): void;

	setChildren(_?: NSArray<NSXMLNode>): void;
}

declare class NSXMLNode extends NSObject implements NSCopying {

	static DTDNodeWithXMLString(_: string): any;

	static attributeWithNameURIStringValue(_: string, URI: string, stringValue: string): any;

	static attributeWithNameStringValue(_: string, stringValue: string): any;

	static commentWithStringValue(_: string): any;

	static document(): any;

	static documentWithRootElement(_: NSXMLElement): any;

	static elementWithName(_: string): any;

	static elementWithNameURI(_: string, URI: string): any;

	static elementWithNameChildrenAttributes(_: string, children?: NSArray<NSXMLNode>, attributes?: NSArray<NSXMLNode>): any;

	static elementWithNameStringValue(_: string, stringValue: string): any;

	static localNameForName(_: string): string;

	static namespaceWithNameStringValue(_: string, stringValue: string): any;

	static predefinedNamespaceForPrefix(_: string): NSXMLNode;

	static prefixForName(_: string): string;

	static processingInstructionWithNameStringValue(_: string, stringValue: string): any;

	static textWithStringValue(_: string): any;

	setURI(_: string)

	URI: string;

	readonly XMLString: string;

	readonly XPath: string;

	readonly childCount: number;

	readonly children: NSArray<NSXMLNode>;

	readonly index: number;

	readonly kind: NSXMLNodeKind;

	readonly level: number;

	readonly localName: string;

	setName(_: string)

	name: string;

	readonly nextNode: NSXMLNode;

	readonly nextSibling: NSXMLNode;

	setObjectValue(_: any)

	objectValue: any;

	readonly parent: NSXMLNode;

	readonly prefix: string;

	readonly previousNode: NSXMLNode;

	readonly previousSibling: NSXMLNode;

	readonly rootDocument: NSXMLDocument;

	setStringValue(_: string)

	stringValue: string;

	static create(kind: NSXMLNodeKind);

	static create(kind: NSXMLNodeKind, options: NSXMLNodeOptions);

	XMLStringWithOptions(_: NSXMLNodeOptions): string;

	canonicalXMLStringPreservingComments(_: boolean): string;

	childAtIndex(_: number): NSXMLNode;

	copyWithZone(_?: any): any;

	detach(): void;

	nodesForXPathError(error: string): NSArray<NSXMLNode>;

	objectsForXQueryConstantsError(constants: string, error?: NSDictionary<string, any>): NSArray<any>;

	objectsForXQueryError(error: string): NSArray<any>;

	setStringValueResolvingEntities(_: string, resolvingEntities: boolean): void;
}

enum NSXMLNodeKind {

	InvalidKind = 0,

	DocumentKind = 1,

	ElementKind = 2,

	AttributeKind = 3,

	NamespaceKind = 4,

	ProcessingInstructionKind = 5,

	CommentKind = 6,

	TextKind = 7,

	DTDKind = 8,

	EntityDeclarationKind = 9,

	AttributeDeclarationKind = 10,

	ElementDeclarationKind = 11,

	NotationDeclarationKind = 12
}

globalThis.NSXMLNodeKind = NSXMLNodeKind;

enum NSXMLNodeOptions {

	NodeOptionsNone = 0,

	NodeIsCDATA = 1,

	NodeExpandEmptyElement = 2,

	NodeCompactEmptyElement = 4,

	NodeUseSingleQuotes = 8,

	NodeUseDoubleQuotes = 16,

	NodeNeverEscapeContents = 32,

	DocumentTidyHTML = 512,

	DocumentTidyXML = 1024,

	DocumentValidate = 8192,

	NodeLoadExternalEntitiesAlways = 16384,

	NodeLoadExternalEntitiesSameOriginOnly = 32768,

	NodeLoadExternalEntitiesNever = 524288,

	DocumentXInclude = 65536,

	NodePrettyPrint = 131072,

	DocumentIncludeContentTypeDeclaration = 262144,

	NodePreserveNamespaceOrder = 1048576,

	NodePreserveAttributeOrder = 2097152,

	NodePreserveEntities = 4194304,

	NodePreservePrefixes = 8388608,

	NodePreserveCDATA = 16777216,

	NodePreserveWhitespace = 33554432,

	NodePreserveDTD = 67108864,

	NodePreserveCharacterReferences = 134217728,

	NodePromoteSignificantWhitespace = 268435456,

	NodePreserveEmptyElements = 6,

	NodePreserveQuotes = 24,

	NodePreserveAll = 4293918750
}

globalThis.NSXMLNodeOptions = NSXMLNodeOptions;

declare class NSXMLParser extends NSObject {

	setAllowedExternalEntityURLs(_: NSSet<NSURL>)

	allowedExternalEntityURLs: NSSet<NSURL>;

	readonly columnNumber: number;

	setDelegate(_: NSXMLParserDelegate)

	delegate: NSXMLParserDelegate;

	setExternalEntityResolvingPolicy(_: NSXMLParserExternalEntityResolvingPolicy)

	externalEntityResolvingPolicy: NSXMLParserExternalEntityResolvingPolicy;

	readonly lineNumber: number;

	readonly parserError: NSError;

	readonly publicID: string;

	setShouldProcessNamespaces(_: boolean)

	shouldProcessNamespaces: boolean;

	setShouldReportNamespacePrefixes(_: boolean)

	shouldReportNamespacePrefixes: boolean;

	setShouldResolveExternalEntities(_: boolean)

	shouldResolveExternalEntities: boolean;

	readonly systemID: string;

	static create(contentsOfURL: NSURL);

	static create(data: NSData);

	static create(stream: NSInputStream);

	abortParsing(): void;

	parse(): boolean;
}

interface NSXMLParserDelegate extends NSObjectProtocol {

	parserDidEndElementNamespaceURIQualifiedName?(_: NSXMLParser, didEndElement: string, namespaceURI?: string, qualifiedName?: string): void;

	parserDidEndMappingPrefix?(_: NSXMLParser, didEndMappingPrefix: string): void;

	parserDidStartElementNamespaceURIQualifiedNameAttributes?(_: NSXMLParser, didStartElement: string, namespaceURI?: string, qualifiedName?: string, attributes: NSDictionary<string, string>): void;

	parserDidStartMappingPrefixToURI?(_: NSXMLParser, didStartMappingPrefix: string, toURI: string): void;

	parserFoundAttributeDeclarationWithNameForElementTypeDefaultValue?(_: NSXMLParser, foundAttributeDeclarationWithName: string, forElement: string, type?: string, defaultValue?: string): void;

	parserFoundCDATA?(_: NSXMLParser, foundCDATA: NSData): void;

	parserFoundCharacters?(_: NSXMLParser, foundCharacters: string): void;

	parserFoundComment?(_: NSXMLParser, foundComment: string): void;

	parserFoundElementDeclarationWithNameModel?(_: NSXMLParser, foundElementDeclarationWithName: string, model: string): void;

	parserFoundExternalEntityDeclarationWithNamePublicIDSystemID?(_: NSXMLParser, foundExternalEntityDeclarationWithName: string, publicID?: string, systemID?: string): void;

	parserFoundIgnorableWhitespace?(_: NSXMLParser, foundIgnorableWhitespace: string): void;

	parserFoundInternalEntityDeclarationWithNameValue?(_: NSXMLParser, foundInternalEntityDeclarationWithName: string, value?: string): void;

	parserFoundNotationDeclarationWithNamePublicIDSystemID?(_: NSXMLParser, foundNotationDeclarationWithName: string, publicID?: string, systemID?: string): void;

	parserFoundProcessingInstructionWithTargetData?(_: NSXMLParser, foundProcessingInstructionWithTarget: string, data?: string): void;

	parserFoundUnparsedEntityDeclarationWithNamePublicIDSystemIDNotationName?(_: NSXMLParser, foundUnparsedEntityDeclarationWithName: string, publicID?: string, systemID?: string, notationName?: string): void;

	parserParseErrorOccurred?(_: NSXMLParser, parseErrorOccurred: NSError): void;

	parserResolveExternalEntityNameSystemID?(_: NSXMLParser, resolveExternalEntityName: string, systemID?: string): NSData;

	parserValidationErrorOccurred?(_: NSXMLParser, validationErrorOccurred: NSError): void;

	parserDidEndDocument?(_: NSXMLParser): void;

	parserDidStartDocument?(_: NSXMLParser): void;
}
declare var NSXMLParserDelegate: {

	prototype: NSXMLParserDelegate;
};

enum NSXMLParserError {

	InternalError = 1,

	OutOfMemoryError = 2,

	DocumentStartError = 3,

	EmptyDocumentError = 4,

	PrematureDocumentEndError = 5,

	InvalidHexCharacterRefError = 6,

	InvalidDecimalCharacterRefError = 7,

	InvalidCharacterRefError = 8,

	InvalidCharacterError = 9,

	CharacterRefAtEOFError = 10,

	CharacterRefInPrologError = 11,

	CharacterRefInEpilogError = 12,

	CharacterRefInDTDError = 13,

	EntityRefAtEOFError = 14,

	EntityRefInPrologError = 15,

	EntityRefInEpilogError = 16,

	EntityRefInDTDError = 17,

	ParsedEntityRefAtEOFError = 18,

	ParsedEntityRefInPrologError = 19,

	ParsedEntityRefInEpilogError = 20,

	ParsedEntityRefInInternalSubsetError = 21,

	EntityReferenceWithoutNameError = 22,

	EntityReferenceMissingSemiError = 23,

	ParsedEntityRefNoNameError = 24,

	ParsedEntityRefMissingSemiError = 25,

	UndeclaredEntityError = 26,

	UnparsedEntityError = 28,

	EntityIsExternalError = 29,

	EntityIsParameterError = 30,

	UnknownEncodingError = 31,

	EncodingNotSupportedError = 32,

	StringNotStartedError = 33,

	StringNotClosedError = 34,

	NamespaceDeclarationError = 35,

	EntityNotStartedError = 36,

	EntityNotFinishedError = 37,

	LessThanSymbolInAttributeError = 38,

	AttributeNotStartedError = 39,

	AttributeNotFinishedError = 40,

	AttributeHasNoValueError = 41,

	AttributeRedefinedError = 42,

	LiteralNotStartedError = 43,

	LiteralNotFinishedError = 44,

	CommentNotFinishedError = 45,

	ProcessingInstructionNotStartedError = 46,

	ProcessingInstructionNotFinishedError = 47,

	NotationNotStartedError = 48,

	NotationNotFinishedError = 49,

	AttributeListNotStartedError = 50,

	AttributeListNotFinishedError = 51,

	MixedContentDeclNotStartedError = 52,

	MixedContentDeclNotFinishedError = 53,

	ElementContentDeclNotStartedError = 54,

	ElementContentDeclNotFinishedError = 55,

	XMLDeclNotStartedError = 56,

	XMLDeclNotFinishedError = 57,

	ConditionalSectionNotStartedError = 58,

	ConditionalSectionNotFinishedError = 59,

	ExternalSubsetNotFinishedError = 60,

	DOCTYPEDeclNotFinishedError = 61,

	MisplacedCDATAEndStringError = 62,

	CDATANotFinishedError = 63,

	MisplacedXMLDeclarationError = 64,

	SpaceRequiredError = 65,

	SeparatorRequiredError = 66,

	NMTOKENRequiredError = 67,

	NAMERequiredError = 68,

	PCDATARequiredError = 69,

	URIRequiredError = 70,

	PublicIdentifierRequiredError = 71,

	LTRequiredError = 72,

	GTRequiredError = 73,

	LTSlashRequiredError = 74,

	EqualExpectedError = 75,

	TagNameMismatchError = 76,

	UnfinishedTagError = 77,

	StandaloneValueError = 78,

	InvalidEncodingNameError = 79,

	CommentContainsDoubleHyphenError = 80,

	InvalidEncodingError = 81,

	ExternalStandaloneEntityError = 82,

	InvalidConditionalSectionError = 83,

	EntityValueRequiredError = 84,

	NotWellBalancedError = 85,

	ExtraContentError = 86,

	InvalidCharacterInEntityError = 87,

	ParsedEntityRefInInternalError = 88,

	EntityRefLoopError = 89,

	EntityBoundaryError = 90,

	InvalidURIError = 91,

	URIFragmentError = 92,

	NoDTDError = 94,

	DelegateAbortedParseError = 512
}

globalThis.NSXMLParserError = NSXMLParserError;

declare var NSXMLParserErrorDomain: string;

enum NSXMLParserExternalEntityResolvingPolicy {

	ResolveExternalEntitiesNever = 0,

	ResolveExternalEntitiesNoNetwork = 1,

	ResolveExternalEntitiesSameOriginOnly = 2,

	ResolveExternalEntitiesAlways = 3
}

globalThis.NSXMLParserExternalEntityResolvingPolicy = NSXMLParserExternalEntityResolvingPolicy;

declare class NSXPCCoder extends NSCoder {

	readonly connection: NSXPCConnection;

	setUserInfo(_: NSObjectProtocol)

	userInfo: NSObjectProtocol;

	decodeXPCObjectOfTypeForKey(_: any, forKey: string): NSObject;

	encodeXPCObjectForKey(_: NSObject, forKey: string): void;
}

declare class NSXPCConnection extends NSObject implements NSXPCProxyCreating {

	static currentConnection(): NSXPCConnection;

	readonly auditSessionIdentifier: number;

	readonly effectiveGroupIdentifier: number;

	readonly effectiveUserIdentifier: number;

	readonly endpoint: NSXPCListenerEndpoint;

	setExportedInterface(_: NSXPCInterface)

	exportedInterface: NSXPCInterface;

	setExportedObject(_: any)

	exportedObject: any;

	setInterruptionHandler(_: () => void)

	interruptionHandler: () => void;

	setInvalidationHandler(_: () => void)

	invalidationHandler: () => void;

	readonly processIdentifier: number;

	setRemoteObjectInterface(_: NSXPCInterface)

	remoteObjectInterface: NSXPCInterface;

	readonly remoteObjectProxy: any;

	readonly serviceName: string;

	static create(listenerEndpoint: NSXPCListenerEndpoint);

	static create(machServiceName: string, options: NSXPCConnectionOptions);

	static create(serviceName: string);

	invalidate(): void;

	remoteObjectProxyWithErrorHandler(_: (p1: NSError) => void): any;

	resume(): void;

	scheduleSendBarrierBlock(_: () => void): void;

	suspend(): void;

	synchronousRemoteObjectProxyWithErrorHandler(_: (p1: NSError) => void): any;
}

declare const NSXPCConnectionErrorMaximum: number;

declare const NSXPCConnectionErrorMinimum: number;

declare const NSXPCConnectionInterrupted: number;

declare const NSXPCConnectionInvalid: number;

enum NSXPCConnectionOptions {

	Privileged = 4096
}

globalThis.NSXPCConnectionOptions = NSXPCConnectionOptions;

declare const NSXPCConnectionReplyInvalid: number;

declare class NSXPCInterface extends NSObject {

	static interfaceWithProtocol(_: any /* Protocol */): NSXPCInterface;

	setProtocol(_: any /* Protocol */)

	protocol: any /* Protocol */;

	XPCTypeForSelectorArgumentIndexOfReply(_: string, argumentIndex: number, ofReply: boolean): any;

	classesForSelectorArgumentIndexOfReply(_: string, argumentIndex: number, ofReply: boolean): NSSet<typeof NSObject>;

	interfaceForSelectorArgumentIndexOfReply(_: string, argumentIndex: number, ofReply: boolean): NSXPCInterface;

	setClassesForSelectorArgumentIndexOfReply(_: NSSet<typeof NSObject>, forSelector: string, argumentIndex: number, ofReply: boolean): void;

	setInterfaceForSelectorArgumentIndexOfReply(_: NSXPCInterface, forSelector: string, argumentIndex: number, ofReply: boolean): void;

	setXPCTypeForSelectorArgumentIndexOfReply(_: any, forSelector: string, argumentIndex: number, ofReply: boolean): void;
}

declare class NSXPCListener extends NSObject {

	static anonymousListener(): NSXPCListener;

	static serviceListener(): NSXPCListener;

	setDelegate(_: NSXPCListenerDelegate)

	delegate: NSXPCListenerDelegate;

	readonly endpoint: NSXPCListenerEndpoint;

	static create(machServiceName: string);

	invalidate(): void;

	resume(): void;

	suspend(): void;
}

interface NSXPCListenerDelegate extends NSObjectProtocol {

	listenerShouldAcceptNewConnection?(_: NSXPCListener, shouldAcceptNewConnection: NSXPCConnection): boolean;
}
declare var NSXPCListenerDelegate: {

	prototype: NSXPCListenerDelegate;
};

declare class NSXPCListenerEndpoint extends NSObject implements NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

interface NSXPCProxyCreating {

	remoteObjectProxy: any;

	remoteObjectProxyWithErrorHandler(_: (p1: NSError) => void): any;

	synchronousRemoteObjectProxyWithErrorHandler?(_: (p1: NSError) => void): any;
}
declare var NSXPCProxyCreating: {

	prototype: NSXPCProxyCreating;
};

declare var NSZeroPoint: CGPoint;

declare var NSZeroRect: CGRect;

declare var NSZeroSize: CGSize;

declare var NSZombieEnabled: boolean;

declare const NS_BigEndian: number;

declare const NS_LittleEndian: number;

declare const NS_UnknownByteOrder: number;

interface __ssFlags {
	delegateLearnsWords: number;
	delegateForgetsWords: number;
	busy: number;
	_reserved: number;
}
declare var __ssFlags: __ssFlags;

interface _expressionFlags {
	_evaluationBlocked: number;
	_reservedExpressionFlags: number;
}
declare var _expressionFlags: _expressionFlags;

interface _predicateFlags {
	_evaluationBlocked: number;
	_reservedPredicateFlags: number;
}
declare var _predicateFlags: _predicateFlags;
