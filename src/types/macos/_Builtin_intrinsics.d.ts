
interface __loadu_i16 {
	__v: number;
}
declare var __loadu_i16: __loadu_i16;

interface __loadu_i32 {
	__v: number;
}
declare var __loadu_i32: __loadu_i32;

interface __loadu_i64 {
	__v: number;
}
declare var __loadu_i64: __loadu_i64;

interface __loadu_si16 {
	__v: number;
}
declare var __loadu_si16: __loadu_si16;

interface __loadu_si32 {
	__v: number;
}
declare var __loadu_si32: __loadu_si32;

interface __loadu_si64 {
	__v: number;
}
declare var __loadu_si64: __loadu_si64;

interface __mm_load1_pd_struct {
	__u: number;
}
declare var __mm_load1_pd_struct: __mm_load1_pd_struct;

interface __mm_load1_ps_struct {
	__u: number;
}
declare var __mm_load1_ps_struct: __mm_load1_ps_struct;

interface __mm_load_sd_struct {
	__u: number;
}
declare var __mm_load_sd_struct: __mm_load_sd_struct;

interface __mm_load_ss_struct {
	__u: number;
}
declare var __mm_load_ss_struct: __mm_load_ss_struct;

interface __mm_loadh_pd_struct {
	__u: number;
}
declare var __mm_loadh_pd_struct: __mm_loadh_pd_struct;

interface __mm_loadl_epi64_struct {
	__u: number;
}
declare var __mm_loadl_epi64_struct: __mm_loadl_epi64_struct;

interface __mm_loadl_pd_struct {
	__u: number;
}
declare var __mm_loadl_pd_struct: __mm_loadl_pd_struct;

interface __mm_store_sd_struct {
	__u: number;
}
declare var __mm_store_sd_struct: __mm_store_sd_struct;

interface __mm_store_ss_struct {
	__u: number;
}
declare var __mm_store_ss_struct: __mm_store_ss_struct;

interface __mm_storeh_pd_struct {
	__u: number;
}
declare var __mm_storeh_pd_struct: __mm_storeh_pd_struct;

interface __mm_storeh_pd_structStruct {
	__u: number;
}
declare var __mm_storeh_pd_structStruct: __mm_storeh_pd_structStruct;

interface __mm_storel_epi64_struct {
	__u: number;
}
declare var __mm_storel_epi64_struct: __mm_storel_epi64_struct;

interface __storeu_i16 {
	__v: number;
}
declare var __storeu_i16: __storeu_i16;

interface __storeu_i32 {
	__v: number;
}
declare var __storeu_i32: __storeu_i32;

interface __storeu_i64 {
	__v: number;
}
declare var __storeu_i64: __storeu_i64;

interface __storeu_si16 {
	__v: number;
}
declare var __storeu_si16: __storeu_si16;

interface __storeu_si32 {
	__v: number;
}
declare var __storeu_si32: __storeu_si32;

interface __storeu_si64 {
	__v: number;
}
declare var __storeu_si64: __storeu_si64;

declare function _mm_clflush(__p: any): void;

declare function _mm_getcsr(): number;

declare function _mm_lfence(): void;

declare function _mm_mfence(): void;

declare function _mm_pause(): void;

declare function _mm_setcsr(__i: number): void;

declare function _mm_sfence(): void;

declare function posix_memalign(__memptr: any, __alignment: number, __size: number): number;
