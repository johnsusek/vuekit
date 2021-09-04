
declare var ICButtonTypeCopy: string;

declare var ICButtonTypeMail: string;

declare var ICButtonTypePrint: string;

declare var ICButtonTypeScan: string;

declare var ICButtonTypeTransfer: string;

declare var ICButtonTypeWeb: string;

declare class ICCameraDevice extends ICDevice {

	readonly isAccessRestrictedAppleDevice: boolean;

	readonly batteryLevel: number;

	readonly batteryLevelAvailable: boolean;

	readonly contentCatalogPercentCompleted: number;

	readonly contents: NSArray<ICCameraItem>;

	readonly isEjectable: boolean;

	readonly iCloudPhotosEnabled: boolean;

	readonly isLocked: boolean;

	readonly mediaFiles: NSArray<ICCameraItem>;

	readonly mountPoint: string;

	readonly tetheredCaptureEnabled: boolean;

	readonly timeOffset: number;

	cancelDelete(): void;

	cancelDownload(): void;

	filesOfType(_: string): NSArray<string>;

	requestDeleteFiles(_: NSArray<ICCameraItem>): void;

	requestDeleteFilesDeleteFailedCompletion(_: NSArray<ICCameraItem>, deleteFailed: (p1: NSDictionary<string, ICCameraItem>) => void, completion?: (p1: NSDictionary<string, NSArray<ICCameraItem>>, p2: NSError) => void): NSProgress;

	requestDisableTethering(): void;

	requestDownloadFileOptionsDownloadDelegateDidDownloadSelectorContextInfo(_: ICCameraFile, options: NSDictionary<string, any>, downloadDelegate: ICCameraDeviceDownloadDelegate, didDownloadSelector: string, contextInfo?: any): void;

	requestEnableTethering(): void;

	requestReadDataFromFileAtOffsetLengthReadDelegateDidReadDataSelectorContextInfo(_: ICCameraFile, atOffset: number, length: number, readDelegate: any, didReadDataSelector: string, contextInfo?: any): void;

	requestSendPTPCommandOutDataCompletion(_: NSData, outData?: NSData, completion?: (p1: NSData, p2: NSData, p3: NSError) => void): void;

	requestSendPTPCommandOutDataSendCommandDelegateDidSendCommandSelectorContextInfo(_: NSData, outData?: NSData, sendCommandDelegate: any, didSendCommandSelector: string, contextInfo?: any): void;

	requestSyncClock(): void;

	requestTakePicture(): void;

	requestUploadFileOptionsUploadDelegateDidUploadSelectorContextInfo(_: NSURL, options: NSDictionary<string, any>, uploadDelegate: any, didUploadSelector: string, contextInfo?: any): void;
}

declare var ICCameraDeviceCanAcceptPTPCommands: string;

declare var ICCameraDeviceCanDeleteAllFiles: string;

declare var ICCameraDeviceCanDeleteOneFile: string;

declare var ICCameraDeviceCanReceiveFile: string;

declare var ICCameraDeviceCanSyncClock: string;

declare var ICCameraDeviceCanTakePicture: string;

declare var ICCameraDeviceCanTakePictureUsingShutterReleaseOnCamera: string;

interface ICCameraDeviceDelegate extends ICDeviceDelegate {

	cameraDeviceDidAddItems(_: ICCameraDevice, didAddItems: NSArray<ICCameraItem>): void;

	cameraDeviceDidCompleteDeleteFilesWithError?(_: ICCameraDevice, didCompleteDeleteFilesWithError?: NSError): void;

	cameraDeviceDidReceiveMetadataForItemError(_: ICCameraDevice, didReceiveMetadata?: NSDictionary<any, any>, forItem: ICCameraItem, error?: NSError): void;

	cameraDeviceDidReceivePTPEvent(_: ICCameraDevice, didReceivePTPEvent: NSData): void;

	cameraDeviceDidReceiveThumbnailForItemError(_: ICCameraDevice, didReceiveThumbnail?: any, forItem: ICCameraItem, error?: NSError): void;

	cameraDeviceDidRemoveItems(_: ICCameraDevice, didRemoveItems: NSArray<ICCameraItem>): void;

	cameraDeviceDidRenameItems(_: ICCameraDevice, didRenameItems: NSArray<ICCameraItem>): void;

	cameraDeviceShouldGetMetadataOfItem?(_: ICCameraDevice, shouldGetMetadataOfItem: ICCameraItem): boolean;

	cameraDeviceShouldGetThumbnailOfItem?(_: ICCameraDevice, shouldGetThumbnailOfItem: ICCameraItem): boolean;

	cameraDeviceDidChangeCapability(_: ICCameraDevice): void;

	cameraDeviceDidEnableAccessRestriction(_: ICDevice): void;

	cameraDeviceDidRemoveAccessRestriction(_: ICDevice): void;

	deviceDidBecomeReadyWithCompleteContentCatalog(_: ICCameraDevice): void;
}
declare var ICCameraDeviceDelegate: {

	prototype: ICCameraDeviceDelegate;
};

interface ICCameraDeviceDownloadDelegate extends NSObjectProtocol {

	didDownloadFileErrorOptionsContextInfo?(_: ICCameraFile, error?: NSError, options: NSDictionary<string, any>, contextInfo?: any): void;

	didReceiveDownloadProgressForFileDownloadedBytesMaxBytes?(_: ICCameraFile, downloadedBytes: number, maxBytes: number): void;
}
declare var ICCameraDeviceDownloadDelegate: {

	prototype: ICCameraDeviceDownloadDelegate;
};

declare class ICCameraFile extends ICCameraItem {

	readonly burstFavorite: boolean;

	readonly burstPicked: boolean;

	readonly burstUUID: string;

	readonly createdFilename: string;

	readonly duration: number;

	readonly exifCreationDate: Date;

	readonly exifModificationDate: Date;

	readonly fileCreationDate: Date;

	readonly fileModificationDate: Date;

	readonly fileSize: number;

	readonly firstPicked: boolean;

	readonly gpsString: string;

	readonly groupUUID: string;

	readonly height: number;

	readonly highFramerate: boolean;

	setOrientation(_: ICEXIFOrientationType)

	orientation: ICEXIFOrientationType;

	readonly originalFilename: string;

	readonly originatingAssetID: string;

	readonly pairedRawImage: ICCameraFile;

	readonly relatedUUID: string;

	readonly sidecarFiles: NSArray<ICCameraItem>;

	readonly timeLapse: boolean;

	readonly width: number;

	requestDownloadWithOptionsCompletion(_?: NSDictionary<string, any>, completion?: (p1: string, p2: NSError) => void): NSProgress;

	requestMetadataDictionaryWithOptionsCompletion(_?: NSDictionary<string, any>, completion?: (p1: NSDictionary<any, any>, p2: NSError) => void): void;

	requestReadDataAtOffsetLengthCompletion(_: number, length: number, completion?: (p1: NSData, p2: NSError) => void): void;

	requestThumbnailDataWithOptionsCompletion(_?: NSDictionary<string, any>, completion?: (p1: NSData, p2: NSError) => void): void;
}

declare class ICCameraFolder extends ICCameraItem {

	readonly contents: NSArray<ICCameraItem>;
}

declare class ICCameraItem extends NSObject {

	readonly UTI: string;

	readonly wasAddedAfterContentCatalogCompleted: boolean;

	readonly creationDate: Date;

	readonly device: ICCameraDevice;

	readonly fileSystemPath: string;

	readonly isInTemporaryStore: boolean;

	readonly isLocked: boolean;

	readonly metadata: NSDictionary<any, any>;

	readonly modificationDate: Date;

	readonly name: string;

	readonly parentFolder: ICCameraFolder;

	readonly ptpObjectHandle: number;

	readonly isRaw: boolean;

	readonly thumbnail: any;

	readonly userData: NSMutableDictionary<any, any>;

	flushMetadataCache(): void;

	flushThumbnailCache(): void;

	requestMetadata(): void;

	requestThumbnail(): void;
}

declare var ICDeleteAfterSuccessfulDownload: string;

declare var ICDeleteCanceled: string;

declare var ICDeleteErrorCanceled: string;

declare var ICDeleteErrorDeviceMissing: string;

declare var ICDeleteErrorFileMissing: string;

declare var ICDeleteErrorReadOnly: string;

declare var ICDeleteFailed: string;

declare var ICDeleteSuccessful: string;

declare class ICDevice extends NSObject {

	readonly UUIDString: string;

	setAutolaunchApplicationPath(_: string)

	autolaunchApplicationPath: string;

	readonly capabilities: NSArray<string>;

	setDelegate(_: ICDeviceDelegate)

	delegate: ICDeviceDelegate;

	readonly hasOpenSession: boolean;

	readonly icon: any;

	readonly locationDescription: string;

	readonly modulePath: string;

	readonly moduleVersion: string;

	readonly name: string;

	readonly persistentIDString: string;

	readonly productKind: string;

	readonly isRemote: boolean;

	readonly serialNumberString: string;

	readonly transportType: string;

	readonly type: ICDeviceType;

	readonly usbLocationID: number;

	readonly usbProductID: number;

	readonly usbVendorID: number;

	readonly userData: NSMutableDictionary<any, any>;

	requestCloseSession(): void;

	requestCloseSessionWithOptionsCompletion(_?: NSDictionary<string, any>, completion?: (p1: NSError) => void): void;

	requestEject(): void;

	requestEjectWithCompletion(_?: (p1: NSError) => void): void;

	requestOpenSession(): void;

	requestOpenSessionWithOptionsCompletion(_?: NSDictionary<string, any>, completion?: (p1: NSError) => void): void;

	requestSendMessageOutDataMaxReturnedDataSizeSendMessageDelegateDidSendMessageSelectorContextInfo(_: number, outData: NSData, maxReturnedDataSize: number, sendMessageDelegate: any, didSendMessageSelector: string, contextInfo?: any): void;
}

declare class ICDeviceBrowser extends NSObject {

	setBrowsedDeviceTypeMask(_: ICDeviceTypeMask)

	browsedDeviceTypeMask: ICDeviceTypeMask;

	readonly isBrowsing: boolean;

	setDelegate(_: ICDeviceBrowserDelegate)

	delegate: ICDeviceBrowserDelegate;

	readonly devices: NSArray<ICDevice>;

	preferredDevice(): ICDevice;

	start(): void;

	stop(): void;
}

interface ICDeviceBrowserDelegate extends NSObjectProtocol {

	deviceBrowserDeviceDidChangeName?(_: ICDeviceBrowser, deviceDidChangeName: ICDevice): void;

	deviceBrowserDidAddDeviceMoreComing(_: ICDeviceBrowser, didAddDevice: ICDevice, moreComing: boolean): void;

	deviceBrowserDidRemoveDeviceMoreGoing(_: ICDeviceBrowser, didRemoveDevice: ICDevice, moreGoing: boolean): void;

	deviceBrowserRequestsSelectDevice?(_: ICDeviceBrowser, requestsSelectDevice: ICDevice): void;

	deviceBrowserDidEnumerateLocalDevices?(_: ICDeviceBrowser): void;
}
declare var ICDeviceBrowserDelegate: {

	prototype: ICDeviceBrowserDelegate;
};

declare var ICDeviceCanEjectOrDisconnect: string;

interface ICDeviceDelegate extends NSObjectProtocol {

	deviceDidCloseSessionWithError(_: ICDevice, didCloseSessionWithError?: NSError): void;

	deviceDidEjectWithError?(_: ICDevice, didEjectWithError?: NSError): void;

	deviceDidEncounterError?(_: ICDevice, didEncounterError?: NSError): void;

	deviceDidOpenSessionWithError(_: ICDevice, didOpenSessionWithError?: NSError): void;

	deviceDidReceiveStatusInformation?(_: ICDevice, didReceiveStatusInformation: NSDictionary<string, any>): void;

	deviceDidBecomeReady?(_: ICDevice): void;

	deviceDidChangeName?(_: ICDevice): void;

	didRemoveDevice(_: ICDevice): void;
}
declare var ICDeviceDelegate: {

	prototype: ICDeviceDelegate;
};

declare var ICDeviceLocationDescriptionBluetooth: string;

declare var ICDeviceLocationDescriptionFireWire: string;

declare var ICDeviceLocationDescriptionMassStorage: string;

declare var ICDeviceLocationDescriptionUSB: string;

enum ICDeviceLocationType {

	Local = 256,

	Shared = 512,

	Bonjour = 1024,

	Bluetooth = 2048
}


enum ICDeviceLocationTypeMask {

	Local = 256,

	Shared = 512,

	Bonjour = 1024,

	Bluetooth = 2048,

	Remote = 65024
}


enum ICDeviceType {

	Camera = 1,

	Scanner = 2
}


enum ICDeviceTypeMask {

	Camera = 1,

	Scanner = 2
}


declare var ICDownloadSidecarFiles: string;

declare var ICDownloadsDirectoryURL: string;

enum ICEXIFOrientationType {

	Orientation1 = 1,

	Orientation2 = 2,

	Orientation3 = 3,

	Orientation4 = 4,

	Orientation5 = 5,

	Orientation6 = 6,

	Orientation7 = 7,

	Orientation8 = 8
}


declare var ICEnumerationChronologicalOrder: string;

declare var ICErrorDomain: string;

declare var ICImageSourceShouldCache: string;

declare var ICImageSourceThumbnailMaxPixelSize: string;

enum ICLegacyReturnCode {

	CommunicationErr = -9900,

	DeviceNotFoundErr = -9901,

	DeviceNotOpenErr = -9902,

	FileCorruptedErr = -9903,

	IOPendingErr = -9904,

	InvalidObjectErr = -9905,

	InvalidPropertyErr = -9906,

	IndexOutOfRangeErr = -9907,

	PropertyTypeNotFoundErr = -9908,

	CannotYieldDevice = -9909,

	DataTypeNotFoundErr = -9910,

	DeviceMemoryAllocationErr = -9911,

	DeviceInternalErr = -9912,

	DeviceInvalidParamErr = -9913,

	DeviceAlreadyOpenErr = -9914,

	DeviceLocationIDNotFoundErr = -9915,

	DeviceGUIDNotFoundErr = -9916,

	DeviceIOServicePathNotFoundErr = -9917,

	DeviceUnsupportedErr = -9918,

	FrameworkInternalErr = -9919,

	ExtensionInternalErr = -9920,

	InvalidSessionErr = -9921
}


declare var ICLocalizedStatusNotificationKey: string;

declare var ICOverwrite: string;

enum ICReturnCode {

	Success = 0,

	InvalidParam = -9922,

	CommunicationTimedOut = -9923,

	ScanOperationCanceled = -9924,

	ScannerInUseByLocalUser = -9925,

	ScannerInUseByRemoteUser = -9926,

	DeviceFailedToOpenSession = -9927,

	DeviceFailedToCloseSession = -9928,

	ScannerFailedToSelectFunctionalUnit = -9929,

	ScannerFailedToCompleteOverviewScan = -9930,

	ScannerFailedToCompleteScan = -9931,

	ReceivedUnsolicitedScannerStatusInfo = -9932,

	ReceivedUnsolicitedScannerErrorInfo = -9933,

	DownloadFailed = -9934,

	UploadFailed = -9935,

	FailedToCompletePassThroughCommand = -9936,

	DownloadCanceled = -9937,

	FailedToEnabeTethering = -9938,

	FailedToDisabeTethering = -9939,

	FailedToCompleteSendMessageRequest = -9940,

	DeleteFilesFailed = -9941,

	DeleteFilesCanceled = -9942,

	DeviceIsPasscodeLocked = -9943,

	DeviceFailedToTakePicture = -9944,

	DeviceSoftwareNotInstalled = -9945,

	DeviceSoftwareIsBeingInstalled = -9946,

	DeviceSoftwareInstallationCompleted = -9947,

	DeviceSoftwareInstallationCanceled = -9948,

	DeviceSoftwareInstallationFailed = -9949,

	DeviceSoftwareNotAvailable = -9950,

	DeviceCouldNotPair = -9951,

	DeviceCouldNotUnpair = -9952,

	DeviceNeedsCredentials = -9953,

	DeviceIsBusyEnumerating = -9954,

	DeviceCommandGeneralFailure = -9955,

	DeviceFailedToCompleteTransfer = -9956,

	DeviceFailedToSendData = -9957,

	SessionNotOpened = -9958,

	ExFATVolumeInvalid = 21200,

	MultiErrorDictionary = -30000
}


enum ICReturnCodeOffset {

	ThumbnailOffset = -21000,

	MetadataOffset = -21050,

	DownloadOffset = -21100,

	DeleteOffset = -21150,

	ExFATOffset = -21200,

	PTPOffset = -21250,

	SystemOffset = -21300,

	DeviceOffset = -21350,

	DeviceConnection = -21400,

	ObjectOffset = -21450
}


enum ICReturnConnectionErrorCode {

	DriverExited = -21350,

	ClosedSessionSuddenly = -21349,

	EjectedSuddenly = -21348,

	SessionAlreadyOpen = -21347,

	EjectFailed = -21346,

	FailedToOpen = -21345,

	FailedToOpenDevice = -21344
}


enum ICReturnDownloadErrorCode {

	PathInvalid = -21100,

	FileWritable = -21099
}


enum ICReturnMetadataErrorCode {

	NotAvailable = -20150,

	AlreadyFetching = -20149,

	Canceled = -20148,

	Invalid = -20147
}


enum ICReturnObjectErrorCode {

	CodeObjectDoesNotExist = -21450,

	CodeObjectDataOffsetInvalid = -21449,

	CodeObjectCouldNotBeRead = -21448,

	CodeObjectDataEmpty = -21447,

	CodeObjectDataRequestTooLarge = -21446
}


enum ICReturnPTPDeviceErrorCode {

	FailedToSendCommand = -21250,

	NotAuthorizedToSendCommand = -21249
}


enum ICReturnThumbnailErrorCode {

	NotAvailable = -21000,

	AlreadyFetching = -20999,

	Canceled = -20098,

	Invalid = -20097
}


declare var ICSaveAsFilename: string;

declare var ICSavedAncillaryFiles: string;

declare var ICSavedFilename: string;

declare class ICScannerBandData extends NSObject {

	readonly isBigEndian: boolean;

	readonly bitsPerComponent: number;

	readonly bitsPerPixel: number;

	readonly bytesPerRow: number;

	readonly colorSyncProfilePath: string;

	readonly dataBuffer: NSData;

	readonly dataNumRows: number;

	readonly dataSize: number;

	readonly dataStartRow: number;

	readonly fullImageHeight: number;

	readonly fullImageWidth: number;

	readonly numComponents: number;

	readonly pixelDataType: ICScannerPixelDataType;
}

enum ICScannerBitDepth {

	Depth1Bit = 1,

	Depth8Bits = 8,

	Depth16Bits = 16
}


enum ICScannerColorDataFormatType {

	Chunky = 0,

	Planar = 1
}


declare class ICScannerDevice extends ICDevice {

	readonly availableFunctionalUnitTypes: NSArray<number>;

	setDefaultUsername(_: string)

	defaultUsername: string;

	setDocumentName(_: string)

	documentName: string;

	setDocumentUTI(_: string)

	documentUTI: string;

	setDownloadsDirectory(_: NSURL)

	downloadsDirectory: NSURL;

	setMaxMemoryBandSize(_: number)

	maxMemoryBandSize: number;

	readonly selectedFunctionalUnit: ICScannerFunctionalUnit;

	setTransferMode(_: ICScannerTransferMode)

	transferMode: ICScannerTransferMode;

	cancelScan(): void;

	requestOpenSessionWithCredentialsPassword(_: string, password: string): void;

	requestOverviewScan(): void;

	requestScan(): void;

	requestSelectFunctionalUnit(_: ICScannerFunctionalUnitType): void;
}

interface ICScannerDeviceDelegate extends ICDeviceDelegate {

	scannerDeviceDidCompleteOverviewScanWithError?(_: ICScannerDevice, didCompleteOverviewScanWithError?: NSError): void;

	scannerDeviceDidCompleteScanWithError?(_: ICScannerDevice, didCompleteScanWithError?: NSError): void;

	scannerDeviceDidScanToBandData?(_: ICScannerDevice, didScanToBandData: ICScannerBandData): void;

	scannerDeviceDidScanToURL?(_: ICScannerDevice, didScanToURL: NSURL): void;

	scannerDeviceDidSelectFunctionalUnitError?(_: ICScannerDevice, didSelectFunctionalUnit: ICScannerFunctionalUnit, error?: NSError): void;

	scannerDeviceDidBecomeAvailable?(_: ICScannerDevice): void;
}
declare var ICScannerDeviceDelegate: {

	prototype: ICScannerDeviceDelegate;
};

enum ICScannerDocumentType {

	TypeDefault = 0,

	TypeA4 = 1,

	TypeB5 = 2,

	TypeUSLetter = 3,

	TypeUSLegal = 4,

	TypeA5 = 5,

	TypeISOB4 = 6,

	TypeISOB6 = 7,

	TypeUSLedger = 9,

	TypeUSExecutive = 10,

	TypeA3 = 11,

	TypeISOB3 = 12,

	TypeA6 = 13,

	TypeC4 = 14,

	TypeC5 = 15,

	TypeC6 = 16,

	Type4A0 = 17,

	Type2A0 = 18,

	TypeA0 = 19,

	TypeA1 = 20,

	TypeA2 = 21,

	TypeA7 = 22,

	TypeA8 = 23,

	TypeA9 = 24,

	Type10 = 25,

	TypeISOB0 = 26,

	TypeISOB1 = 27,

	TypeISOB2 = 28,

	TypeISOB5 = 29,

	TypeISOB7 = 30,

	TypeISOB8 = 31,

	TypeISOB9 = 32,

	TypeISOB10 = 33,

	TypeJISB0 = 34,

	TypeJISB1 = 35,

	TypeJISB2 = 36,

	TypeJISB3 = 37,

	TypeJISB4 = 38,

	TypeJISB6 = 39,

	TypeJISB7 = 40,

	TypeJISB8 = 41,

	TypeJISB9 = 42,

	TypeJISB10 = 43,

	TypeC0 = 44,

	TypeC1 = 45,

	TypeC2 = 46,

	TypeC3 = 47,

	TypeC7 = 48,

	TypeC8 = 49,

	TypeC9 = 50,

	TypeC10 = 51,

	TypeUSStatement = 52,

	TypeBusinessCard = 53,

	TypeE = 60,

	Type3R = 61,

	Type4R = 62,

	Type5R = 63,

	Type6R = 64,

	Type8R = 65,

	TypeS8R = 66,

	Type10R = 67,

	TypeS10R = 68,

	Type11R = 69,

	Type12R = 70,

	TypeS12R = 71,

	Type110 = 72,

	TypeAPSH = 73,

	TypeAPSC = 74,

	TypeAPSP = 75,

	Type135 = 76,

	TypeMF = 77,

	TypeLF = 78
}


declare class ICScannerFeature extends NSObject {

	readonly humanReadableName: string;

	readonly internalName: string;

	readonly tooltip: string;

	readonly type: ICScannerFeatureType;
}

declare class ICScannerFeatureBoolean extends ICScannerFeature {

	setValue(_: boolean)

	value: boolean;
}

declare class ICScannerFeatureEnumeration extends ICScannerFeature {

	setCurrentValue(_: any)

	currentValue: any;

	readonly defaultValue: any;

	readonly menuItemLabels: NSArray<string>;

	readonly menuItemLabelsTooltips: NSArray<string>;

	readonly values: NSArray<number>;
}

declare class ICScannerFeatureRange extends ICScannerFeature {

	setCurrentValue(_: number)

	currentValue: number;

	readonly defaultValue: number;

	readonly maxValue: number;

	readonly minValue: number;

	readonly stepSize: number;
}

declare class ICScannerFeatureTemplate extends ICScannerFeature {

	readonly targets: NSArray<NSMutableArray<any>>;
}

enum ICScannerFeatureType {

	Enumeration = 0,

	Range = 1,

	Boolean = 2,

	Template = 3
}


declare class ICScannerFunctionalUnit extends NSObject {

	readonly acceptsThresholdForBlackAndWhiteScanning: boolean;

	setBitDepth(_: ICScannerBitDepth)

	bitDepth: ICScannerBitDepth;

	readonly canPerformOverviewScan: boolean;

	readonly defaultThresholdForBlackAndWhiteScanning: number;

	setMeasurementUnit(_: ICScannerMeasurementUnit)

	measurementUnit: ICScannerMeasurementUnit;

	readonly nativeXResolution: number;

	readonly nativeYResolution: number;

	readonly overviewImage: any;

	setOverviewResolution(_: number)

	overviewResolution: number;

	readonly overviewScanInProgress: boolean;

	readonly physicalSize: CGSize;

	setPixelDataType(_: ICScannerPixelDataType)

	pixelDataType: ICScannerPixelDataType;

	readonly preferredResolutions: NSIndexSet;

	readonly preferredScaleFactors: NSIndexSet;

	setResolution(_: number)

	resolution: number;

	setScaleFactor(_: number)

	scaleFactor: number;

	setScanArea(_: CGRect)

	scanArea: CGRect;

	setScanAreaOrientation(_: ICEXIFOrientationType)

	scanAreaOrientation: ICEXIFOrientationType;

	readonly scanInProgress: boolean;

	readonly scanProgressPercentDone: number;

	readonly state: ICScannerFunctionalUnitState;

	readonly supportedBitDepths: NSIndexSet;

	readonly supportedMeasurementUnits: NSIndexSet;

	readonly supportedResolutions: NSIndexSet;

	readonly supportedScaleFactors: NSIndexSet;

	readonly templates: NSArray<ICScannerFeatureTemplate>;

	setThresholdForBlackAndWhiteScanning(_: number)

	thresholdForBlackAndWhiteScanning: number;

	readonly type: ICScannerFunctionalUnitType;

	setUsesThresholdForBlackAndWhiteScanning(_: boolean)

	usesThresholdForBlackAndWhiteScanning: boolean;

	readonly vendorFeatures: NSArray<ICScannerFeature>;
}

declare class ICScannerFunctionalUnitDocumentFeeder extends ICScannerFunctionalUnit {

	readonly documentLoaded: boolean;

	readonly documentSize: CGSize;

	setDocumentType(_: ICScannerDocumentType)

	documentType: ICScannerDocumentType;

	setDuplexScanningEnabled(_: boolean)

	duplexScanningEnabled: boolean;

	setEvenPageOrientation(_: ICEXIFOrientationType)

	evenPageOrientation: ICEXIFOrientationType;

	setOddPageOrientation(_: ICEXIFOrientationType)

	oddPageOrientation: ICEXIFOrientationType;

	readonly reverseFeederPageOrder: boolean;

	readonly supportedDocumentTypes: NSIndexSet;

	readonly supportsDuplexScanning: boolean;
}

declare class ICScannerFunctionalUnitFlatbed extends ICScannerFunctionalUnit {

	readonly documentSize: CGSize;

	setDocumentType(_: ICScannerDocumentType)

	documentType: ICScannerDocumentType;

	readonly supportedDocumentTypes: NSIndexSet;
}

declare class ICScannerFunctionalUnitNegativeTransparency extends ICScannerFunctionalUnit {

	readonly documentSize: CGSize;

	setDocumentType(_: ICScannerDocumentType)

	documentType: ICScannerDocumentType;

	readonly supportedDocumentTypes: NSIndexSet;
}

declare class ICScannerFunctionalUnitPositiveTransparency extends ICScannerFunctionalUnit {

	readonly documentSize: CGSize;

	setDocumentType(_: ICScannerDocumentType)

	documentType: ICScannerDocumentType;

	readonly supportedDocumentTypes: NSIndexSet;
}

enum ICScannerFunctionalUnitState {

	Ready = 1,

	ScanInProgress = 2,

	OverviewScanInProgress = 4
}


enum ICScannerFunctionalUnitType {

	Flatbed = 0,

	PositiveTransparency = 1,

	NegativeTransparency = 2,

	DocumentFeeder = 3
}


enum ICScannerMeasurementUnit {

	Inches = 0,

	Centimeters = 1,

	Picas = 2,

	Points = 3,

	Twips = 4,

	Pixels = 5
}


enum ICScannerPixelDataType {

	BW = 0,

	Gray = 1,

	RGB = 2,

	Palette = 3,

	CMY = 4,

	CMYK = 5,

	YUV = 6,

	YUVK = 7,

	CIEXYZ = 8
}


declare var ICScannerStatusRequestsOverviewScan: string;

declare var ICScannerStatusWarmUpDone: string;

declare var ICScannerStatusWarmingUp: string;

enum ICScannerTransferMode {

	FileBased = 0,

	MemoryBased = 1
}


declare var ICStatusCodeKey: string;

declare var ICStatusNotificationKey: string;

declare var ICTransportTypeBluetooth: string;

declare var ICTransportTypeFireWire: string;

declare var ICTransportTypeMassStorage: string;

declare var ICTransportTypeTCPIP: string;

declare var ICTransportTypeUSB: string;
