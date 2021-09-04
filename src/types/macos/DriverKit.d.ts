
interface IOAddressSegment {
	address: number;
	length: number;
}
declare var IOAddressSegment: IOAddressSegment;

declare function IODelay(us: number): void;

declare var IODispatchQueue: typeof NSObject;

declare var IODispatchQueueVar: typeof NSObject;

declare function IOFree(address: any, length: number): void;

interface IOInterruptDispatchSourcePayload {
	time: number;
	count: number;
}
declare var IOInterruptDispatchSourcePayload: IOInterruptDispatchSourcePayload;

declare function IOLockAlloc(): any;

declare function IOLockAssert(lock: any, type: IOLockAssertState): void;

enum IOLockAssertState {

	kIOLockAssertOwned = 1,

	kIOLockAssertNotOwned = 2
}


declare function IOLockFree(lock: any): void;

declare function IOLockLock(lock: any): void;

declare function IOLockTryLock(lock: any): boolean;

declare function IOLockUnlock(lock: any): void;

declare function IOLogBuffer(title: string | any, buffer: any, size: number): void;

declare function IOMalloc(length: number): any;

declare function IOMallocZero(length: number): any;

declare var IOMemoryDescriptor: typeof NSObject;

declare var IOMemoryDescriptorInterface: typeof NSObject;

declare var IOMemoryDescriptorMetaClass: typeof NSObject;

declare var IOMemoryMap: typeof NSObject;

declare function IOParseBootArgNumber(arg_string: string | any, arg_ptr: any, max_len: number): boolean;

declare function IOParseBootArgString(arg_string: string | any, arg_ptr: string | any, strlen: number): boolean;

interface IORPC {
	message: IORPCMessageMach;
	reply: IORPCMessageMach;
	sendSize: number;
	replySize: number;
}
declare var IORPC: IORPC;

interface IORPCMessage {
	msgid: number;
	flags: number;
	objectRefs: number;
	objects: number;
}
declare var IORPCMessage: IORPCMessage;

interface IORPCMessageErrorReturn {
	mach: IORPCMessageMach;
	content: IORPCMessageErrorReturnContent;
}
declare var IORPCMessageErrorReturn: IORPCMessageErrorReturn;

interface IORPCMessageErrorReturnContent {
	hdr: IORPCMessage;
	result: number;
	pad: number;
}
declare var IORPCMessageErrorReturnContent: IORPCMessageErrorReturnContent;

interface IORPCMessageMach {
	msgh: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	objects: mach_msg_port_descriptor_t;
}
declare var IORPCMessageMach: IORPCMessageMach;

declare function IORWLockAlloc(): any;

enum IORWLockAssertState {

	kIORWLockAssertRead = 1,

	kIORWLockAssertWrite = 2,

	kIORWLockAssertHeld = 3,

	kIORWLockAssertNotHeld = 4
}


declare function IORWLockFree(lock: any): void;

declare function IORWLockRead(lock: any): void;

declare function IORWLockUnlock(lock: any): void;

declare function IORWLockWrite(lock: any): void;

declare function IORecursiveLockAlloc(): any;

declare function IORecursiveLockFree(lock: any): void;

declare function IORecursiveLockHaveLock(lock: any): boolean;

declare function IORecursiveLockLock(lock: any): void;

declare function IORecursiveLockTryLock(lock: any): boolean;

declare function IORecursiveLockUnlock(lock: any): void;

declare var IOService: typeof NSObject;

declare function IOSleep(ms: number): void;

declare var IOVMPageSize: number;

declare var OSArray: typeof NSObject;

declare function OSArrayAppendValue(obj: number, value: NSObject): boolean;

declare function OSArrayApply(obj: number, applier: (p1: NSObject) => boolean): boolean;

declare function OSArrayCreate(): number;

declare function OSArrayGetCount(obj: number): number;

declare function OSArrayGetStringValue(obj: number, index: number): string;

declare function OSArrayGetUInt64Value(obj: number, index: number): number;

declare function OSArrayGetValue(obj: number, index: number): NSObject;

declare function OSArrayReplaceValue(obj: number, index: number, value: NSObject): boolean;

declare function OSArraySetStringValue(obj: number, index: number, value: string | any): void;

declare function OSArraySetUInt64Value(obj: number, index: number, value: number): void;

declare function OSArraySetValue(obj: number, index: number, value: NSObject): boolean;

declare var OSBoolean: typeof NSObject;

interface OSClassDescription {
	descriptionSize: number;
	name: number;
	superName: number;
	methodOptionsSize: number;
	methodOptionsOffset: number;
	metaMethodOptionsSize: number;
	metaMethodOptionsOffset: number;
	queueNamesSize: number;
	queueNamesOffset: number;
	methodNamesSize: number;
	methodNamesOffset: number;
	metaMethodNamesSize: number;
	metaMethodNamesOffset: number;
	flags: number;
	resv1: number;
	methodOptions: number;
	metaMethodOptions: number;
	dispatchNames: number;
	methodNames: number;
	metaMethodNames: number;
}
declare var OSClassDescription: OSClassDescription;

declare function OSCollectionTypeID(obj: NSObject): number;

declare function OSCollectionTypeName(t: number): string;

declare function OSCollectionsInitialize(): void;

declare var OSContainer: typeof NSObject;

declare function OSCreateObjectFromSerialization(serial: number): NSObject;

declare function OSCreateSerializationFromBytes(bytes: any, length: number, freeBuffer: (p1: any, p2: number) => void): number;

declare function OSCreateSerializationFromObject(obj: NSObject): number;

declare var OSData: typeof NSObject;

declare function OSDataAppendBytes(data: number, bytes: any, length: number): boolean;

declare function OSDataCreate(bytes: any, length: number): number;

declare function OSDataGetBytes(obj: number, buffer: any, offset: number, length: number): number;

declare function OSDataGetBytesPtr(obj: number, offset: number, length: number): any;

declare function OSDataGetLength(obj: number): number;

declare var OSDictionary: typeof NSObject;

declare function OSDictionaryApply(obj: number, applier: (p1: string, p2: NSObject) => boolean): boolean;

declare function OSDictionaryCreate(): number;

declare function OSDictionaryGetCount(obj: number): number;

declare function OSDictionaryGetStringValue(obj: number, key: string | any): string;

declare function OSDictionaryGetUInt64Value(obj: number, key: string | any): number;

declare function OSDictionaryGetValue(obj: number, key: string | any): NSObject;

declare function OSDictionarySetStringValue(obj: number, key: string | any, value: string | any): void;

declare function OSDictionarySetUInt64Value(obj: number, key: string | any, value: number): void;

declare function OSDictionarySetValue(obj: number, key: string | any, value: NSObject): boolean;

declare var OSInterface: typeof NSObject;

declare var OSMetaClass: typeof NSObject;

declare var OSMetaClassBase: typeof NSObject;

declare var OSMetaClassBaseVar: typeof NSObject;

declare var OSMetaClassVar: typeof NSObject;

declare var OSMetaClassVar2: typeof NSObject;

declare var OSNumber: typeof NSObject;

declare function OSNumberCreateWithUInt64Value(value: number): number;

declare function OSNumberGetUInt64Value(obj: number): number;

declare var OSObject: typeof NSObject;

declare var OSObjectInterface: typeof NSObject;

declare function OSObjectLog(obj: NSObject): void;

declare var OSObjectMetaClass: typeof NSObject;

declare function OSObjectRelease(container: NSObject): void;

declare function OSObjectRetain(container: NSObject): void;

declare var OSObjectVar: typeof NSObject;

declare var OSObjectVar2: typeof NSObject;

declare function OSSerializationGetBytes(serial: number, length: number): any;

declare var OSString: typeof NSObject;

declare function OSStringCreate(cstring: string | any, length: number): number;

declare function OSStringGetLength(string: number): number;

declare function OSStringGetStringPtr(obj: number): string;

declare function OSSynchronizeIO(): void;

interface _IOMDPrivateState {
	length: number;
	options: number;
}
declare var _IOMDPrivateState: _IOMDPrivateState;

interface _IOMemoryMapPrivateState {
	length: number;
	offset: number;
	options: number;
	address: number;
}
declare var _IOMemoryMapPrivateState: _IOMemoryMapPrivateState;

declare function crc32(crc: number, buf: any, size: number): number;

declare const kIOMemoryDirectionIn: number;

declare const kIOMemoryDirectionInOut: number;

declare const kIOMemoryDirectionOut: number;

declare const kIOMemoryDirectionOutIn: number;

declare const kIOMemoryMapCacheModeCopyback: number;

declare const kIOMemoryMapCacheModeDefault: number;

declare const kIOMemoryMapCacheModeInhibit: number;

declare const kIOMemoryMapCacheModeWriteThrough: number;

declare const kIOMemoryMapFixedAddress: number;

declare const kIOMemoryMapReadOnly: number;

declare const kIORPCMessageError: number;

declare const kIORPCMessageIDKernel: number;

declare const kIORPCMessageKernel: number;

declare const kIORPCMessageLocalHost: number;

declare const kIORPCMessageObjectRefs: number;

declare const kIORPCMessageOneway: number;

declare const kIORPCMessageOnqueue: number;

declare const kIORPCMessageRemote: number;

declare const kIORPCMessageSimpleReply: number;

declare const kIORPCVersion190615: number;

declare const kIORPCVersion190615Reply: number;

declare const kIOServiceNotificationTypeLast: number;

declare const kIOServiceNotificationTypeMatched: number;

declare const kIOServiceNotificationTypeNone: number;

declare const kIOServiceNotificationTypeTerminated: number;

declare const kIOServicePowerCapabilityLow: number;

declare const kIOServicePowerCapabilityOff: number;

declare const kIOServicePowerCapabilityOn: number;

declare const kIOServiceSearchPropertyParents: number;

declare const kIOTimerClockMachAbsoluteTime: number;

declare const kIOTimerClockMachContinuousTime: number;

declare const kIOTimerClockMonotonicRaw: number;

declare const kIOTimerClockRealTime: number;

declare const kIOTimerClockUptimeRaw: number;

declare const kIOTimerClockWallTime: number;

declare const kIOUserClientAsyncArgumentsCountMax: number;

declare const kIOUserClientAsyncReferenceCountMax: number;

declare const kIOUserClientMemoryReadOnly: number;

declare const kIOUserClientMethodArgumentsCurrentVersion: number;

declare const kIOUserClientScalarArrayCountMax: number;

declare const kIOUserClientVariableStructureSize: number;

declare const kOSArrayAppend: number;

declare var kOSBooleanFalse: number;

declare var kOSBooleanTrue: number;

declare const kOSClassCanRemote: number;

declare const kOSCollectionTypeArray: number;

declare const kOSCollectionTypeBoolean: number;

declare const kOSCollectionTypeData: number;

declare const kOSCollectionTypeDictionary: number;

declare const kOSCollectionTypeNumber: number;

declare const kOSCollectionTypeSerialization: number;

declare const kOSCollectionTypeSet: number;

declare const kOSCollectionTypeString: number;

declare const kOSCollectionTypeSymbol: number;
