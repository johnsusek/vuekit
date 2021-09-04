
enum AU3DMixerAttenuationCurve {

	k3DMixerAttenuationCurve_Power = 0,

	k3DMixerAttenuationCurve_Exponential = 1,

	k3DMixerAttenuationCurve_Inverse = 2,

	k3DMixerAttenuationCurve_Linear = 3
}


enum AU3DMixerRenderingFlags {

	k3DMixerRenderingFlags_InterAuralDelay = 1,

	k3DMixerRenderingFlags_DopplerShift = 2,

	k3DMixerRenderingFlags_DistanceAttenuation = 4,

	k3DMixerRenderingFlags_DistanceFilter = 8,

	k3DMixerRenderingFlags_DistanceDiffusion = 16,

	k3DMixerRenderingFlags_LinearDistanceAttenuation = 32,

	k3DMixerRenderingFlags_ConstantReverbBlend = 64
}


declare class AUAudioUnit extends NSObject {

	static instantiateWithComponentDescriptionOptionsCompletionHandler(_: AudioComponentDescription, options: AudioComponentInstantiationOptions, completionHandler?: (p1: AUAudioUnit, p2: NSError) => void): void;

	static registerSubclassAsComponentDescriptionNameVersion(_: typeof NSObject, asComponentDescription: AudioComponentDescription, name: string, version: number): void;

	setMIDIOutputBufferSizeHint(_: number)

	MIDIOutputBufferSizeHint: number;

	setMIDIOutputEventBlock(_: (p1: number, p2: number, p3: number, p4: string) => number)

	MIDIOutputEventBlock: (p1: number, p2: number, p3: number, p4: string) => number;

	readonly MIDIOutputNames: NSArray<string>;

	readonly allParameterValues: boolean;

	readonly audioUnitName: string;

	readonly audioUnitShortName: string;

	readonly canPerformInput: boolean;

	readonly canPerformOutput: boolean;

	readonly canProcessInPlace: boolean;

	readonly channelCapabilities: NSArray<number>;

	setChannelMap(_: NSArray<number>)

	channelMap: NSArray<number>;

	readonly component: any;

	readonly componentDescription: AudioComponentDescription;

	readonly componentName: string;

	readonly componentVersion: number;

	setContextName(_: string)

	contextName: string;

	setCurrentPreset(_: AUAudioUnitPreset)

	currentPreset: AUAudioUnitPreset;

	readonly deviceID: number;

	readonly deviceInputLatency: number;

	readonly deviceOutputLatency: number;

	readonly factoryPresets: NSArray<AUAudioUnitPreset>;

	setFullState(_: NSDictionary<string, any>)

	fullState: NSDictionary<string, any>;

	setFullStateForDocument(_: NSDictionary<string, any>)

	fullStateForDocument: NSDictionary<string, any>;

	readonly inputBusses: AUAudioUnitBusArray;

	setInputEnabled(_: boolean)

	isInputEnabled: boolean;

	setInputHandler(_: (p1: AudioUnitRenderActionFlags, p2: AudioTimeStamp, p3: number, p4: number) => void)

	inputHandler: (p1: AudioUnitRenderActionFlags, p2: AudioTimeStamp, p3: number, p4: number) => void;

	readonly isLoadedInProcess: boolean;

	readonly latency: number;

	readonly manufacturerName: string;

	setMaximumFramesToRender(_: number)

	maximumFramesToRender: number;

	readonly isMusicDeviceOrEffect: boolean;

	setMusicalContextBlock(_: (p1: number, p2: number, p3: number, p4: number, p5: number, p6: number) => boolean)

	musicalContextBlock: (p1: number, p2: number, p3: number, p4: number, p5: number, p6: number) => boolean;

	readonly outputBusses: AUAudioUnitBusArray;

	setOutputEnabled(_: boolean)

	isOutputEnabled: boolean;

	setOutputProvider(_: (p1: AudioUnitRenderActionFlags, p2: AudioTimeStamp, p3: number, p4: number, p5: AudioBufferList) => number)

	outputProvider: (p1: AudioUnitRenderActionFlags, p2: AudioTimeStamp, p3: number, p4: number, p5: AudioBufferList) => number;

	setParameterTree(_: AUParameterTree)

	parameterTree: AUParameterTree;

	readonly providesUserInterface: boolean;

	readonly renderBlock: (p1: AudioUnitRenderActionFlags, p2: AudioTimeStamp, p3: number, p4: number, p5: AudioBufferList, p6: (p1: AudioUnitRenderActionFlags, p2: AudioTimeStamp, p3: number, p4: number, p5: AudioBufferList) => number) => number;

	setRenderQuality(_: number)

	renderQuality: number;

	readonly renderResourcesAllocated: boolean;

	setRenderingOffline(_: boolean)

	isRenderingOffline: boolean;

	readonly isRunning: boolean;

	readonly scheduleMIDIEventBlock: (p1: number, p2: number, p3: number, p4: string) => void;

	readonly scheduleParameterBlock: (p1: number, p2: number, p3: number, p4: number) => void;

	setShouldBypassEffect(_: boolean)

	shouldBypassEffect: boolean;

	readonly supportsMPE: boolean;

	readonly supportsUserPresets: boolean;

	readonly tailTime: number;

	setTransportStateBlock(_: (p1: AUHostTransportStateFlags, p2: number, p3: number, p4: number) => boolean)

	transportStateBlock: (p1: AUHostTransportStateFlags, p2: number, p3: number, p4: number) => boolean;

	readonly userPresets: NSArray<AUAudioUnitPreset>;

	readonly virtualMIDICableCount: number;

	static create(componentDescription: AudioComponentDescription);

	static create(componentDescription: AudioComponentDescription, options: AudioComponentInstantiationOptions);

	allocateRenderResourcesAndReturnError(): boolean;

	deallocateRenderResources(): void;

	deleteUserPresetError(error: AUAudioUnitPreset): boolean;

	parametersForOverviewWithCount(_: number): NSArray<number>;

	presetStateForError(error: AUAudioUnitPreset): NSDictionary<string, any>;

	removeRenderObserver(_: number): void;

	requestViewControllerWithCompletionHandler(_?: (p1: NSViewController) => void): void;

	reset(): void;

	saveUserPresetError(error: AUAudioUnitPreset): boolean;

	selectViewConfiguration(_: AUAudioUnitViewConfiguration): void;

	setDeviceIDError(error: number): boolean;

	setRenderResourcesAllocated(_: boolean): void;

	shouldChangeToFormatForBus(_: AVAudioFormat, forBus: AUAudioUnitBus): boolean;

	startHardwareAndReturnError(): boolean;

	stopHardware(): void;

	supportedViewConfigurations(_: NSArray<AUAudioUnitViewConfiguration>): NSIndexSet;

	tokenByAddingRenderObserver(_: (p1: AudioUnitRenderActionFlags, p2: AudioTimeStamp, p3: number, p4: number) => void): number;
}

declare class AUAudioUnitBus extends NSObject {

	readonly busType: AUAudioUnitBusType;

	setContextPresentationLatency(_: number)

	contextPresentationLatency: number;

	setEnabled(_: boolean)

	isEnabled: boolean;

	readonly format: AVAudioFormat;

	readonly index: number;

	setMaximumChannelCount(_: number)

	maximumChannelCount: number;

	setName(_: string)

	name: string;

	readonly ownerAudioUnit: AUAudioUnit;

	setShouldAllocateBuffer(_: boolean)

	shouldAllocateBuffer: boolean;

	setSupportedChannelCounts(_: NSArray<number>)

	supportedChannelCounts: NSArray<number>;

	readonly supportedChannelLayoutTags: NSArray<number>;

	static create(format: AVAudioFormat);

	setFormatError(error: AVAudioFormat): boolean;
}

declare class AUAudioUnitBusArray extends NSObject implements NSFastEnumeration {

	readonly busType: AUAudioUnitBusType;

	readonly count: number;

	readonly isCountChangeable: boolean;

	readonly ownerAudioUnit: AUAudioUnit;

	static create(audioUnit: AUAudioUnit, busType: AUAudioUnitBusType);

	static create(audioUnit: AUAudioUnit, busType: AUAudioUnitBusType, busses: NSArray<AUAudioUnitBus> | AUAudioUnitBus[]);

	addObserverToAllBussesForKeyPathOptionsContext(_: NSObject, forKeyPath: string, options: NSKeyValueObservingOptions, context?: any): void;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	objectAtIndexedSubscript(_: number): AUAudioUnitBus;

	removeObserverFromAllBussesForKeyPathContext(_: NSObject, forKeyPath: string, context?: any): void;

	replaceBusses(_: NSArray<AUAudioUnitBus>): void;

	setBusCountError(error: number): boolean;
}

enum AUAudioUnitBusType {

	Input = 1,

	Output = 2
}


interface AUAudioUnitFactory extends NSExtensionRequestHandling {

	createAudioUnitWithComponentDescriptionError(error: AudioComponentDescription): AUAudioUnit;
}
declare var AUAudioUnitFactory: {

	prototype: AUAudioUnitFactory;
};

declare class AUAudioUnitPreset extends NSObject implements NSSecureCoding {

	setName(_: string)

	name: string;

	setNumber(_: number)

	number: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class AUAudioUnitV2Bridge extends AUAudioUnit {
}

interface AUChannelInfo {
	inChannels: number;
	outChannels: number;
}
declare var AUChannelInfo: AUChannelInfo;

interface AUCocoaUIBase {

	interfaceVersion(): number;

	uiViewForAudioUnitWithSize(_: ComponentInstanceRecord, withSize: CGSize): NSView;
}
declare var AUCocoaUIBase: {

	prototype: AUCocoaUIBase;
};

interface AUDependentParameter {
	mScope: number;
	mParameterID: number;
}
declare var AUDependentParameter: AUDependentParameter;

interface AUDistanceAttenuationData {
	inNumberOfPairs: number;
	pairs: { inDistance: number; outGain: number; };
}
declare var AUDistanceAttenuationData: AUDistanceAttenuationData;

declare const AUEventSampleTimeImmediate: number;

declare function AUGraphAddNode(inGraph: any, inDescription: AudioComponentDescription, outNode: number): number;

declare function AUGraphAddRenderNotify(inGraph: any, inCallback: (p1: any, p2: AudioUnitRenderActionFlags, p3: AudioTimeStamp, p4: number, p5: number, p6: AudioBufferList) => number, inRefCon: any): number;

declare function AUGraphClearConnections(inGraph: any): number;

declare function AUGraphClose(inGraph: any): number;

declare function AUGraphConnectNodeInput(inGraph: any, inSourceNode: number, inSourceOutputNumber: number, inDestNode: number, inDestInputNumber: number): number;

declare function AUGraphCountNodeInteractions(inGraph: any, inNode: number, outNumInteractions: number): number;

declare function AUGraphDisconnectNodeInput(inGraph: any, inDestNode: number, inDestInputNumber: number): number;

declare function AUGraphGetCPULoad(inGraph: any, outAverageCPULoad: number): number;

declare function AUGraphGetIndNode(inGraph: any, inIndex: number, outNode: number): number;

declare function AUGraphGetMaxCPULoad(inGraph: any, outMaxLoad: number): number;

declare function AUGraphGetNodeCount(inGraph: any, outNumberOfNodes: number): number;

declare function AUGraphGetNodeInfoSubGraph(inGraph: any, inNode: number, outSubGraph: any): number;

declare function AUGraphGetNumberOfInteractions(inGraph: any, outNumInteractions: number): number;

declare function AUGraphInitialize(inGraph: any): number;

declare function AUGraphIsInitialized(inGraph: any, outIsInitialized: string | any): number;

declare function AUGraphIsNodeSubGraph(inGraph: any, inNode: number, outFlag: string | any): number;

declare function AUGraphIsOpen(inGraph: any, outIsOpen: string | any): number;

declare function AUGraphIsRunning(inGraph: any, outIsRunning: string | any): number;

declare function AUGraphNewNodeSubGraph(inGraph: any, outNode: number): number;

declare function AUGraphNodeInfo(inGraph: any, inNode: number, outDescription: AudioComponentDescription, outAudioUnit: ComponentInstanceRecord): number;

declare function AUGraphOpen(inGraph: any): number;

declare function AUGraphRemoveNode(inGraph: any, inNode: number): number;

declare function AUGraphRemoveRenderNotify(inGraph: any, inCallback: (p1: any, p2: AudioUnitRenderActionFlags, p3: AudioTimeStamp, p4: number, p5: number, p6: AudioBufferList) => number, inRefCon: any): number;

declare function AUGraphSetNodeInputCallback(inGraph: any, inDestNode: number, inDestInputNumber: number, inInputCallback: AURenderCallbackStruct): number;

declare function AUGraphStart(inGraph: any): number;

declare function AUGraphStop(inGraph: any): number;

declare function AUGraphUninitialize(inGraph: any): number;

declare function AUGraphUpdate(inGraph: any, outIsUpdated: string | any): number;

interface AUHostIdentifier {
	hostName: string;
	hostVersion: AUNumVersion;
}
declare var AUHostIdentifier: AUHostIdentifier;

enum AUHostTransportStateFlags {

	Changed = 1,

	Moving = 2,

	Recording = 4,

	Cycling = 8
}


interface AUHostVersionIdentifier {
	hostName: string;
	hostVersion: number;
}
declare var AUHostVersionIdentifier: AUHostVersionIdentifier;

interface AUInputSamplesInOutputCallbackStruct {
	inputToOutputCallback: (p1: any, p2: AudioTimeStamp, p3: number, p4: number) => void;
	userData: any;
}
declare var AUInputSamplesInOutputCallbackStruct: AUInputSamplesInOutputCallbackStruct;

declare function AUListenerAddParameter(inListener: any, inObject: any, inParameter: AudioUnitParameter): number;

declare function AUListenerCreate(inProc: (p1: any, p2: any, p3: AudioUnitParameter, p4: number) => void, inUserData: any, inRunLoop: any, inRunLoopMode: string, inNotificationInterval: number, outListener: any): number;

declare function AUListenerCreateWithDispatchQueue(outListener: any, inNotificationInterval: number, inDispatchQueue: NSObject, inBlock: (p1: any, p2: AudioUnitParameter, p3: number) => void): number;

declare function AUListenerDispose(inListener: any): number;

declare function AUListenerRemoveParameter(inListener: any, inObject: any, inParameter: AudioUnitParameter): number;

interface AUMIDIOutputCallbackStruct {
	midiOutputCallback: (p1: any, p2: AudioTimeStamp, p3: number, p4: MIDIPacketList) => number;
	userData: any;
}
declare var AUMIDIOutputCallbackStruct: AUMIDIOutputCallbackStruct;

interface AUNodeRenderCallback {
	destNode: number;
	destInputNumber: number;
	cback: AURenderCallbackStruct;
}
declare var AUNodeRenderCallback: AUNodeRenderCallback;

interface AUNumVersion {
	nonRelRev: number;
	stage: number;
	minorAndBugRev: number;
	majorRev: number;
}
declare var AUNumVersion: AUNumVersion;

declare class AUParameter extends AUParameterNode implements NSSecureCoding {

	readonly address: number;

	readonly dependentParameters: NSArray<number>;

	readonly flags: AudioUnitParameterOptions;

	readonly maxValue: number;

	readonly minValue: number;

	readonly unit: AudioUnitParameterUnit;

	readonly unitName: string;

	setValue(_: number)

	value: number;

	readonly valueStrings: NSArray<string>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	setValueOriginator(_: number, originator?: any): void;

	setValueOriginatorAtHostTime(_: number, originator?: any, atHostTime: number): void;

	setValueOriginatorAtHostTimeEventType(_: number, originator?: any, atHostTime: number, eventType: AUParameterAutomationEventType): void;

	stringFromValue(_?: number): string;

	valueFromString(_: string): number;
}

interface AUParameterAutomationEvent {
	hostTime: number;
	address: number;
	value: number;
	eventType: AUParameterAutomationEventType;
	reserved: number;
}
declare var AUParameterAutomationEvent: AUParameterAutomationEvent;

enum AUParameterAutomationEventType {

	Value = 0,

	Touch = 1,

	Release = 2
}


enum AUParameterEventType {

	kParameterEvent_Immediate = 1,

	kParameterEvent_Ramped = 2
}


declare function AUParameterFormatValue(inParameterValue: number, inParameter: AudioUnitParameter, inTextBuffer: string | any, inDigits: number): string;

declare class AUParameterGroup extends AUParameterNode implements NSSecureCoding {

	readonly allParameters: NSArray<AUParameter>;

	readonly children: NSArray<AUParameterNode>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare function AUParameterListenerNotify(inSendingListener: any, inSendingObject: any, inParameter: AudioUnitParameter): number;

interface AUParameterMIDIMapping {
	mScope: number;
	mElement: number;
	mParameterID: number;
	mFlags: AUParameterMIDIMappingFlags;
	mSubRangeMin: number;
	mSubRangeMax: number;
	mStatus: number;
	mData1: number;
	reserved1: number;
	reserved2: number;
	reserved3: number;
}
declare var AUParameterMIDIMapping: AUParameterMIDIMapping;

enum AUParameterMIDIMappingFlags {

	kAUParameterMIDIMapping_AnyChannelFlag = 1,

	kAUParameterMIDIMapping_AnyNoteFlag = 2,

	kAUParameterMIDIMapping_SubRange = 4,

	kAUParameterMIDIMapping_Toggle = 8,

	kAUParameterMIDIMapping_Bipolar = 16,

	kAUParameterMIDIMapping_Bipolar_On = 32
}


declare class AUParameterNode extends NSObject {

	readonly displayName: string;

	readonly identifier: string;

	setImplementorDisplayNameWithLengthCallback(_: (p1: AUParameterNode, p2: number) => string)

	implementorDisplayNameWithLengthCallback: (p1: AUParameterNode, p2: number) => string;

	setImplementorStringFromValueCallback(_: (p1: AUParameter, p2: number) => string)

	implementorStringFromValueCallback: (p1: AUParameter, p2: number) => string;

	setImplementorValueFromStringCallback(_: (p1: AUParameter, p2: string) => number)

	implementorValueFromStringCallback: (p1: AUParameter, p2: string) => number;

	setImplementorValueObserver(_: (p1: AUParameter, p2: number) => void)

	implementorValueObserver: (p1: AUParameter, p2: number) => void;

	setImplementorValueProvider(_: (p1: AUParameter) => number)

	implementorValueProvider: (p1: AUParameter) => number;

	readonly keyPath: string;

	displayNameWithLength(_: number): string;

	removeParameterObserver(_: any): void;

	tokenByAddingParameterAutomationObserver(_: (p1: number, p2: AUParameterAutomationEvent) => void): any;

	tokenByAddingParameterObserver(_: (p1: number, p2: number) => void): any;

	tokenByAddingParameterRecordingObserver(_: (p1: number, p2: AURecordedParameterEvent) => void): any;
}

declare function AUParameterSet(inSendingListener: any, inSendingObject: any, inParameter: AudioUnitParameter, inValue: number, inBufferOffsetInFrames: number): number;

declare class AUParameterTree extends AUParameterGroup implements NSSecureCoding {

	static createGroupFromTemplateIdentifierNameAddressOffset(_: AUParameterGroup, identifier: string, name: string, addressOffset: number): AUParameterGroup;

	static createGroupTemplate(_: NSArray<AUParameterNode>): AUParameterGroup;

	static createGroupWithIdentifierNameChildren(_: string, name: string, children: NSArray<AUParameterNode>): AUParameterGroup;

	static createParameterWithIdentifierNameAddressMinMaxUnitUnitNameFlagsValueStringsDependentParameters(_: string, name: string, address: number, min: number, max: number, unit: AudioUnitParameterUnit, unitName?: string, flags: AudioUnitParameterOptions, valueStrings?: NSArray<string>, dependentParameters?: NSArray<number>): AUParameter;

	static createTreeWithChildren(_: NSArray<AUParameterNode>): AUParameterTree;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	parameterWithAddress(_: number): AUParameter;

	parameterWithIDScopeElement(_: number, scope: number, element: number): AUParameter;
}

declare function AUParameterValueFromLinear(inLinearValue: number, inParameter: AudioUnitParameter): number;

declare function AUParameterValueToLinear(inParameterValue: number, inParameter: AudioUnitParameter): number;

interface AUPreset {
	presetNumber: number;
	presetName: string;
}
declare var AUPreset: AUPreset;

interface AUPresetEvent {
	scope: number;
	element: number;
	preset: any;
}
declare var AUPresetEvent: AUPresetEvent;

interface AURecordedParameterEvent {
	hostTime: number;
	address: number;
	value: number;
}
declare var AURecordedParameterEvent: AURecordedParameterEvent;

interface AURenderCallbackStruct {
	inputProc: (p1: any, p2: AudioUnitRenderActionFlags, p3: AudioTimeStamp, p4: number, p5: number, p6: AudioBufferList) => number;
	inputProcRefCon: any;
}
declare var AURenderCallbackStruct: AURenderCallbackStruct;

enum AURenderEventType {

	Parameter = 1,

	ParameterRamp = 2,

	MIDI = 8,

	MIDISysEx = 9
}


enum AUReverbRoomType {

	kReverbRoomType_SmallRoom = 0,

	kReverbRoomType_MediumRoom = 1,

	kReverbRoomType_LargeRoom = 2,

	kReverbRoomType_MediumHall = 3,

	kReverbRoomType_LargeHall = 4,

	kReverbRoomType_Plate = 5,

	kReverbRoomType_MediumChamber = 6,

	kReverbRoomType_LargeChamber = 7,

	kReverbRoomType_Cathedral = 8,

	kReverbRoomType_LargeRoom2 = 9,

	kReverbRoomType_MediumHall2 = 10,

	kReverbRoomType_MediumHall3 = 11,

	kReverbRoomType_LargeHall2 = 12
}


interface AUSamplerBankPresetData {
	bankURL: NSURL;
	bankMSB: number;
	bankLSB: number;
	presetID: number;
	reserved: number;
}
declare var AUSamplerBankPresetData: AUSamplerBankPresetData;

interface AUSamplerInstrumentData {
	fileURL: NSURL;
	instrumentType: number;
	bankMSB: number;
	bankLSB: number;
	presetID: number;
}
declare var AUSamplerInstrumentData: AUSamplerInstrumentData;

enum AUScheduledAudioSliceFlags {

	kScheduledAudioSliceFlag_Complete = 1,

	kScheduledAudioSliceFlag_BeganToRender = 2,

	kScheduledAudioSliceFlag_BeganToRenderLate = 4,

	kScheduledAudioSliceFlag_Loop = 8,

	kScheduledAudioSliceFlag_Interrupt = 16,

	kScheduledAudioSliceFlag_InterruptAtLoop = 32
}


enum AUSpatialMixerAttenuationCurve {

	kSpatialMixerAttenuationCurve_Power = 0,

	kSpatialMixerAttenuationCurve_Exponential = 1,

	kSpatialMixerAttenuationCurve_Inverse = 2,

	kSpatialMixerAttenuationCurve_Linear = 3
}


enum AUSpatialMixerRenderingFlags {

	kSpatialMixerRenderingFlags_InterAuralDelay = 1,

	kSpatialMixerRenderingFlags_DistanceAttenuation = 4
}


enum AUSpatializationAlgorithm {

	kSpatializationAlgorithm_EqualPowerPanning = 0,

	kSpatializationAlgorithm_SphericalHead = 1,

	kSpatializationAlgorithm_HRTF = 2,

	kSpatializationAlgorithm_SoundField = 3,

	kSpatializationAlgorithm_VectorBasedPanning = 4,

	kSpatializationAlgorithm_StereoPassThrough = 5,

	kSpatializationAlgorithm_HRTFHQ = 6
}


interface AudioBalanceFade {
	mLeftRightBalance: number;
	mBackFrontFade: number;
	mType: AudioBalanceFadeType;
	mChannelLayout: AudioChannelLayout;
}
declare var AudioBalanceFade: AudioBalanceFade;

enum AudioBalanceFadeType {

	kAudioBalanceFadeType_MaxUnityGain = 0,

	kAudioBalanceFadeType_EqualPower = 1
}


interface AudioBytePacketTranslation {
	mByte: number;
	mPacket: number;
	mByteOffsetInPacket: number;
	mFlags: AudioBytePacketTranslationFlags;
}
declare var AudioBytePacketTranslation: AudioBytePacketTranslation;

enum AudioBytePacketTranslationFlags {

	kBytePacketTranslationFlag_IsEstimate = 1
}


declare function AudioCodecAppendInputBufferList(inCodec: ComponentInstanceRecord, inBufferList: AudioBufferList, ioNumberPackets: number, inPacketDescription: AudioStreamPacketDescription, outBytesConsumed: number): number;

declare function AudioCodecAppendInputData(inCodec: ComponentInstanceRecord, inInputData: any, ioInputDataByteSize: number, ioNumberPackets: number, inPacketDescription: AudioStreamPacketDescription): number;

declare function AudioCodecGetProperty(inCodec: ComponentInstanceRecord, inPropertyID: number, ioPropertyDataSize: number, outPropertyData: any): number;

declare function AudioCodecGetPropertyInfo(inCodec: ComponentInstanceRecord, inPropertyID: number, outSize: number, outWritable: string | any): number;

declare function AudioCodecInitialize(inCodec: ComponentInstanceRecord, inInputFormat: AudioStreamBasicDescription, inOutputFormat: AudioStreamBasicDescription, inMagicCookie: any, inMagicCookieByteSize: number): number;

interface AudioCodecMagicCookieInfo {
	mMagicCookieSize: number;
	mMagicCookie: any;
}
declare var AudioCodecMagicCookieInfo: AudioCodecMagicCookieInfo;

interface AudioCodecPrimeInfo {
	leadingFrames: number;
	trailingFrames: number;
}
declare var AudioCodecPrimeInfo: AudioCodecPrimeInfo;

declare function AudioCodecProduceOutputBufferList(inCodec: ComponentInstanceRecord, ioBufferList: AudioBufferList, ioNumberPackets: number, outPacketDescription: AudioStreamPacketDescription, outStatus: number): number;

declare function AudioCodecProduceOutputPackets(inCodec: ComponentInstanceRecord, outOutputData: any, ioOutputDataByteSize: number, ioNumberPackets: number, outPacketDescription: AudioStreamPacketDescription, outStatus: number): number;

declare function AudioCodecReset(inCodec: ComponentInstanceRecord): number;

declare function AudioCodecSetProperty(inCodec: ComponentInstanceRecord, inPropertyID: number, inPropertyDataSize: number, inPropertyData: any): number;

declare function AudioCodecUninitialize(inCodec: ComponentInstanceRecord): number;

declare function AudioComponentCopyConfigurationInfo(inComponent: any, outConfigurationInfo: NSDictionary<any, any>): number;

declare function AudioComponentCopyName(inComponent: any, outName: string): number;

declare function AudioComponentCount(inDesc: AudioComponentDescription): number;

interface AudioComponentDescription {
	componentType: number;
	componentSubType: number;
	componentManufacturer: number;
	componentFlags: number;
	componentFlagsMask: number;
}
declare var AudioComponentDescription: AudioComponentDescription;

declare function AudioComponentFindNext(inComponent: any, inDesc: AudioComponentDescription): any;

enum AudioComponentFlags {

	kAudioComponentFlag_Unsearchable = 1,

	kAudioComponentFlag_SandboxSafe = 2,

	kAudioComponentFlag_IsV3AudioUnit = 4,

	kAudioComponentFlag_RequiresAsyncInstantiation = 8,

	kAudioComponentFlag_CanLoadInProcess = 16
}


declare function AudioComponentGetDescription(inComponent: any, outDesc: AudioComponentDescription): number;

declare function AudioComponentGetIcon(comp: any): NSImage;

declare function AudioComponentGetVersion(inComponent: any, outVersion: number): number;

declare function AudioComponentInstanceCanDo(inInstance: ComponentInstanceRecord, inSelectorID: number): boolean;

declare function AudioComponentInstanceDispose(inInstance: ComponentInstanceRecord): number;

declare function AudioComponentInstanceGetComponent(inInstance: ComponentInstanceRecord): any;

declare function AudioComponentInstanceNew(inComponent: any, outInstance: ComponentInstanceRecord): number;

declare function AudioComponentInstantiate(inComponent: any, inOptions: AudioComponentInstantiationOptions, inCompletionHandler: (p1: ComponentInstanceRecord, p2: number) => void): void;

enum AudioComponentInstantiationOptions {

	kAudioComponentInstantiation_LoadOutOfProcess = 1,

	kAudioComponentInstantiation_LoadInProcess = 2
}


interface AudioComponentPlugInInterface {
	Open: (p1: any, p2: ComponentInstanceRecord) => number;
	Close: (p1: any) => number;
	Lookup: (p1: number) => (p1: any) => number;
	reserved: any;
}
declare var AudioComponentPlugInInterface: AudioComponentPlugInInterface;

declare function AudioComponentRegister(inDesc: AudioComponentDescription, inName: string, inVersion: number, inFactory: (p1: AudioComponentDescription) => AudioComponentPlugInInterface): any;

declare function AudioComponentValidate(inComponent: any, inValidationParameters: NSDictionary<any, any>, outValidationResult: AudioComponentValidationResult): number;

enum AudioComponentValidationResult {

	kAudioComponentValidationResult_Unknown = 0,

	kAudioComponentValidationResult_Passed = 1,

	kAudioComponentValidationResult_Failed = 2,

	kAudioComponentValidationResult_TimedOut = 3,

	kAudioComponentValidationResult_UnauthorizedError_Open = 4,

	kAudioComponentValidationResult_UnauthorizedError_Init = 5
}


declare function AudioConverterConvertBuffer(inAudioConverter: any, inInputDataSize: number, inInputData: any, ioOutputDataSize: number, outOutputData: any): number;

declare function AudioConverterConvertComplexBuffer(inAudioConverter: any, inNumberPCMFrames: number, inInputData: AudioBufferList, outOutputData: AudioBufferList): number;

declare function AudioConverterDispose(inAudioConverter: any): number;

declare function AudioConverterFillComplexBuffer(inAudioConverter: any, inInputDataProc: (p1: any, p2: number, p3: AudioBufferList, p4: AudioStreamPacketDescription, p5: any) => number, inInputDataProcUserData: any, ioOutputDataPacketSize: number, outOutputData: AudioBufferList, outPacketDescription: AudioStreamPacketDescription): number;

declare function AudioConverterGetProperty(inAudioConverter: any, inPropertyID: number, ioPropertyDataSize: number, outPropertyData: any): number;

declare function AudioConverterGetPropertyInfo(inAudioConverter: any, inPropertyID: number, outSize: number, outWritable: string | any): number;

declare function AudioConverterNew(inSourceFormat: AudioStreamBasicDescription, inDestinationFormat: AudioStreamBasicDescription, outAudioConverter: any): number;

declare function AudioConverterNewSpecific(inSourceFormat: AudioStreamBasicDescription, inDestinationFormat: AudioStreamBasicDescription, inNumberClassDescriptions: number, inClassDescriptions: AudioClassDescription, outAudioConverter: any): number;

interface AudioConverterPrimeInfo {
	leadingFrames: number;
	trailingFrames: number;
}
declare var AudioConverterPrimeInfo: AudioConverterPrimeInfo;

declare function AudioConverterReset(inAudioConverter: any): number;

declare function AudioConverterSetProperty(inAudioConverter: any, inPropertyID: number, inPropertyDataSize: number, inPropertyData: any): number;

declare function AudioFileClose(inAudioFile: any): number;

declare function AudioFileComponentCloseFile(inComponent: ComponentInstanceRecord): number;

declare function AudioFileComponentCountUserData(inComponent: ComponentInstanceRecord, inUserDataID: number, outNumberItems: number): number;

declare function AudioFileComponentCreateURL(inComponent: ComponentInstanceRecord, inFileRef: NSURL, inFormat: AudioStreamBasicDescription, inFlags: number): number;

declare function AudioFileComponentExtensionIsThisFormat(inComponent: ComponentInstanceRecord, inExtension: string, outResult: number): number;

declare function AudioFileComponentFileDataIsThisFormat(inComponent: ComponentInstanceRecord, inDataByteSize: number, inData: any, outResult: number): number;

declare function AudioFileComponentGetGlobalInfo(inComponent: ComponentInstanceRecord, inPropertyID: number, inSpecifierSize: number, inSpecifier: any, ioPropertyDataSize: number, outPropertyData: any): number;

declare function AudioFileComponentGetGlobalInfoSize(inComponent: ComponentInstanceRecord, inPropertyID: number, inSpecifierSize: number, inSpecifier: any, outPropertySize: number): number;

declare function AudioFileComponentGetProperty(inComponent: ComponentInstanceRecord, inPropertyID: number, ioPropertyDataSize: number, outPropertyData: any): number;

declare function AudioFileComponentGetPropertyInfo(inComponent: ComponentInstanceRecord, inPropertyID: number, outPropertySize: number, outWritable: number): number;

declare function AudioFileComponentGetUserData(inComponent: ComponentInstanceRecord, inUserDataID: number, inIndex: number, ioUserDataSize: number, outUserData: any): number;

declare function AudioFileComponentGetUserDataSize(inComponent: ComponentInstanceRecord, inUserDataID: number, inIndex: number, outUserDataSize: number): number;

declare function AudioFileComponentInitializeWithCallbacks(inComponent: ComponentInstanceRecord, inClientData: any, inReadFunc: (p1: any, p2: number, p3: number, p4: any, p5: number) => number, inWriteFunc: (p1: any, p2: number, p3: number, p4: any, p5: number) => number, inGetSizeFunc: (p1: any) => number, inSetSizeFunc: (p1: any, p2: number) => number, inFileType: number, inFormat: AudioStreamBasicDescription, inFlags: number): number;

declare function AudioFileComponentOpenURL(inComponent: ComponentInstanceRecord, inFileRef: NSURL, inPermissions: number, inFileDescriptor: number): number;

declare function AudioFileComponentOpenWithCallbacks(inComponent: ComponentInstanceRecord, inClientData: any, inReadFunc: (p1: any, p2: number, p3: number, p4: any, p5: number) => number, inWriteFunc: (p1: any, p2: number, p3: number, p4: any, p5: number) => number, inGetSizeFunc: (p1: any) => number, inSetSizeFunc: (p1: any, p2: number) => number): number;

declare function AudioFileComponentOptimize(inComponent: ComponentInstanceRecord): number;

declare function AudioFileComponentReadBytes(inComponent: ComponentInstanceRecord, inUseCache: boolean, inStartingByte: number, ioNumBytes: number, outBuffer: any): number;

declare function AudioFileComponentReadPacketData(inComponent: ComponentInstanceRecord, inUseCache: boolean, ioNumBytes: number, outPacketDescriptions: AudioStreamPacketDescription, inStartingPacket: number, ioNumPackets: number, outBuffer: any): number;

declare function AudioFileComponentReadPackets(inComponent: ComponentInstanceRecord, inUseCache: boolean, outNumBytes: number, outPacketDescriptions: AudioStreamPacketDescription, inStartingPacket: number, ioNumPackets: number, outBuffer: any): number;

declare function AudioFileComponentRemoveUserData(inComponent: ComponentInstanceRecord, inUserDataID: number, inIndex: number): number;

declare function AudioFileComponentSetProperty(inComponent: ComponentInstanceRecord, inPropertyID: number, inPropertyDataSize: number, inPropertyData: any): number;

declare function AudioFileComponentSetUserData(inComponent: ComponentInstanceRecord, inUserDataID: number, inIndex: number, inUserDataSize: number, inUserData: any): number;

declare function AudioFileComponentWriteBytes(inComponent: ComponentInstanceRecord, inUseCache: boolean, inStartingByte: number, ioNumBytes: number, inBuffer: any): number;

declare function AudioFileComponentWritePackets(inComponent: ComponentInstanceRecord, inUseCache: boolean, inNumBytes: number, inPacketDescriptions: AudioStreamPacketDescription, inStartingPacket: number, ioNumPackets: number, inBuffer: any): number;

declare function AudioFileCountUserData(inAudioFile: any, inUserDataID: number, outNumberItems: number): number;

declare function AudioFileCreateWithURL(inFileRef: NSURL, inFileType: number, inFormat: AudioStreamBasicDescription, inFlags: AudioFileFlags, outAudioFile: any): number;

interface AudioFileFDFTable {
	mComponentStorage: any;
	mReadBytesFDF: (p1: any, p2: boolean, p3: number, p4: number, p5: any) => number;
	mWriteBytesFDF: (p1: any, p2: boolean, p3: number, p4: number, p5: any) => number;
	mReadPacketsFDF: (p1: any, p2: boolean, p3: number, p4: AudioStreamPacketDescription, p5: number, p6: number, p7: any) => number;
	mWritePacketsFDF: (p1: any, p2: boolean, p3: number, p4: AudioStreamPacketDescription, p5: number, p6: number, p7: any) => number;
	mGetPropertyInfoFDF: (p1: any, p2: number, p3: number, p4: number) => number;
	mGetPropertyFDF: (p1: any, p2: number, p3: number, p4: any) => number;
	mSetPropertyFDF: (p1: any, p2: number, p3: number, p4: any) => number;
	mCountUserDataFDF: (p1: any, p2: number, p3: number) => number;
	mGetUserDataSizeFDF: (p1: any, p2: number, p3: number, p4: number) => number;
	mGetUserDataFDF: (p1: any, p2: number, p3: number, p4: number, p5: any) => number;
	mSetUserDataFDF: (p1: any, p2: number, p3: number, p4: number, p5: any) => number;
}
declare var AudioFileFDFTable: AudioFileFDFTable;

interface AudioFileFDFTableExtended {
	mComponentStorage: any;
	mReadBytesFDF: (p1: any, p2: boolean, p3: number, p4: number, p5: any) => number;
	mWriteBytesFDF: (p1: any, p2: boolean, p3: number, p4: number, p5: any) => number;
	mReadPacketsFDF: (p1: any, p2: boolean, p3: number, p4: AudioStreamPacketDescription, p5: number, p6: number, p7: any) => number;
	mWritePacketsFDF: (p1: any, p2: boolean, p3: number, p4: AudioStreamPacketDescription, p5: number, p6: number, p7: any) => number;
	mGetPropertyInfoFDF: (p1: any, p2: number, p3: number, p4: number) => number;
	mGetPropertyFDF: (p1: any, p2: number, p3: number, p4: any) => number;
	mSetPropertyFDF: (p1: any, p2: number, p3: number, p4: any) => number;
	mCountUserDataFDF: (p1: any, p2: number, p3: number) => number;
	mGetUserDataSizeFDF: (p1: any, p2: number, p3: number, p4: number) => number;
	mGetUserDataFDF: (p1: any, p2: number, p3: number, p4: number, p5: any) => number;
	mSetUserDataFDF: (p1: any, p2: number, p3: number, p4: number, p5: any) => number;
	mReadPacketDataFDF: (p1: any, p2: boolean, p3: number, p4: AudioStreamPacketDescription, p5: number, p6: number, p7: any) => number;
}
declare var AudioFileFDFTableExtended: AudioFileFDFTableExtended;

enum AudioFileFlags {

	kAudioFileFlags_EraseFile = 1,

	kAudioFileFlags_DontPageAlignAudioData = 2
}


declare function AudioFileGetGlobalInfo(inPropertyID: number, inSpecifierSize: number, inSpecifier: any, ioDataSize: number, outPropertyData: any): number;

declare function AudioFileGetGlobalInfoSize(inPropertyID: number, inSpecifierSize: number, inSpecifier: any, outDataSize: number): number;

declare function AudioFileGetProperty(inAudioFile: any, inPropertyID: number, ioDataSize: number, outPropertyData: any): number;

declare function AudioFileGetPropertyInfo(inAudioFile: any, inPropertyID: number, outDataSize: number, isWritable: number): number;

declare function AudioFileGetUserData(inAudioFile: any, inUserDataID: number, inIndex: number, ioUserDataSize: number, outUserData: any): number;

declare function AudioFileGetUserDataSize(inAudioFile: any, inUserDataID: number, inIndex: number, outUserDataSize: number): number;

declare function AudioFileInitializeWithCallbacks(inClientData: any, inReadFunc: (p1: any, p2: number, p3: number, p4: any, p5: number) => number, inWriteFunc: (p1: any, p2: number, p3: number, p4: any, p5: number) => number, inGetSizeFunc: (p1: any) => number, inSetSizeFunc: (p1: any, p2: number) => number, inFileType: number, inFormat: AudioStreamBasicDescription, inFlags: AudioFileFlags, outAudioFile: any): number;

interface AudioFileMarker {
	mFramePosition: number;
	mName: string;
	mMarkerID: number;
	mSMPTETime: AudioFile_SMPTE_Time;
	mType: number;
	mReserved: number;
	mChannel: number;
}
declare var AudioFileMarker: AudioFileMarker;

interface AudioFileMarkerList {
	mSMPTE_TimeType: number;
	mNumberMarkers: number;
	mMarkers: AudioFileMarker;
}
declare var AudioFileMarkerList: AudioFileMarkerList;

declare function AudioFileOpenURL(inFileRef: NSURL, inPermissions: AudioFilePermissions, inFileTypeHint: number, outAudioFile: any): number;

declare function AudioFileOpenWithCallbacks(inClientData: any, inReadFunc: (p1: any, p2: number, p3: number, p4: any, p5: number) => number, inWriteFunc: (p1: any, p2: number, p3: number, p4: any, p5: number) => number, inGetSizeFunc: (p1: any) => number, inSetSizeFunc: (p1: any, p2: number) => number, inFileTypeHint: number, outAudioFile: any): number;

declare function AudioFileOptimize(inAudioFile: any): number;

interface AudioFilePacketTableInfo {
	mNumberValidFrames: number;
	mPrimingFrames: number;
	mRemainderFrames: number;
}
declare var AudioFilePacketTableInfo: AudioFilePacketTableInfo;

enum AudioFilePermissions {

	kAudioFileReadPermission = 1,

	kAudioFileWritePermission = 2,

	kAudioFileReadWritePermission = 3
}


declare function AudioFileReadBytes(inAudioFile: any, inUseCache: boolean, inStartingByte: number, ioNumBytes: number, outBuffer: any): number;

declare function AudioFileReadPacketData(inAudioFile: any, inUseCache: boolean, ioNumBytes: number, outPacketDescriptions: AudioStreamPacketDescription, inStartingPacket: number, ioNumPackets: number, outBuffer: any): number;

interface AudioFileRegion {
	mRegionID: number;
	mName: string;
	mFlags: AudioFileRegionFlags;
	mNumberMarkers: number;
	mMarkers: AudioFileMarker;
}
declare var AudioFileRegion: AudioFileRegion;

enum AudioFileRegionFlags {

	kAudioFileRegionFlag_LoopEnable = 1,

	kAudioFileRegionFlag_PlayForward = 2,

	kAudioFileRegionFlag_PlayBackward = 4
}


interface AudioFileRegionList {
	mSMPTE_TimeType: number;
	mNumberRegions: number;
	mRegions: AudioFileRegion;
}
declare var AudioFileRegionList: AudioFileRegionList;

declare function AudioFileRemoveUserData(inAudioFile: any, inUserDataID: number, inIndex: number): number;

declare function AudioFileSetProperty(inAudioFile: any, inPropertyID: number, inDataSize: number, inPropertyData: any): number;

declare function AudioFileSetUserData(inAudioFile: any, inUserDataID: number, inIndex: number, inUserDataSize: number, inUserData: any): number;

declare function AudioFileStreamClose(inAudioFileStream: any): number;

declare function AudioFileStreamGetProperty(inAudioFileStream: any, inPropertyID: number, ioPropertyDataSize: number, outPropertyData: any): number;

declare function AudioFileStreamGetPropertyInfo(inAudioFileStream: any, inPropertyID: number, outPropertyDataSize: number, outWritable: string | any): number;

declare function AudioFileStreamOpen(inClientData: any, inPropertyListenerProc: (p1: any, p2: any, p3: number, p4: AudioFileStreamPropertyFlags) => void, inPacketsProc: (p1: any, p2: number, p3: number, p4: any, p5: AudioStreamPacketDescription) => void, inFileTypeHint: number, outAudioFileStream: any): number;

declare function AudioFileStreamParseBytes(inAudioFileStream: any, inDataByteSize: number, inData: any, inFlags: AudioFileStreamParseFlags): number;

enum AudioFileStreamParseFlags {

	kAudioFileStreamParseFlag_Discontinuity = 1
}


enum AudioFileStreamPropertyFlags {

	kAudioFileStreamPropertyFlag_PropertyIsCached = 1,

	kAudioFileStreamPropertyFlag_CacheProperty = 2
}


declare function AudioFileStreamSeek(inAudioFileStream: any, inPacketOffset: number, outDataByteOffset: number, ioFlags: AudioFileStreamSeekFlags): number;

enum AudioFileStreamSeekFlags {

	kAudioFileStreamSeekFlag_OffsetIsEstimated = 1
}


declare function AudioFileStreamSetProperty(inAudioFileStream: any, inPropertyID: number, inPropertyDataSize: number, inPropertyData: any): number;

interface AudioFileTypeAndFormatID {
	mFileType: number;
	mFormatID: number;
}
declare var AudioFileTypeAndFormatID: AudioFileTypeAndFormatID;

declare function AudioFileWriteBytes(inAudioFile: any, inUseCache: boolean, inStartingByte: number, ioNumBytes: number, inBuffer: any): number;

declare function AudioFileWritePackets(inAudioFile: any, inUseCache: boolean, inNumBytes: number, inPacketDescriptions: AudioStreamPacketDescription, inStartingPacket: number, ioNumPackets: number, inBuffer: any): number;

interface AudioFile_SMPTE_Time {
	mHours: number;
	mMinutes: number;
	mSeconds: number;
	mFrames: number;
	mSubFrameSampleOffset: number;
}
declare var AudioFile_SMPTE_Time: AudioFile_SMPTE_Time;

declare function AudioFormatGetProperty(inPropertyID: number, inSpecifierSize: number, inSpecifier: any, ioPropertyDataSize: number, outPropertyData: any): number;

declare function AudioFormatGetPropertyInfo(inPropertyID: number, inSpecifierSize: number, inSpecifier: any, outPropertyDataSize: number): number;

interface AudioFormatInfo {
	mASBD: AudioStreamBasicDescription;
	mMagicCookie: any;
	mMagicCookieSize: number;
}
declare var AudioFormatInfo: AudioFormatInfo;

interface AudioFramePacketTranslation {
	mFrame: number;
	mPacket: number;
	mFrameOffsetInPacket: number;
}
declare var AudioFramePacketTranslation: AudioFramePacketTranslation;

interface AudioIndependentPacketTranslation {
	mPacket: number;
	mIndependentlyDecodablePacket: number;
}
declare var AudioIndependentPacketTranslation: AudioIndependentPacketTranslation;

declare function AudioOutputUnitStart(ci: ComponentInstanceRecord): number;

interface AudioOutputUnitStartAtTimeParams {
	mTimestamp: AudioTimeStamp;
	mFlags: number;
}
declare var AudioOutputUnitStartAtTimeParams: AudioOutputUnitStartAtTimeParams;

declare function AudioOutputUnitStop(ci: ComponentInstanceRecord): number;

interface AudioPacketDependencyInfoTranslation {
	mPacket: number;
	mIsIndependentlyDecodable: number;
	mNumberPrerollPackets: number;
}
declare var AudioPacketDependencyInfoTranslation: AudioPacketDependencyInfoTranslation;

interface AudioPacketRangeByteCountTranslation {
	mPacket: number;
	mPacketCount: number;
	mByteCountUpperBound: number;
}
declare var AudioPacketRangeByteCountTranslation: AudioPacketRangeByteCountTranslation;

interface AudioPacketRollDistanceTranslation {
	mPacket: number;
	mRollDistance: number;
}
declare var AudioPacketRollDistanceTranslation: AudioPacketRollDistanceTranslation;

interface AudioPanningInfo {
	mPanningMode: AudioPanningMode;
	mCoordinateFlags: number;
	mCoordinates: number;
	mGainScale: number;
	mOutputChannelMap: AudioChannelLayout;
}
declare var AudioPanningInfo: AudioPanningInfo;

enum AudioPanningMode {

	kPanningMode_SoundField = 3,

	kPanningMode_VectorBasedPanning = 4
}


declare function AudioQueueAddPropertyListener(inAQ: any, inID: number, inProc: (p1: any, p2: any, p3: number) => void, inUserData: any): number;

declare function AudioQueueAllocateBuffer(inAQ: any, inBufferByteSize: number, outBuffer: AudioQueueBuffer): number;

declare function AudioQueueAllocateBufferWithPacketDescriptions(inAQ: any, inBufferByteSize: number, inNumberPacketDescriptions: number, outBuffer: AudioQueueBuffer): number;

interface AudioQueueBuffer {
	mAudioDataBytesCapacity: number;
	mAudioData: any;
	mAudioDataByteSize: number;
	mUserData: any;
	mPacketDescriptionCapacity: number;
	mPacketDescriptions: AudioStreamPacketDescription;
	mPacketDescriptionCount: number;
}
declare var AudioQueueBuffer: AudioQueueBuffer;

interface AudioQueueChannelAssignment {
	mDeviceUID: string;
	mChannelNumber: number;
}
declare var AudioQueueChannelAssignment: AudioQueueChannelAssignment;

declare function AudioQueueCreateTimeline(inAQ: any, outTimeline: any): number;

declare function AudioQueueDeviceGetCurrentTime(inAQ: any, outTimeStamp: AudioTimeStamp): number;

declare function AudioQueueDeviceGetNearestStartTime(inAQ: any, ioRequestedStartTime: AudioTimeStamp, inFlags: number): number;

declare function AudioQueueDeviceTranslateTime(inAQ: any, inTime: AudioTimeStamp, outTime: AudioTimeStamp): number;

declare function AudioQueueDispose(inAQ: any, inImmediate: boolean): number;

declare function AudioQueueDisposeTimeline(inAQ: any, inTimeline: any): number;

declare function AudioQueueEnqueueBuffer(inAQ: any, inBuffer: AudioQueueBuffer, inNumPacketDescs: number, inPacketDescs: AudioStreamPacketDescription): number;

declare function AudioQueueEnqueueBufferWithParameters(inAQ: any, inBuffer: AudioQueueBuffer, inNumPacketDescs: number, inPacketDescs: AudioStreamPacketDescription, inTrimFramesAtStart: number, inTrimFramesAtEnd: number, inNumParamValues: number, inParamValues: AudioQueueParameterEvent, inStartTime: AudioTimeStamp, outActualStartTime: AudioTimeStamp): number;

declare function AudioQueueFlush(inAQ: any): number;

declare function AudioQueueFreeBuffer(inAQ: any, inBuffer: AudioQueueBuffer): number;

declare function AudioQueueGetCurrentTime(inAQ: any, inTimeline: any, outTimeStamp: AudioTimeStamp, outTimelineDiscontinuity: string | any): number;

declare function AudioQueueGetParameter(inAQ: any, inParamID: number, outValue: number): number;

declare function AudioQueueGetProperty(inAQ: any, inID: number, outData: any, ioDataSize: number): number;

declare function AudioQueueGetPropertySize(inAQ: any, inID: number, outDataSize: number): number;

interface AudioQueueLevelMeterState {
	mAveragePower: number;
	mPeakPower: number;
}
declare var AudioQueueLevelMeterState: AudioQueueLevelMeterState;

declare function AudioQueueNewInput(inFormat: AudioStreamBasicDescription, inCallbackProc: (p1: any, p2: any, p3: AudioQueueBuffer, p4: AudioTimeStamp, p5: number, p6: AudioStreamPacketDescription) => void, inUserData: any, inCallbackRunLoop: any, inCallbackRunLoopMode: string, inFlags: number, outAQ: any): number;

declare function AudioQueueNewInputWithDispatchQueue(outAQ: any, inFormat: AudioStreamBasicDescription, inFlags: number, inCallbackDispatchQueue: NSObject, inCallbackBlock: (p1: any, p2: AudioQueueBuffer, p3: AudioTimeStamp, p4: number, p5: AudioStreamPacketDescription) => void): number;

declare function AudioQueueNewOutput(inFormat: AudioStreamBasicDescription, inCallbackProc: (p1: any, p2: any, p3: AudioQueueBuffer) => void, inUserData: any, inCallbackRunLoop: any, inCallbackRunLoopMode: string, inFlags: number, outAQ: any): number;

declare function AudioQueueNewOutputWithDispatchQueue(outAQ: any, inFormat: AudioStreamBasicDescription, inFlags: number, inCallbackDispatchQueue: NSObject, inCallbackBlock: (p1: any, p2: AudioQueueBuffer) => void): number;

declare function AudioQueueOfflineRender(inAQ: any, inTimestamp: AudioTimeStamp, ioBuffer: AudioQueueBuffer, inNumberFrames: number): number;

interface AudioQueueParameterEvent {
	mID: number;
	mValue: number;
}
declare var AudioQueueParameterEvent: AudioQueueParameterEvent;

declare function AudioQueuePause(inAQ: any): number;

declare function AudioQueuePrime(inAQ: any, inNumberOfFramesToPrepare: number, outNumberOfFramesPrepared: number): number;

declare function AudioQueueProcessingTapDispose(inAQTap: any): number;

enum AudioQueueProcessingTapFlags {

	kAudioQueueProcessingTap_PreEffects = 1,

	kAudioQueueProcessingTap_PostEffects = 2,

	kAudioQueueProcessingTap_Siphon = 4,

	kAudioQueueProcessingTap_StartOfStream = 256,

	kAudioQueueProcessingTap_EndOfStream = 512
}


declare function AudioQueueProcessingTapGetQueueTime(inAQTap: any, outQueueSampleTime: number, outQueueFrameCount: number): number;

declare function AudioQueueProcessingTapGetSourceAudio(inAQTap: any, inNumberFrames: number, ioTimeStamp: AudioTimeStamp, outFlags: AudioQueueProcessingTapFlags, outNumberFrames: number, ioData: AudioBufferList): number;

declare function AudioQueueProcessingTapNew(inAQ: any, inCallback: (p1: any, p2: any, p3: number, p4: AudioTimeStamp, p5: AudioQueueProcessingTapFlags, p6: number, p7: AudioBufferList) => void, inClientData: any, inFlags: AudioQueueProcessingTapFlags, outMaxFrames: number, outProcessingFormat: AudioStreamBasicDescription, outAQTap: any): number;

declare function AudioQueueRemovePropertyListener(inAQ: any, inID: number, inProc: (p1: any, p2: any, p3: number) => void, inUserData: any): number;

declare function AudioQueueReset(inAQ: any): number;

declare function AudioQueueSetOfflineRenderFormat(inAQ: any, inFormat: AudioStreamBasicDescription, inLayout: AudioChannelLayout): number;

declare function AudioQueueSetParameter(inAQ: any, inParamID: number, inValue: number): number;

declare function AudioQueueSetProperty(inAQ: any, inID: number, inData: any, inDataSize: number): number;

declare function AudioQueueStart(inAQ: any, inStartTime: AudioTimeStamp): number;

declare function AudioQueueStop(inAQ: any, inImmediate: boolean): number;

declare function AudioServicesAddSystemSoundCompletion(inSystemSoundID: number, inRunLoop: any, inRunLoopMode: string, inCompletionRoutine: (p1: number, p2: any) => void, inClientData: any): number;

declare function AudioServicesCreateSystemSoundID(inFileURL: NSURL, outSystemSoundID: number): number;

declare function AudioServicesDisposeSystemSoundID(inSystemSoundID: number): number;

declare function AudioServicesGetProperty(inPropertyID: number, inSpecifierSize: number, inSpecifier: any, ioPropertyDataSize: number, outPropertyData: any): number;

declare function AudioServicesGetPropertyInfo(inPropertyID: number, inSpecifierSize: number, inSpecifier: any, outPropertyDataSize: number, outWritable: string | any): number;

declare function AudioServicesPlayAlertSound(inSystemSoundID: number): void;

declare function AudioServicesPlayAlertSoundWithCompletion(inSystemSoundID: number, inCompletionBlock: () => void): void;

declare function AudioServicesPlaySystemSound(inSystemSoundID: number): void;

declare function AudioServicesPlaySystemSoundWithCompletion(inSystemSoundID: number, inCompletionBlock: () => void): void;

declare function AudioServicesRemoveSystemSoundCompletion(inSystemSoundID: number): void;

declare function AudioServicesSetProperty(inPropertyID: number, inSpecifierSize: number, inSpecifier: any, inPropertyDataSize: number, inPropertyData: any): number;

enum AudioSettingsFlags {

	kAudioSettingsFlags_ExpertParameter = 1,

	kAudioSettingsFlags_InvisibleParameter = 2,

	kAudioSettingsFlags_MetaParameter = 4,

	kAudioSettingsFlags_UserInterfaceParameter = 8
}


declare function AudioUnitAddPropertyListener(inUnit: ComponentInstanceRecord, inID: number, inProc: (p1: any, p2: ComponentInstanceRecord, p3: number, p4: number, p5: number) => void, inProcUserData: any): number;

declare function AudioUnitAddRenderNotify(inUnit: ComponentInstanceRecord, inProc: (p1: any, p2: AudioUnitRenderActionFlags, p3: AudioTimeStamp, p4: number, p5: number, p6: AudioBufferList) => number, inProcUserData: any): number;

interface AudioUnitCocoaViewInfo {
	mCocoaAUViewBundleLocation: NSURL;
	mCocoaAUViewClass: string;
}
declare var AudioUnitCocoaViewInfo: AudioUnitCocoaViewInfo;

interface AudioUnitConnection {
	sourceAudioUnit: ComponentInstanceRecord;
	sourceOutputNumber: number;
	destInputNumber: number;
}
declare var AudioUnitConnection: AudioUnitConnection;

enum AudioUnitEventType {

	kAudioUnitEvent_ParameterValueChange = 0,

	kAudioUnitEvent_BeginParameterChangeGesture = 1,

	kAudioUnitEvent_EndParameterChangeGesture = 2,

	kAudioUnitEvent_PropertyChange = 3
}


declare function AudioUnitExtensionCopyComponentList(extensionIdentifier: string): NSArray<any>;

declare function AudioUnitExtensionSetComponentList(extensionIdentifier: string, audioComponentInfo: NSArray<any> | any[]): number;

interface AudioUnitExternalBuffer {
	buffer: string;
	size: number;
}
declare var AudioUnitExternalBuffer: AudioUnitExternalBuffer;

interface AudioUnitFrequencyResponseBin {
	mFrequency: number;
	mMagnitude: number;
}
declare var AudioUnitFrequencyResponseBin: AudioUnitFrequencyResponseBin;

declare function AudioUnitGetParameter(inUnit: ComponentInstanceRecord, inID: number, inScope: number, inElement: number, outValue: number): number;

declare function AudioUnitGetProperty(inUnit: ComponentInstanceRecord, inID: number, inScope: number, inElement: number, outData: any, ioDataSize: number): number;

declare function AudioUnitGetPropertyInfo(inUnit: ComponentInstanceRecord, inID: number, inScope: number, inElement: number, outDataSize: number, outWritable: string | any): number;

declare function AudioUnitInitialize(inUnit: ComponentInstanceRecord): number;

interface AudioUnitMIDIControlMapping {
	midiNRPN: number;
	midiControl: number;
	scope: number;
	element: number;
	parameter: number;
}
declare var AudioUnitMIDIControlMapping: AudioUnitMIDIControlMapping;

interface AudioUnitMeterClipping {
	peakValueSinceLastCall: number;
	sawInfinity: boolean;
	sawNotANumber: boolean;
}
declare var AudioUnitMeterClipping: AudioUnitMeterClipping;

interface AudioUnitNodeConnection {
	sourceNode: number;
	sourceOutputNumber: number;
	destNode: number;
	destInputNumber: number;
}
declare var AudioUnitNodeConnection: AudioUnitNodeConnection;

interface AudioUnitOtherPluginDesc {
	format: number;
	plugin: AudioClassDescription;
}
declare var AudioUnitOtherPluginDesc: AudioUnitOtherPluginDesc;

interface AudioUnitParameter {
	mAudioUnit: ComponentInstanceRecord;
	mParameterID: number;
	mScope: number;
	mElement: number;
}
declare var AudioUnitParameter: AudioUnitParameter;

interface AudioUnitParameterHistoryInfo {
	updatesPerSecond: number;
	historyDurationInSeconds: number;
}
declare var AudioUnitParameterHistoryInfo: AudioUnitParameterHistoryInfo;

interface AudioUnitParameterIDName {
	inID: number;
	inDesiredLength: number;
	outName: string;
}
declare var AudioUnitParameterIDName: AudioUnitParameterIDName;

interface AudioUnitParameterInfo {
	name: number;
	unitName: string;
	clumpID: number;
	cfNameString: string;
	unit: AudioUnitParameterUnit;
	minValue: number;
	maxValue: number;
	defaultValue: number;
	flags: AudioUnitParameterOptions;
}
declare var AudioUnitParameterInfo: AudioUnitParameterInfo;

enum AudioUnitParameterOptions {

	kAudioUnitParameterFlag_CFNameRelease = 16,

	kAudioUnitParameterFlag_OmitFromPresets = 8192,

	kAudioUnitParameterFlag_PlotHistory = 16384,

	kAudioUnitParameterFlag_MeterReadOnly = 32768,

	kAudioUnitParameterFlag_DisplayMask = 4653056,

	kAudioUnitParameterFlag_DisplaySquareRoot = 65536,

	kAudioUnitParameterFlag_DisplaySquared = 131072,

	kAudioUnitParameterFlag_DisplayCubed = 196608,

	kAudioUnitParameterFlag_DisplayCubeRoot = 262144,

	kAudioUnitParameterFlag_DisplayExponential = 327680,

	kAudioUnitParameterFlag_HasClump = 1048576,

	kAudioUnitParameterFlag_ValuesHaveStrings = 2097152,

	kAudioUnitParameterFlag_DisplayLogarithmic = 4194304,

	kAudioUnitParameterFlag_IsHighResolution = 8388608,

	kAudioUnitParameterFlag_NonRealTime = 16777216,

	kAudioUnitParameterFlag_CanRamp = 33554432,

	kAudioUnitParameterFlag_ExpertMode = 67108864,

	kAudioUnitParameterFlag_HasCFNameString = 134217728,

	kAudioUnitParameterFlag_IsGlobalMeta = 268435456,

	kAudioUnitParameterFlag_IsElementMeta = 536870912,

	kAudioUnitParameterFlag_IsReadable = 1073741824,

	kAudioUnitParameterFlag_IsWritable = 2147483648
}


interface AudioUnitParameterStringFromValue {
	inParamID: number;
	inValue: number;
	outString: string;
}
declare var AudioUnitParameterStringFromValue: AudioUnitParameterStringFromValue;

enum AudioUnitParameterUnit {

	kAudioUnitParameterUnit_Generic = 0,

	kAudioUnitParameterUnit_Indexed = 1,

	kAudioUnitParameterUnit_Boolean = 2,

	kAudioUnitParameterUnit_Percent = 3,

	kAudioUnitParameterUnit_Seconds = 4,

	kAudioUnitParameterUnit_SampleFrames = 5,

	kAudioUnitParameterUnit_Phase = 6,

	kAudioUnitParameterUnit_Rate = 7,

	kAudioUnitParameterUnit_Hertz = 8,

	kAudioUnitParameterUnit_Cents = 9,

	kAudioUnitParameterUnit_RelativeSemiTones = 10,

	kAudioUnitParameterUnit_MIDINoteNumber = 11,

	kAudioUnitParameterUnit_MIDIController = 12,

	kAudioUnitParameterUnit_Decibels = 13,

	kAudioUnitParameterUnit_LinearGain = 14,

	kAudioUnitParameterUnit_Degrees = 15,

	kAudioUnitParameterUnit_EqualPowerCrossfade = 16,

	kAudioUnitParameterUnit_MixerFaderCurve1 = 17,

	kAudioUnitParameterUnit_Pan = 18,

	kAudioUnitParameterUnit_Meters = 19,

	kAudioUnitParameterUnit_AbsoluteCents = 20,

	kAudioUnitParameterUnit_Octaves = 21,

	kAudioUnitParameterUnit_BPM = 22,

	kAudioUnitParameterUnit_Beats = 23,

	kAudioUnitParameterUnit_Milliseconds = 24,

	kAudioUnitParameterUnit_Ratio = 25,

	kAudioUnitParameterUnit_CustomUnit = 26
}


interface AudioUnitParameterValueFromString {
	inParamID: number;
	inString: string;
	outValue: number;
}
declare var AudioUnitParameterValueFromString: AudioUnitParameterValueFromString;

interface AudioUnitParameterValueName {
	inParamID: number;
	inValue: number;
	outName: string;
}
declare var AudioUnitParameterValueName: AudioUnitParameterValueName;

interface AudioUnitParameterValueTranslation {
	otherDesc: AudioUnitOtherPluginDesc;
	otherParamID: number;
	otherValue: number;
	auParamID: number;
	auValue: number;
}
declare var AudioUnitParameterValueTranslation: AudioUnitParameterValueTranslation;

interface AudioUnitPresetMAS_SettingData {
	isStockSetting: number;
	settingID: number;
	dataLen: number;
	data: number;
}
declare var AudioUnitPresetMAS_SettingData: AudioUnitPresetMAS_SettingData;

interface AudioUnitPresetMAS_Settings {
	manufacturerID: number;
	effectID: number;
	variantID: number;
	settingsVersion: number;
	numberOfSettings: number;
	settings: AudioUnitPresetMAS_SettingData;
}
declare var AudioUnitPresetMAS_Settings: AudioUnitPresetMAS_Settings;

declare function AudioUnitProcess(inUnit: ComponentInstanceRecord, ioActionFlags: AudioUnitRenderActionFlags, inTimeStamp: AudioTimeStamp, inNumberFrames: number, ioData: AudioBufferList): number;

declare function AudioUnitProcessMultiple(inUnit: ComponentInstanceRecord, ioActionFlags: AudioUnitRenderActionFlags, inTimeStamp: AudioTimeStamp, inNumberFrames: number, inNumberInputBufferLists: number, inInputBufferLists: AudioBufferList, inNumberOutputBufferLists: number, ioOutputBufferLists: AudioBufferList): number;

interface AudioUnitProperty {
	mAudioUnit: ComponentInstanceRecord;
	mPropertyID: number;
	mScope: number;
	mElement: number;
}
declare var AudioUnitProperty: AudioUnitProperty;

declare function AudioUnitRemovePropertyListenerWithUserData(inUnit: ComponentInstanceRecord, inID: number, inProc: (p1: any, p2: ComponentInstanceRecord, p3: number, p4: number, p5: number) => void, inProcUserData: any): number;

declare function AudioUnitRemoveRenderNotify(inUnit: ComponentInstanceRecord, inProc: (p1: any, p2: AudioUnitRenderActionFlags, p3: AudioTimeStamp, p4: number, p5: number, p6: AudioBufferList) => number, inProcUserData: any): number;

declare function AudioUnitRender(inUnit: ComponentInstanceRecord, ioActionFlags: AudioUnitRenderActionFlags, inTimeStamp: AudioTimeStamp, inOutputBusNumber: number, inNumberFrames: number, ioData: AudioBufferList): number;

enum AudioUnitRenderActionFlags {

	kAudioUnitRenderAction_PreRender = 4,

	kAudioUnitRenderAction_PostRender = 8,

	kAudioUnitRenderAction_OutputIsSilence = 16,

	kAudioOfflineUnitRenderAction_Preflight = 32,

	kAudioOfflineUnitRenderAction_Render = 64,

	kAudioOfflineUnitRenderAction_Complete = 128,

	kAudioUnitRenderAction_PostRenderError = 256,

	kAudioUnitRenderAction_DoNotCheckRenderArgs = 512
}


declare function AudioUnitReset(inUnit: ComponentInstanceRecord, inScope: number, inElement: number): number;

declare function AudioUnitSetParameter(inUnit: ComponentInstanceRecord, inID: number, inScope: number, inElement: number, inValue: number, inBufferOffsetInFrames: number): number;

declare function AudioUnitSetProperty(inUnit: ComponentInstanceRecord, inID: number, inScope: number, inElement: number, inData: any, inDataSize: number): number;

declare function AudioUnitUninitialize(inUnit: ComponentInstanceRecord): number;

interface CABarBeatTime {
	bar: number;
	beat: number;
	subbeat: number;
	subbeatDivisor: number;
	reserved: number;
}
declare var CABarBeatTime: CABarBeatTime;

declare function CAClockAddListener(inCAClock: any, inListenerProc: (p1: any, p2: CAClockMessage, p3: any) => void, inUserData: any): number;

declare function CAClockArm(inCAClock: any): number;

declare function CAClockBarBeatTimeToBeats(inCAClock: any, inBarBeatTime: CABarBeatTime, outBeats: number): number;

declare function CAClockBeatsToBarBeatTime(inCAClock: any, inBeats: number, inSubbeatDivisor: number, outBarBeatTime: CABarBeatTime): number;

declare function CAClockDisarm(inCAClock: any): number;

declare function CAClockDispose(inCAClock: any): number;

declare function CAClockGetPlayRate(inCAClock: any, outPlayRate: number): number;

declare function CAClockGetProperty(inCAClock: any, inPropertyID: CAClockPropertyID, ioPropertyDataSize: number, outPropertyData: any): number;

declare function CAClockGetPropertyInfo(inCAClock: any, inPropertyID: CAClockPropertyID, outSize: number, outWritable: string | any): number;

enum CAClockMessage {

	kCAClockMessage_StartTimeSet = 1937009005,

	kCAClockMessage_Started = 1937011316,

	kCAClockMessage_Stopped = 1937010544,

	kCAClockMessage_Armed = 1634889060,

	kCAClockMessage_Disarmed = 1684107885,

	kCAClockMessage_PropertyChanged = 1885562983,

	kCAClockMessage_WrongSMPTEFormat = 1064529264
}


declare function CAClockNew(inReservedFlags: number, outCAClock: any): number;

declare function CAClockParseMIDI(inCAClock: any, inMIDIPacketList: MIDIPacketList): number;

enum CAClockPropertyID {

	kCAClockProperty_InternalTimebase = 1768846434,

	kCAClockProperty_TimebaseSource = 1769235059,

	kCAClockProperty_SyncMode = 1937337965,

	kCAClockProperty_SyncSource = 1937337971,

	kCAClockProperty_SMPTEFormat = 1936552038,

	kCAClockProperty_SMPTEOffset = 1936552047,

	kCAClockProperty_MIDIClockDestinations = 1835164516,

	kCAClockProperty_MTCDestinations = 1836344164,

	kCAClockProperty_MTCFreewheelTime = 1836344951,

	kCAClockProperty_TempoMap = 1953329263,

	kCAClockProperty_MeterTrack = 1835365490,

	kCAClockProperty_Name = 1851878757,

	kCAClockProperty_SendMIDISPP = 1836281968
}


declare function CAClockRemoveListener(inCAClock: any, inListenerProc: (p1: any, p2: CAClockMessage, p3: any) => void, inUserData: any): number;

declare function CAClockSMPTETimeToSeconds(inCAClock: any, inSMPTETime: SMPTETime, outSeconds: number): number;

declare function CAClockSecondsToSMPTETime(inCAClock: any, inSeconds: number, inSubframeDivisor: number, outSMPTETime: SMPTETime): number;

declare function CAClockSetPlayRate(inCAClock: any, inPlayRate: number): number;

declare function CAClockSetProperty(inCAClock: any, inPropertyID: CAClockPropertyID, inPropertyDataSize: number, inPropertyData: any): number;

declare function CAClockStart(inCAClock: any): number;

declare function CAClockStop(inCAClock: any): number;

enum CAClockSyncMode {

	kCAClockSyncMode_Internal = 1768846450,

	kCAClockSyncMode_MIDIClockTransport = 1835232363,

	kCAClockSyncMode_MTCTransport = 1835889763
}


enum CAClockTimeFormat {

	kCAClockTimeFormat_HostTime = 1752134516,

	kCAClockTimeFormat_Samples = 1935764848,

	kCAClockTimeFormat_Beats = 1650811252,

	kCAClockTimeFormat_Seconds = 1936024435,

	kCAClockTimeFormat_SMPTESeconds = 1936552051,

	kCAClockTimeFormat_SMPTETime = 1936552052,

	kCAClockTimeFormat_AbsoluteSeconds = 1634952547
}


enum CAClockTimebase {

	kCAClockTimebase_HostTime = 1752134516,

	kCAClockTimebase_AudioDevice = 1635083369,

	kCAClockTimebase_AudioOutputUnit = 1635086197
}


interface CAFAudioDescription {
	mSampleRate: number;
	mFormatID: number;
	mFormatFlags: CAFFormatFlags;
	mBytesPerPacket: number;
	mFramesPerPacket: number;
	mChannelsPerFrame: number;
	mBitsPerChannel: number;
}
declare var CAFAudioDescription: CAFAudioDescription;

interface CAFAudioFormatListItem {
	mFormat: CAFAudioDescription;
	mChannelLayoutTag: number;
}
declare var CAFAudioFormatListItem: CAFAudioFormatListItem;

interface CAFChunkHeader {
	mChunkType: number;
	mChunkSize: number;
}
declare var CAFChunkHeader: CAFChunkHeader;

interface CAFDataChunk {
	mEditCount: number;
	mData: number;
}
declare var CAFDataChunk: CAFDataChunk;

interface CAFFileHeader {
	mFileType: number;
	mFileVersion: number;
	mFileFlags: number;
}
declare var CAFFileHeader: CAFFileHeader;

enum CAFFormatFlags {

	kCAFLinearPCMFormatFlagIsFloat = 1,

	kCAFLinearPCMFormatFlagIsLittleEndian = 2
}


interface CAFInfoStrings {
	mNumEntries: number;
}
declare var CAFInfoStrings: CAFInfoStrings;

interface CAFInstrumentChunk {
	mBaseNote: number;
	mMIDILowNote: number;
	mMIDIHighNote: number;
	mMIDILowVelocity: number;
	mMIDIHighVelocity: number;
	mdBGain: number;
	mStartRegionID: number;
	mSustainRegionID: number;
	mReleaseRegionID: number;
	mInstrumentID: number;
}
declare var CAFInstrumentChunk: CAFInstrumentChunk;

interface CAFMarker {
	mType: number;
	mFramePosition: number;
	mMarkerID: number;
	mSMPTETime: CAF_SMPTE_Time;
	mChannel: number;
}
declare var CAFMarker: CAFMarker;

interface CAFMarkerChunk {
	mSMPTE_TimeType: number;
	mNumberMarkers: number;
	mMarkers: CAFMarker;
}
declare var CAFMarkerChunk: CAFMarkerChunk;

interface CAFOverviewChunk {
	mEditCount: number;
	mNumFramesPerOVWSample: number;
	mData: CAFOverviewSample;
}
declare var CAFOverviewChunk: CAFOverviewChunk;

interface CAFOverviewSample {
	mMinValue: number;
	mMaxValue: number;
}
declare var CAFOverviewSample: CAFOverviewSample;

interface CAFPacketTableHeader {
	mNumberPackets: number;
	mNumberValidFrames: number;
	mPrimingFrames: number;
	mRemainderFrames: number;
	mPacketDescriptions: number;
}
declare var CAFPacketTableHeader: CAFPacketTableHeader;

interface CAFPeakChunk {
	mEditCount: number;
	mPeaks: CAFPositionPeak;
}
declare var CAFPeakChunk: CAFPeakChunk;

interface CAFPositionPeak {
	mValue: number;
	mFrameNumber: number;
}
declare var CAFPositionPeak: CAFPositionPeak;

interface CAFRegion {
	mRegionID: number;
	mFlags: CAFRegionFlags;
	mNumberMarkers: number;
	mMarkers: CAFMarker;
}
declare var CAFRegion: CAFRegion;

interface CAFRegionChunk {
	mSMPTE_TimeType: number;
	mNumberRegions: number;
	mRegions: CAFRegion;
}
declare var CAFRegionChunk: CAFRegionChunk;

enum CAFRegionFlags {

	kCAFRegionFlag_LoopEnable = 1,

	kCAFRegionFlag_PlayForward = 2,

	kCAFRegionFlag_PlayBackward = 4
}


interface CAFStringID {
	mStringID: number;
	mStringStartByteOffset: number;
}
declare var CAFStringID: CAFStringID;

interface CAFStrings {
	mNumEntries: number;
	mStringsIDs: CAFStringID;
}
declare var CAFStrings: CAFStrings;

interface CAFUMIDChunk {
	mBytes: number;
}
declare var CAFUMIDChunk: CAFUMIDChunk;

interface CAF_SMPTE_Time {
	mHours: number;
	mMinutes: number;
	mSeconds: number;
	mFrames: number;
	mSubFrameSampleOffset: number;
}
declare var CAF_SMPTE_Time: CAF_SMPTE_Time;

interface CAF_UUID_ChunkHeader {
	mHeader: CAFChunkHeader;
	mUUID: number;
}
declare var CAF_UUID_ChunkHeader: CAF_UUID_ChunkHeader;

interface CAMeterTrackEntry {
	beats: number;
	meterNumer: number;
	meterDenom: number;
}
declare var CAMeterTrackEntry: CAMeterTrackEntry;

declare function CAShow(inObject: any): void;

declare function CAShowFile(inObject: any, inFile: FILE): void;

interface CATempoMapEntry {
	beats: number;
	tempoBPM: number;
}
declare var CATempoMapEntry: CATempoMapEntry;

declare function CopyInstrumentInfoFromSoundBank(inURL: NSURL, outInstrumentInfo: NSArray<any>): number;

declare function CopyNameFromSoundBank(inURL: NSURL, outName: string): number;

declare function DisposeAUGraph(inGraph: any): number;

declare function DisposeMusicEventIterator(inIterator: any): number;

declare function DisposeMusicPlayer(inPlayer: any): number;

declare function DisposeMusicSequence(inSequence: any): number;

declare function ExtAudioFileCreateWithURL(inURL: NSURL, inFileType: number, inStreamDesc: AudioStreamBasicDescription, inChannelLayout: AudioChannelLayout, inFlags: number, outExtAudioFile: any): number;

declare function ExtAudioFileDispose(inExtAudioFile: any): number;

declare function ExtAudioFileGetProperty(inExtAudioFile: any, inPropertyID: number, ioPropertyDataSize: number, outPropertyData: any): number;

declare function ExtAudioFileGetPropertyInfo(inExtAudioFile: any, inPropertyID: number, outSize: number, outWritable: string | any): number;

declare function ExtAudioFileOpenURL(inURL: NSURL, outExtAudioFile: any): number;

declare function ExtAudioFileRead(inExtAudioFile: any, ioNumberFrames: number, ioData: AudioBufferList): number;

declare function ExtAudioFileSeek(inExtAudioFile: any, inFrameOffset: number): number;

declare function ExtAudioFileSetProperty(inExtAudioFile: any, inPropertyID: number, inPropertyDataSize: number, inPropertyData: any): number;

declare function ExtAudioFileTell(inExtAudioFile: any, outFrameOffset: number): number;

declare function ExtAudioFileWrapAudioFileID(inFileID: any, inForWriting: boolean, outExtAudioFile: any): number;

declare function ExtAudioFileWrite(inExtAudioFile: any, inNumberFrames: number, ioData: AudioBufferList): number;

declare function ExtAudioFileWriteAsync(inExtAudioFile: any, inNumberFrames: number, ioData: AudioBufferList): number;

interface ExtendedAudioFormatInfo {
	mASBD: AudioStreamBasicDescription;
	mMagicCookie: any;
	mMagicCookieSize: number;
	mClassDescription: AudioClassDescription;
}
declare var ExtendedAudioFormatInfo: ExtendedAudioFormatInfo;

interface ExtendedControlEvent {
	groupID: number;
	controlID: number;
	value: number;
}
declare var ExtendedControlEvent: ExtendedControlEvent;

interface ExtendedNoteOnEvent {
	instrumentID: number;
	groupID: number;
	duration: number;
	extendedParams: MusicDeviceNoteParams;
}
declare var ExtendedNoteOnEvent: ExtendedNoteOnEvent;

interface ExtendedTempoEvent {
	bpm: number;
}
declare var ExtendedTempoEvent: ExtendedTempoEvent;

interface HostCallbackInfo {
	hostUserData: any;
	beatAndTempoProc: (p1: any, p2: number, p3: number) => number;
	musicalTimeLocationProc: (p1: any, p2: number, p3: number, p4: number, p5: number) => number;
	transportStateProc: (p1: any, p2: string, p3: string, p4: number, p5: string, p6: number, p7: number) => number;
	transportStateProc2: (p1: any, p2: string, p3: string, p4: string, p5: number, p6: string, p7: number, p8: number) => number;
}
declare var HostCallbackInfo: HostCallbackInfo;

interface MIDIChannelMessage {
	status: number;
	data1: number;
	data2: number;
	reserved: number;
}
declare var MIDIChannelMessage: MIDIChannelMessage;

interface MIDIMetaEvent {
	metaEventType: number;
	unused1: number;
	unused2: number;
	unused3: number;
	dataLength: number;
	data: number;
}
declare var MIDIMetaEvent: MIDIMetaEvent;

interface MIDINoteMessage {
	channel: number;
	note: number;
	velocity: number;
	releaseVelocity: number;
	duration: number;
}
declare var MIDINoteMessage: MIDINoteMessage;

interface MIDIRawData {
	length: number;
	data: number;
}
declare var MIDIRawData: MIDIRawData;

interface MixerDistanceParams {
	mReferenceDistance: number;
	mMaxDistance: number;
	mMaxAttenuation: number;
}
declare var MixerDistanceParams: MixerDistanceParams;

declare function MusicDeviceMIDIEvent(inUnit: ComponentInstanceRecord, inStatus: number, inData1: number, inData2: number, inOffsetSampleFrame: number): number;

interface MusicDeviceNoteParams {
	argCount: number;
	mPitch: number;
	mVelocity: number;
	mControls: NoteParamsControlValue;
}
declare var MusicDeviceNoteParams: MusicDeviceNoteParams;

declare function MusicDeviceStartNote(inUnit: ComponentInstanceRecord, inInstrument: number, inGroupID: number, outNoteInstanceID: number, inOffsetSampleFrame: number, inParams: MusicDeviceNoteParams): number;

interface MusicDeviceStdNoteParams {
	argCount: number;
	mPitch: number;
	mVelocity: number;
}
declare var MusicDeviceStdNoteParams: MusicDeviceStdNoteParams;

declare function MusicDeviceStopNote(inUnit: ComponentInstanceRecord, inGroupID: number, inNoteInstanceID: number, inOffsetSampleFrame: number): number;

declare function MusicDeviceSysEx(inUnit: ComponentInstanceRecord, inData: string | any, inLength: number): number;

declare function MusicEventIteratorDeleteEvent(inIterator: any): number;

declare function MusicEventIteratorGetEventInfo(inIterator: any, outTimeStamp: number, outEventType: number, outEventData: any, outEventDataSize: number): number;

declare function MusicEventIteratorHasCurrentEvent(inIterator: any, outHasCurEvent: string | any): number;

declare function MusicEventIteratorHasNextEvent(inIterator: any, outHasNextEvent: string | any): number;

declare function MusicEventIteratorHasPreviousEvent(inIterator: any, outHasPrevEvent: string | any): number;

declare function MusicEventIteratorNextEvent(inIterator: any): number;

declare function MusicEventIteratorPreviousEvent(inIterator: any): number;

declare function MusicEventIteratorSeek(inIterator: any, inTimeStamp: number): number;

declare function MusicEventIteratorSetEventInfo(inIterator: any, inEventType: number, inEventData: any): number;

declare function MusicEventIteratorSetEventTime(inIterator: any, inTimeStamp: number): number;

interface MusicEventUserData {
	length: number;
	data: number;
}
declare var MusicEventUserData: MusicEventUserData;

declare function MusicPlayerGetBeatsForHostTime(inPlayer: any, inHostTime: number, outBeats: number): number;

declare function MusicPlayerGetHostTimeForBeats(inPlayer: any, inBeats: number, outHostTime: number): number;

declare function MusicPlayerGetPlayRateScalar(inPlayer: any, outScaleRate: number): number;

declare function MusicPlayerGetSequence(inPlayer: any, outSequence: any): number;

declare function MusicPlayerGetTime(inPlayer: any, outTime: number): number;

declare function MusicPlayerIsPlaying(inPlayer: any, outIsPlaying: string | any): number;

declare function MusicPlayerPreroll(inPlayer: any): number;

declare function MusicPlayerSetPlayRateScalar(inPlayer: any, inScaleRate: number): number;

declare function MusicPlayerSetSequence(inPlayer: any, inSequence: any): number;

declare function MusicPlayerSetTime(inPlayer: any, inTime: number): number;

declare function MusicPlayerStart(inPlayer: any): number;

declare function MusicPlayerStop(inPlayer: any): number;

declare function MusicSequenceBarBeatTimeToBeats(inSequence: any, inBarBeatTime: CABarBeatTime, outBeats: number): number;

declare function MusicSequenceBeatsToBarBeatTime(inSequence: any, inBeats: number, inSubbeatDivisor: number, outBarBeatTime: CABarBeatTime): number;

declare function MusicSequenceDisposeTrack(inSequence: any, inTrack: any): number;

declare function MusicSequenceFileCreate(inSequence: any, inFileRef: NSURL, inFileType: MusicSequenceFileTypeID, inFlags: MusicSequenceFileFlags, inResolution: number): number;

declare function MusicSequenceFileCreateData(inSequence: any, inFileType: MusicSequenceFileTypeID, inFlags: MusicSequenceFileFlags, inResolution: number, outData: NSData): number;

enum MusicSequenceFileFlags {

	kMusicSequenceFileFlags_Default = 0,

	kMusicSequenceFileFlags_EraseFile = 1
}


declare function MusicSequenceFileLoad(inSequence: any, inFileRef: NSURL, inFileTypeHint: MusicSequenceFileTypeID, inFlags: MusicSequenceLoadFlags): number;

declare function MusicSequenceFileLoadData(inSequence: any, inData: NSData, inFileTypeHint: MusicSequenceFileTypeID, inFlags: MusicSequenceLoadFlags): number;

enum MusicSequenceFileTypeID {

	kMusicSequenceFile_AnyType = 0,

	kMusicSequenceFile_MIDIType = 1835623529,

	kMusicSequenceFile_iMelodyType = 1768777068
}


declare function MusicSequenceGetAUGraph(inSequence: any, outGraph: any): number;

declare function MusicSequenceGetBeatsForSeconds(inSequence: any, inSeconds: number, outBeats: number): number;

declare function MusicSequenceGetIndTrack(inSequence: any, inTrackIndex: number, outTrack: any): number;

declare function MusicSequenceGetInfoDictionary(inSequence: any): NSDictionary<any, any>;

declare function MusicSequenceGetSecondsForBeats(inSequence: any, inBeats: number, outSeconds: number): number;

declare function MusicSequenceGetSequenceType(inSequence: any, outType: MusicSequenceType): number;

declare function MusicSequenceGetTempoTrack(inSequence: any, outTrack: any): number;

declare function MusicSequenceGetTrackCount(inSequence: any, outNumberOfTracks: number): number;

declare function MusicSequenceGetTrackIndex(inSequence: any, inTrack: any, outTrackIndex: number): number;

enum MusicSequenceLoadFlags {

	kMusicSequenceLoadSMF_PreserveTracks = 0,

	kMusicSequenceLoadSMF_ChannelsToTracks = 1
}


declare function MusicSequenceNewTrack(inSequence: any, outTrack: any): number;

declare function MusicSequenceReverse(inSequence: any): number;

declare function MusicSequenceSetAUGraph(inSequence: any, inGraph: any): number;

declare function MusicSequenceSetMIDIEndpoint(inSequence: any, inEndpoint: number): number;

declare function MusicSequenceSetSequenceType(inSequence: any, inType: MusicSequenceType): number;

declare function MusicSequenceSetUserCallback(inSequence: any, inCallback: (p1: any, p2: any, p3: any, p4: number, p5: MusicEventUserData, p6: number, p7: number) => void, inClientData: any): number;

enum MusicSequenceType {

	kMusicSequenceType_Beats = 1650811252,

	kMusicSequenceType_Seconds = 1936024435,

	kMusicSequenceType_Samples = 1935764848
}


declare function MusicTrackClear(inTrack: any, inStartTime: number, inEndTime: number): number;

declare function MusicTrackCopyInsert(inSourceTrack: any, inSourceStartTime: number, inSourceEndTime: number, inDestTrack: any, inDestInsertTime: number): number;

declare function MusicTrackCut(inTrack: any, inStartTime: number, inEndTime: number): number;

declare function MusicTrackGetDestMIDIEndpoint(inTrack: any, outEndpoint: number): number;

declare function MusicTrackGetDestNode(inTrack: any, outNode: number): number;

declare function MusicTrackGetProperty(inTrack: any, inPropertyID: number, outData: any, ioLength: number): number;

declare function MusicTrackGetSequence(inTrack: any, outSequence: any): number;

interface MusicTrackLoopInfo {
	loopDuration: number;
	numberOfLoops: number;
}
declare var MusicTrackLoopInfo: MusicTrackLoopInfo;

declare function MusicTrackMerge(inSourceTrack: any, inSourceStartTime: number, inSourceEndTime: number, inDestTrack: any, inDestInsertTime: number): number;

declare function MusicTrackMoveEvents(inTrack: any, inStartTime: number, inEndTime: number, inMoveTime: number): number;

declare function MusicTrackNewAUPresetEvent(inTrack: any, inTimeStamp: number, inPresetEvent: AUPresetEvent): number;

declare function MusicTrackNewExtendedNoteEvent(inTrack: any, inTimeStamp: number, inInfo: ExtendedNoteOnEvent): number;

declare function MusicTrackNewExtendedTempoEvent(inTrack: any, inTimeStamp: number, inBPM: number): number;

declare function MusicTrackNewMIDIChannelEvent(inTrack: any, inTimeStamp: number, inMessage: MIDIChannelMessage): number;

declare function MusicTrackNewMIDINoteEvent(inTrack: any, inTimeStamp: number, inMessage: MIDINoteMessage): number;

declare function MusicTrackNewMIDIRawDataEvent(inTrack: any, inTimeStamp: number, inRawData: MIDIRawData): number;

declare function MusicTrackNewMetaEvent(inTrack: any, inTimeStamp: number, inMetaEvent: MIDIMetaEvent): number;

declare function MusicTrackNewParameterEvent(inTrack: any, inTimeStamp: number, inInfo: ParameterEvent): number;

declare function MusicTrackNewUserEvent(inTrack: any, inTimeStamp: number, inUserData: MusicEventUserData): number;

declare function MusicTrackSetDestMIDIEndpoint(inTrack: any, inEndpoint: number): number;

declare function MusicTrackSetDestNode(inTrack: any, inNode: number): number;

declare function MusicTrackSetProperty(inTrack: any, inPropertyID: number, inData: any, inLength: number): number;

declare function NewAUGraph(outGraph: any): number;

declare function NewMusicEventIterator(inTrack: any, outIterator: any): number;

declare function NewMusicPlayer(outPlayer: any): number;

declare function NewMusicSequence(outSequence: any): number;

interface NoteParamsControlValue {
	mID: number;
	mValue: number;
}
declare var NoteParamsControlValue: NoteParamsControlValue;

interface ParameterEvent {
	parameterID: number;
	scope: number;
	element: number;
	value: number;
}
declare var ParameterEvent: ParameterEvent;

interface ScheduledAudioFileRegion {
	mTimeStamp: AudioTimeStamp;
	mCompletionProc: (p1: any, p2: ScheduledAudioFileRegion, p3: number) => void;
	mCompletionProcUserData: any;
	mAudioFile: any;
	mLoopCount: number;
	mStartFrame: number;
	mFramesToPlay: number;
}
declare var ScheduledAudioFileRegion: ScheduledAudioFileRegion;

interface ScheduledAudioSlice {
	mTimeStamp: AudioTimeStamp;
	mCompletionProc: (p1: any, p2: ScheduledAudioSlice) => void;
	mCompletionProcUserData: any;
	mFlags: AUScheduledAudioSliceFlags;
	mReserved: number;
	mReserved2: any;
	mNumberFrames: number;
	mBufferList: AudioBufferList;
}
declare var ScheduledAudioSlice: ScheduledAudioSlice;

declare const k3DMixerParam_Azimuth: number;

declare const k3DMixerParam_BusEnable: number;

declare const k3DMixerParam_Distance: number;

declare const k3DMixerParam_DryWetReverbBlend: number;

declare const k3DMixerParam_Elevation: number;

declare const k3DMixerParam_Gain: number;

declare const k3DMixerParam_GlobalReverbGain: number;

declare const k3DMixerParam_GlobalReverbGainInDecibels: number;

declare const k3DMixerParam_MaxGain: number;

declare const k3DMixerParam_MaxGainInDecibels: number;

declare const k3DMixerParam_MinGain: number;

declare const k3DMixerParam_MinGainInDecibels: number;

declare const k3DMixerParam_ObstructionAttenuation: number;

declare const k3DMixerParam_ObstructionAttenuationInDecibels: number;

declare const k3DMixerParam_OcclusionAttenuation: number;

declare const k3DMixerParam_OcclusionAttenuationInDecibels: number;

declare const k3DMixerParam_PlaybackRate: number;

declare const k3DMixerParam_PostAveragePower: number;

declare const k3DMixerParam_PostPeakHoldLevel: number;

declare const k3DMixerParam_PreAveragePower: number;

declare const k3DMixerParam_PrePeakHoldLevel: number;

declare const k3DMixerParam_ReverbBlend: number;

declare const kAUCarbonViewSubType_Generic: number;

declare const kAUGraphErr_CannotDoInCurrentContext: number;

declare const kAUGraphErr_InvalidAudioUnit: number;

declare const kAUGraphErr_InvalidConnection: number;

declare const kAUGraphErr_NodeNotFound: number;

declare const kAUGraphErr_OutputNodeErr: number;

declare const kAUGroupParameterID_AllNotesOff: number;

declare const kAUGroupParameterID_AllSoundOff: number;

declare const kAUGroupParameterID_ChannelPressure: number;

declare const kAUGroupParameterID_DataEntry: number;

declare const kAUGroupParameterID_DataEntry_LSB: number;

declare const kAUGroupParameterID_Expression: number;

declare const kAUGroupParameterID_Expression_LSB: number;

declare const kAUGroupParameterID_Foot: number;

declare const kAUGroupParameterID_Foot_LSB: number;

declare const kAUGroupParameterID_KeyPressure: number;

declare const kAUGroupParameterID_KeyPressure_FirstKey: number;

declare const kAUGroupParameterID_KeyPressure_LastKey: number;

declare const kAUGroupParameterID_ModWheel: number;

declare const kAUGroupParameterID_ModWheel_LSB: number;

declare const kAUGroupParameterID_Pan: number;

declare const kAUGroupParameterID_Pan_LSB: number;

declare const kAUGroupParameterID_PitchBend: number;

declare const kAUGroupParameterID_ResetAllControllers: number;

declare const kAUGroupParameterID_Sostenuto: number;

declare const kAUGroupParameterID_Sustain: number;

declare const kAUGroupParameterID_Volume: number;

declare const kAUGroupParameterID_Volume_LSB: number;

declare const kAULowShelfParam_CutoffFrequency: number;

declare const kAULowShelfParam_Gain: number;

declare const kAUMIDISynthProperty_EnablePreload: number;

declare const kAUNBandEQFilterType_2ndOrderButterworthHighPass: number;

declare const kAUNBandEQFilterType_2ndOrderButterworthLowPass: number;

declare const kAUNBandEQFilterType_BandPass: number;

declare const kAUNBandEQFilterType_BandStop: number;

declare const kAUNBandEQFilterType_HighShelf: number;

declare const kAUNBandEQFilterType_LowShelf: number;

declare const kAUNBandEQFilterType_Parametric: number;

declare const kAUNBandEQFilterType_ResonantHighPass: number;

declare const kAUNBandEQFilterType_ResonantHighShelf: number;

declare const kAUNBandEQFilterType_ResonantLowPass: number;

declare const kAUNBandEQFilterType_ResonantLowShelf: number;

declare const kAUNBandEQParam_Bandwidth: number;

declare const kAUNBandEQParam_BypassBand: number;

declare const kAUNBandEQParam_FilterType: number;

declare const kAUNBandEQParam_Frequency: number;

declare const kAUNBandEQParam_Gain: number;

declare const kAUNBandEQParam_GlobalGain: number;

declare const kAUNBandEQProperty_BiquadCoefficients: number;

declare const kAUNBandEQProperty_MaxNumberOfBands: number;

declare const kAUNBandEQProperty_NumberOfBands: number;

declare const kAUNetReceiveParam_NumParameters: number;

declare const kAUNetReceiveParam_Status: number;

declare const kAUNetReceiveProperty_Hostname: number;

declare const kAUNetReceiveProperty_Password: number;

declare const kAUNetSendNumPresetFormats: number;

declare const kAUNetSendParam_NumParameters: number;

declare const kAUNetSendParam_Status: number;

declare const kAUNetSendPresetFormat_AAC_128kbpspc: number;

declare const kAUNetSendPresetFormat_AAC_32kbpspc: number;

declare const kAUNetSendPresetFormat_AAC_40kbpspc: number;

declare const kAUNetSendPresetFormat_AAC_48kbpspc: number;

declare const kAUNetSendPresetFormat_AAC_64kbpspc: number;

declare const kAUNetSendPresetFormat_AAC_80kbpspc: number;

declare const kAUNetSendPresetFormat_AAC_96kbpspc: number;

declare const kAUNetSendPresetFormat_AAC_LD_32kbpspc: number;

declare const kAUNetSendPresetFormat_AAC_LD_40kbpspc: number;

declare const kAUNetSendPresetFormat_AAC_LD_48kbpspc: number;

declare const kAUNetSendPresetFormat_AAC_LD_64kbpspc: number;

declare const kAUNetSendPresetFormat_IMA4: number;

declare const kAUNetSendPresetFormat_Lossless16: number;

declare const kAUNetSendPresetFormat_Lossless24: number;

declare const kAUNetSendPresetFormat_PCMFloat32: number;

declare const kAUNetSendPresetFormat_PCMInt16: number;

declare const kAUNetSendPresetFormat_PCMInt24: number;

declare const kAUNetSendPresetFormat_ULaw: number;

declare const kAUNetSendProperty_Disconnect: number;

declare const kAUNetSendProperty_Password: number;

declare const kAUNetSendProperty_PortNum: number;

declare const kAUNetSendProperty_ServiceName: number;

declare const kAUNetSendProperty_TransmissionFormat: number;

declare const kAUNetSendProperty_TransmissionFormatIndex: number;

declare const kAUNetStatus_Connected: number;

declare const kAUNetStatus_Connecting: number;

declare const kAUNetStatus_Listening: number;

declare const kAUNetStatus_NotConnected: number;

declare const kAUNetStatus_Overflow: number;

declare const kAUNetStatus_Underflow: number;

declare const kAUNodeInteraction_Connection: number;

declare const kAUNodeInteraction_InputCallback: number;

declare const kAUParameterListener_AnyParameter: number;

declare const kAUSamplerParam_CoarseTuning: number;

declare const kAUSamplerParam_FineTuning: number;

declare const kAUSamplerParam_Gain: number;

declare const kAUSamplerParam_Pan: number;

declare const kAUSamplerProperty_BankAndPreset: number;

declare const kAUSamplerProperty_LoadAudioFiles: number;

declare const kAUSamplerProperty_LoadInstrument: number;

declare const kAUSamplerProperty_LoadPresetFromBank: number;

declare const kAUSampler_DefaultBankLSB: number;

declare const kAUSampler_DefaultMelodicBankMSB: number;

declare const kAUSampler_DefaultPercussionBankMSB: number;

declare const kAUVoiceIOErr_UnexpectedNumberOfInputChannels: number;

declare const kAUVoiceIOProperty_BypassVoiceProcessing: number;

declare const kAUVoiceIOProperty_MuteOutput: number;

declare const kAUVoiceIOProperty_VoiceProcessingEnableAGC: number;

declare const kAUVoiceIOProperty_VoiceProcessingQuality: number;

declare const kAudioCodecAppendInputBufferListSelect: number;

declare const kAudioCodecAppendInputDataSelect: number;

declare const kAudioCodecBadDataError: number;

declare const kAudioCodecBadPropertySizeError: number;

declare const kAudioCodecBitRateControlMode_Constant: number;

declare const kAudioCodecBitRateControlMode_LongTermAverage: number;

declare const kAudioCodecBitRateControlMode_Variable: number;

declare const kAudioCodecBitRateControlMode_VariableConstrained: number;

declare const kAudioCodecBitRateFormat: number;

declare const kAudioCodecBitRateFormat_ABR: number;

declare const kAudioCodecBitRateFormat_CBR: number;

declare const kAudioCodecBitRateFormat_VBR: number;

declare const kAudioCodecDelayMode_Compatibility: number;

declare const kAudioCodecDelayMode_Minimum: number;

declare const kAudioCodecDelayMode_Optimal: number;

declare const kAudioCodecDoesSampleRateConversion: number;

declare const kAudioCodecExtendFrequencies: number;

declare const kAudioCodecGetPropertyInfoSelect: number;

declare const kAudioCodecGetPropertySelect: number;

declare const kAudioCodecIllegalOperationError: number;

declare const kAudioCodecInitializeSelect: number;

declare const kAudioCodecInputFormatsForOutputFormat: number;

declare const kAudioCodecNoError: number;

declare const kAudioCodecNotEnoughBufferSpaceError: number;

declare const kAudioCodecOutputFormatsForInputFormat: number;

declare const kAudioCodecOutputPrecedence: number;

declare const kAudioCodecOutputPrecedenceBitRate: number;

declare const kAudioCodecOutputPrecedenceNone: number;

declare const kAudioCodecOutputPrecedenceSampleRate: number;

declare const kAudioCodecPrimeMethod_None: number;

declare const kAudioCodecPrimeMethod_Normal: number;

declare const kAudioCodecPrimeMethod_Pre: number;

declare const kAudioCodecProduceOutputBufferListSelect: number;

declare const kAudioCodecProduceOutputDataSelect: number;

declare const kAudioCodecProduceOutputPacketAtEOF: number;

declare const kAudioCodecProduceOutputPacketFailure: number;

declare const kAudioCodecProduceOutputPacketNeedsMoreInputData: number;

declare const kAudioCodecProduceOutputPacketSuccess: number;

declare const kAudioCodecProduceOutputPacketSuccessHasMore: number;

declare const kAudioCodecPropertyAdjustLocalQuality: number;

declare const kAudioCodecPropertyApplicableBitRateRange: number;

declare const kAudioCodecPropertyApplicableInputSampleRates: number;

declare const kAudioCodecPropertyApplicableOutputSampleRates: number;

declare const kAudioCodecPropertyAvailableBitRateRange: number;

declare const kAudioCodecPropertyAvailableBitRates: number;

declare const kAudioCodecPropertyAvailableInputChannelLayoutTags: number;

declare const kAudioCodecPropertyAvailableInputChannelLayouts: number;

declare const kAudioCodecPropertyAvailableInputSampleRates: number;

declare const kAudioCodecPropertyAvailableNumberChannels: number;

declare const kAudioCodecPropertyAvailableOutputChannelLayoutTags: number;

declare const kAudioCodecPropertyAvailableOutputChannelLayouts: number;

declare const kAudioCodecPropertyAvailableOutputSampleRates: number;

declare const kAudioCodecPropertyBitRateControlMode: number;

declare const kAudioCodecPropertyBitRateForVBR: number;

declare const kAudioCodecPropertyCurrentInputChannelLayout: number;

declare const kAudioCodecPropertyCurrentInputFormat: number;

declare const kAudioCodecPropertyCurrentInputSampleRate: number;

declare const kAudioCodecPropertyCurrentOutputChannelLayout: number;

declare const kAudioCodecPropertyCurrentOutputFormat: number;

declare const kAudioCodecPropertyCurrentOutputSampleRate: number;

declare const kAudioCodecPropertyCurrentTargetBitRate: number;

declare const kAudioCodecPropertyDelayMode: number;

declare const kAudioCodecPropertyDoesSampleRateConversion: number;

declare const kAudioCodecPropertyDynamicRangeControlMode: number;

declare const kAudioCodecPropertyEmploysDependentPackets: number;

declare const kAudioCodecPropertyFormatCFString: number;

declare const kAudioCodecPropertyFormatInfo: number;

declare const kAudioCodecPropertyFormatList: number;

declare const kAudioCodecPropertyHasVariablePacketByteSizes: number;

declare const kAudioCodecPropertyInputBufferSize: number;

declare const kAudioCodecPropertyInputChannelLayout: number;

declare const kAudioCodecPropertyInputFormatsForOutputFormat: number;

declare const kAudioCodecPropertyIsInitialized: number;

declare const kAudioCodecPropertyMagicCookie: number;

declare const kAudioCodecPropertyManufacturerCFString: number;

declare const kAudioCodecPropertyMaximumPacketByteSize: number;

declare const kAudioCodecPropertyMinimumDelayMode: number;

declare const kAudioCodecPropertyMinimumNumberInputPackets: number;

declare const kAudioCodecPropertyMinimumNumberOutputPackets: number;

declare const kAudioCodecPropertyNameCFString: number;

declare const kAudioCodecPropertyOutputChannelLayout: number;

declare const kAudioCodecPropertyOutputFormatsForInputFormat: number;

declare const kAudioCodecPropertyPacketFrameSize: number;

declare const kAudioCodecPropertyPacketSizeLimitForVBR: number;

declare const kAudioCodecPropertyPaddedZeros: number;

declare const kAudioCodecPropertyPrimeInfo: number;

declare const kAudioCodecPropertyPrimeMethod: number;

declare const kAudioCodecPropertyProgramTargetLevel: number;

declare const kAudioCodecPropertyProgramTargetLevelConstant: number;

declare const kAudioCodecPropertyQualitySetting: number;

declare const kAudioCodecPropertyRecommendedBitRateRange: number;

declare const kAudioCodecPropertyRequiresPacketDescription: number;

declare const kAudioCodecPropertySettings: number;

declare const kAudioCodecPropertySoundQualityForVBR: number;

declare const kAudioCodecPropertySupportedInputFormats: number;

declare const kAudioCodecPropertySupportedOutputFormats: number;

declare const kAudioCodecPropertyUsedInputBufferSize: number;

declare const kAudioCodecPropertyZeroFramesPadded: number;

declare const kAudioCodecQuality_High: number;

declare const kAudioCodecQuality_Low: number;

declare const kAudioCodecQuality_Max: number;

declare const kAudioCodecQuality_Medium: number;

declare const kAudioCodecQuality_Min: number;

declare const kAudioCodecResetSelect: number;

declare const kAudioCodecSetPropertySelect: number;

declare const kAudioCodecStateError: number;

declare const kAudioCodecUninitializeSelect: number;

declare const kAudioCodecUnknownPropertyError: number;

declare const kAudioCodecUnspecifiedError: number;

declare const kAudioCodecUnsupportedFormatError: number;

declare const kAudioCodecUseRecommendedSampleRate: number;

declare const kAudioComponentErr_InstanceInvalidated: number;

declare const kAudioComponentErr_InstanceTimedOut: number;

declare var kAudioComponentInstanceInvalidationNotification: string;

declare var kAudioComponentRegistrationsChangedNotification: string;

declare const kAudioConverterApplicableEncodeBitRates: number;

declare const kAudioConverterApplicableEncodeSampleRates: number;

declare const kAudioConverterAvailableEncodeBitRates: number;

declare const kAudioConverterAvailableEncodeChannelLayoutTags: number;

declare const kAudioConverterAvailableEncodeSampleRates: number;

declare const kAudioConverterChannelMap: number;

declare const kAudioConverterCodecQuality: number;

declare const kAudioConverterCompressionMagicCookie: number;

declare const kAudioConverterCurrentInputStreamDescription: number;

declare const kAudioConverterCurrentOutputStreamDescription: number;

declare const kAudioConverterDecompressionMagicCookie: number;

declare const kAudioConverterEncodeAdjustableSampleRate: number;

declare const kAudioConverterEncodeBitRate: number;

declare const kAudioConverterErr_BadPropertySizeError: number;

declare const kAudioConverterErr_FormatNotSupported: number;

declare const kAudioConverterErr_InputSampleRateOutOfRange: number;

declare const kAudioConverterErr_InvalidInputSize: number;

declare const kAudioConverterErr_InvalidOutputSize: number;

declare const kAudioConverterErr_OperationNotSupported: number;

declare const kAudioConverterErr_OutputSampleRateOutOfRange: number;

declare const kAudioConverterErr_PropertyNotSupported: number;

declare const kAudioConverterErr_RequiresPacketDescriptionsError: number;

declare const kAudioConverterErr_UnspecifiedError: number;

declare const kAudioConverterInputChannelLayout: number;

declare const kAudioConverterOutputChannelLayout: number;

declare const kAudioConverterPrimeInfo: number;

declare const kAudioConverterPrimeMethod: number;

declare const kAudioConverterPropertyBitDepthHint: number;

declare const kAudioConverterPropertyCalculateInputBufferSize: number;

declare const kAudioConverterPropertyCalculateOutputBufferSize: number;

declare const kAudioConverterPropertyDitherBitDepth: number;

declare const kAudioConverterPropertyDithering: number;

declare const kAudioConverterPropertyFormatList: number;

declare const kAudioConverterPropertyInputCodecParameters: number;

declare const kAudioConverterPropertyMaximumInputBufferSize: number;

declare const kAudioConverterPropertyMaximumInputPacketSize: number;

declare const kAudioConverterPropertyMaximumOutputPacketSize: number;

declare const kAudioConverterPropertyMinimumInputBufferSize: number;

declare const kAudioConverterPropertyMinimumOutputBufferSize: number;

declare const kAudioConverterPropertyOutputCodecParameters: number;

declare const kAudioConverterPropertySettings: number;

declare const kAudioConverterQuality_High: number;

declare const kAudioConverterQuality_Low: number;

declare const kAudioConverterQuality_Max: number;

declare const kAudioConverterQuality_Medium: number;

declare const kAudioConverterQuality_Min: number;

declare const kAudioConverterSampleRateConverterAlgorithm: number;

declare const kAudioConverterSampleRateConverterComplexity: number;

declare const kAudioConverterSampleRateConverterComplexity_Linear: number;

declare const kAudioConverterSampleRateConverterComplexity_Mastering: number;

declare const kAudioConverterSampleRateConverterComplexity_MinimumPhase: number;

declare const kAudioConverterSampleRateConverterComplexity_Normal: number;

declare const kAudioConverterSampleRateConverterInitialPhase: number;

declare const kAudioConverterSampleRateConverterQuality: number;

declare const kAudioDecoderComponentType: number;

declare const kAudioEncoderComponentType: number;

declare const kAudioFile3GP2Type: number;

declare const kAudioFile3GPType: number;

declare const kAudioFileAAC_ADTSType: number;

declare const kAudioFileAC3Type: number;

declare const kAudioFileAIFCType: number;

declare const kAudioFileAIFFType: number;

declare const kAudioFileAMRType: number;

declare const kAudioFileBadPropertySizeError: number;

declare const kAudioFileCAFType: number;

declare const kAudioFileCloseSelect: number;

declare const kAudioFileComponent_AvailableFormatIDs: number;

declare const kAudioFileComponent_AvailableStreamDescriptionsForFormat: number;

declare const kAudioFileComponent_CanRead: number;

declare const kAudioFileComponent_CanWrite: number;

declare const kAudioFileComponent_ExtensionsForType: number;

declare const kAudioFileComponent_FastDispatchTable: number;

declare const kAudioFileComponent_FileTypeName: number;

declare const kAudioFileComponent_HFSTypeCodesForType: number;

declare const kAudioFileComponent_MIMETypesForType: number;

declare const kAudioFileComponent_UTIsForType: number;

declare const kAudioFileCountUserDataSelect: number;

declare const kAudioFileCreateSelect: number;

declare const kAudioFileCreateURLSelect: number;

declare const kAudioFileDataIsThisFormatSelect: number;

declare const kAudioFileDoesNotAllow64BitDataSizeError: number;

declare const kAudioFileEndOfFileError: number;

declare const kAudioFileExtensionIsThisFormatSelect: number;

declare const kAudioFileFLACType: number;

declare const kAudioFileFileDataIsThisFormatSelect: number;

declare const kAudioFileFileIsThisFormatSelect: number;

declare const kAudioFileFileNotFoundError: number;

declare const kAudioFileGetGlobalInfoSelect: number;

declare const kAudioFileGetGlobalInfoSizeSelect: number;

declare const kAudioFileGetPropertyInfoSelect: number;

declare const kAudioFileGetPropertySelect: number;

declare const kAudioFileGetUserDataSelect: number;

declare const kAudioFileGetUserDataSizeSelect: number;

declare const kAudioFileGlobalInfo_AllExtensions: number;

declare const kAudioFileGlobalInfo_AllHFSTypeCodes: number;

declare const kAudioFileGlobalInfo_AllMIMETypes: number;

declare const kAudioFileGlobalInfo_AllUTIs: number;

declare const kAudioFileGlobalInfo_AvailableFormatIDs: number;

declare const kAudioFileGlobalInfo_AvailableStreamDescriptionsForFormat: number;

declare const kAudioFileGlobalInfo_ExtensionsForType: number;

declare const kAudioFileGlobalInfo_FileTypeName: number;

declare const kAudioFileGlobalInfo_HFSTypeCodesForType: number;

declare const kAudioFileGlobalInfo_MIMETypesForType: number;

declare const kAudioFileGlobalInfo_ReadableTypes: number;

declare const kAudioFileGlobalInfo_TypesForExtension: number;

declare const kAudioFileGlobalInfo_TypesForHFSTypeCode: number;

declare const kAudioFileGlobalInfo_TypesForMIMEType: number;

declare const kAudioFileGlobalInfo_TypesForUTI: number;

declare const kAudioFileGlobalInfo_UTIsForType: number;

declare const kAudioFileGlobalInfo_WritableTypes: number;

declare const kAudioFileInitializeSelect: number;

declare const kAudioFileInitializeWithCallbacksSelect: number;

declare const kAudioFileInvalidChunkError: number;

declare const kAudioFileInvalidFileError: number;

declare const kAudioFileInvalidPacketDependencyError: number;

declare const kAudioFileInvalidPacketOffsetError: number;

declare const kAudioFileLATMInLOASType: number;

declare const kAudioFileLoopDirection_Backward: number;

declare const kAudioFileLoopDirection_Forward: number;

declare const kAudioFileLoopDirection_ForwardAndBackward: number;

declare const kAudioFileLoopDirection_NoLooping: number;

declare const kAudioFileM4AType: number;

declare const kAudioFileM4BType: number;

declare const kAudioFileMP1Type: number;

declare const kAudioFileMP2Type: number;

declare const kAudioFileMP3Type: number;

declare const kAudioFileMPEG4Type: number;

declare const kAudioFileMarkerType_Generic: number;

declare const kAudioFileNextType: number;

declare const kAudioFileNotOpenError: number;

declare const kAudioFileNotOptimizedError: number;

declare const kAudioFileOpenSelect: number;

declare const kAudioFileOpenURLSelect: number;

declare const kAudioFileOpenWithCallbacksSelect: number;

declare const kAudioFileOperationNotSupportedError: number;

declare const kAudioFileOptimizeSelect: number;

declare const kAudioFilePermissionsError: number;

declare const kAudioFilePositionError: number;

declare const kAudioFilePropertyAlbumArtwork: number;

declare const kAudioFilePropertyAudioDataByteCount: number;

declare const kAudioFilePropertyAudioDataPacketCount: number;

declare const kAudioFilePropertyAudioTrackCount: number;

declare const kAudioFilePropertyBitRate: number;

declare const kAudioFilePropertyByteToPacket: number;

declare const kAudioFilePropertyChannelLayout: number;

declare const kAudioFilePropertyChunkIDs: number;

declare const kAudioFilePropertyDataFormat: number;

declare const kAudioFilePropertyDataFormatName: number;

declare const kAudioFilePropertyDataOffset: number;

declare const kAudioFilePropertyDeferSizeUpdates: number;

declare const kAudioFilePropertyEstimatedDuration: number;

declare const kAudioFilePropertyFileFormat: number;

declare const kAudioFilePropertyFormatList: number;

declare const kAudioFilePropertyFrameToPacket: number;

declare const kAudioFilePropertyID3Tag: number;

declare const kAudioFilePropertyInfoDictionary: number;

declare const kAudioFilePropertyIsOptimized: number;

declare const kAudioFilePropertyMagicCookieData: number;

declare const kAudioFilePropertyMarkerList: number;

declare const kAudioFilePropertyMaximumPacketSize: number;

declare const kAudioFilePropertyNextIndependentPacket: number;

declare const kAudioFilePropertyPacketRangeByteCountUpperBound: number;

declare const kAudioFilePropertyPacketSizeUpperBound: number;

declare const kAudioFilePropertyPacketTableInfo: number;

declare const kAudioFilePropertyPacketToByte: number;

declare const kAudioFilePropertyPacketToDependencyInfo: number;

declare const kAudioFilePropertyPacketToFrame: number;

declare const kAudioFilePropertyPacketToRollDistance: number;

declare const kAudioFilePropertyPreviousIndependentPacket: number;

declare const kAudioFilePropertyRegionList: number;

declare const kAudioFilePropertyReserveDuration: number;

declare const kAudioFilePropertyRestrictsRandomAccess: number;

declare const kAudioFilePropertySourceBitDepth: number;

declare const kAudioFilePropertyUseAudioTrack: number;

declare const kAudioFileRF64Type: number;

declare const kAudioFileReadBytesSelect: number;

declare const kAudioFileReadPacketDataSelect: number;

declare const kAudioFileReadPacketsSelect: number;

declare const kAudioFileRemoveUserDataSelect: number;

declare const kAudioFileSetPropertySelect: number;

declare const kAudioFileSetUserDataSelect: number;

declare const kAudioFileSoundDesigner2Type: number;

declare const kAudioFileStreamError_BadPropertySize: number;

declare const kAudioFileStreamError_DataUnavailable: number;

declare const kAudioFileStreamError_DiscontinuityCantRecover: number;

declare const kAudioFileStreamError_IllegalOperation: number;

declare const kAudioFileStreamError_InvalidFile: number;

declare const kAudioFileStreamError_InvalidPacketOffset: number;

declare const kAudioFileStreamError_NotOptimized: number;

declare const kAudioFileStreamError_UnspecifiedError: number;

declare const kAudioFileStreamError_UnsupportedDataFormat: number;

declare const kAudioFileStreamError_UnsupportedFileType: number;

declare const kAudioFileStreamError_UnsupportedProperty: number;

declare const kAudioFileStreamError_ValueUnknown: number;

declare const kAudioFileStreamProperty_AudioDataByteCount: number;

declare const kAudioFileStreamProperty_AudioDataPacketCount: number;

declare const kAudioFileStreamProperty_AverageBytesPerPacket: number;

declare const kAudioFileStreamProperty_BitRate: number;

declare const kAudioFileStreamProperty_ByteToPacket: number;

declare const kAudioFileStreamProperty_ChannelLayout: number;

declare const kAudioFileStreamProperty_DataFormat: number;

declare const kAudioFileStreamProperty_DataOffset: number;

declare const kAudioFileStreamProperty_FileFormat: number;

declare const kAudioFileStreamProperty_FormatList: number;

declare const kAudioFileStreamProperty_FrameToPacket: number;

declare const kAudioFileStreamProperty_InfoDictionary: number;

declare const kAudioFileStreamProperty_MagicCookieData: number;

declare const kAudioFileStreamProperty_MaximumPacketSize: number;

declare const kAudioFileStreamProperty_NextIndependentPacket: number;

declare const kAudioFileStreamProperty_PacketSizeUpperBound: number;

declare const kAudioFileStreamProperty_PacketTableInfo: number;

declare const kAudioFileStreamProperty_PacketToByte: number;

declare const kAudioFileStreamProperty_PacketToDependencyInfo: number;

declare const kAudioFileStreamProperty_PacketToFrame: number;

declare const kAudioFileStreamProperty_PacketToRollDistance: number;

declare const kAudioFileStreamProperty_PreviousIndependentPacket: number;

declare const kAudioFileStreamProperty_ReadyToProducePackets: number;

declare const kAudioFileStreamProperty_RestrictsRandomAccess: number;

declare const kAudioFileUnspecifiedError: number;

declare const kAudioFileUnsupportedDataFormatError: number;

declare const kAudioFileUnsupportedFileTypeError: number;

declare const kAudioFileUnsupportedPropertyError: number;

declare const kAudioFileWAVEType: number;

declare const kAudioFileWriteBytesSelect: number;

declare const kAudioFileWritePacketsSelect: number;

declare const kAudioFormatBadPropertySizeError: number;

declare const kAudioFormatBadSpecifierSizeError: number;

declare const kAudioFormatProperty_ASBDFromESDS: number;

declare const kAudioFormatProperty_ASBDFromMPEGPacket: number;

declare const kAudioFormatProperty_AreChannelLayoutsEquivalent: number;

declare const kAudioFormatProperty_AvailableEncodeBitRates: number;

declare const kAudioFormatProperty_AvailableEncodeChannelLayoutTags: number;

declare const kAudioFormatProperty_AvailableEncodeNumberChannels: number;

declare const kAudioFormatProperty_AvailableEncodeSampleRates: number;

declare const kAudioFormatProperty_BalanceFade: number;

declare const kAudioFormatProperty_BitmapForLayoutTag: number;

declare const kAudioFormatProperty_ChannelLayoutForBitmap: number;

declare const kAudioFormatProperty_ChannelLayoutForTag: number;

declare const kAudioFormatProperty_ChannelLayoutFromESDS: number;

declare const kAudioFormatProperty_ChannelLayoutHash: number;

declare const kAudioFormatProperty_ChannelLayoutName: number;

declare const kAudioFormatProperty_ChannelLayoutSimpleName: number;

declare const kAudioFormatProperty_ChannelMap: number;

declare const kAudioFormatProperty_ChannelName: number;

declare const kAudioFormatProperty_ChannelShortName: number;

declare const kAudioFormatProperty_DecodeFormatIDs: number;

declare const kAudioFormatProperty_Decoders: number;

declare const kAudioFormatProperty_EncodeFormatIDs: number;

declare const kAudioFormatProperty_Encoders: number;

declare const kAudioFormatProperty_FirstPlayableFormatFromList: number;

declare const kAudioFormatProperty_FormatEmploysDependentPackets: number;

declare const kAudioFormatProperty_FormatInfo: number;

declare const kAudioFormatProperty_FormatIsEncrypted: number;

declare const kAudioFormatProperty_FormatIsExternallyFramed: number;

declare const kAudioFormatProperty_FormatIsVBR: number;

declare const kAudioFormatProperty_FormatList: number;

declare const kAudioFormatProperty_FormatName: number;

declare const kAudioFormatProperty_ID3TagSize: number;

declare const kAudioFormatProperty_ID3TagToDictionary: number;

declare const kAudioFormatProperty_MatrixMixMap: number;

declare const kAudioFormatProperty_NumberOfChannelsForLayout: number;

declare const kAudioFormatProperty_OutputFormatList: number;

declare const kAudioFormatProperty_PanningMatrix: number;

declare const kAudioFormatProperty_TagForChannelLayout: number;

declare const kAudioFormatProperty_TagsForNumberOfChannels: number;

declare const kAudioFormatProperty_ValidateChannelLayout: number;

declare const kAudioFormatUnknownFormatError: number;

declare const kAudioFormatUnspecifiedError: number;

declare const kAudioFormatUnsupportedDataFormatError: number;

declare const kAudioFormatUnsupportedPropertyError: number;

declare const kAudioHardwareServiceDeviceProperty_VirtualMasterBalance: number;

declare const kAudioHardwareServiceDeviceProperty_VirtualMasterVolume: number;

declare const kAudioHardwareServiceProperty_ServiceRestarted: number;

declare const kAudioOfflineUnitProperty_InputSize: number;

declare const kAudioOfflineUnitProperty_OutputSize: number;

declare const kAudioOutputUnitProperty_ChannelMap: number;

declare const kAudioOutputUnitProperty_CurrentDevice: number;

declare const kAudioOutputUnitProperty_EnableIO: number;

declare const kAudioOutputUnitProperty_HasIO: number;

declare const kAudioOutputUnitProperty_IsRunning: number;

declare const kAudioOutputUnitProperty_SetInputCallback: number;

declare const kAudioOutputUnitProperty_StartTime: number;

declare const kAudioOutputUnitProperty_StartTimestampsAtZero: number;

declare const kAudioOutputUnitRange: number;

declare const kAudioOutputUnitStartSelect: number;

declare const kAudioOutputUnitStopSelect: number;

declare const kAudioQueueDeviceProperty_NumberChannels: number;

declare const kAudioQueueDeviceProperty_SampleRate: number;

declare const kAudioQueueErr_BufferEmpty: number;

declare const kAudioQueueErr_BufferEnqueuedTwice: number;

declare const kAudioQueueErr_BufferInQueue: number;

declare const kAudioQueueErr_CannotStart: number;

declare const kAudioQueueErr_CannotStartYet: number;

declare const kAudioQueueErr_CodecNotFound: number;

declare const kAudioQueueErr_DisposalPending: number;

declare const kAudioQueueErr_EnqueueDuringReset: number;

declare const kAudioQueueErr_InvalidBuffer: number;

declare const kAudioQueueErr_InvalidCodecAccess: number;

declare const kAudioQueueErr_InvalidDevice: number;

declare const kAudioQueueErr_InvalidOfflineMode: number;

declare const kAudioQueueErr_InvalidParameter: number;

declare const kAudioQueueErr_InvalidProperty: number;

declare const kAudioQueueErr_InvalidPropertySize: number;

declare const kAudioQueueErr_InvalidPropertyValue: number;

declare const kAudioQueueErr_InvalidQueueType: number;

declare const kAudioQueueErr_InvalidRunState: number;

declare const kAudioQueueErr_InvalidTapContext: number;

declare const kAudioQueueErr_InvalidTapType: number;

declare const kAudioQueueErr_Permissions: number;

declare const kAudioQueueErr_PrimeTimedOut: number;

declare const kAudioQueueErr_QueueInvalidated: number;

declare const kAudioQueueErr_RecordUnderrun: number;

declare const kAudioQueueErr_TooManyTaps: number;

declare const kAudioQueueParam_Pan: number;

declare const kAudioQueueParam_Pitch: number;

declare const kAudioQueueParam_PlayRate: number;

declare const kAudioQueueParam_Volume: number;

declare const kAudioQueueParam_VolumeRampTime: number;

declare const kAudioQueueProperty_ChannelAssignments: number;

declare const kAudioQueueProperty_ChannelLayout: number;

declare const kAudioQueueProperty_ConverterError: number;

declare const kAudioQueueProperty_CurrentDevice: number;

declare const kAudioQueueProperty_CurrentLevelMeter: number;

declare const kAudioQueueProperty_CurrentLevelMeterDB: number;

declare const kAudioQueueProperty_DecodeBufferSizeFrames: number;

declare const kAudioQueueProperty_EnableLevelMetering: number;

declare const kAudioQueueProperty_EnableTimePitch: number;

declare const kAudioQueueProperty_IsRunning: number;

declare const kAudioQueueProperty_MagicCookie: number;

declare const kAudioQueueProperty_MaximumOutputPacketSize: number;

declare const kAudioQueueProperty_StreamDescription: number;

declare const kAudioQueueProperty_TimePitchAlgorithm: number;

declare const kAudioQueueProperty_TimePitchBypass: number;

declare const kAudioQueueTimePitchAlgorithm_Spectral: number;

declare const kAudioQueueTimePitchAlgorithm_TimeDomain: number;

declare const kAudioQueueTimePitchAlgorithm_Varispeed: number;

declare const kAudioServicesBadPropertySizeError: number;

declare const kAudioServicesBadSpecifierSizeError: number;

declare const kAudioServicesNoError: number;

declare const kAudioServicesPropertyCompletePlaybackIfAppDies: number;

declare const kAudioServicesPropertyIsUISound: number;

declare const kAudioServicesSystemSoundClientTimedOutError: number;

declare const kAudioServicesSystemSoundExceededMaximumDurationError: number;

declare const kAudioServicesSystemSoundUnspecifiedError: number;

declare const kAudioServicesUnsupportedPropertyError: number;

declare const kAudioToolboxErr_CannotDoInCurrentContext: number;

declare const kAudioToolboxErr_EndOfTrack: number;

declare const kAudioToolboxErr_IllegalTrackDestination: number;

declare const kAudioToolboxErr_InvalidEventType: number;

declare const kAudioToolboxErr_InvalidPlayerState: number;

declare const kAudioToolboxErr_InvalidSequenceType: number;

declare const kAudioToolboxErr_NoSequence: number;

declare const kAudioToolboxErr_StartOfTrack: number;

declare const kAudioToolboxErr_TrackIndexError: number;

declare const kAudioToolboxErr_TrackNotFound: number;

declare const kAudioToolboxError_NoTrackDestination: number;

declare const kAudioUnitAddPropertyListenerSelect: number;

declare const kAudioUnitAddRenderNotifySelect: number;

declare const kAudioUnitCarbonViewComponentType: number;

declare const kAudioUnitCarbonViewCreateSelect: number;

declare const kAudioUnitCarbonViewEvent_MouseDownInControl: number;

declare const kAudioUnitCarbonViewEvent_MouseUpInControl: number;

declare const kAudioUnitCarbonViewRange: number;

declare const kAudioUnitCarbonViewSetEventListenerSelect: number;

declare const kAudioUnitClumpID_System: number;

declare const kAudioUnitComplexRenderSelect: number;

declare const kAudioUnitErr_CannotDoInCurrentContext: number;

declare const kAudioUnitErr_ExtensionNotFound: number;

declare const kAudioUnitErr_FailedInitialization: number;

declare const kAudioUnitErr_FileNotSpecified: number;

declare const kAudioUnitErr_FormatNotSupported: number;

declare const kAudioUnitErr_IllegalInstrument: number;

declare const kAudioUnitErr_Initialized: number;

declare const kAudioUnitErr_InstrumentTypeNotFound: number;

declare const kAudioUnitErr_InvalidElement: number;

declare const kAudioUnitErr_InvalidFile: number;

declare const kAudioUnitErr_InvalidFilePath: number;

declare const kAudioUnitErr_InvalidOfflineRender: number;

declare const kAudioUnitErr_InvalidParameter: number;

declare const kAudioUnitErr_InvalidParameterValue: number;

declare const kAudioUnitErr_InvalidProperty: number;

declare const kAudioUnitErr_InvalidPropertyValue: number;

declare const kAudioUnitErr_InvalidScope: number;

declare const kAudioUnitErr_MIDIOutputBufferFull: number;

declare const kAudioUnitErr_MissingKey: number;

declare const kAudioUnitErr_NoConnection: number;

declare const kAudioUnitErr_PropertyNotInUse: number;

declare const kAudioUnitErr_PropertyNotWritable: number;

declare const kAudioUnitErr_RenderTimeout: number;

declare const kAudioUnitErr_TooManyFramesToProcess: number;

declare const kAudioUnitErr_Unauthorized: number;

declare const kAudioUnitErr_Uninitialized: number;

declare const kAudioUnitErr_UnknownFileType: number;

declare const kAudioUnitGetParameterSelect: number;

declare const kAudioUnitGetPropertyInfoSelect: number;

declare const kAudioUnitGetPropertySelect: number;

declare const kAudioUnitInitializeSelect: number;

declare const kAudioUnitManufacturer_Apple: number;

declare const kAudioUnitMigrateProperty_FromPlugin: number;

declare const kAudioUnitMigrateProperty_OldAutomation: number;

declare const kAudioUnitOfflineProperty_InputSize: number;

declare const kAudioUnitOfflineProperty_OutputSize: number;

declare const kAudioUnitOfflineProperty_PreflightName: number;

declare const kAudioUnitOfflineProperty_PreflightRequirements: number;

declare const kAudioUnitOfflineProperty_StartOffset: number;

declare const kAudioUnitParameterFlag_Global: number;

declare const kAudioUnitParameterFlag_Group: number;

declare const kAudioUnitParameterFlag_HasName: number;

declare const kAudioUnitParameterFlag_Input: number;

declare const kAudioUnitParameterFlag_Output: number;

declare const kAudioUnitParameterName_Full: number;

declare const kAudioUnitProcessMultipleSelect: number;

declare const kAudioUnitProcessSelect: number;

declare const kAudioUnitProperty_3DMixerAttenuationCurve: number;

declare const kAudioUnitProperty_3DMixerDistanceAtten: number;

declare const kAudioUnitProperty_3DMixerDistanceParams: number;

declare const kAudioUnitProperty_3DMixerRenderingFlags: number;

declare const kAudioUnitProperty_AUHostIdentifier: number;

declare const kAudioUnitProperty_AddParameterMIDIMapping: number;

declare const kAudioUnitProperty_AllParameterMIDIMappings: number;

declare const kAudioUnitProperty_AudioChannelLayout: number;

declare const kAudioUnitProperty_BusCount: number;

declare const kAudioUnitProperty_BypassEffect: number;

declare const kAudioUnitProperty_CPULoad: number;

declare const kAudioUnitProperty_ClassInfo: number;

declare const kAudioUnitProperty_ClassInfoFromDocument: number;

declare const kAudioUnitProperty_CocoaUI: number;

declare const kAudioUnitProperty_ContextName: number;

declare const kAudioUnitProperty_CurrentPlayTime: number;

declare const kAudioUnitProperty_CurrentPreset: number;

declare const kAudioUnitProperty_DeferredRendererExtraLatency: number;

declare const kAudioUnitProperty_DeferredRendererPullSize: number;

declare const kAudioUnitProperty_DeferredRendererWaitFrames: number;

declare const kAudioUnitProperty_DependentParameters: number;

declare const kAudioUnitProperty_DistanceAttenuationData: number;

declare const kAudioUnitProperty_DopplerShift: number;

declare const kAudioUnitProperty_ElementCount: number;

declare const kAudioUnitProperty_ElementName: number;

declare const kAudioUnitProperty_FactoryPresets: number;

declare const kAudioUnitProperty_FastDispatch: number;

declare const kAudioUnitProperty_FrequencyResponse: number;

declare const kAudioUnitProperty_GetUIComponentList: number;

declare const kAudioUnitProperty_HostCallbacks: number;

declare const kAudioUnitProperty_HotMapParameterMIDIMapping: number;

declare const kAudioUnitProperty_IconLocation: number;

declare const kAudioUnitProperty_InPlaceProcessing: number;

declare const kAudioUnitProperty_InputAnchorTimeStamp: number;

declare const kAudioUnitProperty_InputSamplesInOutput: number;

declare const kAudioUnitProperty_LastRenderError: number;

declare const kAudioUnitProperty_Latency: number;

declare const kAudioUnitProperty_MIDIControlMapping: number;

declare const kAudioUnitProperty_MIDIOutputCallback: number;

declare const kAudioUnitProperty_MIDIOutputCallbackInfo: number;

declare const kAudioUnitProperty_MakeConnection: number;

declare const kAudioUnitProperty_MatrixDimensions: number;

declare const kAudioUnitProperty_MatrixLevels: number;

declare const kAudioUnitProperty_MaximumFramesPerSlice: number;

declare const kAudioUnitProperty_MeterClipping: number;

declare const kAudioUnitProperty_MeteringMode: number;

declare const kAudioUnitProperty_NickName: number;

declare const kAudioUnitProperty_OfflineRender: number;

declare const kAudioUnitProperty_PannerMode: number;

declare const kAudioUnitProperty_ParameterClumpName: number;

declare const kAudioUnitProperty_ParameterHistoryInfo: number;

declare const kAudioUnitProperty_ParameterIDName: number;

declare const kAudioUnitProperty_ParameterInfo: number;

declare const kAudioUnitProperty_ParameterList: number;

declare const kAudioUnitProperty_ParameterStringFromValue: number;

declare const kAudioUnitProperty_ParameterValueFromString: number;

declare const kAudioUnitProperty_ParameterValueName: number;

declare const kAudioUnitProperty_ParameterValueStrings: number;

declare const kAudioUnitProperty_ParametersForOverview: number;

declare const kAudioUnitProperty_PresentPreset: number;

declare const kAudioUnitProperty_PresentationLatency: number;

declare const kAudioUnitProperty_RemoveParameterMIDIMapping: number;

declare const kAudioUnitProperty_RenderQuality: number;

declare const kAudioUnitProperty_RequestViewController: number;

declare const kAudioUnitProperty_ReverbPreset: number;

declare const kAudioUnitProperty_ReverbRoomType: number;

declare const kAudioUnitProperty_SRCAlgorithm: number;

declare const kAudioUnitProperty_SampleRate: number;

declare const kAudioUnitProperty_SampleRateConverterComplexity: number;

declare const kAudioUnitProperty_ScheduleAudioSlice: number;

declare const kAudioUnitProperty_ScheduleStartTimeStamp: number;

declare const kAudioUnitProperty_ScheduledFileBufferSizeFrames: number;

declare const kAudioUnitProperty_ScheduledFileIDs: number;

declare const kAudioUnitProperty_ScheduledFileNumberBuffers: number;

declare const kAudioUnitProperty_ScheduledFilePrime: number;

declare const kAudioUnitProperty_ScheduledFileRegion: number;

declare const kAudioUnitProperty_SetExternalBuffer: number;

declare const kAudioUnitProperty_SetRenderCallback: number;

declare const kAudioUnitProperty_ShouldAllocateBuffer: number;

declare const kAudioUnitProperty_SpatialMixerAttenuationCurve: number;

declare const kAudioUnitProperty_SpatialMixerDistanceParams: number;

declare const kAudioUnitProperty_SpatialMixerRenderingFlags: number;

declare const kAudioUnitProperty_SpatializationAlgorithm: number;

declare const kAudioUnitProperty_SpeakerConfiguration: number;

declare const kAudioUnitProperty_StreamFormat: number;

declare const kAudioUnitProperty_SupportedChannelLayoutTags: number;

declare const kAudioUnitProperty_SupportedNumChannels: number;

declare const kAudioUnitProperty_SupportsMPE: number;

declare const kAudioUnitProperty_TailTime: number;

declare const kAudioUnitProperty_UsesInternalReverb: number;

declare const kAudioUnitRange: number;

declare const kAudioUnitRemovePropertyListenerSelect: number;

declare const kAudioUnitRemovePropertyListenerWithUserDataSelect: number;

declare const kAudioUnitRemoveRenderNotifySelect: number;

declare const kAudioUnitRenderSelect: number;

declare const kAudioUnitResetSelect: number;

declare const kAudioUnitSRCAlgorithm_MediumQuality: number;

declare const kAudioUnitSRCAlgorithm_Polyphase: number;

declare const kAudioUnitSampleRateConverterComplexity_Linear: number;

declare const kAudioUnitSampleRateConverterComplexity_Mastering: number;

declare const kAudioUnitSampleRateConverterComplexity_Normal: number;

declare const kAudioUnitScheduleParametersSelect: number;

declare const kAudioUnitScope_Global: number;

declare const kAudioUnitScope_Group: number;

declare const kAudioUnitScope_Input: number;

declare const kAudioUnitScope_Layer: number;

declare const kAudioUnitScope_LayerItem: number;

declare const kAudioUnitScope_Note: number;

declare const kAudioUnitScope_Output: number;

declare const kAudioUnitScope_Part: number;

declare const kAudioUnitSetParameterSelect: number;

declare const kAudioUnitSetPropertySelect: number;

declare const kAudioUnitSubType_AUConverter: number;

declare const kAudioUnitSubType_AUFilter: number;

declare const kAudioUnitSubType_AUiPodTimeOther: number;

declare const kAudioUnitSubType_AudioFilePlayer: number;

declare const kAudioUnitSubType_BandPassFilter: number;

declare const kAudioUnitSubType_DLSSynth: number;

declare const kAudioUnitSubType_DefaultOutput: number;

declare const kAudioUnitSubType_DeferredRenderer: number;

declare const kAudioUnitSubType_Delay: number;

declare const kAudioUnitSubType_Distortion: number;

declare const kAudioUnitSubType_DynamicsProcessor: number;

declare const kAudioUnitSubType_GenericOutput: number;

declare const kAudioUnitSubType_GraphicEQ: number;

declare const kAudioUnitSubType_HALOutput: number;

declare const kAudioUnitSubType_HRTFPanner: number;

declare const kAudioUnitSubType_HighPassFilter: number;

declare const kAudioUnitSubType_HighShelfFilter: number;

declare const kAudioUnitSubType_LowPassFilter: number;

declare const kAudioUnitSubType_LowShelfFilter: number;

declare const kAudioUnitSubType_MIDISynth: number;

declare const kAudioUnitSubType_MatrixMixer: number;

declare const kAudioUnitSubType_MatrixReverb: number;

declare const kAudioUnitSubType_Merger: number;

declare const kAudioUnitSubType_MultiBandCompressor: number;

declare const kAudioUnitSubType_MultiChannelMixer: number;

declare const kAudioUnitSubType_MultiSplitter: number;

declare const kAudioUnitSubType_NBandEQ: number;

declare const kAudioUnitSubType_NetReceive: number;

declare const kAudioUnitSubType_NetSend: number;

declare const kAudioUnitSubType_NewTimePitch: number;

declare const kAudioUnitSubType_ParametricEQ: number;

declare const kAudioUnitSubType_PeakLimiter: number;

declare const kAudioUnitSubType_Pitch: number;

declare const kAudioUnitSubType_Reverb2: number;

declare const kAudioUnitSubType_RogerBeep: number;

declare const kAudioUnitSubType_RoundTripAAC: number;

declare const kAudioUnitSubType_SampleDelay: number;

declare const kAudioUnitSubType_Sampler: number;

declare const kAudioUnitSubType_ScheduledSoundPlayer: number;

declare const kAudioUnitSubType_SoundFieldPanner: number;

declare const kAudioUnitSubType_SpatialMixer: number;

declare const kAudioUnitSubType_SphericalHeadPanner: number;

declare const kAudioUnitSubType_Splitter: number;

declare const kAudioUnitSubType_StereoMixer: number;

declare const kAudioUnitSubType_SystemOutput: number;

declare const kAudioUnitSubType_TimePitch: number;

declare const kAudioUnitSubType_Varispeed: number;

declare const kAudioUnitSubType_VectorPanner: number;

declare const kAudioUnitSubType_VoiceProcessingIO: number;

declare const kAudioUnitType_Effect: number;

declare const kAudioUnitType_FormatConverter: number;

declare const kAudioUnitType_Generator: number;

declare const kAudioUnitType_MIDIProcessor: number;

declare const kAudioUnitType_Mixer: number;

declare const kAudioUnitType_MusicDevice: number;

declare const kAudioUnitType_MusicEffect: number;

declare const kAudioUnitType_OfflineEffect: number;

declare const kAudioUnitType_Output: number;

declare const kAudioUnitType_Panner: number;

declare const kAudioUnitUninitializeSelect: number;

declare const kAudioUnityCodecComponentType: number;

declare const kBandpassParam_Bandwidth: number;

declare const kBandpassParam_CenterFrequency: number;

declare const kCAClock_CannotSetTimeError: number;

declare const kCAClock_InvalidPlayRateError: number;

declare const kCAClock_InvalidPropertySizeError: number;

declare const kCAClock_InvalidSMPTEFormatError: number;

declare const kCAClock_InvalidSMPTEOffsetError: number;

declare const kCAClock_InvalidSyncModeError: number;

declare const kCAClock_InvalidSyncSourceError: number;

declare const kCAClock_InvalidTimeFormatError: number;

declare const kCAClock_InvalidTimebaseError: number;

declare const kCAClock_InvalidTimebaseSourceError: number;

declare const kCAClock_InvalidUnitError: number;

declare const kCAClock_UnknownPropertyError: number;

declare const kCAFMarkerType_EditDestinationBegin: number;

declare const kCAFMarkerType_EditDestinationEnd: number;

declare const kCAFMarkerType_EditSourceBegin: number;

declare const kCAFMarkerType_EditSourceEnd: number;

declare const kCAFMarkerType_Generic: number;

declare const kCAFMarkerType_Index: number;

declare const kCAFMarkerType_KeySignature: number;

declare const kCAFMarkerType_ProgramEnd: number;

declare const kCAFMarkerType_ProgramStart: number;

declare const kCAFMarkerType_RegionEnd: number;

declare const kCAFMarkerType_RegionStart: number;

declare const kCAFMarkerType_RegionSyncPoint: number;

declare const kCAFMarkerType_ReleaseLoopEnd: number;

declare const kCAFMarkerType_ReleaseLoopStart: number;

declare const kCAFMarkerType_SavedPlayPosition: number;

declare const kCAFMarkerType_SelectionEnd: number;

declare const kCAFMarkerType_SelectionStart: number;

declare const kCAFMarkerType_SustainLoopEnd: number;

declare const kCAFMarkerType_SustainLoopStart: number;

declare const kCAFMarkerType_Tempo: number;

declare const kCAFMarkerType_TimeSignature: number;

declare const kCAFMarkerType_TrackEnd: number;

declare const kCAFMarkerType_TrackStart: number;

declare const kCAF_AudioDataChunkID: number;

declare const kCAF_ChannelLayoutChunkID: number;

declare const kCAF_EditCommentsChunkID: number;

declare const kCAF_FileType: number;

declare const kCAF_FileVersion_Initial: number;

declare const kCAF_FillerChunkID: number;

declare const kCAF_FormatListID: number;

declare const kCAF_InfoStringsChunkID: number;

declare const kCAF_InstrumentChunkID: number;

declare const kCAF_MIDIChunkID: number;

declare const kCAF_MagicCookieID: number;

declare const kCAF_MarkerChunkID: number;

declare const kCAF_OverviewChunkID: number;

declare const kCAF_PacketTableChunkID: number;

declare const kCAF_PeakChunkID: number;

declare const kCAF_RegionChunkID: number;

declare const kCAF_SMPTE_TimeType2398: number;

declare const kCAF_SMPTE_TimeType24: number;

declare const kCAF_SMPTE_TimeType25: number;

declare const kCAF_SMPTE_TimeType2997: number;

declare const kCAF_SMPTE_TimeType2997Drop: number;

declare const kCAF_SMPTE_TimeType30: number;

declare const kCAF_SMPTE_TimeType30Drop: number;

declare const kCAF_SMPTE_TimeType50: number;

declare const kCAF_SMPTE_TimeType5994: number;

declare const kCAF_SMPTE_TimeType5994Drop: number;

declare const kCAF_SMPTE_TimeType60: number;

declare const kCAF_SMPTE_TimeType60Drop: number;

declare const kCAF_SMPTE_TimeTypeNone: number;

declare const kCAF_StreamDescriptionChunkID: number;

declare const kCAF_StringsChunkID: number;

declare const kCAF_UMIDChunkID: number;

declare const kCAF_UUIDChunkID: number;

declare const kCAF_iXMLChunkID: number;

declare const kConverterPrimeMethod_None: number;

declare const kConverterPrimeMethod_Normal: number;

declare const kConverterPrimeMethod_Pre: number;

declare const kDelayParam_DelayTime: number;

declare const kDelayParam_Feedback: number;

declare const kDelayParam_LopassCutoff: number;

declare const kDelayParam_WetDryMix: number;

declare const kDistortionParam_CubicTerm: number;

declare const kDistortionParam_Decay: number;

declare const kDistortionParam_Decimation: number;

declare const kDistortionParam_DecimationMix: number;

declare const kDistortionParam_Delay: number;

declare const kDistortionParam_DelayMix: number;

declare const kDistortionParam_FinalMix: number;

declare const kDistortionParam_LinearTerm: number;

declare const kDistortionParam_PolynomialMix: number;

declare const kDistortionParam_RingModBalance: number;

declare const kDistortionParam_RingModFreq1: number;

declare const kDistortionParam_RingModFreq2: number;

declare const kDistortionParam_RingModMix: number;

declare const kDistortionParam_Rounding: number;

declare const kDistortionParam_SoftClipGain: number;

declare const kDistortionParam_SquaredTerm: number;

declare const kDitherAlgorithm_NoiseShaping: number;

declare const kDitherAlgorithm_TPDF: number;

declare const kDynamicRangeControlMode_Heavy: number;

declare const kDynamicRangeControlMode_Light: number;

declare const kDynamicRangeControlMode_None: number;

declare const kDynamicsProcessorParam_AttackTime: number;

declare const kDynamicsProcessorParam_CompressionAmount: number;

declare const kDynamicsProcessorParam_ExpansionRatio: number;

declare const kDynamicsProcessorParam_ExpansionThreshold: number;

declare const kDynamicsProcessorParam_HeadRoom: number;

declare const kDynamicsProcessorParam_InputAmplitude: number;

declare const kDynamicsProcessorParam_MasterGain: number;

declare const kDynamicsProcessorParam_OutputAmplitude: number;

declare const kDynamicsProcessorParam_ReleaseTime: number;

declare const kDynamicsProcessorParam_Threshold: number;

declare const kExtAudioFileError_AsyncWriteBufferOverflow: number;

declare const kExtAudioFileError_AsyncWriteTooLarge: number;

declare const kExtAudioFileError_InvalidChannelMap: number;

declare const kExtAudioFileError_InvalidDataFormat: number;

declare const kExtAudioFileError_InvalidOperationOrder: number;

declare const kExtAudioFileError_InvalidProperty: number;

declare const kExtAudioFileError_InvalidPropertySize: number;

declare const kExtAudioFileError_InvalidSeek: number;

declare const kExtAudioFileError_MaxPacketSizeUnknown: number;

declare const kExtAudioFileError_NonPCMClientFormat: number;

declare const kExtAudioFileProperty_AudioConverter: number;

declare const kExtAudioFileProperty_AudioFile: number;

declare const kExtAudioFileProperty_ClientChannelLayout: number;

declare const kExtAudioFileProperty_ClientDataFormat: number;

declare const kExtAudioFileProperty_ClientMaxPacketSize: number;

declare const kExtAudioFileProperty_CodecManufacturer: number;

declare const kExtAudioFileProperty_ConverterConfig: number;

declare const kExtAudioFileProperty_FileChannelLayout: number;

declare const kExtAudioFileProperty_FileDataFormat: number;

declare const kExtAudioFileProperty_FileLengthFrames: number;

declare const kExtAudioFileProperty_FileMaxPacketSize: number;

declare const kExtAudioFileProperty_IOBuffer: number;

declare const kExtAudioFileProperty_IOBufferSizeBytes: number;

declare const kExtAudioFileProperty_PacketTable: number;

declare const kGraphicEQParam_NumberOfBands: number;

declare const kHALOutputParam_Volume: number;

declare const kHighShelfParam_CutOffFrequency: number;

declare const kHighShelfParam_Gain: number;

declare const kHintAdvanced: number;

declare const kHintBasic: number;

declare const kHintHidden: number;

declare const kHipassParam_CutoffFrequency: number;

declare const kHipassParam_Resonance: number;

declare const kInstrumentType_AUPreset: number;

declare const kInstrumentType_Audiofile: number;

declare const kInstrumentType_DLSPreset: number;

declare const kInstrumentType_EXS24: number;

declare const kInstrumentType_SF2Preset: number;

declare const kLimiterParam_AttackTime: number;

declare const kLimiterParam_DecayTime: number;

declare const kLimiterParam_PreGain: number;

declare const kLowPassParam_CutoffFrequency: number;

declare const kLowPassParam_Resonance: number;

declare const kMatrixMixerParam_Enable: number;

declare const kMatrixMixerParam_PostAveragePower: number;

declare const kMatrixMixerParam_PostAveragePowerLinear: number;

declare const kMatrixMixerParam_PostPeakHoldLevel: number;

declare const kMatrixMixerParam_PostPeakHoldLevelLinear: number;

declare const kMatrixMixerParam_PreAveragePower: number;

declare const kMatrixMixerParam_PreAveragePowerLinear: number;

declare const kMatrixMixerParam_PrePeakHoldLevel: number;

declare const kMatrixMixerParam_PrePeakHoldLevelLinear: number;

declare const kMatrixMixerParam_Volume: number;

declare const kMultiChannelMixerParam_Enable: number;

declare const kMultiChannelMixerParam_Pan: number;

declare const kMultiChannelMixerParam_PostAveragePower: number;

declare const kMultiChannelMixerParam_PostPeakHoldLevel: number;

declare const kMultiChannelMixerParam_PreAveragePower: number;

declare const kMultiChannelMixerParam_PrePeakHoldLevel: number;

declare const kMultiChannelMixerParam_Volume: number;

declare const kMultibandCompressorParam_AttackTime: number;

declare const kMultibandCompressorParam_CompressionAmount1: number;

declare const kMultibandCompressorParam_CompressionAmount2: number;

declare const kMultibandCompressorParam_CompressionAmount3: number;

declare const kMultibandCompressorParam_CompressionAmount4: number;

declare const kMultibandCompressorParam_Crossover1: number;

declare const kMultibandCompressorParam_Crossover2: number;

declare const kMultibandCompressorParam_Crossover3: number;

declare const kMultibandCompressorParam_EQ1: number;

declare const kMultibandCompressorParam_EQ2: number;

declare const kMultibandCompressorParam_EQ3: number;

declare const kMultibandCompressorParam_EQ4: number;

declare const kMultibandCompressorParam_Headroom1: number;

declare const kMultibandCompressorParam_Headroom2: number;

declare const kMultibandCompressorParam_Headroom3: number;

declare const kMultibandCompressorParam_Headroom4: number;

declare const kMultibandCompressorParam_InputAmplitude1: number;

declare const kMultibandCompressorParam_InputAmplitude2: number;

declare const kMultibandCompressorParam_InputAmplitude3: number;

declare const kMultibandCompressorParam_InputAmplitude4: number;

declare const kMultibandCompressorParam_OutputAmplitude1: number;

declare const kMultibandCompressorParam_OutputAmplitude2: number;

declare const kMultibandCompressorParam_OutputAmplitude3: number;

declare const kMultibandCompressorParam_OutputAmplitude4: number;

declare const kMultibandCompressorParam_Postgain: number;

declare const kMultibandCompressorParam_Pregain: number;

declare const kMultibandCompressorParam_ReleaseTime: number;

declare const kMultibandCompressorParam_Threshold1: number;

declare const kMultibandCompressorParam_Threshold2: number;

declare const kMultibandCompressorParam_Threshold3: number;

declare const kMultibandCompressorParam_Threshold4: number;

declare const kMultibandFilter_Bandwidth1: number;

declare const kMultibandFilter_Bandwidth2: number;

declare const kMultibandFilter_Bandwidth3: number;

declare const kMultibandFilter_CenterFreq1: number;

declare const kMultibandFilter_CenterFreq2: number;

declare const kMultibandFilter_CenterFreq3: number;

declare const kMultibandFilter_CenterGain1: number;

declare const kMultibandFilter_CenterGain2: number;

declare const kMultibandFilter_CenterGain3: number;

declare const kMultibandFilter_HighFilterType: number;

declare const kMultibandFilter_HighFrequency: number;

declare const kMultibandFilter_HighGain: number;

declare const kMultibandFilter_LowFilterType: number;

declare const kMultibandFilter_LowFrequency: number;

declare const kMultibandFilter_LowGain: number;

declare const kMusicDeviceMIDIEventSelect: number;

declare const kMusicDeviceParam_ReverbVolume: number;

declare const kMusicDeviceParam_Tuning: number;

declare const kMusicDeviceParam_Volume: number;

declare const kMusicDevicePrepareInstrumentSelect: number;

declare const kMusicDeviceProperty_BankName: number;

declare const kMusicDeviceProperty_DualSchedulingMode: number;

declare const kMusicDeviceProperty_GroupOutputBus: number;

declare const kMusicDeviceProperty_InstrumentCount: number;

declare const kMusicDeviceProperty_InstrumentName: number;

declare const kMusicDeviceProperty_InstrumentNumber: number;

declare const kMusicDeviceProperty_MIDIXMLNames: number;

declare const kMusicDeviceProperty_PartGroup: number;

declare const kMusicDeviceProperty_SoundBankData: number;

declare const kMusicDeviceProperty_SoundBankFSRef: number;

declare const kMusicDeviceProperty_SoundBankFSSpec: number;

declare const kMusicDeviceProperty_SoundBankURL: number;

declare const kMusicDeviceProperty_StreamFromDisk: number;

declare const kMusicDeviceProperty_SupportsStartStopNote: number;

declare const kMusicDeviceProperty_UsesInternalReverb: number;

declare const kMusicDeviceRange: number;

declare const kMusicDeviceReleaseInstrumentSelect: number;

declare const kMusicDeviceSampleFrameMask_IsScheduled: number;

declare const kMusicDeviceSampleFrameMask_SampleOffset: number;

declare const kMusicDeviceStartNoteSelect: number;

declare const kMusicDeviceStopNoteSelect: number;

declare const kMusicDeviceSysExSelect: number;

declare const kMusicEventType_AUPreset: number;

declare const kMusicEventType_ExtendedControl: number;

declare const kMusicEventType_ExtendedNote: number;

declare const kMusicEventType_ExtendedTempo: number;

declare const kMusicEventType_MIDIChannelMessage: number;

declare const kMusicEventType_MIDINoteMessage: number;

declare const kMusicEventType_MIDIRawData: number;

declare const kMusicEventType_Meta: number;

declare const kMusicEventType_NULL: number;

declare const kMusicEventType_Parameter: number;

declare const kMusicEventType_User: number;

declare const kMusicNoteEvent_Unused: number;

declare const kMusicNoteEvent_UseGroupInstrument: number;

declare const kNewTimePitchParam_EnablePeakLocking: number;

declare const kNewTimePitchParam_Overlap: number;

declare const kNewTimePitchParam_Pitch: number;

declare const kNewTimePitchParam_Rate: number;

declare const kNumAUNBandEQFilterTypes: number;

declare const kNumberOfResponseFrequencies: number;

declare const kOfflinePreflight_NotRequired: number;

declare const kOfflinePreflight_Optional: number;

declare const kOfflinePreflight_Required: number;

declare const kOtherPluginFormat_AU: number;

declare const kOtherPluginFormat_Undefined: number;

declare const kOtherPluginFormat_kMAS: number;

declare const kOtherPluginFormat_kVST: number;

declare const kPannerParam_Azimuth: number;

declare const kPannerParam_CoordScale: number;

declare const kPannerParam_Distance: number;

declare const kPannerParam_Elevation: number;

declare const kPannerParam_Gain: number;

declare const kPannerParam_RefDistance: number;

declare const kParametricEQParam_CenterFreq: number;

declare const kParametricEQParam_Gain: number;

declare const kParametricEQParam_Q: number;

declare const kProgramTargetLevel_Minus20dB: number;

declare const kProgramTargetLevel_Minus23dB: number;

declare const kProgramTargetLevel_Minus31dB: number;

declare const kProgramTargetLevel_None: number;

declare const kRandomParam_BoundA: number;

declare const kRandomParam_BoundB: number;

declare const kRandomParam_Curve: number;

declare const kRenderQuality_High: number;

declare const kRenderQuality_Low: number;

declare const kRenderQuality_Max: number;

declare const kRenderQuality_Medium: number;

declare const kRenderQuality_Min: number;

declare const kReverb2Param_DecayTimeAt0Hz: number;

declare const kReverb2Param_DecayTimeAtNyquist: number;

declare const kReverb2Param_DryWetMix: number;

declare const kReverb2Param_Gain: number;

declare const kReverb2Param_MaxDelayTime: number;

declare const kReverb2Param_MinDelayTime: number;

declare const kReverb2Param_RandomizeReflections: number;

declare const kReverbParam_DryWetMix: number;

declare const kReverbParam_FilterBandwidth: number;

declare const kReverbParam_FilterEnable: number;

declare const kReverbParam_FilterFrequency: number;

declare const kReverbParam_FilterGain: number;

declare const kReverbParam_FilterType: number;

declare const kReverbParam_LargeBrightness: number;

declare const kReverbParam_LargeDelay: number;

declare const kReverbParam_LargeDelayRange: number;

declare const kReverbParam_LargeDensity: number;

declare const kReverbParam_LargeSize: number;

declare const kReverbParam_ModulationDepth: number;

declare const kReverbParam_ModulationRate: number;

declare const kReverbParam_PreDelay: number;

declare const kReverbParam_SmallBrightness: number;

declare const kReverbParam_SmallDelayRange: number;

declare const kReverbParam_SmallDensity: number;

declare const kReverbParam_SmallLargeMix: number;

declare const kReverbParam_SmallSize: number;

declare const kRogerBeepParam_InGateThreshold: number;

declare const kRogerBeepParam_InGateThresholdTime: number;

declare const kRogerBeepParam_OutGateThreshold: number;

declare const kRogerBeepParam_OutGateThresholdTime: number;

declare const kRogerBeepParam_RogerGain: number;

declare const kRogerBeepParam_RogerType: number;

declare const kRogerBeepParam_Sensitivity: number;

declare const kRoundTripAACParam_BitRate: number;

declare const kRoundTripAACParam_CompressedFormatSampleRate: number;

declare const kRoundTripAACParam_EncodingStrategy: number;

declare const kRoundTripAACParam_Format: number;

declare const kRoundTripAACParam_Quality: number;

declare const kRoundTripAACParam_RateOrQuality: number;

declare const kSequenceTrackProperty_AutomatedParameters: number;

declare const kSequenceTrackProperty_LoopInfo: number;

declare const kSequenceTrackProperty_MuteStatus: number;

declare const kSequenceTrackProperty_OffsetTime: number;

declare const kSequenceTrackProperty_SoloStatus: number;

declare const kSequenceTrackProperty_TimeResolution: number;

declare const kSequenceTrackProperty_TrackLength: number;

declare const kSpatialMixerParam_Azimuth: number;

declare const kSpatialMixerParam_Distance: number;

declare const kSpatialMixerParam_Elevation: number;

declare const kSpatialMixerParam_Enable: number;

declare const kSpatialMixerParam_Gain: number;

declare const kSpatialMixerParam_GlobalReverbGain: number;

declare const kSpatialMixerParam_MaxGain: number;

declare const kSpatialMixerParam_MinGain: number;

declare const kSpatialMixerParam_ObstructionAttenuation: number;

declare const kSpatialMixerParam_OcclusionAttenuation: number;

declare const kSpatialMixerParam_PlaybackRate: number;

declare const kSpatialMixerParam_ReverbBlend: number;

declare const kSpeakerConfiguration_5_0: number;

declare const kSpeakerConfiguration_5_1: number;

declare const kSpeakerConfiguration_HeadPhones: number;

declare const kSpeakerConfiguration_Quad: number;

declare const kSpeakerConfiguration_Stereo: number;

declare const kStereoMixerParam_Pan: number;

declare const kStereoMixerParam_PostAveragePower: number;

declare const kStereoMixerParam_PostPeakHoldLevel: number;

declare const kStereoMixerParam_PreAveragePower: number;

declare const kStereoMixerParam_PrePeakHoldLevel: number;

declare const kStereoMixerParam_Volume: number;

declare const kSystemSoundID_FlashScreen: number;

declare const kSystemSoundID_UserPreferredAlert: number;

declare const kSystemSoundID_Vibrate: number;

declare const kTimePitchParam_EffectBlend: number;

declare const kTimePitchParam_Pitch: number;

declare const kTimePitchParam_Rate: number;

declare const kUserPreferredAlert: number;

declare const kVarispeedParam_PlaybackCents: number;

declare const kVarispeedParam_PlaybackRate: number;
