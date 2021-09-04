
interface ATASMARTData {
	vendorSpecific1: number;
	offLineDataCollectionStatus: number;
	selfTestExecutionStatus: number;
	secondsToCompleteOffLineActivity: number;
	vendorSpecific2: number;
	offLineDataCollectionCapability: number;
	SMARTCapability: number;
	errorLoggingCapability: number;
	vendorSpecific3: number;
	shortTestPollingInterval: number;
	extendedTestPollingInterval: number;
	reserved: number;
	vendorSpecific4: number;
	checksum: number;
}
declare var ATASMARTData: ATASMARTData;

interface ATASMARTDataThresholds {
	vendorSpecific1: number;
	vendorSpecific2: number;
	checksum: number;
}
declare var ATASMARTDataThresholds: ATASMARTDataThresholds;

interface ATASMARTLogDirectory {
	SMARTLoggingVersion: number;
	entries: ATASMARTLogEntry;
}
declare var ATASMARTLogDirectory: ATASMARTLogDirectory;

interface ATASMARTLogEntry {
	numberOfSectors: number;
	reserved: number;
}
declare var ATASMARTLogEntry: ATASMARTLogEntry;

interface BDDiscInfo {
	dataLength: number;
	discStatus: number;
	stateOfLastSession: number;
	erasable: number;
	dataType: number;
	reserved2: number;
	numberOfSessionsLSB: number;
	firstTrackNumberInLastSessionLSB: number;
	lastTrackNumberInLastSessionLSB: number;
	reserved4: number;
	numberOfSessionsMSB: number;
	firstTrackNumberInLastSessionMSB: number;
	lastTrackNumberInLastSessionMSB: number;
	reserved6: number;
}
declare var BDDiscInfo: BDDiscInfo;

interface BDTrackInfo {
	dataLength: number;
	trackNumberLSB: number;
	sessionNumberLSB: number;
	reserved: number;
	reserved2: number;
	damage: number;
	reserved3: number;
	reserved4: number;
	blank: number;
	reservedTrack: number;
	nextWritableAddressValid: number;
	lastRecordedAddressValid: number;
	reserved5: number;
	trackStartAddress: number;
	nextWritableAddress: number;
	freeBlocks: number;
	clusterSize: number;
	trackSize: number;
	lastRecordedAddress: number;
	trackNumberMSB: number;
	sessionNumberMSB: number;
	reserved6: number;
	reserved7: number;
}
declare var BDTrackInfo: BDTrackInfo;

declare const BIDIRECTIONAL_ECHO_CANCELING_SPEAKERPHONE: number;

declare const BIDIRECTIONAL_ECHO_SUPPRESSING_SPEAKERPHONE: number;

declare const BIDIRECTIONAL_HANDSET: number;

declare const BIDIRECTIONAL_HEADSET: number;

declare const BIDIRECTIONAL_SPEAKERPHONE_NO_ECHO_REDX: number;

declare const BIDIRECTIONAL_UNDEFINED: number;

interface Block0 {
	sbSig: number;
	sbBlkSize: number;
	sbBlkCount: number;
	sbDevType: number;
	sbDevId: number;
	sbDrvrData: number;
	sbDrvrCount: number;
	sbDrvrMap: DDMap;
	sbReserved: number;
}
declare var Block0: Block0;

interface CDATIP {
	dataLength: number;
	reserved: number;
	referenceSpeed: number;
	reserved3: number;
	indicativeTargetWritingPower: number;
	reserved2: number;
	reserved5: number;
	unrestrictedUse: number;
	reserved4: number;
	a3Valid: number;
	a2Valid: number;
	a1Valid: number;
	discSubType: number;
	discType: number;
	reserved6: number;
	reserved7: number;
	startTimeOfLeadIn: CDMSF;
	reserved8: number;
	lastPossibleStartTimeOfLeadOut: CDMSF;
	reserved9: number;
	a1: number;
	reserved10: number;
	a2: number;
	reserved11: number;
	a3: number;
	reserved12: number;
}
declare var CDATIP: CDATIP;

interface CDAudioStatus {
	status: number;
	position: { time: CDMSF; track: { index: number; number: number; time: CDMSF; }; };
}
declare var CDAudioStatus: CDAudioStatus;

interface CDDiscInfo {
	dataLength: number;
	discStatus: number;
	stateOfLastSession: number;
	erasable: number;
	reserved: number;
	numberOfFirstTrack: number;
	numberOfSessionsLSB: number;
	firstTrackNumberInLastSessionLSB: number;
	lastTrackNumberInLastSessionLSB: number;
	reserved3: number;
	unrestrictedUse: number;
	discBarCodeValid: number;
	discIdentificationValid: number;
	discType: number;
	numberOfSessionsMSB: number;
	firstTrackNumberInLastSessionMSB: number;
	lastTrackNumberInLastSessionMSB: number;
	discIdentification: number;
	reserved7: number;
	lastSessionLeadInStartTime: CDMSF;
	reserved8: number;
	lastPossibleStartTimeOfLeadOut: CDMSF;
	discBarCode: number;
	reserved9: number;
	numberOfOPCTableEntries: number;
	opcTableEntries: number;
}
declare var CDDiscInfo: CDDiscInfo;

interface CDMSF {
	minute: number;
	second: number;
	frame: number;
}
declare var CDMSF: CDMSF;

interface CDPMA {
	dataLength: number;
	reserved: number;
	reserved2: number;
	descriptors: CDPMADescriptor;
}
declare var CDPMA: CDPMA;

interface CDPMADescriptor {
	reserved: number;
	control: number;
	adr: number;
	tno: number;
	point: number;
	address: CDMSF;
	zero: number;
	p: CDMSF;
}
declare var CDPMADescriptor: CDPMADescriptor;

enum CDSectorArea {

	kCDSectorAreaSync = 128,

	kCDSectorAreaHeader = 32,

	kCDSectorAreaSubHeader = 64,

	kCDSectorAreaUser = 16,

	kCDSectorAreaAuxiliary = 8,

	kCDSectorAreaErrorFlags = 2,

	kCDSectorAreaSubChannel = 1,

	kCDSectorAreaSubChannelQ = 4
}


enum CDSectorSize {

	kCDSectorSizeCDDA = 2352,

	kCDSectorSizeMode1 = 2048,

	kCDSectorSizeMode2 = 2336,

	kCDSectorSizeMode2Form1 = 2048,

	kCDSectorSizeMode2Form2 = 2328,

	kCDSectorSizeWhole = 2352
}


enum CDSectorType {

	kCDSectorTypeUnknown = 0,

	kCDSectorTypeCDDA = 1,

	kCDSectorTypeMode1 = 2,

	kCDSectorTypeMode2 = 3,

	kCDSectorTypeMode2Form1 = 4,

	kCDSectorTypeMode2Form2 = 5,

	kCDSectorTypeCount = 6
}


interface CDTEXT {
	dataLength: number;
	reserved: number;
	reserved2: number;
	descriptors: CDTEXTDescriptor;
}
declare var CDTEXT: CDTEXT;

interface CDTEXTDescriptor {
	packType: number;
	trackNumber: number;
	sequenceNumber: number;
	characterPosition: number;
	blockNumber: number;
	doubleByteCharacterCode: number;
	textData: number;
	reserved: number;
}
declare var CDTEXTDescriptor: CDTEXTDescriptor;

interface CDTOC {
	length: number;
	sessionFirst: number;
	sessionLast: number;
	descriptors: CDTOCDescriptor;
}
declare var CDTOC: CDTOC;

interface CDTOCDescriptor {
	session: number;
	control: number;
	adr: number;
	tno: number;
	point: number;
	address: CDMSF;
	zero: number;
	p: CDMSF;
}
declare var CDTOCDescriptor: CDTOCDescriptor;

interface CDTrackInfo {
	dataLength: number;
	trackNumberLSB: number;
	sessionNumberLSB: number;
	reserved: number;
	trackMode: number;
	copy: number;
	damage: number;
	reserved3: number;
	dataMode: number;
	fixedPacket: number;
	packet: number;
	blank: number;
	reservedTrack: number;
	nextWritableAddressValid: number;
	lastRecordedAddressValid: number;
	reserved5: number;
	trackStartAddress: number;
	nextWritableAddress: number;
	freeBlocks: number;
	fixedPacketSize: number;
	trackSize: number;
	lastRecordedAddress: number;
	trackNumberMSB: number;
	sessionNumberMSB: number;
	reserved6: number;
	reserved7: number;
}
declare var CDTrackInfo: CDTrackInfo;

interface DASDModeParameterBlockDescriptor {
	NUMBER_OF_BLOCKS: number;
	DENSITY_CODE: number;
	BLOCK_LENGTH: number;
}
declare var DASDModeParameterBlockDescriptor: DASDModeParameterBlockDescriptor;

interface DCLCallProc {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
	proc: (p1: DCLCommand) => void;
	procData: any;
}
declare var DCLCallProc: DCLCallProc;

interface DCLCommand {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
	operands: number;
}
declare var DCLCommand: DCLCommand;

interface DCLJump {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
	pJumpDCLLabel: DCLLabel;
}
declare var DCLJump: DCLJump;

interface DCLLabel {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
}
declare var DCLLabel: DCLLabel;

interface DCLNuDCLLeader {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
	program: any;
}
declare var DCLNuDCLLeader: DCLNuDCLLeader;

interface DCLPtrTimeStamp {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
	timeStampPtr: number;
}
declare var DCLPtrTimeStamp: DCLPtrTimeStamp;

interface DCLSetTagSyncBits {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
	tagBits: number;
	syncBits: number;
}
declare var DCLSetTagSyncBits: DCLSetTagSyncBits;

interface DCLTimeStamp {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
	timeStamp: number;
}
declare var DCLTimeStamp: DCLTimeStamp;

interface DCLTransferBuffer {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
	buffer: any;
	size: number;
	packetSize: number;
	reserved: number;
	bufferOffset: number;
}
declare var DCLTransferBuffer: DCLTransferBuffer;

interface DCLTransferPacket {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
	buffer: any;
	size: number;
}
declare var DCLTransferPacket: DCLTransferPacket;

interface DCLUpdateDCLList {
	pNextDCLCommand: DCLCommand;
	compilerData: number;
	opcode: number;
	dclCommandList: DCLCommand;
	numDCLCommands: number;
}
declare var DCLUpdateDCLList: DCLUpdateDCLList;

interface DDMap {
	ddBlock: number;
	ddSize: number;
	ddType: number;
}
declare var DDMap: DDMap;

interface DPME {
	dpme_signature: number;
	dpme_reserved_1: number;
	dpme_map_entries: number;
	dpme_pblock_start: number;
	dpme_pblocks: number;
	dpme_name: number;
	dpme_type: number;
	dpme_lblock_start: number;
	dpme_lblocks: number;
	dpme_flags: number;
	dpme_boot_block: number;
	dpme_boot_bytes: number;
	dpme_load_addr: number;
	dpme_load_addr_2: number;
	dpme_goto_addr: number;
	dpme_goto_addr_2: number;
	dpme_checksum: number;
	dpme_process_id: number;
	dpme_reserved_2: number;
	dpme_reserved_3: number;
}
declare var DPME: DPME;

interface DVDAuthenticationGrantIDInfo {
	dataLength: number;
	reserved: number;
	reserved2: number;
	reservedBits: number;
	grantID: number;
}
declare var DVDAuthenticationGrantIDInfo: DVDAuthenticationGrantIDInfo;

interface DVDAuthenticationSuccessFlagInfo {
	dataLength: number;
	reserved: number;
	reserved2: number;
	successFlag: number;
	reservedBits: number;
}
declare var DVDAuthenticationSuccessFlagInfo: DVDAuthenticationSuccessFlagInfo;

interface DVDChallengeKeyInfo {
	dataLength: number;
	reserved: number;
	challengeKeyValue: number;
	reserved2: number;
}
declare var DVDChallengeKeyInfo: DVDChallengeKeyInfo;

interface DVDCopyrightInfo {
	dataLength: number;
	reserved: number;
	copyrightProtectionSystemType: number;
	regionMask: number;
	reserved2: number;
}
declare var DVDCopyrightInfo: DVDCopyrightInfo;

interface DVDDiscInfo {
	dataLength: number;
	discStatus: number;
	stateOfLastBorder: number;
	erasable: number;
	reserved: number;
	reserved2: number;
	numberOfBordersLSB: number;
	firstRZoneNumberInLastBorderLSB: number;
	lastRZoneNumberInLastBorderLSB: number;
	reserved3: number;
	unrestrictedUse: number;
	discBarCodeValid: number;
	reserved4: number;
	reserved5: number;
	numberOfBordersMSB: number;
	firstRZoneNumberInLastBorderMSB: number;
	lastRZoneNumberInLastBorderMSB: number;
	reserved6: number;
	reserved7: number;
	reserved8: number;
	discBarCode: number;
	reserved9: number;
	numberOfOPCTableEntries: number;
	opcTableEntries: number;
}
declare var DVDDiscInfo: DVDDiscInfo;

interface DVDDiscKeyInfo {
	dataLength: number;
	reserved: number;
	discKeyStructures: number;
}
declare var DVDDiscKeyInfo: DVDDiscKeyInfo;

interface DVDKey1Info {
	dataLength: number;
	reserved: number;
	key1Value: number;
	reserved2: number;
}
declare var DVDKey1Info: DVDKey1Info;

interface DVDKey2Info {
	dataLength: number;
	reserved: number;
	key2Value: number;
	reserved2: number;
}
declare var DVDKey2Info: DVDKey2Info;

interface DVDManufacturingInfo {
	dataLength: number;
	reserved: number;
	discManufacturingInfo: number;
}
declare var DVDManufacturingInfo: DVDManufacturingInfo;

interface DVDPhysicalFormatInfo {
	dataLength: number;
	reserved: number;
	partVersion: number;
	bookType: number;
	minimumRate: number;
	discSize: number;
	layerType: number;
	trackPath: number;
	numberOfLayers: number;
	reserved2: number;
	trackDensity: number;
	linearDensity: number;
	zero1: number;
	startingPhysicalSectorNumberOfDataArea: number;
	zero2: number;
	endPhysicalSectorNumberOfDataArea: number;
	zero3: number;
	endSectorNumberInLayerZero: number;
	reserved1: number;
	bcaFlag: number;
	mediaSpecific: number;
}
declare var DVDPhysicalFormatInfo: DVDPhysicalFormatInfo;

interface DVDRZoneInfo {
	dataLength: number;
	rzoneNumberLSB: number;
	borderNumberLSB: number;
	reserved: number;
	reserved2: number;
	copy: number;
	damage: number;
	reserved3: number;
	reserved4: number;
	restrictedOverwrite: number;
	incremental: number;
	blank: number;
	reservedRZone: number;
	nextWritableAddressValid: number;
	lastRecordedAddressValid: number;
	reserved5: number;
	rzoneStartAddress: number;
	nextWritableAddress: number;
	freeBlocks: number;
	blockingFactor: number;
	rzoneSize: number;
	lastRecordedAddress: number;
	rzoneNumberMSB: number;
	borderNumberMSB: number;
	reserved6: number;
	reserved7: number;
}
declare var DVDRZoneInfo: DVDRZoneInfo;

interface DVDRegionPlaybackControlInfo {
	dataLength: number;
	reserved: number;
	numberUserResets: number;
	numberVendorResets: number;
	typeCode: number;
	driveRegion: number;
	rpcScheme: number;
	reserved2: number;
}
declare var DVDRegionPlaybackControlInfo: DVDRegionPlaybackControlInfo;

interface DVDTitleKeyInfo {
	dataLength: number;
	reserved: number;
	CP_MOD: number;
	CGMS: number;
	CP_SEC: number;
	CPM: number;
	titleKeyValue: number;
	reserved2: number;
}
declare var DVDTitleKeyInfo: DVDTitleKeyInfo;

declare const EMBEDDED_ANALOG_TAPE: number;

declare const EMBEDDED_CABLE_TUNER_AUDIO: number;

declare const EMBEDDED_CD_PLAYER: number;

declare const EMBEDDED_DAT: number;

declare const EMBEDDED_DCC: number;

declare const EMBEDDED_DSS_AUDIO: number;

declare const EMBEDDED_DVD_AUDIO: number;

declare const EMBEDDED_EQUALIZATION_NOISE: number;

declare const EMBEDDED_LEVEL_CALIBRATION_NOISE_SOURCE: number;

declare const EMBEDDED_MINIDISK: number;

declare const EMBEDDED_MULTITRACK_RECORDER: number;

declare const EMBEDDED_PHONOGRAPH: number;

declare const EMBEDDED_RADIO_RECEIVER: number;

declare const EMBEDDED_RADIO_TRANSMITTER: number;

declare const EMBEDDED_SATELLITE_RECEIVER_AUDIO: number;

declare const EMBEDDED_SYNTHESIZER: number;

declare const EMBEDDED_TV_TUNER_AUDIO: number;

declare const EMBEDDED_UNDEFINED: number;

declare const EMBEDDED_VCR_AUDIO: number;

declare const EMBEDDED_VIDEO_DISC_AUDIO: number;

declare const EXTERNAL_1394_DA_STREAM: number;

declare const EXTERNAL_1394_DV_STREAM_SOUNDTRACK: number;

declare const EXTERNAL_ADAT: number;

declare const EXTERNAL_ANALOG_CONNECTOR: number;

declare const EXTERNAL_DIGITAL_AUDIO_INTERFACE: number;

declare const EXTERNAL_LEGACY_AUDIO_CONNECTOR: number;

declare const EXTERNAL_LINE_CONNECTOR: number;

declare const EXTERNAL_MADI: number;

declare const EXTERNAL_SPDIF_INTERFACE: number;

declare const EXTERNAL_TDIF: number;

declare const EXTERNAL_UNDEFINED: number;

enum EvCmd {

	VNOP = 0,

	VHIDE = 1,

	VSHOW = 2,

	VMOVE = 3,

	VLEVEL = 4
}


interface EvOffsets {
	evGlobalsOffset: number;
	evShmemOffset: number;
}
declare var EvOffsets: EvOffsets;

interface FWAddress {
	nodeID: number;
	addressHi: number;
	addressLo: number;
}
declare var FWAddress: FWAddress;

enum FWAddressSpaceFlags {

	kFWAddressSpaceNoFlags = 0,

	kFWAddressSpaceNoWriteAccess = 1,

	kFWAddressSpaceNoReadAccess = 2,

	kFWAddressSpaceAutoWriteReply = 4,

	kFWAddressSpaceAutoReadReply = 8,

	kFWAddressSpaceAutoCopyOnWrite = 16,

	kFWAddressSpaceShareIfExists = 32,

	kFWAddressSpaceExclusive = 64
}


interface FWSBP2LoginCompleteParams {
	refCon: any;
	generation: number;
	status: number;
	loginResponse: FWSBP2LoginResponse;
	statusBlock: FWSBP2StatusBlock;
	statusBlockLength: number;
}
declare var FWSBP2LoginCompleteParams: FWSBP2LoginCompleteParams;

interface FWSBP2LoginResponse {
	length: number;
	loginID: number;
	commandBlockAgentAddressHi: number;
	commandBlockAgentAddressLo: number;
	reserved: number;
	reconnectHold: number;
}
declare var FWSBP2LoginResponse: FWSBP2LoginResponse;

interface FWSBP2LogoutCompleteParams {
	refCon: any;
	generation: number;
	status: number;
	statusBlock: FWSBP2StatusBlock;
	statusBlockLength: number;
}
declare var FWSBP2LogoutCompleteParams: FWSBP2LogoutCompleteParams;

interface FWSBP2NotifyParams {
	refCon: any;
	notificationEvent: number;
	message: any;
	length: number;
	generation: number;
}
declare var FWSBP2NotifyParams: FWSBP2NotifyParams;

interface FWSBP2ReconnectParams {
	refCon: any;
	generation: number;
	status: number;
	reconnectStatusBlock: FWSBP2StatusBlock;
	reconnectStatusBlockLength: number;
}
declare var FWSBP2ReconnectParams: FWSBP2ReconnectParams;

interface FWSBP2StatusBlock {
	details: number;
	sbpStatus: number;
	orbOffsetHi: number;
	orbOffsetLo: number;
	status: number;
}
declare var FWSBP2StatusBlock: FWSBP2StatusBlock;

interface FWSBP2VirtualRange {
	address: any;
	length: number;
}
declare var FWSBP2VirtualRange: FWSBP2VirtualRange;

declare const INPUT_DESKTOP_MICROPHONE: number;

declare const INPUT_MICROPHONE: number;

declare const INPUT_MICROPHONE_ARRAY: number;

declare const INPUT_MODEM_AUDIO: number;

declare const INPUT_NULL: number;

declare const INPUT_OMNIDIRECTIONAL_MICROPHONE: number;

declare const INPUT_PERSONAL_MICROPHONE: number;

declare const INPUT_PROCESSING_MICROPHONE_ARRAY: number;

declare const INPUT_UNDEFINED: number;

interface IOATASMARTInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	SMARTEnableDisableOperations: (p1: any, p2: boolean) => number;
	SMARTEnableDisableAutosave: (p1: any, p2: boolean) => number;
	SMARTReturnStatus: (p1: any, p2: string) => number;
	SMARTExecuteOffLineImmediate: (p1: any, p2: boolean) => number;
	SMARTReadData: (p1: any, p2: ATASMARTData) => number;
	SMARTValidateReadData: (p1: any, p2: ATASMARTData) => number;
	SMARTReadDataThresholds: (p1: any, p2: ATASMARTDataThresholds) => number;
	SMARTReadLogDirectory: (p1: any, p2: ATASMARTLogDirectory) => number;
	SMARTReadLogAtAddress: (p1: any, p2: number, p3: any, p4: number) => number;
	SMARTWriteLogAtAddress: (p1: any, p2: number, p3: any, p4: number) => number;
	GetATAIdentifyData: (p1: any, p2: any, p3: number, p4: number) => number;
}
declare var IOATASMARTInterface: IOATASMARTInterface;

enum IOAVCCommandResponse {

	kAVCControlCommand = 0,

	kAVCStatusInquiryCommand = 1,

	kAVCSpecificInquiryCommand = 2,

	kAVCNotifyCommand = 3,

	kAVCGeneralInquiryCommand = 4,

	kAVCNotImplementedStatus = 8,

	kAVCAcceptedStatus = 9,

	kAVCRejectedStatus = 10,

	kAVCInTransitionStatus = 11,

	kAVCImplementedStatus = 12,

	kAVCChangedStatus = 13,

	kAVCInterimStatus = 15
}


enum IOAVCFrameFields {

	kAVCCommandResponse = 0,

	kAVCAddress = 1,

	kAVCOpcode = 2,

	kAVCOperand0 = 3,

	kAVCOperand1 = 4,

	kAVCOperand2 = 5,

	kAVCOperand3 = 6,

	kAVCOperand4 = 7,

	kAVCOperand5 = 8,

	kAVCOperand6 = 9,

	kAVCOperand7 = 10,

	kAVCOperand8 = 11
}


enum IOAVCOpcodes {

	kAVCPlugInfoOpcode = 2,

	kAVCOutputPlugSignalFormatOpcode = 24,

	kAVCInputPlugSignalFormatOpcode = 25,

	kAVCUnitInfoOpcode = 48,

	kAVCSubunitInfoOpcode = 49,

	kAVCConnectionsOpcode = 34,

	kAVCConnectOpcode = 36,

	kAVCDisconnectOpcode = 37,

	kAVCPowerOpcode = 178,

	kAVCSignalSourceOpcode = 26,

	kAVCVendorDependentOpcode = 0,

	kAVCOutputSignalModeOpcode = 120,

	kAVCInputSignalModeOpcode = 121,

	kAVCSignalModeSD525_60 = 0,

	kAVCSignalModeSDL525_60 = 4,

	kAVCSignalModeHD1125_60 = 8,

	kAVCSignalModeSD625_50 = 128,

	kAVCSignalModeSDL625_50 = 132,

	kAVCSignalModeHD1250_50 = 136,

	kAVCSignalModeDVCPro525_60 = 120,

	kAVCSignalModeDVCPro625_50 = 248,

	kAVCSignalModeDummyOperand = 255,

	kAVCSignalModeMask_50 = 128,

	kAVCSignalModeMask_STYPE = 124,

	kAVCSignalModeMask_SDL = 4,

	kAVCSignalModeMask_DVCPro25 = 120
}


enum IOAVCUnitTypes {

	kAVCVideoMonitor = 0,

	kAVCAudio = 1,

	kAVCPrinter = 2,

	kAVCDiskRecorder = 3,

	kAVCTapeRecorder = 4,

	kAVCTuner = 5,

	kAVCVideoCamera = 7,

	kAVCCameraStorage = 11,

	kAVCVendorUnique = 28,

	kAVCNumSubUnitTypes = 32
}


interface IOAccelBounds {
	x: number;
	y: number;
	w: number;
	h: number;
}
declare var IOAccelBounds: IOAccelBounds;

interface IOAccelDeviceRegion {
	num_rects: number;
	bounds: IOAccelBounds;
	rect: IOAccelBounds;
}
declare var IOAccelDeviceRegion: IOAccelDeviceRegion;

declare function IOAccelFindAccelerator(framebuffer: number, pAccelerator: number, pFramebufferIndex: number): number;

interface IOAccelSize {
	w: number;
	h: number;
}
declare var IOAccelSize: IOAccelSize;

interface IOAccelSurfaceInformation {
	address: number;
	rowBytes: number;
	width: number;
	height: number;
	pixelFormat: number;
	flags: number;
	colorTemperature: number;
	typeDependent: number;
}
declare var IOAccelSurfaceInformation: IOAccelSurfaceInformation;

interface IOAccelSurfaceReadData {
	x: number;
	y: number;
	w: number;
	h: number;
	client_addr: number;
	client_row_bytes: number;
}
declare var IOAccelSurfaceReadData: IOAccelSurfaceReadData;

interface IOAccelSurfaceScaling {
	buffer: IOAccelBounds;
	source: IOAccelSize;
	reserved: number;
}
declare var IOAccelSurfaceScaling: IOAccelSurfaceScaling;

declare function IOAllowPowerChange(kernelPort: number, notificationID: number): number;

interface IOAsyncCompletionContent {
	result: number;
	args: any;
}
declare var IOAsyncCompletionContent: IOAsyncCompletionContent;

interface IOAudioBufferDataDescriptor {
	fActualDataByteSize: number;
	fActualNumSampleFrames: number;
	fTotalDataByteSize: number;
	fNominalDataByteSize: number;
	fData: number;
}
declare var IOAudioBufferDataDescriptor: IOAudioBufferDataDescriptor;

enum IOAudioControlCalls {

	kIOAudioControlCallSetValue = 0,

	kIOAudioControlCallGetValue = 1
}


enum IOAudioControlNotifications {

	kIOAudioControlValueChangeNotification = 0,

	kIOAudioControlRangeChangeNotification = 1
}


enum IOAudioEngineCalls {

	kIOAudioEngineCallRegisterClientBuffer = 0,

	kIOAudioEngineCallUnregisterClientBuffer = 1,

	kIOAudioEngineCallGetConnectionID = 2,

	kIOAudioEngineCallStart = 3,

	kIOAudioEngineCallStop = 4,

	kIOAudioEngineCallGetNearestStartTime = 5
}


enum IOAudioEngineMemory {

	kIOAudioStatusBuffer = 0,

	kIOAudioSampleBuffer = 1,

	kIOAudioMixBuffer = 2,

	kIOAudioBytesInInputBuffer = 3,

	kIOAudioBytesInOutputBuffer = 4
}


enum IOAudioEngineNotifications {

	kIOAudioEngineAllNotifications = 0,

	kIOAudioEngineStreamFormatChangeNotification = 1,

	kIOAudioEngineChangeNotification = 2,

	kIOAudioEngineStartedNotification = 3,

	kIOAudioEngineStoppedNotification = 4,

	kIOAudioEnginePausedNotification = 5,

	kIOAudioEngineResumedNotification = 6
}


enum IOAudioEngineState {

	kIOAudioEngineStopped = 0,

	kIOAudioEngineRunning = 1,

	kIOAudioEnginePaused = 2,

	kIOAudioEngineResumed = 3
}


interface IOAudioEngineStatus {
	fVersion: number;
	fCurrentLoopCount: number;
	fLastLoopTime: UnsignedWide;
	fEraseHeadSampleFrame: number;
}
declare var IOAudioEngineStatus: IOAudioEngineStatus;

enum IOAudioEngineTraps {

	kIOAudioEngineTrapPerformClientIO = 0
}


interface IOAudioNotificationMessage {
	messageHeader: mach_msg_header_t;
	type: number;
	ref: number;
	sender: any;
}
declare var IOAudioNotificationMessage: IOAudioNotificationMessage;

interface IOAudioSMPTETime {
	fSubframes: number;
	fSubframeDivisor: number;
	fCounter: number;
	fType: number;
	fFlags: number;
	fHours: number;
	fMinutes: number;
	fSeconds: number;
	fFrames: number;
}
declare var IOAudioSMPTETime: IOAudioSMPTETime;

interface IOAudioSampleIntervalDescriptor {
	sampleIntervalHi: number;
	sampleIntervalLo: number;
}
declare var IOAudioSampleIntervalDescriptor: IOAudioSampleIntervalDescriptor;

interface IOAudioSampleRate {
	whole: number;
	fraction: number;
}
declare var IOAudioSampleRate: IOAudioSampleRate;

interface IOAudioStreamDataDescriptor {
	fVersion: number;
	fNumberOfStreams: number;
	fStreamLength: number;
}
declare var IOAudioStreamDataDescriptor: IOAudioStreamDataDescriptor;

enum IOAudioStreamDirection {

	kIOAudioStreamDirectionOutput = 0,

	kIOAudioStreamDirectionInput = 1
}


interface IOAudioStreamFormat {
	fNumChannels: number;
	fSampleFormat: number;
	fNumericRepresentation: number;
	fBitDepth: number;
	fBitWidth: number;
	fAlignment: number;
	fByteOrder: number;
	fIsMixable: number;
	fDriverTag: number;
}
declare var IOAudioStreamFormat: IOAudioStreamFormat;

interface IOAudioStreamFormatExtension {
	fVersion: number;
	fFlags: number;
	fFramesPerPacket: number;
	fBytesPerPacket: number;
}
declare var IOAudioStreamFormatExtension: IOAudioStreamFormatExtension;

interface IOAudioTimeStamp {
	fSampleTime: number;
	fHostTime: number;
	fRateScalar: number;
	fWordClockTime: number;
	fSMPTETime: IOAudioSMPTETime;
	fFlags: number;
	fReserved: number;
}
declare var IOAudioTimeStamp: IOAudioTimeStamp;

declare function IOBSDNameMatching(masterPort: number, options: number, bsdName: string | any): NSDictionary<any, any>;

interface IOBlitCopyRectangle {
	sourceX: number;
	sourceY: number;
	x: number;
	y: number;
	width: number;
	height: number;
}
declare var IOBlitCopyRectangle: IOBlitCopyRectangle;

interface IOBlitCopyRectangles {
	operation: IOBlitOperation;
	count: number;
	rects: IOBlitCopyRectangle;
}
declare var IOBlitCopyRectangles: IOBlitCopyRectangles;

interface IOBlitCopyRegion {
	operation: IOBlitOperation;
	deltaX: number;
	deltaY: number;
	region: IOAccelDeviceRegion;
}
declare var IOBlitCopyRegion: IOBlitCopyRegion;

interface IOBlitCursor {
	operation: IOBlitOperation;
	rect: IOBlitRectangle;
}
declare var IOBlitCursor: IOBlitCursor;

interface IOBlitOperation {
	color0: number;
	color1: number;
	offsetX: number;
	offsetY: number;
	sourceKeyColor: number;
	destKeyColor: number;
	specific: number;
}
declare var IOBlitOperation: IOBlitOperation;

interface IOBlitRectangle {
	x: number;
	y: number;
	width: number;
	height: number;
}
declare var IOBlitRectangle: IOBlitRectangle;

interface IOBlitRectangles {
	operation: IOBlitOperation;
	count: number;
	rects: IOBlitRectangle;
}
declare var IOBlitRectangles: IOBlitRectangles;

interface IOBlitScanlines {
	operation: IOBlitOperation;
	count: number;
	y: number;
	height: number;
	x: number;
}
declare var IOBlitScanlines: IOBlitScanlines;

interface IOBlitVertex {
	x: number;
	y: number;
}
declare var IOBlitVertex: IOBlitVertex;

interface IOBlitVertices {
	operation: IOBlitOperation;
	count: number;
	vertices: IOBlitVertex;
}
declare var IOBlitVertices: IOBlitVertices;

interface IOCFPlugInInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	Probe: (p1: any, p2: NSDictionary<any, any>, p3: number, p4: number) => number;
	Start: (p1: any, p2: NSDictionary<any, any>, p3: number) => number;
	Stop: (p1: any) => number;
}
declare var IOCFPlugInInterface: IOCFPlugInInterface;

declare function IOCFSerialize(object_: any, options: number): NSData;

declare function IOCFUnserialize(buffer: string | any, allocator: any, options: number, errorString: string): any;

declare function IOCFUnserializeBinary(buffer: string | any, bufferSize: number, allocator: any, options: number, errorString: string): any;

declare function IOCFUnserializeWithSize(buffer: string | any, bufferSize: number, allocator: any, options: number, errorString: string): any;

enum IOCSRKeyType {

	kCSRImmediateKeyType = 0,

	kCSROffsetKeyType = 1,

	kCSRLeafKeyType = 2,

	kCSRDirectoryKeyType = 3,

	kInvalidCSRROMEntryType = 255
}


declare function IOCancelPowerChange(kernelPort: number, notificationID: number): number;

declare function IOCatalogueGetData(masterPort: number, flag: number, buffer: string, size: number): number;

declare function IOCatalogueModuleLoaded(masterPort: number, name: number): number;

declare function IOCatalogueReset(masterPort: number, flag: number): number;

declare function IOCatalogueSendData(masterPort: number, flag: number, buffer: string | any, size: number): number;

declare function IOCatalogueTerminate(masterPort: number, flag: number, description: number): number;

interface IOColorEntry {
	index: number;
	red: number;
	green: number;
	blue: number;
}
declare var IOColorEntry: IOColorEntry;

enum IOConfigKeyType {

	kConfigImmediateKeyType = 0,

	kConfigOffsetKeyType = 1,

	kConfigLeafKeyType = 2,

	kConfigDirectoryKeyType = 3,

	kInvalidConfigROMEntryType = 255
}


declare function IOConnectAddClient(connect: number, client: number): number;

declare function IOConnectAddRef(connect: number): number;

declare function IOConnectCallAsyncMethod(connection: number, selector: number, wake_port: number, reference: number, referenceCnt: number, input: number, inputCnt: number, inputStruct: any, inputStructCnt: number, output: number, outputCnt: number, outputStruct: any, outputStructCnt: number): number;

declare function IOConnectCallAsyncScalarMethod(connection: number, selector: number, wake_port: number, reference: number, referenceCnt: number, input: number, inputCnt: number, output: number, outputCnt: number): number;

declare function IOConnectCallAsyncStructMethod(connection: number, selector: number, wake_port: number, reference: number, referenceCnt: number, inputStruct: any, inputStructCnt: number, outputStruct: any, outputStructCnt: number): number;

declare function IOConnectCallMethod(connection: number, selector: number, input: number, inputCnt: number, inputStruct: any, inputStructCnt: number, output: number, outputCnt: number, outputStruct: any, outputStructCnt: number): number;

declare function IOConnectCallScalarMethod(connection: number, selector: number, input: number, inputCnt: number, output: number, outputCnt: number): number;

declare function IOConnectCallStructMethod(connection: number, selector: number, inputStruct: any, inputStructCnt: number, outputStruct: any, outputStructCnt: number): number;

declare function IOConnectGetService(connect: number, service: number): number;

declare function IOConnectMapMemory(connect: number, memoryType: number, intoTask: number, atAddress: number, ofSize: number, options: number): number;

declare function IOConnectMapMemory64(connect: number, memoryType: number, intoTask: number, atAddress: number, ofSize: number, options: number): number;

declare function IOConnectRelease(connect: number): number;

declare function IOConnectSetCFProperties(connect: number, properties: any): number;

declare function IOConnectSetCFProperty(connect: number, propertyName: string, property: any): number;

declare function IOConnectSetNotificationPort(connect: number, type: number, port: number, reference: number): number;

declare function IOConnectTrap0(connect: number, index: number): number;

declare function IOConnectTrap1(connect: number, index: number, p1: number): number;

declare function IOConnectTrap2(connect: number, index: number, p1: number, p2: number): number;

declare function IOConnectTrap3(connect: number, index: number, p1: number, p2: number, p3: number): number;

declare function IOConnectTrap4(connect: number, index: number, p1: number, p2: number, p3: number, p4: number): number;

declare function IOConnectTrap5(connect: number, index: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function IOConnectTrap6(connect: number, index: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function IOConnectUnmapMemory(connect: number, memoryType: number, fromTask: number, atAddress: number): number;

declare function IOConnectUnmapMemory64(connect: number, memoryType: number, fromTask: number, atAddress: number): number;

declare function IOCopySystemLoadAdvisoryDetailed(): NSDictionary<any, any>;

declare function IOCreatePlugInInterfaceForService(service: number, pluginType: any, interfaceType: any, theInterface: IOCFPlugInInterface, theScore: number): number;

declare function IOCreateReceivePort(msgType: number, recvPort: number): number;

declare function IODataQueueAllocateNotificationPort(): number;

interface IODataQueueAppendix {
	version: number;
	msgh: mach_msg_header_t;
}
declare var IODataQueueAppendix: IODataQueueAppendix;

declare function IODataQueueDataAvailable(dataQueue: IODataQueueMemory): boolean;

declare function IODataQueueDequeue(dataQueue: IODataQueueMemory, data: any, dataSize: number): number;

declare function IODataQueueEnqueue(dataQueue: IODataQueueMemory, data: any, dataSize: number): number;

interface IODataQueueEntry {
	size: number;
	data: number;
}
declare var IODataQueueEntry: IODataQueueEntry;

interface IODataQueueMemory {
	queueSize: number;
	head: number;
	tail: number;
	queue: IODataQueueEntry;
}
declare var IODataQueueMemory: IODataQueueMemory;

declare function IODataQueuePeek(dataQueue: IODataQueueMemory): IODataQueueEntry;

declare function IODataQueueSetNotificationPort(dataQueue: IODataQueueMemory, notifyPort: number): number;

declare function IODataQueueWaitForAvailableData(dataQueue: IODataQueueMemory, notificationPort: number): number;

declare function IODeregisterApp(notifier: number): number;

declare function IODeregisterForSystemPower(notifier: number): number;

declare function IODestroyPlugInInterface(interface: IOCFPlugInInterface): number;

interface IODetailedTimingInformationV1 {
	pixelClock: number;
	horizontalActive: number;
	horizontalBlanking: number;
	horizontalBorder: number;
	horizontalSyncOffset: number;
	horizontalSyncWidth: number;
	verticalActive: number;
	verticalBlanking: number;
	verticalBorder: number;
	verticalSyncOffset: number;
	verticalSyncWidth: number;
}
declare var IODetailedTimingInformationV1: IODetailedTimingInformationV1;

interface IODetailedTimingInformationV2 {
	__reservedA: number;
	horizontalScaledInset: number;
	verticalScaledInset: number;
	scalerFlags: number;
	horizontalScaled: number;
	verticalScaled: number;
	signalConfig: number;
	signalLevels: number;
	pixelClock: number;
	minPixelClock: number;
	maxPixelClock: number;
	horizontalActive: number;
	horizontalBlanking: number;
	horizontalSyncOffset: number;
	horizontalSyncPulseWidth: number;
	verticalActive: number;
	verticalBlanking: number;
	verticalSyncOffset: number;
	verticalSyncPulseWidth: number;
	horizontalBorderLeft: number;
	horizontalBorderRight: number;
	verticalBorderTop: number;
	verticalBorderBottom: number;
	horizontalSyncConfig: number;
	horizontalSyncLevel: number;
	verticalSyncConfig: number;
	verticalSyncLevel: number;
	numLinks: number;
	verticalBlankingExtension: number;
	pixelEncoding: number;
	bitsPerColorComponent: number;
	colorimetry: number;
	dynamicRange: number;
	dscCompressedBitsPerPixel: number;
	dscSliceHeight: number;
	dscSliceWidth: number;
	__reservedB: number;
}
declare var IODetailedTimingInformationV2: IODetailedTimingInformationV2;

enum IODirection {

	kIODirectionNone = 0,

	kIODirectionIn = 1,

	kIODirectionOut = 2,

	kIODirectionOutIn = 3
}


declare function IODispatchCalloutFromMessage(unused: any, msg: mach_msg_header_t, reference: any): void;

declare function IODisplayCommitParameters(service: number, options: number): number;

declare function IODisplayCopyFloatParameters(service: number, options: number, params: NSDictionary<any, any>): number;

declare function IODisplayCopyParameters(service: number, options: number, params: NSDictionary<any, any>): number;

declare function IODisplayCreateInfoDictionary(framebuffer: number, options: number): NSDictionary<any, any>;

declare function IODisplayForFramebuffer(framebuffer: number, options: number): number;

declare function IODisplayGetFloatParameter(service: number, options: number, parameterName: string, value: number): number;

declare function IODisplayGetIntegerRangeParameter(service: number, options: number, parameterName: string, value: number, min: number, max: number): number;

declare function IODisplayMatchDictionaries(matching1: NSDictionary<any, any>, matching2: NSDictionary<any, any>, options: number): number;

interface IODisplayModeInformation {
	nominalWidth: number;
	nominalHeight: number;
	refreshRate: number;
	maxDepthIndex: number;
	flags: number;
	imageWidth: number;
	imageHeight: number;
	reserved: number;
}
declare var IODisplayModeInformation: IODisplayModeInformation;

interface IODisplayScalerInformation {
	__reservedA: number;
	version: number;
	__reservedB: number;
	scalerFeatures: number;
	maxHorizontalPixels: number;
	maxVerticalPixels: number;
	__reservedC: number;
}
declare var IODisplayScalerInformation: IODisplayScalerInformation;

declare function IODisplaySetFloatParameter(service: number, options: number, parameterName: string, value: number): number;

declare function IODisplaySetIntegerParameter(service: number, options: number, parameterName: string, value: number): number;

declare function IODisplaySetParameters(service: number, options: number, params: NSDictionary<any, any>): number;

interface IODisplayTimingRangeV1 {
	__reservedA: number;
	version: number;
	__reservedB: number;
	minPixelClock: number;
	maxPixelClock: number;
	maxPixelError: number;
	supportedSyncFlags: number;
	supportedSignalLevels: number;
	supportedSignalConfigs: number;
	minFrameRate: number;
	maxFrameRate: number;
	minLineRate: number;
	maxLineRate: number;
	maxHorizontalTotal: number;
	maxVerticalTotal: number;
	__reservedD: number;
	charSizeHorizontalActive: number;
	charSizeHorizontalBlanking: number;
	charSizeHorizontalSyncOffset: number;
	charSizeHorizontalSyncPulse: number;
	charSizeVerticalActive: number;
	charSizeVerticalBlanking: number;
	charSizeVerticalSyncOffset: number;
	charSizeVerticalSyncPulse: number;
	charSizeHorizontalBorderLeft: number;
	charSizeHorizontalBorderRight: number;
	charSizeVerticalBorderTop: number;
	charSizeVerticalBorderBottom: number;
	charSizeHorizontalTotal: number;
	charSizeVerticalTotal: number;
	__reservedE: number;
	minHorizontalActiveClocks: number;
	maxHorizontalActiveClocks: number;
	minHorizontalBlankingClocks: number;
	maxHorizontalBlankingClocks: number;
	minHorizontalSyncOffsetClocks: number;
	maxHorizontalSyncOffsetClocks: number;
	minHorizontalPulseWidthClocks: number;
	maxHorizontalPulseWidthClocks: number;
	minVerticalActiveClocks: number;
	maxVerticalActiveClocks: number;
	minVerticalBlankingClocks: number;
	maxVerticalBlankingClocks: number;
	minVerticalSyncOffsetClocks: number;
	maxVerticalSyncOffsetClocks: number;
	minVerticalPulseWidthClocks: number;
	maxVerticalPulseWidthClocks: number;
	minHorizontalBorderLeft: number;
	maxHorizontalBorderLeft: number;
	minHorizontalBorderRight: number;
	maxHorizontalBorderRight: number;
	minVerticalBorderTop: number;
	maxVerticalBorderTop: number;
	minVerticalBorderBottom: number;
	maxVerticalBorderBottom: number;
	maxNumLinks: number;
	minLink0PixelClock: number;
	maxLink0PixelClock: number;
	minLink1PixelClock: number;
	maxLink1PixelClock: number;
	supportedPixelEncoding: number;
	supportedBitsPerColorComponent: number;
	supportedColorimetryModes: number;
	supportedDynamicRangeModes: number;
	__reservedF: number;
}
declare var IODisplayTimingRangeV1: IODisplayTimingRangeV1;

interface IODisplayTimingRangeV2 {
	__reservedA: number;
	version: number;
	__reservedB: number;
	minPixelClock: number;
	maxPixelClock: number;
	maxPixelError: number;
	supportedSyncFlags: number;
	supportedSignalLevels: number;
	supportedSignalConfigs: number;
	minFrameRate: number;
	maxFrameRate: number;
	minLineRate: number;
	maxLineRate: number;
	maxHorizontalTotal: number;
	maxVerticalTotal: number;
	__reservedD: number;
	charSizeHorizontalActive: number;
	charSizeHorizontalBlanking: number;
	charSizeHorizontalSyncOffset: number;
	charSizeHorizontalSyncPulse: number;
	charSizeVerticalActive: number;
	charSizeVerticalBlanking: number;
	charSizeVerticalSyncOffset: number;
	charSizeVerticalSyncPulse: number;
	charSizeHorizontalBorderLeft: number;
	charSizeHorizontalBorderRight: number;
	charSizeVerticalBorderTop: number;
	charSizeVerticalBorderBottom: number;
	charSizeHorizontalTotal: number;
	charSizeVerticalTotal: number;
	__reservedE: number;
	minHorizontalActiveClocks: number;
	maxHorizontalActiveClocks: number;
	minHorizontalBlankingClocks: number;
	maxHorizontalBlankingClocks: number;
	minHorizontalSyncOffsetClocks: number;
	maxHorizontalSyncOffsetClocks: number;
	minHorizontalPulseWidthClocks: number;
	maxHorizontalPulseWidthClocks: number;
	minVerticalActiveClocks: number;
	maxVerticalActiveClocks: number;
	minVerticalBlankingClocks: number;
	maxVerticalBlankingClocks: number;
	minVerticalSyncOffsetClocks: number;
	maxVerticalSyncOffsetClocks: number;
	minVerticalPulseWidthClocks: number;
	maxVerticalPulseWidthClocks: number;
	minHorizontalBorderLeft: number;
	maxHorizontalBorderLeft: number;
	minHorizontalBorderRight: number;
	maxHorizontalBorderRight: number;
	minVerticalBorderTop: number;
	maxVerticalBorderTop: number;
	minVerticalBorderBottom: number;
	maxVerticalBorderBottom: number;
	maxNumLinks: number;
	minLink0PixelClock: number;
	maxLink0PixelClock: number;
	minLink1PixelClock: number;
	maxLink1PixelClock: number;
	supportedPixelEncoding: number;
	supportedBitsPerColorComponent: number;
	supportedColorimetryModes: number;
	supportedDynamicRangeModes: number;
	__reservedF: number;
	maxBandwidth: number;
	dscMinSliceHeight: number;
	dscMaxSliceHeight: number;
	dscMinSliceWidth: number;
	dscMaxSliceWidth: number;
	dscMinSlicePerLine: number;
	dscMaxSlicePerLine: number;
	dscMinBPC: number;
	dscMaxBPC: number;
	dscMinBPP: number;
	dscMaxBPP: number;
	dscVBR: number;
	dscBlockPredEnable: number;
	__reservedC: number;
}
declare var IODisplayTimingRangeV2: IODisplayTimingRangeV2;

interface IODot3CollEntry {
	collFrequencies: number;
}
declare var IODot3CollEntry: IODot3CollEntry;

interface IODot3RxExtraEntry {
	overruns: number;
	watchdogTimeouts: number;
	frameTooShorts: number;
	collisionErrors: number;
	phyErrors: number;
	timeouts: number;
	interrupts: number;
	resets: number;
	resourceErrors: number;
	reserved: number;
}
declare var IODot3RxExtraEntry: IODot3RxExtraEntry;

interface IODot3StatsEntry {
	alignmentErrors: number;
	fcsErrors: number;
	singleCollisionFrames: number;
	multipleCollisionFrames: number;
	sqeTestErrors: number;
	deferredTransmissions: number;
	lateCollisions: number;
	excessiveCollisions: number;
	internalMacTransmitErrors: number;
	carrierSenseErrors: number;
	frameTooLongs: number;
	internalMacReceiveErrors: number;
	etherChipSet: number;
	missedFrames: number;
}
declare var IODot3StatsEntry: IODot3StatsEntry;

interface IODot3TxExtraEntry {
	underruns: number;
	jabbers: number;
	phyErrors: number;
	timeouts: number;
	interrupts: number;
	resets: number;
	resourceErrors: number;
	reserved: number;
}
declare var IODot3TxExtraEntry: IODot3TxExtraEntry;

interface IOEthernetStats {
	dot3StatsEntry: IODot3StatsEntry;
	dot3CollEntry: IODot3CollEntry;
	dot3RxExtraEntry: IODot3RxExtraEntry;
	dot3TxExtraEntry: IODot3TxExtraEntry;
}
declare var IOEthernetStats: IOEthernetStats;

declare function IOFBCopyI2CInterfaceForBus(framebuffer: number, bus: number, interface: number): number;

interface IOFBDPLinkConfig {
	version: number;
	bitRate: number;
	__reservedA: number;
	t1Time: number;
	t2Time: number;
	t3Time: number;
	idlePatterns: number;
	laneCount: number;
	voltage: number;
	preEmphasis: number;
	downspread: number;
	scrambler: number;
	maxBitRate: number;
	maxLaneCount: number;
	maxDownspread: number;
	__reservedB: number;
}
declare var IOFBDPLinkConfig: IOFBDPLinkConfig;

declare function IOFBGetI2CInterfaceCount(framebuffer: number, count: number): number;

interface IOFBHDRMetaDataV1 {
	displayPrimary_X0: number;
	displayPrimary_Y0: number;
	displayPrimary_X1: number;
	displayPrimary_Y1: number;
	displayPrimary_X2: number;
	displayPrimary_Y2: number;
	displayPrimary_X: number;
	displayPrimary_Y: number;
	desiredLuminance_Max: number;
	desiredLuminance_Min: number;
	desiredLightLevel_Avg: number;
	desiredLightLevel_Max: number;
	__reservedA: number;
}
declare var IOFBHDRMetaDataV1: IOFBHDRMetaDataV1;

enum IOFWAVCAsyncCommandState {

	kAVCAsyncCommandStatePendingRequest = 0,

	kAVCAsyncCommandStateRequestSent = 1,

	kAVCAsyncCommandStateRequestFailed = 2,

	kAVCAsyncCommandStateWaitingForResponse = 3,

	kAVCAsyncCommandStateReceivedInterimResponse = 4,

	kAVCAsyncCommandStateReceivedFinalResponse = 5,

	kAVCAsyncCommandStateTimeOutBeforeResponse = 6,

	kAVCAsyncCommandStateBusReset = 7,

	kAVCAsyncCommandStateOutOfMemory = 8,

	kAVCAsyncCommandStateCanceled = 9
}


enum IOFWAVCPlugTypes {

	SubunitSourceType = 0,

	SubunitDestType = 1,

	IsochInputType = 2,

	IsochOutputType = 3,

	AsynchInputType = 4,

	AsynchOutputType = 5,

	ExternalInputType = 6,

	ExternalOutputType = 7
}


enum IOFWAVCSubunitPlugMessages {

	kIOFWAVCSubunitPlugMsgConnected = 0,

	kIOFWAVCSubunitPlugMsgDisconnected = 1,

	kIOFWAVCSubunitPlugMsgConnectedPlugModified = 2,

	kIOFWAVCSubunitPlugMsgSignalFormatModified = 3
}


interface IOFWAsyncStreamListenerInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	SetListenerHandler: (p1: IOFWAsyncStreamListenerInterface, p2: (p1: IOFWAsyncStreamListenerInterface, p2: any, p3: number, p4: any, p5: any) => number) => (p1: IOFWAsyncStreamListenerInterface, p2: any, p3: number, p4: any, p5: any) => number;
	SetSkippedPacketHandler: (p1: IOFWAsyncStreamListenerInterface, p2: (p1: IOFWAsyncStreamListenerInterface, p2: any, p3: number) => void) => (p1: IOFWAsyncStreamListenerInterface, p2: any, p3: number) => void;
	NotificationIsOn: (p1: IOFWAsyncStreamListenerInterface) => boolean;
	TurnOnNotification: (p1: IOFWAsyncStreamListenerInterface) => boolean;
	TurnOffNotification: (p1: IOFWAsyncStreamListenerInterface) => void;
	ClientCommandIsComplete: (p1: IOFWAsyncStreamListenerInterface, p2: any, p3: number) => void;
	GetRefCon: (p1: IOFWAsyncStreamListenerInterface) => any;
	SetFlags: (p1: IOFWAsyncStreamListenerInterface, p2: number) => void;
	GetFlags: (p1: IOFWAsyncStreamListenerInterface) => number;
	GetOverrunCounter: (p1: IOFWAsyncStreamListenerInterface) => number;
}
declare var IOFWAsyncStreamListenerInterface: IOFWAsyncStreamListenerInterface;

enum IOFWDCLNotificationType {

	kFWDCLInvalidNotification = 0,

	kFWDCLUpdateNotification = 1,

	kFWDCLModifyNotification = 2,

	kFWNuDCLModifyNotification = 3,

	kFWNuDCLModifyJumpNotification = 4,

	kFWNuDCLUpdateNotification = 5
}


enum IOFWIsochPortOptions {

	kFWIsochPortDefaultOptions = 0,

	kFWIsochPortUseSeparateKernelThread = 2,

	kFWIsochEnableRobustness = 4,

	kFWIsochBigEndianUpdates = 8,

	kFWIsochRequireLastContext = 16
}


enum IOFWIsochResourceFlags {

	kFWNeverMultiMode = 0,

	kFWAllowMultiMode = 1,

	kFWSuggestMultiMode = 2,

	kFWAlwaysMultiMode = 3,

	kFWDefaultIsochResourceFlags = 0
}


enum IOFWPhysicalAccessMode {

	kIOFWPhysicalAccessEnabled = 0,

	kIOFWPhysicalAccessDisabled = 1,

	kIOFWPhysicalAccessDisabledForGeneration = 2
}


enum IOFWReadFlags {

	kIOFWReadFlagsNone = 0,

	kIOFWReadBlockRequest = 4,

	kIOFWReadPingTime = 8
}


enum IOFWSecurityMode {

	kIOFWSecurityModeNormal = 0,

	kIOFWSecurityModeSecure = 1,

	kIOFWSecurityModeSecurePermanent = 2
}


enum IOFWSpeed {

	kFWSpeed100MBit = 0,

	kFWSpeed200MBit = 1,

	kFWSpeed400MBit = 2,

	kFWSpeed800MBit = 3,

	kFWSpeedReserved = 3,

	kFWSpeedUnknownMask = 128,

	kFWSpeedMaximum = 2147483647,

	kFWSpeedInvalid = 2147483648
}


enum IOFWWriteFlags {

	kIOFWWriteFlagsNone = 0,

	kIOFWWriteFlagsDeferredNotify = 1,

	kIOFWWriteFastRetryOnBusy = 2,

	kIOFWWriteBlockRequest = 4
}


interface IOFireWireAVCLibAsynchronousCommand {
	cmdState: IOFWAVCAsyncCommandState;
	pRefCon: any;
	pCommandBuf: string;
	cmdLen: number;
	pInterimResponseBuf: string;
	interimResponseLen: number;
	pFinalResponseBuf: string;
	finalResponseLen: number;
}
declare var IOFireWireAVCLibAsynchronousCommand: IOFireWireAVCLibAsynchronousCommand;

interface IOFireWireAVCLibConsumerInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	setSubunit: (p1: any, p2: number) => void;
	setRemotePlug: (p1: any, p2: number) => void;
	connectToRemotePlug: (p1: any) => number;
	disconnectFromRemotePlug: (p1: any) => number;
	setFrameStatusHandler: (p1: any, p2: any, p3: (p1: any, p2: number, p3: number) => void) => void;
	frameProcessed: (p1: any, p2: number) => void;
	setMaxPayloadSize: (p1: any, p2: number) => void;
	setSegmentSize: (p1: any, p2: number) => number;
	getSegmentSize: (p1: any) => number;
	getSegmentBuffer: (p1: any) => string;
	setPortStateHandler: (p1: any, p2: any, p3: (p1: any, p2: number) => void) => void;
	setPortFlags: (p1: any, p2: number) => void;
	clearPortFlags: (p1: any, p2: number) => void;
	getPortFlags: (p1: any) => number;
}
declare var IOFireWireAVCLibConsumerInterface: IOFireWireAVCLibConsumerInterface;

interface IOFireWireAVCLibProtocolInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	addCallbackDispatcherToRunLoop: (p1: any, p2: any) => number;
	removeCallbackDispatcherFromRunLoop: (p1: any) => void;
	setMessageCallback: (p1: any, p2: any, p3: (p1: any, p2: number, p3: any) => void) => void;
	setAVCRequestCallback: (p1: any, p2: number, p3: number, p4: any, p5: (p1: any, p2: number, p3: number, p4: string, p5: number, p6: string, p7: number) => number) => number;
	allocateInputPlug: (p1: any, p2: any, p3: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void, p4: number) => number;
	freeInputPlug: (p1: any, p2: number) => void;
	readInputPlug: (p1: any, p2: number) => number;
	updateInputPlug: (p1: any, p2: number, p3: number, p4: number) => number;
	allocateOutputPlug: (p1: any, p2: any, p3: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void, p4: number) => number;
	freeOutputPlug: (p1: any, p2: number) => void;
	readOutputPlug: (p1: any, p2: number) => number;
	updateOutputPlug: (p1: any, p2: number, p3: number, p4: number) => number;
	readOutputMasterPlug: (p1: any) => number;
	updateOutputMasterPlug: (p1: any, p2: number, p3: number) => number;
	readInputMasterPlug: (p1: any) => number;
	updateInputMasterPlug: (p1: any, p2: number, p3: number) => number;
	publishAVCUnitDirectory: (p1: any) => number;
	installAVCCommandHandler: (p1: any, p2: number, p3: number, p4: any, p5: (p1: any, p2: number, p3: number, p4: IOFWSpeed, p5: string, p6: number) => number) => number;
	sendAVCResponse: (p1: any, p2: number, p3: number, p4: string, p5: number) => number;
	addSubunit: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: (p1: any, p2: number, p3: IOFWAVCPlugTypes, p4: number, p5: IOFWAVCSubunitPlugMessages, p6: number) => number, p7: number) => number;
	setSubunitPlugSignalFormat: (p1: any, p2: number, p3: IOFWAVCPlugTypes, p4: number, p5: number) => number;
	getSubunitPlugSignalFormat: (p1: any, p2: number, p3: IOFWAVCPlugTypes, p4: number, p5: number) => number;
	connectTargetPlugs: (p1: any, p2: number, p3: IOFWAVCPlugTypes, p4: number, p5: number, p6: IOFWAVCPlugTypes, p7: number, p8: boolean, p9: boolean) => number;
	disconnectTargetPlugs: (p1: any, p2: number, p3: IOFWAVCPlugTypes, p4: number, p5: number, p6: IOFWAVCPlugTypes, p7: number) => number;
	getTargetPlugConnection: (p1: any, p2: number, p3: IOFWAVCPlugTypes, p4: number, p5: number, p6: IOFWAVCPlugTypes, p7: number, p8: boolean, p9: boolean) => number;
}
declare var IOFireWireAVCLibProtocolInterface: IOFireWireAVCLibProtocolInterface;

interface IOFireWireAVCLibUnitInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	open: (p1: any) => number;
	openWithSessionRef: (p1: any, p2: any) => number;
	getSessionRef: (p1: any) => any;
	close: (p1: any) => void;
	addCallbackDispatcherToRunLoop: (p1: any, p2: any) => number;
	removeCallbackDispatcherFromRunLoop: (p1: any) => void;
	setMessageCallback: (p1: any, p2: any, p3: (p1: any, p2: number, p3: any) => void) => void;
	AVCCommand: (p1: any, p2: string, p3: number, p4: string, p5: number) => number;
	AVCCommandInGeneration: (p1: any, p2: number, p3: string, p4: number, p5: string, p6: number) => number;
	getAncestorInterface: (p1: any, p2: string, p3: CFUUIDBytes, p4: CFUUIDBytes) => any;
	getProtocolInterface: (p1: any, p2: CFUUIDBytes, p3: CFUUIDBytes) => any;
	getAsyncConnectionPlugCounts: (p1: any, p2: string, p3: string) => number;
	createConsumerPlug: (p1: any, p2: number, p3: CFUUIDBytes) => IUnknownVTbl;
	updateAVCCommandTimeout: (p1: any) => number;
	makeP2PInputConnection: (p1: any, p2: number, p3: number) => number;
	breakP2PInputConnection: (p1: any, p2: number) => number;
	makeP2POutputConnection: (p1: any, p2: number, p3: number, p4: IOFWSpeed) => number;
	breakP2POutputConnection: (p1: any, p2: number) => number;
	createAVCAsynchronousCommand: (p1: any, p2: string, p3: number, p4: (p1: any, p2: IOFireWireAVCLibAsynchronousCommand) => void, p5: any, p6: IOFireWireAVCLibAsynchronousCommand) => number;
	AVCAsynchronousCommandSubmit: (p1: any, p2: IOFireWireAVCLibAsynchronousCommand) => number;
	AVCAsynchronousCommandReinit: (p1: any, p2: IOFireWireAVCLibAsynchronousCommand) => number;
	AVCAsynchronousCommandCancel: (p1: any, p2: IOFireWireAVCLibAsynchronousCommand) => number;
	AVCAsynchronousCommandRelease: (p1: any, p2: IOFireWireAVCLibAsynchronousCommand) => number;
	AVCAsynchronousCommandReinitWithCommandBytes: (p1: any, p2: IOFireWireAVCLibAsynchronousCommand, p3: string, p4: number) => number;
}
declare var IOFireWireAVCLibUnitInterface: IOFireWireAVCLibUnitInterface;

interface IOFireWireAsyncStreamCommandInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	GetStatus: (p1: IOFireWireCommandInterface) => number;
	GetTransferredBytes: (p1: IOFireWireCommandInterface) => number;
	GetTargetAddress: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetTarget: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetGeneration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetCallback: (p1: IOFireWireCommandInterface, p2: (p1: any, p2: number) => void) => void;
	SetRefCon: (p1: IOFireWireCommandInterface, p2: any) => void;
	IsExecuting: (p1: IOFireWireCommandInterface) => boolean;
	Submit: (p1: IOFireWireCommandInterface) => number;
	SubmitWithRefconAndCallback: (p1: IOFireWireCommandInterface, p2: any, p3: (p1: any, p2: number) => void) => number;
	Cancel: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	GetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	SetMaxPacket: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetFlags: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetTimeoutDuration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetMaxRetryCount: (p1: IOFireWireCommandInterface, p2: number) => void;
	GetAckCode: (p1: IOFireWireCommandInterface) => number;
	GetResponseCode: (p1: IOFireWireCommandInterface) => number;
	SetMaxPacketSpeed: (p1: IOFireWireCommandInterface, p2: IOFWSpeed) => void;
	GetRefCon: (p1: IOFireWireCommandInterface) => any;
	SetChannel: (p1: IOFireWireAsyncStreamCommandInterface, p2: number) => void;
	SetSyncBits: (p1: IOFireWireAsyncStreamCommandInterface, p2: number) => void;
	SetTagBits: (p1: IOFireWireAsyncStreamCommandInterface, p2: number) => void;
}
declare var IOFireWireAsyncStreamCommandInterface: IOFireWireAsyncStreamCommandInterface;

interface IOFireWireCommandInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	GetStatus: (p1: IOFireWireCommandInterface) => number;
	GetTransferredBytes: (p1: IOFireWireCommandInterface) => number;
	GetTargetAddress: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetTarget: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetGeneration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetCallback: (p1: IOFireWireCommandInterface, p2: (p1: any, p2: number) => void) => void;
	SetRefCon: (p1: IOFireWireCommandInterface, p2: any) => void;
	IsExecuting: (p1: IOFireWireCommandInterface) => boolean;
	Submit: (p1: IOFireWireCommandInterface) => number;
	SubmitWithRefconAndCallback: (p1: IOFireWireCommandInterface, p2: any, p3: (p1: any, p2: number) => void) => number;
	Cancel: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	GetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	SetMaxPacket: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetFlags: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetTimeoutDuration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetMaxRetryCount: (p1: IOFireWireCommandInterface, p2: number) => void;
	GetAckCode: (p1: IOFireWireCommandInterface) => number;
	GetResponseCode: (p1: IOFireWireCommandInterface) => number;
	SetMaxPacketSpeed: (p1: IOFireWireCommandInterface, p2: IOFWSpeed) => void;
	GetRefCon: (p1: IOFireWireCommandInterface) => any;
}
declare var IOFireWireCommandInterface: IOFireWireCommandInterface;

interface IOFireWireCompareSwapCommandInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	GetStatus: (p1: IOFireWireCommandInterface) => number;
	GetTransferredBytes: (p1: IOFireWireCommandInterface) => number;
	GetTargetAddress: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetTarget: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetGeneration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetCallback: (p1: IOFireWireCommandInterface, p2: (p1: any, p2: number) => void) => void;
	SetRefCon: (p1: IOFireWireCommandInterface, p2: any) => void;
	IsExecuting: (p1: IOFireWireCommandInterface) => boolean;
	Submit: (p1: IOFireWireCommandInterface) => number;
	SubmitWithRefconAndCallback: (p1: IOFireWireCommandInterface, p2: any, p3: (p1: any, p2: number) => void) => number;
	Cancel: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetValues: (p1: IOFireWireCompareSwapCommandInterface, p2: number, p3: number) => void;
	SetValues64: (p1: IOFireWireCompareSwapCommandInterface, p2: number, p3: number) => void;
	DidLock: (p1: IOFireWireCompareSwapCommandInterface) => boolean;
	Locked: (p1: IOFireWireCompareSwapCommandInterface, p2: number) => number;
	Locked64: (p1: IOFireWireCompareSwapCommandInterface, p2: number) => number;
	SetFlags: (p1: IOFireWireCompareSwapCommandInterface, p2: number) => void;
}
declare var IOFireWireCompareSwapCommandInterface: IOFireWireCompareSwapCommandInterface;

interface IOFireWireCompareSwapCommandInterface_v3 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	GetStatus: (p1: IOFireWireCommandInterface) => number;
	GetTransferredBytes: (p1: IOFireWireCommandInterface) => number;
	GetTargetAddress: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetTarget: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetGeneration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetCallback: (p1: IOFireWireCommandInterface, p2: (p1: any, p2: number) => void) => void;
	SetRefCon: (p1: IOFireWireCommandInterface, p2: any) => void;
	IsExecuting: (p1: IOFireWireCommandInterface) => boolean;
	Submit: (p1: IOFireWireCommandInterface) => number;
	SubmitWithRefconAndCallback: (p1: IOFireWireCommandInterface, p2: any, p3: (p1: any, p2: number) => void) => number;
	Cancel: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	GetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	SetMaxPacket: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetFlags: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetTimeoutDuration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetMaxRetryCount: (p1: IOFireWireCommandInterface, p2: number) => void;
	GetAckCode: (p1: IOFireWireCommandInterface) => number;
	GetResponseCode: (p1: IOFireWireCommandInterface) => number;
	SetMaxPacketSpeed: (p1: IOFireWireCommandInterface, p2: IOFWSpeed) => void;
	GetRefCon: (p1: IOFireWireCommandInterface) => any;
	SetValues: (p1: IOFireWireCompareSwapCommandInterface_v3, p2: number, p3: number) => void;
	SetValues64: (p1: IOFireWireCompareSwapCommandInterface_v3, p2: number, p3: number) => void;
	DidLock: (p1: IOFireWireCompareSwapCommandInterface_v3) => boolean;
	Locked: (p1: IOFireWireCompareSwapCommandInterface_v3, p2: number) => number;
	Locked64: (p1: IOFireWireCompareSwapCommandInterface_v3, p2: number) => number;
}
declare var IOFireWireCompareSwapCommandInterface_v3: IOFireWireCompareSwapCommandInterface_v3;

interface IOFireWireConfigDirectoryInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	Update: (p1: IOFireWireConfigDirectoryInterface, p2: number) => number;
	GetKeyType: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: IOConfigKeyType) => number;
	GetKeyValue_UInt32: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: number, p4: string) => number;
	GetKeyValue_Data: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: NSData, p4: string) => number;
	GetKeyValue_ConfigDirectory: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: IOFireWireConfigDirectoryInterface, p4: CFUUIDBytes, p5: string) => number;
	GetKeyOffset_FWAddress: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: FWAddress, p4: string) => number;
	GetIndexType: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: IOConfigKeyType) => number;
	GetIndexKey: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: number) => number;
	GetIndexValue_UInt32: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: number) => number;
	GetIndexValue_Data: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: NSData) => number;
	GetIndexValue_String: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: string) => number;
	GetIndexValue_ConfigDirectory: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: IOFireWireConfigDirectoryInterface, p4: CFUUIDBytes) => number;
	GetIndexOffset_FWAddress: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: FWAddress) => number;
	GetIndexOffset_UInt32: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: number) => number;
	GetIndexEntry: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: number) => number;
	GetSubdirectories: (p1: IOFireWireConfigDirectoryInterface, p2: number) => number;
	GetKeySubdirectories: (p1: IOFireWireConfigDirectoryInterface, p2: number, p3: number) => number;
	GetType: (p1: IOFireWireConfigDirectoryInterface, p2: number) => number;
	GetNumEntries: (p1: IOFireWireConfigDirectoryInterface, p2: number) => number;
}
declare var IOFireWireConfigDirectoryInterface: IOFireWireConfigDirectoryInterface;

interface IOFireWireDCLCommandPoolInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	revision: number;
	version: number;
	Allocate: (p1: IOFireWireDCLCommandPoolInterface, p2: number) => DCLCommand;
	AllocateWithOpcode: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: DCLCommand, p4: number) => number;
	AllocateTransferPacketDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: number, p4: any, p5: number) => DCLCommand;
	AllocateTransferBufferDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: number, p4: any, p5: number, p6: number, p7: number) => DCLCommand;
	AllocateSendPacketStartDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: any, p4: number) => DCLCommand;
	AllocateSendPacketWithHeaderStartDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: any, p4: number) => DCLCommand;
	AllocateSendBufferDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: any, p4: number, p5: number, p6: number) => DCLCommand;
	AllocateSendPacketDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: any, p4: number) => DCLCommand;
	AllocateReceivePacketStartDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: any, p4: number) => DCLCommand;
	AllocateReceivePacketDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: any, p4: number) => DCLCommand;
	AllocateReceiveBufferDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: any, p4: number, p5: number, p6: number) => DCLCommand;
	AllocateCallProcDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: (p1: DCLCommand) => void, p4: any) => DCLCommand;
	AllocateLabelDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand) => DCLCommand;
	AllocateJumpDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: DCLLabel) => DCLCommand;
	AllocateSetTagSyncBitsDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: number, p4: number) => DCLCommand;
	AllocateUpdateDCLListDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: DCLCommand, p4: number) => DCLCommand;
	AllocatePtrTimeStampDCL: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand, p3: number) => DCLCommand;
	Free: (p1: IOFireWireDCLCommandPoolInterface, p2: DCLCommand) => void;
	GetSize: (p1: IOFireWireDCLCommandPoolInterface) => number;
	SetSize: (p1: IOFireWireDCLCommandPoolInterface, p2: number) => boolean;
	GetBytesRemaining: (p1: IOFireWireDCLCommandPoolInterface) => number;
}
declare var IOFireWireDCLCommandPoolInterface: IOFireWireDCLCommandPoolInterface;

interface IOFireWireDeviceInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	InterfaceIsInited: (p1: IOFireWireDeviceInterface) => boolean;
	GetDevice: (p1: IOFireWireDeviceInterface) => number;
	Open: (p1: IOFireWireDeviceInterface) => number;
	OpenWithSessionRef: (p1: IOFireWireDeviceInterface, p2: any) => number;
	Close: (p1: IOFireWireDeviceInterface) => void;
	NotificationIsOn: (p1: IOFireWireDeviceInterface) => boolean;
	AddCallbackDispatcherToRunLoop: (p1: IOFireWireDeviceInterface, p2: any) => number;
	RemoveCallbackDispatcherFromRunLoop: (p1: IOFireWireDeviceInterface) => void;
	TurnOnNotification: (p1: IOFireWireDeviceInterface) => boolean;
	TurnOffNotification: (p1: IOFireWireDeviceInterface) => void;
	SetBusResetHandler: (p1: IOFireWireDeviceInterface, p2: (p1: IOFireWireDeviceInterface, p2: any) => void) => (p1: IOFireWireDeviceInterface, p2: any) => void;
	SetBusResetDoneHandler: (p1: IOFireWireDeviceInterface, p2: (p1: IOFireWireDeviceInterface, p2: any) => void) => (p1: IOFireWireDeviceInterface, p2: any) => void;
	ClientCommandIsComplete: (p1: IOFireWireDeviceInterface, p2: any, p3: number) => void;
	Read: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: any, p5: number, p6: boolean, p7: number) => number;
	ReadQuadlet: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: number, p5: boolean, p6: number) => number;
	Write: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: any, p5: number, p6: boolean, p7: number) => number;
	WriteQuadlet: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: number, p5: boolean, p6: number) => number;
	CompareSwap: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: number, p5: number, p6: boolean, p7: number) => number;
	CreateReadCommand: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: any, p5: number, p6: (p1: any, p2: number) => void, p7: boolean, p8: number, p9: any, p10: CFUUIDBytes) => IOFireWireCommandInterface;
	CreateReadQuadletCommand: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: number, p5: number, p6: (p1: any, p2: number) => void, p7: boolean, p8: number, p9: any, p10: CFUUIDBytes) => IOFireWireCommandInterface;
	CreateWriteCommand: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: any, p5: number, p6: (p1: any, p2: number) => void, p7: boolean, p8: number, p9: any, p10: CFUUIDBytes) => IOFireWireCommandInterface;
	CreateWriteQuadletCommand: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: number, p5: number, p6: (p1: any, p2: number) => void, p7: boolean, p8: number, p9: any, p10: CFUUIDBytes) => IOFireWireCommandInterface;
	CreateCompareSwapCommand: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: number, p5: number, p6: (p1: any, p2: number) => void, p7: boolean, p8: number, p9: any, p10: CFUUIDBytes) => IOFireWireCommandInterface;
	BusReset: (p1: IOFireWireDeviceInterface) => number;
	GetCycleTime: (p1: IOFireWireDeviceInterface, p2: number) => number;
	GetGenerationAndNodeID: (p1: IOFireWireDeviceInterface, p2: number, p3: number) => number;
	GetLocalNodeID: (p1: IOFireWireDeviceInterface, p2: number) => number;
	GetResetTime: (p1: IOFireWireDeviceInterface, p2: UnsignedWide) => number;
	CreateLocalUnitDirectory: (p1: IOFireWireDeviceInterface, p2: CFUUIDBytes) => IOFireWireLocalUnitDirectoryInterface;
	GetConfigDirectory: (p1: IOFireWireDeviceInterface, p2: CFUUIDBytes) => IOFireWireConfigDirectoryInterface;
	CreateConfigDirectoryWithIOObject: (p1: IOFireWireDeviceInterface, p2: number, p3: CFUUIDBytes) => IOFireWireConfigDirectoryInterface;
	CreatePseudoAddressSpace: (p1: IOFireWireDeviceInterface, p2: number, p3: any, p4: number, p5: any, p6: number, p7: CFUUIDBytes) => IOFireWirePseudoAddressSpaceInterface;
	CreatePhysicalAddressSpace: (p1: IOFireWireDeviceInterface, p2: number, p3: any, p4: number, p5: CFUUIDBytes) => IOFireWirePhysicalAddressSpaceInterface;
	FireBugMsg: (p1: IOFireWireDeviceInterface, p2: string) => number;
	AddIsochCallbackDispatcherToRunLoop: (p1: IOFireWireDeviceInterface, p2: any) => number;
	CreateRemoteIsochPort: (p1: IOFireWireDeviceInterface, p2: boolean, p3: CFUUIDBytes) => IOFireWireRemoteIsochPortInterface;
	CreateLocalIsochPort: (p1: IOFireWireDeviceInterface, p2: boolean, p3: DCLCommand, p4: number, p5: number, p6: number, p7: IOVirtualRange, p8: number, p9: IOVirtualRange, p10: number, p11: CFUUIDBytes) => IOFireWireLocalIsochPortInterface;
	CreateIsochChannel: (p1: IOFireWireDeviceInterface, p2: boolean, p3: number, p4: IOFWSpeed, p5: CFUUIDBytes) => IOFireWireIsochChannelInterface;
	CreateDCLCommandPool: (p1: IOFireWireDeviceInterface, p2: number, p3: CFUUIDBytes) => IOFireWireDCLCommandPoolInterface;
	GetRefCon: (p1: IOFireWireDeviceInterface) => any;
	SetRefCon: (p1: IOFireWireDeviceInterface, p2: any) => void;
	GetDebugProperty: (p1: IOFireWireDeviceInterface, p2: any, p3: string, p4: number) => any;
	PrintDCLProgram: (p1: IOFireWireDeviceInterface, p2: DCLCommand, p3: number) => void;
	CreateInitialUnitsPseudoAddressSpace: (p1: IOFireWireDeviceInterface, p2: number, p3: number, p4: any, p5: number, p6: any, p7: number, p8: CFUUIDBytes) => IOFireWirePseudoAddressSpaceInterface;
	AddCallbackDispatcherToRunLoopForMode: (p1: IOFireWireDeviceInterface, p2: any, p3: string) => number;
	AddIsochCallbackDispatcherToRunLoopForMode: (p1: IOFireWireDeviceInterface, p2: any, p3: string) => number;
	RemoveIsochCallbackDispatcherFromRunLoop: (p1: IOFireWireDeviceInterface) => void;
	Seize: (p1: IOFireWireDeviceInterface, p2: number) => number;
	FireLog: (p1: IOFireWireDeviceInterface, p2: string) => number;
	GetBusCycleTime: (p1: IOFireWireDeviceInterface, p2: number, p3: number) => number;
	CreateCompareSwapCommand64: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: number, p5: number, p6: (p1: any, p2: number) => void, p7: boolean, p8: number, p9: any, p10: CFUUIDBytes) => IOFireWireCommandInterface;
	CompareSwap64: (p1: IOFireWireDeviceInterface, p2: number, p3: FWAddress, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: number) => number;
	GetBusGeneration: (p1: IOFireWireDeviceInterface, p2: number) => number;
	GetLocalNodeIDWithGeneration: (p1: IOFireWireDeviceInterface, p2: number, p3: number) => number;
	GetRemoteNodeID: (p1: IOFireWireDeviceInterface, p2: number, p3: number) => number;
	GetSpeedToNode: (p1: IOFireWireDeviceInterface, p2: number, p3: IOFWSpeed) => number;
	GetSpeedBetweenNodes: (p1: IOFireWireDeviceInterface, p2: number, p3: number, p4: number, p5: IOFWSpeed) => number;
	GetIRMNodeID: (p1: IOFireWireDeviceInterface, p2: number, p3: number) => number;
	ClipMaxRec2K: (p1: IOFireWireDeviceInterface, p2: boolean) => number;
	CreateNuDCLPool: (p1: IOFireWireDeviceInterface, p2: number, p3: CFUUIDBytes) => IOFireWireNuDCLPoolInterface;
	GetSessionRef: (p1: IOFireWireDeviceInterface) => any;
	CreateLocalIsochPortWithOptions: (p1: IOFireWireDeviceInterface, p2: boolean, p3: DCLCommand, p4: number, p5: number, p6: number, p7: IOVirtualRange, p8: number, p9: IOVirtualRange, p10: number, p11: IOFWIsochPortOptions, p12: CFUUIDBytes) => IOFireWireLocalIsochPortInterface;
	CreateVectorCommand: (p1: IOFireWireDeviceInterface, p2: (p1: any, p2: number) => void, p3: any, p4: CFUUIDBytes) => IOFireWireLibVectorCommandInterface;
	AllocateIRMBandwidthInGeneration: (p1: IOFireWireDeviceInterface, p2: number, p3: number) => number;
	ReleaseIRMBandwidthInGeneration: (p1: IOFireWireDeviceInterface, p2: number, p3: number) => number;
	AllocateIRMChannelInGeneration: (p1: IOFireWireDeviceInterface, p2: number, p3: number) => number;
	ReleaseIRMChannelInGeneration: (p1: IOFireWireDeviceInterface, p2: number, p3: number) => number;
	CreateIRMAllocation: (p1: IOFireWireDeviceInterface, p2: boolean, p3: (p1: IOFireWireLibIRMAllocationInterface, p2: any) => void, p4: any, p5: CFUUIDBytes) => IOFireWireLibIRMAllocationInterface;
	CreateAsyncStreamListener: (p1: IOFireWireDeviceInterface, p2: number, p3: (p1: IOFWAsyncStreamListenerInterface, p2: any, p3: number, p4: any, p5: any) => number, p4: any, p5: number, p6: CFUUIDBytes) => IOFWAsyncStreamListenerInterface;
	GetIsochAsyncPort: (p1: IOFireWireDeviceInterface) => number;
	CreatePHYCommand: (p1: IOFireWireDeviceInterface, p2: number, p3: number, p4: (p1: any, p2: number) => void, p5: boolean, p6: number, p7: any, p8: CFUUIDBytes) => IOFireWireCommandInterface;
	CreatePHYPacketListener: (p1: IOFireWireDeviceInterface, p2: number, p3: CFUUIDBytes) => IOFireWireLibPHYPacketListenerInterface;
	CreateAsyncStreamCommand: (p1: IOFireWireDeviceInterface, p2: number, p3: number, p4: number, p5: any, p6: number, p7: (p1: any, p2: number) => void, p8: boolean, p9: number, p10: any, p11: CFUUIDBytes) => IOFireWireCommandInterface;
	GetCycleTimeAndUpTime: (p1: IOFireWireDeviceInterface, p2: number, p3: number) => number;
}
declare var IOFireWireDeviceInterface: IOFireWireDeviceInterface;

interface IOFireWireIsochChannelInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	revision: number;
	version: number;
	SetTalker: (p1: IOFireWireIsochChannelInterface, p2: IOFireWireIsochPortInterface) => number;
	AddListener: (p1: IOFireWireIsochChannelInterface, p2: IOFireWireIsochPortInterface) => number;
	AllocateChannel: (p1: IOFireWireIsochChannelInterface) => number;
	ReleaseChannel: (p1: IOFireWireIsochChannelInterface) => number;
	Start: (p1: IOFireWireIsochChannelInterface) => number;
	Stop: (p1: IOFireWireIsochChannelInterface) => number;
	SetChannelForceStopHandler: (p1: IOFireWireIsochChannelInterface, p2: (p1: IOFireWireIsochChannelInterface, p2: number) => void) => (p1: IOFireWireIsochChannelInterface, p2: number) => void;
	SetRefCon: (p1: IOFireWireIsochChannelInterface, p2: any) => void;
	GetRefCon: (p1: IOFireWireIsochChannelInterface) => any;
	NotificationIsOn: (p1: IOFireWireIsochChannelInterface) => boolean;
	TurnOnNotification: (p1: IOFireWireIsochChannelInterface) => boolean;
	TurnOffNotification: (p1: IOFireWireIsochChannelInterface) => void;
	ClientCommandIsComplete: (p1: IOFireWireIsochChannelInterface, p2: any, p3: number) => void;
}
declare var IOFireWireIsochChannelInterface: IOFireWireIsochChannelInterface;

interface IOFireWireIsochPortInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	revision: number;
	version: number;
	GetSupported: (p1: IOFireWireIsochPortInterface, p2: IOFWSpeed, p3: number) => number;
	AllocatePort: (p1: IOFireWireIsochPortInterface, p2: IOFWSpeed, p3: number) => number;
	ReleasePort: (p1: IOFireWireIsochPortInterface) => number;
	Start: (p1: IOFireWireIsochPortInterface) => number;
	Stop: (p1: IOFireWireIsochPortInterface) => number;
	SetRefCon: (p1: IOFireWireIsochPortInterface, p2: any) => void;
	GetRefCon: (p1: IOFireWireIsochPortInterface) => any;
}
declare var IOFireWireIsochPortInterface: IOFireWireIsochPortInterface;

interface IOFireWireLibIRMAllocationInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	setReleaseIRMResourcesOnFree: (p1: IOFireWireLibIRMAllocationInterface, p2: boolean) => void;
	allocateIsochResources: (p1: IOFireWireLibIRMAllocationInterface, p2: number, p3: number) => number;
	deallocateIsochResources: (p1: IOFireWireLibIRMAllocationInterface) => number;
	areIsochResourcesAllocated: (p1: IOFireWireLibIRMAllocationInterface, p2: string, p3: number) => boolean;
	NotificationIsOn: (p1: IOFireWireLibIRMAllocationInterface) => boolean;
	TurnOnNotification: (p1: IOFireWireLibIRMAllocationInterface) => boolean;
	TurnOffNotification: (p1: IOFireWireLibIRMAllocationInterface) => void;
	SetRefCon: (p1: IOFireWireLibIRMAllocationInterface, p2: any) => void;
	GetRefCon: (p1: IOFireWireLibIRMAllocationInterface) => any;
}
declare var IOFireWireLibIRMAllocationInterface: IOFireWireLibIRMAllocationInterface;

interface IOFireWireLibPHYPacketListenerInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	SetListenerCallback: (p1: IOFireWireLibPHYPacketListenerInterface, p2: (p1: IOFireWireLibPHYPacketListenerInterface, p2: any, p3: number, p4: number, p5: any) => void) => void;
	SetSkippedPacketCallback: (p1: IOFireWireLibPHYPacketListenerInterface, p2: (p1: IOFireWireLibPHYPacketListenerInterface, p2: any, p3: number, p4: any) => void) => void;
	NotificationIsOn: (p1: IOFireWireLibPHYPacketListenerInterface) => boolean;
	TurnOnNotification: (p1: IOFireWireLibPHYPacketListenerInterface) => number;
	TurnOffNotification: (p1: IOFireWireLibPHYPacketListenerInterface) => void;
	ClientCommandIsComplete: (p1: IOFireWireLibPHYPacketListenerInterface, p2: any) => void;
	SetRefCon: (p1: IOFireWireLibPHYPacketListenerInterface, p2: any) => void;
	GetRefCon: (p1: IOFireWireLibPHYPacketListenerInterface) => any;
	SetFlags: (p1: IOFireWireLibPHYPacketListenerInterface, p2: number) => void;
	GetFlags: (p1: IOFireWireLibPHYPacketListenerInterface) => number;
}
declare var IOFireWireLibPHYPacketListenerInterface: IOFireWireLibPHYPacketListenerInterface;

interface IOFireWireLibVectorCommandInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	Submit: (p1: IOFireWireLibVectorCommandInterface) => number;
	SubmitWithRefconAndCallback: (p1: IOFireWireLibVectorCommandInterface, p2: any, p3: (p1: any, p2: number) => void) => number;
	IsExecuting: (p1: IOFireWireLibVectorCommandInterface) => boolean;
	SetCallback: (p1: IOFireWireLibVectorCommandInterface, p2: (p1: any, p2: number) => void) => void;
	SetRefCon: (p1: IOFireWireLibVectorCommandInterface, p2: any) => void;
	GetRefCon: (p1: IOFireWireLibVectorCommandInterface) => any;
	SetFlags: (p1: IOFireWireLibVectorCommandInterface, p2: number) => void;
	GetFlags: (p1: IOFireWireLibVectorCommandInterface) => number;
	EnsureCapacity: (p1: IOFireWireLibVectorCommandInterface, p2: number) => number;
	AddCommand: (p1: IOFireWireLibVectorCommandInterface, p2: IOFireWireCommandInterface) => void;
	RemoveCommand: (p1: IOFireWireLibVectorCommandInterface, p2: IOFireWireCommandInterface) => void;
	InsertCommandAtIndex: (p1: IOFireWireLibVectorCommandInterface, p2: IOFireWireCommandInterface, p3: number) => void;
	GetCommandAtIndex: (p1: IOFireWireLibVectorCommandInterface, p2: number) => IOFireWireCommandInterface;
	GetIndexOfCommand: (p1: IOFireWireLibVectorCommandInterface, p2: IOFireWireCommandInterface) => number;
	RemoveCommandAtIndex: (p1: IOFireWireLibVectorCommandInterface, p2: number) => void;
	RemoveAllCommands: (p1: IOFireWireLibVectorCommandInterface) => void;
	GetCommandCount: (p1: IOFireWireLibVectorCommandInterface) => number;
}
declare var IOFireWireLibVectorCommandInterface: IOFireWireLibVectorCommandInterface;

interface IOFireWireLocalIsochPortInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	revision: number;
	version: number;
	GetSupported: (p1: IOFireWireIsochPortInterface, p2: IOFWSpeed, p3: number) => number;
	AllocatePort: (p1: IOFireWireIsochPortInterface, p2: IOFWSpeed, p3: number) => number;
	ReleasePort: (p1: IOFireWireIsochPortInterface) => number;
	Start: (p1: IOFireWireIsochPortInterface) => number;
	Stop: (p1: IOFireWireIsochPortInterface) => number;
	SetRefCon: (p1: IOFireWireIsochPortInterface, p2: any) => void;
	GetRefCon: (p1: IOFireWireIsochPortInterface) => any;
	ModifyJumpDCL: (p1: IOFireWireLocalIsochPortInterface, p2: DCLJump, p3: DCLLabel) => number;
	PrintDCLProgram: (p1: IOFireWireLocalIsochPortInterface, p2: DCLCommand, p3: number) => void;
	ModifyTransferPacketDCLSize: (p1: IOFireWireLocalIsochPortInterface, p2: DCLTransferPacket, p3: number) => number;
	ModifyTransferPacketDCLBuffer: (p1: IOFireWireLocalIsochPortInterface, p2: DCLTransferPacket, p3: any) => number;
	ModifyTransferPacketDCL: (p1: IOFireWireLocalIsochPortInterface, p2: DCLTransferPacket, p3: any, p4: number) => number;
	SetFinalizeCallback: (p1: IOFireWireLocalIsochPortInterface, p2: (p1: any) => number) => number;
	SetResourceUsageFlags: (p1: IOFireWireLocalIsochPortInterface, p2: IOFWIsochResourceFlags) => number;
	Notify: (p1: IOFireWireLocalIsochPortInterface, p2: IOFWDCLNotificationType, p3: any, p4: number) => number;
}
declare var IOFireWireLocalIsochPortInterface: IOFireWireLocalIsochPortInterface;

interface IOFireWireLocalUnitDirectoryInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	AddEntry_Ptr: (p1: IOFireWireLocalUnitDirectoryInterface, p2: number, p3: any, p4: number, p5: string) => number;
	AddEntry_UInt32: (p1: IOFireWireLocalUnitDirectoryInterface, p2: number, p3: number, p4: string) => number;
	AddEntry_FWAddress: (p1: IOFireWireLocalUnitDirectoryInterface, p2: number, p3: FWAddress, p4: string) => number;
	Publish: (p1: IOFireWireLocalUnitDirectoryInterface) => number;
	Unpublish: (p1: IOFireWireLocalUnitDirectoryInterface) => number;
}
declare var IOFireWireLocalUnitDirectoryInterface: IOFireWireLocalUnitDirectoryInterface;

interface IOFireWireNuDCLPoolInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	revision: number;
	version: number;
	GetProgram: (p1: IOFireWireNuDCLPoolInterface) => DCLCommand;
	GetDCLs: (p1: IOFireWireNuDCLPoolInterface) => NSArray<any>;
	PrintProgram: (p1: IOFireWireNuDCLPoolInterface) => void;
	PrintDCL: (p1: any) => void;
	SetCurrentTagAndSync: (p1: IOFireWireNuDCLPoolInterface, p2: number, p3: number) => void;
	AllocateSendPacket: (p1: IOFireWireNuDCLPoolInterface, p2: NSSet<any>, p3: number, p4: IOVirtualRange) => any;
	AllocateSendPacket_v: (p1: IOFireWireNuDCLPoolInterface, p2: NSSet<any>, p3: IOVirtualRange) => any;
	AllocateSkipCycle: (p1: IOFireWireNuDCLPoolInterface) => any;
	AllocateReceivePacket: (p1: IOFireWireNuDCLPoolInterface, p2: NSSet<any>, p3: number, p4: number, p5: IOVirtualRange) => any;
	AllocateReceivePacket_v: (p1: IOFireWireNuDCLPoolInterface, p2: NSSet<any>, p3: number, p4: IOVirtualRange) => any;
	FindDCLNextDCL: (p1: IOFireWireNuDCLPoolInterface, p2: any) => any;
	SetDCLBranch: (p1: any, p2: any) => number;
	GetDCLBranch: (p1: any) => any;
	SetDCLTimeStampPtr: (p1: any, p2: number) => number;
	GetDCLTimeStampPtr: (p1: any) => number;
	SetDCLStatusPtr: (p1: any, p2: number) => number;
	GetDCLStatusPtr: (p1: any) => number;
	AppendDCLRanges: (p1: any, p2: number, p3: IOVirtualRange) => number;
	SetDCLRanges: (p1: any, p2: number, p3: IOVirtualRange) => number;
	SetDCLRanges_v: (p1: any, p2: IOVirtualRange) => number;
	GetDCLRanges: (p1: any, p2: number, p3: IOVirtualRange) => number;
	CountDCLRanges: (p1: any) => number;
	GetDCLSpan: (p1: any, p2: IOVirtualRange) => number;
	GetDCLSize: (p1: any) => number;
	SetDCLCallback: (p1: any, p2: (p1: any, p2: any) => void) => number;
	GetDCLCallback: (p1: any) => (p1: any, p2: any) => void;
	SetDCLUserHeaderPtr: (p1: any, p2: number, p3: number) => number;
	GetDCLUserHeaderPtr: (p1: any) => number;
	GetUserHeaderMaskPtr: (p1: any) => number;
	SetDCLRefcon: (p1: any, p2: any) => void;
	GetDCLRefcon: (p1: any) => any;
	AppendDCLUpdateList: (p1: any, p2: any) => number;
	SetDCLUpdateList: (p1: any, p2: NSSet<any>) => number;
	CopyDCLUpdateList: (p1: any) => NSSet<any>;
	RemoveDCLUpdateList: (p1: any) => number;
	SetDCLWaitControl: (p1: any, p2: boolean) => number;
	SetDCLFlags: (p1: any, p2: number) => void;
	GetDCLFlags: (p1: any) => number;
	SetDCLSkipBranch: (p1: any, p2: any) => number;
	GetDCLSkipBranch: (p1: any) => any;
	SetDCLSkipCallback: (p1: any, p2: (p1: any, p2: any) => void) => number;
	GetDCLSkipCallback: (p1: any) => (p1: any, p2: any) => void;
	SetDCLSkipRefcon: (p1: any, p2: any) => number;
	GetDCLSkipRefcon: (p1: any) => any;
	SetDCLSyncBits: (p1: any, p2: number) => number;
	GetDCLSyncBits: (p1: any) => number;
	SetDCLTagBits: (p1: any, p2: number) => number;
	GetDCLTagBits: (p1: any) => number;
}
declare var IOFireWireNuDCLPoolInterface: IOFireWireNuDCLPoolInterface;

interface IOFireWirePHYCommandInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	GetStatus: (p1: IOFireWireCommandInterface) => number;
	GetTransferredBytes: (p1: IOFireWireCommandInterface) => number;
	GetTargetAddress: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetTarget: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetGeneration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetCallback: (p1: IOFireWireCommandInterface, p2: (p1: any, p2: number) => void) => void;
	SetRefCon: (p1: IOFireWireCommandInterface, p2: any) => void;
	IsExecuting: (p1: IOFireWireCommandInterface) => boolean;
	Submit: (p1: IOFireWireCommandInterface) => number;
	SubmitWithRefconAndCallback: (p1: IOFireWireCommandInterface, p2: any, p3: (p1: any, p2: number) => void) => number;
	Cancel: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	GetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	SetMaxPacket: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetFlags: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetTimeoutDuration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetMaxRetryCount: (p1: IOFireWireCommandInterface, p2: number) => void;
	GetAckCode: (p1: IOFireWireCommandInterface) => number;
	GetResponseCode: (p1: IOFireWireCommandInterface) => number;
	SetMaxPacketSpeed: (p1: IOFireWireCommandInterface, p2: IOFWSpeed) => void;
	GetRefCon: (p1: IOFireWireCommandInterface) => any;
	SetDataQuads: (p1: IOFireWirePHYCommandInterface, p2: number, p3: number) => void;
}
declare var IOFireWirePHYCommandInterface: IOFireWirePHYCommandInterface;

interface IOFireWirePhysicalAddressSpaceInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	GetPhysicalSegments: (p1: IOFireWirePhysicalAddressSpaceInterface, p2: number, p3: number, p4: number) => void;
	GetPhysicalSegment: (p1: IOFireWirePhysicalAddressSpaceInterface, p2: number, p3: number) => number;
	GetPhysicalAddress: (p1: IOFireWirePhysicalAddressSpaceInterface) => number;
	GetFWAddress: (p1: IOFireWirePhysicalAddressSpaceInterface, p2: FWAddress) => void;
	GetBuffer: (p1: IOFireWirePhysicalAddressSpaceInterface) => any;
	GetBufferSize: (p1: IOFireWirePhysicalAddressSpaceInterface) => number;
}
declare var IOFireWirePhysicalAddressSpaceInterface: IOFireWirePhysicalAddressSpaceInterface;

interface IOFireWirePseudoAddressSpaceInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	SetWriteHandler: (p1: IOFireWirePseudoAddressSpaceInterface, p2: (p1: IOFireWirePseudoAddressSpaceInterface, p2: any, p3: number, p4: any, p5: number, p6: number, p7: number, p8: any) => number) => (p1: IOFireWirePseudoAddressSpaceInterface, p2: any, p3: number, p4: any, p5: number, p6: number, p7: number, p8: any) => number;
	SetReadHandler: (p1: IOFireWirePseudoAddressSpaceInterface, p2: (p1: IOFireWirePseudoAddressSpaceInterface, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any) => number) => (p1: IOFireWirePseudoAddressSpaceInterface, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any) => number;
	SetSkippedPacketHandler: (p1: IOFireWirePseudoAddressSpaceInterface, p2: (p1: IOFireWirePseudoAddressSpaceInterface, p2: any, p3: number) => void) => (p1: IOFireWirePseudoAddressSpaceInterface, p2: any, p3: number) => void;
	NotificationIsOn: (p1: IOFireWirePseudoAddressSpaceInterface) => boolean;
	TurnOnNotification: (p1: IOFireWirePseudoAddressSpaceInterface) => boolean;
	TurnOffNotification: (p1: IOFireWirePseudoAddressSpaceInterface) => void;
	ClientCommandIsComplete: (p1: IOFireWirePseudoAddressSpaceInterface, p2: any, p3: number) => void;
	GetFWAddress: (p1: IOFireWirePseudoAddressSpaceInterface, p2: FWAddress) => void;
	GetBuffer: (p1: IOFireWirePseudoAddressSpaceInterface) => any;
	GetBufferSize: (p1: IOFireWirePseudoAddressSpaceInterface) => number;
	GetRefCon: (p1: IOFireWirePseudoAddressSpaceInterface) => any;
}
declare var IOFireWirePseudoAddressSpaceInterface: IOFireWirePseudoAddressSpaceInterface;

interface IOFireWireReadCommandInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	GetStatus: (p1: IOFireWireCommandInterface) => number;
	GetTransferredBytes: (p1: IOFireWireCommandInterface) => number;
	GetTargetAddress: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetTarget: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetGeneration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetCallback: (p1: IOFireWireCommandInterface, p2: (p1: any, p2: number) => void) => void;
	SetRefCon: (p1: IOFireWireCommandInterface, p2: any) => void;
	IsExecuting: (p1: IOFireWireCommandInterface) => boolean;
	Submit: (p1: IOFireWireCommandInterface) => number;
	SubmitWithRefconAndCallback: (p1: IOFireWireCommandInterface, p2: any, p3: (p1: any, p2: number) => void) => number;
	Cancel: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	GetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	SetMaxPacket: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetFlags: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetTimeoutDuration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetMaxRetryCount: (p1: IOFireWireCommandInterface, p2: number) => void;
	GetAckCode: (p1: IOFireWireCommandInterface) => number;
	GetResponseCode: (p1: IOFireWireCommandInterface) => number;
	SetMaxPacketSpeed: (p1: IOFireWireCommandInterface, p2: IOFWSpeed) => void;
	GetRefCon: (p1: IOFireWireCommandInterface) => any;
}
declare var IOFireWireReadCommandInterface: IOFireWireReadCommandInterface;

interface IOFireWireReadQuadletCommandInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	GetStatus: (p1: IOFireWireCommandInterface) => number;
	GetTransferredBytes: (p1: IOFireWireCommandInterface) => number;
	GetTargetAddress: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetTarget: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetGeneration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetCallback: (p1: IOFireWireCommandInterface, p2: (p1: any, p2: number) => void) => void;
	SetRefCon: (p1: IOFireWireCommandInterface, p2: any) => void;
	IsExecuting: (p1: IOFireWireCommandInterface) => boolean;
	Submit: (p1: IOFireWireCommandInterface) => number;
	SubmitWithRefconAndCallback: (p1: IOFireWireCommandInterface, p2: any, p3: (p1: any, p2: number) => void) => number;
	Cancel: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetQuads: (p1: IOFireWireReadQuadletCommandInterface, p2: number, p3: number) => void;
}
declare var IOFireWireReadQuadletCommandInterface: IOFireWireReadQuadletCommandInterface;

interface IOFireWireRemoteIsochPortInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	revision: number;
	version: number;
	GetSupported: (p1: IOFireWireIsochPortInterface, p2: IOFWSpeed, p3: number) => number;
	AllocatePort: (p1: IOFireWireIsochPortInterface, p2: IOFWSpeed, p3: number) => number;
	ReleasePort: (p1: IOFireWireIsochPortInterface) => number;
	Start: (p1: IOFireWireIsochPortInterface) => number;
	Stop: (p1: IOFireWireIsochPortInterface) => number;
	SetRefCon: (p1: IOFireWireIsochPortInterface, p2: any) => void;
	GetRefCon: (p1: IOFireWireIsochPortInterface) => any;
	SetGetSupportedHandler: (p1: IOFireWireRemoteIsochPortInterface, p2: (p1: IOFireWireIsochPortInterface, p2: IOFWSpeed, p3: number) => number) => (p1: IOFireWireIsochPortInterface, p2: IOFWSpeed, p3: number) => number;
	SetAllocatePortHandler: (p1: IOFireWireRemoteIsochPortInterface, p2: (p1: IOFireWireIsochPortInterface, p2: IOFWSpeed, p3: number) => number) => (p1: IOFireWireIsochPortInterface, p2: IOFWSpeed, p3: number) => number;
	SetReleasePortHandler: (p1: IOFireWireRemoteIsochPortInterface, p2: (p1: IOFireWireIsochPortInterface) => number) => (p1: IOFireWireIsochPortInterface) => number;
	SetStartHandler: (p1: IOFireWireRemoteIsochPortInterface, p2: (p1: IOFireWireIsochPortInterface) => number) => (p1: IOFireWireIsochPortInterface) => number;
	SetStopHandler: (p1: IOFireWireRemoteIsochPortInterface, p2: (p1: IOFireWireIsochPortInterface) => number) => (p1: IOFireWireIsochPortInterface) => number;
}
declare var IOFireWireRemoteIsochPortInterface: IOFireWireRemoteIsochPortInterface;

interface IOFireWireSBP2LibLUNInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	open: (p1: any) => number;
	openWithSessionRef: (p1: any, p2: any) => number;
	getSessionRef: (p1: any) => any;
	close: (p1: any) => void;
	addCallbackDispatcherToRunLoop: (p1: any, p2: any) => number;
	removeCallbackDispatcherFromRunLoop: (p1: any) => void;
	setMessageCallback: (p1: any, p2: any, p3: (p1: any, p2: number, p3: any) => void) => void;
	setRefCon: (p1: any, p2: any) => void;
	getRefCon: (p1: any) => any;
	createLogin: (p1: any, p2: CFUUIDBytes) => IUnknownVTbl;
	createMgmtORB: (p1: any, p2: CFUUIDBytes) => IUnknownVTbl;
}
declare var IOFireWireSBP2LibLUNInterface: IOFireWireSBP2LibLUNInterface;

interface IOFireWireSBP2LibLoginInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	submitLogin: (p1: any) => number;
	submitLogout: (p1: any) => number;
	setLoginFlags: (p1: any, p2: number) => void;
	setLoginCallback: (p1: any, p2: any, p3: (p1: any, p2: FWSBP2LoginCompleteParams) => void) => void;
	setLogoutCallback: (p1: any, p2: any, p3: (p1: any, p2: FWSBP2LogoutCompleteParams) => void) => void;
	setRefCon: (p1: any, p2: any) => void;
	getRefCon: (p1: any) => any;
	getMaxCommandBlockSize: (p1: any) => number;
	getLoginID: (p1: any) => number;
	setMaxPayloadSize: (p1: any, p2: number) => void;
	setReconnectTime: (p1: any, p2: number) => void;
	createORB: (p1: any, p2: CFUUIDBytes) => IUnknownVTbl;
	submitORB: (p1: any, p2: IOFireWireSBP2LibORBInterface) => number;
	setUnsolicitedStatusNotify: (p1: any, p2: any, p3: (p1: any, p2: FWSBP2NotifyParams) => void) => void;
	setStatusNotify: (p1: any, p2: any, p3: (p1: any, p2: FWSBP2NotifyParams) => void) => void;
	setFetchAgentResetCallback: (p1: any, p2: any, p3: (p1: any, p2: number) => void) => void;
	submitFetchAgentReset: (p1: any) => number;
	setFetchAgentWriteCallback: (p1: any, p2: any, p3: (p1: any, p2: number, p3: any) => void) => void;
	ringDoorbell: (p1: any) => number;
	enableUnsolicitedStatus: (p1: any) => number;
	setBusyTimeoutRegisterValue: (p1: any, p2: number) => number;
	setPassword: (p1: any, p2: any, p3: number) => number;
}
declare var IOFireWireSBP2LibLoginInterface: IOFireWireSBP2LibLoginInterface;

interface IOFireWireSBP2LibMgmtORBInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	submitORB: (p1: any) => number;
	setORBCompleteCallback: (p1: any, p2: any, p3: (p1: any, p2: number, p3: any) => void) => void;
	setRefCon: (p1: any, p2: any) => void;
	getRefCon: (p1: any) => any;
	setCommandFunction: (p1: any, p2: number) => number;
	setManageeORB: (p1: any, p2: any) => number;
	setManageeLogin: (p1: any, p2: any) => number;
	setResponseBuffer: (p1: any, p2: any, p3: number) => number;
}
declare var IOFireWireSBP2LibMgmtORBInterface: IOFireWireSBP2LibMgmtORBInterface;

interface IOFireWireSBP2LibORBInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	setRefCon: (p1: any, p2: any) => void;
	getRefCon: (p1: any) => any;
	setCommandFlags: (p1: any, p2: number) => void;
	setMaxORBPayloadSize: (p1: any, p2: number) => void;
	setCommandTimeout: (p1: any, p2: number) => void;
	setCommandGeneration: (p1: any, p2: number) => void;
	setCommandBuffersAsRanges: (p1: any, p2: FWSBP2VirtualRange, p3: number, p4: number, p5: number, p6: number) => number;
	releaseCommandBuffers: (p1: any) => number;
	setCommandBlock: (p1: any, p2: any, p3: number) => number;
	LSIWorkaroundSetCommandBuffersAsRanges: (p1: any, p2: FWSBP2VirtualRange, p3: number, p4: number, p5: number, p6: number) => number;
	LSIWorkaroundSyncBuffersForOutput: (p1: any) => number;
	LSIWorkaroundSyncBuffersForInput: (p1: any) => number;
}
declare var IOFireWireSBP2LibORBInterface: IOFireWireSBP2LibORBInterface;

interface IOFireWireWriteCommandInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	GetStatus: (p1: IOFireWireCommandInterface) => number;
	GetTransferredBytes: (p1: IOFireWireCommandInterface) => number;
	GetTargetAddress: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetTarget: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetGeneration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetCallback: (p1: IOFireWireCommandInterface, p2: (p1: any, p2: number) => void) => void;
	SetRefCon: (p1: IOFireWireCommandInterface, p2: any) => void;
	IsExecuting: (p1: IOFireWireCommandInterface) => boolean;
	Submit: (p1: IOFireWireCommandInterface) => number;
	SubmitWithRefconAndCallback: (p1: IOFireWireCommandInterface, p2: any, p3: (p1: any, p2: number) => void) => number;
	Cancel: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	GetBuffer: (p1: IOFireWireCommandInterface, p2: number, p3: any) => void;
	SetMaxPacket: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetFlags: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetTimeoutDuration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetMaxRetryCount: (p1: IOFireWireCommandInterface, p2: number) => void;
	GetAckCode: (p1: IOFireWireCommandInterface) => number;
	GetResponseCode: (p1: IOFireWireCommandInterface) => number;
	SetMaxPacketSpeed: (p1: IOFireWireCommandInterface, p2: IOFWSpeed) => void;
	GetRefCon: (p1: IOFireWireCommandInterface) => any;
}
declare var IOFireWireWriteCommandInterface: IOFireWireWriteCommandInterface;

interface IOFireWireWriteQuadletCommandInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	GetStatus: (p1: IOFireWireCommandInterface) => number;
	GetTransferredBytes: (p1: IOFireWireCommandInterface) => number;
	GetTargetAddress: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetTarget: (p1: IOFireWireCommandInterface, p2: FWAddress) => void;
	SetGeneration: (p1: IOFireWireCommandInterface, p2: number) => void;
	SetCallback: (p1: IOFireWireCommandInterface, p2: (p1: any, p2: number) => void) => void;
	SetRefCon: (p1: IOFireWireCommandInterface, p2: any) => void;
	IsExecuting: (p1: IOFireWireCommandInterface) => boolean;
	Submit: (p1: IOFireWireCommandInterface) => number;
	SubmitWithRefconAndCallback: (p1: IOFireWireCommandInterface, p2: any, p3: (p1: any, p2: number) => void) => number;
	Cancel: (p1: IOFireWireCommandInterface, p2: number) => number;
	SetQuads: (p1: IOFireWireWriteQuadletCommandInterface, p2: number, p3: number) => void;
}
declare var IOFireWireWriteQuadletCommandInterface: IOFireWireWriteQuadletCommandInterface;

interface IOFixedPoint32 {
	x: number;
	y: number;
}
declare var IOFixedPoint32: IOFixedPoint32;

interface IOFramebufferInformation {
	baseAddress: number;
	activeWidth: number;
	activeHeight: number;
	bytesPerRow: number;
	bytesPerPlane: number;
	bitsPerPixel: number;
	pixelType: number;
	flags: number;
	reserved: number;
}
declare var IOFramebufferInformation: IOFramebufferInformation;

declare function IOFramebufferOpen(service: number, owningTask: number, type: number, connect: number): number;

interface IOGBounds {
	minx: number;
	maxx: number;
	miny: number;
	maxy: number;
}
declare var IOGBounds: IOGBounds;

interface IOGPoint {
	x: number;
	y: number;
}
declare var IOGPoint: IOGPoint;

interface IOGSize {
	width: number;
	height: number;
}
declare var IOGSize: IOGSize;

declare function IOGetSystemLoadAdvisory(): number;

interface IOGraphicsEngineContext {
	contextLock: number;
	state: number;
	owner: any;
	version: number;
	structSize: number;
	reserved: number;
}
declare var IOGraphicsEngineContext: IOGraphicsEngineContext;

enum IOHIDAccessType {

	kIOHIDAccessTypeGranted = 0,

	kIOHIDAccessTypeDenied = 1,

	kIOHIDAccessTypeUnknown = 2
}


enum IOHIDButtonModes {

	kIOHIDButtonMode_BothLeftClicks = 0,

	kIOHIDButtonMode_ReverseLeftRightClicks = 1,

	kIOHIDButtonMode_EnableRightClick = 2
}


declare function IOHIDCheckAccess(requestType: IOHIDRequestType): IOHIDAccessType;

declare function IOHIDCopyCFTypeParameter(handle: number, key: string, parameter: any): number;

declare function IOHIDCreateSharedMemory(connect: number, version: number): number;

declare function IOHIDDeviceActivate(device: any): void;

declare function IOHIDDeviceCancel(device: any): void;

declare function IOHIDDeviceClose(device: any, options: number): number;

declare function IOHIDDeviceConformsTo(device: any, usagePage: number, usage: number): boolean;

declare function IOHIDDeviceCopyMatchingElements(device: any, matching: NSDictionary<any, any>, options: number): NSArray<any>;

declare function IOHIDDeviceCopyValueMultiple(device: any, elements: NSArray<any> | any[], pMultiple: NSDictionary<any, any>): number;

declare function IOHIDDeviceCopyValueMultipleWithCallback(device: any, elements: NSArray<any> | any[], pMultiple: NSDictionary<any, any>, timeout: number, callback: (p1: any, p2: number, p3: any, p4: NSDictionary<any, any>) => void, context: any): number;

declare function IOHIDDeviceCreate(allocator: any, service: number): any;

interface IOHIDDeviceDeviceInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	open: (p1: any, p2: number) => number;
	close: (p1: any, p2: number) => number;
	getProperty: (p1: any, p2: string, p3: any) => number;
	setProperty: (p1: any, p2: string, p3: any) => number;
	getAsyncEventSource: (p1: any, p2: any) => number;
	copyMatchingElements: (p1: any, p2: NSDictionary<any, any>, p3: NSArray<any>, p4: number) => number;
	setValue: (p1: any, p2: any, p3: any, p4: number, p5: (p1: any, p2: number, p3: any, p4: any) => void, p6: any, p7: number) => number;
	getValue: (p1: any, p2: any, p3: any, p4: number, p5: (p1: any, p2: number, p3: any, p4: any) => void, p6: any, p7: number) => number;
	setInputReportCallback: (p1: any, p2: string, p3: number, p4: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number) => void, p5: any, p6: number) => number;
	setReport: (p1: any, p2: IOHIDReportType, p3: number, p4: string, p5: number, p6: number, p7: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number) => void, p8: any, p9: number) => number;
	getReport: (p1: any, p2: IOHIDReportType, p3: number, p4: string, p5: number, p6: number, p7: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number) => void, p8: any, p9: number) => number;
}
declare var IOHIDDeviceDeviceInterface: IOHIDDeviceDeviceInterface;

declare function IOHIDDeviceGetProperty(device: any, key: string): any;

declare function IOHIDDeviceGetReport(device: any, reportType: IOHIDReportType, reportID: number, report: string | any, pReportLength: number): number;

declare function IOHIDDeviceGetReportWithCallback(device: any, reportType: IOHIDReportType, reportID: number, report: string | any, pReportLength: number, timeout: number, callback: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number) => void, context: any): number;

declare function IOHIDDeviceGetService(device: any): number;

declare function IOHIDDeviceGetTypeID(): number;

declare function IOHIDDeviceGetValue(device: any, element: any, pValue: any): number;

enum IOHIDDeviceGetValueOptions {

	kIOHIDDeviceGetValueWithUpdate = 131072,

	kIOHIDDeviceGetValueWithoutUpdate = 262144
}


declare function IOHIDDeviceGetValueWithCallback(device: any, element: any, pValue: any, timeout: number, callback: (p1: any, p2: number, p3: any, p4: any) => void, context: any): number;

declare function IOHIDDeviceGetValueWithOptions(device: any, element: any, pValue: any, options: number): number;

interface IOHIDDeviceInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	createAsyncEventSource: (p1: any, p2: any) => number;
	getAsyncEventSource: (p1: any) => any;
	createAsyncPort: (p1: any, p2: number) => number;
	getAsyncPort: (p1: any) => number;
	open: (p1: any, p2: number) => number;
	close: (p1: any) => number;
	setRemovalCallback: (p1: any, p2: (p1: any, p2: number, p3: any, p4: any) => void, p3: any, p4: any) => number;
	getElementValue: (p1: any, p2: number, p3: IOHIDEventStruct) => number;
	setElementValue: (p1: any, p2: number, p3: IOHIDEventStruct, p4: number, p5: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p6: any, p7: any) => number;
	queryElementValue: (p1: any, p2: number, p3: IOHIDEventStruct, p4: number, p5: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p6: any, p7: any) => number;
	startAllQueues: (p1: any) => number;
	stopAllQueues: (p1: any) => number;
	allocQueue: (p1: any) => IOHIDQueueInterface;
	allocOutputTransaction: (p1: any) => IOHIDOutputTransactionInterface;
	setReport: (p1: any, p2: IOHIDReportType, p3: number, p4: any, p5: number, p6: number, p7: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p8: any, p9: any) => number;
	getReport: (p1: any, p2: IOHIDReportType, p3: number, p4: any, p5: number, p6: number, p7: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p8: any, p9: any) => number;
}
declare var IOHIDDeviceInterface: IOHIDDeviceInterface;

interface IOHIDDeviceInterface121 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	createAsyncEventSource: (p1: any, p2: any) => number;
	getAsyncEventSource: (p1: any) => any;
	createAsyncPort: (p1: any, p2: number) => number;
	getAsyncPort: (p1: any) => number;
	open: (p1: any, p2: number) => number;
	close: (p1: any) => number;
	setRemovalCallback: (p1: any, p2: (p1: any, p2: number, p3: any, p4: any) => void, p3: any, p4: any) => number;
	getElementValue: (p1: any, p2: number, p3: IOHIDEventStruct) => number;
	setElementValue: (p1: any, p2: number, p3: IOHIDEventStruct, p4: number, p5: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p6: any, p7: any) => number;
	queryElementValue: (p1: any, p2: number, p3: IOHIDEventStruct, p4: number, p5: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p6: any, p7: any) => number;
	startAllQueues: (p1: any) => number;
	stopAllQueues: (p1: any) => number;
	allocQueue: (p1: any) => IOHIDQueueInterface;
	allocOutputTransaction: (p1: any) => IOHIDOutputTransactionInterface;
	setReport: (p1: any, p2: IOHIDReportType, p3: number, p4: any, p5: number, p6: number, p7: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p8: any, p9: any) => number;
	getReport: (p1: any, p2: IOHIDReportType, p3: number, p4: any, p5: number, p6: number, p7: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p8: any, p9: any) => number;
}
declare var IOHIDDeviceInterface121: IOHIDDeviceInterface121;

interface IOHIDDeviceInterface122 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	createAsyncEventSource: (p1: any, p2: any) => number;
	getAsyncEventSource: (p1: any) => any;
	createAsyncPort: (p1: any, p2: number) => number;
	getAsyncPort: (p1: any) => number;
	open: (p1: any, p2: number) => number;
	close: (p1: any) => number;
	setRemovalCallback: (p1: any, p2: (p1: any, p2: number, p3: any, p4: any) => void, p3: any, p4: any) => number;
	getElementValue: (p1: any, p2: number, p3: IOHIDEventStruct) => number;
	setElementValue: (p1: any, p2: number, p3: IOHIDEventStruct, p4: number, p5: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p6: any, p7: any) => number;
	queryElementValue: (p1: any, p2: number, p3: IOHIDEventStruct, p4: number, p5: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p6: any, p7: any) => number;
	startAllQueues: (p1: any) => number;
	stopAllQueues: (p1: any) => number;
	allocQueue: (p1: any) => IOHIDQueueInterface;
	allocOutputTransaction: (p1: any) => IOHIDOutputTransactionInterface;
	setReport: (p1: any, p2: IOHIDReportType, p3: number, p4: any, p5: number, p6: number, p7: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p8: any, p9: any) => number;
	getReport: (p1: any, p2: IOHIDReportType, p3: number, p4: any, p5: number, p6: number, p7: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p8: any, p9: any) => number;
	copyMatchingElements: (p1: any, p2: NSDictionary<any, any>, p3: NSArray<any>) => number;
	setInterruptReportHandlerCallback: (p1: any, p2: any, p3: number, p4: (p1: any, p2: number, p3: any, p4: any, p5: number) => void, p5: any, p6: any) => number;
}
declare var IOHIDDeviceInterface122: IOHIDDeviceInterface122;

declare function IOHIDDeviceOpen(device: any, options: number): number;

interface IOHIDDeviceQueueInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	getAsyncEventSource: (p1: any, p2: any) => number;
	setDepth: (p1: any, p2: number, p3: number) => number;
	getDepth: (p1: any, p2: number) => number;
	addElement: (p1: any, p2: any, p3: number) => number;
	removeElement: (p1: any, p2: any, p3: number) => number;
	containsElement: (p1: any, p2: any, p3: string, p4: number) => number;
	start: (p1: any, p2: number) => number;
	stop: (p1: any, p2: number) => number;
	setValueAvailableCallback: (p1: any, p2: (p1: any, p2: number, p3: any) => void, p3: any) => number;
	copyNextValue: (p1: any, p2: any, p3: number, p4: number) => number;
}
declare var IOHIDDeviceQueueInterface: IOHIDDeviceQueueInterface;

declare function IOHIDDeviceRegisterInputReportCallback(device: any, report: string | any, reportLength: number, callback: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number) => void, context: any): void;

declare function IOHIDDeviceRegisterInputReportWithTimeStampCallback(device: any, report: string | any, reportLength: number, callback: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number, p8: number) => void, context: any): void;

declare function IOHIDDeviceRegisterInputValueCallback(device: any, callback: (p1: any, p2: number, p3: any, p4: any) => void, context: any): void;

declare function IOHIDDeviceRegisterRemovalCallback(device: any, callback: (p1: any, p2: number, p3: any) => void, context: any): void;

declare function IOHIDDeviceScheduleWithRunLoop(device: any, runLoop: any, runLoopMode: string): void;

declare function IOHIDDeviceSetCancelHandler(device: any, handler: () => void): void;

declare function IOHIDDeviceSetDispatchQueue(device: any, queue: NSObject): void;

declare function IOHIDDeviceSetInputValueMatching(device: any, matching: NSDictionary<any, any>): void;

declare function IOHIDDeviceSetInputValueMatchingMultiple(device: any, multiple: NSArray<any> | any[]): void;

declare function IOHIDDeviceSetProperty(device: any, key: string, property: any): boolean;

declare function IOHIDDeviceSetReport(device: any, reportType: IOHIDReportType, reportID: number, report: string | any, reportLength: number): number;

declare function IOHIDDeviceSetReportWithCallback(device: any, reportType: IOHIDReportType, reportID: number, report: string | any, reportLength: number, timeout: number, callback: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number) => void, context: any): number;

declare function IOHIDDeviceSetValue(device: any, element: any, value: any): number;

declare function IOHIDDeviceSetValueMultiple(device: any, multiple: NSDictionary<any, any>): number;

declare function IOHIDDeviceSetValueMultipleWithCallback(device: any, multiple: NSDictionary<any, any>, timeout: number, callback: (p1: any, p2: number, p3: any, p4: NSDictionary<any, any>) => void, context: any): number;

declare function IOHIDDeviceSetValueWithCallback(device: any, element: any, value: any, timeout: number, callback: (p1: any, p2: number, p3: any, p4: any) => void, context: any): number;

interface IOHIDDeviceTimeStampedDeviceInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	open: (p1: any, p2: number) => number;
	close: (p1: any, p2: number) => number;
	getProperty: (p1: any, p2: string, p3: any) => number;
	setProperty: (p1: any, p2: string, p3: any) => number;
	getAsyncEventSource: (p1: any, p2: any) => number;
	copyMatchingElements: (p1: any, p2: NSDictionary<any, any>, p3: NSArray<any>, p4: number) => number;
	setValue: (p1: any, p2: any, p3: any, p4: number, p5: (p1: any, p2: number, p3: any, p4: any) => void, p6: any, p7: number) => number;
	getValue: (p1: any, p2: any, p3: any, p4: number, p5: (p1: any, p2: number, p3: any, p4: any) => void, p6: any, p7: number) => number;
	setInputReportCallback: (p1: any, p2: string, p3: number, p4: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number) => void, p5: any, p6: number) => number;
	setReport: (p1: any, p2: IOHIDReportType, p3: number, p4: string, p5: number, p6: number, p7: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number) => void, p8: any, p9: number) => number;
	getReport: (p1: any, p2: IOHIDReportType, p3: number, p4: string, p5: number, p6: number, p7: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number) => void, p8: any, p9: number) => number;
	setInputReportWithTimeStampCallback: (p1: any, p2: string, p3: number, p4: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number, p8: number) => void, p5: any, p6: number) => number;
}
declare var IOHIDDeviceTimeStampedDeviceInterface: IOHIDDeviceTimeStampedDeviceInterface;

interface IOHIDDeviceTransactionInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	getAsyncEventSource: (p1: any, p2: any) => number;
	setDirection: (p1: any, p2: IOHIDTransactionDirectionType, p3: number) => number;
	getDirection: (p1: any, p2: IOHIDTransactionDirectionType) => number;
	addElement: (p1: any, p2: any, p3: number) => number;
	removeElement: (p1: any, p2: any, p3: number) => number;
	containsElement: (p1: any, p2: any, p3: string, p4: number) => number;
	setValue: (p1: any, p2: any, p3: any, p4: number) => number;
	getValue: (p1: any, p2: any, p3: any, p4: number) => number;
	commit: (p1: any, p2: number, p3: (p1: any, p2: number, p3: any) => void, p4: any, p5: number) => number;
	clear: (p1: any, p2: number) => number;
}
declare var IOHIDDeviceTransactionInterface: IOHIDDeviceTransactionInterface;

declare function IOHIDDeviceUnscheduleFromRunLoop(device: any, runLoop: any, runLoopMode: string): void;

declare function IOHIDElementAttach(element: any, toAttach: any): void;

declare function IOHIDElementCopyAttached(element: any): NSArray<any>;

declare function IOHIDElementCreateWithDictionary(allocator: any, dictionary: NSDictionary<any, any>): any;

declare function IOHIDElementDetach(element: any, toDetach: any): void;

declare function IOHIDElementGetChildren(element: any): NSArray<any>;

declare function IOHIDElementGetCollectionType(element: any): IOHIDElementCollectionType;

declare function IOHIDElementGetCookie(element: any): number;

declare function IOHIDElementGetDevice(element: any): any;

declare function IOHIDElementGetLogicalMax(element: any): number;

declare function IOHIDElementGetLogicalMin(element: any): number;

declare function IOHIDElementGetName(element: any): string;

declare function IOHIDElementGetParent(element: any): any;

declare function IOHIDElementGetPhysicalMax(element: any): number;

declare function IOHIDElementGetPhysicalMin(element: any): number;

declare function IOHIDElementGetProperty(element: any, key: string): any;

declare function IOHIDElementGetReportCount(element: any): number;

declare function IOHIDElementGetReportID(element: any): number;

declare function IOHIDElementGetReportSize(element: any): number;

declare function IOHIDElementGetType(element: any): IOHIDElementType;

declare function IOHIDElementGetTypeID(): number;

declare function IOHIDElementGetUnit(element: any): number;

declare function IOHIDElementGetUnitExponent(element: any): number;

declare function IOHIDElementGetUsage(element: any): number;

declare function IOHIDElementGetUsagePage(element: any): number;

declare function IOHIDElementHasNullState(element: any): boolean;

declare function IOHIDElementHasPreferredState(element: any): boolean;

declare function IOHIDElementIsArray(element: any): boolean;

declare function IOHIDElementIsNonLinear(element: any): boolean;

declare function IOHIDElementIsRelative(element: any): boolean;

declare function IOHIDElementIsVirtual(element: any): boolean;

declare function IOHIDElementIsWrapping(element: any): boolean;

declare function IOHIDElementSetProperty(element: any, key: string, property: any): boolean;

interface IOHIDEventStruct {
	type: IOHIDElementType;
	elementCookie: number;
	value: number;
	timestamp: UnsignedWide;
	longValueSize: number;
	longValue: any;
}
declare var IOHIDEventStruct: IOHIDEventStruct;

declare function IOHIDGetActivityState(handle: number, hidActivityIdle: boolean): number;

declare function IOHIDGetButtonEventNum(connect: number, button: NXMouseButton, eventNum: number): number;

declare function IOHIDGetModifierLockState(handle: number, selector: number, state: boolean): number;

declare function IOHIDGetMouseButtonMode(handle: number, mode: number): number;

declare function IOHIDGetStateForSelector(handle: number, selector: number, state: number): number;

declare function IOHIDManagerActivate(manager: any): void;

declare function IOHIDManagerCancel(manager: any): void;

declare function IOHIDManagerClose(manager: any, options: number): number;

declare function IOHIDManagerCopyDevices(manager: any): NSSet<any>;

declare function IOHIDManagerCreate(allocator: any, options: number): any;

declare function IOHIDManagerGetProperty(manager: any, key: string): any;

declare function IOHIDManagerGetTypeID(): number;

declare function IOHIDManagerOpen(manager: any, options: number): number;

enum IOHIDManagerOptions {

	kIOHIDManagerOptionNone = 0,

	kIOHIDManagerOptionUsePersistentProperties = 1,

	kIOHIDManagerOptionDoNotLoadProperties = 2,

	kIOHIDManagerOptionDoNotSaveProperties = 4,

	kIOHIDManagerOptionIndependentDevices = 8
}


declare function IOHIDManagerRegisterDeviceMatchingCallback(manager: any, callback: (p1: any, p2: number, p3: any, p4: any) => void, context: any): void;

declare function IOHIDManagerRegisterDeviceRemovalCallback(manager: any, callback: (p1: any, p2: number, p3: any, p4: any) => void, context: any): void;

declare function IOHIDManagerRegisterInputReportCallback(manager: any, callback: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number) => void, context: any): void;

declare function IOHIDManagerRegisterInputReportWithTimeStampCallback(manager: any, callback: (p1: any, p2: number, p3: any, p4: IOHIDReportType, p5: number, p6: string, p7: number, p8: number) => void, context: any): void;

declare function IOHIDManagerRegisterInputValueCallback(manager: any, callback: (p1: any, p2: number, p3: any, p4: any) => void, context: any): void;

declare function IOHIDManagerSaveToPropertyDomain(manager: any, applicationID: string, userName: string, hostName: string, options: number): void;

declare function IOHIDManagerScheduleWithRunLoop(manager: any, runLoop: any, runLoopMode: string): void;

declare function IOHIDManagerSetCancelHandler(manager: any, handler: () => void): void;

declare function IOHIDManagerSetDeviceMatching(manager: any, matching: NSDictionary<any, any>): void;

declare function IOHIDManagerSetDeviceMatchingMultiple(manager: any, multiple: NSArray<any> | any[]): void;

declare function IOHIDManagerSetDispatchQueue(manager: any, queue: NSObject): void;

declare function IOHIDManagerSetInputValueMatching(manager: any, matching: NSDictionary<any, any>): void;

declare function IOHIDManagerSetInputValueMatchingMultiple(manager: any, multiple: NSArray<any> | any[]): void;

declare function IOHIDManagerSetProperty(manager: any, key: string, value: any): boolean;

declare function IOHIDManagerUnscheduleFromRunLoop(manager: any, runLoop: any, runLoopMode: string): void;

interface IOHIDOutputTransactionInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	createAsyncEventSource: (p1: any, p2: any) => number;
	getAsyncEventSource: (p1: any) => any;
	createAsyncPort: (p1: any, p2: number) => number;
	getAsyncPort: (p1: any) => number;
	create: (p1: any) => number;
	dispose: (p1: any) => number;
	addElement: (p1: any, p2: number) => number;
	removeElement: (p1: any, p2: number) => number;
	hasElement: (p1: any, p2: number) => boolean;
	setElementDefault: (p1: any, p2: number, p3: IOHIDEventStruct) => number;
	getElementDefault: (p1: any, p2: number, p3: IOHIDEventStruct) => number;
	setElementValue: (p1: any, p2: number, p3: IOHIDEventStruct) => number;
	getElementValue: (p1: any, p2: number, p3: IOHIDEventStruct) => number;
	commit: (p1: any, p2: number, p3: (p1: any, p2: number, p3: any, p4: any) => void, p4: any, p5: any) => number;
	clear: (p1: any) => number;
}
declare var IOHIDOutputTransactionInterface: IOHIDOutputTransactionInterface;

declare function IOHIDQueueActivate(queue: any): void;

declare function IOHIDQueueAddElement(queue: any, element: any): void;

declare function IOHIDQueueCancel(queue: any): void;

declare function IOHIDQueueContainsElement(queue: any, element: any): boolean;

declare function IOHIDQueueCopyNextValue(queue: any): any;

declare function IOHIDQueueCopyNextValueWithTimeout(queue: any, timeout: number): any;

declare function IOHIDQueueCreate(allocator: any, device: any, depth: number, options: number): any;

declare function IOHIDQueueGetDepth(queue: any): number;

declare function IOHIDQueueGetDevice(queue: any): any;

declare function IOHIDQueueGetTypeID(): number;

interface IOHIDQueueInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	createAsyncEventSource: (p1: any, p2: any) => number;
	getAsyncEventSource: (p1: any) => any;
	createAsyncPort: (p1: any, p2: number) => number;
	getAsyncPort: (p1: any) => number;
	create: (p1: any, p2: number, p3: number) => number;
	dispose: (p1: any) => number;
	addElement: (p1: any, p2: number, p3: number) => number;
	removeElement: (p1: any, p2: number) => number;
	hasElement: (p1: any, p2: number) => boolean;
	start: (p1: any) => number;
	stop: (p1: any) => number;
	getNextEvent: (p1: any, p2: IOHIDEventStruct, p3: UnsignedWide, p4: number) => number;
	setEventCallout: (p1: any, p2: (p1: any, p2: number, p3: any, p4: any) => void, p3: any, p4: any) => number;
	getEventCallout: (p1: any, p2: (p1: any, p2: number, p3: any, p4: any) => void, p3: any, p4: any) => number;
}
declare var IOHIDQueueInterface: IOHIDQueueInterface;

declare function IOHIDQueueRegisterValueAvailableCallback(queue: any, callback: (p1: any, p2: number, p3: any) => void, context: any): void;

declare function IOHIDQueueRemoveElement(queue: any, element: any): void;

declare function IOHIDQueueScheduleWithRunLoop(queue: any, runLoop: any, runLoopMode: string): void;

declare function IOHIDQueueSetCancelHandler(queue: any, handler: () => void): void;

declare function IOHIDQueueSetDepth(queue: any, depth: number): void;

declare function IOHIDQueueSetDispatchQueue(queue: any, dispatchQueue: NSObject): void;

declare function IOHIDQueueStart(queue: any): void;

declare function IOHIDQueueStop(queue: any): void;

declare function IOHIDQueueUnscheduleFromRunLoop(queue: any, runLoop: any, runLoopMode: string): void;

declare function IOHIDRegisterVirtualDisplay(handle: number, display_token: number): number;

declare function IOHIDRequestAccess(requestType: IOHIDRequestType): boolean;

enum IOHIDRequestType {

	kIOHIDRequestTypePostEvent = 0,

	kIOHIDRequestTypeListenEvent = 1
}


declare function IOHIDSetCFTypeParameter(handle: number, key: string, parameter: any): number;

declare function IOHIDSetCursorEnable(connect: number, enable: number): number;

declare function IOHIDSetEventsEnable(connect: number, enable: number): number;

declare function IOHIDSetModifierLockState(handle: number, selector: number, state: boolean): number;

declare function IOHIDSetMouseLocation(connect: number, x: number, y: number): number;

declare function IOHIDSetStateForSelector(handle: number, selector: number, state: number): number;

declare function IOHIDSetVirtualDisplayBounds(handle: number, display_token: number, bounds: IOGBounds): number;

declare function IOHIDTransactionAddElement(transaction: any, element: any): void;

declare function IOHIDTransactionClear(transaction: any): void;

declare function IOHIDTransactionCommit(transaction: any): number;

declare function IOHIDTransactionCommitWithCallback(transaction: any, timeout: number, callback: (p1: any, p2: number, p3: any) => void, context: any): number;

declare function IOHIDTransactionContainsElement(transaction: any, element: any): boolean;

declare function IOHIDTransactionCreate(allocator: any, device: any, direction: IOHIDTransactionDirectionType, options: number): any;

enum IOHIDTransactionDirectionType {

	kIOHIDTransactionDirectionTypeInput = 0,

	kIOHIDTransactionDirectionTypeOutput = 1
}


declare function IOHIDTransactionGetDevice(transaction: any): any;

declare function IOHIDTransactionGetDirection(transaction: any): IOHIDTransactionDirectionType;

declare function IOHIDTransactionGetTypeID(): number;

declare function IOHIDTransactionGetValue(transaction: any, element: any, options: number): any;

enum IOHIDTransactionOptions {

	kIOHIDTransactionOptionsNone = 0,

	kIOHIDTransactionOptionsWeakDevice = 1
}


declare function IOHIDTransactionRemoveElement(transaction: any, element: any): void;

declare function IOHIDTransactionScheduleWithRunLoop(transaction: any, runLoop: any, runLoopMode: string): void;

declare function IOHIDTransactionSetDirection(transaction: any, direction: IOHIDTransactionDirectionType): void;

declare function IOHIDTransactionSetValue(transaction: any, element: any, value: any, options: number): void;

declare function IOHIDTransactionUnscheduleFromRunLoop(transaction: any, runLoop: any, runLoopMode: string): void;

declare function IOHIDUnregisterVirtualDisplay(handle: number, display_token: number): number;

declare function IOHIDValueCreateWithBytes(allocator: any, element: any, timeStamp: number, bytes: string | any, length: number): any;

declare function IOHIDValueCreateWithBytesNoCopy(allocator: any, element: any, timeStamp: number, bytes: string | any, length: number): any;

declare function IOHIDValueCreateWithIntegerValue(allocator: any, element: any, timeStamp: number, value: number): any;

declare function IOHIDValueGetBytePtr(value: any): string;

declare function IOHIDValueGetElement(value: any): any;

declare function IOHIDValueGetIntegerValue(value: any): number;

declare function IOHIDValueGetLength(value: any): number;

declare function IOHIDValueGetScaledValue(value: any, type: number): number;

declare function IOHIDValueGetTimeStamp(value: any): number;

declare function IOHIDValueGetTypeID(): number;

interface IOHardwareCursorDescriptor {
	majorVersion: number;
	minorVersion: number;
	height: number;
	width: number;
	bitDepth: number;
	maskBitDepth: number;
	numColors: number;
	colorEncodings: number;
	flags: number;
	supportedSpecialEncodings: number;
	specialEncodings: number;
}
declare var IOHardwareCursorDescriptor: IOHardwareCursorDescriptor;

interface IOHardwareCursorInfo {
	majorVersion: number;
	minorVersion: number;
	cursorHeight: number;
	cursorWidth: number;
	colorMap: IOColorEntry;
	hardwareCursorData: string;
	cursorHotSpotX: number;
	cursorHotSpotY: number;
	reserved: number;
}
declare var IOHardwareCursorInfo: IOHardwareCursorInfo;

interface IOI2CBusTiming {
	bitTimeout: UnsignedWide;
	byteTimeout: UnsignedWide;
	acknowledgeTimeout: UnsignedWide;
	startTimeout: UnsignedWide;
	holdTime: UnsignedWide;
	riseFallTime: UnsignedWide;
	__reservedA: number;
}
declare var IOI2CBusTiming: IOI2CBusTiming;

declare function IOI2CCopyInterfaceForID(identifier: any, interface: number): number;

declare function IOI2CInterfaceClose(connect: any, options: number): number;

declare function IOI2CInterfaceOpen(interface: number, options: number, connect: any): number;

interface IOI2CRequest {
	sendTransactionType: number;
	replyTransactionType: number;
	sendAddress: number;
	replyAddress: number;
	sendSubAddress: number;
	replySubAddress: number;
	__reservedA: number;
	minReplyDelay: number;
	result: number;
	commFlags: number;
	__padA: number;
	sendBytes: number;
	__reservedB: number;
	__padB: number;
	replyBytes: number;
	completion: (p1: IOI2CRequest) => void;
	sendBuffer: number;
	replyBuffer: number;
	__reservedC: number;
}
declare var IOI2CRequest: IOI2CRequest;

declare function IOI2CSendRequest(connect: any, options: number, request: IOI2CRequest): number;

declare function IOIteratorIsValid(iterator: number): number;

declare function IOIteratorNext(iterator: number): number;

declare function IOIteratorReset(iterator: number): void;

declare function IOKitGetBusyState(masterPort: number, busyState: number): number;

declare function IOKitWaitQuiet(masterPort: number, waitTime: mach_timespec): number;

declare function IOMasterPort(bootstrapPort: number, masterPort: number): number;

interface IONamedValue {
	value: number;
	name: string;
}
declare var IONamedValue: IONamedValue;

declare function IONetworkClose(con: number): number;

declare function IONetworkGetDataCapacity(conObject: number, dataHandle: number, capacityP: number): number;

declare function IONetworkGetDataHandle(conObject: number, dataName: string | any, dataHandleP: number): number;

declare function IONetworkGetPacketFiltersMask(connect: number, filterGroup: number, filtersMask: number, options: number): number;

declare function IONetworkOpen(obj: number, con: number): number;

declare function IONetworkReadData(conObj: number, dataHandle: number, destBuf: string | any, inOutSizeP: number): number;

declare function IONetworkResetData(conObject: number, dataHandle: number): number;

declare function IONetworkSetPacketFiltersMask(connect: number, filterGroup: number, filtersMask: number, options: number): number;

interface IONetworkStats {
	inputPackets: number;
	inputErrors: number;
	outputPackets: number;
	outputErrors: number;
	collisions: number;
}
declare var IONetworkStats: IONetworkStats;

declare function IONetworkWriteData(conObj: number, dataHandle: number, srcBuf: string | any, inSize: number): number;

declare function IONotificationPortCreate(masterPort: number): any;

declare function IONotificationPortDestroy(notify: any): void;

declare function IONotificationPortGetMachPort(notify: any): number;

declare function IONotificationPortGetRunLoopSource(notify: any): any;

declare function IONotificationPortSetDispatchQueue(notify: any, queue: NSObject): void;

declare function IONotificationPortSetImportanceReceiver(notify: any): number;

declare function IOObjectConformsTo(object_: number, className: number): number;

declare function IOObjectCopyBundleIdentifierForClass(classname: string): string;

declare function IOObjectCopyClass(object_: number): string;

declare function IOObjectCopySuperclassForClass(classname: string): string;

declare function IOObjectGetClass(object_: number, className: number): number;

declare function IOObjectGetKernelRetainCount(object_: number): number;

declare function IOObjectGetRetainCount(object_: number): number;

declare function IOObjectGetUserRetainCount(object_: number): number;

declare function IOObjectIsEqualTo(object_: number, anObject: number): number;

declare function IOObjectRelease(object_: number): number;

declare function IOObjectRetain(object_: number): number;

declare function IOOpenFirmwarePathMatching(masterPort: number, options: number, path: string | any): NSDictionary<any, any>;

interface IOOutputQueueStats {
	capacity: number;
	size: number;
	peakSize: number;
	dropCount: number;
	outputCount: number;
	retryCount: number;
	stallCount: number;
	reserved: number;
}
declare var IOOutputQueueStats: IOOutputQueueStats;

declare const IOPMAckImplied: number;

declare function IOPMAssertionCopyProperties(theAssertion: number): NSDictionary<any, any>;

declare function IOPMAssertionCreateWithDescription(AssertionType: string, Name: string, Details: string, HumanReadableReason: string, LocalizationBundlePath: string, Timeout: number, TimeoutAction: string, AssertionID: number): number;

declare function IOPMAssertionCreateWithName(AssertionType: string, AssertionLevel: number, AssertionName: string, AssertionID: number): number;

declare function IOPMAssertionCreateWithProperties(AssertionProperties: NSDictionary<any, any>, AssertionID: number): number;

declare function IOPMAssertionDeclareUserActivity(AssertionName: string, userType: IOPMUserActiveType, AssertionID: number): number;

declare function IOPMAssertionRelease(AssertionID: number): number;

declare function IOPMAssertionRetain(theAssertion: number): void;

declare function IOPMAssertionSetProperty(theAssertion: number, theProperty: string, theValue: any): number;

declare const IOPMAuxPowerOn: number;

declare const IOPMBadSpecification: number;

interface IOPMCalendarStruct {
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
	second: number;
	selector: number;
}
declare var IOPMCalendarStruct: IOPMCalendarStruct;

declare function IOPMCancelScheduledPowerEvent(time_to_wake: Date, my_id: string, type: string): number;

declare const IOPMCannotRaisePower: number;

declare const IOPMClockNormal: number;

declare const IOPMClockRunning: number;

declare const IOPMConfigRetained: number;

declare const IOPMContextRetained: number;

declare function IOPMCopyAssertionsByProcess(AssertionsByPID: NSDictionary<any, any>): number;

declare function IOPMCopyAssertionsStatus(AssertionsStatus: NSDictionary<any, any>): number;

declare function IOPMCopyBatteryInfo(masterPort: number, info: NSArray<any>): number;

declare function IOPMCopyCPUPowerStatus(cpuPowerStatus: NSDictionary<any, any>): number;

declare function IOPMCopyScheduledPowerEvents(): NSArray<any>;

declare function IOPMDeclareNetworkClientActivity(AssertionName: string, AssertionID: number): number;

declare const IOPMDeviceUsable: number;

declare function IOPMFindPowerManagement(master_device_port: number): number;

declare function IOPMGetAggressiveness(fb: number, type: number, aggressiveness: number): number;

declare function IOPMGetThermalWarningLevel(thermalLevel: number): number;

declare const IOPMHighestState: number;

declare const IOPMLowestState: number;

declare const IOPMMaxPerformance: number;

declare const IOPMMaxPowerStates: number;

declare const IOPMNextHigherState: number;

declare const IOPMNextLowerState: number;

declare const IOPMNoErr: number;

declare const IOPMNoSuchState: number;

declare const IOPMNotAttainable: number;

declare const IOPMNotPowerManaged: number;

declare const IOPMNotYetInitialized: number;

declare const IOPMParameterError: number;

declare const IOPMPowerOn: number;

declare function IOPMSchedulePowerEvent(time_to_wake: Date, my_id: string, type: string): number;

declare function IOPMSetAggressiveness(fb: number, type: number, aggressiveness: number): number;

declare function IOPMSleepEnabled(): number;

declare function IOPMSleepSystem(fb: number): number;

declare const IOPMSoftSleep: number;

interface IOPMSystemCapabilityChangeParameters {
	notifyRef: number;
	maxWaitForReply: number;
	changeFlags: number;
	__reserved1: number;
	fromCapabilities: number;
	toCapabilities: number;
	__reserved2: number;
}
declare var IOPMSystemCapabilityChangeParameters: IOPMSystemCapabilityChangeParameters;

enum IOPMUserActiveType {

	kIOPMUserActiveLocal = 0,

	kIOPMUserActiveRemote = 1
}


declare const IOPMWillAckLater: number;

declare function IOPSCopyExternalPowerAdapterDetails(): NSDictionary<any, any>;

declare function IOPSCopyPowerSourcesInfo(): any;

declare function IOPSCopyPowerSourcesList(blob: any): NSArray<any>;

declare function IOPSCreateLimitedPowerNotification(callback: (p1: any) => void, context: any): any;

declare function IOPSGetBatteryWarningLevel(): IOPSLowBatteryWarningLevel;

declare function IOPSGetPowerSourceDescription(blob: any, ps: any): NSDictionary<any, any>;

declare function IOPSGetProvidingPowerSourceType(snapshot: any): string;

declare function IOPSGetTimeRemainingEstimate(): number;

enum IOPSLowBatteryWarningLevel {

	kIOPSLowBatteryWarningNone = 1,

	kIOPSLowBatteryWarningEarly = 2,

	kIOPSLowBatteryWarningFinal = 3
}


declare function IOPSNotificationCreateRunLoopSource(callback: (p1: any) => void, context: any): any;

interface IOPhysicalRange {
	address: number;
	length: number;
}
declare var IOPhysicalRange: IOPhysicalRange;

interface IOPixelInformation {
	bytesPerRow: number;
	bytesPerPlane: number;
	bitsPerPixel: number;
	pixelType: number;
	componentCount: number;
	bitsPerComponent: number;
	componentMasks: number;
	pixelFormat: number;
	flags: number;
	activeWidth: number;
	activeHeight: number;
	reserved: number;
}
declare var IOPixelInformation: IOPixelInformation;

interface IOPowerStateChangeNotification {
	powerRef: any;
	returnValue: number;
	stateNumber: number;
	stateFlags: number;
}
declare var IOPowerStateChangeNotification: IOPowerStateChangeNotification;

declare function IORegisterForSystemPower(refcon: any, thePortRef: any, callback: (p1: any, p2: number, p3: number, p4: any) => void, notifier: number): number;

declare function IORegistryCreateIterator(masterPort: number, plane: number, options: number, iterator: number): number;

declare function IORegistryEntryCopyFromPath(masterPort: number, path: string): number;

declare function IORegistryEntryCopyPath(entry: number, plane: number): string;

declare function IORegistryEntryCreateCFProperties(entry: number, properties: NSDictionary<any, any>, allocator: any, options: number): number;

declare function IORegistryEntryCreateCFProperty(entry: number, key: string, allocator: any, options: number): any;

declare function IORegistryEntryCreateIterator(entry: number, plane: number, options: number, iterator: number): number;

declare function IORegistryEntryFromPath(masterPort: number, path: number): number;

declare function IORegistryEntryGetChildEntry(entry: number, plane: number, child: number): number;

declare function IORegistryEntryGetChildIterator(entry: number, plane: number, iterator: number): number;

declare function IORegistryEntryGetLocationInPlane(entry: number, plane: number, location: number): number;

declare function IORegistryEntryGetName(entry: number, name: number): number;

declare function IORegistryEntryGetNameInPlane(entry: number, plane: number, name: number): number;

declare function IORegistryEntryGetParentEntry(entry: number, plane: number, parent: number): number;

declare function IORegistryEntryGetParentIterator(entry: number, plane: number, iterator: number): number;

declare function IORegistryEntryGetPath(entry: number, plane: number, path: number): number;

declare function IORegistryEntryGetProperty(entry: number, propertyName: number, buffer: number, size: number): number;

declare function IORegistryEntryGetRegistryEntryID(entry: number, entryID: number): number;

declare function IORegistryEntryIDMatching(entryID: number): NSDictionary<any, any>;

declare function IORegistryEntryInPlane(entry: number, plane: number): number;

declare function IORegistryEntrySearchCFProperty(entry: number, plane: number, key: string, allocator: any, options: number): any;

declare function IORegistryEntrySetCFProperties(entry: number, properties: any): number;

declare function IORegistryEntrySetCFProperty(entry: number, propertyName: string, property: any): number;

declare function IORegistryGetRootEntry(masterPort: number): number;

declare function IORegistryIteratorEnterEntry(iterator: number): number;

declare function IORegistryIteratorExitEntry(iterator: number): number;

declare function IOServiceAddInterestNotification(notifyPort: any, service: number, interestType: number, callback: (p1: any, p2: number, p3: number, p4: any) => void, refCon: any, notification: number): number;

declare function IOServiceAddMatchingNotification(notifyPort: any, notificationType: number, matching: NSDictionary<any, any>, callback: (p1: any, p2: number) => void, refCon: any, notification: number): number;

declare function IOServiceAddNotification(masterPort: number, notificationType: number, matching: NSDictionary<any, any>, wakePort: number, reference: number, notification: number): number;

declare function IOServiceAuthorize(service: number, options: number): number;

declare function IOServiceClose(connect: number): number;

declare function IOServiceGetBusyState(service: number, busyState: number): number;

declare function IOServiceGetMatchingService(masterPort: number, matching: NSDictionary<any, any>): number;

declare function IOServiceGetMatchingServices(masterPort: number, matching: NSDictionary<any, any>, existing: number): number;

interface IOServiceInterestContent {
	messageType: number;
	messageArgument: any;
}
declare var IOServiceInterestContent: IOServiceInterestContent;

interface IOServiceInterestContent64 {
	messageType: number;
	messageArgument: number;
}
declare var IOServiceInterestContent64: IOServiceInterestContent64;

declare function IOServiceMatchPropertyTable(service: number, matching: NSDictionary<any, any>, matches: number): number;

declare function IOServiceMatching(name: string | any): NSDictionary<any, any>;

declare function IOServiceNameMatching(name: string | any): NSDictionary<any, any>;

declare function IOServiceOFPathToBSDName(masterPort: number, openFirmwarePath: number, bsdName: number): number;

declare function IOServiceOpen(service: number, owningTask: number, type: number, connect: number): number;

declare function IOServiceOpenAsFileDescriptor(service: number, oflag: number): number;

declare function IOServiceRequestProbe(service: number, options: number): number;

declare function IOServiceWaitQuiet(service: number, waitTime: mach_timespec): number;

interface IOStreamBufferQueue {
	entryCount: number;
	headIndex: number;
	tailIndex: number;
	reserved: number;
	queue: IOStreamBufferQueueEntry;
}
declare var IOStreamBufferQueue: IOStreamBufferQueue;

interface IOStreamBufferQueueEntry {
	bufferID: number;
	dataOffset: number;
	dataLength: number;
	controlOffset: number;
	controlLength: number;
	reserved: number;
}
declare var IOStreamBufferQueueEntry: IOStreamBufferQueueEntry;

interface IOStreamInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	Version: number;
	Revision: number;
	Open: (p1: IOStreamInterface, p2: number) => number;
	Close: (p1: IOStreamInterface) => number;
	GetBufferCount: (p1: IOStreamInterface) => number;
	GetBufferInfo: (p1: IOStreamInterface, p2: number, p3: any, p4: number, p5: any, p6: number) => number;
	GetOutputPort: (p1: IOStreamInterface) => NSMachPort;
	GetInputPort: (p1: IOStreamInterface) => NSMachPort;
	GetOutputQueue: (p1: IOStreamInterface) => IOStreamBufferQueue;
	GetInputQueue: (p1: IOStreamInterface) => IOStreamBufferQueue;
	SetOutputCallback: (p1: IOStreamInterface, p2: (p1: IOStreamInterface, p2: any) => void, p3: any) => number;
	GetRunLoopSource: (p1: IOStreamInterface) => any;
	AddToRunLoop: (p1: IOStreamInterface, p2: any) => number;
	RemoveFromRunLoop: (p1: IOStreamInterface, p2: any) => number;
	DequeueOutputEntry: (p1: IOStreamInterface, p2: IOStreamBufferQueueEntry) => number;
	EnqueueInputEntry: (p1: IOStreamInterface, p2: IOStreamBufferQueueEntry) => number;
	EnqueueInputBuffer: (p1: IOStreamInterface, p2: number, p3: number, p4: number, p5: number, p6: number) => number;
	SendInputNotification: (p1: IOStreamInterface, p2: number) => number;
	SendInputSyncNotification: (p1: IOStreamInterface, p2: number) => number;
	GetDataBuffer: (p1: IOStreamInterface, p2: number) => any;
	GetDataBufferLength: (p1: IOStreamInterface, p2: number) => number;
	GetControlBuffer: (p1: IOStreamInterface, p2: number) => any;
	GetControlBufferLength: (p1: IOStreamInterface, p2: number) => number;
	StartStream: (p1: IOStreamInterface) => number;
	StopStream: (p1: IOStreamInterface) => number;
	SuspendStream: (p1: IOStreamInterface) => number;
	GetMode: (p1: IOStreamInterface) => IOStreamMode;
	SetMode: (p1: IOStreamInterface, p2: IOStreamMode) => number;
}
declare var IOStreamInterface: IOStreamInterface;

enum IOStreamMode {

	kIOStreamModeInput = 0,

	kIOStreamModeOutput = 1,

	kIOStreamModeInputOutput = 2
}


interface IOUPSPlugInInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	getProperties: (p1: any, p2: NSDictionary<any, any>) => number;
	getCapabilities: (p1: any, p2: NSSet<any>) => number;
	getEvent: (p1: any, p2: NSDictionary<any, any>) => number;
	setEventCallback: (p1: any, p2: (p1: any, p2: number, p3: any, p4: any, p5: NSDictionary<any, any>) => void, p3: any, p4: any) => number;
	sendCommand: (p1: any, p2: NSDictionary<any, any>) => number;
}
declare var IOUPSPlugInInterface: IOUPSPlugInInterface;

interface IOUPSPlugInInterface_v140 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	getProperties: (p1: any, p2: NSDictionary<any, any>) => number;
	getCapabilities: (p1: any, p2: NSSet<any>) => number;
	getEvent: (p1: any, p2: NSDictionary<any, any>) => number;
	setEventCallback: (p1: any, p2: (p1: any, p2: number, p3: any, p4: any, p5: NSDictionary<any, any>) => void, p3: any, p4: any) => number;
	sendCommand: (p1: any, p2: NSDictionary<any, any>) => number;
	createAsyncEventSource: (p1: any, p2: any) => number;
}
declare var IOUPSPlugInInterface_v140: IOUPSPlugInInterface_v140;

declare function IOURLCreateDataAndPropertiesFromResource(alloc: any, url: NSURL, resourceData: NSData, properties: NSDictionary<any, any>, desiredProperties: NSArray<any> | any[], errorCode: number): boolean;

declare function IOURLCreatePropertyFromResource(alloc: any, url: NSURL, property: string, errorCode: number): any;

enum IOURLError {

	kIOURLUnknownError = -10,

	kIOURLUnknownSchemeError = -11,

	kIOURLResourceNotFoundError = -12,

	kIOURLResourceAccessViolationError = -13,

	kIOURLRemoteHostUnavailableError = -14,

	kIOURLImproperArgumentsError = -15,

	kIOURLUnknownPropertyKeyError = -16,

	kIOURLPropertyKeyUnavailableError = -17,

	kIOURLTimeoutError = -18
}


declare function IOURLWriteDataAndPropertiesToResource(url: NSURL, dataToWrite: NSData, propertiesToWrite: NSDictionary<any, any>, errorCode: number): boolean;

interface IOUSBBulkPipeReq {
	pipeRef: number;
	buf: any;
	size: number;
	noDataTimeout: number;
	completionTimeout: number;
}
declare var IOUSBBulkPipeReq: IOUSBBulkPipeReq;

interface IOUSBCompletion {
	target: any;
	action: (p1: any, p2: any, p3: number, p4: number) => void;
	parameter: any;
}
declare var IOUSBCompletion: IOUSBCompletion;

interface IOUSBCompletionWithTimeStamp {
	target: any;
	action: (p1: any, p2: any, p3: number, p4: number, p5: UnsignedWide) => void;
	parameter: any;
}
declare var IOUSBCompletionWithTimeStamp: IOUSBCompletionWithTimeStamp;

interface IOUSBDevReqOOL {
	bmRequestType: number;
	bRequest: number;
	wValue: number;
	wIndex: number;
	wLength: number;
	pData: any;
	wLenDone: number;
	pipeRef: number;
}
declare var IOUSBDevReqOOL: IOUSBDevReqOOL;

interface IOUSBDevReqOOLTO {
	bmRequestType: number;
	bRequest: number;
	wValue: number;
	wIndex: number;
	wLength: number;
	pData: any;
	wLenDone: number;
	pipeRef: number;
	noDataTimeout: number;
	completionTimeout: number;
}
declare var IOUSBDevReqOOLTO: IOUSBDevReqOOLTO;

interface IOUSBDevRequest {
	bmRequestType: number;
	bRequest: number;
	wValue: number;
	wIndex: number;
	wLength: number;
	pData: any;
	wLenDone: number;
}
declare var IOUSBDevRequest: IOUSBDevRequest;

interface IOUSBDevRequestTO {
	bmRequestType: number;
	bRequest: number;
	wValue: number;
	wIndex: number;
	wLength: number;
	pData: any;
	wLenDone: number;
	noDataTimeout: number;
	completionTimeout: number;
}
declare var IOUSBDevRequestTO: IOUSBDevRequestTO;

interface IOUSBDeviceInterface100 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
}
declare var IOUSBDeviceInterface100: IOUSBDeviceInterface100;

interface IOUSBDeviceInterface182 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
	USBDeviceOpenSeize: (p1: any) => number;
	DeviceRequestTO: (p1: any, p2: IOUSBDevRequestTO) => number;
	DeviceRequestAsyncTO: (p1: any, p2: IOUSBDevRequestTO, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	USBDeviceSuspend: (p1: any, p2: boolean) => number;
	USBDeviceAbortPipeZero: (p1: any) => number;
	USBGetManufacturerStringIndex: (p1: any, p2: string) => number;
	USBGetProductStringIndex: (p1: any, p2: string) => number;
	USBGetSerialNumberStringIndex: (p1: any, p2: string) => number;
}
declare var IOUSBDeviceInterface182: IOUSBDeviceInterface182;

interface IOUSBDeviceInterface187 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
	USBDeviceOpenSeize: (p1: any) => number;
	DeviceRequestTO: (p1: any, p2: IOUSBDevRequestTO) => number;
	DeviceRequestAsyncTO: (p1: any, p2: IOUSBDevRequestTO, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	USBDeviceSuspend: (p1: any, p2: boolean) => number;
	USBDeviceAbortPipeZero: (p1: any) => number;
	USBGetManufacturerStringIndex: (p1: any, p2: string) => number;
	USBGetProductStringIndex: (p1: any, p2: string) => number;
	USBGetSerialNumberStringIndex: (p1: any, p2: string) => number;
	USBDeviceReEnumerate: (p1: any, p2: number) => number;
}
declare var IOUSBDeviceInterface187: IOUSBDeviceInterface187;

interface IOUSBDeviceInterface197 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
	USBDeviceOpenSeize: (p1: any) => number;
	DeviceRequestTO: (p1: any, p2: IOUSBDevRequestTO) => number;
	DeviceRequestAsyncTO: (p1: any, p2: IOUSBDevRequestTO, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	USBDeviceSuspend: (p1: any, p2: boolean) => number;
	USBDeviceAbortPipeZero: (p1: any) => number;
	USBGetManufacturerStringIndex: (p1: any, p2: string) => number;
	USBGetProductStringIndex: (p1: any, p2: string) => number;
	USBGetSerialNumberStringIndex: (p1: any, p2: string) => number;
	USBDeviceReEnumerate: (p1: any, p2: number) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
}
declare var IOUSBDeviceInterface197: IOUSBDeviceInterface197;

interface IOUSBDeviceInterface245 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
	USBDeviceOpenSeize: (p1: any) => number;
	DeviceRequestTO: (p1: any, p2: IOUSBDevRequestTO) => number;
	DeviceRequestAsyncTO: (p1: any, p2: IOUSBDevRequestTO, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	USBDeviceSuspend: (p1: any, p2: boolean) => number;
	USBDeviceAbortPipeZero: (p1: any) => number;
	USBGetManufacturerStringIndex: (p1: any, p2: string) => number;
	USBGetProductStringIndex: (p1: any, p2: string) => number;
	USBGetSerialNumberStringIndex: (p1: any, p2: string) => number;
	USBDeviceReEnumerate: (p1: any, p2: number) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
}
declare var IOUSBDeviceInterface245: IOUSBDeviceInterface245;

interface IOUSBDeviceInterface300 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
	USBDeviceOpenSeize: (p1: any) => number;
	DeviceRequestTO: (p1: any, p2: IOUSBDevRequestTO) => number;
	DeviceRequestAsyncTO: (p1: any, p2: IOUSBDevRequestTO, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	USBDeviceSuspend: (p1: any, p2: boolean) => number;
	USBDeviceAbortPipeZero: (p1: any) => number;
	USBGetManufacturerStringIndex: (p1: any, p2: string) => number;
	USBGetProductStringIndex: (p1: any, p2: string) => number;
	USBGetSerialNumberStringIndex: (p1: any, p2: string) => number;
	USBDeviceReEnumerate: (p1: any, p2: number) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
}
declare var IOUSBDeviceInterface300: IOUSBDeviceInterface300;

interface IOUSBDeviceInterface320 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
	USBDeviceOpenSeize: (p1: any) => number;
	DeviceRequestTO: (p1: any, p2: IOUSBDevRequestTO) => number;
	DeviceRequestAsyncTO: (p1: any, p2: IOUSBDevRequestTO, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	USBDeviceSuspend: (p1: any, p2: boolean) => number;
	USBDeviceAbortPipeZero: (p1: any) => number;
	USBGetManufacturerStringIndex: (p1: any, p2: string) => number;
	USBGetProductStringIndex: (p1: any, p2: string) => number;
	USBGetSerialNumberStringIndex: (p1: any, p2: string) => number;
	USBDeviceReEnumerate: (p1: any, p2: number) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetUSBDeviceInformation: (p1: any, p2: number) => number;
	RequestExtraPower: (p1: any, p2: number, p3: number, p4: number) => number;
	ReturnExtraPower: (p1: any, p2: number, p3: number) => number;
	GetExtraPowerAllocated: (p1: any, p2: number, p3: number) => number;
}
declare var IOUSBDeviceInterface320: IOUSBDeviceInterface320;

interface IOUSBDeviceInterface400 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
	USBDeviceOpenSeize: (p1: any) => number;
	DeviceRequestTO: (p1: any, p2: IOUSBDevRequestTO) => number;
	DeviceRequestAsyncTO: (p1: any, p2: IOUSBDevRequestTO, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	USBDeviceSuspend: (p1: any, p2: boolean) => number;
	USBDeviceAbortPipeZero: (p1: any) => number;
	USBGetManufacturerStringIndex: (p1: any, p2: string) => number;
	USBGetProductStringIndex: (p1: any, p2: string) => number;
	USBGetSerialNumberStringIndex: (p1: any, p2: string) => number;
	USBDeviceReEnumerate: (p1: any, p2: number) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetUSBDeviceInformation: (p1: any, p2: number) => number;
	RequestExtraPower: (p1: any, p2: number, p3: number, p4: number) => number;
	ReturnExtraPower: (p1: any, p2: number, p3: number) => number;
	GetExtraPowerAllocated: (p1: any, p2: number, p3: number) => number;
}
declare var IOUSBDeviceInterface400: IOUSBDeviceInterface400;

interface IOUSBDeviceInterface500 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
	USBDeviceOpenSeize: (p1: any) => number;
	DeviceRequestTO: (p1: any, p2: IOUSBDevRequestTO) => number;
	DeviceRequestAsyncTO: (p1: any, p2: IOUSBDevRequestTO, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	USBDeviceSuspend: (p1: any, p2: boolean) => number;
	USBDeviceAbortPipeZero: (p1: any) => number;
	USBGetManufacturerStringIndex: (p1: any, p2: string) => number;
	USBGetProductStringIndex: (p1: any, p2: string) => number;
	USBGetSerialNumberStringIndex: (p1: any, p2: string) => number;
	USBDeviceReEnumerate: (p1: any, p2: number) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetUSBDeviceInformation: (p1: any, p2: number) => number;
	RequestExtraPower: (p1: any, p2: number, p3: number, p4: number) => number;
	ReturnExtraPower: (p1: any, p2: number, p3: number) => number;
	GetExtraPowerAllocated: (p1: any, p2: number, p3: number) => number;
	GetBandwidthAvailableForDevice: (p1: any, p2: number) => number;
}
declare var IOUSBDeviceInterface500: IOUSBDeviceInterface500;

interface IOUSBDeviceInterface650 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
	USBDeviceOpenSeize: (p1: any) => number;
	DeviceRequestTO: (p1: any, p2: IOUSBDevRequestTO) => number;
	DeviceRequestAsyncTO: (p1: any, p2: IOUSBDevRequestTO, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	USBDeviceSuspend: (p1: any, p2: boolean) => number;
	USBDeviceAbortPipeZero: (p1: any) => number;
	USBGetManufacturerStringIndex: (p1: any, p2: string) => number;
	USBGetProductStringIndex: (p1: any, p2: string) => number;
	USBGetSerialNumberStringIndex: (p1: any, p2: string) => number;
	USBDeviceReEnumerate: (p1: any, p2: number) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetUSBDeviceInformation: (p1: any, p2: number) => number;
	RequestExtraPower: (p1: any, p2: number, p3: number, p4: number) => number;
	ReturnExtraPower: (p1: any, p2: number, p3: number) => number;
	GetExtraPowerAllocated: (p1: any, p2: number, p3: number) => number;
	GetBandwidthAvailableForDevice: (p1: any, p2: number) => number;
	SetConfigurationV2: (p1: any, p2: number, p3: boolean, p4: boolean) => number;
	RegisterForNotification: (p1: any, p2: number, p3: (p1: any, p2: number, p3: any, p4: any) => void, p4: any, p5: number) => number;
	UnregisterNotification: (p1: any, p2: number) => number;
	AcknowledgeNotification: (p1: any, p2: number) => number;
}
declare var IOUSBDeviceInterface650: IOUSBDeviceInterface650;

interface IOUSBDeviceInterface942 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateDeviceAsyncEventSource: (p1: any, p2: any) => number;
	GetDeviceAsyncEventSource: (p1: any) => any;
	CreateDeviceAsyncPort: (p1: any, p2: number) => number;
	GetDeviceAsyncPort: (p1: any) => number;
	USBDeviceOpen: (p1: any) => number;
	USBDeviceClose: (p1: any) => number;
	GetDeviceClass: (p1: any, p2: string) => number;
	GetDeviceSubClass: (p1: any, p2: string) => number;
	GetDeviceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetDeviceAddress: (p1: any, p2: number) => number;
	GetDeviceBusPowerAvailable: (p1: any, p2: number) => number;
	GetDeviceSpeed: (p1: any, p2: string) => number;
	GetNumberOfConfigurations: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetConfigurationDescriptorPtr: (p1: any, p2: number, p3: IOUSBConfigurationDescriptor) => number;
	GetConfiguration: (p1: any, p2: string) => number;
	SetConfiguration: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ResetDevice: (p1: any) => number;
	DeviceRequest: (p1: any, p2: IOUSBDevRequest) => number;
	DeviceRequestAsync: (p1: any, p2: IOUSBDevRequest, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	CreateInterfaceIterator: (p1: any, p2: IOUSBFindInterfaceRequest, p3: number) => number;
	USBDeviceOpenSeize: (p1: any) => number;
	DeviceRequestTO: (p1: any, p2: IOUSBDevRequestTO) => number;
	DeviceRequestAsyncTO: (p1: any, p2: IOUSBDevRequestTO, p3: (p1: any, p2: number, p3: any) => void, p4: any) => number;
	USBDeviceSuspend: (p1: any, p2: boolean) => number;
	USBDeviceAbortPipeZero: (p1: any) => number;
	USBGetManufacturerStringIndex: (p1: any, p2: string) => number;
	USBGetProductStringIndex: (p1: any, p2: string) => number;
	USBGetSerialNumberStringIndex: (p1: any, p2: string) => number;
	USBDeviceReEnumerate: (p1: any, p2: number) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetUSBDeviceInformation: (p1: any, p2: number) => number;
	RequestExtraPower: (p1: any, p2: number, p3: number, p4: number) => number;
	ReturnExtraPower: (p1: any, p2: number, p3: number) => number;
	GetExtraPowerAllocated: (p1: any, p2: number, p3: number) => number;
	GetBandwidthAvailableForDevice: (p1: any, p2: number) => number;
	SetConfigurationV2: (p1: any, p2: number, p3: boolean, p4: boolean) => number;
	RegisterForNotification: (p1: any, p2: number, p3: (p1: any, p2: number, p3: any, p4: any) => void, p4: any, p5: number) => number;
	UnregisterNotification: (p1: any, p2: number) => number;
	AcknowledgeNotification: (p1: any, p2: number) => number;
	GetDeviceAsyncNotificationPort: (p1: any) => any;
}
declare var IOUSBDeviceInterface942: IOUSBDeviceInterface942;

interface IOUSBEndpointProperties {
	bVersion: number;
	bAlternateSetting: number;
	bDirection: number;
	bEndpointNumber: number;
	bTransferType: number;
	bUsageType: number;
	bSyncType: number;
	bInterval: number;
	wMaxPacketSize: number;
	bMaxBurst: number;
	bMaxStreams: number;
	bMult: number;
	wBytesPerInterval: number;
}
declare var IOUSBEndpointProperties: IOUSBEndpointProperties;

interface IOUSBFindEndpointRequest {
	type: number;
	direction: number;
	maxPacketSize: number;
	interval: number;
}
declare var IOUSBFindEndpointRequest: IOUSBFindEndpointRequest;

interface IOUSBFindInterfaceRequest {
	bInterfaceClass: number;
	bInterfaceSubClass: number;
	bInterfaceProtocol: number;
	bAlternateSetting: number;
}
declare var IOUSBFindInterfaceRequest: IOUSBFindInterfaceRequest;

interface IOUSBGetFrameStruct {
	frame: number;
	timeStamp: UnsignedWide;
}
declare var IOUSBGetFrameStruct: IOUSBGetFrameStruct;

interface IOUSBInterfaceInterface100 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
}
declare var IOUSBInterfaceInterface100: IOUSBInterfaceInterface100;

interface IOUSBInterfaceInterface182 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
}
declare var IOUSBInterfaceInterface182: IOUSBInterfaceInterface182;

interface IOUSBInterfaceInterface183 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
}
declare var IOUSBInterfaceInterface183: IOUSBInterfaceInterface183;

interface IOUSBInterfaceInterface190 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
}
declare var IOUSBInterfaceInterface190: IOUSBInterfaceInterface190;

interface IOUSBInterfaceInterface192 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
}
declare var IOUSBInterfaceInterface192: IOUSBInterfaceInterface192;

interface IOUSBInterfaceInterface197 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
}
declare var IOUSBInterfaceInterface197: IOUSBInterfaceInterface197;

interface IOUSBInterfaceInterface220 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
}
declare var IOUSBInterfaceInterface220: IOUSBInterfaceInterface220;

interface IOUSBInterfaceInterface245 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
}
declare var IOUSBInterfaceInterface245: IOUSBInterfaceInterface245;

interface IOUSBInterfaceInterface300 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
}
declare var IOUSBInterfaceInterface300: IOUSBInterfaceInterface300;

interface IOUSBInterfaceInterface398 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
}
declare var IOUSBInterfaceInterface398: IOUSBInterfaceInterface398;

interface IOUSBInterfaceInterface400 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
}
declare var IOUSBInterfaceInterface400: IOUSBInterfaceInterface400;

interface IOUSBInterfaceInterface500 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetPipePropertiesV2: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string, p8: string, p9: string, p10: number) => number;
}
declare var IOUSBInterfaceInterface500: IOUSBInterfaceInterface500;

interface IOUSBInterfaceInterface550 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetPipePropertiesV2: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string, p8: string, p9: string, p10: number) => number;
	GetPipePropertiesV3: (p1: any, p2: number, p3: IOUSBEndpointProperties) => number;
	GetEndpointPropertiesV3: (p1: any, p2: IOUSBEndpointProperties) => number;
	SupportsStreams: (p1: any, p2: number, p3: number) => number;
	CreateStreams: (p1: any, p2: number, p3: number) => number;
	GetConfiguredStreams: (p1: any, p2: number, p3: number) => number;
	ReadStreamsPipeTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number) => number;
	WriteStreamsPipeTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number) => number;
	ReadStreamsPipeAsyncTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	WriteStreamsPipeAsyncTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	AbortStreamsPipe: (p1: any, p2: number, p3: number) => number;
}
declare var IOUSBInterfaceInterface550: IOUSBInterfaceInterface550;

interface IOUSBInterfaceInterface650 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetPipePropertiesV2: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string, p8: string, p9: string, p10: number) => number;
	GetPipePropertiesV3: (p1: any, p2: number, p3: IOUSBEndpointProperties) => number;
	GetEndpointPropertiesV3: (p1: any, p2: IOUSBEndpointProperties) => number;
	SupportsStreams: (p1: any, p2: number, p3: number) => number;
	CreateStreams: (p1: any, p2: number, p3: number) => number;
	GetConfiguredStreams: (p1: any, p2: number, p3: number) => number;
	ReadStreamsPipeTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number) => number;
	WriteStreamsPipeTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number) => number;
	ReadStreamsPipeAsyncTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	WriteStreamsPipeAsyncTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	AbortStreamsPipe: (p1: any, p2: number, p3: number) => number;
	RegisterForNotification: (p1: any, p2: number, p3: (p1: any, p2: number, p3: any, p4: any) => void, p4: any, p5: number) => number;
	UnregisterNotification: (p1: any, p2: number) => number;
	AcknowledgeNotification: (p1: any, p2: number) => number;
}
declare var IOUSBInterfaceInterface650: IOUSBInterfaceInterface650;

interface IOUSBInterfaceInterface700 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetPipePropertiesV2: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string, p8: string, p9: string, p10: number) => number;
	GetPipePropertiesV3: (p1: any, p2: number, p3: IOUSBEndpointProperties) => number;
	GetEndpointPropertiesV3: (p1: any, p2: IOUSBEndpointProperties) => number;
	SupportsStreams: (p1: any, p2: number, p3: number) => number;
	CreateStreams: (p1: any, p2: number, p3: number) => number;
	GetConfiguredStreams: (p1: any, p2: number, p3: number) => number;
	ReadStreamsPipeTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number) => number;
	WriteStreamsPipeTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number) => number;
	ReadStreamsPipeAsyncTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	WriteStreamsPipeAsyncTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	AbortStreamsPipe: (p1: any, p2: number, p3: number) => number;
	RegisterForNotification: (p1: any, p2: number, p3: (p1: any, p2: number, p3: any, p4: any) => void, p4: any, p5: number) => number;
	UnregisterNotification: (p1: any, p2: number) => number;
	AcknowledgeNotification: (p1: any, p2: number) => number;
	RegisterDriver: (p1: any) => number;
}
declare var IOUSBInterfaceInterface700: IOUSBInterfaceInterface700;

interface IOUSBInterfaceInterface800 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetPipePropertiesV2: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string, p8: string, p9: string, p10: number) => number;
	GetPipePropertiesV3: (p1: any, p2: number, p3: IOUSBEndpointProperties) => number;
	GetEndpointPropertiesV3: (p1: any, p2: IOUSBEndpointProperties) => number;
	SupportsStreams: (p1: any, p2: number, p3: number) => number;
	CreateStreams: (p1: any, p2: number, p3: number) => number;
	GetConfiguredStreams: (p1: any, p2: number, p3: number) => number;
	ReadStreamsPipeTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number) => number;
	WriteStreamsPipeTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number) => number;
	ReadStreamsPipeAsyncTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	WriteStreamsPipeAsyncTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	AbortStreamsPipe: (p1: any, p2: number, p3: number) => number;
	RegisterForNotification: (p1: any, p2: number, p3: (p1: any, p2: number, p3: any, p4: any) => void, p4: any, p5: number) => number;
	UnregisterNotification: (p1: any, p2: number) => number;
	AcknowledgeNotification: (p1: any, p2: number) => number;
	RegisterDriver: (p1: any) => number;
	SetDeviceIdlePolicy: (p1: any, p2: number) => number;
	SetPipeIdlePolicy: (p1: any, p2: number, p3: number) => number;
}
declare var IOUSBInterfaceInterface800: IOUSBInterfaceInterface800;

interface IOUSBInterfaceInterface942 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateInterfaceAsyncEventSource: (p1: any, p2: any) => number;
	GetInterfaceAsyncEventSource: (p1: any) => any;
	CreateInterfaceAsyncPort: (p1: any, p2: number) => number;
	GetInterfaceAsyncPort: (p1: any) => number;
	USBInterfaceOpen: (p1: any) => number;
	USBInterfaceClose: (p1: any) => number;
	GetInterfaceClass: (p1: any, p2: string) => number;
	GetInterfaceSubClass: (p1: any, p2: string) => number;
	GetInterfaceProtocol: (p1: any, p2: string) => number;
	GetDeviceVendor: (p1: any, p2: number) => number;
	GetDeviceProduct: (p1: any, p2: number) => number;
	GetDeviceReleaseNumber: (p1: any, p2: number) => number;
	GetConfigurationValue: (p1: any, p2: string) => number;
	GetInterfaceNumber: (p1: any, p2: string) => number;
	GetAlternateSetting: (p1: any, p2: string) => number;
	GetNumEndpoints: (p1: any, p2: string) => number;
	GetLocationID: (p1: any, p2: number) => number;
	GetDevice: (p1: any, p2: number) => number;
	SetAlternateInterface: (p1: any, p2: number) => number;
	GetBusFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	ControlRequest: (p1: any, p2: number, p3: IOUSBDevRequest) => number;
	ControlRequestAsync: (p1: any, p2: number, p3: IOUSBDevRequest, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	GetPipeProperties: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string) => number;
	GetPipeStatus: (p1: any, p2: number) => number;
	AbortPipe: (p1: any, p2: number) => number;
	ResetPipe: (p1: any, p2: number) => number;
	ClearPipeStall: (p1: any, p2: number) => number;
	ReadPipe: (p1: any, p2: number, p3: any, p4: number) => number;
	WritePipe: (p1: any, p2: number, p3: any, p4: number) => number;
	ReadPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	WritePipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: (p1: any, p2: number, p3: any) => void, p6: any) => number;
	ReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: IOUSBIsocFrame, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	ControlRequestTO: (p1: any, p2: number, p3: IOUSBDevRequestTO) => number;
	ControlRequestAsyncTO: (p1: any, p2: number, p3: IOUSBDevRequestTO, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	ReadPipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	WritePipeTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number) => number;
	ReadPipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	WritePipeAsyncTO: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: (p1: any, p2: number, p3: any) => void, p8: any) => number;
	USBInterfaceGetStringIndex: (p1: any, p2: string) => number;
	USBInterfaceOpenSeize: (p1: any) => number;
	ClearPipeStallBothEnds: (p1: any, p2: number) => number;
	SetPipePolicy: (p1: any, p2: number, p3: number, p4: number) => number;
	GetBandwidthAvailable: (p1: any, p2: number) => number;
	GetEndpointProperties: (p1: any, p2: number, p3: number, p4: number, p5: string, p6: number, p7: string) => number;
	LowLatencyReadIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyWriteIsochPipeAsync: (p1: any, p2: number, p3: any, p4: number, p5: number, p6: number, p7: IOUSBLowLatencyIsocFrame, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	LowLatencyCreateBuffer: (p1: any, p2: any, p3: number, p4: number) => number;
	LowLatencyDestroyBuffer: (p1: any, p2: any) => number;
	GetBusMicroFrameNumber: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetFrameListTime: (p1: any, p2: number) => number;
	GetIOUSBLibVersion: (p1: any, p2: NumVersion, p3: NumVersion) => number;
	FindNextAssociatedDescriptor: (p1: any, p2: any, p3: number) => IOUSBDescriptorHeader;
	FindNextAltInterface: (p1: any, p2: any, p3: IOUSBFindInterfaceRequest) => IOUSBDescriptorHeader;
	GetBusFrameNumberWithTime: (p1: any, p2: number, p3: UnsignedWide) => number;
	GetPipePropertiesV2: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: number, p7: string, p8: string, p9: string, p10: number) => number;
	GetPipePropertiesV3: (p1: any, p2: number, p3: IOUSBEndpointProperties) => number;
	GetEndpointPropertiesV3: (p1: any, p2: IOUSBEndpointProperties) => number;
	SupportsStreams: (p1: any, p2: number, p3: number) => number;
	CreateStreams: (p1: any, p2: number, p3: number) => number;
	GetConfiguredStreams: (p1: any, p2: number, p3: number) => number;
	ReadStreamsPipeTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number) => number;
	WriteStreamsPipeTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number) => number;
	ReadStreamsPipeAsyncTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	WriteStreamsPipeAsyncTO: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number, p7: number, p8: (p1: any, p2: number, p3: any) => void, p9: any) => number;
	AbortStreamsPipe: (p1: any, p2: number, p3: number) => number;
	RegisterForNotification: (p1: any, p2: number, p3: (p1: any, p2: number, p3: any, p4: any) => void, p4: any, p5: number) => number;
	UnregisterNotification: (p1: any, p2: number) => number;
	AcknowledgeNotification: (p1: any, p2: number) => number;
	RegisterDriver: (p1: any) => number;
	SetDeviceIdlePolicy: (p1: any, p2: number) => number;
	SetPipeIdlePolicy: (p1: any, p2: number, p3: number) => number;
	GetInterfaceAsyncNotificationPort: (p1: any) => any;
}
declare var IOUSBInterfaceInterface942: IOUSBInterfaceInterface942;

interface IOUSBIsocCompletion {
	target: any;
	action: (p1: any, p2: any, p3: number, p4: IOUSBIsocFrame) => void;
	parameter: any;
}
declare var IOUSBIsocCompletion: IOUSBIsocCompletion;

interface IOUSBIsocFrame {
	frStatus: number;
	frReqCount: number;
	frActCount: number;
}
declare var IOUSBIsocFrame: IOUSBIsocFrame;

interface IOUSBIsocStruct {
	fPipe: number;
	fBuffer: any;
	fBufSize: number;
	fStartFrame: number;
	fNumFrames: number;
	fFrameCounts: IOUSBIsocFrame;
}
declare var IOUSBIsocStruct: IOUSBIsocStruct;

interface IOUSBKeyboardData {
	keycount: number;
	usbkeycode: number;
}
declare var IOUSBKeyboardData: IOUSBKeyboardData;

interface IOUSBLowLatencyIsocCompletion {
	target: any;
	action: (p1: any, p2: any, p3: number, p4: IOUSBLowLatencyIsocFrame) => void;
	parameter: any;
}
declare var IOUSBLowLatencyIsocCompletion: IOUSBLowLatencyIsocCompletion;

interface IOUSBLowLatencyIsocFrame {
	frStatus: number;
	frReqCount: number;
	frActCount: number;
	frTimeStamp: UnsignedWide;
}
declare var IOUSBLowLatencyIsocFrame: IOUSBLowLatencyIsocFrame;

interface IOUSBLowLatencyIsocStruct {
	fPipe: number;
	fBufSize: number;
	fStartFrame: number;
	fNumFrames: number;
	fUpdateFrequency: number;
	fDataBufferCookie: number;
	fDataBufferOffset: number;
	fFrameListBufferCookie: number;
	fFrameListBufferOffset: number;
}
declare var IOUSBLowLatencyIsocStruct: IOUSBLowLatencyIsocStruct;

interface IOUSBMatch {
	usbClass: number;
	usbSubClass: number;
	usbProtocol: number;
	usbVendor: number;
	usbProduct: number;
}
declare var IOUSBMatch: IOUSBMatch;

interface IOUSBMouseData {
	buttons: number;
	XDelta: number;
	YDelta: number;
}
declare var IOUSBMouseData: IOUSBMouseData;

interface IOVirtualRange {
	address: number;
	length: number;
}
declare var IOVirtualRange: IOVirtualRange;

declare const KUSBInterfaceAssociationDescriptorProtocol: number;

declare function KextManagerCopyLoadedKextInfo(kextIdentifiers: NSArray<any> | any[], infoKeys: NSArray<any> | any[]): NSDictionary<any, any>;

declare function KextManagerCreateURLForBundleIdentifier(allocator: any, kextIdentifier: string): NSURL;

declare function KextManagerLoadKextWithIdentifier(kextIdentifier: string, dependencyKextAndFolderURLs: NSArray<any> | any[]): number;

declare function KextManagerLoadKextWithURL(kextURL: NSURL, dependencyKextAndFolderURLs: NSArray<any> | any[]): number;

declare function KextManagerUnloadKextWithIdentifier(kextIdentifier: string): number;

interface LongLBAModeParameterBlockDescriptor {
	NUMBER_OF_BLOCKS: number;
	DENSITY_CODE: number;
	RESERVED: number;
	BLOCK_LENGTH: number;
}
declare var LongLBAModeParameterBlockDescriptor: LongLBAModeParameterBlockDescriptor;

interface LowLatencyUserBufferInfo {
	cookie: number;
	bufferAddress: any;
	bufferSize: number;
	bufferType: number;
	isPrepared: boolean;
	nextBuffer: LowLatencyUserBufferInfo;
}
declare var LowLatencyUserBufferInfo: LowLatencyUserBufferInfo;

interface LowLatencyUserBufferInfoV2 {
	cookie: number;
	bufferAddress: any;
	bufferSize: number;
	bufferType: number;
	isPrepared: boolean;
	mappedUHCIAddress: any;
	nextBuffer: LowLatencyUserBufferInfoV2;
}
declare var LowLatencyUserBufferInfoV2: LowLatencyUserBufferInfoV2;

interface LowLatencyUserBufferInfoV3 {
	cookie: number;
	bufferAddress: number;
	bufferSize: number;
	bufferType: number;
	isPrepared: number;
	mappedUHCIAddress: number;
	nextBuffer: LowLatencyUserBufferInfoV3;
}
declare var LowLatencyUserBufferInfoV3: LowLatencyUserBufferInfoV3;

interface MMCDeviceInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	Inquiry: (p1: any, p2: SCSICmd_INQUIRY_StandardData, p3: number, p4: SCSITaskStatus, p5: SCSI_Sense_Data) => number;
	TestUnitReady: (p1: any, p2: SCSITaskStatus, p3: SCSI_Sense_Data) => number;
	GetPerformance: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any, p8: number, p9: SCSITaskStatus, p10: SCSI_Sense_Data) => number;
	GetConfiguration: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: SCSITaskStatus, p7: SCSI_Sense_Data) => number;
	ModeSense10: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: any, p7: number, p8: SCSITaskStatus, p9: SCSI_Sense_Data) => number;
	SetWriteParametersModePage: (p1: any, p2: any, p3: number, p4: SCSITaskStatus, p5: SCSI_Sense_Data) => number;
	GetTrayState: (p1: any, p2: string) => number;
	SetTrayState: (p1: any, p2: number) => number;
	ReadTableOfContents: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: number, p7: SCSITaskStatus, p8: SCSI_Sense_Data) => number;
	ReadDiscInformation: (p1: any, p2: any, p3: number, p4: SCSITaskStatus, p5: SCSI_Sense_Data) => number;
	ReadTrackInformation: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: SCSITaskStatus, p7: SCSI_Sense_Data) => number;
	ReadDVDStructure: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: number, p7: SCSITaskStatus, p8: SCSI_Sense_Data) => number;
	GetSCSITaskDeviceInterface: (p1: any) => SCSITaskDeviceInterface;
	GetPerformanceV2: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: any, p7: number, p8: SCSITaskStatus, p9: SCSI_Sense_Data) => number;
	SetCDSpeed: (p1: any, p2: number, p3: number, p4: SCSITaskStatus, p5: SCSI_Sense_Data) => number;
	ReadFormatCapacities: (p1: any, p2: any, p3: number, p4: SCSITaskStatus, p5: SCSI_Sense_Data) => number;
	ReadDiscStructure: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: any, p7: number, p8: SCSITaskStatus, p9: SCSI_Sense_Data) => number;
	ReadDiscInformationV2: (p1: any, p2: number, p3: any, p4: number, p5: SCSITaskStatus, p6: SCSI_Sense_Data) => number;
	ReadTrackInformationV2: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: number, p7: SCSITaskStatus, p8: SCSI_Sense_Data) => number;
	SetStreaming: (p1: any, p2: number, p3: any, p4: number, p5: SCSITaskStatus, p6: SCSI_Sense_Data) => number;
}
declare var MMCDeviceInterface: MMCDeviceInterface;

interface ModePageFormatHeader {
	PS_PAGE_CODE: number;
	PAGE_LENGTH: number;
}
declare var ModePageFormatHeader: ModePageFormatHeader;

interface ModeParameterBlockDescriptor {
	DENSITY_CODE: number;
	NUMBER_OF_BLOCKS: number;
	RESERVED: number;
	BLOCK_LENGTH: number;
}
declare var ModeParameterBlockDescriptor: ModeParameterBlockDescriptor;

interface NXEventExtension {
	flags: number;
	audit: audit_token_t;
}
declare var NXEventExtension: NXEventExtension;

interface NXEventSystemDevice {
	interface: number;
	interface_addr: number;
	dev_type: number;
	id: number;
}
declare var NXEventSystemDevice: NXEventSystemDevice;

interface NXEventSystemDeviceList {
	dev: NXEventSystemDevice;
}
declare var NXEventSystemDeviceList: NXEventSystemDeviceList;

declare function NXEventSystemInfo(handle: number, flavor: string | any, evs_info: number, evs_info_cnt: number): number;

interface NXKeyMapping {
	size: number;
	mapping: string;
}
declare var NXKeyMapping: NXKeyMapping;

enum NXMouseButton {

	X_OneButton = 0,

	X_LeftButton = 1,

	X_RightButton = 2
}


interface NXMouseScaling {
	numScaleLevels: number;
	scaleThresholds: number;
	scaleFactors: number;
}
declare var NXMouseScaling: NXMouseScaling;

interface NXParsedKeyMapping {
	shorts: number;
	keyBits: number;
	maxMod: number;
	modDefs: string;
	numDefs: number;
	keyDefs: string;
	numSeqs: number;
	seqDefs: string;
	numSpecialKeys: number;
	specialKeys: number;
	mapping: string;
	mappingLen: number;
}
declare var NXParsedKeyMapping: NXParsedKeyMapping;

interface NXPoint {
	x: number;
	y: number;
}
declare var NXPoint: NXPoint;

declare function NXResetKeyboard(handle: number): void;

declare function NXResetMouse(handle: number): void;

interface NXSize {
	width: number;
	height: number;
}
declare var NXSize: NXSize;

interface NXTabletPointData {
	x: number;
	y: number;
	z: number;
	buttons: number;
	pressure: number;
	tilt: { x: number; y: number; };
	rotation: number;
	tangentialPressure: number;
	deviceID: number;
	vendor1: number;
	vendor2: number;
	vendor3: number;
}
declare var NXTabletPointData: NXTabletPointData;

interface NXTabletProximityData {
	vendorID: number;
	tabletID: number;
	pointerID: number;
	deviceID: number;
	systemTabletID: number;
	vendorPointerType: number;
	pointerSerialNumber: number;
	uniqueID: number;
	capabilityMask: number;
	pointerType: number;
	enterProximity: number;
	reserved1: number;
}
declare var NXTabletProximityData: NXTabletProximityData;

enum NuDCLFlags {

	kNuDCLDynamic = 2,

	kNuDCLUpdateBeforeCallback = 4
}


declare function OSGetNotificationFromMessage(msg: mach_msg_header_t, index: number, type: number, reference: number, content: any, size: number): number;

interface OSNotificationHeader {
	size: number;
	type: number;
	reference: number;
	content: number;
}
declare var OSNotificationHeader: OSNotificationHeader;

interface OSNotificationHeader64 {
	size: number;
	type: number;
	reference: number;
	content: number;
}
declare var OSNotificationHeader64: OSNotificationHeader64;

declare const OUTPUT_COMMUNICATION_SPEAKER: number;

declare const OUTPUT_DESKTOP_SPEAKER: number;

declare const OUTPUT_HEADPHONES: number;

declare const OUTPUT_HEAD_MOUNTED_DISPLAY_AUDIO: number;

declare const OUTPUT_LOW_FREQUENCY_EFFECTS_SPEAKER: number;

declare const OUTPUT_NULL: number;

declare const OUTPUT_ROOM_SPEAKER: number;

declare const OUTPUT_SPEAKER: number;

declare const OUTPUT_UNDEFINED: number;

declare const PROCESSOR_GENERAL: number;

declare const PROCESSOR_UNDEFINED: number;

interface REPORT_LUNS_LOGICAL_UNIT_ADDRESSING {
	LUN: number;
	BUS_NUMBER: number;
	TARGET: number;
	reserved2: number;
	reserved: number;
}
declare var REPORT_LUNS_LOGICAL_UNIT_ADDRESSING: REPORT_LUNS_LOGICAL_UNIT_ADDRESSING;

interface REPORT_LUNS_PERIPHERAL_DEVICE_ADDRESSING {
	TARGET_LUN: number;
	BUS_IDENTIFIER: number;
	reserved2: number;
	reserved: number;
}
declare var REPORT_LUNS_PERIPHERAL_DEVICE_ADDRESSING: REPORT_LUNS_PERIPHERAL_DEVICE_ADDRESSING;

interface SBCModePageCaching {
	header: ModePageFormatHeader;
	flags: number;
	DEMAND_READ_WRITE_RETENTION_PRIORITY: number;
	DISABLE_PREFETCH_TRANSFER_LENGTH: number;
	MINIMUM_PREFETCH: number;
	MAXIMUM_PREFETCH: number;
	MAXIMUM_PREFETCH_CEILING: number;
	flags2: number;
	NUMBER_OF_CACHE_SEGMENTS: number;
	CACHE_SEGMENT_SIZE: number;
	RESERVED: number;
	NON_CACHE_SEGMENT_SIZE: number;
}
declare var SBCModePageCaching: SBCModePageCaching;

interface SBCModePageFlexibleDisk {
	header: ModePageFormatHeader;
	TRANSFER_RATE: number;
	NUMBER_OF_HEADS: number;
	SECTORS_PER_TRACK: number;
	DATA_BYTES_PER_SECTOR: number;
	NUMBER_OF_CYLINDERS: number;
	STARTING_CYLINDER_WRITE_PRECOMPENSATION: number;
	STARTING_CYLINDER_REDUCED_WRITE_CURRENT: number;
	DEVICE_STEP_RATE: number;
	DEVICE_STEP_PULSE_WIDTH: number;
	HEAD_SETTLE_DELAY: number;
	MOTOR_ON_DELAY: number;
	MOTOR_OFF_DELAY: number;
	TRDY_SSN_MO: number;
	SPC: number;
	WRITE_COMPENSATION: number;
	HEAD_LOAD_DELAY: number;
	HEAD_UNLOAD_DELAY: number;
	PIN_34_PIN_2: number;
	PIN_4_PIN_1: number;
	MEDIUM_ROTATION_RATE: number;
	RESERVED: number;
}
declare var SBCModePageFlexibleDisk: SBCModePageFlexibleDisk;

interface SBCModePageFormatDevice {
	header: ModePageFormatHeader;
	TRACKS_PER_ZONE: number;
	ALTERNATE_SECTORS_PER_ZONE: number;
	ALTERNATE_TRACKS_PER_ZONE: number;
	ALTERNATE_TRACKS_PER_LOGICAL_UNIT: number;
	SECTORS_PER_TRACK: number;
	DATA_BYTES_PER_PHYSICAL_SECTOR: number;
	INTERLEAVE: number;
	TRACK_SKEW_FACTOR: number;
	CYLINDER_SKEW_FACTOR: number;
	SSEC_HSEC_RMB_SURF: number;
	RESERVED: number;
}
declare var SBCModePageFormatDevice: SBCModePageFormatDevice;

interface SBCModePageRigidDiskGeometry {
	header: ModePageFormatHeader;
	NUMBER_OF_CYLINDERS: number;
	NUMBER_OF_HEADS: number;
	STARTING_CYLINDER_WRITE_PRECOMPENSATION: number;
	STARTING_CYLINDER_REDUCED_WRITE_CURRENT: number;
	DEVICE_STEP_RATE: number;
	LANDING_ZONE_CYLINDER: number;
	RPL: number;
	ROTATIONAL_OFFSET: number;
	RESERVED: number;
	MEDIUM_ROTATION_RATE: number;
	RESERVED1: number;
}
declare var SBCModePageRigidDiskGeometry: SBCModePageRigidDiskGeometry;

interface SCSICmd_INQUIRY_PAGECx_Header {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	RESERVED: number;
	PAGE_LENGTH: number;
}
declare var SCSICmd_INQUIRY_PAGECx_Header: SCSICmd_INQUIRY_PAGECx_Header;

interface SCSICmd_INQUIRY_Page00_Header {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	RESERVED: number;
	PAGE_LENGTH: number;
}
declare var SCSICmd_INQUIRY_Page00_Header: SCSICmd_INQUIRY_Page00_Header;

interface SCSICmd_INQUIRY_Page00_Header_SPC_16 {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	PAGE_LENGTH: number;
}
declare var SCSICmd_INQUIRY_Page00_Header_SPC_16: SCSICmd_INQUIRY_Page00_Header_SPC_16;

interface SCSICmd_INQUIRY_Page80_Header {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	RESERVED: number;
	PAGE_LENGTH: number;
	PRODUCT_SERIAL_NUMBER: number;
}
declare var SCSICmd_INQUIRY_Page80_Header: SCSICmd_INQUIRY_Page80_Header;

interface SCSICmd_INQUIRY_Page80_Header_SPC_16 {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	PAGE_LENGTH: number;
	PRODUCT_SERIAL_NUMBER: number;
}
declare var SCSICmd_INQUIRY_Page80_Header_SPC_16: SCSICmd_INQUIRY_Page80_Header_SPC_16;

interface SCSICmd_INQUIRY_Page83_Header {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	RESERVED: number;
	PAGE_LENGTH: number;
}
declare var SCSICmd_INQUIRY_Page83_Header: SCSICmd_INQUIRY_Page83_Header;

interface SCSICmd_INQUIRY_Page83_Header_SPC_16 {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	PAGE_LENGTH: number;
}
declare var SCSICmd_INQUIRY_Page83_Header_SPC_16: SCSICmd_INQUIRY_Page83_Header_SPC_16;

interface SCSICmd_INQUIRY_Page83_Identification_Descriptor {
	CODE_SET: number;
	IDENTIFIER_TYPE: number;
	RESERVED: number;
	IDENTIFIER_LENGTH: number;
	IDENTIFIER: number;
}
declare var SCSICmd_INQUIRY_Page83_Identification_Descriptor: SCSICmd_INQUIRY_Page83_Identification_Descriptor;

interface SCSICmd_INQUIRY_Page83_LogicalUnitGroup_Identifier {
	RESERVED: number;
	LOGICAL_UNIT_GROUP: number;
}
declare var SCSICmd_INQUIRY_Page83_LogicalUnitGroup_Identifier: SCSICmd_INQUIRY_Page83_LogicalUnitGroup_Identifier;

interface SCSICmd_INQUIRY_Page83_RelativeTargetPort_Identifier {
	OBSOLETE: number;
	RELATIVE_TARGET_PORT_IDENTIFIER: number;
}
declare var SCSICmd_INQUIRY_Page83_RelativeTargetPort_Identifier: SCSICmd_INQUIRY_Page83_RelativeTargetPort_Identifier;

interface SCSICmd_INQUIRY_Page83_TargetPortGroup_Identifier {
	RESERVED: number;
	TARGET_PORT_GROUP: number;
}
declare var SCSICmd_INQUIRY_Page83_TargetPortGroup_Identifier: SCSICmd_INQUIRY_Page83_TargetPortGroup_Identifier;

interface SCSICmd_INQUIRY_Page89_Data {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	PAGE_LENGTH: number;
	Reserved: number;
	SAT_VENDOR_IDENTIFICATION: number;
	SAT_PRODUCT_IDENTIFICATION: number;
	SAT_PRODUCT_REVISION_LEVEL: number;
	ATA_DEVICE_SIGNATURE: number;
	COMMAND_CODE: number;
	Reserved2: number;
	IDENTIFY_DATA: number;
}
declare var SCSICmd_INQUIRY_Page89_Data: SCSICmd_INQUIRY_Page89_Data;

interface SCSICmd_INQUIRY_PageB0_Data {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	PAGE_LENGTH: number;
	WSNZ: number;
	MAXIMUM_COMPARE_AND_WRITE_LENGTH: number;
	OPTIMAL_TRANSFER_LENGTH_GRANULARITY: number;
	MAXIMUM_TRANSFER_LENGTH: number;
	OPTIMAL_TRANSFER_LENGTH: number;
	MAXIMUM_PREFETCH_LENGTH: number;
	MAXIMUM_UNMAP_LBA_COUNT: number;
	MAXIMUM_UNMAP_BLOCK_DESCRIPTOR_COUNT: number;
	OPTIMAL_UNMAP_GRANULARITY: number;
	UNMAP_GRANULARITY_ALIGNMENT: number;
	MAXIMUM_WRITE_SAME_LENGTH: number;
	MAXIMUM_ATOMIC_TRANSFER_LENGTH: number;
	ATOMIC_ALIGNMENT: number;
	ATOMIC_TRANSFER_LENGTH_GRANULARITY: number;
	MAXIMUM_ATOMIC_TRANSFER_LENGTH_WITH_ATOMIC_BOUNDARY: number;
	MAXIMUM_ATOMIC_BOUNDARY_SIZE: number;
}
declare var SCSICmd_INQUIRY_PageB0_Data: SCSICmd_INQUIRY_PageB0_Data;

interface SCSICmd_INQUIRY_PageB1_Data {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	Reserved: number;
	PAGE_LENGTH: number;
	MEDIUM_ROTATION_RATE: number;
	Reserved2: number;
}
declare var SCSICmd_INQUIRY_PageB1_Data: SCSICmd_INQUIRY_PageB1_Data;

interface SCSICmd_INQUIRY_PageB2_Data {
	PERIPHERAL_DEVICE_TYPE: number;
	PAGE_CODE: number;
	PAGE_LENGTH: number;
	THRESHOLD_EXPONENT: number;
	LBP_FLAGS: number;
	MINIMUM_PERCENTAGE: number;
	THRESHOLD_PERCENTAGE: number;
}
declare var SCSICmd_INQUIRY_PageB2_Data: SCSICmd_INQUIRY_PageB2_Data;

interface SCSICmd_INQUIRY_PageB2_Provisioning_Group_Descriptor {
	DESIGNATION_DESCRIPTOR: number;
	RESERVED: number;
}
declare var SCSICmd_INQUIRY_PageB2_Provisioning_Group_Descriptor: SCSICmd_INQUIRY_PageB2_Provisioning_Group_Descriptor;

interface SCSICmd_INQUIRY_PageC0_Data {
	fHeader: SCSICmd_INQUIRY_PAGECx_Header;
	fTdmPageVersion: number;
	fTdmProtocolVersion: number;
	fReserved1: number;
	fReserved2: number;
	fMacModelId: number;
	fSerialNumber: number;
	fMaxReadSize: number;
	fMaxWriteSize: number;
	fNativeBlockSize: number;
	fPreferredIOSize: number;
	fFeatures: number;
	fWorkArounds: number;
	fEncryptionType: number;
	fReserved3: number;
	fInstalledRAMSize: number;
}
declare var SCSICmd_INQUIRY_PageC0_Data: SCSICmd_INQUIRY_PageC0_Data;

interface SCSICmd_INQUIRY_PageC1_Data {
	fHeader: SCSICmd_INQUIRY_PAGECx_Header;
	fTdmPowerRequirementsPageVersion: number;
	fReserved1: number;
	fReserved2: number;
	fPowerRequired: number;
}
declare var SCSICmd_INQUIRY_PageC1_Data: SCSICmd_INQUIRY_PageC1_Data;

interface SCSICmd_INQUIRY_StandardData {
	PERIPHERAL_DEVICE_TYPE: number;
	RMB: number;
	VERSION: number;
	RESPONSE_DATA_FORMAT: number;
	ADDITIONAL_LENGTH: number;
	SCCSReserved: number;
	flags1: number;
	flags2: number;
	VENDOR_IDENTIFICATION: number;
	PRODUCT_IDENTIFICATION: number;
	PRODUCT_REVISION_LEVEL: number;
}
declare var SCSICmd_INQUIRY_StandardData: SCSICmd_INQUIRY_StandardData;

interface SCSICmd_INQUIRY_StandardDataAll {
	PERIPHERAL_DEVICE_TYPE: number;
	RMB: number;
	VERSION: number;
	RESPONSE_DATA_FORMAT: number;
	ADDITIONAL_LENGTH: number;
	SCCSReserved: number;
	flags1: number;
	flags2: number;
	VENDOR_IDENTIFICATION: number;
	PRODUCT_IDENTIFICATION: number;
	PRODUCT_REVISION_LEVEL: number;
	VendorSpecific1: number;
	flags3: number;
	Reserved1: number;
	VERSION_DESCRIPTOR: number;
	Reserved2: number;
	VendorSpecific2: number;
}
declare var SCSICmd_INQUIRY_StandardDataAll: SCSICmd_INQUIRY_StandardDataAll;

interface SCSICmd_REPORT_LUNS_Header {
	LUN_LIST_LENGTH: number;
	RESERVED: number;
	LUN: SCSICmd_REPORT_LUNS_LUN_ENTRY;
}
declare var SCSICmd_REPORT_LUNS_Header: SCSICmd_REPORT_LUNS_Header;

interface SCSICmd_REPORT_LUNS_LUN_ENTRY {
	FIRST_LEVEL_ADDRESSING: number;
	SECOND_LEVEL_ADDRESSING: number;
	THIRD_LEVEL_ADDRESSING: number;
	FOURTH_LEVEL_ADDRESSING: number;
}
declare var SCSICmd_REPORT_LUNS_LUN_ENTRY: SCSICmd_REPORT_LUNS_LUN_ENTRY;

enum SCSIServiceResponse {

	kSCSIServiceResponse_Request_In_Process = 0,

	kSCSIServiceResponse_SERVICE_DELIVERY_OR_TARGET_FAILURE = 1,

	kSCSIServiceResponse_TASK_COMPLETE = 2,

	kSCSIServiceResponse_LINK_COMMAND_COMPLETE = 3,

	kSCSIServiceResponse_FUNCTION_COMPLETE = 4,

	kSCSIServiceResponse_FUNCTION_REJECTED = 5
}


enum SCSITaskAttribute {

	kSCSITask_SIMPLE = 0,

	kSCSITask_ORDERED = 1,

	kSCSITask_HEAD_OF_QUEUE = 2,

	kSCSITask_ACA = 3
}


interface SCSITaskDeviceInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	IsExclusiveAccessAvailable: (p1: any) => boolean;
	AddCallbackDispatcherToRunLoop: (p1: any, p2: any) => number;
	RemoveCallbackDispatcherFromRunLoop: (p1: any) => void;
	ObtainExclusiveAccess: (p1: any) => number;
	ReleaseExclusiveAccess: (p1: any) => number;
	CreateSCSITask: (p1: any) => SCSITaskInterface;
}
declare var SCSITaskDeviceInterface: SCSITaskDeviceInterface;

interface SCSITaskInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	version: number;
	revision: number;
	IsTaskActive: (p1: any) => boolean;
	SetTaskAttribute: (p1: any, p2: SCSITaskAttribute) => number;
	GetTaskAttribute: (p1: any, p2: SCSITaskAttribute) => number;
	SetCommandDescriptorBlock: (p1: any, p2: string, p3: number) => number;
	GetCommandDescriptorBlockSize: (p1: any) => number;
	GetCommandDescriptorBlock: (p1: any, p2: string) => number;
	SetScatterGatherEntries: (p1: any, p2: IOVirtualRange, p3: number, p4: number, p5: number) => number;
	SetTimeoutDuration: (p1: any, p2: number) => number;
	GetTimeoutDuration: (p1: any) => number;
	SetTaskCompletionCallback: (p1: any, p2: (p1: SCSIServiceResponse, p2: SCSITaskStatus, p3: number, p4: any) => void, p3: any) => number;
	ExecuteTaskAsync: (p1: any) => number;
	ExecuteTaskSync: (p1: any, p2: SCSI_Sense_Data, p3: SCSITaskStatus, p4: number) => number;
	AbortTask: (p1: any) => number;
	GetSCSIServiceResponse: (p1: any, p2: SCSIServiceResponse) => number;
	GetTaskState: (p1: any, p2: SCSITaskState) => number;
	GetTaskStatus: (p1: any, p2: SCSITaskStatus) => number;
	GetRealizedDataTransferCount: (p1: any) => number;
	GetAutoSenseData: (p1: any, p2: SCSI_Sense_Data) => number;
	SetAutoSenseDataBuffer: (p1: any, p2: SCSI_Sense_Data, p3: number) => number;
	ResetForNewTask: (p1: any) => number;
}
declare var SCSITaskInterface: SCSITaskInterface;

enum SCSITaskState {

	kSCSITaskState_NEW_TASK = 0,

	kSCSITaskState_ENABLED = 1,

	kSCSITaskState_BLOCKED = 2,

	kSCSITaskState_DORMANT = 3,

	kSCSITaskState_ENDED = 4
}


enum SCSITaskStatus {

	kSCSITaskStatus_GOOD = 0,

	kSCSITaskStatus_CHECK_CONDITION = 2,

	kSCSITaskStatus_CONDITION_MET = 4,

	kSCSITaskStatus_BUSY = 8,

	kSCSITaskStatus_INTERMEDIATE = 16,

	kSCSITaskStatus_INTERMEDIATE_CONDITION_MET = 20,

	kSCSITaskStatus_RESERVATION_CONFLICT = 24,

	kSCSITaskStatus_TASK_SET_FULL = 40,

	kSCSITaskStatus_ACA_ACTIVE = 48,

	kSCSITaskStatus_TaskTimeoutOccurred = 1,

	kSCSITaskStatus_ProtocolTimeoutOccurred = 2,

	kSCSITaskStatus_DeviceNotResponding = 3,

	kSCSITaskStatus_DeviceNotPresent = 4,

	kSCSITaskStatus_DeliveryFailure = 5,

	kSCSITaskStatus_No_Status = 255
}


interface SCSI_Capacity_Data {
	RETURNED_LOGICAL_BLOCK_ADDRESS: number;
	BLOCK_LENGTH_IN_BYTES: number;
}
declare var SCSI_Capacity_Data: SCSI_Capacity_Data;

interface SCSI_Capacity_Data_Long {
	RETURNED_LOGICAL_BLOCK_ADDRESS: number;
	BLOCK_LENGTH_IN_BYTES: number;
	RTO_EN_PROT_EN: number;
	Reserved: number;
}
declare var SCSI_Capacity_Data_Long: SCSI_Capacity_Data_Long;

interface SCSI_Sense_Data {
	VALID_RESPONSE_CODE: number;
	SEGMENT_NUMBER: number;
	SENSE_KEY: number;
	INFORMATION_1: number;
	INFORMATION_2: number;
	INFORMATION_3: number;
	INFORMATION_4: number;
	ADDITIONAL_SENSE_LENGTH: number;
	COMMAND_SPECIFIC_INFORMATION_1: number;
	COMMAND_SPECIFIC_INFORMATION_2: number;
	COMMAND_SPECIFIC_INFORMATION_3: number;
	COMMAND_SPECIFIC_INFORMATION_4: number;
	ADDITIONAL_SENSE_CODE: number;
	ADDITIONAL_SENSE_CODE_QUALIFIER: number;
	FIELD_REPLACEABLE_UNIT_CODE: number;
	SKSV_SENSE_KEY_SPECIFIC_MSB: number;
	SENSE_KEY_SPECIFIC_MID: number;
	SENSE_KEY_SPECIFIC_LSB: number;
}
declare var SCSI_Sense_Data: SCSI_Sense_Data;

interface SPCModePagePowerCondition {
	header: ModePageFormatHeader;
	RESERVED: number;
	IDLE_STANDBY: number;
	IDLE_CONDITION_TIMER: number;
	STANDBY_CONDITION_TIMER: number;
}
declare var SPCModePagePowerCondition: SPCModePagePowerCondition;

interface SPCModeParameterHeader10 {
	MODE_DATA_LENGTH: number;
	MEDIUM_TYPE: number;
	DEVICE_SPECIFIC_PARAMETER: number;
	LONGLBA: number;
	RESERVED: number;
	BLOCK_DESCRIPTOR_LENGTH: number;
}
declare var SPCModeParameterHeader10: SPCModeParameterHeader10;

interface SPCModeParameterHeader6 {
	MODE_DATA_LENGTH: number;
	MEDIUM_TYPE: number;
	DEVICE_SPECIFIC_PARAMETER: number;
	BLOCK_DESCRIPTOR_LENGTH: number;
}
declare var SPCModeParameterHeader6: SPCModeParameterHeader6;

declare const TELEPHONY_DOWN_LINE_PHONE: number;

declare const TELEPHONY_PHONE_LINE: number;

declare const TELEPHONY_TELEPHONE: number;

declare const TELEPHONY_UNDEFINED: number;

enum USBClassSpecificDesc {

	kUSBClassSpecificDescriptor = 36
}


enum USBDeviceInformationBits {

	kUSBInformationDeviceIsCaptiveBit = 0,

	kUSBInformationDeviceIsAttachedToRootHubBit = 1,

	kUSBInformationDeviceIsInternalBit = 2,

	kUSBInformationDeviceIsConnectedBit = 3,

	kUSBInformationDeviceIsEnabledBit = 4,

	kUSBInformationDeviceIsSuspendedBit = 5,

	kUSBInformationDeviceIsInResetBit = 6,

	kUSBInformationDeviceOvercurrentBit = 7,

	kUSBInformationDevicePortIsInTestModeBit = 8,

	kUSBInformationDeviceIsRootHub = 9,

	kUSBInformationRootHubisBuiltIn = 10,

	kUSBInformationRootHubIsBuiltInBit = 10,

	kUSBInformationDeviceIsRemote = 11,

	kUSBInformationDeviceIsAttachedToEnclosure = 12,

	kUSBInformationDeviceIsOnThunderboltBit = 13,

	kUSBInformationDeviceIsCaptiveMask = 1,

	kUSBInformationDeviceIsAttachedToRootHubMask = 2,

	kUSBInformationDeviceIsInternalMask = 4,

	kUSBInformationDeviceIsConnectedMask = 8,

	kUSBInformationDeviceIsEnabledMask = 16,

	kUSBInformationDeviceIsSuspendedMask = 32,

	kUSBInformationDeviceIsInResetMask = 64,

	kUSBInformationDeviceOvercurrentMask = 128,

	kUSBInformationDevicePortIsInTestModeMask = 256,

	kUSBInformationDeviceIsRootHubMask = 512,

	kUSBInformationRootHubisBuiltInMask = 1024,

	kUSBInformationRootHubIsBuiltInMask = 1024,

	kUSBInformationDeviceIsRemoteMask = 2048,

	kUSBInformationDeviceIsAttachedToEnclosureMask = 4096,

	kUSBInformationDeviceIsOnThunderboltMask = 8192
}


enum USBLowLatencyBufferType {

	kUSBLowLatencyWriteBuffer = 0,

	kUSBLowLatencyReadBuffer = 1,

	kUSBLowLatencyFrameListBuffer = 2
}


enum USBNotificationTypes {

	kUSBNotificationPreForcedSuspend = 1,

	kUSBNotificationPostForcedSuspend = 2,

	kUSBNotificationPreForcedResume = 4,

	kUSBNotificationPostForcedResume = 8
}


enum USBPowerRequestTypes {

	kUSBPowerDuringSleep = 0,

	kUSBPowerDuringWake = 1,

	kUSBPowerRequestWakeRelease = 2,

	kUSBPowerRequestSleepRelease = 3,

	kUSBPowerRequestWakeReallocate = 4,

	kUSBPowerRequestSleepReallocate = 5,

	kUSBPowerDuringWakeRevocable = 6,

	kUSBPowerDuringWakeUSB3 = 7
}


enum USBReEnumerateOptions {

	kUSBAddExtraResetTimeBit = 31,

	kUSBReEnumerateCaptureDeviceBit = 30,

	kUSBReEnumerateReleaseDeviceBit = 29,

	kUSBAddExtraResetTimeMask = -2147483648,

	kUSBReEnumerateCaptureDeviceMask = 1073741824,

	kUSBReEnumerateReleaseDeviceMask = 536870912
}


interface UserExportDCLCallProc {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
	proc: number;
	procData: number;
}
declare var UserExportDCLCallProc: UserExportDCLCallProc;

interface UserExportDCLCommand {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
	operands: number;
}
declare var UserExportDCLCommand: UserExportDCLCommand;

interface UserExportDCLJump {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
	pJumpDCLLabel: number;
}
declare var UserExportDCLJump: UserExportDCLJump;

interface UserExportDCLLabel {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
}
declare var UserExportDCLLabel: UserExportDCLLabel;

interface UserExportDCLNuDCLLeader {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
	program: number;
}
declare var UserExportDCLNuDCLLeader: UserExportDCLNuDCLLeader;

interface UserExportDCLPtrTimeStamp {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
	timeStampPtr: number;
}
declare var UserExportDCLPtrTimeStamp: UserExportDCLPtrTimeStamp;

interface UserExportDCLSetTagSyncBits {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
	tagBits: number;
	syncBits: number;
}
declare var UserExportDCLSetTagSyncBits: UserExportDCLSetTagSyncBits;

interface UserExportDCLTimeStamp {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
	timeStamp: number;
}
declare var UserExportDCLTimeStamp: UserExportDCLTimeStamp;

interface UserExportDCLTransferBuffer {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
	buffer: number;
	size: number;
	packetSize: number;
	reserved: number;
	bufferOffset: number;
}
declare var UserExportDCLTransferBuffer: UserExportDCLTransferBuffer;

interface UserExportDCLTransferPacket {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
	buffer: number;
	size: number;
}
declare var UserExportDCLTransferPacket: UserExportDCLTransferPacket;

interface UserExportDCLUpdateDCLList {
	pClientDCLStruct: number;
	pNextDCLCommand: number;
	compilerData: number;
	opcode: number;
	dclCommandList: number;
	numDCLCommands: number;
}
declare var UserExportDCLUpdateDCLList: UserExportDCLUpdateDCLList;

declare const addPacketShift: number;

interface applelabel {
	al_boot0: number;
	al_magic: number;
	al_type: number;
	al_flags: number;
	al_offset: number;
	al_size: number;
	al_checksum: number;
	al_boot1: number;
}
declare var applelabel: applelabel;

interface bm12Cursor {
	image: number;
	mask: number;
	save: number;
}
declare var bm12Cursor: bm12Cursor;

interface bm18Cursor {
	image: number;
	mask: number;
	save: number;
}
declare var bm18Cursor: bm18Cursor;

interface bm34Cursor {
	image: number;
	save: number;
}
declare var bm34Cursor: bm34Cursor;

interface bm38Cursor {
	image: number;
	save: number;
}
declare var bm38Cursor: bm38Cursor;

interface disk_blk0 {
	bootcode: number;
	parts: fdisk_part;
	signature: number;
}
declare var disk_blk0: disk_blk0;

interface dk_bd_read_disc_info_t {
	reserved0000: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_bd_read_disc_info_t: dk_bd_read_disc_info_t;

interface dk_bd_read_structure_t {
	format: number;
	reserved0008: number;
	address: number;
	grantID: number;
	layer: number;
	reserved0080: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_bd_read_structure_t: dk_bd_read_structure_t;

interface dk_bd_read_track_info_t {
	reserved0000: number;
	address: number;
	addressType: number;
	reserved0072: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_bd_read_track_info_t: dk_bd_read_track_info_t;

interface dk_bd_report_key_t {
	format: number;
	keyClass: number;
	blockCount: number;
	reserved0024: number;
	address: number;
	grantID: number;
	reserved0072: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_bd_report_key_t: dk_bd_report_key_t;

interface dk_bd_send_key_t {
	format: number;
	keyClass: number;
	reserved0016: number;
	grantID: number;
	reserved0072: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_bd_send_key_t: dk_bd_send_key_t;

interface dk_cd_read_disc_info_t {
	reserved0000: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_cd_read_disc_info_t: dk_cd_read_disc_info_t;

interface dk_cd_read_isrc_t {
	isrc: number;
	track: number;
	reserved0112: number;
}
declare var dk_cd_read_isrc_t: dk_cd_read_isrc_t;

interface dk_cd_read_mcn_t {
	mcn: number;
	reserved0112: number;
}
declare var dk_cd_read_mcn_t: dk_cd_read_mcn_t;

interface dk_cd_read_t {
	offset: number;
	sectorArea: number;
	sectorType: number;
	reserved0080: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_cd_read_t: dk_cd_read_t;

interface dk_cd_read_track_info_t {
	reserved0000: number;
	address: number;
	addressType: number;
	reserved0072: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_cd_read_track_info_t: dk_cd_read_track_info_t;

interface dk_dvd_read_disc_info_t {
	reserved0000: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_dvd_read_disc_info_t: dk_dvd_read_disc_info_t;

interface dk_dvd_read_rzone_info_t {
	reserved0000: number;
	address: number;
	addressType: number;
	reserved0072: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_dvd_read_rzone_info_t: dk_dvd_read_rzone_info_t;

interface dk_dvd_read_structure_t {
	format: number;
	reserved0008: number;
	address: number;
	grantID: number;
	layer: number;
	reserved0080: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_dvd_read_structure_t: dk_dvd_read_structure_t;

interface dk_dvd_report_key_t {
	format: number;
	keyClass: number;
	blockCount: number;
	reserved0024: number;
	address: number;
	grantID: number;
	reserved0072: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_dvd_report_key_t: dk_dvd_report_key_t;

interface dk_dvd_send_key_t {
	format: number;
	keyClass: number;
	reserved0016: number;
	grantID: number;
	reserved0072: number;
	bufferLength: number;
	buffer: any;
}
declare var dk_dvd_send_key_t: dk_dvd_send_key_t;

enum eIOAccelSurfaceLockBits {

	kIOAccelSurfaceLockInBacking = 0,

	kIOAccelSurfaceLockInAccel = 1,

	kIOAccelSurfaceLockInDontCare = 2,

	kIOAccelSurfaceLockInMask = 3
}


enum eIOAccelSurfaceMemoryTypes {

	kIOAccelNumSurfaceMemoryTypes = 0
}


enum eIOAccelSurfaceMethods {

	kIOAccelSurfaceReadLockOptions = 0,

	kIOAccelSurfaceReadUnlockOptions = 1,

	kIOAccelSurfaceGetState = 2,

	kIOAccelSurfaceWriteLockOptions = 3,

	kIOAccelSurfaceWriteUnlockOptions = 4,

	kIOAccelSurfaceRead = 5,

	kIOAccelSurfaceSetShapeBacking = 6,

	kIOAccelSurfaceSetIDMode = 7,

	kIOAccelSurfaceSetScale = 8,

	kIOAccelSurfaceSetShape = 9,

	kIOAccelSurfaceFlush = 10,

	kIOAccelSurfaceQueryLock = 11,

	kIOAccelSurfaceReadLock = 12,

	kIOAccelSurfaceReadUnlock = 13,

	kIOAccelSurfaceWriteLock = 14,

	kIOAccelSurfaceWriteUnlock = 15,

	kIOAccelSurfaceControl = 16,

	kIOAccelSurfaceSetShapeBackingAndLength = 17,

	kIOAccelNumSurfaceMethods = 18
}


enum eIOAccelSurfaceModeBits {

	kIOAccelSurfaceModeColorDepth1555 = 3,

	kIOAccelSurfaceModeColorDepth8888 = 4,

	kIOAccelSurfaceModeColorDepthYUV = 6,

	kIOAccelSurfaceModeColorDepthYUV9 = 7,

	kIOAccelSurfaceModeColorDepthYUV12 = 8,

	kIOAccelSurfaceModeColorDepthYUV2 = 9,

	kIOAccelSurfaceModeColorDepthBGRA32 = 10,

	kIOAccelSurfaceModeColorDepth2101010 = 15,

	kIOAccelSurfaceModeColorDepthBits = 15,

	kIOAccelSurfaceModeStereoBit = 16,

	kIOAccelSurfaceModeWindowedBit = 32,

	kIOAccelSurfaceModeSurface2 = 16384,

	kIOAccelSurfaceModeBeamSync = 32768
}


enum eIOAccelSurfaceScaleBits {

	kIOAccelSurfaceBeamSyncSwaps = 1,

	kIOAccelSurfaceFixedSource = 2,

	kIOAccelSurfaceFiltering = 240,

	kIOAccelSurfaceFilterDefault = 0,

	kIOAccelSurfaceFilterNone = 16,

	kIOAccelSurfaceFilterLinear = 32
}


enum eIOAccelSurfaceShapeBits {

	kIOAccelSurfaceShapeNone = 0,

	kIOAccelSurfaceShapeNonBlockingBit = 1,

	kIOAccelSurfaceShapeNonSimpleBit = 2,

	kIOAccelSurfaceShapeIdentityScaleBit = 4,

	kIOAccelSurfaceShapeFrameSyncBit = 8,

	kIOAccelSurfaceShapeBeamSyncBit = 16,

	kIOAccelSurfaceShapeStaleBackingBit = 32,

	kIOAccelSurfaceShapeAssemblyBit = 64,

	kIOAccelSurfaceShapeWaitEnabledBit = 128,

	kIOAccelSurfaceShapeBlockingBit = 1
}


enum eIOAccelSurfaceStateBits {

	kIOAccelSurfaceStateNone = 0,

	kIOAccelSurfaceStateIdleBit = 1
}


enum eIOAcceleratorClientTypes {

	kIOAccelSurfaceClientType = 0,

	kIOAccelNumClientTypes = 1,

	kIOAccelSurface2ClientType = 32
}


interface evioSpecialKeyMsg {
	Head: mach_msg_header_t;
	key: number;
	direction: number;
	flags: number;
	level: number;
}
declare var evioSpecialKeyMsg: evioSpecialKeyMsg;

enum evsioEVSIOCCSIndices {

	EVSIOCCS_X = 0,

	EVSIOCCS_Y = 1
}


enum evsioEVSIOSCSIndices {

	EVSIOSCS_X = 0,

	EVSIOSCS_Y = 1
}


interface fdisk_part {
	bootid: number;
	beghead: number;
	begsect: number;
	begcyl: number;
	systid: number;
	endhead: number;
	endsect: number;
	endcyl: number;
	relsect: number;
	numsect: number;
}
declare var fdisk_part: fdisk_part;

interface gpt_ent {
	ent_type: number;
	ent_uuid: number;
	ent_lba_start: number;
	ent_lba_end: number;
	ent_attr: number;
	ent_name: number;
}
declare var gpt_ent: gpt_ent;

interface gpt_hdr {
	hdr_sig: number;
	hdr_revision: number;
	hdr_size: number;
	hdr_crc_self: number;
	__reserved: number;
	hdr_lba_self: number;
	hdr_lba_alt: number;
	hdr_lba_start: number;
	hdr_lba_end: number;
	hdr_uuid: number;
	hdr_lba_table: number;
	hdr_entries: number;
	hdr_entsz: number;
	hdr_crc_table: number;
	padding: number;
}
declare var gpt_hdr: gpt_hdr;

declare const k5Minutes: number;

declare const kATADefaultRetries: number;

declare const kATADefaultTimeout: number;

declare const kATAEnableMultiWordDMAModeMask: number;

declare const kATAEnablePIOModeMask: number;

declare const kATAEnableUltraDMAModeMask: number;

declare const kATAForceUnitAccessFeatureBit: number;

declare const kATAForceUnitAccessFeatureMask: number;

declare const kATAIdentifyAdvancedPIOModes: number;

declare const kATAIdentifyCommandExtension1: number;

declare const kATAIdentifyCommandExtension2: number;

declare const kATAIdentifyCommandSetSupported: number;

declare const kATAIdentifyCommandSetSupported2: number;

declare const kATAIdentifyCommandsDefault: number;

declare const kATAIdentifyCommandsEnabled: number;

declare const kATAIdentifyConfiguration: number;

declare const kATAIdentifyCurrentCapacity: number;

declare const kATAIdentifyCurrentCylinders: number;

declare const kATAIdentifyCurrentHeads: number;

declare const kATAIdentifyCurrentMultipleSectors: number;

declare const kATAIdentifyCurrentSectors: number;

declare const kATAIdentifyDriveCapabilities: number;

declare const kATAIdentifyDriveCapabilitiesExtended: number;

declare const kATAIdentifyExtendedInfoSupport: number;

declare const kATAIdentifyFirmwareRevision: number;

declare const kATAIdentifyIntegrity: number;

declare const kATAIdentifyLBACapacity: number;

declare const kATAIdentifyLogicalCylinderCount: number;

declare const kATAIdentifyLogicalHeadCount: number;

declare const kATAIdentifyLogicalSectorAlignment: number;

declare const kATAIdentifyMajorVersion: number;

declare const kATAIdentifyMinMultiWordDMATime: number;

declare const kATAIdentifyMinPIOTime: number;

declare const kATAIdentifyMinPIOTimeWithIORDY: number;

declare const kATAIdentifyMinorVersion: number;

declare const kATAIdentifyModelNumber: number;

declare const kATAIdentifyMultiWordDMA: number;

declare const kATAIdentifyMultipleSectorCount: number;

declare const kATAIdentifyPIOTiming: number;

declare const kATAIdentifyPhysicalLogicalSectorSize: number;

declare const kATAIdentifyQueueDepth: number;

declare const kATAIdentifyRecommendedMultiWordDMATime: number;

declare const kATAIdentifySectorsPerTrack: number;

declare const kATAIdentifySerialNumber: number;

declare const kATAIdentifySingleWordDMA: number;

declare const kATAIdentifyUltraDMASupported: number;

declare const kATAIdentifyWordsPerLogicalSector1: number;

declare const kATAIdentifyWordsPerLogicalSector2: number;

declare const kATALogicalSectorAlignmentMask: number;

declare const kATAMultipleLogicalSectorsBit: number;

declare const kATAMultipleLogicalSectorsMask: number;

declare const kATAOperationTypeConfiguration: number;

declare const kATAOperationTypeFlushCache: number;

declare const kATAOperationTypePowerManagement: number;

declare const kATAOperationTypeRead: number;

declare const kATAOperationTypeSMART: number;

declare const kATAOperationTypeSMS: number;

declare const kATAOperationTypeWrite: number;

declare const kATAPhysicalLogicalEnabledBit0: number;

declare const kATAPhysicalLogicalEnabledBit1: number;

declare const kATAPhysicalLogicalEnabledMask: number;

declare const kATAPhysicalLogicalEnabledValue: number;

declare const kATAPhysicalSectorSizeMask: number;

declare const kATASMARTOffLineCollectionAbortedByHost: number;

declare const kATASMARTOffLineCollectionFatalError: number;

declare const kATASMARTOffLineCollectionMask: number;

declare const kATASMARTOffLineCollectionNeverStarted: number;

declare const kATASMARTOffLineCollectionNoError: number;

declare const kATASMARTOffLineCollectionSuspendedByHost: number;

declare const kATASMARTSelfTestStatusAbortedByHost: number;

declare const kATASMARTSelfTestStatusFatalError: number;

declare const kATASMARTSelfTestStatusInProgress: number;

declare const kATASMARTSelfTestStatusInterruptedByReset: number;

declare const kATASMARTSelfTestStatusNoError: number;

declare const kATASMARTSelfTestStatusPreviousTestElectricalFailure: number;

declare const kATASMARTSelfTestStatusPreviousTestReadFailure: number;

declare const kATASMARTSelfTestStatusPreviousTestServoFailure: number;

declare const kATASMARTSelfTestStatusPreviousTestUnknownFailure: number;

declare const kATASupports48BitAddressingBit: number;

declare const kATASupports48BitAddressingMask: number;

declare const kATASupportsAdvancedPowerManagementBit: number;

declare const kATASupportsAdvancedPowerManagementMask: number;

declare const kATASupportsCompactFlashBit: number;

declare const kATASupportsCompactFlashMask: number;

declare const kATASupportsFlushCacheBit: number;

declare const kATASupportsFlushCacheExtendedBit: number;

declare const kATASupportsFlushCacheExtendedMask: number;

declare const kATASupportsFlushCacheMask: number;

declare const kATASupportsPowerManagementBit: number;

declare const kATASupportsPowerManagementMask: number;

declare const kATASupportsSMARTBit: number;

declare const kATASupportsSMARTMask: number;

declare const kATASupportsWriteCacheBit: number;

declare const kATASupportsWriteCacheMask: number;

declare const kATATimeout10Seconds: number;

declare const kATATimeout1Minute: number;

declare const kATATimeout30Seconds: number;

declare const kATATimeout45Seconds: number;

declare const kATAValidLogicalSectorSizeBit: number;

declare const kATAValidLogicalSectorSizeMask: number;

declare const kATAWriteCacheEnabledBit: number;

declare const kATAWriteCacheEnabledMask: number;

declare const kATAZeroRetries: number;

declare const kAndConnections: number;

declare const kAppleVendorID: number;

declare const kBDFeaturesReadBit: number;

declare const kBDFeaturesReadMask: number;

declare const kBDFeaturesWriteBit: number;

declare const kBDFeaturesWriteMask: number;

declare const kBDMediaTypeMax: number;

declare const kBDMediaTypeMin: number;

declare const kBDMediaTypeR: number;

declare const kBDMediaTypeRE: number;

declare const kBDMediaTypeROM: number;

declare const kBDMediaTypeUnknown: number;

declare const kC0DataMaxStringLen: number;

declare const kCDFeaturesAnalogAudioBit: number;

declare const kCDFeaturesAnalogAudioMask: number;

declare const kCDFeaturesBUFWriteBit: number;

declare const kCDFeaturesBUFWriteMask: number;

declare const kCDFeaturesCDDAStreamAccurateBit: number;

declare const kCDFeaturesCDDAStreamAccurateMask: number;

declare const kCDFeaturesPacketWriteBit: number;

declare const kCDFeaturesPacketWriteMask: number;

declare const kCDFeaturesRawWriteBit: number;

declare const kCDFeaturesRawWriteMask: number;

declare const kCDFeaturesReWriteableBit: number;

declare const kCDFeaturesReWriteableMask: number;

declare const kCDFeaturesReadStructuresBit: number;

declare const kCDFeaturesReadStructuresMask: number;

declare const kCDFeaturesSAOWriteBit: number;

declare const kCDFeaturesSAOWriteMask: number;

declare const kCDFeaturesTAOWriteBit: number;

declare const kCDFeaturesTAOWriteMask: number;

declare const kCDFeaturesTestWriteBit: number;

declare const kCDFeaturesTestWriteMask: number;

declare const kCDFeaturesWriteOnceBit: number;

declare const kCDFeaturesWriteOnceMask: number;

declare const kCDMediaTypeMax: number;

declare const kCDMediaTypeMin: number;

declare const kCDMediaTypeR: number;

declare const kCDMediaTypeROM: number;

declare const kCDMediaTypeRW: number;

declare const kCDMediaTypeUnknown: number;

declare const kCDTOCFormatATIP: number;

declare const kCDTOCFormatPMA: number;

declare const kCDTOCFormatTEXT: number;

declare const kCDTOCFormatTOC: number;

declare const kCDTrackInfoAddressTypeLBA: number;

declare const kCDTrackInfoAddressTypeSessionNumber: number;

declare const kCDTrackInfoAddressTypeTrackNumber: number;

declare const kCSRArgumentHiAddress: number;

declare const kCSRArgumentLoAddress: number;

declare const kCSRBandwidthAvailable: number;

declare const kCSRBroadcastChannel: number;

declare const kCSRBusDependentRegistersBaseAddress: number;

declare const kCSRBusManagerID: number;

declare const kCSRBusyTimeout: number;

declare const kCSRChannelsAvailable31_0: number;

declare const kCSRChannelsAvailable63_32: number;

declare const kCSRClockInfo0Address: number;

declare const kCSRClockInfo1Address: number;

declare const kCSRClockInfo2Address: number;

declare const kCSRClockInfo3Address: number;

declare const kCSRClockStrobeArrivedHiAddress: number;

declare const kCSRClockStrobeArrivedMidAddress: number;

declare const kCSRClockTickPeriodLoAddress: number;

declare const kCSRClockTickPeriodMidAddress: number;

declare const kCSRClockValueHiAddress: number;

declare const kCSRClockValueMidAddress: number;

declare const kCSRCoreRegistersBaseAddress: number;

declare const kCSRErrorLogBufferAddress: number;

declare const kCSRIndirectAddressAddress: number;

declare const kCSRIndirectDataAddress: number;

declare const kCSRInitialMemorySpaceBaseAddressHi: number;

declare const kCSRInitialMemorySpaceBaseAddressLo: number;

declare const kCSRInterruptMaskAddress: number;

declare const kCSRInterruptTargetAddress: number;

declare const kCSRMemoryBaseHiAddress: number;

declare const kCSRMemoryBaseLoAddress: number;

declare const kCSRMemoryBoundHiAddress: number;

declare const kCSRMemoryBoundLoAddress: number;

declare const kCSRMessageRequestAddress: number;

declare const kCSRMessageResponseAddress: number;

declare const kCSRNodeID: number;

declare const kCSRNodeIDPhase: number;

declare const kCSRNodeIDsAddress: number;

declare const kCSRPrivateSpaceBaseAddressHi: number;

declare const kCSRPrivateSpaceBaseAddressLo: number;

declare const kCSRRegisterSpaceBaseAddressHi: number;

declare const kCSRRegisterSpaceBaseAddressLo: number;

declare const kCSRResetStartAddress: number;

declare const kCSRSplitTimeoutHiAddress: number;

declare const kCSRSplitTimeoutLoAddress: number;

declare const kCSRStateAtn: number;

declare const kCSRStateBusDepend: number;

declare const kCSRStateBusDependPhase: number;

declare const kCSRStateClearAddress: number;

declare const kCSRStateDReq: number;

declare const kCSRStateELog: number;

declare const kCSRStateLost: number;

declare const kCSRStateOff: number;

declare const kCSRStateSetAddress: number;

declare const kCSRStateState: number;

declare const kCSRStateStateDead: number;

declare const kCSRStateStateInitializing: number;

declare const kCSRStateStatePhase: number;

declare const kCSRStateStateRunning: number;

declare const kCSRStateStateTesting: number;

declare const kCSRStateUnitDepend: number;

declare const kCSRStateUnitDependPhase: number;

declare const kCSRTestStartAddress: number;

declare const kCSRTestStatusAddress: number;

declare const kCSRUnitsBaseHiAddress: number;

declare const kCSRUnitsBaseLoAddress: number;

declare const kCSRUnitsBoundHiAddress: number;

declare const kCSRUnitsBoundLoAddress: number;

declare const kChecksumValidCookie: number;

declare const kClamshellSleepBit: number;

declare const kClamshellStateBit: number;

declare const kClearDeviceFeature: number;

declare const kClearEndpointFeature: number;

declare const kClearInterfaceFeature: number;

declare const kConfigBIBBusNameAddress: number;

declare const kConfigBIBHeaderAddress: number;

declare const kConfigBusDependentInfoKey: number;

declare const kConfigBusInfoBlockLength: number;

declare const kConfigBusInfoBlockLengthPhase: number;

declare const kConfigEntryKeyType: number;

declare const kConfigEntryKeyTypePhase: number;

declare const kConfigEntryKeyValue: number;

declare const kConfigEntryKeyValuePhase: number;

declare const kConfigEntryValue: number;

declare const kConfigEntryValuePhase: number;

declare const kConfigGenerationKey: number;

declare const kConfigLeafDirCRC: number;

declare const kConfigLeafDirCRCPhase: number;

declare const kConfigLeafDirLength: number;

declare const kConfigLeafDirLengthPhase: number;

declare const kConfigModelIdKey: number;

declare const kConfigModuleDependentInfoKey: number;

declare const kConfigModuleHwVersionKey: number;

declare const kConfigModuleSpecIdKey: number;

declare const kConfigModuleSwVersionKey: number;

declare const kConfigModuleVendorIdKey: number;

declare const kConfigNodeCapabilitiesKey: number;

declare const kConfigNodeDependentInfoKey: number;

declare const kConfigNodeHwVersionKey: number;

declare const kConfigNodeMemoryExtentKey: number;

declare const kConfigNodeSpecIdKey: number;

declare const kConfigNodeSwVersionKey: number;

declare const kConfigNodeUniqueIdKey: number;

declare const kConfigNodeUnitsExtentKey: number;

declare const kConfigNodeVendorIdKey: number;

declare const kConfigROMBaseAddress: number;

declare const kConfigROMCRCLength: number;

declare const kConfigROMCRCLengthPhase: number;

declare const kConfigROMCRCValue: number;

declare const kConfigROMCRCValuePhase: number;

declare const kConfigRootDirectoryKey: number;

declare const kConfigSBP2LUN: number;

declare const kConfigSBP2MAO: number;

declare const kConfigSBP2Revision: number;

declare const kConfigTextualDescriptorKey: number;

declare const kConfigUnitDependentInfoKey: number;

declare const kConfigUnitDirectoryKey: number;

declare const kConfigUnitLocationKey: number;

declare const kConfigUnitPollMaskKey: number;

declare const kConfigUnitSWVersIIDC100: number;

declare const kConfigUnitSWVersIIDC101: number;

declare const kConfigUnitSWVersIIDC102: number;

declare const kConfigUnitSWVersMacintosh10: number;

declare const kConfigUnitSpec1394TA1: number;

declare const kConfigUnitSpecAppleA27: number;

declare const kConfigUnitSpecIdKey: number;

declare const kConfigUnitSwVersionKey: number;

declare const kConnectionAudioStreaming: number;

declare const kConnectionBlueGammaScale: number;

declare const kConnectionChanged: number;

declare const kConnectionCheckEnable: number;

declare const kConnectionColorDepthsSupported: number;

declare const kConnectionColorMode: number;

declare const kConnectionColorModesSupported: number;

declare const kConnectionControllerColorDepth: number;

declare const kConnectionControllerDepthsSupported: number;

declare const kConnectionControllerDitherControl: number;

declare const kConnectionDisplayFlags: number;

declare const kConnectionDisplayParameterCount: number;

declare const kConnectionDisplayParameters: number;

declare const kConnectionEnable: number;

declare const kConnectionEnableAudio: number;

declare const kConnectionFlags: number;

declare const kConnectionFlushParameters: number;

declare const kConnectionGammaScale: number;

declare const kConnectionGreenGammaScale: number;

declare const kConnectionHandleDisplayPortEvent: number;

declare const kConnectionIgnore: number;

declare const kConnectionOverscan: number;

declare const kConnectionPanelTimingDisable: number;

declare const kConnectionPostWake: number;

declare const kConnectionPower: number;

declare const kConnectionProbe: number;

declare const kConnectionRedGammaScale: number;

declare const kConnectionStartOfFrameTime: number;

declare const kConnectionSupportsAppleSense: number;

declare const kConnectionSupportsHLDDCSense: number;

declare const kConnectionSupportsLLDDCSense: number;

declare const kConnectionSyncEnable: number;

declare const kConnectionSyncFlags: number;

declare const kConnectionVBLMultiplier: number;

declare const kConnectionVideoBest: number;

declare const kCurFieldsValidBit: number;

declare const kCurFieldsValidMask: number;

declare const kDCLCallProcOp: number;

declare const kDCLInvalidOp: number;

declare const kDCLJumpOp: number;

declare const kDCLLabelOp: number;

declare const kDCLNuDCLLeaderOp: number;

declare const kDCLPtrTimeStampOp: number;

declare const kDCLReceiveBufferOp: number;

declare const kDCLReceivePacketOp: number;

declare const kDCLReceivePacketStartOp: number;

declare const kDCLSendBufferOp: number;

declare const kDCLSendPacketOp: number;

declare const kDCLSendPacketStartOp: number;

declare const kDCLSetTagSyncBitsOp: number;

declare const kDCLSkipCycleOp: number;

declare const kDCLTimeStampOp: number;

declare const kDCLUpdateDCLListOp: number;

declare const kDMABit: number;

declare const kDMADisableMask: number;

declare const kDMASupportedMask: number;

declare const kDVDBookTypeHDR: number;

declare const kDVDBookTypeHDRAM: number;

declare const kDVDBookTypeHDROM: number;

declare const kDVDBookTypeHDRW: number;

declare const kDVDBookTypePlusR: number;

declare const kDVDBookTypePlusRDoubleLayer: number;

declare const kDVDBookTypePlusRW: number;

declare const kDVDBookTypePlusRWDoubleLayer: number;

declare const kDVDBookTypeR: number;

declare const kDVDBookTypeRAM: number;

declare const kDVDBookTypeROM: number;

declare const kDVDBookTypeRW: number;

declare const kDVDCPRMRegion1: number;

declare const kDVDCPRMRegion2: number;

declare const kDVDCPRMRegion3: number;

declare const kDVDCPRMRegion4: number;

declare const kDVDCPRMRegion5: number;

declare const kDVDCPRMRegion6: number;

declare const kDVDFeaturesBUFWriteBit: number;

declare const kDVDFeaturesBUFWriteMask: number;

declare const kDVDFeaturesCSSBit: number;

declare const kDVDFeaturesCSSMask: number;

declare const kDVDFeaturesHDRAMBit: number;

declare const kDVDFeaturesHDRAMMask: number;

declare const kDVDFeaturesHDRBit: number;

declare const kDVDFeaturesHDRMask: number;

declare const kDVDFeaturesHDRWBit: number;

declare const kDVDFeaturesHDRWMask: number;

declare const kDVDFeaturesHDReadBit: number;

declare const kDVDFeaturesHDReadMask: number;

declare const kDVDFeaturesPlusRBit: number;

declare const kDVDFeaturesPlusRMask: number;

declare const kDVDFeaturesPlusRWBit: number;

declare const kDVDFeaturesPlusRWMask: number;

declare const kDVDFeaturesRandomWriteableBit: number;

declare const kDVDFeaturesRandomWriteableMask: number;

declare const kDVDFeaturesReWriteableBit: number;

declare const kDVDFeaturesReWriteableMask: number;

declare const kDVDFeaturesReadStructuresBit: number;

declare const kDVDFeaturesReadStructuresMask: number;

declare const kDVDFeaturesTestWriteBit: number;

declare const kDVDFeaturesTestWriteMask: number;

declare const kDVDFeaturesWriteOnceBit: number;

declare const kDVDFeaturesWriteOnceMask: number;

declare const kDVDKeyClassCSS_CPPM_CPRM: number;

declare const kDVDKeyClassRSSA: number;

declare const kDVDKeyFormatAGID_CPRM: number;

declare const kDVDKeyFormatAGID_CSS: number;

declare const kDVDKeyFormatAGID_CSS2: number;

declare const kDVDKeyFormatAGID_Invalidate: number;

declare const kDVDKeyFormatASF: number;

declare const kDVDKeyFormatChallengeKey: number;

declare const kDVDKeyFormatKey1: number;

declare const kDVDKeyFormatKey2: number;

declare const kDVDKeyFormatRegionState: number;

declare const kDVDKeyFormatSetRegion: number;

declare const kDVDKeyFormatTitleKey: number;

declare const kDVDMediaTypeHDR: number;

declare const kDVDMediaTypeHDRAM: number;

declare const kDVDMediaTypeHDROM: number;

declare const kDVDMediaTypeHDRW: number;

declare const kDVDMediaTypeMax: number;

declare const kDVDMediaTypeMin: number;

declare const kDVDMediaTypePlusR: number;

declare const kDVDMediaTypePlusRW: number;

declare const kDVDMediaTypeR: number;

declare const kDVDMediaTypeRAM: number;

declare const kDVDMediaTypeROM: number;

declare const kDVDMediaTypeRW: number;

declare const kDVDMediaTypeUnknown: number;

declare const kDVDRZoneInfoAddressTypeBorderNumber: number;

declare const kDVDRZoneInfoAddressTypeLBA: number;

declare const kDVDRZoneInfoAddressTypeRZoneNumber: number;

declare const kDVDRegionalPlaybackControlSchemePhase1: number;

declare const kDVDRegionalPlaybackControlSchemePhase2: number;

declare const kDVDStructureFormatCopyrightInfo: number;

declare const kDVDStructureFormatDiscKeyInfo: number;

declare const kDVDStructureFormatManufacturingInfo: number;

declare const kDVDStructureFormatPhysicalFormatInfo: number;

declare const kDiscStatusComplete: number;

declare const kDiscStatusEmpty: number;

declare const kDiscStatusErasableMask: number;

declare const kDiscStatusIncomplete: number;

declare const kDiscStatusMask: number;

declare const kDiscStatusOther: number;

declare const kDisplayModeAcceleratorBackedFlag: number;

declare const kDisplayModeAlwaysShowFlag: number;

declare const kDisplayModeBuiltInFlag: number;

declare const kDisplayModeDefaultFlag: number;

declare const kDisplayModeInterlacedFlag: number;

declare const kDisplayModeNativeFlag: number;

declare const kDisplayModeNeverShowFlag: number;

declare const kDisplayModeNotGraphicsQualityFlag: number;

declare const kDisplayModeNotPresetFlag: number;

declare const kDisplayModeNotResizeFlag: number;

declare const kDisplayModeRequiresPanFlag: number;

declare const kDisplayModeSafeFlag: number;

declare const kDisplayModeSafetyFlags: number;

declare const kDisplayModeSimulscanFlag: number;

declare const kDisplayModeStretchedFlag: number;

declare const kDisplayModeTelevisionFlag: number;

declare const kDisplayModeValidFlag: number;

declare const kDisplayModeValidForAirPlayFlag: number;

declare const kDisplayModeValidForHiResFlag: number;

declare const kDisplayModeValidForMirroringFlag: number;

declare const kDisplayModeValidateAgainstDisplay: number;

declare const kDisplayProductIDGeneric: number;

declare const kDisplaySubPixelConfigurationDelta: number;

declare const kDisplaySubPixelConfigurationQuad: number;

declare const kDisplaySubPixelConfigurationStripe: number;

declare const kDisplaySubPixelConfigurationStripeOffset: number;

declare const kDisplaySubPixelConfigurationUndefined: number;

declare const kDisplaySubPixelLayoutBGR: number;

declare const kDisplaySubPixelLayoutQuadGBL: number;

declare const kDisplaySubPixelLayoutQuadGBR: number;

declare const kDisplaySubPixelLayoutRGB: number;

declare const kDisplaySubPixelLayoutUndefined: number;

declare const kDisplaySubPixelShapeElliptical: number;

declare const kDisplaySubPixelShapeOval: number;

declare const kDisplaySubPixelShapeRectangular: number;

declare const kDisplaySubPixelShapeRound: number;

declare const kDisplaySubPixelShapeSquare: number;

declare const kDisplaySubPixelShapeUndefined: number;

declare const kDisplayVendorIDUnknown: number;

declare const kExtFieldsValidBit: number;

declare const kExtFieldsValidMask: number;

declare const kFCPCommandAddress: number;

declare const kFCPResponseAddress: number;

declare const kFWAVCAsyncPlug0: number;

declare const kFWAVCAsyncPlug1: number;

declare const kFWAVCAsyncPlug10: number;

declare const kFWAVCAsyncPlug11: number;

declare const kFWAVCAsyncPlug12: number;

declare const kFWAVCAsyncPlug13: number;

declare const kFWAVCAsyncPlug14: number;

declare const kFWAVCAsyncPlug15: number;

declare const kFWAVCAsyncPlug16: number;

declare const kFWAVCAsyncPlug17: number;

declare const kFWAVCAsyncPlug18: number;

declare const kFWAVCAsyncPlug19: number;

declare const kFWAVCAsyncPlug2: number;

declare const kFWAVCAsyncPlug20: number;

declare const kFWAVCAsyncPlug21: number;

declare const kFWAVCAsyncPlug22: number;

declare const kFWAVCAsyncPlug23: number;

declare const kFWAVCAsyncPlug24: number;

declare const kFWAVCAsyncPlug25: number;

declare const kFWAVCAsyncPlug26: number;

declare const kFWAVCAsyncPlug27: number;

declare const kFWAVCAsyncPlug28: number;

declare const kFWAVCAsyncPlug29: number;

declare const kFWAVCAsyncPlug3: number;

declare const kFWAVCAsyncPlug30: number;

declare const kFWAVCAsyncPlug4: number;

declare const kFWAVCAsyncPlug5: number;

declare const kFWAVCAsyncPlug6: number;

declare const kFWAVCAsyncPlug7: number;

declare const kFWAVCAsyncPlug8: number;

declare const kFWAVCAsyncPlug9: number;

declare const kFWAVCAsyncPlugAny: number;

declare const kFWAVCConsumerMode_JUNK: number;

declare const kFWAVCConsumerMode_LAST: number;

declare const kFWAVCConsumerMode_LESS: number;

declare const kFWAVCConsumerMode_LOST: number;

declare const kFWAVCConsumerMode_MORE: number;

declare const kFWAVCProducerMode_SEND: number;

declare const kFWAVCProducerMode_TOSS: number;

declare const kFWAVCStateBusResumed: number;

declare const kFWAVCStateBusSuspended: number;

declare const kFWAVCStateDeviceRemoved: number;

declare const kFWAVCStatePlugDisconnected: number;

declare const kFWAVCStatePlugReconnected: number;

declare const kFWAckBusyA: number;

declare const kFWAckBusyB: number;

declare const kFWAckBusyX: number;

declare const kFWAckComplete: number;

declare const kFWAckDataError: number;

declare const kFWAckPending: number;

declare const kFWAckTimeout: number;

declare const kFWAckTypeError: number;

declare const kFWAddressBusID: number;

declare const kFWAddressBusIDPhase: number;

declare const kFWAddressNodeID: number;

declare const kFWAddressNodeIDPhase: number;

declare const kFWBIBBmc: number;

declare const kFWBIBBusName: number;

declare const kFWBIBBusNameAddress: number;

declare const kFWBIBCmc: number;

declare const kFWBIBCycClkAcc: number;

declare const kFWBIBCycClkAccPhase: number;

declare const kFWBIBGeneration: number;

declare const kFWBIBGenerationPhase: number;

declare const kFWBIBHeaderAddress: number;

declare const kFWBIBIrmc: number;

declare const kFWBIBIsc: number;

declare const kFWBIBLinkSpeed: number;

declare const kFWBIBLinkSpeedPhase: number;

declare const kFWBIBMaxROM: number;

declare const kFWBIBMaxROMPhase: number;

declare const kFWBIBMaxRec: number;

declare const kFWBIBMaxRecPhase: number;

declare const kFWBIBNodeCapabilitiesAddress: number;

declare const kFWBIBNodeUniqueIDHiAddress: number;

declare const kFWBIBNodeUniqueIDLoAddress: number;

declare const kFWBadNodeID: number;

declare const kFWBroadcastAddress: number;

declare const kFWBroadcastNodeID: number;

declare const kFWBusManagerArbitrationTimeoutDuration: number;

declare const kFWCSRStateCMstr: number;

declare const kFWCSRStateGone: number;

declare const kFWCSRStateLinkOff: number;

declare const kFWCommandInterfaceAbsolute: number;

declare const kFWCommandInterfaceForceBlockRequest: number;

declare const kFWCommandInterfaceForceCopyAlways: number;

declare const kFWCommandInterfaceForceNoCopy: number;

declare const kFWCommandInterfaceSyncExecute: number;

declare const kFWCommandNoFlags: number;

declare const kFWDCLCycleEvent: number;

declare const kFWDCLImmediateEvent: number;

declare const kFWDCLOpDynamicFlag: number;

declare const kFWDCLOpFlagMask: number;

declare const kFWDCLOpFlagPhase: number;

declare const kFWDCLOpVendorDefinedFlag: number;

declare const kFWDCLSyBitsEvent: number;

declare const kFWDontFailOnReset: number;

declare const kFWFailOnReset: number;

declare const kFWIsochChanNum: number;

declare const kFWIsochChanNumPhase: number;

declare const kFWIsochChannelDefaultFlags: number;

declare const kFWIsochChannelDoNotResumeOnWake: number;

declare const kFWIsochDataLength: number;

declare const kFWIsochDataLengthPhase: number;

declare const kFWIsochSy: number;

declare const kFWIsochSyPhase: number;

declare const kFWIsochTCode: number;

declare const kFWIsochTCodePhase: number;

declare const kFWIsochTag: number;

declare const kFWIsochTagPhase: number;

declare const kFWLocalBusAddress: number;

declare const kFWLocalBusID: number;

declare const kFWMaxBusses: number;

declare const kFWMaxNodeHops: number;

declare const kFWMaxNodesPerBus: number;

declare const kFWResponseAddressError: number;

declare const kFWResponseBusResetError: number;

declare const kFWResponseComplete: number;

declare const kFWResponseConflictError: number;

declare const kFWResponseDataError: number;

declare const kFWResponsePending: number;

declare const kFWResponseTypeError: number;

declare const kFWSBP2AbortTask: number;

declare const kFWSBP2AbortTaskSet: number;

declare const kFWSBP2CommandCheckGeneration: number;

declare const kFWSBP2CommandCompleteNotify: number;

declare const kFWSBP2CommandDummyORB: number;

declare const kFWSBP2CommandFixedSize: number;

declare const kFWSBP2CommandImmediate: number;

declare const kFWSBP2CommandNormalORB: number;

declare const kFWSBP2CommandReservedORB: number;

declare const kFWSBP2CommandTransferDataFromTarget: number;

declare const kFWSBP2CommandVendorORB: number;

declare const kFWSBP2CommandVirtualORBs: number;

declare const kFWSBP2DontSynchronizeMgmtAgent: number;

declare const kFWSBP2ExclusiveLogin: number;

declare const kFWSBP2LogicalUnitReset: number;

declare const kFWSBP2NormalCommandReset: number;

declare const kFWSBP2NormalCommandStatus: number;

declare const kFWSBP2NormalCommandTimeout: number;

declare const kFWSBP2QueryLogins: number;

declare const kFWSBP2TargetReset: number;

declare const kFWSBP2UnsolicitedStatus: number;

declare const kFWVectorCommandInterfaceOrdered: number;

declare const kFireWireCommandAbsolute: number;

declare const kFireWireCommandUseCopy: number;

declare const kFirstIOKitNotificationType: number;

declare const kFixedDeviceBit: number;

declare const kFixedDeviceMask: number;

declare const kFramebufferDisableAltivecAccess: number;

declare const kFramebufferSupportsCopybackCache: number;

declare const kFramebufferSupportsGammaCorrection: number;

declare const kFramebufferSupportsWritethruCache: number;

declare const kGetConfiguration: number;

declare const kGetDescriptor: number;

declare const kGetDeviceStatus: number;

declare const kGetEndpointStatus: number;

declare const kGetInterface: number;

declare const kGetInterfaceStatus: number;

declare const kHIDBootProtocolValue: number;

declare const kHIDKeyboardInterfaceProtocol: number;

declare const kHIDMouseInterfaceProtocol: number;

declare const kHIDNoInterfaceProtocol: number;

declare const kHIDReportProtocolValue: number;

declare const kHIDRqGetIdle: number;

declare const kHIDRqGetProtocol: number;

declare const kHIDRqGetReport: number;

declare const kHIDRqSetIdle: number;

declare const kHIDRqSetProtocol: number;

declare const kHIDRqSetReport: number;

declare const kHIDRtFeatureReport: number;

declare const kHIDRtInputReport: number;

declare const kHIDRtOutputReport: number;

declare const kHardwareCursorDescriptorMajorVersion: number;

declare const kHardwareCursorDescriptorMinorVersion: number;

declare const kHardwareCursorInfoMajorVersion: number;

declare const kHardwareCursorInfoMinorVersion: number;

declare const kHubSuperSpeedProtocol: number;

declare const kINQUIRY_ANSI_VERSION_Mask: number;

declare const kINQUIRY_ANSI_VERSION_NoClaimedConformance: number;

declare const kINQUIRY_ANSI_VERSION_SCSI_1_Compliant: number;

declare const kINQUIRY_ANSI_VERSION_SCSI_2_Compliant: number;

declare const kINQUIRY_ANSI_VERSION_SCSI_SPC_2_Compliant: number;

declare const kINQUIRY_ANSI_VERSION_SCSI_SPC_3_Compliant: number;

declare const kINQUIRY_ANSI_VERSION_SCSI_SPC_Compliant: number;

declare const kINQUIRY_Byte3_AERC_Bit: number;

declare const kINQUIRY_Byte3_AERC_Mask: number;

declare const kINQUIRY_Byte3_HISUP_Bit: number;

declare const kINQUIRY_Byte3_HISUP_Mask: number;

declare const kINQUIRY_Byte3_NORMACA_Bit: number;

declare const kINQUIRY_Byte3_NORMACA_Mask: number;

declare const kINQUIRY_Byte56_CLOCKING_Mask: number;

declare const kINQUIRY_Byte56_CLOCKING_ONLY_DT: number;

declare const kINQUIRY_Byte56_CLOCKING_ONLY_ST: number;

declare const kINQUIRY_Byte56_CLOCKING_ST_AND_DT: number;

declare const kINQUIRY_Byte56_IUS_Bit: number;

declare const kINQUIRY_Byte56_IUS_Mask: number;

declare const kINQUIRY_Byte56_Offset: number;

declare const kINQUIRY_Byte56_QAS_Bit: number;

declare const kINQUIRY_Byte56_QAS_Mask: number;

declare const kINQUIRY_Byte5_3PC_Bit: number;

declare const kINQUIRY_Byte5_3PC_Mask: number;

declare const kINQUIRY_Byte5_ACC_Bit: number;

declare const kINQUIRY_Byte5_ACC_Mask: number;

declare const kINQUIRY_Byte5_ExplicitTPGS_Bit: number;

declare const kINQUIRY_Byte5_ExplicitTPGS_Mask: number;

declare const kINQUIRY_Byte5_ImplicitTPGS_Bit: number;

declare const kINQUIRY_Byte5_ImplicitTPGS_Mask: number;

declare const kINQUIRY_Byte5_PROTECT_Bit: number;

declare const kINQUIRY_Byte5_PROTECT_Mask: number;

declare const kINQUIRY_Byte5_SCCS_Bit: number;

declare const kINQUIRY_Byte5_SCCS_Mask: number;

declare const kINQUIRY_Byte6_ADDR16_Bit: number;

declare const kINQUIRY_Byte6_ADDR16_Mask: number;

declare const kINQUIRY_Byte6_BQUE_Bit: number;

declare const kINQUIRY_Byte6_BQUE_Mask: number;

declare const kINQUIRY_Byte6_ENCSERV_Bit: number;

declare const kINQUIRY_Byte6_ENCSERV_Mask: number;

declare const kINQUIRY_Byte6_MCHNGR_Bit: number;

declare const kINQUIRY_Byte6_MCHNGR_Mask: number;

declare const kINQUIRY_Byte6_MULTIP_Bit: number;

declare const kINQUIRY_Byte6_MULTIP_Mask: number;

declare const kINQUIRY_Byte6_Offset: number;

declare const kINQUIRY_Byte6_VS_Bit: number;

declare const kINQUIRY_Byte6_VS_Mask: number;

declare const kINQUIRY_Byte7_CMDQUE_Bit: number;

declare const kINQUIRY_Byte7_CMDQUE_Mask: number;

declare const kINQUIRY_Byte7_LINKED_Bit: number;

declare const kINQUIRY_Byte7_LINKED_Mask: number;

declare const kINQUIRY_Byte7_Offset: number;

declare const kINQUIRY_Byte7_RELADR_Bit: number;

declare const kINQUIRY_Byte7_RELADR_Mask: number;

declare const kINQUIRY_Byte7_SYNC_Bit: number;

declare const kINQUIRY_Byte7_SYNC_Mask: number;

declare const kINQUIRY_Byte7_TRANDIS_Bit: number;

declare const kINQUIRY_Byte7_TRANDIS_Mask: number;

declare const kINQUIRY_Byte7_VS_Bit: number;

declare const kINQUIRY_Byte7_VS_Mask: number;

declare const kINQUIRY_Byte7_WBUS16_Bit: number;

declare const kINQUIRY_Byte7_WBUS16_Mask: number;

declare const kINQUIRY_ECMA_VERSION_Mask: number;

declare const kINQUIRY_ISO_IEC_VERSION_Mask: number;

declare const kINQUIRY_MaximumDataSize: number;

declare const kINQUIRY_PERIPHERAL_QUALIFIER_Connected: number;

declare const kINQUIRY_PERIPHERAL_QUALIFIER_Mask: number;

declare const kINQUIRY_PERIPHERAL_QUALIFIER_NotSupported: number;

declare const kINQUIRY_PERIPHERAL_QUALIFIER_SupportedButNotConnected: number;

declare const kINQUIRY_PERIPHERAL_RMB_BitMask: number;

declare const kINQUIRY_PERIPHERAL_RMB_MediumFixed: number;

declare const kINQUIRY_PERIPHERAL_RMB_MediumRemovable: number;

declare const kINQUIRY_PERIPHERAL_TYPE_AutomationDriveInterface: number;

declare const kINQUIRY_PERIPHERAL_TYPE_CDROM_MMCDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_CommunicationsSSCDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_DirectAccessSBCDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_EnclosureServicesSESDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_Mask: number;

declare const kINQUIRY_PERIPHERAL_TYPE_MediumChangerSMCDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_ObjectBasedStorageDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_OpticalCardReaderOCRWDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_OpticalMemorySBCDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_PrinterSSCDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_ProcessorSPCDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_ScannerSCSI2Device: number;

declare const kINQUIRY_PERIPHERAL_TYPE_SequentialAccessSSCDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_SimplifiedDirectAccessRBCDevice: number;

declare const kINQUIRY_PERIPHERAL_TYPE_StorageArrayControllerSCC2Device: number;

declare const kINQUIRY_PERIPHERAL_TYPE_UnknownOrNoDeviceType: number;

declare const kINQUIRY_PERIPHERAL_TYPE_WellKnownLogicalUnit: number;

declare const kINQUIRY_PERIPHERAL_TYPE_WriteOnceSBCDevice: number;

declare const kINQUIRY_PRODUCT_IDENTIFICATION_Length: number;

declare const kINQUIRY_PRODUCT_REVISION_LEVEL_Length: number;

declare const kINQUIRY_Page00_PageCode: number;

declare const kINQUIRY_Page80_PageCode: number;

declare const kINQUIRY_Page83_AssociationDevice: number;

declare const kINQUIRY_Page83_AssociationLogicalUnit: number;

declare const kINQUIRY_Page83_AssociationMask: number;

declare const kINQUIRY_Page83_AssociationShift: number;

declare const kINQUIRY_Page83_AssociationTargetDevice: number;

declare const kINQUIRY_Page83_AssociationTargetPort: number;

declare const kINQUIRY_Page83_CodeSetASCIIData: number;

declare const kINQUIRY_Page83_CodeSetBinaryData: number;

declare const kINQUIRY_Page83_CodeSetMask: number;

declare const kINQUIRY_Page83_CodeSetReserved: number;

declare const kINQUIRY_Page83_CodeSetUTF8Data: number;

declare const kINQUIRY_Page83_IdentifierTypeIEEE_EUI64: number;

declare const kINQUIRY_Page83_IdentifierTypeLogicalUnitGroup: number;

declare const kINQUIRY_Page83_IdentifierTypeMD5LogicalUnitIdentifier: number;

declare const kINQUIRY_Page83_IdentifierTypeMask: number;

declare const kINQUIRY_Page83_IdentifierTypeNAAIdentifier: number;

declare const kINQUIRY_Page83_IdentifierTypeRelativePortIdentifier: number;

declare const kINQUIRY_Page83_IdentifierTypeSCSINameString: number;

declare const kINQUIRY_Page83_IdentifierTypeTargetPortGroup: number;

declare const kINQUIRY_Page83_IdentifierTypeVendorID: number;

declare const kINQUIRY_Page83_IdentifierTypeVendorSpecific: number;

declare const kINQUIRY_Page83_PageCode: number;

declare const kINQUIRY_Page83_ProtocolIdentifierValidBit: number;

declare const kINQUIRY_Page83_ProtocolIdentifierValidMask: number;

declare const kINQUIRY_Page89_PageCode: number;

declare const kINQUIRY_PageB0_PageCode: number;

declare const kINQUIRY_PageB1_PageCode: number;

declare const kINQUIRY_PageB1_Page_Length: number;

declare const kINQUIRY_PageB2_PageCode: number;

declare const kINQUIRY_PageC0_Features_HasSEP_LUN: number;

declare const kINQUIRY_PageC0_PageCode: number;

declare const kINQUIRY_PageC1_PageCode: number;

declare const kINQUIRY_RESPONSE_DATA_FORMAT_Mask: number;

declare const kINQUIRY_StandardDataHeaderSize: number;

declare const kINQUIRY_VENDOR_IDENTIFICATION_Length: number;

declare const kINQUIRY_VERSION_DESCRIPTOR_NVME: number;

declare const kINQUIRY_VERSION_DESCRIPTOR_SAT: number;

declare const kIO128RGBAFloatPixelFormat: number;

declare const kIO16BE4444PixelFormat: number;

declare const kIO16BE555PixelFormat: number;

declare const kIO16BE565PixelFormat: number;

declare const kIO16LE4444PixelFormat: number;

declare const kIO16LE5551PixelFormat: number;

declare const kIO16LE555PixelFormat: number;

declare const kIO16LE565PixelFormat: number;

declare const kIO1IndexedGrayPixelFormat: number;

declare const kIO1MonochromePixelFormat: number;

declare const kIO24BGRPixelFormat: number;

declare const kIO24RGBPixelFormat: number;

declare const kIO2IndexedGrayPixelFormat: number;

declare const kIO2IndexedPixelFormat: number;

declare const kIO2vuyPixelFormat: number;

declare const kIO32ABGRPixelFormat: number;

declare const kIO32ARGBPixelFormat: number;

declare const kIO32BGRAPixelFormat: number;

declare const kIO32RGBAPixelFormat: number;

declare const kIO4IndexedGrayPixelFormat: number;

declare const kIO4IndexedPixelFormat: number;

declare const kIO64BGRAPixelFormat: number;

declare const kIO64RGBAFloatPixelFormat: number;

declare const kIO8IndexedGrayPixelFormat: number;

declare const kIO8IndexedPixelFormat: number;

declare const kIOATADefaultPerformance: number;

declare const kIOATAFeature48BitLBA: number;

declare const kIOATAFeatureAdvancedPowerManagement: number;

declare const kIOATAFeatureCompactFlash: number;

declare const kIOATAFeaturePowerManagement: number;

declare const kIOATAFeatureSMART: number;

declare const kIOATAFeatureWriteCache: number;

declare const kIOATAMaxBlocksPerXfer: number;

declare const kIOATAMaxPerformance: number;

declare const kIOATAMaxPowerSavings: number;

declare const kIOATAMaximumBlockCount16Bit: number;

declare const kIOATAMaximumBlockCount8Bit: number;

declare const kIOATASectorCount16Bit: number;

declare const kIOATASectorCount8Bit: number;

declare const kIOAccelPrivateID: number;

declare const kIOAccelVolatileSurface: number;

declare const kIOAnalogSetupExpected: number;

declare const kIOAnalogSignalLevel_0700_0000: number;

declare const kIOAnalogSignalLevel_0700_0300: number;

declare const kIOAnalogSignalLevel_0714_0286: number;

declare const kIOAnalogSignalLevel_1000_0400: number;

declare const kIOAsyncCalloutCount: number;

declare const kIOAsyncCalloutFuncIndex: number;

declare const kIOAsyncCalloutRefconIndex: number;

declare const kIOAsyncCompletionNotificationType: number;

declare const kIOAsyncReservedCount: number;

declare const kIOAsyncReservedIndex: number;

declare const kIOAudioBuiltInSystemClockDomain: number;

declare const kIOAudioChannelLabel_Ambisonic_W: number;

declare const kIOAudioChannelLabel_Ambisonic_X: number;

declare const kIOAudioChannelLabel_Ambisonic_Y: number;

declare const kIOAudioChannelLabel_Ambisonic_Z: number;

declare const kIOAudioChannelLabel_Center: number;

declare const kIOAudioChannelLabel_CenterSurround: number;

declare const kIOAudioChannelLabel_CenterSurroundDirect: number;

declare const kIOAudioChannelLabel_ClickTrack: number;

declare const kIOAudioChannelLabel_DialogCentricMix: number;

declare const kIOAudioChannelLabel_Discrete: number;

declare const kIOAudioChannelLabel_Discrete_0: number;

declare const kIOAudioChannelLabel_Discrete_1: number;

declare const kIOAudioChannelLabel_Discrete_10: number;

declare const kIOAudioChannelLabel_Discrete_11: number;

declare const kIOAudioChannelLabel_Discrete_12: number;

declare const kIOAudioChannelLabel_Discrete_13: number;

declare const kIOAudioChannelLabel_Discrete_14: number;

declare const kIOAudioChannelLabel_Discrete_15: number;

declare const kIOAudioChannelLabel_Discrete_2: number;

declare const kIOAudioChannelLabel_Discrete_3: number;

declare const kIOAudioChannelLabel_Discrete_4: number;

declare const kIOAudioChannelLabel_Discrete_5: number;

declare const kIOAudioChannelLabel_Discrete_6: number;

declare const kIOAudioChannelLabel_Discrete_65535: number;

declare const kIOAudioChannelLabel_Discrete_7: number;

declare const kIOAudioChannelLabel_Discrete_8: number;

declare const kIOAudioChannelLabel_Discrete_9: number;

declare const kIOAudioChannelLabel_ForeignLanguage: number;

declare const kIOAudioChannelLabel_Haptic: number;

declare const kIOAudioChannelLabel_HeadphonesLeft: number;

declare const kIOAudioChannelLabel_HeadphonesRight: number;

declare const kIOAudioChannelLabel_HearingImpaired: number;

declare const kIOAudioChannelLabel_LFE2: number;

declare const kIOAudioChannelLabel_LFEScreen: number;

declare const kIOAudioChannelLabel_Left: number;

declare const kIOAudioChannelLabel_LeftCenter: number;

declare const kIOAudioChannelLabel_LeftSurround: number;

declare const kIOAudioChannelLabel_LeftSurroundDirect: number;

declare const kIOAudioChannelLabel_LeftTotal: number;

declare const kIOAudioChannelLabel_LeftWide: number;

declare const kIOAudioChannelLabel_MS_Mid: number;

declare const kIOAudioChannelLabel_MS_Side: number;

declare const kIOAudioChannelLabel_Mono: number;

declare const kIOAudioChannelLabel_Narration: number;

declare const kIOAudioChannelLabel_RearSurroundLeft: number;

declare const kIOAudioChannelLabel_RearSurroundRight: number;

declare const kIOAudioChannelLabel_Right: number;

declare const kIOAudioChannelLabel_RightCenter: number;

declare const kIOAudioChannelLabel_RightSurround: number;

declare const kIOAudioChannelLabel_RightSurroundDirect: number;

declare const kIOAudioChannelLabel_RightTotal: number;

declare const kIOAudioChannelLabel_RightWide: number;

declare const kIOAudioChannelLabel_TopBackCenter: number;

declare const kIOAudioChannelLabel_TopBackLeft: number;

declare const kIOAudioChannelLabel_TopBackRight: number;

declare const kIOAudioChannelLabel_TopCenterSurround: number;

declare const kIOAudioChannelLabel_Unknown: number;

declare const kIOAudioChannelLabel_Unused: number;

declare const kIOAudioChannelLabel_UseCoordinates: number;

declare const kIOAudioChannelLabel_VerticalHeightCenter: number;

declare const kIOAudioChannelLabel_VerticalHeightLeft: number;

declare const kIOAudioChannelLabel_VerticalHeightRight: number;

declare const kIOAudioChannelLabel_XY_X: number;

declare const kIOAudioChannelLabel_XY_Y: number;

declare const kIOAudioClockSelectorTypeADAT9Pin: number;

declare const kIOAudioClockSelectorTypeADATOptical: number;

declare const kIOAudioClockSelectorTypeAESEBU: number;

declare const kIOAudioClockSelectorTypeControl: number;

declare const kIOAudioClockSelectorTypeExternal: number;

declare const kIOAudioClockSelectorTypeInternal: number;

declare const kIOAudioClockSelectorTypeOther: number;

declare const kIOAudioClockSelectorTypeSMPTE: number;

declare const kIOAudioClockSelectorTypeSPDIF: number;

declare const kIOAudioClockSelectorTypeTOSLink: number;

declare const kIOAudioClockSelectorTypeVideo: number;

declare const kIOAudioControlChannelIDAll: number;

declare const kIOAudioControlChannelIDDefaultCenter: number;

declare const kIOAudioControlChannelIDDefaultFrontLeftCenter: number;

declare const kIOAudioControlChannelIDDefaultFrontRightCenter: number;

declare const kIOAudioControlChannelIDDefaultLeft: number;

declare const kIOAudioControlChannelIDDefaultLeftRear: number;

declare const kIOAudioControlChannelIDDefaultRearCenter: number;

declare const kIOAudioControlChannelIDDefaultRight: number;

declare const kIOAudioControlChannelIDDefaultRightRear: number;

declare const kIOAudioControlChannelIDDefaultSub: number;

declare const kIOAudioControlChannelIDDefaultSurroundLeft: number;

declare const kIOAudioControlChannelIDDefaultSurroundRight: number;

declare const kIOAudioControlChannelNumberInactive: number;

declare const kIOAudioControlTypeJack: number;

declare const kIOAudioControlTypeLevel: number;

declare const kIOAudioControlTypeSelector: number;

declare const kIOAudioControlTypeToggle: number;

declare const kIOAudioControlUsageCoreAudioProperty: number;

declare const kIOAudioControlUsageInput: number;

declare const kIOAudioControlUsageOutput: number;

declare const kIOAudioControlUsagePassThru: number;

declare const kIOAudioDeviceCanBeDefaultInput: number;

declare const kIOAudioDeviceCanBeDefaultNothing: number;

declare const kIOAudioDeviceCanBeDefaultOutput: number;

declare const kIOAudioDeviceCanBeSystemOutput: number;

declare const kIOAudioDeviceTransportTypeAVB: number;

declare const kIOAudioDeviceTransportTypeBluetooth: number;

declare const kIOAudioDeviceTransportTypeBuiltIn: number;

declare const kIOAudioDeviceTransportTypeDisplayPort: number;

declare const kIOAudioDeviceTransportTypeFireWire: number;

declare const kIOAudioDeviceTransportTypeHdmi: number;

declare const kIOAudioDeviceTransportTypeNetwork: number;

declare const kIOAudioDeviceTransportTypeOther: number;

declare const kIOAudioDeviceTransportTypePCI: number;

declare const kIOAudioDeviceTransportTypeThunderbolt: number;

declare const kIOAudioDeviceTransportTypeUSB: number;

declare const kIOAudioDeviceTransportTypeVirtual: number;

declare const kIOAudioDeviceTransportTypeWireless: number;

declare const kIOAudioInputPortSubTypeCD: number;

declare const kIOAudioInputPortSubTypeExternalMicrophone: number;

declare const kIOAudioInputPortSubTypeInternalMicrophone: number;

declare const kIOAudioInputPortSubTypeLine: number;

declare const kIOAudioInputPortSubTypeSPDIF: number;

declare const kIOAudioLevelControlNegativeInfinity: number;

declare const kIOAudioLevelControlSubTypeLFEVolume: number;

declare const kIOAudioLevelControlSubTypePRAMVolume: number;

declare const kIOAudioLevelControlSubTypeVolume: number;

declare const kIOAudioNewClockDomain: number;

declare const kIOAudioOutputPortSubTypeExternalSpeaker: number;

declare const kIOAudioOutputPortSubTypeHeadphones: number;

declare const kIOAudioOutputPortSubTypeInternalSpeaker: number;

declare const kIOAudioOutputPortSubTypeLine: number;

declare const kIOAudioOutputPortSubTypeSPDIF: number;

declare const kIOAudioPortTypeInput: number;

declare const kIOAudioPortTypeMixer: number;

declare const kIOAudioPortTypeOutput: number;

declare const kIOAudioPortTypePassThru: number;

declare const kIOAudioPortTypeProcessing: number;

declare const kIOAudioSMPTETimeRunning: number;

declare const kIOAudioSMPTETimeType2398: number;

declare const kIOAudioSMPTETimeType24: number;

declare const kIOAudioSMPTETimeType25: number;

declare const kIOAudioSMPTETimeType2997: number;

declare const kIOAudioSMPTETimeType2997Drop: number;

declare const kIOAudioSMPTETimeType30: number;

declare const kIOAudioSMPTETimeType30Drop: number;

declare const kIOAudioSMPTETimeType50: number;

declare const kIOAudioSMPTETimeType5994: number;

declare const kIOAudioSMPTETimeType5994Drop: number;

declare const kIOAudioSMPTETimeType60: number;

declare const kIOAudioSMPTETimeType60Drop: number;

declare const kIOAudioSMPTETimeValid: number;

declare const kIOAudioSelectorControlSelectionValueCD: number;

declare const kIOAudioSelectorControlSelectionValueExternalMicrophone: number;

declare const kIOAudioSelectorControlSelectionValueExternalSpeaker: number;

declare const kIOAudioSelectorControlSelectionValueHeadphones: number;

declare const kIOAudioSelectorControlSelectionValueInternalMicrophone: number;

declare const kIOAudioSelectorControlSelectionValueInternalSpeaker: number;

declare const kIOAudioSelectorControlSelectionValueLine: number;

declare const kIOAudioSelectorControlSelectionValueNone: number;

declare const kIOAudioSelectorControlSelectionValueSPDIF: number;

declare const kIOAudioSelectorControlSubTypeChannelHighPassFilter: number;

declare const kIOAudioSelectorControlSubTypeChannelLevelInstrumentLevel: number;

declare const kIOAudioSelectorControlSubTypeChannelLevelMicLevel: number;

declare const kIOAudioSelectorControlSubTypeChannelLevelMinus10dBV: number;

declare const kIOAudioSelectorControlSubTypeChannelLevelMinus20dBV: number;

declare const kIOAudioSelectorControlSubTypeChannelLevelPlus4dBu: number;

declare const kIOAudioSelectorControlSubTypeChannelNominalLineLevel: number;

declare const kIOAudioSelectorControlSubTypeClockSource: number;

declare const kIOAudioSelectorControlSubTypeDestination: number;

declare const kIOAudioSelectorControlSubTypeInput: number;

declare const kIOAudioSelectorControlSubTypeOutput: number;

declare const kIOAudioStreamAlignmentHighByte: number;

declare const kIOAudioStreamAlignmentLowByte: number;

declare const kIOAudioStreamByteOrderBigEndian: number;

declare const kIOAudioStreamByteOrderLittleEndian: number;

declare const kIOAudioStreamNumericRepresentationIEEE754Float: number;

declare const kIOAudioStreamNumericRepresentationSignedInt: number;

declare const kIOAudioStreamNumericRepresentationUnsignedInt: number;

declare const kIOAudioStreamSampleFormat1937AC3: number;

declare const kIOAudioStreamSampleFormat1937MPEG1: number;

declare const kIOAudioStreamSampleFormat1937MPEG2: number;

declare const kIOAudioStreamSampleFormatAC3: number;

declare const kIOAudioStreamSampleFormatALaw: number;

declare const kIOAudioStreamSampleFormatIEEEFloat: number;

declare const kIOAudioStreamSampleFormatLinearPCM: number;

declare const kIOAudioStreamSampleFormatMPEG: number;

declare const kIOAudioStreamSampleFormatMuLaw: number;

declare const kIOAudioStreamSampleFormatTimeCode: number;

declare const kIOAudioTimeStampHostTimeValid: number;

declare const kIOAudioTimeStampRateScalarValid: number;

declare const kIOAudioTimeStampSMPTETimeValid: number;

declare const kIOAudioTimeStampSampleHostTimeValid: number;

declare const kIOAudioTimeStampSampleTimeValid: number;

declare const kIOAudioTimeStampWordClockTimeValid: number;

declare const kIOAudioToggleControlSubTypeLFEMute: number;

declare const kIOAudioToggleControlSubTypeMute: number;

declare const kIOAudioToggleControlSubTypePhantomPower: number;

declare const kIOAudioToggleControlSubTypePhaseInvert: number;

declare const kIOAudioToggleControlSubTypeSolo: number;

declare const kIOAudioToggleControlSubTypeiSubAttach: number;

declare const kIOBatteryCharge: number;

declare const kIOBatteryChargerConnect: number;

declare const kIOBatteryInstalled: number;

declare const kIOBitsPerColorComponent10: number;

declare const kIOBitsPerColorComponent12: number;

declare const kIOBitsPerColorComponent16: number;

declare const kIOBitsPerColorComponent6: number;

declare const kIOBitsPerColorComponent8: number;

declare const kIOBitsPerColorComponentNotSupported: number;

declare const kIOBlitAllOptions: number;

declare const kIOBlitBeamSync: number;

declare const kIOBlitBeamSyncAlways: number;

declare const kIOBlitBeamSyncSpin: number;

declare const kIOBlitBeamSyncSwaps: number;

declare const kIOBlitBlendOperation: number;

declare const kIOBlitColorSpaceTypes: number;

declare const kIOBlitCopyOperation: number;

declare const kIOBlitDestFramebuffer: number;

declare const kIOBlitFixedSource: number;

declare const kIOBlitFlushWithSwap: number;

declare const kIOBlitFramebufferDestination: number;

declare const kIOBlitHasCGSSurface: number;

declare const kIOBlitHighlightOperation: number;

declare const kIOBlitMemoryRequiresHostFlush: number;

declare const kIOBlitOrOperation: number;

declare const kIOBlitReferenceSource: number;

declare const kIOBlitSourceCGSSurface: number;

declare const kIOBlitSourceDefault: number;

declare const kIOBlitSourceFramebuffer: number;

declare const kIOBlitSourceIsSame: number;

declare const kIOBlitSourceMemory: number;

declare const kIOBlitSourceOOLMemory: number;

declare const kIOBlitSourceOOLPattern: number;

declare const kIOBlitSourcePattern: number;

declare const kIOBlitSourceSolid: number;

declare const kIOBlitSurfaceDestination: number;

declare const kIOBlitSynchronizeFlushHostWrites: number;

declare const kIOBlitSynchronizeWaitBeamExit: number;

declare const kIOBlitTypeColorSpaceConvert: number;

declare const kIOBlitTypeCopyRects: number;

declare const kIOBlitTypeCopyRegion: number;

declare const kIOBlitTypeDestKeyColorEqual: number;

declare const kIOBlitTypeDestKeyColorModeMask: number;

declare const kIOBlitTypeDestKeyColorNotEqual: number;

declare const kIOBlitTypeHideCursor: number;

declare const kIOBlitTypeLines: number;

declare const kIOBlitTypeMonoExpand: number;

declare const kIOBlitTypeMoveCursor: number;

declare const kIOBlitTypeOperationMask: number;

declare const kIOBlitTypeOperationShift: number;

declare const kIOBlitTypeOperationType0: number;

declare const kIOBlitTypeOperationTypeMask: number;

declare const kIOBlitTypeRects: number;

declare const kIOBlitTypeScale: number;

declare const kIOBlitTypeScanlines: number;

declare const kIOBlitTypeShowCursor: number;

declare const kIOBlitTypeSourceKeyColorEqual: number;

declare const kIOBlitTypeSourceKeyColorModeMask: number;

declare const kIOBlitTypeSourceKeyColorNotEqual: number;

declare const kIOBlitTypeVerbMask: number;

declare const kIOBlitUnlockWithSwap: number;

declare const kIOBlitWaitAll: number;

declare const kIOBlitWaitAll2D: number;

declare const kIOBlitWaitCheck: number;

declare const kIOBlitWaitContext: number;

declare const kIOBlitWaitGlobal: number;

declare const kIOBlitXorOperation: number;

declare const kIOBuiltinPanelPowerAttribute: number;

declare const kIOCFSerializeToBinary: number;

declare const kIOCLUTPixels: number;

declare const kIOCSyncDisable: number;

declare const kIOCapturedAttribute: number;

declare const kIOCatalogAddDrivers: number;

declare const kIOCatalogAddDriversNoMatch: number;

declare const kIOCatalogGetCacheMissList: number;

declare const kIOCatalogGetContents: number;

declare const kIOCatalogGetModuleDemandList: number;

declare const kIOCatalogGetROMMkextList: number;

declare const kIOCatalogKextdActive: number;

declare const kIOCatalogKextdFinishedLaunching: number;

declare const kIOCatalogModuleTerminate: number;

declare const kIOCatalogModuleUnload: number;

declare const kIOCatalogRemoveDrivers: number;

declare const kIOCatalogRemoveDriversNoMatch: number;

declare const kIOCatalogRemoveKernelLinker__Removed: number;

declare const kIOCatalogResetDefault: number;

declare const kIOCatalogResetDrivers: number;

declare const kIOCatalogResetDriversNoMatch: number;

declare const kIOCatalogServiceTerminate: number;

declare const kIOCatalogStartMatching__Removed: number;

declare const kIOClamshellStateAttribute: number;

declare const kIOColorimetryAdobeRGB: number;

declare const kIOColorimetryBT2020: number;

declare const kIOColorimetryBT2100: number;

declare const kIOColorimetryBT601: number;

declare const kIOColorimetryBT709: number;

declare const kIOColorimetryDCIP3: number;

declare const kIOColorimetryNativeRGB: number;

declare const kIOColorimetryNotSupported: number;

declare const kIOColorimetryWGRGB: number;

declare const kIOColorimetrysRGB: number;

declare const kIOColorimetryxvYCC: number;

declare const kIOConnectMethodVarOutputSize: number;

declare const kIOConnectionBuiltIn: number;

declare const kIOConnectionStereoSync: number;

declare const kIOCopybackCache: number;

declare const kIOCopybackInnerCache: number;

declare const kIOCursorControlAttribute: number;

declare const kIODPEventAutomatedTestRequest: number;

declare const kIODPEventContentProtection: number;

declare const kIODPEventForceRetrain: number;

declare const kIODPEventIdle: number;

declare const kIODPEventMCCS: number;

declare const kIODPEventRemoteControlCommandPending: number;

declare const kIODPEventSinkSpecific: number;

declare const kIODPEventStart: number;

declare const kIODSCBlockPredEnable: number;

declare const kIODefaultCache: number;

declare const kIODefaultMemoryType: number;

declare const kIODeferCLUTSetAttribute: number;

declare const kIODetailedTimingValid: number;

declare const kIODigitalSignal: number;

declare const kIODisplayColorMode: number;

declare const kIODisplayDitherAll: number;

declare const kIODisplayDitherDefault: number;

declare const kIODisplayDitherDisable: number;

declare const kIODisplayDitherFrameRateControl: number;

declare const kIODisplayDitherRGBShift: number;

declare const kIODisplayDitherSpatial: number;

declare const kIODisplayDitherTemporal: number;

declare const kIODisplayDitherYCbCr422Shift: number;

declare const kIODisplayDitherYCbCr444Shift: number;

declare const kIODisplayMatchingInfo: number;

declare const kIODisplayModeIDBootProgrammable: number;

declare const kIODisplayModeIDReservedBase: number;

declare const kIODisplayNeedsCEAUnderscan: number;

declare const kIODisplayNoProductName: number;

declare const kIODisplayOnlyPreferredName: number;

declare const kIODisplayPowerStateMinUsable: number;

declare const kIODisplayPowerStateOff: number;

declare const kIODisplayPowerStateOn: number;

declare const kIODisplayRGBColorComponentBits10: number;

declare const kIODisplayRGBColorComponentBits12: number;

declare const kIODisplayRGBColorComponentBits14: number;

declare const kIODisplayRGBColorComponentBits16: number;

declare const kIODisplayRGBColorComponentBits6: number;

declare const kIODisplayRGBColorComponentBits8: number;

declare const kIODisplayRGBColorComponentBitsUnknown: number;

declare const kIODisplayYCbCr422ColorComponentBits10: number;

declare const kIODisplayYCbCr422ColorComponentBits12: number;

declare const kIODisplayYCbCr422ColorComponentBits14: number;

declare const kIODisplayYCbCr422ColorComponentBits16: number;

declare const kIODisplayYCbCr422ColorComponentBits6: number;

declare const kIODisplayYCbCr422ColorComponentBits8: number;

declare const kIODisplayYCbCr422ColorComponentBitsUnknown: number;

declare const kIODisplayYCbCr444ColorComponentBits10: number;

declare const kIODisplayYCbCr444ColorComponentBits12: number;

declare const kIODisplayYCbCr444ColorComponentBits14: number;

declare const kIODisplayYCbCr444ColorComponentBits16: number;

declare const kIODisplayYCbCr444ColorComponentBits6: number;

declare const kIODisplayYCbCr444ColorComponentBits8: number;

declare const kIODisplayYCbCr444ColorComponentBitsUnknown: number;

declare const kIODriverPowerAttribute: number;

declare const kIODynamicRangeDolbyNormalMode: number;

declare const kIODynamicRangeDolbyTunnelMode: number;

declare const kIODynamicRangeHDR10: number;

declare const kIODynamicRangeNotSupported: number;

declare const kIODynamicRangeSDR: number;

declare const kIODynamicRangeTraditionalGammaHDR: number;

declare const kIOEthernetWakeOnMagicPacket: number;

declare const kIOEthernetWakeOnPacketAddressMatch: number;

declare const kIOFBAVSignalTypeDP: number;

declare const kIOFBAVSignalTypeDVI: number;

declare const kIOFBAVSignalTypeHDMI: number;

declare const kIOFBAVSignalTypeUnknown: number;

declare const kIOFBAVSignalTypeVGA: number;

declare const kIOFBBitRateHBR: number;

declare const kIOFBBitRateHBR2: number;

declare const kIOFBBitRateRBR: number;

declare const kIOFBBlueGammaScaleAttribute: number;

declare const kIOFBChangedInterruptType: number;

declare const kIOFBConnectInterruptType: number;

declare const kIOFBCurrentShmemVersion: number;

declare const kIOFBCursorHWCapable: number;

declare const kIOFBCursorImageNew: number;

declare const kIOFBCursorMemory: number;

declare const kIOFBDisplayPortInterruptType: number;

declare const kIOFBDisplayPortLinkChangeInterruptType: number;

declare const kIOFBDisplayPortTrainingAttribute: number;

declare const kIOFBDisplayState: number;

declare const kIOFBDisplayState_AlreadyActive: number;

declare const kIOFBDisplayState_Mask: number;

declare const kIOFBDisplayState_PipelineBlack: number;

declare const kIOFBDisplayState_RestoredProfile: number;

declare const kIOFBFrameInterruptType: number;

declare const kIOFBGreenGammaScaleAttribute: number;

declare const kIOFBHBLInterruptType: number;

declare const kIOFBHDCPLimit_AllowAll: number;

declare const kIOFBHDCPLimit_NoHDCP1x: number;

declare const kIOFBHDCPLimit_NoHDCP20Type0: number;

declare const kIOFBHDCPLimit_NoHDCP20Type1: number;

declare const kIOFBHDRMetaDataAttribute: number;

declare const kIOFBHardwareCursorActive: number;

declare const kIOFBHardwareCursorInVRAM: number;

declare const kIOFBLimitHDCPAttribute: number;

declare const kIOFBLimitHDCPStateAttribute: number;

declare const kIOFBLinkDownspreadMax: number;

declare const kIOFBLinkDownspreadNone: number;

declare const kIOFBLinkPreEmphasisLevel0: number;

declare const kIOFBLinkPreEmphasisLevel1: number;

declare const kIOFBLinkPreEmphasisLevel2: number;

declare const kIOFBLinkPreEmphasisLevel3: number;

declare const kIOFBLinkScramblerAlternate: number;

declare const kIOFBLinkScramblerNormal: number;

declare const kIOFBLinkVoltageLevel0: number;

declare const kIOFBLinkVoltageLevel1: number;

declare const kIOFBLinkVoltageLevel2: number;

declare const kIOFBLinkVoltageLevel3: number;

declare const kIOFBMCCSInterruptType: number;

declare const kIOFBMaxCursorDepth: number;

declare const kIOFBMaxCursorFrames: number;

declare const kIOFBMaxCursorWidth: number;

declare const kIOFBNS_Dim: number;

declare const kIOFBNS_DisplayStateMask: number;

declare const kIOFBNS_DisplayStateShift: number;

declare const kIOFBNS_Doze: number;

declare const kIOFBNS_GenerationMask: number;

declare const kIOFBNS_GenerationShift: number;

declare const kIOFBNS_MessageMask: number;

declare const kIOFBNS_Rendezvous: number;

declare const kIOFBNS_Sleep: number;

declare const kIOFBNS_UnDim: number;

declare const kIOFBNS_Wake: number;

declare const kIOFBNumCursorFrames: number;

declare const kIOFBNumCursorFramesShift: number;

declare const kIOFBOfflineInterruptType: number;

declare const kIOFBOnlineInterruptType: number;

declare const kIOFBRedGammaScaleAttribute: number;

declare const kIOFBServerConnectType: number;

declare const kIOFBSharedConnectType: number;

declare const kIOFBShmemCursorNumFramesMask: number;

declare const kIOFBShmemCursorNumFramesShift: number;

declare const kIOFBShmemVersionMask: number;

declare const kIOFBStop: number;

declare const kIOFBSystemAperture: number;

declare const kIOFBTenPtOneShmemVersion: number;

declare const kIOFBTenPtTwoShmemVersion: number;

declare const kIOFBUserRequestProbe: number;

declare const kIOFBVBLInterruptType: number;

declare const kIOFBVariableRefreshRate: number;

declare const kIOFBWakeInterruptType: number;

declare const kIOFWDisableAllPhysicalAccess: number;

declare const kIOFWDisablePhyOnSleep: number;

declare const kIOFWDisablePhysicalAccess: number;

declare const kIOFWEnableRetryOnAckD: number;

declare const kIOFWLimitAsyncPacketSize: number;

declare const kIOFWMustBeRoot: number;

declare const kIOFWMustHaveGap63: number;

declare const kIOFWMustNotBeRoot: number;

declare const kIOFWSWVers_KPF: number;

declare const kIOFWSpecID_AAPL: number;

declare const kIOFixedCLUTPixels: number;

declare const kIOGDiagnoseConnectType: number;

declare const kIOGDiagnoseGTraceType: number;

declare const kIOGraphicsEngineContext: number;

declare const kIOGraphicsEngineContextVersion: number;

declare const kIOHIDActivityDisplayOn: number;

declare const kIOHIDActivityUserIdle: number;

declare const kIOHIDCapsLockState: number;

declare const kIOHIDEventNotification: number;

declare const kIOHIDEventQueueTypeKernel: number;

declare const kIOHIDEventQueueTypeUser: number;

declare const kIOHIDEventSystemConnectType: number;

declare const kIOHIDGlobalMemory: number;

declare const kIOHIDNumLockState: number;

declare const kIOHIDOpenedByEventSystem: number;

declare const kIOHIDOpenedByFastPathClient: number;

declare const kIOHIDOptionsTypeNone: number;

declare const kIOHIDOptionsTypeSeizeDevice: number;

declare const kIOHIDParamConnectType: number;

declare const kIOHIDPostHIDManagerEvent: number;

declare const kIOHIDQueueOptionsTypeEnqueueAll: number;

declare const kIOHIDQueueOptionsTypeNone: number;

declare const kIOHIDServerConnectType: number;

declare const kIOHIDSetCursorPosition: number;

declare const kIOHIDSetGlobalEventFlags: number;

declare const kIOHIDSetRelativeCursorPosition: number;

declare const kIOHIDStandardTypeANSI: number;

declare const kIOHIDStandardTypeISO: number;

declare const kIOHIDStandardTypeJIS: number;

declare var kIOHIDTransactionOptionDefaultOutputValue: number;

declare const kIOHSyncDisable: number;

declare const kIOHardwareCursorAttribute: number;

declare const kIOHibernatePreviewActive: number;

declare const kIOHibernatePreviewUpdates: number;

declare const kIOI2CBusNumberMask: number;

declare const kIOI2CBusTypeDisplayPort: number;

declare const kIOI2CBusTypeI2C: number;

declare const kIOI2CCombinedTransactionType: number;

declare const kIOI2CDDCciReplyTransactionType: number;

declare const kIOI2CDisplayPortNativeTransactionType: number;

declare const kIOI2CNoTransactionType: number;

declare const kIOI2CSimpleTransactionType: number;

declare const kIOI2CUseSubAddressCommFlag: number;

declare const kIOInhibitCache: number;

declare const kIOInterestCalloutCount: number;

declare const kIOInterestCalloutFuncIndex: number;

declare const kIOInterestCalloutRefconIndex: number;

declare const kIOInterestCalloutServiceIndex: number;

declare const kIOInterlacedCEATiming: number;

declare const kIOKitNoticationMsgSizeMask: number;

declare const kIOKitNoticationTypeMask: number;

declare const kIOKitNoticationTypeSizeAdjShift: number;

declare const kIOMapAnywhere: number;

declare const kIOMapCacheMask: number;

declare const kIOMapCacheShift: number;

declare const kIOMapCopybackCache: number;

declare const kIOMapCopybackInnerCache: number;

declare const kIOMapDefaultCache: number;

declare const kIOMapInhibitCache: number;

declare const kIOMapOverwrite: number;

declare const kIOMapPostedCombinedReordered: number;

declare const kIOMapPostedReordered: number;

declare const kIOMapPostedWrite: number;

declare const kIOMapPrefault: number;

declare const kIOMapReadOnly: number;

declare const kIOMapRealTimeCache: number;

declare const kIOMapReference: number;

declare const kIOMapStatic: number;

declare const kIOMapUnique: number;

declare const kIOMapUserOptionsMask: number;

declare const kIOMapWriteCombineCache: number;

declare const kIOMapWriteThruCache: number;

declare var kIOMasterPortDefault: number;

declare const kIOMatchingCalloutCount: number;

declare const kIOMatchingCalloutFuncIndex: number;

declare const kIOMatchingCalloutRefconIndex: number;

declare const kIOMaxPixelBits: number;

declare const kIOMediaAttributeEjectableMask: number;

declare const kIOMediaAttributeRemovableMask: number;

declare const kIOMediaAttributeReservedMask: number;

declare const kIOMediaStateBusy: number;

declare const kIOMediaStateOffline: number;

declare const kIOMediaStateOnline: number;

declare const kIOMediumEthernet: number;

declare const kIOMediumEthernet1000BaseCX: number;

declare const kIOMediumEthernet1000BaseLX: number;

declare const kIOMediumEthernet1000BaseSX: number;

declare const kIOMediumEthernet1000BaseT: number;

declare const kIOMediumEthernet1000BaseTX: number;

declare const kIOMediumEthernet100BaseFX: number;

declare const kIOMediumEthernet100BaseT2: number;

declare const kIOMediumEthernet100BaseT4: number;

declare const kIOMediumEthernet100BaseTX: number;

declare const kIOMediumEthernet100BaseVG: number;

declare const kIOMediumEthernet10Base2: number;

declare const kIOMediumEthernet10Base5: number;

declare const kIOMediumEthernet10BaseFL: number;

declare const kIOMediumEthernet10BaseSTP: number;

declare const kIOMediumEthernet10BaseT: number;

declare const kIOMediumEthernet10GBaseCX4: number;

declare const kIOMediumEthernet10GBaseLR: number;

declare const kIOMediumEthernet10GBaseSR: number;

declare const kIOMediumEthernet10GBaseT: number;

declare const kIOMediumEthernet2500BaseT: number;

declare const kIOMediumEthernet5000BaseT: number;

declare const kIOMediumEthernetAuto: number;

declare const kIOMediumEthernetHomePNA1: number;

declare const kIOMediumEthernetManual: number;

declare const kIOMediumEthernetNone: number;

declare const kIOMediumIEEE80211: number;

declare const kIOMediumIEEE80211Auto: number;

declare const kIOMediumIEEE80211DS1: number;

declare const kIOMediumIEEE80211DS11: number;

declare const kIOMediumIEEE80211DS2: number;

declare const kIOMediumIEEE80211DS5: number;

declare const kIOMediumIEEE80211FH1: number;

declare const kIOMediumIEEE80211FH2: number;

declare const kIOMediumIEEE80211Manual: number;

declare const kIOMediumIEEE80211None: number;

declare const kIOMediumIEEE80211OptionAdhoc: number;

declare const kIOMediumOptionEEE: number;

declare const kIOMediumOptionFlag0: number;

declare const kIOMediumOptionFlag1: number;

declare const kIOMediumOptionFlag2: number;

declare const kIOMediumOptionFlowControl: number;

declare const kIOMediumOptionFullDuplex: number;

declare const kIOMediumOptionHalfDuplex: number;

declare const kIOMediumOptionLoopback: number;

declare const kIOMirrorAttribute: number;

declare const kIOMirrorDefault: number;

declare const kIOMirrorDefaultAttribute: number;

declare const kIOMirrorForced: number;

declare const kIOMirrorHWClipped: number;

declare const kIOMirrorIsMirrored: number;

declare const kIOMirrorIsPrimary: number;

declare const kIOMonoDirectPixels: number;

declare const kIOMonoInverseDirectPixels: number;

declare const kIONTSCTiming: number;

declare const kIONUCGetNetworkDataCapacityIndex: number;

declare const kIONUCGetNetworkDataHandleIndex: number;

declare const kIONUCLastIndex: number;

declare const kIONUCReadNetworkDataIndex: number;

declare const kIONUCResetNetworkDataIndex: number;

declare const kIONUCWriteNetworkDataIndex: number;

declare const kIONetworkDataAccessTypeMask: number;

declare const kIONetworkDataAccessTypeRead: number;

declare const kIONetworkDataAccessTypeReset: number;

declare const kIONetworkDataAccessTypeSerialize: number;

declare const kIONetworkDataAccessTypeWrite: number;

declare const kIONetworkDataBufferTypeExternal: number;

declare const kIONetworkDataBufferTypeInternal: number;

declare const kIONetworkDataBufferTypeNone: number;

declare const kIONetworkFeatureHWTimeStamp: number;

declare const kIONetworkFeatureHardwareVlan: number;

declare const kIONetworkFeatureMultiPages: number;

declare const kIONetworkFeatureNoBSDWait: number;

declare const kIONetworkFeatureSWTimeStamp: number;

declare const kIONetworkFeatureSoftwareVlan: number;

declare const kIONetworkFeatureTSOIPv4: number;

declare const kIONetworkFeatureTSOIPv6: number;

declare const kIONetworkFeatureTransmitCompletionStatus: number;

declare const kIONetworkInterfaceDisabledState: number;

declare const kIONetworkInterfaceOpenedState: number;

declare const kIONetworkInterfaceRegisteredState: number;

declare const kIONetworkLinkActive: number;

declare const kIONetworkLinkNoNetworkChange: number;

declare const kIONetworkLinkValid: number;

declare const kIONetworkStackRegisterInterfaceAll: number;

declare const kIONetworkStackRegisterInterfaceWithLowestUnit: number;

declare const kIONetworkStackRegisterInterfaceWithUnit: number;

declare const kIONetworkSupportedPacketFilters: number;

declare const kIONoSeparateSyncControl: number;

declare const kIOPALTiming: number;

declare const kIOPMACInstalled: number;

declare const kIOPMACnoChargeCapability: number;

declare const kIOPMAckImplied: number;

declare const kIOPMAllowSleep: number;

declare const kIOPMAssertionLevelOff: number;

declare const kIOPMAssertionLevelOn: number;

declare const kIOPMAuxPowerOn: number;

declare const kIOPMBadSpecification: number;

declare const kIOPMBatteryAtWarn: number;

declare const kIOPMBatteryCharging: number;

declare const kIOPMBatteryDepleted: number;

declare const kIOPMBatteryInstalled: number;

declare const kIOPMBroadcastAggressiveness: number;

declare const kIOPMCannotRaisePower: number;

declare const kIOPMCapabilitiesMask: number;

declare const kIOPMChildClamp: number;

declare const kIOPMChildClamp2: number;

declare const kIOPMClamshellClosed: number;

declare const kIOPMClamshellOpened: number;

declare const kIOPMClamshellStateOnWake: number;

declare const kIOPMClockNormal: number;

declare const kIOPMClockRunning: number;

declare const kIOPMClosedClamshell: number;

declare const kIOPMConfigRetained: number;

declare const kIOPMContextRetained: number;

declare const kIOPMDWOverTemp: number;

declare const kIOPMDeviceUsable: number;

declare const kIOPMDisableClamshell: number;

declare const kIOPMDoze: number;

declare const kIOPMDriverAssertionBluetoothHIDDevicePairedBit: number;

declare const kIOPMDriverAssertionCPUBit: number;

declare const kIOPMDriverAssertionExternalMediaMountedBit: number;

declare const kIOPMDriverAssertionMagicPacketWakeEnabledBit: number;

declare const kIOPMDriverAssertionNetworkKeepAliveActiveBit: number;

declare const kIOPMDriverAssertionPreventDisplaySleepBit: number;

declare const kIOPMDriverAssertionPreventSystemIdleSleepBit: number;

declare const kIOPMDriverAssertionReservedBit5: number;

declare const kIOPMDriverAssertionReservedBit7: number;

declare const kIOPMDriverAssertionUSBExternalDeviceBit: number;

declare const kIOPMEnableClamshell: number;

declare const kIOPMExternalPower: number;

declare const kIOPMFairValue: number;

declare const kIOPMForceLowSpeed: number;

declare const kIOPMGoodValue: number;

declare const kIOPMHighestState: number;

declare const kIOPMInitialDeviceState: number;

declare const kIOPMInternalPower: number;

declare const kIOPMLowPower: number;

declare const kIOPMLowestState: number;

declare const kIOPMMaxPerformance: number;

declare const kIOPMMaxPowerStates: number;

declare const kIOPMNextHigherState: number;

declare const kIOPMNextLowerState: number;

declare const kIOPMNoErr: number;

declare const kIOPMNoSuchState: number;

declare const kIOPMNotAttainable: number;

declare const kIOPMNotPowerManaged: number;

declare const kIOPMNotYetInitialized: number;

declare const kIOPMNullAssertionID: number;

declare const kIOPMOverTemp: number;

declare const kIOPMPSLocationLeft: number;

declare const kIOPMPSLocationRight: number;

declare const kIOPMParameterError: number;

declare const kIOPMPassThrough: number;

declare const kIOPMPoorValue: number;

declare const kIOPMPowerButton: number;

declare const kIOPMPowerButtonUp: number;

declare const kIOPMPowerEmergency: number;

declare const kIOPMPowerOn: number;

declare const kIOPMPreventIdleSleep: number;

declare const kIOPMPreventSleep: number;

declare const kIOPMPreventSystemSleep: number;

declare const kIOPMProModeDisengaged: number;

declare const kIOPMProModeEngaged: number;

declare const kIOPMProcessorSpeedChange: number;

declare const kIOPMRawLowBattery: number;

declare const kIOPMRestart: number;

declare const kIOPMRestartCapability: number;

declare const kIOPMRootDomainState: number;

declare const kIOPMSleep: number;

declare const kIOPMSleepCapability: number;

declare const kIOPMSleepNow: number;

declare const kIOPMSoftSleep: number;

declare const kIOPMStaticPowerValid: number;

declare const kIOPMSystemCapabilityAudio: number;

declare const kIOPMSystemCapabilityCPU: number;

declare const kIOPMSystemCapabilityDidChange: number;

declare const kIOPMSystemCapabilityGraphics: number;

declare const kIOPMSystemCapabilityNetwork: number;

declare const kIOPMSystemCapabilityWillChange: number;

declare const kIOPMThermalLevelCritical: number;

declare const kIOPMThermalLevelDanger: number;

declare const kIOPMThermalLevelNormal: number;

declare const kIOPMThermalLevelTrap: number;

declare const kIOPMThermalLevelUnknown: number;

declare const kIOPMThermalLevelWarning: number;

declare const kIOPMUPSInstalled: number;

declare const kIOPMUndefinedValue: number;

declare const kIOPMUnidleDevice: number;

declare const kIOPMUnknown: number;

declare const kIOPMWillAckLater: number;

declare const kIOPSAdapterErrorFlagDeviceNeedsToBeRepositioned: number;

declare const kIOPSAdapterErrorFlagForeignObjectDetected: number;

declare const kIOPSAdapterErrorFlagInsufficientAvailablePower: number;

declare const kIOPSAdapterErrorFlagNoErrors: number;

declare const kIOPSFamilyCodeAC: number;

declare const kIOPSFamilyCodeDisconnected: number;

declare const kIOPSFamilyCodeExternal: number;

declare const kIOPSFamilyCodeExternal2: number;

declare const kIOPSFamilyCodeExternal3: number;

declare const kIOPSFamilyCodeExternal4: number;

declare const kIOPSFamilyCodeExternal5: number;

declare const kIOPSFamilyCodeFirewire: number;

declare const kIOPSFamilyCodeUSBAdapter: number;

declare const kIOPSFamilyCodeUSBCBrick: number;

declare const kIOPSFamilyCodeUSBCPD: number;

declare const kIOPSFamilyCodeUSBCTypeC: number;

declare const kIOPSFamilyCodeUSBChargingPort: number;

declare const kIOPSFamilyCodeUSBChargingPortDedicated: number;

declare const kIOPSFamilyCodeUSBChargingPortDownstream: number;

declare const kIOPSFamilyCodeUSBDevice: number;

declare const kIOPSFamilyCodeUSBHost: number;

declare const kIOPSFamilyCodeUSBHostSuspended: number;

declare const kIOPSFamilyCodeUSBUnknown: number;

declare const kIOPSFamilyCodeUnsupported: number;

declare const kIOPacketFilterBroadcast: number;

declare const kIOPacketFilterMulticast: number;

declare const kIOPacketFilterMulticastAll: number;

declare const kIOPacketFilterPromiscuous: number;

declare const kIOPacketFilterPromiscuousAll: number;

declare const kIOPacketFilterUnicast: number;

declare const kIOPixelEncodingNotSupported: number;

declare const kIOPixelEncodingRGB444: number;

declare const kIOPixelEncodingYCbCr420: number;

declare const kIOPixelEncodingYCbCr422: number;

declare const kIOPixelEncodingYCbCr444: number;

declare const kIOPostedCombinedReordered: number;

declare const kIOPostedReordered: number;

declare const kIOPostedWrite: number;

declare const kIOPowerAttribute: number;

declare const kIOPowerStateAttribute: number;

declare const kIORDYBit: number;

declare const kIORDYDisableBit: number;

declare const kIORDYSupportedMask: number;

declare const kIORGBDirectPixels: number;

declare const kIORGBSignedDirectPixels: number;

declare const kIORGBSignedFloatingPointPixels: number;

declare const kIORangeBitsPerColorComponent10: number;

declare const kIORangeBitsPerColorComponent12: number;

declare const kIORangeBitsPerColorComponent16: number;

declare const kIORangeBitsPerColorComponent6: number;

declare const kIORangeBitsPerColorComponent8: number;

declare const kIORangeBitsPerColorComponentNotSupported: number;

declare const kIORangeColorimetryAdobeRGB: number;

declare const kIORangeColorimetryBT2020: number;

declare const kIORangeColorimetryBT2100: number;

declare const kIORangeColorimetryBT601: number;

declare const kIORangeColorimetryBT709: number;

declare const kIORangeColorimetryDCIP3: number;

declare const kIORangeColorimetryNativeRGB: number;

declare const kIORangeColorimetryNotSupported: number;

declare const kIORangeColorimetryWGRGB: number;

declare const kIORangeColorimetrysRGB: number;

declare const kIORangeColorimetryxvYCC: number;

declare const kIORangeDynamicRangeDolbyNormalMode: number;

declare const kIORangeDynamicRangeDolbyTunnelMode: number;

declare const kIORangeDynamicRangeHDR10: number;

declare const kIORangeDynamicRangeNotSupported: number;

declare const kIORangeDynamicRangeSDR: number;

declare const kIORangeDynamicRangeTraditionalGammaHDR: number;

declare const kIORangePixelEncodingNotSupported: number;

declare const kIORangePixelEncodingRGB444: number;

declare const kIORangePixelEncodingYCbCr420: number;

declare const kIORangePixelEncodingYCbCr422: number;

declare const kIORangePixelEncodingYCbCr444: number;

declare const kIORangeSupportsCompositeSync: number;

declare const kIORangeSupportsInterlacedCEATiming: number;

declare const kIORangeSupportsInterlacedCEATimingWithConfirm: number;

declare const kIORangeSupportsSeparateSyncs: number;

declare const kIORangeSupportsSignal_0700_0000: number;

declare const kIORangeSupportsSignal_0700_0300: number;

declare const kIORangeSupportsSignal_0714_0286: number;

declare const kIORangeSupportsSignal_1000_0400: number;

declare const kIORangeSupportsSyncOnGreen: number;

declare const kIORangeSupportsVSyncSerration: number;

declare const kIORealTimeCache: number;

declare const kIORegistryIterateParents: number;

declare const kIORegistryIterateRecursively: number;

declare const kIOScaleCanBorderInsetOnly: number;

declare const kIOScaleCanDownSamplePixels: number;

declare const kIOScaleCanRotate: number;

declare const kIOScaleCanScaleInterlaced: number;

declare const kIOScaleCanSupportInset: number;

declare const kIOScaleCanUpSamplePixels: number;

declare const kIOScaleInvertX: number;

declare const kIOScaleInvertY: number;

declare const kIOScaleRotate0: number;

declare const kIOScaleRotate180: number;

declare const kIOScaleRotate270: number;

declare const kIOScaleRotate90: number;

declare const kIOScaleRotateFlags: number;

declare const kIOScaleStretchOnly: number;

declare const kIOScaleStretchToFit: number;

declare const kIOScaleSwapAxes: number;

declare const kIOScalingInfoValid: number;

declare const kIOServiceInteractionAllowed: number;

declare const kIOServiceMatchedNotificationType: number;

declare const kIOServiceMessageNotificationType: number;

declare const kIOServicePublishNotificationType: number;

declare const kIOServiceTerminatedNotificationType: number;

declare const kIOStreamBufferIDMask: number;

declare const kIOStreamEnqueueInputSyncTrap: number;

declare const kIOStreamEnqueueInputTrap: number;

declare const kIOStreamMemoryTypeBufferControl: number;

declare const kIOStreamMemoryTypeBufferData: number;

declare const kIOStreamMemoryTypeInputQueue: number;

declare const kIOStreamMemoryTypeMask: number;

declare const kIOStreamMemoryTypeOutputQueue: number;

declare const kIOStreamMethodClose: number;

declare const kIOStreamMethodGetBufferCount: number;

declare const kIOStreamMethodGetMode: number;

declare const kIOStreamMethodOpen: number;

declare const kIOStreamMethodSetMode: number;

declare const kIOStreamMethodStart: number;

declare const kIOStreamMethodStop: number;

declare const kIOStreamMethodSuspend: number;

declare const kIOStreamOptionOpenExclusive: number;

declare const kIOStreamOptionOpenShared: number;

declare const kIOStreamPortTypeInput: number;

declare const kIOStreamPortTypeOutput: number;

declare const kIOSyncOnBlue: number;

declare const kIOSyncOnGreen: number;

declare const kIOSyncOnRed: number;

declare const kIOSyncPositivePolarity: number;

declare const kIOSystemLoadAdvisoryLevelBad: number;

declare const kIOSystemLoadAdvisoryLevelGreat: number;

declare const kIOSystemLoadAdvisoryLevelOK: number;

declare const kIOSystemPowerAttribute: number;

declare const kIOTimingIDAppleNTSC_FF: number;

declare const kIOTimingIDAppleNTSC_FFconv: number;

declare const kIOTimingIDAppleNTSC_ST: number;

declare const kIOTimingIDAppleNTSC_STconv: number;

declare const kIOTimingIDApplePAL_FF: number;

declare const kIOTimingIDApplePAL_FFconv: number;

declare const kIOTimingIDApplePAL_ST: number;

declare const kIOTimingIDApplePAL_STconv: number;

declare const kIOTimingIDApple_0x0_0hz_Offline: number;

declare const kIOTimingIDApple_1024x768_75hz: number;

declare const kIOTimingIDApple_1152x870_75hz: number;

declare const kIOTimingIDApple_512x384_60hz: number;

declare const kIOTimingIDApple_560x384_60hz: number;

declare const kIOTimingIDApple_640x400_67hz: number;

declare const kIOTimingIDApple_640x480_67hz: number;

declare const kIOTimingIDApple_640x818_75hz: number;

declare const kIOTimingIDApple_640x870_75hz: number;

declare const kIOTimingIDApple_832x624_75hz: number;

declare const kIOTimingIDApple_FixedRateLCD: number;

declare const kIOTimingIDFilmRate_48hz: number;

declare const kIOTimingIDGTF_640x480_120hz: number;

declare const kIOTimingIDInvalid: number;

declare const kIOTimingIDSMPTE240M_60hz: number;

declare const kIOTimingIDSony_1600x1024_76hz: number;

declare const kIOTimingIDSony_1920x1080_60hz: number;

declare const kIOTimingIDSony_1920x1080_72hz: number;

declare const kIOTimingIDSony_1920x1200_76hz: number;

declare const kIOTimingIDVESA_1024x768_60hz: number;

declare const kIOTimingIDVESA_1024x768_70hz: number;

declare const kIOTimingIDVESA_1024x768_75hz: number;

declare const kIOTimingIDVESA_1024x768_85hz: number;

declare const kIOTimingIDVESA_1152x864_75hz: number;

declare const kIOTimingIDVESA_1280x1024_60hz: number;

declare const kIOTimingIDVESA_1280x1024_75hz: number;

declare const kIOTimingIDVESA_1280x1024_85hz: number;

declare const kIOTimingIDVESA_1280x960_60hz: number;

declare const kIOTimingIDVESA_1280x960_75hz: number;

declare const kIOTimingIDVESA_1280x960_85hz: number;

declare const kIOTimingIDVESA_1360x768_60hz: number;

declare const kIOTimingIDVESA_1600x1200_60hz: number;

declare const kIOTimingIDVESA_1600x1200_65hz: number;

declare const kIOTimingIDVESA_1600x1200_70hz: number;

declare const kIOTimingIDVESA_1600x1200_75hz: number;

declare const kIOTimingIDVESA_1600x1200_80hz: number;

declare const kIOTimingIDVESA_1600x1200_85hz: number;

declare const kIOTimingIDVESA_1792x1344_60hz: number;

declare const kIOTimingIDVESA_1792x1344_75hz: number;

declare const kIOTimingIDVESA_1856x1392_60hz: number;

declare const kIOTimingIDVESA_1856x1392_75hz: number;

declare const kIOTimingIDVESA_1920x1440_60hz: number;

declare const kIOTimingIDVESA_1920x1440_75hz: number;

declare const kIOTimingIDVESA_640x480_60hz: number;

declare const kIOTimingIDVESA_640x480_72hz: number;

declare const kIOTimingIDVESA_640x480_75hz: number;

declare const kIOTimingIDVESA_640x480_85hz: number;

declare const kIOTimingIDVESA_800x600_56hz: number;

declare const kIOTimingIDVESA_800x600_60hz: number;

declare const kIOTimingIDVESA_800x600_72hz: number;

declare const kIOTimingIDVESA_800x600_75hz: number;

declare const kIOTimingIDVESA_800x600_85hz: number;

declare const kIOTimingIDVESA_848x480_60hz: number;

declare const kIOTimingRangeV1: number;

declare const kIOTimingRangeV2: number;

declare const kIOTriStateSyncs: number;

declare const kIOUSBAnyClass: number;

declare const kIOUSBAnyProduct: number;

declare const kIOUSBAnyProtocol: number;

declare const kIOUSBAnySubClass: number;

declare const kIOUSBAnyVendor: number;

declare const kIOUSBDeviceCapabilityDescriptorLengthMin: number;

declare const kIOUSBDeviceCapabilityDescriptorType: number;

declare const kIOUSBFindInterfaceDontCare: number;

declare const kIOUSBVendorIDApple: number;

declare const kIOUSBVendorIDAppleComputer: number;

declare const kIOUYVY422PixelFormat: number;

declare const kIOVRAMSaveAttribute: number;

declare const kIOVSyncDisable: number;

declare const kIOWSAA_Accelerated: number;

declare const kIOWSAA_DeferEnd: number;

declare const kIOWSAA_DeferStart: number;

declare const kIOWSAA_DriverOpen: number;

declare const kIOWSAA_From_Accelerated: number;

declare const kIOWSAA_Hibernate: number;

declare const kIOWSAA_NonConsoleDevice: number;

declare const kIOWSAA_Reserved: number;

declare const kIOWSAA_Sleep: number;

declare const kIOWSAA_StateMask: number;

declare const kIOWSAA_To_Accelerated: number;

declare const kIOWSAA_Transactional: number;

declare const kIOWSAA_Unaccelerated: number;

declare const kIOWindowServerActiveAttribute: number;

declare const kIOWriteCombineCache: number;

declare const kIOWriteThruCache: number;

declare const kIOYUV211PixelFormat: number;

declare const kIOYUV411PixelFormat: number;

declare const kIOYUVSPixelFormat: number;

declare const kIOYUVUPixelFormat: number;

declare const kIOYVU9PixelFormat: number;

declare const kIOYVYU422PixelFormat: number;

declare const kIdentifyWordValid: number;

declare const kIdentifyWordValidationMask: number;

declare const kInflowForciblyEnabledBit: number;

declare const kInvertingEncodedPixel: number;

declare const kInvertingEncoding: number;

declare const kInvertingEncodingShift: number;

declare const kLBABit: number;

declare const kLBASupportedMask: number;

declare const kLastIOKitNotificationType: number;

declare const kMMCCmd_BLANK: number;

declare const kMMCCmd_CHANGE_DEFINITION: number;

declare const kMMCCmd_CLOSE_TRACK_SESSION: number;

declare const kMMCCmd_COMPARE: number;

declare const kMMCCmd_COPY: number;

declare const kMMCCmd_COPY_AND_VERIFY: number;

declare const kMMCCmd_ERASE: number;

declare const kMMCCmd_FORMAT_UNIT: number;

declare const kMMCCmd_GET_CONFIGURATION: number;

declare const kMMCCmd_GET_EVENT_STATUS_NOTIFICATION: number;

declare const kMMCCmd_GET_PERFORMANCE: number;

declare const kMMCCmd_INQUIRY: number;

declare const kMMCCmd_LOAD_UNLOAD_MEDIUM: number;

declare const kMMCCmd_LOG_SELECT: number;

declare const kMMCCmd_LOG_SENSE: number;

declare const kMMCCmd_MECHANISM_STATUS: number;

declare const kMMCCmd_MODE_SELECT_10: number;

declare const kMMCCmd_MODE_SELECT_6: number;

declare const kMMCCmd_MODE_SENSE_10: number;

declare const kMMCCmd_MODE_SENSE_6: number;

declare const kMMCCmd_PAUSE_RESUME: number;

declare const kMMCCmd_PLAY_AUDIO_10: number;

declare const kMMCCmd_PLAY_AUDIO_12: number;

declare const kMMCCmd_PLAY_AUDIO_MSF: number;

declare const kMMCCmd_PLAY_AUDIO_TRACK_INDEX: number;

declare const kMMCCmd_PLAY_CD: number;

declare const kMMCCmd_PLAY_RELATIVE_10: number;

declare const kMMCCmd_PLAY_RELATIVE_12: number;

declare const kMMCCmd_PREFETCH: number;

declare const kMMCCmd_PREVENT_ALLOW_MEDIUM_REMOVAL: number;

declare const kMMCCmd_READ_10: number;

declare const kMMCCmd_READ_12: number;

declare const kMMCCmd_READ_6: number;

declare const kMMCCmd_READ_BUFFER: number;

declare const kMMCCmd_READ_BUFFER_CAPACITY: number;

declare const kMMCCmd_READ_CAPACITY: number;

declare const kMMCCmd_READ_CD: number;

declare const kMMCCmd_READ_CD_MSF: number;

declare const kMMCCmd_READ_DISC_INFORMATION: number;

declare const kMMCCmd_READ_DISC_STRUCTURE: number;

declare const kMMCCmd_READ_DVD_STRUCTURE: number;

declare const kMMCCmd_READ_FORMAT_CAPACITIES: number;

declare const kMMCCmd_READ_HEADER: number;

declare const kMMCCmd_READ_LONG: number;

declare const kMMCCmd_READ_MASTER_CUE: number;

declare const kMMCCmd_READ_SUB_CHANNEL: number;

declare const kMMCCmd_READ_TOC_PMA_ATIP: number;

declare const kMMCCmd_READ_TRACK_INFORMATION: number;

declare const kMMCCmd_RECEIVE_DIAGNOSTICS_RESULTS: number;

declare const kMMCCmd_RELEASE_10: number;

declare const kMMCCmd_RELEASE_6: number;

declare const kMMCCmd_REPAIR_TRACK: number;

declare const kMMCCmd_REPORT_KEY: number;

declare const kMMCCmd_REQUEST_SENSE: number;

declare const kMMCCmd_RESERVE_10: number;

declare const kMMCCmd_RESERVE_6: number;

declare const kMMCCmd_RESERVE_TRACK: number;

declare const kMMCCmd_SCAN_MMC: number;

declare const kMMCCmd_SEARCH_DATA_EQUAL_10: number;

declare const kMMCCmd_SEARCH_DATA_EQUAL_12: number;

declare const kMMCCmd_SEARCH_DATA_HIGH_10: number;

declare const kMMCCmd_SEARCH_DATA_HIGH_12: number;

declare const kMMCCmd_SEARCH_DATA_LOW_10: number;

declare const kMMCCmd_SEARCH_DATA_LOW_12: number;

declare const kMMCCmd_SEEK_10: number;

declare const kMMCCmd_SEEK_6: number;

declare const kMMCCmd_SEND_CUE_SHEET: number;

declare const kMMCCmd_SEND_DIAGNOSTICS: number;

declare const kMMCCmd_SEND_DVD_STRUCTURE: number;

declare const kMMCCmd_SEND_EVENT: number;

declare const kMMCCmd_SEND_KEY: number;

declare const kMMCCmd_SEND_OPC_INFORMATION: number;

declare const kMMCCmd_SET_CD_SPEED: number;

declare const kMMCCmd_SET_LIMITS_10: number;

declare const kMMCCmd_SET_LIMITS_12: number;

declare const kMMCCmd_SET_READ_AHEAD: number;

declare const kMMCCmd_SET_STREAMING: number;

declare const kMMCCmd_START_STOP_UNIT: number;

declare const kMMCCmd_STOP_PLAY_SCAN: number;

declare const kMMCCmd_SYNCHRONIZE_CACHE: number;

declare const kMMCCmd_TEST_UNIT_READY: number;

declare const kMMCCmd_VERIFY_10: number;

declare const kMMCCmd_VERIFY_12: number;

declare const kMMCCmd_WRITE_10: number;

declare const kMMCCmd_WRITE_12: number;

declare const kMMCCmd_WRITE_AND_VERIFY_10: number;

declare const kMMCCmd_WRITE_BUFFER: number;

declare const kMMCDeviceTrayClosed: number;

declare const kMMCDeviceTrayMask: number;

declare const kMMCDeviceTrayOpen: number;

declare const kMSCProtocolBulkOnly: number;

declare const kMSCProtocolControlBulk: number;

declare const kMSCProtocolControlBulkInterrupt: number;

declare const kMSCProtocolUSBAttachedSCSI: number;

declare const kMaxAsyncArgs: number;

declare const kMessageDeterminingMediaPresence: number;

declare const kMessageFoundMedia: number;

declare const kMessageMediaTypeDetermined: number;

declare const kMessageTrayStateChangeRequestAccepted: number;

declare const kMessageTrayStateChangeRequestRejected: number;

declare const kMicrosecondScale: number;

declare const kMillisecondScale: number;

declare const kMode3Bit: number;

declare const kMode3Mask: number;

declare const kModePageFormat_PAGE_CODE_Mask: number;

declare const kModePageFormat_PS_Bit: number;

declare const kModePageFormat_PS_Mask: number;

declare const kModeSenseParameterHeader10_LongLBABit: number;

declare const kModeSenseParameterHeader10_LongLBAMask: number;

declare const kModeSenseSBCDeviceSpecific_DPOFUABit: number;

declare const kModeSenseSBCDeviceSpecific_DPOFUAMask: number;

declare const kModeSenseSBCDeviceSpecific_WriteProtectBit: number;

declare const kModeSenseSBCDeviceSpecific_WriteProtectMask: number;

declare const kNanosecondScale: number;

declare const kNonMagneticDriveBit: number;

declare const kNonMagneticDriveMask: number;

declare const kOSAsyncCompleteMessageID: number;

declare const kOSAsyncRef64Count: number;

declare const kOSAsyncRef64Size: number;

declare const kOSAsyncRefCount: number;

declare const kOSAsyncRefSize: number;

declare const kOSNotificationMessageID: number;

declare const kOrConnections: number;

declare const kPCRBaseAddress: number;

declare const kPMEthernetWakeOnLANSettings: number;

declare const kPMGeneralAggressiveness: number;

declare const kPMLastAggressivenessType: number;

declare const kPMMinutesToDim: number;

declare const kPMMinutesToSleep: number;

declare const kPMMinutesToSpinDown: number;

declare const kPMMotionSensor: number;

declare const kPMPowerSource: number;

declare const kPMSetProcessorSpeed: number;

declare const kRBCCmd_FORMAT_UNIT: number;

declare const kRBCCmd_READ_10: number;

declare const kRBCCmd_READ_CAPACITY: number;

declare const kRBCCmd_START_STOP_UNIT: number;

declare const kRBCCmd_SYNCHRONIZE_CACHE: number;

declare const kRBCCmd_VERIFY_10: number;

declare const kRBCCmd_WRITE_10: number;

declare const kRBCCmd_WRITE_BUFFER: number;

declare const kREAD_CAPACITY_PROT_Disabled: number;

declare const kREAD_CAPACITY_PROT_Enabled: number;

declare const kREAD_CAPACITY_PROT_Mask: number;

declare const kREAD_CAPACITY_RTO_Disabled: number;

declare const kREAD_CAPACITY_RTO_Enabled: number;

declare const kREAD_CAPACITY_RTO_Mask: number;

declare const kREPORT_CAPACITY_16_DataSize: number;

declare const kREPORT_CAPACITY_DataSize: number;

declare const kREPORT_LUNS_ADDRESS_DEVICE_TYPE_SPECIFIC: number;

declare const kREPORT_LUNS_ADDRESS_METHOD_FLAT_SPACE: number;

declare const kREPORT_LUNS_ADDRESS_METHOD_LOGICAL_UNIT: number;

declare const kREPORT_LUNS_ADDRESS_METHOD_OFFSET: number;

declare const kREPORT_LUNS_ADDRESS_METHOD_PERIPHERAL_DEVICE: number;

declare const kRemoveableMediaBit: number;

declare const kRemoveableMediaMask: number;

declare const kSBCCmd_CHANGE_DEFINITION: number;

declare const kSBCCmd_COMPARE: number;

declare const kSBCCmd_COPY: number;

declare const kSBCCmd_COPY_AND_VERIFY: number;

declare const kSBCCmd_FORMAT_UNIT: number;

declare const kSBCCmd_INQUIRY: number;

declare const kSBCCmd_LOCK_UNLOCK_CACHE: number;

declare const kSBCCmd_LOG_SELECT: number;

declare const kSBCCmd_LOG_SENSE: number;

declare const kSBCCmd_MODE_SELECT_10: number;

declare const kSBCCmd_MODE_SELECT_6: number;

declare const kSBCCmd_MODE_SENSE_10: number;

declare const kSBCCmd_MODE_SENSE_6: number;

declare const kSBCCmd_MOVE_MEDIUM_ATTACHED: number;

declare const kSBCCmd_PERSISTENT_RESERVE_IN: number;

declare const kSBCCmd_PERSISTENT_RESERVE_OUT: number;

declare const kSBCCmd_PREFETCH: number;

declare const kSBCCmd_PREVENT_ALLOW_MEDIUM_REMOVAL: number;

declare const kSBCCmd_READ_10: number;

declare const kSBCCmd_READ_12: number;

declare const kSBCCmd_READ_6: number;

declare const kSBCCmd_READ_BUFFER: number;

declare const kSBCCmd_READ_CAPACITY: number;

declare const kSBCCmd_READ_DEFECT_DATA_10: number;

declare const kSBCCmd_READ_DEFECT_DATA_12: number;

declare const kSBCCmd_READ_ELEMENT_STATUS_ATTACHED: number;

declare const kSBCCmd_READ_GENERATION: number;

declare const kSBCCmd_READ_LONG: number;

declare const kSBCCmd_READ_UPDATED_BLOCK_10: number;

declare const kSBCCmd_REASSIGN_BLOCKS: number;

declare const kSBCCmd_REBUILD: number;

declare const kSBCCmd_RECEIVE_DIAGNOSTICS_RESULTS: number;

declare const kSBCCmd_REGENERATE: number;

declare const kSBCCmd_RELEASE_10: number;

declare const kSBCCmd_RELEASE_6: number;

declare const kSBCCmd_REPORT_LUNS: number;

declare const kSBCCmd_REQUEST_SENSE: number;

declare const kSBCCmd_RESERVE_10: number;

declare const kSBCCmd_RESERVE_6: number;

declare const kSBCCmd_REZERO_UNIT: number;

declare const kSBCCmd_SEARCH_DATA_EQUAL_10: number;

declare const kSBCCmd_SEARCH_DATA_HIGH_10: number;

declare const kSBCCmd_SEARCH_DATA_LOW_10: number;

declare const kSBCCmd_SEEK_10: number;

declare const kSBCCmd_SEEK_6: number;

declare const kSBCCmd_SEND_DIAGNOSTICS: number;

declare const kSBCCmd_SET_LIMITS_10: number;

declare const kSBCCmd_SET_LIMITS_12: number;

declare const kSBCCmd_START_STOP_UNIT: number;

declare const kSBCCmd_SYNCHRONIZE_CACHE: number;

declare const kSBCCmd_TEST_UNIT_READY: number;

declare const kSBCCmd_UPDATE_BLOCK: number;

declare const kSBCCmd_VERIFY_10: number;

declare const kSBCCmd_WRITE_10: number;

declare const kSBCCmd_WRITE_12: number;

declare const kSBCCmd_WRITE_6: number;

declare const kSBCCmd_WRITE_AND_VERIFY_10: number;

declare const kSBCCmd_WRITE_AND_VERIFY_12: number;

declare const kSBCCmd_WRITE_BUFFER: number;

declare const kSBCCmd_WRITE_LONG: number;

declare const kSBCCmd_WRITE_SAME: number;

declare const kSBCCmd_XDREAD: number;

declare const kSBCCmd_XDWRITE: number;

declare const kSBCCmd_XDWRITE_EXTENDED: number;

declare const kSBCCmd_XPWRITE: number;

declare const kSBCModePageCachingCode: number;

declare const kSBCModePageCaching_ABPF_Bit: number;

declare const kSBCModePageCaching_ABPF_Mask: number;

declare const kSBCModePageCaching_CAP_Bit: number;

declare const kSBCModePageCaching_CAP_Mask: number;

declare const kSBCModePageCaching_DEMAND_READ_Mask: number;

declare const kSBCModePageCaching_DEMAND_WRITE_Mask: number;

declare const kSBCModePageCaching_DISC_Bit: number;

declare const kSBCModePageCaching_DISC_Mask: number;

declare const kSBCModePageCaching_DRA_Bit: number;

declare const kSBCModePageCaching_DRA_Mask: number;

declare const kSBCModePageCaching_FSW_Bit: number;

declare const kSBCModePageCaching_FSW_Mask: number;

declare const kSBCModePageCaching_IC_Bit: number;

declare const kSBCModePageCaching_IC_Mask: number;

declare const kSBCModePageCaching_LBCSS_Bit: number;

declare const kSBCModePageCaching_LBCSS_Mask: number;

declare const kSBCModePageCaching_MF_Bit: number;

declare const kSBCModePageCaching_MF_Mask: number;

declare const kSBCModePageCaching_RCD_Bit: number;

declare const kSBCModePageCaching_RCD_Mask: number;

declare const kSBCModePageCaching_SIZE_Bit: number;

declare const kSBCModePageCaching_SIZE_Mask: number;

declare const kSBCModePageCaching_VS1_Bit: number;

declare const kSBCModePageCaching_VS1_Mask: number;

declare const kSBCModePageCaching_VS2_Bit: number;

declare const kSBCModePageCaching_VS2_Mask: number;

declare const kSBCModePageCaching_WCE_Bit: number;

declare const kSBCModePageCaching_WCE_Mask: number;

declare const kSBCModePageFlexibleDiskCode: number;

declare const kSBCModePageFlexibleDisk_MO_Bit: number;

declare const kSBCModePageFlexibleDisk_MO_Mask: number;

declare const kSBCModePageFlexibleDisk_PIN_1_Mask: number;

declare const kSBCModePageFlexibleDisk_PIN_2_Mask: number;

declare const kSBCModePageFlexibleDisk_PIN_34_Mask: number;

declare const kSBCModePageFlexibleDisk_PIN_4_Mask: number;

declare const kSBCModePageFlexibleDisk_SPC_Mask: number;

declare const kSBCModePageFlexibleDisk_SSN_Bit: number;

declare const kSBCModePageFlexibleDisk_SSN_Mask: number;

declare const kSBCModePageFlexibleDisk_TRDY_Bit: number;

declare const kSBCModePageFlexibleDisk_TRDY_Mask: number;

declare const kSBCModePageFormatDeviceCode: number;

declare const kSBCModePageRigidDiskGeometryCode: number;

declare const kSBCModePageRigidDiskGeometry_RPL_Mask: number;

declare const kSBCWOCmd_CHANGE_DEFINITION: number;

declare const kSBCWOCmd_COMPARE: number;

declare const kSBCWOCmd_COPY: number;

declare const kSBCWOCmd_COPY_AND_VERIFY: number;

declare const kSBCWOCmd_INQUIRY: number;

declare const kSBCWOCmd_LOCK_UNLOCK_CACHE: number;

declare const kSBCWOCmd_LOG_SELECT: number;

declare const kSBCWOCmd_LOG_SENSE: number;

declare const kSBCWOCmd_MEDIUM_SCAN: number;

declare const kSBCWOCmd_MODE_SELECT_10: number;

declare const kSBCWOCmd_MODE_SELECT_6: number;

declare const kSBCWOCmd_MODE_SENSE_10: number;

declare const kSBCWOCmd_MODE_SENSE_6: number;

declare const kSBCWOCmd_MOVE_MEDIUM: number;

declare const kSBCWOCmd_PERSISTENT_RESERVE_IN: number;

declare const kSBCWOCmd_PERSISTENT_RESERVE_OUT: number;

declare const kSBCWOCmd_PREFETCH: number;

declare const kSBCWOCmd_PREVENT_ALLOW_MEDIUM_REMOVAL: number;

declare const kSBCWOCmd_READ_10: number;

declare const kSBCWOCmd_READ_12: number;

declare const kSBCWOCmd_READ_6: number;

declare const kSBCWOCmd_READ_BUFFER: number;

declare const kSBCWOCmd_READ_CAPACITY: number;

declare const kSBCWOCmd_READ_ELEMENT_STATUS: number;

declare const kSBCWOCmd_READ_LONG: number;

declare const kSBCWOCmd_REASSIGN_BLOCKS: number;

declare const kSBCWOCmd_RECEIVE_DIAGNOSTICS_RESULTS: number;

declare const kSBCWOCmd_RELEASE_10: number;

declare const kSBCWOCmd_RELEASE_6: number;

declare const kSBCWOCmd_REQUEST_SENSE: number;

declare const kSBCWOCmd_RESERVE_10: number;

declare const kSBCWOCmd_RESERVE_6: number;

declare const kSBCWOCmd_REZERO_UNIT: number;

declare const kSBCWOCmd_SEARCH_DATA_EQUAL_10: number;

declare const kSBCWOCmd_SEARCH_DATA_EQUAL_12: number;

declare const kSBCWOCmd_SEARCH_DATA_HIGH_10: number;

declare const kSBCWOCmd_SEARCH_DATA_HIGH_12: number;

declare const kSBCWOCmd_SEARCH_DATA_LOW_10: number;

declare const kSBCWOCmd_SEARCH_DATA_LOW_12: number;

declare const kSBCWOCmd_SEEK_10: number;

declare const kSBCWOCmd_SEEK_6: number;

declare const kSBCWOCmd_SEND_DIAGNOSTICS: number;

declare const kSBCWOCmd_SET_LIMITS_10: number;

declare const kSBCWOCmd_SET_LIMITS_12: number;

declare const kSBCWOCmd_START_STOP_UNIT: number;

declare const kSBCWOCmd_SYNCHRONIZE_CACHE: number;

declare const kSBCWOCmd_TEST_UNIT_READY: number;

declare const kSBCWOCmd_VERIFY_10: number;

declare const kSBCWOCmd_VERIFY_12: number;

declare const kSBCWOCmd_WRITE_10: number;

declare const kSBCWOCmd_WRITE_12: number;

declare const kSBCWOCmd_WRITE_6: number;

declare const kSBCWOCmd_WRITE_AND_VERIFY_10: number;

declare const kSBCWOCmd_WRITE_AND_VERIFY_12: number;

declare const kSBCWOCmd_WRITE_BUFFER: number;

declare const kSBCWOCmd_WRITE_LONG: number;

declare const kSCCCmd_MAINTENANCE_IN: number;

declare const kSCCCmd_MAINTENANCE_OUT: number;

declare const kSCCCmd_MODE_SELECT_10: number;

declare const kSCCCmd_MODE_SELECT_6: number;

declare const kSCCCmd_MODE_SENSE_10: number;

declare const kSCCCmd_MODE_SENSE_6: number;

declare const kSCCCmd_PERSISTENT_RESERVE_IN: number;

declare const kSCCCmd_PERSISTENT_RESERVE_OUT: number;

declare const kSCCCmd_PORT_STATUS: number;

declare const kSCCCmd_REDUNDANCY_GROUP_IN: number;

declare const kSCCCmd_REDUNDANCY_GROUP_OUT: number;

declare const kSCCCmd_RELEASE_10: number;

declare const kSCCCmd_RELEASE_6: number;

declare const kSCCCmd_REPORT_LUNS: number;

declare const kSCCCmd_REQUEST_SENSE: number;

declare const kSCCCmd_RESERVE_10: number;

declare const kSCCCmd_RESERVE_6: number;

declare const kSCCCmd_SEND_DIAGNOSTICS: number;

declare const kSCCCmd_SPARE_IN: number;

declare const kSCCCmd_SPARE_OUT: number;

declare const kSCSICDBSize_10Byte: number;

declare const kSCSICDBSize_12Byte: number;

declare const kSCSICDBSize_16Byte: number;

declare const kSCSICDBSize_6Byte: number;

declare const kSCSICDBSize_Maximum: number;

declare const kSCSICmdVariableLengthCDB: number;

declare const kSCSICmd_ACCESS_CONTROL_IN: number;

declare const kSCSICmd_ACCESS_CONTROL_OUT: number;

declare const kSCSICmd_BLANK: number;

declare const kSCSICmd_CHANGE_DEFINITION: number;

declare const kSCSICmd_CLOSE_TRACK_SESSION: number;

declare const kSCSICmd_COMPARE: number;

declare const kSCSICmd_COPY: number;

declare const kSCSICmd_COPY_AND_VERIFY: number;

declare const kSCSICmd_ERASE_10: number;

declare const kSCSICmd_ERASE_12: number;

declare const kSCSICmd_EXTENDED_COPY: number;

declare const kSCSICmd_FORMAT_UNIT: number;

declare const kSCSICmd_GET_CONFIGURATION: number;

declare const kSCSICmd_GET_EVENT_STATUS_NOTIFICATION: number;

declare const kSCSICmd_GET_PERFORMANCE: number;

declare const kSCSICmd_INQUIRY: number;

declare const kSCSICmd_LOAD_UNLOAD_MEDIUM: number;

declare const kSCSICmd_LOCK_UNLOCK_CACHE: number;

declare const kSCSICmd_LOCK_UNLOCK_CACHE_16: number;

declare const kSCSICmd_LOG_SELECT: number;

declare const kSCSICmd_LOG_SENSE: number;

declare const kSCSICmd_MAINTENANCE_IN: number;

declare const kSCSICmd_MAINTENANCE_OUT: number;

declare const kSCSICmd_MECHANISM_STATUS: number;

declare const kSCSICmd_MEDIUM_SCAN: number;

declare const kSCSICmd_MODE_SELECT_10: number;

declare const kSCSICmd_MODE_SELECT_6: number;

declare const kSCSICmd_MODE_SENSE_10: number;

declare const kSCSICmd_MODE_SENSE_6: number;

declare const kSCSICmd_MOVE_MEDIUM_ATTACHED: number;

declare const kSCSICmd_PAUSE_RESUME: number;

declare const kSCSICmd_PERSISTENT_RESERVE_IN: number;

declare const kSCSICmd_PERSISTENT_RESERVE_OUT: number;

declare const kSCSICmd_PLAY_AUDIO_10: number;

declare const kSCSICmd_PLAY_AUDIO_12: number;

declare const kSCSICmd_PLAY_AUDIO_MSF: number;

declare const kSCSICmd_PLAY_AUDIO_TRACK_INDEX: number;

declare const kSCSICmd_PLAY_CD: number;

declare const kSCSICmd_PLAY_RELATIVE_10: number;

declare const kSCSICmd_PLAY_RELATIVE_12: number;

declare const kSCSICmd_PREFETCH: number;

declare const kSCSICmd_PREFETCH_16: number;

declare const kSCSICmd_PREVENT_ALLOW_MEDIUM_REMOVAL: number;

declare const kSCSICmd_READ_10: number;

declare const kSCSICmd_READ_12: number;

declare const kSCSICmd_READ_16: number;

declare const kSCSICmd_READ_6: number;

declare const kSCSICmd_READ_ATTRIBUTE: number;

declare const kSCSICmd_READ_BUFFER: number;

declare const kSCSICmd_READ_BUFFER_CAPACITY: number;

declare const kSCSICmd_READ_CAPACITY: number;

declare const kSCSICmd_READ_CD: number;

declare const kSCSICmd_READ_CD_MSF: number;

declare const kSCSICmd_READ_DEFECT_DATA_10: number;

declare const kSCSICmd_READ_DEFECT_DATA_12: number;

declare const kSCSICmd_READ_DISC_INFORMATION: number;

declare const kSCSICmd_READ_DISC_STRUCTURE: number;

declare const kSCSICmd_READ_DVD_STRUCTURE: number;

declare const kSCSICmd_READ_ELEMENT_STATUS_ATTACHED: number;

declare const kSCSICmd_READ_FORMAT_CAPACITIES: number;

declare const kSCSICmd_READ_GENERATION: number;

declare const kSCSICmd_READ_HEADER: number;

declare const kSCSICmd_READ_LONG: number;

declare const kSCSICmd_READ_MASTER_CUE: number;

declare const kSCSICmd_READ_SUB_CHANNEL: number;

declare const kSCSICmd_READ_TOC_PMA_ATIP: number;

declare const kSCSICmd_READ_TRACK_INFORMATION: number;

declare const kSCSICmd_READ_UPDATED_BLOCK_10: number;

declare const kSCSICmd_REASSIGN_BLOCKS: number;

declare const kSCSICmd_REBUILD: number;

declare const kSCSICmd_RECEIVE: number;

declare const kSCSICmd_RECEIVE_COPY_RESULTS: number;

declare const kSCSICmd_RECEIVE_DIAGNOSTICS_RESULTS: number;

declare const kSCSICmd_REDUNDANCY_GROUP_IN: number;

declare const kSCSICmd_REDUNDANCY_GROUP_OUT: number;

declare const kSCSICmd_REGENERATE: number;

declare const kSCSICmd_RELEASE_10: number;

declare const kSCSICmd_RELEASE_6: number;

declare const kSCSICmd_REPAIR_TRACK: number;

declare const kSCSICmd_REPORT_DEVICE_IDENTIFIER: number;

declare const kSCSICmd_REPORT_KEY: number;

declare const kSCSICmd_REPORT_LUNS: number;

declare const kSCSICmd_REQUEST_SENSE: number;

declare const kSCSICmd_RESERVE_10: number;

declare const kSCSICmd_RESERVE_6: number;

declare const kSCSICmd_RESERVE_TRACK: number;

declare const kSCSICmd_REZERO_UNIT: number;

declare const kSCSICmd_SCAN_MMC: number;

declare const kSCSICmd_SEARCH_DATA_EQUAL_10: number;

declare const kSCSICmd_SEARCH_DATA_EQUAL_12: number;

declare const kSCSICmd_SEARCH_DATA_HIGH_10: number;

declare const kSCSICmd_SEARCH_DATA_HIGH_12: number;

declare const kSCSICmd_SEARCH_DATA_LOW_10: number;

declare const kSCSICmd_SEARCH_DATA_LOW_12: number;

declare const kSCSICmd_SEEK_10: number;

declare const kSCSICmd_SEEK_6: number;

declare const kSCSICmd_SEND: number;

declare const kSCSICmd_SEND_CUE_SHEET: number;

declare const kSCSICmd_SEND_DIAGNOSTICS: number;

declare const kSCSICmd_SEND_DVD_STRUCTURE: number;

declare const kSCSICmd_SEND_EVENT: number;

declare const kSCSICmd_SEND_KEY: number;

declare const kSCSICmd_SEND_OPC_INFORMATION: number;

declare const kSCSICmd_SERVICE_ACTION_IN: number;

declare const kSCSICmd_SERVICE_ACTION_OUT: number;

declare const kSCSICmd_SET_CD_SPEED: number;

declare const kSCSICmd_SET_DEVICE_IDENTIFIER: number;

declare const kSCSICmd_SET_LIMITS_10: number;

declare const kSCSICmd_SET_LIMITS_12: number;

declare const kSCSICmd_SET_READ_AHEAD: number;

declare const kSCSICmd_SET_STREAMING: number;

declare const kSCSICmd_SPARE_IN: number;

declare const kSCSICmd_SPARE_OUT: number;

declare const kSCSICmd_START_STOP_UNIT: number;

declare const kSCSICmd_STOP_PLAY_SCAN: number;

declare const kSCSICmd_SYNCHRONIZE_CACHE: number;

declare const kSCSICmd_SYNCHRONIZE_CACHE_16: number;

declare const kSCSICmd_TEST_UNIT_READY: number;

declare const kSCSICmd_UNMAP: number;

declare const kSCSICmd_UPDATE_BLOCK: number;

declare const kSCSICmd_VERIFY_10: number;

declare const kSCSICmd_VERIFY_12: number;

declare const kSCSICmd_VERIFY_16: number;

declare const kSCSICmd_VOLUME_SET_IN: number;

declare const kSCSICmd_VOLUME_SET_OUT: number;

declare const kSCSICmd_WRITE_10: number;

declare const kSCSICmd_WRITE_12: number;

declare const kSCSICmd_WRITE_16: number;

declare const kSCSICmd_WRITE_6: number;

declare const kSCSICmd_WRITE_AND_VERIFY_10: number;

declare const kSCSICmd_WRITE_AND_VERIFY_12: number;

declare const kSCSICmd_WRITE_AND_VERIFY_16: number;

declare const kSCSICmd_WRITE_ATTRIBUTE: number;

declare const kSCSICmd_WRITE_BUFFER: number;

declare const kSCSICmd_WRITE_LONG: number;

declare const kSCSICmd_WRITE_SAME: number;

declare const kSCSICmd_WRITE_SAME_16: number;

declare const kSCSICmd_XDREAD: number;

declare const kSCSICmd_XDWRITE: number;

declare const kSCSICmd_XDWRITEREAD_10: number;

declare const kSCSICmd_XDWRITE_EXTENDED: number;

declare const kSCSICmd_XPWRITE: number;

declare const kSCSIDataTransfer_FromInitiatorToTarget: number;

declare const kSCSIDataTransfer_FromTargetToInitiator: number;

declare const kSCSIDataTransfer_NoDataTransfer: number;

declare const kSCSIProtocolIdentifier_ADT: number;

declare const kSCSIProtocolIdentifier_ATAPI: number;

declare const kSCSIProtocolIdentifier_FibreChannel: number;

declare const kSCSIProtocolIdentifier_FireWire: number;

declare const kSCSIProtocolIdentifier_None: number;

declare const kSCSIProtocolIdentifier_ParallelSCSI: number;

declare const kSCSIProtocolIdentifier_RDMA: number;

declare const kSCSIProtocolIdentifier_SAS: number;

declare const kSCSIProtocolIdentifier_SSA: number;

declare const kSCSIProtocolIdentifier_iSCSI: number;

declare const kSCSIServiceAction_CHANGE_ALIASES: number;

declare const kSCSIServiceAction_GET_LBA_STATUS: number;

declare const kSCSIServiceAction_READ_32: number;

declare const kSCSIServiceAction_READ_CAPACITY_16: number;

declare const kSCSIServiceAction_READ_LONG_16: number;

declare const kSCSIServiceAction_REPORT_ALIASES: number;

declare const kSCSIServiceAction_REPORT_DEVICE_IDENTIFIER: number;

declare const kSCSIServiceAction_REPORT_PRIORITY: number;

declare const kSCSIServiceAction_REPORT_PROVISIONING_INITIALIZATION_PATTERN: number;

declare const kSCSIServiceAction_REPORT_SUPPORTED_OPERATION_CODES: number;

declare const kSCSIServiceAction_REPORT_SUPPORTED_TASK_MANAGEMENT_FUNCTIONS: number;

declare const kSCSIServiceAction_REPORT_TARGET_PORT_GROUPS: number;

declare const kSCSIServiceAction_SET_DEVICE_IDENTIFIER: number;

declare const kSCSIServiceAction_SET_PRIORITY: number;

declare const kSCSIServiceAction_SET_TARGET_PORT_GROUPS: number;

declare const kSCSIServiceAction_VERIFY_32: number;

declare const kSCSIServiceAction_WRITE_32: number;

declare const kSCSIServiceAction_WRITE_AND_VERIFY_32: number;

declare const kSCSIServiceAction_WRITE_LONG_16: number;

declare const kSCSIServiceAction_WRITE_SAME_32: number;

declare const kSCSIServiceAction_XDREAD_32: number;

declare const kSCSIServiceAction_XDWRITEREAD_32: number;

declare const kSCSIServiceAction_XDWRITE_32: number;

declare const kSCSIServiceAction_XPWRITE_32: number;

declare const kSCSIUntaggedTaskIdentifier: number;

declare const kSENSE_DATA_VALID: number;

declare const kSENSE_DATA_VALID_Mask: number;

declare const kSENSE_EOM_Mask: number;

declare const kSENSE_EOM_Not_Set: number;

declare const kSENSE_EOM_Set: number;

declare const kSENSE_FILEMARK_Mask: number;

declare const kSENSE_FILEMARK_Not_Set: number;

declare const kSENSE_FILEMARK_Set: number;

declare const kSENSE_ILI_Mask: number;

declare const kSENSE_ILI_Not_Set: number;

declare const kSENSE_ILI_Set: number;

declare const kSENSE_KEY_ABORTED_COMMAND: number;

declare const kSENSE_KEY_BLANK_CHECK: number;

declare const kSENSE_KEY_COPY_ABORTED: number;

declare const kSENSE_KEY_DATA_PROTECT: number;

declare const kSENSE_KEY_HARDWARE_ERROR: number;

declare const kSENSE_KEY_ILLEGAL_REQUEST: number;

declare const kSENSE_KEY_MEDIUM_ERROR: number;

declare const kSENSE_KEY_MISCOMPARE: number;

declare const kSENSE_KEY_Mask: number;

declare const kSENSE_KEY_NOT_READY: number;

declare const kSENSE_KEY_NO_SENSE: number;

declare const kSENSE_KEY_RECOVERED_ERROR: number;

declare const kSENSE_KEY_UNIT_ATTENTION: number;

declare const kSENSE_KEY_VENDOR_SPECIFIC: number;

declare const kSENSE_KEY_VOLUME_OVERFLOW: number;

declare const kSENSE_NOT_DATA_VALID: number;

declare const kSENSE_RESPONSE_CODE_Current_Errors: number;

declare const kSENSE_RESPONSE_CODE_Deferred_Errors: number;

declare const kSENSE_RESPONSE_CODE_Mask: number;

declare const kSESCmd_MODE_SELECT_10: number;

declare const kSESCmd_MODE_SELECT_6: number;

declare const kSESCmd_MODE_SENSE_10: number;

declare const kSESCmd_MODE_SENSE_6: number;

declare const kSESCmd_PERSISTENT_RESERVE_IN: number;

declare const kSESCmd_PERSISTENT_RESERVE_OUT: number;

declare const kSESCmd_RECEIVE_DIAGNOSTICS_RESULTS: number;

declare const kSESCmd_RELEASE_10: number;

declare const kSESCmd_RELEASE_6: number;

declare const kSESCmd_REQUEST_SENSE: number;

declare const kSESCmd_RESERVE_10: number;

declare const kSESCmd_RESERVE_6: number;

declare const kSESCmd_SEND_DIAGNOSTICS: number;

declare const kSGCCmd_CHANGE_DEFINITION: number;

declare const kSGCCmd_COMPARE: number;

declare const kSGCCmd_COPY: number;

declare const kSGCCmd_COPY_AND_VERIFY: number;

declare const kSGCCmd_GET_DATA_BUFFER_STATUS: number;

declare const kSGCCmd_GET_WINDOW: number;

declare const kSGCCmd_INQUIRY: number;

declare const kSGCCmd_LOG_SELECT: number;

declare const kSGCCmd_LOG_SENSE: number;

declare const kSGCCmd_MODE_SELECT_10: number;

declare const kSGCCmd_MODE_SELECT_6: number;

declare const kSGCCmd_MODE_SENSE_10: number;

declare const kSGCCmd_MODE_SENSE_6: number;

declare const kSGCCmd_OBJECT_POSITION: number;

declare const kSGCCmd_PORT_STATUS: number;

declare const kSGCCmd_READ: number;

declare const kSGCCmd_READ_BUFFER: number;

declare const kSGCCmd_RECEIVE_DIAGNOSTICS_RESULTS: number;

declare const kSGCCmd_RELEASE_6: number;

declare const kSGCCmd_REQUEST_SENSE: number;

declare const kSGCCmd_RESERVE_6: number;

declare const kSGCCmd_SCAN: number;

declare const kSGCCmd_SEND: number;

declare const kSGCCmd_SEND_DIAGNOSTICS: number;

declare const kSGCCmd_SET_WINDOW: number;

declare const kSGCCmd_TEST_UNIT_READY: number;

declare const kSGCCmd_WRITE_BUFFER: number;

declare const kSMCCmd_EXCHANGE_MEDIUM: number;

declare const kSMCCmd_INITIALIZE_ELEMENT_STATUS: number;

declare const kSMCCmd_MODE_SELECT_10: number;

declare const kSMCCmd_MODE_SELECT_6: number;

declare const kSMCCmd_MODE_SENSE_10: number;

declare const kSMCCmd_MODE_SENSE_6: number;

declare const kSMCCmd_MOVE_MEDIUM: number;

declare const kSMCCmd_PERSISTENT_RESERVE_IN: number;

declare const kSMCCmd_PERSISTENT_RESERVE_OUT: number;

declare const kSMCCmd_POSITION_TO_ELEMENT: number;

declare const kSMCCmd_READ_ELEMENT_STATUS: number;

declare const kSMCCmd_RELEASE_ELEMENT_10: number;

declare const kSMCCmd_RELEASE_ELEMENT_6: number;

declare const kSMCCmd_REQUEST_SENSE: number;

declare const kSMCCmd_REQUEST_VOLUME_ELEMENT_ADDRESS: number;

declare const kSMCCmd_RESERVE_ELEMENT_10: number;

declare const kSMCCmd_RESERVE_ELEMENT_6: number;

declare const kSPCCmd_CHANGE_DEFINITION: number;

declare const kSPCCmd_COMPARE: number;

declare const kSPCCmd_COPY: number;

declare const kSPCCmd_COPY_AND_VERIFY: number;

declare const kSPCCmd_EXTENDED_COPY: number;

declare const kSPCCmd_INQUIRY: number;

declare const kSPCCmd_LOG_SELECT: number;

declare const kSPCCmd_LOG_SENSE: number;

declare const kSPCCmd_MODE_SELECT_10: number;

declare const kSPCCmd_MODE_SELECT_6: number;

declare const kSPCCmd_MODE_SENSE_10: number;

declare const kSPCCmd_MODE_SENSE_6: number;

declare const kSPCCmd_MOVE_MEDIUM_ATTACHED: number;

declare const kSPCCmd_PERSISTENT_RESERVE_IN: number;

declare const kSPCCmd_PERSISTENT_RESERVE_OUT: number;

declare const kSPCCmd_PREVENT_ALLOW_MEDIUM_REMOVAL: number;

declare const kSPCCmd_READ_BUFFER: number;

declare const kSPCCmd_READ_ELEMENT_STATUS_ATTACHED: number;

declare const kSPCCmd_RECEIVE_COPY_RESULTS: number;

declare const kSPCCmd_RECEIVE_DIAGNOSTICS_RESULTS: number;

declare const kSPCCmd_RELEASE_10: number;

declare const kSPCCmd_RELEASE_6: number;

declare const kSPCCmd_REPORT_DEVICE_IDENTIFIER: number;

declare const kSPCCmd_REPORT_LUNS: number;

declare const kSPCCmd_REQUEST_SENSE: number;

declare const kSPCCmd_RESERVE_10: number;

declare const kSPCCmd_RESERVE_6: number;

declare const kSPCCmd_SEND_DIAGNOSTICS: number;

declare const kSPCCmd_SET_DEVICE_IDENTIFIER: number;

declare const kSPCCmd_TEST_UNIT_READY: number;

declare const kSPCCmd_WRITE_BUFFER: number;

declare const kSPCModePageAllPagesCode: number;

declare const kSPCModePagePowerConditionCode: number;

declare const kSPCProcCmd_CHANGE_DEFINITION: number;

declare const kSPCProcCmd_COMPARE: number;

declare const kSPCProcCmd_COPY: number;

declare const kSPCProcCmd_COPY_AND_VERIFY: number;

declare const kSPCProcCmd_EXTENDED_COPY: number;

declare const kSPCProcCmd_INQUIRY: number;

declare const kSPCProcCmd_LOG_SELECT: number;

declare const kSPCProcCmd_LOG_SENSE: number;

declare const kSPCProcCmd_PERSISTENT_RESERVE_IN: number;

declare const kSPCProcCmd_PERSISTENT_RESERVE_OUT: number;

declare const kSPCProcCmd_READ_BUFFER: number;

declare const kSPCProcCmd_RECEIVE: number;

declare const kSPCProcCmd_RECEIVE_COPY_RESULTS: number;

declare const kSPCProcCmd_RECEIVE_DIAGNOSTICS_RESULTS: number;

declare const kSPCProcCmd_RELEASE_10: number;

declare const kSPCProcCmd_RELEASE_6: number;

declare const kSPCProcCmd_REPORT_LUNS: number;

declare const kSPCProcCmd_REQUEST_SENSE: number;

declare const kSPCProcCmd_RESERVE_10: number;

declare const kSPCProcCmd_RESERVE_6: number;

declare const kSPCProcCmd_SEND: number;

declare const kSPCProcCmd_SEND_DIAGNOSTICS: number;

declare const kSPCProcCmd_TEST_UNIT_READY: number;

declare const kSPCProcCmd_WRITE_BUFFER: number;

declare const kSSCPrinterCmd_CHANGE_DEFINITION: number;

declare const kSSCPrinterCmd_COMPARE: number;

declare const kSSCPrinterCmd_COPY: number;

declare const kSSCPrinterCmd_COPY_AND_VERIFY: number;

declare const kSSCPrinterCmd_FORMAT: number;

declare const kSSCPrinterCmd_INQUIRY: number;

declare const kSSCPrinterCmd_LOG_SELECT: number;

declare const kSSCPrinterCmd_LOG_SENSE: number;

declare const kSSCPrinterCmd_MODE_SELECT_10: number;

declare const kSSCPrinterCmd_MODE_SELECT_6: number;

declare const kSSCPrinterCmd_MODE_SENSE_10: number;

declare const kSSCPrinterCmd_MODE_SENSE_6: number;

declare const kSSCPrinterCmd_PERSISTENT_RESERVE_IN: number;

declare const kSSCPrinterCmd_PERSISTENT_RESERVE_OUT: number;

declare const kSSCPrinterCmd_PRINT: number;

declare const kSSCPrinterCmd_READ_BUFFER: number;

declare const kSSCPrinterCmd_RECEIVE_DIAGNOSTICS_RESULTS: number;

declare const kSSCPrinterCmd_RECOVER_BUFFERED_DATA: number;

declare const kSSCPrinterCmd_RELEASE_10: number;

declare const kSSCPrinterCmd_RELEASE_6: number;

declare const kSSCPrinterCmd_REPORT_LUNS: number;

declare const kSSCPrinterCmd_REQUEST_SENSE: number;

declare const kSSCPrinterCmd_RESERVE_10: number;

declare const kSSCPrinterCmd_RESERVE_6: number;

declare const kSSCPrinterCmd_SEND_DIAGNOSTICS: number;

declare const kSSCPrinterCmd_SLEW_AND_PRINT: number;

declare const kSSCPrinterCmd_STOP_PRINT: number;

declare const kSSCPrinterCmd_SYNCHRONIZE_BUFFER: number;

declare const kSSCPrinterCmd_TEST_UNIT_READY: number;

declare const kSSCPrinterCmd_WRITE_BUFFER: number;

declare const kSSCSeqCmd_CHANGE_DEFINITION: number;

declare const kSSCSeqCmd_COMPARE: number;

declare const kSSCSeqCmd_COPY: number;

declare const kSSCSeqCmd_COPY_AND_VERIFY: number;

declare const kSSCSeqCmd_ERASE: number;

declare const kSSCSeqCmd_FORMAT_MEDIUM: number;

declare const kSSCSeqCmd_INQUIRY: number;

declare const kSSCSeqCmd_LOAD_UNLOAD: number;

declare const kSSCSeqCmd_LOCATE: number;

declare const kSSCSeqCmd_LOG_SELECT: number;

declare const kSSCSeqCmd_LOG_SENSE: number;

declare const kSSCSeqCmd_MODE_SELECT_10: number;

declare const kSSCSeqCmd_MODE_SELECT_6: number;

declare const kSSCSeqCmd_MODE_SENSE_10: number;

declare const kSSCSeqCmd_MODE_SENSE_6: number;

declare const kSSCSeqCmd_MOVE_MEDIUM: number;

declare const kSSCSeqCmd_MOVE_MEDIUM_ATTACHED: number;

declare const kSSCSeqCmd_PERSISTENT_RESERVE_IN: number;

declare const kSSCSeqCmd_PERSISTENT_RESERVE_OUT: number;

declare const kSSCSeqCmd_PREVENT_ALLOW_MEDIUM_REMOVAL: number;

declare const kSSCSeqCmd_READ_6: number;

declare const kSSCSeqCmd_READ_BLOCK_LIMITS: number;

declare const kSSCSeqCmd_READ_BUFFER: number;

declare const kSSCSeqCmd_READ_ELEMENT_STATUS: number;

declare const kSSCSeqCmd_READ_ELEMENT_STATUS_ATTACHED: number;

declare const kSSCSeqCmd_READ_POSITION: number;

declare const kSSCSeqCmd_READ_REVERSE: number;

declare const kSSCSeqCmd_RECEIVE_DIAGNOSTICS_RESULTS: number;

declare const kSSCSeqCmd_RECOVER_BUFFERED_DATA: number;

declare const kSSCSeqCmd_RELEASE_10: number;

declare const kSSCSeqCmd_RELEASE_6: number;

declare const kSSCSeqCmd_REPORT_DENSITY_SUPPORT: number;

declare const kSSCSeqCmd_REPORT_LUNS: number;

declare const kSSCSeqCmd_REQUEST_SENSE: number;

declare const kSSCSeqCmd_RESERVE_10: number;

declare const kSSCSeqCmd_RESERVE_6: number;

declare const kSSCSeqCmd_REWIND: number;

declare const kSSCSeqCmd_SEND_DIAGNOSTICS: number;

declare const kSSCSeqCmd_SPACE: number;

declare const kSSCSeqCmd_TEST_UNIT_READY: number;

declare const kSSCSeqCmd_VERIFY_6: number;

declare const kSSCSeqCmd_WRITE_6: number;

declare const kSSCSeqCmd_WRITE_BUFFER: number;

declare const kSSCSeqCmd_WRITE_FILEMARKS: number;

declare const kSecondScale: number;

declare const kSecondsInAMinute: number;

declare const kSenseDefaultSize: number;

declare const kSetAddress: number;

declare const kSetCLUTByValue: number;

declare const kSetCLUTImmediately: number;

declare const kSetCLUTWithLuminance: number;

declare const kSetConfiguration: number;

declare const kSetDescriptor: number;

declare const kSetDeviceFeature: number;

declare const kSetEndpointFeature: number;

declare const kSetInterface: number;

declare const kSetInterfaceFeature: number;

declare const kSizeOfATAModelString: number;

declare const kSizeOfATARevisionString: number;

declare const kStandbySupportedMask: number;

declare const kStandbyTimerBit: number;

declare const kSuperSpeedBusBitMask: number;

declare const kSyncFrame: number;

declare const kTickScale: number;

declare const kTransparentEncodedPixel: number;

declare const kTransparentEncoding: number;

declare const kTransparentEncodingShift: number;

declare const kUSB100mA: number;

declare const kUSB100mAAvailable: number;

declare const kUSB150mA: number;

declare const kUSB150mAAvailable: number;

declare const kUSB20ExtensionLPMSupported: number;

declare const kUSB2ComplianceDeviceProtocol: number;

declare const kUSB2MaxPowerPerPort: number;

declare const kUSB3HUBDesc: number;

declare const kUSB3MaxPowerPerPort: number;

declare const kUSB500mAAvailable: number;

declare const kUSB900mAAvailable: number;

declare const kUSBATMNetworkingSubClass: number;

declare const kUSBAdaptiveIsocSyncType: number;

declare const kUSBAddress_Mask: number;

declare const kUSBAddress_Shift: number;

declare const kUSBAllStreams: number;

declare const kUSBAnyDesc: number;

declare const kUSBAnyDirn: number;

declare const kUSBAnyType: number;

declare const kUSBApplicationSpecificClass: number;

declare const kUSBApplicationSpecificInterfaceClass: number;

declare const kUSBAsynchronousIsocSyncType: number;

declare const kUSBAtrBusPowered: number;

declare const kUSBAtrRemoteWakeup: number;

declare const kUSBAtrSelfPowered: number;

declare const kUSBAudioClass: number;

declare const kUSBAudioControlSubClass: number;

declare const kUSBAudioInterfaceClass: number;

declare const kUSBAudioStreamingSubClass: number;

declare const kUSBBOSDescriptor: number;

declare const kUSBBillBoardClass: number;

declare const kUSBBillboardAdditinalInfoNoPower: number;

declare const kUSBBillboardAdditinalInfoNoUSBPD: number;

declare const kUSBBillboardAltModeConfigSuccess: number;

declare const kUSBBillboardConfigNotAttempted: number;

declare const kUSBBillboardConfigUnsuccessful: number;

declare const kUSBBillboardUnspecifiedError: number;

declare const kUSBBillboardVConn1P5Watt: number;

declare const kUSBBillboardVConn1Watt: number;

declare const kUSBBillboardVConn2Watt: number;

declare const kUSBBillboardVConn3Watt: number;

declare const kUSBBillboardVConn4Watt: number;

declare const kUSBBillboardVConn5Watt: number;

declare const kUSBBillboardVConn6Watt: number;

declare const kUSBBillboardVConnReserved: number;

declare const kUSBBluetoothProgrammingInterfaceProtocol: number;

declare const kUSBBulk: number;

declare const kUSBCTBNotEnoughPowerNotificationType: number;

declare const kUSBCTBUnsupportedNotificationType: number;

declare const kUSBCUnsupportedTBCableNotificationType: number;

declare const kUSBCUnsupportedTBPortNotificationType: number;

declare const kUSBCapsLockKey: number;

declare const kUSBChipSmartCardInterfaceClass: number;

declare const kUSBClass: number;

declare const kUSBCommAbstractSubClass: number;

declare const kUSBCommCAPISubClass: number;

declare const kUSBCommClass: number;

declare const kUSBCommDirectLineSubClass: number;

declare const kUSBCommEthernetNetworkingSubClass: number;

declare const kUSBCommMultiChannelSubClass: number;

declare const kUSBCommTelephoneSubClass: number;

declare const kUSBCommonClassSubClass: number;

declare const kUSBCommunicationClass: number;

declare const kUSBCommunicationControlInterfaceClass: number;

declare const kUSBCommunicationDataInterfaceClass: number;

declare const kUSBCompositeClass: number;

declare const kUSBCompositeSubClass: number;

declare const kUSBConfDesc: number;

enum kUSBConnectable {

	PortNotConnectable = 0,

	PortConnectable = 1
}


declare const kUSBContentSecurityInterfaceClass: number;

declare const kUSBControl: number;

declare const kUSBDFUAttributesMask: number;

declare const kUSBDFUCanDownloadBit: number;

declare const kUSBDFUCanUploadBit: number;

declare const kUSBDFUManifestationTolerantBit: number;

declare const kUSBDFUSubClass: number;

declare const kUSBDataClass: number;

declare const kUSBDataIsocUsageType: number;

declare const kUSBDefaultControlCompletionTimeoutMS: number;

declare const kUSBDefaultControlNoDataTimeoutMS: number;

declare const kUSBDevice: number;

declare const kUSBDeviceCapability: number;

declare const kUSBDeviceCapabilityBillboard: number;

declare const kUSBDeviceCapabilityBillboardAltMode: number;

declare const kUSBDeviceCapabilityContainerID: number;

declare const kUSBDeviceCapabilitySuperSpeedUSB: number;

declare const kUSBDeviceCapabilityUSB20Extension: number;

declare const kUSBDeviceCapabilityWirelessUSB: number;

declare const kUSBDeviceCountExceededNotificationType: number;

declare const kUSBDeviceDesc: number;

declare const kUSBDeviceIDMask: number;

declare const kUSBDeviceIDShift: number;

declare const kUSBDeviceMask: number;

declare const kUSBDeviceQualifierDesc: number;

declare const kUSBDeviceSpeedFull: number;

declare const kUSBDeviceSpeedHigh: number;

declare const kUSBDeviceSpeedLow: number;

declare const kUSBDeviceSpeedSuper: number;

declare const kUSBDeviceSpeedSuperPlus: number;

declare const kUSBDeviceSpeedSuperPlusBy2: number;

declare const kUSBDiagnosticClass: number;

declare const kUSBDiagnosticDeviceInterfaceClass: number;

declare const kUSBDisplayClass: number;

declare const kUSBEndPtShift: number;

declare const kUSBEndpoint: number;

declare const kUSBEndpointCountExceededNotificationType: number;

declare const kUSBEndpointDesc: number;

declare const kUSBEndpointDirectionIn: number;

declare const kUSBEndpointDirectionOut: number;

declare const kUSBEndpointPropertiesVersion3: number;

declare const kUSBEndpointTransferTypeUCMask: number;

declare const kUSBEndpointbmAttributesSynchronizationTypeMask: number;

declare const kUSBEndpointbmAttributesSynchronizationTypeShift: number;

declare const kUSBEndpointbmAttributesTransferTypeMask: number;

declare const kUSBEndpointbmAttributesUsageTypeMask: number;

declare const kUSBEndpointbmAttributesUsageTypeShift: number;

declare const kUSBFeatureDeviceRemoteWakeup: number;

declare const kUSBFeatureEndpointStall: number;

declare const kUSBFeatureFunctionSuspend: number;

declare const kUSBFeatureLTMEnable: number;

declare const kUSBFeatureTestMode: number;

declare const kUSBFeatureU1Enable: number;

declare const kUSBFeatureU2Enable: number;

declare const kUSBFeedbackIsocUsageType: number;

declare const kUSBFullSpeedMicrosecondsInFrame: number;

declare const kUSBFunctionRemoteWakeCapableBit: number;

declare const kUSBFunctionRemoteWakeEnableBit: number;

declare const kUSBFunctionRemoteWakeupBit: number;

declare const kUSBGangOverCurrentNotificationType: number;

declare const kUSBHIDBootInterfaceSubClass: number;

declare const kUSBHIDClass: number;

declare const kUSBHIDDesc: number;

declare const kUSBHIDInterfaceClass: number;

declare const kUSBHUBDesc: number;

declare const kUSBHighSpeedMicrosecondsInFrame: number;

enum kUSBHostConnectorType {

	BTypeAConnector = 0,

	BTypeMiniABConnector = 1,

	BTypeExpressCard = 2,

	B3TypeStdAConnector = 3,

	B3TypeStdBConnector = 4,

	B3TypeMicroBConnector = 5,

	B3TypeMicroABConnector = 6,

	B3TypePowerBConnector = 7,

	BProprietaryConnector = 255
}


declare const kUSBHubClass: number;

declare const kUSBHubCountExceededNotificationType: number;

declare const kUSBHubSubClass: number;

declare const kUSBImageInterfaceClass: number;

declare const kUSBImplicitFeedbackDataIsocUsageType: number;

declare const kUSBIn: number;

declare const kUSBIndividualOverCurrentNotificationType: number;

declare const kUSBInterface: number;

declare const kUSBInterfaceAssociationDesc: number;

declare const kUSBInterfaceDesc: number;

declare const kUSBInterfaceIDMask: number;

declare const kUSBInterfaceIDShift: number;

declare const kUSBInterfacePowerDesc: number;

declare const kUSBInterrupt: number;

declare const kUSBIrDABridgeSubClass: number;

declare const kUSBIsoc: number;

declare const kUSBLowLatencyIsochTransferKey: number;

declare const kUSBLowPowerSuspendStateBit: number;

declare const kUSBMIDIStreamingSubClass: number;

declare const kUSBMassStorageATAPISubClass: number;

declare const kUSBMassStorageClass: number;

declare const kUSBMassStorageInterfaceClass: number;

declare const kUSBMassStorageQIC157SubClass: number;

declare const kUSBMassStorageRBCSubClass: number;

declare const kUSBMassStorageSCSISubClass: number;

declare const kUSBMassStorageSFF8070iSubClass: number;

declare const kUSBMassStorageUFISubClass: number;

declare const kUSBMaxDevice: number;

declare const kUSBMaxDevices: number;

declare const kUSBMaxFSIsocEndpointReqCount: number;

declare const kUSBMaxHSIsocEndpointReqCount: number;

declare const kUSBMaxHSIsocFrameCount: number;

declare const kUSBMaxInterfaces: number;

declare const kUSBMaxPipes: number;

declare const kUSBMaxStream: number;

declare const kUSBMiscellaneousClass: number;

declare const kUSBNoPipeIdx: number;

declare const kUSBNoStream: number;

declare const kUSBNoSynchronizationIsocSyncType: number;

declare const kUSBNoUserNotificationType: number;

declare const kUSBNone: number;

declare const kUSBNotEnoughPowerNoACNotificationType: number;

declare const kUSBNotEnoughPowerNotificationType: number;

declare const kUSBNotificationInterruptUsageType: number;

declare const kUSBNotificationPostForcedResumeBit: number;

declare const kUSBNotificationPostForcedSuspendBit: number;

declare const kUSBNotificationPreForcedResumeBit: number;

declare const kUSBNotificationPreForcedSuspendBit: number;

declare const kUSBNumLockKey: number;

declare const kUSBOnTheGoDesc: number;

declare const kUSBOther: number;

declare const kUSBOtherSpeedConfDesc: number;

declare const kUSBOut: number;

declare const kUSBPRimeStream: number;

declare const kUSBPeriodicInterruptUsageType: number;

declare const kUSBPersonalHealthcareClass: number;

declare const kUSBPersonalHealthcareInterfaceClass: number;

declare const kUSBPhysicalDesc: number;

declare const kUSBPhysicalInterfaceClass: number;

declare const kUSBPipeIDMask: number;

declare const kUSBPrintingClass: number;

declare const kUSBPrintingInterfaceClass: number;

declare const kUSBRFControllerSubClass: number;

declare const kUSBRel10: number;

declare const kUSBRel11: number;

declare const kUSBRel20: number;

declare const kUSBRel30: number;

declare const kUSBReportDesc: number;

declare const kUSBReprogrammableDiagnosticSubClass: number;

declare const kUSBRqClearFeature: number;

declare const kUSBRqDirnMask: number;

declare const kUSBRqDirnShift: number;

declare const kUSBRqGetConfig: number;

declare const kUSBRqGetDescriptor: number;

declare const kUSBRqGetInterface: number;

declare const kUSBRqGetState: number;

declare const kUSBRqGetStatus: number;

declare const kUSBRqRecipientMask: number;

declare const kUSBRqReserved2: number;

declare const kUSBRqSetAddress: number;

declare const kUSBRqSetConfig: number;

declare const kUSBRqSetDescriptor: number;

declare const kUSBRqSetFeature: number;

declare const kUSBRqSetInterface: number;

declare const kUSBRqSyncFrame: number;

declare const kUSBRqTypeMask: number;

declare const kUSBRqTypeShift: number;

declare const kUSBScrollLockKey: number;

declare const kUSBSetIsochDelay: number;

declare const kUSBSetSel: number;

declare const kUSBSpeed_Mask: number;

declare const kUSBSpeed_Shift: number;

declare const kUSBStandard: number;

declare const kUSBStream0: number;

declare const kUSBStreamIDAllStreamsMask: number;

declare const kUSBStreamIDMask: number;

declare const kUSBStringDesc: number;

declare const kUSBSuperSpeedEndpointCompanion: number;

declare const kUSBSuperSpeedLTMCapable: number;

declare const kUSBSuperSpeedSupportsFS: number;

declare const kUSBSuperSpeedSupportsHS: number;

declare const kUSBSuperSpeedSupportsLS: number;

declare const kUSBSuperSpeedSupportsSS: number;

declare const kUSBSynchronousIsocSyncType: number;

declare const kUSBTDMLowBatteryType: number;

declare const kUSBTestMeasurementSubClass: number;

declare const kUSBTooManyDevicesAddress: number;

declare const kUSBUCRequestWithoutUSBNotificationMask: number;

declare const kUSBUnsupportedNotificationType: number;

declare const kUSBVendor: number;

declare const kUSBVendorSpecificClass: number;

declare const kUSBVendorSpecificInterfaceClass: number;

declare const kUSBVendorSpecificProtocol: number;

declare const kUSBVideoControlSubClass: number;

declare const kUSBVideoInterfaceClass: number;

declare const kUSBVideoInterfaceCollectionSubClass: number;

declare const kUSBVideoStreamingSubClass: number;

declare const kUSBWirelessControllerClass: number;

declare const kUSBWirelessControllerInterfaceClass: number;

declare const kUSB_EPDesc_MaxMPS: number;

declare const kUSB_EPDesc_bmAttributes_SyncType_Mask: number;

declare const kUSB_EPDesc_bmAttributes_SyncType_Shift: number;

declare const kUSB_EPDesc_bmAttributes_TranType_Mask: number;

declare const kUSB_EPDesc_bmAttributes_TranType_Shift: number;

declare const kUSB_EPDesc_bmAttributes_UsageType_Mask: number;

declare const kUSB_EPDesc_bmAttributes_UsageType_Shift: number;

declare const kUSB_EPDesc_wMaxPacketSize_MPS_Mask: number;

declare const kUSB_EPDesc_wMaxPacketSize_MPS_Shift: number;

declare const kUSB_HSFSEPDesc_wMaxPacketSize_Mult_Mask: number;

declare const kUSB_HSFSEPDesc_wMaxPacketSize_Mult_Shift: number;

declare const kUSB_SSCompDesc_Bulk_MaxStreams_Mask: number;

declare const kUSB_SSCompDesc_Bulk_MaxStreams_Shift: number;

declare const kUSB_SSCompDesc_Isoc_Mult_Mask: number;

declare const kUSB_SSCompDesc_Isoc_Mult_Shift: number;

declare const kUSBbEndpointAddressMask: number;

declare const kUSBbEndpointDirectionBit: number;

declare const kUSBbEndpointDirectionMask: number;

declare const kUSBiOSDeviceNotEnoughPowerNotificationType: number;

declare const kUSDebugDesc: number;

declare const kUSPrintingClassGePortStatus: number;

declare const kUSPrintingClassGetDeviceID: number;

declare const kUSPrintingClassSoftReset: number;

declare const kXHCISSRootHubAddress: number;

declare const kXHCIUSB2RootHubAddress: number;

enum tIOUSBHostConnectionSpeed {

	kIOUSBHostConnectionSpeedNone = 0,

	kIOUSBHostConnectionSpeedFull = 1,

	kIOUSBHostConnectionSpeedLow = 2,

	kIOUSBHostConnectionSpeedHigh = 3,

	kIOUSBHostConnectionSpeedSuper = 4,

	kIOUSBHostConnectionSpeedSuperPlus = 5,

	kIOUSBHostConnectionSpeedSuperPlusBy2 = 6,

	kIOUSBHostConnectionSpeedCount = 7
}


enum tIOUSBHostPortStatus {

	kIOUSBHostPortStatusPortTypeMask = 15,

	kIOUSBHostPortStatusPortTypePhase = 0,

	kIOUSBHostPortStatusPortTypeStandard = 0,

	kIOUSBHostPortStatusPortTypeCaptive = 1,

	kIOUSBHostPortStatusPortTypeInternal = 2,

	kIOUSBHostPortStatusPortTypeAccessory = 3,

	kIOUSBHostPortStatusPortTypeReserved = 240,

	kIOUSBHostPortStatusConnectedSpeedMask = 1792,

	kIOUSBHostPortStatusConnectedSpeedPhase = 8,

	kIOUSBHostPortStatusConnectedSpeedNone = 0,

	kIOUSBHostPortStatusConnectedSpeedFull = 256,

	kIOUSBHostPortStatusConnectedSpeedLow = 512,

	kIOUSBHostPortStatusConnectedSpeedHigh = 768,

	kIOUSBHostPortStatusConnectedSpeedSuper = 1024,

	kIOUSBHostPortStatusConnectedSpeedSuperPlus = 1280,

	kIOUSBHostPortStatusConnectedSpeedSuperPlusBy2 = 1536,

	kIOUSBHostPortStatusResetting = 2048,

	kIOUSBHostPortStatusEnabled = 4096,

	kIOUSBHostPortStatusSuspended = 8192,

	kIOUSBHostPortStatusOvercurrent = 16384,

	kIOUSBHostPortStatusTestMode = 32768
}


enum tIOUSBHostPortType {

	kIOUSBHostPortTypeStandard = 0,

	kIOUSBHostPortTypeCaptive = 1,

	kIOUSBHostPortTypeInternal = 2,

	kIOUSBHostPortTypeAccessory = 3,

	kIOUSBHostPortTypeExpressCard = 4,

	kIOUSBHostPortTypeCount = 5
}

