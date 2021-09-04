
declare var NEAppProxyErrorDomain: string;

declare class NEAppProxyFlow extends NSObject {

	readonly metaData: NEFlowMetaData;

	setNetworkInterface(_: NSObject)

	networkInterface: NSObject;

	closeReadWithError(_?: NSError): void;

	closeWriteWithError(_?: NSError): void;

	openWithLocalEndpointCompletionHandler(_?: NWHostEndpoint, completionHandler?: (p1: NSError) => void): void;
}

enum NEAppProxyFlowError {

	NotConnected = 1,

	PeerReset = 2,

	HostUnreachable = 3,

	InvalidArgument = 4,

	Aborted = 5,

	Refused = 6,

	TimedOut = 7,

	Internal = 8,

	DatagramTooLarge = 9,

	ReadAlreadyPending = 10
}


declare class NEAppProxyProvider extends NETunnelProvider {

	cancelProxyWithError(_?: NSError): void;

	handleNewFlow(_: NEAppProxyFlow): boolean;

	handleNewUDPFlowInitialRemoteEndpoint(_: NEAppProxyUDPFlow, initialRemoteEndpoint: NWEndpoint): boolean;

	startProxyWithOptionsCompletionHandler(_?: NSDictionary<string, any>, completionHandler?: (p1: NSError) => void): void;

	stopProxyWithReasonCompletionHandler(_: NEProviderStopReason, completionHandler: () => void): void;
}

declare class NEAppProxyProviderManager extends NETunnelProviderManager {

	static forPerAppVPN(): NEAppProxyProviderManager; // inherited from NETunnelProviderManager
}

declare class NEAppProxyTCPFlow extends NEAppProxyFlow {

	readonly remoteEndpoint: NWEndpoint;

	readDataWithCompletionHandler(_?: (p1: NSData, p2: NSError) => void): void;

	writeDataWithCompletionHandler(_: NSData, withCompletionHandler?: (p1: NSError) => void): void;
}

declare class NEAppProxyUDPFlow extends NEAppProxyFlow {

	readonly localEndpoint: NWEndpoint;

	readDatagramsWithCompletionHandler(_?: (p1: NSArray<NSData>, p2: NSArray<NWEndpoint>, p3: NSError) => void): void;

	writeDatagramsSentByEndpointsCompletionHandler(_: NSArray<NSData>, sentByEndpoints: NSArray<NWEndpoint>, completionHandler?: (p1: NSError) => void): void;
}

declare class NEAppRule extends NSObject implements NSCopying, NSSecureCoding {

	readonly matchDesignatedRequirement: string;

	setMatchDomains(_: NSArray<any>)

	matchDomains: NSArray<any>;

	setMatchPath(_: string)

	matchPath: string;

	readonly matchSigningIdentifier: string;

	setMatchTools(_: NSArray<NEAppRule>)

	matchTools: NSArray<NEAppRule>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(signingIdentifier: string, designatedRequirement: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var NEDNSProxyConfigurationDidChangeNotification: string;

declare var NEDNSProxyErrorDomain: string;

declare class NEDNSProxyManager extends NSObject {

	static sharedManager(): NEDNSProxyManager;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setLocalizedDescription(_: string)

	localizedDescription: string;

	setProviderProtocol(_: NEDNSProxyProviderProtocol)

	providerProtocol: NEDNSProxyProviderProtocol;

	loadFromPreferencesWithCompletionHandler(_?: (p1: NSError) => void): void;

	removeFromPreferencesWithCompletionHandler(_?: (p1: NSError) => void): void;

	saveToPreferencesWithCompletionHandler(_?: (p1: NSError) => void): void;
}

enum NEDNSProxyManagerError {

	ConfigurationInvalid = 1,

	ConfigurationDisabled = 2,

	ConfigurationStale = 3,

	ConfigurationCannotBeRemoved = 4
}


declare class NEDNSProxyProvider extends NEProvider {

	readonly systemDNSSettings: NSArray<NEDNSSettings>;

	cancelProxyWithError(_?: NSError): void;

	handleNewFlow(_: NEAppProxyFlow): boolean;

	handleNewUDPFlowInitialRemoteEndpoint(_: NEAppProxyUDPFlow, initialRemoteEndpoint: NWEndpoint): boolean;

	startProxyWithOptionsCompletionHandler(_?: NSDictionary<string, any>, completionHandler?: (p1: NSError) => void): void;

	stopProxyWithReasonCompletionHandler(_: NEProviderStopReason, completionHandler: () => void): void;
}

declare class NEDNSProxyProviderProtocol extends NEVPNProtocol {

	setProviderBundleIdentifier(_: string)

	providerBundleIdentifier: string;

	setProviderConfiguration(_: NSDictionary<string, any>)

	providerConfiguration: NSDictionary<string, any>;
}

declare class NEDNSSettings extends NSObject implements NSCopying, NSSecureCoding {

	setDomainName(_: string)

	domainName: string;

	setMatchDomains(_: NSArray<string>)

	matchDomains: NSArray<string>;

	setMatchDomainsNoSearch(_: boolean)

	matchDomainsNoSearch: boolean;

	setSearchDomains(_: NSArray<string>)

	searchDomains: NSArray<string>;

	readonly servers: NSArray<string>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(servers: NSArray<string> | string[]);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEEvaluateConnectionRule extends NSObject implements NSCopying, NSSecureCoding {

	readonly action: NEEvaluateConnectionRuleAction;

	readonly matchDomains: NSArray<string>;

	setProbeURL(_: NSURL)

	probeURL: NSURL;

	setUseDNSServers(_: NSArray<string>)

	useDNSServers: NSArray<string>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(matchDomains: NSArray<string> | string[], andAction: NEEvaluateConnectionRuleAction);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NEEvaluateConnectionRuleAction {

	ConnectIfNeeded = 1,

	NeverConnect = 2
}


enum NEFilterAction {

	Invalid = 0,

	Allow = 1,

	Drop = 2,

	Remediate = 3,

	FilterData = 4
}


declare var NEFilterConfigurationDidChangeNotification: string;

declare class NEFilterDataProvider extends NEFilterProvider {

	applySettingsCompletionHandler(_?: NEFilterSettings, completionHandler?: (p1: NSError) => void): void;

	handleInboundDataCompleteForFlow(_: NEFilterFlow): NEFilterDataVerdict;

	handleInboundDataFromFlowReadBytesStartOffsetReadBytes(_: NEFilterFlow, readBytesStartOffset: number, readBytes: NSData): NEFilterDataVerdict;

	handleNewFlow(_: NEFilterFlow): NEFilterNewFlowVerdict;

	handleOutboundDataCompleteForFlow(_: NEFilterFlow): NEFilterDataVerdict;

	handleOutboundDataFromFlowReadBytesStartOffsetReadBytes(_: NEFilterFlow, readBytesStartOffset: number, readBytes: NSData): NEFilterDataVerdict;

	resumeFlowWithVerdict(_: NEFilterFlow, withVerdict: NEFilterVerdict): void;

	updateFlowUsingVerdictForDirection(_: NEFilterSocketFlow, usingVerdict: NEFilterDataVerdict, forDirection: NETrafficDirection): void;
}

declare class NEFilterDataVerdict extends NEFilterVerdict implements NSCopying, NSSecureCoding {

	static allowVerdict(): NEFilterDataVerdict;

	static dataVerdictWithPassBytesPeekBytes(_: number, peekBytes: number): NEFilterDataVerdict;

	static dropVerdict(): NEFilterDataVerdict;

	static pauseVerdict(): NEFilterDataVerdict;

	setStatisticsReportFrequency(_: NEFilterReportFrequency)

	statisticsReportFrequency: NEFilterReportFrequency;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var NEFilterErrorDomain: string;

declare class NEFilterFlow extends NSObject implements NSCopying, NSSecureCoding {

	readonly URL: NSURL;

	readonly direction: NETrafficDirection;

	readonly identifier: NSUUID;

	readonly sourceAppAuditToken: NSData;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEFilterManager extends NSObject {

	static sharedManager(): NEFilterManager;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setGrade(_: NEFilterManagerGrade)

	grade: NEFilterManagerGrade;

	setLocalizedDescription(_: string)

	localizedDescription: string;

	setProviderConfiguration(_: NEFilterProviderConfiguration)

	providerConfiguration: NEFilterProviderConfiguration;

	loadFromPreferencesWithCompletionHandler(_?: (p1: NSError) => void): void;

	removeFromPreferencesWithCompletionHandler(_?: (p1: NSError) => void): void;

	saveToPreferencesWithCompletionHandler(_?: (p1: NSError) => void): void;
}

enum NEFilterManagerError {

	ConfigurationInvalid = 1,

	ConfigurationDisabled = 2,

	ConfigurationStale = 3,

	ConfigurationCannotBeRemoved = 4,

	ConfigurationPermissionDenied = 5,

	ConfigurationInternalError = 6
}


enum NEFilterManagerGrade {

	Firewall = 1,

	Inspector = 2
}


declare class NEFilterNewFlowVerdict extends NEFilterVerdict implements NSCopying, NSSecureCoding {

	static allowVerdict(): NEFilterNewFlowVerdict;

	static dropVerdict(): NEFilterNewFlowVerdict;

	static filterDataVerdictWithFilterInboundPeekInboundBytesFilterOutboundPeekOutboundBytes(_: boolean, peekInboundBytes: number, filterOutbound: boolean, peekOutboundBytes: number): NEFilterNewFlowVerdict;

	static pauseVerdict(): NEFilterNewFlowVerdict;

	setStatisticsReportFrequency(_: NEFilterReportFrequency)

	statisticsReportFrequency: NEFilterReportFrequency;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEFilterPacketContext extends NSObject {
}

declare class NEFilterPacketProvider extends NEFilterProvider {

	setPacketHandler(_: (p1: NEFilterPacketContext, p2: NSObject, p3: NETrafficDirection, p4: any, p5: number) => NEFilterPacketProviderVerdict)

	packetHandler: (p1: NEFilterPacketContext, p2: NSObject, p3: NETrafficDirection, p4: any, p5: number) => NEFilterPacketProviderVerdict;

	allowPacket(_: NEPacket): void;

	delayCurrentPacket(_: NEFilterPacketContext): NEPacket;
}

enum NEFilterPacketProviderVerdict {

	Allow = 0,

	Drop = 1,

	Delay = 2
}


declare class NEFilterProvider extends NEProvider {

	readonly filterConfiguration: NEFilterProviderConfiguration;

	handleReport(_: NEFilterReport): void;

	startFilterWithCompletionHandler(_?: (p1: NSError) => void): void;

	stopFilterWithReasonCompletionHandler(_: NEProviderStopReason, completionHandler: () => void): void;
}

declare class NEFilterProviderConfiguration extends NSObject implements NSCopying, NSSecureCoding {

	setFilterDataProviderBundleIdentifier(_: string)

	filterDataProviderBundleIdentifier: string;

	setFilterPacketProviderBundleIdentifier(_: string)

	filterPacketProviderBundleIdentifier: string;

	setFilterPackets(_: boolean)

	filterPackets: boolean;

	setFilterSockets(_: boolean)

	filterSockets: boolean;

	setIdentityReference(_: NSData)

	identityReference: NSData;

	setOrganization(_: string)

	organization: string;

	setPasswordReference(_: NSData)

	passwordReference: NSData;

	setServerAddress(_: string)

	serverAddress: string;

	setUsername(_: string)

	username: string;

	setVendorConfiguration(_: NSDictionary<string, any>)

	vendorConfiguration: NSDictionary<string, any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEFilterReport extends NSObject implements NSCopying, NSSecureCoding {

	readonly action: NEFilterAction;

	readonly bytesInboundCount: number;

	readonly bytesOutboundCount: number;

	readonly event: NEFilterReportEvent;

	readonly flow: NEFilterFlow;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NEFilterReportEvent {

	NewFlow = 1,

	DataDecision = 2,

	FlowClosed = 3,

	Statistics = 4
}


enum NEFilterReportFrequency {

	None = 0,

	Low = 1,

	Medium = 2,

	High = 3
}


declare class NEFilterRule extends NSObject implements NSCopying, NSSecureCoding {

	readonly action: NEFilterAction;

	readonly networkRule: NENetworkRule;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(networkRule: NENetworkRule, action: NEFilterAction);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEFilterSettings extends NSObject implements NSCopying, NSSecureCoding {

	readonly defaultAction: NEFilterAction;

	readonly rules: NSArray<NEFilterRule>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(rules: NSArray<NEFilterRule> | NEFilterRule[], defaultAction: NEFilterAction);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEFilterSocketFlow extends NEFilterFlow implements NSCopying, NSSecureCoding {

	readonly localEndpoint: NWEndpoint;

	readonly remoteEndpoint: NWEndpoint;

	readonly socketFamily: number;

	readonly socketProtocol: number;

	readonly socketType: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEFilterVerdict extends NSObject implements NSCopying, NSSecureCoding {

	setShouldReport(_: boolean)

	shouldReport: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEFlowMetaData extends NSObject implements NSCopying, NSSecureCoding {

	readonly filterFlowIdentifier: NSUUID;

	readonly sourceAppAuditToken: NSData;

	readonly sourceAppSigningIdentifier: string;

	readonly sourceAppUniqueIdentifier: NSData;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEIPv4Route extends NSObject implements NSCopying, NSSecureCoding {

	static defaultRoute(): NEIPv4Route;

	readonly destinationAddress: string;

	readonly destinationSubnetMask: string;

	setGatewayAddress(_: string)

	gatewayAddress: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(destinationAddress: string, subnetMask: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEIPv4Settings extends NSObject implements NSCopying, NSSecureCoding {

	readonly addresses: NSArray<string>;

	setExcludedRoutes(_: NSArray<NEIPv4Route>)

	excludedRoutes: NSArray<NEIPv4Route>;

	setIncludedRoutes(_: NSArray<NEIPv4Route>)

	includedRoutes: NSArray<NEIPv4Route>;

	readonly subnetMasks: NSArray<string>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(addresses: NSArray<string> | string[], subnetMasks: NSArray<string> | string[]);

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEIPv6Route extends NSObject implements NSCopying, NSSecureCoding {

	static defaultRoute(): NEIPv6Route;

	readonly destinationAddress: string;

	readonly destinationNetworkPrefixLength: number;

	setGatewayAddress(_: string)

	gatewayAddress: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(destinationAddress: string, networkPrefixLength: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEIPv6Settings extends NSObject implements NSCopying, NSSecureCoding {

	readonly addresses: NSArray<string>;

	setExcludedRoutes(_: NSArray<NEIPv6Route>)

	excludedRoutes: NSArray<NEIPv6Route>;

	setIncludedRoutes(_: NSArray<NEIPv6Route>)

	includedRoutes: NSArray<NEIPv6Route>;

	readonly networkPrefixLengths: NSArray<number>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(addresses: NSArray<string> | string[], networkPrefixLengths: NSArray<number> | number[]);

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NENetworkRule extends NSObject implements NSCopying, NSSecureCoding {

	readonly matchDirection: NETrafficDirection;

	readonly matchLocalNetwork: NWHostEndpoint;

	readonly matchLocalPrefix: number;

	readonly matchProtocol: NENetworkRuleProtocol;

	readonly matchRemoteEndpoint: NWHostEndpoint;

	readonly matchRemotePrefix: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(destinationHost: NWHostEndpoint, protocol: NENetworkRuleProtocol);

	static create(destinationNetwork: NWHostEndpoint, prefix: number, protocol: NENetworkRuleProtocol);

	static create(remoteNetwork: NWHostEndpoint, remotePrefix: number, localNetwork: NWHostEndpoint, localPrefix: number, protocol: NENetworkRuleProtocol, direction: NETrafficDirection);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NENetworkRuleProtocol {

	Any = 0,

	TCP = 1,

	UDP = 2
}


declare class NEOnDemandRule extends NSObject implements NSCopying, NSSecureCoding {

	setDNSSearchDomainMatch(_: NSArray<string>)

	DNSSearchDomainMatch: NSArray<string>;

	setDNSServerAddressMatch(_: NSArray<string>)

	DNSServerAddressMatch: NSArray<string>;

	setSSIDMatch(_: NSArray<string>)

	SSIDMatch: NSArray<string>;

	readonly action: NEOnDemandRuleAction;

	setInterfaceTypeMatch(_: NEOnDemandRuleInterfaceType)

	interfaceTypeMatch: NEOnDemandRuleInterfaceType;

	setProbeURL(_: NSURL)

	probeURL: NSURL;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NEOnDemandRuleAction {

	Connect = 1,

	Disconnect = 2,

	EvaluateConnection = 3,

	Ignore = 4
}


declare class NEOnDemandRuleConnect extends NEOnDemandRule {
}

declare class NEOnDemandRuleDisconnect extends NEOnDemandRule {
}

declare class NEOnDemandRuleEvaluateConnection extends NEOnDemandRule {

	setConnectionRules(_: NSArray<NEEvaluateConnectionRule>)

	connectionRules: NSArray<NEEvaluateConnectionRule>;
}

declare class NEOnDemandRuleIgnore extends NEOnDemandRule {
}

enum NEOnDemandRuleInterfaceType {

	Any = 0,

	Ethernet = 1,

	WiFi = 2,

	Cellular = 3
}


declare class NEPacket extends NSObject implements NSCopying, NSSecureCoding {

	readonly data: NSData;

	readonly direction: NETrafficDirection;

	readonly metadata: NEFlowMetaData;

	readonly protocolFamily: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(data: NSData, protocolFamily: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEPacketTunnelFlow extends NSObject {

	readPacketObjectsWithCompletionHandler(_: (p1: NSArray<NEPacket>) => void): void;

	readPacketsWithCompletionHandler(_: (p1: NSArray<NSData>, p2: NSArray<number>) => void): void;

	writePacketObjects(_: NSArray<NEPacket>): boolean;

	writePacketsWithProtocols(_: NSArray<NSData>, withProtocols: NSArray<number>): boolean;
}

declare class NEPacketTunnelNetworkSettings extends NETunnelNetworkSettings {

	setIPv4Settings(_: NEIPv4Settings)

	IPv4Settings: NEIPv4Settings;

	setIPv6Settings(_: NEIPv6Settings)

	IPv6Settings: NEIPv6Settings;

	setMTU(_: number)

	MTU: number;

	setTunnelOverheadBytes(_: number)

	tunnelOverheadBytes: number;
}

declare class NEPacketTunnelProvider extends NETunnelProvider {

	readonly packetFlow: NEPacketTunnelFlow;

	cancelTunnelWithError(_?: NSError): void;

	createTCPConnectionThroughTunnelToEndpointEnableTLSTLSParametersDelegate(_: NWEndpoint, enableTLS: boolean, TLSParameters?: NWTLSParameters, delegate?: any): NWTCPConnection;

	createUDPSessionThroughTunnelToEndpointFromEndpoint(_: NWEndpoint, fromEndpoint?: NWHostEndpoint): NWUDPSession;

	startTunnelWithOptionsCompletionHandler(_?: NSDictionary<string, NSObject>, completionHandler?: (p1: NSError) => void): void;

	stopTunnelWithReasonCompletionHandler(_: NEProviderStopReason, completionHandler: () => void): void;
}

declare class NEProvider extends NSObject {

	static startSystemExtensionMode(): void;

	readonly defaultPath: NWPath;

	createTCPConnectionToEndpointEnableTLSTLSParametersDelegate(_: NWEndpoint, enableTLS: boolean, TLSParameters?: NWTLSParameters, delegate?: any): NWTCPConnection;

	createUDPSessionToEndpointFromEndpoint(_: NWEndpoint, fromEndpoint?: NWHostEndpoint): NWUDPSession;

	sleepWithCompletionHandler(_: () => void): void;

	wake(): void;
}

enum NEProviderStopReason {

	None = 0,

	UserInitiated = 1,

	ProviderFailed = 2,

	NoNetworkAvailable = 3,

	UnrecoverableNetworkChange = 4,

	ProviderDisabled = 5,

	AuthenticationCanceled = 6,

	ConfigurationFailed = 7,

	IdleTimeout = 8,

	ConfigurationDisabled = 9,

	ConfigurationRemoved = 10,

	Superceded = 11,

	UserLogout = 12,

	UserSwitch = 13,

	ConnectionFailed = 14,

	Sleep = 15,

	AppUpdate = 16
}


declare class NEProxyServer extends NSObject implements NSCopying, NSSecureCoding {

	readonly address: string;

	setAuthenticationRequired(_: boolean)

	authenticationRequired: boolean;

	setPassword(_: string)

	password: string;

	readonly port: number;

	setUsername(_: string)

	username: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(address: string, port: number);

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEProxySettings extends NSObject implements NSCopying, NSSecureCoding {

	setHTTPEnabled(_: boolean)

	HTTPEnabled: boolean;

	setHTTPSEnabled(_: boolean)

	HTTPSEnabled: boolean;

	setHTTPSServer(_: NEProxyServer)

	HTTPSServer: NEProxyServer;

	setHTTPServer(_: NEProxyServer)

	HTTPServer: NEProxyServer;

	setAutoProxyConfigurationEnabled(_: boolean)

	autoProxyConfigurationEnabled: boolean;

	setExceptionList(_: NSArray<string>)

	exceptionList: NSArray<string>;

	setExcludeSimpleHostnames(_: boolean)

	excludeSimpleHostnames: boolean;

	setMatchDomains(_: NSArray<string>)

	matchDomains: NSArray<string>;

	setProxyAutoConfigurationJavaScript(_: string)

	proxyAutoConfigurationJavaScript: string;

	setProxyAutoConfigurationURL(_: NSURL)

	proxyAutoConfigurationURL: NSURL;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NETrafficDirection {

	Any = 0,

	Inbound = 1,

	Outbound = 2
}


declare class NETransparentProxyManager extends NEVPNManager {

	static loadAllFromPreferencesWithCompletionHandler(_?: (p1: NSArray<NETransparentProxyManager>, p2: NSError) => void): void;
}

declare class NETransparentProxyNetworkSettings extends NETunnelNetworkSettings {

	setExcludedNetworkRules(_: NSArray<NENetworkRule>)

	excludedNetworkRules: NSArray<NENetworkRule>;

	setIncludedNetworkRules(_: NSArray<NENetworkRule>)

	includedNetworkRules: NSArray<NENetworkRule>;
}

declare class NETunnelNetworkSettings extends NSObject implements NSCopying, NSSecureCoding {

	setDNSSettings(_: NEDNSSettings)

	DNSSettings: NEDNSSettings;

	setProxySettings(_: NEProxySettings)

	proxySettings: NEProxySettings;

	readonly tunnelRemoteAddress: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(tunnelRemoteAddress: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NETunnelProvider extends NEProvider {

	readonly appRules: NSArray<NEAppRule>;

	readonly protocolConfiguration: NEVPNProtocol;

	setReasserting(_: boolean)

	reasserting: boolean;

	readonly routingMethod: NETunnelProviderRoutingMethod;

	handleAppMessageCompletionHandler(_: NSData, completionHandler?: (p1: NSData) => void): void;

	setTunnelNetworkSettingsCompletionHandler(_?: NETunnelNetworkSettings, completionHandler?: (p1: NSError) => void): void;
}

enum NETunnelProviderError {

	NetworkSettingsInvalid = 1,

	NetworkSettingsCanceled = 2,

	NetworkSettingsFailed = 3
}


declare var NETunnelProviderErrorDomain: string;

declare class NETunnelProviderManager extends NEVPNManager {

	static forPerAppVPN(): NETunnelProviderManager;

	static loadAllFromPreferencesWithCompletionHandler(_?: (p1: NSArray<NETunnelProviderManager>, p2: NSError) => void): void;

	setAppRules(_: NSArray<NEAppRule>)

	appRules: NSArray<NEAppRule>;

	setCalendarDomains(_: NSArray<string>)

	calendarDomains: NSArray<string>;

	setContactsDomains(_: NSArray<string>)

	contactsDomains: NSArray<string>;

	setMailDomains(_: NSArray<string>)

	mailDomains: NSArray<string>;

	readonly routingMethod: NETunnelProviderRoutingMethod;

	setSafariDomains(_: NSArray<string>)

	safariDomains: NSArray<string>;

	copyAppRules(): NSArray<NEAppRule>;
}

declare class NETunnelProviderProtocol extends NEVPNProtocol {

	setProviderBundleIdentifier(_: string)

	providerBundleIdentifier: string;

	setProviderConfiguration(_: NSDictionary<string, any>)

	providerConfiguration: NSDictionary<string, any>;
}

enum NETunnelProviderRoutingMethod {

	DestinationIP = 1,

	SourceApplication = 2,

	NetworkRule = 3
}


declare class NETunnelProviderSession extends NEVPNConnection {

	sendProviderMessageReturnErrorResponseHandler(_: NSData, returnError?: NSError, responseHandler?: (p1: NSData) => void): boolean;

	startTunnelWithOptionsAndReturnError(andReturnError?: NSDictionary<string, any>): boolean;

	stopTunnel(): void;
}

declare var NEVPNConfigurationChangeNotification: string;

declare class NEVPNConnection extends NSObject {

	readonly connectedDate: Date;

	readonly manager: NEVPNManager;

	readonly status: NEVPNStatus;

	startVPNTunnelAndReturnError(): boolean;

	startVPNTunnelWithOptionsAndReturnError(andReturnError?: NSDictionary<string, NSObject>): boolean;

	stopVPNTunnel(): void;
}

declare var NEVPNConnectionStartOptionPassword: string;

declare var NEVPNConnectionStartOptionUsername: string;

enum NEVPNError {

	ConfigurationInvalid = 1,

	ConfigurationDisabled = 2,

	ConnectionFailed = 3,

	ConfigurationStale = 4,

	ConfigurationReadWriteFailed = 5,

	ConfigurationUnknown = 6
}


declare var NEVPNErrorDomain: string;

enum NEVPNIKEAuthenticationMethod {

	None = 0,

	Certificate = 1,

	SharedSecret = 2
}


enum NEVPNIKEv2CertificateType {

	RSA = 1,

	ECDSA256 = 2,

	ECDSA384 = 3,

	ECDSA521 = 4,

	Ed25519 = 5
}


enum NEVPNIKEv2DeadPeerDetectionRate {

	None = 0,

	Low = 1,

	Medium = 2,

	High = 3
}


enum NEVPNIKEv2DiffieHellmanGroup {

	GroupInvalid = 0,

	Group1 = 1,

	Group2 = 2,

	Group5 = 5,

	Group14 = 14,

	Group15 = 15,

	Group16 = 16,

	Group17 = 17,

	Group18 = 18,

	Group19 = 19,

	Group20 = 20,

	Group21 = 21,

	Group31 = 31
}


enum NEVPNIKEv2EncryptionAlgorithm {

	AlgorithmDES = 1,

	Algorithm3DES = 2,

	AlgorithmAES128 = 3,

	AlgorithmAES256 = 4,

	AlgorithmAES128GCM = 5,

	AlgorithmAES256GCM = 6,

	AlgorithmChaCha20Poly1305 = 7
}


enum NEVPNIKEv2IntegrityAlgorithm {

	SHA96 = 1,

	SHA160 = 2,

	SHA256 = 3,

	SHA384 = 4,

	SHA512 = 5
}


declare class NEVPNIKEv2SecurityAssociationParameters extends NSObject implements NSCopying, NSSecureCoding {

	setDiffieHellmanGroup(_: NEVPNIKEv2DiffieHellmanGroup)

	diffieHellmanGroup: NEVPNIKEv2DiffieHellmanGroup;

	setEncryptionAlgorithm(_: NEVPNIKEv2EncryptionAlgorithm)

	encryptionAlgorithm: NEVPNIKEv2EncryptionAlgorithm;

	setIntegrityAlgorithm(_: NEVPNIKEv2IntegrityAlgorithm)

	integrityAlgorithm: NEVPNIKEv2IntegrityAlgorithm;

	setLifetimeMinutes(_: number)

	lifetimeMinutes: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NEVPNIKEv2TLSVersion {

	VersionDefault = 0,

	Version1_0 = 1,

	Version1_1 = 2,

	Version1_2 = 3
}


declare class NEVPNManager extends NSObject {

	static sharedManager(): NEVPNManager;

	readonly connection: NEVPNConnection;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setLocalizedDescription(_: string)

	localizedDescription: string;

	setOnDemandEnabled(_: boolean)

	isOnDemandEnabled: boolean;

	setOnDemandRules(_: NSArray<NEOnDemandRule>)

	onDemandRules: NSArray<NEOnDemandRule>;

	setProtocolConfiguration(_: NEVPNProtocol)

	protocolConfiguration: NEVPNProtocol;

	loadFromPreferencesWithCompletionHandler(_?: (p1: NSError) => void): void;

	removeFromPreferencesWithCompletionHandler(_?: (p1: NSError) => void): void;

	saveToPreferencesWithCompletionHandler(_?: (p1: NSError) => void): void;

	setAuthorization(_: any): void;
}

declare class NEVPNProtocol extends NSObject implements NSCopying, NSSecureCoding {

	setDisconnectOnSleep(_: boolean)

	disconnectOnSleep: boolean;

	setExcludeLocalNetworks(_: boolean)

	excludeLocalNetworks: boolean;

	setIdentityData(_: NSData)

	identityData: NSData;

	setIdentityDataPassword(_: string)

	identityDataPassword: string;

	setIdentityReference(_: NSData)

	identityReference: NSData;

	setIncludeAllNetworks(_: boolean)

	includeAllNetworks: boolean;

	setPasswordReference(_: NSData)

	passwordReference: NSData;

	setProxySettings(_: NEProxySettings)

	proxySettings: NEProxySettings;

	setServerAddress(_: string)

	serverAddress: string;

	setUsername(_: string)

	username: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NEVPNProtocolIKEv2 extends NEVPNProtocolIPSec {

	readonly IKESecurityAssociationParameters: NEVPNIKEv2SecurityAssociationParameters;

	setCertificateType(_: NEVPNIKEv2CertificateType)

	certificateType: NEVPNIKEv2CertificateType;

	readonly childSecurityAssociationParameters: NEVPNIKEv2SecurityAssociationParameters;

	setDeadPeerDetectionRate(_: NEVPNIKEv2DeadPeerDetectionRate)

	deadPeerDetectionRate: NEVPNIKEv2DeadPeerDetectionRate;

	setDisableMOBIKE(_: boolean)

	disableMOBIKE: boolean;

	setDisableRedirect(_: boolean)

	disableRedirect: boolean;

	setEnablePFS(_: boolean)

	enablePFS: boolean;

	setEnableRevocationCheck(_: boolean)

	enableRevocationCheck: boolean;

	setMaximumTLSVersion(_: NEVPNIKEv2TLSVersion)

	maximumTLSVersion: NEVPNIKEv2TLSVersion;

	setMinimumTLSVersion(_: NEVPNIKEv2TLSVersion)

	minimumTLSVersion: NEVPNIKEv2TLSVersion;

	setServerCertificateCommonName(_: string)

	serverCertificateCommonName: string;

	setServerCertificateIssuerCommonName(_: string)

	serverCertificateIssuerCommonName: string;

	setStrictRevocationCheck(_: boolean)

	strictRevocationCheck: boolean;

	setUseConfigurationAttributeInternalIPSubnet(_: boolean)

	useConfigurationAttributeInternalIPSubnet: boolean;
}

declare class NEVPNProtocolIPSec extends NEVPNProtocol {

	setAuthenticationMethod(_: NEVPNIKEAuthenticationMethod)

	authenticationMethod: NEVPNIKEAuthenticationMethod;

	setLocalIdentifier(_: string)

	localIdentifier: string;

	setRemoteIdentifier(_: string)

	remoteIdentifier: string;

	setSharedSecretReference(_: NSData)

	sharedSecretReference: NSData;

	setUseExtendedAuthentication(_: boolean)

	useExtendedAuthentication: boolean;
}

enum NEVPNStatus {

	Invalid = 0,

	Disconnected = 1,

	Connecting = 2,

	Connected = 3,

	Reasserting = 4,

	Disconnecting = 5
}


declare var NEVPNStatusDidChangeNotification: string;

declare class NWBonjourServiceEndpoint extends NWEndpoint {

	static endpointWithNameTypeDomain(_: string, type: string, domain: string): NWBonjourServiceEndpoint;

	readonly domain: string;

	readonly name: string;

	readonly type: string;
}

declare class NWEndpoint extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class NWHostEndpoint extends NWEndpoint {

	static endpointWithHostnamePort(_: string, port: string): NWHostEndpoint;

	readonly hostname: string;

	readonly port: string;
}

declare class NWPath extends NSObject {

	readonly isExpensive: boolean;

	readonly status: NWPathStatus;

	isEqualToPath(_: NWPath): boolean;
}

enum NWPathStatus {

	Invalid = 0,

	Satisfied = 1,

	Unsatisfied = 2,

	Satisfiable = 3
}


declare class NWTCPConnection extends NSObject {

	readonly connectedPath: NWPath;

	readonly endpoint: NWEndpoint;

	readonly error: NSError;

	readonly hasBetterPath: boolean;

	readonly localAddress: NWEndpoint;

	readonly remoteAddress: NWEndpoint;

	readonly state: NWTCPConnectionState;

	readonly txtRecord: NSData;

	readonly isViable: boolean;

	static create(upgradeForConnection: NWTCPConnection);

	cancel(): void;

	readLengthCompletionHandler(_: number, completionHandler?: (p1: NSData, p2: NSError) => void): void;

	readMinimumLengthMaximumLengthCompletionHandler(_: number, maximumLength: number, completionHandler?: (p1: NSData, p2: NSError) => void): void;

	writeCompletionHandler(_: NSData, completionHandler?: (p1: NSError) => void): void;

	writeClose(): void;
}

interface NWTCPConnectionAuthenticationDelegate extends NSObjectProtocol {

	evaluateTrustForConnectionPeerCertificateChainCompletionHandler?(_: NWTCPConnection, peerCertificateChain: NSArray<any>, completionHandler: (p1: any) => void): void;

	provideIdentityForConnectionCompletionHandler?(_: NWTCPConnection, completionHandler: (p1: any, p2: NSArray<any>) => void): void;

	shouldEvaluateTrustForConnection?(_: NWTCPConnection): boolean;

	shouldProvideIdentityForConnection?(_: NWTCPConnection): boolean;
}
declare var NWTCPConnectionAuthenticationDelegate: {

	prototype: NWTCPConnectionAuthenticationDelegate;
};

enum NWTCPConnectionState {

	Invalid = 0,

	Connecting = 1,

	Waiting = 2,

	Connected = 3,

	Disconnected = 4,

	Cancelled = 5
}


declare class NWTLSParameters extends NSObject {

	setSSLCipherSuites(_: NSSet<number>)

	SSLCipherSuites: NSSet<number>;

	setTLSSessionID(_: NSData)

	TLSSessionID: NSData;

	setMaximumSSLProtocolVersion(_: number)

	maximumSSLProtocolVersion: number;

	setMinimumSSLProtocolVersion(_: number)

	minimumSSLProtocolVersion: number;
}

declare class NWUDPSession extends NSObject {

	readonly currentPath: NWPath;

	readonly endpoint: NWEndpoint;

	readonly hasBetterPath: boolean;

	readonly maximumDatagramLength: number;

	readonly resolvedEndpoint: NWEndpoint;

	readonly state: NWUDPSessionState;

	readonly isViable: boolean;

	static create(upgradeForSession: NWUDPSession);

	cancel(): void;

	setReadHandlerMaxDatagrams(_?: (p1: NSArray<NSData>, p2: NSError) => void, maxDatagrams: number): void;

	tryNextResolvedEndpoint(): void;

	writeDatagramCompletionHandler(_: NSData, completionHandler?: (p1: NSError) => void): void;

	writeMultipleDatagramsCompletionHandler(_: NSArray<NSData>, completionHandler?: (p1: NSError) => void): void;
}

enum NWUDPSessionState {

	Invalid = 0,

	Waiting = 1,

	Preparing = 2,

	Ready = 3,

	Failed = 4,

	Cancelled = 5
}

