
declare function AEDesc_Convert(p1: PyObject, p2: AEDesc): number;

declare function AEDesc_New(p1: AEDesc): PyObject;

declare function AEDesc_NewBorrowed(p1: AEDesc): PyObject;

declare function CFArrayRefObj_Convert(p1: PyObject, p2: NSArray<any>): number;

declare function CFArrayRefObj_New(p1: NSArray<any> | any[]): PyObject;

declare function CFDictionaryRefObj_Convert(p1: PyObject, p2: NSDictionary<any, any>): number;

declare function CFDictionaryRefObj_New(p1: NSDictionary<any, any>): PyObject;

declare function CFMutableArrayRefObj_Convert(p1: PyObject, p2: NSArray<any>): number;

declare function CFMutableArrayRefObj_New(p1: NSArray<any> | any[]): PyObject;

declare function CFMutableDictionaryRefObj_Convert(p1: PyObject, p2: NSDictionary<any, any>): number;

declare function CFMutableDictionaryRefObj_New(p1: NSDictionary<any, any>): PyObject;

declare function CFMutableStringRefObj_Convert(p1: PyObject, p2: string): number;

declare function CFMutableStringRefObj_New(p1: string): PyObject;

declare function CFObj_Convert(p1: PyObject, p2: any): number;

declare function CFObj_New(p1: any): PyObject;

declare function CFStringRefObj_Convert(p1: PyObject, p2: string): number;

declare function CFStringRefObj_New(p1: string): PyObject;

declare function CFTypeRefObj_Convert(p1: PyObject, p2: any): number;

declare function CFTypeRefObj_New(p1: any): PyObject;

declare function CFURLRefObj_Convert(p1: PyObject, p2: NSURL): number;

declare function CFURLRefObj_New(p1: NSURL): PyObject;

declare function CmpInstObj_Convert(p1: PyObject, p2: ComponentInstanceRecord): number;

declare function CmpInstObj_New(p1: ComponentInstanceRecord): PyObject;

declare function CmpObj_Convert(p1: PyObject, p2: ComponentRecord): number;

declare function CmpObj_New(p1: ComponentRecord): PyObject;

declare function OptResObj_Convert(p1: PyObject, p2: string): number;

declare function OptResObj_New(p1: string): PyObject;

declare function OptionalCFURLRefObj_Convert(p1: PyObject, p2: NSURL): number;

declare function PyAST_Compile(p1: any, p2: string | any, p3: PyCompilerFlags, p4: any): PyCodeObject;

interface PyAddrPair {
	ap_lower: number;
	ap_upper: number;
}
declare var PyAddrPair: PyAddrPair;

declare function PyArena_AddPyObject(p1: any, p2: PyObject): number;

declare function PyArena_Free(p1: any): void;

declare function PyArena_Malloc(p1: any, size: number): any;

declare function PyArena_New(): any;

interface PyBaseExceptionObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	dict: PyObject;
	args: PyObject;
	message: PyObject;
}
declare var PyBaseExceptionObject: PyBaseExceptionObject;

declare var PyBaseObject_Type: PyTypeObject;

declare var PyBaseString_Type: PyTypeObject;

declare function PyBool_FromLong(p1: number): PyObject;

declare var PyBool_Type: PyTypeObject;

interface PyBufferProcs {
	bf_getreadbuffer: (p1: PyObject, p2: number, p3: any) => number;
	bf_getwritebuffer: (p1: PyObject, p2: number, p3: any) => number;
	bf_getsegcount: (p1: PyObject, p2: number) => number;
	bf_getcharbuffer: (p1: PyObject, p2: number, p3: string) => number;
	bf_getbuffer: (p1: PyObject, p2: Py_buffer, p3: number) => number;
	bf_releasebuffer: (p1: PyObject, p2: Py_buffer) => void;
}
declare var PyBufferProcs: PyBufferProcs;

declare function PyBuffer_FillContiguousStrides(ndims: number, shape: number, strides: number, itemsize: number, fort: number): void;

declare function PyBuffer_FillInfo(view: Py_buffer, o: PyObject, buf: any, len: number, readonly: number, flags: number): number;

declare function PyBuffer_FromContiguous(view: Py_buffer, buf: any, len: number, fort: number): number;

declare function PyBuffer_FromMemory(ptr: any, size: number): PyObject;

declare function PyBuffer_FromObject(base: PyObject, offset: number, size: number): PyObject;

declare function PyBuffer_FromReadWriteMemory(ptr: any, size: number): PyObject;

declare function PyBuffer_FromReadWriteObject(base: PyObject, offset: number, size: number): PyObject;

declare function PyBuffer_GetPointer(view: Py_buffer, indices: number): any;

declare function PyBuffer_IsContiguous(view: Py_buffer, fort: number): number;

declare function PyBuffer_New(size: number): PyObject;

declare function PyBuffer_Release(view: Py_buffer): void;

declare function PyBuffer_SizeFromFormat(p1: string | any): number;

declare function PyBuffer_ToContiguous(buf: any, view: Py_buffer, len: number, fort: number): number;

declare var PyBuffer_Type: PyTypeObject;

declare var PyByteArrayIter_Type: PyTypeObject;

interface PyByteArrayObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_size: number;
	ob_exports: number;
	ob_alloc: number;
	ob_bytes: string;
}
declare var PyByteArrayObject: PyByteArrayObject;

declare function PyByteArray_AsString(p1: PyObject): string;

declare function PyByteArray_Concat(p1: PyObject, p2: PyObject): PyObject;

declare function PyByteArray_Fini(): void;

declare function PyByteArray_FromObject(p1: PyObject): PyObject;

declare function PyByteArray_FromStringAndSize(p1: string | any, p2: number): PyObject;

declare function PyByteArray_Init(): number;

declare function PyByteArray_Resize(p1: PyObject, p2: number): number;

declare function PyByteArray_Size(p1: PyObject): number;

declare var PyByteArray_Type: PyTypeObject;

interface PyCFunctionObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	m_ml: PyMethodDef;
	m_self: PyObject;
	m_module: PyObject;
}
declare var PyCFunctionObject: PyCFunctionObject;

declare function PyCFunction_Call(p1: PyObject, p2: PyObject, p3: PyObject): PyObject;

declare function PyCFunction_ClearFreeList(): number;

declare function PyCFunction_Fini(): void;

declare function PyCFunction_GetFlags(p1: PyObject): number;

declare function PyCFunction_GetFunction(p1: PyObject): (p1: PyObject, p2: PyObject) => PyObject;

declare function PyCFunction_GetSelf(p1: PyObject): PyObject;

declare function PyCFunction_NewEx(p1: PyMethodDef, p2: PyObject, p3: PyObject): PyObject;

declare var PyCFunction_Type: PyTypeObject;

interface PyCObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	cobject: any;
	desc: any;
	destructor: (p1: any) => void;
}
declare var PyCObject: PyCObject;

declare function PyCObject_AsVoidPtr(p1: PyObject): any;

declare function PyCObject_FromVoidPtr(cobj: any, destruct: (p1: any) => void): PyObject;

declare function PyCObject_FromVoidPtrAndDesc(cobj: any, desc: any, destruct: (p1: any, p2: any) => void): PyObject;

declare function PyCObject_GetDesc(p1: PyObject): any;

declare function PyCObject_Import(module_name: string | any, cobject_name: string | any): any;

declare function PyCObject_SetVoidPtr(self: PyObject, cobj: any): number;

declare var PyCObject_Type: PyTypeObject;

declare function PyCallIter_New(p1: PyObject, p2: PyObject): PyObject;

declare var PyCallIter_Type: PyTypeObject;

declare function PyCallable_Check(p1: PyObject): number;

declare function PyCapsule_GetContext(capsule: PyObject): any;

declare function PyCapsule_GetDestructor(capsule: PyObject): (p1: PyObject) => void;

declare function PyCapsule_GetName(capsule: PyObject): string;

declare function PyCapsule_GetPointer(capsule: PyObject, name: string | any): any;

declare function PyCapsule_Import(name: string | any, no_block: number): any;

declare function PyCapsule_IsValid(capsule: PyObject, name: string | any): number;

declare function PyCapsule_New(pointer: any, name: string | any, destructor: (p1: PyObject) => void): PyObject;

declare function PyCapsule_SetContext(capsule: PyObject, context: any): number;

declare function PyCapsule_SetDestructor(capsule: PyObject, destructor: (p1: PyObject) => void): number;

declare function PyCapsule_SetName(capsule: PyObject, name: string | any): number;

declare function PyCapsule_SetPointer(capsule: PyObject, pointer: any): number;

declare var PyCapsule_Type: PyTypeObject;

interface PyCellObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_ref: PyObject;
}
declare var PyCellObject: PyCellObject;

declare function PyCell_Get(p1: PyObject): PyObject;

declare function PyCell_New(p1: PyObject): PyObject;

declare function PyCell_Set(p1: PyObject, p2: PyObject): number;

declare var PyCell_Type: PyTypeObject;

declare function PyClassMethod_New(p1: PyObject): PyObject;

declare var PyClassMethod_Type: PyTypeObject;

interface PyClassObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	cl_bases: PyObject;
	cl_dict: PyObject;
	cl_name: PyObject;
	cl_getattr: PyObject;
	cl_setattr: PyObject;
	cl_delattr: PyObject;
	cl_weakreflist: PyObject;
}
declare var PyClassObject: PyClassObject;

declare function PyClass_IsSubclass(p1: PyObject, p2: PyObject): number;

declare function PyClass_New(p1: PyObject, p2: PyObject, p3: PyObject): PyObject;

declare var PyClass_Type: PyTypeObject;

interface PyCodeObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	co_argcount: number;
	co_nlocals: number;
	co_stacksize: number;
	co_flags: number;
	co_code: PyObject;
	co_consts: PyObject;
	co_names: PyObject;
	co_varnames: PyObject;
	co_freevars: PyObject;
	co_cellvars: PyObject;
	co_filename: PyObject;
	co_name: PyObject;
	co_firstlineno: number;
	co_lnotab: PyObject;
	co_zombieframe: any;
	co_weakreflist: PyObject;
}
declare var PyCodeObject: PyCodeObject;

declare function PyCode_Addr2Line(p1: PyCodeObject, p2: number): number;

declare function PyCode_New(p1: number, p2: number, p3: number, p4: number, p5: PyObject, p6: PyObject, p7: PyObject, p8: PyObject, p9: PyObject, p10: PyObject, p11: PyObject, p12: PyObject, p13: number, p14: PyObject): PyCodeObject;

declare function PyCode_NewEmpty(filename: string | any, funcname: string | any, firstlineno: number): PyCodeObject;

declare function PyCode_Optimize(code: PyObject, consts: PyObject, names: PyObject, lineno_obj: PyObject): PyObject;

declare var PyCode_Type: PyTypeObject;

declare function PyCodec_BackslashReplaceErrors(exc: PyObject): PyObject;

declare function PyCodec_Decode(object_: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function PyCodec_Decoder(encoding: string | any): PyObject;

declare function PyCodec_Encode(object_: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function PyCodec_Encoder(encoding: string | any): PyObject;

declare function PyCodec_IgnoreErrors(exc: PyObject): PyObject;

declare function PyCodec_IncrementalDecoder(encoding: string | any, errors: string | any): PyObject;

declare function PyCodec_IncrementalEncoder(encoding: string | any, errors: string | any): PyObject;

declare function PyCodec_LookupError(name: string | any): PyObject;

declare function PyCodec_Register(search_function: PyObject): number;

declare function PyCodec_RegisterError(name: string | any, error: PyObject): number;

declare function PyCodec_ReplaceErrors(exc: PyObject): PyObject;

declare function PyCodec_StreamReader(encoding: string | any, stream: PyObject, errors: string | any): PyObject;

declare function PyCodec_StreamWriter(encoding: string | any, stream: PyObject, errors: string | any): PyObject;

declare function PyCodec_StrictErrors(exc: PyObject): PyObject;

declare function PyCodec_XMLCharRefReplaceErrors(exc: PyObject): PyObject;

interface PyCompilerFlags {
	cf_flags: number;
}
declare var PyCompilerFlags: PyCompilerFlags;

interface PyComplexObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	cval: Py_complex;
}
declare var PyComplexObject: PyComplexObject;

declare function PyComplex_AsCComplex(op: PyObject): Py_complex;

declare function PyComplex_FromCComplex(p1: Py_complex): PyObject;

declare function PyComplex_FromDoubles(real: number, imag: number): PyObject;

declare function PyComplex_ImagAsDouble(op: PyObject): number;

declare function PyComplex_RealAsDouble(op: PyObject): number;

declare var PyComplex_Type: PyTypeObject;

interface PyCursesWindowObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	win: _win_st;
}
declare var PyCursesWindowObject: PyCursesWindowObject;

declare var PyCurses_API: any;

interface PyDateTime_CAPI {
	DateType: PyTypeObject;
	DateTimeType: PyTypeObject;
	TimeType: PyTypeObject;
	DeltaType: PyTypeObject;
	TZInfoType: PyTypeObject;
	Date_FromDate: (p1: number, p2: number, p3: number, p4: PyTypeObject) => PyObject;
	DateTime_FromDateAndTime: (p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: PyObject, p9: PyTypeObject) => PyObject;
	Time_FromTime: (p1: number, p2: number, p3: number, p4: number, p5: PyObject, p6: PyTypeObject) => PyObject;
	Delta_FromDelta: (p1: number, p2: number, p3: number, p4: number, p5: PyTypeObject) => PyObject;
	DateTime_FromTimestamp: (p1: PyObject, p2: PyObject, p3: PyObject) => PyObject;
	Date_FromTimestamp: (p1: PyObject, p2: PyObject) => PyObject;
}
declare var PyDateTime_CAPI: PyDateTime_CAPI;

interface PyDateTime_Date {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	hashcode: number;
	hastzinfo: number;
	data: number;
}
declare var PyDateTime_Date: PyDateTime_Date;

interface PyDateTime_DateTime {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	hashcode: number;
	hastzinfo: number;
	data: number;
	tzinfo: PyObject;
}
declare var PyDateTime_DateTime: PyDateTime_DateTime;

interface PyDateTime_Delta {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	hashcode: number;
	days: number;
	seconds: number;
	microseconds: number;
}
declare var PyDateTime_Delta: PyDateTime_Delta;

interface PyDateTime_TZInfo {
	ob_refcnt: number;
	ob_type: PyTypeObject;
}
declare var PyDateTime_TZInfo: PyDateTime_TZInfo;

interface PyDateTime_Time {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	hashcode: number;
	hastzinfo: number;
	data: number;
	tzinfo: PyObject;
}
declare var PyDateTime_Time: PyDateTime_Time;

interface PyDescrObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	d_type: PyTypeObject;
	d_name: PyObject;
}
declare var PyDescrObject: PyDescrObject;

declare function PyDescr_NewClassMethod(p1: PyTypeObject, p2: PyMethodDef): PyObject;

declare function PyDescr_NewGetSet(p1: PyTypeObject, p2: PyGetSetDef): PyObject;

declare function PyDescr_NewMember(p1: PyTypeObject, p2: PyMemberDef): PyObject;

declare function PyDescr_NewMethod(p1: PyTypeObject, p2: PyMethodDef): PyObject;

declare function PyDescr_NewWrapper(p1: PyTypeObject, p2: wrapperbase, p3: any): PyObject;

interface PyDictEntry {
	me_hash: number;
	me_key: PyObject;
	me_value: PyObject;
}
declare var PyDictEntry: PyDictEntry;

declare var PyDictItems_Type: PyTypeObject;

declare var PyDictIterItem_Type: PyTypeObject;

declare var PyDictIterKey_Type: PyTypeObject;

declare var PyDictIterValue_Type: PyTypeObject;

declare var PyDictKeys_Type: PyTypeObject;

declare function PyDictProxy_New(p1: PyObject): PyObject;

declare var PyDictProxy_Type: PyTypeObject;

declare var PyDictValues_Type: PyTypeObject;

declare function PyDict_Clear(mp: PyObject): void;

declare function PyDict_Contains(mp: PyObject, key: PyObject): number;

declare function PyDict_Copy(mp: PyObject): PyObject;

declare function PyDict_DelItem(mp: PyObject, key: PyObject): number;

declare function PyDict_DelItemString(dp: PyObject, key: string | any): number;

declare function PyDict_Fini(): void;

declare function PyDict_GetItem(mp: PyObject, key: PyObject): PyObject;

declare function PyDict_GetItemString(dp: PyObject, key: string | any): PyObject;

declare function PyDict_Items(mp: PyObject): PyObject;

declare function PyDict_Keys(mp: PyObject): PyObject;

declare function PyDict_Merge(mp: PyObject, other: PyObject, override: number): number;

declare function PyDict_MergeFromSeq2(d: PyObject, seq2: PyObject, override: number): number;

declare function PyDict_New(): PyObject;

declare function PyDict_Next(mp: PyObject, pos: number, key: PyObject, value: PyObject): number;

declare function PyDict_SetItem(mp: PyObject, key: PyObject, item: PyObject): number;

declare function PyDict_SetItemString(dp: PyObject, key: string | any, item: PyObject): number;

declare function PyDict_Size(mp: PyObject): number;

declare var PyDict_Type: PyTypeObject;

declare function PyDict_Update(mp: PyObject, other: PyObject): number;

declare function PyDict_Values(mp: PyObject): PyObject;

declare var PyEllipsis_Type: PyTypeObject;

declare var PyEnum_Type: PyTypeObject;

interface PyEnvironmentErrorObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	dict: PyObject;
	args: PyObject;
	message: PyObject;
	myerrno: PyObject;
	strerror: PyObject;
	filename: PyObject;
}
declare var PyEnvironmentErrorObject: PyEnvironmentErrorObject;

declare function PyErr_BadArgument(): number;

declare function PyErr_BadInternalCall(): void;

declare function PyErr_CheckSignals(): number;

declare function PyErr_Clear(): void;

declare function PyErr_Display(p1: PyObject, p2: PyObject, p3: PyObject): void;

declare function PyErr_ExceptionMatches(p1: PyObject): number;

declare function PyErr_Fetch(p1: PyObject, p2: PyObject, p3: PyObject): void;

declare function PyErr_GivenExceptionMatches(p1: PyObject, p2: PyObject): number;

declare function PyErr_Mac(p1: PyObject, p2: number): PyObject;

declare function PyErr_NewException(name: string | any, base: PyObject, dict: PyObject): PyObject;

declare function PyErr_NewExceptionWithDoc(name: string | any, doc: string | any, base: PyObject, dict: PyObject): PyObject;

declare function PyErr_NoMemory(): PyObject;

declare function PyErr_NormalizeException(p1: PyObject, p2: PyObject, p3: PyObject): void;

declare function PyErr_Occurred(): PyObject;

declare function PyErr_Print(): void;

declare function PyErr_PrintEx(p1: number): void;

declare function PyErr_ProgramText(p1: string | any, p2: number): PyObject;

declare function PyErr_Restore(p1: PyObject, p2: PyObject, p3: PyObject): void;

declare function PyErr_SetFromErrno(p1: PyObject): PyObject;

declare function PyErr_SetFromErrnoWithFilename(p1: PyObject, p2: string | any): PyObject;

declare function PyErr_SetFromErrnoWithFilenameObject(p1: PyObject, p2: PyObject): PyObject;

declare function PyErr_SetInterrupt(): void;

declare function PyErr_SetNone(p1: PyObject): void;

declare function PyErr_SetObject(p1: PyObject, p2: PyObject): void;

declare function PyErr_SetString(p1: PyObject, p2: string | any): void;

declare function PyErr_SyntaxLocation(p1: string | any, p2: number): void;

declare function PyErr_WarnEx(p1: PyObject, p2: string | any, p3: number): number;

declare function PyErr_WarnExplicit(p1: PyObject, p2: string | any, p3: string | any, p4: number, p5: string | any, p6: PyObject): number;

declare function PyErr_WriteUnraisable(p1: PyObject): void;

declare function PyEval_AcquireLock(): void;

declare function PyEval_AcquireThread(tstate: PyThreadState): void;

declare function PyEval_CallObjectWithKeywords(p1: PyObject, p2: PyObject, p3: PyObject): PyObject;

declare function PyEval_EvalCode(p1: PyCodeObject, p2: PyObject, p3: PyObject): PyObject;

declare function PyEval_EvalCodeEx(co: PyCodeObject, globals: PyObject, locals: PyObject, args: PyObject, argc: number, kwds: PyObject, kwdc: number, defs: PyObject, defc: number, closure: PyObject): PyObject;

declare function PyEval_EvalFrame(p1: PyFrameObject): PyObject;

declare function PyEval_EvalFrameEx(f: PyFrameObject, exc: number): PyObject;

declare function PyEval_GetBuiltins(): PyObject;

declare function PyEval_GetCallStats(p1: PyObject): PyObject;

declare function PyEval_GetFrame(): PyFrameObject;

declare function PyEval_GetFuncDesc(p1: PyObject): string;

declare function PyEval_GetFuncName(p1: PyObject): string;

declare function PyEval_GetGlobals(): PyObject;

declare function PyEval_GetLocals(): PyObject;

declare function PyEval_GetRestricted(): number;

declare function PyEval_InitThreads(): void;

declare function PyEval_MergeCompilerFlags(cf: PyCompilerFlags): number;

declare function PyEval_ReInitThreads(): void;

declare function PyEval_ReleaseLock(): void;

declare function PyEval_ReleaseThread(tstate: PyThreadState): void;

declare function PyEval_RestoreThread(p1: PyThreadState): void;

declare function PyEval_SaveThread(): PyThreadState;

declare function PyEval_SetProfile(p1: (p1: PyObject, p2: PyFrameObject, p3: number, p4: PyObject) => number, p2: PyObject): void;

declare function PyEval_SetTrace(p1: (p1: PyObject, p2: PyFrameObject, p3: number, p4: PyObject) => number, p2: PyObject): void;

declare function PyEval_ThreadsInitialized(): number;

declare var PyExc_ArithmeticError: PyObject;

declare var PyExc_AssertionError: PyObject;

declare var PyExc_AttributeError: PyObject;

declare var PyExc_BaseException: PyObject;

declare var PyExc_BufferError: PyObject;

declare var PyExc_BytesWarning: PyObject;

declare var PyExc_DeprecationWarning: PyObject;

declare var PyExc_EOFError: PyObject;

declare var PyExc_EnvironmentError: PyObject;

declare var PyExc_Exception: PyObject;

declare var PyExc_FloatingPointError: PyObject;

declare var PyExc_FutureWarning: PyObject;

declare var PyExc_GeneratorExit: PyObject;

declare var PyExc_IOError: PyObject;

declare var PyExc_ImportError: PyObject;

declare var PyExc_ImportWarning: PyObject;

declare var PyExc_IndentationError: PyObject;

declare var PyExc_IndexError: PyObject;

declare var PyExc_KeyError: PyObject;

declare var PyExc_KeyboardInterrupt: PyObject;

declare var PyExc_LookupError: PyObject;

declare var PyExc_MemoryError: PyObject;

declare var PyExc_MemoryErrorInst: PyObject;

declare var PyExc_NameError: PyObject;

declare var PyExc_NotImplementedError: PyObject;

declare var PyExc_OSError: PyObject;

declare var PyExc_OverflowError: PyObject;

declare var PyExc_PendingDeprecationWarning: PyObject;

declare var PyExc_RecursionErrorInst: PyObject;

declare var PyExc_ReferenceError: PyObject;

declare var PyExc_RuntimeError: PyObject;

declare var PyExc_RuntimeWarning: PyObject;

declare var PyExc_StandardError: PyObject;

declare var PyExc_StopIteration: PyObject;

declare var PyExc_SyntaxError: PyObject;

declare var PyExc_SyntaxWarning: PyObject;

declare var PyExc_SystemError: PyObject;

declare var PyExc_SystemExit: PyObject;

declare var PyExc_TabError: PyObject;

declare var PyExc_TypeError: PyObject;

declare var PyExc_UnboundLocalError: PyObject;

declare var PyExc_UnicodeDecodeError: PyObject;

declare var PyExc_UnicodeEncodeError: PyObject;

declare var PyExc_UnicodeError: PyObject;

declare var PyExc_UnicodeTranslateError: PyObject;

declare var PyExc_UnicodeWarning: PyObject;

declare var PyExc_UserWarning: PyObject;

declare var PyExc_ValueError: PyObject;

declare var PyExc_Warning: PyObject;

declare var PyExc_ZeroDivisionError: PyObject;

interface PyFileObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	f_fp: FILE;
	f_name: PyObject;
	f_mode: PyObject;
	f_close: (p1: FILE) => number;
	f_softspace: number;
	f_binary: number;
	f_buf: string;
	f_bufend: string;
	f_bufptr: string;
	f_setbuf: string;
	f_univ_newline: number;
	f_newlinetypes: number;
	f_skipnextlf: number;
	f_encoding: PyObject;
	f_errors: PyObject;
	weakreflist: PyObject;
	unlocked_count: number;
	readable: number;
	writable: number;
}
declare var PyFileObject: PyFileObject;

declare function PyFile_AsFile(p1: PyObject): FILE;

declare function PyFile_DecUseCount(p1: PyFileObject): void;

declare function PyFile_FromFile(p1: FILE, p2: string | any, p3: string | any, p4: (p1: FILE) => number): PyObject;

declare function PyFile_FromString(p1: string | any, p2: string | any): PyObject;

declare function PyFile_GetLine(p1: PyObject, p2: number): PyObject;

declare function PyFile_IncUseCount(p1: PyFileObject): void;

declare function PyFile_Name(p1: PyObject): PyObject;

declare function PyFile_SetBufSize(p1: PyObject, p2: number): void;

declare function PyFile_SetEncoding(p1: PyObject, p2: string | any): number;

declare function PyFile_SetEncodingAndErrors(p1: PyObject, p2: string | any, errors: string | any): number;

declare function PyFile_SoftSpace(p1: PyObject, p2: number): number;

declare var PyFile_Type: PyTypeObject;

declare function PyFile_WriteObject(p1: PyObject, p2: PyObject, p3: number): number;

declare function PyFile_WriteString(p1: string | any, p2: PyObject): number;

interface PyFloatObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_fval: number;
}
declare var PyFloatObject: PyFloatObject;

declare function PyFloat_AsDouble(p1: PyObject): number;

declare function PyFloat_AsReprString(p1: string | any, v: PyFloatObject): void;

declare function PyFloat_AsString(p1: string | any, v: PyFloatObject): void;

declare function PyFloat_ClearFreeList(): number;

declare function PyFloat_Fini(): void;

declare function PyFloat_FromDouble(p1: number): PyObject;

declare function PyFloat_FromString(p1: PyObject, junk: string): PyObject;

declare function PyFloat_GetInfo(): PyObject;

declare function PyFloat_GetMax(): number;

declare function PyFloat_GetMin(): number;

declare var PyFloat_Type: PyTypeObject;

interface PyFrameObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_size: number;
	f_back: PyFrameObject;
	f_code: PyCodeObject;
	f_builtins: PyObject;
	f_globals: PyObject;
	f_locals: PyObject;
	f_valuestack: PyObject;
	f_stacktop: PyObject;
	f_trace: PyObject;
	f_exc_type: PyObject;
	f_exc_value: PyObject;
	f_exc_traceback: PyObject;
	f_tstate: PyThreadState;
	f_lasti: number;
	f_lineno: number;
	f_iblock: number;
	f_blockstack: PyTryBlock;
	f_localsplus: PyObject;
}
declare var PyFrameObject: PyFrameObject;

declare function PyFrame_BlockPop(p1: PyFrameObject): PyTryBlock;

declare function PyFrame_BlockSetup(p1: PyFrameObject, p2: number, p3: number, p4: number): void;

declare function PyFrame_ClearFreeList(): number;

declare function PyFrame_ExtendStack(p1: PyFrameObject, p2: number, p3: number): PyObject;

declare function PyFrame_FastToLocals(p1: PyFrameObject): void;

declare function PyFrame_Fini(): void;

declare function PyFrame_GetLineNumber(p1: PyFrameObject): number;

declare function PyFrame_LocalsToFast(p1: PyFrameObject, p2: number): void;

declare function PyFrame_New(p1: PyThreadState, p2: PyCodeObject, p3: PyObject, p4: PyObject): PyFrameObject;

declare var PyFrame_Type: PyTypeObject;

declare function PyFrozenSet_New(p1: PyObject): PyObject;

declare var PyFrozenSet_Type: PyTypeObject;

interface PyFunctionObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	func_code: PyObject;
	func_globals: PyObject;
	func_defaults: PyObject;
	func_closure: PyObject;
	func_doc: PyObject;
	func_name: PyObject;
	func_dict: PyObject;
	func_weakreflist: PyObject;
	func_module: PyObject;
}
declare var PyFunctionObject: PyFunctionObject;

declare function PyFunction_GetClosure(p1: PyObject): PyObject;

declare function PyFunction_GetCode(p1: PyObject): PyObject;

declare function PyFunction_GetDefaults(p1: PyObject): PyObject;

declare function PyFunction_GetGlobals(p1: PyObject): PyObject;

declare function PyFunction_GetModule(p1: PyObject): PyObject;

declare function PyFunction_New(p1: PyObject, p2: PyObject): PyObject;

declare function PyFunction_SetClosure(p1: PyObject, p2: PyObject): number;

declare function PyFunction_SetDefaults(p1: PyObject, p2: PyObject): number;

declare var PyFunction_Type: PyTypeObject;

interface PyFutureFeatures {
	ff_features: number;
	ff_lineno: number;
}
declare var PyFutureFeatures: PyFutureFeatures;

declare function PyFuture_FromAST(p1: any, p2: string | any): PyFutureFeatures;

declare function PyGC_Collect(): number;

declare function PyGILState_Ensure(): PyGILState_STATE;

declare function PyGILState_GetThisThreadState(): PyThreadState;

declare function PyGILState_Release(p1: PyGILState_STATE): void;

enum PyGILState_STATE {

	LOCKED = 0,

	UNLOCKED = 1
}


interface PyGenObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	gi_frame: PyFrameObject;
	gi_running: number;
	gi_code: PyObject;
	gi_weakreflist: PyObject;
}
declare var PyGenObject: PyGenObject;

declare function PyGen_NeedsFinalizing(p1: PyGenObject): number;

declare function PyGen_New(p1: PyFrameObject): PyObject;

declare var PyGen_Type: PyTypeObject;

interface PyGetSetDef {
	name: string;
	get: (p1: PyObject, p2: any) => PyObject;
	set: (p1: PyObject, p2: PyObject, p3: any) => number;
	doc: string;
	closure: any;
}
declare var PyGetSetDef: PyGetSetDef;

interface PyGetSetDescrObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	d_type: PyTypeObject;
	d_name: PyObject;
	d_getset: PyGetSetDef;
}
declare var PyGetSetDescrObject: PyGetSetDescrObject;

declare var PyGetSetDescr_Type: PyTypeObject;

declare function PyGrammar_AddAccelerators(g: grammar): void;

declare function PyGrammar_FindDFA(g: grammar, type: number): dfa;

declare function PyGrammar_LabelRepr(lb: label): string;

declare function PyGrammar_RemoveAccelerators(p1: grammar): void;

interface PyHeapTypeObject {
	ht_type: PyTypeObject;
	as_number: PyNumberMethods;
	as_mapping: PyMappingMethods;
	as_sequence: PySequenceMethods;
	as_buffer: PyBufferProcs;
	ht_name: PyObject;
	ht_slots: PyObject;
}
declare var PyHeapTypeObject: PyHeapTypeObject;

declare function PyImport_AddModule(name: string | any): PyObject;

declare function PyImport_AppendInittab(name: string | any, initfunc: () => void): number;

declare function PyImport_Cleanup(): void;

declare function PyImport_ExecCodeModule(name: string | any, co: PyObject): PyObject;

declare function PyImport_ExecCodeModuleEx(name: string | any, co: PyObject, pathname: string | any): PyObject;

declare function PyImport_ExtendInittab(newtab: _inittab): number;

declare var PyImport_FrozenModules: _frozen;

declare function PyImport_GetImporter(path: PyObject): PyObject;

declare function PyImport_GetMagicNumber(): number;

declare function PyImport_GetModuleDict(): PyObject;

declare function PyImport_Import(name: PyObject): PyObject;

declare function PyImport_ImportFrozenModule(p1: string | any): number;

declare function PyImport_ImportModule(name: string | any): PyObject;

declare function PyImport_ImportModuleLevel(name: string | any, globals: PyObject, locals: PyObject, fromlist: PyObject, level: number): PyObject;

declare function PyImport_ImportModuleNoBlock(p1: string | any): PyObject;

declare var PyImport_Inittab: _inittab;

declare function PyImport_ReloadModule(m: PyObject): PyObject;

interface PyInstanceObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	in_class: PyClassObject;
	in_dict: PyObject;
	in_weakreflist: PyObject;
}
declare var PyInstanceObject: PyInstanceObject;

declare function PyInstance_New(p1: PyObject, p2: PyObject, p3: PyObject): PyObject;

declare function PyInstance_NewRaw(p1: PyObject, p2: PyObject): PyObject;

declare var PyInstance_Type: PyTypeObject;

interface PyIntObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_ival: number;
}
declare var PyIntObject: PyIntObject;

declare function PyInt_AsLong(p1: PyObject): number;

declare function PyInt_AsSsize_t(p1: PyObject): number;

declare function PyInt_AsUnsignedLongLongMask(p1: PyObject): number;

declare function PyInt_AsUnsignedLongMask(p1: PyObject): number;

declare function PyInt_ClearFreeList(): number;

declare function PyInt_Fini(): void;

declare function PyInt_FromLong(p1: number): PyObject;

declare function PyInt_FromSize_t(p1: number): PyObject;

declare function PyInt_FromSsize_t(p1: number): PyObject;

declare function PyInt_FromString(p1: string | any, p2: string, p3: number): PyObject;

declare function PyInt_FromUnicode(p1: number, p2: number, p3: number): PyObject;

declare function PyInt_GetMax(): number;

declare var PyInt_Type: PyTypeObject;

interface PyInterpreterState {
	next: PyInterpreterState;
	tstate_head: PyThreadState;
	modules: PyObject;
	sysdict: PyObject;
	builtins: PyObject;
	modules_reloading: PyObject;
	codec_search_path: PyObject;
	codec_search_cache: PyObject;
	codec_error_registry: PyObject;
	dlopenflags: number;
}
declare var PyInterpreterState: PyInterpreterState;

declare function PyInterpreterState_Clear(p1: PyInterpreterState): void;

declare function PyInterpreterState_Delete(p1: PyInterpreterState): void;

declare function PyInterpreterState_Head(): PyInterpreterState;

declare function PyInterpreterState_New(): PyInterpreterState;

declare function PyInterpreterState_Next(p1: PyInterpreterState): PyInterpreterState;

declare function PyInterpreterState_ThreadHead(p1: PyInterpreterState): PyThreadState;

declare function PyIter_Next(p1: PyObject): PyObject;

interface PyListObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_size: number;
	ob_item: PyObject;
	allocated: number;
}
declare var PyListObject: PyListObject;

declare function PyList_Append(p1: PyObject, p2: PyObject): number;

declare function PyList_AsTuple(p1: PyObject): PyObject;

declare function PyList_Fini(): void;

declare function PyList_GetItem(p1: PyObject, p2: number): PyObject;

declare function PyList_GetSlice(p1: PyObject, p2: number, p3: number): PyObject;

declare function PyList_Insert(p1: PyObject, p2: number, p3: PyObject): number;

declare function PyList_New(size: number): PyObject;

declare function PyList_Reverse(p1: PyObject): number;

declare function PyList_SetItem(p1: PyObject, p2: number, p3: PyObject): number;

declare function PyList_SetSlice(p1: PyObject, p2: number, p3: number, p4: PyObject): number;

declare function PyList_Size(p1: PyObject): number;

declare function PyList_Sort(p1: PyObject): number;

declare var PyList_Type: PyTypeObject;

declare function PyLong_AsDouble(p1: PyObject): number;

declare function PyLong_AsLong(p1: PyObject): number;

declare function PyLong_AsLongAndOverflow(p1: PyObject, p2: number): number;

declare function PyLong_AsLongLong(p1: PyObject): number;

declare function PyLong_AsLongLongAndOverflow(p1: PyObject, p2: number): number;

declare function PyLong_AsSsize_t(p1: PyObject): number;

declare function PyLong_AsUnsignedLong(p1: PyObject): number;

declare function PyLong_AsUnsignedLongLong(p1: PyObject): number;

declare function PyLong_AsUnsignedLongLongMask(p1: PyObject): number;

declare function PyLong_AsUnsignedLongMask(p1: PyObject): number;

declare function PyLong_AsVoidPtr(p1: PyObject): any;

declare function PyLong_FromDouble(p1: number): PyObject;

declare function PyLong_FromLong(p1: number): PyObject;

declare function PyLong_FromLongLong(p1: number): PyObject;

declare function PyLong_FromSize_t(p1: number): PyObject;

declare function PyLong_FromSsize_t(p1: number): PyObject;

declare function PyLong_FromString(p1: string | any, p2: string, p3: number): PyObject;

declare function PyLong_FromUnicode(p1: number, p2: number, p3: number): PyObject;

declare function PyLong_FromUnsignedLong(p1: number): PyObject;

declare function PyLong_FromUnsignedLongLong(p1: number): PyObject;

declare function PyLong_FromVoidPtr(p1: any): PyObject;

declare function PyLong_GetInfo(): PyObject;

declare var PyLong_Type: PyTypeObject;

declare function PyMac_BuildEventRecord(p1: EventRecord): PyObject;

declare function PyMac_BuildFSRef(p1: FSRef): PyObject;

declare function PyMac_BuildFixed(p1: number): PyObject;

declare function PyMac_BuildNumVersion(p1: NumVersion): PyObject;

declare function PyMac_BuildOSType(p1: number): PyObject;

declare function PyMac_BuildOptStr255(p1: number): PyObject;

declare function PyMac_BuildPoint(p1: Point): PyObject;

declare function PyMac_BuildRect(p1: Rect): PyObject;

declare function PyMac_BuildStr255(p1: number): PyObject;

declare function PyMac_Buildwide(p1: wide): PyObject;

declare function PyMac_Error(p1: number): PyObject;

declare function PyMac_GetEventRecord(p1: PyObject, p2: EventRecord): number;

declare function PyMac_GetFSRef(p1: PyObject, p2: FSRef): number;

declare function PyMac_GetFixed(p1: PyObject, p2: number): number;

declare function PyMac_GetOSErrException(): PyObject;

declare function PyMac_GetOSType(p1: PyObject, p2: number): number;

declare function PyMac_GetPoint(p1: PyObject, p2: Point): number;

declare function PyMac_GetRect(p1: PyObject, p2: Rect): number;

declare function PyMac_GetStr255(p1: PyObject, p2: number): number;

declare function PyMac_Getwide(p1: PyObject, p2: wide): number;

declare var PyMac_OSErrException: PyObject;

declare function PyMac_StrError(p1: number): string;

interface PyMappingMethods {
	mp_length: (p1: PyObject) => number;
	mp_subscript: (p1: PyObject, p2: PyObject) => PyObject;
	mp_ass_subscript: (p1: PyObject, p2: PyObject, p3: PyObject) => number;
}
declare var PyMappingMethods: PyMappingMethods;

declare function PyMapping_Check(o: PyObject): number;

declare function PyMapping_GetItemString(o: PyObject, key: string | any): PyObject;

declare function PyMapping_HasKey(o: PyObject, key: PyObject): number;

declare function PyMapping_HasKeyString(o: PyObject, key: string | any): number;

declare function PyMapping_Length(o: PyObject): number;

declare function PyMapping_SetItemString(o: PyObject, key: string | any, value: PyObject): number;

declare function PyMapping_Size(o: PyObject): number;

declare function PyMarshal_ReadLastObjectFromFile(p1: FILE): PyObject;

declare function PyMarshal_ReadLongFromFile(p1: FILE): number;

declare function PyMarshal_ReadObjectFromFile(p1: FILE): PyObject;

declare function PyMarshal_ReadObjectFromString(p1: string | any, p2: number): PyObject;

declare function PyMarshal_ReadShortFromFile(p1: FILE): number;

declare function PyMarshal_WriteLongToFile(p1: number, p2: FILE, p3: number): void;

declare function PyMarshal_WriteObjectToFile(p1: PyObject, p2: FILE, p3: number): void;

declare function PyMarshal_WriteObjectToString(p1: PyObject, p2: number): PyObject;

declare function PyMem_Free(p1: any): void;

declare function PyMem_Malloc(p1: number): any;

declare function PyMem_Realloc(p1: any, p2: number): any;

interface PyMemberDef {
	name: string;
	type: number;
	offset: number;
	flags: number;
	doc: string;
}
declare var PyMemberDef: PyMemberDef;

interface PyMemberDescrObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	d_type: PyTypeObject;
	d_name: PyObject;
	d_member: PyMemberDef;
}
declare var PyMemberDescrObject: PyMemberDescrObject;

declare var PyMemberDescr_Type: PyTypeObject;

declare function PyMember_Get(p1: string | any, p2: memberlist, p3: string | any): PyObject;

declare function PyMember_GetOne(p1: string | any, p2: PyMemberDef): PyObject;

declare function PyMember_Set(p1: string | any, p2: memberlist, p3: string | any, p4: PyObject): number;

declare function PyMember_SetOne(p1: string | any, p2: PyMemberDef, p3: PyObject): number;

interface PyMemoryViewObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	base: PyObject;
	view: Py_buffer;
}
declare var PyMemoryViewObject: PyMemoryViewObject;

declare function PyMemoryView_FromBuffer(info: Py_buffer): PyObject;

declare function PyMemoryView_FromObject(base: PyObject): PyObject;

declare function PyMemoryView_GetContiguous(base: PyObject, buffertype: number, fort: number): PyObject;

declare var PyMemoryView_Type: PyTypeObject;

interface PyMethodChain {
	methods: PyMethodDef;
	link: PyMethodChain;
}
declare var PyMethodChain: PyMethodChain;

interface PyMethodDef {
	ml_name: string;
	ml_meth: (p1: PyObject, p2: PyObject) => PyObject;
	ml_flags: number;
	ml_doc: string;
}
declare var PyMethodDef: PyMethodDef;

interface PyMethodDescrObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	d_type: PyTypeObject;
	d_name: PyObject;
	d_method: PyMethodDef;
}
declare var PyMethodDescrObject: PyMethodDescrObject;

interface PyMethodObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	im_func: PyObject;
	im_self: PyObject;
	im_class: PyObject;
	im_weakreflist: PyObject;
}
declare var PyMethodObject: PyMethodObject;

declare function PyMethod_Class(p1: PyObject): PyObject;

declare function PyMethod_ClearFreeList(): number;

declare function PyMethod_Fini(): void;

declare function PyMethod_Function(p1: PyObject): PyObject;

declare function PyMethod_New(p1: PyObject, p2: PyObject, p3: PyObject): PyObject;

declare function PyMethod_Self(p1: PyObject): PyObject;

declare var PyMethod_Type: PyTypeObject;

declare function PyModule_AddIntConstant(p1: PyObject, p2: string | any, p3: number): number;

declare function PyModule_AddObject(p1: PyObject, p2: string | any, p3: PyObject): number;

declare function PyModule_AddStringConstant(p1: PyObject, p2: string | any, p3: string | any): number;

declare function PyModule_GetDict(p1: PyObject): PyObject;

declare function PyModule_GetFilename(p1: PyObject): string;

declare function PyModule_GetName(p1: PyObject): string;

declare function PyModule_New(p1: string | any): PyObject;

declare var PyModule_Type: PyTypeObject;

declare function PyNode_AddChild(n: node, type: number, str: string | any, lineno: number, col_offset: number): number;

declare function PyNode_Compile(p1: node, p2: string | any): PyCodeObject;

declare function PyNode_Free(n: node): void;

declare function PyNode_ListTree(p1: node): void;

declare function PyNode_New(type: number): node;

declare var PyNullImporter_Type: PyTypeObject;

interface PyNumberMethods {
	nb_add: (p1: PyObject, p2: PyObject) => PyObject;
	nb_subtract: (p1: PyObject, p2: PyObject) => PyObject;
	nb_multiply: (p1: PyObject, p2: PyObject) => PyObject;
	nb_divide: (p1: PyObject, p2: PyObject) => PyObject;
	nb_remainder: (p1: PyObject, p2: PyObject) => PyObject;
	nb_divmod: (p1: PyObject, p2: PyObject) => PyObject;
	nb_power: (p1: PyObject, p2: PyObject, p3: PyObject) => PyObject;
	nb_negative: (p1: PyObject) => PyObject;
	nb_positive: (p1: PyObject) => PyObject;
	nb_absolute: (p1: PyObject) => PyObject;
	nb_nonzero: (p1: PyObject) => number;
	nb_invert: (p1: PyObject) => PyObject;
	nb_lshift: (p1: PyObject, p2: PyObject) => PyObject;
	nb_rshift: (p1: PyObject, p2: PyObject) => PyObject;
	nb_and: (p1: PyObject, p2: PyObject) => PyObject;
	nb_xor: (p1: PyObject, p2: PyObject) => PyObject;
	nb_or: (p1: PyObject, p2: PyObject) => PyObject;
	nb_coerce: (p1: PyObject, p2: PyObject) => number;
	nb_int: (p1: PyObject) => PyObject;
	nb_long: (p1: PyObject) => PyObject;
	nb_float: (p1: PyObject) => PyObject;
	nb_oct: (p1: PyObject) => PyObject;
	nb_hex: (p1: PyObject) => PyObject;
	nb_inplace_add: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_subtract: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_multiply: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_divide: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_remainder: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_power: (p1: PyObject, p2: PyObject, p3: PyObject) => PyObject;
	nb_inplace_lshift: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_rshift: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_and: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_xor: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_or: (p1: PyObject, p2: PyObject) => PyObject;
	nb_floor_divide: (p1: PyObject, p2: PyObject) => PyObject;
	nb_true_divide: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_floor_divide: (p1: PyObject, p2: PyObject) => PyObject;
	nb_inplace_true_divide: (p1: PyObject, p2: PyObject) => PyObject;
	nb_index: (p1: PyObject) => PyObject;
}
declare var PyNumberMethods: PyNumberMethods;

declare function PyNumber_Absolute(o: PyObject): PyObject;

declare function PyNumber_Add(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_And(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_AsSsize_t(o: PyObject, exc: PyObject): number;

declare function PyNumber_Check(o: PyObject): number;

declare function PyNumber_Coerce(p1: PyObject, p2: PyObject): number;

declare function PyNumber_CoerceEx(p1: PyObject, p2: PyObject): number;

declare function PyNumber_Divide(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_Divmod(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_Float(o: PyObject): PyObject;

declare function PyNumber_FloorDivide(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceAdd(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceAnd(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceDivide(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceFloorDivide(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceLshift(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceMultiply(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceOr(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlacePower(o1: PyObject, o2: PyObject, o3: PyObject): PyObject;

declare function PyNumber_InPlaceRemainder(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceRshift(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceSubtract(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceTrueDivide(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_InPlaceXor(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_Index(o: PyObject): PyObject;

declare function PyNumber_Int(o: PyObject): PyObject;

declare function PyNumber_Invert(o: PyObject): PyObject;

declare function PyNumber_Long(o: PyObject): PyObject;

declare function PyNumber_Lshift(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_Multiply(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_Negative(o: PyObject): PyObject;

declare function PyNumber_Or(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_Positive(o: PyObject): PyObject;

declare function PyNumber_Power(o1: PyObject, o2: PyObject, o3: PyObject): PyObject;

declare function PyNumber_Remainder(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_Rshift(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_Subtract(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_ToBase(n: PyObject, base: number): PyObject;

declare function PyNumber_TrueDivide(o1: PyObject, o2: PyObject): PyObject;

declare function PyNumber_Xor(o1: PyObject, o2: PyObject): PyObject;

declare function PyOS_AfterFork(): void;

declare function PyOS_FiniInterrupts(): void;

declare function PyOS_InitInterrupts(): void;

declare var PyOS_InputHook: () => number;

declare function PyOS_InterruptOccurred(): number;

declare function PyOS_Readline(p1: FILE, p2: FILE, p3: string | any): string;

declare var PyOS_ReadlineFunctionPointer: (p1: FILE, p2: FILE, p3: string) => string;

declare function PyOS_ascii_atof(str: string | any): number;

declare function PyOS_ascii_formatd(buffer: string | any, buf_len: number, format: string | any, d: number): string;

declare function PyOS_ascii_strtod(str: string | any, ptr: string): number;

declare function PyOS_double_to_string(val: number, format_code: number, precision: number, flags: number, type: number): string;

declare function PyOS_getsig(p1: number): (p1: number) => void;

declare function PyOS_mystricmp(p1: string | any, p2: string | any): number;

declare function PyOS_mystrnicmp(p1: string | any, p2: string | any, p3: number): number;

declare function PyOS_setsig(p1: number, p2: (p1: number) => void): (p1: number) => void;

declare function PyOS_string_to_double(str: string | any, endptr: string, overflow_exception: PyObject): number;

declare function PyOS_strtol(p1: string | any, p2: string, p3: number): number;

declare function PyOS_strtoul(p1: string | any, p2: string, p3: number): number;

interface PyObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
}
declare var PyObject: PyObject;

declare function PyObject_AsCharBuffer(obj: PyObject, buffer: string, buffer_len: number): number;

declare function PyObject_AsFileDescriptor(p1: PyObject): number;

declare function PyObject_AsReadBuffer(obj: PyObject, buffer: any, buffer_len: number): number;

declare function PyObject_AsWriteBuffer(obj: PyObject, buffer: any, buffer_len: number): number;

declare function PyObject_Call(callable_object: PyObject, args: PyObject, kw: PyObject): PyObject;

declare function PyObject_CallObject(callable_object: PyObject, args: PyObject): PyObject;

declare function PyObject_CheckReadBuffer(obj: PyObject): number;

declare function PyObject_ClearWeakRefs(p1: PyObject): void;

declare function PyObject_Cmp(o1: PyObject, o2: PyObject, result: number): number;

declare function PyObject_Compare(p1: PyObject, p2: PyObject): number;

declare function PyObject_CopyData(dest: PyObject, src: PyObject): number;

declare function PyObject_DelItem(o: PyObject, key: PyObject): number;

declare function PyObject_DelItemString(o: PyObject, key: string | any): number;

declare function PyObject_Dir(p1: PyObject): PyObject;

declare function PyObject_Format(obj: PyObject, format_spec: PyObject): PyObject;

declare function PyObject_Free(p1: any): void;

declare function PyObject_GC_Del(p1: any): void;

declare function PyObject_GC_Track(p1: any): void;

declare function PyObject_GC_UnTrack(p1: any): void;

declare function PyObject_GenericGetAttr(p1: PyObject, p2: PyObject): PyObject;

declare function PyObject_GenericSetAttr(p1: PyObject, p2: PyObject, p3: PyObject): number;

declare function PyObject_GetAttr(p1: PyObject, p2: PyObject): PyObject;

declare function PyObject_GetAttrString(p1: PyObject, p2: string | any): PyObject;

declare function PyObject_GetBuffer(obj: PyObject, view: Py_buffer, flags: number): number;

declare function PyObject_GetItem(o: PyObject, key: PyObject): PyObject;

declare function PyObject_GetIter(p1: PyObject): PyObject;

declare function PyObject_HasAttr(p1: PyObject, p2: PyObject): number;

declare function PyObject_HasAttrString(p1: PyObject, p2: string | any): number;

declare function PyObject_Hash(p1: PyObject): number;

declare function PyObject_HashNotImplemented(p1: PyObject): number;

declare function PyObject_Init(p1: PyObject, p2: PyTypeObject): PyObject;

declare function PyObject_InitVar(p1: PyVarObject, p2: PyTypeObject, p3: number): PyVarObject;

declare function PyObject_IsInstance(object_: PyObject, typeorclass: PyObject): number;

declare function PyObject_IsSubclass(object_: PyObject, typeorclass: PyObject): number;

declare function PyObject_IsTrue(p1: PyObject): number;

declare function PyObject_Length(o: PyObject): number;

declare function PyObject_Malloc(p1: number): any;

declare function PyObject_Not(p1: PyObject): number;

declare function PyObject_Print(p1: PyObject, p2: FILE, p3: number): number;

declare function PyObject_Realloc(p1: any, p2: number): any;

declare function PyObject_Repr(p1: PyObject): PyObject;

declare function PyObject_RichCompare(p1: PyObject, p2: PyObject, p3: number): PyObject;

declare function PyObject_RichCompareBool(p1: PyObject, p2: PyObject, p3: number): number;

declare function PyObject_SelfIter(p1: PyObject): PyObject;

declare function PyObject_SetAttr(p1: PyObject, p2: PyObject, p3: PyObject): number;

declare function PyObject_SetAttrString(p1: PyObject, p2: string | any, p3: PyObject): number;

declare function PyObject_SetItem(o: PyObject, key: PyObject, v: PyObject): number;

declare function PyObject_Size(o: PyObject): number;

declare function PyObject_Str(p1: PyObject): PyObject;

declare function PyObject_Type(o: PyObject): PyObject;

declare function PyObject_Unicode(p1: PyObject): PyObject;

declare function PyParser_ASTFromFile(p1: FILE, p2: string | any, p3: number, p4: string | any, p5: string | any, p6: PyCompilerFlags, p7: number, p8: any): any;

declare function PyParser_ASTFromString(p1: string | any, p2: string | any, p3: number, flags: PyCompilerFlags, p5: any): any;

declare function PyParser_ParseFile(p1: FILE, p2: string | any, p3: grammar, p4: number, p5: string | any, p6: string | any, p7: perrdetail): node;

declare function PyParser_ParseFileFlags(p1: FILE, p2: string | any, p3: grammar, p4: number, p5: string | any, p6: string | any, p7: perrdetail, p8: number): node;

declare function PyParser_ParseFileFlagsEx(p1: FILE, p2: string | any, p3: grammar, p4: number, p5: string | any, p6: string | any, p7: perrdetail, p8: number): node;

declare function PyParser_ParseString(p1: string | any, p2: grammar, p3: number, p4: perrdetail): node;

declare function PyParser_ParseStringFlags(p1: string | any, p2: grammar, p3: number, p4: perrdetail, p5: number): node;

declare function PyParser_ParseStringFlagsFilename(p1: string | any, p2: string | any, p3: grammar, p4: number, p5: perrdetail, p6: number): node;

declare function PyParser_ParseStringFlagsFilenameEx(p1: string | any, p2: string | any, p3: grammar, p4: number, p5: perrdetail, p6: number): node;

declare function PyParser_SetError(p1: perrdetail): void;

declare function PyParser_SimpleParseFileFlags(p1: FILE, p2: string | any, p3: number, p4: number): node;

declare function PyParser_SimpleParseStringFlags(p1: string | any, p2: number, p3: number): node;

declare var PyProperty_Type: PyTypeObject;

declare var PyRange_Type: PyTypeObject;

declare var PyReversed_Type: PyTypeObject;

declare function PyRun_AnyFileExFlags(p1: FILE, p2: string | any, p3: number, p4: PyCompilerFlags): number;

declare function PyRun_AnyFileFlags(p1: FILE, p2: string | any, p3: PyCompilerFlags): number;

declare function PyRun_FileExFlags(p1: FILE, p2: string | any, p3: number, p4: PyObject, p5: PyObject, p6: number, p7: PyCompilerFlags): PyObject;

declare function PyRun_InteractiveLoopFlags(p1: FILE, p2: string | any, p3: PyCompilerFlags): number;

declare function PyRun_InteractiveOneFlags(p1: FILE, p2: string | any, p3: PyCompilerFlags): number;

declare function PyRun_SimpleFileExFlags(p1: FILE, p2: string | any, p3: number, p4: PyCompilerFlags): number;

declare function PyRun_SimpleStringFlags(p1: string | any, p2: PyCompilerFlags): number;

declare function PyRun_StringFlags(p1: string | any, p2: number, p3: PyObject, p4: PyObject, p5: PyCompilerFlags): PyObject;

declare function PySeqIter_New(p1: PyObject): PyObject;

declare var PySeqIter_Type: PyTypeObject;

interface PySequenceMethods {
	sq_length: (p1: PyObject) => number;
	sq_concat: (p1: PyObject, p2: PyObject) => PyObject;
	sq_repeat: (p1: PyObject, p2: number) => PyObject;
	sq_item: (p1: PyObject, p2: number) => PyObject;
	sq_slice: (p1: PyObject, p2: number, p3: number) => PyObject;
	sq_ass_item: (p1: PyObject, p2: number, p3: PyObject) => number;
	sq_ass_slice: (p1: PyObject, p2: number, p3: number, p4: PyObject) => number;
	sq_contains: (p1: PyObject, p2: PyObject) => number;
	sq_inplace_concat: (p1: PyObject, p2: PyObject) => PyObject;
	sq_inplace_repeat: (p1: PyObject, p2: number) => PyObject;
}
declare var PySequenceMethods: PySequenceMethods;

declare function PySequence_Check(o: PyObject): number;

declare function PySequence_Concat(o1: PyObject, o2: PyObject): PyObject;

declare function PySequence_Contains(seq: PyObject, ob: PyObject): number;

declare function PySequence_Count(o: PyObject, value: PyObject): number;

declare function PySequence_DelItem(o: PyObject, i: number): number;

declare function PySequence_DelSlice(o: PyObject, i1: number, i2: number): number;

declare function PySequence_Fast(o: PyObject, m: string | any): PyObject;

declare function PySequence_GetItem(o: PyObject, i: number): PyObject;

declare function PySequence_GetSlice(o: PyObject, i1: number, i2: number): PyObject;

declare function PySequence_In(o: PyObject, value: PyObject): number;

declare function PySequence_InPlaceConcat(o1: PyObject, o2: PyObject): PyObject;

declare function PySequence_InPlaceRepeat(o: PyObject, count: number): PyObject;

declare function PySequence_Index(o: PyObject, value: PyObject): number;

declare function PySequence_Length(o: PyObject): number;

declare function PySequence_List(o: PyObject): PyObject;

declare function PySequence_Repeat(o: PyObject, count: number): PyObject;

declare function PySequence_SetItem(o: PyObject, i: number, v: PyObject): number;

declare function PySequence_SetSlice(o: PyObject, i1: number, i2: number, v: PyObject): number;

declare function PySequence_Size(o: PyObject): number;

declare function PySequence_Tuple(o: PyObject): PyObject;

declare function PySet_Add(set: PyObject, key: PyObject): number;

declare function PySet_Clear(set: PyObject): number;

declare function PySet_Contains(anyset: PyObject, key: PyObject): number;

declare function PySet_Discard(set: PyObject, key: PyObject): number;

declare function PySet_Fini(): void;

declare function PySet_New(p1: PyObject): PyObject;

declare function PySet_Pop(set: PyObject): PyObject;

declare function PySet_Size(anyset: PyObject): number;

declare var PySet_Type: PyTypeObject;

declare function PySignal_SetWakeupFd(fd: number): number;

interface PySliceObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	start: PyObject;
	stop: PyObject;
	step: PyObject;
}
declare var PySliceObject: PySliceObject;

declare function PySlice_GetIndices(r: PySliceObject, length: number, start: number, stop: number, step: number): number;

declare function PySlice_GetIndicesEx(r: PySliceObject, length: number, start: number, stop: number, step: number, slicelength: number): number;

declare function PySlice_New(start: PyObject, stop: PyObject, step: PyObject): PyObject;

declare var PySlice_Type: PyTypeObject;

declare function PyStaticMethod_New(p1: PyObject): PyObject;

declare var PyStaticMethod_Type: PyTypeObject;

interface PyStringObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_size: number;
	ob_shash: number;
	ob_sstate: number;
	ob_sval: number;
}
declare var PyStringObject: PyStringObject;

declare function PyString_AsDecodedObject(str: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function PyString_AsDecodedString(str: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function PyString_AsEncodedObject(str: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function PyString_AsEncodedString(str: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function PyString_AsString(p1: PyObject): string;

declare function PyString_AsStringAndSize(obj: PyObject, s: string, len: number): number;

declare function PyString_Concat(p1: PyObject, p2: PyObject): void;

declare function PyString_ConcatAndDel(p1: PyObject, p2: PyObject): void;

declare function PyString_Decode(s: string | any, size: number, encoding: string | any, errors: string | any): PyObject;

declare function PyString_DecodeEscape(p1: string | any, p2: number, p3: string | any, p4: number, p5: string | any): PyObject;

declare function PyString_Encode(s: string | any, size: number, encoding: string | any, errors: string | any): PyObject;

declare function PyString_Fini(): void;

declare function PyString_Format(p1: PyObject, p2: PyObject): PyObject;

declare function PyString_FromString(p1: string | any): PyObject;

declare function PyString_FromStringAndSize(p1: string | any, p2: number): PyObject;

declare function PyString_InternFromString(p1: string | any): PyObject;

declare function PyString_InternImmortal(p1: PyObject): void;

declare function PyString_InternInPlace(p1: PyObject): void;

declare function PyString_Repr(p1: PyObject, p2: number): PyObject;

declare function PyString_Size(p1: PyObject): number;

declare var PyString_Type: PyTypeObject;

interface PyStructSequence {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_size: number;
	ob_item: PyObject;
}
declare var PyStructSequence: PyStructSequence;

interface PyStructSequence_Desc {
	name: string;
	doc: string;
	fields: PyStructSequence_Field;
	n_in_sequence: number;
}
declare var PyStructSequence_Desc: PyStructSequence_Desc;

interface PyStructSequence_Field {
	name: string;
	doc: string;
}
declare var PyStructSequence_Field: PyStructSequence_Field;

declare function PyStructSequence_InitType(type: PyTypeObject, desc: PyStructSequence_Desc): void;

declare function PyStructSequence_New(type: PyTypeObject): PyObject;

declare var PyStructSequence_UnnamedField: string;

declare var PySuper_Type: PyTypeObject;

interface PySyntaxErrorObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	dict: PyObject;
	args: PyObject;
	message: PyObject;
	msg: PyObject;
	filename: PyObject;
	lineno: PyObject;
	offset: PyObject;
	text: PyObject;
	print_file_and_line: PyObject;
}
declare var PySyntaxErrorObject: PySyntaxErrorObject;

declare function PySys_AddWarnOption(p1: string | any): void;

declare function PySys_GetFile(p1: string | any, p2: FILE): FILE;

declare function PySys_GetObject(p1: string | any): PyObject;

declare function PySys_HasWarnOptions(): number;

declare function PySys_ResetWarnOptions(): void;

declare function PySys_SetArgv(p1: number, p2: string): void;

declare function PySys_SetArgvEx(p1: number, p2: string, p3: number): void;

declare function PySys_SetObject(p1: string | any, p2: PyObject): number;

declare function PySys_SetPath(p1: string | any): void;

interface PySystemExitObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	dict: PyObject;
	args: PyObject;
	message: PyObject;
	code: PyObject;
}
declare var PySystemExitObject: PySystemExitObject;

interface PyThreadState {
	next: PyThreadState;
	interp: PyInterpreterState;
	frame: PyFrameObject;
	recursion_depth: number;
	tracing: number;
	use_tracing: number;
	c_profilefunc: (p1: PyObject, p2: PyFrameObject, p3: number, p4: PyObject) => number;
	c_tracefunc: (p1: PyObject, p2: PyFrameObject, p3: number, p4: PyObject) => number;
	c_profileobj: PyObject;
	c_traceobj: PyObject;
	curexc_type: PyObject;
	curexc_value: PyObject;
	curexc_traceback: PyObject;
	exc_type: PyObject;
	exc_value: PyObject;
	exc_traceback: PyObject;
	dict: PyObject;
	tick_counter: number;
	gilstate_counter: number;
	async_exc: PyObject;
	thread_id: number;
	trash_delete_nesting: number;
	trash_delete_later: PyObject;
}
declare var PyThreadState: PyThreadState;

declare function PyThreadState_Clear(p1: PyThreadState): void;

declare function PyThreadState_Delete(p1: PyThreadState): void;

declare function PyThreadState_DeleteCurrent(): void;

declare function PyThreadState_Get(): PyThreadState;

declare function PyThreadState_GetDict(): PyObject;

declare function PyThreadState_New(p1: PyInterpreterState): PyThreadState;

declare function PyThreadState_Next(p1: PyThreadState): PyThreadState;

declare function PyThreadState_SetAsyncExc(p1: number, p2: PyObject): number;

declare function PyThreadState_Swap(p1: PyThreadState): PyThreadState;

declare function PyThread_ReInitTLS(): void;

declare function PyThread_acquire_lock(p1: any, p2: number): number;

declare function PyThread_allocate_lock(): any;

declare function PyThread_create_key(): number;

declare function PyThread_delete_key(p1: number): void;

declare function PyThread_delete_key_value(key: number): void;

declare function PyThread_exit_thread(): void;

declare function PyThread_free_lock(p1: any): void;

declare function PyThread_get_key_value(p1: number): any;

declare function PyThread_get_stacksize(): number;

declare function PyThread_get_thread_ident(): number;

declare function PyThread_init_thread(): void;

declare function PyThread_release_lock(p1: any): void;

declare function PyThread_set_key_value(p1: number, p2: any): number;

declare function PyThread_set_stacksize(p1: number): number;

declare function PyThread_start_new_thread(p1: (p1: any) => void, p2: any): number;

declare function PyToken_OneChar(p1: number): number;

declare function PyToken_ThreeChars(p1: number, p2: number, p3: number): number;

declare function PyToken_TwoChars(p1: number, p2: number): number;

declare function PyTraceBack_Here(p1: PyFrameObject): number;

declare function PyTraceBack_Print(p1: PyObject, p2: PyObject): number;

declare var PyTraceBack_Type: PyTypeObject;

interface PyTracebackObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	tb_next: PyTracebackObject;
	tb_frame: PyFrameObject;
	tb_lasti: number;
	tb_lineno: number;
}
declare var PyTracebackObject: PyTracebackObject;

interface PyTryBlock {
	b_type: number;
	b_handler: number;
	b_level: number;
}
declare var PyTryBlock: PyTryBlock;

interface PyTupleObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_size: number;
	ob_item: PyObject;
}
declare var PyTupleObject: PyTupleObject;

declare function PyTuple_ClearFreeList(): number;

declare function PyTuple_Fini(): void;

declare function PyTuple_GetItem(p1: PyObject, p2: number): PyObject;

declare function PyTuple_GetSlice(p1: PyObject, p2: number, p3: number): PyObject;

declare function PyTuple_New(size: number): PyObject;

declare function PyTuple_SetItem(p1: PyObject, p2: number, p3: PyObject): number;

declare function PyTuple_Size(p1: PyObject): number;

declare var PyTuple_Type: PyTypeObject;

interface PyTypeObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_size: number;
	tp_name: string;
	tp_basicsize: number;
	tp_itemsize: number;
	tp_dealloc: (p1: PyObject) => void;
	tp_print: (p1: PyObject, p2: FILE, p3: number) => number;
	tp_getattr: (p1: PyObject, p2: string) => PyObject;
	tp_setattr: (p1: PyObject, p2: string, p3: PyObject) => number;
	tp_compare: (p1: PyObject, p2: PyObject) => number;
	tp_repr: (p1: PyObject) => PyObject;
	tp_as_number: PyNumberMethods;
	tp_as_sequence: PySequenceMethods;
	tp_as_mapping: PyMappingMethods;
	tp_hash: (p1: PyObject) => number;
	tp_call: (p1: PyObject, p2: PyObject, p3: PyObject) => PyObject;
	tp_str: (p1: PyObject) => PyObject;
	tp_getattro: (p1: PyObject, p2: PyObject) => PyObject;
	tp_setattro: (p1: PyObject, p2: PyObject, p3: PyObject) => number;
	tp_as_buffer: PyBufferProcs;
	tp_flags: number;
	tp_doc: string;
	tp_traverse: (p1: PyObject, p2: (p1: PyObject, p2: any) => number, p3: any) => number;
	tp_clear: (p1: PyObject) => number;
	tp_richcompare: (p1: PyObject, p2: PyObject, p3: number) => PyObject;
	tp_weaklistoffset: number;
	tp_iter: (p1: PyObject) => PyObject;
	tp_iternext: (p1: PyObject) => PyObject;
	tp_methods: PyMethodDef;
	tp_members: PyMemberDef;
	tp_getset: PyGetSetDef;
	tp_base: PyTypeObject;
	tp_dict: PyObject;
	tp_descr_get: (p1: PyObject, p2: PyObject, p3: PyObject) => PyObject;
	tp_descr_set: (p1: PyObject, p2: PyObject, p3: PyObject) => number;
	tp_dictoffset: number;
	tp_init: (p1: PyObject, p2: PyObject, p3: PyObject) => number;
	tp_alloc: (p1: PyTypeObject, p2: number) => PyObject;
	tp_new: (p1: PyTypeObject, p2: PyObject, p3: PyObject) => PyObject;
	tp_free: (p1: any) => void;
	tp_is_gc: (p1: PyObject) => number;
	tp_bases: PyObject;
	tp_mro: PyObject;
	tp_cache: PyObject;
	tp_subclasses: PyObject;
	tp_weaklist: PyObject;
	tp_del: (p1: PyObject) => void;
	tp_version_tag: number;
}
declare var PyTypeObject: PyTypeObject;

declare function PyType_ClearCache(): number;

declare function PyType_GenericAlloc(p1: PyTypeObject, p2: number): PyObject;

declare function PyType_GenericNew(p1: PyTypeObject, p2: PyObject, p3: PyObject): PyObject;

declare function PyType_IsSubtype(p1: PyTypeObject, p2: PyTypeObject): number;

declare function PyType_Modified(p1: PyTypeObject): void;

declare function PyType_Ready(p1: PyTypeObject): number;

declare var PyType_Type: PyTypeObject;

declare function PyUnicodeDecodeError_Create(p1: string | any, p2: string | any, p3: number, p4: number, p5: number, p6: string | any): PyObject;

declare function PyUnicodeDecodeError_GetEncoding(p1: PyObject): PyObject;

declare function PyUnicodeDecodeError_GetEnd(p1: PyObject, p2: number): number;

declare function PyUnicodeDecodeError_GetObject(p1: PyObject): PyObject;

declare function PyUnicodeDecodeError_GetReason(p1: PyObject): PyObject;

declare function PyUnicodeDecodeError_GetStart(p1: PyObject, p2: number): number;

declare function PyUnicodeDecodeError_SetEnd(p1: PyObject, p2: number): number;

declare function PyUnicodeDecodeError_SetReason(p1: PyObject, p2: string | any): number;

declare function PyUnicodeDecodeError_SetStart(p1: PyObject, p2: number): number;

declare function PyUnicodeEncodeError_Create(p1: string | any, p2: number, p3: number, p4: number, p5: number, p6: string | any): PyObject;

declare function PyUnicodeEncodeError_GetEncoding(p1: PyObject): PyObject;

declare function PyUnicodeEncodeError_GetEnd(p1: PyObject, p2: number): number;

declare function PyUnicodeEncodeError_GetObject(p1: PyObject): PyObject;

declare function PyUnicodeEncodeError_GetReason(p1: PyObject): PyObject;

declare function PyUnicodeEncodeError_GetStart(p1: PyObject, p2: number): number;

declare function PyUnicodeEncodeError_SetEnd(p1: PyObject, p2: number): number;

declare function PyUnicodeEncodeError_SetReason(p1: PyObject, p2: string | any): number;

declare function PyUnicodeEncodeError_SetStart(p1: PyObject, p2: number): number;

interface PyUnicodeErrorObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	dict: PyObject;
	args: PyObject;
	message: PyObject;
	encoding: PyObject;
	object: PyObject;
	start: number;
	end: number;
	reason: PyObject;
}
declare var PyUnicodeErrorObject: PyUnicodeErrorObject;

interface PyUnicodeObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	length: number;
	str: number;
	hash: number;
	defenc: PyObject;
}
declare var PyUnicodeObject: PyUnicodeObject;

declare function PyUnicodeTranslateError_Create(p1: number, p2: number, p3: number, p4: number, p5: string | any): PyObject;

declare function PyUnicodeTranslateError_GetEnd(p1: PyObject, p2: number): number;

declare function PyUnicodeTranslateError_GetObject(p1: PyObject): PyObject;

declare function PyUnicodeTranslateError_GetReason(p1: PyObject): PyObject;

declare function PyUnicodeTranslateError_GetStart(p1: PyObject, p2: number): number;

declare function PyUnicodeTranslateError_SetEnd(p1: PyObject, p2: number): number;

declare function PyUnicodeTranslateError_SetReason(p1: PyObject, p2: string | any): number;

declare function PyUnicodeTranslateError_SetStart(p1: PyObject, p2: number): number;

declare function PyUnicodeUCS2_AsASCIIString(unicode: PyObject): PyObject;

declare function PyUnicodeUCS2_AsCharmapString(unicode: PyObject, mapping: PyObject): PyObject;

declare function PyUnicodeUCS2_AsEncodedObject(unicode: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function PyUnicodeUCS2_AsEncodedString(unicode: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function PyUnicodeUCS2_AsLatin1String(unicode: PyObject): PyObject;

declare function PyUnicodeUCS2_AsRawUnicodeEscapeString(unicode: PyObject): PyObject;

declare function PyUnicodeUCS2_AsUTF16String(unicode: PyObject): PyObject;

declare function PyUnicodeUCS2_AsUTF32String(unicode: PyObject): PyObject;

declare function PyUnicodeUCS2_AsUTF8String(unicode: PyObject): PyObject;

declare function PyUnicodeUCS2_AsUnicode(unicode: PyObject): number;

declare function PyUnicodeUCS2_AsUnicodeEscapeString(unicode: PyObject): PyObject;

declare function PyUnicodeUCS2_AsWideChar(unicode: PyUnicodeObject, w: number, size: number): number;

declare function PyUnicodeUCS2_ClearFreelist(): number;

declare function PyUnicodeUCS2_Compare(left: PyObject, right: PyObject): number;

declare function PyUnicodeUCS2_Concat(left: PyObject, right: PyObject): PyObject;

declare function PyUnicodeUCS2_Contains(container: PyObject, element: PyObject): number;

declare function PyUnicodeUCS2_Count(str: PyObject, substr: PyObject, start: number, end: number): number;

declare function PyUnicodeUCS2_Decode(s: string | any, size: number, encoding: string | any, errors: string | any): PyObject;

declare function PyUnicodeUCS2_DecodeASCII(string: string | any, length: number, errors: string | any): PyObject;

declare function PyUnicodeUCS2_DecodeCharmap(string: string | any, length: number, mapping: PyObject, errors: string | any): PyObject;

declare function PyUnicodeUCS2_DecodeLatin1(string: string | any, length: number, errors: string | any): PyObject;

declare function PyUnicodeUCS2_DecodeRawUnicodeEscape(string: string | any, length: number, errors: string | any): PyObject;

declare function PyUnicodeUCS2_DecodeUTF16(string: string | any, length: number, errors: string | any, byteorder: number): PyObject;

declare function PyUnicodeUCS2_DecodeUTF16Stateful(string: string | any, length: number, errors: string | any, byteorder: number, consumed: number): PyObject;

declare function PyUnicodeUCS2_DecodeUTF32(string: string | any, length: number, errors: string | any, byteorder: number): PyObject;

declare function PyUnicodeUCS2_DecodeUTF32Stateful(string: string | any, length: number, errors: string | any, byteorder: number, consumed: number): PyObject;

declare function PyUnicodeUCS2_DecodeUTF8(string: string | any, length: number, errors: string | any): PyObject;

declare function PyUnicodeUCS2_DecodeUTF8Stateful(string: string | any, length: number, errors: string | any, consumed: number): PyObject;

declare function PyUnicodeUCS2_DecodeUnicodeEscape(string: string | any, length: number, errors: string | any): PyObject;

declare function PyUnicodeUCS2_Encode(s: number, size: number, encoding: string | any, errors: string | any): PyObject;

declare function PyUnicodeUCS2_EncodeASCII(data: number, length: number, errors: string | any): PyObject;

declare function PyUnicodeUCS2_EncodeCharmap(data: number, length: number, mapping: PyObject, errors: string | any): PyObject;

declare function PyUnicodeUCS2_EncodeDecimal(s: number, length: number, output: string | any, errors: string | any): number;

declare function PyUnicodeUCS2_EncodeLatin1(data: number, length: number, errors: string | any): PyObject;

declare function PyUnicodeUCS2_EncodeRawUnicodeEscape(data: number, length: number): PyObject;

declare function PyUnicodeUCS2_EncodeUTF16(data: number, length: number, errors: string | any, byteorder: number): PyObject;

declare function PyUnicodeUCS2_EncodeUTF32(data: number, length: number, errors: string | any, byteorder: number): PyObject;

declare function PyUnicodeUCS2_EncodeUTF8(data: number, length: number, errors: string | any): PyObject;

declare function PyUnicodeUCS2_EncodeUnicodeEscape(data: number, length: number): PyObject;

declare function PyUnicodeUCS2_Find(str: PyObject, substr: PyObject, start: number, end: number, direction: number): number;

declare function PyUnicodeUCS2_Format(format: PyObject, args: PyObject): PyObject;

declare function PyUnicodeUCS2_FromEncodedObject(obj: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function PyUnicodeUCS2_FromObject(obj: PyObject): PyObject;

declare function PyUnicodeUCS2_FromOrdinal(ordinal: number): PyObject;

declare function PyUnicodeUCS2_FromString(u: string | any): PyObject;

declare function PyUnicodeUCS2_FromStringAndSize(u: string | any, size: number): PyObject;

declare function PyUnicodeUCS2_FromUnicode(u: number, size: number): PyObject;

declare function PyUnicodeUCS2_FromWideChar(w: number, size: number): PyObject;

declare function PyUnicodeUCS2_GetDefaultEncoding(): string;

declare function PyUnicodeUCS2_GetMax(): number;

declare function PyUnicodeUCS2_GetSize(unicode: PyObject): number;

declare function PyUnicodeUCS2_Join(separator: PyObject, seq: PyObject): PyObject;

declare function PyUnicodeUCS2_Partition(s: PyObject, sep: PyObject): PyObject;

declare function PyUnicodeUCS2_RPartition(s: PyObject, sep: PyObject): PyObject;

declare function PyUnicodeUCS2_RSplit(s: PyObject, sep: PyObject, maxsplit: number): PyObject;

declare function PyUnicodeUCS2_Replace(str: PyObject, substr: PyObject, replstr: PyObject, maxcount: number): PyObject;

declare function PyUnicodeUCS2_Resize(unicode: PyObject, length: number): number;

declare function PyUnicodeUCS2_RichCompare(left: PyObject, right: PyObject, op: number): PyObject;

declare function PyUnicodeUCS2_SetDefaultEncoding(encoding: string | any): number;

declare function PyUnicodeUCS2_Split(s: PyObject, sep: PyObject, maxsplit: number): PyObject;

declare function PyUnicodeUCS2_Splitlines(s: PyObject, keepends: number): PyObject;

declare function PyUnicodeUCS2_Tailmatch(str: PyObject, substr: PyObject, start: number, end: number, direction: number): number;

declare function PyUnicodeUCS2_Translate(str: PyObject, table: PyObject, errors: string | any): PyObject;

declare function PyUnicodeUCS2_TranslateCharmap(data: number, length: number, table: PyObject, errors: string | any): PyObject;

declare function PyUnicode_BuildEncodingMap(string: PyObject): PyObject;

declare function PyUnicode_DecodeUTF7(string: string | any, length: number, errors: string | any): PyObject;

declare function PyUnicode_DecodeUTF7Stateful(string: string | any, length: number, errors: string | any, consumed: number): PyObject;

declare function PyUnicode_EncodeUTF7(data: number, length: number, base64SetO: number, base64WhiteSpace: number, errors: string | any): PyObject;

declare var PyUnicode_Type: PyTypeObject;

interface PyVarObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_size: number;
}
declare var PyVarObject: PyVarObject;

declare function PyWeakref_GetObject(ref: PyObject): PyObject;

declare function PyWeakref_NewProxy(ob: PyObject, callback: PyObject): PyObject;

declare function PyWeakref_NewRef(ob: PyObject, callback: PyObject): PyObject;

interface PyWrapperDescrObject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	d_type: PyTypeObject;
	d_name: PyObject;
	d_base: wrapperbase;
	d_wrapped: any;
}
declare var PyWrapperDescrObject: PyWrapperDescrObject;

declare var PyWrapperDescr_Type: PyTypeObject;

declare function PyWrapper_New(p1: PyObject, p2: PyObject): PyObject;

declare function Py_AddPendingCall(func: (p1: any) => number, arg: any): number;

declare function Py_AtExit(func: () => void): number;

declare var Py_BytesWarningFlag: number;

declare function Py_CompileStringFlags(p1: string | any, p2: string | any, p3: number, p4: PyCompilerFlags): PyObject;

declare var Py_DebugFlag: number;

declare function Py_DecRef(p1: PyObject): void;

declare var Py_DivisionWarningFlag: number;

declare var Py_DontWriteBytecodeFlag: number;

declare function Py_EndInterpreter(p1: PyThreadState): void;

declare function Py_Exit(p1: number): void;

declare function Py_FatalError(message: string | any): void;

declare function Py_FdIsInteractive(p1: FILE, p2: string | any): number;

declare var Py_FileSystemDefaultEncoding: string;

declare function Py_Finalize(): void;

declare function Py_FindMethod(p1: PyMethodDef, p2: PyObject, p3: string | any): PyObject;

declare function Py_FindMethodInChain(p1: PyMethodChain, p2: PyObject, p3: string | any): PyObject;

declare function Py_FlushLine(): number;

declare var Py_FrozenFlag: number;

declare function Py_GetBuildInfo(): string;

declare function Py_GetCompiler(): string;

declare function Py_GetCopyright(): string;

declare function Py_GetExecPrefix(): string;

declare function Py_GetPath(): string;

declare function Py_GetPlatform(): string;

declare function Py_GetPrefix(): string;

declare function Py_GetProgramFullPath(): string;

declare function Py_GetProgramName(): string;

declare function Py_GetPythonHome(): string;

declare function Py_GetRecursionLimit(): number;

declare function Py_GetVersion(): string;

declare var Py_HashRandomizationFlag: number;

declare var Py_IgnoreEnvironmentFlag: number;

declare function Py_IncRef(p1: PyObject): void;

declare function Py_InitModule4_64(name: string | any, methods: PyMethodDef, doc: string | any, self: PyObject, apiver: number): PyObject;

declare function Py_Initialize(): void;

declare function Py_InitializeEx(p1: number): void;

declare var Py_InspectFlag: number;

declare var Py_InteractiveFlag: number;

declare function Py_IsInitialized(): number;

declare function Py_Main(argc: number, argv: string): number;

declare function Py_MakePendingCalls(): number;

declare function Py_NewInterpreter(): PyThreadState;

declare var Py_NoSiteFlag: number;

declare var Py_NoUserSiteDirectory: number;

declare var Py_OptimizeFlag: number;

declare var Py_Py3kWarningFlag: number;

declare function Py_ReprEnter(p1: PyObject): number;

declare function Py_ReprLeave(p1: PyObject): void;

declare function Py_SetProgramName(p1: string | any): void;

declare function Py_SetPythonHome(p1: string | any): void;

declare function Py_SetRecursionLimit(p1: number): void;

declare function Py_SubversionRevision(): string;

declare function Py_SubversionShortBranch(): string;

declare function Py_SymtableString(p1: string | any, p2: string | any, p3: number): any;

declare var Py_TabcheckFlag: number;

declare var Py_UnicodeFlag: number;

declare function Py_UniversalNewlineFgets(p1: string | any, p2: number, p3: FILE, p4: PyObject): string;

declare function Py_UniversalNewlineFread(p1: string | any, p2: number, p3: FILE, p4: PyObject): number;

declare var Py_UseClassExceptionsFlag: number;

declare var Py_VerboseFlag: number;

interface Py_buffer {
	buf: any;
	obj: PyObject;
	len: number;
	itemsize: number;
	readonly: number;
	ndim: number;
	format: string;
	shape: number;
	strides: number;
	suboffsets: number;
	smalltable: number;
	internal: any;
}
declare var Py_buffer: Py_buffer;

interface Py_complex {
	real: number;
	imag: number;
}
declare var Py_complex: Py_complex;

declare var PycStringIO: PycStringIO_CAPI;

interface PycStringIO_CAPI {
	cread: (p1: PyObject, p2: string, p3: number) => number;
	creadline: (p1: PyObject, p2: string) => number;
	cwrite: (p1: PyObject, p2: string, p3: number) => number;
	cgetvalue: (p1: PyObject) => PyObject;
	NewOutput: (p1: number) => PyObject;
	NewInput: (p1: PyObject) => PyObject;
	InputType: PyTypeObject;
	OutputType: PyTypeObject;
}
declare var PycStringIO_CAPI: PycStringIO_CAPI;

declare function ResObj_Convert(p1: PyObject, p2: string): number;

declare function ResObj_New(p1: string): PyObject;

declare function _PyArg_NoKeywords(funcname: string | any, kw: PyObject): number;

declare function _PyBuiltin_Init(): PyObject;

declare var _PyByteArray_empty_string: number;

declare function _PyBytes_FormatAdvanced(obj: PyObject, format_spec: string | any, format_spec_len: number): PyObject;

declare function _PyCode_CheckLineNumber(co: PyCodeObject, lasti: number, bounds: PyAddrPair): number;

declare function _PyCode_ConstantKey(obj: PyObject): PyObject;

declare function _PyCodecInfo_GetIncrementalDecoder(codec_info: PyObject, errors: string | any): PyObject;

declare function _PyCodecInfo_GetIncrementalEncoder(codec_info: PyObject, errors: string | any): PyObject;

declare function _PyCodec_DecodeText(object_: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function _PyCodec_EncodeText(object_: PyObject, encoding: string | any, errors: string | any): PyObject;

declare function _PyCodec_Lookup(encoding: string | any): PyObject;

declare function _PyCodec_LookupTextEncoding(encoding: string | any, alternate_command: string | any): PyObject;

declare function _PyComplex_FormatAdvanced(obj: PyObject, format_spec: string | any, format_spec_len: number): PyObject;

interface _PyDateTime_BaseDateTime {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	hashcode: number;
	hastzinfo: number;
	data: number;
}
declare var _PyDateTime_BaseDateTime: _PyDateTime_BaseDateTime;

interface _PyDateTime_BaseTZInfo {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	hashcode: number;
	hastzinfo: number;
}
declare var _PyDateTime_BaseTZInfo: _PyDateTime_BaseTZInfo;

interface _PyDateTime_BaseTime {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	hashcode: number;
	hastzinfo: number;
	data: number;
}
declare var _PyDateTime_BaseTime: _PyDateTime_BaseTime;

declare function _PyDict_Contains(mp: PyObject, key: PyObject, hash: number): number;

declare function _PyDict_DelItemIf(mp: PyObject, key: PyObject, predicate: (p1: PyObject) => number): number;

declare function _PyDict_GetItemWithError(mp: PyObject, key: PyObject): PyObject;

declare function _PyDict_MaybeUntrack(mp: PyObject): void;

declare function _PyDict_NewPresized(minused: number): PyObject;

declare function _PyDict_Next(mp: PyObject, pos: number, key: PyObject, value: PyObject, hash: number): number;

declare function _PyErr_BadInternalCall(filename: string | any, lineno: number): void;

declare function _PyErr_ReplaceException(p1: PyObject, p2: PyObject, p3: PyObject): void;

declare function _PyEval_CallTracing(func: PyObject, args: PyObject): PyObject;

declare function _PyEval_SliceIndex(p1: PyObject, p2: number): number;

declare function _PyEval_SliceIndexNotNone(p1: PyObject, p2: number): number;

declare function _PyExc_Fini(): void;

declare function _PyExc_Init(): void;

declare function _PyFile_SanitizeMode(mode: string | any): number;

declare function _PyFloat_Digits(buf: string | any, v: number, signum: number): number;

declare function _PyFloat_DigitsInit(): void;

declare function _PyFloat_FormatAdvanced(obj: PyObject, format_spec: string | any, format_spec_len: number): PyObject;

declare function _PyFloat_Init(): void;

declare function _PyFloat_Pack4(x: number, p: string | any, le: number): number;

declare function _PyFloat_Pack8(x: number, p: string | any, le: number): number;

declare function _PyFloat_Unpack4(p: string | any, le: number): number;

declare function _PyFloat_Unpack8(p: string | any, le: number): number;

declare function _PyFrame_Init(): number;

declare function _PyImportHooks_Init(): void;

declare function _PyImport_AcquireLock(): void;

declare function _PyImport_FindExtension(p1: string | any, p2: string | any): PyObject;

declare function _PyImport_FindModule(p1: string | any, p2: PyObject, p3: string | any, p4: number, p5: FILE, p6: PyObject): any;

declare function _PyImport_Fini(): void;

declare function _PyImport_FixupExtension(p1: string | any, p2: string | any): PyObject;

declare function _PyImport_Init(): void;

declare function _PyImport_IsScript(p1: any): number;

declare function _PyImport_ReInitLock(): void;

declare function _PyImport_ReleaseLock(): number;

declare function _PyInstance_Lookup(pinst: PyObject, name: PyObject): PyObject;

declare function _PyInt_AsInt(p1: PyObject): number;

declare function _PyInt_Format(v: PyIntObject, base: number, newstyle: number): PyObject;

declare function _PyInt_FormatAdvanced(obj: PyObject, format_spec: string | any, format_spec_len: number): PyObject;

declare function _PyInt_Init(): number;

declare function _PyList_Extend(p1: PyListObject, p2: PyObject): PyObject;

declare function _PyLong_AsByteArray(v: _longobject, bytes: string | any, n: number, little_endian: number, is_signed: number): number;

declare function _PyLong_AsInt(p1: PyObject): number;

declare function _PyLong_Copy(src: _longobject): PyObject;

declare var _PyLong_DigitValue: number;

declare function _PyLong_Format(aa: PyObject, base: number, addL: number, newstyle: number): PyObject;

declare function _PyLong_FormatAdvanced(obj: PyObject, format_spec: string | any, format_spec_len: number): PyObject;

declare function _PyLong_Frexp(a: _longobject, e: number): number;

declare function _PyLong_FromByteArray(bytes: string | any, n: number, little_endian: number, is_signed: number): PyObject;

declare function _PyLong_Init(): number;

declare function _PyLong_New(p1: number): _longobject;

declare function _PyLong_NumBits(v: PyObject): number;

declare function _PyLong_Sign(v: PyObject): number;

declare function _PyModule_Clear(p1: PyObject): void;

declare function _PyNode_SizeOf(n: node): number;

declare function _PyNumber_ConvertIntegralToInt(integral: PyObject, error_format: string | any): PyObject;

declare function _PyOS_GetOpt(argc: number, argv: string, optstring: string | any): number;

declare var _PyOS_ReadlineTState: PyThreadState;

declare function _PyOS_ResetGetOpt(): void;

declare function _PyOS_URandom(buffer: any, size: number): number;

declare var _PyOS_optarg: string;

declare var _PyOS_opterr: number;

declare var _PyOS_optind: number;

declare function _PyObject_Dump(p1: PyObject): void;

declare function _PyObject_GC_Malloc(p1: number): PyObject;

declare function _PyObject_GC_New(p1: PyTypeObject): PyObject;

declare function _PyObject_GC_NewVar(p1: PyTypeObject, p2: number): PyVarObject;

declare function _PyObject_GC_Resize(p1: PyVarObject, p2: number): PyVarObject;

declare function _PyObject_GenericGetAttrWithDict(p1: PyObject, p2: PyObject, p3: PyObject): PyObject;

declare function _PyObject_GenericSetAttrWithDict(p1: PyObject, p2: PyObject, p3: PyObject, p4: PyObject): number;

declare function _PyObject_GetDictPtr(p1: PyObject): PyObject;

declare function _PyObject_LengthHint(o: PyObject, p2: number): number;

declare function _PyObject_LookupSpecial(p1: PyObject, p2: string | any, p3: PyObject): PyObject;

declare function _PyObject_New(p1: PyTypeObject): PyObject;

declare function _PyObject_NewVar(p1: PyTypeObject, p2: number): PyVarObject;

declare function _PyObject_NextNotImplemented(p1: PyObject): PyObject;

declare function _PyObject_RealIsInstance(inst: PyObject, cls: PyObject): number;

declare function _PyObject_RealIsSubclass(derived: PyObject, cls: PyObject): number;

declare function _PyObject_SlotCompare(p1: PyObject, p2: PyObject): number;

declare function _PyObject_Str(p1: PyObject): PyObject;

declare var _PyParser_TokenNames: string;

declare function _PyRandom_Fini(): void;

declare function _PyRandom_Init(): void;

declare function _PySequence_IterSearch(seq: PyObject, obj: PyObject, operation: number): number;

declare function _PySet_Next(set: PyObject, pos: number, key: PyObject): number;

declare function _PySet_NextEntry(set: PyObject, pos: number, key: PyObject, hash: number): number;

declare function _PySet_Update(set: PyObject, iterable: PyObject): number;

declare function _PySlice_AdjustIndices(length: number, start: number, stop: number, step: number): number;

declare function _PySlice_FromIndices(start: number, stop: number): PyObject;

declare function _PySlice_Unpack(slice: PyObject, start: number, stop: number, step: number): number;

declare function _PyString_Eq(p1: PyObject, p2: PyObject): number;

declare function _PyString_FormatLong(p1: PyObject, p2: number, p3: number, p4: number, p5: string, p6: number): PyObject;

declare function _PyString_InsertThousandsGrouping(buffer: string | any, n_buffer: number, digits: string | any, n_digits: number, min_width: number, grouping: string | any, thousands_sep: string | any): number;

declare function _PyString_InsertThousandsGroupingLocale(buffer: string | any, n_buffer: number, digits: string | any, n_digits: number, min_width: number): number;

declare function _PyString_Join(sep: PyObject, x: PyObject): PyObject;

declare function _PyString_Resize(p1: PyObject, p2: number): number;

declare function _PySys_GetSizeOf(p1: PyObject): number;

declare function _PySys_Init(): PyObject;

declare var _PyThreadState_Current: PyThreadState;

declare var _PyThreadState_GetFrame: (p1: PyThreadState) => PyFrameObject;

declare function _PyThreadState_Init(p1: PyThreadState): void;

declare function _PyThreadState_Prealloc(p1: PyInterpreterState): PyThreadState;

declare function _PyThread_CurrentFrames(): PyObject;

declare function _PyTime_DoubleToTimet(x: number): number;

declare function _PyTime_FloatTime(): number;

declare var _PyTrash_delete_later: PyObject;

declare var _PyTrash_delete_nesting: number;

declare function _PyTrash_deposit_object(p1: PyObject): void;

declare function _PyTrash_destroy_chain(): void;

declare function _PyTrash_thread_deposit_object(p1: PyObject): void;

declare function _PyTrash_thread_destroy_chain(): void;

declare function _PyTuple_MaybeUntrack(p1: PyObject): void;

declare function _PyTuple_Resize(p1: PyObject, p2: number): number;

declare function _PyType_Lookup(p1: PyTypeObject, p2: PyObject): PyObject;

declare function _PyUnicodeUCS2_AsDefaultEncodedString(p1: PyObject, p2: string | any): PyObject;

declare function _PyUnicodeUCS2_IsAlpha(ch: number): number;

declare function _PyUnicodeUCS2_IsDecimalDigit(ch: number): number;

declare function _PyUnicodeUCS2_IsDigit(ch: number): number;

declare function _PyUnicodeUCS2_IsLinebreak(ch: number): number;

declare function _PyUnicodeUCS2_IsLowercase(ch: number): number;

declare function _PyUnicodeUCS2_IsNumeric(ch: number): number;

declare function _PyUnicodeUCS2_IsTitlecase(ch: number): number;

declare function _PyUnicodeUCS2_IsUppercase(ch: number): number;

declare function _PyUnicodeUCS2_IsWhitespace(ch: number): number;

declare function _PyUnicodeUCS2_ToDecimalDigit(ch: number): number;

declare function _PyUnicodeUCS2_ToDigit(ch: number): number;

declare function _PyUnicodeUCS2_ToLowercase(ch: number): number;

declare function _PyUnicodeUCS2_ToNumeric(ch: number): number;

declare function _PyUnicodeUCS2_ToTitlecase(ch: number): number;

declare function _PyUnicodeUCS2_ToUppercase(ch: number): number;

declare function _PyUnicode_DecodeUnicodeInternal(string: string | any, length: number, errors: string | any): PyObject;

declare function _PyUnicode_FormatAdvanced(obj: PyObject, format_spec: number, format_spec_len: number): PyObject;

interface _PyUnicode_Name_CAPI {
	size: number;
	getname: (p1: PyObject, p2: number, p3: string, p4: number) => number;
	getcode: (p1: PyObject, p2: string, p3: number, p4: number) => number;
}
declare var _PyUnicode_Name_CAPI: _PyUnicode_Name_CAPI;

declare function _PyUnicode_XStrip(self: PyUnicodeObject, striptype: number, sepobj: PyObject): PyObject;

declare function _PyWarnings_Init(): void;

interface _PyWeakReference {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	wr_object: PyObject;
	wr_callback: PyObject;
	hash: number;
	wr_prev: _PyWeakReference;
	wr_next: _PyWeakReference;
}
declare var _PyWeakReference: _PyWeakReference;

declare var _PyWeakref_CallableProxyType: PyTypeObject;

declare function _PyWeakref_ClearRef(self: _PyWeakReference): void;

declare function _PyWeakref_GetWeakrefCount(head: _PyWeakReference): number;

declare var _PyWeakref_ProxyType: PyTypeObject;

declare var _PyWeakref_RefType: PyTypeObject;

declare var _Py_CheckInterval: number;

declare var _Py_CheckRecursionLimit: number;

declare function _Py_CheckRecursiveCall(where: string | any): number;

declare function _Py_DisplaySourceLine(p1: PyObject, p2: string | any, p3: number, p4: number): number;

declare var _Py_EllipsisObject: PyObject;

declare function _Py_HashDouble(p1: number): number;

declare function _Py_HashPointer(p1: any): number;

declare var _Py_HashSecret: _Py_HashSecret_t;

interface _Py_HashSecret_t {
	prefix: number;
	suffix: number;
}
declare var _Py_HashSecret_t: _Py_HashSecret_t;

declare function _Py_Mangle(p: PyObject, name: PyObject): PyObject;

declare var _Py_NoneStruct: PyObject;

declare var _Py_NotImplementedStruct: PyObject;

declare var _Py_PackageContext: string;

declare var _Py_QnewFlag: number;

declare function _Py_ReleaseInternedStrings(): void;

declare var _Py_SwappedOp: number;

declare var _Py_Ticker: number;

declare var _Py_TrueStruct: PyIntObject;

declare var _Py_ZeroStruct: PyIntObject;

declare function _Py_add_one_to_index_C(nd: number, index: number, shape: number): void;

declare function _Py_add_one_to_index_F(nd: number, index: number, shape: number): void;

declare var _Py_ascii_whitespace: number;

declare function _Py_bytes_capitalize(result: string | any, s: string | any, len: number): void;

declare function _Py_bytes_isalnum(cptr: string | any, len: number): PyObject;

declare function _Py_bytes_isalpha(cptr: string | any, len: number): PyObject;

declare function _Py_bytes_isdigit(cptr: string | any, len: number): PyObject;

declare function _Py_bytes_islower(cptr: string | any, len: number): PyObject;

declare function _Py_bytes_isspace(cptr: string | any, len: number): PyObject;

declare function _Py_bytes_istitle(cptr: string | any, len: number): PyObject;

declare function _Py_bytes_isupper(cptr: string | any, len: number): PyObject;

declare function _Py_bytes_lower(result: string | any, cptr: string | any, len: number): void;

declare function _Py_bytes_swapcase(result: string | any, s: string | any, len: number): void;

declare function _Py_bytes_title(result: string | any, s: string | any, len: number): void;

declare function _Py_bytes_upper(result: string | any, cptr: string | any, len: number): void;

declare function _Py_c_abs(p1: Py_complex): number;

declare function _Py_c_diff(p1: Py_complex, p2: Py_complex): Py_complex;

declare function _Py_c_neg(p1: Py_complex): Py_complex;

declare function _Py_c_pow(p1: Py_complex, p2: Py_complex): Py_complex;

declare function _Py_c_prod(p1: Py_complex, p2: Py_complex): Py_complex;

declare function _Py_c_quot(p1: Py_complex, p2: Py_complex): Py_complex;

declare function _Py_c_sum(p1: Py_complex, p2: Py_complex): Py_complex;

declare var _Py_capitalize__doc__: number;

declare var _Py_ctype_table: number;

declare var _Py_ctype_tolower: number;

declare var _Py_ctype_toupper: number;

declare function _Py_dg_dtoa(d: number, mode: number, ndigits: number, decpt: number, sign: number, rve: string): string;

declare function _Py_dg_freedtoa(s: string | any): void;

declare function _Py_dg_strtod(str: string | any, ptr: string): number;

declare function _Py_double_round(x: number, ndigits: number): PyObject;

declare function _Py_gitidentifier(): string;

declare function _Py_gitversion(): string;

declare var _Py_isalnum__doc__: number;

declare var _Py_isalpha__doc__: number;

declare var _Py_isdigit__doc__: number;

declare var _Py_islower__doc__: number;

declare var _Py_isspace__doc__: number;

declare var _Py_istitle__doc__: number;

declare var _Py_isupper__doc__: number;

declare var _Py_lower__doc__: number;

declare function _Py_parse_inf_or_nan(p: string | any, endptr: string): number;

declare var _Py_swapcase__doc__: number;

declare var _Py_title__doc__: number;

declare var _Py_upper__doc__: number;

interface _dictobject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ma_fill: number;
	ma_used: number;
	ma_mask: number;
	ma_table: PyDictEntry;
	ma_lookup: (p1: _dictobject, p2: PyObject, p3: number) => PyDictEntry;
	ma_smalltable: PyDictEntry;
}
declare var _dictobject: _dictobject;

interface _frozen {
	name: string;
	code: string;
	size: number;
}
declare var _frozen: _frozen;

interface _inittab {
	name: string;
	initfunc: () => void;
}
declare var _inittab: _inittab;

interface _longobject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	ob_size: number;
	ob_digit: number;
}
declare var _longobject: _longobject;

interface _setobject {
	ob_refcnt: number;
	ob_type: PyTypeObject;
	fill: number;
	used: number;
	mask: number;
	table: setentry;
	lookup: (p1: _setobject, p2: PyObject, p3: number) => setentry;
	smalltable: setentry;
	hash: number;
	weakreflist: PyObject;
}
declare var _setobject: _setobject;

declare function addarc(d: dfa, from: number, to: number, lbl: number): void;

declare function addbit(bs: string | any, ibit: number): number;

declare function adddfa(g: grammar, type: number, name: string | any): dfa;

declare function addfirstsets(g: grammar): void;

declare function addlabel(ll: labellist, type: number, str: string | any): number;

declare function addstate(d: dfa): number;

interface arc {
	a_lbl: number;
	a_arrow: number;
}
declare var arc: arc;

enum cmp_op {

	PyCmp_LT = 0,

	PyCmp_LE = 1,

	PyCmp_EQ = 2,

	PyCmp_NE = 3,

	PyCmp_GT = 4,

	PyCmp_GE = 5,

	PyCmp_IN = 6,

	PyCmp_NOT_IN = 7,

	PyCmp_IS = 8,

	PyCmp_IS_NOT = 9,

	PyCmp_EXC_MATCH = 10,

	PyCmp_BAD = 11
}


declare function delbitset(bs: string | any): void;

interface dfa {
	d_type: number;
	d_name: string;
	d_initial: number;
	d_nstates: number;
	d_state: state;
	d_first: string;
}
declare var dfa: dfa;

declare function findlabel(ll: labellist, type: number, str: string | any): number;

declare function freegrammar(g: grammar): void;

interface grammar {
	g_ndfas: number;
	g_dfa: dfa;
	g_ll: labellist;
	g_start: number;
	g_accel: number;
}
declare var grammar: grammar;

interface label {
	lb_type: number;
	lb_str: string;
}
declare var label: label;

interface labellist {
	ll_nlabels: number;
	ll_label: label;
}
declare var labellist: labellist;

interface memberlist {
	name: string;
	type: number;
	offset: number;
	flags: number;
}
declare var memberlist: memberlist;

declare function mergebitset(bs1: string | any, bs2: string | any, nbits: number): void;

declare function meta_grammar(): grammar;

declare function newbitset(nbits: number): string;

declare function newgrammar(start: number): grammar;

interface node {
	n_type: number;
	n_str: string;
	n_lineno: number;
	n_col_offset: number;
	n_nchildren: number;
	n_child: node;
}
declare var node: node;

interface perrdetail {
	error: number;
	filename: string;
	lineno: number;
	offset: number;
	text: string;
	token: number;
	expected: number;
}
declare var perrdetail: perrdetail;

declare function pgen(p1: node): grammar;

declare function printgrammar(g: grammar, fp: FILE): void;

declare function printnonterminals(g: grammar, fp: FILE): void;

declare function samebitset(bs1: string | any, bs2: string | any, nbits: number): number;

interface setentry {
	hash: number;
	key: PyObject;
}
declare var setentry: setentry;

interface state {
	s_narcs: number;
	s_arc: arc;
	s_lower: number;
	s_upper: number;
	s_accel: number;
	s_accept: number;
}
declare var state: state;

declare function translatelabels(g: grammar): void;

interface wrapperbase {
	name: string;
	offset: number;
	function: any;
	wrapper: (p1: PyObject, p2: PyObject, p3: any) => PyObject;
	doc: string;
	flags: number;
	name_strobj: PyObject;
}
declare var wrapperbase: wrapperbase;
