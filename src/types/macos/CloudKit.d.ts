globalThis.CKAccountStatus = globalThis.CKAccountStatus || {};

globalThis.CKAccountStatus = {
    CouldNotDetermine: 0,
    Available: 1,
    Restricted: 2,
    NoAccount: 3,
    '0': 'CouldNotDetermine',
    '1': 'Available',
    '2': 'Restricted',
    '3': 'NoAccount'
}

globalThis.CKContainer_Application_PermissionStatus = globalThis.CKContainer_Application_PermissionStatus || {};

globalThis.CKContainer_Application_PermissionStatus = {
    InitialState: 0,
    CouldNotComplete: 1,
    Denied: 2,
    Granted: 3,
    '0': 'InitialState',
    '1': 'CouldNotComplete',
    '2': 'Denied',
    '3': 'Granted'
}

globalThis.CKContainer_Application_Permissions = globalThis.CKContainer_Application_Permissions || {};

globalThis.CKContainer_Application_Permissions = {
    UserDiscoverability: 1,
    '1': 'UserDiscoverability'
}

globalThis.CKDatabase = globalThis.CKDatabase || {};

globalThis.CKDatabase.Scope = {
    Public: 1,
    Private: 2,
    Shared: 3,
    '1': 'Public',
    '2': 'Private',
    '3': 'Shared'
}

globalThis.CKErrorCode = globalThis.CKErrorCode || {};

globalThis.CKErrorCode = {
    InternalError: 1,
    PartialFailure: 2,
    NetworkUnavailable: 3,
    NetworkFailure: 4,
    BadContainer: 5,
    ServiceUnavailable: 6,
    RequestRateLimited: 7,
    MissingEntitlement: 8,
    NotAuthenticated: 9,
    PermissionFailure: 10,
    UnknownItem: 11,
    InvalidArguments: 12,
    ResultsTruncated: 13,
    ServerRecordChanged: 14,
    ServerRejectedRequest: 15,
    AssetFileNotFound: 16,
    AssetFileModified: 17,
    IncompatibleVersion: 18,
    ConstraintViolation: 19,
    OperationCancelled: 20,
    ChangeTokenExpired: 21,
    BatchRequestFailed: 22,
    ZoneBusy: 23,
    BadDatabase: 24,
    QuotaExceeded: 25,
    ZoneNotFound: 26,
    LimitExceeded: 27,
    UserDeletedZone: 28,
    TooManyParticipants: 29,
    AlreadyShared: 30,
    ReferenceViolation: 31,
    ManagedAccountRestricted: 32,
    ParticipantMayNeedVerification: 33,
    ServerResponseLost: 34,
    AssetNotAvailable: 35,
    '1': 'InternalError',
    '2': 'PartialFailure',
    '3': 'NetworkUnavailable',
    '4': 'NetworkFailure',
    '5': 'BadContainer',
    '6': 'ServiceUnavailable',
    '7': 'RequestRateLimited',
    '8': 'MissingEntitlement',
    '9': 'NotAuthenticated',
    '10': 'PermissionFailure',
    '11': 'UnknownItem',
    '12': 'InvalidArguments',
    '13': 'ResultsTruncated',
    '14': 'ServerRecordChanged',
    '15': 'ServerRejectedRequest',
    '16': 'AssetFileNotFound',
    '17': 'AssetFileModified',
    '18': 'IncompatibleVersion',
    '19': 'ConstraintViolation',
    '20': 'OperationCancelled',
    '21': 'ChangeTokenExpired',
    '22': 'BatchRequestFailed',
    '23': 'ZoneBusy',
    '24': 'BadDatabase',
    '25': 'QuotaExceeded',
    '26': 'ZoneNotFound',
    '27': 'LimitExceeded',
    '28': 'UserDeletedZone',
    '29': 'TooManyParticipants',
    '30': 'AlreadyShared',
    '31': 'ReferenceViolation',
    '32': 'ManagedAccountRestricted',
    '33': 'ParticipantMayNeedVerification',
    '34': 'ServerResponseLost',
    '35': 'AssetNotAvailable'
}

globalThis.CKNotification = globalThis.CKNotification || {};

globalThis.CKNotification.NotificationType = {
    Query: 1,
    RecordZone: 2,
    ReadNotification: 3,
    Database: 4,
    '1': 'Query',
    '2': 'RecordZone',
    '3': 'ReadNotification',
    '4': 'Database'
}

globalThis.CKOperationGroup = globalThis.CKOperationGroup || {};

globalThis.CKOperationGroup.TransferSize = {
    Unknown: 0,
    Kilobytes: 1,
    Megabytes: 2,
    TensOfMegabytes: 3,
    HundredsOfMegabytes: 4,
    Gigabytes: 5,
    TensOfGigabytes: 6,
    HundredsOfGigabytes: 7,
    '0': 'Unknown',
    '1': 'Kilobytes',
    '2': 'Megabytes',
    '3': 'TensOfMegabytes',
    '4': 'HundredsOfMegabytes',
    '5': 'Gigabytes',
    '6': 'TensOfGigabytes',
    '7': 'HundredsOfGigabytes'
}

globalThis.CKQueryNotification = globalThis.CKQueryNotification || {};

globalThis.CKQueryNotification.Reason = {
    RecordCreated: 1,
    RecordUpdated: 2,
    RecordDeleted: 3,
    '1': 'RecordCreated',
    '2': 'RecordUpdated',
    '3': 'RecordDeleted'
}

globalThis.CKQuerySubscription = globalThis.CKQuerySubscription || {};

globalThis.CKQuerySubscription.Options = {
    FiresOnRecordCreation: 1,
    FiresOnRecordUpdate: 2,
    FiresOnRecordDeletion: 4,
    FiresOnce: 8,
    '1': 'FiresOnRecordCreation',
    '2': 'FiresOnRecordUpdate',
    '4': 'FiresOnRecordDeletion',
    '8': 'FiresOnce'
}

globalThis.CKModifyRecordsOperation = globalThis.CKModifyRecordsOperation || {};

globalThis.CKModifyRecordsOperation.RecordSavePolicy = {
    IfServerRecordUnchanged: 0,
    ChangedKeys: 1,
    AllKeys: 2,
    '0': 'IfServerRecordUnchanged',
    '1': 'ChangedKeys',
    '2': 'AllKeys'
}

globalThis.CKRecordZone = globalThis.CKRecordZone || {};

globalThis.CKRecordZone.Capabilities = {
    CapabilityFetchChanges: 1,
    CapabilityAtomic: 2,
    CapabilitySharing: 4,
    '1': 'CapabilityFetchChanges',
    '2': 'CapabilityAtomic',
    '4': 'CapabilitySharing'
}

globalThis.CKRecord_Reference_Action = globalThis.CKRecord_Reference_Action || {};

globalThis.CKRecord_Reference_Action = {
    None: 0,
    DeleteSelf: 1,
    '0': 'None',
    '1': 'DeleteSelf'
}

globalThis.CKShare_Participant_AcceptanceStatus = globalThis.CKShare_Participant_AcceptanceStatus || {};

globalThis.CKShare_Participant_AcceptanceStatus = {
    Unknown: 0,
    Pending: 1,
    Accepted: 2,
    Removed: 3,
    '0': 'Unknown',
    '1': 'Pending',
    '2': 'Accepted',
    '3': 'Removed'
}

globalThis.CKShare_Participant_Permission = globalThis.CKShare_Participant_Permission || {};

globalThis.CKShare_Participant_Permission = {
    Unknown: 0,
    None: 1,
    ReadOnly: 2,
    ReadWrite: 3,
    '0': 'Unknown',
    '1': 'None',
    '2': 'ReadOnly',
    '3': 'ReadWrite'
}

globalThis.CKShare_Participant_Role = globalThis.CKShare_Participant_Role || {};

globalThis.CKShare_Participant_Role = {
    Unknown: 0,
    Owner: 1,
    PrivateUser: 3,
    PublicUser: 4,
    '0': 'Unknown',
    '1': 'Owner',
    '3': 'PrivateUser',
    '4': 'PublicUser'
}

globalThis.CKSubscription = globalThis.CKSubscription || {};

globalThis.CKSubscription.SubscriptionType = {
    Query: 1,
    RecordZone: 2,
    Database: 3,
    '1': 'Query',
    '2': 'RecordZone',
    '3': 'Database'
}

declare class CKAcceptSharesOperation extends CKOperation {
  static allocWithZone(with_: any): CKAcceptSharesOperation; // inherited from NSObject
  acceptSharesCompletionBlock: (p1: Error) => void;
  setAcceptSharesCompletionBlock(_: (p1: Error) => void)
  perShareCompletionBlock: (p1: CKShare.Metadata, p2: CKShare, p3: Error) => void;
  setPerShareCompletionBlock(_: (p1: CKShare.Metadata, p2: CKShare, p3: Error) => void)
  shareMetadatas: NSArray<CKShare.Metadata>;
  setShareMetadatas(_: NSArray<CKShare.Metadata>)
  static createWithShareMetadatas(shareMetadatas: NSArray<CKShare.Metadata>): this;
}

declare var CKAccountChangedNotification: string;

declare class CKAsset extends NSObject implements CKRecordValue {
  static allocWithZone(with_: any): CKAsset; // inherited from NSObject
  readonly fileURL: URL;
  readonly debugDescription: string; // inherited from NSObjectProtocol
  readonly description: string; // inherited from NSObjectProtocol
  readonly hash: number; // inherited from NSObjectProtocol
  readonly isProxy: boolean; // inherited from NSObjectProtocol
  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol
  conformsToProtocol(to: any /* Protocol */): boolean;
  static createWithFileURL(fileURL: URL): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class CKContainer extends NSObject {
  static allocWithZone(with_: any): CKContainer; // inherited from NSObject
  static defaultContainer(): CKContainer;
  readonly containerIdentifier: string;
  readonly privateCloudDatabase: CKDatabase;
  readonly publicCloudDatabase: CKDatabase;
  readonly sharedCloudDatabase: CKDatabase;
  acceptShareMetadataCompletionHandler(_: CKShare.Metadata, completionHandler?: (p1: CKShare, p2: Error) => void): void;
  accountStatusWithCompletionHandler(completionHandler?: (p1: CKAccountStatus, p2: Error) => void): void;
  addOperation(_: CKOperation): void;
  databaseWithDatabaseScope(with_: CKDatabase.Scope): CKDatabase;
  discoverAllIdentitiesWithCompletionHandler(completionHandler?: (p1: NSArray<CKUserIdentity>, p2: Error) => void): void;
  discoverUserIdentityWithEmailAddressCompletionHandler(withEmailAddress: string, completionHandler?: (p1: CKUserIdentity, p2: Error) => void): void;
  discoverUserIdentityWithPhoneNumberCompletionHandler(withPhoneNumber: string, completionHandler?: (p1: CKUserIdentity, p2: Error) => void): void;
  discoverUserIdentityWithUserRecordIDCompletionHandler(withUserRecordID: CKRecord.ID, completionHandler?: (p1: CKUserIdentity, p2: Error) => void): void;
  fetchAllLongLivedOperationIDsWithCompletionHandler(_?: (p1: NSArray<string>, p2: Error) => void): void;
  fetchLongLivedOperationWithIDCompletionHandler(_: string, completionHandler?: (p1: CKOperation, p2: Error) => void): void;
  fetchShareMetadataWithURLCompletionHandler(with_: URL, completionHandler?: (p1: CKShare.Metadata, p2: Error) => void): void;
  fetchShareParticipantWithEmailAddressCompletionHandler(withEmailAddress: string, completionHandler?: (p1: CKShare.Participant, p2: Error) => void): void;
  fetchShareParticipantWithPhoneNumberCompletionHandler(withPhoneNumber: string, completionHandler?: (p1: CKShare.Participant, p2: Error) => void): void;
  fetchShareParticipantWithUserRecordIDCompletionHandler(withUserRecordID: CKRecord.ID, completionHandler?: (p1: CKShare.Participant, p2: Error) => void): void;
  fetchUserRecordIDWithCompletionHandler(completionHandler?: (p1: CKRecord.ID, p2: Error) => void): void;
  requestApplicationPermissionCompletionHandler(_: CKContainer_Application_Permissions, completionHandler: (p1: CKContainer_Application_PermissionStatus, p2: Error) => void): void;
  statusForApplicationPermissionCompletionHandler(forApplicationPermission: CKContainer_Application_Permissions, completionHandler: (p1: CKContainer_Application_PermissionStatus, p2: Error) => void): void;
}

declare var CKCurrentUserDefaultName: string;

declare class CKDatabase extends NSObject {
  static allocWithZone(with_: any): CKDatabase; // inherited from NSObject
  readonly databaseScope: CKDatabase.Scope;
  addOperation(_: CKDatabaseOperation): void;
  deleteRecordWithIDCompletionHandler(withRecordID: CKRecord.ID, completionHandler?: (p1: CKRecord.ID, p2: Error) => void): void;
  deleteRecordZoneWithIDCompletionHandler(withRecordZoneID: CKRecordZone.ID, completionHandler?: (p1: CKRecordZone.ID, p2: Error) => void): void;
  deleteSubscriptionWithIDCompletionHandler(withSubscriptionID: string, completionHandler?: (p1: string, p2: Error) => void): void;
  fetchAllRecordZonesWithCompletionHandler(completionHandler?: (p1: NSArray<CKRecordZone>, p2: Error) => void): void;
  fetchAllSubscriptionsWithCompletionHandler(completionHandler?: (p1: NSArray<CKSubscription>, p2: Error) => void): void;
  fetchRecordWithIDCompletionHandler(withRecordID: CKRecord.ID, completionHandler?: (p1: CKRecord, p2: Error) => void): void;
  fetchRecordZoneWithIDCompletionHandler(withRecordZoneID: CKRecordZone.ID, completionHandler?: (p1: CKRecordZone, p2: Error) => void): void;
  fetchSubscriptionWithIDCompletionHandler(withSubscriptionID: string, completionHandler?: (p1: CKSubscription, p2: Error) => void): void;
  performQueryInZoneWithIDCompletionHandler(_: CKQuery, inZoneWith?: CKRecordZone.ID, completionHandler?: (p1: NSArray<CKRecord>, p2: Error) => void): void;
  saveRecordCompletionHandler(_: CKRecord, completionHandler?: (p1: CKRecord, p2: Error) => void): void;
  saveRecordZoneCompletionHandler(_: CKRecordZone, completionHandler?: (p1: CKRecordZone, p2: Error) => void): void;
  saveSubscriptionCompletionHandler(_: CKSubscription, completionHandler?: (p1: CKSubscription, p2: Error) => void): void;
}

declare class CKDatabaseNotification extends CKNotification {
  static allocWithZone(with_: any): CKDatabaseNotification; // inherited from NSObject
  readonly databaseScope: CKDatabase.Scope;
}

declare class CKDatabaseOperation extends CKOperation {
  static allocWithZone(with_: any): CKDatabaseOperation; // inherited from NSObject
  database: CKDatabase;
  setDatabase(_: CKDatabase)
}

declare class CKDatabaseSubscription extends CKSubscription implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKDatabaseSubscription; // inherited from NSObject
  recordType: string;
  setRecordType(_: string)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithSubscriptionID(subscriptionID: string): this;
}

declare class CKDiscoverAllUserIdentitiesOperation extends CKOperation {
  static allocWithZone(with_: any): CKDiscoverAllUserIdentitiesOperation; // inherited from NSObject
  discoverAllUserIdentitiesCompletionBlock: (p1: Error) => void;
  setDiscoverAllUserIdentitiesCompletionBlock(_: (p1: Error) => void)
  userIdentityDiscoveredBlock: (p1: CKUserIdentity) => void;
  setUserIdentityDiscoveredBlock(_: (p1: CKUserIdentity) => void)
}

declare class CKDiscoverUserIdentitiesOperation extends CKOperation {
  static allocWithZone(with_: any): CKDiscoverUserIdentitiesOperation; // inherited from NSObject
  discoverUserIdentitiesCompletionBlock: (p1: Error) => void;
  setDiscoverUserIdentitiesCompletionBlock(_: (p1: Error) => void)
  userIdentityDiscoveredBlock: (p1: CKUserIdentity, p2: CKUserIdentity.LookupInfo) => void;
  setUserIdentityDiscoveredBlock(_: (p1: CKUserIdentity, p2: CKUserIdentity.LookupInfo) => void)
  userIdentityLookupInfos: NSArray<CKUserIdentity.LookupInfo>;
  setUserIdentityLookupInfos(_: NSArray<CKUserIdentity.LookupInfo>)
  static createWithUserIdentityLookupInfos(userIdentityLookupInfos: NSArray<CKUserIdentity.LookupInfo>): this;
}

declare var CKErrorDomain: string;

declare var CKErrorRetryAfterKey: string;

declare class CKFetchDatabaseChangesOperation extends CKDatabaseOperation {
  static allocWithZone(with_: any): CKFetchDatabaseChangesOperation; // inherited from NSObject
  changeTokenUpdatedBlock: (p1: CKServerChangeToken) => void;
  setChangeTokenUpdatedBlock(_: (p1: CKServerChangeToken) => void)
  fetchAllChanges: boolean;
  setFetchAllChanges(_: boolean)
  fetchDatabaseChangesCompletionBlock: (p1: CKServerChangeToken, p2: boolean, p3: Error) => void;
  setFetchDatabaseChangesCompletionBlock(_: (p1: CKServerChangeToken, p2: boolean, p3: Error) => void)
  previousServerChangeToken: CKServerChangeToken;
  setPreviousServerChangeToken(_: CKServerChangeToken)
  recordZoneWithIDChangedBlock: (p1: CKRecordZone.ID) => void;
  setRecordZoneWithIDChangedBlock(_: (p1: CKRecordZone.ID) => void)
  recordZoneWithIDWasDeletedBlock: (p1: CKRecordZone.ID) => void;
  setRecordZoneWithIDWasDeletedBlock(_: (p1: CKRecordZone.ID) => void)
  recordZoneWithIDWasPurgedBlock: (p1: CKRecordZone.ID) => void;
  setRecordZoneWithIDWasPurgedBlock(_: (p1: CKRecordZone.ID) => void)
  resultsLimit: number;
  setResultsLimit(_: number)
  static createWithPreviousServerChangeToken(previousServerChangeToken?: CKServerChangeToken): this;
}

declare class CKFetchRecordZoneChangesConfiguration extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKFetchRecordZoneChangesConfiguration; // inherited from NSObject
  desiredKeys: NSArray<string>;
  setDesiredKeys(_: NSArray<string>)
  previousServerChangeToken: CKServerChangeToken;
  setPreviousServerChangeToken(_: CKServerChangeToken)
  resultsLimit: number;
  setResultsLimit(_: number)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CKFetchRecordZoneChangesOperation extends CKDatabaseOperation {
  static allocWithZone(with_: any): CKFetchRecordZoneChangesOperation; // inherited from NSObject
  configurationsByRecordZoneID: NSDictionary<CKRecordZone.ID, CKFetchRecordZoneChangesOperation.ZoneConfiguration>;
  setConfigurationsByRecordZoneID(_: NSDictionary<CKRecordZone.ID, CKFetchRecordZoneChangesOperation.ZoneConfiguration>)
  fetchAllChanges: boolean;
  setFetchAllChanges(_: boolean)
  fetchRecordZoneChangesCompletionBlock: (p1: Error) => void;
  setFetchRecordZoneChangesCompletionBlock(_: (p1: Error) => void)
  recordChangedBlock: (p1: CKRecord) => void;
  setRecordChangedBlock(_: (p1: CKRecord) => void)
  recordWithIDWasDeletedBlock: (p1: CKRecord.ID, p2: string) => void;
  setRecordWithIDWasDeletedBlock(_: (p1: CKRecord.ID, p2: string) => void)
  recordZoneChangeTokensUpdatedBlock: (p1: CKRecordZone.ID, p2: CKServerChangeToken, p3: Data) => void;
  setRecordZoneChangeTokensUpdatedBlock(_: (p1: CKRecordZone.ID, p2: CKServerChangeToken, p3: Data) => void)
  recordZoneFetchCompletionBlock: (p1: CKRecordZone.ID, p2: CKServerChangeToken, p3: Data, p4: boolean, p5: Error) => void;
  setRecordZoneFetchCompletionBlock(_: (p1: CKRecordZone.ID, p2: CKServerChangeToken, p3: Data, p4: boolean, p5: Error) => void)
  recordZoneIDs: NSArray<CKRecordZone.ID>;
  setRecordZoneIDs(_: NSArray<CKRecordZone.ID>)
  static createWithRecordZoneIDsConfigurationsByRecordZoneID(recordZoneIDs: NSArray<CKRecordZone.ID>, configurationsByRecordZoneID?: NSDictionary<CKRecordZone.ID, CKFetchRecordZoneChangesOperation.ZoneConfiguration>): this;
}

declare class CKFetchRecordZonesOperation extends CKDatabaseOperation {
  static allocWithZone(with_: any): CKFetchRecordZonesOperation; // inherited from NSObject
  static fetchAllRecordZonesOperation(): CKFetchRecordZonesOperation;
  fetchRecordZonesCompletionBlock: (p1: NSDictionary<CKRecordZone.ID, CKRecordZone>, p2: Error) => void;
  setFetchRecordZonesCompletionBlock(_: (p1: NSDictionary<CKRecordZone.ID, CKRecordZone>, p2: Error) => void)
  recordZoneIDs: NSArray<CKRecordZone.ID>;
  setRecordZoneIDs(_: NSArray<CKRecordZone.ID>)
  static createWithRecordZoneIDs(recordZoneIDs: NSArray<CKRecordZone.ID>): this;
}

declare class CKFetchRecordsOperation extends CKDatabaseOperation {
  static allocWithZone(with_: any): CKFetchRecordsOperation; // inherited from NSObject
  static fetchCurrentUserRecordOperation(): CKFetchRecordsOperation;
  desiredKeys: NSArray<string>;
  setDesiredKeys(_: NSArray<string>)
  fetchRecordsCompletionBlock: (p1: NSDictionary<CKRecord.ID, CKRecord>, p2: Error) => void;
  setFetchRecordsCompletionBlock(_: (p1: NSDictionary<CKRecord.ID, CKRecord>, p2: Error) => void)
  perRecordCompletionBlock: (p1: CKRecord, p2: CKRecord.ID, p3: Error) => void;
  setPerRecordCompletionBlock(_: (p1: CKRecord, p2: CKRecord.ID, p3: Error) => void)
  perRecordProgressBlock: (p1: CKRecord.ID, p2: number) => void;
  setPerRecordProgressBlock(_: (p1: CKRecord.ID, p2: number) => void)
  recordIDs: NSArray<CKRecord.ID>;
  setRecordIDs(_: NSArray<CKRecord.ID>)
  static createWithRecordIDs(recordIDs: NSArray<CKRecord.ID>): this;
}

declare class CKFetchShareMetadataOperation extends CKOperation {
  static allocWithZone(with_: any): CKFetchShareMetadataOperation; // inherited from NSObject
  fetchShareMetadataCompletionBlock: (p1: Error) => void;
  setFetchShareMetadataCompletionBlock(_: (p1: Error) => void)
  perShareMetadataBlock: (p1: URL, p2: CKShare.Metadata, p3: Error) => void;
  setPerShareMetadataBlock(_: (p1: URL, p2: CKShare.Metadata, p3: Error) => void)
  rootRecordDesiredKeys: NSArray<string>;
  setRootRecordDesiredKeys(_: NSArray<string>)
  shareURLs: NSArray<URL>;
  setShareURLs(_: NSArray<URL>)
  shouldFetchRootRecord: boolean;
  setShouldFetchRootRecord(_: boolean)
  static createWithShareURLs(shareURLs: NSArray<URL>): this;
}

declare class CKFetchShareParticipantsOperation extends CKOperation {
  static allocWithZone(with_: any): CKFetchShareParticipantsOperation; // inherited from NSObject
  fetchShareParticipantsCompletionBlock: (p1: Error) => void;
  setFetchShareParticipantsCompletionBlock(_: (p1: Error) => void)
  shareParticipantFetchedBlock: (p1: CKShare.Participant) => void;
  setShareParticipantFetchedBlock(_: (p1: CKShare.Participant) => void)
  userIdentityLookupInfos: NSArray<CKUserIdentity.LookupInfo>;
  setUserIdentityLookupInfos(_: NSArray<CKUserIdentity.LookupInfo>)
  static createWithUserIdentityLookupInfos(userIdentityLookupInfos: NSArray<CKUserIdentity.LookupInfo>): this;
}

declare class CKFetchSubscriptionsOperation extends CKDatabaseOperation {
  static allocWithZone(with_: any): CKFetchSubscriptionsOperation; // inherited from NSObject
  static fetchAllSubscriptionsOperation(): CKFetchSubscriptionsOperation;
  fetchSubscriptionCompletionBlock: (p1: NSDictionary<string, CKSubscription>, p2: Error) => void;
  setFetchSubscriptionCompletionBlock(_: (p1: NSDictionary<string, CKSubscription>, p2: Error) => void)
  subscriptionIDs: NSArray<string>;
  setSubscriptionIDs(_: NSArray<string>)
  static createWithSubscriptionIDs(subscriptionIDs: NSArray<string>): this;
}

declare class CKFetchWebAuthTokenOperation extends CKDatabaseOperation {
  static allocWithZone(with_: any): CKFetchWebAuthTokenOperation; // inherited from NSObject
  APIToken: string;
  setAPIToken(_: string)
  fetchWebAuthTokenCompletionBlock: (p1: string, p2: Error) => void;
  setFetchWebAuthTokenCompletionBlock(_: (p1: string, p2: Error) => void)
  static createWithAPIToken(APIToken: string): this;
}

declare class CKLocationSortDescriptor extends NSSortDescriptor implements NSSecureCoding {
  static allocWithZone(with_: any): CKLocationSortDescriptor; // inherited from NSObject
  static sortDescriptorWithKeyAscending(key?: string, ascending: boolean): CKLocationSortDescriptor; // inherited from NSSortDescriptor
  static sortDescriptorWithKeyAscendingComparator(key?: string, ascending: boolean, comparator: (p1: any, p2: any) => ComparisonResult): CKLocationSortDescriptor; // inherited from NSSortDescriptor
  static sortDescriptorWithKeyAscendingSelector(key?: string, ascending: boolean, selector?: string): CKLocationSortDescriptor; // inherited from NSSortDescriptor
  readonly relativeLocation: CLLocation;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithKeyRelativeLocation(key: string, relativeLocation: CLLocation): this;
}

declare class CKModifyRecordZonesOperation extends CKDatabaseOperation {
  static allocWithZone(with_: any): CKModifyRecordZonesOperation; // inherited from NSObject
  modifyRecordZonesCompletionBlock: (p1: NSArray<CKRecordZone>, p2: NSArray<CKRecordZone.ID>, p3: Error) => void;
  setModifyRecordZonesCompletionBlock(_: (p1: NSArray<CKRecordZone>, p2: NSArray<CKRecordZone.ID>, p3: Error) => void)
  recordZoneIDsToDelete: NSArray<CKRecordZone.ID>;
  setRecordZoneIDsToDelete(_: NSArray<CKRecordZone.ID>)
  recordZonesToSave: NSArray<CKRecordZone>;
  setRecordZonesToSave(_: NSArray<CKRecordZone>)
  static createWithRecordZonesToSaveRecordZoneIDsToDelete(recordZonesToSave?: NSArray<CKRecordZone>, recordZoneIDsToDelete?: NSArray<CKRecordZone.ID>): this;
}

declare class CKModifyRecordsOperation extends CKDatabaseOperation {
  static allocWithZone(with_: any): CKModifyRecordsOperation; // inherited from NSObject
  atomic: boolean;
  setAtomic(_: boolean)
  clientChangeTokenData: Data;
  setClientChangeTokenData(_: Data)
  modifyRecordsCompletionBlock: (p1: NSArray<CKRecord>, p2: NSArray<CKRecord.ID>, p3: Error) => void;
  setModifyRecordsCompletionBlock(_: (p1: NSArray<CKRecord>, p2: NSArray<CKRecord.ID>, p3: Error) => void)
  perRecordCompletionBlock: (p1: CKRecord, p2: Error) => void;
  setPerRecordCompletionBlock(_: (p1: CKRecord, p2: Error) => void)
  perRecordProgressBlock: (p1: CKRecord, p2: number) => void;
  setPerRecordProgressBlock(_: (p1: CKRecord, p2: number) => void)
  recordIDsToDelete: NSArray<CKRecord.ID>;
  setRecordIDsToDelete(_: NSArray<CKRecord.ID>)
  recordsToSave: NSArray<CKRecord>;
  setRecordsToSave(_: NSArray<CKRecord>)
  savePolicy: CKModifyRecordsOperation.RecordSavePolicy;
  setSavePolicy(_: CKModifyRecordsOperation.RecordSavePolicy)
  static createWithRecordsToSaveRecordIDsToDelete(recordsToSave?: NSArray<CKRecord>, recordIDsToDelete?: NSArray<CKRecord.ID>): this;
}

declare class CKModifySubscriptionsOperation extends CKDatabaseOperation {
  static allocWithZone(with_: any): CKModifySubscriptionsOperation; // inherited from NSObject
  modifySubscriptionsCompletionBlock: (p1: NSArray<CKSubscription>, p2: NSArray<string>, p3: Error) => void;
  setModifySubscriptionsCompletionBlock(_: (p1: NSArray<CKSubscription>, p2: NSArray<string>, p3: Error) => void)
  subscriptionIDsToDelete: NSArray<string>;
  setSubscriptionIDsToDelete(_: NSArray<string>)
  subscriptionsToSave: NSArray<CKSubscription>;
  setSubscriptionsToSave(_: NSArray<CKSubscription>)
  static createWithSubscriptionsToSaveSubscriptionIDsToDelete(subscriptionsToSave?: NSArray<CKSubscription>, subscriptionIDsToDelete?: NSArray<string>): this;
}

declare class CKNotification extends NSObject {
  static allocWithZone(with_: any): CKNotification; // inherited from NSObject
  readonly alertActionLocalizationKey: string;
  readonly alertBody: string;
  readonly alertLaunchImage: string;
  readonly alertLocalizationArgs: NSArray<string>;
  readonly alertLocalizationKey: string;
  readonly badge: number;
  readonly category: string;
  readonly containerIdentifier: string;
  readonly isPruned: boolean;
  readonly notificationID: CKNotification.ID;
  readonly notificationType: CKNotification.NotificationType;
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
  static allocWithZone(with_: any): CKNotificationID; // inherited from NSObject
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CKNotificationInfo extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKNotificationInfo; // inherited from NSObject
  alertActionLocalizationKey: string;
  setAlertActionLocalizationKey(_: string)
  alertBody: string;
  setAlertBody(_: string)
  alertLaunchImage: string;
  setAlertLaunchImage(_: string)
  alertLocalizationArgs: NSArray<string>;
  setAlertLocalizationArgs(_: NSArray<string>)
  alertLocalizationKey: string;
  setAlertLocalizationKey(_: string)
  category: string;
  setCategory(_: string)
  collapseIDKey: string;
  setCollapseIDKey(_: string)
  desiredKeys: NSArray<string>;
  setDesiredKeys(_: NSArray<string>)
  shouldBadge: boolean;
  setShouldBadge(_: boolean)
  shouldSendContentAvailable: boolean;
  setShouldSendContentAvailable(_: boolean)
  shouldSendMutableContent: boolean;
  setShouldSendMutableContent(_: boolean)
  soundName: string;
  setSoundName(_: string)
  subtitle: string;
  setSubtitle(_: string)
  subtitleLocalizationArgs: NSArray<string>;
  setSubtitleLocalizationArgs(_: NSArray<string>)
  subtitleLocalizationKey: string;
  setSubtitleLocalizationKey(_: string)
  title: string;
  setTitle(_: string)
  titleLocalizationArgs: NSArray<string>;
  setTitleLocalizationArgs(_: NSArray<string>)
  titleLocalizationKey: string;
  setTitleLocalizationKey(_: string)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CKOperation extends NSOperation {
  static allocWithZone(with_: any): CKOperation; // inherited from NSObject
  configuration: CKOperation.Configuration;
  setConfiguration(_: CKOperation.Configuration)
  group: CKOperationGroup;
  setGroup(_: CKOperationGroup)
  longLivedOperationWasPersistedBlock: () => void;
  setLongLivedOperationWasPersistedBlock(_: () => void)
  readonly operationID: string;
}

declare class CKOperationConfiguration extends NSObject {
  static allocWithZone(with_: any): CKOperationConfiguration; // inherited from NSObject
  qualityOfService: QualityOfService;
  setQualityOfService(_: QualityOfService)
}

declare class CKOperationGroup extends NSObject implements NSSecureCoding {
  static allocWithZone(with_: any): CKOperationGroup; // inherited from NSObject
  defaultConfiguration: CKOperation.Configuration;
  setDefaultConfiguration(_: CKOperation.Configuration)
  expectedReceiveSize: CKOperationGroup.TransferSize;
  setExpectedReceiveSize(_: CKOperationGroup.TransferSize)
  expectedSendSize: CKOperationGroup.TransferSize;
  setExpectedSendSize(_: CKOperationGroup.TransferSize)
  name: string;
  setName(_: string)
  readonly operationGroupID: string;
  quantity: number;
  setQuantity(_: number)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var CKPartialErrorsByItemIDKey: string;

declare class CKQuery extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKQuery; // inherited from NSObject
  readonly predicate: NSPredicate;
  readonly recordType: string;
  sortDescriptors: NSArray<NSSortDescriptor>;
  setSortDescriptors(_: NSArray<NSSortDescriptor>)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithRecordTypePredicate(recordType: string, predicate: NSPredicate): this;
}

declare class CKQueryCursor extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKQueryCursor; // inherited from NSObject
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CKQueryNotification extends CKNotification {
  static allocWithZone(with_: any): CKQueryNotification; // inherited from NSObject
  readonly databaseScope: CKDatabase.Scope;
  readonly queryNotificationReason: CKQueryNotification.Reason;
  readonly recordFields: NSDictionary<string, any>;
  readonly recordID: CKRecord.ID;
}

declare class CKQueryOperation extends CKDatabaseOperation {
  static allocWithZone(with_: any): CKQueryOperation; // inherited from NSObject
  cursor: CKQueryOperation.Cursor;
  setCursor(_: CKQueryOperation.Cursor)
  desiredKeys: NSArray<string>;
  setDesiredKeys(_: NSArray<string>)
  query: CKQuery;
  setQuery(_: CKQuery)
  queryCompletionBlock: (p1: CKQueryOperation.Cursor, p2: Error) => void;
  setQueryCompletionBlock(_: (p1: CKQueryOperation.Cursor, p2: Error) => void)
  recordFetchedBlock: (p1: CKRecord) => void;
  setRecordFetchedBlock(_: (p1: CKRecord) => void)
  resultsLimit: number;
  setResultsLimit(_: number)
  zoneID: CKRecordZone.ID;
  setZoneID(_: CKRecordZone.ID)
  static createWithCursor(cursor: CKQueryOperation.Cursor): this;
  static createWithQuery(query: CKQuery): this;
}

declare var CKQueryOperationMaximumResults: number;

declare class CKQuerySubscription extends CKSubscription implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKQuerySubscription; // inherited from NSObject
  readonly predicate: NSPredicate;
  readonly querySubscriptionOptions: CKQuerySubscription.Options;
  readonly recordType: string;
  zoneID: CKRecordZone.ID;
  setZoneID(_: CKRecordZone.ID)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithRecordTypePredicateOptions(recordType: string, predicate: NSPredicate, options: CKQuerySubscription.Options): this;
  static createWithRecordTypePredicateSubscriptionIDOptions(recordType: string, predicate: NSPredicate, subscriptionID: string, options: CKQuerySubscription.Options): this;
}

declare class CKRecord extends NSObject implements NSCopying, NSSecureCoding, CKRecordKeyValueSetting {
  static allocWithZone(with_: any): CKRecord; // inherited from NSObject
  readonly creationDate: Date;
  readonly creatorUserRecordID: CKRecord.ID;
  readonly lastModifiedUserRecordID: CKRecord.ID;
  readonly modificationDate: Date;
  parent: CKRecord.Reference;
  setParent(_: CKRecord.Reference)
  readonly recordChangeTag: string;
  readonly recordID: CKRecord.ID;
  readonly recordType: string;
  readonly share: CKRecord.Reference;
  readonly debugDescription: string; // inherited from NSObjectProtocol
  readonly description: string; // inherited from NSObjectProtocol
  readonly hash: number; // inherited from NSObjectProtocol
  readonly isProxy: boolean; // inherited from NSObjectProtocol
  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  allKeys(): NSArray<string>;
  allTokens(): NSArray<string>;
  changedKeys(): NSArray<string>;
  conformsToProtocol(to: any /* Protocol */): boolean;
  copyWithZone(with_?: any): any;
  encodeSystemFieldsWithCoder(with_: NSCoder): void;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithRecordType(recordType: string): this;
  static createWithRecordTypeRecordID(recordType: string, recordID: CKRecord.ID): this;
  static createWithRecordTypeZoneID(recordType: string, zoneID: CKRecordZone.ID): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  objectForKey(forKey: string): CKRecordValue;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  setObjectForKey(_?: CKRecordValue, forKey: string): void;
  setParentReferenceFromRecord(_?: CKRecord): void;
  setParentReferenceFromRecordID(_?: CKRecord.ID): void;
}

declare var CKRecordChangedErrorAncestorRecordKey: string;

declare var CKRecordChangedErrorClientRecordKey: string;

declare var CKRecordChangedErrorServerRecordKey: string;

declare class CKRecordID extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKRecordID; // inherited from NSObject
  readonly recordName: string;
  readonly zoneID: CKRecordZone.ID;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithRecordName(recordName: string): this;
  static createWithRecordNameZoneID(recordName: string, zoneID: CKRecordZone.ID): this;
}

interface CKRecordKeyValueSetting extends NSObjectProtocol {
  allKeys(): NSArray<string>;
  changedKeys(): NSArray<string>;
  objectForKey(forKey: string): CKRecordValue;
  setObjectForKey(_?: CKRecordValue, forKey: string): void;
}

declare var CKRecordKeyValueSetting: {
  prototype: CKRecordKeyValueSetting;
};

declare var CKRecordParentKey: string;

declare var CKRecordShareKey: string;

declare var CKRecordTypeShare: string;

declare var CKRecordTypeUserRecord: string;

interface CKRecordValue extends NSObjectProtocol {
}

declare var CKRecordValue: {
  prototype: CKRecordValue;
};

declare class CKRecordZone extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKRecordZone; // inherited from NSObject
  static defaultRecordZone(): CKRecordZone;
  readonly capabilities: CKRecordZone.Capabilities;
  readonly zoneID: CKRecordZone.ID;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithZoneID(zoneID: CKRecordZone.ID): this;
  static createWithZoneName(zoneName: string): this;
}

declare var CKRecordZoneDefaultName: string;

declare class CKRecordZoneID extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKRecordZoneID; // inherited from NSObject
  readonly ownerName: string;
  readonly zoneName: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithZoneNameOwnerName(zoneName: string, ownerName: string): this;
}

declare class CKRecordZoneNotification extends CKNotification {
  static allocWithZone(with_: any): CKRecordZoneNotification; // inherited from NSObject
  readonly databaseScope: CKDatabase.Scope;
  readonly recordZoneID: CKRecordZone.ID;
}

declare class CKRecordZoneSubscription extends CKSubscription implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKRecordZoneSubscription; // inherited from NSObject
  recordType: string;
  setRecordType(_: string)
  readonly zoneID: CKRecordZone.ID;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithZoneID(zoneID: CKRecordZone.ID): this;
  static createWithZoneIDSubscriptionID(zoneID: CKRecordZone.ID, subscriptionID: string): this;
}

declare class CKReference extends NSObject implements NSCopying, NSSecureCoding, CKRecordValue {
  static allocWithZone(with_: any): CKReference; // inherited from NSObject
  readonly recordID: CKRecord.ID;
  readonly referenceAction: CKRecord_Reference_Action;
  readonly debugDescription: string; // inherited from NSObjectProtocol
  readonly description: string; // inherited from NSObjectProtocol
  readonly hash: number; // inherited from NSObjectProtocol
  readonly isProxy: boolean; // inherited from NSObjectProtocol
  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  conformsToProtocol(to: any /* Protocol */): boolean;
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithRecordAction(record: CKRecord, action: CKRecord_Reference_Action): this;
  static createWithRecordIDAction(recordID: CKRecord.ID, action: CKRecord_Reference_Action): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class CKServerChangeToken extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKServerChangeToken; // inherited from NSObject
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CKShare extends CKRecord implements NSSecureCoding {
  static allocWithZone(with_: any): CKShare; // inherited from NSObject
  readonly URL: URL;
  readonly currentUserParticipant: CKShare.Participant;
  readonly owner: CKShare.Participant;
  readonly participants: NSArray<CKShare.Participant>;
  publicPermission: CKShare_Participant_Permission;
  setPublicPermission(_: CKShare_Participant_Permission)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  addParticipant(_: CKShare.Participant): void;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithRootRecord(rootRecord: CKRecord): this;
  static createWithRootRecordShareID(rootRecord: CKRecord, shareID: CKRecord.ID): this;
  removeParticipant(_: CKShare.Participant): void;
}

declare class CKShareMetadata extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKShareMetadata; // inherited from NSObject
  readonly containerIdentifier: string;
  readonly ownerIdentity: CKUserIdentity;
  readonly participantPermission: CKShare_Participant_Permission;
  readonly participantRole: CKShare_Participant_Role;
  readonly participantStatus: CKShare_Participant_AcceptanceStatus;
  readonly rootRecord: CKRecord;
  readonly rootRecordID: CKRecord.ID;
  readonly share: CKShare;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CKShareParticipant extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKShareParticipant; // inherited from NSObject
  readonly acceptanceStatus: CKShare_Participant_AcceptanceStatus;
  permission: CKShare_Participant_Permission;
  setPermission(_: CKShare_Participant_Permission)
  role: CKShare_Participant_Role;
  setRole(_: CKShare_Participant_Role)
  readonly userIdentity: CKUserIdentity;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var CKShareThumbnailImageDataKey: string;

declare var CKShareTitleKey: string;

declare var CKShareTypeKey: string;

declare class CKSubscription extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKSubscription; // inherited from NSObject
  notificationInfo: CKSubscription.NotificationInfo;
  setNotificationInfo(_: CKSubscription.NotificationInfo)
  readonly subscriptionID: string;
  readonly subscriptionType: CKSubscription.SubscriptionType;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CKUserIdentity extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKUserIdentity; // inherited from NSObject
  readonly contactIdentifiers: NSArray<string>;
  readonly hasiCloudAccount: boolean;
  readonly lookupInfo: CKUserIdentity.LookupInfo;
  readonly nameComponents: NSPersonNameComponents;
  readonly userRecordID: CKRecord.ID;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CKUserIdentityLookupInfo extends NSObject implements NSCopying, NSSecureCoding {
  static allocWithZone(with_: any): CKUserIdentityLookupInfo; // inherited from NSObject
  static lookupInfosWithEmails(_: NSArray<string>): NSArray<CKUserIdentity.LookupInfo>;
  static lookupInfosWithPhoneNumbers(_: NSArray<string>): NSArray<CKUserIdentity.LookupInfo>;
  static lookupInfosWithRecordIDs(_: NSArray<CKRecord.ID>): NSArray<CKUserIdentity.LookupInfo>;
  readonly emailAddress: string;
  readonly phoneNumber: string;
  readonly userRecordID: CKRecord.ID;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithEmailAddress(emailAddress: string): this;
  static createWithPhoneNumber(phoneNumber: string): this;
  static createWithUserRecordID(userRecordID: CKRecord.ID): this;
}

enum CKAccountStatus {
    CouldNotDetermine = 0,
    Available = 1,
    Restricted = 2,
    NoAccount = 3
}

enum CKContainer_Application_PermissionStatus {
    InitialState = 0,
    CouldNotComplete = 1,
    Denied = 2,
    Granted = 3
}

enum CKContainer_Application_Permissions {
    UserDiscoverability = 1
}

module CKDatabase {
  enum Scope {
    Public = 1,
    Private = 2,
    Shared = 3
  }
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

module CKModifyRecordsOperation {
  enum RecordSavePolicy {
    IfServerRecordUnchanged = 0,
    ChangedKeys = 1,
    AllKeys = 2
  }
}

module CKNotification {
  enum NotificationType {
    Query = 1,
    RecordZone = 2,
    ReadNotification = 3,
    Database = 4
  }
}

module CKOperationGroup {
  enum TransferSize {
    Unknown = 0,
    Kilobytes = 1,
    Megabytes = 2,
    TensOfMegabytes = 3,
    HundredsOfMegabytes = 4,
    Gigabytes = 5,
    TensOfGigabytes = 6,
    HundredsOfGigabytes = 7
  }
}

module CKQueryNotification {
  enum Reason {
    RecordCreated = 1,
    RecordUpdated = 2,
    RecordDeleted = 3
  }
}

module CKQuerySubscription {
  enum Options {
    FiresOnRecordCreation = 1,
    FiresOnRecordUpdate = 2,
    FiresOnRecordDeletion = 4,
    FiresOnce = 8
  }
}

module CKRecordZone {
  enum Capabilities {
    CapabilityFetchChanges = 1,
    CapabilityAtomic = 2,
    CapabilitySharing = 4
  }
}

enum CKRecord_Reference_Action {
    None = 0,
    DeleteSelf = 1
}

enum CKShare_Participant_AcceptanceStatus {
    Unknown = 0,
    Pending = 1,
    Accepted = 2,
    Removed = 3
}

enum CKShare_Participant_Permission {
    Unknown = 0,
    None = 1,
    ReadOnly = 2,
    ReadWrite = 3
}

enum CKShare_Participant_Role {
    Unknown = 0,
    Owner = 1,
    PrivateUser = 3,
    PublicUser = 4
}

module CKSubscription {
  enum SubscriptionType {
    Query = 1,
    RecordZone = 2,
    Database = 3
  }
}

