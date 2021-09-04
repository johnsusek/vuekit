
enum VSAccountAccessStatus {

	NotDetermined = 0,

	Restricted = 1,

	Denied = 2,

	Granted = 3
}


declare class VSAccountManager extends NSObject {

	setDelegate(_: VSAccountManagerDelegate)

	delegate: VSAccountManagerDelegate;
}

interface VSAccountManagerDelegate extends NSObjectProtocol {

	accountManagerShouldAuthenticateAccountProviderWithIdentifier?(_: VSAccountManager, shouldAuthenticateAccountProviderWithIdentifier: string): boolean;
}
declare var VSAccountManagerDelegate: {

	prototype: VSAccountManagerDelegate;
};

declare class VSAccountManagerResult extends NSObject {

	cancel(): void;
}

declare class VSAccountMetadata extends NSObject {

	readonly SAMLAttributeQueryResponse: string;

	readonly accountProviderIdentifier: string;

	readonly accountProviderResponse: VSAccountProviderResponse;

	readonly authenticationExpirationDate: Date;

	readonly verificationData: NSData;
}

declare class VSAccountMetadataRequest extends NSObject {

	setAccountProviderAuthenticationToken(_: string)

	accountProviderAuthenticationToken: string;

	setAttributeNames(_: NSArray<string>)

	attributeNames: NSArray<string>;

	setChannelIdentifier(_: string)

	channelIdentifier: string;

	setFeaturedAccountProviderIdentifiers(_: NSArray<string>)

	featuredAccountProviderIdentifiers: NSArray<string>;

	setForceAuthentication(_: boolean)

	forceAuthentication: boolean;

	setIncludeAccountProviderIdentifier(_: boolean)

	includeAccountProviderIdentifier: boolean;

	setIncludeAuthenticationExpirationDate(_: boolean)

	includeAuthenticationExpirationDate: boolean;

	setInterruptionAllowed(_: boolean)

	isInterruptionAllowed: boolean;

	setLocalizedVideoTitle(_: string)

	localizedVideoTitle: string;

	setSupportedAccountProviderIdentifiers(_: NSArray<string>)

	supportedAccountProviderIdentifiers: NSArray<string>;

	setSupportedAuthenticationSchemes(_: NSArray<string>)

	supportedAuthenticationSchemes: NSArray<string>;

	setVerificationToken(_: string)

	verificationToken: string;
}

declare var VSAccountProviderAuthenticationSchemeAPI: string;

declare var VSAccountProviderAuthenticationSchemeSAML: string;

declare class VSAccountProviderResponse extends NSObject {

	readonly authenticationScheme: string;

	readonly body: string;

	readonly status: string;
}

declare var VSCheckAccessOptionPrompt: string;

enum VSErrorCode {

	AccessNotGranted = 0,

	UnsupportedProvider = 1,

	UserCancelled = 2,

	ServiceTemporarilyUnavailable = 3,

	ProviderRejected = 4,

	InvalidVerificationToken = 5,

	Rejected = 6,

	Unsupported = 7
}


declare var VSErrorDomain: string;

declare var VSErrorInfoKeyAccountProviderResponse: string;

declare var VSErrorInfoKeySAMLResponse: string;

declare var VSErrorInfoKeySAMLResponseStatus: string;

declare var VSErrorInfoKeyUnsupportedProviderIdentifier: string;

declare class VSSubscription extends NSObject {

	setAccessLevel(_: VSSubscriptionAccessLevel)

	accessLevel: VSSubscriptionAccessLevel;

	setBillingIdentifier(_: string)

	billingIdentifier: string;

	setExpirationDate(_: Date)

	expirationDate: Date;

	setTierIdentifiers(_: NSArray<string>)

	tierIdentifiers: NSArray<string>;
}

enum VSSubscriptionAccessLevel {

	Unknown = 0,

	FreeWithAccount = 1,

	Paid = 2
}


declare class VSSubscriptionRegistrationCenter extends NSObject {

	static defaultSubscriptionRegistrationCenter(): VSSubscriptionRegistrationCenter;

	setCurrentSubscription(_?: VSSubscription): void;
}
