
declare class ASAuthorization extends NSObject {

	readonly credential: ASAuthorizationCredential;

	readonly provider: ASAuthorizationProvider;
}

declare class ASAuthorizationAppleIDButton extends NSControl implements NSAccessibilityButton {

	static buttonWithTypeStyle(_: ASAuthorizationAppleIDButtonType, style: ASAuthorizationAppleIDButtonStyle): ASAuthorizationAppleIDButton;

	setCornerRadius(_: number)

	cornerRadius: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(authorizationButtonType: ASAuthorizationAppleIDButtonType, authorizationButtonStyle: ASAuthorizationAppleIDButtonStyle);

	accessibilityFrame(): CGRect;

	accessibilityIdentifier(): string;

	accessibilityLabel(): string;

	accessibilityParent(): any;

	accessibilityPerformPress(): boolean;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isAccessibilityFocused(): boolean;

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

enum ASAuthorizationAppleIDButtonStyle {

	White = 0,

	WhiteOutline = 1,

	Black = 2
}


enum ASAuthorizationAppleIDButtonType {

	SignIn = 0,

	Continue = 1,

	SignUp = 2,

	Default = 0
}


declare class ASAuthorizationAppleIDCredential extends NSObject implements ASAuthorizationCredential {

	readonly authorizationCode: NSData;

	readonly authorizedScopes: NSArray<string>;

	readonly email: string;

	readonly fullName: NSPersonNameComponents;

	readonly identityToken: NSData;

	readonly realUserStatus: ASUserDetectionStatus;

	readonly state: string;

	readonly user: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

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

declare class ASAuthorizationAppleIDProvider extends NSObject implements ASAuthorizationProvider {

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	createRequest(): ASAuthorizationAppleIDRequest;

	getCredentialStateForUserIDCompletion(_: string, completion?: (p1: ASAuthorizationAppleIDProviderCredentialState, p2: NSError) => void): void;

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

declare var ASAuthorizationAppleIDProviderCredentialRevokedNotification: string;

enum ASAuthorizationAppleIDProviderCredentialState {

	Revoked = 0,

	Authorized = 1,

	NotFound = 2,

	Transferred = 3
}


declare class ASAuthorizationAppleIDRequest extends ASAuthorizationOpenIDRequest {

	setUser(_: string)

	user: string;
}

declare class ASAuthorizationController extends NSObject {

	readonly authorizationRequests: NSArray<ASAuthorizationRequest>;

	setDelegate(_: ASAuthorizationControllerDelegate)

	delegate: ASAuthorizationControllerDelegate;

	setPresentationContextProvider(_: ASAuthorizationControllerPresentationContextProviding)

	presentationContextProvider: ASAuthorizationControllerPresentationContextProviding;

	static create(authorizationRequests: NSArray<ASAuthorizationRequest> | ASAuthorizationRequest[]);

	performRequests(): void;
}

interface ASAuthorizationControllerDelegate extends NSObjectProtocol {

	authorizationControllerDidCompleteWithAuthorization?(_: ASAuthorizationController, didCompleteWithAuthorization: ASAuthorization): void;

	authorizationControllerDidCompleteWithError?(_: ASAuthorizationController, didCompleteWithError: NSError): void;
}
declare var ASAuthorizationControllerDelegate: {

	prototype: ASAuthorizationControllerDelegate;
};

interface ASAuthorizationControllerPresentationContextProviding extends NSObjectProtocol {

	presentationAnchorForAuthorizationController(_: ASAuthorizationController): NSWindow;
}
declare var ASAuthorizationControllerPresentationContextProviding: {

	prototype: ASAuthorizationControllerPresentationContextProviding;
};

interface ASAuthorizationCredential extends NSCopying, NSObjectProtocol, NSSecureCoding {
}
declare var ASAuthorizationCredential: {

	prototype: ASAuthorizationCredential;
};

enum ASAuthorizationError {

	Unknown = 1000,

	Canceled = 1001,

	InvalidResponse = 1002,

	NotHandled = 1003,

	Failed = 1004
}


declare var ASAuthorizationErrorDomain: string;

declare class ASAuthorizationOpenIDRequest extends ASAuthorizationRequest {

	setNonce(_: string)

	nonce: string;

	setRequestedOperation(_: string)

	requestedOperation: string;

	setRequestedScopes(_: NSArray<string>)

	requestedScopes: NSArray<string>;

	setState(_: string)

	state: string;
}

declare var ASAuthorizationOperationImplicit: string;

declare var ASAuthorizationOperationLogin: string;

declare var ASAuthorizationOperationLogout: string;

declare var ASAuthorizationOperationRefresh: string;

declare class ASAuthorizationPasswordProvider extends NSObject implements ASAuthorizationProvider {

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	createRequest(): ASAuthorizationPasswordRequest;

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

declare class ASAuthorizationPasswordRequest extends ASAuthorizationRequest {
}

interface ASAuthorizationProvider extends NSObjectProtocol {
}
declare var ASAuthorizationProvider: {

	prototype: ASAuthorizationProvider;
};

declare class ASAuthorizationProviderExtensionAuthorizationRequest extends NSObject {

	readonly authorizationOptions: NSDictionary<any, any>;

	readonly callerBundleIdentifier: string;

	readonly extensionData: NSDictionary<any, any>;

	readonly httpBody: NSData;

	readonly httpHeaders: NSDictionary<string, string>;

	readonly realm: string;

	readonly requestedOperation: string;

	readonly url: NSURL;

	cancel(): void;

	complete(): void;

	completeWithError(_: NSError): void;

	completeWithHTTPAuthorizationHeaders(_: NSDictionary<string, string>): void;

	completeWithHTTPResponseHttpBody(_: NSHTTPURLResponse, httpBody?: NSData): void;

	doNotHandle(): void;

	presentAuthorizationViewControllerWithCompletion(_?: (p1: boolean, p2: NSError) => void): void;
}

interface ASAuthorizationProviderExtensionAuthorizationRequestHandler extends NSObjectProtocol {

	beginAuthorizationWithRequest(_: ASAuthorizationProviderExtensionAuthorizationRequest): void;

	cancelAuthorizationWithRequest?(_: ASAuthorizationProviderExtensionAuthorizationRequest): void;
}
declare var ASAuthorizationProviderExtensionAuthorizationRequestHandler: {

	prototype: ASAuthorizationProviderExtensionAuthorizationRequestHandler;
};

declare class ASAuthorizationRequest extends NSObject implements NSCopying, NSSecureCoding {

	readonly provider: ASAuthorizationProvider;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var ASAuthorizationScopeEmail: string;

declare var ASAuthorizationScopeFullName: string;

declare class ASAuthorizationSingleSignOnCredential extends NSObject implements ASAuthorizationCredential {

	readonly accessToken: NSData;

	readonly authenticatedResponse: NSHTTPURLResponse;

	readonly authorizedScopes: NSArray<string>;

	readonly identityToken: NSData;

	readonly state: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

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

declare class ASAuthorizationSingleSignOnProvider extends NSObject implements ASAuthorizationProvider {

	static authorizationProviderWithIdentityProviderURL(_: NSURL): ASAuthorizationSingleSignOnProvider;

	readonly canPerformAuthorization: boolean;

	readonly url: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	createRequest(): ASAuthorizationSingleSignOnRequest;

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

declare class ASAuthorizationSingleSignOnRequest extends ASAuthorizationOpenIDRequest {

	setAuthorizationOptions(_: NSArray<NSURLQueryItem>)

	authorizationOptions: NSArray<NSURLQueryItem>;
}

declare class ASPasswordCredential extends NSObject implements ASAuthorizationCredential {

	static credentialWithUserPassword(_: string, password: string): ASPasswordCredential;

	readonly password: string;

	readonly user: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(user: string, password: string);

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

enum ASUserDetectionStatus {

	Unsupported = 0,

	Unknown = 1,

	LikelyReal = 2
}


interface ASWebAuthenticationPresentationContextProviding extends NSObjectProtocol {

	presentationAnchorForWebAuthenticationSession(_: ASWebAuthenticationSession): NSWindow;
}
declare var ASWebAuthenticationPresentationContextProviding: {

	prototype: ASWebAuthenticationPresentationContextProviding;
};

declare class ASWebAuthenticationSession extends NSObject {

	readonly canStart: boolean;

	setPrefersEphemeralWebBrowserSession(_: boolean)

	prefersEphemeralWebBrowserSession: boolean;

	setPresentationContextProvider(_: ASWebAuthenticationPresentationContextProviding)

	presentationContextProvider: ASWebAuthenticationPresentationContextProviding;

	static create(URL: NSURL, callbackURLScheme: string, completionHandler: (p1: NSURL, p2: NSError) => void);

	cancel(): void;

	start(): boolean;
}

enum ASWebAuthenticationSessionErrorCode {

	CanceledLogin = 1,

	PresentationContextNotProvided = 2,

	PresentationContextInvalid = 3
}


declare var ASWebAuthenticationSessionErrorDomain: string;

declare class ASWebAuthenticationSessionRequest extends NSObject implements NSCopying, NSSecureCoding {

	readonly URL: NSURL;

	readonly UUID: NSUUID;

	readonly callbackURLScheme: string;

	setDelegate(_: ASWebAuthenticationSessionRequestDelegate)

	delegate: ASWebAuthenticationSessionRequestDelegate;

	readonly shouldUseEphemeralSession: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	cancelWithError(_: NSError): void;

	completeWithCallbackURL(_: NSURL): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

interface ASWebAuthenticationSessionRequestDelegate extends NSObjectProtocol {

	authenticationSessionRequestDidCancelWithError?(_: ASWebAuthenticationSessionRequest, didCancelWithError: NSError): void;

	authenticationSessionRequestDidCompleteWithCallbackURL?(_: ASWebAuthenticationSessionRequest, didCompleteWithCallbackURL: NSURL): void;
}
declare var ASWebAuthenticationSessionRequestDelegate: {

	prototype: ASWebAuthenticationSessionRequestDelegate;
};

interface ASWebAuthenticationSessionWebBrowserSessionHandling {

	beginHandlingWebAuthenticationSessionRequest(_: ASWebAuthenticationSessionRequest): void;

	cancelWebAuthenticationSessionRequest(_: ASWebAuthenticationSessionRequest): void;
}
declare var ASWebAuthenticationSessionWebBrowserSessionHandling: {

	prototype: ASWebAuthenticationSessionWebBrowserSessionHandling;
};

declare class ASWebAuthenticationSessionWebBrowserSessionManager extends NSObject {

	setSessionHandler(_: ASWebAuthenticationSessionWebBrowserSessionHandling)

	sessionHandler: ASWebAuthenticationSessionWebBrowserSessionHandling;

	readonly wasLaunchedByAuthenticationServices: boolean;

	static sharedManager(): ASWebAuthenticationSessionWebBrowserSessionManager;
}
