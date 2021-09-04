
declare function CFHTTPAuthenticationAppliesToRequest(auth: any, request: any): boolean;

declare function CFHTTPAuthenticationCopyDomains(auth: any): NSArray<any>;

declare function CFHTTPAuthenticationCopyMethod(auth: any): string;

declare function CFHTTPAuthenticationCopyRealm(auth: any): string;

declare function CFHTTPAuthenticationCreateFromResponse(alloc: any, response: any): any;

declare function CFHTTPAuthenticationGetTypeID(): number;

declare function CFHTTPAuthenticationIsValid(auth: any, error: CFStreamError): boolean;

declare function CFHTTPAuthenticationRequiresAccountDomain(auth: any): boolean;

declare function CFHTTPAuthenticationRequiresOrderedRequests(auth: any): boolean;

declare function CFHTTPAuthenticationRequiresUserNameAndPassword(auth: any): boolean;

declare function CFHTTPMessageAddAuthentication(request: any, authenticationFailureResponse: any, username: string, password: string, authenticationScheme: string, forProxy: boolean): boolean;

declare function CFHTTPMessageAppendBytes(message: any, newBytes: string | any, numBytes: number): boolean;

declare function CFHTTPMessageApplyCredentialDictionary(request: any, auth: any, dict: NSDictionary<any, any>, error: CFStreamError): boolean;

declare function CFHTTPMessageApplyCredentials(request: any, auth: any, username: string, password: string, error: CFStreamError): boolean;

declare function CFHTTPMessageCopyAllHeaderFields(message: any): NSDictionary<any, any>;

declare function CFHTTPMessageCopyBody(message: any): NSData;

declare function CFHTTPMessageCopyHeaderFieldValue(message: any, headerField: string): string;

declare function CFHTTPMessageCopyRequestMethod(request: any): string;

declare function CFHTTPMessageCopyRequestURL(request: any): NSURL;

declare function CFHTTPMessageCopyResponseStatusLine(response: any): string;

declare function CFHTTPMessageCopySerializedMessage(message: any): NSData;

declare function CFHTTPMessageCopyVersion(message: any): string;

declare function CFHTTPMessageCreateCopy(alloc: any, message: any): any;

declare function CFHTTPMessageCreateEmpty(alloc: any, isRequest: boolean): any;

declare function CFHTTPMessageCreateRequest(alloc: any, requestMethod: string, url: NSURL, httpVersion: string): any;

declare function CFHTTPMessageCreateResponse(alloc: any, statusCode: number, statusDescription: string, httpVersion: string): any;

declare function CFHTTPMessageGetResponseStatusCode(response: any): number;

declare function CFHTTPMessageGetTypeID(): number;

declare function CFHTTPMessageIsHeaderComplete(message: any): boolean;

declare function CFHTTPMessageIsRequest(message: any): boolean;

declare function CFHTTPMessageSetBody(message: any, bodyData: NSData): void;

declare function CFHTTPMessageSetHeaderFieldValue(message: any, headerField: string, value: string): void;

declare function CFHostCancelInfoResolution(theHost: any, info: CFHostInfoType): void;

interface CFHostClientContext {
	version: number;
	info: any;
	retain: (p1: any) => any;
	release: (p1: any) => void;
	copyDescription: (p1: any) => string;
}
declare var CFHostClientContext: CFHostClientContext;

declare function CFHostCreateCopy(alloc: any, host: any): any;

declare function CFHostCreateWithAddress(allocator: any, addr: NSData): any;

declare function CFHostCreateWithName(allocator: any, hostname: string): any;

declare function CFHostGetAddressing(theHost: any, hasBeenResolved: string | any): NSArray<any>;

declare function CFHostGetNames(theHost: any, hasBeenResolved: string | any): NSArray<any>;

declare function CFHostGetReachability(theHost: any, hasBeenResolved: string | any): NSData;

declare function CFHostGetTypeID(): number;

enum CFHostInfoType {

	kCFHostAddresses = 0,

	kCFHostNames = 1,

	kCFHostReachability = 2
}


declare function CFHostScheduleWithRunLoop(theHost: any, runLoop: any, runLoopMode: string): void;

declare function CFHostSetClient(theHost: any, clientCB: (p1: any, p2: CFHostInfoType, p3: CFStreamError, p4: any) => void, clientContext: CFHostClientContext): boolean;

declare function CFHostStartInfoResolution(theHost: any, info: CFHostInfoType, error: CFStreamError): boolean;

declare function CFHostUnscheduleFromRunLoop(theHost: any, runLoop: any, runLoopMode: string): void;

declare function CFNetServiceBrowserCreate(alloc: any, clientCB: (p1: any, p2: number, p3: any, p4: CFStreamError, p5: any) => void, clientContext: CFNetServiceClientContext): any;

enum CFNetServiceBrowserFlags {

	kCFNetServiceFlagMoreComing = 1,

	kCFNetServiceFlagIsDomain = 2,

	kCFNetServiceFlagIsDefault = 4,

	kCFNetServiceFlagIsRegistrationDomain = 4,

	kCFNetServiceFlagRemove = 8
}


declare function CFNetServiceBrowserGetTypeID(): number;

declare function CFNetServiceBrowserInvalidate(browser: any): void;

declare function CFNetServiceBrowserScheduleWithRunLoop(browser: any, runLoop: any, runLoopMode: string): void;

declare function CFNetServiceBrowserSearchForDomains(browser: any, registrationDomains: boolean, error: CFStreamError): boolean;

declare function CFNetServiceBrowserSearchForServices(browser: any, domain: string, serviceType: string, error: CFStreamError): boolean;

declare function CFNetServiceBrowserStopSearch(browser: any, error: CFStreamError): void;

declare function CFNetServiceBrowserUnscheduleFromRunLoop(browser: any, runLoop: any, runLoopMode: string): void;

declare function CFNetServiceCancel(theService: any): void;

interface CFNetServiceClientContext {
	version: number;
	info: any;
	retain: (p1: any) => any;
	release: (p1: any) => void;
	copyDescription: (p1: any) => string;
}
declare var CFNetServiceClientContext: CFNetServiceClientContext;

declare function CFNetServiceCreate(alloc: any, domain: string, serviceType: string, name: string, port: number): any;

declare function CFNetServiceCreateCopy(alloc: any, service: any): any;

declare function CFNetServiceCreateDictionaryWithTXTData(alloc: any, txtRecord: NSData): NSDictionary<any, any>;

declare function CFNetServiceCreateTXTDataWithDictionary(alloc: any, keyValuePairs: NSDictionary<any, any>): NSData;

declare function CFNetServiceGetAddressing(theService: any): NSArray<any>;

declare function CFNetServiceGetDomain(theService: any): string;

declare function CFNetServiceGetName(theService: any): string;

declare function CFNetServiceGetPortNumber(theService: any): number;

declare function CFNetServiceGetTXTData(theService: any): NSData;

declare function CFNetServiceGetTargetHost(theService: any): string;

declare function CFNetServiceGetType(theService: any): string;

declare function CFNetServiceGetTypeID(): number;

declare function CFNetServiceMonitorCreate(alloc: any, theService: any, clientCB: (p1: any, p2: any, p3: CFNetServiceMonitorType, p4: NSData, p5: CFStreamError, p6: any) => void, clientContext: CFNetServiceClientContext): any;

declare function CFNetServiceMonitorGetTypeID(): number;

declare function CFNetServiceMonitorInvalidate(monitor: any): void;

declare function CFNetServiceMonitorScheduleWithRunLoop(monitor: any, runLoop: any, runLoopMode: string): void;

declare function CFNetServiceMonitorStart(monitor: any, recordType: CFNetServiceMonitorType, error: CFStreamError): boolean;

declare function CFNetServiceMonitorStop(monitor: any, error: CFStreamError): void;

enum CFNetServiceMonitorType {

	kCFNetServiceMonitorTXT = 1
}


declare function CFNetServiceMonitorUnscheduleFromRunLoop(monitor: any, runLoop: any, runLoopMode: string): void;

enum CFNetServiceRegisterFlags {

	kCFNetServiceFlagNoAutoRename = 1
}


declare function CFNetServiceRegisterWithOptions(theService: any, options: number, error: CFStreamError): boolean;

declare function CFNetServiceResolveWithTimeout(theService: any, timeout: number, error: CFStreamError): boolean;

declare function CFNetServiceScheduleWithRunLoop(theService: any, runLoop: any, runLoopMode: string): void;

declare function CFNetServiceSetClient(theService: any, clientCB: (p1: any, p2: CFStreamError, p3: any) => void, clientContext: CFNetServiceClientContext): boolean;

declare function CFNetServiceSetTXTData(theService: any, txtRecord: NSData): boolean;

declare function CFNetServiceUnscheduleFromRunLoop(theService: any, runLoop: any, runLoopMode: string): void;

enum CFNetServicesError {

	kCFNetServicesErrorUnknown = -72000,

	kCFNetServicesErrorCollision = -72001,

	kCFNetServicesErrorNotFound = -72002,

	kCFNetServicesErrorInProgress = -72003,

	kCFNetServicesErrorBadArgument = -72004,

	kCFNetServicesErrorCancel = -72005,

	kCFNetServicesErrorInvalid = -72006,

	kCFNetServicesErrorTimeout = -72007
}


declare function CFNetworkCopyProxiesForAutoConfigurationScript(proxyAutoConfigurationScript: string, targetURL: NSURL, error: NSError): NSArray<any>;

declare function CFNetworkCopyProxiesForURL(url: NSURL, proxySettings: NSDictionary<any, any>): NSArray<any>;

declare function CFNetworkCopySystemProxySettings(): NSDictionary<any, any>;

enum CFNetworkErrors {

	kCFHostErrorHostNotFound = 1,

	kCFHostErrorUnknown = 2,

	kCFSOCKSErrorUnknownClientVersion = 100,

	kCFSOCKSErrorUnsupportedServerVersion = 101,

	kCFSOCKS4ErrorRequestFailed = 110,

	kCFSOCKS4ErrorIdentdFailed = 111,

	kCFSOCKS4ErrorIdConflict = 112,

	kCFSOCKS4ErrorUnknownStatusCode = 113,

	kCFSOCKS5ErrorBadState = 120,

	kCFSOCKS5ErrorBadResponseAddr = 121,

	kCFSOCKS5ErrorBadCredentials = 122,

	kCFSOCKS5ErrorUnsupportedNegotiationMethod = 123,

	kCFSOCKS5ErrorNoAcceptableMethod = 124,

	kCFFTPErrorUnexpectedStatusCode = 200,

	kCFErrorHTTPAuthenticationTypeUnsupported = 300,

	kCFErrorHTTPBadCredentials = 301,

	kCFErrorHTTPConnectionLost = 302,

	kCFErrorHTTPParseFailure = 303,

	kCFErrorHTTPRedirectionLoopDetected = 304,

	kCFErrorHTTPBadURL = 305,

	kCFErrorHTTPProxyConnectionFailure = 306,

	kCFErrorHTTPBadProxyCredentials = 307,

	kCFErrorPACFileError = 308,

	kCFErrorPACFileAuth = 309,

	kCFErrorHTTPSProxyConnectionFailure = 310,

	kCFStreamErrorHTTPSProxyFailureUnexpectedResponseToCONNECTMethod = 311,

	kCFURLErrorBackgroundSessionInUseByAnotherProcess = -996,

	kCFURLErrorBackgroundSessionWasDisconnected = -997,

	kCFURLErrorUnknown = -998,

	kCFURLErrorCancelled = -999,

	kCFURLErrorBadURL = -1000,

	kCFURLErrorTimedOut = -1001,

	kCFURLErrorUnsupportedURL = -1002,

	kCFURLErrorCannotFindHost = -1003,

	kCFURLErrorCannotConnectToHost = -1004,

	kCFURLErrorNetworkConnectionLost = -1005,

	kCFURLErrorDNSLookupFailed = -1006,

	kCFURLErrorHTTPTooManyRedirects = -1007,

	kCFURLErrorResourceUnavailable = -1008,

	kCFURLErrorNotConnectedToInternet = -1009,

	kCFURLErrorRedirectToNonExistentLocation = -1010,

	kCFURLErrorBadServerResponse = -1011,

	kCFURLErrorUserCancelledAuthentication = -1012,

	kCFURLErrorUserAuthenticationRequired = -1013,

	kCFURLErrorZeroByteResource = -1014,

	kCFURLErrorCannotDecodeRawData = -1015,

	kCFURLErrorCannotDecodeContentData = -1016,

	kCFURLErrorCannotParseResponse = -1017,

	kCFURLErrorInternationalRoamingOff = -1018,

	kCFURLErrorCallIsActive = -1019,

	kCFURLErrorDataNotAllowed = -1020,

	kCFURLErrorRequestBodyStreamExhausted = -1021,

	kCFURLErrorAppTransportSecurityRequiresSecureConnection = -1022,

	kCFURLErrorFileDoesNotExist = -1100,

	kCFURLErrorFileIsDirectory = -1101,

	kCFURLErrorNoPermissionsToReadFile = -1102,

	kCFURLErrorDataLengthExceedsMaximum = -1103,

	kCFURLErrorFileOutsideSafeArea = -1104,

	kCFURLErrorSecureConnectionFailed = -1200,

	kCFURLErrorServerCertificateHasBadDate = -1201,

	kCFURLErrorServerCertificateUntrusted = -1202,

	kCFURLErrorServerCertificateHasUnknownRoot = -1203,

	kCFURLErrorServerCertificateNotYetValid = -1204,

	kCFURLErrorClientCertificateRejected = -1205,

	kCFURLErrorClientCertificateRequired = -1206,

	kCFURLErrorCannotLoadFromNetwork = -2000,

	kCFURLErrorCannotCreateFile = -3000,

	kCFURLErrorCannotOpenFile = -3001,

	kCFURLErrorCannotCloseFile = -3002,

	kCFURLErrorCannotWriteToFile = -3003,

	kCFURLErrorCannotRemoveFile = -3004,

	kCFURLErrorCannotMoveFile = -3005,

	kCFURLErrorDownloadDecodingFailedMidStream = -3006,

	kCFURLErrorDownloadDecodingFailedToComplete = -3007,

	kCFHTTPCookieCannotParseCookieFile = -4000,

	kCFNetServiceErrorUnknown = -72000,

	kCFNetServiceErrorCollision = -72001,

	kCFNetServiceErrorNotFound = -72002,

	kCFNetServiceErrorInProgress = -72003,

	kCFNetServiceErrorBadArgument = -72004,

	kCFNetServiceErrorCancel = -72005,

	kCFNetServiceErrorInvalid = -72006,

	kCFNetServiceErrorTimeout = -72007,

	kCFNetServiceErrorDNSServiceFailure = -73000
}


declare function CFNetworkExecuteProxyAutoConfigurationScript(proxyAutoConfigurationScript: string, targetURL: NSURL, cb: (p1: any, p2: NSArray<any>, p3: NSError) => void, clientContext: CFStreamClientContext): any;

declare function CFNetworkExecuteProxyAutoConfigurationURL(proxyAutoConfigURL: NSURL, targetURL: NSURL, cb: (p1: any, p2: NSArray<any>, p3: NSError) => void, clientContext: CFStreamClientContext): any;

declare function CFStreamCreatePairWithSocketToCFHost(alloc: any, host: any, port: number, readStream: NSInputStream, writeStream: NSOutputStream): void;

declare function CFStreamCreatePairWithSocketToNetService(alloc: any, service: any, readStream: NSInputStream, writeStream: NSOutputStream): void;

enum CFStreamErrorHTTP {

	kCFStreamErrorHTTPParseFailure = -1,

	kCFStreamErrorHTTPRedirectionLoop = -2,

	kCFStreamErrorHTTPBadURL = -3
}


enum CFStreamErrorHTTPAuthentication {

	kCFStreamErrorHTTPAuthenticationTypeUnsupported = -1000,

	kCFStreamErrorHTTPAuthenticationBadUserName = -1001,

	kCFStreamErrorHTTPAuthenticationBadPassword = -1002
}


declare var kCFDNSServiceFailureKey: string;

declare var kCFErrorDomainCFNetwork: string;

declare var kCFErrorDomainWinSock: string;

declare var kCFFTPStatusCodeKey: string;

declare var kCFGetAddrInfoFailureKey: string;

declare var kCFHTTPAuthenticationAccountDomain: string;

declare var kCFHTTPAuthenticationPassword: string;

declare var kCFHTTPAuthenticationSchemeBasic: string;

declare var kCFHTTPAuthenticationSchemeDigest: string;

declare var kCFHTTPAuthenticationSchemeKerberos: string;

declare var kCFHTTPAuthenticationSchemeNTLM: string;

declare var kCFHTTPAuthenticationSchemeNegotiate: string;

declare var kCFHTTPAuthenticationSchemeNegotiate2: string;

declare var kCFHTTPAuthenticationSchemeXMobileMeAuthToken: string;

declare var kCFHTTPAuthenticationUsername: string;

declare var kCFHTTPVersion1_0: string;

declare var kCFHTTPVersion1_1: string;

declare var kCFHTTPVersion2_0: string;

declare var kCFNetworkProxiesExceptionsList: string;

declare var kCFNetworkProxiesExcludeSimpleHostnames: string;

declare var kCFNetworkProxiesFTPEnable: string;

declare var kCFNetworkProxiesFTPPassive: string;

declare var kCFNetworkProxiesFTPPort: string;

declare var kCFNetworkProxiesFTPProxy: string;

declare var kCFNetworkProxiesGopherEnable: string;

declare var kCFNetworkProxiesGopherPort: string;

declare var kCFNetworkProxiesGopherProxy: string;

declare var kCFNetworkProxiesHTTPEnable: string;

declare var kCFNetworkProxiesHTTPPort: string;

declare var kCFNetworkProxiesHTTPProxy: string;

declare var kCFNetworkProxiesHTTPSEnable: string;

declare var kCFNetworkProxiesHTTPSPort: string;

declare var kCFNetworkProxiesHTTPSProxy: string;

declare var kCFNetworkProxiesProxyAutoConfigEnable: string;

declare var kCFNetworkProxiesProxyAutoConfigJavaScript: string;

declare var kCFNetworkProxiesProxyAutoConfigURLString: string;

declare var kCFNetworkProxiesProxyAutoDiscoveryEnable: string;

declare var kCFNetworkProxiesRTSPEnable: string;

declare var kCFNetworkProxiesRTSPPort: string;

declare var kCFNetworkProxiesRTSPProxy: string;

declare var kCFNetworkProxiesSOCKSEnable: string;

declare var kCFNetworkProxiesSOCKSPort: string;

declare var kCFNetworkProxiesSOCKSProxy: string;

declare var kCFProxyAutoConfigurationHTTPResponseKey: string;

declare var kCFProxyAutoConfigurationJavaScriptKey: string;

declare var kCFProxyAutoConfigurationURLKey: string;

declare var kCFProxyHostNameKey: string;

declare var kCFProxyPasswordKey: string;

declare var kCFProxyPortNumberKey: string;

declare var kCFProxyTypeAutoConfigurationJavaScript: string;

declare var kCFProxyTypeAutoConfigurationURL: string;

declare var kCFProxyTypeFTP: string;

declare var kCFProxyTypeHTTP: string;

declare var kCFProxyTypeHTTPS: string;

declare var kCFProxyTypeKey: string;

declare var kCFProxyTypeNone: string;

declare var kCFProxyTypeSOCKS: string;

declare var kCFProxyUsernameKey: string;

declare var kCFSOCKSNegotiationMethodKey: string;

declare var kCFSOCKSStatusCodeKey: string;

declare var kCFSOCKSVersionKey: string;

declare var kCFStreamErrorDomainFTP: number;

declare var kCFStreamErrorDomainHTTP: number;

declare var kCFStreamErrorDomainMach: number;

declare var kCFStreamErrorDomainNetDB: number;

declare var kCFStreamErrorDomainNetServices: number;

declare var kCFStreamErrorDomainSystemConfiguration: number;

declare var kCFStreamErrorDomainWinSock: number;

declare const kCFStreamErrorSOCKS4IdConflict: number;

declare const kCFStreamErrorSOCKS4IdentdFailed: number;

declare const kCFStreamErrorSOCKS4RequestFailed: number;

declare const kCFStreamErrorSOCKS4SubDomainResponse: number;

declare const kCFStreamErrorSOCKS5BadResponseAddr: number;

declare const kCFStreamErrorSOCKS5BadState: number;

declare const kCFStreamErrorSOCKS5SubDomainMethod: number;

declare const kCFStreamErrorSOCKS5SubDomainResponse: number;

declare const kCFStreamErrorSOCKS5SubDomainUserPass: number;

declare const kCFStreamErrorSOCKSSubDomainNone: number;

declare const kCFStreamErrorSOCKSSubDomainVersionCode: number;

declare const kCFStreamErrorSOCKSUnknownClientVersion: number;

declare var kCFStreamNetworkServiceType: string;

declare var kCFStreamNetworkServiceTypeAVStreaming: string;

declare var kCFStreamNetworkServiceTypeBackground: string;

declare var kCFStreamNetworkServiceTypeCallSignaling: string;

declare var kCFStreamNetworkServiceTypeResponsiveAV: string;

declare var kCFStreamNetworkServiceTypeResponsiveData: string;

declare var kCFStreamNetworkServiceTypeVideo: string;

declare var kCFStreamNetworkServiceTypeVoice: string;

declare var kCFStreamPropertyAllowConstrainedNetworkAccess: string;

declare var kCFStreamPropertyAllowExpensiveNetworkAccess: string;

declare var kCFStreamPropertyConnectionIsCellular: string;

declare var kCFStreamPropertyConnectionIsExpensive: string;

declare var kCFStreamPropertyNoCellular: string;

declare var kCFStreamPropertyProxyLocalBypass: string;

declare var kCFStreamPropertySSLContext: string;

declare var kCFStreamPropertySSLPeerTrust: string;

declare var kCFStreamPropertySSLSettings: string;

declare var kCFStreamPropertySocketExtendedBackgroundIdleMode: string;

declare var kCFStreamPropertySocketRemoteHost: string;

declare var kCFStreamPropertySocketRemoteNetService: string;

declare var kCFStreamSSLCertificates: string;

declare var kCFStreamSSLIsServer: string;

declare var kCFStreamSSLLevel: string;

declare var kCFStreamSSLPeerName: string;

declare var kCFStreamSSLValidatesCertificateChain: string;

declare var kCFURLErrorFailingURLErrorKey: string;

declare var kCFURLErrorFailingURLStringErrorKey: string;

declare const kSOCKS5NoAcceptableMethod: number;
