
enum ffi_abi {

	FFI_FIRST_ABI = 1,

	FFI_UNIX64 = 2,

	FFI_WIN64 = 3,

	FFI_EFI64 = 3,

	FFI_GNUW64 = 4,

	FFI_LAST_ABI = 5,

	FFI_DEFAULT_ABI = 2
}


declare function ffi_call(cif: ffi_cif, fn: () => void, rvalue: any, avalue: any): void;

interface ffi_cif {
	abi: ffi_abi;
	nargs: number;
	arg_types: ffi_type;
	rtype: ffi_type;
	bytes: number;
	flags: number;
}
declare var ffi_cif: ffi_cif;

interface ffi_closure {
	tramp: number;
	cif: ffi_cif;
	fun: (p1: ffi_cif, p2: any, p3: any, p4: any) => void;
	user_data: any;
}
declare var ffi_closure: ffi_closure;

declare function ffi_closure_alloc(size: number, code: any): any;

declare function ffi_closure_free(p1: any): void;

declare function ffi_find_closure_for_code_np(code: any): ffi_closure;

declare function ffi_get_struct_offsets(abi: ffi_abi, struct_type: ffi_type, offsets: number): ffi_status;

declare function ffi_java_raw_size(cif: ffi_cif): number;

declare function ffi_prep_cif(cif: ffi_cif, abi: ffi_abi, nargs: number, rtype: ffi_type, atypes: ffi_type): ffi_status;

declare function ffi_prep_cif_var(cif: ffi_cif, abi: ffi_abi, nfixedargs: number, ntotalargs: number, rtype: ffi_type, atypes: ffi_type): ffi_status;

declare function ffi_prep_closure(p1: ffi_closure, p2: ffi_cif, fun: (p1: ffi_cif, p2: any, p3: any, p4: any) => void, user_data: any): ffi_status;

declare function ffi_prep_closure_loc(p1: ffi_closure, p2: ffi_cif, fun: (p1: ffi_cif, p2: any, p3: any, p4: any) => void, user_data: any, codeloc: any): ffi_status;

declare function ffi_raw_size(cif: ffi_cif): number;

enum ffi_status {

	FFI_OK = 0,

	FFI_BAD_TYPEDEF = 1,

	FFI_BAD_ABI = 2
}


interface ffi_type {
	size: number;
	alignment: number;
	type: number;
	elements: ffi_type;
}
declare var ffi_type: ffi_type;

declare var ffi_type_complex_double: ffi_type;

declare var ffi_type_complex_float: ffi_type;

declare var ffi_type_complex_longdouble: ffi_type;

declare var ffi_type_double: ffi_type;

declare var ffi_type_float: ffi_type;

declare var ffi_type_longdouble: ffi_type;

declare var ffi_type_pointer: ffi_type;

declare var ffi_type_sint16: ffi_type;

declare var ffi_type_sint32: ffi_type;

declare var ffi_type_sint64: ffi_type;

declare var ffi_type_sint8: ffi_type;

declare var ffi_type_uint16: ffi_type;

declare var ffi_type_uint32: ffi_type;

declare var ffi_type_uint64: ffi_type;

declare var ffi_type_uint8: ffi_type;

declare var ffi_type_void: ffi_type;
