
enum CBATTError {

	Success = 0,

	InvalidHandle = 1,

	ReadNotPermitted = 2,

	WriteNotPermitted = 3,

	InvalidPdu = 4,

	InsufficientAuthentication = 5,

	RequestNotSupported = 6,

	InvalidOffset = 7,

	InsufficientAuthorization = 8,

	PrepareQueueFull = 9,

	AttributeNotFound = 10,

	AttributeNotLong = 11,

	InsufficientEncryptionKeySize = 12,

	InvalidAttributeValueLength = 13,

	UnlikelyError = 14,

	InsufficientEncryption = 15,

	UnsupportedGroupType = 16,

	InsufficientResources = 17
}


declare var CBATTErrorDomain: string;

declare class CBATTRequest extends NSObject {

	readonly central: CBCentral;

	readonly characteristic: CBCharacteristic;

	readonly offset: number;

	setValue(_: NSData)

	value: NSData;
}

declare var CBAdvertisementDataIsConnectable: string;

declare var CBAdvertisementDataLocalNameKey: string;

declare var CBAdvertisementDataManufacturerDataKey: string;

declare var CBAdvertisementDataOverflowServiceUUIDsKey: string;

declare var CBAdvertisementDataServiceDataKey: string;

declare var CBAdvertisementDataServiceUUIDsKey: string;

declare var CBAdvertisementDataSolicitedServiceUUIDsKey: string;

declare var CBAdvertisementDataTxPowerLevelKey: string;

declare class CBAttribute extends NSObject {

	readonly UUID: CBUUID;
}

enum CBAttributePermissions {

	Readable = 1,

	Writeable = 2,

	ReadEncryptionRequired = 4,

	WriteEncryptionRequired = 8
}


declare class CBCentral extends CBPeer {

	readonly maximumUpdateValueLength: number;
}

declare class CBCentralManager extends CBManager {

	setDelegate(_: CBCentralManagerDelegate)

	delegate: CBCentralManagerDelegate;

	readonly isScanning: boolean;

	static create(delegate: CBCentralManagerDelegate, queue: NSObject);

	static create(delegate: CBCentralManagerDelegate, queue: NSObject, options: NSDictionary<string, any>);

	cancelPeripheralConnection(_: CBPeripheral): void;

	connectPeripheralOptions(_: CBPeripheral, options?: NSDictionary<string, any>): void;

	retrieveConnectedPeripheralsWithServices(_: NSArray<CBUUID>): NSArray<CBPeripheral>;

	retrievePeripheralsWithIdentifiers(_: NSArray<NSUUID>): NSArray<CBPeripheral>;

	scanForPeripheralsWithServicesOptions(_?: NSArray<CBUUID>, options?: NSDictionary<string, any>): void;

	stopScan(): void;
}

interface CBCentralManagerDelegate extends NSObjectProtocol {

	centralManagerDidConnectPeripheral?(_: CBCentralManager, didConnectPeripheral: CBPeripheral): void;

	centralManagerDidDisconnectPeripheralError?(_: CBCentralManager, didDisconnectPeripheral: CBPeripheral, error?: NSError): void;

	centralManagerDidDiscoverPeripheralAdvertisementDataRSSI?(_: CBCentralManager, didDiscoverPeripheral: CBPeripheral, advertisementData: NSDictionary<string, any>, RSSI: number): void;

	centralManagerDidFailToConnectPeripheralError?(_: CBCentralManager, didFailToConnectPeripheral: CBPeripheral, error?: NSError): void;

	centralManagerWillRestoreState?(_: CBCentralManager, willRestoreState: NSDictionary<string, any>): void;

	centralManagerDidUpdateState(_: CBCentralManager): void;
}
declare var CBCentralManagerDelegate: {

	prototype: CBCentralManagerDelegate;
};

declare var CBCentralManagerOptionRestoreIdentifierKey: string;

declare var CBCentralManagerOptionShowPowerAlertKey: string;

declare var CBCentralManagerRestoredStatePeripheralsKey: string;

declare var CBCentralManagerRestoredStateScanOptionsKey: string;

declare var CBCentralManagerRestoredStateScanServicesKey: string;

declare var CBCentralManagerScanOptionAllowDuplicatesKey: string;

declare var CBCentralManagerScanOptionSolicitedServiceUUIDsKey: string;

declare class CBCharacteristic extends CBAttribute {

	readonly descriptors: NSArray<CBDescriptor>;

	readonly isNotifying: boolean;

	readonly properties: CBCharacteristicProperties;

	readonly service: CBService;

	readonly value: NSData;
}

enum CBCharacteristicProperties {

	PropertyBroadcast = 1,

	PropertyRead = 2,

	PropertyWriteWithoutResponse = 4,

	PropertyWrite = 8,

	PropertyNotify = 16,

	PropertyIndicate = 32,

	PropertyAuthenticatedSignedWrites = 64,

	PropertyExtendedProperties = 128,

	PropertyNotifyEncryptionRequired = 256,

	PropertyIndicateEncryptionRequired = 512
}


enum CBCharacteristicWriteType {

	WithResponse = 0,

	WithoutResponse = 1
}


declare var CBConnectPeripheralOptionNotifyOnConnectionKey: string;

declare var CBConnectPeripheralOptionNotifyOnDisconnectionKey: string;

declare var CBConnectPeripheralOptionNotifyOnNotificationKey: string;

declare var CBConnectPeripheralOptionStartDelayKey: string;

enum CBConnectionEvent {

	PeerDisconnected = 0,

	PeerConnected = 1
}


declare class CBDescriptor extends CBAttribute {

	readonly characteristic: CBCharacteristic;

	readonly value: any;
}

enum CBError {

	Unknown = 0,

	InvalidParameters = 1,

	InvalidHandle = 2,

	NotConnected = 3,

	OutOfSpace = 4,

	OperationCancelled = 5,

	ConnectionTimeout = 6,

	PeripheralDisconnected = 7,

	UUIDNotAllowed = 8,

	AlreadyAdvertising = 9,

	ConnectionFailed = 10,

	ConnectionLimitReached = 11,

	UnkownDevice = 12,

	UnknownDevice = 12,

	OperationNotSupported = 13,

	PeerRemovedPairingInformation = 14,

	EncryptionTimedOut = 15
}


declare var CBErrorDomain: string;

declare class CBL2CAPChannel extends NSObject {

	readonly PSM: number;

	readonly inputStream: NSInputStream;

	readonly outputStream: NSOutputStream;

	readonly peer: CBPeer;
}

declare class CBManager extends NSObject {

	readonly authorization: CBManagerAuthorization;

	readonly state: CBManagerState;

	static authorization(): CBManagerAuthorization;
}

enum CBManagerAuthorization {

	NotDetermined = 0,

	Restricted = 1,

	Denied = 2,

	AllowedAlways = 3
}


enum CBManagerState {

	Unknown = 0,

	Resetting = 1,

	Unsupported = 2,

	Unauthorized = 3,

	PoweredOff = 4,

	PoweredOn = 5
}


declare class CBMutableCharacteristic extends CBCharacteristic {

	setDescriptors(_: NSArray<CBDescriptor>)

	descriptors: NSArray<CBDescriptor>;

	setPermissions(_: CBAttributePermissions)

	permissions: CBAttributePermissions;

	setProperties(_: CBCharacteristicProperties)

	properties: CBCharacteristicProperties;

	readonly subscribedCentrals: NSArray<CBCentral>;

	setValue(_: NSData)

	value: NSData;

	static create(type: CBUUID, properties: CBCharacteristicProperties, value: NSData, permissions: CBAttributePermissions);
}

declare class CBMutableDescriptor extends CBDescriptor {

	static create(type: CBUUID, value: any);
}

declare class CBMutableService extends CBService {

	setCharacteristics(_: NSArray<CBCharacteristic>)

	characteristics: NSArray<CBCharacteristic>;

	setIncludedServices(_: NSArray<CBService>)

	includedServices: NSArray<CBService>;

	static create(type: CBUUID, primary: boolean);
}

declare class CBPeer extends NSObject implements NSCopying {

	readonly identifier: NSUUID;

	copyWithZone(_?: any): any;
}

declare class CBPeripheral extends CBPeer {

	readonly canSendWriteWithoutResponse: boolean;

	setDelegate(_: CBPeripheralDelegate)

	delegate: CBPeripheralDelegate;

	readonly name: string;

	readonly services: NSArray<CBService>;

	readonly state: CBPeripheralState;

	discoverCharacteristicsForService(_?: NSArray<CBUUID>, forService: CBService): void;

	discoverDescriptorsForCharacteristic(_: CBCharacteristic): void;

	discoverIncludedServicesForService(_?: NSArray<CBUUID>, forService: CBService): void;

	discoverServices(_?: NSArray<CBUUID>): void;

	maximumWriteValueLengthForType(_: CBCharacteristicWriteType): number;

	openL2CAPChannel(_: number): void;

	readRSSI(): void;

	readValueForCharacteristic(_: CBCharacteristic): void;

	readValueForDescriptor(_: CBDescriptor): void;

	setNotifyValueForCharacteristic(_: boolean, forCharacteristic: CBCharacteristic): void;

	writeValueForCharacteristicType(_: NSData, forCharacteristic: CBCharacteristic, type: CBCharacteristicWriteType): void;

	writeValueForDescriptor(_: NSData, forDescriptor: CBDescriptor): void;
}

interface CBPeripheralDelegate extends NSObjectProtocol {

	peripheralDidDiscoverCharacteristicsForServiceError?(_: CBPeripheral, didDiscoverCharacteristicsForService: CBService, error?: NSError): void;

	peripheralDidDiscoverDescriptorsForCharacteristicError?(_: CBPeripheral, didDiscoverDescriptorsForCharacteristic: CBCharacteristic, error?: NSError): void;

	peripheralDidDiscoverIncludedServicesForServiceError?(_: CBPeripheral, didDiscoverIncludedServicesForService: CBService, error?: NSError): void;

	peripheralDidDiscoverServices?(_: CBPeripheral, didDiscoverServices?: NSError): void;

	peripheralDidModifyServices?(_: CBPeripheral, didModifyServices: NSArray<CBService>): void;

	peripheralDidOpenL2CAPChannelError?(_: CBPeripheral, didOpenL2CAPChannel?: CBL2CAPChannel, error?: NSError): void;

	peripheralDidReadRSSIError?(_: CBPeripheral, didReadRSSI: number, error?: NSError): void;

	peripheralDidUpdateNotificationStateForCharacteristicError?(_: CBPeripheral, didUpdateNotificationStateForCharacteristic: CBCharacteristic, error?: NSError): void;

	peripheralDidUpdateValueForCharacteristicError?(_: CBPeripheral, didUpdateValueForCharacteristic: CBCharacteristic, error?: NSError): void;

	peripheralDidUpdateValueForDescriptorError?(_: CBPeripheral, didUpdateValueForDescriptor: CBDescriptor, error?: NSError): void;

	peripheralDidWriteValueForCharacteristicError?(_: CBPeripheral, didWriteValueForCharacteristic: CBCharacteristic, error?: NSError): void;

	peripheralDidWriteValueForDescriptorError?(_: CBPeripheral, didWriteValueForDescriptor: CBDescriptor, error?: NSError): void;

	peripheralDidUpdateName?(_: CBPeripheral): void;

	peripheralIsReadyToSendWriteWithoutResponse?(_: CBPeripheral): void;
}
declare var CBPeripheralDelegate: {

	prototype: CBPeripheralDelegate;
};

declare class CBPeripheralManager extends CBManager {

	setDelegate(_: CBPeripheralManagerDelegate)

	delegate: CBPeripheralManagerDelegate;

	readonly isAdvertising: boolean;

	static create(delegate: CBPeripheralManagerDelegate, queue: NSObject);

	static create(delegate: CBPeripheralManagerDelegate, queue: NSObject, options: NSDictionary<string, any>);

	addService(_: CBMutableService): void;

	publishL2CAPChannelWithEncryption(_: boolean): void;

	removeAllServices(): void;

	removeService(_: CBMutableService): void;

	respondToRequestWithResult(_: CBATTRequest, withResult: CBATTError): void;

	setDesiredConnectionLatencyForCentral(_: CBPeripheralManagerConnectionLatency, forCentral: CBCentral): void;

	startAdvertising(_?: NSDictionary<string, any>): void;

	stopAdvertising(): void;

	unpublishL2CAPChannel(_: number): void;

	updateValueForCharacteristicOnSubscribedCentrals(_: NSData, forCharacteristic: CBMutableCharacteristic, onSubscribedCentrals?: NSArray<CBCentral>): boolean;
}

enum CBPeripheralManagerConnectionLatency {

	Low = 0,

	Medium = 1,

	High = 2
}


interface CBPeripheralManagerDelegate extends NSObjectProtocol {

	peripheralManagerCentralDidSubscribeToCharacteristic?(_: CBPeripheralManager, central: CBCentral, didSubscribeToCharacteristic: CBCharacteristic): void;

	peripheralManagerCentralDidUnsubscribeFromCharacteristic?(_: CBPeripheralManager, central: CBCentral, didUnsubscribeFromCharacteristic: CBCharacteristic): void;

	peripheralManagerDidAddServiceError?(_: CBPeripheralManager, didAddService: CBService, error?: NSError): void;

	peripheralManagerDidOpenL2CAPChannelError?(_: CBPeripheralManager, didOpenL2CAPChannel?: CBL2CAPChannel, error?: NSError): void;

	peripheralManagerDidPublishL2CAPChannelError?(_: CBPeripheralManager, didPublishL2CAPChannel: number, error?: NSError): void;

	peripheralManagerDidReceiveReadRequest?(_: CBPeripheralManager, didReceiveReadRequest: CBATTRequest): void;

	peripheralManagerDidReceiveWriteRequests?(_: CBPeripheralManager, didReceiveWriteRequests: NSArray<CBATTRequest>): void;

	peripheralManagerDidUnpublishL2CAPChannelError?(_: CBPeripheralManager, didUnpublishL2CAPChannel: number, error?: NSError): void;

	peripheralManagerWillRestoreState?(_: CBPeripheralManager, willRestoreState: NSDictionary<string, any>): void;

	peripheralManagerDidStartAdvertisingError?(_: CBPeripheralManager, error?: NSError): void;

	peripheralManagerDidUpdateState(_: CBPeripheralManager): void;

	peripheralManagerIsReadyToUpdateSubscribers?(_: CBPeripheralManager): void;
}
declare var CBPeripheralManagerDelegate: {

	prototype: CBPeripheralManagerDelegate;
};

declare var CBPeripheralManagerOptionRestoreIdentifierKey: string;

declare var CBPeripheralManagerOptionShowPowerAlertKey: string;

declare var CBPeripheralManagerRestoredStateAdvertisementDataKey: string;

declare var CBPeripheralManagerRestoredStateServicesKey: string;

enum CBPeripheralState {

	Disconnected = 0,

	Connecting = 1,

	Connected = 2,

	Disconnecting = 3
}


declare class CBService extends CBAttribute {

	readonly characteristics: NSArray<CBCharacteristic>;

	readonly includedServices: NSArray<CBService>;

	readonly isPrimary: boolean;

	readonly peripheral: CBPeripheral;
}

declare class CBUUID extends NSObject implements NSCopying {

	static UUIDWithData(_: NSData): CBUUID;

	static UUIDWithNSUUID(_: NSUUID): CBUUID;

	static UUIDWithString(_: string): CBUUID;

	readonly UUIDString: string;

	readonly data: NSData;

	copyWithZone(_?: any): any;
}

declare var CBUUIDCharacteristicAggregateFormatString: string;

declare var CBUUIDCharacteristicExtendedPropertiesString: string;

declare var CBUUIDCharacteristicFormatString: string;

declare var CBUUIDCharacteristicUserDescriptionString: string;

declare var CBUUIDCharacteristicValidRangeString: string;

declare var CBUUIDClientCharacteristicConfigurationString: string;

declare var CBUUIDL2CAPPSMCharacteristicString: string;

declare var CBUUIDServerCharacteristicConfigurationString: string;
