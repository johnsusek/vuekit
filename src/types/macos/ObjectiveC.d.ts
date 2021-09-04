
declare class NSObject implements NSObjectProtocol {

	static automaticallyNotifiesObserversForKey(_: string): boolean;

	static cancelPreviousPerformRequestsWithTarget(_: any): void;

	static cancelPreviousPerformRequestsWithTargetSelectorObject(_: any, selector: string, object_?: any): void;

	static classFallbacksForKeyedArchiver(): NSArray<string>;

	static classForKeyedUnarchiver(): typeof NSObject;

	static conformsToProtocol(_: any /* Protocol */): boolean;

	static copyWithZone(_: any): any;

	static debugDescription(): string;

	static defaultPlaceholderForMarkerWithBinding(for_?: any, with_: string): any;

	static description(): string;

	static exposeBinding(_: string): void;

	static hash(): number;

	static initialize(): void;

	static instanceMethodForSelector(_: string): () => void;

	static instancesRespondToSelector(_: string): boolean;

	static isSubclassOfClass(_: typeof NSObject): boolean;

	static keyPathsForValuesAffectingValueForKey(_: string): NSSet<string>;

	static load(): void;

	static mutableCopyWithZone(_: any): any;

	static resolveClassMethod(_: string): boolean;

	static resolveInstanceMethod(_: string): boolean;

	static setDefaultPlaceholderForMarkerWithBinding(_?: any, for_?: any, with_: string): void;

	static setVersion(_: number): void;

	static superclass(): typeof NSObject;

	static version(): number;

	readonly accessibilityFocusedUIElement: any;

	readonly accessibilityNotifiesWhenDestroyed: boolean;

	readonly attributeKeys: NSArray<string>;

	readonly autoContentAccessingProxy: any;

	readonly classCode: number;

	readonly classDescription: NSClassDescription;

	readonly classForArchiver: typeof NSObject;

	readonly classForCoder: typeof NSObject;

	readonly classForKeyedArchiver: typeof NSObject;

	readonly className: string;

	readonly exposedBindings: NSArray<string>;

	readonly objectSpecifier: NSScriptObjectSpecifier;

	setObservationInfo(_: any)

	observationInfo: any;

	setScriptingProperties(_: NSDictionary<string, any>)

	scriptingProperties: NSDictionary<string, any>;

	readonly isSelectable: boolean;

	readonly toManyRelationshipKeys: NSArray<string>;

	readonly toOneRelationshipKeys: NSArray<string>;

	static accessInstanceVariablesDirectly(): boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	static create();

	acceptsPreviewPanelControl(_: QLPreviewPanel): boolean;

	accessibilityArrayAttributeCount(_: string): number;

	accessibilityArrayAttributeValuesIndexMaxCount(_: string, index: number, maxCount: number): NSArray<any>;

	accessibilityHitTest(_: CGPoint): any;

	accessibilityIndexOfChild(_: any): number;

	addObserverForKeyPathOptionsContext(_: NSObject, forKeyPath: string, options: NSKeyValueObservingOptions, context?: any): void;

	allowsWeakReference(): boolean;

	applicationDelegateHandlesKey(_: NSApplication, delegateHandlesKey: string): boolean;

	attemptRecoveryFromErrorOptionIndex(_: NSError, optionIndex: number): boolean;

	attemptRecoveryFromErrorOptionIndexDelegateDidRecoverSelectorContextInfo(fromError: NSError, optionIndex: number, delegate?: any, didRecoverSelector?: string, contextInfo?: any): void;

	awakeAfterUsingCoder(_: NSCoder): any;

	awakeFromNib(): void;

	beginPreviewPanelControl(_: QLPreviewPanel): void;

	bindToObjectWithKeyPathOptions(_: string, toObject: any, withKeyPath: string, options?: NSDictionary<string, any>): void;

	changeColor(_?: any): void;

	changeFont(_?: any): void;

	coerceValueForKey(_?: any, forKey: string): any;

	commitEditing(): boolean;

	commitEditingAndReturnError(): boolean;

	commitEditingWithDelegateDidCommitSelectorContextInfo(_?: any, didCommitSelector?: string, contextInfo?: any): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	controlTextDidBeginEditing(_: NSNotification): void;

	controlTextDidChange(_: NSNotification): void;

	controlTextDidEndEditing(_: NSNotification): void;

	copy(): any;

	copyScriptingValueForKeyWithProperties(_: any, forKey: string, withProperties: NSDictionary<string, any>): any;

	dictionaryWithValuesForKeys(_: NSArray<string>): NSDictionary<string, any>;

	didChangeValuesAtIndexesForKey(_: NSKeyValueChange, valuesAtIndexes: NSIndexSet, forKey: string): void;

	didChangeValueForKey(_: string): void;

	didChangeValueForKeyWithWithSetMutationUsingObjects(_: string, withSetMutation: NSKeyValueSetMutationKind, usingObjects: NSSet<any>): void;

	discardEditing(): void;

	doesContain(_: any): boolean;

	doesNotRecognizeSelector(_: string): void;

	endPreviewPanelControl(_: QLPreviewPanel): void;

	finalize(): void;

	forwardingTargetForSelector(_: string): any;

	imageRepresentation(): any;

	imageRepresentationType(): string;

	imageSubtitle(): string;

	imageTitle(): string;

	imageUID(): string;

	imageVersion(): number;

	indicesOfObjectsByEvaluatingObjectSpecifier(_: NSScriptObjectSpecifier): NSArray<number>;

	infoForBinding(_: string): NSDictionary<string, any>;

	insertValueAtIndexInPropertyWithKey(_: any, atIndex: number, inPropertyWithKey: string): void;

	insertValueInPropertyWithKey(_: any, inPropertyWithKey: string): void;

	inverseForRelationshipKey(_: string): string;

	isCaseInsensitiveLike(_: string): boolean;

	isEqual(_: any): boolean;

	isEqualTo(_?: any): boolean;

	isGreaterThan(_?: any): boolean;

	isGreaterThanOrEqualTo(_?: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isLessThan(_?: any): boolean;

	isLessThanOrEqualTo(_?: any): boolean;

	isLike(_: string): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	isNotEqualTo(_?: any): boolean;

	layerShouldInheritContentsScaleFromWindow(_: CALayer, shouldInheritContentsScale: number, fromWindow: NSWindow): boolean;

	methodForSelector(_: string): () => void;

	mutableArrayValueForKey(_: string): NSMutableArray<any>;

	mutableArrayValueForKeyPath(_: string): NSMutableArray<any>;

	mutableCopy(): any;

	mutableOrderedSetValueForKey(_: string): NSMutableOrderedSet<any>;

	mutableOrderedSetValueForKeyPath(_: string): NSMutableOrderedSet<any>;

	mutableSetValueForKey(_: string): NSMutableSet<any>;

	mutableSetValueForKeyPath(_: string): NSMutableSet<any>;

	newScriptingObjectOfClassForValueForKeyWithContentsValueProperties(_: typeof NSObject, forValueForKey: string, withContentsValue?: any, properties: NSDictionary<string, any>): any;

	objectDidBeginEditing(_: NSEditor): void;

	objectDidEndEditing(_: NSEditor): void;

	observeValueForKeyPathOfObjectChangeContext(_?: string, ofObject?: any, change?: NSDictionary<string, any>, context?: any): void;

	optionDescriptionsForBinding(_: string): NSArray<NSAttributeDescription>;

	pasteboardProvideDataForType(_: NSPasteboard, provideDataForType: string): void;

	pasteboardChangedOwner(_: NSPasteboard): void;

	performSelector(_: string): any;

	performSelectorOnThreadWithObjectWaitUntilDone(_: string, onThread: NSThread, withObject?: any, waitUntilDone: boolean): void;

	performSelectorOnThreadWithObjectWaitUntilDoneModes(_: string, onThread: NSThread, withObject?: any, waitUntilDone: boolean, modes?: NSArray<string>): void;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectAfterDelay(_: string, withObject?: any, afterDelay: number): void;

	performSelectorWithObjectAfterDelayInModes(_: string, withObject?: any, afterDelay: number, inModes: NSArray<string>): void;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	performSelectorInBackgroundWithObject(_: string, withObject?: any): void;

	performSelectorOnMainThreadWithObjectWaitUntilDone(_: string, withObject?: any, waitUntilDone: boolean): void;

	performSelectorOnMainThreadWithObjectWaitUntilDoneModes(_: string, withObject?: any, waitUntilDone: boolean, modes?: NSArray<string>): void;

	prepareForInterfaceBuilder(): void;

	quartzFilterManagerDidAddFilter(_: QuartzFilterManager, didAddFilter: QuartzFilter): void;

	quartzFilterManagerDidModifyFilter(_: QuartzFilterManager, didModifyFilter: QuartzFilter): void;

	quartzFilterManagerDidRemoveFilter(_: QuartzFilterManager, didRemoveFilter: QuartzFilter): void;

	quartzFilterManagerDidSelectFilter(_: QuartzFilterManager, didSelectFilter: QuartzFilter): void;

	removeObserverForKeyPath(_: NSObject, forKeyPath: string): void;

	removeObserverForKeyPathContext(_: NSObject, forKeyPath: string, context?: any): void;

	removeValueAtIndexFromPropertyWithKey(_: number, fromPropertyWithKey: string): void;

	replaceValueAtIndexInPropertyWithKeyWithValue(_: number, inPropertyWithKey: string, withValue: any): void;

	replacementObjectForCoder(_: NSCoder): any;

	replacementObjectForKeyedArchiver(_: NSKeyedArchiver): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	retainWeakReference(): boolean;

	saveOptionsShouldShowUTType(_: IKSaveOptions, shouldShowUTType: string): boolean;

	scriptingBeginsWith(_: any): boolean;

	scriptingContains(_: any): boolean;

	scriptingEndsWith(_: any): boolean;

	scriptingIsEqualTo(_: any): boolean;

	scriptingIsGreaterThan(_: any): boolean;

	scriptingIsGreaterThanOrEqualTo(_: any): boolean;

	scriptingIsLessThan(_: any): boolean;

	scriptingIsLessThanOrEqualTo(_: any): boolean;

	scriptingValueForSpecifier(_: NSScriptObjectSpecifier): any;

	self(): this;

	setNilValueForKey(_: string): void;

	setValueForKey(_?: any, forKey: string): void;

	setValueForKeyPath(_?: any, forKeyPath: string): void;

	setValueForUndefinedKey(_?: any, forUndefinedKey: string): void;

	setValuesForKeysWithDictionary(_: NSDictionary<string, any>): void;

	unbind(_: string): void;

	validModesForFontPanel(_: NSFontPanel): NSFontPanelModeMask;

	validateMenuItem(_: NSMenuItem): boolean;

	validateToolbarItem(_: NSToolbarItem): boolean;

	validateValueForKeyError(forKey?: any, error: string): boolean;

	validateValueForKeyPathError(forKeyPath?: any, error: string): boolean;

	valueAtIndexInPropertyWithKey(_: number, inPropertyWithKey: string): any;

	valueClassForBinding(_: string): typeof NSObject;

	valueForKey(_: string): any;

	valueForKeyPath(_: string): any;

	valueForUndefinedKey(_: string): any;

	valueWithNameInPropertyWithKey(_: string, inPropertyWithKey: string): any;

	valueWithUniqueIDInPropertyWithKey(_: any, inPropertyWithKey: string): any;

	viewStringForToolTipPointUserData(_: NSView, stringForToolTip: number, point: CGPoint, userData?: any): string;

	willChangeValuesAtIndexesForKey(_: NSKeyValueChange, valuesAtIndexes: NSIndexSet, forKey: string): void;

	willChangeValueForKey(_: string): void;

	willChangeValueForKeyWithWithSetMutationUsingObjects(_: string, withSetMutation: NSKeyValueSetMutationKind, usingObjects: NSSet<any>): void;
}

interface NSObjectProtocol {

	debugDescription?: string;

	description: string;

	hash: number;

	superclass: typeof NSObject;

	isProxy: boolean;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): NSObjectProtocol;
}
declare var NSObjectProtocol: {

	prototype: NSObjectProtocol;
};
