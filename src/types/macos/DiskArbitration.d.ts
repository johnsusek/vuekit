
declare function DAAddCallbackToSession(session: any, callback: NSDictionary<any, any>): number;

declare function DACallbackCreate(allocator: any, address: number, context: number): NSDictionary<any, any>;

declare function DADiskClaim(disk: any, options: number, release: (p1: any, p2: any) => any, releaseContext: any, callback: (p1: any, p2: any, p3: any) => void, callbackContext: any): void;

declare function DADiskCopyDescription(disk: any): NSDictionary<any, any>;

declare function DADiskCopyIOMedia(disk: any): number;

declare function DADiskCopyWholeDisk(disk: any): any;

declare function DADiskCreateFromBSDName(allocator: any, session: any, name: string | any): any;

declare function DADiskCreateFromIOMedia(allocator: any, session: any, media: number): any;

declare function DADiskCreateFromVolumePath(allocator: any, session: any, path: NSURL): any;

declare function DADiskEject(disk: any, options: number, callback: (p1: any, p2: any, p3: any) => void, context: any): void;

declare function DADiskGetBSDName(disk: any): string;

declare function DADiskGetOptions(disk: any): number;

declare function DADiskGetTypeID(): number;

declare function DADiskIsClaimed(disk: any): boolean;

declare function DADiskMount(disk: any, path: NSURL, options: number, callback: (p1: any, p2: any, p3: any) => void, context: any): void;

declare function DADiskMountWithArguments(disk: any, path: NSURL, options: number, callback: (p1: any, p2: any, p3: any) => void, context: any, arguments_: string): void;

declare function DADiskRename(disk: any, name: string, options: number, callback: (p1: any, p2: any, p3: any) => void, context: any): void;

declare function DADiskSetOptions(disk: any, options: number, value: boolean): number;

declare function DADiskUnclaim(disk: any): void;

declare function DADiskUnmount(disk: any, options: number, callback: (p1: any, p2: any, p3: any) => void, context: any): void;

declare function DADissenterCreate(allocator: any, status: number, string: string): any;

declare function DADissenterGetStatus(dissenter: any): number;

declare function DADissenterGetStatusString(dissenter: any): string;

declare function DAGetCallbackFromSession(session: any, index: number): NSDictionary<any, any>;

declare function DARegisterDiskAppearedCallback(session: any, match: NSDictionary<any, any>, callback: (p1: any, p2: any) => void, context: any): void;

declare function DARegisterDiskDescriptionChangedCallback(session: any, match: NSDictionary<any, any>, watch: NSArray<any> | any[], callback: (p1: any, p2: NSArray<any>, p3: any) => void, context: any): void;

declare function DARegisterDiskDisappearedCallback(session: any, match: NSDictionary<any, any>, callback: (p1: any, p2: any) => void, context: any): void;

declare function DARegisterDiskEjectApprovalCallback(session: any, match: NSDictionary<any, any>, callback: (p1: any, p2: any) => any, context: any): void;

declare function DARegisterDiskMountApprovalCallback(session: any, match: NSDictionary<any, any>, callback: (p1: any, p2: any) => any, context: any): void;

declare function DARegisterDiskPeekCallback(session: any, match: NSDictionary<any, any>, order: number, callback: (p1: any, p2: any) => void, context: any): void;

declare function DARegisterDiskUnmountApprovalCallback(session: any, match: NSDictionary<any, any>, callback: (p1: any, p2: any) => any, context: any): void;

declare function DARemoveCallbackFromSession(session: any, address: number, context: number): number;

declare function DARemoveCallbackFromSessionWithKey(session: any, index: number): void;

declare function DASessionCreate(allocator: any): any;

declare function DASessionGetTypeID(): number;

declare function DASessionScheduleWithRunLoop(session: any, runLoop: any, runLoopMode: string): void;

declare function DASessionSetDispatchQueue(session: any, queue: NSObject): void;

declare function DASessionUnscheduleFromRunLoop(session: any, runLoop: any, runLoopMode: string): void;

declare function DAUnregisterCallback(session: any, callback: any, context: any): void;

declare const kDADiskClaimOptionDefault: number;

declare var kDADiskDescriptionBusNameKey: string;

declare var kDADiskDescriptionBusPathKey: string;

declare var kDADiskDescriptionDeviceGUIDKey: string;

declare var kDADiskDescriptionDeviceInternalKey: string;

declare var kDADiskDescriptionDeviceModelKey: string;

declare var kDADiskDescriptionDevicePathKey: string;

declare var kDADiskDescriptionDeviceProtocolKey: string;

declare var kDADiskDescriptionDeviceRevisionKey: string;

declare var kDADiskDescriptionDeviceTDMLockedKey: string;

declare var kDADiskDescriptionDeviceUnitKey: string;

declare var kDADiskDescriptionDeviceVendorKey: string;

declare var kDADiskDescriptionMatchMediaUnformatted: NSDictionary<any, any>;

declare var kDADiskDescriptionMatchMediaWhole: NSDictionary<any, any>;

declare var kDADiskDescriptionMatchVolumeMountable: NSDictionary<any, any>;

declare var kDADiskDescriptionMatchVolumeUnrecognized: NSDictionary<any, any>;

declare var kDADiskDescriptionMediaBSDMajorKey: string;

declare var kDADiskDescriptionMediaBSDMinorKey: string;

declare var kDADiskDescriptionMediaBSDNameKey: string;

declare var kDADiskDescriptionMediaBSDUnitKey: string;

declare var kDADiskDescriptionMediaBlockSizeKey: string;

declare var kDADiskDescriptionMediaContentKey: string;

declare var kDADiskDescriptionMediaEjectableKey: string;

declare var kDADiskDescriptionMediaEncryptedKey: string;

declare var kDADiskDescriptionMediaEncryptionDetailKey: string;

declare var kDADiskDescriptionMediaIconKey: string;

declare var kDADiskDescriptionMediaKindKey: string;

declare var kDADiskDescriptionMediaLeafKey: string;

declare var kDADiskDescriptionMediaNameKey: string;

declare var kDADiskDescriptionMediaPathKey: string;

declare var kDADiskDescriptionMediaRemovableKey: string;

declare var kDADiskDescriptionMediaSizeKey: string;

declare var kDADiskDescriptionMediaTypeKey: string;

declare var kDADiskDescriptionMediaUUIDKey: string;

declare var kDADiskDescriptionMediaWholeKey: string;

declare var kDADiskDescriptionMediaWritableKey: string;

declare var kDADiskDescriptionVolumeKindKey: string;

declare var kDADiskDescriptionVolumeMountableKey: string;

declare var kDADiskDescriptionVolumeNameKey: string;

declare var kDADiskDescriptionVolumeNetworkKey: string;

declare var kDADiskDescriptionVolumePathKey: string;

declare var kDADiskDescriptionVolumeTypeKey: string;

declare var kDADiskDescriptionVolumeUUIDKey: string;

declare var kDADiskDescriptionWatchVolumeName: NSArray<any>;

declare var kDADiskDescriptionWatchVolumePath: NSArray<any>;

declare const kDADiskEjectOptionDefault: number;

declare const kDADiskMountOptionDefault: number;

declare const kDADiskMountOptionWhole: number;

declare const kDADiskOptionDefault: number;

declare const kDADiskRenameOptionDefault: number;

declare const kDADiskUnmountOptionDefault: number;

declare const kDADiskUnmountOptionForce: number;

declare const kDADiskUnmountOptionWhole: number;

declare const kDAReturnBadArgument: number;

declare const kDAReturnBusy: number;

declare const kDAReturnError: number;

declare const kDAReturnExclusiveAccess: number;

declare const kDAReturnNoResources: number;

declare const kDAReturnNotFound: number;

declare const kDAReturnNotMounted: number;

declare const kDAReturnNotPermitted: number;

declare const kDAReturnNotPrivileged: number;

declare const kDAReturnNotReady: number;

declare const kDAReturnNotWritable: number;

declare const kDAReturnSuccess: number;

declare const kDAReturnUnsupported: number;
