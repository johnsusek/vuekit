
declare class CKAcceptSharesOperation extends CKOperation {

	setAcceptSharesCompletionBlock(_: (p1: NSError) => void)

	acceptSharesCompletionBlock: (p1: NSError) => void;

	setPerShareCompletionBlock(_: (p1: CKShareMetadata, p2: CKShare, p3: NSError) => void)

	perShareCompletionBlock: (p1: CKShareMetadata, p2: CKShare, p3: NSError) => void;

	setShareMetadatas(_: NSArray<CKShareMetadata>)

	shareMetadatas: NSArray<CKShareMetadata>;

	static create(shareMetadatas: NSArray<CKShareMetadata> | CKShareMetadata[]);
}

declare var CKAccountChangedNotification: string;

enum CKAccountStatus {

	CouldNotDetermine = 0,

	Available = 1,

	Restricted = 2,

	NoAccount = 3
}


enum CKApplicationPermissionStatus {

	InitialState = 0,

	CouldNotComplete = 1,

	Denied = 2,

	Granted = 3
}


enum CKApplicationPermissions {

	UserDiscoverability = 1
}


declare class CKAsset extends NSObject implements CKRecordValue {

	readonly fileURL: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(fileURL: NSURL);

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class CKContainer extends NSObject {

	static containerWithIdentifier(_: string): CKContainer;

	static defaultContainer(): CKContainer;

	readonly containerIdentifier: string;

	readonly privateCloudDatabase: CKDatabase;

	readonly publicCloudDatabase: CKDatabase;

	readonly sharedCloudDatabase: CKDatabase;

	acceptShareMetadataCompletionHandler(_: CKShareMetadata, completionHandler?: (p1: CKShare, p2: NSError) => void): void;

	accountStatusWithCompletionHandler(_?: (p1: CKAccountStatus, p2: NSError) => void): void;

	addOperation(_: CKOperation): void;

	databaseWithDatabaseScope(_: CKDatabaseScope): CKDatabase;

	discoverAllIdentitiesWithCompletionHandler(_?: (p1: NSArray<CKUserIdentity>, p2: NSError) => void): void;

	discoverUserIdentityWithEmailAddressCompletionHandler(_: string, completionHandler?: (p1: CKUserIdentity, p2: NSError) => void): void;

	discoverUserIdentityWithPhoneNumberCompletionHandler(_: string, completionHandler?: (p1: CKUserIdentity, p2: NSError) => void): void;

	discoverUserIdentityWithUserRecordIDCompletionHandler(_: CKRecordID, completionHandler?: (p1: CKUserIdentity, p2: NSError) => void): void;

	fetchAllLongLivedOperationIDsWithCompletionHandler(_?: (p1: NSArray<string>, p2: NSError) => void): void;

	fetchLongLivedOperationWithIDCompletionHandler(_: string, completionHandler?: (p1: CKOperation, p2: NSError) => void): void;

	fetchShareMetadataWithURLCompletionHandler(_: NSURL, completionHandler?: (p1: CKShareMetadata, p2: NSError) => void): void;

	fetchShareParticipantWithEmailAddressCompletionHandler(_: string, completionHandler?: (p1: CKShareParticipant, p2: NSError) => void): void;

	fetchShareParticipantWithPhoneNumberCompletionHandler(_: string, completionHandler?: (p1: CKShareParticipant, p2: NSError) => void): void;

	fetchShareParticipantWithUserRecordIDCompletionHandler(_: CKRecordID, completionHandler?: (p1: CKShareParticipant, p2: NSError) => void): void;

	fetchUserRecordIDWithCompletionHandler(_?: (p1: CKRecordID, p2: NSError) => void): void;

	requestApplicationPermissionCompletionHandler(_: CKApplicationPermissions, completionHandler: (p1: CKApplicationPermissionStatus, p2: NSError) => void): void;

	statusForApplicationPermissionCompletionHandler(_: CKApplicationPermissions, completionHandler: (p1: CKApplicationPermissionStatus, p2: NSError) => void): void;
}

declare var CKCurrentUserDefaultName: string;

declare class CKDatabase extends NSObject {

	readonly databaseScope: CKDatabaseScope;

	addOperation(_: CKDatabaseOperation): void;

	deleteRecordWithIDCompletionHandler(withRecordID: CKRecordID, completionHandler?: (p1: CKRecordID, p2: NSError) => void): void;

	deleteRecordZoneWithIDCompletionHandler(withRecordZoneID: CKRecordZoneID, completionHandler?: (p1: CKRecordZoneID, p2: NSError) => void): void;

	deleteSubscriptionWithIDCompletionHandler(withSubscriptionID: string, completionHandler?: (p1: string, p2: NSError) => void): void;

	fetchAllRecordZonesWithCompletionHandler(_?: (p1: NSArray<CKRecordZone>, p2: NSError) => void): void;

	fetchAllSubscriptionsWithCompletionHandler(_?: (p1: NSArray<CKSubscription>, p2: NSError) => void): void;

	fetchRecordWithIDCompletionHandler(withRecordID: CKRecordID, completionHandler?: (p1: CKRecord, p2: NSError) => void): void;

	fetchRecordZoneWithIDCompletionHandler(withRecordZoneID: CKRecordZoneID, completionHandler?: (p1: CKRecordZone, p2: NSError) => void): void;

	fetchSubscriptionWithIDCompletionHandler(withSubscriptionID: string, completionHandler?: (p1: CKSubscription, p2: NSError) => void): void;

	performQueryInZoneWithIDCompletionHandler(_: CKQuery, inZoneWithID?: CKRecordZoneID, completionHandler?: (p1: NSArray<CKRecord>, p2: NSError) => void): void;

	saveRecordCompletionHandler(_: CKRecord, completionHandler?: (p1: CKRecord, p2: NSError) => void): void;

	saveRecordZoneCompletionHandler(_: CKRecordZone, completionHandler?: (p1: CKRecordZone, p2: NSError) => void): void;

	saveSubscriptionCompletionHandler(_: CKSubscription, completionHandler?: (p1: CKSubscription, p2: NSError) => void): void;
}

declare class CKDatabaseNotification extends CKNotification {

	static notificationFromRemoteNotificationDictionary(_: NSDictionary<any, any>): CKDatabaseNotification; // inherited from CKNotification

	readonly databaseScope: CKDatabaseScope;
}

declare class CKDatabaseOperation extends CKOperation {

	setDatabase(_: CKDatabase)

	database: CKDatabase;
}

enum CKDatabaseScope {

	Public = 1,

	Private = 2,

	Shared = 3
}


declare class CKDatabaseSubscription extends CKSubscription implements NSCopying, NSSecureCoding {

	setRecordType(_: string)

	recordType: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(subscriptionID: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CKDiscoverAllUserIdentitiesOperation extends CKOperation {

	setDiscoverAllUserIdentitiesCompletionBlock(_: (p1: NSError) => void)

	discoverAllUserIdentitiesCompletionBlock: (p1: NSError) => void;

	setUserIdentityDiscoveredBlock(_: (p1: CKUserIdentity) => void)

	userIdentityDiscoveredBlock: (p1: CKUserIdentity) => void;
}

declare class CKDiscoverUserIdentitiesOperation extends CKOperation {

	setDiscoverUserIdentitiesCompletionBlock(_: (p1: NSError) => void)

	discoverUserIdentitiesCompletionBlock: (p1: NSError) => void;

	setUserIdentityDiscoveredBlock(_: (p1: CKUserIdentity, p2: CKUserIdentityLookupInfo) => void)

	userIdentityDiscoveredBlock: (p1: CKUserIdentity, p2: CKUserIdentityLookupInfo) => void;

	setUserIdentityLookupInfos(_: NSArray<CKUserIdentityLookupInfo>)

	userIdentityLookupInfos: NSArray<CKUserIdentityLookupInfo>;

	static create(userIdentityLookupInfos: NSArray<CKUserIdentityLookupInfo> | CKUserIdentityLookupInfo[]);
}

enum CKErrorCode {

	InternalError = 1,

	PartialFailure = 2,

	NetworkUnavailable = 3,

	NetworkFailure = 4,

	BadContainer = 5,

	ServiceUnavailable = 6,

	RequestRateLimited = 7,

	MissingEntitlement = 8,

	NotAuthenticated = 9,

	PermissionFailure = 10,

	UnknownItem = 11,

	InvalidArguments = 12,

	ResultsTruncated = 13,

	ServerRecordChanged = 14,

	ServerRejectedRequest = 15,

	AssetFileNotFound = 16,

	AssetFileModified = 17,

	IncompatibleVersion = 18,

	ConstraintViolation = 19,

	OperationCancelled = 20,

	ChangeTokenExpired = 21,

	BatchRequestFailed = 22,

	ZoneBusy = 23,

	BadDatabase = 24,

	QuotaExceeded = 25,

	ZoneNotFound = 26,

	LimitExceeded = 27,

	UserDeletedZone = 28,

	TooManyParticipants = 29,

	AlreadyShared = 30,

	ReferenceViolation = 31,

	ManagedAccountRestricted = 32,

	ParticipantMayNeedVerification = 33,

	ServerResponseLost = 34,

	AssetNotAvailable = 35
}


declare var CKErrorDomain: string;

declare var CKErrorRetryAfterKey: string;

declare class CKFetchDatabaseChangesOperation extends CKDatabaseOperation {

	setChangeTokenUpdatedBlock(_: (p1: CKServerChangeToken) => void)

	changeTokenUpdatedBlock: (p1: CKServerChangeToken) => void;

	setFetchAllChanges(_: boolean)

	fetchAllChanges: boolean;

	setFetchDatabaseChangesCompletionBlock(_: (p1: CKServerChangeToken, p2: boolean, p3: NSError) => void)

	fetchDatabaseChangesCompletionBlock: (p1: CKServerChangeToken, p2: boolean, p3: NSError) => void;

	setPreviousServerChangeToken(_: CKServerChangeToken)

	previousServerChangeToken: CKServerChangeToken;

	setRecordZoneWithIDChangedBlock(_: (p1: CKRecordZoneID) => void)

	recordZoneWithIDChangedBlock: (p1: CKRecordZoneID) => void;

	setRecordZoneWithIDWasDeletedBlock(_: (p1: CKRecordZoneID) => void)

	recordZoneWithIDWasDeletedBlock: (p1: CKRecordZoneID) => void;

	setRecordZoneWithIDWasPurgedBlock(_: (p1: CKRecordZoneID) => void)

	recordZoneWithIDWasPurgedBlock: (p1: CKRecordZoneID) => void;

	setResultsLimit(_: number)

	resultsLimit: number;

	static create(previousServerChangeToken: CKServerChangeToken);
}

declare class CKFetchRecordZoneChangesConfiguration extends NSObject implements NSCopying, NSSecureCoding {

	setDesiredKeys(_: NSArray<string>)

	desiredKeys: NSArray<string>;

	setPreviousServerChangeToken(_: CKServerChangeToken)

	previousServerChangeToken: CKServerChangeToken;

	setResultsLimit(_: number)

	resultsLimit: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CKFetchRecordZoneChangesOperation extends CKDatabaseOperation {

	setConfigurationsByRecordZoneID(_: NSDictionary<CKRecordZoneID, CKFetchRecordZoneChangesConfiguration>)

	configurationsByRecordZoneID: NSDictionary<CKRecordZoneID, CKFetchRecordZoneChangesConfiguration>;

	setFetchAllChanges(_: boolean)

	fetchAllChanges: boolean;

	setFetchRecordZoneChangesCompletionBlock(_: (p1: NSError) => void)

	fetchRecordZoneChangesCompletionBlock: (p1: NSError) => void;

	setRecordChangedBlock(_: (p1: CKRecord) => void)

	recordChangedBlock: (p1: CKRecord) => void;

	setRecordWithIDWasDeletedBlock(_: (p1: CKRecordID, p2: string) => void)

	recordWithIDWasDeletedBlock: (p1: CKRecordID, p2: string) => void;

	setRecordZoneChangeTokensUpdatedBlock(_: (p1: CKRecordZoneID, p2: CKServerChangeToken, p3: NSData) => void)

	recordZoneChangeTokensUpdatedBlock: (p1: CKRecordZoneID, p2: CKServerChangeToken, p3: NSData) => void;

	setRecordZoneFetchCompletionBlock(_: (p1: CKRecordZoneID, p2: CKServerChangeToken, p3: NSData, p4: boolean, p5: NSError) => void)

	recordZoneFetchCompletionBlock: (p1: CKRecordZoneID, p2: CKServerChangeToken, p3: NSData, p4: boolean, p5: NSError) => void;

	setRecordZoneIDs(_: NSArray<CKRecordZoneID>)

	recordZoneIDs: NSArray<CKRecordZoneID>;

	static create(recordZoneIDs: NSArray<CKRecordZoneID> | CKRecordZoneID[], configurationsByRecordZoneID: NSDictionary<CKRecordZoneID, CKFetchRecordZoneChangesConfiguration>);
}

declare class CKFetchRecordZonesOperation extends CKDatabaseOperation {

	static fetchAllRecordZonesOperation(): CKFetchRecordZonesOperation;

	setFetchRecordZonesCompletionBlock(_: (p1: NSDictionary<CKRecordZoneID, CKRecordZone>, p2: NSError) => void)

	fetchRecordZonesCompletionBlock: (p1: NSDictionary<CKRecordZoneID, CKRecordZone>, p2: NSError) => void;

	setRecordZoneIDs(_: NSArray<CKRecordZoneID>)

	recordZoneIDs: NSArray<CKRecordZoneID>;

	static create(recordZoneIDs: NSArray<CKRecordZoneID> | CKRecordZoneID[]);
}

declare class CKFetchRecordsOperation extends CKDatabaseOperation {

	static fetchCurrentUserRecordOperation(): CKFetchRecordsOperation;

	setDesiredKeys(_: NSArray<string>)

	desiredKeys: NSArray<string>;

	setFetchRecordsCompletionBlock(_: (p1: NSDictionary<CKRecordID, CKRecord>, p2: NSError) => void)

	fetchRecordsCompletionBlock: (p1: NSDictionary<CKRecordID, CKRecord>, p2: NSError) => void;

	setPerRecordCompletionBlock(_: (p1: CKRecord, p2: CKRecordID, p3: NSError) => void)

	perRecordCompletionBlock: (p1: CKRecord, p2: CKRecordID, p3: NSError) => void;

	setPerRecordProgressBlock(_: (p1: CKRecordID, p2: number) => void)

	perRecordProgressBlock: (p1: CKRecordID, p2: number) => void;

	setRecordIDs(_: NSArray<CKRecordID>)

	recordIDs: NSArray<CKRecordID>;

	static create(recordIDs: NSArray<CKRecordID> | CKRecordID[]);
}

declare class CKFetchShareMetadataOperation extends CKOperation {

	setFetchShareMetadataCompletionBlock(_: (p1: NSError) => void)

	fetchShareMetadataCompletionBlock: (p1: NSError) => void;

	setPerShareMetadataBlock(_: (p1: NSURL, p2: CKShareMetadata, p3: NSError) => void)

	perShareMetadataBlock: (p1: NSURL, p2: CKShareMetadata, p3: NSError) => void;

	setRootRecordDesiredKeys(_: NSArray<string>)

	rootRecordDesiredKeys: NSArray<string>;

	setShareURLs(_: NSArray<NSURL>)

	shareURLs: NSArray<NSURL>;

	setShouldFetchRootRecord(_: boolean)

	shouldFetchRootRecord: boolean;

	static create(shareURLs: NSArray<NSURL> | NSURL[]);
}

declare class CKFetchShareParticipantsOperation extends CKOperation {

	setFetchShareParticipantsCompletionBlock(_: (p1: NSError) => void)

	fetchShareParticipantsCompletionBlock: (p1: NSError) => void;

	setShareParticipantFetchedBlock(_: (p1: CKShareParticipant) => void)

	shareParticipantFetchedBlock: (p1: CKShareParticipant) => void;

	setUserIdentityLookupInfos(_: NSArray<CKUserIdentityLookupInfo>)

	userIdentityLookupInfos: NSArray<CKUserIdentityLookupInfo>;

	static create(userIdentityLookupInfos: NSArray<CKUserIdentityLookupInfo> | CKUserIdentityLookupInfo[]);
}

declare class CKFetchSubscriptionsOperation extends CKDatabaseOperation {

	static fetchAllSubscriptionsOperation(): CKFetchSubscriptionsOperation;

	setFetchSubscriptionCompletionBlock(_: (p1: NSDictionary<string, CKSubscription>, p2: NSError) => void)

	fetchSubscriptionCompletionBlock: (p1: NSDictionary<string, CKSubscription>, p2: NSError) => void;

	setSubscriptionIDs(_: NSArray<string>)

	subscriptionIDs: NSArray<string>;

	static create(subscriptionIDs: NSArray<string> | string[]);
}

declare class CKFetchWebAuthTokenOperation extends CKDatabaseOperation {

	setAPIToken(_: string)

	APIToken: string;

	setFetchWebAuthTokenCompletionBlock(_: (p1: string, p2: NSError) => void)

	fetchWebAuthTokenCompletionBlock: (p1: string, p2: NSError) => void;

	static create(APIToken: string);
}

declare class CKLocationSortDescriptor extends NSSortDescriptor implements NSSecureCoding {

	static sortDescriptorWithKeyAscending(_?: string, ascending: boolean): CKLocationSortDescriptor; // inherited from NSSortDescriptor

	static sortDescriptorWithKeyAscendingComparator(_?: string, ascending: boolean, comparator: (p1: any, p2: any) => NSComparisonResult): CKLocationSortDescriptor; // inherited from NSSortDescriptor

	static sortDescriptorWithKeyAscendingSelector(_?: string, ascending: boolean, selector?: string): CKLocationSortDescriptor; // inherited from NSSortDescriptor

	readonly relativeLocation: CLLocation;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(key: string, relativeLocation: CLLocation);

	encodeWithCoder(_: NSCoder): void;
}

declare class CKModifyRecordZonesOperation extends CKDatabaseOperation {

	setModifyRecordZonesCompletionBlock(_: (p1: NSArray<CKRecordZone>, p2: NSArray<CKRecordZoneID>, p3: NSError) => void)

	modifyRecordZonesCompletionBlock: (p1: NSArray<CKRecordZone>, p2: NSArray<CKRecordZoneID>, p3: NSError) => void;

	setRecordZoneIDsToDelete(_: NSArray<CKRecordZoneID>)

	recordZoneIDsToDelete: NSArray<CKRecordZoneID>;

	setRecordZonesToSave(_: NSArray<CKRecordZone>)

	recordZonesToSave: NSArray<CKRecordZone>;

	static create(recordZonesToSave: NSArray<CKRecordZone> | CKRecordZone[], recordZoneIDsToDelete: NSArray<CKRecordZoneID> | CKRecordZoneID[]);
}

declare class CKModifyRecordsOperation extends CKDatabaseOperation {

	setAtomic(_: boolean)

	atomic: boolean;

	setClientChangeTokenData(_: NSData)

	clientChangeTokenData: NSData;

	setModifyRecordsCompletionBlock(_: (p1: NSArray<CKRecord>, p2: NSArray<CKRecordID>, p3: NSError) => void)

	modifyRecordsCompletionBlock: (p1: NSArray<CKRecord>, p2: NSArray<CKRecordID>, p3: NSError) => void;

	setPerRecordCompletionBlock(_: (p1: CKRecord, p2: NSError) => void)

	perRecordCompletionBlock: (p1: CKRecord, p2: NSError) => void;

	setPerRecordProgressBlock(_: (p1: CKRecord, p2: number) => void)

	perRecordProgressBlock: (p1: CKRecord, p2: number) => void;

	setRecordIDsToDelete(_: NSArray<CKRecordID>)

	recordIDsToDelete: NSArray<CKRecordID>;

	setRecordsToSave(_: NSArray<CKRecord>)

	recordsToSave: NSArray<CKRecord>;

	setSavePolicy(_: CKRecordSavePolicy)

	savePolicy: CKRecordSavePolicy;

	static create(recordsToSave: NSArray<CKRecord> | CKRecord[], recordIDsToDelete: NSArray<CKRecordID> | CKRecordID[]);
}

declare class CKModifySubscriptionsOperation extends CKDatabaseOperation {

	setModifySubscriptionsCompletionBlock(_: (p1: NSArray<CKSubscription>, p2: NSArray<string>, p3: NSError) => void)

	modifySubscriptionsCompletionBlock: (p1: NSArray<CKSubscription>, p2: NSArray<string>, p3: NSError) => void;

	setSubscriptionIDsToDelete(_: NSArray<string>)

	subscriptionIDsToDelete: NSArray<string>;

	setSubscriptionsToSave(_: NSArray<CKSubscription>)

	subscriptionsToSave: NSArray<CKSubscription>;

	static create(subscriptionsToSave: NSArray<CKSubscription> | CKSubscription[], subscriptionIDsToDelete: NSArray<string> | string[]);
}

declare class CKNotification extends NSObject {

	static notificationFromRemoteNotificationDictionary(_: NSDictionary<any, any>): CKNotification;

	readonly alertActionLocalizationKey: string;

	readonly alertBody: string;

	readonly alertLaunchImage: string;

	readonly alertLocalizationArgs: NSArray<string>;

	readonly alertLocalizationKey: string;

	readonly badge: number;

	readonly category: string;

	readonly containerIdentifier: string;

	readonly isPruned: boolean;

	readonly notificationID: CKNotificationID;

	readonly notificationType: CKNotificationType;

	readonly soundName: string;

	readonly subscriptionID: string;

	readonly subtitle: string;

	readonly subtitleLocalizationArgs: NSArray<string>;

	readonly subtitleLocalizationKey: string;

	readonly title: string;

	readonly titleLocalizationArgs: NSArray<string>;

	readonly titleLocalizationKey: string;
}

declare class CKNotificationID extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CKNotificationInfo extends NSObject implements NSCopying, NSSecureCoding {

	setAlertActionLocalizationKey(_: string)

	alertActionLocalizationKey: string;

	setAlertBody(_: string)

	alertBody: string;

	setAlertLaunchImage(_: string)

	alertLaunchImage: string;

	setAlertLocalizationArgs(_: NSArray<string>)

	alertLocalizationArgs: NSArray<string>;

	setAlertLocalizationKey(_: string)

	alertLocalizationKey: string;

	setCategory(_: string)

	category: string;

	setCollapseIDKey(_: string)

	collapseIDKey: string;

	setDesiredKeys(_: NSArray<string>)

	desiredKeys: NSArray<string>;

	setShouldBadge(_: boolean)

	shouldBadge: boolean;

	setShouldSendContentAvailable(_: boolean)

	shouldSendContentAvailable: boolean;

	setShouldSendMutableContent(_: boolean)

	shouldSendMutableContent: boolean;

	setSoundName(_: string)

	soundName: string;

	setSubtitle(_: string)

	subtitle: string;

	setSubtitleLocalizationArgs(_: NSArray<string>)

	subtitleLocalizationArgs: NSArray<string>;

	setSubtitleLocalizationKey(_: string)

	subtitleLocalizationKey: string;

	setTitle(_: string)

	title: string;

	setTitleLocalizationArgs(_: NSArray<string>)

	titleLocalizationArgs: NSArray<string>;

	setTitleLocalizationKey(_: string)

	titleLocalizationKey: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum CKNotificationType {

	Query = 1,

	RecordZone = 2,

	ReadNotification = 3,

	Database = 4
}


declare class CKOperation extends NSOperation {

	setConfiguration(_: CKOperationConfiguration)

	configuration: CKOperationConfiguration;

	setGroup(_: CKOperationGroup)

	group: CKOperationGroup;

	setLongLivedOperationWasPersistedBlock(_: () => void)

	longLivedOperationWasPersistedBlock: () => void;

	readonly operationID: string;
}

declare class CKOperationConfiguration extends NSObject {

	setAllowsCellularAccess(_: boolean)

	allowsCellularAccess: boolean;

	setContainer(_: CKContainer)

	container: CKContainer;

	setLongLived(_: boolean)

	isLongLived: boolean;

	setQualityOfService(_: NSQualityOfService)

	qualityOfService: NSQualityOfService;

	setTimeoutIntervalForRequest(_: number)

	timeoutIntervalForRequest: number;

	setTimeoutIntervalForResource(_: number)

	timeoutIntervalForResource: number;
}

declare class CKOperationGroup extends NSObject implements NSSecureCoding {

	setDefaultConfiguration(_: CKOperationConfiguration)

	defaultConfiguration: CKOperationConfiguration;

	setExpectedReceiveSize(_: CKOperationGroupTransferSize)

	expectedReceiveSize: CKOperationGroupTransferSize;

	setExpectedSendSize(_: CKOperationGroupTransferSize)

	expectedSendSize: CKOperationGroupTransferSize;

	setName(_: string)

	name: string;

	readonly operationGroupID: string;

	setQuantity(_: number)

	quantity: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum CKOperationGroupTransferSize {

	Unknown = 0,

	Kilobytes = 1,

	Megabytes = 2,

	TensOfMegabytes = 3,

	HundredsOfMegabytes = 4,

	Gigabytes = 5,

	TensOfGigabytes = 6,

	HundredsOfGigabytes = 7
}


declare var CKPartialErrorsByItemIDKey: string;

declare class CKQuery extends NSObject implements NSCopying, NSSecureCoding {

	readonly predicate: NSPredicate;

	readonly recordType: string;

	setSortDescriptors(_: NSArray<NSSortDescriptor>)

	sortDescriptors: NSArray<NSSortDescriptor>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(recordType: string, predicate: NSPredicate);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CKQueryCursor extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CKQueryNotification extends CKNotification {

	static notificationFromRemoteNotificationDictionary(_: NSDictionary<any, any>): CKQueryNotification; // inherited from CKNotification

	readonly databaseScope: CKDatabaseScope;

	readonly queryNotificationReason: CKQueryNotificationReason;

	readonly recordFields: NSDictionary<string, any>;

	readonly recordID: CKRecordID;
}

enum CKQueryNotificationReason {

	RecordCreated = 1,

	RecordUpdated = 2,

	RecordDeleted = 3
}


declare class CKQueryOperation extends CKDatabaseOperation {

	setCursor(_: CKQueryCursor)

	cursor: CKQueryCursor;

	setDesiredKeys(_: NSArray<string>)

	desiredKeys: NSArray<string>;

	setQuery(_: CKQuery)

	query: CKQuery;

	setQueryCompletionBlock(_: (p1: CKQueryCursor, p2: NSError) => void)

	queryCompletionBlock: (p1: CKQueryCursor, p2: NSError) => void;

	setRecordFetchedBlock(_: (p1: CKRecord) => void)

	recordFetchedBlock: (p1: CKRecord) => void;

	setResultsLimit(_: number)

	resultsLimit: number;

	setZoneID(_: CKRecordZoneID)

	zoneID: CKRecordZoneID;

	static create(cursor: CKQueryCursor);

	static create(query: CKQuery);
}

declare var CKQueryOperationMaximumResults: number;

declare class CKQuerySubscription extends CKSubscription implements NSCopying, NSSecureCoding {

	readonly predicate: NSPredicate;

	readonly querySubscriptionOptions: CKQuerySubscriptionOptions;

	readonly recordType: string;

	setZoneID(_: CKRecordZoneID)

	zoneID: CKRecordZoneID;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(recordType: string, predicate: NSPredicate, options: CKQuerySubscriptionOptions);

	static create(recordType: string, predicate: NSPredicate, subscriptionID: string, options: CKQuerySubscriptionOptions);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum CKQuerySubscriptionOptions {

	FiresOnRecordCreation = 1,

	FiresOnRecordUpdate = 2,

	FiresOnRecordDeletion = 4,

	FiresOnce = 8
}


declare class CKRecord extends NSObject implements NSCopying, NSSecureCoding, CKRecordKeyValueSetting {

	readonly creationDate: Date;

	readonly creatorUserRecordID: CKRecordID;

	readonly lastModifiedUserRecordID: CKRecordID;

	readonly modificationDate: Date;

	setParent(_: CKReference)

	parent: CKReference;

	readonly recordChangeTag: string;

	readonly recordID: CKRecordID;

	readonly recordType: string;

	readonly share: CKReference;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(recordType: string);

	static create(recordType: string, recordID: CKRecordID);

	static create(recordType: string, zoneID: CKRecordZoneID);

	allKeys(): NSArray<string>;

	allTokens(): NSArray<string>;

	changedKeys(): NSArray<string>;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeSystemFieldsWithCoder(_: NSCoder): void;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	objectForKey(_: string): CKRecordValue;

	objectForKeyedSubscript(_: string): CKRecordValue;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setObjectForKey(_?: CKRecordValue, forKey: string): void;

	setObjectForKeyedSubscript(_?: CKRecordValue, forKeyedSubscript: string): void;

	setParentReferenceFromRecord(_?: CKRecord): void;

	setParentReferenceFromRecordID(_?: CKRecordID): void;
}

declare var CKRecordChangedErrorAncestorRecordKey: string;

declare var CKRecordChangedErrorClientRecordKey: string;

declare var CKRecordChangedErrorServerRecordKey: string;

declare class CKRecordID extends NSObject implements NSCopying, NSSecureCoding {

	readonly recordName: string;

	readonly zoneID: CKRecordZoneID;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(recordName: string);

	static create(recordName: string, zoneID: CKRecordZoneID);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

interface CKRecordKeyValueSetting extends NSObjectProtocol {

	allKeys(): NSArray<string>;

	changedKeys(): NSArray<string>;

	objectForKey(_: string): CKRecordValue;

	objectForKeyedSubscript(_: string): CKRecordValue;

	setObjectForKey(_?: CKRecordValue, forKey: string): void;

	setObjectForKeyedSubscript(_?: CKRecordValue, forKeyedSubscript: string): void;
}
declare var CKRecordKeyValueSetting: {

	prototype: CKRecordKeyValueSetting;
};

declare var CKRecordParentKey: string;

enum CKRecordSavePolicy {

	IfServerRecordUnchanged = 0,

	ChangedKeys = 1,

	AllKeys = 2
}


declare var CKRecordShareKey: string;

declare var CKRecordTypeShare: string;

declare var CKRecordTypeUserRecord: string;

interface CKRecordValue extends NSObjectProtocol {
}
declare var CKRecordValue: {

	prototype: CKRecordValue;
};

declare class CKRecordZone extends NSObject implements NSCopying, NSSecureCoding {

	static defaultRecordZone(): CKRecordZone;

	readonly capabilities: CKRecordZoneCapabilities;

	readonly zoneID: CKRecordZoneID;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(zoneID: CKRecordZoneID);

	static create(zoneName: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum CKRecordZoneCapabilities {

	CapabilityFetchChanges = 1,

	CapabilityAtomic = 2,

	CapabilitySharing = 4
}


declare var CKRecordZoneDefaultName: string;

declare class CKRecordZoneID extends NSObject implements NSCopying, NSSecureCoding {

	readonly ownerName: string;

	readonly zoneName: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(zoneName: string, ownerName: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CKRecordZoneNotification extends CKNotification {

	static notificationFromRemoteNotificationDictionary(_: NSDictionary<any, any>): CKRecordZoneNotification; // inherited from CKNotification

	readonly databaseScope: CKDatabaseScope;

	readonly recordZoneID: CKRecordZoneID;
}

declare class CKRecordZoneSubscription extends CKSubscription implements NSCopying, NSSecureCoding {

	setRecordType(_: string)

	recordType: string;

	readonly zoneID: CKRecordZoneID;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(zoneID: CKRecordZoneID);

	static create(zoneID: CKRecordZoneID, subscriptionID: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CKReference extends NSObject implements NSCopying, NSSecureCoding, CKRecordValue {

	readonly recordID: CKRecordID;

	readonly referenceAction: CKReferenceAction;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(record: CKRecord, action: CKReferenceAction);

	static create(recordID: CKRecordID, action: CKReferenceAction);

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

enum CKReferenceAction {

	None = 0,

	DeleteSelf = 1
}


declare class CKServerChangeToken extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CKShare extends CKRecord implements NSSecureCoding {

	readonly URL: NSURL;

	readonly currentUserParticipant: CKShareParticipant;

	readonly owner: CKShareParticipant;

	readonly participants: NSArray<CKShareParticipant>;

	setPublicPermission(_: CKShareParticipantPermission)

	publicPermission: CKShareParticipantPermission;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(rootRecord: CKRecord);

	static create(rootRecord: CKRecord, shareID: CKRecordID);

	addParticipant(_: CKShareParticipant): void;

	encodeWithCoder(_: NSCoder): void;

	removeParticipant(_: CKShareParticipant): void;
}

declare class CKShareMetadata extends NSObject implements NSCopying, NSSecureCoding {

	readonly containerIdentifier: string;

	readonly ownerIdentity: CKUserIdentity;

	readonly participantPermission: CKShareParticipantPermission;

	readonly participantRole: CKShareParticipantRole;

	readonly participantStatus: CKShareParticipantAcceptanceStatus;

	readonly rootRecord: CKRecord;

	readonly rootRecordID: CKRecordID;

	readonly share: CKShare;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CKShareParticipant extends NSObject implements NSCopying, NSSecureCoding {

	readonly acceptanceStatus: CKShareParticipantAcceptanceStatus;

	setPermission(_: CKShareParticipantPermission)

	permission: CKShareParticipantPermission;

	setRole(_: CKShareParticipantRole)

	role: CKShareParticipantRole;

	readonly userIdentity: CKUserIdentity;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum CKShareParticipantAcceptanceStatus {

	Unknown = 0,

	Pending = 1,

	Accepted = 2,

	Removed = 3
}


enum CKShareParticipantPermission {

	Unknown = 0,

	None = 1,

	ReadOnly = 2,

	ReadWrite = 3
}


enum CKShareParticipantRole {

	Unknown = 0,

	Owner = 1,

	PrivateUser = 3,

	PublicUser = 4
}


declare var CKShareThumbnailImageDataKey: string;

declare var CKShareTitleKey: string;

declare var CKShareTypeKey: string;

declare class CKSubscription extends NSObject implements NSCopying, NSSecureCoding {

	setNotificationInfo(_: CKNotificationInfo)

	notificationInfo: CKNotificationInfo;

	readonly subscriptionID: string;

	readonly subscriptionType: CKSubscriptionType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum CKSubscriptionType {

	Query = 1,

	RecordZone = 2,

	Database = 3
}


declare class CKUserIdentity extends NSObject implements NSCopying, NSSecureCoding {

	readonly contactIdentifiers: NSArray<string>;

	readonly hasiCloudAccount: boolean;

	readonly lookupInfo: CKUserIdentityLookupInfo;

	readonly nameComponents: NSPersonNameComponents;

	readonly userRecordID: CKRecordID;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CKUserIdentityLookupInfo extends NSObject implements NSCopying, NSSecureCoding {

	static lookupInfosWithEmails(_: NSArray<string>): NSArray<CKUserIdentityLookupInfo>;

	static lookupInfosWithPhoneNumbers(_: NSArray<string>): NSArray<CKUserIdentityLookupInfo>;

	static lookupInfosWithRecordIDs(_: NSArray<CKRecordID>): NSArray<CKUserIdentityLookupInfo>;

	readonly emailAddress: string;

	readonly phoneNumber: string;

	readonly userRecordID: CKRecordID;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(emailAddress: string);

	static create(phoneNumber: string);

	static create(userRecordID: CKRecordID);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}
