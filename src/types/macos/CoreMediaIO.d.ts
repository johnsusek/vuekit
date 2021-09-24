interface CMIODeviceAVCCommand {
  mCommand: string;
  mCommandLength: number;
  mResponse: string;
  mResponseLength: number;
  mResponseUsed: number;
}

declare var CMIODeviceAVCCommand: CMIODeviceAVCCommand;

declare function CMIODeviceProcessAVCCommand(deviceID: number, ioAVCCommand: CMIODeviceAVCCommand): number;
declare function CMIODeviceProcessRS422Command(deviceID: number, ioRS422Command: CMIODeviceRS422Command): number;
interface CMIODeviceRS422Command {
  mCommand: string;
  mCommandLength: number;
  mResponse: string;
  mResponseLength: number;
  mResponseUsed: number;
}

declare var CMIODeviceRS422Command: CMIODeviceRS422Command;

interface CMIODeviceSMPTETimeCallback {
  mGetSMPTETimeProc: (p1: any, p2: number, p3: string, p4: number) => number;
  mRefCon: any;
}

declare var CMIODeviceSMPTETimeCallback: CMIODeviceSMPTETimeCallback;

declare function CMIODeviceStartStream(deviceID: number, streamID: number): number;
declare function CMIODeviceStopStream(deviceID: number, streamID: number): number;
interface CMIODeviceStreamConfiguration {
  mNumberStreams: number;
  mNumberChannels: number;
}

declare var CMIODeviceStreamConfiguration: CMIODeviceStreamConfiguration;

interface CMIOHardwarePlugInInterface {
  _reserved: any;
  QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
  AddRef: (p1: any) => number;
  Release: (p1: any) => number;
  Initialize: (p1: CMIOHardwarePlugInInterface) => number;
  InitializeWithObjectID: (p1: CMIOHardwarePlugInInterface, p2: number) => number;
  Teardown: (p1: CMIOHardwarePlugInInterface) => number;
  ObjectShow: (p1: CMIOHardwarePlugInInterface, p2: number) => void;
  ObjectHasProperty: (p1: CMIOHardwarePlugInInterface, p2: number, p3: CMIOObjectPropertyAddress) => boolean;
  ObjectIsPropertySettable: (p1: CMIOHardwarePlugInInterface, p2: number, p3: CMIOObjectPropertyAddress, p4: string) => number;
  ObjectGetPropertyDataSize: (p1: CMIOHardwarePlugInInterface, p2: number, p3: CMIOObjectPropertyAddress, p4: number, p5: any, p6: number) => number;
  ObjectGetPropertyData: (p1: CMIOHardwarePlugInInterface, p2: number, p3: CMIOObjectPropertyAddress, p4: number, p5: any, p6: number, p7: number, p8: any) => number;
  ObjectSetPropertyData: (p1: CMIOHardwarePlugInInterface, p2: number, p3: CMIOObjectPropertyAddress, p4: number, p5: any, p6: number, p7: any) => number;
  DeviceSuspend: (p1: CMIOHardwarePlugInInterface, p2: number) => number;
  DeviceResume: (p1: CMIOHardwarePlugInInterface, p2: number) => number;
  DeviceStartStream: (p1: CMIOHardwarePlugInInterface, p2: number, p3: number) => number;
  DeviceStopStream: (p1: CMIOHardwarePlugInInterface, p2: number, p3: number) => number;
  DeviceProcessAVCCommand: (p1: CMIOHardwarePlugInInterface, p2: number, p3: CMIODeviceAVCCommand) => number;
  DeviceProcessRS422Command: (p1: CMIOHardwarePlugInInterface, p2: number, p3: CMIODeviceRS422Command) => number;
  StreamCopyBufferQueue: (p1: CMIOHardwarePlugInInterface, p2: number, p3: (p1: number, p2: any, p3: any) => void, p4: any, p5: any) => number;
  StreamDeckPlay: (p1: CMIOHardwarePlugInInterface, p2: number) => number;
  StreamDeckStop: (p1: CMIOHardwarePlugInInterface, p2: number) => number;
  StreamDeckJog: (p1: CMIOHardwarePlugInInterface, p2: number, p3: number) => number;
  StreamDeckCueTo: (p1: CMIOHardwarePlugInInterface, p2: number, p3: number, p4: boolean) => number;
}

declare var CMIOHardwarePlugInInterface: CMIOHardwarePlugInInterface;

declare function CMIOObjectAddPropertyListener(objectID: number, address: CMIOObjectPropertyAddress, listener: (p1: number, p2: number, p3: CMIOObjectPropertyAddress, p4: any) => number, clientData: any): number;
declare function CMIOObjectAddPropertyListenerBlock(objectID: number, address: CMIOObjectPropertyAddress, dispatchQueue: NSObject, listener: (p1: number, p2: CMIOObjectPropertyAddress) => void): number;
declare function CMIOObjectCreate(owningPlugIn: CMIOHardwarePlugInInterface, owningObjectID: number, classID: number, objectID: number): number;
declare function CMIOObjectGetPropertyData(objectID: number, address: CMIOObjectPropertyAddress, qualifierDataSize: number, qualifierData: any, dataSize: number, dataUsed: number, data: any): number;
declare function CMIOObjectGetPropertyDataSize(objectID: number, address: CMIOObjectPropertyAddress, qualifierDataSize: number, qualifierData: any, dataSize: number): number;
declare function CMIOObjectHasProperty(objectID: number, address: CMIOObjectPropertyAddress): boolean;
declare function CMIOObjectIsPropertySettable(objectID: number, address: CMIOObjectPropertyAddress, isSettable: string | any): number;
declare function CMIOObjectPropertiesChanged(owningPlugIn: CMIOHardwarePlugInInterface, objectID: number, numberAddresses: number, addresses: CMIOObjectPropertyAddress): number;
interface CMIOObjectPropertyAddress {
  mSelector: number;
  mScope: number;
  mElement: number;
}

declare var CMIOObjectPropertyAddress: CMIOObjectPropertyAddress;

declare function CMIOObjectRemovePropertyListener(objectID: number, address: CMIOObjectPropertyAddress, listener: (p1: number, p2: number, p3: CMIOObjectPropertyAddress, p4: any) => number, clientData: any): number;
declare function CMIOObjectRemovePropertyListenerBlock(objectID: number, address: CMIOObjectPropertyAddress, dispatchQueue: NSObject, listener: (p1: number, p2: CMIOObjectPropertyAddress) => void): number;
declare function CMIOObjectSetPropertyData(objectID: number, address: CMIOObjectPropertyAddress, qualifierDataSize: number, qualifierData: any, dataSize: number, data: any): number;
declare function CMIOObjectShow(objectID: number): void;
declare function CMIOObjectsPublishedAndDied(owningPlugIn: CMIOHardwarePlugInInterface, owningObjectID: number, numberPublishedCMIOObjects: number, publishedCMIOObjects: number, numberDeadCMIOObjects: number, deadCMIOObjects: number): number;
declare function CMIOSampleBufferCopyNonRequiredAttachments(sourceSBuf: any, destSBuf: any, attachmentMode: number): number;
declare function CMIOSampleBufferCopySampleAttachments(sourceSBuf: any, destSBuf: any): number;
declare function CMIOSampleBufferCreate(allocator: any, dataBuffer: any, formatDescription: any, numSamples: number, numSampleTimingEntries: number, sampleTimingArray: CMSampleTimingInfo, numSampleSizeEntries: number, sampleSizeArray: number, sequenceNumber: number, discontinuityFlags: number, sBufOut: any): number;
declare function CMIOSampleBufferCreateForImageBuffer(allocator: any, imageBuffer: any, formatDescription: any, sampleTiming: CMSampleTimingInfo, sequenceNumber: number, discontinuityFlags: number, sBufOut: any): number;
declare function CMIOSampleBufferCreateNoDataMarker(allocator: any, noDataEvent: number, formatDescription: any, sequenceNumber: number, discontinuityFlags: number, sBufOut: any): number;
declare function CMIOSampleBufferGetDiscontinuityFlags(sbuf: any): number;
declare function CMIOSampleBufferGetSequenceNumber(sbuf: any): number;
declare function CMIOSampleBufferSetDiscontinuityFlags(allocator: any, sbuf: any, discontinuityFlags: number): void;
declare function CMIOSampleBufferSetSequenceNumber(allocator: any, sbuf: any, sequenceNumber: number): void;
declare function CMIOStreamClockConvertHostTimeToDeviceTime(hostTime: number, clock: any): CMTime;
declare function CMIOStreamClockCreate(allocator: any, clockName: NSObject, sourceIdentifier: any, getTimeCallMinimumInterval: CMTime, numberOfEventsForRateSmoothing: number, numberOfAveragesForRateSmoothing: number, clock: any): number;
declare function CMIOStreamClockInvalidate(clock: any): number;
declare function CMIOStreamClockPostTimingEvent(eventTime: CMTime, hostTime: number, resynchronize: boolean, clock: any): number;
declare function CMIOStreamCopyBufferQueue(streamID: number, queueAlteredProc: (p1: number, p2: any, p3: any) => void, queueAlteredRefCon: any, queue: any): number;
interface CMIOStreamDeck {
  mStatus: number;
  mState: number;
  mState2: number;
}

declare var CMIOStreamDeck: CMIOStreamDeck;

declare function CMIOStreamDeckCueTo(streamID: number, frameNumber: number, playOnCue: boolean): number;
declare function CMIOStreamDeckJog(streamID: number, speed: number): number;
declare function CMIOStreamDeckPlay(streamID: number): number;
declare function CMIOStreamDeckStop(streamID: number): number;
interface CMIOStreamScheduledOutputNotificationProcAndRefCon {
  scheduledOutputNotificationProc: (p1: number, p2: number, p3: any) => void;
  scheduledOutputNotificationRefCon: any;
}

declare var CMIOStreamScheduledOutputNotificationProcAndRefCon: CMIOStreamScheduledOutputNotificationProcAndRefCon;


declare const kCMIOAVCDeviceType_DVCPro100_720p: number;

declare const kCMIOAVCDeviceType_DVCPro100_NTSC: number;

declare const kCMIOAVCDeviceType_DVCPro100_PAL: number;

declare const kCMIOAVCDeviceType_DVCPro50_NTSC: number;

declare const kCMIOAVCDeviceType_DVCPro50_PAL: number;

declare const kCMIOAVCDeviceType_DVCProHD_1080i50: number;

declare const kCMIOAVCDeviceType_DVCProHD_1080i60: number;

declare const kCMIOAVCDeviceType_DVCPro_NTSC: number;

declare const kCMIOAVCDeviceType_DVCPro_PAL: number;

declare const kCMIOAVCDeviceType_DV_NTSC: number;

declare const kCMIOAVCDeviceType_DV_PAL: number;

declare const kCMIOAVCDeviceType_MPEG2: number;

declare const kCMIOAVCDeviceType_Unknown: number;

declare const kCMIOBacklightCompensationControlClassID: number;

declare const kCMIOBlackLevelControlClassID: number;
declare var kCMIOBlockBufferAttachmentKey_CVPixelBufferReference: NSObject;


declare const kCMIOBooleanControlClassID: number;

declare const kCMIOBooleanControlPropertyValue: number;

declare const kCMIOBrightnessControlClassID: number;

declare const kCMIOContrastControlClassID: number;

declare const kCMIOControlClassID: number;

declare const kCMIOControlPropertyElement: number;

declare const kCMIOControlPropertyScope: number;

declare const kCMIOControlPropertyVariant: number;

declare const kCMIODataDestinationControlClassID: number;

declare const kCMIODataSourceControlClassID: number;

declare const kCMIODeckShuttlePause: number;

declare const kCMIODeckShuttlePlay1x: number;

declare const kCMIODeckShuttlePlayFast: number;

declare const kCMIODeckShuttlePlayFaster: number;

declare const kCMIODeckShuttlePlayFastest: number;

declare const kCMIODeckShuttlePlayHighSpeed: number;

declare const kCMIODeckShuttlePlayNextFrame: number;

declare const kCMIODeckShuttlePlayPreviousFrame: number;

declare const kCMIODeckShuttlePlaySlow1: number;

declare const kCMIODeckShuttlePlaySlow2: number;

declare const kCMIODeckShuttlePlaySlow3: number;

declare const kCMIODeckShuttlePlaySlowest: number;

declare const kCMIODeckShuttleReverse1x: number;

declare const kCMIODeckShuttleReverseFast: number;

declare const kCMIODeckShuttleReverseFaster: number;

declare const kCMIODeckShuttleReverseFastest: number;

declare const kCMIODeckShuttleReverseHighSpeed: number;

declare const kCMIODeckShuttleReverseSlow1: number;

declare const kCMIODeckShuttleReverseSlow2: number;

declare const kCMIODeckShuttleReverseSlow3: number;

declare const kCMIODeckShuttleReverseSlowest: number;

declare const kCMIODeckStateFastForward: number;

declare const kCMIODeckStateFastRewind: number;

declare const kCMIODeckStatePause: number;

declare const kCMIODeckStatePlay: number;

declare const kCMIODeckStatePlayReverse: number;

declare const kCMIODeckStatePlaySlow: number;

declare const kCMIODeckStateReverseSlow: number;

declare const kCMIODeckStateStop: number;

declare const kCMIODeckStatusBusy: number;

declare const kCMIODeckStatusLocal: number;

declare const kCMIODeckStatusNoDevice: number;

declare const kCMIODeckStatusNotThreaded: number;

declare const kCMIODeckStatusOpcode: number;

declare const kCMIODeckStatusSearchingForDevice: number;

declare const kCMIODeckStatusTapeInserted: number;

declare const kCMIODeviceAVCSignalMode8mmNTSC: number;

declare const kCMIODeviceAVCSignalMode8mmPAL: number;

declare const kCMIODeviceAVCSignalModeAudio: number;

declare const kCMIODeviceAVCSignalModeDVCPro100_50: number;

declare const kCMIODeviceAVCSignalModeDVCPro100_60: number;

declare const kCMIODeviceAVCSignalModeDVCPro25_525_60: number;

declare const kCMIODeviceAVCSignalModeDVCPro25_625_50: number;

declare const kCMIODeviceAVCSignalModeDVCPro50_525_60: number;

declare const kCMIODeviceAVCSignalModeDVCPro50_625_50: number;

declare const kCMIODeviceAVCSignalModeDVHS: number;

declare const kCMIODeviceAVCSignalModeHD1125_60: number;

declare const kCMIODeviceAVCSignalModeHD1250_50: number;

declare const kCMIODeviceAVCSignalModeHDV1_50: number;

declare const kCMIODeviceAVCSignalModeHDV1_60: number;

declare const kCMIODeviceAVCSignalModeHDV2_50: number;

declare const kCMIODeviceAVCSignalModeHDV2_60: number;

declare const kCMIODeviceAVCSignalModeHi8NTSC: number;

declare const kCMIODeviceAVCSignalModeHi8PAL: number;

declare const kCMIODeviceAVCSignalModeMPEG12Mbps_50: number;

declare const kCMIODeviceAVCSignalModeMPEG12Mbps_60: number;

declare const kCMIODeviceAVCSignalModeMPEG25Mbps_50: number;

declare const kCMIODeviceAVCSignalModeMPEG25Mbps_60: number;

declare const kCMIODeviceAVCSignalModeMPEG6Mbps_50: number;

declare const kCMIODeviceAVCSignalModeMPEG6Mbps_60: number;

declare const kCMIODeviceAVCSignalModeMicroMV12Mbps_50: number;

declare const kCMIODeviceAVCSignalModeMicroMV12Mbps_60: number;

declare const kCMIODeviceAVCSignalModeMicroMV6Mbps_50: number;

declare const kCMIODeviceAVCSignalModeMicroMV6Mbps_60: number;

declare const kCMIODeviceAVCSignalModeSD525_60: number;

declare const kCMIODeviceAVCSignalModeSD625_50: number;

declare const kCMIODeviceAVCSignalModeSDL525_60: number;

declare const kCMIODeviceAVCSignalModeSDL625_50: number;

declare const kCMIODeviceAVCSignalModeSVHS525_60: number;

declare const kCMIODeviceAVCSignalModeSVHS625_50: number;

declare const kCMIODeviceAVCSignalModeVHSMESECAM: number;

declare const kCMIODeviceAVCSignalModeVHSMPAL: number;

declare const kCMIODeviceAVCSignalModeVHSNPAL: number;

declare const kCMIODeviceAVCSignalModeVHSNTSC: number;

declare const kCMIODeviceAVCSignalModeVHSPAL: number;

declare const kCMIODeviceAVCSignalModeVHSSECAM: number;

declare const kCMIODeviceClassID: number;

declare const kCMIODevicePermissionsError: number;

declare const kCMIODevicePropertyAVCDeviceSignalMode: number;

declare const kCMIODevicePropertyAVCDeviceType: number;

declare const kCMIODevicePropertyCanProcessAVCCommand: number;

declare const kCMIODevicePropertyCanProcessRS422Command: number;

declare const kCMIODevicePropertyCanSwitchFrameRatesWithoutFrameDrops: number;

declare const kCMIODevicePropertyClientSyncDiscontinuity: number;

declare const kCMIODevicePropertyDeviceCanBeDefaultDevice: number;

declare const kCMIODevicePropertyDeviceHasChanged: number;

declare const kCMIODevicePropertyDeviceHasStreamingError: number;

declare const kCMIODevicePropertyDeviceIsAlive: number;

declare const kCMIODevicePropertyDeviceIsRunning: number;

declare const kCMIODevicePropertyDeviceIsRunningSomewhere: number;

declare const kCMIODevicePropertyDeviceMaster: number;

declare const kCMIODevicePropertyDeviceUID: number;

declare const kCMIODevicePropertyExcludeNonDALAccess: number;

declare const kCMIODevicePropertyHogMode: number;

declare const kCMIODevicePropertyIIDCCSRData: number;

declare const kCMIODevicePropertyIIDCInitialUnitSpace: number;

declare const kCMIODevicePropertyLatency: number;

declare const kCMIODevicePropertyLinkedAndSyncedCoreAudioDeviceUID: number;

declare const kCMIODevicePropertyLinkedCoreAudioDeviceUID: number;

declare const kCMIODevicePropertyLocation: number;

declare const kCMIODevicePropertyLocationBuiltInDisplay: number;

declare const kCMIODevicePropertyLocationExternalDevice: number;

declare const kCMIODevicePropertyLocationExternalDisplay: number;

declare const kCMIODevicePropertyLocationExternalWirelessDevice: number;

declare const kCMIODevicePropertyLocationUnknown: number;

declare const kCMIODevicePropertyModelUID: number;

declare const kCMIODevicePropertyPlugIn: number;

declare const kCMIODevicePropertySMPTETimeCallback: number;

declare const kCMIODevicePropertyScopeInput: number;

declare const kCMIODevicePropertyScopeOutput: number;

declare const kCMIODevicePropertyScopePlayThrough: number;

declare const kCMIODevicePropertyStreamConfiguration: number;

declare const kCMIODevicePropertyStreams: number;

declare const kCMIODevicePropertySuspendedByUser: number;

declare const kCMIODevicePropertyTransportType: number;

declare const kCMIODevicePropertyVideoDigitizerComponents: number;

declare const kCMIODeviceUnknown: number;

declare const kCMIODeviceUnsupportedFormatError: number;

declare const kCMIODirectionControlClassID: number;

declare const kCMIOExposureControlClassID: number;

declare const kCMIOExposureControlPropertyConvergenceSpeed: number;

declare const kCMIOExposureControlPropertyIntegrationTime: number;

declare const kCMIOExposureControlPropertyLockThreshold: number;

declare const kCMIOExposureControlPropertyMaximumGain: number;

declare const kCMIOExposureControlPropertyRegionOfInterest: number;

declare const kCMIOExposureControlPropertyStability: number;

declare const kCMIOExposureControlPropertyStable: number;

declare const kCMIOExposureControlPropertyTarget: number;

declare const kCMIOExposureControlPropertyUnlockThreshold: number;

declare const kCMIOFeatureControlClassID: number;

declare const kCMIOFeatureControlPropertyAbsoluteNative: number;

declare const kCMIOFeatureControlPropertyAbsoluteRange: number;

declare const kCMIOFeatureControlPropertyAbsoluteUnitName: number;

declare const kCMIOFeatureControlPropertyAbsoluteValue: number;

declare const kCMIOFeatureControlPropertyAutomaticManual: number;

declare const kCMIOFeatureControlPropertyConvertAbsoluteToNative: number;

declare const kCMIOFeatureControlPropertyConvertNativeToAbsolute: number;

declare const kCMIOFeatureControlPropertyNativeRange: number;

declare const kCMIOFeatureControlPropertyNativeValue: number;

declare const kCMIOFeatureControlPropertyOnOff: number;

declare const kCMIOFeatureControlPropertyTune: number;

declare const kCMIOFocusControlClassID: number;

declare const kCMIOGainControlClassID: number;

declare const kCMIOGammaControlClassID: number;

declare const kCMIOHardwareBadDeviceError: number;

declare const kCMIOHardwareBadObjectError: number;

declare const kCMIOHardwareBadPropertySizeError: number;

declare const kCMIOHardwareBadStreamError: number;

declare const kCMIOHardwareIllegalOperationError: number;

declare const kCMIOHardwareNoError: number;

declare const kCMIOHardwareNotRunningError: number;

declare const kCMIOHardwareNotStoppedError: number;

declare const kCMIOHardwarePropertyAllowScreenCaptureDevices: number;

declare const kCMIOHardwarePropertyAllowWirelessScreenCaptureDevices: number;

declare const kCMIOHardwarePropertyDefaultInputDevice: number;

declare const kCMIOHardwarePropertyDefaultOutputDevice: number;

declare const kCMIOHardwarePropertyDeviceForUID: number;

declare const kCMIOHardwarePropertyDevices: number;

declare const kCMIOHardwarePropertyIsInitingOrExiting: number;

declare const kCMIOHardwarePropertyPlugInForBundleID: number;

declare const kCMIOHardwarePropertyProcessIsMaster: number;

declare const kCMIOHardwarePropertySleepingIsAllowed: number;

declare const kCMIOHardwarePropertySuspendedBySystem: number;

declare const kCMIOHardwarePropertyUnloadingIsAllowed: number;

declare const kCMIOHardwarePropertyUserSessionIsActiveOrHeadless: number;

declare const kCMIOHardwareSuspendedBySystemError: number;

declare const kCMIOHardwareUnknownPropertyError: number;

declare const kCMIOHardwareUnspecifiedError: number;

declare const kCMIOHardwareUnsupportedOperationError: number;

declare const kCMIOHueControlClassID: number;

declare const kCMIOIrisControlClassID: number;

declare const kCMIOJackControlClassID: number;

declare const kCMIONoiseReductionControlClassID: number;

declare const kCMIOObjectClassID: number;

declare const kCMIOObjectClassIDWildcard: number;

declare const kCMIOObjectPropertyClass: number;

declare const kCMIOObjectPropertyCreator: number;

declare const kCMIOObjectPropertyElementCategoryName: number;

declare const kCMIOObjectPropertyElementMaster: number;

declare const kCMIOObjectPropertyElementName: number;

declare const kCMIOObjectPropertyElementNumberName: number;

declare const kCMIOObjectPropertyElementWildcard: number;

declare const kCMIOObjectPropertyListenerAdded: number;

declare const kCMIOObjectPropertyListenerRemoved: number;

declare const kCMIOObjectPropertyManufacturer: number;

declare const kCMIOObjectPropertyName: number;

declare const kCMIOObjectPropertyOwnedObjects: number;

declare const kCMIOObjectPropertyOwner: number;

declare const kCMIOObjectPropertyScopeGlobal: number;

declare const kCMIOObjectPropertyScopeWildcard: number;

declare const kCMIOObjectPropertySelectorWildcard: number;

declare const kCMIOObjectSystemObject: number;

declare const kCMIOObjectUnknown: number;

declare const kCMIOOpticalFilterClassID: number;

declare const kCMIOPanControlClassID: number;

declare const kCMIOPanTiltAbsoluteControlClassID: number;

declare const kCMIOPanTiltRelativeControlClassID: number;

declare const kCMIOPlugInClassID: number;

declare const kCMIOPlugInPropertyBundleID: number;

declare const kCMIOPowerLineFrequencyControlClassID: number;

declare const kCMIORollAbsoluteControlClassID: number;
declare var kCMIOSampleBufferAttachmentKey_CAAudioTimeStamp: NSObject;

declare var kCMIOSampleBufferAttachmentKey_ClientSequenceID: NSObject;

declare var kCMIOSampleBufferAttachmentKey_ClosedCaptionSampleBuffer: NSObject;

declare var kCMIOSampleBufferAttachmentKey_DiscontinuityFlags: NSObject;

declare var kCMIOSampleBufferAttachmentKey_HDV1_PackData: NSObject;

declare var kCMIOSampleBufferAttachmentKey_HDV2_VAUX: NSObject;

declare var kCMIOSampleBufferAttachmentKey_HostTime: NSObject;

declare var kCMIOSampleBufferAttachmentKey_MouseAndKeyboardModifiers: NSObject;

declare var kCMIOSampleBufferAttachmentKey_MuxedSourcePresentationTimeStamp: NSObject;

declare var kCMIOSampleBufferAttachmentKey_NativeSMPTEFrameCount: NSObject;

declare var kCMIOSampleBufferAttachmentKey_NoDataMarker: NSObject;

declare var kCMIOSampleBufferAttachmentKey_NumberOfVideoFramesInBuffer: NSObject;

declare var kCMIOSampleBufferAttachmentKey_NumberOfVideoFramesInGOP: NSObject;

declare var kCMIOSampleBufferAttachmentKey_PulldownCadenceInfo: NSObject;

declare var kCMIOSampleBufferAttachmentKey_RepeatedBufferContents: NSObject;

declare var kCMIOSampleBufferAttachmentKey_SMPTETime: NSObject;

declare var kCMIOSampleBufferAttachmentKey_SequenceNumber: NSObject;

declare var kCMIOSampleBufferAttachmentKey_SourceAudioFormatDescription: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_CursorFrameRect: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_CursorIsDrawnInFramebuffer: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_CursorIsVisible: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_CursorPositionX: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_CursorPositionY: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_CursorReference: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_CursorScale: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_CursorSeed: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_KeyboardModifiers: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_KeyboardModifiersEvent: NSObject;

declare var kCMIOSampleBufferAttachment_MouseAndKeyboardModifiersKey_MouseButtonState: NSObject;


declare const kCMIOSampleBufferDiscontinuityFlag_BufferOverrun: number;

declare const kCMIOSampleBufferDiscontinuityFlag_ClientSyncDiscontinuity: number;

declare const kCMIOSampleBufferDiscontinuityFlag_CodecSettingsChanged: number;

declare const kCMIOSampleBufferDiscontinuityFlag_DataFormatChanged: number;

declare const kCMIOSampleBufferDiscontinuityFlag_DataWasDropped: number;

declare const kCMIOSampleBufferDiscontinuityFlag_DataWasFlushed: number;

declare const kCMIOSampleBufferDiscontinuityFlag_DiscontinuityInDTS: number;

declare const kCMIOSampleBufferDiscontinuityFlag_DurationWasExtended: number;

declare const kCMIOSampleBufferDiscontinuityFlag_MalformedData: number;

declare const kCMIOSampleBufferDiscontinuityFlag_NoDataMarker: number;

declare const kCMIOSampleBufferDiscontinuityFlag_PacketError: number;

declare const kCMIOSampleBufferDiscontinuityFlag_RelatedToDiscontinuity: number;

declare const kCMIOSampleBufferDiscontinuityFlag_SleepWakeCycle: number;

declare const kCMIOSampleBufferDiscontinuityFlag_StreamDiscontinuity: number;

declare const kCMIOSampleBufferDiscontinuityFlag_TimecodeDiscontinuity: number;

declare const kCMIOSampleBufferDiscontinuityFlag_TimingReferenceJumped: number;

declare const kCMIOSampleBufferDiscontinuityFlag_TrickPlay: number;

declare const kCMIOSampleBufferDiscontinuityFlag_UnknownDiscontinuity: number;

declare const kCMIOSampleBufferNoDataEvent_DeviceDidNotSync: number;

declare const kCMIOSampleBufferNoDataEvent_DeviceInWrongMode: number;

declare const kCMIOSampleBufferNoDataEvent_NoMedia: number;

declare const kCMIOSampleBufferNoDataEvent_ProcessingError: number;

declare const kCMIOSampleBufferNoDataEvent_SleepWakeCycle: number;

declare const kCMIOSampleBufferNoDataEvent_Unknown: number;

declare const kCMIOSampleBufferNoDiscontinuities: number;

declare const kCMIOSaturationControlClassID: number;

declare const kCMIOSelectorControlClassID: number;

declare const kCMIOSelectorControlPropertyAvailableItems: number;

declare const kCMIOSelectorControlPropertyCurrentItem: number;

declare const kCMIOSelectorControlPropertyItemName: number;

declare const kCMIOSharpnessControlClassID: number;

declare const kCMIOShutterControlClassID: number;

declare const kCMIOStreamClassID: number;

declare const kCMIOStreamPropertyCanProcessDeckCommand: number;

declare const kCMIOStreamPropertyClock: number;

declare const kCMIOStreamPropertyDeck: number;

declare const kCMIOStreamPropertyDeckCueing: number;

declare const kCMIOStreamPropertyDeckDropness: number;

declare const kCMIOStreamPropertyDeckFrameNumber: number;

declare const kCMIOStreamPropertyDeckLocal: number;

declare const kCMIOStreamPropertyDeckThreaded: number;

declare const kCMIOStreamPropertyDeviceSyncTimeoutInMSec: number;

declare const kCMIOStreamPropertyDirection: number;

declare const kCMIOStreamPropertyEndOfData: number;

declare const kCMIOStreamPropertyFirstOutputPresentationTimeStamp: number;

declare const kCMIOStreamPropertyFormatDescription: number;

declare const kCMIOStreamPropertyFormatDescriptions: number;

declare const kCMIOStreamPropertyFrameRate: number;

declare const kCMIOStreamPropertyFrameRateRanges: number;

declare const kCMIOStreamPropertyFrameRates: number;

declare const kCMIOStreamPropertyInitialPresentationTimeStampForLinkedAndSyncedAudio: number;

declare const kCMIOStreamPropertyLatency: number;

declare const kCMIOStreamPropertyMinimumFrameRate: number;

declare const kCMIOStreamPropertyNoDataEventCount: number;

declare const kCMIOStreamPropertyNoDataTimeoutInMSec: number;

declare const kCMIOStreamPropertyOutputBufferQueueSize: number;

declare const kCMIOStreamPropertyOutputBufferRepeatCount: number;

declare const kCMIOStreamPropertyOutputBufferUnderrunCount: number;

declare const kCMIOStreamPropertyOutputBuffersNeededForThrottledPlayback: number;

declare const kCMIOStreamPropertyOutputBuffersRequiredForStartup: number;

declare const kCMIOStreamPropertyPreferredFormatDescription: number;

declare const kCMIOStreamPropertyPreferredFrameRate: number;

declare const kCMIOStreamPropertyScheduledOutputNotificationProc: number;

declare const kCMIOStreamPropertyStartingChannel: number;

declare const kCMIOStreamPropertyStillImage: number;

declare const kCMIOStreamPropertyStillImageFormatDescriptions: number;

declare const kCMIOStreamPropertyTerminalType: number;

declare const kCMIOStreamUnknown: number;

declare const kCMIOSystemObjectClassID: number;

declare const kCMIOTemperatureControlClassID: number;

declare const kCMIOTiltControlClassID: number;

declare const kCMIOWhiteBalanceControlClassID: number;

declare const kCMIOWhiteBalanceUControlClassID: number;

declare const kCMIOWhiteBalanceVControlClassID: number;

declare const kCMIOWhiteLevelControlClassID: number;

declare const kCMIOZoomControlClassID: number;

declare const kCMIOZoomRelativeControlClassID: number;
