
declare class SFContentBlockerManager extends NSObject {

	static getStateOfContentBlockerWithIdentifierCompletionHandler(_: string, completionHandler?: (p1: SFContentBlockerState, p2: NSError) => void): void;

	static reloadContentBlockerWithIdentifierCompletionHandler(_: string, completionHandler?: (p1: NSError) => void): void;
}

declare class SFContentBlockerState extends NSObject {

	readonly isEnabled: boolean;
}

enum SFErrorCode {

	NoExtensionFound = 1,

	NoAttachmentFound = 2,

	LoadingInterrupted = 3
}


declare var SFErrorDomain: string;

declare class SFSafariApplication extends NSObject {

	static dispatchMessageWithNameToExtensionWithIdentifierUserInfoCompletionHandler(_: string, toExtensionWithIdentifier: string, userInfo?: NSDictionary<string, any>, completionHandler?: (p1: NSError) => void): void;

	static getActiveWindowWithCompletionHandler(_?: (p1: SFSafariWindow) => void): void;

	static getAllWindowsWithCompletionHandler(_: (p1: NSArray<SFSafariWindow>) => void): void;

	static getHostApplicationWithCompletionHandler(_: (p1: NSRunningApplication) => void): void;

	static openWindowWithURLCompletionHandler(_: NSURL, completionHandler?: (p1: SFSafariWindow) => void): void;

	static setToolbarItemsNeedUpdate(): void;

	static showPreferencesForExtensionWithIdentifierCompletionHandler(_: string, completionHandler?: (p1: NSError) => void): void;
}

declare class SFSafariExtension extends NSObject {

	static getBaseURIWithCompletionHandler(_?: (p1: NSURL) => void): void;
}

declare class SFSafariExtensionHandler extends NSObject implements NSExtensionRequestHandling, SFSafariExtensionHandling {

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	additionalRequestHeadersForURLCompletionHandler(_: NSURL, completionHandler?: (p1: NSDictionary<string, string>) => void): void;

	beginRequestWithExtensionContext(_: NSExtensionContext): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	contentBlockerWithIdentifierBlockedResourcesWithURLsOnPage(_: string, blockedResourcesWithURLs: NSArray<NSURL>, onPage: SFSafariPage): void;

	contextMenuItemSelectedWithCommandInPageUserInfo(_: string, inPage: SFSafariPage, userInfo?: NSDictionary<string, any>): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	messageReceivedFromContainingAppWithNameUserInfo(_: string, userInfo?: NSDictionary<string, any>): void;

	messageReceivedWithNameFromPageUserInfo(_: string, fromPage: SFSafariPage, userInfo?: NSDictionary<string, any>): void;

	pageWillNavigateToURL(_: SFSafariPage, willNavigateToURL?: NSURL): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	popoverDidCloseInWindow(_: SFSafariWindow): void;

	popoverViewController(): SFSafariExtensionViewController;

	popoverWillShowInWindow(_: SFSafariWindow): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	toolbarItemClickedInWindow(_: SFSafariWindow): void;

	validateContextMenuItemWithCommandInPageUserInfoValidationHandler(_: string, inPage: SFSafariPage, userInfo?: NSDictionary<string, any>, validationHandler?: (p1: boolean, p2: string) => void): void;

	validateToolbarItemInWindowValidationHandler(_: SFSafariWindow, validationHandler: (p1: boolean, p2: string) => void): void;
}

interface SFSafariExtensionHandling extends NSObjectProtocol {

	additionalRequestHeadersForURLCompletionHandler?(_: NSURL, completionHandler?: (p1: NSDictionary<string, string>) => void): void;

	contentBlockerWithIdentifierBlockedResourcesWithURLsOnPage?(_: string, blockedResourcesWithURLs: NSArray<NSURL>, onPage: SFSafariPage): void;

	contextMenuItemSelectedWithCommandInPageUserInfo?(_: string, inPage: SFSafariPage, userInfo?: NSDictionary<string, any>): void;

	messageReceivedFromContainingAppWithNameUserInfo?(_: string, userInfo?: NSDictionary<string, any>): void;

	messageReceivedWithNameFromPageUserInfo?(_: string, fromPage: SFSafariPage, userInfo?: NSDictionary<string, any>): void;

	pageWillNavigateToURL?(_: SFSafariPage, willNavigateToURL?: NSURL): void;

	popoverDidCloseInWindow?(_: SFSafariWindow): void;

	popoverViewController?(): SFSafariExtensionViewController;

	popoverWillShowInWindow?(_: SFSafariWindow): void;

	toolbarItemClickedInWindow?(_: SFSafariWindow): void;

	validateContextMenuItemWithCommandInPageUserInfoValidationHandler?(_: string, inPage: SFSafariPage, userInfo?: NSDictionary<string, any>, validationHandler?: (p1: boolean, p2: string) => void): void;

	validateToolbarItemInWindowValidationHandler?(_: SFSafariWindow, validationHandler: (p1: boolean, p2: string) => void): void;
}
declare var SFSafariExtensionHandling: {

	prototype: SFSafariExtensionHandling;
};

declare class SFSafariExtensionManager extends NSObject {

	static getStateOfSafariExtensionWithIdentifierCompletionHandler(_: string, completionHandler?: (p1: SFSafariExtensionState, p2: NSError) => void): void;
}

declare class SFSafariExtensionState extends NSObject {

	readonly isEnabled: boolean;
}

declare class SFSafariExtensionViewController extends NSViewController {

	dismissPopover(): void;
}

declare class SFSafariPage extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	dispatchMessageToScriptWithNameUserInfo(_: string, userInfo?: NSDictionary<string, any>): void;

	encodeWithCoder(_: NSCoder): void;

	getContainingTabWithCompletionHandler(_: (p1: SFSafariTab) => void): void;

	getPagePropertiesWithCompletionHandler(_?: (p1: SFSafariPageProperties) => void): void;

	getScreenshotOfVisibleAreaWithCompletionHandler(_?: (p1: NSImage) => void): void;

	reload(): void;
}

declare class SFSafariPageProperties extends NSObject {

	readonly isActive: boolean;

	readonly title: string;

	readonly url: NSURL;

	readonly usesPrivateBrowsing: boolean;
}

declare class SFSafariTab extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	activateWithCompletionHandler(_?: () => void): void;

	close(): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	getActivePageWithCompletionHandler(_?: (p1: SFSafariPage) => void): void;

	getContainingWindowWithCompletionHandler(_?: (p1: SFSafariWindow) => void): void;

	getPagesWithCompletionHandler(_?: (p1: NSArray<SFSafariPage>) => void): void;

	navigateToURL(_: NSURL): void;
}

declare class SFSafariToolbarItem extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	setBadgeText(_?: string): void;

	setEnabled(_: boolean): void;

	setImage(_?: NSImage): void;

	setLabel(_?: string): void;

	showPopover(): void;
}

declare class SFSafariWindow extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	close(): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	getActiveTabWithCompletionHandler(_?: (p1: SFSafariTab) => void): void;

	getAllTabsWithCompletionHandler(_: (p1: NSArray<SFSafariTab>) => void): void;

	getToolbarItemWithCompletionHandler(_?: (p1: SFSafariToolbarItem) => void): void;

	openTabWithURLMakeActiveIfPossibleCompletionHandler(_: NSURL, makeActiveIfPossible: boolean, completionHandler?: (p1: SFSafariTab) => void): void;
}

declare class SFUniversalLink extends NSObject {

	readonly applicationURL: NSURL;

	setEnabled(_: boolean)

	isEnabled: boolean;

	readonly webpageURL: NSURL;

	static create(webpageURL: NSURL);
}
