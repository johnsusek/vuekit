globalThis.LSAcceptanceFlags = globalThis.LSAcceptanceFlags || {};

globalThis.LSAcceptanceFlags = {
    kLSAcceptDefault: 1,
    kLSAcceptAllowLoginUI: 2,
    '1': 'kLSAcceptDefault',
    '2': 'kLSAcceptAllowLoginUI'
}

globalThis.LSHandlerOptions = globalThis.LSHandlerOptions || {};

globalThis.LSHandlerOptions = {
    kLSHandlerOptionsDefault: 0,
    kLSHandlerOptionsIgnoreCreator: 1,
    '0': 'kLSHandlerOptionsDefault',
    '1': 'kLSHandlerOptionsIgnoreCreator'
}

globalThis.LSItemInfoFlags = globalThis.LSItemInfoFlags || {};

globalThis.LSItemInfoFlags = {
    kLSItemInfoIsPlainFile: 1,
    kLSItemInfoIsPackage: 2,
    kLSItemInfoIsApplication: 4,
    kLSItemInfoIsContainer: 8,
    kLSItemInfoIsAliasFile: 16,
    kLSItemInfoIsSymlink: 32,
    kLSItemInfoIsInvisible: 64,
    kLSItemInfoIsNativeApp: 128,
    kLSItemInfoIsClassicApp: 256,
    kLSItemInfoAppPrefersNative: 512,
    kLSItemInfoAppPrefersClassic: 1024,
    kLSItemInfoAppIsScriptable: 2048,
    kLSItemInfoIsVolume: 4096,
    kLSItemInfoExtensionIsHidden: 1048576,
    '1': 'kLSItemInfoIsPlainFile',
    '2': 'kLSItemInfoIsPackage',
    '4': 'kLSItemInfoIsApplication',
    '8': 'kLSItemInfoIsContainer',
    '16': 'kLSItemInfoIsAliasFile',
    '32': 'kLSItemInfoIsSymlink',
    '64': 'kLSItemInfoIsInvisible',
    '128': 'kLSItemInfoIsNativeApp',
    '256': 'kLSItemInfoIsClassicApp',
    '512': 'kLSItemInfoAppPrefersNative',
    '1024': 'kLSItemInfoAppPrefersClassic',
    '2048': 'kLSItemInfoAppIsScriptable',
    '4096': 'kLSItemInfoIsVolume',
    '1048576': 'kLSItemInfoExtensionIsHidden'
}

globalThis.LSLaunchFlags = globalThis.LSLaunchFlags || {};

globalThis.LSLaunchFlags = {
    kLSLaunchDefaults: 1,
    kLSLaunchAndPrint: 2,
    kLSLaunchAndDisplayErrors: 64,
    kLSLaunchDontAddToRecents: 256,
    kLSLaunchDontSwitch: 512,
    kLSLaunchAsync: 65536,
    kLSLaunchNewInstance: 524288,
    kLSLaunchAndHide: 1048576,
    kLSLaunchAndHideOthers: 2097152,
    '1': 'kLSLaunchDefaults',
    '2': 'kLSLaunchAndPrint',
    '64': 'kLSLaunchAndDisplayErrors',
    '256': 'kLSLaunchDontAddToRecents',
    '512': 'kLSLaunchDontSwitch',
    '65536': 'kLSLaunchAsync',
    '524288': 'kLSLaunchNewInstance',
    '1048576': 'kLSLaunchAndHide',
    '2097152': 'kLSLaunchAndHideOthers'
}

globalThis.LSRequestedInfo = globalThis.LSRequestedInfo || {};

globalThis.LSRequestedInfo = {
    kLSRequestExtension: 1,
    kLSRequestTypeCreator: 2,
    kLSRequestBasicFlagsOnly: 4,
    kLSRequestAppTypeFlags: 8,
    kLSRequestAllFlags: 16,
    kLSRequestIconAndKind: 32,
    kLSRequestExtensionFlagsOnly: 64,
    kLSRequestAllInfo: 4294967295,
    '1': 'kLSRequestExtension',
    '2': 'kLSRequestTypeCreator',
    '4': 'kLSRequestBasicFlagsOnly',
    '8': 'kLSRequestAppTypeFlags',
    '16': 'kLSRequestAllFlags',
    '32': 'kLSRequestIconAndKind',
    '64': 'kLSRequestExtensionFlagsOnly',
    '4294967295': 'kLSRequestAllInfo'
}

globalThis.LSRolesMask = globalThis.LSRolesMask || {};

globalThis.LSRolesMask = {
    kLSRolesNone: 1,
    kLSRolesViewer: 2,
    kLSRolesEditor: 4,
    kLSRolesShell: 8,
    kLSRolesAll: 4294967295,
    '1': 'kLSRolesNone',
    '2': 'kLSRolesViewer',
    '4': 'kLSRolesEditor',
    '8': 'kLSRolesShell',
    '4294967295': 'kLSRolesAll'
}

globalThis.MDLabelDomain = globalThis.MDLabelDomain || {};

globalThis.MDLabelDomain = {
    kMDLabelUserDomain: 0,
    kMDLabelLocalDomain: 1,
    '0': 'kMDLabelUserDomain',
    '1': 'kMDLabelLocalDomain'
}

globalThis.MDQueryOptionFlags = globalThis.MDQueryOptionFlags || {};

globalThis.MDQueryOptionFlags = {
    kMDQuerySynchronous: 1,
    kMDQueryWantsUpdates: 4,
    kMDQueryAllowFSTranslation: 8,
    '1': 'kMDQuerySynchronous',
    '4': 'kMDQueryWantsUpdates',
    '8': 'kMDQueryAllowFSTranslation'
}

globalThis.MDQuerySortOptionFlags = globalThis.MDQuerySortOptionFlags || {};

globalThis.MDQuerySortOptionFlags = {
    kMDQueryReverseSortOrderFlag: 1,
    '1': 'kMDQueryReverseSortOrderFlag'
}

globalThis.SKDocumentIndexState = globalThis.SKDocumentIndexState || {};

globalThis.SKDocumentIndexState = {
    kSKDocumentStateNotIndexed: 0,
    kSKDocumentStateIndexed: 1,
    kSKDocumentStateAddPending: 2,
    kSKDocumentStateDeletePending: 3,
    '0': 'kSKDocumentStateNotIndexed',
    '1': 'kSKDocumentStateIndexed',
    '2': 'kSKDocumentStateAddPending',
    '3': 'kSKDocumentStateDeletePending'
}

globalThis.SKIndexType = globalThis.SKIndexType || {};

globalThis.SKIndexType = {
    kSKIndexUnknown: 0,
    kSKIndexInverted: 1,
    kSKIndexVector: 2,
    kSKIndexInvertedVector: 3,
    '0': 'kSKIndexUnknown',
    '1': 'kSKIndexInverted',
    '2': 'kSKIndexVector',
    '3': 'kSKIndexInvertedVector'
}

globalThis.SKSearchType = globalThis.SKSearchType || {};

globalThis.SKSearchType = {
    kSKSearchRanked: 0,
    kSKSearchBooleanRanked: 1,
    kSKSearchRequiredRanked: 2,
    kSKSearchPrefixRanked: 3,
    '0': 'kSKSearchRanked',
    '1': 'kSKSearchBooleanRanked',
    '2': 'kSKSearchRequiredRanked',
    '3': 'kSKSearchPrefixRanked'
}

globalThis.WSTypeID = globalThis.WSTypeID || {};

globalThis.WSTypeID = {
    eWSUnknownType: 0,
    eWSNullType: 1,
    eWSBooleanType: 2,
    eWSIntegerType: 3,
    eWSDoubleType: 4,
    eWSStringType: 5,
    eWSDateType: 6,
    eWSDataType: 7,
    eWSArrayType: 8,
    eWSDictionaryType: 9,
    '0': 'eWSUnknownType',
    '1': 'eWSNullType',
    '2': 'eWSBooleanType',
    '3': 'eWSIntegerType',
    '4': 'eWSDoubleType',
    '5': 'eWSStringType',
    '6': 'eWSDateType',
    '7': 'eWSDataType',
    '8': 'eWSArrayType',
    '9': 'eWSDictionaryType'
}


declare const AAPNotCreatedErr: number;

declare const AAPNotFoundErr: number;

declare const ACE2Type: number;

declare const ACE8Type: number;
interface AEBuildError {
  fError: number;
  fErrorPos: number;
}

declare var AEBuildError: AEBuildError;

declare function AECallObjectAccessor(desiredClass: number, containerToken: AEDesc, containerClass: number, keyForm: number, keyData: AEDesc, token: AEDesc): number;
declare function AECheckIsRecord(theDesc: AEDesc): boolean;
declare function AECoerceDesc(theAEDesc: AEDesc, toType: number, result: AEDesc): number;
declare function AECoercePtr(typeCode: number, dataPtr: any, dataSize: number, toType: number, result: AEDesc): number;
declare function AECompareDesc(desc1: AEDesc, desc2: AEDesc, resultP: string | any): number;
declare function AECountItems(theAEDescList: AEDesc, theCount: number): number;
declare function AECreateAppleEvent(theAEEventClass: number, theAEEventID: number, target: AEDesc, returnID: number, transactionID: number, result: AEDesc): number;
declare function AECreateDesc(typeCode: number, dataPtr: any, dataSize: number, result: AEDesc): number;
declare function AECreateDescFromExternalPtr(descriptorType: number, dataPtr: any, dataLength: number, disposeCallback: (p1: any, p2: number, p3: any) => void, disposeRefcon: any, theDesc: AEDesc): number;
declare function AECreateList(factoringPtr: any, factoredSize: number, isRecord: boolean, resultList: AEDesc): number;
declare function AECreateRemoteProcessResolver(allocator: any, url: NSObject): any;
declare function AEDecodeMessage(header: mach_msg_header_t, event: AEDesc, reply: AEDesc): number;
declare function AEDeleteItem(theAEDescList: AEDesc, index: number): number;
declare function AEDeleteParam(theAppleEvent: AEDesc, theAEKeyword: number): number;
interface AEDesc {
  descriptorType: number;
  dataHandle: any;
}

declare var AEDesc: AEDesc;

declare function AEDeterminePermissionToAutomateTarget(target: AEDesc, theAEEventClass: number, theAEEventID: number, askUserIfNeeded: boolean): number;
declare function AEDisposeDesc(theAEDesc: AEDesc): number;
declare function AEDisposeRemoteProcessResolver(ref: any): void;
declare function AEDisposeToken(theToken: AEDesc): number;
declare function AEDuplicateDesc(theAEDesc: AEDesc, result: AEDesc): number;
declare function AEFlattenDesc(theAEDesc: AEDesc, buffer: string | any, bufferSize: number, actualSize: number): number;
declare function AEGetAttributeDesc(theAppleEvent: AEDesc, theAEKeyword: number, desiredType: number, result: AEDesc): number;
declare function AEGetAttributePtr(theAppleEvent: AEDesc, theAEKeyword: number, desiredType: number, typeCode: number, dataPtr: any, maximumSize: number, actualSize: number): number;
declare function AEGetCoercionHandler(fromType: number, toType: number, handler: (p1: AEDesc, p2: number, p3: any, p4: AEDesc) => number, handlerRefcon: any, fromTypeIsDesc: string | any, isSysHandler: boolean): number;
declare function AEGetDescData(theAEDesc: AEDesc, dataPtr: any, maximumSize: number): number;
declare function AEGetDescDataRange(dataDesc: AEDesc, buffer: any, offset: number, length: number): number;
declare function AEGetDescDataSize(theAEDesc: AEDesc): number;
declare function AEGetEventHandler(theAEEventClass: number, theAEEventID: number, handler: (p1: AEDesc, p2: AEDesc, p3: any) => number, handlerRefcon: any, isSysHandler: boolean): number;
declare function AEGetNthDesc(theAEDescList: AEDesc, index: number, desiredType: number, theAEKeyword: number, result: AEDesc): number;
declare function AEGetNthPtr(theAEDescList: AEDesc, index: number, desiredType: number, theAEKeyword: number, typeCode: number, dataPtr: any, maximumSize: number, actualSize: number): number;
declare function AEGetObjectAccessor(desiredClass: number, containerType: number, accessor: (p1: number, p2: AEDesc, p3: number, p4: number, p5: AEDesc, p6: AEDesc, p7: any) => number, accessorRefcon: any, isSysHandler: boolean): number;
declare function AEGetParamDesc(theAppleEvent: AEDesc, theAEKeyword: number, desiredType: number, result: AEDesc): number;
declare function AEGetParamPtr(theAppleEvent: AEDesc, theAEKeyword: number, desiredType: number, actualType: number, dataPtr: any, maximumSize: number, actualSize: number): number;
declare function AEGetRegisteredMachPort(): number;
declare function AEGetSpecialHandler(functionClass: number, handler: (p1: AEDesc, p2: AEDesc, p3: any) => number, isSysHandler: boolean): number;
declare function AEInitializeDesc(desc: AEDesc): void;
declare function AEInstallCoercionHandler(fromType: number, toType: number, handler: (p1: AEDesc, p2: number, p3: any, p4: AEDesc) => number, handlerRefcon: any, fromTypeIsDesc: boolean, isSysHandler: boolean): number;
declare function AEInstallEventHandler(theAEEventClass: number, theAEEventID: number, handler: (p1: AEDesc, p2: AEDesc, p3: any) => number, handlerRefcon: any, isSysHandler: boolean): number;
declare function AEInstallObjectAccessor(desiredClass: number, containerType: number, theAccessor: (p1: number, p2: AEDesc, p3: number, p4: number, p5: AEDesc, p6: AEDesc, p7: any) => number, accessorRefcon: any, isSysHandler: boolean): number;
declare function AEInstallSpecialHandler(functionClass: number, handler: (p1: AEDesc, p2: AEDesc, p3: any) => number, isSysHandler: boolean): number;
interface AEKeyDesc {
  descKey: number;
  descContent: AEDesc;
}

declare var AEKeyDesc: AEKeyDesc;

declare function AEManagerInfo(keyWord: number, result: number): number;
declare function AEObjectInit(): number;
declare function AEPrintDescToHandle(desc: AEDesc, result: string): number;
declare function AEProcessMessage(header: mach_msg_header_t): number;
declare function AEPutAttributeDesc(theAppleEvent: AEDesc, theAEKeyword: number, theAEDesc: AEDesc): number;
declare function AEPutAttributePtr(theAppleEvent: AEDesc, theAEKeyword: number, typeCode: number, dataPtr: any, dataSize: number): number;
declare function AEPutDesc(theAEDescList: AEDesc, index: number, theAEDesc: AEDesc): number;
declare function AEPutParamDesc(theAppleEvent: AEDesc, theAEKeyword: number, theAEDesc: AEDesc): number;
declare function AEPutParamPtr(theAppleEvent: AEDesc, theAEKeyword: number, typeCode: number, dataPtr: any, dataSize: number): number;
declare function AEPutPtr(theAEDescList: AEDesc, index: number, typeCode: number, dataPtr: any, dataSize: number): number;
interface AERemoteProcessResolverContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => NSObject;
}

declare var AERemoteProcessResolverContext: AERemoteProcessResolverContext;

declare function AERemoteProcessResolverGetProcesses(ref: any, outError: CFStreamError): NSObject;
declare function AERemoteProcessResolverScheduleWithRunLoop(ref: any, runLoop: any, runLoopMode: NSObject, callback: (p1: any, p2: any) => void, ctx: AERemoteProcessResolverContext): void;
declare function AERemoveCoercionHandler(fromType: number, toType: number, handler: (p1: AEDesc, p2: number, p3: any, p4: AEDesc) => number, isSysHandler: boolean): number;
declare function AERemoveEventHandler(theAEEventClass: number, theAEEventID: number, handler: (p1: AEDesc, p2: AEDesc, p3: any) => number, isSysHandler: boolean): number;
declare function AERemoveObjectAccessor(desiredClass: number, containerType: number, theAccessor: (p1: number, p2: AEDesc, p3: number, p4: number, p5: AEDesc, p6: AEDesc, p7: any) => number, isSysHandler: boolean): number;
declare function AERemoveSpecialHandler(functionClass: number, handler: (p1: AEDesc, p2: AEDesc, p3: any) => number, isSysHandler: boolean): number;
declare function AEReplaceDescData(typeCode: number, dataPtr: any, dataSize: number, theAEDesc: AEDesc): number;
declare function AEResolve(objectSpecifier: AEDesc, callbackFlags: number, theToken: AEDesc): number;
declare function AESendMessage(event: AEDesc, reply: AEDesc, sendMode: number, timeOutInTicks: number): number;
declare function AESetObjectCallbacks(myCompareProc: (p1: number, p2: AEDesc, p3: AEDesc, p4: string) => number, myCountProc: (p1: number, p2: number, p3: AEDesc, p4: number) => number, myDisposeTokenProc: (p1: AEDesc) => number, myGetMarkTokenProc: (p1: AEDesc, p2: number, p3: AEDesc) => number, myMarkProc: (p1: AEDesc, p2: AEDesc, p3: number) => number, myAdjustMarksProc: (p1: number, p2: number, p3: AEDesc) => number, myGetErrDescProcPtr: (p1: AEDesc) => number): number;
declare function AESizeOfAttribute(theAppleEvent: AEDesc, theAEKeyword: number, typeCode: number, dataSize: number): number;
declare function AESizeOfFlattenedDesc(theAEDesc: AEDesc): number;
declare function AESizeOfNthItem(theAEDescList: AEDesc, index: number, typeCode: number, dataSize: number): number;
declare function AESizeOfParam(theAppleEvent: AEDesc, theAEKeyword: number, typeCode: number, dataSize: number): number;
declare function AEStreamClose(ref: any, desc: AEDesc): number;
declare function AEStreamCloseDesc(ref: any): number;
declare function AEStreamCloseList(ref: any): number;
declare function AEStreamCloseRecord(ref: any): number;
declare function AEStreamCreateEvent(clazz: number, id: number, targetType: number, targetData: any, targetLength: number, returnID: number, transactionID: number): any;
declare function AEStreamOpen(): any;
declare function AEStreamOpenDesc(ref: any, newType: number): number;
declare function AEStreamOpenEvent(event: AEDesc): any;
declare function AEStreamOpenKeyDesc(ref: any, key: number, newType: number): number;
declare function AEStreamOpenList(ref: any): number;
declare function AEStreamOpenRecord(ref: any, newType: number): number;
declare function AEStreamOptionalParam(ref: any, key: number): number;
declare function AEStreamSetRecordType(ref: any, newType: number): number;
declare function AEStreamWriteAEDesc(ref: any, desc: AEDesc): number;
declare function AEStreamWriteData(ref: any, data: any, length: number): number;
declare function AEStreamWriteDesc(ref: any, newType: number, data: any, length: number): number;
declare function AEStreamWriteKey(ref: any, key: number): number;
declare function AEStreamWriteKeyDesc(ref: any, key: number, newType: number, data: any, length: number): number;
declare function AEUnflattenDesc(buffer: any, result: AEDesc): number;
interface AFPAlternateAddress {
  fVersion: number;
  fAddressCount: number;
  fAddressList: number;
}

declare var AFPAlternateAddress: AFPAlternateAddress;

interface AFPTagData {
  fLength: number;
  fType: number;
  fData: number;
}

declare var AFPTagData: AFPTagData;

interface AFPVolMountInfo {
  length: number;
  media: number;
  flags: number;
  nbpInterval: number;
  nbpCount: number;
  uamType: number;
  zoneNameOffset: number;
  serverNameOffset: number;
  volNameOffset: number;
  userNameOffset: number;
  userPasswordOffset: number;
  volPasswordOffset: number;
  AFPData: number;
}

declare var AFPVolMountInfo: AFPVolMountInfo;

interface AFPXVolMountInfo {
  length: number;
  media: number;
  flags: number;
  nbpInterval: number;
  nbpCount: number;
  uamType: number;
  zoneNameOffset: number;
  serverNameOffset: number;
  volNameOffset: number;
  userNameOffset: number;
  userPasswordOffset: number;
  volPasswordOffset: number;
  extendedFlags: number;
  uamNameOffset: number;
  alternateAddressOffset: number;
  AFPData: number;
}

declare var AFPXVolMountInfo: AFPXVolMountInfo;


declare const AIFCID: number;

declare const AIFCVersion1: number;

declare const AIFFID: number;
interface AIFFLoop {
  playMode: number;
  beginLoop: number;
  endLoop: number;
}

declare var AIFFLoop: AIFFLoop;


declare const ASDBadForkErr: number;

declare const ASDBadHeaderErr: number;

declare const ASDEntryNotFoundErr: number;
interface AVLTreeStruct {
  signature: number;
  privateStuff: number;
}

declare var AVLTreeStruct: AVLTreeStruct;

interface AliasRecord {
  hidden: number;
}

declare var AliasRecord: AliasRecord;


declare const AnnotationID: number;

declare const AppleShareMediaType: number;
interface ApplicationSpecificChunk {
  ckID: number;
  ckSize: number;
  applicationSignature: number;
  data: number;
}

declare var ApplicationSpecificChunk: ApplicationSpecificChunk;


declare const ApplicationSpecificID: number;
interface AudioRecordingChunk {
  ckID: number;
  ckSize: number;
  AESChannelStatus: number;
}

declare var AudioRecordingChunk: AudioRecordingChunk;


declare const AudioRecordingID: number;

declare const AuthorID: number;
interface BigEndianFixed {
  bigEndianValue: number;
}

declare var BigEndianFixed: BigEndianFixed;

interface BigEndianLong {
  bigEndianValue: number;
}

declare var BigEndianLong: BigEndianLong;

interface BigEndianOSType {
  bigEndianValue: number;
}

declare var BigEndianOSType: BigEndianOSType;

interface BigEndianShort {
  bigEndianValue: number;
}

declare var BigEndianShort: BigEndianShort;

interface BigEndianUInt32 {
  bigEndianValue: number;
}

declare var BigEndianUInt32: BigEndianUInt32;

interface BigEndianUnsignedFixed {
  bigEndianValue: number;
}

declare var BigEndianUnsignedFixed: BigEndianUnsignedFixed;

interface BigEndianUnsignedLong {
  bigEndianValue: number;
}

declare var BigEndianUnsignedLong: BigEndianUnsignedLong;

interface BigEndianUnsignedShort {
  bigEndianValue: number;
}

declare var BigEndianUnsignedShort: BigEndianUnsignedShort;


declare const CDEFNFnd: number;
declare function CSBackupIsItemExcluded(item: NSObject, excludeByPath: string | any): boolean;
declare function CSBackupSetItemExcluded(item: NSObject, exclude: boolean, excludeByPath: boolean): number;
declare function CSDiskSpaceCancelRecovery(operationUUID: any): void;
declare function CSDiskSpaceGetRecoveryEstimate(volumeURL: NSObject): number;
declare function CSDiskSpaceStartRecovery(volumeURL: NSObject, bytesNeeded: number, options: number, outOperationUUID: any, callbackQueue: NSObject, callback: (p1: boolean, p2: number, p3: NSObject) => void): void;
declare function CSGetDefaultIdentityAuthority(): any;
declare function CSGetLocalIdentityAuthority(): any;
declare function CSGetManagedIdentityAuthority(): any;
declare function CSIdentityAddAlias(identity: any, alias: NSObject): void;
declare function CSIdentityAddMember(group: any, member: any): void;
declare function CSIdentityAuthenticateUsingPassword(user: any, password: NSObject): boolean;
declare function CSIdentityAuthorityCopyLocalizedName(authority: any): NSObject;
declare function CSIdentityAuthorityGetTypeID(): number;
interface CSIdentityClientContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => NSObject;
  statusUpdated: (p1: any, p2: number, p3: NSObject, p4: any) => void;
}

declare var CSIdentityClientContext: CSIdentityClientContext;

declare function CSIdentityCommit(identity: any, authorization: any, error: NSObject): boolean;
declare function CSIdentityCommitAsynchronously(identity: any, clientContext: CSIdentityClientContext, runLoop: any, runLoopMode: NSObject, authorization: any): boolean;
declare function CSIdentityCreate(allocator: any, identityClass: number, fullName: NSObject, posixName: NSObject, flags: number, authority: any): any;
declare function CSIdentityCreateCopy(allocator: any, identity: any): any;
declare function CSIdentityCreateGroupMembershipQuery(allocator: any, group: any): any;
declare function CSIdentityCreatePersistentReference(allocator: any, identity: any): NSObject;
declare function CSIdentityDelete(identity: any): void;
declare function CSIdentityGetAliases(identity: any): NSObject;
declare function CSIdentityGetAuthority(identity: any): any;
declare function CSIdentityGetCertificate(user: any): any;
declare function CSIdentityGetClass(identity: any): number;
declare function CSIdentityGetEmailAddress(identity: any): NSObject;
declare function CSIdentityGetFullName(identity: any): NSObject;
declare function CSIdentityGetImageData(identity: any): NSObject;
declare function CSIdentityGetImageDataType(identity: any): NSObject;
declare function CSIdentityGetImageURL(identity: any): NSObject;
declare function CSIdentityGetPosixID(identity: any): number;
declare function CSIdentityGetPosixName(identity: any): NSObject;
declare function CSIdentityGetTypeID(): number;
declare function CSIdentityGetUUID(identity: any): any;
declare function CSIdentityIsCommitting(identity: any): boolean;
declare function CSIdentityIsEnabled(user: any): boolean;
declare function CSIdentityIsHidden(identity: any): boolean;
declare function CSIdentityIsMemberOfGroup(identity: any, group: any): boolean;
interface CSIdentityQueryClientContext {
  version: number;
  info: any;
  retainInfo: (p1: any) => any;
  releaseInfo: (p1: any) => void;
  copyInfoDescription: (p1: any) => NSObject;
  receiveEvent: (p1: any, p2: number, p3: NSObject, p4: NSObject, p5: any) => void;
}

declare var CSIdentityQueryClientContext: CSIdentityQueryClientContext;

declare function CSIdentityQueryCopyResults(query: any): NSObject;
declare function CSIdentityQueryCreate(allocator: any, identityClass: number, authority: any): any;
declare function CSIdentityQueryCreateForCurrentUser(allocator: any): any;
declare function CSIdentityQueryCreateForName(allocator: any, name: NSObject, comparisonMethod: number, identityClass: number, authority: any): any;
declare function CSIdentityQueryCreateForPersistentReference(allocator: any, referenceData: NSObject): any;
declare function CSIdentityQueryCreateForPosixID(allocator: any, posixID: number, identityClass: number, authority: any): any;
declare function CSIdentityQueryCreateForUUID(allocator: any, uuid: any, authority: any): any;
declare function CSIdentityQueryExecute(query: any, flags: number, error: NSObject): boolean;
declare function CSIdentityQueryExecuteAsynchronously(query: any, flags: number, clientContext: CSIdentityQueryClientContext, runLoop: any, runLoopMode: NSObject): boolean;
declare function CSIdentityQueryGetTypeID(): number;
declare function CSIdentityQueryStop(query: any): void;
declare function CSIdentityRemoveAlias(identity: any, alias: NSObject): void;
declare function CSIdentityRemoveClient(identity: any): void;
declare function CSIdentityRemoveMember(group: any, member: any): void;
declare function CSIdentitySetCertificate(user: any, certificate: any): void;
declare function CSIdentitySetEmailAddress(identity: any, emailAddress: NSObject): void;
declare function CSIdentitySetFullName(identity: any, fullName: NSObject): void;
declare function CSIdentitySetImageData(identity: any, imageData: NSObject, imageDataType: NSObject): void;
declare function CSIdentitySetImageURL(identity: any, url: NSObject): void;
declare function CSIdentitySetIsEnabled(user: any, isEnabled: boolean): void;
declare function CSIdentitySetPassword(user: any, password: NSObject): void;

declare const CantDecompress: number;
interface CatPositionRec {
  initialize: number;
  priv: number;
}

declare var CatPositionRec: CatPositionRec;

declare function ChangeTextToUnicodeInfo(ioTextToUnicodeInfo: any, iUnicodeMapping: UnicodeMapping): number;
declare function ChangeUnicodeToTextInfo(ioUnicodeToTextInfo: any, iUnicodeMapping: UnicodeMapping): number;
interface ChunkHeader {
  ckID: number;
  ckSize: number;
}

declare var ChunkHeader: ChunkHeader;

interface Comment {
  timeStamp: number;
  marker: number;
  count: number;
  text: number;
}

declare var Comment: Comment;


declare const CommentID: number;
interface CommentsChunk {
  ckID: number;
  ckSize: number;
  numComments: number;
  comments: Comment;
}

declare var CommentsChunk: CommentsChunk;

interface CommonChunk {
  ckID: number;
  ckSize: number;
  numChannels: number;
  numSampleFrames: number;
  sampleSize: number;
  sampleRate: Float80;
}

declare var CommonChunk: CommonChunk;


declare const CommonID: number;
interface ComponentAliasResource {
  cr: ComponentResource;
  aliasCD: ComponentDescription;
}

declare var ComponentAliasResource: ComponentAliasResource;

interface ComponentDescription {
  componentType: number;
  componentSubType: number;
  componentManufacturer: number;
  componentFlags: number;
  componentFlagsMask: number;
}

declare var ComponentDescription: ComponentDescription;

interface ComponentInstanceRecord {
  data: number;
}

declare var ComponentInstanceRecord: ComponentInstanceRecord;

interface ComponentMPWorkFunctionHeaderRecord {
  headerSize: number;
  recordSize: number;
  workFlags: number;
  processorCount: number;
  unused: number;
  isRunning: number;
}

declare var ComponentMPWorkFunctionHeaderRecord: ComponentMPWorkFunctionHeaderRecord;

interface ComponentParameters {
  flags: number;
  paramSize: number;
  what: number;
  padding: number;
  params: number;
}

declare var ComponentParameters: ComponentParameters;

interface ComponentPlatformInfo {
  componentFlags: number;
  component: ResourceSpec;
  platformType: number;
}

declare var ComponentPlatformInfo: ComponentPlatformInfo;

interface ComponentPlatformInfoArray {
  count: number;
  platformArray: ComponentPlatformInfo;
}

declare var ComponentPlatformInfoArray: ComponentPlatformInfoArray;

interface ComponentRecord {
  data: number;
}

declare var ComponentRecord: ComponentRecord;

interface ComponentResource {
  cd: ComponentDescription;
  component: ResourceSpec;
  componentName: ResourceSpec;
  componentInfo: ResourceSpec;
  componentIcon: ResourceSpec;
}

declare var ComponentResource: ComponentResource;

interface ComponentResourceExtension {
  componentVersion: number;
  componentRegisterFlags: number;
  componentIconFamily: number;
}

declare var ComponentResourceExtension: ComponentResourceExtension;

interface ContainerChunk {
  ckID: number;
  ckSize: number;
  formType: number;
}

declare var ContainerChunk: ContainerChunk;

declare function ConvertFromPStringToUnicode(iTextToUnicodeInfo: any, iPascalStr: string | any, iOutputBufLen: number, oUnicodeLen: number, oUnicodeStr: number): number;
declare function ConvertFromTextToUnicode(iTextToUnicodeInfo: any, iSourceLen: number, iSourceStr: any, iControlFlags: number, iOffsetCount: number, iOffsetArray: number, oOffsetCount: number, oOffsetArray: number, iOutputBufLen: number, oSourceRead: number, oUnicodeLen: number, oUnicodeStr: number): number;
declare function ConvertFromUnicodeToPString(iUnicodeToTextInfo: any, iUnicodeLen: number, iUnicodeStr: number, oPascalStr: number): number;
declare function ConvertFromUnicodeToScriptCodeRun(iUnicodeToTextInfo: any, iUnicodeLen: number, iUnicodeStr: number, iControlFlags: number, iOffsetCount: number, iOffsetArray: number, oOffsetCount: number, oOffsetArray: number, iOutputBufLen: number, oInputRead: number, oOutputLen: number, oOutputStr: any, iScriptRunBufLen: number, oScriptRunOutLen: number, oScriptCodeRuns: ScriptCodeRun): number;
declare function ConvertFromUnicodeToText(iUnicodeToTextInfo: any, iUnicodeLen: number, iUnicodeStr: number, iControlFlags: number, iOffsetCount: number, iOffsetArray: number, oOffsetCount: number, oOffsetArray: number, iOutputBufLen: number, oInputRead: number, oOutputLen: number, oOutputStr: any): number;
declare function ConvertFromUnicodeToTextRun(iUnicodeToTextInfo: any, iUnicodeLen: number, iUnicodeStr: number, iControlFlags: number, iOffsetCount: number, iOffsetArray: number, oOffsetCount: number, oOffsetArray: number, iOutputBufLen: number, oInputRead: number, oOutputLen: number, oOutputStr: any, iEncodingRunBufLen: number, oEncodingRunOutLen: number, oEncodingRuns: TextEncodingRun): number;

declare const CopyrightID: number;
declare function CountUnicodeMappings(iFilter: number, iFindMapping: UnicodeMapping, oActualCount: number): number;
declare function CreateCompDescriptor(comparisonOperator: number, operand1: AEDesc, operand2: AEDesc, disposeInputs: boolean, theDescriptor: AEDesc): number;
declare function CreateLogicalDescriptor(theLogicalTerms: AEDesc, theLogicOperator: number, disposeInputs: boolean, theDescriptor: AEDesc): number;
declare function CreateObjSpecifier(desiredClass: number, theContainer: AEDesc, keyForm: number, keyData: AEDesc, disposeInputs: boolean, objSpecifier: AEDesc): number;
declare function CreateOffsetDescriptor(theOffset: number, theDescriptor: AEDesc): number;
declare function CreateRangeDescriptor(rangeStart: AEDesc, rangeStop: AEDesc, disposeInputs: boolean, theDescriptor: AEDesc): number;
declare function CreateTextEncoding(encodingBase: number, encodingVariant: number, encodingFormat: number): number;
declare function CreateTextToUnicodeInfo(iUnicodeMapping: UnicodeMapping, oTextToUnicodeInfo: any): number;
declare function CreateTextToUnicodeInfoByEncoding(iEncoding: number, oTextToUnicodeInfo: any): number;
declare function CreateUnicodeToTextInfo(iUnicodeMapping: UnicodeMapping, oUnicodeToTextInfo: any): number;
declare function CreateUnicodeToTextInfoByEncoding(iEncoding: number, oUnicodeToTextInfo: any): number;
declare function CreateUnicodeToTextRunInfo(iNumberOfMappings: number, iUnicodeMappings: UnicodeMapping, oUnicodeToTextInfo: any): number;
declare function CreateUnicodeToTextRunInfoByEncoding(iNumberOfEncodings: number, iEncodings: number, oUnicodeToTextInfo: any): number;
declare function CreateUnicodeToTextRunInfoByScriptCode(iNumberOfScriptCodes: number, iScripts: number, oUnicodeToTextInfo: any): number;
interface CustomBadgeResource {
  version: number;
  customBadgeResourceID: number;
  customBadgeType: number;
  customBadgeCreator: number;
  windowBadgeType: number;
  windowBadgeCreator: number;
  overrideType: number;
  overrideCreator: number;
}

declare var CustomBadgeResource: CustomBadgeResource;

declare function DCSCopyTextDefinition(dictionary: any, textString: NSObject, range: CFRange): NSObject;
declare function DCSGetTermRangeInString(dictionary: any, textString: NSObject, offset: number): CFRange;
interface DInfo {
  frRect: Rect;
  frFlags: number;
  frLocation: Point;
  frView: number;
}

declare var DInfo: DInfo;

interface DXInfo {
  frScroll: Point;
  frOpenChain: number;
  frScript: number;
  frXFlags: number;
  frComment: number;
  frPutAway: number;
}

declare var DXInfo: DXInfo;

interface DateCacheRecord {
  hidden: number;
}

declare var DateCacheRecord: DateCacheRecord;

interface DateTimeRec {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  dayOfWeek: number;
}

declare var DateTimeRec: DateTimeRec;

interface DeferredTask {
  qLink: QElem;
  qType: number;
  dtFlags: number;
  dtAddr: (p1: number) => void;
  dtParam: number;
  dtReserved: number;
}

declare var DeferredTask: DeferredTask;

declare function DisposeAECoerceDescUPP(userUPP: (p1: AEDesc, p2: number, p3: any, p4: AEDesc) => number): void;
declare function DisposeAECoercePtrUPP(userUPP: (p1: number, p2: any, p3: number, p4: number, p5: any, p6: AEDesc) => number): void;
declare function DisposeAEDisposeExternalUPP(userUPP: (p1: any, p2: number, p3: any) => void): void;
declare function DisposeAEEventHandlerUPP(userUPP: (p1: AEDesc, p2: AEDesc, p3: any) => number): void;
declare function DisposeIndexToUCStringUPP(userUPP: (p1: number, p2: any, p3: any, p4: NSObject, p5: number) => boolean): void;
declare function DisposeOSLAccessorUPP(userUPP: (p1: number, p2: AEDesc, p3: number, p4: number, p5: AEDesc, p6: AEDesc, p7: any) => number): void;
declare function DisposeOSLAdjustMarksUPP(userUPP: (p1: number, p2: number, p3: AEDesc) => number): void;
declare function DisposeOSLCompareUPP(userUPP: (p1: number, p2: AEDesc, p3: AEDesc, p4: string) => number): void;
declare function DisposeOSLCountUPP(userUPP: (p1: number, p2: number, p3: AEDesc, p4: number) => number): void;
declare function DisposeOSLDisposeTokenUPP(userUPP: (p1: AEDesc) => number): void;
declare function DisposeOSLGetErrDescUPP(userUPP: (p1: AEDesc) => number): void;
declare function DisposeOSLGetMarkTokenUPP(userUPP: (p1: AEDesc, p2: number, p3: AEDesc) => number): void;
declare function DisposeOSLMarkUPP(userUPP: (p1: AEDesc, p2: AEDesc, p3: number) => number): void;
declare function DisposeTextToUnicodeInfo(ioTextToUnicodeInfo: any): number;
declare function DisposeUnicodeToTextFallbackUPP(userUPP: (p1: number, p2: number, p3: number, p4: string, p5: number, p6: number, p7: any, p8: UnicodeMapping) => number): void;
declare function DisposeUnicodeToTextInfo(ioUnicodeToTextInfo: any): number;
declare function DisposeUnicodeToTextRunInfo(ioUnicodeToTextRunInfo: any): number;

declare const EQUALTO: number;
interface ExtCommonChunk {
  ckID: number;
  ckSize: number;
  numChannels: number;
  numSampleFrames: number;
  sampleSize: number;
  sampleRate: Float80;
  compressionType: number;
  compressionName: number;
}

declare var ExtCommonChunk: ExtCommonChunk;

interface ExtComponentResource {
  cd: ComponentDescription;
  component: ResourceSpec;
  componentName: ResourceSpec;
  componentInfo: ResourceSpec;
  componentIcon: ResourceSpec;
  componentVersion: number;
  componentRegisterFlags: number;
  componentIconFamily: number;
  count: number;
  platformArray: ComponentPlatformInfo;
}

declare var ExtComponentResource: ExtComponentResource;

interface ExtendedFileInfo {
  reserved1: number;
  extendedFinderFlags: number;
  reserved2: number;
  putAwayFolderID: number;
}

declare var ExtendedFileInfo: ExtendedFileInfo;

interface ExtendedFolderInfo {
  scrollPosition: Point;
  reserved1: number;
  extendedFinderFlags: number;
  reserved2: number;
  putAwayFolderID: number;
}

declare var ExtendedFolderInfo: ExtendedFolderInfo;

interface FInfo {
  fdType: number;
  fdCreator: number;
  fdFlags: number;
  fdLocation: Point;
  fdFldr: number;
}

declare var FInfo: FInfo;


declare const FORMID: number;
interface FPUInformationIntel64 {
  Registers: number;
  Control: number;
  Status: number;
  Tag: number;
  Opcode: number;
  IP: number;
  DP: number;
  DS: number;
}

declare var FPUInformationIntel64: FPUInformationIntel64;

interface FPUInformationPowerPC {
  Registers: UnsignedWide;
  FPSCR: number;
  Reserved: number;
}

declare var FPUInformationPowerPC: FPUInformationPowerPC;

interface FSAliasInfo {
  volumeCreateDate: UTCDateTime;
  targetCreateDate: UTCDateTime;
  fileType: number;
  fileCreator: number;
  parentDirID: number;
  nodeID: number;
  filesystemID: number;
  signature: number;
  volumeIsBootVolume: boolean;
  volumeIsAutomounted: boolean;
  volumeIsEjectable: boolean;
  volumeHasPersistentFileIDs: boolean;
  isDirectory: boolean;
}

declare var FSAliasInfo: FSAliasInfo;

interface FSCatalogBulkParam {
  qLink: QElem;
  qType: number;
  ioTrap: number;
  ioCmdAddr: string;
  ioCompletion: (p1: any) => void;
  ioResult: number;
  containerChanged: boolean;
  reserved: number;
  iteratorFlags: number;
  iterator: any;
  container: FSRef;
  maximumItems: number;
  actualItems: number;
  whichInfo: number;
  catalogInfo: FSCatalogInfo;
  refs: FSRef;
  specs: FSSpec;
  names: HFSUniStr255;
  searchParams: FSSearchParams;
}

declare var FSCatalogBulkParam: FSCatalogBulkParam;

interface FSCatalogInfo {
  nodeFlags: number;
  volume: number;
  parentDirID: number;
  nodeID: number;
  sharingFlags: number;
  userPrivileges: number;
  reserved1: number;
  reserved2: number;
  createDate: UTCDateTime;
  contentModDate: UTCDateTime;
  attributeModDate: UTCDateTime;
  accessDate: UTCDateTime;
  backupDate: UTCDateTime;
  permissions: FSPermissionInfo;
  finderInfo: number;
  extFinderInfo: number;
  dataLogicalSize: number;
  dataPhysicalSize: number;
  rsrcLogicalSize: number;
  rsrcPhysicalSize: number;
  valence: number;
  textEncodingHint: number;
}

declare var FSCatalogInfo: FSCatalogInfo;

interface FSEventStreamContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => NSObject;
}

declare var FSEventStreamContext: FSEventStreamContext;

declare function FSEventStreamCopyDescription(streamRef: any): NSObject;
declare function FSEventStreamCopyPathsBeingWatched(streamRef: any): NSObject;
declare function FSEventStreamCreate(allocator: any, callback: (p1: any, p2: any, p3: number, p4: any, p5: number, p6: number) => void, context: FSEventStreamContext, pathsToWatch: NSObject, sinceWhen: number, latency: number, flags: number): any;
declare function FSEventStreamCreateRelativeToDevice(allocator: any, callback: (p1: any, p2: any, p3: number, p4: any, p5: number, p6: number) => void, context: FSEventStreamContext, deviceToWatch: number, pathsToWatchRelativeToDevice: NSObject, sinceWhen: number, latency: number, flags: number): any;
declare function FSEventStreamFlushAsync(streamRef: any): number;
declare function FSEventStreamFlushSync(streamRef: any): void;
declare function FSEventStreamGetDeviceBeingWatched(streamRef: any): number;
declare function FSEventStreamGetLatestEventId(streamRef: any): number;
declare function FSEventStreamInvalidate(streamRef: any): void;
declare function FSEventStreamRelease(streamRef: any): void;
declare function FSEventStreamRetain(streamRef: any): void;
declare function FSEventStreamScheduleWithRunLoop(streamRef: any, runLoop: any, runLoopMode: NSObject): void;
declare function FSEventStreamSetDispatchQueue(streamRef: any, q: NSObject): void;
declare function FSEventStreamSetExclusionPaths(streamRef: any, pathsToExclude: NSObject): boolean;
declare function FSEventStreamShow(streamRef: any): void;
declare function FSEventStreamStart(streamRef: any): boolean;
declare function FSEventStreamStop(streamRef: any): void;
declare function FSEventStreamUnscheduleFromRunLoop(streamRef: any, runLoop: any, runLoopMode: NSObject): void;
declare function FSEventsCopyUUIDForDevice(dev: number): any;
declare function FSEventsGetCurrentEventId(): number;
declare function FSEventsGetLastEventIdForDeviceBeforeTime(dev: number, time: number): number;
declare function FSEventsPurgeEventsForDeviceUpToEventId(dev: number, eventId: number): boolean;
interface FSFileOperationClientContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => NSObject;
}

declare var FSFileOperationClientContext: FSFileOperationClientContext;

interface FSForkCBInfoParam {
  qLink: QElem;
  qType: number;
  ioTrap: number;
  ioCmdAddr: string;
  ioCompletion: (p1: any) => void;
  ioResult: number;
  desiredRefNum: number;
  volumeRefNum: number;
  iterator: number;
  actualRefNum: number;
  ref: FSRef;
  forkInfo: FSForkInfo;
  forkName: HFSUniStr255;
}

declare var FSForkCBInfoParam: FSForkCBInfoParam;

interface FSForkIOParam {
  qLink: QElem;
  qType: number;
  ioTrap: number;
  ioCmdAddr: string;
  ioCompletion: (p1: any) => void;
  ioResult: number;
  reserved1: any;
  reserved2: number;
  forkRefNum: number;
  reserved3: number;
  permissions: number;
  ref: FSRef;
  buffer: string;
  requestCount: number;
  actualCount: number;
  positionMode: number;
  positionOffset: number;
  allocationFlags: number;
  allocationAmount: number;
  forkNameLength: number;
  forkName: number;
  forkIterator: CatPositionRec;
  outForkName: HFSUniStr255;
}

declare var FSForkIOParam: FSForkIOParam;

interface FSForkInfo {
  flags: number;
  permissions: number;
  volume: number;
  reserved2: number;
  nodeID: number;
  forkID: number;
  currentPosition: number;
  logicalEOF: number;
  physicalEOF: number;
  process: number;
}

declare var FSForkInfo: FSForkInfo;

interface FSPermissionInfo {
  userID: number;
  groupID: number;
  reserved1: number;
  userAccess: number;
  mode: number;
  fileSec: any;
}

declare var FSPermissionInfo: FSPermissionInfo;

interface FSRangeLockParam {
  qLink: QElem;
  qType: number;
  ioTrap: number;
  ioCmdAddr: string;
  ioCompletion: (p1: any) => void;
  ioResult: number;
  forkRefNum: number;
  requestCount: number;
  positionMode: number;
  positionOffset: number;
  rangeStart: number;
}

declare var FSRangeLockParam: FSRangeLockParam;

interface FSRef {
  hidden: number;
}

declare var FSRef: FSRef;

interface FSRefForkIOParam {
  qLink: QElem;
  qType: number;
  ioTrap: number;
  ioCmdAddr: string;
  ioCompletion: (p1: any) => void;
  ioResult: number;
  parentRef: FSRef;
  nameLength: number;
  name: number;
  whichInfo: number;
  catInfo: FSCatalogInfo;
  forkNameLength: number;
  forkName: number;
  permissions: number;
  reserved1: number;
  forkRefNum: number;
  newRef: FSRef;
}

declare var FSRefForkIOParam: FSRefForkIOParam;

interface FSRefParam {
  qLink: QElem;
  qType: number;
  ioTrap: number;
  ioCmdAddr: string;
  ioCompletion: (p1: any) => void;
  ioResult: number;
  ioNamePtr: string;
  ioVRefNum: number;
  reserved1: number;
  reserved2: number;
  reserved3: number;
  ref: FSRef;
  whichInfo: number;
  catInfo: FSCatalogInfo;
  nameLength: number;
  name: number;
  ioDirID: number;
  spec: FSSpec;
  parentRef: FSRef;
  newRef: FSRef;
  textEncodingHint: number;
  outName: HFSUniStr255;
}

declare var FSRefParam: FSRefParam;

interface FSSearchParams {
  searchTime: number;
  searchBits: number;
  searchNameLength: number;
  searchName: number;
  searchInfo1: FSCatalogInfo;
  searchInfo2: FSCatalogInfo;
}

declare var FSSearchParams: FSSearchParams;

interface FSSpec {
  hidden: number;
}

declare var FSSpec: FSSpec;

interface FSVolumeInfo {
  createDate: UTCDateTime;
  modifyDate: UTCDateTime;
  backupDate: UTCDateTime;
  checkedDate: UTCDateTime;
  fileCount: number;
  folderCount: number;
  totalBytes: number;
  freeBytes: number;
  blockSize: number;
  totalBlocks: number;
  freeBlocks: number;
  nextAllocation: number;
  rsrcClumpSize: number;
  dataClumpSize: number;
  nextCatalogID: number;
  finderInfo: number;
  flags: number;
  filesystemID: number;
  signature: number;
  driveNumber: number;
  driverRefNum: number;
}

declare var FSVolumeInfo: FSVolumeInfo;

interface FSVolumeInfoParam {
  qLink: QElem;
  qType: number;
  ioTrap: number;
  ioCmdAddr: string;
  ioCompletion: (p1: any) => void;
  ioResult: number;
  ioNamePtr: string;
  ioVRefNum: number;
  volumeIndex: number;
  whichInfo: number;
  volumeInfo: FSVolumeInfo;
  volumeName: HFSUniStr255;
  ref: FSRef;
}

declare var FSVolumeInfoParam: FSVolumeInfoParam;

interface FVector {
  start: number;
  length: number;
}

declare var FVector: FVector;

interface FXInfo {
  fdIconID: number;
  fdReserved: number;
  fdScript: number;
  fdXFlags: number;
  fdComment: number;
  fdPutAway: number;
}

declare var FXInfo: FXInfo;

interface FileInfo {
  fileType: number;
  fileCreator: number;
  finderFlags: number;
  location: Point;
  reservedField: number;
}

declare var FileInfo: FileInfo;

interface FolderDesc {
  descSize: number;
  foldType: number;
  flags: number;
  foldClass: number;
  foldLocation: number;
  badgeSignature: number;
  badgeType: number;
  reserved: number;
  name: number;
}

declare var FolderDesc: FolderDesc;

interface FolderInfo {
  windowBounds: Rect;
  finderFlags: number;
  location: Point;
  reservedField: number;
}

declare var FolderInfo: FolderInfo;

interface FolderRouting {
  descSize: number;
  fileType: number;
  routeFromFolder: number;
  routeToFolder: number;
  flags: number;
}

declare var FolderRouting: FolderRouting;

interface FormatVersionChunk {
  ckID: number;
  ckSize: number;
  timestamp: number;
}

declare var FormatVersionChunk: FormatVersionChunk;


declare const FormatVersionID: number;

declare const ForwardBackwardLooping: number;

declare const ForwardLooping: number;

declare const GREATERTHAN: number;
declare function GetScriptInfoFromTextEncoding(iEncoding: number, oTextScriptID: number, oTextLanguageID: number): number;
declare function GetTextEncodingBase(encoding: number): number;
declare function GetTextEncodingFormat(encoding: number): number;
declare function GetTextEncodingFromScriptInfo(iTextScriptID: number, iTextLanguageID: number, iTextRegionID: number, oEncoding: number): number;
declare function GetTextEncodingName(iEncoding: number, iNamePartSelector: number, iPreferredRegion: number, iPreferredEncoding: number, iOutputBufLen: number, oNameLength: number, oActualRegion: number, oActualEncoding: number, oEncodingName: string | any): number;
declare function GetTextEncodingVariant(encoding: number): number;
interface GetVolParmsInfoBuffer {
  vMVersion: number;
  vMAttrib: number;
  vMLocalHand: string;
  vMServerAdr: number;
  vMVolumeGrade: number;
  vMForeignPrivID: number;
  vMExtendedAttributes: number;
  vMDeviceID: any;
  vMMaxNameLength: number;
}

declare var GetVolParmsInfoBuffer: GetVolParmsInfoBuffer;


declare const HDActivity: number;
interface IconFamilyElement {
  elementType: number;
  elementSize: number;
  elementData: number;
}

declare var IconFamilyElement: IconFamilyElement;

interface IconFamilyResource {
  resourceType: number;
  resourceSize: number;
  elements: IconFamilyElement;
}

declare var IconFamilyResource: IconFamilyResource;


declare const IdleActivity: number;
interface InstrumentChunk {
  ckID: number;
  ckSize: number;
  baseFrequency: number;
  detune: number;
  lowFrequency: number;
  highFrequency: number;
  lowVelocity: number;
  highVelocity: number;
  gain: number;
  sustainLoop: AIFFLoop;
  releaseLoop: AIFFLoop;
}

declare var InstrumentChunk: InstrumentChunk;


declare const InstrumentID: number;
interface Intl0Rec {
  decimalPt: number;
  thousSep: number;
  listSep: number;
  currSym1: number;
  currSym2: number;
  currSym3: number;
  currFmt: number;
  dateOrder: number;
  shrtDateFmt: number;
  dateSep: number;
  timeCycle: number;
  timeFmt: number;
  mornStr: number;
  eveStr: number;
  timeSep: number;
  time1Suff: number;
  time2Suff: number;
  time3Suff: number;
  time4Suff: number;
  time5Suff: number;
  time6Suff: number;
  time7Suff: number;
  time8Suff: number;
  metricSys: number;
  intl0Vers: number;
}

declare var Intl0Rec: Intl0Rec;

interface Intl1Rec {
  days: number;
  months: number;
  suppressDay: number;
  lngDateFmt: number;
  dayLeading0: number;
  abbrLen: number;
  st0: number;
  st1: number;
  st2: number;
  st3: number;
  st4: number;
  intl1Vers: number;
  localRtn: number;
}

declare var Intl1Rec: Intl1Rec;

interface IntlText {
  theScriptCode: number;
  theLangCode: number;
  theText: number;
}

declare var IntlText: IntlText;

declare function InvokeAECoerceDescUPP(fromDesc: AEDesc, toType: number, handlerRefcon: any, toDesc: AEDesc, userUPP: (p1: AEDesc, p2: number, p3: any, p4: AEDesc) => number): number;
declare function InvokeAECoercePtrUPP(typeCode: number, dataPtr: any, dataSize: number, toType: number, handlerRefcon: any, result: AEDesc, userUPP: (p1: number, p2: any, p3: number, p4: number, p5: any, p6: AEDesc) => number): number;
declare function InvokeAEDisposeExternalUPP(dataPtr: any, dataLength: number, refcon: any, userUPP: (p1: any, p2: number, p3: any) => void): void;
declare function InvokeAEEventHandlerUPP(theAppleEvent: AEDesc, reply: AEDesc, handlerRefcon: any, userUPP: (p1: AEDesc, p2: AEDesc, p3: any) => number): number;
declare function InvokeIndexToUCStringUPP(index: number, listDataPtr: any, refcon: any, outString: NSObject, tsOptions: number, userUPP: (p1: number, p2: any, p3: any, p4: NSObject, p5: number) => boolean): boolean;
declare function InvokeOSLAccessorUPP(desiredClass: number, container: AEDesc, containerClass: number, form: number, selectionData: AEDesc, value: AEDesc, accessorRefcon: any, userUPP: (p1: number, p2: AEDesc, p3: number, p4: number, p5: AEDesc, p6: AEDesc, p7: any) => number): number;
declare function InvokeOSLAdjustMarksUPP(newStart: number, newStop: number, markToken: AEDesc, userUPP: (p1: number, p2: number, p3: AEDesc) => number): number;
declare function InvokeOSLCompareUPP(oper: number, obj1: AEDesc, obj2: AEDesc, result: string | any, userUPP: (p1: number, p2: AEDesc, p3: AEDesc, p4: string) => number): number;
declare function InvokeOSLCountUPP(desiredType: number, containerClass: number, container: AEDesc, result: number, userUPP: (p1: number, p2: number, p3: AEDesc, p4: number) => number): number;
declare function InvokeOSLDisposeTokenUPP(unneededToken: AEDesc, userUPP: (p1: AEDesc) => number): number;
declare function InvokeOSLGetErrDescUPP(appDescPtr: AEDesc, userUPP: (p1: AEDesc) => number): number;
declare function InvokeOSLGetMarkTokenUPP(dContainerToken: AEDesc, containerClass: number, result: AEDesc, userUPP: (p1: AEDesc, p2: number, p3: AEDesc) => number): number;
declare function InvokeOSLMarkUPP(dToken: AEDesc, markToken: AEDesc, index: number, userUPP: (p1: AEDesc, p2: AEDesc, p3: number) => number): number;
declare function InvokeUnicodeToTextFallbackUPP(iSrcUniStr: number, iSrcUniStrLen: number, oSrcConvLen: number, oDestStr: string | any, iDestStrLen: number, oDestConvLen: number, iInfoPtr: any, iUnicodeMappingPtr: UnicodeMapping, userUPP: (p1: number, p2: number, p3: number, p4: string, p5: number, p6: number, p7: any, p8: UnicodeMapping) => number): number;
interface Itl1ExtRec {
  base: Intl1Rec;
  version: number;
  format: number;
  calendarCode: number;
  extraDaysTableOffset: number;
  extraDaysTableLength: number;
  extraMonthsTableOffset: number;
  extraMonthsTableLength: number;
  abbrevDaysTableOffset: number;
  abbrevDaysTableLength: number;
  abbrevMonthsTableOffset: number;
  abbrevMonthsTableLength: number;
  extraSepsTableOffset: number;
  extraSepsTableLength: number;
  tables: number;
}

declare var Itl1ExtRec: Itl1ExtRec;

interface Itl4Rec {
  flags: number;
  resourceType: number;
  resourceNum: number;
  version: number;
  resHeader1: number;
  resHeader2: number;
  numTables: number;
  mapOffset: number;
  strOffset: number;
  fetchOffset: number;
  unTokenOffset: number;
  defPartsOffset: number;
  resOffset6: number;
  resOffset7: number;
  resOffset8: number;
}

declare var Itl4Rec: Itl4Rec;

interface Itl5Record {
  versionNumber: number;
  numberOfTables: number;
  reserved: number;
  tableDirectory: TableDirectoryRecord;
}

declare var Itl5Record: Itl5Record;

interface ItlbExtRecord {
  base: ItlbRecord;
  itlbLocalSize: number;
  itlbMonoFond: number;
  itlbMonoSize: number;
  itlbPrefFond: number;
  itlbPrefSize: number;
  itlbSmallFond: number;
  itlbSmallSize: number;
  itlbSysFond: number;
  itlbSysSize: number;
  itlbAppFond: number;
  itlbAppSize: number;
  itlbHelpFond: number;
  itlbHelpSize: number;
  itlbValidStyles: number;
  itlbAliasStyle: number;
}

declare var ItlbExtRecord: ItlbExtRecord;

interface ItlbRecord {
  itlbNumber: number;
  itlbDate: number;
  itlbSort: number;
  itlbFlags: number;
  itlbToken: number;
  itlbEncoding: number;
  itlbLang: number;
  itlbNumRep: number;
  itlbDateRep: number;
  itlbKeys: number;
  itlbIcon: number;
}

declare var ItlbRecord: ItlbRecord;

interface ItlcRecord {
  itlcSystem: number;
  itlcReserved: number;
  itlcFontForce: number;
  itlcIntlForce: number;
  itlcOldKybd: number;
  itlcFlags: number;
  itlcIconOffset: number;
  itlcIconSide: number;
  itlcIconRsvd: number;
  itlcRegionCode: number;
  itlcSysFlags: number;
  itlcReserved4: number;
}

declare var ItlcRecord: ItlcRecord;


declare const KAEISHandleCGI: number;
interface KCCallbackInfo {
  version: number;
  item: any;
  processID: number;
  event: number;
  keychain: any;
}

declare var KCCallbackInfo: KCCallbackInfo;


declare const LESSTHAN: number;
interface LSApplicationParameters {
  version: number;
  flags: LSLaunchFlags;
  application: FSRef;
  asyncLaunchRefCon: any;
  environment: NSObject;
  argv: NSObject;
  initialEvent: AEDesc;
}

declare var LSApplicationParameters: LSApplicationParameters;

declare function LSCanURLAcceptURL(inItemURL: NSObject, inTargetURL: NSObject, inRoleMask: LSRolesMask, inFlags: LSAcceptanceFlags, outAcceptsItem: string | any): number;
declare function LSCopyAllRoleHandlersForContentType(inContentType: NSObject, inRole: LSRolesMask): NSObject;
declare function LSCopyApplicationURLsForBundleIdentifier(inBundleIdentifier: NSObject, outError: NSObject): NSObject;
declare function LSCopyApplicationURLsForURL(inURL: NSObject, inRoleMask: LSRolesMask): NSObject;
declare function LSCopyDefaultApplicationURLForContentType(inContentType: NSObject, inRoleMask: LSRolesMask, outError: NSObject): NSObject;
declare function LSCopyDefaultApplicationURLForURL(inURL: NSObject, inRoleMask: LSRolesMask, outError: NSObject): NSObject;
declare function LSCopyDefaultRoleHandlerForContentType(inContentType: NSObject, inRole: LSRolesMask): NSObject;
interface LSItemInfoRecord {
  flags: LSItemInfoFlags;
  filetype: number;
  creator: number;
  extension: NSObject;
}

declare var LSItemInfoRecord: LSItemInfoRecord;

interface LSLaunchFSRefSpec {
  appRef: FSRef;
  numDocs: number;
  itemRefs: FSRef;
  passThruParams: AEDesc;
  launchFlags: LSLaunchFlags;
  asyncRefCon: any;
}

declare var LSLaunchFSRefSpec: LSLaunchFSRefSpec;

interface LSLaunchURLSpec {
  appURL: NSObject;
  itemURLs: NSObject;
  passThruParams: AEDesc;
  launchFlags: LSLaunchFlags;
  asyncRefCon: any;
}

declare var LSLaunchURLSpec: LSLaunchURLSpec;

declare function LSOpenCFURLRef(inURL: NSObject, outLaunchedURL: NSObject): number;
declare function LSOpenFromURLSpec(inLaunchSpec: LSLaunchURLSpec, outLaunchedURL: NSObject): number;
declare function LSRegisterURL(inURL: NSObject, inUpdate: boolean): number;
declare function LSSetDefaultHandlerForURLScheme(inURLScheme: NSObject, inHandlerBundleID: NSObject): number;
declare function LSSetDefaultRoleHandlerForContentType(inContentType: NSObject, inRole: LSRolesMask, inHandlerBundleID: NSObject): number;
interface LocalDateTime {
  highSeconds: number;
  lowSeconds: number;
  fraction: number;
}

declare var LocalDateTime: LocalDateTime;

interface LocaleAndVariant {
  locale: any;
  opVariant: number;
}

declare var LocaleAndVariant: LocaleAndVariant;

declare function LocaleOperationCountNames(opClass: number, nameCount: number): number;
declare function LocaleOperationGetIndName(opClass: number, nameIndex: number, maxNameLen: number, actualNameLen: number, displayName: number, displayLocale: any): number;
declare function LocaleOperationGetName(opClass: number, displayLocale: any, maxNameLen: number, actualNameLen: number, displayName: number): number;
declare function LocaleRefFromLangOrRegionCode(lang: number, region: number, locale: any): number;
declare function LocaleRefFromLocaleString(localeString: number, locale: any): number;
declare function LocaleRefGetPartString(locale: any, partMask: number, maxStringLen: number, partString: number): number;
declare function LocaleStringToLangAndRegionCodes(localeString: number, lang: number, region: number): number;
declare function LongDoubleToSInt64(value: number): number;
declare function LongDoubleToUInt64(value: number): number;

declare const MACE3Type: number;

declare const MACE6Type: number;
declare function MDCopyLabelKinds(): NSObject;
declare function MDCopyLabelWithUUID(labelUUID: any): any;
declare function MDCopyLabelsMatchingExpression(simpleQueryString: NSObject): NSObject;
declare function MDCopyLabelsWithKind(kind: NSObject): NSObject;
declare function MDItemCopyAttribute(item: any, name: NSObject): any;
declare function MDItemCopyAttributeNames(item: any): NSObject;
declare function MDItemCopyAttributes(item: any, names: NSObject): NSObject;
declare function MDItemCopyLabels(item: any): NSObject;
declare function MDItemCreate(allocator: any, path: NSObject): any;
declare function MDItemCreateWithURL(allocator: any, url: NSObject): any;
declare function MDItemGetTypeID(): number;
declare function MDItemRemoveLabel(item: any, label: any): boolean;
declare function MDItemSetLabel(item: any, label: any): boolean;
declare function MDItemsCopyAttributes(items: NSObject, names: NSObject): NSObject;
declare function MDItemsCreateWithURLs(allocator: any, urls: NSObject): NSObject;
declare function MDLabelCopyAttribute(label: any, name: NSObject): any;
declare function MDLabelCopyAttributeName(label: any): NSObject;
declare function MDLabelCreate(allocator: any, displayName: NSObject, kind: NSObject, domain: MDLabelDomain): any;
declare function MDLabelDelete(label: any): boolean;
declare function MDLabelGetTypeID(): number;
declare function MDLabelSetAttributes(label: any, attrs: NSObject): boolean;
interface MDQueryBatchingParams {
  first_max_num: number;
  first_max_ms: number;
  progress_max_num: number;
  progress_max_ms: number;
  update_max_num: number;
  update_max_ms: number;
}

declare var MDQueryBatchingParams: MDQueryBatchingParams;

declare function MDQueryCopyQueryString(query: any): NSObject;
declare function MDQueryCopySortingAttributes(query: any): NSObject;
declare function MDQueryCopyValueListAttributes(query: any): NSObject;
declare function MDQueryCopyValuesOfAttribute(query: any, name: NSObject): NSObject;
declare function MDQueryCreate(allocator: any, queryString: NSObject, valueListAttrs: NSObject, sortingAttrs: NSObject): any;
declare function MDQueryCreateForItems(allocator: any, queryString: NSObject, valueListAttrs: NSObject, sortingAttrs: NSObject, items: NSObject): any;
declare function MDQueryCreateSubset(allocator: any, query: any, queryString: NSObject, valueListAttrs: NSObject, sortingAttrs: NSObject): any;
declare function MDQueryDisableUpdates(query: any): void;
declare function MDQueryEnableUpdates(query: any): void;
declare function MDQueryExecute(query: any, optionFlags: number): boolean;
declare function MDQueryGetAttributeValueOfResultAtIndex(query: any, name: NSObject, idx: number): any;
declare function MDQueryGetBatchingParameters(query: any): MDQueryBatchingParams;
declare function MDQueryGetCountOfResultsWithAttributeValue(query: any, name: NSObject, value: any): number;
declare function MDQueryGetIndexOfResult(query: any, result: any): number;
declare function MDQueryGetResultAtIndex(query: any, idx: number): any;
declare function MDQueryGetResultCount(query: any): number;
declare function MDQueryGetSortOptionFlagsForAttribute(query: any, fieldName: NSObject): number;
declare function MDQueryGetTypeID(): number;
declare function MDQueryIsGatheringComplete(query: any): boolean;
declare function MDQuerySetBatchingParameters(query: any, params: MDQueryBatchingParams): void;
declare function MDQuerySetCreateResultFunction(query: any, func: (p1: any, p2: any, p3: any) => any, context: any, cb: CFArrayCallBacks): void;
declare function MDQuerySetCreateValueFunction(query: any, func: (p1: any, p2: NSObject, p3: any, p4: any) => any, context: any, cb: CFArrayCallBacks): void;
declare function MDQuerySetDispatchQueue(query: any, queue: NSObject): void;
declare function MDQuerySetMaxCount(query: any, size: number): void;
declare function MDQuerySetSearchScope(query: any, scopeDirectories: NSObject, scopeOptions: number): void;
declare function MDQuerySetSortComparator(query: any, comparator: (p1: any, p2: any, p3: any) => CFComparisonResult, context: any): void;
declare function MDQuerySetSortComparatorBlock(query: any, comparator: (p1: any, p2: any) => CFComparisonResult): void;
declare function MDQuerySetSortOptionFlagsForAttribute(query: any, fieldName: NSObject, flags: number): boolean;
declare function MDQuerySetSortOrder(query: any, sortingAttrs: NSObject): boolean;
declare function MDQueryStop(query: any): void;
declare function MDSchemaCopyAllAttributes(): NSObject;
declare function MDSchemaCopyAttributesForContentType(contentTypeUTI: NSObject): NSObject;
declare function MDSchemaCopyDisplayDescriptionForAttribute(name: NSObject): NSObject;
declare function MDSchemaCopyDisplayNameForAttribute(name: NSObject): NSObject;
declare function MDSchemaCopyMetaAttributesForAttribute(name: NSObject): NSObject;
interface MIDIDataChunk {
  ckID: number;
  ckSize: number;
  MIDIdata: number;
}

declare var MIDIDataChunk: MIDIDataChunk;


declare const MIDIDataID: number;
interface MPAddressSpaceInfo {
  version: number;
  processID: any;
  groupID: any;
  nTasks: number;
  vsid: number;
}

declare var MPAddressSpaceInfo: MPAddressSpaceInfo;

interface MPCriticalRegionInfo {
  version: number;
  processID: any;
  regionName: number;
  nWaiting: number;
  waitingTaskID: any;
  owningTask: any;
  count: number;
}

declare var MPCriticalRegionInfo: MPCriticalRegionInfo;

interface MPEventInfo {
  version: number;
  processID: any;
  eventName: number;
  nWaiting: number;
  waitingTaskID: any;
  events: number;
}

declare var MPEventInfo: MPEventInfo;


declare const MPLibrary_DevelopmentRevision: number;

declare const MPLibrary_MajorVersion: number;

declare const MPLibrary_MinorVersion: number;

declare const MPLibrary_Release: number;
interface MPNotificationInfo {
  version: number;
  processID: any;
  notificationName: number;
  queueID: any;
  p1: any;
  p2: any;
  p3: any;
  eventID: any;
  events: number;
  semaphoreID: any;
}

declare var MPNotificationInfo: MPNotificationInfo;

interface MPQueueInfo {
  version: number;
  processID: any;
  queueName: number;
  nWaiting: number;
  waitingTaskID: any;
  nMessages: number;
  nReserved: number;
  p1: any;
  p2: any;
  p3: any;
}

declare var MPQueueInfo: MPQueueInfo;

interface MPSemaphoreInfo {
  version: number;
  processID: any;
  semaphoreName: number;
  nWaiting: number;
  waitingTaskID: any;
  maximum: number;
  count: number;
}

declare var MPSemaphoreInfo: MPSemaphoreInfo;

interface MPTaskInfo {
  version: number;
  name: number;
  queueName: number;
  runState: number;
  lastCPU: number;
  weight: number;
  processID: any;
  cpuTime: UnsignedWide;
  schedTime: UnsignedWide;
  creationTime: UnsignedWide;
  codePageFaults: number;
  dataPageFaults: number;
  preemptions: number;
  cpuID: any;
  blockedObject: any;
  spaceID: any;
  stackBase: any;
  stackLimit: any;
  stackCurr: any;
}

declare var MPTaskInfo: MPTaskInfo;

interface MPTaskInfoVersion2 {
  version: number;
  name: number;
  queueName: number;
  runState: number;
  lastCPU: number;
  weight: number;
  processID: any;
  cpuTime: UnsignedWide;
  schedTime: UnsignedWide;
  creationTime: UnsignedWide;
  codePageFaults: number;
  dataPageFaults: number;
  preemptions: number;
  cpuID: any;
}

declare var MPTaskInfoVersion2: MPTaskInfoVersion2;

interface MachineInformationIntel64 {
  CS: number;
  FS: number;
  GS: number;
  RFLAGS: number;
  RIP: number;
  ExceptTrap: number;
  ExceptErr: number;
  ExceptAddr: number;
}

declare var MachineInformationIntel64: MachineInformationIntel64;

interface MachineInformationPowerPC {
  CTR: UnsignedWide;
  LR: UnsignedWide;
  PC: UnsignedWide;
  CRRegister: number;
  XER: number;
  MSR: number;
  MQ: number;
  ExceptKind: number;
  DSISR: number;
  DAR: UnsignedWide;
  Reserved: UnsignedWide;
}

declare var MachineInformationPowerPC: MachineInformationPowerPC;

interface Marker {
  id: number;
  position: number;
  markerName: number;
}

declare var Marker: Marker;

interface MarkerChunk {
  ckID: number;
  ckSize: number;
  numMarkers: number;
  Markers: Marker;
}

declare var MarkerChunk: MarkerChunk;


declare const MarkerID: number;
interface MemoryExceptionInformation {
  theArea: any;
  theAddress: any;
  theError: number;
  theReference: number;
}

declare var MemoryExceptionInformation: MemoryExceptionInformation;

interface MixedModeStateRecord {
  state1: number;
  state2: number;
  state3: number;
  state4: number;
}

declare var MixedModeStateRecord: MixedModeStateRecord;

interface NItl4Rec {
  flags: number;
  resourceType: number;
  resourceNum: number;
  version: number;
  format: number;
  resHeader: number;
  resHeader2: number;
  numTables: number;
  mapOffset: number;
  strOffset: number;
  fetchOffset: number;
  unTokenOffset: number;
  defPartsOffset: number;
  whtSpListOffset: number;
  resOffset7: number;
  resOffset8: number;
  resLength1: number;
  resLength2: number;
  resLength3: number;
  unTokenLength: number;
  defPartsLength: number;
  whtSpListLength: number;
  resLength7: number;
  resLength8: number;
}

declare var NItl4Rec: NItl4Rec;


declare const NameID: number;
declare function NearestMacTextEncodings(generalEncoding: number, bestMacEncoding: number, alternateMacEncoding: number): number;

declare const NetActivity: number;
declare function NewAECoerceDescUPP(userRoutine: (p1: AEDesc, p2: number, p3: any, p4: AEDesc) => number): (p1: AEDesc, p2: number, p3: any, p4: AEDesc) => number;
declare function NewAECoercePtrUPP(userRoutine: (p1: number, p2: any, p3: number, p4: number, p5: any, p6: AEDesc) => number): (p1: number, p2: any, p3: number, p4: number, p5: any, p6: AEDesc) => number;
declare function NewAEDisposeExternalUPP(userRoutine: (p1: any, p2: number, p3: any) => void): (p1: any, p2: number, p3: any) => void;
declare function NewAEEventHandlerUPP(userRoutine: (p1: AEDesc, p2: AEDesc, p3: any) => number): (p1: AEDesc, p2: AEDesc, p3: any) => number;
declare function NewIndexToUCStringUPP(userRoutine: (p1: number, p2: any, p3: any, p4: NSObject, p5: number) => boolean): (p1: number, p2: any, p3: any, p4: NSObject, p5: number) => boolean;
declare function NewOSLAccessorUPP(userRoutine: (p1: number, p2: AEDesc, p3: number, p4: number, p5: AEDesc, p6: AEDesc, p7: any) => number): (p1: number, p2: AEDesc, p3: number, p4: number, p5: AEDesc, p6: AEDesc, p7: any) => number;
declare function NewOSLAdjustMarksUPP(userRoutine: (p1: number, p2: number, p3: AEDesc) => number): (p1: number, p2: number, p3: AEDesc) => number;
declare function NewOSLCompareUPP(userRoutine: (p1: number, p2: AEDesc, p3: AEDesc, p4: string) => number): (p1: number, p2: AEDesc, p3: AEDesc, p4: string) => number;
declare function NewOSLCountUPP(userRoutine: (p1: number, p2: number, p3: AEDesc, p4: number) => number): (p1: number, p2: number, p3: AEDesc, p4: number) => number;
declare function NewOSLDisposeTokenUPP(userRoutine: (p1: AEDesc) => number): (p1: AEDesc) => number;
declare function NewOSLGetErrDescUPP(userRoutine: (p1: AEDesc) => number): (p1: AEDesc) => number;
declare function NewOSLGetMarkTokenUPP(userRoutine: (p1: AEDesc, p2: number, p3: AEDesc) => number): (p1: AEDesc, p2: number, p3: AEDesc) => number;
declare function NewOSLMarkUPP(userRoutine: (p1: AEDesc, p2: AEDesc, p3: number) => number): (p1: AEDesc, p2: AEDesc, p3: number) => number;
declare function NewUnicodeToTextFallbackUPP(userRoutine: (p1: number, p2: number, p3: number, p4: string, p5: number, p6: number, p7: any, p8: UnicodeMapping) => number): (p1: number, p2: number, p3: number, p4: string, p5: number, p6: number, p7: any, p8: UnicodeMapping) => number;

declare const NoLooping: number;

declare const NoneType: number;
interface NumFormatString {
  fLength: number;
  fVersion: number;
  data: number;
}

declare var NumFormatString: NumFormatString;


declare const OSAControlFlowError: number;

declare const OSADuplicateHandler: number;

declare const OSADuplicateParameter: number;

declare const OSADuplicateProperty: number;

declare const OSAIllegalAccess: number;

declare const OSAIllegalAssign: number;

declare const OSAIllegalIndex: number;

declare const OSAIllegalRange: number;

declare const OSAInconsistentDeclarations: number;

declare const OSAMessageNotUnderstood: number;

declare const OSAMissingParameter: number;

declare const OSAParameterMismatch: number;

declare const OSASyntaxError: number;

declare const OSASyntaxTypeError: number;

declare const OSATokenTooLong: number;

declare const OSAUndefinedHandler: number;

declare const OSAUndefinedVariable: number;
interface OffPair {
  offFirst: number;
  offSecond: number;
}

declare var OffPair: OffPair;

interface OffsetArray {
  fNumOfOffsets: number;
  fOffset: number;
}

declare var OffsetArray: OffsetArray;


declare const OverallAct: number;
interface PEFContainerHeader {
  tag1: number;
  tag2: number;
  architecture: number;
  formatVersion: number;
  dateTimeStamp: number;
  oldDefVersion: number;
  oldImpVersion: number;
  currentVersion: number;
  sectionCount: number;
  instSectionCount: number;
  reservedA: number;
}

declare var PEFContainerHeader: PEFContainerHeader;

interface PEFExportedSymbol {
  classAndName: number;
  symbolValue: number;
  sectionIndex: number;
}

declare var PEFExportedSymbol: PEFExportedSymbol;

interface PEFExportedSymbolHashSlot {
  countAndStart: number;
}

declare var PEFExportedSymbolHashSlot: PEFExportedSymbolHashSlot;

interface PEFImportedLibrary {
  nameOffset: number;
  oldImpVersion: number;
  currentVersion: number;
  importedSymbolCount: number;
  firstImportedSymbol: number;
  options: number;
  reservedA: number;
  reservedB: number;
}

declare var PEFImportedLibrary: PEFImportedLibrary;

interface PEFImportedSymbol {
  classAndName: number;
}

declare var PEFImportedSymbol: PEFImportedSymbol;

interface PEFLoaderInfoHeader {
  mainSection: number;
  mainOffset: number;
  initSection: number;
  initOffset: number;
  termSection: number;
  termOffset: number;
  importedLibraryCount: number;
  totalImportedSymbolCount: number;
  relocSectionCount: number;
  relocInstrOffset: number;
  loaderStringsOffset: number;
  exportHashOffset: number;
  exportHashTablePower: number;
  exportedSymbolCount: number;
}

declare var PEFLoaderInfoHeader: PEFLoaderInfoHeader;

interface PEFLoaderRelocationHeader {
  sectionIndex: number;
  reservedA: number;
  relocCount: number;
  firstRelocOffset: number;
}

declare var PEFLoaderRelocationHeader: PEFLoaderRelocationHeader;

interface PEFSectionHeader {
  nameOffset: number;
  defaultAddress: number;
  totalLength: number;
  unpackedLength: number;
  containerLength: number;
  containerOffset: number;
  sectionKind: number;
  shareKind: number;
  alignment: number;
  reservedA: number;
}

declare var PEFSectionHeader: PEFSectionHeader;

interface PEFSplitHashWord {
  nameLength: number;
  hashValue: number;
}

declare var PEFSplitHashWord: PEFSplitHashWord;

interface QElem {
  qLink: QElem;
  qType: number;
  qData: number;
}

declare var QElem: QElem;

interface QHdr {
  qFlags: number;
  qHead: QElem;
  qTail: QElem;
}

declare var QHdr: QHdr;

declare function QueryUnicodeMappings(iFilter: number, iFindMapping: UnicodeMapping, iMaxCount: number, oActualCount: number, oReturnedMappings: UnicodeMapping): number;
interface RegisterInformationIntel64 {
  RAX: number;
  RBX: number;
  RCX: number;
  RDX: number;
  RDI: number;
  RSI: number;
  RBP: number;
  RSP: number;
  R8: number;
  R9: number;
  R10: number;
  R11: number;
  R12: number;
  R13: number;
  R14: number;
  R15: number;
}

declare var RegisterInformationIntel64: RegisterInformationIntel64;

interface RegisterInformationPowerPC {
  R0: UnsignedWide;
  R1: UnsignedWide;
  R2: UnsignedWide;
  R3: UnsignedWide;
  R4: UnsignedWide;
  R5: UnsignedWide;
  R6: UnsignedWide;
  R7: UnsignedWide;
  R8: UnsignedWide;
  R9: UnsignedWide;
  R10: UnsignedWide;
  R11: UnsignedWide;
  R12: UnsignedWide;
  R13: UnsignedWide;
  R14: UnsignedWide;
  R15: UnsignedWide;
  R16: UnsignedWide;
  R17: UnsignedWide;
  R18: UnsignedWide;
  R19: UnsignedWide;
  R20: UnsignedWide;
  R21: UnsignedWide;
  R22: UnsignedWide;
  R23: UnsignedWide;
  R24: UnsignedWide;
  R25: UnsignedWide;
  R26: UnsignedWide;
  R27: UnsignedWide;
  R28: UnsignedWide;
  R29: UnsignedWide;
  R30: UnsignedWide;
  R31: UnsignedWide;
}

declare var RegisterInformationPowerPC: RegisterInformationPowerPC;

interface RegisteredComponentInstanceRecord {
  data: number;
}

declare var RegisteredComponentInstanceRecord: RegisteredComponentInstanceRecord;

interface RegisteredComponentRecord {
  data: number;
}

declare var RegisteredComponentRecord: RegisteredComponentRecord;

declare function ResetTextToUnicodeInfo(ioTextToUnicodeInfo: any): number;
declare function ResetUnicodeToTextInfo(ioUnicodeToTextInfo: any): number;
declare function ResetUnicodeToTextRunInfo(ioUnicodeToTextRunInfo: any): number;
declare function ResolveDefaultTextEncoding(encoding: number): number;
interface ResourceSpec {
  resType: number;
  resID: number;
}

declare var ResourceSpec: ResourceSpec;

declare function RevertTextEncodingToScriptInfo(iEncoding: number, oTextScriptID: number, oTextLanguageID: number, oTextFontname: number): number;
interface RoutineDescriptor {
  goMixedModeTrap: number;
  version: number;
  routineDescriptorFlags: number;
  reserved1: number;
  reserved2: number;
  selectorInfo: number;
  routineCount: number;
  routineRecords: RoutineRecord;
}

declare var RoutineDescriptor: RoutineDescriptor;

interface RoutineRecord {
  procInfo: number;
  reserved1: number;
  ISA: number;
  routineFlags: number;
  procDescriptor: () => number;
  reserved2: number;
  selector: number;
}

declare var RoutineRecord: RoutineRecord;

interface RoutingResourceEntry {
  creator: number;
  fileType: number;
  targetFolder: number;
  destinationFolder: number;
  reservedField: number;
}

declare var RoutingResourceEntry: RoutingResourceEntry;

interface RuleBasedTrslRecord {
  sourceType: number;
  targetType: number;
  formatNumber: number;
  propertyFlag: number;
  numberOfRules: number;
}

declare var RuleBasedTrslRecord: RuleBasedTrslRecord;

declare function S32Set(value: number): number;
declare function S64Add(left: number, right: number): number;
declare function S64And(left: number, right: number): boolean;
declare function S64BitwiseAnd(left: number, right: number): number;
declare function S64BitwiseEor(left: number, right: number): number;
declare function S64BitwiseNot(value: number): number;
declare function S64BitwiseOr(left: number, right: number): number;
declare function S64Div(dividend: number, divisor: number): number;
declare function S64Divide(dividend: number, divisor: number, remainder: number): number;
declare function S64Eor(left: number, right: number): boolean;
declare function S64Max(): number;
declare function S64Min(): number;
declare function S64Mod(dividend: number, divisor: number): number;
declare function S64Multiply(left: number, right: number): number;
declare function S64Negate(value: number): number;
declare function S64Not(value: number): boolean;
declare function S64Or(left: number, right: number): boolean;
declare function S64Set(value: number): number;
declare function S64SetU(value: number): number;
declare function S64ShiftLeft(value: number, shift: number): number;
declare function S64ShiftRight(value: number, shift: number): number;
declare function S64Subtract(left: number, right: number): number;
declare function SInt64ToLongDouble(value: number): number;
declare function SInt64ToUInt64(value: number): number;
declare function SKDocumentCopyURL(inDocument: any): NSObject;
declare function SKDocumentCreate(inScheme: NSObject, inParent: any, inName: NSObject): any;
declare function SKDocumentCreateWithURL(inURL: NSObject): any;
declare function SKDocumentGetName(inDocument: any): NSObject;
declare function SKDocumentGetParent(inDocument: any): any;
declare function SKDocumentGetSchemeName(inDocument: any): NSObject;
declare function SKDocumentGetTypeID(): number;
declare function SKIndexAddDocument(inIndex: any, inDocument: any, inMIMETypeHint: NSObject, inCanReplace: boolean): boolean;
declare function SKIndexAddDocumentWithText(inIndex: any, inDocument: any, inDocumentText: NSObject, inCanReplace: boolean): boolean;
declare function SKIndexClose(inIndex: any): void;
declare function SKIndexCompact(inIndex: any): boolean;
declare function SKIndexCopyDocumentForDocumentID(inIndex: any, inDocumentID: number): any;
declare function SKIndexCopyDocumentIDArrayForTermID(inIndex: any, inTermID: number): NSObject;
declare function SKIndexCopyDocumentProperties(inIndex: any, inDocument: any): NSObject;
declare function SKIndexCopyDocumentRefsForDocumentIDs(inIndex: any, inCount: number, inDocumentIDsArray: number, outDocumentRefsArray: any): void;
declare function SKIndexCopyDocumentURLsForDocumentIDs(inIndex: any, inCount: number, inDocumentIDsArray: number, outDocumentURLsArray: NSObject): void;
declare function SKIndexCopyInfoForDocumentIDs(inIndex: any, inCount: number, inDocumentIDsArray: number, outNamesArray: NSObject, outParentIDsArray: number): void;
declare function SKIndexCopyTermIDArrayForDocumentID(inIndex: any, inDocumentID: number): NSObject;
declare function SKIndexCopyTermStringForTermID(inIndex: any, inTermID: number): NSObject;
declare function SKIndexCreateWithMutableData(inData: NSObject, inIndexName: NSObject, inIndexType: SKIndexType, inAnalysisProperties: NSObject): any;
declare function SKIndexCreateWithURL(inURL: NSObject, inIndexName: NSObject, inIndexType: SKIndexType, inAnalysisProperties: NSObject): any;
declare function SKIndexDocumentIteratorCopyNext(inIterator: any): any;
declare function SKIndexDocumentIteratorCreate(inIndex: any, inParentDocument: any): any;
declare function SKIndexDocumentIteratorGetTypeID(): number;
declare function SKIndexFlush(inIndex: any): boolean;
declare function SKIndexGetAnalysisProperties(inIndex: any): NSObject;
declare function SKIndexGetDocumentCount(inIndex: any): number;
declare function SKIndexGetDocumentID(inIndex: any, inDocument: any): number;
declare function SKIndexGetDocumentState(inIndex: any, inDocument: any): SKDocumentIndexState;
declare function SKIndexGetDocumentTermCount(inIndex: any, inDocumentID: number): number;
declare function SKIndexGetDocumentTermFrequency(inIndex: any, inDocumentID: number, inTermID: number): number;
declare function SKIndexGetIndexType(inIndex: any): SKIndexType;
declare function SKIndexGetMaximumBytesBeforeFlush(inIndex: any): number;
declare function SKIndexGetMaximumDocumentID(inIndex: any): number;
declare function SKIndexGetMaximumTermID(inIndex: any): number;
declare function SKIndexGetTermDocumentCount(inIndex: any, inTermID: number): number;
declare function SKIndexGetTermIDForTermString(inIndex: any, inTermString: NSObject): number;
declare function SKIndexGetTypeID(): number;
declare function SKIndexMoveDocument(inIndex: any, inDocument: any, inNewParent: any): boolean;
declare function SKIndexOpenWithData(inData: NSObject, inIndexName: NSObject): any;
declare function SKIndexOpenWithMutableData(inData: NSObject, inIndexName: NSObject): any;
declare function SKIndexOpenWithURL(inURL: NSObject, inIndexName: NSObject, inWriteAccess: boolean): any;
declare function SKIndexRemoveDocument(inIndex: any, inDocument: any): boolean;
declare function SKIndexRenameDocument(inIndex: any, inDocument: any, inNewName: NSObject): boolean;
declare function SKIndexSetDocumentProperties(inIndex: any, inDocument: any, inProperties: NSObject): void;
declare function SKIndexSetMaximumBytesBeforeFlush(inIndex: any, inBytesForUpdate: number): void;
declare function SKLoadDefaultExtractorPlugIns(): void;
declare function SKSearchCancel(inSearch: any): void;
declare function SKSearchCreate(inIndex: any, inQuery: NSObject, inSearchOptions: number): any;
declare function SKSearchFindMatches(inSearch: any, inMaximumCount: number, outDocumentIDsArray: number, outScoresArray: number, maximumTime: number, outFoundCount: number): boolean;
declare function SKSearchGetTypeID(): number;
declare function SKSummaryCopyParagraphAtIndex(summary: any, i: number): NSObject;
declare function SKSummaryCopyParagraphSummaryString(summary: any, numParagraphs: number): NSObject;
declare function SKSummaryCopySentenceAtIndex(summary: any, i: number): NSObject;
declare function SKSummaryCopySentenceSummaryString(summary: any, numSentences: number): NSObject;
declare function SKSummaryCreateWithString(inString: NSObject): any;
declare function SKSummaryGetParagraphCount(summary: any): number;
declare function SKSummaryGetParagraphSummaryInfo(summary: any, numParagraphsInSummary: number, outRankOrderOfParagraphs: number, outParagraphIndexOfParagraphs: number): number;
declare function SKSummaryGetSentenceCount(summary: any): number;
declare function SKSummaryGetSentenceSummaryInfo(summary: any, numSentencesInSummary: number, outRankOrderOfSentences: number, outSentenceIndexOfSentences: number, outParagraphIndexOfSentences: number): number;
declare function SKSummaryGetTypeID(): number;
interface SchedulerInfoRec {
  InfoRecSize: number;
  CurrentThreadID: number;
  SuggestedThreadID: number;
  InterruptedCoopThreadID: number;
}

declare var SchedulerInfoRec: SchedulerInfoRec;

interface ScriptCodeRun {
  offset: number;
  script: number;
}

declare var ScriptCodeRun: ScriptCodeRun;

declare function SetFallbackUnicodeToText(iUnicodeToTextInfo: any, iFallback: (p1: number, p2: number, p3: number, p4: string, p5: number, p6: number, p7: any, p8: UnicodeMapping) => number, iControlFlags: number, iInfoPtr: any): number;
declare function SetFallbackUnicodeToTextRun(iUnicodeToTextRunInfo: any, iFallback: (p1: number, p2: number, p3: number, p4: string, p5: number, p6: number, p7: any, p8: UnicodeMapping) => number, iControlFlags: number, iInfoPtr: any): number;
interface SleepQRec {
  sleepQLink: SleepQRec;
  sleepQType: number;
  sleepQProc: (p1: number, p2: SleepQRec) => number;
  sleepQFlags: number;
}

declare var SleepQRec: SleepQRec;


declare const SlpTypeErr: number;
interface SoundDataChunk {
  ckID: number;
  ckSize: number;
  offset: number;
  blockSize: number;
}

declare var SoundDataChunk: SoundDataChunk;


declare const SoundDataID: number;
interface TECBufferContextRec {
  textInputBuffer: string;
  textInputBufferEnd: string;
  textOutputBuffer: string;
  textOutputBufferEnd: string;
  encodingInputBuffer: TextEncodingRun;
  encodingInputBufferEnd: TextEncodingRun;
  encodingOutputBuffer: TextEncodingRun;
  encodingOutputBufferEnd: TextEncodingRun;
}

declare var TECBufferContextRec: TECBufferContextRec;

declare function TECClearConverterContextInfo(encodingConverter: any): number;
declare function TECClearSnifferContextInfo(encodingSniffer: any): number;
interface TECConversionInfo {
  sourceEncoding: number;
  destinationEncoding: number;
  reserved1: number;
  reserved2: number;
}

declare var TECConversionInfo: TECConversionInfo;

declare function TECConvertText(encodingConverter: any, inputBuffer: string | any, inputBufferLength: number, actualInputLength: number, outputBuffer: string | any, outputBufferLength: number, actualOutputLength: number): number;
declare function TECConvertTextToMultipleEncodings(encodingConverter: any, inputBuffer: string | any, inputBufferLength: number, actualInputLength: number, outputBuffer: string | any, outputBufferLength: number, actualOutputLength: number, outEncodingsBuffer: TextEncodingRun, maxOutEncodingRuns: number, actualOutEncodingRuns: number): number;
interface TECConverterContextRec {
  pluginRec: string;
  sourceEncoding: number;
  destEncoding: number;
  reserved1: number;
  reserved2: number;
  bufferContext: TECBufferContextRec;
  contextRefCon: any;
  conversionProc: () => number;
  flushProc: () => number;
  clearContextInfoProc: () => number;
  options1: number;
  options2: number;
  pluginState: TECPluginStateRec;
}

declare var TECConverterContextRec: TECConverterContextRec;

declare function TECCopyTextEncodingInternetNameAndMIB(textEncoding: number, usage: number, encodingNamePtr: NSObject, mibEnumPtr: number): number;
declare function TECCountAvailableSniffers(numberOfEncodings: number): number;
declare function TECCountAvailableTextEncodings(numberEncodings: number): number;
declare function TECCountDestinationTextEncodings(inputEncoding: number, numberOfEncodings: number): number;
declare function TECCountDirectTextEncodingConversions(numberOfEncodings: number): number;
declare function TECCountMailTextEncodings(locale: number, numberEncodings: number): number;
declare function TECCountSubTextEncodings(inputEncoding: number, numberOfEncodings: number): number;
declare function TECCountWebTextEncodings(locale: number, numberEncodings: number): number;
declare function TECCreateConverter(newEncodingConverter: any, inputEncoding: number, outputEncoding: number): number;
declare function TECCreateConverterFromPath(newEncodingConverter: any, inPath: number, inEncodings: number): number;
declare function TECCreateOneToManyConverter(newEncodingConverter: any, inputEncoding: number, numOutputEncodings: number, outputEncodings: number): number;
declare function TECCreateSniffer(encodingSniffer: any, testEncodings: number, numTextEncodings: number): number;
declare function TECDisposeConverter(newEncodingConverter: any): number;
declare function TECDisposeSniffer(encodingSniffer: any): number;
interface TECEncodingPairRec {
  source: TextEncodingRec;
  dest: TextEncodingRec;
}

declare var TECEncodingPairRec: TECEncodingPairRec;

interface TECEncodingPairs {
  encodingPair: TECEncodingPairRec;
  flags: number;
  speed: number;
}

declare var TECEncodingPairs: TECEncodingPairs;

interface TECEncodingPairsRec {
  count: number;
  encodingPairs: TECEncodingPairs;
}

declare var TECEncodingPairsRec: TECEncodingPairsRec;

interface TECEncodingsListRec {
  count: number;
  encodings: TextEncodingRec;
}

declare var TECEncodingsListRec: TECEncodingsListRec;

declare function TECFlushMultipleEncodings(encodingConverter: any, outputBuffer: string | any, outputBufferLength: number, actualOutputLength: number, outEncodingsBuffer: TextEncodingRun, maxOutEncodingRuns: number, actualOutEncodingRuns: number): number;
declare function TECFlushText(encodingConverter: any, outputBuffer: string | any, outputBufferLength: number, actualOutputLength: number): number;
declare function TECGetAvailableSniffers(availableSniffers: number, maxAvailableSniffers: number, actualAvailableSniffers: number): number;
declare function TECGetAvailableTextEncodings(availableEncodings: number, maxAvailableEncodings: number, actualAvailableEncodings: number): number;
declare function TECGetDestinationTextEncodings(inputEncoding: number, destinationEncodings: number, maxDestinationEncodings: number, actualDestinationEncodings: number): number;
declare function TECGetDirectTextEncodingConversions(availableConversions: TECConversionInfo, maxAvailableConversions: number, actualAvailableConversions: number): number;
declare function TECGetEncodingList(encodingConverter: any, numEncodings: number, encodingList: string): number;
declare function TECGetInfo(tecInfo: TECInfo): number;
declare function TECGetMailTextEncodings(locale: number, availableEncodings: number, maxAvailableEncodings: number, actualAvailableEncodings: number): number;
declare function TECGetSubTextEncodings(inputEncoding: number, subEncodings: number, maxSubEncodings: number, actualSubEncodings: number): number;
declare function TECGetTextEncodingFromInternetName(textEncoding: number, encodingName: string | any): number;
declare function TECGetTextEncodingFromInternetNameOrMIB(textEncodingPtr: number, usage: number, encodingName: NSObject, mibEnum: number): number;
declare function TECGetTextEncodingInternetName(textEncoding: number, encodingName: number): number;
declare function TECGetWebTextEncodings(locale: number, availableEncodings: number, maxAvailableEncodings: number, actualAvailableEncodings: number): number;
interface TECInfo {
  format: number;
  tecVersion: number;
  tecTextConverterFeatures: number;
  tecUnicodeConverterFeatures: number;
  tecTextCommonFeatures: number;
  tecTextEncodingsFolderName: number;
  tecExtensionFileName: number;
  tecLowestTEFileVersion: number;
  tecHighestTEFileVersion: number;
}

declare var TECInfo: TECInfo;

interface TECInternetNameRec {
  offset: number;
  searchEncoding: TextEncodingRec;
  encodingNameLength: number;
  encodingName: number;
}

declare var TECInternetNameRec: TECInternetNameRec;

interface TECInternetNamesRec {
  count: number;
  InternetNames: TECInternetNameRec;
}

declare var TECInternetNamesRec: TECInternetNamesRec;

interface TECLocaleListToEncodingListRec {
  offset: number;
  count: number;
  locales: number;
}

declare var TECLocaleListToEncodingListRec: TECLocaleListToEncodingListRec;

interface TECLocaleToEncodingsListRec {
  count: number;
  localeListToEncodingList: TECLocaleListToEncodingListRec;
}

declare var TECLocaleToEncodingsListRec: TECLocaleToEncodingsListRec;

interface TECPluginDispatchTable {
  version: number;
  compatibleVersion: number;
  PluginID: number;
  PluginNewEncodingConverter: (p1: any, p2: TECConverterContextRec, p3: number, p4: number) => number;
  PluginClearContextInfo: (p1: any, p2: TECConverterContextRec) => number;
  PluginConvertTextEncoding: (p1: any, p2: TECConverterContextRec) => number;
  PluginFlushConversion: (p1: any, p2: TECConverterContextRec) => number;
  PluginDisposeEncodingConverter: (p1: any, p2: TECConverterContextRec) => number;
  PluginNewEncodingSniffer: (p1: any, p2: TECSnifferContextRec, p3: number) => number;
  PluginClearSnifferContextInfo: (p1: any, p2: TECSnifferContextRec) => number;
  PluginSniffTextEncoding: (p1: any, p2: TECSnifferContextRec) => number;
  PluginDisposeEncodingSniffer: (p1: any, p2: TECSnifferContextRec) => number;
  PluginGetCountAvailableTextEncodings: (p1: number, p2: number, p3: number) => number;
  PluginGetCountAvailableTextEncodingPairs: (p1: TECConversionInfo, p2: number, p3: number) => number;
  PluginGetCountDestinationTextEncodings: (p1: number, p2: number, p3: number, p4: number) => number;
  PluginGetCountSubTextEncodings: (p1: number, p2: number, p3: number, p4: number) => number;
  PluginGetCountAvailableSniffers: (p1: number, p2: number, p3: number) => number;
  PluginGetCountWebTextEncodings: (p1: number, p2: number, p3: number) => number;
  PluginGetCountMailTextEncodings: (p1: number, p2: number, p3: number) => number;
  PluginGetTextEncodingInternetName: (p1: number, p2: number) => number;
  PluginGetTextEncodingFromInternetName: (p1: number, p2: string) => number;
}

declare var TECPluginDispatchTable: TECPluginDispatchTable;

interface TECPluginStateRec {
  state1: number;
  state2: number;
  state3: number;
  state4: number;
  longState1: number;
  longState2: number;
  longState3: number;
  longState4: number;
}

declare var TECPluginStateRec: TECPluginStateRec;

declare function TECSetBasicOptions(encodingConverter: any, controlFlags: number): number;
declare function TECSniffTextEncoding(encodingSniffer: any, inputBuffer: string | any, inputBufferLength: number, testEncodings: number, numTextEncodings: number, numErrsArray: number, maxErrs: number, numFeaturesArray: number, maxFeatures: number): number;
interface TECSnifferContextRec {
  pluginRec: string;
  encoding: number;
  maxErrors: number;
  maxFeatures: number;
  textInputBuffer: string;
  textInputBufferEnd: string;
  numFeatures: number;
  numErrors: number;
  contextRefCon: any;
  sniffProc: () => number;
  clearContextInfoProc: () => number;
  pluginState: TECPluginStateRec;
}

declare var TECSnifferContextRec: TECSnifferContextRec;

interface TECSubTextEncodingRec {
  offset: number;
  searchEncoding: TextEncodingRec;
  count: number;
  subEncodings: TextEncodingRec;
}

declare var TECSubTextEncodingRec: TECSubTextEncodingRec;

interface TECSubTextEncodingsRec {
  count: number;
  subTextEncodingRec: TECSubTextEncodingRec;
}

declare var TECSubTextEncodingsRec: TECSubTextEncodingsRec;

interface TMTask {
  qLink: QElem;
  qType: number;
  tmAddr: (p1: TMTask) => void;
  tmCount: number;
  tmWakeUp: number;
  tmReserved: number;
}

declare var TMTask: TMTask;

interface TScriptingSizeResource {
  scriptingSizeFlags: number;
  minStackSize: number;
  preferredStackSize: number;
  maxStackSize: number;
  minHeapSize: number;
  preferredHeapSize: number;
  maxHeapSize: number;
}

declare var TScriptingSizeResource: TScriptingSizeResource;

interface TableDirectoryRecord {
  tableSignature: number;
  reserved: number;
  tableStartOffset: number;
  tableSize: number;
}

declare var TableDirectoryRecord: TableDirectoryRecord;

interface TextChunk {
  ckID: number;
  ckSize: number;
  text: number;
}

declare var TextChunk: TextChunk;

interface TextEncodingRec {
  base: number;
  variant: number;
  format: number;
}

declare var TextEncodingRec: TextEncodingRec;

interface TextEncodingRun {
  offset: number;
  textEncoding: number;
}

declare var TextEncodingRun: TextEncodingRun;

interface TextRange {
  fStart: number;
  fEnd: number;
  fHiliteStyle: number;
}

declare var TextRange: TextRange;

interface TextRangeArray {
  fNumOfRanges: number;
  fRange: TextRange;
}

declare var TextRangeArray: TextRangeArray;

interface TogglePB {
  togFlags: number;
  amChars: number;
  pmChars: number;
  reserved: number;
}

declare var TogglePB: TogglePB;

interface TokenBlock {
  source: string;
  sourceLength: number;
  tokenList: string;
  tokenLength: number;
  tokenCount: number;
  stringList: string;
  stringLength: number;
  stringCount: number;
  doString: boolean;
  doAppend: boolean;
  doAlphanumeric: boolean;
  doNest: boolean;
  leftDelims: number;
  rightDelims: number;
  leftComment: number;
  rightComment: number;
  escapeCode: number;
  decimalCode: number;
  itlResource: string;
  reserved: number;
}

declare var TokenBlock: TokenBlock;

interface TokenRec {
  theToken: number;
  position: string;
  length: number;
  stringPosition: string;
}

declare var TokenRec: TokenRec;

declare function TruncateForTextToUnicode(iTextToUnicodeInfo: any, iSourceLen: number, iSourceStr: any, iMaxLen: number, oTruncatedLen: number): number;
declare function TruncateForUnicodeToText(iUnicodeToTextInfo: any, iSourceLen: number, iSourceStr: number, iControlFlags: number, iMaxLen: number, oTruncatedLen: number): number;
declare function U32SetU(value: number): number;
declare function U64Add(left: number, right: number): number;
declare function U64And(left: number, right: number): boolean;
declare function U64BitwiseAnd(left: number, right: number): number;
declare function U64BitwiseEor(left: number, right: number): number;
declare function U64BitwiseNot(value: number): number;
declare function U64BitwiseOr(left: number, right: number): number;
declare function U64Div(dividend: number, divisor: number): number;
declare function U64Divide(dividend: number, divisor: number, remainder: number): number;
declare function U64Eor(left: number, right: number): boolean;
declare function U64Max(): number;
declare function U64Mod(dividend: number, divisor: number): number;
declare function U64Multiply(left: number, right: number): number;
declare function U64Not(value: number): boolean;
declare function U64Or(left: number, right: number): boolean;
declare function U64Set(value: number): number;
declare function U64SetU(value: number): number;
declare function U64ShiftLeft(value: number, shift: number): number;
declare function U64ShiftRight(value: number, shift: number): number;
declare function U64Subtract(left: number, right: number): number;
declare function UCCompareCollationKeys(key1Ptr: number, key1Length: number, key2Ptr: number, key2Length: number, equivalent: string | any, order: number): number;
declare function UCCompareText(collatorRef: any, text1Ptr: number, text1Length: number, text2Ptr: number, text2Length: number, equivalent: string | any, order: number): number;
declare function UCCompareTextDefault(options: number, text1Ptr: number, text1Length: number, text2Ptr: number, text2Length: number, equivalent: string | any, order: number): number;
declare function UCCompareTextNoLocale(options: number, text1Ptr: number, text1Length: number, text2Ptr: number, text2Length: number, equivalent: string | any, order: number): number;
declare function UCConvertCFAbsoluteTimeToLongDateTime(iCFTime: number, oLongDate: number): number;
declare function UCConvertCFAbsoluteTimeToSeconds(iCFTime: number, oSeconds: number): number;
declare function UCConvertCFAbsoluteTimeToUTCDateTime(iCFTime: number, oUTCDate: UTCDateTime): number;
declare function UCConvertLongDateTimeToCFAbsoluteTime(iLongTime: number, oCFTime: number): number;
declare function UCConvertSecondsToCFAbsoluteTime(iSeconds: number, oCFTime: number): number;
declare function UCConvertUTCDateTimeToCFAbsoluteTime(iUTCDate: UTCDateTime, oCFTime: number): number;
declare function UCCreateCollator(locale: any, opVariant: number, options: number, collatorRef: any): number;
declare function UCDisposeCollator(collatorRef: any): number;
declare function UCGetCharProperty(charPtr: number, textLength: number, propType: number, propValue: number): number;
declare function UCGetCollationKey(collatorRef: any, textPtr: number, textLength: number, maxKeySize: number, actualKeySize: number, collationKey: number): number;
interface UCKeyLayoutFeatureInfo {
  keyLayoutFeatureInfoFormat: number;
  reserved: number;
  maxOutputStringLength: number;
}

declare var UCKeyLayoutFeatureInfo: UCKeyLayoutFeatureInfo;

interface UCKeyModifiersToTableNum {
  keyModifiersToTableNumFormat: number;
  defaultTableNum: number;
  modifiersCount: number;
  tableNum: number;
}

declare var UCKeyModifiersToTableNum: UCKeyModifiersToTableNum;

interface UCKeySequenceDataIndex {
  keySequenceDataIndexFormat: number;
  charSequenceCount: number;
  charSequenceOffsets: number;
}

declare var UCKeySequenceDataIndex: UCKeySequenceDataIndex;

interface UCKeyStateEntryRange {
  curStateStart: number;
  curStateRange: number;
  deltaMultiplier: number;
  charData: number;
  nextState: number;
}

declare var UCKeyStateEntryRange: UCKeyStateEntryRange;

interface UCKeyStateEntryTerminal {
  curState: number;
  charData: number;
}

declare var UCKeyStateEntryTerminal: UCKeyStateEntryTerminal;

interface UCKeyStateRecord {
  stateZeroCharData: number;
  stateZeroNextState: number;
  stateEntryCount: number;
  stateEntryFormat: number;
  stateEntryData: number;
}

declare var UCKeyStateRecord: UCKeyStateRecord;

interface UCKeyStateRecordsIndex {
  keyStateRecordsIndexFormat: number;
  keyStateRecordCount: number;
  keyStateRecordOffsets: number;
}

declare var UCKeyStateRecordsIndex: UCKeyStateRecordsIndex;

interface UCKeyStateTerminators {
  keyStateTerminatorsFormat: number;
  keyStateTerminatorCount: number;
  keyStateTerminators: number;
}

declare var UCKeyStateTerminators: UCKeyStateTerminators;

interface UCKeyToCharTableIndex {
  keyToCharTableIndexFormat: number;
  keyToCharTableSize: number;
  keyToCharTableCount: number;
  keyToCharTableOffsets: number;
}

declare var UCKeyToCharTableIndex: UCKeyToCharTableIndex;

declare function UCKeyTranslate(keyLayoutPtr: UCKeyboardLayout, virtualKeyCode: number, keyAction: number, modifierKeyState: number, keyboardType: number, keyTranslateOptions: number, deadKeyState: number, maxStringLength: number, actualStringLength: number, unicodeString: number): number;
interface UCKeyboardLayout {
  keyLayoutHeaderFormat: number;
  keyLayoutDataVersion: number;
  keyLayoutFeatureInfoOffset: number;
  keyboardTypeCount: number;
  keyboardTypeList: UCKeyboardTypeHeader;
}

declare var UCKeyboardLayout: UCKeyboardLayout;

interface UCKeyboardTypeHeader {
  keyboardTypeFirst: number;
  keyboardTypeLast: number;
  keyModifiersToTableNumOffset: number;
  keyToCharTableIndexOffset: number;
  keyStateRecordsIndexOffset: number;
  keyStateTerminatorsOffset: number;
  keySequenceDataIndexOffset: number;
}

declare var UCKeyboardTypeHeader: UCKeyboardTypeHeader;

declare function UCTypeSelectAddKeyToSelector(inRef: any, inText: NSObject, inEventTime: number, updateFlag: string | any): number;
declare function UCTypeSelectCompare(ref: any, inText: NSObject, result: number): number;
declare function UCTypeSelectCreateSelector(locale: any, opVariant: number, options: number, newSelector: any): number;
declare function UCTypeSelectFindItem(ref: any, listSize: number, listDataPtr: any, refcon: any, userUPP: (p1: number, p2: any, p3: any, p4: NSObject, p5: number) => boolean, closestItem: number): number;
declare function UCTypeSelectFlushSelectorData(ref: any): number;
declare function UCTypeSelectReleaseSelector(ref: any): number;
declare function UCTypeSelectWalkList(ref: any, currSelect: NSObject, direction: number, listSize: number, listDataPtr: any, refcon: any, userUPP: (p1: number, p2: any, p3: any, p4: NSObject, p5: number) => boolean, closestItem: number): number;
declare function UCTypeSelectWouldResetBuffer(inRef: any, inText: NSObject, inEventTime: number): boolean;
declare function UInt64ToLongDouble(value: number): number;
declare function UInt64ToSInt64(value: number): number;

declare const UNORDERED: number;
interface UTCDateTime {
  highSeconds: number;
  lowSeconds: number;
  fraction: number;
}

declare var UTCDateTime: UTCDateTime;

declare function UTCreateStringForOSType(inOSType: number): NSObject;
declare function UTGetOSTypeFromString(inString: NSObject): number;
declare function UTTypeConformsTo(inUTI: NSObject, inConformsToUTI: NSObject): boolean;
declare function UTTypeCopyAllTagsWithClass(inUTI: NSObject, inTagClass: NSObject): NSObject;
declare function UTTypeCopyDeclaration(inUTI: NSObject): NSObject;
declare function UTTypeCopyDeclaringBundleURL(inUTI: NSObject): NSObject;
declare function UTTypeCopyDescription(inUTI: NSObject): NSObject;
declare function UTTypeCopyPreferredTagWithClass(inUTI: NSObject, inTagClass: NSObject): NSObject;
declare function UTTypeCreateAllIdentifiersForTag(inTagClass: NSObject, inTag: NSObject, inConformingToUTI: NSObject): NSObject;
declare function UTTypeCreatePreferredIdentifierForTag(inTagClass: NSObject, inTag: NSObject, inConformingToUTI: NSObject): NSObject;
declare function UTTypeEqual(inUTI1: NSObject, inUTI2: NSObject): boolean;
declare function UTTypeIsDeclared(inUTI: NSObject): boolean;
declare function UTTypeIsDynamic(inUTI: NSObject): boolean;
interface UnicodeMapping {
  unicodeEncoding: number;
  otherEncoding: number;
  mappingVersion: number;
}

declare var UnicodeMapping: UnicodeMapping;

interface UntokenTable {
  len: number;
  lastToken: number;
  index: number;
}

declare var UntokenTable: UntokenTable;

declare function UpgradeScriptInfoToTextEncoding(iTextScriptID: number, iTextLanguageID: number, iRegionID: number, iTextFontname: string | any, oEncoding: number): number;

declare const UsrActivity: number;
interface VolMountInfoHeader {
  length: number;
  media: number;
}

declare var VolMountInfoHeader: VolMountInfoHeader;

interface VolumeMountInfoHeader {
  length: number;
  media: number;
  flags: number;
}

declare var VolumeMountInfoHeader: VolumeMountInfoHeader;


declare const WDEFNFnd: number;
interface WSClientContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => NSObject;
}

declare var WSClientContext: WSClientContext;

interface WritingCode {
  theScriptCode: number;
  theLangCode: number;
}

declare var WritingCode: WritingCode;

interface XLibContainerHeader {
  tag1: number;
  tag2: number;
  currentFormat: number;
  containerStringsOffset: number;
  exportHashOffset: number;
  exportKeyOffset: number;
  exportSymbolOffset: number;
  exportNamesOffset: number;
  exportHashTablePower: number;
  exportedSymbolCount: number;
  fragNameOffset: number;
  fragNameLength: number;
  dylibPathOffset: number;
  dylibPathLength: number;
  cpuFamily: number;
  cpuModel: number;
  dateTimeStamp: number;
  currentVersion: number;
  oldDefVersion: number;
  oldImpVersion: number;
}

declare var XLibContainerHeader: XLibContainerHeader;

interface XLibExportedSymbol {
  classAndName: number;
  bpOffset: number;
}

declare var XLibExportedSymbol: XLibExportedSymbol;


declare const _MixedModeMagic: number;

declare const abbrevDate: number;

declare const abortErr: number;

declare const acuteUprA: number;

declare const acuteUprI: number;

declare const acuteUprO: number;

declare const acuteUprU: number;

declare const addRefFailed: number;

declare const addResFailed: number;

declare const aeBuildSyntaxBadData: number;

declare const aeBuildSyntaxBadDesc: number;

declare const aeBuildSyntaxBadEOF: number;

declare const aeBuildSyntaxBadHex: number;

declare const aeBuildSyntaxBadNegative: number;

declare const aeBuildSyntaxBadToken: number;

declare const aeBuildSyntaxCoercedList: number;

declare const aeBuildSyntaxMissingQuote: number;

declare const aeBuildSyntaxNoCloseBrace: number;

declare const aeBuildSyntaxNoCloseBracket: number;

declare const aeBuildSyntaxNoCloseHex: number;

declare const aeBuildSyntaxNoCloseParen: number;

declare const aeBuildSyntaxNoCloseString: number;

declare const aeBuildSyntaxNoColon: number;

declare const aeBuildSyntaxNoEOF: number;

declare const aeBuildSyntaxNoErr: number;

declare const aeBuildSyntaxNoKey: number;

declare const aeBuildSyntaxOddHex: number;

declare const aeBuildSyntaxUncoercedDoubleAt: number;

declare const aeBuildSyntaxUncoercedHex: number;

declare const afpAccessDenied: number;

declare const afpAlreadyLoggedInErr: number;

declare const afpAlreadyMounted: number;

declare const afpAuthContinue: number;

declare const afpBadDirIDType: number;

declare const afpBadIDErr: number;

declare const afpBadUAM: number;

declare const afpBadVersNum: number;

declare const afpBitmapErr: number;

declare const afpCallNotAllowed: number;

declare const afpCallNotSupported: number;

declare const afpCantMountMoreSrvre: number;

declare const afpCantMove: number;

declare const afpCantRename: number;

declare const afpCatalogChanged: number;

declare const afpContainsSharedErr: number;

declare const afpDenyConflict: number;

declare const afpDiffVolErr: number;

declare const afpDirNotEmpty: number;

declare const afpDirNotFound: number;

declare const afpDiskFull: number;

declare const afpEofError: number;

declare const afpFileBusy: number;

declare const afpFlatVol: number;

declare const afpIDExists: number;

declare const afpIDNotFound: number;

declare const afpIconTypeError: number;

declare const afpInsideSharedErr: number;

declare const afpInsideTrashErr: number;

declare const afpItemNotFound: number;

declare const afpLockErr: number;

declare const afpMiscErr: number;

declare const afpNoMoreLocks: number;

declare const afpNoServer: number;

declare const afpObjectExists: number;

declare const afpObjectLocked: number;

declare const afpObjectNotFound: number;

declare const afpObjectTypeErr: number;

declare const afpParmErr: number;

declare const afpPwdExpiredErr: number;

declare const afpPwdNeedsChangeErr: number;

declare const afpPwdPolicyErr: number;

declare const afpPwdSameErr: number;

declare const afpPwdTooShortErr: number;

declare const afpRangeNotLocked: number;

declare const afpRangeOverlap: number;

declare const afpSameNodeErr: number;

declare const afpSameObjectErr: number;

declare const afpServerGoingDown: number;

declare const afpSessClosed: number;

declare const afpTooManyFilesOpen: number;

declare const afpUserNotAuth: number;

declare const afpVolLocked: number;

declare const appIsDaemon: number;

declare const appMemFullErr: number;

declare const appModeErr: number;

declare const appVersionTooOld: number;

declare const appleLogo: number;

declare const appleMenuFolderIconResource: number;

declare const asiAliasName: number;

declare const asiParentName: number;

declare const asiServerName: number;

declare const asiVolumeName: number;

declare const asiZoneName: number;

declare const aspBadVersNum: number;

declare const aspBufTooSmall: number;

declare const aspNoAck: number;

declare const aspNoMoreSess: number;

declare const aspNoServers: number;

declare const aspParamErr: number;

declare const aspServerBusy: number;

declare const aspSessClosed: number;

declare const aspSizeErr: number;

declare const aspTooMany: number;

declare const atomIndexInvalidErr: number;

declare const atomsNotOfSameTypeErr: number;

declare const atpBadRsp: number;

declare const atpLenErr: number;

declare const authFailErr: number;

declare const auxiliaryExportDataUnavailable: number;

declare const bAccessCntl: number;

declare const bAllowCDiDataHandler: number;

declare const bAncestorModDateChanges: number;

declare const bDoNotDisplay: number;

declare const bHasBTreeMgr: number;

declare const bHasBlankAccessPrivileges: number;

declare const bHasCatSearch: number;

declare const bHasCopyFile: number;

declare const bHasDesktopMgr: number;

declare const bHasDirectIO: number;

declare const bHasExtFSVol: number;

declare const bHasFileIDs: number;

declare const bHasFolderLock: number;

declare const bHasMoveRename: number;

declare const bHasOpenDeny: number;

declare const bHasPersonalAccessPrivileges: number;

declare const bHasShortName: number;

declare const bHasUserGroupList: number;

declare const bIsAutoMounted: number;

declare const bIsCasePreserving: number;

declare const bIsCaseSensitive: number;

declare const bIsEjectable: number;

declare const bIsOnExternalBus: number;

declare const bIsOnInternalBus: number;

declare const bIsRemovable: number;

declare const bL2PCanMapFileBlocks: number;

declare const bLimitFCBs: number;

declare const bLocalWList: number;

declare const bNoBootBlks: number;

declare const bNoDeskItems: number;

declare const bNoLclSync: number;

declare const bNoMiniFndr: number;

declare const bNoRootTimes: number;

declare const bNoSwitchTo: number;

declare const bNoSysDir: number;

declare const bNoVNEdit: number;

declare const bNoVolumeSizes: number;

declare const bParentModDateChanges: number;

declare const bSupports2TBFiles: number;

declare const bSupportsAsyncRequests: number;

declare const bSupportsExclusiveLocks: number;

declare const bSupportsExtendedFileSecurity: number;

declare const bSupportsFSCatalogSearch: number;

declare const bSupportsFSExchangeObjects: number;

declare const bSupportsHFSPlusAPIs: number;

declare const bSupportsJournaling: number;

declare const bSupportsLongNames: number;

declare const bSupportsMultiScriptNames: number;

declare const bSupportsNamedForks: number;

declare const bSupportsSubtreeIterators: number;

declare const bSupportsSymbolicLinks: number;

declare const bSupportsTrashVolumeCache: number;

declare const bTrshOffLine: number;

declare const badATPSkt: number;

declare const badBtSlpErr: number;

declare const badBuffNum: number;

declare const badCallOrderErr: number;

declare const badChannel: number;

declare const badCksmErr: number;

declare const badCodecCharacterizationErr: number;

declare const badComponentInstance: number;

declare const badComponentSelector: number;

declare const badComponentType: number;

declare const badControllerHeight: number;

declare const badDBtSlp: number;

declare const badDCksum: number;

declare const badDataRefIndex: number;

declare const badDelim: number;

declare const badDepthErr: number;

declare const badDictFormat: number;

declare const badDragFlavorErr: number;

declare const badDragItemErr: number;

declare const badDragRefErr: number;

declare const badEditIndex: number;

declare const badEditList: number;

declare const badEditionFileErr: number;

declare const badEnding: number;

declare const badExtResource: number;

declare const badFCBErr: number;

declare const badFidErr: number;

declare const badFileFormat: number;

declare const badFolderDescErr: number;

declare const badFormat: number;

declare const badImageDescription: number;

declare const badImageErr: number;

declare const badImageRgnErr: number;

declare const badInputText: number;

declare const badLocNameErr: number;

declare const badMDBErr: number;

declare const badMovErr: number;

declare const badPortNameErr: number;

declare const badProfileError: number;

declare const badPublicMovieAtom: number;

declare const badReqErr: number;

declare const badRoutingSizeErr: number;

declare const badSGChannel: number;

declare const badScrapRefErr: number;

declare const badSectionErr: number;

declare const badServiceMethodErr: number;

declare const badSubPartErr: number;

declare const badTrackIndex: number;

declare const badTranslationSpecErr: number;

declare const badUnitErr: number;

declare const baseDblQuote: number;

declare const baseSingQuote: number;

declare const bdNamErr: number;

declare const breakRecd: number;

declare const breveMark: number;

declare const btDupRecErr: number;

declare const btKeyAttrErr: number;

declare const btKeyLenErr: number;

declare const btNoSpace: number;

declare const btRecNotFnd: number;

declare const buf2SmallErr: number;

declare const bufTooSmall: number;

declare const bufferIsSmall: number;

declare const buffersTooSmall: number;

declare const cADBAddress: number;

declare const cAEList: number;

declare const cAddressSpec: number;

declare const cAppleTalkAddress: number;

declare const cApplication: number;

declare const cArc: number;

declare const cBoolean: number;

declare const cBusAddress: number;

declare const cCell: number;

declare const cChar: number;

declare const cColorTable: number;

declare const cColumn: number;

declare const cDepthErr: number;

declare const cDevErr: number;

declare const cDevSpec: number;

declare const cDocument: number;

declare const cDrawingArea: number;

declare const cEnumeration: number;

declare const cEthernetAddress: number;

declare const cFTPItem: number;

declare const cFile: number;

declare const cFireWireAddress: number;

declare const cFixed: number;

declare const cFixedPoint: number;

declare const cFixedRectangle: number;

declare const cGraphicLine: number;

declare const cGraphicObject: number;

declare const cGraphicShape: number;

declare const cGraphicText: number;

declare const cGroupedGraphic: number;

declare const cHTML: number;

declare const cIPAddress: number;

declare const cInsertionLoc: number;

declare const cInsertionPoint: number;

declare const cInternetAddress: number;

declare const cIntlText: number;

declare const cIntlWritingCode: number;

declare const cItem: number;

declare const cKeystroke: number;

declare const cLine: number;

declare const cLocalTalkAddress: number;

declare const cLongDateTime: number;

declare const cLongFixed: number;

declare const cLongFixedPoint: number;

declare const cLongFixedRectangle: number;

declare const cLongInteger: number;

declare const cLongPoint: number;

declare const cLongRectangle: number;

declare const cMachineLoc: number;

declare const cMatchErr: number;

declare const cMenu: number;

declare const cMenuItem: number;

declare const cNoMemErr: number;

declare const cObject: number;

declare const cObjectSpecifier: number;

declare const cOpenableObject: number;

declare const cOval: number;

declare const cPICT: number;

declare const cParagraph: number;

declare const cPixel: number;

declare const cPixelMap: number;

declare const cPolygon: number;

declare const cProperty: number;

declare const cProtectErr: number;

declare const cQDPoint: number;

declare const cQDRectangle: number;

declare const cRGBColor: number;

declare const cRangeErr: number;

declare const cRectangle: number;

declare const cResErr: number;

declare const cRotation: number;

declare const cRoundedRectangle: number;

declare const cRow: number;

declare const cSCSIAddress: number;

declare const cSelection: number;

declare const cShortInteger: number;

declare const cTable: number;

declare const cTempMemErr: number;

declare const cText: number;

declare const cTextFlow: number;

declare const cTextStyles: number;

declare const cTokenRingAddress: number;

declare const cType: number;

declare const cURL: number;

declare const cUSBAddress: number;

declare const cVersion: number;

declare const cWindow: number;

declare const cWord: number;

declare const calArabicCivil: number;

declare const calArabicLunar: number;

declare const calCoptic: number;

declare const calGregorian: number;

declare const calJapanese: number;

declare const calJewish: number;

declare const calPersian: number;

declare const callNotSupportedByNodeErr: number;

declare const cannotBeLeafAtomErr: number;

declare const cannotDeferErr: number;

declare const cannotFindAtomErr: number;

declare const cannotMakeContiguousErr: number;

declare const cannotMoveAttachedController: number;

declare const cannotSetWidthOfAttachedController: number;

declare const cantCreatePickerWindow: number;

declare const cantCreateSingleForkFile: number;

declare const cantDoThatInCurrentMode: number;

declare const cantEnableTrack: number;

declare const cantFindHandler: number;

declare const cantGetFlavorErr: number;

declare const cantLoadPackage: number;

declare const cantLoadPickMethodErr: number;

declare const cantLoadPicker: number;

declare const cantOpenHandler: number;

declare const cantPutPublicMovieAtom: number;

declare const cantReadUtilities: number;

declare const cantReceiveFromSynthesizerOSErr: number;

declare const cantSendToSynthesizerOSErr: number;

declare const cantStepErr: number;

declare const catChangedErr: number;

declare const cbNotFound: number;
interface ccntTokenRecord {
  tokenClass: number;
  token: AEDesc;
}

declare var ccntTokenRecord: ccntTokenRecord;


declare const cedilla: number;

declare const centeredDot: number;

declare const century: number;

declare const cfragAbortClosureErr: number;

declare const cfragArchitectureErr: number;

declare const cfragCFMInternalErr: number;

declare const cfragCFMStartupErr: number;

declare const cfragCFragRsrcErr: number;

declare const cfragClosureIDErr: number;

declare const cfragConnectionIDErr: number;

declare const cfragContainerIDErr: number;

declare const cfragContextIDErr: number;

declare const cfragDupRegistrationErr: number;

declare const cfragExecFileRefErr: number;

declare const cfragFileSizeErr: number;

declare const cfragFirstErrCode: number;

declare const cfragFirstReservedCode: number;

declare const cfragFragmentCorruptErr: number;

declare const cfragFragmentFormatErr: number;

declare const cfragFragmentUsageErr: number;

declare const cfragImportTooNewErr: number;

declare const cfragImportTooOldErr: number;

declare const cfragInitAtBootErr: number;

declare const cfragInitFunctionErr: number;

declare const cfragInitLoopErr: number;

declare const cfragInitOrderErr: number;

declare const cfragLastErrCode: number;

declare const cfragLibConnErr: number;

declare const cfragMapFileErr: number;

declare const cfragNoApplicationErr: number;

declare const cfragNoClientMemErr: number;

declare const cfragNoIDsErr: number;

declare const cfragNoLibraryErr: number;

declare const cfragNoPositionErr: number;

declare const cfragNoPrivateMemErr: number;

declare const cfragNoRegistrationErr: number;

declare const cfragNoSectionErr: number;

declare const cfragNoSymbolErr: number;

declare const cfragNotClosureErr: number;

declare const cfragOutputLengthErr: number;

declare const cfragReservedCode_1: number;

declare const cfragReservedCode_2: number;

declare const cfragReservedCode_3: number;

declare const cfragRsrcForkErr: number;

declare const cfragStdFolderErr: number;

declare const cfragUnresolvedErr: number;

declare const channelBusy: number;

declare const channelNotBusy: number;

declare const circumflex: number;

declare const circumflexUprA: number;

declare const circumflexUprE: number;

declare const circumflexUprI: number;

declare const circumflexUprO: number;

declare const circumflexUprU: number;

declare const ckSumErr: number;

declare const clkRdErr: number;

declare const clkWrErr: number;

declare const closErr: number;

declare const cmCantConcatenateError: number;

declare const cmCantCopyModifiedV1Profile: number;

declare const cmCantDeleteElement: number;

declare const cmCantDeleteProfile: number;

declare const cmCantGamutCheckError: number;

declare const cmCantXYZ: number;

declare const cmElementTagNotFound: number;

declare const cmErrIncompatibleProfile: number;

declare const cmFatalProfileErr: number;

declare const cmIndexRangeErr: number;

declare const cmInvalidColorSpace: number;

declare const cmInvalidDstMap: number;

declare const cmInvalidProfile: number;

declare const cmInvalidProfileComment: number;

declare const cmInvalidProfileLocation: number;

declare const cmInvalidSearch: number;

declare const cmInvalidSrcMap: number;

declare const cmMethodError: number;

declare const cmMethodNotFound: number;

declare const cmNamedColorNotFound: number;

declare const cmNoCurrentProfile: number;

declare const cmNoGDevicesError: number;

declare const cmProfileError: number;

declare const cmProfileNotFound: number;

declare const cmProfilesIdentical: number;

declare const cmRangeOverFlow: number;

declare const cmSearchError: number;

declare const cmUnsupportedDataType: number;

declare const cmpAliasNoFlags: number;

declare const cmpAliasOnlyThisFile: number;

declare const cmpIsMissing: number;

declare const cmpThreadSafe: number;

declare const cmpWantsRegisterMessage: number;

declare const codecAbortErr: number;

declare const codecBadDataErr: number;

declare const codecCantQueueErr: number;

declare const codecCantWhenErr: number;

declare const codecConditionErr: number;

declare const codecDataVersErr: number;

declare const codecDisabledErr: number;

declare const codecDroppedFrameErr: number;

declare const codecErr: number;

declare const codecExtensionNotFoundErr: number;

declare const codecImageBufErr: number;

declare const codecNeedAccessKeyErr: number;

declare const codecNeedToFlushChainErr: number;

declare const codecNoMemoryPleaseWaitErr: number;

declare const codecNothingToBlitErr: number;

declare const codecOffscreenFailedErr: number;

declare const codecOffscreenFailedPleaseRetryErr: number;

declare const codecOpenErr: number;

declare const codecParameterDialogConfirm: number;

declare const codecScreenBufErr: number;

declare const codecSizeErr: number;

declare const codecSpoolErr: number;

declare const codecUnimpErr: number;

declare const codecWouldOffscreenErr: number;

declare const collectionIndexRangeErr: number;

declare const collectionItemLockedErr: number;

declare const collectionItemNotFoundErr: number;

declare const collectionVersionErr: number;

declare const colorSyncNotInstalled: number;

declare const colorsRequestedErr: number;

declare const componentAutoVersionIncludeFlags: number;

declare const componentDllEntryNotFoundErr: number;

declare const componentDllLoadErr: number;

declare const componentDoAutoVersion: number;

declare const componentDontRegister: number;

declare const componentHasMultiplePlatforms: number;

declare const componentLoadResident: number;

declare const componentNotCaptured: number;

declare const componentNotThreadSafeErr: number;

declare const componentWantsUnregister: number;

declare const connectionInvalid: number;

declare const constraintReachedErr: number;

declare const containerAlreadyOpenWrn: number;

declare const containerNotFoundWrn: number;

declare const controlErr: number;

declare const controlHandleInvalidErr: number;

declare const controlInvalidDataVersionErr: number;

declare const controlPanelFolderIconResource: number;

declare const controlPropertyInvalid: number;

declare const controlPropertyNotFoundErr: number;

declare const controllerBoundsNotExact: number;

declare const controllerHasFixedHeight: number;

declare const corErr: number;

declare const coreFoundationUnknownErr: number;

declare const couldNotParseSourceFileErr: number;

declare const couldNotResolveDataRef: number;

declare const couldNotUseAnExistingSample: number;

declare const couldntGetRequiredComponent: number;

declare const crash: number;

declare const curNumberPartsVersion: number;

declare const currLeadingZ: number;

declare const currNegSym: number;

declare const currSymLead: number;

declare const currTrailingZ: number;

declare const currentCurLang: number;

declare const currentDefLang: number;

declare const dInstErr: number;

declare const dRemovErr: number;

declare const dataAlreadyClosed: number;

declare const dataAlreadyOpenForWrite: number;

declare const dataNoDataRef: number;

declare const dataNotOpenForRead: number;

declare const dataNotOpenForWrite: number;

declare const dataVerErr: number;

declare const dateStdMask: number;

declare const dateTimeInvalid: number;

declare const dateTimeNotFound: number;

declare const dayField: number;

declare const dayLdingZ: number;

declare const dayMask: number;

declare const dayOfWeekField: number;

declare const dayOfWeekMask: number;

declare const dayOfYearField: number;

declare const dayOfYearMask: number;

declare const dblDagger: number;

declare const dceExtErr: number;

declare const dcmBadDataSizeErr: number;

declare const dcmBadDictionaryErr: number;

declare const dcmBadFeatureErr: number;

declare const dcmBadFieldInfoErr: number;

declare const dcmBadFieldTypeErr: number;

declare const dcmBadFindMethodErr: number;

declare const dcmBadKeyErr: number;

declare const dcmBadPropertyErr: number;

declare const dcmBlockFullErr: number;

declare const dcmBufferOverflowErr: number;

declare const dcmDictionaryBusyErr: number;

declare const dcmDictionaryNotOpenErr: number;

declare const dcmDupRecordErr: number;

declare const dcmIterationCompleteErr: number;

declare const dcmNecessaryFieldErr: number;

declare const dcmNoAccessMethodErr: number;

declare const dcmNoFieldErr: number;

declare const dcmNoRecordErr: number;

declare const dcmNotDictionaryErr: number;

declare const dcmParamErr: number;

declare const dcmPermissionErr: number;

declare const dcmProtectedErr: number;

declare const dcmTooManyKeyErr: number;

declare const ddpLenErr: number;

declare const ddpSktErr: number;

declare const debuggingDuplicateOptionErr: number;

declare const debuggingDuplicateSignatureErr: number;

declare const debuggingExecutionContextErr: number;

declare const debuggingInvalidNameErr: number;

declare const debuggingInvalidOptionErr: number;

declare const debuggingInvalidSignatureErr: number;

declare const debuggingNoCallbackErr: number;

declare const debuggingNoMatchErr: number;
declare function dec2numl(d: decimal): number;
interface decform {
  style: number;
  unused: number;
  digits: number;
}

declare var decform: decform;

interface decimal {
  sgn: number;
  unused: number;
  exp: number;
  sig: { length: number; text: number; unused: number; };
}

declare var decimal: decimal;


declare const defaultComponentAnyFlags: number;

declare const defaultComponentAnyFlagsAnyManufacturer: number;

declare const defaultComponentAnyFlagsAnyManufacturerAnySubType: number;

declare const defaultComponentAnyManufacturer: number;

declare const defaultComponentAnySubType: number;

declare const defaultComponentIdentical: number;

declare const defaultPhysicalEntryCount: number;

declare const delimPad: number;

declare const desktopDamagedErr: number;

declare const desktopIconResource: number;

declare const destPortErr: number;

declare const deviceCantMeetRequest: number;

declare const diaeresisUprE: number;

declare const diaeresisUprI: number;

declare const diaeresisUprY: number;

declare const dialogNoTimeoutErr: number;

declare const diffVolErr: number;

declare const digiUnimpErr: number;

declare const dirFulErr: number;

declare const dirNFErr: number;

declare const directXObjectAlreadyExists: number;

declare const dmy: number;

declare const dotlessLwrI: number;

declare const doubleAcute: number;

declare const dragNotAcceptedErr: number;

declare const driverHardwareGoneErr: number;

declare const dropFolderIconResource: number;

declare const drvQType: number;

declare const ds32BitMode: number;

declare const dsAddressErr: number;

declare const dsBadLaunch: number;

declare const dsBadLibrary: number;

declare const dsBadPatch: number;

declare const dsBadPatchHeader: number;

declare const dsBadSANEOpcode: number;

declare const dsBadSlotInt: number;

declare const dsBadStartupDisk: number;

declare const dsBufPtrTooLow: number;

declare const dsBusError: number;

declare const dsCDEFNotFound: number;

declare const dsCantHoldSystemHeap: number;

declare const dsChkErr: number;

declare const dsCoreErr: number;

declare const dsDirtyDisk: number;

declare const dsDisassemblerInstalled: number;

declare const dsExtensionsDisabled: number;

declare const dsFPErr: number;

declare const dsFSErr: number;

declare const dsFinderErr: number;

declare const dsForcedQuit: number;

declare const dsGibblyMovedToDisabledFolder: number;

declare const dsGreeting: number;

declare const dsHD20Installed: number;

declare const dsHMenuFindErr: number;

declare const dsIOCoreErr: number;

declare const dsIllInstErr: number;

declare const dsIrqErr: number;

declare const dsLineAErr: number;

declare const dsLineFErr: number;

declare const dsLoadErr: number;

declare const dsLostConnectionToNetworkDisk: number;

declare const dsMBATAPISysError: number;

declare const dsMBATASysError: number;

declare const dsMBExternFlpySysError: number;

declare const dsMBFlpySysError: number;

declare const dsMBSysError: number;

declare const dsMBarNFnd: number;

declare const dsMDEFNotFound: number;

declare const dsMacOSROMVersionTooOld: number;

declare const dsMacsBugInstalled: number;

declare const dsMemFullErr: number;

declare const dsMiscErr: number;

declare const dsMixedModeFailure: number;

declare const dsMustUseFCBAccessors: number;

declare const dsNeedToWriteBootBlocks: number;

declare const dsNoExtsDisassembler: number;

declare const dsNoExtsMacsBug: number;

declare const dsNoFPU: number;

declare const dsNoPackErr: number;

declare const dsNoPatch: number;

declare const dsNoPk1: number;

declare const dsNoPk2: number;

declare const dsNoPk3: number;

declare const dsNoPk4: number;

declare const dsNoPk5: number;

declare const dsNoPk6: number;

declare const dsNoPk7: number;

declare const dsNotEnoughRAMToBoot: number;

declare const dsNotThe1: number;

declare const dsOldSystem: number;

declare const dsOvflowErr: number;

declare const dsPCCardATASysError: number;

declare const dsParityErr: number;

declare const dsPrivErr: number;

declare const dsRAMDiskTooBig: number;

declare const dsReinsert: number;

declare const dsRemoveDisk: number;

declare const dsSCSIWarn: number;

declare const dsShutDownOrRestart: number;

declare const dsShutDownOrResume: number;

declare const dsStknHeap: number;

declare const dsSwitchOffOrRestart: number;

declare const dsSysErr: number;

declare const dsSystemFileErr: number;

declare const dsSystemRequiresPowerPC: number;

declare const dsTraceErr: number;

declare const dsUnBootableSystem: number;

declare const dsVMBadBackingStore: number;

declare const dsVMDeferredFuncTableFull: number;

declare const dsWDEFNotFound: number;

declare const dsWriteToSupervisorStackGuardPage: number;

declare const dsZeroDivErr: number;

declare const dskFulErr: number;

declare const dtQType: number;

declare const dummyType: number;

declare const dupFNErr: number;

declare const duplicateAtomTypeAndIDErr: number;

declare const duplicateFlavorErr: number;

declare const duplicateFolderDescErr: number;

declare const duplicateHandlerErr: number;

declare const duplicateRoutingErr: number;

declare const duplicateScrapFlavorErr: number;

declare const durationDay: number;

declare const durationForever: number;

declare const durationHour: number;

declare const durationMicrosecond: number;

declare const durationMillisecond: number;

declare const durationMinute: number;

declare const durationNoWait: number;

declare const durationSecond: number;

declare const dym: number;

declare const eADB: number;

declare const eAddressSpec: number;

declare const eAnalogAudio: number;

declare const eAppleTalk: number;

declare const eAudioLineIn: number;

declare const eAudioLineOut: number;

declare const eAudioOut: number;

declare const eBus: number;

declare const eCDROM: number;

declare const eCapsLockDown: number;

declare const eClearKey: number;

declare const eCommSlot: number;

declare const eCommandDown: number;

declare const eConduit: number;

declare const eControlDown: number;

declare const eDVD: number;

declare const eDeleteKey: number;

declare const eDeviceType: number;

declare const eDigitalAudio: number;

declare const eDisplay: number;

declare const eDownArrowKey: number;

declare const eEndKey: number;

declare const eEnterKey: number;

declare const eEscapeKey: number;

declare const eEthernet: number;

declare const eF10Key: number;

declare const eF11Key: number;

declare const eF12Key: number;

declare const eF13Key: number;

declare const eF14Key: number;

declare const eF15Key: number;

declare const eF1Key: number;

declare const eF2Key: number;

declare const eF3Key: number;

declare const eF4Key: number;

declare const eF5Key: number;

declare const eF6Key: number;

declare const eF7Key: number;

declare const eF8Key: number;

declare const eF9Key: number;

declare const eFireWire: number;

declare const eFloppy: number;

declare const eForwardDelKey: number;

declare const eHD: number;

declare const eHelpKey: number;

declare const eHomeKey: number;

declare const eIP: number;

declare const eIRTalk: number;

declare const eInfrared: number;

declare const eIrDA: number;

declare const eKeyKind: number;

declare const eKeyboard: number;

declare const eLCD: number;

declare const eLeftArrowKey: number;

declare const eLenErr: number;

declare const eLocalTalk: number;

declare const eMacIP: number;

declare const eMacVideo: number;

declare const eMicrophone: number;

declare const eModem: number;

declare const eModemPort: number;

declare const eModemPrinterPort: number;

declare const eModifiers: number;

declare const eMonitorOut: number;

declare const eMouse: number;

declare const eMultiErr: number;

declare const eNuBus: number;

declare const eNuBusCard: number;

declare const eOptionDown: number;

declare const ePCIbus: number;

declare const ePCIcard: number;

declare const ePCcard: number;

declare const ePDScard: number;

declare const ePDSslot: number;

declare const ePPP: number;

declare const ePageDownKey: number;

declare const ePageUpKey: number;

declare const ePointingDevice: number;

declare const ePostScript: number;

declare const ePrinter: number;

declare const ePrinterPort: number;

declare const eProtocol: number;

declare const eReturnKey: number;

declare const eRightArrowKey: number;

declare const eSCSI: number;

declare const eSVGA: number;

declare const eScheme: number;

declare const eSerial: number;

declare const eShiftDown: number;

declare const eSpeakers: number;

declare const eStorageDevice: number;

declare const eSvideo: number;

declare const eTabKey: number;

declare const eTokenRing: number;

declare const eTrackball: number;

declare const eTrackpad: number;

declare const eUSB: number;

declare const eUpArrowKey: number;

declare const eVideoIn: number;

declare const eVideoMonitor: number;

declare const eVideoOut: number;

declare const editingNotAllowed: number;

declare const editionMgrInitErr: number;

declare const emptyPathErr: number;

declare const endOfDataReached: number;

declare const enumArrows: number;

declare const enumJustification: number;

declare const enumKeyForm: number;

declare const enumPosition: number;

declare const enumProtection: number;

declare const enumQuality: number;

declare const enumSaveOptions: number;

declare const enumStyle: number;

declare const enumTransferMode: number;

declare const envBadVers: number;

declare const envNotPresent: number;

declare const envVersTooBig: number;

declare const eofErr: number;

declare const eraField: number;

declare const eraMask: number;

declare const errAEAccessorNotFound: number;

declare const errAEBadKeyForm: number;

declare const errAEBadListItem: number;

declare const errAEBadTestKey: number;

declare const errAEBufferTooSmall: number;

declare const errAEBuildSyntaxError: number;

declare const errAECantHandleClass: number;

declare const errAECantPutThatThere: number;

declare const errAECantSupplyType: number;

declare const errAECantUndo: number;

declare const errAECoercionFail: number;

declare const errAECorruptData: number;

declare const errAEDescIsNull: number;

declare const errAEDescNotFound: number;

declare const errAEDuplicateHandler: number;

declare const errAEEmptyListContainer: number;

declare const errAEEventFailed: number;

declare const errAEEventFiltered: number;

declare const errAEEventNotHandled: number;

declare const errAEEventNotPermitted: number;

declare const errAEEventWouldRequireUserConsent: number;

declare const errAEHandlerNotFound: number;

declare const errAEIllegalIndex: number;

declare const errAEImpossibleRange: number;

declare const errAEInTransaction: number;

declare const errAEIndexTooLarge: number;

declare const errAELocalOnly: number;

declare const errAENegativeCount: number;

declare const errAENewerVersion: number;

declare const errAENoSuchLogical: number;

declare const errAENoSuchObject: number;

declare const errAENoSuchTransaction: number;

declare const errAENoUserInteraction: number;

declare const errAENoUserSelection: number;

declare const errAENotAEDesc: number;

declare const errAENotASingleObject: number;

declare const errAENotASpecialFunction: number;

declare const errAENotAnElement: number;

declare const errAENotAnEnumMember: number;

declare const errAENotAnObjSpec: number;

declare const errAENotAppleEvent: number;

declare const errAENotModifiable: number;

declare const errAEParamMissed: number;

declare const errAEPrivilegeError: number;

declare const errAEPropertiesClash: number;

declare const errAEReadDenied: number;

declare const errAEReceiveEscapeCurrent: number;

declare const errAEReceiveTerminate: number;

declare const errAERecordingIsAlreadyOn: number;

declare const errAEReplyNotArrived: number;

declare const errAEReplyNotValid: number;

declare const errAEStreamAlreadyConverted: number;

declare const errAEStreamBadNesting: number;

declare const errAETargetAddressNotPermitted: number;

declare const errAETimeout: number;

declare const errAETypeError: number;

declare const errAEUnknownAddressType: number;

declare const errAEUnknownObjectType: number;

declare const errAEUnknownSendMode: number;

declare const errAEWaitCanceled: number;

declare const errAEWriteDenied: number;

declare const errAEWrongDataType: number;

declare const errAEWrongNumberArgs: number;

declare const errASCantCompareMoreThan32k: number;

declare const errASCantConsiderAndIgnore: number;

declare const errASIllegalFormalParameter: number;

declare const errASInconsistentNames: number;

declare const errASNoResultReturned: number;

declare const errASParameterNotForEvent: number;

declare const errASTerminologyNestingTooDeep: number;

declare const errAborted: number;

declare const errAlreadyInImagingMode: number;

declare const errAttention: number;

declare const errCanNotInsertWhileWalkProcInProgress: number;

declare const errCannotUndo: number;

declare const errCantEmbedIntoSelf: number;

declare const errCantEmbedRoot: number;

declare const errControlDoesntSupportFocus: number;

declare const errControlHiddenOrDisabled: number;

declare const errControlIsNotEmbedder: number;

declare const errControlsAlreadyExist: number;

declare const errCoreEndianDataDoesNotMatchFormat: number;

declare const errCoreEndianDataTooLongForFormat: number;

declare const errCoreEndianDataTooShortForFormat: number;

declare const errCorruptWindowDescription: number;

declare const errCouldntSetFocus: number;

declare const errCppGeneral: number;

declare const errCppLastSystemDefinedError: number;

declare const errCppLastUserDefinedError: number;

declare const errCppbad_alloc: number;

declare const errCppbad_cast: number;

declare const errCppbad_exception: number;

declare const errCppbad_typeid: number;

declare const errCppdomain_error: number;

declare const errCppinvalid_argument: number;

declare const errCppios_base_failure: number;

declare const errCpplength_error: number;

declare const errCpplogic_error: number;

declare const errCppout_of_range: number;

declare const errCppoverflow_error: number;

declare const errCpprange_error: number;

declare const errCppruntime_error: number;

declare const errCppunderflow_error: number;

declare const errDSPQueueSize: number;

declare const errDataNotSupported: number;

declare const errDataSizeMismatch: number;

declare const errEmptyScrap: number;

declare const errEndOfBody: number;

declare const errEndOfDocument: number;

declare const errEngineNotFound: number;

declare const errFSAttributeNotFound: number;

declare const errFSBadAllocFlags: number;

declare const errFSBadBuffer: number;

declare const errFSBadFSRef: number;

declare const errFSBadForkName: number;

declare const errFSBadForkRef: number;

declare const errFSBadInfoBitmap: number;

declare const errFSBadItemCount: number;

declare const errFSBadIteratorFlags: number;

declare const errFSBadPosMode: number;

declare const errFSBadSearchParams: number;

declare const errFSForkExists: number;

declare const errFSForkNotFound: number;

declare const errFSIteratorNotFound: number;

declare const errFSIteratorNotSupported: number;

declare const errFSMissingCatInfo: number;

declare const errFSMissingName: number;

declare const errFSNameTooLong: number;

declare const errFSNoMoreItems: number;

declare const errFSNotAFolder: number;

declare const errFSNotEnoughSpaceForOperation: number;

declare const errFSOperationNotSupported: number;

declare const errFSPropertyNotValid: number;

declare const errFSQuotaExceeded: number;

declare const errFSRefsDifferent: number;

declare const errFSUnknownCall: number;

declare const errFloatingWindowsNotInitialized: number;

declare const errFwdReset: number;

declare const errIAAllocationErr: number;

declare const errIABufferTooSmall: number;

declare const errIACanceled: number;

declare const errIAEndOfTextRun: number;

declare const errIAInvalidDocument: number;

declare const errIANoErr: number;

declare const errIANoMoreItems: number;

declare const errIAParamErr: number;

declare const errIATextExtractionErr: number;

declare const errIAUnknownErr: number;

declare const errInvalidPartCode: number;

declare const errInvalidRange: number;

declare const errInvalidWindowProperty: number;

declare const errInvalidWindowPtr: number;

declare const errInvalidWindowRef: number;

declare const errItemAlreadyInTree: number;

declare const errItemNotControl: number;

declare const errItemNotFoundInTree: number;

declare const errIteratorReachedEnd: number;

declare const errKCAuthFailed: number;

declare const errKCBufferTooSmall: number;

declare const errKCCreateChainFailed: number;

declare const errKCDataNotAvailable: number;

declare const errKCDataNotModifiable: number;

declare const errKCDataTooLarge: number;

declare const errKCDuplicateCallback: number;

declare const errKCDuplicateItem: number;

declare const errKCDuplicateKeychain: number;

declare const errKCInteractionNotAllowed: number;

declare const errKCInteractionRequired: number;

declare const errKCInvalidCallback: number;

declare const errKCInvalidItemRef: number;

declare const errKCInvalidKeychain: number;

declare const errKCInvalidSearchRef: number;

declare const errKCItemNotFound: number;

declare const errKCKeySizeNotAllowed: number;

declare const errKCNoCertificateModule: number;

declare const errKCNoDefaultKeychain: number;

declare const errKCNoPolicyModule: number;

declare const errKCNoStorageModule: number;

declare const errKCNoSuchAttr: number;

declare const errKCNoSuchClass: number;

declare const errKCNoSuchKeychain: number;

declare const errKCNotAvailable: number;

declare const errKCReadOnly: number;

declare const errKCReadOnlyAttr: number;

declare const errKCWrongKCVersion: number;

declare const errMarginWilllNotFit: number;

declare const errMessageNotSupported: number;

declare const errNoHiliteText: number;

declare const errNoRootControl: number;

declare const errNonContiuousAttribute: number;

declare const errNotInImagingMode: number;

declare const errNotValidTree: number;

declare const errOSAAppNotHighLevelEventAware: number;

declare const errOSABadSelector: number;

declare const errOSABadStorageType: number;

declare const errOSACantAccess: number;

declare const errOSACantAssign: number;

declare const errOSACantCoerce: number;

declare const errOSACantCreate: number;

declare const errOSACantGetTerminology: number;

declare const errOSACantLaunch: number;

declare const errOSACantOpenComponent: number;

declare const errOSACantStorePointers: number;

declare const errOSAComponentMismatch: number;

declare const errOSACorruptData: number;

declare const errOSACorruptTerminology: number;

declare const errOSADataBlockTooLarge: number;

declare const errOSADataFormatObsolete: number;

declare const errOSADataFormatTooNew: number;

declare const errOSADivideByZero: number;

declare const errOSAGeneralError: number;

declare const errOSAInternalTableOverflow: number;

declare const errOSAInvalidID: number;

declare const errOSANoSuchDialect: number;

declare const errOSANumericOverflow: number;

declare const errOSARecordingIsAlreadyOn: number;

declare const errOSAScriptError: number;

declare const errOSASourceNotAvailable: number;

declare const errOSAStackOverflow: number;

declare const errOSASystemError: number;

declare const errOSATypeError: number;

declare const errOffsetInvalid: number;

declare const errOffsetIsOutsideOfView: number;

declare const errOffsetNotOnElementBounday: number;

declare const errOpenDenied: number;

declare const errOpening: number;

declare const errReadOnlyText: number;

declare const errRefNum: number;

declare const errRootAlreadyExists: number;

declare const errState: number;

declare const errTaskNotFound: number;

declare const errTopOfBody: number;

declare const errTopOfDocument: number;

declare const errTreeIsLocked: number;

declare const errUnknownAttributeTag: number;

declare const errUnknownControl: number;

declare const errUnknownElement: number;

declare const errUnrecognizedWindowClass: number;

declare const errUnsupportedWindowAttributesForClass: number;

declare const errUserWantsToDragWindow: number;

declare const errWSInternalError: number;

declare const errWSParseError: number;

declare const errWSTimeoutError: number;

declare const errWSTransportError: number;

declare const errWindowDoesNotFitOnscreen: number;

declare const errWindowDoesNotHaveProxy: number;

declare const errWindowDoesntSupportFocus: number;

declare const errWindowNotFound: number;

declare const errWindowPropertyNotFound: number;

declare const errWindowRegionCodeInvalid: number;

declare const errWindowsAlreadyInitialized: number;

declare const eurlAFP: number;

declare const eurlAT: number;

declare const eurlEPPC: number;

declare const eurlFTP: number;

declare const eurlFile: number;

declare const eurlGopher: number;

declare const eurlHTTP: number;

declare const eurlHTTPS: number;

declare const eurlIMAP: number;

declare const eurlLDAP: number;

declare const eurlLaunch: number;

declare const eurlMail: number;

declare const eurlMailbox: number;

declare const eurlMessage: number;

declare const eurlMulti: number;

declare const eurlNFS: number;

declare const eurlNNTP: number;

declare const eurlNews: number;

declare const eurlPOP: number;

declare const eurlRTSP: number;

declare const eurlSNews: number;

declare const eurlTelnet: number;

declare const eurlUnknown: number;

declare const evType: number;

declare const evtNotEnb: number;

declare const exUserBreak: number;

declare const excessCollsns: number;

declare const extFSErr: number;

declare const extensionsFolderIconResource: number;

declare const extractErr: number;

declare const extraneousStrings: number;

declare const fBadPartsTable: number;

declare const fBestGuess: number;

declare const fBsyErr: number;

declare const fDesktop: number;

declare const fDisk: number;

declare const fEmptyFormatString: number;

declare const fExtraDecimal: number;

declare const fExtraExp: number;

declare const fExtraPercent: number;

declare const fExtraSeparator: number;

declare const fFormStrIsNAN: number;

declare const fFormatOK: number;

declare const fFormatOverflow: number;

declare const fHasBundle: number;

declare const fInvisible: number;

declare const fLckdErr: number;

declare const fMissingDelimiter: number;

declare const fMissingLiteral: number;

declare const fNegative: number;

declare const fOnDesk: number;

declare const fOutOfSynch: number;

declare const fPositive: number;

declare const fSpuriousChars: number;

declare const fTrash: number;

declare const fVNumber: number;

declare const fZero: number;

declare const false32b: number;

declare const fatalDateTime: number;

declare const featureUnsupported: number;

declare const fetchReference: number;

declare const fiLigature: number;

declare const fidExists: number;

declare const fidNotFound: number;

declare const fieldOrderNotIntl: number;

declare const fileBoundsErr: number;

declare const fileOffsetTooBigErr: number;

declare const firstDskErr: number;

declare const firstPickerError: number;

declare const flLigature: number;

declare const floppyIconResource: number;

declare const fmt1Err: number;

declare const fmt2Err: number;

declare const fnOpnErr: number;

declare const fnfErr: number;

declare const fontDecError: number;

declare const fontNotDeclared: number;

declare const fontNotOutlineErr: number;

declare const fontSubErr: number;

declare const fontsFolderIconResource: number;

declare const forceReadBit: number;

declare const forceReadMask: number;

declare const formAbsolutePosition: number;

declare const formName: number;

declare const formPropertyID: number;

declare const formRange: number;

declare const formRelativePosition: number;

declare const formTest: number;

declare const formUniqueID: number;

declare const formWhose: number;

declare const fraction: number;

declare const fsAtMark: number;

declare const fsCurPerm: number;

declare const fsDSIntErr: number;

declare const fsDataTooBigErr: number;

declare const fsFromLEOF: number;

declare const fsFromMark: number;

declare const fsFromStart: number;

declare const fsQType: number;

declare const fsRdAccessPerm: number;

declare const fsRdDenyPerm: number;

declare const fsRdPerm: number;

declare const fsRdWrPerm: number;

declare const fsRdWrShPerm: number;

declare const fsRnErr: number;

declare const fsRtDirID: number;

declare const fsRtParID: number;

declare const fsSBAccessDate: number;

declare const fsSBAccessDateBit: number;

declare const fsSBAttributeModDate: number;

declare const fsSBAttributeModDateBit: number;

declare const fsSBDrBkDat: number;

declare const fsSBDrBkDatBit: number;

declare const fsSBDrCrDat: number;

declare const fsSBDrCrDatBit: number;

declare const fsSBDrFndrInfo: number;

declare const fsSBDrFndrInfoBit: number;

declare const fsSBDrMdDat: number;

declare const fsSBDrMdDatBit: number;

declare const fsSBDrNmFls: number;

declare const fsSBDrNmFlsBit: number;

declare const fsSBDrParID: number;

declare const fsSBDrParIDBit: number;

declare const fsSBDrUsrWds: number;

declare const fsSBDrUsrWdsBit: number;

declare const fsSBFlAttrib: number;

declare const fsSBFlAttribBit: number;

declare const fsSBFlBkDat: number;

declare const fsSBFlBkDatBit: number;

declare const fsSBFlCrDat: number;

declare const fsSBFlCrDatBit: number;

declare const fsSBFlFndrInfo: number;

declare const fsSBFlFndrInfoBit: number;

declare const fsSBFlLgLen: number;

declare const fsSBFlLgLenBit: number;

declare const fsSBFlMdDat: number;

declare const fsSBFlMdDatBit: number;

declare const fsSBFlParID: number;

declare const fsSBFlParIDBit: number;

declare const fsSBFlPyLen: number;

declare const fsSBFlPyLenBit: number;

declare const fsSBFlRLgLen: number;

declare const fsSBFlRLgLenBit: number;

declare const fsSBFlRPyLen: number;

declare const fsSBFlRPyLenBit: number;

declare const fsSBFlXFndrInfo: number;

declare const fsSBFlXFndrInfoBit: number;

declare const fsSBFullName: number;

declare const fsSBFullNameBit: number;

declare const fsSBGroupID: number;

declare const fsSBGroupIDBit: number;

declare const fsSBNegate: number;

declare const fsSBNegateBit: number;

declare const fsSBNodeID: number;

declare const fsSBNodeIDBit: number;

declare const fsSBPartialName: number;

declare const fsSBPartialNameBit: number;

declare const fsSBPermissions: number;

declare const fsSBPermissionsBit: number;

declare const fsSBSkipHiddenItems: number;

declare const fsSBSkipHiddenItemsBit: number;

declare const fsSBSkipPackageContents: number;

declare const fsSBSkipPackageContentsBit: number;

declare const fsSBUserID: number;

declare const fsSBUserIDBit: number;

declare const fsUnixPriv: number;

declare const fsWrAccessPerm: number;

declare const fsWrDenyPerm: number;

declare const fsWrPerm: number;

declare const fsmBadFFSNameErr: number;

declare const fsmBadFSDLenErr: number;

declare const fsmBadFSDVersionErr: number;

declare const fsmBusyFFSErr: number;

declare const fsmDuplicateFSIDErr: number;

declare const fsmFFSNotFoundErr: number;

declare const fsmNoAlternateStackErr: number;

declare const fsmUnknownFSMMessageErr: number;

declare const fullTrashIconResource: number;

declare const gWorldsNotSameDepthAndSizeErr: number;

declare const gcrOnMFMErr: number;

declare const genCdevRangeBit: number;

declare const genericApplicationIconResource: number;

declare const genericCDROMIconResource: number;

declare const genericDeskAccessoryIconResource: number;

declare const genericDocumentIconResource: number;

declare const genericEditionFileIconResource: number;

declare const genericExtensionIconResource: number;

declare const genericFileServerIconResource: number;

declare const genericFolderIconResource: number;

declare const genericHardDiskIconResource: number;

declare const genericMoverObjectIconResource: number;

declare const genericPreferencesIconResource: number;

declare const genericQueryDocumentIconResource: number;

declare const genericRAMDiskIconResource: number;

declare const genericStationeryIconResource: number;

declare const genericSuitcaseIconResource: number;

declare const gestalt16BitAudioSupport: number;

declare const gestalt16BitSoundIO: number;

declare const gestalt20thAnniversary: number;

declare const gestalt32BitAddressing: number;

declare const gestalt32BitCapable: number;

declare const gestalt32BitQD: number;

declare const gestalt32BitQD11: number;

declare const gestalt32BitQD12: number;

declare const gestalt32BitQD13: number;

declare const gestalt32BitSysZone: number;

declare const gestalt68000: number;

declare const gestalt68010: number;

declare const gestalt68020: number;

declare const gestalt68030: number;

declare const gestalt68030MMU: number;

declare const gestalt68040: number;

declare const gestalt68040FPU: number;

declare const gestalt68040MMU: number;

declare const gestalt68851: number;

declare const gestalt68881: number;

declare const gestalt68882: number;

declare const gestalt68k: number;

declare const gestalt8BitQD: number;

declare const gestaltADBISOKbdII: number;

declare const gestaltADBKbdII: number;

declare const gestaltAFPClient: number;

declare const gestaltAFPClient3_5: number;

declare const gestaltAFPClient3_6: number;

declare const gestaltAFPClient3_6_1: number;

declare const gestaltAFPClient3_6_2: number;

declare const gestaltAFPClient3_6_3: number;

declare const gestaltAFPClient3_7: number;

declare const gestaltAFPClient3_7_2: number;

declare const gestaltAFPClient3_8: number;

declare const gestaltAFPClient3_8_1: number;

declare const gestaltAFPClient3_8_3: number;

declare const gestaltAFPClient3_8_4: number;

declare const gestaltAFPClientAttributeMask: number;

declare const gestaltAFPClientCfgRsrc: number;

declare const gestaltAFPClientMultiReq: number;

declare const gestaltAFPClientSupportsIP: number;

declare const gestaltAFPClientVMUI: number;

declare const gestaltAFPClientVersionMask: number;

declare const gestaltALMAttr: number;

declare const gestaltALMHasCFMSupport: number;

declare const gestaltALMHasRescanNotifiers: number;

declare const gestaltALMHasSFGroup: number;

declare const gestaltALMHasSFLocation: number;

declare const gestaltALMPresent: number;

declare const gestaltALMVers: number;

declare const gestaltAMU: number;

declare const gestaltATAAttr: number;

declare const gestaltATAPresent: number;

declare const gestaltATSUAscentDescentControlsFeature: number;

declare const gestaltATSUBatchBreakLinesFeature: number;

declare const gestaltATSUBiDiCursorPositionFeature: number;

declare const gestaltATSUByCharacterClusterFeature: number;

declare const gestaltATSUDecimalTabFeature: number;

declare const gestaltATSUDirectAccess: number;

declare const gestaltATSUDropShadowStyleFeature: number;

declare const gestaltATSUFallbacksFeature: number;

declare const gestaltATSUFallbacksObjFeatures: number;

declare const gestaltATSUFeatures: number;

declare const gestaltATSUGlyphBoundsFeature: number;

declare const gestaltATSUHighlightColorControlFeature: number;

declare const gestaltATSUHighlightInactiveTextFeature: number;

declare const gestaltATSUIgnoreLeadingFeature: number;

declare const gestaltATSULayoutCacheClearFeature: number;

declare const gestaltATSULayoutCreateAndCopyFeature: number;

declare const gestaltATSULineControlFeature: number;

declare const gestaltATSULowLevelOrigFeatures: number;

declare const gestaltATSUMemoryFeature: number;

declare const gestaltATSUNearestCharLineBreakFeature: number;

declare const gestaltATSUPositionToCursorFeature: number;

declare const gestaltATSUStrikeThroughStyleFeature: number;

declare const gestaltATSUTabSupportFeature: number;

declare const gestaltATSUTextLocatorUsageFeature: number;

declare const gestaltATSUTrackingFeature: number;

declare const gestaltATSUUnderlineOptionsStyleFeature: number;

declare const gestaltATSUUpdate1: number;

declare const gestaltATSUUpdate2: number;

declare const gestaltATSUUpdate3: number;

declare const gestaltATSUUpdate4: number;

declare const gestaltATSUUpdate5: number;

declare const gestaltATSUUpdate6: number;

declare const gestaltATSUUpdate7: number;

declare const gestaltATSUVersion: number;

declare const gestaltATalkVersion: number;

declare const gestaltAUXVersion: number;

declare const gestaltAVLTreeAttr: number;

declare const gestaltAVLTreePresentBit: number;

declare const gestaltAVLTreeSupportsHandleBasedTreeBit: number;

declare const gestaltAVLTreeSupportsTreeLockingBit: number;

declare const gestaltAWS6150_60: number;

declare const gestaltAWS6150_66: number;

declare const gestaltAWS8150_110: number;

declare const gestaltAWS8150_80: number;

declare const gestaltAWS8550: number;

declare const gestaltAWS9150_120: number;

declare const gestaltAWS9150_80: number;

declare const gestaltAddressingModeAttr: number;

declare const gestaltAdminFeaturesFlagsAttr: number;

declare const gestaltAliasMgrAttr: number;

declare const gestaltAliasMgrFollowsAliasesWhenResolving: number;

declare const gestaltAliasMgrPrefersPath: number;

declare const gestaltAliasMgrPresent: number;

declare const gestaltAliasMgrRequiresAccessors: number;

declare const gestaltAliasMgrResolveAliasFileWithMountOptions: number;

declare const gestaltAliasMgrSupportsAOCEKeychain: number;

declare const gestaltAliasMgrSupportsExtendedCalls: number;

declare const gestaltAliasMgrSupportsFSCalls: number;

declare const gestaltAliasMgrSupportsRemoteAppletalk: number;

declare const gestaltAllegroQD: number;

declare const gestaltAllegroQDText: number;

declare const gestaltAltivecRegistersSwappedCorrectlyBit: number;

declare const gestaltAntiAliasedTextAvailable: number;

declare const gestaltAppearanceAttr: number;

declare const gestaltAppearanceCompatMode: number;

declare const gestaltAppearanceExists: number;

declare const gestaltAppearanceVersion: number;

declare const gestaltAppleAdjustADBKbd: number;

declare const gestaltAppleAdjustISOKbd: number;

declare const gestaltAppleAdjustKeypad: number;

declare const gestaltAppleEventsAttr: number;

declare const gestaltAppleEventsPresent: number;

declare const gestaltAppleGuideIsDebug: number;

declare const gestaltAppleGuidePresent: number;

declare const gestaltAppleScriptAttr: number;

declare const gestaltAppleScriptPowerPCSupport: number;

declare const gestaltAppleScriptPresent: number;

declare const gestaltAppleScriptVersion: number;

declare const gestaltAppleTalkVersion: number;

declare const gestaltArbitorAttr: number;

declare const gestaltAsyncSCSI: number;

declare const gestaltAsyncSCSIINROM: number;

declare const gestaltBuiltInSoundInput: number;

declare const gestaltBusClkSpeed: number;

declare const gestaltBusClkSpeedMHz: number;

declare const gestaltCFM99Present: number;

declare const gestaltCFM99PresentMask: number;

declare const gestaltCFMAttr: number;

declare const gestaltCFMPresent: number;

declare const gestaltCFMPresentMask: number;

declare const gestaltCPU486: number;

declare const gestaltCPU601: number;

declare const gestaltCPU603: number;

declare const gestaltCPU603e: number;

declare const gestaltCPU603ev: number;

declare const gestaltCPU604: number;

declare const gestaltCPU604e: number;

declare const gestaltCPU604ev: number;

declare const gestaltCPU68000: number;

declare const gestaltCPU68010: number;

declare const gestaltCPU68020: number;

declare const gestaltCPU68030: number;

declare const gestaltCPU68040: number;

declare const gestaltCPU750: number;

declare const gestaltCPU750FX: number;

declare const gestaltCPU970: number;

declare const gestaltCPU970FX: number;

declare const gestaltCPU970MP: number;

declare const gestaltCPUApollo: number;

declare const gestaltCPUG4: number;

declare const gestaltCPUG47447: number;

declare const gestaltCPUG47450: number;

declare const gestaltCPUPentium: number;

declare const gestaltCPUPentium4: number;

declare const gestaltCPUPentiumII: number;

declare const gestaltCPUPentiumPro: number;

declare const gestaltCPUX86: number;

declare const gestaltCRMAttr: number;

declare const gestaltCRMPersistentFix: number;

declare const gestaltCRMPresent: number;

declare const gestaltCRMToolRsrcCalls: number;

declare const gestaltCTBVersion: number;

declare const gestaltCanStartDragInFloatWindow: number;

declare const gestaltCanUseCGTextRendering: number;

declare const gestaltCarbonVersion: number;

declare const gestaltCardServicesPresent: number;

declare const gestaltClassic: number;

declare const gestaltClassicII: number;

declare const gestaltCloseViewAttr: number;

declare const gestaltCloseViewDisplayMgrFriendly: number;

declare const gestaltCloseViewEnabled: number;

declare const gestaltCollectionMgrVersion: number;

declare const gestaltColorMatchingAttr: number;

declare const gestaltColorMatchingLibLoaded: number;

declare const gestaltColorMatchingVersion: number;

declare const gestaltColorPicker: number;

declare const gestaltColorPickerVersion: number;

declare const gestaltColorSync10: number;

declare const gestaltColorSync104: number;

declare const gestaltColorSync105: number;

declare const gestaltColorSync11: number;

declare const gestaltColorSync20: number;

declare const gestaltColorSync21: number;

declare const gestaltColorSync211: number;

declare const gestaltColorSync212: number;

declare const gestaltColorSync213: number;

declare const gestaltColorSync25: number;

declare const gestaltColorSync26: number;

declare const gestaltColorSync261: number;

declare const gestaltColorSync30: number;

declare const gestaltComponentMgr: number;

declare const gestaltComponentPlatform: number;

declare const gestaltCompressionMgr: number;

declare const gestaltConnMgrAttr: number;

declare const gestaltConnMgrCMSearchFix: number;

declare const gestaltConnMgrErrorString: number;

declare const gestaltConnMgrMultiAsyncIO: number;

declare const gestaltConnMgrPresent: number;

declare const gestaltControlMgrAttr: number;

declare const gestaltControlMgrPresent: number;

declare const gestaltControlMgrPresentBit: number;

declare const gestaltControlMgrVersion: number;

declare const gestaltControlMsgPresentMask: number;

declare const gestaltControlStripAttr: number;

declare const gestaltControlStripExists: number;

declare const gestaltControlStripUserFont: number;

declare const gestaltControlStripUserHotKey: number;

declare const gestaltControlStripVersion: number;

declare const gestaltControlStripVersionFixed: number;

declare const gestaltCountOfCPUs: number;

declare const gestaltCreatesAliasFontRsrc: number;

declare const gestaltCurrentGraphicsVersion: number;

declare const gestaltDBAccessMgrAttr: number;

declare const gestaltDBAccessMgrPresent: number;

declare const gestaltDITLExtAttr: number;

declare const gestaltDITLExtPresent: number;

declare const gestaltDITLExtSupportsIctb: number;

declare const gestaltDTMgrSupportsFSM: number;

declare const gestaltDTPFeatures: number;

declare const gestaltDTPInfo: number;

declare const gestaltDesktopPicturesAttr: number;

declare const gestaltDesktopPicturesDisplayed: number;

declare const gestaltDesktopPicturesInstalled: number;

declare const gestaltDesktopSpeechRecognition: number;

declare const gestaltDialogMgrAttr: number;

declare const gestaltDialogMgrHasAquaAlertBit: number;

declare const gestaltDialogMgrHasAquaAlertMask: number;

declare const gestaltDialogMgrPresent: number;

declare const gestaltDialogMgrPresentBit: number;

declare const gestaltDialogMgrPresentMask: number;

declare const gestaltDialogMsgPresentMask: number;

declare const gestaltDictionaryMgrAttr: number;

declare const gestaltDictionaryMgrPresent: number;

declare const gestaltDigitalSignatureVersion: number;

declare const gestaltDiskCacheSize: number;

declare const gestaltDisplayMgrAttr: number;

declare const gestaltDisplayMgrCanConfirm: number;

declare const gestaltDisplayMgrCanSwitchMirrored: number;

declare const gestaltDisplayMgrColorSyncAware: number;

declare const gestaltDisplayMgrGeneratesProfiles: number;

declare const gestaltDisplayMgrPresent: number;

declare const gestaltDisplayMgrSetDepthNotifies: number;

declare const gestaltDisplayMgrSleepNotifies: number;

declare const gestaltDisplayMgrVers: number;

declare const gestaltDragMgrAttr: number;

declare const gestaltDragMgrFloatingWind: number;

declare const gestaltDragMgrHasImageSupport: number;

declare const gestaltDragMgrPresent: number;

declare const gestaltDrawSprocketVersion: number;

declare const gestaltDupSelectorErr: number;

declare const gestaltEMMU1: number;

declare const gestaltEasyAccessAttr: number;

declare const gestaltEasyAccessLocked: number;

declare const gestaltEasyAccessOff: number;

declare const gestaltEasyAccessOn: number;

declare const gestaltEasyAccessSticky: number;

declare const gestaltEditionMgrAttr: number;

declare const gestaltEditionMgrPresent: number;

declare const gestaltEditionMgrTranslationAware: number;

declare const gestaltExtADBKbd: number;

declare const gestaltExtISOADBKbd: number;

declare const gestaltExtToolboxTable: number;

declare const gestaltExtendedTimeMgr: number;

declare const gestaltExtendedWindowAttributes: number;

declare const gestaltExtendedWindowAttributesBit: number;

declare const gestaltExtendedWindowAttributesMask: number;

declare const gestaltExtensionTableVersion: number;

declare const gestaltFBCCurrentVersion: number;

declare const gestaltFBCIndexingState: number;

declare const gestaltFBCVersion: number;

declare const gestaltFBCindexingCritical: number;

declare const gestaltFBCindexingSafe: number;

declare const gestaltFPUType: number;

declare const gestaltFSAllowsConcurrentAsyncIO: number;

declare const gestaltFSAttr: number;

declare const gestaltFSIncompatibleDFA82: number;

declare const gestaltFSMDoesDynamicLoad: number;

declare const gestaltFSMVersion: number;

declare const gestaltFSNoMFSVols: number;

declare const gestaltFSSupports2TBVols: number;

declare const gestaltFSSupports4GBVols: number;

declare const gestaltFSSupportsDirectIO: number;

declare const gestaltFSSupportsExclusiveLocks: number;

declare const gestaltFSSupportsHFSPlusVols: number;

declare const gestaltFSSupportsHardLinkDetection: number;

declare const gestaltFSUsesPOSIXPathsForConversion: number;

declare const gestaltFXfrMgrAsync: number;

declare const gestaltFXfrMgrAttr: number;

declare const gestaltFXfrMgrErrorString: number;

declare const gestaltFXfrMgrMultiFile: number;

declare const gestaltFXfrMgrPresent: number;

declare const gestaltFileAllocationZeroedBlocksBit: number;

declare const gestaltFileMappingAttr: number;

declare const gestaltFileMappingMultipleFilesFix: number;

declare const gestaltFileMappingPresent: number;

declare const gestaltFindFolderAttr: number;

declare const gestaltFindFolderPresent: number;

declare const gestaltFindFolderRedirectionAttr: number;

declare const gestaltFinderAttr: number;

declare const gestaltFinderCallsAEProcess: number;

declare const gestaltFinderDropEvent: number;

declare const gestaltFinderFloppyRootComments: number;

declare const gestaltFinderFullDragManagerSupport: number;

declare const gestaltFinderHasClippings: number;

declare const gestaltFinderLargeAndNotSavedFlavorsOK: number;

declare const gestaltFinderMagicPlacement: number;

declare const gestaltFinderSupports4GBVolumes: number;

declare const gestaltFinderUnderstandsRedirectedDesktopFolder: number;

declare const gestaltFinderUsesExtensibleFolderManager: number;

declare const gestaltFinderUsesSpecialOpenFoldersFile: number;

declare const gestaltFirstSlotNumber: number;

declare const gestaltFloppyAttr: number;

declare const gestaltFloppyIsMFMOnly: number;

declare const gestaltFloppyIsManualEject: number;

declare const gestaltFloppyUsesDiskInPlace: number;

declare const gestaltFolderDescSupport: number;

declare const gestaltFolderMgrFollowsAliasesWhenResolving: number;

declare const gestaltFolderMgrSupportsDomains: number;

declare const gestaltFolderMgrSupportsExtendedCalls: number;

declare const gestaltFolderMgrSupportsFSCalls: number;

declare const gestaltFontMgrAttr: number;

declare const gestaltFrontWindowMayBeHiddenBit: number;

declare const gestaltFrontWindowMayBeHiddenMask: number;

declare const gestaltFullExtFSDispatching: number;

declare const gestaltGXPrintingMgrVersion: number;

declare const gestaltGXVersion: number;

declare const gestaltGraphicsAttr: number;

declare const gestaltGraphicsIsDebugging: number;

declare const gestaltGraphicsIsLoaded: number;

declare const gestaltGraphicsIsPowerPC: number;

declare const gestaltGraphicsVersion: number;

declare const gestaltHardwareAttr: number;

declare const gestaltHardwareVendorApple: number;

declare const gestaltHardwareVendorCode: number;

declare const gestaltHasASC: number;

declare const gestaltHasColor: number;

declare const gestaltHasDeepGWorlds: number;

declare const gestaltHasDirectPixMaps: number;

declare const gestaltHasEnhancedLtalk: number;

declare const gestaltHasExtendedDiskInit: number;

declare const gestaltHasFMTuner: number;

declare const gestaltHasFSSpecCalls: number;

declare const gestaltHasFileSystemManager: number;

declare const gestaltHasFloatingWindows: number;

declare const gestaltHasFloatingWindowsBit: number;

declare const gestaltHasFloatingWindowsMask: number;

declare const gestaltHasGPIaToDCDa: number;

declare const gestaltHasGPIaToRTxCa: number;

declare const gestaltHasGPIbToDCDb: number;

declare const gestaltHasGrayishTextOr: number;

declare const gestaltHasHFSPlusAPIs: number;

declare const gestaltHasHWClosedCaptioning: number;

declare const gestaltHasIRRemote: number;

declare const gestaltHasParityCapability: number;

declare const gestaltHasResourceOverrides: number;

declare const gestaltHasSCC: number;

declare const gestaltHasSCSI: number;

declare const gestaltHasSCSI961: number;

declare const gestaltHasSCSI962: number;

declare const gestaltHasSerialFader: number;

declare const gestaltHasSingleWindowModeBit: number;

declare const gestaltHasSingleWindowModeMask: number;

declare const gestaltHasSoftPowerOff: number;

declare const gestaltHasSoundFader: number;

declare const gestaltHasSoundInputDevice: number;

declare const gestaltHasStereoDecoder: number;

declare const gestaltHasSystemIRFunction: number;

declare const gestaltHasTVTuner: number;

declare const gestaltHasUniversalROM: number;

declare const gestaltHasVIA1: number;

declare const gestaltHasVIA2: number;

declare const gestaltHasVidDecoderScaler: number;

declare const gestaltHasWindowBuffering: number;

declare const gestaltHasWindowBufferingBit: number;

declare const gestaltHasWindowBufferingMask: number;

declare const gestaltHasWindowShadowsBit: number;

declare const gestaltHasWindowShadowsMask: number;

declare const gestaltHasZoomedVideo: number;

declare const gestaltHelpMgrAttr: number;

declare const gestaltHelpMgrExtensions: number;

declare const gestaltHelpMgrPresent: number;

declare const gestaltHidePortA: number;

declare const gestaltHidePortB: number;

declare const gestaltHighLevelMatching: number;

declare const gestaltINeedIRPowerOffConfirm: number;

declare const gestaltIPCSupport: number;

declare const gestaltIRDisabled: number;

declare const gestaltIconUtilitiesAttr: number;

declare const gestaltIconUtilitiesHas32BitIcons: number;

declare const gestaltIconUtilitiesHas48PixelIcons: number;

declare const gestaltIconUtilitiesHas8BitDeepMasks: number;

declare const gestaltIconUtilitiesHasIconServices: number;

declare const gestaltIconUtilitiesPresent: number;

declare const gestaltInitHeapZerosOutHeapsBit: number;

declare const gestaltIntel: number;

declare const gestaltInternalDisplay: number;

declare const gestaltJapanAdjustADBKbd: number;

declare const gestaltKeyboardType: number;

declare const gestaltLaunchCanReturn: number;

declare const gestaltLaunchControl: number;

declare const gestaltLaunchFullFileSpec: number;

declare const gestaltLineLevelInput: number;

declare const gestaltLocationErr: number;

declare const gestaltLogicalPageSize: number;

declare const gestaltLogicalRAMSize: number;

declare const gestaltLowMemorySize: number;

declare const gestaltMBLegacy: number;

declare const gestaltMBMultipleBays: number;

declare const gestaltMBSingleBay: number;

declare const gestaltMMUType: number;

declare const gestaltMPCallableAPIsAttr: number;

declare const gestaltMPDeviceManager: number;

declare const gestaltMPFileManager: number;

declare const gestaltMPTrapCalls: number;

declare const gestaltMac512KE: number;

declare const gestaltMacAndPad: number;

declare const gestaltMacCentris610: number;

declare const gestaltMacCentris650: number;

declare const gestaltMacCentris660AV: number;

declare const gestaltMacClassic: number;

declare const gestaltMacColorClassic: number;

declare const gestaltMacII: number;

declare const gestaltMacIIci: number;

declare const gestaltMacIIcx: number;

declare const gestaltMacIIfx: number;

declare const gestaltMacIIsi: number;

declare const gestaltMacIIvi: number;

declare const gestaltMacIIvm: number;

declare const gestaltMacIIvx: number;

declare const gestaltMacIIx: number;

declare const gestaltMacKbd: number;

declare const gestaltMacLC: number;

declare const gestaltMacLC475: number;

declare const gestaltMacLC520: number;

declare const gestaltMacLC575: number;

declare const gestaltMacLC580: number;

declare const gestaltMacLCII: number;

declare const gestaltMacLCIII: number;

declare const gestaltMacOSCompatibility: number;

declare const gestaltMacOSCompatibilityBoxAttr: number;

declare const gestaltMacOSCompatibilityBoxHasSerial: number;

declare const gestaltMacOSCompatibilityBoxPresent: number;

declare const gestaltMacOSCompatibilityBoxless: number;

declare const gestaltMacOSXQD: number;

declare const gestaltMacOSXQDText: number;

declare const gestaltMacPlus: number;

declare const gestaltMacPlusKbd: number;

declare const gestaltMacQuadra605: number;

declare const gestaltMacQuadra610: number;

declare const gestaltMacQuadra630: number;

declare const gestaltMacQuadra650: number;

declare const gestaltMacQuadra660AV: number;

declare const gestaltMacQuadra700: number;

declare const gestaltMacQuadra800: number;

declare const gestaltMacQuadra840AV: number;

declare const gestaltMacQuadra900: number;

declare const gestaltMacQuadra950: number;

declare const gestaltMacSE: number;

declare const gestaltMacSE030: number;

declare const gestaltMacTV: number;

declare const gestaltMacXL: number;

declare const gestaltMachineIcon: number;

declare const gestaltMachineType: number;

declare const gestaltMediaBay: number;

declare const gestaltMemoryMapAttr: number;

declare const gestaltMemoryMapSparse: number;

declare const gestaltMenuMgrAquaLayoutBit: number;

declare const gestaltMenuMgrAquaLayoutMask: number;

declare const gestaltMenuMgrAttr: number;

declare const gestaltMenuMgrCGImageMenuTitleBit: number;

declare const gestaltMenuMgrCGImageMenuTitleMask: number;

declare const gestaltMenuMgrMoreThanFiveMenusDeepBit: number;

declare const gestaltMenuMgrMoreThanFiveMenusDeepMask: number;

declare const gestaltMenuMgrMultipleItemsWithCommandIDBit: number;

declare const gestaltMenuMgrMultipleItemsWithCommandIDMask: number;

declare const gestaltMenuMgrPresent: number;

declare const gestaltMenuMgrPresentBit: number;

declare const gestaltMenuMgrPresentMask: number;

declare const gestaltMenuMgrRetainsIconRefBit: number;

declare const gestaltMenuMgrRetainsIconRefMask: number;

declare const gestaltMenuMgrSendsMenuBoundsToDefProcBit: number;

declare const gestaltMenuMgrSendsMenuBoundsToDefProcMask: number;

declare const gestaltMessageMgrVersion: number;

declare const gestaltMiscAttr: number;

declare const gestaltMixedModeAttr: number;

declare const gestaltMixedModeCFM68K: number;

declare const gestaltMixedModeCFM68KHasState: number;

declare const gestaltMixedModeCFM68KHasTrap: number;

declare const gestaltMixedModePowerPC: number;

declare const gestaltMixedModeVersion: number;

declare const gestaltMultiChannels: number;

declare const gestaltMultipleUsersState: number;

declare const gestaltMustUseFCBAccessors: number;

declare const gestaltNameRegistryVersion: number;

declare const gestaltNativeCPUfamily: number;

declare const gestaltNativeCPUtype: number;

declare const gestaltNativeProcessMgrBit: number;

declare const gestaltNativeTimeMgr: number;

declare const gestaltNativeType1FontSupport: number;

declare const gestaltNewHandleReturnsZeroedMemoryBit: number;

declare const gestaltNewPtrReturnsZeroedMemoryBit: number;

declare const gestaltNoFPU: number;

declare const gestaltNoMMU: number;

declare const gestaltNotificationMgrAttr: number;

declare const gestaltNotificationPresent: number;

declare const gestaltNuBusConnectors: number;

declare const gestaltNuBusPresent: number;

declare const gestaltNuBusSlotCount: number;

declare const gestaltOCESFServerAvailable: number;

declare const gestaltOCETB: number;

declare const gestaltOCETBAvailable: number;

declare const gestaltOCETBNativeGlueAvailable: number;

declare const gestaltOCETBPresent: number;

declare const gestaltOCEToolboxAttr: number;

declare const gestaltOCEToolboxVersion: number;

declare const gestaltOFA2available: number;

declare const gestaltOSAttr: number;

declare const gestaltOSLCompliantFinder: number;

declare const gestaltOSLInSystem: number;

declare const gestaltOSTable: number;

declare const gestaltOSXFBCCurrentVersion: number;

declare const gestaltOpenFirmwareInfo: number;

declare const gestaltOpenTpt: number;

declare const gestaltOpenTptARAPPresent: number;

declare const gestaltOpenTptAppleTalkLoadedBit: number;

declare const gestaltOpenTptAppleTalkLoadedMask: number;

declare const gestaltOpenTptAppleTalkPresentBit: number;

declare const gestaltOpenTptAppleTalkPresentMask: number;

declare const gestaltOpenTptIPXSPXLoadedBit: number;

declare const gestaltOpenTptIPXSPXLoadedMask: number;

declare const gestaltOpenTptIPXSPXPresentBit: number;

declare const gestaltOpenTptIPXSPXPresentMask: number;

declare const gestaltOpenTptLoadedBit: number;

declare const gestaltOpenTptLoadedMask: number;

declare const gestaltOpenTptNetworkSetup: number;

declare const gestaltOpenTptNetworkSetupLegacyExport: number;

declare const gestaltOpenTptNetworkSetupLegacyImport: number;

declare const gestaltOpenTptNetworkSetupSupportsMultihoming: number;

declare const gestaltOpenTptNetworkSetupVersion: number;

declare const gestaltOpenTptPPPPresent: number;

declare const gestaltOpenTptPresentBit: number;

declare const gestaltOpenTptPresentMask: number;

declare const gestaltOpenTptRemoteAccess: number;

declare const gestaltOpenTptRemoteAccessClientOnly: number;

declare const gestaltOpenTptRemoteAccessLoaded: number;

declare const gestaltOpenTptRemoteAccessMPServer: number;

declare const gestaltOpenTptRemoteAccessPServer: number;

declare const gestaltOpenTptRemoteAccessPresent: number;

declare const gestaltOpenTptRemoteAccessVersion: number;

declare const gestaltOpenTptTCPLoadedBit: number;

declare const gestaltOpenTptTCPLoadedMask: number;

declare const gestaltOpenTptTCPPresentBit: number;

declare const gestaltOpenTptTCPPresentMask: number;

declare const gestaltOpenTptVersions: number;

declare const gestaltOriginalATSUVersion: number;

declare const gestaltOriginalQD: number;

declare const gestaltOriginalQDText: number;

declare const gestaltOutlineFonts: number;

declare const gestaltPCCard: number;

declare const gestaltPCCardFamilyPresent: number;

declare const gestaltPCCardHasPowerControl: number;

declare const gestaltPCCardSupportsCardBus: number;

declare const gestaltPCXAttr: number;

declare const gestaltPCXHas8and16BitFAT: number;

declare const gestaltPCXHasProDOS: number;

declare const gestaltPCXNewUI: number;

declare const gestaltPCXUseICMapping: number;

declare const gestaltPMgrCPUIdle: number;

declare const gestaltPMgrDispatchExists: number;

declare const gestaltPMgrExists: number;

declare const gestaltPMgrSCC: number;

declare const gestaltPMgrSound: number;

declare const gestaltPMgrSupportsAVPowerStateAtSleepWake: number;

declare const gestaltPPCDragLibPresent: number;

declare const gestaltPPCQuickTimeLibPresent: number;

declare const gestaltPPCSupportsIncoming: number;

declare const gestaltPPCSupportsIncomingAppleTalk: number;

declare const gestaltPPCSupportsIncomingTCP_IP: number;

declare const gestaltPPCSupportsOutGoing: number;

declare const gestaltPPCSupportsOutgoingAppleTalk: number;

declare const gestaltPPCSupportsOutgoingTCP_IP: number;

declare const gestaltPPCSupportsRealTime: number;

declare const gestaltPPCSupportsTCP_IP: number;

declare const gestaltPPCToolboxAttr: number;

declare const gestaltPPCToolboxPresent: number;

declare const gestaltPS2Keyboard: number;

declare const gestaltParityAttr: number;

declare const gestaltParityEnabled: number;

declare const gestaltPartialRsrcs: number;

declare const gestaltPerforma250: number;

declare const gestaltPerforma450: number;

declare const gestaltPerforma46x: number;

declare const gestaltPerforma47x: number;

declare const gestaltPerforma5300: number;

declare const gestaltPerforma550: number;

declare const gestaltPerforma580: number;

declare const gestaltPerforma600: number;

declare const gestaltPerforma6300: number;

declare const gestaltPerforma6360: number;

declare const gestaltPerforma6400: number;

declare const gestaltPhysicalRAMSize: number;

declare const gestaltPhysicalRAMSizeInMegabytes: number;

declare const gestaltPlayAndRecord: number;

declare const gestaltPopupAttr: number;

declare const gestaltPopupPresent: number;

declare const gestaltPortADisabled: number;

declare const gestaltPortBDisabled: number;

declare const gestaltPortable: number;

declare const gestaltPortable2001ANSIKbd: number;

declare const gestaltPortable2001ISOKbd: number;

declare const gestaltPortable2001JISKbd: number;

declare const gestaltPortableSlotPresent: number;

declare const gestaltPortableUSBANSIKbd: number;

declare const gestaltPortableUSBISOKbd: number;

declare const gestaltPortableUSBJISKbd: number;

declare const gestaltPowerBook100: number;

declare const gestaltPowerBook140: number;

declare const gestaltPowerBook1400: number;

declare const gestaltPowerBook145: number;

declare const gestaltPowerBook150: number;

declare const gestaltPowerBook160: number;

declare const gestaltPowerBook165: number;

declare const gestaltPowerBook165c: number;

declare const gestaltPowerBook170: number;

declare const gestaltPowerBook180: number;

declare const gestaltPowerBook180c: number;

declare const gestaltPowerBook190: number;

declare const gestaltPowerBook2400: number;

declare const gestaltPowerBook3400: number;

declare const gestaltPowerBook500PPCUpgrade: number;

declare const gestaltPowerBook520: number;

declare const gestaltPowerBook520c: number;

declare const gestaltPowerBook5300: number;

declare const gestaltPowerBook540: number;

declare const gestaltPowerBook540c: number;

declare const gestaltPowerBookDuo210: number;

declare const gestaltPowerBookDuo230: number;

declare const gestaltPowerBookDuo2300: number;

declare const gestaltPowerBookDuo250: number;

declare const gestaltPowerBookDuo270c: number;

declare const gestaltPowerBookDuo280: number;

declare const gestaltPowerBookDuo280c: number;

declare const gestaltPowerBookG3: number;

declare const gestaltPowerBookG3Series: number;

declare const gestaltPowerBookG3Series2: number;

declare const gestaltPowerMac4400: number;

declare const gestaltPowerMac4400_160: number;

declare const gestaltPowerMac5200: number;

declare const gestaltPowerMac5260: number;

declare const gestaltPowerMac5400: number;

declare const gestaltPowerMac5500: number;

declare const gestaltPowerMac6100_60: number;

declare const gestaltPowerMac6100_66: number;

declare const gestaltPowerMac6200: number;

declare const gestaltPowerMac6400: number;

declare const gestaltPowerMac6500: number;

declare const gestaltPowerMac7100_66: number;

declare const gestaltPowerMac7100_80: number;

declare const gestaltPowerMac7200: number;

declare const gestaltPowerMac7300: number;

declare const gestaltPowerMac7500: number;

declare const gestaltPowerMac7600: number;

declare const gestaltPowerMac8100_100: number;

declare const gestaltPowerMac8100_110: number;

declare const gestaltPowerMac8100_120: number;

declare const gestaltPowerMac8100_80: number;

declare const gestaltPowerMac8500: number;

declare const gestaltPowerMac8600: number;

declare const gestaltPowerMac9500: number;

declare const gestaltPowerMac9600: number;

declare const gestaltPowerMacCentris610: number;

declare const gestaltPowerMacCentris650: number;

declare const gestaltPowerMacG3: number;

declare const gestaltPowerMacLC475: number;

declare const gestaltPowerMacLC575: number;

declare const gestaltPowerMacLC630: number;

declare const gestaltPowerMacNewWorld: number;

declare const gestaltPowerMacPerforma47x: number;

declare const gestaltPowerMacPerforma57x: number;

declare const gestaltPowerMacPerforma63x: number;

declare const gestaltPowerMacQuadra610: number;

declare const gestaltPowerMacQuadra630: number;

declare const gestaltPowerMacQuadra650: number;

declare const gestaltPowerMacQuadra700: number;

declare const gestaltPowerMacQuadra800: number;

declare const gestaltPowerMacQuadra900: number;

declare const gestaltPowerMacQuadra950: number;

declare const gestaltPowerMgrAttr: number;

declare const gestaltPowerMgrVers: number;

declare const gestaltPowerPC: number;

declare const gestaltPowerPCASArchitecture: number;

declare const gestaltPowerPCAware: number;

declare const gestaltPowerPCHas64BitSupport: number;

declare const gestaltPowerPCHasDCBAInstruction: number;

declare const gestaltPowerPCHasDCBTStreams: number;

declare const gestaltPowerPCHasDataStreams: number;

declare const gestaltPowerPCHasGraphicsInstructions: number;

declare const gestaltPowerPCHasSTFIWXInstruction: number;

declare const gestaltPowerPCHasSquareRootInstructions: number;

declare const gestaltPowerPCHasVectorInstructions: number;

declare const gestaltPowerPCIgnoresDCBST: number;

declare const gestaltPowerPCProcessorFeatures: number;

declare const gestaltProF16ANSIKbd: number;

declare const gestaltProF16ISOKbd: number;

declare const gestaltProF16JISKbd: number;

declare const gestaltProcClkSpeed: number;

declare const gestaltProcClkSpeedMHz: number;

declare const gestaltProcessorCacheLineSize: number;

declare const gestaltProcessorType: number;

declare const gestaltPrtblADBKbd: number;

declare const gestaltPrtblISOKbd: number;

declare const gestaltPwrBk99JISKbd: number;

declare const gestaltPwrBkEKDomKbd: number;

declare const gestaltPwrBkEKISOKbd: number;

declare const gestaltPwrBkEKJISKbd: number;

declare const gestaltPwrBkExtADBKbd: number;

declare const gestaltPwrBkExtISOKbd: number;

declare const gestaltPwrBkExtJISKbd: number;

declare const gestaltPwrBkSubDomKbd: number;

declare const gestaltPwrBkSubISOKbd: number;

declare const gestaltPwrBkSubJISKbd: number;

declare const gestaltPwrBookADBKbd: number;

declare const gestaltPwrBookISOADBKbd: number;

declare const gestaltQD3D: number;

declare const gestaltQD3DPresent: number;

declare const gestaltQD3DVersion: number;

declare const gestaltQD3DViewer: number;

declare const gestaltQD3DViewerPresent: number;

declare const gestaltQDHasLongRowBytes: number;

declare const gestaltQDTextFeatures: number;

declare const gestaltQDTextVersion: number;

declare const gestaltQTVRCubicPanosPresent: number;

declare const gestaltQTVRCylinderPanosPresent: number;

declare const gestaltQTVRMgrAttr: number;

declare const gestaltQTVRMgrPresent: number;

declare const gestaltQTVRMgrVers: number;

declare const gestaltQTVRObjMoviesPresent: number;

declare const gestaltQuadra605: number;

declare const gestaltQuadra610: number;

declare const gestaltQuadra630: number;

declare const gestaltQuadra650: number;

declare const gestaltQuadra660AV: number;

declare const gestaltQuadra700: number;

declare const gestaltQuadra800: number;

declare const gestaltQuadra840AV: number;

declare const gestaltQuadra900: number;

declare const gestaltQuadra950: number;

declare const gestaltQuickTime: number;

declare const gestaltQuickTimeConferencing: number;

declare const gestaltQuickTimeConferencingInfo: number;

declare const gestaltQuickTimeFeatures: number;

declare const gestaltQuickTimeStreamingFeatures: number;

declare const gestaltQuickTimeStreamingVersion: number;

declare const gestaltQuickTimeThreadSafeFeaturesAttr: number;

declare const gestaltQuickTimeThreadSafeGraphicsExport: number;

declare const gestaltQuickTimeThreadSafeGraphicsImport: number;

declare const gestaltQuickTimeThreadSafeICM: number;

declare const gestaltQuickTimeThreadSafeMovieExport: number;

declare const gestaltQuickTimeThreadSafeMovieImport: number;

declare const gestaltQuickTimeThreadSafeMoviePlayback: number;

declare const gestaltQuickTimeThreadSafeMovieToolbox: number;

declare const gestaltQuickTimeVersion: number;

declare const gestaltQuickdrawFeatures: number;

declare const gestaltQuickdrawVersion: number;

declare const gestaltRBVAddr: number;

declare const gestaltRMFakeAppleMenuItemsRolledIn: number;

declare const gestaltRMForceSysHeapRolledIn: number;

declare const gestaltRMSupportsFSCalls: number;

declare const gestaltRMTypeIndexOrderingReverse: number;

declare const gestaltROMSize: number;

declare const gestaltROMVersion: number;

declare const gestaltRealTempMemory: number;

declare const gestaltRealtimeMgrAttr: number;

declare const gestaltRealtimeMgrPresent: number;

declare const gestaltResourceMgrAttr: number;

declare const gestaltResourceMgrBugFixesAttrs: number;

declare const gestaltRevisedTimeMgr: number;

declare const gestaltSCCReadAddr: number;

declare const gestaltSCCWriteAddr: number;

declare const gestaltSCSI: number;

declare const gestaltSCSIPollSIH: number;

declare const gestaltSCSISlotBoot: number;

declare const gestaltSDPFindVersion: number;

declare const gestaltSDPPromptVersion: number;

declare const gestaltSDPStandardDirectoryVersion: number;

declare const gestaltSE30SlotPresent: number;

declare const gestaltSESlotPresent: number;

declare const gestaltSFServer: number;

declare const gestaltSMPMailerVersion: number;

declare const gestaltSMPSPSendLetterVersion: number;

declare const gestaltSafeOFAttr: number;

declare const gestaltSanityCheckResourceFiles: number;

declare const gestaltSbitFontSupport: number;

declare const gestaltScrapMgrAttr: number;

declare const gestaltScrapMgrTranslationAware: number;

declare const gestaltScreenCaptureDir: number;

declare const gestaltScreenCaptureMain: number;

declare const gestaltScriptCount: number;

declare const gestaltScriptMgrVersion: number;

declare const gestaltScriptingSupport: number;

declare const gestaltScrollingThrottle: number;

declare const gestaltSerialArbitrationExists: number;

declare const gestaltSerialAttr: number;

declare const gestaltSetDragImageUpdates: number;

declare const gestaltSheetsAreWindowModalBit: number;

declare const gestaltSheetsAreWindowModalMask: number;

declare const gestaltShutdownAttributes: number;

declare const gestaltShutdownHassdOnBootVolUnmount: number;

declare const gestaltSlotAttr: number;

declare const gestaltSlotMgrExists: number;

declare const gestaltSndPlayDoubleBuffer: number;

declare const gestaltSoftwareVendorApple: number;

declare const gestaltSoftwareVendorCode: number;

declare const gestaltSoftwareVendorLicensee: number;

declare const gestaltSoundAttr: number;

declare const gestaltSoundIOMgrPresent: number;

declare const gestaltSpecificMatchSupport: number;

declare const gestaltSpeechAttr: number;

declare const gestaltSpeechHasPPCGlue: number;

declare const gestaltSpeechMgrPresent: number;

declare const gestaltSpeechRecognitionAttr: number;

declare const gestaltSpeechRecognitionVersion: number;

declare const gestaltSplitOSAttr: number;

declare const gestaltSplitOSAware: number;

declare const gestaltSplitOSBootDriveIsNetworkVolume: number;

declare const gestaltSplitOSEnablerVolumeIsDifferentFromBootVolume: number;

declare const gestaltSplitOSMachineNameSetToNetworkNameTemp: number;

declare const gestaltSplitOSMachineNameStartupDiskIsNonPersistent: number;

declare const gestaltSquareMenuBar: number;

declare const gestaltStandardFile58: number;

declare const gestaltStandardFileAttr: number;

declare const gestaltStandardFileHasColorIcons: number;

declare const gestaltStandardFileHasDynamicVolumeAllocation: number;

declare const gestaltStandardFileTranslationAware: number;

declare const gestaltStandardFileUseGenericIcons: number;

declare const gestaltStandardTimeMgr: number;

declare const gestaltStdADBKbd: number;

declare const gestaltStdISOADBKbd: number;

declare const gestaltStdNBPAttr: number;

declare const gestaltStdNBPPresent: number;

declare const gestaltStdNBPSupportsAutoPosition: number;

declare const gestaltStereoCapability: number;

declare const gestaltStereoInput: number;

declare const gestaltStereoMixing: number;

declare const gestaltSupportsApplicationURL: number;

declare const gestaltSupportsFSpResourceFileAlreadyOpenBit: number;

declare const gestaltSupportsMirroring: number;

declare const gestaltSysArchitecture: number;

declare const gestaltSysDebuggerSupport: number;

declare const gestaltSysZoneGrowable: number;

declare const gestaltSystemUpdateVersion: number;

declare const gestaltSystemVersion: number;

declare const gestaltSystemVersionBugFix: number;

declare const gestaltSystemVersionMajor: number;

declare const gestaltSystemVersionMinor: number;

declare const gestaltTE1: number;

declare const gestaltTE2: number;

declare const gestaltTE3: number;

declare const gestaltTE4: number;

declare const gestaltTE5: number;

declare const gestaltTE6: number;

declare const gestaltTEAttr: number;

declare const gestaltTEHasGetHiliteRgn: number;

declare const gestaltTEHasWhiteBackground: number;

declare const gestaltTESupportsInlineInput: number;

declare const gestaltTESupportsTextObjects: number;

declare const gestaltTSMDisplayMgrAwareBit: number;

declare const gestaltTSMTE: number;

declare const gestaltTSMTE1: number;

declare const gestaltTSMTE15: number;

declare const gestaltTSMTE152: number;

declare const gestaltTSMTEAttr: number;

declare const gestaltTSMTEPresent: number;

declare const gestaltTSMTEVersion: number;

declare const gestaltTSMdoesTSMTEBit: number;

declare const gestaltTSMgr15: number;

declare const gestaltTSMgr20: number;

declare const gestaltTSMgr22: number;

declare const gestaltTSMgr23: number;

declare const gestaltTSMgrAttr: number;

declare const gestaltTSMgrVersion: number;

declare const gestaltTVAttr: number;

declare const gestaltTeleMgrAttr: number;

declare const gestaltTeleMgrAutoAnswer: number;

declare const gestaltTeleMgrIndHandset: number;

declare const gestaltTeleMgrNewTELNewSupport: number;

declare const gestaltTeleMgrPowerPCSupport: number;

declare const gestaltTeleMgrPresent: number;

declare const gestaltTeleMgrSilenceDetect: number;

declare const gestaltTeleMgrSoundStreams: number;

declare const gestaltTelephoneSpeechRecognition: number;

declare const gestaltTempMemSupport: number;

declare const gestaltTempMemTracked: number;

declare const gestaltTermMgrAttr: number;

declare const gestaltTermMgrErrorString: number;

declare const gestaltTermMgrPresent: number;

declare const gestaltTextEditVersion: number;

declare const gestaltThirdPartyANSIKbd: number;

declare const gestaltThirdPartyISOKbd: number;

declare const gestaltThirdPartyJISKbd: number;

declare const gestaltThreadMgrAttr: number;

declare const gestaltThreadMgrPresent: number;

declare const gestaltThreadsLibraryPresent: number;

declare const gestaltTimeMgrVersion: number;

declare const gestaltToolboxTable: number;

declare const gestaltTranslationAttr: number;

declare const gestaltTranslationGetPathAPIAvail: number;

declare const gestaltTranslationMgrExists: number;

declare const gestaltTranslationMgrHintOrder: number;

declare const gestaltTranslationPPCAvail: number;

declare const gestaltUDFSupport: number;

declare const gestaltUSBAndyANSIKbd: number;

declare const gestaltUSBAndyISOKbd: number;

declare const gestaltUSBAndyJISKbd: number;

declare const gestaltUSBAttr: number;

declare const gestaltUSBCosmoANSIKbd: number;

declare const gestaltUSBCosmoISOKbd: number;

declare const gestaltUSBCosmoJISKbd: number;

declare const gestaltUSBHasIsoch: number;

declare const gestaltUSBPresent: number;

declare const gestaltUSBPrinterSharingAttr: number;

declare const gestaltUSBPrinterSharingAttrBooted: number;

declare const gestaltUSBPrinterSharingAttrMask: number;

declare const gestaltUSBPrinterSharingAttrRunning: number;

declare const gestaltUSBPrinterSharingVersion: number;

declare const gestaltUSBPrinterSharingVersionMask: number;

declare const gestaltUSBProF16ANSIKbd: number;

declare const gestaltUSBProF16ISOKbd: number;

declare const gestaltUSBProF16JISKbd: number;

declare const gestaltUSBVersion: number;

declare const gestaltUndefSelectorErr: number;

declare const gestaltUnknownErr: number;

declare const gestaltUnknownThirdPartyKbd: number;

declare const gestaltUserVisibleMachineName: number;

declare const gestaltVIA1Addr: number;

declare const gestaltVIA2Addr: number;

declare const gestaltVMAttr: number;

declare const gestaltVMBackingStoreFileRefNum: number;

declare const gestaltVMFilemappingOn: number;

declare const gestaltVMHasLockMemoryForOutput: number;

declare const gestaltVMHasPagingControl: number;

declare const gestaltVMInfoNoneType: number;

declare const gestaltVMInfoSimpleType: number;

declare const gestaltVMInfoSizeStorageType: number;

declare const gestaltVMInfoSizeType: number;

declare const gestaltVMInfoType: number;

declare const gestaltVMPresent: number;

declare const gestaltVMZerosPagesBit: number;

declare const gestaltValueImplementedVers: number;

declare const gestaltVersion: number;

declare const gestaltWSIICanPrintWithoutPrGeneralBit: number;

declare const gestaltWSIISupport: number;

declare const gestaltWindowLiveResizeBit: number;

declare const gestaltWindowLiveResizeMask: number;

declare const gestaltWindowMgrAttr: number;

declare const gestaltWindowMgrPresent: number;

declare const gestaltWindowMgrPresentBit: number;

declare const gestaltWindowMgrPresentMask: number;

declare const gestaltWindowMinimizeToDockBit: number;

declare const gestaltWindowMinimizeToDockMask: number;

declare const gestaltWorldScriptIIAttr: number;

declare const gestaltWorldScriptIIVersion: number;

declare const gestaltX86AdditionalFeatures: number;

declare const gestaltX86Features: number;

declare const gestaltX86HasAPIC: number;

declare const gestaltX86HasCID: number;

declare const gestaltX86HasCLFSH: number;

declare const gestaltX86HasCMOV: number;

declare const gestaltX86HasCX16: number;

declare const gestaltX86HasCX8: number;

declare const gestaltX86HasDE: number;

declare const gestaltX86HasDS: number;

declare const gestaltX86HasDSCPL: number;

declare const gestaltX86HasEST: number;

declare const gestaltX86HasFPU: number;

declare const gestaltX86HasFXSR: number;

declare const gestaltX86HasHTT: number;

declare const gestaltX86HasMCA: number;

declare const gestaltX86HasMCE: number;

declare const gestaltX86HasMMX: number;

declare const gestaltX86HasMONITOR: number;

declare const gestaltX86HasMSR: number;

declare const gestaltX86HasMTRR: number;

declare const gestaltX86HasPAE: number;

declare const gestaltX86HasPAT: number;

declare const gestaltX86HasPGE: number;

declare const gestaltX86HasPSE: number;

declare const gestaltX86HasPSE36: number;

declare const gestaltX86HasPSN: number;

declare const gestaltX86HasSEP: number;

declare const gestaltX86HasSMX: number;

declare const gestaltX86HasSS: number;

declare const gestaltX86HasSSE: number;

declare const gestaltX86HasSSE2: number;

declare const gestaltX86HasSSE3: number;

declare const gestaltX86HasSupplementalSSE3: number;

declare const gestaltX86HasTM: number;

declare const gestaltX86HasTM2: number;

declare const gestaltX86HasTSC: number;

declare const gestaltX86HasVME: number;

declare const gestaltX86HasVMX: number;

declare const gestaltX86HasxTPR: number;

declare const gestaltX86ResACPI: number;

declare const gestaltX86Serviced20: number;

declare const gfpErr: number;

declare const grabTimeComplete: number;

declare const graveUprE: number;

declare const graveUprI: number;

declare const graveUprO: number;

declare const graveUprU: number;

declare const guestNotAllowedErr: number;

declare const hMenuFindErr: number;

declare const hachek: number;

declare const handlerNotFoundErr: number;

declare const hardwareConfigErr: number;

declare const hmBalloonAborted: number;

declare const hmCloseViewActive: number;

declare const hmHelpDisabled: number;

declare const hmHelpManagerNotInited: number;

declare const hmNoBalloonUp: number;

declare const hmOperationUnsupported: number;

declare const hmSameAsLastBalloon: number;

declare const hmSkippedBalloon: number;

declare const hmUnknownHelpType: number;

declare const hmWrongVersion: number;

declare const hourField: number;

declare const hourMask: number;

declare const hrHTMLRenderingLibNotInstalledErr: number;

declare const hrLeadingZ: number;

declare const hrMiscellaneousExceptionErr: number;

declare const hrURLNotHandledErr: number;

declare const hrUnableToResizeHandleErr: number;

declare const hwParamErr: number;

declare const iIOAbort: number;

declare const iIOAbortErr: number;

declare const iMemFullErr: number;

declare const illegalChannelOSErr: number;

declare const illegalControllerOSErr: number;

declare const illegalInstrumentOSErr: number;

declare const illegalKnobOSErr: number;

declare const illegalKnobValueOSErr: number;

declare const illegalNoteChannelOSErr: number;

declare const illegalPartOSErr: number;

declare const illegalScrapFlavorFlagsErr: number;

declare const illegalScrapFlavorSizeErr: number;

declare const illegalScrapFlavorTypeErr: number;

declare const illegalVoiceAllocationOSErr: number;

declare const incompatibleVoice: number;

declare const initIWMErr: number;

declare const inputOutOfBounds: number;

declare const insufficientStackErr: number;

declare const intArabic: number;

declare const intEuropean: number;

declare const intJapanese: number;

declare const intOutputMask: number;

declare const intRoman: number;

declare const intWestern: number;

declare const internalComponentErr: number;

declare const internalQuickTimeError: number;

declare const internalScrapErr: number;

declare const interruptsMaskedErr: number;

declare const intlCurrency: number;

declare const invalidAtomContainerErr: number;

declare const invalidAtomErr: number;

declare const invalidAtomTypeErr: number;

declare const invalidChunkCache: number;

declare const invalidChunkNum: number;

declare const invalidComponentID: number;

declare const invalidDataRef: number;

declare const invalidDataRefContainer: number;

declare const invalidDuration: number;

declare const invalidEditState: number;

declare const invalidFolderTypeErr: number;

declare const invalidHandler: number;

declare const invalidHotSpotIDErr: number;

declare const invalidIconRefErr: number;

declare const invalidImageIndexErr: number;

declare const invalidIndexErr: number;

declare const invalidMedia: number;

declare const invalidMovie: number;

declare const invalidNodeFormatErr: number;

declare const invalidNodeIDErr: number;

declare const invalidPickerType: number;

declare const invalidRect: number;

declare const invalidSampleDescIndex: number;

declare const invalidSampleDescription: number;

declare const invalidSampleNum: number;

declare const invalidSampleTable: number;

declare const invalidSpriteIDErr: number;

declare const invalidSpriteIndexErr: number;

declare const invalidSpritePropertyErr: number;

declare const invalidSpriteWorldPropertyErr: number;

declare const invalidTime: number;

declare const invalidTrack: number;

declare const invalidTranslationPathErr: number;

declare const invalidViewStateErr: number;

declare const ioDirFlg: number;

declare const ioDirMask: number;

declare const ioErr: number;

declare const ioQType: number;

declare const itlcDisableKeyScriptSync: number;

declare const itlcDisableKeyScriptSyncMask: number;

declare const itlcDualCaret: number;

declare const itlcShowIcon: number;

declare const itlcSysDirection: number;

declare const iuCurrentCurLang: number;

declare const iuCurrentDefLang: number;

declare const iuCurrentScript: number;

declare const iuNumberPartsTable: number;

declare const iuScriptCurLang: number;

declare const iuScriptDefLang: number;

declare const iuSystemCurLang: number;

declare const iuSystemDefLang: number;

declare const iuSystemScript: number;

declare const iuUnTokenTable: number;

declare const iuWhiteSpaceList: number;

declare const iuWordSelectTable: number;

declare const iuWordWrapTable: number;

declare const k16BitCardErr: number;

declare const k32BitHeap: number;

declare const k68kInterruptLevelMask: number;

declare const kAEAND: number;

declare const kAEAbout: number;

declare const kAEActivate: number;

declare const kAEAfter: number;

declare const kAEAliasSelection: number;

declare const kAEAll: number;

declare const kAEAllCaps: number;

declare const kAEAlwaysInteract: number;

declare const kAEAnswer: number;

declare const kAEAny: number;

declare const kAEApplicationClass: number;

declare const kAEApplicationDied: number;

declare const kAEArrowAtEnd: number;

declare const kAEArrowAtStart: number;

declare const kAEArrowBothEnds: number;

declare const kAEAsk: number;

declare const kAEAutoDown: number;

declare const kAEBefore: number;

declare const kAEBeginTransaction: number;

declare const kAEBeginning: number;

declare const kAEBeginsWith: number;

declare const kAEBold: number;

declare const kAECanInteract: number;

declare const kAECanSwitchLayer: number;

declare const kAECaseSensEquals: number;

declare const kAECentered: number;

declare const kAEChangeView: number;

declare const kAEClone: number;

declare const kAEClose: number;

declare const kAECommandClass: number;

declare const kAECondensed: number;

declare const kAEContains: number;

declare const kAECopy: number;

declare const kAECoreSuite: number;

declare const kAECountElements: number;

declare const kAECreateElement: number;

declare const kAECreatePublisher: number;

declare const kAECut: number;

declare const kAEDataArray: number;

declare const kAEDeactivate: number;

declare const kAEDebugPOSTHeader: number;

declare const kAEDebugReplyHeader: number;

declare const kAEDebugXMLDebugAll: number;

declare const kAEDebugXMLRequest: number;

declare const kAEDebugXMLResponse: number;

declare const kAEDefaultTimeout: number;

declare const kAEDelete: number;

declare const kAEDescArray: number;

declare const kAEDescListFactorNone: number;

declare const kAEDescListFactorType: number;

declare const kAEDescListFactorTypeAndSize: number;

declare const kAEDirectCall: number;

declare const kAEDiskEvent: number;

declare const kAEDoNotAutomaticallyAddAnnotationsToEvent: number;

declare const kAEDoNotPromptForUserConsent: number;

declare const kAEDoObjectsExist: number;

declare const kAEDoScript: number;

declare const kAEDontExecute: number;

declare const kAEDontReconnect: number;

declare const kAEDontRecord: number;

declare const kAEDown: number;

declare const kAEDrag: number;

declare const kAEDuplicateSelection: number;

declare const kAEEditGraphic: number;

declare const kAEEmptyTrash: number;

declare const kAEEnd: number;

declare const kAEEndTransaction: number;

declare const kAEEndsWith: number;

declare const kAEEquals: number;

declare const kAEExpanded: number;

declare const kAEFast: number;

declare const kAEFinderEvents: number;

declare const kAEFirst: number;

declare const kAEFormulaProtect: number;

declare const kAEFullyJustified: number;

declare const kAEGetClassInfo: number;

declare const kAEGetData: number;

declare const kAEGetDataSize: number;

declare const kAEGetEventInfo: number;

declare const kAEGetInfoSelection: number;

declare const kAEGetPrivilegeSelection: number;

declare const kAEGetSuiteInfo: number;

declare const kAEGreaterThan: number;

declare const kAEGreaterThanEquals: number;

declare const kAEGrow: number;

declare const kAEHTTPProxyHostAttr: number;

declare const kAEHTTPProxyPortAttr: number;

declare const kAEHandleArray: number;

declare const kAEHandleSimpleRanges: number;

declare const kAEHiQuality: number;

declare const kAEHidden: number;

declare const kAEHighLevel: number;

declare const kAEHighPriority: number;

declare const kAEIDoMarking: number;

declare const kAEIDoMinimum: number;

declare const kAEIDoWhose: number;

declare const kAEISAction: number;

declare const kAEISActionPath: number;

declare const kAEISClientAddress: number;

declare const kAEISClientIP: number;

declare const kAEISContentType: number;

declare const kAEISFromUser: number;

declare const kAEISFullRequest: number;

declare const kAEISGetURL: number;

declare const kAEISHTTPSearchArgs: number;

declare const kAEISMethod: number;

declare const kAEISPassword: number;

declare const kAEISPostArgs: number;

declare const kAEISReferrer: number;

declare const kAEISScriptName: number;

declare const kAEISServerName: number;

declare const kAEISServerPort: number;

declare const kAEISUserAgent: number;

declare const kAEISUserName: number;

declare const kAEISWebStarSuite: number;

declare const kAEImageGraphic: number;

declare const kAEInfo: number;

declare const kAEInternetSuite: number;

declare const kAEIsUniform: number;

declare const kAEItalic: number;

declare const kAEKeyClass: number;

declare const kAEKeyDescArray: number;

declare const kAEKeyDown: number;

declare const kAELast: number;

declare const kAELeftJustified: number;

declare const kAELessThan: number;

declare const kAELessThanEquals: number;

declare const kAELocalProcess: number;

declare const kAELogOut: number;

declare const kAELowercase: number;

declare const kAEMain: number;

declare const kAEMakeObjectsVisible: number;

declare const kAEMenuClass: number;

declare const kAEMenuSelect: number;

declare const kAEMiddle: number;

declare const kAEMiscStandards: number;

declare const kAEModifiable: number;

declare const kAEMouseClass: number;

declare const kAEMouseDown: number;

declare const kAEMouseDownInBack: number;

declare const kAEMove: number;

declare const kAEMoved: number;

declare const kAENOT: number;

declare const kAENavigationKey: number;

declare const kAENeverInteract: number;

declare const kAENext: number;

declare const kAENo: number;

declare const kAENoArrow: number;

declare const kAENoReply: number;

declare const kAENonmodifiable: number;

declare const kAENormalPriority: number;

declare const kAENotifyRecording: number;

declare const kAENotifyStartRecording: number;

declare const kAENotifyStopRecording: number;

declare const kAENullEvent: number;

declare const kAEOR: number;

declare const kAEOSAXSizeResource: number;

declare const kAEOpen: number;

declare const kAEOpenApplication: number;

declare const kAEOpenContents: number;

declare const kAEOpenDocuments: number;

declare const kAEOpenSelection: number;

declare const kAEOutline: number;

declare const kAEPackedArray: number;

declare const kAEPageSetup: number;

declare const kAEPassSubDescs: number;

declare const kAEPaste: number;

declare const kAEPlain: number;

declare const kAEPrevious: number;

declare const kAEPrint: number;

declare const kAEPrintDocuments: number;

declare const kAEPrintSelection: number;

declare const kAEPrintWindow: number;

declare const kAEProcessNonReplyEvents: number;

declare const kAEPromise: number;

declare const kAEPutAwaySelection: number;

declare const kAEQDAdMax: number;

declare const kAEQDAdMin: number;

declare const kAEQDAddOver: number;

declare const kAEQDAddPin: number;

declare const kAEQDBic: number;

declare const kAEQDBlend: number;

declare const kAEQDCopy: number;

declare const kAEQDNotBic: number;

declare const kAEQDNotCopy: number;

declare const kAEQDNotOr: number;

declare const kAEQDNotXor: number;

declare const kAEQDOr: number;

declare const kAEQDSubOver: number;

declare const kAEQDSubPin: number;

declare const kAEQDSupplementalSuite: number;

declare const kAEQDXor: number;

declare const kAEQueueReply: number;

declare const kAEQuickdrawSuite: number;

declare const kAEQuitAll: number;

declare const kAEQuitApplication: number;

declare const kAEQuitPreserveState: number;

declare const kAEQuitReason: number;

declare const kAERPCClass: number;

declare const kAERawKey: number;

declare const kAEReallyLogOut: number;

declare const kAERedo: number;

declare const kAERegular: number;

declare const kAERemoteProcess: number;
declare var kAERemoteProcessNameKey: NSObject;

declare var kAERemoteProcessProcessIDKey: NSObject;

declare var kAERemoteProcessURLKey: NSObject;

declare var kAERemoteProcessUserIDKey: NSObject;


declare const kAEReopenApplication: number;

declare const kAEReplace: number;

declare const kAERequiredSuite: number;

declare const kAEResized: number;

declare const kAEResolveNestedLists: number;

declare const kAERestart: number;

declare const kAEResume: number;

declare const kAERevealSelection: number;

declare const kAERevert: number;

declare const kAERightJustified: number;

declare const kAESOAPScheme: number;

declare const kAESameProcess: number;

declare const kAESave: number;

declare const kAEScrapEvent: number;

declare const kAEScriptingSizeResource: number;

declare const kAESelect: number;

declare const kAESetData: number;

declare const kAESetPosition: number;

declare const kAEShadow: number;

declare const kAESharedScriptHandler: number;

declare const kAESharing: number;

declare const kAEShowClipboard: number;

declare const kAEShowPreferences: number;

declare const kAEShowRestartDialog: number;

declare const kAEShowShutdownDialog: number;

declare const kAEShutDown: number;

declare const kAESleep: number;

declare const kAESmallCaps: number;

declare const kAESocks4Protocol: number;

declare const kAESocks5Protocol: number;

declare const kAESocksHostAttr: number;

declare const kAESocksPasswordAttr: number;

declare const kAESocksPortAttr: number;

declare const kAESocksProxyAttr: number;

declare const kAESocksUserAttr: number;

declare const kAESpecialClassProperties: number;

declare const kAEStartRecording: number;

declare const kAEStopRecording: number;

declare const kAEStoppedMoving: number;

declare const kAEStrikethrough: number;

declare const kAESubscript: number;

declare const kAESuperscript: number;

declare const kAESuspend: number;

declare const kAETableSuite: number;

declare const kAETerminologyExtension: number;

declare const kAETextSuite: number;

declare const kAETransactionTerminated: number;

declare const kAEUTApostrophe: number;

declare const kAEUTChangesState: number;

declare const kAEUTDirectParamIsReference: number;

declare const kAEUTEnumListIsExclusive: number;

declare const kAEUTEnumerated: number;

declare const kAEUTEnumsAreTypes: number;

declare const kAEUTFeminine: number;

declare const kAEUTHasReturningParam: number;

declare const kAEUTMasculine: number;

declare const kAEUTNotDirectParamIsTarget: number;

declare const kAEUTOptional: number;

declare const kAEUTParamIsReference: number;

declare const kAEUTParamIsTarget: number;

declare const kAEUTPlural: number;

declare const kAEUTPropertyIsReference: number;

declare const kAEUTReadWrite: number;

declare const kAEUTReplyIsReference: number;

declare const kAEUTTightBindingFunction: number;

declare const kAEUTlistOfItems: number;

declare const kAEUnderline: number;

declare const kAEUndo: number;

declare const kAEUnknownSource: number;

declare const kAEUp: number;

declare const kAEUpdate: number;

declare const kAEUseHTTPProxyAttr: number;

declare const kAEUseRelativeIterators: number;

declare const kAEUseSocksAttr: number;

declare const kAEUserTerminology: number;

declare const kAEVirtualKey: number;

declare const kAEWaitReply: number;

declare const kAEWakeUpEvent: number;

declare const kAEWantReceipt: number;

declare const kAEWholeWordEquals: number;

declare const kAEWindowClass: number;

declare const kAEXMLRPCScheme: number;

declare const kAEYes: number;

declare const kAEZoom: number;

declare const kAEZoomIn: number;

declare const kAEZoomOut: number;

declare const kAFPExtendedFlagsAlternateAddressMask: number;

declare const kAFPServerIcon: number;

declare const kAFPTagLengthDDP: number;

declare const kAFPTagLengthIP: number;

declare const kAFPTagLengthIPPort: number;

declare const kAFPTagTypeDDP: number;

declare const kAFPTagTypeDNS: number;

declare const kAFPTagTypeIP: number;

declare const kAFPTagTypeIPPort: number;

declare const kALMDeferSwitchErr: number;

declare const kALMDuplicateModuleErr: number;

declare const kALMGroupNotFoundErr: number;

declare const kALMInstallationErr: number;

declare const kALMInternalErr: number;

declare const kALMLocationNotFoundErr: number;

declare const kALMLocationsFolderType: number;

declare const kALMModuleCommunicationErr: number;

declare const kALMModulesFolderType: number;

declare const kALMNoSuchModuleErr: number;

declare const kALMPreferencesFolderType: number;

declare const kALMRebootFlagsLevelErr: number;

declare const kARMMountVol: number;

declare const kARMMultVols: number;

declare const kARMNoUI: number;

declare const kARMSearch: number;

declare const kARMSearchMore: number;

declare const kARMSearchRelFirst: number;

declare const kARMTryFileIDFirst: number;

declare const kATSUBadStreamErr: number;

declare const kATSUBusyObjectErr: number;

declare const kATSUCoordinateOverflowErr: number;

declare const kATSUFontsMatched: number;

declare const kATSUFontsNotMatched: number;

declare const kATSUInvalidAttributeSizeErr: number;

declare const kATSUInvalidAttributeTagErr: number;

declare const kATSUInvalidAttributeValueErr: number;

declare const kATSUInvalidCacheErr: number;

declare const kATSUInvalidCallInsideCallbackErr: number;

declare const kATSUInvalidFontErr: number;

declare const kATSUInvalidFontFallbacksErr: number;

declare const kATSUInvalidStyleErr: number;

declare const kATSUInvalidTextLayoutErr: number;

declare const kATSUInvalidTextRangeErr: number;

declare const kATSULastErr: number;

declare const kATSULineBreakInWord: number;

declare const kATSULowLevelErr: number;

declare const kATSUNoCorrespondingFontErr: number;

declare const kATSUNoFontCmapAvailableErr: number;

declare const kATSUNoFontNameErr: number;

declare const kATSUNoFontScalerAvailableErr: number;

declare const kATSUNoStyleRunsAssignedErr: number;

declare const kATSUNotSetErr: number;

declare const kATSUOutputBufferTooSmallErr: number;

declare const kATSUQuickDrawTextErr: number;

declare const kATSUUnsupportedStreamFormatErr: number;

declare const kAVLInOrder: number;

declare const kAVLIsLeaf: number;

declare const kAVLIsLeftBranch: number;

declare const kAVLIsRightBranch: number;

declare const kAVLIsTree: number;

declare const kAVLNullNode: number;

declare const kAVLPostOrder: number;

declare const kAVLPreOrder: number;

declare const kAccessException: number;

declare const kAccountKCItemAttr: number;

declare const kAddKCEvent: number;

declare const kAddKCEventMask: number;

declare const kAddressKCItemAttr: number;

declare const kAlertCautionBadgeIcon: number;

declare const kAlertCautionIcon: number;

declare const kAlertNoteIcon: number;

declare const kAlertStopIcon: number;

declare const kAliasBadgeIcon: number;

declare const kAlreadySavedStateErr: number;

declare const kAlwaysSendSubject: number;

declare const kAnyAuthType: number;

declare const kAnyComponentFlagsMask: number;

declare const kAnyComponentManufacturer: number;

declare const kAnyComponentSubType: number;

declare const kAnyComponentType: number;

declare const kAnyPort: number;

declare const kAnyProtocol: number;

declare const kAnyTransactionID: number;

declare const kAppPackageAliasType: number;

declare const kAppearanceFolderIcon: number;

declare const kAppearanceFolderType: number;

declare const kAppleExtrasFolderIcon: number;

declare const kAppleExtrasFolderType: number;

declare const kAppleLogoIcon: number;

declare const kAppleManufacturer: number;

declare const kAppleMenuFolderAliasType: number;

declare const kAppleMenuFolderIcon: number;

declare const kAppleMenuFolderIconResource: number;

declare const kAppleMenuFolderType: number;

declare const kAppleMenuIcon: number;

declare const kAppleScriptBadgeIcon: number;

declare const kAppleShareAuthenticationFolderType: number;

declare const kAppleSharePasswordKCItemClass: number;

declare const kAppleShareSupportFolderType: number;

declare const kAppleTalkIcon: number;

declare const kAppleTalkZoneIcon: number;

declare const kAppleshareAutomountServerAliasesFolderType: number;

declare const kApplicationAliasType: number;

declare const kApplicationCPAliasType: number;

declare const kApplicationDAAliasType: number;

declare const kApplicationSupportFolderIcon: number;

declare const kApplicationSupportFolderType: number;

declare const kApplicationThreadID: number;

declare const kApplicationsFolderIcon: number;

declare const kApplicationsFolderType: number;

declare const kAssistantsFolderIcon: number;

declare const kAssistantsFolderType: number;

declare const kAsyncEjectComplete: number;

declare const kAsyncEjectInProgress: number;

declare const kAsyncMountComplete: number;

declare const kAsyncMountInProgress: number;

declare const kAsyncUnmountComplete: number;

declare const kAsyncUnmountInProgress: number;

declare const kAttemptDupCardEntryErr: number;

declare const kAudioAlertSoundsFolderType: number;

declare const kAudioComponentsFolderType: number;

declare const kAudioDigidesignFolderType: number;

declare const kAudioPlugInsFolderType: number;

declare const kAudioPresetsFolderType: number;

declare const kAudioSoundBanksFolderType: number;

declare const kAudioSoundsFolderType: number;

declare const kAudioSupportFolderType: number;

declare const kAudioVSTFolderType: number;

declare const kAuthTypeKCItemAttr: number;

declare const kAutoGenerateReturnID: number;

declare const kAutomatorWorkflowsFolderType: number;

declare const kAutosaveInformationFolderType: number;

declare const kBLibTag2: number;

declare const kBackwardArrowIcon: number;

declare const kBadAdapterErr: number;

declare const kBadArgLengthErr: number;

declare const kBadArgsErr: number;

declare const kBadAttributeErr: number;

declare const kBadBaseErr: number;

declare const kBadCISErr: number;

declare const kBadCustomIFIDErr: number;

declare const kBadDeviceErr: number;

declare const kBadEDCErr: number;

declare const kBadHandleErr: number;

declare const kBadIRQErr: number;

declare const kBadLinkErr: number;

declare const kBadOffsetErr: number;

declare const kBadPageErr: number;

declare const kBadSizeErr: number;

declare const kBadSocketErr: number;

declare const kBadSpeedErr: number;

declare const kBadTupleDataErr: number;

declare const kBadTypeErr: number;

declare const kBadVccErr: number;

declare const kBadVppErr: number;

declare const kBadWindowErr: number;

declare const kBig5_BasicVariant: number;

declare const kBig5_DOSVariant: number;

declare const kBig5_ETenVariant: number;

declare const kBig5_StandardVariant: number;

declare const kBlessedBusErrorBait: number;

declare const kBlessedFolder: number;

declare const kBootTimeStartupItemsFolderType: number;

declare const kBridgeSoftwareRunningCantSleep: number;

declare const kBurningIcon: number;

declare const kBusyErr: number;

declare const kByCommentView: number;

declare const kByDateView: number;

declare const kByIconView: number;

declare const kByKindView: number;

declare const kByLabelView: number;

declare const kByNameView: number;

declare const kBySizeView: number;

declare const kBySmallIcon: number;

declare const kByVersionView: number;

declare const kCCRegisterCBit: number;

declare const kCCRegisterNBit: number;

declare const kCCRegisterVBit: number;

declare const kCCRegisterXBit: number;

declare const kCCRegisterZBit: number;

declare const kCFM68kRTA: number;

declare const kCSAcceptAllComponentsMode: number;

declare const kCSAcceptThreadSafeComponentsOnlyMode: number;

declare const kCSDiskSpaceRecoveryOptionNoUI: number;

declare const kCSIdentityAuthorityNotAccessibleErr: number;

declare const kCSIdentityClassGroup: number;

declare const kCSIdentityClassUser: number;

declare const kCSIdentityCommitCompleted: number;

declare const kCSIdentityDeletedErr: number;

declare const kCSIdentityDuplicateFullNameErr: number;

declare const kCSIdentityDuplicatePosixNameErr: number;
declare var kCSIdentityErrorDomain: NSObject;


declare const kCSIdentityFlagHidden: number;

declare const kCSIdentityFlagNone: number;
declare var kCSIdentityGeneratePosixName: NSObject;


declare const kCSIdentityInvalidFullNameErr: number;

declare const kCSIdentityInvalidPosixNameErr: number;

declare const kCSIdentityPermissionErr: number;

declare const kCSIdentityQueryEventErrorOccurred: number;

declare const kCSIdentityQueryEventResultsAdded: number;

declare const kCSIdentityQueryEventResultsChanged: number;

declare const kCSIdentityQueryEventResultsRemoved: number;

declare const kCSIdentityQueryEventSearchPhaseFinished: number;

declare const kCSIdentityQueryGenerateUpdateEvents: number;

declare const kCSIdentityQueryIncludeHiddenIdentities: number;

declare const kCSIdentityQueryStringBeginsWith: number;

declare const kCSIdentityQueryStringEquals: number;

declare const kCSIdentityUnknownAuthorityErr: number;

declare const kCStackBased: number;

declare const kCachedDataFolderType: number;

declare const kCallingConventionMask: number;

declare const kCallingConventionPhase: number;

declare const kCallingConventionWidth: number;

declare const kCantConfigureCardErr: number;

declare const kCantReportProcessorTemperatureErr: number;

declare const kCarbonLibraryFolderType: number;

declare const kCardBusCardErr: number;

declare const kCardPowerOffErr: number;

declare const kCertSearchAny: number;

declare const kCertSearchDecryptAllowed: number;

declare const kCertSearchDecryptDisallowed: number;

declare const kCertSearchDecryptIgnored: number;

declare const kCertSearchDecryptMask: number;

declare const kCertSearchEncryptAllowed: number;

declare const kCertSearchEncryptDisallowed: number;

declare const kCertSearchEncryptIgnored: number;

declare const kCertSearchEncryptMask: number;

declare const kCertSearchPrivKeyRequired: number;

declare const kCertSearchShift: number;

declare const kCertSearchSigningAllowed: number;

declare const kCertSearchSigningDisallowed: number;

declare const kCertSearchSigningIgnored: number;

declare const kCertSearchSigningMask: number;

declare const kCertSearchUnwrapAllowed: number;

declare const kCertSearchUnwrapDisallowed: number;

declare const kCertSearchUnwrapIgnored: number;

declare const kCertSearchUnwrapMask: number;

declare const kCertSearchVerifyAllowed: number;

declare const kCertSearchVerifyDisallowed: number;

declare const kCertSearchVerifyIgnored: number;

declare const kCertSearchVerifyMask: number;

declare const kCertSearchWrapAllowed: number;

declare const kCertSearchWrapDisallowed: number;

declare const kCertSearchWrapIgnored: number;

declare const kCertSearchWrapMask: number;

declare const kCertUsageAllAdd: number;

declare const kCertUsageDecryptAdd: number;

declare const kCertUsageDecryptAskAndAdd: number;

declare const kCertUsageEncryptAdd: number;

declare const kCertUsageEncryptAskAndAdd: number;

declare const kCertUsageKeyExchAdd: number;

declare const kCertUsageKeyExchAskAndAdd: number;

declare const kCertUsageRootAdd: number;

declare const kCertUsageRootAskAndAdd: number;

declare const kCertUsageSSLAdd: number;

declare const kCertUsageSSLAskAndAdd: number;

declare const kCertUsageShift: number;

declare const kCertUsageSigningAdd: number;

declare const kCertUsageSigningAskAndAdd: number;

declare const kCertUsageVerifyAdd: number;

declare const kCertUsageVerifyAskAndAdd: number;

declare const kCertificateKCItemClass: number;

declare const kChewableItemsFolderType: number;

declare const kClassKCItemAttr: number;

declare const kClassicDesktopFolderType: number;

declare const kClassicDomain: number;

declare const kClassicPreferencesFolderType: number;

declare const kClientRequestDenied: number;

declare const kClipboardIcon: number;

declare const kClippingCreator: number;

declare const kClippingPictureType: number;

declare const kClippingPictureTypeIcon: number;

declare const kClippingSoundType: number;

declare const kClippingSoundTypeIcon: number;

declare const kClippingTextType: number;

declare const kClippingTextTypeIcon: number;

declare const kClippingUnknownType: number;

declare const kClippingUnknownTypeIcon: number;

declare const kCollateAttributesNotFoundErr: number;

declare const kCollateBufferTooSmall: number;

declare const kCollateInvalidChar: number;

declare const kCollateInvalidCollationRef: number;

declare const kCollateInvalidOptions: number;

declare const kCollateMissingUnicodeTableErr: number;

declare const kCollatePatternNotFoundErr: number;

declare const kCollateUnicodeConvertFailedErr: number;

declare const kCollectionAllAttributes: number;

declare const kCollectionDefaultAttributes: number;

declare const kCollectionDontWantAttributes: number;

declare const kCollectionDontWantData: number;

declare const kCollectionDontWantId: number;

declare const kCollectionDontWantIndex: number;

declare const kCollectionDontWantSize: number;

declare const kCollectionDontWantTag: number;

declare const kCollectionLockBit: number;

declare const kCollectionLockMask: number;

declare const kCollectionNoAttributes: number;

declare const kCollectionPersistenceBit: number;

declare const kCollectionPersistenceMask: number;

declare const kCollectionReserved0Bit: number;

declare const kCollectionReserved0Mask: number;

declare const kCollectionReserved10Bit: number;

declare const kCollectionReserved10Mask: number;

declare const kCollectionReserved11Bit: number;

declare const kCollectionReserved11Mask: number;

declare const kCollectionReserved12Bit: number;

declare const kCollectionReserved12Mask: number;

declare const kCollectionReserved13Bit: number;

declare const kCollectionReserved13Mask: number;

declare const kCollectionReserved1Bit: number;

declare const kCollectionReserved1Mask: number;

declare const kCollectionReserved2Bit: number;

declare const kCollectionReserved2Mask: number;

declare const kCollectionReserved3Bit: number;

declare const kCollectionReserved3Mask: number;

declare const kCollectionReserved4Bit: number;

declare const kCollectionReserved4Mask: number;

declare const kCollectionReserved5Bit: number;

declare const kCollectionReserved5Mask: number;

declare const kCollectionReserved6Bit: number;

declare const kCollectionReserved6Mask: number;

declare const kCollectionReserved7Bit: number;

declare const kCollectionReserved7Mask: number;

declare const kCollectionReserved8Bit: number;

declare const kCollectionReserved8Mask: number;

declare const kCollectionReserved9Bit: number;

declare const kCollectionReserved9Mask: number;

declare const kCollectionUser0Bit: number;

declare const kCollectionUser0Mask: number;

declare const kCollectionUser10Bit: number;

declare const kCollectionUser10Mask: number;

declare const kCollectionUser11Bit: number;

declare const kCollectionUser11Mask: number;

declare const kCollectionUser12Bit: number;

declare const kCollectionUser12Mask: number;

declare const kCollectionUser13Bit: number;

declare const kCollectionUser13Mask: number;

declare const kCollectionUser14Bit: number;

declare const kCollectionUser14Mask: number;

declare const kCollectionUser15Bit: number;

declare const kCollectionUser15Mask: number;

declare const kCollectionUser1Bit: number;

declare const kCollectionUser1Mask: number;

declare const kCollectionUser2Bit: number;

declare const kCollectionUser2Mask: number;

declare const kCollectionUser3Bit: number;

declare const kCollectionUser3Mask: number;

declare const kCollectionUser4Bit: number;

declare const kCollectionUser4Mask: number;

declare const kCollectionUser5Bit: number;

declare const kCollectionUser5Mask: number;

declare const kCollectionUser6Bit: number;

declare const kCollectionUser6Mask: number;

declare const kCollectionUser7Bit: number;

declare const kCollectionUser7Mask: number;

declare const kCollectionUser8Bit: number;

declare const kCollectionUser8Mask: number;

declare const kCollectionUser9Bit: number;

declare const kCollectionUser9Mask: number;

declare const kCollectionUserAttributes: number;

declare const kColor: number;

declare const kColorPickersFolderType: number;

declare const kColorSyncCMMFolderType: number;

declare const kColorSyncFolderIcon: number;

declare const kColorSyncFolderType: number;

declare const kColorSyncProfilesFolderType: number;

declare const kColorSyncScriptingFolderType: number;

declare const kCommentKCItemAttr: number;

declare const kCommonNameKCItemAttr: number;

declare const kComponentAliasResourceType: number;

declare const kComponentCanDoSelect: number;

declare const kComponentCloseSelect: number;

declare const kComponentDebugOption: number;

declare const kComponentExecuteWiredActionSelect: number;

declare const kComponentGetMPWorkFunctionSelect: number;

declare const kComponentGetPublicResourceSelect: number;

declare const kComponentOpenSelect: number;

declare const kComponentRegisterSelect: number;

declare const kComponentResourceType: number;

declare const kComponentTargetSelect: number;

declare const kComponentUnregisterSelect: number;

declare const kComponentVersionSelect: number;

declare const kComponentsFolderType: number;

declare const kCompositionsFolderType: number;

declare const kComputerIcon: number;

declare const kConfigurationLockedErr: number;

declare const kConnSuite: number;

declare const kConnectToIcon: number;

declare const kContainerAliasType: number;

declare const kContainerCDROMAliasType: number;

declare const kContainerFloppyAliasType: number;

declare const kContainerFolderAliasType: number;

declare const kContainerHardDiskAliasType: number;

declare const kContainerServerAliasType: number;

declare const kContainerTrashAliasType: number;

declare const kContextualMenuItemsFolderIcon: number;

declare const kContextualMenuItemsFolderType: number;

declare const kControlPanelDisabledFolderIcon: number;

declare const kControlPanelDisabledFolderType: number;

declare const kControlPanelFolderAliasType: number;

declare const kControlPanelFolderIcon: number;

declare const kControlPanelFolderIconResource: number;

declare const kControlPanelFolderType: number;

declare const kControlStripModulesFolderIcon: number;

declare const kControlStripModulesFolderType: number;

declare const kCooperativeThread: number;

declare const kCoreEndianAppleEventManagerDomain: number;

declare const kCoreEndianResourceManagerDomain: number;

declare const kCoreEventClass: number;

declare const kCoreServicesFolderType: number;

declare const kCreateFolder: number;

declare const kCreateFolderAtBoot: number;

declare const kCreateFolderAtBootBit: number;

declare const kCreateIfNeeded: number;

declare const kCreationDateKCItemAttr: number;

declare const kCreatorKCItemAttr: number;

declare const kCurrentMixedModeStateRecord: number;

declare const kCurrentThreadID: number;

declare const kCurrentUserFolderLocation: number;

declare const kCurrentUserFolderType: number;

declare const kCurrentUserRemoteFolderLocation: number;

declare const kCurrentUserRemoteFolderType: number;

declare const kCustomBadgeResourceID: number;

declare const kCustomBadgeResourceType: number;

declare const kCustomBadgeResourceVersion: number;

declare const kCustomIconKCItemAttr: number;

declare const kCustomIconResource: number;

declare const kD0DispatchedCStackBased: number;

declare const kD0DispatchedPascalStackBased: number;

declare const kD1DispatchedPascalStackBased: number;

declare const kDMCantBlock: number;

declare const kDMDisplayAlreadyInstalledErr: number;

declare const kDMDisplayNotFoundErr: number;

declare const kDMDriverNotDisplayMgrAwareErr: number;

declare const kDMFoundErr: number;

declare const kDMGenErr: number;

declare const kDMMainDisplayCannotMoveErr: number;

declare const kDMMirroringBlocked: number;

declare const kDMMirroringNotOn: number;

declare const kDMMirroringOnAlready: number;

declare const kDMNoDeviceTableclothErr: number;

declare const kDMNotFoundErr: number;

declare const kDMSWNotInitializedErr: number;

declare const kDMWrongNumberOfDisplays: number;

declare const kDOSJapanesePalmVariant: number;

declare const kDOSJapaneseStandardVariant: number;

declare const kDSpConfirmSwitchWarning: number;

declare const kDSpContextAlreadyReservedErr: number;

declare const kDSpContextNotFoundErr: number;

declare const kDSpContextNotReservedErr: number;

declare const kDSpFrameRateNotReadyErr: number;

declare const kDSpInternalErr: number;

declare const kDSpInvalidAttributesErr: number;

declare const kDSpInvalidContextErr: number;

declare const kDSpNotInitializedErr: number;

declare const kDSpStereoContextErr: number;

declare const kDSpSystemSWTooOldErr: number;

declare const kDTPAbortJobErr: number;

declare const kDTPHoldJobErr: number;

declare const kDTPStopQueueErr: number;

declare const kDTPThirdPartySupported: number;

declare const kDTPTryAgainErr: number;

declare const kDataAccessKCEvent: number;

declare const kDataAccessKCEventMask: number;

declare const kDataAlignmentException: number;

declare const kDataBreakpointException: number;

declare const kDecryptKCItemAttr: number;

declare const kDefaultChangedKCEvent: number;

declare const kDefaultChangedKCEventMask: number;

declare const kDeleteAliasIcon: number;

declare const kDeleteKCEvent: number;

declare const kDeleteKCEventMask: number;

declare const kDescriptionKCItemAttr: number;

declare const kDesktopFolderType: number;

declare const kDesktopIcon: number;

declare const kDesktopIconResource: number;

declare const kDesktopPicturesFolderType: number;

declare const kDesktopPrinterAliasType: number;

declare const kDeveloperApplicationsFolderType: number;

declare const kDeveloperDocsFolderType: number;

declare const kDeveloperFolderType: number;

declare const kDeveloperHelpFolderType: number;

declare const kDeviceInitiatedWake: number;

declare const kDictionariesFolderType: number;

declare const kDirectoryServicesFolderType: number;

declare const kDirectoryServicesPlugInsFolderType: number;

declare const kDispatchedParameterPhase: number;

declare const kDispatchedSelectorSizePhase: number;

declare const kDispatchedSelectorSizeWidth: number;

declare const kDisplayExtensionsFolderType: number;

declare const kDoFolderActionEvent: number;

declare const kDocumentationFolderType: number;

declare const kDocumentsFolderIcon: number;

declare const kDocumentsFolderType: number;

declare const kDomainLibraryFolderType: number;

declare const kDomainTopLevelFolderType: number;

declare const kDontCreateFolder: number;

declare const kDontFindAppBySignature: number;

declare const kDontPassSelector: number;

declare const kDownloadsFolderType: number;

declare const kDozeDemand: number;

declare const kDozeRequest: number;

declare const kDozeToFullWakeUp: number;

declare const kDozeWakeUp: number;

declare const kDropBoxFolderType: number;

declare const kDropFolderAliasType: number;

declare const kDropFolderIcon: number;

declare const kDropFolderIconResource: number;

declare const kDropIconVariant: number;

declare const kDurationForever: number;

declare const kDurationImmediate: number;

declare const kDurationMicrosecond: number;

declare const kDurationMillisecond: number;

declare const kEACCESErr: number;

declare const kEADDRINUSEErr: number;

declare const kEADDRNOTAVAILErr: number;

declare const kEAGAINErr: number;

declare const kEALREADYErr: number;

declare const kEBADFErr: number;

declare const kEBADMSGErr: number;

declare const kEBUSYErr: number;

declare const kECANCELErr: number;

declare const kECONNABORTEDErr: number;

declare const kECONNREFUSEDErr: number;

declare const kECONNRESETErr: number;

declare const kEDEADLKErr: number;

declare const kEDESTADDRREQErr: number;

declare const kEEXISTErr: number;

declare const kEFAULTErr: number;

declare const kEHOSTDOWNErr: number;

declare const kEHOSTUNREACHErr: number;

declare const kEINPROGRESSErr: number;

declare const kEINTRErr: number;

declare const kEINVALErr: number;

declare const kEIOErr: number;

declare const kEISCONNErr: number;

declare const kEMSGSIZEErr: number;

declare const kEMailKCItemAttr: number;

declare const kENETDOWNErr: number;

declare const kENETRESETErr: number;

declare const kENETUNREACHErr: number;

declare const kENOBUFSErr: number;

declare const kENODATAErr: number;

declare const kENODEVErr: number;

declare const kENOENTErr: number;

declare const kENOMEMErr: number;

declare const kENOMSGErr: number;

declare const kENOPROTOOPTErr: number;

declare const kENORSRCErr: number;

declare const kENOSRErr: number;

declare const kENOSTRErr: number;

declare const kENOTCONNErr: number;

declare const kENOTSOCKErr: number;

declare const kENOTTYErr: number;

declare const kENXIOErr: number;

declare const kEOPNOTSUPPErr: number;

declare const kEPERMErr: number;

declare const kEPIPEErr: number;

declare const kEPROTOErr: number;

declare const kEPROTONOSUPPORTErr: number;

declare const kEPROTOTYPEErr: number;

declare const kERANGEErr: number;

declare const kESHUTDOWNErr: number;

declare const kESOCKTNOSUPPORTErr: number;

declare const kESRCHErr: number;

declare const kETIMEDOUTErr: number;

declare const kETIMEErr: number;

declare const kETOOMANYREFSErr: number;

declare const kEUC_CN_BasicVariant: number;

declare const kEUC_CN_DOSVariant: number;

declare const kEUC_KR_BasicVariant: number;

declare const kEUC_KR_DOSVariant: number;

declare const kEWOULDBLOCKErr: number;

declare const kEditorsFolderType: number;

declare const kEjectMediaIcon: number;

declare const kEncryptKCItemAttr: number;

declare const kEncryptPassword: number;

declare const kEndDateKCItemAttr: number;

declare const kEnterIdle: number;

declare const kEnterRun: number;

declare const kEnterStandby: number;

declare const kEveryKCEventMask: number;

declare const kExactMatchThread: number;

declare const kExcludedMemoryException: number;

declare const kExitIdle: number;

declare const kExportedFolderAliasType: number;

declare const kExtendedFlagHasCustomBadge: number;

declare const kExtendedFlagHasRoutingInfo: number;

declare const kExtendedFlagObjectIsBusy: number;

declare const kExtendedFlagsAreInvalid: number;

declare const kExtensionDisabledFolderType: number;

declare const kExtensionFolderAliasType: number;

declare const kExtensionFolderType: number;

declare const kExtensionsDisabledFolderIcon: number;

declare const kExtensionsFolderIcon: number;

declare const kExtensionsFolderIconResource: number;

declare const kFAAttachCommand: number;

declare const kFAEditCommand: number;

declare const kFAFileParam: number;

declare const kFAIndexParam: number;

declare const kFARemoveCommand: number;

declare const kFAServerApp: number;

declare const kFASuiteCode: number;

declare const kFBCaccessCanceled: number;

declare const kFBCaccessorStoreFailed: number;

declare const kFBCaddDocFailed: number;

declare const kFBCallocFailed: number;

declare const kFBCanalysisNotAvailable: number;

declare const kFBCbadIndexFile: number;

declare const kFBCbadIndexFileVersion: number;

declare const kFBCbadParam: number;

declare const kFBCbadSearchSession: number;

declare const kFBCcommitFailed: number;

declare const kFBCcompactionFailed: number;

declare const kFBCdeletionFailed: number;

declare const kFBCfileNotIndexed: number;

declare const kFBCflushFailed: number;

declare const kFBCillegalSessionChange: number;

declare const kFBCindexCreationFailed: number;

declare const kFBCindexDiskIOFailed: number;

declare const kFBCindexFileDestroyed: number;

declare const kFBCindexNotAvailable: number;

declare const kFBCindexNotFound: number;

declare const kFBCindexingCanceled: number;

declare const kFBCindexingFailed: number;

declare const kFBCmergingFailed: number;

declare const kFBCmoveFailed: number;

declare const kFBCnoIndexesFound: number;

declare const kFBCnoSearchSession: number;

declare const kFBCnoSuchHit: number;

declare const kFBCsearchFailed: number;

declare const kFBCsomeFilesNotIndexed: number;

declare const kFBCsummarizationCanceled: number;

declare const kFBCtokenizationFailed: number;

declare const kFBCvTwinExceptionErr: number;

declare const kFBCvalidationFailed: number;

declare const kFMFontContainerAccessErr: number;

declare const kFMFontTableAccessErr: number;

declare const kFMInvalidFontErr: number;

declare const kFMInvalidFontFamilyErr: number;

declare const kFMIterationCompleted: number;

declare const kFMIterationScopeModifiedErr: number;

declare const kFNDirectoryModifiedMessage: number;

declare const kFNNoImplicitAllSubscription: number;

declare const kFNNotifyInBackground: number;

declare const kFNSBadFlattenedSizeErr: number;

declare const kFNSBadProfileVersionErr: number;

declare const kFNSBadReferenceVersionErr: number;

declare const kFNSDuplicateReferenceErr: number;

declare const kFNSInsufficientDataErr: number;

declare const kFNSInvalidProfileErr: number;

declare const kFNSInvalidReferenceErr: number;

declare const kFNSMismatchErr: number;

declare const kFNSNameNotFoundErr: number;

declare const kFPUNotNeeded: number;

declare const kFSAliasInfoFSInfo: number;

declare const kFSAliasInfoFinderInfo: number;

declare const kFSAliasInfoIDs: number;

declare const kFSAliasInfoIsDirectory: number;

declare const kFSAliasInfoNone: number;

declare const kFSAliasInfoTargetCreateDate: number;

declare const kFSAliasInfoVolumeCreateDate: number;

declare const kFSAliasInfoVolumeFlags: number;

declare const kFSAllocAllOrNothingMask: number;

declare const kFSAllocContiguousMask: number;

declare const kFSAllocDefaultFlags: number;

declare const kFSAllocNoRoundUpMask: number;

declare const kFSAllocReservedMask: number;

declare const kFSAllowConcurrentAsyncIOBit: number;

declare const kFSAllowConcurrentAsyncIOMask: number;

declare const kFSCatInfoAccessDate: number;

declare const kFSCatInfoAllDates: number;

declare const kFSCatInfoAttrMod: number;

declare const kFSCatInfoBackupDate: number;

declare const kFSCatInfoContentMod: number;

declare const kFSCatInfoCreateDate: number;

declare const kFSCatInfoDataSizes: number;

declare const kFSCatInfoFSFileSecurityRef: number;

declare const kFSCatInfoFinderInfo: number;

declare const kFSCatInfoFinderXInfo: number;

declare const kFSCatInfoGettableInfo: number;

declare const kFSCatInfoNodeFlags: number;

declare const kFSCatInfoNodeID: number;

declare const kFSCatInfoNone: number;

declare const kFSCatInfoParentDirID: number;

declare const kFSCatInfoPermissions: number;

declare const kFSCatInfoReserved: number;

declare const kFSCatInfoRsrcSizes: number;

declare const kFSCatInfoSetOwnership: number;

declare const kFSCatInfoSettableInfo: number;

declare const kFSCatInfoSharingFlags: number;

declare const kFSCatInfoTextEncoding: number;

declare const kFSCatInfoUserAccess: number;

declare const kFSCatInfoUserPrivs: number;

declare const kFSCatInfoValence: number;

declare const kFSCatInfoVolume: number;

declare const kFSEjectVolumeForceEject: number;

declare const kFSEventStreamCreateFlagFileEvents: number;

declare const kFSEventStreamCreateFlagIgnoreSelf: number;

declare const kFSEventStreamCreateFlagMarkSelf: number;

declare const kFSEventStreamCreateFlagNoDefer: number;

declare const kFSEventStreamCreateFlagNone: number;

declare const kFSEventStreamCreateFlagUseCFTypes: number;

declare const kFSEventStreamCreateFlagUseExtendedData: number;

declare const kFSEventStreamCreateFlagWatchRoot: number;

declare const kFSEventStreamEventFlagEventIdsWrapped: number;

declare const kFSEventStreamEventFlagHistoryDone: number;

declare const kFSEventStreamEventFlagItemChangeOwner: number;

declare const kFSEventStreamEventFlagItemCloned: number;

declare const kFSEventStreamEventFlagItemCreated: number;

declare const kFSEventStreamEventFlagItemFinderInfoMod: number;

declare const kFSEventStreamEventFlagItemInodeMetaMod: number;

declare const kFSEventStreamEventFlagItemIsDir: number;

declare const kFSEventStreamEventFlagItemIsFile: number;

declare const kFSEventStreamEventFlagItemIsHardlink: number;

declare const kFSEventStreamEventFlagItemIsLastHardlink: number;

declare const kFSEventStreamEventFlagItemIsSymlink: number;

declare const kFSEventStreamEventFlagItemModified: number;

declare const kFSEventStreamEventFlagItemRemoved: number;

declare const kFSEventStreamEventFlagItemRenamed: number;

declare const kFSEventStreamEventFlagItemXattrMod: number;

declare const kFSEventStreamEventFlagKernelDropped: number;

declare const kFSEventStreamEventFlagMount: number;

declare const kFSEventStreamEventFlagMustScanSubDirs: number;

declare const kFSEventStreamEventFlagNone: number;

declare const kFSEventStreamEventFlagOwnEvent: number;

declare const kFSEventStreamEventFlagRootChanged: number;

declare const kFSEventStreamEventFlagUnmount: number;

declare const kFSEventStreamEventFlagUserDropped: number;

declare const kFSEventStreamEventIdSinceNow: number;

declare const kFSFileOperationDefaultOptions: number;

declare const kFSFileOperationDoNotMoveAcrossVolumes: number;

declare const kFSFileOperationOverwrite: number;

declare const kFSFileOperationSkipPreflight: number;

declare const kFSFileOperationSkipSourcePermissionErrors: number;

declare const kFSForceReadBit: number;

declare const kFSForceReadMask: number;

declare const kFSInvalidVolumeRefNum: number;

declare const kFSIterateDelete: number;

declare const kFSIterateFlat: number;

declare const kFSIterateReserved: number;

declare const kFSIterateSubtree: number;

declare const kFSMountServerMarkDoNotDisplay: number;

declare const kFSMountServerMountOnMountDir: number;

declare const kFSMountServerMountWithoutNotification: number;

declare const kFSMountServerSuppressConnectionUI: number;

declare const kFSNewLineBit: number;

declare const kFSNewLineCharMask: number;

declare const kFSNewLineMask: number;

declare const kFSNoCacheBit: number;

declare const kFSNoCacheMask: number;

declare const kFSNodeCopyProtectBit: number;

declare const kFSNodeCopyProtectMask: number;

declare const kFSNodeDataOpenBit: number;

declare const kFSNodeDataOpenMask: number;

declare const kFSNodeForkOpenBit: number;

declare const kFSNodeForkOpenMask: number;

declare const kFSNodeHardLinkBit: number;

declare const kFSNodeHardLinkMask: number;

declare const kFSNodeInSharedBit: number;

declare const kFSNodeInSharedMask: number;

declare const kFSNodeIsDirectoryBit: number;

declare const kFSNodeIsDirectoryMask: number;

declare const kFSNodeIsMountedBit: number;

declare const kFSNodeIsMountedMask: number;

declare const kFSNodeIsSharePointBit: number;

declare const kFSNodeIsSharePointMask: number;

declare const kFSNodeLockedBit: number;

declare const kFSNodeLockedMask: number;

declare const kFSNodeResOpenBit: number;

declare const kFSNodeResOpenMask: number;

declare const kFSOperationStageComplete: number;

declare const kFSOperationStagePreflighting: number;

declare const kFSOperationStageRunning: number;

declare const kFSOperationStageUndefined: number;

declare const kFSPathMakeRefDefaultOptions: number;

declare const kFSPathMakeRefDoNotFollowLeafSymlink: number;

declare const kFSPleaseCacheBit: number;

declare const kFSPleaseCacheMask: number;

declare const kFSRdVerifyBit: number;

declare const kFSRdVerifyMask: number;

declare const kFSReplaceObjectDefaultOptions: number;

declare const kFSReplaceObjectDoNotCheckObjectWriteAccess: number;

declare const kFSReplaceObjectPreservePermissionInfo: number;

declare const kFSReplaceObjectReplaceMetadata: number;

declare const kFSReplaceObjectReplacePermissionInfo: number;

declare const kFSReplaceObjectSaveOriginalAsABackup: number;

declare const kFSUnmountVolumeForceUnmount: number;

declare const kFSVolFlagDefaultVolumeBit: number;

declare const kFSVolFlagDefaultVolumeMask: number;

declare const kFSVolFlagFilesOpenBit: number;

declare const kFSVolFlagFilesOpenMask: number;

declare const kFSVolFlagHardwareLockedBit: number;

declare const kFSVolFlagHardwareLockedMask: number;

declare const kFSVolFlagJournalingActiveBit: number;

declare const kFSVolFlagJournalingActiveMask: number;

declare const kFSVolFlagSoftwareLockedBit: number;

declare const kFSVolFlagSoftwareLockedMask: number;

declare const kFSVolInfoBackupDate: number;

declare const kFSVolInfoBlocks: number;

declare const kFSVolInfoCheckedDate: number;

declare const kFSVolInfoCreateDate: number;

declare const kFSVolInfoDataClump: number;

declare const kFSVolInfoDirCount: number;

declare const kFSVolInfoDriveInfo: number;

declare const kFSVolInfoFSInfo: number;

declare const kFSVolInfoFileCount: number;

declare const kFSVolInfoFinderInfo: number;

declare const kFSVolInfoFlags: number;

declare const kFSVolInfoGettableInfo: number;

declare const kFSVolInfoModDate: number;

declare const kFSVolInfoNextAlloc: number;

declare const kFSVolInfoNextID: number;

declare const kFSVolInfoNone: number;

declare const kFSVolInfoRsrcClump: number;

declare const kFSVolInfoSettableInfo: number;

declare const kFSVolInfoSizes: number;

declare const kFTPServerIcon: number;

declare const kFavoriteItemsIcon: number;

declare const kFavoritesFolderIcon: number;

declare const kFavoritesFolderType: number;

declare const kFetchReference: number;

declare const kFileSystemSupportFolderType: number;

declare const kFindByContentFolderType: number;

declare const kFindByContentIndexesFolderType: number;

declare const kFindByContentPluginsFolderType: number;

declare const kFindSupportFolderType: number;

declare const kFinderIcon: number;

declare const kFirstFailKCStopOn: number;

declare const kFirstMagicBusyFiletype: number;

declare const kFirstPassKCStopOn: number;

declare const kFloatingPointException: number;

declare const kFloppyIconResource: number;

declare const kFolderActionCode: number;

declare const kFolderActionsFolderType: number;

declare const kFolderClosedEvent: number;

declare const kFolderCreatedAdminPrivs: number;

declare const kFolderCreatedAdminPrivsBit: number;

declare const kFolderCreatedInvisible: number;

declare const kFolderCreatedInvisibleBit: number;

declare const kFolderCreatedNameLocked: number;

declare const kFolderCreatedNameLockedBit: number;

declare const kFolderInLocalOrRemoteUserFolder: number;

declare const kFolderInRemoteUserFolderIfAvailable: number;

declare const kFolderInRemoteUserFolderIfAvailableBit: number;

declare const kFolderInUserFolder: number;

declare const kFolderInUserFolderBit: number;

declare const kFolderItemsAddedEvent: number;

declare const kFolderItemsRemovedEvent: number;

declare const kFolderManagerFolderInMacOS9FolderIfMacOSXIsInstalledBit: number;

declare const kFolderManagerFolderInMacOS9FolderIfMacOSXIsInstalledMask: number;

declare const kFolderManagerLastDomain: number;

declare const kFolderManagerNewlyCreatedFolderIsLocalizedBit: number;

declare const kFolderManagerNewlyCreatedFolderShouldHaveDotLocalizedCreatedWithinMask: number;

declare const kFolderManagerNotCreatedOnRemoteVolumesBit: number;

declare const kFolderManagerNotCreatedOnRemoteVolumesMask: number;

declare const kFolderMustStayOnSameVolume: number;

declare const kFolderMustStayOnSameVolumeBit: number;

declare const kFolderNeverMatchedInIdentifyFolder: number;

declare const kFolderNeverMatchedInIdentifyFolderBit: number;

declare const kFolderOpenedEvent: number;

declare const kFolderTrackedByAlias: number;

declare const kFolderTrackedByAliasBit: number;

declare const kFolderWindowMovedEvent: number;

declare const kFontCollectionsFolderType: number;

declare const kFontSuitcaseIcon: number;

declare const kFontsFolderIcon: number;

declare const kFontsFolderIconResource: number;

declare const kFontsFolderType: number;

declare const kForkInfoFlagsFileLockedBit: number;

declare const kForkInfoFlagsFileLockedMask: number;

declare const kForkInfoFlagsLargeFileBit: number;

declare const kForkInfoFlagsLargeFileMask: number;

declare const kForkInfoFlagsModifiedBit: number;

declare const kForkInfoFlagsModifiedMask: number;

declare const kForkInfoFlagsOwnClumpBit: number;

declare const kForkInfoFlagsOwnClumpMask: number;

declare const kForkInfoFlagsResourceBit: number;

declare const kForkInfoFlagsResourceMask: number;

declare const kForkInfoFlagsSharedWriteBit: number;

declare const kForkInfoFlagsSharedWriteMask: number;

declare const kForkInfoFlagsWriteBit: number;

declare const kForkInfoFlagsWriteLockedBit: number;

declare const kForkInfoFlagsWriteLockedMask: number;

declare const kForkInfoFlagsWriteMask: number;

declare const kForwardArrowIcon: number;

declare const kFourByteCode: number;

declare const kFragmentIsPrepared: number;

declare const kFragmentNeedsPreparing: number;

declare const kFrameworksFolderType: number;

declare const kFullTrashIcon: number;

declare const kFullTrashIconResource: number;

declare const kGenEditorsFolderType: number;

declare const kGeneralFailureErr: number;

declare const kGenericApplicationIcon: number;

declare const kGenericApplicationIconResource: number;

declare const kGenericCDROMIcon: number;

declare const kGenericCDROMIconResource: number;

declare const kGenericComponentIcon: number;

declare const kGenericControlPanelIcon: number;

declare const kGenericControlStripModuleIcon: number;

declare const kGenericDeskAccessoryIcon: number;

declare const kGenericDeskAccessoryIconResource: number;

declare const kGenericDocumentIcon: number;

declare const kGenericDocumentIconResource: number;

declare const kGenericEditionFileIcon: number;

declare const kGenericEditionFileIconResource: number;

declare const kGenericExtensionIcon: number;

declare const kGenericExtensionIconResource: number;

declare const kGenericFileServerIcon: number;

declare const kGenericFileServerIconResource: number;

declare const kGenericFloppyIcon: number;

declare const kGenericFolderIcon: number;

declare const kGenericFolderIconResource: number;

declare const kGenericFontIcon: number;

declare const kGenericFontScalerIcon: number;

declare const kGenericHardDiskIcon: number;

declare const kGenericHardDiskIconResource: number;

declare const kGenericIDiskIcon: number;

declare const kGenericKCItemAttr: number;

declare const kGenericMoverObjectIcon: number;

declare const kGenericMoverObjectIconResource: number;

declare const kGenericNetworkIcon: number;

declare const kGenericPCCardIcon: number;

declare const kGenericPasswordKCItemClass: number;

declare const kGenericPreferencesIcon: number;

declare const kGenericPreferencesIconResource: number;

declare const kGenericQueryDocumentIcon: number;

declare const kGenericQueryDocumentIconResource: number;

declare const kGenericRAMDiskIcon: number;

declare const kGenericRAMDiskIconResource: number;

declare const kGenericRemovableMediaIcon: number;

declare const kGenericSharedLibaryIcon: number;

declare const kGenericStationeryIcon: number;

declare const kGenericStationeryIconResource: number;

declare const kGenericSuitcaseIcon: number;

declare const kGenericSuitcaseIconResource: number;

declare const kGenericURLIcon: number;

declare const kGenericWORMIcon: number;

declare const kGenericWindowIcon: number;

declare const kGetDebugOption: number;

declare const kGetPowerInfo: number;

declare const kGetPowerLevel: number;

declare const kGetSelectedText: number;

declare const kGetWakeOnNetInfo: number;

declare const kGridIcon: number;

declare const kGroupID2Name: number;

declare const kGroupIcon: number;

declare const kGroupName2ID: number;

declare const kGuestUserIcon: number;

declare const kHIDBadLogPhysValuesErr: number;

declare const kHIDBadLogicalMaximumErr: number;

declare const kHIDBadLogicalMinimumErr: number;

declare const kHIDBadParameterErr: number;

declare const kHIDBaseError: number;

declare const kHIDBufferTooSmallErr: number;

declare const kHIDDeviceNotReady: number;

declare const kHIDEndOfDescriptorErr: number;

declare const kHIDIncompatibleReportErr: number;

declare const kHIDInvalidPreparsedDataErr: number;

declare const kHIDInvalidRangePageErr: number;

declare const kHIDInvalidReportLengthErr: number;

declare const kHIDInvalidReportTypeErr: number;

declare const kHIDInvertedLogicalRangeErr: number;

declare const kHIDInvertedPhysicalRangeErr: number;

declare const kHIDInvertedUsageRangeErr: number;

declare const kHIDNotEnoughMemoryErr: number;

declare const kHIDNotValueArrayErr: number;

declare const kHIDNullPointerErr: number;

declare const kHIDNullStateErr: number;

declare const kHIDReportCountZeroErr: number;

declare const kHIDReportIDZeroErr: number;

declare const kHIDReportSizeZeroErr: number;

declare const kHIDSuccess: number;

declare const kHIDUnmatchedDesignatorRangeErr: number;

declare const kHIDUnmatchedStringRangeErr: number;

declare const kHIDUnmatchedUsageRangeErr: number;

declare const kHIDUsageNotFoundErr: number;

declare const kHIDUsagePageZeroErr: number;

declare const kHIDValueOutOfRangeErr: number;

declare const kHIDVersionIncompatibleErr: number;

declare const kHTTPServerIcon: number;

declare const kHandleIsResourceBit: number;

declare const kHandleIsResourceMask: number;

declare const kHandleLockedBit: number;

declare const kHandleLockedMask: number;

declare const kHandlePurgeableBit: number;

declare const kHandlePurgeableMask: number;

declare const kHasBeenInited: number;

declare const kHasBundle: number;

declare const kHasCustomIcon: number;

declare const kHasNoINITs: number;

declare const kHebrewFigureSpaceVariant: number;

declare const kHebrewStandardVariant: number;

declare const kHelpFolderIcon: number;

declare const kHelpFolderType: number;

declare const kHelpIcon: number;

declare const kHelpIconResource: number;

declare const kHuge1BitMask: number;

declare const kHuge32BitData: number;

declare const kHuge4BitData: number;

declare const kHuge8BitData: number;

declare const kHuge8BitMask: number;

declare const kIPFileServerIcon: number;

declare const kISOLatin1MusicCDVariant: number;

declare const kISOLatin1StandardVariant: number;

declare const kISOLatinArabicExplicitOrderVariant: number;

declare const kISOLatinArabicImplicitOrderVariant: number;

declare const kISOLatinArabicVisualOrderVariant: number;

declare const kISOLatinHebrewExplicitOrderVariant: number;

declare const kISOLatinHebrewImplicitOrderVariant: number;

declare const kISOLatinHebrewVisualOrderVariant: number;

declare const kISSDownloadsFolderType: number;

declare const kISpBufferToSmallErr: number;

declare const kISpDeviceActiveErr: number;

declare const kISpDeviceInactiveErr: number;

declare const kISpElementInListErr: number;

declare const kISpElementNotInListErr: number;

declare const kISpInternalErr: number;

declare const kISpListBusyErr: number;

declare const kISpSystemActiveErr: number;

declare const kISpSystemInactiveErr: number;

declare const kISpSystemListErr: number;

declare const kIconFamilyType: number;

declare const kIconServices1024PixelDataARGB: number;

declare const kIconServices128PixelDataARGB: number;

declare const kIconServices16PixelDataARGB: number;

declare const kIconServices256PixelDataARGB: number;

declare const kIconServices32PixelDataARGB: number;

declare const kIconServices48PixelDataARGB: number;

declare const kIconServices512PixelDataARGB: number;

declare const kIconServicesCatalogInfoMask: number;

declare const kIconServicesNoBadgeFlag: number;

declare const kIconServicesNormalUsageFlag: number;

declare const kIconServicesUpdateIfNeededFlag: number;

declare const kIdleKCEvent: number;

declare const kIdleKCEventMask: number;

declare const kIllegalClockValueErr: number;

declare const kIllegalInstructionException: number;

declare const kInDeferredTaskMask: number;

declare const kInNestedInterruptMask: number;

declare const kInSecondaryIntHandlerMask: number;

declare const kInUseErr: number;

declare const kInVBLTaskMask: number;

declare const kIndexFilesFolderType: number;

declare const kInputManagersFolderType: number;

declare const kInputMethodsFolderType: number;

declare const kInstallerLogsFolderType: number;

declare const kInstallerReceiptsFolderType: number;

declare const kInstructionBreakpointException: number;

declare const kIntegerException: number;

declare const kInternationResourcesIcon: number;

declare const kInternationalResourcesIcon: number;

declare const kInternetFolderIcon: number;

declare const kInternetFolderType: number;

declare const kInternetLocationAFP: number;

declare const kInternetLocationAppleShareIcon: number;

declare const kInternetLocationAppleTalk: number;

declare const kInternetLocationAppleTalkZoneIcon: number;

declare const kInternetLocationCreator: number;

declare const kInternetLocationFTP: number;

declare const kInternetLocationFTPIcon: number;

declare const kInternetLocationFile: number;

declare const kInternetLocationFileIcon: number;

declare const kInternetLocationGeneric: number;

declare const kInternetLocationGenericIcon: number;

declare const kInternetLocationHTTP: number;

declare const kInternetLocationHTTPIcon: number;

declare const kInternetLocationMail: number;

declare const kInternetLocationMailIcon: number;

declare const kInternetLocationNNTP: number;

declare const kInternetLocationNSL: number;

declare const kInternetLocationNSLNeighborhoodIcon: number;

declare const kInternetLocationNewsIcon: number;

declare const kInternetPasswordKCItemClass: number;

declare const kInternetPlugInFolderIcon: number;

declare const kInternetPlugInFolderType: number;

declare const kInternetSearchSitesFolderIcon: number;

declare const kInternetSearchSitesFolderType: number;

declare const kInternetSitesFolderType: number;

declare const kInvalidCSClientErr: number;

declare const kInvalidDeviceNumber: number;

declare const kInvalidRegEntryErr: number;

declare const kInvisibleKCItemAttr: number;

declare const kIsAlias: number;

declare const kIsInvisible: number;

declare const kIsOnDesk: number;

declare const kIsShared: number;

declare const kIsStationery: number;

declare const kIssuerKCItemAttr: number;

declare const kIssuerURLKCItemAttr: number;

declare const kItemList: number;

declare const kJapaneseBasicVariant: number;

declare const kJapanesePostScriptPrintVariant: number;

declare const kJapanesePostScriptScrnVariant: number;

declare const kJapaneseStandardVariant: number;

declare const kJapaneseStdNoVerticalsVariant: number;

declare const kJapaneseVertAtKuPlusTenVariant: number;

declare const kKCAuthTypeDPA: number;

declare const kKCAuthTypeDefault: number;

declare const kKCAuthTypeHTTPDigest: number;

declare const kKCAuthTypeMSN: number;

declare const kKCAuthTypeNTLM: number;

declare const kKCAuthTypeRPA: number;

declare const kKCProtocolTypeAFP: number;

declare const kKCProtocolTypeAppleTalk: number;

declare const kKCProtocolTypeFTP: number;

declare const kKCProtocolTypeFTPAccount: number;

declare const kKCProtocolTypeHTTP: number;

declare const kKCProtocolTypeIMAP: number;

declare const kKCProtocolTypeIRC: number;

declare const kKCProtocolTypeLDAP: number;

declare const kKCProtocolTypeNNTP: number;

declare const kKCProtocolTypePOP3: number;

declare const kKCProtocolTypeSMTP: number;

declare const kKCProtocolTypeSOCKS: number;

declare const kKCProtocolTypeTelnet: number;

declare const kKeepArrangedIcon: number;

declare const kKernelExtensionsFolderType: number;

declare const kKeyboardLayoutIcon: number;

declare const kKeyboardLayoutsFolderType: number;

declare const kKeychainFolderType: number;

declare const kKeychainListChangedKCEvent: number;

declare const kLSAppDoesNotClaimTypeErr: number;

declare const kLSAppDoesNotSupportSchemeWarning: number;

declare const kLSAppInTrashErr: number;

declare const kLSApplicationNotFoundErr: number;

declare const kLSAttributeNotFoundErr: number;

declare const kLSAttributeNotSettableErr: number;

declare const kLSCannotSetInfoErr: number;

declare const kLSDataErr: number;

declare const kLSDataTooOldErr: number;

declare const kLSDataUnavailableErr: number;

declare const kLSExecutableIncorrectFormat: number;

declare const kLSGarbageCollectionUnsupportedErr: number;

declare const kLSIncompatibleApplicationVersionErr: number;

declare const kLSIncompatibleSystemVersionErr: number;

declare const kLSLaunchInProgressErr: number;

declare const kLSMultipleSessionsNotSupportedErr: number;

declare const kLSNo32BitEnvironmentErr: number;

declare const kLSNoClassicEnvironmentErr: number;

declare const kLSNoExecutableErr: number;

declare const kLSNoLaunchPermissionErr: number;

declare const kLSNoRegistrationInfoErr: number;

declare const kLSNoRosettaEnvironmentErr: number;

declare const kLSNotAnApplicationErr: number;

declare const kLSNotInitializedErr: number;

declare const kLSNotRegisteredErr: number;
declare var kLSQuarantineAgentBundleIdentifierKey: NSObject;

declare var kLSQuarantineAgentNameKey: NSObject;

declare var kLSQuarantineDataURLKey: NSObject;

declare var kLSQuarantineOriginURLKey: NSObject;

declare var kLSQuarantineTimeStampKey: NSObject;

declare var kLSQuarantineTypeCalendarEventAttachment: NSObject;

declare var kLSQuarantineTypeEmailAttachment: NSObject;

declare var kLSQuarantineTypeInstantMessageAttachment: NSObject;

declare var kLSQuarantineTypeKey: NSObject;

declare var kLSQuarantineTypeOtherAttachment: NSObject;

declare var kLSQuarantineTypeOtherDownload: NSObject;

declare var kLSQuarantineTypeWebDownload: NSObject;


declare const kLSServerCommunicationErr: number;

declare const kLSSharedFileListDoNotMountVolumes: number;

declare const kLSSharedFileListNoUserInteraction: number;

declare const kLSUnknownCreator: number;

declare const kLSUnknownErr: number;

declare const kLSUnknownType: number;

declare const kLSUnknownTypeErr: number;

declare const kLabelKCItemAttr: number;

declare const kLarge1BitMask: number;

declare const kLarge32BitData: number;

declare const kLarge4BitData: number;

declare const kLarge4BitIconSize: number;

declare const kLarge8BitData: number;

declare const kLarge8BitIconSize: number;

declare const kLarge8BitMask: number;

declare const kLargeIconSize: number;

declare const kLastDomainConstant: number;

declare const kLastMagicBusyFiletype: number;

declare const kLaunchToGetTerminology: number;

declare const kLauncherItemsFolderType: number;

declare const kLeftToRight: number;

declare const kLibraryAssistantsFolderType: number;

declare const kLocalDomain: number;

declare const kLocaleAllPartsMask: number;

declare const kLocaleAndVariantNameMask: number;

declare const kLocaleLanguageMask: number;

declare const kLocaleLanguageVariantMask: number;

declare const kLocaleNameMask: number;

declare const kLocaleOperationVariantNameMask: number;

declare const kLocaleRegionMask: number;

declare const kLocaleRegionVariantMask: number;

declare const kLocaleScriptMask: number;

declare const kLocaleScriptVariantMask: number;

declare const kLocalesBufferTooSmallErr: number;

declare const kLocalesDefaultDisplayStatus: number;

declare const kLocalesFolderIcon: number;

declare const kLocalesFolderType: number;

declare const kLocalesTableFormatErr: number;

declare const kLockKCEvent: number;

declare const kLockKCEventMask: number;

declare const kLockedBadgeIcon: number;

declare const kLockedIcon: number;

declare const kLogsFolderType: number;

declare const kM68kISA: number;
declare var kMDAttributeAllValues: NSObject;

declare var kMDAttributeDisplayValues: NSObject;

declare var kMDAttributeMultiValued: NSObject;

declare var kMDAttributeName: NSObject;

declare var kMDAttributeReadOnlyValues: NSObject;

declare var kMDAttributeType: NSObject;

declare var kMDExporterAvaliable: NSObject;

declare var kMDItemAcquisitionMake: NSObject;

declare var kMDItemAcquisitionModel: NSObject;

declare var kMDItemAlbum: NSObject;

declare var kMDItemAltitude: NSObject;

declare var kMDItemAperture: NSObject;

declare var kMDItemAppleLoopDescriptors: NSObject;

declare var kMDItemAppleLoopsKeyFilterType: NSObject;

declare var kMDItemAppleLoopsLoopMode: NSObject;

declare var kMDItemAppleLoopsRootKey: NSObject;

declare var kMDItemApplicationCategories: NSObject;

declare var kMDItemAttributeChangeDate: NSObject;

declare var kMDItemAudiences: NSObject;

declare var kMDItemAudioBitRate: NSObject;

declare var kMDItemAudioChannelCount: NSObject;

declare var kMDItemAudioEncodingApplication: NSObject;

declare var kMDItemAudioSampleRate: NSObject;

declare var kMDItemAudioTrackNumber: NSObject;

declare var kMDItemAuthorAddresses: NSObject;

declare var kMDItemAuthorEmailAddresses: NSObject;

declare var kMDItemAuthors: NSObject;

declare var kMDItemBitsPerSample: NSObject;

declare var kMDItemCFBundleIdentifier: NSObject;

declare var kMDItemCameraOwner: NSObject;

declare var kMDItemCity: NSObject;

declare var kMDItemCodecs: NSObject;

declare var kMDItemColorSpace: NSObject;

declare var kMDItemComment: NSObject;

declare var kMDItemComposer: NSObject;

declare var kMDItemContactKeywords: NSObject;

declare var kMDItemContentCreationDate: NSObject;

declare var kMDItemContentModificationDate: NSObject;

declare var kMDItemContentType: NSObject;

declare var kMDItemContentTypeTree: NSObject;

declare var kMDItemContributors: NSObject;

declare var kMDItemCopyright: NSObject;

declare var kMDItemCountry: NSObject;

declare var kMDItemCoverage: NSObject;

declare var kMDItemCreator: NSObject;

declare var kMDItemDateAdded: NSObject;

declare var kMDItemDeliveryType: NSObject;

declare var kMDItemDescription: NSObject;

declare var kMDItemDirector: NSObject;

declare var kMDItemDisplayName: NSObject;

declare var kMDItemDownloadedDate: NSObject;

declare var kMDItemDueDate: NSObject;

declare var kMDItemDurationSeconds: NSObject;

declare var kMDItemEXIFGPSVersion: NSObject;

declare var kMDItemEXIFVersion: NSObject;

declare var kMDItemEditors: NSObject;

declare var kMDItemEmailAddresses: NSObject;

declare var kMDItemEncodingApplications: NSObject;

declare var kMDItemExecutableArchitectures: NSObject;

declare var kMDItemExecutablePlatform: NSObject;

declare var kMDItemExposureMode: NSObject;

declare var kMDItemExposureProgram: NSObject;

declare var kMDItemExposureTimeSeconds: NSObject;

declare var kMDItemExposureTimeString: NSObject;

declare var kMDItemFNumber: NSObject;

declare var kMDItemFSContentChangeDate: NSObject;

declare var kMDItemFSCreationDate: NSObject;

declare var kMDItemFSHasCustomIcon: NSObject;

declare var kMDItemFSInvisible: NSObject;

declare var kMDItemFSIsExtensionHidden: NSObject;

declare var kMDItemFSIsStationery: NSObject;

declare var kMDItemFSLabel: NSObject;

declare var kMDItemFSName: NSObject;

declare var kMDItemFSNodeCount: NSObject;

declare var kMDItemFSOwnerGroupID: NSObject;

declare var kMDItemFSOwnerUserID: NSObject;

declare var kMDItemFSSize: NSObject;

declare var kMDItemFinderComment: NSObject;

declare var kMDItemFlashOnOff: NSObject;

declare var kMDItemFocalLength: NSObject;

declare var kMDItemFocalLength35mm: NSObject;

declare var kMDItemFonts: NSObject;

declare var kMDItemGPSAreaInformation: NSObject;

declare var kMDItemGPSDOP: NSObject;

declare var kMDItemGPSDateStamp: NSObject;

declare var kMDItemGPSDestBearing: NSObject;

declare var kMDItemGPSDestDistance: NSObject;

declare var kMDItemGPSDestLatitude: NSObject;

declare var kMDItemGPSDestLongitude: NSObject;

declare var kMDItemGPSDifferental: NSObject;

declare var kMDItemGPSMapDatum: NSObject;

declare var kMDItemGPSMeasureMode: NSObject;

declare var kMDItemGPSProcessingMethod: NSObject;

declare var kMDItemGPSStatus: NSObject;

declare var kMDItemGPSTrack: NSObject;

declare var kMDItemGenre: NSObject;

declare var kMDItemHTMLContent: NSObject;

declare var kMDItemHasAlphaChannel: NSObject;

declare var kMDItemHeadline: NSObject;

declare var kMDItemISOSpeed: NSObject;

declare var kMDItemIdentifier: NSObject;

declare var kMDItemImageDirection: NSObject;

declare var kMDItemInformation: NSObject;

declare var kMDItemInstantMessageAddresses: NSObject;

declare var kMDItemInstructions: NSObject;

declare var kMDItemIsApplicationManaged: NSObject;

declare var kMDItemIsGeneralMIDISequence: NSObject;

declare var kMDItemIsLikelyJunk: NSObject;

declare var kMDItemKeySignature: NSObject;

declare var kMDItemKeywords: NSObject;

declare var kMDItemKind: NSObject;

declare var kMDItemLanguages: NSObject;

declare var kMDItemLastUsedDate: NSObject;

declare var kMDItemLatitude: NSObject;

declare var kMDItemLayerNames: NSObject;

declare var kMDItemLensModel: NSObject;

declare var kMDItemLongitude: NSObject;

declare var kMDItemLyricist: NSObject;

declare var kMDItemMaxAperture: NSObject;

declare var kMDItemMediaTypes: NSObject;

declare var kMDItemMeteringMode: NSObject;

declare var kMDItemMusicalGenre: NSObject;

declare var kMDItemMusicalInstrumentCategory: NSObject;

declare var kMDItemMusicalInstrumentName: NSObject;

declare var kMDItemNamedLocation: NSObject;

declare var kMDItemNumberOfPages: NSObject;

declare var kMDItemOrganizations: NSObject;

declare var kMDItemOrientation: NSObject;

declare var kMDItemOriginalFormat: NSObject;

declare var kMDItemOriginalSource: NSObject;

declare var kMDItemPageHeight: NSObject;

declare var kMDItemPageWidth: NSObject;

declare var kMDItemParticipants: NSObject;

declare var kMDItemPath: NSObject;

declare var kMDItemPerformers: NSObject;

declare var kMDItemPhoneNumbers: NSObject;

declare var kMDItemPixelCount: NSObject;

declare var kMDItemPixelHeight: NSObject;

declare var kMDItemPixelWidth: NSObject;

declare var kMDItemProducer: NSObject;

declare var kMDItemProfileName: NSObject;

declare var kMDItemProjects: NSObject;

declare var kMDItemPublishers: NSObject;

declare var kMDItemRecipientAddresses: NSObject;

declare var kMDItemRecipientEmailAddresses: NSObject;

declare var kMDItemRecipients: NSObject;

declare var kMDItemRecordingDate: NSObject;

declare var kMDItemRecordingYear: NSObject;

declare var kMDItemRedEyeOnOff: NSObject;

declare var kMDItemResolutionHeightDPI: NSObject;

declare var kMDItemResolutionWidthDPI: NSObject;

declare var kMDItemRights: NSObject;

declare var kMDItemSecurityMethod: NSObject;

declare var kMDItemSpeed: NSObject;

declare var kMDItemStarRating: NSObject;

declare var kMDItemStateOrProvince: NSObject;

declare var kMDItemStreamable: NSObject;

declare var kMDItemSubject: NSObject;

declare var kMDItemTempo: NSObject;

declare var kMDItemTextContent: NSObject;

declare var kMDItemTheme: NSObject;

declare var kMDItemTimeSignature: NSObject;

declare var kMDItemTimestamp: NSObject;

declare var kMDItemTitle: NSObject;

declare var kMDItemTotalBitRate: NSObject;

declare var kMDItemURL: NSObject;

declare var kMDItemVersion: NSObject;

declare var kMDItemVideoBitRate: NSObject;

declare var kMDItemWhereFroms: NSObject;

declare var kMDItemWhiteBalance: NSObject;

declare var kMDLabelAddedNotification: NSObject;

declare var kMDLabelBundleURL: NSObject;

declare var kMDLabelChangedNotification: NSObject;

declare var kMDLabelContentChangeDate: NSObject;

declare var kMDLabelDisplayName: NSObject;

declare var kMDLabelIconData: NSObject;

declare var kMDLabelIconUUID: NSObject;

declare var kMDLabelIsMutuallyExclusiveSetMember: NSObject;

declare var kMDLabelKind: NSObject;

declare var kMDLabelKindIsMutuallyExclusiveSetKey: NSObject;

declare var kMDLabelKindVisibilityKey: NSObject;

declare var kMDLabelRemovedNotification: NSObject;

declare var kMDLabelSetsFinderColor: NSObject;

declare var kMDLabelUUID: NSObject;

declare var kMDLabelVisibility: NSObject;

declare var kMDPrivateVisibility: NSObject;

declare var kMDPublicVisibility: NSObject;

declare var kMDQueryDidFinishNotification: NSObject;

declare var kMDQueryDidUpdateNotification: NSObject;

declare var kMDQueryProgressNotification: NSObject;

declare var kMDQueryResultContentRelevance: NSObject;

declare var kMDQueryScopeAllIndexed: NSObject;

declare var kMDQueryScopeComputer: NSObject;

declare var kMDQueryScopeComputerIndexed: NSObject;

declare var kMDQueryScopeHome: NSObject;

declare var kMDQueryScopeNetwork: NSObject;

declare var kMDQueryScopeNetworkIndexed: NSObject;

declare var kMDQueryUpdateAddedItems: NSObject;

declare var kMDQueryUpdateChangedItems: NSObject;

declare var kMDQueryUpdateRemovedItems: NSObject;


declare const kMIDIDriversFolderType: number;

declare const kMPAddressSpaceInfoVersion: number;

declare const kMPAllocate1024ByteAligned: number;

declare const kMPAllocate16ByteAligned: number;

declare const kMPAllocate32ByteAligned: number;

declare const kMPAllocate4096ByteAligned: number;

declare const kMPAllocate8ByteAligned: number;

declare const kMPAllocateAltiVecAligned: number;

declare const kMPAllocateClearMask: number;

declare const kMPAllocateDefaultAligned: number;

declare const kMPAllocateGloballyMask: number;

declare const kMPAllocateInterlockAligned: number;

declare const kMPAllocateMaxAlignment: number;

declare const kMPAllocateNoCreateMask: number;

declare const kMPAllocateNoGrowthMask: number;

declare const kMPAllocateResidentMask: number;

declare const kMPAllocateVMPageAligned: number;

declare const kMPAllocateVMXAligned: number;

declare const kMPAnyRemoteContext: number;

declare const kMPAsyncInterruptRemoteContext: number;

declare const kMPBlueBlockingErr: number;

declare const kMPCreateTaskNotDebuggableMask: number;

declare const kMPCreateTaskSuspendedMask: number;

declare const kMPCreateTaskTakesAllExceptionsMask: number;

declare const kMPCreateTaskValidOptionsMask: number;

declare const kMPCriticalRegionInfoVersion: number;

declare const kMPDeletedErr: number;

declare const kMPEventInfoVersion: number;

declare const kMPHighLevelDebugger: number;

declare const kMPInsufficientResourcesErr: number;

declare const kMPInterruptRemoteContext: number;

declare const kMPInvalidIDErr: number;

declare const kMPIterationEndErr: number;

declare const kMPLowLevelDebugger: number;

declare const kMPMaxAllocSize: number;

declare const kMPMidLevelDebugger: number;

declare const kMPNanokernelNeedsMemoryErr: number;

declare const kMPNoID: number;

declare const kMPNotificationInfoVersion: number;

declare const kMPOwningProcessRemoteContext: number;

declare const kMPPreserveTimerIDMask: number;

declare const kMPPrivilegedErr: number;

declare const kMPProcessCreatedErr: number;

declare const kMPProcessTerminatedErr: number;

declare const kMPQueueInfoVersion: number;

declare const kMPSemaphoreInfoVersion: number;

declare const kMPTaskAbortedErr: number;

declare const kMPTaskBlocked: number;

declare const kMPTaskBlockedErr: number;

declare const kMPTaskCreatedErr: number;

declare const kMPTaskInfoVersion: number;

declare const kMPTaskPropagate: number;

declare const kMPTaskPropagateMask: number;

declare const kMPTaskReady: number;

declare const kMPTaskResumeBranch: number;

declare const kMPTaskResumeBranchMask: number;

declare const kMPTaskResumeMask: number;

declare const kMPTaskResumeStep: number;

declare const kMPTaskResumeStepMask: number;

declare const kMPTaskRunning: number;

declare const kMPTaskState32BitMemoryException: number;

declare const kMPTaskStateFPU: number;

declare const kMPTaskStateMachine: number;

declare const kMPTaskStateRegisters: number;

declare const kMPTaskStateTaskInfo: number;

declare const kMPTaskStateVectors: number;

declare const kMPTaskStoppedErr: number;

declare const kMPTimeIsDeltaMask: number;

declare const kMPTimeIsDurationMask: number;

declare const kMPTimeoutErr: number;

declare const kMacArabicAlBayanVariant: number;

declare const kMacArabicStandardVariant: number;

declare const kMacArabicThuluthVariant: number;

declare const kMacArabicTrueTypeVariant: number;

declare const kMacCroatianCurrencySignVariant: number;

declare const kMacCroatianDefaultVariant: number;

declare const kMacCroatianEuroSignVariant: number;

declare const kMacCyrillicCurrSignStdVariant: number;

declare const kMacCyrillicCurrSignUkrVariant: number;

declare const kMacCyrillicDefaultVariant: number;

declare const kMacCyrillicEuroSignVariant: number;

declare const kMacFarsiStandardVariant: number;

declare const kMacFarsiTrueTypeVariant: number;

declare const kMacGreekDefaultVariant: number;

declare const kMacGreekEuroSignVariant: number;

declare const kMacGreekNoEuroSignVariant: number;

declare const kMacHebrewFigureSpaceVariant: number;

declare const kMacHebrewStandardVariant: number;

declare const kMacIcelandicStandardVariant: number;

declare const kMacIcelandicStdCurrSignVariant: number;

declare const kMacIcelandicStdDefaultVariant: number;

declare const kMacIcelandicStdEuroSignVariant: number;

declare const kMacIcelandicTTCurrSignVariant: number;

declare const kMacIcelandicTTDefaultVariant: number;

declare const kMacIcelandicTTEuroSignVariant: number;

declare const kMacIcelandicTrueTypeVariant: number;

declare const kMacJapaneseBasicVariant: number;

declare const kMacJapanesePostScriptPrintVariant: number;

declare const kMacJapanesePostScriptScrnVariant: number;

declare const kMacJapaneseStandardVariant: number;

declare const kMacJapaneseStdNoVerticalsVariant: number;

declare const kMacJapaneseVertAtKuPlusTenVariant: number;

declare const kMacMemoryMaximumMemoryManagerBlockSize: number;

declare const kMacOSReadMeFolderIcon: number;

declare const kMacOSReadMesFolderType: number;

declare const kMacRomanCurrencySignVariant: number;

declare const kMacRomanDefaultVariant: number;

declare const kMacRomanEuroSignVariant: number;

declare const kMacRomanLatin1CroatianVariant: number;

declare const kMacRomanLatin1DefaultVariant: number;

declare const kMacRomanLatin1IcelandicVariant: number;

declare const kMacRomanLatin1RomanianVariant: number;

declare const kMacRomanLatin1StandardVariant: number;

declare const kMacRomanLatin1TurkishVariant: number;

declare const kMacRomanStandardVariant: number;

declare const kMacRomanianCurrencySignVariant: number;

declare const kMacRomanianDefaultVariant: number;

declare const kMacRomanianEuroSignVariant: number;

declare const kMacVT100CurrencySignVariant: number;

declare const kMacVT100DefaultVariant: number;

declare const kMacVT100EuroSignVariant: number;

declare const kMachineNameStrID: number;

declare const kMagicBusyCreationDate: number;

declare const kMagicTemporaryItemsFolderType: number;

declare const kManagedItemsFolderType: number;

declare const kMaximumBlocksIn4GB: number;

declare const kMini1BitMask: number;

declare const kMini4BitData: number;

declare const kMini8BitData: number;

declare const kModDateKCItemAttr: number;

declare const kModemOutOfMemory: number;

declare const kModemPreferencesMissing: number;

declare const kModemScriptMissing: number;

declare const kModemScriptsFolderType: number;

declare const kMountedBadgeIcon: number;

declare const kMountedFolderAliasType: number;

declare const kMountedFolderIcon: number;

declare const kMountedFolderIconResource: number;

declare const kMovieDocumentsFolderType: number;

declare const kMultiprocessingFolderType: number;

declare const kMusicDocumentsFolderType: number;

declare const kNSL68kContextNotSupported: number;

declare const kNSLBadClientInfoPtr: number;

declare const kNSLBadDataTypeErr: number;

declare const kNSLBadNetConnection: number;

declare const kNSLBadProtocolTypeErr: number;

declare const kNSLBadReferenceErr: number;

declare const kNSLBadServiceTypeErr: number;

declare const kNSLBadURLSyntax: number;

declare const kNSLBufferTooSmallForData: number;

declare const kNSLCannotContinueLookup: number;

declare const kNSLErrNullPtrError: number;

declare const kNSLInitializationFailed: number;

declare const kNSLInsufficientOTVer: number;

declare const kNSLInsufficientSysVer: number;

declare const kNSLInvalidPluginSpec: number;

declare const kNSLNoCarbonLib: number;

declare const kNSLNoContextAvailable: number;

declare const kNSLNoElementsInList: number;

declare const kNSLNoPluginsForSearch: number;

declare const kNSLNoPluginsFound: number;

declare const kNSLNoSupportForService: number;

declare const kNSLNotImplementedYet: number;

declare const kNSLNotInitialized: number;

declare const kNSLNullListPtr: number;

declare const kNSLNullNeighborhoodPtr: number;

declare const kNSLPluginLoadFailed: number;

declare const kNSLRequestBufferAlreadyInList: number;

declare const kNSLSchedulerError: number;

declare const kNSLSearchAlreadyInProgress: number;

declare const kNSLSomePluginsFailedToLoad: number;

declare const kNSLUILibraryNotAvailable: number;

declare const kNSpAddPlayerFailedErr: number;

declare const kNSpAddressInUseErr: number;

declare const kNSpAlreadyAdvertisingErr: number;

declare const kNSpAlreadyInitializedErr: number;

declare const kNSpCantBlockErr: number;

declare const kNSpConnectFailedErr: number;

declare const kNSpCreateGroupFailedErr: number;

declare const kNSpFeatureNotImplementedErr: number;

declare const kNSpFreeQExhaustedErr: number;

declare const kNSpGameTerminatedErr: number;

declare const kNSpHostFailedErr: number;

declare const kNSpInitializationFailedErr: number;

declare const kNSpInvalidAddressErr: number;

declare const kNSpInvalidDefinitionErr: number;

declare const kNSpInvalidGameRefErr: number;

declare const kNSpInvalidGroupIDErr: number;

declare const kNSpInvalidParameterErr: number;

declare const kNSpInvalidPlayerIDErr: number;

declare const kNSpInvalidProtocolListErr: number;

declare const kNSpInvalidProtocolRefErr: number;

declare const kNSpJoinFailedErr: number;

declare const kNSpMemAllocationErr: number;

declare const kNSpMessageTooBigErr: number;

declare const kNSpNameRequiredErr: number;

declare const kNSpNoGroupsErr: number;

declare const kNSpNoHostVolunteersErr: number;

declare const kNSpNoPlayersErr: number;

declare const kNSpNotAdvertisingErr: number;

declare const kNSpOTNotPresentErr: number;

declare const kNSpOTVersionTooOldErr: number;

declare const kNSpPipeFullErr: number;

declare const kNSpProtocolNotAvailableErr: number;

declare const kNSpRemovePlayerFailedErr: number;

declare const kNSpSendFailedErr: number;

declare const kNSpTimeoutErr: number;

declare const kNSpTopologyNotSupportedErr: number;

declare const kNameLocked: number;

declare const kNavCustomControlMessageFailedErr: number;

declare const kNavInvalidCustomControlMessageErr: number;

declare const kNavInvalidSystemConfigErr: number;

declare const kNavMissingKindStringErr: number;

declare const kNavWrongDialogClassErr: number;

declare const kNavWrongDialogStateErr: number;

declare const kNegativeKCItemAttr: number;

declare const kNetworkDomain: number;

declare const kNewDebugHeap: number;

declare const kNewSizeParameter: number;

declare const kNewStyleHeap: number;

declare const kNewSuspend: number;

declare const kNextBody: number;

declare const kNoByteCode: number;

declare const kNoCardBusCISErr: number;

declare const kNoCardEnablersFoundErr: number;

declare const kNoCardErr: number;

declare const kNoCardSevicesSocketsErr: number;

declare const kNoClientTableErr: number;

declare const kNoCompatibleNameErr: number;

declare const kNoEnablerForCardErr: number;

declare const kNoFilesIcon: number;

declare const kNoFolderIcon: number;

declare const kNoIOWindowRequestedErr: number;

declare const kNoMoreInterruptSlotsErr: number;

declare const kNoMoreItemsErr: number;

declare const kNoMoreTimerClientsErr: number;

declare const kNoSuchPowerSource: number;

declare const kNoThreadID: number;

declare const kNoTimeOut: number;

declare const kNoUserAuthentication: number;

declare const kNoWriteIcon: number;

declare const kNoneKCStopOn: number;

declare const kNotPaged: number;

declare const kNotReadyErr: number;

declare const kNotZVCapableErr: number;

declare const kOSIZCodeInSharedLibraries: number;

declare const kOSIZDontOpenResourceFile: number;

declare const kOSIZOpenWithReadPermission: number;

declare const kOSIZdontAcceptRemoteEvents: number;

declare const kOTAccessErr: number;

declare const kOTAddressBusyErr: number;

declare const kOTBadAddressErr: number;

declare const kOTBadConfigurationErr: number;

declare const kOTBadDataErr: number;

declare const kOTBadFlagErr: number;

declare const kOTBadNameErr: number;

declare const kOTBadOptionErr: number;

declare const kOTBadQLenErr: number;

declare const kOTBadReferenceErr: number;

declare const kOTBadSequenceErr: number;

declare const kOTBadSyncErr: number;

declare const kOTBufferOverflowErr: number;

declare const kOTCanceledErr: number;

declare const kOTClientNotInittedErr: number;

declare const kOTConfigurationChangedErr: number;

declare const kOTDuplicateFoundErr: number;

declare const kOTFlowErr: number;

declare const kOTIndOutErr: number;

declare const kOTLookErr: number;

declare const kOTNoAddressErr: number;

declare const kOTNoDataErr: number;

declare const kOTNoDisconnectErr: number;

declare const kOTNoError: number;

declare const kOTNoReleaseErr: number;

declare const kOTNoStructureTypeErr: number;

declare const kOTNoUDErrErr: number;

declare const kOTNotFoundErr: number;

declare const kOTNotSupportedErr: number;

declare const kOTOutOfMemoryErr: number;

declare const kOTOutStateErr: number;

declare const kOTPortHasDiedErr: number;

declare const kOTPortLostConnection: number;

declare const kOTPortWasEjectedErr: number;

declare const kOTProtocolErr: number;

declare const kOTProviderMismatchErr: number;

declare const kOTQFullErr: number;

declare const kOTResAddressErr: number;

declare const kOTResQLenErr: number;

declare const kOTStateChangeErr: number;

declare const kOTSysErrorErr: number;

declare const kOTUserRequestedErr: number;

declare const kOffset2Pos: number;

declare const kOld68kRTA: number;

declare const kOnAppropriateDisk: number;

declare const kOnSystemDisk: number;

declare const kOneByteCode: number;

declare const kOpaqueAddressSpaceID: number;

declare const kOpaqueAnyID: number;

declare const kOpaqueAreaID: number;

declare const kOpaqueCoherenceID: number;

declare const kOpaqueConsoleID: number;

declare const kOpaqueCpuID: number;

declare const kOpaqueCriticalRegionID: number;

declare const kOpaqueEventID: number;

declare const kOpaqueNotificationID: number;

declare const kOpaqueProcessID: number;

declare const kOpaqueQueueID: number;

declare const kOpaqueSemaphoreID: number;

declare const kOpaqueTaskID: number;

declare const kOpaqueTimerID: number;

declare const kOpenDocEditorsFolderType: number;

declare const kOpenDocFolderType: number;

declare const kOpenDocLibrariesFolderType: number;

declare const kOpenDocShellPlugInsFolderType: number;

declare const kOpenDropIconVariant: number;

declare const kOpenFolderIcon: number;

declare const kOpenFolderIconResource: number;

declare const kOpenIconVariant: number;

declare const kOutOfResourceErr: number;

declare const kOwnedFolderIcon: number;

declare const kOwnedFolderIconResource: number;

declare const kOwnerID2Name: number;

declare const kOwnerIcon: number;

declare const kOwnerName2ID: number;

declare const kPEFAbsoluteExport: number;

declare const kPEFCodeSection: number;

declare const kPEFCodeSymbol: number;

declare const kPEFConstantSection: number;

declare const kPEFDataSymbol: number;

declare const kPEFDebugSection: number;

declare const kPEFExceptionSection: number;

declare const kPEFExecDataSection: number;

declare const kPEFExpSymClassShift: number;

declare const kPEFExpSymMaxNameOffset: number;

declare const kPEFExpSymNameOffsetMask: number;

declare const kPEFFirstSectionHeaderOffset: number;

declare const kPEFGlobalShare: number;

declare const kPEFGlueSymbol: number;

declare const kPEFHashLengthShift: number;

declare const kPEFHashMaxLength: number;

declare const kPEFHashSlotFirstKeyMask: number;

declare const kPEFHashSlotMaxKeyIndex: number;

declare const kPEFHashSlotMaxSymbolCount: number;

declare const kPEFHashSlotSymCountShift: number;

declare const kPEFHashValueMask: number;

declare const kPEFImpSymClassShift: number;

declare const kPEFImpSymMaxNameOffset: number;

declare const kPEFImpSymNameOffsetMask: number;

declare const kPEFInitLibBeforeMask: number;

declare const kPEFLoaderSection: number;

declare const kPEFPackedDataSection: number;

declare const kPEFPkDataBlock: number;

declare const kPEFPkDataCount5Mask: number;

declare const kPEFPkDataMaxCount5: number;

declare const kPEFPkDataOpcodeShift: number;

declare const kPEFPkDataRepeat: number;

declare const kPEFPkDataRepeatBlock: number;

declare const kPEFPkDataRepeatZero: number;

declare const kPEFPkDataVCountEndMask: number;

declare const kPEFPkDataVCountMask: number;

declare const kPEFPkDataVCountShift: number;

declare const kPEFPkDataZero: number;

declare const kPEFProcessShare: number;

declare const kPEFProtectedShare: number;

declare const kPEFReexportedImport: number;

declare const kPEFRelocBasicOpcodeRange: number;

declare const kPEFRelocBySectC: number;

declare const kPEFRelocBySectD: number;

declare const kPEFRelocBySectDWithSkip: number;

declare const kPEFRelocImportRun: number;

declare const kPEFRelocIncrPosition: number;

declare const kPEFRelocIncrPositionMaxOffset: number;

declare const kPEFRelocLgByImport: number;

declare const kPEFRelocLgByImportMaxIndex: number;

declare const kPEFRelocLgBySectionSubopcode: number;

declare const kPEFRelocLgRepeat: number;

declare const kPEFRelocLgRepeatMaxChunkCount: number;

declare const kPEFRelocLgRepeatMaxRepeatCount: number;

declare const kPEFRelocLgSetOrBySection: number;

declare const kPEFRelocLgSetOrBySectionMaxIndex: number;

declare const kPEFRelocLgSetSectCSubopcode: number;

declare const kPEFRelocLgSetSectDSubopcode: number;

declare const kPEFRelocRunMaxRunLength: number;

declare const kPEFRelocSetPosMaxOffset: number;

declare const kPEFRelocSetPosition: number;

declare const kPEFRelocSmByImport: number;

declare const kPEFRelocSmBySection: number;

declare const kPEFRelocSmIndexMaxIndex: number;

declare const kPEFRelocSmRepeat: number;

declare const kPEFRelocSmRepeatMaxChunkCount: number;

declare const kPEFRelocSmRepeatMaxRepeatCount: number;

declare const kPEFRelocSmSetSectC: number;

declare const kPEFRelocSmSetSectD: number;

declare const kPEFRelocTVector12: number;

declare const kPEFRelocTVector8: number;

declare const kPEFRelocUndefinedOpcode: number;

declare const kPEFRelocVTable8: number;

declare const kPEFRelocWithSkipMaxRelocCount: number;

declare const kPEFRelocWithSkipMaxSkipCount: number;

declare const kPEFTOCSymbol: number;

declare const kPEFTVectorSymbol: number;

declare const kPEFTag1: number;

declare const kPEFTag2: number;

declare const kPEFTracebackSection: number;

declare const kPEFUndefinedSymbol: number;

declare const kPEFUnpackedDataSection: number;

declare const kPEFVersion: number;

declare const kPEFWeakImportLibMask: number;

declare const kPEFWeakImportSymMask: number;

declare const kPOSIXErrorBase: number;

declare const kPOSIXErrorE2BIG: number;

declare const kPOSIXErrorEACCES: number;

declare const kPOSIXErrorEADDRINUSE: number;

declare const kPOSIXErrorEADDRNOTAVAIL: number;

declare const kPOSIXErrorEAFNOSUPPORT: number;

declare const kPOSIXErrorEAGAIN: number;

declare const kPOSIXErrorEALREADY: number;

declare const kPOSIXErrorEAUTH: number;

declare const kPOSIXErrorEBADARCH: number;

declare const kPOSIXErrorEBADEXEC: number;

declare const kPOSIXErrorEBADF: number;

declare const kPOSIXErrorEBADMACHO: number;

declare const kPOSIXErrorEBADMSG: number;

declare const kPOSIXErrorEBADRPC: number;

declare const kPOSIXErrorEBUSY: number;

declare const kPOSIXErrorECANCELED: number;

declare const kPOSIXErrorECHILD: number;

declare const kPOSIXErrorECONNABORTED: number;

declare const kPOSIXErrorECONNREFUSED: number;

declare const kPOSIXErrorECONNRESET: number;

declare const kPOSIXErrorEDEADLK: number;

declare const kPOSIXErrorEDESTADDRREQ: number;

declare const kPOSIXErrorEDEVERR: number;

declare const kPOSIXErrorEDOM: number;

declare const kPOSIXErrorEDQUOT: number;

declare const kPOSIXErrorEEXIST: number;

declare const kPOSIXErrorEFAULT: number;

declare const kPOSIXErrorEFBIG: number;

declare const kPOSIXErrorEFTYPE: number;

declare const kPOSIXErrorEHOSTDOWN: number;

declare const kPOSIXErrorEHOSTUNREACH: number;

declare const kPOSIXErrorEIDRM: number;

declare const kPOSIXErrorEILSEQ: number;

declare const kPOSIXErrorEINPROGRESS: number;

declare const kPOSIXErrorEINTR: number;

declare const kPOSIXErrorEINVAL: number;

declare const kPOSIXErrorEIO: number;

declare const kPOSIXErrorEISCONN: number;

declare const kPOSIXErrorEISDIR: number;

declare const kPOSIXErrorELOOP: number;

declare const kPOSIXErrorEMFILE: number;

declare const kPOSIXErrorEMLINK: number;

declare const kPOSIXErrorEMSGSIZE: number;

declare const kPOSIXErrorEMULTIHOP: number;

declare const kPOSIXErrorENAMETOOLONG: number;

declare const kPOSIXErrorENEEDAUTH: number;

declare const kPOSIXErrorENETDOWN: number;

declare const kPOSIXErrorENETRESET: number;

declare const kPOSIXErrorENETUNREACH: number;

declare const kPOSIXErrorENFILE: number;

declare const kPOSIXErrorENOATTR: number;

declare const kPOSIXErrorENOBUFS: number;

declare const kPOSIXErrorENODATA: number;

declare const kPOSIXErrorENODEV: number;

declare const kPOSIXErrorENOENT: number;

declare const kPOSIXErrorENOEXEC: number;

declare const kPOSIXErrorENOLCK: number;

declare const kPOSIXErrorENOLINK: number;

declare const kPOSIXErrorENOMEM: number;

declare const kPOSIXErrorENOMSG: number;

declare const kPOSIXErrorENOPROTOOPT: number;

declare const kPOSIXErrorENOSPC: number;

declare const kPOSIXErrorENOSR: number;

declare const kPOSIXErrorENOSTR: number;

declare const kPOSIXErrorENOSYS: number;

declare const kPOSIXErrorENOTBLK: number;

declare const kPOSIXErrorENOTCONN: number;

declare const kPOSIXErrorENOTDIR: number;

declare const kPOSIXErrorENOTEMPTY: number;

declare const kPOSIXErrorENOTSOCK: number;

declare const kPOSIXErrorENOTSUP: number;

declare const kPOSIXErrorENOTTY: number;

declare const kPOSIXErrorENXIO: number;

declare const kPOSIXErrorEOPNOTSUPP: number;

declare const kPOSIXErrorEOVERFLOW: number;

declare const kPOSIXErrorEPERM: number;

declare const kPOSIXErrorEPFNOSUPPORT: number;

declare const kPOSIXErrorEPIPE: number;

declare const kPOSIXErrorEPROCLIM: number;

declare const kPOSIXErrorEPROCUNAVAIL: number;

declare const kPOSIXErrorEPROGMISMATCH: number;

declare const kPOSIXErrorEPROGUNAVAIL: number;

declare const kPOSIXErrorEPROTO: number;

declare const kPOSIXErrorEPROTONOSUPPORT: number;

declare const kPOSIXErrorEPROTOTYPE: number;

declare const kPOSIXErrorEPWROFF: number;

declare const kPOSIXErrorERANGE: number;

declare const kPOSIXErrorEREMOTE: number;

declare const kPOSIXErrorEROFS: number;

declare const kPOSIXErrorERPCMISMATCH: number;

declare const kPOSIXErrorESHLIBVERS: number;

declare const kPOSIXErrorESHUTDOWN: number;

declare const kPOSIXErrorESOCKTNOSUPPORT: number;

declare const kPOSIXErrorESPIPE: number;

declare const kPOSIXErrorESRCH: number;

declare const kPOSIXErrorESTALE: number;

declare const kPOSIXErrorETIME: number;

declare const kPOSIXErrorETIMEDOUT: number;

declare const kPOSIXErrorETOOMANYREFS: number;

declare const kPOSIXErrorETXTBSY: number;

declare const kPOSIXErrorEUSERS: number;

declare const kPOSIXErrorEXDEV: number;

declare const kPackageAliasType: number;

declare const kPageInMemory: number;

declare const kPageOnDisk: number;

declare const kPascalStackBased: number;

declare const kPassCallToChainErr: number;

declare const kPassSelector: number;

declare const kPassword: number;

declare const kPasswordChangedKCEvent: number;

declare const kPasswordChangedKCEventMask: number;

declare const kPathKCItemAttr: number;

declare const kPictureDocumentsFolderType: number;

declare const kPolicyKCStopOn: number;

declare const kPortKCItemAttr: number;

declare const kPos2Offset: number;

declare const kPostCardEventErr: number;

declare const kPowerHandlerExistsForDeviceErr: number;

declare const kPowerHandlerNotFoundForDeviceErr: number;

declare const kPowerHandlerNotFoundForProcErr: number;

declare const kPowerMgtMessageNotHandled: number;

declare const kPowerMgtRequestDenied: number;

declare const kPowerPCISA: number;

declare const kPowerPCRTA: number;

declare const kPreMacOS91AppleExtrasFolderType: number;

declare const kPreMacOS91ApplicationsFolderType: number;

declare const kPreMacOS91AssistantsFolderType: number;

declare const kPreMacOS91AutomountedServersFolderType: number;

declare const kPreMacOS91InstallerLogsFolderType: number;

declare const kPreMacOS91InternetFolderType: number;

declare const kPreMacOS91MacOSReadMesFolderType: number;

declare const kPreMacOS91StationeryFolderType: number;

declare const kPreMacOS91UtilitiesFolderType: number;

declare const kPreemptiveThread: number;

declare const kPreferencePanesFolderType: number;

declare const kPreferencesFolderAliasType: number;

declare const kPreferencesFolderIcon: number;

declare const kPreferencesFolderIconResource: number;

declare const kPreferencesFolderType: number;

declare const kPreviousBody: number;

declare const kPrintMonitorDocsFolderAliasType: number;

declare const kPrintMonitorDocsFolderType: number;

declare const kPrintMonitorFolderIcon: number;

declare const kPrintMonitorFolderIconResource: number;

declare const kPrinterDescriptionFolderIcon: number;

declare const kPrinterDescriptionFolderType: number;

declare const kPrinterDriverFolderIcon: number;

declare const kPrinterDriverFolderType: number;

declare const kPrintersFolderType: number;

declare const kPrintingPlugInsFolderType: number;

declare const kPrivateFolderIcon: number;

declare const kPrivateFolderIconResource: number;

declare const kPrivateFrameworksFolderType: number;

declare const kPrivilegeViolationException: number;

declare const kProcDescriptorIsAbsolute: number;

declare const kProcDescriptorIsIndex: number;

declare const kProcDescriptorIsProcPtr: number;

declare const kProcDescriptorIsRelative: number;

declare const kProcessorTempRoutineRequiresMPLib2: number;

declare const kProtectedApplicationFolderIcon: number;

declare const kProtectedSystemFolderIcon: number;

declare const kProtocolKCItemAttr: number;

declare const kPublicFolderIcon: number;

declare const kPublicFolderType: number;

declare const kPublicKeyHashKCItemAttr: number;

declare const kQDCorruptPICTDataErr: number;

declare const kQDCursorAlreadyRegistered: number;

declare const kQDCursorNotRegistered: number;

declare const kQDNoColorHWCursorSupport: number;

declare const kQDNoPalette: number;

declare const kQTSSUnknownErr: number;

declare const kQuestionMarkIcon: number;

declare const kQuickLookFolderType: number;

declare const kQuickTimeComponentsFolderType: number;

declare const kQuickTimeExtensionsFolderType: number;

declare const kRAATalkInactive: number;

declare const kRACallBackFailed: number;

declare const kRAConfigurationDBInitErr: number;

declare const kRAConnectionCanceled: number;

declare const kRADuplicateIPAddr: number;

declare const kRAExtAuthenticationFailed: number;

declare const kRAIncompatiblePrefs: number;

declare const kRAInitOpenTransportFailed: number;

declare const kRAInstallationDamaged: number;

declare const kRAInternalError: number;

declare const kRAInvalidParameter: number;

declare const kRAInvalidPassword: number;

declare const kRAInvalidPort: number;

declare const kRAInvalidPortState: number;

declare const kRAInvalidSerialProtocol: number;

declare const kRAMissingResources: number;

declare const kRANCPRejectedbyPeer: number;

declare const kRANotConnected: number;

declare const kRANotEnabled: number;

declare const kRANotPrimaryInterface: number;

declare const kRANotSupported: number;

declare const kRAOutOfMemory: number;

declare const kRAPPPAuthenticationFailed: number;

declare const kRAPPPNegotiationFailed: number;

declare const kRAPPPPeerDisconnected: number;

declare const kRAPPPProtocolRejected: number;

declare const kRAPPPUserDisconnected: number;

declare const kRAPeerNotResponding: number;

declare const kRAPortBusy: number;

declare const kRAPortSetupFailed: number;

declare const kRARemoteAccessNotReady: number;

declare const kRAStartupFailed: number;

declare const kRATCPIPInactive: number;

declare const kRATCPIPNotConfigured: number;

declare const kRAUnknownPortState: number;

declare const kRAUnknownUser: number;

declare const kRAUserInteractionRequired: number;

declare const kRAUserLoginDisabled: number;

declare const kRAUserPwdChangeRequired: number;

declare const kRAUserPwdEntryRequired: number;

declare const kRdPermKCStatus: number;

declare const kReadExtensionTermsMask: number;

declare const kReadFailureErr: number;

declare const kReadOnlyMemoryException: number;

declare const kReadReference: number;

declare const kReadyThreadState: number;

declare const kRecentApplicationsFolderIcon: number;

declare const kRecentApplicationsFolderType: number;

declare const kRecentDocumentsFolderIcon: number;

declare const kRecentDocumentsFolderType: number;

declare const kRecentItemsIcon: number;

declare const kRecentServersFolderIcon: number;

declare const kRecentServersFolderType: number;

declare const kRedirectedRelativeFolder: number;

declare const kRegisterA0: number;

declare const kRegisterA1: number;

declare const kRegisterA2: number;

declare const kRegisterA3: number;

declare const kRegisterA4: number;

declare const kRegisterA5: number;

declare const kRegisterA6: number;

declare const kRegisterBased: number;

declare const kRegisterD0: number;

declare const kRegisterD1: number;

declare const kRegisterD2: number;

declare const kRegisterD3: number;

declare const kRegisterD4: number;

declare const kRegisterD5: number;

declare const kRegisterD6: number;

declare const kRegisterD7: number;

declare const kRegisterParameterMask: number;

declare const kRegisterParameterPhase: number;

declare const kRegisterParameterSizePhase: number;

declare const kRegisterParameterSizeWidth: number;

declare const kRegisterParameterWhichPhase: number;

declare const kRegisterParameterWhichWidth: number;

declare const kRegisterParameterWidth: number;

declare const kRegisterResultLocationPhase: number;

declare const kRegisterResultLocationWidth: number;

declare const kRelativeFolder: number;

declare const kResFileNotOpened: number;

declare const kResolveAliasFileNoUI: number;

declare const kResolveAliasTryFileIDFirst: number;

declare const kResultSizeMask: number;

declare const kResultSizePhase: number;

declare const kResultSizeWidth: number;

declare const kReturnNextGroup: number;

declare const kReturnNextUG: number;

declare const kReturnNextUser: number;

declare const kRightContainerArrowIcon: number;

declare const kRightToLeft: number;

declare const kRolloverIconVariant: number;

declare const kRootFolder: number;

declare const kRoutineDescriptorVersion: number;

declare const kRoutineIsDispatchedDefaultRoutine: number;

declare const kRoutineIsNotDispatchedDefaultRoutine: number;

declare const kRoutingResourceID: number;

declare const kRoutingResourceType: number;

declare const kRsrcChainAboveAllMaps: number;

declare const kRsrcChainAboveApplicationMap: number;

declare const kRsrcChainBelowApplicationMap: number;

declare const kRsrcChainBelowSystemMap: number;

declare const kRunningThreadState: number;
declare var kSKEndTermChars: NSObject;

declare var kSKMaximumTerms: NSObject;

declare var kSKMinTermLength: NSObject;

declare var kSKProximityIndexing: NSObject;


declare const kSKSearchOptionDefault: number;

declare const kSKSearchOptionFindSimilar: number;

declare const kSKSearchOptionNoRelevanceScores: number;

declare const kSKSearchOptionSpaceMeansOR: number;
declare var kSKStartTermChars: NSObject;

declare var kSKStopWords: NSObject;

declare var kSKSubstitutions: NSObject;

declare var kSKTermChars: NSObject;


declare const kSOAP1999Schema: number;

declare const kSOAP2001Schema: number;

declare const kSSpCantInstallErr: number;

declare const kSSpInternalErr: number;

declare const kSSpParallelUpVectorErr: number;

declare const kSSpScaleToZeroErr: number;

declare const kSSpVersionErr: number;

declare const kScreenSaversFolderType: number;

declare const kScriptCodeKCItemAttr: number;

declare const kScriptingAdditionsFolderIcon: number;

declare const kScriptingAdditionsFolderType: number;

declare const kScriptsFolderIcon: number;

declare const kScriptsFolderType: number;

declare const kSecOptionReserved: number;

declare const kSecurityDomainKCItemAttr: number;

declare const kSelectorsAreIndexable: number;

declare const kSelectorsAreNotIndexable: number;

declare const kSerialNumberKCItemAttr: number;

declare const kServerKCItemAttr: number;

declare const kServiceKCItemAttr: number;

declare const kServicesFolderType: number;

declare const kSetDebugOption: number;

declare const kSetPowerLevel: number;

declare const kSharedBadgeIcon: number;

declare const kSharedFolderAliasType: number;

declare const kSharedFolderIcon: number;

declare const kSharedFolderIconResource: number;

declare const kSharedLibrariesFolderIcon: number;

declare const kSharedLibrariesFolderType: number;

declare const kSharedUserDataFolderType: number;

declare const kSharingPrivsNotApplicableIcon: number;

declare const kSharingPrivsReadOnlyIcon: number;

declare const kSharingPrivsReadWriteIcon: number;

declare const kSharingPrivsUnknownIcon: number;

declare const kSharingPrivsWritableIcon: number;

declare const kShiftJIS_BasicVariant: number;

declare const kShiftJIS_DOSVariant: number;

declare const kShiftJIS_MusicCDVariant: number;

declare const kShortcutIcon: number;

declare const kShowHideInputWindow: number;

declare const kShutdownFolderType: number;

declare const kShutdownItemsDisabledFolderIcon: number;

declare const kShutdownItemsDisabledFolderType: number;

declare const kShutdownItemsFolderIcon: number;

declare const kSignKCItemAttr: number;

declare const kSignatureKCItemAttr: number;

declare const kSleepDemand: number;

declare const kSleepDeny: number;

declare const kSleepNow: number;

declare const kSleepRequest: number;

declare const kSleepRevoke: number;

declare const kSleepUnlock: number;

declare const kSleepWakeUp: number;

declare const kSmall1BitMask: number;

declare const kSmall32BitData: number;

declare const kSmall4BitData: number;

declare const kSmall4BitIconSize: number;

declare const kSmall8BitData: number;

declare const kSmall8BitIconSize: number;

declare const kSmall8BitMask: number;

declare const kSmallIconSize: number;

declare const kSortAscendingIcon: number;

declare const kSortDescendingIcon: number;

declare const kSoundFileIcon: number;

declare const kSoundSetsFolderType: number;

declare const kSpeakableItemsFolder: number;

declare const kSpeakableItemsFolderType: number;

declare const kSpecialCase: number;

declare const kSpecialCaseCaretHook: number;

declare const kSpecialCaseDrawHook: number;

declare const kSpecialCaseEOLHook: number;

declare const kSpecialCaseGNEFilterProc: number;

declare const kSpecialCaseHighHook: number;

declare const kSpecialCaseHitTestHook: number;

declare const kSpecialCaseMBarHook: number;

declare const kSpecialCaseNWidthHook: number;

declare const kSpecialCaseProtocolHandler: number;

declare const kSpecialCaseSelectorMask: number;

declare const kSpecialCaseSelectorPhase: number;

declare const kSpecialCaseSelectorWidth: number;

declare const kSpecialCaseSocketListener: number;

declare const kSpecialCaseTEDoText: number;

declare const kSpecialCaseTEFindWord: number;

declare const kSpecialCaseTERecalc: number;

declare const kSpecialCaseTextWidthHook: number;

declare const kSpecialCaseWidthHook: number;

declare const kSpecialFolder: number;

declare const kSpeechFolderType: number;

declare const kSpotlightImportersFolderType: number;

declare const kSpotlightMetadataCacheFolderType: number;

declare const kSpotlightSavedSearchesFolderType: number;

declare const kStackDispatchedPascalStackBased: number;

declare const kStackOverflowException: number;

declare const kStackParameterMask: number;

declare const kStackParameterPhase: number;

declare const kStackParameterWidth: number;

declare const kStartDateKCItemAttr: number;

declare const kStartupFolderAliasType: number;

declare const kStartupFolderIconResource: number;

declare const kStartupFolderType: number;

declare const kStartupItemsDisabledFolderIcon: number;

declare const kStartupItemsDisabledFolderType: number;

declare const kStartupItemsFolderIcon: number;

declare const kStationeryFolderType: number;

declare const kStillIdle: number;

declare const kStoppedThreadState: number;

declare const kSubjectKCItemAttr: number;

declare const kSuspendDemand: number;

declare const kSuspendRequest: number;

declare const kSuspendRevoke: number;

declare const kSuspendWakeToDoze: number;

declare const kSuspendWakeUp: number;

declare const kSysSWTooOld: number;

declare const kSystemControlPanelFolderType: number;

declare const kSystemDesktopFolderType: number;

declare const kSystemDomain: number;

declare const kSystemEventKCEventMask: number;

declare const kSystemExtensionDisabledFolderIcon: number;

declare const kSystemExtensionDisabledFolderType: number;

declare const kSystemFolderAliasType: number;

declare const kSystemFolderIcon: number;

declare const kSystemFolderIconResource: number;

declare const kSystemFolderType: number;

declare const kSystemIconsCreator: number;

declare const kSystemKCEvent: number;

declare const kSystemPreferencesFolderType: number;

declare const kSystemResFile: number;

declare const kSystemSoundsFolderType: number;

declare const kSystemSuitcaseIcon: number;

declare const kSystemTrashFolderType: number;

declare const kTECAddFallbackInterruptBit: number;

declare const kTECAddFallbackInterruptMask: number;

declare const kTECAddForceASCIIChangesBit: number;

declare const kTECAddForceASCIIChangesMask: number;

declare const kTECAddTextRunHeuristicsBit: number;

declare const kTECAddTextRunHeuristicsMask: number;

declare const kTECArrayFullErr: number;

declare const kTECAvailableEncodingsResType: number;

declare const kTECAvailableSniffersResType: number;

declare const kTECBadTextRunErr: number;

declare const kTECBufferBelowMinimumSizeErr: number;

declare const kTECChinesePluginSignature: number;

declare const kTECConversionInfoResType: number;

declare const kTECCorruptConverterErr: number;

declare const kTECDirectionErr: number;

declare const kTECDisableFallbacksBit: number;

declare const kTECDisableFallbacksMask: number;

declare const kTECDisableLooseMappingsBit: number;

declare const kTECDisableLooseMappingsMask: number;

declare const kTECFallbackTextLengthFixBit: number;

declare const kTECFallbackTextLengthFixMask: number;

declare const kTECGlobalsUnavailableErr: number;

declare const kTECIncompleteElementErr: number;

declare const kTECInfoCurrentFormat: number;

declare const kTECInternetNameDefaultUsageMask: number;

declare const kTECInternetNameStrictUsageMask: number;

declare const kTECInternetNameTolerantUsageMask: number;

declare const kTECInternetNamesResType: number;

declare const kTECItemUnavailableErr: number;

declare const kTECJapanesePluginSignature: number;

declare const kTECKeepInfoFixBit: number;

declare const kTECKeepInfoFixMask: number;

declare const kTECKoreanPluginSignature: number;

declare const kTECMailEncodingsResType: number;

declare const kTECMissingTableErr: number;

declare const kTECNeedFlushStatus: number;

declare const kTECNoConversionPathErr: number;

declare const kTECOutputBufferFullStatus: number;

declare const kTECPartialCharErr: number;

declare const kTECPluginCreator: number;

declare const kTECPluginDispatchTableCurrentVersion: number;

declare const kTECPluginDispatchTableVersion1: number;

declare const kTECPluginDispatchTableVersion1_1: number;

declare const kTECPluginDispatchTableVersion1_2: number;

declare const kTECPluginManyToOne: number;

declare const kTECPluginOneToMany: number;

declare const kTECPluginOneToOne: number;

declare const kTECPluginSniffObj: number;

declare const kTECPluginType: number;

declare const kTECPreferredEncodingFixBit: number;

declare const kTECPreferredEncodingFixMask: number;

declare const kTECResourceID: number;

declare const kTECSignature: number;

declare const kTECSubTextEncodingsResType: number;

declare const kTECTableChecksumErr: number;

declare const kTECTableFormatErr: number;

declare const kTECTextRunBitClearFixBit: number;

declare const kTECTextRunBitClearFixMask: number;

declare const kTECTextToUnicodeScanFixBit: number;

declare const kTECTextToUnicodeScanFixMask: number;

declare const kTECUnicodePluginSignature: number;

declare const kTECUnmappableElementErr: number;

declare const kTECUsedFallbacksStatus: number;

declare const kTECWebEncodingsResType: number;

declare const kTEC_MIBEnumDontCare: number;

declare const kTMTaskActive: number;

declare const kTSMHiliteBlockFillText: number;

declare const kTSMHiliteCaretPosition: number;

declare const kTSMHiliteConvertedText: number;

declare const kTSMHiliteNoHilite: number;

declare const kTSMHiliteOutlineText: number;

declare const kTSMHiliteRawText: number;

declare const kTSMHiliteSelectedConvertedText: number;

declare const kTSMHiliteSelectedRawText: number;

declare const kTSMHiliteSelectedText: number;

declare const kTSMInsideOfActiveInputArea: number;

declare const kTSMInsideOfBody: number;

declare const kTSMOutsideOfBody: number;

declare const kTXNATSUIIsNotInstalledErr: number;

declare const kTXNAlreadyInitializedErr: number;

declare const kTXNAttributeTagInvalidForRunErr: number;

declare const kTXNBadDefaultFileTypeWarning: number;

declare const kTXNCannotAddFrameErr: number;

declare const kTXNCannotSetAutoIndentErr: number;

declare const kTXNCannotTurnTSMOffWhenUsingUnicodeErr: number;

declare const kTXNCopyNotAllowedInEchoModeErr: number;

declare const kTXNDataTypeNotAllowedErr: number;

declare const kTXNEndIterationErr: number;

declare const kTXNIllegalToCrossDataBoundariesErr: number;

declare const kTXNInvalidFrameIDErr: number;

declare const kTXNInvalidRunIndex: number;

declare const kTXNNoMatchErr: number;

declare const kTXNOutsideOfFrameErr: number;

declare const kTXNOutsideOfLineErr: number;

declare const kTXNRunIndexOutofBoundsErr: number;

declare const kTXNSomeOrAllTagsInvalidForRunErr: number;

declare const kTXNUserCanceledOperationErr: number;

declare const kTaskCreationException: number;

declare const kTaskTerminationException: number;

declare const kTemporaryFolderType: number;

declare const kTemporaryItemsInCacheDataFolderType: number;

declare const kTemporaryItemsInUserDomainFolderType: number;

declare const kTextCenter: number;

declare const kTextEncodingANSEL: number;

declare const kTextEncodingBaseName: number;

declare const kTextEncodingBig5: number;

declare const kTextEncodingBig5_E: number;

declare const kTextEncodingBig5_HKSCS_1999: number;

declare const kTextEncodingCNS_11643_92_P1: number;

declare const kTextEncodingCNS_11643_92_P2: number;

declare const kTextEncodingCNS_11643_92_P3: number;

declare const kTextEncodingDOSArabic: number;

declare const kTextEncodingDOSBalticRim: number;

declare const kTextEncodingDOSCanadianFrench: number;

declare const kTextEncodingDOSChineseSimplif: number;

declare const kTextEncodingDOSChineseTrad: number;

declare const kTextEncodingDOSCyrillic: number;

declare const kTextEncodingDOSGreek: number;

declare const kTextEncodingDOSGreek1: number;

declare const kTextEncodingDOSGreek2: number;

declare const kTextEncodingDOSHebrew: number;

declare const kTextEncodingDOSIcelandic: number;

declare const kTextEncodingDOSJapanese: number;

declare const kTextEncodingDOSKorean: number;

declare const kTextEncodingDOSLatin1: number;

declare const kTextEncodingDOSLatin2: number;

declare const kTextEncodingDOSLatinUS: number;

declare const kTextEncodingDOSNordic: number;

declare const kTextEncodingDOSPortuguese: number;

declare const kTextEncodingDOSRussian: number;

declare const kTextEncodingDOSThai: number;

declare const kTextEncodingDOSTurkish: number;

declare const kTextEncodingDefaultFormat: number;

declare const kTextEncodingDefaultVariant: number;

declare const kTextEncodingEBCDIC_CP037: number;

declare const kTextEncodingEBCDIC_LatinCore: number;

declare const kTextEncodingEBCDIC_US: number;

declare const kTextEncodingEUC_CN: number;

declare const kTextEncodingEUC_JP: number;

declare const kTextEncodingEUC_KR: number;

declare const kTextEncodingEUC_TW: number;

declare const kTextEncodingFormatName: number;

declare const kTextEncodingFullName: number;

declare const kTextEncodingGBK_95: number;

declare const kTextEncodingGB_18030_2000: number;

declare const kTextEncodingGB_18030_2005: number;

declare const kTextEncodingGB_2312_80: number;

declare const kTextEncodingHZ_GB_2312: number;

declare const kTextEncodingISO10646_1993: number;

declare const kTextEncodingISOLatin1: number;

declare const kTextEncodingISOLatin10: number;

declare const kTextEncodingISOLatin2: number;

declare const kTextEncodingISOLatin3: number;

declare const kTextEncodingISOLatin4: number;

declare const kTextEncodingISOLatin5: number;

declare const kTextEncodingISOLatin6: number;

declare const kTextEncodingISOLatin7: number;

declare const kTextEncodingISOLatin8: number;

declare const kTextEncodingISOLatin9: number;

declare const kTextEncodingISOLatinArabic: number;

declare const kTextEncodingISOLatinCyrillic: number;

declare const kTextEncodingISOLatinGreek: number;

declare const kTextEncodingISOLatinHebrew: number;

declare const kTextEncodingISO_2022_CN: number;

declare const kTextEncodingISO_2022_CN_EXT: number;

declare const kTextEncodingISO_2022_JP: number;

declare const kTextEncodingISO_2022_JP_1: number;

declare const kTextEncodingISO_2022_JP_2: number;

declare const kTextEncodingISO_2022_JP_3: number;

declare const kTextEncodingISO_2022_KR: number;

declare const kTextEncodingJIS_C6226_78: number;

declare const kTextEncodingJIS_X0201_76: number;

declare const kTextEncodingJIS_X0208_83: number;

declare const kTextEncodingJIS_X0208_90: number;

declare const kTextEncodingJIS_X0212_90: number;

declare const kTextEncodingJIS_X0213_MenKuTen: number;

declare const kTextEncodingKOI8_R: number;

declare const kTextEncodingKOI8_U: number;

declare const kTextEncodingKSC_5601_87: number;

declare const kTextEncodingKSC_5601_92_Johab: number;

declare const kTextEncodingMacArabic: number;

declare const kTextEncodingMacArmenian: number;

declare const kTextEncodingMacBengali: number;

declare const kTextEncodingMacBurmese: number;

declare const kTextEncodingMacCeltic: number;

declare const kTextEncodingMacCentralEurRoman: number;

declare const kTextEncodingMacChineseSimp: number;

declare const kTextEncodingMacChineseTrad: number;

declare const kTextEncodingMacCroatian: number;

declare const kTextEncodingMacCyrillic: number;

declare const kTextEncodingMacDevanagari: number;

declare const kTextEncodingMacDingbats: number;

declare const kTextEncodingMacEastEurRoman: number;

declare const kTextEncodingMacEthiopic: number;

declare const kTextEncodingMacExtArabic: number;

declare const kTextEncodingMacFarsi: number;

declare const kTextEncodingMacGaelic: number;

declare const kTextEncodingMacGeez: number;

declare const kTextEncodingMacGeorgian: number;

declare const kTextEncodingMacGreek: number;

declare const kTextEncodingMacGujarati: number;

declare const kTextEncodingMacGurmukhi: number;

declare const kTextEncodingMacHFS: number;

declare const kTextEncodingMacHebrew: number;

declare const kTextEncodingMacIcelandic: number;

declare const kTextEncodingMacInuit: number;

declare const kTextEncodingMacJapanese: number;

declare const kTextEncodingMacKannada: number;

declare const kTextEncodingMacKeyboardGlyphs: number;

declare const kTextEncodingMacKhmer: number;

declare const kTextEncodingMacKorean: number;

declare const kTextEncodingMacLaotian: number;

declare const kTextEncodingMacMalayalam: number;

declare const kTextEncodingMacMongolian: number;

declare const kTextEncodingMacOriya: number;

declare const kTextEncodingMacRSymbol: number;

declare const kTextEncodingMacRoman: number;

declare const kTextEncodingMacRomanLatin1: number;

declare const kTextEncodingMacRomanian: number;

declare const kTextEncodingMacSimpChinese: number;

declare const kTextEncodingMacSinhalese: number;

declare const kTextEncodingMacSymbol: number;

declare const kTextEncodingMacTamil: number;

declare const kTextEncodingMacTelugu: number;

declare const kTextEncodingMacThai: number;

declare const kTextEncodingMacTibetan: number;

declare const kTextEncodingMacTradChinese: number;

declare const kTextEncodingMacTurkish: number;

declare const kTextEncodingMacUkrainian: number;

declare const kTextEncodingMacUnicode: number;

declare const kTextEncodingMacUninterp: number;

declare const kTextEncodingMacVT100: number;

declare const kTextEncodingMacVietnamese: number;

declare const kTextEncodingMultiRun: number;

declare const kTextEncodingNextStepJapanese: number;

declare const kTextEncodingNextStepLatin: number;

declare const kTextEncodingShiftJIS: number;

declare const kTextEncodingShiftJIS_X0213: number;

declare const kTextEncodingShiftJIS_X0213_00: number;

declare const kTextEncodingUS_ASCII: number;

declare const kTextEncodingUnicodeDefault: number;

declare const kTextEncodingUnicodeV10_0: number;

declare const kTextEncodingUnicodeV11_0: number;

declare const kTextEncodingUnicodeV12_1: number;

declare const kTextEncodingUnicodeV1_1: number;

declare const kTextEncodingUnicodeV2_0: number;

declare const kTextEncodingUnicodeV2_1: number;

declare const kTextEncodingUnicodeV3_0: number;

declare const kTextEncodingUnicodeV3_1: number;

declare const kTextEncodingUnicodeV3_2: number;

declare const kTextEncodingUnicodeV4_0: number;

declare const kTextEncodingUnicodeV5_0: number;

declare const kTextEncodingUnicodeV5_1: number;

declare const kTextEncodingUnicodeV6_0: number;

declare const kTextEncodingUnicodeV6_1: number;

declare const kTextEncodingUnicodeV6_3: number;

declare const kTextEncodingUnicodeV7_0: number;

declare const kTextEncodingUnicodeV8_0: number;

declare const kTextEncodingUnicodeV9_0: number;

declare const kTextEncodingUnknown: number;

declare const kTextEncodingVISCII: number;

declare const kTextEncodingVariantName: number;

declare const kTextEncodingWindowsANSI: number;

declare const kTextEncodingWindowsArabic: number;

declare const kTextEncodingWindowsBalticRim: number;

declare const kTextEncodingWindowsCyrillic: number;

declare const kTextEncodingWindowsGreek: number;

declare const kTextEncodingWindowsHebrew: number;

declare const kTextEncodingWindowsKoreanJohab: number;

declare const kTextEncodingWindowsLatin1: number;

declare const kTextEncodingWindowsLatin2: number;

declare const kTextEncodingWindowsLatin5: number;

declare const kTextEncodingWindowsVietnamese: number;

declare const kTextEncodingsFolderIcon: number;

declare const kTextEncodingsFolderType: number;

declare const kTextFlushDefault: number;

declare const kTextFlushLeft: number;

declare const kTextFlushRight: number;

declare const kTextLanguageDontCare: number;

declare const kTextMalformedInputErr: number;

declare const kTextRegionDontCare: number;

declare const kTextScriptDontCare: number;

declare const kTextServiceClass: number;

declare const kTextUndefinedElementErr: number;

declare const kTextUnsupportedEncodingErr: number;

declare const kThemesFolderType: number;

declare const kThinkCStackBased: number;

declare const kThumbnail32BitData: number;

declare const kThumbnail8BitMask: number;

declare const kTileIconVariant: number;

declare const kTooManyIOWindowsErr: number;

declare const kToolbarAdvancedIcon: number;

declare const kToolbarApplicationsFolderIcon: number;

declare const kToolbarCustomizeIcon: number;

declare const kToolbarDeleteIcon: number;

declare const kToolbarDesktopFolderIcon: number;

declare const kToolbarDocumentsFolderIcon: number;

declare const kToolbarDownloadsFolderIcon: number;

declare const kToolbarFavoritesIcon: number;

declare const kToolbarHomeIcon: number;

declare const kToolbarInfoIcon: number;

declare const kToolbarLabelsIcon: number;

declare const kToolbarLibraryFolderIcon: number;

declare const kToolbarMovieFolderIcon: number;

declare const kToolbarMusicFolderIcon: number;

declare const kToolbarPicturesFolderIcon: number;

declare const kToolbarPublicFolderIcon: number;

declare const kToolbarSitesFolderIcon: number;

declare const kToolbarUtilitiesFolderIcon: number;

declare const kTraceException: number;

declare const kTrapException: number;

declare const kTrashFolderType: number;

declare const kTrashIcon: number;

declare const kTrashIconResource: number;

declare const kTrueTypeFlatFontIcon: number;

declare const kTrueTypeFontIcon: number;

declare const kTrueTypeMultiFlatFontIcon: number;

declare const kTwoByteCode: number;

declare const kTwoWayEncryptPassword: number;

declare const kTypeKCItemAttr: number;

declare const kUCBidiCatArabicNumber: number;

declare const kUCBidiCatBlockSeparator: number;

declare const kUCBidiCatBoundaryNeutral: number;

declare const kUCBidiCatCommonNumberSeparator: number;

declare const kUCBidiCatEuroNumber: number;

declare const kUCBidiCatEuroNumberSeparator: number;

declare const kUCBidiCatEuroNumberTerminator: number;

declare const kUCBidiCatFirstStrongIsolate: number;

declare const kUCBidiCatLeftRight: number;

declare const kUCBidiCatLeftRightEmbedding: number;

declare const kUCBidiCatLeftRightIsolate: number;

declare const kUCBidiCatLeftRightOverride: number;

declare const kUCBidiCatNonSpacingMark: number;

declare const kUCBidiCatNotApplicable: number;

declare const kUCBidiCatOtherNeutral: number;

declare const kUCBidiCatPopDirectionalFormat: number;

declare const kUCBidiCatPopDirectionalIsolate: number;

declare const kUCBidiCatRightLeft: number;

declare const kUCBidiCatRightLeftArabic: number;

declare const kUCBidiCatRightLeftEmbedding: number;

declare const kUCBidiCatRightLeftIsolate: number;

declare const kUCBidiCatRightLeftOverride: number;

declare const kUCBidiCatSegmentSeparator: number;

declare const kUCBidiCatWhitespace: number;

declare const kUCCharPropTypeBidiCategory: number;

declare const kUCCharPropTypeCombiningClass: number;

declare const kUCCharPropTypeDecimalDigitValue: number;

declare const kUCCharPropTypeGenlCategory: number;

declare const kUCCollateCaseInsensitiveMask: number;

declare const kUCCollateComposeInsensitiveMask: number;

declare const kUCCollateDiacritInsensitiveMask: number;

declare const kUCCollateDigitsAsNumberMask: number;

declare const kUCCollateDigitsOverrideMask: number;

declare const kUCCollatePunctuationSignificantMask: number;

declare const kUCCollateStandardOptions: number;

declare const kUCCollateTypeHFSExtended: number;

declare const kUCCollateTypeMask: number;

declare const kUCCollateTypeShiftBits: number;

declare const kUCCollateTypeSourceMask: number;

declare const kUCCollateWidthInsensitiveMask: number;

declare const kUCGenlCatLetterLowercase: number;

declare const kUCGenlCatLetterModifier: number;

declare const kUCGenlCatLetterOther: number;

declare const kUCGenlCatLetterTitlecase: number;

declare const kUCGenlCatLetterUppercase: number;

declare const kUCGenlCatMarkEnclosing: number;

declare const kUCGenlCatMarkNonSpacing: number;

declare const kUCGenlCatMarkSpacingCombining: number;

declare const kUCGenlCatNumberDecimalDigit: number;

declare const kUCGenlCatNumberLetter: number;

declare const kUCGenlCatNumberOther: number;

declare const kUCGenlCatOtherControl: number;

declare const kUCGenlCatOtherFormat: number;

declare const kUCGenlCatOtherNotAssigned: number;

declare const kUCGenlCatOtherPrivateUse: number;

declare const kUCGenlCatOtherSurrogate: number;

declare const kUCGenlCatPunctClose: number;

declare const kUCGenlCatPunctConnector: number;

declare const kUCGenlCatPunctDash: number;

declare const kUCGenlCatPunctFinalQuote: number;

declare const kUCGenlCatPunctInitialQuote: number;

declare const kUCGenlCatPunctOpen: number;

declare const kUCGenlCatPunctOther: number;

declare const kUCGenlCatSeparatorLine: number;

declare const kUCGenlCatSeparatorParagraph: number;

declare const kUCGenlCatSeparatorSpace: number;

declare const kUCGenlCatSymbolCurrency: number;

declare const kUCGenlCatSymbolMath: number;

declare const kUCGenlCatSymbolModifier: number;

declare const kUCGenlCatSymbolOther: number;

declare const kUCHighSurrogateRangeEnd: number;

declare const kUCHighSurrogateRangeStart: number;

declare const kUCKeyActionAutoKey: number;

declare const kUCKeyActionDisplay: number;

declare const kUCKeyActionDown: number;

declare const kUCKeyActionUp: number;

declare const kUCKeyLayoutFeatureInfoFormat: number;

declare const kUCKeyLayoutHeaderFormat: number;

declare const kUCKeyModifiersToTableNumFormat: number;

declare const kUCKeyOutputGetIndexMask: number;

declare const kUCKeyOutputSequenceIndexMask: number;

declare const kUCKeyOutputStateIndexMask: number;

declare const kUCKeyOutputTestForIndexMask: number;

declare const kUCKeySequenceDataIndexFormat: number;

declare const kUCKeyStateEntryRangeFormat: number;

declare const kUCKeyStateEntryTerminalFormat: number;

declare const kUCKeyStateRecordsIndexFormat: number;

declare const kUCKeyStateTerminatorsFormat: number;

declare const kUCKeyToCharTableIndexFormat: number;

declare const kUCKeyTranslateNoDeadKeysBit: number;

declare const kUCKeyTranslateNoDeadKeysMask: number;

declare const kUCLowSurrogateRangeEnd: number;

declare const kUCLowSurrogateRangeStart: number;

declare const kUCOutputBufferTooSmall: number;

declare const kUCTSDirectionNext: number;

declare const kUCTSDirectionPrevious: number;

declare const kUCTSNoKeysAddedToObjectErr: number;

declare const kUCTSOptionsDataIsOrderedMask: number;

declare const kUCTSOptionsNoneMask: number;

declare const kUCTSOptionsReleaseStringMask: number;

declare const kUCTSSearchListErr: number;

declare const kUCTextBreakCharMask: number;

declare const kUCTextBreakClusterMask: number;

declare const kUCTextBreakGoBackwardsMask: number;

declare const kUCTextBreakIterateMask: number;

declare const kUCTextBreakLeadingEdgeMask: number;

declare const kUCTextBreakLineMask: number;

declare const kUCTextBreakLocatorMissingType: number;

declare const kUCTextBreakParagraphMask: number;

declare const kUCTextBreakWordMask: number;

declare const kUCTokenNotFound: number;

declare const kUCTokenizerIterationFinished: number;

declare const kUCTokenizerUnknownLang: number;

declare const kUCTypeSelectMaxListSize: number;

declare const kURL68kNotSupportedError: number;

declare const kURLAccessNotAvailableError: number;

declare const kURLAuthenticationError: number;

declare const kURLDestinationExistsError: number;

declare const kURLExtensionFailureError: number;

declare const kURLFileEmptyError: number;

declare const kURLInvalidCallError: number;

declare const kURLInvalidConfigurationError: number;

declare const kURLInvalidURLError: number;

declare const kURLInvalidURLReferenceError: number;

declare const kURLProgressAlreadyDisplayedError: number;

declare const kURLPropertyBufferTooSmallError: number;

declare const kURLPropertyNotYetKnownError: number;

declare const kURLServerBusyError: number;

declare const kURLUnknownPropertyError: number;

declare const kURLUnsettablePropertyError: number;

declare const kURLUnsupportedSchemeError: number;

declare const kUSBAbortedError: number;

declare const kUSBAlreadyOpenErr: number;

declare const kUSBBadDispatchTable: number;

declare const kUSBBitstufErr: number;

declare const kUSBBufOvrRunErr: number;

declare const kUSBBufUnderRunErr: number;

declare const kUSBCRCErr: number;

declare const kUSBCompletionError: number;

declare const kUSBDataToggleErr: number;

declare const kUSBDeviceBusy: number;

declare const kUSBDeviceDisconnected: number;

declare const kUSBDeviceErr: number;

declare const kUSBDeviceNotSuspended: number;

declare const kUSBDevicePowerProblem: number;

declare const kUSBDeviceSuspended: number;

declare const kUSBEndpointStallErr: number;

declare const kUSBFlagsError: number;

declare const kUSBIncorrectTypeErr: number;

declare const kUSBInternalErr: number;

declare const kUSBInternalReserved1: number;

declare const kUSBInternalReserved10: number;

declare const kUSBInternalReserved2: number;

declare const kUSBInternalReserved3: number;

declare const kUSBInternalReserved4: number;

declare const kUSBInternalReserved5: number;

declare const kUSBInternalReserved6: number;

declare const kUSBInternalReserved7: number;

declare const kUSBInternalReserved8: number;

declare const kUSBInternalReserved9: number;

declare const kUSBInvalidBuffer: number;

declare const kUSBLinkErr: number;

declare const kUSBNoBandwidthError: number;

declare const kUSBNoDelay: number;

declare const kUSBNoDeviceErr: number;

declare const kUSBNoErr: number;

declare const kUSBNoTran: number;

declare const kUSBNotFound: number;

declare const kUSBNotHandled: number;

declare const kUSBNotRespondingErr: number;

declare const kUSBNotSent1Err: number;

declare const kUSBNotSent2Err: number;

declare const kUSBOutOfMemoryErr: number;

declare const kUSBOverRunErr: number;

declare const kUSBPBLengthError: number;

declare const kUSBPBVersionError: number;

declare const kUSBPIDCheckErr: number;

declare const kUSBPending: number;

declare const kUSBPipeIdleError: number;

declare const kUSBPipeStalledError: number;

declare const kUSBPortDisabled: number;

declare const kUSBQueueAborted: number;

declare const kUSBQueueFull: number;

declare const kUSBRes1Err: number;

declare const kUSBRes2Err: number;

declare const kUSBRqErr: number;

declare const kUSBTimedOut: number;

declare const kUSBTooManyPipesErr: number;

declare const kUSBTooManyTransactionsErr: number;

declare const kUSBUnderRunErr: number;

declare const kUSBUnknownDeviceErr: number;

declare const kUSBUnknownInterfaceErr: number;

declare const kUSBUnknownNotification: number;

declare const kUSBUnknownPipeErr: number;

declare const kUSBUnknownRequestErr: number;

declare const kUSBWrongPIDErr: number;

declare const kUTCDefaultOptions: number;

declare const kUTCOverflowErr: number;

declare const kUTCUnderflowErr: number;
declare var kUTExportedTypeDeclarationsKey: NSObject;

declare var kUTImportedTypeDeclarationsKey: NSObject;

declare var kUTTagClassFilenameExtension: NSObject;

declare var kUTTagClassMIMEType: NSObject;

declare var kUTTagClassNSPboardType: NSObject;

declare var kUTTagClassOSType: NSObject;

declare var kUTType3DContent: NSObject;

declare var kUTTypeAVIMovie: NSObject;

declare var kUTTypeAliasFile: NSObject;

declare var kUTTypeAliasRecord: NSObject;

declare var kUTTypeAppleICNS: NSObject;

declare var kUTTypeAppleProtectedMPEG4Audio: NSObject;

declare var kUTTypeAppleProtectedMPEG4Video: NSObject;

declare var kUTTypeAppleScript: NSObject;

declare var kUTTypeApplication: NSObject;

declare var kUTTypeApplicationBundle: NSObject;

declare var kUTTypeApplicationFile: NSObject;

declare var kUTTypeArchive: NSObject;

declare var kUTTypeAssemblyLanguageSource: NSObject;

declare var kUTTypeAudio: NSObject;

declare var kUTTypeAudioInterchangeFileFormat: NSObject;

declare var kUTTypeAudiovisualContent: NSObject;

declare var kUTTypeBMP: NSObject;

declare var kUTTypeBinaryPropertyList: NSObject;

declare var kUTTypeBookmark: NSObject;

declare var kUTTypeBundle: NSObject;

declare var kUTTypeBzip2Archive: NSObject;

declare var kUTTypeCHeader: NSObject;

declare var kUTTypeCPlusPlusHeader: NSObject;

declare var kUTTypeCPlusPlusSource: NSObject;

declare var kUTTypeCSource: NSObject;

declare var kUTTypeCalendarEvent: NSObject;

declare var kUTTypeCommaSeparatedText: NSObject;

declare var kUTTypeCompositeContent: NSObject;

declare var kUTTypeConformsToKey: NSObject;

declare var kUTTypeContact: NSObject;

declare var kUTTypeContent: NSObject;

declare var kUTTypeData: NSObject;

declare var kUTTypeDatabase: NSObject;

declare var kUTTypeDelimitedText: NSObject;

declare var kUTTypeDescriptionKey: NSObject;

declare var kUTTypeDirectory: NSObject;

declare var kUTTypeDiskImage: NSObject;

declare var kUTTypeElectronicPublication: NSObject;

declare var kUTTypeEmailMessage: NSObject;

declare var kUTTypeExecutable: NSObject;

declare var kUTTypeFileURL: NSObject;

declare var kUTTypeFlatRTFD: NSObject;

declare var kUTTypeFolder: NSObject;

declare var kUTTypeFont: NSObject;

declare var kUTTypeFramework: NSObject;

declare var kUTTypeGIF: NSObject;

declare var kUTTypeGNUZipArchive: NSObject;

declare var kUTTypeHTML: NSObject;

declare var kUTTypeICO: NSObject;

declare var kUTTypeIconFileKey: NSObject;

declare var kUTTypeIdentifierKey: NSObject;

declare var kUTTypeImage: NSObject;

declare var kUTTypeInkText: NSObject;

declare var kUTTypeInternetLocation: NSObject;

declare var kUTTypeItem: NSObject;

declare var kUTTypeJPEG: NSObject;

declare var kUTTypeJPEG2000: NSObject;

declare var kUTTypeJSON: NSObject;

declare var kUTTypeJavaArchive: NSObject;

declare var kUTTypeJavaClass: NSObject;

declare var kUTTypeJavaScript: NSObject;

declare var kUTTypeJavaSource: NSObject;

declare var kUTTypeLivePhoto: NSObject;

declare var kUTTypeLog: NSObject;

declare var kUTTypeM3UPlaylist: NSObject;

declare var kUTTypeMIDIAudio: NSObject;

declare var kUTTypeMP3: NSObject;

declare var kUTTypeMPEG: NSObject;

declare var kUTTypeMPEG2TransportStream: NSObject;

declare var kUTTypeMPEG2Video: NSObject;

declare var kUTTypeMPEG4: NSObject;

declare var kUTTypeMPEG4Audio: NSObject;

declare var kUTTypeMessage: NSObject;

declare var kUTTypeMountPoint: NSObject;

declare var kUTTypeMovie: NSObject;

declare var kUTTypeOSAScript: NSObject;

declare var kUTTypeOSAScriptBundle: NSObject;

declare var kUTTypeObjectiveCPlusPlusSource: NSObject;

declare var kUTTypeObjectiveCSource: NSObject;

declare var kUTTypePDF: NSObject;

declare var kUTTypePHPScript: NSObject;

declare var kUTTypePICT: NSObject;

declare var kUTTypePKCS12: NSObject;

declare var kUTTypePNG: NSObject;

declare var kUTTypePackage: NSObject;

declare var kUTTypePerlScript: NSObject;

declare var kUTTypePlainText: NSObject;

declare var kUTTypePlaylist: NSObject;

declare var kUTTypePluginBundle: NSObject;

declare var kUTTypePresentation: NSObject;

declare var kUTTypePropertyList: NSObject;

declare var kUTTypePythonScript: NSObject;

declare var kUTTypeQuickLookGenerator: NSObject;

declare var kUTTypeQuickTimeImage: NSObject;

declare var kUTTypeQuickTimeMovie: NSObject;

declare var kUTTypeRTF: NSObject;

declare var kUTTypeRTFD: NSObject;

declare var kUTTypeRawImage: NSObject;

declare var kUTTypeReferenceURLKey: NSObject;

declare var kUTTypeResolvable: NSObject;

declare var kUTTypeRubyScript: NSObject;

declare var kUTTypeScalableVectorGraphics: NSObject;

declare var kUTTypeScript: NSObject;

declare var kUTTypeShellScript: NSObject;

declare var kUTTypeSourceCode: NSObject;

declare var kUTTypeSpotlightImporter: NSObject;

declare var kUTTypeSpreadsheet: NSObject;

declare var kUTTypeSwiftSource: NSObject;

declare var kUTTypeSymLink: NSObject;

declare var kUTTypeSystemPreferencesPane: NSObject;

declare var kUTTypeTIFF: NSObject;

declare var kUTTypeTXNTextAndMultimediaData: NSObject;

declare var kUTTypeTabSeparatedText: NSObject;

declare var kUTTypeTagSpecificationKey: NSObject;

declare var kUTTypeText: NSObject;

declare var kUTTypeToDoItem: NSObject;

declare var kUTTypeURL: NSObject;

declare var kUTTypeURLBookmarkData: NSObject;

declare var kUTTypeUTF16ExternalPlainText: NSObject;

declare var kUTTypeUTF16PlainText: NSObject;

declare var kUTTypeUTF8PlainText: NSObject;

declare var kUTTypeUTF8TabSeparatedText: NSObject;

declare var kUTTypeUnixExecutable: NSObject;

declare var kUTTypeVCard: NSObject;

declare var kUTTypeVersionKey: NSObject;

declare var kUTTypeVideo: NSObject;

declare var kUTTypeVolume: NSObject;

declare var kUTTypeWaveformAudio: NSObject;

declare var kUTTypeWebArchive: NSObject;

declare var kUTTypeWindowsExecutable: NSObject;

declare var kUTTypeX509Certificate: NSObject;

declare var kUTTypeXML: NSObject;

declare var kUTTypeXMLPropertyList: NSObject;

declare var kUTTypeXPCService: NSObject;

declare var kUTTypeZipArchive: NSObject;


declare const kUnicode16BitFormat: number;

declare const kUnicode32BitFormat: number;

declare const kUnicodeByteOrderMark: number;

declare const kUnicodeCanonicalCompVariant: number;

declare const kUnicodeCanonicalDecompVariant: number;

declare const kUnicodeCollationClass: number;

declare const kUnicodeDefaultDirection: number;

declare const kUnicodeDefaultDirectionMask: number;

declare const kUnicodeDirectionalityBits: number;

declare const kUnicodeDirectionalityMask: number;

declare const kUnicodeFallbackCustomFirst: number;

declare const kUnicodeFallbackCustomOnly: number;

declare const kUnicodeFallbackDefaultFirst: number;

declare const kUnicodeFallbackDefaultOnly: number;

declare const kUnicodeFallbackInterruptSafeMask: number;

declare const kUnicodeFallbackSequencingBits: number;

declare const kUnicodeFallbackSequencingMask: number;

declare const kUnicodeForceASCIIRangeBit: number;

declare const kUnicodeForceASCIIRangeMask: number;

declare const kUnicodeHFSPlusCompVariant: number;

declare const kUnicodeHFSPlusDecompVariant: number;

declare const kUnicodeKeepInfoBit: number;

declare const kUnicodeKeepInfoMask: number;

declare const kUnicodeKeepSameEncodingBit: number;

declare const kUnicodeKeepSameEncodingMask: number;

declare const kUnicodeLeftToRight: number;

declare const kUnicodeLeftToRightMask: number;

declare const kUnicodeLooseMappingsBit: number;

declare const kUnicodeLooseMappingsMask: number;

declare const kUnicodeMapLineFeedToReturnBit: number;

declare const kUnicodeMapLineFeedToReturnMask: number;

declare const kUnicodeMatchOtherBaseBit: number;

declare const kUnicodeMatchOtherBaseMask: number;

declare const kUnicodeMatchOtherFormatBit: number;

declare const kUnicodeMatchOtherFormatMask: number;

declare const kUnicodeMatchOtherVariantBit: number;

declare const kUnicodeMatchOtherVariantMask: number;

declare const kUnicodeMatchUnicodeBaseBit: number;

declare const kUnicodeMatchUnicodeBaseMask: number;

declare const kUnicodeMatchUnicodeFormatBit: number;

declare const kUnicodeMatchUnicodeFormatMask: number;

declare const kUnicodeMatchUnicodeVariantBit: number;

declare const kUnicodeMatchUnicodeVariantMask: number;

declare const kUnicodeMaxDecomposedVariant: number;

declare const kUnicodeNoCompatibilityVariant: number;

declare const kUnicodeNoComposedVariant: number;

declare const kUnicodeNoCorporateVariant: number;

declare const kUnicodeNoHalfwidthCharsBit: number;

declare const kUnicodeNoHalfwidthCharsMask: number;

declare const kUnicodeNoSubset: number;

declare const kUnicodeNormalizationFormC: number;

declare const kUnicodeNormalizationFormD: number;

declare const kUnicodeNotAChar: number;

declare const kUnicodeNotFromInputMethod: number;

declare const kUnicodeObjectReplacement: number;

declare const kUnicodeReplacementChar: number;

declare const kUnicodeRightToLeft: number;

declare const kUnicodeRightToLeftMask: number;

declare const kUnicodeSCSUFormat: number;

declare const kUnicodeStringUnterminatedBit: number;

declare const kUnicodeStringUnterminatedMask: number;

declare const kUnicodeSwappedByteOrderMark: number;

declare const kUnicodeTextBreakClass: number;

declare const kUnicodeTextRunBit: number;

declare const kUnicodeTextRunHeuristicsBit: number;

declare const kUnicodeTextRunHeuristicsMask: number;

declare const kUnicodeTextRunMask: number;

declare const kUnicodeUTF16BEFormat: number;

declare const kUnicodeUTF16Format: number;

declare const kUnicodeUTF16LEFormat: number;

declare const kUnicodeUTF32BEFormat: number;

declare const kUnicodeUTF32Format: number;

declare const kUnicodeUTF32LEFormat: number;

declare const kUnicodeUTF7Format: number;

declare const kUnicodeUTF8Format: number;

declare const kUnicodeUseExternalEncodingFormBit: number;

declare const kUnicodeUseExternalEncodingFormMask: number;

declare const kUnicodeUseFallbacksBit: number;

declare const kUnicodeUseFallbacksMask: number;

declare const kUnicodeUseHFSPlusMapping: number;

declare const kUnicodeUseLatestMapping: number;

declare const kUnicodeVerticalFormBit: number;

declare const kUnicodeVerticalFormMask: number;

declare const kUnknownException: number;

declare const kUnknownFSObjectIcon: number;

declare const kUnlockKCEvent: number;

declare const kUnlockKCEventMask: number;

declare const kUnlockStateKCStatus: number;

declare const kUnlockedIcon: number;

declare const kUnmappedMemoryException: number;

declare const kUnresolvablePageFaultException: number;

declare const kUnsupportedCardErr: number;

declare const kUnsupportedFunctionErr: number;

declare const kUnsupportedModeErr: number;

declare const kUnsupportedVsErr: number;

declare const kUnwrapKCItemAttr: number;

declare const kUpdateActiveInputArea: number;

declare const kUpdateKCEvent: number;

declare const kUpdateKCEventMask: number;

declare const kUseCurrentISA: number;

declare const kUseNativeISA: number;

declare const kUsePremadeThread: number;

declare const kUseWidePositioning: number;

declare const kUserDomain: number;

declare const kUserFolderIcon: number;

declare const kUserIDiskIcon: number;

declare const kUserIcon: number;

declare const kUserSpecificTmpFolderType: number;

declare const kUsersFolderIcon: number;

declare const kUsersFolderType: number;

declare const kUtilitiesFolderIcon: number;

declare const kUtilitiesFolderType: number;

declare const kVCBFlagsHFSPlusAPIsBit: number;

declare const kVCBFlagsHFSPlusAPIsMask: number;

declare const kVCBFlagsHardwareGoneBit: number;

declare const kVCBFlagsHardwareGoneMask: number;

declare const kVCBFlagsIdleFlushBit: number;

declare const kVCBFlagsIdleFlushMask: number;

declare const kVCBFlagsVolumeDirtyBit: number;

declare const kVCBFlagsVolumeDirtyMask: number;

declare const kVLibTag2: number;

declare const kVerifyKCItemAttr: number;

declare const kVoicesFolderIcon: number;

declare const kVoicesFolderType: number;

declare const kVolumeKCItemAttr: number;

declare const kVolumeRootFolderType: number;

declare const kVolumeSettingsFolderType: number;

declare const kWakeToDoze: number;

declare const kWhereToEmptyTrashFolderType: number;

declare const kWidePosOffsetBit: number;

declare const kWidgetsFolderType: number;

declare const kWindowsLatin1PalmVariant: number;

declare const kWindowsLatin1StandardVariant: number;

declare const kWorkgroupFolderIcon: number;

declare const kWrPermKCStatus: number;

declare const kWrapKCItemAttr: number;

declare const kWriteFailureErr: number;

declare const kWriteProtectedErr: number;

declare const kWriteReference: number;

declare const kX86ISA: number;

declare const kX86RTA: number;

declare const kXLibTag1: number;

declare const kXLibVersion: number;

declare const kadministratorUser: number;

declare const kernelAlreadyFreeErr: number;

declare const kernelAsyncReceiveLimitErr: number;

declare const kernelAsyncSendLimitErr: number;

declare const kernelAttributeErr: number;

declare const kernelCanceledErr: number;

declare const kernelDeletePermissionErr: number;

declare const kernelExceptionErr: number;

declare const kernelExecutePermissionErr: number;

declare const kernelExecutionLevelErr: number;

declare const kernelIDErr: number;

declare const kernelInUseErr: number;

declare const kernelIncompleteErr: number;

declare const kernelObjectExistsErr: number;

declare const kernelOptionsErr: number;

declare const kernelPrivilegeErr: number;

declare const kernelReadPermissionErr: number;

declare const kernelReturnValueErr: number;

declare const kernelTerminatedErr: number;

declare const kernelTimeoutErr: number;

declare const kernelUnrecoverableErr: number;

declare const kernelUnsupportedErr: number;

declare const kernelWritePermissionErr: number;

declare const keyAEAdjustMarksProc: number;

declare const keyAEAngle: number;

declare const keyAEArcAngle: number;

declare const keyAEBaseAddr: number;

declare const keyAEBestType: number;

declare const keyAEBgndColor: number;

declare const keyAEBgndPattern: number;

declare const keyAEBounds: number;

declare const keyAEBufferSize: number;

declare const keyAECellList: number;

declare const keyAEClassID: number;

declare const keyAEClauseOffsets: number;

declare const keyAEColor: number;

declare const keyAEColorTable: number;

declare const keyAECompOperator: number;

declare const keyAECompareProc: number;

declare const keyAEContainer: number;

declare const keyAECountProc: number;

declare const keyAECurrentPoint: number;

declare const keyAECurveHeight: number;

declare const keyAECurveWidth: number;

declare const keyAEDashStyle: number;

declare const keyAEData: number;

declare const keyAEDefaultType: number;

declare const keyAEDefinitionRect: number;

declare const keyAEDescType: number;

declare const keyAEDesiredClass: number;

declare const keyAEDestination: number;

declare const keyAEDoAntiAlias: number;

declare const keyAEDoDithered: number;

declare const keyAEDoRotate: number;

declare const keyAEDoScale: number;

declare const keyAEDoTranslate: number;

declare const keyAEDragging: number;

declare const keyAEEditionFileLoc: number;

declare const keyAEElements: number;

declare const keyAEEndPoint: number;

declare const keyAEEventClass: number;

declare const keyAEEventID: number;

declare const keyAEFile: number;

declare const keyAEFileType: number;

declare const keyAEFillColor: number;

declare const keyAEFillPattern: number;

declare const keyAEFixLength: number;

declare const keyAEFlipHorizontal: number;

declare const keyAEFlipVertical: number;

declare const keyAEFont: number;

declare const keyAEFormula: number;

declare const keyAEGetErrDescProc: number;

declare const keyAEGraphicObjects: number;

declare const keyAEHiliteRange: number;

declare const keyAEID: number;

declare const keyAEImageQuality: number;

declare const keyAEIndex: number;

declare const keyAEInsertHere: number;

declare const keyAEKeyData: number;

declare const keyAEKeyForm: number;

declare const keyAEKeyForms: number;

declare const keyAEKeyword: number;

declare const keyAELaunchedAsLogInItem: number;

declare const keyAELaunchedAsServiceItem: number;

declare const keyAELeftSide: number;

declare const keyAELevel: number;

declare const keyAELineArrow: number;

declare const keyAELogicalOperator: number;

declare const keyAELogicalTerms: number;

declare const keyAEMarkProc: number;

declare const keyAEMarkTokenProc: number;

declare const keyAEMoveView: number;

declare const keyAEName: number;

declare const keyAENewElementLoc: number;

declare const keyAENextBody: number;

declare const keyAEObject: number;

declare const keyAEObject1: number;

declare const keyAEObject2: number;

declare const keyAEObjectClass: number;

declare const keyAEOffStyles: number;

declare const keyAEOffset: number;

declare const keyAEOnStyles: number;

declare const keyAEPMTable: number;

declare const keyAEPOSTHeaderData: number;

declare const keyAEParamFlags: number;

declare const keyAEParameters: number;

declare const keyAEPenColor: number;

declare const keyAEPenPattern: number;

declare const keyAEPenWidth: number;

declare const keyAEPinRange: number;

declare const keyAEPixMapMinus: number;

declare const keyAEPixelDepth: number;

declare const keyAEPoint: number;

declare const keyAEPointList: number;

declare const keyAEPointSize: number;

declare const keyAEPosition: number;

declare const keyAEPropData: number;

declare const keyAEPropFlags: number;

declare const keyAEPropID: number;

declare const keyAEProperties: number;

declare const keyAEProperty: number;

declare const keyAEProtection: number;

declare const keyAERangeStart: number;

declare const keyAERangeStop: number;

declare const keyAERecorderCount: number;

declare const keyAERegionClass: number;

declare const keyAERenderAs: number;

declare const keyAEReplyHeaderData: number;

declare const keyAERequestedType: number;

declare const keyAEResult: number;

declare const keyAEResultInfo: number;

declare const keyAERotPoint: number;

declare const keyAERotation: number;

declare const keyAERowList: number;

declare const keyAESaveOptions: number;

declare const keyAEScale: number;

declare const keyAEScriptTag: number;

declare const keyAESearchText: number;

declare const keyAEServerInstance: number;

declare const keyAEShowWhere: number;

declare const keyAEStartAngle: number;

declare const keyAEStartPoint: number;

declare const keyAEStyles: number;

declare const keyAESuiteID: number;

declare const keyAETSMDocumentRefcon: number;

declare const keyAETSMEventRecord: number;

declare const keyAETSMEventRef: number;

declare const keyAETSMGlyphInfoArray: number;

declare const keyAETSMScriptTag: number;

declare const keyAETSMTextFMFont: number;

declare const keyAETSMTextFont: number;

declare const keyAETSMTextPointSize: number;

declare const keyAETest: number;

declare const keyAEText: number;

declare const keyAETextColor: number;

declare const keyAETextFont: number;

declare const keyAETextLineAscent: number;

declare const keyAETextLineHeight: number;

declare const keyAETextPointSize: number;

declare const keyAETextServiceEncoding: number;

declare const keyAETextServiceMacEncoding: number;

declare const keyAETextStyles: number;

declare const keyAETheData: number;

declare const keyAETheText: number;

declare const keyAETransferMode: number;

declare const keyAETranslation: number;

declare const keyAETryAsStructGraf: number;

declare const keyAEUniformStyles: number;

declare const keyAEUpdateOn: number;

declare const keyAEUpdateRange: number;

declare const keyAEUserTerm: number;

declare const keyAEVersion: number;

declare const keyAEWhoseRangeStart: number;

declare const keyAEWhoseRangeStop: number;

declare const keyAEWindow: number;

declare const keyAEWritingCode: number;

declare const keyAEXMLReplyData: number;

declare const keyAEXMLRequestData: number;

declare const keyAcceptTimeoutAttr: number;

declare const keyActualSenderAuditToken: number;

declare const keyAdditionalHTTPHeaders: number;

declare const keyAddressAttr: number;

declare const keyAppleEventAttributesAttr: number;

declare const keyCloseAllWindows: number;

declare const keyDirectObject: number;

declare const keyDisableAuthenticationAttr: number;

declare const keyDisposeTokenProc: number;

declare const keyDriveNumber: number;

declare const keyErrorCode: number;

declare const keyErrorNumber: number;

declare const keyErrorString: number;

declare const keyEventClassAttr: number;

declare const keyEventIDAttr: number;

declare const keyEventSourceAttr: number;

declare const keyHighLevelClass: number;

declare const keyHighLevelID: number;

declare const keyInteractLevelAttr: number;

declare const keyKey: number;

declare const keyKeyCode: number;

declare const keyKeyboard: number;

declare const keyLocalWhere: number;

declare const keyMenuID: number;

declare const keyMenuItem: number;

declare const keyMiscellaneous: number;

declare const keyMissedKeywordAttr: number;

declare const keyModifiers: number;

declare const keyNewBounds: number;

declare const keyOptionalKeywordAttr: number;

declare const keyOriginalAddressAttr: number;

declare const keyOriginalBounds: number;

declare const keyPreDispatch: number;

declare const keyProcessSerialNumber: number;

declare const keyRPCMethodName: number;

declare const keyRPCMethodParam: number;

declare const keyRPCMethodParamOrder: number;

declare const keyReplyPortAttr: number;

declare const keyReplyRequestedAttr: number;

declare const keyReturnIDAttr: number;

declare const keySOAPAction: number;

declare const keySOAPMethodNameSpace: number;

declare const keySOAPMethodNameSpaceURI: number;

declare const keySOAPSMDNamespace: number;

declare const keySOAPSMDNamespaceURI: number;

declare const keySOAPSMDType: number;

declare const keySOAPSchemaVersion: number;

declare const keySOAPStructureMetaData: number;

declare const keySelectProc: number;

declare const keySelection: number;

declare const keySenderApplescriptEntitlementsAttr: number;

declare const keySenderApplicationIdentifierEntitlementAttr: number;

declare const keySenderApplicationSandboxed: number;

declare const keySenderAuditTokenAttr: number;

declare const keySenderEGIDAttr: number;

declare const keySenderEUIDAttr: number;

declare const keySenderGIDAttr: number;

declare const keySenderPIDAttr: number;

declare const keySenderUIDAttr: number;

declare const keyTimeoutAttr: number;

declare const keyTransactionIDAttr: number;

declare const keyUserNameAttr: number;

declare const keyUserPasswordAttr: number;

declare const keyWhen: number;

declare const keyWhere: number;

declare const keyWindow: number;

declare const keyXMLDebuggingAttr: number;

declare const kfullPrivileges: number;

declare const kiMovieFolderType: number;

declare const kiMoviePlugInsFolderType: number;

declare const kiMovieSoundEffectsFolderType: number;

declare const kioACAccessBlankAccessBit: number;

declare const kioACAccessBlankAccessMask: number;

declare const kioACAccessEveryoneReadBit: number;

declare const kioACAccessEveryoneReadMask: number;

declare const kioACAccessEveryoneSearchBit: number;

declare const kioACAccessEveryoneSearchMask: number;

declare const kioACAccessEveryoneWriteBit: number;

declare const kioACAccessEveryoneWriteMask: number;

declare const kioACAccessGroupReadBit: number;

declare const kioACAccessGroupReadMask: number;

declare const kioACAccessGroupSearchBit: number;

declare const kioACAccessGroupSearchMask: number;

declare const kioACAccessGroupWriteBit: number;

declare const kioACAccessGroupWriteMask: number;

declare const kioACAccessOwnerBit: number;

declare const kioACAccessOwnerMask: number;

declare const kioACAccessOwnerReadBit: number;

declare const kioACAccessOwnerReadMask: number;

declare const kioACAccessOwnerSearchBit: number;

declare const kioACAccessOwnerSearchMask: number;

declare const kioACAccessOwnerWriteBit: number;

declare const kioACAccessOwnerWriteMask: number;

declare const kioACAccessUserReadBit: number;

declare const kioACAccessUserReadMask: number;

declare const kioACAccessUserSearchBit: number;

declare const kioACAccessUserSearchMask: number;

declare const kioACAccessUserWriteBit: number;

declare const kioACAccessUserWriteMask: number;

declare const kioACUserNoMakeChangesBit: number;

declare const kioACUserNoMakeChangesMask: number;

declare const kioACUserNoSeeFilesBit: number;

declare const kioACUserNoSeeFilesMask: number;

declare const kioACUserNoSeeFolderBit: number;

declare const kioACUserNoSeeFolderMask: number;

declare const kioACUserNotOwnerBit: number;

declare const kioACUserNotOwnerMask: number;

declare const kioFCBFileLockedBit: number;

declare const kioFCBFileLockedMask: number;

declare const kioFCBLargeFileBit: number;

declare const kioFCBLargeFileMask: number;

declare const kioFCBModifiedBit: number;

declare const kioFCBModifiedMask: number;

declare const kioFCBOwnClumpBit: number;

declare const kioFCBOwnClumpMask: number;

declare const kioFCBResourceBit: number;

declare const kioFCBResourceMask: number;

declare const kioFCBSharedWriteBit: number;

declare const kioFCBSharedWriteMask: number;

declare const kioFCBWriteBit: number;

declare const kioFCBWriteLockedBit: number;

declare const kioFCBWriteLockedMask: number;

declare const kioFCBWriteMask: number;

declare const kioFlAttribCopyProtBit: number;

declare const kioFlAttribCopyProtMask: number;

declare const kioFlAttribDataOpenBit: number;

declare const kioFlAttribDataOpenMask: number;

declare const kioFlAttribDirBit: number;

declare const kioFlAttribDirMask: number;

declare const kioFlAttribFileOpenBit: number;

declare const kioFlAttribFileOpenMask: number;

declare const kioFlAttribInSharedBit: number;

declare const kioFlAttribInSharedMask: number;

declare const kioFlAttribLockedBit: number;

declare const kioFlAttribLockedMask: number;

declare const kioFlAttribMountedBit: number;

declare const kioFlAttribMountedMask: number;

declare const kioFlAttribResOpenBit: number;

declare const kioFlAttribResOpenMask: number;

declare const kioFlAttribSharePointBit: number;

declare const kioFlAttribSharePointMask: number;

declare const kioVAtrbDefaultVolumeBit: number;

declare const kioVAtrbDefaultVolumeMask: number;

declare const kioVAtrbFilesOpenBit: number;

declare const kioVAtrbFilesOpenMask: number;

declare const kioVAtrbHardwareLockedBit: number;

declare const kioVAtrbHardwareLockedMask: number;

declare const kioVAtrbSoftwareLockedBit: number;

declare const kioVAtrbSoftwareLockedMask: number;

declare const knoGroup: number;

declare const knoUser: number;

declare const kownerPrivileges: number;

declare const laDictionaryNotOpenedErr: number;

declare const laDictionaryTooManyErr: number;

declare const laDictionaryUnknownErr: number;

declare const laEngineNotFoundErr: number;

declare const laEnvironmentBusyErr: number;

declare const laEnvironmentExistErr: number;

declare const laEnvironmentNotFoundErr: number;

declare const laFailAnalysisErr: number;

declare const laInvalidPathErr: number;

declare const laNoMoreMorphemeErr: number;

declare const laPropertyErr: number;

declare const laPropertyIsReadOnlyErr: number;

declare const laPropertyNotFoundErr: number;

declare const laPropertyUnknownErr: number;

declare const laPropertyValueErr: number;

declare const laTextOverFlowErr: number;

declare const laTooSmallBufferErr: number;

declare const langAfricaans: number;

declare const langAfrikaans: number;

declare const langAlbanian: number;

declare const langAmharic: number;

declare const langArabic: number;

declare const langArmenian: number;

declare const langAssamese: number;

declare const langAymara: number;

declare const langAzerbaijanAr: number;

declare const langAzerbaijanRoman: number;

declare const langAzerbaijani: number;

declare const langBasque: number;

declare const langBelorussian: number;

declare const langBengali: number;

declare const langBreton: number;

declare const langBulgarian: number;

declare const langBurmese: number;

declare const langByelorussian: number;

declare const langCatalan: number;

declare const langChewa: number;

declare const langChinese: number;

declare const langCroatian: number;

declare const langCzech: number;

declare const langDanish: number;

declare const langDutch: number;

declare const langDzongkha: number;

declare const langEnglish: number;

declare const langEsperanto: number;

declare const langEstonian: number;

declare const langFaeroese: number;

declare const langFaroese: number;

declare const langFarsi: number;

declare const langFinnish: number;

declare const langFlemish: number;

declare const langFrench: number;

declare const langGalician: number;

declare const langGalla: number;

declare const langGeorgian: number;

declare const langGerman: number;

declare const langGreek: number;

declare const langGreekAncient: number;

declare const langGreekPoly: number;

declare const langGreenlandic: number;

declare const langGuarani: number;

declare const langGujarati: number;

declare const langHebrew: number;

declare const langHindi: number;

declare const langHungarian: number;

declare const langIcelandic: number;

declare const langIndonesian: number;

declare const langInuktitut: number;

declare const langIrish: number;

declare const langIrishGaelic: number;

declare const langIrishGaelicScript: number;

declare const langItalian: number;

declare const langJapanese: number;

declare const langJavaneseRom: number;

declare const langKannada: number;

declare const langKashmiri: number;

declare const langKazakh: number;

declare const langKhmer: number;

declare const langKinyarwanda: number;

declare const langKirghiz: number;

declare const langKorean: number;

declare const langKurdish: number;

declare const langLao: number;

declare const langLappish: number;

declare const langLapponian: number;

declare const langLatin: number;

declare const langLatvian: number;

declare const langLettish: number;

declare const langLithuanian: number;

declare const langMacedonian: number;

declare const langMalagasy: number;

declare const langMalayArabic: number;

declare const langMalayRoman: number;

declare const langMalayalam: number;

declare const langMalta: number;

declare const langMaltese: number;

declare const langManxGaelic: number;

declare const langMarathi: number;

declare const langMoldavian: number;

declare const langMongolian: number;

declare const langMongolianCyr: number;

declare const langNepali: number;

declare const langNorwegian: number;

declare const langNyanja: number;

declare const langNynorsk: number;

declare const langOriya: number;

declare const langOromo: number;

declare const langPashto: number;

declare const langPersian: number;

declare const langPolish: number;

declare const langPortugese: number;

declare const langPortuguese: number;

declare const langPunjabi: number;

declare const langQuechua: number;

declare const langRomanian: number;

declare const langRuanda: number;

declare const langRundi: number;

declare const langRussian: number;

declare const langSaamisk: number;

declare const langSami: number;

declare const langSanskrit: number;

declare const langScottishGaelic: number;

declare const langSerbian: number;

declare const langSimpChinese: number;

declare const langSindhi: number;

declare const langSinhalese: number;

declare const langSlovak: number;

declare const langSlovenian: number;

declare const langSomali: number;

declare const langSpanish: number;

declare const langSundaneseRom: number;

declare const langSwahili: number;

declare const langSwedish: number;

declare const langTagalog: number;

declare const langTajiki: number;

declare const langTamil: number;

declare const langTatar: number;

declare const langTelugu: number;

declare const langThai: number;

declare const langTibetan: number;

declare const langTigrinya: number;

declare const langTongan: number;

declare const langTradChinese: number;

declare const langTurkish: number;

declare const langTurkmen: number;

declare const langUighur: number;

declare const langUkrainian: number;

declare const langUnspecified: number;

declare const langUrdu: number;

declare const langUzbek: number;

declare const langVietnamese: number;

declare const langWelsh: number;

declare const langYiddish: number;

declare const langYugoslavian: number;

declare const lapProtErr: number;

declare const large1BitMask: number;

declare const large4BitData: number;

declare const large8BitData: number;

declare const lastDskErr: number;
declare function ldtox80(x: number, x80: Float80): void;

declare const leftOverChars: number;

declare const leftSingGuillemet: number;

declare const limitReachedErr: number;

declare const localOnlyErr: number;

declare const lockPortBitsBadPortErr: number;

declare const lockPortBitsBadSurfaceErr: number;

declare const lockPortBitsSurfaceLostErr: number;

declare const lockPortBitsWindowClippedErr: number;

declare const lockPortBitsWindowMovedErr: number;

declare const lockPortBitsWindowResizedErr: number;

declare const lockPortBitsWrongGDeviceErr: number;

declare const longDate: number;

declare const longDateFound: number;

declare const longDay: number;

declare const longMonth: number;

declare const longWeek: number;

declare const longYear: number;

declare const mBarNFnd: number;

declare const mFulErr: number;

declare const macron: number;

declare const mapChanged: number;

declare const mapChangedBit: number;

declare const mapCompact: number;

declare const mapCompactBit: number;

declare const mapReadErr: number;

declare const mapReadOnly: number;

declare const mapReadOnlyBit: number;

declare const matrixErr: number;

declare const maxCountry: number;

declare const maxDateField: number;

declare const maxSizeToGrowTooSmall: number;

declare const mdy: number;

declare const mediaTypesDontMatch: number;

declare const memAZErr: number;

declare const memAdrErr: number;

declare const memBCErr: number;

declare const memFragErr: number;

declare const memFullErr: number;

declare const memLockedErr: number;

declare const memPCErr: number;

declare const memPurErr: number;

declare const memROZErr: number;

declare const memROZError: number;

declare const memROZWarn: number;

declare const memSCErr: number;

declare const memWZErr: number;

declare const menuInvalidErr: number;

declare const menuItemNotFoundErr: number;

declare const menuNotFoundErr: number;

declare const menuPrgErr: number;

declare const menuPropertyInvalid: number;

declare const menuPropertyInvalidErr: number;

declare const menuPropertyNotFoundErr: number;

declare const menuUsesSystemDefErr: number;

declare const midiDupIDErr: number;

declare const midiInvalidCmdErr: number;

declare const midiManagerAbsentOSErr: number;

declare const midiNameLenErr: number;

declare const midiNoClientErr: number;

declare const midiNoConErr: number;

declare const midiNoPortErr: number;

declare const midiTooManyConsErr: number;

declare const midiTooManyPortsErr: number;

declare const midiVConnectErr: number;

declare const midiVConnectMade: number;

declare const midiVConnectRmvd: number;

declare const midiWriteErr: number;

declare const minCountry: number;

declare const minLeadingZ: number;

declare const mini1BitMask: number;

declare const mini4BitData: number;

declare const mini8BitData: number;

declare const minuteField: number;

declare const minuteMask: number;

declare const missingRequiredParameterErr: number;

declare const mmInternalError: number;

declare const mntLdingZ: number;

declare const monthField: number;

declare const monthMask: number;

declare const mountedFolderIconResource: number;

declare const movieTextNotFoundErr: number;

declare const movieToolboxUninitialized: number;

declare const mpWorkFlagCopyWorkBlock: number;

declare const mpWorkFlagDoCompletion: number;

declare const mpWorkFlagDoWork: number;

declare const mpWorkFlagDontBlock: number;

declare const mpWorkFlagGetIsRunning: number;

declare const mpWorkFlagGetProcessorCount: number;

declare const multiplePublisherWrn: number;

declare const myd: number;

declare const nameTypeErr: number;

declare const nbpBuffOvr: number;

declare const nbpConfDiff: number;

declare const nbpDuplicate: number;

declare const nbpNISErr: number;

declare const nbpNoConfirm: number;

declare const nbpNotFound: number;

declare const needClearScrapErr: number;

declare const negZcbFreeErr: number;

declare const networkErr: number;

declare const newLineBit: number;

declare const newLineCharMask: number;

declare const newLineMask: number;

declare const nilHandleErr: number;

declare const nilScrapFlavorDataErr: number;

declare const nmTypErr: number;

declare const nmType: number;

declare const noAdrMkErr: number;

declare const noBridgeErr: number;

declare const noCacheBit: number;

declare const noCacheMask: number;

declare const noCalls: number;

declare const noCodecErr: number;

declare const noDMAErr: number;

declare const noDataArea: number;

declare const noDataHandler: number;

declare const noDefaultDataRef: number;

declare const noDefaultUserErr: number;

declare const noDeviceForChannel: number;

declare const noDriveErr: number;

declare const noDtaMkErr: number;

declare const noExportProcAvailableErr: number;

declare const noGlobalsErr: number;

declare const noHardware: number;

declare const noHardwareErr: number;

declare const noHelpForItem: number;

declare const noIconDataAvailableErr: number;

declare const noInformErr: number;

declare const noMMUErr: number;

declare const noMPPErr: number;

declare const noMacDskErr: number;

declare const noMachineNameErr: number;

declare const noMaskFoundErr: number;

declare const noMediaHandler: number;

declare const noMemForPictPlaybackErr: number;

declare const noMemoryNodeFailedInitialize: number;

declare const noMoreFolderDescErr: number;

declare const noMoreKeyColorsErr: number;

declare const noMoreRealTime: number;

declare const noMovieFound: number;

declare const noNybErr: number;

declare const noOutstandingHLE: number;

declare const noPathMappingErr: number;

declare const noPortErr: number;

declare const noPrefAppErr: number;

declare const noRecordOfApp: number;

declare const noRelErr: number;

declare const noRequest: number;

declare const noResponseErr: number;

declare const noScrapErr: number;

declare const noScrapPromiseKeeperErr: number;

declare const noSendResp: number;

declare const noSessionErr: number;

declare const noSoundTrackInMovieErr: number;

declare const noSourceTreeFoundErr: number;

declare const noSuchIconErr: number;

declare const noSuitableDisplaysErr: number;

declare const noSynthFound: number;

declare const noThumbnailFoundErr: number;

declare const noToolboxNameErr: number;

declare const noTranslationPathErr: number;

declare const noTypeErr: number;

declare const noUserInteractionAllowed: number;

declare const noUserNameErr: number;

declare const noUserRecErr: number;

declare const noUserRefErr: number;

declare const noVideoTrackInMovieErr: number;

declare const nonDragOriginatorErr: number;

declare const nonMatchingEditState: number;

declare const notAFileErr: number;

declare const notAQTVRMovieErr: number;

declare const notARemountErr: number;

declare const notAllowedToSaveMovieErr: number;

declare const notAppropriateForClassic: number;

declare const notBTree: number;

declare const notEnoughBufferSpace: number;

declare const notEnoughDataErr: number;

declare const notEnoughDiskSpaceToGrab: number;

declare const notEnoughHardware: number;

declare const notEnoughHardwareErr: number;

declare const notEnoughMemoryErr: number;

declare const notEnoughMemoryToGrab: number;

declare const notExactMatrixErr: number;

declare const notExactSizeErr: number;

declare const notHeldErr: number;

declare const notImplementedMusicOSErr: number;

declare const notInitErr: number;

declare const notLeafAtomErr: number;

declare const notLockedErr: number;

declare const notLoggedInErr: number;

declare const notOpenErr: number;

declare const notRegisteredSectionErr: number;

declare const notThePublisherWrn: number;

declare const noteChannelNotAllocatedOSErr: number;

declare const nrCallNotSupported: number;

declare const nrDataTruncatedErr: number;

declare const nrExitedIteratorScope: number;

declare const nrInvalidEntryIterationOp: number;

declare const nrInvalidNodeErr: number;

declare const nrIterationDone: number;

declare const nrLockedErr: number;

declare const nrNameErr: number;

declare const nrNotCreatedErr: number;

declare const nrNotEnoughMemoryErr: number;

declare const nrNotFoundErr: number;

declare const nrNotModifiedErr: number;

declare const nrNotSlotDeviceErr: number;

declare const nrOverrunErr: number;

declare const nrPathBufferTooSmall: number;

declare const nrPathNotFound: number;

declare const nrPowerErr: number;

declare const nrPowerSwitchAbortErr: number;

declare const nrPropertyAlreadyExists: number;

declare const nrResultCodeBase: number;

declare const nrTransactionAborted: number;

declare const nrTypeMismatchErr: number;

declare const nsDrvErr: number;

declare const nsStackErr: number;

declare const nsvErr: number;
declare function num2decl(f: decform, x: number, d: decimal): void;

declare const numberFormattingBadCurrencyPositionErr: number;

declare const numberFormattingBadFormatErr: number;

declare const numberFormattingBadNumberFormattingObjectErr: number;

declare const numberFormattingBadOptionsErr: number;

declare const numberFormattingBadTokenErr: number;

declare const numberFormattingDelimiterMissingErr: number;

declare const numberFormattingEmptyFormatErr: number;

declare const numberFormattingLiteralMissingErr: number;

declare const numberFormattingNotADigitErr: number;

declare const numberFormattingNotANumberErr: number;

declare const numberFormattingOverflowInDestinationErr: number;

declare const numberFormattingSpuriousCharErr: number;

declare const numberFormattingUnOrderedCurrencyRangeErr: number;

declare const numberFormattingUnOrdredCurrencyRangeErr: number;

declare const numberFortmattingNotADigitErr: number;

declare const offLinErr: number;

declare const ogonek: number;

declare const opWrErr: number;

declare const openErr: number;

declare const openFolderIconResource: number;

declare const overDot: number;

declare const ownedFolderIconResource: number;

declare const pATMachine: number;

declare const pATType: number;

declare const pATZone: number;

declare const pArcAngle: number;

declare const pBackgroundColor: number;

declare const pBackgroundPattern: number;

declare const pBestType: number;

declare const pBounds: number;

declare const pClass: number;

declare const pClipboard: number;

declare const pColor: number;

declare const pColorTable: number;

declare const pConduit: number;

declare const pContents: number;

declare const pCornerCurveHeight: number;

declare const pCornerCurveWidth: number;

declare const pDNS: number;

declare const pDNSForm: number;

declare const pDashStyle: number;

declare const pDefaultType: number;

declare const pDefinitionRect: number;

declare const pDeviceAddress: number;

declare const pDeviceType: number;

declare const pDottedDecimal: number;

declare const pEnabled: number;

declare const pEndPoint: number;

declare const pFTPKind: number;

declare const pFillColor: number;

declare const pFillPattern: number;

declare const pFont: number;

declare const pFormula: number;

declare const pGraphicObjects: number;

declare const pHasCloseBox: number;

declare const pHasTitleBar: number;

declare const pHost: number;

declare const pID: number;

declare const pIndex: number;

declare const pInsertionLoc: number;

declare const pIsFloating: number;

declare const pIsFrontProcess: number;

declare const pIsModal: number;

declare const pIsModified: number;

declare const pIsResizable: number;

declare const pIsStationeryPad: number;

declare const pIsZoomable: number;

declare const pIsZoomed: number;

declare const pItemNumber: number;

declare const pJustification: number;

declare const pKeyKind: number;

declare const pKeystrokeKey: number;

declare const pLineArrow: number;

declare const pMenuID: number;

declare const pModifiers: number;

declare const pName: number;

declare const pNetwork: number;

declare const pNewElementLoc: number;

declare const pNode: number;

declare const pPath: number;

declare const pPenColor: number;

declare const pPenPattern: number;

declare const pPenWidth: number;

declare const pPixelDepth: number;

declare const pPointList: number;

declare const pPointSize: number;

declare const pPort: number;

declare const pProtection: number;

declare const pProtocol: number;

declare const pRotation: number;

declare const pSCSIBus: number;

declare const pSCSILUN: number;

declare const pScale: number;

declare const pScheme: number;

declare const pScript: number;

declare const pScriptTag: number;

declare const pSelected: number;

declare const pSelection: number;

declare const pSocket: number;

declare const pStartAngle: number;

declare const pStartPoint: number;

declare const pTextColor: number;

declare const pTextEncoding: number;

declare const pTextFont: number;

declare const pTextItemDelimiters: number;

declare const pTextPointSize: number;

declare const pTextStyles: number;

declare const pTransferMode: number;

declare const pTranslation: number;

declare const pURL: number;

declare const pUniformStyles: number;

declare const pUpdateOn: number;

declare const pUserName: number;

declare const pUserPassword: number;

declare const pUserSelection: number;

declare const pVersion: number;

declare const pVisible: number;

declare const paramErr: number;

declare const pathNotVerifiedErr: number;

declare const pathTooLongErr: number;

declare const perThousand: number;

declare const permErr: number;

declare const pickerCantLive: number;

declare const pickerResourceError: number;

declare const pictInfoIDErr: number;

declare const pictInfoVerbErr: number;

declare const pictInfoVersionErr: number;

declare const pictureDataErr: number;

declare const pixMapTooDeepErr: number;

declare const platform68k: number;

declare const platformAIXppc: number;

declare const platformIA32NativeEntryPoint: number;

declare const platformIRIXmips: number;

declare const platformInterpreted: number;

declare const platformLinuxintel: number;

declare const platformLinuxppc: number;

declare const platformMacOSx86: number;

declare const platformNeXT68k: number;

declare const platformNeXTIntel: number;

declare const platformNeXTppc: number;

declare const platformNeXTsparc: number;

declare const platformPowerPC: number;

declare const platformPowerPC64NativeEntryPoint: number;

declare const platformPowerPCNativeEntryPoint: number;

declare const platformSunOSintel: number;

declare const platformSunOSsparc: number;

declare const platformWin32: number;

declare const platformX86_64NativeEntryPoint: number;

declare const pleaseCacheBit: number;

declare const pleaseCacheMask: number;

declare const pmBusyErr: number;

declare const pmField: number;

declare const pmMask: number;

declare const pmRecvEndErr: number;

declare const pmRecvStartErr: number;

declare const pmReplyTOErr: number;

declare const pmSendEndErr: number;

declare const pmSendStartErr: number;

declare const portClosedErr: number;

declare const portInUse: number;

declare const portNameExistsErr: number;

declare const portNotCf: number;

declare const portNotPwr: number;

declare const posErr: number;

declare const prInitErr: number;

declare const prWrErr: number;

declare const preferencesFolderIconResource: number;

declare const printMonitorFolderIconResource: number;

declare const printerStatusOpCodeNotSupportedErr: number;

declare const privateFolderIconResource: number;

declare const procNotFound: number;

declare const processStateIncorrectErr: number;

declare const progressProcAborted: number;

declare const propertyNotSupportedByNodeErr: number;

declare const protocolErr: number;

declare const qErr: number;

declare const qfcbNotCreatedErr: number;

declare const qfcbNotFoundErr: number;

declare const qtActionNotHandledErr: number;

declare const qtNetworkAlreadyAllocatedErr: number;

declare const qtParamErr: number;

declare const qtXMLApplicationErr: number;

declare const qtXMLParseErr: number;

declare const qtmlDllEntryNotFoundErr: number;

declare const qtmlDllLoadErr: number;

declare const qtmlUninitialized: number;

declare const qtsAddressBusyErr: number;

declare const qtsBadDataErr: number;

declare const qtsBadSelectorErr: number;

declare const qtsBadStateErr: number;

declare const qtsConnectionFailedErr: number;

declare const qtsTimeoutErr: number;

declare const qtsTooMuchDataErr: number;

declare const qtsUnknownValueErr: number;

declare const qtsUnsupportedDataTypeErr: number;

declare const qtsUnsupportedFeatureErr: number;

declare const qtsUnsupportedRateErr: number;

declare const qtvrLibraryLoadErr: number;

declare const qtvrUninitialized: number;

declare const queueFull: number;

declare const rAliasType: number;

declare const rcDBAsyncNotSupp: number;

declare const rcDBBadAsyncPB: number;

declare const rcDBBadDDEV: number;

declare const rcDBBadSessID: number;

declare const rcDBBadSessNum: number;

declare const rcDBBadType: number;

declare const rcDBBreak: number;

declare const rcDBError: number;

declare const rcDBExec: number;

declare const rcDBNoHandler: number;

declare const rcDBNull: number;

declare const rcDBPackNotInited: number;

declare const rcDBValue: number;

declare const rcDBWrongVersion: number;

declare const rcvrErr: number;

declare const rdVerify: number;

declare const rdVerifyBit: number;

declare const rdVerifyMask: number;

declare const readErr: number;

declare const readQErr: number;

declare const readReference: number;

declare const recNotFnd: number;

declare const recordDataTooBigErr: number;

declare const registerComponentAfterExisting: number;

declare const registerComponentAliasesOnly: number;

declare const registerComponentGlobal: number;

declare const registerComponentNoDuplicates: number;
declare function relationl(x: number, y: number): number;

declare const reqAborted: number;

declare const reqFailed: number;

declare const requiredFlagsDontMatch: number;

declare const res1Field: number;

declare const res2Field: number;

declare const res3Field: number;

declare const resAttrErr: number;

declare const resChanged: number;

declare const resChangedBit: number;

declare const resFNotFound: number;

declare const resLocked: number;

declare const resLockedBit: number;

declare const resNotFound: number;

declare const resPreload: number;

declare const resPreloadBit: number;

declare const resProblem: number;

declare const resProtected: number;

declare const resProtectedBit: number;

declare const resPurgeable: number;

declare const resPurgeableBit: number;

declare const resSysHeap: number;

declare const resSysHeapBit: number;

declare const resSysRefBit: number;

declare const resourceInMemory: number;

declare const retryComponentRegistrationErr: number;

declare const rfNumErr: number;

declare const rgnOverflowErr: number;

declare const rgnTooBigErr: number;

declare const rgnTooBigError: number;

declare const rightSingGuillemet: number;

declare const ringMark: number;

declare const rmvRefFailed: number;

declare const rmvResFailed: number;

declare const romanAppFond: number;

declare const romanFlags: number;

declare const romanSysFond: number;

declare const routingNotFoundErr: number;

declare const sIQType: number;

declare const sameFileErr: number;

declare const samplesAlreadyInMediaErr: number;

declare const scTypeNotFoundErr: number;

declare const scrapFlavorFlagsMismatchErr: number;

declare const scrapFlavorNotFoundErr: number;

declare const scrapFlavorSizeMismatchErr: number;

declare const scrapPromiseNotKeptErr: number;

declare const scriptCurLang: number;

declare const scriptDefLang: number;

declare const sdmInitErr: number;

declare const sdmJTInitErr: number;

declare const sdmPRAMInitErr: number;

declare const sdmPriInitErr: number;

declare const sdmSRTInitErr: number;

declare const seNoDB: number;

declare const secLeadingZ: number;

declare const secondField: number;

declare const secondMask: number;

declare const sectNFErr: number;

declare const seekErr: number;

declare const selectorNotSupportedByNodeErr: number;

declare const sepNotConsistent: number;

declare const sepNotIntlSep: number;

declare const seqGrabInfoNotAvailable: number;

declare const sessClosedErr: number;

declare const sessTableErr: number;

declare const settingNotSupportedByNodeErr: number;

declare const sharedFolderIconResource: number;

declare const shortDate: number;

declare const shutDownAlert: number;

declare const siBadDeviceName: number;

declare const siBadRefNum: number;

declare const siBadSoundInDevice: number;

declare const siDeviceBusyErr: number;

declare const siHardDriveTooSlow: number;

declare const siInitSDTblErr: number;

declare const siInitSPTblErr: number;

declare const siInitVBLQsErr: number;

declare const siInputDeviceErr: number;

declare const siInvalidCompression: number;

declare const siInvalidSampleRate: number;

declare const siInvalidSampleSize: number;

declare const siNoBufferSpecified: number;

declare const siNoSoundInHardware: number;

declare const siUnknownInfoType: number;

declare const siUnknownQuality: number;

declare const siVBRCompressionNotSupported: number;

declare const sktClosedErr: number;

declare const sleepQType: number;

declare const slotNumErr: number;

declare const slpQType: number;

declare const smAllScripts: number;

declare const smAmharic: number;

declare const smArabic: number;

declare const smArmenian: number;

declare const smBLFieldBad: number;

declare const smBadBoardId: number;

declare const smBadRefId: number;

declare const smBadScript: number;

declare const smBadVerb: number;

declare const smBadsList: number;

declare const smBadsPtrErr: number;

declare const smBengali: number;

declare const smBlkMoveErr: number;

declare const smBurmese: number;

declare const smBusErrTO: number;

declare const smByteLanesErr: number;

declare const smCPUErr: number;

declare const smCRCFail: number;

declare const smCentralEuroRoman: number;

declare const smChar1byte: number;

declare const smChar2byte: number;

declare const smCharAscii: number;

declare const smCharBidirect: number;

declare const smCharBopomofo: number;

declare const smCharContextualLR: number;

declare const smCharEuro: number;

declare const smCharExtAscii: number;

declare const smCharFISGana: number;

declare const smCharFISGreek: number;

declare const smCharFISIdeo: number;

declare const smCharFISKana: number;

declare const smCharFISRussian: number;

declare const smCharGanaKana: number;

declare const smCharHangul: number;

declare const smCharHiragana: number;

declare const smCharHorizontal: number;

declare const smCharIdeographic: number;

declare const smCharJamo: number;

declare const smCharKatakana: number;

declare const smCharLeft: number;

declare const smCharLower: number;

declare const smCharNonContextualLR: number;

declare const smCharPunct: number;

declare const smCharRight: number;

declare const smCharTwoByteGreek: number;

declare const smCharTwoByteRussian: number;

declare const smCharUpper: number;

declare const smCharVertical: number;

declare const smChinese: number;

declare const smCkStatusErr: number;

declare const smCodeRevErr: number;

declare const smCurrentScript: number;

declare const smCyrillic: number;

declare const smDevanagari: number;

declare const smDisDrvrNamErr: number;

declare const smDisabledSlot: number;

declare const smDisposePErr: number;

declare const smEastEurRoman: number;

declare const smEmptySlot: number;

declare const smEthiopic: number;

declare const smExtArabic: number;

declare const smFHBlkDispErr: number;

declare const smFHBlockRdErr: number;

declare const smFISClassLvl1: number;

declare const smFISClassLvl2: number;

declare const smFISClassUser: number;

declare const smFirstByte: number;

declare const smFondEnd: number;

declare const smFondStart: number;

declare const smFormatErr: number;

declare const smGeez: number;

declare const smGeorgian: number;

declare const smGetDrvrNamErr: number;

declare const smGetPRErr: number;

declare const smGreek: number;

declare const smGujarati: number;

declare const smGurmukhi: number;

declare const smHebrew: number;

declare const smIdeographicLevel1: number;

declare const smIdeographicLevel2: number;

declare const smIdeographicUser: number;

declare const smInitStatVErr: number;

declare const smInitTblVErr: number;

declare const smJamoBogJaeum: number;

declare const smJamoBogMoeum: number;

declare const smJamoJaeum: number;

declare const smJamoMoeum: number;

declare const smJapanese: number;

declare const smKCHRCache: number;

declare const smKanaHardOK: number;

declare const smKanaSmall: number;

declare const smKanaSoftOK: number;

declare const smKannada: number;

declare const smKeyDisableKybdSwitch: number;

declare const smKeyDisableKybds: number;

declare const smKeyEnableKybds: number;

declare const smKeyForceKeyScriptBit: number;

declare const smKeyForceKeyScriptMask: number;

declare const smKeyNextInputMethod: number;

declare const smKeyNextKybd: number;

declare const smKeyNextScript: number;

declare const smKeyRoman: number;

declare const smKeyScript: number;

declare const smKeySetDirLeftRight: number;

declare const smKeySetDirRightLeft: number;

declare const smKeySwapInputMethod: number;

declare const smKeySwapKybd: number;

declare const smKeySwapScript: number;

declare const smKeySysScript: number;

declare const smKeyToggleDirection: number;

declare const smKeyToggleInline: number;

declare const smKhmer: number;

declare const smKlingon: number;

declare const smKorean: number;

declare const smLao: number;

declare const smLaotian: number;

declare const smLastByte: number;

declare const smMalayalam: number;

declare const smMaskAll: number;

declare const smMaskAscii: number;

declare const smMaskAscii1: number;

declare const smMaskAscii2: number;

declare const smMaskBopomofo2: number;

declare const smMaskGana2: number;

declare const smMaskHangul2: number;

declare const smMaskJamo2: number;

declare const smMaskKana1: number;

declare const smMaskKana2: number;

declare const smMaskNative: number;

declare const smMiddleByte: number;

declare const smMongolian: number;

declare const smNewPErr: number;

declare const smNilsBlockErr: number;

declare const smNoBoardId: number;

declare const smNoBoardSRsrc: number;

declare const smNoDir: number;

declare const smNoGoodOpens: number;

declare const smNoJmpTbl: number;

declare const smNoMoresRsrcs: number;

declare const smNosInfoArray: number;

declare const smNotInstalled: number;

declare const smNumberPartsTable: number;

declare const smOffsetErr: number;

declare const smOriya: number;

declare const smPRAMInitErr: number;

declare const smPriInitErr: number;

declare const smPunctBlank: number;

declare const smPunctGraphic: number;

declare const smPunctNormal: number;

declare const smPunctNumber: number;

declare const smPunctRepeat: number;

declare const smPunctSymbol: number;

declare const smRSymbol: number;

declare const smRecNotFnd: number;

declare const smRegionCode: number;

declare const smReservedErr: number;

declare const smReservedSlot: number;

declare const smResrvErr: number;

declare const smRevisionErr: number;

declare const smRoman: number;

declare const smRussian: number;

declare const smSDMInitErr: number;

declare const smSRTInitErr: number;

declare const smSRTOvrFlErr: number;

declare const smSelOOBErr: number;

declare const smSimpChinese: number;

declare const smSindhi: number;

declare const smSingleByte: number;

declare const smSinhalese: number;

declare const smSlavic: number;

declare const smSlotOOBErr: number;

declare const smSysScript: number;

declare const smSystemScript: number;

declare const smTamil: number;

declare const smTelugu: number;

declare const smThai: number;

declare const smTibetan: number;

declare const smTradChinese: number;

declare const smTransAscii: number;

declare const smTransAscii1: number;

declare const smTransAscii2: number;

declare const smTransBopomofo2: number;

declare const smTransCase: number;

declare const smTransGana2: number;

declare const smTransHangul2: number;

declare const smTransHangulFormat: number;

declare const smTransJamo2: number;

declare const smTransKana1: number;

declare const smTransKana2: number;

declare const smTransLower: number;

declare const smTransNative: number;

declare const smTransPreDoubleByting: number;

declare const smTransPreLowerCasing: number;

declare const smTransRuleBaseFormat: number;

declare const smTransSystem: number;

declare const smTransUpper: number;

declare const smUnExBusErr: number;

declare const smUnTokenTable: number;

declare const smUnicodeScript: number;

declare const smUninterp: number;

declare const smUprHalfCharSet: number;

declare const smVietnamese: number;

declare const smWhiteSpaceList: number;

declare const smWordSelectTable: number;

declare const smWordWrapTable: number;

declare const small1BitMask: number;

declare const small4BitData: number;

declare const small8BitData: number;

declare const smallDateBit: number;

declare const smcClassMask: number;

declare const smcDoubleMask: number;

declare const smcOrientationMask: number;

declare const smcReserved: number;

declare const smcRightMask: number;

declare const smcTypeMask: number;

declare const smcUpperMask: number;

declare const smfDisableKeyScriptSync: number;

declare const smfDisableKeyScriptSyncMask: number;

declare const smfDualCaret: number;

declare const smfNameTagEnab: number;

declare const smfShowIcon: number;

declare const smfUseAssocFontInfo: number;

declare const smsGetDrvrErr: number;

declare const smsPointerNil: number;

declare const smsfAutoInit: number;

declare const smsfB0Digits: number;

declare const smsfContext: number;

declare const smsfForms: number;

declare const smsfIntellCP: number;

declare const smsfLigatures: number;

declare const smsfNatCase: number;

declare const smsfNoForceFont: number;

declare const smsfReverse: number;

declare const smsfSingByte: number;

declare const smsfSynchUnstyledTE: number;

declare const smsfUnivExt: number;

declare const sortsAfter: number;

declare const sortsBefore: number;

declare const sortsEqual: number;

declare const soundSupportNotAvailableErr: number;

declare const sourceNotFoundErr: number;

declare const spdAdjErr: number;

declare const staleEditState: number;

declare const startupFolderIconResource: number;

declare const statusErr: number;

declare const strUserBreak: number;

declare const streamingNodeNotReadyErr: number;

declare const stringOverflow: number;

declare const supDay: number;

declare const supMonth: number;

declare const supWeek: number;

declare const supYear: number;

declare const svDisabled: number;

declare const svTempDisable: number;

declare const synthNotReady: number;

declare const synthOpenFailed: number;

declare const synthesizerNotRespondingOSErr: number;

declare const synthesizerOSErr: number;

declare const systemCurLang: number;

declare const systemDefLang: number;

declare const systemFolderIconResource: number;

declare const teScrapSizeErr: number;

declare const telAPattNotSupp: number;

declare const telAlreadyOpen: number;

declare const telAutoAnsNotOn: number;

declare const telBadAPattErr: number;

declare const telBadBearerType: number;

declare const telBadCAErr: number;

declare const telBadCodeResource: number;

declare const telBadDNDType: number;

declare const telBadDNErr: number;

declare const telBadDNType: number;

declare const telBadDisplayMode: number;

declare const telBadFeatureID: number;

declare const telBadFunction: number;

declare const telBadFwdType: number;

declare const telBadHTypeErr: number;

declare const telBadHandErr: number;

declare const telBadIndex: number;

declare const telBadIntExt: number;

declare const telBadIntercomID: number;

declare const telBadLevelErr: number;

declare const telBadPageID: number;

declare const telBadParkID: number;

declare const telBadPickupGroupID: number;

declare const telBadProcErr: number;

declare const telBadProcID: number;

declare const telBadRate: number;

declare const telBadSWErr: number;

declare const telBadSampleRate: number;

declare const telBadSelect: number;

declare const telBadStateErr: number;

declare const telBadTermErr: number;

declare const telBadVTypeErr: number;

declare const telCANotAcceptable: number;

declare const telCANotDeflectable: number;

declare const telCANotRejectable: number;

declare const telCAUnavail: number;

declare const telCBErr: number;

declare const telConfErr: number;

declare const telConfLimitErr: number;

declare const telConfLimitExceeded: number;

declare const telConfNoLimit: number;

declare const telConfRej: number;

declare const telDNDTypeNotSupp: number;

declare const telDNTypeNotSupp: number;

declare const telDetAlreadyOn: number;

declare const telDeviceNotFound: number;

declare const telDisplayModeNotSupp: number;

declare const telFeatActive: number;

declare const telFeatNotAvail: number;

declare const telFeatNotSub: number;

declare const telFeatNotSupp: number;

declare const telFwdTypeNotSupp: number;

declare const telGenericError: number;

declare const telHTypeNotSupp: number;

declare const telIndexNotSupp: number;

declare const telInitFailed: number;

declare const telIntExtNotSupp: number;

declare const telNoCallbackRef: number;

declare const telNoCommFolder: number;

declare const telNoErr: number;

declare const telNoMemErr: number;

declare const telNoOpenErr: number;

declare const telNoSuchTool: number;

declare const telNoTools: number;

declare const telNotEnoughdspBW: number;

declare const telPBErr: number;

declare const telStateNotSupp: number;

declare const telStillNeeded: number;

declare const telTermNotOpen: number;

declare const telTransferErr: number;

declare const telTransferRej: number;

declare const telUnknownErr: number;

declare const telVTypeNotSupp: number;

declare const telValidateFailed: number;

declare const textParserBadParamErr: number;

declare const textParserBadParserObjectErr: number;

declare const textParserBadTextEncodingErr: number;

declare const textParserBadTextLanguageErr: number;

declare const textParserBadTokenValueErr: number;

declare const textParserNoMoreTextErr: number;

declare const textParserNoMoreTokensErr: number;

declare const textParserNoSuchTokenFoundErr: number;

declare const textParserObjectNotFoundErr: number;

declare const textParserParamErr: number;

declare const themeBadCursorIndexErr: number;

declare const themeBadTextColorErr: number;

declare const themeHasNoAccentsErr: number;

declare const themeInvalidBrushErr: number;

declare const themeMonitorDepthNotSupportedErr: number;

declare const themeNoAppropriateBrushErr: number;

declare const themeProcessNotRegisteredErr: number;

declare const themeProcessRegisteredErr: number;

declare const themeScriptFontNotFoundErr: number;

declare const threadBadAppContextErr: number;

declare const threadNotFoundErr: number;

declare const threadProtocolErr: number;

declare const threadTooManyReqsErr: number;

declare const tilde: number;

declare const timeCycle12: number;

declare const timeCycle24: number;

declare const timeCycleZero: number;

declare const timeNotInMedia: number;

declare const timeNotInTrack: number;

declare const timeNotInViewErr: number;

declare const tk0BadErr: number;

declare const tmfoErr: number;

declare const tmwdoErr: number;

declare const togChar12HourBit: number;

declare const togCharZCycleBit: number;

declare const togDelta12HourBit: number;

declare const toggleBadChar: number;

declare const toggleBadDelta: number;

declare const toggleBadField: number;

declare const toggleBadNum: number;

declare const toggleErr3: number;

declare const toggleErr4: number;

declare const toggleErr5: number;

declare const toggleOK: number;

declare const toggleOutOfRange: number;

declare const toggleUndefined: number;

declare const toggleUnknown: number;

declare const tokDecPoint: number;

declare const tokEMinus: number;

declare const tokEPlus: number;

declare const tokEscape: number;

declare const tokLeadPlacer: number;

declare const tokLeader: number;

declare const tokLeftQuote: number;

declare const tokMaxSymbols: number;

declare const tokMinusSign: number;

declare const tokNonLeader: number;

declare const tokPercent: number;

declare const tokPlusSign: number;

declare const tokReserved: number;

declare const tokRightQuote: number;

declare const tokSeparator: number;

declare const tokThousands: number;

declare const tokZeroLead: number;

declare const token1Quote: number;

declare const token2Equal: number;

declare const token2Quote: number;

declare const tokenAlpha: number;

declare const tokenAltNum: number;

declare const tokenAltReal: number;

declare const tokenAmpersand: number;

declare const tokenAsterisk: number;

declare const tokenAtSign: number;

declare const tokenBackSlash: number;

declare const tokenBar: number;

declare const tokenCapPi: number;

declare const tokenCarat: number;

declare const tokenCaret: number;

declare const tokenCenterDot: number;

declare const tokenColon: number;

declare const tokenColonEqual: number;

declare const tokenComma: number;

declare const tokenDivide: number;

declare const tokenDollar: number;

declare const tokenEllipsis: number;

declare const tokenEmpty: number;

declare const tokenEqual: number;

declare const tokenErr: number;

declare const tokenEscape: number;

declare const tokenExclam: number;

declare const tokenExclamEqual: number;

declare const tokenFraction: number;

declare const tokenGreat: number;

declare const tokenGreatEqual1: number;

declare const tokenGreatEqual2: number;

declare const tokenHash: number;

declare const tokenInfinity: number;

declare const tokenIntegral: number;

declare const tokenIntl: number;

declare const tokenIntlCurrency: number;

declare const tokenLeft1Quote: number;

declare const tokenLeft2Quote: number;

declare const tokenLeftBracket: number;

declare const tokenLeftComment: number;

declare const tokenLeftCurly: number;

declare const tokenLeftEnclose: number;

declare const tokenLeftLit: number;

declare const tokenLeftParen: number;

declare const tokenLeftSingGuillemet: number;

declare const tokenLess: number;

declare const tokenLessEqual1: number;

declare const tokenLessEqual2: number;

declare const tokenLessGreat: number;

declare const tokenLiteral: number;

declare const tokenMicro: number;

declare const tokenMinus: number;

declare const tokenNewLine: number;

declare const tokenNil: number;

declare const tokenNoBreakSpace: number;

declare const tokenNotEqual: number;

declare const tokenNumeric: number;

declare const tokenOK: number;

declare const tokenOverflow: number;

declare const tokenPerThousand: number;

declare const tokenPercent: number;

declare const tokenPeriod: number;

declare const tokenPi: number;

declare const tokenPlus: number;

declare const tokenPlusMinus: number;

declare const tokenQuestion: number;

declare const tokenRealNum: number;

declare const tokenReserve1: number;

declare const tokenReserve2: number;

declare const tokenRight1Quote: number;

declare const tokenRight2Quote: number;

declare const tokenRightBracket: number;

declare const tokenRightComment: number;

declare const tokenRightCurly: number;

declare const tokenRightEnclose: number;

declare const tokenRightLit: number;

declare const tokenRightParen: number;

declare const tokenRightSingGuillemet: number;

declare const tokenRoot: number;

declare const tokenSemicolon: number;

declare const tokenSigma: number;

declare const tokenSlash: number;

declare const tokenTilda: number;

declare const tokenTilde: number;

declare const tokenUnderline: number;

declare const tokenUnknown: number;

declare const tokenWhite: number;

declare const tooManyReqs: number;

declare const tooManySeps: number;

declare const tooManySkts: number;

declare const trackIDNotFound: number;

declare const trackNotInMovie: number;

declare const trashIconResource: number;

declare const true32b: number;

declare const tsmAlreadyRegisteredErr: number;

declare const tsmCantChangeForcedClassStateErr: number;

declare const tsmCantOpenComponentErr: number;

declare const tsmComponentAlreadyOpenErr: number;

declare const tsmComponentNoErr: number;

declare const tsmComponentPropertyNotFoundErr: number;

declare const tsmComponentPropertyUnsupportedErr: number;

declare const tsmDefaultIsNotInputMethodErr: number;

declare const tsmDocNotActiveErr: number;

declare const tsmDocPropertyBufferTooSmallErr: number;

declare const tsmDocPropertyNotFoundErr: number;

declare const tsmDocumentOpenErr: number;

declare const tsmInputMethodIsOldErr: number;

declare const tsmInputMethodNotFoundErr: number;

declare const tsmInputModeChangeFailedErr: number;

declare const tsmInvalidContext: number;

declare const tsmInvalidDocIDErr: number;

declare const tsmNeverRegisteredErr: number;

declare const tsmNoHandler: number;

declare const tsmNoMoreTokens: number;

declare const tsmNoOpenTSErr: number;

declare const tsmNoStem: number;

declare const tsmNotAnAppErr: number;

declare const tsmScriptHasNoIMErr: number;

declare const tsmTSHasNoMenuErr: number;

declare const tsmTSMDocBusyErr: number;

declare const tsmTSNotOpenErr: number;

declare const tsmTextServiceNotFoundErr: number;

declare const tsmUnknownErr: number;

declare const tsmUnsupScriptLanguageErr: number;

declare const tsmUnsupportedTypeErr: number;

declare const tsmUseInputWindowErr: number;

declare const tuneParseOSErr: number;

declare const tunePlayerFullOSErr: number;

declare const twoSideErr: number;

declare const type128BitFloatingPoint: number;

declare const typeAEList: number;

declare const typeAERecord: number;

declare const typeAEText: number;

declare const typeAbsoluteOrdinal: number;

declare const typeAlias: number;

declare const typeAppParameters: number;

declare const typeApplSignature: number;

declare const typeAppleEvent: number;

declare const typeApplicationBundleID: number;

declare const typeApplicationURL: number;

declare const typeArc: number;

declare const typeAuditToken: number;

declare const typeBest: number;

declare const typeBookmarkData: number;

declare const typeBoolean: number;

declare const typeCFAbsoluteTime: number;

declare const typeCFArrayRef: number;

declare const typeCFAttributedStringRef: number;

declare const typeCFBooleanRef: number;

declare const typeCFDictionaryRef: number;

declare const typeCFMutableArrayRef: number;

declare const typeCFMutableAttributedStringRef: number;

declare const typeCFMutableDictionaryRef: number;

declare const typeCFMutableStringRef: number;

declare const typeCFNumberRef: number;

declare const typeCFStringRef: number;

declare const typeCFTypeRef: number;

declare const typeCString: number;

declare const typeCell: number;

declare const typeCentimeters: number;

declare const typeChar: number;

declare const typeClassInfo: number;

declare const typeColorTable: number;

declare const typeColumn: number;

declare const typeCompDescriptor: number;

declare const typeComponentInstance: number;

declare const typeCubicCentimeter: number;

declare const typeCubicFeet: number;

declare const typeCubicInches: number;

declare const typeCubicMeters: number;

declare const typeCubicYards: number;

declare const typeCurrentContainer: number;

declare const typeDashStyle: number;

declare const typeData: number;

declare const typeDecimalStruct: number;

declare const typeDegreesC: number;

declare const typeDegreesF: number;

declare const typeDegreesK: number;

declare const typeDrawingArea: number;

declare const typeEPS: number;

declare const typeElemInfo: number;

declare const typeEncodedString: number;

declare const typeEnumerated: number;

declare const typeEnumeration: number;

declare const typeEventInfo: number;

declare const typeEventRecord: number;

declare const typeEventRef: number;

declare const typeFSRef: number;

declare const typeFalse: number;

declare const typeFeet: number;

declare const typeFileURL: number;

declare const typeFinderWindow: number;

declare const typeFixed: number;

declare const typeFixedPoint: number;

declare const typeFixedRectangle: number;

declare const typeGIF: number;

declare const typeGallons: number;

declare const typeGlyphInfoArray: number;

declare const typeGrams: number;

declare const typeGraphicLine: number;

declare const typeGraphicText: number;

declare const typeGroupedGraphic: number;

declare const typeHIMenu: number;

declare const typeHIWindow: number;

declare const typeIEEE32BitFloatingPoint: number;

declare const typeIEEE64BitFloatingPoint: number;

declare const typeISO8601DateTime: number;

declare const typeInches: number;

declare const typeIndexDescriptor: number;

declare const typeInsertionLoc: number;

declare const typeIntlText: number;

declare const typeIntlWritingCode: number;

declare const typeJPEG: number;

declare const typeKernelProcessID: number;

declare const typeKeyword: number;

declare const typeKilograms: number;

declare const typeKilometers: number;

declare const typeLiters: number;

declare const typeLogicalDescriptor: number;

declare const typeLongDateTime: number;

declare const typeLongFixed: number;

declare const typeLongFixedPoint: number;

declare const typeLongFixedRectangle: number;

declare const typeLongPoint: number;

declare const typeLongRectangle: number;

declare const typeLowLevelEventRecord: number;

declare const typeMachPort: number;

declare const typeMachineLoc: number;

declare const typeMeters: number;

declare const typeMiles: number;

declare const typeNull: number;

declare const typeOSLTokenList: number;

declare const typeObjectBeingExamined: number;

declare const typeObjectSpecifier: number;

declare const typeOffsetArray: number;

declare const typeOunces: number;

declare const typeOval: number;

declare const typePString: number;

declare const typeParamInfo: number;

declare const typePict: number;

declare const typePixMapMinus: number;

declare const typePixelMap: number;

declare const typePolygon: number;

declare const typePounds: number;

declare const typeProcessSerialNumber: number;

declare const typePropInfo: number;

declare const typeProperty: number;

declare const typePtr: number;

declare const typeQDPoint: number;

declare const typeQDRectangle: number;

declare const typeQDRegion: number;

declare const typeQuarts: number;

declare const typeRGB16: number;

declare const typeRGB96: number;

declare const typeRGBColor: number;

declare const typeRangeDescriptor: number;

declare const typeRectangle: number;

declare const typeRelativeDescriptor: number;

declare const typeReplyPortAttr: number;

declare const typeRotation: number;

declare const typeRoundedRectangle: number;

declare const typeRow: number;

declare const typeSInt16: number;

declare const typeSInt32: number;

declare const typeSInt64: number;

declare const typeScrapStyles: number;

declare const typeScript: number;

declare const typeSectionH: number;

declare const typeSquareFeet: number;

declare const typeSquareKilometers: number;

declare const typeSquareMeters: number;

declare const typeSquareMiles: number;

declare const typeSquareYards: number;

declare const typeStyledText: number;

declare const typeStyledUnicodeText: number;

declare const typeSuiteInfo: number;

declare const typeTIFF: number;

declare const typeTable: number;

declare const typeText: number;

declare const typeTextRange: number;

declare const typeTextRangeArray: number;

declare const typeTextStyles: number;

declare const typeToken: number;

declare const typeTrue: number;

declare const typeType: number;

declare const typeUInt16: number;

declare const typeUInt32: number;

declare const typeUInt64: number;

declare const typeUTF16ExternalRepresentation: number;

declare const typeUTF8Text: number;

declare const typeUnicodeText: number;

declare const typeVersion: number;

declare const typeWhoseDescriptor: number;

declare const typeWhoseRange: number;

declare const typeWildCard: number;

declare const typeYards: number;

declare const unicodeBufErr: number;

declare const unicodeCharErr: number;

declare const unicodeChecksumErr: number;

declare const unicodeContextualErr: number;

declare const unicodeDirectionErr: number;

declare const unicodeElementErr: number;

declare const unicodeFallbacksErr: number;

declare const unicodeNoTableErr: number;

declare const unicodeNotFoundErr: number;

declare const unicodePartConvertErr: number;

declare const unicodeTableFormatErr: number;

declare const unicodeTextEncodingDataErr: number;

declare const unicodeVariantErr: number;

declare const unimpErr: number;

declare const unitEmptyErr: number;

declare const unitTblFullErr: number;

declare const unknownFormatErr: number;

declare const unknownInsertModeErr: number;

declare const unresolvedComponentDLLErr: number;

declare const unsupportedAuxiliaryImportData: number;

declare const unsupportedForPlatformErr: number;

declare const unsupportedOSErr: number;

declare const unsupportedProcessorErr: number;

declare const updPixMemErr: number;

declare const uppCallComponentCanDoProcInfo: number;

declare const uppCallComponentCloseProcInfo: number;

declare const uppCallComponentGetMPWorkFunctionProcInfo: number;

declare const uppCallComponentGetPublicResourceProcInfo: number;

declare const uppCallComponentOpenProcInfo: number;

declare const uppCallComponentRegisterProcInfo: number;

declare const uppCallComponentTargetProcInfo: number;

declare const uppCallComponentUnregisterProcInfo: number;

declare const uppCallComponentVersionProcInfo: number;

declare const uppComponentFunctionImplementedProcInfo: number;

declare const uppComponentSetTargetProcInfo: number;

declare const uppGetComponentVersionProcInfo: number;

declare const urlDataHFTPBadNameListErr: number;

declare const urlDataHFTPBadPasswordErr: number;

declare const urlDataHFTPBadUserErr: number;

declare const urlDataHFTPDataConnectionErr: number;

declare const urlDataHFTPFilenameErr: number;

declare const urlDataHFTPNeedPasswordErr: number;

declare const urlDataHFTPNoDirectoryErr: number;

declare const urlDataHFTPNoNetDriverErr: number;

declare const urlDataHFTPNoPasswordErr: number;

declare const urlDataHFTPPermissionsErr: number;

declare const urlDataHFTPProtocolErr: number;

declare const urlDataHFTPQuotaErr: number;

declare const urlDataHFTPServerDisconnectedErr: number;

declare const urlDataHFTPServerErr: number;

declare const urlDataHFTPShutdownErr: number;

declare const urlDataHFTPURLErr: number;

declare const urlDataHHTTPNoNetDriverErr: number;

declare const urlDataHHTTPProtocolErr: number;

declare const urlDataHHTTPRedirectErr: number;

declare const urlDataHHTTPURLErr: number;

declare const useATalk: number;

declare const useAsync: number;

declare const useExtClk: number;

declare const useFree: number;

declare const useMIDI: number;

declare const userBreak: number;

declare const userCanceledErr: number;

declare const userDataItemNotFound: number;

declare const userRejectErr: number;

declare const vLckdErr: number;

declare const vTypErr: number;

declare const vType: number;

declare const validDateFields: number;

declare const validInstancesExist: number;

declare const verAfrikaans: number;

declare const verAlternateGr: number;

declare const verArabia: number;

declare const verArabic: number;

declare const verArmenia: number;

declare const verArmenian: number;

declare const verAustralia: number;

declare const verAustria: number;

declare const verAustriaGerman: number;

declare const verBelarus: number;

declare const verBelgiumLux: number;

declare const verBelgiumLuxPoint: number;

declare const verBengali: number;

declare const verBhutan: number;

declare const verBrazil: number;

declare const verBreton: number;

declare const verBritain: number;

declare const verBrittany: number;

declare const verBulgaria: number;

declare const verByeloRussian: number;

declare const verCanadaComma: number;

declare const verCanadaPoint: number;

declare const verCatalonia: number;

declare const verChina: number;

declare const verCroatia: number;

declare const verCyprus: number;

declare const verCzech: number;

declare const verDenmark: number;

declare const verEastAsiaGeneric: number;

declare const verEngCanada: number;

declare const verErr: number;

declare const verEsperanto: number;

declare const verEstonia: number;

declare const verFaeroeIsl: number;

declare const verFarEastGeneric: number;

declare const verFaroeIsl: number;

declare const verFinland: number;

declare const verFlemish: number;

declare const verFlemishPoint: number;

declare const verFrBelgium: number;

declare const verFrBelgiumLux: number;

declare const verFrCanada: number;

declare const verFrSwiss: number;

declare const verFrance: number;

declare const verFrenchUniversal: number;

declare const verGenericFE: number;

declare const verGeorgia: number;

declare const verGeorgian: number;

declare const verGermanReformed: number;

declare const verGermany: number;

declare const verGrSwiss: number;

declare const verGreece: number;

declare const verGreeceAlt: number;

declare const verGreecePoly: number;

declare const verGreekAncient: number;

declare const verGreenland: number;

declare const verGujarati: number;

declare const verHungary: number;

declare const verIceland: number;

declare const verIndia: number;

declare const verIndiaHindi: number;

declare const verIndiaUrdu: number;

declare const verInternational: number;

declare const verIran: number;

declare const verIreland: number;

declare const verIrelandEnglish: number;

declare const verIrishGaelicScript: number;

declare const verIsrael: number;

declare const verItalianSwiss: number;

declare const verItaly: number;

declare const verJapan: number;

declare const verKorea: number;

declare const verLapland: number;

declare const verLatvia: number;

declare const verLithuania: number;

declare const verMacedonia: number;

declare const verMacedonian: number;

declare const verMagyar: number;

declare const verMalta: number;

declare const verManxGaelic: number;

declare const verMarathi: number;

declare const verMultilingual: number;

declare const verNepal: number;

declare const verNetherlands: number;

declare const verNetherlandsComma: number;

declare const verNorway: number;

declare const verNunavut: number;

declare const verNynorsk: number;

declare const verPakistan: number;

declare const verPakistanUrdu: number;

declare const verPoland: number;

declare const verPortugal: number;

declare const verPunjabi: number;

declare const verRomania: number;

declare const verRumania: number;

declare const verRussia: number;

declare const verSami: number;

declare const verScottishGaelic: number;

declare const verScriptGeneric: number;

declare const verSerbia: number;

declare const verSerbian: number;

declare const verSingapore: number;

declare const verSlovak: number;

declare const verSlovenia: number;

declare const verSlovenian: number;

declare const verSpLatinAmerica: number;

declare const verSpain: number;

declare const verSweden: number;

declare const verTaiwan: number;

declare const verThailand: number;

declare const verTibet: number;

declare const verTibetan: number;

declare const verTonga: number;

declare const verTurkey: number;

declare const verTurkishModified: number;

declare const verUS: number;

declare const verUkraine: number;

declare const verUkrania: number;

declare const verUnspecified: number;

declare const verUzbek: number;

declare const verVietnam: number;

declare const verWales: number;

declare const verWelsh: number;

declare const verYugoCroatian: number;

declare const verYugoslavia: number;

declare const vervariantDenmark: number;

declare const vervariantNorway: number;

declare const vervariantPortugal: number;

declare const videoOutputInUseErr: number;

declare const vmAddressNotInFileViewErr: number;

declare const vmBadDriver: number;

declare const vmBusyBackingFileErr: number;

declare const vmFileViewAccessErr: number;

declare const vmInvalidBackingFileIDErr: number;

declare const vmInvalidFileViewIDErr: number;

declare const vmInvalidOwningProcessErr: number;

declare const vmKernelMMUInitErr: number;

declare const vmMappingPrivilegesErr: number;

declare const vmMemLckdErr: number;

declare const vmMorePhysicalThanVirtualErr: number;

declare const vmNoMoreBackingFilesErr: number;

declare const vmNoMoreFileViewsErr: number;

declare const vmNoVectorErr: number;

declare const vmOffErr: number;

declare const voiceNotFound: number;

declare const volGoneErr: number;

declare const volMountChangedBit: number;

declare const volMountChangedMask: number;

declare const volMountExtendedFlagsBit: number;

declare const volMountExtendedFlagsMask: number;

declare const volMountFSReservedMask: number;

declare const volMountInteractBit: number;

declare const volMountInteractMask: number;

declare const volMountNoLoginMsgFlagBit: number;

declare const volMountNoLoginMsgFlagMask: number;

declare const volMountSysReservedMask: number;

declare const volOffLinErr: number;

declare const volOnLinErr: number;

declare const volVMBusyErr: number;

declare const wPrErr: number;

declare const wackBadFileErr: number;

declare const wackBadMetaDataErr: number;

declare const wackForkNotFoundErr: number;

declare const weekOfYearField: number;

declare const weekOfYearMask: number;

declare const wfFileNotFound: number;

declare const windowAppModalStateAlreadyExistsErr: number;

declare const windowAttributeImmutableErr: number;

declare const windowAttributesConflictErr: number;

declare const windowGroupInvalidErr: number;

declare const windowManagerInternalErr: number;

declare const windowNoAppModalStateErr: number;

declare const windowWrongStateErr: number;

declare const wrPermErr: number;

declare const wrUnderrun: number;

declare const wrgVolTypErr: number;

declare const writErr: number;

declare const writeReference: number;

declare const writingPastEnd: number;

declare const wrongApplicationPlatform: number;
declare function x80told(x80: Float80, x: number): void;

declare const ydm: number;

declare const yearField: number;

declare const yearMask: number;

declare const ymd: number;

declare const zeroCycle: number;
enum LSAcceptanceFlags {
    kLSAcceptDefault = 1,
    kLSAcceptAllowLoginUI = 2
}

enum LSHandlerOptions {
    kLSHandlerOptionsDefault = 0,
    kLSHandlerOptionsIgnoreCreator = 1
}

enum LSItemInfoFlags {
    kLSItemInfoIsPlainFile = 1,
    kLSItemInfoIsPackage = 2,
    kLSItemInfoIsApplication = 4,
    kLSItemInfoIsContainer = 8,
    kLSItemInfoIsAliasFile = 16,
    kLSItemInfoIsSymlink = 32,
    kLSItemInfoIsInvisible = 64,
    kLSItemInfoIsNativeApp = 128,
    kLSItemInfoIsClassicApp = 256,
    kLSItemInfoAppPrefersNative = 512,
    kLSItemInfoAppPrefersClassic = 1024,
    kLSItemInfoAppIsScriptable = 2048,
    kLSItemInfoIsVolume = 4096,
    kLSItemInfoExtensionIsHidden = 1048576
}

enum LSLaunchFlags {
    kLSLaunchDefaults = 1,
    kLSLaunchAndPrint = 2,
    kLSLaunchAndDisplayErrors = 64,
    kLSLaunchDontAddToRecents = 256,
    kLSLaunchDontSwitch = 512,
    kLSLaunchAsync = 65536,
    kLSLaunchNewInstance = 524288,
    kLSLaunchAndHide = 1048576,
    kLSLaunchAndHideOthers = 2097152
}

enum LSRequestedInfo {
    kLSRequestExtension = 1,
    kLSRequestTypeCreator = 2,
    kLSRequestBasicFlagsOnly = 4,
    kLSRequestAppTypeFlags = 8,
    kLSRequestAllFlags = 16,
    kLSRequestIconAndKind = 32,
    kLSRequestExtensionFlagsOnly = 64,
    kLSRequestAllInfo = 4294967295
}

enum LSRolesMask {
    kLSRolesNone = 1,
    kLSRolesViewer = 2,
    kLSRolesEditor = 4,
    kLSRolesShell = 8,
    kLSRolesAll = 4294967295
}

enum MDLabelDomain {
    kMDLabelUserDomain = 0,
    kMDLabelLocalDomain = 1
}

enum MDQueryOptionFlags {
    kMDQuerySynchronous = 1,
    kMDQueryWantsUpdates = 4,
    kMDQueryAllowFSTranslation = 8
}

enum MDQuerySortOptionFlags {
    kMDQueryReverseSortOrderFlag = 1
}

enum SKDocumentIndexState {
    kSKDocumentStateNotIndexed = 0,
    kSKDocumentStateIndexed = 1,
    kSKDocumentStateAddPending = 2,
    kSKDocumentStateDeletePending = 3
}

enum SKIndexType {
    kSKIndexUnknown = 0,
    kSKIndexInverted = 1,
    kSKIndexVector = 2,
    kSKIndexInvertedVector = 3
}

enum SKSearchType {
    kSKSearchRanked = 0,
    kSKSearchBooleanRanked = 1,
    kSKSearchRequiredRanked = 2,
    kSKSearchPrefixRanked = 3
}

enum WSTypeID {
    eWSUnknownType = 0,
    eWSNullType = 1,
    eWSBooleanType = 2,
    eWSIntegerType = 3,
    eWSDoubleType = 4,
    eWSStringType = 5,
    eWSDateType = 6,
    eWSDataType = 7,
    eWSArrayType = 8,
    eWSDictionaryType = 9
}

