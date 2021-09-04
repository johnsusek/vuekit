
interface AuthorizationCallbacks {
	version: number;
	SetResult: (p1: any, p2: AuthorizationResult) => number;
	RequestInterrupt: (p1: any) => number;
	DidDeactivate: (p1: any) => number;
	GetContextValue: (p1: any, p2: string, p3: AuthorizationContextFlags, p4: AuthorizationValue) => number;
	SetContextValue: (p1: any, p2: string, p3: AuthorizationContextFlags, p4: AuthorizationValue) => number;
	GetHintValue: (p1: any, p2: string, p3: AuthorizationValue) => number;
	SetHintValue: (p1: any, p2: string, p3: AuthorizationValue) => number;
	GetArguments: (p1: any, p2: AuthorizationValueVector) => number;
	GetSessionId: (p1: any, p2: any) => number;
	GetImmutableHintValue: (p1: any, p2: string, p3: AuthorizationValue) => number;
	GetLAContext: (p1: any, p2: any) => number;
	GetTokenIdentities: (p1: any, p2: any, p3: NSArray<any>) => number;
	GetTKTokenWatcher: (p1: any, p2: any) => number;
	RemoveHintValue: (p1: any, p2: string) => number;
	RemoveContextValue: (p1: any, p2: string) => number;
}
declare var AuthorizationCallbacks: AuthorizationCallbacks;

enum AuthorizationContextFlags {

	kAuthorizationContextFlagExtractable = 1,

	kAuthorizationContextFlagVolatile = 2,

	kAuthorizationContextFlagSticky = 4
}


declare function AuthorizationCopyInfo(authorization: any, tag: string | any, info: AuthorizationItemSet): number;

declare function AuthorizationCopyRights(authorization: any, rights: AuthorizationItemSet, environment: AuthorizationItemSet, flags: AuthorizationFlags, authorizedRights: AuthorizationItemSet): number;

declare function AuthorizationCopyRightsAsync(authorization: any, rights: AuthorizationItemSet, environment: AuthorizationItemSet, flags: AuthorizationFlags, callbackBlock: (p1: number, p2: AuthorizationItemSet) => void): void;

declare function AuthorizationCreate(rights: AuthorizationItemSet, environment: AuthorizationItemSet, flags: AuthorizationFlags, authorization: any): number;

declare function AuthorizationCreateFromExternalForm(extForm: AuthorizationExternalForm, authorization: any): number;

interface AuthorizationExternalForm {
	bytes: number;
}
declare var AuthorizationExternalForm: AuthorizationExternalForm;

enum AuthorizationFlags {

	kAuthorizationFlagDefaults = 0,

	kAuthorizationFlagInteractionAllowed = 1,

	kAuthorizationFlagExtendRights = 2,

	kAuthorizationFlagPartialRights = 4,

	kAuthorizationFlagDestroyRights = 8,

	kAuthorizationFlagPreAuthorize = 16,

	kAuthorizationFlagNoData = 1048576
}


declare function AuthorizationFree(authorization: any, flags: AuthorizationFlags): number;

declare function AuthorizationFreeItemSet(set: AuthorizationItemSet): number;

interface AuthorizationItem {
	name: string;
	valueLength: number;
	value: any;
	flags: number;
}
declare var AuthorizationItem: AuthorizationItem;

interface AuthorizationItemSet {
	count: number;
	items: AuthorizationItem;
}
declare var AuthorizationItemSet: AuthorizationItemSet;

declare function AuthorizationMakeExternalForm(authorization: any, extForm: AuthorizationExternalForm): number;

declare function AuthorizationPluginCreate(callbacks: AuthorizationCallbacks, outPlugin: any, outPluginInterface: AuthorizationPluginInterface): number;

interface AuthorizationPluginInterface {
	version: number;
	PluginDestroy: (p1: any) => number;
	MechanismCreate: (p1: any, p2: any, p3: string, p4: any) => number;
	MechanismInvoke: (p1: any) => number;
	MechanismDeactivate: (p1: any) => number;
	MechanismDestroy: (p1: any) => number;
}
declare var AuthorizationPluginInterface: AuthorizationPluginInterface;

enum AuthorizationResult {

	kAuthorizationResultAllow = 0,

	kAuthorizationResultDeny = 1,

	kAuthorizationResultUndefined = 2,

	kAuthorizationResultUserCanceled = 3
}


declare function AuthorizationRightGet(rightName: string | any, rightDefinition: NSDictionary<any, any>): number;

declare function AuthorizationRightRemove(authRef: any, rightName: string | any): number;

declare function AuthorizationRightSet(authRef: any, rightName: string | any, rightDefinition: any, descriptionKey: string, bundle: any, localeTableName: string): number;

interface AuthorizationValue {
	length: number;
	data: any;
}
declare var AuthorizationValue: AuthorizationValue;

interface AuthorizationValueVector {
	count: number;
	values: AuthorizationValue;
}
declare var AuthorizationValueVector: AuthorizationValueVector;

interface CE_AccessDescription {
	accessMethod: SecAsn1Item;
	accessLocation: CE_GeneralName;
}
declare var CE_AccessDescription: CE_AccessDescription;

interface CE_AuthorityInfoAccess {
	numAccessDescriptions: number;
	accessDescriptions: CE_AccessDescription;
}
declare var CE_AuthorityInfoAccess: CE_AuthorityInfoAccess;

interface CE_AuthorityKeyID {
	keyIdentifierPresent: number;
	keyIdentifier: SecAsn1Item;
	generalNamesPresent: number;
	generalNames: CE_GeneralNames;
	serialNumberPresent: number;
	serialNumber: SecAsn1Item;
}
declare var CE_AuthorityKeyID: CE_AuthorityKeyID;

interface CE_BasicConstraints {
	cA: number;
	pathLenConstraintPresent: number;
	pathLenConstraint: number;
}
declare var CE_BasicConstraints: CE_BasicConstraints;

interface CE_CertPolicies {
	numPolicies: number;
	policies: CE_PolicyInformation;
}
declare var CE_CertPolicies: CE_CertPolicies;

enum CE_CrlDistributionPointNameType {

	DNT_FullName = 0,

	DNT_NameRelativeToCrlIssuer = 1
}


enum CE_DataType {

	DT_AuthorityKeyID = 0,

	DT_SubjectKeyID = 1,

	DT_KeyUsage = 2,

	DT_SubjectAltName = 3,

	DT_IssuerAltName = 4,

	DT_ExtendedKeyUsage = 5,

	DT_BasicConstraints = 6,

	DT_CertPolicies = 7,

	DT_NetscapeCertType = 8,

	DT_CrlNumber = 9,

	DT_DeltaCrl = 10,

	DT_CrlReason = 11,

	DT_CrlDistributionPoints = 12,

	DT_IssuingDistributionPoint = 13,

	DT_AuthorityInfoAccess = 14,

	DT_Other = 15,

	DT_QC_Statements = 16,

	DT_NameConstraints = 17,

	DT_PolicyMappings = 18,

	DT_PolicyConstraints = 19,

	DT_InhibitAnyPolicy = 20
}


interface CE_ExtendedKeyUsage {
	numPurposes: number;
	purposes: SecAsn1Item;
}
declare var CE_ExtendedKeyUsage: CE_ExtendedKeyUsage;

interface CE_GeneralName {
	nameType: CE_GeneralNameType;
	berEncoded: number;
	name: SecAsn1Item;
}
declare var CE_GeneralName: CE_GeneralName;

enum CE_GeneralNameType {

	GNT_OtherName = 0,

	GNT_RFC822Name = 1,

	GNT_DNSName = 2,

	GNT_X400Address = 3,

	GNT_DirectoryName = 4,

	GNT_EdiPartyName = 5,

	GNT_URI = 6,

	GNT_IPAddress = 7,

	GNT_RegisteredID = 8
}


interface CE_GeneralNames {
	numNames: number;
	generalName: CE_GeneralName;
}
declare var CE_GeneralNames: CE_GeneralNames;

interface CE_GeneralSubtree {
	base: CE_GeneralNames;
	minimum: number;
	maximumPresent: number;
	maximum: number;
}
declare var CE_GeneralSubtree: CE_GeneralSubtree;

interface CE_GeneralSubtrees {
	numSubtrees: number;
	subtrees: CE_GeneralSubtree;
}
declare var CE_GeneralSubtrees: CE_GeneralSubtrees;

interface CE_NameConstraints {
	permitted: CE_GeneralSubtrees;
	excluded: CE_GeneralSubtrees;
}
declare var CE_NameConstraints: CE_NameConstraints;

interface CE_OtherName {
	typeId: SecAsn1Item;
	value: SecAsn1Item;
}
declare var CE_OtherName: CE_OtherName;

interface CE_PolicyConstraints {
	requireExplicitPolicyPresent: number;
	requireExplicitPolicy: number;
	inhibitPolicyMappingPresent: number;
	inhibitPolicyMapping: number;
}
declare var CE_PolicyConstraints: CE_PolicyConstraints;

interface CE_PolicyInformation {
	certPolicyId: SecAsn1Item;
	numPolicyQualifiers: number;
	policyQualifiers: CE_PolicyQualifierInfo;
}
declare var CE_PolicyInformation: CE_PolicyInformation;

interface CE_PolicyMapping {
	issuerDomainPolicy: SecAsn1Item;
	subjectDomainPolicy: SecAsn1Item;
}
declare var CE_PolicyMapping: CE_PolicyMapping;

interface CE_PolicyMappings {
	numPolicyMappings: number;
	policyMappings: CE_PolicyMapping;
}
declare var CE_PolicyMappings: CE_PolicyMappings;

interface CE_PolicyQualifierInfo {
	policyQualifierId: SecAsn1Item;
	qualifier: SecAsn1Item;
}
declare var CE_PolicyQualifierInfo: CE_PolicyQualifierInfo;

interface CE_QC_Statement {
	statementId: SecAsn1Item;
	semanticsInfo: CE_SemanticsInformation;
	otherInfo: SecAsn1Item;
}
declare var CE_QC_Statement: CE_QC_Statement;

interface CE_QC_Statements {
	numQCStatements: number;
	qcStatements: CE_QC_Statement;
}
declare var CE_QC_Statements: CE_QC_Statements;

interface CE_SemanticsInformation {
	semanticsIdentifier: SecAsn1Item;
	nameRegistrationAuthorities: CE_GeneralNames;
}
declare var CE_SemanticsInformation: CE_SemanticsInformation;

enum CMSCertificateChainMode {

	kCMSCertificateNone = 0,

	kCMSCertificateSignerOnly = 1,

	kCMSCertificateChain = 2,

	kCMSCertificateChainWithRoot = 3,

	kCMSCertificateChainWithRootOrFail = 4
}


declare function CMSDecoderCopyAllCerts(cmsDecoder: any, certsOut: NSArray<any>): number;

declare function CMSDecoderCopyContent(cmsDecoder: any, contentOut: NSData): number;

declare function CMSDecoderCopyDetachedContent(cmsDecoder: any, detachedContentOut: NSData): number;

declare function CMSDecoderCopyEncapsulatedContentType(cmsDecoder: any, eContentTypeOut: NSData): number;

declare function CMSDecoderCopySignerCert(cmsDecoder: any, signerIndex: number, signerCertOut: any): number;

declare function CMSDecoderCopySignerEmailAddress(cmsDecoder: any, signerIndex: number, signerEmailAddressOut: string): number;

declare function CMSDecoderCopySignerSigningTime(cmsDecoder: any, signerIndex: number, signingTime: number): number;

declare function CMSDecoderCopySignerStatus(cmsDecoder: any, signerIndex: number, policyOrArray: any, evaluateSecTrust: boolean, signerStatusOut: CMSSignerStatus, secTrustOut: any, certVerifyResultCodeOut: number): number;

declare function CMSDecoderCopySignerTimestamp(cmsDecoder: any, signerIndex: number, timestamp: number): number;

declare function CMSDecoderCopySignerTimestampCertificates(cmsDecoder: any, signerIndex: number, certificateRefs: NSArray<any>): number;

declare function CMSDecoderCopySignerTimestampWithPolicy(cmsDecoder: any, timeStampPolicy: any, signerIndex: number, timestamp: number): number;

declare function CMSDecoderCreate(cmsDecoderOut: any): number;

declare function CMSDecoderFinalizeMessage(cmsDecoder: any): number;

declare function CMSDecoderGetNumSigners(cmsDecoder: any, numSignersOut: number): number;

declare function CMSDecoderGetTypeID(): number;

declare function CMSDecoderIsContentEncrypted(cmsDecoder: any, isEncryptedOut: string | any): number;

declare function CMSDecoderSetDetachedContent(cmsDecoder: any, detachedContent: NSData): number;

declare function CMSDecoderUpdateMessage(cmsDecoder: any, msgBytes: any, msgBytesLen: number): number;

declare function CMSEncodeContent(signers: any, recipients: any, eContentTypeOID: any, detachedContent: boolean, signedAttributes: CMSSignedAttributes, content: any, contentLen: number, encodedContentOut: NSData): number;

declare function CMSEncoderAddRecipients(cmsEncoder: any, recipientOrArray: any): number;

declare function CMSEncoderAddSignedAttributes(cmsEncoder: any, signedAttributes: CMSSignedAttributes): number;

declare function CMSEncoderAddSigners(cmsEncoder: any, signerOrArray: any): number;

declare function CMSEncoderAddSupportingCerts(cmsEncoder: any, certOrArray: any): number;

declare function CMSEncoderCopyEncapsulatedContentType(cmsEncoder: any, eContentTypeOut: NSData): number;

declare function CMSEncoderCopyEncodedContent(cmsEncoder: any, encodedContentOut: NSData): number;

declare function CMSEncoderCopyRecipients(cmsEncoder: any, recipientsOut: NSArray<any>): number;

declare function CMSEncoderCopySignerTimestamp(cmsEncoder: any, signerIndex: number, timestamp: number): number;

declare function CMSEncoderCopySignerTimestampWithPolicy(cmsEncoder: any, timeStampPolicy: any, signerIndex: number, timestamp: number): number;

declare function CMSEncoderCopySigners(cmsEncoder: any, signersOut: NSArray<any>): number;

declare function CMSEncoderCopySupportingCerts(cmsEncoder: any, certsOut: NSArray<any>): number;

declare function CMSEncoderCreate(cmsEncoderOut: any): number;

declare function CMSEncoderGetCertificateChainMode(cmsEncoder: any, chainModeOut: CMSCertificateChainMode): number;

declare function CMSEncoderGetHasDetachedContent(cmsEncoder: any, detachedContentOut: string | any): number;

declare function CMSEncoderGetTypeID(): number;

declare function CMSEncoderSetCertificateChainMode(cmsEncoder: any, chainMode: CMSCertificateChainMode): number;

declare function CMSEncoderSetEncapsulatedContentTypeOID(cmsEncoder: any, eContentTypeOID: any): number;

declare function CMSEncoderSetHasDetachedContent(cmsEncoder: any, detachedContent: boolean): number;

declare function CMSEncoderSetSignerAlgorithm(cmsEncoder: any, digestAlgorithm: string): number;

declare function CMSEncoderUpdateContent(cmsEncoder: any, content: any, contentLen: number): number;

enum CMSSignedAttributes {

	kCMSAttrNone = 0,

	kCMSAttrSmimeCapabilities = 1,

	kCMSAttrSmimeEncryptionKeyPrefs = 2,

	kCMSAttrSmimeMSEncryptionKeyPrefs = 4,

	kCMSAttrSigningTime = 8,

	kCMSAttrAppleCodesigningHashAgility = 16,

	kCMSAttrAppleCodesigningHashAgilityV2 = 32,

	kCMSAttrAppleExpirationTime = 64
}


enum CMSSignerStatus {

	kCMSSignerUnsigned = 0,

	kCMSSignerValid = 1,

	kCMSSignerNeedsDetachedContent = 2,

	kCMSSignerInvalidSignature = 3,

	kCMSSignerInvalidCert = 4,

	kCMSSignerInvalidIndex = 5
}


declare const CSSMERR_AC_DEVICE_FAILED: number;

declare const CSSMERR_AC_DEVICE_RESET: number;

declare const CSSMERR_AC_FUNCTION_FAILED: number;

declare const CSSMERR_AC_FUNCTION_NOT_IMPLEMENTED: number;

declare const CSSMERR_AC_INSUFFICIENT_CLIENT_IDENTIFICATION: number;

declare const CSSMERR_AC_INTERNAL_ERROR: number;

declare const CSSMERR_AC_INVALID_BASE_ACLS: number;

declare const CSSMERR_AC_INVALID_CL_HANDLE: number;

declare const CSSMERR_AC_INVALID_CONTEXT_HANDLE: number;

declare const CSSMERR_AC_INVALID_DATA: number;

declare const CSSMERR_AC_INVALID_DB_HANDLE: number;

declare const CSSMERR_AC_INVALID_DB_LIST: number;

declare const CSSMERR_AC_INVALID_DB_LIST_POINTER: number;

declare const CSSMERR_AC_INVALID_DL_HANDLE: number;

declare const CSSMERR_AC_INVALID_ENCODING: number;

declare const CSSMERR_AC_INVALID_INPUT_POINTER: number;

declare const CSSMERR_AC_INVALID_OUTPUT_POINTER: number;

declare const CSSMERR_AC_INVALID_PASSTHROUGH_ID: number;

declare const CSSMERR_AC_INVALID_POINTER: number;

declare const CSSMERR_AC_INVALID_REQUESTOR: number;

declare const CSSMERR_AC_INVALID_REQUEST_DESCRIPTOR: number;

declare const CSSMERR_AC_INVALID_TP_HANDLE: number;

declare const CSSMERR_AC_INVALID_TUPLE_CREDENTIALS: number;

declare const CSSMERR_AC_INVALID_VALIDITY_PERIOD: number;

declare const CSSMERR_AC_IN_DARK_WAKE: number;

declare const CSSMERR_AC_MDS_ERROR: number;

declare const CSSMERR_AC_MEMORY_ERROR: number;

declare const CSSMERR_AC_NO_USER_INTERACTION: number;

declare const CSSMERR_AC_OS_ACCESS_DENIED: number;

declare const CSSMERR_AC_SELF_CHECK_FAILED: number;

declare const CSSMERR_AC_SERVICE_NOT_AVAILABLE: number;

declare const CSSMERR_AC_USER_CANCELED: number;

declare const CSSMERR_APPLEDL_DISK_FULL: number;

declare const CSSMERR_APPLEDL_FILE_TOO_BIG: number;

declare const CSSMERR_APPLEDL_INCOMPATIBLE_DATABASE_BLOB: number;

declare const CSSMERR_APPLEDL_INCOMPATIBLE_KEY_BLOB: number;

declare const CSSMERR_APPLEDL_INVALID_DATABASE_BLOB: number;

declare const CSSMERR_APPLEDL_INVALID_KEY_BLOB: number;

declare const CSSMERR_APPLEDL_INVALID_OPEN_PARAMETERS: number;

declare const CSSMERR_APPLEDL_QUOTA_EXCEEDED: number;

declare const CSSMERR_APPLETP_BAD_CERT_FROM_ISSUER: number;

declare const CSSMERR_APPLETP_CA_PIN_MISMATCH: number;

declare const CSSMERR_APPLETP_CERT_NOT_FOUND_FROM_ISSUER: number;

declare const CSSMERR_APPLETP_CODE_SIGN_DEVELOPMENT: number;

declare const CSSMERR_APPLETP_CRL_BAD_URI: number;

declare const CSSMERR_APPLETP_CRL_EXPIRED: number;

declare const CSSMERR_APPLETP_CRL_INVALID_ANCHOR_CERT: number;

declare const CSSMERR_APPLETP_CRL_NOT_FOUND: number;

declare const CSSMERR_APPLETP_CRL_NOT_TRUSTED: number;

declare const CSSMERR_APPLETP_CRL_NOT_VALID_YET: number;

declare const CSSMERR_APPLETP_CRL_POLICY_FAIL: number;

declare const CSSMERR_APPLETP_CRL_SERVER_DOWN: number;

declare const CSSMERR_APPLETP_CS_BAD_CERT_CHAIN_LENGTH: number;

declare const CSSMERR_APPLETP_CS_BAD_PATH_LENGTH: number;

declare const CSSMERR_APPLETP_CS_NO_BASIC_CONSTRAINTS: number;

declare const CSSMERR_APPLETP_CS_NO_EXTENDED_KEY_USAGE: number;

declare const CSSMERR_APPLETP_EXT_KEYUSAGE_NOT_CRITICAL: number;

declare const CSSMERR_APPLETP_HOSTNAME_MISMATCH: number;

declare const CSSMERR_APPLETP_IDENTIFIER_MISSING: number;

declare const CSSMERR_APPLETP_IDP_FAIL: number;

declare const CSSMERR_APPLETP_INCOMPLETE_REVOCATION_CHECK: number;

declare const CSSMERR_APPLETP_INVALID_AUTHORITY_ID: number;

declare const CSSMERR_APPLETP_INVALID_CA: number;

declare const CSSMERR_APPLETP_INVALID_EMPTY_SUBJECT: number;

declare const CSSMERR_APPLETP_INVALID_EXTENDED_KEY_USAGE: number;

declare const CSSMERR_APPLETP_INVALID_ID_LINKAGE: number;

declare const CSSMERR_APPLETP_INVALID_KEY_USAGE: number;

declare const CSSMERR_APPLETP_INVALID_ROOT: number;

declare const CSSMERR_APPLETP_INVALID_SUBJECT_ID: number;

declare const CSSMERR_APPLETP_MISSING_REQUIRED_EXTENSION: number;

declare const CSSMERR_APPLETP_NETWORK_FAILURE: number;

declare const CSSMERR_APPLETP_NO_BASIC_CONSTRAINTS: number;

declare const CSSMERR_APPLETP_OCSP_BAD_REQUEST: number;

declare const CSSMERR_APPLETP_OCSP_BAD_RESPONSE: number;

declare const CSSMERR_APPLETP_OCSP_INVALID_ANCHOR_CERT: number;

declare const CSSMERR_APPLETP_OCSP_NONCE_MISMATCH: number;

declare const CSSMERR_APPLETP_OCSP_NOT_TRUSTED: number;

declare const CSSMERR_APPLETP_OCSP_NO_SIGNER: number;

declare const CSSMERR_APPLETP_OCSP_RESP_INTERNAL_ERR: number;

declare const CSSMERR_APPLETP_OCSP_RESP_MALFORMED_REQ: number;

declare const CSSMERR_APPLETP_OCSP_RESP_SIG_REQUIRED: number;

declare const CSSMERR_APPLETP_OCSP_RESP_TRY_LATER: number;

declare const CSSMERR_APPLETP_OCSP_RESP_UNAUTHORIZED: number;

declare const CSSMERR_APPLETP_OCSP_SIG_ERROR: number;

declare const CSSMERR_APPLETP_OCSP_STATUS_UNRECOGNIZED: number;

declare const CSSMERR_APPLETP_OCSP_UNAVAILABLE: number;

declare const CSSMERR_APPLETP_PATH_LEN_CONSTRAINT: number;

declare const CSSMERR_APPLETP_RS_BAD_CERT_CHAIN_LENGTH: number;

declare const CSSMERR_APPLETP_RS_BAD_EXTENDED_KEY_USAGE: number;

declare const CSSMERR_APPLETP_SMIME_BAD_EXT_KEY_USE: number;

declare const CSSMERR_APPLETP_SMIME_BAD_KEY_USE: number;

declare const CSSMERR_APPLETP_SMIME_EMAIL_ADDRS_NOT_FOUND: number;

declare const CSSMERR_APPLETP_SMIME_KEYUSAGE_NOT_CRITICAL: number;

declare const CSSMERR_APPLETP_SMIME_NO_EMAIL_ADDRS: number;

declare const CSSMERR_APPLETP_SMIME_SUBJ_ALT_NAME_NOT_CRIT: number;

declare const CSSMERR_APPLETP_SSL_BAD_EXT_KEY_USE: number;

declare const CSSMERR_APPLETP_TRUST_SETTING_DENY: number;

declare const CSSMERR_APPLETP_UNKNOWN_CERT_EXTEN: number;

declare const CSSMERR_APPLETP_UNKNOWN_CRITICAL_EXTEN: number;

declare const CSSMERR_APPLETP_UNKNOWN_CRL_EXTEN: number;

declare const CSSMERR_APPLETP_UNKNOWN_QUAL_CERT_STATEMENT: number;

declare const CSSMERR_APPLE_DOTMAC_CSR_VERIFY_FAIL: number;

declare const CSSMERR_APPLE_DOTMAC_FAILED_CONSISTENCY_CHECK: number;

declare const CSSMERR_APPLE_DOTMAC_NO_REQ_PENDING: number;

declare const CSSMERR_APPLE_DOTMAC_REQ_IS_PENDING: number;

declare const CSSMERR_APPLE_DOTMAC_REQ_QUEUED: number;

declare const CSSMERR_APPLE_DOTMAC_REQ_REDIRECT: number;

declare const CSSMERR_APPLE_DOTMAC_REQ_SERVER_ALREADY_EXIST: number;

declare const CSSMERR_APPLE_DOTMAC_REQ_SERVER_AUTH: number;

declare const CSSMERR_APPLE_DOTMAC_REQ_SERVER_ERR: number;

declare const CSSMERR_APPLE_DOTMAC_REQ_SERVER_NOT_AVAIL: number;

declare const CSSMERR_APPLE_DOTMAC_REQ_SERVER_PARAM: number;

declare const CSSMERR_APPLE_DOTMAC_REQ_SERVER_SERVICE_ERROR: number;

declare const CSSMERR_APPLE_DOTMAC_REQ_SERVER_UNIMPL: number;

declare const CSSMERR_CL_CRL_ALREADY_SIGNED: number;

declare const CSSMERR_CL_DEVICE_FAILED: number;

declare const CSSMERR_CL_DEVICE_RESET: number;

declare const CSSMERR_CL_FUNCTION_FAILED: number;

declare const CSSMERR_CL_FUNCTION_NOT_IMPLEMENTED: number;

declare const CSSMERR_CL_INSUFFICIENT_CLIENT_IDENTIFICATION: number;

declare const CSSMERR_CL_INTERNAL_ERROR: number;

declare const CSSMERR_CL_INVALID_BUNDLE_INFO: number;

declare const CSSMERR_CL_INVALID_BUNDLE_POINTER: number;

declare const CSSMERR_CL_INVALID_CACHE_HANDLE: number;

declare const CSSMERR_CL_INVALID_CERTGROUP_POINTER: number;

declare const CSSMERR_CL_INVALID_CERT_POINTER: number;

declare const CSSMERR_CL_INVALID_CONTEXT_HANDLE: number;

declare const CSSMERR_CL_INVALID_CRL_INDEX: number;

declare const CSSMERR_CL_INVALID_CRL_POINTER: number;

declare const CSSMERR_CL_INVALID_DATA: number;

declare const CSSMERR_CL_INVALID_FIELD_POINTER: number;

declare const CSSMERR_CL_INVALID_INPUT_POINTER: number;

declare const CSSMERR_CL_INVALID_NUMBER_OF_FIELDS: number;

declare const CSSMERR_CL_INVALID_OUTPUT_POINTER: number;

declare const CSSMERR_CL_INVALID_PASSTHROUGH_ID: number;

declare const CSSMERR_CL_INVALID_POINTER: number;

declare const CSSMERR_CL_INVALID_RESULTS_HANDLE: number;

declare const CSSMERR_CL_INVALID_SCOPE: number;

declare const CSSMERR_CL_IN_DARK_WAKE: number;

declare const CSSMERR_CL_MDS_ERROR: number;

declare const CSSMERR_CL_MEMORY_ERROR: number;

declare const CSSMERR_CL_NO_FIELD_VALUES: number;

declare const CSSMERR_CL_NO_USER_INTERACTION: number;

declare const CSSMERR_CL_OS_ACCESS_DENIED: number;

declare const CSSMERR_CL_SCOPE_NOT_SUPPORTED: number;

declare const CSSMERR_CL_SELF_CHECK_FAILED: number;

declare const CSSMERR_CL_SERVICE_NOT_AVAILABLE: number;

declare const CSSMERR_CL_UNKNOWN_FORMAT: number;

declare const CSSMERR_CL_UNKNOWN_TAG: number;

declare const CSSMERR_CL_USER_CANCELED: number;

declare const CSSMERR_CL_VERIFICATION_FAILURE: number;

declare const CSSMERR_CSPDL_APPLE_DL_CONVERSION_ERROR: number;

declare const CSSMERR_CSP_ACL_ADD_FAILED: number;

declare const CSSMERR_CSP_ACL_BASE_CERTS_NOT_SUPPORTED: number;

declare const CSSMERR_CSP_ACL_CHALLENGE_CALLBACK_FAILED: number;

declare const CSSMERR_CSP_ACL_CHANGE_FAILED: number;

declare const CSSMERR_CSP_ACL_DELETE_FAILED: number;

declare const CSSMERR_CSP_ACL_ENTRY_TAG_NOT_FOUND: number;

declare const CSSMERR_CSP_ACL_REPLACE_FAILED: number;

declare const CSSMERR_CSP_ACL_SUBJECT_TYPE_NOT_SUPPORTED: number;

declare const CSSMERR_CSP_ALGID_MISMATCH: number;

declare const CSSMERR_CSP_ALREADY_LOGGED_IN: number;

declare const CSSMERR_CSP_APPLE_ADD_APPLICATION_ACL_SUBJECT: number;

declare const CSSMERR_CSP_APPLE_INVALID_KEY_END_DATE: number;

declare const CSSMERR_CSP_APPLE_INVALID_KEY_START_DATE: number;

declare const CSSMERR_CSP_APPLE_PUBLIC_KEY_INCOMPLETE: number;

declare const CSSMERR_CSP_APPLE_SIGNATURE_MISMATCH: number;

declare const CSSMERR_CSP_APPLE_SSLv2_ROLLBACK: number;

declare const CSSMERR_CSP_ATTACH_HANDLE_BUSY: number;

declare const CSSMERR_CSP_BLOCK_SIZE_MISMATCH: number;

declare const CSSMERR_CSP_CRYPTO_DATA_CALLBACK_FAILED: number;

declare const CSSMERR_CSP_DEVICE_ERROR: number;

declare const CSSMERR_CSP_DEVICE_FAILED: number;

declare const CSSMERR_CSP_DEVICE_MEMORY_ERROR: number;

declare const CSSMERR_CSP_DEVICE_RESET: number;

declare const CSSMERR_CSP_DEVICE_VERIFY_FAILED: number;

declare const CSSMERR_CSP_FUNCTION_FAILED: number;

declare const CSSMERR_CSP_FUNCTION_NOT_IMPLEMENTED: number;

declare const CSSMERR_CSP_INPUT_LENGTH_ERROR: number;

declare const CSSMERR_CSP_INSUFFICIENT_CLIENT_IDENTIFICATION: number;

declare const CSSMERR_CSP_INTERNAL_ERROR: number;

declare const CSSMERR_CSP_INVALID_ACCESS_CREDENTIALS: number;

declare const CSSMERR_CSP_INVALID_ACL_BASE_CERTS: number;

declare const CSSMERR_CSP_INVALID_ACL_CHALLENGE_CALLBACK: number;

declare const CSSMERR_CSP_INVALID_ACL_EDIT_MODE: number;

declare const CSSMERR_CSP_INVALID_ACL_ENTRY_TAG: number;

declare const CSSMERR_CSP_INVALID_ACL_SUBJECT_VALUE: number;

declare const CSSMERR_CSP_INVALID_ALGORITHM: number;

declare const CSSMERR_CSP_INVALID_ATTR_ACCESS_CREDENTIALS: number;

declare const CSSMERR_CSP_INVALID_ATTR_ALG_PARAMS: number;

declare const CSSMERR_CSP_INVALID_ATTR_BASE: number;

declare const CSSMERR_CSP_INVALID_ATTR_BLOCK_SIZE: number;

declare const CSSMERR_CSP_INVALID_ATTR_DL_DB_HANDLE: number;

declare const CSSMERR_CSP_INVALID_ATTR_EFFECTIVE_BITS: number;

declare const CSSMERR_CSP_INVALID_ATTR_END_DATE: number;

declare const CSSMERR_CSP_INVALID_ATTR_INIT_VECTOR: number;

declare const CSSMERR_CSP_INVALID_ATTR_ITERATION_COUNT: number;

declare const CSSMERR_CSP_INVALID_ATTR_KEY: number;

declare const CSSMERR_CSP_INVALID_ATTR_KEY_LENGTH: number;

declare const CSSMERR_CSP_INVALID_ATTR_KEY_TYPE: number;

declare const CSSMERR_CSP_INVALID_ATTR_LABEL: number;

declare const CSSMERR_CSP_INVALID_ATTR_MODE: number;

declare const CSSMERR_CSP_INVALID_ATTR_OUTPUT_SIZE: number;

declare const CSSMERR_CSP_INVALID_ATTR_PADDING: number;

declare const CSSMERR_CSP_INVALID_ATTR_PASSPHRASE: number;

declare const CSSMERR_CSP_INVALID_ATTR_PRIME: number;

declare const CSSMERR_CSP_INVALID_ATTR_PRIVATE_KEY_FORMAT: number;

declare const CSSMERR_CSP_INVALID_ATTR_PUBLIC_KEY_FORMAT: number;

declare const CSSMERR_CSP_INVALID_ATTR_RANDOM: number;

declare const CSSMERR_CSP_INVALID_ATTR_ROUNDS: number;

declare const CSSMERR_CSP_INVALID_ATTR_SALT: number;

declare const CSSMERR_CSP_INVALID_ATTR_SEED: number;

declare const CSSMERR_CSP_INVALID_ATTR_START_DATE: number;

declare const CSSMERR_CSP_INVALID_ATTR_SUBPRIME: number;

declare const CSSMERR_CSP_INVALID_ATTR_SYMMETRIC_KEY_FORMAT: number;

declare const CSSMERR_CSP_INVALID_ATTR_VERSION: number;

declare const CSSMERR_CSP_INVALID_ATTR_WRAPPED_KEY_FORMAT: number;

declare const CSSMERR_CSP_INVALID_CONTEXT: number;

declare const CSSMERR_CSP_INVALID_CONTEXT_HANDLE: number;

declare const CSSMERR_CSP_INVALID_CRYPTO_DATA: number;

declare const CSSMERR_CSP_INVALID_DATA: number;

declare const CSSMERR_CSP_INVALID_DATA_COUNT: number;

declare const CSSMERR_CSP_INVALID_DIGEST_ALGORITHM: number;

declare const CSSMERR_CSP_INVALID_INPUT_POINTER: number;

declare const CSSMERR_CSP_INVALID_INPUT_VECTOR: number;

declare const CSSMERR_CSP_INVALID_KEY: number;

declare const CSSMERR_CSP_INVALID_KEYATTR_MASK: number;

declare const CSSMERR_CSP_INVALID_KEYUSAGE_MASK: number;

declare const CSSMERR_CSP_INVALID_KEY_CLASS: number;

declare const CSSMERR_CSP_INVALID_KEY_FORMAT: number;

declare const CSSMERR_CSP_INVALID_KEY_LABEL: number;

declare const CSSMERR_CSP_INVALID_KEY_POINTER: number;

declare const CSSMERR_CSP_INVALID_KEY_REFERENCE: number;

declare const CSSMERR_CSP_INVALID_LOGIN_NAME: number;

declare const CSSMERR_CSP_INVALID_NEW_ACL_ENTRY: number;

declare const CSSMERR_CSP_INVALID_NEW_ACL_OWNER: number;

declare const CSSMERR_CSP_INVALID_OUTPUT_POINTER: number;

declare const CSSMERR_CSP_INVALID_OUTPUT_VECTOR: number;

declare const CSSMERR_CSP_INVALID_PASSTHROUGH_ID: number;

declare const CSSMERR_CSP_INVALID_POINTER: number;

declare const CSSMERR_CSP_INVALID_SAMPLE_VALUE: number;

declare const CSSMERR_CSP_INVALID_SIGNATURE: number;

declare const CSSMERR_CSP_IN_DARK_WAKE: number;

declare const CSSMERR_CSP_KEY_BLOB_TYPE_INCORRECT: number;

declare const CSSMERR_CSP_KEY_HEADER_INCONSISTENT: number;

declare const CSSMERR_CSP_KEY_LABEL_ALREADY_EXISTS: number;

declare const CSSMERR_CSP_KEY_USAGE_INCORRECT: number;

declare const CSSMERR_CSP_MDS_ERROR: number;

declare const CSSMERR_CSP_MEMORY_ERROR: number;

declare const CSSMERR_CSP_MISSING_ATTR_ACCESS_CREDENTIALS: number;

declare const CSSMERR_CSP_MISSING_ATTR_ALG_PARAMS: number;

declare const CSSMERR_CSP_MISSING_ATTR_BASE: number;

declare const CSSMERR_CSP_MISSING_ATTR_BLOCK_SIZE: number;

declare const CSSMERR_CSP_MISSING_ATTR_DL_DB_HANDLE: number;

declare const CSSMERR_CSP_MISSING_ATTR_EFFECTIVE_BITS: number;

declare const CSSMERR_CSP_MISSING_ATTR_END_DATE: number;

declare const CSSMERR_CSP_MISSING_ATTR_INIT_VECTOR: number;

declare const CSSMERR_CSP_MISSING_ATTR_ITERATION_COUNT: number;

declare const CSSMERR_CSP_MISSING_ATTR_KEY: number;

declare const CSSMERR_CSP_MISSING_ATTR_KEY_LENGTH: number;

declare const CSSMERR_CSP_MISSING_ATTR_KEY_TYPE: number;

declare const CSSMERR_CSP_MISSING_ATTR_LABEL: number;

declare const CSSMERR_CSP_MISSING_ATTR_MODE: number;

declare const CSSMERR_CSP_MISSING_ATTR_OUTPUT_SIZE: number;

declare const CSSMERR_CSP_MISSING_ATTR_PADDING: number;

declare const CSSMERR_CSP_MISSING_ATTR_PASSPHRASE: number;

declare const CSSMERR_CSP_MISSING_ATTR_PRIME: number;

declare const CSSMERR_CSP_MISSING_ATTR_PRIVATE_KEY_FORMAT: number;

declare const CSSMERR_CSP_MISSING_ATTR_PUBLIC_KEY_FORMAT: number;

declare const CSSMERR_CSP_MISSING_ATTR_RANDOM: number;

declare const CSSMERR_CSP_MISSING_ATTR_ROUNDS: number;

declare const CSSMERR_CSP_MISSING_ATTR_SALT: number;

declare const CSSMERR_CSP_MISSING_ATTR_SEED: number;

declare const CSSMERR_CSP_MISSING_ATTR_START_DATE: number;

declare const CSSMERR_CSP_MISSING_ATTR_SUBPRIME: number;

declare const CSSMERR_CSP_MISSING_ATTR_SYMMETRIC_KEY_FORMAT: number;

declare const CSSMERR_CSP_MISSING_ATTR_VERSION: number;

declare const CSSMERR_CSP_MISSING_ATTR_WRAPPED_KEY_FORMAT: number;

declare const CSSMERR_CSP_NOT_LOGGED_IN: number;

declare const CSSMERR_CSP_NO_USER_INTERACTION: number;

declare const CSSMERR_CSP_OBJECT_ACL_NOT_SUPPORTED: number;

declare const CSSMERR_CSP_OBJECT_ACL_REQUIRED: number;

declare const CSSMERR_CSP_OBJECT_MANIP_AUTH_DENIED: number;

declare const CSSMERR_CSP_OBJECT_USE_AUTH_DENIED: number;

declare const CSSMERR_CSP_OPERATION_AUTH_DENIED: number;

declare const CSSMERR_CSP_OS_ACCESS_DENIED: number;

declare const CSSMERR_CSP_OUTPUT_LENGTH_ERROR: number;

declare const CSSMERR_CSP_PRIVATE_KEY_ALREADY_EXISTS: number;

declare const CSSMERR_CSP_PRIVATE_KEY_NOT_FOUND: number;

declare const CSSMERR_CSP_PRIVILEGE_NOT_GRANTED: number;

declare const CSSMERR_CSP_PRIVILEGE_NOT_SUPPORTED: number;

declare const CSSMERR_CSP_PUBLIC_KEY_INCONSISTENT: number;

declare const CSSMERR_CSP_QUERY_SIZE_UNKNOWN: number;

declare const CSSMERR_CSP_SAMPLE_VALUE_NOT_SUPPORTED: number;

declare const CSSMERR_CSP_SELF_CHECK_FAILED: number;

declare const CSSMERR_CSP_SERVICE_NOT_AVAILABLE: number;

declare const CSSMERR_CSP_STAGED_OPERATION_IN_PROGRESS: number;

declare const CSSMERR_CSP_STAGED_OPERATION_NOT_STARTED: number;

declare const CSSMERR_CSP_UNSUPPORTED_KEYATTR_MASK: number;

declare const CSSMERR_CSP_UNSUPPORTED_KEYUSAGE_MASK: number;

declare const CSSMERR_CSP_UNSUPPORTED_KEY_FORMAT: number;

declare const CSSMERR_CSP_UNSUPPORTED_KEY_LABEL: number;

declare const CSSMERR_CSP_UNSUPPORTED_KEY_SIZE: number;

declare const CSSMERR_CSP_USER_CANCELED: number;

declare const CSSMERR_CSP_VECTOR_OF_BUFS_UNSUPPORTED: number;

declare const CSSMERR_CSP_VERIFY_FAILED: number;

declare const CSSMERR_CSSM_ADDIN_AUTHENTICATE_FAILED: number;

declare const CSSMERR_CSSM_ADDIN_LOAD_FAILED: number;

declare const CSSMERR_CSSM_ADDIN_UNLOAD_FAILED: number;

declare const CSSMERR_CSSM_ATTRIBUTE_NOT_IN_CONTEXT: number;

declare const CSSMERR_CSSM_BUFFER_TOO_SMALL: number;

declare const CSSMERR_CSSM_DEVICE_FAILED: number;

declare const CSSMERR_CSSM_DEVICE_RESET: number;

declare const CSSMERR_CSSM_EMM_AUTHENTICATE_FAILED: number;

declare const CSSMERR_CSSM_EMM_LOAD_FAILED: number;

declare const CSSMERR_CSSM_EMM_UNLOAD_FAILED: number;

declare const CSSMERR_CSSM_EVENT_NOTIFICATION_CALLBACK_NOT_FOUND: number;

declare const CSSMERR_CSSM_FUNCTION_FAILED: number;

declare const CSSMERR_CSSM_FUNCTION_INTEGRITY_FAIL: number;

declare const CSSMERR_CSSM_FUNCTION_NOT_IMPLEMENTED: number;

declare const CSSMERR_CSSM_INCOMPATIBLE_VERSION: number;

declare const CSSMERR_CSSM_INSUFFICIENT_CLIENT_IDENTIFICATION: number;

declare const CSSMERR_CSSM_INTERNAL_ERROR: number;

declare const CSSMERR_CSSM_INVALID_ADDIN_FUNCTION_TABLE: number;

declare const CSSMERR_CSSM_INVALID_ADDIN_HANDLE: number;

declare const CSSMERR_CSSM_INVALID_ATTRIBUTE: number;

declare const CSSMERR_CSSM_INVALID_CONTEXT_HANDLE: number;

declare const CSSMERR_CSSM_INVALID_GUID: number;

declare const CSSMERR_CSSM_INVALID_HANDLE_USAGE: number;

declare const CSSMERR_CSSM_INVALID_INPUT_POINTER: number;

declare const CSSMERR_CSSM_INVALID_KEY_HIERARCHY: number;

declare const CSSMERR_CSSM_INVALID_OUTPUT_POINTER: number;

declare const CSSMERR_CSSM_INVALID_POINTER: number;

declare const CSSMERR_CSSM_INVALID_PVC: number;

declare const CSSMERR_CSSM_INVALID_SERVICE_MASK: number;

declare const CSSMERR_CSSM_INVALID_SUBSERVICEID: number;

declare const CSSMERR_CSSM_IN_DARK_WAKE: number;

declare const CSSMERR_CSSM_LIB_REF_NOT_FOUND: number;

declare const CSSMERR_CSSM_MDS_ERROR: number;

declare const CSSMERR_CSSM_MEMORY_ERROR: number;

declare const CSSMERR_CSSM_MODULE_MANAGER_INITIALIZE_FAIL: number;

declare const CSSMERR_CSSM_MODULE_MANAGER_NOT_FOUND: number;

declare const CSSMERR_CSSM_MODULE_MANIFEST_VERIFY_FAILED: number;

declare const CSSMERR_CSSM_MODULE_NOT_LOADED: number;

declare const CSSMERR_CSSM_NOT_INITIALIZED: number;

declare const CSSMERR_CSSM_NO_USER_INTERACTION: number;

declare const CSSMERR_CSSM_OS_ACCESS_DENIED: number;

declare const CSSMERR_CSSM_PRIVILEGE_NOT_GRANTED: number;

declare const CSSMERR_CSSM_PVC_ALREADY_CONFIGURED: number;

declare const CSSMERR_CSSM_PVC_REFERENT_NOT_FOUND: number;

declare const CSSMERR_CSSM_SCOPE_NOT_SUPPORTED: number;

declare const CSSMERR_CSSM_SELF_CHECK_FAILED: number;

declare const CSSMERR_CSSM_SERVICE_NOT_AVAILABLE: number;

declare const CSSMERR_CSSM_USER_CANCELED: number;

declare const CSSMERR_DL_ACL_ADD_FAILED: number;

declare const CSSMERR_DL_ACL_BASE_CERTS_NOT_SUPPORTED: number;

declare const CSSMERR_DL_ACL_CHALLENGE_CALLBACK_FAILED: number;

declare const CSSMERR_DL_ACL_CHANGE_FAILED: number;

declare const CSSMERR_DL_ACL_DELETE_FAILED: number;

declare const CSSMERR_DL_ACL_ENTRY_TAG_NOT_FOUND: number;

declare const CSSMERR_DL_ACL_REPLACE_FAILED: number;

declare const CSSMERR_DL_ACL_SUBJECT_TYPE_NOT_SUPPORTED: number;

declare const CSSMERR_DL_DATABASE_CORRUPT: number;

declare const CSSMERR_DL_DATASTORE_ALREADY_EXISTS: number;

declare const CSSMERR_DL_DATASTORE_DOESNOT_EXIST: number;

declare const CSSMERR_DL_DATASTORE_IS_OPEN: number;

declare const CSSMERR_DL_DB_LOCKED: number;

declare const CSSMERR_DL_DEVICE_FAILED: number;

declare const CSSMERR_DL_DEVICE_RESET: number;

declare const CSSMERR_DL_ENDOFDATA: number;

declare const CSSMERR_DL_FIELD_SPECIFIED_MULTIPLE: number;

declare const CSSMERR_DL_FUNCTION_FAILED: number;

declare const CSSMERR_DL_FUNCTION_NOT_IMPLEMENTED: number;

declare const CSSMERR_DL_INCOMPATIBLE_FIELD_FORMAT: number;

declare const CSSMERR_DL_INSUFFICIENT_CLIENT_IDENTIFICATION: number;

declare const CSSMERR_DL_INTERNAL_ERROR: number;

declare const CSSMERR_DL_INVALID_ACCESS_CREDENTIALS: number;

declare const CSSMERR_DL_INVALID_ACCESS_REQUEST: number;

declare const CSSMERR_DL_INVALID_ACL_BASE_CERTS: number;

declare const CSSMERR_DL_INVALID_ACL_CHALLENGE_CALLBACK: number;

declare const CSSMERR_DL_INVALID_ACL_EDIT_MODE: number;

declare const CSSMERR_DL_INVALID_ACL_ENTRY_TAG: number;

declare const CSSMERR_DL_INVALID_ACL_SUBJECT_VALUE: number;

declare const CSSMERR_DL_INVALID_CL_HANDLE: number;

declare const CSSMERR_DL_INVALID_CSP_HANDLE: number;

declare const CSSMERR_DL_INVALID_DB_HANDLE: number;

declare const CSSMERR_DL_INVALID_DB_LIST_POINTER: number;

declare const CSSMERR_DL_INVALID_DB_LOCATION: number;

declare const CSSMERR_DL_INVALID_DB_NAME: number;

declare const CSSMERR_DL_INVALID_DL_HANDLE: number;

declare const CSSMERR_DL_INVALID_FIELD_NAME: number;

declare const CSSMERR_DL_INVALID_INDEX_INFO: number;

declare const CSSMERR_DL_INVALID_INPUT_POINTER: number;

declare const CSSMERR_DL_INVALID_MODIFY_MODE: number;

declare const CSSMERR_DL_INVALID_NETWORK_ADDR: number;

declare const CSSMERR_DL_INVALID_NEW_ACL_ENTRY: number;

declare const CSSMERR_DL_INVALID_NEW_ACL_OWNER: number;

declare const CSSMERR_DL_INVALID_NEW_OWNER: number;

declare const CSSMERR_DL_INVALID_OPEN_PARAMETERS: number;

declare const CSSMERR_DL_INVALID_OUTPUT_POINTER: number;

declare const CSSMERR_DL_INVALID_PARSING_MODULE: number;

declare const CSSMERR_DL_INVALID_PASSTHROUGH_ID: number;

declare const CSSMERR_DL_INVALID_POINTER: number;

declare const CSSMERR_DL_INVALID_QUERY: number;

declare const CSSMERR_DL_INVALID_RECORDTYPE: number;

declare const CSSMERR_DL_INVALID_RECORD_INDEX: number;

declare const CSSMERR_DL_INVALID_RECORD_UID: number;

declare const CSSMERR_DL_INVALID_RESULTS_HANDLE: number;

declare const CSSMERR_DL_INVALID_SAMPLE_VALUE: number;

declare const CSSMERR_DL_INVALID_SELECTION_TAG: number;

declare const CSSMERR_DL_INVALID_UNIQUE_INDEX_DATA: number;

declare const CSSMERR_DL_INVALID_VALUE: number;

declare const CSSMERR_DL_IN_DARK_WAKE: number;

declare const CSSMERR_DL_MDS_ERROR: number;

declare const CSSMERR_DL_MEMORY_ERROR: number;

declare const CSSMERR_DL_MISSING_VALUE: number;

declare const CSSMERR_DL_MULTIPLE_VALUES_UNSUPPORTED: number;

declare const CSSMERR_DL_NO_USER_INTERACTION: number;

declare const CSSMERR_DL_OBJECT_ACL_NOT_SUPPORTED: number;

declare const CSSMERR_DL_OBJECT_ACL_REQUIRED: number;

declare const CSSMERR_DL_OBJECT_MANIP_AUTH_DENIED: number;

declare const CSSMERR_DL_OBJECT_USE_AUTH_DENIED: number;

declare const CSSMERR_DL_OPERATION_AUTH_DENIED: number;

declare const CSSMERR_DL_OS_ACCESS_DENIED: number;

declare const CSSMERR_DL_RECORD_MODIFIED: number;

declare const CSSMERR_DL_RECORD_NOT_FOUND: number;

declare const CSSMERR_DL_SAMPLE_VALUE_NOT_SUPPORTED: number;

declare const CSSMERR_DL_SELF_CHECK_FAILED: number;

declare const CSSMERR_DL_SERVICE_NOT_AVAILABLE: number;

declare const CSSMERR_DL_STALE_UNIQUE_RECORD: number;

declare const CSSMERR_DL_UNSUPPORTED_FIELD_FORMAT: number;

declare const CSSMERR_DL_UNSUPPORTED_INDEX_INFO: number;

declare const CSSMERR_DL_UNSUPPORTED_LOCALITY: number;

declare const CSSMERR_DL_UNSUPPORTED_NUM_ATTRIBUTES: number;

declare const CSSMERR_DL_UNSUPPORTED_NUM_INDEXES: number;

declare const CSSMERR_DL_UNSUPPORTED_NUM_RECORDTYPES: number;

declare const CSSMERR_DL_UNSUPPORTED_NUM_SELECTION_PREDS: number;

declare const CSSMERR_DL_UNSUPPORTED_OPERATOR: number;

declare const CSSMERR_DL_UNSUPPORTED_QUERY: number;

declare const CSSMERR_DL_UNSUPPORTED_QUERY_LIMITS: number;

declare const CSSMERR_DL_UNSUPPORTED_RECORDTYPE: number;

declare const CSSMERR_DL_USER_CANCELED: number;

declare const CSSMERR_TP_AUTHENTICATION_FAILED: number;

declare const CSSMERR_TP_CERTGROUP_INCOMPLETE: number;

declare const CSSMERR_TP_CERTIFICATE_CANT_OPERATE: number;

declare const CSSMERR_TP_CERT_EXPIRED: number;

declare const CSSMERR_TP_CERT_NOT_VALID_YET: number;

declare const CSSMERR_TP_CERT_REVOKED: number;

declare const CSSMERR_TP_CERT_SUSPENDED: number;

declare const CSSMERR_TP_CRL_ALREADY_SIGNED: number;

declare const CSSMERR_TP_DEVICE_FAILED: number;

declare const CSSMERR_TP_DEVICE_RESET: number;

declare const CSSMERR_TP_FUNCTION_FAILED: number;

declare const CSSMERR_TP_FUNCTION_NOT_IMPLEMENTED: number;

declare const CSSMERR_TP_INSUFFICIENT_CLIENT_IDENTIFICATION: number;

declare const CSSMERR_TP_INSUFFICIENT_CREDENTIALS: number;

declare const CSSMERR_TP_INTERNAL_ERROR: number;

declare const CSSMERR_TP_INVALID_ACTION: number;

declare const CSSMERR_TP_INVALID_ACTION_DATA: number;

declare const CSSMERR_TP_INVALID_ANCHOR_CERT: number;

declare const CSSMERR_TP_INVALID_AUTHORITY: number;

declare const CSSMERR_TP_INVALID_CALLBACK: number;

declare const CSSMERR_TP_INVALID_CALLERAUTH_CONTEXT_POINTER: number;

declare const CSSMERR_TP_INVALID_CERTGROUP: number;

declare const CSSMERR_TP_INVALID_CERTGROUP_POINTER: number;

declare const CSSMERR_TP_INVALID_CERTIFICATE: number;

declare const CSSMERR_TP_INVALID_CERT_AUTHORITY: number;

declare const CSSMERR_TP_INVALID_CERT_POINTER: number;

declare const CSSMERR_TP_INVALID_CL_HANDLE: number;

declare const CSSMERR_TP_INVALID_CONTEXT_HANDLE: number;

declare const CSSMERR_TP_INVALID_CRL: number;

declare const CSSMERR_TP_INVALID_CRLGROUP: number;

declare const CSSMERR_TP_INVALID_CRLGROUP_POINTER: number;

declare const CSSMERR_TP_INVALID_CRL_AUTHORITY: number;

declare const CSSMERR_TP_INVALID_CRL_ENCODING: number;

declare const CSSMERR_TP_INVALID_CRL_POINTER: number;

declare const CSSMERR_TP_INVALID_CRL_TYPE: number;

declare const CSSMERR_TP_INVALID_CSP_HANDLE: number;

declare const CSSMERR_TP_INVALID_DATA: number;

declare const CSSMERR_TP_INVALID_DB_HANDLE: number;

declare const CSSMERR_TP_INVALID_DB_LIST: number;

declare const CSSMERR_TP_INVALID_DB_LIST_POINTER: number;

declare const CSSMERR_TP_INVALID_DL_HANDLE: number;

declare const CSSMERR_TP_INVALID_FIELD_POINTER: number;

declare const CSSMERR_TP_INVALID_FORM_TYPE: number;

declare const CSSMERR_TP_INVALID_ID: number;

declare const CSSMERR_TP_INVALID_IDENTIFIER: number;

declare const CSSMERR_TP_INVALID_IDENTIFIER_POINTER: number;

declare const CSSMERR_TP_INVALID_INDEX: number;

declare const CSSMERR_TP_INVALID_INPUT_POINTER: number;

declare const CSSMERR_TP_INVALID_KEYCACHE_HANDLE: number;

declare const CSSMERR_TP_INVALID_NAME: number;

declare const CSSMERR_TP_INVALID_NETWORK_ADDR: number;

declare const CSSMERR_TP_INVALID_NUMBER_OF_FIELDS: number;

declare const CSSMERR_TP_INVALID_OUTPUT_POINTER: number;

declare const CSSMERR_TP_INVALID_PASSTHROUGH_ID: number;

declare const CSSMERR_TP_INVALID_POINTER: number;

declare const CSSMERR_TP_INVALID_POLICY_IDENTIFIERS: number;

declare const CSSMERR_TP_INVALID_REASON: number;

declare const CSSMERR_TP_INVALID_REQUEST_INPUTS: number;

declare const CSSMERR_TP_INVALID_RESPONSE_VECTOR: number;

declare const CSSMERR_TP_INVALID_SIGNATURE: number;

declare const CSSMERR_TP_INVALID_STOP_ON_POLICY: number;

declare const CSSMERR_TP_INVALID_TIMESTRING: number;

declare const CSSMERR_TP_INVALID_TUPLE: number;

declare const CSSMERR_TP_INVALID_TUPLEGROUP: number;

declare const CSSMERR_TP_INVALID_TUPLEGROUP_POINTER: number;

declare const CSSMERR_TP_IN_DARK_WAKE: number;

declare const CSSMERR_TP_MDS_ERROR: number;

declare const CSSMERR_TP_MEMORY_ERROR: number;

declare const CSSMERR_TP_NOT_SIGNER: number;

declare const CSSMERR_TP_NOT_TRUSTED: number;

declare const CSSMERR_TP_NO_DEFAULT_AUTHORITY: number;

declare const CSSMERR_TP_NO_USER_INTERACTION: number;

declare const CSSMERR_TP_OS_ACCESS_DENIED: number;

declare const CSSMERR_TP_REJECTED_FORM: number;

declare const CSSMERR_TP_REQUEST_LOST: number;

declare const CSSMERR_TP_REQUEST_REJECTED: number;

declare const CSSMERR_TP_SELF_CHECK_FAILED: number;

declare const CSSMERR_TP_SERVICE_NOT_AVAILABLE: number;

declare const CSSMERR_TP_UNKNOWN_FORMAT: number;

declare const CSSMERR_TP_UNKNOWN_TAG: number;

declare const CSSMERR_TP_UNSUPPORTED_ADDR_TYPE: number;

declare const CSSMERR_TP_UNSUPPORTED_SERVICE: number;

declare const CSSMERR_TP_USER_CANCELED: number;

declare const CSSMERR_TP_VERIFICATION_FAILURE: number;

declare const CSSMERR_TP_VERIFY_ACTION_FAILED: number;

declare const CSSM_ACL_AUTHORIZATION_ANY: number;

declare const CSSM_ACL_AUTHORIZATION_CHANGE_ACL: number;

declare const CSSM_ACL_AUTHORIZATION_CHANGE_OWNER: number;

declare const CSSM_ACL_AUTHORIZATION_DBS_CREATE: number;

declare const CSSM_ACL_AUTHORIZATION_DBS_DELETE: number;

declare const CSSM_ACL_AUTHORIZATION_DB_DELETE: number;

declare const CSSM_ACL_AUTHORIZATION_DB_INSERT: number;

declare const CSSM_ACL_AUTHORIZATION_DB_MODIFY: number;

declare const CSSM_ACL_AUTHORIZATION_DB_READ: number;

declare const CSSM_ACL_AUTHORIZATION_DECRYPT: number;

declare const CSSM_ACL_AUTHORIZATION_DELETE: number;

declare const CSSM_ACL_AUTHORIZATION_DERIVE: number;

declare const CSSM_ACL_AUTHORIZATION_ENCRYPT: number;

declare const CSSM_ACL_AUTHORIZATION_EXPORT_CLEAR: number;

declare const CSSM_ACL_AUTHORIZATION_EXPORT_WRAPPED: number;

declare const CSSM_ACL_AUTHORIZATION_GENKEY: number;

declare const CSSM_ACL_AUTHORIZATION_IMPORT_CLEAR: number;

declare const CSSM_ACL_AUTHORIZATION_IMPORT_WRAPPED: number;

declare const CSSM_ACL_AUTHORIZATION_INTEGRITY: number;

declare const CSSM_ACL_AUTHORIZATION_LOGIN: number;

declare const CSSM_ACL_AUTHORIZATION_MAC: number;

declare const CSSM_ACL_AUTHORIZATION_PARTITION_ID: number;

declare const CSSM_ACL_AUTHORIZATION_PREAUTH_BASE: number;

declare const CSSM_ACL_AUTHORIZATION_PREAUTH_END: number;

declare const CSSM_ACL_AUTHORIZATION_SIGN: number;

declare const CSSM_ACL_AUTHORIZATION_TAG_VENDOR_DEFINED_START: number;

declare const CSSM_ACL_CODE_SIGNATURE_INVALID: number;

declare const CSSM_ACL_CODE_SIGNATURE_OSX: number;

declare const CSSM_ACL_EDIT_MODE_ADD: number;

declare const CSSM_ACL_EDIT_MODE_DELETE: number;

declare const CSSM_ACL_EDIT_MODE_REPLACE: number;

declare const CSSM_ACL_KEYCHAIN_PROMPT_CURRENT_VERSION: number;

declare const CSSM_ACL_KEYCHAIN_PROMPT_INVALID: number;

declare const CSSM_ACL_KEYCHAIN_PROMPT_INVALID_ACT: number;

declare const CSSM_ACL_KEYCHAIN_PROMPT_REQUIRE_PASSPHRASE: number;

interface CSSM_ACL_KEYCHAIN_PROMPT_SELECTOR {
	version: number;
	flags: number;
}
declare var CSSM_ACL_KEYCHAIN_PROMPT_SELECTOR: CSSM_ACL_KEYCHAIN_PROMPT_SELECTOR;

declare const CSSM_ACL_KEYCHAIN_PROMPT_UNSIGNED: number;

declare const CSSM_ACL_KEYCHAIN_PROMPT_UNSIGNED_ACT: number;

declare const CSSM_ACL_MATCH_BITS: number;

declare const CSSM_ACL_MATCH_GID: number;

declare const CSSM_ACL_MATCH_HONOR_ROOT: number;

declare const CSSM_ACL_MATCH_UID: number;

declare const CSSM_ACL_PREAUTH_TRACKING_AUTHORIZED: number;

declare const CSSM_ACL_PREAUTH_TRACKING_BLOCKED: number;

declare const CSSM_ACL_PREAUTH_TRACKING_COUNT_MASK: number;

declare const CSSM_ACL_PREAUTH_TRACKING_UNKNOWN: number;

declare const CSSM_ACL_PROCESS_SELECTOR_CURRENT_VERSION: number;

interface CSSM_ACL_PROCESS_SUBJECT_SELECTOR {
	version: number;
	mask: number;
	uid: number;
	gid: number;
}
declare var CSSM_ACL_PROCESS_SUBJECT_SELECTOR: CSSM_ACL_PROCESS_SUBJECT_SELECTOR;

declare const CSSM_ACL_SUBJECT_TYPE_ANY: number;

declare const CSSM_ACL_SUBJECT_TYPE_ASYMMETRIC_KEY: number;

declare const CSSM_ACL_SUBJECT_TYPE_BIOMETRIC: number;

declare const CSSM_ACL_SUBJECT_TYPE_CODE_SIGNATURE: number;

declare const CSSM_ACL_SUBJECT_TYPE_COMMENT: number;

declare const CSSM_ACL_SUBJECT_TYPE_EXT_PAM_NAME: number;

declare const CSSM_ACL_SUBJECT_TYPE_HASHED_SUBJECT: number;

declare const CSSM_ACL_SUBJECT_TYPE_KEYCHAIN_PROMPT: number;

declare const CSSM_ACL_SUBJECT_TYPE_LOGIN_NAME: number;

declare const CSSM_ACL_SUBJECT_TYPE_PARTITION: number;

declare const CSSM_ACL_SUBJECT_TYPE_PASSWORD: number;

declare const CSSM_ACL_SUBJECT_TYPE_PREAUTH: number;

declare const CSSM_ACL_SUBJECT_TYPE_PREAUTH_SOURCE: number;

declare const CSSM_ACL_SUBJECT_TYPE_PROCESS: number;

declare const CSSM_ACL_SUBJECT_TYPE_PROMPTED_BIOMETRIC: number;

declare const CSSM_ACL_SUBJECT_TYPE_PROMPTED_PASSWORD: number;

declare const CSSM_ACL_SUBJECT_TYPE_PROTECTED_BIOMETRIC: number;

declare const CSSM_ACL_SUBJECT_TYPE_PROTECTED_PASSWORD: number;

declare const CSSM_ACL_SUBJECT_TYPE_PUBLIC_KEY: number;

declare const CSSM_ACL_SUBJECT_TYPE_SYMMETRIC_KEY: number;

declare const CSSM_ACL_SUBJECT_TYPE_THRESHOLD: number;

declare const CSSM_AC_BASE_AC_ERROR: number;

declare const CSSM_AC_BASE_ERROR: number;

declare const CSSM_AC_PRIVATE_ERROR: number;

declare const CSSM_ADDR_CUSTOM: number;

declare const CSSM_ADDR_NAME: number;

declare const CSSM_ADDR_NONE: number;

declare const CSSM_ADDR_SOCKADDR: number;

declare const CSSM_ADDR_URL: number;

declare const CSSM_ALGCLASS_ASYMMETRIC: number;

declare const CSSM_ALGCLASS_CUSTOM: number;

declare const CSSM_ALGCLASS_DERIVEKEY: number;

declare const CSSM_ALGCLASS_DIGEST: number;

declare const CSSM_ALGCLASS_KEYGEN: number;

declare const CSSM_ALGCLASS_MAC: number;

declare const CSSM_ALGCLASS_NONE: number;

declare const CSSM_ALGCLASS_RANDOMGEN: number;

declare const CSSM_ALGCLASS_SIGNATURE: number;

declare const CSSM_ALGCLASS_SYMMETRIC: number;

declare const CSSM_ALGCLASS_UNIQUEGEN: number;

declare const CSSM_ALGID_3DES: number;

declare const CSSM_ALGID_3DES_1KEY: number;

declare const CSSM_ALGID_3DES_1KEY_EEE: number;

declare const CSSM_ALGID_3DES_2KEY: number;

declare const CSSM_ALGID_3DES_2KEY_EDE: number;

declare const CSSM_ALGID_3DES_2KEY_EEE: number;

declare const CSSM_ALGID_3DES_3KEY: number;

declare const CSSM_ALGID_3DES_3KEY_EDE: number;

declare const CSSM_ALGID_3DES_3KEY_EEE: number;

declare const CSSM_ALGID_AES: number;

declare const CSSM_ALGID_APPLE_YARROW: number;

declare const CSSM_ALGID_ASC: number;

declare const CSSM_ALGID_BATON: number;

declare const CSSM_ALGID_BLOWFISH: number;

declare const CSSM_ALGID_CAST: number;

declare const CSSM_ALGID_CAST3: number;

declare const CSSM_ALGID_CAST5: number;

declare const CSSM_ALGID_CDMF: number;

declare const CSSM_ALGID_CRAB: number;

declare const CSSM_ALGID_CUSTOM: number;

declare const CSSM_ALGID_ConcatBaseAndData: number;

declare const CSSM_ALGID_ConcatBaseAndKey: number;

declare const CSSM_ALGID_ConcatDataAndBase: number;

declare const CSSM_ALGID_ConcatKeyAndBase: number;

declare const CSSM_ALGID_DES: number;

declare const CSSM_ALGID_DESRandom: number;

declare const CSSM_ALGID_DESX: number;

declare const CSSM_ALGID_DH: number;

declare const CSSM_ALGID_DSA: number;

declare const CSSM_ALGID_DSA_BSAFE: number;

declare const CSSM_ALGID_ECAES: number;

declare const CSSM_ALGID_ECC: number;

declare const CSSM_ALGID_ECDH: number;

declare const CSSM_ALGID_ECDH_X963_KDF: number;

declare const CSSM_ALGID_ECDSA: number;

declare const CSSM_ALGID_ECDSA_SPECIFIED: number;

declare const CSSM_ALGID_ECES: number;

declare const CSSM_ALGID_ECMQV: number;

declare const CSSM_ALGID_ECNRA: number;

declare const CSSM_ALGID_ENTROPY_DEFAULT: number;

declare const CSSM_ALGID_ElGamal: number;

declare const CSSM_ALGID_ExtractFromKey: number;

declare const CSSM_ALGID_FASTHASH: number;

declare const CSSM_ALGID_FEAL: number;

declare const CSSM_ALGID_FEE: number;

declare const CSSM_ALGID_FEED: number;

declare const CSSM_ALGID_FEEDEXP: number;

declare const CSSM_ALGID_FEE_MD5: number;

declare const CSSM_ALGID_FEE_SHA1: number;

declare const CSSM_ALGID_FIPS186Random: number;

declare const CSSM_ALGID_FortezzaTimestamp: number;

declare const CSSM_ALGID_GOST: number;

declare const CSSM_ALGID_GenericSecret: number;

declare const CSSM_ALGID_HAVAL: number;

declare const CSSM_ALGID_HAVAL3: number;

declare const CSSM_ALGID_HAVAL4: number;

declare const CSSM_ALGID_HAVAL5: number;

declare const CSSM_ALGID_IBCHASH: number;

declare const CSSM_ALGID_IDEA: number;

declare const CSSM_ALGID_IntelPlatformRandom: number;

declare const CSSM_ALGID_JUNIPER: number;

declare const CSSM_ALGID_KEA: number;

declare const CSSM_ALGID_KEYCHAIN_KEY: number;

declare const CSSM_ALGID_KHAFRE: number;

declare const CSSM_ALGID_KHUFU: number;

declare const CSSM_ALGID_LAST: number;

declare const CSSM_ALGID_LOKI: number;

declare const CSSM_ALGID_LUCIFER: number;

declare const CSSM_ALGID_MADRYGA: number;

declare const CSSM_ALGID_MAYFLY: number;

declare const CSSM_ALGID_MD2: number;

declare const CSSM_ALGID_MD2Random: number;

declare const CSSM_ALGID_MD2WithRSA: number;

declare const CSSM_ALGID_MD4: number;

declare const CSSM_ALGID_MD5: number;

declare const CSSM_ALGID_MD5HMAC: number;

declare const CSSM_ALGID_MD5Random: number;

declare const CSSM_ALGID_MD5WithRSA: number;

declare const CSSM_ALGID_MMB: number;

declare const CSSM_ALGID_MQV: number;

declare const CSSM_ALGID_NHASH: number;

declare const CSSM_ALGID_NONE: number;

declare const CSSM_ALGID_NRA: number;

declare const CSSM_ALGID_OPENSSH1: number;

declare const CSSM_ALGID_PBE_OPENSSL_MD5: number;

declare const CSSM_ALGID_PH: number;

declare const CSSM_ALGID_PKCS12_PBE_ENCR: number;

declare const CSSM_ALGID_PKCS12_PBE_MAC: number;

declare const CSSM_ALGID_PKCS12_SHA1_PBE: number;

declare const CSSM_ALGID_PKCS5_PBKDF1_MD2: number;

declare const CSSM_ALGID_PKCS5_PBKDF1_MD5: number;

declare const CSSM_ALGID_PKCS5_PBKDF1_SHA1: number;

declare const CSSM_ALGID_PKCS5_PBKDF2: number;

declare const CSSM_ALGID_RC2: number;

declare const CSSM_ALGID_RC4: number;

declare const CSSM_ALGID_RC5: number;

declare const CSSM_ALGID_RDES: number;

declare const CSSM_ALGID_REDOC: number;

declare const CSSM_ALGID_REDOC3: number;

declare const CSSM_ALGID_RIPEMAC: number;

declare const CSSM_ALGID_RIPEMD: number;

declare const CSSM_ALGID_RSA: number;

declare const CSSM_ALGID_RUNNING_COUNTER: number;

declare const CSSM_ALGID_SAFER: number;

declare const CSSM_ALGID_SEAL: number;

declare const CSSM_ALGID_SECURE_PASSPHRASE: number;

declare const CSSM_ALGID_SHA1: number;

declare const CSSM_ALGID_SHA1HMAC: number;

declare const CSSM_ALGID_SHA1HMAC_LEGACY: number;

declare const CSSM_ALGID_SHA1WithDSA: number;

declare const CSSM_ALGID_SHA1WithECDSA: number;

declare const CSSM_ALGID_SHA1WithECNRA: number;

declare const CSSM_ALGID_SHA1WithRSA: number;

declare const CSSM_ALGID_SHA224: number;

declare const CSSM_ALGID_SHA224WithECDSA: number;

declare const CSSM_ALGID_SHA224WithRSA: number;

declare const CSSM_ALGID_SHA256: number;

declare const CSSM_ALGID_SHA256WithECDSA: number;

declare const CSSM_ALGID_SHA256WithRSA: number;

declare const CSSM_ALGID_SHA384: number;

declare const CSSM_ALGID_SHA384WithECDSA: number;

declare const CSSM_ALGID_SHA384WithRSA: number;

declare const CSSM_ALGID_SHA512: number;

declare const CSSM_ALGID_SHA512WithECDSA: number;

declare const CSSM_ALGID_SHA512WithRSA: number;

declare const CSSM_ALGID_SHARandom: number;

declare const CSSM_ALGID_SKIPJACK: number;

declare const CSSM_ALGID_SSL3KeyAndMacDerive: number;

declare const CSSM_ALGID_SSL3MD5: number;

declare const CSSM_ALGID_SSL3MD5_MAC: number;

declare const CSSM_ALGID_SSL3MasterDerive: number;

declare const CSSM_ALGID_SSL3PreMasterGen: number;

declare const CSSM_ALGID_SSL3SHA1: number;

declare const CSSM_ALGID_SSL3SHA1_MAC: number;

declare const CSSM_ALGID_TIGER: number;

declare const CSSM_ALGID_UTC: number;

declare const CSSM_ALGID_VENDOR_DEFINED: number;

declare const CSSM_ALGID_WrapLynks: number;

declare const CSSM_ALGID_WrapSET_OAEP: number;

declare const CSSM_ALGID_XORBaseAndData: number;

declare const CSSM_ALGID__FIRST_UNUSED: number;

declare const CSSM_ALGMODE_BC: number;

declare const CSSM_ALGMODE_CBC: number;

declare const CSSM_ALGMODE_CBC128: number;

declare const CSSM_ALGMODE_CBC64: number;

declare const CSSM_ALGMODE_CBCC: number;

declare const CSSM_ALGMODE_CBCPD: number;

declare const CSSM_ALGMODE_CBCPadIV8: number;

declare const CSSM_ALGMODE_CBC_IV8: number;

declare const CSSM_ALGMODE_CFB: number;

declare const CSSM_ALGMODE_CFB16: number;

declare const CSSM_ALGMODE_CFB32: number;

declare const CSSM_ALGMODE_CFB8: number;

declare const CSSM_ALGMODE_CFBPadIV8: number;

declare const CSSM_ALGMODE_CFB_IV8: number;

declare const CSSM_ALGMODE_COUNTER: number;

declare const CSSM_ALGMODE_CUSTOM: number;

declare const CSSM_ALGMODE_ECB: number;

declare const CSSM_ALGMODE_ECB128: number;

declare const CSSM_ALGMODE_ECB64: number;

declare const CSSM_ALGMODE_ECB96: number;

declare const CSSM_ALGMODE_ECBPad: number;

declare const CSSM_ALGMODE_ISO_9796: number;

declare const CSSM_ALGMODE_LAST: number;

declare const CSSM_ALGMODE_NONE: number;

declare const CSSM_ALGMODE_OAEP_HASH: number;

declare const CSSM_ALGMODE_OFB: number;

declare const CSSM_ALGMODE_OFB64: number;

declare const CSSM_ALGMODE_OFBNLF: number;

declare const CSSM_ALGMODE_OFBPadIV8: number;

declare const CSSM_ALGMODE_OFB_IV8: number;

declare const CSSM_ALGMODE_PBC: number;

declare const CSSM_ALGMODE_PCBC: number;

declare const CSSM_ALGMODE_PFB: number;

declare const CSSM_ALGMODE_PKCS1_EME_OAEP: number;

declare const CSSM_ALGMODE_PKCS1_EME_V15: number;

declare const CSSM_ALGMODE_PKCS1_EMSA_V15: number;

declare const CSSM_ALGMODE_PRIVATE_KEY: number;

declare const CSSM_ALGMODE_PRIVATE_WRAP: number;

declare const CSSM_ALGMODE_PUBLIC_KEY: number;

declare const CSSM_ALGMODE_RELAYX: number;

declare const CSSM_ALGMODE_SHUFFLE: number;

declare const CSSM_ALGMODE_VENDOR_DEFINED: number;

declare const CSSM_ALGMODE_WRAP: number;

declare const CSSM_ALGMODE_X9_31: number;

declare const CSSM_APPLECSPDL_DB_CHANGE_PASSWORD: number;

declare const CSSM_APPLECSPDL_DB_GET_HANDLE: number;

declare const CSSM_APPLECSPDL_DB_GET_SETTINGS: number;

declare const CSSM_APPLECSPDL_DB_IS_LOCKED: number;

interface CSSM_APPLECSPDL_DB_IS_LOCKED_PARAMETERS {
	isLocked: number;
}
declare var CSSM_APPLECSPDL_DB_IS_LOCKED_PARAMETERS: CSSM_APPLECSPDL_DB_IS_LOCKED_PARAMETERS;

declare const CSSM_APPLECSPDL_DB_LOCK: number;

interface CSSM_APPLECSPDL_DB_SETTINGS_PARAMETERS {
	idleTimeout: number;
	lockOnSleep: number;
}
declare var CSSM_APPLECSPDL_DB_SETTINGS_PARAMETERS: CSSM_APPLECSPDL_DB_SETTINGS_PARAMETERS;

declare const CSSM_APPLECSPDL_DB_SET_SETTINGS: number;

declare const CSSM_APPLECSPDL_DB_UNLOCK: number;

declare const CSSM_APPLECSP_KEYDIGEST: number;

interface CSSM_APPLEDL_OPEN_PARAMETERS {
	length: number;
	version: number;
	autoCommit: number;
	mask: number;
	mode: number;
}
declare var CSSM_APPLEDL_OPEN_PARAMETERS: CSSM_APPLEDL_OPEN_PARAMETERS;

declare const CSSM_APPLEDL_OPEN_PARAMETERS_VERSION: number;

declare const CSSM_APPLEFILEDL_COMMIT: number;

declare const CSSM_APPLEFILEDL_DELETE_FILE: number;

declare const CSSM_APPLEFILEDL_MAKE_BACKUP: number;

declare const CSSM_APPLEFILEDL_MAKE_COPY: number;

declare const CSSM_APPLEFILEDL_ROLLBACK: number;

declare const CSSM_APPLEFILEDL_TAKE_FILE_LOCK: number;

declare const CSSM_APPLEFILEDL_TOGGLE_AUTOCOMMIT: number;

declare const CSSM_APPLESCPDL_CSP_GET_KEYHANDLE: number;

declare const CSSM_APPLEX509CL_OBTAIN_CSR: number;

declare const CSSM_APPLEX509CL_VERIFY_CSR: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_10: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_11: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_12: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_13: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_14: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_15: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_16: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_17: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_18: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_19: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_20: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_21: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_22: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_23: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_24: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_25: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_26: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_27: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_8: number;

declare const CSSM_APPLE_PRIVATE_CSPDL_CODE_9: number;

interface CSSM_APPLE_TP_ACTION_DATA {
	Version: number;
	ActionFlags: number;
}
declare var CSSM_APPLE_TP_ACTION_DATA: CSSM_APPLE_TP_ACTION_DATA;

interface CSSM_APPLE_TP_CRL_OPTIONS {
	Version: number;
	CrlFlags: number;
	crlStore: CSSM_DL_DB_HANDLE;
}
declare var CSSM_APPLE_TP_CRL_OPTIONS: CSSM_APPLE_TP_CRL_OPTIONS;

interface CSSM_APPLE_TP_NAME_OID {
	string: string;
	oid: SecAsn1Item;
}
declare var CSSM_APPLE_TP_NAME_OID: CSSM_APPLE_TP_NAME_OID;

interface CSSM_APPLE_TP_SMIME_OPTIONS {
	Version: number;
	IntendedUsage: number;
	SenderEmailLen: number;
	SenderEmail: string;
}
declare var CSSM_APPLE_TP_SMIME_OPTIONS: CSSM_APPLE_TP_SMIME_OPTIONS;

interface CSSM_APPLE_TP_SSL_OPTIONS {
	Version: number;
	ServerNameLen: number;
	ServerName: string;
	Flags: number;
}
declare var CSSM_APPLE_TP_SSL_OPTIONS: CSSM_APPLE_TP_SSL_OPTIONS;

declare const CSSM_APPLE_UNLOCK_TYPE_KEYBAG: number;

declare const CSSM_APPLE_UNLOCK_TYPE_KEY_DIRECT: number;

declare const CSSM_APPLE_UNLOCK_TYPE_WRAPPED_PRIVATE: number;

declare const CSSM_ASC_OPTIMIZE_ASCII: number;

declare const CSSM_ASC_OPTIMIZE_DEFAULT: number;

declare const CSSM_ASC_OPTIMIZE_SECURITY: number;

declare const CSSM_ASC_OPTIMIZE_SIZE: number;

declare const CSSM_ASC_OPTIMIZE_TIME: number;

declare const CSSM_ASC_OPTIMIZE_TIME_SIZE: number;

declare const CSSM_ATTACH_READ_ONLY: number;

declare const CSSM_ATTRIBUTE_ACCESS_CREDENTIALS: number;

declare const CSSM_ATTRIBUTE_ALERT_TITLE: number;

declare const CSSM_ATTRIBUTE_ALG_ID: number;

declare const CSSM_ATTRIBUTE_ALG_PARAMS: number;

declare const CSSM_ATTRIBUTE_ASC_OPTIMIZATION: number;

declare const CSSM_ATTRIBUTE_BASE: number;

declare const CSSM_ATTRIBUTE_BLOCK_SIZE: number;

declare const CSSM_ATTRIBUTE_CSP_HANDLE: number;

declare const CSSM_ATTRIBUTE_CUSTOM: number;

declare const CSSM_ATTRIBUTE_DATA_ACCESS_CREDENTIALS: number;

declare const CSSM_ATTRIBUTE_DATA_CRYPTO_DATA: number;

declare const CSSM_ATTRIBUTE_DATA_CSSM_DATA: number;

declare const CSSM_ATTRIBUTE_DATA_DATE: number;

declare const CSSM_ATTRIBUTE_DATA_DL_DB_HANDLE: number;

declare const CSSM_ATTRIBUTE_DATA_KEY: number;

declare const CSSM_ATTRIBUTE_DATA_KR_PROFILE: number;

declare const CSSM_ATTRIBUTE_DATA_NONE: number;

declare const CSSM_ATTRIBUTE_DATA_RANGE: number;

declare const CSSM_ATTRIBUTE_DATA_STRING: number;

declare const CSSM_ATTRIBUTE_DATA_UINT32: number;

declare const CSSM_ATTRIBUTE_DATA_VERSION: number;

declare const CSSM_ATTRIBUTE_DESCRIPTION: number;

declare const CSSM_ATTRIBUTE_DL_DB_HANDLE: number;

declare const CSSM_ATTRIBUTE_EFFECTIVE_BITS: number;

declare const CSSM_ATTRIBUTE_END_DATE: number;

declare const CSSM_ATTRIBUTE_FEE_CURVE_TYPE: number;

declare const CSSM_ATTRIBUTE_FEE_PRIME_TYPE: number;

declare const CSSM_ATTRIBUTE_INIT_VECTOR: number;

declare const CSSM_ATTRIBUTE_ITERATION_COUNT: number;

declare const CSSM_ATTRIBUTE_IV_SIZE: number;

declare const CSSM_ATTRIBUTE_KEY: number;

declare const CSSM_ATTRIBUTE_KEYATTR: number;

declare const CSSM_ATTRIBUTE_KEYUSAGE: number;

declare const CSSM_ATTRIBUTE_KEY_LENGTH: number;

declare const CSSM_ATTRIBUTE_KEY_LENGTH_RANGE: number;

declare const CSSM_ATTRIBUTE_KEY_TYPE: number;

declare const CSSM_ATTRIBUTE_KRPROFILE_LOCAL: number;

declare const CSSM_ATTRIBUTE_KRPROFILE_REMOTE: number;

declare const CSSM_ATTRIBUTE_LABEL: number;

declare const CSSM_ATTRIBUTE_MODE: number;

declare const CSSM_ATTRIBUTE_NONE: number;

declare const CSSM_ATTRIBUTE_OUTPUT_SIZE: number;

declare const CSSM_ATTRIBUTE_PADDING: number;

declare const CSSM_ATTRIBUTE_PARAM_KEY: number;

declare const CSSM_ATTRIBUTE_PASSPHRASE: number;

declare const CSSM_ATTRIBUTE_PRIME: number;

declare const CSSM_ATTRIBUTE_PRIVATE_KEY_FORMAT: number;

declare const CSSM_ATTRIBUTE_PROMPT: number;

declare const CSSM_ATTRIBUTE_PUBLIC_KEY: number;

declare const CSSM_ATTRIBUTE_PUBLIC_KEY_FORMAT: number;

declare const CSSM_ATTRIBUTE_RANDOM: number;

declare const CSSM_ATTRIBUTE_ROUNDS: number;

declare const CSSM_ATTRIBUTE_ROUNDS_RANGE: number;

declare const CSSM_ATTRIBUTE_RSA_BLINDING: number;

declare const CSSM_ATTRIBUTE_SALT: number;

declare const CSSM_ATTRIBUTE_SEED: number;

declare const CSSM_ATTRIBUTE_START_DATE: number;

declare const CSSM_ATTRIBUTE_SUBPRIME: number;

declare const CSSM_ATTRIBUTE_SYMMETRIC_KEY_FORMAT: number;

declare const CSSM_ATTRIBUTE_TYPE_MASK: number;

declare const CSSM_ATTRIBUTE_VENDOR_DEFINED: number;

declare const CSSM_ATTRIBUTE_VERIFY_PASSPHRASE: number;

declare const CSSM_ATTRIBUTE_VERSION: number;

declare const CSSM_ATTRIBUTE_WRAPPED_KEY_FORMAT: number;

interface CSSM_AUTHORIZATIONGROUP {
	NumberOfAuthTags: number;
	AuthTags: number;
}
declare var CSSM_AUTHORIZATIONGROUP: CSSM_AUTHORIZATIONGROUP;

declare const CSSM_BASE_ERROR: number;

declare const CSSM_CERTGROUP_CERT_PAIR: number;

declare const CSSM_CERTGROUP_DATA: number;

declare const CSSM_CERTGROUP_ENCODED_CERT: number;

declare const CSSM_CERTGROUP_PARSED_CERT: number;

declare const CSSM_CERT_ACL_ENTRY: number;

declare const CSSM_CERT_BUNDLE_CUSTOM: number;

declare const CSSM_CERT_BUNDLE_ENCODING_BER: number;

declare const CSSM_CERT_BUNDLE_ENCODING_CUSTOM: number;

declare const CSSM_CERT_BUNDLE_ENCODING_DER: number;

declare const CSSM_CERT_BUNDLE_ENCODING_PGP: number;

declare const CSSM_CERT_BUNDLE_ENCODING_SEXPR: number;

declare const CSSM_CERT_BUNDLE_ENCODING_UNKNOWN: number;

declare const CSSM_CERT_BUNDLE_LAST: number;

declare const CSSM_CERT_BUNDLE_PFX: number;

declare const CSSM_CERT_BUNDLE_PGP_KEYRING: number;

declare const CSSM_CERT_BUNDLE_PKCS12: number;

declare const CSSM_CERT_BUNDLE_PKCS7_SIGNED_DATA: number;

declare const CSSM_CERT_BUNDLE_PKCS7_SIGNED_ENVELOPED_DATA: number;

declare const CSSM_CERT_BUNDLE_SPKI_SEQUENCE: number;

declare const CSSM_CERT_BUNDLE_UNKNOWN: number;

declare const CSSM_CERT_ENCODING_BER: number;

declare const CSSM_CERT_ENCODING_CUSTOM: number;

declare const CSSM_CERT_ENCODING_DER: number;

declare const CSSM_CERT_ENCODING_LAST: number;

declare const CSSM_CERT_ENCODING_MULTIPLE: number;

declare const CSSM_CERT_ENCODING_NDR: number;

declare const CSSM_CERT_ENCODING_PGP: number;

declare const CSSM_CERT_ENCODING_SEXPR: number;

declare const CSSM_CERT_ENCODING_UNKNOWN: number;

declare const CSSM_CERT_Intel: number;

declare const CSSM_CERT_LAST: number;

declare const CSSM_CERT_MULTIPLE: number;

declare const CSSM_CERT_PARSE_FORMAT_COMPLEX: number;

declare const CSSM_CERT_PARSE_FORMAT_CUSTOM: number;

declare const CSSM_CERT_PARSE_FORMAT_LAST: number;

declare const CSSM_CERT_PARSE_FORMAT_MULTIPLE: number;

declare const CSSM_CERT_PARSE_FORMAT_NONE: number;

declare const CSSM_CERT_PARSE_FORMAT_OID_NAMED: number;

declare const CSSM_CERT_PARSE_FORMAT_SEXPR: number;

declare const CSSM_CERT_PARSE_FORMAT_TUPLE: number;

declare const CSSM_CERT_PGP: number;

declare const CSSM_CERT_SDSIv1: number;

declare const CSSM_CERT_SPKI: number;

declare const CSSM_CERT_STATUS_EXPIRED: number;

declare const CSSM_CERT_STATUS_IS_FROM_NET: number;

declare const CSSM_CERT_STATUS_IS_IN_ANCHORS: number;

declare const CSSM_CERT_STATUS_IS_IN_INPUT_CERTS: number;

declare const CSSM_CERT_STATUS_IS_ROOT: number;

declare const CSSM_CERT_STATUS_NOT_VALID_YET: number;

declare const CSSM_CERT_STATUS_TRUST_SETTINGS_DENY: number;

declare const CSSM_CERT_STATUS_TRUST_SETTINGS_FOUND_ADMIN: number;

declare const CSSM_CERT_STATUS_TRUST_SETTINGS_FOUND_SYSTEM: number;

declare const CSSM_CERT_STATUS_TRUST_SETTINGS_FOUND_USER: number;

declare const CSSM_CERT_STATUS_TRUST_SETTINGS_IGNORED_ERROR: number;

declare const CSSM_CERT_STATUS_TRUST_SETTINGS_TRUST: number;

declare const CSSM_CERT_TUPLE: number;

declare const CSSM_CERT_UNKNOWN: number;

declare const CSSM_CERT_X9_ATTRIBUTE: number;

declare const CSSM_CERT_X_509_ATTRIBUTE: number;

declare const CSSM_CERT_X_509v1: number;

declare const CSSM_CERT_X_509v2: number;

declare const CSSM_CERT_X_509v3: number;

declare const CSSM_CL_BASE_CL_ERROR: number;

declare const CSSM_CL_BASE_ERROR: number;

declare const CSSM_CL_CUSTOM_CERT_BUNDLE_TYPE: number;

declare const CSSM_CL_CUSTOM_CERT_ENCODING: number;

declare const CSSM_CL_CUSTOM_CERT_PARSE_FORMAT: number;

declare const CSSM_CL_CUSTOM_CERT_TYPE: number;

declare const CSSM_CL_CUSTOM_CRL_PARSE_FORMAT: number;

declare const CSSM_CL_PRIVATE_ERROR: number;

declare const CSSM_CL_TEMPLATE_INTERMEDIATE_CERT: number;

declare const CSSM_CL_TEMPLATE_PKIX_CERTTEMPLATE: number;

declare const CSSM_CONTEXT_EVENT_CREATE: number;

declare const CSSM_CONTEXT_EVENT_DELETE: number;

declare const CSSM_CONTEXT_EVENT_UPDATE: number;

declare const CSSM_CRLGROUP_CRL_PAIR: number;

declare const CSSM_CRLGROUP_DATA: number;

declare const CSSM_CRLGROUP_ENCODED_CRL: number;

declare const CSSM_CRLGROUP_PARSED_CRL: number;

declare const CSSM_CRL_ENCODING_BER: number;

declare const CSSM_CRL_ENCODING_BLOOM: number;

declare const CSSM_CRL_ENCODING_CUSTOM: number;

declare const CSSM_CRL_ENCODING_DER: number;

declare const CSSM_CRL_ENCODING_MULTIPLE: number;

declare const CSSM_CRL_ENCODING_SEXPR: number;

declare const CSSM_CRL_ENCODING_UNKNOWN: number;

declare const CSSM_CRL_PARSE_FORMAT_COMPLEX: number;

declare const CSSM_CRL_PARSE_FORMAT_CUSTOM: number;

declare const CSSM_CRL_PARSE_FORMAT_LAST: number;

declare const CSSM_CRL_PARSE_FORMAT_MULTIPLE: number;

declare const CSSM_CRL_PARSE_FORMAT_NONE: number;

declare const CSSM_CRL_PARSE_FORMAT_OID_NAMED: number;

declare const CSSM_CRL_PARSE_FORMAT_SEXPR: number;

declare const CSSM_CRL_PARSE_FORMAT_TUPLE: number;

declare const CSSM_CRL_TYPE_MULTIPLE: number;

declare const CSSM_CRL_TYPE_SPKI: number;

declare const CSSM_CRL_TYPE_UNKNOWN: number;

declare const CSSM_CRL_TYPE_X_509v1: number;

declare const CSSM_CRL_TYPE_X_509v2: number;

declare const CSSM_CSP_BASE_CSP_ERROR: number;

declare const CSSM_CSP_BASE_ERROR: number;

declare const CSSM_CSP_HARDWARE: number;

declare const CSSM_CSP_HYBRID: number;

interface CSSM_CSP_OPERATIONAL_STATISTICS {
	UserAuthenticated: number;
	DeviceFlags: number;
	TokenMaxSessionCount: number;
	TokenOpenedSessionCount: number;
	TokenMaxRWSessionCount: number;
	TokenOpenedRWSessionCount: number;
	TokenTotalPublicMem: number;
	TokenFreePublicMem: number;
	TokenTotalPrivateMem: number;
	TokenFreePrivateMem: number;
}
declare var CSSM_CSP_OPERATIONAL_STATISTICS: CSSM_CSP_OPERATIONAL_STATISTICS;

declare const CSSM_CSP_PRIVATE_ERROR: number;

declare const CSSM_CSP_RDR_EXISTS: number;

declare const CSSM_CSP_RDR_HW: number;

declare const CSSM_CSP_RDR_TOKENPRESENT: number;

declare const CSSM_CSP_SOFTWARE: number;

declare const CSSM_CSP_STORES_CERTIFICATES: number;

declare const CSSM_CSP_STORES_GENERIC: number;

declare const CSSM_CSP_STORES_PRIVATE_KEYS: number;

declare const CSSM_CSP_STORES_PUBLIC_KEYS: number;

declare const CSSM_CSP_STORES_SESSION_KEYS: number;

declare const CSSM_CSP_TOK_CLOCK_EXISTS: number;

declare const CSSM_CSP_TOK_LOGIN_REQUIRED: number;

declare const CSSM_CSP_TOK_PRIVATE_KEY_PASSWORD: number;

declare const CSSM_CSP_TOK_PROT_AUTHENTICATION: number;

declare const CSSM_CSP_TOK_RNG: number;

declare const CSSM_CSP_TOK_SESSION_KEY_PASSWORD: number;

declare const CSSM_CSP_TOK_USER_PIN_EXPIRED: number;

declare const CSSM_CSP_TOK_USER_PIN_INITIALIZED: number;

declare const CSSM_CSP_TOK_WRITE_PROTECTED: number;

declare const CSSM_CSSM_BASE_CSSM_ERROR: number;

declare const CSSM_CSSM_BASE_ERROR: number;

declare const CSSM_CSSM_PRIVATE_ERROR: number;

declare const CSSM_CUSTOM_COMMON_ERROR_EXTENT: number;

interface CSSM_DATE {
	Year: number;
	Month: number;
	Day: number;
}
declare var CSSM_DATE: CSSM_DATE;

declare const CSSM_DB_ACCESS_PRIVILEGED: number;

declare const CSSM_DB_ACCESS_READ: number;

declare const CSSM_DB_ACCESS_RESET: number;

declare const CSSM_DB_ACCESS_WRITE: number;

declare const CSSM_DB_AND: number;

declare const CSSM_DB_ATTRIBUTE_FORMAT_BIG_NUM: number;

declare const CSSM_DB_ATTRIBUTE_FORMAT_BLOB: number;

declare const CSSM_DB_ATTRIBUTE_FORMAT_COMPLEX: number;

declare const CSSM_DB_ATTRIBUTE_FORMAT_MULTI_UINT32: number;

declare const CSSM_DB_ATTRIBUTE_FORMAT_REAL: number;

declare const CSSM_DB_ATTRIBUTE_FORMAT_SINT32: number;

declare const CSSM_DB_ATTRIBUTE_FORMAT_STRING: number;

declare const CSSM_DB_ATTRIBUTE_FORMAT_TIME_DATE: number;

declare const CSSM_DB_ATTRIBUTE_FORMAT_UINT32: number;

declare const CSSM_DB_ATTRIBUTE_NAME_AS_INTEGER: number;

declare const CSSM_DB_ATTRIBUTE_NAME_AS_OID: number;

declare const CSSM_DB_ATTRIBUTE_NAME_AS_STRING: number;

declare const CSSM_DB_CERT_USE_OWNER: number;

declare const CSSM_DB_CERT_USE_PRIVACY: number;

declare const CSSM_DB_CERT_USE_REVOKED: number;

declare const CSSM_DB_CERT_USE_SIGNING: number;

declare const CSSM_DB_CERT_USE_SYSTEM: number;

declare const CSSM_DB_CERT_USE_TRUSTED: number;

declare const CSSM_DB_CONTAINS: number;

declare const CSSM_DB_CONTAINS_FINAL_SUBSTRING: number;

declare const CSSM_DB_CONTAINS_INITIAL_SUBSTRING: number;

declare const CSSM_DB_DATASTORES_UNKNOWN: number;

declare const CSSM_DB_EQUAL: number;

declare const CSSM_DB_FILESYSTEMSCAN_MODE: number;

declare const CSSM_DB_GREATER_THAN: number;

declare const CSSM_DB_INDEX_NONUNIQUE: number;

declare const CSSM_DB_INDEX_ON_ATTRIBUTE: number;

declare const CSSM_DB_INDEX_ON_RECORD: number;

declare const CSSM_DB_INDEX_ON_UNKNOWN: number;

declare const CSSM_DB_INDEX_UNIQUE: number;

declare const CSSM_DB_LESS_THAN: number;

declare const CSSM_DB_MODIFY_ATTRIBUTE_ADD: number;

declare const CSSM_DB_MODIFY_ATTRIBUTE_DELETE: number;

declare const CSSM_DB_MODIFY_ATTRIBUTE_NONE: number;

declare const CSSM_DB_MODIFY_ATTRIBUTE_REPLACE: number;

declare const CSSM_DB_NONE: number;

declare const CSSM_DB_NOT_EQUAL: number;

declare const CSSM_DB_OR: number;

declare const CSSM_DB_RECORDTYPE_APP_DEFINED_END: number;

declare const CSSM_DB_RECORDTYPE_APP_DEFINED_START: number;

declare const CSSM_DB_RECORDTYPE_OPEN_GROUP_END: number;

declare const CSSM_DB_RECORDTYPE_OPEN_GROUP_START: number;

declare const CSSM_DB_RECORDTYPE_SCHEMA_END: number;

declare const CSSM_DB_RECORDTYPE_SCHEMA_START: number;

interface CSSM_DB_SCHEMA_INDEX_INFO {
	AttributeId: number;
	IndexId: number;
	IndexType: number;
	IndexedDataLocation: number;
}
declare var CSSM_DB_SCHEMA_INDEX_INFO: CSSM_DB_SCHEMA_INDEX_INFO;

declare const CSSM_DB_TRANSACTIONAL_MODE: number;

declare const CSSM_DL_BASE_DL_ERROR: number;

declare const CSSM_DL_BASE_ERROR: number;

declare const CSSM_DL_CUSTOM: number;

interface CSSM_DL_DB_HANDLE {
	DLHandle: number;
	DBHandle: number;
}
declare var CSSM_DL_DB_HANDLE: CSSM_DL_DB_HANDLE;

declare const CSSM_DL_DB_RECORD_ALL_KEYS: number;

declare const CSSM_DL_DB_RECORD_ANY: number;

declare const CSSM_DL_DB_RECORD_APPLESHARE_PASSWORD: number;

declare const CSSM_DL_DB_RECORD_CERT: number;

declare const CSSM_DL_DB_RECORD_CRL: number;

declare const CSSM_DL_DB_RECORD_EXTENDED_ATTRIBUTE: number;

declare const CSSM_DL_DB_RECORD_GENERIC: number;

declare const CSSM_DL_DB_RECORD_GENERIC_PASSWORD: number;

declare const CSSM_DL_DB_RECORD_INTERNET_PASSWORD: number;

declare const CSSM_DL_DB_RECORD_METADATA: number;

declare const CSSM_DL_DB_RECORD_POLICY: number;

declare const CSSM_DL_DB_RECORD_PRIVATE_KEY: number;

declare const CSSM_DL_DB_RECORD_PUBLIC_KEY: number;

declare const CSSM_DL_DB_RECORD_SYMMETRIC_KEY: number;

declare const CSSM_DL_DB_RECORD_UNLOCK_REFERRAL: number;

declare const CSSM_DL_DB_RECORD_USER_TRUST: number;

declare const CSSM_DL_DB_RECORD_X509_CERTIFICATE: number;

declare const CSSM_DL_DB_RECORD_X509_CRL: number;

declare const CSSM_DL_DB_SCHEMA_ATTRIBUTES: number;

declare const CSSM_DL_DB_SCHEMA_INDEXES: number;

declare const CSSM_DL_DB_SCHEMA_INFO: number;

declare const CSSM_DL_DB_SCHEMA_PARSING_MODULE: number;

declare const CSSM_DL_FFS: number;

declare const CSSM_DL_LDAP: number;

declare const CSSM_DL_MEMORY: number;

declare const CSSM_DL_ODBC: number;

declare const CSSM_DL_PKCS11: number;

declare const CSSM_DL_PRIVATE_ERROR: number;

declare const CSSM_DL_REMOTEDIR: number;

declare const CSSM_DL_UNKNOWN: number;

declare const CSSM_ELAPSED_TIME_COMPLETE: number;

declare const CSSM_ELAPSED_TIME_UNKNOWN: number;

declare const CSSM_ERRCODE_ACL_ADD_FAILED: number;

declare const CSSM_ERRCODE_ACL_BASE_CERTS_NOT_SUPPORTED: number;

declare const CSSM_ERRCODE_ACL_CHALLENGE_CALLBACK_FAILED: number;

declare const CSSM_ERRCODE_ACL_CHANGE_FAILED: number;

declare const CSSM_ERRCODE_ACL_DELETE_FAILED: number;

declare const CSSM_ERRCODE_ACL_ENTRY_TAG_NOT_FOUND: number;

declare const CSSM_ERRCODE_ACL_REPLACE_FAILED: number;

declare const CSSM_ERRCODE_ACL_SUBJECT_TYPE_NOT_SUPPORTED: number;

declare const CSSM_ERRCODE_CRL_ALREADY_SIGNED: number;

declare const CSSM_ERRCODE_DEVICE_FAILED: number;

declare const CSSM_ERRCODE_DEVICE_RESET: number;

declare const CSSM_ERRCODE_FUNCTION_FAILED: number;

declare const CSSM_ERRCODE_FUNCTION_NOT_IMPLEMENTED: number;

declare const CSSM_ERRCODE_INCOMPATIBLE_VERSION: number;

declare const CSSM_ERRCODE_INSUFFICIENT_CLIENT_IDENTIFICATION: number;

declare const CSSM_ERRCODE_INTERNAL_ERROR: number;

declare const CSSM_ERRCODE_INVALID_ACCESS_CREDENTIALS: number;

declare const CSSM_ERRCODE_INVALID_ACL_BASE_CERTS: number;

declare const CSSM_ERRCODE_INVALID_ACL_CHALLENGE_CALLBACK: number;

declare const CSSM_ERRCODE_INVALID_ACL_EDIT_MODE: number;

declare const CSSM_ERRCODE_INVALID_ACL_ENTRY_TAG: number;

declare const CSSM_ERRCODE_INVALID_ACL_SUBJECT_VALUE: number;

declare const CSSM_ERRCODE_INVALID_AC_HANDLE: number;

declare const CSSM_ERRCODE_INVALID_CERTGROUP_POINTER: number;

declare const CSSM_ERRCODE_INVALID_CERT_POINTER: number;

declare const CSSM_ERRCODE_INVALID_CL_HANDLE: number;

declare const CSSM_ERRCODE_INVALID_CONTEXT_HANDLE: number;

declare const CSSM_ERRCODE_INVALID_CRL_POINTER: number;

declare const CSSM_ERRCODE_INVALID_CRYPTO_DATA: number;

declare const CSSM_ERRCODE_INVALID_CSP_HANDLE: number;

declare const CSSM_ERRCODE_INVALID_DATA: number;

declare const CSSM_ERRCODE_INVALID_DB_HANDLE: number;

declare const CSSM_ERRCODE_INVALID_DB_LIST: number;

declare const CSSM_ERRCODE_INVALID_DB_LIST_POINTER: number;

declare const CSSM_ERRCODE_INVALID_DL_HANDLE: number;

declare const CSSM_ERRCODE_INVALID_FIELD_POINTER: number;

declare const CSSM_ERRCODE_INVALID_GUID: number;

declare const CSSM_ERRCODE_INVALID_INPUT_POINTER: number;

declare const CSSM_ERRCODE_INVALID_KR_HANDLE: number;

declare const CSSM_ERRCODE_INVALID_NETWORK_ADDR: number;

declare const CSSM_ERRCODE_INVALID_NEW_ACL_ENTRY: number;

declare const CSSM_ERRCODE_INVALID_NEW_ACL_OWNER: number;

declare const CSSM_ERRCODE_INVALID_NUMBER_OF_FIELDS: number;

declare const CSSM_ERRCODE_INVALID_OUTPUT_POINTER: number;

declare const CSSM_ERRCODE_INVALID_PASSTHROUGH_ID: number;

declare const CSSM_ERRCODE_INVALID_POINTER: number;

declare const CSSM_ERRCODE_INVALID_SAMPLE_VALUE: number;

declare const CSSM_ERRCODE_INVALID_TP_HANDLE: number;

declare const CSSM_ERRCODE_IN_DARK_WAKE: number;

declare const CSSM_ERRCODE_MDS_ERROR: number;

declare const CSSM_ERRCODE_MEMORY_ERROR: number;

declare const CSSM_ERRCODE_MODULE_MANIFEST_VERIFY_FAILED: number;

declare const CSSM_ERRCODE_NO_USER_INTERACTION: number;

declare const CSSM_ERRCODE_OBJECT_ACL_NOT_SUPPORTED: number;

declare const CSSM_ERRCODE_OBJECT_ACL_REQUIRED: number;

declare const CSSM_ERRCODE_OBJECT_MANIP_AUTH_DENIED: number;

declare const CSSM_ERRCODE_OBJECT_USE_AUTH_DENIED: number;

declare const CSSM_ERRCODE_OPERATION_AUTH_DENIED: number;

declare const CSSM_ERRCODE_OS_ACCESS_DENIED: number;

declare const CSSM_ERRCODE_PRIVILEGE_NOT_GRANTED: number;

declare const CSSM_ERRCODE_SAMPLE_VALUE_NOT_SUPPORTED: number;

declare const CSSM_ERRCODE_SELF_CHECK_FAILED: number;

declare const CSSM_ERRCODE_SERVICE_NOT_AVAILABLE: number;

declare const CSSM_ERRCODE_UNKNOWN_FORMAT: number;

declare const CSSM_ERRCODE_UNKNOWN_TAG: number;

declare const CSSM_ERRCODE_USER_CANCELED: number;

declare const CSSM_ERRCODE_VERIFICATION_FAILURE: number;

declare const CSSM_ERRORCODE_COMMON_EXTENT: number;

declare const CSSM_ERRORCODE_CUSTOM_OFFSET: number;

declare const CSSM_ERRORCODE_MODULE_EXTENT: number;

declare const CSSM_ESTIMATED_TIME_UNKNOWN: number;

declare const CSSM_EVIDENCE_FORM_APPLE_CERTGROUP: number;

declare const CSSM_EVIDENCE_FORM_APPLE_CERT_INFO: number;

declare const CSSM_EVIDENCE_FORM_APPLE_HEADER: number;

declare const CSSM_EVIDENCE_FORM_CERT: number;

declare const CSSM_EVIDENCE_FORM_CERT_ID: number;

declare const CSSM_EVIDENCE_FORM_CRL: number;

declare const CSSM_EVIDENCE_FORM_CRL_ID: number;

declare const CSSM_EVIDENCE_FORM_CRL_NEXTTIME: number;

declare const CSSM_EVIDENCE_FORM_CRL_THISTIME: number;

declare const CSSM_EVIDENCE_FORM_POLICYINFO: number;

declare const CSSM_EVIDENCE_FORM_TUPLEGROUP: number;

declare const CSSM_EVIDENCE_FORM_UNSPECIFIC: number;

declare const CSSM_EVIDENCE_FORM_VERIFIER_TIME: number;

declare const CSSM_FALSE: number;

declare const CSSM_FEE_CURVE_TYPE_ANSI_X9_62: number;

declare const CSSM_FEE_CURVE_TYPE_DEFAULT: number;

declare const CSSM_FEE_CURVE_TYPE_MONTGOMERY: number;

declare const CSSM_FEE_CURVE_TYPE_WEIERSTRASS: number;

declare const CSSM_FEE_PRIME_TYPE_DEFAULT: number;

declare const CSSM_FEE_PRIME_TYPE_FEE: number;

declare const CSSM_FEE_PRIME_TYPE_GENERAL: number;

declare const CSSM_FEE_PRIME_TYPE_MERSENNE: number;

declare const CSSM_FIELDVALUE_COMPLEX_DATA_TYPE: number;

interface CSSM_FUNC_NAME_ADDR {
	Name: number;
	Address: () => void;
}
declare var CSSM_FUNC_NAME_ADDR: CSSM_FUNC_NAME_ADDR;

interface CSSM_GUID {
	Data1: number;
	Data2: number;
	Data3: number;
	Data4: number;
}
declare var CSSM_GUID: CSSM_GUID;

declare const CSSM_HINT_ADDRESS_APP: number;

declare const CSSM_HINT_ADDRESS_SP: number;

declare const CSSM_HINT_NONE: number;

declare const CSSM_INVALID_HANDLE: number;

declare const CSSM_KEYATTR_ALWAYS_SENSITIVE: number;

declare const CSSM_KEYATTR_EXTRACTABLE: number;

declare const CSSM_KEYATTR_MODIFIABLE: number;

declare const CSSM_KEYATTR_NEVER_EXTRACTABLE: number;

declare const CSSM_KEYATTR_PARTIAL: number;

declare const CSSM_KEYATTR_PERMANENT: number;

declare const CSSM_KEYATTR_PRIVATE: number;

declare const CSSM_KEYATTR_PUBLIC_KEY_ENCRYPT: number;

declare const CSSM_KEYATTR_RETURN_DATA: number;

declare const CSSM_KEYATTR_RETURN_DEFAULT: number;

declare const CSSM_KEYATTR_RETURN_NONE: number;

declare const CSSM_KEYATTR_RETURN_REF: number;

declare const CSSM_KEYATTR_SENSITIVE: number;

declare const CSSM_KEYBLOB_OTHER: number;

declare const CSSM_KEYBLOB_RAW: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_BSAFE: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_CCA: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_FIPS186: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_MSCAPI: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_NONE: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_OCTET_STRING: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_OPENSSH: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_OPENSSH2: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_OPENSSL: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_OTHER: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_PGP: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_PKCS1: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_PKCS3: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_PKCS8: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_SPKI: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_VENDOR_DEFINED: number;

declare const CSSM_KEYBLOB_RAW_FORMAT_X509: number;

declare const CSSM_KEYBLOB_REFERENCE: number;

declare const CSSM_KEYBLOB_REF_FORMAT_INTEGER: number;

declare const CSSM_KEYBLOB_REF_FORMAT_OTHER: number;

declare const CSSM_KEYBLOB_REF_FORMAT_SPKI: number;

declare const CSSM_KEYBLOB_REF_FORMAT_STRING: number;

declare const CSSM_KEYBLOB_WRAPPED: number;

declare const CSSM_KEYBLOB_WRAPPED_FORMAT_APPLE_CUSTOM: number;

declare const CSSM_KEYBLOB_WRAPPED_FORMAT_MSCAPI: number;

declare const CSSM_KEYBLOB_WRAPPED_FORMAT_NONE: number;

declare const CSSM_KEYBLOB_WRAPPED_FORMAT_OPENSSH1: number;

declare const CSSM_KEYBLOB_WRAPPED_FORMAT_OPENSSL: number;

declare const CSSM_KEYBLOB_WRAPPED_FORMAT_OTHER: number;

declare const CSSM_KEYBLOB_WRAPPED_FORMAT_PKCS7: number;

declare const CSSM_KEYBLOB_WRAPPED_FORMAT_PKCS8: number;

declare const CSSM_KEYCLASS_OTHER: number;

declare const CSSM_KEYCLASS_PRIVATE_KEY: number;

declare const CSSM_KEYCLASS_PUBLIC_KEY: number;

declare const CSSM_KEYCLASS_SECRET_PART: number;

declare const CSSM_KEYCLASS_SESSION_KEY: number;

declare const CSSM_KEYHEADER_VERSION: number;

declare const CSSM_KEYUSE_ANY: number;

declare const CSSM_KEYUSE_DECRYPT: number;

declare const CSSM_KEYUSE_DERIVE: number;

declare const CSSM_KEYUSE_ENCRYPT: number;

declare const CSSM_KEYUSE_SIGN: number;

declare const CSSM_KEYUSE_SIGN_RECOVER: number;

declare const CSSM_KEYUSE_UNWRAP: number;

declare const CSSM_KEYUSE_VERIFY: number;

declare const CSSM_KEYUSE_VERIFY_RECOVER: number;

declare const CSSM_KEYUSE_WRAP: number;

declare const CSSM_KEY_HIERARCHY_EXPORT: number;

declare const CSSM_KEY_HIERARCHY_INTEG: number;

declare const CSSM_KEY_HIERARCHY_NONE: number;

interface CSSM_KEY_SIZE {
	LogicalKeySizeInBits: number;
	EffectiveKeySizeInBits: number;
}
declare var CSSM_KEY_SIZE: CSSM_KEY_SIZE;

declare const CSSM_KR_BASE_ERROR: number;

interface CSSM_KR_NAME {
	Type: number;
	Length: number;
	Name: string;
}
declare var CSSM_KR_NAME: CSSM_KR_NAME;

declare const CSSM_KR_PRIVATE_ERROR: number;

declare const CSSM_LIST_ELEMENT_DATUM: number;

declare const CSSM_LIST_ELEMENT_SUBLIST: number;

declare const CSSM_LIST_ELEMENT_WORDID: number;

declare const CSSM_LIST_TYPE_CUSTOM: number;

declare const CSSM_LIST_TYPE_SEXPR: number;

declare const CSSM_LIST_TYPE_UNKNOWN: number;

declare const CSSM_MDS_BASE_ERROR: number;

declare const CSSM_MDS_PRIVATE_ERROR: number;

interface CSSM_MEMORY_FUNCS {
	malloc_func: (p1: number, p2: any) => any;
	free_func: (p1: any, p2: any) => void;
	realloc_func: (p1: any, p2: number, p3: any) => any;
	calloc_func: (p1: number, p2: number, p3: any) => any;
	AllocRef: any;
}
declare var CSSM_MEMORY_FUNCS: CSSM_MEMORY_FUNCS;

declare const CSSM_MODULE_STRING_SIZE: number;

interface CSSM_NAME_LIST {
	NumStrings: number;
	String: string;
}
declare var CSSM_NAME_LIST: CSSM_NAME_LIST;

declare const CSSM_NET_PROTO_CMP: number;

declare const CSSM_NET_PROTO_CMPS: number;

declare const CSSM_NET_PROTO_CUSTOM: number;

declare const CSSM_NET_PROTO_FTP: number;

declare const CSSM_NET_PROTO_FTPS: number;

declare const CSSM_NET_PROTO_LDAP: number;

declare const CSSM_NET_PROTO_LDAPNS: number;

declare const CSSM_NET_PROTO_LDAPS: number;

declare const CSSM_NET_PROTO_NONE: number;

declare const CSSM_NET_PROTO_OCSP: number;

declare const CSSM_NET_PROTO_UNSPECIFIED: number;

declare const CSSM_NET_PROTO_X500DAP: number;

declare const CSSM_NOTIFY_FAULT: number;

declare const CSSM_NOTIFY_INSERT: number;

declare const CSSM_NOTIFY_REMOVE: number;

declare const CSSM_OK: number;

declare const CSSM_PADDING_ALTERNATE: number;

declare const CSSM_PADDING_APPLE_SSLv2: number;

declare const CSSM_PADDING_CIPHERSTEALING: number;

declare const CSSM_PADDING_CUSTOM: number;

declare const CSSM_PADDING_FF: number;

declare const CSSM_PADDING_NONE: number;

declare const CSSM_PADDING_ONE: number;

declare const CSSM_PADDING_PKCS1: number;

declare const CSSM_PADDING_PKCS5: number;

declare const CSSM_PADDING_PKCS7: number;

declare const CSSM_PADDING_RANDOM: number;

declare const CSSM_PADDING_SIGRAW: number;

declare const CSSM_PADDING_VENDOR_DEFINED: number;

declare const CSSM_PADDING_ZERO: number;

interface CSSM_PARSED_CERT {
	CertType: number;
	ParsedCertFormat: number;
	ParsedCert: any;
}
declare var CSSM_PARSED_CERT: CSSM_PARSED_CERT;

interface CSSM_PARSED_CRL {
	CrlType: number;
	ParsedCrlFormat: number;
	ParsedCrl: any;
}
declare var CSSM_PARSED_CRL: CSSM_PARSED_CRL;

declare const CSSM_PKCS5_PBKDF2_PRF_HMAC_SHA1: number;

declare const CSSM_PKCS_OAEP_MGF1_MD5: number;

declare const CSSM_PKCS_OAEP_MGF1_SHA1: number;

declare const CSSM_PKCS_OAEP_MGF_NONE: number;

declare const CSSM_PKCS_OAEP_PSOURCE_NONE: number;

declare const CSSM_PKCS_OAEP_PSOURCE_Pspecified: number;

declare const CSSM_PRIVILEGE_SCOPE_NONE: number;

declare const CSSM_PRIVILEGE_SCOPE_PROCESS: number;

declare const CSSM_PRIVILEGE_SCOPE_THREAD: number;

declare const CSSM_PVC_APP: number;

declare const CSSM_PVC_NONE: number;

declare const CSSM_PVC_SP: number;

declare const CSSM_QUERY_RETURN_DATA: number;

declare const CSSM_QUERY_SIZELIMIT_NONE: number;

interface CSSM_QUERY_SIZE_DATA {
	SizeInputBlock: number;
	SizeOutputBlock: number;
}
declare var CSSM_QUERY_SIZE_DATA: CSSM_QUERY_SIZE_DATA;

declare const CSSM_QUERY_TIMELIMIT_NONE: number;

interface CSSM_RANGE {
	Min: number;
	Max: number;
}
declare var CSSM_RANGE: CSSM_RANGE;

declare const CSSM_SAMPLE_TYPE_ASYMMETRIC_KEY: number;

declare const CSSM_SAMPLE_TYPE_BIOMETRIC: number;

declare const CSSM_SAMPLE_TYPE_COMMENT: number;

declare const CSSM_SAMPLE_TYPE_HASHED_PASSWORD: number;

declare const CSSM_SAMPLE_TYPE_KEYBAG_KEY: number;

declare const CSSM_SAMPLE_TYPE_KEYCHAIN_CHANGE_LOCK: number;

declare const CSSM_SAMPLE_TYPE_KEYCHAIN_LOCK: number;

declare const CSSM_SAMPLE_TYPE_KEYCHAIN_PROMPT: number;

declare const CSSM_SAMPLE_TYPE_PASSWORD: number;

declare const CSSM_SAMPLE_TYPE_PREAUTH: number;

declare const CSSM_SAMPLE_TYPE_PROCESS: number;

declare const CSSM_SAMPLE_TYPE_PROMPTED_BIOMETRIC: number;

declare const CSSM_SAMPLE_TYPE_PROMPTED_PASSWORD: number;

declare const CSSM_SAMPLE_TYPE_PROTECTED_BIOMETRIC: number;

declare const CSSM_SAMPLE_TYPE_PROTECTED_PASSWORD: number;

declare const CSSM_SAMPLE_TYPE_RETRY_ID: number;

declare const CSSM_SAMPLE_TYPE_SIGNED_NONCE: number;

declare const CSSM_SAMPLE_TYPE_SIGNED_SECRET: number;

declare const CSSM_SAMPLE_TYPE_SYMMETRIC_KEY: number;

declare const CSSM_SAMPLE_TYPE_THRESHOLD: number;

declare const CSSM_SERVICE_AC: number;

declare const CSSM_SERVICE_CL: number;

declare const CSSM_SERVICE_CSP: number;

declare const CSSM_SERVICE_CSSM: number;

declare const CSSM_SERVICE_DL: number;

declare const CSSM_SERVICE_KR: number;

declare const CSSM_SERVICE_TP: number;

declare const CSSM_TP_ACTION_ALLOW_EXPIRED: number;

declare const CSSM_TP_ACTION_ALLOW_EXPIRED_ROOT: number;

declare const CSSM_TP_ACTION_CRL_SUFFICIENT: number;

declare const CSSM_TP_ACTION_DEFAULT: number;

declare const CSSM_TP_ACTION_FETCH_CERT_FROM_NET: number;

declare const CSSM_TP_ACTION_FETCH_CRL_FROM_NET: number;

declare const CSSM_TP_ACTION_IMPLICIT_ANCHORS: number;

declare const CSSM_TP_ACTION_LEAF_IS_CA: number;

declare const CSSM_TP_ACTION_REQUIRE_CRL_IF_PRESENT: number;

declare const CSSM_TP_ACTION_REQUIRE_CRL_PER_CERT: number;

declare const CSSM_TP_ACTION_REQUIRE_REV_PER_CERT: number;

declare const CSSM_TP_ACTION_TRUST_SETTINGS: number;

interface CSSM_TP_APPLE_EVIDENCE_HEADER {
	Version: number;
}
declare var CSSM_TP_APPLE_EVIDENCE_HEADER: CSSM_TP_APPLE_EVIDENCE_HEADER;

declare const CSSM_TP_AUTHORITY_REQUEST_CERTISSUE: number;

declare const CSSM_TP_AUTHORITY_REQUEST_CERTNOTARIZE: number;

declare const CSSM_TP_AUTHORITY_REQUEST_CERTRESUME: number;

declare const CSSM_TP_AUTHORITY_REQUEST_CERTREVOKE: number;

declare const CSSM_TP_AUTHORITY_REQUEST_CERTSUSPEND: number;

declare const CSSM_TP_AUTHORITY_REQUEST_CERTUSERECOVER: number;

declare const CSSM_TP_AUTHORITY_REQUEST_CERTVERIFY: number;

declare const CSSM_TP_AUTHORITY_REQUEST_CRLISSUE: number;

declare const CSSM_TP_BASE_ERROR: number;

declare const CSSM_TP_BASE_TP_ERROR: number;

declare const CSSM_TP_CERTCHANGE_HOLD: number;

declare const CSSM_TP_CERTCHANGE_NONE: number;

declare const CSSM_TP_CERTCHANGE_NOT_AUTHORIZED: number;

declare const CSSM_TP_CERTCHANGE_OK: number;

declare const CSSM_TP_CERTCHANGE_OKWITHNEWTIME: number;

declare const CSSM_TP_CERTCHANGE_REASON_AFFILIATIONCHANGE: number;

declare const CSSM_TP_CERTCHANGE_REASON_CACOMPROMISE: number;

declare const CSSM_TP_CERTCHANGE_REASON_CEASEOPERATION: number;

declare const CSSM_TP_CERTCHANGE_REASON_HOLDRELEASE: number;

declare const CSSM_TP_CERTCHANGE_REASON_KEYCOMPROMISE: number;

declare const CSSM_TP_CERTCHANGE_REASON_SUPERCEDED: number;

declare const CSSM_TP_CERTCHANGE_REASON_SUSPECTEDCOMPROMISE: number;

declare const CSSM_TP_CERTCHANGE_REASON_UNKNOWN: number;

declare const CSSM_TP_CERTCHANGE_REJECTED: number;

declare const CSSM_TP_CERTCHANGE_RELEASE: number;

declare const CSSM_TP_CERTCHANGE_REVOKE: number;

declare const CSSM_TP_CERTCHANGE_STATUS_UNKNOWN: number;

declare const CSSM_TP_CERTCHANGE_WRONGCA: number;

declare const CSSM_TP_CERTISSUE_NOT_AUTHORIZED: number;

declare const CSSM_TP_CERTISSUE_OK: number;

declare const CSSM_TP_CERTISSUE_OKWITHCERTMODS: number;

declare const CSSM_TP_CERTISSUE_OKWITHSERVICEMODS: number;

declare const CSSM_TP_CERTISSUE_REJECTED: number;

declare const CSSM_TP_CERTISSUE_STATUS_UNKNOWN: number;

declare const CSSM_TP_CERTISSUE_WILL_BE_REVOKED: number;

declare const CSSM_TP_CERTNOTARIZE_NOT_AUTHORIZED: number;

declare const CSSM_TP_CERTNOTARIZE_OK: number;

declare const CSSM_TP_CERTNOTARIZE_OKWITHOUTFIELDS: number;

declare const CSSM_TP_CERTNOTARIZE_OKWITHSERVICEMODS: number;

declare const CSSM_TP_CERTNOTARIZE_REJECTED: number;

declare const CSSM_TP_CERTNOTARIZE_STATUS_UNKNOWN: number;

declare const CSSM_TP_CERTRECLAIM_NOMATCH: number;

declare const CSSM_TP_CERTRECLAIM_NOT_AUTHORIZED: number;

declare const CSSM_TP_CERTRECLAIM_OK: number;

declare const CSSM_TP_CERTRECLAIM_REJECTED: number;

declare const CSSM_TP_CERTRECLAIM_STATUS_UNKNOWN: number;

declare const CSSM_TP_CERTVERIFY_EXPIRED: number;

declare const CSSM_TP_CERTVERIFY_INVALID: number;

declare const CSSM_TP_CERTVERIFY_INVALID_AUTHORITY: number;

declare const CSSM_TP_CERTVERIFY_INVALID_BASIC_CONSTRAINTS: number;

declare const CSSM_TP_CERTVERIFY_INVALID_CERTGROUP: number;

declare const CSSM_TP_CERTVERIFY_INVALID_CERT_VALUE: number;

declare const CSSM_TP_CERTVERIFY_INVALID_CRL_DIST_PT: number;

declare const CSSM_TP_CERTVERIFY_INVALID_NAME_TREE: number;

declare const CSSM_TP_CERTVERIFY_INVALID_POLICY: number;

declare const CSSM_TP_CERTVERIFY_INVALID_POLICY_IDS: number;

declare const CSSM_TP_CERTVERIFY_INVALID_SIGNATURE: number;

declare const CSSM_TP_CERTVERIFY_NOT_VALID_YET: number;

declare const CSSM_TP_CERTVERIFY_REVOKED: number;

declare const CSSM_TP_CERTVERIFY_SUSPENDED: number;

declare const CSSM_TP_CERTVERIFY_UNKNOWN: number;

declare const CSSM_TP_CERTVERIFY_UNKNOWN_CRITICAL_EXT: number;

declare const CSSM_TP_CERTVERIFY_VALID: number;

declare const CSSM_TP_CERT_DIR_UPDATE: number;

declare const CSSM_TP_CERT_NOTIFY_RENEW: number;

declare const CSSM_TP_CERT_PUBLISH: number;

declare const CSSM_TP_CONFIRM_ACCEPT: number;

declare const CSSM_TP_CONFIRM_REJECT: number;

declare const CSSM_TP_CONFIRM_STATUS_UNKNOWN: number;

declare const CSSM_TP_CRLISSUE_INVALID_DOMAIN: number;

declare const CSSM_TP_CRLISSUE_NOT_AUTHORIZED: number;

declare const CSSM_TP_CRLISSUE_NOT_CURRENT: number;

declare const CSSM_TP_CRLISSUE_OK: number;

declare const CSSM_TP_CRLISSUE_REJECTED: number;

declare const CSSM_TP_CRLISSUE_STATUS_UNKNOWN: number;

declare const CSSM_TP_CRLISSUE_UNKNOWN_IDENTIFIER: number;

declare const CSSM_TP_CRL_DISTRIBUTE: number;

declare const CSSM_TP_FORM_TYPE_GENERIC: number;

declare const CSSM_TP_FORM_TYPE_REGISTRATION: number;

declare const CSSM_TP_KEY_ARCHIVE: number;

declare const CSSM_TP_PRIVATE_ERROR: number;

interface CSSM_TP_RESULT_SET {
	NumberOfResults: number;
	Results: any;
}
declare var CSSM_TP_RESULT_SET: CSSM_TP_RESULT_SET;

declare const CSSM_TP_STOP_ON_FIRST_FAIL: number;

declare const CSSM_TP_STOP_ON_FIRST_PASS: number;

declare const CSSM_TP_STOP_ON_NONE: number;

declare const CSSM_TP_STOP_ON_POLICY: number;

declare const CSSM_TRUE: number;

declare const CSSM_USEE_AUTHENTICATION: number;

declare const CSSM_USEE_DOMESTIC: number;

declare const CSSM_USEE_FINANCIAL: number;

declare const CSSM_USEE_INSURANCE: number;

declare const CSSM_USEE_KEYEXCH: number;

declare const CSSM_USEE_KRENT: number;

declare const CSSM_USEE_KRLE: number;

declare const CSSM_USEE_LAST: number;

declare const CSSM_USEE_MEDICAL: number;

declare const CSSM_USEE_NONE: number;

declare const CSSM_USEE_SSL: number;

declare const CSSM_USEE_WEAK: number;

declare const CSSM_VALUE_NOT_AVAILABLE: number;

interface CSSM_VERSION {
	Major: number;
	Minor: number;
}
declare var CSSM_VERSION: CSSM_VERSION;

declare const CSSM_WORDID_A: number;

declare const CSSM_WORDID_ACL: number;

declare const CSSM_WORDID_ALPHA: number;

declare const CSSM_WORDID_ASYMMETRIC_KEY: number;

declare const CSSM_WORDID_B: number;

declare const CSSM_WORDID_BER: number;

declare const CSSM_WORDID_BINARY: number;

declare const CSSM_WORDID_BIOMETRIC: number;

declare const CSSM_WORDID_C: number;

declare const CSSM_WORDID_CANCELED: number;

declare const CSSM_WORDID_CERT: number;

declare const CSSM_WORDID_COMMENT: number;

declare const CSSM_WORDID_CRL: number;

declare const CSSM_WORDID_CUSTOM: number;

declare const CSSM_WORDID_D: number;

declare const CSSM_WORDID_DATE: number;

declare const CSSM_WORDID_DBS_CREATE: number;

declare const CSSM_WORDID_DBS_DELETE: number;

declare const CSSM_WORDID_DB_DELETE: number;

declare const CSSM_WORDID_DB_EXEC_STORED_QUERY: number;

declare const CSSM_WORDID_DB_INSERT: number;

declare const CSSM_WORDID_DB_MODIFY: number;

declare const CSSM_WORDID_DB_READ: number;

declare const CSSM_WORDID_DECRYPT: number;

declare const CSSM_WORDID_DELETE: number;

declare const CSSM_WORDID_DELTA_CRL: number;

declare const CSSM_WORDID_DER: number;

declare const CSSM_WORDID_DERIVE: number;

declare const CSSM_WORDID_DISPLAY: number;

declare const CSSM_WORDID_DO: number;

declare const CSSM_WORDID_DSA: number;

declare const CSSM_WORDID_DSA_SHA1: number;

declare const CSSM_WORDID_E: number;

declare const CSSM_WORDID_ELGAMAL: number;

declare const CSSM_WORDID_ENCRYPT: number;

declare const CSSM_WORDID_ENTRY: number;

declare const CSSM_WORDID_EXPORT_CLEAR: number;

declare const CSSM_WORDID_EXPORT_WRAPPED: number;

declare const CSSM_WORDID_G: number;

declare const CSSM_WORDID_GE: number;

declare const CSSM_WORDID_GENKEY: number;

declare const CSSM_WORDID_HASH: number;

declare const CSSM_WORDID_HASHED_PASSWORD: number;

declare const CSSM_WORDID_HASHED_SUBJECT: number;

declare const CSSM_WORDID_HAVAL: number;

declare const CSSM_WORDID_IBCHASH: number;

declare const CSSM_WORDID_IMPORT_CLEAR: number;

declare const CSSM_WORDID_IMPORT_WRAPPED: number;

declare const CSSM_WORDID_INTEL: number;

declare const CSSM_WORDID_ISSUER: number;

declare const CSSM_WORDID_ISSUER_INFO: number;

declare const CSSM_WORDID_KEA: number;

declare const CSSM_WORDID_KEY: number;

declare const CSSM_WORDID_KEYBAG_KEY: number;

declare const CSSM_WORDID_KEYCHAIN_CHANGE_LOCK: number;

declare const CSSM_WORDID_KEYCHAIN_LOCK: number;

declare const CSSM_WORDID_KEYCHAIN_PROMPT: number;

declare const CSSM_WORDID_KEYHOLDER: number;

declare const CSSM_WORDID_K_OF_N: number;

declare const CSSM_WORDID_L: number;

declare const CSSM_WORDID_LE: number;

declare const CSSM_WORDID_LOGIN: number;

declare const CSSM_WORDID_LOGIN_NAME: number;

declare const CSSM_WORDID_MAC: number;

declare const CSSM_WORDID_MD2: number;

declare const CSSM_WORDID_MD2WITHRSA: number;

declare const CSSM_WORDID_MD4: number;

declare const CSSM_WORDID_MD5: number;

declare const CSSM_WORDID_MD5WITHRSA: number;

declare const CSSM_WORDID_N: number;

declare const CSSM_WORDID_NAME: number;

declare const CSSM_WORDID_NDR: number;

declare const CSSM_WORDID_NHASH: number;

declare const CSSM_WORDID_NOT_AFTER: number;

declare const CSSM_WORDID_NOT_BEFORE: number;

declare const CSSM_WORDID_NULL: number;

declare const CSSM_WORDID_NUMERIC: number;

declare const CSSM_WORDID_OBJECT_HASH: number;

declare const CSSM_WORDID_ONE_TIME: number;

declare const CSSM_WORDID_ONLINE: number;

declare const CSSM_WORDID_OWNER: number;

declare const CSSM_WORDID_P: number;

declare const CSSM_WORDID_PAM_NAME: number;

declare const CSSM_WORDID_PARTITION: number;

declare const CSSM_WORDID_PASSWORD: number;

declare const CSSM_WORDID_PGP: number;

declare const CSSM_WORDID_PIN: number;

declare const CSSM_WORDID_PREAUTH: number;

declare const CSSM_WORDID_PREAUTH_SOURCE: number;

declare const CSSM_WORDID_PREFIX: number;

declare const CSSM_WORDID_PRIVATE_KEY: number;

declare const CSSM_WORDID_PROCESS: number;

declare const CSSM_WORDID_PROMPTED_BIOMETRIC: number;

declare const CSSM_WORDID_PROMPTED_PASSWORD: number;

declare const CSSM_WORDID_PROPAGATE: number;

declare const CSSM_WORDID_PROTECTED_BIOMETRIC: number;

declare const CSSM_WORDID_PROTECTED_PASSWORD: number;

declare const CSSM_WORDID_PROTECTED_PIN: number;

declare const CSSM_WORDID_PUBLIC_KEY: number;

declare const CSSM_WORDID_PUBLIC_KEY_FROM_CERT: number;

declare const CSSM_WORDID_Q: number;

declare const CSSM_WORDID_RANGE: number;

declare const CSSM_WORDID_REVAL: number;

declare const CSSM_WORDID_RIPEMAC: number;

declare const CSSM_WORDID_RIPEMD: number;

declare const CSSM_WORDID_RIPEMD160: number;

declare const CSSM_WORDID_RSA: number;

declare const CSSM_WORDID_RSA_ISO9796: number;

declare const CSSM_WORDID_RSA_PKCS: number;

declare const CSSM_WORDID_RSA_PKCS1: number;

declare const CSSM_WORDID_RSA_PKCS1_MD5: number;

declare const CSSM_WORDID_RSA_PKCS1_SHA1: number;

declare const CSSM_WORDID_RSA_PKCS1_SIG: number;

declare const CSSM_WORDID_RSA_PKCS_MD5: number;

declare const CSSM_WORDID_RSA_PKCS_SHA1: number;

declare const CSSM_WORDID_RSA_RAW: number;

declare const CSSM_WORDID_SDSIV1: number;

declare const CSSM_WORDID_SEQUENCE: number;

declare const CSSM_WORDID_SET: number;

declare const CSSM_WORDID_SEXPR: number;

declare const CSSM_WORDID_SHA1: number;

declare const CSSM_WORDID_SHA1WITHDSA: number;

declare const CSSM_WORDID_SHA1WITHECDSA: number;

declare const CSSM_WORDID_SHA1WITHRSA: number;

declare const CSSM_WORDID_SIGN: number;

declare const CSSM_WORDID_SIGNATURE: number;

declare const CSSM_WORDID_SIGNED_NONCE: number;

declare const CSSM_WORDID_SIGNED_SECRET: number;

declare const CSSM_WORDID_SPKI: number;

declare const CSSM_WORDID_SUBJECT: number;

declare const CSSM_WORDID_SUBJECT_INFO: number;

declare const CSSM_WORDID_SYMMETRIC_KEY: number;

declare const CSSM_WORDID_SYSTEM: number;

declare const CSSM_WORDID_TAG: number;

declare const CSSM_WORDID_THRESHOLD: number;

declare const CSSM_WORDID_TIME: number;

declare const CSSM_WORDID_URI: number;

declare const CSSM_WORDID_VENDOR_END: number;

declare const CSSM_WORDID_VENDOR_START: number;

declare const CSSM_WORDID_VERSION: number;

declare const CSSM_WORDID_X509V1: number;

declare const CSSM_WORDID_X509V2: number;

declare const CSSM_WORDID_X509V3: number;

declare const CSSM_WORDID_X509_ATTRIBUTE: number;

declare const CSSM_WORDID_X9_ATTRIBUTE: number;

declare const CSSM_WORDID__FIRST_UNUSED: number;

declare const CSSM_WORDID__NLU_: number;

declare const CSSM_WORDID__RESERVED_1: number;

declare const CSSM_WORDID__STAR_: number;

declare const CSSM_WORDID__UNK_: number;

enum CSSM_X509EXT_DATA_FORMAT {

	X509_DATAFORMAT_ENCODED = 0,

	X509_DATAFORMAT_PARSED = 1,

	X509_DATAFORMAT_PAIR = 2
}


interface DERItem {
	data: string;
	length: number;
}
declare var DERItem: DERItem;

interface OS_sec_certificate extends NSObjectProtocol {
}
declare var OS_sec_certificate: {

	prototype: OS_sec_certificate;
};

interface OS_sec_identity extends NSObjectProtocol {
}
declare var OS_sec_identity: {

	prototype: OS_sec_identity;
};

interface OS_sec_object extends NSObjectProtocol {
}
declare var OS_sec_object: {

	prototype: OS_sec_object;
};

interface OS_sec_protocol_metadata extends NSObjectProtocol {
}
declare var OS_sec_protocol_metadata: {

	prototype: OS_sec_protocol_metadata;
};

interface OS_sec_protocol_options extends NSObjectProtocol {
}
declare var OS_sec_protocol_options: {

	prototype: OS_sec_protocol_options;
};

interface OS_sec_trust extends NSObjectProtocol {
}
declare var OS_sec_trust: {

	prototype: OS_sec_trust;
};

enum SSLAuthenticate {

	kNeverAuthenticate = 0,

	kAlwaysAuthenticate = 1,

	kTryAuthenticate = 2
}


enum SSLCiphersuiteGroup {

	kSSLCiphersuiteGroupDefault = 0,

	kSSLCiphersuiteGroupCompatibility = 1,

	kSSLCiphersuiteGroupLegacy = 2,

	kSSLCiphersuiteGroupATS = 3,

	kSSLCiphersuiteGroupATSCompatibility = 4
}


enum SSLClientCertificateState {

	kSSLClientCertNone = 0,

	kSSLClientCertRequested = 1,

	kSSLClientCertSent = 2,

	kSSLClientCertRejected = 3
}


enum SSLConnectionType {

	kSSLStreamType = 0,

	kSSLDatagramType = 1
}


enum SSLProtocol {

	kSSLProtocolUnknown = 0,

	kTLSProtocol1 = 4,

	kTLSProtocol11 = 7,

	kTLSProtocol12 = 8,

	kDTLSProtocol1 = 9,

	kTLSProtocol13 = 10,

	kDTLSProtocol12 = 11,

	kTLSProtocolMaxSupported = 999,

	kSSLProtocol2 = 1,

	kSSLProtocol3 = 2,

	kSSLProtocol3Only = 3,

	kTLSProtocol1Only = 5,

	kSSLProtocolAll = 6
}


enum SSLProtocolSide {

	kSSLServerSide = 0,

	kSSLClientSide = 1
}


enum SSLSessionOption {

	kSSLSessionOptionBreakOnServerAuth = 0,

	kSSLSessionOptionBreakOnCertRequested = 1,

	kSSLSessionOptionBreakOnClientAuth = 2,

	kSSLSessionOptionFalseStart = 3,

	kSSLSessionOptionSendOneByteRecord = 4,

	kSSLSessionOptionAllowServerIdentityChange = 5,

	kSSLSessionOptionFallback = 6,

	kSSLSessionOptionBreakOnClientHello = 7,

	kSSLSessionOptionAllowRenegotiation = 8,

	kSSLSessionOptionEnableSessionTickets = 9
}


enum SSLSessionState {

	kSSLIdle = 0,

	kSSLHandshake = 1,

	kSSLConnected = 2,

	kSSLClosed = 3,

	kSSLAborted = 4
}


declare const SSL_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: number;

declare const SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA: number;

declare const SSL_DHE_DSS_WITH_DES_CBC_SHA: number;

declare const SSL_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: number;

declare const SSL_DHE_RSA_WITH_3DES_EDE_CBC_SHA: number;

declare const SSL_DHE_RSA_WITH_DES_CBC_SHA: number;

declare const SSL_DH_DSS_EXPORT_WITH_DES40_CBC_SHA: number;

declare const SSL_DH_DSS_WITH_3DES_EDE_CBC_SHA: number;

declare const SSL_DH_DSS_WITH_DES_CBC_SHA: number;

declare const SSL_DH_RSA_EXPORT_WITH_DES40_CBC_SHA: number;

declare const SSL_DH_RSA_WITH_3DES_EDE_CBC_SHA: number;

declare const SSL_DH_RSA_WITH_DES_CBC_SHA: number;

declare const SSL_DH_anon_EXPORT_WITH_DES40_CBC_SHA: number;

declare const SSL_DH_anon_EXPORT_WITH_RC4_40_MD5: number;

declare const SSL_DH_anon_WITH_3DES_EDE_CBC_SHA: number;

declare const SSL_DH_anon_WITH_DES_CBC_SHA: number;

declare const SSL_DH_anon_WITH_RC4_128_MD5: number;

declare const SSL_FORTEZZA_DMS_WITH_FORTEZZA_CBC_SHA: number;

declare const SSL_FORTEZZA_DMS_WITH_NULL_SHA: number;

declare const SSL_NO_SUCH_CIPHERSUITE: number;

declare const SSL_NULL_WITH_NULL_NULL: number;

declare const SSL_RSA_EXPORT_WITH_DES40_CBC_SHA: number;

declare const SSL_RSA_EXPORT_WITH_RC2_CBC_40_MD5: number;

declare const SSL_RSA_EXPORT_WITH_RC4_40_MD5: number;

declare const SSL_RSA_WITH_3DES_EDE_CBC_MD5: number;

declare const SSL_RSA_WITH_3DES_EDE_CBC_SHA: number;

declare const SSL_RSA_WITH_DES_CBC_MD5: number;

declare const SSL_RSA_WITH_DES_CBC_SHA: number;

declare const SSL_RSA_WITH_IDEA_CBC_MD5: number;

declare const SSL_RSA_WITH_IDEA_CBC_SHA: number;

declare const SSL_RSA_WITH_NULL_MD5: number;

declare const SSL_RSA_WITH_NULL_SHA: number;

declare const SSL_RSA_WITH_RC2_CBC_MD5: number;

declare const SSL_RSA_WITH_RC4_128_MD5: number;

declare const SSL_RSA_WITH_RC4_128_SHA: number;

declare function SecACLCopyAuthorizations(acl: any): NSArray<any>;

declare function SecACLCopyContents(acl: any, applicationList: NSArray<any>, description: string, promptSelector: SecKeychainPromptSelector): number;

declare function SecACLCreateWithSimpleContents(access: any, applicationList: NSArray<any> | any[], description: string, promptSelector: SecKeychainPromptSelector, newAcl: any): number;

declare function SecACLGetTypeID(): number;

declare function SecACLRemove(aclRef: any): number;

declare function SecACLSetContents(acl: any, applicationList: NSArray<any> | any[], description: string, promptSelector: SecKeychainPromptSelector): number;

declare function SecACLUpdateAuthorizations(acl: any, authorizations: NSArray<any> | any[]): number;

enum SecAccessControlCreateFlags {

	kSecAccessControlUserPresence = 1,

	kSecAccessControlBiometryAny = 2,

	kSecAccessControlTouchIDAny = 2,

	kSecAccessControlBiometryCurrentSet = 8,

	kSecAccessControlTouchIDCurrentSet = 8,

	kSecAccessControlDevicePasscode = 16,

	kSecAccessControlWatch = 32,

	kSecAccessControlOr = 16384,

	kSecAccessControlAnd = 32768,

	kSecAccessControlPrivateKeyUsage = 1073741824,

	kSecAccessControlApplicationPassword = 2147483648
}


declare function SecAccessControlCreateWithFlags(allocator: any, protection: any, flags: SecAccessControlCreateFlags, error: NSError): any;

declare function SecAccessControlGetTypeID(): number;

declare function SecAccessCopyACLList(accessRef: any, aclList: NSArray<any>): number;

declare function SecAccessCopyMatchingACLList(accessRef: any, authorizationTag: any): NSArray<any>;

declare function SecAccessCopyOwnerAndACL(accessRef: any, userId: number, groupId: number, ownerType: number, aclList: NSArray<any>): number;

declare function SecAccessCreate(descriptor: string, trustedlist: NSArray<any> | any[], accessRef: any): number;

declare function SecAccessCreateWithOwnerAndACL(userId: number, groupId: number, ownerType: number, acls: NSArray<any> | any[], error: NSError): any;

declare function SecAccessGetTypeID(): number;

interface SecAsn1AlgId {
	algorithm: SecAsn1Item;
	parameters: SecAsn1Item;
}
declare var SecAsn1AlgId: SecAsn1AlgId;

declare function SecAsn1AllocCopy(coder: any, src: any, len: number, dest: SecAsn1Item): number;

declare function SecAsn1AllocCopyItem(coder: any, src: SecAsn1Item, dest: SecAsn1Item): number;

declare function SecAsn1AllocItem(coder: any, item: SecAsn1Item, len: number): number;

declare function SecAsn1CoderCreate(coder: any): number;

declare function SecAsn1CoderRelease(coder: any): number;

declare function SecAsn1Decode(coder: any, src: any, len: number, templates: SecAsn1Template, dest: any): number;

declare function SecAsn1DecodeData(coder: any, src: SecAsn1Item, templ: SecAsn1Template, dest: any): number;

declare function SecAsn1EncodeItem(coder: any, src: any, templates: SecAsn1Template, dest: SecAsn1Item): number;

interface SecAsn1Item {
	Length: number;
	Data: string;
}
declare var SecAsn1Item: SecAsn1Item;

declare function SecAsn1Malloc(coder: any, len: number): any;

declare function SecAsn1OidCompare(oid1: SecAsn1Item, oid2: SecAsn1Item): boolean;

interface SecAsn1PubKeyInfo {
	algorithm: SecAsn1AlgId;
	subjectPublicKey: SecAsn1Item;
}
declare var SecAsn1PubKeyInfo: SecAsn1PubKeyInfo;

interface SecAsn1Template {
	kind: number;
	offset: number;
	sub: any;
	size: number;
}
declare var SecAsn1Template: SecAsn1Template;

enum SecAuthenticationType {

	kSecAuthenticationTypeNTLM = 1835824238,

	kSecAuthenticationTypeMSN = 1634628461,

	kSecAuthenticationTypeDPA = 1633775716,

	kSecAuthenticationTypeRPA = 1633775730,

	kSecAuthenticationTypeHTTPBasic = 1886680168,

	kSecAuthenticationTypeHTTPDigest = 1685353576,

	kSecAuthenticationTypeHTMLForm = 1836216166,

	kSecAuthenticationTypeDefault = 1953261156,

	kSecAuthenticationTypeAny = 0
}


enum SecCSDigestAlgorithm {

	kSecCodeSignatureNoHash = 0,

	kSecCodeSignatureHashSHA1 = 1,

	kSecCodeSignatureHashSHA256 = 2,

	kSecCodeSignatureHashSHA256Truncated = 3,

	kSecCodeSignatureHashSHA384 = 4,

	kSecCodeSignatureHashSHA512 = 5
}


enum SecCSFlags {

	kSecCSDefaultFlags = 0,

	kSecCSConsiderExpiration = 2147483648,

	kSecCSEnforceRevocationChecks = 1073741824,

	kSecCSNoNetworkAccess = 536870912,

	kSecCSReportProgress = 268435456,

	kSecCSCheckTrustedAnchors = 134217728,

	kSecCSQuickCheck = 67108864
}


declare function SecCertificateAddToKeychain(certificate: any, keychain: any): number;

declare function SecCertificateCopyCommonName(certificate: any, commonName: string): number;

declare function SecCertificateCopyData(certificate: any): NSData;

declare function SecCertificateCopyEmailAddresses(certificate: any, emailAddresses: NSArray<any>): number;

declare function SecCertificateCopyKey(certificate: any): any;

declare function SecCertificateCopyLongDescription(alloc: any, certificate: any, error: NSError): string;

declare function SecCertificateCopyNormalizedIssuerSequence(certificate: any): NSData;

declare function SecCertificateCopyNormalizedSubjectSequence(certificate: any): NSData;

declare function SecCertificateCopyPreferred(name: string, keyUsage: NSArray<any> | any[]): any;

declare function SecCertificateCopySerialNumberData(certificate: any, error: NSError): NSData;

declare function SecCertificateCopyShortDescription(alloc: any, certificate: any, error: NSError): string;

declare function SecCertificateCopySubjectSummary(certificate: any): string;

declare function SecCertificateCopyValues(certificate: any, keys: NSArray<any> | any[], error: NSError): NSDictionary<any, any>;

declare function SecCertificateCreateWithData(allocator: any, data: NSData): any;

declare function SecCertificateGetTypeID(): number;

declare function SecCertificateSetPreferred(certificate: any, name: string, keyUsage: NSArray<any> | any[]): number;

declare function SecCodeCheckValidity(code: any, flags: SecCSFlags, requirement: any): number;

declare function SecCodeCheckValidityWithErrors(code: any, flags: SecCSFlags, requirement: any, errors: NSError): number;

declare function SecCodeCopyDesignatedRequirement(code: any, flags: SecCSFlags, requirement: any): number;

declare function SecCodeCopyGuestWithAttributes(host: any, attributes: NSDictionary<any, any>, flags: SecCSFlags, guest: any): number;

declare function SecCodeCopyHost(guest: any, flags: SecCSFlags, host: any): number;

declare function SecCodeCopyPath(staticCode: any, flags: SecCSFlags, path: NSURL): number;

declare function SecCodeCopySelf(flags: SecCSFlags, self: any): number;

declare function SecCodeCopySigningInformation(code: any, flags: SecCSFlags, information: NSDictionary<any, any>): number;

declare function SecCodeCopyStaticCode(code: any, flags: SecCSFlags, staticCode: any): number;

declare function SecCodeGetTypeID(): number;

declare function SecCodeMapMemory(code: any, flags: SecCSFlags): number;

enum SecCodeSignatureFlags {

	kSecCodeSignatureHost = 1,

	kSecCodeSignatureAdhoc = 2,

	kSecCodeSignatureForceHard = 256,

	kSecCodeSignatureForceKill = 512,

	kSecCodeSignatureForceExpiration = 1024,

	kSecCodeSignatureRestrict = 2048,

	kSecCodeSignatureEnforcement = 4096,

	kSecCodeSignatureLibraryValidation = 8192,

	kSecCodeSignatureRuntime = 65536
}


enum SecCodeStatus {

	kSecCodeStatusValid = 1,

	kSecCodeStatusHard = 256,

	kSecCodeStatusKill = 512,

	kSecCodeStatusDebugged = 268435456,

	kSecCodeStatusPlatform = 67108864
}


declare function SecCopyErrorMessageString(status: number, reserved: any): string;

enum SecCredentialType {

	kSecCredentialTypeDefault = 0,

	kSecCredentialTypeWithUI = 1,

	kSecCredentialTypeNoUI = 2
}


declare function SecDecodeTransformCreate(DecodeType: any, error: NSError): any;

declare function SecDecryptTransformCreate(keyRef: any, error: NSError): any;

declare function SecDecryptTransformGetTypeID(): number;

declare function SecDigestTransformCreate(digestType: any, digestLength: number, error: NSError): any;

declare function SecDigestTransformGetTypeID(): number;

declare function SecEncodeTransformCreate(encodeType: any, error: NSError): any;

declare function SecEncryptTransformCreate(keyRef: any, error: NSError): any;

declare function SecEncryptTransformGetTypeID(): number;

enum SecExternalFormat {

	kSecFormatUnknown = 0,

	kSecFormatOpenSSL = 1,

	kSecFormatSSH = 2,

	kSecFormatBSAFE = 3,

	kSecFormatRawKey = 4,

	kSecFormatWrappedPKCS8 = 5,

	kSecFormatWrappedOpenSSL = 6,

	kSecFormatWrappedSSH = 7,

	kSecFormatWrappedLSH = 8,

	kSecFormatX509Cert = 9,

	kSecFormatPEMSequence = 10,

	kSecFormatPKCS7 = 11,

	kSecFormatPKCS12 = 12,

	kSecFormatNetscapeCertSequence = 13,

	kSecFormatSSHv2 = 14
}


enum SecExternalItemType {

	kSecItemTypeUnknown = 0,

	kSecItemTypePrivateKey = 1,

	kSecItemTypePublicKey = 2,

	kSecItemTypeSessionKey = 3,

	kSecItemTypeCertificate = 4,

	kSecItemTypeAggregate = 5
}


declare function SecGroupTransformGetTypeID(): number;

declare function SecIdentityCopyCertificate(identityRef: any, certificateRef: any): number;

declare function SecIdentityCopyPreferred(name: string, keyUsage: NSArray<any> | any[], validIssuers: NSArray<any> | any[]): any;

declare function SecIdentityCopyPrivateKey(identityRef: any, privateKeyRef: any): number;

declare function SecIdentityCopySystemIdentity(domain: string, idRef: any, actualDomain: string): number;

declare function SecIdentityCreateWithCertificate(keychainOrArray: any, certificateRef: any, identityRef: any): number;

declare function SecIdentityGetTypeID(): number;

declare function SecIdentitySetPreferred(identity: any, name: string, keyUsage: NSArray<any> | any[]): number;

declare function SecIdentitySetSystemIdentity(domain: string, idRef: any): number;

declare function SecItemAdd(attributes: NSDictionary<any, any>, result: any): number;

enum SecItemAttr {

	kSecCreationDateItemAttr = 1667522932,

	kSecModDateItemAttr = 1835295092,

	kSecDescriptionItemAttr = 1684370275,

	kSecCommentItemAttr = 1768123764,

	kSecCreatorItemAttr = 1668445298,

	kSecTypeItemAttr = 1954115685,

	kSecScriptCodeItemAttr = 1935897200,

	kSecLabelItemAttr = 1818321516,

	kSecInvisibleItemAttr = 1768846953,

	kSecNegativeItemAttr = 1852139361,

	kSecCustomIconItemAttr = 1668641641,

	kSecAccountItemAttr = 1633903476,

	kSecServiceItemAttr = 1937138533,

	kSecGenericItemAttr = 1734700641,

	kSecSecurityDomainItemAttr = 1935961454,

	kSecServerItemAttr = 1936881266,

	kSecAuthenticationTypeItemAttr = 1635023216,

	kSecPortItemAttr = 1886351988,

	kSecPathItemAttr = 1885434984,

	kSecVolumeItemAttr = 1986817381,

	kSecAddressItemAttr = 1633969266,

	kSecSignatureItemAttr = 1936943463,

	kSecProtocolItemAttr = 1886675820,

	kSecCertificateType = 1668577648,

	kSecCertificateEncoding = 1667591779,

	kSecCrlType = 1668445296,

	kSecCrlEncoding = 1668443747,

	kSecAlias = 1634494835
}


enum SecItemClass {

	kSecInternetPasswordItemClass = 1768842612,

	kSecGenericPasswordItemClass = 1734700656,

	kSecAppleSharePasswordItemClass = 1634953328,

	kSecCertificateItemClass = 2147487744,

	kSecPublicKeyItemClass = 15,

	kSecPrivateKeyItemClass = 16,

	kSecSymmetricKeyItemClass = 17
}


declare function SecItemCopyMatching(query: NSDictionary<any, any>, result: any): number;

declare function SecItemDelete(query: NSDictionary<any, any>): number;

declare function SecItemExport(secItemOrArray: any, outputFormat: SecExternalFormat, flags: SecItemImportExportFlags, keyParams: SecItemImportExportKeyParameters, exportedData: NSData): number;

declare function SecItemImport(importedData: NSData, fileNameOrExtension: string, inputFormat: SecExternalFormat, itemType: SecExternalItemType, flags: SecItemImportExportFlags, keyParams: SecItemImportExportKeyParameters, importKeychain: any, outItems: NSArray<any>): number;

enum SecItemImportExportFlags {

	kSecItemPemArmour = 1
}


interface SecItemImportExportKeyParameters {
	version: number;
	flags: SecKeyImportExportFlags;
	passphrase: any;
	alertTitle: string;
	alertPrompt: string;
	accessRef: any;
	keyUsage: NSArray<any>;
	keyAttributes: NSArray<any>;
}
declare var SecItemImportExportKeyParameters: SecItemImportExportKeyParameters;

declare function SecItemUpdate(query: NSDictionary<any, any>, attributesToUpdate: NSDictionary<any, any>): number;

declare function SecKeyCopyAttributes(key: any): NSDictionary<any, any>;

declare function SecKeyCopyExternalRepresentation(key: any, error: NSError): NSData;

declare function SecKeyCopyKeyExchangeResult(privateKey: any, algorithm: any, publicKey: any, parameters: NSDictionary<any, any>, error: NSError): NSData;

declare function SecKeyCopyPublicKey(key: any): any;

declare function SecKeyCreateDecryptedData(key: any, algorithm: any, ciphertext: NSData, error: NSError): NSData;

declare function SecKeyCreateEncryptedData(key: any, algorithm: any, plaintext: NSData, error: NSError): NSData;

declare function SecKeyCreateFromData(parameters: NSDictionary<any, any>, keyData: NSData, error: NSError): any;

declare function SecKeyCreateRandomKey(parameters: NSDictionary<any, any>, error: NSError): any;

declare function SecKeyCreateSignature(key: any, algorithm: any, dataToSign: NSData, error: NSError): NSData;

declare function SecKeyCreateWithData(keyData: NSData, attributes: NSDictionary<any, any>, error: NSError): any;

declare function SecKeyDeriveFromPassword(password: string, parameters: NSDictionary<any, any>, error: NSError): any;

declare function SecKeyGeneratePair(parameters: NSDictionary<any, any>, publicKey: any, privateKey: any): number;

declare function SecKeyGeneratePairAsync(parameters: NSDictionary<any, any>, deliveryQueue: NSObject, result: (p1: any, p2: any, p3: NSError) => void): void;

declare function SecKeyGenerateSymmetric(parameters: NSDictionary<any, any>, error: NSError): any;

declare function SecKeyGetBlockSize(key: any): number;

declare function SecKeyGetTypeID(): number;

enum SecKeyImportExportFlags {

	kSecKeyImportOnlyOne = 1,

	kSecKeySecurePassphrase = 2,

	kSecKeyNoAccessControl = 4
}


interface SecKeyImportExportParameters {
	version: number;
	flags: SecKeyImportExportFlags;
	passphrase: any;
	alertTitle: string;
	alertPrompt: string;
	accessRef: any;
	keyUsage: number;
	keyAttributes: number;
}
declare var SecKeyImportExportParameters: SecKeyImportExportParameters;

declare function SecKeyIsAlgorithmSupported(key: any, operation: SecKeyOperationType, algorithm: any): boolean;

enum SecKeyOperationType {

	kSecKeyOperationTypeSign = 0,

	kSecKeyOperationTypeVerify = 1,

	kSecKeyOperationTypeEncrypt = 2,

	kSecKeyOperationTypeDecrypt = 3,

	kSecKeyOperationTypeKeyExchange = 4
}


enum SecKeySizes {

	kSecDefaultKeySize = 0,

	kSec3DES192 = 192,

	kSecAES128 = 128,

	kSecAES192 = 192,

	kSecAES256 = 256,

	kSecp192r1 = 192,

	kSecp256r1 = 256,

	kSecp384r1 = 384,

	kSecp521r1 = 521,

	kSecRSAMin = 1024,

	kSecRSAMax = 4096
}


declare function SecKeyUnwrapSymmetric(keyToUnwrap: NSData, unwrappingKey: any, parameters: NSDictionary<any, any>, error: NSError): any;

enum SecKeyUsage {

	kSecKeyUsageUnspecified = 0,

	kSecKeyUsageDigitalSignature = 1,

	kSecKeyUsageNonRepudiation = 2,

	kSecKeyUsageContentCommitment = 2,

	kSecKeyUsageKeyEncipherment = 4,

	kSecKeyUsageDataEncipherment = 8,

	kSecKeyUsageKeyAgreement = 16,

	kSecKeyUsageKeyCertSign = 32,

	kSecKeyUsageCRLSign = 64,

	kSecKeyUsageEncipherOnly = 128,

	kSecKeyUsageDecipherOnly = 256,

	kSecKeyUsageCritical = 2147483648,

	kSecKeyUsageAll = 2147483647
}


declare function SecKeyVerifySignature(key: any, algorithm: any, signedData: NSData, signature: NSData, error: NSError): boolean;

declare function SecKeyWrapSymmetric(keyToWrap: any, wrappingKey: any, parameters: NSDictionary<any, any>, error: NSError): NSData;

declare function SecKeychainAddCallback(callbackFunction: (p1: SecKeychainEvent, p2: SecKeychainCallbackInfo, p3: any) => number, eventMask: SecKeychainEventMask, userContext: any): number;

declare function SecKeychainAddGenericPassword(keychain: any, serviceNameLength: number, serviceName: string | any, accountNameLength: number, accountName: string | any, passwordLength: number, passwordData: any, itemRef: any): number;

declare function SecKeychainAddInternetPassword(keychain: any, serverNameLength: number, serverName: string | any, securityDomainLength: number, securityDomain: string | any, accountNameLength: number, accountName: string | any, pathLength: number, path: string | any, port: number, protocol: SecProtocolType, authenticationType: SecAuthenticationType, passwordLength: number, passwordData: any, itemRef: any): number;

interface SecKeychainAttribute {
	tag: number;
	length: number;
	data: any;
}
declare var SecKeychainAttribute: SecKeychainAttribute;

interface SecKeychainAttributeInfo {
	count: number;
	tag: number;
	format: number;
}
declare var SecKeychainAttributeInfo: SecKeychainAttributeInfo;

declare function SecKeychainAttributeInfoForItemID(keychain: any, itemID: number, info: SecKeychainAttributeInfo): number;

interface SecKeychainAttributeList {
	count: number;
	attr: SecKeychainAttribute;
}
declare var SecKeychainAttributeList: SecKeychainAttributeList;

interface SecKeychainCallbackInfo {
	version: number;
	item: any;
	keychain: any;
	pid: number;
}
declare var SecKeychainCallbackInfo: SecKeychainCallbackInfo;

declare function SecKeychainCopyDefault(keychain: any): number;

declare function SecKeychainCopyDomainDefault(domain: SecPreferencesDomain, keychain: any): number;

declare function SecKeychainCopyDomainSearchList(domain: SecPreferencesDomain, searchList: NSArray<any>): number;

declare function SecKeychainCopySearchList(searchList: NSArray<any>): number;

declare function SecKeychainCopySettings(keychain: any, outSettings: SecKeychainSettings): number;

declare function SecKeychainCreate(pathName: string | any, passwordLength: number, password: any, promptUser: boolean, initialAccess: any, keychain: any): number;

declare function SecKeychainDelete(keychainOrArray: any): number;

enum SecKeychainEvent {

	kSecLockEvent = 1,

	kSecUnlockEvent = 2,

	kSecAddEvent = 3,

	kSecDeleteEvent = 4,

	kSecUpdateEvent = 5,

	kSecPasswordChangedEvent = 6,

	kSecDefaultChangedEvent = 9,

	kSecDataAccessEvent = 10,

	kSecKeychainListChangedEvent = 11,

	kSecTrustSettingsChangedEvent = 12
}


enum SecKeychainEventMask {

	kSecLockEventMask = 2,

	kSecUnlockEventMask = 4,

	kSecAddEventMask = 8,

	kSecDeleteEventMask = 16,

	kSecUpdateEventMask = 32,

	kSecPasswordChangedEventMask = 64,

	kSecDefaultChangedEventMask = 512,

	kSecDataAccessEventMask = 1024,

	kSecKeychainListChangedMask = 2048,

	kSecTrustSettingsChangedEventMask = 4096,

	kSecEveryEventMask = 4294967295
}


declare function SecKeychainFindGenericPassword(keychainOrArray: any, serviceNameLength: number, serviceName: string | any, accountNameLength: number, accountName: string | any, passwordLength: number, passwordData: any, itemRef: any): number;

declare function SecKeychainFindInternetPassword(keychainOrArray: any, serverNameLength: number, serverName: string | any, securityDomainLength: number, securityDomain: string | any, accountNameLength: number, accountName: string | any, pathLength: number, path: string | any, port: number, protocol: SecProtocolType, authenticationType: SecAuthenticationType, passwordLength: number, passwordData: any, itemRef: any): number;

declare function SecKeychainFreeAttributeInfo(info: SecKeychainAttributeInfo): number;

declare function SecKeychainGetPath(keychain: any, ioPathLength: number, pathName: string | any): number;

declare function SecKeychainGetPreferenceDomain(domain: SecPreferencesDomain): number;

declare function SecKeychainGetStatus(keychain: any, keychainStatus: number): number;

declare function SecKeychainGetTypeID(): number;

declare function SecKeychainGetUserInteractionAllowed(state: string | any): number;

declare function SecKeychainGetVersion(returnVers: number): number;

declare function SecKeychainItemCopyAccess(itemRef: any, access: any): number;

declare function SecKeychainItemCopyAttributesAndData(itemRef: any, info: SecKeychainAttributeInfo, itemClass: SecItemClass, attrList: SecKeychainAttributeList, length: number, outData: any): number;

declare function SecKeychainItemCopyContent(itemRef: any, itemClass: SecItemClass, attrList: SecKeychainAttributeList, length: number, outData: any): number;

declare function SecKeychainItemCopyFromPersistentReference(persistentItemRef: NSData, itemRef: any): number;

declare function SecKeychainItemCopyKeychain(itemRef: any, keychainRef: any): number;

declare function SecKeychainItemCreateCopy(itemRef: any, destKeychainRef: any, initialAccess: any, itemCopy: any): number;

declare function SecKeychainItemCreateFromContent(itemClass: SecItemClass, attrList: SecKeychainAttributeList, length: number, data: any, keychainRef: any, initialAccess: any, itemRef: any): number;

declare function SecKeychainItemCreatePersistentReference(itemRef: any, persistentItemRef: NSData): number;

declare function SecKeychainItemDelete(itemRef: any): number;

declare function SecKeychainItemFreeAttributesAndData(attrList: SecKeychainAttributeList, data: any): number;

declare function SecKeychainItemFreeContent(attrList: SecKeychainAttributeList, data: any): number;

declare function SecKeychainItemGetTypeID(): number;

declare function SecKeychainItemModifyAttributesAndData(itemRef: any, attrList: SecKeychainAttributeList, length: number, data: any): number;

declare function SecKeychainItemModifyContent(itemRef: any, attrList: SecKeychainAttributeList, length: number, data: any): number;

declare function SecKeychainItemSetAccess(itemRef: any, access: any): number;

declare function SecKeychainLock(keychain: any): number;

declare function SecKeychainLockAll(): number;

declare function SecKeychainOpen(pathName: string | any, keychain: any): number;

enum SecKeychainPromptSelector {

	kSecKeychainPromptRequirePassphase = 1,

	kSecKeychainPromptUnsigned = 16,

	kSecKeychainPromptUnsignedAct = 32,

	kSecKeychainPromptInvalid = 64,

	kSecKeychainPromptInvalidAct = 128
}


declare function SecKeychainRemoveCallback(callbackFunction: (p1: SecKeychainEvent, p2: SecKeychainCallbackInfo, p3: any) => number): number;

declare function SecKeychainSetDefault(keychain: any): number;

declare function SecKeychainSetDomainDefault(domain: SecPreferencesDomain, keychain: any): number;

declare function SecKeychainSetDomainSearchList(domain: SecPreferencesDomain, searchList: NSArray<any> | any[]): number;

declare function SecKeychainSetPreferenceDomain(domain: SecPreferencesDomain): number;

declare function SecKeychainSetSearchList(searchList: NSArray<any> | any[]): number;

declare function SecKeychainSetSettings(keychain: any, newSettings: SecKeychainSettings): number;

declare function SecKeychainSetUserInteractionAllowed(state: boolean): number;

interface SecKeychainSettings {
	version: number;
	lockOnSleep: boolean;
	useLockInterval: boolean;
	lockInterval: number;
}
declare var SecKeychainSettings: SecKeychainSettings;

declare function SecKeychainUnlock(keychain: any, passwordLength: number, password: any, usePassword: boolean): number;

declare function SecPKCS12Import(pkcs12_data: NSData, options: NSDictionary<any, any>, items: NSArray<any>): number;

enum SecPadding {

	kSecPaddingNone = 0,

	kSecPaddingPKCS1 = 1,

	kSecPaddingOAEP = 2,

	kSecPaddingSigRaw = 16384,

	kSecPaddingPKCS1MD2 = 32768,

	kSecPaddingPKCS1MD5 = 32769,

	kSecPaddingPKCS1SHA1 = 32770,

	kSecPaddingPKCS1SHA224 = 32771,

	kSecPaddingPKCS1SHA256 = 32772,

	kSecPaddingPKCS1SHA384 = 32773,

	kSecPaddingPKCS1SHA512 = 32774
}


declare function SecPolicyCopyProperties(policyRef: any): NSDictionary<any, any>;

declare function SecPolicyCreateBasicX509(): any;

declare function SecPolicyCreateRevocation(revocationFlags: number): any;

declare function SecPolicyCreateSSL(server: boolean, hostname: string): any;

declare function SecPolicyCreateWithProperties(policyIdentifier: any, properties: NSDictionary<any, any>): any;

declare function SecPolicyGetTypeID(): number;

enum SecPreferencesDomain {

	kSecPreferencesDomainUser = 0,

	kSecPreferencesDomainSystem = 1,

	kSecPreferencesDomainCommon = 2,

	kSecPreferencesDomainDynamic = 3
}


enum SecProtocolType {

	kSecProtocolTypeFTP = 1718906912,

	kSecProtocolTypeFTPAccount = 1718906977,

	kSecProtocolTypeHTTP = 1752462448,

	kSecProtocolTypeIRC = 1769104160,

	kSecProtocolTypeNNTP = 1852732528,

	kSecProtocolTypePOP3 = 1886351411,

	kSecProtocolTypeSMTP = 1936553072,

	kSecProtocolTypeSOCKS = 1936685088,

	kSecProtocolTypeIMAP = 1768776048,

	kSecProtocolTypeLDAP = 1818517872,

	kSecProtocolTypeAppleTalk = 1635019883,

	kSecProtocolTypeAFP = 1634103328,

	kSecProtocolTypeTelnet = 1952803950,

	kSecProtocolTypeSSH = 1936943136,

	kSecProtocolTypeFTPS = 1718906995,

	kSecProtocolTypeHTTPS = 1752461427,

	kSecProtocolTypeHTTPProxy = 1752461432,

	kSecProtocolTypeHTTPSProxy = 1752462200,

	kSecProtocolTypeFTPProxy = 1718907000,

	kSecProtocolTypeCIFS = 1667851891,

	kSecProtocolTypeSMB = 1936548384,

	kSecProtocolTypeRTSP = 1920234352,

	kSecProtocolTypeRTSPProxy = 1920234360,

	kSecProtocolTypeDAAP = 1684103536,

	kSecProtocolTypeEPPC = 1701867619,

	kSecProtocolTypeIPP = 1768976416,

	kSecProtocolTypeNNTPS = 1853124723,

	kSecProtocolTypeLDAPS = 1818521715,

	kSecProtocolTypeTelnetS = 1952803955,

	kSecProtocolTypeIMAPS = 1768779891,

	kSecProtocolTypeIRCS = 1769104243,

	kSecProtocolTypePOP3S = 1886351475,

	kSecProtocolTypeCVSpserver = 1668707184,

	kSecProtocolTypeSVN = 1937141280,

	kSecProtocolTypeAny = 0
}


declare function SecRandomCopyBytes(rnd: any, count: number, bytes: any): number;

declare function SecRequirementCopyData(requirement: any, flags: SecCSFlags, data: NSData): number;

declare function SecRequirementCopyString(requirement: any, flags: SecCSFlags, text: string): number;

declare function SecRequirementCreateWithData(data: NSData, flags: SecCSFlags, requirement: any): number;

declare function SecRequirementCreateWithString(text: string, flags: SecCSFlags, requirement: any): number;

declare function SecRequirementCreateWithStringAndErrors(text: string, flags: SecCSFlags, errors: NSError, requirement: any): number;

declare function SecRequirementGetTypeID(): number;

enum SecRequirementType {

	kSecHostRequirementType = 1,

	kSecGuestRequirementType = 2,

	kSecDesignatedRequirementType = 3,

	kSecLibraryRequirementType = 4,

	kSecPluginRequirementType = 5,

	kSecInvalidRequirementType = 6,

	kSecRequirementTypeCount = 6
}


declare function SecSignTransformCreate(key: any, error: NSError): any;

declare function SecStaticCodeCheckValidity(staticCode: any, flags: SecCSFlags, requirement: any): number;

declare function SecStaticCodeCheckValidityWithErrors(staticCode: any, flags: SecCSFlags, requirement: any, errors: NSError): number;

declare function SecStaticCodeCreateWithPath(path: NSURL, flags: SecCSFlags, staticCode: any): number;

declare function SecStaticCodeCreateWithPathAndAttributes(path: NSURL, flags: SecCSFlags, attributes: NSDictionary<any, any>, staticCode: any): number;

declare function SecStaticCodeGetTypeID(): number;

declare function SecTaskCopySigningIdentifier(task: any, error: NSError): string;

declare function SecTaskCopyValueForEntitlement(task: any, entitlement: string, error: NSError): any;

declare function SecTaskCopyValuesForEntitlements(task: any, entitlements: NSArray<any> | any[], error: NSError): NSDictionary<any, any>;

declare function SecTaskCreateFromSelf(allocator: any): any;

declare function SecTaskCreateWithAuditToken(allocator: any, token: audit_token_t): any;

declare function SecTaskGetTypeID(): number;

declare function SecTransformConnectTransforms(sourceTransformRef: any, sourceAttributeName: string, destinationTransformRef: any, destinationAttributeName: string, group: any, error: NSError): any;

declare function SecTransformCopyExternalRepresentation(transformRef: any): NSDictionary<any, any>;

declare function SecTransformCreate(name: string, error: NSError): any;

declare function SecTransformCreateFromExternalRepresentation(dictionary: NSDictionary<any, any>, error: NSError): any;

declare function SecTransformCreateGroupTransform(): any;

declare function SecTransformCreateReadTransformWithReadStream(inputStream: NSInputStream): any;

declare function SecTransformCustomGetAttribute(ref: any, attribute: any, type: SecTransformMetaAttributeType): any;

declare function SecTransformCustomSetAttribute(ref: any, attribute: any, type: SecTransformMetaAttributeType, value: any): any;

declare function SecTransformExecute(transformRef: any, errorRef: NSError): any;

declare function SecTransformExecuteAsync(transformRef: any, deliveryQueue: NSObject, deliveryBlock: (p1: any, p2: NSError, p3: boolean) => void): void;

declare function SecTransformFindByName(transform: any, name: string): any;

declare function SecTransformGetAttribute(transformRef: any, key: string): any;

declare function SecTransformGetTypeID(): number;

enum SecTransformMetaAttributeType {

	kSecTransformMetaAttributeValue = 0,

	kSecTransformMetaAttributeName = 1,

	kSecTransformMetaAttributeRef = 2,

	kSecTransformMetaAttributeRequired = 3,

	kSecTransformMetaAttributeRequiresOutboundConnection = 4,

	kSecTransformMetaAttributeDeferred = 5,

	kSecTransformMetaAttributeStream = 6,

	kSecTransformMetaAttributeCanCycle = 7,

	kSecTransformMetaAttributeExternalize = 8,

	kSecTransformMetaAttributeHasOutboundConnections = 9,

	kSecTransformMetaAttributeHasInboundConnection = 10
}


declare function SecTransformNoData(): any;

declare function SecTransformPushbackAttribute(ref: any, attribute: any, value: any): any;

declare function SecTransformRegister(uniqueName: string, createTransformFunction: (p1: string, p2: any, p3: any) => () => NSError, error: NSError): boolean;

declare function SecTransformSetAttribute(transformRef: any, key: string, value: any, error: NSError): boolean;

declare function SecTransformSetAttributeAction(ref: any, action: string, attribute: any, newAction: (p1: any, p2: any) => any): NSError;

declare function SecTransformSetDataAction(ref: any, action: string, newAction: (p1: any) => any): NSError;

declare function SecTransformSetTransformAction(ref: any, action: string, newAction: () => any): NSError;

declare function SecTrustCopyAnchorCertificates(anchors: NSArray<any>): number;

declare function SecTrustCopyCustomAnchorCertificates(trust: any, anchors: NSArray<any>): number;

declare function SecTrustCopyExceptions(trust: any): NSData;

declare function SecTrustCopyPolicies(trust: any, policies: NSArray<any>): number;

declare function SecTrustCopyProperties(trust: any): NSArray<any>;

declare function SecTrustCopyPublicKey(trust: any): any;

declare function SecTrustCopyResult(trust: any): NSDictionary<any, any>;

declare function SecTrustCreateWithCertificates(certificates: any, policies: any, trust: any): number;

declare function SecTrustEvaluateAsyncWithError(trust: any, queue: NSObject, result: (p1: any, p2: boolean, p3: NSError) => void): number;

declare function SecTrustEvaluateWithError(trust: any, error: NSError): boolean;

declare function SecTrustGetCertificateAtIndex(trust: any, ix: number): any;

declare function SecTrustGetCertificateCount(trust: any): number;

declare function SecTrustGetNetworkFetchAllowed(trust: any, allowFetch: string | any): number;

declare function SecTrustGetTrustResult(trust: any, result: SecTrustResultType): number;

declare function SecTrustGetTypeID(): number;

declare function SecTrustGetVerifyTime(trust: any): number;

enum SecTrustOptionFlags {

	kSecTrustOptionAllowExpired = 1,

	kSecTrustOptionLeafIsCA = 2,

	kSecTrustOptionFetchIssuerFromNet = 4,

	kSecTrustOptionAllowExpiredRoot = 8,

	kSecTrustOptionRequireRevPerCert = 16,

	kSecTrustOptionUseTrustSettings = 32,

	kSecTrustOptionImplicitAnchors = 64
}


enum SecTrustResultType {

	kSecTrustResultInvalid = 0,

	kSecTrustResultProceed = 1,

	kSecTrustResultConfirm = 2,

	kSecTrustResultDeny = 3,

	kSecTrustResultUnspecified = 4,

	kSecTrustResultRecoverableTrustFailure = 5,

	kSecTrustResultFatalTrustFailure = 6,

	kSecTrustResultOtherError = 7
}


declare function SecTrustSetAnchorCertificates(trust: any, anchorCertificates: NSArray<any> | any[]): number;

declare function SecTrustSetAnchorCertificatesOnly(trust: any, anchorCertificatesOnly: boolean): number;

declare function SecTrustSetExceptions(trust: any, exceptions: NSData): boolean;

declare function SecTrustSetNetworkFetchAllowed(trust: any, allowFetch: boolean): number;

declare function SecTrustSetOCSPResponse(trust: any, responseData: any): number;

declare function SecTrustSetOptions(trustRef: any, options: SecTrustOptionFlags): number;

declare function SecTrustSetPolicies(trust: any, policies: any): number;

declare function SecTrustSetSignedCertificateTimestamps(trust: any, sctArray: NSArray<any> | any[]): number;

declare function SecTrustSetVerifyDate(trust: any, verifyDate: Date): number;

declare function SecTrustSettingsCopyCertificates(domain: SecTrustSettingsDomain, certArray: NSArray<any>): number;

declare function SecTrustSettingsCopyModificationDate(certRef: any, domain: SecTrustSettingsDomain, modificationDate: Date): number;

declare function SecTrustSettingsCopyTrustSettings(certRef: any, domain: SecTrustSettingsDomain, trustSettings: NSArray<any>): number;

declare function SecTrustSettingsCreateExternalRepresentation(domain: SecTrustSettingsDomain, trustSettings: NSData): number;

enum SecTrustSettingsDomain {

	kSecTrustSettingsDomainUser = 0,

	kSecTrustSettingsDomainAdmin = 1,

	kSecTrustSettingsDomainSystem = 2
}


declare function SecTrustSettingsImportExternalRepresentation(domain: SecTrustSettingsDomain, trustSettings: NSData): number;

enum SecTrustSettingsKeyUsage {

	kSecTrustSettingsKeyUseSignature = 1,

	kSecTrustSettingsKeyUseEnDecryptData = 2,

	kSecTrustSettingsKeyUseEnDecryptKey = 4,

	kSecTrustSettingsKeyUseSignCert = 8,

	kSecTrustSettingsKeyUseSignRevocation = 16,

	kSecTrustSettingsKeyUseKeyExchange = 32,

	kSecTrustSettingsKeyUseAny = 4294967295
}


declare function SecTrustSettingsRemoveTrustSettings(certRef: any, domain: SecTrustSettingsDomain): number;

enum SecTrustSettingsResult {

	kSecTrustSettingsResultInvalid = 0,

	kSecTrustSettingsResultTrustRoot = 1,

	kSecTrustSettingsResultTrustAsRoot = 2,

	kSecTrustSettingsResultDeny = 3,

	kSecTrustSettingsResultUnspecified = 4
}


declare function SecTrustSettingsSetTrustSettings(certRef: any, domain: SecTrustSettingsDomain, trustSettingsDictOrArray: any): number;

declare function SecTrustedApplicationGetTypeID(): number;

declare function SecVerifyTransformCreate(key: any, signature: NSData, error: NSError): any;

declare function SecureDownloadCopyCreationDate(downloadRef: any, date: Date): number;

declare function SecureDownloadCopyName(downloadRef: any, name: string): number;

declare function SecureDownloadCopyTicketLocation(url: NSURL, ticketLocation: NSURL): number;

declare function SecureDownloadCopyURLs(downloadRef: any, urls: NSArray<any>): number;

declare function SecureDownloadCreateWithTicket(ticket: NSData, setup: (p1: any, p2: any) => SecureDownloadTrustCallbackResult, setupContext: any, evaluate: (p1: any, p2: SecTrustResultType, p3: any) => SecTrustResultType, evaluateContext: any, downloadRef: any): number;

declare function SecureDownloadFinished(downloadRef: any): number;

declare function SecureDownloadGetDownloadSize(downloadRef: any, downloadSize: number): number;

declare function SecureDownloadRelease(downloadRef: any): number;

enum SecureDownloadTrustCallbackResult {

	kSecureDownloadDoNotEvaluateSigner = 0,

	kSecureDownloadEvaluateSigner = 1,

	kSecureDownloadFailEvaluation = 2
}


declare function SecureDownloadUpdateWithData(downloadRef: any, data: NSData): number;

enum SessionAttributeBits {

	sessionIsRoot = 1,

	sessionHasGraphicAccess = 16,

	sessionHasTTY = 32,

	sessionIsRemote = 4096
}


declare function SessionCreate(flags: SessionCreationFlags, attributes: SessionAttributeBits): number;

enum SessionCreationFlags {

	sessionKeepCurrentBootstrap = 32768
}


declare function SessionGetInfo(session: number, sessionId: number, attributes: SessionAttributeBits): number;

declare const TLS_AES_128_CCM_8_SHA256: number;

declare const TLS_AES_128_CCM_SHA256: number;

declare const TLS_AES_128_GCM_SHA256: number;

declare const TLS_AES_256_GCM_SHA384: number;

declare const TLS_CHACHA20_POLY1305_SHA256: number;

declare const TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_DHE_DSS_WITH_AES_128_CBC_SHA: number;

declare const TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: number;

declare const TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: number;

declare const TLS_DHE_DSS_WITH_AES_256_CBC_SHA: number;

declare const TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: number;

declare const TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: number;

declare const TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_DHE_PSK_WITH_AES_128_CBC_SHA: number;

declare const TLS_DHE_PSK_WITH_AES_128_CBC_SHA256: number;

declare const TLS_DHE_PSK_WITH_AES_128_GCM_SHA256: number;

declare const TLS_DHE_PSK_WITH_AES_256_CBC_SHA: number;

declare const TLS_DHE_PSK_WITH_AES_256_CBC_SHA384: number;

declare const TLS_DHE_PSK_WITH_AES_256_GCM_SHA384: number;

declare const TLS_DHE_PSK_WITH_NULL_SHA: number;

declare const TLS_DHE_PSK_WITH_NULL_SHA256: number;

declare const TLS_DHE_PSK_WITH_NULL_SHA384: number;

declare const TLS_DHE_PSK_WITH_RC4_128_SHA: number;

declare const TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_DHE_RSA_WITH_AES_128_CBC_SHA: number;

declare const TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: number;

declare const TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: number;

declare const TLS_DHE_RSA_WITH_AES_256_CBC_SHA: number;

declare const TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: number;

declare const TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: number;

declare const TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_DH_DSS_WITH_AES_128_CBC_SHA: number;

declare const TLS_DH_DSS_WITH_AES_128_CBC_SHA256: number;

declare const TLS_DH_DSS_WITH_AES_128_GCM_SHA256: number;

declare const TLS_DH_DSS_WITH_AES_256_CBC_SHA: number;

declare const TLS_DH_DSS_WITH_AES_256_CBC_SHA256: number;

declare const TLS_DH_DSS_WITH_AES_256_GCM_SHA384: number;

declare const TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_DH_RSA_WITH_AES_128_CBC_SHA: number;

declare const TLS_DH_RSA_WITH_AES_128_CBC_SHA256: number;

declare const TLS_DH_RSA_WITH_AES_128_GCM_SHA256: number;

declare const TLS_DH_RSA_WITH_AES_256_CBC_SHA: number;

declare const TLS_DH_RSA_WITH_AES_256_CBC_SHA256: number;

declare const TLS_DH_RSA_WITH_AES_256_GCM_SHA384: number;

declare const TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_DH_anon_WITH_AES_128_CBC_SHA: number;

declare const TLS_DH_anon_WITH_AES_128_CBC_SHA256: number;

declare const TLS_DH_anon_WITH_AES_128_GCM_SHA256: number;

declare const TLS_DH_anon_WITH_AES_256_CBC_SHA: number;

declare const TLS_DH_anon_WITH_AES_256_CBC_SHA256: number;

declare const TLS_DH_anon_WITH_AES_256_GCM_SHA384: number;

declare const TLS_DH_anon_WITH_RC4_128_MD5: number;

declare const TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: number;

declare const TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: number;

declare const TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: number;

declare const TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: number;

declare const TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: number;

declare const TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: number;

declare const TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: number;

declare const TLS_ECDHE_ECDSA_WITH_NULL_SHA: number;

declare const TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: number;

declare const TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA: number;

declare const TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA: number;

declare const TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: number;

declare const TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: number;

declare const TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: number;

declare const TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: number;

declare const TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: number;

declare const TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: number;

declare const TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: number;

declare const TLS_ECDHE_RSA_WITH_NULL_SHA: number;

declare const TLS_ECDHE_RSA_WITH_RC4_128_SHA: number;

declare const TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: number;

declare const TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: number;

declare const TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: number;

declare const TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: number;

declare const TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: number;

declare const TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: number;

declare const TLS_ECDH_ECDSA_WITH_NULL_SHA: number;

declare const TLS_ECDH_ECDSA_WITH_RC4_128_SHA: number;

declare const TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: number;

declare const TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: number;

declare const TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: number;

declare const TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: number;

declare const TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: number;

declare const TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: number;

declare const TLS_ECDH_RSA_WITH_NULL_SHA: number;

declare const TLS_ECDH_RSA_WITH_RC4_128_SHA: number;

declare const TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_ECDH_anon_WITH_AES_128_CBC_SHA: number;

declare const TLS_ECDH_anon_WITH_AES_256_CBC_SHA: number;

declare const TLS_ECDH_anon_WITH_NULL_SHA: number;

declare const TLS_ECDH_anon_WITH_RC4_128_SHA: number;

declare const TLS_EMPTY_RENEGOTIATION_INFO_SCSV: number;

declare const TLS_NULL_WITH_NULL_NULL: number;

declare const TLS_PSK_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_PSK_WITH_AES_128_CBC_SHA: number;

declare const TLS_PSK_WITH_AES_128_CBC_SHA256: number;

declare const TLS_PSK_WITH_AES_128_GCM_SHA256: number;

declare const TLS_PSK_WITH_AES_256_CBC_SHA: number;

declare const TLS_PSK_WITH_AES_256_CBC_SHA384: number;

declare const TLS_PSK_WITH_AES_256_GCM_SHA384: number;

declare const TLS_PSK_WITH_CHACHA20_POLY1305_SHA256: number;

declare const TLS_PSK_WITH_NULL_SHA: number;

declare const TLS_PSK_WITH_NULL_SHA256: number;

declare const TLS_PSK_WITH_NULL_SHA384: number;

declare const TLS_PSK_WITH_RC4_128_SHA: number;

declare const TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_RSA_PSK_WITH_AES_128_CBC_SHA: number;

declare const TLS_RSA_PSK_WITH_AES_128_CBC_SHA256: number;

declare const TLS_RSA_PSK_WITH_AES_128_GCM_SHA256: number;

declare const TLS_RSA_PSK_WITH_AES_256_CBC_SHA: number;

declare const TLS_RSA_PSK_WITH_AES_256_CBC_SHA384: number;

declare const TLS_RSA_PSK_WITH_AES_256_GCM_SHA384: number;

declare const TLS_RSA_PSK_WITH_NULL_SHA: number;

declare const TLS_RSA_PSK_WITH_NULL_SHA256: number;

declare const TLS_RSA_PSK_WITH_NULL_SHA384: number;

declare const TLS_RSA_PSK_WITH_RC4_128_SHA: number;

declare const TLS_RSA_WITH_3DES_EDE_CBC_SHA: number;

declare const TLS_RSA_WITH_AES_128_CBC_SHA: number;

declare const TLS_RSA_WITH_AES_128_CBC_SHA256: number;

declare const TLS_RSA_WITH_AES_128_GCM_SHA256: number;

declare const TLS_RSA_WITH_AES_256_CBC_SHA: number;

declare const TLS_RSA_WITH_AES_256_CBC_SHA256: number;

declare const TLS_RSA_WITH_AES_256_GCM_SHA384: number;

declare const TLS_RSA_WITH_NULL_MD5: number;

declare const TLS_RSA_WITH_NULL_SHA: number;

declare const TLS_RSA_WITH_NULL_SHA256: number;

declare const TLS_RSA_WITH_RC4_128_MD5: number;

declare const TLS_RSA_WITH_RC4_128_SHA: number;

declare const callerSecuritySession: number;

declare function cssmAlgToOid(algId: number): SecAsn1Item;

declare function cssmOidToAlg(oid: SecAsn1Item, alg: number): boolean;

declare function cssmPerror(how: string | any, error: number): void;

enum cssm_appledl_open_parameters_mask {

	kCSSM_APPLEDL_MASK_MODE = 1
}


interface cssm_dl_pkcs11_attributes {
	DeviceAccessFlags: number;
}
declare var cssm_dl_pkcs11_attributes: cssm_dl_pkcs11_attributes;

declare const errAuthorizationBadAddress: number;

declare const errAuthorizationCanceled: number;

declare const errAuthorizationDenied: number;

declare const errAuthorizationExternalizeNotAllowed: number;

declare const errAuthorizationInteractionNotAllowed: number;

declare const errAuthorizationInternal: number;

declare const errAuthorizationInternalizeNotAllowed: number;

declare const errAuthorizationInvalidFlags: number;

declare const errAuthorizationInvalidPointer: number;

declare const errAuthorizationInvalidRef: number;

declare const errAuthorizationInvalidSet: number;

declare const errAuthorizationInvalidTag: number;

declare const errAuthorizationSuccess: number;

declare const errAuthorizationToolEnvironmentError: number;

declare const errAuthorizationToolExecuteFailure: number;

declare const errSSLATSCertificateHashAlgorithmViolation: number;

declare const errSSLATSCertificateTrustViolation: number;

declare const errSSLATSCiphersuiteViolation: number;

declare const errSSLATSLeafCertificateHashAlgorithmViolation: number;

declare const errSSLATSMinimumKeySizeViolation: number;

declare const errSSLATSMinimumVersionViolation: number;

declare const errSSLATSViolation: number;

declare const errSSLBadCert: number;

declare const errSSLBadCertificateStatusResponse: number;

declare const errSSLBadCipherSuite: number;

declare const errSSLBadConfiguration: number;

declare const errSSLBadRecordMac: number;

declare const errSSLBufferOverflow: number;

declare const errSSLCertExpired: number;

declare const errSSLCertNotYetValid: number;

declare const errSSLCertificateRequired: number;

declare const errSSLClientCertRequested: number;

declare const errSSLClientHelloReceived: number;

declare const errSSLClosedAbort: number;

declare const errSSLClosedGraceful: number;

declare const errSSLClosedNoNotify: number;

declare const errSSLConfigurationFailed: number;

declare const errSSLConnectionRefused: number;

declare const errSSLCrypto: number;

declare const errSSLDecodeError: number;

declare const errSSLDecompressFail: number;

declare const errSSLDecryptionFail: number;

declare const errSSLFatalAlert: number;

declare const errSSLHandshakeFail: number;

declare const errSSLHostNameMismatch: number;

declare const errSSLIllegalParam: number;

declare const errSSLInappropriateFallback: number;

declare const errSSLInternal: number;

declare const errSSLMissingExtension: number;

declare const errSSLModuleAttach: number;

declare const errSSLNegotiation: number;

declare const errSSLNetworkTimeout: number;

declare const errSSLNoRootCert: number;

declare const errSSLPeerAccessDenied: number;

declare const errSSLPeerAuthCompleted: number;

declare const errSSLPeerBadCert: number;

declare const errSSLPeerBadRecordMac: number;

declare const errSSLPeerCertExpired: number;

declare const errSSLPeerCertRevoked: number;

declare const errSSLPeerCertUnknown: number;

declare const errSSLPeerDecodeError: number;

declare const errSSLPeerDecompressFail: number;

declare const errSSLPeerDecryptError: number;

declare const errSSLPeerDecryptionFail: number;

declare const errSSLPeerExportRestriction: number;

declare const errSSLPeerHandshakeFail: number;

declare const errSSLPeerInsufficientSecurity: number;

declare const errSSLPeerInternalError: number;

declare const errSSLPeerNoRenegotiation: number;

declare const errSSLPeerProtocolVersion: number;

declare const errSSLPeerRecordOverflow: number;

declare const errSSLPeerUnexpectedMsg: number;

declare const errSSLPeerUnknownCA: number;

declare const errSSLPeerUnsupportedCert: number;

declare const errSSLPeerUserCancelled: number;

declare const errSSLProtocol: number;

declare const errSSLRecordOverflow: number;

declare const errSSLSessionNotFound: number;

declare const errSSLTransportReset: number;

declare const errSSLUnexpectedMessage: number;

declare const errSSLUnexpectedRecord: number;

declare const errSSLUnknownPSKIdentity: number;

declare const errSSLUnknownRootCert: number;

declare const errSSLUnrecognizedName: number;

declare const errSSLUnsupportedExtension: number;

declare const errSSLWeakPeerEphemeralDHKey: number;

declare const errSSLWouldBlock: number;

declare const errSSLXCertChainInvalid: number;

declare const errSecACLAddFailed: number;

declare const errSecACLChangeFailed: number;

declare const errSecACLDeleteFailed: number;

declare const errSecACLNotSimple: number;

declare const errSecACLReplaceFailed: number;

declare const errSecAddinLoadFailed: number;

declare const errSecAddinUnloadFailed: number;

declare const errSecAlgorithmMismatch: number;

declare const errSecAllocate: number;

declare const errSecAlreadyLoggedIn: number;

declare const errSecAppleAddAppACLSubject: number;

declare const errSecAppleInvalidKeyEndDate: number;

declare const errSecAppleInvalidKeyStartDate: number;

declare const errSecApplePublicKeyIncomplete: number;

declare const errSecAppleSSLv2Rollback: number;

declare const errSecAppleSignatureMismatch: number;

declare const errSecAttachHandleBusy: number;

declare const errSecAttributeNotInContext: number;

declare const errSecAuthFailed: number;

declare const errSecBadReq: number;

declare const errSecBlockSizeMismatch: number;

declare const errSecBufferTooSmall: number;

declare const errSecCRLAlreadySigned: number;

declare const errSecCRLBadURI: number;

declare const errSecCRLExpired: number;

declare const errSecCRLNotFound: number;

declare const errSecCRLNotTrusted: number;

declare const errSecCRLNotValidYet: number;

declare const errSecCRLPolicyFailed: number;

declare const errSecCRLServerDown: number;

declare const errSecCSAmbiguousBundleFormat: number;

declare const errSecCSBadBundleFormat: number;

declare const errSecCSBadCallbackValue: number;

declare const errSecCSBadDictionaryFormat: number;

declare const errSecCSBadDiskImageFormat: number;

declare const errSecCSBadFrameworkVersion: number;

declare const errSecCSBadLVArch: number;

declare const errSecCSBadMainExecutable: number;

declare const errSecCSBadNestedCode: number;

declare const errSecCSBadObjectFormat: number;

declare const errSecCSBadResource: number;

declare const errSecCSBadTeamIdentifier: number;

declare const errSecCSCMSTooLarge: number;

declare const errSecCSCancelled: number;

declare const errSecCSDBAccess: number;

declare const errSecCSDBDenied: number;

declare const errSecCSDSStoreSymlink: number;

declare const errSecCSDbCorrupt: number;

declare const errSecCSFileHardQuarantined: number;

declare const errSecCSGuestInvalid: number;

declare const errSecCSHelperFailed: number;

declare const errSecCSHostProtocolContradiction: number;

declare const errSecCSHostProtocolDedicationError: number;

declare const errSecCSHostProtocolInvalidAttribute: number;

declare const errSecCSHostProtocolInvalidHash: number;

declare const errSecCSHostProtocolNotProxy: number;

declare const errSecCSHostProtocolRelativePath: number;

declare const errSecCSHostProtocolStateError: number;

declare const errSecCSHostProtocolUnrelated: number;

declare const errSecCSHostReject: number;

declare const errSecCSInfoPlistFailed: number;

declare const errSecCSInternalError: number;

declare const errSecCSInvalidAssociatedFileData: number;

declare const errSecCSInvalidAttributeValues: number;

declare const errSecCSInvalidEntitlements: number;

declare const errSecCSInvalidFlags: number;

declare const errSecCSInvalidObjectRef: number;

declare const errSecCSInvalidPlatform: number;

declare const errSecCSInvalidRuntimeVersion: number;

declare const errSecCSInvalidSymlink: number;

declare const errSecCSInvalidTeamIdentifier: number;

declare const errSecCSMultipleGuests: number;

declare const errSecCSNoMainExecutable: number;

declare const errSecCSNoMatches: number;

declare const errSecCSNoSuchCode: number;

declare const errSecCSNotAHost: number;

declare const errSecCSNotAppLike: number;

declare const errSecCSNotSupported: number;

declare const errSecCSObjectRequired: number;

declare const errSecCSOutdated: number;

declare const errSecCSRegularFile: number;

declare const errSecCSReqFailed: number;

declare const errSecCSReqInvalid: number;

declare const errSecCSReqUnsupported: number;

declare const errSecCSResourceDirectoryFailed: number;

declare const errSecCSResourceNotSupported: number;

declare const errSecCSResourceRulesInvalid: number;

declare const errSecCSResourcesInvalid: number;

declare const errSecCSResourcesNotFound: number;

declare const errSecCSResourcesNotSealed: number;

declare const errSecCSRevokedNotarization: number;

declare const errSecCSSigDBAccess: number;

declare const errSecCSSigDBDenied: number;

declare const errSecCSSignatureFailed: number;

declare const errSecCSSignatureInvalid: number;

declare const errSecCSSignatureNotVerifiable: number;

declare const errSecCSSignatureUnsupported: number;

declare const errSecCSSignatureUntrusted: number;

declare const errSecCSStaticCodeChanged: number;

declare const errSecCSStaticCodeNotFound: number;

declare const errSecCSTooBig: number;

declare const errSecCSUnimplemented: number;

declare const errSecCSUnsealedAppRoot: number;

declare const errSecCSUnsealedFrameworkRoot: number;

declare const errSecCSUnsigned: number;

declare const errSecCSUnsignedNestedCode: number;

declare const errSecCSUnsupportedDigestAlgorithm: number;

declare const errSecCSUnsupportedGuestAttributes: number;

declare const errSecCSVetoed: number;

declare const errSecCSWeakResourceEnvelope: number;

declare const errSecCSWeakResourceRules: number;

declare const errSecCallbackFailed: number;

declare const errSecCertificateCannotOperate: number;

declare const errSecCertificateExpired: number;

declare const errSecCertificateNameNotAllowed: number;

declare const errSecCertificateNotValidYet: number;

declare const errSecCertificatePolicyNotAllowed: number;

declare const errSecCertificateRevoked: number;

declare const errSecCertificateSuspended: number;

declare const errSecCertificateValidityPeriodTooLong: number;

declare const errSecCodeSigningBadCertChainLength: number;

declare const errSecCodeSigningBadPathLengthConstraint: number;

declare const errSecCodeSigningDevelopment: number;

declare const errSecCodeSigningNoBasicConstraints: number;

declare const errSecCodeSigningNoExtendedKeyUsage: number;

declare const errSecConversionError: number;

declare const errSecCoreFoundationUnknown: number;

declare const errSecCreateChainFailed: number;

declare const errSecDataNotAvailable: number;

declare const errSecDataNotModifiable: number;

declare const errSecDataTooLarge: number;

declare const errSecDatabaseLocked: number;

declare const errSecDatastoreIsOpen: number;

declare const errSecDecode: number;

declare const errSecDeviceError: number;

declare const errSecDeviceFailed: number;

declare const errSecDeviceReset: number;

declare const errSecDeviceVerifyFailed: number;

declare const errSecDiskFull: number;

declare const errSecDskFull: number;

declare const errSecDuplicateCallback: number;

declare const errSecDuplicateItem: number;

declare const errSecDuplicateKeychain: number;

declare const errSecEMMLoadFailed: number;

declare const errSecEMMUnloadFailed: number;

declare const errSecEndOfData: number;

declare const errSecEventNotificationCallbackNotFound: number;

declare const errSecExtendedKeyUsageNotCritical: number;

declare const errSecFieldSpecifiedMultiple: number;

declare const errSecFileTooBig: number;

declare const errSecFunctionFailed: number;

declare const errSecFunctionIntegrityFail: number;

declare const errSecHostNameMismatch: number;

declare const errSecIDPFailure: number;

declare const errSecIO: number;

declare const errSecInDarkWake: number;

declare const errSecIncompatibleDatabaseBlob: number;

declare const errSecIncompatibleFieldFormat: number;

declare const errSecIncompatibleKeyBlob: number;

declare const errSecIncompatibleVersion: number;

declare const errSecIncompleteCertRevocationCheck: number;

declare const errSecInputLengthError: number;

declare const errSecInsufficientClientID: number;

declare const errSecInsufficientCredentials: number;

declare const errSecInteractionNotAllowed: number;

declare const errSecInteractionRequired: number;

declare const errSecInternalComponent: number;

declare const errSecInternalError: number;

declare const errSecInvaldCRLAuthority: number;

declare const errSecInvalidACL: number;

declare const errSecInvalidAccessCredentials: number;

declare const errSecInvalidAccessRequest: number;

declare const errSecInvalidAction: number;

declare const errSecInvalidAddinFunctionTable: number;

declare const errSecInvalidAlgorithm: number;

declare const errSecInvalidAlgorithmParms: number;

declare const errSecInvalidAttributeAccessCredentials: number;

declare const errSecInvalidAttributeBase: number;

declare const errSecInvalidAttributeBlockSize: number;

declare const errSecInvalidAttributeDLDBHandle: number;

declare const errSecInvalidAttributeEffectiveBits: number;

declare const errSecInvalidAttributeEndDate: number;

declare const errSecInvalidAttributeInitVector: number;

declare const errSecInvalidAttributeIterationCount: number;

declare const errSecInvalidAttributeKey: number;

declare const errSecInvalidAttributeKeyLength: number;

declare const errSecInvalidAttributeKeyType: number;

declare const errSecInvalidAttributeLabel: number;

declare const errSecInvalidAttributeMode: number;

declare const errSecInvalidAttributeOutputSize: number;

declare const errSecInvalidAttributePadding: number;

declare const errSecInvalidAttributePassphrase: number;

declare const errSecInvalidAttributePrime: number;

declare const errSecInvalidAttributePrivateKeyFormat: number;

declare const errSecInvalidAttributePublicKeyFormat: number;

declare const errSecInvalidAttributeRandom: number;

declare const errSecInvalidAttributeRounds: number;

declare const errSecInvalidAttributeSalt: number;

declare const errSecInvalidAttributeSeed: number;

declare const errSecInvalidAttributeStartDate: number;

declare const errSecInvalidAttributeSubprime: number;

declare const errSecInvalidAttributeSymmetricKeyFormat: number;

declare const errSecInvalidAttributeVersion: number;

declare const errSecInvalidAttributeWrappedKeyFormat: number;

declare const errSecInvalidAuthority: number;

declare const errSecInvalidAuthorityKeyID: number;

declare const errSecInvalidBaseACLs: number;

declare const errSecInvalidBundleInfo: number;

declare const errSecInvalidCRL: number;

declare const errSecInvalidCRLEncoding: number;

declare const errSecInvalidCRLGroup: number;

declare const errSecInvalidCRLIndex: number;

declare const errSecInvalidCRLType: number;

declare const errSecInvalidCallback: number;

declare const errSecInvalidCertAuthority: number;

declare const errSecInvalidCertificateGroup: number;

declare const errSecInvalidCertificateRef: number;

declare const errSecInvalidContext: number;

declare const errSecInvalidDBList: number;

declare const errSecInvalidDBLocation: number;

declare const errSecInvalidData: number;

declare const errSecInvalidDatabaseBlob: number;

declare const errSecInvalidDigestAlgorithm: number;

declare const errSecInvalidEncoding: number;

declare const errSecInvalidExtendedKeyUsage: number;

declare const errSecInvalidFormType: number;

declare const errSecInvalidGUID: number;

declare const errSecInvalidHandle: number;

declare const errSecInvalidHandleUsage: number;

declare const errSecInvalidID: number;

declare const errSecInvalidIDLinkage: number;

declare const errSecInvalidIdentifier: number;

declare const errSecInvalidIndex: number;

declare const errSecInvalidIndexInfo: number;

declare const errSecInvalidInputVector: number;

declare const errSecInvalidItemRef: number;

declare const errSecInvalidKeyAttributeMask: number;

declare const errSecInvalidKeyBlob: number;

declare const errSecInvalidKeyFormat: number;

declare const errSecInvalidKeyHierarchy: number;

declare const errSecInvalidKeyLabel: number;

declare const errSecInvalidKeyRef: number;

declare const errSecInvalidKeyUsageForPolicy: number;

declare const errSecInvalidKeyUsageMask: number;

declare const errSecInvalidKeychain: number;

declare const errSecInvalidLoginName: number;

declare const errSecInvalidModifyMode: number;

declare const errSecInvalidName: number;

declare const errSecInvalidNetworkAddress: number;

declare const errSecInvalidNewOwner: number;

declare const errSecInvalidNumberOfFields: number;

declare const errSecInvalidOutputVector: number;

declare const errSecInvalidOwnerEdit: number;

declare const errSecInvalidPVC: number;

declare const errSecInvalidParsingModule: number;

declare const errSecInvalidPassthroughID: number;

declare const errSecInvalidPasswordRef: number;

declare const errSecInvalidPointer: number;

declare const errSecInvalidPolicyIdentifiers: number;

declare const errSecInvalidPrefsDomain: number;

declare const errSecInvalidQuery: number;

declare const errSecInvalidReason: number;

declare const errSecInvalidRecord: number;

declare const errSecInvalidRequestInputs: number;

declare const errSecInvalidRequestor: number;

declare const errSecInvalidResponseVector: number;

declare const errSecInvalidRoot: number;

declare const errSecInvalidSampleValue: number;

declare const errSecInvalidScope: number;

declare const errSecInvalidSearchRef: number;

declare const errSecInvalidServiceMask: number;

declare const errSecInvalidSignature: number;

declare const errSecInvalidStopOnPolicy: number;

declare const errSecInvalidSubServiceID: number;

declare const errSecInvalidSubjectKeyID: number;

declare const errSecInvalidSubjectName: number;

declare const errSecInvalidTimeString: number;

declare const errSecInvalidTrustSetting: number;

declare const errSecInvalidTrustSettings: number;

declare const errSecInvalidTuple: number;

declare const errSecInvalidTupleCredendtials: number;

declare const errSecInvalidTupleGroup: number;

declare const errSecInvalidValidityPeriod: number;

declare const errSecInvalidValue: number;

declare const errSecItemNotFound: number;

declare const errSecKeyBlobTypeIncorrect: number;

declare const errSecKeyHeaderInconsistent: number;

declare const errSecKeyIsSensitive: number;

declare const errSecKeySizeNotAllowed: number;

declare const errSecKeyUsageIncorrect: number;

declare const errSecLibraryReferenceNotFound: number;

declare const errSecMDSError: number;

declare const errSecMemoryError: number;

declare const errSecMissingAlgorithmParms: number;

declare const errSecMissingAttributeAccessCredentials: number;

declare const errSecMissingAttributeBase: number;

declare const errSecMissingAttributeBlockSize: number;

declare const errSecMissingAttributeDLDBHandle: number;

declare const errSecMissingAttributeEffectiveBits: number;

declare const errSecMissingAttributeEndDate: number;

declare const errSecMissingAttributeInitVector: number;

declare const errSecMissingAttributeIterationCount: number;

declare const errSecMissingAttributeKey: number;

declare const errSecMissingAttributeKeyLength: number;

declare const errSecMissingAttributeKeyType: number;

declare const errSecMissingAttributeLabel: number;

declare const errSecMissingAttributeMode: number;

declare const errSecMissingAttributeOutputSize: number;

declare const errSecMissingAttributePadding: number;

declare const errSecMissingAttributePassphrase: number;

declare const errSecMissingAttributePrime: number;

declare const errSecMissingAttributePrivateKeyFormat: number;

declare const errSecMissingAttributePublicKeyFormat: number;

declare const errSecMissingAttributeRandom: number;

declare const errSecMissingAttributeRounds: number;

declare const errSecMissingAttributeSalt: number;

declare const errSecMissingAttributeSeed: number;

declare const errSecMissingAttributeStartDate: number;

declare const errSecMissingAttributeSubprime: number;

declare const errSecMissingAttributeSymmetricKeyFormat: number;

declare const errSecMissingAttributeVersion: number;

declare const errSecMissingAttributeWrappedKeyFormat: number;

declare const errSecMissingEntitlement: number;

declare const errSecMissingRequiredExtension: number;

declare const errSecMissingValue: number;

declare const errSecMobileMeCSRVerifyFailure: number;

declare const errSecMobileMeFailedConsistencyCheck: number;

declare const errSecMobileMeNoRequestPending: number;

declare const errSecMobileMeRequestAlreadyPending: number;

declare const errSecMobileMeRequestQueued: number;

declare const errSecMobileMeRequestRedirected: number;

declare const errSecMobileMeServerAlreadyExists: number;

declare const errSecMobileMeServerError: number;

declare const errSecMobileMeServerNotAvailable: number;

declare const errSecMobileMeServerServiceErr: number;

declare const errSecModuleManagerInitializeFailed: number;

declare const errSecModuleManagerNotFound: number;

declare const errSecModuleManifestVerifyFailed: number;

declare const errSecModuleNotLoaded: number;

declare const errSecMultipleExecSegments: number;

declare const errSecMultiplePrivKeys: number;

declare const errSecMultipleValuesUnsupported: number;

declare const errSecNetworkFailure: number;

declare const errSecNoAccessForItem: number;

declare const errSecNoBasicConstraints: number;

declare const errSecNoBasicConstraintsCA: number;

declare const errSecNoCertificateModule: number;

declare const errSecNoDefaultAuthority: number;

declare const errSecNoDefaultKeychain: number;

declare const errSecNoFieldValues: number;

declare const errSecNoPolicyModule: number;

declare const errSecNoStorageModule: number;

declare const errSecNoSuchAttr: number;

declare const errSecNoSuchClass: number;

declare const errSecNoSuchKeychain: number;

declare const errSecNoTrustSettings: number;

declare const errSecNotAvailable: number;

declare const errSecNotInitialized: number;

declare const errSecNotLoggedIn: number;

declare const errSecNotSigner: number;

declare const errSecNotTrusted: number;

declare const errSecOCSPBadRequest: number;

declare const errSecOCSPBadResponse: number;

declare const errSecOCSPNoSigner: number;

declare const errSecOCSPNotTrustedToAnchor: number;

declare const errSecOCSPResponderInternalError: number;

declare const errSecOCSPResponderMalformedReq: number;

declare const errSecOCSPResponderSignatureRequired: number;

declare const errSecOCSPResponderTryLater: number;

declare const errSecOCSPResponderUnauthorized: number;

declare const errSecOCSPResponseNonceMismatch: number;

declare const errSecOCSPSignatureError: number;

declare const errSecOCSPStatusUnrecognized: number;

declare const errSecOCSPUnavailable: number;

declare const errSecOpWr: number;

declare const errSecOutputLengthError: number;

declare const errSecPVCAlreadyConfigured: number;

declare const errSecPVCReferentNotFound: number;

declare const errSecParam: number;

declare const errSecPassphraseRequired: number;

declare const errSecPathLengthConstraintExceeded: number;

declare const errSecPkcs12VerifyFailure: number;

declare const errSecPolicyNotFound: number;

declare const errSecPrivilegeNotGranted: number;

declare const errSecPrivilegeNotSupported: number;

declare const errSecPublicKeyInconsistent: number;

declare const errSecQuerySizeUnknown: number;

declare const errSecQuotaExceeded: number;

declare const errSecReadOnly: number;

declare const errSecReadOnlyAttr: number;

declare const errSecRecordModified: number;

declare const errSecRejectedForm: number;

declare const errSecRequestDescriptor: number;

declare const errSecRequestLost: number;

declare const errSecRequestRejected: number;

declare const errSecResourceSignBadCertChainLength: number;

declare const errSecResourceSignBadExtKeyUsage: number;

declare const errSecSMIMEBadExtendedKeyUsage: number;

declare const errSecSMIMEBadKeyUsage: number;

declare const errSecSMIMEEmailAddressesNotFound: number;

declare const errSecSMIMEKeyUsageNotCritical: number;

declare const errSecSMIMENoEmailAddress: number;

declare const errSecSMIMESubjAltNameNotCritical: number;

declare const errSecSSLBadExtendedKeyUsage: number;

declare const errSecSelfCheckFailed: number;

declare const errSecServiceNotAvailable: number;

declare const errSecSigningTimeMissing: number;

declare const errSecStagedOperationInProgress: number;

declare const errSecStagedOperationNotStarted: number;

declare const errSecSuccess: number;

declare const errSecTagNotFound: number;

declare const errSecTimestampAddInfoNotAvailable: number;

declare const errSecTimestampBadAlg: number;

declare const errSecTimestampBadDataFormat: number;

declare const errSecTimestampBadRequest: number;

declare const errSecTimestampInvalid: number;

declare const errSecTimestampMissing: number;

declare const errSecTimestampNotTrusted: number;

declare const errSecTimestampRejection: number;

declare const errSecTimestampRevocationNotification: number;

declare const errSecTimestampRevocationWarning: number;

declare const errSecTimestampServiceNotAvailable: number;

declare const errSecTimestampSystemFailure: number;

declare const errSecTimestampTimeNotAvailable: number;

declare const errSecTimestampUnacceptedExtension: number;

declare const errSecTimestampUnacceptedPolicy: number;

declare const errSecTimestampWaiting: number;

declare const errSecTrustNotAvailable: number;

declare const errSecTrustSettingDeny: number;

declare const errSecUnimplemented: number;

declare const errSecUnknownCRLExtension: number;

declare const errSecUnknownCertExtension: number;

declare const errSecUnknownCriticalExtensionFlag: number;

declare const errSecUnknownFormat: number;

declare const errSecUnknownQualifiedCertStatement: number;

declare const errSecUnknownTag: number;

declare const errSecUnsupportedAddressType: number;

declare const errSecUnsupportedFieldFormat: number;

declare const errSecUnsupportedFormat: number;

declare const errSecUnsupportedIndexInfo: number;

declare const errSecUnsupportedKeyAttributeMask: number;

declare const errSecUnsupportedKeyFormat: number;

declare const errSecUnsupportedKeyLabel: number;

declare const errSecUnsupportedKeySize: number;

declare const errSecUnsupportedKeyUsageMask: number;

declare const errSecUnsupportedLocality: number;

declare const errSecUnsupportedNumAttributes: number;

declare const errSecUnsupportedNumIndexes: number;

declare const errSecUnsupportedNumRecordTypes: number;

declare const errSecUnsupportedNumSelectionPreds: number;

declare const errSecUnsupportedOperator: number;

declare const errSecUnsupportedQueryLimits: number;

declare const errSecUnsupportedService: number;

declare const errSecUnsupportedVectorOfBuffers: number;

declare const errSecUserCanceled: number;

declare const errSecVerificationFailure: number;

declare const errSecVerifyActionFailed: number;

declare const errSecVerifyFailed: number;

declare const errSecWrPerm: number;

declare const errSecWrongSecVersion: number;

declare const errSecureDownloadInvalidDownload: number;

declare const errSecureDownloadInvalidTicket: number;

declare const errSessionAuthorizationDenied: number;

declare const errSessionInternal: number;

declare const errSessionInvalidAttributes: number;

declare const errSessionInvalidFlags: number;

declare const errSessionInvalidId: number;

declare const errSessionSuccess: number;

declare const errSessionValueNotSet: number;

declare var gGuidAppleCSP: CSSM_GUID;

declare var gGuidAppleCSPDL: CSSM_GUID;

declare var gGuidAppleDotMacDL: CSSM_GUID;

declare var gGuidAppleDotMacTP: CSSM_GUID;

declare var gGuidAppleFileDL: CSSM_GUID;

declare var gGuidAppleLDAPDL: CSSM_GUID;

declare var gGuidAppleSdCSPDL: CSSM_GUID;

declare var gGuidAppleX509CL: CSSM_GUID;

declare var gGuidAppleX509TP: CSSM_GUID;

declare var gGuidCssm: CSSM_GUID;

declare const kAuthorizationCallbacksVersion: number;

declare var kAuthorizationExternalFormLength: number;

declare const kAuthorizationFlagCanNotPreAuthorize: number;

declare const kAuthorizationPluginInterfaceVersion: number;

declare var kCMSEncoderDigestAlgorithmSHA1: string;

declare var kCMSEncoderDigestAlgorithmSHA256: string;

declare var kSecACLAuthorizationAny: string;

declare var kSecACLAuthorizationChangeACL: string;

declare var kSecACLAuthorizationChangeOwner: string;

declare var kSecACLAuthorizationDecrypt: string;

declare var kSecACLAuthorizationDelete: string;

declare var kSecACLAuthorizationDerive: string;

declare var kSecACLAuthorizationEncrypt: string;

declare var kSecACLAuthorizationExportClear: string;

declare var kSecACLAuthorizationExportWrapped: string;

declare var kSecACLAuthorizationGenKey: string;

declare var kSecACLAuthorizationImportClear: string;

declare var kSecACLAuthorizationImportWrapped: string;

declare var kSecACLAuthorizationIntegrity: string;

declare var kSecACLAuthorizationKeychainCreate: string;

declare var kSecACLAuthorizationKeychainDelete: string;

declare var kSecACLAuthorizationKeychainItemDelete: string;

declare var kSecACLAuthorizationKeychainItemInsert: string;

declare var kSecACLAuthorizationKeychainItemModify: string;

declare var kSecACLAuthorizationKeychainItemRead: string;

declare var kSecACLAuthorizationLogin: string;

declare var kSecACLAuthorizationMAC: string;

declare var kSecACLAuthorizationPartitionID: string;

declare var kSecACLAuthorizationSign: string;

declare var kSecAsn1AnyTemplate: SecAsn1Template;

declare var kSecAsn1BMPStringTemplate: SecAsn1Template;

declare var kSecAsn1BitStringTemplate: SecAsn1Template;

declare var kSecAsn1BooleanTemplate: SecAsn1Template;

declare var kSecAsn1EnumeratedTemplate: SecAsn1Template;

declare var kSecAsn1GeneralizedTimeTemplate: SecAsn1Template;

declare var kSecAsn1IA5StringTemplate: SecAsn1Template;

declare var kSecAsn1IntegerTemplate: SecAsn1Template;

declare var kSecAsn1NullTemplate: SecAsn1Template;

declare var kSecAsn1ObjectIDTemplate: SecAsn1Template;

declare var kSecAsn1OctetStringTemplate: SecAsn1Template;

declare var kSecAsn1PointerToAnyTemplate: SecAsn1Template;

declare var kSecAsn1PointerToBMPStringTemplate: SecAsn1Template;

declare var kSecAsn1PointerToBitStringTemplate: SecAsn1Template;

declare var kSecAsn1PointerToBooleanTemplate: SecAsn1Template;

declare var kSecAsn1PointerToEnumeratedTemplate: SecAsn1Template;

declare var kSecAsn1PointerToGeneralizedTimeTemplate: SecAsn1Template;

declare var kSecAsn1PointerToIA5StringTemplate: SecAsn1Template;

declare var kSecAsn1PointerToIntegerTemplate: SecAsn1Template;

declare var kSecAsn1PointerToNullTemplate: SecAsn1Template;

declare var kSecAsn1PointerToObjectIDTemplate: SecAsn1Template;

declare var kSecAsn1PointerToOctetStringTemplate: SecAsn1Template;

declare var kSecAsn1PointerToPrintableStringTemplate: SecAsn1Template;

declare var kSecAsn1PointerToT61StringTemplate: SecAsn1Template;

declare var kSecAsn1PointerToTeletexStringTemplate: SecAsn1Template;

declare var kSecAsn1PointerToUTCTimeTemplate: SecAsn1Template;

declare var kSecAsn1PointerToUTF8StringTemplate: SecAsn1Template;

declare var kSecAsn1PointerToUniversalStringTemplate: SecAsn1Template;

declare var kSecAsn1PointerToVisibleStringTemplate: SecAsn1Template;

declare var kSecAsn1PrintableStringTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfAnyTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfBMPStringTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfBitStringTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfBooleanTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfEnumeratedTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfGeneralizedTimeTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfIA5StringTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfIntegerTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfNullTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfObjectIDTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfOctetStringTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfPrintableStringTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfT61StringTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfTeletexStringTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfUTCTimeTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfUTF8StringTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfUniversalStringTemplate: SecAsn1Template;

declare var kSecAsn1SequenceOfVisibleStringTemplate: SecAsn1Template;

declare var kSecAsn1SetOfAnyTemplate: SecAsn1Template;

declare var kSecAsn1SetOfBMPStringTemplate: SecAsn1Template;

declare var kSecAsn1SetOfBitStringTemplate: SecAsn1Template;

declare var kSecAsn1SetOfBooleanTemplate: SecAsn1Template;

declare var kSecAsn1SetOfEnumeratedTemplate: SecAsn1Template;

declare var kSecAsn1SetOfGeneralizedTimeTemplate: SecAsn1Template;

declare var kSecAsn1SetOfIA5StringTemplate: SecAsn1Template;

declare var kSecAsn1SetOfIntegerTemplate: SecAsn1Template;

declare var kSecAsn1SetOfNullTemplate: SecAsn1Template;

declare var kSecAsn1SetOfObjectIDTemplate: SecAsn1Template;

declare var kSecAsn1SetOfOctetStringTemplate: SecAsn1Template;

declare var kSecAsn1SetOfPrintableStringTemplate: SecAsn1Template;

declare var kSecAsn1SetOfT61StringTemplate: SecAsn1Template;

declare var kSecAsn1SetOfTeletexStringTemplate: SecAsn1Template;

declare var kSecAsn1SetOfUTCTimeTemplate: SecAsn1Template;

declare var kSecAsn1SetOfUTF8StringTemplate: SecAsn1Template;

declare var kSecAsn1SetOfUniversalStringTemplate: SecAsn1Template;

declare var kSecAsn1SetOfVisibleStringTemplate: SecAsn1Template;

declare var kSecAsn1SkipTemplate: SecAsn1Template;

declare var kSecAsn1T61StringTemplate: SecAsn1Template;

declare var kSecAsn1TeletexStringTemplate: SecAsn1Template;

declare var kSecAsn1UTCTimeTemplate: SecAsn1Template;

declare var kSecAsn1UTF8StringTemplate: SecAsn1Template;

declare var kSecAsn1UniversalStringTemplate: SecAsn1Template;

declare var kSecAsn1UnsignedIntegerTemplate: SecAsn1Template;

declare var kSecAsn1VisibleStringTemplate: SecAsn1Template;

declare var kSecAttrAccess: string;

declare var kSecAttrAccessControl: string;

declare var kSecAttrAccessGroup: string;

declare var kSecAttrAccessGroupToken: string;

declare var kSecAttrAccessible: string;

declare var kSecAttrAccessibleAfterFirstUnlock: string;

declare var kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly: string;

declare var kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly: string;

declare var kSecAttrAccessibleWhenUnlocked: string;

declare var kSecAttrAccessibleWhenUnlockedThisDeviceOnly: string;

declare var kSecAttrAccount: string;

declare var kSecAttrApplicationLabel: string;

declare var kSecAttrApplicationTag: string;

declare var kSecAttrAuthenticationType: string;

declare var kSecAttrAuthenticationTypeDPA: string;

declare var kSecAttrAuthenticationTypeDefault: string;

declare var kSecAttrAuthenticationTypeHTMLForm: string;

declare var kSecAttrAuthenticationTypeHTTPBasic: string;

declare var kSecAttrAuthenticationTypeHTTPDigest: string;

declare var kSecAttrAuthenticationTypeMSN: string;

declare var kSecAttrAuthenticationTypeNTLM: string;

declare var kSecAttrAuthenticationTypeRPA: string;

declare var kSecAttrCanDecrypt: string;

declare var kSecAttrCanDerive: string;

declare var kSecAttrCanEncrypt: string;

declare var kSecAttrCanSign: string;

declare var kSecAttrCanUnwrap: string;

declare var kSecAttrCanVerify: string;

declare var kSecAttrCanWrap: string;

declare var kSecAttrCertificateEncoding: string;

declare var kSecAttrCertificateType: string;

declare var kSecAttrComment: string;

declare var kSecAttrCreationDate: string;

declare var kSecAttrCreator: string;

declare var kSecAttrDescription: string;

declare var kSecAttrEffectiveKeySize: string;

declare var kSecAttrGeneric: string;

declare var kSecAttrIsExtractable: string;

declare var kSecAttrIsInvisible: string;

declare var kSecAttrIsNegative: string;

declare var kSecAttrIsPermanent: string;

declare var kSecAttrIsSensitive: string;

declare var kSecAttrIssuer: string;

declare var kSecAttrKeyClass: string;

declare var kSecAttrKeyClassPrivate: string;

declare var kSecAttrKeyClassPublic: string;

declare var kSecAttrKeyClassSymmetric: string;

declare var kSecAttrKeySizeInBits: string;

declare var kSecAttrKeyType: string;

declare var kSecAttrKeyType3DES: string;

declare var kSecAttrKeyTypeAES: string;

declare var kSecAttrKeyTypeCAST: string;

declare var kSecAttrKeyTypeDES: string;

declare var kSecAttrKeyTypeDSA: string;

declare var kSecAttrKeyTypeEC: string;

declare var kSecAttrKeyTypeECDSA: string;

declare var kSecAttrKeyTypeECSECPrimeRandom: string;

declare var kSecAttrKeyTypeRC2: string;

declare var kSecAttrKeyTypeRC4: string;

declare var kSecAttrKeyTypeRSA: string;

declare var kSecAttrLabel: string;

declare var kSecAttrModificationDate: string;

declare var kSecAttrPRF: string;

declare var kSecAttrPRFHmacAlgSHA1: string;

declare var kSecAttrPRFHmacAlgSHA224: string;

declare var kSecAttrPRFHmacAlgSHA256: string;

declare var kSecAttrPRFHmacAlgSHA384: string;

declare var kSecAttrPRFHmacAlgSHA512: string;

declare var kSecAttrPath: string;

declare var kSecAttrPersistantReference: string;

declare var kSecAttrPersistentReference: string;

declare var kSecAttrPort: string;

declare var kSecAttrProtocol: string;

declare var kSecAttrProtocolAFP: string;

declare var kSecAttrProtocolAppleTalk: string;

declare var kSecAttrProtocolDAAP: string;

declare var kSecAttrProtocolEPPC: string;

declare var kSecAttrProtocolFTP: string;

declare var kSecAttrProtocolFTPAccount: string;

declare var kSecAttrProtocolFTPProxy: string;

declare var kSecAttrProtocolFTPS: string;

declare var kSecAttrProtocolHTTP: string;

declare var kSecAttrProtocolHTTPProxy: string;

declare var kSecAttrProtocolHTTPS: string;

declare var kSecAttrProtocolHTTPSProxy: string;

declare var kSecAttrProtocolIMAP: string;

declare var kSecAttrProtocolIMAPS: string;

declare var kSecAttrProtocolIPP: string;

declare var kSecAttrProtocolIRC: string;

declare var kSecAttrProtocolIRCS: string;

declare var kSecAttrProtocolLDAP: string;

declare var kSecAttrProtocolLDAPS: string;

declare var kSecAttrProtocolNNTP: string;

declare var kSecAttrProtocolNNTPS: string;

declare var kSecAttrProtocolPOP3: string;

declare var kSecAttrProtocolPOP3S: string;

declare var kSecAttrProtocolRTSP: string;

declare var kSecAttrProtocolRTSPProxy: string;

declare var kSecAttrProtocolSMB: string;

declare var kSecAttrProtocolSMTP: string;

declare var kSecAttrProtocolSOCKS: string;

declare var kSecAttrProtocolSSH: string;

declare var kSecAttrProtocolTelnet: string;

declare var kSecAttrProtocolTelnetS: string;

declare var kSecAttrPublicKeyHash: string;

declare var kSecAttrRounds: string;

declare var kSecAttrSalt: string;

declare var kSecAttrSecurityDomain: string;

declare var kSecAttrSerialNumber: string;

declare var kSecAttrServer: string;

declare var kSecAttrService: string;

declare var kSecAttrSubject: string;

declare var kSecAttrSubjectKeyID: string;

declare var kSecAttrSyncViewHint: string;

declare var kSecAttrSynchronizable: string;

declare var kSecAttrSynchronizableAny: string;

declare var kSecAttrTokenID: string;

declare var kSecAttrTokenIDSecureEnclave: string;

declare var kSecAttrType: string;

declare var kSecBase32Encoding: string;

declare var kSecBase64Encoding: string;

declare var kSecCFErrorArchitecture: string;

declare var kSecCFErrorGuestAttributes: string;

declare var kSecCFErrorInfoPlist: string;

declare var kSecCFErrorPath: string;

declare var kSecCFErrorPattern: string;

declare var kSecCFErrorRequirementSyntax: string;

declare var kSecCFErrorResourceAdded: string;

declare var kSecCFErrorResourceAltered: string;

declare var kSecCFErrorResourceMissing: string;

declare var kSecCFErrorResourceSeal: string;

declare var kSecCFErrorResourceSideband: string;

declare const kSecCSBasicValidateOnly: number;

declare const kSecCSCalculateCMSDigest: number;

declare const kSecCSCheckAllArchitectures: number;

declare const kSecCSCheckGatekeeperArchitectures: number;

declare const kSecCSCheckNestedCode: number;

declare const kSecCSContentInformation: number;

declare const kSecCSDedicatedHost: number;

declare const kSecCSDoNotValidateExecutable: number;

declare const kSecCSDoNotValidateResources: number;

declare const kSecCSDynamicInformation: number;

declare const kSecCSFullReport: number;

declare const kSecCSGenerateGuestHash: number;

declare const kSecCSInternalInformation: number;

declare const kSecCSRequirementInformation: number;

declare const kSecCSRestrictSidebandData: number;

declare const kSecCSRestrictSymlinks: number;

declare const kSecCSRestrictToAppLike: number;

declare const kSecCSSigningInformation: number;

declare const kSecCSSingleThreaded: number;

declare const kSecCSSkipResourceDirectory: number;

declare const kSecCSStrictValidate: number;

declare const kSecCSUseAllArchitectures: number;

declare const kSecCSUseSoftwareSigningCert: number;

declare const kSecCSValidatePEH: number;

declare const kSecCertEncodingItemAttr: number;

declare const kSecCertTypeItemAttr: number;

declare var kSecClass: string;

declare var kSecClassCertificate: string;

declare var kSecClassGenericPassword: string;

declare var kSecClassIdentity: string;

declare var kSecClassInternetPassword: string;

declare var kSecClassKey: string;

declare var kSecCodeAttributeArchitecture: string;

declare var kSecCodeAttributeBundleVersion: string;

declare var kSecCodeAttributeSubarchitecture: string;

declare var kSecCodeAttributeUniversalFileOffset: string;

declare var kSecCodeInfoCMS: string;

declare var kSecCodeInfoCdHashes: string;

declare var kSecCodeInfoCertificates: string;

declare var kSecCodeInfoChangedFiles: string;

declare var kSecCodeInfoDesignatedRequirement: string;

declare var kSecCodeInfoDigestAlgorithm: string;

declare var kSecCodeInfoDigestAlgorithms: string;

declare var kSecCodeInfoEntitlements: string;

declare var kSecCodeInfoEntitlementsDict: string;

declare var kSecCodeInfoFlags: string;

declare var kSecCodeInfoFormat: string;

declare var kSecCodeInfoIdentifier: string;

declare var kSecCodeInfoImplicitDesignatedRequirement: string;

declare var kSecCodeInfoMainExecutable: string;

declare var kSecCodeInfoPList: string;

declare var kSecCodeInfoPlatformIdentifier: string;

declare var kSecCodeInfoRequirementData: string;

declare var kSecCodeInfoRequirements: string;

declare var kSecCodeInfoRuntimeVersion: string;

declare var kSecCodeInfoSource: string;

declare var kSecCodeInfoStatus: string;

declare var kSecCodeInfoTeamIdentifier: string;

declare var kSecCodeInfoTime: string;

declare var kSecCodeInfoTimestamp: string;

declare var kSecCodeInfoTrust: string;

declare var kSecCodeInfoUnique: string;

declare var kSecCompressionRatio: string;

declare var kSecDecodeTypeAttribute: string;

declare var kSecDigestHMACKeyAttribute: string;

declare var kSecDigestHMACMD5: string;

declare var kSecDigestHMACSHA1: string;

declare var kSecDigestHMACSHA2: string;

declare var kSecDigestLengthAttribute: string;

declare var kSecDigestMD2: string;

declare var kSecDigestMD4: string;

declare var kSecDigestMD5: string;

declare var kSecDigestSHA1: string;

declare var kSecDigestSHA2: string;

declare var kSecDigestTypeAttribute: string;

declare var kSecEncodeLineLengthAttribute: string;

declare var kSecEncodeTypeAttribute: string;

declare var kSecEncryptKey: string;

declare var kSecEncryptionMode: string;

declare var kSecGuestAttributeArchitecture: string;

declare var kSecGuestAttributeAudit: string;

declare var kSecGuestAttributeCanonical: string;

declare var kSecGuestAttributeDynamicCode: string;

declare var kSecGuestAttributeDynamicCodeInfoPlist: string;

declare var kSecGuestAttributeHash: string;

declare var kSecGuestAttributeMachPort: string;

declare var kSecGuestAttributePid: string;

declare var kSecGuestAttributeSubarchitecture: string;

declare const kSecHonorRoot: number;

declare var kSecIVKey: string;

declare var kSecIdentityDomainDefault: string;

declare var kSecIdentityDomainKerberosKDC: string;

declare var kSecImportExportAccess: string;

declare var kSecImportExportKeychain: string;

declare var kSecImportExportPassphrase: string;

declare var kSecImportItemCertChain: string;

declare var kSecImportItemIdentity: string;

declare var kSecImportItemKeyID: string;

declare var kSecImportItemLabel: string;

declare var kSecImportItemTrust: string;

declare var kSecInputIsAttributeName: string;

declare var kSecInputIsDigest: string;

declare var kSecInputIsPlainText: string;

declare var kSecInputIsRaw: string;

declare const kSecIssuerItemAttr: number;

declare var kSecKeyAlgorithmECDHKeyExchangeCofactor: any;

declare var kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA1: any;

declare var kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA224: any;

declare var kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA256: any;

declare var kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA384: any;

declare var kSecKeyAlgorithmECDHKeyExchangeCofactorX963SHA512: any;

declare var kSecKeyAlgorithmECDHKeyExchangeStandard: any;

declare var kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA1: any;

declare var kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA224: any;

declare var kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA256: any;

declare var kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA384: any;

declare var kSecKeyAlgorithmECDHKeyExchangeStandardX963SHA512: any;

declare var kSecKeyAlgorithmECDSASignatureDigestX962: any;

declare var kSecKeyAlgorithmECDSASignatureDigestX962SHA1: any;

declare var kSecKeyAlgorithmECDSASignatureDigestX962SHA224: any;

declare var kSecKeyAlgorithmECDSASignatureDigestX962SHA256: any;

declare var kSecKeyAlgorithmECDSASignatureDigestX962SHA384: any;

declare var kSecKeyAlgorithmECDSASignatureDigestX962SHA512: any;

declare var kSecKeyAlgorithmECDSASignatureMessageX962SHA1: any;

declare var kSecKeyAlgorithmECDSASignatureMessageX962SHA224: any;

declare var kSecKeyAlgorithmECDSASignatureMessageX962SHA256: any;

declare var kSecKeyAlgorithmECDSASignatureMessageX962SHA384: any;

declare var kSecKeyAlgorithmECDSASignatureMessageX962SHA512: any;

declare var kSecKeyAlgorithmECDSASignatureRFC4754: any;

declare var kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA224AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA256AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA384AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionCofactorVariableIVX963SHA512AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionCofactorX963SHA1AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionCofactorX963SHA224AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionCofactorX963SHA256AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionCofactorX963SHA384AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionCofactorX963SHA512AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA224AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA256AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA384AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionStandardVariableIVX963SHA512AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionStandardX963SHA1AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionStandardX963SHA224AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionStandardX963SHA256AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionStandardX963SHA384AESGCM: any;

declare var kSecKeyAlgorithmECIESEncryptionStandardX963SHA512AESGCM: any;

declare var kSecKeyAlgorithmRSAEncryptionOAEPSHA1: any;

declare var kSecKeyAlgorithmRSAEncryptionOAEPSHA1AESGCM: any;

declare var kSecKeyAlgorithmRSAEncryptionOAEPSHA224: any;

declare var kSecKeyAlgorithmRSAEncryptionOAEPSHA224AESGCM: any;

declare var kSecKeyAlgorithmRSAEncryptionOAEPSHA256: any;

declare var kSecKeyAlgorithmRSAEncryptionOAEPSHA256AESGCM: any;

declare var kSecKeyAlgorithmRSAEncryptionOAEPSHA384: any;

declare var kSecKeyAlgorithmRSAEncryptionOAEPSHA384AESGCM: any;

declare var kSecKeyAlgorithmRSAEncryptionOAEPSHA512: any;

declare var kSecKeyAlgorithmRSAEncryptionOAEPSHA512AESGCM: any;

declare var kSecKeyAlgorithmRSAEncryptionPKCS1: any;

declare var kSecKeyAlgorithmRSAEncryptionRaw: any;

declare var kSecKeyAlgorithmRSASignatureDigestPKCS1v15Raw: any;

declare var kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA1: any;

declare var kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA224: any;

declare var kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA256: any;

declare var kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA384: any;

declare var kSecKeyAlgorithmRSASignatureDigestPKCS1v15SHA512: any;

declare var kSecKeyAlgorithmRSASignatureDigestPSSSHA1: any;

declare var kSecKeyAlgorithmRSASignatureDigestPSSSHA224: any;

declare var kSecKeyAlgorithmRSASignatureDigestPSSSHA256: any;

declare var kSecKeyAlgorithmRSASignatureDigestPSSSHA384: any;

declare var kSecKeyAlgorithmRSASignatureDigestPSSSHA512: any;

declare var kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA1: any;

declare var kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA224: any;

declare var kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA256: any;

declare var kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA384: any;

declare var kSecKeyAlgorithmRSASignatureMessagePKCS1v15SHA512: any;

declare var kSecKeyAlgorithmRSASignatureMessagePSSSHA1: any;

declare var kSecKeyAlgorithmRSASignatureMessagePSSSHA224: any;

declare var kSecKeyAlgorithmRSASignatureMessagePSSSHA256: any;

declare var kSecKeyAlgorithmRSASignatureMessagePSSSHA384: any;

declare var kSecKeyAlgorithmRSASignatureMessagePSSSHA512: any;

declare var kSecKeyAlgorithmRSASignatureRaw: any;

declare const kSecKeyAlias: number;

declare const kSecKeyAlwaysSensitive: number;

declare const kSecKeyApplicationTag: number;

declare var kSecKeyAttributeName: string;

declare const kSecKeyDecrypt: number;

declare const kSecKeyDerive: number;

declare const kSecKeyEffectiveKeySize: number;

declare const kSecKeyEncrypt: number;

declare const kSecKeyEndDate: number;

declare const kSecKeyExtractable: number;

declare const kSecKeyKeyClass: number;

declare const kSecKeyKeyCreator: number;

declare var kSecKeyKeyExchangeParameterRequestedSize: any;

declare var kSecKeyKeyExchangeParameterSharedInfo: any;

declare const kSecKeyKeySizeInBits: number;

declare const kSecKeyKeyType: number;

declare const kSecKeyLabel: number;

declare const kSecKeyModifiable: number;

declare const kSecKeyNeverExtractable: number;

declare const kSecKeyPermanent: number;

declare const kSecKeyPrintName: number;

declare const kSecKeyPrivate: number;

declare const kSecKeySensitive: number;

declare const kSecKeySign: number;

declare const kSecKeySignRecover: number;

declare const kSecKeyStartDate: number;

declare const kSecKeyUnwrap: number;

declare const kSecKeyVerify: number;

declare const kSecKeyVerifyRecover: number;

declare const kSecKeyWrap: number;

declare var kSecLineLength64: string;

declare var kSecLineLength76: string;

declare const kSecMatchBits: number;

declare var kSecMatchCaseInsensitive: string;

declare var kSecMatchDiacriticInsensitive: string;

declare var kSecMatchEmailAddressIfPresent: string;

declare var kSecMatchIssuers: string;

declare var kSecMatchItemList: string;

declare var kSecMatchLimit: string;

declare var kSecMatchLimitAll: string;

declare var kSecMatchLimitOne: string;

declare var kSecMatchPolicy: string;

declare var kSecMatchSearchList: string;

declare var kSecMatchSubjectContains: string;

declare var kSecMatchSubjectEndsWith: string;

declare var kSecMatchSubjectStartsWith: string;

declare var kSecMatchSubjectWholeString: string;

declare var kSecMatchTrustedOnly: string;

declare var kSecMatchValidOnDate: string;

declare var kSecMatchWidthInsensitive: string;

declare var kSecModeCBCKey: string;

declare var kSecModeCFBKey: string;

declare var kSecModeECBKey: string;

declare var kSecModeNoneKey: string;

declare var kSecModeOFBKey: string;

declare const kSecNoGuest: number;

declare var kSecOAEPEncodingParametersAttributeName: string;

declare var kSecOAEPMGF1DigestAlgorithmAttributeName: string;

declare var kSecOAEPMessageLengthAttributeName: string;

declare var kSecOIDADC_CERT_POLICY: string;

declare var kSecOIDAPPLE_CERT_POLICY: string;

declare var kSecOIDAPPLE_EKU_CODE_SIGNING: string;

declare var kSecOIDAPPLE_EKU_CODE_SIGNING_DEV: string;

declare var kSecOIDAPPLE_EKU_ICHAT_ENCRYPTION: string;

declare var kSecOIDAPPLE_EKU_ICHAT_SIGNING: string;

declare var kSecOIDAPPLE_EKU_RESOURCE_SIGNING: string;

declare var kSecOIDAPPLE_EKU_SYSTEM_IDENTITY: string;

declare var kSecOIDAPPLE_EXTENSION: string;

declare var kSecOIDAPPLE_EXTENSION_AAI_INTERMEDIATE: string;

declare var kSecOIDAPPLE_EXTENSION_ADC_APPLE_SIGNING: string;

declare var kSecOIDAPPLE_EXTENSION_ADC_DEV_SIGNING: string;

declare var kSecOIDAPPLE_EXTENSION_APPLEID_INTERMEDIATE: string;

declare var kSecOIDAPPLE_EXTENSION_APPLE_SIGNING: string;

declare var kSecOIDAPPLE_EXTENSION_CODE_SIGNING: string;

declare var kSecOIDAPPLE_EXTENSION_INTERMEDIATE_MARKER: string;

declare var kSecOIDAPPLE_EXTENSION_ITMS_INTERMEDIATE: string;

declare var kSecOIDAPPLE_EXTENSION_WWDR_INTERMEDIATE: string;

declare var kSecOIDAuthorityInfoAccess: string;

declare var kSecOIDAuthorityKeyIdentifier: string;

declare var kSecOIDBasicConstraints: string;

declare var kSecOIDBiometricInfo: string;

declare var kSecOIDCSSMKeyStruct: string;

declare var kSecOIDCertIssuer: string;

declare var kSecOIDCertificatePolicies: string;

declare var kSecOIDClientAuth: string;

declare var kSecOIDCollectiveStateProvinceName: string;

declare var kSecOIDCollectiveStreetAddress: string;

declare var kSecOIDCommonName: string;

declare var kSecOIDCountryName: string;

declare var kSecOIDCrlDistributionPoints: string;

declare var kSecOIDCrlNumber: string;

declare var kSecOIDCrlReason: string;

declare var kSecOIDDOTMAC_CERT_EMAIL_ENCRYPT: string;

declare var kSecOIDDOTMAC_CERT_EMAIL_SIGN: string;

declare var kSecOIDDOTMAC_CERT_EXTENSION: string;

declare var kSecOIDDOTMAC_CERT_IDENTITY: string;

declare var kSecOIDDOTMAC_CERT_POLICY: string;

declare var kSecOIDDeltaCrlIndicator: string;

declare var kSecOIDDescription: string;

declare var kSecOIDEKU_IPSec: string;

declare var kSecOIDEmailAddress: string;

declare var kSecOIDEmailProtection: string;

declare var kSecOIDExtendedKeyUsage: string;

declare var kSecOIDExtendedKeyUsageAny: string;

declare var kSecOIDExtendedUseCodeSigning: string;

declare var kSecOIDGivenName: string;

declare var kSecOIDHoldInstructionCode: string;

declare var kSecOIDInvalidityDate: string;

declare var kSecOIDIssuerAltName: string;

declare var kSecOIDIssuingDistributionPoint: string;

declare var kSecOIDIssuingDistributionPoints: string;

declare var kSecOIDKERBv5_PKINIT_KP_CLIENT_AUTH: string;

declare var kSecOIDKERBv5_PKINIT_KP_KDC: string;

declare var kSecOIDKeyUsage: string;

declare var kSecOIDLocalityName: string;

declare var kSecOIDMS_NTPrincipalName: string;

declare var kSecOIDMicrosoftSGC: string;

declare var kSecOIDNameConstraints: string;

declare var kSecOIDNetscapeCertSequence: string;

declare var kSecOIDNetscapeCertType: string;

declare var kSecOIDNetscapeSGC: string;

declare var kSecOIDOCSPSigning: string;

declare var kSecOIDOrganizationName: string;

declare var kSecOIDOrganizationalUnitName: string;

declare var kSecOIDPolicyConstraints: string;

declare var kSecOIDPolicyMappings: string;

declare var kSecOIDPrivateKeyUsagePeriod: string;

declare var kSecOIDQC_Statements: string;

declare var kSecOIDSRVName: string;

declare var kSecOIDSerialNumber: string;

declare var kSecOIDServerAuth: string;

declare var kSecOIDStateProvinceName: string;

declare var kSecOIDStreetAddress: string;

declare var kSecOIDSubjectAltName: string;

declare var kSecOIDSubjectDirectoryAttributes: string;

declare var kSecOIDSubjectEmailAddress: string;

declare var kSecOIDSubjectInfoAccess: string;

declare var kSecOIDSubjectKeyIdentifier: string;

declare var kSecOIDSubjectPicture: string;

declare var kSecOIDSubjectSignatureBitmap: string;

declare var kSecOIDSurname: string;

declare var kSecOIDTimeStamping: string;

declare var kSecOIDTitle: string;

declare var kSecOIDUseExemptions: string;

declare var kSecOIDX509V1CertificateIssuerUniqueId: string;

declare var kSecOIDX509V1CertificateSubjectUniqueId: string;

declare var kSecOIDX509V1IssuerName: string;

declare var kSecOIDX509V1IssuerNameCStruct: string;

declare var kSecOIDX509V1IssuerNameLDAP: string;

declare var kSecOIDX509V1IssuerNameStd: string;

declare var kSecOIDX509V1SerialNumber: string;

declare var kSecOIDX509V1Signature: string;

declare var kSecOIDX509V1SignatureAlgorithm: string;

declare var kSecOIDX509V1SignatureAlgorithmParameters: string;

declare var kSecOIDX509V1SignatureAlgorithmTBS: string;

declare var kSecOIDX509V1SignatureCStruct: string;

declare var kSecOIDX509V1SignatureStruct: string;

declare var kSecOIDX509V1SubjectName: string;

declare var kSecOIDX509V1SubjectNameCStruct: string;

declare var kSecOIDX509V1SubjectNameLDAP: string;

declare var kSecOIDX509V1SubjectNameStd: string;

declare var kSecOIDX509V1SubjectPublicKey: string;

declare var kSecOIDX509V1SubjectPublicKeyAlgorithm: string;

declare var kSecOIDX509V1SubjectPublicKeyAlgorithmParameters: string;

declare var kSecOIDX509V1SubjectPublicKeyCStruct: string;

declare var kSecOIDX509V1ValidityNotAfter: string;

declare var kSecOIDX509V1ValidityNotBefore: string;

declare var kSecOIDX509V1Version: string;

declare var kSecOIDX509V3Certificate: string;

declare var kSecOIDX509V3CertificateCStruct: string;

declare var kSecOIDX509V3CertificateExtensionCStruct: string;

declare var kSecOIDX509V3CertificateExtensionCritical: string;

declare var kSecOIDX509V3CertificateExtensionId: string;

declare var kSecOIDX509V3CertificateExtensionStruct: string;

declare var kSecOIDX509V3CertificateExtensionType: string;

declare var kSecOIDX509V3CertificateExtensionValue: string;

declare var kSecOIDX509V3CertificateExtensionsCStruct: string;

declare var kSecOIDX509V3CertificateExtensionsStruct: string;

declare var kSecOIDX509V3CertificateNumberOfExtensions: string;

declare var kSecOIDX509V3SignedCertificate: string;

declare var kSecOIDX509V3SignedCertificateCStruct: string;

declare var kSecPaddingKey: string;

declare var kSecPaddingNoneKey: string;

declare var kSecPaddingOAEPKey: string;

declare var kSecPaddingPKCS1Key: string;

declare var kSecPaddingPKCS5Key: string;

declare var kSecPaddingPKCS7Key: string;

declare var kSecPolicyAppleCodeSigning: string;

declare var kSecPolicyAppleEAP: string;

declare var kSecPolicyAppleIDValidation: string;

declare var kSecPolicyAppleIPsec: string;

declare var kSecPolicyApplePKINITClient: string;

declare var kSecPolicyApplePKINITServer: string;

declare var kSecPolicyApplePassbookSigning: string;

declare var kSecPolicyApplePayIssuerEncryption: string;

declare var kSecPolicyAppleRevocation: string;

declare var kSecPolicyAppleSMIME: string;

declare var kSecPolicyAppleSSL: string;

declare var kSecPolicyAppleTimeStamping: string;

declare var kSecPolicyAppleX509Basic: string;

declare var kSecPolicyClient: string;

declare var kSecPolicyKU_CRLSign: string;

declare var kSecPolicyKU_DataEncipherment: string;

declare var kSecPolicyKU_DecipherOnly: string;

declare var kSecPolicyKU_DigitalSignature: string;

declare var kSecPolicyKU_EncipherOnly: string;

declare var kSecPolicyKU_KeyAgreement: string;

declare var kSecPolicyKU_KeyCertSign: string;

declare var kSecPolicyKU_KeyEncipherment: string;

declare var kSecPolicyKU_NonRepudiation: string;

declare var kSecPolicyMacAppStoreReceipt: string;

declare var kSecPolicyName: string;

declare var kSecPolicyOid: string;

declare var kSecPolicyRevocationFlags: string;

declare var kSecPolicyTeamIdentifier: string;

declare var kSecPrivateKeyAttrs: string;

declare var kSecPropertyKeyLabel: string;

declare var kSecPropertyKeyLocalizedLabel: string;

declare var kSecPropertyKeyType: string;

declare var kSecPropertyKeyValue: string;

declare var kSecPropertyTypeArray: string;

declare var kSecPropertyTypeData: string;

declare var kSecPropertyTypeDate: string;

declare var kSecPropertyTypeError: string;

declare var kSecPropertyTypeNumber: string;

declare var kSecPropertyTypeSection: string;

declare var kSecPropertyTypeString: string;

declare var kSecPropertyTypeSuccess: string;

declare var kSecPropertyTypeTitle: string;

declare var kSecPropertyTypeURL: string;

declare var kSecPropertyTypeWarning: string;

declare var kSecPublicKeyAttrs: string;

declare const kSecPublicKeyHashItemAttr: number;

declare var kSecRandomDefault: any;

declare const kSecReadPermStatus: number;

declare var kSecReturnAttributes: string;

declare var kSecReturnData: string;

declare var kSecReturnPersistentRef: string;

declare var kSecReturnRef: string;

declare const kSecRevocationCRLMethod: number;

declare const kSecRevocationNetworkAccessDisabled: number;

declare const kSecRevocationOCSPMethod: number;

declare const kSecRevocationPreferCRL: number;

declare const kSecRevocationRequirePositiveResponse: number;

declare const kSecRevocationUseAnyAvailableMethod: number;

declare const kSecSerialNumberItemAttr: number;

declare var kSecSignatureAttributeName: string;

declare const kSecSubjectItemAttr: number;

declare const kSecSubjectKeyIdentifierItemAttr: number;

declare var kSecTransformAbortAttributeName: string;

declare var kSecTransformAbortOriginatorKey: string;

declare var kSecTransformActionAttributeNotification: string;

declare var kSecTransformActionAttributeValidation: string;

declare var kSecTransformActionCanExecute: string;

declare var kSecTransformActionExternalizeExtraData: string;

declare var kSecTransformActionFinalize: string;

declare var kSecTransformActionInternalizeExtraData: string;

declare var kSecTransformActionProcessData: string;

declare var kSecTransformActionStartingExecution: string;

declare var kSecTransformDebugAttributeName: string;

declare const kSecTransformErrorAbortInProgress: number;

declare const kSecTransformErrorAborted: number;

declare const kSecTransformErrorAttributeNotFound: number;

declare var kSecTransformErrorDomain: string;

declare const kSecTransformErrorInvalidAlgorithm: number;

declare const kSecTransformErrorInvalidConnection: number;

declare const kSecTransformErrorInvalidInput: number;

declare const kSecTransformErrorInvalidInputDictionary: number;

declare const kSecTransformErrorInvalidLength: number;

declare const kSecTransformErrorInvalidOperation: number;

declare const kSecTransformErrorInvalidType: number;

declare const kSecTransformErrorMissingParameter: number;

declare const kSecTransformErrorMoreThanOneOutput: number;

declare const kSecTransformErrorNameAlreadyRegistered: number;

declare const kSecTransformErrorNotInitializedCorrectly: number;

declare const kSecTransformErrorUnsupportedAttribute: number;

declare var kSecTransformInputAttributeName: string;

declare const kSecTransformInvalidArgument: number;

declare const kSecTransformInvalidOverride: number;

declare const kSecTransformOperationNotSupportedOnGroup: number;

declare var kSecTransformOutputAttributeName: string;

declare var kSecTransformPreviousErrorKey: string;

declare const kSecTransformTransformIsExecuting: number;

declare const kSecTransformTransformIsNotRegistered: number;

declare var kSecTransformTransformName: string;

declare var kSecTrustCertificateTransparency: string;

declare var kSecTrustEvaluationDate: string;

declare var kSecTrustExtendedValidation: string;

declare var kSecTrustOrganizationName: string;

declare var kSecTrustResultValue: string;

declare var kSecTrustRevocationChecked: string;

declare var kSecTrustRevocationValidUntilDate: string;

declare const kSecUnlockStateStatus: number;

declare var kSecUseAuthenticationContext: string;

declare var kSecUseAuthenticationUI: string;

declare var kSecUseAuthenticationUIAllow: string;

declare var kSecUseAuthenticationUIFail: string;

declare var kSecUseAuthenticationUISkip: string;

declare var kSecUseDataProtectionKeychain: string;

declare var kSecUseItemList: string;

declare var kSecUseKeychain: string;

declare const kSecUseOnlyGID: number;

declare const kSecUseOnlyUID: number;

declare var kSecUseOperationPrompt: string;

declare var kSecValueData: string;

declare var kSecValuePersistentRef: string;

declare var kSecValueRef: string;

declare const kSecWritePermStatus: number;

declare var kSecZLibEncoding: string;

declare const noSecuritySession: number;

declare var oidAdCAIssuer: DERItem;

declare var oidAdOCSP: DERItem;

declare var oidAnsip384r1: DERItem;

declare var oidAnsip521r1: DERItem;

declare var oidAnyExtendedKeyUsage: DERItem;

declare var oidAnyPolicy: DERItem;

declare var oidAuthorityInfoAccess: DERItem;

declare var oidAuthorityKeyIdentifier: DERItem;

declare var oidBasicConstraints: DERItem;

declare var oidCertificatePolicies: DERItem;

declare var oidCommonName: DERItem;

declare var oidCountryName: DERItem;

declare var oidCrlDistributionPoints: DERItem;

declare var oidDescription: DERItem;

declare var oidEcPrime192v1: DERItem;

declare var oidEcPrime256v1: DERItem;

declare var oidEcPubKey: DERItem;

declare var oidEmailAddress: DERItem;

declare var oidEntrustVersInfo: DERItem;

declare var oidExtendedKeyUsage: DERItem;

declare var oidExtendedKeyUsageClientAuth: DERItem;

declare var oidExtendedKeyUsageCodeSigning: DERItem;

declare var oidExtendedKeyUsageEmailProtection: DERItem;

declare var oidExtendedKeyUsageIPSec: DERItem;

declare var oidExtendedKeyUsageMicrosoftSGC: DERItem;

declare var oidExtendedKeyUsageNetscapeSGC: DERItem;

declare var oidExtendedKeyUsageOCSPSigning: DERItem;

declare var oidExtendedKeyUsageServerAuth: DERItem;

declare var oidExtendedKeyUsageTimeStamping: DERItem;

declare var oidFee: DERItem;

declare var oidFriendlyName: DERItem;

declare var oidGoogleEmbeddedSignedCertificateTimestamp: DERItem;

declare var oidGoogleOCSPSignedCertificateTimestamp: DERItem;

declare var oidInhibitAnyPolicy: DERItem;

declare var oidIssuerAltName: DERItem;

declare var oidKeyUsage: DERItem;

declare var oidLocalKeyId: DERItem;

declare var oidLocalityName: DERItem;

declare var oidMSNTPrincipalName: DERItem;

declare var oidMd2: DERItem;

declare var oidMd2Rsa: DERItem;

declare var oidMd4: DERItem;

declare var oidMd4Rsa: DERItem;

declare var oidMd5: DERItem;

declare var oidMd5Fee: DERItem;

declare var oidMd5Rsa: DERItem;

declare var oidNameConstraints: DERItem;

declare var oidNetscapeCertType: DERItem;

declare var oidOrganizationName: DERItem;

declare var oidOrganizationalUnitName: DERItem;

declare var oidPolicyConstraints: DERItem;

declare var oidPolicyMappings: DERItem;

declare var oidPrivateKeyUsagePeriod: DERItem;

declare var oidQtCps: DERItem;

declare var oidQtUNotice: DERItem;

declare var oidRsa: DERItem;

declare var oidSha1: DERItem;

declare var oidSha1Dsa: DERItem;

declare var oidSha1DsaCommonOIW: DERItem;

declare var oidSha1DsaOIW: DERItem;

declare var oidSha1Ecdsa: DERItem;

declare var oidSha1Fee: DERItem;

declare var oidSha1Rsa: DERItem;

declare var oidSha1RsaOIW: DERItem;

declare var oidSha224: DERItem;

declare var oidSha224Ecdsa: DERItem;

declare var oidSha224Rsa: DERItem;

declare var oidSha256: DERItem;

declare var oidSha256Ecdsa: DERItem;

declare var oidSha256Rsa: DERItem;

declare var oidSha384: DERItem;

declare var oidSha384Ecdsa: DERItem;

declare var oidSha384Rsa: DERItem;

declare var oidSha512: DERItem;

declare var oidSha512Ecdsa: DERItem;

declare var oidSha512Rsa: DERItem;

declare var oidStateOrProvinceName: DERItem;

declare var oidSubjectAltName: DERItem;

declare var oidSubjectInfoAccess: DERItem;

declare var oidSubjectKeyIdentifier: DERItem;

declare function sec_certificate_copy_ref(certificate: NSObject): any;

declare function sec_certificate_create(certificate: any): NSObject;

declare function sec_identity_access_certificates(identity: NSObject, handler: (p1: NSObject) => void): boolean;

declare function sec_identity_copy_certificates_ref(identity: NSObject): NSArray<any>;

declare function sec_identity_copy_ref(identity: NSObject): any;

declare function sec_identity_create(identity: any): NSObject;

declare function sec_identity_create_with_certificates(identity: any, certificates: NSArray<any> | any[]): NSObject;

declare function sec_protocol_metadata_access_distinguished_names(metadata: NSObject, handler: (p1: NSObject) => void): boolean;

declare function sec_protocol_metadata_access_ocsp_response(metadata: NSObject, handler: (p1: NSObject) => void): boolean;

declare function sec_protocol_metadata_access_peer_certificate_chain(metadata: NSObject, handler: (p1: NSObject) => void): boolean;

declare function sec_protocol_metadata_access_pre_shared_keys(metadata: NSObject, handler: (p1: NSObject, p2: NSObject) => void): boolean;

declare function sec_protocol_metadata_access_supported_signature_algorithms(metadata: NSObject, handler: (p1: number) => void): boolean;

declare function sec_protocol_metadata_challenge_parameters_are_equal(metadataA: NSObject, metadataB: NSObject): boolean;

declare function sec_protocol_metadata_copy_peer_public_key(metadata: NSObject): NSObject;

declare function sec_protocol_metadata_create_secret(metadata: NSObject, label_len: number, label: string | any, exporter_length: number): NSObject;

declare function sec_protocol_metadata_create_secret_with_context(metadata: NSObject, label_len: number, label: string | any, context_len: number, context: string | any, exporter_length: number): NSObject;

declare function sec_protocol_metadata_get_early_data_accepted(metadata: NSObject): boolean;

declare function sec_protocol_metadata_get_negotiated_protocol(metadata: NSObject): string;

declare function sec_protocol_metadata_get_negotiated_tls_ciphersuite(metadata: NSObject): tls_ciphersuite_t;

declare function sec_protocol_metadata_get_negotiated_tls_protocol_version(metadata: NSObject): tls_protocol_version_t;

declare function sec_protocol_metadata_get_server_name(metadata: NSObject): string;

declare function sec_protocol_metadata_peers_are_equal(metadataA: NSObject, metadataB: NSObject): boolean;

declare function sec_protocol_options_add_pre_shared_key(options: NSObject, psk: NSObject, psk_identity: NSObject): void;

declare function sec_protocol_options_add_tls_application_protocol(options: NSObject, application_protocol: string | any): void;

declare function sec_protocol_options_append_tls_ciphersuite(options: NSObject, ciphersuite: tls_ciphersuite_t): void;

declare function sec_protocol_options_append_tls_ciphersuite_group(options: NSObject, group: tls_ciphersuite_group_t): void;

declare function sec_protocol_options_are_equal(optionsA: NSObject, optionsB: NSObject): boolean;

declare function sec_protocol_options_get_default_max_dtls_protocol_version(): tls_protocol_version_t;

declare function sec_protocol_options_get_default_max_tls_protocol_version(): tls_protocol_version_t;

declare function sec_protocol_options_get_default_min_dtls_protocol_version(): tls_protocol_version_t;

declare function sec_protocol_options_get_default_min_tls_protocol_version(): tls_protocol_version_t;

declare function sec_protocol_options_set_challenge_block(options: NSObject, challenge_block: (p1: NSObject, p2: (p1: NSObject) => void) => void, challenge_queue: NSObject): void;

declare function sec_protocol_options_set_key_update_block(options: NSObject, key_update_block: (p1: NSObject, p2: () => void) => void, key_update_queue: NSObject): void;

declare function sec_protocol_options_set_local_identity(options: NSObject, identity: NSObject): void;

declare function sec_protocol_options_set_max_tls_protocol_version(options: NSObject, version: tls_protocol_version_t): void;

declare function sec_protocol_options_set_min_tls_protocol_version(options: NSObject, version: tls_protocol_version_t): void;

declare function sec_protocol_options_set_peer_authentication_required(options: NSObject, peer_authentication_required: boolean): void;

declare function sec_protocol_options_set_pre_shared_key_selection_block(options: NSObject, psk_selection_block: (p1: NSObject, p2: NSObject, p3: (p1: NSObject) => void) => void, psk_selection_queue: NSObject): void;

declare function sec_protocol_options_set_tls_false_start_enabled(options: NSObject, false_start_enabled: boolean): void;

declare function sec_protocol_options_set_tls_is_fallback_attempt(options: NSObject, is_fallback_attempt: boolean): void;

declare function sec_protocol_options_set_tls_ocsp_enabled(options: NSObject, ocsp_enabled: boolean): void;

declare function sec_protocol_options_set_tls_pre_shared_key_identity_hint(options: NSObject, psk_identity_hint: NSObject): void;

declare function sec_protocol_options_set_tls_renegotiation_enabled(options: NSObject, renegotiation_enabled: boolean): void;

declare function sec_protocol_options_set_tls_resumption_enabled(options: NSObject, resumption_enabled: boolean): void;

declare function sec_protocol_options_set_tls_sct_enabled(options: NSObject, sct_enabled: boolean): void;

declare function sec_protocol_options_set_tls_server_name(options: NSObject, server_name: string | any): void;

declare function sec_protocol_options_set_tls_tickets_enabled(options: NSObject, tickets_enabled: boolean): void;

declare function sec_protocol_options_set_verify_block(options: NSObject, verify_block: (p1: NSObject, p2: NSObject, p3: (p1: boolean) => void) => void, verify_block_queue: NSObject): void;

declare function sec_release(obj: any): void;

declare function sec_retain(obj: any): any;

declare function sec_trust_copy_ref(trust: NSObject): any;

declare function sec_trust_create(trust: any): NSObject;

enum tls_ciphersuite_group_t {

	tls_ciphersuite_group_default = 0,

	tls_ciphersuite_group_compatibility = 1,

	tls_ciphersuite_group_legacy = 2,

	tls_ciphersuite_group_ats = 3,

	tls_ciphersuite_group_ats_compatibility = 4
}


enum tls_ciphersuite_t {

	RSA_WITH_3DES_EDE_CBC_SHA = 10,

	RSA_WITH_AES_128_CBC_SHA = 47,

	RSA_WITH_AES_256_CBC_SHA = 53,

	RSA_WITH_AES_128_GCM_SHA256 = 156,

	RSA_WITH_AES_256_GCM_SHA384 = 157,

	RSA_WITH_AES_128_CBC_SHA256 = 60,

	RSA_WITH_AES_256_CBC_SHA256 = 61,

	ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA = 49160,

	ECDHE_ECDSA_WITH_AES_128_CBC_SHA = 49161,

	ECDHE_ECDSA_WITH_AES_256_CBC_SHA = 49162,

	ECDHE_RSA_WITH_3DES_EDE_CBC_SHA = 49170,

	ECDHE_RSA_WITH_AES_128_CBC_SHA = 49171,

	ECDHE_RSA_WITH_AES_256_CBC_SHA = 49172,

	ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 = 49187,

	ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 = 49188,

	ECDHE_RSA_WITH_AES_128_CBC_SHA256 = 49191,

	ECDHE_RSA_WITH_AES_256_CBC_SHA384 = 49192,

	ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 = 49195,

	ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 = 49196,

	ECDHE_RSA_WITH_AES_128_GCM_SHA256 = 49199,

	ECDHE_RSA_WITH_AES_256_GCM_SHA384 = 49200,

	ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 = 52392,

	ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 = 52393,

	AES_128_GCM_SHA256 = 4865,

	AES_256_GCM_SHA384 = 4866,

	CHACHA20_POLY1305_SHA256 = 4867
}


enum tls_protocol_version_t {

	TLSv10 = 769,

	TLSv11 = 770,

	TLSv12 = 771,

	TLSv13 = 772,

	DTLSv10 = 65279,

	DTLSv12 = 65277
}

