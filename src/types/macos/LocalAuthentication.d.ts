
enum LAAccessControlOperation {

	CreateItem = 0,

	UseItem = 1,

	CreateKey = 2,

	UseKeySign = 3,

	UseKeyDecrypt = 4,

	UseKeyKeyExchange = 5
}


enum LABiometryType {

	TypeNone = 0,

	None = 0,

	TypeTouchID = 1,

	TypeFaceID = 2
}


declare class LAContext extends NSObject {

	readonly biometryType: LABiometryType;

	readonly evaluatedPolicyDomainState: NSData;

	setInteractionNotAllowed(_: boolean)

	interactionNotAllowed: boolean;

	setLocalizedCancelTitle(_: string)

	localizedCancelTitle: string;

	setLocalizedFallbackTitle(_: string)

	localizedFallbackTitle: string;

	setLocalizedReason(_: string)

	localizedReason: string;

	setTouchIDAuthenticationAllowableReuseDuration(_: number)

	touchIDAuthenticationAllowableReuseDuration: number;

	canEvaluatePolicyError(error: LAPolicy): boolean;

	evaluateAccessControlOperationLocalizedReasonReply(_: any, operation: LAAccessControlOperation, localizedReason: string, reply?: (p1: boolean, p2: NSError) => void): void;

	evaluatePolicyLocalizedReasonReply(_: LAPolicy, localizedReason: string, reply?: (p1: boolean, p2: NSError) => void): void;

	invalidate(): void;

	isCredentialSet(_: LACredentialType): boolean;

	setCredentialType(_?: NSData, type: LACredentialType): boolean;
}

enum LACredentialType {

	ApplicationPassword = 0,

	SmartCardPIN = -3
}


enum LAError {

	AuthenticationFailed = -1,

	UserCancel = -2,

	UserFallback = -3,

	SystemCancel = -4,

	PasscodeNotSet = -5,

	TouchIDNotAvailable = -6,

	TouchIDNotEnrolled = -7,

	TouchIDLockout = -8,

	AppCancel = -9,

	InvalidContext = -10,

	BiometryNotAvailable = -6,

	BiometryNotEnrolled = -7,

	BiometryLockout = -8,

	NotInteractive = -1004,

	WatchNotAvailable = -11
}


declare var LAErrorDomain: string;

enum LAPolicy {

	DeviceOwnerAuthenticationWithBiometrics = 1,

	DeviceOwnerAuthentication = 2,

	DeviceOwnerAuthenticationWithWatch = 3,

	DeviceOwnerAuthenticationWithBiometricsOrWatch = 4
}


declare var LATouchIDAuthenticationMaximumAllowableReuseDuration: number;
