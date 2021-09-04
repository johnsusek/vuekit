
declare var NSSystemExtensionUsageDescriptionKey: string;

declare var OSBundleUsageDescriptionKey: string;

enum OSSystemExtensionErrorCode {

	Unknown = 1,

	MissingEntitlement = 2,

	UnsupportedParentBundleLocation = 3,

	ExtensionNotFound = 4,

	ExtensionMissingIdentifier = 5,

	DuplicateExtensionIdentifer = 6,

	UnknownExtensionCategory = 7,

	CodeSignatureInvalid = 8,

	ValidationFailed = 9,

	ForbiddenBySystemPolicy = 10,

	RequestCanceled = 11,

	RequestSuperseded = 12,

	AuthorizationRequired = 13
}


declare var OSSystemExtensionErrorDomain: string;

declare class OSSystemExtensionManager extends NSObject {

	static sharedManager(): OSSystemExtensionManager;

	new(): this;

	submitRequest(_: OSSystemExtensionRequest): void;
}

declare class OSSystemExtensionProperties extends NSObject {

	readonly URL: NSURL;

	readonly bundleIdentifier: string;

	readonly bundleShortVersion: string;

	readonly bundleVersion: string;
}

enum OSSystemExtensionReplacementAction {

	Cancel = 0,

	Replace = 1
}


declare class OSSystemExtensionRequest extends NSObject {

	static activationRequestForExtensionQueue(_: string, queue: NSObject): OSSystemExtensionRequest;

	static deactivationRequestForExtensionQueue(_: string, queue: NSObject): OSSystemExtensionRequest;

	setDelegate(_: OSSystemExtensionRequestDelegate)

	delegate: OSSystemExtensionRequestDelegate;

	readonly identifier: string;
}

interface OSSystemExtensionRequestDelegate extends NSObjectProtocol {

	requestActionForReplacingExtensionWithExtension(_: OSSystemExtensionRequest, actionForReplacingExtension: OSSystemExtensionProperties, withExtension: OSSystemExtensionProperties): OSSystemExtensionReplacementAction;

	requestDidFailWithError(_: OSSystemExtensionRequest, didFailWithError: NSError): void;

	requestDidFinishWithResult(_: OSSystemExtensionRequest, didFinishWithResult: OSSystemExtensionRequestResult): void;

	requestNeedsUserApproval(_: OSSystemExtensionRequest): void;
}
declare var OSSystemExtensionRequestDelegate: {

	prototype: OSSystemExtensionRequestDelegate;
};

enum OSSystemExtensionRequestResult {

	Completed = 0,

	WillCompleteAfterReboot = 1
}

