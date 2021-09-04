
declare const CC_API_VER_2: number;

declare const CC_BADNAME: number;

declare const CC_BAD_API_VERSION: number;

declare const CC_BAD_PARM: number;

declare const CC_CRED_MAX: number;

declare const CC_CRED_UNKNOWN: number;

declare const CC_CRED_V4: number;

declare const CC_CRED_V5: number;

declare const CC_END: number;

declare const CC_ERR_CACHE_ATTACH: number;

declare const CC_ERR_CACHE_FULL: number;

declare const CC_ERR_CACHE_RELEASE: number;

declare const CC_ERR_CRED_VERSION: number;

declare const CC_FORMAT: number;

declare const CC_IO: number;

declare const CC_LOCKED: number;

declare const CC_LOCK_NOBLOCK: number;

declare const CC_LOCK_READER: number;

declare const CC_LOCK_UNLOCK: number;

declare const CC_LOCK_WRITER: number;

declare const CC_NOERROR: number;

declare const CC_NOMEM: number;

declare const CC_NOTFOUND: number;

declare const CC_NOT_SUPP: number;

declare const CC_NO_EXIST: number;

declare const CC_WRITE: number;

declare function KLAcquireInitialTickets(inPrincipal: any, inLoginOptions: any, outPrincipal: any, outCredCacheName: string): number;

declare function KLAcquireInitialTicketsWithPassword(inPrincipal: any, inLoginOptions: any, inPassword: string | any, outCredCacheName: string): number;

declare function KLAcquireNewInitialTicketCredentialsWithPassword(inPrincipal: any, inLoginOptions: any, inPassword: string | any, inV5Context: any, outGotV4Credentials: number, outGotV5Credentials: number, outV4Credentials: any, outV5Credentials: krb5_creds): number;

declare function KLAcquireNewInitialTickets(inPrincipal: any, inLoginOptions: any, outPrincipal: any, outCredCacheName: string): number;

declare function KLAcquireNewInitialTicketsWithKeytab(inPrincipal: any, inLoginOptions: any, inKeytabName: string | any, outCredCacheName: string): number;

declare function KLAcquireNewInitialTicketsWithPassword(inPrincipal: any, inLoginOptions: any, inPassword: string | any, outCredCacheName: string): number;

declare function KLAcquireNewTickets(inPrincipal: any, outPrincipal: any, outCredCacheName: string): number;

declare function KLAcquireNewTicketsWithPassword(inPrincipal: any, inLoginOptions: any, inPassword: string | any, outCredCacheName: string): number;

declare function KLAcquireTickets(inPrincipal: any, outPrincipal: any, outCredCacheName: string): number;

declare function KLAcquireTicketsWithPassword(inPrincipal: any, inLoginOptions: any, inPassword: string | any, outCredCacheName: string): number;

declare function KLCacheHasValidTickets(inPrincipal: any, inKerberosVersion: number, outFoundValidTickets: number, outPrincipal: any, outCredCacheName: string): number;

declare function KLCancelAllDialogs(): number;

declare function KLChangePassword(inPrincipal: any): number;

declare function KLChangePasswordWithPasswords(inPrincipal: any, inOldPassword: string | any, inNewPassword: string | any, outRejected: number, outRejectionError: string, outRejectionDescription: string): number;

declare function KLComparePrincipal(inFirstPrincipal: any, inSecondPrincipal: any, outAreEquivalent: number): number;

declare function KLCountKerberosRealms(): number;

declare function KLCreateLoginOptions(outOptions: any): number;

declare function KLCreatePrincipalFromKerberos5Principal(inKerberos5Principal: krb5_principal_data, outPrincipal: any): number;

declare function KLCreatePrincipalFromPrincipal(inPrincipal: any, outPrincipal: any): number;

declare function KLCreatePrincipalFromString(inFullPrincipal: string | any, inKerberosVersion: number, outPrincipal: any): number;

declare function KLCreatePrincipalFromTriplet(inName: string | any, inInstance: string | any, inRealm: string | any, outPrincipal: any): number;

declare function KLDestroyTickets(inPrincipal: any): number;

declare function KLDisposeLoginOptions(ioOptions: any): number;

declare function KLDisposePrincipal(inPrincipal: any): number;

declare function KLDisposeString(inStringToDispose: string | any): number;

declare function KLFindKerberosRealmByName(inRealmName: string | any, outIndex: number): number;

declare function KLGetApplicationOptions(outAppOptions: any): number;

declare function KLGetDefaultLoginOption(inOption: number, ioBuffer: any, ioBufferSize: number): number;

declare function KLGetDisplayStringFromPrincipal(inPrincipal: any, inKerberosVersion: number, outFullPrincipal: string): number;

declare function KLGetErrorString(inError: number, outErrorString: string): number;

declare function KLGetIdleCallback(inCallback: (p1: number) => void, inRefCon: number): number;

declare function KLGetKerberosDefaultRealm(outIndex: number): number;

declare function KLGetKerberosDefaultRealmByName(outRealmName: string): number;

declare function KLGetKerberosRealm(inIndex: number, outRealmName: string): number;

declare function KLGetStringFromPrincipal(inPrincipal: any, inKerberosVersion: number, outFullPrincipal: string): number;

declare function KLGetTripletFromPrincipal(inPrincipal: any, outName: string, outInstance: string, outRealm: string): number;

declare function KLHandleError(inError: number, inDialogIdentifier: number, inShowAlert: number): number;

declare function KLInsertKerberosRealm(inInsertBeforeIndex: number, inRealmName: string | any): number;

declare function KLLastChangedTime(outLastChangedTime: number): number;

declare function KLLoginOptionsSetAddressless(ioOptions: any, inAddressless: number): number;

declare function KLLoginOptionsSetForwardable(ioOptions: any, inForwardable: number): number;

declare function KLLoginOptionsSetProxiable(ioOptions: any, inProxiable: number): number;

declare function KLLoginOptionsSetRenewableLifetime(ioOptions: any, inRenewableLifetime: number): number;

declare function KLLoginOptionsSetServiceName(ioOptions: any, inServiceName: string | any): number;

declare function KLLoginOptionsSetTicketLifetime(ioOptions: any, inTicketLifetime: number): number;

declare function KLLoginOptionsSetTicketStartTime(ioOptions: any, inStartTime: number): number;

declare function KLRemoveAllKerberosRealms(): number;

declare function KLRemoveKerberosRealm(inIndex: number): number;

declare function KLRenewInitialTickets(inPrincipal: any, inLoginOptions: any, outPrincipal: any, outCredCacheName: string): number;

declare function KLSetApplicationOptions(inAppOptions: any): number;

declare function KLSetDefaultLoginOption(inOption: number, inBuffer: any, inBufferSize: number): number;

declare function KLSetIdleCallback(inCallback: (p1: number) => void, inRefCon: number): number;

declare function KLSetKerberosDefaultRealm(inIndex: number): number;

declare function KLSetKerberosDefaultRealmByName(inRealm: string | any): number;

declare function KLSetKerberosRealm(inIndex: number, inRealmName: string | any): number;

declare function KLSetSystemDefaultCache(inPrincipal: any): number;

declare function KLStoreNewInitialTicketCredentials(inPrincipal: any, inV5Context: any, inV4Credentials: any, inV5Credentials: krb5_creds, outCredCacheName: string): number;

declare function KLTicketExpirationTime(inPrincipal: any, inKerberosVersion: number, outExpirationTime: number): number;

declare function KLTicketStartTime(inPrincipal: any, inKerberosVersion: number, outStartTime: number): number;

declare function KLValidateInitialTickets(inPrincipal: any, inLoginOptions: any, outCredCacheName: string): number;

declare function KLVerifyInitialTicketCredentials(inV4Credentials: any, inV5Credentials: krb5_creds, inFailIfNoHostKey: number): number;

declare function KLVerifyInitialTickets(inPrincipal: any, inFailIfNoHostKey: number, outCredCacheName: string): number;

declare const KRB_INSTANCE_SZ: number;

declare const KRB_NAME_SZ: number;

declare const KRB_REALM_SZ: number;

declare const MAX_V4_CRED_LEN: number;

interface apple_gss_krb5_authdata_if_relevant {
	type: number;
	length: number;
	data: any;
}
declare var apple_gss_krb5_authdata_if_relevant: apple_gss_krb5_authdata_if_relevant;

declare const ccErrBadAPIVersion: number;

declare const ccErrBadCredentialsVersion: number;

declare const ccErrBadInternalMessage: number;

declare const ccErrBadLockType: number;

declare const ccErrBadName: number;

declare const ccErrBadParam: number;

declare const ccErrCCacheLocked: number;

declare const ccErrCCacheNotFound: number;

declare const ccErrCCacheUnlocked: number;

declare const ccErrClientNotFound: number;

declare const ccErrContextLocked: number;

declare const ccErrContextNotFound: number;

declare const ccErrContextUnlocked: number;

declare const ccErrCredentialsNotFound: number;

declare const ccErrInvalidCCache: number;

declare const ccErrInvalidCCacheIterator: number;

declare const ccErrInvalidContext: number;

declare const ccErrInvalidCredentials: number;

declare const ccErrInvalidCredentialsIterator: number;

declare const ccErrInvalidLock: number;

declare const ccErrInvalidString: number;

declare const ccErrNeverDefault: number;

declare const ccErrNoMem: number;

declare const ccErrNotImplemented: number;

declare const ccErrServerCantBecomeUID: number;

declare const ccErrServerInsecure: number;

declare const ccErrServerUnavailable: number;

declare const ccErrTimeOffsetNotSet: number;

declare const ccIteratorEnd: number;

declare const ccNoError: number;

enum cc_credential_versions {

	cc_credentials_v4 = 1,

	cc_credentials_v5 = 2,

	cc_credentials_v4_v5 = 3
}


interface cc_credentials_v4_compat {
	kversion: number;
	principal: number;
	principal_instance: number;
	service: number;
	service_instance: number;
	realm: number;
	session_key: number;
	kvno: number;
	str_to_key: number;
	issue_date: number;
	lifetime: number;
	address: number;
	ticket_sz: number;
	ticket: number;
	oops: number;
}
declare var cc_credentials_v4_compat: cc_credentials_v4_compat;

interface cc_credentials_v4_t {
	version: number;
	principal: number;
	principal_instance: number;
	service: number;
	service_instance: number;
	realm: number;
	session_key: number;
	kvno: number;
	string_to_key_type: number;
	issue_date: number;
	lifetime: number;
	address: number;
	ticket_size: number;
	ticket: number;
}
declare var cc_credentials_v4_t: cc_credentials_v4_t;

interface cc_credentials_v5_compat {
	client: string;
	server: string;
	keyblock: cc_data;
	authtime: number;
	starttime: number;
	endtime: number;
	renew_till: number;
	is_skey: number;
	ticket_flags: number;
	addresses: cc_data;
	ticket: cc_data;
	second_ticket: cc_data;
	authdata: cc_data;
}
declare var cc_credentials_v5_compat: cc_credentials_v5_compat;

interface cc_credentials_v5_t {
	client: string;
	server: string;
	keyblock: cc_data;
	authtime: number;
	starttime: number;
	endtime: number;
	renew_till: number;
	is_skey: number;
	ticket_flags: number;
	addresses: cc_data;
	ticket: cc_data;
	second_ticket: cc_data;
	authdata: cc_data;
}
declare var cc_credentials_v5_t: cc_credentials_v5_t;

interface cc_data {
	type: number;
	length: number;
	data: any;
}
declare var cc_data: cc_data;

enum cc_lock_modes {

	cc_lock_noblock = 0,

	cc_lock_block = 1
}


enum cc_lock_types {

	cc_lock_read = 0,

	cc_lock_write = 1,

	cc_lock_upgrade = 2,

	cc_lock_downgrade = 3
}


interface cc_string_d {
	data: string;
	functions: cc_string_f;
	vector_functions: cc_string_f;
}
declare var cc_string_d: cc_string_d;

interface cc_string_f {
	release: (p1: cc_string_d) => number;
}
declare var cc_string_f: cc_string_f;

enum cc_string_to_key_type {

	cc_v4_stk_afs = 0,

	cc_v4_stk_des = 1,

	cc_v4_stk_columbia_special = 2,

	cc_v4_stk_krb5 = 3,

	cc_v4_stk_unknown = 4
}


declare const cc_v4_instance_size: number;

declare const cc_v4_key_size: number;

declare const cc_v4_name_size: number;

declare const cc_v4_realm_size: number;

declare const cc_v4_ticket_size: number;

declare const ccapi_version_2: number;

declare const ccapi_version_3: number;

declare const ccapi_version_4: number;

declare const ccapi_version_5: number;

declare const ccapi_version_6: number;

declare const ccapi_version_7: number;

declare const ccapi_version_max: number;

declare function gss_accept_sec_context(p1: number, p2: any, p3: any, p4: gss_buffer_desc, p5: gss_channel_bindings_struct, p6: any, p7: gss_OID_desc, p8: gss_buffer_desc, p9: number, p10: number, p11: any): number;

declare function gss_acquire_cred(p1: number, p2: any, p3: number, p4: gss_OID_set_desc, p5: number, p6: any, p7: gss_OID_set_desc, p8: number): number;

declare function gss_add_cred(p1: number, p2: any, p3: any, p4: gss_OID_desc, p5: number, p6: number, p7: number, p8: any, p9: gss_OID_set_desc, p10: number, p11: number): number;

declare function gss_canonicalize_name(p1: number, p2: any, p3: gss_OID_desc, p4: any): number;

declare function gss_compare_name(p1: number, p2: any, p3: any, p4: number): number;

declare function gss_context_time(p1: number, p2: any, p3: number): number;

declare function gss_create_empty_oid_set(p1: number, p2: gss_OID_set_desc): number;

declare function gss_delete_sec_context(p1: number, p2: any, p3: gss_buffer_desc): number;

declare function gss_display_name(p1: number, p2: any, p3: gss_buffer_desc, p4: gss_OID_desc): number;

declare function gss_display_status(p1: number, p2: number, p3: number, p4: gss_OID_desc, p5: number, p6: gss_buffer_desc): number;

declare function gss_duplicate_name(p1: number, p2: any, p3: any): number;

declare function gss_export_name(p1: number, p2: any, p3: gss_buffer_desc): number;

declare function gss_export_sec_context(p1: number, p2: any, p3: gss_buffer_desc): number;

declare function gss_get_mic(p1: number, p2: any, p3: number, p4: gss_buffer_desc, p5: gss_buffer_desc): number;

declare function gss_import_sec_context(p1: number, p2: gss_buffer_desc, p3: any): number;

declare function gss_indicate_mechs(p1: number, p2: gss_OID_set_desc): number;

declare function gss_init_sec_context(p1: number, p2: any, p3: any, p4: any, p5: gss_OID_desc, p6: number, p7: number, p8: gss_channel_bindings_struct, p9: gss_buffer_desc, p10: gss_OID_desc, p11: gss_buffer_desc, p12: number, p13: number): number;

declare function gss_inquire_context(p1: number, p2: any, p3: any, p4: any, p5: number, p6: gss_OID_desc, p7: number, p8: number, p9: number): number;

declare function gss_inquire_cred(p1: number, p2: any, p3: any, p4: number, p5: number, p6: gss_OID_set_desc): number;

declare function gss_inquire_cred_by_mech(p1: number, p2: any, p3: gss_OID_desc, p4: any, p5: number, p6: number, p7: number): number;

declare function gss_inquire_mechs_for_name(p1: number, p2: any, p3: gss_OID_set_desc): number;

declare function gss_krb5_ccache_name(minor_status: number, name: string | any, out_name: string): number;

declare function gss_krb5_export_lucid_sec_context(minor_status: number, context_handle: any, version: number, kctx: any): number;

declare function gss_krb5_free_lucid_sec_context(minor_status: number, kctx: any): number;

declare function gss_krb5_set_allowable_enctypes(minor_status: number, cred: any, num_ktypes: number, ktypes: number): number;

declare var gss_mech_krb5_old: gss_OID_desc;

declare var gss_mech_set_krb5: gss_OID_set_desc;

declare var gss_mech_set_krb5_both: gss_OID_set_desc;

declare var gss_mech_set_krb5_old: gss_OID_set_desc;

declare var gss_nt_exported_name: gss_OID_desc;

declare var gss_nt_krb5_name: gss_OID_desc;

declare var gss_nt_krb5_principal: gss_OID_desc;

declare var gss_nt_machine_uid_name: gss_OID_desc;

declare var gss_nt_service_name: gss_OID_desc;

declare var gss_nt_service_name_v2: gss_OID_desc;

declare var gss_nt_string_uid_name: gss_OID_desc;

declare var gss_nt_user_name: gss_OID_desc;

declare function gss_oid_to_str(p1: number, p2: gss_OID_desc, p3: gss_buffer_desc): number;

declare function gss_process_context_token(p1: number, p2: any, p3: gss_buffer_desc): number;

declare function gss_release_buffer(p1: number, p2: gss_buffer_desc): number;

declare function gss_release_cred(p1: number, p2: any): number;

declare function gss_release_name(p1: number, p2: any): number;

declare function gss_release_oid(p1: number, p2: gss_OID_desc): number;

declare function gss_release_oid_set(p1: number, p2: gss_OID_set_desc): number;

declare function gss_seal(p1: number, p2: any, p3: number, p4: number, p5: gss_buffer_desc, p6: number, p7: gss_buffer_desc): number;

declare function gss_sign(p1: number, p2: any, p3: number, p4: gss_buffer_desc, p5: gss_buffer_desc): number;

declare function gss_unseal(p1: number, p2: any, p3: gss_buffer_desc, p4: gss_buffer_desc, p5: number, p6: number): number;

declare function gss_unwrap(p1: number, p2: any, p3: gss_buffer_desc, p4: gss_buffer_desc, p5: number, p6: number): number;

declare function gss_verify(p1: number, p2: any, p3: gss_buffer_desc, p4: gss_buffer_desc, p5: number): number;

declare function gss_verify_mic(p1: number, p2: any, p3: gss_buffer_desc, p4: gss_buffer_desc, p5: number): number;

declare function gss_wrap(p1: number, p2: any, p3: number, p4: number, p5: gss_buffer_desc, p6: number, p7: gss_buffer_desc): number;

declare function gss_wrap_size_limit(p1: number, p2: any, p3: number, p4: number, p5: number, p6: number): number;

interface infoNC {
	name: string;
	principal: string;
	vers: number;
}
declare var infoNC: infoNC;

declare const kerberosVersion_All: number;

declare const kerberosVersion_Any: number;

declare const kerberosVersion_V4: number;

declare const kerberosVersion_V5: number;

declare const klBadLoginOptionsErr: number;

declare const klBadOptionValueErr: number;

declare const klBadPasswordErr: number;

declare const klBadPrincipalErr: number;

declare const klBadV5ContextErr: number;

declare const klBufferTooLargeErr: number;

declare const klBufferTooSmallErr: number;

declare const klCacheDoesNotExistErr: number;

declare const klCantContactServerErr: number;

declare const klCantDisplayUIErr: number;

declare const klCapsLockErr: number;

declare const klCredentialsBadAddressErr: number;

declare const klCredentialsExpiredErr: number;

declare const klCredentialsNeedValidationErr: number;

declare const klInsecurePasswordErr: number;

declare const klInvalidOptionErr: number;

declare const klInvalidVersionErr: number;

declare const klMemFullErr: number;

declare const klNoCredentialsErr: number;

declare const klNoErr: number;

declare const klNoHostnameErr: number;

declare const klNoRealmsErr: number;

declare const klParameterErr: number;

declare const klPasswordChangeFailedErr: number;

declare const klPasswordMismatchErr: number;

declare const klPreferencesReadErr: number;

declare const klPreferencesWriteErr: number;

declare const klPrincipalDoesNotExistErr: number;

declare const klRealmDoesNotExistErr: number;

declare const klServerInsecureErr: number;

declare const klSystemDefaultDoesNotExistErr: number;

declare const klUserCanceledErr: number;

declare const klV5InitializationFailedErr: number;

declare var krb5_gss_oid_array: gss_OID_desc;

declare function krb5_gss_register_acceptor_identity(p1: string | any): number;

declare const loginLibrary_ChangePasswordDialog: number;

declare const loginLibrary_LoginDialog: number;

declare const loginLibrary_OptionsDialog: number;

declare const loginLibrary_ProgressDialog: number;

declare const loginLibrary_PrompterDialog: number;

declare const loginLibrary_UnknownDialog: number;

declare const loginOption_DefaultAddresslessTicket: number;

declare const loginOption_DefaultForwardableTicket: number;

declare const loginOption_DefaultProxiableTicket: number;

declare const loginOption_DefaultRenewableLifetime: number;

declare const loginOption_DefaultRenewableTicket: number;

declare const loginOption_DefaultTicketLifetime: number;

declare const loginOption_LoginInstance: number;

declare const loginOption_LoginName: number;

declare const loginOption_MaximalRenewableLifetime: number;

declare const loginOption_MaximalTicketLifetime: number;

declare const loginOption_MinimalRenewableLifetime: number;

declare const loginOption_MinimalTicketLifetime: number;

declare const loginOption_RememberExtras: number;

declare const loginOption_RememberPrincipal: number;

declare const realmList_End: number;

declare const realmList_Start: number;
