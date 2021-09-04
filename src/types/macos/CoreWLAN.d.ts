
declare class CWChannel extends NSObject implements NSCopying, NSSecureCoding {

	readonly channelBand: CWChannelBand;

	readonly channelNumber: number;

	readonly channelWidth: CWChannelWidth;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqualToChannel(_: CWChannel): boolean;
}

enum CWChannelBand {

	kCWChannelBandUnknown = 0,

	kCWChannelBand2GHz = 1,

	kCWChannelBand5GHz = 2
}


enum CWChannelWidth {

	kCWChannelWidthUnknown = 0,

	kCWChannelWidth20MHz = 1,

	kCWChannelWidth40MHz = 2,

	kCWChannelWidth80MHz = 3,

	kCWChannelWidth160MHz = 4
}


enum CWCipherKeyFlags {

	kCWCipherKeyFlagsNone = 0,

	kCWCipherKeyFlagsUnicast = 2,

	kCWCipherKeyFlagsMulticast = 4,

	kCWCipherKeyFlagsTx = 8,

	kCWCipherKeyFlagsRx = 16
}


declare class CWConfiguration extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static configuration(): CWConfiguration;

	static configurationWithConfiguration(_: CWConfiguration): CWConfiguration;

	readonly networkProfiles: NSOrderedSet<CWNetworkProfile>;

	readonly rememberJoinedNetworks: boolean;

	readonly requireAdministratorForAssociation: boolean;

	readonly requireAdministratorForIBSSMode: boolean;

	readonly requireAdministratorForPower: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(configuration: CWConfiguration);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqualToConfiguration(_: CWConfiguration): boolean;

	mutableCopyWithZone(_?: any): any;
}

enum CWErr {

	kCWNoErr = 0,

	kCWEAPOLErr = 1,

	kCWInvalidParameterErr = -3900,

	kCWNoMemoryErr = -3901,

	kCWUnknownErr = -3902,

	kCWNotSupportedErr = -3903,

	kCWInvalidFormatErr = -3904,

	kCWTimeoutErr = -3905,

	kCWUnspecifiedFailureErr = -3906,

	kCWUnsupportedCapabilitiesErr = -3907,

	kCWReassociationDeniedErr = -3908,

	kCWAssociationDeniedErr = -3909,

	kCWAuthenticationAlgorithmUnsupportedErr = -3910,

	kCWInvalidAuthenticationSequenceNumberErr = -3911,

	kCWChallengeFailureErr = -3912,

	kCWAPFullErr = -3913,

	kCWUnsupportedRateSetErr = -3914,

	kCWShortSlotUnsupportedErr = -3915,

	kCWDSSSOFDMUnsupportedErr = -3916,

	kCWInvalidInformationElementErr = -3917,

	kCWInvalidGroupCipherErr = -3918,

	kCWInvalidPairwiseCipherErr = -3919,

	kCWInvalidAKMPErr = -3920,

	kCWUnsupportedRSNVersionErr = -3921,

	kCWInvalidRSNCapabilitiesErr = -3922,

	kCWCipherSuiteRejectedErr = -3923,

	kCWInvalidPMKErr = -3924,

	kCWSupplicantTimeoutErr = -3925,

	kCWHTFeaturesNotSupportedErr = -3926,

	kCWPCOTransitionTimeNotSupportedErr = -3927,

	kCWReferenceNotBoundErr = -3928,

	kCWIPCFailureErr = -3929,

	kCWOperationNotPermittedErr = -3930,

	kCWErr = -3931
}


declare var CWErrorDomain: string;

interface CWEventDelegate {

	bssidDidChangeForWiFiInterfaceWithName?(_: string): void;

	clientConnectionInterrupted?(): void;

	clientConnectionInvalidated?(): void;

	countryCodeDidChangeForWiFiInterfaceWithName?(_: string): void;

	linkDidChangeForWiFiInterfaceWithName?(_: string): void;

	linkQualityDidChangeForWiFiInterfaceWithNameRssiTransmitRate?(_: string, rssi: number, transmitRate: number): void;

	modeDidChangeForWiFiInterfaceWithName?(_: string): void;

	powerStateDidChangeForWiFiInterfaceWithName?(_: string): void;

	scanCacheUpdatedForWiFiInterfaceWithName?(_: string): void;

	ssidDidChangeForWiFiInterfaceWithName?(_: string): void;
}
declare var CWEventDelegate: {

	prototype: CWEventDelegate;
};

enum CWEventType {

	None = 0,

	PowerDidChange = 1,

	SSIDDidChange = 2,

	BSSIDDidChange = 3,

	CountryCodeDidChange = 4,

	LinkDidChange = 5,

	LinkQualityDidChange = 6,

	ModeDidChange = 7,

	ScanCacheUpdated = 8,

	VirtualInterfaceStateChanged = 9,

	RangingReportEvent = 10,

	Unknown = 9223372036854775807
}


enum CWIBSSModeSecurity {

	kCWIBSSModeSecurityNone = 0,

	kCWIBSSModeSecurityWEP40 = 1,

	kCWIBSSModeSecurityWEP104 = 2
}


declare class CWInterface extends NSObject {

	readonly interfaceName: string;

	activePHYMode(): CWPHYMode;

	associateToEnterpriseNetworkIdentityUsernamePasswordError(identity: CWNetwork, username?: any, password?: string, error?: string): boolean;

	associateToNetworkPasswordError(password: CWNetwork, error?: string): boolean;

	bssid(): string;

	cachedScanResults(): NSSet<CWNetwork>;

	commitConfigurationAuthorizationError(authorization: CWConfiguration, error?: SFAuthorization): boolean;

	configuration(): CWConfiguration;

	countryCode(): string;

	disassociate(): void;

	hardwareAddress(): string;

	interfaceMode(): CWInterfaceMode;

	noiseMeasurement(): number;

	powerOn(): boolean;

	rssiValue(): number;

	scanForNetworksWithNameError(error?: string): NSSet<CWNetwork>;

	scanForNetworksWithNameIncludeHiddenError(includeHidden?: string, error: boolean): NSSet<CWNetwork>;

	scanForNetworksWithSSIDError(error?: NSData): NSSet<CWNetwork>;

	scanForNetworksWithSSIDIncludeHiddenError(includeHidden?: NSData, error: boolean): NSSet<CWNetwork>;

	security(): CWSecurity;

	serviceActive(): boolean;

	setPairwiseMasterKeyError(error?: NSData): boolean;

	setPowerError(error: boolean): boolean;

	setWEPKeyFlagsIndexError(flags?: NSData, index: CWCipherKeyFlags, error: number): boolean;

	setWLANChannelError(error: CWChannel): boolean;

	ssid(): string;

	ssidData(): NSData;

	startIBSSModeWithSSIDSecurityChannelPasswordError(security: NSData, channel: CWIBSSModeSecurity, password: number, error?: string): boolean;

	supportedWLANChannels(): NSSet<CWChannel>;

	transmitPower(): number;

	transmitRate(): number;

	wlanChannel(): CWChannel;
}

enum CWInterfaceMode {

	kCWInterfaceModeNone = 0,

	kCWInterfaceModeStation = 1,

	kCWInterfaceModeIBSS = 2,

	kCWInterfaceModeHostAP = 3
}


declare function CWKeychainCopyEAPIdentityList(list: NSArray<any>): number;

declare function CWKeychainCopyWiFiEAPIdentity(domain: CWKeychainDomain, ssid: NSData, identity: any): number;

declare function CWKeychainDeleteWiFiEAPUsernameAndPassword(domain: CWKeychainDomain, ssid: NSData): number;

declare function CWKeychainDeleteWiFiPassword(domain: CWKeychainDomain, ssid: NSData): number;

enum CWKeychainDomain {

	kCWKeychainDomainNone = 0,

	kCWKeychainDomainUser = 1,

	kCWKeychainDomainSystem = 2
}


declare function CWKeychainFindWiFiEAPUsernameAndPassword(domain: CWKeychainDomain, ssid: NSData, username: string, password: string): number;

declare function CWKeychainFindWiFiPassword(domain: CWKeychainDomain, ssid: NSData, password: string): number;

declare function CWKeychainSetWiFiEAPIdentity(domain: CWKeychainDomain, ssid: NSData, identity: any): number;

declare function CWKeychainSetWiFiEAPUsernameAndPassword(domain: CWKeychainDomain, ssid: NSData, username: string, password: string): number;

declare function CWKeychainSetWiFiPassword(domain: CWKeychainDomain, ssid: NSData, password: string): number;

declare function CWMergeNetworks(networks: NSSet<CWNetwork>): NSSet<CWNetwork>;

declare class CWMutableConfiguration extends CWConfiguration {

	static configuration(): CWMutableConfiguration; // inherited from CWConfiguration

	static configurationWithConfiguration(_: CWConfiguration): CWMutableConfiguration; // inherited from CWConfiguration

	setNetworkProfiles(_: NSOrderedSet<CWNetworkProfile>)

	networkProfiles: NSOrderedSet<CWNetworkProfile>;

	setRememberJoinedNetworks(_: boolean)

	rememberJoinedNetworks: boolean;

	setRequireAdministratorForAssociation(_: boolean)

	requireAdministratorForAssociation: boolean;

	setRequireAdministratorForIBSSMode(_: boolean)

	requireAdministratorForIBSSMode: boolean;

	setRequireAdministratorForPower(_: boolean)

	requireAdministratorForPower: boolean;
}

declare class CWMutableNetworkProfile extends CWNetworkProfile {

	static networkProfile(): CWMutableNetworkProfile; // inherited from CWNetworkProfile

	static networkProfileWithNetworkProfile(_: CWNetworkProfile): CWMutableNetworkProfile; // inherited from CWNetworkProfile

	setSecurity(_: CWSecurity)

	security: CWSecurity;

	setSsidData(_: NSData)

	ssidData: NSData;
}

declare class CWNetwork extends NSObject implements NSCopying, NSSecureCoding {

	readonly beaconInterval: number;

	readonly bssid: string;

	readonly countryCode: string;

	readonly ibss: boolean;

	readonly informationElementData: NSData;

	readonly noiseMeasurement: number;

	readonly rssiValue: number;

	readonly ssid: string;

	readonly ssidData: NSData;

	readonly wlanChannel: CWChannel;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqualToNetwork(_: CWNetwork): boolean;

	supportsPHYMode(_: CWPHYMode): boolean;

	supportsSecurity(_: CWSecurity): boolean;
}

declare class CWNetworkProfile extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static networkProfile(): CWNetworkProfile;

	static networkProfileWithNetworkProfile(_: CWNetworkProfile): CWNetworkProfile;

	readonly security: CWSecurity;

	readonly ssid: string;

	readonly ssidData: NSData;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(networkProfile: CWNetworkProfile);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqualToNetworkProfile(_: CWNetworkProfile): boolean;

	mutableCopyWithZone(_?: any): any;
}

enum CWPHYMode {

	kCWPHYModeNone = 0,

	kCWPHYMode11a = 1,

	kCWPHYMode11b = 2,

	kCWPHYMode11g = 3,

	kCWPHYMode11n = 4,

	kCWPHYMode11ac = 5
}


enum CWSecurity {

	kCWSecurityNone = 0,

	kCWSecurityWEP = 1,

	kCWSecurityWPAPersonal = 2,

	kCWSecurityWPAPersonalMixed = 3,

	kCWSecurityWPA2Personal = 4,

	kCWSecurityPersonal = 5,

	kCWSecurityDynamicWEP = 6,

	kCWSecurityWPAEnterprise = 7,

	kCWSecurityWPAEnterpriseMixed = 8,

	kCWSecurityWPA2Enterprise = 9,

	kCWSecurityEnterprise = 10,

	kCWSecurityWPA3Personal = 11,

	kCWSecurityWPA3Enterprise = 12,

	kCWSecurityWPA3Transition = 13,

	kCWSecurityUnknown = 9223372036854775807
}


declare class CWWiFiClient extends NSObject {

	static interfaceNames(): NSArray<string>;

	static sharedWiFiClient(): CWWiFiClient;

	setDelegate(_: any)

	delegate: any;

	interface(): CWInterface;

	interfaceWithName(_?: string): CWInterface;

	interfaces(): NSArray<CWInterface>;

	startMonitoringEventWithTypeError(error: CWEventType): boolean;

	stopMonitoringAllEventsAndReturnError(): boolean;

	stopMonitoringEventWithTypeError(error: CWEventType): boolean;
}
