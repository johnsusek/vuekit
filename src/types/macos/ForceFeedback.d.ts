
interface FFCAPABILITIES {
	ffSpecVer: NumVersion;
	supportedEffects: number;
	emulatedEffects: number;
	subType: number;
	numFfAxes: number;
	ffAxes: number;
	storageCapacity: number;
	playbackCapacity: number;
	firmwareVer: NumVersion;
	hardwareVer: NumVersion;
	driverVer: NumVersion;
}
declare var FFCAPABILITIES: FFCAPABILITIES;

declare const FFCAP_ET_CONSTANTFORCE: number;

declare const FFCAP_ET_CUSTOMFORCE: number;

declare const FFCAP_ET_DAMPER: number;

declare const FFCAP_ET_FRICTION: number;

declare const FFCAP_ET_INERTIA: number;

declare const FFCAP_ET_RAMPFORCE: number;

declare const FFCAP_ET_SAWTOOTHDOWN: number;

declare const FFCAP_ET_SAWTOOTHUP: number;

declare const FFCAP_ET_SINE: number;

declare const FFCAP_ET_SPRING: number;

declare const FFCAP_ET_SQUARE: number;

declare const FFCAP_ET_TRIANGLE: number;

declare const FFCAP_ST_KINESTHETIC: number;

declare const FFCAP_ST_VIBRATION: number;

interface FFCONDITION {
	lOffset: number;
	lPositiveCoefficient: number;
	lNegativeCoefficient: number;
	dwPositiveSaturation: number;
	dwNegativeSaturation: number;
	lDeadBand: number;
}
declare var FFCONDITION: FFCONDITION;

interface FFCONSTANTFORCE {
	lMagnitude: number;
}
declare var FFCONSTANTFORCE: FFCONSTANTFORCE;

interface FFCUSTOMFORCE {
	cChannels: number;
	dwSamplePeriod: number;
	cSamples: number;
	rglForceData: number;
}
declare var FFCUSTOMFORCE: FFCUSTOMFORCE;

declare function FFCreateDevice(hidDevice: number, pDeviceReference: __FFDHIDDEN): number;

declare function FFDeviceCreateEffect(deviceReference: __FFDHIDDEN, uuidRef: any, pEffectDefinition: FFEFFECT, pEffectReference: __FFEHIDDEN): number;

declare function FFDeviceEscape(deviceReference: __FFDHIDDEN, pFFEffectEscape: FFEFFESCAPE): number;

declare function FFDeviceGetForceFeedbackCapabilities(deviceReference: __FFDHIDDEN, pFFCapabilities: FFCAPABILITIES): number;

declare function FFDeviceGetForceFeedbackProperty(deviceReference: __FFDHIDDEN, property: number, pValue: any, valueSize: number): number;

declare function FFDeviceGetForceFeedbackState(deviceReference: __FFDHIDDEN, pFFState: number): number;

declare function FFDeviceReleaseEffect(deviceReference: __FFDHIDDEN, effectReference: __FFEHIDDEN): number;

declare function FFDeviceSendForceFeedbackCommand(deviceReference: __FFDHIDDEN, flags: number): number;

declare function FFDeviceSetCooperativeLevel(deviceReference: __FFDHIDDEN, taskIdentifier: any, flags: number): number;

declare function FFDeviceSetForceFeedbackProperty(deviceReference: __FFDHIDDEN, property: number, pValue: any): number;

declare const FFEB_NOTRIGGER: number;

interface FFEFFECT {
	dwSize: number;
	dwFlags: number;
	dwDuration: number;
	dwSamplePeriod: number;
	dwGain: number;
	dwTriggerButton: number;
	dwTriggerRepeatInterval: number;
	cAxes: number;
	rgdwAxes: number;
	rglDirection: number;
	lpEnvelope: FFENVELOPE;
	cbTypeSpecificParams: number;
	lpvTypeSpecificParams: any;
	dwStartDelay: number;
}
declare var FFEFFECT: FFEFFECT;

interface FFEFFESCAPE {
	dwSize: number;
	dwCommand: number;
	lpvInBuffer: any;
	cbInBuffer: number;
	lpvOutBuffer: any;
	cbOutBuffer: number;
}
declare var FFEFFESCAPE: FFEFFESCAPE;

declare const FFEFF_CARTESIAN: number;

declare const FFEFF_POLAR: number;

declare const FFEFF_SPHERICAL: number;

declare const FFEGES_EMULATED: number;

declare const FFEGES_NOTPLAYING: number;

declare const FFEGES_PLAYING: number;

interface FFENVELOPE {
	dwSize: number;
	dwAttackLevel: number;
	dwAttackTime: number;
	dwFadeLevel: number;
	dwFadeTime: number;
}
declare var FFENVELOPE: FFENVELOPE;

declare const FFEP_ALLPARAMS: number;

declare const FFEP_AXES: number;

declare const FFEP_DIRECTION: number;

declare const FFEP_DURATION: number;

declare const FFEP_ENVELOPE: number;

declare const FFEP_GAIN: number;

declare const FFEP_NODOWNLOAD: number;

declare const FFEP_NORESTART: number;

declare const FFEP_SAMPLEPERIOD: number;

declare const FFEP_START: number;

declare const FFEP_STARTDELAY: number;

declare const FFEP_TRIGGERBUTTON: number;

declare const FFEP_TRIGGERREPEATINTERVAL: number;

declare const FFEP_TYPESPECIFICPARAMS: number;

declare const FFES_NODOWNLOAD: number;

declare const FFES_SOLO: number;

declare function FFEffectDownload(effectReference: __FFEHIDDEN): number;

declare function FFEffectEscape(effectReference: __FFEHIDDEN, pFFEffectEscape: FFEFFESCAPE): number;

declare function FFEffectGetEffectStatus(effectReference: __FFEHIDDEN, pFlags: number): number;

declare function FFEffectGetParameters(effectReference: __FFEHIDDEN, pFFEffect: FFEFFECT, flags: number): number;

declare function FFEffectSetParameters(effectReference: __FFEHIDDEN, pFFEffect: FFEFFECT, flags: number): number;

declare function FFEffectStart(effectReference: __FFEHIDDEN, iterations: number, flags: number): number;

declare function FFEffectStop(effectReference: __FFEHIDDEN): number;

declare function FFEffectUnload(effectReference: __FFEHIDDEN): number;

declare const FFGFFS_ACTUATORSOFF: number;

declare const FFGFFS_ACTUATORSON: number;

declare const FFGFFS_DEVICELOST: number;

declare const FFGFFS_EMPTY: number;

declare const FFGFFS_PAUSED: number;

declare const FFGFFS_POWEROFF: number;

declare const FFGFFS_POWERON: number;

declare const FFGFFS_SAFETYSWITCHOFF: number;

declare const FFGFFS_SAFETYSWITCHON: number;

declare const FFGFFS_STOPPED: number;

declare const FFGFFS_USERFFSWITCHOFF: number;

declare const FFGFFS_USERFFSWITCHON: number;

declare function FFIsForceFeedback(hidDevice: number): number;

interface FFPERIODIC {
	dwMagnitude: number;
	lOffset: number;
	dwPhase: number;
	dwPeriod: number;
}
declare var FFPERIODIC: FFPERIODIC;

declare const FFPROP_AUTOCENTER: number;

declare const FFPROP_FFGAIN: number;

interface FFRAMPFORCE {
	lStart: number;
	lEnd: number;
}
declare var FFRAMPFORCE: FFRAMPFORCE;

declare function FFReleaseDevice(deviceReference: __FFDHIDDEN): number;

declare const FFSCL_BACKGROUND: number;

declare const FFSCL_EXCLUSIVE: number;

declare const FFSCL_FOREGROUND: number;

declare const FFSCL_NONEXCLUSIVE: number;

declare const FFSFFC_CONTINUE: number;

declare const FFSFFC_PAUSE: number;

declare const FFSFFC_RESET: number;

declare const FFSFFC_SETACTUATORSOFF: number;

declare const FFSFFC_SETACTUATORSON: number;

declare const FFSFFC_STOPALL: number;

interface ForceFeedbackDeviceState {
	dwSize: number;
	dwState: number;
	dwLoad: number;
}
declare var ForceFeedbackDeviceState: ForceFeedbackDeviceState;

interface ForceFeedbackVersion {
	apiVersion: NumVersion;
	plugInVersion: NumVersion;
}
declare var ForceFeedbackVersion: ForceFeedbackVersion;

interface IOForceFeedbackDeviceInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	ForceFeedbackGetVersion: (p1: any, p2: ForceFeedbackVersion) => number;
	InitializeTerminate: (p1: any, p2: NumVersion, p3: number, p4: number) => number;
	DestroyEffect: (p1: any, p2: number) => number;
	DownloadEffect: (p1: any, p2: any, p3: number, p4: FFEFFECT, p5: number) => number;
	Escape: (p1: any, p2: number, p3: FFEFFESCAPE) => number;
	GetEffectStatus: (p1: any, p2: number, p3: number) => number;
	GetForceFeedbackCapabilities: (p1: any, p2: FFCAPABILITIES) => number;
	GetForceFeedbackState: (p1: any, p2: ForceFeedbackDeviceState) => number;
	SendForceFeedbackCommand: (p1: any, p2: number) => number;
	SetProperty: (p1: any, p2: number, p3: any) => number;
	StartEffect: (p1: any, p2: number, p3: number, p4: number) => number;
	StopEffect: (p1: any, p2: number) => number;
}
declare var IOForceFeedbackDeviceInterface: IOForceFeedbackDeviceInterface;

interface __FFDHIDDEN {
}
declare var __FFDHIDDEN: __FFDHIDDEN;

interface __FFEHIDDEN {
}
declare var __FFEHIDDEN: __FFEHIDDEN;

declare const kFFAPIMajorRev: number;

declare const kFFAPIMinorAndBugRev: number;

declare const kFFAPINonRelRev: number;

declare const kFFAPIStage: number;

declare const kFFPlugInAPIMajorRev: number;

declare const kFFPlugInAPIMinorAndBugRev: number;

declare const kFFPlugInAPINonRelRev: number;

declare const kFFPlugInAPIStage: number;
