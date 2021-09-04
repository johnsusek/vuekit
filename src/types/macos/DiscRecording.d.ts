
declare var DRAbstractFile: string;

declare var DRAccessDate: string;

declare var DRAllFilesystems: string;

declare var DRApplicationIdentifier: string;

declare var DRAttributeModificationDate: string;

declare var DRAudioFourChannelKey: string;

declare var DRAudioPreEmphasisKey: string;

declare function DRAudioTrackCreateWithURL(audioFileURL: NSURL): any;

declare var DRBackupDate: string;

declare var DRBibliographicFile: string;

declare var DRBlockSize: string;

declare var DRBlockSizeKey: string;

declare var DRBlockTypeKey: string;

declare class DRBurn extends NSObject {

	static burnForDevice(_: DRDevice): DRBurn;

	static layoutForImageFile(_: string): any;

	static create(device: DRDevice);

	abort(): void;

	appendable(): boolean;

	completionAction(): string;

	device(): DRDevice;

	properties(): NSDictionary<any, any>;

	requestedBurnSpeed(): number;

	setAppendable(_: boolean): void;

	setCompletionAction(_: string): void;

	setProperties(_: NSDictionary<any, any>): void;

	setRequestedBurnSpeed(_: number): void;

	setVerifyDisc(_: boolean): void;

	status(): NSDictionary<any, any>;

	verifyDisc(): boolean;

	writeLayout(_: any): void;
}

declare function DRBurnAbort(burn: any): void;

declare var DRBurnAppendableKey: string;

declare var DRBurnCompletionActionEject: string;

declare var DRBurnCompletionActionKey: string;

declare var DRBurnCompletionActionMount: string;

declare function DRBurnCopyStatus(burn: any): NSDictionary<any, any>;

declare function DRBurnCreate(device: any): any;

declare var DRBurnDoubleLayerL0DataZoneBlocksKey: string;

declare var DRBurnFailureActionEject: string;

declare var DRBurnFailureActionKey: string;

declare var DRBurnFailureActionNone: string;

declare function DRBurnGetDevice(burn: any): any;

declare function DRBurnGetProperties(burn: any): NSDictionary<any, any>;

declare function DRBurnGetTypeID(): number;

declare var DRBurnOverwriteDiscKey: string;

declare var DRBurnRequestedSpeedKey: string;

declare function DRBurnSetProperties(burn: any, properties: NSDictionary<any, any>): void;

declare var DRBurnStatusChangedNotification: string;

declare var DRBurnStrategyBDDAO: string;

declare var DRBurnStrategyCDSAO: string;

declare var DRBurnStrategyCDTAO: string;

declare var DRBurnStrategyDVDDAO: string;

declare var DRBurnStrategyIsRequiredKey: string;

declare var DRBurnStrategyKey: string;

declare var DRBurnTestingKey: string;

declare var DRBurnUnderrunProtectionKey: string;

declare var DRBurnVerifyDiscKey: string;

declare function DRBurnWriteLayout(burn: any, layout: any): number;

declare var DRCDTextArrangerKey: string;

declare class DRCDTextBlock extends NSObject {

	static arrayOfCDTextBlocksFromPacks(_: NSData): NSArray<any>;

	static cdTextBlockWithLanguageEncoding(_: string, encoding: number): DRCDTextBlock;

	static create(language: string, encoding: number);

	encoding(): number;

	flatten(): number;

	language(): string;

	objectForKeyOfTrack(_: string, ofTrack: number): any;

	properties(): NSDictionary<any, any>;

	setObjectForKeyOfTrack(_: any, forKey: string, ofTrack: number): void;

	setProperties(_: NSDictionary<any, any>): void;

	setTrackDictionaries(_: NSArray<any>): void;

	trackDictionaries(): NSArray<any>;
}

declare function DRCDTextBlockCreate(language: string, encoding: number): any;

declare function DRCDTextBlockCreateArrayFromPackList(packs: NSData): NSArray<any>;

declare function DRCDTextBlockFlatten(block: any): number;

declare function DRCDTextBlockGetProperties(block: any): NSDictionary<any, any>;

declare function DRCDTextBlockGetTrackDictionaries(block: any): NSArray<any>;

declare function DRCDTextBlockGetTypeID(): number;

declare function DRCDTextBlockGetValue(block: any, trackIndex: number, key: string): any;

declare function DRCDTextBlockSetProperties(block: any, properties: NSDictionary<any, any>): void;

declare function DRCDTextBlockSetTrackDictionaries(block: any, array: NSArray<any> | any[]): void;

declare function DRCDTextBlockSetValue(block: any, trackIndex: number, key: string, value: any): void;

declare var DRCDTextCharacterCodeKey: string;

declare var DRCDTextClosedKey: string;

declare var DRCDTextComposerKey: string;

declare var DRCDTextCopyrightAssertedForNamesKey: string;

declare var DRCDTextCopyrightAssertedForSpecialMessagesKey: string;

declare var DRCDTextCopyrightAssertedForTitlesKey: string;

declare var DRCDTextDiscIdentKey: string;

declare const DRCDTextEncodingASCII: number;

declare const DRCDTextEncodingISOLatin1Modified: number;

declare const DRCDTextGenreCodeAdultContemporary: number;

declare const DRCDTextGenreCodeAlternativeRock: number;

declare const DRCDTextGenreCodeChildrens: number;

declare const DRCDTextGenreCodeClassical: number;

declare const DRCDTextGenreCodeContemporaryChristian: number;

declare const DRCDTextGenreCodeCountry: number;

declare const DRCDTextGenreCodeDance: number;

declare const DRCDTextGenreCodeEasyListening: number;

declare const DRCDTextGenreCodeErotic: number;

declare const DRCDTextGenreCodeFolk: number;

declare const DRCDTextGenreCodeGospel: number;

declare const DRCDTextGenreCodeHipHop: number;

declare const DRCDTextGenreCodeJazz: number;

declare var DRCDTextGenreCodeKey: string;

declare const DRCDTextGenreCodeLatin: number;

declare const DRCDTextGenreCodeMusical: number;

declare const DRCDTextGenreCodeNewAge: number;

declare const DRCDTextGenreCodeOpera: number;

declare const DRCDTextGenreCodeOperetta: number;

declare const DRCDTextGenreCodePop: number;

declare const DRCDTextGenreCodeRap: number;

declare const DRCDTextGenreCodeReggae: number;

declare const DRCDTextGenreCodeRhythmAndBlues: number;

declare const DRCDTextGenreCodeRock: number;

declare const DRCDTextGenreCodeSoundEffects: number;

declare const DRCDTextGenreCodeSoundtrack: number;

declare const DRCDTextGenreCodeSpokenWord: number;

declare const DRCDTextGenreCodeUnknown: number;

declare const DRCDTextGenreCodeWorldMusic: number;

declare var DRCDTextGenreKey: string;

declare var DRCDTextKey: string;

declare var DRCDTextLanguageKey: string;

declare var DRCDTextMCNISRCKey: string;

declare var DRCDTextNSStringEncodingKey: string;

declare var DRCDTextPerformerKey: string;

declare var DRCDTextSizeKey: string;

declare var DRCDTextSongwriterKey: string;

declare var DRCDTextSpecialMessageKey: string;

declare var DRCDTextTOC2Key: string;

declare var DRCDTextTOCKey: string;

declare var DRCDTextTitleKey: string;

declare var DRContentModificationDate: string;

declare function DRCopyDeviceArray(): NSArray<any>;

declare function DRCopyLocalizedStringForAdditionalSense(ASC: number, ASCQ: number): string;

declare function DRCopyLocalizedStringForDiscRecordingError(osError: number): string;

declare function DRCopyLocalizedStringForSenseCode(senseCode: number): string;

declare function DRCopyLocalizedStringForValue(value: string): string;

declare var DRCopyrightFile: string;

declare var DRCreationDate: string;

declare var DRDVDCopyrightInfoKey: string;

declare var DRDVDTimestampKey: string;

declare var DRDataFormKey: string;

declare var DRDataPreparer: string;

declare var DRDefaultDate: string;

declare class DRDevice extends NSObject {

	static deviceForBSDName(_: string): DRDevice;

	static deviceForIORegistryEntryPath(_: string): DRDevice;

	static devices(): NSArray<any>;

	acquireExclusiveAccess(): boolean;

	acquireMediaReservation(): void;

	bsdName(): string;

	closeTray(): boolean;

	displayName(): string;

	ejectMedia(): boolean;

	info(): NSDictionary<any, any>;

	ioRegistryEntryPath(): string;

	isEqualToDevice(_: DRDevice): boolean;

	isValid(): boolean;

	mediaIsAppendable(): boolean;

	mediaIsBlank(): boolean;

	mediaIsBusy(): boolean;

	mediaIsErasable(): boolean;

	mediaIsOverwritable(): boolean;

	mediaIsPresent(): boolean;

	mediaIsReserved(): boolean;

	mediaIsTransitioning(): boolean;

	mediaSpaceFree(): DRMSF;

	mediaSpaceOverwritable(): DRMSF;

	mediaSpaceUsed(): DRMSF;

	mediaType(): string;

	openTray(): boolean;

	releaseExclusiveAccess(): void;

	releaseMediaReservation(): void;

	status(): NSDictionary<any, any>;

	trayIsOpen(): boolean;

	writesCD(): boolean;

	writesDVD(): boolean;
}

declare function DRDeviceAcquireExclusiveAccess(device: any): number;

declare function DRDeviceAcquireMediaReservation(device: any): void;

declare var DRDeviceAppearedNotification: string;

declare var DRDeviceBurnSpeedBD1x: number;

declare var DRDeviceBurnSpeedCD1x: number;

declare var DRDeviceBurnSpeedDVD1x: number;

declare var DRDeviceBurnSpeedHDDVD1x: number;

declare var DRDeviceBurnSpeedMax: number;

declare var DRDeviceBurnSpeedsKey: string;

declare var DRDeviceCanTestWriteCDKey: string;

declare var DRDeviceCanTestWriteDVDKey: string;

declare var DRDeviceCanUnderrunProtectCDKey: string;

declare var DRDeviceCanUnderrunProtectDVDKey: string;

declare var DRDeviceCanWriteBDKey: string;

declare var DRDeviceCanWriteBDREKey: string;

declare var DRDeviceCanWriteBDRKey: string;

declare var DRDeviceCanWriteCDKey: string;

declare var DRDeviceCanWriteCDRKey: string;

declare var DRDeviceCanWriteCDRWKey: string;

declare var DRDeviceCanWriteCDRawKey: string;

declare var DRDeviceCanWriteCDSAOKey: string;

declare var DRDeviceCanWriteCDTAOKey: string;

declare var DRDeviceCanWriteCDTextKey: string;

declare var DRDeviceCanWriteDVDDAOKey: string;

declare var DRDeviceCanWriteDVDKey: string;

declare var DRDeviceCanWriteDVDPlusRDoubleLayerKey: string;

declare var DRDeviceCanWriteDVDPlusRKey: string;

declare var DRDeviceCanWriteDVDPlusRWDoubleLayerKey: string;

declare var DRDeviceCanWriteDVDPlusRWKey: string;

declare var DRDeviceCanWriteDVDRAMKey: string;

declare var DRDeviceCanWriteDVDRDualLayerKey: string;

declare var DRDeviceCanWriteDVDRKey: string;

declare var DRDeviceCanWriteDVDRWDualLayerKey: string;

declare var DRDeviceCanWriteDVDRWKey: string;

declare var DRDeviceCanWriteHDDVDKey: string;

declare var DRDeviceCanWriteHDDVDRAMKey: string;

declare var DRDeviceCanWriteHDDVDRDualLayerKey: string;

declare var DRDeviceCanWriteHDDVDRKey: string;

declare var DRDeviceCanWriteHDDVDRWDualLayerKey: string;

declare var DRDeviceCanWriteHDDVDRWKey: string;

declare var DRDeviceCanWriteISRCKey: string;

declare var DRDeviceCanWriteIndexPointsKey: string;

declare var DRDeviceCanWriteKey: string;

declare function DRDeviceCloseTray(device: any): number;

declare function DRDeviceCopyDeviceForBSDName(name: string): any;

declare function DRDeviceCopyDeviceForIORegistryEntryPath(path: string): any;

declare function DRDeviceCopyInfo(device: any): NSDictionary<any, any>;

declare function DRDeviceCopyStatus(device: any): NSDictionary<any, any>;

declare var DRDeviceCurrentWriteSpeedKey: string;

declare var DRDeviceDisappearedNotification: string;

declare function DRDeviceEjectMedia(device: any): number;

declare var DRDeviceFirmwareRevisionKey: string;

declare function DRDeviceGetTypeID(): number;

declare var DRDeviceIORegistryEntryPathKey: string;

declare var DRDeviceIsBusyKey: string;

declare var DRDeviceIsTrayOpenKey: string;

declare function DRDeviceIsValid(device: any): boolean;

declare function DRDeviceKPSForXFactor(deviceOrMediaType: any, xfactor: number): number;

declare var DRDeviceLoadingMechanismCanEjectKey: string;

declare var DRDeviceLoadingMechanismCanInjectKey: string;

declare var DRDeviceLoadingMechanismCanOpenKey: string;

declare var DRDeviceMaximumWriteSpeedKey: string;

declare var DRDeviceMediaBSDNameKey: string;

declare var DRDeviceMediaBlocksFreeKey: string;

declare var DRDeviceMediaBlocksOverwritableKey: string;

declare var DRDeviceMediaBlocksUsedKey: string;

declare var DRDeviceMediaClassBD: string;

declare var DRDeviceMediaClassCD: string;

declare var DRDeviceMediaClassDVD: string;

declare var DRDeviceMediaClassHDDVD: string;

declare var DRDeviceMediaClassKey: string;

declare var DRDeviceMediaClassUnknown: string;

declare var DRDeviceMediaDoubleLayerL0DataZoneBlocksKey: string;

declare var DRDeviceMediaFreeSpaceKey: string;

declare var DRDeviceMediaInfoKey: string;

declare var DRDeviceMediaIsAppendableKey: string;

declare var DRDeviceMediaIsBlankKey: string;

declare var DRDeviceMediaIsErasableKey: string;

declare var DRDeviceMediaIsOverwritableKey: string;

declare var DRDeviceMediaIsReservedKey: string;

declare var DRDeviceMediaOverwritableSpaceKey: string;

declare var DRDeviceMediaSessionCountKey: string;

declare var DRDeviceMediaStateInTransition: string;

declare var DRDeviceMediaStateKey: string;

declare var DRDeviceMediaStateMediaPresent: string;

declare var DRDeviceMediaStateNone: string;

declare var DRDeviceMediaTrackCountKey: string;

declare var DRDeviceMediaTypeBDR: string;

declare var DRDeviceMediaTypeBDRE: string;

declare var DRDeviceMediaTypeBDROM: string;

declare var DRDeviceMediaTypeCDR: string;

declare var DRDeviceMediaTypeCDROM: string;

declare var DRDeviceMediaTypeCDRW: string;

declare var DRDeviceMediaTypeDVDPlusR: string;

declare var DRDeviceMediaTypeDVDPlusRDoubleLayer: string;

declare var DRDeviceMediaTypeDVDPlusRW: string;

declare var DRDeviceMediaTypeDVDPlusRWDoubleLayer: string;

declare var DRDeviceMediaTypeDVDR: string;

declare var DRDeviceMediaTypeDVDRAM: string;

declare var DRDeviceMediaTypeDVDRDualLayer: string;

declare var DRDeviceMediaTypeDVDROM: string;

declare var DRDeviceMediaTypeDVDRW: string;

declare var DRDeviceMediaTypeDVDRWDualLayer: string;

declare var DRDeviceMediaTypeHDDVDR: string;

declare var DRDeviceMediaTypeHDDVDRAM: string;

declare var DRDeviceMediaTypeHDDVDRDualLayer: string;

declare var DRDeviceMediaTypeHDDVDROM: string;

declare var DRDeviceMediaTypeHDDVDRW: string;

declare var DRDeviceMediaTypeHDDVDRWDualLayer: string;

declare var DRDeviceMediaTypeKey: string;

declare var DRDeviceMediaTypeUnknown: string;

declare var DRDeviceMediaUsedSpaceKey: string;

declare function DRDeviceOpenTray(device: any): number;

declare var DRDevicePhysicalInterconnectATAPI: string;

declare var DRDevicePhysicalInterconnectFibreChannel: string;

declare var DRDevicePhysicalInterconnectFireWire: string;

declare var DRDevicePhysicalInterconnectKey: string;

declare var DRDevicePhysicalInterconnectLocationExternal: string;

declare var DRDevicePhysicalInterconnectLocationInternal: string;

declare var DRDevicePhysicalInterconnectLocationKey: string;

declare var DRDevicePhysicalInterconnectLocationUnknown: string;

declare var DRDevicePhysicalInterconnectSCSI: string;

declare var DRDevicePhysicalInterconnectUSB: string;

declare var DRDeviceProductNameKey: string;

declare function DRDeviceReleaseExclusiveAccess(device: any): void;

declare function DRDeviceReleaseMediaReservation(device: any): void;

declare var DRDeviceStatusChangedNotification: string;

declare var DRDeviceSupportLevelAppleShipping: string;

declare var DRDeviceSupportLevelAppleSupported: string;

declare var DRDeviceSupportLevelKey: string;

declare var DRDeviceSupportLevelNone: string;

declare var DRDeviceSupportLevelUnsupported: string;

declare var DRDeviceSupportLevelVendorSupported: string;

declare var DRDeviceTrackInfoKey: string;

declare var DRDeviceTrackRefsKey: string;

declare var DRDeviceVendorNameKey: string;

declare var DRDeviceWriteBufferSizeKey: string;

declare var DRDeviceWriteCapabilitiesKey: string;

declare function DRDeviceXFactorForKPS(deviceOrMediaType: any, kps: number): number;

declare var DREffectiveDate: string;

declare class DRErase extends NSObject {

	static eraseForDevice(_: DRDevice): DRErase;

	static create(device: DRDevice);

	device(): DRDevice;

	eraseType(): string;

	properties(): NSDictionary<any, any>;

	setEraseType(_: string): void;

	setProperties(_: NSDictionary<any, any>): void;

	start(): void;

	status(): NSDictionary<any, any>;
}

declare function DREraseCopyStatus(erase: any): NSDictionary<any, any>;

declare function DREraseCreate(device: any): any;

declare function DREraseGetDevice(erase: any): any;

declare function DREraseGetProperties(erase: any): NSDictionary<any, any>;

declare function DREraseGetTypeID(): number;

declare function DREraseSetProperties(erase: any, properties: NSDictionary<any, any>): void;

declare function DREraseStart(erase: any): number;

declare var DREraseStatusChangedNotification: string;

declare var DREraseTypeComplete: string;

declare var DREraseTypeKey: string;

declare var DREraseTypeQuick: string;

declare var DRErrorStatusAdditionalSenseStringKey: string;

declare var DRErrorStatusErrorInfoStringKey: string;

declare var DRErrorStatusErrorKey: string;

declare var DRErrorStatusErrorStringKey: string;

declare var DRErrorStatusKey: string;

declare var DRErrorStatusSenseCodeStringKey: string;

declare var DRErrorStatusSenseKey: string;

declare var DRExpirationDate: string;

declare class DRFSObject extends NSObject {

	baseName(): string;

	effectiveFilesystemMask(): number;

	explicitFilesystemMask(): number;

	isVirtual(): boolean;

	mangledNameForFilesystem(_: string): string;

	mangledNames(): NSDictionary<any, any>;

	parent(): DRFolder;

	propertiesForFilesystemMergeWithOtherFilesystems(_: string, mergeWithOtherFilesystems: boolean): NSDictionary<any, any>;

	propertyForKeyInFilesystemMergeWithOtherFilesystems(_: string, inFilesystem: string, mergeWithOtherFilesystems: boolean): any;

	setBaseName(_: string): void;

	setExplicitFilesystemMask(_: number): void;

	setPropertiesInFilesystem(_: NSDictionary<any, any>, inFilesystem: string): void;

	setPropertyForKeyInFilesystem(_: any, forKey: string, inFilesystem: string): void;

	setSpecificNameForFilesystem(_: string, forFilesystem: string): void;

	setSpecificNames(_: NSDictionary<any, any>): void;

	sourcePath(): string;

	specificNameForFilesystem(_: string): string;

	specificNames(): NSDictionary<any, any>;
}

declare function DRFSObjectCopyBaseName(object_: any): string;

declare function DRFSObjectCopyFilesystemProperties(object_: any, fsKey: string, coalesce: boolean): NSDictionary<any, any>;

declare function DRFSObjectCopyFilesystemProperty(object_: any, fsKey: string, propertyKey: string, coalesce: boolean): any;

declare function DRFSObjectCopyMangledName(object_: any, fsKey: string): string;

declare function DRFSObjectCopyMangledNames(object_: any): NSDictionary<any, any>;

declare function DRFSObjectCopyRealURL(object_: any): NSURL;

declare function DRFSObjectCopySpecificName(object_: any, fsKey: string): string;

declare function DRFSObjectCopySpecificNames(object_: any): NSDictionary<any, any>;

declare function DRFSObjectGetFilesystemMask(object_: any, explicitMask: number, effectiveMask: number): number;

declare function DRFSObjectGetParent(object_: any): any;

declare function DRFSObjectIsVirtual(object_: any): boolean;

declare function DRFSObjectSetBaseName(object_: any, baseName: string): void;

declare function DRFSObjectSetFilesystemMask(object_: any, newMask: number): void;

declare function DRFSObjectSetFilesystemProperties(object_: any, fsKey: string, properties: NSDictionary<any, any>): void;

declare function DRFSObjectSetFilesystemProperty(object_: any, fsKey: string, propertyKey: string, value: any): void;

declare function DRFSObjectSetSpecificName(object_: any, fsKey: string, specificName: string): void;

declare function DRFSObjectSetSpecificNames(object_: any, specificNames: NSDictionary<any, any>): void;

declare class DRFile extends DRFSObject {

	static fileWithPath(_: string): DRFile;

	static finderAliasPointingToInFilesystem(_: DRFSObject, inFilesystem: string): DRFile;

	static hardLinkPointingToInFilesystem(_: DRFile, inFilesystem: string): DRFile;

	static symLinkPointingToInFilesystem(_: DRFSObject, inFilesystem: string): DRFile;

	static virtualFileWithNameData(_: string, data: NSData): DRFile;

	static virtualFileWithNameDataProducer(_: string, dataProducer: any): DRFile;

	static create(linkType: string, pointingTo: DRFSObject, inFilesystem: string);

	static create(name: string, data: NSData);

	static create(name: string, dataProducer: any);

	static create(path: string);
}

declare function DRFileCreateRealWithURL(urlRef: NSURL): any;

declare function DRFileCreateVirtualLink(original: any, linkType: number, fsKey: string): any;

declare function DRFileCreateVirtualWithCallback(baseName: string, fileProc: (p1: any, p2: any, p3: number, p4: any) => number, fileProcRefCon: any): any;

declare function DRFileCreateVirtualWithData(baseName: string, fileData: any, fileDataLength: number): any;

interface DRFileDataProduction {

	calculateSizeOfFileForkEstimating(_: DRFile, fork: number, estimating: boolean): number;

	cleanupFileAfterBurn(_: DRFile): void;

	prepareFileForBurn(_: DRFile): boolean;

	prepareFileForVerification(_: DRFile): boolean;

	produceFileForkIntoBufferLengthAtAddressBlockSize(_: DRFile, fork: number, intoBuffer: string, length: number, atAddress: number, blockSize: number): number;
}
declare var DRFileDataProduction: {

	prototype: DRFileDataProduction;
};

declare const DRFileForkData: number;

declare const DRFileForkResource: number;

interface DRFileForkSizeInfo {
	fork: number;
	query: number;
	size: number;
}
declare var DRFileForkSizeInfo: DRFileForkSizeInfo;

declare function DRFileGetTypeID(): number;

interface DRFileProductionInfo {
	requestedAddress: number;
	buffer: any;
	reqCount: number;
	actCount: number;
	blockSize: number;
	fork: number;
}
declare var DRFileProductionInfo: DRFileProductionInfo;

declare const DRFilesystemInclusionMaskHFSPlus: number;

declare const DRFilesystemInclusionMaskISO9660: number;

declare const DRFilesystemInclusionMaskJoliet: number;

declare const DRFilesystemInclusionMaskUDF: number;

declare function DRFilesystemTrackCreate(rootFolder: any): any;

declare function DRFilesystemTrackEstimateOverhead(numBlocks: number, blockSize: number, fsMask: number): number;

declare const DRFlagSubchannelDataRequested: number;

declare class DRFolder extends DRFSObject {

	static folderWithPath(_: string): DRFolder;

	static virtualFolderWithName(_: string): DRFolder;

	static create(name: string);

	static create(path: string);

	addChild(_: DRFSObject): void;

	children(): NSArray<any>;

	count(): number;

	makeVirtual(): void;

	removeChild(_: DRFSObject): void;
}

declare function DRFolderAddChild(parent: any, newChild: any): void;

declare function DRFolderConvertRealToVirtual(realFolder: any): void;

declare function DRFolderCopyChildren(folder: any): NSArray<any>;

declare function DRFolderCountChildren(folder: any): number;

declare function DRFolderCreateRealWithURL(urlRef: NSURL): any;

declare function DRFolderCreateVirtual(baseName: string): any;

declare function DRFolderGetTypeID(): number;

declare function DRFolderRemoveChild(parent: any, child: any): void;

declare var DRFreeBlocksKey: string;

declare function DRGetRefCon(ref: any): any;

declare function DRGetVersion(): NumVersion;

declare var DRHFSPlus: string;

declare var DRHFSPlusCatalogNodeID: string;

declare var DRHFSPlusTextEncodingHint: string;

declare var DRISO9660: string;

declare var DRISO9660LevelOne: string;

declare var DRISO9660LevelTwo: string;

declare var DRISO9660VersionNumber: string;

declare var DRISOLevel: string;

declare var DRISOMacExtensions: string;

declare var DRISORockRidgeExtensions: string;

declare var DRIndexPointsKey: string;

declare var DRInvisible: string;

declare var DRJoliet: string;

declare var DRLinkTypeFinderAlias: string;

declare var DRLinkTypeHardLink: string;

declare var DRLinkTypeSymbolicLink: string;

declare class DRMSF extends NSNumber {

	static msf(): DRMSF;

	static msfWithFrames(_: number): DRMSF;

	static msfWithString(_: string): DRMSF;

	static create(frames: number);

	static create(string: string);

	description(): string;

	descriptionWithFormat(_: string): string;

	frames(): number;

	isEqualToMSF(_: DRMSF): boolean;

	minutes(): number;

	msfByAdding(_: DRMSF): DRMSF;

	msfBySubtracting(_: DRMSF): DRMSF;

	seconds(): number;

	sectors(): number;
}

declare class DRMSFFormatter extends NSFormatter {

	static create(format: string);

	format(): string;

	setFormat(_: string): void;
}

declare var DRMacExtendedFinderFlags: string;

declare var DRMacFileCreator: string;

declare var DRMacFileType: string;

declare var DRMacFinderFlags: string;

declare var DRMacFinderHideExtension: string;

declare var DRMacIconLocation: string;

declare var DRMacScrollPosition: string;

declare var DRMacWindowBounds: string;

declare var DRMacWindowView: string;

declare var DRMaxBurnSpeedKey: string;

declare var DRMediaCatalogNumberKey: string;

declare var DRNextWritableAddressKey: string;

declare class DRNotificationCenter extends NSObject {

	static currentRunLoopCenter(): DRNotificationCenter;

	addObserverSelectorNameObject(_: any, selector: string, name: string, object_: any): void;

	removeObserverNameObject(_: any, name: string, object_: any): void;
}

declare function DRNotificationCenterAddObserver(center: any, observer: any, callback: (p1: any, p2: any, p3: string, p4: any, p5: NSDictionary<any, any>) => void, name: string, object_: any): void;

declare function DRNotificationCenterCreate(): any;

declare function DRNotificationCenterCreateRunLoopSource(center: any): any;

declare function DRNotificationCenterGetTypeID(): number;

declare function DRNotificationCenterRemoveObserver(center: any, observer: any, name: string, object_: any): void;

declare var DRPosixFileMode: string;

declare var DRPosixGID: string;

declare var DRPosixUID: string;

declare var DRPreGapIsRequiredKey: string;

declare var DRPreGapLengthKey: string;

declare var DRPublisher: string;

declare var DRRecordingDate: string;

interface DRRefConCallbacks {
	version: number;
	retain: (p1: any) => any;
	release: (p1: any) => void;
}
declare var DRRefConCallbacks: DRRefConCallbacks;

declare var DRSCMSCopyrightFree: string;

declare var DRSCMSCopyrightProtectedCopy: string;

declare var DRSCMSCopyrightProtectedOriginal: string;

declare var DRSerialCopyManagementStateKey: string;

declare var DRSessionFormatKey: string;

declare var DRSessionNumberKey: string;

declare function DRSetRefCon(ref: any, refCon: any, callbacks: DRRefConCallbacks): void;

declare var DRStatusCurrentSessionKey: string;

declare var DRStatusCurrentSpeedKey: string;

declare var DRStatusCurrentTrackKey: string;

declare var DRStatusEraseTypeKey: string;

declare var DRStatusPercentCompleteKey: string;

declare var DRStatusProgressCurrentKPS: string;

declare var DRStatusProgressCurrentXFactor: string;

declare var DRStatusProgressInfoKey: string;

declare var DRStatusStateDone: string;

declare var DRStatusStateErasing: string;

declare var DRStatusStateFailed: string;

declare var DRStatusStateFinishing: string;

declare var DRStatusStateKey: string;

declare var DRStatusStateNone: string;

declare var DRStatusStatePreparing: string;

declare var DRStatusStateSessionClose: string;

declare var DRStatusStateSessionOpen: string;

declare var DRStatusStateTrackClose: string;

declare var DRStatusStateTrackOpen: string;

declare var DRStatusStateTrackWrite: string;

declare var DRStatusStateVerifying: string;

declare var DRStatusTotalSessionsKey: string;

declare var DRStatusTotalTracksKey: string;

declare var DRSubchannelDataFormKey: string;

declare var DRSubchannelDataFormNone: string;

declare var DRSubchannelDataFormPack: string;

declare var DRSubchannelDataFormRaw: string;

declare var DRSuppressMacSpecificFiles: string;

declare var DRSynchronousBehaviorKey: string;

declare var DRSystemIdentifier: string;

declare class DRTrack extends NSObject {

	static trackForAudioFile(_: string): DRTrack;

	static trackForAudioOfLengthProducer(_: DRMSF, producer: any): DRTrack;

	static trackForRootFolder(_: DRFolder): DRTrack;

	static create(producer: any);

	estimateLength(): number;

	length(): DRMSF;

	preGap(): DRMSF;

	properties(): NSDictionary<any, any>;

	setPreGap(_: DRMSF): void;

	setProperties(_: NSDictionary<any, any>): void;

	testProductionSpeedForInterval(_: number): number;

	testProductionSpeedForLength(_: number): number;
}

declare function DRTrackCreate(properties: NSDictionary<any, any>, callback: (p1: any, p2: number, p3: any) => number): any;

interface DRTrackDataProduction {

	cleanupTrackAfterBurn(_: DRTrack): void;

	cleanupTrackAfterVerification(_: DRTrack): boolean;

	estimateLengthOfTrack(_: DRTrack): number;

	prepareTrackForBurnToMedia(_: DRTrack, forBurn: DRBurn, toMedia: NSDictionary<any, any>): boolean;

	prepareTrackForVerification(_: DRTrack): boolean;

	produceDataForTrackIntoBufferLengthAtAddressBlockSizeIoFlags(_: DRTrack, intoBuffer: string, length: number, atAddress: number, blockSize: number, ioFlags: number): number;

	producePreGapForTrackIntoBufferLengthAtAddressBlockSizeIoFlags(_: DRTrack, intoBuffer: string, length: number, atAddress: number, blockSize: number, ioFlags: number): number;

	verifyDataForTrackInBufferLengthAtAddressBlockSizeIoFlags(_: DRTrack, inBuffer: string, length: number, atAddress: number, blockSize: number, ioFlags: number): boolean;

	verifyPreGapForTrackInBufferLengthAtAddressBlockSizeIoFlags(_: DRTrack, inBuffer: string, length: number, atAddress: number, blockSize: number, ioFlags: number): boolean;
}
declare var DRTrackDataProduction: {

	prototype: DRTrackDataProduction;
};

declare function DRTrackEstimateLength(track: any): number;

declare function DRTrackGetProperties(track: any): NSDictionary<any, any>;

declare function DRTrackGetTypeID(): number;

declare var DRTrackISRCKey: string;

declare var DRTrackIsEmptyKey: string;

declare var DRTrackLengthKey: string;

declare var DRTrackModeKey: string;

declare var DRTrackNumberKey: string;

declare var DRTrackPacketSizeKey: string;

declare var DRTrackPacketTypeFixed: string;

declare var DRTrackPacketTypeKey: string;

declare var DRTrackPacketTypeVariable: string;

interface DRTrackProductionInfo {
	buffer: any;
	reqCount: number;
	actCount: number;
	flags: number;
	blockSize: number;
	requestedAddress: number;
}
declare var DRTrackProductionInfo: DRTrackProductionInfo;

declare function DRTrackSetProperties(track: any, properties: NSDictionary<any, any>): void;

declare function DRTrackSpeedTest(track: any, howManyMilliseconds: number, howManyBytes: number): number;

declare var DRTrackStartAddressKey: string;

declare var DRTrackTypeClosed: string;

declare var DRTrackTypeIncomplete: string;

declare var DRTrackTypeInvisible: string;

declare var DRTrackTypeKey: string;

declare var DRTrackTypeReserved: string;

declare var DRUDF: string;

declare var DRUDFApplicationIdentifierSuffix: string;

declare var DRUDFExtendedFilePermissions: string;

declare var DRUDFInterchangeLevel: string;

declare var DRUDFMaxInterchangeLevel: string;

declare var DRUDFMaxVolumeSequenceNumber: string;

declare var DRUDFPrimaryVolumeDescriptorNumber: string;

declare var DRUDFRealTimeFile: string;

declare var DRUDFVersion102: string;

declare var DRUDFVersion150: string;

declare var DRUDFVolumeSequenceNumber: string;

declare var DRUDFVolumeSetIdentifier: string;

declare var DRUDFVolumeSetImplementationUse: string;

declare var DRUDFVolumeSetTimestamp: string;

declare var DRUDFWriteVersion: string;

declare var DRVerificationTypeChecksum: string;

declare var DRVerificationTypeKey: string;

declare var DRVerificationTypeNone: string;

declare var DRVerificationTypeProduceAgain: string;

declare var DRVerificationTypeReceiveData: string;

declare var DRVolumeCheckedDate: string;

declare var DRVolumeCreationDate: string;

declare var DRVolumeEffectiveDate: string;

declare var DRVolumeExpirationDate: string;

declare var DRVolumeModificationDate: string;

declare var DRVolumeSet: string;

declare var kDRAbstractFile: string;

declare var kDRAccessDate: string;

declare var kDRAllFilesystems: string;

declare var kDRApplicationIdentifier: string;

declare var kDRAttributeModificationDate: string;

declare const kDRAudioFileNotSupportedErr: number;

declare var kDRAudioFourChannelKey: string;

declare var kDRAudioPreEmphasisKey: string;

declare var kDRBackupDate: string;

declare const kDRBadLayoutErr: number;

declare var kDRBibliographicFile: string;

declare var kDRBlockSize: string;

declare const kDRBlockSizeAudio: number;

declare const kDRBlockSizeDVDData: number;

declare var kDRBlockSizeKey: string;

declare const kDRBlockSizeMode1Data: number;

declare const kDRBlockSizeMode2Data: number;

declare const kDRBlockSizeMode2Form1Data: number;

declare const kDRBlockSizeMode2Form2Data: number;

declare const kDRBlockTypeAudio: number;

declare const kDRBlockTypeDVDData: number;

declare var kDRBlockTypeKey: string;

declare const kDRBlockTypeMode1Data: number;

declare const kDRBlockTypeMode2Data: number;

declare const kDRBlockTypeMode2Form1Data: number;

declare const kDRBlockTypeMode2Form2Data: number;

declare var kDRBufferZone1DataKey: string;

declare var kDRBurnAppendableKey: string;

declare var kDRBurnCompletionActionEject: string;

declare var kDRBurnCompletionActionKey: string;

declare var kDRBurnCompletionActionMount: string;

declare var kDRBurnDoubleLayerL0DataZoneBlocksKey: string;

declare var kDRBurnFailureActionEject: string;

declare var kDRBurnFailureActionKey: string;

declare var kDRBurnFailureActionNone: string;

declare var kDRBurnKey: string;

declare const kDRBurnMediaWriteFailureErr: number;

declare const kDRBurnNotAllowedErr: number;

declare var kDRBurnOverwriteDiscKey: string;

declare const kDRBurnPowerCalibrationErr: number;

declare var kDRBurnRequestedSpeedKey: string;

declare var kDRBurnStatusChangedNotification: string;

declare var kDRBurnStrategyBDDAO: string;

declare var kDRBurnStrategyCDSAO: string;

declare var kDRBurnStrategyCDTAO: string;

declare var kDRBurnStrategyDVDDAO: string;

declare var kDRBurnStrategyIsRequiredKey: string;

declare var kDRBurnStrategyKey: string;

declare var kDRBurnTestingKey: string;

declare const kDRBurnUnderrunErr: number;

declare var kDRBurnUnderrunProtectionKey: string;

declare var kDRBurnVerifyDiscKey: string;

declare var kDRCDTextArrangerKey: string;

declare var kDRCDTextCFStringEncodingKey: string;

declare var kDRCDTextCharacterCodeKey: string;

declare var kDRCDTextClosedKey: string;

declare var kDRCDTextComposerKey: string;

declare var kDRCDTextCopyrightAssertedForNamesKey: string;

declare var kDRCDTextCopyrightAssertedForSpecialMessagesKey: string;

declare var kDRCDTextCopyrightAssertedForTitlesKey: string;

declare var kDRCDTextDiscIdentKey: string;

declare const kDRCDTextEncodingASCII: number;

declare const kDRCDTextEncodingISOLatin1Modified: number;

declare const kDRCDTextGenreCodeAdultContemporary: number;

declare const kDRCDTextGenreCodeAlternativeRock: number;

declare const kDRCDTextGenreCodeChildrens: number;

declare const kDRCDTextGenreCodeClassical: number;

declare const kDRCDTextGenreCodeContemporaryChristian: number;

declare const kDRCDTextGenreCodeCountry: number;

declare const kDRCDTextGenreCodeDance: number;

declare const kDRCDTextGenreCodeEasyListening: number;

declare const kDRCDTextGenreCodeErotic: number;

declare const kDRCDTextGenreCodeFolk: number;

declare const kDRCDTextGenreCodeGospel: number;

declare const kDRCDTextGenreCodeHipHop: number;

declare const kDRCDTextGenreCodeJazz: number;

declare var kDRCDTextGenreCodeKey: string;

declare const kDRCDTextGenreCodeLatin: number;

declare const kDRCDTextGenreCodeMusical: number;

declare const kDRCDTextGenreCodeNewAge: number;

declare const kDRCDTextGenreCodeOpera: number;

declare const kDRCDTextGenreCodeOperetta: number;

declare const kDRCDTextGenreCodePop: number;

declare const kDRCDTextGenreCodeRap: number;

declare const kDRCDTextGenreCodeReggae: number;

declare const kDRCDTextGenreCodeRhythmAndBlues: number;

declare const kDRCDTextGenreCodeRock: number;

declare const kDRCDTextGenreCodeSoundEffects: number;

declare const kDRCDTextGenreCodeSoundtrack: number;

declare const kDRCDTextGenreCodeSpokenWord: number;

declare const kDRCDTextGenreCodeUnknown: number;

declare const kDRCDTextGenreCodeWorldMusic: number;

declare var kDRCDTextGenreKey: string;

declare var kDRCDTextKey: string;

declare var kDRCDTextLanguageKey: string;

declare var kDRCDTextMCNISRCKey: string;

declare var kDRCDTextPerformerKey: string;

declare var kDRCDTextSizeKey: string;

declare var kDRCDTextSongwriterKey: string;

declare var kDRCDTextSpecialMessageKey: string;

declare var kDRCDTextTOC2Key: string;

declare var kDRCDTextTOCKey: string;

declare var kDRCDTextTitleKey: string;

declare var kDRContentModificationDate: string;

declare var kDRCopyrightFile: string;

declare var kDRCreationDate: string;

declare var kDRDVDCopyrightInfoKey: string;

declare var kDRDVDTimestampKey: string;

declare const kDRDataFormAudio: number;

declare const kDRDataFormDVDData: number;

declare var kDRDataFormKey: string;

declare const kDRDataFormMode1Data: number;

declare const kDRDataFormMode2Data: number;

declare const kDRDataFormMode2Form1Data: number;

declare const kDRDataFormMode2Form2Data: number;

declare var kDRDataPreparer: string;

declare const kDRDataProductionErr: number;

declare var kDRDefaultDate: string;

declare const kDRDeviceAccessErr: number;

declare var kDRDeviceAppearedNotification: string;

declare var kDRDeviceBurnSpeedBD1x: number;

declare var kDRDeviceBurnSpeedCD1x: number;

declare var kDRDeviceBurnSpeedDVD1x: number;

declare var kDRDeviceBurnSpeedHDDVD1x: number;

declare var kDRDeviceBurnSpeedMax: number;

declare var kDRDeviceBurnSpeedsKey: string;

declare const kDRDeviceBurnStrategyNotAvailableErr: number;

declare const kDRDeviceBusyErr: number;

declare var kDRDeviceCanTestWriteCDKey: string;

declare var kDRDeviceCanTestWriteDVDKey: string;

declare var kDRDeviceCanUnderrunProtectCDKey: string;

declare var kDRDeviceCanUnderrunProtectDVDKey: string;

declare var kDRDeviceCanWriteBDKey: string;

declare var kDRDeviceCanWriteBDREKey: string;

declare var kDRDeviceCanWriteBDRKey: string;

declare var kDRDeviceCanWriteCDKey: string;

declare var kDRDeviceCanWriteCDRKey: string;

declare var kDRDeviceCanWriteCDRWKey: string;

declare var kDRDeviceCanWriteCDRawKey: string;

declare var kDRDeviceCanWriteCDSAOKey: string;

declare var kDRDeviceCanWriteCDTAOKey: string;

declare var kDRDeviceCanWriteCDTextKey: string;

declare var kDRDeviceCanWriteDVDDAOKey: string;

declare var kDRDeviceCanWriteDVDKey: string;

declare var kDRDeviceCanWriteDVDPlusRDoubleLayerKey: string;

declare var kDRDeviceCanWriteDVDPlusRKey: string;

declare var kDRDeviceCanWriteDVDPlusRWDoubleLayerKey: string;

declare var kDRDeviceCanWriteDVDPlusRWKey: string;

declare var kDRDeviceCanWriteDVDRAMKey: string;

declare var kDRDeviceCanWriteDVDRDualLayerKey: string;

declare var kDRDeviceCanWriteDVDRKey: string;

declare var kDRDeviceCanWriteDVDRWDualLayerKey: string;

declare var kDRDeviceCanWriteDVDRWKey: string;

declare var kDRDeviceCanWriteHDDVDKey: string;

declare var kDRDeviceCanWriteHDDVDRAMKey: string;

declare var kDRDeviceCanWriteHDDVDRDualLayerKey: string;

declare var kDRDeviceCanWriteHDDVDRKey: string;

declare var kDRDeviceCanWriteHDDVDRWDualLayerKey: string;

declare var kDRDeviceCanWriteHDDVDRWKey: string;

declare var kDRDeviceCanWriteISRCKey: string;

declare var kDRDeviceCanWriteIndexPointsKey: string;

declare var kDRDeviceCanWriteKey: string;

declare const kDRDeviceCantWriteCDTextErr: number;

declare const kDRDeviceCantWriteISRCErr: number;

declare const kDRDeviceCantWriteIndexPointsErr: number;

declare const kDRDeviceCantWriteSCMSErr: number;

declare const kDRDeviceCommunicationErr: number;

declare var kDRDeviceCurrentWriteSpeedKey: string;

declare var kDRDeviceDisappearedNotification: string;

declare var kDRDeviceFirmwareRevisionKey: string;

declare var kDRDeviceIORegistryEntryPathKey: string;

declare const kDRDeviceInvalidErr: number;

declare var kDRDeviceIsBusyKey: string;

declare var kDRDeviceIsTrayOpenKey: string;

declare var kDRDeviceLoadingMechanismCanEjectKey: string;

declare var kDRDeviceLoadingMechanismCanInjectKey: string;

declare var kDRDeviceLoadingMechanismCanOpenKey: string;

declare var kDRDeviceMaximumWriteSpeedKey: string;

declare var kDRDeviceMediaBSDNameKey: string;

declare var kDRDeviceMediaBlocksFreeKey: string;

declare var kDRDeviceMediaBlocksOverwritableKey: string;

declare var kDRDeviceMediaBlocksUsedKey: string;

declare var kDRDeviceMediaClassBD: string;

declare var kDRDeviceMediaClassCD: string;

declare var kDRDeviceMediaClassDVD: string;

declare var kDRDeviceMediaClassHDDVD: string;

declare var kDRDeviceMediaClassKey: string;

declare var kDRDeviceMediaClassUnknown: string;

declare var kDRDeviceMediaDoubleLayerL0DataZoneBlocksKey: string;

declare var kDRDeviceMediaInfoKey: string;

declare var kDRDeviceMediaIsAppendableKey: string;

declare var kDRDeviceMediaIsBlankKey: string;

declare var kDRDeviceMediaIsErasableKey: string;

declare var kDRDeviceMediaIsOverwritableKey: string;

declare var kDRDeviceMediaIsReservedKey: string;

declare var kDRDeviceMediaSessionCountKey: string;

declare var kDRDeviceMediaStateInTransition: string;

declare var kDRDeviceMediaStateKey: string;

declare var kDRDeviceMediaStateMediaPresent: string;

declare var kDRDeviceMediaStateNone: string;

declare var kDRDeviceMediaTrackCountKey: string;

declare var kDRDeviceMediaTypeBDR: string;

declare var kDRDeviceMediaTypeBDRE: string;

declare var kDRDeviceMediaTypeBDROM: string;

declare var kDRDeviceMediaTypeCDR: string;

declare var kDRDeviceMediaTypeCDROM: string;

declare var kDRDeviceMediaTypeCDRW: string;

declare var kDRDeviceMediaTypeDVDPlusR: string;

declare var kDRDeviceMediaTypeDVDPlusRDoubleLayer: string;

declare var kDRDeviceMediaTypeDVDPlusRW: string;

declare var kDRDeviceMediaTypeDVDPlusRWDoubleLayer: string;

declare var kDRDeviceMediaTypeDVDR: string;

declare var kDRDeviceMediaTypeDVDRAM: string;

declare var kDRDeviceMediaTypeDVDRDualLayer: string;

declare var kDRDeviceMediaTypeDVDROM: string;

declare var kDRDeviceMediaTypeDVDRW: string;

declare var kDRDeviceMediaTypeDVDRWDualLayer: string;

declare var kDRDeviceMediaTypeHDDVDR: string;

declare var kDRDeviceMediaTypeHDDVDRAM: string;

declare var kDRDeviceMediaTypeHDDVDRDualLayer: string;

declare var kDRDeviceMediaTypeHDDVDROM: string;

declare var kDRDeviceMediaTypeHDDVDRW: string;

declare var kDRDeviceMediaTypeHDDVDRWDualLayer: string;

declare var kDRDeviceMediaTypeKey: string;

declare var kDRDeviceMediaTypeUnknown: string;

declare const kDRDeviceNotReadyErr: number;

declare const kDRDeviceNotSupportedErr: number;

declare var kDRDevicePhysicalInterconnectATAPI: string;

declare var kDRDevicePhysicalInterconnectFibreChannel: string;

declare var kDRDevicePhysicalInterconnectFireWire: string;

declare var kDRDevicePhysicalInterconnectKey: string;

declare var kDRDevicePhysicalInterconnectLocationExternal: string;

declare var kDRDevicePhysicalInterconnectLocationInternal: string;

declare var kDRDevicePhysicalInterconnectLocationKey: string;

declare var kDRDevicePhysicalInterconnectLocationUnknown: string;

declare var kDRDevicePhysicalInterconnectSCSI: string;

declare var kDRDevicePhysicalInterconnectUSB: string;

declare const kDRDevicePreGapLengthNotValidErr: number;

declare var kDRDeviceProductNameKey: string;

declare var kDRDeviceStatusChangedNotification: string;

declare var kDRDeviceSupportLevelAppleShipping: string;

declare var kDRDeviceSupportLevelAppleSupported: string;

declare var kDRDeviceSupportLevelKey: string;

declare var kDRDeviceSupportLevelNone: string;

declare var kDRDeviceSupportLevelUnsupported: string;

declare var kDRDeviceSupportLevelVendorSupported: string;

declare var kDRDeviceTrackInfoKey: string;

declare var kDRDeviceTrackRefsKey: string;

declare var kDRDeviceVendorNameKey: string;

declare var kDRDeviceWriteBufferSizeKey: string;

declare var kDRDeviceWriteCapabilitiesKey: string;

declare const kDRDoubleLayerL0AlreadySpecifiedErr: number;

declare const kDRDoubleLayerL0DataZoneBlocksParamErr: number;

declare var kDREffectiveDate: string;

declare var kDREraseStatusChangedNotification: string;

declare var kDREraseTypeComplete: string;

declare var kDREraseTypeKey: string;

declare var kDREraseTypeQuick: string;

declare var kDRErrorStatusAdditionalSenseStringKey: string;

declare var kDRErrorStatusErrorInfoStringKey: string;

declare var kDRErrorStatusErrorKey: string;

declare var kDRErrorStatusErrorStringKey: string;

declare var kDRErrorStatusKey: string;

declare var kDRErrorStatusSenseCodeStringKey: string;

declare var kDRErrorStatusSenseKey: string;

declare var kDRExpirationDate: string;

declare const kDRFileForkData: number;

declare const kDRFileForkResource: number;

declare const kDRFileForkSizeActual: number;

declare const kDRFileForkSizeEstimate: number;

declare const kDRFileLocationConflictErr: number;

declare const kDRFileMessageForkSize: number;

declare const kDRFileMessagePostBurn: number;

declare const kDRFileMessagePreBurn: number;

declare const kDRFileMessageProduceData: number;

declare const kDRFileMessageRelease: number;

declare const kDRFileMessageVerificationStarting: number;

declare const kDRFileModifiedDuringBurnErr: number;

declare const kDRFilesystemMaskDefault: number;

declare const kDRFilesystemMaskHFSPlus: number;

declare const kDRFilesystemMaskISO9660: number;

declare const kDRFilesystemMaskJoliet: number;

declare const kDRFilesystemMaskUDF: number;

declare const kDRFilesystemsNotSupportedErr: number;

declare const kDRFirstErr: number;

declare const kDRFlagNoMoreData: number;

declare const kDRFlagSubchannelDataRequested: number;

declare var kDRFreeBlocksKey: string;

declare const kDRFunctionNotSupportedErr: number;

declare var kDRHFSPlus: string;

declare var kDRHFSPlusCatalogNodeID: string;

declare var kDRHFSPlusTextEncodingHint: string;

declare var kDRISO9660: string;

declare var kDRISO9660LevelOne: string;

declare var kDRISO9660LevelTwo: string;

declare var kDRISO9660VersionNumber: string;

declare var kDRISOLevel: string;

declare var kDRISOMacExtensions: string;

declare var kDRISORockRidgeExtensions: string;

declare var kDRIndexPointsKey: string;

declare const kDRInternalErr: number;

declare const kDRInvalidIndexPointsErr: number;

declare var kDRInvisible: string;

declare var kDRJoliet: string;

declare const kDRLinkTypeFinderAlias: number;

declare const kDRLinkTypeHardLink: number;

declare const kDRLinkTypeSymbolicLink: number;

declare var kDRMacExtendedFinderFlags: string;

declare var kDRMacFileCreator: string;

declare var kDRMacFileType: string;

declare var kDRMacFinderFlags: string;

declare var kDRMacFinderHideExtension: string;

declare var kDRMacIconLocation: string;

declare var kDRMacScrollPosition: string;

declare var kDRMacWindowBounds: string;

declare var kDRMacWindowView: string;

declare var kDRMaxBurnSpeedKey: string;

declare const kDRMediaBusyErr: number;

declare var kDRMediaCatalogNumberKey: string;

declare const kDRMediaInvalidErr: number;

declare const kDRMediaNotBlankErr: number;

declare const kDRMediaNotErasableErr: number;

declare const kDRMediaNotPresentErr: number;

declare const kDRMediaNotSupportedErr: number;

declare const kDRMediaNotWritableErr: number;

declare var kDRNextWritableAddressKey: string;

declare var kDRPosixFileMode: string;

declare var kDRPosixGID: string;

declare var kDRPosixUID: string;

declare var kDRPreGapIsRequiredKey: string;

declare var kDRPreGapLengthKey: string;

declare var kDRPublisher: string;

declare var kDRRecordingDate: string;

declare var kDRRefConCFTypeCallbacks: DRRefConCallbacks;

declare var kDRSCMSCopyrightFree: string;

declare var kDRSCMSCopyrightProtectedCopy: string;

declare var kDRSCMSCopyrightProtectedOriginal: string;

declare var kDRSerialCopyManagementStateKey: string;

declare const kDRSessionFormatAudio: number;

declare const kDRSessionFormatCDI: number;

declare const kDRSessionFormatCDXA: number;

declare const kDRSessionFormatDVDData: number;

declare var kDRSessionFormatKey: string;

declare const kDRSessionFormatMode1Data: number;

declare var kDRSessionNumberKey: string;

declare const kDRSpeedTestAlreadyRunningErr: number;

declare var kDRStatusCurrentSessionKey: string;

declare var kDRStatusCurrentSpeedKey: string;

declare var kDRStatusCurrentTrackKey: string;

declare var kDRStatusEraseTypeKey: string;

declare var kDRStatusPercentCompleteKey: string;

declare var kDRStatusProgressCurrentKPS: string;

declare var kDRStatusProgressCurrentXFactor: string;

declare var kDRStatusProgressInfoKey: string;

declare var kDRStatusStateDone: string;

declare var kDRStatusStateErasing: string;

declare var kDRStatusStateFailed: string;

declare var kDRStatusStateFinishing: string;

declare var kDRStatusStateKey: string;

declare var kDRStatusStateNone: string;

declare var kDRStatusStatePreparing: string;

declare var kDRStatusStateSessionClose: string;

declare var kDRStatusStateSessionOpen: string;

declare var kDRStatusStateTrackClose: string;

declare var kDRStatusStateTrackOpen: string;

declare var kDRStatusStateTrackWrite: string;

declare var kDRStatusStateVerifying: string;

declare var kDRStatusTotalSessionsKey: string;

declare var kDRStatusTotalTracksKey: string;

declare var kDRSubchannelDataFormKey: string;

declare var kDRSubchannelDataFormNone: string;

declare var kDRSubchannelDataFormPack: string;

declare var kDRSubchannelDataFormRaw: string;

declare var kDRSuppressMacSpecificFiles: string;

declare var kDRSynchronousBehaviorKey: string;

declare var kDRSystemIdentifier: string;

declare const kDRTooManyNameConflictsErr: number;

declare const kDRTooManyTracksForDVDErr: number;

declare var kDRTrackISRCKey: string;

declare var kDRTrackIsEmptyKey: string;

declare var kDRTrackLengthKey: string;

declare const kDRTrackMessageEstimateLength: number;

declare const kDRTrackMessagePostBurn: number;

declare const kDRTrackMessagePreBurn: number;

declare const kDRTrackMessageProduceData: number;

declare const kDRTrackMessageProducePreGap: number;

declare const kDRTrackMessageVerificationDone: number;

declare const kDRTrackMessageVerificationStarting: number;

declare const kDRTrackMessageVerifyData: number;

declare const kDRTrackMessageVerifyPreGap: number;

declare const kDRTrackMode1Data: number;

declare const kDRTrackMode2Data: number;

declare const kDRTrackMode2Form1Data: number;

declare const kDRTrackMode2Form2Data: number;

declare const kDRTrackModeAudio: number;

declare const kDRTrackModeDVDData: number;

declare var kDRTrackModeKey: string;

declare var kDRTrackNumberKey: string;

declare var kDRTrackPacketSizeKey: string;

declare var kDRTrackPacketTypeFixed: string;

declare var kDRTrackPacketTypeKey: string;

declare var kDRTrackPacketTypeVariable: string;

declare const kDRTrackReusedErr: number;

declare var kDRTrackStartAddressKey: string;

declare var kDRTrackTypeClosed: string;

declare var kDRTrackTypeIncomplete: string;

declare var kDRTrackTypeInvisible: string;

declare var kDRTrackTypeKey: string;

declare var kDRTrackTypeReserved: string;

declare var kDRUDF: string;

declare var kDRUDFApplicationIdentifierSuffix: string;

declare var kDRUDFExtendedFilePermissions: string;

declare var kDRUDFInterchangeLevel: string;

declare var kDRUDFMaxInterchangeLevel: string;

declare var kDRUDFMaxVolumeSequenceNumber: string;

declare var kDRUDFPrimaryVolumeDescriptorNumber: string;

declare var kDRUDFRealTimeFile: string;

declare var kDRUDFVersion102: string;

declare var kDRUDFVersion150: string;

declare var kDRUDFVolumeSequenceNumber: string;

declare var kDRUDFVolumeSetIdentifier: string;

declare var kDRUDFVolumeSetImplementationUse: string;

declare var kDRUDFVolumeSetTimestamp: string;

declare var kDRUDFWriteVersion: string;

declare const kDRUserCanceledErr: number;

declare const kDRVerificationFailedErr: number;

declare var kDRVerificationTypeChecksum: string;

declare var kDRVerificationTypeKey: string;

declare var kDRVerificationTypeNone: string;

declare var kDRVerificationTypeProduceAgain: string;

declare var kDRVerificationTypeReceiveData: string;

declare var kDRVolumeCheckedDate: string;

declare var kDRVolumeCreationDate: string;

declare var kDRVolumeEffectiveDate: string;

declare var kDRVolumeExpirationDate: string;

declare var kDRVolumeModificationDate: string;

declare var kDRVolumeSet: string;
