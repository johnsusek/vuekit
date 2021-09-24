globalThis.CWChannelBand = globalThis.CWChannelBand || {};

globalThis.CWChannelBand = {
    kCWChannelBandUnknown: 0,
    kCWChannelBand2GHz: 1,
    kCWChannelBand5GHz: 2,
    '0': 'kCWChannelBandUnknown',
    '1': 'kCWChannelBand2GHz',
    '2': 'kCWChannelBand5GHz'
}

globalThis.CWChannelWidth = globalThis.CWChannelWidth || {};

globalThis.CWChannelWidth = {
    kCWChannelWidthUnknown: 0,
    kCWChannelWidth20MHz: 1,
    kCWChannelWidth40MHz: 2,
    kCWChannelWidth80MHz: 3,
    kCWChannelWidth160MHz: 4,
    '0': 'kCWChannelWidthUnknown',
    '1': 'kCWChannelWidth20MHz',
    '2': 'kCWChannelWidth40MHz',
    '3': 'kCWChannelWidth80MHz',
    '4': 'kCWChannelWidth160MHz'
}

globalThis.CWCipherKeyFlags = globalThis.CWCipherKeyFlags || {};

globalThis.CWCipherKeyFlags = {
    kCWCipherKeyFlagsNone: 0,
    kCWCipherKeyFlagsUnicast: 2,
    kCWCipherKeyFlagsMulticast: 4,
    kCWCipherKeyFlagsTx: 8,
    kCWCipherKeyFlagsRx: 16,
    '0': 'kCWCipherKeyFlagsNone',
    '2': 'kCWCipherKeyFlagsUnicast',
    '4': 'kCWCipherKeyFlagsMulticast',
    '8': 'kCWCipherKeyFlagsTx',
    '16': 'kCWCipherKeyFlagsRx'
}

globalThis.CWErr = globalThis.CWErr || {};

globalThis.CWErr = {
    kCWNoErr: 0,
    kCWEAPOLErr: 1,
    kCWInvalidParameterErr: -3900,
    kCWNoMemoryErr: -3901,
    kCWUnknownErr: -3902,
    kCWNotSupportedErr: -3903,
    kCWInvalidFormatErr: -3904,
    kCWTimeoutErr: -3905,
    kCWUnspecifiedFailureErr: -3906,
    kCWUnsupportedCapabilitiesErr: -3907,
    kCWReassociationDeniedErr: -3908,
    kCWAssociationDeniedErr: -3909,
    kCWAuthenticationAlgorithmUnsupportedErr: -3910,
    kCWInvalidAuthenticationSequenceNumberErr: -3911,
    kCWChallengeFailureErr: -3912,
    kCWAPFullErr: -3913,
    kCWUnsupportedRateSetErr: -3914,
    kCWShortSlotUnsupportedErr: -3915,
    kCWDSSSOFDMUnsupportedErr: -3916,
    kCWInvalidInformationElementErr: -3917,
    kCWInvalidGroupCipherErr: -3918,
    kCWInvalidPairwiseCipherErr: -3919,
    kCWInvalidAKMPErr: -3920,
    kCWUnsupportedRSNVersionErr: -3921,
    kCWInvalidRSNCapabilitiesErr: -3922,
    kCWCipherSuiteRejectedErr: -3923,
    kCWInvalidPMKErr: -3924,
    kCWSupplicantTimeoutErr: -3925,
    kCWHTFeaturesNotSupportedErr: -3926,
    kCWPCOTransitionTimeNotSupportedErr: -3927,
    kCWReferenceNotBoundErr: -3928,
    kCWIPCFailureErr: -3929,
    kCWOperationNotPermittedErr: -3930,
    kCWErr: -3931,
    '0': 'kCWNoErr',
    '1': 'kCWEAPOLErr',
    '-3900': 'kCWInvalidParameterErr',
    '-3901': 'kCWNoMemoryErr',
    '-3902': 'kCWUnknownErr',
    '-3903': 'kCWNotSupportedErr',
    '-3904': 'kCWInvalidFormatErr',
    '-3905': 'kCWTimeoutErr',
    '-3906': 'kCWUnspecifiedFailureErr',
    '-3907': 'kCWUnsupportedCapabilitiesErr',
    '-3908': 'kCWReassociationDeniedErr',
    '-3909': 'kCWAssociationDeniedErr',
    '-3910': 'kCWAuthenticationAlgorithmUnsupportedErr',
    '-3911': 'kCWInvalidAuthenticationSequenceNumberErr',
    '-3912': 'kCWChallengeFailureErr',
    '-3913': 'kCWAPFullErr',
    '-3914': 'kCWUnsupportedRateSetErr',
    '-3915': 'kCWShortSlotUnsupportedErr',
    '-3916': 'kCWDSSSOFDMUnsupportedErr',
    '-3917': 'kCWInvalidInformationElementErr',
    '-3918': 'kCWInvalidGroupCipherErr',
    '-3919': 'kCWInvalidPairwiseCipherErr',
    '-3920': 'kCWInvalidAKMPErr',
    '-3921': 'kCWUnsupportedRSNVersionErr',
    '-3922': 'kCWInvalidRSNCapabilitiesErr',
    '-3923': 'kCWCipherSuiteRejectedErr',
    '-3924': 'kCWInvalidPMKErr',
    '-3925': 'kCWSupplicantTimeoutErr',
    '-3926': 'kCWHTFeaturesNotSupportedErr',
    '-3927': 'kCWPCOTransitionTimeNotSupportedErr',
    '-3928': 'kCWReferenceNotBoundErr',
    '-3929': 'kCWIPCFailureErr',
    '-3930': 'kCWOperationNotPermittedErr',
    '-3931': 'kCWErr'
}

globalThis.CWEventType = globalThis.CWEventType || {};

globalThis.CWEventType = {
    None: 0,
    PowerDidChange: 1,
    SSIDDidChange: 2,
    BSSIDDidChange: 3,
    CountryCodeDidChange: 4,
    LinkDidChange: 5,
    LinkQualityDidChange: 6,
    ModeDidChange: 7,
    ScanCacheUpdated: 8,
    VirtualInterfaceStateChanged: 9,
    RangingReportEvent: 10,
    Unknown: 9223372036854775807,
    '0': 'None',
    '1': 'PowerDidChange',
    '2': 'SSIDDidChange',
    '3': 'BSSIDDidChange',
    '4': 'CountryCodeDidChange',
    '5': 'LinkDidChange',
    '6': 'LinkQualityDidChange',
    '7': 'ModeDidChange',
    '8': 'ScanCacheUpdated',
    '9': 'VirtualInterfaceStateChanged',
    '10': 'RangingReportEvent',
    '9223372036854775807': 'Unknown'
}

globalThis.CWIBSSModeSecurity = globalThis.CWIBSSModeSecurity || {};

globalThis.CWIBSSModeSecurity = {
    kCWIBSSModeSecurityNone: 0,
    kCWIBSSModeSecurityWEP40: 1,
    kCWIBSSModeSecurityWEP104: 2,
    '0': 'kCWIBSSModeSecurityNone',
    '1': 'kCWIBSSModeSecurityWEP40',
    '2': 'kCWIBSSModeSecurityWEP104'
}

globalThis.CWInterfaceMode = globalThis.CWInterfaceMode || {};

globalThis.CWInterfaceMode = {
    kCWInterfaceModeNone: 0,
    kCWInterfaceModeStation: 1,
    kCWInterfaceModeIBSS: 2,
    kCWInterfaceModeHostAP: 3,
    '0': 'kCWInterfaceModeNone',
    '1': 'kCWInterfaceModeStation',
    '2': 'kCWInterfaceModeIBSS',
    '3': 'kCWInterfaceModeHostAP'
}

globalThis.CWKeychainDomain = globalThis.CWKeychainDomain || {};

globalThis.CWKeychainDomain = {
    kCWKeychainDomainNone: 0,
    kCWKeychainDomainUser: 1,
    kCWKeychainDomainSystem: 2,
    '0': 'kCWKeychainDomainNone',
    '1': 'kCWKeychainDomainUser',
    '2': 'kCWKeychainDomainSystem'
}

globalThis.CWPHYMode = globalThis.CWPHYMode || {};

globalThis.CWPHYMode = {
    kCWPHYModeNone: 0,
    kCWPHYMode11a: 1,
    kCWPHYMode11b: 2,
    kCWPHYMode11g: 3,
    kCWPHYMode11n: 4,
    kCWPHYMode11ac: 5,
    '0': 'kCWPHYModeNone',
    '1': 'kCWPHYMode11a',
    '2': 'kCWPHYMode11b',
    '3': 'kCWPHYMode11g',
    '4': 'kCWPHYMode11n',
    '5': 'kCWPHYMode11ac'
}

globalThis.CWSecurity = globalThis.CWSecurity || {};

globalThis.CWSecurity = {
    kCWSecurityNone: 0,
    kCWSecurityWEP: 1,
    kCWSecurityWPAPersonal: 2,
    kCWSecurityWPAPersonalMixed: 3,
    kCWSecurityWPA2Personal: 4,
    kCWSecurityPersonal: 5,
    kCWSecurityDynamicWEP: 6,
    kCWSecurityWPAEnterprise: 7,
    kCWSecurityWPAEnterpriseMixed: 8,
    kCWSecurityWPA2Enterprise: 9,
    kCWSecurityEnterprise: 10,
    kCWSecurityWPA3Personal: 11,
    kCWSecurityWPA3Enterprise: 12,
    kCWSecurityWPA3Transition: 13,
    kCWSecurityUnknown: 9223372036854775807,
    '0': 'kCWSecurityNone',
    '1': 'kCWSecurityWEP',
    '2': 'kCWSecurityWPAPersonal',
    '3': 'kCWSecurityWPAPersonalMixed',
    '4': 'kCWSecurityWPA2Personal',
    '5': 'kCWSecurityPersonal',
    '6': 'kCWSecurityDynamicWEP',
    '7': 'kCWSecurityWPAEnterprise',
    '8': 'kCWSecurityWPAEnterpriseMixed',
    '9': 'kCWSecurityWPA2Enterprise',
    '10': 'kCWSecurityEnterprise',
    '11': 'kCWSecurityWPA3Personal',
    '12': 'kCWSecurityWPA3Enterprise',
    '13': 'kCWSecurityWPA3Transition',
    '9223372036854775807': 'kCWSecurityUnknown'
}

declare class CWChannel extends NSObject implements NSCopying, NSSecureCoding {
  readonly channelBand: CWChannelBand;
  readonly channelNumber: number;
  readonly channelWidth: CWChannelWidth;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  isEqualToChannel(_: CWChannel): boolean;
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
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithConfiguration(configuration: CWConfiguration): this;
  isEqualToConfiguration(_: CWConfiguration): boolean;
  mutableCopyWithZone(with_?: any): any;
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

declare class CWInterface extends NSObject {
  readonly interfaceName: string;
  activePHYMode(): CWPHYMode;
  associateToEnterpriseNetworkIdentityUsernamePasswordError(identity: CWNetwork, username?: any, password?: string, error?: string): boolean;
  associateToNetworkPasswordError(password: CWNetwork, error?: string): boolean;
  bssid(): string;
  cachedScanResults(): Set<CWNetwork>;
  commitConfigurationAuthorizationError(authorization: CWConfiguration, error?: SFAuthorization): boolean;
  configuration(): CWConfiguration;
  countryCode(): string;
  disassociate(): void;
  hardwareAddress(): string;
  interfaceMode(): CWInterfaceMode;
  noiseMeasurement(): number;
  powerOn(): boolean;
  rssiValue(): number;
  scanForNetworksWithNameError(error?: string): Set<CWNetwork>;
  scanForNetworksWithNameIncludeHiddenError(includeHidden?: string, error: boolean): Set<CWNetwork>;
  scanForNetworksWithSSIDError(error?: Data): Set<CWNetwork>;
  scanForNetworksWithSSIDIncludeHiddenError(includeHidden?: Data, error: boolean): Set<CWNetwork>;
  security(): CWSecurity;
  serviceActive(): boolean;
  setPairwiseMasterKeyError(error?: Data): boolean;
  setPowerError(error: boolean): boolean;
  setWEPKeyFlagsIndexError(flags?: Data, index: CWCipherKeyFlags, error: number): boolean;
  setWLANChannelError(error: CWChannel): boolean;
  ssid(): string;
  ssidData(): Data;
  startIBSSModeWithSSIDSecurityChannelPasswordError(security: Data, channel: CWIBSSModeSecurity, password: number, error?: string): boolean;
  supportedWLANChannels(): Set<CWChannel>;
  transmitPower(): number;
  transmitRate(): number;
  wlanChannel(): CWChannel;
}

declare function CWKeychainCopyEAPIdentityList(list: NSObject): number;
declare function CWKeychainCopyWiFiEAPIdentity(domain: CWKeychainDomain, ssid: Data, identity: any): number;
declare function CWKeychainDeleteWiFiEAPUsernameAndPassword(domain: CWKeychainDomain, ssid: Data): number;
declare function CWKeychainDeleteWiFiPassword(domain: CWKeychainDomain, ssid: Data): number;
declare function CWKeychainFindWiFiEAPUsernameAndPassword(domain: CWKeychainDomain, ssid: Data, username: string, password: string): number;
declare function CWKeychainFindWiFiPassword(domain: CWKeychainDomain, ssid: Data, password: string): number;
declare function CWKeychainSetWiFiEAPIdentity(domain: CWKeychainDomain, ssid: Data, identity: any): number;
declare function CWKeychainSetWiFiEAPUsernameAndPassword(domain: CWKeychainDomain, ssid: Data, username: string, password: string): number;
declare function CWKeychainSetWiFiPassword(domain: CWKeychainDomain, ssid: Data, password: string): number;
declare function CWMergeNetworks(networks: Set<CWNetwork>): Set<CWNetwork>;
declare class CWMutableConfiguration extends CWConfiguration {
  static configuration(): CWMutableConfiguration; // inherited from CWConfiguration
  static configurationWithConfiguration(_: CWConfiguration): CWMutableConfiguration; // inherited from CWConfiguration
  networkProfiles: NSOrderedSet<CWNetworkProfile>;
  setNetworkProfiles(_: NSOrderedSet<CWNetworkProfile>)
  rememberJoinedNetworks: boolean;
  setRememberJoinedNetworks(_: boolean)
  requireAdministratorForAssociation: boolean;
  setRequireAdministratorForAssociation(_: boolean)
  requireAdministratorForIBSSMode: boolean;
  setRequireAdministratorForIBSSMode(_: boolean)
  requireAdministratorForPower: boolean;
  setRequireAdministratorForPower(_: boolean)
}

declare class CWMutableNetworkProfile extends CWNetworkProfile {
  static networkProfile(): CWMutableNetworkProfile; // inherited from CWNetworkProfile
  static networkProfileWithNetworkProfile(_: CWNetworkProfile): CWMutableNetworkProfile; // inherited from CWNetworkProfile
  security: CWSecurity;
  setSecurity(_: CWSecurity)
  ssidData: Data;
  setSsidData(_: Data)
}

declare class CWNetwork extends NSObject implements NSCopying, NSSecureCoding {
  readonly beaconInterval: number;
  readonly bssid: string;
  readonly countryCode: string;
  readonly ibss: boolean;
  readonly informationElementData: Data;
  readonly noiseMeasurement: number;
  readonly rssiValue: number;
  readonly ssid: string;
  readonly ssidData: Data;
  readonly wlanChannel: CWChannel;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  isEqualToNetwork(_: CWNetwork): boolean;
  supportsPHYMode(_: CWPHYMode): boolean;
  supportsSecurity(_: CWSecurity): boolean;
}

declare class CWNetworkProfile extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {
  static networkProfile(): CWNetworkProfile;
  static networkProfileWithNetworkProfile(_: CWNetworkProfile): CWNetworkProfile;
  readonly security: CWSecurity;
  readonly ssid: string;
  readonly ssidData: Data;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createNetworkProfile(networkProfile: CWNetworkProfile): this;
  isEqualToNetworkProfile(_: CWNetworkProfile): boolean;
  mutableCopyWithZone(with_?: any): any;
}

declare class CWWiFiClient extends NSObject {
  static interfaceNames(): NSArray<string>;
  static sharedWiFiClient(): CWWiFiClient;
  delegate: any;
  setDelegate(_: any)
  interface(): CWInterface;
  interfaceWithName(_?: string): CWInterface;
  interfaces(): NSArray<CWInterface>;
  startMonitoringEventWithTypeError(error: CWEventType): boolean;
  stopMonitoringAllEventsAndReturnError(): boolean;
  stopMonitoringEventWithTypeError(error: CWEventType): boolean;
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

enum CWInterfaceMode {
    kCWInterfaceModeNone = 0,
    kCWInterfaceModeStation = 1,
    kCWInterfaceModeIBSS = 2,
    kCWInterfaceModeHostAP = 3
}

enum CWKeychainDomain {
    kCWKeychainDomainNone = 0,
    kCWKeychainDomainUser = 1,
    kCWKeychainDomainSystem = 2
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

