
declare function adler32(adler: number, buf: string | any, len: number): number;

declare function adler32_combine(p1: number, p2: number, p3: number): number;

declare function adler32_z(adler: number, buf: string | any, len: number): number;

declare function compress(dest: string | any, destLen: number, source: string | any, sourceLen: number): number;

declare function compress2(dest: string | any, destLen: number, source: string | any, sourceLen: number, level: number): number;

declare function compressBound(sourceLen: number): number;

declare function crc32_combine(p1: number, p2: number, p3: number): number;

declare function crc32_z(adler: number, buf: string | any, len: number): number;

declare function deflate(strm: z_stream, flush: number): number;

declare function deflateBound(strm: z_stream, sourceLen: number): number;

declare function deflateCopy(dest: z_stream, source: z_stream): number;

declare function deflateEnd(strm: z_stream): number;

declare function deflateGetDictionary(strm: z_stream, dictionary: string | any, dictLength: number): number;

declare function deflateInit2_(strm: z_stream, level: number, method: number, windowBits: number, memLevel: number, strategy: number, version: string | any, stream_size: number): number;

declare function deflateInit_(strm: z_stream, level: number, version: string | any, stream_size: number): number;

declare function deflateParams(strm: z_stream, level: number, strategy: number): number;

declare function deflatePending(strm: z_stream, pending: number, bits: number): number;

declare function deflatePrime(strm: z_stream, bits: number, value: number): number;

declare function deflateReset(strm: z_stream): number;

declare function deflateResetKeep(p1: z_stream): number;

declare function deflateSetDictionary(strm: z_stream, dictionary: string | any, dictLength: number): number;

declare function deflateSetHeader(strm: z_stream, head: gz_header): number;

declare function deflateTune(strm: z_stream, good_length: number, max_lazy: number, nice_length: number, max_chain: number): number;

declare function get_crc_table(): number;

interface gzFile_s {
	have: number;
	next: string;
	pos: number;
}
declare var gzFile_s: gzFile_s;

interface gz_header {
	text: number;
	time: number;
	xflags: number;
	os: number;
	extra: string;
	extra_len: number;
	extra_max: number;
	name: string;
	name_max: number;
	comment: string;
	comm_max: number;
	hcrc: number;
	done: number;
}
declare var gz_header: gz_header;

declare function gzbuffer(file: gzFile_s, size: number): number;

declare function gzclearerr(file: gzFile_s): void;

declare function gzclose(file: gzFile_s): number;

declare function gzclose_r(file: gzFile_s): number;

declare function gzclose_w(file: gzFile_s): number;

declare function gzdirect(file: gzFile_s): number;

declare function gzdopen(fd: number, mode: string | any): gzFile_s;

declare function gzeof(file: gzFile_s): number;

declare function gzerror(file: gzFile_s, errnum: number): string;

declare function gzflush(file: gzFile_s, flush: number): number;

declare function gzfread(buf: any, size: number, nitems: number, file: gzFile_s): number;

declare function gzfwrite(buf: any, size: number, nitems: number, file: gzFile_s): number;

declare function gzgetc(file: gzFile_s): number;

declare function gzgetc_(file: gzFile_s): number;

declare function gzgets(file: gzFile_s, buf: string | any, len: number): string;

declare function gzoffset(p1: gzFile_s): number;

declare function gzopen(p1: string | any, p2: string | any): gzFile_s;

declare function gzputc(file: gzFile_s, c: number): number;

declare function gzputs(file: gzFile_s, s: string | any): number;

declare function gzread(file: gzFile_s, buf: any, len: number): number;

declare function gzrewind(file: gzFile_s): number;

declare function gzseek(p1: gzFile_s, p2: number, p3: number): number;

declare function gzsetparams(file: gzFile_s, level: number, strategy: number): number;

declare function gztell(p1: gzFile_s): number;

declare function gzungetc(c: number, file: gzFile_s): number;

declare function gzwrite(file: gzFile_s, buf: any, len: number): number;

declare function inflate(strm: z_stream, flush: number): number;

declare function inflateBack(strm: z_stream, in_: (p1: any, p2: string) => number, in_desc: any, out: (p1: any, p2: string, p3: number) => number, out_desc: any): number;

declare function inflateBackEnd(strm: z_stream): number;

declare function inflateBackInit_(strm: z_stream, windowBits: number, window: string | any, version: string | any, stream_size: number): number;

declare function inflateCodesUsed(p1: z_stream): number;

declare function inflateCopy(dest: z_stream, source: z_stream): number;

declare function inflateEnd(strm: z_stream): number;

declare function inflateGetDictionary(strm: z_stream, dictionary: string | any, dictLength: number): number;

declare function inflateGetHeader(strm: z_stream, head: gz_header): number;

declare function inflateInit2_(strm: z_stream, windowBits: number, version: string | any, stream_size: number): number;

declare function inflateInit_(strm: z_stream, version: string | any, stream_size: number): number;

declare function inflateMark(strm: z_stream): number;

declare function inflatePrime(strm: z_stream, bits: number, value: number): number;

declare function inflateReset(strm: z_stream): number;

declare function inflateReset2(strm: z_stream, windowBits: number): number;

declare function inflateResetKeep(p1: z_stream): number;

declare function inflateSetDictionary(strm: z_stream, dictionary: string | any, dictLength: number): number;

declare function inflateSync(strm: z_stream): number;

declare function inflateSyncPoint(p1: z_stream): number;

declare function inflateUndermine(p1: z_stream, p2: number): number;

declare function inflateValidate(p1: z_stream, p2: number): number;

declare function uncompress(dest: string | any, destLen: number, source: string | any, sourceLen: number): number;

declare function uncompress2(dest: string | any, destLen: number, source: string | any, sourceLen: number): number;

declare function zError(p1: number): string;

interface z_stream {
	next_in: string;
	avail_in: number;
	total_in: number;
	next_out: string;
	avail_out: number;
	total_out: number;
	msg: string;
	state: any;
	zalloc: (p1: any, p2: number, p3: number) => any;
	zfree: (p1: any, p2: any) => void;
	opaque: any;
	data_type: number;
	adler: number;
	reserved: number;
}
declare var z_stream: z_stream;

declare function zlibCompileFlags(): number;

declare function zlibVersion(): string;
