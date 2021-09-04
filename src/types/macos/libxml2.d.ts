
declare function UTF8ToHtml(out: string | any, outlen: number, in_: string | any, inlen: number): number;

declare function UTF8Toisolat1(out: string | any, outlen: number, in_: string | any, inlen: number): number;

declare function __docbDefaultSAXHandler(): _xmlSAXHandlerV1;

declare function __htmlDefaultSAXHandler(): _xmlSAXHandlerV1;

declare function __oldXMLWDcompatibility(): number;

declare function __xmlBufferAllocScheme(): xmlBufferAllocationScheme;

declare function __xmlDefaultBufferSize(): number;

declare function __xmlDefaultSAXHandler(): _xmlSAXHandlerV1;

declare function __xmlDefaultSAXLocator(): _xmlSAXLocator;

declare function __xmlDeregisterNodeDefaultValue(): (p1: _xmlNode) => void;

declare function __xmlDoValidityCheckingDefaultValue(): number;

declare function __xmlGenericError(): (p1: any, p2: string) => void;

declare function __xmlGenericErrorContext(): any;

declare function __xmlGetWarningsDefaultValue(): number;

declare function __xmlIndentTreeOutput(): number;

declare function __xmlKeepBlanksDefaultValue(): number;

declare function __xmlLastError(): _xmlError;

declare function __xmlLineNumbersDefaultValue(): number;

declare function __xmlLoadExtDtdDefaultValue(): number;

declare function __xmlOutputBufferCreateFilename(URI: string | any, encoder: _xmlCharEncodingHandler, compression: number): _xmlOutputBuffer;

declare function __xmlOutputBufferCreateFilenameValue(): (p1: string, p2: _xmlCharEncodingHandler, p3: number) => _xmlOutputBuffer;

declare function __xmlParserDebugEntities(): number;

declare function __xmlParserInputBufferCreateFilename(URI: string | any, enc: xmlCharEncoding): _xmlParserInputBuffer;

declare function __xmlParserInputBufferCreateFilenameValue(): (p1: string, p2: xmlCharEncoding) => _xmlParserInputBuffer;

declare function __xmlParserVersion(): string;

declare function __xmlPedanticParserDefaultValue(): number;

declare function __xmlRegisterNodeDefaultValue(): (p1: _xmlNode) => void;

declare function __xmlSaveNoEmptyTags(): number;

declare function __xmlStructuredError(): (p1: any, p2: _xmlError) => void;

declare function __xmlStructuredErrorContext(): any;

declare function __xmlSubstituteEntitiesDefaultValue(): number;

declare function __xmlTreeIndentString(): string;

interface _htmlElemDesc {
	name: string;
	startTag: number;
	endTag: number;
	saveEndTag: number;
	empty: number;
	depr: number;
	dtd: number;
	isinline: number;
	desc: string;
	subelts: string;
	defaultsubelt: string;
	attrs_opt: string;
	attrs_depr: string;
	attrs_req: string;
}
declare var _htmlElemDesc: _htmlElemDesc;

interface _htmlEntityDesc {
	value: number;
	name: string;
	desc: string;
}
declare var _htmlEntityDesc: _htmlEntityDesc;

interface _uconv_t {
	uconv: any;
	utf8: any;
}
declare var _uconv_t: _uconv_t;

interface _xlinkHandler {
	simple: (p1: any, p2: _xmlNode, p3: string, p4: string, p5: string) => void;
	extended: (p1: any, p2: _xmlNode, p3: number, p4: string, p5: string, p6: number, p7: string, p8: string, p9: xlinkShow, p10: xlinkActuate, p11: number, p12: string, p13: string) => void;
	set: (p1: any, p2: _xmlNode, p3: number, p4: string, p5: string, p6: number, p7: string, p8: string) => void;
}
declare var _xlinkHandler: _xlinkHandler;

interface _xmlAttr {
	_private: any;
	type: xmlElementType;
	name: string;
	children: _xmlNode;
	last: _xmlNode;
	parent: _xmlNode;
	next: _xmlAttr;
	prev: _xmlAttr;
	doc: _xmlDoc;
	ns: _xmlNs;
	atype: xmlAttributeType;
	psvi: any;
}
declare var _xmlAttr: _xmlAttr;

interface _xmlAttribute {
	_private: any;
	type: xmlElementType;
	name: string;
	children: _xmlNode;
	last: _xmlNode;
	parent: _xmlDtd;
	next: _xmlNode;
	prev: _xmlNode;
	doc: _xmlDoc;
	nexth: _xmlAttribute;
	atype: xmlAttributeType;
	def: xmlAttributeDefault;
	defaultValue: string;
	tree: _xmlEnumeration;
	prefix: string;
	elem: string;
}
declare var _xmlAttribute: _xmlAttribute;

interface _xmlBuffer {
	content: string;
	use: number;
	size: number;
	alloc: xmlBufferAllocationScheme;
	contentIO: string;
}
declare var _xmlBuffer: _xmlBuffer;

interface _xmlChLRange {
	low: number;
	high: number;
}
declare var _xmlChLRange: _xmlChLRange;

interface _xmlChRangeGroup {
	nbShortRange: number;
	nbLongRange: number;
	shortRange: _xmlChSRange;
	longRange: _xmlChLRange;
}
declare var _xmlChRangeGroup: _xmlChRangeGroup;

interface _xmlChSRange {
	low: number;
	high: number;
}
declare var _xmlChSRange: _xmlChSRange;

interface _xmlCharEncodingHandler {
	name: string;
	input: (p1: string, p2: number, p3: string, p4: number) => number;
	output: (p1: string, p2: number, p3: string, p4: number) => number;
	uconv_in: _uconv_t;
	uconv_out: _uconv_t;
}
declare var _xmlCharEncodingHandler: _xmlCharEncodingHandler;

interface _xmlDOMWrapCtxt {
	_private: any;
	type: number;
	namespaceMap: any;
	getNsForNodeFunc: (p1: _xmlDOMWrapCtxt, p2: _xmlNode, p3: string, p4: string) => _xmlNs;
}
declare var _xmlDOMWrapCtxt: _xmlDOMWrapCtxt;

interface _xmlDoc {
	_private: any;
	type: xmlElementType;
	name: string;
	children: _xmlNode;
	last: _xmlNode;
	parent: _xmlNode;
	next: _xmlNode;
	prev: _xmlNode;
	doc: _xmlDoc;
	compression: number;
	standalone: number;
	intSubset: _xmlDtd;
	extSubset: _xmlDtd;
	oldNs: _xmlNs;
	version: string;
	encoding: string;
	ids: any;
	refs: any;
	URL: string;
	charset: number;
	dict: any;
	psvi: any;
	parseFlags: number;
	properties: number;
}
declare var _xmlDoc: _xmlDoc;

interface _xmlDtd {
	_private: any;
	type: xmlElementType;
	name: string;
	children: _xmlNode;
	last: _xmlNode;
	parent: _xmlDoc;
	next: _xmlNode;
	prev: _xmlNode;
	doc: _xmlDoc;
	notations: any;
	elements: any;
	attributes: any;
	entities: any;
	ExternalID: string;
	SystemID: string;
	pentities: any;
}
declare var _xmlDtd: _xmlDtd;

interface _xmlElement {
	_private: any;
	type: xmlElementType;
	name: string;
	children: _xmlNode;
	last: _xmlNode;
	parent: _xmlDtd;
	next: _xmlNode;
	prev: _xmlNode;
	doc: _xmlDoc;
	etype: xmlElementTypeVal;
	content: _xmlElementContent;
	attributes: _xmlAttribute;
	prefix: string;
	contModel: any;
}
declare var _xmlElement: _xmlElement;

interface _xmlElementContent {
	type: xmlElementContentType;
	ocur: xmlElementContentOccur;
	name: string;
	c1: _xmlElementContent;
	c2: _xmlElementContent;
	parent: _xmlElementContent;
	prefix: string;
}
declare var _xmlElementContent: _xmlElementContent;

interface _xmlEntity {
	_private: any;
	type: xmlElementType;
	name: string;
	children: _xmlNode;
	last: _xmlNode;
	parent: _xmlDtd;
	next: _xmlNode;
	prev: _xmlNode;
	doc: _xmlDoc;
	orig: string;
	content: string;
	length: number;
	etype: xmlEntityType;
	ExternalID: string;
	SystemID: string;
	nexte: _xmlEntity;
	URI: string;
	owner: number;
	checked: number;
}
declare var _xmlEntity: _xmlEntity;

interface _xmlEnumeration {
	next: _xmlEnumeration;
	name: string;
}
declare var _xmlEnumeration: _xmlEnumeration;

interface _xmlError {
	domain: number;
	code: number;
	message: string;
	level: xmlErrorLevel;
	file: string;
	line: number;
	str1: string;
	str2: string;
	str3: string;
	int1: number;
	int2: number;
	ctxt: any;
	node: any;
}
declare var _xmlError: _xmlError;

interface _xmlGlobalState {
	xmlParserVersion: string;
	xmlDefaultSAXLocator: _xmlSAXLocator;
	xmlDefaultSAXHandler: _xmlSAXHandlerV1;
	docbDefaultSAXHandler: _xmlSAXHandlerV1;
	htmlDefaultSAXHandler: _xmlSAXHandlerV1;
	xmlFree: (p1: any) => void;
	xmlMalloc: (p1: number) => any;
	xmlMemStrdup: (p1: string) => string;
	xmlRealloc: (p1: any, p2: number) => any;
	xmlGenericError: (p1: any, p2: string) => void;
	xmlStructuredError: (p1: any, p2: _xmlError) => void;
	xmlGenericErrorContext: any;
	oldXMLWDcompatibility: number;
	xmlBufferAllocScheme: xmlBufferAllocationScheme;
	xmlDefaultBufferSize: number;
	xmlSubstituteEntitiesDefaultValue: number;
	xmlDoValidityCheckingDefaultValue: number;
	xmlGetWarningsDefaultValue: number;
	xmlKeepBlanksDefaultValue: number;
	xmlLineNumbersDefaultValue: number;
	xmlLoadExtDtdDefaultValue: number;
	xmlParserDebugEntities: number;
	xmlPedanticParserDefaultValue: number;
	xmlSaveNoEmptyTags: number;
	xmlIndentTreeOutput: number;
	xmlTreeIndentString: string;
	xmlRegisterNodeDefaultValue: (p1: _xmlNode) => void;
	xmlDeregisterNodeDefaultValue: (p1: _xmlNode) => void;
	xmlMallocAtomic: (p1: number) => any;
	xmlLastError: _xmlError;
	xmlParserInputBufferCreateFilenameValue: (p1: string, p2: xmlCharEncoding) => _xmlParserInputBuffer;
	xmlOutputBufferCreateFilenameValue: (p1: string, p2: _xmlCharEncodingHandler, p3: number) => _xmlOutputBuffer;
	xmlStructuredErrorContext: any;
}
declare var _xmlGlobalState: _xmlGlobalState;

interface _xmlID {
	next: _xmlID;
	value: string;
	attr: _xmlAttr;
	name: string;
	lineno: number;
	doc: _xmlDoc;
}
declare var _xmlID: _xmlID;

interface _xmlLocationSet {
	locNr: number;
	locMax: number;
	locTab: _xmlXPathObject;
}
declare var _xmlLocationSet: _xmlLocationSet;

interface _xmlNode {
	_private: any;
	type: xmlElementType;
	name: string;
	children: _xmlNode;
	last: _xmlNode;
	parent: _xmlNode;
	next: _xmlNode;
	prev: _xmlNode;
	doc: _xmlDoc;
	ns: _xmlNs;
	content: string;
	properties: _xmlAttr;
	nsDef: _xmlNs;
	psvi: any;
	line: number;
	extra: number;
}
declare var _xmlNode: _xmlNode;

interface _xmlNodeSet {
	nodeNr: number;
	nodeMax: number;
	nodeTab: _xmlNode;
}
declare var _xmlNodeSet: _xmlNodeSet;

interface _xmlNotation {
	name: string;
	PublicID: string;
	SystemID: string;
}
declare var _xmlNotation: _xmlNotation;

interface _xmlNs {
	next: _xmlNs;
	type: xmlElementType;
	href: string;
	prefix: string;
	_private: any;
	context: _xmlDoc;
}
declare var _xmlNs: _xmlNs;

interface _xmlOutputBuffer {
	context: any;
	writecallback: (p1: any, p2: string, p3: number) => number;
	closecallback: (p1: any) => number;
	encoder: _xmlCharEncodingHandler;
	buffer: any;
	conv: any;
	written: number;
	error: number;
}
declare var _xmlOutputBuffer: _xmlOutputBuffer;

interface _xmlParserCtxt {
	sax: _xmlSAXHandler;
	userData: any;
	myDoc: _xmlDoc;
	wellFormed: number;
	replaceEntities: number;
	version: string;
	encoding: string;
	standalone: number;
	html: number;
	input: _xmlParserInput;
	inputNr: number;
	inputMax: number;
	inputTab: _xmlParserInput;
	node: _xmlNode;
	nodeNr: number;
	nodeMax: number;
	nodeTab: _xmlNode;
	record_info: number;
	node_seq: _xmlParserNodeInfoSeq;
	errNo: number;
	hasExternalSubset: number;
	hasPErefs: number;
	external: number;
	valid: number;
	validate: number;
	vctxt: _xmlValidCtxt;
	instate: xmlParserInputState;
	token: number;
	directory: string;
	name: string;
	nameNr: number;
	nameMax: number;
	nameTab: string;
	nbChars: number;
	checkIndex: number;
	keepBlanks: number;
	disableSAX: number;
	inSubset: number;
	intSubName: string;
	extSubURI: string;
	extSubSystem: string;
	space: number;
	spaceNr: number;
	spaceMax: number;
	spaceTab: number;
	depth: number;
	entity: _xmlParserInput;
	charset: number;
	nodelen: number;
	nodemem: number;
	pedantic: number;
	_private: any;
	loadsubset: number;
	linenumbers: number;
	catalogs: any;
	recovery: number;
	progressive: number;
	dict: any;
	atts: string;
	maxatts: number;
	docdict: number;
	str_xml: string;
	str_xmlns: string;
	str_xml_ns: string;
	sax2: number;
	nsNr: number;
	nsMax: number;
	nsTab: string;
	attallocs: number;
	pushTab: any;
	attsDefault: any;
	attsSpecial: any;
	nsWellFormed: number;
	options: number;
	dictNames: number;
	freeElemsNr: number;
	freeElems: _xmlNode;
	freeAttrsNr: number;
	freeAttrs: _xmlAttr;
	lastError: _xmlError;
	parseMode: xmlParserMode;
	nbentities: number;
	sizeentities: number;
	nodeInfo: _xmlParserNodeInfo;
	nodeInfoNr: number;
	nodeInfoMax: number;
	nodeInfoTab: _xmlParserNodeInfo;
	input_id: number;
	sizeentcopy: number;
}
declare var _xmlParserCtxt: _xmlParserCtxt;

interface _xmlParserInput {
	buf: _xmlParserInputBuffer;
	filename: string;
	directory: string;
	base: string;
	cur: string;
	end: string;
	length: number;
	line: number;
	col: number;
	consumed: number;
	free: (p1: string) => void;
	encoding: string;
	version: string;
	standalone: number;
	id: number;
}
declare var _xmlParserInput: _xmlParserInput;

interface _xmlParserInputBuffer {
	context: any;
	readcallback: (p1: any, p2: string, p3: number) => number;
	closecallback: (p1: any) => number;
	encoder: _xmlCharEncodingHandler;
	buffer: any;
	raw: any;
	compressed: number;
	error: number;
	rawconsumed: number;
}
declare var _xmlParserInputBuffer: _xmlParserInputBuffer;

interface _xmlParserNodeInfo {
	node: _xmlNode;
	begin_pos: number;
	begin_line: number;
	end_pos: number;
	end_line: number;
}
declare var _xmlParserNodeInfo: _xmlParserNodeInfo;

interface _xmlParserNodeInfoSeq {
	maximum: number;
	length: number;
	buffer: _xmlParserNodeInfo;
}
declare var _xmlParserNodeInfoSeq: _xmlParserNodeInfoSeq;

interface _xmlRef {
	next: _xmlRef;
	value: string;
	attr: _xmlAttr;
	name: string;
	lineno: number;
}
declare var _xmlRef: _xmlRef;

interface _xmlSAXHandler {
	internalSubset: (p1: any, p2: string, p3: string, p4: string) => void;
	isStandalone: (p1: any) => number;
	hasInternalSubset: (p1: any) => number;
	hasExternalSubset: (p1: any) => number;
	resolveEntity: (p1: any, p2: string, p3: string) => _xmlParserInput;
	getEntity: (p1: any, p2: string) => _xmlEntity;
	entityDecl: (p1: any, p2: string, p3: number, p4: string, p5: string, p6: string) => void;
	notationDecl: (p1: any, p2: string, p3: string, p4: string) => void;
	attributeDecl: (p1: any, p2: string, p3: string, p4: number, p5: number, p6: string, p7: _xmlEnumeration) => void;
	elementDecl: (p1: any, p2: string, p3: number, p4: _xmlElementContent) => void;
	unparsedEntityDecl: (p1: any, p2: string, p3: string, p4: string, p5: string) => void;
	setDocumentLocator: (p1: any, p2: _xmlSAXLocator) => void;
	startDocument: (p1: any) => void;
	endDocument: (p1: any) => void;
	startElement: (p1: any, p2: string, p3: string) => void;
	endElement: (p1: any, p2: string) => void;
	reference: (p1: any, p2: string) => void;
	characters: (p1: any, p2: string, p3: number) => void;
	ignorableWhitespace: (p1: any, p2: string, p3: number) => void;
	processingInstruction: (p1: any, p2: string, p3: string) => void;
	comment: (p1: any, p2: string) => void;
	warning: (p1: any, p2: string) => void;
	error: (p1: any, p2: string) => void;
	fatalError: (p1: any, p2: string) => void;
	getParameterEntity: (p1: any, p2: string) => _xmlEntity;
	cdataBlock: (p1: any, p2: string, p3: number) => void;
	externalSubset: (p1: any, p2: string, p3: string, p4: string) => void;
	initialized: number;
	_private: any;
	startElementNs: (p1: any, p2: string, p3: string, p4: string, p5: number, p6: string, p7: number, p8: number, p9: string) => void;
	endElementNs: (p1: any, p2: string, p3: string, p4: string) => void;
	serror: (p1: any, p2: _xmlError) => void;
}
declare var _xmlSAXHandler: _xmlSAXHandler;

interface _xmlSAXHandlerV1 {
	internalSubset: (p1: any, p2: string, p3: string, p4: string) => void;
	isStandalone: (p1: any) => number;
	hasInternalSubset: (p1: any) => number;
	hasExternalSubset: (p1: any) => number;
	resolveEntity: (p1: any, p2: string, p3: string) => _xmlParserInput;
	getEntity: (p1: any, p2: string) => _xmlEntity;
	entityDecl: (p1: any, p2: string, p3: number, p4: string, p5: string, p6: string) => void;
	notationDecl: (p1: any, p2: string, p3: string, p4: string) => void;
	attributeDecl: (p1: any, p2: string, p3: string, p4: number, p5: number, p6: string, p7: _xmlEnumeration) => void;
	elementDecl: (p1: any, p2: string, p3: number, p4: _xmlElementContent) => void;
	unparsedEntityDecl: (p1: any, p2: string, p3: string, p4: string, p5: string) => void;
	setDocumentLocator: (p1: any, p2: _xmlSAXLocator) => void;
	startDocument: (p1: any) => void;
	endDocument: (p1: any) => void;
	startElement: (p1: any, p2: string, p3: string) => void;
	endElement: (p1: any, p2: string) => void;
	reference: (p1: any, p2: string) => void;
	characters: (p1: any, p2: string, p3: number) => void;
	ignorableWhitespace: (p1: any, p2: string, p3: number) => void;
	processingInstruction: (p1: any, p2: string, p3: string) => void;
	comment: (p1: any, p2: string) => void;
	warning: (p1: any, p2: string) => void;
	error: (p1: any, p2: string) => void;
	fatalError: (p1: any, p2: string) => void;
	getParameterEntity: (p1: any, p2: string) => _xmlEntity;
	cdataBlock: (p1: any, p2: string, p3: number) => void;
	externalSubset: (p1: any, p2: string, p3: string, p4: string) => void;
	initialized: number;
}
declare var _xmlSAXHandlerV1: _xmlSAXHandlerV1;

interface _xmlSAXLocator {
	getPublicId: (p1: any) => string;
	getSystemId: (p1: any) => string;
	getLineNumber: (p1: any) => number;
	getColumnNumber: (p1: any) => number;
}
declare var _xmlSAXLocator: _xmlSAXLocator;

interface _xmlSchema {
	name: string;
	targetNamespace: string;
	version: string;
	id: string;
	doc: _xmlDoc;
	annot: _xmlSchemaAnnot;
	flags: number;
	typeDecl: any;
	attrDecl: any;
	attrgrpDecl: any;
	elemDecl: any;
	notaDecl: any;
	schemasImports: any;
	_private: any;
	groupDecl: any;
	dict: any;
	includes: any;
	preserve: number;
	counter: number;
	idcDef: any;
	volatiles: any;
}
declare var _xmlSchema: _xmlSchema;

interface _xmlSchemaAnnot {
	next: _xmlSchemaAnnot;
	content: _xmlNode;
}
declare var _xmlSchemaAnnot: _xmlSchemaAnnot;

interface _xmlSchemaAttribute {
	type: xmlSchemaTypeType;
	next: _xmlSchemaAttribute;
	name: string;
	id: string;
	ref: string;
	refNs: string;
	typeName: string;
	typeNs: string;
	annot: _xmlSchemaAnnot;
	base: _xmlSchemaType;
	occurs: number;
	defValue: string;
	subtypes: _xmlSchemaType;
	node: _xmlNode;
	targetNamespace: string;
	flags: number;
	refPrefix: string;
	defVal: any;
	refDecl: _xmlSchemaAttribute;
}
declare var _xmlSchemaAttribute: _xmlSchemaAttribute;

interface _xmlSchemaAttributeGroup {
	type: xmlSchemaTypeType;
	next: _xmlSchemaAttribute;
	name: string;
	id: string;
	ref: string;
	refNs: string;
	annot: _xmlSchemaAnnot;
	attributes: _xmlSchemaAttribute;
	node: _xmlNode;
	flags: number;
	attributeWildcard: _xmlSchemaWildcard;
	refPrefix: string;
	refItem: _xmlSchemaAttributeGroup;
	targetNamespace: string;
	attrUses: any;
}
declare var _xmlSchemaAttributeGroup: _xmlSchemaAttributeGroup;

interface _xmlSchemaAttributeLink {
	next: _xmlSchemaAttributeLink;
	attr: _xmlSchemaAttribute;
}
declare var _xmlSchemaAttributeLink: _xmlSchemaAttributeLink;

interface _xmlSchemaElement {
	type: xmlSchemaTypeType;
	next: _xmlSchemaType;
	name: string;
	id: string;
	ref: string;
	refNs: string;
	annot: _xmlSchemaAnnot;
	subtypes: _xmlSchemaType;
	attributes: _xmlSchemaAttribute;
	node: _xmlNode;
	minOccurs: number;
	maxOccurs: number;
	flags: number;
	targetNamespace: string;
	namedType: string;
	namedTypeNs: string;
	substGroup: string;
	substGroupNs: string;
	scope: string;
	value: string;
	refDecl: _xmlSchemaElement;
	contModel: any;
	contentType: xmlSchemaContentType;
	refPrefix: string;
	defVal: any;
	idcs: any;
}
declare var _xmlSchemaElement: _xmlSchemaElement;

interface _xmlSchemaFacet {
	type: xmlSchemaTypeType;
	next: _xmlSchemaFacet;
	value: string;
	id: string;
	annot: _xmlSchemaAnnot;
	node: _xmlNode;
	fixed: number;
	whitespace: number;
	val: any;
	regexp: any;
}
declare var _xmlSchemaFacet: _xmlSchemaFacet;

interface _xmlSchemaFacetLink {
	next: _xmlSchemaFacetLink;
	facet: _xmlSchemaFacet;
}
declare var _xmlSchemaFacetLink: _xmlSchemaFacetLink;

interface _xmlSchemaNotation {
	type: xmlSchemaTypeType;
	name: string;
	annot: _xmlSchemaAnnot;
	identifier: string;
	targetNamespace: string;
}
declare var _xmlSchemaNotation: _xmlSchemaNotation;

interface _xmlSchemaType {
	type: xmlSchemaTypeType;
	next: _xmlSchemaType;
	name: string;
	id: string;
	ref: string;
	refNs: string;
	annot: _xmlSchemaAnnot;
	subtypes: _xmlSchemaType;
	attributes: _xmlSchemaAttribute;
	node: _xmlNode;
	minOccurs: number;
	maxOccurs: number;
	flags: number;
	contentType: xmlSchemaContentType;
	base: string;
	baseNs: string;
	baseType: _xmlSchemaType;
	facets: _xmlSchemaFacet;
	redef: _xmlSchemaType;
	recurse: number;
	attributeUses: _xmlSchemaAttributeLink;
	attributeWildcard: _xmlSchemaWildcard;
	builtInType: number;
	memberTypes: _xmlSchemaTypeLink;
	facetSet: _xmlSchemaFacetLink;
	refPrefix: string;
	contentTypeDef: _xmlSchemaType;
	contModel: any;
	targetNamespace: string;
	attrUses: any;
}
declare var _xmlSchemaType: _xmlSchemaType;

interface _xmlSchemaTypeLink {
	next: _xmlSchemaTypeLink;
	type: _xmlSchemaType;
}
declare var _xmlSchemaTypeLink: _xmlSchemaTypeLink;

interface _xmlSchemaWildcard {
	type: xmlSchemaTypeType;
	id: string;
	annot: _xmlSchemaAnnot;
	node: _xmlNode;
	minOccurs: number;
	maxOccurs: number;
	processContents: number;
	any: number;
	nsSet: _xmlSchemaWildcardNs;
	negNsSet: _xmlSchemaWildcardNs;
	flags: number;
}
declare var _xmlSchemaWildcard: _xmlSchemaWildcard;

interface _xmlSchemaWildcardNs {
	next: _xmlSchemaWildcardNs;
	value: string;
}
declare var _xmlSchemaWildcardNs: _xmlSchemaWildcardNs;

interface _xmlShellCtxt {
	filename: string;
	doc: _xmlDoc;
	node: _xmlNode;
	pctxt: _xmlXPathContext;
	loaded: number;
	output: FILE;
	input: (p1: string) => string;
}
declare var _xmlShellCtxt: _xmlShellCtxt;

interface _xmlURI {
	scheme: string;
	opaque: string;
	authority: string;
	server: string;
	user: string;
	port: number;
	path: string;
	query: string;
	fragment: string;
	cleanup: number;
	query_raw: string;
}
declare var _xmlURI: _xmlURI;

interface _xmlValidCtxt {
	userData: any;
	error: (p1: any, p2: string) => void;
	warning: (p1: any, p2: string) => void;
	node: _xmlNode;
	nodeNr: number;
	nodeMax: number;
	nodeTab: _xmlNode;
	finishDtd: number;
	doc: _xmlDoc;
	valid: number;
	vstate: any;
	vstateNr: number;
	vstateMax: number;
	vstateTab: any;
	am: any;
	state: any;
}
declare var _xmlValidCtxt: _xmlValidCtxt;

interface _xmlXPathAxis {
	name: string;
	func: (p1: _xmlXPathParserContext, p2: _xmlXPathObject) => _xmlXPathObject;
}
declare var _xmlXPathAxis: _xmlXPathAxis;

interface _xmlXPathContext {
	doc: _xmlDoc;
	node: _xmlNode;
	nb_variables_unused: number;
	max_variables_unused: number;
	varHash: any;
	nb_types: number;
	max_types: number;
	types: _xmlXPathType;
	nb_funcs_unused: number;
	max_funcs_unused: number;
	funcHash: any;
	nb_axis: number;
	max_axis: number;
	axis: _xmlXPathAxis;
	namespaces: _xmlNs;
	nsNr: number;
	user: any;
	contextSize: number;
	proximityPosition: number;
	xptr: number;
	here: _xmlNode;
	origin: _xmlNode;
	nsHash: any;
	varLookupFunc: (p1: any, p2: string, p3: string) => _xmlXPathObject;
	varLookupData: any;
	extra: any;
	function: string;
	functionURI: string;
	funcLookupFunc: (p1: any, p2: string, p3: string) => (p1: _xmlXPathParserContext, p2: number) => void;
	funcLookupData: any;
	tmpNsList: _xmlNs;
	tmpNsNr: number;
	userData: any;
	error: (p1: any, p2: _xmlError) => void;
	lastError: _xmlError;
	debugNode: _xmlNode;
	dict: any;
	flags: number;
	cache: any;
}
declare var _xmlXPathContext: _xmlXPathContext;

interface _xmlXPathFunct {
	name: string;
	func: (p1: _xmlXPathParserContext, p2: number) => void;
}
declare var _xmlXPathFunct: _xmlXPathFunct;

interface _xmlXPathObject {
	type: xmlXPathObjectType;
	nodesetval: _xmlNodeSet;
	boolval: number;
	floatval: number;
	stringval: string;
	user: any;
	index: number;
	user2: any;
	index2: number;
}
declare var _xmlXPathObject: _xmlXPathObject;

interface _xmlXPathParserContext {
	cur: string;
	base: string;
	error: number;
	context: _xmlXPathContext;
	value: _xmlXPathObject;
	valueNr: number;
	valueMax: number;
	valueTab: _xmlXPathObject;
	comp: any;
	xptr: number;
	ancestor: _xmlNode;
	valueFrame: number;
}
declare var _xmlXPathParserContext: _xmlXPathParserContext;

interface _xmlXPathType {
	name: string;
	func: (p1: _xmlXPathObject, p2: number) => number;
}
declare var _xmlXPathType: _xmlXPathType;

interface _xmlXPathVariable {
	name: string;
	value: _xmlXPathObject;
}
declare var _xmlXPathVariable: _xmlXPathVariable;

declare function attribute(ctx: any, fullname: string | any, value: string | any): void;

declare function attributeDecl(ctx: any, elem: string | any, fullname: string | any, type: number, def: number, defaultValue: string | any, tree: _xmlEnumeration): void;

declare function cdataBlock(ctx: any, value: string | any, len: number): void;

declare function characters(ctx: any, ch: string | any, len: number): void;

declare function checkNamespace(ctx: any, nameSpace: string | any): number;

declare function comment(ctx: any, value: string | any): void;

declare function docbDefaultSAXHandlerInit(): void;

declare function elementDecl(ctx: any, name: string | any, type: number, content: _xmlElementContent): void;

declare var emptyExp: any;

declare function endDocument(ctx: any): void;

declare function endElement(ctx: any, name: string | any): void;

declare function entityDecl(ctx: any, name: string | any, type: number, publicId: string | any, systemId: string | any, content: string | any): void;

declare function externalSubset(ctx: any, name: string | any, ExternalID: string | any, SystemID: string | any): void;

declare var forbiddenExp: any;

declare function getColumnNumber(ctx: any): number;

declare function getEntity(ctx: any, name: string | any): _xmlEntity;

declare function getLineNumber(ctx: any): number;

declare function getNamespace(ctx: any): _xmlNs;

declare function getParameterEntity(ctx: any, name: string | any): _xmlEntity;

declare function getPublicId(ctx: any): string;

declare function getSystemId(ctx: any): string;

declare function globalNamespace(ctx: any, href: string | any, prefix: string | any): void;

declare function hasExternalSubset(ctx: any): number;

declare function hasInternalSubset(ctx: any): number;

declare function htmlAttrAllowed(p1: _htmlElemDesc, p2: string | any, p3: number): htmlStatus;

declare function htmlAutoCloseTag(doc: _xmlDoc, name: string | any, elem: _xmlNode): number;

declare function htmlCreateFileParserCtxt(filename: string | any, encoding: string | any): _xmlParserCtxt;

declare function htmlCreateMemoryParserCtxt(buffer: string | any, size: number): _xmlParserCtxt;

declare function htmlCreatePushParserCtxt(sax: _xmlSAXHandler, user_data: any, chunk: string | any, size: number, filename: string | any, enc: xmlCharEncoding): _xmlParserCtxt;

declare function htmlCtxtReadDoc(ctxt: _xmlParserCtxt, cur: string | any, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function htmlCtxtReadFd(ctxt: _xmlParserCtxt, fd: number, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function htmlCtxtReadFile(ctxt: _xmlParserCtxt, filename: string | any, encoding: string | any, options: number): _xmlDoc;

declare function htmlCtxtReadIO(ctxt: _xmlParserCtxt, ioread: (p1: any, p2: string, p3: number) => number, ioclose: (p1: any) => number, ioctx: any, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function htmlCtxtReadMemory(ctxt: _xmlParserCtxt, buffer: string | any, size: number, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function htmlCtxtReset(ctxt: _xmlParserCtxt): void;

declare function htmlCtxtUseOptions(ctxt: _xmlParserCtxt, options: number): number;

declare function htmlDefaultSAXHandlerInit(): void;

declare function htmlDocContentDumpFormatOutput(buf: _xmlOutputBuffer, cur: _xmlDoc, encoding: string | any, format: number): void;

declare function htmlDocContentDumpOutput(buf: _xmlOutputBuffer, cur: _xmlDoc, encoding: string | any): void;

declare function htmlDocDump(f: FILE, cur: _xmlDoc): number;

declare function htmlDocDumpMemory(cur: _xmlDoc, mem: string, size: number): void;

declare function htmlDocDumpMemoryFormat(cur: _xmlDoc, mem: string, size: number, format: number): void;

declare function htmlElementAllowedHere(p1: _htmlElemDesc, p2: string | any): number;

declare function htmlElementStatusHere(p1: _htmlElemDesc, p2: _htmlElemDesc): htmlStatus;

declare function htmlEncodeEntities(out: string | any, outlen: number, in_: string | any, inlen: number, quoteChar: number): number;

declare function htmlEntityLookup(name: string | any): _htmlEntityDesc;

declare function htmlEntityValueLookup(value: number): _htmlEntityDesc;

declare function htmlFreeParserCtxt(ctxt: _xmlParserCtxt): void;

declare function htmlGetMetaEncoding(doc: _xmlDoc): string;

declare function htmlHandleOmittedElem(val: number): number;

declare function htmlInitAutoClose(): void;

declare function htmlIsAutoClosed(doc: _xmlDoc, elem: _xmlNode): number;

declare function htmlIsBooleanAttr(name: string | any): number;

declare function htmlIsScriptAttribute(name: string | any): number;

declare function htmlNewDoc(URI: string | any, ExternalID: string | any): _xmlDoc;

declare function htmlNewDocNoDtD(URI: string | any, ExternalID: string | any): _xmlDoc;

declare function htmlNewParserCtxt(): _xmlParserCtxt;

declare function htmlNodeDump(buf: _xmlBuffer, doc: _xmlDoc, cur: _xmlNode): number;

declare function htmlNodeDumpFile(out: FILE, doc: _xmlDoc, cur: _xmlNode): void;

declare function htmlNodeDumpFileFormat(out: FILE, doc: _xmlDoc, cur: _xmlNode, encoding: string | any, format: number): number;

declare function htmlNodeDumpFormatOutput(buf: _xmlOutputBuffer, doc: _xmlDoc, cur: _xmlNode, encoding: string | any, format: number): void;

declare function htmlNodeDumpOutput(buf: _xmlOutputBuffer, doc: _xmlDoc, cur: _xmlNode, encoding: string | any): void;

declare function htmlNodeStatus(p1: _xmlNode, p2: number): htmlStatus;

declare function htmlParseCharRef(ctxt: _xmlParserCtxt): number;

declare function htmlParseChunk(ctxt: _xmlParserCtxt, chunk: string | any, size: number, terminate: number): number;

declare function htmlParseDoc(cur: string | any, encoding: string | any): _xmlDoc;

declare function htmlParseDocument(ctxt: _xmlParserCtxt): number;

declare function htmlParseElement(ctxt: _xmlParserCtxt): void;

declare function htmlParseEntityRef(ctxt: _xmlParserCtxt, str: string): _htmlEntityDesc;

declare function htmlParseFile(filename: string | any, encoding: string | any): _xmlDoc;

enum htmlParserOption {

	HTML_PARSE_RECOVER = 1,

	HTML_PARSE_NODEFDTD = 4,

	HTML_PARSE_NOERROR = 32,

	HTML_PARSE_NOWARNING = 64,

	HTML_PARSE_PEDANTIC = 128,

	HTML_PARSE_NOBLANKS = 256,

	HTML_PARSE_NONET = 2048,

	HTML_PARSE_NOIMPLIED = 8192,

	HTML_PARSE_COMPACT = 65536,

	HTML_PARSE_IGNORE_ENC = 2097152
}


declare function htmlReadDoc(cur: string | any, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function htmlReadFd(fd: number, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function htmlReadFile(URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function htmlReadIO(ioread: (p1: any, p2: string, p3: number) => number, ioclose: (p1: any) => number, ioctx: any, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function htmlReadMemory(buffer: string | any, size: number, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function htmlSAXParseDoc(cur: string | any, encoding: string | any, sax: _xmlSAXHandler, userData: any): _xmlDoc;

declare function htmlSAXParseFile(filename: string | any, encoding: string | any, sax: _xmlSAXHandler, userData: any): _xmlDoc;

declare function htmlSaveFile(filename: string | any, cur: _xmlDoc): number;

declare function htmlSaveFileEnc(filename: string | any, cur: _xmlDoc, encoding: string | any): number;

declare function htmlSaveFileFormat(filename: string | any, cur: _xmlDoc, encoding: string | any, format: number): number;

declare function htmlSetMetaEncoding(doc: _xmlDoc, encoding: string | any): number;

enum htmlStatus {

	HTML_NA = 0,

	HTML_INVALID = 1,

	HTML_DEPRECATED = 2,

	HTML_VALID = 4,

	HTML_REQUIRED = 12
}


declare function htmlTagLookup(tag: string | any): _htmlElemDesc;

declare function ignorableWhitespace(ctx: any, ch: string | any, len: number): void;

declare function initGenericErrorDefaultFunc(handler: (p1: any, p2: string) => void): void;

declare function initdocbDefaultSAXHandler(hdlr: _xmlSAXHandlerV1): void;

declare function inithtmlDefaultSAXHandler(hdlr: _xmlSAXHandlerV1): void;

declare function initxmlDefaultSAXHandler(hdlr: _xmlSAXHandlerV1, warning: number): void;

declare function inputPop(ctxt: _xmlParserCtxt): _xmlParserInput;

declare function inputPush(ctxt: _xmlParserCtxt, value: _xmlParserInput): number;

declare function internalSubset(ctx: any, name: string | any, ExternalID: string | any, SystemID: string | any): void;

declare function isStandalone(ctx: any): number;

declare function isolat1ToUTF8(out: string | any, outlen: number, in_: string | any, inlen: number): number;

declare function namePop(ctxt: _xmlParserCtxt): string;

declare function namePush(ctxt: _xmlParserCtxt, value: string | any): number;

declare function namespaceDecl(ctx: any, href: string | any, prefix: string | any): void;

declare function nodePop(ctxt: _xmlParserCtxt): _xmlNode;

declare function nodePush(ctxt: _xmlParserCtxt, value: _xmlNode): number;

declare function notationDecl(ctx: any, name: string | any, publicId: string | any, systemId: string | any): void;

declare function processingInstruction(ctx: any, target: string | any, data: string | any): void;

declare function reference(ctx: any, name: string | any): void;

declare function resolveEntity(ctx: any, publicId: string | any, systemId: string | any): _xmlParserInput;

declare function setDocumentLocator(ctx: any, loc: _xmlSAXLocator): void;

declare function setNamespace(ctx: any, name: string | any): void;

declare function startDocument(ctx: any): void;

declare function startElement(ctx: any, fullname: string | any, atts: string): void;

declare function unparsedEntityDecl(ctx: any, name: string | any, publicId: string | any, systemId: string | any, notationName: string | any): void;

declare function valuePop(ctxt: _xmlXPathParserContext): _xmlXPathObject;

declare function valuePush(ctxt: _xmlXPathParserContext, value: _xmlXPathObject): number;

enum xlinkActuate {

	XLINK_ACTUATE_NONE = 0,

	XLINK_ACTUATE_AUTO = 1,

	XLINK_ACTUATE_ONREQUEST = 2
}


declare function xlinkGetDefaultDetect(): (p1: any, p2: _xmlNode) => void;

declare function xlinkGetDefaultHandler(): _xlinkHandler;

declare function xlinkIsLink(doc: _xmlDoc, node: _xmlNode): xlinkType;

declare function xlinkSetDefaultDetect(func: (p1: any, p2: _xmlNode) => void): void;

declare function xlinkSetDefaultHandler(handler: _xlinkHandler): void;

enum xlinkShow {

	XLINK_SHOW_NONE = 0,

	XLINK_SHOW_NEW = 1,

	XLINK_SHOW_EMBED = 2,

	XLINK_SHOW_REPLACE = 3
}


enum xlinkType {

	XLINK_TYPE_NONE = 0,

	XLINK_TYPE_SIMPLE = 1,

	XLINK_TYPE_EXTENDED = 2,

	XLINK_TYPE_EXTENDED_SET = 3
}


declare function xmlACatalogAdd(catal: any, type: string | any, orig: string | any, replace: string | any): number;

declare function xmlACatalogDump(catal: any, out: FILE): void;

declare function xmlACatalogRemove(catal: any, value: string | any): number;

declare function xmlACatalogResolve(catal: any, pubID: string | any, sysID: string | any): string;

declare function xmlACatalogResolvePublic(catal: any, pubID: string | any): string;

declare function xmlACatalogResolveSystem(catal: any, sysID: string | any): string;

declare function xmlACatalogResolveURI(catal: any, URI: string | any): string;

declare function xmlAddAttributeDecl(ctxt: _xmlValidCtxt, dtd: _xmlDtd, elem: string | any, name: string | any, ns: string | any, type: xmlAttributeType, def: xmlAttributeDefault, defaultValue: string | any, tree: _xmlEnumeration): _xmlAttribute;

declare function xmlAddChild(parent: _xmlNode, cur: _xmlNode): _xmlNode;

declare function xmlAddChildList(parent: _xmlNode, cur: _xmlNode): _xmlNode;

declare function xmlAddDocEntity(doc: _xmlDoc, name: string | any, type: number, ExternalID: string | any, SystemID: string | any, content: string | any): _xmlEntity;

declare function xmlAddDtdEntity(doc: _xmlDoc, name: string | any, type: number, ExternalID: string | any, SystemID: string | any, content: string | any): _xmlEntity;

declare function xmlAddElementDecl(ctxt: _xmlValidCtxt, dtd: _xmlDtd, name: string | any, type: xmlElementTypeVal, content: _xmlElementContent): _xmlElement;

declare function xmlAddEncodingAlias(name: string | any, alias: string | any): number;

declare function xmlAddID(ctxt: _xmlValidCtxt, doc: _xmlDoc, value: string | any, attr: _xmlAttr): _xmlID;

declare function xmlAddNextSibling(cur: _xmlNode, elem: _xmlNode): _xmlNode;

declare function xmlAddNotationDecl(ctxt: _xmlValidCtxt, dtd: _xmlDtd, name: string | any, PublicID: string | any, SystemID: string | any): _xmlNotation;

declare function xmlAddPrevSibling(cur: _xmlNode, elem: _xmlNode): _xmlNode;

declare function xmlAddRef(ctxt: _xmlValidCtxt, doc: _xmlDoc, value: string | any, attr: _xmlAttr): _xmlRef;

declare function xmlAddSibling(cur: _xmlNode, elem: _xmlNode): _xmlNode;

declare function xmlAllocOutputBuffer(encoder: _xmlCharEncodingHandler): _xmlOutputBuffer;

declare function xmlAllocParserInputBuffer(enc: xmlCharEncoding): _xmlParserInputBuffer;

declare function xmlAttrSerializeTxtContent(buf: _xmlBuffer, doc: _xmlDoc, attr: _xmlAttr, string: string | any): void;

enum xmlAttributeDefault {

	XML_ATTRIBUTE_NONE = 1,

	XML_ATTRIBUTE_REQUIRED = 2,

	XML_ATTRIBUTE_IMPLIED = 3,

	XML_ATTRIBUTE_FIXED = 4
}


enum xmlAttributeType {

	XML_ATTRIBUTE_CDATA = 1,

	XML_ATTRIBUTE_ID = 2,

	XML_ATTRIBUTE_IDREF = 3,

	XML_ATTRIBUTE_IDREFS = 4,

	XML_ATTRIBUTE_ENTITY = 5,

	XML_ATTRIBUTE_ENTITIES = 6,

	XML_ATTRIBUTE_NMTOKEN = 7,

	XML_ATTRIBUTE_NMTOKENS = 8,

	XML_ATTRIBUTE_ENUMERATION = 9,

	XML_ATTRIBUTE_NOTATION = 10
}


declare function xmlAutomataCompile(am: any): any;

declare function xmlAutomataGetInitState(am: any): any;

declare function xmlAutomataIsDeterminist(am: any): number;

declare function xmlAutomataNewAllTrans(am: any, from: any, to: any, lax: number): any;

declare function xmlAutomataNewCountTrans(am: any, from: any, to: any, token: string | any, min: number, max: number, data: any): any;

declare function xmlAutomataNewCountTrans2(am: any, from: any, to: any, token: string | any, token2: string | any, min: number, max: number, data: any): any;

declare function xmlAutomataNewCountedTrans(am: any, from: any, to: any, counter: number): any;

declare function xmlAutomataNewCounter(am: any, min: number, max: number): number;

declare function xmlAutomataNewCounterTrans(am: any, from: any, to: any, counter: number): any;

declare function xmlAutomataNewEpsilon(am: any, from: any, to: any): any;

declare function xmlAutomataNewNegTrans(am: any, from: any, to: any, token: string | any, token2: string | any, data: any): any;

declare function xmlAutomataNewOnceTrans(am: any, from: any, to: any, token: string | any, min: number, max: number, data: any): any;

declare function xmlAutomataNewOnceTrans2(am: any, from: any, to: any, token: string | any, token2: string | any, min: number, max: number, data: any): any;

declare function xmlAutomataNewState(am: any): any;

declare function xmlAutomataNewTransition(am: any, from: any, to: any, token: string | any, data: any): any;

declare function xmlAutomataNewTransition2(am: any, from: any, to: any, token: string | any, token2: string | any, data: any): any;

declare function xmlAutomataSetFinalState(am: any, state: any): number;

declare function xmlBoolToText(boolval: number): string;

declare function xmlBufContent(buf: any): string;

declare function xmlBufEnd(buf: any): string;

declare function xmlBufGetNodeContent(buf: any, cur: _xmlNode): number;

declare function xmlBufNodeDump(buf: any, doc: _xmlDoc, cur: _xmlNode, level: number, format: number): number;

declare function xmlBufShrink(buf: any, len: number): number;

declare function xmlBufUse(buf: any): number;

declare function xmlBufferAdd(buf: _xmlBuffer, str: string | any, len: number): number;

declare function xmlBufferAddHead(buf: _xmlBuffer, str: string | any, len: number): number;

enum xmlBufferAllocationScheme {

	XML_BUFFER_ALLOC_DOUBLEIT = 0,

	XML_BUFFER_ALLOC_EXACT = 1,

	XML_BUFFER_ALLOC_IMMUTABLE = 2,

	XML_BUFFER_ALLOC_IO = 3,

	XML_BUFFER_ALLOC_HYBRID = 4,

	XML_BUFFER_ALLOC_BOUNDED = 5
}


declare function xmlBufferCCat(buf: _xmlBuffer, str: string | any): number;

declare function xmlBufferCat(buf: _xmlBuffer, str: string | any): number;

declare function xmlBufferContent(buf: _xmlBuffer): string;

declare function xmlBufferCreate(): _xmlBuffer;

declare function xmlBufferCreateSize(size: number): _xmlBuffer;

declare function xmlBufferCreateStatic(mem: any, size: number): _xmlBuffer;

declare function xmlBufferDetach(buf: _xmlBuffer): string;

declare function xmlBufferDump(file: FILE, buf: _xmlBuffer): number;

declare function xmlBufferEmpty(buf: _xmlBuffer): void;

declare function xmlBufferFree(buf: _xmlBuffer): void;

declare function xmlBufferGrow(buf: _xmlBuffer, len: number): number;

declare function xmlBufferLength(buf: _xmlBuffer): number;

declare function xmlBufferResize(buf: _xmlBuffer, size: number): number;

declare function xmlBufferSetAllocationScheme(buf: _xmlBuffer, scheme: xmlBufferAllocationScheme): void;

declare function xmlBufferShrink(buf: _xmlBuffer, len: number): number;

declare function xmlBufferWriteCHAR(buf: _xmlBuffer, string: string | any): void;

declare function xmlBufferWriteChar(buf: _xmlBuffer, string: string | any): void;

declare function xmlBufferWriteQuotedString(buf: _xmlBuffer, string: string | any): void;

declare function xmlBuildQName(ncname: string | any, prefix: string | any, memory: string | any, len: number): string;

declare function xmlBuildRelativeURI(URI: string | any, base: string | any): string;

declare function xmlBuildURI(URI: string | any, base: string | any): string;

declare function xmlByteConsumed(ctxt: _xmlParserCtxt): number;

declare function xmlC14NDocDumpMemory(doc: _xmlDoc, nodes: _xmlNodeSet, mode: number, inclusive_ns_prefixes: string, with_comments: number, doc_txt_ptr: string): number;

declare function xmlC14NDocSave(doc: _xmlDoc, nodes: _xmlNodeSet, mode: number, inclusive_ns_prefixes: string, with_comments: number, filename: string | any, compression: number): number;

declare function xmlC14NDocSaveTo(doc: _xmlDoc, nodes: _xmlNodeSet, mode: number, inclusive_ns_prefixes: string, with_comments: number, buf: _xmlOutputBuffer): number;

declare function xmlC14NExecute(doc: _xmlDoc, is_visible_callback: (p1: any, p2: _xmlNode, p3: _xmlNode) => number, user_data: any, mode: number, inclusive_ns_prefixes: string, with_comments: number, buf: _xmlOutputBuffer): number;

enum xmlC14NMode {

	XML_C14N_1_0 = 0,

	XML_C14N_EXCLUSIVE_1_0 = 1,

	XML_C14N_1_1 = 2
}


declare function xmlCanonicPath(path: string | any): string;

declare function xmlCatalogAdd(type: string | any, orig: string | any, replace: string | any): number;

declare function xmlCatalogAddLocal(catalogs: any, URL: string | any): any;

enum xmlCatalogAllow {

	XML_CATA_ALLOW_NONE = 0,

	XML_CATA_ALLOW_GLOBAL = 1,

	XML_CATA_ALLOW_DOCUMENT = 2,

	XML_CATA_ALLOW_ALL = 3
}


declare function xmlCatalogCleanup(): void;

declare function xmlCatalogConvert(): number;

declare function xmlCatalogDump(out: FILE): void;

declare function xmlCatalogFreeLocal(catalogs: any): void;

declare function xmlCatalogGetDefaults(): xmlCatalogAllow;

declare function xmlCatalogGetPublic(pubID: string | any): string;

declare function xmlCatalogGetSystem(sysID: string | any): string;

declare function xmlCatalogIsEmpty(catal: any): number;

declare function xmlCatalogLocalResolve(catalogs: any, pubID: string | any, sysID: string | any): string;

declare function xmlCatalogLocalResolveURI(catalogs: any, URI: string | any): string;

enum xmlCatalogPrefer {

	XML_CATA_PREFER_NONE = 0,

	XML_CATA_PREFER_PUBLIC = 1,

	XML_CATA_PREFER_SYSTEM = 2
}


declare function xmlCatalogRemove(value: string | any): number;

declare function xmlCatalogResolve(pubID: string | any, sysID: string | any): string;

declare function xmlCatalogResolvePublic(pubID: string | any): string;

declare function xmlCatalogResolveSystem(sysID: string | any): string;

declare function xmlCatalogResolveURI(URI: string | any): string;

declare function xmlCatalogSetDebug(level: number): number;

declare function xmlCatalogSetDefaultPrefer(prefer: xmlCatalogPrefer): xmlCatalogPrefer;

declare function xmlCatalogSetDefaults(allow: xmlCatalogAllow): void;

declare function xmlCharEncCloseFunc(handler: _xmlCharEncodingHandler): number;

declare function xmlCharEncFirstLine(handler: _xmlCharEncodingHandler, out: _xmlBuffer, in_: _xmlBuffer): number;

declare function xmlCharEncInFunc(handler: _xmlCharEncodingHandler, out: _xmlBuffer, in_: _xmlBuffer): number;

declare function xmlCharEncOutFunc(handler: _xmlCharEncodingHandler, out: _xmlBuffer, in_: _xmlBuffer): number;

enum xmlCharEncoding {

	XML_CHAR_ENCODING_ERROR = -1,

	XML_CHAR_ENCODING_NONE = 0,

	XML_CHAR_ENCODING_UTF8 = 1,

	XML_CHAR_ENCODING_UTF16LE = 2,

	XML_CHAR_ENCODING_UTF16BE = 3,

	XML_CHAR_ENCODING_UCS4LE = 4,

	XML_CHAR_ENCODING_UCS4BE = 5,

	XML_CHAR_ENCODING_EBCDIC = 6,

	XML_CHAR_ENCODING_UCS4_2143 = 7,

	XML_CHAR_ENCODING_UCS4_3412 = 8,

	XML_CHAR_ENCODING_UCS2 = 9,

	XML_CHAR_ENCODING_8859_1 = 10,

	XML_CHAR_ENCODING_8859_2 = 11,

	XML_CHAR_ENCODING_8859_3 = 12,

	XML_CHAR_ENCODING_8859_4 = 13,

	XML_CHAR_ENCODING_8859_5 = 14,

	XML_CHAR_ENCODING_8859_6 = 15,

	XML_CHAR_ENCODING_8859_7 = 16,

	XML_CHAR_ENCODING_8859_8 = 17,

	XML_CHAR_ENCODING_8859_9 = 18,

	XML_CHAR_ENCODING_2022_JP = 19,

	XML_CHAR_ENCODING_SHIFT_JIS = 20,

	XML_CHAR_ENCODING_EUC_JP = 21,

	XML_CHAR_ENCODING_ASCII = 22
}


declare function xmlCharInRange(val: number, group: _xmlChRangeGroup): number;

declare function xmlCharStrdup(cur: string | any): string;

declare function xmlCharStrndup(cur: string | any, len: number): string;

declare function xmlCheckFilename(path: string | any): number;

declare function xmlCheckHTTPInput(ctxt: _xmlParserCtxt, ret: _xmlParserInput): _xmlParserInput;

declare function xmlCheckLanguageID(lang: string | any): number;

declare function xmlCheckUTF8(utf: string | any): number;

declare function xmlCheckVersion(version: number): void;

declare function xmlChildElementCount(parent: _xmlNode): number;

declare function xmlCleanupCharEncodingHandlers(): void;

declare function xmlCleanupEncodingAliases(): void;

declare function xmlCleanupGlobals(): void;

declare function xmlCleanupInputCallbacks(): void;

declare function xmlCleanupMemory(): void;

declare function xmlCleanupOutputCallbacks(): void;

declare function xmlCleanupParser(): void;

declare function xmlCleanupPredefinedEntities(): void;

declare function xmlCleanupThreads(): void;

declare function xmlClearNodeInfoSeq(seq: _xmlParserNodeInfoSeq): void;

declare function xmlClearParserCtxt(ctxt: _xmlParserCtxt): void;

declare function xmlConvertSGMLCatalog(catal: any): number;

declare function xmlCopyAttributeTable(table: any): any;

declare function xmlCopyChar(len: number, out: string | any, val: number): number;

declare function xmlCopyCharMultiByte(out: string | any, val: number): number;

declare function xmlCopyDoc(doc: _xmlDoc, recursive: number): _xmlDoc;

declare function xmlCopyDocElementContent(doc: _xmlDoc, content: _xmlElementContent): _xmlElementContent;

declare function xmlCopyDtd(dtd: _xmlDtd): _xmlDtd;

declare function xmlCopyElementContent(content: _xmlElementContent): _xmlElementContent;

declare function xmlCopyElementTable(table: any): any;

declare function xmlCopyEntitiesTable(table: any): any;

declare function xmlCopyEnumeration(cur: _xmlEnumeration): _xmlEnumeration;

declare function xmlCopyError(from: _xmlError, to: _xmlError): number;

declare function xmlCopyNamespace(cur: _xmlNs): _xmlNs;

declare function xmlCopyNamespaceList(cur: _xmlNs): _xmlNs;

declare function xmlCopyNode(node: _xmlNode, recursive: number): _xmlNode;

declare function xmlCopyNodeList(node: _xmlNode): _xmlNode;

declare function xmlCopyNotationTable(table: any): any;

declare function xmlCopyProp(target: _xmlNode, cur: _xmlAttr): _xmlAttr;

declare function xmlCopyPropList(target: _xmlNode, cur: _xmlAttr): _xmlAttr;

declare function xmlCreateDocParserCtxt(cur: string | any): _xmlParserCtxt;

declare function xmlCreateEntitiesTable(): any;

declare function xmlCreateEntityParserCtxt(URL: string | any, ID: string | any, base: string | any): _xmlParserCtxt;

declare function xmlCreateEnumeration(name: string | any): _xmlEnumeration;

declare function xmlCreateFileParserCtxt(filename: string | any): _xmlParserCtxt;

declare function xmlCreateIOParserCtxt(sax: _xmlSAXHandler, user_data: any, ioread: (p1: any, p2: string, p3: number) => number, ioclose: (p1: any) => number, ioctx: any, enc: xmlCharEncoding): _xmlParserCtxt;

declare function xmlCreateIntSubset(doc: _xmlDoc, name: string | any, ExternalID: string | any, SystemID: string | any): _xmlDtd;

declare function xmlCreateMemoryParserCtxt(buffer: string | any, size: number): _xmlParserCtxt;

declare function xmlCreatePushParserCtxt(sax: _xmlSAXHandler, user_data: any, chunk: string | any, size: number, filename: string | any): _xmlParserCtxt;

declare function xmlCreateURI(): _xmlURI;

declare function xmlCreateURLParserCtxt(filename: string | any, options: number): _xmlParserCtxt;

declare function xmlCtxtGetLastError(ctx: any): _xmlError;

declare function xmlCtxtReadDoc(ctxt: _xmlParserCtxt, cur: string | any, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function xmlCtxtReadFd(ctxt: _xmlParserCtxt, fd: number, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function xmlCtxtReadFile(ctxt: _xmlParserCtxt, filename: string | any, encoding: string | any, options: number): _xmlDoc;

declare function xmlCtxtReadIO(ctxt: _xmlParserCtxt, ioread: (p1: any, p2: string, p3: number) => number, ioclose: (p1: any) => number, ioctx: any, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function xmlCtxtReadMemory(ctxt: _xmlParserCtxt, buffer: string | any, size: number, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function xmlCtxtReset(ctxt: _xmlParserCtxt): void;

declare function xmlCtxtResetLastError(ctx: any): void;

declare function xmlCtxtResetPush(ctxt: _xmlParserCtxt, chunk: string | any, size: number, filename: string | any, encoding: string | any): number;

declare function xmlCtxtUseOptions(ctxt: _xmlParserCtxt, options: number): number;

declare function xmlCurrentChar(ctxt: _xmlParserCtxt, len: number): number;

declare function xmlDOMWrapAdoptNode(ctxt: _xmlDOMWrapCtxt, sourceDoc: _xmlDoc, node: _xmlNode, destDoc: _xmlDoc, destParent: _xmlNode, options: number): number;

declare function xmlDOMWrapCloneNode(ctxt: _xmlDOMWrapCtxt, sourceDoc: _xmlDoc, node: _xmlNode, clonedNode: _xmlNode, destDoc: _xmlDoc, destParent: _xmlNode, deep: number, options: number): number;

declare function xmlDOMWrapFreeCtxt(ctxt: _xmlDOMWrapCtxt): void;

declare function xmlDOMWrapNewCtxt(): _xmlDOMWrapCtxt;

declare function xmlDOMWrapReconcileNamespaces(ctxt: _xmlDOMWrapCtxt, elem: _xmlNode, options: number): number;

declare function xmlDOMWrapRemoveNode(ctxt: _xmlDOMWrapCtxt, doc: _xmlDoc, node: _xmlNode, options: number): number;

declare function xmlDebugCheckDocument(output: FILE, doc: _xmlDoc): number;

declare function xmlDebugDumpAttr(output: FILE, attr: _xmlAttr, depth: number): void;

declare function xmlDebugDumpAttrList(output: FILE, attr: _xmlAttr, depth: number): void;

declare function xmlDebugDumpDTD(output: FILE, dtd: _xmlDtd): void;

declare function xmlDebugDumpDocument(output: FILE, doc: _xmlDoc): void;

declare function xmlDebugDumpDocumentHead(output: FILE, doc: _xmlDoc): void;

declare function xmlDebugDumpEntities(output: FILE, doc: _xmlDoc): void;

declare function xmlDebugDumpNode(output: FILE, node: _xmlNode, depth: number): void;

declare function xmlDebugDumpNodeList(output: FILE, node: _xmlNode, depth: number): void;

declare function xmlDebugDumpOneNode(output: FILE, node: _xmlNode, depth: number): void;

declare function xmlDebugDumpString(output: FILE, str: string | any): void;

declare function xmlDecodeEntities(ctxt: _xmlParserCtxt, len: number, what: number, end: number, end2: number, end3: number): string;

declare function xmlDefaultSAXHandlerInit(): void;

declare function xmlDelEncodingAlias(alias: string | any): number;

declare function xmlDeregisterNodeDefault(func: (p1: _xmlNode) => void): (p1: _xmlNode) => void;

declare function xmlDetectCharEncoding(in_: string | any, len: number): xmlCharEncoding;

declare function xmlDictCleanup(): void;

declare function xmlDictCreate(): any;

declare function xmlDictCreateSub(sub: any): any;

declare function xmlDictExists(dict: any, name: string | any, len: number): string;

declare function xmlDictFree(dict: any): void;

declare function xmlDictGetUsage(dict: any): number;

declare function xmlDictLookup(dict: any, name: string | any, len: number): string;

declare function xmlDictOwns(dict: any, str: string | any): number;

declare function xmlDictQLookup(dict: any, prefix: string | any, name: string | any): string;

declare function xmlDictReference(dict: any): number;

declare function xmlDictSetLimit(dict: any, limit: number): number;

declare function xmlDictSize(dict: any): number;

declare function xmlDocCopyNode(node: _xmlNode, doc: _xmlDoc, recursive: number): _xmlNode;

declare function xmlDocCopyNodeList(doc: _xmlDoc, node: _xmlNode): _xmlNode;

declare function xmlDocDump(f: FILE, cur: _xmlDoc): number;

declare function xmlDocDumpFormatMemory(cur: _xmlDoc, mem: string, size: number, format: number): void;

declare function xmlDocDumpFormatMemoryEnc(out_doc: _xmlDoc, doc_txt_ptr: string, doc_txt_len: number, txt_encoding: string | any, format: number): void;

declare function xmlDocDumpMemory(cur: _xmlDoc, mem: string, size: number): void;

declare function xmlDocDumpMemoryEnc(out_doc: _xmlDoc, doc_txt_ptr: string, doc_txt_len: number, txt_encoding: string | any): void;

declare function xmlDocFormatDump(f: FILE, cur: _xmlDoc, format: number): number;

declare function xmlDocGetRootElement(doc: _xmlDoc): _xmlNode;

enum xmlDocProperties {

	XML_DOC_WELLFORMED = 1,

	XML_DOC_NSVALID = 2,

	XML_DOC_OLD10 = 4,

	XML_DOC_DTDVALID = 8,

	XML_DOC_XINCLUDE = 16,

	XML_DOC_USERBUILT = 32,

	XML_DOC_INTERNAL = 64,

	XML_DOC_HTML = 128
}


declare function xmlDocSetRootElement(doc: _xmlDoc, root: _xmlNode): _xmlNode;

declare function xmlDumpAttributeDecl(buf: _xmlBuffer, attr: _xmlAttribute): void;

declare function xmlDumpAttributeTable(buf: _xmlBuffer, table: any): void;

declare function xmlDumpElementDecl(buf: _xmlBuffer, elem: _xmlElement): void;

declare function xmlDumpElementTable(buf: _xmlBuffer, table: any): void;

declare function xmlDumpEntitiesTable(buf: _xmlBuffer, table: any): void;

declare function xmlDumpEntityDecl(buf: _xmlBuffer, ent: _xmlEntity): void;

declare function xmlDumpNotationDecl(buf: _xmlBuffer, nota: _xmlNotation): void;

declare function xmlDumpNotationTable(buf: _xmlBuffer, table: any): void;

declare function xmlElemDump(f: FILE, doc: _xmlDoc, cur: _xmlNode): void;

enum xmlElementContentOccur {

	XML_ELEMENT_CONTENT_ONCE = 1,

	XML_ELEMENT_CONTENT_OPT = 2,

	XML_ELEMENT_CONTENT_MULT = 3,

	XML_ELEMENT_CONTENT_PLUS = 4
}


enum xmlElementContentType {

	XML_ELEMENT_CONTENT_PCDATA = 1,

	XML_ELEMENT_CONTENT_ELEMENT = 2,

	XML_ELEMENT_CONTENT_SEQ = 3,

	XML_ELEMENT_CONTENT_OR = 4
}


enum xmlElementType {

	XML_ELEMENT_NODE = 1,

	XML_ATTRIBUTE_NODE = 2,

	XML_TEXT_NODE = 3,

	XML_CDATA_SECTION_NODE = 4,

	XML_ENTITY_REF_NODE = 5,

	XML_ENTITY_NODE = 6,

	XML_PI_NODE = 7,

	XML_COMMENT_NODE = 8,

	XML_DOCUMENT_NODE = 9,

	XML_DOCUMENT_TYPE_NODE = 10,

	XML_DOCUMENT_FRAG_NODE = 11,

	XML_NOTATION_NODE = 12,

	XML_HTML_DOCUMENT_NODE = 13,

	XML_DTD_NODE = 14,

	XML_ELEMENT_DECL = 15,

	XML_ATTRIBUTE_DECL = 16,

	XML_ENTITY_DECL = 17,

	XML_NAMESPACE_DECL = 18,

	XML_XINCLUDE_START = 19,

	XML_XINCLUDE_END = 20,

	XML_DOCB_DOCUMENT_NODE = 21
}


enum xmlElementTypeVal {

	XML_ELEMENT_TYPE_UNDEFINED = 0,

	XML_ELEMENT_TYPE_EMPTY = 1,

	XML_ELEMENT_TYPE_ANY = 2,

	XML_ELEMENT_TYPE_MIXED = 3,

	XML_ELEMENT_TYPE_ELEMENT = 4
}


declare function xmlEncodeEntities(doc: _xmlDoc, input: string | any): string;

declare function xmlEncodeEntitiesReentrant(doc: _xmlDoc, input: string | any): string;

declare function xmlEncodeSpecialChars(doc: _xmlDoc, input: string | any): string;

enum xmlEntityType {

	XML_INTERNAL_GENERAL_ENTITY = 1,

	XML_EXTERNAL_GENERAL_PARSED_ENTITY = 2,

	XML_EXTERNAL_GENERAL_UNPARSED_ENTITY = 3,

	XML_INTERNAL_PARAMETER_ENTITY = 4,

	XML_EXTERNAL_PARAMETER_ENTITY = 5,

	XML_INTERNAL_PREDEFINED_ENTITY = 6
}


enum xmlErrorDomain {

	XML_FROM_NONE = 0,

	XML_FROM_PARSER = 1,

	XML_FROM_TREE = 2,

	XML_FROM_NAMESPACE = 3,

	XML_FROM_DTD = 4,

	XML_FROM_HTML = 5,

	XML_FROM_MEMORY = 6,

	XML_FROM_OUTPUT = 7,

	XML_FROM_IO = 8,

	XML_FROM_FTP = 9,

	XML_FROM_HTTP = 10,

	XML_FROM_XINCLUDE = 11,

	XML_FROM_XPATH = 12,

	XML_FROM_XPOINTER = 13,

	XML_FROM_REGEXP = 14,

	XML_FROM_DATATYPE = 15,

	XML_FROM_SCHEMASP = 16,

	XML_FROM_SCHEMASV = 17,

	XML_FROM_RELAXNGP = 18,

	XML_FROM_RELAXNGV = 19,

	XML_FROM_CATALOG = 20,

	XML_FROM_C14N = 21,

	XML_FROM_XSLT = 22,

	XML_FROM_VALID = 23,

	XML_FROM_CHECK = 24,

	XML_FROM_WRITER = 25,

	XML_FROM_MODULE = 26,

	XML_FROM_I18N = 27,

	XML_FROM_SCHEMATRONV = 28,

	XML_FROM_BUFFER = 29,

	XML_FROM_URI = 30
}


enum xmlErrorLevel {

	XML_ERR_NONE = 0,

	XML_ERR_WARNING = 1,

	XML_ERR_ERROR = 2,

	XML_ERR_FATAL = 3
}


declare function xmlExpCtxtNbCons(ctxt: any): number;

declare function xmlExpCtxtNbNodes(ctxt: any): number;

declare function xmlExpDump(buf: _xmlBuffer, expr: any): void;

declare function xmlExpExpDerive(ctxt: any, expr: any, sub: any): any;

declare function xmlExpFree(ctxt: any, expr: any): void;

declare function xmlExpFreeCtxt(ctxt: any): void;

declare function xmlExpGetLanguage(ctxt: any, expr: any, langList: string, len: number): number;

declare function xmlExpGetStart(ctxt: any, expr: any, tokList: string, len: number): number;

declare function xmlExpIsNillable(expr: any): number;

declare function xmlExpMaxToken(expr: any): number;

declare function xmlExpNewAtom(ctxt: any, name: string | any, len: number): any;

declare function xmlExpNewCtxt(maxNodes: number, dict: any): any;

declare function xmlExpNewOr(ctxt: any, left: any, right: any): any;

declare function xmlExpNewRange(ctxt: any, subset: any, min: number, max: number): any;

declare function xmlExpNewSeq(ctxt: any, left: any, right: any): any;

enum xmlExpNodeType {

	XML_EXP_EMPTY = 0,

	XML_EXP_FORBID = 1,

	XML_EXP_ATOM = 2,

	XML_EXP_SEQ = 3,

	XML_EXP_OR = 4,

	XML_EXP_COUNT = 5
}


declare function xmlExpParse(ctxt: any, expr: string | any): any;

declare function xmlExpRef(expr: any): void;

declare function xmlExpStringDerive(ctxt: any, expr: any, str: string | any, len: number): any;

declare function xmlExpSubsume(ctxt: any, expr: any, sub: any): number;

enum xmlFeature {

	XML_WITH_THREAD = 1,

	XML_WITH_TREE = 2,

	XML_WITH_OUTPUT = 3,

	XML_WITH_PUSH = 4,

	XML_WITH_READER = 5,

	XML_WITH_PATTERN = 6,

	XML_WITH_WRITER = 7,

	XML_WITH_SAX1 = 8,

	XML_WITH_FTP = 9,

	XML_WITH_HTTP = 10,

	XML_WITH_VALID = 11,

	XML_WITH_HTML = 12,

	XML_WITH_LEGACY = 13,

	XML_WITH_C14N = 14,

	XML_WITH_CATALOG = 15,

	XML_WITH_XPATH = 16,

	XML_WITH_XPTR = 17,

	XML_WITH_XINCLUDE = 18,

	XML_WITH_ICONV = 19,

	XML_WITH_ISO8859X = 20,

	XML_WITH_UNICODE = 21,

	XML_WITH_REGEXP = 22,

	XML_WITH_AUTOMATA = 23,

	XML_WITH_EXPR = 24,

	XML_WITH_SCHEMAS = 25,

	XML_WITH_SCHEMATRON = 26,

	XML_WITH_MODULES = 27,

	XML_WITH_DEBUG = 28,

	XML_WITH_DEBUG_MEM = 29,

	XML_WITH_DEBUG_RUN = 30,

	XML_WITH_ZLIB = 31,

	XML_WITH_ICU = 32,

	XML_WITH_LZMA = 33,

	XML_WITH_NONE = 99999
}


declare function xmlFileClose(context: any): number;

declare function xmlFileMatch(filename: string | any): number;

declare function xmlFileOpen(filename: string | any): any;

declare function xmlFileRead(context: any, buffer: string | any, len: number): number;

declare function xmlFindCharEncodingHandler(name: string | any): _xmlCharEncodingHandler;

declare function xmlFirstElementChild(parent: _xmlNode): _xmlNode;

declare var xmlFree: (p1: any) => void;

declare function xmlFreeAttributeTable(table: any): void;

declare function xmlFreeAutomata(am: any): void;

declare function xmlFreeCatalog(catal: any): void;

declare function xmlFreeDoc(cur: _xmlDoc): void;

declare function xmlFreeDocElementContent(doc: _xmlDoc, cur: _xmlElementContent): void;

declare function xmlFreeDtd(cur: _xmlDtd): void;

declare function xmlFreeElementContent(cur: _xmlElementContent): void;

declare function xmlFreeElementTable(table: any): void;

declare function xmlFreeEntitiesTable(table: any): void;

declare function xmlFreeEnumeration(cur: _xmlEnumeration): void;

declare function xmlFreeIDTable(table: any): void;

declare function xmlFreeInputStream(input: _xmlParserInput): void;

declare function xmlFreeMutex(tok: any): void;

declare function xmlFreeNode(cur: _xmlNode): void;

declare function xmlFreeNodeList(cur: _xmlNode): void;

declare function xmlFreeNotationTable(table: any): void;

declare function xmlFreeNs(cur: _xmlNs): void;

declare function xmlFreeNsList(cur: _xmlNs): void;

declare function xmlFreeParserCtxt(ctxt: _xmlParserCtxt): void;

declare function xmlFreeParserInputBuffer(in_: _xmlParserInputBuffer): void;

declare function xmlFreePattern(comp: any): void;

declare function xmlFreePatternList(comp: any): void;

declare function xmlFreeProp(cur: _xmlAttr): void;

declare function xmlFreePropList(cur: _xmlAttr): void;

declare function xmlFreeRMutex(tok: any): void;

declare function xmlFreeRefTable(table: any): void;

declare function xmlFreeStreamCtxt(stream: any): void;

declare function xmlFreeTextReader(reader: any): void;

declare function xmlFreeTextWriter(writer: any): void;

declare function xmlFreeURI(uri: _xmlURI): void;

declare function xmlFreeValidCtxt(p1: _xmlValidCtxt): void;

declare function xmlGcMemGet(freeFunc: (p1: any) => void, mallocFunc: (p1: number) => any, mallocAtomicFunc: (p1: number) => any, reallocFunc: (p1: any, p2: number) => any, strdupFunc: (p1: string) => string): number;

declare function xmlGcMemSetup(freeFunc: (p1: any) => void, mallocFunc: (p1: number) => any, mallocAtomicFunc: (p1: number) => any, reallocFunc: (p1: any, p2: number) => any, strdupFunc: (p1: string) => string): number;

declare function xmlGetBufferAllocationScheme(): xmlBufferAllocationScheme;

declare function xmlGetCharEncodingHandler(enc: xmlCharEncoding): _xmlCharEncodingHandler;

declare function xmlGetCharEncodingName(enc: xmlCharEncoding): string;

declare function xmlGetCompressMode(): number;

declare function xmlGetDocCompressMode(doc: _xmlDoc): number;

declare function xmlGetDocEntity(doc: _xmlDoc, name: string | any): _xmlEntity;

declare function xmlGetDtdAttrDesc(dtd: _xmlDtd, elem: string | any, name: string | any): _xmlAttribute;

declare function xmlGetDtdElementDesc(dtd: _xmlDtd, name: string | any): _xmlElement;

declare function xmlGetDtdEntity(doc: _xmlDoc, name: string | any): _xmlEntity;

declare function xmlGetDtdNotationDesc(dtd: _xmlDtd, name: string | any): _xmlNotation;

declare function xmlGetDtdQAttrDesc(dtd: _xmlDtd, elem: string | any, name: string | any, prefix: string | any): _xmlAttribute;

declare function xmlGetDtdQElementDesc(dtd: _xmlDtd, name: string | any, prefix: string | any): _xmlElement;

declare function xmlGetEncodingAlias(alias: string | any): string;

declare function xmlGetExternalEntityLoader(): (p1: string, p2: string, p3: _xmlParserCtxt) => _xmlParserInput;

declare function xmlGetFeature(ctxt: _xmlParserCtxt, name: string | any, result: any): number;

declare function xmlGetFeaturesList(len: number, result: string): number;

declare function xmlGetGlobalState(): _xmlGlobalState;

declare function xmlGetID(doc: _xmlDoc, ID: string | any): _xmlAttr;

declare function xmlGetIntSubset(doc: _xmlDoc): _xmlDtd;

declare function xmlGetLastChild(parent: _xmlNode): _xmlNode;

declare function xmlGetLastError(): _xmlError;

declare function xmlGetLineNo(node: _xmlNode): number;

declare function xmlGetNoNsProp(node: _xmlNode, name: string | any): string;

declare function xmlGetNodePath(node: _xmlNode): string;

declare function xmlGetNsList(doc: _xmlDoc, node: _xmlNode): _xmlNs;

declare function xmlGetNsProp(node: _xmlNode, name: string | any, nameSpace: string | any): string;

declare function xmlGetParameterEntity(doc: _xmlDoc, name: string | any): _xmlEntity;

declare function xmlGetPredefinedEntity(name: string | any): _xmlEntity;

declare function xmlGetProp(node: _xmlNode, name: string | any): string;

declare function xmlGetRefs(doc: _xmlDoc, ID: string | any): any;

declare function xmlGetThreadId(): number;

declare function xmlGetUTF8Char(utf: string | any, len: number): number;

declare function xmlHandleEntity(ctxt: _xmlParserCtxt, entity: _xmlEntity): void;

declare function xmlHasFeature(feature: xmlFeature): number;

declare function xmlHasNsProp(node: _xmlNode, name: string | any, nameSpace: string | any): _xmlAttr;

declare function xmlHasProp(node: _xmlNode, name: string | any): _xmlAttr;

declare function xmlHashAddEntry(table: any, name: string | any, userdata: any): number;

declare function xmlHashAddEntry2(table: any, name: string | any, name2: string | any, userdata: any): number;

declare function xmlHashAddEntry3(table: any, name: string | any, name2: string | any, name3: string | any, userdata: any): number;

declare function xmlHashCopy(table: any, f: (p1: any, p2: string) => any): any;

declare function xmlHashCreate(size: number): any;

declare function xmlHashCreateDict(size: number, dict: any): any;

declare function xmlHashFree(table: any, f: (p1: any, p2: string) => void): void;

declare function xmlHashLookup(table: any, name: string | any): any;

declare function xmlHashLookup2(table: any, name: string | any, name2: string | any): any;

declare function xmlHashLookup3(table: any, name: string | any, name2: string | any, name3: string | any): any;

declare function xmlHashQLookup(table: any, name: string | any, prefix: string | any): any;

declare function xmlHashQLookup2(table: any, name: string | any, prefix: string | any, name2: string | any, prefix2: string | any): any;

declare function xmlHashQLookup3(table: any, name: string | any, prefix: string | any, name2: string | any, prefix2: string | any, name3: string | any, prefix3: string | any): any;

declare function xmlHashRemoveEntry(table: any, name: string | any, f: (p1: any, p2: string) => void): number;

declare function xmlHashRemoveEntry2(table: any, name: string | any, name2: string | any, f: (p1: any, p2: string) => void): number;

declare function xmlHashRemoveEntry3(table: any, name: string | any, name2: string | any, name3: string | any, f: (p1: any, p2: string) => void): number;

declare function xmlHashScan(table: any, f: (p1: any, p2: any, p3: string) => void, data: any): void;

declare function xmlHashScan3(table: any, name: string | any, name2: string | any, name3: string | any, f: (p1: any, p2: any, p3: string) => void, data: any): void;

declare function xmlHashScanFull(table: any, f: (p1: any, p2: any, p3: string, p4: string, p5: string) => void, data: any): void;

declare function xmlHashScanFull3(table: any, name: string | any, name2: string | any, name3: string | any, f: (p1: any, p2: any, p3: string, p4: string, p5: string) => void, data: any): void;

declare function xmlHashSize(table: any): number;

declare function xmlHashUpdateEntry(table: any, name: string | any, userdata: any, f: (p1: any, p2: string) => void): number;

declare function xmlHashUpdateEntry2(table: any, name: string | any, name2: string | any, userdata: any, f: (p1: any, p2: string) => void): number;

declare function xmlHashUpdateEntry3(table: any, name: string | any, name2: string | any, name3: string | any, userdata: any, f: (p1: any, p2: string) => void): number;

declare function xmlIOFTPClose(context: any): number;

declare function xmlIOFTPMatch(filename: string | any): number;

declare function xmlIOFTPOpen(filename: string | any): any;

declare function xmlIOFTPRead(context: any, buffer: string | any, len: number): number;

declare function xmlIOHTTPClose(context: any): number;

declare function xmlIOHTTPMatch(filename: string | any): number;

declare function xmlIOHTTPOpen(filename: string | any): any;

declare function xmlIOHTTPOpenW(post_uri: string | any, compression: number): any;

declare function xmlIOHTTPRead(context: any, buffer: string | any, len: number): number;

declare function xmlIOParseDTD(sax: _xmlSAXHandler, input: _xmlParserInputBuffer, enc: xmlCharEncoding): _xmlDtd;

declare function xmlInitCharEncodingHandlers(): void;

declare function xmlInitGlobals(): void;

declare function xmlInitMemory(): number;

declare function xmlInitNodeInfoSeq(seq: _xmlParserNodeInfoSeq): void;

declare function xmlInitParser(): void;

declare function xmlInitParserCtxt(ctxt: _xmlParserCtxt): number;

declare function xmlInitThreads(): void;

declare function xmlInitializeCatalog(): void;

declare function xmlInitializeDict(): number;

declare function xmlInitializeGlobalState(gs: _xmlGlobalState): void;

declare function xmlInitializePredefinedEntities(): void;

declare function xmlIsBaseChar(ch: number): number;

declare var xmlIsBaseCharGroup: _xmlChRangeGroup;

declare function xmlIsBlank(ch: number): number;

declare function xmlIsBlankNode(node: _xmlNode): number;

declare function xmlIsChar(ch: number): number;

declare var xmlIsCharGroup: _xmlChRangeGroup;

declare function xmlIsCombining(ch: number): number;

declare var xmlIsCombiningGroup: _xmlChRangeGroup;

declare function xmlIsDigit(ch: number): number;

declare var xmlIsDigitGroup: _xmlChRangeGroup;

declare function xmlIsExtender(ch: number): number;

declare var xmlIsExtenderGroup: _xmlChRangeGroup;

declare function xmlIsID(doc: _xmlDoc, elem: _xmlNode, attr: _xmlAttr): number;

declare function xmlIsIdeographic(ch: number): number;

declare var xmlIsIdeographicGroup: _xmlChRangeGroup;

declare function xmlIsLetter(c: number): number;

declare function xmlIsMainThread(): number;

declare function xmlIsMixedElement(doc: _xmlDoc, name: string | any): number;

declare function xmlIsPubidChar(ch: number): number;

declare var xmlIsPubidChar_tab: number;

declare function xmlIsRef(doc: _xmlDoc, elem: _xmlNode, attr: _xmlAttr): number;

declare function xmlIsXHTML(systemID: string | any, publicID: string | any): number;

declare function xmlKeepBlanksDefault(val: number): number;

declare function xmlLastElementChild(parent: _xmlNode): _xmlNode;

declare function xmlLineNumbersDefault(val: number): number;

declare function xmlLinkGetData(lk: any): any;

declare function xmlListAppend(l: any, data: any): number;

declare function xmlListClear(l: any): void;

declare function xmlListCopy(cur: any, old: any): number;

declare function xmlListCreate(deallocator: (p1: any) => void, compare: (p1: any, p2: any) => number): any;

declare function xmlListDelete(l: any): void;

declare function xmlListDup(old: any): any;

declare function xmlListEmpty(l: any): number;

declare function xmlListEnd(l: any): any;

declare function xmlListFront(l: any): any;

declare function xmlListInsert(l: any, data: any): number;

declare function xmlListMerge(l1: any, l2: any): void;

declare function xmlListPopBack(l: any): void;

declare function xmlListPopFront(l: any): void;

declare function xmlListPushBack(l: any, data: any): number;

declare function xmlListPushFront(l: any, data: any): number;

declare function xmlListRemoveAll(l: any, data: any): number;

declare function xmlListRemoveFirst(l: any, data: any): number;

declare function xmlListRemoveLast(l: any, data: any): number;

declare function xmlListReverse(l: any): void;

declare function xmlListReverseSearch(l: any, data: any): any;

declare function xmlListReverseWalk(l: any, walker: (p1: any, p2: any) => number, user: any): void;

declare function xmlListSearch(l: any, data: any): any;

declare function xmlListSize(l: any): number;

declare function xmlListSort(l: any): void;

declare function xmlListWalk(l: any, walker: (p1: any, p2: any) => number, user: any): void;

declare function xmlLoadACatalog(filename: string | any): any;

declare function xmlLoadCatalog(filename: string | any): number;

declare function xmlLoadCatalogs(paths: string | any): void;

declare function xmlLoadExternalEntity(URL: string | any, ID: string | any, ctxt: _xmlParserCtxt): _xmlParserInput;

declare function xmlLoadSGMLSuperCatalog(filename: string | any): any;

declare function xmlLockLibrary(): void;

declare function xmlLsCountNode(node: _xmlNode): number;

declare function xmlLsOneNode(output: FILE, node: _xmlNode): void;

declare var xmlMalloc: (p1: number) => any;

declare var xmlMallocAtomic: (p1: number) => any;

declare function xmlMallocAtomicLoc(size: number, file: string | any, line: number): any;

declare function xmlMallocLoc(size: number, file: string | any, line: number): any;

declare function xmlMemBlocks(): number;

declare function xmlMemDisplay(fp: FILE): void;

declare function xmlMemDisplayLast(fp: FILE, nbBytes: number): void;

declare function xmlMemFree(ptr: any): void;

declare function xmlMemGet(freeFunc: (p1: any) => void, mallocFunc: (p1: number) => any, reallocFunc: (p1: any, p2: number) => any, strdupFunc: (p1: string) => string): number;

declare function xmlMemMalloc(size: number): any;

declare function xmlMemRealloc(ptr: any, size: number): any;

declare function xmlMemSetup(freeFunc: (p1: any) => void, mallocFunc: (p1: number) => any, reallocFunc: (p1: any, p2: number) => any, strdupFunc: (p1: string) => string): number;

declare function xmlMemShow(fp: FILE, nr: number): void;

declare var xmlMemStrdup: (p1: string) => string;

declare function xmlMemStrdupLoc(str: string | any, file: string | any, line: number): string;

declare function xmlMemUsed(): number;

declare function xmlMemoryDump(): void;

declare function xmlMemoryStrdup(str: string | any): string;

declare function xmlModuleClose(module: any): number;

declare function xmlModuleFree(module: any): number;

declare function xmlModuleOpen(filename: string | any, options: number): any;

enum xmlModuleOption {

	XML_MODULE_LAZY = 1,

	XML_MODULE_LOCAL = 2
}


declare function xmlModuleSymbol(module: any, name: string | any, result: any): number;

declare function xmlMutexLock(tok: any): void;

declare function xmlMutexUnlock(tok: any): void;

declare function xmlNamespaceParseNCName(ctxt: _xmlParserCtxt): string;

declare function xmlNamespaceParseNSDef(ctxt: _xmlParserCtxt): string;

declare function xmlNamespaceParseQName(ctxt: _xmlParserCtxt, prefix: string): string;

declare function xmlNanoFTPCheckResponse(ctx: any): number;

declare function xmlNanoFTPCleanup(): void;

declare function xmlNanoFTPClose(ctx: any): number;

declare function xmlNanoFTPCloseConnection(ctx: any): number;

declare function xmlNanoFTPConnect(ctx: any): number;

declare function xmlNanoFTPConnectTo(server: string | any, port: number): any;

declare function xmlNanoFTPCwd(ctx: any, directory: string | any): number;

declare function xmlNanoFTPDele(ctx: any, file: string | any): number;

declare function xmlNanoFTPFreeCtxt(ctx: any): void;

declare function xmlNanoFTPGet(ctx: any, callback: (p1: any, p2: string, p3: number) => void, userData: any, filename: string | any): number;

declare function xmlNanoFTPGetConnection(ctx: any): number;

declare function xmlNanoFTPGetResponse(ctx: any): number;

declare function xmlNanoFTPGetSocket(ctx: any, filename: string | any): number;

declare function xmlNanoFTPInit(): void;

declare function xmlNanoFTPList(ctx: any, callback: (p1: any, p2: string, p3: string, p4: string, p5: string, p6: number, p7: number, p8: number, p9: string, p10: number, p11: number, p12: number) => void, userData: any, filename: string | any): number;

declare function xmlNanoFTPNewCtxt(URL: string | any): any;

declare function xmlNanoFTPOpen(URL: string | any): any;

declare function xmlNanoFTPProxy(host: string | any, port: number, user: string | any, passwd: string | any, type: number): void;

declare function xmlNanoFTPQuit(ctx: any): number;

declare function xmlNanoFTPRead(ctx: any, dest: any, len: number): number;

declare function xmlNanoFTPScanProxy(URL: string | any): void;

declare function xmlNanoFTPUpdateURL(ctx: any, URL: string | any): number;

declare function xmlNanoHTTPAuthHeader(ctx: any): string;

declare function xmlNanoHTTPCleanup(): void;

declare function xmlNanoHTTPClose(ctx: any): void;

declare function xmlNanoHTTPContentLength(ctx: any): number;

declare function xmlNanoHTTPEncoding(ctx: any): string;

declare function xmlNanoHTTPFetch(URL: string | any, filename: string | any, contentType: string): number;

declare function xmlNanoHTTPInit(): void;

declare function xmlNanoHTTPMethod(URL: string | any, method: string | any, input: string | any, contentType: string, headers: string | any, ilen: number): any;

declare function xmlNanoHTTPMethodRedir(URL: string | any, method: string | any, input: string | any, contentType: string, redir: string, headers: string | any, ilen: number): any;

declare function xmlNanoHTTPMimeType(ctx: any): string;

declare function xmlNanoHTTPOpen(URL: string | any, contentType: string): any;

declare function xmlNanoHTTPOpenRedir(URL: string | any, contentType: string, redir: string): any;

declare function xmlNanoHTTPRead(ctx: any, dest: any, len: number): number;

declare function xmlNanoHTTPRedir(ctx: any): string;

declare function xmlNanoHTTPReturnCode(ctx: any): number;

declare function xmlNanoHTTPSave(ctxt: any, filename: string | any): number;

declare function xmlNanoHTTPScanProxy(URL: string | any): void;

declare function xmlNewAutomata(): any;

declare function xmlNewCDataBlock(doc: _xmlDoc, content: string | any, len: number): _xmlNode;

declare function xmlNewCatalog(sgml: number): any;

declare function xmlNewCharEncodingHandler(name: string | any, input: (p1: string, p2: number, p3: string, p4: number) => number, output: (p1: string, p2: number, p3: string, p4: number) => number): _xmlCharEncodingHandler;

declare function xmlNewCharRef(doc: _xmlDoc, name: string | any): _xmlNode;

declare function xmlNewChild(parent: _xmlNode, ns: _xmlNs, name: string | any, content: string | any): _xmlNode;

declare function xmlNewComment(content: string | any): _xmlNode;

declare function xmlNewDoc(version: string | any): _xmlDoc;

declare function xmlNewDocComment(doc: _xmlDoc, content: string | any): _xmlNode;

declare function xmlNewDocElementContent(doc: _xmlDoc, name: string | any, type: xmlElementContentType): _xmlElementContent;

declare function xmlNewDocFragment(doc: _xmlDoc): _xmlNode;

declare function xmlNewDocNode(doc: _xmlDoc, ns: _xmlNs, name: string | any, content: string | any): _xmlNode;

declare function xmlNewDocNodeEatName(doc: _xmlDoc, ns: _xmlNs, name: string | any, content: string | any): _xmlNode;

declare function xmlNewDocPI(doc: _xmlDoc, name: string | any, content: string | any): _xmlNode;

declare function xmlNewDocProp(doc: _xmlDoc, name: string | any, value: string | any): _xmlAttr;

declare function xmlNewDocRawNode(doc: _xmlDoc, ns: _xmlNs, name: string | any, content: string | any): _xmlNode;

declare function xmlNewDocText(doc: _xmlDoc, content: string | any): _xmlNode;

declare function xmlNewDocTextLen(doc: _xmlDoc, content: string | any, len: number): _xmlNode;

declare function xmlNewDtd(doc: _xmlDoc, name: string | any, ExternalID: string | any, SystemID: string | any): _xmlDtd;

declare function xmlNewElementContent(name: string | any, type: xmlElementContentType): _xmlElementContent;

declare function xmlNewEntity(doc: _xmlDoc, name: string | any, type: number, ExternalID: string | any, SystemID: string | any, content: string | any): _xmlEntity;

declare function xmlNewEntityInputStream(ctxt: _xmlParserCtxt, entity: _xmlEntity): _xmlParserInput;

declare function xmlNewGlobalNs(doc: _xmlDoc, href: string | any, prefix: string | any): _xmlNs;

declare function xmlNewIOInputStream(ctxt: _xmlParserCtxt, input: _xmlParserInputBuffer, enc: xmlCharEncoding): _xmlParserInput;

declare function xmlNewInputFromFile(ctxt: _xmlParserCtxt, filename: string | any): _xmlParserInput;

declare function xmlNewInputStream(ctxt: _xmlParserCtxt): _xmlParserInput;

declare function xmlNewMutex(): any;

declare function xmlNewNode(ns: _xmlNs, name: string | any): _xmlNode;

declare function xmlNewNodeEatName(ns: _xmlNs, name: string | any): _xmlNode;

declare function xmlNewNs(node: _xmlNode, href: string | any, prefix: string | any): _xmlNs;

declare function xmlNewNsProp(node: _xmlNode, ns: _xmlNs, name: string | any, value: string | any): _xmlAttr;

declare function xmlNewNsPropEatName(node: _xmlNode, ns: _xmlNs, name: string | any, value: string | any): _xmlAttr;

declare function xmlNewPI(name: string | any, content: string | any): _xmlNode;

declare function xmlNewParserCtxt(): _xmlParserCtxt;

declare function xmlNewProp(node: _xmlNode, name: string | any, value: string | any): _xmlAttr;

declare function xmlNewRMutex(): any;

declare function xmlNewReference(doc: _xmlDoc, name: string | any): _xmlNode;

declare function xmlNewStringInputStream(ctxt: _xmlParserCtxt, buffer: string | any): _xmlParserInput;

declare function xmlNewText(content: string | any): _xmlNode;

declare function xmlNewTextChild(parent: _xmlNode, ns: _xmlNs, name: string | any, content: string | any): _xmlNode;

declare function xmlNewTextLen(content: string | any, len: number): _xmlNode;

declare function xmlNewTextReader(input: _xmlParserInputBuffer, URI: string | any): any;

declare function xmlNewTextReaderFilename(URI: string | any): any;

declare function xmlNewTextWriter(out: _xmlOutputBuffer): any;

declare function xmlNewTextWriterDoc(doc: _xmlDoc, compression: number): any;

declare function xmlNewTextWriterFilename(uri: string | any, compression: number): any;

declare function xmlNewTextWriterMemory(buf: _xmlBuffer, compression: number): any;

declare function xmlNewTextWriterPushParser(ctxt: _xmlParserCtxt, compression: number): any;

declare function xmlNewTextWriterTree(doc: _xmlDoc, node: _xmlNode, compression: number): any;

declare function xmlNewValidCtxt(): _xmlValidCtxt;

declare function xmlNextChar(ctxt: _xmlParserCtxt): void;

declare function xmlNextElementSibling(node: _xmlNode): _xmlNode;

declare function xmlNoNetExternalEntityLoader(URL: string | any, ID: string | any, ctxt: _xmlParserCtxt): _xmlParserInput;

declare function xmlNodeAddContent(cur: _xmlNode, content: string | any): void;

declare function xmlNodeAddContentLen(cur: _xmlNode, content: string | any, len: number): void;

declare function xmlNodeBufGetContent(buffer: _xmlBuffer, cur: _xmlNode): number;

declare function xmlNodeDump(buf: _xmlBuffer, doc: _xmlDoc, cur: _xmlNode, level: number, format: number): number;

declare function xmlNodeDumpOutput(buf: _xmlOutputBuffer, doc: _xmlDoc, cur: _xmlNode, level: number, format: number, encoding: string | any): void;

declare function xmlNodeGetBase(doc: _xmlDoc, cur: _xmlNode): string;

declare function xmlNodeGetContent(cur: _xmlNode): string;

declare function xmlNodeGetLang(cur: _xmlNode): string;

declare function xmlNodeGetSpacePreserve(cur: _xmlNode): number;

declare function xmlNodeIsText(node: _xmlNode): number;

declare function xmlNodeListGetRawString(doc: _xmlDoc, list: _xmlNode, inLine: number): string;

declare function xmlNodeListGetString(doc: _xmlDoc, list: _xmlNode, inLine: number): string;

declare function xmlNodeSetBase(cur: _xmlNode, uri: string | any): void;

declare function xmlNodeSetContent(cur: _xmlNode, content: string | any): void;

declare function xmlNodeSetContentLen(cur: _xmlNode, content: string | any, len: number): void;

declare function xmlNodeSetLang(cur: _xmlNode, lang: string | any): void;

declare function xmlNodeSetName(cur: _xmlNode, name: string | any): void;

declare function xmlNodeSetSpacePreserve(cur: _xmlNode, val: number): void;

declare function xmlNormalizeURIPath(path: string | any): number;

declare function xmlNormalizeWindowsPath(path: string | any): string;

declare function xmlOutputBufferClose(out: _xmlOutputBuffer): number;

declare function xmlOutputBufferCreateBuffer(buffer: _xmlBuffer, encoder: _xmlCharEncodingHandler): _xmlOutputBuffer;

declare function xmlOutputBufferCreateFd(fd: number, encoder: _xmlCharEncodingHandler): _xmlOutputBuffer;

declare function xmlOutputBufferCreateFile(file: FILE, encoder: _xmlCharEncodingHandler): _xmlOutputBuffer;

declare function xmlOutputBufferCreateFilename(URI: string | any, encoder: _xmlCharEncodingHandler, compression: number): _xmlOutputBuffer;

declare function xmlOutputBufferCreateFilenameDefault(func: (p1: string, p2: _xmlCharEncodingHandler, p3: number) => _xmlOutputBuffer): (p1: string, p2: _xmlCharEncodingHandler, p3: number) => _xmlOutputBuffer;

declare function xmlOutputBufferCreateIO(iowrite: (p1: any, p2: string, p3: number) => number, ioclose: (p1: any) => number, ioctx: any, encoder: _xmlCharEncodingHandler): _xmlOutputBuffer;

declare function xmlOutputBufferFlush(out: _xmlOutputBuffer): number;

declare function xmlOutputBufferGetContent(out: _xmlOutputBuffer): string;

declare function xmlOutputBufferGetSize(out: _xmlOutputBuffer): number;

declare function xmlOutputBufferWrite(out: _xmlOutputBuffer, len: number, buf: string | any): number;

declare function xmlOutputBufferWriteEscape(out: _xmlOutputBuffer, str: string | any, escaping: (p1: string, p2: number, p3: string, p4: number) => number): number;

declare function xmlOutputBufferWriteString(out: _xmlOutputBuffer, str: string | any): number;

declare function xmlParseAttValue(ctxt: _xmlParserCtxt): string;

declare function xmlParseAttribute(ctxt: _xmlParserCtxt, value: string): string;

declare function xmlParseAttributeListDecl(ctxt: _xmlParserCtxt): void;

declare function xmlParseAttributeType(ctxt: _xmlParserCtxt, tree: _xmlEnumeration): number;

declare function xmlParseBalancedChunkMemory(doc: _xmlDoc, sax: _xmlSAXHandler, user_data: any, depth: number, string: string | any, lst: _xmlNode): number;

declare function xmlParseBalancedChunkMemoryRecover(doc: _xmlDoc, sax: _xmlSAXHandler, user_data: any, depth: number, string: string | any, lst: _xmlNode, recover: number): number;

declare function xmlParseCDSect(ctxt: _xmlParserCtxt): void;

declare function xmlParseCatalogFile(filename: string | any): _xmlDoc;

declare function xmlParseCharData(ctxt: _xmlParserCtxt, cdata: number): void;

declare function xmlParseCharEncoding(name: string | any): xmlCharEncoding;

declare function xmlParseCharRef(ctxt: _xmlParserCtxt): number;

declare function xmlParseChunk(ctxt: _xmlParserCtxt, chunk: string | any, size: number, terminate: number): number;

declare function xmlParseComment(ctxt: _xmlParserCtxt): void;

declare function xmlParseContent(ctxt: _xmlParserCtxt): void;

declare function xmlParseCtxtExternalEntity(ctx: _xmlParserCtxt, URL: string | any, ID: string | any, lst: _xmlNode): number;

declare function xmlParseDTD(ExternalID: string | any, SystemID: string | any): _xmlDtd;

declare function xmlParseDefaultDecl(ctxt: _xmlParserCtxt, value: string): number;

declare function xmlParseDoc(cur: string | any): _xmlDoc;

declare function xmlParseDocTypeDecl(ctxt: _xmlParserCtxt): void;

declare function xmlParseDocument(ctxt: _xmlParserCtxt): number;

declare function xmlParseElement(ctxt: _xmlParserCtxt): void;

declare function xmlParseElementChildrenContentDecl(ctxt: _xmlParserCtxt, inputchk: number): _xmlElementContent;

declare function xmlParseElementContentDecl(ctxt: _xmlParserCtxt, name: string | any, result: _xmlElementContent): number;

declare function xmlParseElementDecl(ctxt: _xmlParserCtxt): number;

declare function xmlParseElementMixedContentDecl(ctxt: _xmlParserCtxt, inputchk: number): _xmlElementContent;

declare function xmlParseEncName(ctxt: _xmlParserCtxt): string;

declare function xmlParseEncodingDecl(ctxt: _xmlParserCtxt): string;

declare function xmlParseEndTag(ctxt: _xmlParserCtxt): void;

declare function xmlParseEntity(filename: string | any): _xmlDoc;

declare function xmlParseEntityDecl(ctxt: _xmlParserCtxt): void;

declare function xmlParseEntityRef(ctxt: _xmlParserCtxt): _xmlEntity;

declare function xmlParseEntityValue(ctxt: _xmlParserCtxt, orig: string): string;

declare function xmlParseEnumeratedType(ctxt: _xmlParserCtxt, tree: _xmlEnumeration): number;

declare function xmlParseEnumerationType(ctxt: _xmlParserCtxt): _xmlEnumeration;

declare function xmlParseExtParsedEnt(ctxt: _xmlParserCtxt): number;

declare function xmlParseExternalEntity(doc: _xmlDoc, sax: _xmlSAXHandler, user_data: any, depth: number, URL: string | any, ID: string | any, lst: _xmlNode): number;

declare function xmlParseExternalID(ctxt: _xmlParserCtxt, publicID: string, strict: number): string;

declare function xmlParseExternalSubset(ctxt: _xmlParserCtxt, ExternalID: string | any, SystemID: string | any): void;

declare function xmlParseFile(filename: string | any): _xmlDoc;

declare function xmlParseInNodeContext(node: _xmlNode, data: string | any, datalen: number, options: number, lst: _xmlNode): xmlParserErrors;

declare function xmlParseMarkupDecl(ctxt: _xmlParserCtxt): void;

declare function xmlParseMemory(buffer: string | any, size: number): _xmlDoc;

declare function xmlParseMisc(ctxt: _xmlParserCtxt): void;

declare function xmlParseName(ctxt: _xmlParserCtxt): string;

declare function xmlParseNamespace(ctxt: _xmlParserCtxt): void;

declare function xmlParseNmtoken(ctxt: _xmlParserCtxt): string;

declare function xmlParseNotationDecl(ctxt: _xmlParserCtxt): void;

declare function xmlParseNotationType(ctxt: _xmlParserCtxt): _xmlEnumeration;

declare function xmlParsePEReference(ctxt: _xmlParserCtxt): void;

declare function xmlParsePI(ctxt: _xmlParserCtxt): void;

declare function xmlParsePITarget(ctxt: _xmlParserCtxt): string;

declare function xmlParsePubidLiteral(ctxt: _xmlParserCtxt): string;

declare function xmlParseQuotedString(ctxt: _xmlParserCtxt): string;

declare function xmlParseReference(ctxt: _xmlParserCtxt): void;

declare function xmlParseSDDecl(ctxt: _xmlParserCtxt): number;

declare function xmlParseStartTag(ctxt: _xmlParserCtxt): string;

declare function xmlParseSystemLiteral(ctxt: _xmlParserCtxt): string;

declare function xmlParseTextDecl(ctxt: _xmlParserCtxt): void;

declare function xmlParseURI(str: string | any): _xmlURI;

declare function xmlParseURIRaw(str: string | any, raw: number): _xmlURI;

declare function xmlParseURIReference(uri: _xmlURI, str: string | any): number;

declare function xmlParseVersionInfo(ctxt: _xmlParserCtxt): string;

declare function xmlParseVersionNum(ctxt: _xmlParserCtxt): string;

declare function xmlParseXMLDecl(ctxt: _xmlParserCtxt): void;

declare function xmlParserAddNodeInfo(ctxt: _xmlParserCtxt, info: _xmlParserNodeInfo): void;

enum xmlParserErrors {

	XML_ERR_OK = 0,

	XML_ERR_INTERNAL_ERROR = 1,

	XML_ERR_NO_MEMORY = 2,

	XML_ERR_DOCUMENT_START = 3,

	XML_ERR_DOCUMENT_EMPTY = 4,

	XML_ERR_DOCUMENT_END = 5,

	XML_ERR_INVALID_HEX_CHARREF = 6,

	XML_ERR_INVALID_DEC_CHARREF = 7,

	XML_ERR_INVALID_CHARREF = 8,

	XML_ERR_INVALID_CHAR = 9,

	XML_ERR_CHARREF_AT_EOF = 10,

	XML_ERR_CHARREF_IN_PROLOG = 11,

	XML_ERR_CHARREF_IN_EPILOG = 12,

	XML_ERR_CHARREF_IN_DTD = 13,

	XML_ERR_ENTITYREF_AT_EOF = 14,

	XML_ERR_ENTITYREF_IN_PROLOG = 15,

	XML_ERR_ENTITYREF_IN_EPILOG = 16,

	XML_ERR_ENTITYREF_IN_DTD = 17,

	XML_ERR_PEREF_AT_EOF = 18,

	XML_ERR_PEREF_IN_PROLOG = 19,

	XML_ERR_PEREF_IN_EPILOG = 20,

	XML_ERR_PEREF_IN_INT_SUBSET = 21,

	XML_ERR_ENTITYREF_NO_NAME = 22,

	XML_ERR_ENTITYREF_SEMICOL_MISSING = 23,

	XML_ERR_PEREF_NO_NAME = 24,

	XML_ERR_PEREF_SEMICOL_MISSING = 25,

	XML_ERR_UNDECLARED_ENTITY = 26,

	XML_WAR_UNDECLARED_ENTITY = 27,

	XML_ERR_UNPARSED_ENTITY = 28,

	XML_ERR_ENTITY_IS_EXTERNAL = 29,

	XML_ERR_ENTITY_IS_PARAMETER = 30,

	XML_ERR_UNKNOWN_ENCODING = 31,

	XML_ERR_UNSUPPORTED_ENCODING = 32,

	XML_ERR_STRING_NOT_STARTED = 33,

	XML_ERR_STRING_NOT_CLOSED = 34,

	XML_ERR_NS_DECL_ERROR = 35,

	XML_ERR_ENTITY_NOT_STARTED = 36,

	XML_ERR_ENTITY_NOT_FINISHED = 37,

	XML_ERR_LT_IN_ATTRIBUTE = 38,

	XML_ERR_ATTRIBUTE_NOT_STARTED = 39,

	XML_ERR_ATTRIBUTE_NOT_FINISHED = 40,

	XML_ERR_ATTRIBUTE_WITHOUT_VALUE = 41,

	XML_ERR_ATTRIBUTE_REDEFINED = 42,

	XML_ERR_LITERAL_NOT_STARTED = 43,

	XML_ERR_LITERAL_NOT_FINISHED = 44,

	XML_ERR_COMMENT_NOT_FINISHED = 45,

	XML_ERR_PI_NOT_STARTED = 46,

	XML_ERR_PI_NOT_FINISHED = 47,

	XML_ERR_NOTATION_NOT_STARTED = 48,

	XML_ERR_NOTATION_NOT_FINISHED = 49,

	XML_ERR_ATTLIST_NOT_STARTED = 50,

	XML_ERR_ATTLIST_NOT_FINISHED = 51,

	XML_ERR_MIXED_NOT_STARTED = 52,

	XML_ERR_MIXED_NOT_FINISHED = 53,

	XML_ERR_ELEMCONTENT_NOT_STARTED = 54,

	XML_ERR_ELEMCONTENT_NOT_FINISHED = 55,

	XML_ERR_XMLDECL_NOT_STARTED = 56,

	XML_ERR_XMLDECL_NOT_FINISHED = 57,

	XML_ERR_CONDSEC_NOT_STARTED = 58,

	XML_ERR_CONDSEC_NOT_FINISHED = 59,

	XML_ERR_EXT_SUBSET_NOT_FINISHED = 60,

	XML_ERR_DOCTYPE_NOT_FINISHED = 61,

	XML_ERR_MISPLACED_CDATA_END = 62,

	XML_ERR_CDATA_NOT_FINISHED = 63,

	XML_ERR_RESERVED_XML_NAME = 64,

	XML_ERR_SPACE_REQUIRED = 65,

	XML_ERR_SEPARATOR_REQUIRED = 66,

	XML_ERR_NMTOKEN_REQUIRED = 67,

	XML_ERR_NAME_REQUIRED = 68,

	XML_ERR_PCDATA_REQUIRED = 69,

	XML_ERR_URI_REQUIRED = 70,

	XML_ERR_PUBID_REQUIRED = 71,

	XML_ERR_LT_REQUIRED = 72,

	XML_ERR_GT_REQUIRED = 73,

	XML_ERR_LTSLASH_REQUIRED = 74,

	XML_ERR_EQUAL_REQUIRED = 75,

	XML_ERR_TAG_NAME_MISMATCH = 76,

	XML_ERR_TAG_NOT_FINISHED = 77,

	XML_ERR_STANDALONE_VALUE = 78,

	XML_ERR_ENCODING_NAME = 79,

	XML_ERR_HYPHEN_IN_COMMENT = 80,

	XML_ERR_INVALID_ENCODING = 81,

	XML_ERR_EXT_ENTITY_STANDALONE = 82,

	XML_ERR_CONDSEC_INVALID = 83,

	XML_ERR_VALUE_REQUIRED = 84,

	XML_ERR_NOT_WELL_BALANCED = 85,

	XML_ERR_EXTRA_CONTENT = 86,

	XML_ERR_ENTITY_CHAR_ERROR = 87,

	XML_ERR_ENTITY_PE_INTERNAL = 88,

	XML_ERR_ENTITY_LOOP = 89,

	XML_ERR_ENTITY_BOUNDARY = 90,

	XML_ERR_INVALID_URI = 91,

	XML_ERR_URI_FRAGMENT = 92,

	XML_WAR_CATALOG_PI = 93,

	XML_ERR_NO_DTD = 94,

	XML_ERR_CONDSEC_INVALID_KEYWORD = 95,

	XML_ERR_VERSION_MISSING = 96,

	XML_WAR_UNKNOWN_VERSION = 97,

	XML_WAR_LANG_VALUE = 98,

	XML_WAR_NS_URI = 99,

	XML_WAR_NS_URI_RELATIVE = 100,

	XML_ERR_MISSING_ENCODING = 101,

	XML_WAR_SPACE_VALUE = 102,

	XML_ERR_NOT_STANDALONE = 103,

	XML_ERR_ENTITY_PROCESSING = 104,

	XML_ERR_NOTATION_PROCESSING = 105,

	XML_WAR_NS_COLUMN = 106,

	XML_WAR_ENTITY_REDEFINED = 107,

	XML_ERR_UNKNOWN_VERSION = 108,

	XML_ERR_VERSION_MISMATCH = 109,

	XML_ERR_NAME_TOO_LONG = 110,

	XML_ERR_USER_STOP = 111,

	XML_NS_ERR_XML_NAMESPACE = 200,

	XML_NS_ERR_UNDEFINED_NAMESPACE = 201,

	XML_NS_ERR_QNAME = 202,

	XML_NS_ERR_ATTRIBUTE_REDEFINED = 203,

	XML_NS_ERR_EMPTY = 204,

	XML_NS_ERR_COLON = 205,

	XML_DTD_ATTRIBUTE_DEFAULT = 500,

	XML_DTD_ATTRIBUTE_REDEFINED = 501,

	XML_DTD_ATTRIBUTE_VALUE = 502,

	XML_DTD_CONTENT_ERROR = 503,

	XML_DTD_CONTENT_MODEL = 504,

	XML_DTD_CONTENT_NOT_DETERMINIST = 505,

	XML_DTD_DIFFERENT_PREFIX = 506,

	XML_DTD_ELEM_DEFAULT_NAMESPACE = 507,

	XML_DTD_ELEM_NAMESPACE = 508,

	XML_DTD_ELEM_REDEFINED = 509,

	XML_DTD_EMPTY_NOTATION = 510,

	XML_DTD_ENTITY_TYPE = 511,

	XML_DTD_ID_FIXED = 512,

	XML_DTD_ID_REDEFINED = 513,

	XML_DTD_ID_SUBSET = 514,

	XML_DTD_INVALID_CHILD = 515,

	XML_DTD_INVALID_DEFAULT = 516,

	XML_DTD_LOAD_ERROR = 517,

	XML_DTD_MISSING_ATTRIBUTE = 518,

	XML_DTD_MIXED_CORRUPT = 519,

	XML_DTD_MULTIPLE_ID = 520,

	XML_DTD_NO_DOC = 521,

	XML_DTD_NO_DTD = 522,

	XML_DTD_NO_ELEM_NAME = 523,

	XML_DTD_NO_PREFIX = 524,

	XML_DTD_NO_ROOT = 525,

	XML_DTD_NOTATION_REDEFINED = 526,

	XML_DTD_NOTATION_VALUE = 527,

	XML_DTD_NOT_EMPTY = 528,

	XML_DTD_NOT_PCDATA = 529,

	XML_DTD_NOT_STANDALONE = 530,

	XML_DTD_ROOT_NAME = 531,

	XML_DTD_STANDALONE_WHITE_SPACE = 532,

	XML_DTD_UNKNOWN_ATTRIBUTE = 533,

	XML_DTD_UNKNOWN_ELEM = 534,

	XML_DTD_UNKNOWN_ENTITY = 535,

	XML_DTD_UNKNOWN_ID = 536,

	XML_DTD_UNKNOWN_NOTATION = 537,

	XML_DTD_STANDALONE_DEFAULTED = 538,

	XML_DTD_XMLID_VALUE = 539,

	XML_DTD_XMLID_TYPE = 540,

	XML_DTD_DUP_TOKEN = 541,

	XML_HTML_STRUCURE_ERROR = 800,

	XML_HTML_UNKNOWN_TAG = 801,

	XML_RNGP_ANYNAME_ATTR_ANCESTOR = 1000,

	XML_RNGP_ATTR_CONFLICT = 1001,

	XML_RNGP_ATTRIBUTE_CHILDREN = 1002,

	XML_RNGP_ATTRIBUTE_CONTENT = 1003,

	XML_RNGP_ATTRIBUTE_EMPTY = 1004,

	XML_RNGP_ATTRIBUTE_NOOP = 1005,

	XML_RNGP_CHOICE_CONTENT = 1006,

	XML_RNGP_CHOICE_EMPTY = 1007,

	XML_RNGP_CREATE_FAILURE = 1008,

	XML_RNGP_DATA_CONTENT = 1009,

	XML_RNGP_DEF_CHOICE_AND_INTERLEAVE = 1010,

	XML_RNGP_DEFINE_CREATE_FAILED = 1011,

	XML_RNGP_DEFINE_EMPTY = 1012,

	XML_RNGP_DEFINE_MISSING = 1013,

	XML_RNGP_DEFINE_NAME_MISSING = 1014,

	XML_RNGP_ELEM_CONTENT_EMPTY = 1015,

	XML_RNGP_ELEM_CONTENT_ERROR = 1016,

	XML_RNGP_ELEMENT_EMPTY = 1017,

	XML_RNGP_ELEMENT_CONTENT = 1018,

	XML_RNGP_ELEMENT_NAME = 1019,

	XML_RNGP_ELEMENT_NO_CONTENT = 1020,

	XML_RNGP_ELEM_TEXT_CONFLICT = 1021,

	XML_RNGP_EMPTY = 1022,

	XML_RNGP_EMPTY_CONSTRUCT = 1023,

	XML_RNGP_EMPTY_CONTENT = 1024,

	XML_RNGP_EMPTY_NOT_EMPTY = 1025,

	XML_RNGP_ERROR_TYPE_LIB = 1026,

	XML_RNGP_EXCEPT_EMPTY = 1027,

	XML_RNGP_EXCEPT_MISSING = 1028,

	XML_RNGP_EXCEPT_MULTIPLE = 1029,

	XML_RNGP_EXCEPT_NO_CONTENT = 1030,

	XML_RNGP_EXTERNALREF_EMTPY = 1031,

	XML_RNGP_EXTERNAL_REF_FAILURE = 1032,

	XML_RNGP_EXTERNALREF_RECURSE = 1033,

	XML_RNGP_FORBIDDEN_ATTRIBUTE = 1034,

	XML_RNGP_FOREIGN_ELEMENT = 1035,

	XML_RNGP_GRAMMAR_CONTENT = 1036,

	XML_RNGP_GRAMMAR_EMPTY = 1037,

	XML_RNGP_GRAMMAR_MISSING = 1038,

	XML_RNGP_GRAMMAR_NO_START = 1039,

	XML_RNGP_GROUP_ATTR_CONFLICT = 1040,

	XML_RNGP_HREF_ERROR = 1041,

	XML_RNGP_INCLUDE_EMPTY = 1042,

	XML_RNGP_INCLUDE_FAILURE = 1043,

	XML_RNGP_INCLUDE_RECURSE = 1044,

	XML_RNGP_INTERLEAVE_ADD = 1045,

	XML_RNGP_INTERLEAVE_CREATE_FAILED = 1046,

	XML_RNGP_INTERLEAVE_EMPTY = 1047,

	XML_RNGP_INTERLEAVE_NO_CONTENT = 1048,

	XML_RNGP_INVALID_DEFINE_NAME = 1049,

	XML_RNGP_INVALID_URI = 1050,

	XML_RNGP_INVALID_VALUE = 1051,

	XML_RNGP_MISSING_HREF = 1052,

	XML_RNGP_NAME_MISSING = 1053,

	XML_RNGP_NEED_COMBINE = 1054,

	XML_RNGP_NOTALLOWED_NOT_EMPTY = 1055,

	XML_RNGP_NSNAME_ATTR_ANCESTOR = 1056,

	XML_RNGP_NSNAME_NO_NS = 1057,

	XML_RNGP_PARAM_FORBIDDEN = 1058,

	XML_RNGP_PARAM_NAME_MISSING = 1059,

	XML_RNGP_PARENTREF_CREATE_FAILED = 1060,

	XML_RNGP_PARENTREF_NAME_INVALID = 1061,

	XML_RNGP_PARENTREF_NO_NAME = 1062,

	XML_RNGP_PARENTREF_NO_PARENT = 1063,

	XML_RNGP_PARENTREF_NOT_EMPTY = 1064,

	XML_RNGP_PARSE_ERROR = 1065,

	XML_RNGP_PAT_ANYNAME_EXCEPT_ANYNAME = 1066,

	XML_RNGP_PAT_ATTR_ATTR = 1067,

	XML_RNGP_PAT_ATTR_ELEM = 1068,

	XML_RNGP_PAT_DATA_EXCEPT_ATTR = 1069,

	XML_RNGP_PAT_DATA_EXCEPT_ELEM = 1070,

	XML_RNGP_PAT_DATA_EXCEPT_EMPTY = 1071,

	XML_RNGP_PAT_DATA_EXCEPT_GROUP = 1072,

	XML_RNGP_PAT_DATA_EXCEPT_INTERLEAVE = 1073,

	XML_RNGP_PAT_DATA_EXCEPT_LIST = 1074,

	XML_RNGP_PAT_DATA_EXCEPT_ONEMORE = 1075,

	XML_RNGP_PAT_DATA_EXCEPT_REF = 1076,

	XML_RNGP_PAT_DATA_EXCEPT_TEXT = 1077,

	XML_RNGP_PAT_LIST_ATTR = 1078,

	XML_RNGP_PAT_LIST_ELEM = 1079,

	XML_RNGP_PAT_LIST_INTERLEAVE = 1080,

	XML_RNGP_PAT_LIST_LIST = 1081,

	XML_RNGP_PAT_LIST_REF = 1082,

	XML_RNGP_PAT_LIST_TEXT = 1083,

	XML_RNGP_PAT_NSNAME_EXCEPT_ANYNAME = 1084,

	XML_RNGP_PAT_NSNAME_EXCEPT_NSNAME = 1085,

	XML_RNGP_PAT_ONEMORE_GROUP_ATTR = 1086,

	XML_RNGP_PAT_ONEMORE_INTERLEAVE_ATTR = 1087,

	XML_RNGP_PAT_START_ATTR = 1088,

	XML_RNGP_PAT_START_DATA = 1089,

	XML_RNGP_PAT_START_EMPTY = 1090,

	XML_RNGP_PAT_START_GROUP = 1091,

	XML_RNGP_PAT_START_INTERLEAVE = 1092,

	XML_RNGP_PAT_START_LIST = 1093,

	XML_RNGP_PAT_START_ONEMORE = 1094,

	XML_RNGP_PAT_START_TEXT = 1095,

	XML_RNGP_PAT_START_VALUE = 1096,

	XML_RNGP_PREFIX_UNDEFINED = 1097,

	XML_RNGP_REF_CREATE_FAILED = 1098,

	XML_RNGP_REF_CYCLE = 1099,

	XML_RNGP_REF_NAME_INVALID = 1100,

	XML_RNGP_REF_NO_DEF = 1101,

	XML_RNGP_REF_NO_NAME = 1102,

	XML_RNGP_REF_NOT_EMPTY = 1103,

	XML_RNGP_START_CHOICE_AND_INTERLEAVE = 1104,

	XML_RNGP_START_CONTENT = 1105,

	XML_RNGP_START_EMPTY = 1106,

	XML_RNGP_START_MISSING = 1107,

	XML_RNGP_TEXT_EXPECTED = 1108,

	XML_RNGP_TEXT_HAS_CHILD = 1109,

	XML_RNGP_TYPE_MISSING = 1110,

	XML_RNGP_TYPE_NOT_FOUND = 1111,

	XML_RNGP_TYPE_VALUE = 1112,

	XML_RNGP_UNKNOWN_ATTRIBUTE = 1113,

	XML_RNGP_UNKNOWN_COMBINE = 1114,

	XML_RNGP_UNKNOWN_CONSTRUCT = 1115,

	XML_RNGP_UNKNOWN_TYPE_LIB = 1116,

	XML_RNGP_URI_FRAGMENT = 1117,

	XML_RNGP_URI_NOT_ABSOLUTE = 1118,

	XML_RNGP_VALUE_EMPTY = 1119,

	XML_RNGP_VALUE_NO_CONTENT = 1120,

	XML_RNGP_XMLNS_NAME = 1121,

	XML_RNGP_XML_NS = 1122,

	XML_XPATH_EXPRESSION_OK = 1200,

	XML_XPATH_NUMBER_ERROR = 1201,

	XML_XPATH_UNFINISHED_LITERAL_ERROR = 1202,

	XML_XPATH_START_LITERAL_ERROR = 1203,

	XML_XPATH_VARIABLE_REF_ERROR = 1204,

	XML_XPATH_UNDEF_VARIABLE_ERROR = 1205,

	XML_XPATH_INVALID_PREDICATE_ERROR = 1206,

	XML_XPATH_EXPR_ERROR = 1207,

	XML_XPATH_UNCLOSED_ERROR = 1208,

	XML_XPATH_UNKNOWN_FUNC_ERROR = 1209,

	XML_XPATH_INVALID_OPERAND = 1210,

	XML_XPATH_INVALID_TYPE = 1211,

	XML_XPATH_INVALID_ARITY = 1212,

	XML_XPATH_INVALID_CTXT_SIZE = 1213,

	XML_XPATH_INVALID_CTXT_POSITION = 1214,

	XML_XPATH_MEMORY_ERROR = 1215,

	XML_XPTR_SYNTAX_ERROR = 1216,

	XML_XPTR_RESOURCE_ERROR = 1217,

	XML_XPTR_SUB_RESOURCE_ERROR = 1218,

	XML_XPATH_UNDEF_PREFIX_ERROR = 1219,

	XML_XPATH_ENCODING_ERROR = 1220,

	XML_XPATH_INVALID_CHAR_ERROR = 1221,

	XML_TREE_INVALID_HEX = 1300,

	XML_TREE_INVALID_DEC = 1301,

	XML_TREE_UNTERMINATED_ENTITY = 1302,

	XML_TREE_NOT_UTF8 = 1303,

	XML_SAVE_NOT_UTF8 = 1400,

	XML_SAVE_CHAR_INVALID = 1401,

	XML_SAVE_NO_DOCTYPE = 1402,

	XML_SAVE_UNKNOWN_ENCODING = 1403,

	XML_REGEXP_COMPILE_ERROR = 1450,

	XML_IO_UNKNOWN = 1500,

	XML_IO_EACCES = 1501,

	XML_IO_EAGAIN = 1502,

	XML_IO_EBADF = 1503,

	XML_IO_EBADMSG = 1504,

	XML_IO_EBUSY = 1505,

	XML_IO_ECANCELED = 1506,

	XML_IO_ECHILD = 1507,

	XML_IO_EDEADLK = 1508,

	XML_IO_EDOM = 1509,

	XML_IO_EEXIST = 1510,

	XML_IO_EFAULT = 1511,

	XML_IO_EFBIG = 1512,

	XML_IO_EINPROGRESS = 1513,

	XML_IO_EINTR = 1514,

	XML_IO_EINVAL = 1515,

	XML_IO_EIO = 1516,

	XML_IO_EISDIR = 1517,

	XML_IO_EMFILE = 1518,

	XML_IO_EMLINK = 1519,

	XML_IO_EMSGSIZE = 1520,

	XML_IO_ENAMETOOLONG = 1521,

	XML_IO_ENFILE = 1522,

	XML_IO_ENODEV = 1523,

	XML_IO_ENOENT = 1524,

	XML_IO_ENOEXEC = 1525,

	XML_IO_ENOLCK = 1526,

	XML_IO_ENOMEM = 1527,

	XML_IO_ENOSPC = 1528,

	XML_IO_ENOSYS = 1529,

	XML_IO_ENOTDIR = 1530,

	XML_IO_ENOTEMPTY = 1531,

	XML_IO_ENOTSUP = 1532,

	XML_IO_ENOTTY = 1533,

	XML_IO_ENXIO = 1534,

	XML_IO_EPERM = 1535,

	XML_IO_EPIPE = 1536,

	XML_IO_ERANGE = 1537,

	XML_IO_EROFS = 1538,

	XML_IO_ESPIPE = 1539,

	XML_IO_ESRCH = 1540,

	XML_IO_ETIMEDOUT = 1541,

	XML_IO_EXDEV = 1542,

	XML_IO_NETWORK_ATTEMPT = 1543,

	XML_IO_ENCODER = 1544,

	XML_IO_FLUSH = 1545,

	XML_IO_WRITE = 1546,

	XML_IO_NO_INPUT = 1547,

	XML_IO_BUFFER_FULL = 1548,

	XML_IO_LOAD_ERROR = 1549,

	XML_IO_ENOTSOCK = 1550,

	XML_IO_EISCONN = 1551,

	XML_IO_ECONNREFUSED = 1552,

	XML_IO_ENETUNREACH = 1553,

	XML_IO_EADDRINUSE = 1554,

	XML_IO_EALREADY = 1555,

	XML_IO_EAFNOSUPPORT = 1556,

	XML_XINCLUDE_RECURSION = 1600,

	XML_XINCLUDE_PARSE_VALUE = 1601,

	XML_XINCLUDE_ENTITY_DEF_MISMATCH = 1602,

	XML_XINCLUDE_NO_HREF = 1603,

	XML_XINCLUDE_NO_FALLBACK = 1604,

	XML_XINCLUDE_HREF_URI = 1605,

	XML_XINCLUDE_TEXT_FRAGMENT = 1606,

	XML_XINCLUDE_TEXT_DOCUMENT = 1607,

	XML_XINCLUDE_INVALID_CHAR = 1608,

	XML_XINCLUDE_BUILD_FAILED = 1609,

	XML_XINCLUDE_UNKNOWN_ENCODING = 1610,

	XML_XINCLUDE_MULTIPLE_ROOT = 1611,

	XML_XINCLUDE_XPTR_FAILED = 1612,

	XML_XINCLUDE_XPTR_RESULT = 1613,

	XML_XINCLUDE_INCLUDE_IN_INCLUDE = 1614,

	XML_XINCLUDE_FALLBACKS_IN_INCLUDE = 1615,

	XML_XINCLUDE_FALLBACK_NOT_IN_INCLUDE = 1616,

	XML_XINCLUDE_DEPRECATED_NS = 1617,

	XML_XINCLUDE_FRAGMENT_ID = 1618,

	XML_CATALOG_MISSING_ATTR = 1650,

	XML_CATALOG_ENTRY_BROKEN = 1651,

	XML_CATALOG_PREFER_VALUE = 1652,

	XML_CATALOG_NOT_CATALOG = 1653,

	XML_CATALOG_RECURSION = 1654,

	XML_SCHEMAP_PREFIX_UNDEFINED = 1700,

	XML_SCHEMAP_ATTRFORMDEFAULT_VALUE = 1701,

	XML_SCHEMAP_ATTRGRP_NONAME_NOREF = 1702,

	XML_SCHEMAP_ATTR_NONAME_NOREF = 1703,

	XML_SCHEMAP_COMPLEXTYPE_NONAME_NOREF = 1704,

	XML_SCHEMAP_ELEMFORMDEFAULT_VALUE = 1705,

	XML_SCHEMAP_ELEM_NONAME_NOREF = 1706,

	XML_SCHEMAP_EXTENSION_NO_BASE = 1707,

	XML_SCHEMAP_FACET_NO_VALUE = 1708,

	XML_SCHEMAP_FAILED_BUILD_IMPORT = 1709,

	XML_SCHEMAP_GROUP_NONAME_NOREF = 1710,

	XML_SCHEMAP_IMPORT_NAMESPACE_NOT_URI = 1711,

	XML_SCHEMAP_IMPORT_REDEFINE_NSNAME = 1712,

	XML_SCHEMAP_IMPORT_SCHEMA_NOT_URI = 1713,

	XML_SCHEMAP_INVALID_BOOLEAN = 1714,

	XML_SCHEMAP_INVALID_ENUM = 1715,

	XML_SCHEMAP_INVALID_FACET = 1716,

	XML_SCHEMAP_INVALID_FACET_VALUE = 1717,

	XML_SCHEMAP_INVALID_MAXOCCURS = 1718,

	XML_SCHEMAP_INVALID_MINOCCURS = 1719,

	XML_SCHEMAP_INVALID_REF_AND_SUBTYPE = 1720,

	XML_SCHEMAP_INVALID_WHITE_SPACE = 1721,

	XML_SCHEMAP_NOATTR_NOREF = 1722,

	XML_SCHEMAP_NOTATION_NO_NAME = 1723,

	XML_SCHEMAP_NOTYPE_NOREF = 1724,

	XML_SCHEMAP_REF_AND_SUBTYPE = 1725,

	XML_SCHEMAP_RESTRICTION_NONAME_NOREF = 1726,

	XML_SCHEMAP_SIMPLETYPE_NONAME = 1727,

	XML_SCHEMAP_TYPE_AND_SUBTYPE = 1728,

	XML_SCHEMAP_UNKNOWN_ALL_CHILD = 1729,

	XML_SCHEMAP_UNKNOWN_ANYATTRIBUTE_CHILD = 1730,

	XML_SCHEMAP_UNKNOWN_ATTR_CHILD = 1731,

	XML_SCHEMAP_UNKNOWN_ATTRGRP_CHILD = 1732,

	XML_SCHEMAP_UNKNOWN_ATTRIBUTE_GROUP = 1733,

	XML_SCHEMAP_UNKNOWN_BASE_TYPE = 1734,

	XML_SCHEMAP_UNKNOWN_CHOICE_CHILD = 1735,

	XML_SCHEMAP_UNKNOWN_COMPLEXCONTENT_CHILD = 1736,

	XML_SCHEMAP_UNKNOWN_COMPLEXTYPE_CHILD = 1737,

	XML_SCHEMAP_UNKNOWN_ELEM_CHILD = 1738,

	XML_SCHEMAP_UNKNOWN_EXTENSION_CHILD = 1739,

	XML_SCHEMAP_UNKNOWN_FACET_CHILD = 1740,

	XML_SCHEMAP_UNKNOWN_FACET_TYPE = 1741,

	XML_SCHEMAP_UNKNOWN_GROUP_CHILD = 1742,

	XML_SCHEMAP_UNKNOWN_IMPORT_CHILD = 1743,

	XML_SCHEMAP_UNKNOWN_LIST_CHILD = 1744,

	XML_SCHEMAP_UNKNOWN_NOTATION_CHILD = 1745,

	XML_SCHEMAP_UNKNOWN_PROCESSCONTENT_CHILD = 1746,

	XML_SCHEMAP_UNKNOWN_REF = 1747,

	XML_SCHEMAP_UNKNOWN_RESTRICTION_CHILD = 1748,

	XML_SCHEMAP_UNKNOWN_SCHEMAS_CHILD = 1749,

	XML_SCHEMAP_UNKNOWN_SEQUENCE_CHILD = 1750,

	XML_SCHEMAP_UNKNOWN_SIMPLECONTENT_CHILD = 1751,

	XML_SCHEMAP_UNKNOWN_SIMPLETYPE_CHILD = 1752,

	XML_SCHEMAP_UNKNOWN_TYPE = 1753,

	XML_SCHEMAP_UNKNOWN_UNION_CHILD = 1754,

	XML_SCHEMAP_ELEM_DEFAULT_FIXED = 1755,

	XML_SCHEMAP_REGEXP_INVALID = 1756,

	XML_SCHEMAP_FAILED_LOAD = 1757,

	XML_SCHEMAP_NOTHING_TO_PARSE = 1758,

	XML_SCHEMAP_NOROOT = 1759,

	XML_SCHEMAP_REDEFINED_GROUP = 1760,

	XML_SCHEMAP_REDEFINED_TYPE = 1761,

	XML_SCHEMAP_REDEFINED_ELEMENT = 1762,

	XML_SCHEMAP_REDEFINED_ATTRGROUP = 1763,

	XML_SCHEMAP_REDEFINED_ATTR = 1764,

	XML_SCHEMAP_REDEFINED_NOTATION = 1765,

	XML_SCHEMAP_FAILED_PARSE = 1766,

	XML_SCHEMAP_UNKNOWN_PREFIX = 1767,

	XML_SCHEMAP_DEF_AND_PREFIX = 1768,

	XML_SCHEMAP_UNKNOWN_INCLUDE_CHILD = 1769,

	XML_SCHEMAP_INCLUDE_SCHEMA_NOT_URI = 1770,

	XML_SCHEMAP_INCLUDE_SCHEMA_NO_URI = 1771,

	XML_SCHEMAP_NOT_SCHEMA = 1772,

	XML_SCHEMAP_UNKNOWN_MEMBER_TYPE = 1773,

	XML_SCHEMAP_INVALID_ATTR_USE = 1774,

	XML_SCHEMAP_RECURSIVE = 1775,

	XML_SCHEMAP_SUPERNUMEROUS_LIST_ITEM_TYPE = 1776,

	XML_SCHEMAP_INVALID_ATTR_COMBINATION = 1777,

	XML_SCHEMAP_INVALID_ATTR_INLINE_COMBINATION = 1778,

	XML_SCHEMAP_MISSING_SIMPLETYPE_CHILD = 1779,

	XML_SCHEMAP_INVALID_ATTR_NAME = 1780,

	XML_SCHEMAP_REF_AND_CONTENT = 1781,

	XML_SCHEMAP_CT_PROPS_CORRECT_1 = 1782,

	XML_SCHEMAP_CT_PROPS_CORRECT_2 = 1783,

	XML_SCHEMAP_CT_PROPS_CORRECT_3 = 1784,

	XML_SCHEMAP_CT_PROPS_CORRECT_4 = 1785,

	XML_SCHEMAP_CT_PROPS_CORRECT_5 = 1786,

	XML_SCHEMAP_DERIVATION_OK_RESTRICTION_1 = 1787,

	XML_SCHEMAP_DERIVATION_OK_RESTRICTION_2_1_1 = 1788,

	XML_SCHEMAP_DERIVATION_OK_RESTRICTION_2_1_2 = 1789,

	XML_SCHEMAP_DERIVATION_OK_RESTRICTION_2_2 = 1790,

	XML_SCHEMAP_DERIVATION_OK_RESTRICTION_3 = 1791,

	XML_SCHEMAP_WILDCARD_INVALID_NS_MEMBER = 1792,

	XML_SCHEMAP_INTERSECTION_NOT_EXPRESSIBLE = 1793,

	XML_SCHEMAP_UNION_NOT_EXPRESSIBLE = 1794,

	XML_SCHEMAP_SRC_IMPORT_3_1 = 1795,

	XML_SCHEMAP_SRC_IMPORT_3_2 = 1796,

	XML_SCHEMAP_DERIVATION_OK_RESTRICTION_4_1 = 1797,

	XML_SCHEMAP_DERIVATION_OK_RESTRICTION_4_2 = 1798,

	XML_SCHEMAP_DERIVATION_OK_RESTRICTION_4_3 = 1799,

	XML_SCHEMAP_COS_CT_EXTENDS_1_3 = 1800,

	XML_SCHEMAV_NOROOT = 1801,

	XML_SCHEMAV_UNDECLAREDELEM = 1802,

	XML_SCHEMAV_NOTTOPLEVEL = 1803,

	XML_SCHEMAV_MISSING = 1804,

	XML_SCHEMAV_WRONGELEM = 1805,

	XML_SCHEMAV_NOTYPE = 1806,

	XML_SCHEMAV_NOROLLBACK = 1807,

	XML_SCHEMAV_ISABSTRACT = 1808,

	XML_SCHEMAV_NOTEMPTY = 1809,

	XML_SCHEMAV_ELEMCONT = 1810,

	XML_SCHEMAV_HAVEDEFAULT = 1811,

	XML_SCHEMAV_NOTNILLABLE = 1812,

	XML_SCHEMAV_EXTRACONTENT = 1813,

	XML_SCHEMAV_INVALIDATTR = 1814,

	XML_SCHEMAV_INVALIDELEM = 1815,

	XML_SCHEMAV_NOTDETERMINIST = 1816,

	XML_SCHEMAV_CONSTRUCT = 1817,

	XML_SCHEMAV_INTERNAL = 1818,

	XML_SCHEMAV_NOTSIMPLE = 1819,

	XML_SCHEMAV_ATTRUNKNOWN = 1820,

	XML_SCHEMAV_ATTRINVALID = 1821,

	XML_SCHEMAV_VALUE = 1822,

	XML_SCHEMAV_FACET = 1823,

	XML_SCHEMAV_CVC_DATATYPE_VALID_1_2_1 = 1824,

	XML_SCHEMAV_CVC_DATATYPE_VALID_1_2_2 = 1825,

	XML_SCHEMAV_CVC_DATATYPE_VALID_1_2_3 = 1826,

	XML_SCHEMAV_CVC_TYPE_3_1_1 = 1827,

	XML_SCHEMAV_CVC_TYPE_3_1_2 = 1828,

	XML_SCHEMAV_CVC_FACET_VALID = 1829,

	XML_SCHEMAV_CVC_LENGTH_VALID = 1830,

	XML_SCHEMAV_CVC_MINLENGTH_VALID = 1831,

	XML_SCHEMAV_CVC_MAXLENGTH_VALID = 1832,

	XML_SCHEMAV_CVC_MININCLUSIVE_VALID = 1833,

	XML_SCHEMAV_CVC_MAXINCLUSIVE_VALID = 1834,

	XML_SCHEMAV_CVC_MINEXCLUSIVE_VALID = 1835,

	XML_SCHEMAV_CVC_MAXEXCLUSIVE_VALID = 1836,

	XML_SCHEMAV_CVC_TOTALDIGITS_VALID = 1837,

	XML_SCHEMAV_CVC_FRACTIONDIGITS_VALID = 1838,

	XML_SCHEMAV_CVC_PATTERN_VALID = 1839,

	XML_SCHEMAV_CVC_ENUMERATION_VALID = 1840,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_2_1 = 1841,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_2_2 = 1842,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_2_3 = 1843,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_2_4 = 1844,

	XML_SCHEMAV_CVC_ELT_1 = 1845,

	XML_SCHEMAV_CVC_ELT_2 = 1846,

	XML_SCHEMAV_CVC_ELT_3_1 = 1847,

	XML_SCHEMAV_CVC_ELT_3_2_1 = 1848,

	XML_SCHEMAV_CVC_ELT_3_2_2 = 1849,

	XML_SCHEMAV_CVC_ELT_4_1 = 1850,

	XML_SCHEMAV_CVC_ELT_4_2 = 1851,

	XML_SCHEMAV_CVC_ELT_4_3 = 1852,

	XML_SCHEMAV_CVC_ELT_5_1_1 = 1853,

	XML_SCHEMAV_CVC_ELT_5_1_2 = 1854,

	XML_SCHEMAV_CVC_ELT_5_2_1 = 1855,

	XML_SCHEMAV_CVC_ELT_5_2_2_1 = 1856,

	XML_SCHEMAV_CVC_ELT_5_2_2_2_1 = 1857,

	XML_SCHEMAV_CVC_ELT_5_2_2_2_2 = 1858,

	XML_SCHEMAV_CVC_ELT_6 = 1859,

	XML_SCHEMAV_CVC_ELT_7 = 1860,

	XML_SCHEMAV_CVC_ATTRIBUTE_1 = 1861,

	XML_SCHEMAV_CVC_ATTRIBUTE_2 = 1862,

	XML_SCHEMAV_CVC_ATTRIBUTE_3 = 1863,

	XML_SCHEMAV_CVC_ATTRIBUTE_4 = 1864,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_3_1 = 1865,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_3_2_1 = 1866,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_3_2_2 = 1867,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_4 = 1868,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_5_1 = 1869,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_5_2 = 1870,

	XML_SCHEMAV_ELEMENT_CONTENT = 1871,

	XML_SCHEMAV_DOCUMENT_ELEMENT_MISSING = 1872,

	XML_SCHEMAV_CVC_COMPLEX_TYPE_1 = 1873,

	XML_SCHEMAV_CVC_AU = 1874,

	XML_SCHEMAV_CVC_TYPE_1 = 1875,

	XML_SCHEMAV_CVC_TYPE_2 = 1876,

	XML_SCHEMAV_CVC_IDC = 1877,

	XML_SCHEMAV_CVC_WILDCARD = 1878,

	XML_SCHEMAV_MISC = 1879,

	XML_XPTR_UNKNOWN_SCHEME = 1900,

	XML_XPTR_CHILDSEQ_START = 1901,

	XML_XPTR_EVAL_FAILED = 1902,

	XML_XPTR_EXTRA_OBJECTS = 1903,

	XML_C14N_CREATE_CTXT = 1950,

	XML_C14N_REQUIRES_UTF8 = 1951,

	XML_C14N_CREATE_STACK = 1952,

	XML_C14N_INVALID_NODE = 1953,

	XML_C14N_UNKNOW_NODE = 1954,

	XML_C14N_RELATIVE_NAMESPACE = 1955,

	XML_FTP_PASV_ANSWER = 2000,

	XML_FTP_EPSV_ANSWER = 2001,

	XML_FTP_ACCNT = 2002,

	XML_FTP_URL_SYNTAX = 2003,

	XML_HTTP_URL_SYNTAX = 2020,

	XML_HTTP_USE_IP = 2021,

	XML_HTTP_UNKNOWN_HOST = 2022,

	XML_SCHEMAP_SRC_SIMPLE_TYPE_1 = 3000,

	XML_SCHEMAP_SRC_SIMPLE_TYPE_2 = 3001,

	XML_SCHEMAP_SRC_SIMPLE_TYPE_3 = 3002,

	XML_SCHEMAP_SRC_SIMPLE_TYPE_4 = 3003,

	XML_SCHEMAP_SRC_RESOLVE = 3004,

	XML_SCHEMAP_SRC_RESTRICTION_BASE_OR_SIMPLETYPE = 3005,

	XML_SCHEMAP_SRC_LIST_ITEMTYPE_OR_SIMPLETYPE = 3006,

	XML_SCHEMAP_SRC_UNION_MEMBERTYPES_OR_SIMPLETYPES = 3007,

	XML_SCHEMAP_ST_PROPS_CORRECT_1 = 3008,

	XML_SCHEMAP_ST_PROPS_CORRECT_2 = 3009,

	XML_SCHEMAP_ST_PROPS_CORRECT_3 = 3010,

	XML_SCHEMAP_COS_ST_RESTRICTS_1_1 = 3011,

	XML_SCHEMAP_COS_ST_RESTRICTS_1_2 = 3012,

	XML_SCHEMAP_COS_ST_RESTRICTS_1_3_1 = 3013,

	XML_SCHEMAP_COS_ST_RESTRICTS_1_3_2 = 3014,

	XML_SCHEMAP_COS_ST_RESTRICTS_2_1 = 3015,

	XML_SCHEMAP_COS_ST_RESTRICTS_2_3_1_1 = 3016,

	XML_SCHEMAP_COS_ST_RESTRICTS_2_3_1_2 = 3017,

	XML_SCHEMAP_COS_ST_RESTRICTS_2_3_2_1 = 3018,

	XML_SCHEMAP_COS_ST_RESTRICTS_2_3_2_2 = 3019,

	XML_SCHEMAP_COS_ST_RESTRICTS_2_3_2_3 = 3020,

	XML_SCHEMAP_COS_ST_RESTRICTS_2_3_2_4 = 3021,

	XML_SCHEMAP_COS_ST_RESTRICTS_2_3_2_5 = 3022,

	XML_SCHEMAP_COS_ST_RESTRICTS_3_1 = 3023,

	XML_SCHEMAP_COS_ST_RESTRICTS_3_3_1 = 3024,

	XML_SCHEMAP_COS_ST_RESTRICTS_3_3_1_2 = 3025,

	XML_SCHEMAP_COS_ST_RESTRICTS_3_3_2_2 = 3026,

	XML_SCHEMAP_COS_ST_RESTRICTS_3_3_2_1 = 3027,

	XML_SCHEMAP_COS_ST_RESTRICTS_3_3_2_3 = 3028,

	XML_SCHEMAP_COS_ST_RESTRICTS_3_3_2_4 = 3029,

	XML_SCHEMAP_COS_ST_RESTRICTS_3_3_2_5 = 3030,

	XML_SCHEMAP_COS_ST_DERIVED_OK_2_1 = 3031,

	XML_SCHEMAP_COS_ST_DERIVED_OK_2_2 = 3032,

	XML_SCHEMAP_S4S_ELEM_NOT_ALLOWED = 3033,

	XML_SCHEMAP_S4S_ELEM_MISSING = 3034,

	XML_SCHEMAP_S4S_ATTR_NOT_ALLOWED = 3035,

	XML_SCHEMAP_S4S_ATTR_MISSING = 3036,

	XML_SCHEMAP_S4S_ATTR_INVALID_VALUE = 3037,

	XML_SCHEMAP_SRC_ELEMENT_1 = 3038,

	XML_SCHEMAP_SRC_ELEMENT_2_1 = 3039,

	XML_SCHEMAP_SRC_ELEMENT_2_2 = 3040,

	XML_SCHEMAP_SRC_ELEMENT_3 = 3041,

	XML_SCHEMAP_P_PROPS_CORRECT_1 = 3042,

	XML_SCHEMAP_P_PROPS_CORRECT_2_1 = 3043,

	XML_SCHEMAP_P_PROPS_CORRECT_2_2 = 3044,

	XML_SCHEMAP_E_PROPS_CORRECT_2 = 3045,

	XML_SCHEMAP_E_PROPS_CORRECT_3 = 3046,

	XML_SCHEMAP_E_PROPS_CORRECT_4 = 3047,

	XML_SCHEMAP_E_PROPS_CORRECT_5 = 3048,

	XML_SCHEMAP_E_PROPS_CORRECT_6 = 3049,

	XML_SCHEMAP_SRC_INCLUDE = 3050,

	XML_SCHEMAP_SRC_ATTRIBUTE_1 = 3051,

	XML_SCHEMAP_SRC_ATTRIBUTE_2 = 3052,

	XML_SCHEMAP_SRC_ATTRIBUTE_3_1 = 3053,

	XML_SCHEMAP_SRC_ATTRIBUTE_3_2 = 3054,

	XML_SCHEMAP_SRC_ATTRIBUTE_4 = 3055,

	XML_SCHEMAP_NO_XMLNS = 3056,

	XML_SCHEMAP_NO_XSI = 3057,

	XML_SCHEMAP_COS_VALID_DEFAULT_1 = 3058,

	XML_SCHEMAP_COS_VALID_DEFAULT_2_1 = 3059,

	XML_SCHEMAP_COS_VALID_DEFAULT_2_2_1 = 3060,

	XML_SCHEMAP_COS_VALID_DEFAULT_2_2_2 = 3061,

	XML_SCHEMAP_CVC_SIMPLE_TYPE = 3062,

	XML_SCHEMAP_COS_CT_EXTENDS_1_1 = 3063,

	XML_SCHEMAP_SRC_IMPORT_1_1 = 3064,

	XML_SCHEMAP_SRC_IMPORT_1_2 = 3065,

	XML_SCHEMAP_SRC_IMPORT_2 = 3066,

	XML_SCHEMAP_SRC_IMPORT_2_1 = 3067,

	XML_SCHEMAP_SRC_IMPORT_2_2 = 3068,

	XML_SCHEMAP_INTERNAL = 3069,

	XML_SCHEMAP_NOT_DETERMINISTIC = 3070,

	XML_SCHEMAP_SRC_ATTRIBUTE_GROUP_1 = 3071,

	XML_SCHEMAP_SRC_ATTRIBUTE_GROUP_2 = 3072,

	XML_SCHEMAP_SRC_ATTRIBUTE_GROUP_3 = 3073,

	XML_SCHEMAP_MG_PROPS_CORRECT_1 = 3074,

	XML_SCHEMAP_MG_PROPS_CORRECT_2 = 3075,

	XML_SCHEMAP_SRC_CT_1 = 3076,

	XML_SCHEMAP_DERIVATION_OK_RESTRICTION_2_1_3 = 3077,

	XML_SCHEMAP_AU_PROPS_CORRECT_2 = 3078,

	XML_SCHEMAP_A_PROPS_CORRECT_2 = 3079,

	XML_SCHEMAP_C_PROPS_CORRECT = 3080,

	XML_SCHEMAP_SRC_REDEFINE = 3081,

	XML_SCHEMAP_SRC_IMPORT = 3082,

	XML_SCHEMAP_WARN_SKIP_SCHEMA = 3083,

	XML_SCHEMAP_WARN_UNLOCATED_SCHEMA = 3084,

	XML_SCHEMAP_WARN_ATTR_REDECL_PROH = 3085,

	XML_SCHEMAP_WARN_ATTR_POINTLESS_PROH = 3086,

	XML_SCHEMAP_AG_PROPS_CORRECT = 3087,

	XML_SCHEMAP_COS_CT_EXTENDS_1_2 = 3088,

	XML_SCHEMAP_AU_PROPS_CORRECT = 3089,

	XML_SCHEMAP_A_PROPS_CORRECT_3 = 3090,

	XML_SCHEMAP_COS_ALL_LIMITED = 3091,

	XML_SCHEMATRONV_ASSERT = 4000,

	XML_SCHEMATRONV_REPORT = 4001,

	XML_MODULE_OPEN = 4900,

	XML_MODULE_CLOSE = 4901,

	XML_CHECK_FOUND_ELEMENT = 5000,

	XML_CHECK_FOUND_ATTRIBUTE = 5001,

	XML_CHECK_FOUND_TEXT = 5002,

	XML_CHECK_FOUND_CDATA = 5003,

	XML_CHECK_FOUND_ENTITYREF = 5004,

	XML_CHECK_FOUND_ENTITY = 5005,

	XML_CHECK_FOUND_PI = 5006,

	XML_CHECK_FOUND_COMMENT = 5007,

	XML_CHECK_FOUND_DOCTYPE = 5008,

	XML_CHECK_FOUND_FRAGMENT = 5009,

	XML_CHECK_FOUND_NOTATION = 5010,

	XML_CHECK_UNKNOWN_NODE = 5011,

	XML_CHECK_ENTITY_TYPE = 5012,

	XML_CHECK_NO_PARENT = 5013,

	XML_CHECK_NO_DOC = 5014,

	XML_CHECK_NO_NAME = 5015,

	XML_CHECK_NO_ELEM = 5016,

	XML_CHECK_WRONG_DOC = 5017,

	XML_CHECK_NO_PREV = 5018,

	XML_CHECK_WRONG_PREV = 5019,

	XML_CHECK_NO_NEXT = 5020,

	XML_CHECK_WRONG_NEXT = 5021,

	XML_CHECK_NOT_DTD = 5022,

	XML_CHECK_NOT_ATTR = 5023,

	XML_CHECK_NOT_ATTR_DECL = 5024,

	XML_CHECK_NOT_ELEM_DECL = 5025,

	XML_CHECK_NOT_ENTITY_DECL = 5026,

	XML_CHECK_NOT_NS_DECL = 5027,

	XML_CHECK_NO_HREF = 5028,

	XML_CHECK_WRONG_PARENT = 5029,

	XML_CHECK_NS_SCOPE = 5030,

	XML_CHECK_NS_ANCESTOR = 5031,

	XML_CHECK_NOT_UTF8 = 5032,

	XML_CHECK_NO_DICT = 5033,

	XML_CHECK_NOT_NCNAME = 5034,

	XML_CHECK_OUTSIDE_DICT = 5035,

	XML_CHECK_WRONG_NAME = 5036,

	XML_CHECK_NAME_NOT_NULL = 5037,

	XML_I18N_NO_NAME = 6000,

	XML_I18N_NO_HANDLER = 6001,

	XML_I18N_EXCESS_HANDLER = 6002,

	XML_I18N_CONV_FAILED = 6003,

	XML_I18N_NO_OUTPUT = 6004,

	XML_BUF_OVERFLOW = 7000
}


declare function xmlParserFindNodeInfo(ctxt: _xmlParserCtxt, node: _xmlNode): _xmlParserNodeInfo;

declare function xmlParserFindNodeInfoIndex(seq: _xmlParserNodeInfoSeq, node: _xmlNode): number;

declare function xmlParserGetDirectory(filename: string | any): string;

declare function xmlParserHandlePEReference(ctxt: _xmlParserCtxt): void;

declare function xmlParserHandleReference(ctxt: _xmlParserCtxt): void;

declare function xmlParserInputBufferCreateFd(fd: number, enc: xmlCharEncoding): _xmlParserInputBuffer;

declare function xmlParserInputBufferCreateFile(file: FILE, enc: xmlCharEncoding): _xmlParserInputBuffer;

declare function xmlParserInputBufferCreateFilename(URI: string | any, enc: xmlCharEncoding): _xmlParserInputBuffer;

declare function xmlParserInputBufferCreateFilenameDefault(func: (p1: string, p2: xmlCharEncoding) => _xmlParserInputBuffer): (p1: string, p2: xmlCharEncoding) => _xmlParserInputBuffer;

declare function xmlParserInputBufferCreateIO(ioread: (p1: any, p2: string, p3: number) => number, ioclose: (p1: any) => number, ioctx: any, enc: xmlCharEncoding): _xmlParserInputBuffer;

declare function xmlParserInputBufferCreateMem(mem: string | any, size: number, enc: xmlCharEncoding): _xmlParserInputBuffer;

declare function xmlParserInputBufferCreateStatic(mem: string | any, size: number, enc: xmlCharEncoding): _xmlParserInputBuffer;

declare function xmlParserInputBufferGrow(in_: _xmlParserInputBuffer, len: number): number;

declare function xmlParserInputBufferPush(in_: _xmlParserInputBuffer, len: number, buf: string | any): number;

declare function xmlParserInputBufferRead(in_: _xmlParserInputBuffer, len: number): number;

declare function xmlParserInputGrow(in_: _xmlParserInput, len: number): number;

declare function xmlParserInputRead(in_: _xmlParserInput, len: number): number;

declare function xmlParserInputShrink(in_: _xmlParserInput): void;

enum xmlParserInputState {

	XML_PARSER_EOF = -1,

	XML_PARSER_START = 0,

	XML_PARSER_MISC = 1,

	XML_PARSER_PI = 2,

	XML_PARSER_DTD = 3,

	XML_PARSER_PROLOG = 4,

	XML_PARSER_COMMENT = 5,

	XML_PARSER_START_TAG = 6,

	XML_PARSER_CONTENT = 7,

	XML_PARSER_CDATA_SECTION = 8,

	XML_PARSER_END_TAG = 9,

	XML_PARSER_ENTITY_DECL = 10,

	XML_PARSER_ENTITY_VALUE = 11,

	XML_PARSER_ATTRIBUTE_VALUE = 12,

	XML_PARSER_SYSTEM_LITERAL = 13,

	XML_PARSER_EPILOG = 14,

	XML_PARSER_IGNORE = 15,

	XML_PARSER_PUBLIC_LITERAL = 16
}


declare var xmlParserMaxDepth: number;

enum xmlParserMode {

	XML_PARSE_UNKNOWN = 0,

	XML_PARSE_DOM = 1,

	XML_PARSE_SAX = 2,

	XML_PARSE_PUSH_DOM = 3,

	XML_PARSE_PUSH_SAX = 4,

	XML_PARSE_READER = 5
}


enum xmlParserOption {

	XML_PARSE_RECOVER = 1,

	XML_PARSE_NOENT = 2,

	XML_PARSE_DTDLOAD = 4,

	XML_PARSE_DTDATTR = 8,

	XML_PARSE_DTDVALID = 16,

	XML_PARSE_NOERROR = 32,

	XML_PARSE_NOWARNING = 64,

	XML_PARSE_PEDANTIC = 128,

	XML_PARSE_NOBLANKS = 256,

	XML_PARSE_SAX1 = 512,

	XML_PARSE_XINCLUDE = 1024,

	XML_PARSE_NONET = 2048,

	XML_PARSE_NODICT = 4096,

	XML_PARSE_NSCLEAN = 8192,

	XML_PARSE_NOCDATA = 16384,

	XML_PARSE_NOXINCNODE = 32768,

	XML_PARSE_COMPACT = 65536,

	XML_PARSE_OLD10 = 131072,

	XML_PARSE_NOBASEFIX = 262144,

	XML_PARSE_HUGE = 524288,

	XML_PARSE_OLDSAX = 1048576,

	XML_PARSE_IGNORE_ENC = 2097152,

	XML_PARSE_BIG_LINES = 4194304
}


declare function xmlParserPrintFileContext(input: _xmlParserInput): void;

declare function xmlParserPrintFileInfo(input: _xmlParserInput): void;

enum xmlParserProperties {

	XML_PARSER_LOADDTD = 1,

	XML_PARSER_DEFAULTATTRS = 2,

	XML_PARSER_VALIDATE = 3,

	XML_PARSER_SUBST_ENTITIES = 4
}


enum xmlParserSeverities {

	XML_PARSER_SEVERITY_VALIDITY_WARNING = 1,

	XML_PARSER_SEVERITY_VALIDITY_ERROR = 2,

	XML_PARSER_SEVERITY_WARNING = 3,

	XML_PARSER_SEVERITY_ERROR = 4
}


declare function xmlPathToURI(path: string | any): string;

enum xmlPatternFlags {

	XML_PATTERN_DEFAULT = 0,

	XML_PATTERN_XPATH = 1,

	XML_PATTERN_XSSEL = 2,

	XML_PATTERN_XSFIELD = 4
}


declare function xmlPatternFromRoot(comp: any): number;

declare function xmlPatternGetStreamCtxt(comp: any): any;

declare function xmlPatternMatch(comp: any, node: _xmlNode): number;

declare function xmlPatternMaxDepth(comp: any): number;

declare function xmlPatternMinDepth(comp: any): number;

declare function xmlPatternStreamable(comp: any): number;

declare function xmlPatterncompile(pattern: string | any, dict: any, flags: number, namespaces: string): any;

declare function xmlPedanticParserDefault(val: number): number;

declare function xmlPopInput(ctxt: _xmlParserCtxt): number;

declare function xmlPopInputCallbacks(): number;

declare function xmlPreviousElementSibling(node: _xmlNode): _xmlNode;

declare function xmlPrintURI(stream: FILE, uri: _xmlURI): void;

declare function xmlPushInput(ctxt: _xmlParserCtxt, input: _xmlParserInput): number;

declare function xmlRMutexLock(tok: any): void;

declare function xmlRMutexUnlock(tok: any): void;

declare function xmlReadDoc(cur: string | any, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function xmlReadFd(fd: number, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function xmlReadFile(URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function xmlReadIO(ioread: (p1: any, p2: string, p3: number) => number, ioclose: (p1: any) => number, ioctx: any, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function xmlReadMemory(buffer: string | any, size: number, URL: string | any, encoding: string | any, options: number): _xmlDoc;

declare function xmlReaderForDoc(cur: string | any, URL: string | any, encoding: string | any, options: number): any;

declare function xmlReaderForFd(fd: number, URL: string | any, encoding: string | any, options: number): any;

declare function xmlReaderForFile(filename: string | any, encoding: string | any, options: number): any;

declare function xmlReaderForIO(ioread: (p1: any, p2: string, p3: number) => number, ioclose: (p1: any) => number, ioctx: any, URL: string | any, encoding: string | any, options: number): any;

declare function xmlReaderForMemory(buffer: string | any, size: number, URL: string | any, encoding: string | any, options: number): any;

declare function xmlReaderNewDoc(reader: any, cur: string | any, URL: string | any, encoding: string | any, options: number): number;

declare function xmlReaderNewFd(reader: any, fd: number, URL: string | any, encoding: string | any, options: number): number;

declare function xmlReaderNewFile(reader: any, filename: string | any, encoding: string | any, options: number): number;

declare function xmlReaderNewIO(reader: any, ioread: (p1: any, p2: string, p3: number) => number, ioclose: (p1: any) => number, ioctx: any, URL: string | any, encoding: string | any, options: number): number;

declare function xmlReaderNewMemory(reader: any, buffer: string | any, size: number, URL: string | any, encoding: string | any, options: number): number;

declare function xmlReaderNewWalker(reader: any, doc: _xmlDoc): number;

enum xmlReaderTypes {

	XML_READER_TYPE_NONE = 0,

	XML_READER_TYPE_ELEMENT = 1,

	XML_READER_TYPE_ATTRIBUTE = 2,

	XML_READER_TYPE_TEXT = 3,

	XML_READER_TYPE_CDATA = 4,

	XML_READER_TYPE_ENTITY_REFERENCE = 5,

	XML_READER_TYPE_ENTITY = 6,

	XML_READER_TYPE_PROCESSING_INSTRUCTION = 7,

	XML_READER_TYPE_COMMENT = 8,

	XML_READER_TYPE_DOCUMENT = 9,

	XML_READER_TYPE_DOCUMENT_TYPE = 10,

	XML_READER_TYPE_DOCUMENT_FRAGMENT = 11,

	XML_READER_TYPE_NOTATION = 12,

	XML_READER_TYPE_WHITESPACE = 13,

	XML_READER_TYPE_SIGNIFICANT_WHITESPACE = 14,

	XML_READER_TYPE_END_ELEMENT = 15,

	XML_READER_TYPE_END_ENTITY = 16,

	XML_READER_TYPE_XML_DECLARATION = 17
}


declare function xmlReaderWalker(doc: _xmlDoc): any;

declare var xmlRealloc: (p1: any, p2: number) => any;

declare function xmlReallocLoc(ptr: any, size: number, file: string | any, line: number): any;

declare function xmlReconciliateNs(doc: _xmlDoc, tree: _xmlNode): number;

declare function xmlRecoverDoc(cur: string | any): _xmlDoc;

declare function xmlRecoverFile(filename: string | any): _xmlDoc;

declare function xmlRecoverMemory(buffer: string | any, size: number): _xmlDoc;

declare function xmlRegExecErrInfo(exec: any, string: string, nbval: number, nbneg: number, values: string, terminal: number): number;

declare function xmlRegExecNextValues(exec: any, nbval: number, nbneg: number, values: string, terminal: number): number;

declare function xmlRegExecPushString(exec: any, value: string | any, data: any): number;

declare function xmlRegExecPushString2(exec: any, value: string | any, value2: string | any, data: any): number;

declare function xmlRegFreeExecCtxt(exec: any): void;

declare function xmlRegFreeRegexp(regexp: any): void;

declare function xmlRegNewExecCtxt(comp: any, callback: (p1: any, p2: string, p3: any, p4: any) => void, data: any): any;

declare function xmlRegexpCompile(regexp: string | any): any;

declare function xmlRegexpExec(comp: any, value: string | any): number;

declare function xmlRegexpIsDeterminist(comp: any): number;

declare function xmlRegexpPrint(output: FILE, regexp: any): void;

declare function xmlRegisterCharEncodingHandler(handler: _xmlCharEncodingHandler): void;

declare function xmlRegisterDefaultInputCallbacks(): void;

declare function xmlRegisterDefaultOutputCallbacks(): void;

declare function xmlRegisterHTTPPostCallbacks(): void;

declare function xmlRegisterInputCallbacks(matchFunc: (p1: string) => number, openFunc: (p1: string) => any, readFunc: (p1: any, p2: string, p3: number) => number, closeFunc: (p1: any) => number): number;

declare function xmlRegisterNodeDefault(func: (p1: _xmlNode) => void): (p1: _xmlNode) => void;

declare function xmlRegisterOutputCallbacks(matchFunc: (p1: string) => number, openFunc: (p1: string) => any, writeFunc: (p1: any, p2: string, p3: number) => number, closeFunc: (p1: any) => number): number;

declare function xmlRelaxNGCleanupTypes(): void;

declare function xmlRelaxNGDump(output: FILE, schema: any): void;

declare function xmlRelaxNGDumpTree(output: FILE, schema: any): void;

declare function xmlRelaxNGFree(schema: any): void;

declare function xmlRelaxNGFreeParserCtxt(ctxt: any): void;

declare function xmlRelaxNGFreeValidCtxt(ctxt: any): void;

declare function xmlRelaxNGGetParserErrors(ctxt: any, err: (p1: any, p2: string) => void, warn: (p1: any, p2: string) => void, ctx: any): number;

declare function xmlRelaxNGGetValidErrors(ctxt: any, err: (p1: any, p2: string) => void, warn: (p1: any, p2: string) => void, ctx: any): number;

declare function xmlRelaxNGInitTypes(): number;

declare function xmlRelaxNGNewDocParserCtxt(doc: _xmlDoc): any;

declare function xmlRelaxNGNewMemParserCtxt(buffer: string | any, size: number): any;

declare function xmlRelaxNGNewParserCtxt(URL: string | any): any;

declare function xmlRelaxNGNewValidCtxt(schema: any): any;

declare function xmlRelaxNGParse(ctxt: any): any;

enum xmlRelaxNGParserFlag {

	XML_RELAXNGP_NONE = 0,

	XML_RELAXNGP_FREE_DOC = 1,

	XML_RELAXNGP_CRNG = 2
}


declare function xmlRelaxNGSetParserErrors(ctxt: any, err: (p1: any, p2: string) => void, warn: (p1: any, p2: string) => void, ctx: any): void;

declare function xmlRelaxNGSetParserStructuredErrors(ctxt: any, serror: (p1: any, p2: _xmlError) => void, ctx: any): void;

declare function xmlRelaxNGSetValidErrors(ctxt: any, err: (p1: any, p2: string) => void, warn: (p1: any, p2: string) => void, ctx: any): void;

declare function xmlRelaxNGSetValidStructuredErrors(ctxt: any, serror: (p1: any, p2: _xmlError) => void, ctx: any): void;

enum xmlRelaxNGValidErr {

	XML_RELAXNG_OK = 0,

	XML_RELAXNG_ERR_MEMORY = 1,

	XML_RELAXNG_ERR_TYPE = 2,

	XML_RELAXNG_ERR_TYPEVAL = 3,

	XML_RELAXNG_ERR_DUPID = 4,

	XML_RELAXNG_ERR_TYPECMP = 5,

	XML_RELAXNG_ERR_NOSTATE = 6,

	XML_RELAXNG_ERR_NODEFINE = 7,

	XML_RELAXNG_ERR_LISTEXTRA = 8,

	XML_RELAXNG_ERR_LISTEMPTY = 9,

	XML_RELAXNG_ERR_INTERNODATA = 10,

	XML_RELAXNG_ERR_INTERSEQ = 11,

	XML_RELAXNG_ERR_INTEREXTRA = 12,

	XML_RELAXNG_ERR_ELEMNAME = 13,

	XML_RELAXNG_ERR_ATTRNAME = 14,

	XML_RELAXNG_ERR_ELEMNONS = 15,

	XML_RELAXNG_ERR_ATTRNONS = 16,

	XML_RELAXNG_ERR_ELEMWRONGNS = 17,

	XML_RELAXNG_ERR_ATTRWRONGNS = 18,

	XML_RELAXNG_ERR_ELEMEXTRANS = 19,

	XML_RELAXNG_ERR_ATTREXTRANS = 20,

	XML_RELAXNG_ERR_ELEMNOTEMPTY = 21,

	XML_RELAXNG_ERR_NOELEM = 22,

	XML_RELAXNG_ERR_NOTELEM = 23,

	XML_RELAXNG_ERR_ATTRVALID = 24,

	XML_RELAXNG_ERR_CONTENTVALID = 25,

	XML_RELAXNG_ERR_EXTRACONTENT = 26,

	XML_RELAXNG_ERR_INVALIDATTR = 27,

	XML_RELAXNG_ERR_DATAELEM = 28,

	XML_RELAXNG_ERR_VALELEM = 29,

	XML_RELAXNG_ERR_LISTELEM = 30,

	XML_RELAXNG_ERR_DATATYPE = 31,

	XML_RELAXNG_ERR_VALUE = 32,

	XML_RELAXNG_ERR_LIST = 33,

	XML_RELAXNG_ERR_NOGRAMMAR = 34,

	XML_RELAXNG_ERR_EXTRADATA = 35,

	XML_RELAXNG_ERR_LACKDATA = 36,

	XML_RELAXNG_ERR_INTERNAL = 37,

	XML_RELAXNG_ERR_ELEMWRONG = 38,

	XML_RELAXNG_ERR_TEXTWRONG = 39
}


declare function xmlRelaxNGValidateDoc(ctxt: any, doc: _xmlDoc): number;

declare function xmlRelaxNGValidateFullElement(ctxt: any, doc: _xmlDoc, elem: _xmlNode): number;

declare function xmlRelaxNGValidatePopElement(ctxt: any, doc: _xmlDoc, elem: _xmlNode): number;

declare function xmlRelaxNGValidatePushCData(ctxt: any, data: string | any, len: number): number;

declare function xmlRelaxNGValidatePushElement(ctxt: any, doc: _xmlDoc, elem: _xmlNode): number;

declare function xmlRelaxParserSetFlag(ctxt: any, flag: number): number;

declare function xmlRemoveID(doc: _xmlDoc, attr: _xmlAttr): number;

declare function xmlRemoveProp(cur: _xmlAttr): number;

declare function xmlRemoveRef(doc: _xmlDoc, attr: _xmlAttr): number;

declare function xmlReplaceNode(old: _xmlNode, cur: _xmlNode): _xmlNode;

declare function xmlResetError(err: _xmlError): void;

declare function xmlResetLastError(): void;

declare function xmlSAX2AttributeDecl(ctx: any, elem: string | any, fullname: string | any, type: number, def: number, defaultValue: string | any, tree: _xmlEnumeration): void;

declare function xmlSAX2CDataBlock(ctx: any, value: string | any, len: number): void;

declare function xmlSAX2Characters(ctx: any, ch: string | any, len: number): void;

declare function xmlSAX2Comment(ctx: any, value: string | any): void;

declare function xmlSAX2ElementDecl(ctx: any, name: string | any, type: number, content: _xmlElementContent): void;

declare function xmlSAX2EndDocument(ctx: any): void;

declare function xmlSAX2EndElement(ctx: any, name: string | any): void;

declare function xmlSAX2EndElementNs(ctx: any, localname: string | any, prefix: string | any, URI: string | any): void;

declare function xmlSAX2EntityDecl(ctx: any, name: string | any, type: number, publicId: string | any, systemId: string | any, content: string | any): void;

declare function xmlSAX2ExternalSubset(ctx: any, name: string | any, ExternalID: string | any, SystemID: string | any): void;

declare function xmlSAX2GetColumnNumber(ctx: any): number;

declare function xmlSAX2GetEntity(ctx: any, name: string | any): _xmlEntity;

declare function xmlSAX2GetLineNumber(ctx: any): number;

declare function xmlSAX2GetParameterEntity(ctx: any, name: string | any): _xmlEntity;

declare function xmlSAX2GetPublicId(ctx: any): string;

declare function xmlSAX2GetSystemId(ctx: any): string;

declare function xmlSAX2HasExternalSubset(ctx: any): number;

declare function xmlSAX2HasInternalSubset(ctx: any): number;

declare function xmlSAX2IgnorableWhitespace(ctx: any, ch: string | any, len: number): void;

declare function xmlSAX2InitDefaultSAXHandler(hdlr: _xmlSAXHandler, warning: number): void;

declare function xmlSAX2InitDocbDefaultSAXHandler(hdlr: _xmlSAXHandler): void;

declare function xmlSAX2InitHtmlDefaultSAXHandler(hdlr: _xmlSAXHandler): void;

declare function xmlSAX2InternalSubset(ctx: any, name: string | any, ExternalID: string | any, SystemID: string | any): void;

declare function xmlSAX2IsStandalone(ctx: any): number;

declare function xmlSAX2NotationDecl(ctx: any, name: string | any, publicId: string | any, systemId: string | any): void;

declare function xmlSAX2ProcessingInstruction(ctx: any, target: string | any, data: string | any): void;

declare function xmlSAX2Reference(ctx: any, name: string | any): void;

declare function xmlSAX2ResolveEntity(ctx: any, publicId: string | any, systemId: string | any): _xmlParserInput;

declare function xmlSAX2SetDocumentLocator(ctx: any, loc: _xmlSAXLocator): void;

declare function xmlSAX2StartDocument(ctx: any): void;

declare function xmlSAX2StartElement(ctx: any, fullname: string | any, atts: string): void;

declare function xmlSAX2StartElementNs(ctx: any, localname: string | any, prefix: string | any, URI: string | any, nb_namespaces: number, namespaces: string, nb_attributes: number, nb_defaulted: number, attributes: string): void;

declare function xmlSAX2UnparsedEntityDecl(ctx: any, name: string | any, publicId: string | any, systemId: string | any, notationName: string | any): void;

declare function xmlSAXDefaultVersion(version: number): number;

declare function xmlSAXParseDTD(sax: _xmlSAXHandler, ExternalID: string | any, SystemID: string | any): _xmlDtd;

declare function xmlSAXParseDoc(sax: _xmlSAXHandler, cur: string | any, recovery: number): _xmlDoc;

declare function xmlSAXParseEntity(sax: _xmlSAXHandler, filename: string | any): _xmlDoc;

declare function xmlSAXParseFile(sax: _xmlSAXHandler, filename: string | any, recovery: number): _xmlDoc;

declare function xmlSAXParseFileWithData(sax: _xmlSAXHandler, filename: string | any, recovery: number, data: any): _xmlDoc;

declare function xmlSAXParseMemory(sax: _xmlSAXHandler, buffer: string | any, size: number, recovery: number): _xmlDoc;

declare function xmlSAXParseMemoryWithData(sax: _xmlSAXHandler, buffer: string | any, size: number, recovery: number, data: any): _xmlDoc;

declare function xmlSAXUserParseFile(sax: _xmlSAXHandler, user_data: any, filename: string | any): number;

declare function xmlSAXUserParseMemory(sax: _xmlSAXHandler, user_data: any, buffer: string | any, size: number): number;

declare function xmlSAXVersion(hdlr: _xmlSAXHandler, version: number): number;

declare function xmlSaveClose(ctxt: any): number;

declare function xmlSaveDoc(ctxt: any, doc: _xmlDoc): number;

declare function xmlSaveFile(filename: string | any, cur: _xmlDoc): number;

declare function xmlSaveFileEnc(filename: string | any, cur: _xmlDoc, encoding: string | any): number;

declare function xmlSaveFileTo(buf: _xmlOutputBuffer, cur: _xmlDoc, encoding: string | any): number;

declare function xmlSaveFlush(ctxt: any): number;

declare function xmlSaveFormatFile(filename: string | any, cur: _xmlDoc, format: number): number;

declare function xmlSaveFormatFileEnc(filename: string | any, cur: _xmlDoc, encoding: string | any, format: number): number;

declare function xmlSaveFormatFileTo(buf: _xmlOutputBuffer, cur: _xmlDoc, encoding: string | any, format: number): number;

enum xmlSaveOption {

	XML_SAVE_FORMAT = 1,

	XML_SAVE_NO_DECL = 2,

	XML_SAVE_NO_EMPTY = 4,

	XML_SAVE_NO_XHTML = 8,

	XML_SAVE_XHTML = 16,

	XML_SAVE_AS_XML = 32,

	XML_SAVE_AS_HTML = 64,

	XML_SAVE_WSNONSIG = 128
}


declare function xmlSaveSetAttrEscape(ctxt: any, escape: (p1: string, p2: number, p3: string, p4: number) => number): number;

declare function xmlSaveSetEscape(ctxt: any, escape: (p1: string, p2: number, p3: string, p4: number) => number): number;

declare function xmlSaveToBuffer(buffer: _xmlBuffer, encoding: string | any, options: number): any;

declare function xmlSaveToFd(fd: number, encoding: string | any, options: number): any;

declare function xmlSaveToFilename(filename: string | any, encoding: string | any, options: number): any;

declare function xmlSaveToIO(iowrite: (p1: any, p2: string, p3: number) => number, ioclose: (p1: any) => number, ioctx: any, encoding: string | any, options: number): any;

declare function xmlSaveTree(ctxt: any, node: _xmlNode): number;

declare function xmlSaveUri(uri: _xmlURI): string;

declare function xmlScanName(ctxt: _xmlParserCtxt): string;

declare function xmlSchemaCheckFacet(facet: _xmlSchemaFacet, typeDecl: _xmlSchemaType, ctxt: any, name: string | any): number;

declare function xmlSchemaCleanupTypes(): void;

declare function xmlSchemaCollapseString(value: string | any): string;

declare function xmlSchemaCompareValues(x: any, y: any): number;

declare function xmlSchemaCompareValuesWhtsp(x: any, xws: xmlSchemaWhitespaceValueType, y: any, yws: xmlSchemaWhitespaceValueType): number;

enum xmlSchemaContentType {

	XML_SCHEMA_CONTENT_UNKNOWN = 0,

	XML_SCHEMA_CONTENT_EMPTY = 1,

	XML_SCHEMA_CONTENT_ELEMENTS = 2,

	XML_SCHEMA_CONTENT_MIXED = 3,

	XML_SCHEMA_CONTENT_SIMPLE = 4,

	XML_SCHEMA_CONTENT_MIXED_OR_ELEMENTS = 5,

	XML_SCHEMA_CONTENT_BASIC = 6,

	XML_SCHEMA_CONTENT_ANY = 7
}


declare function xmlSchemaCopyValue(val: any): any;

declare function xmlSchemaDump(output: FILE, schema: _xmlSchema): void;

declare function xmlSchemaFree(schema: _xmlSchema): void;

declare function xmlSchemaFreeFacet(facet: _xmlSchemaFacet): void;

declare function xmlSchemaFreeParserCtxt(ctxt: any): void;

declare function xmlSchemaFreeType(type: _xmlSchemaType): void;

declare function xmlSchemaFreeValidCtxt(ctxt: any): void;

declare function xmlSchemaFreeValue(val: any): void;

declare function xmlSchemaFreeWildcard(wildcard: _xmlSchemaWildcard): void;

declare function xmlSchemaGetBuiltInListSimpleTypeItemType(type: _xmlSchemaType): _xmlSchemaType;

declare function xmlSchemaGetBuiltInType(type: xmlSchemaValType): _xmlSchemaType;

declare function xmlSchemaGetCanonValue(val: any, retValue: string): number;

declare function xmlSchemaGetCanonValueWhtsp(val: any, retValue: string, ws: xmlSchemaWhitespaceValueType): number;

declare function xmlSchemaGetFacetValueAsULong(facet: _xmlSchemaFacet): number;

declare function xmlSchemaGetParserErrors(ctxt: any, err: (p1: any, p2: string) => void, warn: (p1: any, p2: string) => void, ctx: any): number;

declare function xmlSchemaGetPredefinedType(name: string | any, ns: string | any): _xmlSchemaType;

declare function xmlSchemaGetValType(val: any): xmlSchemaValType;

declare function xmlSchemaGetValidErrors(ctxt: any, err: (p1: any, p2: string) => void, warn: (p1: any, p2: string) => void, ctx: any): number;

declare function xmlSchemaInitTypes(): void;

declare function xmlSchemaIsBuiltInTypeFacet(type: _xmlSchemaType, facetType: number): number;

declare function xmlSchemaIsValid(ctxt: any): number;

declare function xmlSchemaNewDocParserCtxt(doc: _xmlDoc): any;

declare function xmlSchemaNewFacet(): _xmlSchemaFacet;

declare function xmlSchemaNewMemParserCtxt(buffer: string | any, size: number): any;

declare function xmlSchemaNewNOTATIONValue(name: string | any, ns: string | any): any;

declare function xmlSchemaNewParserCtxt(URL: string | any): any;

declare function xmlSchemaNewQNameValue(namespaceName: string | any, localName: string | any): any;

declare function xmlSchemaNewStringValue(type: xmlSchemaValType, value: string | any): any;

declare function xmlSchemaNewValidCtxt(schema: _xmlSchema): any;

declare function xmlSchemaParse(ctxt: any): _xmlSchema;

declare function xmlSchemaSAXPlug(ctxt: any, sax: _xmlSAXHandler, user_data: any): any;

declare function xmlSchemaSAXUnplug(plug: any): number;

declare function xmlSchemaSetParserErrors(ctxt: any, err: (p1: any, p2: string) => void, warn: (p1: any, p2: string) => void, ctx: any): void;

declare function xmlSchemaSetParserStructuredErrors(ctxt: any, serror: (p1: any, p2: _xmlError) => void, ctx: any): void;

declare function xmlSchemaSetValidErrors(ctxt: any, err: (p1: any, p2: string) => void, warn: (p1: any, p2: string) => void, ctx: any): void;

declare function xmlSchemaSetValidOptions(ctxt: any, options: number): number;

declare function xmlSchemaSetValidStructuredErrors(ctxt: any, serror: (p1: any, p2: _xmlError) => void, ctx: any): void;

enum xmlSchemaTypeType {

	XML_SCHEMA_TYPE_BASIC = 1,

	XML_SCHEMA_TYPE_ANY = 2,

	XML_SCHEMA_TYPE_FACET = 3,

	XML_SCHEMA_TYPE_SIMPLE = 4,

	XML_SCHEMA_TYPE_COMPLEX = 5,

	XML_SCHEMA_TYPE_SEQUENCE = 6,

	XML_SCHEMA_TYPE_CHOICE = 7,

	XML_SCHEMA_TYPE_ALL = 8,

	XML_SCHEMA_TYPE_SIMPLE_CONTENT = 9,

	XML_SCHEMA_TYPE_COMPLEX_CONTENT = 10,

	XML_SCHEMA_TYPE_UR = 11,

	XML_SCHEMA_TYPE_RESTRICTION = 12,

	XML_SCHEMA_TYPE_EXTENSION = 13,

	XML_SCHEMA_TYPE_ELEMENT = 14,

	XML_SCHEMA_TYPE_ATTRIBUTE = 15,

	XML_SCHEMA_TYPE_ATTRIBUTEGROUP = 16,

	XML_SCHEMA_TYPE_GROUP = 17,

	XML_SCHEMA_TYPE_NOTATION = 18,

	XML_SCHEMA_TYPE_LIST = 19,

	XML_SCHEMA_TYPE_UNION = 20,

	XML_SCHEMA_TYPE_ANY_ATTRIBUTE = 21,

	XML_SCHEMA_TYPE_IDC_UNIQUE = 22,

	XML_SCHEMA_TYPE_IDC_KEY = 23,

	XML_SCHEMA_TYPE_IDC_KEYREF = 24,

	XML_SCHEMA_TYPE_PARTICLE = 25,

	XML_SCHEMA_TYPE_ATTRIBUTE_USE = 26,

	XML_SCHEMA_FACET_MININCLUSIVE = 1000,

	XML_SCHEMA_FACET_MINEXCLUSIVE = 1001,

	XML_SCHEMA_FACET_MAXINCLUSIVE = 1002,

	XML_SCHEMA_FACET_MAXEXCLUSIVE = 1003,

	XML_SCHEMA_FACET_TOTALDIGITS = 1004,

	XML_SCHEMA_FACET_FRACTIONDIGITS = 1005,

	XML_SCHEMA_FACET_PATTERN = 1006,

	XML_SCHEMA_FACET_ENUMERATION = 1007,

	XML_SCHEMA_FACET_WHITESPACE = 1008,

	XML_SCHEMA_FACET_LENGTH = 1009,

	XML_SCHEMA_FACET_MAXLENGTH = 1010,

	XML_SCHEMA_FACET_MINLENGTH = 1011,

	XML_SCHEMA_EXTRA_QNAMEREF = 2000,

	XML_SCHEMA_EXTRA_ATTR_USE_PROHIB = 2001
}


declare function xmlSchemaValPredefTypeNode(type: _xmlSchemaType, value: string | any, val: any, node: _xmlNode): number;

declare function xmlSchemaValPredefTypeNodeNoNorm(type: _xmlSchemaType, value: string | any, val: any, node: _xmlNode): number;

enum xmlSchemaValType {

	XML_SCHEMAS_UNKNOWN = 0,

	XML_SCHEMAS_STRING = 1,

	XML_SCHEMAS_NORMSTRING = 2,

	XML_SCHEMAS_DECIMAL = 3,

	XML_SCHEMAS_TIME = 4,

	XML_SCHEMAS_GDAY = 5,

	XML_SCHEMAS_GMONTH = 6,

	XML_SCHEMAS_GMONTHDAY = 7,

	XML_SCHEMAS_GYEAR = 8,

	XML_SCHEMAS_GYEARMONTH = 9,

	XML_SCHEMAS_DATE = 10,

	XML_SCHEMAS_DATETIME = 11,

	XML_SCHEMAS_DURATION = 12,

	XML_SCHEMAS_FLOAT = 13,

	XML_SCHEMAS_DOUBLE = 14,

	XML_SCHEMAS_BOOLEAN = 15,

	XML_SCHEMAS_TOKEN = 16,

	XML_SCHEMAS_LANGUAGE = 17,

	XML_SCHEMAS_NMTOKEN = 18,

	XML_SCHEMAS_NMTOKENS = 19,

	XML_SCHEMAS_NAME = 20,

	XML_SCHEMAS_QNAME = 21,

	XML_SCHEMAS_NCNAME = 22,

	XML_SCHEMAS_ID = 23,

	XML_SCHEMAS_IDREF = 24,

	XML_SCHEMAS_IDREFS = 25,

	XML_SCHEMAS_ENTITY = 26,

	XML_SCHEMAS_ENTITIES = 27,

	XML_SCHEMAS_NOTATION = 28,

	XML_SCHEMAS_ANYURI = 29,

	XML_SCHEMAS_INTEGER = 30,

	XML_SCHEMAS_NPINTEGER = 31,

	XML_SCHEMAS_NINTEGER = 32,

	XML_SCHEMAS_NNINTEGER = 33,

	XML_SCHEMAS_PINTEGER = 34,

	XML_SCHEMAS_INT = 35,

	XML_SCHEMAS_UINT = 36,

	XML_SCHEMAS_LONG = 37,

	XML_SCHEMAS_ULONG = 38,

	XML_SCHEMAS_SHORT = 39,

	XML_SCHEMAS_USHORT = 40,

	XML_SCHEMAS_BYTE = 41,

	XML_SCHEMAS_UBYTE = 42,

	XML_SCHEMAS_HEXBINARY = 43,

	XML_SCHEMAS_BASE64BINARY = 44,

	XML_SCHEMAS_ANYTYPE = 45,

	XML_SCHEMAS_ANYSIMPLETYPE = 46
}


declare function xmlSchemaValidCtxtGetOptions(ctxt: any): number;

declare function xmlSchemaValidCtxtGetParserCtxt(ctxt: any): _xmlParserCtxt;

enum xmlSchemaValidError {

	XML_SCHEMAS_ERR_OK = 0,

	XML_SCHEMAS_ERR_NOROOT = 1,

	XML_SCHEMAS_ERR_UNDECLAREDELEM = 2,

	XML_SCHEMAS_ERR_NOTTOPLEVEL = 3,

	XML_SCHEMAS_ERR_MISSING = 4,

	XML_SCHEMAS_ERR_WRONGELEM = 5,

	XML_SCHEMAS_ERR_NOTYPE = 6,

	XML_SCHEMAS_ERR_NOROLLBACK = 7,

	XML_SCHEMAS_ERR_ISABSTRACT = 8,

	XML_SCHEMAS_ERR_NOTEMPTY = 9,

	XML_SCHEMAS_ERR_ELEMCONT = 10,

	XML_SCHEMAS_ERR_HAVEDEFAULT = 11,

	XML_SCHEMAS_ERR_NOTNILLABLE = 12,

	XML_SCHEMAS_ERR_EXTRACONTENT = 13,

	XML_SCHEMAS_ERR_INVALIDATTR = 14,

	XML_SCHEMAS_ERR_INVALIDELEM = 15,

	XML_SCHEMAS_ERR_NOTDETERMINIST = 16,

	XML_SCHEMAS_ERR_CONSTRUCT = 17,

	XML_SCHEMAS_ERR_INTERNAL = 18,

	XML_SCHEMAS_ERR_NOTSIMPLE = 19,

	XML_SCHEMAS_ERR_ATTRUNKNOWN = 20,

	XML_SCHEMAS_ERR_ATTRINVALID = 21,

	XML_SCHEMAS_ERR_VALUE = 22,

	XML_SCHEMAS_ERR_FACET = 23,

	XML_SCHEMAS_ERR_ = 24,

	XML_SCHEMAS_ERR_XXX = 25
}


enum xmlSchemaValidOption {

	XML_SCHEMA_VAL_VC_I_CREATE = 1
}


declare function xmlSchemaValidateDoc(ctxt: any, instance: _xmlDoc): number;

declare function xmlSchemaValidateFacet(base: _xmlSchemaType, facet: _xmlSchemaFacet, value: string | any, val: any): number;

declare function xmlSchemaValidateFacetWhtsp(facet: _xmlSchemaFacet, fws: xmlSchemaWhitespaceValueType, valType: xmlSchemaValType, value: string | any, val: any, ws: xmlSchemaWhitespaceValueType): number;

declare function xmlSchemaValidateFile(ctxt: any, filename: string | any, options: number): number;

declare function xmlSchemaValidateLengthFacet(type: _xmlSchemaType, facet: _xmlSchemaFacet, value: string | any, val: any, length: number): number;

declare function xmlSchemaValidateLengthFacetWhtsp(facet: _xmlSchemaFacet, valType: xmlSchemaValType, value: string | any, val: any, length: number, ws: xmlSchemaWhitespaceValueType): number;

declare function xmlSchemaValidateListSimpleTypeFacet(facet: _xmlSchemaFacet, value: string | any, actualLen: number, expectedLen: number): number;

declare function xmlSchemaValidateOneElement(ctxt: any, elem: _xmlNode): number;

declare function xmlSchemaValidatePredefinedType(type: _xmlSchemaType, value: string | any, val: any): number;

declare function xmlSchemaValidateSetFilename(vctxt: any, filename: string | any): void;

declare function xmlSchemaValidateSetLocator(vctxt: any, f: (p1: any, p2: string, p3: number) => number, ctxt: any): void;

declare function xmlSchemaValidateStream(ctxt: any, input: _xmlParserInputBuffer, enc: xmlCharEncoding, sax: _xmlSAXHandler, user_data: any): number;

declare function xmlSchemaValueAppend(prev: any, cur: any): number;

declare function xmlSchemaValueGetAsBoolean(val: any): number;

declare function xmlSchemaValueGetAsString(val: any): string;

declare function xmlSchemaValueGetNext(cur: any): any;

declare function xmlSchemaWhiteSpaceReplace(value: string | any): string;

enum xmlSchemaWhitespaceValueType {

	XML_SCHEMA_WHITESPACE_UNKNOWN = 0,

	XML_SCHEMA_WHITESPACE_PRESERVE = 1,

	XML_SCHEMA_WHITESPACE_REPLACE = 2,

	XML_SCHEMA_WHITESPACE_COLLAPSE = 3
}


declare function xmlSchematronFree(schema: any): void;

declare function xmlSchematronFreeParserCtxt(ctxt: any): void;

declare function xmlSchematronFreeValidCtxt(ctxt: any): void;

declare function xmlSchematronNewDocParserCtxt(doc: _xmlDoc): any;

declare function xmlSchematronNewMemParserCtxt(buffer: string | any, size: number): any;

declare function xmlSchematronNewParserCtxt(URL: string | any): any;

declare function xmlSchematronNewValidCtxt(schema: any, options: number): any;

declare function xmlSchematronParse(ctxt: any): any;

declare function xmlSchematronSetValidStructuredErrors(ctxt: any, serror: (p1: any, p2: _xmlError) => void, ctx: any): void;

enum xmlSchematronValidOptions {

	XML_SCHEMATRON_OUT_QUIET = 1,

	XML_SCHEMATRON_OUT_TEXT = 2,

	XML_SCHEMATRON_OUT_XML = 4,

	XML_SCHEMATRON_OUT_ERROR = 8,

	XML_SCHEMATRON_OUT_FILE = 256,

	XML_SCHEMATRON_OUT_BUFFER = 512,

	XML_SCHEMATRON_OUT_IO = 1024
}


declare function xmlSchematronValidateDoc(ctxt: any, instance: _xmlDoc): number;

declare function xmlSearchNs(doc: _xmlDoc, node: _xmlNode, nameSpace: string | any): _xmlNs;

declare function xmlSearchNsByHref(doc: _xmlDoc, node: _xmlNode, href: string | any): _xmlNs;

declare function xmlSetBufferAllocationScheme(scheme: xmlBufferAllocationScheme): void;

declare function xmlSetCompressMode(mode: number): void;

declare function xmlSetDocCompressMode(doc: _xmlDoc, mode: number): void;

declare function xmlSetEntityReferenceFunc(func: (p1: _xmlEntity, p2: _xmlNode, p3: _xmlNode) => void): void;

declare function xmlSetExternalEntityLoader(f: (p1: string, p2: string, p3: _xmlParserCtxt) => _xmlParserInput): void;

declare function xmlSetFeature(ctxt: _xmlParserCtxt, name: string | any, value: any): number;

declare function xmlSetGenericErrorFunc(ctx: any, handler: (p1: any, p2: string) => void): void;

declare function xmlSetListDoc(list: _xmlNode, doc: _xmlDoc): void;

declare function xmlSetNs(node: _xmlNode, ns: _xmlNs): void;

declare function xmlSetNsProp(node: _xmlNode, ns: _xmlNs, name: string | any, value: string | any): _xmlAttr;

declare function xmlSetProp(node: _xmlNode, name: string | any, value: string | any): _xmlAttr;

declare function xmlSetStructuredErrorFunc(ctx: any, handler: (p1: any, p2: _xmlError) => void): void;

declare function xmlSetTreeDoc(tree: _xmlNode, doc: _xmlDoc): void;

declare function xmlSetupParserForBuffer(ctxt: _xmlParserCtxt, buffer: string | any, filename: string | any): void;

declare function xmlShell(doc: _xmlDoc, filename: string | any, input: (p1: string) => string, output: FILE): void;

declare function xmlShellBase(ctxt: _xmlShellCtxt, arg: string | any, node: _xmlNode, node2: _xmlNode): number;

declare function xmlShellCat(ctxt: _xmlShellCtxt, arg: string | any, node: _xmlNode, node2: _xmlNode): number;

declare function xmlShellDir(ctxt: _xmlShellCtxt, arg: string | any, node: _xmlNode, node2: _xmlNode): number;

declare function xmlShellDu(ctxt: _xmlShellCtxt, arg: string | any, tree: _xmlNode, node2: _xmlNode): number;

declare function xmlShellList(ctxt: _xmlShellCtxt, arg: string | any, node: _xmlNode, node2: _xmlNode): number;

declare function xmlShellLoad(ctxt: _xmlShellCtxt, filename: string | any, node: _xmlNode, node2: _xmlNode): number;

declare function xmlShellPrintNode(node: _xmlNode): void;

declare function xmlShellPrintXPathError(errorType: number, arg: string | any): void;

declare function xmlShellPrintXPathResult(list: _xmlXPathObject): void;

declare function xmlShellPwd(ctxt: _xmlShellCtxt, buffer: string | any, node: _xmlNode, node2: _xmlNode): number;

declare function xmlShellSave(ctxt: _xmlShellCtxt, filename: string | any, node: _xmlNode, node2: _xmlNode): number;

declare function xmlShellValidate(ctxt: _xmlShellCtxt, dtd: string | any, node: _xmlNode, node2: _xmlNode): number;

declare function xmlShellWrite(ctxt: _xmlShellCtxt, filename: string | any, node: _xmlNode, node2: _xmlNode): number;

declare function xmlSkipBlankChars(ctxt: _xmlParserCtxt): number;

declare function xmlSnprintfElementContent(buf: string | any, size: number, content: _xmlElementContent, englob: number): void;

declare function xmlSplitQName(ctxt: _xmlParserCtxt, name: string | any, prefix: string): string;

declare function xmlSplitQName2(name: string | any, prefix: string): string;

declare function xmlSplitQName3(name: string | any, len: number): string;

declare function xmlSprintfElementContent(buf: string | any, content: _xmlElementContent, englob: number): void;

declare function xmlStopParser(ctxt: _xmlParserCtxt): void;

declare function xmlStrEqual(str1: string | any, str2: string | any): number;

declare function xmlStrQEqual(pref: string | any, name: string | any, str: string | any): number;

declare function xmlStrcasecmp(str1: string | any, str2: string | any): number;

declare function xmlStrcasestr(str: string | any, val: string | any): string;

declare function xmlStrcat(cur: string | any, add: string | any): string;

declare function xmlStrchr(str: string | any, val: number): string;

declare function xmlStrcmp(str1: string | any, str2: string | any): number;

declare function xmlStrdup(cur: string | any): string;

declare function xmlStreamPop(stream: any): number;

declare function xmlStreamPush(stream: any, name: string | any, ns: string | any): number;

declare function xmlStreamPushAttr(stream: any, name: string | any, ns: string | any): number;

declare function xmlStreamPushNode(stream: any, name: string | any, ns: string | any, nodeType: number): number;

declare function xmlStreamWantsAnyNode(stream: any): number;

declare var xmlStringComment: number;

declare function xmlStringCurrentChar(ctxt: _xmlParserCtxt, cur: string | any, len: number): number;

declare function xmlStringDecodeEntities(ctxt: _xmlParserCtxt, str: string | any, what: number, end: number, end2: number, end3: number): string;

declare function xmlStringGetNodeList(doc: _xmlDoc, value: string | any): _xmlNode;

declare function xmlStringLenDecodeEntities(ctxt: _xmlParserCtxt, str: string | any, len: number, what: number, end: number, end2: number, end3: number): string;

declare function xmlStringLenGetNodeList(doc: _xmlDoc, value: string | any, len: number): _xmlNode;

declare var xmlStringText: number;

declare var xmlStringTextNoenc: number;

declare function xmlStrlen(str: string | any): number;

declare function xmlStrncasecmp(str1: string | any, str2: string | any, len: number): number;

declare function xmlStrncat(cur: string | any, add: string | any, len: number): string;

declare function xmlStrncatNew(str1: string | any, str2: string | any, len: number): string;

declare function xmlStrncmp(str1: string | any, str2: string | any, len: number): number;

declare function xmlStrndup(cur: string | any, len: number): string;

declare function xmlStrstr(str: string | any, val: string | any): string;

declare function xmlStrsub(str: string | any, start: number, len: number): string;

declare function xmlSubstituteEntitiesDefault(val: number): number;

declare function xmlSwitchEncoding(ctxt: _xmlParserCtxt, enc: xmlCharEncoding): number;

declare function xmlSwitchInputEncoding(ctxt: _xmlParserCtxt, input: _xmlParserInput, handler: _xmlCharEncodingHandler): number;

declare function xmlSwitchToEncoding(ctxt: _xmlParserCtxt, handler: _xmlCharEncodingHandler): number;

declare function xmlTextConcat(node: _xmlNode, content: string | any, len: number): number;

declare function xmlTextMerge(first: _xmlNode, second: _xmlNode): _xmlNode;

declare function xmlTextReaderAttributeCount(reader: any): number;

declare function xmlTextReaderBaseUri(reader: any): string;

declare function xmlTextReaderByteConsumed(reader: any): number;

declare function xmlTextReaderClose(reader: any): number;

declare function xmlTextReaderConstBaseUri(reader: any): string;

declare function xmlTextReaderConstEncoding(reader: any): string;

declare function xmlTextReaderConstLocalName(reader: any): string;

declare function xmlTextReaderConstName(reader: any): string;

declare function xmlTextReaderConstNamespaceUri(reader: any): string;

declare function xmlTextReaderConstPrefix(reader: any): string;

declare function xmlTextReaderConstString(reader: any, str: string | any): string;

declare function xmlTextReaderConstValue(reader: any): string;

declare function xmlTextReaderConstXmlLang(reader: any): string;

declare function xmlTextReaderConstXmlVersion(reader: any): string;

declare function xmlTextReaderCurrentDoc(reader: any): _xmlDoc;

declare function xmlTextReaderCurrentNode(reader: any): _xmlNode;

declare function xmlTextReaderDepth(reader: any): number;

declare function xmlTextReaderExpand(reader: any): _xmlNode;

declare function xmlTextReaderGetAttribute(reader: any, name: string | any): string;

declare function xmlTextReaderGetAttributeNo(reader: any, no: number): string;

declare function xmlTextReaderGetAttributeNs(reader: any, localName: string | any, namespaceURI: string | any): string;

declare function xmlTextReaderGetErrorHandler(reader: any, f: (p1: any, p2: string, p3: xmlParserSeverities, p4: any) => void, arg: any): void;

declare function xmlTextReaderGetParserColumnNumber(reader: any): number;

declare function xmlTextReaderGetParserLineNumber(reader: any): number;

declare function xmlTextReaderGetParserProp(reader: any, prop: number): number;

declare function xmlTextReaderGetRemainder(reader: any): _xmlParserInputBuffer;

declare function xmlTextReaderHasAttributes(reader: any): number;

declare function xmlTextReaderHasValue(reader: any): number;

declare function xmlTextReaderIsDefault(reader: any): number;

declare function xmlTextReaderIsEmptyElement(reader: any): number;

declare function xmlTextReaderIsNamespaceDecl(reader: any): number;

declare function xmlTextReaderIsValid(reader: any): number;

declare function xmlTextReaderLocalName(reader: any): string;

declare function xmlTextReaderLocatorBaseURI(locator: any): string;

declare function xmlTextReaderLocatorLineNumber(locator: any): number;

declare function xmlTextReaderLookupNamespace(reader: any, prefix: string | any): string;

enum xmlTextReaderMode {

	XML_TEXTREADER_MODE_INITIAL = 0,

	XML_TEXTREADER_MODE_INTERACTIVE = 1,

	XML_TEXTREADER_MODE_ERROR = 2,

	XML_TEXTREADER_MODE_EOF = 3,

	XML_TEXTREADER_MODE_CLOSED = 4,

	XML_TEXTREADER_MODE_READING = 5
}


declare function xmlTextReaderMoveToAttribute(reader: any, name: string | any): number;

declare function xmlTextReaderMoveToAttributeNo(reader: any, no: number): number;

declare function xmlTextReaderMoveToAttributeNs(reader: any, localName: string | any, namespaceURI: string | any): number;

declare function xmlTextReaderMoveToElement(reader: any): number;

declare function xmlTextReaderMoveToFirstAttribute(reader: any): number;

declare function xmlTextReaderMoveToNextAttribute(reader: any): number;

declare function xmlTextReaderName(reader: any): string;

declare function xmlTextReaderNamespaceUri(reader: any): string;

declare function xmlTextReaderNext(reader: any): number;

declare function xmlTextReaderNextSibling(reader: any): number;

declare function xmlTextReaderNodeType(reader: any): number;

declare function xmlTextReaderNormalization(reader: any): number;

declare function xmlTextReaderPrefix(reader: any): string;

declare function xmlTextReaderPreserve(reader: any): _xmlNode;

declare function xmlTextReaderPreservePattern(reader: any, pattern: string | any, namespaces: string): number;

declare function xmlTextReaderQuoteChar(reader: any): number;

declare function xmlTextReaderRead(reader: any): number;

declare function xmlTextReaderReadAttributeValue(reader: any): number;

declare function xmlTextReaderReadInnerXml(reader: any): string;

declare function xmlTextReaderReadOuterXml(reader: any): string;

declare function xmlTextReaderReadState(reader: any): number;

declare function xmlTextReaderReadString(reader: any): string;

declare function xmlTextReaderRelaxNGSetSchema(reader: any, schema: any): number;

declare function xmlTextReaderRelaxNGValidate(reader: any, rng: string | any): number;

declare function xmlTextReaderRelaxNGValidateCtxt(reader: any, ctxt: any, options: number): number;

declare function xmlTextReaderSchemaValidate(reader: any, xsd: string | any): number;

declare function xmlTextReaderSchemaValidateCtxt(reader: any, ctxt: any, options: number): number;

declare function xmlTextReaderSetErrorHandler(reader: any, f: (p1: any, p2: string, p3: xmlParserSeverities, p4: any) => void, arg: any): void;

declare function xmlTextReaderSetParserProp(reader: any, prop: number, value: number): number;

declare function xmlTextReaderSetSchema(reader: any, schema: _xmlSchema): number;

declare function xmlTextReaderSetStructuredErrorHandler(reader: any, f: (p1: any, p2: _xmlError) => void, arg: any): void;

declare function xmlTextReaderSetup(reader: any, input: _xmlParserInputBuffer, URL: string | any, encoding: string | any, options: number): number;

declare function xmlTextReaderStandalone(reader: any): number;

declare function xmlTextReaderValue(reader: any): string;

declare function xmlTextReaderXmlLang(reader: any): string;

declare function xmlTextWriterEndAttribute(writer: any): number;

declare function xmlTextWriterEndCDATA(writer: any): number;

declare function xmlTextWriterEndComment(writer: any): number;

declare function xmlTextWriterEndDTD(writer: any): number;

declare function xmlTextWriterEndDTDAttlist(writer: any): number;

declare function xmlTextWriterEndDTDElement(writer: any): number;

declare function xmlTextWriterEndDTDEntity(writer: any): number;

declare function xmlTextWriterEndDocument(writer: any): number;

declare function xmlTextWriterEndElement(writer: any): number;

declare function xmlTextWriterEndPI(writer: any): number;

declare function xmlTextWriterFlush(writer: any): number;

declare function xmlTextWriterFullEndElement(writer: any): number;

declare function xmlTextWriterSetIndent(writer: any, indent: number): number;

declare function xmlTextWriterSetIndentString(writer: any, str: string | any): number;

declare function xmlTextWriterSetQuoteChar(writer: any, quotechar: number): number;

declare function xmlTextWriterStartAttribute(writer: any, name: string | any): number;

declare function xmlTextWriterStartAttributeNS(writer: any, prefix: string | any, name: string | any, namespaceURI: string | any): number;

declare function xmlTextWriterStartCDATA(writer: any): number;

declare function xmlTextWriterStartComment(writer: any): number;

declare function xmlTextWriterStartDTD(writer: any, name: string | any, pubid: string | any, sysid: string | any): number;

declare function xmlTextWriterStartDTDAttlist(writer: any, name: string | any): number;

declare function xmlTextWriterStartDTDElement(writer: any, name: string | any): number;

declare function xmlTextWriterStartDTDEntity(writer: any, pe: number, name: string | any): number;

declare function xmlTextWriterStartDocument(writer: any, version: string | any, encoding: string | any, standalone: string | any): number;

declare function xmlTextWriterStartElement(writer: any, name: string | any): number;

declare function xmlTextWriterStartElementNS(writer: any, prefix: string | any, name: string | any, namespaceURI: string | any): number;

declare function xmlTextWriterStartPI(writer: any, target: string | any): number;

declare function xmlTextWriterWriteAttribute(writer: any, name: string | any, content: string | any): number;

declare function xmlTextWriterWriteAttributeNS(writer: any, prefix: string | any, name: string | any, namespaceURI: string | any, content: string | any): number;

declare function xmlTextWriterWriteBase64(writer: any, data: string | any, start: number, len: number): number;

declare function xmlTextWriterWriteBinHex(writer: any, data: string | any, start: number, len: number): number;

declare function xmlTextWriterWriteCDATA(writer: any, content: string | any): number;

declare function xmlTextWriterWriteComment(writer: any, content: string | any): number;

declare function xmlTextWriterWriteDTD(writer: any, name: string | any, pubid: string | any, sysid: string | any, subset: string | any): number;

declare function xmlTextWriterWriteDTDAttlist(writer: any, name: string | any, content: string | any): number;

declare function xmlTextWriterWriteDTDElement(writer: any, name: string | any, content: string | any): number;

declare function xmlTextWriterWriteDTDEntity(writer: any, pe: number, name: string | any, pubid: string | any, sysid: string | any, ndataid: string | any, content: string | any): number;

declare function xmlTextWriterWriteDTDExternalEntity(writer: any, pe: number, name: string | any, pubid: string | any, sysid: string | any, ndataid: string | any): number;

declare function xmlTextWriterWriteDTDExternalEntityContents(writer: any, pubid: string | any, sysid: string | any, ndataid: string | any): number;

declare function xmlTextWriterWriteDTDInternalEntity(writer: any, pe: number, name: string | any, content: string | any): number;

declare function xmlTextWriterWriteDTDNotation(writer: any, name: string | any, pubid: string | any, sysid: string | any): number;

declare function xmlTextWriterWriteElement(writer: any, name: string | any, content: string | any): number;

declare function xmlTextWriterWriteElementNS(writer: any, prefix: string | any, name: string | any, namespaceURI: string | any, content: string | any): number;

declare function xmlTextWriterWritePI(writer: any, target: string | any, content: string | any): number;

declare function xmlTextWriterWriteRaw(writer: any, content: string | any): number;

declare function xmlTextWriterWriteRawLen(writer: any, content: string | any, len: number): number;

declare function xmlTextWriterWriteString(writer: any, content: string | any): number;

declare function xmlThrDefBufferAllocScheme(v: xmlBufferAllocationScheme): xmlBufferAllocationScheme;

declare function xmlThrDefDefaultBufferSize(v: number): number;

declare function xmlThrDefDeregisterNodeDefault(func: (p1: _xmlNode) => void): (p1: _xmlNode) => void;

declare function xmlThrDefDoValidityCheckingDefaultValue(v: number): number;

declare function xmlThrDefGetWarningsDefaultValue(v: number): number;

declare function xmlThrDefIndentTreeOutput(v: number): number;

declare function xmlThrDefKeepBlanksDefaultValue(v: number): number;

declare function xmlThrDefLineNumbersDefaultValue(v: number): number;

declare function xmlThrDefLoadExtDtdDefaultValue(v: number): number;

declare function xmlThrDefOutputBufferCreateFilenameDefault(func: (p1: string, p2: _xmlCharEncodingHandler, p3: number) => _xmlOutputBuffer): (p1: string, p2: _xmlCharEncodingHandler, p3: number) => _xmlOutputBuffer;

declare function xmlThrDefParserDebugEntities(v: number): number;

declare function xmlThrDefParserInputBufferCreateFilenameDefault(func: (p1: string, p2: xmlCharEncoding) => _xmlParserInputBuffer): (p1: string, p2: xmlCharEncoding) => _xmlParserInputBuffer;

declare function xmlThrDefPedanticParserDefaultValue(v: number): number;

declare function xmlThrDefRegisterNodeDefault(func: (p1: _xmlNode) => void): (p1: _xmlNode) => void;

declare function xmlThrDefSaveNoEmptyTags(v: number): number;

declare function xmlThrDefSetGenericErrorFunc(ctx: any, handler: (p1: any, p2: string) => void): void;

declare function xmlThrDefSetStructuredErrorFunc(ctx: any, handler: (p1: any, p2: _xmlError) => void): void;

declare function xmlThrDefSubstituteEntitiesDefaultValue(v: number): number;

declare function xmlThrDefTreeIndentString(v: string | any): string;

declare function xmlUCSIsAegeanNumbers(code: number): number;

declare function xmlUCSIsAlphabeticPresentationForms(code: number): number;

declare function xmlUCSIsArabic(code: number): number;

declare function xmlUCSIsArabicPresentationFormsA(code: number): number;

declare function xmlUCSIsArabicPresentationFormsB(code: number): number;

declare function xmlUCSIsArmenian(code: number): number;

declare function xmlUCSIsArrows(code: number): number;

declare function xmlUCSIsBasicLatin(code: number): number;

declare function xmlUCSIsBengali(code: number): number;

declare function xmlUCSIsBlock(code: number, block: string | any): number;

declare function xmlUCSIsBlockElements(code: number): number;

declare function xmlUCSIsBopomofo(code: number): number;

declare function xmlUCSIsBopomofoExtended(code: number): number;

declare function xmlUCSIsBoxDrawing(code: number): number;

declare function xmlUCSIsBraillePatterns(code: number): number;

declare function xmlUCSIsBuhid(code: number): number;

declare function xmlUCSIsByzantineMusicalSymbols(code: number): number;

declare function xmlUCSIsCJKCompatibility(code: number): number;

declare function xmlUCSIsCJKCompatibilityForms(code: number): number;

declare function xmlUCSIsCJKCompatibilityIdeographs(code: number): number;

declare function xmlUCSIsCJKCompatibilityIdeographsSupplement(code: number): number;

declare function xmlUCSIsCJKRadicalsSupplement(code: number): number;

declare function xmlUCSIsCJKSymbolsandPunctuation(code: number): number;

declare function xmlUCSIsCJKUnifiedIdeographs(code: number): number;

declare function xmlUCSIsCJKUnifiedIdeographsExtensionA(code: number): number;

declare function xmlUCSIsCJKUnifiedIdeographsExtensionB(code: number): number;

declare function xmlUCSIsCat(code: number, cat: string | any): number;

declare function xmlUCSIsCatC(code: number): number;

declare function xmlUCSIsCatCc(code: number): number;

declare function xmlUCSIsCatCf(code: number): number;

declare function xmlUCSIsCatCo(code: number): number;

declare function xmlUCSIsCatCs(code: number): number;

declare function xmlUCSIsCatL(code: number): number;

declare function xmlUCSIsCatLl(code: number): number;

declare function xmlUCSIsCatLm(code: number): number;

declare function xmlUCSIsCatLo(code: number): number;

declare function xmlUCSIsCatLt(code: number): number;

declare function xmlUCSIsCatLu(code: number): number;

declare function xmlUCSIsCatM(code: number): number;

declare function xmlUCSIsCatMc(code: number): number;

declare function xmlUCSIsCatMe(code: number): number;

declare function xmlUCSIsCatMn(code: number): number;

declare function xmlUCSIsCatN(code: number): number;

declare function xmlUCSIsCatNd(code: number): number;

declare function xmlUCSIsCatNl(code: number): number;

declare function xmlUCSIsCatNo(code: number): number;

declare function xmlUCSIsCatP(code: number): number;

declare function xmlUCSIsCatPc(code: number): number;

declare function xmlUCSIsCatPd(code: number): number;

declare function xmlUCSIsCatPe(code: number): number;

declare function xmlUCSIsCatPf(code: number): number;

declare function xmlUCSIsCatPi(code: number): number;

declare function xmlUCSIsCatPo(code: number): number;

declare function xmlUCSIsCatPs(code: number): number;

declare function xmlUCSIsCatS(code: number): number;

declare function xmlUCSIsCatSc(code: number): number;

declare function xmlUCSIsCatSk(code: number): number;

declare function xmlUCSIsCatSm(code: number): number;

declare function xmlUCSIsCatSo(code: number): number;

declare function xmlUCSIsCatZ(code: number): number;

declare function xmlUCSIsCatZl(code: number): number;

declare function xmlUCSIsCatZp(code: number): number;

declare function xmlUCSIsCatZs(code: number): number;

declare function xmlUCSIsCherokee(code: number): number;

declare function xmlUCSIsCombiningDiacriticalMarks(code: number): number;

declare function xmlUCSIsCombiningDiacriticalMarksforSymbols(code: number): number;

declare function xmlUCSIsCombiningHalfMarks(code: number): number;

declare function xmlUCSIsCombiningMarksforSymbols(code: number): number;

declare function xmlUCSIsControlPictures(code: number): number;

declare function xmlUCSIsCurrencySymbols(code: number): number;

declare function xmlUCSIsCypriotSyllabary(code: number): number;

declare function xmlUCSIsCyrillic(code: number): number;

declare function xmlUCSIsCyrillicSupplement(code: number): number;

declare function xmlUCSIsDeseret(code: number): number;

declare function xmlUCSIsDevanagari(code: number): number;

declare function xmlUCSIsDingbats(code: number): number;

declare function xmlUCSIsEnclosedAlphanumerics(code: number): number;

declare function xmlUCSIsEnclosedCJKLettersandMonths(code: number): number;

declare function xmlUCSIsEthiopic(code: number): number;

declare function xmlUCSIsGeneralPunctuation(code: number): number;

declare function xmlUCSIsGeometricShapes(code: number): number;

declare function xmlUCSIsGeorgian(code: number): number;

declare function xmlUCSIsGothic(code: number): number;

declare function xmlUCSIsGreek(code: number): number;

declare function xmlUCSIsGreekExtended(code: number): number;

declare function xmlUCSIsGreekandCoptic(code: number): number;

declare function xmlUCSIsGujarati(code: number): number;

declare function xmlUCSIsGurmukhi(code: number): number;

declare function xmlUCSIsHalfwidthandFullwidthForms(code: number): number;

declare function xmlUCSIsHangulCompatibilityJamo(code: number): number;

declare function xmlUCSIsHangulJamo(code: number): number;

declare function xmlUCSIsHangulSyllables(code: number): number;

declare function xmlUCSIsHanunoo(code: number): number;

declare function xmlUCSIsHebrew(code: number): number;

declare function xmlUCSIsHighPrivateUseSurrogates(code: number): number;

declare function xmlUCSIsHighSurrogates(code: number): number;

declare function xmlUCSIsHiragana(code: number): number;

declare function xmlUCSIsIPAExtensions(code: number): number;

declare function xmlUCSIsIdeographicDescriptionCharacters(code: number): number;

declare function xmlUCSIsKanbun(code: number): number;

declare function xmlUCSIsKangxiRadicals(code: number): number;

declare function xmlUCSIsKannada(code: number): number;

declare function xmlUCSIsKatakana(code: number): number;

declare function xmlUCSIsKatakanaPhoneticExtensions(code: number): number;

declare function xmlUCSIsKhmer(code: number): number;

declare function xmlUCSIsKhmerSymbols(code: number): number;

declare function xmlUCSIsLao(code: number): number;

declare function xmlUCSIsLatin1Supplement(code: number): number;

declare function xmlUCSIsLatinExtendedA(code: number): number;

declare function xmlUCSIsLatinExtendedAdditional(code: number): number;

declare function xmlUCSIsLatinExtendedB(code: number): number;

declare function xmlUCSIsLetterlikeSymbols(code: number): number;

declare function xmlUCSIsLimbu(code: number): number;

declare function xmlUCSIsLinearBIdeograms(code: number): number;

declare function xmlUCSIsLinearBSyllabary(code: number): number;

declare function xmlUCSIsLowSurrogates(code: number): number;

declare function xmlUCSIsMalayalam(code: number): number;

declare function xmlUCSIsMathematicalAlphanumericSymbols(code: number): number;

declare function xmlUCSIsMathematicalOperators(code: number): number;

declare function xmlUCSIsMiscellaneousMathematicalSymbolsA(code: number): number;

declare function xmlUCSIsMiscellaneousMathematicalSymbolsB(code: number): number;

declare function xmlUCSIsMiscellaneousSymbols(code: number): number;

declare function xmlUCSIsMiscellaneousSymbolsandArrows(code: number): number;

declare function xmlUCSIsMiscellaneousTechnical(code: number): number;

declare function xmlUCSIsMongolian(code: number): number;

declare function xmlUCSIsMusicalSymbols(code: number): number;

declare function xmlUCSIsMyanmar(code: number): number;

declare function xmlUCSIsNumberForms(code: number): number;

declare function xmlUCSIsOgham(code: number): number;

declare function xmlUCSIsOldItalic(code: number): number;

declare function xmlUCSIsOpticalCharacterRecognition(code: number): number;

declare function xmlUCSIsOriya(code: number): number;

declare function xmlUCSIsOsmanya(code: number): number;

declare function xmlUCSIsPhoneticExtensions(code: number): number;

declare function xmlUCSIsPrivateUse(code: number): number;

declare function xmlUCSIsPrivateUseArea(code: number): number;

declare function xmlUCSIsRunic(code: number): number;

declare function xmlUCSIsShavian(code: number): number;

declare function xmlUCSIsSinhala(code: number): number;

declare function xmlUCSIsSmallFormVariants(code: number): number;

declare function xmlUCSIsSpacingModifierLetters(code: number): number;

declare function xmlUCSIsSpecials(code: number): number;

declare function xmlUCSIsSuperscriptsandSubscripts(code: number): number;

declare function xmlUCSIsSupplementalArrowsA(code: number): number;

declare function xmlUCSIsSupplementalArrowsB(code: number): number;

declare function xmlUCSIsSupplementalMathematicalOperators(code: number): number;

declare function xmlUCSIsSupplementaryPrivateUseAreaA(code: number): number;

declare function xmlUCSIsSupplementaryPrivateUseAreaB(code: number): number;

declare function xmlUCSIsSyriac(code: number): number;

declare function xmlUCSIsTagalog(code: number): number;

declare function xmlUCSIsTagbanwa(code: number): number;

declare function xmlUCSIsTags(code: number): number;

declare function xmlUCSIsTaiLe(code: number): number;

declare function xmlUCSIsTaiXuanJingSymbols(code: number): number;

declare function xmlUCSIsTamil(code: number): number;

declare function xmlUCSIsTelugu(code: number): number;

declare function xmlUCSIsThaana(code: number): number;

declare function xmlUCSIsThai(code: number): number;

declare function xmlUCSIsTibetan(code: number): number;

declare function xmlUCSIsUgaritic(code: number): number;

declare function xmlUCSIsUnifiedCanadianAboriginalSyllabics(code: number): number;

declare function xmlUCSIsVariationSelectors(code: number): number;

declare function xmlUCSIsVariationSelectorsSupplement(code: number): number;

declare function xmlUCSIsYiRadicals(code: number): number;

declare function xmlUCSIsYiSyllables(code: number): number;

declare function xmlUCSIsYijingHexagramSymbols(code: number): number;

declare function xmlURIEscape(str: string | any): string;

declare function xmlURIEscapeStr(str: string | any, list: string | any): string;

declare function xmlURIUnescapeString(str: string | any, len: number, target: string | any): string;

declare function xmlUTF8Charcmp(utf1: string | any, utf2: string | any): number;

declare function xmlUTF8Size(utf: string | any): number;

declare function xmlUTF8Strlen(utf: string | any): number;

declare function xmlUTF8Strloc(utf: string | any, utfchar: string | any): number;

declare function xmlUTF8Strndup(utf: string | any, len: number): string;

declare function xmlUTF8Strpos(utf: string | any, pos: number): string;

declare function xmlUTF8Strsize(utf: string | any, len: number): number;

declare function xmlUTF8Strsub(utf: string | any, start: number, len: number): string;

declare function xmlUnlinkNode(cur: _xmlNode): void;

declare function xmlUnlockLibrary(): void;

declare function xmlUnsetNsProp(node: _xmlNode, ns: _xmlNs, name: string | any): number;

declare function xmlUnsetProp(node: _xmlNode, name: string | any): number;

declare function xmlValidBuildContentModel(ctxt: _xmlValidCtxt, elem: _xmlElement): number;

declare function xmlValidCtxtNormalizeAttributeValue(ctxt: _xmlValidCtxt, doc: _xmlDoc, elem: _xmlNode, name: string | any, value: string | any): string;

declare function xmlValidGetPotentialChildren(ctree: _xmlElementContent, names: string, len: number, max: number): number;

declare function xmlValidGetValidElements(prev: _xmlNode, next: _xmlNode, names: string, max: number): number;

declare function xmlValidNormalizeAttributeValue(doc: _xmlDoc, elem: _xmlNode, name: string | any, value: string | any): string;

declare function xmlValidateAttributeDecl(ctxt: _xmlValidCtxt, doc: _xmlDoc, attr: _xmlAttribute): number;

declare function xmlValidateAttributeValue(type: xmlAttributeType, value: string | any): number;

declare function xmlValidateDocument(ctxt: _xmlValidCtxt, doc: _xmlDoc): number;

declare function xmlValidateDocumentFinal(ctxt: _xmlValidCtxt, doc: _xmlDoc): number;

declare function xmlValidateDtd(ctxt: _xmlValidCtxt, doc: _xmlDoc, dtd: _xmlDtd): number;

declare function xmlValidateDtdFinal(ctxt: _xmlValidCtxt, doc: _xmlDoc): number;

declare function xmlValidateElement(ctxt: _xmlValidCtxt, doc: _xmlDoc, elem: _xmlNode): number;

declare function xmlValidateElementDecl(ctxt: _xmlValidCtxt, doc: _xmlDoc, elem: _xmlElement): number;

declare function xmlValidateNCName(value: string | any, space: number): number;

declare function xmlValidateNMToken(value: string | any, space: number): number;

declare function xmlValidateName(value: string | any, space: number): number;

declare function xmlValidateNameValue(value: string | any): number;

declare function xmlValidateNamesValue(value: string | any): number;

declare function xmlValidateNmtokenValue(value: string | any): number;

declare function xmlValidateNmtokensValue(value: string | any): number;

declare function xmlValidateNotationDecl(ctxt: _xmlValidCtxt, doc: _xmlDoc, nota: _xmlNotation): number;

declare function xmlValidateNotationUse(ctxt: _xmlValidCtxt, doc: _xmlDoc, notationName: string | any): number;

declare function xmlValidateOneAttribute(ctxt: _xmlValidCtxt, doc: _xmlDoc, elem: _xmlNode, attr: _xmlAttr, value: string | any): number;

declare function xmlValidateOneElement(ctxt: _xmlValidCtxt, doc: _xmlDoc, elem: _xmlNode): number;

declare function xmlValidateOneNamespace(ctxt: _xmlValidCtxt, doc: _xmlDoc, elem: _xmlNode, prefix: string | any, ns: _xmlNs, value: string | any): number;

declare function xmlValidatePopElement(ctxt: _xmlValidCtxt, doc: _xmlDoc, elem: _xmlNode, qname: string | any): number;

declare function xmlValidatePushCData(ctxt: _xmlValidCtxt, data: string | any, len: number): number;

declare function xmlValidatePushElement(ctxt: _xmlValidCtxt, doc: _xmlDoc, elem: _xmlNode, qname: string | any): number;

declare function xmlValidateQName(value: string | any, space: number): number;

declare function xmlValidateRoot(ctxt: _xmlValidCtxt, doc: _xmlDoc): number;

declare function xmlXIncludeFreeContext(ctxt: any): void;

declare function xmlXIncludeNewContext(doc: _xmlDoc): any;

declare function xmlXIncludeProcess(doc: _xmlDoc): number;

declare function xmlXIncludeProcessFlags(doc: _xmlDoc, flags: number): number;

declare function xmlXIncludeProcessFlagsData(doc: _xmlDoc, flags: number, data: any): number;

declare function xmlXIncludeProcessNode(ctxt: any, tree: _xmlNode): number;

declare function xmlXIncludeProcessTree(tree: _xmlNode): number;

declare function xmlXIncludeProcessTreeFlags(tree: _xmlNode, flags: number): number;

declare function xmlXIncludeProcessTreeFlagsData(tree: _xmlNode, flags: number, data: any): number;

declare function xmlXIncludeSetFlags(ctxt: any, flags: number): number;

declare function xmlXPathAddValues(ctxt: _xmlXPathParserContext): void;

declare function xmlXPathBooleanFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathCastBooleanToNumber(val: number): number;

declare function xmlXPathCastBooleanToString(val: number): string;

declare function xmlXPathCastNodeSetToBoolean(ns: _xmlNodeSet): number;

declare function xmlXPathCastNodeSetToNumber(ns: _xmlNodeSet): number;

declare function xmlXPathCastNodeSetToString(ns: _xmlNodeSet): string;

declare function xmlXPathCastNodeToNumber(node: _xmlNode): number;

declare function xmlXPathCastNodeToString(node: _xmlNode): string;

declare function xmlXPathCastNumberToBoolean(val: number): number;

declare function xmlXPathCastNumberToString(val: number): string;

declare function xmlXPathCastStringToBoolean(val: string | any): number;

declare function xmlXPathCastStringToNumber(val: string | any): number;

declare function xmlXPathCastToBoolean(val: _xmlXPathObject): number;

declare function xmlXPathCastToNumber(val: _xmlXPathObject): number;

declare function xmlXPathCastToString(val: _xmlXPathObject): string;

declare function xmlXPathCeilingFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathCmpNodes(node1: _xmlNode, node2: _xmlNode): number;

declare function xmlXPathCompareValues(ctxt: _xmlXPathParserContext, inf: number, strict: number): number;

declare function xmlXPathCompile(str: string | any): any;

declare function xmlXPathCompiledEval(comp: any, ctx: _xmlXPathContext): _xmlXPathObject;

declare function xmlXPathCompiledEvalToBoolean(comp: any, ctxt: _xmlXPathContext): number;

declare function xmlXPathConcatFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathContainsFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathContextSetCache(ctxt: _xmlXPathContext, active: number, value: number, options: number): number;

declare function xmlXPathConvertBoolean(val: _xmlXPathObject): _xmlXPathObject;

declare function xmlXPathConvertNumber(val: _xmlXPathObject): _xmlXPathObject;

declare function xmlXPathConvertString(val: _xmlXPathObject): _xmlXPathObject;

declare function xmlXPathCountFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathCtxtCompile(ctxt: _xmlXPathContext, str: string | any): any;

declare function xmlXPathDebugDumpCompExpr(output: FILE, comp: any, depth: number): void;

declare function xmlXPathDebugDumpObject(output: FILE, cur: _xmlXPathObject, depth: number): void;

declare function xmlXPathDifference(nodes1: _xmlNodeSet, nodes2: _xmlNodeSet): _xmlNodeSet;

declare function xmlXPathDistinct(nodes: _xmlNodeSet): _xmlNodeSet;

declare function xmlXPathDistinctSorted(nodes: _xmlNodeSet): _xmlNodeSet;

declare function xmlXPathDivValues(ctxt: _xmlXPathParserContext): void;

declare function xmlXPathEqualValues(ctxt: _xmlXPathParserContext): number;

declare function xmlXPathErr(ctxt: _xmlXPathParserContext, error: number): void;

enum xmlXPathError {

	XPATH_EXPRESSION_OK = 0,

	XPATH_NUMBER_ERROR = 1,

	XPATH_UNFINISHED_LITERAL_ERROR = 2,

	XPATH_START_LITERAL_ERROR = 3,

	XPATH_VARIABLE_REF_ERROR = 4,

	XPATH_UNDEF_VARIABLE_ERROR = 5,

	XPATH_INVALID_PREDICATE_ERROR = 6,

	XPATH_EXPR_ERROR = 7,

	XPATH_UNCLOSED_ERROR = 8,

	XPATH_UNKNOWN_FUNC_ERROR = 9,

	XPATH_INVALID_OPERAND = 10,

	XPATH_INVALID_TYPE = 11,

	XPATH_INVALID_ARITY = 12,

	XPATH_INVALID_CTXT_SIZE = 13,

	XPATH_INVALID_CTXT_POSITION = 14,

	XPATH_MEMORY_ERROR = 15,

	XPTR_SYNTAX_ERROR = 16,

	XPTR_RESOURCE_ERROR = 17,

	XPTR_SUB_RESOURCE_ERROR = 18,

	XPATH_UNDEF_PREFIX_ERROR = 19,

	XPATH_ENCODING_ERROR = 20,

	XPATH_INVALID_CHAR_ERROR = 21,

	XPATH_INVALID_CTXT = 22,

	XPATH_STACK_ERROR = 23,

	XPATH_FORBID_VARIABLE_ERROR = 24
}


declare function xmlXPathEval(str: string | any, ctx: _xmlXPathContext): _xmlXPathObject;

declare function xmlXPathEvalExpr(ctxt: _xmlXPathParserContext): void;

declare function xmlXPathEvalExpression(str: string | any, ctxt: _xmlXPathContext): _xmlXPathObject;

declare function xmlXPathEvalPredicate(ctxt: _xmlXPathContext, res: _xmlXPathObject): number;

declare function xmlXPathEvaluatePredicateResult(ctxt: _xmlXPathParserContext, res: _xmlXPathObject): number;

declare function xmlXPathFalseFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathFloorFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathFreeCompExpr(comp: any): void;

declare function xmlXPathFreeContext(ctxt: _xmlXPathContext): void;

declare function xmlXPathFreeNodeSet(obj: _xmlNodeSet): void;

declare function xmlXPathFreeNodeSetList(obj: _xmlXPathObject): void;

declare function xmlXPathFreeObject(obj: _xmlXPathObject): void;

declare function xmlXPathFreeParserContext(ctxt: _xmlXPathParserContext): void;

declare function xmlXPathFunctionLookup(ctxt: _xmlXPathContext, name: string | any): (p1: _xmlXPathParserContext, p2: number) => void;

declare function xmlXPathFunctionLookupNS(ctxt: _xmlXPathContext, name: string | any, ns_uri: string | any): (p1: _xmlXPathParserContext, p2: number) => void;

declare function xmlXPathHasSameNodes(nodes1: _xmlNodeSet, nodes2: _xmlNodeSet): number;

declare function xmlXPathIdFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathInit(): void;

declare function xmlXPathIntersection(nodes1: _xmlNodeSet, nodes2: _xmlNodeSet): _xmlNodeSet;

declare function xmlXPathIsInf(val: number): number;

declare function xmlXPathIsNaN(val: number): number;

declare function xmlXPathIsNodeType(name: string | any): number;

declare function xmlXPathLangFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathLastFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathLeading(nodes1: _xmlNodeSet, nodes2: _xmlNodeSet): _xmlNodeSet;

declare function xmlXPathLeadingSorted(nodes1: _xmlNodeSet, nodes2: _xmlNodeSet): _xmlNodeSet;

declare function xmlXPathLocalNameFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathModValues(ctxt: _xmlXPathParserContext): void;

declare function xmlXPathMultValues(ctxt: _xmlXPathParserContext): void;

declare var xmlXPathNAN: number;

declare var xmlXPathNINF: number;

declare function xmlXPathNamespaceURIFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathNewBoolean(val: number): _xmlXPathObject;

declare function xmlXPathNewCString(val: string | any): _xmlXPathObject;

declare function xmlXPathNewContext(doc: _xmlDoc): _xmlXPathContext;

declare function xmlXPathNewFloat(val: number): _xmlXPathObject;

declare function xmlXPathNewNodeSet(val: _xmlNode): _xmlXPathObject;

declare function xmlXPathNewNodeSetList(val: _xmlNodeSet): _xmlXPathObject;

declare function xmlXPathNewParserContext(str: string | any, ctxt: _xmlXPathContext): _xmlXPathParserContext;

declare function xmlXPathNewString(val: string | any): _xmlXPathObject;

declare function xmlXPathNewValueTree(val: _xmlNode): _xmlXPathObject;

declare function xmlXPathNextAncestor(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextAncestorOrSelf(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextAttribute(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextChild(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextDescendant(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextDescendantOrSelf(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextFollowing(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextFollowingSibling(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextNamespace(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextParent(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextPreceding(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextPrecedingSibling(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNextSelf(ctxt: _xmlXPathParserContext, cur: _xmlNode): _xmlNode;

declare function xmlXPathNodeEval(node: _xmlNode, str: string | any, ctx: _xmlXPathContext): _xmlXPathObject;

declare function xmlXPathNodeLeading(nodes: _xmlNodeSet, node: _xmlNode): _xmlNodeSet;

declare function xmlXPathNodeLeadingSorted(nodes: _xmlNodeSet, node: _xmlNode): _xmlNodeSet;

declare function xmlXPathNodeSetAdd(cur: _xmlNodeSet, val: _xmlNode): number;

declare function xmlXPathNodeSetAddNs(cur: _xmlNodeSet, node: _xmlNode, ns: _xmlNs): number;

declare function xmlXPathNodeSetAddUnique(cur: _xmlNodeSet, val: _xmlNode): number;

declare function xmlXPathNodeSetContains(cur: _xmlNodeSet, val: _xmlNode): number;

declare function xmlXPathNodeSetCreate(val: _xmlNode): _xmlNodeSet;

declare function xmlXPathNodeSetDel(cur: _xmlNodeSet, val: _xmlNode): void;

declare function xmlXPathNodeSetFreeNs(ns: _xmlNs): void;

declare function xmlXPathNodeSetMerge(val1: _xmlNodeSet, val2: _xmlNodeSet): _xmlNodeSet;

declare function xmlXPathNodeSetRemove(cur: _xmlNodeSet, val: number): void;

declare function xmlXPathNodeSetSort(set: _xmlNodeSet): void;

declare function xmlXPathNodeTrailing(nodes: _xmlNodeSet, node: _xmlNode): _xmlNodeSet;

declare function xmlXPathNodeTrailingSorted(nodes: _xmlNodeSet, node: _xmlNode): _xmlNodeSet;

declare function xmlXPathNormalizeFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathNotEqualValues(ctxt: _xmlXPathParserContext): number;

declare function xmlXPathNotFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathNsLookup(ctxt: _xmlXPathContext, prefix: string | any): string;

declare function xmlXPathNumberFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathObjectCopy(val: _xmlXPathObject): _xmlXPathObject;

enum xmlXPathObjectType {

	XPATH_UNDEFINED = 0,

	XPATH_NODESET = 1,

	XPATH_BOOLEAN = 2,

	XPATH_NUMBER = 3,

	XPATH_STRING = 4,

	XPATH_POINT = 5,

	XPATH_RANGE = 6,

	XPATH_LOCATIONSET = 7,

	XPATH_USERS = 8,

	XPATH_XSLT_TREE = 9
}


declare function xmlXPathOrderDocElems(doc: _xmlDoc): number;

declare var xmlXPathPINF: number;

declare function xmlXPathParseNCName(ctxt: _xmlXPathParserContext): string;

declare function xmlXPathParseName(ctxt: _xmlXPathParserContext): string;

declare function xmlXPathPopBoolean(ctxt: _xmlXPathParserContext): number;

declare function xmlXPathPopExternal(ctxt: _xmlXPathParserContext): any;

declare function xmlXPathPopNodeSet(ctxt: _xmlXPathParserContext): _xmlNodeSet;

declare function xmlXPathPopNumber(ctxt: _xmlXPathParserContext): number;

declare function xmlXPathPopString(ctxt: _xmlXPathParserContext): string;

declare function xmlXPathPositionFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathRegisterAllFunctions(ctxt: _xmlXPathContext): void;

declare function xmlXPathRegisterFunc(ctxt: _xmlXPathContext, name: string | any, f: (p1: _xmlXPathParserContext, p2: number) => void): number;

declare function xmlXPathRegisterFuncLookup(ctxt: _xmlXPathContext, f: (p1: any, p2: string, p3: string) => (p1: _xmlXPathParserContext, p2: number) => void, funcCtxt: any): void;

declare function xmlXPathRegisterFuncNS(ctxt: _xmlXPathContext, name: string | any, ns_uri: string | any, f: (p1: _xmlXPathParserContext, p2: number) => void): number;

declare function xmlXPathRegisterNs(ctxt: _xmlXPathContext, prefix: string | any, ns_uri: string | any): number;

declare function xmlXPathRegisterVariable(ctxt: _xmlXPathContext, name: string | any, value: _xmlXPathObject): number;

declare function xmlXPathRegisterVariableLookup(ctxt: _xmlXPathContext, f: (p1: any, p2: string, p3: string) => _xmlXPathObject, data: any): void;

declare function xmlXPathRegisterVariableNS(ctxt: _xmlXPathContext, name: string | any, ns_uri: string | any, value: _xmlXPathObject): number;

declare function xmlXPathRegisteredFuncsCleanup(ctxt: _xmlXPathContext): void;

declare function xmlXPathRegisteredNsCleanup(ctxt: _xmlXPathContext): void;

declare function xmlXPathRegisteredVariablesCleanup(ctxt: _xmlXPathContext): void;

declare function xmlXPathRoot(ctxt: _xmlXPathParserContext): void;

declare function xmlXPathRoundFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathSetContextNode(node: _xmlNode, ctx: _xmlXPathContext): number;

declare function xmlXPathStartsWithFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathStringEvalNumber(str: string | any): number;

declare function xmlXPathStringFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathStringLengthFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathSubValues(ctxt: _xmlXPathParserContext): void;

declare function xmlXPathSubstringAfterFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathSubstringBeforeFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathSubstringFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathSumFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathTrailing(nodes1: _xmlNodeSet, nodes2: _xmlNodeSet): _xmlNodeSet;

declare function xmlXPathTrailingSorted(nodes1: _xmlNodeSet, nodes2: _xmlNodeSet): _xmlNodeSet;

declare function xmlXPathTranslateFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathTrueFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPathValueFlipSign(ctxt: _xmlXPathParserContext): void;

declare function xmlXPathVariableLookup(ctxt: _xmlXPathContext, name: string | any): _xmlXPathObject;

declare function xmlXPathVariableLookupNS(ctxt: _xmlXPathContext, name: string | any, ns_uri: string | any): _xmlXPathObject;

declare function xmlXPathWrapCString(val: string | any): _xmlXPathObject;

declare function xmlXPathWrapExternal(val: any): _xmlXPathObject;

declare function xmlXPathWrapNodeSet(val: _xmlNodeSet): _xmlXPathObject;

declare function xmlXPathWrapString(val: string | any): _xmlXPathObject;

declare function xmlXPatherror(ctxt: _xmlXPathParserContext, file: string | any, line: number, no: number): void;

declare function xmlXPtrBuildNodeList(obj: _xmlXPathObject): _xmlNode;

declare function xmlXPtrEval(str: string | any, ctx: _xmlXPathContext): _xmlXPathObject;

declare function xmlXPtrEvalRangePredicate(ctxt: _xmlXPathParserContext): void;

declare function xmlXPtrFreeLocationSet(obj: _xmlLocationSet): void;

declare function xmlXPtrLocationSetAdd(cur: _xmlLocationSet, val: _xmlXPathObject): void;

declare function xmlXPtrLocationSetCreate(val: _xmlXPathObject): _xmlLocationSet;

declare function xmlXPtrLocationSetDel(cur: _xmlLocationSet, val: _xmlXPathObject): void;

declare function xmlXPtrLocationSetMerge(val1: _xmlLocationSet, val2: _xmlLocationSet): _xmlLocationSet;

declare function xmlXPtrLocationSetRemove(cur: _xmlLocationSet, val: number): void;

declare function xmlXPtrNewCollapsedRange(start: _xmlNode): _xmlXPathObject;

declare function xmlXPtrNewContext(doc: _xmlDoc, here: _xmlNode, origin: _xmlNode): _xmlXPathContext;

declare function xmlXPtrNewLocationSetNodeSet(set: _xmlNodeSet): _xmlXPathObject;

declare function xmlXPtrNewLocationSetNodes(start: _xmlNode, end: _xmlNode): _xmlXPathObject;

declare function xmlXPtrNewRange(start: _xmlNode, startindex: number, end: _xmlNode, endindex: number): _xmlXPathObject;

declare function xmlXPtrNewRangeNodeObject(start: _xmlNode, end: _xmlXPathObject): _xmlXPathObject;

declare function xmlXPtrNewRangeNodePoint(start: _xmlNode, end: _xmlXPathObject): _xmlXPathObject;

declare function xmlXPtrNewRangeNodes(start: _xmlNode, end: _xmlNode): _xmlXPathObject;

declare function xmlXPtrNewRangePointNode(start: _xmlXPathObject, end: _xmlNode): _xmlXPathObject;

declare function xmlXPtrNewRangePoints(start: _xmlXPathObject, end: _xmlXPathObject): _xmlXPathObject;

declare function xmlXPtrRangeToFunction(ctxt: _xmlXPathParserContext, nargs: number): void;

declare function xmlXPtrWrapLocationSet(val: _xmlLocationSet): _xmlXPathObject;
