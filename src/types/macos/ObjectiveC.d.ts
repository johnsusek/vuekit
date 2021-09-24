globalThis.objc_AssociationPolicy = globalThis.objc_AssociationPolicy || {};

globalThis.objc_AssociationPolicy = {
    OBJC_ASSOCIATION_ASSIGN: 0,
    OBJC_ASSOCIATION_RETAIN_NONATOMIC: 1,
    OBJC_ASSOCIATION_COPY_NONATOMIC: 3,
    OBJC_ASSOCIATION_RETAIN: 769,
    OBJC_ASSOCIATION_COPY: 771,
    '0': 'OBJC_ASSOCIATION_ASSIGN',
    '1': 'OBJC_ASSOCIATION_RETAIN_NONATOMIC',
    '3': 'OBJC_ASSOCIATION_COPY_NONATOMIC',
    '769': 'OBJC_ASSOCIATION_RETAIN',
    '771': 'OBJC_ASSOCIATION_COPY'
}

declare class NSObject implements NSObjectProtocol {
  static automaticallyNotifiesObserversForKey(forKey: string): boolean;
  static cancelPreviousPerformRequestsWithTarget(withTarget: any): void;
  static cancelPreviousPerformRequestsWithTargetSelectorObject(withTarget: any, selector: string, object_?: any): void;
  static classFallbacksForKeyedArchiver(): NSArray<string>;
  static classForKeyedUnarchiver(): typeof NSObject;
  static conformsToProtocol(to: any /* Protocol */): boolean;
  static debugDescription(): string;
  static description(): string;
  static exposeBinding(_: string): void;
  static hash(): number;
  static initialize(): void;
  static instanceMethodForSelector(for_: string): () => void;
  static instancesRespondToSelector(to: string): boolean;
  static isSubclassOfClass(of: typeof NSObject): boolean;
  static keyPathsForValuesAffectingValueForKey(forKey: string): Set<string>;
  static load(): void;
  static resolveClassMethod(_: string): boolean;
  static resolveInstanceMethod(_: string): boolean;
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
  observationInfo: any;
  setObservationInfo(_: any)
  scriptingProperties: NSDictionary<string, any>;
  setScriptingProperties(_: NSDictionary<string, any>)
  readonly isSelectable: boolean;
  readonly toManyRelationshipKeys: NSArray<string>;
  readonly toOneRelationshipKeys: NSArray<string>;
  static accessInstanceVariablesDirectly(): boolean;
  readonly debugDescription: string; // inherited from NSObjectProtocol
  readonly description: string; // inherited from NSObjectProtocol
  readonly hash: number; // inherited from NSObjectProtocol
  readonly isProxy: boolean; // inherited from NSObjectProtocol
  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol
  acceptsPreviewPanelControl(_: QLPreviewPanel): boolean;
  accessibilityArrayAttributeCount(_: string): number;
  accessibilityArrayAttributeValuesIndexMaxCount(_: string, index: number, maxCount: number): NSArray<any>;
  accessibilityHitTest(_: NSPoint): any;
  accessibilityIndexOfChild(ofChild: any): number;
  addObserverForKeyPathOptionsContext(_: NSObject, forKeyPath: string, options: NSKeyValueObservingOptions, context?: any): void;
  applicationDelegateHandlesKey(_: NSApplication, delegateHandlesKey: string): boolean;
  attemptRecoveryFromErrorOptionIndex(fromError: Error, optionIndex: number): boolean;
  attemptRecoveryFromErrorOptionIndexDelegateDidRecoverSelectorContextInfo(fromError: Error, optionIndex: number, delegate?: any, didRecoverSelector?: string, contextInfo?: any): void;
  awakeAfterUsingCoder(using: NSCoder): any;
  awakeFromNib(): void;
  beginPreviewPanelControl(_: QLPreviewPanel): void;
  bindToObjectWithKeyPathOptions(_: string, to: any, withKeyPath: string, options?: NSDictionary<string, any>): void;
  changeColor(_?: any): void;
  changeFont(_?: any): void;
  coerceValueForKey(_?: any, forKey: string): any;
  commitEditing(): boolean;
  commitEditingAndReturnError(): boolean;
  commitEditingWithDelegateDidCommitSelectorContextInfo(_?: any, didCommitSelector?: string, contextInfo?: any): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  controlTextDidBeginEditing(_: Notification): void;
  controlTextDidChange(_: Notification): void;
  controlTextDidEndEditing(_: Notification): void;
  copy(): any;
  copyScriptingValueForKeyWithProperties(_: any, forKey: string, withProperties: NSDictionary<string, any>): any;
  dictionaryWithValuesForKeys(forKeys: NSArray<string>): NSDictionary<string, any>;
  didChangeValuesAtIndexesForKey(_: NSKeyValueChange, valuesAt: IndexSet, forKey: string): void;
  didChangeValueForKey(forKey: string): void;
  didChangeValueForKeyWithSetMutationUsing(forKey: string, withSetMutation: NSKeyValueSetMutationKind, using: Set<any>): void;
  discardEditing(): void;
  doesContain(_: any): boolean;
  doesNotRecognizeSelector(_: string): void;
  endPreviewPanelControl(_: QLPreviewPanel): void;
  forwardingTargetForSelector(for_: string): any;
  imageRepresentation(): any;
  imageRepresentationType(): string;
  imageSubtitle(): string;
  imageTitle(): string;
  imageUID(): string;
  imageVersion(): number;
  indicesOfObjectsByEvaluatingObjectSpecifier(byEvaluatingObjectSpecifier: NSScriptObjectSpecifier): NSArray<number>;
  infoForBinding(_: string): NSDictionary<string, any>;
  static create(): this;
  insertValueAtIndexInPropertyWithKey(_: any, at: number, inPropertyWithKey: string): void;
  insertValueInPropertyWithKey(_: any, inPropertyWithKey: string): void;
  inverseForRelationshipKey(forRelationshipKey: string): string;
  isCaseInsensitiveLike(_: string): boolean;
  isEqual(_: any): boolean;
  isEqualTo(to?: any): boolean;
  isGreaterThan(_?: any): boolean;
  isGreaterThanOrEqualTo(to?: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isLessThan(_?: any): boolean;
  isLessThanOrEqualTo(to?: any): boolean;
  isLike(_: string): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  isNotEqualTo(to?: any): boolean;
  layerShouldInheritContentsScaleFromWindow(_: CALayer, shouldInheritContentsScale: number, fromWindow: NSWindow): boolean;
  methodForSelector(for_: string): () => void;
  mutableArrayValueForKey(forKey: string): NSMutableArray<any>;
  mutableArrayValueForKeyPath(forKeyPath: string): NSMutableArray<any>;
  mutableCopy(): any;
  mutableOrderedSetValueForKey(forKey: string): NSMutableOrderedSet<any>;
  mutableOrderedSetValueForKeyPath(forKeyPath: string): NSMutableOrderedSet<any>;
  mutableSetValueForKey(forKey: string): NSMutableSet<any>;
  mutableSetValueForKeyPath(forKeyPath: string): NSMutableSet<any>;
  newScriptingObjectOfClassForValueForKeyWithContentsValueProperties(of: typeof NSObject, forValueForKey: string, withContentsValue?: any, properties: NSDictionary<string, any>): any;
  objectDidBeginEditing(_: NSEditor): void;
  objectDidEndEditing(_: NSEditor): void;
  observeValueForKeyPathOfObjectChangeContext(forKeyPath?: string, of?: any, change?: NSDictionary<string, any>, context?: any): void;
  optionDescriptionsForBinding(_: string): NSArray<NSAttributeDescription>;
  pasteboardProvideDataForType(_: NSPasteboard, provideDataForType: string): void;
  pasteboardChangedOwner(_: NSPasteboard): void;
  performSelector(_: string): any;
  performSelectorOnThreadWithObjectWaitUntilDone(_: string, on: Thread, with_?: any, waitUntilDone: boolean): void;
  performSelectorOnThreadWithObjectWaitUntilDoneModes(_: string, on: Thread, with_?: any, waitUntilDone: boolean, modes?: NSArray<string>): void;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectAfterDelay(_: string, with_?: any, afterDelay: number): void;
  performSelectorWithObjectAfterDelayInModes(_: string, with_?: any, afterDelay: number, inModes: NSArray<string>): void;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  performSelectorInBackgroundWithObject(inBackground: string, with_?: any): void;
  performSelectorOnMainThreadWithObjectWaitUntilDone(onMainThread: string, with_?: any, waitUntilDone: boolean): void;
  performSelectorOnMainThreadWithObjectWaitUntilDoneModes(onMainThread: string, with_?: any, waitUntilDone: boolean, modes?: NSArray<string>): void;
  prepareForInterfaceBuilder(): void;
  provideImageDataBytesPerRowOriginSizeUserInfo(_: any, _: number, _: number, bytesPerRow: number, origin: number, size: number, userInfo?: any): void;
  quartzFilterManagerDidAddFilter(_: QuartzFilterManager, didAddFilter: QuartzFilter): void;
  quartzFilterManagerDidModifyFilter(_: QuartzFilterManager, didModifyFilter: QuartzFilter): void;
  quartzFilterManagerDidRemoveFilter(_: QuartzFilterManager, didRemoveFilter: QuartzFilter): void;
  quartzFilterManagerDidSelectFilter(_: QuartzFilterManager, didSelectFilter: QuartzFilter): void;
  removeObserverForKeyPath(_: NSObject, forKeyPath: string): void;
  removeObserverForKeyPathContext(_: NSObject, forKeyPath: string, context?: any): void;
  removeValueAtIndexFromPropertyWithKey(at: number, fromPropertyWithKey: string): void;
  replaceValueAtIndexInPropertyWithKeyWithValue(at: number, inPropertyWithKey: string, withValue: any): void;
  replacementObjectForCoder(for_: NSCoder): any;
  replacementObjectForKeyedArchiver(for_: NSKeyedArchiver): any;
  respondsToSelector(_: string): boolean;
  saveOptionsShouldShowUTType(_: IKSaveOptions, shouldShowUTType: string): boolean;
  scriptingBeginsWith(with_: any): boolean;
  scriptingContains(_: any): boolean;
  scriptingEndsWith(with_: any): boolean;
  scriptingIsEqualTo(to: any): boolean;
  scriptingIsGreaterThan(_: any): boolean;
  scriptingIsGreaterThanOrEqualTo(to: any): boolean;
  scriptingIsLessThan(_: any): boolean;
  scriptingIsLessThanOrEqualTo(to: any): boolean;
  scriptingValueForSpecifier(for_: NSScriptObjectSpecifier): any;
  self(): this;
  setNilValueForKey(_: string): void;
  setValueForKey(_?: any, forKey: string): void;
  setValueForKeyPath(_?: any, forKeyPath: string): void;
  setValueForUndefinedKey(_?: any, forUndefinedKey: string): void;
  setValuesForKeysWithDictionary(_: NSDictionary<string, any>): void;
  unbind(_: string): void;
  validModesForFontPanel(_: NSFontPanel): NSFontPanel.ModeMask;
  validateMenuItem(_: NSMenuItem): boolean;
  validateToolbarItem(_: NSToolbarItem): boolean;
  validateValueForKeyError(forKey?: any, error: string): boolean;
  validateValueForKeyPathError(forKeyPath?: any, error: string): boolean;
  valueAtIndexInPropertyWithKey(at: number, inPropertyWithKey: string): any;
  valueClassForBinding(_: string): typeof NSObject;
  valueForKey(forKey: string): any;
  valueForKeyPath(forKeyPath: string): any;
  valueForUndefinedKey(forUndefinedKey: string): any;
  valueWithNameInPropertyWithKey(withName: string, inPropertyWithKey: string): any;
  valueWithUniqueIDInPropertyWithKey(withUniqueID: any, inPropertyWithKey: string): any;
  viewStringForToolTipPointUserData(_: NSView, stringForToolTip: number, point: NSPoint, userData?: any): string;
  willChangeValuesAtIndexesForKey(_: NSKeyValueChange, valuesAt: IndexSet, forKey: string): void;
  willChangeValueForKey(forKey: string): void;
  willChangeValueForKeyWithSetMutationUsing(forKey: string, withSetMutation: NSKeyValueSetMutationKind, using: Set<any>): void;
}

interface NSObjectProtocol {
  debugDescription?: string;
  description: string;
  hash: number;
  superclass: typeof NSObject;
  isProxy: boolean;
  conformsToProtocol(to: any /* Protocol */): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): NSObjectProtocol;
}

declare var NSObjectProtocol: {
  prototype: NSObjectProtocol;
};

interface NXHashState {
  i: number;
  j: number;
}

declare var NXHashState: NXHashState;

interface NXHashTable {
  prototype: NXHashTablePrototype;
  count: number;
  nbBuckets: number;
  buckets: any;
  info: any;
}

declare var NXHashTable: NXHashTable;

interface NXHashTablePrototype {
  hash: (p1: any, p2: any) => number;
  isEqual: (p1: any, p2: any, p3: any) => number;
  free: (p1: any, p2: any) => void;
  style: number;
}

declare var NXHashTablePrototype: NXHashTablePrototype;


declare const OBJC_CLEAR_RESIDENT_STACK: number;

declare const OBJC_COLLECT_IF_NEEDED: number;

declare const OBJC_EXHAUSTIVE_COLLECTION: number;

declare const OBJC_FULL_COLLECTION: number;

declare const OBJC_GENERATIONAL_COLLECTION: number;

declare const OBJC_RATIO_COLLECTION: number;

declare const OBJC_SYNC_NOT_OWNING_THREAD_ERROR: number;

declare const OBJC_SYNC_SUCCESS: number;

declare const OBJC_WAIT_UNTIL_DONE: number;
declare var _alloc: (p1: typeof NSObject, p2: number) => any;

declare var _copy: (p1: any, p2: number) => any;

declare var _dealloc: (p1: any) => any;

declare function _objc_msgForward(): void;
declare function _objc_msgForward_stret(): void;
declare function _objc_realizeClassFromSwift(cls: typeof NSObject, previously: any): typeof NSObject;
declare function _objc_resolve_categories_for_class(cls: typeof NSObject): void;
declare var _realloc: (p1: any, p2: number) => any;

declare var _zoneAlloc: (p1: typeof NSObject, p2: number, p3: any) => any;

declare var _zoneCopy: (p1: any, p2: number, p3: any) => any;

declare var _zoneRealloc: (p1: any, p2: number, p3: any) => any;

declare function class_addIvar(cls: typeof NSObject, name: string | any, size: number, alignment: number, types: string | any): boolean;
declare function class_addMethod(cls: typeof NSObject, name: string, imp: () => void, types: string | any): boolean;
declare function class_addMethods(p1: typeof NSObject, p2: any): void;
declare function class_addProperty(cls: typeof NSObject, name: string | any, attributes: objc_property_attribute_t, attributeCount: number): boolean;
declare function class_addProtocol(cls: typeof NSObject, protocol: any /* Protocol */): boolean;
declare function class_conformsToProtocol(cls: typeof NSObject, protocol: any /* Protocol */): boolean;
declare function class_copyIvarList(cls: typeof NSObject, outCount: number): any;
declare function class_copyMethodList(cls: typeof NSObject, outCount: number): any;
declare function class_copyPropertyList(cls: typeof NSObject, outCount: number): any;
declare function class_copyProtocolList(cls: typeof NSObject, outCount: number): any /* Protocol */;
declare function class_createInstance(cls: typeof NSObject, extraBytes: number): any;
declare function class_createInstanceFunction(cls: typeof NSObject, extraBytes: number): any;
declare function class_getClassMethod(cls: typeof NSObject, name: string): any;
declare function class_getClassVariable(cls: typeof NSObject, name: string | any): any;
declare function class_getImageName(cls: typeof NSObject): string;
declare function class_getInstanceMethod(cls: typeof NSObject, name: string): any;
declare function class_getInstanceSize(cls: typeof NSObject): number;
declare function class_getInstanceVariable(cls: typeof NSObject, name: string | any): any;
declare function class_getIvarLayout(cls: typeof NSObject): string;
declare function class_getMethodImplementation(cls: typeof NSObject, name: string): () => void;
declare function class_getMethodImplementation_stret(cls: typeof NSObject, name: string): () => void;
declare function class_getName(cls: typeof NSObject): string;
declare function class_getProperty(cls: typeof NSObject, name: string | any): any;
declare function class_getSuperclass(cls: typeof NSObject): typeof NSObject;
declare function class_getVersion(cls: typeof NSObject): number;
declare function class_getWeakIvarLayout(cls: typeof NSObject): string;
declare function class_isMetaClass(cls: typeof NSObject): boolean;
declare function class_nextMethodList(p1: typeof NSObject, p2: any): any;
declare function class_poseAs(imposter: typeof NSObject, original: typeof NSObject): typeof NSObject;
declare function class_removeMethods(p1: typeof NSObject, p2: any): void;
declare function class_replaceMethod(cls: typeof NSObject, name: string, imp: () => void, types: string | any): () => void;
declare function class_replaceProperty(cls: typeof NSObject, name: string | any, attributes: objc_property_attribute_t, attributeCount: number): void;
declare function class_respondsToSelector(cls: typeof NSObject, sel: string): boolean;
declare function class_setIvarLayout(cls: typeof NSObject, layout: string | any): void;
declare function class_setVersion(cls: typeof NSObject, version: number): void;
declare function class_setWeakIvarLayout(cls: typeof NSObject, layout: string | any): void;
declare function imp_getBlock(anImp: () => void): any;
declare function imp_implementationWithBlock(block: any): () => void;
declare function imp_removeBlock(anImp: () => void): boolean;
declare function ivar_getName(v: any): string;
declare function ivar_getOffset(v: any): number;
declare function ivar_getTypeEncoding(v: any): string;
declare function method_copyArgumentType(m: any, index: number): string;
declare function method_copyReturnType(m: any): string;
declare function method_exchangeImplementations(m1: any, m2: any): void;
declare function method_getArgumentInfo(m: any, arg: number, type: string, offset: number): number;
declare function method_getArgumentType(m: any, index: number, dst: string | any, dst_len: number): void;
declare function method_getDescription(m: any): objc_method_description;
declare function method_getImplementation(m: any): () => void;
declare function method_getName(m: any): string;
declare function method_getNumberOfArguments(m: any): number;
declare function method_getReturnType(m: any, dst: string | any, dst_len: number): void;
declare function method_getSizeOfArguments(m: any): number;
declare function method_getTypeEncoding(m: any): string;
declare function method_invoke(): void;
declare function method_invoke_stret(): void;
declare function method_setImplementation(m: any, imp: () => void): () => void;
declare function objc_addClass(myClass: typeof NSObject): void;
declare function objc_addExceptionHandler(fn: (p1: any, p2: any) => void, context: any): number;
declare function objc_addLoadImageFunc(func: (p1: mach_header) => void): void;
declare function objc_allocateClassPair(superclass: typeof NSObject, name: string | any, extraBytes: number): typeof NSObject;
declare function objc_allocateProtocol(name: string | any): any /* Protocol */;
declare function objc_begin_catch(exc_buf: any): any;
interface objc_class {
  isa: typeof NSObject;
}

declare var objc_class: objc_class;

declare function objc_constructInstance(cls: typeof NSObject, bytes: any): any;
declare function objc_copyClassList(outCount: number): typeof NSObject;
declare function objc_copyClassNamesForImage(image: string | any, outCount: number): string;
declare function objc_copyImageNames(outCount: number): string;
declare function objc_copyProtocolList(outCount: number): any /* Protocol */;
declare function objc_destructInstance(obj: any): any;
declare function objc_disposeClassPair(cls: typeof NSObject): void;
declare function objc_duplicateClass(original: typeof NSObject, name: string | any, extraBytes: number): typeof NSObject;
declare function objc_end_catch(): void;
declare function objc_enumerationMutation(obj: any): void;
declare function objc_exception_rethrow(): void;
declare function objc_exception_throw(exception: any): void;
declare function objc_getAssociatedObject(object_: any, key: any): any;
declare function objc_getClass(name: string | any): any;
declare function objc_getClassList(buffer: typeof NSObject, bufferCount: number): number;
declare function objc_getClasses(): any;
declare function objc_getFutureClass(name: string | any): typeof NSObject;
declare function objc_getMetaClass(name: string | any): any;
declare function objc_getOrigClass(name: string | any): typeof NSObject;
declare function objc_getProtocol(name: string | any): any /* Protocol */;
declare function objc_getRequiredClass(name: string | any): typeof NSObject;
declare function objc_loadModule(moduleName: string | any, class_callback: (p1: typeof NSObject, p2: any) => void, errorCode: number): number;
declare function objc_loadModules(modlist: string, errStream: any, class_callback: (p1: typeof NSObject, p2: any) => void, hdr_addr: mach_header, debug_file: string | any): number;
declare function objc_loadWeak(location: any): any;
declare function objc_lookUpClass(name: string | any): typeof NSObject;
interface objc_method_description {
  name: string;
  types: string;
}

declare var objc_method_description: objc_method_description;

declare function objc_msgSend(): void;
declare function objc_msgSendSuper(): void;
declare function objc_msgSendSuper_stret(): void;
declare function objc_msgSend_fp2ret(): void;
declare function objc_msgSend_fpret(): void;
declare function objc_msgSend_stret(): void;
declare function objc_msgSendv(self: any, op: string, arg_size: number, arg_frame: any): any;
declare function objc_msgSendv_stret(stretAddr: any, self: any, op: string, arg_size: number, arg_frame: any): void;
interface objc_object {
  isa: typeof NSObject;
}

declare var objc_object: objc_object;

interface objc_property_attribute_t {
  name: string;
  value: string;
}

declare var objc_property_attribute_t: objc_property_attribute_t;

declare function objc_registerClassPair(cls: typeof NSObject): void;
declare function objc_registerProtocol(proto: any /* Protocol */): void;
declare function objc_removeAssociatedObjects(object_: any): void;
declare function objc_removeExceptionHandler(token: number): void;
declare function objc_retainedObject(obj: any): any;
declare function objc_setAssociatedObject(object_: any, key: any, value: any, policy: objc_AssociationPolicy): void;
declare function objc_setClassHandler(p1: (p1: string) => number): void;
declare function objc_setEnumerationMutationHandler(handler: (p1: any) => void): void;
declare function objc_setExceptionMatcher(fn: (p1: typeof NSObject, p2: any) => number): (p1: typeof NSObject, p2: any) => number;
declare function objc_setExceptionPreprocessor(fn: (p1: any) => any): (p1: any) => any;
declare function objc_setForwardHandler(fwd: any, fwd_stret: any): void;
declare function objc_setHook_getClass(newValue: (p1: string, p2: typeof NSObject) => boolean, outOldValue: (p1: string, p2: typeof NSObject) => boolean): void;
declare function objc_setHook_getImageName(newValue: (p1: typeof NSObject, p2: string) => boolean, outOldValue: (p1: typeof NSObject, p2: string) => boolean): void;
declare function objc_setHook_setAssociatedObject(newValue: (p1: any, p2: any, p3: any, p4: objc_AssociationPolicy) => void, outOldValue: (p1: any, p2: any, p3: any, p4: objc_AssociationPolicy) => void): void;
declare function objc_setMultithreaded(flag: boolean): void;
declare function objc_setUncaughtExceptionHandler(fn: (p1: any) => void): (p1: any) => void;
declare function objc_storeWeak(location: any, obj: any): any;
interface objc_super {
  receiver: any;
  super_class: typeof NSObject;
}

declare var objc_super: objc_super;

declare function objc_sync_enter(obj: any): number;
declare function objc_sync_exit(obj: any): number;
declare function objc_terminate(): void;
declare function objc_unloadModules(errorStream: any, unloadCallback: (p1: typeof NSObject, p2: any) => void): number;
declare function objc_unretainedObject(obj: any): any;
declare function objc_unretainedPointer(obj: any): any;
declare function object_copy(obj: any, size: number): any;
declare function object_dispose(obj: any): any;
declare function object_getClass(obj: any): typeof NSObject;
declare function object_getClassName(obj: any): string;
declare function object_getIndexedIvars(obj: any): any;
declare function object_getInstanceVariable(obj: any, name: string | any, outValue: any): any;
declare function object_getIvar(obj: any, ivar: any): any;
declare function object_isClass(obj: any): boolean;
declare function object_realloc(anObject: any, nBytes: number): any;
declare function object_reallocFromZone(anObject: any, nBytes: number, z: any): any;
declare function object_setClass(obj: any, cls: typeof NSObject): typeof NSObject;
declare function object_setInstanceVariable(obj: any, name: string | any, value: any): any;
declare function object_setInstanceVariableWithStrongDefault(obj: any, name: string | any, value: any): any;
declare function object_setIvar(obj: any, ivar: any, value: any): void;
declare function object_setIvarWithStrongDefault(obj: any, ivar: any, value: any): void;
declare function property_copyAttributeList(property: any, outCount: number): objc_property_attribute_t;
declare function property_copyAttributeValue(property: any, attributeName: string | any): string;
declare function property_getAttributes(property: any): string;
declare function property_getName(property: any): string;
declare function protocol_addMethodDescription(proto: any /* Protocol */, name: string, types: string | any, isRequiredMethod: boolean, isInstanceMethod: boolean): void;
declare function protocol_addProperty(proto: any /* Protocol */, name: string | any, attributes: objc_property_attribute_t, attributeCount: number, isRequiredProperty: boolean, isInstanceProperty: boolean): void;
declare function protocol_addProtocol(proto: any /* Protocol */, addition: any /* Protocol */): void;
declare function protocol_conformsToProtocol(proto: any /* Protocol */, other: any /* Protocol */): boolean;
declare function protocol_copyMethodDescriptionList(proto: any /* Protocol */, isRequiredMethod: boolean, isInstanceMethod: boolean, outCount: number): objc_method_description;
declare function protocol_copyPropertyList(proto: any /* Protocol */, outCount: number): any;
declare function protocol_copyPropertyList2(proto: any /* Protocol */, outCount: number, isRequiredProperty: boolean, isInstanceProperty: boolean): any;
declare function protocol_copyProtocolList(proto: any /* Protocol */, outCount: number): any /* Protocol */;
declare function protocol_getMethodDescription(proto: any /* Protocol */, aSel: string, isRequiredMethod: boolean, isInstanceMethod: boolean): objc_method_description;
declare function protocol_getName(proto: any /* Protocol */): string;
declare function protocol_getProperty(proto: any /* Protocol */, name: string | any, isRequiredProperty: boolean, isInstanceProperty: boolean): any;
declare function protocol_isEqual(proto: any /* Protocol */, other: any /* Protocol */): boolean;
declare function sel_getName(sel: string): string;
declare function sel_getNameFunction(sel: string): string;
declare function sel_getUid(str: string | any): string;
declare function sel_isEqual(lhs: string, rhs: string): boolean;
declare function sel_isMapped(sel: string): boolean;
declare function sel_registerName(str: string | any): string;
declare function sel_registerNameFunction(str: string | any): string;
enum objc_AssociationPolicy {
    OBJC_ASSOCIATION_ASSIGN = 0,
    OBJC_ASSOCIATION_RETAIN_NONATOMIC = 1,
    OBJC_ASSOCIATION_COPY_NONATOMIC = 3,
    OBJC_ASSOCIATION_RETAIN = 769,
    OBJC_ASSOCIATION_COPY = 771
}

