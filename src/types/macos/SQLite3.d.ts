
interface Fts5ExtensionApi {
	iVersion: number;
	xUserData: (p1: any) => any;
	xColumnCount: (p1: any) => number;
	xRowCount: (p1: any, p2: number) => number;
	xColumnTotalSize: (p1: any, p2: number, p3: number) => number;
	xTokenize: (p1: any, p2: string, p3: number, p4: any, p5: (p1: any, p2: number, p3: string, p4: number, p5: number, p6: number) => number) => number;
	xPhraseCount: (p1: any) => number;
	xPhraseSize: (p1: any, p2: number) => number;
	xInstCount: (p1: any, p2: number) => number;
	xInst: (p1: any, p2: number, p3: number, p4: number, p5: number) => number;
	xRowid: (p1: any) => number;
	xColumnText: (p1: any, p2: number, p3: string, p4: number) => number;
	xColumnSize: (p1: any, p2: number, p3: number) => number;
	xQueryPhrase: (p1: any, p2: number, p3: any, p4: (p1: Fts5ExtensionApi, p2: any, p3: any) => number) => number;
	xSetAuxdata: (p1: any, p2: any, p3: (p1: any) => void) => number;
	xGetAuxdata: (p1: any, p2: number) => any;
	xPhraseFirst: (p1: any, p2: number, p3: Fts5PhraseIter, p4: number, p5: number) => number;
	xPhraseNext: (p1: any, p2: Fts5PhraseIter, p3: number, p4: number) => void;
	xPhraseFirstColumn: (p1: any, p2: number, p3: Fts5PhraseIter, p4: number) => number;
	xPhraseNextColumn: (p1: any, p2: Fts5PhraseIter, p3: number) => void;
}
declare var Fts5ExtensionApi: Fts5ExtensionApi;

interface Fts5PhraseIter {
	a: string;
	b: string;
}
declare var Fts5PhraseIter: Fts5PhraseIter;

interface fts5_api {
	iVersion: number;
	xCreateTokenizer: (p1: fts5_api, p2: string, p3: any, p4: fts5_tokenizer, p5: (p1: any) => void) => number;
	xFindTokenizer: (p1: fts5_api, p2: string, p3: any, p4: fts5_tokenizer) => number;
	xCreateFunction: (p1: fts5_api, p2: string, p3: any, p4: (p1: Fts5ExtensionApi, p2: any, p3: any, p4: number, p5: any) => void, p5: (p1: any) => void) => number;
}
declare var fts5_api: fts5_api;

interface fts5_tokenizer {
	xCreate: (p1: any, p2: string, p3: number, p4: any) => number;
	xDelete: (p1: any) => void;
	xTokenize: (p1: any, p2: any, p3: number, p4: string, p5: number, p6: (p1: any, p2: number, p3: string, p4: number, p5: number, p6: number) => number) => number;
}
declare var fts5_tokenizer: fts5_tokenizer;

declare function sqlite3_aggregate_context(p1: any, nBytes: number): any;

declare function sqlite3_backup_finish(p: any): number;

declare function sqlite3_backup_init(pDest: any, zDestName: string | any, pSource: any, zSourceName: string | any): any;

declare function sqlite3_backup_pagecount(p: any): number;

declare function sqlite3_backup_remaining(p: any): number;

declare function sqlite3_backup_step(p: any, nPage: number): number;

declare function sqlite3_bind_blob(p1: any, p2: number, p3: any, n: number, p5: (p1: any) => void): number;

declare function sqlite3_bind_blob64(p1: any, p2: number, p3: any, p4: number, p5: (p1: any) => void): number;

declare function sqlite3_bind_double(p1: any, p2: number, p3: number): number;

declare function sqlite3_bind_int(p1: any, p2: number, p3: number): number;

declare function sqlite3_bind_int64(p1: any, p2: number, p3: number): number;

declare function sqlite3_bind_null(p1: any, p2: number): number;

declare function sqlite3_bind_parameter_count(p1: any): number;

declare function sqlite3_bind_parameter_index(p1: any, zName: string | any): number;

declare function sqlite3_bind_parameter_name(p1: any, p2: number): string;

declare function sqlite3_bind_pointer(p1: any, p2: number, p3: any, p4: string | any, p5: (p1: any) => void): number;

declare function sqlite3_bind_text(p1: any, p2: number, p3: string | any, p4: number, p5: (p1: any) => void): number;

declare function sqlite3_bind_text16(p1: any, p2: number, p3: any, p4: number, p5: (p1: any) => void): number;

declare function sqlite3_bind_text64(p1: any, p2: number, p3: string | any, p4: number, p5: (p1: any) => void, encoding: number): number;

declare function sqlite3_bind_value(p1: any, p2: number, p3: any): number;

declare function sqlite3_bind_zeroblob(p1: any, p2: number, n: number): number;

declare function sqlite3_bind_zeroblob64(p1: any, p2: number, p3: number): number;

declare function sqlite3_blob_bytes(p1: any): number;

declare function sqlite3_blob_close(p1: any): number;

declare function sqlite3_blob_open(p1: any, zDb: string | any, zTable: string | any, zColumn: string | any, iRow: number, flags: number, ppBlob: any): number;

declare function sqlite3_blob_read(p1: any, Z: any, N: number, iOffset: number): number;

declare function sqlite3_blob_reopen(p1: any, p2: number): number;

declare function sqlite3_blob_write(p1: any, z: any, n: number, iOffset: number): number;

declare function sqlite3_busy_handler(p1: any, p2: (p1: any, p2: number) => number, p3: any): number;

declare function sqlite3_busy_timeout(p1: any, ms: number): number;

declare function sqlite3_changes(p1: any): number;

declare function sqlite3_clear_bindings(p1: any): number;

declare function sqlite3_close(p1: any): number;

declare function sqlite3_close_v2(p1: any): number;

declare function sqlite3_collation_needed(p1: any, p2: any, p3: (p1: any, p2: any, p3: number, p4: string) => void): number;

declare function sqlite3_collation_needed16(p1: any, p2: any, p3: (p1: any, p2: any, p3: number, p4: any) => void): number;

declare function sqlite3_column_blob(p1: any, iCol: number): any;

declare function sqlite3_column_bytes(p1: any, iCol: number): number;

declare function sqlite3_column_bytes16(p1: any, iCol: number): number;

declare function sqlite3_column_count(pStmt: any): number;

declare function sqlite3_column_database_name(p1: any, p2: number): string;

declare function sqlite3_column_database_name16(p1: any, p2: number): any;

declare function sqlite3_column_decltype(p1: any, p2: number): string;

declare function sqlite3_column_decltype16(p1: any, p2: number): any;

declare function sqlite3_column_double(p1: any, iCol: number): number;

declare function sqlite3_column_int(p1: any, iCol: number): number;

declare function sqlite3_column_int64(p1: any, iCol: number): number;

declare function sqlite3_column_name(p1: any, N: number): string;

declare function sqlite3_column_name16(p1: any, N: number): any;

declare function sqlite3_column_origin_name(p1: any, p2: number): string;

declare function sqlite3_column_origin_name16(p1: any, p2: number): any;

declare function sqlite3_column_table_name(p1: any, p2: number): string;

declare function sqlite3_column_table_name16(p1: any, p2: number): any;

declare function sqlite3_column_text(p1: any, iCol: number): string;

declare function sqlite3_column_text16(p1: any, iCol: number): any;

declare function sqlite3_column_type(p1: any, iCol: number): number;

declare function sqlite3_column_value(p1: any, iCol: number): any;

declare function sqlite3_commit_hook(p1: any, p2: (p1: any) => number, p3: any): any;

declare function sqlite3_compileoption_get(N: number): string;

declare function sqlite3_compileoption_used(zOptName: string | any): number;

declare function sqlite3_complete(sql: string | any): number;

declare function sqlite3_complete16(sql: any): number;

declare function sqlite3_context_db_handle(p1: any): any;

declare function sqlite3_create_collation(p1: any, zName: string | any, eTextRep: number, pArg: any, xCompare: (p1: any, p2: number, p3: any, p4: number, p5: any) => number): number;

declare function sqlite3_create_collation16(p1: any, zName: any, eTextRep: number, pArg: any, xCompare: (p1: any, p2: number, p3: any, p4: number, p5: any) => number): number;

declare function sqlite3_create_collation_v2(p1: any, zName: string | any, eTextRep: number, pArg: any, xCompare: (p1: any, p2: number, p3: any, p4: number, p5: any) => number, xDestroy: (p1: any) => void): number;

declare function sqlite3_create_function(db: any, zFunctionName: string | any, nArg: number, eTextRep: number, pApp: any, xFunc: (p1: any, p2: number, p3: any) => void, xStep: (p1: any, p2: number, p3: any) => void, xFinal: (p1: any) => void): number;

declare function sqlite3_create_function16(db: any, zFunctionName: any, nArg: number, eTextRep: number, pApp: any, xFunc: (p1: any, p2: number, p3: any) => void, xStep: (p1: any, p2: number, p3: any) => void, xFinal: (p1: any) => void): number;

declare function sqlite3_create_function_v2(db: any, zFunctionName: string | any, nArg: number, eTextRep: number, pApp: any, xFunc: (p1: any, p2: number, p3: any) => void, xStep: (p1: any, p2: number, p3: any) => void, xFinal: (p1: any) => void, xDestroy: (p1: any) => void): number;

declare function sqlite3_create_module(db: any, zName: string | any, p: sqlite3_module, pClientData: any): number;

declare function sqlite3_create_module_v2(db: any, zName: string | any, p: sqlite3_module, pClientData: any, xDestroy: (p1: any) => void): number;

declare function sqlite3_create_window_function(db: any, zFunctionName: string | any, nArg: number, eTextRep: number, pApp: any, xStep: (p1: any, p2: number, p3: any) => void, xFinal: (p1: any) => void, xValue: (p1: any) => void, xInverse: (p1: any, p2: number, p3: any) => void, xDestroy: (p1: any) => void): number;

declare function sqlite3_data_count(pStmt: any): number;

declare var sqlite3_data_directory: string;

declare function sqlite3_db_cacheflush(p1: any): number;

declare function sqlite3_db_filename(db: any, zDbName: string | any): string;

declare function sqlite3_db_handle(p1: any): any;

declare function sqlite3_db_mutex(p1: any): any;

declare function sqlite3_db_readonly(db: any, zDbName: string | any): number;

declare function sqlite3_db_release_memory(p1: any): number;

declare function sqlite3_db_status(p1: any, op: number, pCur: number, pHiwtr: number, resetFlg: number): number;

declare function sqlite3_declare_vtab(p1: any, zSQL: string | any): number;

declare function sqlite3_deserialize(db: any, zSchema: string | any, pData: string | any, szDb: number, szBuf: number, mFlags: number): number;

declare function sqlite3_errcode(db: any): number;

declare function sqlite3_errmsg(p1: any): string;

declare function sqlite3_errmsg16(p1: any): any;

declare function sqlite3_errstr(p1: number): string;

declare function sqlite3_exec(p1: any, sql: string | any, callback: (p1: any, p2: number, p3: string, p4: string) => number, p4: any, errmsg: string): number;

declare function sqlite3_expanded_sql(pStmt: any): string;

declare function sqlite3_extended_errcode(db: any): number;

declare function sqlite3_extended_result_codes(p1: any, onoff: number): number;

interface sqlite3_file {
	pMethods: sqlite3_io_methods;
}
declare var sqlite3_file: sqlite3_file;

declare function sqlite3_file_control(p1: any, zDbName: string | any, op: number, p4: any): number;

declare function sqlite3_finalize(pStmt: any): number;

declare function sqlite3_free(p1: any): void;

declare function sqlite3_free_table(result: string): void;

declare function sqlite3_get_autocommit(p1: any): number;

declare function sqlite3_get_auxdata(p1: any, N: number): any;

declare function sqlite3_get_table(db: any, zSql: string | any, pazResult: string, pnRow: number, pnColumn: number, pzErrmsg: string): number;

interface sqlite3_index_constraint {
	iColumn: number;
	op: number;
	usable: number;
	iTermOffset: number;
}
declare var sqlite3_index_constraint: sqlite3_index_constraint;

interface sqlite3_index_constraint_usage {
	argvIndex: number;
	omit: number;
}
declare var sqlite3_index_constraint_usage: sqlite3_index_constraint_usage;

interface sqlite3_index_info {
	nConstraint: number;
	aConstraint: sqlite3_index_constraint;
	nOrderBy: number;
	aOrderBy: sqlite3_index_orderby;
	aConstraintUsage: sqlite3_index_constraint_usage;
	idxNum: number;
	idxStr: string;
	needToFreeIdxStr: number;
	orderByConsumed: number;
	estimatedCost: number;
	estimatedRows: number;
	idxFlags: number;
	colUsed: number;
}
declare var sqlite3_index_info: sqlite3_index_info;

interface sqlite3_index_orderby {
	iColumn: number;
	desc: number;
}
declare var sqlite3_index_orderby: sqlite3_index_orderby;

declare function sqlite3_initialize(): number;

declare function sqlite3_interrupt(p1: any): void;

interface sqlite3_io_methods {
	iVersion: number;
	xClose: (p1: sqlite3_file) => number;
	xRead: (p1: sqlite3_file, p2: any, p3: number, p4: number) => number;
	xWrite: (p1: sqlite3_file, p2: any, p3: number, p4: number) => number;
	xTruncate: (p1: sqlite3_file, p2: number) => number;
	xSync: (p1: sqlite3_file, p2: number) => number;
	xFileSize: (p1: sqlite3_file, p2: number) => number;
	xLock: (p1: sqlite3_file, p2: number) => number;
	xUnlock: (p1: sqlite3_file, p2: number) => number;
	xCheckReservedLock: (p1: sqlite3_file, p2: number) => number;
	xFileControl: (p1: sqlite3_file, p2: number, p3: any) => number;
	xSectorSize: (p1: sqlite3_file) => number;
	xDeviceCharacteristics: (p1: sqlite3_file) => number;
	xShmMap: (p1: sqlite3_file, p2: number, p3: number, p4: number, p5: any) => number;
	xShmLock: (p1: sqlite3_file, p2: number, p3: number, p4: number) => number;
	xShmBarrier: (p1: sqlite3_file) => void;
	xShmUnmap: (p1: sqlite3_file, p2: number) => number;
	xFetch: (p1: sqlite3_file, p2: number, p3: number, p4: any) => number;
	xUnfetch: (p1: sqlite3_file, p2: number, p3: any) => number;
}
declare var sqlite3_io_methods: sqlite3_io_methods;

declare function sqlite3_keyword_check(p1: string | any, p2: number): number;

declare function sqlite3_keyword_count(): number;

declare function sqlite3_keyword_name(p1: number, p2: string, p3: number): number;

declare function sqlite3_last_insert_rowid(p1: any): number;

declare function sqlite3_libversion(): string;

declare function sqlite3_libversion_number(): number;

declare function sqlite3_limit(p1: any, id: number, newVal: number): number;

declare function sqlite3_malloc(p1: number): any;

declare function sqlite3_malloc64(p1: number): any;

interface sqlite3_mem_methods {
	xMalloc: (p1: number) => any;
	xFree: (p1: any) => void;
	xRealloc: (p1: any, p2: number) => any;
	xSize: (p1: any) => number;
	xRoundup: (p1: number) => number;
	xInit: (p1: any) => number;
	xShutdown: (p1: any) => void;
	pAppData: any;
}
declare var sqlite3_mem_methods: sqlite3_mem_methods;

declare function sqlite3_memory_highwater(resetFlag: number): number;

declare function sqlite3_memory_used(): number;

interface sqlite3_module {
	iVersion: number;
	xCreate: (p1: any, p2: any, p3: number, p4: string, p5: sqlite3_vtab, p6: string) => number;
	xConnect: (p1: any, p2: any, p3: number, p4: string, p5: sqlite3_vtab, p6: string) => number;
	xBestIndex: (p1: sqlite3_vtab, p2: sqlite3_index_info) => number;
	xDisconnect: (p1: sqlite3_vtab) => number;
	xDestroy: (p1: sqlite3_vtab) => number;
	xOpen: (p1: sqlite3_vtab, p2: sqlite3_vtab_cursor) => number;
	xClose: (p1: sqlite3_vtab_cursor) => number;
	xFilter: (p1: sqlite3_vtab_cursor, p2: number, p3: string, p4: number, p5: any) => number;
	xNext: (p1: sqlite3_vtab_cursor) => number;
	xEof: (p1: sqlite3_vtab_cursor) => number;
	xColumn: (p1: sqlite3_vtab_cursor, p2: any, p3: number) => number;
	xRowid: (p1: sqlite3_vtab_cursor, p2: number) => number;
	xUpdate: (p1: sqlite3_vtab, p2: number, p3: any, p4: number) => number;
	xBegin: (p1: sqlite3_vtab) => number;
	xSync: (p1: sqlite3_vtab) => number;
	xCommit: (p1: sqlite3_vtab) => number;
	xRollback: (p1: sqlite3_vtab) => number;
	xFindFunction: (p1: sqlite3_vtab, p2: number, p3: string, p4: (p1: any, p2: number, p3: any) => void, p5: any) => number;
	xRename: (p1: sqlite3_vtab, p2: string) => number;
	xSavepoint: (p1: sqlite3_vtab, p2: number) => number;
	xRelease: (p1: sqlite3_vtab, p2: number) => number;
	xRollbackTo: (p1: sqlite3_vtab, p2: number) => number;
	xShadowName: (p1: string) => number;
}
declare var sqlite3_module: sqlite3_module;

declare function sqlite3_msize(p1: any): number;

declare function sqlite3_mutex_alloc(p1: number): any;

declare function sqlite3_mutex_enter(p1: any): void;

declare function sqlite3_mutex_free(p1: any): void;

declare function sqlite3_mutex_leave(p1: any): void;

interface sqlite3_mutex_methods {
	xMutexInit: () => number;
	xMutexEnd: () => number;
	xMutexAlloc: (p1: number) => any;
	xMutexFree: (p1: any) => void;
	xMutexEnter: (p1: any) => void;
	xMutexTry: (p1: any) => number;
	xMutexLeave: (p1: any) => void;
	xMutexHeld: (p1: any) => number;
	xMutexNotheld: (p1: any) => number;
}
declare var sqlite3_mutex_methods: sqlite3_mutex_methods;

declare function sqlite3_mutex_try(p1: any): number;

declare function sqlite3_next_stmt(pDb: any, pStmt: any): any;

declare function sqlite3_open(filename: string | any, ppDb: any): number;

declare function sqlite3_open16(filename: any, ppDb: any): number;

declare function sqlite3_open_v2(filename: string | any, ppDb: any, flags: number, zVfs: string | any): number;

declare function sqlite3_os_end(): number;

declare function sqlite3_os_init(): number;

declare function sqlite3_overload_function(p1: any, zFuncName: string | any, nArg: number): number;

interface sqlite3_pcache_methods {
	pArg: any;
	xInit: (p1: any) => number;
	xShutdown: (p1: any) => void;
	xCreate: (p1: number, p2: number) => any;
	xCachesize: (p1: any, p2: number) => void;
	xPagecount: (p1: any) => number;
	xFetch: (p1: any, p2: number, p3: number) => any;
	xUnpin: (p1: any, p2: any, p3: number) => void;
	xRekey: (p1: any, p2: any, p3: number, p4: number) => void;
	xTruncate: (p1: any, p2: number) => void;
	xDestroy: (p1: any) => void;
}
declare var sqlite3_pcache_methods: sqlite3_pcache_methods;

interface sqlite3_pcache_methods2 {
	iVersion: number;
	pArg: any;
	xInit: (p1: any) => number;
	xShutdown: (p1: any) => void;
	xCreate: (p1: number, p2: number, p3: number) => any;
	xCachesize: (p1: any, p2: number) => void;
	xPagecount: (p1: any) => number;
	xFetch: (p1: any, p2: number, p3: number) => sqlite3_pcache_page;
	xUnpin: (p1: any, p2: sqlite3_pcache_page, p3: number) => void;
	xRekey: (p1: any, p2: sqlite3_pcache_page, p3: number, p4: number) => void;
	xTruncate: (p1: any, p2: number) => void;
	xDestroy: (p1: any) => void;
	xShrink: (p1: any) => void;
}
declare var sqlite3_pcache_methods2: sqlite3_pcache_methods2;

interface sqlite3_pcache_page {
	pBuf: any;
	pExtra: any;
}
declare var sqlite3_pcache_page: sqlite3_pcache_page;

declare function sqlite3_prepare(db: any, zSql: string | any, nByte: number, ppStmt: any, pzTail: string): number;

declare function sqlite3_prepare16(db: any, zSql: any, nByte: number, ppStmt: any, pzTail: any): number;

declare function sqlite3_prepare16_v2(db: any, zSql: any, nByte: number, ppStmt: any, pzTail: any): number;

declare function sqlite3_prepare16_v3(db: any, zSql: any, nByte: number, prepFlags: number, ppStmt: any, pzTail: any): number;

declare function sqlite3_prepare_v2(db: any, zSql: string | any, nByte: number, ppStmt: any, pzTail: string): number;

declare function sqlite3_prepare_v3(db: any, zSql: string | any, nByte: number, prepFlags: number, ppStmt: any, pzTail: string): number;

declare function sqlite3_progress_handler(p1: any, p2: number, p3: (p1: any) => number, p4: any): void;

declare function sqlite3_randomness(N: number, P: any): void;

declare function sqlite3_realloc(p1: any, p2: number): any;

declare function sqlite3_realloc64(p1: any, p2: number): any;

declare function sqlite3_release_memory(p1: number): number;

declare function sqlite3_reset(pStmt: any): number;

declare function sqlite3_result_blob(p1: any, p2: any, p3: number, p4: (p1: any) => void): void;

declare function sqlite3_result_blob64(p1: any, p2: any, p3: number, p4: (p1: any) => void): void;

declare function sqlite3_result_double(p1: any, p2: number): void;

declare function sqlite3_result_error(p1: any, p2: string | any, p3: number): void;

declare function sqlite3_result_error16(p1: any, p2: any, p3: number): void;

declare function sqlite3_result_error_code(p1: any, p2: number): void;

declare function sqlite3_result_error_nomem(p1: any): void;

declare function sqlite3_result_error_toobig(p1: any): void;

declare function sqlite3_result_int(p1: any, p2: number): void;

declare function sqlite3_result_int64(p1: any, p2: number): void;

declare function sqlite3_result_null(p1: any): void;

declare function sqlite3_result_pointer(p1: any, p2: any, p3: string | any, p4: (p1: any) => void): void;

declare function sqlite3_result_subtype(p1: any, p2: number): void;

declare function sqlite3_result_text(p1: any, p2: string | any, p3: number, p4: (p1: any) => void): void;

declare function sqlite3_result_text16(p1: any, p2: any, p3: number, p4: (p1: any) => void): void;

declare function sqlite3_result_text16be(p1: any, p2: any, p3: number, p4: (p1: any) => void): void;

declare function sqlite3_result_text16le(p1: any, p2: any, p3: number, p4: (p1: any) => void): void;

declare function sqlite3_result_text64(p1: any, p2: string | any, p3: number, p4: (p1: any) => void, encoding: number): void;

declare function sqlite3_result_value(p1: any, p2: any): void;

declare function sqlite3_result_zeroblob(p1: any, n: number): void;

declare function sqlite3_result_zeroblob64(p1: any, n: number): number;

declare function sqlite3_rollback_hook(p1: any, p2: (p1: any) => void, p3: any): any;

interface sqlite3_rtree_geometry {
	pContext: any;
	nParam: number;
	aParam: number;
	pUser: any;
	xDelUser: (p1: any) => void;
}
declare var sqlite3_rtree_geometry: sqlite3_rtree_geometry;

declare function sqlite3_rtree_geometry_callback(db: any, zGeom: string | any, xGeom: (p1: sqlite3_rtree_geometry, p2: number, p3: number, p4: number) => number, pContext: any): number;

declare function sqlite3_rtree_query_callback(db: any, zQueryFunc: string | any, xQueryFunc: (p1: sqlite3_rtree_query_info) => number, pContext: any, xDestructor: (p1: any) => void): number;

interface sqlite3_rtree_query_info {
	pContext: any;
	nParam: number;
	aParam: number;
	pUser: any;
	xDelUser: (p1: any) => void;
	aCoord: number;
	anQueue: number;
	nCoord: number;
	iLevel: number;
	mxLevel: number;
	iRowid: number;
	rParentScore: number;
	eParentWithin: number;
	eWithin: number;
	rScore: number;
	apSqlParam: any;
}
declare var sqlite3_rtree_query_info: sqlite3_rtree_query_info;

declare function sqlite3_serialize(db: any, zSchema: string | any, piSize: number, mFlags: number): string;

declare function sqlite3_set_authorizer(p1: any, xAuth: (p1: any, p2: number, p3: string, p4: string, p5: string, p6: string) => number, pUserData: any): number;

declare function sqlite3_set_auxdata(p1: any, N: number, p3: any, p4: (p1: any) => void): void;

declare function sqlite3_set_last_insert_rowid(p1: any, p2: number): void;

declare function sqlite3_shutdown(): number;

declare function sqlite3_sleep(p1: number): number;

declare function sqlite3_soft_heap_limit64(N: number): number;

declare function sqlite3_sourceid(): string;

declare function sqlite3_sql(pStmt: any): string;

declare function sqlite3_status(op: number, pCurrent: number, pHighwater: number, resetFlag: number): number;

declare function sqlite3_status64(op: number, pCurrent: number, pHighwater: number, resetFlag: number): number;

declare function sqlite3_step(p1: any): number;

declare function sqlite3_stmt_busy(p1: any): number;

declare function sqlite3_stmt_isexplain(pStmt: any): number;

declare function sqlite3_stmt_readonly(pStmt: any): number;

declare function sqlite3_stmt_status(p1: any, op: number, resetFlg: number): number;

declare function sqlite3_str_append(p1: any, zIn: string | any, N: number): void;

declare function sqlite3_str_appendall(p1: any, zIn: string | any): void;

declare function sqlite3_str_appendchar(p1: any, N: number, C: number): void;

declare function sqlite3_str_errcode(p1: any): number;

declare function sqlite3_str_finish(p1: any): string;

declare function sqlite3_str_length(p1: any): number;

declare function sqlite3_str_new(p1: any): any;

declare function sqlite3_str_reset(p1: any): void;

declare function sqlite3_str_value(p1: any): string;

declare function sqlite3_strglob(zGlob: string | any, zStr: string | any): number;

declare function sqlite3_stricmp(p1: string | any, p2: string | any): number;

declare function sqlite3_strlike(zGlob: string | any, zStr: string | any, cEsc: number): number;

declare function sqlite3_strnicmp(p1: string | any, p2: string | any, p3: number): number;

declare function sqlite3_system_errno(p1: any): number;

declare function sqlite3_table_column_metadata(db: any, zDbName: string | any, zTableName: string | any, zColumnName: string | any, pzDataType: string, pzCollSeq: string, pNotNull: number, pPrimaryKey: number, pAutoinc: number): number;

declare var sqlite3_temp_directory: string;

declare function sqlite3_threadsafe(): number;

declare function sqlite3_total_changes(p1: any): number;

declare function sqlite3_trace_v2(p1: any, uMask: number, xCallback: (p1: number, p2: any, p3: any, p4: any) => number, pCtx: any): number;

declare function sqlite3_update_hook(p1: any, p2: (p1: any, p2: number, p3: string, p4: string, p5: number) => void, p3: any): any;

declare function sqlite3_uri_boolean(zFile: string | any, zParam: string | any, bDefault: number): number;

declare function sqlite3_uri_int64(p1: string | any, p2: string | any, p3: number): number;

declare function sqlite3_uri_parameter(zFilename: string | any, zParam: string | any): string;

declare function sqlite3_user_data(p1: any): any;

declare function sqlite3_value_blob(p1: any): any;

declare function sqlite3_value_bytes(p1: any): number;

declare function sqlite3_value_bytes16(p1: any): number;

declare function sqlite3_value_double(p1: any): number;

declare function sqlite3_value_dup(p1: any): any;

declare function sqlite3_value_free(p1: any): void;

declare function sqlite3_value_frombind(p1: any): number;

declare function sqlite3_value_int(p1: any): number;

declare function sqlite3_value_int64(p1: any): number;

declare function sqlite3_value_nochange(p1: any): number;

declare function sqlite3_value_numeric_type(p1: any): number;

declare function sqlite3_value_pointer(p1: any, p2: string | any): any;

declare function sqlite3_value_subtype(p1: any): number;

declare function sqlite3_value_text(p1: any): string;

declare function sqlite3_value_text16(p1: any): any;

declare function sqlite3_value_text16be(p1: any): any;

declare function sqlite3_value_text16le(p1: any): any;

declare function sqlite3_value_type(p1: any): number;

declare var sqlite3_version: number;

interface sqlite3_vfs {
	iVersion: number;
	szOsFile: number;
	mxPathname: number;
	pNext: sqlite3_vfs;
	zName: string;
	pAppData: any;
	xOpen: (p1: sqlite3_vfs, p2: string, p3: sqlite3_file, p4: number, p5: number) => number;
	xDelete: (p1: sqlite3_vfs, p2: string, p3: number) => number;
	xAccess: (p1: sqlite3_vfs, p2: string, p3: number, p4: number) => number;
	xFullPathname: (p1: sqlite3_vfs, p2: string, p3: number, p4: string) => number;
	xDlOpen: (p1: sqlite3_vfs, p2: string) => any;
	xDlError: (p1: sqlite3_vfs, p2: number, p3: string) => void;
	xDlSym: (p1: sqlite3_vfs, p2: any, p3: string) => () => void;
	xDlClose: (p1: sqlite3_vfs, p2: any) => void;
	xRandomness: (p1: sqlite3_vfs, p2: number, p3: string) => number;
	xSleep: (p1: sqlite3_vfs, p2: number) => number;
	xCurrentTime: (p1: sqlite3_vfs, p2: number) => number;
	xGetLastError: (p1: sqlite3_vfs, p2: number, p3: string) => number;
	xCurrentTimeInt64: (p1: sqlite3_vfs, p2: number) => number;
	xSetSystemCall: (p1: sqlite3_vfs, p2: string, p3: () => void) => number;
	xGetSystemCall: (p1: sqlite3_vfs, p2: string) => () => void;
	xNextSystemCall: (p1: sqlite3_vfs, p2: string) => string;
}
declare var sqlite3_vfs: sqlite3_vfs;

declare function sqlite3_vfs_find(zVfsName: string | any): sqlite3_vfs;

declare function sqlite3_vfs_register(p1: sqlite3_vfs, makeDflt: number): number;

declare function sqlite3_vfs_unregister(p1: sqlite3_vfs): number;

interface sqlite3_vtab {
	pModule: sqlite3_module;
	nRef: number;
	zErrMsg: string;
}
declare var sqlite3_vtab: sqlite3_vtab;

interface sqlite3_vtab_cursor {
	pVtab: sqlite3_vtab;
}
declare var sqlite3_vtab_cursor: sqlite3_vtab_cursor;

declare function sqlite3_vtab_nochange(p1: any): number;

declare function sqlite3_vtab_on_conflict(p1: any): number;

declare function sqlite3_wal_autocheckpoint(db: any, N: number): number;

declare function sqlite3_wal_checkpoint(db: any, zDb: string | any): number;

declare function sqlite3_wal_checkpoint_v2(db: any, zDb: string | any, eMode: number, pnLog: number, pnCkpt: number): number;

declare function sqlite3_wal_hook(p1: any, p2: (p1: any, p2: any, p3: string, p4: number) => number, p3: any): any;
