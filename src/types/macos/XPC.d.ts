
interface OS_xpc_object extends NSObjectProtocol {
}
declare var OS_xpc_object: {

	prototype: OS_xpc_object;
};

declare var XPC_ACTIVITY_ALLOW_BATTERY: string;

declare var XPC_ACTIVITY_CHECK_IN: NSObject;

declare var XPC_ACTIVITY_DELAY: string;

declare var XPC_ACTIVITY_GRACE_PERIOD: string;

declare var XPC_ACTIVITY_INTERVAL: string;

declare var XPC_ACTIVITY_INTERVAL_15_MIN: number;

declare var XPC_ACTIVITY_INTERVAL_1_DAY: number;

declare var XPC_ACTIVITY_INTERVAL_1_HOUR: number;

declare var XPC_ACTIVITY_INTERVAL_1_MIN: number;

declare var XPC_ACTIVITY_INTERVAL_30_MIN: number;

declare var XPC_ACTIVITY_INTERVAL_4_HOURS: number;

declare var XPC_ACTIVITY_INTERVAL_5_MIN: number;

declare var XPC_ACTIVITY_INTERVAL_7_DAYS: number;

declare var XPC_ACTIVITY_INTERVAL_8_HOURS: number;

declare var XPC_ACTIVITY_PRIORITY: string;

declare var XPC_ACTIVITY_PRIORITY_MAINTENANCE: string;

declare var XPC_ACTIVITY_PRIORITY_UTILITY: string;

declare var XPC_ACTIVITY_REPEATING: string;

declare var XPC_ACTIVITY_REQUIRE_SCREEN_SLEEP: string;

declare const XPC_ACTIVITY_STATE_CHECK_IN: number;

declare const XPC_ACTIVITY_STATE_CONTINUE: number;

declare const XPC_ACTIVITY_STATE_DEFER: number;

declare const XPC_ACTIVITY_STATE_DONE: number;

declare const XPC_ACTIVITY_STATE_RUN: number;

declare const XPC_ACTIVITY_STATE_WAIT: number;

declare var _xpc_bool_false: void;

declare var _xpc_bool_true: void;

declare var _xpc_error_connection_interrupted: void;

declare var _xpc_error_connection_invalid: void;

declare var _xpc_error_key_description: string;

declare var _xpc_error_termination_imminent: void;

declare var _xpc_event_key_name: string;

declare var _xpc_type_activity: void;

declare var _xpc_type_array: void;

declare var _xpc_type_bool: void;

declare var _xpc_type_connection: void;

declare var _xpc_type_data: void;

declare var _xpc_type_date: void;

declare var _xpc_type_dictionary: void;

declare var _xpc_type_double: void;

declare var _xpc_type_endpoint: void;

declare var _xpc_type_error: void;

declare var _xpc_type_fd: void;

declare var _xpc_type_int64: void;

declare var _xpc_type_null: void;

declare var _xpc_type_shmem: void;

declare var _xpc_type_string: void;

declare var _xpc_type_uint64: void;

declare var _xpc_type_uuid: void;

declare function xpc_activity_copy_criteria(activity: NSObject): NSObject;

declare function xpc_activity_get_state(activity: NSObject): number;

declare function xpc_activity_register(identifier: string | any, criteria: NSObject, handler: (p1: NSObject) => void): void;

declare function xpc_activity_set_criteria(activity: NSObject, criteria: NSObject): void;

declare function xpc_activity_set_state(activity: NSObject, state: number): boolean;

declare function xpc_activity_should_defer(activity: NSObject): boolean;

declare function xpc_activity_unregister(identifier: string | any): void;

declare function xpc_array_append_value(xarray: NSObject, value: NSObject): void;

declare function xpc_array_apply(xarray: NSObject, applier: (p1: number, p2: NSObject) => boolean): boolean;

declare function xpc_array_create(objects: NSObject, count: number): NSObject;

declare function xpc_array_create_connection(xarray: NSObject, index: number): NSObject;

declare function xpc_array_dup_fd(xarray: NSObject, index: number): number;

declare function xpc_array_get_array(xarray: NSObject, index: number): NSObject;

declare function xpc_array_get_bool(xarray: NSObject, index: number): boolean;

declare function xpc_array_get_count(xarray: NSObject): number;

declare function xpc_array_get_data(xarray: NSObject, index: number, length: number): any;

declare function xpc_array_get_date(xarray: NSObject, index: number): number;

declare function xpc_array_get_dictionary(xarray: NSObject, index: number): NSObject;

declare function xpc_array_get_double(xarray: NSObject, index: number): number;

declare function xpc_array_get_int64(xarray: NSObject, index: number): number;

declare function xpc_array_get_string(xarray: NSObject, index: number): string;

declare function xpc_array_get_uint64(xarray: NSObject, index: number): number;

declare function xpc_array_get_uuid(xarray: NSObject, index: number): string;

declare function xpc_array_get_value(xarray: NSObject, index: number): NSObject;

declare function xpc_array_set_bool(xarray: NSObject, index: number, value: boolean): void;

declare function xpc_array_set_connection(xarray: NSObject, index: number, connection: NSObject): void;

declare function xpc_array_set_data(xarray: NSObject, index: number, bytes: any, length: number): void;

declare function xpc_array_set_date(xarray: NSObject, index: number, value: number): void;

declare function xpc_array_set_double(xarray: NSObject, index: number, value: number): void;

declare function xpc_array_set_fd(xarray: NSObject, index: number, fd: number): void;

declare function xpc_array_set_int64(xarray: NSObject, index: number, value: number): void;

declare function xpc_array_set_string(xarray: NSObject, index: number, string: string | any): void;

declare function xpc_array_set_uint64(xarray: NSObject, index: number, value: number): void;

declare function xpc_array_set_uuid(xarray: NSObject, index: number, uuid: number): void;

declare function xpc_array_set_value(xarray: NSObject, index: number, value: NSObject): void;

declare function xpc_bool_create(value: boolean): NSObject;

declare function xpc_bool_get_value(xbool: NSObject): boolean;

declare function xpc_connection_activate(connection: NSObject): void;

declare function xpc_connection_cancel(connection: NSObject): void;

declare function xpc_connection_create(name: string | any, targetq: NSObject): NSObject;

declare function xpc_connection_create_from_endpoint(endpoint: NSObject): NSObject;

declare function xpc_connection_create_mach_service(name: string | any, targetq: NSObject, flags: number): NSObject;

declare function xpc_connection_get_asid(connection: NSObject): number;

declare function xpc_connection_get_context(connection: NSObject): any;

declare function xpc_connection_get_egid(connection: NSObject): number;

declare function xpc_connection_get_euid(connection: NSObject): number;

declare function xpc_connection_get_name(connection: NSObject): string;

declare function xpc_connection_get_pid(connection: NSObject): number;

declare function xpc_connection_resume(connection: NSObject): void;

declare function xpc_connection_send_barrier(connection: NSObject, barrier: () => void): void;

declare function xpc_connection_send_message(connection: NSObject, message: NSObject): void;

declare function xpc_connection_send_message_with_reply(connection: NSObject, message: NSObject, replyq: NSObject, handler: (p1: NSObject) => void): void;

declare function xpc_connection_send_message_with_reply_sync(connection: NSObject, message: NSObject): NSObject;

declare function xpc_connection_set_context(connection: NSObject, context: any): void;

declare function xpc_connection_set_event_handler(connection: NSObject, handler: (p1: NSObject) => void): void;

declare function xpc_connection_set_finalizer_f(connection: NSObject, finalizer: (p1: any) => void): void;

declare function xpc_connection_set_target_queue(connection: NSObject, targetq: NSObject): void;

declare function xpc_connection_suspend(connection: NSObject): void;

declare function xpc_copy(object_: NSObject): NSObject;

declare function xpc_copy_description(object_: NSObject): string;

declare function xpc_data_create(bytes: any, length: number): NSObject;

declare function xpc_data_create_with_dispatch_data(ddata: NSObject): NSObject;

declare function xpc_data_get_bytes(xdata: NSObject, buffer: any, off: number, length: number): number;

declare function xpc_data_get_bytes_ptr(xdata: NSObject): any;

declare function xpc_data_get_length(xdata: NSObject): number;

declare function xpc_date_create(interval: number): NSObject;

declare function xpc_date_create_from_current(): NSObject;

declare function xpc_date_get_value(xdate: NSObject): number;

declare function xpc_debugger_api_misuse_info(): string;

declare function xpc_dictionary_apply(xdict: NSObject, applier: (p1: string, p2: NSObject) => boolean): boolean;

declare function xpc_dictionary_create(keys: string, values: NSObject, count: number): NSObject;

declare function xpc_dictionary_create_connection(xdict: NSObject, key: string | any): NSObject;

declare function xpc_dictionary_create_reply(original: NSObject): NSObject;

declare function xpc_dictionary_dup_fd(xdict: NSObject, key: string | any): number;

declare function xpc_dictionary_get_array(xdict: NSObject, key: string | any): NSObject;

declare function xpc_dictionary_get_bool(xdict: NSObject, key: string | any): boolean;

declare function xpc_dictionary_get_count(xdict: NSObject): number;

declare function xpc_dictionary_get_data(xdict: NSObject, key: string | any, length: number): any;

declare function xpc_dictionary_get_date(xdict: NSObject, key: string | any): number;

declare function xpc_dictionary_get_dictionary(xdict: NSObject, key: string | any): NSObject;

declare function xpc_dictionary_get_double(xdict: NSObject, key: string | any): number;

declare function xpc_dictionary_get_int64(xdict: NSObject, key: string | any): number;

declare function xpc_dictionary_get_remote_connection(xdict: NSObject): NSObject;

declare function xpc_dictionary_get_string(xdict: NSObject, key: string | any): string;

declare function xpc_dictionary_get_uint64(xdict: NSObject, key: string | any): number;

declare function xpc_dictionary_get_uuid(xdict: NSObject, key: string | any): string;

declare function xpc_dictionary_get_value(xdict: NSObject, key: string | any): NSObject;

declare function xpc_dictionary_set_bool(xdict: NSObject, key: string | any, value: boolean): void;

declare function xpc_dictionary_set_connection(xdict: NSObject, key: string | any, connection: NSObject): void;

declare function xpc_dictionary_set_data(xdict: NSObject, key: string | any, bytes: any, length: number): void;

declare function xpc_dictionary_set_date(xdict: NSObject, key: string | any, value: number): void;

declare function xpc_dictionary_set_double(xdict: NSObject, key: string | any, value: number): void;

declare function xpc_dictionary_set_fd(xdict: NSObject, key: string | any, fd: number): void;

declare function xpc_dictionary_set_int64(xdict: NSObject, key: string | any, value: number): void;

declare function xpc_dictionary_set_string(xdict: NSObject, key: string | any, string: string | any): void;

declare function xpc_dictionary_set_uint64(xdict: NSObject, key: string | any, value: number): void;

declare function xpc_dictionary_set_uuid(xdict: NSObject, key: string | any, uuid: number): void;

declare function xpc_dictionary_set_value(xdict: NSObject, key: string | any, value: NSObject): void;

declare function xpc_double_create(value: number): NSObject;

declare function xpc_double_get_value(xdouble: NSObject): number;

declare function xpc_endpoint_create(connection: NSObject): NSObject;

declare function xpc_equal(object1: NSObject, object2: NSObject): boolean;

declare function xpc_fd_create(fd: number): NSObject;

declare function xpc_fd_dup(xfd: NSObject): number;

declare function xpc_get_type(object_: NSObject): any;

declare function xpc_hash(object_: NSObject): number;

declare function xpc_int64_create(value: number): NSObject;

declare function xpc_int64_get_value(xint: NSObject): number;

declare function xpc_main(handler: (p1: NSObject) => void): void;

declare function xpc_null_create(): NSObject;

declare function xpc_release(object_: NSObject): void;

declare function xpc_retain(object_: NSObject): NSObject;

declare function xpc_set_event_stream_handler(stream: string | any, targetq: NSObject, handler: (p1: NSObject) => void): void;

declare function xpc_shmem_create(region: any, length: number): NSObject;

declare function xpc_shmem_map(xshmem: NSObject, region: any): number;

declare function xpc_string_create(string: string | any): NSObject;

declare function xpc_string_get_length(xstring: NSObject): number;

declare function xpc_string_get_string_ptr(xstring: NSObject): string;

declare function xpc_transaction_begin(): void;

declare function xpc_transaction_end(): void;

declare function xpc_type_get_name(type: any): string;

declare function xpc_uint64_create(value: number): NSObject;

declare function xpc_uint64_get_value(xuint: NSObject): number;

declare function xpc_uuid_create(uuid: number): NSObject;

declare function xpc_uuid_get_bytes(xuuid: NSObject): string;
