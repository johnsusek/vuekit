
enum DYLD_BOOL {

	FALSE = 0,

	TRUE = 1
}


interface NSLinkEditErrorHandlers {
	undefined: (p1: string) => void;
	multiple: (p1: any, p2: any, p3: any) => any;
	linkEdit: (p1: NSLinkEditErrors, p2: number, p3: string, p4: string) => void;
}
declare var NSLinkEditErrorHandlers: NSLinkEditErrorHandlers;

enum NSLinkEditErrors {

	FileAccessError = 0,

	FileFormatError = 1,

	MachResourceError = 2,

	UnixResourceError = 3,

	OtherError = 4,

	WarningError = 5,

	MultiplyDefinedError = 6,

	UndefinedError = 7
}


enum NSObjectFileImageReturnCode {

	Failure = 0,

	Success = 1,

	InappropriateFile = 2,

	Arch = 3,

	Format = 4,

	Access = 5
}


enum NSOtherErrorNumbers {

	Relocation = 0,

	LazyBind = 1,

	IndrLoop = 2,

	LazyInit = 3,

	InvalidArgs = 4
}


declare function NSVersionOfLinkTimeLibrary(libraryName: string | any): number;

declare function NSVersionOfRunTimeLibrary(libraryName: string | any): number;

interface NXArchInfo {
	name: string;
	cputype: number;
	cpusubtype: number;
	byteorder: NXByteOrder;
	description: string;
}
declare var NXArchInfo: NXArchInfo;

declare function NXCombineCpuSubtypes(cputype: number, cpusubtype1: number, cpusubtype2: number): number;

declare function NXFindBestFatArch(cputype: number, cpusubtype: number, fat_archs: fat_arch, nfat_archs: number): fat_arch;

declare function NXFindBestFatArch_64(cputype: number, cpusubtype: number, fat_archs64: fat_arch_64, nfat_archs: number): fat_arch_64;

declare function NXFreeArchInfo(x: NXArchInfo): void;

declare function NXGetAllArchInfos(): NXArchInfo;

declare function NXGetArchInfoFromCpuType(cputype: number, cpusubtype: number): NXArchInfo;

declare function NXGetArchInfoFromName(name: string | any): NXArchInfo;

declare function NXGetLocalArchInfo(): NXArchInfo;

declare const UNWIND_HAS_LSDA: number;

declare const UNWIND_IS_NOT_FUNCTION_START: number;

declare const UNWIND_PERSONALITY_MASK: number;

declare const UNWIND_X86_64_DWARF_SECTION_OFFSET: number;

declare const UNWIND_X86_64_FRAMELESS_STACK_ADJUST: number;

declare const UNWIND_X86_64_FRAMELESS_STACK_REG_COUNT: number;

declare const UNWIND_X86_64_FRAMELESS_STACK_REG_PERMUTATION: number;

declare const UNWIND_X86_64_FRAMELESS_STACK_SIZE: number;

declare const UNWIND_X86_64_MODE_DWARF: number;

declare const UNWIND_X86_64_MODE_MASK: number;

declare const UNWIND_X86_64_MODE_RBP_FRAME: number;

declare const UNWIND_X86_64_MODE_STACK_IMMD: number;

declare const UNWIND_X86_64_MODE_STACK_IND: number;

declare const UNWIND_X86_64_RBP_FRAME_OFFSET: number;

declare const UNWIND_X86_64_RBP_FRAME_REGISTERS: number;

declare const UNWIND_X86_64_REG_NONE: number;

declare const UNWIND_X86_64_REG_R12: number;

declare const UNWIND_X86_64_REG_R13: number;

declare const UNWIND_X86_64_REG_R14: number;

declare const UNWIND_X86_64_REG_R15: number;

declare const UNWIND_X86_64_REG_RBP: number;

declare const UNWIND_X86_64_REG_RBX: number;

declare const UNWIND_X86_DWARF_SECTION_OFFSET: number;

declare const UNWIND_X86_EBP_FRAME_OFFSET: number;

declare const UNWIND_X86_EBP_FRAME_REGISTERS: number;

declare const UNWIND_X86_FRAMELESS_STACK_ADJUST: number;

declare const UNWIND_X86_FRAMELESS_STACK_REG_COUNT: number;

declare const UNWIND_X86_FRAMELESS_STACK_REG_PERMUTATION: number;

declare const UNWIND_X86_FRAMELESS_STACK_SIZE: number;

declare const UNWIND_X86_MODE_DWARF: number;

declare const UNWIND_X86_MODE_EBP_FRAME: number;

declare const UNWIND_X86_MODE_MASK: number;

declare const UNWIND_X86_MODE_STACK_IMMD: number;

declare const UNWIND_X86_MODE_STACK_IND: number;

declare const UNWIND_X86_REG_EBP: number;

declare const UNWIND_X86_REG_EBX: number;

declare const UNWIND_X86_REG_ECX: number;

declare const UNWIND_X86_REG_EDI: number;

declare const UNWIND_X86_REG_EDX: number;

declare const UNWIND_X86_REG_ESI: number;

declare const UNWIND_X86_REG_NONE: number;

declare function _NSGetExecutablePath(buf: string | any, bufsize: number): number;

declare function _dyld_get_image_header(image_index: number): mach_header;

declare function _dyld_get_image_name(image_index: number): string;

declare function _dyld_get_image_vmaddr_slide(image_index: number): number;

declare function _dyld_image_count(): number;

declare function _dyld_register_func_for_add_image(func: (p1: mach_header, p2: number) => void): void;

declare function _dyld_register_func_for_remove_image(func: (p1: mach_header, p2: number) => void): void;

declare var _mh_bundle_header: mach_header_64;

declare var _mh_dylib_header: mach_header_64;

declare var _mh_dylinker_header: mach_header_64;

declare var _mh_execute_header: mach_header_64;

declare function _tlv_atexit(termFunc: (p1: any) => void, objAddr: any): void;

declare function _tlv_bootstrap(): void;

interface build_tool_version {
	tool: number;
	version: number;
}
declare var build_tool_version: build_tool_version;

interface build_version_command {
	cmd: number;
	cmdsize: number;
	platform: number;
	minos: number;
	sdk: number;
	ntools: number;
}
declare var build_version_command: build_version_command;

interface data_in_code_entry {
	offset: number;
	length: number;
	kind: number;
}
declare var data_in_code_entry: data_in_code_entry;

interface dyld_all_image_infos {
	version: number;
	infoArrayCount: number;
	infoArray: dyld_image_info;
	notification: (p1: dyld_image_mode, p2: number, p3: dyld_image_info) => void;
	processDetachedFromSharedRegion: boolean;
	libSystemInitialized: boolean;
	dyldImageLoadAddress: mach_header;
	jitInfo: any;
	dyldVersion: string;
	errorMessage: string;
	terminationFlags: number;
	coreSymbolicationShmPage: any;
	systemOrderFlag: number;
	uuidArrayCount: number;
	uuidArray: dyld_uuid_info;
	dyldAllImageInfosAddress: dyld_all_image_infos;
	initialImageCount: number;
	errorKind: number;
	errorClientOfDylibPath: string;
	errorTargetDylibPath: string;
	errorSymbol: string;
	sharedCacheSlide: number;
	sharedCacheUUID: number;
	sharedCacheBaseAddress: number;
	infoArrayChangeTimestamp: number;
	dyldPath: string;
	notifyPorts: number;
	reserved: number;
	compact_dyld_image_info_addr: number;
	compact_dyld_image_info_size: number;
	platform: number;
}
declare var dyld_all_image_infos: dyld_all_image_infos;

declare const dyld_error_kind_dylib_missing: number;

declare const dyld_error_kind_dylib_version: number;

declare const dyld_error_kind_dylib_wrong_arch: number;

declare const dyld_error_kind_none: number;

declare const dyld_error_kind_symbol_missing: number;

interface dyld_image_info {
	imageLoadAddress: mach_header;
	imageFilePath: string;
	imageFileModDate: number;
}
declare var dyld_image_info: dyld_image_info;

enum dyld_image_mode {

	dyld_image_adding = 0,

	dyld_image_removing = 1,

	dyld_image_info_change = 2
}


interface dyld_info_command {
	cmd: number;
	cmdsize: number;
	rebase_off: number;
	rebase_size: number;
	bind_off: number;
	bind_size: number;
	weak_bind_off: number;
	weak_bind_size: number;
	lazy_bind_off: number;
	lazy_bind_size: number;
	export_off: number;
	export_size: number;
}
declare var dyld_info_command: dyld_info_command;

declare var dyld_shared_cache_ranges: dyld_shared_cache_rangesStruct;

interface dyld_shared_cache_rangesStruct {
	sharedRegionsCount: number;
	ranges: { start: number; length: number; };
}
declare var dyld_shared_cache_rangesStruct: dyld_shared_cache_rangesStruct;

interface dyld_uuid_info {
	imageLoadAddress: mach_header;
	imageUUID: number;
}
declare var dyld_uuid_info: dyld_uuid_info;

interface dylib_module {
	module_name: number;
	iextdefsym: number;
	nextdefsym: number;
	irefsym: number;
	nrefsym: number;
	ilocalsym: number;
	nlocalsym: number;
	iextrel: number;
	nextrel: number;
	iinit_iterm: number;
	ninit_nterm: number;
	objc_module_info_addr: number;
	objc_module_info_size: number;
}
declare var dylib_module: dylib_module;

interface dylib_module_64 {
	module_name: number;
	iextdefsym: number;
	nextdefsym: number;
	irefsym: number;
	nrefsym: number;
	ilocalsym: number;
	nlocalsym: number;
	iextrel: number;
	nextrel: number;
	iinit_iterm: number;
	ninit_nterm: number;
	objc_module_info_size: number;
	objc_module_info_addr: number;
}
declare var dylib_module_64: dylib_module_64;

interface dylib_reference {
	isym: number;
	flags: number;
}
declare var dylib_reference: dylib_reference;

interface dylib_table_of_contents {
	symbol_index: number;
	module_index: number;
}
declare var dylib_table_of_contents: dylib_table_of_contents;

interface dysymtab_command {
	cmd: number;
	cmdsize: number;
	ilocalsym: number;
	nlocalsym: number;
	iextdefsym: number;
	nextdefsym: number;
	iundefsym: number;
	nundefsym: number;
	tocoff: number;
	ntoc: number;
	modtaboff: number;
	nmodtab: number;
	extrefsymoff: number;
	nextrefsyms: number;
	indirectsymoff: number;
	nindirectsyms: number;
	extreloff: number;
	nextrel: number;
	locreloff: number;
	nlocrel: number;
}
declare var dysymtab_command: dysymtab_command;

interface encryption_info_command {
	cmd: number;
	cmdsize: number;
	cryptoff: number;
	cryptsize: number;
	cryptid: number;
}
declare var encryption_info_command: encryption_info_command;

interface encryption_info_command_64 {
	cmd: number;
	cmdsize: number;
	cryptoff: number;
	cryptsize: number;
	cryptid: number;
	pad: number;
}
declare var encryption_info_command_64: encryption_info_command_64;

interface entry_point_command {
	cmd: number;
	cmdsize: number;
	entryoff: number;
	stacksize: number;
}
declare var entry_point_command: entry_point_command;

interface fat_arch {
	cputype: number;
	cpusubtype: number;
	offset: number;
	size: number;
	align: number;
}
declare var fat_arch: fat_arch;

interface fat_arch_64 {
	cputype: number;
	cpusubtype: number;
	offset: number;
	size: number;
	align: number;
	reserved: number;
}
declare var fat_arch_64: fat_arch_64;

interface fat_header {
	magic: number;
	nfat_arch: number;
}
declare var fat_header: fat_header;

declare function get_edata(): number;

declare function get_end(): number;

declare function get_etext(): number;

declare function getsectbyname(segname: string | any, sectname: string | any): section_64;

declare function getsectbynamefromheader(mhp: mach_header, segname: string | any, sectname: string | any): section;

declare function getsectbynamefromheader_64(mhp: mach_header_64, segname: string | any, sectname: string | any): section_64;

declare function getsectbynamefromheaderwithswap(mhp: mach_header, segname: string | any, sectname: string | any, fSwap: number): section;

declare function getsectbynamefromheaderwithswap_64(mhp: mach_header_64, segname: string | any, sectname: string | any, fSwap: number): section;

declare function getsectdata(segname: string | any, sectname: string | any, size: number): string;

declare function getsectdatafromFramework(FrameworkName: string | any, segname: string | any, sectname: string | any, size: number): string;

declare function getsectdatafromheader(mhp: mach_header, segname: string | any, sectname: string | any, size: number): string;

declare function getsectdatafromheader_64(mhp: mach_header_64, segname: string | any, sectname: string | any, size: number): string;

declare function getsectiondata(mhp: mach_header_64, segname: string | any, sectname: string | any, size: number): string;

declare function getsegbyname(segname: string | any): segment_command_64;

declare function getsegmentdata(mhp: mach_header_64, segname: string | any, size: number): string;

interface ident_command {
	cmd: number;
	cmdsize: number;
}
declare var ident_command: ident_command;

interface linkedit_data_command {
	cmd: number;
	cmdsize: number;
	dataoff: number;
	datasize: number;
}
declare var linkedit_data_command: linkedit_data_command;

interface linker_option_command {
	cmd: number;
	cmdsize: number;
	count: number;
}
declare var linker_option_command: linker_option_command;

interface load_command {
	cmd: number;
	cmdsize: number;
}
declare var load_command: load_command;

interface mach_header {
	magic: number;
	cputype: number;
	cpusubtype: number;
	filetype: number;
	ncmds: number;
	sizeofcmds: number;
	flags: number;
}
declare var mach_header: mach_header;

interface mach_header_64 {
	magic: number;
	cputype: number;
	cpusubtype: number;
	filetype: number;
	ncmds: number;
	sizeofcmds: number;
	flags: number;
	reserved: number;
}
declare var mach_header_64: mach_header_64;

interface note_command {
	cmd: number;
	cmdsize: number;
	data_owner: number;
	offset: number;
	size: number;
}
declare var note_command: note_command;

interface prebind_cksum_command {
	cmd: number;
	cmdsize: number;
	cksum: number;
}
declare var prebind_cksum_command: prebind_cksum_command;

enum reloc_type_generic {

	GENERIC_RELOC_VANILLA = 0,

	GENERIC_RELOC_PAIR = 1,

	GENERIC_RELOC_SECTDIFF = 2,

	GENERIC_RELOC_PB_LA_PTR = 3,

	GENERIC_RELOC_LOCAL_SECTDIFF = 4,

	GENERIC_RELOC_TLV = 5
}


interface relocation_info {
	r_address: number;
	r_symbolnum: number;
	r_pcrel: number;
	r_length: number;
	r_extern: number;
	r_type: number;
}
declare var relocation_info: relocation_info;

interface routines_command {
	cmd: number;
	cmdsize: number;
	init_address: number;
	init_module: number;
	reserved1: number;
	reserved2: number;
	reserved3: number;
	reserved4: number;
	reserved5: number;
	reserved6: number;
}
declare var routines_command: routines_command;

interface routines_command_64 {
	cmd: number;
	cmdsize: number;
	init_address: number;
	init_module: number;
	reserved1: number;
	reserved2: number;
	reserved3: number;
	reserved4: number;
	reserved5: number;
	reserved6: number;
}
declare var routines_command_64: routines_command_64;

interface scattered_relocation_info {
	r_address: number;
	r_type: number;
	r_length: number;
	r_pcrel: number;
	r_scattered: number;
	r_value: number;
}
declare var scattered_relocation_info: scattered_relocation_info;

interface section {
	sectname: number;
	segname: number;
	addr: number;
	size: number;
	offset: number;
	align: number;
	reloff: number;
	nreloc: number;
	flags: number;
	reserved1: number;
	reserved2: number;
}
declare var section: section;

interface section_64 {
	sectname: number;
	segname: number;
	addr: number;
	size: number;
	offset: number;
	align: number;
	reloff: number;
	nreloc: number;
	flags: number;
	reserved1: number;
	reserved2: number;
	reserved3: number;
}
declare var section_64: section_64;

interface segment_command {
	cmd: number;
	cmdsize: number;
	segname: number;
	vmaddr: number;
	vmsize: number;
	fileoff: number;
	filesize: number;
	maxprot: number;
	initprot: number;
	nsects: number;
	flags: number;
}
declare var segment_command: segment_command;

interface segment_command_64 {
	cmd: number;
	cmdsize: number;
	segname: number;
	vmaddr: number;
	vmsize: number;
	fileoff: number;
	filesize: number;
	maxprot: number;
	initprot: number;
	nsects: number;
	flags: number;
}
declare var segment_command_64: segment_command_64;

interface source_version_command {
	cmd: number;
	cmdsize: number;
	version: number;
}
declare var source_version_command: source_version_command;

declare function swap_build_tool_version(bt: build_tool_version, ntools: number, target_byte_sex: NXByteOrder): void;

declare function swap_build_version_command(bv: build_version_command, target_byte_sex: NXByteOrder): void;

declare function swap_dyld_info_command(ed: dyld_info_command, target_byte_sex: NXByteOrder): void;

declare function swap_dylib_module(mods: dylib_module, nmods: number, target_byte_sex: NXByteOrder): void;

declare function swap_dylib_module_64(mods: dylib_module_64, nmods: number, target_byte_sex: NXByteOrder): void;

declare function swap_dylib_reference(refs: dylib_reference, nrefs: number, target_byte_sex: NXByteOrder): void;

declare function swap_dylib_table_of_contents(tocs: dylib_table_of_contents, ntocs: number, target_byte_sex: NXByteOrder): void;

declare function swap_dysymtab_command(dyst: dysymtab_command, target_byte_sex: NXByteOrder): void;

declare function swap_encryption_command(ec: encryption_info_command, target_byte_sex: NXByteOrder): void;

declare function swap_encryption_command_64(ec: encryption_info_command_64, target_byte_sex: NXByteOrder): void;

declare function swap_entry_point_command(ep: entry_point_command, target_byte_sex: NXByteOrder): void;

declare function swap_fat_arch(fat_archs: fat_arch, nfat_arch: number, target_byte_order: NXByteOrder): void;

declare function swap_fat_arch_64(fat_archs64: fat_arch_64, nfat_arch: number, target_byte_order: NXByteOrder): void;

declare function swap_fat_header(fat_header: fat_header, target_byte_order: NXByteOrder): void;

declare function swap_ident_command(ident: ident_command, target_byte_order: NXByteOrder): void;

declare function swap_indirect_symbols(indirect_symbols: number, nindirect_symbols: number, target_byte_sex: NXByteOrder): void;

declare function swap_linkedit_data_command(ld: linkedit_data_command, target_byte_sex: NXByteOrder): void;

declare function swap_linker_option_command(lo: linker_option_command, target_byte_sex: NXByteOrder): void;

declare function swap_load_command(lc: load_command, target_byte_order: NXByteOrder): void;

declare function swap_mach_header(mh: mach_header, target_byte_order: NXByteOrder): void;

declare function swap_mach_header_64(mh: mach_header_64, target_byte_order: NXByteOrder): void;

declare function swap_note_command(nc: note_command, target_byte_sex: NXByteOrder): void;

declare function swap_prebind_cksum_command(cksum_cmd: prebind_cksum_command, target_byte_sex: NXByteOrder): void;

declare function swap_prebind_cksum_commandFunction(cksum_cmd: prebind_cksum_command, target_byte_sex: NXByteOrder): void;

declare function swap_relocation_info(relocs: relocation_info, nrelocs: number, target_byte_order: NXByteOrder): void;

declare function swap_routines_command(r_cmd: routines_command, target_byte_sex: NXByteOrder): void;

declare function swap_routines_command_64(r_cmd: routines_command_64, target_byte_sex: NXByteOrder): void;

declare function swap_section(s: section, nsects: number, target_byte_order: NXByteOrder): void;

declare function swap_section_64(s: section_64, nsects: number, target_byte_order: NXByteOrder): void;

declare function swap_segment_command(sg: segment_command, target_byte_order: NXByteOrder): void;

declare function swap_segment_command_64(sg: segment_command_64, target_byte_order: NXByteOrder): void;

declare function swap_source_version_command(sv: source_version_command, target_byte_sex: NXByteOrder): void;

declare function swap_symseg_command(ss: symseg_command, target_byte_order: NXByteOrder): void;

declare function swap_symtab_command(st: symtab_command, target_byte_order: NXByteOrder): void;

declare function swap_thread_command(ut: thread_command, target_byte_order: NXByteOrder): void;

declare function swap_twolevel_hint(hints: twolevel_hint, nhints: number, target_byte_sex: NXByteOrder): void;

declare function swap_twolevel_hints_command(hints_cmd: twolevel_hints_command, target_byte_sex: NXByteOrder): void;

declare function swap_uuid_command(uuid_cmd: uuid_command, target_byte_sex: NXByteOrder): void;

declare function swap_uuid_commandFunction(uuid_cmd: uuid_command, target_byte_sex: NXByteOrder): void;

declare function swap_version_min_command(ver_cmd: version_min_command, target_byte_sex: NXByteOrder): void;

interface symseg_command {
	cmd: number;
	cmdsize: number;
	offset: number;
	size: number;
}
declare var symseg_command: symseg_command;

interface symtab_command {
	cmd: number;
	cmdsize: number;
	symoff: number;
	nsyms: number;
	stroff: number;
	strsize: number;
}
declare var symtab_command: symtab_command;

interface thread_command {
	cmd: number;
	cmdsize: number;
}
declare var thread_command: thread_command;

interface tlv_descriptor {
	thunk: (p1: tlv_descriptor) => any;
	key: number;
	offset: number;
}
declare var tlv_descriptor: tlv_descriptor;

interface twolevel_hint {
	isub_image: number;
	itoc: number;
}
declare var twolevel_hint: twolevel_hint;

interface twolevel_hints_command {
	cmd: number;
	cmdsize: number;
	offset: number;
	nhints: number;
}
declare var twolevel_hints_command: twolevel_hints_command;

interface unwind_info_compressed_second_level_page_header {
	kind: number;
	entryPageOffset: number;
	entryCount: number;
	encodingsPageOffset: number;
	encodingsCount: number;
}
declare var unwind_info_compressed_second_level_page_header: unwind_info_compressed_second_level_page_header;

interface unwind_info_regular_second_level_entry {
	functionOffset: number;
	encoding: number;
}
declare var unwind_info_regular_second_level_entry: unwind_info_regular_second_level_entry;

interface unwind_info_regular_second_level_page_header {
	kind: number;
	entryPageOffset: number;
	entryCount: number;
}
declare var unwind_info_regular_second_level_page_header: unwind_info_regular_second_level_page_header;

interface unwind_info_section_header {
	version: number;
	commonEncodingsArraySectionOffset: number;
	commonEncodingsArrayCount: number;
	personalityArraySectionOffset: number;
	personalityArrayCount: number;
	indexSectionOffset: number;
	indexCount: number;
}
declare var unwind_info_section_header: unwind_info_section_header;

interface unwind_info_section_header_index_entry {
	functionOffset: number;
	secondLevelPagesSectionOffset: number;
	lsdaIndexArraySectionOffset: number;
}
declare var unwind_info_section_header_index_entry: unwind_info_section_header_index_entry;

interface unwind_info_section_header_lsda_index_entry {
	functionOffset: number;
	lsdaOffset: number;
}
declare var unwind_info_section_header_lsda_index_entry: unwind_info_section_header_lsda_index_entry;

interface uuid_command {
	cmd: number;
	cmdsize: number;
	uuid: number;
}
declare var uuid_command: uuid_command;

interface version_min_command {
	cmd: number;
	cmdsize: number;
	version: number;
	sdk: number;
}
declare var version_min_command: version_min_command;
