
declare var TclBNKaratsubaMulCutoff: number;

declare var TclBNKaratsubaSqrCutoff: number;

declare var TclBNMpSRmap: string;

declare var TclBNToomMulCutoff: number;

declare var TclBNToomSqrCutoff: number;

declare function TclBN_epoch(): number;

declare function TclBN_fast_s_mp_mul_digs(a: mp_int, b: mp_int, c: mp_int, digs: number): number;

declare function TclBN_fast_s_mp_sqr(a: mp_int, b: mp_int): number;

declare function TclBN_mp_add(a: mp_int, b: mp_int, c: mp_int): number;

declare function TclBN_mp_add_d(a: mp_int, b: number, c: mp_int): number;

declare function TclBN_mp_and(a: mp_int, b: mp_int, c: mp_int): number;

declare function TclBN_mp_clamp(a: mp_int): void;

declare function TclBN_mp_clear(a: mp_int): void;

declare function TclBN_mp_cmp(a: mp_int, b: mp_int): number;

declare function TclBN_mp_cmp_d(a: mp_int, b: number): number;

declare function TclBN_mp_cmp_mag(a: mp_int, b: mp_int): number;

declare function TclBN_mp_copy(a: mp_int, b: mp_int): number;

declare function TclBN_mp_count_bits(a: mp_int): number;

declare function TclBN_mp_div(a: mp_int, b: mp_int, q: mp_int, r: mp_int): number;

declare function TclBN_mp_div_2(a: mp_int, q: mp_int): number;

declare function TclBN_mp_div_2d(a: mp_int, b: number, q: mp_int, r: mp_int): number;

declare function TclBN_mp_div_3(a: mp_int, q: mp_int, r: number): number;

declare function TclBN_mp_div_d(a: mp_int, b: number, q: mp_int, r: number): number;

declare function TclBN_mp_exch(a: mp_int, b: mp_int): void;

declare function TclBN_mp_expt_d(a: mp_int, b: number, c: mp_int): number;

declare function TclBN_mp_grow(a: mp_int, size: number): number;

declare function TclBN_mp_init(a: mp_int): number;

declare function TclBN_mp_init_copy(a: mp_int, b: mp_int): number;

declare function TclBN_mp_init_set(a: mp_int, b: number): number;

declare function TclBN_mp_init_size(a: mp_int, size: number): number;

declare function TclBN_mp_karatsuba_mul(a: mp_int, b: mp_int, c: mp_int): number;

declare function TclBN_mp_karatsuba_sqr(a: mp_int, b: mp_int): number;

declare function TclBN_mp_lshd(a: mp_int, shift: number): number;

declare function TclBN_mp_mod(a: mp_int, b: mp_int, r: mp_int): number;

declare function TclBN_mp_mod_2d(a: mp_int, b: number, r: mp_int): number;

declare function TclBN_mp_mul(a: mp_int, b: mp_int, p: mp_int): number;

declare function TclBN_mp_mul_2(a: mp_int, p: mp_int): number;

declare function TclBN_mp_mul_2d(a: mp_int, d: number, p: mp_int): number;

declare function TclBN_mp_mul_d(a: mp_int, b: number, p: mp_int): number;

declare function TclBN_mp_neg(a: mp_int, b: mp_int): number;

declare function TclBN_mp_or(a: mp_int, b: mp_int, c: mp_int): number;

declare function TclBN_mp_radix_size(a: mp_int, radix: number, size: number): number;

declare function TclBN_mp_read_radix(a: mp_int, str: string | any, radix: number): number;

declare function TclBN_mp_rshd(a: mp_int, shift: number): void;

declare function TclBN_mp_set(a: mp_int, b: number): void;

declare function TclBN_mp_shrink(a: mp_int): number;

declare function TclBN_mp_sqr(a: mp_int, b: mp_int): number;

declare function TclBN_mp_sqrt(a: mp_int, b: mp_int): number;

declare function TclBN_mp_sub(a: mp_int, b: mp_int, c: mp_int): number;

declare function TclBN_mp_sub_d(a: mp_int, b: number, c: mp_int): number;

declare function TclBN_mp_to_unsigned_bin(a: mp_int, b: string | any): number;

declare function TclBN_mp_to_unsigned_bin_n(a: mp_int, b: string | any, outlen: number): number;

declare function TclBN_mp_toom_mul(a: mp_int, b: mp_int, c: mp_int): number;

declare function TclBN_mp_toom_sqr(a: mp_int, b: mp_int): number;

declare function TclBN_mp_toradix_n(a: mp_int, str: string | any, radix: number, maxlen: number): number;

declare function TclBN_mp_unsigned_bin_size(a: mp_int): number;

declare function TclBN_mp_xor(a: mp_int, b: mp_int, c: mp_int): number;

declare function TclBN_mp_zero(a: mp_int): void;

declare function TclBN_reverse(s: string | any, len: number): void;

declare function TclBN_revision(): number;

declare function TclBN_s_mp_add(a: mp_int, b: mp_int, c: mp_int): number;

declare function TclBN_s_mp_mul_digs(a: mp_int, b: mp_int, c: mp_int, digs: number): number;

declare function TclBN_s_mp_sqr(a: mp_int, b: mp_int): number;

declare function TclBN_s_mp_sub(a: mp_int, b: mp_int, c: mp_int): number;

interface TclPlatStubs {
	magic: number;
	hooks: any;
}
declare var TclPlatStubs: TclPlatStubs;

interface TclStubHooks {
	tclPlatStubs: TclPlatStubs;
	tclIntStubs: any;
	tclIntPlatStubs: any;
}
declare var TclStubHooks: TclStubHooks;

declare function TclTomMathInitializeStubs(interp: Tcl_Interp, version: string | any, epoch: number, revision: number): string;

interface TclTomMathStubs {
	magic: number;
	hooks: any;
	tclBN_epoch: () => number;
	tclBN_revision: () => number;
	tclBN_mp_add: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
	tclBN_mp_add_d: (p1: mp_int, p2: number, p3: mp_int) => number;
	tclBN_mp_and: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
	tclBN_mp_clamp: (p1: mp_int) => void;
	tclBN_mp_clear: (p1: mp_int) => void;
	tclBN_mp_clear_multi: (p1: mp_int) => void;
	tclBN_mp_cmp: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_cmp_d: (p1: mp_int, p2: number) => number;
	tclBN_mp_cmp_mag: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_copy: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_count_bits: (p1: mp_int) => number;
	tclBN_mp_div: (p1: mp_int, p2: mp_int, p3: mp_int, p4: mp_int) => number;
	tclBN_mp_div_d: (p1: mp_int, p2: number, p3: mp_int, p4: number) => number;
	tclBN_mp_div_2: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_div_2d: (p1: mp_int, p2: number, p3: mp_int, p4: mp_int) => number;
	tclBN_mp_div_3: (p1: mp_int, p2: mp_int, p3: number) => number;
	tclBN_mp_exch: (p1: mp_int, p2: mp_int) => void;
	tclBN_mp_expt_d: (p1: mp_int, p2: number, p3: mp_int) => number;
	tclBN_mp_grow: (p1: mp_int, p2: number) => number;
	tclBN_mp_init: (p1: mp_int) => number;
	tclBN_mp_init_copy: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_init_multi: (p1: mp_int) => number;
	tclBN_mp_init_set: (p1: mp_int, p2: number) => number;
	tclBN_mp_init_size: (p1: mp_int, p2: number) => number;
	tclBN_mp_lshd: (p1: mp_int, p2: number) => number;
	tclBN_mp_mod: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
	tclBN_mp_mod_2d: (p1: mp_int, p2: number, p3: mp_int) => number;
	tclBN_mp_mul: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
	tclBN_mp_mul_d: (p1: mp_int, p2: number, p3: mp_int) => number;
	tclBN_mp_mul_2: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_mul_2d: (p1: mp_int, p2: number, p3: mp_int) => number;
	tclBN_mp_neg: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_or: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
	tclBN_mp_radix_size: (p1: mp_int, p2: number, p3: number) => number;
	tclBN_mp_read_radix: (p1: mp_int, p2: string, p3: number) => number;
	tclBN_mp_rshd: (p1: mp_int, p2: number) => void;
	tclBN_mp_shrink: (p1: mp_int) => number;
	tclBN_mp_set: (p1: mp_int, p2: number) => void;
	tclBN_mp_sqr: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_sqrt: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_sub: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
	tclBN_mp_sub_d: (p1: mp_int, p2: number, p3: mp_int) => number;
	tclBN_mp_to_unsigned_bin: (p1: mp_int, p2: string) => number;
	tclBN_mp_to_unsigned_bin_n: (p1: mp_int, p2: string, p3: number) => number;
	tclBN_mp_toradix_n: (p1: mp_int, p2: string, p3: number, p4: number) => number;
	tclBN_mp_unsigned_bin_size: (p1: mp_int) => number;
	tclBN_mp_xor: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
	tclBN_mp_zero: (p1: mp_int) => void;
	tclBN_reverse: (p1: string, p2: number) => void;
	tclBN_fast_s_mp_mul_digs: (p1: mp_int, p2: mp_int, p3: mp_int, p4: number) => number;
	tclBN_fast_s_mp_sqr: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_karatsuba_mul: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
	tclBN_mp_karatsuba_sqr: (p1: mp_int, p2: mp_int) => number;
	tclBN_mp_toom_mul: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
	tclBN_mp_toom_sqr: (p1: mp_int, p2: mp_int) => number;
	tclBN_s_mp_add: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
	tclBN_s_mp_mul_digs: (p1: mp_int, p2: mp_int, p3: mp_int, p4: number) => number;
	tclBN_s_mp_sqr: (p1: mp_int, p2: mp_int) => number;
	tclBN_s_mp_sub: (p1: mp_int, p2: mp_int, p3: mp_int) => number;
}
declare var TclTomMathStubs: TclTomMathStubs;

declare function Tcl_Access(path: string | any, mode: number): number;

declare function Tcl_AddErrorInfo(interp: Tcl_Interp, message: string | any): void;

declare function Tcl_AddObjErrorInfo(interp: Tcl_Interp, message: string | any, length: number): void;

declare function Tcl_AlertNotifier(clientData: any): void;

declare function Tcl_Alloc(size: number): string;

declare function Tcl_AllocStatBuf(): statStruct;

declare function Tcl_AllowExceptions(interp: Tcl_Interp): void;

declare function Tcl_AppInit(interp: Tcl_Interp): number;

declare function Tcl_AppendElement(interp: Tcl_Interp, element: string | any): void;

declare function Tcl_AsyncCreate(proc: (p1: any, p2: Tcl_Interp, p3: number) => number, clientData: any): any;

declare function Tcl_AsyncDelete(async: any): void;

declare function Tcl_AsyncInvoke(interp: Tcl_Interp, code: number): number;

declare function Tcl_AsyncMark(async: any): void;

declare function Tcl_AsyncReady(): number;

declare function Tcl_AttemptAlloc(size: number): string;

declare function Tcl_AttemptDbCkalloc(size: number, file: string | any, line: number): string;

declare function Tcl_AttemptDbCkrealloc(ptr: string | any, size: number, file: string | any, line: number): string;

declare function Tcl_AttemptRealloc(ptr: string | any, size: number): string;

declare function Tcl_BackgroundError(interp: Tcl_Interp): void;

declare function Tcl_Backslash(src: string | any, readPtr: number): number;

declare function Tcl_BadChannelOption(interp: Tcl_Interp, optionName: string | any, optionList: string | any): number;

interface Tcl_CallFrame {
	nsPtr: Tcl_Namespace;
	dummy1: number;
	dummy2: number;
	dummy3: any;
	dummy4: any;
	dummy5: any;
	dummy6: number;
	dummy7: any;
	dummy8: any;
	dummy9: number;
	dummy10: any;
	dummy11: any;
	dummy12: any;
	dummy13: any;
}
declare var Tcl_CallFrame: Tcl_CallFrame;

declare function Tcl_CallWhenDeleted(interp: Tcl_Interp, proc: (p1: any, p2: Tcl_Interp) => void, clientData: any): void;

declare function Tcl_CancelIdleCall(idleProc: (p1: any) => void, clientData: any): void;

declare function Tcl_ChannelBlockModeProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: number) => number;

declare function Tcl_ChannelBuffered(chan: any): number;

declare function Tcl_ChannelClose2Proc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: Tcl_Interp, p3: number) => number;

declare function Tcl_ChannelCloseProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: Tcl_Interp) => number;

declare function Tcl_ChannelFlushProc(chanTypePtr: Tcl_ChannelType): (p1: any) => number;

declare function Tcl_ChannelGetHandleProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: number, p3: any) => number;

declare function Tcl_ChannelGetOptionProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: Tcl_Interp, p3: string, p4: Tcl_DString) => number;

declare function Tcl_ChannelHandlerProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: number) => number;

declare function Tcl_ChannelInputProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: string, p3: number, p4: number) => number;

declare function Tcl_ChannelName(chanTypePtr: Tcl_ChannelType): string;

declare function Tcl_ChannelOutputProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: string, p3: number, p4: number) => number;

declare function Tcl_ChannelSeekProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: number, p3: number, p4: number) => number;

declare function Tcl_ChannelSetOptionProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: Tcl_Interp, p3: string, p4: string) => number;

declare function Tcl_ChannelThreadActionProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: number) => void;

declare function Tcl_ChannelTruncateProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: number) => number;

interface Tcl_ChannelType {
	typeName: string;
	version: any;
	closeProc: (p1: any, p2: Tcl_Interp) => number;
	inputProc: (p1: any, p2: string, p3: number, p4: number) => number;
	outputProc: (p1: any, p2: string, p3: number, p4: number) => number;
	seekProc: (p1: any, p2: number, p3: number, p4: number) => number;
	setOptionProc: (p1: any, p2: Tcl_Interp, p3: string, p4: string) => number;
	getOptionProc: (p1: any, p2: Tcl_Interp, p3: string, p4: Tcl_DString) => number;
	watchProc: (p1: any, p2: number) => void;
	getHandleProc: (p1: any, p2: number, p3: any) => number;
	close2Proc: (p1: any, p2: Tcl_Interp, p3: number) => number;
	blockModeProc: (p1: any, p2: number) => number;
	flushProc: (p1: any) => number;
	handlerProc: (p1: any, p2: number) => number;
	wideSeekProc: (p1: any, p2: number, p3: number, p4: number) => number;
	threadActionProc: (p1: any, p2: number) => void;
	truncateProc: (p1: any, p2: number) => number;
}
declare var Tcl_ChannelType: Tcl_ChannelType;

declare function Tcl_ChannelVersion(chanTypePtr: Tcl_ChannelType): any;

declare function Tcl_ChannelWatchProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: number) => void;

declare function Tcl_ChannelWideSeekProc(chanTypePtr: Tcl_ChannelType): (p1: any, p2: number, p3: number, p4: number) => number;

declare function Tcl_Chdir(dirName: string | any): number;

declare function Tcl_ClearChannelHandlers(channel: any): void;

declare function Tcl_Close(interp: Tcl_Interp, chan: any): number;

declare function Tcl_CommandComplete(cmd: string | any): number;

declare function Tcl_CommandTraceInfo(interp: Tcl_Interp, varName: string | any, flags: number, procPtr: (p1: any, p2: Tcl_Interp, p3: string, p4: string, p5: number) => void, prevClientData: any): any;

declare function Tcl_Concat(argc: number, argv: string): string;

declare function Tcl_ConditionFinalize(condPtr: any): void;

declare function Tcl_ConditionNotify(condPtr: any): void;

declare function Tcl_ConditionWait(condPtr: any, mutexPtr: any, timePtr: Tcl_Time): void;

interface Tcl_Config {
	key: string;
	value: string;
}
declare var Tcl_Config: Tcl_Config;

declare function Tcl_ConvertCountedElement(src: string | any, length: number, dst: string | any, flags: number): number;

declare function Tcl_ConvertElement(src: string | any, dst: string | any, flags: number): number;

declare function Tcl_CreateAlias(slave: Tcl_Interp, slaveCmd: string | any, target: Tcl_Interp, targetCmd: string | any, argc: number, argv: string): number;

declare function Tcl_CreateChannel(typePtr: Tcl_ChannelType, chanName: string | any, instanceData: any, mask: number): any;

declare function Tcl_CreateChannelHandler(chan: any, mask: number, proc: (p1: any, p2: number) => void, clientData: any): void;

declare function Tcl_CreateCloseHandler(chan: any, proc: (p1: any) => void, clientData: any): void;

declare function Tcl_CreateCommand(interp: Tcl_Interp, cmdName: string | any, proc: (p1: any, p2: Tcl_Interp, p3: number, p4: string) => number, clientData: any, deleteProc: (p1: any) => void): any;

declare function Tcl_CreateEncoding(typePtr: Tcl_EncodingType): any;

declare function Tcl_CreateEnsemble(interp: Tcl_Interp, name: string | any, namespacePtr: Tcl_Namespace, flags: number): any;

declare function Tcl_CreateEventSource(setupProc: (p1: any, p2: number) => void, checkProc: (p1: any, p2: number) => void, clientData: any): void;

declare function Tcl_CreateExitHandler(proc: (p1: any) => void, clientData: any): void;

declare function Tcl_CreateFileHandler(fd: number, mask: number, proc: (p1: any, p2: number) => void, clientData: any): void;

declare function Tcl_CreateInterp(): Tcl_Interp;

declare function Tcl_CreateMathFunc(interp: Tcl_Interp, name: string | any, numArgs: number, argTypes: Tcl_ValueType, proc: (p1: any, p2: Tcl_Interp, p3: Tcl_Value, p4: Tcl_Value) => number, clientData: any): void;

declare function Tcl_CreateNamespace(interp: Tcl_Interp, name: string | any, clientData: any, deleteProc: (p1: any) => void): Tcl_Namespace;

declare function Tcl_CreateSlave(interp: Tcl_Interp, slaveName: string | any, isSafe: number): Tcl_Interp;

declare function Tcl_CreateThread(idPtr: any, proc: (p1: any) => void, clientData: any, stackSize: number, flags: number): number;

declare function Tcl_CreateThreadExitHandler(proc: (p1: any) => void, clientData: any): void;

declare function Tcl_CreateTimerHandler(milliseconds: number, proc: (p1: any) => void, clientData: any): any;

declare function Tcl_CreateTrace(interp: Tcl_Interp, level: number, proc: (p1: any, p2: Tcl_Interp, p3: number, p4: string, p5: (p1: any, p2: Tcl_Interp, p3: number, p4: string) => number, p6: any, p7: number, p8: string) => void, clientData: any): any;

declare function Tcl_CutChannel(channel: any): void;

interface Tcl_DString {
	string: string;
	length: number;
	spaceAvl: number;
	staticSpace: number;
}
declare var Tcl_DString: Tcl_DString;

declare function Tcl_DStringAppend(dsPtr: Tcl_DString, bytes: string | any, length: number): string;

declare function Tcl_DStringAppendElement(dsPtr: Tcl_DString, element: string | any): string;

declare function Tcl_DStringEndSublist(dsPtr: Tcl_DString): void;

declare function Tcl_DStringFree(dsPtr: Tcl_DString): void;

declare function Tcl_DStringGetResult(interp: Tcl_Interp, dsPtr: Tcl_DString): void;

declare function Tcl_DStringInit(dsPtr: Tcl_DString): void;

declare function Tcl_DStringResult(interp: Tcl_Interp, dsPtr: Tcl_DString): void;

declare function Tcl_DStringSetLength(dsPtr: Tcl_DString, length: number): void;

declare function Tcl_DStringStartSublist(dsPtr: Tcl_DString): void;

declare function Tcl_DbCkalloc(size: number, file: string | any, line: number): string;

declare function Tcl_DbCkfree(ptr: string | any, file: string | any, line: number): number;

declare function Tcl_DbCkrealloc(ptr: string | any, size: number, file: string | any, line: number): string;

declare function Tcl_DeleteAssocData(interp: Tcl_Interp, name: string | any): void;

declare function Tcl_DeleteChannelHandler(chan: any, proc: (p1: any, p2: number) => void, clientData: any): void;

declare function Tcl_DeleteCloseHandler(chan: any, proc: (p1: any) => void, clientData: any): void;

declare function Tcl_DeleteCommand(interp: Tcl_Interp, cmdName: string | any): number;

declare function Tcl_DeleteCommandFromToken(interp: Tcl_Interp, command: any): number;

declare function Tcl_DeleteEventSource(setupProc: (p1: any, p2: number) => void, checkProc: (p1: any, p2: number) => void, clientData: any): void;

declare function Tcl_DeleteEvents(proc: (p1: Tcl_Event, p2: any) => number, clientData: any): void;

declare function Tcl_DeleteExitHandler(proc: (p1: any) => void, clientData: any): void;

declare function Tcl_DeleteFileHandler(fd: number): void;

declare function Tcl_DeleteInterp(interp: Tcl_Interp): void;

declare function Tcl_DeleteNamespace(nsPtr: Tcl_Namespace): void;

declare function Tcl_DeleteThreadExitHandler(proc: (p1: any) => void, clientData: any): void;

declare function Tcl_DeleteTimerHandler(token: any): void;

declare function Tcl_DeleteTrace(interp: Tcl_Interp, trace: any): void;

declare function Tcl_DetachChannel(interp: Tcl_Interp, channel: any): number;

declare function Tcl_DetachPids(numPids: number, pidPtr: any): void;

declare function Tcl_DictObjDone(searchPtr: Tcl_DictSearch): void;

interface Tcl_DictSearch {
	next: any;
	epoch: number;
	dictionaryPtr: any;
}
declare var Tcl_DictSearch: Tcl_DictSearch;

declare function Tcl_DiscardInterpState(state: any): void;

declare function Tcl_DoOneEvent(flags: number): number;

declare function Tcl_DoWhenIdle(proc: (p1: any) => void, clientData: any): void;

declare function Tcl_DontCallWhenDeleted(interp: Tcl_Interp, proc: (p1: any, p2: Tcl_Interp) => void, clientData: any): void;

declare function Tcl_DumpActiveMemory(fileName: string | any): number;

interface Tcl_EncodingType {
	encodingName: string;
	toUtfProc: (p1: any, p2: string, p3: number, p4: number, p5: any, p6: string, p7: number, p8: number, p9: number, p10: number) => number;
	fromUtfProc: (p1: any, p2: string, p3: number, p4: number, p5: any, p6: string, p7: number, p8: number, p9: number, p10: number) => number;
	freeProc: (p1: any) => void;
	clientData: any;
	nullSize: number;
}
declare var Tcl_EncodingType: Tcl_EncodingType;

declare function Tcl_Eof(chan: any): number;

declare function Tcl_ErrnoId(): string;

declare function Tcl_ErrnoMsg(err: number): string;

declare function Tcl_Eval(interp: Tcl_Interp, script: string | any): number;

declare function Tcl_EvalEx(interp: Tcl_Interp, script: string | any, numBytes: number, flags: number): number;

declare function Tcl_EvalFile(interp: Tcl_Interp, fileName: string | any): number;

declare function Tcl_EvalTokensStandard(interp: Tcl_Interp, tokenPtr: Tcl_Token, count: number): number;

interface Tcl_Event {
	proc: (p1: Tcl_Event, p2: number) => number;
	nextPtr: Tcl_Event;
}
declare var Tcl_Event: Tcl_Event;

declare function Tcl_EventuallyFree(clientData: any, freeProc: (p1: string) => void): void;

declare function Tcl_Exit(status: number): void;

declare function Tcl_ExitThread(status: number): void;

declare function Tcl_Export(interp: Tcl_Interp, nsPtr: Tcl_Namespace, pattern: string | any, resetListFirst: number): number;

declare function Tcl_ExposeCommand(interp: Tcl_Interp, hiddenCmdToken: string | any, cmdName: string | any): number;

declare function Tcl_ExprBoolean(interp: Tcl_Interp, p2: string | any): number;

declare function Tcl_ExprDouble(interp: Tcl_Interp, p2: string | any): number;

declare function Tcl_ExprLong(interp: Tcl_Interp, p2: string | any): number;

declare function Tcl_ExprString(interp: Tcl_Interp, p2: string | any): number;

declare function Tcl_ExternalToUtf(interp: Tcl_Interp, encoding: any, src: string | any, srcLen: number, flags: number, statePtr: any, dst: string | any, dstLen: number, srcReadPtr: number, dstWrotePtr: number, dstCharsPtr: number): number;

declare function Tcl_ExternalToUtfDString(encoding: any, src: string | any, srcLen: number, dsPtr: Tcl_DString): string;

declare function Tcl_Finalize(): void;

declare function Tcl_FinalizeNotifier(clientData: any): void;

declare function Tcl_FinalizeThread(): void;

declare function Tcl_FindCommand(interp: Tcl_Interp, name: string | any, contextNsPtr: Tcl_Namespace, flags: number): any;

declare function Tcl_FindExecutable(argv0: string | any): void;

declare function Tcl_FindNamespace(interp: Tcl_Interp, name: string | any, contextNsPtr: Tcl_Namespace, flags: number): Tcl_Namespace;

declare function Tcl_Flush(chan: any): number;

declare function Tcl_ForgetImport(interp: Tcl_Interp, nsPtr: Tcl_Namespace, pattern: string | any): number;

declare function Tcl_Free(ptr: string | any): void;

declare function Tcl_FreeEncoding(encoding: any): void;

declare function Tcl_FreeResult(interp: Tcl_Interp): void;

declare function Tcl_GetAlias(interp: Tcl_Interp, slaveCmd: string | any, targetInterpPtr: Tcl_Interp, targetCmdPtr: string, argcPtr: number, argvPtr: string): number;

declare function Tcl_GetAllocMutex(): any;

declare function Tcl_GetAssocData(interp: Tcl_Interp, name: string | any, procPtr: (p1: any, p2: Tcl_Interp) => void): any;

declare function Tcl_GetBoolean(interp: Tcl_Interp, src: string | any, boolPtr: number): number;

declare function Tcl_GetChannel(interp: Tcl_Interp, chanName: string | any, modePtr: number): any;

declare function Tcl_GetChannelBufferSize(chan: any): number;

declare function Tcl_GetChannelHandle(chan: any, direction: number, handlePtr: any): number;

declare function Tcl_GetChannelInstanceData(chan: any): any;

declare function Tcl_GetChannelMode(chan: any): number;

declare function Tcl_GetChannelName(chan: any): string;

declare function Tcl_GetChannelNames(interp: Tcl_Interp): number;

declare function Tcl_GetChannelNamesEx(interp: Tcl_Interp, pattern: string | any): number;

declare function Tcl_GetChannelOption(interp: Tcl_Interp, chan: any, optionName: string | any, dsPtr: Tcl_DString): number;

declare function Tcl_GetChannelThread(channel: any): any;

declare function Tcl_GetChannelType(chan: any): Tcl_ChannelType;

declare function Tcl_GetCommandName(interp: Tcl_Interp, command: any): string;

declare function Tcl_GetCurrentNamespace(interp: Tcl_Interp): Tcl_Namespace;

declare function Tcl_GetCurrentThread(): any;

declare function Tcl_GetCwd(interp: Tcl_Interp, cwdPtr: Tcl_DString): string;

declare function Tcl_GetDefaultEncodingDir(): string;

declare function Tcl_GetDouble(interp: Tcl_Interp, src: string | any, doublePtr: number): number;

declare function Tcl_GetEncoding(interp: Tcl_Interp, name: string | any): any;

declare function Tcl_GetEncodingName(encoding: any): string;

declare function Tcl_GetEncodingNameFromEnvironment(bufPtr: Tcl_DString): string;

declare function Tcl_GetEncodingNames(interp: Tcl_Interp): void;

declare function Tcl_GetEnsembleFlags(interp: Tcl_Interp, token: any, flagsPtr: number): number;

declare function Tcl_GetEnsembleNamespace(interp: Tcl_Interp, token: any, namespacePtrPtr: Tcl_Namespace): number;

declare function Tcl_GetErrno(): number;

declare function Tcl_GetGlobalNamespace(interp: Tcl_Interp): Tcl_Namespace;

declare function Tcl_GetHostName(): string;

declare function Tcl_GetInt(interp: Tcl_Interp, src: string | any, intPtr: number): number;

declare function Tcl_GetInterpPath(askInterp: Tcl_Interp, slaveInterp: Tcl_Interp): number;

declare function Tcl_GetMaster(interp: Tcl_Interp): Tcl_Interp;

declare function Tcl_GetMathFuncInfo(interp: Tcl_Interp, name: string | any, numArgsPtr: number, argTypesPtr: Tcl_ValueType, procPtr: (p1: any, p2: Tcl_Interp, p3: Tcl_Value, p4: Tcl_Value) => number, clientDataPtr: any): number;

declare function Tcl_GetNameOfExecutable(): string;

declare function Tcl_GetOpenFile(interp: Tcl_Interp, chanID: string | any, forWriting: number, checkUsage: number, filePtr: any): number;

declare function Tcl_GetPathType(path: string | any): Tcl_PathType;

declare function Tcl_GetServiceMode(): number;

declare function Tcl_GetSlave(interp: Tcl_Interp, slaveName: string | any): Tcl_Interp;

declare function Tcl_GetStackedChannel(chan: any): any;

declare function Tcl_GetStdChannel(type: number): any;

declare function Tcl_GetStringResult(interp: Tcl_Interp): string;

declare function Tcl_GetThreadData(keyPtr: any, size: number): any;

declare function Tcl_GetTime(timeBuf: Tcl_Time): void;

declare function Tcl_GetTopChannel(chan: any): any;

declare function Tcl_GetVar(interp: Tcl_Interp, varName: string | any, flags: number): string;

declare function Tcl_GetVar2(interp: Tcl_Interp, part1: string | any, part2: string | any, flags: number): string;

declare function Tcl_GetVersion(major: number, minor: number, patchLevel: number, type: number): void;

declare function Tcl_Gets(chan: any, dsPtr: Tcl_DString): number;

declare function Tcl_GlobalEval(interp: Tcl_Interp, command: string | any): number;

declare function Tcl_HideCommand(interp: Tcl_Interp, cmdName: string | any, hiddenCmdToken: string | any): number;

declare function Tcl_Import(interp: Tcl_Interp, nsPtr: Tcl_Namespace, pattern: string | any, allowOverwrite: number): number;

declare function Tcl_Init(interp: Tcl_Interp): number;

declare function Tcl_InitBignumFromDouble(interp: Tcl_Interp, initval: number, toInit: mp_int): number;

declare function Tcl_InitMemory(interp: Tcl_Interp): void;

declare function Tcl_InitNotifier(): any;

declare function Tcl_InitStubs(interp: Tcl_Interp, version: string | any, exact: number): string;

declare function Tcl_InputBlocked(chan: any): number;

declare function Tcl_InputBuffered(chan: any): number;

interface Tcl_Interp {
	result: string;
	freeProc: (p1: string) => void;
	errorLine: number;
}
declare var Tcl_Interp: Tcl_Interp;

declare function Tcl_InterpDeleted(interp: Tcl_Interp): number;

declare function Tcl_IsChannelExisting(channelName: string | any): number;

declare function Tcl_IsChannelRegistered(interp: Tcl_Interp, channel: any): number;

declare function Tcl_IsChannelShared(channel: any): number;

declare function Tcl_IsEnsemble(token: any): number;

declare function Tcl_IsSafe(interp: Tcl_Interp): number;

declare function Tcl_IsStandardChannel(channel: any): number;

declare function Tcl_JoinPath(argc: number, argv: string, resultPtr: Tcl_DString): string;

declare function Tcl_JoinThread(threadId: any, result: number): number;

declare function Tcl_LimitAddHandler(interp: Tcl_Interp, type: number, handlerProc: (p1: any, p2: Tcl_Interp) => void, clientData: any, deleteProc: (p1: any) => void): void;

declare function Tcl_LimitCheck(interp: Tcl_Interp): number;

declare function Tcl_LimitExceeded(interp: Tcl_Interp): number;

declare function Tcl_LimitGetCommands(interp: Tcl_Interp): number;

declare function Tcl_LimitGetGranularity(interp: Tcl_Interp, type: number): number;

declare function Tcl_LimitGetTime(interp: Tcl_Interp, timeLimitPtr: Tcl_Time): void;

declare function Tcl_LimitReady(interp: Tcl_Interp): number;

declare function Tcl_LimitRemoveHandler(interp: Tcl_Interp, type: number, handlerProc: (p1: any, p2: Tcl_Interp) => void, clientData: any): void;

declare function Tcl_LimitSetCommands(interp: Tcl_Interp, commandLimit: number): void;

declare function Tcl_LimitSetGranularity(interp: Tcl_Interp, type: number, granularity: number): void;

declare function Tcl_LimitSetTime(interp: Tcl_Interp, timeLimitPtr: Tcl_Time): void;

declare function Tcl_LimitTypeEnabled(interp: Tcl_Interp, type: number): number;

declare function Tcl_LimitTypeExceeded(interp: Tcl_Interp, type: number): number;

declare function Tcl_LimitTypeReset(interp: Tcl_Interp, type: number): void;

declare function Tcl_LimitTypeSet(interp: Tcl_Interp, type: number): void;

declare function Tcl_LinkVar(interp: Tcl_Interp, varName: string | any, addr: string | any, type: number): number;

declare function Tcl_LogCommandInfo(interp: Tcl_Interp, script: string | any, command: string | any, length: number): void;

declare function Tcl_Main(argc: number, argv: string, appInitProc: (p1: Tcl_Interp) => number): void;

declare function Tcl_MakeFileChannel(handle: any, mode: number): any;

declare function Tcl_MakeSafe(interp: Tcl_Interp): number;

declare function Tcl_MakeTcpClientChannel(tcpSocket: any): any;

declare function Tcl_Merge(argc: number, argv: string): string;

declare function Tcl_MutexFinalize(mutex: any): void;

declare function Tcl_MutexLock(mutexPtr: any): void;

declare function Tcl_MutexUnlock(mutexPtr: any): void;

interface Tcl_Namespace {
	name: string;
	fullName: string;
	clientData: any;
	deleteProc: (p1: any) => void;
	parentPtr: Tcl_Namespace;
}
declare var Tcl_Namespace: Tcl_Namespace;

interface Tcl_NotifierProcs {
	setTimerProc: (p1: Tcl_Time) => void;
	waitForEventProc: (p1: Tcl_Time) => number;
	createFileHandlerProc: (p1: number, p2: number, p3: (p1: any, p2: number) => void, p4: any) => void;
	deleteFileHandlerProc: (p1: number) => void;
	initNotifierProc: () => any;
	finalizeNotifierProc: (p1: any) => void;
	alertNotifierProc: (p1: any) => void;
	serviceModeHookProc: (p1: number) => void;
}
declare var Tcl_NotifierProcs: Tcl_NotifierProcs;

declare function Tcl_NotifyChannel(channel: any, mask: number): void;

declare function Tcl_NumUtfChars(src: string | any, length: number): number;

declare function Tcl_OpenCommandChannel(interp: Tcl_Interp, argc: number, argv: string, flags: number): any;

declare function Tcl_OpenFileChannel(interp: Tcl_Interp, fileName: string | any, modeString: string | any, permissions: number): any;

declare function Tcl_OpenTcpClient(interp: Tcl_Interp, port: number, address: string | any, myaddr: string | any, myport: number, async: number): any;

declare function Tcl_OpenTcpServer(interp: Tcl_Interp, port: number, host: string | any, acceptProc: (p1: any, p2: any, p3: string, p4: number) => void, callbackData: any): any;

declare function Tcl_OutputBuffered(chan: any): number;

declare function Tcl_ParseVar(interp: Tcl_Interp, start: string | any, termPtr: string): string;

enum Tcl_PathType {

	CL_PATH_ABSOLUTE = 0,

	CL_PATH_RELATIVE = 1,

	CL_PATH_VOLUME_RELATIVE = 2
}


declare function Tcl_PkgInitStubsCheck(interp: Tcl_Interp, version: string | any, exact: number): string;

declare function Tcl_PkgPresent(interp: Tcl_Interp, name: string | any, version: string | any, exact: number): string;

declare function Tcl_PkgPresentEx(interp: Tcl_Interp, name: string | any, version: string | any, exact: number, clientDataPtr: any): string;

declare function Tcl_PkgProvide(interp: Tcl_Interp, name: string | any, version: string | any): number;

declare function Tcl_PkgProvideEx(interp: Tcl_Interp, name: string | any, version: string | any, clientData: any): number;

declare function Tcl_PkgRequire(interp: Tcl_Interp, name: string | any, version: string | any, exact: number): string;

declare function Tcl_PkgRequireEx(interp: Tcl_Interp, name: string | any, version: string | any, exact: number, clientDataPtr: any): string;

declare function Tcl_PosixError(interp: Tcl_Interp): string;

declare function Tcl_Preserve(data: any): void;

declare function Tcl_PrintDouble(interp: Tcl_Interp, value: number, dst: string | any): void;

declare function Tcl_PutEnv(assignment: string | any): number;

declare function Tcl_QueryTimeProc(getProc: (p1: Tcl_Time, p2: any) => void, scaleProc: (p1: Tcl_Time, p2: any) => void, clientData: any): void;

declare function Tcl_QueueEvent(evPtr: Tcl_Event, position: Tcl_QueuePosition): void;

enum Tcl_QueuePosition {

	CL_QUEUE_TAIL = 0,

	CL_QUEUE_HEAD = 1,

	CL_QUEUE_MARK = 2
}


declare function Tcl_Read(chan: any, bufPtr: string | any, toRead: number): number;

declare function Tcl_ReadRaw(chan: any, dst: string | any, bytesToRead: number): number;

declare function Tcl_Realloc(ptr: string | any, size: number): string;

declare function Tcl_ReapDetachedProcs(): void;

declare function Tcl_RecordAndEval(interp: Tcl_Interp, cmd: string | any, flags: number): number;

declare function Tcl_RegExpCompile(interp: Tcl_Interp, pattern: string | any): any;

declare function Tcl_RegExpExec(interp: Tcl_Interp, regexp: any, text: string | any, start: string | any): number;

declare function Tcl_RegExpGetInfo(regexp: any, infoPtr: Tcl_RegExpInfo): void;

interface Tcl_RegExpIndices {
	start: number;
	end: number;
}
declare var Tcl_RegExpIndices: Tcl_RegExpIndices;

interface Tcl_RegExpInfo {
	nsubs: number;
	matches: Tcl_RegExpIndices;
	extendStart: number;
	reserved: number;
}
declare var Tcl_RegExpInfo: Tcl_RegExpInfo;

declare function Tcl_RegExpMatch(interp: Tcl_Interp, text: string | any, pattern: string | any): number;

declare function Tcl_RegExpRange(regexp: any, index: number, startPtr: string, endPtr: string): void;

declare function Tcl_RegisterChannel(interp: Tcl_Interp, chan: any): void;

declare function Tcl_RegisterConfig(interp: Tcl_Interp, pkgName: string | any, configuration: Tcl_Config, valEncoding: string | any): void;

declare function Tcl_Release(clientData: any): void;

declare function Tcl_ResetResult(interp: Tcl_Interp): void;

declare function Tcl_RestoreInterpState(interp: Tcl_Interp, state: any): number;

declare function Tcl_SaveInterpState(interp: Tcl_Interp, status: number): any;

declare function Tcl_ScanCountedElement(str: string | any, length: number, flagPtr: number): number;

declare function Tcl_ScanElement(str: string | any, flagPtr: number): number;

declare function Tcl_Seek(chan: any, offset: number, mode: number): number;

declare function Tcl_SeekOld(chan: any, offset: number, mode: number): number;

declare function Tcl_ServiceAll(): number;

declare function Tcl_ServiceEvent(flags: number): number;

declare function Tcl_ServiceModeHook(mode: number): void;

declare function Tcl_SetAssocData(interp: Tcl_Interp, name: string | any, proc: (p1: any, p2: Tcl_Interp) => void, clientData: any): void;

declare function Tcl_SetChannelBufferSize(chan: any, sz: number): void;

declare function Tcl_SetChannelOption(interp: Tcl_Interp, chan: any, optionName: string | any, newValue: string | any): number;

declare function Tcl_SetDefaultEncodingDir(path: string | any): void;

declare function Tcl_SetEnsembleFlags(interp: Tcl_Interp, token: any, flags: number): number;

declare function Tcl_SetErrno(err: number): void;

declare function Tcl_SetExitProc(proc: (p1: any) => void): (p1: any) => void;

declare function Tcl_SetMainLoop(proc: () => void): void;

declare function Tcl_SetMaxBlockTime(timePtr: Tcl_Time): void;

declare function Tcl_SetNotifier(notifierProcPtr: Tcl_NotifierProcs): void;

declare function Tcl_SetPanicProc(panicProc: (p1: string) => void): void;

declare function Tcl_SetRecursionLimit(interp: Tcl_Interp, depth: number): number;

declare function Tcl_SetResult(interp: Tcl_Interp, result: string | any, freeProc: (p1: string) => void): void;

declare function Tcl_SetServiceMode(mode: number): number;

declare function Tcl_SetStdChannel(channel: any, type: number): void;

declare function Tcl_SetSystemEncoding(interp: Tcl_Interp, name: string | any): number;

declare function Tcl_SetTimeProc(getProc: (p1: Tcl_Time, p2: any) => void, scaleProc: (p1: Tcl_Time, p2: any) => void, clientData: any): void;

declare function Tcl_SetTimer(timePtr: Tcl_Time): void;

declare function Tcl_SetVar(interp: Tcl_Interp, varName: string | any, newValue: string | any, flags: number): string;

declare function Tcl_SetVar2(interp: Tcl_Interp, part1: string | any, part2: string | any, newValue: string | any, flags: number): string;

declare function Tcl_SignalId(sig: number): string;

declare function Tcl_SignalMsg(sig: number): string;

declare function Tcl_Sleep(ms: number): void;

declare function Tcl_SourceRCFile(interp: Tcl_Interp): void;

declare function Tcl_SpliceChannel(channel: any): void;

declare function Tcl_SplitList(interp: Tcl_Interp, listStr: string | any, argcPtr: number, argvPtr: string): number;

declare function Tcl_SplitPath(path: string | any, argcPtr: number, argvPtr: string): void;

declare function Tcl_StackChannel(interp: Tcl_Interp, typePtr: Tcl_ChannelType, instanceData: any, mask: number, prevChan: any): any;

declare function Tcl_Stat(path: string | any, bufPtr: statStruct): number;

declare function Tcl_StaticPackage(interp: Tcl_Interp, pkgName: string | any, initProc: (p1: Tcl_Interp) => number, safeInitProc: (p1: Tcl_Interp) => number): void;

declare function Tcl_StringCaseMatch(str: string | any, pattern: string | any, nocase: number): number;

declare function Tcl_StringMatch(str: string | any, pattern: string | any): number;

declare function Tcl_Tell(chan: any): number;

declare function Tcl_TellOld(chan: any): number;

declare function Tcl_ThreadAlert(threadId: any): void;

declare function Tcl_ThreadQueueEvent(threadId: any, evPtr: Tcl_Event, position: Tcl_QueuePosition): void;

interface Tcl_Time {
	sec: number;
	usec: number;
}
declare var Tcl_Time: Tcl_Time;

interface Tcl_Token {
	type: number;
	start: string;
	size: number;
	numComponents: number;
}
declare var Tcl_Token: Tcl_Token;

declare function Tcl_TraceCommand(interp: Tcl_Interp, varName: string | any, flags: number, proc: (p1: any, p2: Tcl_Interp, p3: string, p4: string, p5: number) => void, clientData: any): number;

declare function Tcl_TraceVar(interp: Tcl_Interp, varName: string | any, flags: number, proc: (p1: any, p2: Tcl_Interp, p3: string, p4: string, p5: number) => string, clientData: any): number;

declare function Tcl_TraceVar2(interp: Tcl_Interp, part1: string | any, part2: string | any, flags: number, proc: (p1: any, p2: Tcl_Interp, p3: string, p4: string, p5: number) => string, clientData: any): number;

declare function Tcl_TranslateFileName(interp: Tcl_Interp, name: string | any, bufferPtr: Tcl_DString): string;

declare function Tcl_TruncateChannel(chan: any, length: number): number;

declare function Tcl_Ungets(chan: any, str: string | any, len: number, atHead: number): number;

declare function Tcl_UniCharAtIndex(src: string | any, index: number): number;

declare function Tcl_UniCharCaseMatch(uniStr: number, uniPattern: number, nocase: number): number;

declare function Tcl_UniCharIsAlnum(ch: number): number;

declare function Tcl_UniCharIsAlpha(ch: number): number;

declare function Tcl_UniCharIsControl(ch: number): number;

declare function Tcl_UniCharIsDigit(ch: number): number;

declare function Tcl_UniCharIsGraph(ch: number): number;

declare function Tcl_UniCharIsLower(ch: number): number;

declare function Tcl_UniCharIsPrint(ch: number): number;

declare function Tcl_UniCharIsPunct(ch: number): number;

declare function Tcl_UniCharIsSpace(ch: number): number;

declare function Tcl_UniCharIsUpper(ch: number): number;

declare function Tcl_UniCharIsWordChar(ch: number): number;

declare function Tcl_UniCharLen(uniStr: number): number;

declare function Tcl_UniCharNcasecmp(ucs: number, uct: number, numChars: number): number;

declare function Tcl_UniCharNcmp(ucs: number, uct: number, numChars: number): number;

declare function Tcl_UniCharToLower(ch: number): number;

declare function Tcl_UniCharToTitle(ch: number): number;

declare function Tcl_UniCharToUpper(ch: number): number;

declare function Tcl_UniCharToUtf(ch: number, buf: string | any): number;

declare function Tcl_UniCharToUtfDString(uniStr: number, uniLength: number, dsPtr: Tcl_DString): string;

declare function Tcl_UnlinkVar(interp: Tcl_Interp, varName: string | any): void;

declare function Tcl_UnregisterChannel(interp: Tcl_Interp, chan: any): number;

declare function Tcl_UnsetVar(interp: Tcl_Interp, varName: string | any, flags: number): number;

declare function Tcl_UnsetVar2(interp: Tcl_Interp, part1: string | any, part2: string | any, flags: number): number;

declare function Tcl_UnstackChannel(interp: Tcl_Interp, chan: any): number;

declare function Tcl_UntraceCommand(interp: Tcl_Interp, varName: string | any, flags: number, proc: (p1: any, p2: Tcl_Interp, p3: string, p4: string, p5: number) => void, clientData: any): void;

declare function Tcl_UntraceVar(interp: Tcl_Interp, varName: string | any, flags: number, proc: (p1: any, p2: Tcl_Interp, p3: string, p4: string, p5: number) => string, clientData: any): void;

declare function Tcl_UntraceVar2(interp: Tcl_Interp, part1: string | any, part2: string | any, flags: number, proc: (p1: any, p2: Tcl_Interp, p3: string, p4: string, p5: number) => string, clientData: any): void;

declare function Tcl_UpVar(interp: Tcl_Interp, frameName: string | any, varName: string | any, localName: string | any, flags: number): number;

declare function Tcl_UpVar2(interp: Tcl_Interp, frameName: string | any, part1: string | any, part2: string | any, localName: string | any, flags: number): number;

declare function Tcl_UpdateLinkedVar(interp: Tcl_Interp, varName: string | any): void;

declare function Tcl_UtfAtIndex(src: string | any, index: number): string;

declare function Tcl_UtfBackslash(src: string | any, readPtr: number, dst: string | any): number;

declare function Tcl_UtfCharComplete(src: string | any, length: number): number;

declare function Tcl_UtfFindFirst(src: string | any, ch: number): string;

declare function Tcl_UtfFindLast(src: string | any, ch: number): string;

declare function Tcl_UtfNcasecmp(s1: string | any, s2: string | any, n: number): number;

declare function Tcl_UtfNcmp(s1: string | any, s2: string | any, n: number): number;

declare function Tcl_UtfNext(src: string | any): string;

declare function Tcl_UtfPrev(src: string | any, start: string | any): string;

declare function Tcl_UtfToExternal(interp: Tcl_Interp, encoding: any, src: string | any, srcLen: number, flags: number, statePtr: any, dst: string | any, dstLen: number, srcReadPtr: number, dstWrotePtr: number, dstCharsPtr: number): number;

declare function Tcl_UtfToExternalDString(encoding: any, src: string | any, srcLen: number, dsPtr: Tcl_DString): string;

declare function Tcl_UtfToLower(src: string | any): number;

declare function Tcl_UtfToTitle(src: string | any): number;

declare function Tcl_UtfToUniChar(src: string | any, chPtr: number): number;

declare function Tcl_UtfToUniCharDString(src: string | any, length: number, dsPtr: Tcl_DString): number;

declare function Tcl_UtfToUpper(src: string | any): number;

declare function Tcl_ValidateAllMemory(file: string | any, line: number): void;

interface Tcl_Value {
	type: Tcl_ValueType;
	intValue: number;
	doubleValue: number;
	wideValue: number;
}
declare var Tcl_Value: Tcl_Value;

enum Tcl_ValueType {

	CL_INT = 0,

	CL_DOUBLE = 1,

	CL_EITHER = 2,

	CL_WIDE_INT = 3
}


declare function Tcl_VarTraceInfo(interp: Tcl_Interp, varName: string | any, flags: number, procPtr: (p1: any, p2: Tcl_Interp, p3: string, p4: string, p5: number) => string, prevClientData: any): any;

declare function Tcl_VarTraceInfo2(interp: Tcl_Interp, part1: string | any, part2: string | any, flags: number, procPtr: (p1: any, p2: Tcl_Interp, p3: string, p4: string, p5: number) => string, prevClientData: any): any;

declare function Tcl_WaitForEvent(timePtr: Tcl_Time): number;

declare function Tcl_WaitPid(pid: any, statPtr: number, options: number): any;

declare function Tcl_Write(chan: any, s: string | any, slen: number): number;

declare function Tcl_WriteChars(chan: any, src: string | any, srcLen: number): number;

declare function Tcl_WriteRaw(chan: any, src: string | any, srcLen: number): number;

declare var ltm_prime_tab: number;

declare function mp_get_int(a: mp_int): number;

interface mp_int {
	used: number;
	alloc: number;
	sign: number;
	dp: number;
}
declare var mp_int: mp_int;

declare var tclPlatStubsPtr: TclPlatStubs;

declare var tclTomMathStubsPtr: TclTomMathStubs;
