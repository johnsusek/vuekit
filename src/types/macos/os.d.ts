
interface OS_os_activity extends NSObjectProtocol {
}
declare var OS_os_activity: {

	prototype: OS_os_activity;
};

interface OS_os_log extends NSObjectProtocol {
}
declare var OS_os_log: {

	prototype: OS_os_log;
};

declare var __dso_handle: mach_header;

declare function _os_activity_create(dso: any, description: string | any, activity: NSObject, flags: os_activity_flag_t): NSObject;

declare var _os_activity_current: void;

declare function _os_activity_initiate(dso: any, description: string | any, flags: os_activity_flag_t, activity_block: () => void): void;

declare function _os_activity_initiate_f(dso: any, description: string | any, flags: os_activity_flag_t, context: any, function_: (p1: any) => void): void;

declare function _os_activity_label_useraction(dso: any, name: string | any): void;

declare var _os_activity_none: void;

declare function _os_log_create(dso: any, subsystem: string | any, category: string | any): NSObject;

declare function _os_log_debug_impl(dso: any, log: NSObject, type: os_log_type_t, format: string | any, buf: string | any, size: number): void;

declare var _os_log_default: void;

declare var _os_log_disabled: void;

declare function _os_log_error_impl(dso: any, log: NSObject, type: os_log_type_t, format: string | any, buf: string | any, size: number): void;

declare function _os_log_fault_impl(dso: any, log: NSObject, type: os_log_type_t, format: string | any, buf: string | any, size: number): void;

declare function _os_log_impl(dso: any, log: NSObject, type: os_log_type_t, format: string | any, buf: string | any, size: number): void;

declare function _os_signpost_emit_with_name_impl(dso: any, log: NSObject, type: os_signpost_type_t, spid: number, name: string | any, format: string | any, buf: string | any, size: number): void;

declare function os_activity_apply(activity: NSObject, block: () => void): void;

declare function os_activity_apply_f(activity: NSObject, context: any, function_: (p1: any) => void): void;

enum os_activity_flag_t {

	OS_ACTIVITY_FLAG_DEFAULT = 0,

	OS_ACTIVITY_FLAG_DETACHED = 1,

	OS_ACTIVITY_FLAG_IF_NONE_PRESENT = 2
}


declare function os_activity_get_identifier(activity: NSObject, parent_id: number): number;

declare function os_activity_scope_enter(activity: NSObject, state: os_activity_scope_state_s): void;

declare function os_activity_scope_leave(state: os_activity_scope_state_s): void;

interface os_activity_scope_state_s {
	opaque: number;
}
declare var os_activity_scope_state_s: os_activity_scope_state_s;

declare function os_log_create(subsystem: string | any, category: string | any): NSObject;

declare function os_log_type_enabled(oslog: NSObject, type: os_log_type_t): boolean;

enum os_log_type_t {

	OS_LOG_TYPE_DEFAULT = 0,

	OS_LOG_TYPE_INFO = 1,

	OS_LOG_TYPE_DEBUG = 2,

	OS_LOG_TYPE_ERROR = 16,

	OS_LOG_TYPE_FAULT = 17
}


declare function os_signpost_enabled(log: NSObject): boolean;

declare function os_signpost_id_generate(log: NSObject): number;

declare function os_signpost_id_make_with_pointer(log: NSObject, ptr: any): number;

enum os_signpost_type_t {

	OS_SIGNPOST_EVENT = 0,

	OS_SIGNPOST_INTERVAL_BEGIN = 1,

	OS_SIGNPOST_INTERVAL_END = 2
}

