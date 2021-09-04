
interface CHHapticAdvancedPatternPlayer extends CHHapticPatternPlayer {

	setCompletionHandler(_: (p1: NSError) => void)

	completionHandler: (p1: NSError) => void;

	setLoopEnabled(_: boolean)

	loopEnabled: boolean;

	setLoopEnd(_: number)

	loopEnd: number;

	setPlaybackRate(_: number)

	playbackRate: number;

	pauseAtTimeError(error: number): boolean;

	resumeAtTimeError(error: number): boolean;

	seekToOffsetError(error: number): boolean;
}
declare var CHHapticAdvancedPatternPlayer: {

	prototype: CHHapticAdvancedPatternPlayer;
};

interface CHHapticDeviceCapability {

	supportsAudio: boolean;

	supportsHaptics: boolean;

	attributesForDynamicParameterError(error: string): CHHapticParameterAttributes;

	attributesForEventParameterEventTypeError(eventType: string, error: string): CHHapticParameterAttributes;
}
declare var CHHapticDeviceCapability: {

	prototype: CHHapticDeviceCapability;
};

declare class CHHapticDynamicParameter extends NSObject {

	readonly parameterID: string;

	setRelativeTime(_: number)

	relativeTime: number;

	setValue(_: number)

	value: number;

	static create(parameterID: string, value: number, relativeTime: number);
}

declare var CHHapticDynamicParameterIDAudioAttackTimeControl: string;

declare var CHHapticDynamicParameterIDAudioBrightnessControl: string;

declare var CHHapticDynamicParameterIDAudioDecayTimeControl: string;

declare var CHHapticDynamicParameterIDAudioPanControl: string;

declare var CHHapticDynamicParameterIDAudioPitchControl: string;

declare var CHHapticDynamicParameterIDAudioReleaseTimeControl: string;

declare var CHHapticDynamicParameterIDAudioVolumeControl: string;

declare var CHHapticDynamicParameterIDHapticAttackTimeControl: string;

declare var CHHapticDynamicParameterIDHapticDecayTimeControl: string;

declare var CHHapticDynamicParameterIDHapticIntensityControl: string;

declare var CHHapticDynamicParameterIDHapticReleaseTimeControl: string;

declare var CHHapticDynamicParameterIDHapticSharpnessControl: string;

declare class CHHapticEngine extends NSObject {

	static capabilitiesForHardware(): CHHapticDeviceCapability;

	setAutoShutdownEnabled(_: boolean)

	isAutoShutdownEnabled: boolean;

	readonly currentTime: number;

	setIsMutedForAudio(_: boolean)

	isMutedForAudio: boolean;

	setIsMutedForHaptics(_: boolean)

	isMutedForHaptics: boolean;

	setPlaysHapticsOnly(_: boolean)

	playsHapticsOnly: boolean;

	setResetHandler(_: () => void)

	resetHandler: () => void;

	setStoppedHandler(_: (p1: CHHapticEngineStoppedReason) => void)

	stoppedHandler: (p1: CHHapticEngineStoppedReason) => void;

	static create();

	createAdvancedPlayerWithPatternError(with_: CHHapticPattern): CHHapticAdvancedPatternPlayer;

	createPlayerWithPatternError(with_: CHHapticPattern): CHHapticPatternPlayer;

	notifyWhenPlayersFinished(finishedHandler: (p1: NSError) => CHHapticEngineFinishedAction): void;

	playPatternFromDataError(error: NSData): boolean;

	playPatternFromURLError(error: NSURL): boolean;

	registerAudioResourceOptionsError(options: NSURL, error: NSDictionary<any, any>): number;

	startAndReturnError(): boolean;

	startWithCompletionHandler(_?: (p1: NSError) => void): void;

	stopWithCompletionHandler(_?: (p1: NSError) => void): void;

	unregisterAudioResourceError(error: number): boolean;
}

enum CHHapticEngineFinishedAction {

	StopEngine = 1,

	LeaveEngineRunning = 2
}


enum CHHapticEngineStoppedReason {

	AudioSessionInterrupt = 1,

	ApplicationSuspended = 2,

	IdleTimeout = 3,

	NotifyWhenFinished = 4,

	SystemError = -1
}


enum CHHapticErrorCode {

	EngineNotRunning = -4805,

	OperationNotPermitted = -4806,

	EngineStartTimeout = -4808,

	NotSupported = -4809,

	ServerInitFailed = -4810,

	ServerInterrupted = -4811,

	InvalidPatternPlayer = -4812,

	InvalidPatternData = -4813,

	InvalidPatternDictionary = -4814,

	InvalidAudioSession = -4815,

	InvalidParameterType = -4820,

	InvalidEventType = -4821,

	InvalidEventTime = -4822,

	InvalidEventDuration = -4823,

	InvalidAudioResource = -4824,

	ResourceNotAvailable = -4825,

	BadEventEntry = -4830,

	BadParameterEntry = -4831,

	InvalidTime = -4840,

	UnknownError = -4898,

	MemoryError = -4899
}


declare class CHHapticEvent extends NSObject {

	setDuration(_: number)

	duration: number;

	readonly eventParameters: NSArray<CHHapticEventParameter>;

	setRelativeTime(_: number)

	relativeTime: number;

	readonly type: string;

	static create(audioResourceID: number, parameters: NSArray<CHHapticEventParameter> | CHHapticEventParameter[], relativeTime: number);

	static create(audioResourceID: number, parameters: NSArray<CHHapticEventParameter> | CHHapticEventParameter[], relativeTime: number, duration: number);

	static create(eventType: string, parameters: NSArray<CHHapticEventParameter> | CHHapticEventParameter[], relativeTime: number);

	static create(eventType: string, parameters: NSArray<CHHapticEventParameter> | CHHapticEventParameter[], relativeTime: number, duration: number);
}

declare class CHHapticEventParameter extends NSObject {

	readonly parameterID: string;

	setValue(_: number)

	value: number;

	static create(parameterID: string, value: number);
}

declare var CHHapticEventParameterIDAttackTime: string;

declare var CHHapticEventParameterIDAudioBrightness: string;

declare var CHHapticEventParameterIDAudioPan: string;

declare var CHHapticEventParameterIDAudioPitch: string;

declare var CHHapticEventParameterIDAudioVolume: string;

declare var CHHapticEventParameterIDDecayTime: string;

declare var CHHapticEventParameterIDHapticIntensity: string;

declare var CHHapticEventParameterIDHapticSharpness: string;

declare var CHHapticEventParameterIDReleaseTime: string;

declare var CHHapticEventParameterIDSustained: string;

declare var CHHapticEventTypeAudioContinuous: string;

declare var CHHapticEventTypeAudioCustom: string;

declare var CHHapticEventTypeHapticContinuous: string;

declare var CHHapticEventTypeHapticTransient: string;

interface CHHapticParameterAttributes extends NSObjectProtocol {

	defaultValue: number;

	maxValue: number;

	minValue: number;
}
declare var CHHapticParameterAttributes: {

	prototype: CHHapticParameterAttributes;
};

declare class CHHapticParameterCurve extends NSObject {

	readonly controlPoints: NSArray<CHHapticParameterCurveControlPoint>;

	readonly parameterID: string;

	setRelativeTime(_: number)

	relativeTime: number;

	static create(parameterID: string, controlPoints: NSArray<CHHapticParameterCurveControlPoint> | CHHapticParameterCurveControlPoint[], relativeTime: number);
}

declare class CHHapticParameterCurveControlPoint extends NSObject {

	setRelativeTime(_: number)

	relativeTime: number;

	setValue(_: number)

	value: number;

	static create(relativeTime: number, value: number);
}

declare class CHHapticPattern extends NSObject {

	readonly duration: number;

	static create(dictionary: NSDictionary<string, any>);

	static create(events: NSArray<CHHapticEvent> | CHHapticEvent[], parameterCurves: NSArray<CHHapticParameterCurve> | CHHapticParameterCurve[]);

	static create(events: NSArray<CHHapticEvent> | CHHapticEvent[], parameters: NSArray<CHHapticDynamicParameter> | CHHapticDynamicParameter[]);

	exportDictionaryAndReturnError(): NSDictionary<string, any>;
}

declare var CHHapticPatternKeyEvent: string;

declare var CHHapticPatternKeyEventDuration: string;

declare var CHHapticPatternKeyEventParameters: string;

declare var CHHapticPatternKeyEventType: string;

declare var CHHapticPatternKeyEventWaveformPath: string;

declare var CHHapticPatternKeyParameter: string;

declare var CHHapticPatternKeyParameterCurve: string;

declare var CHHapticPatternKeyParameterCurveControlPoints: string;

declare var CHHapticPatternKeyParameterID: string;

declare var CHHapticPatternKeyParameterValue: string;

declare var CHHapticPatternKeyPattern: string;

declare var CHHapticPatternKeyTime: string;

declare var CHHapticPatternKeyVersion: string;

interface CHHapticPatternPlayer extends NSObjectProtocol {

	setIsMuted(_: boolean)

	isMuted: boolean;

	cancelAndReturnError(): boolean;

	scheduleParameterCurveAtTimeError(atTime: CHHapticParameterCurve, error: number): boolean;

	sendParametersAtTimeError(atTime: NSArray<CHHapticDynamicParameter>, error: number): boolean;

	startAtTimeError(error: number): boolean;

	stopAtTimeError(error: number): boolean;
}
declare var CHHapticPatternPlayer: {

	prototype: CHHapticPatternPlayer;
};
