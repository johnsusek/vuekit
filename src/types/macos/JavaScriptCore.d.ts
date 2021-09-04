
declare function JSCheckScriptSyntax(ctx: any, script: any, sourceURL: any, startingLineNumber: number, exception: any): boolean;

declare function JSClassCreate(definition: JSClassDefinition): any;

interface JSClassDefinition {
	version: number;
	attributes: number;
	className: string;
	parentClass: any;
	staticValues: JSStaticValue;
	staticFunctions: JSStaticFunction;
	initialize: (p1: any, p2: any) => void;
	finalize: (p1: any) => void;
	hasProperty: (p1: any, p2: any, p3: any) => boolean;
	getProperty: (p1: any, p2: any, p3: any, p4: any) => any;
	setProperty: (p1: any, p2: any, p3: any, p4: any, p5: any) => boolean;
	deleteProperty: (p1: any, p2: any, p3: any, p4: any) => boolean;
	getPropertyNames: (p1: any, p2: any, p3: any) => void;
	callAsFunction: (p1: any, p2: any, p3: any, p4: number, p5: any, p6: any) => any;
	callAsConstructor: (p1: any, p2: any, p3: number, p4: any, p5: any) => any;
	hasInstance: (p1: any, p2: any, p3: any, p4: any) => boolean;
	convertToType: (p1: any, p2: any, p3: JSType, p4: any) => any;
}
declare var JSClassDefinition: JSClassDefinition;

declare function JSClassRelease(jsClass: any): void;

declare function JSClassRetain(jsClass: any): any;

declare function JSContextGetGlobalContext(ctx: any): any;

declare function JSContextGetGlobalObject(ctx: any): any;

declare function JSContextGetGroup(ctx: any): any;

declare function JSContextGroupCreate(): any;

declare function JSContextGroupRelease(group: any): void;

declare function JSContextGroupRetain(group: any): any;

declare function JSEvaluateScript(ctx: any, script: any, thisObject: any, sourceURL: any, startingLineNumber: number, exception: any): any;

declare function JSGarbageCollect(ctx: any): void;

declare function JSGlobalContextCopyName(ctx: any): any;

declare function JSGlobalContextCreate(globalObjectClass: any): any;

declare function JSGlobalContextCreateInGroup(group: any, globalObjectClass: any): any;

declare function JSGlobalContextRelease(ctx: any): void;

declare function JSGlobalContextRetain(ctx: any): any;

declare function JSGlobalContextSetName(ctx: any, name: any): void;

declare function JSObjectCallAsConstructor(ctx: any, object_: any, argumentCount: number, arguments_: any, exception: any): any;

declare function JSObjectCallAsFunction(ctx: any, object_: any, thisObject: any, argumentCount: number, arguments_: any, exception: any): any;

declare function JSObjectCopyPropertyNames(ctx: any, object_: any): any;

declare function JSObjectDeleteProperty(ctx: any, object_: any, propertyName: any, exception: any): boolean;

declare function JSObjectDeletePropertyForKey(ctx: any, object_: any, propertyKey: any, exception: any): boolean;

declare function JSObjectGetArrayBufferByteLength(ctx: any, object_: any, exception: any): number;

declare function JSObjectGetArrayBufferBytesPtr(ctx: any, object_: any, exception: any): any;

declare function JSObjectGetPrivate(object_: any): any;

declare function JSObjectGetProperty(ctx: any, object_: any, propertyName: any, exception: any): any;

declare function JSObjectGetPropertyAtIndex(ctx: any, object_: any, propertyIndex: number, exception: any): any;

declare function JSObjectGetPropertyForKey(ctx: any, object_: any, propertyKey: any, exception: any): any;

declare function JSObjectGetPrototype(ctx: any, object_: any): any;

declare function JSObjectGetTypedArrayBuffer(ctx: any, object_: any, exception: any): any;

declare function JSObjectGetTypedArrayByteLength(ctx: any, object_: any, exception: any): number;

declare function JSObjectGetTypedArrayByteOffset(ctx: any, object_: any, exception: any): number;

declare function JSObjectGetTypedArrayBytesPtr(ctx: any, object_: any, exception: any): any;

declare function JSObjectGetTypedArrayLength(ctx: any, object_: any, exception: any): number;

declare function JSObjectHasProperty(ctx: any, object_: any, propertyName: any): boolean;

declare function JSObjectHasPropertyForKey(ctx: any, object_: any, propertyKey: any, exception: any): boolean;

declare function JSObjectIsConstructor(ctx: any, object_: any): boolean;

declare function JSObjectIsFunction(ctx: any, object_: any): boolean;

declare function JSObjectMake(ctx: any, jsClass: any, data: any): any;

declare function JSObjectMakeArray(ctx: any, argumentCount: number, arguments_: any, exception: any): any;

declare function JSObjectMakeArrayBufferWithBytesNoCopy(ctx: any, bytes: any, byteLength: number, bytesDeallocator: (p1: any, p2: any) => void, deallocatorContext: any, exception: any): any;

declare function JSObjectMakeConstructor(ctx: any, jsClass: any, callAsConstructor: (p1: any, p2: any, p3: number, p4: any, p5: any) => any): any;

declare function JSObjectMakeDate(ctx: any, argumentCount: number, arguments_: any, exception: any): any;

declare function JSObjectMakeDeferredPromise(ctx: any, resolve: any, reject: any, exception: any): any;

declare function JSObjectMakeError(ctx: any, argumentCount: number, arguments_: any, exception: any): any;

declare function JSObjectMakeFunction(ctx: any, name: any, parameterCount: number, parameterNames: any, body: any, sourceURL: any, startingLineNumber: number, exception: any): any;

declare function JSObjectMakeFunctionWithCallback(ctx: any, name: any, callAsFunction: (p1: any, p2: any, p3: any, p4: number, p5: any, p6: any) => any): any;

declare function JSObjectMakeRegExp(ctx: any, argumentCount: number, arguments_: any, exception: any): any;

declare function JSObjectMakeTypedArray(ctx: any, arrayType: JSTypedArrayType, length: number, exception: any): any;

declare function JSObjectMakeTypedArrayWithArrayBuffer(ctx: any, arrayType: JSTypedArrayType, buffer: any, exception: any): any;

declare function JSObjectMakeTypedArrayWithArrayBufferAndOffset(ctx: any, arrayType: JSTypedArrayType, buffer: any, byteOffset: number, length: number, exception: any): any;

declare function JSObjectMakeTypedArrayWithBytesNoCopy(ctx: any, arrayType: JSTypedArrayType, bytes: any, byteLength: number, bytesDeallocator: (p1: any, p2: any) => void, deallocatorContext: any, exception: any): any;

declare function JSObjectSetPrivate(object_: any, data: any): boolean;

declare function JSObjectSetProperty(ctx: any, object_: any, propertyName: any, value: any, attributes: number, exception: any): void;

declare function JSObjectSetPropertyAtIndex(ctx: any, object_: any, propertyIndex: number, value: any, exception: any): void;

declare function JSObjectSetPropertyForKey(ctx: any, object_: any, propertyKey: any, value: any, attributes: number, exception: any): void;

declare function JSObjectSetPrototype(ctx: any, object_: any, value: any): void;

declare function JSPropertyNameAccumulatorAddName(accumulator: any, propertyName: any): void;

declare function JSPropertyNameArrayGetCount(array: any): number;

declare function JSPropertyNameArrayGetNameAtIndex(array: any, index: number): any;

declare function JSPropertyNameArrayRelease(array: any): void;

declare function JSPropertyNameArrayRetain(array: any): any;

interface JSStaticFunction {
	name: string;
	callAsFunction: (p1: any, p2: any, p3: any, p4: number, p5: any, p6: any) => any;
	attributes: number;
}
declare var JSStaticFunction: JSStaticFunction;

interface JSStaticValue {
	name: string;
	getProperty: (p1: any, p2: any, p3: any, p4: any) => any;
	setProperty: (p1: any, p2: any, p3: any, p4: any, p5: any) => boolean;
	attributes: number;
}
declare var JSStaticValue: JSStaticValue;

declare function JSStringCopyCFString(alloc: any, string: any): string;

declare function JSStringCreateWithCFString(string: string): any;

declare function JSStringCreateWithCharacters(chars: number, numChars: number): any;

declare function JSStringCreateWithUTF8CString(string: string | any): any;

declare function JSStringGetCharactersPtr(string: any): number;

declare function JSStringGetLength(string: any): number;

declare function JSStringGetMaximumUTF8CStringSize(string: any): number;

declare function JSStringGetUTF8CString(string: any, buffer: string | any, bufferSize: number): number;

declare function JSStringIsEqual(a: any, b: any): boolean;

declare function JSStringIsEqualToUTF8CString(a: any, b: string | any): boolean;

declare function JSStringRelease(string: any): void;

declare function JSStringRetain(string: any): any;

enum JSType {

	kJSTypeUndefined = 0,

	kJSTypeNull = 1,

	kJSTypeBoolean = 2,

	kJSTypeNumber = 3,

	kJSTypeString = 4,

	kJSTypeObject = 5,

	kJSTypeSymbol = 6
}


enum JSTypedArrayType {

	kJSTypedArrayTypeInt8Array = 0,

	kJSTypedArrayTypeInt16Array = 1,

	kJSTypedArrayTypeInt32Array = 2,

	kJSTypedArrayTypeUint8Array = 3,

	kJSTypedArrayTypeUint8ClampedArray = 4,

	kJSTypedArrayTypeUint16Array = 5,

	kJSTypedArrayTypeUint32Array = 6,

	kJSTypedArrayTypeFloat32Array = 7,

	kJSTypedArrayTypeFloat64Array = 8,

	kJSTypedArrayTypeArrayBuffer = 9,

	kJSTypedArrayTypeNone = 10
}


declare function JSValueCreateJSONString(ctx: any, value: any, indent: number, exception: any): any;

declare function JSValueGetType(ctx: any, value: any): JSType;

declare function JSValueGetTypedArrayType(ctx: any, value: any, exception: any): JSTypedArrayType;

declare function JSValueIsArray(ctx: any, value: any): boolean;

declare function JSValueIsBoolean(ctx: any, value: any): boolean;

declare function JSValueIsDate(ctx: any, value: any): boolean;

declare function JSValueIsEqual(ctx: any, a: any, b: any, exception: any): boolean;

declare function JSValueIsInstanceOfConstructor(ctx: any, value: any, constructor: any, exception: any): boolean;

declare function JSValueIsNull(ctx: any, value: any): boolean;

declare function JSValueIsNumber(ctx: any, value: any): boolean;

declare function JSValueIsObject(ctx: any, value: any): boolean;

declare function JSValueIsObjectOfClass(ctx: any, value: any, jsClass: any): boolean;

declare function JSValueIsStrictEqual(ctx: any, a: any, b: any): boolean;

declare function JSValueIsString(ctx: any, value: any): boolean;

declare function JSValueIsSymbol(ctx: any, value: any): boolean;

declare function JSValueIsUndefined(ctx: any, value: any): boolean;

declare function JSValueMakeBoolean(ctx: any, boolean: boolean): any;

declare function JSValueMakeFromJSONString(ctx: any, string: any): any;

declare function JSValueMakeNull(ctx: any): any;

declare function JSValueMakeNumber(ctx: any, number: number): any;

declare function JSValueMakeString(ctx: any, string: any): any;

declare function JSValueMakeSymbol(ctx: any, description: any): any;

declare function JSValueMakeUndefined(ctx: any): any;

declare function JSValueProtect(ctx: any, value: any): void;

declare function JSValueToBoolean(ctx: any, value: any): boolean;

declare function JSValueToNumber(ctx: any, value: any, exception: any): number;

declare function JSValueToObject(ctx: any, value: any, exception: any): any;

declare function JSValueToStringCopy(ctx: any, value: any, exception: any): any;

declare function JSValueUnprotect(ctx: any, value: any): void;

declare const kJSClassAttributeNoAutomaticPrototype: number;

declare const kJSClassAttributeNone: number;

declare var kJSClassDefinitionEmpty: JSClassDefinition;

declare const kJSPropertyAttributeDontDelete: number;

declare const kJSPropertyAttributeDontEnum: number;

declare const kJSPropertyAttributeNone: number;

declare const kJSPropertyAttributeReadOnly: number;
