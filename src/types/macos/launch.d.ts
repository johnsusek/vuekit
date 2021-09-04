
declare function launch_activate_socket(name: string | any, fds: number, cnt: number): number;

enum launch_data_type_t {

	LAUNCH_DATA_DICTIONARY = 1,

	LAUNCH_DATA_ARRAY = 2,

	LAUNCH_DATA_FD = 3,

	LAUNCH_DATA_INTEGER = 4,

	LAUNCH_DATA_REAL = 5,

	LAUNCH_DATA_BOOL = 6,

	LAUNCH_DATA_STRING = 7,

	LAUNCH_DATA_OPAQUE = 8,

	LAUNCH_DATA_ERRNO = 9,

	LAUNCH_DATA_MACHPORT = 10
}

