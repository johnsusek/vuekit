
declare function AudioConvertHostTimeToNanos(inHostTime: number): number;

declare function AudioConvertNanosToHostTime(inNanos: number): number;

enum AudioDeviceClockAlgorithmSelector {

	kAudioDeviceClockAlgorithmRaw = 1918990199,

	kAudioDeviceClockAlgorithmSimpleIIR = 1768518246,

	kAudioDeviceClockAlgorithm12PtMovingWindowAverage = 1835103847
}


declare function AudioDeviceCreateIOProcID(inDevice: number, inProc: (p1: number, p2: AudioTimeStamp, p3: AudioBufferList, p4: AudioTimeStamp, p5: AudioBufferList, p6: AudioTimeStamp, p7: any) => number, inClientData: any, outIOProcID: (p1: number, p2: AudioTimeStamp, p3: AudioBufferList, p4: AudioTimeStamp, p5: AudioBufferList, p6: AudioTimeStamp, p7: any) => number): number;

declare function AudioDeviceCreateIOProcIDWithBlock(outIOProcID: (p1: number, p2: AudioTimeStamp, p3: AudioBufferList, p4: AudioTimeStamp, p5: AudioBufferList, p6: AudioTimeStamp, p7: any) => number, inDevice: number, inDispatchQueue: NSObject, inIOBlock: (p1: AudioTimeStamp, p2: AudioBufferList, p3: AudioTimeStamp, p4: AudioBufferList, p5: AudioTimeStamp) => void): number;

declare function AudioDeviceDestroyIOProcID(inDevice: number, inIOProcID: (p1: number, p2: AudioTimeStamp, p3: AudioBufferList, p4: AudioTimeStamp, p5: AudioBufferList, p6: AudioTimeStamp, p7: any) => number): number;

declare function AudioDeviceGetCurrentTime(inDevice: number, outTime: AudioTimeStamp): number;

declare function AudioDeviceGetNearestStartTime(inDevice: number, ioRequestedStartTime: AudioTimeStamp, inFlags: number): number;

declare function AudioDeviceStart(inDevice: number, inProcID: (p1: number, p2: AudioTimeStamp, p3: AudioBufferList, p4: AudioTimeStamp, p5: AudioBufferList, p6: AudioTimeStamp, p7: any) => number): number;

declare function AudioDeviceStartAtTime(inDevice: number, inProcID: (p1: number, p2: AudioTimeStamp, p3: AudioBufferList, p4: AudioTimeStamp, p5: AudioBufferList, p6: AudioTimeStamp, p7: any) => number, ioRequestedStartTime: AudioTimeStamp, inFlags: number): number;

declare function AudioDeviceStop(inDevice: number, inProcID: (p1: number, p2: AudioTimeStamp, p3: AudioBufferList, p4: AudioTimeStamp, p5: AudioBufferList, p6: AudioTimeStamp, p7: any) => number): number;

declare function AudioDeviceTranslateTime(inDevice: number, inTime: AudioTimeStamp, outTime: AudioTimeStamp): number;

declare function AudioGetCurrentHostTime(): number;

declare function AudioGetHostClockFrequency(): number;

declare function AudioGetHostClockMinimumTimeDelta(): number;

declare function AudioHardwareCreateAggregateDevice(inDescription: NSDictionary<any, any>, outDeviceID: number): number;

declare function AudioHardwareDestroyAggregateDevice(inDeviceID: number): number;

interface AudioHardwareIOProcStreamUsage {
	mIOProc: any;
	mNumberStreams: number;
	mStreamIsOn: number;
}
declare var AudioHardwareIOProcStreamUsage: AudioHardwareIOProcStreamUsage;

enum AudioHardwarePowerHint {

	kAudioHardwarePowerHintNone = 0,

	kAudioHardwarePowerHintFavorSavingPower = 1
}


declare function AudioHardwareUnload(): number;

declare function AudioObjectAddPropertyListener(inObjectID: number, inAddress: AudioObjectPropertyAddress, inListener: (p1: number, p2: number, p3: AudioObjectPropertyAddress, p4: any) => number, inClientData: any): number;

declare function AudioObjectAddPropertyListenerBlock(inObjectID: number, inAddress: AudioObjectPropertyAddress, inDispatchQueue: NSObject, inListener: (p1: number, p2: AudioObjectPropertyAddress) => void): number;

declare function AudioObjectGetPropertyData(inObjectID: number, inAddress: AudioObjectPropertyAddress, inQualifierDataSize: number, inQualifierData: any, ioDataSize: number, outData: any): number;

declare function AudioObjectGetPropertyDataSize(inObjectID: number, inAddress: AudioObjectPropertyAddress, inQualifierDataSize: number, inQualifierData: any, outDataSize: number): number;

declare function AudioObjectHasProperty(inObjectID: number, inAddress: AudioObjectPropertyAddress): boolean;

declare function AudioObjectIsPropertySettable(inObjectID: number, inAddress: AudioObjectPropertyAddress, outIsSettable: string | any): number;

interface AudioObjectPropertyAddress {
	mSelector: number;
	mScope: number;
	mElement: number;
}
declare var AudioObjectPropertyAddress: AudioObjectPropertyAddress;

declare function AudioObjectRemovePropertyListener(inObjectID: number, inAddress: AudioObjectPropertyAddress, inListener: (p1: number, p2: number, p3: AudioObjectPropertyAddress, p4: any) => number, inClientData: any): number;

declare function AudioObjectRemovePropertyListenerBlock(inObjectID: number, inAddress: AudioObjectPropertyAddress, inDispatchQueue: NSObject, inListener: (p1: number, p2: AudioObjectPropertyAddress) => void): number;

declare function AudioObjectSetPropertyData(inObjectID: number, inAddress: AudioObjectPropertyAddress, inQualifierDataSize: number, inQualifierData: any, inDataSize: number, inData: any): number;

declare function AudioObjectShow(inObjectID: number): void;

interface AudioServerPlugInClientInfo {
	mClientID: number;
	mProcessID: number;
	mIsNativeEndian: boolean;
	mBundleID: string;
}
declare var AudioServerPlugInClientInfo: AudioServerPlugInClientInfo;

interface AudioServerPlugInCustomPropertyInfo {
	mSelector: number;
	mPropertyDataType: number;
	mQualifierDataType: number;
}
declare var AudioServerPlugInCustomPropertyInfo: AudioServerPlugInCustomPropertyInfo;

interface AudioServerPlugInDriverInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	Initialize: (p1: AudioServerPlugInDriverInterface, p2: AudioServerPlugInHostInterface) => number;
	CreateDevice: (p1: AudioServerPlugInDriverInterface, p2: NSDictionary<any, any>, p3: AudioServerPlugInClientInfo, p4: number) => number;
	DestroyDevice: (p1: AudioServerPlugInDriverInterface, p2: number) => number;
	AddDeviceClient: (p1: AudioServerPlugInDriverInterface, p2: number, p3: AudioServerPlugInClientInfo) => number;
	RemoveDeviceClient: (p1: AudioServerPlugInDriverInterface, p2: number, p3: AudioServerPlugInClientInfo) => number;
	PerformDeviceConfigurationChange: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: any) => number;
	AbortDeviceConfigurationChange: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: any) => number;
	HasProperty: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: AudioObjectPropertyAddress) => boolean;
	IsPropertySettable: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: AudioObjectPropertyAddress, p5: string) => number;
	GetPropertyDataSize: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: AudioObjectPropertyAddress, p5: number, p6: any, p7: number) => number;
	GetPropertyData: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: AudioObjectPropertyAddress, p5: number, p6: any, p7: number, p8: number, p9: any) => number;
	SetPropertyData: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: AudioObjectPropertyAddress, p5: number, p6: any, p7: number, p8: any) => number;
	StartIO: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number) => number;
	StopIO: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number) => number;
	GetZeroTimeStamp: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: number, p5: number, p6: number) => number;
	WillDoIOOperation: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: number, p5: string, p6: string) => number;
	BeginIOOperation: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: number, p5: number, p6: AudioServerPlugInIOCycleInfo) => number;
	DoIOOperation: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: number, p5: number, p6: number, p7: AudioServerPlugInIOCycleInfo, p8: any, p9: any) => number;
	EndIOOperation: (p1: AudioServerPlugInDriverInterface, p2: number, p3: number, p4: number, p5: number, p6: AudioServerPlugInIOCycleInfo) => number;
}
declare var AudioServerPlugInDriverInterface: AudioServerPlugInDriverInterface;

interface AudioServerPlugInHostInterface {
	PropertiesChanged: (p1: AudioServerPlugInHostInterface, p2: number, p3: number, p4: AudioObjectPropertyAddress) => number;
	CopyFromStorage: (p1: AudioServerPlugInHostInterface, p2: string, p3: any) => number;
	WriteToStorage: (p1: AudioServerPlugInHostInterface, p2: string, p3: any) => number;
	DeleteFromStorage: (p1: AudioServerPlugInHostInterface, p2: string) => number;
	RequestDeviceConfigurationChange: (p1: AudioServerPlugInHostInterface, p2: number, p3: number, p4: any) => number;
}
declare var AudioServerPlugInHostInterface: AudioServerPlugInHostInterface;

interface AudioServerPlugInIOCycleInfo {
	mIOCycleCounter: number;
	mNominalIOBufferFrameSize: number;
	mCurrentTime: AudioTimeStamp;
	mInputTime: AudioTimeStamp;
	mOutputTime: AudioTimeStamp;
	mMasterHostTicksPerFrame: number;
	mDeviceHostTicksPerFrame: number;
}
declare var AudioServerPlugInIOCycleInfo: AudioServerPlugInIOCycleInfo;

enum AudioServerPlugInIOOperation {

	kAudioServerPlugInIOOperationThread = 1953002084,

	kAudioServerPlugInIOOperationCycle = 1668899692,

	kAudioServerPlugInIOOperationReadInput = 1919246692,

	kAudioServerPlugInIOOperationConvertInput = 1667853936,

	kAudioServerPlugInIOOperationProcessInput = 1885957744,

	kAudioServerPlugInIOOperationProcessOutput = 1886352756,

	kAudioServerPlugInIOOperationMixOutput = 1835628655,

	kAudioServerPlugInIOOperationProcessMix = 1886218616,

	kAudioServerPlugInIOOperationConvertMix = 1668114808,

	kAudioServerPlugInIOOperationWriteMix = 1919513701
}


interface AudioStreamRangedDescription {
	mFormat: AudioStreamBasicDescription;
	mSampleRateRange: AudioValueRange;
}
declare var AudioStreamRangedDescription: AudioStreamRangedDescription;

declare const kAudioAggregateDeviceClassID: number;

declare const kAudioAggregateDevicePropertyActiveSubDeviceList: number;

declare const kAudioAggregateDevicePropertyClockDevice: number;

declare const kAudioAggregateDevicePropertyComposition: number;

declare const kAudioAggregateDevicePropertyFullSubDeviceList: number;

declare const kAudioAggregateDevicePropertyMasterSubDevice: number;

declare const kAudioBooleanControlClassID: number;

declare const kAudioBooleanControlPropertyValue: number;

declare const kAudioBoxClassID: number;

declare const kAudioBoxPropertyAcquired: number;

declare const kAudioBoxPropertyAcquisitionFailed: number;

declare const kAudioBoxPropertyBoxUID: number;

declare const kAudioBoxPropertyClockDeviceList: number;

declare const kAudioBoxPropertyDeviceList: number;

declare const kAudioBoxPropertyHasAudio: number;

declare const kAudioBoxPropertyHasMIDI: number;

declare const kAudioBoxPropertyHasVideo: number;

declare const kAudioBoxPropertyIsProtected: number;

declare const kAudioBoxPropertyTransportType: number;

declare const kAudioClipLightControlClassID: number;

declare const kAudioClockDeviceClassID: number;

declare const kAudioClockDevicePropertyAvailableNominalSampleRates: number;

declare const kAudioClockDevicePropertyClockDomain: number;

declare const kAudioClockDevicePropertyControlList: number;

declare const kAudioClockDevicePropertyDeviceIsAlive: number;

declare const kAudioClockDevicePropertyDeviceIsRunning: number;

declare const kAudioClockDevicePropertyDeviceUID: number;

declare const kAudioClockDevicePropertyLatency: number;

declare const kAudioClockDevicePropertyNominalSampleRate: number;

declare const kAudioClockDevicePropertyTransportType: number;

declare const kAudioClockSourceControlClassID: number;

declare const kAudioClockSourceItemKindInternal: number;

declare const kAudioControlClassID: number;

declare const kAudioControlPropertyElement: number;

declare const kAudioControlPropertyScope: number;

declare const kAudioDataDestinationControlClassID: number;

declare const kAudioDataSourceControlClassID: number;

declare const kAudioDeviceClassID: number;

declare const kAudioDevicePermissionsError: number;

declare const kAudioDeviceProcessorOverload: number;

declare const kAudioDevicePropertyActualSampleRate: number;

declare const kAudioDevicePropertyAvailableNominalSampleRates: number;

declare const kAudioDevicePropertyBufferFrameSize: number;

declare const kAudioDevicePropertyBufferFrameSizeRange: number;

declare const kAudioDevicePropertyChannelNominalLineLevel: number;

declare const kAudioDevicePropertyChannelNominalLineLevelNameForIDCFString: number;

declare const kAudioDevicePropertyChannelNominalLineLevels: number;

declare const kAudioDevicePropertyClipLight: number;

declare const kAudioDevicePropertyClockAlgorithm: number;

declare const kAudioDevicePropertyClockDevice: number;

declare const kAudioDevicePropertyClockDomain: number;

declare const kAudioDevicePropertyClockIsStable: number;

declare const kAudioDevicePropertyClockSource: number;

declare const kAudioDevicePropertyClockSourceKindForID: number;

declare const kAudioDevicePropertyClockSourceNameForIDCFString: number;

declare const kAudioDevicePropertyClockSources: number;

declare const kAudioDevicePropertyConfigurationApplication: number;

declare const kAudioDevicePropertyDataSource: number;

declare const kAudioDevicePropertyDataSourceKindForID: number;

declare const kAudioDevicePropertyDataSourceNameForIDCFString: number;

declare const kAudioDevicePropertyDataSources: number;

declare const kAudioDevicePropertyDeviceCanBeDefaultDevice: number;

declare const kAudioDevicePropertyDeviceCanBeDefaultSystemDevice: number;

declare const kAudioDevicePropertyDeviceHasChanged: number;

declare const kAudioDevicePropertyDeviceIsAlive: number;

declare const kAudioDevicePropertyDeviceIsRunning: number;

declare const kAudioDevicePropertyDeviceIsRunningSomewhere: number;

declare const kAudioDevicePropertyDeviceUID: number;

declare const kAudioDevicePropertyHighPassFilterSetting: number;

declare const kAudioDevicePropertyHighPassFilterSettingNameForIDCFString: number;

declare const kAudioDevicePropertyHighPassFilterSettings: number;

declare const kAudioDevicePropertyHogMode: number;

declare const kAudioDevicePropertyIOCycleUsage: number;

declare const kAudioDevicePropertyIOProcStreamUsage: number;

declare const kAudioDevicePropertyIOStoppedAbnormally: number;

declare const kAudioDevicePropertyIcon: number;

declare const kAudioDevicePropertyIsHidden: number;

declare const kAudioDevicePropertyJackIsConnected: number;

declare const kAudioDevicePropertyLatency: number;

declare const kAudioDevicePropertyListenback: number;

declare const kAudioDevicePropertyModelUID: number;

declare const kAudioDevicePropertyMute: number;

declare const kAudioDevicePropertyNominalSampleRate: number;

declare const kAudioDevicePropertyPhantomPower: number;

declare const kAudioDevicePropertyPhaseInvert: number;

declare const kAudioDevicePropertyPlayThru: number;

declare const kAudioDevicePropertyPlayThruDestination: number;

declare const kAudioDevicePropertyPlayThruDestinationNameForIDCFString: number;

declare const kAudioDevicePropertyPlayThruDestinations: number;

declare const kAudioDevicePropertyPlayThruSolo: number;

declare const kAudioDevicePropertyPlayThruStereoPan: number;

declare const kAudioDevicePropertyPlayThruStereoPanChannels: number;

declare const kAudioDevicePropertyPlayThruVolumeDecibels: number;

declare const kAudioDevicePropertyPlayThruVolumeDecibelsToScalar: number;

declare const kAudioDevicePropertyPlayThruVolumeRangeDecibels: number;

declare const kAudioDevicePropertyPlayThruVolumeScalar: number;

declare const kAudioDevicePropertyPlayThruVolumeScalarToDecibels: number;

declare const kAudioDevicePropertyPlugIn: number;

declare const kAudioDevicePropertyPreferredChannelLayout: number;

declare const kAudioDevicePropertyPreferredChannelsForStereo: number;

declare const kAudioDevicePropertyRelatedDevices: number;

declare const kAudioDevicePropertySafetyOffset: number;

declare const kAudioDevicePropertySolo: number;

declare const kAudioDevicePropertyStereoPan: number;

declare const kAudioDevicePropertyStereoPanChannels: number;

declare const kAudioDevicePropertyStreamConfiguration: number;

declare const kAudioDevicePropertyStreams: number;

declare const kAudioDevicePropertySubMute: number;

declare const kAudioDevicePropertySubVolumeDecibels: number;

declare const kAudioDevicePropertySubVolumeDecibelsToScalar: number;

declare const kAudioDevicePropertySubVolumeRangeDecibels: number;

declare const kAudioDevicePropertySubVolumeScalar: number;

declare const kAudioDevicePropertySubVolumeScalarToDecibels: number;

declare const kAudioDevicePropertyTalkback: number;

declare const kAudioDevicePropertyTransportType: number;

declare const kAudioDevicePropertyUsesVariableBufferFrameSizes: number;

declare const kAudioDevicePropertyVolumeDecibels: number;

declare const kAudioDevicePropertyVolumeDecibelsToScalar: number;

declare const kAudioDevicePropertyVolumeRangeDecibels: number;

declare const kAudioDevicePropertyVolumeScalar: number;

declare const kAudioDevicePropertyVolumeScalarToDecibels: number;

declare const kAudioDevicePropertyZeroTimeStampPeriod: number;

declare const kAudioDeviceStartTimeDontConsultDeviceFlag: number;

declare const kAudioDeviceStartTimeDontConsultHALFlag: number;

declare const kAudioDeviceStartTimeIsInputFlag: number;

declare const kAudioDeviceTransportTypeAVB: number;

declare const kAudioDeviceTransportTypeAggregate: number;

declare const kAudioDeviceTransportTypeAirPlay: number;

declare const kAudioDeviceTransportTypeBluetooth: number;

declare const kAudioDeviceTransportTypeBluetoothLE: number;

declare const kAudioDeviceTransportTypeBuiltIn: number;

declare const kAudioDeviceTransportTypeDisplayPort: number;

declare const kAudioDeviceTransportTypeFireWire: number;

declare const kAudioDeviceTransportTypeHDMI: number;

declare const kAudioDeviceTransportTypePCI: number;

declare const kAudioDeviceTransportTypeThunderbolt: number;

declare const kAudioDeviceTransportTypeUSB: number;

declare const kAudioDeviceTransportTypeUnknown: number;

declare const kAudioDeviceTransportTypeVirtual: number;

declare const kAudioDeviceUnsupportedFormatError: number;

declare const kAudioEndPointClassID: number;

declare const kAudioEndPointDeviceClassID: number;

declare const kAudioEndPointDevicePropertyComposition: number;

declare const kAudioEndPointDevicePropertyEndPointList: number;

declare const kAudioEndPointDevicePropertyIsPrivate: number;

declare const kAudioHardwareBadDeviceError: number;

declare const kAudioHardwareBadObjectError: number;

declare const kAudioHardwareBadPropertySizeError: number;

declare const kAudioHardwareBadStreamError: number;

declare const kAudioHardwareIllegalOperationError: number;

declare const kAudioHardwareNoError: number;

declare const kAudioHardwareNotRunningError: number;

declare const kAudioHardwarePropertyBoxList: number;

declare const kAudioHardwarePropertyClockDeviceList: number;

declare const kAudioHardwarePropertyDefaultInputDevice: number;

declare const kAudioHardwarePropertyDefaultOutputDevice: number;

declare const kAudioHardwarePropertyDefaultSystemOutputDevice: number;

declare const kAudioHardwarePropertyDevices: number;

declare const kAudioHardwarePropertyHogModeIsAllowed: number;

declare const kAudioHardwarePropertyIsInitingOrExiting: number;

declare const kAudioHardwarePropertyMixStereoToMono: number;

declare const kAudioHardwarePropertyPlugInList: number;

declare const kAudioHardwarePropertyPowerHint: number;

declare const kAudioHardwarePropertyProcessIsAudible: number;

declare const kAudioHardwarePropertyProcessIsMaster: number;

declare const kAudioHardwarePropertyServiceRestarted: number;

declare const kAudioHardwarePropertySleepingIsAllowed: number;

declare const kAudioHardwarePropertyTranslateBundleIDToPlugIn: number;

declare const kAudioHardwarePropertyTranslateBundleIDToTransportManager: number;

declare const kAudioHardwarePropertyTranslateUIDToBox: number;

declare const kAudioHardwarePropertyTranslateUIDToClockDevice: number;

declare const kAudioHardwarePropertyTranslateUIDToDevice: number;

declare const kAudioHardwarePropertyTransportManagerList: number;

declare const kAudioHardwarePropertyUnloadingIsAllowed: number;

declare const kAudioHardwarePropertyUserIDChanged: number;

declare const kAudioHardwarePropertyUserSessionIsActiveOrHeadless: number;

declare const kAudioHardwareUnknownPropertyError: number;

declare const kAudioHardwareUnspecifiedError: number;

declare const kAudioHardwareUnsupportedOperationError: number;

declare const kAudioHighPassFilterControlClassID: number;

declare const kAudioJackControlClassID: number;

declare const kAudioLFEMuteControlClassID: number;

declare const kAudioLFEVolumeControlClassID: number;

declare const kAudioLevelControlClassID: number;

declare const kAudioLevelControlPropertyConvertDecibelsToScalar: number;

declare const kAudioLevelControlPropertyConvertScalarToDecibels: number;

declare const kAudioLevelControlPropertyDecibelRange: number;

declare const kAudioLevelControlPropertyDecibelValue: number;

declare const kAudioLevelControlPropertyScalarValue: number;

declare const kAudioLineLevelControlClassID: number;

declare const kAudioListenbackControlClassID: number;

declare const kAudioMuteControlClassID: number;

declare const kAudioObjectClassID: number;

declare const kAudioObjectClassIDWildcard: number;

declare const kAudioObjectPlugInObject: number;

declare const kAudioObjectPropertyBaseClass: number;

declare const kAudioObjectPropertyClass: number;

declare const kAudioObjectPropertyControlList: number;

declare const kAudioObjectPropertyCreator: number;

declare const kAudioObjectPropertyCustomPropertyInfoList: number;

declare const kAudioObjectPropertyElementCategoryName: number;

declare const kAudioObjectPropertyElementMaster: number;

declare const kAudioObjectPropertyElementName: number;

declare const kAudioObjectPropertyElementNumberName: number;

declare const kAudioObjectPropertyElementWildcard: number;

declare const kAudioObjectPropertyFirmwareVersion: number;

declare const kAudioObjectPropertyIdentify: number;

declare const kAudioObjectPropertyListenerAdded: number;

declare const kAudioObjectPropertyListenerRemoved: number;

declare const kAudioObjectPropertyManufacturer: number;

declare const kAudioObjectPropertyModelName: number;

declare const kAudioObjectPropertyName: number;

declare const kAudioObjectPropertyOwnedObjects: number;

declare const kAudioObjectPropertyOwner: number;

declare const kAudioObjectPropertyScopeGlobal: number;

declare const kAudioObjectPropertyScopeInput: number;

declare const kAudioObjectPropertyScopeOutput: number;

declare const kAudioObjectPropertyScopePlayThrough: number;

declare const kAudioObjectPropertyScopeWildcard: number;

declare const kAudioObjectPropertySelectorWildcard: number;

declare const kAudioObjectPropertySerialNumber: number;

declare const kAudioObjectSystemObject: number;

declare const kAudioObjectUnknown: number;

declare const kAudioPhantomPowerControlClassID: number;

declare const kAudioPhaseInvertControlClassID: number;

declare const kAudioPlugInClassID: number;

declare const kAudioPlugInCreateAggregateDevice: number;

declare const kAudioPlugInDestroyAggregateDevice: number;

declare const kAudioPlugInPropertyBoxList: number;

declare const kAudioPlugInPropertyBundleID: number;

declare const kAudioPlugInPropertyClockDeviceList: number;

declare const kAudioPlugInPropertyDeviceList: number;

declare const kAudioPlugInPropertyResourceBundle: number;

declare const kAudioPlugInPropertyTranslateUIDToBox: number;

declare const kAudioPlugInPropertyTranslateUIDToClockDevice: number;

declare const kAudioPlugInPropertyTranslateUIDToDevice: number;

declare const kAudioSelectorControlClassID: number;

declare const kAudioSelectorControlItemKindSpacer: number;

declare const kAudioSelectorControlPropertyAvailableItems: number;

declare const kAudioSelectorControlPropertyCurrentItem: number;

declare const kAudioSelectorControlPropertyItemKind: number;

declare const kAudioSelectorControlPropertyItemName: number;

declare const kAudioServerPlugInCustomPropertyDataTypeCFPropertyList: number;

declare const kAudioServerPlugInCustomPropertyDataTypeCFString: number;

declare const kAudioServerPlugInCustomPropertyDataTypeNone: number;

declare const kAudioServerPlugInHostClientID: number;

declare const kAudioSliderControlClassID: number;

declare const kAudioSliderControlPropertyRange: number;

declare const kAudioSliderControlPropertyValue: number;

declare const kAudioSoloControlClassID: number;

declare const kAudioStereoPanControlClassID: number;

declare const kAudioStereoPanControlPropertyPanningChannels: number;

declare const kAudioStereoPanControlPropertyValue: number;

declare const kAudioStreamClassID: number;

declare const kAudioStreamPropertyAvailablePhysicalFormats: number;

declare const kAudioStreamPropertyAvailableVirtualFormats: number;

declare const kAudioStreamPropertyDirection: number;

declare const kAudioStreamPropertyIsActive: number;

declare const kAudioStreamPropertyLatency: number;

declare const kAudioStreamPropertyPhysicalFormat: number;

declare const kAudioStreamPropertyStartingChannel: number;

declare const kAudioStreamPropertyTerminalType: number;

declare const kAudioStreamPropertyVirtualFormat: number;

declare const kAudioStreamTerminalTypeDigitalAudioInterface: number;

declare const kAudioStreamTerminalTypeDisplayPort: number;

declare const kAudioStreamTerminalTypeHDMI: number;

declare const kAudioStreamTerminalTypeHeadphones: number;

declare const kAudioStreamTerminalTypeHeadsetMicrophone: number;

declare const kAudioStreamTerminalTypeLFESpeaker: number;

declare const kAudioStreamTerminalTypeLine: number;

declare const kAudioStreamTerminalTypeMicrophone: number;

declare const kAudioStreamTerminalTypeReceiverMicrophone: number;

declare const kAudioStreamTerminalTypeReceiverSpeaker: number;

declare const kAudioStreamTerminalTypeSpeaker: number;

declare const kAudioStreamTerminalTypeTTY: number;

declare const kAudioStreamTerminalTypeUnknown: number;

declare const kAudioSubDeviceClassID: number;

declare const kAudioSubDeviceDriftCompensationHighQuality: number;

declare const kAudioSubDeviceDriftCompensationLowQuality: number;

declare const kAudioSubDeviceDriftCompensationMaxQuality: number;

declare const kAudioSubDeviceDriftCompensationMediumQuality: number;

declare const kAudioSubDeviceDriftCompensationMinQuality: number;

declare const kAudioSubDevicePropertyDriftCompensation: number;

declare const kAudioSubDevicePropertyDriftCompensationQuality: number;

declare const kAudioSubDevicePropertyExtraLatency: number;

declare const kAudioSystemObjectClassID: number;

declare const kAudioTalkbackControlClassID: number;

declare const kAudioTransportManagerClassID: number;

declare const kAudioTransportManagerCreateEndPointDevice: number;

declare const kAudioTransportManagerDestroyEndPointDevice: number;

declare const kAudioTransportManagerPropertyEndPointList: number;

declare const kAudioTransportManagerPropertyTranslateUIDToEndPoint: number;

declare const kAudioTransportManagerPropertyTransportType: number;

declare const kAudioVolumeControlClassID: number;
