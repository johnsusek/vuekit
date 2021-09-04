
interface ICACloseSessionPB {
	header: ICAHeader;
	sessionID: number;
}
declare var ICACloseSessionPB: ICACloseSessionPB;

interface ICACopyObjectDataPB {
	header: ICAHeader;
	object: number;
	startByte: number;
	requestedSize: number;
	data: NSData;
}
declare var ICACopyObjectDataPB: ICACopyObjectDataPB;

interface ICACopyObjectPropertyDictionaryPB {
	header: ICAHeader;
	object: number;
	theDict: NSDictionary<any, any>;
}
declare var ICACopyObjectPropertyDictionaryPB: ICACopyObjectPropertyDictionaryPB;

interface ICACopyObjectThumbnailPB {
	header: ICAHeader;
	object: number;
	thumbnailFormat: number;
	thumbnailData: NSData;
}
declare var ICACopyObjectThumbnailPB: ICACopyObjectThumbnailPB;

interface ICADownloadFilePB {
	header: ICAHeader;
	object: number;
	dirFSRef: FSRef;
	flags: number;
	fileType: number;
	fileCreator: number;
	rotationAngle: number;
	fileFSRef: FSRef;
}
declare var ICADownloadFilePB: ICADownloadFilePB;

interface ICAGetDeviceListPB {
	header: ICAHeader;
	object: number;
}
declare var ICAGetDeviceListPB: ICAGetDeviceListPB;

interface ICAHeader {
	err: number;
	refcon: number;
}
declare var ICAHeader: ICAHeader;

interface ICAImportImagePB {
	header: ICAHeader;
	deviceObject: number;
	flags: number;
	supportedFileTypes: NSArray<any>;
	filterProc: (p1: NSDictionary<any, any>, p2: number) => boolean;
	importedImages: NSArray<any>;
}
declare var ICAImportImagePB: ICAImportImagePB;

interface ICALoadDeviceModulePB {
	header: ICAHeader;
	paramDictionary: NSDictionary<any, any>;
}
declare var ICALoadDeviceModulePB: ICALoadDeviceModulePB;

interface ICAMessage {
	messageType: number;
	startByte: number;
	dataPtr: any;
	dataSize: number;
	dataType: number;
}
declare var ICAMessage: ICAMessage;

interface ICAObjectInfo {
	objectType: number;
	objectSubtype: number;
}
declare var ICAObjectInfo: ICAObjectInfo;

interface ICAObjectSendMessagePB {
	header: ICAHeader;
	object: number;
	message: ICAMessage;
	result: number;
}
declare var ICAObjectSendMessagePB: ICAObjectSendMessagePB;

interface ICAOpenSessionPB {
	header: ICAHeader;
	deviceObject: number;
	sessionID: number;
}
declare var ICAOpenSessionPB: ICAOpenSessionPB;

interface ICAPTPEventDataset {
	dataLength: number;
	containerType: number;
	eventCode: number;
	transactionID: number;
	params: number;
}
declare var ICAPTPEventDataset: ICAPTPEventDataset;

interface ICAPTPPassThroughPB {
	commandCode: number;
	resultCode: number;
	numOfInputParams: number;
	numOfOutputParams: number;
	params: number;
	dataUsageMode: number;
	flags: number;
	dataSize: number;
	data: number;
}
declare var ICAPTPPassThroughPB: ICAPTPPassThroughPB;

interface ICARawFileHeader {
	imageDataOffset: number;
	version: number;
	imageWidth: number;
	imageHeight: number;
	bytesPerRow: number;
	numberOfComponents: number;
	bitsPerComponent: number;
	bitsPerPixel: number;
	cgColorSpaceModel: number;
	bitmapInfo: number;
	orientation: number;
	dpi: number;
	colorSyncModeStr: number;
}
declare var ICARawFileHeader: ICARawFileHeader;

interface ICARegisterForEventNotificationPB {
	header: ICAHeader;
	objectOfInterest: number;
	eventsOfInterest: NSArray<any>;
	notificationProc: (p1: string, p2: NSDictionary<any, any>) => void;
	options: NSDictionary<any, any>;
}
declare var ICARegisterForEventNotificationPB: ICARegisterForEventNotificationPB;

interface ICAScannerCloseSessionPB {
	header: ICAHeader;
	sessionID: number;
}
declare var ICAScannerCloseSessionPB: ICAScannerCloseSessionPB;

interface ICAScannerGetParametersPB {
	header: ICAHeader;
	sessionID: number;
	theDict: NSDictionary<any, any>;
}
declare var ICAScannerGetParametersPB: ICAScannerGetParametersPB;

interface ICAScannerInitializePB {
	header: ICAHeader;
	sessionID: number;
}
declare var ICAScannerInitializePB: ICAScannerInitializePB;

interface ICAScannerOpenSessionPB {
	header: ICAHeader;
	object: number;
	sessionID: number;
}
declare var ICAScannerOpenSessionPB: ICAScannerOpenSessionPB;

interface ICAScannerSetParametersPB {
	header: ICAHeader;
	sessionID: number;
	theDict: NSDictionary<any, any>;
}
declare var ICAScannerSetParametersPB: ICAScannerSetParametersPB;

interface ICAScannerStartPB {
	header: ICAHeader;
	sessionID: number;
}
declare var ICAScannerStartPB: ICAScannerStartPB;

interface ICAScannerStatusPB {
	header: ICAHeader;
	sessionID: number;
	status: number;
}
declare var ICAScannerStatusPB: ICAScannerStatusPB;

interface ICASendNotificationPB {
	header: ICAHeader;
	notificationDictionary: NSDictionary<any, any>;
	replyCode: number;
}
declare var ICASendNotificationPB: ICASendNotificationPB;

interface ICAUnloadDeviceModulePB {
	header: ICAHeader;
	deviceObject: number;
}
declare var ICAUnloadDeviceModulePB: ICAUnloadDeviceModulePB;

interface ICAUploadFilePB {
	header: ICAHeader;
	parentObject: number;
	fileFSRef: FSRef;
	flags: number;
}
declare var ICAUploadFilePB: ICAUploadFilePB;

declare function ICDAddBandInfoToNotificationDictionary(dict: NSDictionary<any, any>, width: number, height: number, bitsPerPixel: number, bitsPerComponent: number, numComponents: number, endianness: number, pixelDataType: number, bytesPerRow: number, dataStartRow: number, dataNumberOfRows: number, dataSize: number, dataBuffer: any): number;

declare function ICDAddImageInfoToNotificationDictionary(dict: NSDictionary<any, any>, width: number, height: number, bytesPerRow: number, dataStartRow: number, dataNumberOfRows: number, dataSize: number, dataBuffer: any): number;

declare function ICDConnectBluetoothDevice(params: NSDictionary<any, any>): number;

declare function ICDConnectFWDevice(guid: number): number;

declare function ICDConnectFWDeviceWithIORegPath(guid: number, ioregPath: number): number;

declare function ICDConnectTCPIPDevice(params: NSDictionary<any, any>): number;

declare function ICDConnectUSBDevice(locationID: number): number;

declare function ICDConnectUSBDeviceWithIORegPath(locationID: number, ioregPath: number): number;

declare function ICDCopyDeviceInfoDictionary(deviceName: string | any, theDict: NSDictionary<any, any>): number;

declare function ICDCreateColorSpace(bitsPerPixel: number, samplesPerPixel: number, icaObject: number, colorSyncMode: string, abstractProfile: NSData, tmpProfilePath: string | any): any;

declare function ICDCreateEventDataCookie(object_: number, cookie: number): number;

declare function ICDDisconnectBluetoothDevice(params: NSDictionary<any, any>): number;

declare function ICDDisconnectFWDevice(guid: number): number;

declare function ICDDisconnectFWDeviceWithIORegPath(guid: number, ioregPath: number): number;

declare function ICDDisconnectTCPIPDevice(params: NSDictionary<any, any>): number;

declare function ICDDisconnectUSBDevice(locationID: number): number;

declare function ICDDisconnectUSBDeviceWithIORegPath(locationID: number, ioregPath: number): number;

declare function ICDGetStandardPropertyData(objectInfo: ObjectInfo, pb: any): number;

interface ICDHeader {
	err: number;
	refcon: number;
}
declare var ICDHeader: ICDHeader;

declare function ICDNewObjectCreated(parentInfo: ObjectInfo, objectInfo: ObjectInfo, completion: (p1: ObjectInfo) => void): number;

declare function ICDNewObjectInfoCreated(parentInfo: ObjectInfo, index: number, newICAObject: number): number;

declare function ICDScannerConnectBluetoothDevice(params: NSDictionary<any, any>): number;

declare function ICDScannerConnectFWDevice(guid: number): number;

declare function ICDScannerConnectFWDeviceWithIORegPath(guid: number, ioregPath: number): number;

declare function ICDScannerConnectTCPIPDevice(params: NSDictionary<any, any>): number;

declare function ICDScannerConnectUSBDevice(locationID: number): number;

declare function ICDScannerConnectUSBDeviceWithIORegPath(locationID: number, ioregPath: number): number;

declare function ICDScannerCopyDeviceInfoDictionary(deviceName: string | any, theDict: NSDictionary<any, any>): number;

declare function ICDScannerCreateEventDataCookie(object_: number, cookie: number): number;

declare function ICDScannerDisconnectBluetoothDevice(params: NSDictionary<any, any>): number;

declare function ICDScannerDisconnectFWDevice(guid: number): number;

declare function ICDScannerDisconnectFWDeviceWithIORegPath(guid: number, ioregPath: number): number;

declare function ICDScannerDisconnectTCPIPDevice(params: NSDictionary<any, any>): number;

declare function ICDScannerDisconnectUSBDevice(locationID: number): number;

declare function ICDScannerDisconnectUSBDeviceWithIORegPath(locationID: number, ioregPath: number): number;

declare function ICDScannerGetStandardPropertyData(objectInfo: ScannerObjectInfo, pb: any): number;

declare function ICDScannerNewObjectInfoCreated(parentInfo: ScannerObjectInfo, index: number, newICAObject: number): number;

declare function ICDSendNotification(pb: ICASendNotificationPB): number;

declare function ICDSendNotificationAndWaitForReply(pb: ICASendNotificationPB): number;

interface ICD_DisposeObjectPB {
	header: ICDHeader;
	object: number;
}
declare var ICD_DisposeObjectPB: ICD_DisposeObjectPB;

interface ICD_NewObjectPB {
	header: ICDHeader;
	parentObject: number;
	objectInfo: ICAObjectInfo;
	object: number;
}
declare var ICD_NewObjectPB: ICD_NewObjectPB;

interface ICD_ObjectSendMessagePB {
	header: ICDHeader;
	object: number;
	objectInfo: ICAObjectInfo;
	connectionID: number;
	message: ICAMessage;
	totalDataSize: number;
	result: number;
}
declare var ICD_ObjectSendMessagePB: ICD_ObjectSendMessagePB;

interface ICD_ScannerCloseSessionPB {
	header: ICDHeader;
	object: number;
	objectInfo: ICAObjectInfo;
	connectionID: number;
	sessionID: number;
}
declare var ICD_ScannerCloseSessionPB: ICD_ScannerCloseSessionPB;

interface ICD_ScannerGetParametersPB {
	header: ICDHeader;
	object: number;
	objectInfo: ICAObjectInfo;
	connectionID: number;
	sessionID: number;
	theDict: NSDictionary<any, any>;
}
declare var ICD_ScannerGetParametersPB: ICD_ScannerGetParametersPB;

interface ICD_ScannerInitializePB {
	header: ICDHeader;
	object: number;
	objectInfo: ICAObjectInfo;
	connectionID: number;
	sessionID: number;
}
declare var ICD_ScannerInitializePB: ICD_ScannerInitializePB;

declare function ICD_ScannerMain(argc: number, argv: string): number;

interface ICD_ScannerObjectSendMessagePB {
	header: ICDHeader;
	object: number;
	objectInfo: ICAObjectInfo;
	connectionID: number;
	message: ICAMessage;
	totalDataSize: number;
	result: number;
}
declare var ICD_ScannerObjectSendMessagePB: ICD_ScannerObjectSendMessagePB;

interface ICD_ScannerOpenSessionPB {
	header: ICDHeader;
	object: number;
	objectInfo: ICAObjectInfo;
	connectionID: number;
	sessionID: number;
}
declare var ICD_ScannerOpenSessionPB: ICD_ScannerOpenSessionPB;

interface ICD_ScannerSetParametersPB {
	header: ICDHeader;
	object: number;
	objectInfo: ICAObjectInfo;
	connectionID: number;
	sessionID: number;
	theDict: NSDictionary<any, any>;
}
declare var ICD_ScannerSetParametersPB: ICD_ScannerSetParametersPB;

interface ICD_ScannerStartPB {
	header: ICDHeader;
	object: number;
	objectInfo: ICAObjectInfo;
	connectionID: number;
	sessionID: number;
}
declare var ICD_ScannerStartPB: ICD_ScannerStartPB;

interface ICD_ScannerStatusPB {
	header: ICDHeader;
	object: number;
	objectInfo: ICAObjectInfo;
	connectionID: number;
	sessionID: number;
	status: number;
}
declare var ICD_ScannerStatusPB: ICD_ScannerStatusPB;

interface ICD_callback_functions {
	f_ICD_OpenUSBDevice: (p1: number, p2: ObjectInfo) => number;
	f_ICD_CloseDevice: (p1: ObjectInfo) => number;
	f_ICD_PeriodicTask: (p1: ObjectInfo) => number;
	f_ICD_GetObjectInfo: (p1: ObjectInfo, p2: number, p3: ObjectInfo) => number;
	f_ICD_Cleanup: (p1: ObjectInfo) => number;
	f_ICD_GetPropertyData: (p1: ObjectInfo, p2: any) => number;
	f_ICD_SetPropertyData: (p1: ObjectInfo, p2: any) => number;
	f_ICD_ReadFileData: (p1: ObjectInfo, p2: number, p3: string, p4: number, p5: number) => number;
	f_ICD_WriteFileData: (p1: ObjectInfo, p2: string, p3: number, p4: string, p5: number, p6: number) => number;
	f_ICD_SendMessage: (p1: ObjectInfo, p2: ICD_ObjectSendMessagePB, p3: (p1: ICDHeader) => void) => number;
	f_ICD_AddPropertiesToCFDictionary: (p1: ObjectInfo, p2: NSDictionary<any, any>) => number;
	f_ICD_OpenFireWireDevice: (p1: number, p2: ObjectInfo) => number;
	f_ICD_OpenUSBDeviceWithIORegPath: (p1: number, p2: number, p3: ObjectInfo) => number;
	f_ICD_OpenFireWireDeviceWithIORegPath: (p1: number, p2: number, p3: ObjectInfo) => number;
	f_ICD_OpenBluetoothDevice: (p1: NSDictionary<any, any>, p2: ObjectInfo) => number;
	f_ICD_OpenTCPIPDevice: (p1: NSDictionary<any, any>, p2: ObjectInfo) => number;
	f_ICD_WriteDataToFile: (p1: ObjectInfo, p2: FILE, p3: number, p4: number) => number;
	f_ICD_OpenMassStorageDevice: (p1: string, p2: any, p3: ObjectInfo) => number;
	f_ICD_WriteDataToFileDescriptor: (p1: ObjectInfo, p2: number, p3: number, p4: number) => number;
	f_ICD_WriteDataToFileDescriptor64: (p1: ObjectInfo, p2: number) => number;
}
declare var ICD_callback_functions: ICD_callback_functions;

declare function ICD_main(argc: number, argv: string): number;

interface ICD_scanner_callback_functions {
	f_ICD_ScannerOpenUSBDevice: (p1: number, p2: ScannerObjectInfo) => number;
	f_ICD_ScannerOpenUSBDeviceWithIORegPath: (p1: number, p2: number, p3: ScannerObjectInfo) => number;
	f_ICD_ScannerCloseDevice: (p1: ScannerObjectInfo) => number;
	f_ICD_ScannerPeriodicTask: (p1: ScannerObjectInfo) => number;
	f_ICD_ScannerGetObjectInfo: (p1: ScannerObjectInfo, p2: number, p3: ScannerObjectInfo) => number;
	f_ICD_ScannerCleanup: (p1: ScannerObjectInfo) => number;
	f_ICD_ScannerGetPropertyData: (p1: ScannerObjectInfo, p2: any) => number;
	f_ICD_ScannerSetPropertyData: (p1: ScannerObjectInfo, p2: any) => number;
	f_ICD_ScannerReadFileData: (p1: ScannerObjectInfo, p2: number, p3: string, p4: number, p5: number) => number;
	f_ICD_ScannerWriteFileData: (p1: ScannerObjectInfo, p2: string, p3: number, p4: string, p5: number, p6: number) => number;
	f_ICD_ScannerSendMessage: (p1: ScannerObjectInfo, p2: ICD_ScannerObjectSendMessagePB, p3: (p1: ICDHeader) => void) => number;
	f_ICD_ScannerAddPropertiesToCFDictionary: (p1: ScannerObjectInfo, p2: NSDictionary<any, any>) => number;
	f_ICD_ScannerOpenFireWireDevice: (p1: number, p2: ScannerObjectInfo) => number;
	f_ICD_ScannerOpenFireWireDeviceWithIORegPath: (p1: number, p2: number, p3: ScannerObjectInfo) => number;
	f_ICD_ScannerOpenSession: (p1: ScannerObjectInfo, p2: ICD_ScannerOpenSessionPB) => number;
	f_ICD_ScannerCloseSession: (p1: ScannerObjectInfo, p2: ICD_ScannerCloseSessionPB) => number;
	f_ICD_ScannerInitialize: (p1: ScannerObjectInfo, p2: ICD_ScannerInitializePB) => number;
	f_ICD_ScannerGetParameters: (p1: ScannerObjectInfo, p2: ICD_ScannerGetParametersPB) => number;
	f_ICD_ScannerSetParameters: (p1: ScannerObjectInfo, p2: ICD_ScannerSetParametersPB) => number;
	f_ICD_ScannerStatus: (p1: ScannerObjectInfo, p2: ICD_ScannerStatusPB) => number;
	f_ICD_ScannerStart: (p1: ScannerObjectInfo, p2: ICD_ScannerStartPB) => number;
	f_ICD_ScannerOpenBluetoothDevice: (p1: NSDictionary<any, any>, p2: ScannerObjectInfo) => number;
	f_ICD_ScannerOpenTCPIPDevice: (p1: NSDictionary<any, any>, p2: ScannerObjectInfo) => number;
	f_ICD_ScannerWriteDataToFile: (p1: ScannerObjectInfo, p2: FILE, p3: number, p4: number) => number;
	f_ICD_ScannerOpenMassStorageDevice: (p1: string, p2: any, p3: ScannerObjectInfo) => number;
	f_ICD_ScannerWriteDataToFileDescriptor: (p1: ScannerObjectInfo, p2: number, p3: number, p4: number) => number;
	f_ICD_ScannerWriteDataToFileDescriptor64: (p1: ScannerObjectInfo, p2: number) => number;
}
declare var ICD_scanner_callback_functions: ICD_scanner_callback_functions;

interface ObjectInfo {
	icaObject: number;
	reserved: number;
	icaObjectInfo: ICAObjectInfo;
	uniqueID: number;
	thumbnailSize: number;
	dataSize: number;
	dataWidth: number;
	dataHeight: number;
	name: number;
	creationDate: number;
	flags: number;
	privateData: string;
	uniqueIDFireWire: number;
	tag: number;
	dataSize64: number;
}
declare var ObjectInfo: ObjectInfo;

interface ScannerObjectInfo {
	icaObject: number;
	reserved: number;
	icaObjectInfo: ICAObjectInfo;
	uniqueID: number;
	uniqueIDFireWire: number;
	thumbnailSize: number;
	dataSize: number;
	dataWidth: number;
	dataHeight: number;
	name: number;
	creationDate: number;
	flags: number;
	privateData: string;
	tag: number;
}
declare var ScannerObjectInfo: ScannerObjectInfo;

declare const addedAfterCCCMask: number;

declare const fileInTempCacheMask: number;

declare const fileLockedMask: number;

declare var gICDCallbackFunctions: ICD_callback_functions;

declare var gICDScannerCallbackFunctions: ICD_scanner_callback_functions;

declare const hasChildrenMask: number;

declare const hasThumbnailMask: number;

declare const kAddMetaDataToFinderComment: number;

declare const kAdjustCreationDate: number;

declare const kCreateCustomIcon: number;

declare const kDeleteAfterDownload: number;

declare const kDontEmbedColorSyncProfile: number;

declare const kICAAllowMultipleImages: number;

declare var kICABluetoothAddressKey: string;

declare var kICABluetoothTransportType: string;

declare var kICABonjourServiceNameKey: string;

declare var kICABonjourServiceTypeKey: string;

declare var kICABonjourTXTRecordKey: string;

declare const kICAButtonCopy: number;

declare const kICAButtonEMail: number;

declare const kICAButtonScan: number;

declare const kICAButtonWeb: number;

declare const kICACameraPassThruNotUsed: number;

declare const kICACameraPassThruReceive: number;

declare const kICACameraPassThruSend: number;

declare const kICACannotYieldDevice: number;

declare const kICACommunicationErr: number;

declare var kICACreationDateStringKey: string;

declare var kICADataPropertyKey: string;

declare var kICADataSizeKey: string;

declare var kICADataTypeKey: string;

declare const kICADataTypeNotFoundErr: number;

declare const kICADevice: number;

declare const kICADeviceAlreadyOpenErr: number;

declare var kICADeviceBrowserDeviceRefKey: string;

declare const kICADeviceCamera: number;

declare var kICADeviceCapabilitiesKey: string;

declare const kICADeviceGUIDNotFoundErr: number;

declare const kICADeviceIOServicePathNotFoundErr: number;

declare var kICADeviceIconPathKey: string;

declare const kICADeviceInternalErr: number;

declare const kICADeviceInvalidParamErr: number;

declare const kICADeviceLocationIDNotFoundErr: number;

declare const kICADeviceMFP: number;

declare const kICADeviceMemoryAllocationErr: number;

declare var kICADeviceModulePathKey: string;

declare const kICADeviceNotFoundErr: number;

declare const kICADeviceNotOpenErr: number;

declare const kICADeviceOther: number;

declare const kICADevicePDA: number;

declare const kICADevicePhone: number;

declare var kICADevicePropArtist: string;

declare var kICADevicePropBatteryLevel: string;

declare var kICADevicePropBurstInterval: string;

declare var kICADevicePropBurstNumber: string;

declare var kICADevicePropCaptureDelay: string;

declare var kICADevicePropCompressionSetting: string;

declare var kICADevicePropContrast: string;

declare var kICADevicePropCopyrightInfo: string;

declare var kICADevicePropDateTime: string;

declare var kICADevicePropDigitalZoom: string;

declare var kICADevicePropEffectMode: string;

declare var kICADevicePropExposureBiasCompensation: string;

declare var kICADevicePropExposureIndex: string;

declare var kICADevicePropExposureMeteringMode: string;

declare var kICADevicePropExposureProgramMode: string;

declare var kICADevicePropExposureTime: string;

declare var kICADevicePropFNumber: string;

declare var kICADevicePropFlashMode: string;

declare var kICADevicePropFocalLength: string;

declare var kICADevicePropFocusDistance: string;

declare var kICADevicePropFocusMeteringMode: string;

declare var kICADevicePropFocusMode: string;

declare var kICADevicePropFunctionalMode: string;

declare var kICADevicePropImageSize: string;

declare var kICADevicePropRGBGain: string;

declare var kICADevicePropSharpness: string;

declare var kICADevicePropStillCaptureMode: string;

declare var kICADevicePropTimelapseInterval: string;

declare var kICADevicePropTimelapseNumber: string;

declare var kICADevicePropUndefined: string;

declare var kICADevicePropUploadURL: string;

declare var kICADevicePropWhiteBalance: string;

declare const kICADeviceScanner: number;

declare var kICADeviceSharedKey: string;

declare var kICADeviceTypeCamera: string;

declare var kICADeviceTypeKey: string;

declare var kICADeviceTypeScanner: string;

declare const kICADeviceUnsupportedErr: number;

declare var kICADeviceUsedKey: string;

declare var kICADeviceWebSharedKey: string;

declare var kICADevicesArrayKey: string;

declare const kICADirectory: number;

declare const kICADownloadAndReturnPathArray: number;

declare var kICAErrorKey: string;

declare var kICAExecutableArchitectureKey: string;

declare const kICAExtensionInternalErr: number;

declare const kICAFile: number;

declare const kICAFileAudio: number;

declare const kICAFileCorruptedErr: number;

declare const kICAFileFirmware: number;

declare const kICAFileImage: number;

declare const kICAFileMovie: number;

declare const kICAFileOther: number;

declare var kICAFireWireGUIDKey: string;

declare var kICAFireWireTransportType: string;

declare const kICAFlagReadAccess: number;

declare const kICAFlagReadWriteAccess: number;

declare const kICAFrameworkInternalErr: number;

declare const kICAIOPendingErr: number;

declare var kICAIOServicePathKey: string;

declare var kICAIPAddressKey: string;

declare var kICAIPGUIDKey: string;

declare var kICAIPNameKey: string;

declare var kICAIPPortKey: string;

declare const kICAIndexOutOfRangeErr: number;

declare const kICAInvalidObjectErr: number;

declare const kICAInvalidPropertyErr: number;

declare const kICAInvalidSessionErr: number;

declare const kICAList: number;

declare var kICALockStatusKey: string;

declare var kICAMediaDurationInSecondsKey: string;

declare var kICAMediaHeightKey: string;

declare var kICAMediaWidthKey: string;

declare const kICAMessageCameraPassThrough: number;

declare const kICAMessageCameraReadClock: number;

declare const kICAMessageCheckDevice: number;

declare const kICAMessageConnect: number;

declare const kICAMessageDeviceYield: number;

declare const kICAMessageDisconnect: number;

declare const kICAMessageGetEventData: number;

declare const kICAMessageGetLastButtonPressed: number;

declare const kICAMessageReset: number;

declare const kICAMessageScannerOverviewSelectionChanged: number;

declare var kICAModificationDateStringKey: string;

declare var kICANotificationClassKey: string;

declare var kICANotificationClassPTPStandard: string;

declare var kICANotificationClassPTPVendor: string;

declare var kICANotificationClassProprietary: string;

declare var kICANotificationDataCookieKey: string;

declare var kICANotificationDataIsBigEndianKey: string;

declare var kICANotificationDataKey: string;

declare var kICANotificationDataSizeKey: string;

declare var kICANotificationDeviceICAObjectKey: string;

declare var kICANotificationDeviceListICAObjectKey: string;

declare var kICANotificationICAObjectKey: string;

declare var kICANotificationImageBytesPerRowKey: string;

declare var kICANotificationImageDataKey: string;

declare var kICANotificationImageDataSizeKey: string;

declare var kICANotificationImageHeightKey: string;

declare var kICANotificationImageKey: string;

declare var kICANotificationImageNumberOfRowsKey: string;

declare var kICANotificationImageStartRowKey: string;

declare var kICANotificationImageWidthKey: string;

declare var kICANotificationNumerOfImagesRemainingKey: string;

declare var kICANotificationPercentDownloadedKey: string;

declare var kICANotificationRawEventKey: string;

declare var kICANotificationScannerButtonTypeKey: string;

declare var kICANotificationScannerDocumentNameKey: string;

declare var kICANotificationSubTypeDocumentLoaded: string;

declare var kICANotificationSubTypeDocumentNotLoaded: string;

declare var kICANotificationSubTypeKey: string;

declare var kICANotificationSubTypePerformOverviewScan: string;

declare var kICANotificationSubTypeWarmUpDone: string;

declare var kICANotificationSubTypeWarmUpStarted: string;

declare var kICANotificationTypeCaptureComplete: string;

declare var kICANotificationTypeDeviceAdded: string;

declare var kICANotificationTypeDeviceConnectionProgress: string;

declare var kICANotificationTypeDeviceInfoChanged: string;

declare var kICANotificationTypeDevicePropertyChanged: string;

declare var kICANotificationTypeDeviceRemoved: string;

declare var kICANotificationTypeDeviceStatusError: string;

declare var kICANotificationTypeDeviceStatusInfo: string;

declare var kICANotificationTypeDeviceWasReset: string;

declare var kICANotificationTypeDownloadProgressStatus: string;

declare var kICANotificationTypeKey: string;

declare var kICANotificationTypeObjectAdded: string;

declare var kICANotificationTypeObjectInfoChanged: string;

declare var kICANotificationTypeObjectRemoved: string;

declare var kICANotificationTypeProprietary: string;

declare var kICANotificationTypeRequestObjectTransfer: string;

declare var kICANotificationTypeScanProgressStatus: string;

declare var kICANotificationTypeScannerButtonPressed: string;

declare var kICANotificationTypeScannerOverviewOverlayAvailable: string;

declare var kICANotificationTypeScannerPageDone: string;

declare var kICANotificationTypeScannerScanDone: string;

declare var kICANotificationTypeScannerSessionClosed: string;

declare var kICANotificationTypeStoreAdded: string;

declare var kICANotificationTypeStoreFull: string;

declare var kICANotificationTypeStoreInfoChanged: string;

declare var kICANotificationTypeStoreRemoved: string;

declare var kICANotificationTypeTransactionCanceled: string;

declare var kICANotificationTypeUnreportedStatus: string;

declare var kICANotificationVendorErrorCodeKey: string;

declare var kICAObjectKey: string;

declare var kICAObjectNameKey: string;

declare const kICAPBVersion: number;

declare const kICAProperty: number;

declare const kICAPropertyColorSpace: number;

declare const kICAPropertyColorSyncProfile: number;

declare const kICAPropertyImageAperture: number;

declare const kICAPropertyImageBitDepth: number;

declare const kICAPropertyImageDPI: number;

declare const kICAPropertyImageData: number;

declare const kICAPropertyImageDateDigitized: number;

declare const kICAPropertyImageDateOriginal: number;

declare const kICAPropertyImageExposureTime: number;

declare const kICAPropertyImageFNumber: number;

declare const kICAPropertyImageFilename: number;

declare const kICAPropertyImageFlash: number;

declare const kICAPropertyImageHeight: number;

declare const kICAPropertyImageShutterSpeed: number;

declare const kICAPropertyImageSize: number;

declare const kICAPropertyImageThumbnail: number;

declare const kICAPropertyImageWidth: number;

declare const kICAPropertyTypeNotFoundErr: number;

declare var kICARawKey: string;

declare var kICARefconKey: string;

declare var kICARemoteDeviceKey: string;

declare var kICASCSITransportType: string;

declare const kICASandboxViolation: number;

declare const kICASecureSessionRequired: number;

declare var kICATCPIPTransportType: string;

declare var kICATWAINDSPathKey: string;

declare var kICATWAINTransportType: string;

declare const kICAThumbnailFormatJPEG: number;

declare const kICAThumbnailFormatPNG: number;

declare const kICAThumbnailFormatTIFF: number;

declare var kICAThumbnailPropertyKey: string;

declare var kICAThumbnailSizeKey: string;

declare var kICATransportTypeKey: string;

declare const kICATypeBoolean: number;

declare const kICATypeData: number;

declare const kICATypeFixed: number;

declare const kICATypeFloat: number;

declare const kICATypeSInt16: number;

declare const kICATypeSInt32: number;

declare const kICATypeSInt64: number;

declare const kICATypeString: number;

declare const kICATypeThumbnail: number;

declare const kICATypeUInt16: number;

declare const kICATypeUInt32: number;

declare const kICATypeUInt64: number;

declare const kICATypeUInt8: number;

declare var kICAUSBLocationIDKey: string;

declare var kICAUSBProductIDKey: string;

declare var kICAUSBTransportType: string;

declare var kICAUSBVendorIDKey: string;

declare const kICAUploadFileAsIs: number;

declare const kICAUploadFileScaleToFit: number;

declare var kICAUserAssignedDeviceNameKey: string;

declare const kICD_FileData: number;

declare const kICD_MetaData: number;

declare const kICD_ThumbnailData: number;

declare const kICD_ThumbnailDataFormatJPEG: number;

declare const kICD_ThumbnailDataFormatPNG: number;

declare const kICD_ThumbnailDataFormatTIFF: number;

declare const kICS_FileData: number;

declare const kICS_MetaData: number;

declare const kICS_ThumbnailData: number;

declare const kICS_ThumbnailDataFormatJPEG: number;

declare const kICS_ThumbnailDataFormatPNG: number;

declare const kICS_ThumbnailDataFormatTIFF: number;

declare var kICUTTypeRaw: string;

declare var kMetaDataDictionaryKey: string;

declare const kRotateImage: number;

declare const kSetFileTypeAndCreator: number;

declare const largeFileSizeMask: number;

declare const rawImageFormatMask: number;
