
declare class ODAttributeMap extends NSObject {

	static attributeMapWithStaticValue(_: string): ODAttributeMap;

	static attributeMapWithValue(_: string): ODAttributeMap;

	setCustomAttributes(_: NSArray<any>)

	customAttributes: NSArray<any>;

	setCustomQueryFunction(_: string)

	customQueryFunction: string;

	setCustomTranslationFunction(_: string)

	customTranslationFunction: string;

	setValue(_: string)

	value: string;

	setStaticValue(_: string): void;

	setVariableSubstitution(_: string): void;
}

declare class ODConfiguration extends NSObject {

	static configuration(): ODConfiguration;

	static suggestedTrustAccount(_: string): string;

	static suggestedTrustPassword(_: number): string;

	setAuthenticationModuleEntries(_: NSArray<any>)

	authenticationModuleEntries: NSArray<any>;

	setComment(_: string)

	comment: string;

	setConnectionIdleTimeoutInSeconds(_: number)

	connectionIdleTimeoutInSeconds: number;

	setConnectionSetupTimeoutInSeconds(_: number)

	connectionSetupTimeoutInSeconds: number;

	setDefaultMappings(_: ODMappings)

	defaultMappings: ODMappings;

	setDefaultModuleEntries(_: NSArray<any>)

	defaultModuleEntries: NSArray<any>;

	setDiscoveryModuleEntries(_: NSArray<any>)

	discoveryModuleEntries: NSArray<any>;

	setGeneralModuleEntries(_: NSArray<any>)

	generalModuleEntries: NSArray<any>;

	setHideRegistration(_: boolean)

	hideRegistration: boolean;

	setManInTheMiddleProtection(_: boolean)

	manInTheMiddleProtection: boolean;

	setNodeName(_: string)

	nodeName: string;

	setPacketEncryption(_: number)

	packetEncryption: number;

	setPacketSigning(_: number)

	packetSigning: number;

	setPreferredDestinationHostName(_: string)

	preferredDestinationHostName: string;

	setPreferredDestinationHostPort(_: number)

	preferredDestinationHostPort: number;

	setQueryTimeoutInSeconds(_: number)

	queryTimeoutInSeconds: number;

	setTemplateName(_: string)

	templateName: string;

	readonly trustAccount: string;

	readonly trustKerberosPrincipal: string;

	readonly trustMetaAccount: string;

	readonly trustType: string;

	readonly trustUsesKerberosKeytab: boolean;

	readonly trustUsesMutualAuthentication: boolean;

	readonly trustUsesSystemKeychain: boolean;

	setVirtualSubnodes(_: NSArray<any>)

	virtualSubnodes: NSArray<any>;

	addTrustTypeTrustAccountTrustPasswordUsernamePasswordJoinExistingError(trustAccount: string, trustPassword: string, username: string, password: string, joinExisting: string, error: boolean): boolean;

	removeTrustUsingUsernamePasswordDeleteTrustAccountError(password: string, deleteTrustAccount: string, error: boolean): boolean;

	saveUsingAuthorizationError(error: SFAuthorization): boolean;
}

declare function ODContextGetTypeID(): number;

declare var ODFrameworkErrorDomain: string;

enum ODFrameworkErrors {

	kODErrorSuccess = 0,

	kODErrorSessionLocalOnlyDaemonInUse = 1000,

	kODErrorSessionNormalDaemonInUse = 1001,

	kODErrorSessionDaemonNotRunning = 1002,

	kODErrorSessionDaemonRefused = 1003,

	kODErrorSessionProxyCommunicationError = 1100,

	kODErrorSessionProxyVersionMismatch = 1101,

	kODErrorSessionProxyIPUnreachable = 1102,

	kODErrorSessionProxyUnknownHost = 1103,

	kODErrorNodeUnknownName = 2000,

	kODErrorNodeUnknownType = 2001,

	kODErrorNodeDisabled = 2002,

	kODErrorNodeConnectionFailed = 2100,

	kODErrorNodeUnknownHost = 2200,

	kODErrorQuerySynchronize = 3000,

	kODErrorQueryInvalidMatchType = 3100,

	kODErrorQueryUnsupportedMatchType = 3101,

	kODErrorQueryTimeout = 3102,

	kODErrorRecordReadOnlyNode = 4000,

	kODErrorRecordPermissionError = 4001,

	kODErrorRecordParameterError = 4100,

	kODErrorRecordInvalidType = 4101,

	kODErrorRecordAlreadyExists = 4102,

	kODErrorRecordTypeDisabled = 4103,

	kODErrorRecordNoLongerExists = 4104,

	kODErrorRecordAttributeUnknownType = 4200,

	kODErrorRecordAttributeNotFound = 4201,

	kODErrorRecordAttributeValueSchemaError = 4202,

	kODErrorRecordAttributeValueNotFound = 4203,

	kODErrorCredentialsInvalid = 5000,

	kODErrorCredentialsMethodNotSupported = 5100,

	kODErrorCredentialsNotAuthorized = 5101,

	kODErrorCredentialsParameterError = 5102,

	kODErrorCredentialsOperationFailed = 5103,

	kODErrorCredentialsServerUnreachable = 5200,

	kODErrorCredentialsServerNotFound = 5201,

	kODErrorCredentialsServerError = 5202,

	kODErrorCredentialsServerTimeout = 5203,

	kODErrorCredentialsContactMaster = 5204,

	kODErrorCredentialsServerCommunicationError = 5205,

	kODErrorCredentialsAccountNotFound = 5300,

	kODErrorCredentialsAccountDisabled = 5301,

	kODErrorCredentialsAccountExpired = 5302,

	kODErrorCredentialsAccountInactive = 5303,

	kODErrorCredentialsAccountTemporarilyLocked = 5304,

	kODErrorCredentialsAccountLocked = 5305,

	kODErrorCredentialsPasswordExpired = 5400,

	kODErrorCredentialsPasswordChangeRequired = 5401,

	kODErrorCredentialsPasswordQualityFailed = 5402,

	kODErrorCredentialsPasswordTooShort = 5403,

	kODErrorCredentialsPasswordTooLong = 5404,

	kODErrorCredentialsPasswordNeedsLetter = 5405,

	kODErrorCredentialsPasswordNeedsDigit = 5406,

	kODErrorCredentialsPasswordChangeTooSoon = 5407,

	kODErrorCredentialsPasswordUnrecoverable = 5408,

	kODErrorCredentialsInvalidLogonHours = 5500,

	kODErrorCredentialsInvalidComputer = 5501,

	kODErrorPolicyUnsupported = 6000,

	kODErrorPolicyOutOfRange = 6001,

	kODErrorPluginOperationNotSupported = 10000,

	kODErrorPluginError = 10001,

	kODErrorDaemonError = 10002,

	kODErrorPluginOperationTimeout = 10003
}


declare class ODMappings extends NSObject {

	static mappings(): ODMappings;

	setComment(_: string)

	comment: string;

	setFunction(_: string)

	function: string;

	setFunctionAttributes(_: NSArray<any>)

	functionAttributes: NSArray<any>;

	setIdentifier(_: string)

	identifier: string;

	readonly recordTypes: NSArray<any>;

	setTemplateName(_: string)

	templateName: string;

	recordMapForStandardRecordType(_: string): ODRecordMap;

	setRecordMapForStandardRecordType(_: ODRecordMap, forStandardRecordType: string): void;
}

declare class ODModuleEntry extends NSObject {

	static moduleEntryWithNameXpcServiceName(_: string, xpcServiceName: string): ODModuleEntry;

	setMappings(_: ODMappings)

	mappings: ODMappings;

	setName(_: string)

	name: string;

	readonly supportedOptions: NSArray<any>;

	setUuidString(_: string)

	uuidString: string;

	setXpcServiceName(_: string)

	xpcServiceName: string;

	option(_: string): any;

	setOptionValue(_: string, value: any): void;
}

declare class ODNode extends NSObject {

	static nodeWithSessionNameError(name: ODSession, error: string): ODNode;

	static nodeWithSessionTypeError(type: ODSession, error: number): ODNode;

	readonly configuration: ODConfiguration;

	readonly nodeName: string;

	static create(session: ODSession, name: string);

	static create(session: ODSession, type: number);

	accountPoliciesAndReturnError(): NSDictionary<any, any>;

	addAccountPolicyToCategoryError(toCategory: NSDictionary<any, any>, error: string): boolean;

	createRecordWithRecordTypeNameAttributesError(name: string, attributes: string, error: NSDictionary<any, any>): ODRecord;

	customCallSendDataError(sendData: number, error: NSData): NSData;

	customFunctionPayloadError(payload: string, error: any): any;

	nodeDetailsForKeysError(error: NSArray<any>): NSDictionary<any, any>;

	passwordContentCheckForRecordNameError(forRecordName: string, error: string): boolean;

	recordWithRecordTypeNameAttributesError(name: string, attributes: string, error: any): ODRecord;

	removeAccountPolicyFromCategoryError(fromCategory: NSDictionary<any, any>, error: string): boolean;

	setAccountPoliciesError(error: NSDictionary<any, any>): boolean;

	setCredentialsWithRecordTypeAuthenticationTypeAuthenticationItemsContinueItemsContextError(authenticationType: string, authenticationItems: string, continueItems: NSArray<any>, context: NSArray<any>, error: any): boolean;

	setCredentialsWithRecordTypeRecordNamePasswordError(recordName: string, password: string, error: string): boolean;

	subnodeNamesAndReturnError(): NSArray<any>;

	supportedAttributesForRecordTypeError(error: string): NSArray<any>;

	supportedRecordTypesAndReturnError(): NSArray<any>;

	unreachableSubnodeNamesAndReturnError(): NSArray<any>;
}

declare function ODNodeAddAccountPolicy(node: any, policy: NSDictionary<any, any>, category: string, error: NSError): boolean;

declare function ODNodeCopyAccountPolicies(node: any, error: NSError): NSDictionary<any, any>;

declare function ODNodeCopyDetails(node: any, keys: NSArray<any> | any[], error: NSError): NSDictionary<any, any>;

declare function ODNodeCopyRecord(node: any, recordType: string, recordName: string, attributes: any, error: NSError): any;

declare function ODNodeCopySubnodeNames(node: any, error: NSError): NSArray<any>;

declare function ODNodeCopySupportedAttributes(node: any, recordType: string, error: NSError): NSArray<any>;

declare function ODNodeCopySupportedRecordTypes(node: any, error: NSError): NSArray<any>;

declare function ODNodeCopyUnreachableSubnodeNames(node: any, error: NSError): NSArray<any>;

declare function ODNodeCreateCopy(allocator: any, node: any, error: NSError): any;

declare function ODNodeCreateRecord(node: any, recordType: string, recordName: string, attributeDict: NSDictionary<any, any>, error: NSError): any;

declare function ODNodeCreateWithName(allocator: any, session: any, nodeName: string, error: NSError): any;

declare function ODNodeCreateWithNodeType(allocator: any, session: any, nodeType: number, error: NSError): any;

declare function ODNodeCustomCall(node: any, customCode: number, data: NSData, error: NSError): NSData;

declare function ODNodeCustomFunction(node: any, function_: string, payload: any, error: NSError): any;

declare function ODNodeGetName(node: any): string;

declare function ODNodeGetTypeID(): number;

declare function ODNodePasswordContentCheck(node: any, password: string, recordName: string, error: NSError): boolean;

declare function ODNodeRemoveAccountPolicy(node: any, policy: NSDictionary<any, any>, category: string, error: NSError): boolean;

declare function ODNodeSetAccountPolicies(node: any, policies: NSDictionary<any, any>, error: NSError): boolean;

declare function ODNodeSetCredentials(node: any, recordType: string, recordName: string, password: string, error: NSError): boolean;

declare function ODNodeSetCredentialsExtended(node: any, recordType: string, authType: string, authItems: NSArray<any> | any[], outAuthItems: NSArray<any>, outContext: any, error: NSError): boolean;

declare const ODPacketEncryptionAllow: number;

declare const ODPacketEncryptionDisabled: number;

declare const ODPacketEncryptionRequired: number;

declare const ODPacketEncryptionSSL: number;

declare const ODPacketSigningAllow: number;

declare const ODPacketSigningDisabled: number;

declare const ODPacketSigningRequired: number;

declare class ODQuery extends NSObject implements NSCopying {

	static queryWithNodeForRecordTypesAttributeMatchTypeQueryValuesReturnAttributesMaximumResultsError(forRecordTypes: ODNode, attribute: any, matchType: string, queryValues: number, returnAttributes: any, maximumResults: any, error: number): ODQuery;

	setDelegate(_: ODQueryDelegate)

	delegate: ODQueryDelegate;

	setOperationQueue(_: NSOperationQueue)

	operationQueue: NSOperationQueue;

	static create(node: ODNode, forRecordTypes: any, attribute: string, matchType: number, queryValues: any, returnAttributes: any, maximumResults: number);

	copyWithZone(_?: any): any;

	removeFromRunLoopForMode(_: NSRunLoop, forMode: string): void;

	resultsAllowingPartialError(error: boolean): NSArray<any>;

	scheduleInRunLoopForMode(_: NSRunLoop, forMode: string): void;

	synchronize(): void;
}

declare function ODQueryCopyResults(query: any, allowPartialResults: boolean, error: NSError): NSArray<any>;

declare function ODQueryCreateWithNode(allocator: any, node: any, recordTypeOrList: any, attribute: string, matchType: number, queryValueOrList: any, returnAttributeOrList: any, maxResults: number, error: NSError): any;

declare function ODQueryCreateWithNodeType(allocator: any, nodeType: number, recordTypeOrList: any, attribute: string, matchType: number, queryValueOrList: any, returnAttributeOrList: any, maxResults: number, error: NSError): any;

interface ODQueryDelegate extends NSObjectProtocol {

	queryFoundResultsError(_: ODQuery, foundResults: NSArray<any>, error: NSError): void;
}
declare var ODQueryDelegate: {

	prototype: ODQueryDelegate;
};

declare function ODQueryGetTypeID(): number;

declare function ODQueryScheduleWithRunLoop(query: any, runLoop: any, runLoopMode: string): void;

declare function ODQuerySetCallback(query: any, callback: (p1: any, p2: NSArray<any>, p3: NSError, p4: any) => void, userInfo: any): void;

declare function ODQuerySetDispatchQueue(query: any, queue: NSObject): void;

declare function ODQuerySynchronize(query: any): void;

declare function ODQueryUnscheduleFromRunLoop(query: any, runLoop: any, runLoopMode: string): void;

declare class ODRecord extends NSObject {

	readonly recordName: string;

	readonly recordType: string;

	readonly secondsUntilAuthenticationsExpire: number;

	readonly secondsUntilPasswordExpires: number;

	accountPoliciesAndReturnError(): NSDictionary<any, any>;

	addAccountPolicyToCategoryError(toCategory: NSDictionary<any, any>, error: string): boolean;

	addMemberRecordError(error: ODRecord): boolean;

	addValueToAttributeError(toAttribute: any, error: string): boolean;

	authenticationAllowedAndReturnError(): boolean;

	changePasswordToPasswordError(toPassword: string, error: string): boolean;

	deleteRecordAndReturnError(): boolean;

	isMemberRecordError(error: ODRecord): boolean;

	passwordChangeAllowedError(error: string): boolean;

	recordDetailsForAttributesError(error: NSArray<any>): NSDictionary<any, any>;

	removeAccountPolicyFromCategoryError(fromCategory: NSDictionary<any, any>, error: string): boolean;

	removeMemberRecordError(error: ODRecord): boolean;

	removeValueFromAttributeError(fromAttribute: any, error: string): boolean;

	removeValuesForAttributeError(error: string): boolean;

	setAccountPoliciesError(error: NSDictionary<any, any>): boolean;

	setNodeCredentialsPasswordError(password: string, error: string): boolean;

	setNodeCredentialsWithRecordTypeAuthenticationTypeAuthenticationItemsContinueItemsContextError(authenticationType: string, authenticationItems: string, continueItems: NSArray<any>, context: NSArray<any>, error: any): boolean;

	setValueForAttributeError(forAttribute: any, error: string): boolean;

	synchronizeAndReturnError(): boolean;

	valuesForAttributeError(error: string): NSArray<any>;

	verifyExtendedWithAuthenticationTypeAuthenticationItemsContinueItemsContextError(authenticationItems: string, continueItems: NSArray<any>, context: NSArray<any>, error: any): boolean;

	verifyPasswordError(error: string): boolean;

	willAuthenticationsExpire(_: number): boolean;

	willPasswordExpire(_: number): boolean;
}

declare function ODRecordAddAccountPolicy(record: any, policy: NSDictionary<any, any>, category: string, error: NSError): boolean;

declare function ODRecordAddMember(group: any, member: any, error: NSError): boolean;

declare function ODRecordAddValue(record: any, attribute: string, value: any, error: NSError): boolean;

declare function ODRecordAuthenticationAllowed(record: any, error: NSError): boolean;

declare function ODRecordChangePassword(record: any, oldPassword: string, newPassword: string, error: NSError): boolean;

declare function ODRecordContainsMember(group: any, member: any, error: NSError): boolean;

declare function ODRecordCopyAccountPolicies(record: any, error: NSError): NSDictionary<any, any>;

declare function ODRecordCopyDetails(record: any, attributes: NSArray<any> | any[], error: NSError): NSDictionary<any, any>;

declare function ODRecordCopyValues(record: any, attribute: string, error: NSError): NSArray<any>;

declare function ODRecordDelete(record: any, error: NSError): boolean;

declare function ODRecordGetRecordName(record: any): string;

declare function ODRecordGetRecordType(record: any): string;

declare function ODRecordGetTypeID(): number;

declare class ODRecordMap extends NSObject {

	static recordMap(): ODRecordMap;

	readonly attributes: NSDictionary<any, any>;

	setNative(_: string)

	native: string;

	setOdPredicate(_: NSDictionary<any, any>)

	odPredicate: NSDictionary<any, any>;

	readonly standardAttributeTypes: NSArray<any>;

	attributeMapForStandardAttribute(_: string): ODAttributeMap;

	setAttributeMapForStandardAttribute(_: ODAttributeMap, forStandardAttribute: string): void;
}

declare function ODRecordPasswordChangeAllowed(record: any, newPassword: string, error: NSError): boolean;

declare function ODRecordRemoveAccountPolicy(record: any, policy: NSDictionary<any, any>, category: string, error: NSError): boolean;

declare function ODRecordRemoveMember(group: any, member: any, error: NSError): boolean;

declare function ODRecordRemoveValue(record: any, attribute: string, value: any, error: NSError): boolean;

declare function ODRecordSecondsUntilAuthenticationsExpire(record: any): number;

declare function ODRecordSecondsUntilPasswordExpires(record: any): number;

declare function ODRecordSetAccountPolicies(record: any, policies: NSDictionary<any, any>, error: NSError): boolean;

declare function ODRecordSetNodeCredentials(record: any, username: string, password: string, error: NSError): boolean;

declare function ODRecordSetNodeCredentialsExtended(record: any, recordType: string, authType: string, authItems: NSArray<any> | any[], outAuthItems: NSArray<any>, outContext: any, error: NSError): boolean;

declare function ODRecordSetValue(record: any, attribute: string, valueOrValues: any, error: NSError): boolean;

declare function ODRecordSynchronize(record: any, error: NSError): boolean;

declare function ODRecordVerifyPassword(record: any, password: string, error: NSError): boolean;

declare function ODRecordVerifyPasswordExtended(record: any, authType: string, authItems: NSArray<any> | any[], outAuthItems: NSArray<any>, outContext: any, error: NSError): boolean;

declare function ODRecordWillAuthenticationsExpire(record: any, willExpireIn: number): boolean;

declare function ODRecordWillPasswordExpire(record: any, willExpireIn: number): boolean;

declare class ODSession extends NSObject {

	static defaultSession(): ODSession;

	static sessionWithOptionsError(error: NSDictionary<any, any>): ODSession;

	readonly configurationTemplateNames: NSArray<any>;

	readonly mappingTemplateNames: NSArray<any>;

	static create(options: NSDictionary<any, any>);

	addConfigurationAuthorizationError(authorization: ODConfiguration, error: SFAuthorization): boolean;

	configurationAuthorizationAllowingUserInteractionError(error: boolean): SFAuthorization;

	configurationForNodename(_: string): ODConfiguration;

	deleteConfigurationAuthorizationError(authorization: ODConfiguration, error: SFAuthorization): boolean;

	deleteConfigurationWithNodenameAuthorizationError(authorization: string, error: SFAuthorization): boolean;

	nodeNamesAndReturnError(): NSArray<any>;
}

declare function ODSessionCopyNodeNames(allocator: any, session: any, error: NSError): NSArray<any>;

declare function ODSessionCreate(allocator: any, options: NSDictionary<any, any>, error: NSError): any;

declare function ODSessionGetTypeID(): number;

declare var ODSessionProxyAddress: string;

declare var ODSessionProxyPassword: string;

declare var ODSessionProxyPort: string;

declare var ODSessionProxyUsername: string;

declare var ODTrustTypeAnonymous: string;

declare var ODTrustTypeJoined: string;

declare var ODTrustTypeUsingCredentials: string;

declare var kODAttributeTypeAccessControlEntry: string;

declare var kODAttributeTypeAddressLine1: string;

declare var kODAttributeTypeAddressLine2: string;

declare var kODAttributeTypeAddressLine3: string;

declare var kODAttributeTypeAdminLimits: string;

declare var kODAttributeTypeAdvertisedServices: string;

declare var kODAttributeTypeAlias: string;

declare var kODAttributeTypeAllAttributes: string;

declare var kODAttributeTypeAllTypes: string;

declare var kODAttributeTypeAltSecurityIdentities: string;

declare var kODAttributeTypeAreaCode: string;

declare var kODAttributeTypeAttrListRefCount: string;

declare var kODAttributeTypeAttrListRefs: string;

declare var kODAttributeTypeAttrListValueRefCount: string;

declare var kODAttributeTypeAttrListValueRefs: string;

declare var kODAttributeTypeAuthCredential: string;

declare var kODAttributeTypeAuthMethod: string;

declare var kODAttributeTypeAuthenticationAuthority: string;

declare var kODAttributeTypeAuthenticationHint: string;

declare var kODAttributeTypeAuthorityRevocationList: string;

declare var kODAttributeTypeAutomaticSearchPath: string;

declare var kODAttributeTypeAutomountInformation: string;

declare var kODAttributeTypeBirthday: string;

declare var kODAttributeTypeBootParams: string;

declare var kODAttributeTypeBuildVersion: string;

declare var kODAttributeTypeBuilding: string;

declare var kODAttributeTypeCACertificate: string;

declare var kODAttributeTypeCapacity: string;

declare var kODAttributeTypeCertificateRevocationList: string;

declare var kODAttributeTypeCity: string;

declare var kODAttributeTypeComment: string;

declare var kODAttributeTypeCompany: string;

declare var kODAttributeTypeComputers: string;

declare var kODAttributeTypeConfigAvailable: string;

declare var kODAttributeTypeConfigFile: string;

declare var kODAttributeTypeContactGUID: string;

declare var kODAttributeTypeContactPerson: string;

declare var kODAttributeTypeCopyTimestamp: string;

declare var kODAttributeTypeCoreFWVersion: string;

declare var kODAttributeTypeCountry: string;

declare var kODAttributeTypeCreationTimestamp: string;

declare var kODAttributeTypeCrossCertificatePair: string;

declare var kODAttributeTypeCustomSearchPath: string;

declare var kODAttributeTypeDNSDomain: string;

declare var kODAttributeTypeDNSName: string;

declare var kODAttributeTypeDNSNameServer: string;

declare var kODAttributeTypeDataStamp: string;

declare var kODAttributeTypeDateRecordCreated: string;

declare var kODAttributeTypeDepartment: string;

declare var kODAttributeTypeDirRefCount: string;

declare var kODAttributeTypeDirRefs: string;

declare var kODAttributeTypeEMailAddress: string;

declare var kODAttributeTypeEMailContacts: string;

declare var kODAttributeTypeENetAddress: string;

declare var kODAttributeTypeExpire: string;

declare var kODAttributeTypeFWVersion: string;

declare var kODAttributeTypeFaxNumber: string;

declare var kODAttributeTypeFirstName: string;

declare var kODAttributeTypeFullName: string;

declare var kODAttributeTypeFunctionalState: string;

declare var kODAttributeTypeGUID: string;

declare var kODAttributeTypeGroup: string;

declare var kODAttributeTypeGroupMembers: string;

declare var kODAttributeTypeGroupMembership: string;

declare var kODAttributeTypeGroupServices: string;

declare var kODAttributeTypeHTML: string;

declare var kODAttributeTypeHardwareUUID: string;

declare var kODAttributeTypeHomeDirectory: string;

declare var kODAttributeTypeHomeDirectoryQuota: string;

declare var kODAttributeTypeHomeDirectorySoftQuota: string;

declare var kODAttributeTypeHomeLocOwner: string;

declare var kODAttributeTypeHomePhoneNumber: string;

declare var kODAttributeTypeIMHandle: string;

declare var kODAttributeTypeIPAddress: string;

declare var kODAttributeTypeIPAddressAndENetAddress: string;

declare var kODAttributeTypeIPv6Address: string;

declare var kODAttributeTypeInternetAlias: string;

declare var kODAttributeTypeJPEGPhoto: string;

declare var kODAttributeTypeJobTitle: string;

declare var kODAttributeTypeKDCAuthKey: string;

declare var kODAttributeTypeKDCConfigData: string;

declare var kODAttributeTypeKerberosRealm: string;

declare var kODAttributeTypeKerberosServices: string;

declare var kODAttributeTypeKeywords: string;

declare var kODAttributeTypeLDAPReadReplicas: string;

declare var kODAttributeTypeLDAPSearchBaseSuffix: string;

declare var kODAttributeTypeLDAPWriteReplicas: string;

declare var kODAttributeTypeLastName: string;

declare var kODAttributeTypeLocalOnlySearchPath: string;

declare var kODAttributeTypeLocaleRelay: string;

declare var kODAttributeTypeLocaleSubnets: string;

declare var kODAttributeTypeLocation: string;

declare var kODAttributeTypeMCXFlags: string;

declare var kODAttributeTypeMCXSettings: string;

declare var kODAttributeTypeMIME: string;

declare var kODAttributeTypeMailAttribute: string;

declare var kODAttributeTypeMapCoordinates: string;

declare var kODAttributeTypeMapGUID: string;

declare var kODAttributeTypeMapURI: string;

declare var kODAttributeTypeMetaAmbiguousName: string;

declare var kODAttributeTypeMetaAugmentedAttributes: string;

declare var kODAttributeTypeMetaAutomountMap: string;

declare var kODAttributeTypeMetaNodeLocation: string;

declare var kODAttributeTypeMetaRecordName: string;

declare var kODAttributeTypeMiddleName: string;

declare var kODAttributeTypeMobileNumber: string;

declare var kODAttributeTypeModificationTimestamp: string;

declare var kODAttributeTypeNFSHomeDirectory: string;

declare var kODAttributeTypeNTDomainComputerAccount: string;

declare var kODAttributeTypeNamePrefix: string;

declare var kODAttributeTypeNameSuffix: string;

declare var kODAttributeTypeNativeOnly: string;

declare var kODAttributeTypeNestedGroups: string;

declare var kODAttributeTypeNetGroupTriplet: string;

declare var kODAttributeTypeNetGroups: string;

declare var kODAttributeTypeNetworkInterfaces: string;

declare var kODAttributeTypeNetworkNumber: string;

declare var kODAttributeTypeNickName: string;

declare var kODAttributeTypeNodeOptions: string;

declare var kODAttributeTypeNodePath: string;

declare var kODAttributeTypeNodeRefCount: string;

declare var kODAttributeTypeNodeRefs: string;

declare var kODAttributeTypeNodeSASLRealm: string;

declare var kODAttributeTypeNote: string;

declare var kODAttributeTypeNumTableList: string;

declare var kODAttributeTypeOperatingSystem: string;

declare var kODAttributeTypeOperatingSystemVersion: string;

declare var kODAttributeTypeOrganizationInfo: string;

declare var kODAttributeTypeOrganizationName: string;

declare var kODAttributeTypeOriginalHomeDirectory: string;

declare var kODAttributeTypeOriginalNFSHomeDirectory: string;

declare var kODAttributeTypeOriginalNodeName: string;

declare var kODAttributeTypeOwner: string;

declare var kODAttributeTypeOwnerGUID: string;

declare var kODAttributeTypePGPPublicKey: string;

declare var kODAttributeTypePIDValue: string;

declare var kODAttributeTypePagerNumber: string;

declare var kODAttributeTypeParentLocales: string;

declare var kODAttributeTypePassword: string;

declare var kODAttributeTypePasswordPlus: string;

declare var kODAttributeTypePasswordPolicyOptions: string;

declare var kODAttributeTypePasswordServerList: string;

declare var kODAttributeTypePasswordServerLocation: string;

declare var kODAttributeTypePhoneContacts: string;

declare var kODAttributeTypePhoneNumber: string;

declare var kODAttributeTypePicture: string;

declare var kODAttributeTypePlugInInfo: string;

declare var kODAttributeTypePluginIndex: string;

declare var kODAttributeTypePort: string;

declare var kODAttributeTypePostalAddress: string;

declare var kODAttributeTypePostalAddressContacts: string;

declare var kODAttributeTypePostalCode: string;

declare var kODAttributeTypePresetUserIsAdmin: string;

declare var kODAttributeTypePrimaryComputerGUID: string;

declare var kODAttributeTypePrimaryComputerList: string;

declare var kODAttributeTypePrimaryGroupID: string;

declare var kODAttributeTypePrimaryLocale: string;

declare var kODAttributeTypePrimaryNTDomain: string;

declare var kODAttributeTypePrintServiceInfoText: string;

declare var kODAttributeTypePrintServiceInfoXML: string;

declare var kODAttributeTypePrintServiceUserData: string;

declare var kODAttributeTypePrinter1284DeviceID: string;

declare var kODAttributeTypePrinterLPRHost: string;

declare var kODAttributeTypePrinterLPRQueue: string;

declare var kODAttributeTypePrinterMakeAndModel: string;

declare var kODAttributeTypePrinterType: string;

declare var kODAttributeTypePrinterURI: string;

declare var kODAttributeTypePrinterXRISupported: string;

declare var kODAttributeTypeProcessName: string;

declare var kODAttributeTypeProfiles: string;

declare var kODAttributeTypeProfilesTimestamp: string;

declare var kODAttributeTypeProtocolNumber: string;

declare var kODAttributeTypeProtocols: string;

declare var kODAttributeTypePwdAgingPolicy: string;

declare var kODAttributeTypeRPCNumber: string;

declare var kODAttributeTypeReadOnlyNode: string;

declare var kODAttributeTypeRealUserID: string;

declare var kODAttributeTypeRecRefCount: string;

declare var kODAttributeTypeRecRefs: string;

declare var kODAttributeTypeRecordName: string;

declare var kODAttributeTypeRecordType: string;

declare var kODAttributeTypeRelationships: string;

declare var kODAttributeTypeRelativeDNPrefix: string;

declare var kODAttributeTypeResourceInfo: string;

declare var kODAttributeTypeResourceType: string;

declare var kODAttributeTypeSMBAcctFlags: string;

declare var kODAttributeTypeSMBGroupRID: string;

declare var kODAttributeTypeSMBHome: string;

declare var kODAttributeTypeSMBHomeDrive: string;

declare var kODAttributeTypeSMBKickoffTime: string;

declare var kODAttributeTypeSMBLogoffTime: string;

declare var kODAttributeTypeSMBLogonTime: string;

declare var kODAttributeTypeSMBPWDLastSet: string;

declare var kODAttributeTypeSMBPrimaryGroupSID: string;

declare var kODAttributeTypeSMBProfilePath: string;

declare var kODAttributeTypeSMBRID: string;

declare var kODAttributeTypeSMBSID: string;

declare var kODAttributeTypeSMBScriptPath: string;

declare var kODAttributeTypeSMBUserWorkstations: string;

declare var kODAttributeTypeSchema: string;

declare var kODAttributeTypeSearchPath: string;

declare var kODAttributeTypeSearchPolicy: string;

declare var kODAttributeTypeServiceType: string;

declare var kODAttributeTypeServicesLocator: string;

declare var kODAttributeTypeSetupAdvertising: string;

declare var kODAttributeTypeSetupAutoRegister: string;

declare var kODAttributeTypeSetupLocation: string;

declare var kODAttributeTypeSetupOccupation: string;

declare var kODAttributeTypeStandardOnly: string;

declare var kODAttributeTypeState: string;

declare var kODAttributeTypeStreet: string;

declare var kODAttributeTypeSubNodes: string;

declare var kODAttributeTypeTimePackage: string;

declare var kODAttributeTypeTimeToLive: string;

declare var kODAttributeTypeTotalRefCount: string;

declare var kODAttributeTypeTotalSize: string;

declare var kODAttributeTypeTrustInformation: string;

declare var kODAttributeTypeURL: string;

declare var kODAttributeTypeUniqueID: string;

declare var kODAttributeTypeUserCertificate: string;

declare var kODAttributeTypeUserPKCS12Data: string;

declare var kODAttributeTypeUserSMIMECertificate: string;

declare var kODAttributeTypeUserShell: string;

declare var kODAttributeTypeVFSDumpFreq: string;

declare var kODAttributeTypeVFSLinkDir: string;

declare var kODAttributeTypeVFSOpts: string;

declare var kODAttributeTypeVFSPassNo: string;

declare var kODAttributeTypeVFSType: string;

declare var kODAttributeTypeVersion: string;

declare var kODAttributeTypeWeblogURI: string;

declare var kODAttributeTypeXMLPlist: string;

declare var kODAuthenticationType2WayRandom: string;

declare var kODAuthenticationType2WayRandomChangePasswd: string;

declare var kODAuthenticationTypeAPOP: string;

declare var kODAuthenticationTypeCRAM_MD5: string;

declare var kODAuthenticationTypeChangePasswd: string;

declare var kODAuthenticationTypeClearText: string;

declare var kODAuthenticationTypeClearTextReadOnly: string;

declare var kODAuthenticationTypeCrypt: string;

declare var kODAuthenticationTypeDIGEST_MD5: string;

declare var kODAuthenticationTypeDeleteUser: string;

declare var kODAuthenticationTypeGetEffectivePolicy: string;

declare var kODAuthenticationTypeGetGlobalPolicy: string;

declare var kODAuthenticationTypeGetKerberosPrincipal: string;

declare var kODAuthenticationTypeGetPolicy: string;

declare var kODAuthenticationTypeGetUserData: string;

declare var kODAuthenticationTypeGetUserName: string;

declare var kODAuthenticationTypeKerberosTickets: string;

declare var kODAuthenticationTypeMPPEMasterKeys: string;

declare var kODAuthenticationTypeMSCHAP2: string;

declare var kODAuthenticationTypeNTLMv2: string;

declare var kODAuthenticationTypeNTLMv2WithSessionKey: string;

declare var kODAuthenticationTypeNewUser: string;

declare var kODAuthenticationTypeNewUserWithPolicy: string;

declare var kODAuthenticationTypeNodeNativeClearTextOK: string;

declare var kODAuthenticationTypeNodeNativeNoClearText: string;

declare var kODAuthenticationTypeReadSecureHash: string;

declare var kODAuthenticationTypeSMBNTv2UserSessionKey: string;

declare var kODAuthenticationTypeSMBWorkstationCredentialSessionKey: string;

declare var kODAuthenticationTypeSMB_LM_Key: string;

declare var kODAuthenticationTypeSMB_NT_Key: string;

declare var kODAuthenticationTypeSMB_NT_UserSessionKey: string;

declare var kODAuthenticationTypeSMB_NT_WithUserSessionKey: string;

declare var kODAuthenticationTypeSetCertificateHashAsCurrent: string;

declare var kODAuthenticationTypeSetGlobalPolicy: string;

declare var kODAuthenticationTypeSetLMHash: string;

declare var kODAuthenticationTypeSetNTHash: string;

declare var kODAuthenticationTypeSetPassword: string;

declare var kODAuthenticationTypeSetPasswordAsCurrent: string;

declare var kODAuthenticationTypeSetPolicy: string;

declare var kODAuthenticationTypeSetPolicyAsCurrent: string;

declare var kODAuthenticationTypeSetUserData: string;

declare var kODAuthenticationTypeSetUserName: string;

declare var kODAuthenticationTypeSetWorkstationPassword: string;

declare var kODAuthenticationTypeWithAuthorizationRef: string;

declare var kODAuthenticationTypeWriteSecureHash: string;

declare var kODBackOffSeconds: string;

declare var kODErrorDomainFramework: string;

declare const kODExpirationTimeExpired: number;

declare const kODExpirationTimeNeverExpires: number;

declare const kODMatchAny: number;

declare const kODMatchBeginsWith: number;

declare const kODMatchContains: number;

declare const kODMatchEndsWith: number;

declare const kODMatchEqualTo: number;

declare const kODMatchGreaterThan: number;

declare const kODMatchLessThan: number;

declare var kODModuleConfigOptionConnectionIdleDisconnect: string;

declare var kODModuleConfigOptionConnectionSetupTimeout: string;

declare var kODModuleConfigOptionManInTheMiddle: string;

declare var kODModuleConfigOptionPacketEncryption: string;

declare var kODModuleConfigOptionPacketSigning: string;

declare var kODModuleConfigOptionQueryTimeout: string;

declare var kODNodeOptionsQuerySkippedSubnode: string;

declare const kODNodeTypeAuthentication: number;

declare const kODNodeTypeConfigure: number;

declare const kODNodeTypeContacts: number;

declare const kODNodeTypeLocalNodes: number;

declare const kODNodeTypeNetwork: number;

declare var kODPolicyAttributeCreationTime: string;

declare var kODPolicyAttributeCurrentDate: string;

declare var kODPolicyAttributeCurrentDayOfWeek: string;

declare var kODPolicyAttributeCurrentTime: string;

declare var kODPolicyAttributeCurrentTimeOfDay: string;

declare var kODPolicyAttributeDaysUntilExpiration: string;

declare var kODPolicyAttributeEnableAtTimeOfDay: string;

declare var kODPolicyAttributeEnableOnDate: string;

declare var kODPolicyAttributeEnableOnDayOfWeek: string;

declare var kODPolicyAttributeExpiresAtTimeOfDay: string;

declare var kODPolicyAttributeExpiresEveryNDays: string;

declare var kODPolicyAttributeExpiresOnDate: string;

declare var kODPolicyAttributeExpiresOnDayOfWeek: string;

declare var kODPolicyAttributeFailedAuthentications: string;

declare var kODPolicyAttributeLastAuthenticationTime: string;

declare var kODPolicyAttributeLastFailedAuthenticationTime: string;

declare var kODPolicyAttributeLastPasswordChangeTime: string;

declare var kODPolicyAttributeMaximumFailedAuthentications: string;

declare var kODPolicyAttributeNewPasswordRequiredTime: string;

declare var kODPolicyAttributePassword: string;

declare var kODPolicyAttributePasswordHashes: string;

declare var kODPolicyAttributePasswordHistory: string;

declare var kODPolicyAttributePasswordHistoryDepth: string;

declare var kODPolicyAttributeRecordName: string;

declare var kODPolicyAttributeRecordType: string;

declare var kODPolicyCategoryAuthentication: string;

declare var kODPolicyCategoryPasswordChange: string;

declare var kODPolicyCategoryPasswordContent: string;

declare var kODPolicyKeyContent: string;

declare var kODPolicyKeyContentDescription: string;

declare var kODPolicyKeyEvaluationDetails: string;

declare var kODPolicyKeyIdentifier: string;

declare var kODPolicyKeyParameters: string;

declare var kODPolicyKeyPolicySatisfied: string;

declare var kODPolicyTypeAccountExpiresOnDate: string;

declare var kODPolicyTypeAccountMaximumFailedLogins: string;

declare var kODPolicyTypeAccountMaximumMinutesOfNonUse: string;

declare var kODPolicyTypeAccountMaximumMinutesUntilDisabled: string;

declare var kODPolicyTypeAccountMinutesUntilFailedLoginReset: string;

declare var kODPolicyTypePasswordCannotBeAccountName: string;

declare var kODPolicyTypePasswordChangeRequired: string;

declare var kODPolicyTypePasswordHistory: string;

declare var kODPolicyTypePasswordMaximumAgeInMinutes: string;

declare var kODPolicyTypePasswordMaximumNumberOfCharacters: string;

declare var kODPolicyTypePasswordMinimumNumberOfCharacters: string;

declare var kODPolicyTypePasswordRequiresAlpha: string;

declare var kODPolicyTypePasswordRequiresMixedCase: string;

declare var kODPolicyTypePasswordRequiresNumeric: string;

declare var kODPolicyTypePasswordRequiresSymbol: string;

declare var kODPolicyTypePasswordSelfModification: string;

declare var kODRecordTypeAFPServer: string;

declare var kODRecordTypeAliases: string;

declare var kODRecordTypeAttributeTypes: string;

declare var kODRecordTypeAugments: string;

declare var kODRecordTypeAutoServerSetup: string;

declare var kODRecordTypeAutomount: string;

declare var kODRecordTypeAutomountMap: string;

declare var kODRecordTypeBootp: string;

declare var kODRecordTypeCertificateAuthorities: string;

declare var kODRecordTypeComputerGroups: string;

declare var kODRecordTypeComputerLists: string;

declare var kODRecordTypeComputers: string;

declare var kODRecordTypeConfiguration: string;

declare var kODRecordTypeEthernets: string;

declare var kODRecordTypeFTPServer: string;

declare var kODRecordTypeFileMakerServers: string;

declare var kODRecordTypeGroups: string;

declare var kODRecordTypeHostServices: string;

declare var kODRecordTypeHosts: string;

declare var kODRecordTypeLDAPServer: string;

declare var kODRecordTypeLocations: string;

declare var kODRecordTypeMounts: string;

declare var kODRecordTypeNFS: string;

declare var kODRecordTypeNetDomains: string;

declare var kODRecordTypeNetGroups: string;

declare var kODRecordTypeNetworks: string;

declare var kODRecordTypePeople: string;

declare var kODRecordTypePresetComputerGroups: string;

declare var kODRecordTypePresetComputerLists: string;

declare var kODRecordTypePresetComputers: string;

declare var kODRecordTypePresetGroups: string;

declare var kODRecordTypePresetUsers: string;

declare var kODRecordTypePrintService: string;

declare var kODRecordTypePrintServiceUser: string;

declare var kODRecordTypePrinters: string;

declare var kODRecordTypeProtocols: string;

declare var kODRecordTypeQTSServer: string;

declare var kODRecordTypeQueryInformation: string;

declare var kODRecordTypeRPC: string;

declare var kODRecordTypeRecordTypes: string;

declare var kODRecordTypeResources: string;

declare var kODRecordTypeSMBServer: string;

declare var kODRecordTypeServer: string;

declare var kODRecordTypeServices: string;

declare var kODRecordTypeSharePoints: string;

declare var kODRecordTypeUsers: string;

declare var kODRecordTypeWebServer: string;

declare var kODSessionDefault: any;

declare var kODSessionProxyAddress: string;

declare var kODSessionProxyPassword: string;

declare var kODSessionProxyPort: string;

declare var kODSessionProxyUsername: string;
