
interface _xsltDecimalFormat {
	next: _xsltDecimalFormat;
	name: string;
	digit: string;
	patternSeparator: string;
	minusSign: string;
	infinity: string;
	noNumber: string;
	decimalPoint: string;
	grouping: string;
	percent: string;
	permille: string;
	zeroDigit: string;
}
declare var _xsltDecimalFormat: _xsltDecimalFormat;

interface _xsltDocument {
	next: _xsltDocument;
	main: number;
	doc: _xmlDoc;
	keys: any;
	includes: _xsltDocument;
	preproc: number;
	nbKeysComputed: number;
}
declare var _xsltDocument: _xsltDocument;

interface _xsltFormatNumberInfo {
	integer_hash: number;
	integer_digits: number;
	frac_digits: number;
	frac_hash: number;
	group: number;
	multiplier: number;
	add_decimal: number;
	is_multiplier_set: number;
	is_negative_pattern: number;
}
declare var _xsltFormatNumberInfo: _xsltFormatNumberInfo;

interface _xsltKeyDef {
	next: _xsltKeyDef;
	inst: _xmlNode;
	name: string;
	nameURI: string;
	match: string;
	use: string;
	comp: any;
	usecomp: any;
	nsList: _xmlNs;
	nsNr: number;
}
declare var _xsltKeyDef: _xsltKeyDef;

interface _xsltKeyTable {
	next: _xsltKeyTable;
	name: string;
	nameURI: string;
	keys: any;
}
declare var _xsltKeyTable: _xsltKeyTable;

interface _xsltNumberData {
	level: string;
	count: string;
	from: string;
	value: string;
	format: string;
	has_format: number;
	digitsPerGroup: number;
	groupingCharacter: number;
	groupingCharacterLen: number;
	doc: _xmlDoc;
	node: _xmlNode;
	countPat: any;
	fromPat: any;
}
declare var _xsltNumberData: _xsltNumberData;

declare var xslDebugStatus: number;

declare function xslDropCall(): void;

declare function xsltCalibrateAdjust(delta: number): void;

declare function xsltCleanupGlobals(): void;

declare function xsltDebugDumpExtensions(output: FILE): void;

declare function xsltDebugGetDefaultTrace(): xsltDebugTraceCodes;

declare function xsltDebugSetDefaultTrace(val: xsltDebugTraceCodes): void;

enum xsltDebugStatusCodes {

	XSLT_DEBUG_NONE = 0,

	XSLT_DEBUG_INIT = 1,

	XSLT_DEBUG_STEP = 2,

	XSLT_DEBUG_STEPOUT = 3,

	XSLT_DEBUG_NEXT = 4,

	XSLT_DEBUG_STOP = 5,

	XSLT_DEBUG_CONT = 6,

	XSLT_DEBUG_RUN = 7,

	XSLT_DEBUG_RUN_RESTART = 8,

	XSLT_DEBUG_QUIT = 9
}


enum xsltDebugTraceCodes {

	XSLT_TRACE_ALL = -1,

	XSLT_TRACE_NONE = 0,

	XSLT_TRACE_COPY_TEXT = 1,

	XSLT_TRACE_PROCESS_NODE = 2,

	XSLT_TRACE_APPLY_TEMPLATE = 4,

	XSLT_TRACE_COPY = 8,

	XSLT_TRACE_COMMENT = 16,

	XSLT_TRACE_PI = 32,

	XSLT_TRACE_COPY_OF = 64,

	XSLT_TRACE_VALUE_OF = 128,

	XSLT_TRACE_CALL_TEMPLATE = 256,

	XSLT_TRACE_APPLY_TEMPLATES = 512,

	XSLT_TRACE_CHOOSE = 1024,

	XSLT_TRACE_IF = 2048,

	XSLT_TRACE_FOR_EACH = 4096,

	XSLT_TRACE_STRIP_SPACES = 8192,

	XSLT_TRACE_TEMPLATES = 16384,

	XSLT_TRACE_KEYS = 32768,

	XSLT_TRACE_VARIABLES = 65536
}


declare var xsltDocDefaultLoader: (p1: string, p2: any, p3: number, p4: any, p5: xsltLoadType) => _xmlDoc;

declare function xsltDocumentFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xsltDocumentSortFunction(list: _xmlNodeSet): void;

declare function xsltElementAvailableFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare var xsltEngineVersion: string;

declare var xsltExtMarker: string;

declare function xsltExtModuleFunctionLookup(name: string | any, URI: string | any): (p1: _xmlXPathParserContext, p2: number) => void;

declare function xsltFormatNumberConversion(self: _xsltDecimalFormat, format: string | any, number: number, result: string): xmlXPathError;

declare function xsltFormatNumberFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xsltFreeAVTList(avt: any): void;

declare function xsltFreeCompMatchList(comp: any): void;

declare function xsltFreeDocumentKeys(doc: _xsltDocument): void;

declare function xsltFreeLocale(locale: any): void;

declare function xsltFreeLocales(): void;

declare function xsltFreeSecurityPrefs(sec: any): void;

declare function xsltFunctionAvailableFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xsltFunctionNodeSet(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xsltGenerateIdFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare var xsltGenericDebug: (p1: any, p2: string) => void;

declare var xsltGenericDebugContext: any;

declare var xsltGenericError: (p1: any, p2: string) => void;

declare var xsltGenericErrorContext: any;

declare function xsltGetDebuggerStatus(): number;

declare function xsltGetDefaultSecurityPrefs(): any;

declare function xsltGetNsProp(node: _xmlNode, name: string | any, nameSpace: string | any): string;

declare function xsltGetQNameURI(node: _xmlNode, name: string): string;

declare function xsltGetUTF8Char(utf: string | any, len: number): number;

declare function xsltGetXIncludeDefault(): number;

declare function xsltInit(): void;

declare function xsltInitGlobals(): void;

declare function xsltIsBlank(str: string | any): number;

declare function xsltKeyFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare var xsltLibxmlVersion: number;

declare var xsltLibxsltVersion: number;

enum xsltLoadType {

	XSLT_LOAD_START = 0,

	XSLT_LOAD_STYLESHEET = 1,

	XSLT_LOAD_DOCUMENT = 2
}


declare function xsltLocaleStrcmp(locale: any, str1: string | any, str2: string | any): number;

declare var xsltMaxDepth: number;

declare var xsltMaxVars: number;

declare function xsltNewLocale(langName: string | any): any;

declare function xsltNewSecurityPrefs(): any;

declare function xsltNormalizeCompSteps(payload: any, data: any, name: string | any): void;

enum xsltOutputType {

	XSLT_OUTPUT_XML = 0,

	XSLT_OUTPUT_HTML = 1,

	XSLT_OUTPUT_TEXT = 2
}


declare function xsltRegisterAllExtras(): void;

declare function xsltRegisterAllFunctions(ctxt: _xmlXPathContext): void;

declare function xsltRegisterExtModuleFunction(name: string | any, URI: string | any, function_: (p1: _xmlXPathParserContext, p2: number) => void): number;

declare function xsltRegisterTestModule(): void;

enum xsltSecurityOption {

	XSLT_SECPREF_READ_FILE = 1,

	XSLT_SECPREF_WRITE_FILE = 2,

	XSLT_SECPREF_CREATE_DIRECTORY = 3,

	XSLT_SECPREF_READ_NETWORK = 4,

	XSLT_SECPREF_WRITE_NETWORK = 5
}


declare function xsltSetDebuggerCallbacks(no: number, block: any): number;

declare function xsltSetDebuggerStatus(value: number): void;

declare function xsltSetDefaultSecurityPrefs(sec: any): void;

declare function xsltSetGenericDebugFunc(ctx: any, handler: (p1: any, p2: string) => void): void;

declare function xsltSetGenericErrorFunc(ctx: any, handler: (p1: any, p2: string) => void): void;

declare function xsltSetLoaderFunc(f: (p1: string, p2: any, p3: number, p4: any, p5: xsltLoadType) => _xmlDoc): void;

declare function xsltSetXIncludeDefault(xinclude: number): void;

declare function xsltSplitQName(dict: any, name: string | any, prefix: string): string;

declare function xsltStrxfrm(locale: any, string: string | any): string;

enum xsltStyleType {

	XSLT_FUNC_COPY = 1,

	XSLT_FUNC_SORT = 2,

	XSLT_FUNC_TEXT = 3,

	XSLT_FUNC_ELEMENT = 4,

	XSLT_FUNC_ATTRIBUTE = 5,

	XSLT_FUNC_COMMENT = 6,

	XSLT_FUNC_PI = 7,

	XSLT_FUNC_COPYOF = 8,

	XSLT_FUNC_VALUEOF = 9,

	XSLT_FUNC_NUMBER = 10,

	XSLT_FUNC_APPLYIMPORTS = 11,

	XSLT_FUNC_CALLTEMPLATE = 12,

	XSLT_FUNC_APPLYTEMPLATES = 13,

	XSLT_FUNC_CHOOSE = 14,

	XSLT_FUNC_IF = 15,

	XSLT_FUNC_FOREACH = 16,

	XSLT_FUNC_DOCUMENT = 17,

	XSLT_FUNC_WITHPARAM = 18,

	XSLT_FUNC_PARAM = 19,

	XSLT_FUNC_VARIABLE = 20,

	XSLT_FUNC_WHEN = 21,

	XSLT_FUNC_EXTENSION = 22
}


declare function xsltSystemPropertyFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xsltTimestamp(): number;

enum xsltTransformState {

	XSLT_STATE_OK = 0,

	XSLT_STATE_ERROR = 1,

	XSLT_STATE_STOPPED = 2
}


declare function xsltUninit(): void;

declare function xsltUnparsedEntityURIFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xsltUnregisterExtModule(URI: string | any): number;

declare function xsltUnregisterExtModuleElement(name: string | any, URI: string | any): number;

declare function xsltUnregisterExtModuleFunction(name: string | any, URI: string | any): number;

declare function xsltUnregisterExtModuleTopLevel(name: string | any, URI: string | any): number;

declare function xsltXPathFunctionLookup(ctxt: _xmlXPathContext, name: string | any, ns_uri: string | any): (p1: _xmlXPathParserContext, p2: number) => void;

declare function xsltXPathVariableLookup(ctxt: any, name: string | any, ns_uri: string | any): _xmlXPathObject;
