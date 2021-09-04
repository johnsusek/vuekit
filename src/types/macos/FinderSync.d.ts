
declare class FIFinderSync extends NSObject implements FIFinderSyncProtocol, NSExtensionRequestHandling {

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly toolbarItemImage: NSImage; // inherited from FIFinderSyncProtocol

	readonly toolbarItemName: string; // inherited from FIFinderSyncProtocol

	readonly toolbarItemToolTip: string; // inherited from FIFinderSyncProtocol

	readonly  // inherited from NSObjectProtocol

	beginObservingDirectoryAtURL(_: NSURL): void;

	beginRequestWithExtensionContext(_: NSExtensionContext): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	endObservingDirectoryAtURL(_: NSURL): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	makeListenerEndpointForServiceNameItemURLAndReturnError(itemURL: string, andReturnError: NSURL): NSXPCListenerEndpoint;

	menuForMenuKind(_: FIMenuKind): NSMenu;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	requestBadgeIdentifierForURL(_: NSURL): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	supportedServiceNamesForItemWithURL(_: NSURL): NSArray<string>;

	valuesForAttributesForItemWithURLCompletion(_: NSArray<string>, forItemWithURL: NSURL, completion?: (p1: NSDictionary<string, any>, p2: NSError) => void): void;
}

declare class FIFinderSyncController extends NSExtensionContext {

	static defaultController(): FIFinderSyncController;

	static showExtensionManagementInterface(): void;

	setDirectoryURLs(_: NSSet<NSURL>)

	directoryURLs: NSSet<NSURL>;

	static isExtensionEnabled(): boolean;

	lastUsedDateForItemWithURL(_: NSURL): Date;

	selectedItemURLs(): NSArray<NSURL>;

	setBadgeIdentifierForURL(_: string, forURL: NSURL): void;

	setBadgeImageLabelForBadgeIdentifier(_: NSImage, label?: string, forBadgeIdentifier: string): void;

	setLastUsedDateForItemWithURLCompletion(_: Date, forItemWithURL: NSURL, completion: (p1: NSError) => void): void;

	setTagDataForItemWithURLCompletion(_?: NSData, forItemWithURL: NSURL, completion: (p1: NSError) => void): void;

	tagDataForItemWithURL(_: NSURL): NSData;

	targetedURL(): NSURL;
}

interface FIFinderSyncProtocol {

	toolbarItemImage?: NSImage;

	toolbarItemName?: string;

	toolbarItemToolTip?: string;

	beginObservingDirectoryAtURL?(_: NSURL): void;

	endObservingDirectoryAtURL?(_: NSURL): void;

	makeListenerEndpointForServiceNameItemURLAndReturnError?(itemURL: string, andReturnError: NSURL): NSXPCListenerEndpoint;

	menuForMenuKind?(_: FIMenuKind): NSMenu;

	requestBadgeIdentifierForURL?(_: NSURL): void;

	supportedServiceNamesForItemWithURL?(_: NSURL): NSArray<string>;

	valuesForAttributesForItemWithURLCompletion?(_: NSArray<string>, forItemWithURL: NSURL, completion?: (p1: NSDictionary<string, any>, p2: NSError) => void): void;
}
declare var FIFinderSyncProtocol: {

	prototype: FIFinderSyncProtocol;
};

enum FIMenuKind {

	ContextualMenuForItems = 0,

	ContextualMenuForContainer = 1,

	ContextualMenuForSidebar = 2,

	ToolbarItemMenu = 3
}

