globalThis.CHHapticEngine = globalThis.CHHapticEngine || {};

globalThis.CHHapticEngine.FinishedAction = {
    StopEngine: 1,
    LeaveEngineRunning: 2,
    '1': 'StopEngine',
    '2': 'LeaveEngineRunning'
}

globalThis.CHHapticEngine.StoppedReason = {
    AudioSessionInterrupt: 1,
    ApplicationSuspended: 2,
    IdleTimeout: 3,
    NotifyWhenFinished: 4,
    SystemError: -1,
    '1': 'AudioSessionInterrupt',
    '2': 'ApplicationSuspended',
    '3': 'IdleTimeout',
    '4': 'NotifyWhenFinished',
    '-1': 'SystemError'
}

globalThis.CHHapticErrorCode = globalThis.CHHapticErrorCode || {};

globalThis.CHHapticErrorCode = {
    EngineNotRunning: -4805,
    OperationNotPermitted: -4806,
    EngineStartTimeout: -4808,
    NotSupported: -4809,
    ServerInitFailed: -4810,
    ServerInterrupted: -4811,
    InvalidPatternPlayer: -4812,
    InvalidPatternData: -4813,
    InvalidPatternDictionary: -4814,
    InvalidAudioSession: -4815,
    InvalidParameterType: -4820,
    InvalidEventType: -4821,
    InvalidEventTime: -4822,
    InvalidEventDuration: -4823,
    InvalidAudioResource: -4824,
    ResourceNotAvailable: -4825,
    BadEventEntry: -4830,
    BadParameterEntry: -4831,
    InvalidTime: -4840,
    UnknownError: -4898,
    MemoryError: -4899,
    '-4805': 'EngineNotRunning',
    '-4806': 'OperationNotPermitted',
    '-4808': 'EngineStartTimeout',
    '-4809': 'NotSupported',
    '-4810': 'ServerInitFailed',
    '-4811': 'ServerInterrupted',
    '-4812': 'InvalidPatternPlayer',
    '-4813': 'InvalidPatternData',
    '-4814': 'InvalidPatternDictionary',
    '-4815': 'InvalidAudioSession',
    '-4820': 'InvalidParameterType',
    '-4821': 'InvalidEventType',
    '-4822': 'InvalidEventTime',
    '-4823': 'InvalidEventDuration',
    '-4824': 'InvalidAudioResource',
    '-4825': 'ResourceNotAvailable',
    '-4830': 'BadEventEntry',
    '-4831': 'BadParameterEntry',
    '-4840': 'InvalidTime',
    '-4898': 'UnknownError',
    '-4899': 'MemoryError'
}

interface CHHapticAdvancedPatternPlayer extends CHHapticPatternPlayer {
  completionHandler: (p1: NSError) => void;
  setCompletionHandler(_: (p1: NSError) => void)
  loopEnabled: boolean;
  setLoopEnabled(_: boolean)
  loopEnd: number;
  setLoopEnd(_: number)
  playbackRate: number;
  setPlaybackRate(_: number)
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
  relativeTime: number;
  setRelativeTime(_: number)
  value: number;
  setValue(_: number)
  static createWithParameterIDValueRelativeTime(parameterID: string, value: number, relativeTime: number): this;
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
  isAutoShutdownEnabled: boolean;
  setAutoShutdownEnabled(_: boolean)
  readonly currentTime: number;
  isMutedForAudio: boolean;
  setIsMutedForAudio(_: boolean)
  isMutedForHaptics: boolean;
  setIsMutedForHaptics(_: boolean)
  playsHapticsOnly: boolean;
  setPlaysHapticsOnly(_: boolean)
  resetHandler: () => void;
  setResetHandler(_: () => void)
  stoppedHandler: (p1: CHHapticEngine.StoppedReason) => void;
  setStoppedHandler(_: (p1: CHHapticEngine.StoppedReason) => void)
  createAdvancedPlayerWithPatternError(with_: CHHapticPattern): CHHapticAdvancedPatternPlayer;
  createPlayerWithPatternError(with_: CHHapticPattern): CHHapticPatternPlayer;
  static create(): this;
  notifyWhenPlayersFinished(finishedHandler: (p1: NSError) => CHHapticEngine.FinishedAction): void;
  playPatternFromDataError(error: Data): boolean;
  playPatternFromURLError(error: URL): boolean;
  registerAudioResourceOptionsError(options: URL, error: NSDictionary<any, any>): number;
  startAndReturnError(): boolean;
  startWithCompletionHandler(_?: (p1: NSError) => void): void;
  stopWithCompletionHandler(_?: (p1: NSError) => void): void;
  unregisterAudioResourceError(error: number): boolean;
}

declare class CHHapticEvent extends NSObject {
  duration: number;
  setDuration(_: number)
  readonly eventParameters: NSArray<CHHapticEventParameter>;
  relativeTime: number;
  setRelativeTime(_: number)
  readonly type: string;
  static createWithAudioResourceIDParametersRelativeTime(audioResourceID: number, parameters: NSArray<CHHapticEventParameter>, relativeTime: number): this;
  static createWithAudioResourceIDParametersRelativeTimeDuration(audioResourceID: number, parameters: NSArray<CHHapticEventParameter>, relativeTime: number, duration: number): this;
  static createWithEventTypeParametersRelativeTime(eventType: string, parameters: NSArray<CHHapticEventParameter>, relativeTime: number): this;
  static createWithEventTypeParametersRelativeTimeDuration(eventType: string, parameters: NSArray<CHHapticEventParameter>, relativeTime: number, duration: number): this;
}

declare class CHHapticEventParameter extends NSObject {
  readonly parameterID: string;
  value: number;
  setValue(_: number)
  static createWithParameterIDValue(parameterID: string, value: number): this;
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
  readonly controlPoints: NSArray<CHHapticParameterCurve.ControlPoint>;
  readonly parameterID: string;
  relativeTime: number;
  setRelativeTime(_: number)
  static createWithParameterIDControlPointsRelativeTime(parameterID: string, controlPoints: NSArray<CHHapticParameterCurve.ControlPoint>, relativeTime: number): this;
}

declare class CHHapticParameterCurveControlPoint extends NSObject {
  relativeTime: number;
  setRelativeTime(_: number)
  value: number;
  setValue(_: number)
  static createWithRelativeTimeValue(relativeTime: number, value: number): this;
}

declare class CHHapticPattern extends NSObject {
  readonly duration: number;
  exportDictionaryAndReturnError(): NSDictionary<string, any>;
  static createWithDictionary(dictionary: NSDictionary<string, any>): this;
  static createWithEventsParameterCurves(events: NSArray<CHHapticEvent>, parameterCurves: NSArray<CHHapticParameterCurve>): this;
  static createWithEventsParameters(events: NSArray<CHHapticEvent>, parameters: NSArray<CHHapticDynamicParameter>): this;
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
  isMuted: boolean;
  setIsMuted(_: boolean)
  cancelAndReturnError(): boolean;
  scheduleParameterCurveAtTimeError(atTime: CHHapticParameterCurve, error: number): boolean;
  sendParametersAtTimeError(atTime: NSArray<CHHapticDynamicParameter>, error: number): boolean;
  startAtTimeError(error: number): boolean;
  stopAtTimeError(error: number): boolean;
}

declare var CHHapticPatternPlayer: {
  prototype: CHHapticPatternPlayer;
};

module CHHapticEngine {
  enum FinishedAction {
    StopEngine = 1,
    LeaveEngineRunning = 2
  }
  enum StoppedReason {
    AudioSessionInterrupt = 1,
    ApplicationSuspended = 2,
    IdleTimeout = 3,
    NotifyWhenFinished = 4,
    SystemError = -1
  }
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

