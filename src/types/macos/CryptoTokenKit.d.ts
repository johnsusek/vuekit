
declare class TKBERTLVRecord extends TKTLVRecord {

	static dataForTag(_: number): NSData;

	static recordFromData(_: NSData): TKBERTLVRecord; // inherited from TKTLVRecord

	static create(tag: number, records: NSArray<TKTLVRecord> | TKTLVRecord[]);

	static create(tag: number, value: NSData);
}

declare class TKCompactTLVRecord extends TKTLVRecord {

	static recordFromData(_: NSData): TKCompactTLVRecord; // inherited from TKTLVRecord

	static create(tag: number, value: NSData);
}

enum TKErrorCode {

	CodeNotImplemented = -1,

	CodeCommunicationError = -2,

	CodeCorruptedData = -3,

	CodeCanceledByUser = -4,

	CodeAuthenticationFailed = -5,

	CodeObjectNotFound = -6,

	CodeTokenNotFound = -7,

	CodeBadParameter = -8,

	CodeAuthenticationNeeded = -9,

	AuthenticationFailed = -5,

	ObjectNotFound = -6,

	TokenNotFound = -7
}


declare var TKErrorDomain: string;

declare class TKSimpleTLVRecord extends TKTLVRecord {

	static recordFromData(_: NSData): TKSimpleTLVRecord; // inherited from TKTLVRecord

	static create(tag: number, value: NSData);
}

declare class TKSmartCard extends NSObject {

	setAllowedProtocols(_: TKSmartCardProtocol)

	allowedProtocols: TKSmartCardProtocol;

	setCla(_: number)

	cla: number;

	setContext(_: any)

	context: any;

	readonly currentProtocol: TKSmartCardProtocol;

	setSensitive(_: boolean)

	sensitive: boolean;

	readonly slot: TKSmartCardSlot;

	setUseCommandChaining(_: boolean)

	useCommandChaining: boolean;

	setUseExtendedLength(_: boolean)

	useExtendedLength: boolean;

	readonly valid: boolean;

	beginSessionWithReply(_?: (p1: boolean, p2: NSError) => void): void;

	endSession(): void;

	inSessionWithErrorExecuteBlock(_?: NSError, executeBlock?: (p1: NSError) => boolean): boolean;

	sendInsP1P2DataLeReply(_: number, p1: number, p2: number, data?: NSData, le?: number, reply?: (p1: NSData, p2: number, p3: NSError) => void): void;

	sendInsP1P2DataLeSwError(p1: number, p2: number, data: number, le?: NSData, sw?: number, error: number): NSData;

	transmitRequestReply(_: NSData, reply?: (p1: NSData, p2: NSError) => void): void;

	userInteractionForSecurePINChangeWithPINFormatAPDUCurrentPINByteOffsetNewPINByteOffset(_: TKSmartCardPINFormat, apdu: NSData, currentPINByteOffset: number, newPINByteOffset: number): TKSmartCardUserInteractionForSecurePINChange;

	userInteractionForSecurePINVerificationWithPINFormatAPDUPINByteOffset(_: TKSmartCardPINFormat, apdu: NSData, pinByteOffset: number): TKSmartCardUserInteractionForSecurePINVerification;
}

declare class TKSmartCardATR extends NSObject {

	readonly bytes: NSData;

	readonly historicalBytes: NSData;

	readonly historicalRecords: NSArray<TKCompactTLVRecord>;

	readonly protocols: NSArray<number>;

	static create(bytes: NSData);

	static create(source: () => number);

	interfaceGroupAtIndex(_: number): TKSmartCardATRInterfaceGroup;

	interfaceGroupForProtocol(_: TKSmartCardProtocol): TKSmartCardATRInterfaceGroup;
}

declare class TKSmartCardATRInterfaceGroup extends NSObject {

	readonly TA: number;

	readonly TB: number;

	readonly TC: number;

	readonly protocol: number;
}

enum TKSmartCardPINCharset {

	Numeric = 0,

	Alphanumeric = 1,

	UpperAlphanumeric = 2
}


enum TKSmartCardPINCompletion {

	MaxLength = 1,

	Key = 2,

	Timeout = 4
}


enum TKSmartCardPINConfirmation {

	None = 0,

	New = 1,

	Current = 2
}


enum TKSmartCardPINEncoding {

	Binary = 0,

	ASCII = 1,

	BCD = 2
}


declare class TKSmartCardPINFormat extends NSObject {

	setPINBitOffset(_: number)

	PINBitOffset: number;

	setPINBlockByteLength(_: number)

	PINBlockByteLength: number;

	setPINJustification(_: TKSmartCardPINJustification)

	PINJustification: TKSmartCardPINJustification;

	setPINLengthBitOffset(_: number)

	PINLengthBitOffset: number;

	setPINLengthBitSize(_: number)

	PINLengthBitSize: number;

	setCharset(_: TKSmartCardPINCharset)

	charset: TKSmartCardPINCharset;

	setEncoding(_: TKSmartCardPINEncoding)

	encoding: TKSmartCardPINEncoding;

	setMaxPINLength(_: number)

	maxPINLength: number;

	setMinPINLength(_: number)

	minPINLength: number;
}

enum TKSmartCardPINJustification {

	Left = 0,

	Right = 1
}


enum TKSmartCardProtocol {

	None = 0,

	T0 = 1,

	T1 = 2,

	T15 = 32768,

	Any = 65535
}


declare class TKSmartCardSlot extends NSObject {

	readonly ATR: TKSmartCardATR;

	readonly maxInputLength: number;

	readonly maxOutputLength: number;

	readonly name: string;

	readonly state: TKSmartCardSlotState;

	makeSmartCard(): TKSmartCard;
}

declare class TKSmartCardSlotManager extends NSObject {

	readonly slotNames: NSArray<string>;

	static defaultManager(): TKSmartCardSlotManager;

	getSlotWithNameReply(withName: string, reply?: (p1: TKSmartCardSlot) => void): void;

	slotNamed(_: string): TKSmartCardSlot;
}

enum TKSmartCardSlotState {

	Missing = 0,

	Empty = 1,

	Probing = 2,

	MuteCard = 3,

	ValidCard = 4
}


declare class TKSmartCardToken extends TKToken {

	readonly AID: NSData;

	static create(smartCard: TKSmartCard, AID: NSData, instanceID: string, tokenDriver: TKSmartCardTokenDriver);
}

declare class TKSmartCardTokenDriver extends TKTokenDriver {
}

interface TKSmartCardTokenDriverDelegate extends TKTokenDriverDelegate {

	tokenDriverCreateTokenForSmartCardAIDError(createTokenForSmartCard: TKSmartCardTokenDriver, AID: TKSmartCard, error?: NSData): TKSmartCardToken;
}
declare var TKSmartCardTokenDriverDelegate: {

	prototype: TKSmartCardTokenDriverDelegate;
};

declare class TKSmartCardTokenSession extends TKTokenSession {

	readonly smartCard: TKSmartCard;
}

declare class TKSmartCardUserInteraction extends NSObject {

	setDelegate(_: TKSmartCardUserInteractionDelegate)

	delegate: TKSmartCardUserInteractionDelegate;

	setInitialTimeout(_: number)

	initialTimeout: number;

	setInteractionTimeout(_: number)

	interactionTimeout: number;

	cancel(): boolean;

	runWithReply(_?: (p1: boolean, p2: NSError) => void): void;
}

interface TKSmartCardUserInteractionDelegate {

	characterEnteredInUserInteraction?(_: TKSmartCardUserInteraction): void;

	correctionKeyPressedInUserInteraction?(_: TKSmartCardUserInteraction): void;

	invalidCharacterEnteredInUserInteraction?(_: TKSmartCardUserInteraction): void;

	newPINConfirmationRequestedInUserInteraction?(_: TKSmartCardUserInteraction): void;

	newPINRequestedInUserInteraction?(_: TKSmartCardUserInteraction): void;

	oldPINRequestedInUserInteraction?(_: TKSmartCardUserInteraction): void;

	validationKeyPressedInUserInteraction?(_: TKSmartCardUserInteraction): void;
}
declare var TKSmartCardUserInteractionDelegate: {

	prototype: TKSmartCardUserInteractionDelegate;
};

declare class TKSmartCardUserInteractionForPINOperation extends TKSmartCardUserInteraction {

	setPINCompletion(_: TKSmartCardPINCompletion)

	PINCompletion: TKSmartCardPINCompletion;

	setPINMessageIndices(_: NSArray<number>)

	PINMessageIndices: NSArray<number>;

	setLocale(_: NSLocale)

	locale: NSLocale;

	setResultData(_: NSData)

	resultData: NSData;

	setResultSW(_: number)

	resultSW: number;
}

declare class TKSmartCardUserInteractionForSecurePINChange extends TKSmartCardUserInteractionForPINOperation {

	setPINConfirmation(_: TKSmartCardPINConfirmation)

	PINConfirmation: TKSmartCardPINConfirmation;
}

declare class TKSmartCardUserInteractionForSecurePINVerification extends TKSmartCardUserInteractionForPINOperation {
}

declare class TKTLVRecord extends NSObject {

	static recordFromData(_: NSData): TKTLVRecord;

	static sequenceOfRecordsFromData(_: NSData): NSArray<TKTLVRecord>;

	readonly data: NSData;

	readonly tag: number;

	readonly value: NSData;
}

declare class TKToken extends NSObject {

	readonly configuration: TKTokenConfiguration;

	setDelegate(_: TKTokenDelegate)

	delegate: TKTokenDelegate;

	readonly keychainContents: TKTokenKeychainContents;

	readonly tokenDriver: TKTokenDriver;

	static create(tokenDriver: TKTokenDriver, instanceID: string);
}

declare class TKTokenAuthOperation extends NSObject implements NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	finishWithError(): boolean;
}

declare class TKTokenConfiguration extends NSObject {

	setConfigurationData(_: NSData)

	configurationData: NSData;

	readonly instanceID: string;

	setKeychainItems(_: NSArray<TKTokenKeychainItem>)

	keychainItems: NSArray<TKTokenKeychainItem>;

	certificateForObjectIDError(error: any): TKTokenKeychainCertificate;

	keyForObjectIDError(error: any): TKTokenKeychainKey;
}

interface TKTokenDelegate extends NSObjectProtocol {

	tokenCreateSessionWithError(createSessionWithError: TKToken): TKTokenSession;

	tokenTerminateSession?(_: TKToken, terminateSession: TKTokenSession): void;
}
declare var TKTokenDelegate: {

	prototype: TKTokenDelegate;
};

declare class TKTokenDriver extends NSObject {

	setDelegate(_: TKTokenDriverDelegate)

	delegate: TKTokenDriverDelegate;
}

declare class TKTokenDriverConfiguration extends NSObject {

	readonly classID: string;

	readonly tokenConfigurations: NSDictionary<string, TKTokenConfiguration>;

	static driverConfigurations(): NSDictionary<string, TKTokenDriverConfiguration>;

	addTokenConfigurationForTokenInstanceID(_: string): TKTokenConfiguration;

	removeTokenConfigurationForTokenInstanceID(_: string): void;
}

interface TKTokenDriverDelegate extends NSObjectProtocol {

	tokenDriverTerminateToken?(_: TKTokenDriver, terminateToken: TKToken): void;

	tokenDriverTokenForConfigurationError?(tokenForConfiguration: TKTokenDriver, error: TKTokenConfiguration): TKToken;
}
declare var TKTokenDriverDelegate: {

	prototype: TKTokenDriverDelegate;
};

declare class TKTokenKeyAlgorithm extends NSObject {

	isAlgorithm(_: any): boolean;

	supportsAlgorithm(_: any): boolean;
}

declare class TKTokenKeyExchangeParameters extends NSObject {

	readonly requestedSize: number;

	readonly sharedInfo: NSData;
}

declare class TKTokenKeychainCertificate extends TKTokenKeychainItem {

	readonly data: NSData;

	static create(certificate: any, objectID: any);
}

declare class TKTokenKeychainContents extends NSObject {

	readonly items: NSArray<TKTokenKeychainItem>;

	certificateForObjectIDError(error: any): TKTokenKeychainCertificate;

	fillWithItems(_: NSArray<TKTokenKeychainItem>): void;

	keyForObjectIDError(error: any): TKTokenKeychainKey;
}

declare class TKTokenKeychainItem extends NSObject {

	setConstraints(_: NSDictionary<number, any>)

	constraints: NSDictionary<number, any>;

	setLabel(_: string)

	label: string;

	readonly objectID: any;

	static create(objectID: any);
}

declare class TKTokenKeychainKey extends TKTokenKeychainItem {

	setApplicationTag(_: NSData)

	applicationTag: NSData;

	setCanDecrypt(_: boolean)

	canDecrypt: boolean;

	setCanPerformKeyExchange(_: boolean)

	canPerformKeyExchange: boolean;

	setCanSign(_: boolean)

	canSign: boolean;

	setKeySizeInBits(_: number)

	keySizeInBits: number;

	setKeyType(_: string)

	keyType: string;

	setPublicKeyData(_: NSData)

	publicKeyData: NSData;

	setPublicKeyHash(_: NSData)

	publicKeyHash: NSData;

	setSuitableForLogin(_: boolean)

	isSuitableForLogin: boolean;

	static create(certificate: any, objectID: any);
}

enum TKTokenOperation {

	None = 0,

	ReadData = 1,

	SignData = 2,

	DecryptData = 3,

	PerformKeyExchange = 4
}


declare class TKTokenPasswordAuthOperation extends TKTokenAuthOperation {

	setPassword(_: string)

	password: string;
}

declare class TKTokenSession extends NSObject {

	setDelegate(_: TKTokenSessionDelegate)

	delegate: TKTokenSessionDelegate;

	readonly token: TKToken;

	static create(token: TKToken);
}

interface TKTokenSessionDelegate extends NSObjectProtocol {

	tokenSessionBeginAuthForOperationConstraintError?(beginAuthForOperation: TKTokenSession, constraint: TKTokenOperation, error: any): TKTokenAuthOperation;

	tokenSessionDecryptDataUsingKeyAlgorithmError?(decryptData: TKTokenSession, usingKey: NSData, algorithm: any, error: TKTokenKeyAlgorithm): NSData;

	tokenSessionPerformKeyExchangeWithPublicKeyUsingKeyAlgorithm?(_: TKTokenSession, performKeyExchangeWithPublicKey: NSData, usingKey: any, algorithm: TKTokenKeyAlgorithm): NSData;

	tokenSessionSignDataUsingKeyAlgorithmError?(signData: TKTokenSession, usingKey: NSData, algorithm: any, error: TKTokenKeyAlgorithm): NSData;

	tokenSessionSupportsOperationUsingKeyAlgorithm?(_: TKTokenSession, supportsOperation: TKTokenOperation, usingKey: any, algorithm: TKTokenKeyAlgorithm): boolean;
}
declare var TKTokenSessionDelegate: {

	prototype: TKTokenSessionDelegate;
};

declare class TKTokenSmartCardPINAuthOperation extends TKTokenAuthOperation {

	setAPDUTemplate(_: NSData)

	APDUTemplate: NSData;

	setPIN(_: string)

	PIN: string;

	setPINByteOffset(_: number)

	PINByteOffset: number;

	setPINFormat(_: TKSmartCardPINFormat)

	PINFormat: TKSmartCardPINFormat;

	setSmartCard(_: TKSmartCard)

	smartCard: TKSmartCard;
}

declare class TKTokenWatcher extends NSObject {

	readonly tokenIDs: NSArray<string>;

	addRemovalHandlerForTokenID(_: (p1: string) => void, forTokenID: string): void;

	setInsertionHandler(_: (p1: string) => void): void;
}
