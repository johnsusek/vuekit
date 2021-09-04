
declare class ACAccount extends NSObject {

	setAccountDescription(_: string)

	accountDescription: string;

	setAccountType(_: ACAccountType)

	accountType: ACAccountType;

	setCredential(_: ACAccountCredential)

	credential: ACAccountCredential;

	readonly identifier: string;

	setUsername(_: string)

	username: string;

	static create(accountType: ACAccountType);
}

declare class ACAccountCredential extends NSObject {

	setOauthToken(_: string)

	oauthToken: string;

	static create(OAuth2Token: string, refreshToken: string, expiryDate: Date);

	static create(OAuthToken: string, tokenSecret: string);
}

enum ACAccountCredentialRenewResult {

	Renewed = 0,

	Rejected = 1,

	Failed = 2
}


declare class ACAccountStore extends NSObject {

	readonly accounts: NSArray<any>;

	accountTypeWithAccountTypeIdentifier(_: string): ACAccountType;

	accountWithIdentifier(_: string): ACAccount;

	accountsWithAccountType(_: ACAccountType): NSArray<any>;

	removeAccountWithCompletionHandler(_: ACAccount, withCompletionHandler: (p1: boolean, p2: NSError) => void): void;

	renewCredentialsForAccountCompletion(_: ACAccount, completion: (p1: ACAccountCredentialRenewResult, p2: NSError) => void): void;

	requestAccessToAccountsWithTypeOptionsCompletion(_: ACAccountType, options: NSDictionary<any, any>, completion: (p1: boolean, p2: NSError) => void): void;

	saveAccountWithCompletionHandler(_: ACAccount, withCompletionHandler: (p1: boolean, p2: NSError) => void): void;
}

declare var ACAccountStoreDidChangeNotification: string;

declare class ACAccountType extends NSObject {

	readonly accessGranted: boolean;

	readonly accountTypeDescription: string;

	readonly identifier: string;
}

enum ACErrorCode {

	Unknown = 1,

	AccountMissingRequiredProperty = 2,

	AccountAuthenticationFailed = 3,

	AccountTypeInvalid = 4,

	AccountAlreadyExists = 5,

	AccountNotFound = 6,

	PermissionDenied = 7,

	AccessInfoInvalid = 8,

	ClientPermissionDenied = 9,

	AccessDeniedByProtectionPolicy = 10,

	CredentialNotFound = 11,

	FetchCredentialFailed = 12,

	StoreCredentialFailed = 13,

	RemoveCredentialFailed = 14,

	UpdatingNonexistentAccount = 15,

	InvalidClientBundleID = 16,

	DeniedByPlugin = 17,

	CoreDataSaveFailed = 18,

	FailedSerializingAccountInfo = 19,

	InvalidCommand = 20,

	MissingTransportMessageID = 21,

	CredentialItemNotFound = 22,

	CredentialItemNotExpired = 23
}


declare var ACErrorDomain: string;
