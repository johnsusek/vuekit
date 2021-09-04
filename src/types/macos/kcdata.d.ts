
enum coalition_flags {

	kCoalitionTermRequested = 1,

	kCoalitionTerminated = 2,

	kCoalitionReaped = 4,

	kCoalitionPrivileged = 8
}


interface codesigning_exit_reason_info {
	ceri_virt_addr: number;
	ceri_file_offset: number;
	ceri_pathname: number;
	ceri_filename: number;
	ceri_codesig_modtime_secs: number;
	ceri_codesig_modtime_nsecs: number;
	ceri_page_modtime_secs: number;
	ceri_page_modtime_nsecs: number;
	ceri_path_truncated: number;
	ceri_object_codesigned: number;
	ceri_page_codesig_validated: number;
	ceri_page_codesig_tainted: number;
	ceri_page_codesig_nx: number;
	ceri_page_wpmapped: number;
	ceri_page_slid: number;
	ceri_page_dirty: number;
	ceri_page_shadow_depth: number;
}
declare var codesigning_exit_reason_info: codesigning_exit_reason_info;

interface crashinfo_proc_uniqidentifierinfo {
	p_uuid: number;
	p_uniqueid: number;
	p_puniqueid: number;
	p_reserve2: number;
	p_reserve3: number;
	p_reserve4: number;
}
declare var crashinfo_proc_uniqidentifierinfo: crashinfo_proc_uniqidentifierinfo;

interface dyld_uuid_info_32 {
	imageLoadAddress: number;
	imageUUID: number;
}
declare var dyld_uuid_info_32: dyld_uuid_info_32;

interface dyld_uuid_info_64 {
	imageLoadAddress: number;
	imageUUID: number;
}
declare var dyld_uuid_info_64: dyld_uuid_info_64;

interface dyld_uuid_info_64_v2 {
	imageLoadAddress: number;
	imageUUID: number;
	imageSlidBaseAddress: number;
}
declare var dyld_uuid_info_64_v2: dyld_uuid_info_64_v2;

interface exit_reason_snapshot {
	ers_namespace: number;
	ers_code: number;
	ers_flags: number;
}
declare var exit_reason_snapshot: exit_reason_snapshot;

interface instrs_cycles_snapshot {
	ics_instructions: number;
	ics_cycles: number;
}
declare var instrs_cycles_snapshot: instrs_cycles_snapshot;

interface io_stats_snapshot {
	ss_disk_reads_count: number;
	ss_disk_reads_size: number;
	ss_disk_writes_count: number;
	ss_disk_writes_size: number;
	ss_io_priority_count: number;
	ss_io_priority_size: number;
	ss_paging_count: number;
	ss_paging_size: number;
	ss_non_paging_count: number;
	ss_non_paging_size: number;
	ss_data_count: number;
	ss_data_size: number;
	ss_metadata_count: number;
	ss_metadata_size: number;
}
declare var io_stats_snapshot: io_stats_snapshot;

interface jetsam_coalition_snapshot {
	jcs_id: number;
	jcs_flags: number;
	jcs_thread_group: number;
	jcs_leader_task_uniqueid: number;
}
declare var jetsam_coalition_snapshot: jetsam_coalition_snapshot;

interface kcdata_item {
	type: number;
	size: number;
	flags: number;
	data: number;
}
declare var kcdata_item: kcdata_item;

interface kcdata_iter_t {
	item: kcdata_item;
	end: any;
}
declare var kcdata_iter_t: kcdata_iter_t;

declare function kcdata_iter_unsafe(buffer: any): kcdata_iter_t;

interface kcdata_subtype_descriptor {
	kcs_flags: number;
	kcs_elem_type: number;
	kcs_elem_offset: number;
	kcs_elem_size: number;
	kcs_name: number;
}
declare var kcdata_subtype_descriptor: kcdata_subtype_descriptor;

interface kcdata_type_definition {
	kct_type_identifier: number;
	kct_num_elements: number;
	kct_name: number;
	kct_elements: kcdata_subtype_descriptor;
}
declare var kcdata_type_definition: kcdata_type_definition;

enum kctype_subtype_t {

	KC_ST_CHAR = 1,

	KC_ST_INT8 = 2,

	KC_ST_UINT8 = 3,

	KC_ST_INT16 = 4,

	KC_ST_UINT16 = 5,

	KC_ST_INT32 = 6,

	KC_ST_UINT32 = 7,

	KC_ST_INT64 = 8,

	KC_ST_UINT64 = 9
}


interface mem_and_io_snapshot {
	snapshot_magic: number;
	free_pages: number;
	active_pages: number;
	inactive_pages: number;
	purgeable_pages: number;
	wired_pages: number;
	speculative_pages: number;
	throttled_pages: number;
	filebacked_pages: number;
	compressions: number;
	decompressions: number;
	compressor_size: number;
	busy_buffer_count: number;
	pages_wanted: number;
	pages_reclaimed: number;
	pages_wanted_reclaimed_valid: number;
}
declare var mem_and_io_snapshot: mem_and_io_snapshot;

interface stack_snapshot_frame32 {
	lr: number;
	sp: number;
}
declare var stack_snapshot_frame32: stack_snapshot_frame32;

interface stack_snapshot_frame64 {
	lr: number;
	sp: number;
}
declare var stack_snapshot_frame64: stack_snapshot_frame64;

interface stack_snapshot_stacktop {
	sp: number;
	stack_contents: number;
}
declare var stack_snapshot_stacktop: stack_snapshot_stacktop;

interface stackshot_cpu_times {
	user_usec: number;
	system_usec: number;
}
declare var stackshot_cpu_times: stackshot_cpu_times;

interface stackshot_cpu_times_v2 {
	user_usec: number;
	system_usec: number;
	runnable_usec: number;
}
declare var stackshot_cpu_times_v2: stackshot_cpu_times_v2;

interface stackshot_duration {
	stackshot_duration: number;
	stackshot_duration_outer: number;
}
declare var stackshot_duration: stackshot_duration;

interface stackshot_fault_stats {
	sfs_pages_faulted_in: number;
	sfs_time_spent_faulting: number;
	sfs_system_max_fault_time: number;
	sfs_stopped_faulting: number;
}
declare var stackshot_fault_stats: stackshot_fault_stats;

interface task_delta_snapshot_v2 {
	tds_unique_pid: number;
	tds_ss_flags: number;
	tds_user_time_in_terminated_threads: number;
	tds_system_time_in_terminated_threads: number;
	tds_task_size: number;
	tds_max_resident_size: number;
	tds_suspend_count: number;
	tds_faults: number;
	tds_pageins: number;
	tds_cow_faults: number;
	tds_was_throttled: number;
	tds_did_throttle: number;
	tds_latency_qos: number;
}
declare var task_delta_snapshot_v2: task_delta_snapshot_v2;

enum task_snapshot_flags {

	kTaskRsrcFlagged = 4,

	kTerminatedSnapshot = 8,

	kPidSuspended = 16,

	kFrozen = 32,

	kTaskDarwinBG = 64,

	kTaskExtDarwinBG = 128,

	kTaskVisVisible = 256,

	kTaskVisNonvisible = 512,

	kTaskIsForeground = 1024,

	kTaskIsBoosted = 2048,

	kTaskIsSuppressed = 4096,

	kTaskIsTimerThrottled = 8192,

	kTaskIsImpDonor = 16384,

	kTaskIsLiveImpDonor = 32768,

	kTaskIsDirty = 65536,

	kTaskWqExceededConstrainedThreadLimit = 131072,

	kTaskWqExceededTotalThreadLimit = 262144,

	kTaskWqFlagsAvailable = 524288,

	kTaskUUIDInfoFaultedIn = 1048576,

	kTaskUUIDInfoMissing = 2097152,

	kTaskUUIDInfoTriedFault = 4194304,

	kTaskSharedRegionInfoUnavailable = 8388608,

	kTaskTALEngaged = 16777216,

	kTaskIsDirtyTracked = 67108864,

	kTaskAllowIdleExit = 134217728
}


interface task_snapshot_v2 {
	ts_unique_pid: number;
	ts_ss_flags: number;
	ts_user_time_in_terminated_threads: number;
	ts_system_time_in_terminated_threads: number;
	ts_p_start_sec: number;
	ts_task_size: number;
	ts_max_resident_size: number;
	ts_suspend_count: number;
	ts_faults: number;
	ts_pageins: number;
	ts_cow_faults: number;
	ts_was_throttled: number;
	ts_did_throttle: number;
	ts_latency_qos: number;
	ts_pid: number;
	ts_p_comm: number;
}
declare var task_snapshot_v2: task_snapshot_v2;

interface thread_delta_snapshot_v2 {
	tds_thread_id: number;
	tds_voucher_identifier: number;
	tds_ss_flags: number;
	tds_last_made_runnable_time: number;
	tds_state: number;
	tds_sched_flags: number;
	tds_base_priority: number;
	tds_sched_priority: number;
	tds_eqos: number;
	tds_rqos: number;
	tds_rqos_override: number;
	tds_io_tier: number;
}
declare var thread_delta_snapshot_v2: thread_delta_snapshot_v2;

interface thread_delta_snapshot_v3 {
	tds_thread_id: number;
	tds_voucher_identifier: number;
	tds_ss_flags: number;
	tds_last_made_runnable_time: number;
	tds_state: number;
	tds_sched_flags: number;
	tds_base_priority: number;
	tds_sched_priority: number;
	tds_eqos: number;
	tds_rqos: number;
	tds_rqos_override: number;
	tds_io_tier: number;
	tds_requested_policy: number;
	tds_effective_policy: number;
}
declare var thread_delta_snapshot_v3: thread_delta_snapshot_v3;

enum thread_group_flags {

	kThreadGroupEfficient = 1,

	kThreadGroupUIApp = 2
}


interface thread_group_snapshot {
	tgs_id: number;
	tgs_name: number;
}
declare var thread_group_snapshot: thread_group_snapshot;

interface thread_group_snapshot_v2 {
	tgs_id: number;
	tgs_name: number;
	tgs_flags: number;
}
declare var thread_group_snapshot_v2: thread_group_snapshot_v2;

enum thread_snapshot_flags {

	kHasDispatchSerial = 4,

	kStacksPCOnly = 8,

	kThreadDarwinBG = 16,

	kThreadIOPassive = 32,

	kThreadSuspended = 64,

	kThreadTruncatedBT = 128,

	kGlobalForcedIdle = 256,

	kThreadFaultedBT = 512,

	kThreadTriedFaultBT = 1024,

	kThreadOnCore = 2048,

	kThreadIdleWorker = 4096,

	kThreadMain = 8192
}


interface thread_snapshot_v2 {
	ths_thread_id: number;
	ths_wait_event: number;
	ths_continuation: number;
	ths_total_syscalls: number;
	ths_voucher_identifier: number;
	ths_dqserialnum: number;
	ths_user_time: number;
	ths_sys_time: number;
	ths_ss_flags: number;
	ths_last_run_time: number;
	ths_last_made_runnable_time: number;
	ths_state: number;
	ths_sched_flags: number;
	ths_base_priority: number;
	ths_sched_priority: number;
	ths_eqos: number;
	ths_rqos: number;
	ths_rqos_override: number;
	ths_io_tier: number;
}
declare var thread_snapshot_v2: thread_snapshot_v2;

interface thread_snapshot_v3 {
	ths_thread_id: number;
	ths_wait_event: number;
	ths_continuation: number;
	ths_total_syscalls: number;
	ths_voucher_identifier: number;
	ths_dqserialnum: number;
	ths_user_time: number;
	ths_sys_time: number;
	ths_ss_flags: number;
	ths_last_run_time: number;
	ths_last_made_runnable_time: number;
	ths_state: number;
	ths_sched_flags: number;
	ths_base_priority: number;
	ths_sched_priority: number;
	ths_eqos: number;
	ths_rqos: number;
	ths_rqos_override: number;
	ths_io_tier: number;
	ths_thread_t: number;
}
declare var thread_snapshot_v3: thread_snapshot_v3;

interface thread_snapshot_v4 {
	ths_thread_id: number;
	ths_wait_event: number;
	ths_continuation: number;
	ths_total_syscalls: number;
	ths_voucher_identifier: number;
	ths_dqserialnum: number;
	ths_user_time: number;
	ths_sys_time: number;
	ths_ss_flags: number;
	ths_last_run_time: number;
	ths_last_made_runnable_time: number;
	ths_state: number;
	ths_sched_flags: number;
	ths_base_priority: number;
	ths_sched_priority: number;
	ths_eqos: number;
	ths_rqos: number;
	ths_rqos_override: number;
	ths_io_tier: number;
	ths_thread_t: number;
	ths_requested_policy: number;
	ths_effective_policy: number;
}
declare var thread_snapshot_v4: thread_snapshot_v4;

interface thread_turnstileinfo_t {
	waiter: number;
	turnstile_context: number;
	turnstile_priority: number;
	number_of_hops: number;
	turnstile_flags: number;
}
declare var thread_turnstileinfo_t: thread_turnstileinfo_t;

interface thread_waitinfo_t {
	owner: number;
	waiter: number;
	context: number;
	wait_type: number;
}
declare var thread_waitinfo_t: thread_waitinfo_t;

interface user32_dyld_uuid_info {
	imageLoadAddress: number;
	imageUUID: number;
}
declare var user32_dyld_uuid_info: user32_dyld_uuid_info;

interface user64_dyld_uuid_info {
	imageLoadAddress: number;
	imageUUID: number;
}
declare var user64_dyld_uuid_info: user64_dyld_uuid_info;
