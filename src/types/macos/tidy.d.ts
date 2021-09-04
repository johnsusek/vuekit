
enum Bool {

	no = 0,

	yes = 1
}


declare function ClearMemory(p1: any, size: number): void;

declare function FatalError(msg: string | any): void;

declare function MemAlloc(size: number): any;

declare function MemFree(mem: any): void;

declare function MemRealloc(mem: any, newsize: number): any;

enum TidyAttrId {

	TidyAttr_UNKNOWN = 0,

	TidyAttr_ABBR = 1,

	TidyAttr_ACCEPT = 2,

	TidyAttr_ACCEPT_CHARSET = 3,

	TidyAttr_ACCESSKEY = 4,

	TidyAttr_ACTION = 5,

	TidyAttr_ADD_DATE = 6,

	TidyAttr_ALIGN = 7,

	TidyAttr_ALINK = 8,

	TidyAttr_ALT = 9,

	TidyAttr_ARCHIVE = 10,

	TidyAttr_AXIS = 11,

	TidyAttr_BACKGROUND = 12,

	TidyAttr_BGCOLOR = 13,

	TidyAttr_BGPROPERTIES = 14,

	TidyAttr_BORDER = 15,

	TidyAttr_BORDERCOLOR = 16,

	TidyAttr_BOTTOMMARGIN = 17,

	TidyAttr_CELLPADDING = 18,

	TidyAttr_CELLSPACING = 19,

	TidyAttr_CHAR = 20,

	TidyAttr_CHAROFF = 21,

	TidyAttr_CHARSET = 22,

	TidyAttr_CHECKED = 23,

	TidyAttr_CITE = 24,

	TidyAttr_CLASS = 25,

	TidyAttr_CLASSID = 26,

	TidyAttr_CLEAR = 27,

	TidyAttr_CODE = 28,

	TidyAttr_CODEBASE = 29,

	TidyAttr_CODETYPE = 30,

	TidyAttr_COLOR = 31,

	TidyAttr_COLS = 32,

	TidyAttr_COLSPAN = 33,

	TidyAttr_COMPACT = 34,

	TidyAttr_CONTENT = 35,

	TidyAttr_COORDS = 36,

	TidyAttr_DATA = 37,

	TidyAttr_DATAFLD = 38,

	TidyAttr_DATAFORMATAS = 39,

	TidyAttr_DATAPAGESIZE = 40,

	TidyAttr_DATASRC = 41,

	TidyAttr_DATETIME = 42,

	TidyAttr_DECLARE = 43,

	TidyAttr_DEFER = 44,

	TidyAttr_DIR = 45,

	TidyAttr_DISABLED = 46,

	TidyAttr_ENCODING = 47,

	TidyAttr_ENCTYPE = 48,

	TidyAttr_FACE = 49,

	TidyAttr_FOR = 50,

	TidyAttr_FRAME = 51,

	TidyAttr_FRAMEBORDER = 52,

	TidyAttr_FRAMESPACING = 53,

	TidyAttr_GRIDX = 54,

	TidyAttr_GRIDY = 55,

	TidyAttr_HEADERS = 56,

	TidyAttr_HEIGHT = 57,

	TidyAttr_HREF = 58,

	TidyAttr_HREFLANG = 59,

	TidyAttr_HSPACE = 60,

	TidyAttr_HTTP_EQUIV = 61,

	TidyAttr_ID = 62,

	TidyAttr_ISMAP = 63,

	TidyAttr_LABEL = 64,

	TidyAttr_LANG = 65,

	TidyAttr_LANGUAGE = 66,

	TidyAttr_LAST_MODIFIED = 67,

	TidyAttr_LAST_VISIT = 68,

	TidyAttr_LEFTMARGIN = 69,

	TidyAttr_LINK = 70,

	TidyAttr_LONGDESC = 71,

	TidyAttr_LOWSRC = 72,

	TidyAttr_MARGINHEIGHT = 73,

	TidyAttr_MARGINWIDTH = 74,

	TidyAttr_MAXLENGTH = 75,

	TidyAttr_MEDIA = 76,

	TidyAttr_METHOD = 77,

	TidyAttr_MULTIPLE = 78,

	TidyAttr_NAME = 79,

	TidyAttr_NOHREF = 80,

	TidyAttr_NORESIZE = 81,

	TidyAttr_NOSHADE = 82,

	TidyAttr_NOWRAP = 83,

	TidyAttr_OBJECT = 84,

	TidyAttr_OnAFTERUPDATE = 85,

	TidyAttr_OnBEFOREUNLOAD = 86,

	TidyAttr_OnBEFOREUPDATE = 87,

	TidyAttr_OnBLUR = 88,

	TidyAttr_OnCHANGE = 89,

	TidyAttr_OnCLICK = 90,

	TidyAttr_OnDATAAVAILABLE = 91,

	TidyAttr_OnDATASETCHANGED = 92,

	TidyAttr_OnDATASETCOMPLETE = 93,

	TidyAttr_OnDBLCLICK = 94,

	TidyAttr_OnERRORUPDATE = 95,

	TidyAttr_OnFOCUS = 96,

	TidyAttr_OnKEYDOWN = 97,

	TidyAttr_OnKEYPRESS = 98,

	TidyAttr_OnKEYUP = 99,

	TidyAttr_OnLOAD = 100,

	TidyAttr_OnMOUSEDOWN = 101,

	TidyAttr_OnMOUSEMOVE = 102,

	TidyAttr_OnMOUSEOUT = 103,

	TidyAttr_OnMOUSEOVER = 104,

	TidyAttr_OnMOUSEUP = 105,

	TidyAttr_OnRESET = 106,

	TidyAttr_OnROWENTER = 107,

	TidyAttr_OnROWEXIT = 108,

	TidyAttr_OnSELECT = 109,

	TidyAttr_OnSUBMIT = 110,

	TidyAttr_OnUNLOAD = 111,

	TidyAttr_PROFILE = 112,

	TidyAttr_PROMPT = 113,

	TidyAttr_RBSPAN = 114,

	TidyAttr_READONLY = 115,

	TidyAttr_REL = 116,

	TidyAttr_REV = 117,

	TidyAttr_RIGHTMARGIN = 118,

	TidyAttr_ROWS = 119,

	TidyAttr_ROWSPAN = 120,

	TidyAttr_RULES = 121,

	TidyAttr_SCHEME = 122,

	TidyAttr_SCOPE = 123,

	TidyAttr_SCROLLING = 124,

	TidyAttr_SELECTED = 125,

	TidyAttr_SHAPE = 126,

	TidyAttr_SHOWGRID = 127,

	TidyAttr_SHOWGRIDX = 128,

	TidyAttr_SHOWGRIDY = 129,

	TidyAttr_SIZE = 130,

	TidyAttr_SPAN = 131,

	TidyAttr_SRC = 132,

	TidyAttr_STANDBY = 133,

	TidyAttr_START = 134,

	TidyAttr_STYLE = 135,

	TidyAttr_SUMMARY = 136,

	TidyAttr_TABINDEX = 137,

	TidyAttr_TARGET = 138,

	TidyAttr_TEXT = 139,

	TidyAttr_TITLE = 140,

	TidyAttr_TOPMARGIN = 141,

	TidyAttr_TYPE = 142,

	TidyAttr_USEMAP = 143,

	TidyAttr_VALIGN = 144,

	TidyAttr_VALUE = 145,

	TidyAttr_VALUETYPE = 146,

	TidyAttr_VERSION = 147,

	TidyAttr_VLINK = 148,

	TidyAttr_VSPACE = 149,

	TidyAttr_WIDTH = 150,

	TidyAttr_WRAP = 151,

	TidyAttr_XML_LANG = 152,

	TidyAttr_XML_SPACE = 153,

	TidyAttr_XMLNS = 154,

	TidyAttr_EVENT = 155,

	TidyAttr_METHODS = 156,

	TidyAttr_N = 157,

	TidyAttr_SDAFORM = 158,

	TidyAttr_SDAPREF = 159,

	TidyAttr_SDASUFF = 160,

	TidyAttr_URN = 161,

	N_TIDY_ATTRIBS = 162
}


enum TidyConfigCategory {

	Markup = 0,

	Diagnostics = 1,

	PrettyPrint = 2,

	Encoding = 3,

	Miscellaneous = 4
}


enum TidyDoctypeModes {

	Omit = 0,

	Auto = 1,

	Strict = 2,

	Loose = 3,

	User = 4
}


enum TidyDupAttrModes {

	KeepFirst = 0,

	KeepLast = 1
}


interface TidyInputSource {
	sourceData: any;
	getByte: (p1: any) => number;
	ungetByte: (p1: any, p2: number) => void;
	eof: (p1: any) => Bool;
}
declare var TidyInputSource: TidyInputSource;

enum TidyLineEnding {

	LF = 0,

	CRLF = 1,

	CR = 2
}


enum TidyNodeType {

	Node_Root = 0,

	Node_DocType = 1,

	Node_Comment = 2,

	Node_ProcIns = 3,

	Node_Text = 4,

	Node_Start = 5,

	Node_End = 6,

	Node_StartEnd = 7,

	Node_CDATA = 8,

	Node_Section = 9,

	Node_Asp = 10,

	Node_Jste = 11,

	Node_Php = 12,

	Node_XmlDecl = 13
}


enum TidyOptionId {

	TidyUnknownOption = 0,

	TidyIndentSpaces = 1,

	TidyWrapLen = 2,

	TidyTabSize = 3,

	TidyCharEncoding = 4,

	TidyInCharEncoding = 5,

	TidyOutCharEncoding = 6,

	TidyNewline = 7,

	TidyDoctypeMode = 8,

	TidyDoctype = 9,

	TidyDuplicateAttrs = 10,

	TidyAltText = 11,

	TidySlideStyle = 12,

	TidyErrFile = 13,

	TidyOutFile = 14,

	TidyWriteBack = 15,

	TidyShowMarkup = 16,

	TidyShowWarnings = 17,

	TidyQuiet = 18,

	TidyIndentContent = 19,

	TidyHideEndTags = 20,

	TidyXmlTags = 21,

	TidyXmlOut = 22,

	TidyXhtmlOut = 23,

	TidyHtmlOut = 24,

	TidyXmlDecl = 25,

	TidyUpperCaseTags = 26,

	TidyUpperCaseAttrs = 27,

	TidyMakeBare = 28,

	TidyMakeClean = 29,

	TidyLogicalEmphasis = 30,

	TidyDropPropAttrs = 31,

	TidyDropFontTags = 32,

	TidyDropEmptyParas = 33,

	TidyFixComments = 34,

	TidyBreakBeforeBR = 35,

	TidyBurstSlides = 36,

	TidyNumEntities = 37,

	TidyQuoteMarks = 38,

	TidyQuoteNbsp = 39,

	TidyQuoteAmpersand = 40,

	TidyWrapAttVals = 41,

	TidyWrapScriptlets = 42,

	TidyWrapSection = 43,

	TidyWrapAsp = 44,

	TidyWrapJste = 45,

	TidyWrapPhp = 46,

	TidyFixBackslash = 47,

	TidyIndentAttributes = 48,

	TidyXmlPIs = 49,

	TidyXmlSpace = 50,

	TidyEncloseBodyText = 51,

	TidyEncloseBlockText = 52,

	TidyKeepFileTimes = 53,

	TidyWord2000 = 54,

	TidyMark = 55,

	TidyEmacs = 56,

	TidyEmacsFile = 57,

	TidyLiteralAttribs = 58,

	TidyBodyOnly = 59,

	TidyFixUri = 60,

	TidyLowerLiterals = 61,

	TidyHideComments = 62,

	TidyIndentCdata = 63,

	TidyForceOutput = 64,

	TidyShowErrors = 65,

	TidyAsciiChars = 66,

	TidyJoinClasses = 67,

	TidyJoinStyles = 68,

	TidyEscapeCdata = 69,

	TidyLanguage = 70,

	TidyNCR = 71,

	TidyOutputBOM = 72,

	TidyReplaceColor = 73,

	TidyCSSPrefix = 74,

	TidyInlineTags = 75,

	TidyBlockTags = 76,

	TidyEmptyTags = 77,

	TidyPreTags = 78,

	TidyAccessibilityCheckLevel = 79,

	TidyVertSpace = 80,

	TidyPunctWrap = 81,

	TidyMergeDivs = 82,

	TidyDecorateInferredUL = 83,

	TidyRelativePathBaseUri = 84,

	TidyAbsolutePathBaseUri = 85,

	TidyDropClassesWithPrefix = 86,

	TidyDropIdsWithPrefix = 87,

	TidySanitizeAgainstXSS = 88,

	N_TIDY_OPTIONS = 89
}


enum TidyOptionType {

	String = 0,

	Integer = 1,

	Boolean = 2
}


interface TidyOutputSink {
	sinkData: any;
	putByte: (p1: any, p2: number) => void;
}
declare var TidyOutputSink: TidyOutputSink;

enum TidyReportLevel {

	Info = 0,

	Warning = 1,

	Config = 2,

	Access = 3,

	Error = 4,

	BadDocument = 5,

	Fatal = 6
}


enum TidyTagId {

	TidyTag_UNKNOWN = 0,

	TidyTag_A = 1,

	TidyTag_ABBR = 2,

	TidyTag_ACRONYM = 3,

	TidyTag_ADDRESS = 4,

	TidyTag_ALIGN = 5,

	TidyTag_APPLET = 6,

	TidyTag_AREA = 7,

	TidyTag_B = 8,

	TidyTag_BASE = 9,

	TidyTag_BASEFONT = 10,

	TidyTag_BDO = 11,

	TidyTag_BGSOUND = 12,

	TidyTag_BIG = 13,

	TidyTag_BLINK = 14,

	TidyTag_BLOCKQUOTE = 15,

	TidyTag_BODY = 16,

	TidyTag_BR = 17,

	TidyTag_BUTTON = 18,

	TidyTag_CAPTION = 19,

	TidyTag_CENTER = 20,

	TidyTag_CITE = 21,

	TidyTag_CODE = 22,

	TidyTag_COL = 23,

	TidyTag_COLGROUP = 24,

	TidyTag_COMMENT = 25,

	TidyTag_DD = 26,

	TidyTag_DEL = 27,

	TidyTag_DFN = 28,

	TidyTag_DIR = 29,

	TidyTag_DIV = 30,

	TidyTag_DL = 31,

	TidyTag_DT = 32,

	TidyTag_EM = 33,

	TidyTag_EMBED = 34,

	TidyTag_FIELDSET = 35,

	TidyTag_FONT = 36,

	TidyTag_FORM = 37,

	TidyTag_FRAME = 38,

	TidyTag_FRAMESET = 39,

	TidyTag_H1 = 40,

	TidyTag_H2 = 41,

	TidyTag_H3 = 42,

	TidyTag_H4 = 43,

	TidyTag_H5 = 44,

	TidyTag_H6 = 45,

	TidyTag_HEAD = 46,

	TidyTag_HR = 47,

	TidyTag_HTML = 48,

	TidyTag_I = 49,

	TidyTag_IFRAME = 50,

	TidyTag_ILAYER = 51,

	TidyTag_IMG = 52,

	TidyTag_INPUT = 53,

	TidyTag_INS = 54,

	TidyTag_ISINDEX = 55,

	TidyTag_KBD = 56,

	TidyTag_KEYGEN = 57,

	TidyTag_LABEL = 58,

	TidyTag_LAYER = 59,

	TidyTag_LEGEND = 60,

	TidyTag_LI = 61,

	TidyTag_LINK = 62,

	TidyTag_LISTING = 63,

	TidyTag_MAP = 64,

	TidyTag_MARQUEE = 65,

	TidyTag_MENU = 66,

	TidyTag_META = 67,

	TidyTag_MULTICOL = 68,

	TidyTag_NOBR = 69,

	TidyTag_NOEMBED = 70,

	TidyTag_NOFRAMES = 71,

	TidyTag_NOLAYER = 72,

	TidyTag_NOSAVE = 73,

	TidyTag_NOSCRIPT = 74,

	TidyTag_OBJECT = 75,

	TidyTag_OL = 76,

	TidyTag_OPTGROUP = 77,

	TidyTag_OPTION = 78,

	TidyTag_P = 79,

	TidyTag_PARAM = 80,

	TidyTag_PLAINTEXT = 81,

	TidyTag_PRE = 82,

	TidyTag_Q = 83,

	TidyTag_RB = 84,

	TidyTag_RBC = 85,

	TidyTag_RP = 86,

	TidyTag_RT = 87,

	TidyTag_RTC = 88,

	TidyTag_RUBY = 89,

	TidyTag_S = 90,

	TidyTag_SAMP = 91,

	TidyTag_SCRIPT = 92,

	TidyTag_SELECT = 93,

	TidyTag_SERVER = 94,

	TidyTag_SERVLET = 95,

	TidyTag_SMALL = 96,

	TidyTag_SPACER = 97,

	TidyTag_SPAN = 98,

	TidyTag_STRIKE = 99,

	TidyTag_STRONG = 100,

	TidyTag_STYLE = 101,

	TidyTag_SUB = 102,

	TidyTag_SUP = 103,

	TidyTag_TABLE = 104,

	TidyTag_TBODY = 105,

	TidyTag_TD = 106,

	TidyTag_TEXTAREA = 107,

	TidyTag_TFOOT = 108,

	TidyTag_TH = 109,

	TidyTag_THEAD = 110,

	TidyTag_TITLE = 111,

	TidyTag_TR = 112,

	TidyTag_TT = 113,

	TidyTag_U = 114,

	TidyTag_UL = 115,

	TidyTag_VAR = 116,

	TidyTag_WBR = 117,

	TidyTag_XMP = 118,

	TidyTag_NEXTID = 119,

	N_TIDY_TAGS = 120
}


enum TidyTriState {

	NoState = 0,

	YesState = 1,

	AutoState = 2
}


interface _TidyAttr {
	_opaque: number;
}
declare var _TidyAttr: _TidyAttr;

interface _TidyBuffer {
	bp: string;
	size: number;
	allocated: number;
	next: number;
}
declare var _TidyBuffer: _TidyBuffer;

interface _TidyDoc {
	_opaque: number;
}
declare var _TidyDoc: _TidyDoc;

interface _TidyIterator {
	_opaque: number;
}
declare var _TidyIterator: _TidyIterator;

interface _TidyNode {
	_opaque: number;
}
declare var _TidyNode: _TidyNode;

interface _TidyOption {
	_opaque: number;
}
declare var _TidyOption: _TidyOption;

declare function tidyAccessWarningCount(tdoc: _TidyDoc): number;

declare function tidyAttrFirst(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetABBR(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetALINK(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetALT(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetBGCOLOR(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetById(tnod: _TidyNode, attId: TidyAttrId): _TidyAttr;

declare function tidyAttrGetCHECKED(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetCOLSPAN(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetCONTENT(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetDATAFLD(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetFOR(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetHEIGHT(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetHREF(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetHTTP_EQUIV(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetID(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetISMAP(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetId(tattr: _TidyAttr): TidyAttrId;

declare function tidyAttrGetLANG(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetLANGUAGE(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetLINK(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetLONGDESC(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetNAME(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnBLUR(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnCLICK(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnFOCUS(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnKEYDOWN(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnKEYPRESS(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnKEYUP(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnMOUSEDOWN(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnMOUSEMOVE(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnMOUSEOUT(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnMOUSEOVER(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetOnMOUSEUP(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetREL(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetROWSPAN(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetSELECTED(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetSRC(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetSTYLE(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetSUMMARY(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetTARGET(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetTEXT(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetTITLE(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetTYPE(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetUSEMAP(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetVALUE(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetVLINK(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetWIDTH(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrGetXMLNS(tnod: _TidyNode): _TidyAttr;

declare function tidyAttrIsABBR(tattr: _TidyAttr): Bool;

declare function tidyAttrIsALINK(tattr: _TidyAttr): Bool;

declare function tidyAttrIsALT(tattr: _TidyAttr): Bool;

declare function tidyAttrIsBGCOLOR(tattr: _TidyAttr): Bool;

declare function tidyAttrIsCHECKED(tattr: _TidyAttr): Bool;

declare function tidyAttrIsCOLSPAN(tattr: _TidyAttr): Bool;

declare function tidyAttrIsCONTENT(tattr: _TidyAttr): Bool;

declare function tidyAttrIsDATAFLD(tattr: _TidyAttr): Bool;

declare function tidyAttrIsEvent(tattr: _TidyAttr): Bool;

declare function tidyAttrIsFOR(tattr: _TidyAttr): Bool;

declare function tidyAttrIsHEIGHT(tattr: _TidyAttr): Bool;

declare function tidyAttrIsHREF(tattr: _TidyAttr): Bool;

declare function tidyAttrIsHTTP_EQUIV(tattr: _TidyAttr): Bool;

declare function tidyAttrIsID(tattr: _TidyAttr): Bool;

declare function tidyAttrIsISMAP(tattr: _TidyAttr): Bool;

declare function tidyAttrIsLANG(tattr: _TidyAttr): Bool;

declare function tidyAttrIsLANGUAGE(tattr: _TidyAttr): Bool;

declare function tidyAttrIsLINK(tattr: _TidyAttr): Bool;

declare function tidyAttrIsLONGDESC(tattr: _TidyAttr): Bool;

declare function tidyAttrIsNAME(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnBLUR(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnCLICK(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnFOCUS(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnKEYDOWN(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnKEYPRESS(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnKEYUP(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnMOUSEDOWN(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnMOUSEMOVE(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnMOUSEOUT(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnMOUSEOVER(tattr: _TidyAttr): Bool;

declare function tidyAttrIsOnMOUSEUP(tattr: _TidyAttr): Bool;

declare function tidyAttrIsProp(tattr: _TidyAttr): Bool;

declare function tidyAttrIsREL(tattr: _TidyAttr): Bool;

declare function tidyAttrIsROWSPAN(tattr: _TidyAttr): Bool;

declare function tidyAttrIsSELECTED(tattr: _TidyAttr): Bool;

declare function tidyAttrIsSRC(tattr: _TidyAttr): Bool;

declare function tidyAttrIsSTYLE(tattr: _TidyAttr): Bool;

declare function tidyAttrIsSUMMARY(tattr: _TidyAttr): Bool;

declare function tidyAttrIsTARGET(tattr: _TidyAttr): Bool;

declare function tidyAttrIsTEXT(tattr: _TidyAttr): Bool;

declare function tidyAttrIsTITLE(tattr: _TidyAttr): Bool;

declare function tidyAttrIsTYPE(tattr: _TidyAttr): Bool;

declare function tidyAttrIsUSEMAP(tattr: _TidyAttr): Bool;

declare function tidyAttrIsVALUE(tattr: _TidyAttr): Bool;

declare function tidyAttrIsVLINK(tattr: _TidyAttr): Bool;

declare function tidyAttrIsWIDTH(tattr: _TidyAttr): Bool;

declare function tidyAttrIsXMLNS(tattr: _TidyAttr): Bool;

declare function tidyAttrName(tattr: _TidyAttr): string;

declare function tidyAttrNext(tattr: _TidyAttr): _TidyAttr;

declare function tidyAttrValue(tattr: _TidyAttr): string;

declare function tidyBufAlloc(buf: _TidyBuffer, allocSize: number): void;

declare function tidyBufAppend(buf: _TidyBuffer, vp: any, size: number): void;

declare function tidyBufAttach(buf: _TidyBuffer, bp: string | any, size: number): void;

declare function tidyBufCheckAlloc(buf: _TidyBuffer, allocSize: number, chunkSize: number): void;

declare function tidyBufClear(buf: _TidyBuffer): void;

declare function tidyBufDetach(buf: _TidyBuffer): void;

declare function tidyBufEndOfInput(buf: _TidyBuffer): Bool;

declare function tidyBufFree(buf: _TidyBuffer): void;

declare function tidyBufGetByte(buf: _TidyBuffer): number;

declare function tidyBufInit(buf: _TidyBuffer): void;

declare function tidyBufPopByte(buf: _TidyBuffer): number;

declare function tidyBufPutByte(buf: _TidyBuffer, bv: number): void;

declare function tidyBufUngetByte(buf: _TidyBuffer, bv: number): void;

declare function tidyCleanAndRepair(tdoc: _TidyDoc): number;

declare function tidyConfigErrorCount(tdoc: _TidyDoc): number;

declare function tidyCreate(): _TidyDoc;

declare function tidyDetectedGenericXml(tdoc: _TidyDoc): Bool;

declare function tidyDetectedHtmlVersion(tdoc: _TidyDoc): number;

declare function tidyDetectedXhtml(tdoc: _TidyDoc): Bool;

declare function tidyErrorCount(tdoc: _TidyDoc): number;

declare function tidyErrorSummary(tdoc: _TidyDoc): void;

declare function tidyFileExists(filename: string | any): Bool;

declare function tidyGeneralInfo(tdoc: _TidyDoc): void;

declare function tidyGetAppData(tdoc: _TidyDoc): any;

declare function tidyGetBody(tdoc: _TidyDoc): _TidyNode;

declare function tidyGetByte(source: TidyInputSource): number;

declare function tidyGetChild(tnod: _TidyNode): _TidyNode;

declare function tidyGetHead(tdoc: _TidyDoc): _TidyNode;

declare function tidyGetHtml(tdoc: _TidyDoc): _TidyNode;

declare function tidyGetNext(tnod: _TidyNode): _TidyNode;

declare function tidyGetNextOption(tdoc: _TidyDoc, pos: _TidyIterator): _TidyOption;

declare function tidyGetOption(tdoc: _TidyDoc, optId: TidyOptionId): _TidyOption;

declare function tidyGetOptionByName(tdoc: _TidyDoc, optnam: string | any): _TidyOption;

declare function tidyGetOptionList(tdoc: _TidyDoc): _TidyIterator;

declare function tidyGetParent(tnod: _TidyNode): _TidyNode;

declare function tidyGetPrev(tnod: _TidyNode): _TidyNode;

declare function tidyGetRoot(tdoc: _TidyDoc): _TidyNode;

declare function tidyInitInputBuffer(inp: TidyInputSource, buf: _TidyBuffer): void;

declare function tidyInitOutputBuffer(outp: TidyOutputSink, buf: _TidyBuffer): void;

declare function tidyInitSink(sink: TidyOutputSink, snkData: any, pbFunc: (p1: any, p2: number) => void): Bool;

declare function tidyInitSource(source: TidyInputSource, srcData: any, gbFunc: (p1: any) => number, ugbFunc: (p1: any, p2: number) => void, endFunc: (p1: any) => Bool): Bool;

declare function tidyIsEOF(source: TidyInputSource): Bool;

declare function tidyLoadConfig(tdoc: _TidyDoc, configFile: string | any): number;

declare function tidyLoadConfigEnc(tdoc: _TidyDoc, configFile: string | any, charenc: string | any): number;

declare function tidyNodeColumn(tnod: _TidyNode): number;

declare function tidyNodeGetId(tnod: _TidyNode): TidyTagId;

declare function tidyNodeGetName(tnod: _TidyNode): string;

declare function tidyNodeGetText(tdoc: _TidyDoc, tnod: _TidyNode, buf: _TidyBuffer): Bool;

declare function tidyNodeGetType(tnod: _TidyNode): TidyNodeType;

declare function tidyNodeHasText(tdoc: _TidyDoc, tnod: _TidyNode): Bool;

declare function tidyNodeIsA(tnod: _TidyNode): Bool;

declare function tidyNodeIsADDRESS(tnod: _TidyNode): Bool;

declare function tidyNodeIsAPPLET(tnod: _TidyNode): Bool;

declare function tidyNodeIsAREA(tnod: _TidyNode): Bool;

declare function tidyNodeIsB(tnod: _TidyNode): Bool;

declare function tidyNodeIsBASE(tnod: _TidyNode): Bool;

declare function tidyNodeIsBASEFONT(tnod: _TidyNode): Bool;

declare function tidyNodeIsBIG(tnod: _TidyNode): Bool;

declare function tidyNodeIsBLINK(tnod: _TidyNode): Bool;

declare function tidyNodeIsBLOCKQUOTE(tnod: _TidyNode): Bool;

declare function tidyNodeIsBODY(tnod: _TidyNode): Bool;

declare function tidyNodeIsBR(tnod: _TidyNode): Bool;

declare function tidyNodeIsCAPTION(tnod: _TidyNode): Bool;

declare function tidyNodeIsCENTER(tnod: _TidyNode): Bool;

declare function tidyNodeIsCOL(tnod: _TidyNode): Bool;

declare function tidyNodeIsCOLGROUP(tnod: _TidyNode): Bool;

declare function tidyNodeIsDD(tnod: _TidyNode): Bool;

declare function tidyNodeIsDIR(tnod: _TidyNode): Bool;

declare function tidyNodeIsDIV(tnod: _TidyNode): Bool;

declare function tidyNodeIsDL(tnod: _TidyNode): Bool;

declare function tidyNodeIsDT(tnod: _TidyNode): Bool;

declare function tidyNodeIsEM(tnod: _TidyNode): Bool;

declare function tidyNodeIsEMBED(tnod: _TidyNode): Bool;

declare function tidyNodeIsFONT(tnod: _TidyNode): Bool;

declare function tidyNodeIsFORM(tnod: _TidyNode): Bool;

declare function tidyNodeIsFRAME(tnod: _TidyNode): Bool;

declare function tidyNodeIsFRAMESET(tnod: _TidyNode): Bool;

declare function tidyNodeIsH1(tnod: _TidyNode): Bool;

declare function tidyNodeIsH2(tnod: _TidyNode): Bool;

declare function tidyNodeIsH3(tnod: _TidyNode): Bool;

declare function tidyNodeIsH4(tnod: _TidyNode): Bool;

declare function tidyNodeIsH5(tnod: _TidyNode): Bool;

declare function tidyNodeIsH6(tnod: _TidyNode): Bool;

declare function tidyNodeIsHEAD(tnod: _TidyNode): Bool;

declare function tidyNodeIsHR(tnod: _TidyNode): Bool;

declare function tidyNodeIsHTML(tnod: _TidyNode): Bool;

declare function tidyNodeIsHeader(tnod: _TidyNode): Bool;

declare function tidyNodeIsI(tnod: _TidyNode): Bool;

declare function tidyNodeIsIFRAME(tnod: _TidyNode): Bool;

declare function tidyNodeIsIMG(tnod: _TidyNode): Bool;

declare function tidyNodeIsINPUT(tnod: _TidyNode): Bool;

declare function tidyNodeIsISINDEX(tnod: _TidyNode): Bool;

declare function tidyNodeIsLABEL(tnod: _TidyNode): Bool;

declare function tidyNodeIsLAYER(tnod: _TidyNode): Bool;

declare function tidyNodeIsLI(tnod: _TidyNode): Bool;

declare function tidyNodeIsLINK(tnod: _TidyNode): Bool;

declare function tidyNodeIsLISTING(tnod: _TidyNode): Bool;

declare function tidyNodeIsMAP(tnod: _TidyNode): Bool;

declare function tidyNodeIsMARQUEE(tnod: _TidyNode): Bool;

declare function tidyNodeIsMENU(tnod: _TidyNode): Bool;

declare function tidyNodeIsMETA(tnod: _TidyNode): Bool;

declare function tidyNodeIsNOBR(tnod: _TidyNode): Bool;

declare function tidyNodeIsNOFRAMES(tnod: _TidyNode): Bool;

declare function tidyNodeIsNOSCRIPT(tnod: _TidyNode): Bool;

declare function tidyNodeIsOBJECT(tnod: _TidyNode): Bool;

declare function tidyNodeIsOL(tnod: _TidyNode): Bool;

declare function tidyNodeIsOPTGROUP(tnod: _TidyNode): Bool;

declare function tidyNodeIsOPTION(tnod: _TidyNode): Bool;

declare function tidyNodeIsP(tnod: _TidyNode): Bool;

declare function tidyNodeIsPARAM(tnod: _TidyNode): Bool;

declare function tidyNodeIsPRE(tnod: _TidyNode): Bool;

declare function tidyNodeIsProp(tdoc: _TidyDoc, tnod: _TidyNode): Bool;

declare function tidyNodeIsQ(tnod: _TidyNode): Bool;

declare function tidyNodeIsS(tnod: _TidyNode): Bool;

declare function tidyNodeIsSCRIPT(tnod: _TidyNode): Bool;

declare function tidyNodeIsSELECT(tnod: _TidyNode): Bool;

declare function tidyNodeIsSMALL(tnod: _TidyNode): Bool;

declare function tidyNodeIsSPACER(tnod: _TidyNode): Bool;

declare function tidyNodeIsSPAN(tnod: _TidyNode): Bool;

declare function tidyNodeIsSTRIKE(tnod: _TidyNode): Bool;

declare function tidyNodeIsSTRONG(tnod: _TidyNode): Bool;

declare function tidyNodeIsSTYLE(tnod: _TidyNode): Bool;

declare function tidyNodeIsTABLE(tnod: _TidyNode): Bool;

declare function tidyNodeIsTD(tnod: _TidyNode): Bool;

declare function tidyNodeIsTEXTAREA(tnod: _TidyNode): Bool;

declare function tidyNodeIsTH(tnod: _TidyNode): Bool;

declare function tidyNodeIsTITLE(tnod: _TidyNode): Bool;

declare function tidyNodeIsTR(tnod: _TidyNode): Bool;

declare function tidyNodeIsText(tnod: _TidyNode): Bool;

declare function tidyNodeIsU(tnod: _TidyNode): Bool;

declare function tidyNodeIsUL(tnod: _TidyNode): Bool;

declare function tidyNodeIsWBR(tnod: _TidyNode): Bool;

declare function tidyNodeIsXMP(tnod: _TidyNode): Bool;

declare function tidyNodeLine(tnod: _TidyNode): number;

declare function tidyOptCopyConfig(tdocTo: _TidyDoc, tdocFrom: _TidyDoc): Bool;

declare function tidyOptDiffThanDefault(tdoc: _TidyDoc): Bool;

declare function tidyOptDiffThanSnapshot(tdoc: _TidyDoc): Bool;

declare function tidyOptGetBool(tdoc: _TidyDoc, optId: TidyOptionId): Bool;

declare function tidyOptGetCategory(opt: _TidyOption): TidyConfigCategory;

declare function tidyOptGetCurrPick(tdoc: _TidyDoc, optId: TidyOptionId): string;

declare function tidyOptGetDeclTagList(tdoc: _TidyDoc): _TidyIterator;

declare function tidyOptGetDefault(opt: _TidyOption): string;

declare function tidyOptGetDefaultBool(opt: _TidyOption): Bool;

declare function tidyOptGetDefaultInt(opt: _TidyOption): number;

declare function tidyOptGetDoc(tdoc: _TidyDoc, opt: _TidyOption): string;

declare function tidyOptGetDocLinksList(tdoc: _TidyDoc, opt: _TidyOption): _TidyIterator;

declare function tidyOptGetEncName(tdoc: _TidyDoc, optId: TidyOptionId): string;

declare function tidyOptGetId(opt: _TidyOption): TidyOptionId;

declare function tidyOptGetIdForName(optnam: string | any): TidyOptionId;

declare function tidyOptGetInt(tdoc: _TidyDoc, optId: TidyOptionId): number;

declare function tidyOptGetName(opt: _TidyOption): string;

declare function tidyOptGetNextDeclTag(tdoc: _TidyDoc, optId: TidyOptionId, iter: _TidyIterator): string;

declare function tidyOptGetNextDocLinks(tdoc: _TidyDoc, pos: _TidyIterator): _TidyOption;

declare function tidyOptGetNextPick(opt: _TidyOption, pos: _TidyIterator): string;

declare function tidyOptGetPickList(opt: _TidyOption): _TidyIterator;

declare function tidyOptGetType(opt: _TidyOption): TidyOptionType;

declare function tidyOptGetValue(tdoc: _TidyDoc, optId: TidyOptionId): string;

declare function tidyOptIsReadOnly(opt: _TidyOption): Bool;

declare function tidyOptParseValue(tdoc: _TidyDoc, optnam: string | any, val: string | any): Bool;

declare function tidyOptResetAllToDefault(tdoc: _TidyDoc): Bool;

declare function tidyOptResetToDefault(tdoc: _TidyDoc, opt: TidyOptionId): Bool;

declare function tidyOptResetToSnapshot(tdoc: _TidyDoc): Bool;

declare function tidyOptSaveFile(tdoc: _TidyDoc, cfgfil: string | any): number;

declare function tidyOptSaveSink(tdoc: _TidyDoc, sink: TidyOutputSink): number;

declare function tidyOptSetBool(tdoc: _TidyDoc, optId: TidyOptionId, val: Bool): Bool;

declare function tidyOptSetInt(tdoc: _TidyDoc, optId: TidyOptionId, val: number): Bool;

declare function tidyOptSetValue(tdoc: _TidyDoc, optId: TidyOptionId, val: string | any): Bool;

declare function tidyOptSnapshot(tdoc: _TidyDoc): Bool;

declare function tidyParseBuffer(tdoc: _TidyDoc, buf: _TidyBuffer): number;

declare function tidyParseFile(tdoc: _TidyDoc, filename: string | any): number;

declare function tidyParseSource(tdoc: _TidyDoc, source: TidyInputSource): number;

declare function tidyParseStdin(tdoc: _TidyDoc): number;

declare function tidyParseString(tdoc: _TidyDoc, content: string | any): number;

declare function tidyPutByte(sink: TidyOutputSink, byteValue: number): void;

declare function tidyRelease(tdoc: _TidyDoc): void;

declare function tidyReleaseDate(): string;

declare function tidyRunDiagnostics(tdoc: _TidyDoc): number;

declare function tidySaveBuffer(tdoc: _TidyDoc, buf: _TidyBuffer): number;

declare function tidySaveFile(tdoc: _TidyDoc, filename: string | any): number;

declare function tidySaveSink(tdoc: _TidyDoc, sink: TidyOutputSink): number;

declare function tidySaveStdout(tdoc: _TidyDoc): number;

declare function tidySaveString(tdoc: _TidyDoc, buffer: string | any, buflen: number): number;

declare function tidySetAppData(tdoc: _TidyDoc, appData: any): void;

declare function tidySetCharEncoding(tdoc: _TidyDoc, encnam: string | any): number;

declare function tidySetErrorBuffer(tdoc: _TidyDoc, errbuf: _TidyBuffer): number;

declare function tidySetErrorFile(tdoc: _TidyDoc, errfilnam: string | any): FILE;

declare function tidySetErrorSink(tdoc: _TidyDoc, sink: TidyOutputSink): number;

declare function tidySetFreeCall(ffree: (p1: any) => void): Bool;

declare function tidySetInCharEncoding(tdoc: _TidyDoc, encnam: string | any): number;

declare function tidySetMallocCall(fmalloc: (p1: number) => any): Bool;

declare function tidySetOptionCallback(tdoc: _TidyDoc, pOptCallback: (p1: string, p2: string) => Bool): Bool;

declare function tidySetOutCharEncoding(tdoc: _TidyDoc, encnam: string | any): number;

declare function tidySetPanicCall(fpanic: (p1: string) => void): Bool;

declare function tidySetReallocCall(frealloc: (p1: any, p2: number) => any): Bool;

declare function tidySetReportFilter(tdoc: _TidyDoc, filtCallback: (p1: _TidyDoc, p2: TidyReportLevel, p3: number, p4: number, p5: string) => Bool): Bool;

declare function tidyStatus(tdoc: _TidyDoc): number;

declare function tidyUngetByte(source: TidyInputSource, byteValue: number): void;

declare function tidyWarningCount(tdoc: _TidyDoc): number;
