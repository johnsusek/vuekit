
interface FWACreateDeviceRec {
	vendorID: number;
	deviceName: number;
	guidStr: number;
}
declare var FWACreateDeviceRec: FWACreateDeviceRec;

interface FWACreateFWAudioPlugRec {
	owningAudioStreamRef: number;
	channelID: number;
	plugName: number;
	plugIdent: number;
	plugIdentIsNull: boolean;
}
declare var FWACreateFWAudioPlugRec: FWACreateFWAudioPlugRec;

interface FWACreateMIDIDeviceNubRec {
	owningDevice: number;
	vendorID: number;
	modelID: number;
	deviceName: number;
	guidStr: number;
	iconFilePath: number;
	editorPath: number;
}
declare var FWACreateMIDIDeviceNubRec: FWACreateMIDIDeviceNubRec;

interface FWACreateMIDIPlugRec {
	owningMIDIStreamRef: number;
	mpxID: number;
	plugName: number;
	plugIdent: number;
	plugIdentIsNull: boolean;
}
declare var FWACreateMIDIPlugRec: FWACreateMIDIPlugRec;

interface FWACreateStreamRec {
	owningIsochStreamRef: number;
	channelNumber: number;
	direction: number;
	numAudioChannels: number;
	streamName: number;
	streamIdent: number;
	streamIdentIsNull: boolean;
}
declare var FWACreateStreamRec: FWACreateStreamRec;

interface FWADeviceStatusRec {
	version: number;
	sampleCounter: number;
	inputSampleFrame: number;
	outputSampleFrame: number;
	inputClipSampleFrame: number;
	outputClipSampleFrame: number;
	meterData: number;
}
declare var FWADeviceStatusRec: FWADeviceStatusRec;

interface FWAGetPropertyRec {
	key: number;
	size: number;
	data: number;
}
declare var FWAGetPropertyRec: FWAGetPropertyRec;

enum FWAMIDIDataInfo {

	kFWAMIDIPlugName = 1835950445,

	kFWAMIDIPlugIdent = 1835623534,

	kFWAMIDIPlugPropertyPrivate = 1886546294,

	kFWAMIDIPlugPropertyEmbedded = 1701667428,

	kFWAMIDIGetIndexedPlug = 4294967295
}


interface FWAMIDIInputBufferWithTimeStamp {
	timeStamp: number;
	midiBuffer: number;
}
declare var FWAMIDIInputBufferWithTimeStamp: FWAMIDIInputBufferWithTimeStamp;

interface FWAMIDIOutputBufferWithTimeStamp {
	timeStamp: number;
	midiBuffer: number;
}
declare var FWAMIDIOutputBufferWithTimeStamp: FWAMIDIOutputBufferWithTimeStamp;

interface FWAMIDIReadBuf {
	bufSize: number;
	mrBuf: number;
}
declare var FWAMIDIReadBuf: FWAMIDIReadBuf;

interface FWASetPlugPropertyRec {
	owningPlugRef: number;
	plugPropertyKey: number;
	plugPropertyValue: number;
	plugPropertyValueIsNull: boolean;
}
declare var FWASetPlugPropertyRec: FWASetPlugPropertyRec;

interface FWASetPluginPathRec {
	owningEngineRef: number;
	vendorID: number;
	modelID: number;
	pluginPath: number;
	pluginPathIsNull: boolean;
	cacheValues: boolean;
}
declare var FWASetPluginPathRec: FWASetPluginPathRec;

enum FWAStreamDirection {

	kFWAStreamOut = 0,

	kFWAStreamIn = 1
}


enum FWAStreamOptions {

	kFWAStreamOptionsDefault = 0,

	kFWAStreamOptionsForceNuDCL = 65536,

	kFWAStreamOptionsForceLegacyDCL = 131072
}


enum FWAStreamState {

	kFWAStreamStopped = 0,

	kFWAStreamRunning = 1,

	kFWAStreamPaused = 2,

	kFWAStreamResumed = 3
}


enum FWAudioType {

	kIEC60958 = 0,

	kRawAudio = 64,

	kMIDI = 128,

	kAncillaryData = 192,

	kAllEventTypes = 255
}


declare const kAttachFWAudioMIDIStreamInParamCount: number;

declare const kAttachFWAudioMIDIStreamOutParamCount: number;

declare const kAttachFWAudioStreamInParamCount: number;

declare const kAttachFWAudioStreamOutParamCount: number;

declare const kCreateAudioStreamInParamCount: number;

declare const kCreateAudioStreamOutParamCount: number;

declare const kCreateFWAudioDeviceInParamCount: number;

declare const kCreateFWAudioDeviceOutParamCount: number;

declare const kCreateFWAudioEngineInParamCount: number;

declare const kCreateFWAudioEngineOutParamCount: number;

declare const kCreateFWAudioMIDIDeviceNubInParamCount: number;

declare const kCreateFWAudioMIDIDeviceNubOutParamCount: number;

declare const kCreateFWAudioMIDIPlugInParamCount: number;

declare const kCreateFWAudioMIDIPlugOutParamCount: number;

declare const kCreateFWAudioMIDIStreamInParamCount: number;

declare const kCreateFWAudioMIDIStreamOutParamCount: number;

declare const kCreateFWAudioPlugInParamCount: number;

declare const kCreateFWAudioPlugOutParamCount: number;

declare const kCreateFWAudioStreamInParamCount: number;

declare const kCreateFWAudioStreamOutParamCount: number;

declare const kCreateIsochStreamInParamCount: number;

declare const kCreateIsochStreamOutParamCount: number;

declare const kCurrentEraseHeadMeterArrayOffset: number;

declare const kCurrentInputDMASampleFrameMeterArrayOffset: number;

declare const kCurrentOutputDMASampleFrameMeterArrayOffset: number;

declare const kDisposeAudioStreamInParamCount: number;

declare const kDisposeAudioStreamOutParamCount: number;

declare const kDisposeFWAudioDeviceInParamCount: number;

declare const kDisposeFWAudioDeviceOutParamCount: number;

declare const kDisposeFWAudioEngineInParamCount: number;

declare const kDisposeFWAudioEngineOutParamCount: number;

declare const kDisposeFWAudioMIDIDeviceNubInParamCount: number;

declare const kDisposeFWAudioMIDIDeviceNubOutParamCount: number;

declare const kDisposeFWAudioMIDIPlugInParamCount: number;

declare const kDisposeFWAudioMIDIPlugOutParamCount: number;

declare const kDisposeFWAudioMIDIStreamInParamCount: number;

declare const kDisposeFWAudioMIDIStreamOutParamCount: number;

declare const kDisposeFWAudioPlugInParamCount: number;

declare const kDisposeFWAudioPlugOutParamCount: number;

declare const kDisposeFWAudioStreamInParamCount: number;

declare const kDisposeFWAudioStreamOutParamCount: number;

declare const kDisposeIsochStreamInParamCount: number;

declare const kDisposeIsochStreamOutParamCount: number;

declare const kFWAAttachFWAudioMIDIStream: number;

declare const kFWAAttachFWAudioStream: number;

declare const kFWACloseIndex: number;

declare const kFWACreateAudioStream: number;

declare const kFWACreateFWAudioDevice: number;

declare const kFWACreateFWAudioEngine: number;

declare const kFWACreateFWAudioMIDIDeviceNub: number;

declare const kFWACreateFWAudioMIDIPlug: number;

declare const kFWACreateFWAudioMIDIStream: number;

declare const kFWACreateFWAudioPlug: number;

declare const kFWACreateFWAudioStream: number;

declare const kFWACreateIsochStream: number;

declare const kFWACreateMIDIStream: number;

declare const kFWADisposeAudioStream: number;

declare const kFWADisposeFWAudioDevice: number;

declare const kFWADisposeFWAudioEngine: number;

declare const kFWADisposeFWAudioMIDIDeviceNub: number;

declare const kFWADisposeFWAudioMIDIPlug: number;

declare const kFWADisposeFWAudioMIDIStream: number;

declare const kFWADisposeFWAudioPlug: number;

declare const kFWADisposeFWAudioStream: number;

declare const kFWADisposeIsochStream: number;

declare const kFWADisposeMIDIStream: number;

declare const kFWAExecuteAVC: number;

declare const kFWAGetClockSource: number;

declare const kFWAGetCurrentStreamRefs: number;

declare const kFWAGetCycleTimeOffset: number;

declare const kFWAGetDeviceName: number;

declare const kFWAGetDeviceSampleRate: number;

declare const kFWAGetDeviceSendMode: number;

declare const kFWAGetDeviceStatus: number;

declare const kFWAGetDeviceStreamInfo: number;

declare const kFWAGetFWAudioMIDIPlugChannel: number;

declare const kFWAGetFWAudioPlugChannel: number;

declare const kFWAGetGUID: number;

declare const kFWAGetIndexedFWAudioMIDIPlug: number;

declare const kFWAGetIndexedFWAudioPlug: number;

declare const kFWAGetIsochStreamAudioChannelCount: number;

declare const kFWAGetIsochStreamChannelID: number;

declare const kFWAGetIsochStreamDirection: number;

declare const kFWAGetIsochStreamMIDIChannelCount: number;

declare const kFWAGetMacGUID: number;

declare const kFWAGetMaxSpeed: number;

declare const kFWAGetNodeID: number;

declare const kFWAGetNumAudioInputPlugs: number;

declare const kFWAGetNumAudioOutputPlugs: number;

declare const kFWAGetNumMIDIInputPlugs: number;

declare const kFWAGetNumMIDIOutputPlugs: number;

declare const kFWAGetProperty: number;

declare const kFWAGetSessionRef: number;

declare const kFWAGetStreamAudioType: number;

declare const kFWAGetStreamOutputSpeed: number;

declare const kFWAGetStreamSampleRate: number;

declare const kFWAGetStreamState: number;

declare const kFWAGetVendorID: number;

declare const kFWAGetVendorName: number;

declare const kFWAIsMIDICapable: number;

declare const kFWAMIDIDeviceNubAttachMIDIPlug: number;

declare const kFWAMIDIDeviceNubDetachMIDIPlug: number;

declare const kFWANumberFWAMethods: number;

declare const kFWAOpenIndex: number;

declare const kFWAOpenLocalWithInterface: number;

declare const kFWAOpenWithService: number;

declare const kFWAPlugNotConnected: number;

declare const kFWAReadBlock: number;

declare const kFWAReadMIDIData: number;

declare const kFWAReadQuadlet: number;

declare const kFWAReserveIsochSequences: number;

declare const kFWASetAsyncPort: number;

declare const kFWASetAutoLoad: number;

declare const kFWASetClockSource: number;

declare const kFWASetCycleTimeOffset: number;

declare const kFWASetDeviceStreamInfo: number;

declare const kFWASetFWAudioMIDIPlugChannel: number;

declare const kFWASetFWAudioMIDIPlugProperty: number;

declare const kFWASetFWAudioPlugChannel: number;

declare const kFWASetFWAudioPlugProperty: number;

declare const kFWASetIsochStreamAudioChannelCount: number;

declare const kFWASetIsochStreamChannelID: number;

declare const kFWASetIsochStreamMIDIChannelCount: number;

declare const kFWASetNumMIDIInputPlugs: number;

declare const kFWASetNumMIDIOutputPlugs: number;

declare const kFWASetPluginPath: number;

declare const kFWASetProperty: number;

declare const kFWASetStreamAudioType: number;

declare const kFWASetStreamCallbackFunction: number;

declare const kFWASetStreamOutputSpeed: number;

declare const kFWASetStreamSampleRate: number;

declare const kFWAStartFWAudioDevice: number;

declare const kFWAStartIsochStream: number;

declare const kFWAStopFWAudioDevice: number;

declare const kFWAStopIsochStream: number;

declare const kFWASyncUpDevice: number;

declare const kFWAUnusedIsochChannelID: number;

declare const kFWAWriteBlock: number;

declare const kFWAWriteMIDIData: number;

declare const kFWAWriteQuadlet: number;

declare const kFWAudioMaxNameSize: number;

declare const kGetBadHeaderCountMeterArrayOffset: number;

declare const kGetBigPacketCountMeterArrayOffset: number;

declare const kGetClockSourceInParamCount: number;

declare const kGetClockSourceOutParamCount: number;

declare const kGetCurrentStreamRefsInParamCount: number;

declare const kGetCurrentStreamRefsOutParamCount: number;

declare const kGetCycleTimeOffsetInParamCount: number;

declare const kGetCycleTimeOffsetOutParamCount: number;

declare const kGetDeviceNameInParamCount: number;

declare const kGetDeviceNameOutParamCount: number;

declare const kGetDeviceSampleRateInParamCount: number;

declare const kGetDeviceSampleRateOutParamCount: number;

declare const kGetDeviceSendModeInParamCount: number;

declare const kGetDeviceSendModeOutParamCount: number;

declare const kGetDeviceStatusInParamCount: number;

declare const kGetDeviceStatusOutParamCount: number;

declare const kGetDeviceStreamInfoInParamCount: number;

declare const kGetDeviceStreamInfoOutParamCount: number;

declare const kGetFWAudioMIDIPlugChannelInParamCount: number;

declare const kGetFWAudioMIDIPlugChannelOutParamCount: number;

declare const kGetFWAudioPlugChannelInParamCount: number;

declare const kGetFWAudioPlugChannelOutParamCount: number;

declare const kGetFixedHeaderCountMeterArrayOffset: number;

declare const kGetIndexedFWAudioMIDIPlugInParamCount: number;

declare const kGetIndexedFWAudioMIDIPlugOutParamCount: number;

declare const kGetIndexedFWAudioPlugInParamCount: number;

declare const kGetIndexedFWAudioPlugOutParamCount: number;

declare const kGetIsochStreamAudioChannelCountInParamCount: number;

declare const kGetIsochStreamAudioChannelCountOutParamCount: number;

declare const kGetIsochStreamChannelIDInParamCount: number;

declare const kGetIsochStreamChannelIDOutParamCount: number;

declare const kGetIsochStreamDirectionInParamCount: number;

declare const kGetIsochStreamDirectionOutParamCount: number;

declare const kGetIsochStreamMIDIChannelCountInParamCount: number;

declare const kGetIsochStreamMIDIChannelCountOutParamCount: number;

declare const kGetMaxSpeedInParamCount: number;

declare const kGetMaxSpeedOutParamCount: number;

declare const kGetNumAudioInputPlugsInParamCount: number;

declare const kGetNumAudioInputPlugsOutParamCount: number;

declare const kGetNumAudioOutputPlugsInParamCount: number;

declare const kGetNumAudioOutputPlugsOutParamCount: number;

declare const kGetNumMIDIInputPlugsInParamCount: number;

declare const kGetNumMIDIInputPlugsOutParamCount: number;

declare const kGetNumMIDIOutputPlugsInParamCount: number;

declare const kGetNumMIDIOutputPlugsOutParamCount: number;

declare const kGetPropertyInParamCount: number;

declare const kGetPropertyOutParamCount: number;

declare const kGetSessionRefInParamCount: number;

declare const kGetSessionRefOutParamCount: number;

declare const kGetStreamAudioTypeInParamCount: number;

declare const kGetStreamAudioTypeOutParamCount: number;

declare const kGetStreamOutputSpeedInParamCount: number;

declare const kGetStreamOutputSpeedOutParamCount: number;

declare const kGetStreamSampleRateInParamCount: number;

declare const kGetStreamSampleRateOutParamCount: number;

declare const kGetStreamStateInParamCount: number;

declare const kGetStreamStateOutParamCount: number;

declare const kGetVendorNameInParamCount: number;

declare const kGetVendorNameOutParamCount: number;

declare const kInputPacketCountMeterArrayOffset: number;

declare const kIsMIDICapableInParamCount: number;

declare const kIsMIDICapableOutParamCount: number;

declare const kLastTimeStampMeterArrayOffset: number;

declare const kLastTimeStampMeterArrayOffset2: number;

declare const kMIDIAdvanceSchedule: number;

declare const kMIDIDeviceNubAttachMIDIPlugInParamCount: number;

declare const kMIDIDeviceNubAttachMIDIPlugOutParamCount: number;

declare const kMIDIDeviceNubDetachMIDIPlugInParamCount: number;

declare const kMIDIDeviceNubDetachMIDIPlugOutParamCount: number;

declare const kMIDIStreamIn: number;

declare const kMIDIStreamOut: number;

declare const kMIDITimeStamp: number;

declare const kNumSamplesFramesInBufferMeterArrayOffset: number;

declare const kOpenLocalWithInterfaceInParamCount: number;

declare const kOpenLocalWithInterfaceOutParamCount: number;

declare const kOpenWithServiceInParamCount: number;

declare const kOpenWithServiceOutParamCount: number;

declare const kReadBlockInParamCount: number;

declare const kReadBlockOutParamCount: number;

declare const kReadMIDIAsync: number;

declare const kReadQuadletInParamCount: number;

declare const kReadQuadletOutParamCount: number;

declare const kReserveIsochSequencesInParamCount: number;

declare const kReserveIsochSequencesOutParamCount: number;

declare const kSetAutoLoadInParamCount: number;

declare const kSetAutoLoadOutParamCount: number;

declare const kSetClockSourceInParamCount: number;

declare const kSetClockSourceOutParamCount: number;

declare const kSetCycleTimeOffsetInParamCount: number;

declare const kSetCycleTimeOffsetOutParamCount: number;

declare const kSetDeviceStreamInfoInParamCount: number;

declare const kSetDeviceStreamInfoOutParamCount: number;

declare const kSetFWAudioMIDIPlugChannelInParamCount: number;

declare const kSetFWAudioMIDIPlugChannelOutParamCount: number;

declare const kSetFWAudioMIDIPlugPropertyInParamCount: number;

declare const kSetFWAudioMIDIPlugPropertyOutParamCount: number;

declare const kSetFWAudioPlugChannelInParamCount: number;

declare const kSetFWAudioPlugChannelOutParamCount: number;

declare const kSetFWAudioPlugPropertyInParamCount: number;

declare const kSetFWAudioPlugPropertyOutParamCount: number;

declare const kSetIsochStreamAudioChannelCountInParamCount: number;

declare const kSetIsochStreamAudioChannelCountOutParamCount: number;

declare const kSetIsochStreamChannelIDInParamCount: number;

declare const kSetIsochStreamChannelIDOutParamCount: number;

declare const kSetIsochStreamMIDIChannelCountInParamCount: number;

declare const kSetIsochStreamMIDIChannelCountOutParamCount: number;

declare const kSetNumMIDIInputPlugsInParamCount: number;

declare const kSetNumMIDIInputPlugsOutParamCount: number;

declare const kSetNumMIDIOutputPlugsInParamCount: number;

declare const kSetNumMIDIOutputPlugsOutParamCount: number;

declare const kSetPluginPathInParamCount: number;

declare const kSetPluginPathOutParamCount: number;

declare const kSetPropertyInParamCount: number;

declare const kSetPropertyOutParamCount: number;

declare const kSetStreamAudioTypeInParamCount: number;

declare const kSetStreamAudioTypeOutParamCount: number;

declare const kSetStreamCallbackFunctionInParamCount: number;

declare const kSetStreamCallbackFunctionOutParamCount: number;

declare const kSetStreamOutputSpeedInParamCount: number;

declare const kSetStreamOutputSpeedOutParamCount: number;

declare const kSetStreamSampleRateInParamCount: number;

declare const kSetStreamSampleRateOutParamCount: number;

declare const kStartFWAudioDeviceInParamCount: number;

declare const kStartFWAudioDeviceOutParamCount: number;

declare const kStartIsochStreamInParamCount: number;

declare const kStartIsochStreamOutParamCount: number;

declare const kStopFWAudioDeviceInParamCount: number;

declare const kStopFWAudioDeviceOutParamCount: number;

declare const kStopIsochStreamInParamCount: number;

declare const kStopIsochStreamOutParamCount: number;

declare const kSyncUpDeviceInParamCount: number;

declare const kSyncUpDeviceOutParamCount: number;

declare const kWriteBlockInParamCount: number;

declare const kWriteBlockOutParamCount: number;

declare const kWriteMIDIAsync: number;

declare const kWriteQuadletInParamCount: number;

declare const kWriteQuadletOutParamCount: number;
