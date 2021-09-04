
interface BerMemoryFunctions {
	bmf_malloc: (p1: number, p2: any) => any;
	bmf_calloc: (p1: number, p2: number, p3: any) => any;
	bmf_realloc: (p1: any, p2: number, p3: any) => any;
	bmf_free: (p1: any, p2: any) => void;
}
declare var BerMemoryFunctions: BerMemoryFunctions;

interface BerValue {
	bv_len: number;
	bv_val: string;
}
declare var BerValue: BerValue;

interface LDAPAPIFeatureInfo {
	ldapaif_info_version: number;
	ldapaif_name: string;
	ldapaif_version: number;
}
declare var LDAPAPIFeatureInfo: LDAPAPIFeatureInfo;

interface LDAPAPIInfo {
	ldapai_info_version: number;
	ldapai_api_version: number;
	ldapai_protocol_version: number;
	ldapai_extensions: string;
	ldapai_vendor_name: string;
	ldapai_vendor_version: number;
}
declare var LDAPAPIInfo: LDAPAPIInfo;

interface LDAPAVA {
	la_attr: BerValue;
	la_value: BerValue;
	la_flags: number;
	la_private: any;
}
declare var LDAPAVA: LDAPAVA;

interface LDAPAttributeType {
	at_oid: string;
	at_names: string;
	at_desc: string;
	at_obsolete: number;
	at_sup_oid: string;
	at_equality_oid: string;
	at_ordering_oid: string;
	at_substr_oid: string;
	at_syntax_oid: string;
	at_syntax_len: number;
	at_single_value: number;
	at_collective: number;
	at_no_user_mod: number;
	at_usage: number;
	at_extensions: LDAPSchemaExtensionItem;
}
declare var LDAPAttributeType: LDAPAttributeType;

interface LDAPContentRule {
	cr_oid: string;
	cr_names: string;
	cr_desc: string;
	cr_sup_oids: string;
	cr_obsolete: number;
	cr_oc_oids_aux: string;
	cr_at_oids_must: string;
	cr_at_oids_may: string;
	cr_at_oids_not: string;
	cr_extensions: LDAPSchemaExtensionItem;
}
declare var LDAPContentRule: LDAPContentRule;

interface LDAPControl {
	ldctl_oid: string;
	ldctl_value: BerValue;
	ldctl_iscritical: number;
}
declare var LDAPControl: LDAPControl;

interface LDAPDerefRes {
	derefAttr: string;
	derefVal: BerValue;
	attrVals: LDAPDerefVal;
	next: LDAPDerefRes;
}
declare var LDAPDerefRes: LDAPDerefRes;

interface LDAPDerefSpec {
	derefAttr: string;
	attributes: string;
}
declare var LDAPDerefSpec: LDAPDerefSpec;

interface LDAPDerefVal {
	type: string;
	vals: BerValue;
	next: LDAPDerefVal;
}
declare var LDAPDerefVal: LDAPDerefVal;

interface LDAPMatchingRule {
	mr_oid: string;
	mr_names: string;
	mr_desc: string;
	mr_obsolete: number;
	mr_syntax_oid: string;
	mr_extensions: LDAPSchemaExtensionItem;
}
declare var LDAPMatchingRule: LDAPMatchingRule;

interface LDAPMatchingRuleUse {
	mru_oid: string;
	mru_names: string;
	mru_desc: string;
	mru_obsolete: number;
	mru_applies_oids: string;
	mru_extensions: LDAPSchemaExtensionItem;
}
declare var LDAPMatchingRuleUse: LDAPMatchingRuleUse;

interface LDAPNameForm {
	nf_oid: string;
	nf_names: string;
	nf_desc: string;
	nf_obsolete: number;
	nf_objectclass: string;
	nf_at_oids_must: string;
	nf_at_oids_may: string;
	nf_extensions: LDAPSchemaExtensionItem;
}
declare var LDAPNameForm: LDAPNameForm;

interface LDAPObjectClass {
	oc_oid: string;
	oc_names: string;
	oc_desc: string;
	oc_obsolete: number;
	oc_sup_oids: string;
	oc_kind: number;
	oc_at_oids_must: string;
	oc_at_oids_may: string;
	oc_extensions: LDAPSchemaExtensionItem;
}
declare var LDAPObjectClass: LDAPObjectClass;

enum LDAPPasswordPolicyError {

	PP_passwordExpired = 0,

	PP_accountLocked = 1,

	PP_changeAfterReset = 2,

	PP_passwordModNotAllowed = 3,

	PP_mustSupplyOldPassword = 4,

	PP_insufficientPasswordQuality = 5,

	PP_passwordTooShort = 6,

	PP_passwordTooYoung = 7,

	PP_passwordInHistory = 8,

	PP_noError = 65535
}


interface LDAPSchemaExtensionItem {
	lsei_name: string;
	lsei_values: string;
}
declare var LDAPSchemaExtensionItem: LDAPSchemaExtensionItem;

interface LDAPSortKey {
	attributeType: string;
	orderingRule: string;
	reverseOrder: number;
}
declare var LDAPSortKey: LDAPSortKey;

interface LDAPStructureRule {
	sr_ruleid: number;
	sr_names: string;
	sr_desc: string;
	sr_obsolete: number;
	sr_nameform: string;
	sr_nsup_ruleids: number;
	sr_sup_ruleids: number;
	sr_extensions: LDAPSchemaExtensionItem;
}
declare var LDAPStructureRule: LDAPStructureRule;

interface LDAPSyntax {
	syn_oid: string;
	syn_names: string;
	syn_desc: string;
	syn_extensions: LDAPSchemaExtensionItem;
}
declare var LDAPSyntax: LDAPSyntax;

interface LDAPURLDesc {
	lud_next: LDAPURLDesc;
	lud_scheme: string;
	lud_host: string;
	lud_port: number;
	lud_dn: string;
	lud_attrs: string;
	lud_scope: number;
	lud_filter: string;
	lud_exts: string;
	lud_crit_exts: number;
}
declare var LDAPURLDesc: LDAPURLDesc;

interface LDAPVLVInfo {
	ldvlv_version: number;
	ldvlv_before_count: number;
	ldvlv_after_count: number;
	ldvlv_offset: number;
	ldvlv_count: number;
	ldvlv_attrvalue: BerValue;
	ldvlv_context: BerValue;
	ldvlv_extradata: any;
}
declare var LDAPVLVInfo: LDAPVLVInfo;

interface Sockbuf_IO_Desc {
	sbiod_level: number;
	sbiod_sb: any;
	sbiod_io: sockbuf_io;
	sbiod_pvt: any;
	sbiod_next: Sockbuf_IO_Desc;
}
declare var Sockbuf_IO_Desc: Sockbuf_IO_Desc;

declare var ber_pvt_opt_on: number;

declare var ber_sockbuf_io_debug: sockbuf_io;

declare var ber_sockbuf_io_fd: sockbuf_io;

declare var ber_sockbuf_io_readahead: sockbuf_io;

declare var ber_sockbuf_io_tcp: sockbuf_io;

declare var ber_sockbuf_io_udp: sockbuf_io;

declare function ldap_attributetype2bv(at: LDAPAttributeType, bv: BerValue): BerValue;

declare function ldap_attributetype2name(at: LDAPAttributeType): string;

declare function ldap_attributetype2str(at: LDAPAttributeType): string;

declare function ldap_attributetype_free(at: LDAPAttributeType): void;

interface ldap_conncb {
	lc_add: (p1: any, p2: any, p3: LDAPURLDesc, p4: sockaddr, p5: ldap_conncb) => number;
	lc_del: (p1: any, p2: any, p3: ldap_conncb) => void;
	lc_arg: any;
}
declare var ldap_conncb: ldap_conncb;

declare function ldap_contentrule2bv(cr: LDAPContentRule, bv: BerValue): BerValue;

declare function ldap_contentrule2name(cr: LDAPContentRule): string;

declare function ldap_contentrule2str(cr: LDAPContentRule): string;

declare function ldap_contentrule_free(cr: LDAPContentRule): void;

declare function ldap_matchingrule2bv(mr: LDAPMatchingRule, bv: BerValue): BerValue;

declare function ldap_matchingrule2name(mr: LDAPMatchingRule): string;

declare function ldap_matchingrule2str(mr: LDAPMatchingRule): string;

declare function ldap_matchingrule_free(mr: LDAPMatchingRule): void;

declare function ldap_matchingruleuse2bv(mru: LDAPMatchingRuleUse, bv: BerValue): BerValue;

declare function ldap_matchingruleuse2name(mru: LDAPMatchingRuleUse): string;

declare function ldap_matchingruleuse2str(mru: LDAPMatchingRuleUse): string;

declare function ldap_matchingruleuse_free(mr: LDAPMatchingRuleUse): void;

declare function ldap_nameform2bv(nf: LDAPNameForm, bv: BerValue): BerValue;

declare function ldap_nameform2name(nf: LDAPNameForm): string;

declare function ldap_nameform2str(nf: LDAPNameForm): string;

declare function ldap_nameform_free(nf: LDAPNameForm): void;

declare function ldap_objectclass2bv(oc: LDAPObjectClass, bv: BerValue): BerValue;

declare function ldap_objectclass2name(oc: LDAPObjectClass): string;

declare function ldap_objectclass2str(oc: LDAPObjectClass): string;

declare function ldap_objectclass_free(oc: LDAPObjectClass): void;

declare function ldap_scherr2str(code: number): string;

declare function ldap_str2attributetype(s: string | any, code: number, errp: string, flags: number): LDAPAttributeType;

declare function ldap_str2contentrule(s: string | any, code: number, errp: string, flags: number): LDAPContentRule;

declare function ldap_str2matchingrule(s: string | any, code: number, errp: string, flags: number): LDAPMatchingRule;

declare function ldap_str2matchingruleuse(s: string | any, code: number, errp: string, flags: number): LDAPMatchingRuleUse;

declare function ldap_str2nameform(s: string | any, code: number, errp: string, flags: number): LDAPNameForm;

declare function ldap_str2objectclass(s: string | any, code: number, errp: string, flags: number): LDAPObjectClass;

declare function ldap_str2structurerule(s: string | any, code: number, errp: string, flags: number): LDAPStructureRule;

declare function ldap_str2syntax(s: string | any, code: number, errp: string, flags: number): LDAPSyntax;

declare function ldap_structurerule2bv(sr: LDAPStructureRule, bv: BerValue): BerValue;

declare function ldap_structurerule2name(sr: LDAPStructureRule): string;

declare function ldap_structurerule2str(sr: LDAPStructureRule): string;

declare function ldap_structurerule_free(sr: LDAPStructureRule): void;

enum ldap_sync_refresh_t {

	LDAP_SYNC_CAPI_NONE = -1,

	LDAP_SYNC_CAPI_PHASE_FLAG = 16,

	LDAP_SYNC_CAPI_IDSET_FLAG = 32,

	LDAP_SYNC_CAPI_DONE_FLAG = 64,

	LDAP_SYNC_CAPI_PRESENT = 0,

	LDAP_SYNC_CAPI_ADD = 1,

	LDAP_SYNC_CAPI_MODIFY = 2,

	LDAP_SYNC_CAPI_DELETE = 3,

	LDAP_SYNC_CAPI_PRESENTS = 16,

	LDAP_SYNC_CAPI_DELETES = 19,

	LDAP_SYNC_CAPI_PRESENTS_IDSET = 48,

	LDAP_SYNC_CAPI_DELETES_IDSET = 51,

	LDAP_SYNC_CAPI_DONE = 80
}


interface ldap_sync_t {
	ls_base: string;
	ls_scope: number;
	ls_filter: string;
	ls_attrs: string;
	ls_timelimit: number;
	ls_sizelimit: number;
	ls_timeout: number;
	ls_search_entry: (p1: ldap_sync_t, p2: any, p3: BerValue, p4: ldap_sync_refresh_t) => number;
	ls_search_reference: (p1: ldap_sync_t, p2: any) => number;
	ls_intermediate: (p1: ldap_sync_t, p2: any, p3: BerValue, p4: ldap_sync_refresh_t) => number;
	ls_search_result: (p1: ldap_sync_t, p2: any, p3: number) => number;
	ls_private: any;
	ls_ld: any;
	ls_msgid: number;
	ls_reloadHint: number;
	ls_cookie: BerValue;
	ls_refreshPhase: ldap_sync_refresh_t;
}
declare var ldap_sync_t: ldap_sync_t;

declare function ldap_syntax2bv(syn: LDAPSyntax, bv: BerValue): BerValue;

declare function ldap_syntax2name(syn: LDAPSyntax): string;

declare function ldap_syntax2str(syn: LDAPSyntax): string;

declare function ldap_syntax_free(syn: LDAPSyntax): void;

declare function ldap_x_mb_to_utf8(utf8char: string | any, mbchar: string | any, mbsize: number, ldap_f_mbtowc: (p1: number, p2: string, p3: number) => number): number;

declare function ldap_x_mbs_to_utf8s(utf8str: string | any, mbstr: string | any, count: number, ldap_f_mbstowcs: (p1: number, p2: string, p3: number) => number): number;

declare function ldap_x_ucs4_to_utf8(c: number, buf: string | any): number;

declare function ldap_x_utf8_to_mb(mbchar: string | any, utf8char: string | any, ldap_f_wctomb: (p1: string, p2: number) => number): number;

declare function ldap_x_utf8_to_ucs4(p: string | any): number;

declare function ldap_x_utf8_to_wc(wchar: number, utf8char: string | any): number;

declare function ldap_x_utf8s_to_mbs(mbstr: string | any, utf8str: string | any, count: number, ldap_f_wcstombs: (p1: string, p2: number, p3: number) => number): number;

declare function ldap_x_utf8s_to_wcs(wcstr: number, utf8str: string | any, count: number): number;

declare function ldap_x_wc_to_utf8(utf8char: string | any, wchar: number, count: number): number;

declare function ldap_x_wcs_to_utf8s(utf8str: string | any, wcstr: number, count: number): number;

interface sockbuf_io {
	sbi_setup: (p1: Sockbuf_IO_Desc, p2: any) => number;
	sbi_remove: (p1: Sockbuf_IO_Desc) => number;
	sbi_ctrl: (p1: Sockbuf_IO_Desc, p2: number, p3: any) => number;
	sbi_read: (p1: Sockbuf_IO_Desc, p2: any, p3: number) => number;
	sbi_write: (p1: Sockbuf_IO_Desc, p2: any, p3: number) => number;
	sbi_close: (p1: Sockbuf_IO_Desc) => number;
}
declare var sockbuf_io: sockbuf_io;
