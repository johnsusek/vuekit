
enum ACTION {

	FIND = 0,

	ENTER = 1
}


interface BTHeaderRec {
	treeDepth: number;
	rootNode: number;
	leafRecords: number;
	firstLeafNode: number;
	lastLeafNode: number;
	nodeSize: number;
	maxKeyLength: number;
	totalNodes: number;
	freeNodes: number;
	reserved1: number;
	clumpSize: number;
	btreeType: number;
	keyCompareType: number;
	attributes: number;
	reserved3: number;
}
declare var BTHeaderRec: BTHeaderRec;

interface BTNodeDescriptor {
	fLink: number;
	bLink: number;
	kind: number;
	height: number;
	numRecords: number;
	reserved: number;
}
declare var BTNodeDescriptor: BTNodeDescriptor;

enum BTreeKeyLimits {

	kMaxKeyLength = 520
}


declare var COLORS: number;

declare function COLOR_PAIR(p1: number): number;

declare var COLOR_PAIRS: number;

declare var COLS: number;

interface DBM {
	__opaque: number;
}
declare var DBM: DBM;

interface DIR {
	__dd_fd: number;
	__dd_loc: number;
	__dd_size: number;
	__dd_buf: string;
	__dd_len: number;
	__dd_seek: number;
	__padding: number;
	__dd_flags: number;
	__dd_lock: _opaque_pthread_mutex_t;
	__dd_td: any;
}
declare var DIR: DIR;

interface Dl_info {
	dli_fname: string;
	dli_fbase: any;
	dli_sname: string;
	dli_saddr: any;
}
declare var Dl_info: Dl_info;

interface ENTRY {
	key: string;
	data: any;
}
declare var ENTRY: ENTRY;

declare var ESCDELAY: number;

interface FILE {
	_p: string;
	_r: number;
	_w: number;
	_flags: number;
	_file: number;
	_bf: __sbuf;
	_lbfsize: number;
	_cookie: any;
	_close: (p1: any) => number;
	_read: (p1: any, p2: string, p3: number) => number;
	_seek: (p1: any, p2: number, p3: number) => number;
	_write: (p1: any, p2: string, p3: number) => number;
	_ub: __sbuf;
	_extra: any;
	_ur: number;
	_ubuf: number;
	_nbuf: number;
	_lb: __sbuf;
	_blksize: number;
	_offset: number;
}
declare var FILE: FILE;

interface FTW {
	base: number;
	level: number;
}
declare var FTW: FTW;

interface FixedPoint {
	x: number;
	y: number;
}
declare var FixedPoint: FixedPoint;

interface FixedRect {
	left: number;
	top: number;
	right: number;
	bottom: number;
}
declare var FixedRect: FixedRect;

interface Float32Point {
	x: number;
	y: number;
}
declare var Float32Point: Float32Point;

interface Float80 {
	exp: number;
	man: number;
}
declare var Float80: Float80;

interface Float96 {
	exp: number;
	man: number;
}
declare var Float96: Float96;

interface FndrDirInfo {
	frRect: { top: number; left: number; bottom: number; right: number; };
	frFlags: number;
	frLocation: { v: number; h: number; };
	opaque: number;
}
declare var FndrDirInfo: FndrDirInfo;

interface FndrExtendedDirInfo {
	document_id: number;
	date_added: number;
	extended_flags: number;
	reserved3: number;
	write_gen_counter: number;
}
declare var FndrExtendedDirInfo: FndrExtendedDirInfo;

interface FndrExtendedFileInfo {
	document_id: number;
	date_added: number;
	extended_flags: number;
	reserved2: number;
	write_gen_counter: number;
}
declare var FndrExtendedFileInfo: FndrExtendedFileInfo;

interface FndrFileInfo {
	fdType: number;
	fdCreator: number;
	fdFlags: number;
	fdLocation: { v: number; h: number; };
	opaque: number;
}
declare var FndrFileInfo: FndrFileInfo;

interface FndrOpaqueInfo {
	opaque: number;
}
declare var FndrOpaqueInfo: FndrOpaqueInfo;

interface HFSCatalogFile {
	recordType: number;
	flags: number;
	fileType: number;
	userInfo: FndrFileInfo;
	fileID: number;
	dataStartBlock: number;
	dataLogicalSize: number;
	dataPhysicalSize: number;
	rsrcStartBlock: number;
	rsrcLogicalSize: number;
	rsrcPhysicalSize: number;
	createDate: number;
	modifyDate: number;
	backupDate: number;
	finderInfo: FndrOpaqueInfo;
	clumpSize: number;
	dataExtents: HFSExtentDescriptor;
	rsrcExtents: HFSExtentDescriptor;
	reserved: number;
}
declare var HFSCatalogFile: HFSCatalogFile;

interface HFSCatalogFolder {
	recordType: number;
	flags: number;
	valence: number;
	folderID: number;
	createDate: number;
	modifyDate: number;
	backupDate: number;
	userInfo: FndrDirInfo;
	finderInfo: FndrOpaqueInfo;
	reserved: number;
}
declare var HFSCatalogFolder: HFSCatalogFolder;

interface HFSCatalogKey {
	keyLength: number;
	reserved: number;
	parentID: number;
	nodeName: number;
}
declare var HFSCatalogKey: HFSCatalogKey;

interface HFSCatalogThread {
	recordType: number;
	reserved: number;
	parentID: number;
	nodeName: number;
}
declare var HFSCatalogThread: HFSCatalogThread;

interface HFSExtentDescriptor {
	startBlock: number;
	blockCount: number;
}
declare var HFSExtentDescriptor: HFSExtentDescriptor;

interface HFSExtentKey {
	keyLength: number;
	forkType: number;
	fileID: number;
	startBlock: number;
}
declare var HFSExtentKey: HFSExtentKey;

interface HFSMasterDirectoryBlock {
	drSigWord: number;
	drCrDate: number;
	drLsMod: number;
	drAtrb: number;
	drNmFls: number;
	drVBMSt: number;
	drAllocPtr: number;
	drNmAlBlks: number;
	drAlBlkSiz: number;
	drClpSiz: number;
	drAlBlSt: number;
	drNxtCNID: number;
	drFreeBks: number;
	drVN: number;
	drVolBkUp: number;
	drVSeqNum: number;
	drWrCnt: number;
	drXTClpSiz: number;
	drCTClpSiz: number;
	drNmRtDirs: number;
	drFilCnt: number;
	drDirCnt: number;
	drFndrInfo: number;
	drEmbedSigWord: number;
	drEmbedExtent: HFSExtentDescriptor;
	drXTFlSize: number;
	drXTExtRec: HFSExtentDescriptor;
	drCTFlSize: number;
	drCTExtRec: HFSExtentDescriptor;
}
declare var HFSMasterDirectoryBlock: HFSMasterDirectoryBlock;

interface HFSPlusAttrData {
	recordType: number;
	reserved: number;
	attrSize: number;
	attrData: number;
}
declare var HFSPlusAttrData: HFSPlusAttrData;

interface HFSPlusAttrExtents {
	recordType: number;
	reserved: number;
	extents: HFSPlusExtentDescriptor;
}
declare var HFSPlusAttrExtents: HFSPlusAttrExtents;

interface HFSPlusAttrForkData {
	recordType: number;
	reserved: number;
	theFork: HFSPlusForkData;
}
declare var HFSPlusAttrForkData: HFSPlusAttrForkData;

interface HFSPlusAttrInlineData {
	recordType: number;
	reserved: number;
	logicalSize: number;
	userData: number;
}
declare var HFSPlusAttrInlineData: HFSPlusAttrInlineData;

interface HFSPlusAttrKey {
	keyLength: number;
	pad: number;
	fileID: number;
	startBlock: number;
	attrNameLen: number;
	attrName: number;
}
declare var HFSPlusAttrKey: HFSPlusAttrKey;

interface HFSPlusCatalogKey {
	keyLength: number;
	parentID: number;
	nodeName: HFSUniStr255;
}
declare var HFSPlusCatalogKey: HFSPlusCatalogKey;

interface HFSPlusCatalogThread {
	recordType: number;
	reserved: number;
	parentID: number;
	nodeName: HFSUniStr255;
}
declare var HFSPlusCatalogThread: HFSPlusCatalogThread;

interface HFSPlusExtentDescriptor {
	startBlock: number;
	blockCount: number;
}
declare var HFSPlusExtentDescriptor: HFSPlusExtentDescriptor;

interface HFSPlusExtentKey {
	keyLength: number;
	forkType: number;
	pad: number;
	fileID: number;
	startBlock: number;
}
declare var HFSPlusExtentKey: HFSPlusExtentKey;

interface HFSPlusForkData {
	logicalSize: number;
	clumpSize: number;
	totalBlocks: number;
	extents: HFSPlusExtentDescriptor;
}
declare var HFSPlusForkData: HFSPlusForkData;

interface HFSPlusVolumeHeader {
	signature: number;
	version: number;
	attributes: number;
	lastMountedVersion: number;
	journalInfoBlock: number;
	createDate: number;
	modifyDate: number;
	backupDate: number;
	checkedDate: number;
	fileCount: number;
	folderCount: number;
	blockSize: number;
	totalBlocks: number;
	freeBlocks: number;
	nextAllocation: number;
	rsrcClumpSize: number;
	dataClumpSize: number;
	nextCatalogID: number;
	writeCount: number;
	encodingsBitmap: number;
	finderInfo: number;
	allocationFile: HFSPlusForkData;
	extentsFile: HFSPlusForkData;
	catalogFile: HFSPlusForkData;
	attributesFile: HFSPlusForkData;
	startupFile: HFSPlusForkData;
}
declare var HFSPlusVolumeHeader: HFSPlusVolumeHeader;

interface HFSUniStr255 {
	length: number;
	unicode: number;
}
declare var HFSUniStr255: HFSUniStr255;

interface JournalInfoBlock {
	flags: number;
	device_signature: number;
	offset: number;
	size: number;
	ext_jnl_uuid: number;
	machine_serial_num: number;
	reserved: number;
}
declare var JournalInfoBlock: JournalInfoBlock;

declare var KERNEL_AUDIT_TOKEN: audit_token_t;

declare var KERNEL_SECURITY_TOKEN: security_token_t;

declare var LINES: number;

interface MEVENT {
	id: number;
	x: number;
	y: number;
	z: number;
	bstate: number;
}
declare var MEVENT: MEVENT;

declare var NDR_record: NDR_record_t;

interface NDR_record_t {
	mig_vers: number;
	if_vers: number;
	reserved1: number;
	mig_encoding: number;
	int_rep: number;
	char_rep: number;
	float_rep: number;
	reserved2: number;
}
declare var NDR_record_t: NDR_record_t;

enum NXByteOrder {

	X_UnknownByteOrder = 0,

	X_LittleEndian = 1,

	X_BigEndian = 2
}


interface NumVersion {
	nonRelRev: number;
	stage: number;
	minorAndBugRev: number;
	majorRev: number;
}
declare var NumVersion: NumVersion;

declare function OSAtomicDequeue(__list: OSQueueHead, __offset: number): any;

declare function OSAtomicEnqueue(__list: OSQueueHead, __new: any, __offset: number): void;

declare function OSAtomicFifoDequeue(__list: OSFifoQueueHead, __offset: number): any;

declare function OSAtomicFifoEnqueue(__list: OSFifoQueueHead, __new: any, __offset: number): void;

declare const OSBigEndian: number;

interface OSFifoQueueHead {
	opaque1: any;
	opaque2: any;
	opaque3: number;
}
declare var OSFifoQueueHead: OSFifoQueueHead;

declare const OSLittleEndian: number;

interface OSQueueHead {
	opaque1: any;
	opaque2: number;
}
declare var OSQueueHead: OSQueueHead;

declare const OSUnknownByteOrder: number;

declare function PAIR_NUMBER(p1: number): number;

interface Point {
	v: number;
	h: number;
}
declare var Point: Point;

interface ProcessSerialNumber {
	highLongOfPSN: number;
	lowLongOfPSN: number;
}
declare var ProcessSerialNumber: ProcessSerialNumber;

interface Rect {
	top: number;
	left: number;
	bottom: number;
	right: number;
}
declare var Rect: Rect;

declare const SOCKINFO_GENERIC: number;

declare const SOCKINFO_IN: number;

declare const SOCKINFO_KERN_CTL: number;

declare const SOCKINFO_KERN_EVENT: number;

declare const SOCKINFO_NDRV: number;

declare const SOCKINFO_TCP: number;

declare const SOCKINFO_UN: number;

declare var TABSIZE: number;

interface TimeRecord {
	value: wide;
	scale: number;
	base: any;
}
declare var TimeRecord: TimeRecord;

interface UnsignedWide {
	lo: number;
	hi: number;
}
declare var UnsignedWide: UnsignedWide;

enum VISIT {

	preorder = 0,

	postorder = 1,

	endorder = 2,

	leaf = 3
}


interface VersRec {
	numericVersion: NumVersion;
	countryCode: number;
	shortVersion: number;
	reserved: number;
}
declare var VersRec: VersRec;

declare function _Block_copy(aBlock: any): any;

declare function _Block_object_assign(p1: any, p2: any, p3: number): void;

declare function _Block_object_dispose(p1: any, p2: number): void;

declare function _Block_release(aBlock: any): void;

declare var _CurrentRuneLocale: _RuneLocale;

declare var _DefaultRuneLocale: _RuneLocale;

declare function _Exit(p1: number): void;

declare function _ExitFunction(p1: number): void;

declare var _FE_DFL_DISABLE_SSE_DENORMS_ENV: fenv_t;

declare var _FE_DFL_ENV: fenv_t;

declare var _NSConcreteGlobalBlock: any;

declare var _NSConcreteStackBlock: any;

interface _RuneCharClass {
	__name: number;
	__mask: number;
}
declare var _RuneCharClass: _RuneCharClass;

interface _RuneEntry {
	__min: number;
	__max: number;
	__map: number;
	__types: number;
}
declare var _RuneEntry: _RuneEntry;

interface _RuneLocale {
	__magic: number;
	__encoding: number;
	__sgetrune: (p1: string, p2: number, p3: string) => number;
	__sputrune: (p1: number, p2: string, p3: number, p4: string) => number;
	__invalid_rune: number;
	__runetype: number;
	__maplower: number;
	__mapupper: number;
	__runetype_ext: _RuneRange;
	__maplower_ext: _RuneRange;
	__mapupper_ext: _RuneRange;
	__variable: any;
	__variable_len: number;
	__ncharclasses: number;
	__charclasses: _RuneCharClass;
}
declare var _RuneLocale: _RuneLocale;

interface _RuneRange {
	__nranges: number;
	__ranges: _RuneEntry;
}
declare var _RuneRange: _RuneRange;

interface __Reply___host_page_size_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	out_page_size: number;
}
declare var __Reply___host_page_size_t: __Reply___host_page_size_t;

interface __Reply___mach_make_memory_entry_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	object_handle: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	size: number;
}
declare var __Reply___mach_make_memory_entry_t: __Reply___mach_make_memory_entry_t;

interface __Reply__act_get_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	old_stateCnt: number;
	old_state: number;
}
declare var __Reply__act_get_state_t: __Reply__act_get_state_t;

interface __Reply__act_set_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__act_set_state_t: __Reply__act_set_state_t;

interface __Reply__clock_alarm_reply_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__clock_alarm_reply_t: __Reply__clock_alarm_reply_t;

interface __Reply__clock_alarm_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__clock_alarm_t: __Reply__clock_alarm_t;

interface __Reply__clock_get_attributes_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	clock_attrCnt: number;
	clock_attr: number;
}
declare var __Reply__clock_get_attributes_t: __Reply__clock_get_attributes_t;

interface __Reply__clock_get_time_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	cur_time: mach_timespec;
}
declare var __Reply__clock_get_time_t: __Reply__clock_get_time_t;

interface __Reply__clock_set_attributes_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__clock_set_attributes_t: __Reply__clock_set_attributes_t;

interface __Reply__clock_set_time_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__clock_set_time_t: __Reply__clock_set_time_t;

interface __Reply__etap_trace_thread_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__etap_trace_thread_t: __Reply__etap_trace_thread_t;

interface __Reply__exception_raise_state_identity_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	flavor: number;
	new_stateCnt: number;
	new_state: number;
}
declare var __Reply__exception_raise_state_identity_t: __Reply__exception_raise_state_identity_t;

interface __Reply__exception_raise_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	flavor: number;
	new_stateCnt: number;
	new_state: number;
}
declare var __Reply__exception_raise_state_t: __Reply__exception_raise_state_t;

interface __Reply__exception_raise_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__exception_raise_t: __Reply__exception_raise_t;

interface __Reply__host_check_multiuser_mode_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	multiuser_mode: number;
}
declare var __Reply__host_check_multiuser_mode_t: __Reply__host_check_multiuser_mode_t;

interface __Reply__host_create_mach_voucher_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	voucher: mach_msg_port_descriptor_t;
}
declare var __Reply__host_create_mach_voucher_t: __Reply__host_create_mach_voucher_t;

interface __Reply__host_default_memory_manager_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	default_manager: mach_msg_port_descriptor_t;
}
declare var __Reply__host_default_memory_manager_t: __Reply__host_default_memory_manager_t;

interface __Reply__host_get_UNDServer_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	server: mach_msg_port_descriptor_t;
}
declare var __Reply__host_get_UNDServer_t: __Reply__host_get_UNDServer_t;

interface __Reply__host_get_atm_diagnostic_flag_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	diagnostic_flag: number;
}
declare var __Reply__host_get_atm_diagnostic_flag_t: __Reply__host_get_atm_diagnostic_flag_t;

interface __Reply__host_get_boot_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	boot_infoOffset: number;
	boot_infoCnt: number;
	boot_info: number;
}
declare var __Reply__host_get_boot_info_t: __Reply__host_get_boot_info_t;

interface __Reply__host_get_clock_control_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	clock_ctrl: mach_msg_port_descriptor_t;
}
declare var __Reply__host_get_clock_control_t: __Reply__host_get_clock_control_t;

interface __Reply__host_get_clock_service_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	clock_serv: mach_msg_port_descriptor_t;
}
declare var __Reply__host_get_clock_service_t: __Reply__host_get_clock_service_t;

interface __Reply__host_get_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	old_handlers: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	masksCnt: number;
	masks: number;
	old_behaviors: number;
	old_flavors: number;
}
declare var __Reply__host_get_exception_ports_t: __Reply__host_get_exception_ports_t;

interface __Reply__host_get_io_master_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	io_master: mach_msg_port_descriptor_t;
}
declare var __Reply__host_get_io_master_t: __Reply__host_get_io_master_t;

interface __Reply__host_get_multiuser_config_flags_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	multiuser_flags: number;
}
declare var __Reply__host_get_multiuser_config_flags_t: __Reply__host_get_multiuser_config_flags_t;

interface __Reply__host_get_special_port_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	port: mach_msg_port_descriptor_t;
}
declare var __Reply__host_get_special_port_t: __Reply__host_get_special_port_t;

interface __Reply__host_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	host_info_outCnt: number;
	host_info_out: number;
}
declare var __Reply__host_info_t: __Reply__host_info_t;

interface __Reply__host_kernel_version_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	kernel_versionOffset: number;
	kernel_versionCnt: number;
	kernel_version: number;
}
declare var __Reply__host_kernel_version_t: __Reply__host_kernel_version_t;

interface __Reply__host_lockgroup_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	lockgroup_info: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	lockgroup_infoCnt: number;
}
declare var __Reply__host_lockgroup_info_t: __Reply__host_lockgroup_info_t;

interface __Reply__host_priv_statistics_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	host_info_outCnt: number;
	host_info_out: number;
}
declare var __Reply__host_priv_statistics_t: __Reply__host_priv_statistics_t;

interface __Reply__host_processor_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	out_processor_info: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	out_processor_count: number;
	out_processor_infoCnt: number;
}
declare var __Reply__host_processor_info_t: __Reply__host_processor_info_t;

interface __Reply__host_processor_set_priv_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	set: mach_msg_port_descriptor_t;
}
declare var __Reply__host_processor_set_priv_t: __Reply__host_processor_set_priv_t;

interface __Reply__host_processor_sets_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	processor_sets: mach_msg_ool_ports_descriptor_t;
	NDR: NDR_record_t;
	processor_setsCnt: number;
}
declare var __Reply__host_processor_sets_t: __Reply__host_processor_sets_t;

interface __Reply__host_processors_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	out_processor_list: mach_msg_ool_ports_descriptor_t;
	NDR: NDR_record_t;
	out_processor_listCnt: number;
}
declare var __Reply__host_processors_t: __Reply__host_processors_t;

interface __Reply__host_reboot_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__host_reboot_t: __Reply__host_reboot_t;

interface __Reply__host_register_mach_voucher_attr_manager_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_attr_control: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	new_key: number;
}
declare var __Reply__host_register_mach_voucher_attr_manager_t: __Reply__host_register_mach_voucher_attr_manager_t;

interface __Reply__host_register_well_known_mach_voucher_attr_manager_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_attr_control: mach_msg_port_descriptor_t;
}
declare var __Reply__host_register_well_known_mach_voucher_attr_manager_t: __Reply__host_register_well_known_mach_voucher_attr_manager_t;

interface __Reply__host_request_notification_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__host_request_notification_t: __Reply__host_request_notification_t;

interface __Reply__host_security_create_task_token_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	child_task: mach_msg_port_descriptor_t;
}
declare var __Reply__host_security_create_task_token_t: __Reply__host_security_create_task_token_t;

interface __Reply__host_security_set_task_token_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__host_security_set_task_token_t: __Reply__host_security_set_task_token_t;

interface __Reply__host_set_UNDServer_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__host_set_UNDServer_t: __Reply__host_set_UNDServer_t;

interface __Reply__host_set_atm_diagnostic_flag_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__host_set_atm_diagnostic_flag_t: __Reply__host_set_atm_diagnostic_flag_t;

interface __Reply__host_set_exception_ports_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__host_set_exception_ports_t: __Reply__host_set_exception_ports_t;

interface __Reply__host_set_multiuser_config_flags_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__host_set_multiuser_config_flags_t: __Reply__host_set_multiuser_config_flags_t;

interface __Reply__host_set_special_port_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__host_set_special_port_t: __Reply__host_set_special_port_t;

interface __Reply__host_statistics64_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	host_info64_outCnt: number;
	host_info64_out: number;
}
declare var __Reply__host_statistics64_t: __Reply__host_statistics64_t;

interface __Reply__host_statistics_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	host_info_outCnt: number;
	host_info_out: number;
}
declare var __Reply__host_statistics_t: __Reply__host_statistics_t;

interface __Reply__host_swap_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	old_handlerss: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	masksCnt: number;
	masks: number;
	old_behaviors: number;
	old_flavors: number;
}
declare var __Reply__host_swap_exception_ports_t: __Reply__host_swap_exception_ports_t;

interface __Reply__host_virtual_physical_table_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	info: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	infoCnt: number;
}
declare var __Reply__host_virtual_physical_table_info_t: __Reply__host_virtual_physical_table_info_t;

interface __Reply__kext_request_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	response_data: mach_msg_ool_descriptor_t;
	log_data: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	response_dataCnt: number;
	log_dataCnt: number;
	op_result: number;
}
declare var __Reply__kext_request_t: __Reply__kext_request_t;

interface __Reply__kmod_control_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	data: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	dataCnt: number;
}
declare var __Reply__kmod_control_t: __Reply__kmod_control_t;

interface __Reply__kmod_create_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	module: number;
}
declare var __Reply__kmod_create_t: __Reply__kmod_create_t;

interface __Reply__kmod_destroy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__kmod_destroy_t: __Reply__kmod_destroy_t;

interface __Reply__kmod_get_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	modules: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	modulesCnt: number;
}
declare var __Reply__kmod_get_info_t: __Reply__kmod_get_info_t;

interface __Reply__lock_acquire_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__lock_acquire_t: __Reply__lock_acquire_t;

interface __Reply__lock_handoff_accept_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__lock_handoff_accept_t: __Reply__lock_handoff_accept_t;

interface __Reply__lock_handoff_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__lock_handoff_t: __Reply__lock_handoff_t;

interface __Reply__lock_make_stable_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__lock_make_stable_t: __Reply__lock_make_stable_t;

interface __Reply__lock_release_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__lock_release_t: __Reply__lock_release_t;

interface __Reply__lock_set_create_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_lock_set: mach_msg_port_descriptor_t;
}
declare var __Reply__lock_set_create_t: __Reply__lock_set_create_t;

interface __Reply__lock_set_destroy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__lock_set_destroy_t: __Reply__lock_set_destroy_t;

interface __Reply__lock_try_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__lock_try_t: __Reply__lock_try_t;

interface __Reply__mach_make_memory_entry_64_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	object_handle: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	size: number;
}
declare var __Reply__mach_make_memory_entry_64_t: __Reply__mach_make_memory_entry_64_t;

interface __Reply__mach_make_memory_entry_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	object_handle: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	size: number;
}
declare var __Reply__mach_make_memory_entry_t: __Reply__mach_make_memory_entry_t;

interface __Reply__mach_memory_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	names: mach_msg_ool_descriptor_t;
	info: mach_msg_ool_descriptor_t;
	memory_info: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	namesCnt: number;
	infoCnt: number;
	memory_infoCnt: number;
}
declare var __Reply__mach_memory_info_t: __Reply__mach_memory_info_t;

interface __Reply__mach_memory_object_memory_entry_64_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	entry_handle: mach_msg_port_descriptor_t;
}
declare var __Reply__mach_memory_object_memory_entry_64_t: __Reply__mach_memory_object_memory_entry_64_t;

interface __Reply__mach_memory_object_memory_entry_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	entry_handle: mach_msg_port_descriptor_t;
}
declare var __Reply__mach_memory_object_memory_entry_t: __Reply__mach_memory_object_memory_entry_t;

interface __Reply__mach_port_allocate_full_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	qos: mach_port_qos_t;
	name: number;
}
declare var __Reply__mach_port_allocate_full_t: __Reply__mach_port_allocate_full_t;

interface __Reply__mach_port_allocate_name_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_allocate_name_t: __Reply__mach_port_allocate_name_t;

interface __Reply__mach_port_allocate_qos_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	qos: mach_port_qos_t;
	name: number;
}
declare var __Reply__mach_port_allocate_qos_t: __Reply__mach_port_allocate_qos_t;

interface __Reply__mach_port_allocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	name: number;
}
declare var __Reply__mach_port_allocate_t: __Reply__mach_port_allocate_t;

interface __Reply__mach_port_construct_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	name: number;
}
declare var __Reply__mach_port_construct_t: __Reply__mach_port_construct_t;

interface __Reply__mach_port_deallocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_deallocate_t: __Reply__mach_port_deallocate_t;

interface __Reply__mach_port_destroy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_destroy_t: __Reply__mach_port_destroy_t;

interface __Reply__mach_port_destruct_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_destruct_t: __Reply__mach_port_destruct_t;

interface __Reply__mach_port_dnrequest_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	dnr_total: number;
	dnr_used: number;
}
declare var __Reply__mach_port_dnrequest_info_t: __Reply__mach_port_dnrequest_info_t;

interface __Reply__mach_port_extract_member_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_extract_member_t: __Reply__mach_port_extract_member_t;

interface __Reply__mach_port_extract_right_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	poly: mach_msg_port_descriptor_t;
}
declare var __Reply__mach_port_extract_right_t: __Reply__mach_port_extract_right_t;

interface __Reply__mach_port_get_attributes_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	port_info_outCnt: number;
	port_info_out: number;
}
declare var __Reply__mach_port_get_attributes_t: __Reply__mach_port_get_attributes_t;

interface __Reply__mach_port_get_context_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	context: number;
}
declare var __Reply__mach_port_get_context_t: __Reply__mach_port_get_context_t;

interface __Reply__mach_port_get_refs_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	refs: number;
}
declare var __Reply__mach_port_get_refs_t: __Reply__mach_port_get_refs_t;

interface __Reply__mach_port_get_set_status_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	members: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	membersCnt: number;
}
declare var __Reply__mach_port_get_set_status_t: __Reply__mach_port_get_set_status_t;

interface __Reply__mach_port_get_srights_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	srights: number;
}
declare var __Reply__mach_port_get_srights_t: __Reply__mach_port_get_srights_t;

interface __Reply__mach_port_guard_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_guard_t: __Reply__mach_port_guard_t;

interface __Reply__mach_port_guard_with_flags_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_guard_with_flags_t: __Reply__mach_port_guard_with_flags_t;

interface __Reply__mach_port_insert_member_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_insert_member_t: __Reply__mach_port_insert_member_t;

interface __Reply__mach_port_insert_right_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_insert_right_t: __Reply__mach_port_insert_right_t;

interface __Reply__mach_port_kernel_object_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	object_type: number;
	object_addr: number;
}
declare var __Reply__mach_port_kernel_object_t: __Reply__mach_port_kernel_object_t;

interface __Reply__mach_port_kobject_description_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	object_type: number;
	object_addr: number;
	descriptionOffset: number;
	descriptionCnt: number;
	description: number;
}
declare var __Reply__mach_port_kobject_description_t: __Reply__mach_port_kobject_description_t;

interface __Reply__mach_port_kobject_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	object_type: number;
	object_addr: number;
}
declare var __Reply__mach_port_kobject_t: __Reply__mach_port_kobject_t;

interface __Reply__mach_port_mod_refs_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_mod_refs_t: __Reply__mach_port_mod_refs_t;

interface __Reply__mach_port_move_member_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_move_member_t: __Reply__mach_port_move_member_t;

interface __Reply__mach_port_names_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	names: mach_msg_ool_descriptor_t;
	types: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	namesCnt: number;
	typesCnt: number;
}
declare var __Reply__mach_port_names_t: __Reply__mach_port_names_t;

interface __Reply__mach_port_peek_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	request_seqnop: number;
	msg_sizep: number;
	msg_idp: number;
	trailer_infopCnt: number;
	trailer_infop: number;
}
declare var __Reply__mach_port_peek_t: __Reply__mach_port_peek_t;

interface __Reply__mach_port_rename_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_rename_t: __Reply__mach_port_rename_t;

interface __Reply__mach_port_request_notification_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	previous: mach_msg_port_descriptor_t;
}
declare var __Reply__mach_port_request_notification_t: __Reply__mach_port_request_notification_t;

interface __Reply__mach_port_set_attributes_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_set_attributes_t: __Reply__mach_port_set_attributes_t;

interface __Reply__mach_port_set_context_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_set_context_t: __Reply__mach_port_set_context_t;

interface __Reply__mach_port_set_mscount_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_set_mscount_t: __Reply__mach_port_set_mscount_t;

interface __Reply__mach_port_set_seqno_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_set_seqno_t: __Reply__mach_port_set_seqno_t;

interface __Reply__mach_port_space_basic_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	basic_info: ipc_info_space_basic_t;
}
declare var __Reply__mach_port_space_basic_info_t: __Reply__mach_port_space_basic_info_t;

interface __Reply__mach_port_space_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	table_info: mach_msg_ool_descriptor_t;
	tree_info: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	space_info: ipc_info_space_t;
	table_infoCnt: number;
	tree_infoCnt: number;
}
declare var __Reply__mach_port_space_info_t: __Reply__mach_port_space_info_t;

interface __Reply__mach_port_swap_guard_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_swap_guard_t: __Reply__mach_port_swap_guard_t;

interface __Reply__mach_port_type_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	ptype: number;
}
declare var __Reply__mach_port_type_t: __Reply__mach_port_type_t;

interface __Reply__mach_port_unguard_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_port_unguard_t: __Reply__mach_port_unguard_t;

interface __Reply__mach_ports_lookup_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	init_port_set: mach_msg_ool_ports_descriptor_t;
	NDR: NDR_record_t;
	init_port_setCnt: number;
}
declare var __Reply__mach_ports_lookup_t: __Reply__mach_ports_lookup_t;

interface __Reply__mach_ports_register_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_ports_register_t: __Reply__mach_ports_register_t;

interface __Reply__mach_vm_allocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	address: number;
}
declare var __Reply__mach_vm_allocate_t: __Reply__mach_vm_allocate_t;

interface __Reply__mach_vm_behavior_set_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_vm_behavior_set_t: __Reply__mach_vm_behavior_set_t;

interface __Reply__mach_vm_copy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_vm_copy_t: __Reply__mach_vm_copy_t;

interface __Reply__mach_vm_deallocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_vm_deallocate_t: __Reply__mach_vm_deallocate_t;

interface __Reply__mach_vm_inherit_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_vm_inherit_t: __Reply__mach_vm_inherit_t;

interface __Reply__mach_vm_machine_attribute_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	value: number;
}
declare var __Reply__mach_vm_machine_attribute_t: __Reply__mach_vm_machine_attribute_t;

interface __Reply__mach_vm_map_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	address: number;
}
declare var __Reply__mach_vm_map_t: __Reply__mach_vm_map_t;

interface __Reply__mach_vm_msync_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_vm_msync_t: __Reply__mach_vm_msync_t;

interface __Reply__mach_vm_page_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	infoCnt: number;
	info: number;
}
declare var __Reply__mach_vm_page_info_t: __Reply__mach_vm_page_info_t;

interface __Reply__mach_vm_page_query_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	disposition: number;
	ref_count: number;
}
declare var __Reply__mach_vm_page_query_t: __Reply__mach_vm_page_query_t;

interface __Reply__mach_vm_page_range_query_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	dispositions_count: number;
}
declare var __Reply__mach_vm_page_range_query_t: __Reply__mach_vm_page_range_query_t;

interface __Reply__mach_vm_protect_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_vm_protect_t: __Reply__mach_vm_protect_t;

interface __Reply__mach_vm_purgable_control_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	state: number;
}
declare var __Reply__mach_vm_purgable_control_t: __Reply__mach_vm_purgable_control_t;

interface __Reply__mach_vm_read_list_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	data_list: mach_vm_read_entry;
}
declare var __Reply__mach_vm_read_list_t: __Reply__mach_vm_read_list_t;

interface __Reply__mach_vm_read_overwrite_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	outsize: number;
}
declare var __Reply__mach_vm_read_overwrite_t: __Reply__mach_vm_read_overwrite_t;

interface __Reply__mach_vm_read_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	data: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	dataCnt: number;
}
declare var __Reply__mach_vm_read_t: __Reply__mach_vm_read_t;

interface __Reply__mach_vm_region_info_64_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	objects: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	region: vm_info_region_64_t;
	objectsCnt: number;
}
declare var __Reply__mach_vm_region_info_64_t: __Reply__mach_vm_region_info_64_t;

interface __Reply__mach_vm_region_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	objects: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	region: vm_info_region_t;
	objectsCnt: number;
}
declare var __Reply__mach_vm_region_info_t: __Reply__mach_vm_region_info_t;

interface __Reply__mach_vm_region_recurse_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	address: number;
	size: number;
	nesting_depth: number;
	infoCnt: number;
	info: number;
}
declare var __Reply__mach_vm_region_recurse_t: __Reply__mach_vm_region_recurse_t;

interface __Reply__mach_vm_region_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	object_name: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	infoCnt: number;
	info: number;
}
declare var __Reply__mach_vm_region_t: __Reply__mach_vm_region_t;

interface __Reply__mach_vm_remap_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	target_address: number;
	cur_protection: number;
	max_protection: number;
}
declare var __Reply__mach_vm_remap_t: __Reply__mach_vm_remap_t;

interface __Reply__mach_vm_wire_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_vm_wire_t: __Reply__mach_vm_wire_t;

interface __Reply__mach_vm_write_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__mach_vm_write_t: __Reply__mach_vm_write_t;

interface __Reply__mach_zone_info_for_zone_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	info: mach_zone_info_t;
}
declare var __Reply__mach_zone_info_for_zone_t: __Reply__mach_zone_info_for_zone_t;

interface __Reply__mach_zone_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	names: mach_msg_ool_descriptor_t;
	info: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	namesCnt: number;
	infoCnt: number;
}
declare var __Reply__mach_zone_info_t: __Reply__mach_zone_info_t;

interface __Reply__processor_assign_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__processor_assign_t: __Reply__processor_assign_t;

interface __Reply__processor_control_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__processor_control_t: __Reply__processor_control_t;

interface __Reply__processor_exit_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__processor_exit_t: __Reply__processor_exit_t;

interface __Reply__processor_get_assignment_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	assigned_set: mach_msg_port_descriptor_t;
}
declare var __Reply__processor_get_assignment_t: __Reply__processor_get_assignment_t;

interface __Reply__processor_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	host: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	processor_info_outCnt: number;
	processor_info_out: number;
}
declare var __Reply__processor_info_t: __Reply__processor_info_t;

interface __Reply__processor_set_create_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_set: mach_msg_port_descriptor_t;
	new_name: mach_msg_port_descriptor_t;
}
declare var __Reply__processor_set_create_t: __Reply__processor_set_create_t;

interface __Reply__processor_set_default_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	default_set: mach_msg_port_descriptor_t;
}
declare var __Reply__processor_set_default_t: __Reply__processor_set_default_t;

interface __Reply__processor_set_destroy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__processor_set_destroy_t: __Reply__processor_set_destroy_t;

interface __Reply__processor_set_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	host: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	info_outCnt: number;
	info_out: number;
}
declare var __Reply__processor_set_info_t: __Reply__processor_set_info_t;

interface __Reply__processor_set_max_priority_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__processor_set_max_priority_t: __Reply__processor_set_max_priority_t;

interface __Reply__processor_set_policy_control_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__processor_set_policy_control_t: __Reply__processor_set_policy_control_t;

interface __Reply__processor_set_policy_disable_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__processor_set_policy_disable_t: __Reply__processor_set_policy_disable_t;

interface __Reply__processor_set_policy_enable_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__processor_set_policy_enable_t: __Reply__processor_set_policy_enable_t;

interface __Reply__processor_set_stack_usage_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	ltotal: number;
	space: number;
	resident: number;
	maxusage: number;
	maxstack: number;
}
declare var __Reply__processor_set_stack_usage_t: __Reply__processor_set_stack_usage_t;

interface __Reply__processor_set_statistics_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	info_outCnt: number;
	info_out: number;
}
declare var __Reply__processor_set_statistics_t: __Reply__processor_set_statistics_t;

interface __Reply__processor_set_tasks_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	task_list: mach_msg_ool_ports_descriptor_t;
	NDR: NDR_record_t;
	task_listCnt: number;
}
declare var __Reply__processor_set_tasks_t: __Reply__processor_set_tasks_t;

interface __Reply__processor_set_threads_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	thread_list: mach_msg_ool_ports_descriptor_t;
	NDR: NDR_record_t;
	thread_listCnt: number;
}
declare var __Reply__processor_set_threads_t: __Reply__processor_set_threads_t;

interface __Reply__processor_start_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__processor_start_t: __Reply__processor_start_t;

interface __Reply__semaphore_create_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	semaphore: mach_msg_port_descriptor_t;
}
declare var __Reply__semaphore_create_t: __Reply__semaphore_create_t;

interface __Reply__semaphore_destroy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__semaphore_destroy_t: __Reply__semaphore_destroy_t;

interface __Reply__task_assign_default_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_assign_default_t: __Reply__task_assign_default_t;

interface __Reply__task_assign_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_assign_t: __Reply__task_assign_t;

interface __Reply__task_create_suid_cred_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	delegation: mach_msg_port_descriptor_t;
}
declare var __Reply__task_create_suid_cred_t: __Reply__task_create_suid_cred_t;

interface __Reply__task_create_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	child_task: mach_msg_port_descriptor_t;
}
declare var __Reply__task_create_t: __Reply__task_create_t;

interface __Reply__task_generate_corpse_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	corpse_task_port: mach_msg_port_descriptor_t;
}
declare var __Reply__task_generate_corpse_t: __Reply__task_generate_corpse_t;

interface __Reply__task_get_assignment_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	assigned_set: mach_msg_port_descriptor_t;
}
declare var __Reply__task_get_assignment_t: __Reply__task_get_assignment_t;

interface __Reply__task_get_dyld_image_infos_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	dyld_images: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	dyld_imagesCnt: number;
}
declare var __Reply__task_get_dyld_image_infos_t: __Reply__task_get_dyld_image_infos_t;

interface __Reply__task_get_emulation_vector_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	emulation_vector: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	vector_start: number;
	emulation_vectorCnt: number;
}
declare var __Reply__task_get_emulation_vector_t: __Reply__task_get_emulation_vector_t;

interface __Reply__task_get_exc_guard_behavior_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	behavior: number;
}
declare var __Reply__task_get_exc_guard_behavior_t: __Reply__task_get_exc_guard_behavior_t;

interface __Reply__task_get_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	old_handlers: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	masksCnt: number;
	masks: number;
	old_behaviors: number;
	old_flavors: number;
}
declare var __Reply__task_get_exception_ports_t: __Reply__task_get_exception_ports_t;

interface __Reply__task_get_mach_voucher_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	voucher: mach_msg_port_descriptor_t;
}
declare var __Reply__task_get_mach_voucher_t: __Reply__task_get_mach_voucher_t;

interface __Reply__task_get_special_port_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	special_port: mach_msg_port_descriptor_t;
}
declare var __Reply__task_get_special_port_t: __Reply__task_get_special_port_t;

interface __Reply__task_get_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	old_stateCnt: number;
	old_state: number;
}
declare var __Reply__task_get_state_t: __Reply__task_get_state_t;

interface __Reply__task_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	task_info_outCnt: number;
	task_info_out: number;
}
declare var __Reply__task_info_t: __Reply__task_info_t;

interface __Reply__task_inspect_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	info_outCnt: number;
	info_out: number;
}
declare var __Reply__task_inspect_t: __Reply__task_inspect_t;

interface __Reply__task_map_corpse_info_64_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	kcd_addr_begin: number;
	kcd_size: number;
}
declare var __Reply__task_map_corpse_info_64_t: __Reply__task_map_corpse_info_64_t;

interface __Reply__task_map_corpse_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	kcd_addr_begin: number;
	kcd_size: number;
}
declare var __Reply__task_map_corpse_info_t: __Reply__task_map_corpse_info_t;

interface __Reply__task_policy_get_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	policy_infoCnt: number;
	policy_info: number;
	get_default: number;
}
declare var __Reply__task_policy_get_t: __Reply__task_policy_get_t;

interface __Reply__task_policy_set_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_policy_set_t: __Reply__task_policy_set_t;

interface __Reply__task_policy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_policy_t: __Reply__task_policy_t;

interface __Reply__task_purgable_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	stats: vm_purgeable_info;
}
declare var __Reply__task_purgable_info_t: __Reply__task_purgable_info_t;

interface __Reply__task_register_dyld_image_infos_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_register_dyld_image_infos_t: __Reply__task_register_dyld_image_infos_t;

interface __Reply__task_register_dyld_set_dyld_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_register_dyld_set_dyld_state_t: __Reply__task_register_dyld_set_dyld_state_t;

interface __Reply__task_register_dyld_shared_cache_image_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_register_dyld_shared_cache_image_info_t: __Reply__task_register_dyld_shared_cache_image_info_t;

interface __Reply__task_resume2_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_resume2_t: __Reply__task_resume2_t;

interface __Reply__task_resume_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_resume_t: __Reply__task_resume_t;

interface __Reply__task_sample_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_sample_t: __Reply__task_sample_t;

interface __Reply__task_set_emulation_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_emulation_t: __Reply__task_set_emulation_t;

interface __Reply__task_set_emulation_vector_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_emulation_vector_t: __Reply__task_set_emulation_vector_t;

interface __Reply__task_set_exc_guard_behavior_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_exc_guard_behavior_t: __Reply__task_set_exc_guard_behavior_t;

interface __Reply__task_set_exception_ports_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_exception_ports_t: __Reply__task_set_exception_ports_t;

interface __Reply__task_set_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_info_t: __Reply__task_set_info_t;

interface __Reply__task_set_mach_voucher_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_mach_voucher_t: __Reply__task_set_mach_voucher_t;

interface __Reply__task_set_phys_footprint_limit_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	old_limit: number;
}
declare var __Reply__task_set_phys_footprint_limit_t: __Reply__task_set_phys_footprint_limit_t;

interface __Reply__task_set_policy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_policy_t: __Reply__task_set_policy_t;

interface __Reply__task_set_port_space_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_port_space_t: __Reply__task_set_port_space_t;

interface __Reply__task_set_ras_pc_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_ras_pc_t: __Reply__task_set_ras_pc_t;

interface __Reply__task_set_special_port_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_special_port_t: __Reply__task_set_special_port_t;

interface __Reply__task_set_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_set_state_t: __Reply__task_set_state_t;

interface __Reply__task_suspend2_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	suspend_token: mach_msg_port_descriptor_t;
}
declare var __Reply__task_suspend2_t: __Reply__task_suspend2_t;

interface __Reply__task_suspend_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_suspend_t: __Reply__task_suspend_t;

interface __Reply__task_swap_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	old_handlerss: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	masksCnt: number;
	masks: number;
	old_behaviors: number;
	old_flavors: number;
}
declare var __Reply__task_swap_exception_ports_t: __Reply__task_swap_exception_ports_t;

interface __Reply__task_swap_mach_voucher_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	old_voucher: mach_msg_port_descriptor_t;
}
declare var __Reply__task_swap_mach_voucher_t: __Reply__task_swap_mach_voucher_t;

interface __Reply__task_terminate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_terminate_t: __Reply__task_terminate_t;

interface __Reply__task_threads_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	act_list: mach_msg_ool_ports_descriptor_t;
	NDR: NDR_record_t;
	act_listCnt: number;
}
declare var __Reply__task_threads_t: __Reply__task_threads_t;

interface __Reply__task_unregister_dyld_image_infos_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_unregister_dyld_image_infos_t: __Reply__task_unregister_dyld_image_infos_t;

interface __Reply__task_wire_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__task_wire_t: __Reply__task_wire_t;

interface __Reply__task_zone_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	names: mach_msg_ool_descriptor_t;
	info: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	namesCnt: number;
	infoCnt: number;
}
declare var __Reply__task_zone_info_t: __Reply__task_zone_info_t;

interface __Reply__thread_abort_safely_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_abort_safely_t: __Reply__thread_abort_safely_t;

interface __Reply__thread_abort_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_abort_t: __Reply__thread_abort_t;

interface __Reply__thread_assign_default_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_assign_default_t: __Reply__thread_assign_default_t;

interface __Reply__thread_assign_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_assign_t: __Reply__thread_assign_t;

interface __Reply__thread_create_running_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	child_act: mach_msg_port_descriptor_t;
}
declare var __Reply__thread_create_running_t: __Reply__thread_create_running_t;

interface __Reply__thread_create_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	child_act: mach_msg_port_descriptor_t;
}
declare var __Reply__thread_create_t: __Reply__thread_create_t;

interface __Reply__thread_depress_abort_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_depress_abort_t: __Reply__thread_depress_abort_t;

interface __Reply__thread_get_assignment_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	assigned_set: mach_msg_port_descriptor_t;
}
declare var __Reply__thread_get_assignment_t: __Reply__thread_get_assignment_t;

interface __Reply__thread_get_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	old_handlers: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	masksCnt: number;
	masks: number;
	old_behaviors: number;
	old_flavors: number;
}
declare var __Reply__thread_get_exception_ports_t: __Reply__thread_get_exception_ports_t;

interface __Reply__thread_get_mach_voucher_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	voucher: mach_msg_port_descriptor_t;
}
declare var __Reply__thread_get_mach_voucher_t: __Reply__thread_get_mach_voucher_t;

interface __Reply__thread_get_special_port_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	special_port: mach_msg_port_descriptor_t;
}
declare var __Reply__thread_get_special_port_t: __Reply__thread_get_special_port_t;

interface __Reply__thread_get_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	old_stateCnt: number;
	old_state: number;
}
declare var __Reply__thread_get_state_t: __Reply__thread_get_state_t;

interface __Reply__thread_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	thread_info_outCnt: number;
	thread_info_out: number;
}
declare var __Reply__thread_info_t: __Reply__thread_info_t;

interface __Reply__thread_policy_get_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	policy_infoCnt: number;
	policy_info: number;
	get_default: number;
}
declare var __Reply__thread_policy_get_t: __Reply__thread_policy_get_t;

interface __Reply__thread_policy_set_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_policy_set_t: __Reply__thread_policy_set_t;

interface __Reply__thread_policy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_policy_t: __Reply__thread_policy_t;

interface __Reply__thread_resume_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_resume_t: __Reply__thread_resume_t;

interface __Reply__thread_sample_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_sample_t: __Reply__thread_sample_t;

interface __Reply__thread_set_exception_ports_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_set_exception_ports_t: __Reply__thread_set_exception_ports_t;

interface __Reply__thread_set_mach_voucher_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_set_mach_voucher_t: __Reply__thread_set_mach_voucher_t;

interface __Reply__thread_set_policy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_set_policy_t: __Reply__thread_set_policy_t;

interface __Reply__thread_set_special_port_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_set_special_port_t: __Reply__thread_set_special_port_t;

interface __Reply__thread_set_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_set_state_t: __Reply__thread_set_state_t;

interface __Reply__thread_suspend_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_suspend_t: __Reply__thread_suspend_t;

interface __Reply__thread_swap_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	old_handlers: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	masksCnt: number;
	masks: number;
	old_behaviors: number;
	old_flavors: number;
}
declare var __Reply__thread_swap_exception_ports_t: __Reply__thread_swap_exception_ports_t;

interface __Reply__thread_swap_mach_voucher_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	old_voucher: mach_msg_port_descriptor_t;
}
declare var __Reply__thread_swap_mach_voucher_t: __Reply__thread_swap_mach_voucher_t;

interface __Reply__thread_terminate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_terminate_t: __Reply__thread_terminate_t;

interface __Reply__thread_wire_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__thread_wire_t: __Reply__thread_wire_t;

interface __Reply__vm_allocate_cpm_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	address: number;
}
declare var __Reply__vm_allocate_cpm_t: __Reply__vm_allocate_cpm_t;

interface __Reply__vm_allocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	address: number;
}
declare var __Reply__vm_allocate_t: __Reply__vm_allocate_t;

interface __Reply__vm_behavior_set_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__vm_behavior_set_t: __Reply__vm_behavior_set_t;

interface __Reply__vm_copy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__vm_copy_t: __Reply__vm_copy_t;

interface __Reply__vm_deallocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__vm_deallocate_t: __Reply__vm_deallocate_t;

interface __Reply__vm_inherit_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__vm_inherit_t: __Reply__vm_inherit_t;

interface __Reply__vm_machine_attribute_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	value: number;
}
declare var __Reply__vm_machine_attribute_t: __Reply__vm_machine_attribute_t;

interface __Reply__vm_map_64_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	address: number;
}
declare var __Reply__vm_map_64_t: __Reply__vm_map_64_t;

interface __Reply__vm_map_exec_lockdown_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__vm_map_exec_lockdown_t: __Reply__vm_map_exec_lockdown_t;

interface __Reply__vm_map_page_query_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	disposition: number;
	ref_count: number;
}
declare var __Reply__vm_map_page_query_t: __Reply__vm_map_page_query_t;

interface __Reply__vm_map_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	address: number;
}
declare var __Reply__vm_map_t: __Reply__vm_map_t;

interface __Reply__vm_mapped_pages_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	pages: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	pagesCnt: number;
}
declare var __Reply__vm_mapped_pages_info_t: __Reply__vm_mapped_pages_info_t;

interface __Reply__vm_msync_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__vm_msync_t: __Reply__vm_msync_t;

interface __Reply__vm_protect_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__vm_protect_t: __Reply__vm_protect_t;

interface __Reply__vm_purgable_control_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	state: number;
}
declare var __Reply__vm_purgable_control_t: __Reply__vm_purgable_control_t;

interface __Reply__vm_read_list_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	data_list: vm_read_entry;
}
declare var __Reply__vm_read_list_t: __Reply__vm_read_list_t;

interface __Reply__vm_read_overwrite_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	outsize: number;
}
declare var __Reply__vm_read_overwrite_t: __Reply__vm_read_overwrite_t;

interface __Reply__vm_read_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	data: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	dataCnt: number;
}
declare var __Reply__vm_read_t: __Reply__vm_read_t;

interface __Reply__vm_region_64_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	object_name: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	infoCnt: number;
	info: number;
}
declare var __Reply__vm_region_64_t: __Reply__vm_region_64_t;

interface __Reply__vm_region_recurse_64_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	address: number;
	size: number;
	nesting_depth: number;
	infoCnt: number;
	info: number;
}
declare var __Reply__vm_region_recurse_64_t: __Reply__vm_region_recurse_64_t;

interface __Reply__vm_region_recurse_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	address: number;
	size: number;
	nesting_depth: number;
	infoCnt: number;
	info: number;
}
declare var __Reply__vm_region_recurse_t: __Reply__vm_region_recurse_t;

interface __Reply__vm_region_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	object_name: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	infoCnt: number;
	info: number;
}
declare var __Reply__vm_region_t: __Reply__vm_region_t;

interface __Reply__vm_remap_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
	target_address: number;
	cur_protection: number;
	max_protection: number;
}
declare var __Reply__vm_remap_t: __Reply__vm_remap_t;

interface __Reply__vm_wire_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__vm_wire_t: __Reply__vm_wire_t;

interface __Reply__vm_write_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var __Reply__vm_write_t: __Reply__vm_write_t;

interface __Request___host_page_size_t {
	Head: mach_msg_header_t;
}
declare var __Request___host_page_size_t: __Request___host_page_size_t;

interface __Request___mach_make_memory_entry_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	parent_handle: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	size: number;
	offset: number;
	permission: number;
}
declare var __Request___mach_make_memory_entry_t: __Request___mach_make_memory_entry_t;

interface __Request__act_get_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	old_stateCnt: number;
}
declare var __Request__act_get_state_t: __Request__act_get_state_t;

interface __Request__act_set_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	new_stateCnt: number;
	new_state: number;
}
declare var __Request__act_set_state_t: __Request__act_set_state_t;

interface __Request__clock_alarm_reply_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	alarm_code: number;
	alarm_type: number;
	alarm_time: mach_timespec;
}
declare var __Request__clock_alarm_reply_t: __Request__clock_alarm_reply_t;

interface __Request__clock_alarm_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	alarm_port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	alarm_type: number;
	alarm_time: mach_timespec;
}
declare var __Request__clock_alarm_t: __Request__clock_alarm_t;

interface __Request__clock_get_attributes_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	clock_attrCnt: number;
}
declare var __Request__clock_get_attributes_t: __Request__clock_get_attributes_t;

interface __Request__clock_get_time_t {
	Head: mach_msg_header_t;
}
declare var __Request__clock_get_time_t: __Request__clock_get_time_t;

interface __Request__clock_set_attributes_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	clock_attrCnt: number;
	clock_attr: number;
}
declare var __Request__clock_set_attributes_t: __Request__clock_set_attributes_t;

interface __Request__clock_set_time_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	new_time: mach_timespec;
}
declare var __Request__clock_set_time_t: __Request__clock_set_time_t;

interface __Request__etap_trace_thread_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	trace_status: number;
}
declare var __Request__etap_trace_thread_t: __Request__etap_trace_thread_t;

interface __Request__exception_raise_state_identity_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	thread: mach_msg_port_descriptor_t;
	task: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	exception: number;
	codeCnt: number;
	code: number;
	flavor: number;
	old_stateCnt: number;
	old_state: number;
}
declare var __Request__exception_raise_state_identity_t: __Request__exception_raise_state_identity_t;

interface __Request__exception_raise_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	exception: number;
	codeCnt: number;
	code: number;
	flavor: number;
	old_stateCnt: number;
	old_state: number;
}
declare var __Request__exception_raise_state_t: __Request__exception_raise_state_t;

interface __Request__exception_raise_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	thread: mach_msg_port_descriptor_t;
	task: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	exception: number;
	codeCnt: number;
	code: number;
}
declare var __Request__exception_raise_t: __Request__exception_raise_t;

interface __Request__host_check_multiuser_mode_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_check_multiuser_mode_t: __Request__host_check_multiuser_mode_t;

interface __Request__host_create_mach_voucher_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	recipesCnt: number;
	recipes: number;
}
declare var __Request__host_create_mach_voucher_t: __Request__host_create_mach_voucher_t;

interface __Request__host_default_memory_manager_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	default_manager: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	cluster_size: number;
}
declare var __Request__host_default_memory_manager_t: __Request__host_default_memory_manager_t;

interface __Request__host_get_UNDServer_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_get_UNDServer_t: __Request__host_get_UNDServer_t;

interface __Request__host_get_atm_diagnostic_flag_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_get_atm_diagnostic_flag_t: __Request__host_get_atm_diagnostic_flag_t;

interface __Request__host_get_boot_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_get_boot_info_t: __Request__host_get_boot_info_t;

interface __Request__host_get_clock_control_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	clock_id: number;
}
declare var __Request__host_get_clock_control_t: __Request__host_get_clock_control_t;

interface __Request__host_get_clock_service_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	clock_id: number;
}
declare var __Request__host_get_clock_service_t: __Request__host_get_clock_service_t;

interface __Request__host_get_exception_ports_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	exception_mask: number;
}
declare var __Request__host_get_exception_ports_t: __Request__host_get_exception_ports_t;

interface __Request__host_get_io_master_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_get_io_master_t: __Request__host_get_io_master_t;

interface __Request__host_get_multiuser_config_flags_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_get_multiuser_config_flags_t: __Request__host_get_multiuser_config_flags_t;

interface __Request__host_get_special_port_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	node: number;
	which: number;
}
declare var __Request__host_get_special_port_t: __Request__host_get_special_port_t;

interface __Request__host_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	host_info_outCnt: number;
}
declare var __Request__host_info_t: __Request__host_info_t;

interface __Request__host_kernel_version_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_kernel_version_t: __Request__host_kernel_version_t;

interface __Request__host_lockgroup_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_lockgroup_info_t: __Request__host_lockgroup_info_t;

interface __Request__host_priv_statistics_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	host_info_outCnt: number;
}
declare var __Request__host_priv_statistics_t: __Request__host_priv_statistics_t;

interface __Request__host_processor_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
}
declare var __Request__host_processor_info_t: __Request__host_processor_info_t;

interface __Request__host_processor_set_priv_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	set_name: mach_msg_port_descriptor_t;
}
declare var __Request__host_processor_set_priv_t: __Request__host_processor_set_priv_t;

interface __Request__host_processor_sets_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_processor_sets_t: __Request__host_processor_sets_t;

interface __Request__host_processors_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_processors_t: __Request__host_processors_t;

interface __Request__host_reboot_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	options: number;
}
declare var __Request__host_reboot_t: __Request__host_reboot_t;

interface __Request__host_register_mach_voucher_attr_manager_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	attr_manager: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	default_value: number;
}
declare var __Request__host_register_mach_voucher_attr_manager_t: __Request__host_register_mach_voucher_attr_manager_t;

interface __Request__host_register_well_known_mach_voucher_attr_manager_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	attr_manager: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	default_value: number;
	key: number;
}
declare var __Request__host_register_well_known_mach_voucher_attr_manager_t: __Request__host_register_well_known_mach_voucher_attr_manager_t;

interface __Request__host_request_notification_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	notify_port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	notify_type: number;
}
declare var __Request__host_request_notification_t: __Request__host_request_notification_t;

interface __Request__host_security_create_task_token_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	parent_task: mach_msg_port_descriptor_t;
	host: mach_msg_port_descriptor_t;
	ledgers: mach_msg_ool_ports_descriptor_t;
	NDR: NDR_record_t;
	sec_token: security_token_t;
	audit_token: audit_token_t;
	ledgersCnt: number;
	inherit_memory: number;
}
declare var __Request__host_security_create_task_token_t: __Request__host_security_create_task_token_t;

interface __Request__host_security_set_task_token_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	target_task: mach_msg_port_descriptor_t;
	host: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	sec_token: security_token_t;
	audit_token: audit_token_t;
}
declare var __Request__host_security_set_task_token_t: __Request__host_security_set_task_token_t;

interface __Request__host_set_UNDServer_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	server: mach_msg_port_descriptor_t;
}
declare var __Request__host_set_UNDServer_t: __Request__host_set_UNDServer_t;

interface __Request__host_set_atm_diagnostic_flag_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	diagnostic_flag: number;
}
declare var __Request__host_set_atm_diagnostic_flag_t: __Request__host_set_atm_diagnostic_flag_t;

interface __Request__host_set_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	exception_mask: number;
	behavior: number;
	new_flavor: number;
}
declare var __Request__host_set_exception_ports_t: __Request__host_set_exception_ports_t;

interface __Request__host_set_multiuser_config_flags_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	multiuser_flags: number;
}
declare var __Request__host_set_multiuser_config_flags_t: __Request__host_set_multiuser_config_flags_t;

interface __Request__host_set_special_port_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	which: number;
}
declare var __Request__host_set_special_port_t: __Request__host_set_special_port_t;

interface __Request__host_statistics64_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	host_info64_outCnt: number;
}
declare var __Request__host_statistics64_t: __Request__host_statistics64_t;

interface __Request__host_statistics_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	host_info_outCnt: number;
}
declare var __Request__host_statistics_t: __Request__host_statistics_t;

interface __Request__host_swap_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	exception_mask: number;
	behavior: number;
	new_flavor: number;
}
declare var __Request__host_swap_exception_ports_t: __Request__host_swap_exception_ports_t;

interface __Request__host_virtual_physical_table_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__host_virtual_physical_table_info_t: __Request__host_virtual_physical_table_info_t;

interface __Request__kext_request_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	request_data: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	user_log_flags: number;
	request_dataCnt: number;
}
declare var __Request__kext_request_t: __Request__kext_request_t;

interface __Request__kmod_control_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	data: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	module: number;
	flavor: number;
	dataCnt: number;
}
declare var __Request__kmod_control_t: __Request__kmod_control_t;

interface __Request__kmod_create_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	info: number;
}
declare var __Request__kmod_create_t: __Request__kmod_create_t;

interface __Request__kmod_destroy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	module: number;
}
declare var __Request__kmod_destroy_t: __Request__kmod_destroy_t;

interface __Request__kmod_get_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__kmod_get_info_t: __Request__kmod_get_info_t;

interface __Request__lock_acquire_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	lock_id: number;
}
declare var __Request__lock_acquire_t: __Request__lock_acquire_t;

interface __Request__lock_handoff_accept_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	lock_id: number;
}
declare var __Request__lock_handoff_accept_t: __Request__lock_handoff_accept_t;

interface __Request__lock_handoff_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	lock_id: number;
}
declare var __Request__lock_handoff_t: __Request__lock_handoff_t;

interface __Request__lock_make_stable_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	lock_id: number;
}
declare var __Request__lock_make_stable_t: __Request__lock_make_stable_t;

interface __Request__lock_release_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	lock_id: number;
}
declare var __Request__lock_release_t: __Request__lock_release_t;

interface __Request__lock_set_create_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	n_ulocks: number;
	policy: number;
}
declare var __Request__lock_set_create_t: __Request__lock_set_create_t;

interface __Request__lock_set_destroy_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	lock_set: mach_msg_port_descriptor_t;
}
declare var __Request__lock_set_destroy_t: __Request__lock_set_destroy_t;

interface __Request__lock_try_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	lock_id: number;
}
declare var __Request__lock_try_t: __Request__lock_try_t;

interface __Request__mach_make_memory_entry_64_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	parent_entry: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	size: number;
	offset: number;
	permission: number;
}
declare var __Request__mach_make_memory_entry_64_t: __Request__mach_make_memory_entry_64_t;

interface __Request__mach_make_memory_entry_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	parent_entry: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	size: number;
	offset: number;
	permission: number;
}
declare var __Request__mach_make_memory_entry_t: __Request__mach_make_memory_entry_t;

interface __Request__mach_memory_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__mach_memory_info_t: __Request__mach_memory_info_t;

interface __Request__mach_memory_object_memory_entry_64_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	pager: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	internal: number;
	size: number;
	permission: number;
}
declare var __Request__mach_memory_object_memory_entry_64_t: __Request__mach_memory_object_memory_entry_64_t;

interface __Request__mach_memory_object_memory_entry_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	pager: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	internal: number;
	size: number;
	permission: number;
}
declare var __Request__mach_memory_object_memory_entry_t: __Request__mach_memory_object_memory_entry_t;

interface __Request__mach_port_allocate_full_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	proto: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	right: number;
	qos: mach_port_qos_t;
	name: number;
}
declare var __Request__mach_port_allocate_full_t: __Request__mach_port_allocate_full_t;

interface __Request__mach_port_allocate_name_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	right: number;
	name: number;
}
declare var __Request__mach_port_allocate_name_t: __Request__mach_port_allocate_name_t;

interface __Request__mach_port_allocate_qos_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	right: number;
	qos: mach_port_qos_t;
}
declare var __Request__mach_port_allocate_qos_t: __Request__mach_port_allocate_qos_t;

interface __Request__mach_port_allocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	right: number;
}
declare var __Request__mach_port_allocate_t: __Request__mach_port_allocate_t;

interface __Request__mach_port_construct_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	options: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	context: number;
}
declare var __Request__mach_port_construct_t: __Request__mach_port_construct_t;

interface __Request__mach_port_deallocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_deallocate_t: __Request__mach_port_deallocate_t;

interface __Request__mach_port_destroy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_destroy_t: __Request__mach_port_destroy_t;

interface __Request__mach_port_destruct_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	srdelta: number;
	guard: number;
}
declare var __Request__mach_port_destruct_t: __Request__mach_port_destruct_t;

interface __Request__mach_port_dnrequest_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_dnrequest_info_t: __Request__mach_port_dnrequest_info_t;

interface __Request__mach_port_extract_member_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	pset: number;
}
declare var __Request__mach_port_extract_member_t: __Request__mach_port_extract_member_t;

interface __Request__mach_port_extract_right_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	msgt_name: number;
}
declare var __Request__mach_port_extract_right_t: __Request__mach_port_extract_right_t;

interface __Request__mach_port_get_attributes_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	flavor: number;
	port_info_outCnt: number;
}
declare var __Request__mach_port_get_attributes_t: __Request__mach_port_get_attributes_t;

interface __Request__mach_port_get_context_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_get_context_t: __Request__mach_port_get_context_t;

interface __Request__mach_port_get_refs_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	right: number;
}
declare var __Request__mach_port_get_refs_t: __Request__mach_port_get_refs_t;

interface __Request__mach_port_get_set_status_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_get_set_status_t: __Request__mach_port_get_set_status_t;

interface __Request__mach_port_get_srights_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_get_srights_t: __Request__mach_port_get_srights_t;

interface __Request__mach_port_guard_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	guard: number;
	strict: number;
}
declare var __Request__mach_port_guard_t: __Request__mach_port_guard_t;

interface __Request__mach_port_guard_with_flags_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	guard: number;
	flags: number;
}
declare var __Request__mach_port_guard_with_flags_t: __Request__mach_port_guard_with_flags_t;

interface __Request__mach_port_insert_member_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	pset: number;
}
declare var __Request__mach_port_insert_member_t: __Request__mach_port_insert_member_t;

interface __Request__mach_port_insert_right_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	poly: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_insert_right_t: __Request__mach_port_insert_right_t;

interface __Request__mach_port_kernel_object_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_kernel_object_t: __Request__mach_port_kernel_object_t;

interface __Request__mach_port_kobject_description_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_kobject_description_t: __Request__mach_port_kobject_description_t;

interface __Request__mach_port_kobject_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_kobject_t: __Request__mach_port_kobject_t;

interface __Request__mach_port_mod_refs_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	right: number;
	delta: number;
}
declare var __Request__mach_port_mod_refs_t: __Request__mach_port_mod_refs_t;

interface __Request__mach_port_move_member_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	member: number;
	after: number;
}
declare var __Request__mach_port_move_member_t: __Request__mach_port_move_member_t;

interface __Request__mach_port_names_t {
	Head: mach_msg_header_t;
}
declare var __Request__mach_port_names_t: __Request__mach_port_names_t;

interface __Request__mach_port_peek_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	trailer_type: number;
	request_seqnop: number;
	trailer_infopCnt: number;
}
declare var __Request__mach_port_peek_t: __Request__mach_port_peek_t;

interface __Request__mach_port_rename_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	old_name: number;
	new_name: number;
}
declare var __Request__mach_port_rename_t: __Request__mach_port_rename_t;

interface __Request__mach_port_request_notification_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	notify: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	name: number;
	msgid: number;
	sync: number;
}
declare var __Request__mach_port_request_notification_t: __Request__mach_port_request_notification_t;

interface __Request__mach_port_set_attributes_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	flavor: number;
	port_infoCnt: number;
	port_info: number;
}
declare var __Request__mach_port_set_attributes_t: __Request__mach_port_set_attributes_t;

interface __Request__mach_port_set_context_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	context: number;
}
declare var __Request__mach_port_set_context_t: __Request__mach_port_set_context_t;

interface __Request__mach_port_set_mscount_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	mscount: number;
}
declare var __Request__mach_port_set_mscount_t: __Request__mach_port_set_mscount_t;

interface __Request__mach_port_set_seqno_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	seqno: number;
}
declare var __Request__mach_port_set_seqno_t: __Request__mach_port_set_seqno_t;

interface __Request__mach_port_space_basic_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__mach_port_space_basic_info_t: __Request__mach_port_space_basic_info_t;

interface __Request__mach_port_space_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__mach_port_space_info_t: __Request__mach_port_space_info_t;

interface __Request__mach_port_swap_guard_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	old_guard: number;
	new_guard: number;
}
declare var __Request__mach_port_swap_guard_t: __Request__mach_port_swap_guard_t;

interface __Request__mach_port_type_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
}
declare var __Request__mach_port_type_t: __Request__mach_port_type_t;

interface __Request__mach_port_unguard_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: number;
	guard: number;
}
declare var __Request__mach_port_unguard_t: __Request__mach_port_unguard_t;

interface __Request__mach_ports_lookup_t {
	Head: mach_msg_header_t;
}
declare var __Request__mach_ports_lookup_t: __Request__mach_ports_lookup_t;

interface __Request__mach_ports_register_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	init_port_set: mach_msg_ool_ports_descriptor_t;
	NDR: NDR_record_t;
	init_port_setCnt: number;
}
declare var __Request__mach_ports_register_t: __Request__mach_ports_register_t;

interface __Request__mach_vm_allocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	flags: number;
}
declare var __Request__mach_vm_allocate_t: __Request__mach_vm_allocate_t;

interface __Request__mach_vm_behavior_set_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	new_behavior: number;
}
declare var __Request__mach_vm_behavior_set_t: __Request__mach_vm_behavior_set_t;

interface __Request__mach_vm_copy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	source_address: number;
	size: number;
	dest_address: number;
}
declare var __Request__mach_vm_copy_t: __Request__mach_vm_copy_t;

interface __Request__mach_vm_deallocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
}
declare var __Request__mach_vm_deallocate_t: __Request__mach_vm_deallocate_t;

interface __Request__mach_vm_inherit_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	new_inheritance: number;
}
declare var __Request__mach_vm_inherit_t: __Request__mach_vm_inherit_t;

interface __Request__mach_vm_machine_attribute_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	attribute: number;
	value: number;
}
declare var __Request__mach_vm_machine_attribute_t: __Request__mach_vm_machine_attribute_t;

interface __Request__mach_vm_map_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	object: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	mask: number;
	flags: number;
	offset: number;
	copy: number;
	cur_protection: number;
	max_protection: number;
	inheritance: number;
}
declare var __Request__mach_vm_map_t: __Request__mach_vm_map_t;

interface __Request__mach_vm_msync_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	sync_flags: number;
}
declare var __Request__mach_vm_msync_t: __Request__mach_vm_msync_t;

interface __Request__mach_vm_page_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	flavor: number;
	infoCnt: number;
}
declare var __Request__mach_vm_page_info_t: __Request__mach_vm_page_info_t;

interface __Request__mach_vm_page_query_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	offset: number;
}
declare var __Request__mach_vm_page_query_t: __Request__mach_vm_page_query_t;

interface __Request__mach_vm_page_range_query_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	dispositions: number;
	dispositions_count: number;
}
declare var __Request__mach_vm_page_range_query_t: __Request__mach_vm_page_range_query_t;

interface __Request__mach_vm_protect_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	set_maximum: number;
	new_protection: number;
}
declare var __Request__mach_vm_protect_t: __Request__mach_vm_protect_t;

interface __Request__mach_vm_purgable_control_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	control: number;
	state: number;
}
declare var __Request__mach_vm_purgable_control_t: __Request__mach_vm_purgable_control_t;

interface __Request__mach_vm_read_list_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	data_list: mach_vm_read_entry;
	count: number;
}
declare var __Request__mach_vm_read_list_t: __Request__mach_vm_read_list_t;

interface __Request__mach_vm_read_overwrite_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	data: number;
}
declare var __Request__mach_vm_read_overwrite_t: __Request__mach_vm_read_overwrite_t;

interface __Request__mach_vm_read_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
}
declare var __Request__mach_vm_read_t: __Request__mach_vm_read_t;

interface __Request__mach_vm_region_info_64_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
}
declare var __Request__mach_vm_region_info_64_t: __Request__mach_vm_region_info_64_t;

interface __Request__mach_vm_region_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
}
declare var __Request__mach_vm_region_info_t: __Request__mach_vm_region_info_t;

interface __Request__mach_vm_region_recurse_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	nesting_depth: number;
	infoCnt: number;
}
declare var __Request__mach_vm_region_recurse_t: __Request__mach_vm_region_recurse_t;

interface __Request__mach_vm_region_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	flavor: number;
	infoCnt: number;
}
declare var __Request__mach_vm_region_t: __Request__mach_vm_region_t;

interface __Request__mach_vm_remap_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	src_task: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	target_address: number;
	size: number;
	mask: number;
	flags: number;
	src_address: number;
	copy: number;
	inheritance: number;
}
declare var __Request__mach_vm_remap_t: __Request__mach_vm_remap_t;

interface __Request__mach_vm_wire_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	task: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	desired_access: number;
}
declare var __Request__mach_vm_wire_t: __Request__mach_vm_wire_t;

interface __Request__mach_vm_write_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	data: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	dataCnt: number;
}
declare var __Request__mach_vm_write_t: __Request__mach_vm_write_t;

interface __Request__mach_zone_info_for_zone_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	name: mach_zone_name_t;
}
declare var __Request__mach_zone_info_for_zone_t: __Request__mach_zone_info_for_zone_t;

interface __Request__mach_zone_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__mach_zone_info_t: __Request__mach_zone_info_t;

interface __Request__processor_assign_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_set: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	wait: number;
}
declare var __Request__processor_assign_t: __Request__processor_assign_t;

interface __Request__processor_control_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	processor_cmdCnt: number;
	processor_cmd: number;
}
declare var __Request__processor_control_t: __Request__processor_control_t;

interface __Request__processor_exit_t {
	Head: mach_msg_header_t;
}
declare var __Request__processor_exit_t: __Request__processor_exit_t;

interface __Request__processor_get_assignment_t {
	Head: mach_msg_header_t;
}
declare var __Request__processor_get_assignment_t: __Request__processor_get_assignment_t;

interface __Request__processor_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	processor_info_outCnt: number;
}
declare var __Request__processor_info_t: __Request__processor_info_t;

interface __Request__processor_set_create_t {
	Head: mach_msg_header_t;
}
declare var __Request__processor_set_create_t: __Request__processor_set_create_t;

interface __Request__processor_set_default_t {
	Head: mach_msg_header_t;
}
declare var __Request__processor_set_default_t: __Request__processor_set_default_t;

interface __Request__processor_set_destroy_t {
	Head: mach_msg_header_t;
}
declare var __Request__processor_set_destroy_t: __Request__processor_set_destroy_t;

interface __Request__processor_set_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	info_outCnt: number;
}
declare var __Request__processor_set_info_t: __Request__processor_set_info_t;

interface __Request__processor_set_max_priority_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	max_priority: number;
	change_threads: number;
}
declare var __Request__processor_set_max_priority_t: __Request__processor_set_max_priority_t;

interface __Request__processor_set_policy_control_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	policy_infoCnt: number;
	policy_info: number;
	change: number;
}
declare var __Request__processor_set_policy_control_t: __Request__processor_set_policy_control_t;

interface __Request__processor_set_policy_disable_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	policy: number;
	change_threads: number;
}
declare var __Request__processor_set_policy_disable_t: __Request__processor_set_policy_disable_t;

interface __Request__processor_set_policy_enable_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	policy: number;
}
declare var __Request__processor_set_policy_enable_t: __Request__processor_set_policy_enable_t;

interface __Request__processor_set_stack_usage_t {
	Head: mach_msg_header_t;
}
declare var __Request__processor_set_stack_usage_t: __Request__processor_set_stack_usage_t;

interface __Request__processor_set_statistics_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	info_outCnt: number;
}
declare var __Request__processor_set_statistics_t: __Request__processor_set_statistics_t;

interface __Request__processor_set_tasks_t {
	Head: mach_msg_header_t;
}
declare var __Request__processor_set_tasks_t: __Request__processor_set_tasks_t;

interface __Request__processor_set_threads_t {
	Head: mach_msg_header_t;
}
declare var __Request__processor_set_threads_t: __Request__processor_set_threads_t;

interface __Request__processor_start_t {
	Head: mach_msg_header_t;
}
declare var __Request__processor_start_t: __Request__processor_start_t;

interface __Request__semaphore_create_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	policy: number;
	value: number;
}
declare var __Request__semaphore_create_t: __Request__semaphore_create_t;

interface __Request__semaphore_destroy_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	semaphore: mach_msg_port_descriptor_t;
}
declare var __Request__semaphore_destroy_t: __Request__semaphore_destroy_t;

interface __Request__task_assign_default_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	assign_threads: number;
}
declare var __Request__task_assign_default_t: __Request__task_assign_default_t;

interface __Request__task_assign_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_set: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	assign_threads: number;
}
declare var __Request__task_assign_t: __Request__task_assign_t;

interface __Request__task_create_suid_cred_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	pathOffset: number;
	pathCnt: number;
	path: number;
	uid: number;
}
declare var __Request__task_create_suid_cred_t: __Request__task_create_suid_cred_t;

interface __Request__task_create_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	ledgers: mach_msg_ool_ports_descriptor_t;
	NDR: NDR_record_t;
	ledgersCnt: number;
	inherit_memory: number;
}
declare var __Request__task_create_t: __Request__task_create_t;

interface __Request__task_generate_corpse_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_generate_corpse_t: __Request__task_generate_corpse_t;

interface __Request__task_get_assignment_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_get_assignment_t: __Request__task_get_assignment_t;

interface __Request__task_get_dyld_image_infos_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_get_dyld_image_infos_t: __Request__task_get_dyld_image_infos_t;

interface __Request__task_get_emulation_vector_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_get_emulation_vector_t: __Request__task_get_emulation_vector_t;

interface __Request__task_get_exc_guard_behavior_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_get_exc_guard_behavior_t: __Request__task_get_exc_guard_behavior_t;

interface __Request__task_get_exception_ports_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	exception_mask: number;
}
declare var __Request__task_get_exception_ports_t: __Request__task_get_exception_ports_t;

interface __Request__task_get_mach_voucher_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	which: number;
}
declare var __Request__task_get_mach_voucher_t: __Request__task_get_mach_voucher_t;

interface __Request__task_get_special_port_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	which_port: number;
}
declare var __Request__task_get_special_port_t: __Request__task_get_special_port_t;

interface __Request__task_get_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	old_stateCnt: number;
}
declare var __Request__task_get_state_t: __Request__task_get_state_t;

interface __Request__task_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	task_info_outCnt: number;
}
declare var __Request__task_info_t: __Request__task_info_t;

interface __Request__task_inspect_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	info_outCnt: number;
}
declare var __Request__task_inspect_t: __Request__task_inspect_t;

interface __Request__task_map_corpse_info_64_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	corspe_task: mach_msg_port_descriptor_t;
}
declare var __Request__task_map_corpse_info_64_t: __Request__task_map_corpse_info_64_t;

interface __Request__task_map_corpse_info_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	corspe_task: mach_msg_port_descriptor_t;
}
declare var __Request__task_map_corpse_info_t: __Request__task_map_corpse_info_t;

interface __Request__task_policy_get_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	policy_infoCnt: number;
	get_default: number;
}
declare var __Request__task_policy_get_t: __Request__task_policy_get_t;

interface __Request__task_policy_set_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	policy_infoCnt: number;
	policy_info: number;
}
declare var __Request__task_policy_set_t: __Request__task_policy_set_t;

interface __Request__task_policy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	policy: number;
	baseCnt: number;
	base: number;
	set_limit: number;
	change: number;
}
declare var __Request__task_policy_t: __Request__task_policy_t;

interface __Request__task_purgable_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_purgable_info_t: __Request__task_purgable_info_t;

interface __Request__task_register_dyld_get_process_state_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_register_dyld_get_process_state_t: __Request__task_register_dyld_get_process_state_t;

interface __Request__task_register_dyld_image_infos_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	dyld_images: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	dyld_imagesCnt: number;
}
declare var __Request__task_register_dyld_image_infos_t: __Request__task_register_dyld_image_infos_t;

interface __Request__task_register_dyld_set_dyld_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	dyld_state: number;
	dyld_statePad: number;
}
declare var __Request__task_register_dyld_set_dyld_state_t: __Request__task_register_dyld_set_dyld_state_t;

interface __Request__task_resume2_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_resume2_t: __Request__task_resume2_t;

interface __Request__task_resume_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_resume_t: __Request__task_resume_t;

interface __Request__task_sample_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	reply: mach_msg_port_descriptor_t;
}
declare var __Request__task_sample_t: __Request__task_sample_t;

interface __Request__task_set_emulation_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	routine_entry_pt: number;
	routine_number: number;
}
declare var __Request__task_set_emulation_t: __Request__task_set_emulation_t;

interface __Request__task_set_emulation_vector_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	emulation_vector: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	vector_start: number;
	emulation_vectorCnt: number;
}
declare var __Request__task_set_emulation_vector_t: __Request__task_set_emulation_vector_t;

interface __Request__task_set_exc_guard_behavior_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	behavior: number;
}
declare var __Request__task_set_exc_guard_behavior_t: __Request__task_set_exc_guard_behavior_t;

interface __Request__task_set_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	exception_mask: number;
	behavior: number;
	new_flavor: number;
}
declare var __Request__task_set_exception_ports_t: __Request__task_set_exception_ports_t;

interface __Request__task_set_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	task_info_inCnt: number;
	task_info_in: number;
}
declare var __Request__task_set_info_t: __Request__task_set_info_t;

interface __Request__task_set_mach_voucher_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	voucher: mach_msg_port_descriptor_t;
}
declare var __Request__task_set_mach_voucher_t: __Request__task_set_mach_voucher_t;

interface __Request__task_set_phys_footprint_limit_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	new_limit: number;
}
declare var __Request__task_set_phys_footprint_limit_t: __Request__task_set_phys_footprint_limit_t;

interface __Request__task_set_policy_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	pset: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	policy: number;
	baseCnt: number;
	base: number;
	limitCnt: number;
	limit: number;
	change: number;
}
declare var __Request__task_set_policy_t: __Request__task_set_policy_t;

interface __Request__task_set_port_space_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	table_entries: number;
}
declare var __Request__task_set_port_space_t: __Request__task_set_port_space_t;

interface __Request__task_set_ras_pc_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	basepc: number;
	boundspc: number;
}
declare var __Request__task_set_ras_pc_t: __Request__task_set_ras_pc_t;

interface __Request__task_set_special_port_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	special_port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	which_port: number;
}
declare var __Request__task_set_special_port_t: __Request__task_set_special_port_t;

interface __Request__task_set_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	new_stateCnt: number;
	new_state: number;
}
declare var __Request__task_set_state_t: __Request__task_set_state_t;

interface __Request__task_suspend2_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_suspend2_t: __Request__task_suspend2_t;

interface __Request__task_suspend_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_suspend_t: __Request__task_suspend_t;

interface __Request__task_swap_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	exception_mask: number;
	behavior: number;
	new_flavor: number;
}
declare var __Request__task_swap_exception_ports_t: __Request__task_swap_exception_ports_t;

interface __Request__task_swap_mach_voucher_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_voucher: mach_msg_port_descriptor_t;
	old_voucher: mach_msg_port_descriptor_t;
}
declare var __Request__task_swap_mach_voucher_t: __Request__task_swap_mach_voucher_t;

interface __Request__task_terminate_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_terminate_t: __Request__task_terminate_t;

interface __Request__task_threads_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_threads_t: __Request__task_threads_t;

interface __Request__task_unregister_dyld_image_infos_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	dyld_images: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	dyld_imagesCnt: number;
}
declare var __Request__task_unregister_dyld_image_infos_t: __Request__task_unregister_dyld_image_infos_t;

interface __Request__task_wire_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	must_wire: number;
}
declare var __Request__task_wire_t: __Request__task_wire_t;

interface __Request__task_zone_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__task_zone_info_t: __Request__task_zone_info_t;

interface __Request__thread_abort_safely_t {
	Head: mach_msg_header_t;
}
declare var __Request__thread_abort_safely_t: __Request__thread_abort_safely_t;

interface __Request__thread_abort_t {
	Head: mach_msg_header_t;
}
declare var __Request__thread_abort_t: __Request__thread_abort_t;

interface __Request__thread_assign_default_t {
	Head: mach_msg_header_t;
}
declare var __Request__thread_assign_default_t: __Request__thread_assign_default_t;

interface __Request__thread_assign_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_set: mach_msg_port_descriptor_t;
}
declare var __Request__thread_assign_t: __Request__thread_assign_t;

interface __Request__thread_create_running_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	new_stateCnt: number;
	new_state: number;
}
declare var __Request__thread_create_running_t: __Request__thread_create_running_t;

interface __Request__thread_create_t {
	Head: mach_msg_header_t;
}
declare var __Request__thread_create_t: __Request__thread_create_t;

interface __Request__thread_depress_abort_t {
	Head: mach_msg_header_t;
}
declare var __Request__thread_depress_abort_t: __Request__thread_depress_abort_t;

interface __Request__thread_get_assignment_t {
	Head: mach_msg_header_t;
}
declare var __Request__thread_get_assignment_t: __Request__thread_get_assignment_t;

interface __Request__thread_get_exception_ports_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	exception_mask: number;
}
declare var __Request__thread_get_exception_ports_t: __Request__thread_get_exception_ports_t;

interface __Request__thread_get_mach_voucher_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	which: number;
}
declare var __Request__thread_get_mach_voucher_t: __Request__thread_get_mach_voucher_t;

interface __Request__thread_get_special_port_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	which_port: number;
}
declare var __Request__thread_get_special_port_t: __Request__thread_get_special_port_t;

interface __Request__thread_get_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	old_stateCnt: number;
}
declare var __Request__thread_get_state_t: __Request__thread_get_state_t;

interface __Request__thread_info_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	thread_info_outCnt: number;
}
declare var __Request__thread_info_t: __Request__thread_info_t;

interface __Request__thread_policy_get_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	policy_infoCnt: number;
	get_default: number;
}
declare var __Request__thread_policy_get_t: __Request__thread_policy_get_t;

interface __Request__thread_policy_set_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	policy_infoCnt: number;
	policy_info: number;
}
declare var __Request__thread_policy_set_t: __Request__thread_policy_set_t;

interface __Request__thread_policy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	policy: number;
	baseCnt: number;
	base: number;
	set_limit: number;
}
declare var __Request__thread_policy_t: __Request__thread_policy_t;

interface __Request__thread_resume_t {
	Head: mach_msg_header_t;
}
declare var __Request__thread_resume_t: __Request__thread_resume_t;

interface __Request__thread_sample_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	reply: mach_msg_port_descriptor_t;
}
declare var __Request__thread_sample_t: __Request__thread_sample_t;

interface __Request__thread_set_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	exception_mask: number;
	behavior: number;
	new_flavor: number;
}
declare var __Request__thread_set_exception_ports_t: __Request__thread_set_exception_ports_t;

interface __Request__thread_set_mach_voucher_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	voucher: mach_msg_port_descriptor_t;
}
declare var __Request__thread_set_mach_voucher_t: __Request__thread_set_mach_voucher_t;

interface __Request__thread_set_policy_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	pset: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	policy: number;
	baseCnt: number;
	base: number;
	limitCnt: number;
	limit: number;
}
declare var __Request__thread_set_policy_t: __Request__thread_set_policy_t;

interface __Request__thread_set_special_port_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	special_port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	which_port: number;
}
declare var __Request__thread_set_special_port_t: __Request__thread_set_special_port_t;

interface __Request__thread_set_state_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	flavor: number;
	new_stateCnt: number;
	new_state: number;
}
declare var __Request__thread_set_state_t: __Request__thread_set_state_t;

interface __Request__thread_suspend_t {
	Head: mach_msg_header_t;
}
declare var __Request__thread_suspend_t: __Request__thread_suspend_t;

interface __Request__thread_swap_exception_ports_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_port: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	exception_mask: number;
	behavior: number;
	new_flavor: number;
}
declare var __Request__thread_swap_exception_ports_t: __Request__thread_swap_exception_ports_t;

interface __Request__thread_swap_mach_voucher_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	new_voucher: mach_msg_port_descriptor_t;
	old_voucher: mach_msg_port_descriptor_t;
}
declare var __Request__thread_swap_mach_voucher_t: __Request__thread_swap_mach_voucher_t;

interface __Request__thread_terminate_t {
	Head: mach_msg_header_t;
}
declare var __Request__thread_terminate_t: __Request__thread_terminate_t;

interface __Request__thread_wire_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	thread: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	wired: number;
}
declare var __Request__thread_wire_t: __Request__thread_wire_t;

interface __Request__vm_allocate_cpm_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	task: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	flags: number;
}
declare var __Request__vm_allocate_cpm_t: __Request__vm_allocate_cpm_t;

interface __Request__vm_allocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	flags: number;
}
declare var __Request__vm_allocate_t: __Request__vm_allocate_t;

interface __Request__vm_behavior_set_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	new_behavior: number;
}
declare var __Request__vm_behavior_set_t: __Request__vm_behavior_set_t;

interface __Request__vm_copy_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	source_address: number;
	size: number;
	dest_address: number;
}
declare var __Request__vm_copy_t: __Request__vm_copy_t;

interface __Request__vm_deallocate_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
}
declare var __Request__vm_deallocate_t: __Request__vm_deallocate_t;

interface __Request__vm_inherit_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	new_inheritance: number;
}
declare var __Request__vm_inherit_t: __Request__vm_inherit_t;

interface __Request__vm_machine_attribute_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	attribute: number;
	value: number;
}
declare var __Request__vm_machine_attribute_t: __Request__vm_machine_attribute_t;

interface __Request__vm_map_64_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	object: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	mask: number;
	flags: number;
	offset: number;
	copy: number;
	cur_protection: number;
	max_protection: number;
	inheritance: number;
}
declare var __Request__vm_map_64_t: __Request__vm_map_64_t;

interface __Request__vm_map_exec_lockdown_t {
	Head: mach_msg_header_t;
}
declare var __Request__vm_map_exec_lockdown_t: __Request__vm_map_exec_lockdown_t;

interface __Request__vm_map_page_query_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	offset: number;
}
declare var __Request__vm_map_page_query_t: __Request__vm_map_page_query_t;

interface __Request__vm_map_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	object: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	mask: number;
	flags: number;
	offset: number;
	copy: number;
	cur_protection: number;
	max_protection: number;
	inheritance: number;
}
declare var __Request__vm_map_t: __Request__vm_map_t;

interface __Request__vm_mapped_pages_info_t {
	Head: mach_msg_header_t;
}
declare var __Request__vm_mapped_pages_info_t: __Request__vm_mapped_pages_info_t;

interface __Request__vm_msync_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	sync_flags: number;
}
declare var __Request__vm_msync_t: __Request__vm_msync_t;

interface __Request__vm_protect_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	set_maximum: number;
	new_protection: number;
}
declare var __Request__vm_protect_t: __Request__vm_protect_t;

interface __Request__vm_purgable_control_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	control: number;
	state: number;
}
declare var __Request__vm_purgable_control_t: __Request__vm_purgable_control_t;

interface __Request__vm_read_list_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	data_list: vm_read_entry;
	count: number;
}
declare var __Request__vm_read_list_t: __Request__vm_read_list_t;

interface __Request__vm_read_overwrite_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	data: number;
}
declare var __Request__vm_read_overwrite_t: __Request__vm_read_overwrite_t;

interface __Request__vm_read_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
}
declare var __Request__vm_read_t: __Request__vm_read_t;

interface __Request__vm_region_64_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	flavor: number;
	infoCnt: number;
}
declare var __Request__vm_region_64_t: __Request__vm_region_64_t;

interface __Request__vm_region_recurse_64_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	nesting_depth: number;
	infoCnt: number;
}
declare var __Request__vm_region_recurse_64_t: __Request__vm_region_recurse_64_t;

interface __Request__vm_region_recurse_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	nesting_depth: number;
	infoCnt: number;
}
declare var __Request__vm_region_recurse_t: __Request__vm_region_recurse_t;

interface __Request__vm_region_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	address: number;
	flavor: number;
	infoCnt: number;
}
declare var __Request__vm_region_t: __Request__vm_region_t;

interface __Request__vm_remap_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	src_task: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	target_address: number;
	size: number;
	mask: number;
	flags: number;
	src_address: number;
	copy: number;
	inheritance: number;
}
declare var __Request__vm_remap_t: __Request__vm_remap_t;

interface __Request__vm_wire_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	task: mach_msg_port_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	size: number;
	desired_access: number;
}
declare var __Request__vm_wire_t: __Request__vm_wire_t;

interface __Request__vm_write_t {
	Head: mach_msg_header_t;
	msgh_body: mach_msg_body_t;
	data: mach_msg_ool_descriptor_t;
	NDR: NDR_record_t;
	address: number;
	dataCnt: number;
}
declare var __Request__vm_write_t: __Request__vm_write_t;

declare function ___mb_cur_max(): number;

declare function ___mb_cur_max_l(p1: any): number;

declare function ___runetype(p1: number): number;

declare function ___runetype_l(p1: number, p2: any): number;

declare function ___tolower(p1: number): number;

declare function ___tolower_l(p1: number, p2: any): number;

declare function ___toupper(p1: number): number;

declare function ___toupper_l(p1: number, p2: any): number;

declare function __cospi(p1: number): number;

declare function __cospif(p1: number): number;

declare function __darwin_check_fd_set_overflow(p1: number, p2: any, p3: number): number;

interface __darwin_pthread_handler_rec {
	__routine: (p1: any) => void;
	__arg: any;
	__next: __darwin_pthread_handler_rec;
}
declare var __darwin_pthread_handler_rec: __darwin_pthread_handler_rec;

interface __darwin_sigaltstack {
	ss_sp: any;
	ss_size: number;
	ss_flags: number;
}
declare var __darwin_sigaltstack: __darwin_sigaltstack;

interface __double2 {
	__sinval: number;
	__cosval: number;
}
declare var __double2: __double2;

declare function __error(): number;

declare function __exp10(p1: number): number;

declare function __exp10f(p1: number): number;

interface __float2 {
	__sinval: number;
	__cosval: number;
}
declare var __float2: __float2;

declare function __fpclassifyd(p1: number): number;

declare function __fpclassifyf(p1: number): number;

declare function __fpclassifyl(p1: number): number;

declare function __inline_isfinited(p1: number): number;

declare function __inline_isfinitef(p1: number): number;

declare function __inline_isfinitel(p1: number): number;

declare function __inline_isinfd(p1: number): number;

declare function __inline_isinff(p1: number): number;

declare function __inline_isinfl(p1: number): number;

declare function __inline_isnand(p1: number): number;

declare function __inline_isnanf(p1: number): number;

declare function __inline_isnanl(p1: number): number;

declare function __inline_isnormald(p1: number): number;

declare function __inline_isnormalf(p1: number): number;

declare function __inline_isnormall(p1: number): number;

declare function __inline_signbitd(p1: number): number;

declare function __inline_signbitf(p1: number): number;

declare function __inline_signbitl(p1: number): number;

declare function __maskrune(p1: number, p2: number): number;

declare function __maskrune_l(p1: number, p2: number, p3: any): number;

declare function __math_errhandling(): number;

declare var __mb_cur_max: number;

interface __msfilterreq {
	msfr_ifindex: number;
	msfr_fmode: number;
	msfr_nsrcs: number;
	__msfr_align: number;
	msfr_group: sockaddr_storage;
	msfr_srcs: sockaddr_storage;
}
declare var __msfilterreq: __msfilterreq;

interface __msqid_ds_new {
	msg_perm: ipc_perm;
	msg_first: number;
	msg_last: number;
	msg_cbytes: number;
	msg_qnum: number;
	msg_qbytes: number;
	msg_lspid: number;
	msg_lrpid: number;
	msg_stime: number;
	msg_pad1: number;
	msg_rtime: number;
	msg_pad2: number;
	msg_ctime: number;
	msg_pad3: number;
	msg_pad4: number;
}
declare var __msqid_ds_new: __msqid_ds_new;

interface __nl_cat_d {
	__data: any;
	__size: number;
}
declare var __nl_cat_d: __nl_cat_d;

declare function __opendir2(p1: string | any, p2: number): DIR;

interface __sbuf {
	_base: string;
	_size: number;
}
declare var __sbuf: __sbuf;

interface __semid_ds_new {
	sem_perm: ipc_perm;
	sem_base: number;
	sem_nsems: number;
	sem_otime: number;
	sem_pad1: number;
	sem_ctime: number;
	sem_pad2: number;
	sem_pad3: number;
}
declare var __semid_ds_new: __semid_ds_new;

interface __shmid_ds_new {
	shm_perm: ipc_perm;
	shm_segsz: number;
	shm_lpid: number;
	shm_cpid: number;
	shm_nattch: number;
	shm_atime: number;
	shm_dtime: number;
	shm_ctime: number;
	shm_internal: any;
}
declare var __shmid_ds_new: __shmid_ds_new;

declare function __sincos(__x: number, __sinp: number, __cosp: number): void;

declare function __sincos_stret(p1: number): __double2;

declare function __sincosf(__x: number, __sinp: number, __cosp: number): void;

declare function __sincosf_stret(p1: number): __float2;

declare function __sincospi(__x: number, __sinp: number, __cosp: number): void;

declare function __sincospi_stret(p1: number): __double2;

declare function __sincospif(__x: number, __sinp: number, __cosp: number): void;

declare function __sincospif_stret(p1: number): __float2;

declare function __sinpi(p1: number): number;

declare function __sinpif(p1: number): number;

declare function __srget(p1: FILE): number;

declare var __stderrp: FILE;

declare var __stdinp: FILE;

declare var __stdoutp: FILE;

declare function __swbuf(p1: number, p2: FILE): number;

declare function __tanpi(p1: number): number;

declare function __tanpif(p1: number): number;

declare function __tolower(p1: number): number;

declare function __toupper(p1: number): number;

declare function _exit(p1: number): void;

declare var _gmonparam: gmonparam;

declare function _host_page_size(host: number, out_page_size: number): number;

declare function _kernelrpc_mach_port_allocate_trap(target: number, right: number, name: number): number;

declare function _kernelrpc_mach_port_construct_trap(target: number, options: mach_port_options_t, context: number, name: number): number;

declare function _kernelrpc_mach_port_deallocate_trap(target: number, name: number): number;

declare function _kernelrpc_mach_port_destroy_trap(target: number, name: number): number;

declare function _kernelrpc_mach_port_destruct_trap(target: number, name: number, srdelta: number, guard: number): number;

declare function _kernelrpc_mach_port_extract_member_trap(target: number, name: number, pset: number): number;

declare function _kernelrpc_mach_port_get_attributes_trap(target: number, name: number, flavor: number, port_info_out: number, port_info_outCnt: number): number;

declare function _kernelrpc_mach_port_guard_trap(target: number, name: number, guard: number, strict: number): number;

declare function _kernelrpc_mach_port_insert_member_trap(target: number, name: number, pset: number): number;

declare function _kernelrpc_mach_port_insert_right_trap(target: number, name: number, poly: number, polyPoly: number): number;

declare function _kernelrpc_mach_port_mod_refs_trap(target: number, name: number, right: number, delta: number): number;

declare function _kernelrpc_mach_port_move_member_trap(target: number, member: number, after: number): number;

declare function _kernelrpc_mach_port_request_notification_trap(task: number, name: number, msgid: number, sync: number, notify: number, notifyPoly: number, previous: number): number;

declare function _kernelrpc_mach_port_type_trap(task: number, name: number, ptype: number): number;

declare function _kernelrpc_mach_port_unguard_trap(target: number, name: number, guard: number): number;

declare function _kernelrpc_mach_vm_allocate_trap(target: number, addr: number, size: number, flags: number): number;

declare function _kernelrpc_mach_vm_deallocate_trap(target: number, address: number, size: number): number;

declare function _kernelrpc_mach_vm_map_trap(target: number, address: number, size: number, mask: number, flags: number, cur_protection: number): number;

declare function _kernelrpc_mach_vm_protect_trap(target: number, address: number, size: number, set_maximum: number, new_protection: number): number;

declare function _kernelrpc_mach_vm_purgable_control_trap(target: number, address: number, control: number, state: number): number;

declare var _libiconv_version: number;

declare function _longjmp(p1: number, p2: number): void;

declare function _mach_make_memory_entry(target_task: number, size: number, offset: number, permission: number, object_handle: number, parent_handle: number): number;

interface _opaque_pthread_attr_t {
	__sig: number;
	__opaque: number;
}
declare var _opaque_pthread_attr_t: _opaque_pthread_attr_t;

interface _opaque_pthread_cond_t {
	__sig: number;
	__opaque: number;
}
declare var _opaque_pthread_cond_t: _opaque_pthread_cond_t;

interface _opaque_pthread_condattr_t {
	__sig: number;
	__opaque: number;
}
declare var _opaque_pthread_condattr_t: _opaque_pthread_condattr_t;

interface _opaque_pthread_mutex_t {
	__sig: number;
	__opaque: number;
}
declare var _opaque_pthread_mutex_t: _opaque_pthread_mutex_t;

interface _opaque_pthread_mutexattr_t {
	__sig: number;
	__opaque: number;
}
declare var _opaque_pthread_mutexattr_t: _opaque_pthread_mutexattr_t;

interface _opaque_pthread_once_t {
	__sig: number;
	__opaque: number;
}
declare var _opaque_pthread_once_t: _opaque_pthread_once_t;

interface _opaque_pthread_rwlock_t {
	__sig: number;
	__opaque: number;
}
declare var _opaque_pthread_rwlock_t: _opaque_pthread_rwlock_t;

interface _opaque_pthread_rwlockattr_t {
	__sig: number;
	__opaque: number;
}
declare var _opaque_pthread_rwlockattr_t: _opaque_pthread_rwlockattr_t;

interface _opaque_pthread_t {
	__sig: number;
	__cleanup_stack: __darwin_pthread_handler_rec;
	__opaque: number;
}
declare var _opaque_pthread_t: _opaque_pthread_t;

interface _pcred {
	pc_lock: number;
	pc_ucred: any;
	p_ruid: number;
	p_svuid: number;
	p_rgid: number;
	p_svgid: number;
	p_refcnt: number;
}
declare var _pcred: _pcred;

declare function _pthread_mutex_enable_legacy_mode(): void;

declare function _setjmp(p1: number): number;

interface _ucred {
	cr_ref: number;
	cr_uid: number;
	cr_ngroups: number;
	cr_groups: number;
}
declare var _ucred: _ucred;

interface _unpcb_list_entry {
	le_next: number;
	le_prev: number;
}
declare var _unpcb_list_entry: _unpcb_list_entry;

interface _win_st {
	_cury: number;
	_curx: number;
	_maxy: number;
	_maxx: number;
	_begy: number;
	_begx: number;
	_flags: number;
	_attrs: number;
	_bkgd: number;
	_notimeout: boolean;
	_clear: boolean;
	_leaveok: boolean;
	_scroll: boolean;
	_idlok: boolean;
	_idcok: boolean;
	_immed: boolean;
	_sync: boolean;
	_use_keypad: boolean;
	_delay: number;
	_line: any;
	_regtop: number;
	_regbottom: number;
	_parx: number;
	_pary: number;
	_parent: _win_st;
	_pad: pdat;
	_yoffset: number;
}
declare var _win_st: _win_st;

declare function a64l(p1: string | any): number;

declare function abort(): void;

declare function abs(p1: number): number;

declare function accept(p1: number, p2: sockaddr, p3: number): number;

declare function access(p1: string | any, p2: number): number;

interface accessx_descriptor {
	ad_name_offset: number;
	ad_flags: number;
	ad_pad: number;
}
declare var accessx_descriptor: accessx_descriptor;

declare function accessx_np(p1: accessx_descriptor, p2: number, p3: number, p4: number): number;

declare function acct(p1: string | any): number;

interface acctStruct {
	ac_comm: number;
	ac_utime: number;
	ac_stime: number;
	ac_etime: number;
	ac_btime: number;
	ac_uid: number;
	ac_gid: number;
	ac_mem: number;
	ac_io: number;
	ac_tty: number;
	ac_flag: number;
}
declare var acctStruct: acctStruct;

declare function acl_add_flag_np(flagset_d: any, flag: acl_flag_t): number;

declare function acl_add_perm(permset_d: any, perm: acl_perm_t): number;

declare function acl_calc_mask(acl_p: any): number;

declare function acl_clear_flags_np(flagset_d: any): number;

declare function acl_clear_perms(permset_d: any): number;

declare function acl_copy_entry(dest_d: any, src_d: any): number;

declare function acl_copy_ext(buf_p: any, acl: any, size: number): number;

declare function acl_copy_ext_native(buf_p: any, acl: any, size: number): number;

declare function acl_copy_int(buf_p: any): any;

declare function acl_copy_int_native(buf_p: any): any;

declare function acl_create_entry(acl_p: any, entry_p: any): number;

declare function acl_create_entry_np(acl_p: any, entry_p: any, entry_index: number): number;

declare function acl_delete_def_file(path_p: string | any): number;

declare function acl_delete_entry(acl: any, entry_d: any): number;

declare function acl_delete_flag_np(flagset_d: any, flag: acl_flag_t): number;

declare function acl_delete_perm(permset_d: any, perm: acl_perm_t): number;

declare function acl_dup(acl: any): any;

enum acl_entry_id_t {

	ACL_FIRST_ENTRY = 0,

	ACL_NEXT_ENTRY = -1,

	ACL_LAST_ENTRY = -2
}


enum acl_flag_t {

	ACL_FLAG_DEFER_INHERIT = 1,

	ACL_FLAG_NO_INHERIT = 131072,

	ACL_ENTRY_INHERITED = 16,

	ACL_ENTRY_FILE_INHERIT = 32,

	ACL_ENTRY_DIRECTORY_INHERIT = 64,

	ACL_ENTRY_LIMIT_INHERIT = 128,

	ACL_ENTRY_ONLY_INHERIT = 256
}


declare function acl_free(obj_p: any): number;

declare function acl_from_text(buf_p: string | any): any;

declare function acl_get_entry(acl: any, entry_id: number, entry_p: any): number;

declare function acl_get_fd(fd: number): any;

declare function acl_get_fd_np(fd: number, type: acl_type_t): any;

declare function acl_get_file(path_p: string | any, type: acl_type_t): any;

declare function acl_get_flag_np(flagset_d: any, flag: acl_flag_t): number;

declare function acl_get_flagset_np(obj_p: any, flagset_p: any): number;

declare function acl_get_link_np(path_p: string | any, type: acl_type_t): any;

declare function acl_get_perm_np(permset_d: any, perm: acl_perm_t): number;

declare function acl_get_permset(entry_d: any, permset_p: any): number;

declare function acl_get_permset_mask_np(entry_d: any, mask_p: number): number;

declare function acl_get_qualifier(entry_d: any): any;

declare function acl_get_tag_type(entry_d: any, tag_type_p: acl_tag_t): number;

declare function acl_init(count: number): any;

declare function acl_maximal_permset_mask_np(mask_p: number): number;

enum acl_perm_t {

	ACL_READ_DATA = 2,

	ACL_LIST_DIRECTORY = 2,

	ACL_WRITE_DATA = 4,

	ACL_ADD_FILE = 4,

	ACL_EXECUTE = 8,

	ACL_SEARCH = 8,

	ACL_DELETE = 16,

	ACL_APPEND_DATA = 32,

	ACL_ADD_SUBDIRECTORY = 32,

	ACL_DELETE_CHILD = 64,

	ACL_READ_ATTRIBUTES = 128,

	ACL_WRITE_ATTRIBUTES = 256,

	ACL_READ_EXTATTRIBUTES = 512,

	ACL_WRITE_EXTATTRIBUTES = 1024,

	ACL_READ_SECURITY = 2048,

	ACL_WRITE_SECURITY = 4096,

	ACL_CHANGE_OWNER = 8192,

	ACL_SYNCHRONIZE = 1048576
}


declare function acl_set_fd(fd: number, acl: any): number;

declare function acl_set_fd_np(fd: number, acl: any, acl_type: acl_type_t): number;

declare function acl_set_file(path_p: string | any, type: acl_type_t, acl: any): number;

declare function acl_set_flagset_np(obj_p: any, flagset_d: any): number;

declare function acl_set_link_np(path_p: string | any, type: acl_type_t, acl: any): number;

declare function acl_set_permset(entry_d: any, permset_d: any): number;

declare function acl_set_permset_mask_np(entry_d: any, mask: number): number;

declare function acl_set_qualifier(entry_d: any, tag_qualifier_p: any): number;

declare function acl_set_tag_type(entry_d: any, tag_type: acl_tag_t): number;

declare function acl_size(acl: any): number;

enum acl_tag_t {

	ACL_UNDEFINED_TAG = 0,

	ACL_EXTENDED_ALLOW = 1,

	ACL_EXTENDED_DENY = 2
}


declare function acl_to_text(acl: any, len_p: number): string;

enum acl_type_t {

	ACL_TYPE_EXTENDED = 256,

	ACL_TYPE_ACCESS = 0,

	ACL_TYPE_DEFAULT = 1,

	ACL_TYPE_AFS = 2,

	ACL_TYPE_CODA = 3,

	ACL_TYPE_NTFS = 4,

	ACL_TYPE_NWFS = 5
}


declare function acl_valid(acl: any): number;

declare function acl_valid_fd_np(fd: number, type: acl_type_t, acl: any): number;

declare function acl_valid_file_np(path: string | any, type: acl_type_t, acl: any): number;

declare function acl_valid_link_np(path: string | any, type: acl_type_t, acl: any): number;

declare function acos(p1: number): number;

declare function acosf(p1: number): number;

declare function acosh(p1: number): number;

declare function acoshf(p1: number): number;

declare function acoshl(p1: number): number;

declare function acosl(p1: number): number;

declare var acs_map: number;

declare function act_get_state(target_act: number, flavor: number, old_state: number, old_stateCnt: number): number;

declare function act_set_state(target_act: number, flavor: number, new_state: number, new_stateCnt: number): number;

declare function add_profil(p1: string | any, p2: number, p3: number, p4: number): number;

declare function addch(p1: number): number;

declare function addchnstr(p1: number, p2: number): number;

declare function addchstr(p1: number): number;

declare function addnstr(p1: string | any, p2: number): number;

declare function addr2ascii(p1: number, p2: any, p3: number, p4: string | any): string;

interface addrinfo {
	ai_flags: number;
	ai_family: number;
	ai_socktype: number;
	ai_protocol: number;
	ai_addrlen: number;
	ai_canonname: string;
	ai_addr: sockaddr;
	ai_next: addrinfo;
}
declare var addrinfo: addrinfo;

declare function addstr(p1: string | any): number;

declare function adjtime(p1: timeval, p2: timeval): number;

declare function alarm(p1: number): number;

declare function aligned_alloc(__alignment: number, __size: number): any;

declare function alloca(p1: number): any;

declare const alphaStage: number;

declare function alphasort(p1: dirent, p2: dirent): number;

interface appletalk_fdinfo {
	pfi: proc_fileinfo;
	appletalkinfo: appletalk_info;
}
declare var appletalk_fdinfo: appletalk_fdinfo;

interface appletalk_info {
	atalk_stat: vinfo_stat;
}
declare var appletalk_info: appletalk_info;

declare function arc4random(): number;

declare function arc4random_buf(__buf: any, __nbytes: number): void;

declare function arc4random_stir(): void;

declare function arc4random_uniform(__upper_bound: number): number;

declare function ascii2addr(p1: number, p2: string | any, p3: any): number;

declare function asctime(p1: tm): string;

declare function asctime_r(p1: tm, p2: string | any): string;

declare function asin(p1: number): number;

declare function asinf(p1: number): number;

declare function asinh(p1: number): number;

declare function asinhf(p1: number): number;

declare function asinhl(p1: number): number;

declare function asinl(p1: number): number;

declare function assume_default_colors(p1: number, p2: number): number;

declare function atan(p1: number): number;

declare function atan2(p1: number, p2: number): number;

declare function atan2f(p1: number, p2: number): number;

declare function atan2l(p1: number, p2: number): number;

declare function atanf(p1: number): number;

declare function atanh(p1: number): number;

declare function atanhf(p1: number): number;

declare function atanhl(p1: number): number;

declare function atanl(p1: number): number;

declare function atexit(p1: () => void): number;

declare function atexit_b(p1: () => void): number;

declare function atof(p1: string | any): number;

declare function atof_l(p1: string | any, p2: any): number;

declare function atoi(p1: string | any): number;

declare function atoi_l(p1: string | any, p2: any): number;

declare function atol(p1: string | any): number;

declare function atol_l(p1: string | any, p2: any): number;

declare function atoll(p1: string | any): number;

declare function atoll_l(p1: string | any, p2: any): number;

declare function atomic_signal_fence(p1: memory_order): void;

declare function atomic_thread_fence(p1: memory_order): void;

declare function attr_get(p1: number, p2: number, p3: any): number;

declare function attr_off(p1: number, p2: any): number;

declare function attr_on(p1: number, p2: any): number;

declare function attr_set(p1: number, p2: number, p3: any): number;

interface attribute_set_t {
	commonattr: number;
	volattr: number;
	dirattr: number;
	fileattr: number;
	forkattr: number;
}
declare var attribute_set_t: attribute_set_t;

interface attrlist {
	bitmapcount: number;
	reserved: number;
	commonattr: number;
	volattr: number;
	dirattr: number;
	fileattr: number;
	forkattr: number;
}
declare var attrlist: attrlist;

declare function attroff(p1: number): number;

declare function attron(p1: number): number;

interface attrreference_t {
	attr_dataoffset: number;
	attr_length: number;
}
declare var attrreference_t: attrreference_t;

declare function attrset(p1: number): number;

interface au_arb_t {
	howtopr: number;
	bu: number;
	uc: number;
	data: string;
}
declare var au_arb_t: au_arb_t;

interface au_arg32_t {
	no: number;
	val: number;
	len: number;
	text: string;
}
declare var au_arg32_t: au_arg32_t;

interface au_arg64_t {
	no: number;
	val: number;
	len: number;
	text: string;
}
declare var au_arg64_t: au_arg64_t;

interface au_attr32_t {
	mode: number;
	uid: number;
	gid: number;
	fsid: number;
	nid: number;
	dev: number;
}
declare var au_attr32_t: au_attr32_t;

interface au_attr64_t {
	mode: number;
	uid: number;
	gid: number;
	fsid: number;
	nid: number;
	dev: number;
}
declare var au_attr64_t: au_attr64_t;

declare function au_bsm_to_domain(bsm_domain: number, local_domainp: number): number;

declare function au_bsm_to_domainFunction(bsm_domain: number, local_domainp: number): number;

declare function au_bsm_to_errno(bsm_error: number, errorp: number): number;

declare function au_bsm_to_errnoFunction(bsm_error: number, errorp: number): number;

declare function au_bsm_to_fcntl_cmd(bsm_fcntl_cmd: number, local_fcntl_cmdp: number): number;

declare function au_bsm_to_fcntl_cmdFunction(bsm_fcntl_cmd: number, local_fcntl_cmdp: number): number;

declare function au_bsm_to_socket_type(bsm_socket_type: number, local_socket_typep: number): number;

declare function au_bsm_to_socket_typeFunction(bsm_socket_type: number, local_socket_typep: number): number;

interface au_cert_hash_t {
	count: number;
	text: string;
}
declare var au_cert_hash_t: au_cert_hash_t;

interface au_class_ent {
	ac_name: string;
	ac_class: number;
	ac_desc: string;
}
declare var au_class_ent: au_class_ent;

declare function au_close(d: number, keep: number, event: number): number;

declare function au_close_buffer(d: number, event: number, buffer: string | any, buflen: number): number;

declare function au_close_token(tok: any, buffer: string | any, buflen: number): number;

declare function au_domain_to_bsm(local_domain: number): number;

declare function au_domain_to_bsmFunction(local_domain: number): number;

declare function au_errno_to_bsm(local_errno: number): number;

declare function au_errno_to_bsmFunction(local_errno: number): number;

interface au_evclass_map {
	ec_number: number;
	ec_class: number;
}
declare var au_evclass_map: au_evclass_map;

interface au_event_ent {
	ae_number: number;
	ae_name: string;
	ae_desc: string;
	ae_class: number;
}
declare var au_event_ent: au_event_ent;

interface au_execarg_t {
	count: number;
	text: string;
}
declare var au_execarg_t: au_execarg_t;

interface au_execenv_t {
	count: number;
	text: string;
}
declare var au_execenv_t: au_execenv_t;

interface au_exit_t {
	status: number;
	ret: number;
}
declare var au_exit_t: au_exit_t;

interface au_expire_after {
	age: number;
	size: number;
	op_type: number;
}
declare var au_expire_after: au_expire_after;

declare function au_fcntl_cmd_to_bsm(local_fcntl_command: number): number;

declare function au_fcntl_cmd_to_bsmFunction(local_fcntl_command: number): number;

interface au_file_t {
	s: number;
	ms: number;
	len: number;
	name: string;
}
declare var au_file_t: au_file_t;

declare function au_free_token(tok: any): void;

declare function au_get_state(): number;

interface au_groups_t {
	no: number;
	list: number;
}
declare var au_groups_t: au_groups_t;

interface au_header32_ex_t {
	size: number;
	version: number;
	e_type: number;
	e_mod: number;
	ad_type: number;
	addr: number;
	s: number;
	ms: number;
}
declare var au_header32_ex_t: au_header32_ex_t;

interface au_header32_t {
	size: number;
	version: number;
	e_type: number;
	e_mod: number;
	s: number;
	ms: number;
}
declare var au_header32_t: au_header32_t;

interface au_header64_ex_t {
	size: number;
	version: number;
	e_type: number;
	e_mod: number;
	ad_type: number;
	addr: number;
	s: number;
	ms: number;
}
declare var au_header64_ex_t: au_header64_ex_t;

interface au_header64_t {
	size: number;
	version: number;
	e_type: number;
	e_mod: number;
	s: number;
	ms: number;
}
declare var au_header64_t: au_header64_t;

interface au_identity_t {
	signer_type: number;
	signing_id_len: number;
	signing_id: string;
	signing_id_truncated: number;
	team_id_len: number;
	team_id: string;
	team_id_truncated: number;
	cdhash_len: number;
	cdhash: string;
}
declare var au_identity_t: au_identity_t;

interface au_inaddr_ex_t {
	type: number;
	addr: number;
}
declare var au_inaddr_ex_t: au_inaddr_ex_t;

interface au_inaddr_t {
	addr: number;
}
declare var au_inaddr_t: au_inaddr_t;

interface au_invalid_t {
	length: number;
	data: string;
}
declare var au_invalid_t: au_invalid_t;

interface au_ip_t {
	version: number;
	tos: number;
	len: number;
	id: number;
	offset: number;
	ttl: number;
	prot: number;
	chksm: number;
	src: number;
	dest: number;
}
declare var au_ip_t: au_ip_t;

interface au_ipc_t {
	type: number;
	id: number;
}
declare var au_ipc_t: au_ipc_t;

interface au_ipcperm_t {
	uid: number;
	gid: number;
	puid: number;
	pgid: number;
	mode: number;
	seq: number;
	key: number;
}
declare var au_ipcperm_t: au_ipcperm_t;

interface au_iport_t {
	port: number;
}
declare var au_iport_t: au_iport_t;

interface au_kevent_t {
	ident: number;
	filter: number;
	flags: number;
	fflags: number;
	data: number;
}
declare var au_kevent_t: au_kevent_t;

interface au_krb5_principal_t {
	count: number;
	text: string;
}
declare var au_krb5_principal_t: au_krb5_principal_t;

interface au_mask {
	am_success: number;
	am_failure: number;
}
declare var au_mask: au_mask;

declare function au_notify_initialize(): number;

declare function au_notify_terminate(): number;

interface au_opaque_t {
	size: number;
	data: string;
}
declare var au_opaque_t: au_opaque_t;

declare function au_open(): number;

interface au_path_t {
	len: number;
	path: string;
}
declare var au_path_t: au_path_t;

declare function au_poltostr(policy: number, maxsize: number, buf: string | any): number;

declare function au_preselect(event: number, mask_p: au_mask, sorf: number, flag: number): number;

declare function au_print_xml_footer(outfp: FILE): void;

declare function au_print_xml_header(outfp: FILE): void;

interface au_proc32_t {
	auid: number;
	euid: number;
	egid: number;
	ruid: number;
	rgid: number;
	pid: number;
	sid: number;
	tid: au_tid32_t;
}
declare var au_proc32_t: au_proc32_t;

interface au_proc32ex_t {
	auid: number;
	euid: number;
	egid: number;
	ruid: number;
	rgid: number;
	pid: number;
	sid: number;
	tid: au_tidaddr32_t;
}
declare var au_proc32ex_t: au_proc32ex_t;

interface au_proc64_t {
	auid: number;
	euid: number;
	egid: number;
	ruid: number;
	rgid: number;
	pid: number;
	sid: number;
	tid: au_tid64_t;
}
declare var au_proc64_t: au_proc64_t;

interface au_proc64ex_t {
	auid: number;
	euid: number;
	egid: number;
	ruid: number;
	rgid: number;
	pid: number;
	sid: number;
	tid: au_tidaddr64_t;
}
declare var au_proc64ex_t: au_proc64ex_t;

interface au_qctrl {
	aq_hiwater: number;
	aq_lowater: number;
	aq_bufsz: number;
	aq_delay: number;
	aq_minfree: number;
}
declare var au_qctrl: au_qctrl;

declare function au_read_rec(fp: FILE, buf: string): number;

interface au_ret32_t {
	status: number;
	ret: number;
}
declare var au_ret32_t: au_ret32_t;

interface au_ret64_t {
	err: number;
	val: number;
}
declare var au_ret64_t: au_ret64_t;

interface au_seq_t {
	seqno: number;
}
declare var au_seq_t: au_seq_t;

interface au_session {
	as_aia_p: auditinfo_addr;
	as_mask: au_mask;
}
declare var au_session: au_session;

declare function au_sflagstostr(flags: number, maxsize: number, buf: string | any): number;

interface au_socket_ex32_t {
	domain: number;
	type: number;
	atype: number;
	l_port: number;
	l_addr: number;
	r_port: number;
	r_addr: number;
}
declare var au_socket_ex32_t: au_socket_ex32_t;

interface au_socket_t {
	type: number;
	l_port: number;
	l_addr: number;
	r_port: number;
	r_addr: number;
}
declare var au_socket_t: au_socket_t;

declare function au_socket_type_to_bsm(local_socket_type: number): number;

declare function au_socket_type_to_bsmFunction(local_socket_type: number): number;

interface au_socketinet32_t {
	family: number;
	port: number;
	addr: number;
}
declare var au_socketinet32_t: au_socketinet32_t;

interface au_socketinet_ex32_t {
	family: number;
	port: number;
	addr: number;
}
declare var au_socketinet_ex32_t: au_socketinet_ex32_t;

interface au_socketunix_t {
	family: number;
	path: number;
}
declare var au_socketunix_t: au_socketunix_t;

declare function au_strerror(bsm_error: number): string;

declare function au_strtopol(polstr: string | any, policy: number): number;

declare function au_strtosflags(sflagsstr: string | any, flags: number): number;

interface au_subject32_t {
	auid: number;
	euid: number;
	egid: number;
	ruid: number;
	rgid: number;
	pid: number;
	sid: number;
	tid: au_tid32_t;
}
declare var au_subject32_t: au_subject32_t;

interface au_subject32ex_t {
	auid: number;
	euid: number;
	egid: number;
	ruid: number;
	rgid: number;
	pid: number;
	sid: number;
	tid: au_tidaddr32_t;
}
declare var au_subject32ex_t: au_subject32ex_t;

interface au_subject64_t {
	auid: number;
	euid: number;
	egid: number;
	ruid: number;
	rgid: number;
	pid: number;
	sid: number;
	tid: au_tid64_t;
}
declare var au_subject64_t: au_subject64_t;

interface au_subject64ex_t {
	auid: number;
	euid: number;
	egid: number;
	ruid: number;
	rgid: number;
	pid: number;
	sid: number;
	tid: au_tidaddr64_t;
}
declare var au_subject64ex_t: au_subject64ex_t;

interface au_text_t {
	len: number;
	text: string;
}
declare var au_text_t: au_text_t;

interface au_tid {
	port: number;
	machine: number;
}
declare var au_tid: au_tid;

interface au_tid32_t {
	port: number;
	addr: number;
}
declare var au_tid32_t: au_tid32_t;

interface au_tid64_t {
	port: number;
	addr: number;
}
declare var au_tid64_t: au_tid64_t;

interface au_tid_addr {
	at_port: number;
	at_type: number;
	at_addr: number;
}
declare var au_tid_addr: au_tid_addr;

interface au_tidaddr32_t {
	port: number;
	type: number;
	addr: number;
}
declare var au_tidaddr32_t: au_tidaddr32_t;

interface au_tidaddr64_t {
	port: number;
	type: number;
	addr: number;
}
declare var au_tidaddr64_t: au_tidaddr64_t;

declare function au_to_arg(n: number, text: string | any, v: number): any;

declare function au_to_arg32(n: number, text: string | any, v: number): any;

declare function au_to_arg64(n: number, text: string | any, v: number): any;

declare function au_to_certificate_hash(hash: string): any;

declare function au_to_data(unit_print: number, unit_type: number, unit_count: number, p: string | any): any;

declare function au_to_exec_args(argv: string): any;

declare function au_to_exec_env(envp: string): any;

declare function au_to_exit(retval: number, err: number): any;

declare function au_to_file(file: string | any, tm: timeval): any;

declare function au_to_groups(groups: number): any;

declare function au_to_header(rec_size: number, e_type: number, e_mod: number): any;

declare function au_to_header32(rec_size: number, e_type: number, e_mod: number): any;

declare function au_to_header32_ex(rec_size: number, e_type: number, e_mod: number): any;

declare function au_to_header32_ex_tm(rec_size: number, e_type: number, e_mod: number, tm: timeval, aia: auditinfo_addr): any;

declare function au_to_header32_tm(rec_size: number, e_type: number, e_mod: number, tm: timeval): any;

declare function au_to_header64(rec_size: number, e_type: number, e_mod: number): any;

declare function au_to_header64_tm(rec_size: number, e_type: number, e_mod: number, tm: timeval): any;

declare function au_to_header_ex(rec_size: number, e_type: number, e_mod: number): any;

declare function au_to_identity(signer_type: number, signing_id: string | any, signing_id_trunc: number, team_id: string | any, team_id_trunc: number, cdhash: string | any, cdhash_len: number): any;

declare function au_to_in_addr(internet_addr: in_addr): any;

declare function au_to_ip(ip: any): any;

declare function au_to_ipc(type: number, id: number): any;

declare function au_to_ipc_perm(perm: ipc_perm): any;

declare function au_to_iport(iport: number): any;

declare function au_to_kevent(kev: keventStruct): any;

declare function au_to_krb5_principal(principal: string): any;

declare function au_to_me(): any;

declare function au_to_newgroups(n: number, groups: number): any;

declare function au_to_opaque(data: string | any, bytes: number): any;

declare function au_to_path(path: string | any): any;

declare function au_to_process(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid): any;

declare function au_to_process32(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid): any;

declare function au_to_process32_ex(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid_addr): any;

declare function au_to_process64(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid): any;

declare function au_to_process64_ex(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid_addr): any;

declare function au_to_process_ex(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid_addr): any;

declare function au_to_return(status: number, ret: number): any;

declare function au_to_return32(status: number, ret: number): any;

declare function au_to_return64(status: number, ret: number): any;

declare function au_to_seq(audit_count: number): any;

declare function au_to_sock_inet(so: sockaddr_in): any;

declare function au_to_sock_inet32(so: sockaddr_in): any;

declare function au_to_sock_unix(so: sockaddr_un): any;

declare function au_to_socket_ex(so_domain: number, so_type: number, sa_local: sockaddr, sa_remote: sockaddr): any;

declare function au_to_subject(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid): any;

declare function au_to_subject32(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid): any;

declare function au_to_subject32_ex(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid_addr): any;

declare function au_to_subject64(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid): any;

declare function au_to_subject64_ex(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid_addr): any;

declare function au_to_subject_ex(auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid_addr): any;

declare function au_to_text(text: string | any): any;

declare function au_to_trailer(rec_size: number): any;

declare function au_to_zonename(zonename: string | any): any;

interface au_trailer_t {
	magic: number;
	count: number;
}
declare var au_trailer_t: au_trailer_t;

interface au_user_ent {
	au_name: string;
	au_always: au_mask;
	au_never: au_mask;
}
declare var au_user_ent: au_user_ent;

declare function au_user_mask(username: string | any, mask_p: au_mask): number;

declare function au_write(d: number, m: any): number;

interface au_zonename_t {
	len: number;
	zonename: string;
}
declare var au_zonename_t: au_zonename_t;

declare function audit(p1: any, p2: number): number;

interface audit_fstat {
	af_filesz: number;
	af_currsz: number;
}
declare var audit_fstat: audit_fstat;

declare function audit_get_car(path: string | any, sz: number): number;

declare function audit_get_class(evc_map: au_evclass_map, sz: number): number;

declare function audit_get_cond(cond: number): number;

declare function audit_get_ctlmode(mode: string | any, sz: number): number;

declare function audit_get_cwd(path: string | any, sz: number): number;

declare function audit_get_expire_after(expire: au_expire_after, sz: number): number;

declare function audit_get_fsize(fstat: audit_fstat, sz: number): number;

declare function audit_get_kaudit(aia: auditinfo_addr, sz: number): number;

declare function audit_get_kmask(kmask: au_mask, sz: number): number;

declare function audit_get_pinfo(api: auditpinfo, sz: number): number;

declare function audit_get_pinfo_addr(apia: auditpinfo_addr, sz: number): number;

declare function audit_get_policy(policy: number): number;

declare function audit_get_qctrl(qctrl: au_qctrl, sz: number): number;

declare function audit_get_sflags(flags: number): number;

declare function audit_get_sflags_mask(which: string | any, mask: number): number;

declare function audit_get_sinfo_addr(aia: auditinfo_addr, sz: number): number;

declare function audit_get_stat(stats: audit_stat, sz: number): number;

declare function audit_send_trigger(trigger: number): number;

declare function audit_session_join(port: number): number;

declare function audit_session_port(asid: number, portname: number): number;

declare function audit_session_self(): number;

declare function audit_set_class(evc_map: au_evclass_map, sz: number): number;

declare function audit_set_cond(cond: number): number;

declare function audit_set_fsize(fstat: audit_fstat, sz: number): number;

declare function audit_set_kaudit(aia: auditinfo_addr, sz: number): number;

declare function audit_set_kmask(kmask: au_mask, sz: number): number;

declare function audit_set_pmask(api: auditpinfo, sz: number): number;

declare function audit_set_policy(policy: number): number;

declare function audit_set_qctrl(qctrl: au_qctrl, sz: number): number;

declare function audit_set_sflags(flags: number): number;

declare function audit_set_sflags_mask(which: string | any, mask: number): number;

declare function audit_set_stat(stats: audit_stat, sz: number): number;

declare function audit_set_terminal_id(tid: au_tid): number;

declare function audit_set_terminal_id_ex(tid: au_tid_addr): number;

interface audit_stat {
	as_version: number;
	as_numevent: number;
	as_generated: number;
	as_nonattrib: number;
	as_kernel: number;
	as_audit: number;
	as_auditctl: number;
	as_enqueue: number;
	as_written: number;
	as_wblocked: number;
	as_rblocked: number;
	as_dropped: number;
	as_totalsize: number;
	as_memused: number;
}
declare var audit_stat: audit_stat;

interface audit_token_t {
	val: number;
}
declare var audit_token_t: audit_token_t;

declare function audit_token_to_asid(atoken: audit_token_t): number;

declare function audit_token_to_au32(atoken: audit_token_t, auidp: number, euidp: number, egidp: number, ruidp: number, rgidp: number, pidp: number, asidp: number, tidp: au_tid): void;

declare function audit_token_to_auid(atoken: audit_token_t): number;

declare function audit_token_to_egid(atoken: audit_token_t): number;

declare function audit_token_to_euid(atoken: audit_token_t): number;

declare function audit_token_to_pid(atoken: audit_token_t): number;

declare function audit_token_to_pidversion(atoken: audit_token_t): number;

declare function audit_token_to_rgid(atoken: audit_token_t): number;

declare function audit_token_to_ruid(atoken: audit_token_t): number;

declare function audit_write(event_code: number, subject: any, misctok: any, retval: number, errcode: number): number;

declare function audit_write_failure(event_code: number, errmsg: string | any, errret: number, auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid): number;

declare function audit_write_failure_ex(event_code: number, errmsg: string | any, errret: number, auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid_addr): number;

declare function audit_write_failure_na(event_code: number, errmsg: string | any, errret: number, euid: number, egid: number, pid: number, tid: au_tid): number;

declare function audit_write_failure_na_ex(event_code: number, errmsg: string | any, errret: number, euid: number, egid: number, pid: number, tid: au_tid_addr): number;

declare function audit_write_failure_self(event_code: number, errmsg: string | any, errret: number): number;

declare function audit_write_success(event_code: number, misctok: any, auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid): number;

declare function audit_write_success_ex(event_code: number, misctok: any, auid: number, euid: number, egid: number, ruid: number, rgid: number, pid: number, sid: number, tid: au_tid_addr): number;

declare function audit_write_success_self(event_code: number, misctok: any): number;

declare function auditctl(p1: string | any): number;

interface auditinfo {
	ai_auid: number;
	ai_mask: au_mask;
	ai_termid: au_tid;
	ai_asid: number;
}
declare var auditinfo: auditinfo;

interface auditinfo_addr {
	ai_auid: number;
	ai_mask: au_mask;
	ai_termid: au_tid_addr;
	ai_asid: number;
	ai_flags: number;
}
declare var auditinfo_addr: auditinfo_addr;

declare function auditon(p1: number, p2: any, p3: number): number;

interface auditpinfo {
	ap_pid: number;
	ap_auid: number;
	ap_mask: au_mask;
	ap_termid: au_tid;
	ap_asid: number;
}
declare var auditpinfo: auditpinfo;

interface auditpinfo_addr {
	ap_pid: number;
	ap_auid: number;
	ap_mask: au_mask;
	ap_termid: au_tid_addr;
	ap_asid: number;
	ap_flags: number;
}
declare var auditpinfo_addr: auditpinfo_addr;

declare var averunnable: loadavg;

declare function basename(p1: string | any): string;

declare function basename_r(p1: string | any, p2: string | any): string;

declare function baudrate(): number;

declare function bcmp(p1: any, p2: any, p3: number): number;

declare function bcopy(p1: any, p2: any, p3: number): void;

declare function beep(): number;

declare const betaStage: number;

declare function bind(p1: number, p2: sockaddr, p3: number): number;

declare function bindresvport(p1: number, p2: sockaddr_in): number;

declare function bindresvport_sa(p1: number, p2: sockaddr): number;

declare function bkgd(p1: number): number;

declare function bkgdset(p1: number): void;

declare const bold: number;

declare var bootstrap_port: number;

declare function border(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;

declare function box(p1: _win_st, p2: number, p3: number): number;

declare function brk(p1: any): any;

declare function bsd_signal(p1: number, p2: (p1: number) => void): (p1: number) => void;

declare function bsearch(__key: any, __base: any, __nel: number, __width: number, __compar: (p1: any, p2: any) => number): any;

declare function bsearch_b(__key: any, __base: any, __nel: number, __width: number, __compar: (p1: any, p2: any) => number): any;

declare function btowc(p1: number): number;

declare function btowc_l(p1: number, p2: any): number;

declare function buf_alloc(vp: any): any;

declare function buf_attr(bp: any): any;

declare function buf_bawrite(bp: any): number;

declare function buf_bdwrite(bp: any): number;

declare function buf_biodone(bp: any): void;

declare function buf_biowait(bp: any): number;

declare function buf_blkno(bp: any): number;

declare function buf_bread(vp: any, blkno: number, size: number, cred: any, bpp: any): number;

declare function buf_breadn(vp: any, blkno: number, size: number, rablks: number, rasizes: number, nrablks: number, cred: any, bpp: any): number;

declare function buf_brelse(bp: any): void;

declare function buf_bwrite(bp: any): number;

declare function buf_callback(bp: any): any;

declare function buf_clear(bp: any): void;

declare function buf_clear_redundancy_flags(bp: any, flags: number): void;

declare function buf_clearflags(bp: any, flags: number): void;

declare function buf_clone(bp: any, io_offset: number, io_size: number, iodone: (p1: any, p2: any) => void, arg: any): any;

declare function buf_count(bp: any): number;

declare function buf_create_shadow(bp: any, force_copy: number, external_storage: number, iodone: (p1: any, p2: any) => void, arg: any): any;

declare function buf_dataptr(bp: any): number;

declare function buf_device(bp: any): number;

declare function buf_dirtyend(bp: any): number;

declare function buf_dirtyoff(bp: any): number;

declare function buf_drvdata(bp: any): any;

declare function buf_error(bp: any): number;

declare function buf_flags(bp: any): number;

declare function buf_flushdirtyblks(vp: any, wait: number, flags: number, msg: string | any): void;

declare function buf_free(bp: any): void;

declare function buf_fromcache(bp: any): number;

declare function buf_fsprivate(bp: any): any;

declare function buf_fua(bp: any): number;

declare function buf_getblk(vp: any, blkno: number, size: number, slpflag: number, slptimeo: number, operation: number): any;

declare function buf_geteblk(size: number): any;

declare function buf_invalblkno(vp: any, lblkno: number, flags: number): number;

declare function buf_invalidateblks(vp: any, flags: number, slpflag: number, slptimeo: number): number;

declare function buf_iterate(vp: any, callout: (p1: any, p2: any) => number, flags: number, arg: any): void;

declare function buf_lblkno(bp: any): number;

declare function buf_map(bp: any, io_addr: string): number;

declare function buf_markaged(bp: any): void;

declare function buf_markclean(p1: any): void;

declare function buf_markdelayed(bp: any): void;

declare function buf_markeintr(bp: any): void;

declare function buf_markfua(bp: any): void;

declare function buf_markinvalid(bp: any): void;

declare function buf_markstatic(bp: any): void;

declare function buf_meta_bread(vp: any, blkno: number, size: number, cred: any, bpp: any): number;

declare function buf_meta_breadn(vp: any, blkno: number, size: number, rablks: number, rasizes: number, nrablks: number, cred: any, bpp: any): number;

declare function buf_proc(bp: any): any;

declare function buf_rcred(bp: any): any;

declare function buf_redundancy_flags(bp: any): number;

declare function buf_reset(bp: any, flags: number): void;

declare function buf_resid(bp: any): number;

declare function buf_set_redundancy_flags(bp: any, flags: number): void;

declare function buf_setblkno(bp: any, blkno: number): void;

declare function buf_setcallback(bp: any, callback: (p1: any, p2: any) => void, transaction: any): number;

declare function buf_setcount(bp: any, bcount: number): void;

declare function buf_setdataptr(bp: any, data: number): void;

declare function buf_setdevice(bp: any, vp: any): number;

declare function buf_setdirtyend(bp: any, p2: number): void;

declare function buf_setdirtyoff(bp: any, p2: number): void;

declare function buf_setdrvdata(bp: any, drvdata: any): void;

declare function buf_seterror(bp: any, p2: number): void;

declare function buf_setflags(bp: any, flags: number): void;

declare function buf_setfsprivate(bp: any, fsprivate: any): void;

declare function buf_setlblkno(bp: any, lblkno: number): void;

declare function buf_setresid(bp: any, resid: number): void;

declare function buf_setsize(bp: any, p2: number): void;

declare function buf_setupl(bp: any, upl: number, offset: number): number;

declare function buf_setvnode(bp: any, vp: any): void;

declare function buf_shadow(bp: any): number;

declare function buf_size(bp: any): number;

declare function buf_static(bp: any): number;

declare function buf_strategy(devvp: any, ap: any): number;

declare function buf_unmap(bp: any): number;

declare function buf_upl(bp: any): any;

declare function buf_uploffset(bp: any): number;

declare function buf_valid(bp: any): number;

declare function buf_vnode(bp: any): any;

declare function buf_wcred(bp: any): any;

declare function bufattr_ioscheduled(bap: any): number;

declare function bufattr_markioscheduled(bap: any): void;

declare function bzero(p1: any, p2: number): void;

declare function calloc(__count: number, __size: number): any;

declare function can_change_color(): boolean;

declare function cannot_audit(p1: number): number;

declare function catclose(p1: __nl_cat_d): number;

declare function catgets(p1: __nl_cat_d, p2: number, p3: number, p4: string | any): string;

declare function catopen(p1: string | any, p2: number): __nl_cat_d;

declare function cbreak(): number;

declare function cbrt(p1: number): number;

declare function cbrtf(p1: number): number;

declare function cbrtl(p1: number): number;

declare function ceil(p1: number): number;

declare function ceilf(p1: number): number;

declare function ceill(p1: number): number;

declare function cfgetispeed(p1: termios): number;

declare function cfgetospeed(p1: termios): number;

declare function cfmakeraw(p1: termios): void;

declare function cfsetispeed(p1: termios, p2: number): number;

declare function cfsetospeed(p1: termios, p2: number): number;

declare function cfsetspeed(p1: termios, p2: number): number;

declare function cgetcap(p1: string | any, p2: string | any, p3: number): string;

declare function cgetclose(): number;

declare function cgetent(p1: string, p2: string, p3: string | any): number;

declare function cgetfirst(p1: string, p2: string): number;

declare function cgetmatch(p1: string | any, p2: string | any): number;

declare function cgetnext(p1: string, p2: string): number;

declare function cgetnum(p1: string | any, p2: string | any, p3: number): number;

declare function cgetset(p1: string | any): number;

declare function cgetstr(p1: string | any, p2: string | any, p3: string): number;

declare function cgetustr(p1: string | any, p2: string | any, p3: string): number;

declare function chdir(p1: string | any): number;

declare function chflags(p1: string | any, p2: number): number;

declare function chgat(p1: number, p2: number, p3: number, p4: any): number;

declare function chmod(p1: string | any, p2: number): number;

declare function chmodx_np(p1: string | any, p2: any): number;

declare function chown(p1: string | any, p2: number, p3: number): number;

declare function chroot(p1: string | any): number;

declare function clear(): number;

declare function clearerr(p1: FILE): void;

declare function clearok(p1: _win_st, p2: boolean): number;

declare function clock(): number;

declare function clock_alarm(clock_serv: number, alarm_type: number, alarm_time: mach_timespec, alarm_port: number): number;

declare function clock_alarm_reply(alarm_port: number, alarm_portPoly: number, alarm_code: number, alarm_type: number, alarm_time: mach_timespec): number;

declare function clock_get_attributes(clock_serv: number, flavor: number, clock_attr: number, clock_attrCnt: number): number;

declare function clock_get_res(p1: number, p2: number): number;

declare function clock_get_time(clock_serv: number, cur_time: mach_timespec): number;

declare function clock_getres(__clock_id: clockid_t, __res: timespec): number;

declare function clock_gettime(__clock_id: clockid_t, __tp: timespec): number;

declare function clock_gettime_nsec_np(__clock_id: clockid_t): number;

declare function clock_set_attributes(clock_ctrl: number, flavor: number, clock_attr: number, clock_attrCnt: number): number;

declare function clock_set_res(p1: number, p2: number): number;

declare function clock_set_time(clock_ctrl: number, new_time: mach_timespec): number;

declare function clock_settime(__clock_id: clockid_t, __tp: timespec): number;

declare function clock_sleep(p1: number, p2: number, p3: mach_timespec, p4: mach_timespec): number;

declare function clock_sleep_trap(clock_name: number, sleep_type: number, sleep_sec: number, sleep_nsec: number, wakeup_time: mach_timespec): number;

enum clockid_t {

	_CLOCK_REALTIME = 0,

	_CLOCK_MONOTONIC = 6,

	_CLOCK_MONOTONIC_RAW = 4,

	_CLOCK_MONOTONIC_RAW_APPROX = 5,

	_CLOCK_UPTIME_RAW = 8,

	_CLOCK_UPTIME_RAW_APPROX = 9,

	_CLOCK_PROCESS_CPUTIME_ID = 12,

	_CLOCK_THREAD_CPUTIME_ID = 16
}


interface clockinfo {
	hz: number;
	tick: number;
	tickadj: number;
	stathz: number;
	profhz: number;
}
declare var clockinfo: clockinfo;

declare function clonefile(p1: string | any, p2: string | any, p3: number): number;

declare function clonefileat(p1: number, p2: string | any, p3: number, p4: string | any, p5: number): number;

declare function close(p1: number): number;

declare function closedir(p1: DIR): number;

declare function closelog(): void;

declare function clrtobot(): number;

declare function clrtoeol(): number;

interface cmsghdr {
	cmsg_len: number;
	cmsg_level: number;
	cmsg_type: number;
}
declare var cmsghdr: cmsghdr;

declare function color_content(p1: number, p2: number, p3: number, p4: number): number;

declare function color_set(p1: number, p2: any): number;

declare const condense: number;

declare function confstr(p1: number, p2: string | any, p3: number): number;

declare function connect(p1: number, p2: sockaddr, p3: number): number;

declare function connectx(p1: number, p2: sa_endpoints_t, p3: number, p4: number, p5: iovec, p6: number, p7: number, p8: number): number;

declare function copyfile(from: string | any, to: string | any, state: any, flags: number): number;

declare function copyfile_state_alloc(): any;

declare function copyfile_state_free(p1: any): number;

declare function copyfile_state_get(s: any, flag: number, dst: any): number;

declare function copyfile_state_set(s: any, flag: number, src: any): number;

declare function copysign(p1: number, p2: number): number;

declare function copysignf(p1: number, p2: number): number;

declare function copysignl(p1: number, p2: number): number;

declare function copywin(p1: _win_st, p2: _win_st, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): number;

declare function cos(p1: number): number;

declare function cosf(p1: number): number;

declare function cosh(p1: number): number;

declare function coshf(p1: number): number;

declare function coshl(p1: number): number;

declare function cosl(p1: number): number;

declare function creat(p1: string | any, p2: number): number;

declare function crypt(p1: string | any, p2: string | any): string;

declare function ctermid(p1: string | any): string;

declare function ctermid_r(p1: string | any): string;

declare function ctime(p1: number): string;

declare function ctime_r(p1: number, p2: string | any): string;

interface ctl_event_data {
	ctl_id: number;
	ctl_unit: number;
}
declare var ctl_event_data: ctl_event_data;

interface ctl_info {
	ctl_id: number;
	ctl_name: number;
}
declare var ctl_info: ctl_info;

interface ctlname {
	ctl_name: string;
	ctl_type: number;
}
declare var ctlname: ctlname;

declare function curs_set(p1: number): number;

declare var curscr: _win_st;

declare function curses_version(): string;

interface datum {
	dptr: any;
	dsize: number;
}
declare var datum: datum;

declare var daylight: number;

declare function dbm_clearerr(p1: DBM): number;

declare function dbm_close(p1: DBM): void;

declare function dbm_delete(p1: DBM, p2: datum): number;

declare function dbm_dirfno(p1: DBM): number;

declare function dbm_error(p1: DBM): number;

declare function dbm_fetch(p1: DBM, p2: datum): datum;

declare function dbm_firstkey(p1: DBM): datum;

declare function dbm_forder(p1: DBM, p2: datum): number;

declare function dbm_nextkey(p1: DBM): datum;

declare function dbm_open(p1: string | any, p2: number, p3: number): DBM;

declare function dbm_store(p1: DBM, p2: datum, p3: datum, p4: number): number;

declare function debug_control_port_for_pid(target_tport: number, pid: number, t: number): number;

declare function def_prog_mode(): number;

declare function def_shell_mode(): number;

declare function define_key(p1: string | any, p2: number): number;

declare function delay_output(p1: number): number;

declare function delch(): number;

declare function deleteln(): number;

declare function delscreen(p1: any): void;

declare function delwin(p1: _win_st): number;

declare function derwin(p1: _win_st, p2: number, p3: number, p4: number, p5: number): _win_st;

declare const developStage: number;

declare function devname(p1: number, p2: number): string;

declare function devname_r(p1: number, p2: number, buf: string | any, len: number): string;

declare function difftime(p1: number, p2: number): number;

interface dirent {
	d_ino: number;
	d_seekoff: number;
	d_reclen: number;
	d_namlen: number;
	d_type: number;
	d_name: number;
}
declare var dirent: dirent;

declare function dirfd(dirp: DIR): number;

declare function dirname(p1: string | any): string;

declare function dirname_r(p1: string | any, p2: string | any): string;

declare function disconnectx(p1: number, p2: number, p3: number): number;

interface diskextent {
	startblock: number;
	blockcount: number;
}
declare var diskextent: diskextent;

declare function div(p1: number, p2: number): div_t;

interface div_t {
	quot: number;
	rem: number;
}
declare var div_t: div_t;

interface dk_corestorage_info_t {
	flags: number;
	hotfile_size: number;
	hibernate_minsize: number;
	swapfile_pinning: number;
	padding: number;
}
declare var dk_corestorage_info_t: dk_corestorage_info_t;

interface dk_error_description_t {
	options: number;
	reserved: number;
	description_size: number;
	description: string;
}
declare var dk_error_description_t: dk_error_description_t;

interface dk_extent_t {
	offset: number;
	length: number;
}
declare var dk_extent_t: dk_extent_t;

interface dk_firmware_path_t {
	path: number;
}
declare var dk_firmware_path_t: dk_firmware_path_t;

interface dk_format_capacities_t {
	capacities: dk_format_capacity_t;
	capacitiesCount: number;
	reserved0096: number;
}
declare var dk_format_capacities_t: dk_format_capacities_t;

interface dk_format_capacity_t {
	blockCount: number;
	blockSize: number;
	reserved0096: number;
}
declare var dk_format_capacity_t: dk_format_capacity_t;

interface dk_provision_extent_t {
	offset: number;
	length: number;
	provisionType: number;
	reserved: number;
}
declare var dk_provision_extent_t: dk_provision_extent_t;

interface dk_provision_status_t {
	offset: number;
	length: number;
	options: number;
	reserved: number;
	extentsCount: number;
	extents: dk_provision_extent_t;
}
declare var dk_provision_status_t: dk_provision_status_t;

interface dk_synchronize_t {
	offset: number;
	length: number;
	options: number;
	reserved0160: number;
}
declare var dk_synchronize_t: dk_synchronize_t;

interface dk_unmap_t {
	extents: dk_extent_t;
	extentsCount: number;
	options: number;
}
declare var dk_unmap_t: dk_unmap_t;

declare function dladdr(p1: any, p2: Dl_info): number;

declare function dlclose(__handle: any): number;

declare function dlerror(): string;

declare function dlopen(__path: string | any, __mode: number): any;

declare function dlopen_preflight(__path: string | any): boolean;

declare function dlsym(__handle: any, __symbol: string | any): any;

declare function doupdate(): number;

interface dqblk {
	dqb_bhardlimit: number;
	dqb_bsoftlimit: number;
	dqb_curbytes: number;
	dqb_ihardlimit: number;
	dqb_isoftlimit: number;
	dqb_curinodes: number;
	dqb_btime: number;
	dqb_itime: number;
	dqb_id: number;
	dqb_spare: number;
}
declare var dqblk: dqblk;

interface dqfilehdr {
	dqh_magic: number;
	dqh_version: number;
	dqh_maxentries: number;
	dqh_entrycnt: number;
	dqh_flags: number;
	dqh_chktime: number;
	dqh_btime: number;
	dqh_itime: number;
	dqh_string: number;
	dqh_spare: number;
}
declare var dqfilehdr: dqfilehdr;

declare function dqhashshift(p1: number): number;

declare function drand48(): number;

declare function dup(p1: number): number;

declare function dup2(p1: number, p2: number): number;

declare function dupwin(p1: _win_st): _win_st;

declare const eNoteExitReparentedDeprecated: number;

declare const eNoteReapDeprecated: number;

declare function echo(): number;

declare function echochar(p1: number): number;

declare function ecvt(p1: number, p2: number, p3: number, p4: number): string;

declare function encrypt(p1: string | any, p2: number): void;

declare function endac(): void;

declare function endauclass(): void;

declare function endauevent(): void;

declare function endauuser(): void;

declare function endgrent(): void;

declare function endhostent(): void;

declare function endnetent(): void;

declare function endnetgrent(): void;

declare function endprotoent(): void;

declare function endpwent(): void;

declare function endrpcent(): void;

declare function endservent(): void;

declare function endusershell(): void;

declare function endutxent(): void;

declare function endutxent_wtmp(): void;

declare function endwin(): number;

interface eproc {
	e_paddr: any;
	e_sess: any;
	e_pcred: _pcred;
	e_ucred: _ucred;
	e_vm: vmspace;
	e_ppid: number;
	e_pgid: number;
	e_jobc: number;
	e_tdev: number;
	e_tpgid: number;
	e_tsess: any;
	e_wmesg: number;
	e_xsize: number;
	e_xrssize: number;
	e_xccount: number;
	e_xswrss: number;
	e_flag: number;
	e_login: number;
	e_spare: number;
}
declare var eproc: eproc;

declare function erand48(p1: number): number;

declare function erase(): number;

declare function erasechar(): number;

declare function erf(p1: number): number;

declare function erfc(p1: number): number;

declare function erfcf(p1: number): number;

declare function erfcl(p1: number): number;

declare function erff(p1: number): number;

declare function erfl(p1: number): number;

declare function err_set_exit(p1: (p1: number) => void): void;

declare function err_set_exit_b(p1: (p1: number) => void): void;

declare function err_set_file(p1: any): void;

declare function etap_trace_thread(target_act: number, trace_status: number): number;

interface eventreq {
	er_type: number;
	er_handle: number;
	er_data: any;
	er_rcnt: number;
	er_wcnt: number;
	er_ecnt: number;
	er_eventbits: number;
}
declare var eventreq: eventreq;

interface exception {
	type: number;
	name: string;
	arg1: number;
	arg2: number;
	retval: number;
}
declare var exception: exception;

declare function exception_raise(exception_port: number, thread: number, task: number, exception: number, code: number, codeCnt: number): number;

declare function exception_raise_state(exception_port: number, exception: number, code: number, codeCnt: number, flavor: number, old_state: number, old_stateCnt: number, new_state: number, new_stateCnt: number): number;

declare function exception_raise_state_identity(exception_port: number, thread: number, task: number, exception: number, code: number, codeCnt: number, flavor: number, old_state: number, old_stateCnt: number, new_state: number, new_stateCnt: number): number;

declare function exchangedata(p1: string | any, p2: string | any, p3: number): number;

declare function execv(__path: string | any, __argv: string): number;

declare function execvP(__file: string | any, __searchpath: string | any, __argv: string): number;

declare function execve(__file: string | any, __argv: string, __envp: string): number;

declare function execvp(__file: string | any, __argv: string): number;

declare function exit(p1: number): void;

declare function exp(p1: number): number;

declare function exp2(p1: number): number;

declare function exp2f(p1: number): number;

declare function exp2l(p1: number): number;

declare function expf(p1: number): number;

declare function expl(p1: number): number;

declare function expm1(p1: number): number;

declare function expm1f(p1: number): number;

declare function expm1l(p1: number): number;

declare const extend: number;

declare function fabs(p1: number): number;

declare function fabsf(p1: number): number;

declare function fabsl(p1: number): number;

declare function faccessat(p1: number, p2: string | any, p3: number, p4: number): number;

interface fbootstraptransfer_t {
	fbt_offset: number;
	fbt_length: number;
	fbt_buffer: any;
}
declare var fbootstraptransfer_t: fbootstraptransfer_t;

declare function fchdir(p1: number): number;

interface fchecklv_t {
	lv_file_start: number;
	lv_error_message_size: number;
	lv_error_message: any;
}
declare var fchecklv_t: fchecklv_t;

declare function fchflags(p1: number, p2: number): number;

declare function fchmod(p1: number, p2: number): number;

declare function fchmodat(p1: number, p2: string | any, p3: number, p4: number): number;

declare function fchmodx_np(p1: number, p2: any): number;

declare function fchown(p1: number, p2: number, p3: number): number;

declare function fchownat(p1: number, p2: string | any, p3: number, p4: number, p5: number): number;

declare function fclonefileat(p1: number, p2: number, p3: string | any, p4: number): number;

declare function fclose(p1: FILE): number;

interface fcodeblobs_t {
	f_cd_hash: any;
	f_hash_size: number;
	f_cd_buffer: any;
	f_cd_size: number;
	f_out_size: number;
	f_arch: number;
	__padding: number;
}
declare var fcodeblobs_t: fcodeblobs_t;

declare function fcopyfile(from_fd: number, to_fd: number, p3: any, flags: number): number;

declare function fcvt(p1: number, p2: number, p3: number, p4: number): string;

interface fd_set {
	fds_bits: number;
}
declare var fd_set: fd_set;

declare function fdim(p1: number, p2: number): number;

declare function fdimf(p1: number, p2: number): number;

declare function fdiml(p1: number, p2: number): number;

declare function fdopen(p1: number, p2: string | any): FILE;

declare function fdopendir(p1: number): DIR;

declare function feclearexcept(p1: number): number;

declare function fegetenv(p1: fenv_t): number;

declare function fegetexceptflag(p1: number, p2: number): number;

declare function fegetround(): number;

declare function feholdexcept(p1: fenv_t): number;

interface fenv_t {
	__control: number;
	__status: number;
	__mxcsr: number;
	__reserved: number;
}
declare var fenv_t: fenv_t;

declare function feof(p1: FILE): number;

declare function feraiseexcept(p1: number): number;

declare function ferror(p1: FILE): number;

declare function fesetenv(p1: fenv_t): number;

declare function fesetexceptflag(p1: number, p2: number): number;

declare function fesetround(p1: number): number;

declare function fetestexcept(p1: number): number;

declare function feupdateenv(p1: fenv_t): number;

declare function fflagstostr(p1: number): string;

declare function fflush(p1: FILE): number;

declare function ffs(p1: number): number;

declare function ffsctl(p1: number, p2: number, p3: any, p4: number): number;

declare function ffsl(p1: number): number;

declare function ffsll(p1: number): number;

declare function fgetattrlist(p1: number, p2: any, p3: any, p4: number, p5: number): number;

declare function fgetc(p1: FILE): number;

declare function fgetln(p1: FILE, p2: number): string;

declare function fgetpos(p1: FILE, p2: number): number;

declare function fgets(p1: string | any, p2: number, p3: FILE): string;

declare function fgetwc(p1: FILE): number;

declare function fgetwc_l(p1: FILE, p2: any): number;

declare function fgetwln(p1: FILE, p2: number): number;

declare function fgetwln_l(p1: FILE, p2: number, p3: any): number;

declare function fgetws(p1: number, p2: number, p3: FILE): number;

declare function fgetws_l(p1: number, p2: number, p3: FILE, p4: any): number;

declare function fgetxattr(fd: number, name: string | any, value: any, size: number, position: number, options: number): number;

interface fhandle {
	fh_len: number;
	fh_data: number;
}
declare var fhandle: fhandle;

declare function fhopen(p1: fhandle, p2: number): number;

declare function fileno(p1: FILE): number;

declare function filesec_dup(p1: any): any;

declare function filesec_free(p1: any): void;

declare function filesec_get_property(p1: any, p2: filesec_property_t, p3: any): number;

declare function filesec_init(): any;

enum filesec_property_t {

	FILESEC_OWNER = 1,

	FILESEC_GROUP = 2,

	FILESEC_UUID = 3,

	FILESEC_MODE = 4,

	FILESEC_ACL = 5,

	FILESEC_GRPUUID = 6,

	FILESEC_ACL_RAW = 100,

	FILESEC_ACL_ALLOCSIZE = 101
}


declare function filesec_query_property(p1: any, p2: filesec_property_t, p3: number): number;

declare function filesec_set_property(p1: any, p2: filesec_property_t, p3: any): number;

declare function filesec_unset_property(p1: any, p2: filesec_property_t): number;

declare function filter(): void;

declare const finalStage: number;

declare function flash(): number;

declare function flistxattr(fd: number, namebuff: string | any, size: number, options: number): number;

declare function flock(p1: number, p2: number): number;

interface flockStruct {
	l_start: number;
	l_len: number;
	l_pid: number;
	l_type: number;
	l_whence: number;
}
declare var flockStruct: flockStruct;

declare function flockfile(p1: FILE): void;

interface flocktimeout {
	fl: flockStruct;
	timeout: timespec;
}
declare var flocktimeout: flocktimeout;

declare function floor(p1: number): number;

declare function floorf(p1: number): number;

declare function floorl(p1: number): number;

declare function fls(p1: number): number;

declare function flsl(p1: number): number;

declare function flsll(p1: number): number;

declare function flushinp(): number;

declare function fma(p1: number, p2: number, p3: number): number;

declare function fmaf(p1: number, p2: number, p3: number): number;

declare function fmal(p1: number, p2: number, p3: number): number;

declare function fmax(p1: number, p2: number): number;

declare function fmaxf(p1: number, p2: number): number;

declare function fmaxl(p1: number, p2: number): number;

declare function fmemopen(__buf: any, __size: number, __mode: string | any): FILE;

declare function fmin(p1: number, p2: number): number;

declare function fminf(p1: number, p2: number): number;

declare function fminl(p1: number, p2: number): number;

declare function fmod(p1: number, p2: number): number;

declare function fmodf(p1: number, p2: number): number;

declare function fmodl(p1: number, p2: number): number;

declare function fmount(p1: string | any, p2: number, p3: number, p4: any): number;

declare function fmtcheck(p1: string | any, p2: string | any): string;

declare function fmtmsg(p1: number, p2: string | any, p3: number, p4: string | any, p5: string | any, p6: string | any): number;

declare function fnmatch(p1: string | any, p2: string | any, p3: number): number;

declare function fopen(__filename: string | any, __mode: string | any): FILE;

declare function fork(): number;

declare function forkpty(p1: number, p2: string | any, p3: termios, p4: winsize): number;

declare function fparseln(p1: FILE, p2: number, p3: number, p4: number, p5: number): string;

declare function fpathconf(p1: number, p2: number): number;

interface fpunchhole_t {
	fp_flags: number;
	reserved: number;
	fp_offset: number;
	fp_length: number;
}
declare var fpunchhole_t: fpunchhole_t;

declare function fpurge(p1: FILE): number;

declare function fputc(p1: number, p2: FILE): number;

declare function fputs(p1: string | any, p2: FILE): number;

declare function fputwc(p1: number, p2: FILE): number;

declare function fputwc_l(p1: number, p2: FILE, p3: any): number;

declare function fputws(p1: number, p2: FILE): number;

declare function fputws_l(p1: number, p2: FILE, p3: any): number;

declare function fread(__ptr: any, __size: number, __nitems: number, __stream: FILE): number;

declare function free(p1: any): void;

declare function freeaddrinfo(p1: addrinfo): void;

declare function freehostent(p1: hostent): void;

declare function freeifaddrs(p1: ifaddrs): void;

declare function freeifmaddrs(p1: ifmaddrs): void;

declare function fremovexattr(fd: number, name: string | any, options: number): number;

declare function freopen(p1: string | any, p2: string | any, p3: FILE): FILE;

declare function frexp(p1: number, p2: number): number;

declare function frexpf(p1: number, p2: number): number;

declare function frexpl(p1: number, p2: number): number;

declare function fsctl(p1: string | any, p2: number, p3: any, p4: number): number;

declare function fseek(p1: FILE, p2: number, p3: number): number;

declare function fseeko(__stream: FILE, __offset: number, __whence: number): number;

declare function fsetattrlist(p1: number, p2: any, p3: any, p4: number, p5: number): number;

declare function fsetpos(p1: FILE, p2: number): number;

declare function fsetxattr(fd: number, name: string | any, value: any, size: number, position: number, options: number): number;

interface fsid_t {
	val: number;
}
declare var fsid_t: fsid_t;

interface fsignatures_t {
	fs_file_start: number;
	fs_blob_start: any;
	fs_blob_size: number;
}
declare var fsignatures_t: fsignatures_t;

interface fsobj_id_t {
	fid_objno: number;
	fid_generation: number;
}
declare var fsobj_id_t: fsobj_id_t;

interface fspecread_t {
	fsr_flags: number;
	reserved: number;
	fsr_offset: number;
	fsr_length: number;
}
declare var fspecread_t: fspecread_t;

interface fssearchblock {
	returnattrs: attrlist;
	returnbuffer: any;
	returnbuffersize: number;
	maxmatches: number;
	timelimit: timeval;
	searchparams1: any;
	sizeofsearchparams1: number;
	searchparams2: any;
	sizeofsearchparams2: number;
	searchattrs: attrlist;
}
declare var fssearchblock: fssearchblock;

declare function fstat(p1: number, p2: statStruct): number;

declare function fstatat(p1: number, p2: string | any, p3: statStruct, p4: number): number;

declare function fstatfs(p1: number, p2: statfsStruct): number;

declare function fstatvfs(p1: number, p2: statvfsStruct): number;

declare function fstatx_np(p1: number, p2: statStruct, p3: any): number;

interface fstore_t {
	fst_flags: number;
	fst_posmode: number;
	fst_offset: number;
	fst_length: number;
	fst_bytesalloc: number;
}
declare var fstore_t: fstore_t;

declare function fsync(p1: number): number;

declare function fsync_volume_np(p1: number, p2: number): number;

declare function ftell(p1: FILE): number;

declare function ftello(__stream: FILE): number;

declare function ftime(p1: timeb): number;

declare function ftok(p1: string | any, p2: number): number;

interface ftrimactivefile_t {
	fta_offset: number;
	fta_length: number;
}
declare var ftrimactivefile_t: ftrimactivefile_t;

declare function ftruncate(p1: number, p2: number): number;

declare function ftrylockfile(p1: FILE): number;

declare function ftw(p1: string | any, p2: (p1: string, p2: statStruct, p3: number) => number, p3: number): number;

declare function funlockfile(p1: FILE): void;

declare function funopen(p1: any, p2: (p1: any, p2: string, p3: number) => number, p3: (p1: any, p2: string, p3: number) => number, p4: (p1: any, p2: number, p3: number) => number, p5: (p1: any) => number): FILE;

declare function futimens(__fd: number, __times: timespec): number;

declare function futimes(p1: number, p2: timeval): number;

declare function fwide(p1: FILE, p2: number): number;

declare function fwrite(__ptr: any, __size: number, __nitems: number, __stream: FILE): number;

declare function gai_strerror(p1: number): string;

declare function gcvt(p1: number, p2: number, p3: string | any): string;

declare function getacdir(name: string | any, len: number): number;

declare function getacexpire(andflg: number, age: number, size: number): number;

declare function getacfilesz(size_val: number): number;

declare function getacflg(auditstr: string | any, len: number): number;

declare function getachost(auditstr: string | any, len: number): number;

declare function getacmin(min_val: number): number;

declare function getacna(auditstr: string | any, len: number): number;

declare function getacpol(auditstr: string | any, len: number): number;

declare function getacsflagsmask(which: string | any, auditstr: string | any, len: number): number;

declare function getaddrinfo(p1: string | any, p2: string | any, p3: addrinfo, p4: addrinfo): number;

declare function getattrlist(p1: string | any, p2: any, p3: any, p4: number, p5: number): number;

declare function getattrlistat(p1: number, p2: string | any, p3: any, p4: any, p5: number, p6: number): number;

declare function getattrlistbulk(p1: number, p2: any, p3: any, p4: number, p5: number): number;

declare function getattrs(p1: _win_st): number;

declare function getauclassent(): au_class_ent;

declare function getauclassent_r(class_int: au_class_ent): au_class_ent;

declare function getauclassnam(name: string | any): au_class_ent;

declare function getauclassnam_r(class_int: au_class_ent, name: string | any): au_class_ent;

declare function getauclassnum(class_number: number): au_class_ent;

declare function getauclassnum_r(class_int: au_class_ent, class_number: number): au_class_ent;

declare function getaudit_addr(p1: auditinfo_addr, p2: number): number;

declare function getauditflagsbin(auditstr: string | any, masks: au_mask): number;

declare function getauditflagschar(auditstr: string | any, masks: au_mask, verbose: number): number;

declare function getauevent(): au_event_ent;

declare function getauevent_r(e: au_event_ent): au_event_ent;

declare function getauevnam(name: string | any): au_event_ent;

declare function getauevnam_r(e: au_event_ent, name: string | any): au_event_ent;

declare function getauevnonam(event_name: string | any): number;

declare function getauevnonam_r(ev: number, event_name: string | any): number;

declare function getauevnum(event_number: number): au_event_ent;

declare function getauevnum_r(e: au_event_ent, event_number: number): au_event_ent;

declare function getauid(p1: number): number;

declare function getauuserent(): au_user_ent;

declare function getauuserent_r(u: au_user_ent): au_user_ent;

declare function getauusernam(name: string | any): au_user_ent;

declare function getauusernam_r(u: au_user_ent, name: string | any): au_user_ent;

declare function getbegx(p1: _win_st): number;

declare function getbegy(p1: _win_st): number;

declare function getbkgd(p1: _win_st): number;

declare function getbsize(p1: number, p2: number): string;

declare function getc(p1: FILE): number;

declare function getc_unlocked(p1: FILE): number;

declare function getch(): number;

declare function getchar(): number;

declare function getchar_unlocked(): number;

declare function getcurx(p1: _win_st): number;

declare function getcury(p1: _win_st): number;

declare function getcwd(p1: string | any, p2: number): string;

declare function getdate(p1: string | any): tm;

declare var getdate_err: number;

declare function getdelim(__linep: string, __linecapp: number, __delimiter: number, __stream: FILE): number;

declare function getdirentries(p1: number, p2: string | any, p3: number, p4: number): number;

declare function getdirentriesattr(p1: number, p2: any, p3: any, p4: number, p5: number, p6: number, p7: number, p8: number): number;

declare function getdomainname(p1: string | any, p2: number): number;

declare function getdtablesize(): number;

declare function getegid(): number;

declare function getenv(p1: string | any): string;

declare function geteuid(): number;

declare function getfauditflags(usremask: au_mask, usrdmask: au_mask, lastmask: au_mask): number;

declare function getfh(p1: string | any, p2: fhandle): number;

declare function getfsstat(p1: statfsStruct, p2: number, p3: number): number;

declare function getgid(): number;

declare function getgrent(): group;

declare function getgrgid(p1: number): group;

declare function getgrgid_r(p1: number, p2: group, p3: string | any, p4: number, p5: group): number;

declare function getgrnam(p1: string | any): group;

declare function getgrnam_r(p1: string | any, p2: group, p3: string | any, p4: number, p5: group): number;

declare function getgrouplist(p1: string | any, p2: number, p3: number, p4: number): number;

declare function getgroups(p1: number, p2: number): number;

declare function getgruuid(p1: number): group;

declare function getgruuid_r(p1: number, p2: group, p3: string | any, p4: number, p5: group): number;

declare function gethostbyaddr(p1: any, p2: number, p3: number): hostent;

declare function gethostbyname(p1: string | any): hostent;

declare function gethostbyname2(p1: string | any, p2: number): hostent;

declare function gethostent(): hostent;

declare function gethostid(): number;

declare function gethostname(p1: string | any, p2: number): number;

declare function getifaddrs(p1: ifaddrs): number;

declare function getifmaddrs(p1: ifmaddrs): number;

declare function getiopolicy_np(p1: number, p2: number): number;

declare function getipnodebyaddr(p1: any, p2: number, p3: number, p4: number): hostent;

declare function getipnodebyname(p1: string | any, p2: number, p3: number, p4: number): hostent;

declare function getipv4sourcefilter(p1: number, p2: in_addr, p3: in_addr, p4: number, p5: number, p6: in_addr): number;

declare function getitimer(p1: number, p2: itimerval): number;

declare function getlastlogx(p1: number, p2: lastlogx): lastlogx;

declare function getlastlogxbyname(p1: string | any, p2: lastlogx): lastlogx;

declare function getline(__linep: string, __linecapp: number, __stream: FILE): number;

declare function getloadavg(p1: number, p2: number): number;

declare function getlogin(): string;

declare function getlogin_r(p1: string | any, p2: number): number;

declare function getmaxx(p1: _win_st): number;

declare function getmaxy(p1: _win_st): number;

declare function getmntinfo(p1: statfsStruct, p2: number): number;

declare function getmntinfo_r_np(p1: statfsStruct, p2: number): number;

declare function getmode(p1: any, p2: number): number;

declare function getmouse(p1: MEVENT): number;

declare function getnameinfo(p1: sockaddr, p2: number, p3: string | any, p4: number, p5: string | any, p6: number, p7: number): number;

declare function getnetbyaddr(p1: number, p2: number): netent;

declare function getnetbyname(p1: string | any): netent;

declare function getnetent(): netent;

declare function getnetgrent(p1: string, p2: string, p3: string): number;

declare function getnstr(p1: string | any, p2: number): number;

declare function getopt(p1: number, p2: string, p3: string | any): number;

declare function getoptFunction(p1: number, p2: string, p3: string | any): number;

declare function getopt_long(p1: number, p2: string, p3: string | any, p4: option, p5: number): number;

declare function getopt_long_only(p1: number, p2: string, p3: string | any, p4: option, p5: number): number;

declare function getpagesize(): number;

declare function getparx(p1: _win_st): number;

declare function getpary(p1: _win_st): number;

declare function getpass(p1: string | any): string;

declare function getpeereid(p1: number, p2: number, p3: number): number;

declare function getpeername(p1: number, p2: sockaddr, p3: number): number;

declare function getpgid(p1: number): number;

declare function getpgrp(): number;

declare function getpid(): number;

declare function getppid(): number;

declare function getpriority(p1: number, p2: number): number;

declare function getprogname(): string;

declare function getprotobyname(p1: string | any): protoent;

declare function getprotobynumber(p1: number): protoent;

declare function getprotoent(): protoent;

declare function getpwent(): passwd;

declare function getpwnam(p1: string | any): passwd;

declare function getpwnam_r(p1: string | any, p2: passwd, p3: string | any, p4: number, p5: passwd): number;

declare function getpwuid(p1: number): passwd;

declare function getpwuid_r(p1: number, p2: passwd, p3: string | any, p4: number, p5: passwd): number;

declare function getpwuuid(p1: number): passwd;

declare function getpwuuid_r(p1: number, p2: passwd, p3: string | any, p4: number, p5: passwd): number;

declare function getrlimit(p1: number, p2: rlimit): number;

declare function getrpcbyname(name: string | any): rpcent;

declare function getrpcbynumber(number: number): rpcent;

declare function getrpcent(): rpcent;

declare function getrusage(p1: number, p2: rusage): number;

declare function gets(p1: string | any): string;

declare function getservbyname(p1: string | any, p2: string | any): servent;

declare function getservbyport(p1: number, p2: string | any): servent;

declare function getservent(): servent;

declare function getsgroups_np(p1: number, p2: number): number;

declare function getsid(p1: number): number;

declare function getsockname(p1: number, p2: sockaddr, p3: number): number;

declare function getsockopt(p1: number, p2: number, p3: number, p4: any, p5: number): number;

declare function getsourcefilter(p1: number, p2: number, p3: sockaddr, p4: number, p5: number, p6: number, p7: sockaddr_storage): number;

declare function getstr(p1: string | any): number;

declare function getsubopt(p1: string, p2: string, p3: string): number;

declare function getsuboptFunction(p1: string, p2: string, p3: string): number;

declare function gettimeofday(p1: timeval, p2: any): number;

declare function getuid(): number;

declare function getusershell(): string;

declare function getutxent(): utmpx;

declare function getutxent_wtmp(): utmpx;

declare function getutxid(p1: utmpx): utmpx;

declare function getutxline(p1: utmpx): utmpx;

declare function getvfsbyname(p1: string | any, p2: vfsconf): number;

declare function getw(p1: FILE): number;

declare function getwc(p1: FILE): number;

declare function getwc_l(p1: FILE, p2: any): number;

declare function getwchar(): number;

declare function getwchar_l(p1: any): number;

declare function getwd(p1: string | any): string;

declare function getwgroups_np(p1: number, p2: number): number;

declare function getwin(p1: FILE): _win_st;

declare function getxattr(path: string | any, name: string | any, value: any, size: number, position: number, options: number): number;

interface gmon_data_t {
	type: number;
	size: number;
}
declare var gmon_data_t: gmon_data_t;

interface gmonhdr {
	lpc: number;
	hpc: number;
	ncnt: number;
	version: number;
	profrate: number;
	spare: number;
}
declare var gmonhdr: gmonhdr;

interface gmonhdr_64 {
	lpc: number;
	hpc: number;
	ncnt: number;
	version: number;
	profrate: number;
	spare: number;
}
declare var gmonhdr_64: gmonhdr_64;

interface gmonparam {
	state: number;
	kcount: number;
	kcountsize: number;
	froms: number;
	fromssize: number;
	tos: tostruct_64;
	tossize: number;
	tolimit: number;
	lowpc: number;
	highpc: number;
	textsize: number;
	hashfraction: number;
}
declare var gmonparam: gmonparam;

declare function gmtime(p1: number): tm;

declare function gmtime_r(p1: number, p2: tm): tm;

interface gpu_energy_data {
	task_gpu_utilisation: number;
	task_gpu_stat_reserved0: number;
	task_gpu_stat_reserved1: number;
	task_gpu_stat_reserved2: number;
}
declare var gpu_energy_data: gpu_energy_data;

declare function grantpt(p1: number): number;

interface group {
	gr_name: string;
	gr_passwd: string;
	gr_gid: number;
	gr_mem: string;
}
declare var group: group;

declare function group_from_gid(p1: number, p2: number): string;

interface group_req {
	gr_interface: number;
	gr_group: sockaddr_storage;
}
declare var group_req: group_req;

interface group_source_req {
	gsr_interface: number;
	gsr_group: sockaddr_storage;
	gsr_source: sockaddr_storage;
}
declare var group_source_req: group_source_req;

declare var h_errno: number;

declare function halfdelay(p1: number): number;

declare function has_colors(): boolean;

declare function has_ic(): boolean;

declare function has_il(): boolean;

declare function has_key(p1: number): number;

interface hash_info_bucket_t {
	hib_count: number;
}
declare var hash_info_bucket_t: hash_info_bucket_t;

declare function hcreate(p1: number): number;

declare function hdestroy(): void;

declare function heapsort(__base: any, __nel: number, __width: number, __compar: (p1: any, p2: any) => number): number;

declare function heapsort_b(__base: any, __nel: number, __width: number, __compar: (p1: any, p2: any) => number): number;

declare function herror(p1: string | any): void;

interface hfs_mount_args {
	fspec: string;
	hfs_uid: number;
	hfs_gid: number;
	hfs_mask: number;
	hfs_encoding: number;
	hfs_timezone: timezoneStruct;
	flags: number;
	journal_tbuffer_size: number;
	journal_flags: number;
	journal_disable: number;
}
declare var hfs_mount_args: hfs_mount_args;

declare function hline(p1: number, p2: number): number;

interface host_basic_info {
	max_cpus: number;
	avail_cpus: number;
	memory_size: number;
	cpu_type: number;
	cpu_subtype: number;
	cpu_threadtype: number;
	physical_cpu: number;
	physical_cpu_max: number;
	logical_cpu: number;
	logical_cpu_max: number;
	max_mem: number;
}
declare var host_basic_info: host_basic_info;

interface host_can_has_debugger_info {
	can_has_debugger: number;
}
declare var host_can_has_debugger_info: host_can_has_debugger_info;

declare function host_check_multiuser_mode(host: number, multiuser_mode: number): number;

interface host_cpu_load_info {
	cpu_ticks: number;
}
declare var host_cpu_load_info: host_cpu_load_info;

declare function host_create_mach_voucher(host: number, recipes: string | any, recipesCnt: number, voucher: number): number;

declare function host_create_mach_voucher_trap(host: number, recipes: string | any, recipes_size: number, voucher: number): number;

declare function host_default_memory_manager(host_priv: number, default_manager: number, cluster_size: number): number;

declare function host_get_UNDServer(host: number, server: number): number;

declare function host_get_atm_diagnostic_flag(host: number, diagnostic_flag: number): number;

declare function host_get_boot_info(host_priv: number, boot_info: number): number;

declare function host_get_clock_control(host_priv: number, clock_id: number, clock_ctrl: number): number;

declare function host_get_clock_service(host: number, clock_id: number, clock_serv: number): number;

declare function host_get_exception_ports(host_priv: number, exception_mask: number, masks: number, masksCnt: number, old_handlers: number, old_behaviors: number, old_flavors: number): number;

declare function host_get_io_master(host: number, io_master: number): number;

declare function host_get_multiuser_config_flags(host: number, multiuser_flags: number): number;

declare function host_get_special_port(host_priv: number, node: number, which: number, port: number): number;

declare function host_info(host: number, flavor: number, host_info_out: number, host_info_outCnt: number): number;

declare function host_kernel_version(host: number, kernel_version: number): number;

interface host_load_info {
	avenrun: number;
	mach_factor: number;
}
declare var host_load_info: host_load_info;

declare function host_lockgroup_info(host: number, lockgroup_info: lockgroup_info_t, lockgroup_infoCnt: number): number;

declare function host_page_size(p1: number, p2: number): number;

interface host_preferred_user_arch {
	cpu_type: number;
	cpu_subtype: number;
}
declare var host_preferred_user_arch: host_preferred_user_arch;

interface host_priority_info {
	kernel_priority: number;
	system_priority: number;
	server_priority: number;
	user_priority: number;
	depress_priority: number;
	idle_priority: number;
	minimum_priority: number;
	maximum_priority: number;
}
declare var host_priority_info: host_priority_info;

declare function host_priv_statistics(host_priv: number, flavor: number, host_info_out: number, host_info_outCnt: number): number;

declare function host_processor_info(host: number, flavor: number, out_processor_count: number, out_processor_info: number, out_processor_infoCnt: number): number;

declare function host_processor_set_priv(host_priv: number, set_name: number, set: number): number;

declare function host_processor_sets(host_priv: number, processor_sets: number, processor_setsCnt: number): number;

declare function host_processors(host_priv: number, out_processor_list: number, out_processor_listCnt: number): number;

declare function host_reboot(host_priv: number, options: number): number;

declare function host_register_mach_voucher_attr_manager(host: number, attr_manager: number, default_value: number, new_key: number, new_attr_control: number): number;

declare function host_register_well_known_mach_voucher_attr_manager(host: number, attr_manager: number, default_value: number, key: number, new_attr_control: number): number;

declare function host_request_notification(host: number, notify_type: number, notify_port: number): number;

interface host_sched_info {
	min_timeout: number;
	min_quantum: number;
}
declare var host_sched_info: host_sched_info;

declare function host_security_create_task_token(host_security: number, parent_task: number, sec_token: security_token_t, audit_token: audit_token_t, host: number, ledgers: number, ledgersCnt: number, inherit_memory: number, child_task: number): number;

declare function host_security_set_task_token(host_security: number, target_task: number, sec_token: security_token_t, audit_token: audit_token_t, host: number): number;

declare function host_set_UNDServer(host: number, server: number): number;

declare function host_set_atm_diagnostic_flag(host: number, diagnostic_flag: number): number;

declare function host_set_exception_ports(host_priv: number, exception_mask: number, new_port: number, behavior: number, new_flavor: number): number;

declare function host_set_multiuser_config_flags(host_priv: number, multiuser_flags: number): number;

declare function host_set_special_port(host_priv: number, which: number, port: number): number;

declare function host_statistics(host_priv: number, flavor: number, host_info_out: number, host_info_outCnt: number): number;

declare function host_statistics64(host_priv: number, flavor: number, host_info64_out: number, host_info64_outCnt: number): number;

declare function host_swap_exception_ports(host_priv: number, exception_mask: number, new_port: number, behavior: number, new_flavor: number, masks: number, masksCnt: number, old_handlerss: number, old_behaviors: number, old_flavors: number): number;

declare function host_virtual_physical_table_info(host: number, info: hash_info_bucket_t, infoCnt: number): number;

interface hostent {
	h_name: string;
	h_aliases: string;
	h_addrtype: number;
	h_length: number;
	h_addr_list: string;
}
declare var hostent: hostent;

declare function hsearch(p1: ENTRY, p2: ACTION): ENTRY;

declare function hstrerror(p1: number): string;

declare function hypot(p1: number, p2: number): number;

declare function hypotf(p1: number, p2: number): number;

declare function hypotl(p1: number, p2: number): number;

declare function iconv(__cd: any, __inbuf: string, __inbytesleft: number, __outbuf: string, __outbytesleft: number): number;

declare function iconv_canonicalize(name: string | any): string;

declare function iconv_close(_cd: any): number;

interface iconv_fallbacks {
	mb_to_uc_fallback: (p1: string, p2: number, p3: (p1: number, p2: number, p3: any) => void, p4: any, p5: any) => void;
	uc_to_mb_fallback: (p1: number, p2: (p1: string, p2: number, p3: any) => void, p3: any, p4: any) => void;
	mb_to_wc_fallback: (p1: string, p2: number, p3: (p1: number, p2: number, p3: any) => void, p4: any, p5: any) => void;
	wc_to_mb_fallback: (p1: number, p2: (p1: string, p2: number, p3: any) => void, p3: any, p4: any) => void;
	data: any;
}
declare var iconv_fallbacks: iconv_fallbacks;

interface iconv_hooks {
	uc_hook: (p1: number, p2: any) => void;
	wc_hook: (p1: number, p2: any) => void;
	data: any;
}
declare var iconv_hooks: iconv_hooks;

declare function iconv_open(__tocode: string | any, __fromcode: string | any): any;

declare function iconvctl(cd: any, request: number, p3: any): number;

declare function iconvlist(do_one: (p1: number, p2: string, p3: any) => number, data: any): void;

declare function idcok(p1: _win_st, p2: boolean): void;

declare function idlok(p1: _win_st, p2: boolean): number;

enum idtype_t {

	P_ALL = 0,

	P_PID = 1,

	P_PGID = 2
}


interface if_clonereq {
	ifcr_total: number;
	ifcr_count: number;
	ifcr_buffer: string;
}
declare var if_clonereq: if_clonereq;

interface if_data {
	ifi_type: number;
	ifi_typelen: number;
	ifi_physical: number;
	ifi_addrlen: number;
	ifi_hdrlen: number;
	ifi_recvquota: number;
	ifi_xmitquota: number;
	ifi_unused1: number;
	ifi_mtu: number;
	ifi_metric: number;
	ifi_baudrate: number;
	ifi_ipackets: number;
	ifi_ierrors: number;
	ifi_opackets: number;
	ifi_oerrors: number;
	ifi_collisions: number;
	ifi_ibytes: number;
	ifi_obytes: number;
	ifi_imcasts: number;
	ifi_omcasts: number;
	ifi_iqdrops: number;
	ifi_noproto: number;
	ifi_recvtiming: number;
	ifi_xmittiming: number;
	ifi_lastchange: timeval32;
	ifi_unused2: number;
	ifi_hwassist: number;
	ifi_reserved1: number;
	ifi_reserved2: number;
}
declare var if_data: if_data;

interface if_data64 {
	ifi_type: number;
	ifi_typelen: number;
	ifi_physical: number;
	ifi_addrlen: number;
	ifi_hdrlen: number;
	ifi_recvquota: number;
	ifi_xmitquota: number;
	ifi_unused1: number;
	ifi_mtu: number;
	ifi_metric: number;
	ifi_baudrate: number;
	ifi_ipackets: number;
	ifi_ierrors: number;
	ifi_opackets: number;
	ifi_oerrors: number;
	ifi_collisions: number;
	ifi_ibytes: number;
	ifi_obytes: number;
	ifi_imcasts: number;
	ifi_omcasts: number;
	ifi_iqdrops: number;
	ifi_noproto: number;
	ifi_recvtiming: number;
	ifi_xmittiming: number;
	ifi_lastchange: timeval32;
}
declare var if_data64: if_data64;

declare function if_freenameindex(p1: if_nameindexStruct): void;

declare function if_indextoname(p1: number, p2: string | any): string;

interface if_msghdr {
	ifm_msglen: number;
	ifm_version: number;
	ifm_type: number;
	ifm_addrs: number;
	ifm_flags: number;
	ifm_index: number;
	ifm_data: if_data;
}
declare var if_msghdr: if_msghdr;

interface if_msghdr2 {
	ifm_msglen: number;
	ifm_version: number;
	ifm_type: number;
	ifm_addrs: number;
	ifm_flags: number;
	ifm_index: number;
	ifm_snd_len: number;
	ifm_snd_maxlen: number;
	ifm_snd_drops: number;
	ifm_timer: number;
	ifm_data: if_data64;
}
declare var if_msghdr2: if_msghdr2;

declare function if_nameindex(): if_nameindexStruct;

interface if_nameindexStruct {
	if_index: number;
	if_name: string;
}
declare var if_nameindexStruct: if_nameindexStruct;

declare function if_nametoindex(p1: string | any): number;

interface ifa_msghdr {
	ifam_msglen: number;
	ifam_version: number;
	ifam_type: number;
	ifam_addrs: number;
	ifam_flags: number;
	ifam_index: number;
	ifam_metric: number;
}
declare var ifa_msghdr: ifa_msghdr;

interface ifaddrs {
	ifa_next: ifaddrs;
	ifa_name: string;
	ifa_flags: number;
	ifa_addr: sockaddr;
	ifa_netmask: sockaddr;
	ifa_dstaddr: sockaddr;
	ifa_data: any;
}
declare var ifaddrs: ifaddrs;

interface ifaliasreq {
	ifra_name: number;
	ifra_addr: sockaddr;
	ifra_broadaddr: sockaddr;
	ifra_mask: sockaddr;
}
declare var ifaliasreq: ifaliasreq;

interface ifdevmtu {
	ifdm_current: number;
	ifdm_min: number;
	ifdm_max: number;
}
declare var ifdevmtu: ifdevmtu;

interface ifdrv {
	ifd_name: number;
	ifd_cmd: number;
	ifd_len: number;
	ifd_data: any;
}
declare var ifdrv: ifdrv;

interface ifma_msghdr {
	ifmam_msglen: number;
	ifmam_version: number;
	ifmam_type: number;
	ifmam_addrs: number;
	ifmam_flags: number;
	ifmam_index: number;
}
declare var ifma_msghdr: ifma_msghdr;

interface ifma_msghdr2 {
	ifmam_msglen: number;
	ifmam_version: number;
	ifmam_type: number;
	ifmam_addrs: number;
	ifmam_flags: number;
	ifmam_index: number;
	ifmam_refcount: number;
}
declare var ifma_msghdr2: ifma_msghdr2;

interface ifmaddrs {
	ifma_next: ifmaddrs;
	ifma_name: sockaddr;
	ifma_addr: sockaddr;
	ifma_lladdr: sockaddr;
}
declare var ifmaddrs: ifmaddrs;

interface ifmedia_description {
	ifmt_word: number;
	ifmt_string: string;
}
declare var ifmedia_description: ifmedia_description;

interface ifmediareq {
	ifm_name: number;
	ifm_current: number;
	ifm_mask: number;
	ifm_status: number;
	ifm_active: number;
	ifm_count: number;
	ifm_ulist: number;
}
declare var ifmediareq: ifmediareq;

interface ifqueue {
	ifq_head: any;
	ifq_tail: any;
	ifq_len: number;
	ifq_maxlen: number;
	ifq_drops: number;
}
declare var ifqueue: ifqueue;

interface ifstat {
	ifs_name: number;
	ascii: number;
}
declare var ifstat: ifstat;

declare function ilogb(p1: number): number;

declare function ilogbf(p1: number): number;

declare function ilogbl(p1: number): number;

declare function imaxabs(j: number): number;

declare function imaxdiv(__numer: number, __denom: number): imaxdiv_t;

interface imaxdiv_t {
	quot: number;
	rem: number;
}
declare var imaxdiv_t: imaxdiv_t;

declare function immedok(p1: _win_st, p2: boolean): void;

interface in4in6_addr {
	i46a_pad32: number;
	i46a_addr4: in_addr;
}
declare var in4in6_addr: in4in6_addr;

interface in_addr {
	s_addr: number;
}
declare var in_addr: in_addr;

interface in_pktinfo {
	ipi_ifindex: number;
	ipi_spec_dst: in_addr;
	ipi_addr: in_addr;
}
declare var in_pktinfo: in_pktinfo;

declare function inch(): number;

declare function inchnstr(p1: number, p2: number): number;

declare function inchstr(p1: number): number;

declare function index(p1: string | any, p2: number): string;

declare function inet_addr(p1: string | any): number;

declare function inet_aton(p1: string | any, p2: in_addr): number;

declare function inet_lnaof(p1: in_addr): number;

declare function inet_makeaddr(p1: number, p2: number): in_addr;

declare function inet_net_ntop(p1: number, p2: any, p3: number, p4: string | any, p5: number): string;

declare function inet_net_pton(p1: number, p2: string | any, p3: any, p4: number): number;

declare function inet_neta(p1: number, p2: string | any, p3: number): string;

declare function inet_netof(p1: in_addr): number;

declare function inet_network(p1: string | any): number;

declare function inet_nsap_addr(p1: string | any, p2: string | any, p3: number): number;

declare function inet_nsap_ntoa(p1: number, p2: string | any, p3: string | any): string;

declare function inet_ntoa(p1: in_addr): string;

declare function inet_ntop(p1: number, p2: any, p3: string | any, p4: number): string;

declare function inet_pton(p1: number, p2: string | any, p3: any): number;

declare function init_color(p1: number, p2: number, p3: number, p4: number): number;

declare function init_pair(p1: number, p2: number, p3: number): number;

declare function initgroups(p1: string | any, p2: number): number;

declare function initscr(): _win_st;

declare function initstate(p1: number, p2: string | any, p3: number): string;

declare function innetgr(p1: string | any, p2: string | any, p3: string | any, p4: string | any): number;

declare function innstr(p1: string | any, p2: number): number;

declare function insch(p1: number): number;

declare function insdelln(p1: number): number;

declare function insertln(): number;

declare function insnstr(p1: string | any, p2: number): number;

declare function insque(p1: any, p2: any): void;

declare function insstr(p1: string | any): number;

declare function instr(p1: string | any): number;

declare function intrflush(p1: _win_st, p2: boolean): number;

interface io_stat_entry {
	count: number;
	size: number;
}
declare var io_stat_entry: io_stat_entry;

interface io_stat_info {
	disk_reads: io_stat_entry;
	io_priority: io_stat_entry;
	paging: io_stat_entry;
	metadata: io_stat_entry;
	total_io: io_stat_entry;
}
declare var io_stat_info: io_stat_info;

interface iovec {
	iov_base: any;
	iov_len: number;
}
declare var iovec: iovec;

interface ip_mreq {
	imr_multiaddr: in_addr;
	imr_interface: in_addr;
}
declare var ip_mreq: ip_mreq;

interface ip_mreq_source {
	imr_multiaddr: in_addr;
	imr_sourceaddr: in_addr;
	imr_interface: in_addr;
}
declare var ip_mreq_source: ip_mreq_source;

interface ip_mreqn {
	imr_multiaddr: in_addr;
	imr_address: in_addr;
	imr_ifindex: number;
}
declare var ip_mreqn: ip_mreqn;

interface ip_opts {
	ip_dst: in_addr;
	ip_opts: number;
}
declare var ip_opts: ip_opts;

interface ipc_info_name_t {
	iin_name: number;
	iin_collision: number;
	iin_type: number;
	iin_urefs: number;
	iin_object: number;
	iin_next: number;
	iin_hash: number;
}
declare var ipc_info_name_t: ipc_info_name_t;

interface ipc_info_space_basic_t {
	iisb_genno_mask: number;
	iisb_table_size: number;
	iisb_table_next: number;
	iisb_table_inuse: number;
	iisb_reserved: number;
}
declare var ipc_info_space_basic_t: ipc_info_space_basic_t;

interface ipc_info_space_t {
	iis_genno_mask: number;
	iis_table_size: number;
	iis_table_next: number;
	iis_tree_size: number;
	iis_tree_small: number;
	iis_tree_hash: number;
}
declare var ipc_info_space_t: ipc_info_space_t;

interface ipc_info_tree_name_t {
	iitn_name: ipc_info_name_t;
	iitn_lchild: number;
	iitn_rchild: number;
}
declare var ipc_info_tree_name_t: ipc_info_tree_name_t;

interface ipc_perm {
	uid: number;
	gid: number;
	cuid: number;
	cgid: number;
	mode: number;
	_seq: number;
	_key: number;
}
declare var ipc_perm: ipc_perm;

declare function iruserok(p1: number, p2: number, p3: string | any, p4: string | any): number;

declare function iruserok_sa(p1: any, p2: number, p3: number, p4: string | any, p5: string | any): number;

declare function is_cleared(p1: _win_st): boolean;

declare function is_idcok(p1: _win_st): boolean;

declare function is_idlok(p1: _win_st): boolean;

declare function is_immedok(p1: _win_st): boolean;

declare function is_keypad(p1: _win_st): boolean;

declare function is_leaveok(p1: _win_st): boolean;

declare function is_linetouched(p1: _win_st, p2: number): boolean;

declare function is_nodelay(p1: _win_st): boolean;

declare function is_notimeout(p1: _win_st): boolean;

declare function is_scrollok(p1: _win_st): boolean;

declare function is_syncok(p1: _win_st): boolean;

declare function is_term_resized(p1: number, p2: number): boolean;

declare function is_wintouched(p1: _win_st): boolean;

declare function isatty(p1: number): number;

declare function isendwin(): boolean;

declare function issetugid(): number;

declare const italic: number;

interface itimerval {
	it_interval: timeval;
	it_value: timeval;
}
declare var itimerval: itimerval;

declare function j0(p1: number): number;

declare function j1(p1: number): number;

declare function jn(p1: number, p2: number): number;

declare const kAUBadParamErr: number;

declare const kAUCloseErr: number;

declare const kAULastErr: number;

declare const kAUMakeReturnTokErr: number;

declare const kAUMakeSubjectTokErr: number;

declare const kAUMakeTextTokErr: number;

declare const kAUNoErr: number;

declare const kAUOpenErr: number;

declare const kAUStatErr: number;

declare const kAUSysctlErr: number;

declare const kAUWriteCallerTokErr: number;

declare const kAUWriteReturnTokErr: number;

declare const kAUWriteSubjectTokErr: number;

declare const kBTBadCloseMask: number;

declare const kBTBigKeysMask: number;

declare const kBTHeaderNode: number;

declare const kBTIndexNode: number;

declare const kBTLeafNode: number;

declare const kBTMapNode: number;

declare const kBTVariableIndexKeysMask: number;

declare const kFSKMountVersion: number;

declare const kHFSAllocationFileID: number;

declare const kHFSAttributeDataFileID: number;

declare const kHFSAttributesFileID: number;

declare const kHFSAutoCandidateBit: number;

declare const kHFSAutoCandidateMask: number;

declare const kHFSBadBlockFileID: number;

declare const kHFSBinaryCompare: number;

declare const kHFSBogusExtentFileID: number;

declare const kHFSBootVolumeInconsistentBit: number;

declare const kHFSBootVolumeInconsistentMask: number;

declare const kHFSCaseFolding: number;

declare const kHFSCatalogFileID: number;

declare const kHFSCatalogKeyMaximumLength: number;

declare const kHFSCatalogKeyMinimumLength: number;

declare const kHFSCatalogNodeIDsReusedBit: number;

declare const kHFSCatalogNodeIDsReusedMask: number;

declare const kHFSContentProtectionBit: number;

declare const kHFSContentProtectionMask: number;

declare const kHFSDoNotFastDevPinBit: number;

declare const kHFSDoNotFastDevPinMask: number;

declare const kHFSExtentDensity: number;

declare const kHFSExtentKeyMaximumLength: number;

declare const kHFSExtentsFileID: number;

declare const kHFSFastDevCandidateBit: number;

declare const kHFSFastDevCandidateMask: number;

declare const kHFSFastDevPinnedBit: number;

declare const kHFSFastDevPinnedMask: number;

declare const kHFSFileLockedBit: number;

declare const kHFSFileLockedMask: number;

declare const kHFSFileRecord: number;

declare const kHFSFileThreadRecord: number;

declare const kHFSFirstUserCatalogNodeID: number;

declare const kHFSFolderRecord: number;

declare const kHFSFolderThreadRecord: number;

declare const kHFSHasAttributesBit: number;

declare const kHFSHasAttributesMask: number;

declare const kHFSHasChildLinkBit: number;

declare const kHFSHasChildLinkMask: number;

declare const kHFSHasDateAddedBit: number;

declare const kHFSHasDateAddedMask: number;

declare const kHFSHasFolderCountBit: number;

declare const kHFSHasFolderCountMask: number;

declare const kHFSHasLinkChainBit: number;

declare const kHFSHasLinkChainMask: number;

declare const kHFSHasSecurityBit: number;

declare const kHFSHasSecurityMask: number;

declare const kHFSJMountVersion: number;

declare const kHFSMDBAttributesMask: number;

declare const kHFSMaxAttrNameLen: number;

declare const kHFSMaxFileNameChars: number;

declare const kHFSMaxVolumeNameChars: number;

declare const kHFSPlusAttrExtents: number;

declare const kHFSPlusAttrForkData: number;

declare const kHFSPlusAttrInlineData: number;

declare const kHFSPlusAttrMinNodeSize: number;

declare const kHFSPlusCatalogKeyMaximumLength: number;

declare const kHFSPlusCatalogKeyMinimumLength: number;

declare const kHFSPlusCatalogMinNodeSize: number;

declare const kHFSPlusCreator: number;

declare const kHFSPlusExtentDensity: number;

declare const kHFSPlusExtentKeyMaximumLength: number;

declare const kHFSPlusExtentMinNodeSize: number;

declare const kHFSPlusFileRecord: number;

declare const kHFSPlusFileThreadRecord: number;

declare const kHFSPlusFolderRecord: number;

declare const kHFSPlusFolderThreadRecord: number;

declare const kHFSPlusMaxFileNameChars: number;

declare const kHFSPlusMountVersion: number;

declare const kHFSPlusSigWord: number;

declare const kHFSPlusVersion: number;

declare const kHFSRepairCatalogFileID: number;

declare const kHFSRootFolderID: number;

declare const kHFSRootParentID: number;

declare const kHFSSigWord: number;

declare const kHFSStartupFileID: number;

declare const kHFSThreadExistsBit: number;

declare const kHFSThreadExistsMask: number;

declare const kHFSUnusedNodeFixBit: number;

declare const kHFSUnusedNodeFixMask: number;

declare const kHFSUnusedNodesFixDate: number;

declare const kHFSVolumeHardwareLockBit: number;

declare const kHFSVolumeHardwareLockMask: number;

declare const kHFSVolumeInconsistentBit: number;

declare const kHFSVolumeInconsistentMask: number;

declare const kHFSVolumeJournaledBit: number;

declare const kHFSVolumeJournaledMask: number;

declare const kHFSVolumeNoCacheRequiredBit: number;

declare const kHFSVolumeNoCacheRequiredMask: number;

declare const kHFSVolumeSoftwareLockBit: number;

declare const kHFSVolumeSoftwareLockMask: number;

declare const kHFSVolumeSparedBlocksBit: number;

declare const kHFSVolumeSparedBlocksMask: number;

declare const kHFSVolumeUnmountedBit: number;

declare const kHFSVolumeUnmountedMask: number;

declare const kHFSXSigWord: number;

declare const kHFSXVersion: number;

declare const kHardLinkFileType: number;

declare const kJIJournalInFSMask: number;

declare const kJIJournalNeedInitMask: number;

declare const kJIJournalOnOtherDeviceMask: number;

declare const kNilOptions: number;

declare const kSymLinkCreator: number;

declare const kSymLinkFileType: number;

declare const kUnknownType: number;

declare const kVariableLengthArray: number;

interface kauth_cache_sizes {
	kcs_group_size: number;
	kcs_id_size: number;
}
declare var kauth_cache_sizes: kauth_cache_sizes;

interface kern_ctl_info {
	kcsi_id: number;
	kcsi_reg_unit: number;
	kcsi_flags: number;
	kcsi_recvbufsize: number;
	kcsi_sendbufsize: number;
	kcsi_unit: number;
	kcsi_name: number;
}
declare var kern_ctl_info: kern_ctl_info;

interface kern_event_info {
	kesi_vendor_code_filter: number;
	kesi_class_filter: number;
	kesi_subclass_filter: number;
}
declare var kern_event_info: kern_event_info;

interface kernel_resource_sizes {
	task: number;
	thread: number;
	port: number;
	memory_region: number;
	memory_object: number;
}
declare var kernel_resource_sizes: kernel_resource_sizes;

interface kev_dl_proto_data {
	link_data: net_event_data;
	proto_family: number;
	proto_remaining_count: number;
}
declare var kev_dl_proto_data: kev_dl_proto_data;

declare function kevent(kq: number, changelist: keventStruct, nchanges: number, eventlist: keventStruct, nevents: number, timeout: timespec): number;

declare function kevent64(kq: number, changelist: kevent64_s, nchanges: number, eventlist: kevent64_s, nevents: number, flags: number, timeout: timespec): number;

interface kevent64_s {
	ident: number;
	filter: number;
	flags: number;
	fflags: number;
	data: number;
	udata: number;
	ext: number;
}
declare var kevent64_s: kevent64_s;

interface keventStruct {
	ident: number;
	filter: number;
	flags: number;
	fflags: number;
	data: number;
	udata: any;
}
declare var keventStruct: keventStruct;

declare function kext_request(host_priv: number, user_log_flags: number, request_data: number, request_dataCnt: number, response_data: number, response_dataCnt: number, log_data: number, log_dataCnt: number, op_result: number): number;

declare function key_defined(p1: string | any): number;

declare function keybound(p1: number, p2: number): string;

declare function keyname(p1: number): string;

declare function keyok(p1: number, p2: boolean): number;

declare function keypad(p1: _win_st, p2: boolean): number;

declare function kill(p1: number, p2: number): number;

declare function killchar(): number;

declare function killpg(p1: number, p2: number): number;

interface klist {
	slh_first: any;
}
declare var klist: klist;

declare function kmod_control(host_priv: number, module: number, flavor: number, data: any, dataCnt: number): number;

declare function kmod_create(host_priv: number, info: number, module: number): number;

declare function kmod_destroy(host_priv: number, module: number): number;

declare function kmod_get_info(host: number, modules: any, modulesCnt: number): number;

interface kmod_info_32_v1_t {
	next_addr: number;
	info_version: number;
	id: number;
	name: number;
	version: number;
	reference_count: number;
	reference_list_addr: number;
	address: number;
	size: number;
	hdr_size: number;
	start_addr: number;
	stop_addr: number;
}
declare var kmod_info_32_v1_t: kmod_info_32_v1_t;

interface kmod_info_64_v1_t {
	next_addr: number;
	info_version: number;
	id: number;
	name: number;
	version: number;
	reference_count: number;
	reference_list_addr: number;
	address: number;
	size: number;
	hdr_size: number;
	start_addr: number;
	stop_addr: number;
}
declare var kmod_info_64_v1_t: kmod_info_64_v1_t;

interface kmod_info_t {
	next: kmod_info_t;
	info_version: number;
	id: number;
	name: number;
	version: number;
	reference_count: number;
	reference_list: kmod_reference_t;
	address: number;
	size: number;
	hdr_size: number;
	start: (p1: kmod_info_t, p2: any) => number;
	stop: (p1: kmod_info_t, p2: any) => number;
}
declare var kmod_info_t: kmod_info_t;

interface kmod_reference_t {
	next: kmod_reference_t;
	info: kmod_info_t;
}
declare var kmod_reference_t: kmod_reference_t;

declare function kqueue(): number;

interface kqueue_dyninfo {
	kqdi_info: kqueue_info;
	kqdi_servicer: number;
	kqdi_owner: number;
	kqdi_sync_waiters: number;
	kqdi_sync_waiter_qos: number;
	kqdi_async_qos: number;
	kqdi_request_state: number;
	kqdi_events_qos: number;
	kqdi_pri: number;
	kqdi_pol: number;
	kqdi_cpupercent: number;
	_kqdi_reserved0: number;
	_kqdi_reserved1: number;
}
declare var kqueue_dyninfo: kqueue_dyninfo;

interface kqueue_fdinfo {
	pfi: proc_fileinfo;
	kqueueinfo: kqueue_info;
}
declare var kqueue_fdinfo: kqueue_fdinfo;

interface kqueue_info {
	kq_stat: vinfo_stat;
	kq_state: number;
	rfu_1: number;
}
declare var kqueue_info: kqueue_info;

declare function l64a(p1: number): string;

declare function labs(p1: number): number;

interface lastlogx {
	ll_tv: timeval;
	ll_line: number;
	ll_host: number;
}
declare var lastlogx: lastlogx;

declare function lchflags(p1: string | any, p2: number): number;

declare function lchmod(p1: string | any, p2: number): number;

declare function lchown(p1: string | any, p2: number, p3: number): number;

declare function lcong48(p1: number): void;

interface lconv {
	decimal_point: string;
	thousands_sep: string;
	grouping: string;
	int_curr_symbol: string;
	currency_symbol: string;
	mon_decimal_point: string;
	mon_thousands_sep: string;
	mon_grouping: string;
	positive_sign: string;
	negative_sign: string;
	int_frac_digits: number;
	frac_digits: number;
	p_cs_precedes: number;
	p_sep_by_space: number;
	n_cs_precedes: number;
	n_sep_by_space: number;
	p_sign_posn: number;
	n_sign_posn: number;
	int_p_cs_precedes: number;
	int_n_cs_precedes: number;
	int_p_sep_by_space: number;
	int_n_sep_by_space: number;
	int_p_sign_posn: number;
	int_n_sign_posn: number;
}
declare var lconv: lconv;

declare function ldexp(p1: number, p2: number): number;

declare function ldexpf(p1: number, p2: number): number;

declare function ldexpl(p1: number, p2: number): number;

declare function ldiv(p1: number, p2: number): ldiv_t;

interface ldiv_t {
	quot: number;
	rem: number;
}
declare var ldiv_t: ldiv_t;

declare function leaveok(p1: _win_st, p2: boolean): number;

declare function lfind(p1: any, p2: any, p3: number, p4: number, p5: (p1: any, p2: any) => number): any;

declare function lgamma(p1: number): number;

declare function lgammaf(p1: number): number;

declare function lgammal(p1: number): number;

declare function libiconv_set_relocation_prefix(orig_prefix: string | any, curr_prefix: string | any): void;

interface linger {
	l_onoff: number;
	l_linger: number;
}
declare var linger: linger;

declare function link(p1: string | any, p2: string | any): number;

declare function link_addr(p1: string | any, p2: sockaddr_dl): void;

declare function link_ntoa(p1: sockaddr_dl): string;

declare function linkat(p1: number, p2: string | any, p3: number, p4: string | any, p5: number): number;

declare function listen(p1: number, p2: number): number;

declare function listxattr(path: string | any, namebuff: string | any, size: number, options: number): number;

declare function llabs(p1: number): number;

declare function lldiv(p1: number, p2: number): lldiv_t;

interface lldiv_t {
	quot: number;
	rem: number;
}
declare var lldiv_t: lldiv_t;

declare function llrint(p1: number): number;

declare function llrintf(p1: number): number;

declare function llrintl(p1: number): number;

declare function llround(p1: number): number;

declare function llroundf(p1: number): number;

declare function llroundl(p1: number): number;

interface loadavg {
	ldavg: number;
	fscale: number;
}
declare var loadavg: loadavg;

declare function localeconv(): lconv;

declare function localtime(p1: number): tm;

declare function localtime_r(p1: number, p2: tm): tm;

declare function lock_acquire(lock_set: number, lock_id: number): number;

declare function lock_handoff(lock_set: number, lock_id: number): number;

declare function lock_handoff_accept(lock_set: number, lock_id: number): number;

declare function lock_make_stable(lock_set: number, lock_id: number): number;

declare function lock_release(lock_set: number, lock_id: number): number;

declare function lock_set_create(task: number, new_lock_set: number, n_ulocks: number, policy: number): number;

declare function lock_set_destroy(task: number, lock_set: number): number;

declare function lock_try(lock_set: number, lock_id: number): number;

declare function lockf(p1: number, p2: number, p3: number): number;

interface lockgroup_info_t {
	lockgroup_name: number;
	lockgroup_attr: number;
	lock_spin_cnt: number;
	lock_spin_util_cnt: number;
	lock_spin_held_cnt: number;
	lock_spin_miss_cnt: number;
	lock_spin_held_max: number;
	lock_spin_held_cum: number;
	lock_mtx_cnt: number;
	lock_mtx_util_cnt: number;
	lock_mtx_held_cnt: number;
	lock_mtx_miss_cnt: number;
	lock_mtx_wait_cnt: number;
	lock_mtx_held_max: number;
	lock_mtx_held_cum: number;
	lock_mtx_wait_max: number;
	lock_mtx_wait_cum: number;
	lock_rw_cnt: number;
	lock_rw_util_cnt: number;
	lock_rw_held_cnt: number;
	lock_rw_miss_cnt: number;
	lock_rw_wait_cnt: number;
	lock_rw_held_max: number;
	lock_rw_held_cum: number;
	lock_rw_wait_max: number;
	lock_rw_wait_cum: number;
}
declare var lockgroup_info_t: lockgroup_info_t;

declare function log(p1: number): number;

declare function log10(p1: number): number;

declare function log10f(p1: number): number;

declare function log10l(p1: number): number;

declare function log1p(p1: number): number;

declare function log1pf(p1: number): number;

declare function log1pl(p1: number): number;

declare function log2(p1: number): number;

declare function log2f(p1: number): number;

declare function log2l(p1: number): number;

interface log2phys {
	l2p_flags: number;
	l2p_contigbytes: number;
	l2p_devoffset: number;
}
declare var log2phys: log2phys;

declare function logb(p1: number): number;

declare function logbf(p1: number): number;

declare function logbl(p1: number): number;

declare function logf(p1: number): number;

declare function login_tty(p1: number): number;

declare function logl(p1: number): number;

declare function longjmp(p1: number, p2: number): void;

declare function longjmperror(): void;

declare function longname(): string;

declare function lrint(p1: number): number;

declare function lrintf(p1: number): number;

declare function lrintl(p1: number): number;

declare function lround(p1: number): number;

declare function lroundf(p1: number): number;

declare function lroundl(p1: number): number;

declare function lsearch(p1: any, p2: any, p3: number, p4: number, p5: (p1: any, p2: any) => number): any;

declare function lseek(p1: number, p2: number, p3: number): number;

declare function lstat(p1: string | any, p2: statStruct): number;

declare function lstatx_np(p1: string | any, p2: statStruct, p3: any): number;

declare function lutimes(p1: string | any, p2: timeval): number;

declare function mach_absolute_time(): number;

declare function mach_approximate_time(): number;

declare function mach_continuous_approximate_time(): number;

declare function mach_continuous_time(): number;

interface mach_core_details {
	gzip_offset: number;
	gzip_length: number;
	core_name: number;
}
declare var mach_core_details: mach_core_details;

interface mach_core_fileheader {
	signature: number;
	log_offset: number;
	log_length: number;
	num_files: number;
	files: mach_core_details;
}
declare var mach_core_fileheader: mach_core_fileheader;

interface mach_dead_name_notification_t {
	not_header: mach_msg_header_t;
	NDR: NDR_record_t;
	not_port: number;
	trailer: mach_msg_security_trailer_t;
}
declare var mach_dead_name_notification_t: mach_dead_name_notification_t;

declare function mach_error(str: string | any, error_value: number): void;

declare function mach_error_string(error_value: number): string;

declare function mach_error_type(error_value: number): string;

declare function mach_generate_activity_id(target: number, count: number, activity_id: number): number;

declare function mach_host_self(): number;

declare function mach_make_memory_entry(target_task: number, size: number, offset: number, permission: number, object_handle: number, parent_entry: number): number;

declare function mach_make_memory_entry_64(target_task: number, size: number, offset: number, permission: number, object_handle: number, parent_entry: number): number;

declare function mach_memory_info(host: number, names: mach_zone_name_t, namesCnt: number, info: mach_zone_info_t, infoCnt: number, memory_info: mach_memory_info_t, memory_infoCnt: number): number;

interface mach_memory_info_t {
	flags: number;
	site: number;
	size: number;
	free: number;
	largest: number;
	collectable_bytes: number;
	mapped: number;
	peak: number;
	tag: number;
	zone: number;
	_resvA: number;
	_resv: number;
	name: number;
}
declare var mach_memory_info_t: mach_memory_info_t;

declare function mach_memory_object_memory_entry(host: number, internal: number, size: number, permission: number, pager: number, entry_handle: number): number;

declare function mach_memory_object_memory_entry_64(host: number, internal: number, size: number, permission: number, pager: number, entry_handle: number): number;

declare function mach_msg(msg: mach_msg_header_t, option: number, send_size: number, rcv_size: number, rcv_name: number, timeout: number, notify: number): number;

interface mach_msg_audit_trailer_t {
	msgh_trailer_type: number;
	msgh_trailer_size: number;
	msgh_seqno: number;
	msgh_sender: security_token_t;
	msgh_audit: audit_token_t;
}
declare var mach_msg_audit_trailer_t: mach_msg_audit_trailer_t;

interface mach_msg_base_t {
	header: mach_msg_header_t;
	body: mach_msg_body_t;
}
declare var mach_msg_base_t: mach_msg_base_t;

interface mach_msg_body_t {
	msgh_descriptor_count: number;
}
declare var mach_msg_body_t: mach_msg_body_t;

interface mach_msg_context_trailer_t {
	msgh_trailer_type: number;
	msgh_trailer_size: number;
	msgh_seqno: number;
	msgh_sender: security_token_t;
	msgh_audit: audit_token_t;
	msgh_context: number;
}
declare var mach_msg_context_trailer_t: mach_msg_context_trailer_t;

declare function mach_msg_destroy(p1: mach_msg_header_t): void;

interface mach_msg_empty_rcv_t {
	header: mach_msg_header_t;
	trailer: mach_msg_trailer_t;
}
declare var mach_msg_empty_rcv_t: mach_msg_empty_rcv_t;

interface mach_msg_empty_send_t {
	header: mach_msg_header_t;
}
declare var mach_msg_empty_send_t: mach_msg_empty_send_t;

interface mach_msg_guarded_port_descriptor32_t {
	context: number;
	name: number;
	flags: number;
	disposition: number;
	type: number;
}
declare var mach_msg_guarded_port_descriptor32_t: mach_msg_guarded_port_descriptor32_t;

interface mach_msg_guarded_port_descriptor64_t {
	context: number;
	flags: number;
	disposition: number;
	type: number;
	name: number;
}
declare var mach_msg_guarded_port_descriptor64_t: mach_msg_guarded_port_descriptor64_t;

interface mach_msg_guarded_port_descriptor_t {
	context: number;
	flags: number;
	disposition: number;
	type: number;
	name: number;
}
declare var mach_msg_guarded_port_descriptor_t: mach_msg_guarded_port_descriptor_t;

interface mach_msg_header_t {
	msgh_bits: number;
	msgh_size: number;
	msgh_remote_port: number;
	msgh_local_port: number;
	msgh_voucher_port: number;
	msgh_id: number;
}
declare var mach_msg_header_t: mach_msg_header_t;

interface mach_msg_mac_trailer_t {
	msgh_trailer_type: number;
	msgh_trailer_size: number;
	msgh_seqno: number;
	msgh_sender: security_token_t;
	msgh_audit: audit_token_t;
	msgh_context: number;
	msgh_ad: number;
	msgh_labels: msg_labels_t;
}
declare var mach_msg_mac_trailer_t: mach_msg_mac_trailer_t;

interface mach_msg_ool_descriptor32_t {
	address: number;
	size: number;
	deallocate: number;
	copy: number;
	pad1: number;
	type: number;
}
declare var mach_msg_ool_descriptor32_t: mach_msg_ool_descriptor32_t;

interface mach_msg_ool_descriptor64_t {
	address: number;
	deallocate: number;
	copy: number;
	pad1: number;
	type: number;
	size: number;
}
declare var mach_msg_ool_descriptor64_t: mach_msg_ool_descriptor64_t;

interface mach_msg_ool_descriptor_t {
	address: any;
	deallocate: number;
	copy: number;
	pad1: number;
	type: number;
	size: number;
}
declare var mach_msg_ool_descriptor_t: mach_msg_ool_descriptor_t;

interface mach_msg_ool_ports_descriptor32_t {
	address: number;
	count: number;
	deallocate: number;
	copy: number;
	disposition: number;
	type: number;
}
declare var mach_msg_ool_ports_descriptor32_t: mach_msg_ool_ports_descriptor32_t;

interface mach_msg_ool_ports_descriptor64_t {
	address: number;
	deallocate: number;
	copy: number;
	disposition: number;
	type: number;
	count: number;
}
declare var mach_msg_ool_ports_descriptor64_t: mach_msg_ool_ports_descriptor64_t;

interface mach_msg_ool_ports_descriptor_t {
	address: any;
	deallocate: number;
	copy: number;
	disposition: number;
	type: number;
	count: number;
}
declare var mach_msg_ool_ports_descriptor_t: mach_msg_ool_ports_descriptor_t;

declare function mach_msg_overwrite(msg: mach_msg_header_t, option: number, send_size: number, rcv_size: number, rcv_name: number, timeout: number, notify: number, rcv_msg: mach_msg_header_t, rcv_limit: number): number;

interface mach_msg_port_descriptor_t {
	name: number;
	pad1: number;
	pad2: number;
	disposition: number;
	type: number;
}
declare var mach_msg_port_descriptor_t: mach_msg_port_descriptor_t;

declare function mach_msg_receive(p1: mach_msg_header_t): number;

interface mach_msg_security_trailer_t {
	msgh_trailer_type: number;
	msgh_trailer_size: number;
	msgh_seqno: number;
	msgh_sender: security_token_t;
}
declare var mach_msg_security_trailer_t: mach_msg_security_trailer_t;

declare function mach_msg_send(p1: mach_msg_header_t): number;

interface mach_msg_seqno_trailer_t {
	msgh_trailer_type: number;
	msgh_trailer_size: number;
	msgh_seqno: number;
}
declare var mach_msg_seqno_trailer_t: mach_msg_seqno_trailer_t;

declare function mach_msg_server(p1: (p1: mach_msg_header_t, p2: mach_msg_header_t) => number, p2: number, p3: number, p4: number): number;

declare function mach_msg_server_importance(p1: (p1: mach_msg_header_t, p2: mach_msg_header_t) => number, p2: number, p3: number, p4: number): number;

declare function mach_msg_server_once(p1: (p1: mach_msg_header_t, p2: mach_msg_header_t) => number, p2: number, p3: number, p4: number): number;

interface mach_msg_trailer_t {
	msgh_trailer_type: number;
	msgh_trailer_size: number;
}
declare var mach_msg_trailer_t: mach_msg_trailer_t;

interface mach_msg_type_descriptor_t {
	pad1: number;
	pad2: number;
	pad3: number;
	type: number;
}
declare var mach_msg_type_descriptor_t: mach_msg_type_descriptor_t;

interface mach_no_senders_notification_t {
	not_header: mach_msg_header_t;
	NDR: NDR_record_t;
	not_count: number;
	trailer: mach_msg_security_trailer_t;
}
declare var mach_no_senders_notification_t: mach_no_senders_notification_t;

declare function mach_port_allocate(task: number, right: number, name: number): number;

declare function mach_port_allocate_full(task: number, right: number, proto: number, qos: mach_port_qos_t, name: number): number;

declare function mach_port_allocate_name(task: number, right: number, name: number): number;

declare function mach_port_allocate_qos(task: number, right: number, qos: mach_port_qos_t, name: number): number;

declare function mach_port_construct(task: number, options: mach_port_options_t, context: number, name: number): number;

declare function mach_port_deallocate(task: number, name: number): number;

interface mach_port_deleted_notification_t {
	not_header: mach_msg_header_t;
	NDR: NDR_record_t;
	not_port: number;
	trailer: mach_msg_security_trailer_t;
}
declare var mach_port_deleted_notification_t: mach_port_deleted_notification_t;

declare function mach_port_destroy(task: number, name: number): number;

interface mach_port_destroyed_notification_t {
	not_header: mach_msg_header_t;
	not_body: mach_msg_body_t;
	not_port: mach_msg_port_descriptor_t;
	trailer: mach_msg_security_trailer_t;
}
declare var mach_port_destroyed_notification_t: mach_port_destroyed_notification_t;

declare function mach_port_destruct(task: number, name: number, srdelta: number, guard: number): number;

declare function mach_port_dnrequest_info(task: number, name: number, dnr_total: number, dnr_used: number): number;

declare function mach_port_extract_member(task: number, name: number, pset: number): number;

declare function mach_port_extract_right(task: number, name: number, msgt_name: number, poly: number, polyPoly: number): number;

declare function mach_port_get_attributes(task: number, name: number, flavor: number, port_info_out: number, port_info_outCnt: number): number;

declare function mach_port_get_context(task: number, name: number, context: number): number;

declare function mach_port_get_refs(task: number, name: number, right: number, refs: number): number;

declare function mach_port_get_set_status(task: number, name: number, members: number, membersCnt: number): number;

declare function mach_port_get_srights(task: number, name: number, srights: number): number;

declare function mach_port_guard(task: number, name: number, guard: number, strict: number): number;

enum mach_port_guard_exception_codes {

	kGUARD_EXC_DESTROY = 1,

	kGUARD_EXC_MOD_REFS = 2,

	kGUARD_EXC_SET_CONTEXT = 4,

	kGUARD_EXC_UNGUARDED = 8,

	kGUARD_EXC_INCORRECT_GUARD = 16,

	kGUARD_EXC_IMMOVABLE = 32,

	kGUARD_EXC_STRICT_REPLY = 64,

	kGUARD_EXC_INVALID_RIGHT = 256,

	kGUARD_EXC_INVALID_NAME = 512,

	kGUARD_EXC_INVALID_VALUE = 1024,

	kGUARD_EXC_INVALID_ARGUMENT = 2048,

	kGUARD_EXC_RIGHT_EXISTS = 4096,

	kGUARD_EXC_KERN_NO_SPACE = 8192,

	kGUARD_EXC_KERN_FAILURE = 16384,

	kGUARD_EXC_KERN_RESOURCE = 32768,

	kGUARD_EXC_SEND_INVALID_REPLY = 65536,

	kGUARD_EXC_SEND_INVALID_VOUCHER = 131072,

	kGUARD_EXC_SEND_INVALID_RIGHT = 262144,

	kGUARD_EXC_RCV_INVALID_NAME = 524288,

	kGUARD_EXC_RCV_GUARDED_DESC = 1048576
}


declare function mach_port_guard_with_flags(task: number, name: number, guard: number, flags: number): number;

interface mach_port_info_ext_t {
	mpie_status: mach_port_status_t;
	mpie_boost_cnt: number;
	reserved: number;
}
declare var mach_port_info_ext_t: mach_port_info_ext_t;

declare function mach_port_insert_member(task: number, name: number, pset: number): number;

declare function mach_port_insert_right(task: number, name: number, poly: number, polyPoly: number): number;

declare function mach_port_kernel_object(task: number, name: number, object_type: number, object_addr: number): number;

declare function mach_port_kobject(task: number, name: number, object_type: number, object_addr: number): number;

declare function mach_port_kobject_description(task: number, name: number, object_type: number, object_addr: number, description: number): number;

interface mach_port_limits_t {
	mpl_qlimit: number;
}
declare var mach_port_limits_t: mach_port_limits_t;

declare function mach_port_mod_refs(task: number, name: number, right: number, delta: number): number;

declare function mach_port_move_member(task: number, member: number, after: number): number;

declare function mach_port_names(task: number, names: number, namesCnt: number, types: number, typesCnt: number): number;

interface mach_port_options_t {
	flags: number;
	mpl: mach_port_limits_t;
	reserved: number;
}
declare var mach_port_options_t: mach_port_options_t;

declare function mach_port_peek(task: number, name: number, trailer_type: number, request_seqnop: number, msg_sizep: number, msg_idp: number, trailer_infop: string | any, trailer_infopCnt: number): number;

interface mach_port_qos_t {
	name: number;
	prealloc: number;
	pad1: number;
	len: number;
}
declare var mach_port_qos_t: mach_port_qos_t;

declare function mach_port_rename(task: number, old_name: number, new_name: number): number;

declare function mach_port_request_notification(task: number, name: number, msgid: number, sync: number, notify: number, notifyPoly: number, previous: number): number;

declare function mach_port_set_attributes(task: number, name: number, flavor: number, port_info: number, port_infoCnt: number): number;

declare function mach_port_set_context(task: number, name: number, context: number): number;

declare function mach_port_set_mscount(task: number, name: number, mscount: number): number;

declare function mach_port_set_seqno(task: number, name: number, seqno: number): number;

declare function mach_port_space_basic_info(task: number, basic_info: ipc_info_space_basic_t): number;

declare function mach_port_space_info(task: number, space_info: ipc_info_space_t, table_info: ipc_info_name_t, table_infoCnt: number, tree_info: ipc_info_tree_name_t, tree_infoCnt: number): number;

interface mach_port_status_t {
	mps_pset: number;
	mps_seqno: number;
	mps_mscount: number;
	mps_qlimit: number;
	mps_msgcount: number;
	mps_sorights: number;
	mps_srights: number;
	mps_pdrequest: number;
	mps_nsrequest: number;
	mps_flags: number;
}
declare var mach_port_status_t: mach_port_status_t;

declare function mach_port_swap_guard(task: number, name: number, old_guard: number, new_guard: number): number;

declare function mach_port_type(task: number, name: number, ptype: number): number;

declare function mach_port_unguard(task: number, name: number, guard: number): number;

declare function mach_ports_lookup(target_task: number, init_port_set: number, init_port_setCnt: number): number;

declare function mach_ports_register(target_task: number, init_port_set: number, init_port_setCnt: number): number;

interface mach_send_once_notification_t {
	not_header: mach_msg_header_t;
	trailer: mach_msg_security_trailer_t;
}
declare var mach_send_once_notification_t: mach_send_once_notification_t;

interface mach_send_possible_notification_t {
	not_header: mach_msg_header_t;
	NDR: NDR_record_t;
	not_port: number;
	trailer: mach_msg_security_trailer_t;
}
declare var mach_send_possible_notification_t: mach_send_possible_notification_t;

interface mach_task_basic_info {
	virtual_size: number;
	resident_size: number;
	resident_size_max: number;
	user_time: time_value;
	system_time: time_value;
	policy: number;
	suspend_count: number;
}
declare var mach_task_basic_info: mach_task_basic_info;

declare var mach_task_self_: number;

declare function mach_thread_self(): number;

declare function mach_timebase_info(info: mach_timebase_infoStruct): number;

interface mach_timebase_infoStruct {
	numer: number;
	denom: number;
}
declare var mach_timebase_infoStruct: mach_timebase_infoStruct;

interface mach_timespec {
	tv_sec: number;
	tv_nsec: number;
}
declare var mach_timespec: mach_timespec;

declare function mach_vm_allocate(target: number, address: number, size: number, flags: number): number;

declare function mach_vm_behavior_set(target_task: number, address: number, size: number, new_behavior: number): number;

declare function mach_vm_copy(target_task: number, source_address: number, size: number, dest_address: number): number;

declare function mach_vm_deallocate(target: number, address: number, size: number): number;

interface mach_vm_info_region_t {
	vir_start: number;
	vir_end: number;
	vir_object: number;
	vir_offset: number;
	vir_needs_copy: number;
	vir_protection: number;
	vir_max_protection: number;
	vir_inheritance: number;
	vir_wired_count: number;
	vir_user_wired_count: number;
}
declare var mach_vm_info_region_t: mach_vm_info_region_t;

declare function mach_vm_inherit(target_task: number, address: number, size: number, new_inheritance: number): number;

declare function mach_vm_machine_attribute(target_task: number, address: number, size: number, attribute: number, value: number): number;

declare function mach_vm_map(target_task: number, address: number, size: number, mask: number, flags: number, object_: number, offset: number, copy: number, cur_protection: number, max_protection: number, inheritance: number): number;

declare function mach_vm_msync(target_task: number, address: number, size: number, sync_flags: number): number;

declare function mach_vm_page_info(target_task: number, address: number, flavor: number, info: number, infoCnt: number): number;

declare function mach_vm_page_query(target_map: number, offset: number, disposition: number, ref_count: number): number;

declare function mach_vm_page_range_query(target_map: number, address: number, size: number, dispositions: number, dispositions_count: number): number;

declare function mach_vm_protect(target_task: number, address: number, size: number, set_maximum: number, new_protection: number): number;

declare function mach_vm_purgable_control(target_task: number, address: number, control: number, state: number): number;

declare function mach_vm_read(target_task: number, address: number, size: number, data: number, dataCnt: number): number;

interface mach_vm_read_entry {
	address: number;
	size: number;
}
declare var mach_vm_read_entry: mach_vm_read_entry;

declare function mach_vm_read_list(target_task: number, data_list: mach_vm_read_entry, count: number): number;

declare function mach_vm_read_overwrite(target_task: number, address: number, size: number, data: number, outsize: number): number;

declare function mach_vm_region(target_task: number, address: number, size: number, flavor: number, info: number, infoCnt: number, object_name: number): number;

declare function mach_vm_region_info(task: number, address: number, region: vm_info_region_t, objects: vm_info_object_t, objectsCnt: number): number;

declare function mach_vm_region_info_64(task: number, address: number, region: vm_info_region_64_t, objects: vm_info_object_t, objectsCnt: number): number;

declare function mach_vm_region_recurse(target_task: number, address: number, size: number, nesting_depth: number, info: number, infoCnt: number): number;

declare function mach_vm_remap(target_task: number, target_address: number, size: number, mask: number, flags: number, src_task: number, src_address: number, copy: number, cur_protection: number, max_protection: number, inheritance: number): number;

declare function mach_vm_wire(host_priv: number, task: number, address: number, size: number, desired_access: number): number;

declare function mach_vm_write(target_task: number, address: number, data: number, dataCnt: number): number;

declare function mach_voucher_deallocate(voucher: number): number;

declare function mach_voucher_extract_attr_recipe_trap(voucher_name: number, key: number, recipe: string | any, recipe_size: number): number;

declare function mach_wait_until(deadline: number): number;

declare function mach_zone_info(host: number, names: mach_zone_name_t, namesCnt: number, info: mach_zone_info_t, infoCnt: number): number;

declare function mach_zone_info_for_zone(host: number, name: mach_zone_name_t, info: mach_zone_info_t): number;

interface mach_zone_info_t {
	mzi_count: number;
	mzi_cur_size: number;
	mzi_max_size: number;
	mzi_elem_size: number;
	mzi_alloc_size: number;
	mzi_sum_size: number;
	mzi_exhaustible: number;
	mzi_collectable: number;
}
declare var mach_zone_info_t: mach_zone_info_t;

interface mach_zone_name_t {
	mzn_name: number;
}
declare var mach_zone_name_t: mach_zone_name_t;

declare function macx_backing_store_recovery(pid: number): number;

declare function macx_backing_store_suspend(suspend: number): number;

declare function macx_swapoff(filename: number, flags: number): number;

declare function macx_swapon(filename: number, flags: number, size: number, priority: number): number;

declare function macx_triggers(hi_water: number, low_water: number, flags: number, alert_port: number): number;

declare function madvise(p1: any, p2: number, p3: number): number;

declare function malloc(__size: number): any;

declare function malloc_create_zone(start_size: number, flags: number): malloc_zone_t;

declare function malloc_default_purgeable_zone(): malloc_zone_t;

declare function malloc_default_zone(): malloc_zone_t;

declare function malloc_destroy_zone(zone: malloc_zone_t): void;

declare function malloc_get_all_zones(task: number, reader: (p1: number, p2: number, p3: number, p4: any) => number, addresses: number, count: number): number;

declare function malloc_get_zone_name(zone: malloc_zone_t): string;

declare function malloc_good_size(size: number): number;

interface malloc_introspection_t {
	enumerator: (p1: number, p2: any, p3: number, p4: number, p5: (p1: number, p2: number, p3: number, p4: any) => number, p6: (p1: number, p2: any, p3: number, p4: vm_range_t, p5: number) => void) => number;
	good_size: (p1: malloc_zone_t, p2: number) => number;
	check: (p1: malloc_zone_t) => number;
	print: (p1: malloc_zone_t, p2: number) => void;
	log: (p1: malloc_zone_t, p2: any) => void;
	force_lock: (p1: malloc_zone_t) => void;
	force_unlock: (p1: malloc_zone_t) => void;
	statistics: (p1: malloc_zone_t, p2: malloc_statistics_t) => void;
	zone_locked: (p1: malloc_zone_t) => number;
	enable_discharge_checking: (p1: malloc_zone_t) => number;
	disable_discharge_checking: (p1: malloc_zone_t) => void;
	discharge: (p1: malloc_zone_t, p2: any) => void;
	enumerate_discharged_pointers: (p1: malloc_zone_t, p2: (p1: any, p2: any) => void) => void;
	reinit_lock: (p1: malloc_zone_t) => void;
	print_task: (p1: number, p2: number, p3: number, p4: (p1: number, p2: number, p3: number, p4: any) => number, p5: (p1: string) => void) => void;
	task_statistics: (p1: number, p2: number, p3: (p1: number, p2: number, p3: number, p4: any) => number, p4: malloc_statistics_t) => void;
}
declare var malloc_introspection_t: malloc_introspection_t;

declare function malloc_make_nonpurgeable(ptr: any): number;

declare function malloc_make_purgeable(ptr: any): void;

declare function malloc_set_zone_name(zone: malloc_zone_t, name: string | any): void;

declare function malloc_size(ptr: any): number;

interface malloc_statistics_t {
	blocks_in_use: number;
	size_in_use: number;
	max_size_in_use: number;
	size_allocated: number;
}
declare var malloc_statistics_t: malloc_statistics_t;

declare function malloc_zone_batch_free(zone: malloc_zone_t, to_be_freed: any, num: number): void;

declare function malloc_zone_batch_malloc(zone: malloc_zone_t, size: number, results: any, num_requested: number): number;

declare function malloc_zone_calloc(zone: malloc_zone_t, num_items: number, size: number): any;

declare function malloc_zone_check(zone: malloc_zone_t): number;

declare function malloc_zone_disable_discharge_checking(zone: malloc_zone_t): void;

declare function malloc_zone_discharge(zone: malloc_zone_t, memory: any): void;

declare function malloc_zone_enable_discharge_checking(zone: malloc_zone_t): number;

declare function malloc_zone_enumerate_discharged_pointers(zone: malloc_zone_t, report_discharged: (p1: any, p2: any) => void): void;

declare function malloc_zone_free(zone: malloc_zone_t, ptr: any): void;

declare function malloc_zone_from_ptr(ptr: any): malloc_zone_t;

declare function malloc_zone_log(zone: malloc_zone_t, address: any): void;

declare function malloc_zone_malloc(zone: malloc_zone_t, size: number): any;

declare function malloc_zone_memalign(zone: malloc_zone_t, alignment: number, size: number): any;

declare function malloc_zone_pressure_relief(zone: malloc_zone_t, goal: number): number;

declare function malloc_zone_print(zone: malloc_zone_t, verbose: number): void;

declare function malloc_zone_print_ptr_info(ptr: any): void;

declare function malloc_zone_realloc(zone: malloc_zone_t, ptr: any, size: number): any;

declare function malloc_zone_register(zone: malloc_zone_t): void;

declare function malloc_zone_statistics(zone: malloc_zone_t, stats: malloc_statistics_t): void;

interface malloc_zone_t {
	reserved1: any;
	reserved2: any;
	size: (p1: malloc_zone_t, p2: any) => number;
	malloc: (p1: malloc_zone_t, p2: number) => any;
	calloc: (p1: malloc_zone_t, p2: number, p3: number) => any;
	valloc: (p1: malloc_zone_t, p2: number) => any;
	free: (p1: malloc_zone_t, p2: any) => void;
	realloc: (p1: malloc_zone_t, p2: any, p3: number) => any;
	destroy: (p1: malloc_zone_t) => void;
	zone_name: string;
	batch_malloc: (p1: malloc_zone_t, p2: number, p3: any, p4: number) => number;
	batch_free: (p1: malloc_zone_t, p2: any, p3: number) => void;
	introspect: malloc_introspection_t;
	version: number;
	memalign: (p1: malloc_zone_t, p2: number, p3: number) => any;
	free_definite_size: (p1: malloc_zone_t, p2: any, p3: number) => void;
	pressure_relief: (p1: malloc_zone_t, p2: number) => number;
	claimed_address: (p1: malloc_zone_t, p2: any) => number;
}
declare var malloc_zone_t: malloc_zone_t;

declare function malloc_zone_unregister(zone: malloc_zone_t): void;

declare function malloc_zone_valloc(zone: malloc_zone_t, size: number): any;

declare function map_fd(fd: number, offset: number, addr: number, find_space: number, numbytes: number): number;

declare var master_device_port: number;

interface mb_class_stat_t {
	mbcl_cname: number;
	mbcl_size: number;
	mbcl_total: number;
	mbcl_active: number;
	mbcl_infree: number;
	mbcl_slab_cnt: number;
	mbcl_pad: number;
	mbcl_alloc_cnt: number;
	mbcl_free_cnt: number;
	mbcl_notified: number;
	mbcl_purge_cnt: number;
	mbcl_fail_cnt: number;
	mbcl_ctotal: number;
	mbcl_release_cnt: number;
	mbcl_mc_state: number;
	mbcl_mc_cached: number;
	mbcl_mc_waiter_cnt: number;
	mbcl_mc_wretry_cnt: number;
	mbcl_mc_nwretry_cnt: number;
	mbcl_peak_reported: number;
	mbcl_reserved: number;
}
declare var mb_class_stat_t: mb_class_stat_t;

interface mb_stat_t {
	mbs_cnt: number;
	mbs_pad: number;
	mbs_class: mb_class_stat_t;
}
declare var mb_stat_t: mb_stat_t;

declare function mblen(__s: string | any, __n: number): number;

declare function mblen_l(p1: string | any, p2: number, p3: any): number;

interface mbstat {
	m_mbufs: number;
	m_clusters: number;
	m_spare: number;
	m_clfree: number;
	m_drops: number;
	m_wait: number;
	m_drain: number;
	m_mtypes: number;
	m_mcfail: number;
	m_mpfail: number;
	m_msize: number;
	m_mclbytes: number;
	m_minclsize: number;
	m_mlen: number;
	m_mhlen: number;
	m_bigclusters: number;
	m_bigclfree: number;
	m_bigmclbytes: number;
}
declare var mbstat: mbstat;

declare function mbstowcs(p1: number, p2: string | any, p3: number): number;

declare function mbstowcs_l(p1: number, p2: string | any, p3: number, p4: any): number;

declare function mbtowc(p1: number, p2: string | any, p3: number): number;

declare function mbtowc_l(p1: number, p2: string | any, p3: number, p4: any): number;

declare function mcprint(p1: string | any, p2: number): number;

declare function memccpy(__dst: any, __src: any, __c: number, __n: number): any;

declare function memchr(__s: any, __c: number, __n: number): any;

declare function memcmp(__s1: any, __s2: any, __n: number): number;

declare function memcpy(__dst: any, __src: any, __n: number): any;

declare function memmem(__big: any, __big_len: number, __little: any, __little_len: number): any;

declare function memmove(__dst: any, __src: any, __len: number): any;

interface memory_object_attr_info {
	copy_strategy: number;
	cluster_size: number;
	may_cache_object: number;
	temporary: number;
}
declare var memory_object_attr_info: memory_object_attr_info;

interface memory_object_behave_info {
	copy_strategy: number;
	temporary: number;
	invalidate: number;
	silent_overwrite: number;
	advisory_pageout: number;
}
declare var memory_object_behave_info: memory_object_behave_info;

interface memory_object_perf_info {
	cluster_size: number;
	may_cache: number;
}
declare var memory_object_perf_info: memory_object_perf_info;

enum memory_order {

	relaxed = 0,

	consume = 1,

	acquire = 2,

	release = 3,

	acq_rel = 4,

	seq_cst = 5
}


declare function memset(__b: any, __c: number, __len: number): any;

declare function memset_pattern16(__b: any, __pattern16: any, __len: number): void;

declare function memset_pattern4(__b: any, __pattern4: any, __len: number): void;

declare function memset_pattern8(__b: any, __pattern8: any, __len: number): void;

declare function memset_s(__s: any, __smax: number, __c: number, __n: number): number;

declare function mergesort(__base: any, __nel: number, __width: number, __compar: (p1: any, p2: any) => number): number;

declare function mergesort_b(__base: any, __nel: number, __width: number, __compar: (p1: any, p2: any) => number): number;

declare function meta(p1: _win_st, p2: boolean): number;

declare function mig_allocate(p1: number, p2: number): void;

declare function mig_dealloc_reply_port(reply_port: number): void;

declare function mig_deallocate(p1: number, p2: number): void;

declare function mig_get_reply_port(): number;

declare function mig_put_reply_port(reply_port: number): void;

interface mig_reply_error_t {
	Head: mach_msg_header_t;
	NDR: NDR_record_t;
	RetCode: number;
}
declare var mig_reply_error_t: mig_reply_error_t;

declare function mig_reply_setup(p1: mach_msg_header_t, p2: mach_msg_header_t): void;

declare function mig_strncpy(dest: string | any, src: string | any, len: number): number;

declare function mig_strncpy_zerofill(dest: string | any, src: string | any, len: number): number;

declare function mig_strncpy_zerofillFunction(dest: string | any, src: string | any, len: number): number;

interface mig_subsystem {
	server: (p1: mach_msg_header_t) => (p1: mach_msg_header_t, p2: mach_msg_header_t) => void;
	start: number;
	end: number;
	maxsize: number;
	reserved: number;
	routine: routine_descriptor;
}
declare var mig_subsystem: mig_subsystem;

interface mig_symtab_t {
	ms_routine_name: string;
	ms_routine_number: number;
	ms_routine: () => void;
}
declare var mig_symtab_t: mig_symtab_t;

declare function mincore(p1: any, p2: number, p3: string | any): number;

declare function minherit(p1: any, p2: number, p3: number): number;

declare function minphys(bp: any): number;

declare function mkdir(p1: string | any, p2: number): number;

declare function mkdirat(p1: number, p2: string | any, p3: number): number;

declare function mkdirx_np(p1: string | any, p2: any): number;

declare function mkdtemp(p1: string | any): string;

declare function mkdtempat_np(dfd: number, path: string | any): string;

declare function mkfifo(p1: string | any, p2: number): number;

declare function mkfifox_np(p1: string | any, p2: any): number;

declare function mknod(p1: string | any, p2: number, p3: number): number;

declare function mknodFunction(p1: string | any, p2: number, p3: number): number;

declare function mkostemp(path: string | any, oflags: number): number;

declare function mkostemps(path: string | any, slen: number, oflags: number): number;

declare function mkostempsat_np(dfd: number, path: string | any, slen: number, oflags: number): number;

declare function mkpath_np(path: string | any, omode: number): number;

declare function mkpathat_np(dfd: number, path: string | any, omode: number): number;

declare function mkstemp(p1: string | any): number;

declare function mkstempFunction(p1: string | any): number;

declare function mkstemps(p1: string | any, p2: number): number;

declare function mkstempsat_np(dfd: number, path: string | any, slen: number): number;

declare function mktemp(p1: string | any): string;

declare function mktempFunction(p1: string | any): string;

declare function mktime(p1: tm): number;

declare function mlock(p1: any, p2: number): number;

declare function mlockall(p1: number): number;

declare function mmap(p1: any, p2: number, p3: number, p4: number, p5: number, p6: number): any;

declare function modf(p1: number, p2: number): number;

declare function modff(p1: number, p2: number): number;

declare function modfl(p1: number, p2: number): number;

declare function modwatch(p1: eventreq, p2: number): number;

declare function mount(p1: string | any, p2: string | any, p3: number, p4: any): number;

declare function mouse_trafo(p1: number, p2: number, p3: boolean): boolean;

declare function mouseinterval(p1: number): number;

declare function mousemask(p1: number, p2: number): number;

declare function move(p1: number, p2: number): number;

declare function mprotect(p1: any, p2: number, p3: number): number;

interface msg {
	msg_next: msg;
	msg_type: number;
	msg_ts: number;
	msg_spot: number;
	label: any;
}
declare var msg: msg;

interface msg_labels_t {
	sender: number;
}
declare var msg_labels_t: msg_labels_t;

interface msgbuf {
	msg_magic: number;
	msg_size: number;
	msg_bufx: number;
	msg_bufr: number;
	msg_bufc: string;
}
declare var msgbuf: msgbuf;

declare function msgctl(p1: number, p2: number, p3: __msqid_ds_new): number;

declare function msgget(p1: number, p2: number): number;

interface msghdr {
	msg_name: any;
	msg_namelen: number;
	msg_iov: iovec;
	msg_iovlen: number;
	msg_control: any;
	msg_controllen: number;
	msg_flags: number;
}
declare var msghdr: msghdr;

interface msginfo {
	msgmax: number;
	msgmni: number;
	msgmnb: number;
	msgtql: number;
	msgssz: number;
	msgseg: number;
}
declare var msginfo: msginfo;

declare function msgrcv(p1: number, p2: any, p3: number, p4: number, p5: number): number;

declare function msgsnd(p1: number, p2: any, p3: number, p4: number): number;

declare function mstats(): mstatsStruct;

interface mstatsStruct {
	bytes_total: number;
	chunks_used: number;
	bytes_used: number;
	chunks_free: number;
	bytes_free: number;
}
declare var mstatsStruct: mstatsStruct;

declare function msync(p1: any, p2: number, p3: number): number;

declare function munlock(p1: any, p2: number): number;

declare function munlockall(): number;

declare function munmap(p1: any, p2: number): number;

declare function mvaddch(p1: number, p2: number, p3: number): number;

declare function mvaddchnstr(p1: number, p2: number, p3: number, p4: number): number;

declare function mvaddchstr(p1: number, p2: number, p3: number): number;

declare function mvaddnstr(p1: number, p2: number, p3: string | any, p4: number): number;

declare function mvaddstr(p1: number, p2: number, p3: string | any): number;

declare function mvchgat(p1: number, p2: number, p3: number, p4: number, p5: number, p6: any): number;

declare function mvcur(p1: number, p2: number, p3: number, p4: number): number;

declare function mvdelch(p1: number, p2: number): number;

declare function mvderwin(p1: _win_st, p2: number, p3: number): number;

declare function mvgetch(p1: number, p2: number): number;

declare function mvgetnstr(p1: number, p2: number, p3: string | any, p4: number): number;

declare function mvgetstr(p1: number, p2: number, p3: string | any): number;

declare function mvhline(p1: number, p2: number, p3: number, p4: number): number;

declare function mvinch(p1: number, p2: number): number;

declare function mvinchnstr(p1: number, p2: number, p3: number, p4: number): number;

declare function mvinchstr(p1: number, p2: number, p3: number): number;

declare function mvinnstr(p1: number, p2: number, p3: string | any, p4: number): number;

declare function mvinsch(p1: number, p2: number, p3: number): number;

declare function mvinsnstr(p1: number, p2: number, p3: string | any, p4: number): number;

declare function mvinsstr(p1: number, p2: number, p3: string | any): number;

declare function mvinstr(p1: number, p2: number, p3: string | any): number;

declare function mvvline(p1: number, p2: number, p3: number, p4: number): number;

declare function mvwaddch(p1: _win_st, p2: number, p3: number, p4: number): number;

declare function mvwaddchnstr(p1: _win_st, p2: number, p3: number, p4: number, p5: number): number;

declare function mvwaddchstr(p1: _win_st, p2: number, p3: number, p4: number): number;

declare function mvwaddnstr(p1: _win_st, p2: number, p3: number, p4: string | any, p5: number): number;

declare function mvwaddstr(p1: _win_st, p2: number, p3: number, p4: string | any): number;

declare function mvwchgat(p1: _win_st, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any): number;

declare function mvwdelch(p1: _win_st, p2: number, p3: number): number;

declare function mvwgetch(p1: _win_st, p2: number, p3: number): number;

declare function mvwgetnstr(p1: _win_st, p2: number, p3: number, p4: string | any, p5: number): number;

declare function mvwgetstr(p1: _win_st, p2: number, p3: number, p4: string | any): number;

declare function mvwhline(p1: _win_st, p2: number, p3: number, p4: number, p5: number): number;

declare function mvwin(p1: _win_st, p2: number, p3: number): number;

declare function mvwinch(p1: _win_st, p2: number, p3: number): number;

declare function mvwinchnstr(p1: _win_st, p2: number, p3: number, p4: number, p5: number): number;

declare function mvwinchstr(p1: _win_st, p2: number, p3: number, p4: number): number;

declare function mvwinnstr(p1: _win_st, p2: number, p3: number, p4: string | any, p5: number): number;

declare function mvwinsch(p1: _win_st, p2: number, p3: number, p4: number): number;

declare function mvwinsnstr(p1: _win_st, p2: number, p3: number, p4: string | any, p5: number): number;

declare function mvwinsstr(p1: _win_st, p2: number, p3: number, p4: string | any): number;

declare function mvwinstr(p1: _win_st, p2: number, p3: number, p4: string | any): number;

declare function mvwvline(p1: _win_st, p2: number, p3: number, p4: number, p5: number): number;

interface mymsg {
	mtype: number;
	mtext: number;
}
declare var mymsg: mymsg;

declare function nan(p1: string | any): number;

declare function nanf(p1: string | any): number;

declare function nanl(p1: string | any): number;

declare function nanosleep(__rqtp: timespec, __rmtp: timespec): number;

declare function napms(p1: number): number;

interface ndrv_info {
	ndrvsi_if_family: number;
	ndrvsi_if_unit: number;
	ndrvsi_if_name: number;
}
declare var ndrv_info: ndrv_info;

declare function nearbyint(p1: number): number;

declare function nearbyintf(p1: number): number;

declare function nearbyintl(p1: number): number;

interface net_event_data {
	if_family: number;
	if_unit: number;
	if_name: number;
}
declare var net_event_data: net_event_data;

interface netent {
	n_name: string;
	n_aliases: string;
	n_addrtype: number;
	n_net: number;
}
declare var netent: netent;

interface netfs_status {
	ns_status: number;
	ns_mountopts: number;
	ns_waittime: number;
	ns_threadcount: number;
	ns_threadids: number;
}
declare var netfs_status: netfs_status;

interface network_port_t {
	np_receiver: number;
	np_owner: number;
	np_puid: np_uid_t;
	np_sid: np_uid_t;
}
declare var network_port_t: network_port_t;

declare function newpad(p1: number, p2: number): _win_st;

declare var newscr: _win_st;

declare function newterm(p1: string | any, p2: FILE, p3: FILE): any;

declare function newwin(p1: number, p2: number, p3: number, p4: number): _win_st;

declare function nextafter(p1: number, p2: number): number;

declare function nextafterf(p1: number, p2: number): number;

declare function nextafterl(p1: number, p2: number): number;

declare function nexttoward(p1: number, p2: number): number;

declare function nexttowardf(p1: number, p2: number): number;

declare function nexttowardl(p1: number, p2: number): number;

declare function nextwctype(p1: number, p2: number): number;

declare function nextwctype_l(p1: number, p2: number, p3: any): number;

declare function nfssvc(p1: number, p2: any): number;

declare function nftw(p1: string | any, p2: (p1: string, p2: statStruct, p3: number, p4: FTW) => number, p3: number, p4: number): number;

declare function nice(p1: number): number;

declare function nl(): number;

declare function nl_langinfo(p1: number): string;

declare function nl_langinfo_l(p1: number, p2: any): string;

declare const noErr: number;

declare function nocbreak(): number;

declare function nodelay(p1: _win_st, p2: boolean): number;

declare function noecho(): number;

declare function nofilter(): void;

declare function nonl(): number;

declare function noqiflush(): void;

declare function noraw(): number;

declare const normal: number;

declare function notimeout(p1: _win_st, p2: boolean): number;

interface np_uid_t {
	np_uid_high: number;
	np_uid_low: number;
}
declare var np_uid_t: np_uid_t;

interface ntsid_t {
	sid_kind: number;
	sid_authcount: number;
	sid_authority: number;
	sid_authorities: number;
}
declare var ntsid_t: ntsid_t;

interface ombstat {
	m_mbufs: number;
	m_clusters: number;
	m_spare: number;
	m_clfree: number;
	m_drops: number;
	m_wait: number;
	m_drain: number;
	m_mtypes: number;
	m_mcfail: number;
	m_mpfail: number;
	m_msize: number;
	m_mclbytes: number;
	m_minclsize: number;
	m_mlen: number;
	m_mhlen: number;
}
declare var ombstat: ombstat;

declare function open_memstream(__bufp: string, __sizep: number): FILE;

declare function open_wmemstream(__bufp: number, __sizep: number): FILE;

declare function opendev(p1: string | any, p2: number, p3: number, p4: string): number;

declare function opendir(p1: string | any): DIR;

declare function openlog(p1: string | any, p2: number, p3: number): void;

declare function openpty(p1: number, p2: number, p3: string | any, p4: termios, p5: winsize): number;

declare function openx_np(p1: string | any, p2: number, p3: any): number;

declare var optarg: string;

declare var optargVar: string;

declare var opterr: number;

declare var opterrVar: number;

declare var optind: number;

declare var optindVar: number;

interface option {
	name: string;
	has_arg: number;
	flag: number;
	val: number;
}
declare var option: option;

declare var optopt: number;

declare var optoptVar: number;

declare var optreset: number;

declare var optresetVar: number;

interface os_unfair_lock {
	_os_unfair_lock_opaque: number;
}
declare var os_unfair_lock: os_unfair_lock;

declare function os_unfair_lock_assert_not_owner(lock: os_unfair_lock): void;

declare function os_unfair_lock_assert_owner(lock: os_unfair_lock): void;

declare function os_unfair_lock_lock(lock: os_unfair_lock): void;

declare function os_unfair_lock_trylock(lock: os_unfair_lock): boolean;

declare function os_unfair_lock_unlock(lock: os_unfair_lock): void;

interface ostat {
	st_dev: number;
	st_ino: number;
	st_mode: number;
	st_nlink: number;
	st_uid: number;
	st_gid: number;
	st_rdev: number;
	st_size: number;
	st_atimespec: timespec;
	st_mtimespec: timespec;
	st_ctimespec: timespec;
	st_blksize: number;
	st_blocks: number;
	st_flags: number;
	st_gen: number;
}
declare var ostat: ostat;

declare const outline: number;

declare function overlay(p1: _win_st, p2: _win_st): number;

declare function overwrite(p1: _win_st, p2: _win_st): number;

declare function pair_content(p1: number, p2: number, p3: number): number;

declare function panic_init(p1: number): void;

interface passwd {
	pw_name: string;
	pw_passwd: string;
	pw_uid: number;
	pw_gid: number;
	pw_change: number;
	pw_class: string;
	pw_gecos: string;
	pw_dir: string;
	pw_shell: string;
	pw_expire: number;
}
declare var passwd: passwd;

declare function pathconf(p1: string | any, p2: number): number;

declare function pause(): number;

interface pdat {
	_pad_y: number;
	_pad_x: number;
	_pad_top: number;
	_pad_left: number;
	_pad_bottom: number;
	_pad_right: number;
}
declare var pdat: pdat;

declare function pechochar(p1: _win_st, p2: number): number;

declare function perror(p1: string | any): void;

declare function pfctlinput(p1: number, p2: sockaddr): void;

declare function physio(f_strategy: (p1: any) => void, bp: any, dev: number, flags: number, f_minphys: (p1: any) => number, uio: any, blocksize: number): number;

declare function pid_for_task(t: number, x: number): number;

declare function pidlock(p1: string | any, p2: number, p3: number, p4: string | any): number;

declare function pipe(p1: number): number;

interface pipe_fdinfo {
	pfi: proc_fileinfo;
	pipeinfo: pipe_info;
}
declare var pipe_fdinfo: pipe_fdinfo;

interface pipe_info {
	pipe_stat: vinfo_stat;
	pipe_handle: number;
	pipe_peerhandle: number;
	pipe_status: number;
	rfu_1: number;
}
declare var pipe_info: pipe_info;

interface pipebuf {
	cnt: number;
	in: number;
	out: number;
	size: number;
	buffer: string;
}
declare var pipebuf: pipebuf;

interface plimit {
	pl_rlimit: rlimit;
	pl_refcnt: number;
}
declare var plimit: plimit;

declare function pnoutrefresh(p1: _win_st, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;

interface policy_bases {
	ts: policy_timeshare_base;
	rr: policy_rr_base;
	fifo: policy_fifo_base;
}
declare var policy_bases: policy_bases;

interface policy_fifo_base {
	base_priority: number;
}
declare var policy_fifo_base: policy_fifo_base;

interface policy_fifo_info {
	max_priority: number;
	base_priority: number;
	depressed: number;
	depress_priority: number;
}
declare var policy_fifo_info: policy_fifo_info;

interface policy_fifo_limit {
	max_priority: number;
}
declare var policy_fifo_limit: policy_fifo_limit;

interface policy_infos {
	ts: policy_timeshare_info;
	rr: policy_rr_info;
	fifo: policy_fifo_info;
}
declare var policy_infos: policy_infos;

interface policy_limits {
	ts: policy_timeshare_limit;
	rr: policy_rr_limit;
	fifo: policy_fifo_limit;
}
declare var policy_limits: policy_limits;

interface policy_rr_base {
	base_priority: number;
	quantum: number;
}
declare var policy_rr_base: policy_rr_base;

interface policy_rr_info {
	max_priority: number;
	base_priority: number;
	quantum: number;
	depressed: number;
	depress_priority: number;
}
declare var policy_rr_info: policy_rr_info;

interface policy_rr_limit {
	max_priority: number;
}
declare var policy_rr_limit: policy_rr_limit;

interface policy_timeshare_base {
	base_priority: number;
}
declare var policy_timeshare_base: policy_timeshare_base;

interface policy_timeshare_info {
	max_priority: number;
	base_priority: number;
	cur_priority: number;
	depressed: number;
	depress_priority: number;
}
declare var policy_timeshare_info: policy_timeshare_info;

interface policy_timeshare_limit {
	max_priority: number;
}
declare var policy_timeshare_limit: policy_timeshare_limit;

declare function poll(p1: pollfd, p2: number, p3: number): number;

interface pollfd {
	fd: number;
	events: number;
	revents: number;
}
declare var pollfd: pollfd;

declare function port_obj_init(p1: number): void;

declare var port_obj_table: port_obj_tentry;

declare var port_obj_table_size: number;

interface port_obj_tentry {
	pos_value: any;
	pos_type: number;
}
declare var port_obj_tentry: port_obj_tentry;

declare function posix2time(p1: number): number;

declare function posix_madvise(p1: any, p2: number, p3: number): number;

declare function posix_memalign(__memptr: any, __alignment: number, __size: number): number;

declare function posix_openpt(p1: number): number;

declare function posix_spawn(p1: number, p2: string | any, p3: any, p4: any, __argv: string, __envp: string): number;

declare function posix_spawn_file_actions_addchdir_np(p1: any, p2: string | any): number;

declare function posix_spawn_file_actions_addclose(p1: any, p2: number): number;

declare function posix_spawn_file_actions_adddup2(p1: any, p2: number, p3: number): number;

declare function posix_spawn_file_actions_addfchdir_np(p1: any, p2: number): number;

declare function posix_spawn_file_actions_addinherit_np(p1: any, p2: number): number;

declare function posix_spawn_file_actions_addopen(p1: any, p2: number, p3: string | any, p4: number, p5: number): number;

declare function posix_spawn_file_actions_destroy(p1: any): number;

declare function posix_spawn_file_actions_init(p1: any): number;

declare function posix_spawnattr_destroy(p1: any): number;

declare function posix_spawnattr_get_qos_class_np(__attr: any, __qos_class: qos_class_t): number;

declare function posix_spawnattr_getbinpref_np(p1: any, p2: number, p3: number, p4: number): number;

declare function posix_spawnattr_getflags(p1: any, p2: number): number;

declare function posix_spawnattr_getpgroup(p1: any, p2: number): number;

declare function posix_spawnattr_getsigdefault(p1: any, p2: number): number;

declare function posix_spawnattr_getsigmask(p1: any, p2: number): number;

declare function posix_spawnattr_init(p1: any): number;

declare function posix_spawnattr_set_qos_class_np(__attr: any, __qos_class: qos_class_t): number;

declare function posix_spawnattr_setauditsessionport_np(p1: any, p2: number): number;

declare function posix_spawnattr_setbinpref_np(p1: any, p2: number, p3: number, p4: number): number;

declare function posix_spawnattr_setexceptionports_np(p1: any, p2: number, p3: number, p4: number, p5: number): number;

declare function posix_spawnattr_setflags(p1: any, p2: number): number;

declare function posix_spawnattr_setpgroup(p1: any, p2: number): number;

declare function posix_spawnattr_setsigdefault(p1: any, p2: number): number;

declare function posix_spawnattr_setsigmask(p1: any, p2: number): number;

declare function posix_spawnattr_setspecialport_np(p1: any, p2: number, p3: number): number;

declare function posix_spawnp(p1: number, p2: string | any, p3: any, p4: any, __argv: string, __envp: string): number;

declare function pow(p1: number, p2: number): number;

declare function powf(p1: number, p2: number): number;

declare function powl(p1: number, p2: number): number;

declare function pread(__fd: number, __buf: any, __nbyte: number, __offset: number): number;

declare function prefresh(p1: _win_st, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;

interface proc_bsdinfo {
	pbi_flags: number;
	pbi_status: number;
	pbi_xstatus: number;
	pbi_pid: number;
	pbi_ppid: number;
	pbi_uid: number;
	pbi_gid: number;
	pbi_ruid: number;
	pbi_rgid: number;
	pbi_svuid: number;
	pbi_svgid: number;
	rfu_1: number;
	pbi_comm: number;
	pbi_name: number;
	pbi_nfiles: number;
	pbi_pgid: number;
	pbi_pjobc: number;
	e_tdev: number;
	e_tpgid: number;
	pbi_nice: number;
	pbi_start_tvsec: number;
	pbi_start_tvusec: number;
}
declare var proc_bsdinfo: proc_bsdinfo;

interface proc_bsdshortinfo {
	pbsi_pid: number;
	pbsi_ppid: number;
	pbsi_pgid: number;
	pbsi_status: number;
	pbsi_comm: number;
	pbsi_flags: number;
	pbsi_uid: number;
	pbsi_gid: number;
	pbsi_ruid: number;
	pbsi_rgid: number;
	pbsi_svuid: number;
	pbsi_svgid: number;
	pbsi_rfu: number;
}
declare var proc_bsdshortinfo: proc_bsdshortinfo;

interface proc_exitreasonbasicinfo {
	beri_namespace: number;
	beri_code: number;
	beri_flags: number;
	beri_reason_buf_size: number;
}
declare var proc_exitreasonbasicinfo: proc_exitreasonbasicinfo;

interface proc_exitreasoninfo {
	eri_namespace: number;
	eri_code: number;
	eri_flags: number;
	eri_reason_buf_size: number;
	eri_kcd_buf: number;
}
declare var proc_exitreasoninfo: proc_exitreasoninfo;

interface proc_fdinfo {
	proc_fd: number;
	proc_fdtype: number;
}
declare var proc_fdinfo: proc_fdinfo;

interface proc_fileinfo {
	fi_openflags: number;
	fi_status: number;
	fi_offset: number;
	fi_type: number;
	fi_guardflags: number;
}
declare var proc_fileinfo: proc_fileinfo;

interface proc_fileportinfo {
	proc_fileport: number;
	proc_fdtype: number;
}
declare var proc_fileportinfo: proc_fileportinfo;

interface proc_regioninfo {
	pri_protection: number;
	pri_max_protection: number;
	pri_inheritance: number;
	pri_flags: number;
	pri_offset: number;
	pri_behavior: number;
	pri_user_wired_count: number;
	pri_user_tag: number;
	pri_pages_resident: number;
	pri_pages_shared_now_private: number;
	pri_pages_swapped_out: number;
	pri_pages_dirtied: number;
	pri_ref_count: number;
	pri_shadow_depth: number;
	pri_share_mode: number;
	pri_private_pages_resident: number;
	pri_shared_pages_resident: number;
	pri_obj_id: number;
	pri_depth: number;
	pri_address: number;
	pri_size: number;
}
declare var proc_regioninfo: proc_regioninfo;

interface proc_regionpath {
	prpo_addr: number;
	prpo_regionlength: number;
	prpo_path: number;
}
declare var proc_regionpath: proc_regionpath;

interface proc_regionwithpathinfo {
	prp_prinfo: proc_regioninfo;
	prp_vip: vnode_info_path;
}
declare var proc_regionwithpathinfo: proc_regionwithpathinfo;

interface proc_rlimit_control_wakeupmon {
	wm_flags: number;
	wm_rate: number;
}
declare var proc_rlimit_control_wakeupmon: proc_rlimit_control_wakeupmon;

interface proc_taskallinfo {
	pbsd: proc_bsdinfo;
	ptinfo: proc_taskinfo;
}
declare var proc_taskallinfo: proc_taskallinfo;

interface proc_taskinfo {
	pti_virtual_size: number;
	pti_resident_size: number;
	pti_total_user: number;
	pti_total_system: number;
	pti_threads_user: number;
	pti_threads_system: number;
	pti_policy: number;
	pti_faults: number;
	pti_pageins: number;
	pti_cow_faults: number;
	pti_messages_sent: number;
	pti_messages_received: number;
	pti_syscalls_mach: number;
	pti_syscalls_unix: number;
	pti_csw: number;
	pti_threadnum: number;
	pti_numrunning: number;
	pti_priority: number;
}
declare var proc_taskinfo: proc_taskinfo;

interface proc_threadinfo {
	pth_user_time: number;
	pth_system_time: number;
	pth_cpu_usage: number;
	pth_policy: number;
	pth_run_state: number;
	pth_flags: number;
	pth_sleep_time: number;
	pth_curpri: number;
	pth_priority: number;
	pth_maxpriority: number;
	pth_name: number;
}
declare var proc_threadinfo: proc_threadinfo;

interface proc_threadwithpathinfo {
	pt: proc_threadinfo;
	pvip: vnode_info_path;
}
declare var proc_threadwithpathinfo: proc_threadwithpathinfo;

interface proc_vnodepathinfo {
	pvi_cdir: vnode_info_path;
	pvi_rdir: vnode_info_path;
}
declare var proc_vnodepathinfo: proc_vnodepathinfo;

interface proc_workqueueinfo {
	pwq_nthreads: number;
	pwq_runthreads: number;
	pwq_blockedthreads: number;
	pwq_state: number;
}
declare var proc_workqueueinfo: proc_workqueueinfo;

declare function processor_assign(processor: number, new_set: number, wait: number): number;

interface processor_basic_info {
	cpu_type: number;
	cpu_subtype: number;
	running: number;
	slot_num: number;
	is_master: number;
}
declare var processor_basic_info: processor_basic_info;

declare function processor_control(processor: number, processor_cmd: number, processor_cmdCnt: number): number;

interface processor_cpu_load_info {
	cpu_ticks: number;
}
declare var processor_cpu_load_info: processor_cpu_load_info;

declare function processor_exit(processor: number): number;

declare function processor_get_assignment(processor: number, assigned_set: number): number;

declare function processor_info(processor: number, flavor: number, host: number, processor_info_out: number, processor_info_outCnt: number): number;

interface processor_set_basic_info {
	processor_count: number;
	default_policy: number;
}
declare var processor_set_basic_info: processor_set_basic_info;

declare function processor_set_create(host: number, new_set: number, new_name: number): number;

declare function processor_set_default(host: number, default_set: number): number;

declare function processor_set_destroy(set: number): number;

declare function processor_set_info(set_name: number, flavor: number, host: number, info_out: number, info_outCnt: number): number;

interface processor_set_load_info {
	task_count: number;
	thread_count: number;
	load_average: number;
	mach_factor: number;
}
declare var processor_set_load_info: processor_set_load_info;

declare function processor_set_max_priority(processor_set: number, max_priority: number, change_threads: number): number;

declare function processor_set_policy_control(pset: number, flavor: number, policy_info: number, policy_infoCnt: number, change: number): number;

declare function processor_set_policy_disable(processor_set: number, policy: number, change_threads: number): number;

declare function processor_set_policy_enable(processor_set: number, policy: number): number;

declare function processor_set_stack_usage(pset: number, ltotal: number, space: number, resident: number, maxusage: number, maxstack: number): number;

declare function processor_set_statistics(pset: number, flavor: number, info_out: number, info_outCnt: number): number;

declare function processor_set_tasks(processor_set: number, task_list: number, task_listCnt: number): number;

declare function processor_set_threads(processor_set: number, thread_list: number, thread_listCnt: number): number;

declare function processor_start(processor: number): number;

declare function profil(p1: string | any, p2: number, p3: number, p4: number): number;

interface protoent {
	p_name: string;
	p_aliases: string;
	p_proto: number;
}
declare var protoent: protoent;

declare function pselect(p1: number, p2: fd_set, p3: fd_set, p4: fd_set, p5: timespec, p6: number): number;

interface psem_fdinfo {
	pfi: proc_fileinfo;
	pseminfo: psem_info;
}
declare var psem_fdinfo: psem_fdinfo;

interface psem_info {
	psem_stat: vinfo_stat;
	psem_name: number;
}
declare var psem_info: psem_info;

interface pseminfo {
	psem_flags: number;
	psem_usecount: number;
	psem_mode: number;
	psem_uid: number;
	psem_gid: number;
	psem_name: number;
	psem_semobject: any;
	psem_label: any;
	psem_creator_pid: number;
	psem_creator_uniqueid: number;
}
declare var pseminfo: pseminfo;

interface pshm_fdinfo {
	pfi: proc_fileinfo;
	pshminfo: pshm_info;
}
declare var pshm_fdinfo: pshm_fdinfo;

interface pshm_info {
	pshm_stat: vinfo_stat;
	pshm_mappaddr: number;
	pshm_name: number;
}
declare var pshm_info: pshm_info;

interface pshminfo {
	pshm_flags: number;
	pshm_usecount: number;
	pshm_length: number;
	pshm_mode: number;
	pshm_uid: number;
	pshm_gid: number;
	pshm_name: number;
	pshm_memobject: any;
	pshm_label: any;
}
declare var pshminfo: pshminfo;

declare function psignal(p1: number, p2: string | any): void;

declare function psort(__base: any, __nel: number, __width: number, __compar: (p1: any, p2: any) => number): void;

declare function psort_b(__base: any, __nel: number, __width: number, __compar: (p1: any, p2: any) => number): void;

declare function psort_r(__base: any, __nel: number, __width: number, p4: any, __compar: (p1: any, p2: any, p3: any) => number): void;

interface pstats {
	p_ru: rusage;
	p_cru: rusage;
	p_prof: uprof;
	ps_start: number;
}
declare var pstats: pstats;

declare function pthread_atfork(p1: () => void, p2: () => void, p3: () => void): number;

declare function pthread_attr_destroy(p1: _opaque_pthread_attr_t): number;

declare function pthread_attr_get_qos_class_np(__attr: _opaque_pthread_attr_t, __qos_class: qos_class_t, __relative_priority: number): number;

declare function pthread_attr_getdetachstate(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_getguardsize(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_getinheritsched(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_getschedparam(p1: _opaque_pthread_attr_t, p2: sched_param): number;

declare function pthread_attr_getschedpolicy(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_getscope(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_getstack(p1: _opaque_pthread_attr_t, p2: any, p3: number): number;

declare function pthread_attr_getstackaddr(p1: _opaque_pthread_attr_t, p2: any): number;

declare function pthread_attr_getstacksize(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_init(p1: _opaque_pthread_attr_t): number;

declare function pthread_attr_set_qos_class_np(__attr: _opaque_pthread_attr_t, __qos_class: qos_class_t, __relative_priority: number): number;

declare function pthread_attr_setdetachstate(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_setguardsize(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_setinheritsched(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_setschedparam(p1: _opaque_pthread_attr_t, p2: sched_param): number;

declare function pthread_attr_setschedpolicy(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_setscope(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_attr_setstack(p1: _opaque_pthread_attr_t, p2: any, p3: number): number;

declare function pthread_attr_setstackaddr(p1: _opaque_pthread_attr_t, p2: any): number;

declare function pthread_attr_setstacksize(p1: _opaque_pthread_attr_t, p2: number): number;

declare function pthread_cancel(p1: _opaque_pthread_t): number;

declare function pthread_cond_broadcast(p1: _opaque_pthread_cond_t): number;

declare function pthread_cond_destroy(p1: _opaque_pthread_cond_t): number;

declare function pthread_cond_init(p1: _opaque_pthread_cond_t, p2: _opaque_pthread_condattr_t): number;

declare function pthread_cond_signal(p1: _opaque_pthread_cond_t): number;

declare function pthread_cond_signal_thread_np(p1: _opaque_pthread_cond_t, p2: _opaque_pthread_t): number;

declare function pthread_cond_timedwait(p1: _opaque_pthread_cond_t, p2: _opaque_pthread_mutex_t, p3: timespec): number;

declare function pthread_cond_timedwait_relative_np(p1: _opaque_pthread_cond_t, p2: _opaque_pthread_mutex_t, p3: timespec): number;

declare function pthread_cond_wait(p1: _opaque_pthread_cond_t, p2: _opaque_pthread_mutex_t): number;

declare function pthread_condattr_destroy(p1: _opaque_pthread_condattr_t): number;

declare function pthread_condattr_getpshared(p1: _opaque_pthread_condattr_t, p2: number): number;

declare function pthread_condattr_init(p1: _opaque_pthread_condattr_t): number;

declare function pthread_condattr_setpshared(p1: _opaque_pthread_condattr_t, p2: number): number;

declare function pthread_create(p1: _opaque_pthread_t, p2: _opaque_pthread_attr_t, p3: (p1: any) => any, p4: any): number;

declare function pthread_create_from_mach_thread(p1: _opaque_pthread_t, p2: _opaque_pthread_attr_t, p3: (p1: any) => any, p4: any): number;

declare function pthread_create_suspended_np(p1: _opaque_pthread_t, p2: _opaque_pthread_attr_t, p3: (p1: any) => any, p4: any): number;

declare function pthread_detach(p1: _opaque_pthread_t): number;

declare function pthread_equal(p1: _opaque_pthread_t, p2: _opaque_pthread_t): number;

declare function pthread_exit(p1: any): void;

declare function pthread_from_mach_thread_np(p1: number): _opaque_pthread_t;

declare function pthread_get_qos_class_np(__pthread: _opaque_pthread_t, __qos_class: qos_class_t, __relative_priority: number): number;

declare function pthread_get_stackaddr_np(p1: _opaque_pthread_t): any;

declare function pthread_get_stacksize_np(p1: _opaque_pthread_t): number;

declare function pthread_getconcurrency(): number;

declare function pthread_getname_np(p1: _opaque_pthread_t, p2: string | any, p3: number): number;

declare function pthread_getschedparam(p1: _opaque_pthread_t, p2: number, p3: sched_param): number;

declare function pthread_getspecific(p1: number): any;

declare function pthread_getugid_np(p1: number, p2: number): number;

declare function pthread_is_threaded_np(): number;

declare function pthread_join(p1: _opaque_pthread_t, p2: any): number;

declare function pthread_key_create(p1: number, p2: (p1: any) => void): number;

declare function pthread_key_delete(p1: number): number;

declare function pthread_kill(p1: _opaque_pthread_t, p2: number): number;

declare function pthread_killFunction(p1: _opaque_pthread_t, p2: number): number;

declare function pthread_mach_thread_np(p1: _opaque_pthread_t): number;

declare function pthread_main_np(): number;

declare function pthread_mutex_destroy(p1: _opaque_pthread_mutex_t): number;

declare function pthread_mutex_getprioceiling(p1: _opaque_pthread_mutex_t, p2: number): number;

declare function pthread_mutex_init(p1: _opaque_pthread_mutex_t, p2: _opaque_pthread_mutexattr_t): number;

declare function pthread_mutex_lock(p1: _opaque_pthread_mutex_t): number;

declare function pthread_mutex_setprioceiling(p1: _opaque_pthread_mutex_t, p2: number, p3: number): number;

declare function pthread_mutex_trylock(p1: _opaque_pthread_mutex_t): number;

declare function pthread_mutex_unlock(p1: _opaque_pthread_mutex_t): number;

declare function pthread_mutexattr_destroy(p1: _opaque_pthread_mutexattr_t): number;

declare function pthread_mutexattr_getpolicy_np(p1: _opaque_pthread_mutexattr_t, p2: number): number;

declare function pthread_mutexattr_getprioceiling(p1: _opaque_pthread_mutexattr_t, p2: number): number;

declare function pthread_mutexattr_getprotocol(p1: _opaque_pthread_mutexattr_t, p2: number): number;

declare function pthread_mutexattr_getpshared(p1: _opaque_pthread_mutexattr_t, p2: number): number;

declare function pthread_mutexattr_gettype(p1: _opaque_pthread_mutexattr_t, p2: number): number;

declare function pthread_mutexattr_init(p1: _opaque_pthread_mutexattr_t): number;

declare function pthread_mutexattr_setpolicy_np(p1: _opaque_pthread_mutexattr_t, p2: number): number;

declare function pthread_mutexattr_setprioceiling(p1: _opaque_pthread_mutexattr_t, p2: number): number;

declare function pthread_mutexattr_setprotocol(p1: _opaque_pthread_mutexattr_t, p2: number): number;

declare function pthread_mutexattr_setpshared(p1: _opaque_pthread_mutexattr_t, p2: number): number;

declare function pthread_mutexattr_settype(p1: _opaque_pthread_mutexattr_t, p2: number): number;

declare function pthread_override_qos_class_end_np(__override: any): number;

declare function pthread_override_qos_class_start_np(__pthread: _opaque_pthread_t, __qos_class: qos_class_t, __relative_priority: number): any;

declare function pthread_rwlock_destroy(p1: _opaque_pthread_rwlock_t): number;

declare function pthread_rwlock_init(p1: _opaque_pthread_rwlock_t, p2: _opaque_pthread_rwlockattr_t): number;

declare function pthread_rwlock_rdlock(p1: _opaque_pthread_rwlock_t): number;

declare function pthread_rwlock_tryrdlock(p1: _opaque_pthread_rwlock_t): number;

declare function pthread_rwlock_trywrlock(p1: _opaque_pthread_rwlock_t): number;

declare function pthread_rwlock_unlock(p1: _opaque_pthread_rwlock_t): number;

declare function pthread_rwlock_wrlock(p1: _opaque_pthread_rwlock_t): number;

declare function pthread_rwlockattr_destroy(p1: _opaque_pthread_rwlockattr_t): number;

declare function pthread_rwlockattr_getpshared(p1: _opaque_pthread_rwlockattr_t, p2: number): number;

declare function pthread_rwlockattr_init(p1: _opaque_pthread_rwlockattr_t): number;

declare function pthread_rwlockattr_setpshared(p1: _opaque_pthread_rwlockattr_t, p2: number): number;

declare function pthread_self(): _opaque_pthread_t;

declare function pthread_set_qos_class_self_np(__qos_class: qos_class_t, __relative_priority: number): number;

declare function pthread_setcancelstate(p1: number, p2: number): number;

declare function pthread_setcanceltype(p1: number, p2: number): number;

declare function pthread_setconcurrency(p1: number): number;

declare function pthread_setname_np(p1: string | any): number;

declare function pthread_setschedparam(p1: _opaque_pthread_t, p2: number, p3: sched_param): number;

declare function pthread_setspecific(p1: number, p2: any): number;

declare function pthread_setugid_np(p1: number, p2: number): number;

declare function pthread_sigmask(p1: number, p2: number, p3: number): number;

declare function pthread_sigmaskFunction(p1: number, p2: number, p3: number): number;

declare function pthread_testcancel(): void;

declare function pthread_threadid_np(p1: _opaque_pthread_t, p2: number): number;

declare function pthread_yield_np(): void;

declare function ptsname(p1: number): string;

declare function ptsname_r(fildes: number, buffer: string | any, buflen: number): number;

declare function putc(p1: number, p2: FILE): number;

declare function putc_unlocked(p1: number, p2: FILE): number;

declare function putchar(p1: number): number;

declare function putchar_unlocked(p1: number): number;

declare function putenv(p1: string | any): number;

declare function putp(p1: string | any): number;

declare function puts(p1: string | any): number;

declare function pututxline(p1: utmpx): utmpx;

declare function putw(p1: number, p2: FILE): number;

declare function putwc(p1: number, p2: FILE): number;

declare function putwc_l(p1: number, p2: FILE, p3: any): number;

declare function putwchar(p1: number): number;

declare function putwchar_l(p1: number, p2: any): number;

declare function putwin(p1: _win_st, p2: FILE): number;

declare function pwrite(__fd: number, __buf: any, __nbyte: number, __offset: number): number;

interface qelem {
	q_forw: qelem;
	q_back: qelem;
	q_data: string;
}
declare var qelem: qelem;

declare function qiflush(): void;

declare function qos_class_main(): qos_class_t;

declare function qos_class_self(): qos_class_t;

enum qos_class_t {

	QOS_CLASS_USER_INTERACTIVE = 33,

	QOS_CLASS_USER_INITIATED = 25,

	QOS_CLASS_DEFAULT = 21,

	QOS_CLASS_UTILITY = 17,

	QOS_CLASS_BACKGROUND = 9,

	QOS_CLASS_UNSPECIFIED = 0
}


declare function qsort(__base: any, __nel: number, __width: number, __compar: (p1: any, p2: any) => number): void;

declare function qsort_b(__base: any, __nel: number, __width: number, __compar: (p1: any, p2: any) => number): void;

declare function qsort_r(__base: any, __nel: number, __width: number, p4: any, __compar: (p1: any, p2: any, p3: any) => number): void;

declare function quotactl(p1: string | any, p2: number, p3: number, p4: string | any): number;

declare function radixsort(__base: string, __nel: number, __table: string | any, __endbyte: number): number;

interface radvisory {
	ra_offset: number;
	ra_count: number;
}
declare var radvisory: radvisory;

declare function raise(p1: number): number;

declare function raw(): number;

interface rawarc {
	raw_frompc: number;
	raw_selfpc: number;
	raw_count: number;
}
declare var rawarc: rawarc;

interface rawarc_64 {
	raw_frompc: number;
	raw_selfpc: number;
	raw_count: number;
}
declare var rawarc_64: rawarc_64;

interface rawarc_order {
	raw_frompc: number;
	raw_selfpc: number;
	raw_count: number;
	raw_order: number;
}
declare var rawarc_order: rawarc_order;

interface rawarc_order_64 {
	raw_frompc: number;
	raw_selfpc: number;
	raw_count: number;
	raw_order: number;
}
declare var rawarc_order_64: rawarc_order_64;

interface rb_node_t {
	opaque: any;
}
declare var rb_node_t: rb_node_t;

declare function rb_tree_count(p1: rb_tree_t): number;

declare function rb_tree_find_node(p1: rb_tree_t, p2: any): any;

declare function rb_tree_find_node_geq(p1: rb_tree_t, p2: any): any;

declare function rb_tree_find_node_leq(p1: rb_tree_t, p2: any): any;

declare function rb_tree_init(p1: rb_tree_t, p2: rb_tree_ops_t): void;

declare function rb_tree_insert_node(p1: rb_tree_t, p2: any): any;

declare function rb_tree_iterate(p1: rb_tree_t, p2: any, p3: number): any;

interface rb_tree_ops_t {
	rbto_compare_nodes: (p1: any, p2: any, p3: any) => number;
	rbto_compare_key: (p1: any, p2: any, p3: any) => number;
	rbto_node_offset: number;
	rbto_context: any;
}
declare var rb_tree_ops_t: rb_tree_ops_t;

declare function rb_tree_remove_node(p1: rb_tree_t, p2: any): void;

interface rb_tree_t {
	opaque: any;
}
declare var rb_tree_t: rb_tree_t;

declare function rcmd(p1: string, p2: number, p3: string | any, p4: string | any, p5: string | any, p6: number): number;

declare function rcmd_af(p1: string, p2: number, p3: string | any, p4: string | any, p5: string | any, p6: number, p7: number): number;

declare function read(p1: number, p2: any, p3: number): number;

declare function readdir(p1: DIR): dirent;

declare function readdir_r(p1: DIR, p2: dirent, p3: dirent): number;

declare function readlink(p1: string | any, p2: string | any, p3: number): number;

declare function readlinkat(p1: number, p2: string | any, p3: string | any, p4: number): number;

declare function readpassphrase(p1: string | any, p2: string | any, p3: number, p4: number): string;

declare function readv(p1: number, p2: iovec, p3: number): number;

declare function realloc(__ptr: any, __size: number): any;

declare function reallocf(__ptr: any, __size: number): any;

declare function realpath(p1: string | any, p2: string | any): string;

declare function reboot(p1: number): number;

declare function rebootFunction(howto: number): number;

declare function reboot_np(howto: number, message: string | any): number;

declare function recv(p1: number, p2: any, p3: number, p4: number): number;

declare function recvfrom(p1: number, p2: any, p3: number, p4: number, p5: sockaddr, p6: number): number;

declare function recvmsg(p1: number, p2: msghdr, p3: number): number;

declare function redrawwin(p1: _win_st): number;

declare function refresh(): number;

declare function regcomp(p1: regex_t, p2: string | any, p3: number): number;

declare function regcomp_l(p1: regex_t, p2: string | any, p3: number, p4: any): number;

declare function regerror(p1: number, p2: regex_t, p3: string | any, p4: number): number;

interface regex_t {
	re_magic: number;
	re_nsub: number;
	re_endp: string;
	re_g: any;
}
declare var regex_t: regex_t;

declare function regexec(p1: regex_t, p2: string | any, p3: number, __pmatch: regmatch_t, p5: number): number;

declare function regfree(p1: regex_t): void;

interface regmatch_t {
	rm_so: number;
	rm_eo: number;
}
declare var regmatch_t: regmatch_t;

declare function regncomp(p1: regex_t, p2: string | any, p3: number, p4: number): number;

declare function regncomp_l(p1: regex_t, p2: string | any, p3: number, p4: number, p5: any): number;

declare function regnexec(p1: regex_t, p2: string | any, p3: number, p4: number, __pmatch: regmatch_t, p6: number): number;

declare function regwcomp(p1: regex_t, p2: number, p3: number): number;

declare function regwcomp_l(p1: regex_t, p2: number, p3: number, p4: any): number;

declare function regwexec(p1: regex_t, p2: number, p3: number, __pmatch: regmatch_t, p5: number): number;

declare function regwncomp(p1: regex_t, p2: number, p3: number, p4: number): number;

declare function regwnexec(p1: regex_t, p2: number, p3: number, p4: number, __pmatch: regmatch_t, p6: number): number;

declare function regwnexec_l(p1: regex_t, p2: number, p3: number, p4: number, __pmatch: regmatch_t, p6: number, p7: any): number;

declare function remainder(p1: number, p2: number): number;

declare function remainderf(p1: number, p2: number): number;

declare function remainderl(p1: number, p2: number): number;

declare function remove(p1: string | any): number;

declare function removexattr(path: string | any, name: string | any, options: number): number;

declare function remque(p1: any): void;

declare function remquo(p1: number, p2: number, p3: number): number;

declare function remquof(p1: number, p2: number, p3: number): number;

declare function remquol(p1: number, p2: number, p3: number): number;

declare function rename(__old: string | any, __new: string | any): number;

declare function reset_prog_mode(): number;

declare function reset_shell_mode(): number;

declare function resetty(): number;

declare function resize_term(p1: number, p2: number): number;

declare function resizeterm(p1: number, p2: number): number;

declare function revoke(p1: string | any): number;

declare function rewind(p1: FILE): void;

declare function rewinddir(p1: DIR): void;

declare function rindex(p1: string | any, p2: number): string;

declare function rint(p1: number): number;

declare function rintf(p1: number): number;

declare function rintl(p1: number): number;

declare function ripoffline(p1: number, p2: (p1: _win_st, p2: number) => number): number;

interface rlimit {
	rlim_cur: number;
	rlim_max: number;
}
declare var rlimit: rlimit;

declare function rmdir(p1: string | any): number;

declare function round(p1: number): number;

declare function roundf(p1: number): number;

declare function roundl(p1: number): number;

interface routine_descriptor {
	impl_routine: () => number;
	stub_routine: (p1: mach_msg_header_t, p2: mach_msg_header_t) => void;
	argc: number;
	descr_count: number;
	arg_descr: mach_msg_type_descriptor_t;
	max_reply_msg: number;
}
declare var routine_descriptor: routine_descriptor;

interface rpc_routine_arg_descriptor {
	type: number;
	size: number;
	count: number;
	offset: number;
}
declare var rpc_routine_arg_descriptor: rpc_routine_arg_descriptor;

interface rpc_routine_descriptor {
	impl_routine: () => number;
	stub_routine: (p1: mach_msg_header_t, p2: mach_msg_header_t) => void;
	argc: number;
	descr_count: number;
	arg_descr: rpc_routine_arg_descriptor;
	max_reply_msg: number;
}
declare var rpc_routine_descriptor: rpc_routine_descriptor;

interface rpc_signature {
	rd: rpc_routine_descriptor;
	rad: rpc_routine_arg_descriptor;
}
declare var rpc_signature: rpc_signature;

interface rpc_subsystem {
	reserved: any;
	start: number;
	end: number;
	maxsize: number;
	base_addr: number;
	routine: rpc_routine_descriptor;
	arg_descriptor: rpc_routine_arg_descriptor;
}
declare var rpc_subsystem: rpc_subsystem;

interface rpcent {
	r_name: string;
	r_aliases: string;
	r_number: number;
}
declare var rpcent: rpcent;

declare function rpmatch(p1: string | any): number;

declare function rresvport(p1: number): number;

declare function rresvport_af(p1: number, p2: number): number;

interface rslvmulti_req {
	sa: sockaddr;
	llsa: sockaddr;
}
declare var rslvmulti_req: rslvmulti_req;

interface rt_addrinfo {
	rti_addrs: number;
	rti_info: sockaddr;
}
declare var rt_addrinfo: rt_addrinfo;

interface rt_metrics {
	rmx_locks: number;
	rmx_mtu: number;
	rmx_hopcount: number;
	rmx_expire: number;
	rmx_recvpipe: number;
	rmx_sendpipe: number;
	rmx_ssthresh: number;
	rmx_rtt: number;
	rmx_rttvar: number;
	rmx_pksent: number;
	rmx_state: number;
	rmx_filler: number;
}
declare var rt_metrics: rt_metrics;

interface rt_msghdr {
	rtm_msglen: number;
	rtm_version: number;
	rtm_type: number;
	rtm_index: number;
	rtm_flags: number;
	rtm_addrs: number;
	rtm_pid: number;
	rtm_seq: number;
	rtm_errno: number;
	rtm_use: number;
	rtm_inits: number;
	rtm_rmx: rt_metrics;
}
declare var rt_msghdr: rt_msghdr;

interface rt_msghdr2 {
	rtm_msglen: number;
	rtm_version: number;
	rtm_type: number;
	rtm_index: number;
	rtm_flags: number;
	rtm_addrs: number;
	rtm_refcnt: number;
	rtm_parentflags: number;
	rtm_reserved: number;
	rtm_use: number;
	rtm_inits: number;
	rtm_rmx: rt_metrics;
}
declare var rt_msghdr2: rt_msghdr2;

interface rtstat {
	rts_badredirect: number;
	rts_dynamic: number;
	rts_newgateway: number;
	rts_unreach: number;
	rts_wildcard: number;
	rts_badrtgwroute: number;
}
declare var rtstat: rtstat;

interface rusage {
	ru_utime: timeval;
	ru_stime: timeval;
	ru_maxrss: number;
	ru_ixrss: number;
	ru_idrss: number;
	ru_isrss: number;
	ru_minflt: number;
	ru_majflt: number;
	ru_nswap: number;
	ru_inblock: number;
	ru_oublock: number;
	ru_msgsnd: number;
	ru_msgrcv: number;
	ru_nsignals: number;
	ru_nvcsw: number;
	ru_nivcsw: number;
}
declare var rusage: rusage;

interface rusage_info_v0 {
	ri_uuid: number;
	ri_user_time: number;
	ri_system_time: number;
	ri_pkg_idle_wkups: number;
	ri_interrupt_wkups: number;
	ri_pageins: number;
	ri_wired_size: number;
	ri_resident_size: number;
	ri_phys_footprint: number;
	ri_proc_start_abstime: number;
	ri_proc_exit_abstime: number;
}
declare var rusage_info_v0: rusage_info_v0;

interface rusage_info_v1 {
	ri_uuid: number;
	ri_user_time: number;
	ri_system_time: number;
	ri_pkg_idle_wkups: number;
	ri_interrupt_wkups: number;
	ri_pageins: number;
	ri_wired_size: number;
	ri_resident_size: number;
	ri_phys_footprint: number;
	ri_proc_start_abstime: number;
	ri_proc_exit_abstime: number;
	ri_child_user_time: number;
	ri_child_system_time: number;
	ri_child_pkg_idle_wkups: number;
	ri_child_interrupt_wkups: number;
	ri_child_pageins: number;
	ri_child_elapsed_abstime: number;
}
declare var rusage_info_v1: rusage_info_v1;

interface rusage_info_v2 {
	ri_uuid: number;
	ri_user_time: number;
	ri_system_time: number;
	ri_pkg_idle_wkups: number;
	ri_interrupt_wkups: number;
	ri_pageins: number;
	ri_wired_size: number;
	ri_resident_size: number;
	ri_phys_footprint: number;
	ri_proc_start_abstime: number;
	ri_proc_exit_abstime: number;
	ri_child_user_time: number;
	ri_child_system_time: number;
	ri_child_pkg_idle_wkups: number;
	ri_child_interrupt_wkups: number;
	ri_child_pageins: number;
	ri_child_elapsed_abstime: number;
	ri_diskio_bytesread: number;
	ri_diskio_byteswritten: number;
}
declare var rusage_info_v2: rusage_info_v2;

interface rusage_info_v3 {
	ri_uuid: number;
	ri_user_time: number;
	ri_system_time: number;
	ri_pkg_idle_wkups: number;
	ri_interrupt_wkups: number;
	ri_pageins: number;
	ri_wired_size: number;
	ri_resident_size: number;
	ri_phys_footprint: number;
	ri_proc_start_abstime: number;
	ri_proc_exit_abstime: number;
	ri_child_user_time: number;
	ri_child_system_time: number;
	ri_child_pkg_idle_wkups: number;
	ri_child_interrupt_wkups: number;
	ri_child_pageins: number;
	ri_child_elapsed_abstime: number;
	ri_diskio_bytesread: number;
	ri_diskio_byteswritten: number;
	ri_cpu_time_qos_default: number;
	ri_cpu_time_qos_maintenance: number;
	ri_cpu_time_qos_background: number;
	ri_cpu_time_qos_utility: number;
	ri_cpu_time_qos_legacy: number;
	ri_cpu_time_qos_user_initiated: number;
	ri_cpu_time_qos_user_interactive: number;
	ri_billed_system_time: number;
	ri_serviced_system_time: number;
}
declare var rusage_info_v3: rusage_info_v3;

interface rusage_info_v4 {
	ri_uuid: number;
	ri_user_time: number;
	ri_system_time: number;
	ri_pkg_idle_wkups: number;
	ri_interrupt_wkups: number;
	ri_pageins: number;
	ri_wired_size: number;
	ri_resident_size: number;
	ri_phys_footprint: number;
	ri_proc_start_abstime: number;
	ri_proc_exit_abstime: number;
	ri_child_user_time: number;
	ri_child_system_time: number;
	ri_child_pkg_idle_wkups: number;
	ri_child_interrupt_wkups: number;
	ri_child_pageins: number;
	ri_child_elapsed_abstime: number;
	ri_diskio_bytesread: number;
	ri_diskio_byteswritten: number;
	ri_cpu_time_qos_default: number;
	ri_cpu_time_qos_maintenance: number;
	ri_cpu_time_qos_background: number;
	ri_cpu_time_qos_utility: number;
	ri_cpu_time_qos_legacy: number;
	ri_cpu_time_qos_user_initiated: number;
	ri_cpu_time_qos_user_interactive: number;
	ri_billed_system_time: number;
	ri_serviced_system_time: number;
	ri_logical_writes: number;
	ri_lifetime_max_phys_footprint: number;
	ri_instructions: number;
	ri_cycles: number;
	ri_billed_energy: number;
	ri_serviced_energy: number;
	ri_interval_max_phys_footprint: number;
	ri_runnable_time: number;
}
declare var rusage_info_v4: rusage_info_v4;

declare function ruserok(p1: string | any, p2: number, p3: string | any, p4: string | any): number;

interface sa_endpoints_t {
	sae_srcif: number;
	sae_srcaddr: sockaddr;
	sae_srcaddrlen: number;
	sae_dstaddr: sockaddr;
	sae_dstaddrlen: number;
}
declare var sa_endpoints_t: sa_endpoints_t;

declare function safe_gets(p1: string | any, p2: string | any, p3: number): void;

declare function savetty(): number;

declare function sbrk(p1: number): any;

interface sbuf {
	s_buf: string;
	s_unused: any;
	s_size: number;
	s_len: number;
	s_flags: number;
}
declare var sbuf: sbuf;

declare function sbuf_bcat(p1: sbuf, p2: any, p3: number): number;

declare function sbuf_bcpy(p1: sbuf, p2: any, p3: number): number;

declare function sbuf_cat(p1: sbuf, p2: string | any): number;

declare function sbuf_clear(p1: sbuf): void;

declare function sbuf_cpy(p1: sbuf, p2: string | any): number;

declare function sbuf_data(p1: sbuf): string;

declare function sbuf_delete(p1: sbuf): void;

declare function sbuf_done(p1: sbuf): number;

declare function sbuf_finish(p1: sbuf): void;

declare function sbuf_len(p1: sbuf): number;

declare function sbuf_new(p1: sbuf, p2: string | any, p3: number, p4: number): sbuf;

declare function sbuf_overflowed(p1: sbuf): number;

declare function sbuf_putc(p1: sbuf, p2: number): number;

declare function sbuf_setpos(p1: sbuf, p2: number): number;

declare function sbuf_trim(p1: sbuf): number;

declare function scalb(p1: number, p2: number): number;

declare function scalbln(p1: number, p2: number): number;

declare function scalblnf(p1: number, p2: number): number;

declare function scalblnl(p1: number, p2: number): number;

declare function scalbn(p1: number, p2: number): number;

declare function scalbnf(p1: number, p2: number): number;

declare function scalbnl(p1: number, p2: number): number;

declare function scandir(p1: string | any, p2: dirent, p3: (p1: dirent) => number, p4: (p1: dirent, p2: dirent) => number): number;

declare function scandir_b(p1: string | any, p2: dirent, p3: (p1: dirent) => number, p4: (p1: dirent, p2: dirent) => number): number;

declare function sched_get_priority_max(p1: number): number;

declare function sched_get_priority_min(p1: number): number;

interface sched_param {
	sched_priority: number;
	__opaque: number;
}
declare var sched_param: sched_param;

declare function sched_yield(): number;

declare function scr_dump(p1: string | any): number;

declare function scr_init(p1: string | any): number;

declare function scr_restore(p1: string | any): number;

declare function scr_set(p1: string | any): number;

declare function scrl(p1: number): number;

declare function scroll(p1: _win_st): number;

declare function scrollok(p1: _win_st, p2: boolean): number;

declare function searchfs(p1: string | any, p2: fssearchblock, p3: number, p4: number, p5: number, p6: searchstate): number;

interface searchstate {
	ss_union_flags: number;
	ss_union_layer: number;
	ss_fsstate: number;
}
declare var searchstate: searchstate;

interface security_token_t {
	val: number;
}
declare var security_token_t: security_token_t;

declare function seed48(p1: number): number;

declare function seekdir(p1: DIR, p2: number): void;

interface sem {
	semval: number;
	sempid: number;
	semncnt: number;
	semzcnt: number;
}
declare var sem: sem;

declare function sem_close(p1: number): number;

declare function sem_destroy(p1: number): number;

declare function sem_getvalue(p1: number, p2: number): number;

declare function sem_init(p1: number, p2: number, p3: number): number;

declare function sem_post(p1: number): number;

declare function sem_trywait(p1: number): number;

declare function sem_unlink(p1: string | any): number;

declare function sem_wait(p1: number): number;

declare function semaphore_create(task: number, semaphore: number, policy: number, value: number): number;

declare function semaphore_destroy(task: number, semaphore: number): number;

declare function semaphore_signal(semaphore: number): number;

declare function semaphore_signal_all(semaphore: number): number;

declare function semaphore_signal_thread(semaphore: number, thread: number): number;

declare function semaphore_timedwait(semaphore: number, wait_time: mach_timespec): number;

declare function semaphore_timedwait_signal(wait_semaphore: number, signal_semaphore: number, wait_time: mach_timespec): number;

declare function semaphore_wait(semaphore: number): number;

declare function semaphore_wait_signal(wait_semaphore: number, signal_semaphore: number): number;

interface sembuf {
	sem_num: number;
	sem_op: number;
	sem_flg: number;
}
declare var sembuf: sembuf;

declare function semget(p1: number, p2: number, p3: number): number;

declare function semop(p1: number, p2: sembuf, p3: number): number;

declare function send(p1: number, p2: any, p3: number, p4: number): number;

declare function sendfile(p1: number, p2: number, p3: number, p4: number, p5: sf_hdtr, p6: number): number;

declare function sendmsg(p1: number, p2: msghdr, p3: number): number;

declare function sendto(p1: number, p2: any, p3: number, p4: number, p5: sockaddr, p6: number): number;

interface servent {
	s_name: string;
	s_aliases: string;
	s_port: number;
	s_proto: string;
}
declare var servent: servent;

declare function set_escdelay(p1: number): number;

declare function set_tabsize(p1: number): number;

declare function set_term(p1: any): any;

declare function setac(): void;

declare function setattrlist(p1: string | any, p2: any, p3: any, p4: number, p5: number): number;

declare function setattrlistat(p1: number, p2: string | any, p3: any, p4: any, p5: number, p6: number): number;

declare function setauclass(): void;

declare function setaudit_addr(p1: auditinfo_addr, p2: number): number;

declare function setauevent(): void;

declare function setauid(p1: number): number;

declare function setauuser(): void;

declare function setbuf(p1: FILE, p2: string | any): void;

declare function setbuffer(p1: FILE, p2: string | any, p3: number): void;

declare function setdomainname(p1: string | any, p2: number): number;

declare function setegid(p1: number): number;

declare function setenv(__name: string | any, __value: string | any, __overwrite: number): number;

declare function seteuid(p1: number): number;

declare function setgid(p1: number): number;

declare function setgrent(): void;

declare function setgrfile(p1: string | any): void;

declare function setgroupent(p1: number): number;

declare function setgroups(p1: number, p2: number): number;

declare function sethostent(p1: number): void;

declare function sethostid(p1: number): void;

declare function sethostname(p1: string | any, p2: number): number;

declare function setiopolicy_np(p1: number, p2: number, p3: number): number;

declare function setipv4sourcefilter(p1: number, p2: in_addr, p3: in_addr, p4: number, p5: number, p6: in_addr): number;

declare function setitimer(p1: number, p2: itimerval, p3: itimerval): number;

declare function setjmp(p1: number): number;

declare function setkey(p1: string | any): void;

declare function setkeyFunction(p1: string | any): void;

declare function setlinebuf(p1: FILE): number;

declare function setlocale(p1: number, p2: string | any): string;

declare function setlogin(p1: string | any): number;

declare function setlogmask(p1: number): number;

declare function setmode(p1: string | any): any;

declare function setnetent(p1: number): void;

declare function setnetgrent(p1: string | any): void;

declare function setpassent(p1: number): number;

declare function setpgid(p1: number, p2: number): number;

declare function setpgrp(): number;

declare function setpriority(p1: number, p2: number, p3: number): number;

declare function setprogname(p1: string | any): void;

declare function setprotoent(p1: number): void;

declare function setpwent(): void;

declare function setregid(p1: number, p2: number): number;

declare function setreuid(p1: number, p2: number): number;

declare function setrgid(p1: number): number;

declare function setrlimit(p1: number, p2: rlimit): number;

declare function setrpcent(stayopen: number): void;

declare function setruid(p1: number): number;

declare function setscrreg(p1: number, p2: number): number;

declare function setservent(p1: number): void;

declare function setsgroups_np(p1: number, p2: number): number;

declare function setsid(): number;

declare function setsockopt(p1: number, p2: number, p3: number, p4: any, p5: number): number;

declare function setsourcefilter(p1: number, p2: number, p3: sockaddr, p4: number, p5: number, p6: number, p7: sockaddr_storage): number;

declare function setstate(p1: string | any): string;

declare function settimeofday(p1: timeval, p2: timezoneStruct): number;

declare function setuid(p1: number): number;

declare function setusershell(): void;

declare function setutxent(): void;

declare function setutxent_wtmp(p1: number): void;

declare function setvbuf(p1: FILE, p2: string | any, p3: number, p4: number): number;

declare function setwgroups_np(p1: number, p2: number): number;

declare function setxattr(path: string | any, name: string | any, value: any, size: number, position: number, options: number): number;

interface sf_hdtr {
	headers: iovec;
	hdr_cnt: number;
	trailers: iovec;
	trl_cnt: number;
}
declare var sf_hdtr: sf_hdtr;

declare const shadow: number;

interface shared_file_mapping_np {
	sfm_address: number;
	sfm_size: number;
	sfm_file_offset: number;
	sfm_max_prot: number;
	sfm_init_prot: number;
}
declare var shared_file_mapping_np: shared_file_mapping_np;

declare function shared_region_check_np(startaddress: number): number;

declare function shared_region_map_np(fd: number, mappingCount: number, mappings: shared_file_mapping_np): number;

declare function shared_region_slide_np(): number;

declare function shm_unlink(p1: string | any): number;

declare function shmat(p1: number, p2: any, p3: number): any;

declare function shmctl(p1: number, p2: number, p3: __shmid_ds_new): number;

declare function shmdt(p1: any): number;

declare function shmget(p1: number, p2: number, p3: number): number;

declare function shutdown(p1: number, p2: number): number;

declare function sigaddset(p1: number, p2: number): number;

declare function sigaltstack(p1: __darwin_sigaltstack, p2: __darwin_sigaltstack): number;

declare function sigblock(p1: number): number;

declare function sigdelset(p1: number, p2: number): number;

declare function sigemptyset(p1: number): number;

declare function sigfillset(p1: number): number;

declare function sighold(p1: number): number;

declare function sigignore(p1: number): number;

declare function siginterrupt(p1: number, p2: number): number;

declare function sigismember(p1: number, p2: number): number;

declare function siglongjmp(p1: number, p2: number): void;

declare function signal(p1: number, p2: (p1: number) => void): (p1: number) => void;

declare var signgam: number;

declare function sigpause(p1: number): number;

declare function sigpending(p1: number): number;

declare function sigprocmask(p1: number, p2: number, p3: number): number;

declare function sigrelse(p1: number): number;

declare function sigset(p1: number, p2: (p1: number) => void): (p1: number) => void;

declare function sigsetjmp(p1: number, p2: number): number;

declare function sigsetmask(p1: number): number;

interface sigstack {
	ss_sp: string;
	ss_onstack: number;
}
declare var sigstack: sigstack;

declare function sigsuspend(p1: number): number;

declare function sigvec(p1: number, p2: sigvecStruct, p3: sigvecStruct): number;

interface sigvecStruct {
	sv_handler: (p1: number) => void;
	sv_mask: number;
	sv_flags: number;
}
declare var sigvecStruct: sigvecStruct;

declare function sigwait(p1: number, p2: number): number;

declare function sin(p1: number): number;

declare function sinf(p1: number): number;

declare function sinh(p1: number): number;

declare function sinhf(p1: number): number;

declare function sinhl(p1: number): number;

declare function sinl(p1: number): number;

declare function sleep(p1: number): number;

declare function slk_attr(): number;

declare function slk_attr_off(p1: number, p2: any): number;

declare function slk_attr_on(p1: number, p2: any): number;

declare function slk_attr_set(p1: number, p2: number, p3: any): number;

declare function slk_attroff(p1: number): number;

declare function slk_attron(p1: number): number;

declare function slk_attrset(p1: number): number;

declare function slk_clear(): number;

declare function slk_color(p1: number): number;

declare function slk_init(p1: number): number;

declare function slk_label(p1: number): string;

declare function slk_noutrefresh(): number;

declare function slk_refresh(): number;

declare function slk_restore(): number;

declare function slk_set(p1: number, p2: string | any, p3: number): number;

declare function slk_touch(): number;

declare function slot_name(p1: number, p2: number, p3: string, p4: string): void;

interface so_np_extensions {
	npx_flags: number;
	npx_mask: number;
}
declare var so_np_extensions: so_np_extensions;

interface sockaddr {
	sa_len: number;
	sa_family: number;
	sa_data: number;
}
declare var sockaddr: sockaddr;

interface sockaddr_ctl {
	sc_len: number;
	sc_family: number;
	ss_sysaddr: number;
	sc_id: number;
	sc_unit: number;
	sc_reserved: number;
}
declare var sockaddr_ctl: sockaddr_ctl;

interface sockaddr_dl {
	sdl_len: number;
	sdl_family: number;
	sdl_index: number;
	sdl_type: number;
	sdl_nlen: number;
	sdl_alen: number;
	sdl_slen: number;
	sdl_data: number;
}
declare var sockaddr_dl: sockaddr_dl;

interface sockaddr_in {
	sin_len: number;
	sin_family: number;
	sin_port: number;
	sin_addr: in_addr;
	sin_zero: number;
}
declare var sockaddr_in: sockaddr_in;

interface sockaddr_storage {
	ss_len: number;
	ss_family: number;
	__ss_pad1: number;
	__ss_align: number;
	__ss_pad2: number;
}
declare var sockaddr_storage: sockaddr_storage;

interface sockaddr_sys {
	ss_len: number;
	ss_family: number;
	ss_sysaddr: number;
	ss_reserved: number;
}
declare var sockaddr_sys: sockaddr_sys;

interface sockaddr_un {
	sun_len: number;
	sun_family: number;
	sun_path: number;
}
declare var sockaddr_un: sockaddr_un;

declare function sockatmark(p1: number): number;

interface sockbuf_info {
	sbi_cc: number;
	sbi_hiwat: number;
	sbi_mbcnt: number;
	sbi_mbmax: number;
	sbi_lowat: number;
	sbi_flags: number;
	sbi_timeo: number;
}
declare var sockbuf_info: sockbuf_info;

declare function socket(p1: number, p2: number, p3: number): number;

declare function socketpair(p1: number, p2: number, p3: number, p4: number): number;

interface sockproto {
	sp_family: number;
	sp_protocol: number;
}
declare var sockproto: sockproto;

interface speedtab {
	sp_speed: number;
	sp_code: number;
}
declare var speedtab: speedtab;

declare function sqrt(p1: number): number;

declare function sqrtf(p1: number): number;

declare function sqrtl(p1: number): number;

declare function sradixsort(__base: string, __nel: number, __table: string | any, __endbyte: number): number;

declare function srand48(p1: number): void;

declare function sranddev(): void;

declare function srandom(p1: number): void;

declare function srandomdev(): void;

declare function standend(): number;

declare function standout(): number;

declare function start_color(): number;

declare function stat(p1: string | any, p2: statStruct): number;

interface stat64 {
	st_dev: number;
	st_mode: number;
	st_nlink: number;
	st_ino: number;
	st_uid: number;
	st_gid: number;
	st_rdev: number;
	st_atimespec: timespec;
	st_mtimespec: timespec;
	st_ctimespec: timespec;
	st_birthtimespec: timespec;
	st_size: number;
	st_blocks: number;
	st_blksize: number;
	st_flags: number;
	st_gen: number;
	st_lspare: number;
	st_qspare: number;
}
declare var stat64: stat64;

interface statStruct {
	st_dev: number;
	st_mode: number;
	st_nlink: number;
	st_ino: number;
	st_uid: number;
	st_gid: number;
	st_rdev: number;
	st_atimespec: timespec;
	st_mtimespec: timespec;
	st_ctimespec: timespec;
	st_birthtimespec: timespec;
	st_size: number;
	st_blocks: number;
	st_blksize: number;
	st_flags: number;
	st_gen: number;
	st_lspare: number;
	st_qspare: number;
}
declare var statStruct: statStruct;

declare function statfs(p1: string | any, p2: statfsStruct): number;

interface statfs64 {
	f_bsize: number;
	f_iosize: number;
	f_blocks: number;
	f_bfree: number;
	f_bavail: number;
	f_files: number;
	f_ffree: number;
	f_fsid: fsid_t;
	f_owner: number;
	f_type: number;
	f_flags: number;
	f_fssubtype: number;
	f_fstypename: number;
	f_mntonname: number;
	f_mntfromname: number;
	f_flags_ext: number;
	f_reserved: number;
}
declare var statfs64: statfs64;

interface statfsStruct {
	f_bsize: number;
	f_iosize: number;
	f_blocks: number;
	f_bfree: number;
	f_bavail: number;
	f_files: number;
	f_ffree: number;
	f_fsid: fsid_t;
	f_owner: number;
	f_type: number;
	f_flags: number;
	f_fssubtype: number;
	f_fstypename: number;
	f_mntonname: number;
	f_mntfromname: number;
	f_flags_ext: number;
	f_reserved: number;
}
declare var statfsStruct: statfsStruct;

declare function statvfs(p1: string | any, p2: statvfsStruct): number;

interface statvfsStruct {
	f_bsize: number;
	f_frsize: number;
	f_blocks: number;
	f_bfree: number;
	f_bavail: number;
	f_files: number;
	f_ffree: number;
	f_favail: number;
	f_fsid: number;
	f_flag: number;
	f_namemax: number;
}
declare var statvfsStruct: statvfsStruct;

declare function statx_np(p1: string | any, p2: statStruct, p3: any): number;

declare var stdscr: _win_st;

declare function stpcpy(__dst: string | any, __src: string | any): string;

declare function stpncpy(__dst: string | any, __src: string | any, __n: number): string;

declare function strcasecmp(p1: string | any, p2: string | any): number;

declare function strcasecmp_l(p1: string | any, p2: string | any, p3: any): number;

declare function strcasestr(__big: string | any, __little: string | any): string;

declare function strcasestr_l(p1: string | any, p2: string | any, p3: any): string;

declare function strcat(__s1: string | any, __s2: string | any): string;

declare function strchr(__s: string | any, __c: number): string;

declare function strcmp(__s1: string | any, __s2: string | any): number;

declare function strcoll(__s1: string | any, __s2: string | any): number;

declare function strcoll_l(p1: string | any, p2: string | any, p3: any): number;

declare function strcpy(__dst: string | any, __src: string | any): string;

declare function strcspn(__s: string | any, __charset: string | any): number;

declare function strdup(__s1: string | any): string;

declare function strerror(__errnum: number): string;

declare function strerror_r(__errnum: number, __strerrbuf: string | any, __buflen: number): number;

declare function strftime(p1: string | any, p2: number, p3: string | any, p4: tm): number;

declare function strftime_l(p1: string | any, p2: number, p3: string | any, p4: tm, p5: any): number;

declare function strlcat(__dst: string | any, __source: string | any, __size: number): number;

declare function strlcpy(__dst: string | any, __source: string | any, __size: number): number;

declare function strlen(__s: string | any): number;

declare function strmode(__mode: number, __bp: string | any): void;

declare function strncasecmp(p1: string | any, p2: string | any, p3: number): number;

declare function strncasecmp_l(p1: string | any, p2: string | any, p3: number, p4: any): number;

declare function strncat(__s1: string | any, __s2: string | any, __n: number): string;

declare function strncmp(__s1: string | any, __s2: string | any, __n: number): number;

declare function strncpy(__dst: string | any, __src: string | any, __n: number): string;

declare function strndup(__s1: string | any, __n: number): string;

declare function strnlen(__s1: string | any, __n: number): number;

declare function strnstr(__big: string | any, __little: string | any, __len: number): string;

declare function strpbrk(__s: string | any, __charset: string | any): string;

declare function strptime(p1: string | any, p2: string | any, p3: tm): string;

declare function strptime_l(p1: string | any, p2: string | any, p3: tm, p4: any): string;

declare function strrchr(__s: string | any, __c: number): string;

declare function strsep(__stringp: string, __delim: string | any): string;

declare function strsignal(__sig: number): string;

declare function strspn(__s: string | any, __charset: string | any): number;

declare function strstr(__big: string | any, __little: string | any): string;

declare function strtod(p1: string | any, p2: string): number;

declare function strtod_l(p1: string | any, p2: string, p3: any): number;

declare function strtof(p1: string | any, p2: string): number;

declare function strtof_l(p1: string | any, p2: string, p3: any): number;

declare function strtofflags(p1: string, p2: number, p3: number): number;

declare function strtoimax(__nptr: string | any, __endptr: string, __base: number): number;

declare function strtoimax_l(nptr: string | any, endptr: string, base: number, p4: any): number;

declare function strtok(__str: string | any, __sep: string | any): string;

declare function strtok_r(__str: string | any, __sep: string | any, __lasts: string): string;

declare function strtol(__str: string | any, __endptr: string, __base: number): number;

declare function strtol_l(p1: string | any, p2: string, p3: number, p4: any): number;

declare function strtold(p1: string | any, p2: string): number;

declare function strtold_l(p1: string | any, p2: string, p3: any): number;

declare function strtoll(__str: string | any, __endptr: string, __base: number): number;

declare function strtoll_l(p1: string | any, p2: string, p3: number, p4: any): number;

declare function strtoq(__str: string | any, __endptr: string, __base: number): number;

declare function strtoq_l(p1: string | any, p2: string, p3: number, p4: any): number;

declare function strtoul(__str: string | any, __endptr: string, __base: number): number;

declare function strtoul_l(p1: string | any, p2: string, p3: number, p4: any): number;

declare function strtoull(__str: string | any, __endptr: string, __base: number): number;

declare function strtoull_l(p1: string | any, p2: string, p3: number, p4: any): number;

declare function strtoumax(__nptr: string | any, __endptr: string, __base: number): number;

declare function strtoumax_l(nptr: string | any, endptr: string, base: number, p4: any): number;

declare function strtouq(__str: string | any, __endptr: string, __base: number): number;

declare function strtouq_l(p1: string | any, p2: string, p3: number, p4: any): number;

declare function strxfrm(__s1: string | any, __s2: string | any, __n: number): number;

declare function strxfrm_l(p1: string | any, p2: string | any, p3: number, p4: any): number;

declare var suboptarg: string;

declare var suboptargVar: string;

declare function subpad(p1: _win_st, p2: number, p3: number, p4: number, p5: number): _win_st;

declare function subwin(p1: _win_st, p2: number, p3: number, p4: number, p5: number): _win_st;

declare function swab(p1: any, p2: any, p3: number): void;

declare function swabFunction(p1: any, p2: any, p3: number): void;

declare function swapon(p1: string | any): number;

declare function swtch(): number;

declare function swtch_pri(pri: number): number;

declare function symlink(p1: string | any, p2: string | any): number;

declare function symlinkat(p1: string | any, p2: number, p3: string | any): number;

declare function sync(): void;

declare function sync_volume_np(p1: string | any, p2: number): number;

declare function syncok(p1: _win_st, p2: boolean): number;

declare var sys_errlist: string;

declare var sys_nerr: number;

declare var sys_siglist: string;

declare var sys_signame: string;

declare function sysconf(p1: number): number;

declare function sysctl(p1: number, p2: number, p3: any, p4: number, p5: any, p6: number): number;

declare function sysctlbyname(p1: string | any, p2: any, p3: number, p4: any, p5: number): number;

declare function sysctlnametomib(p1: string | any, p2: number, p3: number): number;

declare function tan(p1: number): number;

declare function tanf(p1: number): number;

declare function tanh(p1: number): number;

declare function tanhf(p1: number): number;

declare function tanhl(p1: number): number;

declare function tanl(p1: number): number;

interface task_absolutetime_info {
	total_user: number;
	total_system: number;
	threads_user: number;
	threads_system: number;
}
declare var task_absolutetime_info: task_absolutetime_info;

interface task_affinity_tag_info {
	set_count: number;
	min: number;
	max: number;
	task_count: number;
}
declare var task_affinity_tag_info: task_affinity_tag_info;

declare function task_assign(task: number, new_set: number, assign_threads: number): number;

declare function task_assign_default(task: number, assign_threads: number): number;

interface task_basic_info {
	suspend_count: number;
	virtual_size: number;
	resident_size: number;
	user_time: time_value;
	system_time: time_value;
	policy: number;
}
declare var task_basic_info: task_basic_info;

interface task_basic_info_32 {
	suspend_count: number;
	virtual_size: number;
	resident_size: number;
	user_time: time_value;
	system_time: time_value;
	policy: number;
}
declare var task_basic_info_32: task_basic_info_32;

interface task_basic_info_64 {
	suspend_count: number;
	virtual_size: number;
	resident_size: number;
	user_time: time_value;
	system_time: time_value;
	policy: number;
}
declare var task_basic_info_64: task_basic_info_64;

interface task_category_policy {
	role: number;
}
declare var task_category_policy: task_category_policy;

declare function task_create(target_task: number, ledgers: number, ledgersCnt: number, inherit_memory: number, child_task: number): number;

declare function task_create_suid_cred(task: number, path: number, uid: number, delegation: number): number;

interface task_dyld_info {
	all_image_info_addr: number;
	all_image_info_size: number;
	all_image_info_format: number;
}
declare var task_dyld_info: task_dyld_info;

interface task_events_info {
	faults: number;
	pageins: number;
	cow_faults: number;
	messages_sent: number;
	messages_received: number;
	syscalls_mach: number;
	syscalls_unix: number;
	csw: number;
}
declare var task_events_info: task_events_info;

interface task_extmod_info {
	task_uuid: number;
	extmod_statistics: vm_extmod_statistics;
}
declare var task_extmod_info: task_extmod_info;

interface task_flags_info {
	flags: number;
}
declare var task_flags_info: task_flags_info;

declare function task_for_pid(target_tport: number, pid: number, t: number): number;

declare function task_generate_corpse(task: number, corpse_task_port: number): number;

declare function task_get_assignment(task: number, assigned_set: number): number;

declare function task_get_emulation_vector(task: number, vector_start: number, emulation_vector: number, emulation_vectorCnt: number): number;

declare function task_get_exc_guard_behavior(task: number, behavior: number): number;

declare function task_get_exception_ports(task: number, exception_mask: number, masks: number, masksCnt: number, old_handlers: number, old_behaviors: number, old_flavors: number): number;

declare function task_get_mach_voucher(task: number, which: number, voucher: number): number;

declare function task_get_special_port(task: number, which_port: number, special_port: number): number;

declare function task_get_state(task: number, flavor: number, old_state: number, old_stateCnt: number): number;

declare function task_info(target_task: number, flavor: number, task_info_out: number, task_info_outCnt: number): number;

declare function task_inspect(task: number, flavor: number, info_out: number, info_outCnt: number): number;

interface task_kernelmemory_info {
	total_palloc: number;
	total_pfree: number;
	total_salloc: number;
	total_sfree: number;
}
declare var task_kernelmemory_info: task_kernelmemory_info;

enum task_latency_qos {

	LATENCY_QOS_TIER_UNSPECIFIED = 0,

	LATENCY_QOS_TIER_0 = 16711681,

	LATENCY_QOS_TIER_1 = 16711682,

	LATENCY_QOS_TIER_2 = 16711683,

	LATENCY_QOS_TIER_3 = 16711684,

	LATENCY_QOS_TIER_4 = 16711685,

	LATENCY_QOS_TIER_5 = 16711686
}


declare function task_map_corpse_info(task: number, corspe_task: number, kcd_addr_begin: number, kcd_size: number): number;

declare function task_map_corpse_info_64(task: number, corspe_task: number, kcd_addr_begin: number, kcd_size: number): number;

declare function task_name_for_pid(target_tport: number, pid: number, tn: number): number;

declare function task_policy(task: number, policy: number, base: number, baseCnt: number, set_limit: number, change: number): number;

declare function task_policy_get(task: number, flavor: number, policy_info: number, policy_infoCnt: number, get_default: number): number;

declare function task_policy_set(task: number, flavor: number, policy_info: number, policy_infoCnt: number): number;

interface task_power_info {
	total_user: number;
	total_system: number;
	task_interrupt_wakeups: number;
	task_platform_idle_wakeups: number;
	task_timer_wakeups_bin_1: number;
	task_timer_wakeups_bin_2: number;
}
declare var task_power_info: task_power_info;

interface task_power_info_v2 {
	cpu_energy: task_power_info;
	gpu_energy: gpu_energy_data;
	task_ptime: number;
	task_pset_switches: number;
}
declare var task_power_info_v2: task_power_info_v2;

declare function task_purgable_info(task: number, stats: vm_purgeable_info): number;

interface task_qos_policy {
	task_latency_qos_tier: number;
	task_throughput_qos_tier: number;
}
declare var task_qos_policy: task_qos_policy;

declare function task_register_dyld_set_dyld_state(task: number, dyld_state: number): number;

declare function task_resume(target_task: number): number;

declare function task_resume2(suspend_token: number): number;

enum task_role {

	TASK_RENICED = -1,

	TASK_UNSPECIFIED = 0,

	TASK_FOREGROUND_APPLICATION = 1,

	TASK_BACKGROUND_APPLICATION = 2,

	TASK_CONTROL_APPLICATION = 3,

	TASK_GRAPHICS_SERVER = 4,

	TASK_THROTTLE_APPLICATION = 5,

	TASK_NONUI_APPLICATION = 6,

	TASK_DEFAULT_APPLICATION = 7,

	TASK_DARWINBG_APPLICATION = 8
}


declare function task_sample(task: number, reply: number): number;

declare function task_self_trap(): number;

declare function task_set_emulation(target_port: number, routine_entry_pt: number, routine_number: number): number;

declare function task_set_emulation_vector(task: number, vector_start: number, emulation_vector: number, emulation_vectorCnt: number): number;

declare function task_set_exc_guard_behavior(task: number, behavior: number): number;

declare function task_set_exception_ports(task: number, exception_mask: number, new_port: number, behavior: number, new_flavor: number): number;

declare function task_set_info(target_task: number, flavor: number, task_info_in: number, task_info_inCnt: number): number;

declare function task_set_mach_voucher(task: number, voucher: number): number;

declare function task_set_phys_footprint_limit(task: number, new_limit: number, old_limit: number): number;

declare function task_set_policy(task: number, pset: number, policy: number, base: number, baseCnt: number, limit: number, limitCnt: number, change: number): number;

declare function task_set_port_space(task: number, table_entries: number): number;

declare function task_set_ras_pc(target_task: number, basepc: number, boundspc: number): number;

declare function task_set_special_port(task: number, which_port: number, special_port: number): number;

declare function task_set_state(task: number, flavor: number, new_state: number, new_stateCnt: number): number;

declare function task_suspend(target_task: number): number;

declare function task_suspend2(target_task: number, suspend_token: number): number;

declare function task_swap_exception_ports(task: number, exception_mask: number, new_port: number, behavior: number, new_flavor: number, masks: number, masksCnt: number, old_handlerss: number, old_behaviors: number, old_flavors: number): number;

declare function task_swap_mach_voucher(task: number, new_voucher: number, old_voucher: number): number;

declare function task_terminate(target_task: number): number;

interface task_thread_times_info {
	user_time: time_value;
	system_time: time_value;
}
declare var task_thread_times_info: task_thread_times_info;

declare function task_threads(target_task: number, act_list: number, act_listCnt: number): number;

enum task_throughput_qos {

	THROUGHPUT_QOS_TIER_UNSPECIFIED = 0,

	THROUGHPUT_QOS_TIER_0 = 16646145,

	THROUGHPUT_QOS_TIER_1 = 16646146,

	THROUGHPUT_QOS_TIER_2 = 16646147,

	THROUGHPUT_QOS_TIER_3 = 16646148,

	THROUGHPUT_QOS_TIER_4 = 16646149,

	THROUGHPUT_QOS_TIER_5 = 16646150
}


interface task_trace_memory_info {
	user_memory_address: number;
	buffer_size: number;
	mailbox_array_size: number;
}
declare var task_trace_memory_info: task_trace_memory_info;

interface task_vm_info {
	virtual_size: number;
	region_count: number;
	page_size: number;
	resident_size: number;
	resident_size_peak: number;
	device: number;
	device_peak: number;
	internal: number;
	internal_peak: number;
	external: number;
	external_peak: number;
	reusable: number;
	reusable_peak: number;
	purgeable_volatile_pmap: number;
	purgeable_volatile_resident: number;
	purgeable_volatile_virtual: number;
	compressed: number;
	compressed_peak: number;
	compressed_lifetime: number;
	phys_footprint: number;
	min_address: number;
	max_address: number;
	ledger_phys_footprint_peak: number;
	ledger_purgeable_nonvolatile: number;
	ledger_purgeable_novolatile_compressed: number;
	ledger_purgeable_volatile: number;
	ledger_purgeable_volatile_compressed: number;
	ledger_tag_network_nonvolatile: number;
	ledger_tag_network_nonvolatile_compressed: number;
	ledger_tag_network_volatile: number;
	ledger_tag_network_volatile_compressed: number;
	ledger_tag_media_footprint: number;
	ledger_tag_media_footprint_compressed: number;
	ledger_tag_media_nofootprint: number;
	ledger_tag_media_nofootprint_compressed: number;
	ledger_tag_graphics_footprint: number;
	ledger_tag_graphics_footprint_compressed: number;
	ledger_tag_graphics_nofootprint: number;
	ledger_tag_graphics_nofootprint_compressed: number;
	ledger_tag_neural_footprint: number;
	ledger_tag_neural_footprint_compressed: number;
	ledger_tag_neural_nofootprint: number;
	ledger_tag_neural_nofootprint_compressed: number;
	limit_bytes_remaining: number;
	decompressions: number;
}
declare var task_vm_info: task_vm_info;

interface task_wait_state_info {
	total_wait_state_time: number;
	total_wait_sfi_state_time: number;
	_reserved: number;
}
declare var task_wait_state_info: task_wait_state_info;

declare function task_wire(target_task: number, must_wire: number): number;

declare function task_zone_info(target_task: number, names: mach_zone_name_t, namesCnt: number, info: task_zone_info_t, infoCnt: number): number;

interface task_zone_info_t {
	tzi_count: number;
	tzi_cur_size: number;
	tzi_max_size: number;
	tzi_elem_size: number;
	tzi_alloc_size: number;
	tzi_sum_size: number;
	tzi_exhaustible: number;
	tzi_collectable: number;
	tzi_caller_acct: number;
	tzi_task_alloc: number;
	tzi_task_free: number;
}
declare var task_zone_info_t: task_zone_info_t;

declare function tcdrain(p1: number): number;

declare function tcflow(p1: number, p2: number): number;

declare function tcflush(p1: number, p2: number): number;

declare function tcgetattr(p1: number, p2: termios): number;

declare function tcgetpgrp(p1: number): number;

declare function tcgetsid(p1: number): number;

interface tcp_connection_info {
	tcpi_state: number;
	tcpi_snd_wscale: number;
	tcpi_rcv_wscale: number;
	__pad1: number;
	tcpi_options: number;
	tcpi_flags: number;
	tcpi_rto: number;
	tcpi_maxseg: number;
	tcpi_snd_ssthresh: number;
	tcpi_snd_cwnd: number;
	tcpi_snd_wnd: number;
	tcpi_snd_sbbytes: number;
	tcpi_rcv_wnd: number;
	tcpi_rttcur: number;
	tcpi_srtt: number;
	tcpi_rttvar: number;
	tcpi_tfo_cookie_req: number;
	tcpi_tfo_cookie_rcv: number;
	tcpi_tfo_syn_loss: number;
	tcpi_tfo_syn_data_sent: number;
	tcpi_tfo_syn_data_acked: number;
	tcpi_tfo_syn_data_rcv: number;
	tcpi_tfo_cookie_req_rcv: number;
	tcpi_tfo_cookie_sent: number;
	tcpi_tfo_cookie_invalid: number;
	tcpi_tfo_cookie_wrong: number;
	tcpi_tfo_no_cookie_rcv: number;
	tcpi_tfo_heuristics_disable: number;
	tcpi_tfo_send_blackhole: number;
	tcpi_tfo_recv_blackhole: number;
	tcpi_tfo_onebyte_proxy: number;
	__pad2: number;
	tcpi_txpackets: number;
	tcpi_txbytes: number;
	tcpi_txretransmitbytes: number;
	tcpi_rxpackets: number;
	tcpi_rxbytes: number;
	tcpi_rxoutoforderbytes: number;
	tcpi_txretransmitpackets: number;
}
declare var tcp_connection_info: tcp_connection_info;

interface tcphdr {
	th_sport: number;
	th_dport: number;
	th_seq: number;
	th_ack: number;
	th_x2: number;
	th_off: number;
	th_flags: number;
	th_win: number;
	th_sum: number;
	th_urp: number;
}
declare var tcphdr: tcphdr;

declare function tcsendbreak(p1: number, p2: number): number;

declare function tcsetattr(p1: number, p2: number, p3: termios): number;

declare function tcsetpgrp(p1: number, p2: number): number;

declare function tdelete(p1: any, p2: any, p3: (p1: any, p2: any) => number): any;

declare function telldir(p1: DIR): number;

declare function termattrs(): number;

interface termios {
	c_iflag: number;
	c_oflag: number;
	c_cflag: number;
	c_lflag: number;
	c_cc: number;
	c_ispeed: number;
	c_ospeed: number;
}
declare var termios: termios;

declare function termname(): string;

declare function tfind(p1: any, p2: any, p3: (p1: any, p2: any) => number): any;

declare function tgamma(p1: number): number;

declare function tgammaf(p1: number): number;

declare function tgammal(p1: number): number;

declare function thread_abort(target_act: number): number;

declare function thread_abort_safely(target_act: number): number;

interface thread_affinity_policy {
	affinity_tag: number;
}
declare var thread_affinity_policy: thread_affinity_policy;

declare function thread_assign(thread: number, new_set: number): number;

declare function thread_assign_default(thread: number): number;

interface thread_background_policy {
	priority: number;
}
declare var thread_background_policy: thread_background_policy;

interface thread_basic_info {
	user_time: time_value;
	system_time: time_value;
	cpu_usage: number;
	policy: number;
	run_state: number;
	flags: number;
	suspend_count: number;
	sleep_time: number;
}
declare var thread_basic_info: thread_basic_info;

declare function thread_create(parent_task: number, child_act: number): number;

declare function thread_create_running(parent_task: number, flavor: number, new_state: number, new_stateCnt: number, child_act: number): number;

declare function thread_depress_abort(thread: number): number;

interface thread_extended_info {
	pth_user_time: number;
	pth_system_time: number;
	pth_cpu_usage: number;
	pth_policy: number;
	pth_run_state: number;
	pth_flags: number;
	pth_sleep_time: number;
	pth_curpri: number;
	pth_priority: number;
	pth_maxpriority: number;
	pth_name: number;
}
declare var thread_extended_info: thread_extended_info;

interface thread_extended_policy {
	timeshare: number;
}
declare var thread_extended_policy: thread_extended_policy;

declare function thread_get_assignment(thread: number, assigned_set: number): number;

declare function thread_get_exception_ports(thread: number, exception_mask: number, masks: number, masksCnt: number, old_handlers: number, old_behaviors: number, old_flavors: number): number;

declare function thread_get_mach_voucher(thr_act: number, which: number, voucher: number): number;

declare function thread_get_special_port(thr_act: number, which_port: number, special_port: number): number;

declare function thread_get_state(target_act: number, flavor: number, old_state: number, old_stateCnt: number): number;

interface thread_identifier_info {
	thread_id: number;
	thread_handle: number;
	dispatch_qaddr: number;
}
declare var thread_identifier_info: thread_identifier_info;

declare function thread_info(target_act: number, flavor: number, thread_info_out: number, thread_info_outCnt: number): number;

interface thread_latency_qos_policy {
	thread_latency_qos_tier: number;
}
declare var thread_latency_qos_policy: thread_latency_qos_policy;

declare function thread_policy(thr_act: number, policy: number, base: number, baseCnt: number, set_limit: number): number;

declare function thread_policy_get(thread: number, flavor: number, policy_info: number, policy_infoCnt: number, get_default: number): number;

declare function thread_policy_set(thread: number, flavor: number, policy_info: number, policy_infoCnt: number): number;

interface thread_precedence_policy {
	importance: number;
}
declare var thread_precedence_policy: thread_precedence_policy;

declare function thread_resume(target_act: number): number;

declare function thread_sample(thread: number, reply: number): number;

declare function thread_set_exception_ports(thread: number, exception_mask: number, new_port: number, behavior: number, new_flavor: number): number;

declare function thread_set_mach_voucher(thr_act: number, voucher: number): number;

declare function thread_set_policy(thr_act: number, pset: number, policy: number, base: number, baseCnt: number, limit: number, limitCnt: number): number;

declare function thread_set_special_port(thr_act: number, which_port: number, special_port: number): number;

declare function thread_set_state(target_act: number, flavor: number, new_state: number, new_stateCnt: number): number;

interface thread_standard_policy {
	no_data: number;
}
declare var thread_standard_policy: thread_standard_policy;

declare function thread_suspend(target_act: number): number;

declare function thread_swap_exception_ports(thread: number, exception_mask: number, new_port: number, behavior: number, new_flavor: number, masks: number, masksCnt: number, old_handlers: number, old_behaviors: number, old_flavors: number): number;

declare function thread_swap_mach_voucher(thr_act: number, new_voucher: number, old_voucher: number): number;

declare function thread_switch(thread_name: number, option: number, option_time: number): number;

declare function thread_terminate(target_act: number): number;

interface thread_throughput_qos_policy {
	thread_throughput_qos_tier: number;
}
declare var thread_throughput_qos_policy: thread_throughput_qos_policy;

interface thread_time_constraint_policy {
	period: number;
	computation: number;
	constraint: number;
	preemptible: number;
}
declare var thread_time_constraint_policy: thread_time_constraint_policy;

declare function thread_wire(host_priv: number, thread: number, wired: number): number;

declare function tigetflag(p1: string | any): number;

declare function tigetnum(p1: string | any): number;

declare function tigetstr(p1: string | any): string;

declare function time(p1: number): number;

declare function time2posix(p1: number): number;

interface time_value {
	seconds: number;
	microseconds: number;
}
declare var time_value: time_value;

interface timeb {
	time: number;
	millitm: number;
	timezone: number;
	dstflag: number;
}
declare var timeb: timeb;

declare function timegm(p1: tm): number;

declare function timelocal(p1: tm): number;

declare function timeout(p1: number): void;

declare function times(p1: tms): number;

interface timespec {
	tv_sec: number;
	tv_nsec: number;
}
declare var timespec: timespec;

declare function timespec_get(ts: timespec, base: number): number;

interface timeval {
	tv_sec: number;
	tv_usec: number;
}
declare var timeval: timeval;

interface timeval32 {
	tv_sec: number;
	tv_usec: number;
}
declare var timeval32: timeval32;

interface timeval64 {
	tv_sec: number;
	tv_usec: number;
}
declare var timeval64: timeval64;

declare var timezone: number;

interface timezoneStruct {
	tz_minuteswest: number;
	tz_dsttime: number;
}
declare var timezoneStruct: timezoneStruct;

declare function timingsafe_bcmp(__b1: any, __b2: any, __len: number): number;

interface tm {
	tm_sec: number;
	tm_min: number;
	tm_hour: number;
	tm_mday: number;
	tm_mon: number;
	tm_year: number;
	tm_wday: number;
	tm_yday: number;
	tm_isdst: number;
	tm_gmtoff: number;
	tm_zone: string;
}
declare var tm: tm;

declare function tmpfile(): FILE;

interface tms {
	tms_utime: number;
	tms_stime: number;
	tms_cutime: number;
	tms_cstime: number;
}
declare var tms: tms;

interface tostruct {
	selfpc: number;
	count: number;
	link: number;
	order: number;
}
declare var tostruct: tostruct;

interface tostruct_64 {
	selfpc: number;
	count: number;
	link: number;
	order: number;
}
declare var tostruct_64: tostruct_64;

declare function touchline(p1: _win_st, p2: number, p3: number): number;

declare function touchwin(p1: _win_st): number;

declare function towctrans(p1: number, p2: number): number;

declare function towctrans_l(p1: number, p2: number, p3: any): number;

declare function trunc(p1: number): number;

declare function truncate(p1: string | any, p2: number): number;

declare function truncf(p1: number): number;

declare function truncl(p1: number): number;

declare function tsearch(p1: any, p2: any, p3: (p1: any, p2: any) => number): any;

declare function ttyaction(tty: string | any, act: string | any, user: string | any): number;

declare function ttylock(p1: string | any, p2: number, p3: number): number;

declare function ttymsg(p1: iovec, p2: number, p3: string | any, p4: number): string;

declare function ttyname(p1: number): string;

declare function ttyname_r(p1: number, p2: string | any, p3: number): number;

interface ttysize {
	ts_lines: number;
	ts_cols: number;
	ts_xxx: number;
	ts_yyy: number;
}
declare var ttysize: ttysize;

declare function ttyslot(): number;

declare var ttytype: number;

declare function ttyunlock(p1: string | any): number;

declare function twalk(p1: any, p2: (p1: any, p2: VISIT, p3: number) => void): void;

declare function typeahead(p1: number): number;

declare var tzname: string;

declare function tzset(): void;

declare function tzsetwall(): void;

declare function ualarm(p1: number, p2: number): number;

enum uio_rw {

	UIO_READ = 0,

	UIO_WRITE = 1
}


declare function umask(p1: number): number;

declare function uname(p1: utsname): number;

declare function undelete(p1: string | any): number;

declare const underline: number;

declare function ungetc(p1: number, p2: FILE): number;

declare function ungetch(p1: number): number;

declare function ungetmouse(p1: MEVENT): number;

declare function ungetwc(p1: number, p2: FILE): number;

declare function ungetwc_l(p1: number, p2: FILE, p3: any): number;

declare function unlink(p1: string | any): number;

declare function unlinkat(p1: number, p2: string | any, p3: number): number;

declare function unlockpt(p1: number): number;

declare function unmount(p1: string | any, p2: number): number;

declare function unsetenv(p1: string | any): number;

declare function untouchwin(p1: _win_st): number;

declare function unwhiteout(p1: string | any): number;

interface uprof {
	pr_next: uprof;
	pr_base: string;
	pr_size: number;
	pr_off: number;
	pr_scale: number;
	pr_addr: number;
	pr_ticks: number;
}
declare var uprof: uprof;

declare function use_default_colors(): number;

declare function use_env(p1: boolean): void;

declare function use_extended_names(p1: boolean): number;

declare function use_legacy_coding(p1: number): number;

declare function use_screen(p1: any, p2: (p1: any, p2: any) => number, p3: any): number;

declare function use_window(p1: _win_st, p2: (p1: _win_st, p2: any) => number, p3: any): number;

interface user {
}
declare var user: user;

declare function user_from_uid(p1: number, p2: number): string;

declare function usleep(p1: number): number;

declare function usrctl(flags: number): number;

interface utimbuf {
	actime: number;
	modtime: number;
}
declare var utimbuf: utimbuf;

declare function utime(p1: string | any, p2: utimbuf): number;

declare function utimensat(__fd: number, __path: string | any, __times: timespec, __flag: number): number;

declare function utimes(p1: string | any, p2: timeval): number;

interface utmpx {
	ut_user: number;
	ut_id: number;
	ut_line: number;
	ut_pid: number;
	ut_type: number;
	ut_tv: timeval;
	ut_host: number;
	ut_pad: number;
}
declare var utmpx: utmpx;

declare function utmpxname(p1: string | any): number;

interface utsname {
	sysname: number;
	nodename: number;
	release: number;
	version: number;
	machine: number;
}
declare var utsname: utsname;

declare function uuid_clear(uu: number): void;

declare function uuid_compare(uu1: number, uu2: number): number;

declare function uuid_copy(dst: number, src: number): void;

declare function uuid_generate(out: number): void;

declare function uuid_generate_early_random(out: number): void;

declare function uuid_generate_random(out: number): void;

declare function uuid_generate_time(out: number): void;

declare function uuid_is_null(uu: number): number;

declare function uuid_parse(in_: number, uu: number): number;

declare function uuid_unparse(uu: number, out: number): void;

declare function uuid_unparse_lower(uu: number, out: number): void;

declare function uuid_unparse_upper(uu: number, out: number): void;

declare function valloc(p1: number): any;

declare function vallocFunction(p1: number): any;

declare function vfork(): number;

interface vfs_server {
	vs_minutes: number;
	vs_server_name: number;
}
declare var vfs_server: vfs_server;

interface vfsconf {
	vfc_reserved1: number;
	vfc_name: number;
	vfc_typenum: number;
	vfc_refcount: number;
	vfc_flags: number;
	vfc_reserved2: number;
	vfc_reserved3: number;
}
declare var vfsconf: vfsconf;

interface vfsidctl {
	vc_vers: number;
	vc_fsid: fsid_t;
	vc_ptr: any;
	vc_len: number;
	vc_spare: number;
}
declare var vfsidctl: vfsidctl;

interface vfsquery {
	vq_flags: number;
	vq_spare: number;
}
declare var vfsquery: vfsquery;

interface vfsstatfs {
	f_bsize: number;
	f_iosize: number;
	f_blocks: number;
	f_bfree: number;
	f_bavail: number;
	f_bused: number;
	f_files: number;
	f_ffree: number;
	f_fsid: fsid_t;
	f_owner: number;
	f_flags: number;
	f_fstypename: number;
	f_mntonname: number;
	f_mntfromname: number;
	f_fssubtype: number;
	f_reserved: any;
}
declare var vfsstatfs: vfsstatfs;

declare function vidattr(p1: number): number;

declare function vidputs(p1: number, p2: (p1: number) => number): number;

interface vinfo_stat {
	vst_dev: number;
	vst_mode: number;
	vst_nlink: number;
	vst_ino: number;
	vst_uid: number;
	vst_gid: number;
	vst_atime: number;
	vst_atimensec: number;
	vst_mtime: number;
	vst_mtimensec: number;
	vst_ctime: number;
	vst_ctimensec: number;
	vst_birthtime: number;
	vst_birthtimensec: number;
	vst_size: number;
	vst_blocks: number;
	vst_blksize: number;
	vst_flags: number;
	vst_gen: number;
	vst_rdev: number;
	vst_qspare: number;
}
declare var vinfo_stat: vinfo_stat;

enum virtual_memory_guard_exception_codes {

	kGUARD_EXC_DEALLOC_GAP = 1
}


declare function vline(p1: number, p2: number): number;

declare function vm_allocate(target_task: number, address: number, size: number, flags: number): number;

declare function vm_allocate_cpm(host_priv: number, task: number, address: number, size: number, flags: number): number;

declare function vm_behavior_set(target_task: number, address: number, size: number, new_behavior: number): number;

declare function vm_copy(target_task: number, source_address: number, size: number, dest_address: number): number;

declare function vm_deallocate(target_task: number, address: number, size: number): number;

interface vm_extmod_statistics {
	task_for_pid_count: number;
	task_for_pid_caller_count: number;
	thread_creation_count: number;
	thread_creation_caller_count: number;
	thread_set_state_count: number;
	thread_set_state_caller_count: number;
}
declare var vm_extmod_statistics: vm_extmod_statistics;

interface vm_info_object_t {
	vio_object: number;
	vio_size: number;
	vio_ref_count: number;
	vio_resident_page_count: number;
	vio_absent_count: number;
	vio_copy: number;
	vio_shadow: number;
	vio_shadow_offset: number;
	vio_paging_offset: number;
	vio_copy_strategy: number;
	vio_last_alloc: number;
	vio_paging_in_progress: number;
	vio_pager_created: number;
	vio_pager_initialized: number;
	vio_pager_ready: number;
	vio_can_persist: number;
	vio_internal: number;
	vio_temporary: number;
	vio_alive: number;
	vio_purgable: number;
	vio_purgable_volatile: number;
}
declare var vm_info_object_t: vm_info_object_t;

interface vm_info_region_64_t {
	vir_start: number;
	vir_end: number;
	vir_object: number;
	vir_offset: number;
	vir_needs_copy: number;
	vir_protection: number;
	vir_max_protection: number;
	vir_inheritance: number;
	vir_wired_count: number;
	vir_user_wired_count: number;
}
declare var vm_info_region_64_t: vm_info_region_64_t;

interface vm_info_region_t {
	vir_start: number;
	vir_end: number;
	vir_object: number;
	vir_offset: number;
	vir_needs_copy: number;
	vir_protection: number;
	vir_max_protection: number;
	vir_inheritance: number;
	vir_wired_count: number;
	vir_user_wired_count: number;
}
declare var vm_info_region_t: vm_info_region_t;

declare function vm_inherit(target_task: number, address: number, size: number, new_inheritance: number): number;

declare function vm_machine_attribute(target_task: number, address: number, size: number, attribute: number, value: number): number;

declare function vm_map(target_task: number, address: number, size: number, mask: number, flags: number, object_: number, offset: number, copy: number, cur_protection: number, max_protection: number, inheritance: number): number;

declare function vm_map_64(target_task: number, address: number, size: number, mask: number, flags: number, object_: number, offset: number, copy: number, cur_protection: number, max_protection: number, inheritance: number): number;

declare function vm_map_exec_lockdown(target_task: number): number;

declare function vm_map_page_query(target_map: number, offset: number, disposition: number, ref_count: number): number;

declare function vm_mapped_pages_info(task: number, pages: number, pagesCnt: number): number;

declare function vm_msync(target_task: number, address: number, size: number, sync_flags: number): number;

interface vm_page_info_basic {
	disposition: number;
	ref_count: number;
	object_id: number;
	offset: number;
	depth: number;
	__pad: number;
}
declare var vm_page_info_basic: vm_page_info_basic;

declare function vm_protect(target_task: number, address: number, size: number, set_maximum: number, new_protection: number): number;

declare function vm_purgable_control(target_task: number, address: number, control: number, state: number): number;

interface vm_purgeable_info {
	fifo_data: vm_purgeable_stat_t;
	obsolete_data: vm_purgeable_stat_t;
	lifo_data: vm_purgeable_stat_t;
}
declare var vm_purgeable_info: vm_purgeable_info;

interface vm_purgeable_stat_t {
	count: number;
	size: number;
}
declare var vm_purgeable_stat_t: vm_purgeable_stat_t;

interface vm_range_t {
	address: number;
	size: number;
}
declare var vm_range_t: vm_range_t;

declare function vm_read(target_task: number, address: number, size: number, data: number, dataCnt: number): number;

interface vm_read_entry {
	address: number;
	size: number;
}
declare var vm_read_entry: vm_read_entry;

declare function vm_read_list(target_task: number, data_list: vm_read_entry, count: number): number;

declare function vm_read_overwrite(target_task: number, address: number, size: number, data: number, outsize: number): number;

declare function vm_region(target_task: number, address: number, size: number, flavor: number, info: number, infoCnt: number, object_name: number): number;

declare function vm_region_64(target_task: number, address: number, size: number, flavor: number, info: number, infoCnt: number, object_name: number): number;

interface vm_region_basic_info {
	protection: number;
	max_protection: number;
	inheritance: number;
	shared: number;
	reserved: number;
	offset: number;
	behavior: number;
	user_wired_count: number;
}
declare var vm_region_basic_info: vm_region_basic_info;

interface vm_region_basic_info_64 {
	protection: number;
	max_protection: number;
	inheritance: number;
	shared: number;
	reserved: number;
	offset: number;
	behavior: number;
	user_wired_count: number;
}
declare var vm_region_basic_info_64: vm_region_basic_info_64;

interface vm_region_extended_info {
	protection: number;
	user_tag: number;
	pages_resident: number;
	pages_shared_now_private: number;
	pages_swapped_out: number;
	pages_dirtied: number;
	ref_count: number;
	shadow_depth: number;
	external_pager: number;
	share_mode: number;
	pages_reusable: number;
}
declare var vm_region_extended_info: vm_region_extended_info;

declare function vm_region_recurse(target_task: number, address: number, size: number, nesting_depth: number, info: number, infoCnt: number): number;

declare function vm_region_recurse_64(target_task: number, address: number, size: number, nesting_depth: number, info: number, infoCnt: number): number;

interface vm_region_submap_info {
	protection: number;
	max_protection: number;
	inheritance: number;
	offset: number;
	user_tag: number;
	pages_resident: number;
	pages_shared_now_private: number;
	pages_swapped_out: number;
	pages_dirtied: number;
	ref_count: number;
	shadow_depth: number;
	external_pager: number;
	share_mode: number;
	is_submap: number;
	behavior: number;
	object_id: number;
	user_wired_count: number;
}
declare var vm_region_submap_info: vm_region_submap_info;

interface vm_region_submap_info_64 {
	protection: number;
	max_protection: number;
	inheritance: number;
	offset: number;
	user_tag: number;
	pages_resident: number;
	pages_shared_now_private: number;
	pages_swapped_out: number;
	pages_dirtied: number;
	ref_count: number;
	shadow_depth: number;
	external_pager: number;
	share_mode: number;
	is_submap: number;
	behavior: number;
	object_id: number;
	user_wired_count: number;
	pages_reusable: number;
	object_id_full: number;
}
declare var vm_region_submap_info_64: vm_region_submap_info_64;

interface vm_region_submap_short_info_64 {
	protection: number;
	max_protection: number;
	inheritance: number;
	offset: number;
	user_tag: number;
	ref_count: number;
	shadow_depth: number;
	external_pager: number;
	share_mode: number;
	is_submap: number;
	behavior: number;
	object_id: number;
	user_wired_count: number;
}
declare var vm_region_submap_short_info_64: vm_region_submap_short_info_64;

interface vm_region_top_info {
	obj_id: number;
	ref_count: number;
	private_pages_resident: number;
	shared_pages_resident: number;
	share_mode: number;
}
declare var vm_region_top_info: vm_region_top_info;

declare function vm_remap(target_task: number, target_address: number, size: number, mask: number, flags: number, src_task: number, src_address: number, copy: number, cur_protection: number, max_protection: number, inheritance: number): number;

interface vm_statistics {
	free_count: number;
	active_count: number;
	inactive_count: number;
	wire_count: number;
	zero_fill_count: number;
	reactivations: number;
	pageins: number;
	pageouts: number;
	faults: number;
	cow_faults: number;
	lookups: number;
	hits: number;
	purgeable_count: number;
	purges: number;
	speculative_count: number;
}
declare var vm_statistics: vm_statistics;

interface vm_statistics64 {
	free_count: number;
	active_count: number;
	inactive_count: number;
	wire_count: number;
	zero_fill_count: number;
	reactivations: number;
	pageins: number;
	pageouts: number;
	faults: number;
	cow_faults: number;
	lookups: number;
	hits: number;
	purges: number;
	purgeable_count: number;
	speculative_count: number;
	decompressions: number;
	compressions: number;
	swapins: number;
	swapouts: number;
	compressor_page_count: number;
	throttled_count: number;
	external_page_count: number;
	internal_page_count: number;
	total_uncompressed_pages_in_compressor: number;
}
declare var vm_statistics64: vm_statistics64;

declare function vm_wire(host_priv: number, task: number, address: number, size: number, desired_access: number): number;

declare function vm_write(target_task: number, address: number, data: number, dataCnt: number): number;

interface vmspace {
	dummy: number;
	dummy2: string;
	dummy3: number;
	dummy4: string;
}
declare var vmspace: vmspace;

interface vnode_fdinfo {
	pfi: proc_fileinfo;
	pvi: vnode_info;
}
declare var vnode_fdinfo: vnode_fdinfo;

interface vnode_fdinfowithpath {
	pfi: proc_fileinfo;
	pvip: vnode_info_path;
}
declare var vnode_fdinfowithpath: vnode_fdinfowithpath;

interface vnode_info {
	vi_stat: vinfo_stat;
	vi_type: number;
	vi_pad: number;
	vi_fsid: fsid_t;
}
declare var vnode_info: vnode_info;

interface vnode_info_path {
	vip_vi: vnode_info;
	vip_path: number;
}
declare var vnode_info_path: vnode_info_path;

interface vol_attributes_attr_t {
	validattr: attribute_set_t;
	nativeattr: attribute_set_t;
}
declare var vol_attributes_attr_t: vol_attributes_attr_t;

interface vol_capabilities_attr_t {
	capabilities: number;
	valid: number;
}
declare var vol_capabilities_attr_t: vol_capabilities_attr_t;

declare function voucher_mach_msg_adopt(msg: mach_msg_header_t): any;

declare function voucher_mach_msg_clear(msg: mach_msg_header_t): void;

declare function voucher_mach_msg_revert(state: any): void;

declare function voucher_mach_msg_set(msg: mach_msg_header_t): number;

declare function waddch(p1: _win_st, p2: number): number;

declare function waddchnstr(p1: _win_st, p2: number, p3: number): number;

declare function waddchstr(p1: _win_st, p2: number): number;

declare function waddnstr(p1: _win_st, p2: string | any, p3: number): number;

declare function waddstr(p1: _win_st, p2: string | any): number;

declare function wait(p1: number): number;

declare function wait3(p1: number, p2: number, p3: rusage): number;

declare function wait4(p1: number, p2: number, p3: number, p4: rusage): number;

declare function waitevent(p1: eventreq, p2: timeval): number;

declare function waitpid(p1: number, p2: number, p3: number): number;

declare function watchevent(p1: eventreq, p2: number): number;

declare function wattr_get(p1: _win_st, p2: number, p3: number, p4: any): number;

declare function wattr_off(p1: _win_st, p2: number, p3: any): number;

declare function wattr_on(p1: _win_st, p2: number, p3: any): number;

declare function wattr_set(p1: _win_st, p2: number, p3: number, p4: any): number;

declare function wattroff(p1: _win_st, p2: number): number;

declare function wattron(p1: _win_st, p2: number): number;

declare function wattrset(p1: _win_st, p2: number): number;

declare function wbkgd(p1: _win_st, p2: number): number;

declare function wbkgdset(p1: _win_st, p2: number): void;

declare function wborder(p1: _win_st, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): number;

declare function wchgat(p1: _win_st, p2: number, p3: number, p4: number, p5: any): number;

declare function wclear(p1: _win_st): number;

declare function wclrtobot(p1: _win_st): number;

declare function wclrtoeol(p1: _win_st): number;

declare function wcolor_set(p1: _win_st, p2: number, p3: any): number;

declare function wcpcpy(p1: number, p2: number): number;

declare function wcpncpy(p1: number, p2: number, p3: number): number;

declare function wcscasecmp(p1: number, p2: number): number;

declare function wcscasecmp_l(p1: number, p2: number, p3: any): number;

declare function wcscat(p1: number, p2: number): number;

declare function wcschr(p1: number, p2: number): number;

declare function wcscmp(p1: number, p2: number): number;

declare function wcscoll(p1: number, p2: number): number;

declare function wcscoll_l(p1: number, p2: number, p3: any): number;

declare function wcscpy(p1: number, p2: number): number;

declare function wcscspn(p1: number, p2: number): number;

declare function wcsdup(p1: number): number;

declare function wcsftime(p1: number, p2: number, p3: number, p4: tm): number;

declare function wcsftime_l(p1: number, p2: number, p3: number, p4: tm, p5: any): number;

declare function wcslcat(p1: number, p2: number, p3: number): number;

declare function wcslcpy(p1: number, p2: number, p3: number): number;

declare function wcslen(p1: number): number;

declare function wcsncasecmp(p1: number, p2: number, n: number): number;

declare function wcsncasecmp_l(p1: number, p2: number, n: number, p4: any): number;

declare function wcsncat(p1: number, p2: number, p3: number): number;

declare function wcsncmp(p1: number, p2: number, p3: number): number;

declare function wcsncpy(p1: number, p2: number, p3: number): number;

declare function wcsnlen(p1: number, p2: number): number;

declare function wcspbrk(p1: number, p2: number): number;

declare function wcsrchr(p1: number, p2: number): number;

declare function wcsspn(p1: number, p2: number): number;

declare function wcsstr(p1: number, p2: number): number;

declare function wcstod(p1: number, p2: number): number;

declare function wcstod_l(p1: number, p2: number, p3: any): number;

declare function wcstof(p1: number, p2: number): number;

declare function wcstof_l(p1: number, p2: number, p3: any): number;

declare function wcstoimax(__nptr: number, __endptr: number, __base: number): number;

declare function wcstoimax_l(nptr: number, endptr: number, base: number, p4: any): number;

declare function wcstok(p1: number, p2: number, p3: number): number;

declare function wcstol(p1: number, p2: number, p3: number): number;

declare function wcstol_l(p1: number, p2: number, p3: number, p4: any): number;

declare function wcstold(p1: number, p2: number): number;

declare function wcstold_l(p1: number, p2: number, p3: any): number;

declare function wcstoll(p1: number, p2: number, p3: number): number;

declare function wcstoll_l(p1: number, p2: number, p3: number, p4: any): number;

declare function wcstombs(p1: string | any, p2: number, p3: number): number;

declare function wcstombs_l(p1: string | any, p2: number, p3: number, p4: any): number;

declare function wcstoul(p1: number, p2: number, p3: number): number;

declare function wcstoul_l(p1: number, p2: number, p3: number, p4: any): number;

declare function wcstoull(p1: number, p2: number, p3: number): number;

declare function wcstoull_l(p1: number, p2: number, p3: number, p4: any): number;

declare function wcstoumax(__nptr: number, __endptr: number, __base: number): number;

declare function wcstoumax_l(nptr: number, endptr: number, base: number, p4: any): number;

declare function wcswidth(p1: number, p2: number): number;

declare function wcswidth_l(p1: number, p2: number, p3: any): number;

declare function wcsxfrm(p1: number, p2: number, p3: number): number;

declare function wcsxfrm_l(p1: number, p2: number, p3: number, p4: any): number;

declare function wctob(p1: number): number;

declare function wctob_l(p1: number, p2: any): number;

declare function wctomb(p1: string | any, p2: number): number;

declare function wctomb_l(p1: string | any, p2: number, p3: any): number;

declare function wctrans(p1: string | any): number;

declare function wctrans_l(p1: string | any, p2: any): number;

declare function wctype(p1: string | any): number;

declare function wctype_l(p1: string | any, p2: any): number;

declare function wcursyncup(p1: _win_st): void;

declare function wcwidth(p1: number): number;

declare function wcwidth_l(p1: number, p2: any): number;

declare function wdelch(p1: _win_st): number;

declare function wdeleteln(p1: _win_st): number;

declare function wechochar(p1: _win_st, p2: number): number;

declare function wenclose(p1: _win_st, p2: number, p3: number): boolean;

declare function werase(p1: _win_st): number;

declare function wgetch(p1: _win_st): number;

declare function wgetnstr(p1: _win_st, p2: string | any, p3: number): number;

declare function wgetparent(p1: _win_st): _win_st;

declare function wgetscrreg(p1: _win_st, p2: number, p3: number): number;

declare function wgetstr(p1: _win_st, p2: string | any): number;

declare function whline(p1: _win_st, p2: number, p3: number): number;

interface wide {
	lo: number;
	hi: number;
}
declare var wide: wide;

declare function winch(p1: _win_st): number;

declare function winchnstr(p1: _win_st, p2: number, p3: number): number;

declare function winchstr(p1: _win_st, p2: number): number;

declare function winnstr(p1: _win_st, p2: string | any, p3: number): number;

declare function winsch(p1: _win_st, p2: number): number;

declare function winsdelln(p1: _win_st, p2: number): number;

declare function winsertln(p1: _win_st): number;

interface winsize {
	ws_row: number;
	ws_col: number;
	ws_xpixel: number;
	ws_ypixel: number;
}
declare var winsize: winsize;

declare function winsnstr(p1: _win_st, p2: string | any, p3: number): number;

declare function winsstr(p1: _win_st, p2: string | any): number;

declare function winstr(p1: _win_st, p2: string | any): number;

declare function wmemchr(p1: number, p2: number, p3: number): number;

declare function wmemcmp(p1: number, p2: number, p3: number): number;

declare function wmemcpy(p1: number, p2: number, p3: number): number;

declare function wmemmove(p1: number, p2: number, p3: number): number;

declare function wmemset(p1: number, p2: number, p3: number): number;

declare function wmouse_trafo(p1: _win_st, p2: number, p3: number, p4: boolean): boolean;

declare function wmove(p1: _win_st, p2: number, p3: number): number;

declare function wnoutrefresh(p1: _win_st): number;

declare function wordexp(p1: string | any, p2: wordexp_t, p3: number): number;

interface wordexp_t {
	we_wordc: number;
	we_wordv: string;
	we_offs: number;
}
declare var wordexp_t: wordexp_t;

declare function wordfree(p1: wordexp_t): void;

declare function wredrawln(p1: _win_st, p2: number, p3: number): number;

declare function wrefresh(p1: _win_st): number;

declare function wresize(p1: _win_st, p2: number, p3: number): number;

declare function write(__fd: number, __buf: any, __nbyte: number): number;

declare function writev(p1: number, p2: iovec, p3: number): number;

declare function wscrl(p1: _win_st, p2: number): number;

declare function wsetscrreg(p1: _win_st, p2: number, p3: number): number;

declare function wstandend(p1: _win_st): number;

declare function wstandout(p1: _win_st): number;

declare function wsyncdown(p1: _win_st): void;

declare function wsyncup(p1: _win_st): void;

declare function wtimeout(p1: _win_st, p2: number): void;

declare function wtmpxname(p1: string | any): number;

declare function wtouchln(p1: _win_st, p2: number, p3: number, p4: number): number;

declare function wvline(p1: _win_st, p2: number, p3: number): number;

declare function xattr_flags_from_name(p1: string | any): number;

declare function xattr_intent_with_flags(p1: number, p2: number): number;

declare function xattr_name_with_flags(p1: string | any, p2: number): string;

declare function xattr_name_without_flags(p1: string | any): string;

declare function xattr_preserve_for_intent(p1: string | any, p2: number): number;

interface xsockbuf {
	sb_cc: number;
	sb_hiwat: number;
	sb_mbcnt: number;
	sb_mbmax: number;
	sb_lowat: number;
	sb_flags: number;
	sb_timeo: number;
}
declare var xsockbuf: xsockbuf;

interface xsocket {
	xso_len: number;
	xso_so: number;
	so_type: number;
	so_options: number;
	so_linger: number;
	so_state: number;
	so_pcb: number;
	xso_protocol: number;
	xso_family: number;
	so_qlen: number;
	so_incqlen: number;
	so_qlimit: number;
	so_timeo: number;
	so_error: number;
	so_pgid: number;
	so_oobmark: number;
	so_rcv: xsockbuf;
	so_snd: xsockbuf;
	so_uid: number;
}
declare var xsocket: xsocket;

interface xsocket64 {
	xso_len: number;
	xso_so: number;
	so_type: number;
	so_options: number;
	so_linger: number;
	so_state: number;
	so_pcb: number;
	xso_protocol: number;
	xso_family: number;
	so_qlen: number;
	so_incqlen: number;
	so_qlimit: number;
	so_timeo: number;
	so_error: number;
	so_pgid: number;
	so_oobmark: number;
	so_rcv: xsockbuf;
	so_snd: xsockbuf;
	so_uid: number;
}
declare var xsocket64: xsocket64;

interface xsw_usage {
	xsu_total: number;
	xsu_avail: number;
	xsu_used: number;
	xsu_pagesize: number;
	xsu_encrypted: number;
}
declare var xsw_usage: xsw_usage;

interface xucred {
	cr_version: number;
	cr_uid: number;
	cr_ngroups: number;
	cr_groups: number;
}
declare var xucred: xucred;

interface xunpgen {
	xug_len: number;
	xug_count: number;
	xug_gen: number;
	xug_sogen: number;
}
declare var xunpgen: xunpgen;

declare function y0(p1: number): number;

declare function y1(p1: number): number;

declare function yn(p1: number, p2: number): number;

interface zone_btrecord_t {
	ref_count: number;
	operation_type: number;
	bt: number;
}
declare var zone_btrecord_t: zone_btrecord_t;

interface zone_info_t {
	zi_count: number;
	zi_cur_size: number;
	zi_max_size: number;
	zi_elem_size: number;
	zi_alloc_size: number;
	zi_pageable: number;
	zi_sleepable: number;
	zi_exhaustible: number;
	zi_collectable: number;
}
declare var zone_info_t: zone_info_t;

interface zone_name_t {
	zn_name: number;
}
declare var zone_name_t: zone_name_t;

declare function zopen(p1: string | any, p2: string | any, p3: number): FILE;
