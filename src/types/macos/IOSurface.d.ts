
declare class IOSurface extends NSObject implements NSSecureCoding {

	readonly allocationSize: number;

	readonly allowsPixelSizeCasting: boolean;

	readonly baseAddress: any;

	readonly bytesPerElement: number;

	readonly bytesPerRow: number;

	readonly elementHeight: number;

	readonly elementWidth: number;

	readonly height: number;

	readonly isInUse: boolean;

	readonly localUseCount: number;

	readonly pixelFormat: number;

	readonly planeCount: number;

	readonly seed: number;

	readonly width: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(properties: NSDictionary<string, any>);

	allAttachments(): NSDictionary<string, any>;

	attachmentForKey(_: string): any;

	baseAddressOfPlaneAtIndex(_: number): any;

	bytesPerElementOfPlaneAtIndex(_: number): number;

	bytesPerRowOfPlaneAtIndex(_: number): number;

	decrementUseCount(): void;

	elementHeightOfPlaneAtIndex(_: number): number;

	elementWidthOfPlaneAtIndex(_: number): number;

	encodeWithCoder(_: NSCoder): void;

	heightOfPlaneAtIndex(_: number): number;

	incrementUseCount(): void;

	lockWithOptionsSeed(_: IOSurfaceLockOptions, seed?: number): number;

	removeAllAttachments(): void;

	removeAttachmentForKey(_: string): void;

	setAllAttachments(_: NSDictionary<string, any>): void;

	setAttachmentForKey(_: any, forKey: string): void;

	setPurgeableOldState(_: IOSurfacePurgeabilityState, oldState?: IOSurfacePurgeabilityState): number;

	unlockWithOptionsSeed(_: IOSurfaceLockOptions, seed?: number): number;

	widthOfPlaneAtIndex(_: number): number;
}

declare function IOSurfaceAlignProperty(property: string, value: number): number;

declare function IOSurfaceAllowsPixelSizeCasting(buffer: any): boolean;

enum IOSurfaceComponentName {

	kIOSurfaceComponentNameUnknown = 0,

	kIOSurfaceComponentNameAlpha = 1,

	kIOSurfaceComponentNameRed = 2,

	kIOSurfaceComponentNameGreen = 3,

	kIOSurfaceComponentNameBlue = 4,

	kIOSurfaceComponentNameLuma = 5,

	kIOSurfaceComponentNameChromaRed = 6,

	kIOSurfaceComponentNameChromaBlue = 7
}


enum IOSurfaceComponentRange {

	kIOSurfaceComponentRangeUnknown = 0,

	kIOSurfaceComponentRangeFullRange = 1,

	kIOSurfaceComponentRangeVideoRange = 2,

	kIOSurfaceComponentRangeWideRange = 3
}


enum IOSurfaceComponentType {

	kIOSurfaceComponentTypeUnknown = 0,

	kIOSurfaceComponentTypeUnsignedInteger = 1,

	kIOSurfaceComponentTypeSignedInteger = 2,

	kIOSurfaceComponentTypeFloat = 3
}


declare function IOSurfaceCopyAllValues(buffer: any): NSDictionary<any, any>;

declare function IOSurfaceCopyValue(buffer: any, key: string): any;

declare function IOSurfaceCreate(properties: NSDictionary<any, any>): any;

declare function IOSurfaceCreateMachPort(buffer: any): number;

declare function IOSurfaceCreateXPCObject(aSurface: any): NSObject;

declare function IOSurfaceDecrementUseCount(buffer: any): void;

declare function IOSurfaceGetAllocSize(buffer: any): number;

declare function IOSurfaceGetBaseAddress(buffer: any): any;

declare function IOSurfaceGetBaseAddressOfPlane(buffer: any, planeIndex: number): any;

declare function IOSurfaceGetBitDepthOfComponentOfPlane(buffer: any, planeIndex: number, componentIndex: number): number;

declare function IOSurfaceGetBitOffsetOfComponentOfPlane(buffer: any, planeIndex: number, componentIndex: number): number;

declare function IOSurfaceGetBytesPerElement(buffer: any): number;

declare function IOSurfaceGetBytesPerElementOfPlane(buffer: any, planeIndex: number): number;

declare function IOSurfaceGetBytesPerRow(buffer: any): number;

declare function IOSurfaceGetBytesPerRowOfPlane(buffer: any, planeIndex: number): number;

declare function IOSurfaceGetElementHeight(buffer: any): number;

declare function IOSurfaceGetElementHeightOfPlane(buffer: any, planeIndex: number): number;

declare function IOSurfaceGetElementWidth(buffer: any): number;

declare function IOSurfaceGetElementWidthOfPlane(buffer: any, planeIndex: number): number;

declare function IOSurfaceGetHeight(buffer: any): number;

declare function IOSurfaceGetHeightOfPlane(buffer: any, planeIndex: number): number;

declare function IOSurfaceGetID(buffer: any): number;

declare function IOSurfaceGetNameOfComponentOfPlane(buffer: any, planeIndex: number, componentIndex: number): IOSurfaceComponentName;

declare function IOSurfaceGetNumberOfComponentsOfPlane(buffer: any, planeIndex: number): number;

declare function IOSurfaceGetPixelFormat(buffer: any): number;

declare function IOSurfaceGetPlaneCount(buffer: any): number;

declare function IOSurfaceGetPropertyAlignment(property: string): number;

declare function IOSurfaceGetPropertyMaximum(property: string): number;

declare function IOSurfaceGetRangeOfComponentOfPlane(buffer: any, planeIndex: number, componentIndex: number): IOSurfaceComponentRange;

declare function IOSurfaceGetSeed(buffer: any): number;

declare function IOSurfaceGetSubsampling(buffer: any): IOSurfaceSubsampling;

declare function IOSurfaceGetTypeID(): number;

declare function IOSurfaceGetTypeOfComponentOfPlane(buffer: any, planeIndex: number, componentIndex: number): IOSurfaceComponentType;

declare function IOSurfaceGetUseCount(buffer: any): number;

declare function IOSurfaceGetWidth(buffer: any): number;

declare function IOSurfaceGetWidthOfPlane(buffer: any, planeIndex: number): number;

declare function IOSurfaceIncrementUseCount(buffer: any): void;

declare function IOSurfaceIsInUse(buffer: any): boolean;

declare function IOSurfaceLock(buffer: any, options: IOSurfaceLockOptions, seed: number): number;

enum IOSurfaceLockOptions {

	kIOSurfaceLockReadOnly = 1,

	kIOSurfaceLockAvoidSync = 2
}


declare function IOSurfaceLookup(csid: number): any;

declare function IOSurfaceLookupFromMachPort(port: number): any;

declare function IOSurfaceLookupFromXPCObject(xobj: NSObject): any;

declare var IOSurfacePropertyKeyAllocSize: string;

declare var IOSurfacePropertyKeyBytesPerElement: string;

declare var IOSurfacePropertyKeyBytesPerRow: string;

declare var IOSurfacePropertyKeyCacheMode: string;

declare var IOSurfacePropertyKeyElementHeight: string;

declare var IOSurfacePropertyKeyElementWidth: string;

declare var IOSurfacePropertyKeyHeight: string;

declare var IOSurfacePropertyKeyOffset: string;

declare var IOSurfacePropertyKeyPixelFormat: string;

declare var IOSurfacePropertyKeyPixelSizeCastingAllowed: string;

declare var IOSurfacePropertyKeyPlaneBase: string;

declare var IOSurfacePropertyKeyPlaneBytesPerElement: string;

declare var IOSurfacePropertyKeyPlaneBytesPerRow: string;

declare var IOSurfacePropertyKeyPlaneElementHeight: string;

declare var IOSurfacePropertyKeyPlaneElementWidth: string;

declare var IOSurfacePropertyKeyPlaneHeight: string;

declare var IOSurfacePropertyKeyPlaneInfo: string;

declare var IOSurfacePropertyKeyPlaneOffset: string;

declare var IOSurfacePropertyKeyPlaneSize: string;

declare var IOSurfacePropertyKeyPlaneWidth: string;

declare var IOSurfacePropertyKeyWidth: string;

enum IOSurfacePurgeabilityState {

	kIOSurfacePurgeableNonVolatile = 0,

	kIOSurfacePurgeableVolatile = 1,

	kIOSurfacePurgeableEmpty = 2,

	kIOSurfacePurgeableKeepCurrent = 3
}


declare function IOSurfaceRemoveAllValues(buffer: any): void;

declare function IOSurfaceRemoveValue(buffer: any, key: string): void;

declare function IOSurfaceSetPurgeable(buffer: any, newState: number, oldState: number): number;

declare function IOSurfaceSetValue(buffer: any, key: string, value: any): void;

declare function IOSurfaceSetValues(buffer: any, keysAndValues: NSDictionary<any, any>): void;

enum IOSurfaceSubsampling {

	kIOSurfaceSubsamplingUnknown = 0,

	kIOSurfaceSubsamplingNone = 1,

	kIOSurfaceSubsampling422 = 2,

	kIOSurfaceSubsampling420 = 3,

	kIOSurfaceSubsampling411 = 4
}


declare function IOSurfaceUnlock(buffer: any, options: IOSurfaceLockOptions, seed: number): number;

declare var kIOSurfaceAllocSize: string;

declare var kIOSurfaceBytesPerElement: string;

declare var kIOSurfaceBytesPerRow: string;

declare var kIOSurfaceCacheMode: string;

declare const kIOSurfaceCopybackCache: number;

declare const kIOSurfaceCopybackInnerCache: number;

declare const kIOSurfaceDefaultCache: number;

declare var kIOSurfaceElementHeight: string;

declare var kIOSurfaceElementWidth: string;

declare var kIOSurfaceHeight: string;

declare const kIOSurfaceInhibitCache: number;

declare const kIOSurfaceMapCacheShift: number;

declare const kIOSurfaceMapCopybackCache: number;

declare const kIOSurfaceMapCopybackInnerCache: number;

declare const kIOSurfaceMapDefaultCache: number;

declare const kIOSurfaceMapInhibitCache: number;

declare const kIOSurfaceMapWriteCombineCache: number;

declare const kIOSurfaceMapWriteThruCache: number;

declare var kIOSurfaceOffset: string;

declare var kIOSurfacePixelFormat: string;

declare var kIOSurfacePixelSizeCastingAllowed: string;

declare var kIOSurfacePlaneBase: string;

declare var kIOSurfacePlaneBitsPerElement: string;

declare var kIOSurfacePlaneBytesPerElement: string;

declare var kIOSurfacePlaneBytesPerRow: string;

declare var kIOSurfacePlaneComponentBitDepths: string;

declare var kIOSurfacePlaneComponentBitOffsets: string;

declare var kIOSurfacePlaneComponentNames: string;

declare var kIOSurfacePlaneComponentRanges: string;

declare var kIOSurfacePlaneComponentTypes: string;

declare var kIOSurfacePlaneElementHeight: string;

declare var kIOSurfacePlaneElementWidth: string;

declare var kIOSurfacePlaneHeight: string;

declare var kIOSurfacePlaneInfo: string;

declare var kIOSurfacePlaneOffset: string;

declare var kIOSurfacePlaneSize: string;

declare var kIOSurfacePlaneWidth: string;

declare var kIOSurfaceSubsampling: string;

declare var kIOSurfaceWidth: string;

declare const kIOSurfaceWriteCombineCache: number;

declare const kIOSurfaceWriteThruCache: number;
