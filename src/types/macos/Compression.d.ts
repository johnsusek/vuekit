
enum compression_algorithm {

	COMPRESSION_LZ4 = 256,

	COMPRESSION_ZLIB = 517,

	COMPRESSION_LZMA = 774,

	COMPRESSION_LZ4_RAW = 257,

	COMPRESSION_LZFSE = 2049
}


declare function compression_decode_buffer(dst_buffer: string | any, dst_size: number, src_buffer: string | any, src_size: number, scratch_buffer: any, algorithm: compression_algorithm): number;

declare function compression_decode_scratch_buffer_size(algorithm: compression_algorithm): number;

declare function compression_encode_buffer(dst_buffer: string | any, dst_size: number, src_buffer: string | any, src_size: number, scratch_buffer: any, algorithm: compression_algorithm): number;

declare function compression_encode_scratch_buffer_size(algorithm: compression_algorithm): number;

enum compression_status {

	COMPRESSION_STATUS_OK = 0,

	COMPRESSION_STATUS_ERROR = -1,

	COMPRESSION_STATUS_END = 1
}


interface compression_stream {
	dst_ptr: string;
	dst_size: number;
	src_ptr: string;
	src_size: number;
	state: any;
}
declare var compression_stream: compression_stream;

declare function compression_stream_destroy(stream: compression_stream): compression_status;

enum compression_stream_flags {

	COMPRESSION_STREAM_FINALIZE = 1
}


declare function compression_stream_init(stream: compression_stream, operation: compression_stream_operation, algorithm: compression_algorithm): compression_status;

enum compression_stream_operation {

	COMPRESSION_STREAM_ENCODE = 0,

	COMPRESSION_STREAM_DECODE = 1
}


declare function compression_stream_process(stream: compression_stream, flags: number): compression_status;
