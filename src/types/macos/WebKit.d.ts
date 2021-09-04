
declare const DOM_ADDITION: number;

declare const DOM_ALLOW_KEYBOARD_INPUT: number;

declare const DOM_ANY_TYPE: number;

declare const DOM_ANY_UNORDERED_NODE_TYPE: number;

declare const DOM_ATTRIBUTE_NODE: number;

declare const DOM_AT_TARGET: number;

declare const DOM_BOOLEAN_TYPE: number;

declare const DOM_BOTH: number;

declare const DOM_BUBBLING_PHASE: number;

declare const DOM_CAPTURING_PHASE: number;

declare const DOM_CDATA_SECTION_NODE: number;

declare const DOM_CHARSET_RULE: number;

declare const DOM_COMMENT_NODE: number;

declare const DOM_CSS_ATTR: number;

declare const DOM_CSS_CM: number;

declare const DOM_CSS_COUNTER: number;

declare const DOM_CSS_CUSTOM: number;

declare const DOM_CSS_DEG: number;

declare const DOM_CSS_DIMENSION: number;

declare const DOM_CSS_EMS: number;

declare const DOM_CSS_EXS: number;

declare const DOM_CSS_GRAD: number;

declare const DOM_CSS_HZ: number;

declare const DOM_CSS_IDENT: number;

declare const DOM_CSS_IN: number;

declare const DOM_CSS_INHERIT: number;

declare const DOM_CSS_KHZ: number;

declare const DOM_CSS_MM: number;

declare const DOM_CSS_MS: number;

declare const DOM_CSS_NUMBER: number;

declare const DOM_CSS_PC: number;

declare const DOM_CSS_PERCENTAGE: number;

declare const DOM_CSS_PRIMITIVE_VALUE: number;

declare const DOM_CSS_PT: number;

declare const DOM_CSS_PX: number;

declare const DOM_CSS_RAD: number;

declare const DOM_CSS_RECT: number;

declare const DOM_CSS_RGBCOLOR: number;

declare const DOM_CSS_S: number;

declare const DOM_CSS_STRING: number;

declare const DOM_CSS_UNKNOWN: number;

declare const DOM_CSS_URI: number;

declare const DOM_CSS_VALUE_LIST: number;

declare const DOM_CSS_VH: number;

declare const DOM_CSS_VMAX: number;

declare const DOM_CSS_VMIN: number;

declare const DOM_CSS_VW: number;

declare const DOM_DOCUMENT_FRAGMENT_NODE: number;

declare const DOM_DOCUMENT_NODE: number;

declare const DOM_DOCUMENT_POSITION_CONTAINED_BY: number;

declare const DOM_DOCUMENT_POSITION_CONTAINS: number;

declare const DOM_DOCUMENT_POSITION_DISCONNECTED: number;

declare const DOM_DOCUMENT_POSITION_FOLLOWING: number;

declare const DOM_DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;

declare const DOM_DOCUMENT_POSITION_PRECEDING: number;

declare const DOM_DOCUMENT_TYPE_NODE: number;

declare const DOM_DOM_DELTA_LINE: number;

declare const DOM_DOM_DELTA_PAGE: number;

declare const DOM_DOM_DELTA_PIXEL: number;

declare const DOM_ELEMENT_NODE: number;

declare const DOM_END_TO_END: number;

declare const DOM_END_TO_START: number;

declare const DOM_ENTITY_NODE: number;

declare const DOM_ENTITY_REFERENCE_NODE: number;

declare const DOM_FILTER_ACCEPT: number;

declare const DOM_FILTER_REJECT: number;

declare const DOM_FILTER_SKIP: number;

declare const DOM_FIRST_ORDERED_NODE_TYPE: number;

declare const DOM_FONT_FACE_RULE: number;

declare const DOM_HORIZONTAL: number;

declare const DOM_IMPORT_RULE: number;

declare const DOM_KEYFRAMES_RULE: number;

declare const DOM_KEYFRAME_RULE: number;

declare const DOM_KEY_LOCATION_LEFT: number;

declare const DOM_KEY_LOCATION_NUMPAD: number;

declare const DOM_KEY_LOCATION_RIGHT: number;

declare const DOM_KEY_LOCATION_STANDARD: number;

declare const DOM_MEDIA_RULE: number;

declare const DOM_MODIFICATION: number;

declare const DOM_NAMESPACE_RULE: number;

declare const DOM_NODE_AFTER: number;

declare const DOM_NODE_BEFORE: number;

declare const DOM_NODE_BEFORE_AND_AFTER: number;

declare const DOM_NODE_INSIDE: number;

declare const DOM_NONE: number;

declare const DOM_NOTATION_NODE: number;

declare const DOM_NUMBER_TYPE: number;

declare const DOM_ORDERED_NODE_ITERATOR_TYPE: number;

declare const DOM_ORDERED_NODE_SNAPSHOT_TYPE: number;

declare const DOM_PAGE_RULE: number;

declare const DOM_PROCESSING_INSTRUCTION_NODE: number;

declare const DOM_REMOVAL: number;

declare const DOM_SHOW_ALL: number;

declare const DOM_SHOW_ATTRIBUTE: number;

declare const DOM_SHOW_CDATA_SECTION: number;

declare const DOM_SHOW_COMMENT: number;

declare const DOM_SHOW_DOCUMENT: number;

declare const DOM_SHOW_DOCUMENT_FRAGMENT: number;

declare const DOM_SHOW_DOCUMENT_TYPE: number;

declare const DOM_SHOW_ELEMENT: number;

declare const DOM_SHOW_ENTITY: number;

declare const DOM_SHOW_ENTITY_REFERENCE: number;

declare const DOM_SHOW_NOTATION: number;

declare const DOM_SHOW_PROCESSING_INSTRUCTION: number;

declare const DOM_SHOW_TEXT: number;

declare const DOM_START_TO_END: number;

declare const DOM_START_TO_START: number;

declare const DOM_STRING_TYPE: number;

declare const DOM_STYLE_RULE: number;

declare const DOM_SUPPORTS_RULE: number;

declare const DOM_TEXT_NODE: number;

declare const DOM_UNKNOWN_RULE: number;

declare const DOM_UNORDERED_NODE_ITERATOR_TYPE: number;

declare const DOM_UNORDERED_NODE_SNAPSHOT_TYPE: number;

declare const DOM_VERTICAL: number;

declare const DOM_WEBKIT_KEYFRAMES_RULE: number;

declare const DOM_WEBKIT_KEYFRAME_RULE: number;

declare const DOM_WEBKIT_REGION_RULE: number;

interface NPByteRange {
	offset: number;
	length: number;
	next: NPByteRange;
}
declare var NPByteRange: NPByteRange;

enum NPCocoaEventType {

	DrawRect = 1,

	MouseDown = 2,

	MouseUp = 3,

	MouseMoved = 4,

	MouseEntered = 5,

	MouseExited = 6,

	MouseDragged = 7,

	KeyDown = 8,

	KeyUp = 9,

	FlagsChanged = 10,

	FocusChanged = 11,

	WindowFocusChanged = 12,

	ScrollWheel = 13,

	TextInput = 14
}


enum NPCoordinateSpace {

	Plugin = 1,

	Window = 2,

	FlippedWindow = 3,

	Screen = 4,

	FlippedScreen = 5
}


enum NPDrawingModel {

	CoreGraphics = 1,

	OpenGL = 2,

	CoreAnimation = 3
}


interface NPEmbedPrint {
	window: NPWindow;
	platformPrint: any;
}
declare var NPEmbedPrint: NPEmbedPrint;

enum NPEventModel {

	Cocoa = 1
}


enum NPFocusDirection {

	Next = 0,

	Previous = 1
}


interface NPFullPrint {
	pluginPrinted: number;
	printOne: number;
	platformPrint: any;
}
declare var NPFullPrint: NPFullPrint;

enum NPNToolkitType {

	VGtk12 = 1,

	VGtk2 = 2
}


enum NPNURLVariable {

	Cookie = 501,

	Proxy = 502
}


enum NPNVariable {

	VxDisplay = 1,

	VxtAppContext = 2,

	VnetscapeWindow = 3,

	VjavascriptEnabledBool = 4,

	VasdEnabledBool = 5,

	VisOfflineBool = 6,

	VserviceManager = 16777226,

	VDOMElement = 16777227,

	VDOMWindow = 16777228,

	VToolkit = 16777229,

	VSupportsXEmbedBool = 14,

	VWindowNPObject = 15,

	VPluginElementNPObject = 16,

	VSupportsWindowless = 17,

	VprivateModeBool = 18,

	VsupportsAdvancedKeyHandling = 21,

	VpluginDrawingModel = 1000,

	VcontentsScaleFactor = 1001,

	VsupportsCoreGraphicsBool = 2001,

	VsupportsOpenGLBool = 2002,

	VsupportsCoreAnimationBool = 2003,

	VsupportsCocoaBool = 3001,

	VsupportsUpdatedCocoaTextInputBool = 3002,

	VsupportsCompositingCoreAnimationPluginsBool = 74656,

	VmuteAudioBool = 4000
}


declare function NPN_ConvertPoint(instance: NPP_t, sourceX: number, sourceY: number, sourceSpace: NPCoordinateSpace, destX: number, destY: number, destSpace: NPCoordinateSpace): number;

declare function NPN_DestroyStream(instance: NPP_t, stream: NPStream, reason: number): number;

declare function NPN_ForceRedraw(instance: NPP_t): void;

declare function NPN_GetAuthenticationInfo(instance: NPP_t, protocol: string | any, host: string | any, port: number, scheme: string | any, realm: string | any, username: string, ulen: number, password: string, plen: number): number;

declare function NPN_GetIntIdentifier(intid: number): any;

declare function NPN_GetJavaEnv(): any;

declare function NPN_GetJavaPeer(instance: NPP_t): any;

declare function NPN_GetStringIdentifier(name: string | any): any;

declare function NPN_GetStringIdentifiers(names: string, nameCount: number, identifiers: any): void;

declare function NPN_GetURL(instance: NPP_t, url: string | any, target: string | any): number;

declare function NPN_GetURLNotify(instance: NPP_t, url: string | any, target: string | any, notifyData: any): number;

declare function NPN_GetValue(instance: NPP_t, variable: NPNVariable, value: any): number;

declare function NPN_GetValueForURL(instance: NPP_t, variable: NPNURLVariable, url: string | any, value: string, len: number): number;

declare function NPN_HandleEvent(instance: NPP_t, event: any, handled: number): number;

declare function NPN_IdentifierIsString(identifier: any): boolean;

declare function NPN_IntFromIdentifier(identifier: any): number;

declare function NPN_InvalidateRect(instance: NPP_t, invalidRect: NPRect): void;

declare function NPN_InvalidateRegion(instance: NPP_t, invalidRegion: any): void;

declare function NPN_MemAlloc(size: number): any;

declare function NPN_MemFlush(size: number): number;

declare function NPN_MemFree(ptr: any): void;

declare function NPN_NewStream(instance: NPP_t, type: string | any, target: string | any, stream: NPStream): number;

declare function NPN_PluginThreadAsyncCall(instance: NPP_t, func: (p1: any) => void, userData: any): void;

declare function NPN_PopPopupsEnabledState(instance: NPP_t): void;

declare function NPN_PopUpContextMenu(instance: NPP_t, menu: any): number;

declare function NPN_PostURL(instance: NPP_t, url: string | any, target: string | any, len: number, buf: string | any, file: number): number;

declare function NPN_PostURLNotify(instance: NPP_t, url: string | any, target: string | any, len: number, buf: string | any, file: number, notifyData: any): number;

declare function NPN_PushPopupsEnabledState(instance: NPP_t, enabled: number): void;

declare function NPN_ReloadPlugins(reloadPages: number): void;

declare function NPN_RequestRead(stream: NPStream, rangeList: NPByteRange): number;

declare function NPN_ScheduleTimer(instance: NPP_t, interval: number, repeat: number, timerFunc: (p1: NPP_t, p2: number) => void): number;

declare function NPN_SetValue(instance: NPP_t, variable: NPPVariable, value: any): number;

declare function NPN_SetValueForURL(instance: NPP_t, variable: NPNURLVariable, url: string | any, value: string | any, len: number): number;

declare function NPN_Status(instance: NPP_t, message: string | any): void;

declare function NPN_URLRedirectResponse(instance: NPP_t, notifyData: any, allow: number): void;

declare function NPN_UTF8FromIdentifier(identifier: any): string;

declare function NPN_UnfocusInstance(instance: NPP_t, direction: NPFocusDirection): number;

declare function NPN_UnscheduleTimer(instance: NPP_t, timerID: number): void;

declare function NPN_UserAgent(instance: NPP_t): string;

declare function NPN_Version(plugin_major: number, plugin_minor: number, netscape_major: number, netscape_minor: number): void;

declare function NPN_Write(instance: NPP_t, stream: NPStream, len: number, buffer: any): number;

enum NPPVariable {

	VpluginNameString = 1,

	VpluginDescriptionString = 2,

	VpluginWindowBool = 3,

	VpluginTransparentBool = 4,

	VjavaClass = 5,

	VpluginWindowSize = 6,

	VpluginTimerInterval = 7,

	VpluginScriptableInstance = 16777226,

	VpluginScriptableIID = 11,

	VjavascriptPushCallerBool = 12,

	VpluginKeepLibraryInMemory = 13,

	VpluginNeedsXEmbed = 14,

	VpluginScriptableNPObject = 15,

	VformValue = 16,

	VpluginUrlRequestsDisplayedBool = 17,

	VpluginWantsAllNetworkStreams = 18,

	VpluginNativeAccessibleAtkPlugId = 19,

	VpluginCancelSrcStream = 20,

	VpluginDrawingModel = 1000,

	VpluginEventModel = 1001,

	VpluginCoreAnimationLayer = 1003,

	VpluginIsPlayingAudio = 4000
}


declare function NPP_ClearSiteData(site: string | any, flags: number, maxAge: number): number;

declare function NPP_Destroy(instance: NPP_t, save: NPSavedData): number;

declare function NPP_DestroyStream(instance: NPP_t, stream: NPStream, reason: number): number;

declare function NPP_GetJavaClass(): any;

declare function NPP_GetSitesWithData(): string;

declare function NPP_GetValue(instance: NPP_t, variable: NPPVariable, value: any): number;

declare function NPP_GotFocus(instance: NPP_t, direction: NPFocusDirection): number;

declare function NPP_HandleEvent(instance: NPP_t, event: any): number;

declare function NPP_Initialize(): number;

declare function NPP_LostFocus(instance: NPP_t): void;

declare function NPP_New(pluginType: string | any, instance: NPP_t, mode: number, argc: number, argn: string, argv: string, saved: NPSavedData): number;

declare function NPP_NewStream(instance: NPP_t, type: string | any, stream: NPStream, seekable: number, stype: number): number;

declare function NPP_SetValue(instance: NPP_t, variable: NPNVariable, value: any): number;

declare function NPP_SetWindow(instance: NPP_t, window: NPWindow): number;

declare function NPP_Shutdown(): void;

declare function NPP_StreamAsFile(instance: NPP_t, stream: NPStream, fname: string | any): void;

declare function NPP_URLNotify(instance: NPP_t, url: string | any, reason: number, notifyData: any): void;

declare function NPP_URLRedirectNotify(instance: NPP_t, url: string | any, status: number, notifyData: any): void;

declare function NPP_Write(instance: NPP_t, stream: NPStream, offset: number, len: number, buffer: any): number;

declare function NPP_WriteReady(instance: NPP_t, stream: NPStream): number;

interface NPP_t {
	pdata: any;
	ndata: any;
}
declare var NPP_t: NPP_t;

interface NPRect {
	top: number;
	left: number;
	bottom: number;
	right: number;
}
declare var NPRect: NPRect;

interface NPSavedData {
	len: number;
	buf: any;
}
declare var NPSavedData: NPSavedData;

interface NPSize {
	width: number;
	height: number;
}
declare var NPSize: NPSize;

interface NPStream {
	pdata: any;
	ndata: any;
	url: string;
	end: number;
	lastmodified: number;
	notifyData: any;
	headers: string;
}
declare var NPStream: NPStream;

interface NPString {
	UTF8Characters: string;
	UTF8Length: number;
}
declare var NPString: NPString;

enum NPVariantType {

	Void = 0,

	Null = 1,

	Bool = 2,

	Int32 = 3,

	Double = 4,

	String = 5,

	Object = 6
}


interface NPWindow {
	window: any;
	x: number;
	y: number;
	width: number;
	height: number;
	clipRect: NPRect;
	type: NPWindowType;
}
declare var NPWindow: NPWindow;

enum NPWindowType {

	Window = 1,

	Drawable = 2
}


interface NP_CGContext {
	context: any;
	window: any;
}
declare var NP_CGContext: NP_CGContext;

declare var NSReadAccessURLDocumentOption: string;

enum WKAudiovisualMediaTypes {

	None = 0,

	Audio = 1,

	Video = 2,

	All = -1
}


declare class WKBackForwardList extends NSObject {

	readonly backItem: WKBackForwardListItem;

	readonly backList: NSArray<WKBackForwardListItem>;

	readonly currentItem: WKBackForwardListItem;

	readonly forwardItem: WKBackForwardListItem;

	readonly forwardList: NSArray<WKBackForwardListItem>;

	itemAtIndex(_: number): WKBackForwardListItem;
}

declare class WKBackForwardListItem extends NSObject {

	readonly URL: NSURL;

	readonly initialURL: NSURL;

	readonly title: string;
}

enum WKContentMode {

	Recommended = 0,

	Mobile = 1,

	Desktop = 2
}


declare class WKContentRuleList extends NSObject {

	readonly identifier: string;
}

declare class WKContentRuleListStore extends NSObject {

	static defaultStore(): WKContentRuleListStore;

	static storeWithURL(_: NSURL): WKContentRuleListStore;

	compileContentRuleListForIdentifierEncodedContentRuleListCompletionHandler(_: string, encodedContentRuleList: string, completionHandler: (p1: WKContentRuleList, p2: NSError) => void): void;

	getAvailableContentRuleListIdentifiers(_: (p1: NSArray<string>) => void): void;

	lookUpContentRuleListForIdentifierCompletionHandler(_: string, completionHandler: (p1: WKContentRuleList, p2: NSError) => void): void;

	removeContentRuleListForIdentifierCompletionHandler(_: string, completionHandler: (p1: NSError) => void): void;
}

enum WKErrorCode {

	Unknown = 1,

	WebContentProcessTerminated = 2,

	WebViewInvalidated = 3,

	JavaScriptExceptionOccurred = 4,

	JavaScriptResultTypeIsUnsupported = 5,

	ContentRuleListStoreCompileFailed = 6,

	ContentRuleListStoreLookUpFailed = 7,

	ContentRuleListStoreRemoveFailed = 8,

	ContentRuleListStoreVersionMismatch = 9,

	AttributedStringContentFailedToLoad = 10,

	AttributedStringContentLoadTimedOut = 11
}


declare var WKErrorDomain: string;

declare class WKFrameInfo extends NSObject implements NSCopying {

	readonly isMainFrame: boolean;

	readonly request: NSURLRequest;

	readonly securityOrigin: WKSecurityOrigin;

	readonly webView: WKWebView;

	copyWithZone(_?: any): any;
}

declare class WKHTTPCookieStore extends NSObject {

	addObserver(_: WKHTTPCookieStoreObserver): void;

	deleteCookieCompletionHandler(_: NSHTTPCookie, completionHandler?: () => void): void;

	getAllCookies(_: (p1: NSArray<NSHTTPCookie>) => void): void;

	removeObserver(_: WKHTTPCookieStoreObserver): void;

	setCookieCompletionHandler(_: NSHTTPCookie, completionHandler?: () => void): void;
}

interface WKHTTPCookieStoreObserver extends NSObjectProtocol {

	cookiesDidChangeInCookieStore?(_: WKHTTPCookieStore): void;
}
declare var WKHTTPCookieStoreObserver: {

	prototype: WKHTTPCookieStoreObserver;
};

declare class WKNavigation extends NSObject {

	readonly effectiveContentMode: WKContentMode;
}

declare class WKNavigationAction extends NSObject {

	readonly buttonNumber: number;

	readonly modifierFlags: NSEventModifierFlags;

	readonly navigationType: WKNavigationType;

	readonly request: NSURLRequest;

	readonly sourceFrame: WKFrameInfo;

	readonly targetFrame: WKFrameInfo;
}

enum WKNavigationActionPolicy {

	Cancel = 0,

	Allow = 1
}


interface WKNavigationDelegate extends NSObjectProtocol {

	webViewDecidePolicyForNavigationActionDecisionHandler?(_: WKWebView, decidePolicyForNavigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void;

	webViewDecidePolicyForNavigationActionPreferencesDecisionHandler?(_: WKWebView, decidePolicyForNavigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: (p1: WKNavigationActionPolicy, p2: WKWebpagePreferences) => void): void;

	webViewDecidePolicyForNavigationResponseDecisionHandler?(_: WKWebView, decidePolicyForNavigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void;

	webViewDidCommitNavigation?(_: WKWebView, didCommitNavigation: WKNavigation): void;

	webViewDidFailNavigationWithError?(_: WKWebView, didFailNavigation: WKNavigation, withError: NSError): void;

	webViewDidFailProvisionalNavigationWithError?(_: WKWebView, didFailProvisionalNavigation: WKNavigation, withError: NSError): void;

	webViewDidFinishNavigation?(_: WKWebView, didFinishNavigation: WKNavigation): void;

	webViewDidReceiveAuthenticationChallengeCompletionHandler?(_: WKWebView, didReceiveAuthenticationChallenge: NSURLAuthenticationChallenge, completionHandler?: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	webViewDidReceiveServerRedirectForProvisionalNavigation?(_: WKWebView, didReceiveServerRedirectForProvisionalNavigation: WKNavigation): void;

	webViewDidStartProvisionalNavigation?(_: WKWebView, didStartProvisionalNavigation: WKNavigation): void;

	webViewWebContentProcessDidTerminate?(_: WKWebView): void;
}
declare var WKNavigationDelegate: {

	prototype: WKNavigationDelegate;
};

declare class WKNavigationResponse extends NSObject {

	readonly canShowMIMEType: boolean;

	readonly isForMainFrame: boolean;

	readonly response: NSURLResponse;
}

enum WKNavigationResponsePolicy {

	Cancel = 0,

	Allow = 1
}


enum WKNavigationType {

	LinkActivated = 0,

	FormSubmitted = 1,

	BackForward = 2,

	Reload = 3,

	FormResubmitted = 4,

	Other = -1
}


declare class WKOpenPanelParameters extends NSObject {

	readonly allowsDirectories: boolean;

	readonly allowsMultipleSelection: boolean;
}

declare class WKPreferences extends NSObject implements NSSecureCoding {

	setFraudulentWebsiteWarningEnabled(_: boolean)

	isFraudulentWebsiteWarningEnabled: boolean;

	setJavaScriptCanOpenWindowsAutomatically(_: boolean)

	javaScriptCanOpenWindowsAutomatically: boolean;

	setJavaScriptEnabled(_: boolean)

	javaScriptEnabled: boolean;

	setMinimumFontSize(_: number)

	minimumFontSize: number;

	setTabFocusesLinks(_: boolean)

	tabFocusesLinks: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class WKProcessPool extends NSObject implements NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class WKScriptMessage extends NSObject {

	readonly body: any;

	readonly frameInfo: WKFrameInfo;

	readonly name: string;

	readonly webView: WKWebView;
}

interface WKScriptMessageHandler extends NSObjectProtocol {

	userContentControllerDidReceiveScriptMessage(_: WKUserContentController, didReceiveScriptMessage: WKScriptMessage): void;
}
declare var WKScriptMessageHandler: {

	prototype: WKScriptMessageHandler;
};

declare class WKSecurityOrigin extends NSObject {

	readonly host: string;

	readonly port: number;

	readonly protocol: string;
}

declare class WKSnapshotConfiguration extends NSObject implements NSCopying {

	setAfterScreenUpdates(_: boolean)

	afterScreenUpdates: boolean;

	setRect(_: CGRect)

	rect: CGRect;

	setSnapshotWidth(_: number)

	snapshotWidth: number;

	copyWithZone(_?: any): any;
}

interface WKUIDelegate extends NSObjectProtocol {

	webView?(_: WKWebView): void;

	webViewCreateWebViewWithConfigurationForNavigationActionWindowFeatures?(_: WKWebView, createWebViewWithConfiguration: WKWebViewConfiguration, forNavigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures): WKWebView;

	webViewRunJavaScriptAlertPanelWithMessageInitiatedByFrameCompletionHandler?(_: WKWebView, runJavaScriptAlertPanelWithMessage: string, initiatedByFrame: WKFrameInfo, completionHandler: () => void): void;

	webViewRunJavaScriptConfirmPanelWithMessageInitiatedByFrameCompletionHandler?(_: WKWebView, runJavaScriptConfirmPanelWithMessage: string, initiatedByFrame: WKFrameInfo, completionHandler: (p1: boolean) => void): void;

	webViewRunJavaScriptTextInputPanelWithPromptDefaultTextInitiatedByFrameCompletionHandler?(_: WKWebView, runJavaScriptTextInputPanelWithPrompt: string, defaultText?: string, initiatedByFrame: WKFrameInfo, completionHandler?: (p1: string) => void): void;

	webViewDidClose?(_: WKWebView): void;
}
declare var WKUIDelegate: {

	prototype: WKUIDelegate;
};

interface WKURLSchemeHandler extends NSObjectProtocol {

	webViewStartURLSchemeTask(_: WKWebView, startURLSchemeTask: WKURLSchemeTask): void;

	webViewStopURLSchemeTask(_: WKWebView, stopURLSchemeTask: WKURLSchemeTask): void;
}
declare var WKURLSchemeHandler: {

	prototype: WKURLSchemeHandler;
};

interface WKURLSchemeTask extends NSObjectProtocol {

	request: NSURLRequest;

	didFailWithError(_: NSError): void;

	didFinish(): void;

	didReceiveData(_: NSData): void;

	didReceiveResponse(_: NSURLResponse): void;
}
declare var WKURLSchemeTask: {

	prototype: WKURLSchemeTask;
};

declare class WKUserContentController extends NSObject implements NSSecureCoding {

	readonly userScripts: NSArray<WKUserScript>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addContentRuleList(_: WKContentRuleList): void;

	addScriptMessageHandlerName(_: WKScriptMessageHandler, name: string): void;

	addUserScript(_: WKUserScript): void;

	encodeWithCoder(_: NSCoder): void;

	removeAllContentRuleLists(): void;

	removeAllUserScripts(): void;

	removeContentRuleList(_: WKContentRuleList): void;

	removeScriptMessageHandlerForName(_: string): void;
}

enum WKUserInterfaceDirectionPolicy {

	Content = 0,

	System = 1
}


declare class WKUserScript extends NSObject implements NSCopying {

	readonly isForMainFrameOnly: boolean;

	readonly injectionTime: WKUserScriptInjectionTime;

	readonly source: string;

	static create(source: string, injectionTime: WKUserScriptInjectionTime, forMainFrameOnly: boolean);

	copyWithZone(_?: any): any;
}

enum WKUserScriptInjectionTime {

	AtDocumentStart = 0,

	AtDocumentEnd = 1
}


declare class WKWebView extends NSView implements NSUserInterfaceValidations, NSTextFinderClient {

	static handlesURLScheme(_: string): boolean;

	setUIDelegate(_: WKUIDelegate)

	UIDelegate: WKUIDelegate;

	readonly URL: NSURL;

	setAllowsBackForwardNavigationGestures(_: boolean)

	allowsBackForwardNavigationGestures: boolean;

	setAllowsLinkPreview(_: boolean)

	allowsLinkPreview: boolean;

	setAllowsMagnification(_: boolean)

	allowsMagnification: boolean;

	readonly backForwardList: WKBackForwardList;

	readonly canGoBack: boolean;

	readonly canGoForward: boolean;

	readonly configuration: WKWebViewConfiguration;

	setCustomUserAgent(_: string)

	customUserAgent: string;

	readonly estimatedProgress: number;

	readonly hasOnlySecureContent: boolean;

	readonly isLoading: boolean;

	setMagnification(_: number)

	magnification: number;

	setNavigationDelegate(_: WKNavigationDelegate)

	navigationDelegate: WKNavigationDelegate;

	readonly serverTrust: any;

	readonly title: string;

	readonly allowsMultipleSelection: boolean; // inherited from NSTextFinderClient

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly isEditable: boolean; // inherited from NSTextFinderClient

	readonly firstSelectedRange: NSRange; // inherited from NSTextFinderClient

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isSelectable: boolean; // inherited from NSTextFinderClient

	setSelectedRanges(_: NSArray<NSValue>)

	selectedRanges: NSArray<NSValue>; // inherited from NSTextFinderClient

	readonly string: string; // inherited from NSTextFinderClient

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly visibleCharacterRanges: NSArray<NSValue>; // inherited from NSTextFinderClient

	readonly  // inherited from NSObjectProtocol

	static create(frame: CGRect, configuration: WKWebViewConfiguration);

	conformsToProtocol(_: any /* Protocol */): boolean;

	contentViewAtIndexEffectiveCharacterRange(at: number, effectiveCharacterRange: NSRange): NSView;

	didReplaceCharacters(): void;

	drawCharactersInRangeForContentView(in_: NSRange, forContentView: NSView): void;

	evaluateJavaScriptCompletionHandler(_: string, completionHandler?: (p1: any, p2: NSError) => void): void;

	goBack(): WKNavigation;

	goBack(_?: any): void;

	goForward(): WKNavigation;

	goForward(_?: any): void;

	goToBackForwardListItem(_: WKBackForwardListItem): WKNavigation;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	loadDataMIMETypeCharacterEncodingNameBaseURL(_: NSData, MIMEType: string, characterEncodingName: string, baseURL: NSURL): WKNavigation;

	loadFileURLAllowingReadAccessToURL(_: NSURL, allowingReadAccessToURL: NSURL): WKNavigation;

	loadHTMLStringBaseURL(_: string, baseURL?: NSURL): WKNavigation;

	loadRequest(_: NSURLRequest): WKNavigation;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	rectsForCharacterRange(forCharacterRange: NSRange): NSArray<NSValue>;

	reload(): WKNavigation;

	reload(_?: any): void;

	reloadFromOrigin(): WKNavigation;

	reloadFromOrigin(_?: any): void;

	replaceCharactersInRangeWithString(in_: NSRange, with_: string): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	scrollRangeToVisible(_: NSRange): void;

	self(): this;

	setMagnificationCenteredAtPoint(_: number, centeredAtPoint: CGPoint): void;

	shouldReplaceCharactersInRangesWithStrings(inRanges: NSArray<NSValue>, with_: NSArray<string>): boolean;

	stopLoading(): void;

	stopLoading(_?: any): void;

	stringAtIndexEffectiveRangeEndsWithSearchBoundary(at: number, effectiveRange: NSRange, endsWithSearchBoundary: boolean): string;

	stringLength(): number;

	takeSnapshotWithConfigurationCompletionHandler(_?: WKSnapshotConfiguration, completionHandler?: (p1: NSImage, p2: NSError) => void): void;

	validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}

declare class WKWebViewConfiguration extends NSObject implements NSCopying, NSSecureCoding {

	setAllowsAirPlayForMediaPlayback(_: boolean)

	allowsAirPlayForMediaPlayback: boolean;

	setApplicationNameForUserAgent(_: string)

	applicationNameForUserAgent: string;

	setDefaultWebpagePreferences(_: WKWebpagePreferences)

	defaultWebpagePreferences: WKWebpagePreferences;

	setMediaTypesRequiringUserActionForPlayback(_: WKAudiovisualMediaTypes)

	mediaTypesRequiringUserActionForPlayback: WKAudiovisualMediaTypes;

	setPreferences(_: WKPreferences)

	preferences: WKPreferences;

	setProcessPool(_: WKProcessPool)

	processPool: WKProcessPool;

	setSuppressesIncrementalRendering(_: boolean)

	suppressesIncrementalRendering: boolean;

	setUserContentController(_: WKUserContentController)

	userContentController: WKUserContentController;

	setUserInterfaceDirectionPolicy(_: WKUserInterfaceDirectionPolicy)

	userInterfaceDirectionPolicy: WKUserInterfaceDirectionPolicy;

	setWebsiteDataStore(_: WKWebsiteDataStore)

	websiteDataStore: WKWebsiteDataStore;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	setURLSchemeHandlerForURLScheme(_?: WKURLSchemeHandler, forURLScheme: string): void;

	urlSchemeHandlerForURLScheme(_: string): WKURLSchemeHandler;
}

declare class WKWebpagePreferences extends NSObject {

	setPreferredContentMode(_: WKContentMode)

	preferredContentMode: WKContentMode;
}

declare class WKWebsiteDataRecord extends NSObject {

	readonly dataTypes: NSSet<string>;

	readonly displayName: string;
}

declare class WKWebsiteDataStore extends NSObject implements NSSecureCoding {

	static allWebsiteDataTypes(): NSSet<string>;

	static defaultDataStore(): WKWebsiteDataStore;

	static nonPersistentDataStore(): WKWebsiteDataStore;

	readonly httpCookieStore: WKHTTPCookieStore;

	readonly isPersistent: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	fetchDataRecordsOfTypesWithCompletionHandler(_: NSSet<string>, completionHandler: (p1: NSArray<WKWebsiteDataRecord>) => void): void;

	removeDataOfTypesForDataRecordsCompletionHandler(_: NSSet<string>, forDataRecords: NSArray<WKWebsiteDataRecord>, completionHandler: () => void): void;

	removeDataOfTypesWithModifiedSinceCompletionHandler(_: NSSet<string>, modifiedSince: Date, completionHandler: () => void): void;
}

declare var WKWebsiteDataTypeCookies: string;

declare var WKWebsiteDataTypeDiskCache: string;

declare var WKWebsiteDataTypeFetchCache: string;

declare var WKWebsiteDataTypeIndexedDBDatabases: string;

declare var WKWebsiteDataTypeLocalStorage: string;

declare var WKWebsiteDataTypeMemoryCache: string;

declare var WKWebsiteDataTypeOfflineWebApplicationCache: string;

declare var WKWebsiteDataTypeServiceWorkerRegistrations: string;

declare var WKWebsiteDataTypeSessionStorage: string;

declare var WKWebsiteDataTypeWebSQLDatabases: string;

declare class WKWindowFeatures extends NSObject {

	readonly allowsResizing: number;

	readonly height: number;

	readonly menuBarVisibility: number;

	readonly statusBarVisibility: number;

	readonly toolbarsVisibility: number;

	readonly width: number;

	readonly x: number;

	readonly y: number;
}

declare const WebKitErrorBlockedPlugInVersion: number;

declare const WebKitErrorCannotFindPlugIn: number;

declare const WebKitErrorCannotLoadPlugIn: number;

declare const WebKitErrorCannotShowMIMEType: number;

declare const WebKitErrorCannotShowURL: number;

declare const WebKitErrorFrameLoadInterruptedByPolicyChange: number;

declare const WebKitErrorJavaUnavailable: number;

declare const WebMenuItemPDFActualSize: number;

declare const WebMenuItemPDFAutoSize: number;

declare const WebMenuItemPDFContinuous: number;

declare const WebMenuItemPDFFacingPages: number;

declare const WebMenuItemPDFNextPage: number;

declare const WebMenuItemPDFPreviousPage: number;

declare const WebMenuItemPDFSinglePage: number;

declare const WebMenuItemPDFZoomIn: number;

declare const WebMenuItemPDFZoomOut: number;

declare const WebMenuItemTagCopy: number;

declare const WebMenuItemTagCopyImageToClipboard: number;

declare const WebMenuItemTagCopyLinkToClipboard: number;

declare const WebMenuItemTagCut: number;

declare const WebMenuItemTagDownloadImageToDisk: number;

declare const WebMenuItemTagDownloadLinkToDisk: number;

declare const WebMenuItemTagGoBack: number;

declare const WebMenuItemTagGoForward: number;

declare const WebMenuItemTagIgnoreSpelling: number;

declare const WebMenuItemTagLearnSpelling: number;

declare const WebMenuItemTagLookUpInDictionary: number;

declare const WebMenuItemTagNoGuessesFound: number;

declare const WebMenuItemTagOpenFrameInNewWindow: number;

declare const WebMenuItemTagOpenImageInNewWindow: number;

declare const WebMenuItemTagOpenLinkInNewWindow: number;

declare const WebMenuItemTagOpenWithDefaultApplication: number;

declare const WebMenuItemTagOther: number;

declare const WebMenuItemTagPaste: number;

declare const WebMenuItemTagReload: number;

declare const WebMenuItemTagSearchInSpotlight: number;

declare const WebMenuItemTagSearchWeb: number;

declare const WebMenuItemTagSpellingGuess: number;

declare const WebMenuItemTagStop: number;

declare class WebResource extends NSObject implements NSCoding, NSCopying {

	readonly MIMEType: string;

	readonly URL: NSURL;

	readonly data: NSData;

	readonly frameName: string;

	readonly textEncodingName: string;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(data: NSData, URL: NSURL, MIMEType: string, textEncodingName: string, frameName: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var WebViewDidBeginEditingNotification: string;

declare var WebViewDidChangeNotification: string;

declare var WebViewDidChangeSelectionNotification: string;

declare var WebViewDidChangeTypingStyleNotification: string;

declare var WebViewDidEndEditingNotification: string;
