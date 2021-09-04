
declare const DISPATCH_WALLTIME_NOW: number;

interface OS_dispatch_data extends OS_dispatch_object {
}
declare var OS_dispatch_data: {

	prototype: OS_dispatch_data;
};

interface OS_dispatch_group extends OS_dispatch_object {
}
declare var OS_dispatch_group: {

	prototype: OS_dispatch_group;
};

interface OS_dispatch_io extends OS_dispatch_object {
}
declare var OS_dispatch_io: {

	prototype: OS_dispatch_io;
};

interface OS_dispatch_object extends NSObjectProtocol {
}
declare var OS_dispatch_object: {

	prototype: OS_dispatch_object;
};

interface OS_dispatch_queue extends OS_dispatch_object {
}
declare var OS_dispatch_queue: {

	prototype: OS_dispatch_queue;
};

interface OS_dispatch_queue_attr extends OS_dispatch_object {
}
declare var OS_dispatch_queue_attr: {

	prototype: OS_dispatch_queue_attr;
};

interface OS_dispatch_queue_concurrent extends OS_dispatch_queue {
}
declare var OS_dispatch_queue_concurrent: {

	prototype: OS_dispatch_queue_concurrent;
};

interface OS_dispatch_queue_global extends OS_dispatch_queue {
}
declare var OS_dispatch_queue_global: {

	prototype: OS_dispatch_queue_global;
};

interface OS_dispatch_queue_main extends OS_dispatch_queue_serial {
}
declare var OS_dispatch_queue_main: {

	prototype: OS_dispatch_queue_main;
};

interface OS_dispatch_queue_serial extends OS_dispatch_queue {
}
declare var OS_dispatch_queue_serial: {

	prototype: OS_dispatch_queue_serial;
};

interface OS_dispatch_semaphore extends OS_dispatch_object {
}
declare var OS_dispatch_semaphore: {

	prototype: OS_dispatch_semaphore;
};

interface OS_dispatch_source extends OS_dispatch_object {
}
declare var OS_dispatch_source: {

	prototype: OS_dispatch_source;
};

interface OS_dispatch_workloop extends OS_dispatch_queue {
}
declare var OS_dispatch_workloop: {

	prototype: OS_dispatch_workloop;
};

declare var _dispatch_data_destructor_free: () => void;

declare var _dispatch_data_destructor_munmap: () => void;

declare var _dispatch_data_empty: void;

declare var _dispatch_main_q: void;

declare var _dispatch_queue_attr_concurrent: void;

declare var _dispatch_source_type_data_add: void;

declare var _dispatch_source_type_data_or: void;

declare var _dispatch_source_type_data_replace: void;

declare var _dispatch_source_type_mach_recv: void;

declare var _dispatch_source_type_mach_send: void;

declare var _dispatch_source_type_memorypressure: void;

declare var _dispatch_source_type_proc: void;

declare var _dispatch_source_type_read: void;

declare var _dispatch_source_type_signal: void;

declare var _dispatch_source_type_timer: void;

declare var _dispatch_source_type_vnode: void;

declare var _dispatch_source_type_write: void;

declare function dispatch_activate(object_: NSObject): void;

declare function dispatch_after(when: number, queue: NSObject, block: () => void): void;

declare function dispatch_after_f(when: number, queue: NSObject, context: any, work: (p1: any) => void): void;

declare function dispatch_apply(iterations: number, queue: NSObject, block: (p1: number) => void): void;

declare function dispatch_apply_f(iterations: number, queue: NSObject, context: any, work: (p1: any, p2: number) => void): void;

declare function dispatch_assert_queue(queue: NSObject): void;

declare function dispatch_assert_queue_barrier(queue: NSObject): void;

declare function dispatch_assert_queue_not(queue: NSObject): void;

declare function dispatch_async(queue: NSObject, block: () => void): void;

declare function dispatch_async_and_wait(queue: NSObject, block: () => void): void;

declare function dispatch_async_and_wait_f(queue: NSObject, context: any, work: (p1: any) => void): void;

declare function dispatch_async_f(queue: NSObject, context: any, work: (p1: any) => void): void;

enum dispatch_autorelease_frequency_t {

	DISPATCH_AUTORELEASE_FREQUENCY_INHERIT = 0,

	DISPATCH_AUTORELEASE_FREQUENCY_WORK_ITEM = 1,

	DISPATCH_AUTORELEASE_FREQUENCY_NEVER = 2
}


declare function dispatch_barrier_async(queue: NSObject, block: () => void): void;

declare function dispatch_barrier_async_and_wait(queue: NSObject, block: () => void): void;

declare function dispatch_barrier_async_and_wait_f(queue: NSObject, context: any, work: (p1: any) => void): void;

declare function dispatch_barrier_async_f(queue: NSObject, context: any, work: (p1: any) => void): void;

declare function dispatch_barrier_sync(queue: NSObject, block: () => void): void;

declare function dispatch_barrier_sync_f(queue: NSObject, context: any, work: (p1: any) => void): void;

declare function dispatch_block_cancel(block: () => void): void;

declare function dispatch_block_create(flags: dispatch_block_flags_t, block: () => void): () => void;

declare function dispatch_block_create_with_qos_class(flags: dispatch_block_flags_t, qos_class: qos_class_t, relative_priority: number, block: () => void): () => void;

enum dispatch_block_flags_t {

	DISPATCH_BLOCK_BARRIER = 1,

	DISPATCH_BLOCK_DETACHED = 2,

	DISPATCH_BLOCK_ASSIGN_CURRENT = 4,

	DISPATCH_BLOCK_NO_QOS_CLASS = 8,

	DISPATCH_BLOCK_INHERIT_QOS_CLASS = 16,

	DISPATCH_BLOCK_ENFORCE_QOS_CLASS = 32
}


declare function dispatch_block_notify(block: () => void, queue: NSObject, notification_block: () => void): void;

declare function dispatch_block_perform(flags: dispatch_block_flags_t, block: () => void): void;

declare function dispatch_block_testcancel(block: () => void): number;

declare function dispatch_block_wait(block: () => void, timeout: number): number;

declare function dispatch_cancel(object_: any): void;

declare function dispatch_data_apply(data: NSObject, applier: (p1: NSObject, p2: number, p3: any, p4: number) => boolean): boolean;

declare function dispatch_data_copy_region(data: NSObject, location: number, offset_ptr: number): NSObject;

declare function dispatch_data_create(buffer: any, size: number, queue: NSObject, destructor: () => void): NSObject;

declare function dispatch_data_create_concat(data1: NSObject, data2: NSObject): NSObject;

declare function dispatch_data_create_map(data: NSObject, buffer_ptr: any, size_ptr: number): NSObject;

declare function dispatch_data_create_subrange(data: NSObject, offset: number, length: number): NSObject;

declare function dispatch_data_get_size(data: NSObject): number;

declare function dispatch_get_context(object_: NSObject): any;

declare function dispatch_get_global_queue(identifier: number, flags: number): NSObject;

declare function dispatch_get_specific(key: any): any;

declare function dispatch_group_async(group: NSObject, queue: NSObject, block: () => void): void;

declare function dispatch_group_async_f(group: NSObject, queue: NSObject, context: any, work: (p1: any) => void): void;

declare function dispatch_group_create(): NSObject;

declare function dispatch_group_enter(group: NSObject): void;

declare function dispatch_group_leave(group: NSObject): void;

declare function dispatch_group_notify(group: NSObject, queue: NSObject, block: () => void): void;

declare function dispatch_group_notify_f(group: NSObject, queue: NSObject, context: any, work: (p1: any) => void): void;

declare function dispatch_group_wait(group: NSObject, timeout: number): number;

declare function dispatch_io_barrier(channel: NSObject, barrier: () => void): void;

declare function dispatch_io_close(channel: NSObject, flags: number): void;

declare function dispatch_io_create(type: number, fd: number, queue: NSObject, cleanup_handler: (p1: number) => void): NSObject;

declare function dispatch_io_create_with_io(type: number, io: NSObject, queue: NSObject, cleanup_handler: (p1: number) => void): NSObject;

declare function dispatch_io_create_with_path(type: number, path: string | any, oflag: number, mode: number, queue: NSObject, cleanup_handler: (p1: number) => void): NSObject;

declare function dispatch_io_get_descriptor(channel: NSObject): number;

declare function dispatch_io_read(channel: NSObject, offset: number, length: number, queue: NSObject, io_handler: (p1: boolean, p2: NSObject, p3: number) => void): void;

declare function dispatch_io_set_high_water(channel: NSObject, high_water: number): void;

declare function dispatch_io_set_interval(channel: NSObject, interval: number, flags: number): void;

declare function dispatch_io_set_low_water(channel: NSObject, low_water: number): void;

declare function dispatch_io_write(channel: NSObject, offset: number, data: NSObject, queue: NSObject, io_handler: (p1: boolean, p2: NSObject, p3: number) => void): void;

declare function dispatch_main(): never;

declare function dispatch_notify(object_: any, queue: NSObject, notification_block: () => void): void;

declare function dispatch_once(predicate: number, block: () => void): void;

declare function dispatch_once_f(predicate: number, context: any, function_: (p1: any) => void): void;

declare function dispatch_queue_attr_make_initially_inactive(attr: NSObject): NSObject;

declare function dispatch_queue_attr_make_with_autorelease_frequency(attr: NSObject, frequency: dispatch_autorelease_frequency_t): NSObject;

declare function dispatch_queue_attr_make_with_qos_class(attr: NSObject, qos_class: qos_class_t, relative_priority: number): NSObject;

declare function dispatch_queue_create(label: string | any, attr: NSObject): NSObject;

declare function dispatch_queue_create_with_target(label: string | any, attr: NSObject, target: NSObject): NSObject;

declare function dispatch_queue_get_label(queue: NSObject): string;

declare function dispatch_queue_get_qos_class(queue: NSObject, relative_priority_ptr: number): qos_class_t;

declare function dispatch_queue_get_specific(queue: NSObject, key: any): any;

declare function dispatch_queue_set_specific(queue: NSObject, key: any, context: any, destructor: (p1: any) => void): void;

declare function dispatch_read(fd: number, length: number, queue: NSObject, handler: (p1: NSObject, p2: number) => void): void;

declare function dispatch_resume(object_: NSObject): void;

declare function dispatch_semaphore_create(value: number): NSObject;

declare function dispatch_semaphore_signal(dsema: NSObject): number;

declare function dispatch_semaphore_wait(dsema: NSObject, timeout: number): number;

declare function dispatch_set_context(object_: NSObject, context: any): void;

declare function dispatch_set_finalizer_f(object_: NSObject, finalizer: (p1: any) => void): void;

declare function dispatch_set_qos_class_floor(object_: NSObject, qos_class: qos_class_t, relative_priority: number): void;

declare function dispatch_set_target_queue(object_: NSObject, queue: NSObject): void;

declare function dispatch_source_cancel(source: NSObject): void;

declare function dispatch_source_create(type: any, handle: number, mask: number, queue: NSObject): NSObject;

declare function dispatch_source_get_data(source: NSObject): number;

declare function dispatch_source_get_handle(source: NSObject): number;

declare function dispatch_source_get_mask(source: NSObject): number;

declare function dispatch_source_merge_data(source: NSObject, value: number): void;

declare function dispatch_source_set_cancel_handler(source: NSObject, handler: () => void): void;

declare function dispatch_source_set_cancel_handler_f(source: NSObject, handler: (p1: any) => void): void;

declare function dispatch_source_set_event_handler(source: NSObject, handler: () => void): void;

declare function dispatch_source_set_event_handler_f(source: NSObject, handler: (p1: any) => void): void;

declare function dispatch_source_set_registration_handler(source: NSObject, handler: () => void): void;

declare function dispatch_source_set_registration_handler_f(source: NSObject, handler: (p1: any) => void): void;

declare function dispatch_source_set_timer(source: NSObject, start: number, interval: number, leeway: number): void;

declare function dispatch_source_testcancel(source: NSObject): number;

declare function dispatch_suspend(object_: NSObject): void;

declare function dispatch_sync(queue: NSObject, block: () => void): void;

declare function dispatch_sync_f(queue: NSObject, context: any, work: (p1: any) => void): void;

declare function dispatch_testcancel(object_: any): number;

declare function dispatch_time(when: number, delta: number): number;

declare function dispatch_wait(object_: any, timeout: number): number;

declare function dispatch_walltime(when: timespec, delta: number): number;

declare function dispatch_workloop_create(label: string | any): NSObject;

declare function dispatch_workloop_create_inactive(label: string | any): NSObject;

declare function dispatch_workloop_set_autorelease_frequency(workloop: NSObject, frequency: dispatch_autorelease_frequency_t): void;

declare function dispatch_write(fd: number, data: NSObject, queue: NSObject, handler: (p1: NSObject, p2: number) => void): void;
