
declare class SKArcadeService extends NSObject {

	static arcadeSubscriptionStatusWithNonceResultHandler(_: number, resultHandler?: (p1: NSData, p2: number, p3: NSData, p4: number, p5: NSError) => void): void;

	static registerArcadeAppWithRandomFromLibRandomFromLibLengthResultHandler(_: NSData, randomFromLibLength: number, resultHandler?: (p1: NSData, p2: number, p3: NSData, p4: number, p5: NSError) => void): void;

	static repairArcadeApp(): void;
}

interface SKCloudServiceSetupViewControllerDelegate extends NSObjectProtocol {
}
declare var SKCloudServiceSetupViewControllerDelegate: {

	prototype: SKCloudServiceSetupViewControllerDelegate;
};

declare class SKDownload extends NSObject {

	static contentURLForProductID(_: string): NSURL;

	static deleteContentForProductID(_: string): void;

	readonly contentIdentifier: string;

	readonly contentURL: NSURL;

	readonly contentVersion: string;

	readonly error: NSError;

	readonly expectedContentLength: number;

	readonly progress: number;

	readonly state: SKDownloadState;

	readonly timeRemaining: number;

	readonly transaction: SKPaymentTransaction;
}

enum SKDownloadState {

	Waiting = 0,

	Active = 1,

	Paused = 2,

	Finished = 3,

	Failed = 4,

	Cancelled = 5
}


declare var SKDownloadTimeRemainingUnknown: number;

enum SKErrorCode {

	Unknown = 0,

	ClientInvalid = 1,

	PaymentCancelled = 2,

	PaymentInvalid = 3,

	PaymentNotAllowed = 4,

	StoreProductNotAvailable = 5,

	CloudServicePermissionDenied = 6,

	CloudServiceNetworkConnectionFailed = 7,

	CloudServiceRevoked = 8,

	PrivacyAcknowledgementRequired = 9,

	UnauthorizedRequestData = 10,

	InvalidOfferIdentifier = 11,

	InvalidSignature = 12,

	MissingOfferParams = 13,

	InvalidOfferPrice = 14
}


declare var SKErrorDomain: string;

declare class SKMutablePayment extends SKPayment {

	static paymentWithProduct(_: SKProduct): SKMutablePayment; // inherited from SKPayment

	setApplicationUsername(_: string)

	applicationUsername: string;

	setPaymentDiscount(_: SKPaymentDiscount)

	paymentDiscount: SKPaymentDiscount;

	setProductIdentifier(_: string)

	productIdentifier: string;

	setQuantity(_: number)

	quantity: number;

	setRequestData(_: NSData)

	requestData: NSData;

	setSimulatesAskToBuyInSandbox(_: boolean)

	simulatesAskToBuyInSandbox: boolean;
}

declare class SKPayment extends NSObject implements NSCopying, NSMutableCopying {

	static paymentWithProduct(_: SKProduct): SKPayment;

	readonly applicationUsername: string;

	readonly paymentDiscount: SKPaymentDiscount;

	readonly productIdentifier: string;

	readonly quantity: number;

	readonly requestData: NSData;

	readonly simulatesAskToBuyInSandbox: boolean;

	copyWithZone(_?: any): any;

	mutableCopyWithZone(_?: any): any;
}

declare class SKPaymentDiscount extends NSObject {

	readonly identifier: string;

	readonly keyIdentifier: string;

	readonly nonce: NSUUID;

	readonly signature: string;

	readonly timestamp: number;

	static create(identifier: string, keyIdentifier: string, nonce: NSUUID, signature: string, timestamp: number);
}

declare class SKPaymentQueue extends NSObject {

	static canMakePayments(): boolean;

	static defaultQueue(): SKPaymentQueue;

	setDelegate(_: SKPaymentQueueDelegate)

	delegate: SKPaymentQueueDelegate;

	readonly storefront: SKStorefront;

	readonly transactions: NSArray<SKPaymentTransaction>;

	addPayment(_: SKPayment): void;

	addTransactionObserver(_: SKPaymentTransactionObserver): void;

	cancelDownloads(_: NSArray<SKDownload>): void;

	finishTransaction(_: SKPaymentTransaction): void;

	pauseDownloads(_: NSArray<SKDownload>): void;

	removeTransactionObserver(_: SKPaymentTransactionObserver): void;

	restoreCompletedTransactions(): void;

	restoreCompletedTransactionsWithApplicationUsername(_?: string): void;

	resumeDownloads(_: NSArray<SKDownload>): void;

	startDownloads(_: NSArray<SKDownload>): void;
}

interface SKPaymentQueueDelegate extends NSObjectProtocol {

	paymentQueueShouldContinueTransactionInStorefront?(_: SKPaymentQueue, shouldContinueTransaction: SKPaymentTransaction, inStorefront: SKStorefront): boolean;
}
declare var SKPaymentQueueDelegate: {

	prototype: SKPaymentQueueDelegate;
};

declare class SKPaymentTransaction extends NSObject {

	readonly downloads: NSArray<SKDownload>;

	readonly error: NSError;

	readonly originalTransaction: SKPaymentTransaction;

	readonly payment: SKPayment;

	readonly transactionDate: Date;

	readonly transactionIdentifier: string;

	readonly transactionState: SKPaymentTransactionState;
}

interface SKPaymentTransactionObserver extends NSObjectProtocol {

	paymentQueueRemovedTransactions?(_: SKPaymentQueue, removedTransactions: NSArray<SKPaymentTransaction>): void;

	paymentQueueRestoreCompletedTransactionsFailedWithError?(_: SKPaymentQueue, restoreCompletedTransactionsFailedWithError: NSError): void;

	paymentQueueUpdatedDownloads?(_: SKPaymentQueue, updatedDownloads: NSArray<SKDownload>): void;

	paymentQueueUpdatedTransactions(_: SKPaymentQueue, updatedTransactions: NSArray<SKPaymentTransaction>): void;

	paymentQueueDidChangeStorefront?(_: SKPaymentQueue): void;

	paymentQueueRestoreCompletedTransactionsFinished?(_: SKPaymentQueue): void;
}
declare var SKPaymentTransactionObserver: {

	prototype: SKPaymentTransactionObserver;
};

enum SKPaymentTransactionState {

	Purchasing = 0,

	Purchased = 1,

	Failed = 2,

	Restored = 3,

	Deferred = 4
}


declare class SKProduct extends NSObject {

	readonly discounts: NSArray<SKProductDiscount>;

	readonly downloadContentLengths: NSArray<number>;

	readonly downloadContentVersion: string;

	readonly introductoryPrice: SKProductDiscount;

	readonly isDownloadable: boolean;

	readonly localizedDescription: string;

	readonly localizedTitle: string;

	readonly price: NSDecimalNumber;

	readonly priceLocale: NSLocale;

	readonly productIdentifier: string;

	readonly subscriptionGroupIdentifier: string;

	readonly subscriptionPeriod: SKProductSubscriptionPeriod;
}

declare class SKProductDiscount extends NSObject {

	readonly identifier: string;

	readonly numberOfPeriods: number;

	readonly paymentMode: SKProductDiscountPaymentMode;

	readonly price: NSDecimalNumber;

	readonly priceLocale: NSLocale;

	readonly subscriptionPeriod: SKProductSubscriptionPeriod;

	readonly type: SKProductDiscountType;
}

enum SKProductDiscountPaymentMode {

	PayAsYouGo = 0,

	PayUpFront = 1,

	FreeTrial = 2
}


enum SKProductDiscountType {

	Introductory = 0,

	Subscription = 1
}


enum SKProductPeriodUnit {

	Day = 0,

	Week = 1,

	Month = 2,

	Year = 3
}


declare class SKProductSubscriptionPeriod extends NSObject {

	readonly numberOfUnits: number;

	readonly unit: SKProductPeriodUnit;
}

declare class SKProductsRequest extends SKRequest {

	setDelegate(_: SKProductsRequestDelegate)

	delegate: SKProductsRequestDelegate;

	static create(productIdentifiers: NSSet<string>);
}

interface SKProductsRequestDelegate extends SKRequestDelegate {

	productsRequestDidReceiveResponse(_: SKProductsRequest, didReceiveResponse: SKProductsResponse): void;
}
declare var SKProductsRequestDelegate: {

	prototype: SKProductsRequestDelegate;
};

declare class SKProductsResponse extends NSObject {

	readonly invalidProductIdentifiers: NSArray<string>;

	readonly products: NSArray<SKProduct>;
}

declare var SKReceiptPropertyIsExpired: string;

declare var SKReceiptPropertyIsRevoked: string;

declare var SKReceiptPropertyIsVolumePurchase: string;

declare class SKReceiptRefreshRequest extends SKRequest {

	readonly receiptProperties: NSDictionary<string, any>;

	static create(receiptProperties: NSDictionary<string, any>);
}

declare class SKRequest extends NSObject {

	setDelegate(_: SKRequestDelegate)

	delegate: SKRequestDelegate;

	cancel(): void;

	start(): void;
}

interface SKRequestDelegate extends NSObjectProtocol {

	requestDidFailWithError?(_: SKRequest, didFailWithError: NSError): void;

	requestDidFinish?(_: SKRequest): void;
}
declare var SKRequestDelegate: {

	prototype: SKRequestDelegate;
};

interface SKStoreProductViewControllerDelegate extends NSObjectProtocol {
}
declare var SKStoreProductViewControllerDelegate: {

	prototype: SKStoreProductViewControllerDelegate;
};

declare class SKStoreReviewController extends NSObject {

	static requestReview(): void;
}

declare class SKStorefront extends NSObject {

	readonly countryCode: string;

	readonly identifier: string;
}

declare function SKTerminateForInvalidReceipt(): void;
