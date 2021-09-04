
interface IOUSB20HubDescriptor {
	bLength: number;
	bDescriptorType: number;
	bNumberPorts: number;
	wHubCharacteristics: number;
	bPowerOnToPowerGood: number;
	bHubControllerCurrent: number;
	deviceRemovable: number;
	reserved: number;
}
declare var IOUSB20HubDescriptor: IOUSB20HubDescriptor;

interface IOUSB30HubPortStatusExt {
	wPortStatus: number;
	wPortChange: number;
	dwExtPortStatus: number;
}
declare var IOUSB30HubPortStatusExt: IOUSB30HubPortStatusExt;

enum IOUSBAbortOptions {

	kIOUSBAbortAsynchronous = 0,

	kIOUSBAbortSynchronous = 1
}


interface IOUSBBOSDescriptor {
	bLength: number;
	bDescriptorType: number;
	wTotalLength: number;
	bNumDeviceCaps: number;
}
declare var IOUSBBOSDescriptor: IOUSBBOSDescriptor;

interface IOUSBConfigurationDescHeader {
	bLength: number;
	bDescriptorType: number;
	wTotalLength: number;
}
declare var IOUSBConfigurationDescHeader: IOUSBConfigurationDescHeader;

interface IOUSBConfigurationDescriptor {
	bLength: number;
	bDescriptorType: number;
	wTotalLength: number;
	bNumInterfaces: number;
	bConfigurationValue: number;
	iConfiguration: number;
	bmAttributes: number;
	MaxPower: number;
}
declare var IOUSBConfigurationDescriptor: IOUSBConfigurationDescriptor;

interface IOUSBDFUDescriptor {
	bLength: number;
	bDescriptorType: number;
	bmAttributes: number;
	wDetachTimeout: number;
	wTransferSize: number;
}
declare var IOUSBDFUDescriptor: IOUSBDFUDescriptor;

interface IOUSBDescriptorHeader {
	bLength: number;
	bDescriptorType: number;
}
declare var IOUSBDescriptorHeader: IOUSBDescriptorHeader;

interface IOUSBDeviceCapabilityBillboard {
	bLength: number;
	bDescriptorType: number;
	bDevCapabilityType: number;
	iAdditionalInfoURL: number;
	bNumberOfAlternateModes: number;
	bPreferredAlternateMode: number;
	vCONNPower: number;
	bmConfigured: number;
	bcdVersion: number;
	bAdditionalFailureInfo: number;
	bReserved: number;
	pAltConfigurations: IOUSBDeviceCapabilityBillboardAltConfig;
}
declare var IOUSBDeviceCapabilityBillboard: IOUSBDeviceCapabilityBillboard;

interface IOUSBDeviceCapabilityBillboardAltConfig {
	wSVID: number;
	bAltenateMode: number;
	iAlternateModeString: number;
}
declare var IOUSBDeviceCapabilityBillboardAltConfig: IOUSBDeviceCapabilityBillboardAltConfig;

interface IOUSBDeviceCapabilityBillboardAltConfigCompatibility {
	wSVID: number;
	dwAlternateMode: number;
	iAlternateModeString: number;
}
declare var IOUSBDeviceCapabilityBillboardAltConfigCompatibility: IOUSBDeviceCapabilityBillboardAltConfigCompatibility;

interface IOUSBDeviceCapabilityBillboardAltMode {
	bLength: number;
	bDescriptorType: number;
	bDevCapabilityType: number;
	bIndex: number;
	dwAlternateModeVdo: number;
}
declare var IOUSBDeviceCapabilityBillboardAltMode: IOUSBDeviceCapabilityBillboardAltMode;

interface IOUSBDeviceCapabilityContainerID {
	bLength: number;
	bDescriptorType: number;
	bDevCapabilityType: number;
	bReservedID: number;
	containerID: number;
}
declare var IOUSBDeviceCapabilityContainerID: IOUSBDeviceCapabilityContainerID;

interface IOUSBDeviceCapabilityDescriptorHeader {
	bLength: number;
	bDescriptorType: number;
	bDevCapabilityType: number;
	bNumDeviceCaps: number;
}
declare var IOUSBDeviceCapabilityDescriptorHeader: IOUSBDeviceCapabilityDescriptorHeader;

interface IOUSBDeviceCapabilitySuperSpeedPlusUSB {
	bLength: number;
	bDescriptorType: number;
	bDevCapabilityType: number;
	bReserved: number;
	bmAttributes: number;
	wFunctionalitySupport: number;
	wReserved: number;
	bmSublinkSpeedAttr: number;
}
declare var IOUSBDeviceCapabilitySuperSpeedPlusUSB: IOUSBDeviceCapabilitySuperSpeedPlusUSB;

interface IOUSBDeviceCapabilitySuperSpeedUSB {
	bLength: number;
	bDescriptorType: number;
	bDevCapabilityType: number;
	bmAttributes: number;
	wSpeedsSupported: number;
	bFunctionalitySupport: number;
	bU1DevExitLat: number;
	wU2DevExitLat: number;
}
declare var IOUSBDeviceCapabilitySuperSpeedUSB: IOUSBDeviceCapabilitySuperSpeedUSB;

interface IOUSBDeviceCapabilityUSB2Extension {
	bLength: number;
	bDescriptorType: number;
	bDevCapabilityType: number;
	bmAttributes: number;
}
declare var IOUSBDeviceCapabilityUSB2Extension: IOUSBDeviceCapabilityUSB2Extension;

interface IOUSBDeviceDescriptor {
	bLength: number;
	bDescriptorType: number;
	bcdUSB: number;
	bDeviceClass: number;
	bDeviceSubClass: number;
	bDeviceProtocol: number;
	bMaxPacketSize0: number;
	idVendor: number;
	idProduct: number;
	bcdDevice: number;
	iManufacturer: number;
	iProduct: number;
	iSerialNumber: number;
	bNumConfigurations: number;
}
declare var IOUSBDeviceDescriptor: IOUSBDeviceDescriptor;

interface IOUSBDeviceQualifierDescriptor {
	bLength: number;
	bDescriptorType: number;
	bcdUSB: number;
	bDeviceClass: number;
	bDeviceSubClass: number;
	bDeviceProtocol: number;
	bMaxPacketSize0: number;
	bNumConfigurations: number;
	bReserved: number;
}
declare var IOUSBDeviceQualifierDescriptor: IOUSBDeviceQualifierDescriptor;

interface IOUSBDeviceRequest {
	bmRequestType: number;
	bRequest: number;
	wValue: number;
	wIndex: number;
	wLength: number;
}
declare var IOUSBDeviceRequest: IOUSBDeviceRequest;

interface IOUSBDeviceRequestSetSELData {
	u1Sel: number;
	u1Pel: number;
	u2Sel: number;
	u2Pel: number;
}
declare var IOUSBDeviceRequestSetSELData: IOUSBDeviceRequestSetSELData;

interface IOUSBEndpointDescriptor {
	bLength: number;
	bDescriptorType: number;
	bEndpointAddress: number;
	bmAttributes: number;
	wMaxPacketSize: number;
	bInterval: number;
}
declare var IOUSBEndpointDescriptor: IOUSBEndpointDescriptor;

declare const IOUSBEndpointFeatureSelectorStall: number;

declare const IOUSBEndpointStatusHalt: number;

declare function IOUSBGetBillboardDescriptor(bosDescriptor: IOUSBBOSDescriptor): IOUSBDeviceCapabilityBillboard;

declare function IOUSBGetConfigurationMaxPowerMilliAmps(usbDeviceSpeed: number, descriptor: IOUSBConfigurationDescriptor): number;

declare function IOUSBGetContainerIDDescriptor(bosDescriptor: IOUSBBOSDescriptor): IOUSBDeviceCapabilityContainerID;

declare function IOUSBGetEndpointAddress(descriptor: IOUSBEndpointDescriptor): number;

declare function IOUSBGetEndpointBurstSize(usbDeviceSpeed: number, descriptor: IOUSBEndpointDescriptor, companionDescriptor: IOUSBSuperSpeedEndpointCompanionDescriptor, sspCompanionDescriptor: IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor): number;

enum IOUSBGetEndpointDescriptorOptions {

	kIOUSBGetEndpointDescriptorOriginal = 0,

	kIOUSBGetEndpointDescriptorCurrentPolicy = 1
}


declare function IOUSBGetEndpointDirection(descriptor: IOUSBEndpointDescriptor): number;

declare function IOUSBGetEndpointIntervalEncodedMicroframes(usbDeviceSpeed: number, descriptor: IOUSBEndpointDescriptor): number;

declare function IOUSBGetEndpointIntervalFrames(usbDeviceSpeed: number, descriptor: IOUSBEndpointDescriptor): number;

declare function IOUSBGetEndpointIntervalMicroframes(usbDeviceSpeed: number, descriptor: IOUSBEndpointDescriptor): number;

declare function IOUSBGetEndpointMaxPacketSize(usbDeviceSpeed: number, descriptor: IOUSBEndpointDescriptor): number;

declare function IOUSBGetEndpointMaxStreams(usbDeviceSpeed: number, descriptor: IOUSBEndpointDescriptor, companionDescriptor: IOUSBSuperSpeedEndpointCompanionDescriptor): number;

declare function IOUSBGetEndpointMaxStreamsEncoded(usbDeviceSpeed: number, descriptor: IOUSBEndpointDescriptor, companionDescriptor: IOUSBSuperSpeedEndpointCompanionDescriptor): number;

declare function IOUSBGetEndpointMult(usbDeviceSpeed: number, descriptor: IOUSBEndpointDescriptor, companionDescriptor: IOUSBSuperSpeedEndpointCompanionDescriptor, sspCompanionDescriptor: IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor): number;

declare function IOUSBGetEndpointNumber(descriptor: IOUSBEndpointDescriptor): number;

declare function IOUSBGetEndpointType(descriptor: IOUSBEndpointDescriptor): number;

declare function IOUSBGetNextAssociatedDescriptor(configurationDescriptor: IOUSBConfigurationDescriptor, parentDescriptor: IOUSBDescriptorHeader, currentDescriptor: IOUSBDescriptorHeader): IOUSBDescriptorHeader;

declare function IOUSBGetNextAssociatedDescriptorWithType(configurationDescriptor: IOUSBConfigurationDescriptor, parentDescriptor: IOUSBDescriptorHeader, currentDescriptor: IOUSBDescriptorHeader, type: number): IOUSBDescriptorHeader;

declare function IOUSBGetNextCapabilityDescriptor(bosDescriptor: IOUSBBOSDescriptor, currentDescriptor: IOUSBDeviceCapabilityDescriptorHeader): IOUSBDeviceCapabilityDescriptorHeader;

declare function IOUSBGetNextCapabilityDescriptorWithType(bosDescriptor: IOUSBBOSDescriptor, currentDescriptor: IOUSBDeviceCapabilityDescriptorHeader, type: number): IOUSBDeviceCapabilityDescriptorHeader;

declare function IOUSBGetNextDescriptor(configurationDescriptor: IOUSBConfigurationDescriptor, currentDescriptor: IOUSBDescriptorHeader): IOUSBDescriptorHeader;

declare function IOUSBGetNextDescriptorWithType(configurationDescriptor: IOUSBConfigurationDescriptor, currentDescriptor: IOUSBDescriptorHeader, type: number): IOUSBDescriptorHeader;

declare function IOUSBGetNextEndpointDescriptor(configurationDescriptor: IOUSBConfigurationDescriptor, interfaceDescriptor: IOUSBInterfaceDescriptor, currentDescriptor: IOUSBDescriptorHeader): IOUSBEndpointDescriptor;

declare function IOUSBGetNextInterfaceAssociationDescriptor(configurationDescriptor: IOUSBConfigurationDescriptor, currentDescriptor: IOUSBDescriptorHeader): IOUSBInterfaceAssociationDescriptor;

declare function IOUSBGetNextInterfaceDescriptor(configurationDescriptor: IOUSBConfigurationDescriptor, currentDescriptor: IOUSBDescriptorHeader): IOUSBInterfaceDescriptor;

declare function IOUSBGetPlatformCapabilityDescriptor(bosDescriptor: IOUSBBOSDescriptor): IOUSBPlatformCapabilityDescriptor;

declare function IOUSBGetSuperSpeedDeviceCapabilityDescriptor(bosDescriptor: IOUSBBOSDescriptor): IOUSBDeviceCapabilitySuperSpeedUSB;

declare function IOUSBGetSuperSpeedPlusDeviceCapabilityDescriptor(bosDescriptor: IOUSBBOSDescriptor): IOUSBDeviceCapabilitySuperSpeedPlusUSB;

declare function IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor(bosDescriptor: IOUSBBOSDescriptor): IOUSBDeviceCapabilityUSB2Extension;

interface IOUSBHIDDescriptor {
	descLen: number;
	descType: number;
	descVersNum: number;
	hidCountryCode: number;
	hidNumDescriptors: number;
	hidDescriptorType: number;
	hidDescriptorLengthLo: number;
	hidDescriptorLengthHi: number;
}
declare var IOUSBHIDDescriptor: IOUSBHIDDescriptor;

interface IOUSBHIDReportDesc {
	hidDescriptorType: number;
	hidDescriptorLengthLo: number;
	hidDescriptorLengthHi: number;
}
declare var IOUSBHIDReportDesc: IOUSBHIDReportDesc;

declare function IOUSBHostFreeDescriptor(descriptor: IOUSBDeviceDescriptor): void;

interface IOUSBInterfaceAssociationDescriptor {
	bLength: number;
	bDescriptorType: number;
	bFirstInterface: number;
	bInterfaceCount: number;
	bFunctionClass: number;
	bFunctionSubClass: number;
	bFunctionProtocol: number;
	iFunction: number;
}
declare var IOUSBInterfaceAssociationDescriptor: IOUSBInterfaceAssociationDescriptor;

interface IOUSBInterfaceDescriptor {
	bLength: number;
	bDescriptorType: number;
	bInterfaceNumber: number;
	bAlternateSetting: number;
	bNumEndpoints: number;
	bInterfaceClass: number;
	bInterfaceSubClass: number;
	bInterfaceProtocol: number;
	iInterface: number;
}
declare var IOUSBInterfaceDescriptor: IOUSBInterfaceDescriptor;

interface IOUSBIsochronousFrame {
	status: number;
	requestCount: number;
	completeCount: number;
	reserved: number;
	timeStamp: number;
}
declare var IOUSBIsochronousFrame: IOUSBIsochronousFrame;

interface IOUSBPlatformCapabilityDescriptor {
	bLength: number;
	bDescriptorType: number;
	bDevCapabilityType: number;
	bReserved: number;
	PlatformCapabilityUUID: number;
}
declare var IOUSBPlatformCapabilityDescriptor: IOUSBPlatformCapabilityDescriptor;

interface IOUSBStandardEndpointDescriptors {
	bcdUSB: number;
	descriptor: IOUSBEndpointDescriptor;
	ssCompanionDescriptor: IOUSBSuperSpeedEndpointCompanionDescriptor;
	sspCompanionDescriptor: IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor;
}
declare var IOUSBStandardEndpointDescriptors: IOUSBStandardEndpointDescriptors;

interface IOUSBStringDescriptor {
	bLength: number;
	bDescriptorType: number;
	bString: number;
}
declare var IOUSBStringDescriptor: IOUSBStringDescriptor;

interface IOUSBSuperSpeedEndpointCompanionDescriptor {
	bLength: number;
	bDescriptorType: number;
	bMaxBurst: number;
	bmAttributes: number;
	wBytesPerInterval: number;
}
declare var IOUSBSuperSpeedEndpointCompanionDescriptor: IOUSBSuperSpeedEndpointCompanionDescriptor;

interface IOUSBSuperSpeedHubDescriptor {
	bLength: number;
	bDescriptorType: number;
	bNumberPorts: number;
	wHubCharacteristics: number;
	bPowerOnToPowerGood: number;
	bHubControllerCurrent: number;
	bHubDecodeLatency: number;
	wHubDelay: number;
	deviceRemovable: number;
}
declare var IOUSBSuperSpeedHubDescriptor: IOUSBSuperSpeedHubDescriptor;

interface IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor {
	bLength: number;
	bDescriptorType: number;
	wReserved: number;
	dwBytesPerInterval: number;
}
declare var IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor: IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor;

interface UASPipeDescriptor {
	bLength: number;
	bDescriptorType: number;
	bPipeID: number;
	bReserved: number;
}
declare var UASPipeDescriptor: UASPipeDescriptor;

declare const kIOUSBAppleVendorID: number;

declare const kIOUSBConfigurationDescriptorAttributeRemoteWakeCapable: number;

declare const kIOUSBConfigurationDescriptorAttributeSelfPowered: number;

declare const kIOUSBDeviceFeatureSelectorLTMEnable: number;

declare const kIOUSBDeviceFeatureSelectorRemoteWakeup: number;

declare const kIOUSBDeviceFeatureSelectorTestMode: number;

declare const kIOUSBDeviceFeatureSelectorU1Enable: number;

declare const kIOUSBDeviceFeatureSelectorU2Enable: number;

declare const kIOUSBDeviceRequestClearFeature: number;

declare const kIOUSBDeviceRequestGetConfiguration: number;

declare const kIOUSBDeviceRequestGetDescriptor: number;

declare const kIOUSBDeviceRequestGetInterface: number;

declare const kIOUSBDeviceRequestGetState: number;

declare const kIOUSBDeviceRequestGetStatus: number;

declare const kIOUSBDeviceRequestSetAddress: number;

declare const kIOUSBDeviceRequestSetConfiguration: number;

declare const kIOUSBDeviceRequestSetDescriptor: number;

declare const kIOUSBDeviceRequestSetFeature: number;

declare const kIOUSBDeviceRequestSetInterface: number;

declare const kIOUSBDeviceRequestSetIsochronousDelay: number;

declare const kIOUSBDeviceRequestSetSel: number;

declare const kIOUSBDeviceRequestSynchFrame: number;

declare const kIOUSBDeviceStatusLTMEnable: number;

declare const kIOUSBDeviceStatusRemoteWakeEnable: number;

declare const kIOUSBDeviceStatusSelfPowered: number;

declare const kIOUSBDeviceStatusU1Enable: number;

declare const kIOUSBDeviceStatusU2Enable: number;

declare const kIOUSBEndpointDescriptorDirection: number;

declare const kIOUSBEndpointDescriptorDirectionIn: number;

declare const kIOUSBEndpointDescriptorDirectionOut: number;

declare const kIOUSBEndpointDescriptorDirectionPhase: number;

declare const kIOUSBEndpointDescriptorEndpointAddressReserved: number;

declare const kIOUSBEndpointDescriptorNumber: number;

declare const kIOUSBEndpointDescriptorNumberPhase: number;

declare const kIOUSBEndpointDescriptorPacketSize: number;

declare const kIOUSBEndpointDescriptorPacketSizeMult: number;

declare const kIOUSBEndpointDescriptorPacketSizeMultPhase: number;

declare const kIOUSBEndpointDescriptorPacketSizePhase: number;

declare const kIOUSBEndpointDescriptorReserved: number;

declare const kIOUSBEndpointDescriptorReservedPhase: number;

declare const kIOUSBEndpointDescriptorSynchronizationType: number;

declare const kIOUSBEndpointDescriptorSynchronizationTypeAdaptive: number;

declare const kIOUSBEndpointDescriptorSynchronizationTypeAsynchronous: number;

declare const kIOUSBEndpointDescriptorSynchronizationTypeNone: number;

declare const kIOUSBEndpointDescriptorSynchronizationTypePhase: number;

declare const kIOUSBEndpointDescriptorSynchronizationTypeSynchronous: number;

declare const kIOUSBEndpointDescriptorTransferType: number;

declare const kIOUSBEndpointDescriptorTransferTypeBulk: number;

declare const kIOUSBEndpointDescriptorTransferTypeControl: number;

declare const kIOUSBEndpointDescriptorTransferTypeInterrupt: number;

declare const kIOUSBEndpointDescriptorTransferTypeIsochronous: number;

declare const kIOUSBEndpointDescriptorTransferTypePhase: number;

declare const kIOUSBEndpointDescriptorUsageType: number;

declare const kIOUSBEndpointDescriptorUsageTypeInterruptNotification: number;

declare const kIOUSBEndpointDescriptorUsageTypeInterruptPeriodic: number;

declare const kIOUSBEndpointDescriptorUsageTypeInterruptReserved1: number;

declare const kIOUSBEndpointDescriptorUsageTypeInterruptReserved2: number;

declare const kIOUSBEndpointDescriptorUsageTypeIsocData: number;

declare const kIOUSBEndpointDescriptorUsageTypeIsocFeedback: number;

declare const kIOUSBEndpointDescriptorUsageTypeIsocImplicit: number;

declare const kIOUSBEndpointDescriptorUsageTypeIsocReserved: number;

declare const kIOUSBEndpointDescriptorUsageTypePhase: number;

declare const kIOUSBHostPipeBundlingMax: number;

declare const kIOUSBHubDelayNs: number;

declare const kIOUSBHubPort2PortExitLatencyNs: number;

declare const kIOUSBInterfaceFeatureSelectorSuspend: number;

declare const kIOUSBInterfaceStatusRemoteWakeCapable: number;

declare const kIOUSBInterfaceStatusRemoteWakeEnable: number;

declare const kIOUSBInterfaceSuspendLowPower: number;

declare const kIOUSBInterfaceSuspendRemoteWakeEnable: number;

declare const kIOUSBPingResponseTimeNs: number;

declare const kIOUSBSuperSpeedDeviceCapability5Gb: number;

declare const kIOUSBSuperSpeedDeviceCapabilityFullSpeed: number;

declare const kIOUSBSuperSpeedDeviceCapabilityHighSpeed: number;

declare const kIOUSBSuperSpeedDeviceCapabilityLTM: number;

declare const kIOUSBSuperSpeedDeviceCapabilityLowSpeed: number;

declare const kIOUSBSuperSpeedDeviceCapabilitySupport5Gb: number;

declare const kIOUSBSuperSpeedDeviceCapabilitySupportFullSpeed: number;

declare const kIOUSBSuperSpeedDeviceCapabilitySupportHighSpeed: number;

declare const kIOUSBSuperSpeedDeviceCapabilitySupportLowSpeed: number;

declare const kIOUSBSuperSpeedDeviceCapabilityU1DevExitLatMax: number;

declare const kIOUSBSuperSpeedDeviceCapabilityU2DevExitLatMax: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorBulkMaxStreams: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorBulkMaxStreamsPhase: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorBulkReserved: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorBulkReservedPhase: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorIsocMult: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorIsocMultPhase: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorIsocReserved: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorIsocReservedPhase: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorMaxBurst: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorMaxBurstPhase: number;

declare const kIOUSBSuperSpeedEndpointCompanionDescriptorSSPIsocCompanion: number;

declare const kIOUSBSuperSpeedHubCharacteristicsCompoundDevice: number;

declare const kIOUSBSuperSpeedHubCharacteristicsOverCurrentGlobal: number;

declare const kIOUSBSuperSpeedHubCharacteristicsOverCurrentIndividual: number;

declare const kIOUSBSuperSpeedHubCharacteristicsOverCurrentMask: number;

declare const kIOUSBSuperSpeedHubCharacteristicsPowerSwitchingGanged: number;

declare const kIOUSBSuperSpeedHubCharacteristicsPowerSwitchingIndividual: number;

declare const kIOUSBSuperSpeedHubCharacteristicsPowerSwitchingMask: number;

declare const kIOUSBSuperSpeedHubCharacteristicsReserved: number;

declare const kIOUSBSuperSpeedHubDecodeLatencyMax: number;

declare const kIOUSBSuperSpeedHubDelayMax: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilityMinRxLaneCount: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilityMinRxLaneCountPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilityMinTxLaneCount: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilityMinTxLaneCountPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilityReserved: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilityReservedPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkAsymmetric: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkDirection: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkDirectionPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkDirectionRx: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkDirectionTx: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkLSE: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkLSEBits: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkLSEGbits: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkLSEKbits: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkLSEMbits: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkLSEPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkMinSpeedId: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkMinSpeedIdPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkProtocol: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkProtocolPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkReserved: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkReservedPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSpeedAttrCount: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSpeedAttrCountPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSpeedId: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSpeedIdCount: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSpeedIdCountPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSpeedIdPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSpeedMantissa: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSpeedMantissaPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSymmetric: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSymmetry: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkSymmetryPhase: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkType: number;

declare const kIOUSBSuperSpeedPlusDeviceCapabilitySublinkTypePhase: number;

declare const kIOUSBUSB20ExtensionCapabilityBESL: number;

declare const kIOUSBUSB20ExtensionCapabilityBESLD: number;

declare const kIOUSBUSB20ExtensionCapabilityBESLDPhase: number;

declare const kIOUSBUSB20ExtensionCapabilityBESLDValid: number;

declare const kIOUSBUSB20ExtensionCapabilityBESLPhase: number;

declare const kIOUSBUSB20ExtensionCapabilityBESLSupport: number;

declare const kIOUSBUSB20ExtensionCapabilityBESLValid: number;

declare const kIOUSBUSB20ExtensionCapabilityLPM: number;

enum tIOUSB20BusCurrent {

	kIOUSB20BusCurrentMinimum = 100,

	kIOUSB20BusCurrentDefault = 500,

	kIOUSB20BusCurrentMaxPowerUnits = 2
}


enum tIOUSB30BusCurrent {

	kIOUSB30BusCurrentMinimum = 150,

	kIOUSB30BusCurrentDefault = 900,

	kIOUSB30BusCurrentMaxPowerUnits = 8
}


enum tIOUSB30DeviceNotificationType {

	kIOUSB30DeviceNotificationTypeFunctionWake = 1,

	kIOUSB30DeviceNotificationTypeLatencyTolerance = 2,

	kIOUSB30DeviceNotificationTypeBusIntervalAdjustment = 3,

	kIOUSB30DeviceNotificationTypeHostRoleRequest = 4,

	kIOUSB30DeviceNotificationTypeSublinkSpeed = 5
}


enum tIOUSB30HubExtStatus {

	kIOUSB30HubExtStatusRxSublinkSpeedID = 15,

	kIOUSB30HubExtStatusRxSublinkSpeedIDPhase = 0,

	kIOUSB30HubExtStatusTxSublinkSpeedID = 240,

	kIOUSB30HubExtStatusTxSublinkSpeedIDPhase = 4,

	kIOUSB30HubExtStatusRxLaneCount = 3840,

	kIOUSB30HubExtStatusRxLaneCountPhase = 8,

	kIOUSB30HubExtStatusTxLaneCount = 61440,

	kIOUSB30HubExtStatusTxLaneCountPhase = 12
}


enum tIOUSB30HubPortStatusCode {

	kIOUSB30HubPortStatusCodeStandard = 0,

	kIOUSB30HubPortStatusCodePD = 1,

	kIOUSB30HubPortStatusCodeExt = 2,

	kIOUSB30HubPortStatusCodeCount = 3
}


enum tIOUSB30LinkStateTimeout {

	kIOUSB30LinkStateSSInactiveQuietTimeout = 12,

	kIOUSB30LinkStateRxDetectQuietTimeout = 12,

	kIOUSB30LinkStatePollingLFPSTimeout = 360,

	kIOUSB30LinkStatePollingActiveTimeout = 12,

	kIOUSB30LinkStatePollingConfigurationTimeout = 12,

	kIOUSB30LinkStatePollingIdleTimeout = 2,

	kIOUSB30LinkStateU0RecoveryTimeout = 1,

	kIOUSB30LinkStateU0LTimeout = 0,

	kIOUSB30LinkStateU1NoLFPSResponseTimeout = 2,

	kIOUSB30LinkStateU1PingTimeout = 300,

	kIOUSB30LinkStateU2NoLFPSResponseTimeout = 2,

	kIOUSB30LinKStateU2RxDetectDelay = 100,

	kIOUSB30LinkStateU3NoLFPSResponseTimeout = 10,

	kIOUSB30LinkStateU3WakeupRetryDelay = 100,

	kIOUSB30LinkStateU3RxDetectDelay = 100,

	kIOUSB30LinkStateRecoveryActiveTimeout = 12,

	kIOUSB30LinkStateRecoveryConfigurationTimeout = 6,

	kIOUSB30LinkStateRecoveryIdleTimeout = 2,

	kIOUSB30LinkStateLoopbackExitTimeout = 2,

	kIOUSB30LinkStateHotResetActiveTimeout = 12,

	kIOUSB30LinkStateHotResetExistTimeout = 2,

	kIOUSB30LinkStatePollingDeadline = 387,

	kIOUSB30LinkStateSSResumeDeadline = 30
}


enum tIOUSB30ResetTimeout {

	kIOUSB30ResetMinimumTimeout = 80,

	kIOUSB30ResetTypicalTimeout = 100,

	kIOUSB30ResetMaximumTimeout = 120,

	kIOUSB30ResetMaximumWithMarginTimeout = 150
}


enum tIOUSB30TimingParameters {

	kIOUSB30TimingParameterBELTDefaultNs = 1000000,

	kIOUSB30TimingParameterBELTMinNs = 125000
}


enum tIOUSBBusVoltage {

	kIOUSBBusVoltageDefault = 5
}


enum tIOUSBDescriptorSize {

	kIOUSBDescriptorHeaderSize = 2,

	kIOUSBDescriptorSizeDevice = 18,

	kIOUSBDescriptorSizeConfiguration = 9,

	kIOUSBDescriptorSizeInterface = 9,

	kIOUSBDescriptorSizeEndpoint = 7,

	kIOUSBDescriptorSizeStringMinimum = 2,

	kIOUSBDescriptorSizeStringMaximum = 255,

	kIOUSBDescriptorSizeDeviceQualifier = 10,

	kIOUSBDescriptorSizeInterfaceAssociation = 8,

	kIOUSBDescriptorSizeBOS = 5,

	kIOUSBDescriptorSizeDeviceCapability = 3,

	kIOUSBDescriptorSizeUSB20ExtensionCapability = 7,

	kIOUSBDescriptorSizeSuperSpeedUSBDeviceCapability = 10,

	kIOUSBDescriptorSizeContainerIDCapability = 20,

	kIOUSBDescriptorSizeHubMinimum = 9,

	kIOUSBDescriptorSizeHubMaximum = 21,

	kIOUSBDescriptorSizeSuperSpeedHub = 12,

	kIOUSBDescriptorSizeSuperSpeedUSBEndpointCompanion = 6,

	kIOUSBDescriptorSizeSuperSpeedPlusIsochronousEndpointCompanion = 8,

	kIOUSBDescriptorSizeBillboardDeviceMinimum = 44,

	kIOUSBDescriptorSizeBillboardDeviceMaximum = 256,

	kIOUSBDescriptorSizePlatformECIDCapability = 28,

	kIOUSBDescriptorSizePlatformCapability = 20
}


enum tIOUSBDescriptorType {

	kIOUSBDescriptorTypeDevice = 1,

	kIOUSBDescriptorTypeConfiguration = 2,

	kIOUSBDescriptorTypeString = 3,

	kIOUSBDescriptorTypeInterface = 4,

	kIOUSBDescriptorTypeEndpoint = 5,

	kIOUSBDescriptorTypeDeviceQualifier = 6,

	kIOUSBDescriptorTypeOtherSpeedConfiguration = 7,

	kIOUSBDescriptorTypeInterfacePower = 8,

	kIOUSBDescriptorTypeOTG = 9,

	kIOUSBDescriptorTypeDebug = 10,

	kIOUSBDescriptorTypeInterfaceAssociation = 11,

	kIOUSBDescriptorTypeBOS = 15,

	kIOUSBDescriptorTypeDeviceCapability = 16,

	kIOUSBDecriptorTypeHID = 33,

	kIOUSBDecriptorTypeReport = 34,

	kIOUSBDescriptorTypePhysical = 35,

	kIOUSBDescriptorTypeHub = 41,

	kIOUSBDescriptorTypeSuperSpeedHub = 42,

	kIOUSBDescriptorTypeSuperSpeedUSBEndpointCompanion = 48,

	kIOUSBDescriptorTypeSuperSpeedPlusIsochronousEndpointCompanion = 49
}


enum tIOUSBDeviceCapabilityType {

	kIOUSBDeviceCapabilityTypeWireless = 1,

	kIOUSBDeviceCapabilityTypeUSB20Extension = 2,

	kIOUSBDeviceCapabilityTypeSuperSpeed = 3,

	kIOUSBDeviceCapabilityTypeContainerID = 4,

	kIOUSBDeviceCapabilityTypePlatform = 5,

	kIOUSBDeviceCapabilityTypePowerDelivery = 6,

	kIOUSBDeviceCapabilityTypeBatteryInfo = 7,

	kIOUSBDeviceCapabilityTypePdConsumerPort = 8,

	kIOUSBDeviceCapabilityTypePdProviderPort = 9,

	kIOUSBDeviceCapabilityTypeSuperSpeedPlus = 10,

	kIOUSBDeviceCapabilityTypePrecisionMeasurement = 11,

	kIOUSBDeviceCapabilityTypeWirelessExt = 12,

	kIOUSBDeviceCapabilityTypeBillboard = 13,

	kIOUSBDeviceCapabilityTypeBillboardAltMode = 15
}


enum tIOUSBDeviceRequest {

	kIOUSBDeviceRequestSize = 8,

	kIOUSBDeviceRequestDirectionMask = 128,

	kIOUSBDeviceRequestDirectionPhase = 7,

	kIOUSBDeviceRequestDirectionOut = 0,

	kIOUSBDeviceRequestDirectionIn = 128,

	kIOUSBDeviceRequestTypeMask = 96,

	kIOUSBDeviceRequestTypePhase = 5,

	kIOUSBDeviceRequestTypeStandard = 0,

	kIOUSBDeviceRequestTypeClass = 32,

	kIOUSBDeviceRequestTypeVendor = 64,

	kIOUSBDeviceRequestRecipientMask = 31,

	kIOUSBDeviceRequestRecipientPhase = 0,

	kIOUSBDeviceRequestRecipientDevice = 0,

	kIOUSBDeviceRequestRecipientInterface = 1,

	kIOUSBDeviceRequestRecipientEndpoint = 2,

	kIOUSBDeviceRequestRecipientOther = 3
}


enum tIOUSBDeviceRequestDirectionValue {

	kIOUSBDeviceRequestDirectionValueOut = 0,

	kIOUSBDeviceRequestDirectionValueIn = 1
}


enum tIOUSBDeviceRequestRecipientValue {

	kIOUSBDeviceRequestRecipientValueDevice = 0,

	kIOUSBDeviceRequestRecipientValueInterface = 1,

	kIOUSBDeviceRequestRecipientValueEndpoint = 2,

	kIOUSBDeviceRequestRecipientValueOther = 3
}


enum tIOUSBDeviceRequestTypeValue {

	kIOUSBDeviceRequestTypeValueStandard = 0,

	kIOUSBDeviceRequestTypeValueClass = 1,

	kIOUSBDeviceRequestTypeValueVendor = 2
}


enum tIOUSBEndpointDirection {

	kIOUSBEndpointDirectionOut = 0,

	kIOUSBEndpointDirectionIn = 1,

	kIOUSBEndpointDirectionUnknown = 2
}


enum tIOUSBEndpointSynchronizationType {

	kIOUSBEndpointSynchronizationTypeNone = 0,

	kIOUSBEndpointSynchronizationTypeAsynchronous = 1,

	kIOUSBEndpointSynchronizationTypeAdaptive = 2,

	kIOUSBEndpointSynchronizationTypeSynchronous = 3
}


enum tIOUSBEndpointType {

	kIOUSBEndpointTypeControl = 0,

	kIOUSBEndpointTypeIsochronous = 1,

	kIOUSBEndpointTypeBulk = 2,

	kIOUSBEndpointTypeInterrupt = 3
}


enum tIOUSBEndpointUsageType {

	kIOUSBEndpointUsageTypeIsocData = 0,

	kIOUSBEndpointUsageTypeIsocFeedback = 1,

	kIOUSBEndpointUsageTypeIsocImplicit = 2
}


enum tIOUSBLanguageID {

	kIOUSBLanguageIDEnglishUS = 1033
}

