
declare class MCAdvertiserAssistant extends NSObject {

	setDelegate(_: MCAdvertiserAssistantDelegate)

	delegate: MCAdvertiserAssistantDelegate;

	readonly discoveryInfo: NSDictionary<string, string>;

	readonly serviceType: string;

	readonly session: MCSession;

	static create(serviceType: string, discoveryInfo: NSDictionary<string, string>, session: MCSession);

	start(): void;

	stop(): void;
}

interface MCAdvertiserAssistantDelegate extends NSObjectProtocol {

	advertiserAssistantDidDismissInvitation?(_: MCAdvertiserAssistant): void;

	advertiserAssistantWillPresentInvitation?(_: MCAdvertiserAssistant): void;
}
declare var MCAdvertiserAssistantDelegate: {

	prototype: MCAdvertiserAssistantDelegate;
};

declare class MCBrowserViewController extends NSViewController implements MCNearbyServiceBrowserDelegate {

	readonly browser: MCNearbyServiceBrowser;

	setDelegate(_: MCBrowserViewControllerDelegate)

	delegate: MCBrowserViewControllerDelegate;

	setMaximumNumberOfPeers(_: number)

	maximumNumberOfPeers: number;

	setMinimumNumberOfPeers(_: number)

	minimumNumberOfPeers: number;

	readonly session: MCSession;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(browser: MCNearbyServiceBrowser, session: MCSession);

	static create(serviceType: string, session: MCSession);

	browserDidNotStartBrowsingForPeers(_: MCNearbyServiceBrowser, didNotStartBrowsingForPeers: NSError): void;

	browserFoundPeerWithDiscoveryInfo(_: MCNearbyServiceBrowser, foundPeer: MCPeerID, withDiscoveryInfo?: NSDictionary<string, string>): void;

	browserLostPeer(_: MCNearbyServiceBrowser, lostPeer: MCPeerID): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

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

interface MCBrowserViewControllerDelegate extends NSObjectProtocol {

	browserViewControllerShouldPresentNearbyPeerWithDiscoveryInfo?(_: MCBrowserViewController, shouldPresentNearbyPeer: MCPeerID, withDiscoveryInfo?: NSDictionary<string, string>): boolean;

	browserViewControllerDidFinish(_: MCBrowserViewController): void;

	browserViewControllerWasCancelled(_: MCBrowserViewController): void;
}
declare var MCBrowserViewControllerDelegate: {

	prototype: MCBrowserViewControllerDelegate;
};

enum MCEncryptionPreference {

	Optional = 0,

	Required = 1,

	None = 2
}


enum MCErrorCode {

	Unknown = 0,

	NotConnected = 1,

	InvalidParameter = 2,

	Unsupported = 3,

	TimedOut = 4,

	Cancelled = 5,

	Unavailable = 6
}


declare var MCErrorDomain: string;

declare class MCNearbyServiceAdvertiser extends NSObject {

	setDelegate(_: MCNearbyServiceAdvertiserDelegate)

	delegate: MCNearbyServiceAdvertiserDelegate;

	readonly discoveryInfo: NSDictionary<string, string>;

	readonly myPeerID: MCPeerID;

	readonly serviceType: string;

	static create(peer: MCPeerID, discoveryInfo: NSDictionary<string, string>, serviceType: string);

	startAdvertisingPeer(): void;

	stopAdvertisingPeer(): void;
}

interface MCNearbyServiceAdvertiserDelegate extends NSObjectProtocol {

	advertiserDidNotStartAdvertisingPeer?(_: MCNearbyServiceAdvertiser, didNotStartAdvertisingPeer: NSError): void;

	advertiserDidReceiveInvitationFromPeerWithContextInvitationHandler(_: MCNearbyServiceAdvertiser, didReceiveInvitationFromPeer: MCPeerID, withContext?: NSData, invitationHandler?: (p1: boolean, p2: MCSession) => void): void;
}
declare var MCNearbyServiceAdvertiserDelegate: {

	prototype: MCNearbyServiceAdvertiserDelegate;
};

declare class MCNearbyServiceBrowser extends NSObject {

	setDelegate(_: MCNearbyServiceBrowserDelegate)

	delegate: MCNearbyServiceBrowserDelegate;

	readonly myPeerID: MCPeerID;

	readonly serviceType: string;

	static create(peer: MCPeerID, serviceType: string);

	invitePeerToSessionWithContextTimeout(_: MCPeerID, toSession: MCSession, withContext?: NSData, timeout: number): void;

	startBrowsingForPeers(): void;

	stopBrowsingForPeers(): void;
}

interface MCNearbyServiceBrowserDelegate extends NSObjectProtocol {

	browserDidNotStartBrowsingForPeers?(_: MCNearbyServiceBrowser, didNotStartBrowsingForPeers: NSError): void;

	browserFoundPeerWithDiscoveryInfo(_: MCNearbyServiceBrowser, foundPeer: MCPeerID, withDiscoveryInfo?: NSDictionary<string, string>): void;

	browserLostPeer(_: MCNearbyServiceBrowser, lostPeer: MCPeerID): void;
}
declare var MCNearbyServiceBrowserDelegate: {

	prototype: MCNearbyServiceBrowserDelegate;
};

declare class MCPeerID extends NSObject implements NSCopying, NSSecureCoding {

	readonly displayName: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(displayName: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class MCSession extends NSObject {

	readonly connectedPeers: NSArray<MCPeerID>;

	setDelegate(_: MCSessionDelegate)

	delegate: MCSessionDelegate;

	readonly encryptionPreference: MCEncryptionPreference;

	readonly myPeerID: MCPeerID;

	readonly securityIdentity: NSArray<any>;

	static create(peer: MCPeerID);

	static create(peer: MCPeerID, securityIdentity: NSArray<any> | any[], encryptionPreference: MCEncryptionPreference);

	cancelConnectPeer(_: MCPeerID): void;

	connectPeerWithNearbyConnectionData(_: MCPeerID, withNearbyConnectionData: NSData): void;

	disconnect(): void;

	nearbyConnectionDataForPeerWithCompletionHandler(_: MCPeerID, withCompletionHandler?: (p1: NSData, p2: NSError) => void): void;

	sendDataToPeersWithModeError(toPeers: NSData, withMode: NSArray<MCPeerID>, error: MCSessionSendDataMode): boolean;

	sendResourceAtURLWithNameToPeerWithCompletionHandler(_: NSURL, withName: string, toPeer: MCPeerID, withCompletionHandler?: (p1: NSError) => void): NSProgress;

	startStreamWithNameToPeerError(toPeer: string, error: MCPeerID): NSOutputStream;
}

interface MCSessionDelegate extends NSObjectProtocol {

	sessionDidFinishReceivingResourceWithNameFromPeerAtURLWithError(_: MCSession, didFinishReceivingResourceWithName: string, fromPeer: MCPeerID, atURL?: NSURL, withError?: NSError): void;

	sessionDidReceiveCertificateFromPeerCertificateHandler?(_: MCSession, didReceiveCertificate?: NSArray<any>, fromPeer: MCPeerID, certificateHandler: (p1: boolean) => void): void;

	sessionDidReceiveDataFromPeer(_: MCSession, didReceiveData: NSData, fromPeer: MCPeerID): void;

	sessionDidReceiveStreamWithNameFromPeer(_: MCSession, didReceiveStream: NSInputStream, withName: string, fromPeer: MCPeerID): void;

	sessionDidStartReceivingResourceWithNameFromPeerWithProgress(_: MCSession, didStartReceivingResourceWithName: string, fromPeer: MCPeerID, withProgress: NSProgress): void;

	sessionPeerDidChangeState(_: MCSession, peer: MCPeerID, didChangeState: MCSessionState): void;
}
declare var MCSessionDelegate: {

	prototype: MCSessionDelegate;
};

enum MCSessionSendDataMode {

	Reliable = 0,

	Unreliable = 1
}


enum MCSessionState {

	NotConnected = 0,

	Connecting = 1,

	Connected = 2
}


declare var kMCSessionMaximumNumberOfPeers: number;

declare var kMCSessionMinimumNumberOfPeers: number;
