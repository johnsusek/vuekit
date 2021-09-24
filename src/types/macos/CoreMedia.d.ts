globalThis.CMTimeFlags = globalThis.CMTimeFlags || {};

globalThis.CMTimeFlags = {
    kCMTimeFlags_Valid: 1,
    kCMTimeFlags_HasBeenRounded: 2,
    kCMTimeFlags_PositiveInfinity: 4,
    kCMTimeFlags_NegativeInfinity: 8,
    kCMTimeFlags_Indefinite: 16,
    kCMTimeFlags_ImpliedValueFlagsMask: 28,
    '1': 'kCMTimeFlags_Valid',
    '2': 'kCMTimeFlags_HasBeenRounded',
    '4': 'kCMTimeFlags_PositiveInfinity',
    '8': 'kCMTimeFlags_NegativeInfinity',
    '16': 'kCMTimeFlags_Indefinite',
    '28': 'kCMTimeFlags_ImpliedValueFlagsMask'
}

globalThis.CMTimeRoundingMethod = globalThis.CMTimeRoundingMethod || {};

globalThis.CMTimeRoundingMethod = {
    kCMTimeRoundingMethod_RoundHalfAwayFromZero: 1,
    kCMTimeRoundingMethod_RoundTowardZero: 2,
    kCMTimeRoundingMethod_RoundAwayFromZero: 3,
    kCMTimeRoundingMethod_QuickTime: 4,
    kCMTimeRoundingMethod_RoundTowardPositiveInfinity: 5,
    kCMTimeRoundingMethod_RoundTowardNegativeInfinity: 6,
    kCMTimeRoundingMethod_Default: 1,
    '1': 'kCMTimeRoundingMethod_RoundHalfAwayFromZero',
    '2': 'kCMTimeRoundingMethod_RoundTowardZero',
    '3': 'kCMTimeRoundingMethod_RoundAwayFromZero',
    '4': 'kCMTimeRoundingMethod_QuickTime',
    '5': 'kCMTimeRoundingMethod_RoundTowardPositiveInfinity',
    '6': 'kCMTimeRoundingMethod_RoundTowardNegativeInfinity',
    '1': 'kCMTimeRoundingMethod_Default'
}

declare function CMAudioDeviceClockCreate(allocator: any, deviceUID: NSObject, clockOut: any): number;
declare function CMAudioDeviceClockCreateFromAudioDeviceID(allocator: any, deviceID: number, clockOut: any): number;
declare function CMAudioDeviceClockGetAudioDevice(clock: any, deviceUIDOut: NSObject, deviceIDOut: number, trackingDefaultDeviceOut: string | any): number;
declare function CMAudioDeviceClockSetAudioDeviceID(clock: any, deviceID: number): number;
declare function CMAudioDeviceClockSetAudioDeviceUID(clock: any, deviceUID: NSObject): number;
declare function CMAudioFormatDescriptionCopyAsBigEndianSoundDescriptionBlockBuffer(allocator: any, audioFormatDescription: any, flavor: any, blockBufferOut: any): number;
declare function CMAudioFormatDescriptionCreate(allocator: any, asbd: AudioStreamBasicDescription, layoutSize: number, layout: AudioChannelLayout, magicCookieSize: number, magicCookie: any, extensions: NSObject, formatDescriptionOut: any): number;
declare function CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionBlockBuffer(allocator: any, soundDescriptionBlockBuffer: any, flavor: any, formatDescriptionOut: any): number;
declare function CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionData(allocator: any, soundDescriptionData: string | any, size: number, flavor: any, formatDescriptionOut: any): number;
declare function CMAudioFormatDescriptionCreateSummary(allocator: any, formatDescriptionArray: NSObject, flags: number, formatDescriptionOut: any): number;
declare function CMAudioFormatDescriptionEqual(formatDescription: any, otherFormatDescription: any, equalityMask: number, equalityMaskOut: number): boolean;
declare function CMAudioFormatDescriptionGetChannelLayout(desc: any, sizeOut: number): AudioChannelLayout;
declare function CMAudioFormatDescriptionGetFormatList(desc: any, sizeOut: number): AudioFormatListItem;
declare function CMAudioFormatDescriptionGetMagicCookie(desc: any, sizeOut: number): any;
declare function CMAudioFormatDescriptionGetMostCompatibleFormat(desc: any): AudioFormatListItem;
declare function CMAudioFormatDescriptionGetRichestDecodableFormat(desc: any): AudioFormatListItem;
declare function CMAudioFormatDescriptionGetStreamBasicDescription(desc: any): AudioStreamBasicDescription;
declare function CMAudioSampleBufferCreateReadyWithPacketDescriptions(allocator: any, dataBuffer: any, formatDescription: any, numSamples: number, presentationTimeStamp: CMTime, packetDescriptions: AudioStreamPacketDescription, sampleBufferOut: any): number;
declare function CMAudioSampleBufferCreateWithPacketDescriptions(allocator: any, dataBuffer: any, dataReady: boolean, makeDataReadyCallback: (p1: any, p2: any) => number, makeDataReadyRefcon: any, formatDescription: any, numSamples: number, presentationTimeStamp: CMTime, packetDescriptions: AudioStreamPacketDescription, sampleBufferOut: any): number;
declare function CMAudioSampleBufferCreateWithPacketDescriptionsAndMakeDataReadyHandler(allocator: any, dataBuffer: any, dataReady: boolean, formatDescription: any, numSamples: number, presentationTimeStamp: CMTime, packetDescriptions: AudioStreamPacketDescription, sampleBufferOut: any, makeDataReadyHandler: (p1: any) => number): number;
declare function CMBlockBufferAccessDataBytes(theBuffer: any, offset: number, length: number, temporaryBlock: any, returnedPointerOut: string): number;
declare function CMBlockBufferAppendBufferReference(theBuffer: any, targetBBuf: any, offsetToData: number, dataLength: number, flags: number): number;
declare function CMBlockBufferAppendMemoryBlock(theBuffer: any, memoryBlock: any, blockLength: number, blockAllocator: any, customBlockSource: CMBlockBufferCustomBlockSource, offsetToData: number, dataLength: number, flags: number): number;
declare function CMBlockBufferAssureBlockMemory(theBuffer: any): number;
declare function CMBlockBufferCopyDataBytes(theSourceBuffer: any, offsetToData: number, dataLength: number, destination: any): number;
declare function CMBlockBufferCreateContiguous(structureAllocator: any, sourceBuffer: any, blockAllocator: any, customBlockSource: CMBlockBufferCustomBlockSource, offsetToData: number, dataLength: number, flags: number, blockBufferOut: any): number;
declare function CMBlockBufferCreateEmpty(structureAllocator: any, subBlockCapacity: number, flags: number, blockBufferOut: any): number;
declare function CMBlockBufferCreateWithBufferReference(structureAllocator: any, bufferReference: any, offsetToData: number, dataLength: number, flags: number, blockBufferOut: any): number;
declare function CMBlockBufferCreateWithMemoryBlock(structureAllocator: any, memoryBlock: any, blockLength: number, blockAllocator: any, customBlockSource: CMBlockBufferCustomBlockSource, offsetToData: number, dataLength: number, flags: number, blockBufferOut: any): number;
interface CMBlockBufferCustomBlockSource {
  version: number;
  AllocateBlock: (p1: any, p2: number) => any;
  FreeBlock: (p1: any, p2: any, p3: number) => void;
  refCon: any;
}

declare var CMBlockBufferCustomBlockSource: CMBlockBufferCustomBlockSource;

declare function CMBlockBufferFillDataBytes(fillByte: number, destinationBuffer: any, offsetIntoDestination: number, dataLength: number): number;
declare function CMBlockBufferGetDataLength(theBuffer: any): number;
declare function CMBlockBufferGetDataPointer(theBuffer: any, offset: number, lengthAtOffsetOut: number, totalLengthOut: number, dataPointerOut: string): number;
declare function CMBlockBufferGetTypeID(): number;
declare function CMBlockBufferIsEmpty(theBuffer: any): boolean;
declare function CMBlockBufferIsRangeContiguous(theBuffer: any, offset: number, length: number): boolean;
declare function CMBlockBufferReplaceDataBytes(sourceBytes: any, destinationBuffer: any, offsetIntoDestination: number, dataLength: number): number;
interface CMBufferCallbacks {
  version: number;
  refcon: any;
  getDecodeTimeStamp: (p1: any, p2: any) => CMTime;
  getPresentationTimeStamp: (p1: any, p2: any) => CMTime;
  getDuration: (p1: any, p2: any) => CMTime;
  isDataReady: (p1: any, p2: any) => boolean;
  compare: (p1: any, p2: any, p3: any) => CFComparisonResult;
  dataBecameReadyNotification: NSObject;
  getSize: (p1: any, p2: any) => number;
}

declare var CMBufferCallbacks: CMBufferCallbacks;

interface CMBufferHandlers {
  version: number;
  getDecodeTimeStamp: (p1: any) => CMTime;
  getPresentationTimeStamp: (p1: any) => CMTime;
  getDuration: (p1: any) => CMTime;
  isDataReady: (p1: any) => boolean;
  compare: (p1: any, p2: any) => CFComparisonResult;
  dataBecameReadyNotification: NSObject;
  getSize: (p1: any) => number;
}

declare var CMBufferHandlers: CMBufferHandlers;

declare function CMBufferQueueCallForEachBuffer(queue: any, callback: (p1: any, p2: any) => number, refcon: any): number;
declare function CMBufferQueueContainsEndOfData(queue: any): boolean;
declare function CMBufferQueueCreate(allocator: any, capacity: number, callbacks: CMBufferCallbacks, queueOut: any): number;
declare function CMBufferQueueCreateWithHandlers(allocator: any, capacity: number, handlers: CMBufferHandlers, queueOut: any): number;
declare function CMBufferQueueDequeueAndRetain(queue: any): any;
declare function CMBufferQueueDequeueIfDataReadyAndRetain(queue: any): any;
declare function CMBufferQueueEnqueue(queue: any, buf: any): number;
declare function CMBufferQueueGetBufferCount(queue: any): number;
declare function CMBufferQueueGetCallbacksForSampleBuffersSortedByOutputPTS(): CMBufferCallbacks;
declare function CMBufferQueueGetCallbacksForUnsortedSampleBuffers(): CMBufferCallbacks;
declare function CMBufferQueueGetDuration(queue: any): CMTime;
declare function CMBufferQueueGetEndPresentationTimeStamp(queue: any): CMTime;
declare function CMBufferQueueGetFirstDecodeTimeStamp(queue: any): CMTime;
declare function CMBufferQueueGetFirstPresentationTimeStamp(queue: any): CMTime;
declare function CMBufferQueueGetHead(queue: any): any;
declare function CMBufferQueueGetMaxPresentationTimeStamp(queue: any): CMTime;
declare function CMBufferQueueGetMinDecodeTimeStamp(queue: any): CMTime;
declare function CMBufferQueueGetMinPresentationTimeStamp(queue: any): CMTime;
declare function CMBufferQueueGetTotalSize(queue: any): number;
declare function CMBufferQueueGetTypeID(): number;
declare function CMBufferQueueInstallTrigger(queue: any, callback: (p1: any, p2: any) => void, refcon: any, condition: number, time: CMTime, triggerTokenOut: any): number;
declare function CMBufferQueueInstallTriggerHandler(queue: any, condition: number, time: CMTime, triggerTokenOut: any, handler: (p1: any) => void): number;
declare function CMBufferQueueInstallTriggerHandlerWithIntegerThreshold(queue: any, condition: number, threshold: number, triggerTokenOut: any, handler: (p1: any) => void): number;
declare function CMBufferQueueInstallTriggerWithIntegerThreshold(queue: any, callback: (p1: any, p2: any) => void, refcon: any, condition: number, threshold: number, triggerTokenOut: any): number;
declare function CMBufferQueueIsAtEndOfData(queue: any): boolean;
declare function CMBufferQueueIsEmpty(queue: any): boolean;
declare function CMBufferQueueMarkEndOfData(queue: any): number;
declare function CMBufferQueueRemoveTrigger(queue: any, triggerToken: any): number;
declare function CMBufferQueueReset(queue: any): number;
declare function CMBufferQueueResetWithCallback(queue: any, callback: (p1: any, p2: any) => void, refcon: any): number;
declare function CMBufferQueueSetValidationCallback(queue: any, callback: (p1: any, p2: any, p3: any) => number, refcon: any): number;
declare function CMBufferQueueSetValidationHandler(queue: any, handler: (p1: any, p2: any) => number): number;
declare function CMBufferQueueTestTrigger(queue: any, triggerToken: any): boolean;
declare function CMClockConvertHostTimeToSystemUnits(hostTime: CMTime): number;
declare function CMClockGetAnchorTime(clock: any, clockTimeOut: CMTime, referenceClockTimeOut: CMTime): number;
declare function CMClockGetHostTimeClock(): any;
declare function CMClockGetTime(clock: any): CMTime;
declare function CMClockGetTypeID(): number;
declare function CMClockInvalidate(clock: any): void;
declare function CMClockMakeHostTimeFromSystemUnits(hostTime: number): CMTime;
declare function CMClockMightDrift(clock: any, otherClock: any): boolean;
declare function CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer(allocator: any, closedCaptionFormatDescription: any, flavor: any, blockBufferOut: any): number;
declare function CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer(allocator: any, closedCaptionDescriptionBlockBuffer: any, flavor: any, formatDescriptionOut: any): number;
declare function CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData(allocator: any, closedCaptionDescriptionData: string | any, size: number, flavor: any, formatDescriptionOut: any): number;
declare function CMCopyDictionaryOfAttachments(allocator: any, target: any, attachmentMode: number): NSObject;
declare function CMDoesBigEndianSoundDescriptionRequireLegacyCBRSampleTableLayout(soundDescriptionBlockBuffer: any, flavor: any): boolean;
declare function CMFormatDescriptionCreate(allocator: any, mediaType: number, mediaSubType: number, extensions: NSObject, formatDescriptionOut: any): number;
declare function CMFormatDescriptionEqual(formatDescription: any, otherFormatDescription: any): boolean;
declare function CMFormatDescriptionEqualIgnoringExtensionKeys(formatDescription: any, otherFormatDescription: any, formatDescriptionExtensionKeysToIgnore: any, sampleDescriptionExtensionAtomKeysToIgnore: any): boolean;
declare function CMFormatDescriptionGetExtension(desc: any, extensionKey: NSObject): any;
declare function CMFormatDescriptionGetExtensions(desc: any): NSObject;
declare function CMFormatDescriptionGetMediaSubType(desc: any): number;
declare function CMFormatDescriptionGetMediaType(desc: any): number;
declare function CMFormatDescriptionGetTypeID(): number;
declare function CMGetAttachment(target: any, key: NSObject, attachmentModeOut: number): any;
declare function CMMemoryPoolCreate(options: NSObject): any;
declare function CMMemoryPoolFlush(pool: any): void;
declare function CMMemoryPoolGetAllocator(pool: any): any;
declare function CMMemoryPoolGetTypeID(): number;
declare function CMMemoryPoolInvalidate(pool: any): void;
declare function CMMetadataCreateIdentifierForKeyAndKeySpace(allocator: any, key: any, keySpace: NSObject, identifierOut: NSObject): number;
declare function CMMetadataCreateKeyFromIdentifier(allocator: any, identifier: NSObject, keyOut: any): number;
declare function CMMetadataCreateKeyFromIdentifierAsCFData(allocator: any, identifier: NSObject, keyOut: NSObject): number;
declare function CMMetadataCreateKeySpaceFromIdentifier(allocator: any, identifier: NSObject, keySpaceOut: NSObject): number;
declare function CMMetadataDataTypeRegistryDataTypeConformsToDataType(dataType: NSObject, conformsToDataType: NSObject): boolean;
declare function CMMetadataDataTypeRegistryDataTypeIsBaseDataType(dataType: NSObject): boolean;
declare function CMMetadataDataTypeRegistryDataTypeIsRegistered(dataType: NSObject): boolean;
declare function CMMetadataDataTypeRegistryGetBaseDataTypeForConformingDataType(dataType: NSObject): NSObject;
declare function CMMetadataDataTypeRegistryGetBaseDataTypes(): NSObject;
declare function CMMetadataDataTypeRegistryGetConformingDataTypes(dataType: NSObject): NSObject;
declare function CMMetadataDataTypeRegistryGetDataTypeDescription(dataType: NSObject): NSObject;
declare function CMMetadataDataTypeRegistryRegisterDataType(dataType: NSObject, description: NSObject, conformingDataTypes: NSObject): number;
declare function CMMetadataFormatDescriptionCopyAsBigEndianMetadataDescriptionBlockBuffer(allocator: any, metadataFormatDescription: any, flavor: any, blockBufferOut: any): number;
declare function CMMetadataFormatDescriptionCreateByMergingMetadataFormatDescriptions(allocator: any, sourceDescription: any, otherSourceDescription: any, formatDescriptionOut: any): number;
declare function CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionBlockBuffer(allocator: any, metadataDescriptionBlockBuffer: any, flavor: any, formatDescriptionOut: any): number;
declare function CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionData(allocator: any, metadataDescriptionData: string | any, size: number, flavor: any, formatDescriptionOut: any): number;
declare function CMMetadataFormatDescriptionCreateWithKeys(allocator: any, metadataType: number, keys: NSObject, formatDescriptionOut: any): number;
declare function CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications(allocator: any, sourceDescription: any, metadataSpecifications: NSObject, formatDescriptionOut: any): number;
declare function CMMetadataFormatDescriptionCreateWithMetadataSpecifications(allocator: any, metadataType: number, metadataSpecifications: NSObject, formatDescriptionOut: any): number;
declare function CMMetadataFormatDescriptionGetIdentifiers(desc: any): NSObject;
declare function CMMetadataFormatDescriptionGetKeyWithLocalID(desc: any, localKeyID: number): NSObject;
declare function CMMuxedFormatDescriptionCreate(allocator: any, muxType: number, extensions: NSObject, formatDescriptionOut: any): number;
declare function CMPropagateAttachments(source: any, destination: any): void;
declare function CMRemoveAllAttachments(target: any): void;
declare function CMRemoveAttachment(target: any, key: NSObject): void;
declare function CMSampleBufferCallBlockForEachSample(sbuf: any, handler: (p1: any, p2: number) => number): number;
declare function CMSampleBufferCallForEachSample(sbuf: any, callback: (p1: any, p2: number, p3: any) => number, refcon: any): number;
declare function CMSampleBufferCopyPCMDataIntoAudioBufferList(sbuf: any, frameOffset: number, numFrames: number, bufferList: AudioBufferList): number;
declare function CMSampleBufferCopySampleBufferForRange(allocator: any, sbuf: any, sampleRange: CFRange, sampleBufferOut: any): number;
declare function CMSampleBufferCreate(allocator: any, dataBuffer: any, dataReady: boolean, makeDataReadyCallback: (p1: any, p2: any) => number, makeDataReadyRefcon: any, formatDescription: any, numSamples: number, numSampleTimingEntries: number, sampleTimingArray: CMSampleTimingInfo, numSampleSizeEntries: number, sampleSizeArray: number, sampleBufferOut: any): number;
declare function CMSampleBufferCreateCopy(allocator: any, sbuf: any, sampleBufferOut: any): number;
declare function CMSampleBufferCreateCopyWithNewTiming(allocator: any, originalSBuf: any, numSampleTimingEntries: number, sampleTimingArray: CMSampleTimingInfo, sampleBufferOut: any): number;
declare function CMSampleBufferCreateForImageBuffer(allocator: any, imageBuffer: any, dataReady: boolean, makeDataReadyCallback: (p1: any, p2: any) => number, makeDataReadyRefcon: any, formatDescription: any, sampleTiming: CMSampleTimingInfo, sampleBufferOut: any): number;
declare function CMSampleBufferCreateForImageBufferWithMakeDataReadyHandler(allocator: any, imageBuffer: any, dataReady: boolean, formatDescription: any, sampleTiming: CMSampleTimingInfo, sampleBufferOut: any, makeDataReadyHandler: (p1: any) => number): number;
declare function CMSampleBufferCreateReady(allocator: any, dataBuffer: any, formatDescription: any, numSamples: number, numSampleTimingEntries: number, sampleTimingArray: CMSampleTimingInfo, numSampleSizeEntries: number, sampleSizeArray: number, sampleBufferOut: any): number;
declare function CMSampleBufferCreateReadyWithImageBuffer(allocator: any, imageBuffer: any, formatDescription: any, sampleTiming: CMSampleTimingInfo, sampleBufferOut: any): number;
declare function CMSampleBufferCreateWithMakeDataReadyHandler(allocator: any, dataBuffer: any, dataReady: boolean, formatDescription: any, numSamples: number, numSampleTimingEntries: number, sampleTimingArray: CMSampleTimingInfo, numSampleSizeEntries: number, sampleSizeArray: number, sampleBufferOut: any, makeDataReadyHandler: (p1: any) => number): number;
declare function CMSampleBufferDataIsReady(sbuf: any): boolean;
declare function CMSampleBufferGetAudioBufferListWithRetainedBlockBuffer(sbuf: any, bufferListSizeNeededOut: number, bufferListOut: AudioBufferList, bufferListSize: number, blockBufferStructureAllocator: any, blockBufferBlockAllocator: any, flags: number, blockBufferOut: any): number;
declare function CMSampleBufferGetAudioStreamPacketDescriptions(sbuf: any, packetDescriptionsSize: number, packetDescriptionsOut: AudioStreamPacketDescription, packetDescriptionsSizeNeededOut: number): number;
declare function CMSampleBufferGetAudioStreamPacketDescriptionsPtr(sbuf: any, packetDescriptionsPointerOut: AudioStreamPacketDescription, packetDescriptionsSizeOut: number): number;
declare function CMSampleBufferGetDataBuffer(sbuf: any): any;
declare function CMSampleBufferGetDecodeTimeStamp(sbuf: any): CMTime;
declare function CMSampleBufferGetDuration(sbuf: any): CMTime;
declare function CMSampleBufferGetFormatDescription(sbuf: any): any;
declare function CMSampleBufferGetImageBuffer(sbuf: any): any;
declare function CMSampleBufferGetNumSamples(sbuf: any): number;
declare function CMSampleBufferGetOutputDecodeTimeStamp(sbuf: any): CMTime;
declare function CMSampleBufferGetOutputDuration(sbuf: any): CMTime;
declare function CMSampleBufferGetOutputPresentationTimeStamp(sbuf: any): CMTime;
declare function CMSampleBufferGetOutputSampleTimingInfoArray(sbuf: any, timingArrayEntries: number, timingArrayOut: CMSampleTimingInfo, timingArrayEntriesNeededOut: number): number;
declare function CMSampleBufferGetPresentationTimeStamp(sbuf: any): CMTime;
declare function CMSampleBufferGetSampleAttachmentsArray(sbuf: any, createIfNecessary: boolean): NSObject;
declare function CMSampleBufferGetSampleSize(sbuf: any, sampleIndex: number): number;
declare function CMSampleBufferGetSampleSizeArray(sbuf: any, sizeArrayEntries: number, sizeArrayOut: number, sizeArrayEntriesNeededOut: number): number;
declare function CMSampleBufferGetSampleTimingInfo(sbuf: any, sampleIndex: number, timingInfoOut: CMSampleTimingInfo): number;
declare function CMSampleBufferGetSampleTimingInfoArray(sbuf: any, numSampleTimingEntries: number, timingArrayOut: CMSampleTimingInfo, timingArrayEntriesNeededOut: number): number;
declare function CMSampleBufferGetTotalSampleSize(sbuf: any): number;
declare function CMSampleBufferGetTypeID(): number;
declare function CMSampleBufferHasDataFailed(sbuf: any, statusOut: number): boolean;
declare function CMSampleBufferInvalidate(sbuf: any): number;
declare function CMSampleBufferIsValid(sbuf: any): boolean;
declare function CMSampleBufferMakeDataReady(sbuf: any): number;
declare function CMSampleBufferSetDataBuffer(sbuf: any, dataBuffer: any): number;
declare function CMSampleBufferSetDataBufferFromAudioBufferList(sbuf: any, blockBufferStructureAllocator: any, blockBufferBlockAllocator: any, flags: number, bufferList: AudioBufferList): number;
declare function CMSampleBufferSetDataFailed(sbuf: any, status: number): number;
declare function CMSampleBufferSetDataReady(sbuf: any): number;
declare function CMSampleBufferSetInvalidateCallback(sbuf: any, invalidateCallback: (p1: any, p2: number) => void, invalidateRefCon: number): number;
declare function CMSampleBufferSetInvalidateHandler(sbuf: any, invalidateHandler: (p1: any) => void): number;
declare function CMSampleBufferSetOutputPresentationTimeStamp(sbuf: any, outputPresentationTimeStamp: CMTime): number;
declare function CMSampleBufferTrackDataReadiness(sbuf: any, sampleBufferToTrack: any): number;
interface CMSampleTimingInfo {
  duration: CMTime;
  presentationTimeStamp: CMTime;
  decodeTimeStamp: CMTime;
}

declare var CMSampleTimingInfo: CMSampleTimingInfo;

declare function CMSetAttachment(target: any, key: NSObject, value: any, attachmentMode: number): void;
declare function CMSetAttachments(target: any, theAttachments: NSObject, attachmentMode: number): void;
declare function CMSimpleQueueCreate(allocator: any, capacity: number, queueOut: any): number;
declare function CMSimpleQueueDequeue(queue: any): any;
declare function CMSimpleQueueEnqueue(queue: any, element: any): number;
declare function CMSimpleQueueGetCapacity(queue: any): number;
declare function CMSimpleQueueGetCount(queue: any): number;
declare function CMSimpleQueueGetHead(queue: any): any;
declare function CMSimpleQueueGetTypeID(): number;
declare function CMSimpleQueueReset(queue: any): number;
declare function CMSwapBigEndianClosedCaptionDescriptionToHost(closedCaptionDescriptionData: string | any, closedCaptionDescriptionSize: number): number;
declare function CMSwapBigEndianImageDescriptionToHost(imageDescriptionData: string | any, imageDescriptionSize: number): number;
declare function CMSwapBigEndianMetadataDescriptionToHost(metadataDescriptionData: string | any, metadataDescriptionSize: number): number;
declare function CMSwapBigEndianSoundDescriptionToHost(soundDescriptionData: string | any, soundDescriptionSize: number): number;
declare function CMSwapBigEndianTextDescriptionToHost(textDescriptionData: string | any, textDescriptionSize: number): number;
declare function CMSwapBigEndianTimeCodeDescriptionToHost(timeCodeDescriptionData: string | any, timeCodeDescriptionSize: number): number;
declare function CMSwapHostEndianClosedCaptionDescriptionToBig(closedCaptionDescriptionData: string | any, closedCaptionDescriptionSize: number): number;
declare function CMSwapHostEndianImageDescriptionToBig(imageDescriptionData: string | any, imageDescriptionSize: number): number;
declare function CMSwapHostEndianMetadataDescriptionToBig(metadataDescriptionData: string | any, metadataDescriptionSize: number): number;
declare function CMSwapHostEndianSoundDescriptionToBig(soundDescriptionData: string | any, soundDescriptionSize: number): number;
declare function CMSwapHostEndianTextDescriptionToBig(textDescriptionData: string | any, textDescriptionSize: number): number;
declare function CMSwapHostEndianTimeCodeDescriptionToBig(timeCodeDescriptionData: string | any, timeCodeDescriptionSize: number): number;
declare function CMSyncConvertTime(time: CMTime, fromClockOrTimebase: any, toClockOrTimebase: any): CMTime;
declare function CMSyncGetRelativeRate(ofClockOrTimebase: any, relativeToClockOrTimebase: any): number;
declare function CMSyncGetRelativeRateAndAnchorTime(ofClockOrTimebase: any, relativeToClockOrTimebase: any, outRelativeRate: number, outOfClockOrTimebaseAnchorTime: CMTime, outRelativeToClockOrTimebaseAnchorTime: CMTime): number;
declare function CMSyncGetTime(clockOrTimebase: any): CMTime;
declare function CMSyncMightDrift(clockOrTimebase1: any, clockOrTimebase2: any): boolean;
declare function CMTextFormatDescriptionCopyAsBigEndianTextDescriptionBlockBuffer(allocator: any, textFormatDescription: any, flavor: any, blockBufferOut: any): number;
declare function CMTextFormatDescriptionCreateFromBigEndianTextDescriptionBlockBuffer(allocator: any, textDescriptionBlockBuffer: any, flavor: any, mediaType: number, formatDescriptionOut: any): number;
declare function CMTextFormatDescriptionCreateFromBigEndianTextDescriptionData(allocator: any, textDescriptionData: string | any, size: number, flavor: any, mediaType: number, formatDescriptionOut: any): number;
declare function CMTextFormatDescriptionGetDefaultStyle(desc: any, localFontIDOut: number, boldOut: string | any, italicOut: string | any, underlineOut: string | any, fontSizeOut: number, colorComponentsOut: number): number;
declare function CMTextFormatDescriptionGetDefaultTextBox(desc: any, originIsAtTopLeft: boolean, heightOfTextTrack: number, defaultTextBoxOut: NSRect): number;
declare function CMTextFormatDescriptionGetDisplayFlags(desc: any, displayFlagsOut: number): number;
declare function CMTextFormatDescriptionGetFontName(desc: any, localFontID: number, fontNameOut: NSObject): number;
declare function CMTextFormatDescriptionGetJustification(desc: any, horizontaJustificationlOut: number, verticalJustificationOut: number): number;
interface CMTime {
  value: number;
  timescale: number;
  flags: CMTimeFlags;
  epoch: number;
}

declare var CMTime: CMTime;

declare function CMTimeAbsoluteValue(time: CMTime): CMTime;
declare function CMTimeAdd(lhs: CMTime, rhs: CMTime): CMTime;
declare function CMTimeClampToRange(time: CMTime, range: CMTimeRange): CMTime;
declare function CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer(allocator: any, timeCodeFormatDescription: any, flavor: any, blockBufferOut: any): number;
declare function CMTimeCodeFormatDescriptionCreate(allocator: any, timeCodeFormatType: number, frameDuration: CMTime, frameQuanta: number, flags: number, extensions: NSObject, formatDescriptionOut: any): number;
declare function CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer(allocator: any, timeCodeDescriptionBlockBuffer: any, flavor: any, formatDescriptionOut: any): number;
declare function CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionData(allocator: any, timeCodeDescriptionData: string | any, size: number, flavor: any, formatDescriptionOut: any): number;
declare function CMTimeCodeFormatDescriptionGetFrameDuration(timeCodeFormatDescription: any): CMTime;
declare function CMTimeCodeFormatDescriptionGetFrameQuanta(timeCodeFormatDescription: any): number;
declare function CMTimeCodeFormatDescriptionGetTimeCodeFlags(desc: any): number;
declare function CMTimeCompare(time1: CMTime, time2: CMTime): number;
declare function CMTimeConvertScale(time: CMTime, newTimescale: number, method: CMTimeRoundingMethod): CMTime;
declare function CMTimeCopyAsDictionary(time: CMTime, allocator: any): NSObject;
declare function CMTimeCopyDescription(allocator: any, time: CMTime): NSObject;
declare function CMTimeFoldIntoRange(time: CMTime, foldRange: CMTimeRange): CMTime;
declare function CMTimeGetSeconds(time: CMTime): number;
declare function CMTimeMake(value: number, timescale: number): CMTime;
declare function CMTimeMakeFromDictionary(dictionaryRepresentation: NSObject): CMTime;
declare function CMTimeMakeWithEpoch(value: number, timescale: number, epoch: number): CMTime;
declare function CMTimeMakeWithSeconds(seconds: number, preferredTimescale: number): CMTime;
declare function CMTimeMapDurationFromRangeToRange(dur: CMTime, fromRange: CMTimeRange, toRange: CMTimeRange): CMTime;
declare function CMTimeMapTimeFromRangeToRange(t: CMTime, fromRange: CMTimeRange, toRange: CMTimeRange): CMTime;
interface CMTimeMapping {
  source: CMTimeRange;
  target: CMTimeRange;
}

declare var CMTimeMapping: CMTimeMapping;

declare function CMTimeMappingCopyAsDictionary(mapping: CMTimeMapping, allocator: any): NSObject;
declare function CMTimeMappingCopyDescription(allocator: any, mapping: CMTimeMapping): NSObject;
declare function CMTimeMappingMake(source: CMTimeRange, target: CMTimeRange): CMTimeMapping;
declare function CMTimeMappingMakeEmpty(target: CMTimeRange): CMTimeMapping;
declare function CMTimeMappingMakeFromDictionary(dictionaryRepresentation: NSObject): CMTimeMapping;
declare function CMTimeMappingShow(mapping: CMTimeMapping): void;
declare function CMTimeMaximum(time1: CMTime, time2: CMTime): CMTime;
declare function CMTimeMinimum(time1: CMTime, time2: CMTime): CMTime;
declare function CMTimeMultiply(time: CMTime, multiplier: number): CMTime;
declare function CMTimeMultiplyByFloat64(time: CMTime, multiplier: number): CMTime;
declare function CMTimeMultiplyByRatio(time: CMTime, multiplier: number, divisor: number): CMTime;
interface CMTimeRange {
  start: CMTime;
  duration: CMTime;
}

declare var CMTimeRange: CMTimeRange;

declare function CMTimeRangeContainsTime(range: CMTimeRange, time: CMTime): boolean;
declare function CMTimeRangeContainsTimeRange(range: CMTimeRange, otherRange: CMTimeRange): boolean;
declare function CMTimeRangeCopyAsDictionary(range: CMTimeRange, allocator: any): NSObject;
declare function CMTimeRangeCopyDescription(allocator: any, range: CMTimeRange): NSObject;
declare function CMTimeRangeEqual(range1: CMTimeRange, range2: CMTimeRange): boolean;
declare function CMTimeRangeFromTimeToTime(start: CMTime, end: CMTime): CMTimeRange;
declare function CMTimeRangeGetEnd(range: CMTimeRange): CMTime;
declare function CMTimeRangeGetIntersection(range: CMTimeRange, otherRange: CMTimeRange): CMTimeRange;
declare function CMTimeRangeGetUnion(range: CMTimeRange, otherRange: CMTimeRange): CMTimeRange;
declare function CMTimeRangeMake(start: CMTime, duration: CMTime): CMTimeRange;
declare function CMTimeRangeMakeFromDictionary(dictionaryRepresentation: NSObject): CMTimeRange;
declare function CMTimeRangeShow(range: CMTimeRange): void;
declare function CMTimeShow(time: CMTime): void;
declare function CMTimeSubtract(lhs: CMTime, rhs: CMTime): CMTime;
declare function CMTimebaseAddTimer(timebase: any, timer: NSObject, runloop: any): number;
declare function CMTimebaseAddTimerDispatchSource(timebase: any, timerSource: NSObject): number;
declare function CMTimebaseCopyMaster(timebase: any): any;
declare function CMTimebaseCopyMasterClock(timebase: any): any;
declare function CMTimebaseCopyMasterTimebase(timebase: any): any;
declare function CMTimebaseCopyUltimateMasterClock(timebase: any): any;
declare function CMTimebaseCreateWithMasterClock(allocator: any, masterClock: any, timebaseOut: any): number;
declare function CMTimebaseCreateWithMasterTimebase(allocator: any, masterTimebase: any, timebaseOut: any): number;
declare function CMTimebaseGetEffectiveRate(timebase: any): number;
declare function CMTimebaseGetRate(timebase: any): number;
declare function CMTimebaseGetTime(timebase: any): CMTime;
declare function CMTimebaseGetTimeAndRate(timebase: any, timeOut: CMTime, rateOut: number): number;
declare function CMTimebaseGetTimeWithTimeScale(timebase: any, timescale: number, method: CMTimeRoundingMethod): CMTime;
declare function CMTimebaseGetTypeID(): number;
declare function CMTimebaseNotificationBarrier(timebase: any): number;
declare function CMTimebaseRemoveTimer(timebase: any, timer: NSObject): number;
declare function CMTimebaseRemoveTimerDispatchSource(timebase: any, timerSource: NSObject): number;
declare function CMTimebaseSetAnchorTime(timebase: any, timebaseTime: CMTime, immediateMasterTime: CMTime): number;
declare function CMTimebaseSetMasterClock(timebase: any, newMasterClock: any): number;
declare function CMTimebaseSetMasterTimebase(timebase: any, newMasterTimebase: any): number;
declare function CMTimebaseSetRate(timebase: any, rate: number): number;
declare function CMTimebaseSetRateAndAnchorTime(timebase: any, rate: number, timebaseTime: CMTime, immediateMasterTime: CMTime): number;
declare function CMTimebaseSetTime(timebase: any, time: CMTime): number;
declare function CMTimebaseSetTimerDispatchSourceNextFireTime(timebase: any, timerSource: NSObject, fireTime: CMTime, flags: number): number;
declare function CMTimebaseSetTimerDispatchSourceToFireImmediately(timebase: any, timerSource: NSObject): number;
declare function CMTimebaseSetTimerNextFireTime(timebase: any, timer: NSObject, fireTime: CMTime, flags: number): number;
declare function CMTimebaseSetTimerToFireImmediately(timebase: any, timer: NSObject): number;
interface CMVideoDimensions {
  width: number;
  height: number;
}

declare var CMVideoDimensions: CMVideoDimensions;

declare function CMVideoFormatDescriptionCopyAsBigEndianImageDescriptionBlockBuffer(allocator: any, videoFormatDescription: any, stringEncoding: number, flavor: any, blockBufferOut: any): number;
declare function CMVideoFormatDescriptionCreate(allocator: any, codecType: number, width: number, height: number, extensions: NSObject, formatDescriptionOut: any): number;
declare function CMVideoFormatDescriptionCreateForImageBuffer(allocator: any, imageBuffer: any, formatDescriptionOut: any): number;
declare function CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionBlockBuffer(allocator: any, imageDescriptionBlockBuffer: any, stringEncoding: number, flavor: any, formatDescriptionOut: any): number;
declare function CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionData(allocator: any, imageDescriptionData: string | any, size: number, stringEncoding: number, flavor: any, formatDescriptionOut: any): number;
declare function CMVideoFormatDescriptionCreateFromH264ParameterSets(allocator: any, parameterSetCount: number, parameterSetPointers: string, parameterSetSizes: number, NALUnitHeaderLength: number, formatDescriptionOut: any): number;
declare function CMVideoFormatDescriptionCreateFromHEVCParameterSets(allocator: any, parameterSetCount: number, parameterSetPointers: string, parameterSetSizes: number, NALUnitHeaderLength: number, extensions: NSObject, formatDescriptionOut: any): number;
declare function CMVideoFormatDescriptionGetCleanAperture(videoDesc: any, originIsAtTopLeft: boolean): NSRect;
declare function CMVideoFormatDescriptionGetDimensions(videoDesc: any): CMVideoDimensions;
declare function CMVideoFormatDescriptionGetExtensionKeysCommonWithImageBuffers(): NSObject;
declare function CMVideoFormatDescriptionGetH264ParameterSetAtIndex(videoDesc: any, parameterSetIndex: number, parameterSetPointerOut: string, parameterSetSizeOut: number, parameterSetCountOut: number, NALUnitHeaderLengthOut: number): number;
declare function CMVideoFormatDescriptionGetHEVCParameterSetAtIndex(videoDesc: any, parameterSetIndex: number, parameterSetPointerOut: string, parameterSetSizeOut: number, parameterSetCountOut: number, NALUnitHeaderLengthOut: number): number;
declare function CMVideoFormatDescriptionGetPresentationDimensions(videoDesc: any, usePixelAspectRatio: boolean, useCleanAperture: boolean): NSSize;
declare function CMVideoFormatDescriptionMatchesImageBuffer(desc: any, imageBuffer: any): boolean;

declare const kCMAttachmentMode_ShouldNotPropagate: number;

declare const kCMAttachmentMode_ShouldPropagate: number;

declare const kCMAudioCodecType_AAC_AudibleProtected: number;

declare const kCMAudioCodecType_AAC_LCProtected: number;

declare const kCMAudioFormatDescriptionMask_All: number;

declare const kCMAudioFormatDescriptionMask_ChannelLayout: number;

declare const kCMAudioFormatDescriptionMask_Extensions: number;

declare const kCMAudioFormatDescriptionMask_MagicCookie: number;

declare const kCMAudioFormatDescriptionMask_StreamBasicDescription: number;

declare const kCMBlockBufferAlwaysCopyDataFlag: number;

declare const kCMBlockBufferAssureMemoryNowFlag: number;

declare const kCMBlockBufferBadCustomBlockSourceErr: number;

declare const kCMBlockBufferBadLengthParameterErr: number;

declare const kCMBlockBufferBadOffsetParameterErr: number;

declare const kCMBlockBufferBadPointerParameterErr: number;

declare const kCMBlockBufferBlockAllocationFailedErr: number;

declare const kCMBlockBufferCustomBlockSourceVersion: number;

declare const kCMBlockBufferDontOptimizeDepthFlag: number;

declare const kCMBlockBufferEmptyBBufErr: number;

declare const kCMBlockBufferInsufficientSpaceErr: number;

declare const kCMBlockBufferNoErr: number;

declare const kCMBlockBufferPermitEmptyReferenceFlag: number;

declare const kCMBlockBufferStructureAllocationFailedErr: number;

declare const kCMBlockBufferUnallocatedBlockErr: number;

declare const kCMBufferQueueError_AllocationFailed: number;

declare const kCMBufferQueueError_BadTriggerDuration: number;

declare const kCMBufferQueueError_CannotModifyQueueFromTriggerCallback: number;

declare const kCMBufferQueueError_EnqueueAfterEndOfData: number;

declare const kCMBufferQueueError_InvalidBuffer: number;

declare const kCMBufferQueueError_InvalidCMBufferCallbacksStruct: number;

declare const kCMBufferQueueError_InvalidTriggerCondition: number;

declare const kCMBufferQueueError_InvalidTriggerToken: number;

declare const kCMBufferQueueError_QueueIsFull: number;

declare const kCMBufferQueueError_RequiredParameterMissing: number;

declare const kCMBufferQueueTrigger_WhenBufferCountBecomesGreaterThan: number;

declare const kCMBufferQueueTrigger_WhenBufferCountBecomesLessThan: number;

declare const kCMBufferQueueTrigger_WhenDataBecomesReady: number;

declare const kCMBufferQueueTrigger_WhenDurationBecomesGreaterThan: number;

declare const kCMBufferQueueTrigger_WhenDurationBecomesGreaterThanOrEqualTo: number;

declare const kCMBufferQueueTrigger_WhenDurationBecomesGreaterThanOrEqualToAndBufferCountBecomesGreaterThan: number;

declare const kCMBufferQueueTrigger_WhenDurationBecomesLessThan: number;

declare const kCMBufferQueueTrigger_WhenDurationBecomesLessThanOrEqualTo: number;

declare const kCMBufferQueueTrigger_WhenEndOfDataReached: number;

declare const kCMBufferQueueTrigger_WhenMaxPresentationTimeStampChanges: number;

declare const kCMBufferQueueTrigger_WhenMinPresentationTimeStampChanges: number;

declare const kCMBufferQueueTrigger_WhenReset: number;

declare const kCMClockError_AllocationFailed: number;

declare const kCMClockError_InvalidParameter: number;

declare const kCMClockError_MissingRequiredParameter: number;

declare const kCMClockError_UnsupportedOperation: number;

declare const kCMClosedCaptionFormatType_ATSC: number;

declare const kCMClosedCaptionFormatType_CEA608: number;

declare const kCMClosedCaptionFormatType_CEA708: number;
declare var kCMFormatDescriptionAlphaChannelMode_PremultipliedAlpha: NSObject;

declare var kCMFormatDescriptionAlphaChannelMode_StraightAlpha: NSObject;


declare const kCMFormatDescriptionBridgeError_AllocationFailed: number;

declare const kCMFormatDescriptionBridgeError_IncompatibleFormatDescription: number;

declare const kCMFormatDescriptionBridgeError_InvalidFormatDescription: number;

declare const kCMFormatDescriptionBridgeError_InvalidParameter: number;

declare const kCMFormatDescriptionBridgeError_InvalidSerializedSampleDescription: number;

declare const kCMFormatDescriptionBridgeError_InvalidSlice: number;

declare const kCMFormatDescriptionBridgeError_UnsupportedSampleDescriptionFlavor: number;
declare var kCMFormatDescriptionChromaLocation_Bottom: NSObject;

declare var kCMFormatDescriptionChromaLocation_BottomLeft: NSObject;

declare var kCMFormatDescriptionChromaLocation_Center: NSObject;

declare var kCMFormatDescriptionChromaLocation_DV420: NSObject;

declare var kCMFormatDescriptionChromaLocation_Left: NSObject;

declare var kCMFormatDescriptionChromaLocation_Top: NSObject;

declare var kCMFormatDescriptionChromaLocation_TopLeft: NSObject;

declare var kCMFormatDescriptionColorPrimaries_DCI_P3: NSObject;

declare var kCMFormatDescriptionColorPrimaries_EBU_3213: NSObject;

declare var kCMFormatDescriptionColorPrimaries_ITU_R_2020: NSObject;

declare var kCMFormatDescriptionColorPrimaries_ITU_R_709_2: NSObject;

declare var kCMFormatDescriptionColorPrimaries_P22: NSObject;

declare var kCMFormatDescriptionColorPrimaries_P3_D65: NSObject;

declare var kCMFormatDescriptionColorPrimaries_SMPTE_C: NSObject;

declare var kCMFormatDescriptionConformsToMPEG2VideoProfile: NSObject;


declare const kCMFormatDescriptionError_AllocationFailed: number;

declare const kCMFormatDescriptionError_InvalidParameter: number;

declare const kCMFormatDescriptionError_ValueNotAvailable: number;
declare var kCMFormatDescriptionExtensionKey_MetadataKeyTable: NSObject;

declare var kCMFormatDescriptionExtension_AlphaChannelMode: NSObject;

declare var kCMFormatDescriptionExtension_AlternativeTransferCharacteristics: NSObject;

declare var kCMFormatDescriptionExtension_AuxiliaryTypeInfo: NSObject;

declare var kCMFormatDescriptionExtension_BytesPerRow: NSObject;

declare var kCMFormatDescriptionExtension_ChromaLocationBottomField: NSObject;

declare var kCMFormatDescriptionExtension_ChromaLocationTopField: NSObject;

declare var kCMFormatDescriptionExtension_CleanAperture: NSObject;

declare var kCMFormatDescriptionExtension_ColorPrimaries: NSObject;

declare var kCMFormatDescriptionExtension_ContainsAlphaChannel: NSObject;

declare var kCMFormatDescriptionExtension_ContentLightLevelInfo: NSObject;

declare var kCMFormatDescriptionExtension_Depth: NSObject;

declare var kCMFormatDescriptionExtension_FieldCount: NSObject;

declare var kCMFormatDescriptionExtension_FieldDetail: NSObject;

declare var kCMFormatDescriptionExtension_FormatName: NSObject;

declare var kCMFormatDescriptionExtension_FullRangeVideo: NSObject;

declare var kCMFormatDescriptionExtension_GammaLevel: NSObject;

declare var kCMFormatDescriptionExtension_ICCProfile: NSObject;

declare var kCMFormatDescriptionExtension_MasteringDisplayColorVolume: NSObject;

declare var kCMFormatDescriptionExtension_OriginalCompressionSettings: NSObject;

declare var kCMFormatDescriptionExtension_PixelAspectRatio: NSObject;

declare var kCMFormatDescriptionExtension_RevisionLevel: NSObject;

declare var kCMFormatDescriptionExtension_SampleDescriptionExtensionAtoms: NSObject;

declare var kCMFormatDescriptionExtension_SpatialQuality: NSObject;

declare var kCMFormatDescriptionExtension_TemporalQuality: NSObject;

declare var kCMFormatDescriptionExtension_TransferFunction: NSObject;

declare var kCMFormatDescriptionExtension_Vendor: NSObject;

declare var kCMFormatDescriptionExtension_VerbatimISOSampleEntry: NSObject;

declare var kCMFormatDescriptionExtension_VerbatimImageDescription: NSObject;

declare var kCMFormatDescriptionExtension_VerbatimSampleDescription: NSObject;

declare var kCMFormatDescriptionExtension_Version: NSObject;

declare var kCMFormatDescriptionExtension_YCbCrMatrix: NSObject;

declare var kCMFormatDescriptionFieldDetail_SpatialFirstLineEarly: NSObject;

declare var kCMFormatDescriptionFieldDetail_SpatialFirstLineLate: NSObject;

declare var kCMFormatDescriptionFieldDetail_TemporalBottomFirst: NSObject;

declare var kCMFormatDescriptionFieldDetail_TemporalTopFirst: NSObject;

declare var kCMFormatDescriptionKey_CleanApertureHeight: NSObject;

declare var kCMFormatDescriptionKey_CleanApertureHeightRational: NSObject;

declare var kCMFormatDescriptionKey_CleanApertureHorizontalOffset: NSObject;

declare var kCMFormatDescriptionKey_CleanApertureHorizontalOffsetRational: NSObject;

declare var kCMFormatDescriptionKey_CleanApertureVerticalOffset: NSObject;

declare var kCMFormatDescriptionKey_CleanApertureVerticalOffsetRational: NSObject;

declare var kCMFormatDescriptionKey_CleanApertureWidth: NSObject;

declare var kCMFormatDescriptionKey_CleanApertureWidthRational: NSObject;

declare var kCMFormatDescriptionKey_PixelAspectRatioHorizontalSpacing: NSObject;

declare var kCMFormatDescriptionKey_PixelAspectRatioVerticalSpacing: NSObject;

declare var kCMFormatDescriptionTransferFunction_ITU_R_2020: NSObject;

declare var kCMFormatDescriptionTransferFunction_ITU_R_2100_HLG: NSObject;

declare var kCMFormatDescriptionTransferFunction_ITU_R_709_2: NSObject;

declare var kCMFormatDescriptionTransferFunction_Linear: NSObject;

declare var kCMFormatDescriptionTransferFunction_SMPTE_240M_1995: NSObject;

declare var kCMFormatDescriptionTransferFunction_SMPTE_ST_2084_PQ: NSObject;

declare var kCMFormatDescriptionTransferFunction_SMPTE_ST_428_1: NSObject;

declare var kCMFormatDescriptionTransferFunction_UseGamma: NSObject;

declare var kCMFormatDescriptionTransferFunction_sRGB: NSObject;

declare var kCMFormatDescriptionVendor_Apple: NSObject;

declare var kCMFormatDescriptionYCbCrMatrix_ITU_R_2020: NSObject;

declare var kCMFormatDescriptionYCbCrMatrix_ITU_R_601_4: NSObject;

declare var kCMFormatDescriptionYCbCrMatrix_ITU_R_709_2: NSObject;

declare var kCMFormatDescriptionYCbCrMatrix_SMPTE_240M_1995: NSObject;

declare var kCMHEVCTemporalLevelInfoKey_ConstraintIndicatorFlags: NSObject;

declare var kCMHEVCTemporalLevelInfoKey_LevelIndex: NSObject;

declare var kCMHEVCTemporalLevelInfoKey_ProfileCompatibilityFlags: NSObject;

declare var kCMHEVCTemporalLevelInfoKey_ProfileIndex: NSObject;

declare var kCMHEVCTemporalLevelInfoKey_ProfileSpace: NSObject;

declare var kCMHEVCTemporalLevelInfoKey_TemporalLevel: NSObject;

declare var kCMHEVCTemporalLevelInfoKey_TierFlag: NSObject;

declare var kCMImageDescriptionFlavor_3GPFamily: any;

declare var kCMImageDescriptionFlavor_ISOFamily: any;

declare var kCMImageDescriptionFlavor_QuickTimeMovie: any;


declare const kCMMPEG2VideoProfile_HDV_1080i50: number;

declare const kCMMPEG2VideoProfile_HDV_1080i60: number;

declare const kCMMPEG2VideoProfile_HDV_1080p24: number;

declare const kCMMPEG2VideoProfile_HDV_1080p25: number;

declare const kCMMPEG2VideoProfile_HDV_1080p30: number;

declare const kCMMPEG2VideoProfile_HDV_720p24: number;

declare const kCMMPEG2VideoProfile_HDV_720p25: number;

declare const kCMMPEG2VideoProfile_HDV_720p30: number;

declare const kCMMPEG2VideoProfile_HDV_720p50: number;

declare const kCMMPEG2VideoProfile_HDV_720p60: number;

declare const kCMMPEG2VideoProfile_XDCAM_EX_1080i50_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_EX_1080i60_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_EX_1080p24_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_EX_1080p25_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_EX_1080p30_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_EX_720p24_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_EX_720p25_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_EX_720p30_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_EX_720p50_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_EX_720p60_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_1080i50_CBR50: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_1080i60_CBR50: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_1080p24_CBR50: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_1080p25_CBR50: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_1080p30_CBR50: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_540p: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_720p24_CBR50: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_720p25_CBR50: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_720p30_CBR50: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_720p50_CBR50: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD422_720p60_CBR50: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD_1080i50_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD_1080i60_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD_1080p24_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD_1080p25_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD_1080p30_VBR35: number;

declare const kCMMPEG2VideoProfile_XDCAM_HD_540p: number;

declare const kCMMPEG2VideoProfile_XF: number;

declare const kCMMediaType_Audio: number;

declare const kCMMediaType_ClosedCaption: number;

declare const kCMMediaType_Metadata: number;

declare const kCMMediaType_Muxed: number;

declare const kCMMediaType_Subtitle: number;

declare const kCMMediaType_Text: number;

declare const kCMMediaType_TimeCode: number;

declare const kCMMediaType_Video: number;

declare const kCMMemoryPoolError_AllocationFailed: number;

declare const kCMMemoryPoolError_InvalidParameter: number;
declare var kCMMemoryPoolOption_AgeOutPeriod: NSObject;

declare var kCMMetadataBaseDataType_AffineTransformF64: NSObject;

declare var kCMMetadataBaseDataType_BMP: NSObject;

declare var kCMMetadataBaseDataType_DimensionsF32: NSObject;

declare var kCMMetadataBaseDataType_Float32: NSObject;

declare var kCMMetadataBaseDataType_Float64: NSObject;

declare var kCMMetadataBaseDataType_GIF: NSObject;

declare var kCMMetadataBaseDataType_JPEG: NSObject;

declare var kCMMetadataBaseDataType_JSON: NSObject;

declare var kCMMetadataBaseDataType_PNG: NSObject;

declare var kCMMetadataBaseDataType_PerspectiveTransformF64: NSObject;

declare var kCMMetadataBaseDataType_PointF32: NSObject;

declare var kCMMetadataBaseDataType_PolygonF32: NSObject;

declare var kCMMetadataBaseDataType_PolylineF32: NSObject;

declare var kCMMetadataBaseDataType_RawData: NSObject;

declare var kCMMetadataBaseDataType_RectF32: NSObject;

declare var kCMMetadataBaseDataType_SInt16: NSObject;

declare var kCMMetadataBaseDataType_SInt32: NSObject;

declare var kCMMetadataBaseDataType_SInt64: NSObject;

declare var kCMMetadataBaseDataType_SInt8: NSObject;

declare var kCMMetadataBaseDataType_UInt16: NSObject;

declare var kCMMetadataBaseDataType_UInt32: NSObject;

declare var kCMMetadataBaseDataType_UInt64: NSObject;

declare var kCMMetadataBaseDataType_UInt8: NSObject;

declare var kCMMetadataBaseDataType_UTF16: NSObject;

declare var kCMMetadataBaseDataType_UTF8: NSObject;


declare const kCMMetadataDataTypeRegistryError_AllocationFailed: number;

declare const kCMMetadataDataTypeRegistryError_BadDataTypeIdentifier: number;

declare const kCMMetadataDataTypeRegistryError_DataTypeAlreadyRegistered: number;

declare const kCMMetadataDataTypeRegistryError_MultipleConformingBaseTypes: number;

declare const kCMMetadataDataTypeRegistryError_RequiredParameterMissing: number;

declare const kCMMetadataDataTypeRegistryError_RequiresConformingBaseType: number;
declare var kCMMetadataDataType_QuickTimeMetadataDirection: NSObject;

declare var kCMMetadataDataType_QuickTimeMetadataLocation_ISO6709: NSObject;

declare var kCMMetadataFormatDescriptionKey_ConformingDataTypes: NSObject;

declare var kCMMetadataFormatDescriptionKey_DataType: NSObject;

declare var kCMMetadataFormatDescriptionKey_DataTypeNamespace: NSObject;

declare var kCMMetadataFormatDescriptionKey_LanguageTag: NSObject;

declare var kCMMetadataFormatDescriptionKey_LocalID: NSObject;

declare var kCMMetadataFormatDescriptionKey_Namespace: NSObject;

declare var kCMMetadataFormatDescriptionKey_SetupData: NSObject;

declare var kCMMetadataFormatDescriptionKey_StructuralDependency: NSObject;

declare var kCMMetadataFormatDescriptionKey_Value: NSObject;

declare var kCMMetadataFormatDescriptionMetadataSpecificationKey_DataType: NSObject;

declare var kCMMetadataFormatDescriptionMetadataSpecificationKey_ExtendedLanguageTag: NSObject;

declare var kCMMetadataFormatDescriptionMetadataSpecificationKey_Identifier: NSObject;

declare var kCMMetadataFormatDescriptionMetadataSpecificationKey_SetupData: NSObject;

declare var kCMMetadataFormatDescriptionMetadataSpecificationKey_StructuralDependency: NSObject;

declare var kCMMetadataFormatDescription_StructuralDependencyKey_DependencyIsInvalidFlag: NSObject;


declare const kCMMetadataFormatType_Boxed: number;

declare const kCMMetadataFormatType_EMSG: number;

declare const kCMMetadataFormatType_ICY: number;

declare const kCMMetadataFormatType_ID3: number;

declare const kCMMetadataIdentifierError_AllocationFailed: number;

declare const kCMMetadataIdentifierError_BadIdentifier: number;

declare const kCMMetadataIdentifierError_BadKey: number;

declare const kCMMetadataIdentifierError_BadKeyLength: number;

declare const kCMMetadataIdentifierError_BadKeySpace: number;

declare const kCMMetadataIdentifierError_BadKeyType: number;

declare const kCMMetadataIdentifierError_BadNumberKey: number;

declare const kCMMetadataIdentifierError_NoKeyValueAvailable: number;

declare const kCMMetadataIdentifierError_RequiredParameterMissing: number;
declare var kCMMetadataIdentifier_QuickTimeMetadataDirection_Facing: NSObject;

declare var kCMMetadataIdentifier_QuickTimeMetadataLivePhotoStillImageTransform: NSObject;

declare var kCMMetadataIdentifier_QuickTimeMetadataLivePhotoStillImageTransformReferenceDimensions: NSObject;

declare var kCMMetadataIdentifier_QuickTimeMetadataLocation_ISO6709: NSObject;

declare var kCMMetadataIdentifier_QuickTimeMetadataPreferredAffineTransform: NSObject;

declare var kCMMetadataIdentifier_QuickTimeMetadataVideoOrientation: NSObject;

declare var kCMMetadataKeySpace_HLSDateRange: NSObject;

declare var kCMMetadataKeySpace_ID3: NSObject;

declare var kCMMetadataKeySpace_ISOUserData: NSObject;

declare var kCMMetadataKeySpace_Icy: NSObject;

declare var kCMMetadataKeySpace_QuickTimeMetadata: NSObject;

declare var kCMMetadataKeySpace_QuickTimeUserData: NSObject;

declare var kCMMetadataKeySpace_iTunes: NSObject;


declare const kCMMuxedStreamType_DV: number;

declare const kCMMuxedStreamType_MPEG1System: number;

declare const kCMMuxedStreamType_MPEG2Program: number;

declare const kCMMuxedStreamType_MPEG2Transport: number;

declare const kCMPersistentTrackID_Invalid: number;

declare const kCMPixelFormat_16BE555: number;

declare const kCMPixelFormat_16BE565: number;

declare const kCMPixelFormat_16LE555: number;

declare const kCMPixelFormat_16LE5551: number;

declare const kCMPixelFormat_16LE565: number;

declare const kCMPixelFormat_24RGB: number;

declare const kCMPixelFormat_32ARGB: number;

declare const kCMPixelFormat_32BGRA: number;

declare const kCMPixelFormat_422YpCbCr10: number;

declare const kCMPixelFormat_422YpCbCr16: number;

declare const kCMPixelFormat_422YpCbCr8: number;

declare const kCMPixelFormat_422YpCbCr8_yuvs: number;

declare const kCMPixelFormat_4444YpCbCrA8: number;

declare const kCMPixelFormat_444YpCbCr10: number;

declare const kCMPixelFormat_444YpCbCr8: number;

declare const kCMPixelFormat_8IndexedGray_WhiteIsZero: number;
declare var kCMSampleAttachmentKey_AudioIndependentSampleDecoderRefreshCount: NSObject;

declare var kCMSampleAttachmentKey_DependsOnOthers: NSObject;

declare var kCMSampleAttachmentKey_DisplayImmediately: NSObject;

declare var kCMSampleAttachmentKey_DoNotDisplay: NSObject;

declare var kCMSampleAttachmentKey_EarlierDisplayTimesAllowed: NSObject;

declare var kCMSampleAttachmentKey_HEVCStepwiseTemporalSubLayerAccess: NSObject;

declare var kCMSampleAttachmentKey_HEVCSyncSampleNALUnitType: NSObject;

declare var kCMSampleAttachmentKey_HEVCTemporalLevelInfo: NSObject;

declare var kCMSampleAttachmentKey_HEVCTemporalSubLayerAccess: NSObject;

declare var kCMSampleAttachmentKey_HasRedundantCoding: NSObject;

declare var kCMSampleAttachmentKey_IsDependedOnByOthers: NSObject;

declare var kCMSampleAttachmentKey_NotSync: NSObject;

declare var kCMSampleAttachmentKey_PartialSync: NSObject;

declare var kCMSampleBufferAttachmentKey_CameraIntrinsicMatrix: NSObject;

declare var kCMSampleBufferAttachmentKey_DisplayEmptyMediaImmediately: NSObject;

declare var kCMSampleBufferAttachmentKey_DrainAfterDecoding: NSObject;

declare var kCMSampleBufferAttachmentKey_DroppedFrameReason: NSObject;

declare var kCMSampleBufferAttachmentKey_DroppedFrameReasonInfo: NSObject;

declare var kCMSampleBufferAttachmentKey_EmptyMedia: NSObject;

declare var kCMSampleBufferAttachmentKey_EndsPreviousSampleDuration: NSObject;

declare var kCMSampleBufferAttachmentKey_FillDiscontinuitiesWithSilence: NSObject;

declare var kCMSampleBufferAttachmentKey_ForceKeyFrame: NSObject;

declare var kCMSampleBufferAttachmentKey_GradualDecoderRefresh: NSObject;

declare var kCMSampleBufferAttachmentKey_PermanentEmptyMedia: NSObject;

declare var kCMSampleBufferAttachmentKey_PostNotificationWhenConsumed: NSObject;

declare var kCMSampleBufferAttachmentKey_ResetDecoderBeforeDecoding: NSObject;

declare var kCMSampleBufferAttachmentKey_ResumeOutput: NSObject;

declare var kCMSampleBufferAttachmentKey_Reverse: NSObject;

declare var kCMSampleBufferAttachmentKey_SampleReferenceByteOffset: NSObject;

declare var kCMSampleBufferAttachmentKey_SampleReferenceURL: NSObject;

declare var kCMSampleBufferAttachmentKey_SpeedMultiplier: NSObject;

declare var kCMSampleBufferAttachmentKey_StillImageLensStabilizationInfo: NSObject;

declare var kCMSampleBufferAttachmentKey_TransitionID: NSObject;

declare var kCMSampleBufferAttachmentKey_TrimDurationAtEnd: NSObject;

declare var kCMSampleBufferAttachmentKey_TrimDurationAtStart: NSObject;

declare var kCMSampleBufferConduitNotificationParameter_MaxUpcomingOutputPTS: NSObject;

declare var kCMSampleBufferConduitNotificationParameter_MinUpcomingOutputPTS: NSObject;

declare var kCMSampleBufferConduitNotificationParameter_ResumeTag: NSObject;

declare var kCMSampleBufferConduitNotificationParameter_UpcomingOutputPTSRangeMayOverlapQueuedOutputPTSRange: NSObject;

declare var kCMSampleBufferConduitNotification_InhibitOutputUntil: NSObject;

declare var kCMSampleBufferConduitNotification_ResetOutput: NSObject;

declare var kCMSampleBufferConduitNotification_UpcomingOutputPTSRangeChanged: NSObject;

declare var kCMSampleBufferConsumerNotification_BufferConsumed: NSObject;

declare var kCMSampleBufferDroppedFrameReasonInfo_CameraModeSwitch: NSObject;

declare var kCMSampleBufferDroppedFrameReason_Discontinuity: NSObject;

declare var kCMSampleBufferDroppedFrameReason_FrameWasLate: NSObject;

declare var kCMSampleBufferDroppedFrameReason_OutOfBuffers: NSObject;


declare const kCMSampleBufferError_AllocationFailed: number;

declare const kCMSampleBufferError_AlreadyHasDataBuffer: number;

declare const kCMSampleBufferError_ArrayTooSmall: number;

declare const kCMSampleBufferError_BufferHasNoSampleSizes: number;

declare const kCMSampleBufferError_BufferHasNoSampleTimingInfo: number;

declare const kCMSampleBufferError_BufferNotReady: number;

declare const kCMSampleBufferError_CannotSubdivide: number;

declare const kCMSampleBufferError_DataCanceled: number;

declare const kCMSampleBufferError_DataFailed: number;

declare const kCMSampleBufferError_InvalidEntryCount: number;

declare const kCMSampleBufferError_InvalidMediaFormat: number;

declare const kCMSampleBufferError_InvalidMediaTypeForOperation: number;

declare const kCMSampleBufferError_InvalidSampleData: number;

declare const kCMSampleBufferError_Invalidated: number;

declare const kCMSampleBufferError_RequiredParameterMissing: number;

declare const kCMSampleBufferError_SampleIndexOutOfRange: number;

declare const kCMSampleBufferError_SampleTimingInfoInvalid: number;

declare const kCMSampleBufferFlag_AudioBufferList_Assure16ByteAlignment: number;
declare var kCMSampleBufferLensStabilizationInfo_Active: NSObject;

declare var kCMSampleBufferLensStabilizationInfo_Off: NSObject;

declare var kCMSampleBufferLensStabilizationInfo_OutOfRange: NSObject;

declare var kCMSampleBufferLensStabilizationInfo_Unavailable: NSObject;

declare var kCMSampleBufferNotificationParameter_OSStatus: NSObject;

declare var kCMSampleBufferNotification_DataBecameReady: NSObject;

declare var kCMSampleBufferNotification_DataFailed: NSObject;


declare const kCMSimpleQueueError_AllocationFailed: number;

declare const kCMSimpleQueueError_ParameterOutOfRange: number;

declare const kCMSimpleQueueError_QueueIsFull: number;

declare const kCMSimpleQueueError_RequiredParameterMissing: number;
declare var kCMSoundDescriptionFlavor_3GPFamily: any;

declare var kCMSoundDescriptionFlavor_ISOFamily: any;

declare var kCMSoundDescriptionFlavor_QuickTimeMovie: any;

declare var kCMSoundDescriptionFlavor_QuickTimeMovieV2: any;


declare const kCMSubtitleFormatType_3GText: number;

declare const kCMSubtitleFormatType_WebVTT: number;

declare const kCMSyncError_AllocationFailed: number;

declare const kCMSyncError_InvalidParameter: number;

declare const kCMSyncError_MissingRequiredParameter: number;

declare const kCMSyncError_RateMustBeNonZero: number;

declare const kCMTextDisplayFlag_allSubtitlesForced: number;

declare const kCMTextDisplayFlag_continuousKaraoke: number;

declare const kCMTextDisplayFlag_fillTextRegion: number;

declare const kCMTextDisplayFlag_forcedSubtitlesPresent: number;

declare const kCMTextDisplayFlag_obeySubtitleFormatting: number;

declare const kCMTextDisplayFlag_scrollDirectionMask: number;

declare const kCMTextDisplayFlag_scrollDirection_bottomToTop: number;

declare const kCMTextDisplayFlag_scrollDirection_leftToRight: number;

declare const kCMTextDisplayFlag_scrollDirection_rightToLeft: number;

declare const kCMTextDisplayFlag_scrollDirection_topToBottom: number;

declare const kCMTextDisplayFlag_scrollIn: number;

declare const kCMTextDisplayFlag_scrollOut: number;

declare const kCMTextDisplayFlag_writeTextVertically: number;
declare var kCMTextFormatDescriptionColor_Alpha: NSObject;

declare var kCMTextFormatDescriptionColor_Blue: NSObject;

declare var kCMTextFormatDescriptionColor_Green: NSObject;

declare var kCMTextFormatDescriptionColor_Red: NSObject;

declare var kCMTextFormatDescriptionExtension_BackgroundColor: NSObject;

declare var kCMTextFormatDescriptionExtension_DefaultFontName: NSObject;

declare var kCMTextFormatDescriptionExtension_DefaultStyle: NSObject;

declare var kCMTextFormatDescriptionExtension_DefaultTextBox: NSObject;

declare var kCMTextFormatDescriptionExtension_DisplayFlags: NSObject;

declare var kCMTextFormatDescriptionExtension_FontTable: NSObject;

declare var kCMTextFormatDescriptionExtension_HorizontalJustification: NSObject;

declare var kCMTextFormatDescriptionExtension_TextJustification: NSObject;

declare var kCMTextFormatDescriptionExtension_VerticalJustification: NSObject;

declare var kCMTextFormatDescriptionRect_Bottom: NSObject;

declare var kCMTextFormatDescriptionRect_Left: NSObject;

declare var kCMTextFormatDescriptionRect_Right: NSObject;

declare var kCMTextFormatDescriptionRect_Top: NSObject;

declare var kCMTextFormatDescriptionStyle_Ascent: NSObject;

declare var kCMTextFormatDescriptionStyle_EndChar: NSObject;

declare var kCMTextFormatDescriptionStyle_Font: NSObject;

declare var kCMTextFormatDescriptionStyle_FontFace: NSObject;

declare var kCMTextFormatDescriptionStyle_FontSize: NSObject;

declare var kCMTextFormatDescriptionStyle_ForegroundColor: NSObject;

declare var kCMTextFormatDescriptionStyle_Height: NSObject;

declare var kCMTextFormatDescriptionStyle_StartChar: NSObject;


declare const kCMTextFormatType_3GText: number;

declare const kCMTextFormatType_QTText: number;

declare const kCMTextJustification_bottom_right: number;

declare const kCMTextJustification_centered: number;

declare const kCMTextJustification_left_top: number;
declare var kCMTextMarkupAlignmentType_End: NSObject;

declare var kCMTextMarkupAlignmentType_Left: NSObject;

declare var kCMTextMarkupAlignmentType_Middle: NSObject;

declare var kCMTextMarkupAlignmentType_Right: NSObject;

declare var kCMTextMarkupAlignmentType_Start: NSObject;

declare var kCMTextMarkupAttribute_Alignment: NSObject;

declare var kCMTextMarkupAttribute_BackgroundColorARGB: NSObject;

declare var kCMTextMarkupAttribute_BaseFontSizePercentageRelativeToVideoHeight: NSObject;

declare var kCMTextMarkupAttribute_BoldStyle: NSObject;

declare var kCMTextMarkupAttribute_CharacterBackgroundColorARGB: NSObject;

declare var kCMTextMarkupAttribute_CharacterEdgeStyle: NSObject;

declare var kCMTextMarkupAttribute_FontFamilyName: NSObject;

declare var kCMTextMarkupAttribute_ForegroundColorARGB: NSObject;

declare var kCMTextMarkupAttribute_GenericFontFamilyName: NSObject;

declare var kCMTextMarkupAttribute_ItalicStyle: NSObject;

declare var kCMTextMarkupAttribute_OrthogonalLinePositionPercentageRelativeToWritingDirection: NSObject;

declare var kCMTextMarkupAttribute_RelativeFontSize: NSObject;

declare var kCMTextMarkupAttribute_TextPositionPercentageRelativeToWritingDirection: NSObject;

declare var kCMTextMarkupAttribute_UnderlineStyle: NSObject;

declare var kCMTextMarkupAttribute_VerticalLayout: NSObject;

declare var kCMTextMarkupAttribute_WritingDirectionSizePercentage: NSObject;

declare var kCMTextMarkupCharacterEdgeStyle_Depressed: NSObject;

declare var kCMTextMarkupCharacterEdgeStyle_DropShadow: NSObject;

declare var kCMTextMarkupCharacterEdgeStyle_None: NSObject;

declare var kCMTextMarkupCharacterEdgeStyle_Raised: NSObject;

declare var kCMTextMarkupCharacterEdgeStyle_Uniform: NSObject;

declare var kCMTextMarkupGenericFontName_Casual: NSObject;

declare var kCMTextMarkupGenericFontName_Cursive: NSObject;

declare var kCMTextMarkupGenericFontName_Default: NSObject;

declare var kCMTextMarkupGenericFontName_Fantasy: NSObject;

declare var kCMTextMarkupGenericFontName_Monospace: NSObject;

declare var kCMTextMarkupGenericFontName_MonospaceSansSerif: NSObject;

declare var kCMTextMarkupGenericFontName_MonospaceSerif: NSObject;

declare var kCMTextMarkupGenericFontName_ProportionalSansSerif: NSObject;

declare var kCMTextMarkupGenericFontName_ProportionalSerif: NSObject;

declare var kCMTextMarkupGenericFontName_SansSerif: NSObject;

declare var kCMTextMarkupGenericFontName_Serif: NSObject;

declare var kCMTextMarkupGenericFontName_SmallCapital: NSObject;

declare var kCMTextVerticalLayout_LeftToRight: NSObject;

declare var kCMTextVerticalLayout_RightToLeft: NSObject;


declare const kCMTimeCodeFlag_24HourMax: number;

declare const kCMTimeCodeFlag_DropFrame: number;

declare const kCMTimeCodeFlag_NegTimesOK: number;
declare var kCMTimeCodeFormatDescriptionExtension_SourceReferenceName: NSObject;

declare var kCMTimeCodeFormatDescriptionKey_LangCode: NSObject;

declare var kCMTimeCodeFormatDescriptionKey_Value: NSObject;


declare const kCMTimeCodeFormatType_Counter32: number;

declare const kCMTimeCodeFormatType_Counter64: number;

declare const kCMTimeCodeFormatType_TimeCode32: number;

declare const kCMTimeCodeFormatType_TimeCode64: number;
declare var kCMTimeEpochKey: NSObject;

declare var kCMTimeFlagsKey: NSObject;

declare var kCMTimeIndefinite: CMTime;

declare var kCMTimeInvalid: CMTime;

declare var kCMTimeMappingInvalid: CMTimeMapping;

declare var kCMTimeMappingSourceKey: NSObject;

declare var kCMTimeMappingTargetKey: NSObject;

declare var kCMTimeNegativeInfinity: CMTime;

declare var kCMTimePositiveInfinity: CMTime;

declare var kCMTimeRangeDurationKey: NSObject;

declare var kCMTimeRangeInvalid: CMTimeRange;

declare var kCMTimeRangeStartKey: NSObject;

declare var kCMTimeRangeZero: CMTimeRange;

declare var kCMTimeScaleKey: NSObject;

declare var kCMTimeValueKey: NSObject;

declare var kCMTimeZero: CMTime;


declare const kCMTimebaseError_AllocationFailed: number;

declare const kCMTimebaseError_InvalidParameter: number;

declare const kCMTimebaseError_MissingRequiredParameter: number;

declare const kCMTimebaseError_ReadOnly: number;

declare const kCMTimebaseError_TimerIntervalTooShort: number;
declare var kCMTimebaseNotificationKey_EventTime: NSObject;

declare var kCMTimebaseNotification_EffectiveRateChanged: NSObject;

declare var kCMTimebaseNotification_TimeJumped: NSObject;

declare var kCMTimingInfoInvalid: CMSampleTimingInfo;


declare const kCMVideoCodecType_422YpCbCr8: number;

declare const kCMVideoCodecType_Animation: number;

declare const kCMVideoCodecType_AppleProRes422: number;

declare const kCMVideoCodecType_AppleProRes422HQ: number;

declare const kCMVideoCodecType_AppleProRes422LT: number;

declare const kCMVideoCodecType_AppleProRes422Proxy: number;

declare const kCMVideoCodecType_AppleProRes4444: number;

declare const kCMVideoCodecType_AppleProRes4444XQ: number;

declare const kCMVideoCodecType_AppleProResRAW: number;

declare const kCMVideoCodecType_AppleProResRAWHQ: number;

declare const kCMVideoCodecType_Cinepak: number;

declare const kCMVideoCodecType_DVCNTSC: number;

declare const kCMVideoCodecType_DVCPAL: number;

declare const kCMVideoCodecType_DVCPROHD1080i50: number;

declare const kCMVideoCodecType_DVCPROHD1080i60: number;

declare const kCMVideoCodecType_DVCPROHD1080p25: number;

declare const kCMVideoCodecType_DVCPROHD1080p30: number;

declare const kCMVideoCodecType_DVCPROHD720p50: number;

declare const kCMVideoCodecType_DVCPROHD720p60: number;

declare const kCMVideoCodecType_DVCPro50NTSC: number;

declare const kCMVideoCodecType_DVCPro50PAL: number;

declare const kCMVideoCodecType_DVCProPAL: number;

declare const kCMVideoCodecType_H263: number;

declare const kCMVideoCodecType_H264: number;

declare const kCMVideoCodecType_HEVC: number;

declare const kCMVideoCodecType_HEVCWithAlpha: number;

declare const kCMVideoCodecType_JPEG: number;

declare const kCMVideoCodecType_JPEG_OpenDML: number;

declare const kCMVideoCodecType_MPEG1Video: number;

declare const kCMVideoCodecType_MPEG2Video: number;

declare const kCMVideoCodecType_MPEG4Video: number;

declare const kCMVideoCodecType_SorensonVideo: number;

declare const kCMVideoCodecType_SorensonVideo3: number;
enum CMTimeFlags {
    kCMTimeFlags_Valid = 1,
    kCMTimeFlags_HasBeenRounded = 2,
    kCMTimeFlags_PositiveInfinity = 4,
    kCMTimeFlags_NegativeInfinity = 8,
    kCMTimeFlags_Indefinite = 16,
    kCMTimeFlags_ImpliedValueFlagsMask = 28
}

enum CMTimeRoundingMethod {
    kCMTimeRoundingMethod_RoundHalfAwayFromZero = 1,
    kCMTimeRoundingMethod_RoundTowardZero = 2,
    kCMTimeRoundingMethod_RoundAwayFromZero = 3,
    kCMTimeRoundingMethod_QuickTime = 4,
    kCMTimeRoundingMethod_RoundTowardPositiveInfinity = 5,
    kCMTimeRoundingMethod_RoundTowardNegativeInfinity = 6,
    kCMTimeRoundingMethod_Default = 1
}

