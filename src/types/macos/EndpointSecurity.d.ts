
enum es_action_type_t {

	ES_ACTION_TYPE_AUTH = 0,

	ES_ACTION_TYPE_NOTIFY = 1
}


enum es_auth_result_t {

	ES_AUTH_RESULT_ALLOW = 0,

	ES_AUTH_RESULT_DENY = 1
}


declare function es_clear_cache(client: any): es_clear_cache_result_t;

enum es_clear_cache_result_t {

	ES_CLEAR_CACHE_RESULT_SUCCESS = 0,

	ES_CLEAR_CACHE_RESULT_ERR_INTERNAL = 1,

	ES_CLEAR_CACHE_RESULT_ERR_THROTTLE = 2
}


declare function es_delete_client(client: any): es_return_t;

enum es_destination_type_t {

	ES_DESTINATION_TYPE_EXISTING_FILE = 0,

	ES_DESTINATION_TYPE_NEW_PATH = 1
}


interface es_event_access_t {
	mode: number;
	target: es_file_t;
	reserved: number;
}
declare var es_event_access_t: es_event_access_t;

interface es_event_chdir_t {
	target: es_file_t;
	reserved: number;
}
declare var es_event_chdir_t: es_event_chdir_t;

interface es_event_chroot_t {
	target: es_file_t;
	reserved: number;
}
declare var es_event_chroot_t: es_event_chroot_t;

interface es_event_clone_t {
	source: es_file_t;
	target_dir: es_file_t;
	target_name: es_string_token_t;
	reserved: number;
}
declare var es_event_clone_t: es_event_clone_t;

interface es_event_close_t {
	modified: boolean;
	target: es_file_t;
	reserved: number;
}
declare var es_event_close_t: es_event_close_t;

interface es_event_deleteextattr_t {
	target: es_file_t;
	extattr: es_string_token_t;
	reserved: number;
}
declare var es_event_deleteextattr_t: es_event_deleteextattr_t;

interface es_event_dup_t {
	target: es_file_t;
	reserved: number;
}
declare var es_event_dup_t: es_event_dup_t;

interface es_event_exchangedata_t {
	file1: es_file_t;
	file2: es_file_t;
	reserved: number;
}
declare var es_event_exchangedata_t: es_event_exchangedata_t;

interface es_event_exit_t {
	stat: number;
	reserved: number;
}
declare var es_event_exit_t: es_event_exit_t;

interface es_event_fcntl_t {
	target: es_file_t;
	cmd: number;
	reserved: number;
}
declare var es_event_fcntl_t: es_event_fcntl_t;

interface es_event_file_provider_materialize_t {
	instigator: es_process_t;
	source: es_file_t;
	target: es_file_t;
	reserved: number;
}
declare var es_event_file_provider_materialize_t: es_event_file_provider_materialize_t;

interface es_event_file_provider_update_t {
	source: es_file_t;
	target_path: es_string_token_t;
	reserved: number;
}
declare var es_event_file_provider_update_t: es_event_file_provider_update_t;

interface es_event_fork_t {
	child: es_process_t;
	reserved: number;
}
declare var es_event_fork_t: es_event_fork_t;

interface es_event_fsgetpath_t {
	target: es_file_t;
	reserved: number;
}
declare var es_event_fsgetpath_t: es_event_fsgetpath_t;

interface es_event_get_task_t {
	target: es_process_t;
	reserved: number;
}
declare var es_event_get_task_t: es_event_get_task_t;

interface es_event_getattrlist_t {
	attrlist: attrlist;
	target: es_file_t;
	reserved: number;
}
declare var es_event_getattrlist_t: es_event_getattrlist_t;

interface es_event_getextattr_t {
	target: es_file_t;
	extattr: es_string_token_t;
	reserved: number;
}
declare var es_event_getextattr_t: es_event_getextattr_t;

interface es_event_id_t {
	reserved: number;
}
declare var es_event_id_t: es_event_id_t;

interface es_event_iokit_open_t {
	user_client_type: number;
	user_client_class: es_string_token_t;
	reserved: number;
}
declare var es_event_iokit_open_t: es_event_iokit_open_t;

interface es_event_kextload_t {
	identifier: es_string_token_t;
	reserved: number;
}
declare var es_event_kextload_t: es_event_kextload_t;

interface es_event_kextunload_t {
	identifier: es_string_token_t;
	reserved: number;
}
declare var es_event_kextunload_t: es_event_kextunload_t;

interface es_event_link_t {
	source: es_file_t;
	target_dir: es_file_t;
	target_filename: es_string_token_t;
	reserved: number;
}
declare var es_event_link_t: es_event_link_t;

interface es_event_listextattr_t {
	target: es_file_t;
	reserved: number;
}
declare var es_event_listextattr_t: es_event_listextattr_t;

interface es_event_lookup_t {
	source_dir: es_file_t;
	relative_target: es_string_token_t;
	reserved: number;
}
declare var es_event_lookup_t: es_event_lookup_t;

interface es_event_mmap_t {
	protection: number;
	max_protection: number;
	flags: number;
	file_pos: number;
	source: es_file_t;
	reserved: number;
}
declare var es_event_mmap_t: es_event_mmap_t;

interface es_event_mount_t {
	statfs: statfsStruct;
	reserved: number;
}
declare var es_event_mount_t: es_event_mount_t;

interface es_event_mprotect_t {
	protection: number;
	address: number;
	size: number;
	reserved: number;
}
declare var es_event_mprotect_t: es_event_mprotect_t;

interface es_event_open_t {
	fflag: number;
	file: es_file_t;
	reserved: number;
}
declare var es_event_open_t: es_event_open_t;

interface es_event_proc_check_t {
	target: es_process_t;
	type: es_proc_check_type_t;
	flavor: number;
	reserved: number;
}
declare var es_event_proc_check_t: es_event_proc_check_t;

interface es_event_pty_close_t {
	dev: number;
	reserved: number;
}
declare var es_event_pty_close_t: es_event_pty_close_t;

interface es_event_pty_grant_t {
	dev: number;
	reserved: number;
}
declare var es_event_pty_grant_t: es_event_pty_grant_t;

interface es_event_readdir_t {
	target: es_file_t;
	reserved: number;
}
declare var es_event_readdir_t: es_event_readdir_t;

interface es_event_readlink_t {
	source: es_file_t;
	reserved: number;
}
declare var es_event_readlink_t: es_event_readlink_t;

interface es_event_setattrlist_t {
	attrlist: attrlist;
	target: es_file_t;
	reserved: number;
}
declare var es_event_setattrlist_t: es_event_setattrlist_t;

interface es_event_setextattr_t {
	target: es_file_t;
	extattr: es_string_token_t;
	reserved: number;
}
declare var es_event_setextattr_t: es_event_setextattr_t;

interface es_event_setflags_t {
	flags: number;
	target: es_file_t;
	reserved: number;
}
declare var es_event_setflags_t: es_event_setflags_t;

interface es_event_setmode_t {
	mode: number;
	target: es_file_t;
	reserved: number;
}
declare var es_event_setmode_t: es_event_setmode_t;

interface es_event_setowner_t {
	uid: number;
	gid: number;
	target: es_file_t;
	reserved: number;
}
declare var es_event_setowner_t: es_event_setowner_t;

interface es_event_settime_t {
	reserved: number;
}
declare var es_event_settime_t: es_event_settime_t;

interface es_event_signal_t {
	sig: number;
	target: es_process_t;
	reserved: number;
}
declare var es_event_signal_t: es_event_signal_t;

interface es_event_stat_t {
	target: es_file_t;
	reserved: number;
}
declare var es_event_stat_t: es_event_stat_t;

interface es_event_truncate_t {
	target: es_file_t;
	reserved: number;
}
declare var es_event_truncate_t: es_event_truncate_t;

enum es_event_type_t {

	ES_EVENT_TYPE_AUTH_EXEC = 0,

	ES_EVENT_TYPE_AUTH_OPEN = 1,

	ES_EVENT_TYPE_AUTH_KEXTLOAD = 2,

	ES_EVENT_TYPE_AUTH_MMAP = 3,

	ES_EVENT_TYPE_AUTH_MPROTECT = 4,

	ES_EVENT_TYPE_AUTH_MOUNT = 5,

	ES_EVENT_TYPE_AUTH_RENAME = 6,

	ES_EVENT_TYPE_AUTH_SIGNAL = 7,

	ES_EVENT_TYPE_AUTH_UNLINK = 8,

	ES_EVENT_TYPE_NOTIFY_EXEC = 9,

	ES_EVENT_TYPE_NOTIFY_OPEN = 10,

	ES_EVENT_TYPE_NOTIFY_FORK = 11,

	ES_EVENT_TYPE_NOTIFY_CLOSE = 12,

	ES_EVENT_TYPE_NOTIFY_CREATE = 13,

	ES_EVENT_TYPE_NOTIFY_EXCHANGEDATA = 14,

	ES_EVENT_TYPE_NOTIFY_EXIT = 15,

	ES_EVENT_TYPE_NOTIFY_GET_TASK = 16,

	ES_EVENT_TYPE_NOTIFY_KEXTLOAD = 17,

	ES_EVENT_TYPE_NOTIFY_KEXTUNLOAD = 18,

	ES_EVENT_TYPE_NOTIFY_LINK = 19,

	ES_EVENT_TYPE_NOTIFY_MMAP = 20,

	ES_EVENT_TYPE_NOTIFY_MPROTECT = 21,

	ES_EVENT_TYPE_NOTIFY_MOUNT = 22,

	ES_EVENT_TYPE_NOTIFY_UNMOUNT = 23,

	ES_EVENT_TYPE_NOTIFY_IOKIT_OPEN = 24,

	ES_EVENT_TYPE_NOTIFY_RENAME = 25,

	ES_EVENT_TYPE_NOTIFY_SETATTRLIST = 26,

	ES_EVENT_TYPE_NOTIFY_SETEXTATTR = 27,

	ES_EVENT_TYPE_NOTIFY_SETFLAGS = 28,

	ES_EVENT_TYPE_NOTIFY_SETMODE = 29,

	ES_EVENT_TYPE_NOTIFY_SETOWNER = 30,

	ES_EVENT_TYPE_NOTIFY_SIGNAL = 31,

	ES_EVENT_TYPE_NOTIFY_UNLINK = 32,

	ES_EVENT_TYPE_NOTIFY_WRITE = 33,

	ES_EVENT_TYPE_AUTH_FILE_PROVIDER_MATERIALIZE = 34,

	ES_EVENT_TYPE_NOTIFY_FILE_PROVIDER_MATERIALIZE = 35,

	ES_EVENT_TYPE_AUTH_FILE_PROVIDER_UPDATE = 36,

	ES_EVENT_TYPE_NOTIFY_FILE_PROVIDER_UPDATE = 37,

	ES_EVENT_TYPE_AUTH_READLINK = 38,

	ES_EVENT_TYPE_NOTIFY_READLINK = 39,

	ES_EVENT_TYPE_AUTH_TRUNCATE = 40,

	ES_EVENT_TYPE_NOTIFY_TRUNCATE = 41,

	ES_EVENT_TYPE_AUTH_LINK = 42,

	ES_EVENT_TYPE_NOTIFY_LOOKUP = 43,

	ES_EVENT_TYPE_AUTH_CREATE = 44,

	ES_EVENT_TYPE_AUTH_SETATTRLIST = 45,

	ES_EVENT_TYPE_AUTH_SETEXTATTR = 46,

	ES_EVENT_TYPE_AUTH_SETFLAGS = 47,

	ES_EVENT_TYPE_AUTH_SETMODE = 48,

	ES_EVENT_TYPE_AUTH_SETOWNER = 49,

	ES_EVENT_TYPE_AUTH_CHDIR = 50,

	ES_EVENT_TYPE_NOTIFY_CHDIR = 51,

	ES_EVENT_TYPE_AUTH_GETATTRLIST = 52,

	ES_EVENT_TYPE_NOTIFY_GETATTRLIST = 53,

	ES_EVENT_TYPE_NOTIFY_STAT = 54,

	ES_EVENT_TYPE_NOTIFY_ACCESS = 55,

	ES_EVENT_TYPE_AUTH_CHROOT = 56,

	ES_EVENT_TYPE_NOTIFY_CHROOT = 57,

	ES_EVENT_TYPE_AUTH_UTIMES = 58,

	ES_EVENT_TYPE_NOTIFY_UTIMES = 59,

	ES_EVENT_TYPE_AUTH_CLONE = 60,

	ES_EVENT_TYPE_NOTIFY_CLONE = 61,

	ES_EVENT_TYPE_NOTIFY_FCNTL = 62,

	ES_EVENT_TYPE_AUTH_GETEXTATTR = 63,

	ES_EVENT_TYPE_NOTIFY_GETEXTATTR = 64,

	ES_EVENT_TYPE_AUTH_LISTEXTATTR = 65,

	ES_EVENT_TYPE_NOTIFY_LISTEXTATTR = 66,

	ES_EVENT_TYPE_AUTH_READDIR = 67,

	ES_EVENT_TYPE_NOTIFY_READDIR = 68,

	ES_EVENT_TYPE_AUTH_DELETEEXTATTR = 69,

	ES_EVENT_TYPE_NOTIFY_DELETEEXTATTR = 70,

	ES_EVENT_TYPE_AUTH_FSGETPATH = 71,

	ES_EVENT_TYPE_NOTIFY_FSGETPATH = 72,

	ES_EVENT_TYPE_NOTIFY_DUP = 73,

	ES_EVENT_TYPE_AUTH_SETTIME = 74,

	ES_EVENT_TYPE_NOTIFY_SETTIME = 75,

	ES_EVENT_TYPE_NOTIFY_UIPC_BIND = 76,

	ES_EVENT_TYPE_AUTH_UIPC_BIND = 77,

	ES_EVENT_TYPE_NOTIFY_UIPC_CONNECT = 78,

	ES_EVENT_TYPE_AUTH_UIPC_CONNECT = 79,

	ES_EVENT_TYPE_AUTH_EXCHANGEDATA = 80,

	ES_EVENT_TYPE_AUTH_SETACL = 81,

	ES_EVENT_TYPE_NOTIFY_SETACL = 82,

	ES_EVENT_TYPE_NOTIFY_PTY_GRANT = 83,

	ES_EVENT_TYPE_NOTIFY_PTY_CLOSE = 84,

	ES_EVENT_TYPE_AUTH_PROC_CHECK = 85,

	ES_EVENT_TYPE_NOTIFY_PROC_CHECK = 86,

	ES_EVENT_TYPE_AUTH_GET_TASK = 87,

	ES_EVENT_TYPE_LAST = 88
}


interface es_event_uipc_bind_t {
	dir: es_file_t;
	filename: es_string_token_t;
	mode: number;
	reserved: number;
}
declare var es_event_uipc_bind_t: es_event_uipc_bind_t;

interface es_event_uipc_connect_t {
	file: es_file_t;
	domain: number;
	type: number;
	protocol: number;
	reserved: number;
}
declare var es_event_uipc_connect_t: es_event_uipc_connect_t;

interface es_event_unlink_t {
	target: es_file_t;
	parent_dir: es_file_t;
	reserved: number;
}
declare var es_event_unlink_t: es_event_unlink_t;

interface es_event_unmount_t {
	statfs: statfsStruct;
	reserved: number;
}
declare var es_event_unmount_t: es_event_unmount_t;

interface es_event_utimes_t {
	target: es_file_t;
	atime: timespec;
	mtime: timespec;
	reserved: number;
}
declare var es_event_utimes_t: es_event_utimes_t;

interface es_event_write_t {
	target: es_file_t;
	reserved: number;
}
declare var es_event_write_t: es_event_write_t;

interface es_file_t {
	path: es_string_token_t;
	path_truncated: boolean;
	stat: stat64;
}
declare var es_file_t: es_file_t;

declare function es_mute_path_literal(client: any, path_literal: string | any): es_return_t;

declare function es_mute_path_prefix(client: any, path_prefix: string | any): es_return_t;

declare function es_mute_process(client: any, audit_token: audit_token_t): es_return_t;

declare function es_muted_processes(client: any, count: number, audit_tokens: audit_token_t): es_return_t;

enum es_new_client_result_t {

	ES_NEW_CLIENT_RESULT_SUCCESS = 0,

	ES_NEW_CLIENT_RESULT_ERR_INVALID_ARGUMENT = 1,

	ES_NEW_CLIENT_RESULT_ERR_INTERNAL = 2,

	ES_NEW_CLIENT_RESULT_ERR_NOT_ENTITLED = 3,

	ES_NEW_CLIENT_RESULT_ERR_NOT_PERMITTED = 4,

	ES_NEW_CLIENT_RESULT_ERR_NOT_PRIVILEGED = 5,

	ES_NEW_CLIENT_RESULT_ERR_TOO_MANY_CLIENTS = 6
}


enum es_proc_check_type_t {

	ES_PROC_CHECK_TYPE_LISTPIDS = 1,

	ES_PROC_CHECK_TYPE_PIDINFO = 2,

	ES_PROC_CHECK_TYPE_PIDFDINFO = 3,

	ES_PROC_CHECK_TYPE_KERNMSGBUF = 4,

	ES_PROC_CHECK_TYPE_SETCONTROL = 5,

	ES_PROC_CHECK_TYPE_PIDFILEPORTINFO = 6,

	ES_PROC_CHECK_TYPE_TERMINATE = 7,

	ES_PROC_CHECK_TYPE_DIRTYCONTROL = 8,

	ES_PROC_CHECK_TYPE_PIDRUSAGE = 9,

	ES_PROC_CHECK_TYPE_UDATA_INFO = 14
}


interface es_process_t {
	audit_token: audit_token_t;
	ppid: number;
	original_ppid: number;
	group_id: number;
	session_id: number;
	codesigning_flags: number;
	is_platform_binary: boolean;
	is_es_client: boolean;
	cdhash: number;
	signing_id: es_string_token_t;
	team_id: es_string_token_t;
	executable: es_file_t;
	tty: es_file_t;
}
declare var es_process_t: es_process_t;

enum es_respond_result_t {

	ES_RESPOND_RESULT_SUCCESS = 0,

	ES_RESPOND_RESULT_ERR_INVALID_ARGUMENT = 1,

	ES_RESPOND_RESULT_ERR_INTERNAL = 2,

	ES_RESPOND_RESULT_NOT_FOUND = 3,

	ES_RESPOND_RESULT_ERR_DUPLICATE_RESPONSE = 4,

	ES_RESPOND_RESULT_ERR_EVENT_TYPE = 5
}


enum es_result_type_t {

	ES_RESULT_TYPE_AUTH = 0,

	ES_RESULT_TYPE_FLAGS = 1
}


enum es_return_t {

	ES_RETURN_SUCCESS = 0,

	ES_RETURN_ERROR = 1
}


enum es_set_or_clear_t {

	ES_SET = 0,

	ES_CLEAR = 1
}


interface es_string_token_t {
	length: number;
	data: string;
}
declare var es_string_token_t: es_string_token_t;

declare function es_subscribe(client: any, events: es_event_type_t, event_count: number): es_return_t;

declare function es_subscriptions(client: any, count: number, subscriptions: es_event_type_t): es_return_t;

interface es_token_t {
	size: number;
	data: string;
}
declare var es_token_t: es_token_t;

declare function es_unmute_all_paths(client: any): es_return_t;

declare function es_unmute_process(client: any, audit_token: audit_token_t): es_return_t;

declare function es_unsubscribe(client: any, events: es_event_type_t, event_count: number): es_return_t;

declare function es_unsubscribe_all(client: any): es_return_t;
