
declare function CNCopySupportedInterfaces(): NSArray<any>;

declare function CNMarkPortalOffline(interfaceName: string): boolean;

declare function CNMarkPortalOnline(interfaceName: string): boolean;

declare function CNSetSupportedSSIDs(ssidArray: NSArray<any> | any[]): boolean;

declare function DHCPClientPreferencesCopyApplicationOptions(applicationID: string, count: number): string;

declare function DHCPClientPreferencesSetApplicationOptions(applicationID: string, options: string | any, count: number): boolean;

declare function DHCPInfoGetLeaseExpirationTime(info: NSDictionary<any, any>): Date;

declare function DHCPInfoGetLeaseStartTime(info: NSDictionary<any, any>): Date;

declare function DHCPInfoGetOptionData(info: NSDictionary<any, any>, code: number): NSData;

declare function SCBondInterfaceCopyAll(prefs: any): NSArray<any>;

declare function SCBondInterfaceCopyAvailableMemberInterfaces(prefs: any): NSArray<any>;

declare function SCBondInterfaceCopyStatus(bond: any): any;

declare function SCBondInterfaceCreate(prefs: any): any;

declare function SCBondInterfaceGetMemberInterfaces(bond: any): NSArray<any>;

declare function SCBondInterfaceGetOptions(bond: any): NSDictionary<any, any>;

declare function SCBondInterfaceRemove(bond: any): boolean;

declare function SCBondInterfaceSetLocalizedDisplayName(bond: any, newName: string): boolean;

declare function SCBondInterfaceSetMemberInterfaces(bond: any, members: NSArray<any> | any[]): boolean;

declare function SCBondInterfaceSetOptions(bond: any, newOptions: NSDictionary<any, any>): boolean;

declare function SCBondStatusGetInterfaceStatus(bondStatus: any, interface: any): NSDictionary<any, any>;

declare function SCBondStatusGetMemberInterfaces(bondStatus: any): NSArray<any>;

declare function SCBondStatusGetTypeID(): number;

declare function SCCopyLastError(): NSError;

declare function SCDynamicStoreAddTemporaryValue(store: any, key: string, value: any): boolean;

declare function SCDynamicStoreAddValue(store: any, key: string, value: any): boolean;

interface SCDynamicStoreContext {
	version: number;
	info: any;
	retain: (p1: any) => any;
	release: (p1: any) => void;
	copyDescription: (p1: any) => string;
}
declare var SCDynamicStoreContext: SCDynamicStoreContext;

declare function SCDynamicStoreCopyComputerName(store: any, nameEncoding: number): string;

declare function SCDynamicStoreCopyConsoleUser(store: any, uid: number, gid: number): string;

declare function SCDynamicStoreCopyDHCPInfo(store: any, serviceID: string): NSDictionary<any, any>;

declare function SCDynamicStoreCopyKeyList(store: any, pattern: string): NSArray<any>;

declare function SCDynamicStoreCopyLocalHostName(store: any): string;

declare function SCDynamicStoreCopyLocation(store: any): string;

declare function SCDynamicStoreCopyMultiple(store: any, keys: NSArray<any> | any[], patterns: NSArray<any> | any[]): NSDictionary<any, any>;

declare function SCDynamicStoreCopyNotifiedKeys(store: any): NSArray<any>;

declare function SCDynamicStoreCopyProxies(store: any): NSDictionary<any, any>;

declare function SCDynamicStoreCopyValue(store: any, key: string): any;

declare function SCDynamicStoreCreate(allocator: any, name: string, callout: (p1: any, p2: NSArray<any>, p3: any) => void, context: SCDynamicStoreContext): any;

declare function SCDynamicStoreCreateRunLoopSource(allocator: any, store: any, order: number): any;

declare function SCDynamicStoreCreateWithOptions(allocator: any, name: string, storeOptions: NSDictionary<any, any>, callout: (p1: any, p2: NSArray<any>, p3: any) => void, context: SCDynamicStoreContext): any;

declare function SCDynamicStoreGetTypeID(): number;

declare function SCDynamicStoreKeyCreateComputerName(allocator: any): string;

declare function SCDynamicStoreKeyCreateConsoleUser(allocator: any): string;

declare function SCDynamicStoreKeyCreateHostNames(allocator: any): string;

declare function SCDynamicStoreKeyCreateLocation(allocator: any): string;

declare function SCDynamicStoreKeyCreateNetworkGlobalEntity(allocator: any, domain: string, entity: string): string;

declare function SCDynamicStoreKeyCreateNetworkInterface(allocator: any, domain: string): string;

declare function SCDynamicStoreKeyCreateNetworkInterfaceEntity(allocator: any, domain: string, ifname: string, entity: string): string;

declare function SCDynamicStoreKeyCreateNetworkServiceEntity(allocator: any, domain: string, serviceID: string, entity: string): string;

declare function SCDynamicStoreKeyCreateProxies(allocator: any): string;

declare function SCDynamicStoreNotifyValue(store: any, key: string): boolean;

declare function SCDynamicStoreRemoveValue(store: any, key: string): boolean;

declare function SCDynamicStoreSetDispatchQueue(store: any, queue: NSObject): boolean;

declare function SCDynamicStoreSetMultiple(store: any, keysToSet: NSDictionary<any, any>, keysToRemove: NSArray<any> | any[], keysToNotify: NSArray<any> | any[]): boolean;

declare function SCDynamicStoreSetNotificationKeys(store: any, keys: NSArray<any> | any[], patterns: NSArray<any> | any[]): boolean;

declare function SCDynamicStoreSetValue(store: any, key: string, value: any): boolean;

declare function SCError(): number;

declare function SCErrorString(status: number): string;

interface SCNetworkConnectionContext {
	version: number;
	info: any;
	retain: (p1: any) => any;
	release: (p1: any) => void;
	copyDescription: (p1: any) => string;
}
declare var SCNetworkConnectionContext: SCNetworkConnectionContext;

declare function SCNetworkConnectionCopyExtendedStatus(connection: any): NSDictionary<any, any>;

declare function SCNetworkConnectionCopyServiceID(connection: any): string;

declare function SCNetworkConnectionCopyStatistics(connection: any): NSDictionary<any, any>;

declare function SCNetworkConnectionCopyUserOptions(connection: any): NSDictionary<any, any>;

declare function SCNetworkConnectionCopyUserPreferences(selectionOptions: NSDictionary<any, any>, serviceID: string, userOptions: NSDictionary<any, any>): boolean;

declare function SCNetworkConnectionCreateWithServiceID(allocator: any, serviceID: string, callout: (p1: any, p2: SCNetworkConnectionStatus, p3: any) => void, context: SCNetworkConnectionContext): any;

declare function SCNetworkConnectionGetStatus(connection: any): SCNetworkConnectionStatus;

declare function SCNetworkConnectionGetTypeID(): number;

enum SCNetworkConnectionPPPStatus {

	kSCNetworkConnectionPPPDisconnected = 0,

	kSCNetworkConnectionPPPInitializing = 1,

	kSCNetworkConnectionPPPConnectingLink = 2,

	kSCNetworkConnectionPPPDialOnTraffic = 3,

	kSCNetworkConnectionPPPNegotiatingLink = 4,

	kSCNetworkConnectionPPPAuthenticating = 5,

	kSCNetworkConnectionPPPWaitingForCallBack = 6,

	kSCNetworkConnectionPPPNegotiatingNetwork = 7,

	kSCNetworkConnectionPPPConnected = 8,

	kSCNetworkConnectionPPPTerminating = 9,

	kSCNetworkConnectionPPPDisconnectingLink = 10,

	kSCNetworkConnectionPPPHoldingLinkOff = 11,

	kSCNetworkConnectionPPPSuspended = 12,

	kSCNetworkConnectionPPPWaitingForRedial = 13
}


declare function SCNetworkConnectionScheduleWithRunLoop(connection: any, runLoop: any, runLoopMode: string): boolean;

declare function SCNetworkConnectionSetDispatchQueue(connection: any, queue: NSObject): boolean;

declare function SCNetworkConnectionStart(connection: any, userOptions: NSDictionary<any, any>, linger: boolean): boolean;

enum SCNetworkConnectionStatus {

	kSCNetworkConnectionInvalid = -1,

	kSCNetworkConnectionDisconnected = 0,

	kSCNetworkConnectionConnecting = 1,

	kSCNetworkConnectionConnected = 2,

	kSCNetworkConnectionDisconnecting = 3
}


declare function SCNetworkConnectionStop(connection: any, forceDisconnect: boolean): boolean;

declare function SCNetworkConnectionUnscheduleFromRunLoop(connection: any, runLoop: any, runLoopMode: string): boolean;

declare function SCNetworkInterfaceCopyAll(): NSArray<any>;

declare function SCNetworkInterfaceCopyMTU(interface: any, mtu_cur: number, mtu_min: number, mtu_max: number): boolean;

declare function SCNetworkInterfaceCopyMediaOptions(interface: any, current: NSDictionary<any, any>, active: NSDictionary<any, any>, available: NSArray<any>, filter: boolean): boolean;

declare function SCNetworkInterfaceCopyMediaSubTypeOptions(available: NSArray<any> | any[], subType: string): NSArray<any>;

declare function SCNetworkInterfaceCopyMediaSubTypes(available: NSArray<any> | any[]): NSArray<any>;

declare function SCNetworkInterfaceCreateWithInterface(interface: any, interfaceType: string): any;

declare function SCNetworkInterfaceForceConfigurationRefresh(interface: any): boolean;

declare function SCNetworkInterfaceGetBSDName(interface: any): string;

declare function SCNetworkInterfaceGetConfiguration(interface: any): NSDictionary<any, any>;

declare function SCNetworkInterfaceGetExtendedConfiguration(interface: any, extendedType: string): NSDictionary<any, any>;

declare function SCNetworkInterfaceGetHardwareAddressString(interface: any): string;

declare function SCNetworkInterfaceGetInterface(interface: any): any;

declare function SCNetworkInterfaceGetInterfaceType(interface: any): string;

declare function SCNetworkInterfaceGetLocalizedDisplayName(interface: any): string;

declare function SCNetworkInterfaceGetSupportedInterfaceTypes(interface: any): NSArray<any>;

declare function SCNetworkInterfaceGetSupportedProtocolTypes(interface: any): NSArray<any>;

declare function SCNetworkInterfaceGetTypeID(): number;

declare function SCNetworkInterfaceSetConfiguration(interface: any, config: NSDictionary<any, any>): boolean;

declare function SCNetworkInterfaceSetExtendedConfiguration(interface: any, extendedType: string, config: NSDictionary<any, any>): boolean;

declare function SCNetworkInterfaceSetMTU(interface: any, mtu: number): boolean;

declare function SCNetworkInterfaceSetMediaOptions(interface: any, subtype: string, options: NSArray<any> | any[]): boolean;

declare function SCNetworkProtocolGetConfiguration(protocol: any): NSDictionary<any, any>;

declare function SCNetworkProtocolGetEnabled(protocol: any): boolean;

declare function SCNetworkProtocolGetProtocolType(protocol: any): string;

declare function SCNetworkProtocolGetTypeID(): number;

declare function SCNetworkProtocolSetConfiguration(protocol: any, config: NSDictionary<any, any>): boolean;

declare function SCNetworkProtocolSetEnabled(protocol: any, enabled: boolean): boolean;

interface SCNetworkReachabilityContext {
	version: number;
	info: any;
	retain: (p1: any) => any;
	release: (p1: any) => void;
	copyDescription: (p1: any) => string;
}
declare var SCNetworkReachabilityContext: SCNetworkReachabilityContext;

declare function SCNetworkReachabilityCreateWithAddress(allocator: any, address: sockaddr): any;

declare function SCNetworkReachabilityCreateWithAddressPair(allocator: any, localAddress: sockaddr, remoteAddress: sockaddr): any;

declare function SCNetworkReachabilityCreateWithName(allocator: any, nodename: string | any): any;

enum SCNetworkReachabilityFlags {

	kSCNetworkReachabilityFlagsTransientConnection = 1,

	kSCNetworkReachabilityFlagsReachable = 2,

	kSCNetworkReachabilityFlagsConnectionRequired = 4,

	kSCNetworkReachabilityFlagsConnectionOnTraffic = 8,

	kSCNetworkReachabilityFlagsInterventionRequired = 16,

	kSCNetworkReachabilityFlagsConnectionOnDemand = 32,

	kSCNetworkReachabilityFlagsIsLocalAddress = 65536,

	kSCNetworkReachabilityFlagsIsDirect = 131072,

	kSCNetworkReachabilityFlagsIsWWAN = 262144,

	kSCNetworkReachabilityFlagsConnectionAutomatic = 8
}


declare function SCNetworkReachabilityGetFlags(target: any, flags: SCNetworkReachabilityFlags): boolean;

declare function SCNetworkReachabilityGetTypeID(): number;

declare function SCNetworkReachabilityScheduleWithRunLoop(target: any, runLoop: any, runLoopMode: string): boolean;

declare function SCNetworkReachabilitySetCallback(target: any, callout: (p1: any, p2: SCNetworkReachabilityFlags, p3: any) => void, context: SCNetworkReachabilityContext): boolean;

declare function SCNetworkReachabilitySetDispatchQueue(target: any, queue: NSObject): boolean;

declare function SCNetworkReachabilityUnscheduleFromRunLoop(target: any, runLoop: any, runLoopMode: string): boolean;

declare function SCNetworkServiceAddProtocolType(service: any, protocolType: string): boolean;

declare function SCNetworkServiceCopy(prefs: any, serviceID: string): any;

declare function SCNetworkServiceCopyAll(prefs: any): NSArray<any>;

declare function SCNetworkServiceCopyProtocol(service: any, protocolType: string): any;

declare function SCNetworkServiceCopyProtocols(service: any): NSArray<any>;

declare function SCNetworkServiceCreate(prefs: any, interface: any): any;

declare function SCNetworkServiceEstablishDefaultConfiguration(service: any): boolean;

declare function SCNetworkServiceGetEnabled(service: any): boolean;

declare function SCNetworkServiceGetInterface(service: any): any;

declare function SCNetworkServiceGetName(service: any): string;

declare function SCNetworkServiceGetServiceID(service: any): string;

declare function SCNetworkServiceGetTypeID(): number;

declare function SCNetworkServiceRemove(service: any): boolean;

declare function SCNetworkServiceRemoveProtocolType(service: any, protocolType: string): boolean;

declare function SCNetworkServiceSetEnabled(service: any, enabled: boolean): boolean;

declare function SCNetworkServiceSetName(service: any, name: string): boolean;

declare function SCNetworkSetAddService(set: any, service: any): boolean;

declare function SCNetworkSetContainsInterface(set: any, interface: any): boolean;

declare function SCNetworkSetCopy(prefs: any, setID: string): any;

declare function SCNetworkSetCopyAll(prefs: any): NSArray<any>;

declare function SCNetworkSetCopyCurrent(prefs: any): any;

declare function SCNetworkSetCopyServices(set: any): NSArray<any>;

declare function SCNetworkSetCreate(prefs: any): any;

declare function SCNetworkSetGetName(set: any): string;

declare function SCNetworkSetGetServiceOrder(set: any): NSArray<any>;

declare function SCNetworkSetGetSetID(set: any): string;

declare function SCNetworkSetGetTypeID(): number;

declare function SCNetworkSetRemove(set: any): boolean;

declare function SCNetworkSetRemoveService(set: any, service: any): boolean;

declare function SCNetworkSetSetCurrent(set: any): boolean;

declare function SCNetworkSetSetName(set: any, name: string): boolean;

declare function SCNetworkSetSetServiceOrder(set: any, newOrder: NSArray<any> | any[]): boolean;

declare function SCPreferencesAddValue(prefs: any, key: string, value: any): boolean;

declare function SCPreferencesApplyChanges(prefs: any): boolean;

declare function SCPreferencesCommitChanges(prefs: any): boolean;

interface SCPreferencesContext {
	version: number;
	info: any;
	retain: (p1: any) => any;
	release: (p1: any) => void;
	copyDescription: (p1: any) => string;
}
declare var SCPreferencesContext: SCPreferencesContext;

declare function SCPreferencesCopyKeyList(prefs: any): NSArray<any>;

declare function SCPreferencesCreate(allocator: any, name: string, prefsID: string): any;

declare function SCPreferencesCreateWithAuthorization(allocator: any, name: string, prefsID: string, authorization: any): any;

declare function SCPreferencesGetSignature(prefs: any): NSData;

declare function SCPreferencesGetTypeID(): number;

declare function SCPreferencesGetValue(prefs: any, key: string): any;

declare function SCPreferencesLock(prefs: any, wait: boolean): boolean;

enum SCPreferencesNotification {

	kSCPreferencesNotificationCommit = 1,

	kSCPreferencesNotificationApply = 2
}


declare function SCPreferencesPathCreateUniqueChild(prefs: any, prefix: string): string;

declare function SCPreferencesPathGetLink(prefs: any, path: string): string;

declare function SCPreferencesPathGetValue(prefs: any, path: string): NSDictionary<any, any>;

declare function SCPreferencesPathRemoveValue(prefs: any, path: string): boolean;

declare function SCPreferencesPathSetLink(prefs: any, path: string, link: string): boolean;

declare function SCPreferencesPathSetValue(prefs: any, path: string, value: NSDictionary<any, any>): boolean;

declare function SCPreferencesRemoveValue(prefs: any, key: string): boolean;

declare function SCPreferencesScheduleWithRunLoop(prefs: any, runLoop: any, runLoopMode: string): boolean;

declare function SCPreferencesSetCallback(prefs: any, callout: (p1: any, p2: SCPreferencesNotification, p3: any) => void, context: SCPreferencesContext): boolean;

declare function SCPreferencesSetComputerName(prefs: any, name: string, nameEncoding: number): boolean;

declare function SCPreferencesSetDispatchQueue(prefs: any, queue: NSObject): boolean;

declare function SCPreferencesSetLocalHostName(prefs: any, name: string): boolean;

declare function SCPreferencesSetValue(prefs: any, key: string, value: any): boolean;

declare function SCPreferencesSynchronize(prefs: any): void;

declare function SCPreferencesUnlock(prefs: any): boolean;

declare function SCPreferencesUnscheduleFromRunLoop(prefs: any, runLoop: any, runLoopMode: string): boolean;

declare function SCVLANInterfaceCopyAll(prefs: any): NSArray<any>;

declare function SCVLANInterfaceCopyAvailablePhysicalInterfaces(): NSArray<any>;

declare function SCVLANInterfaceCreate(prefs: any, physical: any, tag: number): any;

declare function SCVLANInterfaceGetOptions(vlan: any): NSDictionary<any, any>;

declare function SCVLANInterfaceGetPhysicalInterface(vlan: any): any;

declare function SCVLANInterfaceGetTag(vlan: any): number;

declare function SCVLANInterfaceRemove(vlan: any): boolean;

declare function SCVLANInterfaceSetLocalizedDisplayName(vlan: any, newName: string): boolean;

declare function SCVLANInterfaceSetOptions(vlan: any, newOptions: NSDictionary<any, any>): boolean;

declare function SCVLANInterfaceSetPhysicalInterfaceAndTag(vlan: any, physical: any, tag: number): boolean;

declare var kCFErrorDomainSystemConfiguration: string;

declare var kSCBondStatusDeviceAggregationStatus: string;

declare var kSCBondStatusDeviceCollecting: string;

declare var kSCBondStatusDeviceDistributing: string;

declare const kSCBondStatusLinkInvalid: number;

declare const kSCBondStatusNoPartner: number;

declare const kSCBondStatusNotInActiveGroup: number;

declare const kSCBondStatusOK: number;

declare const kSCBondStatusUnknown: number;

declare var kSCCompAnyRegex: string;

declare var kSCCompGlobal: string;

declare var kSCCompHostNames: string;

declare var kSCCompInterface: string;

declare var kSCCompNetwork: string;

declare var kSCCompService: string;

declare var kSCCompSystem: string;

declare var kSCCompUsers: string;

declare var kSCDynamicStoreDomainFile: string;

declare var kSCDynamicStoreDomainPlugin: string;

declare var kSCDynamicStoreDomainPrefs: string;

declare var kSCDynamicStoreDomainSetup: string;

declare var kSCDynamicStoreDomainState: string;

declare var kSCDynamicStorePropNetInterfaces: string;

declare var kSCDynamicStorePropNetPrimaryInterface: string;

declare var kSCDynamicStorePropNetPrimaryService: string;

declare var kSCDynamicStorePropNetServiceIDs: string;

declare var kSCDynamicStorePropSetupCurrentSet: string;

declare var kSCDynamicStorePropSetupLastUpdated: string;

declare var kSCDynamicStoreUseSessionKeys: string;

declare var kSCEntNet6to4: string;

declare var kSCEntNetAirPort: string;

declare var kSCEntNetDHCP: string;

declare var kSCEntNetDNS: string;

declare var kSCEntNetEthernet: string;

declare var kSCEntNetFireWire: string;

declare var kSCEntNetIPSec: string;

declare var kSCEntNetIPv4: string;

declare var kSCEntNetIPv6: string;

declare var kSCEntNetInterface: string;

declare var kSCEntNetL2TP: string;

declare var kSCEntNetLink: string;

declare var kSCEntNetModem: string;

declare var kSCEntNetPPP: string;

declare var kSCEntNetPPPSerial: string;

declare var kSCEntNetPPPoE: string;

declare var kSCEntNetProxies: string;

declare var kSCEntNetSMB: string;

declare var kSCEntUsersConsoleUser: string;

declare const kSCNetworkFlagsConnectionAutomatic: number;

declare const kSCNetworkFlagsConnectionRequired: number;

declare const kSCNetworkFlagsInterventionRequired: number;

declare const kSCNetworkFlagsIsDirect: number;

declare const kSCNetworkFlagsIsLocalAddress: number;

declare const kSCNetworkFlagsReachable: number;

declare const kSCNetworkFlagsTransientConnection: number;

declare var kSCNetworkInterfaceIPv4: any;

declare var kSCNetworkInterfaceType6to4: string;

declare var kSCNetworkInterfaceTypeBluetooth: string;

declare var kSCNetworkInterfaceTypeBond: string;

declare var kSCNetworkInterfaceTypeEthernet: string;

declare var kSCNetworkInterfaceTypeFireWire: string;

declare var kSCNetworkInterfaceTypeIEEE80211: string;

declare var kSCNetworkInterfaceTypeIPSec: string;

declare var kSCNetworkInterfaceTypeIPv4: string;

declare var kSCNetworkInterfaceTypeIrDA: string;

declare var kSCNetworkInterfaceTypeL2TP: string;

declare var kSCNetworkInterfaceTypeModem: string;

declare var kSCNetworkInterfaceTypePPP: string;

declare var kSCNetworkInterfaceTypeSerial: string;

declare var kSCNetworkInterfaceTypeVLAN: string;

declare var kSCNetworkInterfaceTypeWWAN: string;

declare var kSCNetworkProtocolTypeDNS: string;

declare var kSCNetworkProtocolTypeIPv4: string;

declare var kSCNetworkProtocolTypeIPv6: string;

declare var kSCNetworkProtocolTypeProxies: string;

declare var kSCNetworkProtocolTypeSMB: string;

declare var kSCPrefCurrentSet: string;

declare var kSCPrefNetworkServices: string;

declare var kSCPrefSets: string;

declare var kSCPrefSystem: string;

declare var kSCPropInterfaceName: string;

declare var kSCPropMACAddress: string;

declare var kSCPropNet6to4Relay: string;

declare var kSCPropNetDNSDomainName: string;

declare var kSCPropNetDNSOptions: string;

declare var kSCPropNetDNSSearchDomains: string;

declare var kSCPropNetDNSSearchOrder: string;

declare var kSCPropNetDNSServerAddresses: string;

declare var kSCPropNetDNSServerPort: string;

declare var kSCPropNetDNSServerTimeout: string;

declare var kSCPropNetDNSSortList: string;

declare var kSCPropNetDNSSupplementalMatchDomains: string;

declare var kSCPropNetDNSSupplementalMatchOrders: string;

declare var kSCPropNetEthernetMTU: string;

declare var kSCPropNetEthernetMediaOptions: string;

declare var kSCPropNetEthernetMediaSubType: string;

declare var kSCPropNetIPSecAuthenticationMethod: string;

declare var kSCPropNetIPSecConnectTime: string;

declare var kSCPropNetIPSecLocalCertificate: string;

declare var kSCPropNetIPSecLocalIdentifier: string;

declare var kSCPropNetIPSecLocalIdentifierType: string;

declare var kSCPropNetIPSecRemoteAddress: string;

declare var kSCPropNetIPSecSharedSecret: string;

declare var kSCPropNetIPSecSharedSecretEncryption: string;

declare var kSCPropNetIPSecStatus: string;

declare var kSCPropNetIPSecXAuthEnabled: string;

declare var kSCPropNetIPSecXAuthName: string;

declare var kSCPropNetIPSecXAuthPassword: string;

declare var kSCPropNetIPSecXAuthPasswordEncryption: string;

declare var kSCPropNetIPv4Addresses: string;

declare var kSCPropNetIPv4BroadcastAddresses: string;

declare var kSCPropNetIPv4ConfigMethod: string;

declare var kSCPropNetIPv4DHCPClientID: string;

declare var kSCPropNetIPv4DestAddresses: string;

declare var kSCPropNetIPv4Router: string;

declare var kSCPropNetIPv4SubnetMasks: string;

declare var kSCPropNetIPv6Addresses: string;

declare var kSCPropNetIPv6ConfigMethod: string;

declare var kSCPropNetIPv6DestAddresses: string;

declare var kSCPropNetIPv6Flags: string;

declare var kSCPropNetIPv6PrefixLength: string;

declare var kSCPropNetIPv6Router: string;

declare var kSCPropNetInterfaceDeviceName: string;

declare var kSCPropNetInterfaceHardware: string;

declare var kSCPropNetInterfaceSubType: string;

declare var kSCPropNetInterfaceType: string;

declare var kSCPropNetInterfaces: string;

declare var kSCPropNetL2TPIPSecSharedSecret: string;

declare var kSCPropNetL2TPIPSecSharedSecretEncryption: string;

declare var kSCPropNetL2TPTransport: string;

declare var kSCPropNetLinkActive: string;

declare var kSCPropNetLinkDetaching: string;

declare var kSCPropNetLocalHostName: string;

declare var kSCPropNetModemAccessPointName: string;

declare var kSCPropNetModemConnectSpeed: string;

declare var kSCPropNetModemConnectionPersonality: string;

declare var kSCPropNetModemConnectionScript: string;

declare var kSCPropNetModemDataCompression: string;

declare var kSCPropNetModemDeviceContextID: string;

declare var kSCPropNetModemDeviceModel: string;

declare var kSCPropNetModemDeviceVendor: string;

declare var kSCPropNetModemDialMode: string;

declare var kSCPropNetModemErrorCorrection: string;

declare var kSCPropNetModemHoldCallWaitingAudibleAlert: string;

declare var kSCPropNetModemHoldDisconnectOnAnswer: string;

declare var kSCPropNetModemHoldEnabled: string;

declare var kSCPropNetModemHoldReminder: string;

declare var kSCPropNetModemHoldReminderTime: string;

declare var kSCPropNetModemNote: string;

declare var kSCPropNetModemPulseDial: string;

declare var kSCPropNetModemSpeaker: string;

declare var kSCPropNetModemSpeed: string;

declare var kSCPropNetOverridePrimary: string;

declare var kSCPropNetPPPACSPEnabled: string;

declare var kSCPropNetPPPAuthName: string;

declare var kSCPropNetPPPAuthPassword: string;

declare var kSCPropNetPPPAuthPasswordEncryption: string;

declare var kSCPropNetPPPAuthPrompt: string;

declare var kSCPropNetPPPAuthProtocol: string;

declare var kSCPropNetPPPCCPEnabled: string;

declare var kSCPropNetPPPCCPMPPE128Enabled: string;

declare var kSCPropNetPPPCCPMPPE40Enabled: string;

declare var kSCPropNetPPPCommAlternateRemoteAddress: string;

declare var kSCPropNetPPPCommConnectDelay: string;

declare var kSCPropNetPPPCommDisplayTerminalWindow: string;

declare var kSCPropNetPPPCommRedialCount: string;

declare var kSCPropNetPPPCommRedialEnabled: string;

declare var kSCPropNetPPPCommRedialInterval: string;

declare var kSCPropNetPPPCommRemoteAddress: string;

declare var kSCPropNetPPPCommTerminalScript: string;

declare var kSCPropNetPPPCommUseTerminalScript: string;

declare var kSCPropNetPPPConnectTime: string;

declare var kSCPropNetPPPDeviceLastCause: string;

declare var kSCPropNetPPPDialOnDemand: string;

declare var kSCPropNetPPPDisconnectOnFastUserSwitch: string;

declare var kSCPropNetPPPDisconnectOnIdle: string;

declare var kSCPropNetPPPDisconnectOnIdleTimer: string;

declare var kSCPropNetPPPDisconnectOnLogout: string;

declare var kSCPropNetPPPDisconnectOnSleep: string;

declare var kSCPropNetPPPDisconnectTime: string;

declare var kSCPropNetPPPIPCPCompressionVJ: string;

declare var kSCPropNetPPPIPCPUsePeerDNS: string;

declare var kSCPropNetPPPIdleReminder: string;

declare var kSCPropNetPPPIdleReminderTimer: string;

declare var kSCPropNetPPPLCPCompressionACField: string;

declare var kSCPropNetPPPLCPCompressionPField: string;

declare var kSCPropNetPPPLCPEchoEnabled: string;

declare var kSCPropNetPPPLCPEchoFailure: string;

declare var kSCPropNetPPPLCPEchoInterval: string;

declare var kSCPropNetPPPLCPMRU: string;

declare var kSCPropNetPPPLCPMTU: string;

declare var kSCPropNetPPPLCPReceiveACCM: string;

declare var kSCPropNetPPPLCPTransmitACCM: string;

declare var kSCPropNetPPPLastCause: string;

declare var kSCPropNetPPPLogfile: string;

declare var kSCPropNetPPPOverridePrimary: string;

declare var kSCPropNetPPPRetryConnectTime: string;

declare var kSCPropNetPPPSessionTimer: string;

declare var kSCPropNetPPPStatus: string;

declare var kSCPropNetPPPUseSessionTimer: string;

declare var kSCPropNetPPPVerboseLogging: string;

declare var kSCPropNetProxiesExceptionsList: string;

declare var kSCPropNetProxiesExcludeSimpleHostnames: string;

declare var kSCPropNetProxiesFTPEnable: string;

declare var kSCPropNetProxiesFTPPassive: string;

declare var kSCPropNetProxiesFTPPort: string;

declare var kSCPropNetProxiesFTPProxy: string;

declare var kSCPropNetProxiesGopherEnable: string;

declare var kSCPropNetProxiesGopherPort: string;

declare var kSCPropNetProxiesGopherProxy: string;

declare var kSCPropNetProxiesHTTPEnable: string;

declare var kSCPropNetProxiesHTTPPort: string;

declare var kSCPropNetProxiesHTTPProxy: string;

declare var kSCPropNetProxiesHTTPSEnable: string;

declare var kSCPropNetProxiesHTTPSPort: string;

declare var kSCPropNetProxiesHTTPSProxy: string;

declare var kSCPropNetProxiesProxyAutoConfigEnable: string;

declare var kSCPropNetProxiesProxyAutoConfigJavaScript: string;

declare var kSCPropNetProxiesProxyAutoConfigURLString: string;

declare var kSCPropNetProxiesProxyAutoDiscoveryEnable: string;

declare var kSCPropNetProxiesRTSPEnable: string;

declare var kSCPropNetProxiesRTSPPort: string;

declare var kSCPropNetProxiesRTSPProxy: string;

declare var kSCPropNetProxiesSOCKSEnable: string;

declare var kSCPropNetProxiesSOCKSPort: string;

declare var kSCPropNetProxiesSOCKSProxy: string;

declare var kSCPropNetSMBNetBIOSName: string;

declare var kSCPropNetSMBNetBIOSNodeType: string;

declare var kSCPropNetSMBWINSAddresses: string;

declare var kSCPropNetSMBWorkgroup: string;

declare var kSCPropNetServiceOrder: string;

declare var kSCPropSystemComputerName: string;

declare var kSCPropSystemComputerNameEncoding: string;

declare var kSCPropUserDefinedName: string;

declare var kSCPropVersion: string;

declare var kSCResvInactive: string;

declare var kSCResvLink: string;

declare const kSCStatusAccessError: number;

declare const kSCStatusConnectionIgnore: number;

declare const kSCStatusConnectionNoService: number;

declare const kSCStatusFailed: number;

declare const kSCStatusInvalidArgument: number;

declare const kSCStatusKeyExists: number;

declare const kSCStatusLocked: number;

declare const kSCStatusMaxLink: number;

declare const kSCStatusNeedLock: number;

declare const kSCStatusNoConfigFile: number;

declare const kSCStatusNoKey: number;

declare const kSCStatusNoLink: number;

declare const kSCStatusNoPrefsSession: number;

declare const kSCStatusNoStoreServer: number;

declare const kSCStatusNoStoreSession: number;

declare const kSCStatusNotifierActive: number;

declare const kSCStatusOK: number;

declare const kSCStatusPrefsBusy: number;

declare const kSCStatusReachabilityUnknown: number;

declare const kSCStatusStale: number;

declare var kSCValNetIPSecAuthenticationMethodCertificate: string;

declare var kSCValNetIPSecAuthenticationMethodHybrid: string;

declare var kSCValNetIPSecAuthenticationMethodSharedSecret: string;

declare var kSCValNetIPSecLocalIdentifierTypeKeyID: string;

declare var kSCValNetIPSecSharedSecretEncryptionKeychain: string;

declare var kSCValNetIPSecXAuthPasswordEncryptionKeychain: string;

declare var kSCValNetIPSecXAuthPasswordEncryptionPrompt: string;

declare var kSCValNetIPv4ConfigMethodAutomatic: string;

declare var kSCValNetIPv4ConfigMethodBOOTP: string;

declare var kSCValNetIPv4ConfigMethodDHCP: string;

declare var kSCValNetIPv4ConfigMethodINFORM: string;

declare var kSCValNetIPv4ConfigMethodLinkLocal: string;

declare var kSCValNetIPv4ConfigMethodManual: string;

declare var kSCValNetIPv4ConfigMethodPPP: string;

declare var kSCValNetIPv6ConfigMethod6to4: string;

declare var kSCValNetIPv6ConfigMethodAutomatic: string;

declare var kSCValNetIPv6ConfigMethodLinkLocal: string;

declare var kSCValNetIPv6ConfigMethodManual: string;

declare var kSCValNetIPv6ConfigMethodRouterAdvertisement: string;

declare var kSCValNetInterfaceSubTypeL2TP: string;

declare var kSCValNetInterfaceSubTypePPPSerial: string;

declare var kSCValNetInterfaceSubTypePPPoE: string;

declare var kSCValNetInterfaceType6to4: string;

declare var kSCValNetInterfaceTypeEthernet: string;

declare var kSCValNetInterfaceTypeFireWire: string;

declare var kSCValNetInterfaceTypeIPSec: string;

declare var kSCValNetInterfaceTypePPP: string;

declare var kSCValNetL2TPIPSecSharedSecretEncryptionKeychain: string;

declare var kSCValNetL2TPTransportIP: string;

declare var kSCValNetL2TPTransportIPSec: string;

declare var kSCValNetModemDialModeIgnoreDialTone: string;

declare var kSCValNetModemDialModeManual: string;

declare var kSCValNetModemDialModeWaitForDialTone: string;

declare var kSCValNetPPPAuthPasswordEncryptionKeychain: string;

declare var kSCValNetPPPAuthPasswordEncryptionToken: string;

declare var kSCValNetPPPAuthPromptAfter: string;

declare var kSCValNetPPPAuthPromptBefore: string;

declare var kSCValNetPPPAuthProtocolCHAP: string;

declare var kSCValNetPPPAuthProtocolEAP: string;

declare var kSCValNetPPPAuthProtocolMSCHAP1: string;

declare var kSCValNetPPPAuthProtocolMSCHAP2: string;

declare var kSCValNetPPPAuthProtocolPAP: string;

declare var kSCValNetSMBNetBIOSNodeTypeBroadcast: string;

declare var kSCValNetSMBNetBIOSNodeTypeHybrid: string;

declare var kSCValNetSMBNetBIOSNodeTypeMixed: string;

declare var kSCValNetSMBNetBIOSNodeTypePeer: string;
