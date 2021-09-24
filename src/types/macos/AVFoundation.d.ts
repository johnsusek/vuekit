globalThis.AVAssetExportSession = globalThis.AVAssetExportSession || {};

globalThis.AVAssetExportSession.Status = {
    Unknown: 0,
    Waiting: 1,
    Exporting: 2,
    Completed: 3,
    Failed: 4,
    Cancelled: 5,
    '0': 'Unknown',
    '1': 'Waiting',
    '2': 'Exporting',
    '3': 'Completed',
    '4': 'Failed',
    '5': 'Cancelled'
}

globalThis.AVAssetImageGenerator = globalThis.AVAssetImageGenerator || {};

globalThis.AVAssetImageGenerator.Result = {
    Succeeded: 0,
    Failed: 1,
    Cancelled: 2,
    '0': 'Succeeded',
    '1': 'Failed',
    '2': 'Cancelled'
}

globalThis.AVAssetReader = globalThis.AVAssetReader || {};

globalThis.AVAssetReader.Status = {
    Unknown: 0,
    Reading: 1,
    Completed: 2,
    Failed: 3,
    Cancelled: 4,
    '0': 'Unknown',
    '1': 'Reading',
    '2': 'Completed',
    '3': 'Failed',
    '4': 'Cancelled'
}

globalThis.AVAssetReferenceRestrictions = globalThis.AVAssetReferenceRestrictions || {};

globalThis.AVAssetReferenceRestrictions = {
    ForbidNone: 0,
    ForbidRemoteReferenceToLocal: 1,
    ForbidLocalReferenceToRemote: 2,
    ForbidCrossSiteReference: 4,
    ForbidLocalReferenceToLocal: 8,
    ForbidAll: 65535,
    DefaultPolicy: 2,
    '0': 'ForbidNone',
    '1': 'ForbidRemoteReferenceToLocal',
    '2': 'ForbidLocalReferenceToRemote',
    '4': 'ForbidCrossSiteReference',
    '8': 'ForbidLocalReferenceToLocal',
    '65535': 'ForbidAll',
    '2': 'DefaultPolicy'
}

globalThis.AVAssetWriter = globalThis.AVAssetWriter || {};

globalThis.AVAssetWriter.Status = {
    Unknown: 0,
    Writing: 1,
    Completed: 2,
    Failed: 3,
    Cancelled: 4,
    '0': 'Unknown',
    '1': 'Writing',
    '2': 'Completed',
    '3': 'Failed',
    '4': 'Cancelled'
}

globalThis.AVAudio3DMixingPointSourceInHeadMode = globalThis.AVAudio3DMixingPointSourceInHeadMode || {};

globalThis.AVAudio3DMixingPointSourceInHeadMode = {
    Mono: 0,
    Bypass: 1,
    '0': 'Mono',
    '1': 'Bypass'
}

globalThis.AVAudio3DMixingRenderingAlgorithm = globalThis.AVAudio3DMixingRenderingAlgorithm || {};

globalThis.AVAudio3DMixingRenderingAlgorithm = {
    EqualPowerPanning: 0,
    SphericalHead: 1,
    HRTF: 2,
    SoundField: 3,
    StereoPassThrough: 5,
    HRTFHQ: 6,
    Auto: 7,
    '0': 'EqualPowerPanning',
    '1': 'SphericalHead',
    '2': 'HRTF',
    '3': 'SoundField',
    '5': 'StereoPassThrough',
    '6': 'HRTFHQ',
    '7': 'Auto'
}

globalThis.AVAudio3DMixingSourceMode = globalThis.AVAudio3DMixingSourceMode || {};

globalThis.AVAudio3DMixingSourceMode = {
    SpatializeIfMono: 0,
    Bypass: 1,
    PointSource: 2,
    AmbienceBed: 3,
    '0': 'SpatializeIfMono',
    '1': 'Bypass',
    '2': 'PointSource',
    '3': 'AmbienceBed'
}

globalThis.AVAudioCommonFormat = globalThis.AVAudioCommonFormat || {};

globalThis.AVAudioCommonFormat = {
    OtherFormat: 0,
    PCMFormatFloat32: 1,
    PCMFormatFloat64: 2,
    PCMFormatInt16: 3,
    PCMFormatInt32: 4,
    '0': 'OtherFormat',
    '1': 'PCMFormatFloat32',
    '2': 'PCMFormatFloat64',
    '3': 'PCMFormatInt16',
    '4': 'PCMFormatInt32'
}

globalThis.AVAudioConverterInputStatus = globalThis.AVAudioConverterInputStatus || {};

globalThis.AVAudioConverterInputStatus = {
    HaveData: 0,
    NoDataNow: 1,
    EndOfStream: 2,
    '0': 'HaveData',
    '1': 'NoDataNow',
    '2': 'EndOfStream'
}

globalThis.AVAudioConverterOutputStatus = globalThis.AVAudioConverterOutputStatus || {};

globalThis.AVAudioConverterOutputStatus = {
    HaveData: 0,
    InputRanDry: 1,
    EndOfStream: 2,
    Error: 3,
    '0': 'HaveData',
    '1': 'InputRanDry',
    '2': 'EndOfStream',
    '3': 'Error'
}

globalThis.AVAudioConverterPrimeMethod = globalThis.AVAudioConverterPrimeMethod || {};

globalThis.AVAudioConverterPrimeMethod = {
    Pre: 0,
    Normal: 1,
    None: 2,
    '0': 'Pre',
    '1': 'Normal',
    '2': 'None'
}

globalThis.AVAudioEngineManualRenderingError = globalThis.AVAudioEngineManualRenderingError || {};

globalThis.AVAudioEngineManualRenderingError = {
    InvalidMode: -80800,
    Initialized: -80801,
    NotRunning: -80802,
    '-80800': 'InvalidMode',
    '-80801': 'Initialized',
    '-80802': 'NotRunning'
}

globalThis.AVAudioEngineManualRenderingMode = globalThis.AVAudioEngineManualRenderingMode || {};

globalThis.AVAudioEngineManualRenderingMode = {
    Offline: 0,
    Realtime: 1,
    '0': 'Offline',
    '1': 'Realtime'
}

globalThis.AVAudioEngineManualRenderingStatus = globalThis.AVAudioEngineManualRenderingStatus || {};

globalThis.AVAudioEngineManualRenderingStatus = {
    Error: -1,
    Success: 0,
    InsufficientDataFromInputNode: 1,
    CannotDoInCurrentContext: 2,
    '-1': 'Error',
    '0': 'Success',
    '1': 'InsufficientDataFromInputNode',
    '2': 'CannotDoInCurrentContext'
}

globalThis.AVAudioEnvironmentDistanceAttenuationModel = globalThis.AVAudioEnvironmentDistanceAttenuationModel || {};

globalThis.AVAudioEnvironmentDistanceAttenuationModel = {
    Exponential: 1,
    Inverse: 2,
    Linear: 3,
    '1': 'Exponential',
    '2': 'Inverse',
    '3': 'Linear'
}

globalThis.AVAudioEnvironmentOutputType = globalThis.AVAudioEnvironmentOutputType || {};

globalThis.AVAudioEnvironmentOutputType = {
    Auto: 0,
    Headphones: 1,
    BuiltInSpeakers: 2,
    ExternalSpeakers: 3,
    '0': 'Auto',
    '1': 'Headphones',
    '2': 'BuiltInSpeakers',
    '3': 'ExternalSpeakers'
}

globalThis.AVAudioPlayerNodeBufferOptions = globalThis.AVAudioPlayerNodeBufferOptions || {};

globalThis.AVAudioPlayerNodeBufferOptions = {
    Loops: 1,
    Interrupts: 2,
    InterruptsAtLoop: 4,
    '1': 'Loops',
    '2': 'Interrupts',
    '4': 'InterruptsAtLoop'
}

globalThis.AVAudioPlayerNodeCompletionCallbackType = globalThis.AVAudioPlayerNodeCompletionCallbackType || {};

globalThis.AVAudioPlayerNodeCompletionCallbackType = {
    DataConsumed: 0,
    DataRendered: 1,
    DataPlayedBack: 2,
    '0': 'DataConsumed',
    '1': 'DataRendered',
    '2': 'DataPlayedBack'
}

globalThis.AVAudioQuality = globalThis.AVAudioQuality || {};

globalThis.AVAudioQuality = {
    Min: 0,
    Low: 32,
    Medium: 64,
    High: 96,
    Max: 127,
    '0': 'Min',
    '32': 'Low',
    '64': 'Medium',
    '96': 'High',
    '127': 'Max'
}

globalThis.AVAudioSessionActivationOptions = globalThis.AVAudioSessionActivationOptions || {};

globalThis.AVAudioSessionActivationOptions = {
    None: 0,
    '0': 'None'
}

globalThis.AVAudioSession = globalThis.AVAudioSession || {};

globalThis.AVAudioSession.CategoryOptions = {
    MixWithOthers: 1,
    DuckOthers: 2,
    AllowBluetooth: 4,
    DefaultToSpeaker: 8,
    InterruptSpokenAudioAndMixWithOthers: 17,
    AllowBluetoothA2DP: 32,
    AllowAirPlay: 64,
    '1': 'MixWithOthers',
    '2': 'DuckOthers',
    '4': 'AllowBluetooth',
    '8': 'DefaultToSpeaker',
    '17': 'InterruptSpokenAudioAndMixWithOthers',
    '32': 'AllowBluetoothA2DP',
    '64': 'AllowAirPlay'
}

globalThis.AVAudioSession.IOType = {
    NotSpecified: 0,
    Aggregated: 1,
    '0': 'NotSpecified',
    '1': 'Aggregated'
}

globalThis.AVAudioSession.InterruptionOptions = {
    ShouldResume: 1,
    '1': 'ShouldResume'
}

globalThis.AVAudioSession.InterruptionType = {
    Began: 1,
    Ended: 0,
    '1': 'Began',
    '0': 'Ended'
}

globalThis.AVAudioSession.PortOverride = {
    None: 0,
    Speaker: 1936747378,
    '0': 'None',
    '1936747378': 'Speaker'
}

globalThis.AVAudioSession.PromptStyle = {
    None: 1852796517,
    Short: 1936224884,
    Normal: 1852992876,
    '1852796517': 'None',
    '1936224884': 'Short',
    '1852992876': 'Normal'
}

globalThis.AVAudioSession.RecordPermission = {
    Undetermined: 1970168948,
    Denied: 1684369017,
    Granted: 1735552628,
    '1970168948': 'Undetermined',
    '1684369017': 'Denied',
    '1735552628': 'Granted'
}

globalThis.AVAudioSession.RouteChangeReason = {
    Unknown: 0,
    NewDeviceAvailable: 1,
    OldDeviceUnavailable: 2,
    CategoryChange: 3,
    Override: 4,
    WakeFromSleep: 6,
    NoSuitableRouteForCategory: 7,
    RouteConfigurationChange: 8,
    '0': 'Unknown',
    '1': 'NewDeviceAvailable',
    '2': 'OldDeviceUnavailable',
    '3': 'CategoryChange',
    '4': 'Override',
    '6': 'WakeFromSleep',
    '7': 'NoSuitableRouteForCategory',
    '8': 'RouteConfigurationChange'
}

globalThis.AVAudioSession.RouteSharingPolicy = {
    Default: 0,
    LongFormAudio: 1,
    LongForm: 1,
    Independent: 2,
    LongFormVideo: 3,
    '0': 'Default',
    '1': 'LongFormAudio',
    '1': 'LongForm',
    '2': 'Independent',
    '3': 'LongFormVideo'
}

globalThis.AVAudioSession.SetActiveOptions = {
    NotifyOthersOnDeactivation: 1,
    '1': 'NotifyOthersOnDeactivation'
}

globalThis.AVAudioSession.SilenceSecondaryAudioHintType = {
    Begin: 1,
    End: 0,
    '1': 'Begin',
    '0': 'End'
}

globalThis.AVAudioUnitDistortionPreset = globalThis.AVAudioUnitDistortionPreset || {};

globalThis.AVAudioUnitDistortionPreset = {
    DrumsBitBrush: 0,
    DrumsBufferBeats: 1,
    DrumsLoFi: 2,
    MultiBrokenSpeaker: 3,
    MultiCellphoneConcert: 4,
    MultiDecimated1: 5,
    MultiDecimated2: 6,
    MultiDecimated3: 7,
    MultiDecimated4: 8,
    MultiDistortedFunk: 9,
    MultiDistortedCubed: 10,
    MultiDistortedSquared: 11,
    MultiEcho1: 12,
    MultiEcho2: 13,
    MultiEchoTight1: 14,
    MultiEchoTight2: 15,
    MultiEverythingIsBroken: 16,
    SpeechAlienChatter: 17,
    SpeechCosmicInterference: 18,
    SpeechGoldenPi: 19,
    SpeechRadioTower: 20,
    SpeechWaves: 21,
    '0': 'DrumsBitBrush',
    '1': 'DrumsBufferBeats',
    '2': 'DrumsLoFi',
    '3': 'MultiBrokenSpeaker',
    '4': 'MultiCellphoneConcert',
    '5': 'MultiDecimated1',
    '6': 'MultiDecimated2',
    '7': 'MultiDecimated3',
    '8': 'MultiDecimated4',
    '9': 'MultiDistortedFunk',
    '10': 'MultiDistortedCubed',
    '11': 'MultiDistortedSquared',
    '12': 'MultiEcho1',
    '13': 'MultiEcho2',
    '14': 'MultiEchoTight1',
    '15': 'MultiEchoTight2',
    '16': 'MultiEverythingIsBroken',
    '17': 'SpeechAlienChatter',
    '18': 'SpeechCosmicInterference',
    '19': 'SpeechGoldenPi',
    '20': 'SpeechRadioTower',
    '21': 'SpeechWaves'
}

globalThis.AVAudioUnitEQFilterType = globalThis.AVAudioUnitEQFilterType || {};

globalThis.AVAudioUnitEQFilterType = {
    Parametric: 0,
    LowPass: 1,
    HighPass: 2,
    ResonantLowPass: 3,
    ResonantHighPass: 4,
    BandPass: 5,
    BandStop: 6,
    LowShelf: 7,
    HighShelf: 8,
    ResonantLowShelf: 9,
    ResonantHighShelf: 10,
    '0': 'Parametric',
    '1': 'LowPass',
    '2': 'HighPass',
    '3': 'ResonantLowPass',
    '4': 'ResonantHighPass',
    '5': 'BandPass',
    '6': 'BandStop',
    '7': 'LowShelf',
    '8': 'HighShelf',
    '9': 'ResonantLowShelf',
    '10': 'ResonantHighShelf'
}

globalThis.AVAudioUnitReverbPreset = globalThis.AVAudioUnitReverbPreset || {};

globalThis.AVAudioUnitReverbPreset = {
    SmallRoom: 0,
    MediumRoom: 1,
    LargeRoom: 2,
    MediumHall: 3,
    LargeHall: 4,
    Plate: 5,
    MediumChamber: 6,
    LargeChamber: 7,
    Cathedral: 8,
    LargeRoom2: 9,
    MediumHall2: 10,
    MediumHall3: 11,
    LargeHall2: 12,
    '0': 'SmallRoom',
    '1': 'MediumRoom',
    '2': 'LargeRoom',
    '3': 'MediumHall',
    '4': 'LargeHall',
    '5': 'Plate',
    '6': 'MediumChamber',
    '7': 'LargeChamber',
    '8': 'Cathedral',
    '9': 'LargeRoom2',
    '10': 'MediumHall2',
    '11': 'MediumHall3',
    '12': 'LargeHall2'
}

globalThis.AVAuthorizationStatus = globalThis.AVAuthorizationStatus || {};

globalThis.AVAuthorizationStatus = {
    NotDetermined: 0,
    Restricted: 1,
    Denied: 2,
    Authorized: 3,
    '0': 'NotDetermined',
    '1': 'Restricted',
    '2': 'Denied',
    '3': 'Authorized'
}

globalThis.AVCaptureDevice = globalThis.AVCaptureDevice || {};

globalThis.AVCaptureDevice.AutoFocusRangeRestriction = {
    None: 0,
    Near: 1,
    Far: 2,
    '0': 'None',
    '1': 'Near',
    '2': 'Far'
}

globalThis.AVCaptureDeviceFormat = globalThis.AVCaptureDeviceFormat || {};

globalThis.AVCaptureDeviceFormat.AutoFocusSystem = {
    None: 0,
    ContrastDetection: 1,
    PhaseDetection: 2,
    '0': 'None',
    '1': 'ContrastDetection',
    '2': 'PhaseDetection'
}

globalThis.AVCaptureColorSpace = globalThis.AVCaptureColorSpace || {};

globalThis.AVCaptureColorSpace = {
    sRGB: 0,
    P3_D65: 1,
    '0': 'sRGB',
    '1': 'P3_D65'
}

globalThis.AVCaptureDevice.Position = {
    Unspecified: 0,
    Back: 1,
    Front: 2,
    '0': 'Unspecified',
    '1': 'Back',
    '2': 'Front'
}

globalThis.AVCaptureDevice.TransportControlsPlaybackMode = {
    NotPlayingMode: 0,
    PlayingMode: 1,
    '0': 'NotPlayingMode',
    '1': 'PlayingMode'
}

globalThis.AVCaptureDevice.ExposureMode = {
    Locked: 0,
    AutoExpose: 1,
    ContinuousAutoExposure: 2,
    Custom: 3,
    '0': 'Locked',
    '1': 'AutoExpose',
    '2': 'ContinuousAutoExposure',
    '3': 'Custom'
}

globalThis.AVCaptureDevice.FlashMode = {
    Off: 0,
    On: 1,
    Auto: 2,
    '0': 'Off',
    '1': 'On',
    '2': 'Auto'
}

globalThis.AVCaptureDevice.FocusMode = {
    Locked: 0,
    AutoFocus: 1,
    ContinuousAutoFocus: 2,
    '0': 'Locked',
    '1': 'AutoFocus',
    '2': 'ContinuousAutoFocus'
}

globalThis.AVCaptureDevice.LensStabilizationStatus = {
    Unsupported: 0,
    Off: 1,
    Active: 2,
    OutOfRange: 3,
    Unavailable: 4,
    '0': 'Unsupported',
    '1': 'Off',
    '2': 'Active',
    '3': 'OutOfRange',
    '4': 'Unavailable'
}

globalThis.AVCaptureOutput = globalThis.AVCaptureOutput || {};

globalThis.AVCaptureOutput.DataDroppedReason = {
    None: 0,
    LateData: 1,
    OutOfBuffers: 2,
    Discontinuity: 3,
    '0': 'None',
    '1': 'LateData',
    '2': 'OutOfBuffers',
    '3': 'Discontinuity'
}

globalThis.AVCapturePhotoOutput = globalThis.AVCapturePhotoOutput || {};

globalThis.AVCapturePhotoOutput.QualityPrioritization = {
    Speed: 1,
    Balanced: 2,
    Quality: 3,
    '1': 'Speed',
    '2': 'Balanced',
    '3': 'Quality'
}

globalThis.AVCaptureSession = globalThis.AVCaptureSession || {};

globalThis.AVCaptureSession.InterruptionReason = {
    VideoDeviceNotAvailableInBackground: 1,
    AudioDeviceInUseByAnotherClient: 2,
    VideoDeviceInUseByAnotherClient: 3,
    VideoDeviceNotAvailableWithMultipleForegroundApps: 4,
    VideoDeviceNotAvailableDueToSystemPressure: 5,
    '1': 'VideoDeviceNotAvailableInBackground',
    '2': 'AudioDeviceInUseByAnotherClient',
    '3': 'VideoDeviceInUseByAnotherClient',
    '4': 'VideoDeviceNotAvailableWithMultipleForegroundApps',
    '5': 'VideoDeviceNotAvailableDueToSystemPressure'
}

globalThis.AVCaptureSystemPressureState = globalThis.AVCaptureSystemPressureState || {};

globalThis.AVCaptureSystemPressureState.Factors = {
    None: 0,
    SystemTemperature: 1,
    PeakPower: 2,
    DepthModuleTemperature: 4,
    '0': 'None',
    '1': 'SystemTemperature',
    '2': 'PeakPower',
    '4': 'DepthModuleTemperature'
}

globalThis.AVCaptureDevice.TorchMode = {
    Off: 0,
    On: 1,
    Auto: 2,
    '0': 'Off',
    '1': 'On',
    '2': 'Auto'
}

globalThis.AVCaptureVideoOrientation = globalThis.AVCaptureVideoOrientation || {};

globalThis.AVCaptureVideoOrientation = {
    Portrait: 1,
    PortraitUpsideDown: 2,
    LandscapeRight: 3,
    LandscapeLeft: 4,
    '1': 'Portrait',
    '2': 'PortraitUpsideDown',
    '3': 'LandscapeRight',
    '4': 'LandscapeLeft'
}

globalThis.AVCaptureDevice.WhiteBalanceMode = {
    Locked: 0,
    AutoWhiteBalance: 1,
    ContinuousAutoWhiteBalance: 2,
    '0': 'Locked',
    '1': 'AutoWhiteBalance',
    '2': 'ContinuousAutoWhiteBalance'
}

globalThis.AVContentAuthorizationStatus = globalThis.AVContentAuthorizationStatus || {};

globalThis.AVContentAuthorizationStatus = {
    Unknown: 0,
    Completed: 1,
    Cancelled: 2,
    TimedOut: 3,
    Busy: 4,
    NotAvailable: 5,
    NotPossible: 6,
    '0': 'Unknown',
    '1': 'Completed',
    '2': 'Cancelled',
    '3': 'TimedOut',
    '4': 'Busy',
    '5': 'NotAvailable',
    '6': 'NotPossible'
}

globalThis.AVContentKeyRequest = globalThis.AVContentKeyRequest || {};

globalThis.AVContentKeyRequest.Status = {
    RequestingResponse: 0,
    ReceivedResponse: 1,
    Renewed: 2,
    Retried: 3,
    Cancelled: 4,
    Failed: 5,
    '0': 'RequestingResponse',
    '1': 'ReceivedResponse',
    '2': 'Renewed',
    '3': 'Retried',
    '4': 'Cancelled',
    '5': 'Failed'
}

globalThis.AVDepthData = globalThis.AVDepthData || {};

globalThis.AVDepthData.Accuracy = {
    Relative: 0,
    Absolute: 1,
    '0': 'Relative',
    '1': 'Absolute'
}

globalThis.AVDepthData.Quality = {
    Low: 0,
    High: 1,
    '0': 'Low',
    '1': 'High'
}

globalThis.AVError = globalThis.AVError || {};

globalThis.AVError = {
    Unknown: -11800,
    OutOfMemory: -11801,
    SessionNotRunning: -11803,
    DeviceAlreadyUsedByAnotherSession: -11804,
    NoDataCaptured: -11805,
    SessionConfigurationChanged: -11806,
    DiskFull: -11807,
    DeviceWasDisconnected: -11808,
    MediaChanged: -11809,
    MaximumDurationReached: -11810,
    MaximumFileSizeReached: -11811,
    MediaDiscontinuity: -11812,
    MaximumNumberOfSamplesForFileFormatReached: -11813,
    DeviceNotConnected: -11814,
    DeviceInUseByAnotherApplication: -11815,
    DeviceLockedForConfigurationByAnotherProcess: -11817,
    ExportFailed: -11820,
    DecodeFailed: -11821,
    InvalidSourceMedia: -11822,
    FileAlreadyExists: -11823,
    CompositionTrackSegmentsNotContiguous: -11824,
    InvalidCompositionTrackSegmentDuration: -11825,
    InvalidCompositionTrackSegmentSourceStartTime: -11826,
    InvalidCompositionTrackSegmentSourceDuration: -11827,
    FileFormatNotRecognized: -11828,
    FileFailedToParse: -11829,
    MaximumStillImageCaptureRequestsExceeded: -11830,
    ContentIsProtected: -11831,
    NoImageAtTime: -11832,
    DecoderNotFound: -11833,
    EncoderNotFound: -11834,
    ContentIsNotAuthorized: -11835,
    ApplicationIsNotAuthorized: -11836,
    OperationNotSupportedForAsset: -11838,
    DecoderTemporarilyUnavailable: -11839,
    EncoderTemporarilyUnavailable: -11840,
    InvalidVideoComposition: -11841,
    ReferenceForbiddenByReferencePolicy: -11842,
    InvalidOutputURLPathExtension: -11843,
    ScreenCaptureFailed: -11844,
    DisplayWasDisabled: -11845,
    TorchLevelUnavailable: -11846,
    IncompatibleAsset: -11848,
    FailedToLoadMediaData: -11849,
    ServerIncorrectlyConfigured: -11850,
    ApplicationIsNotAuthorizedToUseDevice: -11852,
    FailedToParse: -11853,
    FileTypeDoesNotSupportSampleReferences: -11854,
    UndecodableMediaData: -11855,
    AirPlayControllerRequiresInternet: -11856,
    AirPlayReceiverRequiresInternet: -11857,
    VideoCompositorFailed: -11858,
    CreateContentKeyRequestFailed: -11860,
    UnsupportedOutputSettings: -11861,
    OperationNotAllowed: -11862,
    ContentIsUnavailable: -11863,
    FormatUnsupported: -11864,
    MalformedDepth: -11865,
    ContentNotUpdated: -11866,
    NoLongerPlayable: -11867,
    NoCompatibleAlternatesForExternalDisplay: -11868,
    NoSourceTrack: -11869,
    ExternalPlaybackNotSupportedForAsset: -11870,
    OperationNotSupportedForPreset: -11871,
    SessionHardwareCostOverage: -11872,
    UnsupportedDeviceActiveFormat: -11873,
    '-11800': 'Unknown',
    '-11801': 'OutOfMemory',
    '-11803': 'SessionNotRunning',
    '-11804': 'DeviceAlreadyUsedByAnotherSession',
    '-11805': 'NoDataCaptured',
    '-11806': 'SessionConfigurationChanged',
    '-11807': 'DiskFull',
    '-11808': 'DeviceWasDisconnected',
    '-11809': 'MediaChanged',
    '-11810': 'MaximumDurationReached',
    '-11811': 'MaximumFileSizeReached',
    '-11812': 'MediaDiscontinuity',
    '-11813': 'MaximumNumberOfSamplesForFileFormatReached',
    '-11814': 'DeviceNotConnected',
    '-11815': 'DeviceInUseByAnotherApplication',
    '-11817': 'DeviceLockedForConfigurationByAnotherProcess',
    '-11820': 'ExportFailed',
    '-11821': 'DecodeFailed',
    '-11822': 'InvalidSourceMedia',
    '-11823': 'FileAlreadyExists',
    '-11824': 'CompositionTrackSegmentsNotContiguous',
    '-11825': 'InvalidCompositionTrackSegmentDuration',
    '-11826': 'InvalidCompositionTrackSegmentSourceStartTime',
    '-11827': 'InvalidCompositionTrackSegmentSourceDuration',
    '-11828': 'FileFormatNotRecognized',
    '-11829': 'FileFailedToParse',
    '-11830': 'MaximumStillImageCaptureRequestsExceeded',
    '-11831': 'ContentIsProtected',
    '-11832': 'NoImageAtTime',
    '-11833': 'DecoderNotFound',
    '-11834': 'EncoderNotFound',
    '-11835': 'ContentIsNotAuthorized',
    '-11836': 'ApplicationIsNotAuthorized',
    '-11838': 'OperationNotSupportedForAsset',
    '-11839': 'DecoderTemporarilyUnavailable',
    '-11840': 'EncoderTemporarilyUnavailable',
    '-11841': 'InvalidVideoComposition',
    '-11842': 'ReferenceForbiddenByReferencePolicy',
    '-11843': 'InvalidOutputURLPathExtension',
    '-11844': 'ScreenCaptureFailed',
    '-11845': 'DisplayWasDisabled',
    '-11846': 'TorchLevelUnavailable',
    '-11848': 'IncompatibleAsset',
    '-11849': 'FailedToLoadMediaData',
    '-11850': 'ServerIncorrectlyConfigured',
    '-11852': 'ApplicationIsNotAuthorizedToUseDevice',
    '-11853': 'FailedToParse',
    '-11854': 'FileTypeDoesNotSupportSampleReferences',
    '-11855': 'UndecodableMediaData',
    '-11856': 'AirPlayControllerRequiresInternet',
    '-11857': 'AirPlayReceiverRequiresInternet',
    '-11858': 'VideoCompositorFailed',
    '-11860': 'CreateContentKeyRequestFailed',
    '-11861': 'UnsupportedOutputSettings',
    '-11862': 'OperationNotAllowed',
    '-11863': 'ContentIsUnavailable',
    '-11864': 'FormatUnsupported',
    '-11865': 'MalformedDepth',
    '-11866': 'ContentNotUpdated',
    '-11867': 'NoLongerPlayable',
    '-11868': 'NoCompatibleAlternatesForExternalDisplay',
    '-11869': 'NoSourceTrack',
    '-11870': 'ExternalPlaybackNotSupportedForAsset',
    '-11871': 'OperationNotSupportedForPreset',
    '-11872': 'SessionHardwareCostOverage',
    '-11873': 'UnsupportedDeviceActiveFormat'
}

globalThis.AVKeyValueStatus = globalThis.AVKeyValueStatus || {};

globalThis.AVKeyValueStatus = {
    Unknown: 0,
    Loading: 1,
    Loaded: 2,
    Failed: 3,
    Cancelled: 4,
    '0': 'Unknown',
    '1': 'Loading',
    '2': 'Loaded',
    '3': 'Failed',
    '4': 'Cancelled'
}

globalThis.AVMovieWritingOptions = globalThis.AVMovieWritingOptions || {};

globalThis.AVMovieWritingOptions = {
    AddMovieHeaderToDestination: 0,
    TruncateDestinationToMovieHeaderOnly: 1,
    '0': 'AddMovieHeaderToDestination',
    '1': 'TruncateDestinationToMovieHeaderOnly'
}

globalThis.AVMusicSequenceLoadOptions = globalThis.AVMusicSequenceLoadOptions || {};

globalThis.AVMusicSequenceLoadOptions = {
    SMF_PreserveTracks: 0,
    SMF_ChannelsToTracks: 1,
    '0': 'SMF_PreserveTracks',
    '1': 'SMF_ChannelsToTracks'
}

globalThis.AVMusicTrackLoopCount = globalThis.AVMusicTrackLoopCount || {};

globalThis.AVMusicTrackLoopCount = {
    Forever: -1,
    '-1': 'Forever'
}

globalThis.AVPlayer = globalThis.AVPlayer || {};

globalThis.AVPlayer.ActionAtItemEnd = {
    Advance: 0,
    Pause: 1,
    None: 2,
    '0': 'Advance',
    '1': 'Pause',
    '2': 'None'
}

globalThis.AVPlayer.HDRMode = {
    HLG: 1,
    HDR10: 2,
    DolbyVision: 4,
    '1': 'HLG',
    '2': 'HDR10',
    '4': 'DolbyVision'
}

globalThis.AVPlayerItem = globalThis.AVPlayerItem || {};

globalThis.AVPlayerItem.Status = {
    Unknown: 0,
    ReadyToPlay: 1,
    Failed: 2,
    '0': 'Unknown',
    '1': 'ReadyToPlay',
    '2': 'Failed'
}

globalThis.AVPlayerLooper = globalThis.AVPlayerLooper || {};

globalThis.AVPlayerLooper.Status = {
    Unknown: 0,
    Ready: 1,
    Failed: 2,
    Cancelled: 3,
    '0': 'Unknown',
    '1': 'Ready',
    '2': 'Failed',
    '3': 'Cancelled'
}

globalThis.AVPlayer.Status = {
    Unknown: 0,
    ReadyToPlay: 1,
    Failed: 2,
    '0': 'Unknown',
    '1': 'ReadyToPlay',
    '2': 'Failed'
}

globalThis.AVPlayer.TimeControlStatus = {
    Paused: 0,
    WaitingToPlayAtSpecifiedRate: 1,
    Playing: 2,
    '0': 'Paused',
    '1': 'WaitingToPlayAtSpecifiedRate',
    '2': 'Playing'
}

globalThis.AVQueuedSampleBufferRenderingStatus = globalThis.AVQueuedSampleBufferRenderingStatus || {};

globalThis.AVQueuedSampleBufferRenderingStatus = {
    Unknown: 0,
    Rendering: 1,
    Failed: 2,
    '0': 'Unknown',
    '1': 'Rendering',
    '2': 'Failed'
}

globalThis.AVSampleBufferRequest = globalThis.AVSampleBufferRequest || {};

globalThis.AVSampleBufferRequest.Direction = {
    Forward: 1,
    None: 0,
    Reverse: -1,
    '1': 'Forward',
    '0': 'None',
    '-1': 'Reverse'
}

globalThis.AVSampleBufferRequest.Mode = {
    Immediate: 0,
    Scheduled: 1,
    Opportunistic: 2,
    '0': 'Immediate',
    '1': 'Scheduled',
    '2': 'Opportunistic'
}

globalThis.AVSpeechBoundary = globalThis.AVSpeechBoundary || {};

globalThis.AVSpeechBoundary = {
    Immediate: 0,
    Word: 1,
    '0': 'Immediate',
    '1': 'Word'
}

globalThis.AVSpeechSynthesisVoiceGender = globalThis.AVSpeechSynthesisVoiceGender || {};

globalThis.AVSpeechSynthesisVoiceGender = {
    Unspecified: 0,
    Male: 1,
    Female: 2,
    '0': 'Unspecified',
    '1': 'Male',
    '2': 'Female'
}

globalThis.AVSpeechSynthesisVoiceQuality = globalThis.AVSpeechSynthesisVoiceQuality || {};

globalThis.AVSpeechSynthesisVoiceQuality = {
    Default: 1,
    Enhanced: 2,
    '1': 'Default',
    '2': 'Enhanced'
}

globalThis.AVVideoFieldMode = globalThis.AVVideoFieldMode || {};

globalThis.AVVideoFieldMode = {
    Both: 0,
    TopOnly: 1,
    BottomOnly: 2,
    Deinterlace: 3,
    '0': 'Both',
    '1': 'TopOnly',
    '2': 'BottomOnly',
    '3': 'Deinterlace'
}

declare class AVAsset extends NSObject implements AVAsynchronousKeyValueLoading, NSCopying {
  readonly allMediaSelections: NSArray<AVMediaSelection>;
  readonly availableChapterLocales: NSArray<Locale>;
  readonly availableMediaCharacteristicsWithMediaSelectionOptions: NSArray<string>;
  readonly availableMetadataFormats: NSArray<string>;
  readonly canContainFragments: boolean;
  readonly commonMetadata: NSArray<AVMetadataItem>;
  readonly isCompatibleWithAirPlayVideo: boolean;
  readonly isComposable: boolean;
  readonly containsFragments: boolean;
  readonly creationDate: AVMetadataItem;
  readonly duration: CMTime;
  readonly isExportable: boolean;
  readonly hasProtectedContent: boolean;
  readonly lyrics: string;
  readonly metadata: NSArray<AVMetadataItem>;
  readonly minimumTimeOffsetFromLive: CMTime;
  readonly overallDurationHint: CMTime;
  readonly isPlayable: boolean;
  readonly preferredMediaSelection: AVMediaSelection;
  readonly preferredRate: number;
  readonly preferredTransform: CGAffineTransform;
  readonly preferredVolume: number;
  readonly providesPreciseDurationAndTiming: boolean;
  readonly isReadable: boolean;
  readonly referenceRestrictions: AVAssetReferenceRestrictions;
  readonly trackGroups: NSArray<AVAssetTrackGroup>;
  readonly tracks: NSArray<AVAssetTrack>;
  cancelLoading(): void;
  chapterMetadataGroupsBestMatchingPreferredLanguages(bestMatchingPreferredLanguages: NSArray<string>): NSArray<AVTimedMetadataGroup>;
  chapterMetadataGroupsWithTitleLocaleContainingItemsWithCommonKeys(withTitleLocale: Locale, containingItemsWithCommonKeys?: NSArray<string>): NSArray<AVTimedMetadataGroup>;
  loadValuesAsynchronouslyForKeysCompletionHandler(forKeys: NSArray<string>, completionHandler?: () => void): void;
  mediaSelectionGroupForMediaCharacteristic(forMediaCharacteristic: string): AVMediaSelectionGroup;
  metadataForFormat(forFormat: string): NSArray<AVMetadataItem>;
  statusOfValueForKeyError(forKey: string): AVKeyValueStatus;
  trackWithTrackID(withTrackID: number): AVAssetTrack;
  tracksWithMediaCharacteristic(withMediaCharacteristic: string): NSArray<AVAssetTrack>;
  tracksWithMediaType(withMediaType: string): NSArray<AVAssetTrack>;
  unusedTrackID(): number;
}

declare class AVAssetCache extends NSObject {
  readonly isPlayableOffline: boolean;
  mediaSelectionOptionsInMediaSelectionGroup(in_: AVMediaSelectionGroup): NSArray<AVMediaSelectionOption>;
}

declare var AVAssetChapterMetadataGroupsDidChangeNotification: string;

declare var AVAssetContainsFragmentsDidChangeNotification: string;

declare var AVAssetDurationDidChangeNotification: string;

declare var AVAssetExportPreset1280x720: string;

declare var AVAssetExportPreset1920x1080: string;

declare var AVAssetExportPreset3840x2160: string;

declare var AVAssetExportPreset640x480: string;

declare var AVAssetExportPreset960x540: string;

declare var AVAssetExportPresetAppleM4A: string;

declare var AVAssetExportPresetAppleM4V1080pHD: string;

declare var AVAssetExportPresetAppleM4V480pSD: string;

declare var AVAssetExportPresetAppleM4V720pHD: string;

declare var AVAssetExportPresetAppleM4VAppleTV: string;

declare var AVAssetExportPresetAppleM4VCellular: string;

declare var AVAssetExportPresetAppleM4VWiFi: string;

declare var AVAssetExportPresetAppleM4ViPod: string;

declare var AVAssetExportPresetAppleProRes422LPCM: string;

declare var AVAssetExportPresetAppleProRes4444LPCM: string;

declare var AVAssetExportPresetHEVC1920x1080: string;

declare var AVAssetExportPresetHEVC1920x1080WithAlpha: string;

declare var AVAssetExportPresetHEVC3840x2160: string;

declare var AVAssetExportPresetHEVC3840x2160WithAlpha: string;

declare var AVAssetExportPresetHEVCHighestQuality: string;

declare var AVAssetExportPresetHEVCHighestQualityWithAlpha: string;

declare var AVAssetExportPresetHighestQuality: string;

declare var AVAssetExportPresetLowQuality: string;

declare var AVAssetExportPresetMediumQuality: string;

declare var AVAssetExportPresetPassthrough: string;

declare class AVAssetExportSession extends NSObject {
  static allExportPresets(): NSArray<string>;
  static determineCompatibilityOfExportPresetWithAssetOutputFileTypeCompletionHandler(ofExportPreset: string, with_: AVAsset, outputFileType?: string, completionHandler: (p1: boolean) => void): void;
  static exportPresetsCompatibleWithAsset(compatibleWith: AVAsset): NSArray<string>;
  readonly asset: AVAsset;
  audioMix: AVAudioMix;
  setAudioMix(_: AVAudioMix)
  audioTimePitchAlgorithm: string;
  setAudioTimePitchAlgorithm(_: string)
  canPerformMultiplePassesOverSourceMediaData: boolean;
  setCanPerformMultiplePassesOverSourceMediaData(_: boolean)
  readonly customVideoCompositor: AVVideoCompositing;
  directoryForTemporaryFiles: NSURL;
  setDirectoryForTemporaryFiles(_: NSURL)
  readonly error: Error;
  fileLengthLimit: number;
  setFileLengthLimit(_: number)
  metadata: NSArray<AVMetadataItem>;
  setMetadata(_: NSArray<AVMetadataItem>)
  metadataItemFilter: AVMetadataItemFilter;
  setMetadataItemFilter(_: AVMetadataItemFilter)
  outputFileType: string;
  setOutputFileType(_: string)
  outputURL: NSURL;
  setOutputURL(_: NSURL)
  readonly presetName: string;
  readonly progress: number;
  shouldOptimizeForNetworkUse: boolean;
  setShouldOptimizeForNetworkUse(_: boolean)
  readonly status: AVAssetExportSession.Status;
  readonly supportedFileTypes: NSArray<string>;
  timeRange: CMTimeRange;
  setTimeRange(_: CMTimeRange)
  videoComposition: AVVideoComposition;
  setVideoComposition(_: AVVideoComposition)
  cancelExport(): void;
  determineCompatibleFileTypesWithCompletionHandler(completionHandler: (p1: NSArray<string>) => void): void;
  estimateMaximumDurationWithCompletionHandler(completionHandler?: (p1: CMTime, p2: Error) => void): void;
  estimateOutputFileLengthWithCompletionHandler(completionHandler?: (p1: number, p2: Error) => void): void;
  exportAsynchronouslyWithCompletionHandler(completionHandler: () => void): void;
  static createWithAssetPresetName(asset: AVAsset, presetName: string): this;
}

declare class AVAssetImageGenerator extends NSObject {
  apertureMode: string;
  setApertureMode(_: string)
  appliesPreferredTrackTransform: boolean;
  setAppliesPreferredTrackTransform(_: boolean)
  readonly asset: AVAsset;
  readonly customVideoCompositor: AVVideoCompositing;
  maximumSize: NSSize;
  setMaximumSize(_: NSSize)
  requestedTimeToleranceAfter: CMTime;
  setRequestedTimeToleranceAfter(_: CMTime)
  requestedTimeToleranceBefore: CMTime;
  setRequestedTimeToleranceBefore(_: CMTime)
  videoComposition: AVVideoComposition;
  setVideoComposition(_: AVVideoComposition)
  cancelAllCGImageGeneration(): void;
  copyCGImageAtTimeActualTimeError(actualTime: CMTime, error?: CMTime): any;
  generateCGImagesAsynchronouslyForTimesCompletionHandler(forTimes: NSArray<NSValue>, completionHandler: (p1: CMTime, p2: any, p3: CMTime, p4: AVAssetImageGenerator.Result, p5: Error) => void): void;
  static createWithAsset(asset: AVAsset): this;
}

declare var AVAssetImageGeneratorApertureModeCleanAperture: string;

declare var AVAssetImageGeneratorApertureModeEncodedPixels: string;

declare var AVAssetImageGeneratorApertureModeProductionAperture: string;

declare var AVAssetMediaSelectionGroupsDidChangeNotification: string;

declare class AVAssetReader extends NSObject {
  static assetReaderWithAssetError(error: AVAsset): AVAssetReader;
  readonly asset: AVAsset;
  readonly error: Error;
  readonly outputs: NSArray<AVAssetReaderOutput>;
  readonly status: AVAssetReader.Status;
  timeRange: CMTimeRange;
  setTimeRange(_: CMTimeRange)
  addOutput(_: AVAssetReaderOutput): void;
  canAddOutput(_: AVAssetReaderOutput): boolean;
  cancelReading(): void;
  static createWithAsset(asset: AVAsset): this;
  startReading(): boolean;
}

declare class AVAssetReaderAudioMixOutput extends AVAssetReaderOutput {
  static assetReaderAudioMixOutputWithAudioTracksAudioSettings(audioTracks: NSArray<AVAssetTrack>, audioSettings?: NSDictionary<string, any>): AVAssetReaderAudioMixOutput;
  audioMix: AVAudioMix;
  setAudioMix(_: AVAudioMix)
  readonly audioSettings: NSDictionary<string, any>;
  audioTimePitchAlgorithm: string;
  setAudioTimePitchAlgorithm(_: string)
  readonly audioTracks: NSArray<AVAssetTrack>;
  static createWithAudioTracksAudioSettings(audioTracks: NSArray<AVAssetTrack>, audioSettings?: NSDictionary<string, any>): this;
}

declare class AVAssetReaderOutput extends NSObject {
  alwaysCopiesSampleData: boolean;
  setAlwaysCopiesSampleData(_: boolean)
  readonly mediaType: string;
  supportsRandomAccess: boolean;
  setSupportsRandomAccess(_: boolean)
  copyNextSampleBuffer(): any;
  markConfigurationAsFinal(): void;
  resetForReadingTimeRanges(forReadingTimeRanges: NSArray<NSValue>): void;
}

declare class AVAssetReaderOutputMetadataAdaptor extends NSObject {
  static assetReaderOutputMetadataAdaptorWithAssetReaderTrackOutput(assetReaderTrackOutput: AVAssetReaderTrackOutput): AVAssetReaderOutputMetadataAdaptor;
  readonly assetReaderTrackOutput: AVAssetReaderTrackOutput;
  static createWithAssetReaderTrackOutput(assetReaderTrackOutput: AVAssetReaderTrackOutput): this;
  nextTimedMetadataGroup(): AVTimedMetadataGroup;
}

declare class AVAssetReaderSampleReferenceOutput extends AVAssetReaderOutput {
  static assetReaderSampleReferenceOutputWithTrack(track: AVAssetTrack): AVAssetReaderSampleReferenceOutput;
  readonly track: AVAssetTrack;
  static createWithTrack(track: AVAssetTrack): this;
}

declare class AVAssetReaderTrackOutput extends AVAssetReaderOutput {
  static assetReaderTrackOutputWithTrackOutputSettings(track: AVAssetTrack, outputSettings?: NSDictionary<string, any>): AVAssetReaderTrackOutput;
  audioTimePitchAlgorithm: string;
  setAudioTimePitchAlgorithm(_: string)
  readonly outputSettings: NSDictionary<string, any>;
  readonly track: AVAssetTrack;
  static createWithTrackOutputSettings(track: AVAssetTrack, outputSettings?: NSDictionary<string, any>): this;
}

declare class AVAssetReaderVideoCompositionOutput extends AVAssetReaderOutput {
  static assetReaderVideoCompositionOutputWithVideoTracksVideoSettings(videoTracks: NSArray<AVAssetTrack>, videoSettings?: NSDictionary<string, any>): AVAssetReaderVideoCompositionOutput;
  readonly customVideoCompositor: AVVideoCompositing;
  videoComposition: AVVideoComposition;
  setVideoComposition(_: AVVideoComposition)
  readonly videoSettings: NSDictionary<string, any>;
  readonly videoTracks: NSArray<AVAssetTrack>;
  static createWithVideoTracksVideoSettings(videoTracks: NSArray<AVAssetTrack>, videoSettings?: NSDictionary<string, any>): this;
}

declare class AVAssetResourceLoader extends NSObject {
  readonly delegate: AVAssetResourceLoaderDelegate;
  readonly delegateQueue: NSObject;
  preloadsEligibleContentKeys: boolean;
  setPreloadsEligibleContentKeys(_: boolean)
  setDelegateQueue(_?: AVAssetResourceLoaderDelegate, queue?: NSObject): void;
}

interface AVAssetResourceLoaderDelegate extends NSObject {
  resourceLoaderDidCancelLoadingRequest?(_: AVAssetResourceLoader, didCancel: AVAssetResourceLoadingRequest): void;
  resourceLoaderShouldWaitForResponseToAuthenticationChallenge?(_: AVAssetResourceLoader, shouldWaitForResponseTo: URLAuthenticationChallenge): boolean;
  resourceLoaderDidCancelAuthenticationChallenge?(_: AVAssetResourceLoader, didCancel: URLAuthenticationChallenge): void;
  resourceLoaderShouldWaitForLoadingOfRequestedResource?(_: AVAssetResourceLoader, shouldWaitForLoadingOfRequestedResource: AVAssetResourceLoadingRequest): boolean;
  resourceLoaderShouldWaitForRenewalOfRequestedResource?(_: AVAssetResourceLoader, shouldWaitForRenewalOfRequestedResource: AVAssetResourceRenewalRequest): boolean;
}

declare var AVAssetResourceLoaderDelegate: {
  prototype: AVAssetResourceLoaderDelegate;
};

declare class AVAssetResourceLoadingContentInformationRequest extends NSObject {
  readonly allowedContentTypes: NSArray<string>;
  isByteRangeAccessSupported: boolean;
  setByteRangeAccessSupported(_: boolean)
  contentLength: number;
  setContentLength(_: number)
  contentType: string;
  setContentType(_: string)
  renewalDate: Date;
  setRenewalDate(_: Date)
}

declare class AVAssetResourceLoadingDataRequest extends NSObject {
  readonly currentOffset: number;
  readonly requestedLength: number;
  readonly requestedOffset: number;
  readonly requestsAllDataToEndOfResource: boolean;
  respondWithData(with_: Data): void;
}

declare class AVAssetResourceLoadingRequest extends NSObject {
  readonly isCancelled: boolean;
  readonly contentInformationRequest: AVAssetResourceLoadingContentInformationRequest;
  readonly dataRequest: AVAssetResourceLoadingDataRequest;
  readonly isFinished: boolean;
  redirect: NSURLRequest;
  setRedirect(_: NSURLRequest)
  readonly request: NSURLRequest;
  readonly requestor: AVAssetResourceLoadingRequestor;
  response: URLResponse;
  setResponse(_: URLResponse)
  finishLoading(): void;
  finishLoadingWithError(with_?: Error): void;
  persistentContentKeyFromKeyVendorResponseOptionsError(options: Data, error?: NSDictionary<string, any>): Data;
  streamingContentKeyRequestDataForAppContentIdentifierOptionsError(contentIdentifier: Data, options: Data, error?: NSDictionary<string, any>): Data;
}

declare var AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey: string;

declare class AVAssetResourceLoadingRequestor extends NSObject {
  readonly providesExpiredSessionReports: boolean;
}

declare class AVAssetResourceRenewalRequest extends AVAssetResourceLoadingRequest {
}

declare class AVAssetTrack extends NSObject implements AVAsynchronousKeyValueLoading, NSCopying {
  readonly asset: AVAsset;
  readonly availableMetadataFormats: NSArray<string>;
  readonly availableTrackAssociationTypes: NSArray<string>;
  readonly canProvideSampleCursors: boolean;
  readonly commonMetadata: NSArray<AVMetadataItem>;
  readonly isDecodable: boolean;
  readonly isEnabled: boolean;
  readonly estimatedDataRate: number;
  readonly extendedLanguageTag: string;
  readonly formatDescriptions: NSArray<any>;
  readonly hasAudioSampleDependencies: boolean;
  readonly languageCode: string;
  readonly mediaType: string;
  readonly metadata: NSArray<AVMetadataItem>;
  readonly minFrameDuration: CMTime;
  readonly naturalSize: NSSize;
  readonly naturalTimeScale: number;
  readonly nominalFrameRate: number;
  readonly isPlayable: boolean;
  readonly preferredTransform: CGAffineTransform;
  readonly preferredVolume: number;
  readonly requiresFrameReordering: boolean;
  readonly segments: NSArray<AVAssetTrackSegment>;
  readonly isSelfContained: boolean;
  readonly timeRange: CMTimeRange;
  readonly totalSampleDataLength: number;
  readonly trackID: number;
  associatedTracksOfType(ofType: string): NSArray<AVAssetTrack>;
  hasMediaCharacteristic(_: string): boolean;
  loadValuesAsynchronouslyForKeysCompletionHandler(forKeys: NSArray<string>, completionHandler?: () => void): void;
  makeSampleCursorAtFirstSampleInDecodeOrder(): AVSampleCursor;
  makeSampleCursorAtLastSampleInDecodeOrder(): AVSampleCursor;
  makeSampleCursorWithPresentationTimeStamp(presentationTimeStamp: CMTime): AVSampleCursor;
  metadataForFormat(forFormat: string): NSArray<AVMetadataItem>;
  samplePresentationTimeForTrackTime(forTrackTime: CMTime): CMTime;
  segmentForTrackTime(forTrackTime: CMTime): AVAssetTrackSegment;
  statusOfValueForKeyError(forKey: string): AVKeyValueStatus;
}

declare class AVAssetTrackGroup extends NSObject implements NSCopying {
  readonly trackIDs: NSArray<number>;
}

declare class AVAssetTrackSegment extends NSObject {
  readonly isEmpty: boolean;
  readonly timeMapping: CMTimeMapping;
}

declare var AVAssetTrackSegmentsDidChangeNotification: string;

declare var AVAssetTrackTimeRangeDidChangeNotification: string;

declare var AVAssetTrackTrackAssociationsDidChangeNotification: string;

declare var AVAssetWasDefragmentedNotification: string;

declare class AVAssetWriter extends NSObject {
  static assetWriterWithURLFileTypeError(fileType: NSURL, error: string): AVAssetWriter;
  readonly availableMediaTypes: NSArray<string>;
  directoryForTemporaryFiles: NSURL;
  setDirectoryForTemporaryFiles(_: NSURL)
  readonly error: Error;
  readonly inputGroups: NSArray<AVAssetWriterInputGroup>;
  readonly inputs: NSArray<AVAssetWriterInput>;
  metadata: NSArray<AVMetadataItem>;
  setMetadata(_: NSArray<AVMetadataItem>)
  movieFragmentInterval: CMTime;
  setMovieFragmentInterval(_: CMTime)
  movieTimeScale: number;
  setMovieTimeScale(_: number)
  readonly outputFileType: string;
  readonly outputURL: NSURL;
  overallDurationHint: CMTime;
  setOverallDurationHint(_: CMTime)
  shouldOptimizeForNetworkUse: boolean;
  setShouldOptimizeForNetworkUse(_: boolean)
  readonly status: AVAssetWriter.Status;
  addInput(_: AVAssetWriterInput): void;
  addInputGroup(_: AVAssetWriterInputGroup): void;
  canAddInput(_: AVAssetWriterInput): boolean;
  canAddInputGroup(_: AVAssetWriterInputGroup): boolean;
  canApplyOutputSettingsForMediaType(outputSettings?: NSDictionary<string, any>, forMediaType: string): boolean;
  cancelWriting(): void;
  endSessionAtSourceTime(atSourceTime: CMTime): void;
  finishWritingWithCompletionHandler(completionHandler: () => void): void;
  static createWithUrlFileType(URL: NSURL, fileType: string): this;
  startSessionAtSourceTime(atSourceTime: CMTime): void;
  startWriting(): boolean;
}

declare class AVAssetWriterInput extends NSObject {
  readonly canPerformMultiplePasses: boolean;
  readonly currentPassDescription: AVAssetWriterInputPassDescription;
  expectsMediaDataInRealTime: boolean;
  setExpectsMediaDataInRealTime(_: boolean)
  extendedLanguageTag: string;
  setExtendedLanguageTag(_: string)
  languageCode: string;
  setLanguageCode(_: string)
  marksOutputTrackAsEnabled: boolean;
  setMarksOutputTrackAsEnabled(_: boolean)
  mediaDataLocation: string;
  setMediaDataLocation(_: string)
  mediaTimeScale: number;
  setMediaTimeScale(_: number)
  readonly mediaType: string;
  metadata: NSArray<AVMetadataItem>;
  setMetadata(_: NSArray<AVMetadataItem>)
  naturalSize: NSSize;
  setNaturalSize(_: NSSize)
  readonly outputSettings: NSDictionary<string, any>;
  performsMultiPassEncodingIfSupported: boolean;
  setPerformsMultiPassEncodingIfSupported(_: boolean)
  preferredMediaChunkAlignment: number;
  setPreferredMediaChunkAlignment(_: number)
  preferredMediaChunkDuration: CMTime;
  setPreferredMediaChunkDuration(_: CMTime)
  preferredVolume: number;
  setPreferredVolume(_: number)
  readonly isReadyForMoreMediaData: boolean;
  sampleReferenceBaseURL: NSURL;
  setSampleReferenceBaseURL(_: NSURL)
  readonly sourceFormatHint: any;
  transform: CGAffineTransform;
  setTransform(_: CGAffineTransform)
  addTrackAssociationWithTrackOfInputType(withTrackOf: AVAssetWriterInput, type: string): void;
  appendSampleBuffer(_: any): boolean;
  canAddTrackAssociationWithTrackOfInputType(withTrackOf: AVAssetWriterInput, type: string): boolean;
  static createWithMediaTypeOutputSettings(mediaType: string, outputSettings?: NSDictionary<string, any>): this;
  static createWithMediaTypeOutputSettingsSourceFormatHint(mediaType: string, outputSettings?: NSDictionary<string, any>, sourceFormatHint?: any): this;
  markAsFinished(): void;
  markCurrentPassAsFinished(): void;
  requestMediaDataWhenReadyOnQueueUsingBlock(on: NSObject, using: () => void): void;
  respondToEachPassDescriptionOnQueueUsingBlock(on: NSObject, using: () => void): void;
}

declare class AVAssetWriterInputGroup extends AVMediaSelectionGroup {
  static assetWriterInputGroupWithInputsDefaultInput(inputs: NSArray<AVAssetWriterInput>, defaultInput?: AVAssetWriterInput): AVAssetWriterInputGroup;
  readonly defaultInput: AVAssetWriterInput;
  readonly inputs: NSArray<AVAssetWriterInput>;
  static createWithInputsDefaultInput(inputs: NSArray<AVAssetWriterInput>, defaultInput?: AVAssetWriterInput): this;
}

declare var AVAssetWriterInputMediaDataLocationBeforeMainMediaDataNotInterleaved: string;

declare var AVAssetWriterInputMediaDataLocationInterleavedWithMainMediaData: string;

declare class AVAssetWriterInputMetadataAdaptor extends NSObject {
  static assetWriterInputMetadataAdaptorWithAssetWriterInput(assetWriterInput: AVAssetWriterInput): AVAssetWriterInputMetadataAdaptor;
  readonly assetWriterInput: AVAssetWriterInput;
  appendTimedMetadataGroup(_: AVTimedMetadataGroup): boolean;
  static createWithAssetWriterInput(assetWriterInput: AVAssetWriterInput): this;
}

declare class AVAssetWriterInputPassDescription extends NSObject {
  readonly sourceTimeRanges: NSArray<NSValue>;
}

declare class AVAssetWriterInputPixelBufferAdaptor extends NSObject {
  static assetWriterInputPixelBufferAdaptorWithAssetWriterInputSourcePixelBufferAttributes(assetWriterInput: AVAssetWriterInput, sourcePixelBufferAttributes?: NSDictionary<string, any>): AVAssetWriterInputPixelBufferAdaptor;
  readonly assetWriterInput: AVAssetWriterInput;
  readonly pixelBufferPool: any;
  readonly sourcePixelBufferAttributes: NSDictionary<string, any>;
  appendPixelBufferWithPresentationTime(_: any, withPresentationTime: CMTime): boolean;
  static createWithAssetWriterInputSourcePixelBufferAttributes(assetWriterInput: AVAssetWriterInput, sourcePixelBufferAttributes?: NSDictionary<string, any>): this;
}

declare class AVAsynchronousCIImageFilteringRequest extends NSObject implements NSCopying {
  readonly compositionTime: CMTime;
  readonly renderSize: NSSize;
  readonly sourceImage: CIImage;
  finishWithError(with_: Error): void;
  finishWithImageContext(with_: CIImage, context?: CIContext): void;
}

interface AVAsynchronousKeyValueLoading {
  loadValuesAsynchronouslyForKeysCompletionHandler(forKeys: NSArray<string>, completionHandler?: () => void): void;
  statusOfValueForKeyError(forKey: string): AVKeyValueStatus;
}

declare var AVAsynchronousKeyValueLoading: {
  prototype: AVAsynchronousKeyValueLoading;
};

declare class AVAsynchronousVideoCompositionRequest extends NSObject implements NSCopying {
  readonly compositionTime: CMTime;
  readonly renderContext: AVVideoCompositionRenderContext;
  readonly sourceTrackIDs: NSArray<number>;
  readonly videoCompositionInstruction: AVVideoCompositionInstructionProtocol;
  finishCancelledRequest(): void;
  finishWithComposedVideoFrame(withComposedVideoFrame: any): void;
  finishWithError(with_: Error): void;
  sourceFrameByTrackID(byTrackID: number): any;
}

interface AVAudio3DAngularOrientation {
  yaw: number;
  pitch: number;
  roll: number;
}

declare var AVAudio3DAngularOrientation: AVAudio3DAngularOrientation;

interface AVAudio3DMixing extends NSObject {
  obstruction: number;
  setObstruction(_: number)
  occlusion: number;
  setOcclusion(_: number)
  pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode;
  setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode)
  position: AVAudio3DPoint;
  setPosition(_: AVAudio3DPoint)
  rate: number;
  setRate(_: number)
  renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm;
  setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm)
  reverbBlend: number;
  setReverbBlend(_: number)
  sourceMode: AVAudio3DMixingSourceMode;
  setSourceMode(_: AVAudio3DMixingSourceMode)
}

declare var AVAudio3DMixing: {
  prototype: AVAudio3DMixing;
};

interface AVAudio3DPoint {
  x: number;
  y: number;
  z: number;
}

declare var AVAudio3DPoint: AVAudio3DPoint;

interface AVAudio3DVectorOrientation {
  forward: AVAudio3DPoint;
  up: AVAudio3DPoint;
}

declare var AVAudio3DVectorOrientation: AVAudio3DVectorOrientation;

declare var AVAudioBitRateStrategy_Constant: string;

declare var AVAudioBitRateStrategy_LongTermAverage: string;

declare var AVAudioBitRateStrategy_Variable: string;

declare var AVAudioBitRateStrategy_VariableConstrained: string;

declare class AVAudioBuffer extends NSObject implements NSCopying, NSMutableCopying {
  readonly audioBufferList: AudioBufferList;
  readonly format: AVAudioFormat;
  readonly mutableAudioBufferList: AudioBufferList;
}

declare class AVAudioChannelLayout extends NSObject implements NSSecureCoding {
  readonly channelCount: number;
  readonly layout: AudioChannelLayout;
  readonly layoutTag: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithLayout(layout: AudioChannelLayout): this;
  static createWithLayoutTag(layoutTag: number): this;
}

declare class AVAudioCompressedBuffer extends AVAudioBuffer {
  readonly byteCapacity: number;
  byteLength: number;
  setByteLength(_: number)
  readonly data: any;
  readonly maximumPacketSize: number;
  readonly packetCapacity: number;
  packetCount: number;
  setPacketCount(_: number)
  readonly packetDescriptions: AudioStreamPacketDescription;
  static createFormatPacketCapacity(format: AVAudioFormat, packetCapacity: number): this;
  static createFormatPacketCapacityMaximumPacketSize(format: AVAudioFormat, packetCapacity: number, maximumPacketSize: number): this;
}

declare class AVAudioConnectionPoint extends NSObject {
  readonly bus: number;
  readonly node: AVAudioNode;
  static createWithNodeBus(node: AVAudioNode, bus: number): this;
}

declare class AVAudioConverter extends NSObject {
  readonly applicableEncodeBitRates: NSArray<number>;
  readonly applicableEncodeSampleRates: NSArray<number>;
  readonly availableEncodeBitRates: NSArray<number>;
  readonly availableEncodeChannelLayoutTags: NSArray<number>;
  readonly availableEncodeSampleRates: NSArray<number>;
  bitRate: number;
  setBitRate(_: number)
  bitRateStrategy: string;
  setBitRateStrategy(_: string)
  channelMap: NSArray<number>;
  setChannelMap(_: NSArray<number>)
  dither: boolean;
  setDither(_: boolean)
  downmix: boolean;
  setDownmix(_: boolean)
  readonly inputFormat: AVAudioFormat;
  magicCookie: Data;
  setMagicCookie(_: Data)
  readonly maximumOutputPacketSize: number;
  readonly outputFormat: AVAudioFormat;
  primeInfo: AVAudioConverterPrimeInfo;
  setPrimeInfo(_: AVAudioConverterPrimeInfo)
  primeMethod: AVAudioConverterPrimeMethod;
  setPrimeMethod(_: AVAudioConverterPrimeMethod)
  sampleRateConverterAlgorithm: string;
  setSampleRateConverterAlgorithm(_: string)
  sampleRateConverterQuality: number;
  setSampleRateConverterQuality(_: number)
  convertToBufferErrorWithInputFromBlock(to: AVAudioBuffer, error?: Error, withInputFrom: (p1: number, p2: AVAudioConverterInputStatus) => AVAudioBuffer): AVAudioConverterOutputStatus;
  convertToBufferFromBufferError(fromBuffer: AVAudioPCMBuffer, error: AVAudioPCMBuffer): boolean;
  static createWithFromFormatToFormat(fromFormat: AVAudioFormat, toFormat: AVAudioFormat): this;
  reset(): void;
}

interface AVAudioConverterPrimeInfo {
  leadingFrames: number;
  trailingFrames: number;
}

declare var AVAudioConverterPrimeInfo: AVAudioConverterPrimeInfo;

declare class AVAudioEngine extends NSObject {
  readonly attachedNodes: Set<AVAudioNode>;
  isAutoShutdownEnabled: boolean;
  setAutoShutdownEnabled(_: boolean)
  readonly inputNode: AVAudioInputNode;
  readonly isInManualRenderingMode: boolean;
  readonly mainMixerNode: AVAudioMixerNode;
  readonly manualRenderingBlock: (p1: number, p2: AudioBufferList, p3: number) => AVAudioEngineManualRenderingStatus;
  readonly manualRenderingFormat: AVAudioFormat;
  readonly manualRenderingMaximumFrameCount: number;
  readonly manualRenderingMode: AVAudioEngineManualRenderingMode;
  readonly manualRenderingSampleTime: number;
  musicSequence: any;
  setMusicSequence(_: any)
  readonly outputNode: AVAudioOutputNode;
  readonly isRunning: boolean;
  attachNode(_: AVAudioNode): void;
  connectToFormat(_: AVAudioNode, to: AVAudioNode, format?: AVAudioFormat): void;
  connectToFromBusToBusFormat(_: AVAudioNode, to: AVAudioNode, fromBus: number, toBus: number, format?: AVAudioFormat): void;
  connectToConnectionPointsFromBusFormat(_: AVAudioNode, to: NSArray<AVAudioConnectionPoint>, fromBus: number, format?: AVAudioFormat): void;
  connectMIDIToFormatBlock(_: AVAudioNode, to: AVAudioNode, format?: AVAudioFormat, block?: (p1: number, p2: number, p3: number, p4: string) => number): void;
  connectMIDIToNodesFormatBlock(_: AVAudioNode, to: NSArray<AVAudioNode>, format?: AVAudioFormat, block?: (p1: number, p2: number, p3: number, p4: string) => number): void;
  detachNode(_: AVAudioNode): void;
  disableManualRenderingMode(): void;
  disconnectMIDIFrom(_: AVAudioNode, from: AVAudioNode): void;
  disconnectMIDIFromNodes(_: AVAudioNode, from: NSArray<AVAudioNode>): void;
  disconnectMIDIInput(_: AVAudioNode): void;
  disconnectMIDIOutput(_: AVAudioNode): void;
  disconnectNodeInput(_: AVAudioNode): void;
  disconnectNodeInputBus(_: AVAudioNode, bus: number): void;
  disconnectNodeOutput(_: AVAudioNode): void;
  disconnectNodeOutputBus(_: AVAudioNode, bus: number): void;
  enableManualRenderingModeFormatMaximumFrameCountError(format: AVAudioEngineManualRenderingMode, maximumFrameCount: AVAudioFormat, error: number): boolean;
  inputConnectionPointForNodeInputBus(for_: AVAudioNode, inputBus: number): AVAudioConnectionPoint;
  outputConnectionPointsForNodeOutputBus(for_: AVAudioNode, outputBus: number): NSArray<AVAudioConnectionPoint>;
  pause(): void;
  prepare(): void;
  renderOfflineToBufferError(toBuffer: number, error: AVAudioPCMBuffer): AVAudioEngineManualRenderingStatus;
  reset(): void;
  startAndReturnError(): boolean;
  stop(): void;
}

declare var AVAudioEngineConfigurationChangeNotification: string;

declare class AVAudioEnvironmentDistanceAttenuationParameters extends NSObject {
  distanceAttenuationModel: AVAudioEnvironmentDistanceAttenuationModel;
  setDistanceAttenuationModel(_: AVAudioEnvironmentDistanceAttenuationModel)
  maximumDistance: number;
  setMaximumDistance(_: number)
  referenceDistance: number;
  setReferenceDistance(_: number)
  rolloffFactor: number;
  setRolloffFactor(_: number)
}

declare class AVAudioEnvironmentNode extends AVAudioNode implements AVAudioMixing {
  readonly applicableRenderingAlgorithms: NSArray<number>;
  readonly distanceAttenuationParameters: AVAudioEnvironmentDistanceAttenuationParameters;
  listenerAngularOrientation: AVAudio3DAngularOrientation;
  setListenerAngularOrientation(_: AVAudio3DAngularOrientation)
  listenerPosition: AVAudio3DPoint;
  setListenerPosition(_: AVAudio3DPoint)
  listenerVectorOrientation: AVAudio3DVectorOrientation;
  setListenerVectorOrientation(_: AVAudio3DVectorOrientation)
  readonly nextAvailableInputBus: number;
  outputType: AVAudioEnvironmentOutputType;
  setOutputType(_: AVAudioEnvironmentOutputType)
  outputVolume: number;
  setOutputVolume(_: number)
  readonly reverbParameters: AVAudioEnvironmentReverbParameters;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  obstruction: number;
  setObstruction(_: number) // inherited from AVAudio3DMixing
  occlusion: number;
  setOcclusion(_: number) // inherited from AVAudio3DMixing
  pan: number;
  setPan(_: number) // inherited from AVAudioStereoMixing
  pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode;
  setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode) // inherited from AVAudio3DMixing
  position: AVAudio3DPoint;
  setPosition(_: AVAudio3DPoint) // inherited from AVAudio3DMixing
  rate: number;
  setRate(_: number) // inherited from AVAudio3DMixing
  renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm;
  setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm) // inherited from AVAudio3DMixing
  reverbBlend: number;
  setReverbBlend(_: number) // inherited from AVAudio3DMixing
  sourceMode: AVAudio3DMixingSourceMode;
  setSourceMode(_: AVAudio3DMixingSourceMode) // inherited from AVAudio3DMixing
  readonly superclass: typeof NSObject; // inherited from NSObject
  volume: number;
  setVolume(_: number) // inherited from AVAudioMixing
  conformsToProtocol(to: any /* Protocol */): boolean;
  destinationForMixerBus(forMixer: AVAudioNode, bus: number): AVAudioMixingDestination;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class AVAudioEnvironmentReverbParameters extends NSObject {
  enable: boolean;
  setEnable(_: boolean)
  readonly filterParameters: AVAudioUnitEQFilterParameters;
  level: number;
  setLevel(_: number)
  loadFactoryReverbPreset(_: AVAudioUnitReverbPreset): void;
}

declare class AVAudioFile extends NSObject {
  readonly fileFormat: AVAudioFormat;
  framePosition: number;
  setFramePosition(_: number)
  readonly length: number;
  readonly processingFormat: AVAudioFormat;
  readonly url: NSURL;
  static createForReadingCommonFormatInterleaved(forReading: NSURL, commonFormat: AVAudioCommonFormat, interleaved: boolean): this;
  static createForReading(forReading: NSURL): this;
  static createForWritingSettingsCommonFormatInterleaved(forWriting: NSURL, settings: NSDictionary<string, any>, commonFormat: AVAudioCommonFormat, interleaved: boolean): this;
  static createForWritingSettings(forWriting: NSURL, settings: NSDictionary<string, any>): this;
  readIntoBufferError(error: AVAudioPCMBuffer): boolean;
  readIntoBufferFrameCountError(frameCount: AVAudioPCMBuffer, error: number): boolean;
  writeFromBufferError(error: AVAudioPCMBuffer): boolean;
}

declare var AVAudioFileTypeKey: string;

declare class AVAudioFormat extends NSObject implements NSSecureCoding {
  readonly channelCount: number;
  readonly channelLayout: AVAudioChannelLayout;
  readonly commonFormat: AVAudioCommonFormat;
  readonly formatDescription: any;
  readonly isInterleaved: boolean;
  magicCookie: Data;
  setMagicCookie(_: Data)
  readonly sampleRate: number;
  readonly settings: NSDictionary<string, any>;
  readonly isStandard: boolean;
  readonly streamDescription: AudioStreamBasicDescription;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithStandardFormatWithSampleRateChannelLayout(standardFormatWithSampleRate: number, channelLayout: AVAudioChannelLayout): this;
  static createWithStandardFormatWithSampleRateChannels(standardFormatWithSampleRate: number, channels: number): this;
  static createWithCMAudioFormatDescription(CMAudioFormatDescription: any): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithCommonFormatSampleRateChannelsInterleaved(commonFormat: AVAudioCommonFormat, sampleRate: number, channels: number, interleaved: boolean): this;
  static createWithCommonFormatSampleRateInterleavedChannelLayout(commonFormat: AVAudioCommonFormat, sampleRate: number, interleaved: boolean, channelLayout: AVAudioChannelLayout): this;
  static createWithSettings(settings: NSDictionary<string, any>): this;
  static createWithStreamDescription(streamDescription: AudioStreamBasicDescription): this;
  static createWithStreamDescriptionChannelLayout(streamDescription: AudioStreamBasicDescription, channelLayout?: AVAudioChannelLayout): this;
}

declare class AVAudioIONode extends AVAudioNode {
  readonly audioUnit: ComponentInstanceRecord;
  readonly presentationLatency: number;
  readonly isVoiceProcessingEnabled: boolean;
  setVoiceProcessingEnabledError(error: boolean): boolean;
}

declare class AVAudioInputNode extends AVAudioIONode implements AVAudioMixing {
  isVoiceProcessingAGCEnabled: boolean;
  setVoiceProcessingAGCEnabled(_: boolean)
  isVoiceProcessingBypassed: boolean;
  setVoiceProcessingBypassed(_: boolean)
  isVoiceProcessingInputMuted: boolean;
  setVoiceProcessingInputMuted(_: boolean)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  obstruction: number;
  setObstruction(_: number) // inherited from AVAudio3DMixing
  occlusion: number;
  setOcclusion(_: number) // inherited from AVAudio3DMixing
  pan: number;
  setPan(_: number) // inherited from AVAudioStereoMixing
  pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode;
  setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode) // inherited from AVAudio3DMixing
  position: AVAudio3DPoint;
  setPosition(_: AVAudio3DPoint) // inherited from AVAudio3DMixing
  rate: number;
  setRate(_: number) // inherited from AVAudio3DMixing
  renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm;
  setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm) // inherited from AVAudio3DMixing
  reverbBlend: number;
  setReverbBlend(_: number) // inherited from AVAudio3DMixing
  sourceMode: AVAudio3DMixingSourceMode;
  setSourceMode(_: AVAudio3DMixingSourceMode) // inherited from AVAudio3DMixing
  readonly superclass: typeof NSObject; // inherited from NSObject
  volume: number;
  setVolume(_: number) // inherited from AVAudioMixing
  conformsToProtocol(to: any /* Protocol */): boolean;
  destinationForMixerBus(forMixer: AVAudioNode, bus: number): AVAudioMixingDestination;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  setManualRenderingInputPCMFormatInputBlock(_: AVAudioFormat, inputBlock: (p1: number) => AudioBufferList): boolean;
}

declare class AVAudioMix extends NSObject implements NSCopying, NSMutableCopying {
  readonly inputParameters: NSArray<AVAudioMixInputParameters>;
}

declare class AVAudioMixInputParameters extends NSObject implements NSCopying, NSMutableCopying {
  readonly audioTapProcessor: any;
  readonly audioTimePitchAlgorithm: string;
  readonly trackID: number;
  getVolumeRampForTimeStartVolumeEndVolumeTimeRange(for_: CMTime, startVolume?: number, endVolume?: number, timeRange?: CMTimeRange): boolean;
}

declare class AVAudioMixerNode extends AVAudioNode implements AVAudioMixing {
  readonly nextAvailableInputBus: number;
  outputVolume: number;
  setOutputVolume(_: number)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  obstruction: number;
  setObstruction(_: number) // inherited from AVAudio3DMixing
  occlusion: number;
  setOcclusion(_: number) // inherited from AVAudio3DMixing
  pan: number;
  setPan(_: number) // inherited from AVAudioStereoMixing
  pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode;
  setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode) // inherited from AVAudio3DMixing
  position: AVAudio3DPoint;
  setPosition(_: AVAudio3DPoint) // inherited from AVAudio3DMixing
  rate: number;
  setRate(_: number) // inherited from AVAudio3DMixing
  renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm;
  setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm) // inherited from AVAudio3DMixing
  reverbBlend: number;
  setReverbBlend(_: number) // inherited from AVAudio3DMixing
  sourceMode: AVAudio3DMixingSourceMode;
  setSourceMode(_: AVAudio3DMixingSourceMode) // inherited from AVAudio3DMixing
  readonly superclass: typeof NSObject; // inherited from NSObject
  volume: number;
  setVolume(_: number) // inherited from AVAudioMixing
  conformsToProtocol(to: any /* Protocol */): boolean;
  destinationForMixerBus(forMixer: AVAudioNode, bus: number): AVAudioMixingDestination;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

interface AVAudioMixing extends AVAudio3DMixing, AVAudioStereoMixing {
  volume: number;
  setVolume(_: number)
  destinationForMixerBus(forMixer: AVAudioNode, bus: number): AVAudioMixingDestination;
}

declare var AVAudioMixing: {
  prototype: AVAudioMixing;
};

declare class AVAudioMixingDestination extends NSObject implements AVAudioMixing {
  readonly connectionPoint: AVAudioConnectionPoint;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  obstruction: number;
  setObstruction(_: number) // inherited from AVAudio3DMixing
  occlusion: number;
  setOcclusion(_: number) // inherited from AVAudio3DMixing
  pan: number;
  setPan(_: number) // inherited from AVAudioStereoMixing
  pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode;
  setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode) // inherited from AVAudio3DMixing
  position: AVAudio3DPoint;
  setPosition(_: AVAudio3DPoint) // inherited from AVAudio3DMixing
  rate: number;
  setRate(_: number) // inherited from AVAudio3DMixing
  renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm;
  setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm) // inherited from AVAudio3DMixing
  reverbBlend: number;
  setReverbBlend(_: number) // inherited from AVAudio3DMixing
  sourceMode: AVAudio3DMixingSourceMode;
  setSourceMode(_: AVAudio3DMixingSourceMode) // inherited from AVAudio3DMixing
  readonly superclass: typeof NSObject; // inherited from NSObject
  volume: number;
  setVolume(_: number) // inherited from AVAudioMixing
  conformsToProtocol(to: any /* Protocol */): boolean;
  destinationForMixerBus(forMixer: AVAudioNode, bus: number): AVAudioMixingDestination;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class AVAudioNode extends NSObject {
  readonly AUAudioUnit: AUAudioUnit;
  readonly engine: AVAudioEngine;
  readonly lastRenderTime: AVAudioTime;
  readonly latency: number;
  readonly numberOfInputs: number;
  readonly numberOfOutputs: number;
  readonly outputPresentationLatency: number;
  inputFormatForBus(forBus: number): AVAudioFormat;
  installTapOnBusBufferSizeFormatBlock(onBus: number, bufferSize: number, format?: AVAudioFormat, block: (p1: AVAudioPCMBuffer, p2: AVAudioTime) => void): void;
  nameForInputBus(forInputBus: number): string;
  nameForOutputBus(forOutputBus: number): string;
  outputFormatForBus(forBus: number): AVAudioFormat;
  removeTapOnBus(onBus: number): void;
  reset(): void;
}

declare class AVAudioOutputNode extends AVAudioIONode {
}

declare class AVAudioPCMBuffer extends AVAudioBuffer {
  readonly floatChannelData: number;
  readonly frameCapacity: number;
  frameLength: number;
  setFrameLength(_: number)
  readonly int16ChannelData: number;
  readonly int32ChannelData: number;
  readonly stride: number;
  static createWithPCMFormatFrameCapacity(PCMFormat: AVAudioFormat, frameCapacity: number): this;
}

declare class AVAudioPlayer extends NSObject {
  currentDevice: string;
  setCurrentDevice(_: string)
  currentTime: number;
  setCurrentTime(_: number)
  readonly data: Data;
  delegate: AVAudioPlayerDelegate;
  setDelegate(_: AVAudioPlayerDelegate)
  readonly deviceCurrentTime: number;
  readonly duration: number;
  enableRate: boolean;
  setEnableRate(_: boolean)
  readonly format: AVAudioFormat;
  isMeteringEnabled: boolean;
  setMeteringEnabled(_: boolean)
  readonly numberOfChannels: number;
  numberOfLoops: number;
  setNumberOfLoops(_: number)
  pan: number;
  setPan(_: number)
  readonly isPlaying: boolean;
  rate: number;
  setRate(_: number)
  readonly settings: NSDictionary<string, any>;
  readonly url: NSURL;
  volume: number;
  setVolume(_: number)
  averagePowerForChannel(forChannel: number): number;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  static createWithContentsOfURLFileTypeHint(contentsOfURL: NSURL, fileTypeHint?: string): this;
  static createWithData(data: Data): this;
  static createWithDataFileTypeHint(data: Data, fileTypeHint?: string): this;
  pause(): void;
  peakPowerForChannel(forChannel: number): number;
  play(): boolean;
  playAtTime(atTime: number): boolean;
  prepareToPlay(): boolean;
  setVolumeFadeDuration(_: number, fadeDuration: number): void;
  stop(): void;
  updateMeters(): void;
}

interface AVAudioPlayerDelegate extends NSObject {
  audioPlayerDecodeErrorDidOccurError?(_: AVAudioPlayer, error?: Error): void;
  audioPlayerDidFinishPlayingSuccessfully?(_: AVAudioPlayer, successfully: boolean): void;
}

declare var AVAudioPlayerDelegate: {
  prototype: AVAudioPlayerDelegate;
};

declare class AVAudioPlayerNode extends AVAudioNode implements AVAudioMixing {
  readonly isPlaying: boolean;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  obstruction: number;
  setObstruction(_: number) // inherited from AVAudio3DMixing
  occlusion: number;
  setOcclusion(_: number) // inherited from AVAudio3DMixing
  pan: number;
  setPan(_: number) // inherited from AVAudioStereoMixing
  pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode;
  setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode) // inherited from AVAudio3DMixing
  position: AVAudio3DPoint;
  setPosition(_: AVAudio3DPoint) // inherited from AVAudio3DMixing
  rate: number;
  setRate(_: number) // inherited from AVAudio3DMixing
  renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm;
  setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm) // inherited from AVAudio3DMixing
  reverbBlend: number;
  setReverbBlend(_: number) // inherited from AVAudio3DMixing
  sourceMode: AVAudio3DMixingSourceMode;
  setSourceMode(_: AVAudio3DMixingSourceMode) // inherited from AVAudio3DMixing
  readonly superclass: typeof NSObject; // inherited from NSObject
  volume: number;
  setVolume(_: number) // inherited from AVAudioMixing
  conformsToProtocol(to: any /* Protocol */): boolean;
  destinationForMixerBus(forMixer: AVAudioNode, bus: number): AVAudioMixingDestination;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  nodeTimeForPlayerTime(forPlayerTime: AVAudioTime): AVAudioTime;
  pause(): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  play(): void;
  playAtTime(at?: AVAudioTime): void;
  playerTimeForNodeTime(forNodeTime: AVAudioTime): AVAudioTime;
  prepareWithFrameCount(withFrameCount: number): void;
  respondsToSelector(_: string): boolean;
  scheduleBufferAtTimeOptionsCompletionCallbackTypeCompletionHandler(_: AVAudioPCMBuffer, at?: AVAudioTime, options: AVAudioPlayerNodeBufferOptions, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler?: (p1: AVAudioPlayerNodeCompletionCallbackType) => void): void;
  scheduleBufferAtTimeOptionsCompletionHandler(_: AVAudioPCMBuffer, at?: AVAudioTime, options: AVAudioPlayerNodeBufferOptions, completionHandler?: () => void): void;
  scheduleBufferCompletionCallbackTypeCompletionHandler(_: AVAudioPCMBuffer, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler?: (p1: AVAudioPlayerNodeCompletionCallbackType) => void): void;
  scheduleBufferCompletionHandler(_: AVAudioPCMBuffer, completionHandler?: () => void): void;
  scheduleFileAtTimeCompletionCallbackTypeCompletionHandler(_: AVAudioFile, at?: AVAudioTime, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler?: (p1: AVAudioPlayerNodeCompletionCallbackType) => void): void;
  scheduleFileAtTimeCompletionHandler(_: AVAudioFile, at?: AVAudioTime, completionHandler?: () => void): void;
  scheduleSegmentStartingFrameFrameCountAtTimeCompletionCallbackTypeCompletionHandler(_: AVAudioFile, startingFrame: number, frameCount: number, at?: AVAudioTime, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler?: (p1: AVAudioPlayerNodeCompletionCallbackType) => void): void;
  scheduleSegmentStartingFrameFrameCountAtTimeCompletionHandler(_: AVAudioFile, startingFrame: number, frameCount: number, at?: AVAudioTime, completionHandler?: () => void): void;
  self(): this;
  stop(): void;
}

declare class AVAudioRecorder extends NSObject {
  readonly currentTime: number;
  delegate: AVAudioRecorderDelegate;
  setDelegate(_: AVAudioRecorderDelegate)
  readonly deviceCurrentTime: number;
  readonly format: AVAudioFormat;
  isMeteringEnabled: boolean;
  setMeteringEnabled(_: boolean)
  readonly isRecording: boolean;
  readonly settings: NSDictionary<string, any>;
  readonly url: NSURL;
  averagePowerForChannel(forChannel: number): number;
  deleteRecording(): boolean;
  static createWithUrlFormat(URL: NSURL, format: AVAudioFormat): this;
  static createWithUrlSettings(URL: NSURL, settings: NSDictionary<string, any>): this;
  pause(): void;
  peakPowerForChannel(forChannel: number): number;
  prepareToRecord(): boolean;
  record(): boolean;
  recordAtTime(atTime: number): boolean;
  recordAtTimeForDuration(atTime: number, forDuration: number): boolean;
  recordForDuration(forDuration: number): boolean;
  stop(): void;
  updateMeters(): void;
}

interface AVAudioRecorderDelegate extends NSObject {
  audioRecorderDidFinishRecordingSuccessfully?(_: AVAudioRecorder, successfully: boolean): void;
  audioRecorderEncodeErrorDidOccurError?(_: AVAudioRecorder, error?: Error): void;
}

declare var AVAudioRecorderDelegate: {
  prototype: AVAudioRecorderDelegate;
};

declare class AVAudioSequencer extends NSObject {
  currentPositionInBeats: number;
  setCurrentPositionInBeats(_: number)
  currentPositionInSeconds: number;
  setCurrentPositionInSeconds(_: number)
  readonly isPlaying: boolean;
  rate: number;
  setRate(_: number)
  readonly tempoTrack: AVMusicTrack;
  readonly tracks: NSArray<AVMusicTrack>;
  readonly userInfo: NSDictionary<string, any>;
  beatsForHostTimeError(forHostTime: number): number;
  beatsForSeconds(forSeconds: number): number;
  dataWithSMPTEResolutionError(withSMPTEResolution: number): Data;
  hostTimeForBeatsError(forBeats: number): number;
  static createWithAudioEngine(audioEngine: AVAudioEngine): this;
  loadFromDataOptionsError(options: Data, error: AVMusicSequenceLoadOptions): boolean;
  loadFromURLOptionsError(options: NSURL, error: AVMusicSequenceLoadOptions): boolean;
  prepareToPlay(): void;
  secondsForBeats(forBeats: number): number;
  startAndReturnError(): boolean;
  stop(): void;
  writeToURLSMPTEResolutionReplaceExistingError(SMPTEResolution: NSURL, replaceExisting: number, error: boolean): boolean;
}

declare var AVAudioSessionCategoryAmbient: string;

declare var AVAudioSessionCategoryAudioProcessing: string;

declare var AVAudioSessionCategoryMultiRoute: string;

declare var AVAudioSessionCategoryPlayAndRecord: string;

declare var AVAudioSessionCategoryPlayback: string;

declare var AVAudioSessionCategoryRecord: string;

declare var AVAudioSessionCategorySoloAmbient: string;

declare var AVAudioSessionInterruptionNotification: string;

declare var AVAudioSessionLocationLower: string;

declare var AVAudioSessionLocationUpper: string;

declare var AVAudioSessionMediaServicesWereLostNotification: string;

declare var AVAudioSessionMediaServicesWereResetNotification: string;

declare var AVAudioSessionModeDefault: string;

declare var AVAudioSessionModeGameChat: string;

declare var AVAudioSessionModeMeasurement: string;

declare var AVAudioSessionModeMoviePlayback: string;

declare var AVAudioSessionModeSpokenAudio: string;

declare var AVAudioSessionModeVideoChat: string;

declare var AVAudioSessionModeVideoRecording: string;

declare var AVAudioSessionModeVoiceChat: string;

declare var AVAudioSessionModeVoicePrompt: string;

declare var AVAudioSessionOrientationBack: string;

declare var AVAudioSessionOrientationBottom: string;

declare var AVAudioSessionOrientationFront: string;

declare var AVAudioSessionOrientationLeft: string;

declare var AVAudioSessionOrientationRight: string;

declare var AVAudioSessionOrientationTop: string;

declare var AVAudioSessionPolarPatternCardioid: string;

declare var AVAudioSessionPolarPatternOmnidirectional: string;

declare var AVAudioSessionPolarPatternSubcardioid: string;

declare var AVAudioSessionPortAirPlay: string;

declare var AVAudioSessionPortBluetoothA2DP: string;

declare var AVAudioSessionPortBluetoothHFP: string;

declare var AVAudioSessionPortBluetoothLE: string;

declare var AVAudioSessionPortBuiltInMic: string;

declare var AVAudioSessionPortBuiltInReceiver: string;

declare var AVAudioSessionPortBuiltInSpeaker: string;

declare var AVAudioSessionPortCarAudio: string;

declare var AVAudioSessionPortHDMI: string;

declare var AVAudioSessionPortHeadphones: string;

declare var AVAudioSessionPortHeadsetMic: string;

declare var AVAudioSessionPortLineIn: string;

declare var AVAudioSessionPortLineOut: string;

declare var AVAudioSessionPortUSBAudio: string;

declare var AVAudioSessionRouteChangeNotification: string;

declare var AVAudioSessionSilenceSecondaryAudioHintNotification: string;

declare class AVAudioSinkNode extends AVAudioNode {
  static createWithReceiverBlock(receiverBlock: (p1: AudioTimeStamp, p2: number, p3: AudioBufferList) => number): this;
}

declare class AVAudioSourceNode extends AVAudioNode implements AVAudioMixing {
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  obstruction: number;
  setObstruction(_: number) // inherited from AVAudio3DMixing
  occlusion: number;
  setOcclusion(_: number) // inherited from AVAudio3DMixing
  pan: number;
  setPan(_: number) // inherited from AVAudioStereoMixing
  pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode;
  setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode) // inherited from AVAudio3DMixing
  position: AVAudio3DPoint;
  setPosition(_: AVAudio3DPoint) // inherited from AVAudio3DMixing
  rate: number;
  setRate(_: number) // inherited from AVAudio3DMixing
  renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm;
  setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm) // inherited from AVAudio3DMixing
  reverbBlend: number;
  setReverbBlend(_: number) // inherited from AVAudio3DMixing
  sourceMode: AVAudio3DMixingSourceMode;
  setSourceMode(_: AVAudio3DMixingSourceMode) // inherited from AVAudio3DMixing
  readonly superclass: typeof NSObject; // inherited from NSObject
  volume: number;
  setVolume(_: number) // inherited from AVAudioMixing
  conformsToProtocol(to: any /* Protocol */): boolean;
  destinationForMixerBus(forMixer: AVAudioNode, bus: number): AVAudioMixingDestination;
  static createFormatRenderBlock(format: AVAudioFormat, renderBlock: (p1: boolean, p2: AudioTimeStamp, p3: number, p4: AudioBufferList) => number): this;
  static createWithRenderBlock(renderBlock: (p1: boolean, p2: AudioTimeStamp, p3: number, p4: AudioBufferList) => number): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

interface AVAudioStereoMixing extends NSObject {
  pan: number;
  setPan(_: number)
}

declare var AVAudioStereoMixing: {
  prototype: AVAudioStereoMixing;
};

declare class AVAudioTime extends NSObject {
  static hostTimeForSeconds(forSeconds: number): number;
  static secondsForHostTime(forHostTime: number): number;
  readonly audioTimeStamp: AudioTimeStamp;
  readonly hostTime: number;
  readonly isHostTimeValid: boolean;
  readonly sampleRate: number;
  readonly sampleTime: number;
  readonly isSampleTimeValid: boolean;
  extrapolateTimeFromAnchor(fromAnchor: AVAudioTime): AVAudioTime;
  static createWithAudioTimeStampSampleRate(audioTimeStamp: AudioTimeStamp, sampleRate: number): this;
  static createWithHostTime(hostTime: number): this;
  static createWithHostTimeSampleTimeAtRate(hostTime: number, sampleTime: number, atRate: number): this;
  static createWithSampleTimeAtRate(sampleTime: number, atRate: number): this;
}

declare var AVAudioTimePitchAlgorithmLowQualityZeroLatency: string;

declare var AVAudioTimePitchAlgorithmSpectral: string;

declare var AVAudioTimePitchAlgorithmTimeDomain: string;

declare var AVAudioTimePitchAlgorithmVarispeed: string;

declare class AVAudioUnit extends AVAudioNode {
  static instantiateWithComponentDescriptionOptionsCompletionHandler(with_: AudioComponentDescription, options: AudioComponentInstantiationOptions, completionHandler?: (p1: AVAudioUnit, p2: Error) => void): void;
  readonly audioComponentDescription: AudioComponentDescription;
  readonly audioUnit: ComponentInstanceRecord;
  readonly manufacturerName: string;
  readonly name: string;
  readonly version: number;
  loadAudioUnitPresetAtURLError(error: NSURL): boolean;
}

declare class AVAudioUnitComponent extends NSObject {
  readonly allTagNames: NSArray<string>;
  readonly audioComponent: any;
  readonly audioComponentDescription: AudioComponentDescription;
  readonly availableArchitectures: NSArray<number>;
  readonly configurationDictionary: NSDictionary<string, any>;
  readonly hasCustomView: boolean;
  readonly hasMIDIInput: boolean;
  readonly hasMIDIOutput: boolean;
  readonly icon: NSImage;
  readonly iconURL: NSURL;
  readonly localizedTypeName: string;
  readonly manufacturerName: string;
  readonly name: string;
  readonly passesAUVal: boolean;
  readonly isSandboxSafe: boolean;
  readonly typeName: string;
  userTagNames: NSArray<string>;
  setUserTagNames(_: NSArray<string>)
  readonly version: number;
  readonly versionString: string;
  supportsNumberInputChannelsOutputChannels(_: number, outputChannels: number): boolean;
}

declare class AVAudioUnitComponentManager extends NSObject {
  static sharedAudioUnitComponentManager(): AVAudioUnitComponentManager;
  readonly standardLocalizedTagNames: NSArray<string>;
  readonly tagNames: NSArray<string>;
  componentsMatchingDescription(matching: AudioComponentDescription): NSArray<AVAudioUnitComponent>;
  componentsMatchingPredicate(matching: NSPredicate): NSArray<AVAudioUnitComponent>;
  componentsPassingTest(passingTest: (p1: AVAudioUnitComponent, p2: boolean) => boolean): NSArray<AVAudioUnitComponent>;
}

declare var AVAudioUnitComponentManagerRegistrationsChangedNotification: string;

declare var AVAudioUnitComponentTagsDidChangeNotification: string;

declare class AVAudioUnitDelay extends AVAudioUnitEffect {
  delayTime: number;
  setDelayTime(_: number)
  feedback: number;
  setFeedback(_: number)
  lowPassCutoff: number;
  setLowPassCutoff(_: number)
  wetDryMix: number;
  setWetDryMix(_: number)
}

declare class AVAudioUnitDistortion extends AVAudioUnitEffect {
  preGain: number;
  setPreGain(_: number)
  wetDryMix: number;
  setWetDryMix(_: number)
  loadFactoryPreset(_: AVAudioUnitDistortionPreset): void;
}

declare class AVAudioUnitEQ extends AVAudioUnitEffect {
  readonly bands: NSArray<AVAudioUnitEQFilterParameters>;
  globalGain: number;
  setGlobalGain(_: number)
  static createWithNumberOfBands(numberOfBands: number): this;
}

declare class AVAudioUnitEQFilterParameters extends NSObject {
  bandwidth: number;
  setBandwidth(_: number)
  bypass: boolean;
  setBypass(_: boolean)
  filterType: AVAudioUnitEQFilterType;
  setFilterType(_: AVAudioUnitEQFilterType)
  frequency: number;
  setFrequency(_: number)
  gain: number;
  setGain(_: number)
}

declare class AVAudioUnitEffect extends AVAudioUnit {
  bypass: boolean;
  setBypass(_: boolean)
  static createWithAudioComponentDescription(audioComponentDescription: AudioComponentDescription): this;
}

declare class AVAudioUnitGenerator extends AVAudioUnit implements AVAudioMixing {
  bypass: boolean;
  setBypass(_: boolean)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  obstruction: number;
  setObstruction(_: number) // inherited from AVAudio3DMixing
  occlusion: number;
  setOcclusion(_: number) // inherited from AVAudio3DMixing
  pan: number;
  setPan(_: number) // inherited from AVAudioStereoMixing
  pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode;
  setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode) // inherited from AVAudio3DMixing
  position: AVAudio3DPoint;
  setPosition(_: AVAudio3DPoint) // inherited from AVAudio3DMixing
  rate: number;
  setRate(_: number) // inherited from AVAudio3DMixing
  renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm;
  setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm) // inherited from AVAudio3DMixing
  reverbBlend: number;
  setReverbBlend(_: number) // inherited from AVAudio3DMixing
  sourceMode: AVAudio3DMixingSourceMode;
  setSourceMode(_: AVAudio3DMixingSourceMode) // inherited from AVAudio3DMixing
  readonly superclass: typeof NSObject; // inherited from NSObject
  volume: number;
  setVolume(_: number) // inherited from AVAudioMixing
  conformsToProtocol(to: any /* Protocol */): boolean;
  destinationForMixerBus(forMixer: AVAudioNode, bus: number): AVAudioMixingDestination;
  static createWithAudioComponentDescription(audioComponentDescription: AudioComponentDescription): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class AVAudioUnitMIDIInstrument extends AVAudioUnit implements AVAudioMixing {
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  obstruction: number;
  setObstruction(_: number) // inherited from AVAudio3DMixing
  occlusion: number;
  setOcclusion(_: number) // inherited from AVAudio3DMixing
  pan: number;
  setPan(_: number) // inherited from AVAudioStereoMixing
  pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode;
  setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode) // inherited from AVAudio3DMixing
  position: AVAudio3DPoint;
  setPosition(_: AVAudio3DPoint) // inherited from AVAudio3DMixing
  rate: number;
  setRate(_: number) // inherited from AVAudio3DMixing
  renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm;
  setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm) // inherited from AVAudio3DMixing
  reverbBlend: number;
  setReverbBlend(_: number) // inherited from AVAudio3DMixing
  sourceMode: AVAudio3DMixingSourceMode;
  setSourceMode(_: AVAudio3DMixingSourceMode) // inherited from AVAudio3DMixing
  readonly superclass: typeof NSObject; // inherited from NSObject
  volume: number;
  setVolume(_: number) // inherited from AVAudioMixing
  conformsToProtocol(to: any /* Protocol */): boolean;
  destinationForMixerBus(forMixer: AVAudioNode, bus: number): AVAudioMixingDestination;
  static createWithAudioComponentDescription(audioComponentDescription: AudioComponentDescription): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  sendControllerWithValueOnChannel(_: number, withValue: number, onChannel: number): void;
  sendMIDIEventData1(_: number, data1: number): void;
  sendMIDIEventData1Data2(_: number, data1: number, data2: number): void;
  sendMIDISysExEvent(_: Data): void;
  sendPitchBendOnChannel(_: number, onChannel: number): void;
  sendPressureOnChannel(_: number, onChannel: number): void;
  sendPressureForKeyWithValueOnChannel(forKey: number, withValue: number, onChannel: number): void;
  sendProgramChangeBankMSBBankLSBOnChannel(_: number, bankMSB: number, bankLSB: number, onChannel: number): void;
  sendProgramChangeOnChannel(_: number, onChannel: number): void;
  startNoteWithVelocityOnChannel(_: number, withVelocity: number, onChannel: number): void;
  stopNoteOnChannel(_: number, onChannel: number): void;
}

declare var AVAudioUnitManufacturerNameApple: string;

declare class AVAudioUnitReverb extends AVAudioUnitEffect {
  wetDryMix: number;
  setWetDryMix(_: number)
  loadFactoryPreset(_: AVAudioUnitReverbPreset): void;
}

declare class AVAudioUnitSampler extends AVAudioUnitMIDIInstrument {
  globalTuning: number;
  setGlobalTuning(_: number)
  masterGain: number;
  setMasterGain(_: number)
  stereoPan: number;
  setStereoPan(_: number)
  loadAudioFilesAtURLsError(error: NSArray<NSURL>): boolean;
  loadInstrumentAtURLError(error: NSURL): boolean;
  loadSoundBankInstrumentAtURLProgramBankMSBBankLSBError(program: NSURL, bankMSB: number, bankLSB: number, error: number): boolean;
}

declare class AVAudioUnitTimeEffect extends AVAudioUnit {
  bypass: boolean;
  setBypass(_: boolean)
  static createWithAudioComponentDescription(audioComponentDescription: AudioComponentDescription): this;
}

declare class AVAudioUnitTimePitch extends AVAudioUnitTimeEffect {
  overlap: number;
  setOverlap(_: number)
  pitch: number;
  setPitch(_: number)
  rate: number;
  setRate(_: number)
}

declare var AVAudioUnitTypeEffect: string;

declare var AVAudioUnitTypeFormatConverter: string;

declare var AVAudioUnitTypeGenerator: string;

declare var AVAudioUnitTypeMIDIProcessor: string;

declare var AVAudioUnitTypeMixer: string;

declare var AVAudioUnitTypeMusicDevice: string;

declare var AVAudioUnitTypeMusicEffect: string;

declare var AVAudioUnitTypeOfflineEffect: string;

declare var AVAudioUnitTypeOutput: string;

declare var AVAudioUnitTypePanner: string;

declare class AVAudioUnitVarispeed extends AVAudioUnitTimeEffect {
  rate: number;
  setRate(_: number)
}

interface AVBeatRange {
  start: number;
  length: number;
}

declare var AVBeatRange: AVBeatRange;

declare class AVCameraCalibrationData extends NSObject {
  readonly extrinsicMatrix: simd_float4x3;
  readonly intrinsicMatrix: simd_float3x3;
  readonly intrinsicMatrixReferenceDimensions: NSSize;
  readonly inverseLensDistortionLookupTable: Data;
  readonly lensDistortionCenter: NSPoint;
  readonly lensDistortionLookupTable: Data;
  readonly pixelSize: number;
}

declare class AVCaptureAudioChannel extends NSObject {
  readonly averagePowerLevel: number;
  isEnabled: boolean;
  setEnabled(_: boolean)
  readonly peakHoldLevel: number;
  volume: number;
  setVolume(_: number)
}

declare class AVCaptureAudioDataOutput extends AVCaptureOutput {
  audioSettings: NSDictionary<string, any>;
  setAudioSettings(_: NSDictionary<string, any>)
  readonly sampleBufferCallbackQueue: NSObject;
  readonly sampleBufferDelegate: AVCaptureAudioDataOutputSampleBufferDelegate;
  recommendedAudioSettingsForAssetWriterWithOutputFileType(writingTo: string): NSDictionary<any, any>;
  setSampleBufferDelegateQueue(_?: AVCaptureAudioDataOutputSampleBufferDelegate, queue?: NSObject): void;
}

interface AVCaptureAudioDataOutputSampleBufferDelegate extends NSObject {
  captureOutputDidOutputSampleBufferFromConnection?(_: AVCaptureOutput, didOutput: any, from: AVCaptureConnection): void;
}

declare var AVCaptureAudioDataOutputSampleBufferDelegate: {
  prototype: AVCaptureAudioDataOutputSampleBufferDelegate;
};

declare class AVCaptureAudioFileOutput extends AVCaptureFileOutput {
  static availableOutputFileTypes(): NSArray<string>;
  audioSettings: NSDictionary<string, any>;
  setAudioSettings(_: NSDictionary<string, any>)
  metadata: NSArray<AVMetadataItem>;
  setMetadata(_: NSArray<AVMetadataItem>)
  startRecordingToOutputFileURLOutputFileTypeRecordingDelegate(to: NSURL, outputFileType: string, recordingDelegate: AVCaptureFileOutputRecordingDelegate): void;
}

declare class AVCaptureAudioPreviewOutput extends AVCaptureOutput {
  outputDeviceUniqueID: string;
  setOutputDeviceUniqueID(_: string)
  volume: number;
  setVolume(_: number)
}

declare class AVCaptureConnection extends NSObject {
  static connectionWithInputPortVideoPreviewLayer(inputPort: AVCaptureInput.Port, videoPreviewLayer: AVCaptureVideoPreviewLayer): AVCaptureConnection;
  static connectionWithInputPortsOutput(inputPorts: NSArray<AVCaptureInput.Port>, output: AVCaptureOutput): AVCaptureConnection;
  readonly isActive: boolean;
  readonly audioChannels: NSArray<AVCaptureAudioChannel>;
  automaticallyAdjustsVideoMirroring: boolean;
  setAutomaticallyAdjustsVideoMirroring(_: boolean)
  isEnabled: boolean;
  setEnabled(_: boolean)
  readonly inputPorts: NSArray<AVCaptureInput.Port>;
  readonly output: AVCaptureOutput;
  readonly isVideoFieldModeSupported: boolean;
  readonly isVideoMaxFrameDurationSupported: boolean;
  readonly isVideoMinFrameDurationSupported: boolean;
  readonly isVideoMirroringSupported: boolean;
  readonly isVideoOrientationSupported: boolean;
  videoFieldMode: AVVideoFieldMode;
  setVideoFieldMode(_: AVVideoFieldMode)
  videoMaxFrameDuration: CMTime;
  setVideoMaxFrameDuration(_: CMTime)
  videoMinFrameDuration: CMTime;
  setVideoMinFrameDuration(_: CMTime)
  isVideoMirrored: boolean;
  setVideoMirrored(_: boolean)
  videoOrientation: AVCaptureVideoOrientation;
  setVideoOrientation(_: AVCaptureVideoOrientation)
  readonly videoPreviewLayer: AVCaptureVideoPreviewLayer;
  static createWithInputPortVideoPreviewLayer(inputPort: AVCaptureInput.Port, videoPreviewLayer: AVCaptureVideoPreviewLayer): this;
  static createWithInputPortsOutput(inputPorts: NSArray<AVCaptureInput.Port>, output: AVCaptureOutput): this;
}

declare class AVCaptureDevice extends NSObject {
  static authorizationStatusForMediaType(for_: string): AVAuthorizationStatus;
  static defaultDeviceWithDeviceTypeMediaTypePosition(_: string, for_?: string, position: AVCaptureDevice.Position): AVCaptureDevice;
  static defaultDeviceWithMediaType(for_: string): AVCaptureDevice;
  static requestAccessForMediaTypeCompletionHandler(for_: string, completionHandler: (p1: boolean) => void): void;
  activeColorSpace: AVCaptureColorSpace;
  setActiveColorSpace(_: AVCaptureColorSpace)
  activeFormat: AVCaptureDevice.Format;
  setActiveFormat(_: AVCaptureDevice.Format)
  activeInputSource: AVCaptureDevice.InputSource;
  setActiveInputSource(_: AVCaptureDevice.InputSource)
  activeVideoMaxFrameDuration: CMTime;
  setActiveVideoMaxFrameDuration(_: CMTime)
  activeVideoMinFrameDuration: CMTime;
  setActiveVideoMinFrameDuration(_: CMTime)
  readonly isAdjustingExposure: boolean;
  readonly isAdjustingFocus: boolean;
  readonly isAdjustingWhiteBalance: boolean;
  readonly isConnected: boolean;
  readonly deviceType: string;
  exposureMode: AVCaptureDevice.ExposureMode;
  setExposureMode(_: AVCaptureDevice.ExposureMode)
  exposurePointOfInterest: NSPoint;
  setExposurePointOfInterest(_: NSPoint)
  readonly isExposurePointOfInterestSupported: boolean;
  readonly isFlashAvailable: boolean;
  flashMode: AVCaptureDevice.FlashMode;
  setFlashMode(_: AVCaptureDevice.FlashMode)
  focusMode: AVCaptureDevice.FocusMode;
  setFocusMode(_: AVCaptureDevice.FocusMode)
  focusPointOfInterest: NSPoint;
  setFocusPointOfInterest(_: NSPoint)
  readonly isFocusPointOfInterestSupported: boolean;
  readonly formats: NSArray<AVCaptureDevice.Format>;
  readonly hasFlash: boolean;
  readonly hasTorch: boolean;
  readonly isInUseByAnotherApplication: boolean;
  readonly inputSources: NSArray<AVCaptureDevice.InputSource>;
  readonly linkedDevices: NSArray<AVCaptureDevice>;
  readonly localizedName: string;
  readonly manufacturer: string;
  readonly modelID: string;
  readonly position: AVCaptureDevice.Position;
  readonly isSuspended: boolean;
  readonly isTorchActive: boolean;
  readonly isTorchAvailable: boolean;
  readonly torchLevel: number;
  torchMode: AVCaptureDevice.TorchMode;
  setTorchMode(_: AVCaptureDevice.TorchMode)
  readonly transportControlsPlaybackMode: AVCaptureDevice.TransportControlsPlaybackMode;
  readonly transportControlsSpeed: number;
  readonly transportControlsSupported: boolean;
  readonly transportType: number;
  readonly uniqueID: string;
  whiteBalanceMode: AVCaptureDevice.WhiteBalanceMode;
  setWhiteBalanceMode(_: AVCaptureDevice.WhiteBalanceMode)
  hasMediaType(_: string): boolean;
  isExposureModeSupported(_: AVCaptureDevice.ExposureMode): boolean;
  isFlashModeSupported(_: AVCaptureDevice.FlashMode): boolean;
  isFocusModeSupported(_: AVCaptureDevice.FocusMode): boolean;
  isTorchModeSupported(_: AVCaptureDevice.TorchMode): boolean;
  isWhiteBalanceModeSupported(_: AVCaptureDevice.WhiteBalanceMode): boolean;
  lockForConfiguration(): boolean;
  setTorchModeOnWithLevelError(level: number): boolean;
  setTransportControlsPlaybackModeSpeed(_: AVCaptureDevice.TransportControlsPlaybackMode, speed: number): void;
  supportsAVCaptureSessionPreset(_: string): boolean;
  unlockForConfiguration(): void;
}

declare class AVCaptureDeviceDiscoverySession extends NSObject {
  static discoverySessionWithDeviceTypesMediaTypePosition(_: NSArray<string>, mediaType?: string, position: AVCaptureDevice.Position): AVCaptureDeviceDiscoverySession;
}

declare class AVCaptureDeviceFormat extends NSObject {
  readonly autoFocusSystem: AVCaptureDeviceFormat.AutoFocusSystem;
  readonly formatDescription: any;
  readonly mediaType: string;
  readonly supportedColorSpaces: NSArray<number>;
  readonly videoSupportedFrameRateRanges: NSArray<AVFrameRateRange>;
}

declare class AVCaptureDeviceInput extends AVCaptureInput {
  static deviceInputWithDeviceError(error: AVCaptureDevice): AVCaptureDeviceInput;
  readonly device: AVCaptureDevice;
  static createWithDevice(device: AVCaptureDevice): this;
}

declare class AVCaptureDeviceInputSource extends NSObject {
  readonly inputSourceID: string;
  readonly localizedName: string;
}

declare var AVCaptureDeviceSubjectAreaDidChangeNotification: string;

declare var AVCaptureDeviceTypeBuiltInDualCamera: string;

declare var AVCaptureDeviceTypeBuiltInDualWideCamera: string;

declare var AVCaptureDeviceTypeBuiltInDuoCamera: string;

declare var AVCaptureDeviceTypeBuiltInMicrophone: string;

declare var AVCaptureDeviceTypeBuiltInTelephotoCamera: string;

declare var AVCaptureDeviceTypeBuiltInTripleCamera: string;

declare var AVCaptureDeviceTypeBuiltInTrueDepthCamera: string;

declare var AVCaptureDeviceTypeBuiltInUltraWideCamera: string;

declare var AVCaptureDeviceTypeBuiltInWideAngleCamera: string;

declare var AVCaptureDeviceTypeExternalUnknown: string;

declare var AVCaptureDeviceWasConnectedNotification: string;

declare var AVCaptureDeviceWasDisconnectedNotification: string;

declare var AVCaptureExposureDurationCurrent: CMTime;

declare var AVCaptureExposureTargetBiasCurrent: number;

declare class AVCaptureFileOutput extends AVCaptureOutput {
  delegate: AVCaptureFileOutputDelegate;
  setDelegate(_: AVCaptureFileOutputDelegate)
  maxRecordedDuration: CMTime;
  setMaxRecordedDuration(_: CMTime)
  maxRecordedFileSize: number;
  setMaxRecordedFileSize(_: number)
  minFreeDiskSpaceLimit: number;
  setMinFreeDiskSpaceLimit(_: number)
  readonly outputFileURL: NSURL;
  readonly recordedDuration: CMTime;
  readonly recordedFileSize: number;
  readonly isRecording: boolean;
  readonly isRecordingPaused: boolean;
  pauseRecording(): void;
  resumeRecording(): void;
  startRecordingToOutputFileURLRecordingDelegate(to: NSURL, recordingDelegate: AVCaptureFileOutputRecordingDelegate): void;
  stopRecording(): void;
}

interface AVCaptureFileOutputDelegate extends NSObject {
  captureOutputDidOutputSampleBufferFromConnection?(_: AVCaptureFileOutput, didOutputSampleBuffer: any, from: AVCaptureConnection): void;
  captureOutputShouldProvideSampleAccurateRecordingStart(_: AVCaptureOutput): boolean;
}

declare var AVCaptureFileOutputDelegate: {
  prototype: AVCaptureFileOutputDelegate;
};

interface AVCaptureFileOutputRecordingDelegate extends NSObject {
  captureOutputDidStartRecordingToOutputFileAtURLFromConnections?(_: AVCaptureFileOutput, didStartRecordingTo: NSURL, from: NSArray<AVCaptureConnection>): void;
  captureOutputDidPauseRecordingToOutputFileAtURLFromConnections?(_: AVCaptureFileOutput, didPauseRecordingTo: NSURL, from: NSArray<AVCaptureConnection>): void;
  captureOutputDidResumeRecordingToOutputFileAtURLFromConnections?(_: AVCaptureFileOutput, didResumeRecordingTo: NSURL, from: NSArray<AVCaptureConnection>): void;
  captureOutputWillFinishRecordingToOutputFileAtURLFromConnectionsError?(_: AVCaptureFileOutput, willFinishRecordingTo: NSURL, from: NSArray<AVCaptureConnection>, error?: Error): void;
  captureOutputDidFinishRecordingToOutputFileAtURLFromConnectionsError(_: AVCaptureFileOutput, didFinishRecordingTo: NSURL, from: NSArray<AVCaptureConnection>, error?: Error): void;
}

declare var AVCaptureFileOutputRecordingDelegate: {
  prototype: AVCaptureFileOutputRecordingDelegate;
};

declare var AVCaptureISOCurrent: number;

declare class AVCaptureInput extends NSObject {
  readonly ports: NSArray<AVCaptureInput.Port>;
}

declare class AVCaptureInputPort extends NSObject {
  readonly clock: any;
  isEnabled: boolean;
  setEnabled(_: boolean)
  readonly formatDescription: any;
  readonly input: AVCaptureInput;
  readonly mediaType: string;
}

declare var AVCaptureInputPortFormatDescriptionDidChangeNotification: string;

declare var AVCaptureLensPositionCurrent: number;

declare var AVCaptureMaxAvailableTorchLevel: number;

declare class AVCaptureMovieFileOutput extends AVCaptureFileOutput {
  metadata: NSArray<AVMetadataItem>;
  setMetadata(_: NSArray<AVMetadataItem>)
  movieFragmentInterval: CMTime;
  setMovieFragmentInterval(_: CMTime)
  outputSettingsForConnection(for_: AVCaptureConnection): NSDictionary<string, any>;
  setOutputSettingsForConnection(_?: NSDictionary<string, any>, for_: AVCaptureConnection): void;
}

declare class AVCaptureOutput extends NSObject {
  readonly connections: NSArray<AVCaptureConnection>;
  connectionWithMediaType(with_: string): AVCaptureConnection;
  metadataOutputRectOfInterestForRect(fromOutputRect: NSRect): NSRect;
  rectForMetadataOutputRectOfInterest(fromMetadataOutputRect: NSRect): NSRect;
  transformedMetadataObjectForMetadataObjectConnection(for_: AVMetadataObject, connection: AVCaptureConnection): AVMetadataObject;
}

declare class AVCapturePhoto extends NSObject {
  readonly photoCount: number;
  readonly pixelBuffer: any;
  readonly resolvedSettings: AVCaptureResolvedPhotoSettings;
  readonly timestamp: CMTime;
  CGImageRepresentation(): any;
  fileDataRepresentation(): Data;
}

interface AVCapturePhotoCaptureDelegate extends NSObject {
  captureOutputWillBeginCaptureForResolvedSettings?(_: AVCapturePhotoOutput, willBeginCaptureFor: AVCaptureResolvedPhotoSettings): void;
  captureOutputWillCapturePhotoForResolvedSettings?(_: AVCapturePhotoOutput, willCapturePhotoFor: AVCaptureResolvedPhotoSettings): void;
  captureOutputDidCapturePhotoForResolvedSettings?(_: AVCapturePhotoOutput, didCapturePhotoFor: AVCaptureResolvedPhotoSettings): void;
  captureOutputDidFinishProcessingPhotoError?(_: AVCapturePhotoOutput, didFinishProcessingPhoto: AVCapturePhoto, error?: Error): void;
  captureOutputDidFinishCaptureForResolvedSettingsError?(_: AVCapturePhotoOutput, didFinishCaptureFor: AVCaptureResolvedPhotoSettings, error?: Error): void;
}

declare var AVCapturePhotoCaptureDelegate: {
  prototype: AVCapturePhotoCaptureDelegate;
};

declare class AVCapturePhotoOutput extends AVCaptureOutput {
  readonly availablePhotoCodecTypes: NSArray<string>;
  readonly availablePhotoFileTypes: NSArray<string>;
  readonly availablePhotoPixelFormatTypes: NSArray<number>;
  capturePhotoWithSettingsDelegate(with_: AVCapturePhotoSettings, delegate: AVCapturePhotoCaptureDelegate): void;
  supportedPhotoCodecTypesForFileType(for_: string): NSArray<string>;
  supportedPhotoPixelFormatTypesForFileType(for_: string): NSArray<number>;
}

declare class AVCapturePhotoSettings extends NSObject implements NSCopying {
  static photoSettings(): AVCapturePhotoSettings;
  static photoSettingsFromPhotoSettings(from: AVCapturePhotoSettings): AVCapturePhotoSettings;
  static photoSettingsWithFormat(format?: NSDictionary<string, any>): AVCapturePhotoSettings;
  readonly format: NSDictionary<string, any>;
  readonly processedFileType: string;
  readonly uniqueID: number;
}

declare class AVCaptureResolvedPhotoSettings extends NSObject {
  readonly expectedPhotoCount: number;
  readonly photoDimensions: CMVideoDimensions;
  readonly uniqueID: number;
}

declare class AVCaptureScreenInput extends AVCaptureInput {
  capturesCursor: boolean;
  setCapturesCursor(_: boolean)
  capturesMouseClicks: boolean;
  setCapturesMouseClicks(_: boolean)
  cropRect: NSRect;
  setCropRect(_: NSRect)
  minFrameDuration: CMTime;
  setMinFrameDuration(_: CMTime)
  scaleFactor: number;
  setScaleFactor(_: number)
  static createWithDisplayID(displayID: number): this;
}

declare class AVCaptureSession extends NSObject {
  readonly connections: NSArray<AVCaptureConnection>;
  readonly inputs: NSArray<AVCaptureInput>;
  readonly masterClock: any;
  readonly outputs: NSArray<AVCaptureOutput>;
  readonly isRunning: boolean;
  sessionPreset: string;
  setSessionPreset(_: string)
  addConnection(_: AVCaptureConnection): void;
  addInput(_: AVCaptureInput): void;
  addInputWithNoConnections(_: AVCaptureInput): void;
  addOutput(_: AVCaptureOutput): void;
  addOutputWithNoConnections(_: AVCaptureOutput): void;
  beginConfiguration(): void;
  canAddConnection(_: AVCaptureConnection): boolean;
  canAddInput(_: AVCaptureInput): boolean;
  canAddOutput(_: AVCaptureOutput): boolean;
  canSetSessionPreset(_: string): boolean;
  commitConfiguration(): void;
  removeConnection(_: AVCaptureConnection): void;
  removeInput(_: AVCaptureInput): void;
  removeOutput(_: AVCaptureOutput): void;
  startRunning(): void;
  stopRunning(): void;
}

declare var AVCaptureSessionDidStartRunningNotification: string;

declare var AVCaptureSessionDidStopRunningNotification: string;

declare var AVCaptureSessionErrorKey: string;

declare var AVCaptureSessionInterruptionEndedNotification: string;

declare var AVCaptureSessionPreset1280x720: string;

declare var AVCaptureSessionPreset1920x1080: string;

declare var AVCaptureSessionPreset320x240: string;

declare var AVCaptureSessionPreset352x288: string;

declare var AVCaptureSessionPreset3840x2160: string;

declare var AVCaptureSessionPreset640x480: string;

declare var AVCaptureSessionPreset960x540: string;

declare var AVCaptureSessionPresetHigh: string;

declare var AVCaptureSessionPresetInputPriority: string;

declare var AVCaptureSessionPresetLow: string;

declare var AVCaptureSessionPresetMedium: string;

declare var AVCaptureSessionPresetPhoto: string;

declare var AVCaptureSessionPresetiFrame1280x720: string;

declare var AVCaptureSessionPresetiFrame960x540: string;

declare var AVCaptureSessionRuntimeErrorNotification: string;

declare var AVCaptureSessionWasInterruptedNotification: string;

declare var AVCaptureSystemPressureLevelCritical: string;

declare var AVCaptureSystemPressureLevelFair: string;

declare var AVCaptureSystemPressureLevelNominal: string;

declare var AVCaptureSystemPressureLevelSerious: string;

declare var AVCaptureSystemPressureLevelShutdown: string;

declare class AVCaptureSystemPressureState extends NSObject {
  readonly factors: AVCaptureSystemPressureState.Factors;
  readonly level: string;
}

declare class AVCaptureVideoDataOutput extends AVCaptureOutput {
  alwaysDiscardsLateVideoFrames: boolean;
  setAlwaysDiscardsLateVideoFrames(_: boolean)
  readonly availableVideoCVPixelFormatTypes: NSArray<number>;
  readonly availableVideoCodecTypes: NSArray<string>;
  readonly sampleBufferCallbackQueue: NSObject;
  readonly sampleBufferDelegate: AVCaptureVideoDataOutputSampleBufferDelegate;
  videoSettings: NSDictionary<string, any>;
  setVideoSettings(_: NSDictionary<string, any>)
  availableVideoCodecTypesForAssetWriterWithOutputFileType(writingTo: string): NSArray<string>;
  recommendedVideoSettingsForAssetWriterWithOutputFileType(writingTo: string): NSDictionary<string, any>;
  recommendedVideoSettingsForVideoCodecTypeAssetWriterOutputFileType(forVideoCodecType: string, assetWriterOutputFileType: string): NSDictionary<any, any>;
  setSampleBufferDelegateQueue(_?: AVCaptureVideoDataOutputSampleBufferDelegate, queue?: NSObject): void;
}

interface AVCaptureVideoDataOutputSampleBufferDelegate extends NSObject {
  captureOutputDidOutputSampleBufferFromConnection?(_: AVCaptureOutput, didOutput: any, from: AVCaptureConnection): void;
  captureOutputDidDropSampleBufferFromConnection?(_: AVCaptureOutput, didDrop: any, from: AVCaptureConnection): void;
}

declare var AVCaptureVideoDataOutputSampleBufferDelegate: {
  prototype: AVCaptureVideoDataOutputSampleBufferDelegate;
};

declare class AVCaptureVideoPreviewLayer extends CALayer {
  readonly connection: AVCaptureConnection;
  session: AVCaptureSession;
  setSession(_: AVCaptureSession)
  videoGravity: string;
  setVideoGravity(_: string)
  captureDevicePointOfInterestForPoint(fromLayerPoint: NSPoint): NSPoint;
  static createWithSession(session: AVCaptureSession): this;
  static createWithSessionWithNoConnection(sessionWithNoConnection: AVCaptureSession): this;
  metadataOutputRectOfInterestForRect(fromLayerRect: NSRect): NSRect;
  pointForCaptureDevicePointOfInterest(fromCaptureDevicePoint: NSPoint): NSPoint;
  rectForMetadataOutputRectOfInterest(fromMetadataOutputRect: NSRect): NSRect;
  setSessionWithNoConnection(_: AVCaptureSession): void;
  transformedMetadataObjectForMetadataObject(for_: AVMetadataObject): AVMetadataObject;
}

interface AVCaptureWhiteBalanceChromaticityValues {
  x: number;
  y: number;
}

declare var AVCaptureWhiteBalanceChromaticityValues: AVCaptureWhiteBalanceChromaticityValues;

interface AVCaptureWhiteBalanceGains {
  redGain: number;
  greenGain: number;
  blueGain: number;
}

declare var AVCaptureWhiteBalanceGains: AVCaptureWhiteBalanceGains;

declare var AVCaptureWhiteBalanceGainsCurrent: AVCaptureDevice.WhiteBalanceGains;

interface AVCaptureWhiteBalanceTemperatureAndTintValues {
  temperature: number;
  tint: number;
}

declare var AVCaptureWhiteBalanceTemperatureAndTintValues: AVCaptureWhiteBalanceTemperatureAndTintValues;

declare var AVChannelLayoutKey: string;

declare class AVComposition extends AVAsset implements NSMutableCopying {
  readonly URLAssetInitializationOptions: NSDictionary<string, any>;
  readonly naturalSize: NSSize;
  trackWithTrackID(withTrackID: number): AVCompositionTrack;
}

declare class AVCompositionTrack extends AVAssetTrack {
  readonly formatDescriptionReplacements: NSArray<AVCompositionTrackFormatDescriptionReplacement>;
  segmentForTrackTime(forTrackTime: CMTime): AVCompositionTrackSegment;
}

declare class AVCompositionTrackFormatDescriptionReplacement extends NSObject implements NSSecureCoding {
  readonly originalFormatDescription: any;
  readonly replacementFormatDescription: any;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class AVCompositionTrackSegment extends AVAssetTrackSegment {
  readonly sourceTrackID: number;
  readonly sourceURL: NSURL;
  static createWithTimeRange(timeRange: CMTimeRange): this;
  static createWithUrlTrackIDSourceTimeRangeTargetTimeRange(URL: NSURL, trackID: number, sourceTimeRange: CMTimeRange, targetTimeRange: CMTimeRange): this;
}

interface AVContentKeyRecipient {
  mayRequireContentKeysForMediaDataProcessing: boolean;
}

declare var AVContentKeyRecipient: {
  prototype: AVContentKeyRecipient;
};

declare class AVContentKeyRequest extends NSObject {
  readonly canProvidePersistableContentKey: boolean;
  readonly error: Error;
  readonly identifier: any;
  readonly initializationData: Data;
  readonly options: NSDictionary<string, any>;
  readonly renewsExpiringResponseData: boolean;
  readonly status: AVContentKeyRequest.Status;
  makeStreamingContentKeyRequestDataForAppContentIdentifierOptionsCompletionHandler(forApp: Data, contentIdentifier?: Data, options?: NSDictionary<string, any>, completionHandler?: (p1: Data, p2: Error) => void): void;
  processContentKeyResponse(_: AVContentKeyResponse): void;
  processContentKeyResponseError(_: Error): void;
  respondByRequestingPersistableContentKeyRequestAndReturnError(): boolean;
}

declare var AVContentKeyRequestProtocolVersionsKey: string;

declare var AVContentKeyRequestRequiresValidationDataInSecureTokenKey: string;

declare var AVContentKeyRequestRetryReasonReceivedObsoleteContentKey: string;

declare var AVContentKeyRequestRetryReasonReceivedResponseWithExpiredLease: string;

declare var AVContentKeyRequestRetryReasonTimedOut: string;

declare class AVContentKeyResponse extends NSObject {
  static contentKeyResponseWithAuthorizationTokenData(authorizationTokenData: Data): AVContentKeyResponse;
  static contentKeyResponseWithClearKeyDataInitializationVector(clearKeyData: Data, initializationVector?: Data): AVContentKeyResponse;
  static contentKeyResponseWithFairPlayStreamingKeyResponseData(fairPlayStreamingKeyResponseData: Data): AVContentKeyResponse;
}

declare class AVContentKeySession extends NSObject {
  static pendingExpiredSessionReportsWithAppIdentifierStorageDirectoryAtURL(withAppIdentifier: Data, storageDirectoryAt: NSURL): NSArray<Data>;
  static removePendingExpiredSessionReportsWithAppIdentifierStorageDirectoryAtURL(_: NSArray<Data>, withAppIdentifier: Data, storageDirectoryAt: NSURL): void;
  readonly contentKeyRecipients: NSArray<AVContentKeyRecipient>;
  readonly contentProtectionSessionIdentifier: Data;
  readonly delegate: AVContentKeySessionDelegate;
  readonly delegateQueue: NSObject;
  readonly keySystem: string;
  readonly storageURL: NSURL;
  addContentKeyRecipient(_: AVContentKeyRecipient): void;
  expire(): void;
  invalidateAllPersistableContentKeysForAppOptionsCompletionHandler(forApp: Data, options?: NSDictionary<string, any>, completionHandler?: (p1: Data, p2: Error) => void): void;
  invalidatePersistableContentKeyOptionsCompletionHandler(_: Data, options?: NSDictionary<string, any>, completionHandler?: (p1: Data, p2: Error) => void): void;
  makeSecureTokenForExpirationDateOfPersistableContentKeyCompletionHandler(ofPersistableContentKey: Data, completionHandler?: (p1: Data, p2: Error) => void): void;
  processContentKeyRequestWithIdentifierInitializationDataOptions(withIdentifier?: any, initializationData?: Data, options?: NSDictionary<string, any>): void;
  removeContentKeyRecipient(_: AVContentKeyRecipient): void;
  renewExpiringResponseDataForContentKeyRequest(for_: AVContentKeyRequest): void;
  setDelegateQueue(_?: AVContentKeySessionDelegate, queue?: NSObject): void;
}

interface AVContentKeySessionDelegate extends NSObject {
  contentKeySessionDidProvideContentKeyRequest(_: AVContentKeySession, didProvide: AVContentKeyRequest): void;
  contentKeySessionDidProvidePersistableContentKeyRequest?(_: AVContentKeySession, didProvide: AVPersistableContentKeyRequest): void;
  contentKeySessionShouldRetryContentKeyRequestReason?(_: AVContentKeySession, shouldRetry: AVContentKeyRequest, reason: string): boolean;
  contentKeySessionContentKeyRequestDidFailWithError?(_: AVContentKeySession, contentKeyRequest: AVContentKeyRequest, didFailWithError: Error): void;
  contentKeySessionContentKeyRequestDidSucceed?(_: AVContentKeySession, contentKeyRequestDidSucceed: AVContentKeyRequest): void;
  contentKeySessionDidProvideRenewingContentKeyRequest?(_: AVContentKeySession, didProvideRenewingContentKeyRequest: AVContentKeyRequest): void;
  contentKeySessionDidUpdatePersistableContentKeyForContentKeyIdentifier?(_: AVContentKeySession, didUpdatePersistableContentKey: Data, forContentKeyIdentifier: any): void;
  contentKeySessionContentProtectionSessionIdentifierDidChange?(_: AVContentKeySession): void;
  contentKeySessionDidGenerateExpiredSessionReport?(_: AVContentKeySession): void;
}

declare var AVContentKeySessionDelegate: {
  prototype: AVContentKeySessionDelegate;
};

declare var AVContentKeySessionServerPlaybackContextOptionProtocolVersions: string;

declare var AVContentKeySessionServerPlaybackContextOptionServerChallenge: string;

declare var AVContentKeySystemAuthorizationToken: string;

declare var AVContentKeySystemClearKey: string;

declare var AVContentKeySystemFairPlayStreaming: string;

declare var AVCoreAnimationBeginTimeAtZero: number;

declare class AVDateRangeMetadataGroup extends AVMetadataGroup implements NSCopying, NSMutableCopying {
  readonly endDate: Date;
  readonly startDate: Date;
  static createWithItemsStartDateEndDate(items: NSArray<AVMetadataItem>, startDate: Date, endDate?: Date): this;
}

declare class AVDepthData extends NSObject {
  static depthDataFromDictionaryRepresentationError(error: NSDictionary<any, any>): AVDepthData;
  readonly availableDepthDataTypes: NSArray<number>;
  readonly cameraCalibrationData: AVCameraCalibrationData;
  readonly depthDataAccuracy: AVDepthData.Accuracy;
  readonly isDepthDataFiltered: boolean;
  readonly depthDataMap: any;
  readonly depthDataQuality: AVDepthData.Quality;
  readonly depthDataType: number;
  depthDataByApplyingExifOrientation(_: CGImagePropertyOrientation): this;
  depthDataByConvertingToDepthDataType(toDepthDataType: number): this;
  depthDataByReplacingDepthDataMapWithPixelBufferError(error: any): this;
  dictionaryRepresentationForAuxiliaryDataType(forAuxiliaryDataType?: string): NSDictionary<any, any>;
}

interface AVEdgeWidths {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

declare var AVEdgeWidths: AVEdgeWidths;

declare var AVEncoderAudioQualityForVBRKey: string;

declare var AVEncoderAudioQualityKey: string;

declare var AVEncoderBitDepthHintKey: string;

declare var AVEncoderBitRateKey: string;

declare var AVEncoderBitRatePerChannelKey: string;

declare var AVEncoderBitRateStrategyKey: string;

declare var AVErrorDeviceKey: string;

declare var AVErrorDiscontinuityFlagsKey: string;

declare var AVErrorFileSizeKey: string;

declare var AVErrorFileTypeKey: string;

declare var AVErrorMediaSubTypeKey: string;

declare var AVErrorMediaTypeKey: string;

declare var AVErrorPIDKey: string;

declare var AVErrorPersistentTrackIDKey: string;

declare var AVErrorPresentationTimeStampKey: string;

declare var AVErrorRecordingSuccessfullyFinishedKey: string;

declare var AVErrorTimeKey: string;

declare var AVFileType3GPP: string;

declare var AVFileType3GPP2: string;

declare var AVFileTypeAC3: string;

declare var AVFileTypeAIFC: string;

declare var AVFileTypeAIFF: string;

declare var AVFileTypeAMR: string;

declare var AVFileTypeAVCI: string;

declare var AVFileTypeAppleM4A: string;

declare var AVFileTypeAppleM4V: string;

declare var AVFileTypeCoreAudioFormat: string;

declare var AVFileTypeDNG: string;

declare var AVFileTypeEnhancedAC3: string;

declare var AVFileTypeHEIC: string;

declare var AVFileTypeHEIF: string;

declare var AVFileTypeJPEG: string;

declare var AVFileTypeMPEG4: string;

declare var AVFileTypeMPEGLayer3: string;

declare var AVFileTypeQuickTimeMovie: string;

declare var AVFileTypeSunAU: string;

declare var AVFileTypeTIFF: string;

declare var AVFileTypeWAVE: string;

declare var AVFormatIDKey: string;

declare var AVFoundationErrorDomain: string;

interface AVFragmentMinding {
  isAssociatedWithFragmentMinder: boolean;
}

declare var AVFragmentMinding: {
  prototype: AVFragmentMinding;
};

declare class AVFragmentedAsset extends AVURLAsset implements AVFragmentMinding {
  static URLAssetWithURLOptions(url: NSURL, options?: NSDictionary<string, any>): AVFragmentedAsset; // inherited from AVURLAsset
  static fragmentedAssetWithURLOptions(url: NSURL, options?: NSDictionary<string, any>): AVFragmentedAsset;
  readonly isAssociatedWithFragmentMinder: boolean; // inherited from AVFragmentMinding
  trackWithTrackID(withTrackID: number): AVFragmentedAssetTrack;
}

declare class AVFragmentedAssetMinder extends NSObject {
  static fragmentedAssetMinderWithAssetMindingInterval(asset: AVAsset, mindingInterval: number): AVFragmentedAssetMinder;
  readonly assets: NSArray<AVAsset>;
  mindingInterval: number;
  setMindingInterval(_: number)
  addFragmentedAsset(_: AVAsset): void;
  static createWithAssetMindingInterval(asset: AVAsset, mindingInterval: number): this;
  removeFragmentedAsset(_: AVAsset): void;
}

declare class AVFragmentedAssetTrack extends AVAssetTrack {
}

declare class AVFragmentedMovie extends AVMovie implements AVFragmentMinding {
  readonly isAssociatedWithFragmentMinder: boolean; // inherited from AVFragmentMinding
  trackWithTrackID(withTrackID: number): AVFragmentedMovieTrack;
}

declare var AVFragmentedMovieContainsMovieFragmentsDidChangeNotification: string;

declare var AVFragmentedMovieDurationDidChangeNotification: string;

declare class AVFragmentedMovieMinder extends AVFragmentedAssetMinder {
  static fragmentedAssetMinderWithAssetMindingInterval(asset: AVAsset, mindingInterval: number): AVFragmentedMovieMinder; // inherited from AVFragmentedAssetMinder
  static fragmentedMovieMinderWithMovieMindingInterval(movie: AVFragmentedMovie, mindingInterval: number): AVFragmentedMovieMinder;
  readonly movies: NSArray<AVFragmentedMovie>;
  addFragmentedMovie(_: AVFragmentedMovie): void;
  static createWithMovieMindingInterval(movie: AVFragmentedMovie, mindingInterval: number): this;
  removeFragmentedMovie(_: AVFragmentedMovie): void;
}

declare class AVFragmentedMovieTrack extends AVMovieTrack {
}

declare var AVFragmentedMovieTrackSegmentsDidChangeNotification: string;

declare var AVFragmentedMovieTrackTimeRangeDidChangeNotification: string;

declare var AVFragmentedMovieWasDefragmentedNotification: string;

declare class AVFrameRateRange extends NSObject {
  readonly maxFrameDuration: CMTime;
  readonly maxFrameRate: number;
  readonly minFrameDuration: CMTime;
  readonly minFrameRate: number;
}

declare var AVLayerVideoGravityResize: string;

declare var AVLayerVideoGravityResizeAspect: string;

declare var AVLayerVideoGravityResizeAspectFill: string;

declare var AVLinearPCMBitDepthKey: string;

declare var AVLinearPCMIsBigEndianKey: string;

declare var AVLinearPCMIsFloatKey: string;

declare var AVLinearPCMIsNonInterleaved: string;

declare class AVMIDIPlayer extends NSObject {
  currentPosition: number;
  setCurrentPosition(_: number)
  readonly duration: number;
  readonly isPlaying: boolean;
  rate: number;
  setRate(_: number)
  static createWithContentsOfURLSoundBankURL(contentsOfURL: NSURL, soundBankURL?: NSURL): this;
  static createWithDataSoundBankURL(data: Data, soundBankURL?: NSURL): this;
  play(_?: () => void): void;
  prepareToPlay(): void;
  stop(): void;
}

declare function AVMakeRectWithAspectRatioInsideRect(aspectRatio: NSSize, boundingRect: NSRect): NSRect;
declare var AVMediaCharacteristicAudible: string;

declare var AVMediaCharacteristicContainsAlphaChannel: string;

declare var AVMediaCharacteristicContainsOnlyForcedSubtitles: string;

declare var AVMediaCharacteristicDescribesMusicAndSoundForAccessibility: string;

declare var AVMediaCharacteristicDescribesVideoForAccessibility: string;

declare var AVMediaCharacteristicDubbedTranslation: string;

declare var AVMediaCharacteristicEasyToRead: string;

declare var AVMediaCharacteristicFrameBased: string;

declare var AVMediaCharacteristicIsAuxiliaryContent: string;

declare var AVMediaCharacteristicIsMainProgramContent: string;

declare var AVMediaCharacteristicIsOriginalContent: string;

declare var AVMediaCharacteristicLanguageTranslation: string;

declare var AVMediaCharacteristicLegible: string;

declare var AVMediaCharacteristicTranscribesSpokenDialogForAccessibility: string;

declare var AVMediaCharacteristicUsesWideGamutColorSpace: string;

declare var AVMediaCharacteristicVisual: string;

declare var AVMediaCharacteristicVoiceOverTranslation: string;

declare class AVMediaDataStorage extends NSObject {
  URL(): NSURL;
  static createWithUrlOptions(URL: NSURL, options?: NSDictionary<string, any>): this;
}

declare class AVMediaSelection extends NSObject implements NSCopying, NSMutableCopying {
  readonly asset: AVAsset;
  mediaSelectionCriteriaCanBeAppliedAutomaticallyToMediaSelectionGroup(to: AVMediaSelectionGroup): boolean;
  selectedMediaOptionInMediaSelectionGroup(in_: AVMediaSelectionGroup): AVMediaSelectionOption;
}

declare class AVMediaSelectionGroup extends NSObject implements NSCopying {
  static mediaSelectionOptionsFromArrayFilteredAndSortedAccordingToPreferredLanguages(from: NSArray<AVMediaSelectionOption>, filteredAndSortedAccordingToPreferredLanguages: NSArray<string>): NSArray<AVMediaSelectionOption>;
  static mediaSelectionOptionsFromArrayWithLocale(from: NSArray<AVMediaSelectionOption>, with_: Locale): NSArray<AVMediaSelectionOption>;
  static mediaSelectionOptionsFromArrayWithMediaCharacteristics(from: NSArray<AVMediaSelectionOption>, withMediaCharacteristics: NSArray<string>): NSArray<AVMediaSelectionOption>;
  static mediaSelectionOptionsFromArrayWithoutMediaCharacteristics(from: NSArray<AVMediaSelectionOption>, withoutMediaCharacteristics: NSArray<string>): NSArray<AVMediaSelectionOption>;
  static playableMediaSelectionOptionsFromArray(from: NSArray<AVMediaSelectionOption>): NSArray<AVMediaSelectionOption>;
  readonly allowsEmptySelection: boolean;
  readonly defaultOption: AVMediaSelectionOption;
  readonly options: NSArray<AVMediaSelectionOption>;
  mediaSelectionOptionWithPropertyList(withPropertyList: any): AVMediaSelectionOption;
}

declare class AVMediaSelectionOption extends NSObject implements NSCopying {
  readonly availableMetadataFormats: NSArray<string>;
  readonly commonMetadata: NSArray<AVMetadataItem>;
  readonly displayName: string;
  readonly extendedLanguageTag: string;
  readonly locale: Locale;
  readonly mediaSubTypes: NSArray<number>;
  readonly mediaType: string;
  readonly isPlayable: boolean;
  associatedMediaSelectionOptionInMediaSelectionGroup(in_: AVMediaSelectionGroup): AVMediaSelectionOption;
  displayNameWithLocale(with_: Locale): string;
  hasMediaCharacteristic(_: string): boolean;
  metadataForFormat(forFormat: string): NSArray<AVMetadataItem>;
  propertyList(): any;
}

declare var AVMediaTypeAudio: string;

declare var AVMediaTypeClosedCaption: string;

declare var AVMediaTypeDepthData: string;

declare var AVMediaTypeMetadata: string;

declare var AVMediaTypeMetadataObject: string;

declare var AVMediaTypeMuxed: string;

declare var AVMediaTypeSubtitle: string;

declare var AVMediaTypeText: string;

declare var AVMediaTypeTimecode: string;

declare var AVMediaTypeVideo: string;

declare var AVMetadata3GPUserDataKeyAlbumAndTrack: string;

declare var AVMetadata3GPUserDataKeyAuthor: string;

declare var AVMetadata3GPUserDataKeyCollection: string;

declare var AVMetadata3GPUserDataKeyCopyright: string;

declare var AVMetadata3GPUserDataKeyDescription: string;

declare var AVMetadata3GPUserDataKeyGenre: string;

declare var AVMetadata3GPUserDataKeyKeywordList: string;

declare var AVMetadata3GPUserDataKeyLocation: string;

declare var AVMetadata3GPUserDataKeyMediaClassification: string;

declare var AVMetadata3GPUserDataKeyMediaRating: string;

declare var AVMetadata3GPUserDataKeyPerformer: string;

declare var AVMetadata3GPUserDataKeyRecordingYear: string;

declare var AVMetadata3GPUserDataKeyThumbnail: string;

declare var AVMetadata3GPUserDataKeyTitle: string;

declare var AVMetadata3GPUserDataKeyUserRating: string;

declare class AVMetadataBodyObject extends AVMetadataObject implements NSCopying {
  readonly bodyID: number;
}

declare class AVMetadataCatBodyObject extends AVMetadataBodyObject implements NSCopying {
}

declare var AVMetadataCommonIdentifierAlbumName: string;

declare var AVMetadataCommonIdentifierArtist: string;

declare var AVMetadataCommonIdentifierArtwork: string;

declare var AVMetadataCommonIdentifierAssetIdentifier: string;

declare var AVMetadataCommonIdentifierAuthor: string;

declare var AVMetadataCommonIdentifierContributor: string;

declare var AVMetadataCommonIdentifierCopyrights: string;

declare var AVMetadataCommonIdentifierCreationDate: string;

declare var AVMetadataCommonIdentifierCreator: string;

declare var AVMetadataCommonIdentifierDescription: string;

declare var AVMetadataCommonIdentifierFormat: string;

declare var AVMetadataCommonIdentifierLanguage: string;

declare var AVMetadataCommonIdentifierLastModifiedDate: string;

declare var AVMetadataCommonIdentifierLocation: string;

declare var AVMetadataCommonIdentifierMake: string;

declare var AVMetadataCommonIdentifierModel: string;

declare var AVMetadataCommonIdentifierPublisher: string;

declare var AVMetadataCommonIdentifierRelation: string;

declare var AVMetadataCommonIdentifierSoftware: string;

declare var AVMetadataCommonIdentifierSource: string;

declare var AVMetadataCommonIdentifierSubject: string;

declare var AVMetadataCommonIdentifierTitle: string;

declare var AVMetadataCommonIdentifierType: string;

declare var AVMetadataCommonKeyAlbumName: string;

declare var AVMetadataCommonKeyArtist: string;

declare var AVMetadataCommonKeyArtwork: string;

declare var AVMetadataCommonKeyAuthor: string;

declare var AVMetadataCommonKeyContributor: string;

declare var AVMetadataCommonKeyCopyrights: string;

declare var AVMetadataCommonKeyCreationDate: string;

declare var AVMetadataCommonKeyCreator: string;

declare var AVMetadataCommonKeyDescription: string;

declare var AVMetadataCommonKeyFormat: string;

declare var AVMetadataCommonKeyIdentifier: string;

declare var AVMetadataCommonKeyLanguage: string;

declare var AVMetadataCommonKeyLastModifiedDate: string;

declare var AVMetadataCommonKeyLocation: string;

declare var AVMetadataCommonKeyMake: string;

declare var AVMetadataCommonKeyModel: string;

declare var AVMetadataCommonKeyPublisher: string;

declare var AVMetadataCommonKeyRelation: string;

declare var AVMetadataCommonKeySoftware: string;

declare var AVMetadataCommonKeySource: string;

declare var AVMetadataCommonKeySubject: string;

declare var AVMetadataCommonKeyTitle: string;

declare var AVMetadataCommonKeyType: string;

declare class AVMetadataDogBodyObject extends AVMetadataBodyObject implements NSCopying {
}

declare var AVMetadataExtraAttributeBaseURIKey: string;

declare var AVMetadataExtraAttributeInfoKey: string;

declare var AVMetadataExtraAttributeValueURIKey: string;

declare class AVMetadataFaceObject extends AVMetadataObject implements NSCopying {
  readonly faceID: number;
  readonly hasRollAngle: boolean;
  readonly hasYawAngle: boolean;
  readonly rollAngle: number;
  readonly yawAngle: number;
}

declare var AVMetadataFormatHLSMetadata: string;

declare var AVMetadataFormatID3Metadata: string;

declare var AVMetadataFormatISOUserData: string;

declare var AVMetadataFormatQuickTimeMetadata: string;

declare var AVMetadataFormatQuickTimeUserData: string;

declare var AVMetadataFormatUnknown: string;

declare var AVMetadataFormatiTunesMetadata: string;

declare class AVMetadataGroup extends NSObject {
  readonly classifyingLabel: string;
  readonly items: NSArray<AVMetadataItem>;
  readonly uniqueID: string;
}

declare class AVMetadataHumanBodyObject extends AVMetadataBodyObject implements NSCopying {
}

declare var AVMetadataID3MetadataKeyAlbumSortOrder: string;

declare var AVMetadataID3MetadataKeyAlbumTitle: string;

declare var AVMetadataID3MetadataKeyAttachedPicture: string;

declare var AVMetadataID3MetadataKeyAudioEncryption: string;

declare var AVMetadataID3MetadataKeyAudioSeekPointIndex: string;

declare var AVMetadataID3MetadataKeyBand: string;

declare var AVMetadataID3MetadataKeyBeatsPerMinute: string;

declare var AVMetadataID3MetadataKeyComments: string;

declare var AVMetadataID3MetadataKeyCommercial: string;

declare var AVMetadataID3MetadataKeyCommercialInformation: string;

declare var AVMetadataID3MetadataKeyComposer: string;

declare var AVMetadataID3MetadataKeyConductor: string;

declare var AVMetadataID3MetadataKeyContentGroupDescription: string;

declare var AVMetadataID3MetadataKeyContentType: string;

declare var AVMetadataID3MetadataKeyCopyright: string;

declare var AVMetadataID3MetadataKeyCopyrightInformation: string;

declare var AVMetadataID3MetadataKeyDate: string;

declare var AVMetadataID3MetadataKeyEncodedBy: string;

declare var AVMetadataID3MetadataKeyEncodedWith: string;

declare var AVMetadataID3MetadataKeyEncodingTime: string;

declare var AVMetadataID3MetadataKeyEncryption: string;

declare var AVMetadataID3MetadataKeyEqualization: string;

declare var AVMetadataID3MetadataKeyEqualization2: string;

declare var AVMetadataID3MetadataKeyEventTimingCodes: string;

declare var AVMetadataID3MetadataKeyFileOwner: string;

declare var AVMetadataID3MetadataKeyFileType: string;

declare var AVMetadataID3MetadataKeyGeneralEncapsulatedObject: string;

declare var AVMetadataID3MetadataKeyGroupIdentifier: string;

declare var AVMetadataID3MetadataKeyInitialKey: string;

declare var AVMetadataID3MetadataKeyInternationalStandardRecordingCode: string;

declare var AVMetadataID3MetadataKeyInternetRadioStationName: string;

declare var AVMetadataID3MetadataKeyInternetRadioStationOwner: string;

declare var AVMetadataID3MetadataKeyInvolvedPeopleList_v23: string;

declare var AVMetadataID3MetadataKeyInvolvedPeopleList_v24: string;

declare var AVMetadataID3MetadataKeyLanguage: string;

declare var AVMetadataID3MetadataKeyLeadPerformer: string;

declare var AVMetadataID3MetadataKeyLength: string;

declare var AVMetadataID3MetadataKeyLink: string;

declare var AVMetadataID3MetadataKeyLyricist: string;

declare var AVMetadataID3MetadataKeyMPEGLocationLookupTable: string;

declare var AVMetadataID3MetadataKeyMediaType: string;

declare var AVMetadataID3MetadataKeyModifiedBy: string;

declare var AVMetadataID3MetadataKeyMood: string;

declare var AVMetadataID3MetadataKeyMusicCDIdentifier: string;

declare var AVMetadataID3MetadataKeyMusicianCreditsList: string;

declare var AVMetadataID3MetadataKeyOfficialArtistWebpage: string;

declare var AVMetadataID3MetadataKeyOfficialAudioFileWebpage: string;

declare var AVMetadataID3MetadataKeyOfficialAudioSourceWebpage: string;

declare var AVMetadataID3MetadataKeyOfficialInternetRadioStationHomepage: string;

declare var AVMetadataID3MetadataKeyOfficialPublisherWebpage: string;

declare var AVMetadataID3MetadataKeyOriginalAlbumTitle: string;

declare var AVMetadataID3MetadataKeyOriginalArtist: string;

declare var AVMetadataID3MetadataKeyOriginalFilename: string;

declare var AVMetadataID3MetadataKeyOriginalLyricist: string;

declare var AVMetadataID3MetadataKeyOriginalReleaseTime: string;

declare var AVMetadataID3MetadataKeyOriginalReleaseYear: string;

declare var AVMetadataID3MetadataKeyOwnership: string;

declare var AVMetadataID3MetadataKeyPartOfASet: string;

declare var AVMetadataID3MetadataKeyPayment: string;

declare var AVMetadataID3MetadataKeyPerformerSortOrder: string;

declare var AVMetadataID3MetadataKeyPlayCounter: string;

declare var AVMetadataID3MetadataKeyPlaylistDelay: string;

declare var AVMetadataID3MetadataKeyPopularimeter: string;

declare var AVMetadataID3MetadataKeyPositionSynchronization: string;

declare var AVMetadataID3MetadataKeyPrivate: string;

declare var AVMetadataID3MetadataKeyProducedNotice: string;

declare var AVMetadataID3MetadataKeyPublisher: string;

declare var AVMetadataID3MetadataKeyRecommendedBufferSize: string;

declare var AVMetadataID3MetadataKeyRecordingDates: string;

declare var AVMetadataID3MetadataKeyRecordingTime: string;

declare var AVMetadataID3MetadataKeyRelativeVolumeAdjustment: string;

declare var AVMetadataID3MetadataKeyRelativeVolumeAdjustment2: string;

declare var AVMetadataID3MetadataKeyReleaseTime: string;

declare var AVMetadataID3MetadataKeyReverb: string;

declare var AVMetadataID3MetadataKeySeek: string;

declare var AVMetadataID3MetadataKeySetSubtitle: string;

declare var AVMetadataID3MetadataKeySignature: string;

declare var AVMetadataID3MetadataKeySize: string;

declare var AVMetadataID3MetadataKeySubTitle: string;

declare var AVMetadataID3MetadataKeySynchronizedLyric: string;

declare var AVMetadataID3MetadataKeySynchronizedTempoCodes: string;

declare var AVMetadataID3MetadataKeyTaggingTime: string;

declare var AVMetadataID3MetadataKeyTermsOfUse: string;

declare var AVMetadataID3MetadataKeyTime: string;

declare var AVMetadataID3MetadataKeyTitleDescription: string;

declare var AVMetadataID3MetadataKeyTitleSortOrder: string;

declare var AVMetadataID3MetadataKeyTrackNumber: string;

declare var AVMetadataID3MetadataKeyUniqueFileIdentifier: string;

declare var AVMetadataID3MetadataKeyUnsynchronizedLyric: string;

declare var AVMetadataID3MetadataKeyUserText: string;

declare var AVMetadataID3MetadataKeyUserURL: string;

declare var AVMetadataID3MetadataKeyYear: string;

declare var AVMetadataISOUserDataKeyCopyright: string;

declare var AVMetadataISOUserDataKeyDate: string;

declare var AVMetadataISOUserDataKeyTaggedCharacteristic: string;

declare var AVMetadataIcyMetadataKeyStreamTitle: string;

declare var AVMetadataIcyMetadataKeyStreamURL: string;

declare var AVMetadataIdentifier3GPUserDataAlbumAndTrack: string;

declare var AVMetadataIdentifier3GPUserDataAuthor: string;

declare var AVMetadataIdentifier3GPUserDataCollection: string;

declare var AVMetadataIdentifier3GPUserDataCopyright: string;

declare var AVMetadataIdentifier3GPUserDataDescription: string;

declare var AVMetadataIdentifier3GPUserDataGenre: string;

declare var AVMetadataIdentifier3GPUserDataKeywordList: string;

declare var AVMetadataIdentifier3GPUserDataLocation: string;

declare var AVMetadataIdentifier3GPUserDataMediaClassification: string;

declare var AVMetadataIdentifier3GPUserDataMediaRating: string;

declare var AVMetadataIdentifier3GPUserDataPerformer: string;

declare var AVMetadataIdentifier3GPUserDataRecordingYear: string;

declare var AVMetadataIdentifier3GPUserDataThumbnail: string;

declare var AVMetadataIdentifier3GPUserDataTitle: string;

declare var AVMetadataIdentifier3GPUserDataUserRating: string;

declare var AVMetadataIdentifierID3MetadataAlbumSortOrder: string;

declare var AVMetadataIdentifierID3MetadataAlbumTitle: string;

declare var AVMetadataIdentifierID3MetadataAttachedPicture: string;

declare var AVMetadataIdentifierID3MetadataAudioEncryption: string;

declare var AVMetadataIdentifierID3MetadataAudioSeekPointIndex: string;

declare var AVMetadataIdentifierID3MetadataBand: string;

declare var AVMetadataIdentifierID3MetadataBeatsPerMinute: string;

declare var AVMetadataIdentifierID3MetadataComments: string;

declare var AVMetadataIdentifierID3MetadataCommercial: string;

declare var AVMetadataIdentifierID3MetadataCommercialInformation: string;

declare var AVMetadataIdentifierID3MetadataComposer: string;

declare var AVMetadataIdentifierID3MetadataConductor: string;

declare var AVMetadataIdentifierID3MetadataContentGroupDescription: string;

declare var AVMetadataIdentifierID3MetadataContentType: string;

declare var AVMetadataIdentifierID3MetadataCopyright: string;

declare var AVMetadataIdentifierID3MetadataCopyrightInformation: string;

declare var AVMetadataIdentifierID3MetadataDate: string;

declare var AVMetadataIdentifierID3MetadataEncodedBy: string;

declare var AVMetadataIdentifierID3MetadataEncodedWith: string;

declare var AVMetadataIdentifierID3MetadataEncodingTime: string;

declare var AVMetadataIdentifierID3MetadataEncryption: string;

declare var AVMetadataIdentifierID3MetadataEqualization: string;

declare var AVMetadataIdentifierID3MetadataEqualization2: string;

declare var AVMetadataIdentifierID3MetadataEventTimingCodes: string;

declare var AVMetadataIdentifierID3MetadataFileOwner: string;

declare var AVMetadataIdentifierID3MetadataFileType: string;

declare var AVMetadataIdentifierID3MetadataGeneralEncapsulatedObject: string;

declare var AVMetadataIdentifierID3MetadataGroupIdentifier: string;

declare var AVMetadataIdentifierID3MetadataInitialKey: string;

declare var AVMetadataIdentifierID3MetadataInternationalStandardRecordingCode: string;

declare var AVMetadataIdentifierID3MetadataInternetRadioStationName: string;

declare var AVMetadataIdentifierID3MetadataInternetRadioStationOwner: string;

declare var AVMetadataIdentifierID3MetadataInvolvedPeopleList_v23: string;

declare var AVMetadataIdentifierID3MetadataInvolvedPeopleList_v24: string;

declare var AVMetadataIdentifierID3MetadataLanguage: string;

declare var AVMetadataIdentifierID3MetadataLeadPerformer: string;

declare var AVMetadataIdentifierID3MetadataLength: string;

declare var AVMetadataIdentifierID3MetadataLink: string;

declare var AVMetadataIdentifierID3MetadataLyricist: string;

declare var AVMetadataIdentifierID3MetadataMPEGLocationLookupTable: string;

declare var AVMetadataIdentifierID3MetadataMediaType: string;

declare var AVMetadataIdentifierID3MetadataModifiedBy: string;

declare var AVMetadataIdentifierID3MetadataMood: string;

declare var AVMetadataIdentifierID3MetadataMusicCDIdentifier: string;

declare var AVMetadataIdentifierID3MetadataMusicianCreditsList: string;

declare var AVMetadataIdentifierID3MetadataOfficialArtistWebpage: string;

declare var AVMetadataIdentifierID3MetadataOfficialAudioFileWebpage: string;

declare var AVMetadataIdentifierID3MetadataOfficialAudioSourceWebpage: string;

declare var AVMetadataIdentifierID3MetadataOfficialInternetRadioStationHomepage: string;

declare var AVMetadataIdentifierID3MetadataOfficialPublisherWebpage: string;

declare var AVMetadataIdentifierID3MetadataOriginalAlbumTitle: string;

declare var AVMetadataIdentifierID3MetadataOriginalArtist: string;

declare var AVMetadataIdentifierID3MetadataOriginalFilename: string;

declare var AVMetadataIdentifierID3MetadataOriginalLyricist: string;

declare var AVMetadataIdentifierID3MetadataOriginalReleaseTime: string;

declare var AVMetadataIdentifierID3MetadataOriginalReleaseYear: string;

declare var AVMetadataIdentifierID3MetadataOwnership: string;

declare var AVMetadataIdentifierID3MetadataPartOfASet: string;

declare var AVMetadataIdentifierID3MetadataPayment: string;

declare var AVMetadataIdentifierID3MetadataPerformerSortOrder: string;

declare var AVMetadataIdentifierID3MetadataPlayCounter: string;

declare var AVMetadataIdentifierID3MetadataPlaylistDelay: string;

declare var AVMetadataIdentifierID3MetadataPopularimeter: string;

declare var AVMetadataIdentifierID3MetadataPositionSynchronization: string;

declare var AVMetadataIdentifierID3MetadataPrivate: string;

declare var AVMetadataIdentifierID3MetadataProducedNotice: string;

declare var AVMetadataIdentifierID3MetadataPublisher: string;

declare var AVMetadataIdentifierID3MetadataRecommendedBufferSize: string;

declare var AVMetadataIdentifierID3MetadataRecordingDates: string;

declare var AVMetadataIdentifierID3MetadataRecordingTime: string;

declare var AVMetadataIdentifierID3MetadataRelativeVolumeAdjustment: string;

declare var AVMetadataIdentifierID3MetadataRelativeVolumeAdjustment2: string;

declare var AVMetadataIdentifierID3MetadataReleaseTime: string;

declare var AVMetadataIdentifierID3MetadataReverb: string;

declare var AVMetadataIdentifierID3MetadataSeek: string;

declare var AVMetadataIdentifierID3MetadataSetSubtitle: string;

declare var AVMetadataIdentifierID3MetadataSignature: string;

declare var AVMetadataIdentifierID3MetadataSize: string;

declare var AVMetadataIdentifierID3MetadataSubTitle: string;

declare var AVMetadataIdentifierID3MetadataSynchronizedLyric: string;

declare var AVMetadataIdentifierID3MetadataSynchronizedTempoCodes: string;

declare var AVMetadataIdentifierID3MetadataTaggingTime: string;

declare var AVMetadataIdentifierID3MetadataTermsOfUse: string;

declare var AVMetadataIdentifierID3MetadataTime: string;

declare var AVMetadataIdentifierID3MetadataTitleDescription: string;

declare var AVMetadataIdentifierID3MetadataTitleSortOrder: string;

declare var AVMetadataIdentifierID3MetadataTrackNumber: string;

declare var AVMetadataIdentifierID3MetadataUniqueFileIdentifier: string;

declare var AVMetadataIdentifierID3MetadataUnsynchronizedLyric: string;

declare var AVMetadataIdentifierID3MetadataUserText: string;

declare var AVMetadataIdentifierID3MetadataUserURL: string;

declare var AVMetadataIdentifierID3MetadataYear: string;

declare var AVMetadataIdentifierISOUserDataCopyright: string;

declare var AVMetadataIdentifierISOUserDataDate: string;

declare var AVMetadataIdentifierISOUserDataTaggedCharacteristic: string;

declare var AVMetadataIdentifierIcyMetadataStreamTitle: string;

declare var AVMetadataIdentifierIcyMetadataStreamURL: string;

declare var AVMetadataIdentifierQuickTimeMetadataAlbum: string;

declare var AVMetadataIdentifierQuickTimeMetadataArranger: string;

declare var AVMetadataIdentifierQuickTimeMetadataArtist: string;

declare var AVMetadataIdentifierQuickTimeMetadataArtwork: string;

declare var AVMetadataIdentifierQuickTimeMetadataAuthor: string;

declare var AVMetadataIdentifierQuickTimeMetadataAutoLivePhoto: string;

declare var AVMetadataIdentifierQuickTimeMetadataCameraFrameReadoutTime: string;

declare var AVMetadataIdentifierQuickTimeMetadataCameraIdentifier: string;

declare var AVMetadataIdentifierQuickTimeMetadataCollectionUser: string;

declare var AVMetadataIdentifierQuickTimeMetadataComment: string;

declare var AVMetadataIdentifierQuickTimeMetadataComposer: string;

declare var AVMetadataIdentifierQuickTimeMetadataContentIdentifier: string;

declare var AVMetadataIdentifierQuickTimeMetadataCopyright: string;

declare var AVMetadataIdentifierQuickTimeMetadataCreationDate: string;

declare var AVMetadataIdentifierQuickTimeMetadataCredits: string;

declare var AVMetadataIdentifierQuickTimeMetadataDescription: string;

declare var AVMetadataIdentifierQuickTimeMetadataDetectedCatBody: string;

declare var AVMetadataIdentifierQuickTimeMetadataDetectedDogBody: string;

declare var AVMetadataIdentifierQuickTimeMetadataDetectedFace: string;

declare var AVMetadataIdentifierQuickTimeMetadataDetectedHumanBody: string;

declare var AVMetadataIdentifierQuickTimeMetadataDetectedSalientObject: string;

declare var AVMetadataIdentifierQuickTimeMetadataDirectionFacing: string;

declare var AVMetadataIdentifierQuickTimeMetadataDirectionMotion: string;

declare var AVMetadataIdentifierQuickTimeMetadataDirector: string;

declare var AVMetadataIdentifierQuickTimeMetadataDisplayName: string;

declare var AVMetadataIdentifierQuickTimeMetadataEncodedBy: string;

declare var AVMetadataIdentifierQuickTimeMetadataGenre: string;

declare var AVMetadataIdentifierQuickTimeMetadataInformation: string;

declare var AVMetadataIdentifierQuickTimeMetadataKeywords: string;

declare var AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScore: string;

declare var AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScoringVersion: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationBody: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationDate: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationISO6709: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationName: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationNote: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationRole: string;

declare var AVMetadataIdentifierQuickTimeMetadataMake: string;

declare var AVMetadataIdentifierQuickTimeMetadataModel: string;

declare var AVMetadataIdentifierQuickTimeMetadataOriginalArtist: string;

declare var AVMetadataIdentifierQuickTimeMetadataPerformer: string;

declare var AVMetadataIdentifierQuickTimeMetadataPhonogramRights: string;

declare var AVMetadataIdentifierQuickTimeMetadataPreferredAffineTransform: string;

declare var AVMetadataIdentifierQuickTimeMetadataProducer: string;

declare var AVMetadataIdentifierQuickTimeMetadataPublisher: string;

declare var AVMetadataIdentifierQuickTimeMetadataRatingUser: string;

declare var AVMetadataIdentifierQuickTimeMetadataSoftware: string;

declare var AVMetadataIdentifierQuickTimeMetadataSpatialOverCaptureQualityScore: string;

declare var AVMetadataIdentifierQuickTimeMetadataSpatialOverCaptureQualityScoringVersion: string;

declare var AVMetadataIdentifierQuickTimeMetadataTitle: string;

declare var AVMetadataIdentifierQuickTimeMetadataVideoOrientation: string;

declare var AVMetadataIdentifierQuickTimeMetadataYear: string;

declare var AVMetadataIdentifierQuickTimeMetadataiXML: string;

declare var AVMetadataIdentifierQuickTimeUserDataAlbum: string;

declare var AVMetadataIdentifierQuickTimeUserDataArranger: string;

declare var AVMetadataIdentifierQuickTimeUserDataArtist: string;

declare var AVMetadataIdentifierQuickTimeUserDataAuthor: string;

declare var AVMetadataIdentifierQuickTimeUserDataChapter: string;

declare var AVMetadataIdentifierQuickTimeUserDataComment: string;

declare var AVMetadataIdentifierQuickTimeUserDataComposer: string;

declare var AVMetadataIdentifierQuickTimeUserDataCopyright: string;

declare var AVMetadataIdentifierQuickTimeUserDataCreationDate: string;

declare var AVMetadataIdentifierQuickTimeUserDataCredits: string;

declare var AVMetadataIdentifierQuickTimeUserDataDescription: string;

declare var AVMetadataIdentifierQuickTimeUserDataDirector: string;

declare var AVMetadataIdentifierQuickTimeUserDataDisclaimer: string;

declare var AVMetadataIdentifierQuickTimeUserDataEncodedBy: string;

declare var AVMetadataIdentifierQuickTimeUserDataFullName: string;

declare var AVMetadataIdentifierQuickTimeUserDataGenre: string;

declare var AVMetadataIdentifierQuickTimeUserDataHostComputer: string;

declare var AVMetadataIdentifierQuickTimeUserDataInformation: string;

declare var AVMetadataIdentifierQuickTimeUserDataKeywords: string;

declare var AVMetadataIdentifierQuickTimeUserDataLocationISO6709: string;

declare var AVMetadataIdentifierQuickTimeUserDataMake: string;

declare var AVMetadataIdentifierQuickTimeUserDataModel: string;

declare var AVMetadataIdentifierQuickTimeUserDataOriginalArtist: string;

declare var AVMetadataIdentifierQuickTimeUserDataOriginalFormat: string;

declare var AVMetadataIdentifierQuickTimeUserDataOriginalSource: string;

declare var AVMetadataIdentifierQuickTimeUserDataPerformers: string;

declare var AVMetadataIdentifierQuickTimeUserDataPhonogramRights: string;

declare var AVMetadataIdentifierQuickTimeUserDataProducer: string;

declare var AVMetadataIdentifierQuickTimeUserDataProduct: string;

declare var AVMetadataIdentifierQuickTimeUserDataPublisher: string;

declare var AVMetadataIdentifierQuickTimeUserDataSoftware: string;

declare var AVMetadataIdentifierQuickTimeUserDataSpecialPlaybackRequirements: string;

declare var AVMetadataIdentifierQuickTimeUserDataTaggedCharacteristic: string;

declare var AVMetadataIdentifierQuickTimeUserDataTrack: string;

declare var AVMetadataIdentifierQuickTimeUserDataTrackName: string;

declare var AVMetadataIdentifierQuickTimeUserDataURLLink: string;

declare var AVMetadataIdentifierQuickTimeUserDataWarning: string;

declare var AVMetadataIdentifierQuickTimeUserDataWriter: string;

declare var AVMetadataIdentifieriTunesMetadataAccountKind: string;

declare var AVMetadataIdentifieriTunesMetadataAcknowledgement: string;

declare var AVMetadataIdentifieriTunesMetadataAlbum: string;

declare var AVMetadataIdentifieriTunesMetadataAlbumArtist: string;

declare var AVMetadataIdentifieriTunesMetadataAppleID: string;

declare var AVMetadataIdentifieriTunesMetadataArranger: string;

declare var AVMetadataIdentifieriTunesMetadataArtDirector: string;

declare var AVMetadataIdentifieriTunesMetadataArtist: string;

declare var AVMetadataIdentifieriTunesMetadataArtistID: string;

declare var AVMetadataIdentifieriTunesMetadataAuthor: string;

declare var AVMetadataIdentifieriTunesMetadataBeatsPerMin: string;

declare var AVMetadataIdentifieriTunesMetadataComposer: string;

declare var AVMetadataIdentifieriTunesMetadataConductor: string;

declare var AVMetadataIdentifieriTunesMetadataContentRating: string;

declare var AVMetadataIdentifieriTunesMetadataCopyright: string;

declare var AVMetadataIdentifieriTunesMetadataCoverArt: string;

declare var AVMetadataIdentifieriTunesMetadataCredits: string;

declare var AVMetadataIdentifieriTunesMetadataDescription: string;

declare var AVMetadataIdentifieriTunesMetadataDirector: string;

declare var AVMetadataIdentifieriTunesMetadataDiscCompilation: string;

declare var AVMetadataIdentifieriTunesMetadataDiscNumber: string;

declare var AVMetadataIdentifieriTunesMetadataEQ: string;

declare var AVMetadataIdentifieriTunesMetadataEncodedBy: string;

declare var AVMetadataIdentifieriTunesMetadataEncodingTool: string;

declare var AVMetadataIdentifieriTunesMetadataExecProducer: string;

declare var AVMetadataIdentifieriTunesMetadataGenreID: string;

declare var AVMetadataIdentifieriTunesMetadataGrouping: string;

declare var AVMetadataIdentifieriTunesMetadataLinerNotes: string;

declare var AVMetadataIdentifieriTunesMetadataLyrics: string;

declare var AVMetadataIdentifieriTunesMetadataOnlineExtras: string;

declare var AVMetadataIdentifieriTunesMetadataOriginalArtist: string;

declare var AVMetadataIdentifieriTunesMetadataPerformer: string;

declare var AVMetadataIdentifieriTunesMetadataPhonogramRights: string;

declare var AVMetadataIdentifieriTunesMetadataPlaylistID: string;

declare var AVMetadataIdentifieriTunesMetadataPredefinedGenre: string;

declare var AVMetadataIdentifieriTunesMetadataProducer: string;

declare var AVMetadataIdentifieriTunesMetadataPublisher: string;

declare var AVMetadataIdentifieriTunesMetadataRecordCompany: string;

declare var AVMetadataIdentifieriTunesMetadataReleaseDate: string;

declare var AVMetadataIdentifieriTunesMetadataSoloist: string;

declare var AVMetadataIdentifieriTunesMetadataSongID: string;

declare var AVMetadataIdentifieriTunesMetadataSongName: string;

declare var AVMetadataIdentifieriTunesMetadataSoundEngineer: string;

declare var AVMetadataIdentifieriTunesMetadataThanks: string;

declare var AVMetadataIdentifieriTunesMetadataTrackNumber: string;

declare var AVMetadataIdentifieriTunesMetadataTrackSubTitle: string;

declare var AVMetadataIdentifieriTunesMetadataUserComment: string;

declare var AVMetadataIdentifieriTunesMetadataUserGenre: string;

declare class AVMetadataItem extends NSObject implements AVAsynchronousKeyValueLoading, NSCopying, NSMutableCopying {
  static identifierForKeyKeySpace(forKey: any, keySpace: string): string;
  static keyForIdentifier(forIdentifier: string): any;
  static keySpaceForIdentifier(forIdentifier: string): string;
  static metadataItemsFromArrayFilteredAndSortedAccordingToPreferredLanguages(from: NSArray<AVMetadataItem>, filteredAndSortedAccordingToPreferredLanguages: NSArray<string>): NSArray<AVMetadataItem>;
  static metadataItemsFromArrayFilteredByIdentifier(from: NSArray<AVMetadataItem>, filteredByIdentifier: string): NSArray<AVMetadataItem>;
  static metadataItemsFromArrayFilteredByMetadataItemFilter(from: NSArray<AVMetadataItem>, filteredBy: AVMetadataItemFilter): NSArray<AVMetadataItem>;
  static metadataItemsFromArrayWithKeyKeySpace(from: NSArray<AVMetadataItem>, withKey?: any, keySpace?: string): NSArray<AVMetadataItem>;
  static metadataItemsFromArrayWithLocale(from: NSArray<AVMetadataItem>, with_: Locale): NSArray<AVMetadataItem>;
  readonly commonKey: string;
  readonly dataType: string;
  readonly dataValue: Data;
  readonly dateValue: Date;
  readonly duration: CMTime;
  readonly extendedLanguageTag: string;
  readonly extraAttributes: NSDictionary<string, any>;
  readonly identifier: string;
  readonly key: any;
  readonly keySpace: string;
  readonly locale: Locale;
  readonly numberValue: number;
  readonly startDate: Date;
  readonly stringValue: string;
  readonly time: CMTime;
  readonly value: any;
  loadValuesAsynchronouslyForKeysCompletionHandler(forKeys: NSArray<string>, completionHandler?: () => void): void;
  statusOfValueForKeyError(forKey: string): AVKeyValueStatus;
}

declare class AVMetadataItemFilter extends NSObject {
  static metadataItemFilterForSharing(): AVMetadataItemFilter;
}

declare class AVMetadataItemValueRequest extends NSObject {
  readonly metadataItem: AVMetadataItem;
  respondWithError(error: Error): void;
  respondWithValue(value: any): void;
}

declare var AVMetadataKeySpaceAudioFile: string;

declare var AVMetadataKeySpaceCommon: string;

declare var AVMetadataKeySpaceHLSDateRange: string;

declare var AVMetadataKeySpaceID3: string;

declare var AVMetadataKeySpaceISOUserData: string;

declare var AVMetadataKeySpaceIcy: string;

declare var AVMetadataKeySpaceQuickTimeMetadata: string;

declare var AVMetadataKeySpaceQuickTimeUserData: string;

declare var AVMetadataKeySpaceiTunes: string;

declare class AVMetadataMachineReadableCodeObject extends AVMetadataObject {
  readonly corners: NSArray<NSDictionary<any, any>>;
  readonly descriptor: CIBarcodeDescriptor;
  readonly stringValue: string;
}

declare class AVMetadataObject extends NSObject {
  readonly bounds: NSRect;
  readonly duration: CMTime;
  readonly time: CMTime;
  readonly type: string;
}

declare var AVMetadataObjectTypeAztecCode: string;

declare var AVMetadataObjectTypeCatBody: string;

declare var AVMetadataObjectTypeCode128Code: string;

declare var AVMetadataObjectTypeCode39Code: string;

declare var AVMetadataObjectTypeCode39Mod43Code: string;

declare var AVMetadataObjectTypeCode93Code: string;

declare var AVMetadataObjectTypeDataMatrixCode: string;

declare var AVMetadataObjectTypeDogBody: string;

declare var AVMetadataObjectTypeEAN13Code: string;

declare var AVMetadataObjectTypeEAN8Code: string;

declare var AVMetadataObjectTypeFace: string;

declare var AVMetadataObjectTypeHumanBody: string;

declare var AVMetadataObjectTypeITF14Code: string;

declare var AVMetadataObjectTypeInterleaved2of5Code: string;

declare var AVMetadataObjectTypePDF417Code: string;

declare var AVMetadataObjectTypeQRCode: string;

declare var AVMetadataObjectTypeSalientObject: string;

declare var AVMetadataObjectTypeUPCECode: string;

declare var AVMetadataQuickTimeMetadataKeyAlbum: string;

declare var AVMetadataQuickTimeMetadataKeyArranger: string;

declare var AVMetadataQuickTimeMetadataKeyArtist: string;

declare var AVMetadataQuickTimeMetadataKeyArtwork: string;

declare var AVMetadataQuickTimeMetadataKeyAuthor: string;

declare var AVMetadataQuickTimeMetadataKeyCameraFrameReadoutTime: string;

declare var AVMetadataQuickTimeMetadataKeyCameraIdentifier: string;

declare var AVMetadataQuickTimeMetadataKeyCollectionUser: string;

declare var AVMetadataQuickTimeMetadataKeyComment: string;

declare var AVMetadataQuickTimeMetadataKeyComposer: string;

declare var AVMetadataQuickTimeMetadataKeyContentIdentifier: string;

declare var AVMetadataQuickTimeMetadataKeyCopyright: string;

declare var AVMetadataQuickTimeMetadataKeyCreationDate: string;

declare var AVMetadataQuickTimeMetadataKeyCredits: string;

declare var AVMetadataQuickTimeMetadataKeyDescription: string;

declare var AVMetadataQuickTimeMetadataKeyDirectionFacing: string;

declare var AVMetadataQuickTimeMetadataKeyDirectionMotion: string;

declare var AVMetadataQuickTimeMetadataKeyDirector: string;

declare var AVMetadataQuickTimeMetadataKeyDisplayName: string;

declare var AVMetadataQuickTimeMetadataKeyEncodedBy: string;

declare var AVMetadataQuickTimeMetadataKeyGenre: string;

declare var AVMetadataQuickTimeMetadataKeyInformation: string;

declare var AVMetadataQuickTimeMetadataKeyKeywords: string;

declare var AVMetadataQuickTimeMetadataKeyLocationBody: string;

declare var AVMetadataQuickTimeMetadataKeyLocationDate: string;

declare var AVMetadataQuickTimeMetadataKeyLocationISO6709: string;

declare var AVMetadataQuickTimeMetadataKeyLocationName: string;

declare var AVMetadataQuickTimeMetadataKeyLocationNote: string;

declare var AVMetadataQuickTimeMetadataKeyLocationRole: string;

declare var AVMetadataQuickTimeMetadataKeyMake: string;

declare var AVMetadataQuickTimeMetadataKeyModel: string;

declare var AVMetadataQuickTimeMetadataKeyOriginalArtist: string;

declare var AVMetadataQuickTimeMetadataKeyPerformer: string;

declare var AVMetadataQuickTimeMetadataKeyPhonogramRights: string;

declare var AVMetadataQuickTimeMetadataKeyProducer: string;

declare var AVMetadataQuickTimeMetadataKeyPublisher: string;

declare var AVMetadataQuickTimeMetadataKeyRatingUser: string;

declare var AVMetadataQuickTimeMetadataKeySoftware: string;

declare var AVMetadataQuickTimeMetadataKeyTitle: string;

declare var AVMetadataQuickTimeMetadataKeyYear: string;

declare var AVMetadataQuickTimeMetadataKeyiXML: string;

declare var AVMetadataQuickTimeUserDataKeyAlbum: string;

declare var AVMetadataQuickTimeUserDataKeyArranger: string;

declare var AVMetadataQuickTimeUserDataKeyArtist: string;

declare var AVMetadataQuickTimeUserDataKeyAuthor: string;

declare var AVMetadataQuickTimeUserDataKeyChapter: string;

declare var AVMetadataQuickTimeUserDataKeyComment: string;

declare var AVMetadataQuickTimeUserDataKeyComposer: string;

declare var AVMetadataQuickTimeUserDataKeyCopyright: string;

declare var AVMetadataQuickTimeUserDataKeyCreationDate: string;

declare var AVMetadataQuickTimeUserDataKeyCredits: string;

declare var AVMetadataQuickTimeUserDataKeyDescription: string;

declare var AVMetadataQuickTimeUserDataKeyDirector: string;

declare var AVMetadataQuickTimeUserDataKeyDisclaimer: string;

declare var AVMetadataQuickTimeUserDataKeyEncodedBy: string;

declare var AVMetadataQuickTimeUserDataKeyFullName: string;

declare var AVMetadataQuickTimeUserDataKeyGenre: string;

declare var AVMetadataQuickTimeUserDataKeyHostComputer: string;

declare var AVMetadataQuickTimeUserDataKeyInformation: string;

declare var AVMetadataQuickTimeUserDataKeyKeywords: string;

declare var AVMetadataQuickTimeUserDataKeyLocationISO6709: string;

declare var AVMetadataQuickTimeUserDataKeyMake: string;

declare var AVMetadataQuickTimeUserDataKeyModel: string;

declare var AVMetadataQuickTimeUserDataKeyOriginalArtist: string;

declare var AVMetadataQuickTimeUserDataKeyOriginalFormat: string;

declare var AVMetadataQuickTimeUserDataKeyOriginalSource: string;

declare var AVMetadataQuickTimeUserDataKeyPerformers: string;

declare var AVMetadataQuickTimeUserDataKeyPhonogramRights: string;

declare var AVMetadataQuickTimeUserDataKeyProducer: string;

declare var AVMetadataQuickTimeUserDataKeyProduct: string;

declare var AVMetadataQuickTimeUserDataKeyPublisher: string;

declare var AVMetadataQuickTimeUserDataKeySoftware: string;

declare var AVMetadataQuickTimeUserDataKeySpecialPlaybackRequirements: string;

declare var AVMetadataQuickTimeUserDataKeyTaggedCharacteristic: string;

declare var AVMetadataQuickTimeUserDataKeyTrack: string;

declare var AVMetadataQuickTimeUserDataKeyTrackName: string;

declare var AVMetadataQuickTimeUserDataKeyURLLink: string;

declare var AVMetadataQuickTimeUserDataKeyWarning: string;

declare var AVMetadataQuickTimeUserDataKeyWriter: string;

declare class AVMetadataSalientObject extends AVMetadataObject implements NSCopying {
  readonly objectID: number;
}

declare var AVMetadataiTunesMetadataKeyAccountKind: string;

declare var AVMetadataiTunesMetadataKeyAcknowledgement: string;

declare var AVMetadataiTunesMetadataKeyAlbum: string;

declare var AVMetadataiTunesMetadataKeyAlbumArtist: string;

declare var AVMetadataiTunesMetadataKeyAppleID: string;

declare var AVMetadataiTunesMetadataKeyArranger: string;

declare var AVMetadataiTunesMetadataKeyArtDirector: string;

declare var AVMetadataiTunesMetadataKeyArtist: string;

declare var AVMetadataiTunesMetadataKeyArtistID: string;

declare var AVMetadataiTunesMetadataKeyAuthor: string;

declare var AVMetadataiTunesMetadataKeyBeatsPerMin: string;

declare var AVMetadataiTunesMetadataKeyComposer: string;

declare var AVMetadataiTunesMetadataKeyConductor: string;

declare var AVMetadataiTunesMetadataKeyContentRating: string;

declare var AVMetadataiTunesMetadataKeyCopyright: string;

declare var AVMetadataiTunesMetadataKeyCoverArt: string;

declare var AVMetadataiTunesMetadataKeyCredits: string;

declare var AVMetadataiTunesMetadataKeyDescription: string;

declare var AVMetadataiTunesMetadataKeyDirector: string;

declare var AVMetadataiTunesMetadataKeyDiscCompilation: string;

declare var AVMetadataiTunesMetadataKeyDiscNumber: string;

declare var AVMetadataiTunesMetadataKeyEQ: string;

declare var AVMetadataiTunesMetadataKeyEncodedBy: string;

declare var AVMetadataiTunesMetadataKeyEncodingTool: string;

declare var AVMetadataiTunesMetadataKeyExecProducer: string;

declare var AVMetadataiTunesMetadataKeyGenreID: string;

declare var AVMetadataiTunesMetadataKeyGrouping: string;

declare var AVMetadataiTunesMetadataKeyLinerNotes: string;

declare var AVMetadataiTunesMetadataKeyLyrics: string;

declare var AVMetadataiTunesMetadataKeyOnlineExtras: string;

declare var AVMetadataiTunesMetadataKeyOriginalArtist: string;

declare var AVMetadataiTunesMetadataKeyPerformer: string;

declare var AVMetadataiTunesMetadataKeyPhonogramRights: string;

declare var AVMetadataiTunesMetadataKeyPlaylistID: string;

declare var AVMetadataiTunesMetadataKeyPredefinedGenre: string;

declare var AVMetadataiTunesMetadataKeyProducer: string;

declare var AVMetadataiTunesMetadataKeyPublisher: string;

declare var AVMetadataiTunesMetadataKeyRecordCompany: string;

declare var AVMetadataiTunesMetadataKeyReleaseDate: string;

declare var AVMetadataiTunesMetadataKeySoloist: string;

declare var AVMetadataiTunesMetadataKeySongID: string;

declare var AVMetadataiTunesMetadataKeySongName: string;

declare var AVMetadataiTunesMetadataKeySoundEngineer: string;

declare var AVMetadataiTunesMetadataKeyThanks: string;

declare var AVMetadataiTunesMetadataKeyTrackNumber: string;

declare var AVMetadataiTunesMetadataKeyTrackSubTitle: string;

declare var AVMetadataiTunesMetadataKeyUserComment: string;

declare var AVMetadataiTunesMetadataKeyUserGenre: string;

declare class AVMovie extends AVAsset implements NSCopying, NSMutableCopying {
  static movieTypes(): NSArray<string>;
  readonly URL: NSURL;
  readonly canContainMovieFragments: boolean;
  readonly containsMovieFragments: boolean;
  readonly data: Data;
  readonly defaultMediaDataStorage: AVMediaDataStorage;
  static createWithDataOptions(data: Data, options?: NSDictionary<string, any>): this;
  static createWithUrlOptions(URL: NSURL, options?: NSDictionary<string, any>): this;
  isCompatibleWithFileType(compatibleWithFileType: string): boolean;
  movieHeaderWithFileTypeError(fileType: string): Data;
  trackWithTrackID(withTrackID: number): AVMovieTrack;
  writeMovieHeaderToURLFileTypeOptionsError(fileType: NSURL, options: string, error: AVMovieWritingOptions): boolean;
}

declare var AVMovieReferenceRestrictionsKey: string;

declare class AVMovieTrack extends AVAssetTrack {
  readonly alternateGroupID: number;
  readonly mediaDataStorage: AVMediaDataStorage;
  readonly mediaDecodeTimeRange: CMTimeRange;
  readonly mediaPresentationTimeRange: CMTimeRange;
}

declare class AVMusicTrack extends NSObject {
  destinationAudioUnit: AVAudioUnit;
  setDestinationAudioUnit(_: AVAudioUnit)
  destinationMIDIEndpoint: number;
  setDestinationMIDIEndpoint(_: number)
  lengthInBeats: number;
  setLengthInBeats(_: number)
  lengthInSeconds: number;
  setLengthInSeconds(_: number)
  loopRange: AVBeatRange;
  setLoopRange(_: AVBeatRange)
  isLoopingEnabled: boolean;
  setLoopingEnabled(_: boolean)
  isMuted: boolean;
  setMuted(_: boolean)
  numberOfLoops: number;
  setNumberOfLoops(_: number)
  offsetTime: number;
  setOffsetTime(_: number)
  isSoloed: boolean;
  setSoloed(_: boolean)
  readonly timeResolution: number;
}

declare class AVMutableAudioMix extends AVAudioMix {
  static audioMix(): AVMutableAudioMix;
  inputParameters: NSArray<AVAudioMixInputParameters>;
  setInputParameters(_: NSArray<AVAudioMixInputParameters>)
}

declare class AVMutableAudioMixInputParameters extends AVAudioMixInputParameters {
  static audioMixInputParameters(): AVMutableAudioMixInputParameters;
  static audioMixInputParametersWithTrack(track?: AVAssetTrack): AVMutableAudioMixInputParameters;
  audioTapProcessor: any;
  setAudioTapProcessor(_: any)
  audioTimePitchAlgorithm: string;
  setAudioTimePitchAlgorithm(_: string)
  trackID: number;
  setTrackID(_: number)
  setVolumeAtTime(_: number, at: CMTime): void;
  setVolumeRampFromStartVolumeToEndVolumeTimeRange(fromStartVolume: number, toEndVolume: number, timeRange: CMTimeRange): void;
}

declare class AVMutableComposition extends AVComposition {
  static composition(): AVMutableComposition;
  static compositionWithURLAssetInitializationOptions(urlAssetInitializationOptions?: NSDictionary<string, any>): AVMutableComposition;
  naturalSize: NSSize;
  setNaturalSize(_: NSSize)
  addMutableTrackWithMediaTypePreferredTrackID(withMediaType: string, preferredTrackID: number): AVMutableCompositionTrack;
  insertEmptyTimeRange(_: CMTimeRange): void;
  insertTimeRangeOfAssetAtTimeError(_: CMTimeRange, of: AVAsset, at: CMTime): boolean;
  mutableTrackCompatibleWithTrack(compatibleWith: AVAssetTrack): AVMutableCompositionTrack;
  removeTimeRange(_: CMTimeRange): void;
  removeTrack(_: AVCompositionTrack): void;
  scaleTimeRangeToDuration(_: CMTimeRange, toDuration: CMTime): void;
  trackWithTrackID(withTrackID: number): AVMutableCompositionTrack;
}

declare class AVMutableCompositionTrack extends AVCompositionTrack {
  isEnabled: boolean;
  setEnabled(_: boolean)
  extendedLanguageTag: string;
  setExtendedLanguageTag(_: string)
  languageCode: string;
  setLanguageCode(_: string)
  naturalTimeScale: number;
  setNaturalTimeScale(_: number)
  preferredTransform: CGAffineTransform;
  setPreferredTransform(_: CGAffineTransform)
  preferredVolume: number;
  setPreferredVolume(_: number)
  segments: NSArray<AVCompositionTrackSegment>;
  setSegments(_: NSArray<AVCompositionTrackSegment>)
  addTrackAssociationToTrackType(to: AVCompositionTrack, type: string): void;
  insertEmptyTimeRange(_: CMTimeRange): void;
  insertTimeRangeOfTrackAtTimeError(ofTrack: CMTimeRange, atTime: AVAssetTrack, error: CMTime): boolean;
  insertTimeRangesOfTracksAtTimeError(ofTracks: NSArray<NSValue>, atTime: NSArray<AVAssetTrack>, error: CMTime): boolean;
  removeTimeRange(_: CMTimeRange): void;
  removeTrackAssociationToTrackType(to: AVCompositionTrack, type: string): void;
  replaceFormatDescriptionWithFormatDescription(_: any, with_?: any): void;
  scaleTimeRangeToDuration(_: CMTimeRange, toDuration: CMTime): void;
  validateTrackSegmentsError(error: NSArray<AVCompositionTrackSegment>): boolean;
}

declare class AVMutableDateRangeMetadataGroup extends AVDateRangeMetadataGroup {
  endDate: Date;
  setEndDate(_: Date)
  items: NSArray<AVMetadataItem>;
  setItems(_: NSArray<AVMetadataItem>)
  startDate: Date;
  setStartDate(_: Date)
}

declare class AVMutableMediaSelection extends AVMediaSelection {
  selectMediaOptionInMediaSelectionGroup(_?: AVMediaSelectionOption, in_: AVMediaSelectionGroup): void;
}

declare class AVMutableMetadataItem extends AVMetadataItem {
  static metadataItem(): AVMutableMetadataItem;
  dataType: string;
  setDataType(_: string)
  duration: CMTime;
  setDuration(_: CMTime)
  extendedLanguageTag: string;
  setExtendedLanguageTag(_: string)
  extraAttributes: NSDictionary<string, any>;
  setExtraAttributes(_: NSDictionary<string, any>)
  identifier: string;
  setIdentifier(_: string)
  key: any;
  setKey(_: any)
  keySpace: string;
  setKeySpace(_: string)
  locale: Locale;
  setLocale(_: Locale)
  startDate: Date;
  setStartDate(_: Date)
  time: CMTime;
  setTime(_: CMTime)
  value: any;
  setValue(_: any)
}

declare class AVMutableMovie extends AVMovie {
  static movieWithDataOptionsError(data: Data, options?: NSDictionary<string, any>): AVMutableMovie;
  static movieWithSettingsFromMovieOptionsError(options?: AVMovie, error?: NSDictionary<string, any>): AVMutableMovie;
  static movieWithURLOptionsError(url: NSURL, options?: NSDictionary<string, any>): AVMutableMovie;
  defaultMediaDataStorage: AVMediaDataStorage;
  setDefaultMediaDataStorage(_: AVMediaDataStorage)
  interleavingPeriod: CMTime;
  setInterleavingPeriod(_: CMTime)
  metadata: NSArray<AVMetadataItem>;
  setMetadata(_: NSArray<AVMetadataItem>)
  isModified: boolean;
  setModified(_: boolean)
  preferredRate: number;
  setPreferredRate(_: number)
  preferredTransform: CGAffineTransform;
  setPreferredTransform(_: CGAffineTransform)
  preferredVolume: number;
  setPreferredVolume(_: number)
  timescale: number;
  setTimescale(_: number)
  addMutableTrackWithMediaTypeCopySettingsFromTrackOptions(withMediaType: string, copySettingsFrom?: AVAssetTrack, options?: NSDictionary<string, any>): AVMutableMovieTrack;
  addMutableTracksCopyingSettingsFromTracksOptions(from: NSArray<AVAssetTrack>, options?: NSDictionary<string, any>): NSArray<AVMutableMovieTrack>;
  static createWithDataOptions(data: Data, options?: NSDictionary<string, any>): this;
  static createWithSettingsFromMovieOptions(settingsFromMovie?: AVMovie, options?: NSDictionary<string, any>): this;
  static createWithUrlOptions(URL: NSURL, options?: NSDictionary<string, any>): this;
  insertEmptyTimeRange(_: CMTimeRange): void;
  insertTimeRangeOfAssetAtTimeCopySampleDataError(_: CMTimeRange, of: AVAsset, at: CMTime, copySampleData: boolean): boolean;
  mutableTrackCompatibleWithTrack(compatibleWith: AVAssetTrack): AVMutableMovieTrack;
  removeTimeRange(_: CMTimeRange): void;
  removeTrack(_: AVMovieTrack): void;
  scaleTimeRangeToDuration(_: CMTimeRange, toDuration: CMTime): void;
  trackWithTrackID(withTrackID: number): AVMutableMovieTrack;
}

declare class AVMutableMovieTrack extends AVMovieTrack {
  alternateGroupID: number;
  setAlternateGroupID(_: number)
  cleanApertureDimensions: NSSize;
  setCleanApertureDimensions(_: NSSize)
  isEnabled: boolean;
  setEnabled(_: boolean)
  encodedPixelsDimensions: NSSize;
  setEncodedPixelsDimensions(_: NSSize)
  extendedLanguageTag: string;
  setExtendedLanguageTag(_: string)
  readonly hasProtectedContent: boolean;
  languageCode: string;
  setLanguageCode(_: string)
  layer: number;
  setLayer(_: number)
  mediaDataStorage: AVMediaDataStorage;
  setMediaDataStorage(_: AVMediaDataStorage)
  metadata: NSArray<AVMetadataItem>;
  setMetadata(_: NSArray<AVMetadataItem>)
  isModified: boolean;
  setModified(_: boolean)
  naturalSize: NSSize;
  setNaturalSize(_: NSSize)
  preferredMediaChunkAlignment: number;
  setPreferredMediaChunkAlignment(_: number)
  preferredMediaChunkDuration: CMTime;
  setPreferredMediaChunkDuration(_: CMTime)
  preferredMediaChunkSize: number;
  setPreferredMediaChunkSize(_: number)
  preferredTransform: CGAffineTransform;
  setPreferredTransform(_: CGAffineTransform)
  preferredVolume: number;
  setPreferredVolume(_: number)
  productionApertureDimensions: NSSize;
  setProductionApertureDimensions(_: NSSize)
  sampleReferenceBaseURL: NSURL;
  setSampleReferenceBaseURL(_: NSURL)
  timescale: number;
  setTimescale(_: number)
  addTrackAssociationToTrackType(to: AVMovieTrack, type: string): void;
  appendSampleBufferDecodeTimePresentationTimeError(_: any, decodeTime?: CMTime, presentationTime?: CMTime): boolean;
  insertEmptyTimeRange(_: CMTimeRange): void;
  insertMediaTimeRangeIntoTimeRange(_: CMTimeRange, into: CMTimeRange): boolean;
  insertTimeRangeOfTrackAtTimeCopySampleDataError(ofTrack: CMTimeRange, atTime: AVAssetTrack, copySampleData: CMTime, error: boolean): boolean;
  removeTimeRange(_: CMTimeRange): void;
  removeTrackAssociationToTrackType(to: AVMovieTrack, type: string): void;
  replaceFormatDescriptionWithFormatDescription(_: any, with_: any): void;
  scaleTimeRangeToDuration(_: CMTimeRange, toDuration: CMTime): void;
}

declare class AVMutableTimedMetadataGroup extends AVTimedMetadataGroup {
  items: NSArray<AVMetadataItem>;
  setItems(_: NSArray<AVMetadataItem>)
  timeRange: CMTimeRange;
  setTimeRange(_: CMTimeRange)
}

declare class AVMutableVideoComposition extends AVVideoComposition {
  static videoComposition(): AVMutableVideoComposition;
  static videoCompositionWithPropertiesOfAssetPrototypeInstruction(propertiesOf: AVAsset, prototypeInstruction: AVVideoCompositionInstruction): AVMutableVideoComposition;
  animationTool: AVVideoCompositionCoreAnimationTool;
  setAnimationTool(_: AVVideoCompositionCoreAnimationTool)
  colorPrimaries: string;
  setColorPrimaries(_: string)
  colorTransferFunction: string;
  setColorTransferFunction(_: string)
  colorYCbCrMatrix: string;
  setColorYCbCrMatrix(_: string)
  customVideoCompositorClass: typeof NSObject;
  setCustomVideoCompositorClass(_: typeof NSObject)
  frameDuration: CMTime;
  setFrameDuration(_: CMTime)
  instructions: NSArray<AVVideoCompositionInstructionProtocol>;
  setInstructions(_: NSArray<AVVideoCompositionInstructionProtocol>)
  renderScale: number;
  setRenderScale(_: number)
  renderSize: NSSize;
  setRenderSize(_: NSSize)
  sourceTrackIDForFrameTiming: number;
  setSourceTrackIDForFrameTiming(_: number)
}

declare class AVMutableVideoCompositionInstruction extends AVVideoCompositionInstruction {
  static videoCompositionInstruction(): AVMutableVideoCompositionInstruction;
  backgroundColor: any;
  setBackgroundColor(_: any)
  enablePostProcessing: boolean;
  setEnablePostProcessing(_: boolean)
  layerInstructions: NSArray<AVVideoCompositionLayerInstruction>;
  setLayerInstructions(_: NSArray<AVVideoCompositionLayerInstruction>)
  timeRange: CMTimeRange;
  setTimeRange(_: CMTimeRange)
}

declare class AVMutableVideoCompositionLayerInstruction extends AVVideoCompositionLayerInstruction {
  static videoCompositionLayerInstruction(): AVMutableVideoCompositionLayerInstruction;
  static videoCompositionLayerInstructionWithAssetTrack(assetTrack: AVAssetTrack): AVMutableVideoCompositionLayerInstruction;
  trackID: number;
  setTrackID(_: number)
  setCropRectangleAtTime(_: NSRect, at: CMTime): void;
  setCropRectangleRampFromStartCropRectangleToEndCropRectangleTimeRange(fromStartCropRectangle: NSRect, toEndCropRectangle: NSRect, timeRange: CMTimeRange): void;
  setOpacityAtTime(_: number, at: CMTime): void;
  setOpacityRampFromStartOpacityToEndOpacityTimeRange(fromStartOpacity: number, toEndOpacity: number, timeRange: CMTimeRange): void;
  setTransformAtTime(_: CGAffineTransform, at: CMTime): void;
  setTransformRampFromStartTransformToEndTransformTimeRange(fromStart: CGAffineTransform, toEnd: CGAffineTransform, timeRange: CMTimeRange): void;
}

declare var AVNumberOfChannelsKey: string;

declare class AVOutputSettingsAssistant extends NSObject {
  static availableOutputSettingsPresets(): NSArray<string>;
  readonly audioSettings: NSDictionary<string, any>;
  readonly outputFileType: string;
  sourceAudioFormat: any;
  setSourceAudioFormat(_: any)
  sourceVideoAverageFrameDuration: CMTime;
  setSourceVideoAverageFrameDuration(_: CMTime)
  sourceVideoFormat: any;
  setSourceVideoFormat(_: any)
  sourceVideoMinFrameDuration: CMTime;
  setSourceVideoMinFrameDuration(_: CMTime)
  readonly videoSettings: NSDictionary<string, any>;
}

declare var AVOutputSettingsPreset1280x720: string;

declare var AVOutputSettingsPreset1920x1080: string;

declare var AVOutputSettingsPreset3840x2160: string;

declare var AVOutputSettingsPreset640x480: string;

declare var AVOutputSettingsPreset960x540: string;

declare var AVOutputSettingsPresetHEVC1920x1080: string;

declare var AVOutputSettingsPresetHEVC1920x1080WithAlpha: string;

declare var AVOutputSettingsPresetHEVC3840x2160: string;

declare var AVOutputSettingsPresetHEVC3840x2160WithAlpha: string;

declare class AVPersistableContentKeyRequest extends AVContentKeyRequest {
  persistableContentKeyFromKeyVendorResponseOptionsError(options: Data, error?: NSDictionary<string, any>): Data;
}

interface AVPixelAspectRatio {
  horizontalSpacing: number;
  verticalSpacing: number;
}

declare var AVPixelAspectRatio: AVPixelAspectRatio;

declare class AVPlayer extends NSObject {
  actionAtItemEnd: AVPlayer.ActionAtItemEnd;
  setActionAtItemEnd(_: AVPlayer.ActionAtItemEnd)
  allowsExternalPlayback: boolean;
  setAllowsExternalPlayback(_: boolean)
  appliesMediaSelectionCriteriaAutomatically: boolean;
  setAppliesMediaSelectionCriteriaAutomatically(_: boolean)
  audioOutputDeviceUniqueID: string;
  setAudioOutputDeviceUniqueID(_: string)
  automaticallyWaitsToMinimizeStalling: boolean;
  setAutomaticallyWaitsToMinimizeStalling(_: boolean)
  readonly currentItem: AVPlayerItem;
  readonly error: Error;
  readonly isExternalPlaybackActive: boolean;
  masterClock: any;
  setMasterClock(_: any)
  isMuted: boolean;
  setMuted(_: boolean)
  readonly outputObscuredDueToInsufficientExternalProtection: boolean;
  preferredVideoDecoderGPURegistryID: number;
  setPreferredVideoDecoderGPURegistryID(_: number)
  preventsDisplaySleepDuringVideoPlayback: boolean;
  setPreventsDisplaySleepDuringVideoPlayback(_: boolean)
  rate: number;
  setRate(_: number)
  readonly reasonForWaitingToPlay: string;
  readonly status: AVPlayer.Status;
  readonly timeControlStatus: AVPlayer.TimeControlStatus;
  volume: number;
  setVolume(_: number)
  static eligibleForHDRPlayback(): boolean;
  addBoundaryTimeObserverForTimesQueueUsingBlock(forTimes: NSArray<NSValue>, queue?: NSObject, using: () => void): any;
  addPeriodicTimeObserverForIntervalQueueUsingBlock(forInterval: CMTime, queue?: NSObject, using: (p1: CMTime) => void): any;
  cancelPendingPrerolls(): void;
  currentTime(): CMTime;
  static createWithPlayerItem(playerItem?: AVPlayerItem): this;
  static createWithUrl(URL: NSURL): this;
  mediaSelectionCriteriaForMediaCharacteristic(forMediaCharacteristic: string): AVPlayerMediaSelectionCriteria;
  pause(): void;
  play(): void;
  playImmediatelyAtRate(atRate: number): void;
  prerollAtRateCompletionHandler(atRate: number, completionHandler?: (p1: boolean) => void): void;
  removeTimeObserver(_: any): void;
  replaceCurrentItemWithPlayerItem(with_?: AVPlayerItem): void;
  seekToDate(to: Date): void;
  seekToDateCompletionHandler(to: Date, completionHandler: (p1: boolean) => void): void;
  seekToTime(to: CMTime): void;
  seekToTimeCompletionHandler(to: CMTime, completionHandler: (p1: boolean) => void): void;
  seekToTimeToleranceBeforeToleranceAfter(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime): void;
  seekToTimeToleranceBeforeToleranceAfterCompletionHandler(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: (p1: boolean) => void): void;
  setMediaSelectionCriteriaForMediaCharacteristic(_?: AVPlayerMediaSelectionCriteria, forMediaCharacteristic: string): void;
  setRateTimeAtHostTime(_: number, time: CMTime, atHostTime: CMTime): void;
}

declare var AVPlayerAvailableHDRModesDidChangeNotification: string;

declare var AVPlayerEligibleForHDRPlaybackDidChangeNotification: string;

declare class AVPlayerItem extends NSObject implements NSCopying {
  readonly isApplicationAuthorizedForPlayback: boolean;
  readonly asset: AVAsset;
  audioMix: AVAudioMix;
  setAudioMix(_: AVAudioMix)
  audioTimePitchAlgorithm: string;
  setAudioTimePitchAlgorithm(_: string)
  readonly isAuthorizationRequiredForPlayback: boolean;
  readonly automaticallyLoadedAssetKeys: NSArray<string>;
  automaticallyPreservesTimeOffsetFromLive: boolean;
  setAutomaticallyPreservesTimeOffsetFromLive(_: boolean)
  readonly canPlayFastForward: boolean;
  readonly canPlayFastReverse: boolean;
  readonly canPlayReverse: boolean;
  readonly canPlaySlowForward: boolean;
  readonly canPlaySlowReverse: boolean;
  readonly canStepBackward: boolean;
  readonly canStepForward: boolean;
  canUseNetworkResourcesForLiveStreamingWhilePaused: boolean;
  setCanUseNetworkResourcesForLiveStreamingWhilePaused(_: boolean)
  configuredTimeOffsetFromLive: CMTime;
  setConfiguredTimeOffsetFromLive(_: CMTime)
  readonly contentAuthorizationRequestStatus: AVContentAuthorizationStatus;
  readonly isContentAuthorizedForPlayback: boolean;
  readonly currentMediaSelection: AVMediaSelection;
  readonly customVideoCompositor: AVVideoCompositing;
  readonly duration: CMTime;
  readonly error: Error;
  forwardPlaybackEndTime: CMTime;
  setForwardPlaybackEndTime(_: CMTime)
  readonly loadedTimeRanges: NSArray<NSValue>;
  readonly mediaDataCollectors: NSArray<AVPlayerItemMediaDataCollector>;
  readonly outputs: NSArray<AVPlayerItemOutput>;
  readonly isPlaybackBufferEmpty: boolean;
  readonly isPlaybackBufferFull: boolean;
  readonly isPlaybackLikelyToKeepUp: boolean;
  preferredForwardBufferDuration: number;
  setPreferredForwardBufferDuration(_: number)
  preferredMaximumResolution: NSSize;
  setPreferredMaximumResolution(_: NSSize)
  preferredPeakBitRate: number;
  setPreferredPeakBitRate(_: number)
  readonly presentationSize: NSSize;
  readonly recommendedTimeOffsetFromLive: CMTime;
  reversePlaybackEndTime: CMTime;
  setReversePlaybackEndTime(_: CMTime)
  readonly seekableTimeRanges: NSArray<NSValue>;
  seekingWaitsForVideoCompositionRendering: boolean;
  setSeekingWaitsForVideoCompositionRendering(_: boolean)
  readonly status: AVPlayerItem.Status;
  textStyleRules: NSArray<AVTextStyleRule>;
  setTextStyleRules(_: NSArray<AVTextStyleRule>)
  readonly timebase: any;
  readonly tracks: NSArray<AVPlayerItemTrack>;
  videoApertureMode: string;
  setVideoApertureMode(_: string)
  videoComposition: AVVideoComposition;
  setVideoComposition(_: AVVideoComposition)
  accessLog(): AVPlayerItemAccessLog;
  addMediaDataCollector(_: AVPlayerItemMediaDataCollector): void;
  addOutput(_: AVPlayerItemOutput): void;
  cancelContentAuthorizationRequest(): void;
  cancelPendingSeeks(): void;
  currentDate(): Date;
  currentTime(): CMTime;
  errorLog(): AVPlayerItemErrorLog;
  static createWithAsset(asset: AVAsset): this;
  static createWithAssetAutomaticallyLoadedAssetKeys(asset: AVAsset, automaticallyLoadedAssetKeys?: NSArray<string>): this;
  static createWithUrl(URL: NSURL): this;
  removeMediaDataCollector(_: AVPlayerItemMediaDataCollector): void;
  removeOutput(_: AVPlayerItemOutput): void;
  requestContentAuthorizationAsynchronouslyWithTimeoutIntervalCompletionHandler(withTimeoutInterval: number, completionHandler: () => void): void;
  seekToDateCompletionHandler(to: Date, completionHandler?: (p1: boolean) => void): boolean;
  seekToTimeCompletionHandler(to: CMTime, completionHandler?: (p1: boolean) => void): void;
  seekToTimeToleranceBeforeToleranceAfterCompletionHandler(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler?: (p1: boolean) => void): void;
  selectMediaOptionInMediaSelectionGroup(_?: AVMediaSelectionOption, in_: AVMediaSelectionGroup): void;
  selectMediaOptionAutomaticallyInMediaSelectionGroup(in_: AVMediaSelectionGroup): void;
  stepByCount(byCount: number): void;
}

declare class AVPlayerItemAccessLog extends NSObject implements NSCopying {
  readonly events: NSArray<AVPlayerItemAccessLogEvent>;
  readonly extendedLogDataStringEncoding: number;
  extendedLogData(): Data;
}

declare class AVPlayerItemAccessLogEvent extends NSObject implements NSCopying {
  readonly URI: string;
  readonly averageAudioBitrate: number;
  readonly averageVideoBitrate: number;
  readonly downloadOverdue: number;
  readonly durationWatched: number;
  readonly indicatedAverageBitrate: number;
  readonly indicatedBitrate: number;
  readonly mediaRequestsWWAN: number;
  readonly numberOfBytesTransferred: number;
  readonly numberOfDroppedVideoFrames: number;
  readonly numberOfMediaRequests: number;
  readonly numberOfServerAddressChanges: number;
  readonly numberOfStalls: number;
  readonly observedBitrate: number;
  readonly observedBitrateStandardDeviation: number;
  readonly observedMaxBitrate: number;
  readonly observedMinBitrate: number;
  readonly playbackSessionID: string;
  readonly playbackStartDate: Date;
  readonly playbackStartOffset: number;
  readonly playbackType: string;
  readonly segmentsDownloadedDuration: number;
  readonly serverAddress: string;
  readonly startupTime: number;
  readonly switchBitrate: number;
  readonly transferDuration: number;
}

declare var AVPlayerItemDidPlayToEndTimeNotification: string;

declare class AVPlayerItemErrorLog extends NSObject implements NSCopying {
  readonly events: NSArray<AVPlayerItemErrorLogEvent>;
  readonly extendedLogDataStringEncoding: number;
  extendedLogData(): Data;
}

declare class AVPlayerItemErrorLogEvent extends NSObject implements NSCopying {
  readonly URI: string;
  readonly date: Date;
  readonly errorComment: string;
  readonly errorDomain: string;
  readonly errorStatusCode: number;
  readonly playbackSessionID: string;
  readonly serverAddress: string;
}

declare var AVPlayerItemFailedToPlayToEndTimeErrorKey: string;

declare var AVPlayerItemFailedToPlayToEndTimeNotification: string;

declare class AVPlayerItemLegibleOutput extends AVPlayerItemOutput {
  advanceIntervalForDelegateInvocation: number;
  setAdvanceIntervalForDelegateInvocation(_: number)
  readonly delegate: AVPlayerItemLegibleOutputPushDelegate;
  readonly delegateQueue: NSObject;
  textStylingResolution: string;
  setTextStylingResolution(_: string)
  static createWithMediaSubtypesForNativeRepresentation(mediaSubtypesForNativeRepresentation: NSArray<number>): this;
  setDelegateQueue(_?: AVPlayerItemLegibleOutputPushDelegate, queue?: NSObject): void;
}

interface AVPlayerItemLegibleOutputPushDelegate extends AVPlayerItemOutputPushDelegate {
  legibleOutputDidOutputAttributedStringsNativeSampleBuffersForItemTime?(_: AVPlayerItemLegibleOutput, didOutputAttributedStrings: NSArray<NSAttributedString>, nativeSampleBuffers: NSArray<any>, forItemTime: CMTime): void;
}

declare var AVPlayerItemLegibleOutputPushDelegate: {
  prototype: AVPlayerItemLegibleOutputPushDelegate;
};

declare var AVPlayerItemLegibleOutputTextStylingResolutionDefault: string;

declare var AVPlayerItemLegibleOutputTextStylingResolutionSourceAndRulesOnly: string;

declare class AVPlayerItemMediaDataCollector extends NSObject {
}

declare var AVPlayerItemMediaSelectionDidChangeNotification: string;

declare class AVPlayerItemMetadataCollector extends AVPlayerItemMediaDataCollector {
  readonly delegate: AVPlayerItemMetadataCollectorPushDelegate;
  readonly delegateQueue: NSObject;
  static createWithIdentifiersClassifyingLabels(identifiers?: NSArray<string>, classifyingLabels?: NSArray<string>): this;
  setDelegateQueue(_?: AVPlayerItemMetadataCollectorPushDelegate, queue?: NSObject): void;
}

interface AVPlayerItemMetadataCollectorPushDelegate extends NSObject {
  metadataCollectorDidCollectDateRangeMetadataGroupsIndexesOfNewGroupsIndexesOfModifiedGroups(_: AVPlayerItemMetadataCollector, didCollect: NSArray<AVDateRangeMetadataGroup>, indexesOfNewGroups: IndexSet, indexesOfModifiedGroups: IndexSet): void;
}

declare var AVPlayerItemMetadataCollectorPushDelegate: {
  prototype: AVPlayerItemMetadataCollectorPushDelegate;
};

declare class AVPlayerItemMetadataOutput extends AVPlayerItemOutput {
  advanceIntervalForDelegateInvocation: number;
  setAdvanceIntervalForDelegateInvocation(_: number)
  readonly delegate: AVPlayerItemMetadataOutputPushDelegate;
  readonly delegateQueue: NSObject;
  static createWithIdentifiers(identifiers?: NSArray<string>): this;
  setDelegateQueue(_?: AVPlayerItemMetadataOutputPushDelegate, queue?: NSObject): void;
}

interface AVPlayerItemMetadataOutputPushDelegate extends AVPlayerItemOutputPushDelegate {
  metadataOutputDidOutputTimedMetadataGroupsFromPlayerItemTrack?(_: AVPlayerItemMetadataOutput, didOutputTimedMetadataGroups: NSArray<AVTimedMetadataGroup>, from?: AVPlayerItemTrack): void;
}

declare var AVPlayerItemMetadataOutputPushDelegate: {
  prototype: AVPlayerItemMetadataOutputPushDelegate;
};

declare var AVPlayerItemNewAccessLogEntryNotification: string;

declare var AVPlayerItemNewErrorLogEntryNotification: string;

declare class AVPlayerItemOutput extends NSObject {
  suppressesPlayerRendering: boolean;
  setSuppressesPlayerRendering(_: boolean)
  itemTimeForCVTimeStamp(for_: CVTimeStamp): CMTime;
  itemTimeForHostTime(forHostTime: number): CMTime;
  itemTimeForMachAbsoluteTime(forMachAbsoluteTime: number): CMTime;
}

interface AVPlayerItemOutputPullDelegate extends NSObject {
  outputMediaDataWillChange?(_: AVPlayerItemOutput): void;
  outputSequenceWasFlushed?(_: AVPlayerItemOutput): void;
}

declare var AVPlayerItemOutputPullDelegate: {
  prototype: AVPlayerItemOutputPullDelegate;
};

interface AVPlayerItemOutputPushDelegate extends NSObject {
  outputSequenceWasFlushed?(_: AVPlayerItemOutput): void;
}

declare var AVPlayerItemOutputPushDelegate: {
  prototype: AVPlayerItemOutputPushDelegate;
};

declare var AVPlayerItemPlaybackStalledNotification: string;

declare var AVPlayerItemRecommendedTimeOffsetFromLiveDidChangeNotification: string;

declare var AVPlayerItemTimeJumpedNotification: string;

declare class AVPlayerItemTrack extends NSObject {
  readonly assetTrack: AVAssetTrack;
  readonly currentVideoFrameRate: number;
  isEnabled: boolean;
  setEnabled(_: boolean)
  videoFieldMode: string;
  setVideoFieldMode(_: string)
}

declare var AVPlayerItemTrackVideoFieldModeDeinterlaceFields: string;

declare class AVPlayerItemVideoOutput extends AVPlayerItemOutput {
  readonly delegate: AVPlayerItemOutputPullDelegate;
  readonly delegateQueue: NSObject;
  copyPixelBufferForItemTimeItemTimeForDisplay(forItemTime: CMTime, itemTimeForDisplay?: CMTime): any;
  hasNewPixelBufferForItemTime(forItemTime: CMTime): boolean;
  static createWithOutputSettings(outputSettings?: NSDictionary<string, any>): this;
  static createWithPixelBufferAttributes(pixelBufferAttributes?: NSDictionary<string, any>): this;
  requestNotificationOfMediaDataChangeWithAdvanceInterval(withAdvanceInterval: number): void;
  setDelegateQueue(_?: AVPlayerItemOutputPullDelegate, queue?: NSObject): void;
}

declare class AVPlayerLayer extends CALayer {
  pixelBufferAttributes: NSDictionary<string, any>;
  setPixelBufferAttributes(_: NSDictionary<string, any>)
  player: AVPlayer;
  setPlayer(_: AVPlayer)
  readonly isReadyForDisplay: boolean;
  videoGravity: string;
  setVideoGravity(_: string)
  readonly videoRect: NSRect;
}

declare class AVPlayerLooper extends NSObject {
  readonly error: Error;
  readonly loopCount: number;
  readonly loopingPlayerItems: NSArray<AVPlayerItem>;
  readonly status: AVPlayerLooper.Status;
  disableLooping(): void;
  static createWithPlayerTemplateItemTimeRange(player: AVQueuePlayer, templateItem: AVPlayerItem, timeRange: CMTimeRange): this;
}

declare class AVPlayerMediaSelectionCriteria extends NSObject {
  readonly preferredLanguages: NSArray<string>;
  readonly preferredMediaCharacteristics: NSArray<string>;
  readonly principalMediaCharacteristics: NSArray<string>;
  static createWithPreferredLanguagesPreferredMediaCharacteristics(preferredLanguages?: NSArray<string>, preferredMediaCharacteristics?: NSArray<string>): this;
  static createWithPrincipalMediaCharacteristicsPreferredLanguagesPreferredMediaCharacteristics(principalMediaCharacteristics?: NSArray<string>, preferredLanguages?: NSArray<string>, preferredMediaCharacteristics?: NSArray<string>): this;
}

declare var AVPlayerWaitingToMinimizeStallsReason: string;

declare var AVPlayerWaitingWhileEvaluatingBufferingRateReason: string;

declare var AVPlayerWaitingWithNoItemToPlayReason: string;

declare class AVPortraitEffectsMatte extends NSObject {
  static portraitEffectsMatteFromDictionaryRepresentationError(error: NSDictionary<any, any>): AVPortraitEffectsMatte;
  readonly mattingImage: any;
  readonly pixelFormatType: number;
  dictionaryRepresentationForAuxiliaryDataType(forAuxiliaryDataType?: string): NSDictionary<any, any>;
  portraitEffectsMatteByApplyingExifOrientation(_: CGImagePropertyOrientation): this;
  portraitEffectsMatteByReplacingPortraitEffectsMatteWithPixelBufferError(error: any): this;
}

declare class AVQueuePlayer extends AVPlayer {
  static queuePlayerWithItems(items: NSArray<AVPlayerItem>): AVQueuePlayer;
  advanceToNextItem(): void;
  canInsertItemAfterItem(_: AVPlayerItem, after?: AVPlayerItem): boolean;
  static createWithItems(items: NSArray<AVPlayerItem>): this;
  insertItemAfterItem(_: AVPlayerItem, after?: AVPlayerItem): void;
  items(): NSArray<AVPlayerItem>;
  removeAllItems(): void;
  removeItem(_: AVPlayerItem): void;
}

interface AVQueuedSampleBufferRendering extends NSObject {
  isReadyForMoreMediaData: boolean;
  timebase: any;
  enqueueSampleBuffer(_: any): void;
  flush(): void;
  requestMediaDataWhenReadyOnQueueUsingBlock(on: NSObject, using: () => void): void;
  stopRequestingMediaData(): void;
}

declare var AVQueuedSampleBufferRendering: {
  prototype: AVQueuedSampleBufferRendering;
};

declare class AVRouteDetector extends NSObject {
  readonly multipleRoutesDetected: boolean;
  isRouteDetectionEnabled: boolean;
  setRouteDetectionEnabled(_: boolean)
}

declare var AVRouteDetectorMultipleRoutesDetectedDidChangeNotification: string;

declare class AVSampleBufferAudioRenderer extends NSObject implements AVQueuedSampleBufferRendering {
  audioOutputDeviceUniqueID: string;
  setAudioOutputDeviceUniqueID(_: string)
  audioTimePitchAlgorithm: string;
  setAudioTimePitchAlgorithm(_: string)
  readonly error: Error;
  isMuted: boolean;
  setMuted(_: boolean)
  readonly status: AVQueuedSampleBufferRenderingStatus;
  volume: number;
  setVolume(_: number)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly isReadyForMoreMediaData: boolean; // inherited from AVQueuedSampleBufferRendering
  readonly superclass: typeof NSObject; // inherited from NSObject
  readonly timebase: any; // inherited from AVQueuedSampleBufferRendering
  conformsToProtocol(to: any /* Protocol */): boolean;
  enqueueSampleBuffer(_: any): void;
  flush(): void;
  flushFromSourceTimeCompletionHandler(fromSourceTime: CMTime, completionHandler: (p1: boolean) => void): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  requestMediaDataWhenReadyOnQueueUsingBlock(on: NSObject, using: () => void): void;
  respondsToSelector(_: string): boolean;
  self(): this;
  stopRequestingMediaData(): void;
}

declare var AVSampleBufferAudioRendererFlushTimeKey: string;

declare var AVSampleBufferAudioRendererWasFlushedAutomaticallyNotification: string;

declare class AVSampleBufferDisplayLayer extends CALayer implements AVQueuedSampleBufferRendering {
  controlTimebase: any;
  setControlTimebase(_: any)
  readonly error: Error;
  preventsCapture: boolean;
  setPreventsCapture(_: boolean)
  preventsDisplaySleepDuringVideoPlayback: boolean;
  setPreventsDisplaySleepDuringVideoPlayback(_: boolean)
  readonly status: AVQueuedSampleBufferRenderingStatus;
  videoGravity: string;
  setVideoGravity(_: string)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly isReadyForMoreMediaData: boolean; // inherited from AVQueuedSampleBufferRendering
  readonly superclass: typeof NSObject; // inherited from NSObject
  readonly timebase: any; // inherited from AVQueuedSampleBufferRendering
  conformsToProtocol(to: any /* Protocol */): boolean;
  enqueueSampleBuffer(_: any): void;
  flush(): void;
  flushAndRemoveImage(): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  requestMediaDataWhenReadyOnQueueUsingBlock(on: NSObject, using: () => void): void;
  respondsToSelector(_: string): boolean;
  self(): this;
  stopRequestingMediaData(): void;
}

declare var AVSampleBufferDisplayLayerFailedToDecodeNotification: string;

declare var AVSampleBufferDisplayLayerFailedToDecodeNotificationErrorKey: string;

declare class AVSampleBufferGenerator extends NSObject {
  static notifyOfDataReadyForSampleBufferCompletionHandler(for_: any, completionHandler: (p1: boolean, p2: Error) => void): void;
  createSampleBufferForRequest(for_: AVSampleBufferRequest): any;
  static createWithAssetTimebase(asset: AVAsset, timebase?: any): this;
}

declare class AVSampleBufferRenderSynchronizer extends NSObject {
  rate: number;
  setRate(_: number)
  readonly renderers: NSArray<AVQueuedSampleBufferRendering>;
  readonly timebase: any;
  addBoundaryTimeObserverForTimesQueueUsingBlock(forTimes: NSArray<NSValue>, queue?: NSObject, using: () => void): any;
  addPeriodicTimeObserverForIntervalQueueUsingBlock(forInterval: CMTime, queue?: NSObject, using: (p1: CMTime) => void): any;
  addRenderer(_: AVQueuedSampleBufferRendering): void;
  currentTime(): CMTime;
  removeRendererAtTimeCompletionHandler(_: AVQueuedSampleBufferRendering, at: CMTime, completionHandler?: (p1: boolean) => void): void;
  removeTimeObserver(_: any): void;
  setRateTime(_: number, time: CMTime): void;
}

declare var AVSampleBufferRenderSynchronizerRateDidChangeNotification: string;

declare class AVSampleBufferRequest extends NSObject {
  direction: AVSampleBufferRequest.Direction;
  setDirection(_: AVSampleBufferRequest.Direction)
  limitCursor: AVSampleCursor;
  setLimitCursor(_: AVSampleCursor)
  maxSampleCount: number;
  setMaxSampleCount(_: number)
  mode: AVSampleBufferRequest.Mode;
  setMode(_: AVSampleBufferRequest.Mode)
  overrideTime: CMTime;
  setOverrideTime(_: CMTime)
  preferredMinSampleCount: number;
  setPreferredMinSampleCount(_: number)
  readonly startCursor: AVSampleCursor;
  static createWithStartCursor(startCursor: AVSampleCursor): this;
}

declare class AVSampleCursor extends NSObject implements NSCopying {
  readonly currentChunkInfo: AVSampleCursorChunkInfo;
  readonly currentChunkStorageRange: AVSampleCursorStorageRange;
  readonly currentChunkStorageURL: NSURL;
  readonly currentSampleAudioDependencyInfo: AVSampleCursorAudioDependencyInfo;
  readonly currentSampleDependencyInfo: AVSampleCursorDependencyInfo;
  readonly currentSampleDuration: CMTime;
  readonly currentSampleIndexInChunk: number;
  readonly currentSampleStorageRange: AVSampleCursorStorageRange;
  readonly currentSampleSyncInfo: AVSampleCursorSyncInfo;
  readonly decodeTimeStamp: CMTime;
  readonly presentationTimeStamp: CMTime;
  readonly samplesRequiredForDecoderRefresh: number;
  comparePositionInDecodeOrderWithPositionOfCursor(withPositionOf: AVSampleCursor): ComparisonResult;
  copyCurrentSampleFormatDescription(): any;
  samplesWithEarlierDecodeTimeStampsMayHaveLaterPresentationTimeStampsThanCursor(laterThan: AVSampleCursor): boolean;
  samplesWithLaterDecodeTimeStampsMayHaveEarlierPresentationTimeStampsThanCursor(earlierThan: AVSampleCursor): boolean;
  stepByDecodeTimeWasPinned(byDecodeTime: CMTime, wasPinned?: boolean): CMTime;
  stepByPresentationTimeWasPinned(byPresentationTime: CMTime, wasPinned?: boolean): CMTime;
  stepInDecodeOrderByCount(byCount: number): number;
  stepInPresentationOrderByCount(byCount: number): number;
}

interface AVSampleCursorAudioDependencyInfo {
  audioSampleIsIndependentlyDecodable: boolean;
  audioSamplePacketRefreshCount: number;
}

declare var AVSampleCursorAudioDependencyInfo: AVSampleCursorAudioDependencyInfo;

interface AVSampleCursorChunkInfo {
  chunkSampleCount: number;
  chunkHasUniformSampleSizes: boolean;
  chunkHasUniformSampleDurations: boolean;
  chunkHasUniformFormatDescriptions: boolean;
}

declare var AVSampleCursorChunkInfo: AVSampleCursorChunkInfo;

interface AVSampleCursorDependencyInfo {
  sampleIndicatesWhetherItHasDependentSamples: boolean;
  sampleHasDependentSamples: boolean;
  sampleIndicatesWhetherItDependsOnOthers: boolean;
  sampleDependsOnOthers: boolean;
  sampleIndicatesWhetherItHasRedundantCoding: boolean;
  sampleHasRedundantCoding: boolean;
}

declare var AVSampleCursorDependencyInfo: AVSampleCursorDependencyInfo;

interface AVSampleCursorStorageRange {
  offset: number;
  length: number;
}

declare var AVSampleCursorStorageRange: AVSampleCursorStorageRange;

interface AVSampleCursorSyncInfo {
  sampleIsFullSync: boolean;
  sampleIsPartialSync: boolean;
  sampleIsDroppable: boolean;
}

declare var AVSampleCursorSyncInfo: AVSampleCursorSyncInfo;

declare var AVSampleRateConverterAlgorithmKey: string;

declare var AVSampleRateConverterAlgorithm_Mastering: string;

declare var AVSampleRateConverterAlgorithm_MinimumPhase: string;

declare var AVSampleRateConverterAlgorithm_Normal: string;

declare var AVSampleRateConverterAudioQualityKey: string;

declare var AVSampleRateKey: string;

declare class AVSemanticSegmentationMatte extends NSObject {
  static semanticSegmentationMatteFromImageSourceAuxiliaryDataTypeDictionaryRepresentationError(dictionaryRepresentation: string, error: NSDictionary<any, any>): AVSemanticSegmentationMatte;
  readonly matteType: string;
  readonly mattingImage: any;
  readonly pixelFormatType: number;
  dictionaryRepresentationForAuxiliaryDataType(forAuxiliaryDataType?: string): NSDictionary<any, any>;
  semanticSegmentationMatteByApplyingExifOrientation(_: CGImagePropertyOrientation): this;
  semanticSegmentationMatteByReplacingSemanticSegmentationMatteWithPixelBufferError(error: any): this;
}

declare var AVSemanticSegmentationMatteTypeHair: string;

declare var AVSemanticSegmentationMatteTypeSkin: string;

declare var AVSemanticSegmentationMatteTypeTeeth: string;

declare var AVSpeechSynthesisIPANotationAttribute: string;

declare class AVSpeechSynthesisVoice extends NSObject implements NSSecureCoding {
  static currentLanguageCode(): string;
  static speechVoices(): NSArray<AVSpeechSynthesisVoice>;
  static voiceWithIdentifier(identifier: string): AVSpeechSynthesisVoice;
  static voiceWithLanguage(language?: string): AVSpeechSynthesisVoice;
  readonly audioFileSettings: NSDictionary<string, any>;
  readonly gender: AVSpeechSynthesisVoiceGender;
  readonly identifier: string;
  readonly language: string;
  readonly name: string;
  readonly quality: AVSpeechSynthesisVoiceQuality;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var AVSpeechSynthesisVoiceIdentifierAlex: string;

declare class AVSpeechSynthesizer extends NSObject {
  delegate: AVSpeechSynthesizerDelegate;
  setDelegate(_: AVSpeechSynthesizerDelegate)
  readonly isPaused: boolean;
  readonly isSpeaking: boolean;
  continueSpeaking(): boolean;
  pauseSpeakingAtBoundary(at: AVSpeechBoundary): boolean;
  speakUtterance(_: AVSpeechUtterance): void;
  stopSpeakingAtBoundary(at: AVSpeechBoundary): boolean;
  writeUtteranceToBufferCallback(_: AVSpeechUtterance, toBufferCallback: (p1: AVAudioBuffer) => void): void;
}

interface AVSpeechSynthesizerDelegate extends NSObject {
  speechSynthesizerDidStartSpeechUtterance?(_: AVSpeechSynthesizer, didStart: AVSpeechUtterance): void;
  speechSynthesizerDidFinishSpeechUtterance?(_: AVSpeechSynthesizer, didFinish: AVSpeechUtterance): void;
  speechSynthesizerDidPauseSpeechUtterance?(_: AVSpeechSynthesizer, didPause: AVSpeechUtterance): void;
  speechSynthesizerDidContinueSpeechUtterance?(_: AVSpeechSynthesizer, didContinue: AVSpeechUtterance): void;
  speechSynthesizerDidCancelSpeechUtterance?(_: AVSpeechSynthesizer, didCancel: AVSpeechUtterance): void;
  speechSynthesizerWillSpeakRangeOfSpeechStringUtterance?(_: AVSpeechSynthesizer, willSpeakRangeOfSpeechString: NSRange, utterance: AVSpeechUtterance): void;
}

declare var AVSpeechSynthesizerDelegate: {
  prototype: AVSpeechSynthesizerDelegate;
};

declare class AVSpeechUtterance extends NSObject implements NSCopying, NSSecureCoding {
  static speechUtteranceWithAttributedString(attributedString: NSAttributedString): AVSpeechUtterance;
  static speechUtteranceWithString(string: string): AVSpeechUtterance;
  readonly attributedSpeechString: NSAttributedString;
  pitchMultiplier: number;
  setPitchMultiplier(_: number)
  postUtteranceDelay: number;
  setPostUtteranceDelay(_: number)
  preUtteranceDelay: number;
  setPreUtteranceDelay(_: number)
  rate: number;
  setRate(_: number)
  readonly speechString: string;
  voice: AVSpeechSynthesisVoice;
  setVoice(_: AVSpeechSynthesisVoice)
  volume: number;
  setVolume(_: number)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithAttributedString(attributedString: NSAttributedString): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithString(string: string): this;
}

declare var AVSpeechUtteranceDefaultSpeechRate: number;

declare var AVSpeechUtteranceMaximumSpeechRate: number;

declare var AVSpeechUtteranceMinimumSpeechRate: number;

declare var AVStreamingKeyDeliveryContentKeyType: string;

declare var AVStreamingKeyDeliveryPersistentContentKeyType: string;

declare class AVSynchronizedLayer extends CALayer {
  playerItem: AVPlayerItem;
  setPlayerItem(_: AVPlayerItem)
}

declare class AVTextStyleRule extends NSObject implements NSCopying {
  static propertyListForTextStyleRules(for_: NSArray<AVTextStyleRule>): any;
  static textStyleRulesFromPropertyList(fromPropertyList: any): NSArray<AVTextStyleRule>;
  readonly textMarkupAttributes: NSDictionary<string, any>;
  readonly textSelector: string;
  static createWithTextMarkupAttributes(textMarkupAttributes: NSDictionary<string, any>): this;
  static createWithTextMarkupAttributesTextSelector(textMarkupAttributes: NSDictionary<string, any>, textSelector?: string): this;
}

declare class AVTimedMetadataGroup extends AVMetadataGroup implements NSCopying, NSMutableCopying {
  readonly timeRange: CMTimeRange;
  copyFormatDescription(): any;
  static createWithItemsTimeRange(items: NSArray<AVMetadataItem>, timeRange: CMTimeRange): this;
  static createWithSampleBuffer(sampleBuffer: any): this;
}

declare var AVTrackAssociationTypeAudioFallback: string;

declare var AVTrackAssociationTypeChapterList: string;

declare var AVTrackAssociationTypeForcedSubtitlesOnly: string;

declare var AVTrackAssociationTypeMetadataReferent: string;

declare var AVTrackAssociationTypeSelectionFollower: string;

declare var AVTrackAssociationTypeTimecode: string;

declare class AVURLAsset extends AVAsset implements AVContentKeyRecipient {
  static URLAssetWithURLOptions(url: NSURL, options?: NSDictionary<string, any>): AVURLAsset;
  static audiovisualMIMETypes(): NSArray<string>;
  static audiovisualTypes(): NSArray<string>;
  static isPlayableExtendedMIMEType(_: string): boolean;
  readonly URL: NSURL;
  readonly assetCache: AVAssetCache;
  readonly resourceLoader: AVAssetResourceLoader;
  readonly mayRequireContentKeysForMediaDataProcessing: boolean; // inherited from AVContentKeyRecipient
  compatibleTrackForCompositionTrack(for_: AVCompositionTrack): AVAssetTrack;
  static createWithUrlOptions(URL: NSURL, options?: NSDictionary<string, any>): this;
}

declare var AVURLAssetAllowsCellularAccessKey: string;

declare var AVURLAssetAllowsConstrainedNetworkAccessKey: string;

declare var AVURLAssetAllowsExpensiveNetworkAccessKey: string;

declare var AVURLAssetHTTPCookiesKey: string;

declare var AVURLAssetPreferPreciseDurationAndTimingKey: string;

declare var AVURLAssetReferenceRestrictionsKey: string;

declare var AVVideoAllowFrameReorderingKey: string;

declare var AVVideoAllowWideColorKey: string;

declare var AVVideoApertureModeCleanAperture: string;

declare var AVVideoApertureModeEncodedPixels: string;

declare var AVVideoApertureModeProductionAperture: string;

declare var AVVideoAverageBitRateKey: string;

declare var AVVideoAverageNonDroppableFrameRateKey: string;

declare var AVVideoCleanApertureHeightKey: string;

declare var AVVideoCleanApertureHorizontalOffsetKey: string;

declare var AVVideoCleanApertureKey: string;

declare var AVVideoCleanApertureVerticalOffsetKey: string;

declare var AVVideoCleanApertureWidthKey: string;

declare var AVVideoCodecKey: string;

declare var AVVideoCodecTypeAppleProRes422: string;

declare var AVVideoCodecTypeAppleProRes422HQ: string;

declare var AVVideoCodecTypeAppleProRes422LT: string;

declare var AVVideoCodecTypeAppleProRes422Proxy: string;

declare var AVVideoCodecTypeAppleProRes4444: string;

declare var AVVideoCodecTypeH264: string;

declare var AVVideoCodecTypeHEVC: string;

declare var AVVideoCodecTypeHEVCWithAlpha: string;

declare var AVVideoCodecTypeJPEG: string;

declare var AVVideoColorPrimariesKey: string;

declare var AVVideoColorPrimaries_EBU_3213: string;

declare var AVVideoColorPrimaries_ITU_R_2020: string;

declare var AVVideoColorPrimaries_ITU_R_709_2: string;

declare var AVVideoColorPrimaries_P3_D65: string;

declare var AVVideoColorPrimaries_SMPTE_C: string;

declare var AVVideoColorPropertiesKey: string;

interface AVVideoCompositing extends NSObject {
  requiredPixelBufferAttributesForRenderContext: NSDictionary<string, any>;
  sourcePixelBufferAttributes: NSDictionary<string, any>;
  supportsWideColorSourceFrames?: boolean;
  anticipateRenderingUsingHint?(using: AVVideoCompositionRenderHint): void;
  cancelAllPendingVideoCompositionRequests?(): void;
  prerollForRenderingUsingHint?(using: AVVideoCompositionRenderHint): void;
  renderContextChanged(_: AVVideoCompositionRenderContext): void;
  startVideoCompositionRequest(_: AVAsynchronousVideoCompositionRequest): void;
}

declare var AVVideoCompositing: {
  prototype: AVVideoCompositing;
};

declare class AVVideoComposition extends NSObject implements NSCopying, NSMutableCopying {
  readonly animationTool: AVVideoCompositionCoreAnimationTool;
  readonly colorPrimaries: string;
  readonly colorTransferFunction: string;
  readonly colorYCbCrMatrix: string;
  readonly customVideoCompositorClass: typeof NSObject;
  readonly frameDuration: CMTime;
  readonly instructions: NSArray<AVVideoCompositionInstructionProtocol>;
  readonly renderScale: number;
  readonly renderSize: NSSize;
  readonly sourceTrackIDForFrameTiming: number;
  isValidForAssetTimeRangeValidationDelegate(for_?: AVAsset, timeRange: CMTimeRange, validationDelegate?: AVVideoCompositionValidationHandling): boolean;
}

declare class AVVideoCompositionCoreAnimationTool extends NSObject {
  static videoCompositionCoreAnimationToolWithAdditionalLayerAsTrackID(additionalLayer: CALayer, asTrackID: number): AVVideoCompositionCoreAnimationTool;
  static videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayerInLayer(postProcessingAsVideoLayer: CALayer, in_: CALayer): AVVideoCompositionCoreAnimationTool;
  static videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayersInLayer(postProcessingAsVideoLayers: NSArray<CALayer>, in_: CALayer): AVVideoCompositionCoreAnimationTool;
}

declare class AVVideoCompositionInstruction extends NSObject implements AVVideoCompositionInstructionProtocol, NSCopying, NSMutableCopying, NSSecureCoding {
  readonly backgroundColor: any;
  readonly layerInstructions: NSArray<AVVideoCompositionLayerInstruction>;
  readonly containsTweening: boolean; // inherited from AVVideoCompositionInstructionProtocol
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly enablePostProcessing: boolean; // inherited from AVVideoCompositionInstructionProtocol
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly passthroughTrackID: number; // inherited from AVVideoCompositionInstructionProtocol
  readonly requiredSourceTrackIDs: NSArray<NSValue>; // inherited from AVVideoCompositionInstructionProtocol
  readonly superclass: typeof NSObject; // inherited from NSObject
  readonly timeRange: CMTimeRange; // inherited from AVVideoCompositionInstructionProtocol
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  conformsToProtocol(to: any /* Protocol */): boolean;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

interface AVVideoCompositionInstructionProtocol extends NSObject {
  containsTweening: boolean;
  enablePostProcessing: boolean;
  passthroughTrackID: number;
  requiredSourceTrackIDs: NSArray<NSValue>;
  timeRange: CMTimeRange;
}

declare var AVVideoCompositionInstructionProtocol: {
  prototype: AVVideoCompositionInstructionProtocol;
};

declare class AVVideoCompositionLayerInstruction extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {
  readonly trackID: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  getCropRectangleRampForTimeStartCropRectangleEndCropRectangleTimeRange(for_: CMTime, startCropRectangle?: NSRect, endCropRectangle?: NSRect, timeRange?: CMTimeRange): boolean;
  getOpacityRampForTimeStartOpacityEndOpacityTimeRange(for_: CMTime, startOpacity?: number, endOpacity?: number, timeRange?: CMTimeRange): boolean;
  getTransformRampForTimeStartTransformEndTransformTimeRange(for_: CMTime, start?: CGAffineTransform, end?: CGAffineTransform, timeRange?: CMTimeRange): boolean;
  static createWithCoder(coder: NSCoder): this;
}

declare class AVVideoCompositionRenderContext extends NSObject {
  readonly edgeWidths: AVEdgeWidths;
  readonly highQualityRendering: boolean;
  readonly pixelAspectRatio: AVPixelAspectRatio;
  readonly renderScale: number;
  readonly renderTransform: CGAffineTransform;
  readonly size: NSSize;
  readonly videoComposition: AVVideoComposition;
  newPixelBuffer(): any;
}

declare class AVVideoCompositionRenderHint extends NSObject {
  readonly endCompositionTime: CMTime;
  readonly startCompositionTime: CMTime;
}

interface AVVideoCompositionValidationHandling extends NSObject {
  videoCompositionShouldContinueValidatingAfterFindingInvalidTimeRangeInInstruction?(_: AVVideoComposition, shouldContinueValidatingAfterFindingInvalidTimeRangeIn: AVVideoCompositionInstructionProtocol): boolean;
  videoCompositionShouldContinueValidatingAfterFindingInvalidTrackIDInInstructionLayerInstructionAsset?(_: AVVideoComposition, shouldContinueValidatingAfterFindingInvalidTrackIDIn: AVVideoCompositionInstructionProtocol, layerInstruction: AVVideoCompositionLayerInstruction, asset: AVAsset): boolean;
  videoCompositionShouldContinueValidatingAfterFindingEmptyTimeRange?(_: AVVideoComposition, shouldContinueValidatingAfterFindingEmptyTimeRange: CMTimeRange): boolean;
  videoCompositionShouldContinueValidatingAfterFindingInvalidValueForKey?(_: AVVideoComposition, shouldContinueValidatingAfterFindingInvalidValueForKey: string): boolean;
}

declare var AVVideoCompositionValidationHandling: {
  prototype: AVVideoCompositionValidationHandling;
};

declare var AVVideoCompressionPropertiesKey: string;

declare var AVVideoDecompressionPropertiesKey: string;

declare var AVVideoEncoderSpecificationKey: string;

declare var AVVideoExpectedSourceFrameRateKey: string;

declare var AVVideoH264EntropyModeCABAC: string;

declare var AVVideoH264EntropyModeCAVLC: string;

declare var AVVideoH264EntropyModeKey: string;

declare var AVVideoHeightKey: string;

declare var AVVideoMaxKeyFrameIntervalDurationKey: string;

declare var AVVideoMaxKeyFrameIntervalKey: string;

declare var AVVideoPixelAspectRatioHorizontalSpacingKey: string;

declare var AVVideoPixelAspectRatioKey: string;

declare var AVVideoPixelAspectRatioVerticalSpacingKey: string;

declare var AVVideoProfileLevelH264Baseline30: string;

declare var AVVideoProfileLevelH264Baseline31: string;

declare var AVVideoProfileLevelH264Baseline41: string;

declare var AVVideoProfileLevelH264BaselineAutoLevel: string;

declare var AVVideoProfileLevelH264High40: string;

declare var AVVideoProfileLevelH264High41: string;

declare var AVVideoProfileLevelH264HighAutoLevel: string;

declare var AVVideoProfileLevelH264Main30: string;

declare var AVVideoProfileLevelH264Main31: string;

declare var AVVideoProfileLevelH264Main32: string;

declare var AVVideoProfileLevelH264Main41: string;

declare var AVVideoProfileLevelH264MainAutoLevel: string;

declare var AVVideoProfileLevelKey: string;

declare var AVVideoQualityKey: string;

declare var AVVideoScalingModeFit: string;

declare var AVVideoScalingModeKey: string;

declare var AVVideoScalingModeResize: string;

declare var AVVideoScalingModeResizeAspect: string;

declare var AVVideoScalingModeResizeAspectFill: string;

declare var AVVideoTransferFunctionKey: string;

declare var AVVideoTransferFunction_ITU_R_2100_HLG: string;

declare var AVVideoTransferFunction_ITU_R_709_2: string;

declare var AVVideoTransferFunction_SMPTE_240M_1995: string;

declare var AVVideoTransferFunction_SMPTE_ST_2084_PQ: string;

declare var AVVideoWidthKey: string;

declare var AVVideoYCbCrMatrixKey: string;

declare var AVVideoYCbCrMatrix_ITU_R_2020: string;

declare var AVVideoYCbCrMatrix_ITU_R_601_4: string;

declare var AVVideoYCbCrMatrix_ITU_R_709_2: string;

declare var AVVideoYCbCrMatrix_SMPTE_240M_1995: string;

module AVAssetExportSession {
  enum Status {
    Unknown = 0,
    Waiting = 1,
    Exporting = 2,
    Completed = 3,
    Failed = 4,
    Cancelled = 5
  }
}

module AVAssetImageGenerator {
  enum Result {
    Succeeded = 0,
    Failed = 1,
    Cancelled = 2
  }
}

module AVAssetReader {
  enum Status {
    Unknown = 0,
    Reading = 1,
    Completed = 2,
    Failed = 3,
    Cancelled = 4
  }
}

enum AVAssetReferenceRestrictions {
    ForbidNone = 0,
    ForbidRemoteReferenceToLocal = 1,
    ForbidLocalReferenceToRemote = 2,
    ForbidCrossSiteReference = 4,
    ForbidLocalReferenceToLocal = 8,
    ForbidAll = 65535,
    DefaultPolicy = 2
}

module AVAssetWriter {
  enum Status {
    Unknown = 0,
    Writing = 1,
    Completed = 2,
    Failed = 3,
    Cancelled = 4
  }
}

enum AVAudio3DMixingPointSourceInHeadMode {
    Mono = 0,
    Bypass = 1
}

enum AVAudio3DMixingRenderingAlgorithm {
    EqualPowerPanning = 0,
    SphericalHead = 1,
    HRTF = 2,
    SoundField = 3,
    StereoPassThrough = 5,
    HRTFHQ = 6,
    Auto = 7
}

enum AVAudio3DMixingSourceMode {
    SpatializeIfMono = 0,
    Bypass = 1,
    PointSource = 2,
    AmbienceBed = 3
}

enum AVAudioCommonFormat {
    OtherFormat = 0,
    PCMFormatFloat32 = 1,
    PCMFormatFloat64 = 2,
    PCMFormatInt16 = 3,
    PCMFormatInt32 = 4
}

enum AVAudioConverterInputStatus {
    HaveData = 0,
    NoDataNow = 1,
    EndOfStream = 2
}

enum AVAudioConverterOutputStatus {
    HaveData = 0,
    InputRanDry = 1,
    EndOfStream = 2,
    Error = 3
}

enum AVAudioConverterPrimeMethod {
    Pre = 0,
    Normal = 1,
    None = 2
}

enum AVAudioEngineManualRenderingError {
    InvalidMode = -80800,
    Initialized = -80801,
    NotRunning = -80802
}

enum AVAudioEngineManualRenderingMode {
    Offline = 0,
    Realtime = 1
}

enum AVAudioEngineManualRenderingStatus {
    Error = -1,
    Success = 0,
    InsufficientDataFromInputNode = 1,
    CannotDoInCurrentContext = 2
}

enum AVAudioEnvironmentDistanceAttenuationModel {
    Exponential = 1,
    Inverse = 2,
    Linear = 3
}

enum AVAudioEnvironmentOutputType {
    Auto = 0,
    Headphones = 1,
    BuiltInSpeakers = 2,
    ExternalSpeakers = 3
}

enum AVAudioPlayerNodeBufferOptions {
    Loops = 1,
    Interrupts = 2,
    InterruptsAtLoop = 4
}

enum AVAudioPlayerNodeCompletionCallbackType {
    DataConsumed = 0,
    DataRendered = 1,
    DataPlayedBack = 2
}

enum AVAudioQuality {
    Min = 0,
    Low = 32,
    Medium = 64,
    High = 96,
    Max = 127
}

module AVAudioSession {
  enum CategoryOptions {
    MixWithOthers = 1,
    DuckOthers = 2,
    AllowBluetooth = 4,
    DefaultToSpeaker = 8,
    InterruptSpokenAudioAndMixWithOthers = 17,
    AllowBluetoothA2DP = 32,
    AllowAirPlay = 64
  }
  enum IOType {
    NotSpecified = 0,
    Aggregated = 1
  }
  enum InterruptionOptions {
    ShouldResume = 1
  }
  enum InterruptionType {
    Began = 1,
    Ended = 0
  }
  enum PortOverride {
    None = 0,
    Speaker = 1936747378
  }
  enum PromptStyle {
    None = 1852796517,
    Short = 1936224884,
    Normal = 1852992876
  }
  enum RecordPermission {
    Undetermined = 1970168948,
    Denied = 1684369017,
    Granted = 1735552628
  }
  enum RouteChangeReason {
    Unknown = 0,
    NewDeviceAvailable = 1,
    OldDeviceUnavailable = 2,
    CategoryChange = 3,
    Override = 4,
    WakeFromSleep = 6,
    NoSuitableRouteForCategory = 7,
    RouteConfigurationChange = 8
  }
  enum RouteSharingPolicy {
    Default = 0,
    LongFormAudio = 1,
    LongForm = 1,
    Independent = 2,
    LongFormVideo = 3
  }
  enum SetActiveOptions {
    NotifyOthersOnDeactivation = 1
  }
  enum SilenceSecondaryAudioHintType {
    Begin = 1,
    End = 0
  }
}

enum AVAudioSessionActivationOptions {
    None = 0
}

enum AVAudioUnitDistortionPreset {
    DrumsBitBrush = 0,
    DrumsBufferBeats = 1,
    DrumsLoFi = 2,
    MultiBrokenSpeaker = 3,
    MultiCellphoneConcert = 4,
    MultiDecimated1 = 5,
    MultiDecimated2 = 6,
    MultiDecimated3 = 7,
    MultiDecimated4 = 8,
    MultiDistortedFunk = 9,
    MultiDistortedCubed = 10,
    MultiDistortedSquared = 11,
    MultiEcho1 = 12,
    MultiEcho2 = 13,
    MultiEchoTight1 = 14,
    MultiEchoTight2 = 15,
    MultiEverythingIsBroken = 16,
    SpeechAlienChatter = 17,
    SpeechCosmicInterference = 18,
    SpeechGoldenPi = 19,
    SpeechRadioTower = 20,
    SpeechWaves = 21
}

enum AVAudioUnitEQFilterType {
    Parametric = 0,
    LowPass = 1,
    HighPass = 2,
    ResonantLowPass = 3,
    ResonantHighPass = 4,
    BandPass = 5,
    BandStop = 6,
    LowShelf = 7,
    HighShelf = 8,
    ResonantLowShelf = 9,
    ResonantHighShelf = 10
}

enum AVAudioUnitReverbPreset {
    SmallRoom = 0,
    MediumRoom = 1,
    LargeRoom = 2,
    MediumHall = 3,
    LargeHall = 4,
    Plate = 5,
    MediumChamber = 6,
    LargeChamber = 7,
    Cathedral = 8,
    LargeRoom2 = 9,
    MediumHall2 = 10,
    MediumHall3 = 11,
    LargeHall2 = 12
}

enum AVAuthorizationStatus {
    NotDetermined = 0,
    Restricted = 1,
    Denied = 2,
    Authorized = 3
}

enum AVCaptureColorSpace {
    sRGB = 0,
    P3_D65 = 1
}

module AVCaptureDevice {
  enum AutoFocusRangeRestriction {
    None = 0,
    Near = 1,
    Far = 2
  }
  enum ExposureMode {
    Locked = 0,
    AutoExpose = 1,
    ContinuousAutoExposure = 2,
    Custom = 3
  }
  enum FlashMode {
    Off = 0,
    On = 1,
    Auto = 2
  }
  enum FocusMode {
    Locked = 0,
    AutoFocus = 1,
    ContinuousAutoFocus = 2
  }
  enum LensStabilizationStatus {
    Unsupported = 0,
    Off = 1,
    Active = 2,
    OutOfRange = 3,
    Unavailable = 4
  }
  enum Position {
    Unspecified = 0,
    Back = 1,
    Front = 2
  }
  enum TorchMode {
    Off = 0,
    On = 1,
    Auto = 2
  }
  enum TransportControlsPlaybackMode {
    NotPlayingMode = 0,
    PlayingMode = 1
  }
  enum WhiteBalanceMode {
    Locked = 0,
    AutoWhiteBalance = 1,
    ContinuousAutoWhiteBalance = 2
  }
}

module AVCaptureDeviceFormat {
  enum AutoFocusSystem {
    None = 0,
    ContrastDetection = 1,
    PhaseDetection = 2
  }
}

module AVCaptureOutput {
  enum DataDroppedReason {
    None = 0,
    LateData = 1,
    OutOfBuffers = 2,
    Discontinuity = 3
  }
}

module AVCapturePhotoOutput {
  enum QualityPrioritization {
    Speed = 1,
    Balanced = 2,
    Quality = 3
  }
}

module AVCaptureSession {
  enum InterruptionReason {
    VideoDeviceNotAvailableInBackground = 1,
    AudioDeviceInUseByAnotherClient = 2,
    VideoDeviceInUseByAnotherClient = 3,
    VideoDeviceNotAvailableWithMultipleForegroundApps = 4,
    VideoDeviceNotAvailableDueToSystemPressure = 5
  }
}

module AVCaptureSystemPressureState {
  enum Factors {
    None = 0,
    SystemTemperature = 1,
    PeakPower = 2,
    DepthModuleTemperature = 4
  }
}

enum AVCaptureVideoOrientation {
    Portrait = 1,
    PortraitUpsideDown = 2,
    LandscapeRight = 3,
    LandscapeLeft = 4
}

enum AVContentAuthorizationStatus {
    Unknown = 0,
    Completed = 1,
    Cancelled = 2,
    TimedOut = 3,
    Busy = 4,
    NotAvailable = 5,
    NotPossible = 6
}

module AVContentKeyRequest {
  enum Status {
    RequestingResponse = 0,
    ReceivedResponse = 1,
    Renewed = 2,
    Retried = 3,
    Cancelled = 4,
    Failed = 5
  }
}

module AVDepthData {
  enum Accuracy {
    Relative = 0,
    Absolute = 1
  }
  enum Quality {
    Low = 0,
    High = 1
  }
}

enum AVError {
    Unknown = -11800,
    OutOfMemory = -11801,
    SessionNotRunning = -11803,
    DeviceAlreadyUsedByAnotherSession = -11804,
    NoDataCaptured = -11805,
    SessionConfigurationChanged = -11806,
    DiskFull = -11807,
    DeviceWasDisconnected = -11808,
    MediaChanged = -11809,
    MaximumDurationReached = -11810,
    MaximumFileSizeReached = -11811,
    MediaDiscontinuity = -11812,
    MaximumNumberOfSamplesForFileFormatReached = -11813,
    DeviceNotConnected = -11814,
    DeviceInUseByAnotherApplication = -11815,
    DeviceLockedForConfigurationByAnotherProcess = -11817,
    ExportFailed = -11820,
    DecodeFailed = -11821,
    InvalidSourceMedia = -11822,
    FileAlreadyExists = -11823,
    CompositionTrackSegmentsNotContiguous = -11824,
    InvalidCompositionTrackSegmentDuration = -11825,
    InvalidCompositionTrackSegmentSourceStartTime = -11826,
    InvalidCompositionTrackSegmentSourceDuration = -11827,
    FileFormatNotRecognized = -11828,
    FileFailedToParse = -11829,
    MaximumStillImageCaptureRequestsExceeded = -11830,
    ContentIsProtected = -11831,
    NoImageAtTime = -11832,
    DecoderNotFound = -11833,
    EncoderNotFound = -11834,
    ContentIsNotAuthorized = -11835,
    ApplicationIsNotAuthorized = -11836,
    OperationNotSupportedForAsset = -11838,
    DecoderTemporarilyUnavailable = -11839,
    EncoderTemporarilyUnavailable = -11840,
    InvalidVideoComposition = -11841,
    ReferenceForbiddenByReferencePolicy = -11842,
    InvalidOutputURLPathExtension = -11843,
    ScreenCaptureFailed = -11844,
    DisplayWasDisabled = -11845,
    TorchLevelUnavailable = -11846,
    IncompatibleAsset = -11848,
    FailedToLoadMediaData = -11849,
    ServerIncorrectlyConfigured = -11850,
    ApplicationIsNotAuthorizedToUseDevice = -11852,
    FailedToParse = -11853,
    FileTypeDoesNotSupportSampleReferences = -11854,
    UndecodableMediaData = -11855,
    AirPlayControllerRequiresInternet = -11856,
    AirPlayReceiverRequiresInternet = -11857,
    VideoCompositorFailed = -11858,
    CreateContentKeyRequestFailed = -11860,
    UnsupportedOutputSettings = -11861,
    OperationNotAllowed = -11862,
    ContentIsUnavailable = -11863,
    FormatUnsupported = -11864,
    MalformedDepth = -11865,
    ContentNotUpdated = -11866,
    NoLongerPlayable = -11867,
    NoCompatibleAlternatesForExternalDisplay = -11868,
    NoSourceTrack = -11869,
    ExternalPlaybackNotSupportedForAsset = -11870,
    OperationNotSupportedForPreset = -11871,
    SessionHardwareCostOverage = -11872,
    UnsupportedDeviceActiveFormat = -11873
}

enum AVKeyValueStatus {
    Unknown = 0,
    Loading = 1,
    Loaded = 2,
    Failed = 3,
    Cancelled = 4
}

enum AVMovieWritingOptions {
    AddMovieHeaderToDestination = 0,
    TruncateDestinationToMovieHeaderOnly = 1
}

enum AVMusicSequenceLoadOptions {
    SMF_PreserveTracks = 0,
    SMF_ChannelsToTracks = 1
}

enum AVMusicTrackLoopCount {
    Forever = -1
}

module AVPlayer {
  enum ActionAtItemEnd {
    Advance = 0,
    Pause = 1,
    None = 2
  }
  enum HDRMode {
    HLG = 1,
    HDR10 = 2,
    DolbyVision = 4
  }
  enum Status {
    Unknown = 0,
    ReadyToPlay = 1,
    Failed = 2
  }
  enum TimeControlStatus {
    Paused = 0,
    WaitingToPlayAtSpecifiedRate = 1,
    Playing = 2
  }
}

module AVPlayerItem {
  enum Status {
    Unknown = 0,
    ReadyToPlay = 1,
    Failed = 2
  }
}

module AVPlayerLooper {
  enum Status {
    Unknown = 0,
    Ready = 1,
    Failed = 2,
    Cancelled = 3
  }
}

enum AVQueuedSampleBufferRenderingStatus {
    Unknown = 0,
    Rendering = 1,
    Failed = 2
}

module AVSampleBufferRequest {
  enum Direction {
    Forward = 1,
    None = 0,
    Reverse = -1
  }
  enum Mode {
    Immediate = 0,
    Scheduled = 1,
    Opportunistic = 2
  }
}

enum AVSpeechBoundary {
    Immediate = 0,
    Word = 1
}

enum AVSpeechSynthesisVoiceGender {
    Unspecified = 0,
    Male = 1,
    Female = 2
}

enum AVSpeechSynthesisVoiceQuality {
    Default = 1,
    Enhanced = 2
}

enum AVVideoFieldMode {
    Both = 0,
    TopOnly = 1,
    BottomOnly = 2,
    Deinterlace = 3
}

