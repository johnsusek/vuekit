
declare function MIDIClientCreate(name: string, notifyProc: (p1: MIDINotification, p2: any) => void, notifyRefCon: any, outClient: number): number;

declare function MIDIClientCreateWithBlock(name: string, outClient: number, notifyBlock: (p1: MIDINotification) => void): number;

declare function MIDIClientDispose(client: number): number;

interface MIDIControlTransform {
	controlType: MIDITransformControlType;
	remappedControlType: MIDITransformControlType;
	controlNumber: number;
	transform: MIDITransformType;
	param: number;
}
declare var MIDIControlTransform: MIDIControlTransform;

declare function MIDIDestinationCreate(client: number, name: string, readProc: (p1: MIDIPacketList, p2: any, p3: any) => void, refCon: any, outDest: number): number;

declare function MIDIDestinationCreateWithBlock(client: number, name: string, outDest: number, readBlock: (p1: MIDIPacketList, p2: any) => void): number;

declare function MIDIDeviceAddEntity(device: number, name: string, embedded: boolean, numSourceEndpoints: number, numDestinationEndpoints: number, newEntity: number): number;

declare function MIDIDeviceCreate(owner: MIDIDriverInterface, name: string, manufacturer: string, model: string, outDevice: number): number;

declare function MIDIDeviceDispose(device: number): number;

declare function MIDIDeviceGetEntity(device: number, entityIndex0: number): number;

declare function MIDIDeviceGetNumberOfEntities(device: number): number;

declare function MIDIDeviceListAddDevice(devList: number, dev: number): number;

declare function MIDIDeviceListDispose(devList: number): number;

declare function MIDIDeviceListGetDevice(devList: number, index0: number): number;

declare function MIDIDeviceListGetNumberOfDevices(devList: number): number;

declare function MIDIDeviceRemoveEntity(device: number, entity: number): number;

declare function MIDIDriverEnableMonitoring(driver: MIDIDriverInterface, enabled: boolean): number;

interface MIDIDriverInterface {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	FindDevices: (p1: MIDIDriverInterface, p2: number) => number;
	Start: (p1: MIDIDriverInterface, p2: number) => number;
	Stop: (p1: MIDIDriverInterface) => number;
	Configure: (p1: MIDIDriverInterface, p2: number) => number;
	Send: (p1: MIDIDriverInterface, p2: MIDIPacketList, p3: any, p4: any) => number;
	EnableSource: (p1: MIDIDriverInterface, p2: number, p3: boolean) => number;
	Flush: (p1: MIDIDriverInterface, p2: number, p3: any, p4: any) => number;
	Monitor: (p1: MIDIDriverInterface, p2: number, p3: MIDIPacketList) => number;
}
declare var MIDIDriverInterface: MIDIDriverInterface;

declare function MIDIEndpointDispose(endpt: number): number;

declare function MIDIEndpointGetEntity(inEndpoint: number, outEntity: number): number;

declare function MIDIEndpointGetRefCons(endpt: number, ref1: any, ref2: any): number;

declare function MIDIEndpointSetRefCons(endpt: number, ref1: any, ref2: any): number;

declare function MIDIEntityAddOrRemoveEndpoints(entity: number, numSourceEndpoints: number, numDestinationEndpoints: number): number;

declare function MIDIEntityGetDestination(entity: number, destIndex0: number): number;

declare function MIDIEntityGetDevice(inEntity: number, outDevice: number): number;

declare function MIDIEntityGetNumberOfDestinations(entity: number): number;

declare function MIDIEntityGetNumberOfSources(entity: number): number;

declare function MIDIEntityGetSource(entity: number, sourceIndex0: number): number;

declare function MIDIExternalDeviceCreate(name: string, manufacturer: string, model: string, outDevice: number): number;

declare function MIDIFlushOutput(dest: number): number;

declare function MIDIGetDestination(destIndex0: number): number;

declare function MIDIGetDevice(deviceIndex0: number): number;

declare function MIDIGetDriverDeviceList(driver: MIDIDriverInterface): number;

declare function MIDIGetDriverIORunLoop(): any;

declare function MIDIGetExternalDevice(deviceIndex0: number): number;

declare function MIDIGetNumberOfDestinations(): number;

declare function MIDIGetNumberOfDevices(): number;

declare function MIDIGetNumberOfExternalDevices(): number;

declare function MIDIGetNumberOfSources(): number;

declare function MIDIGetSource(sourceIndex0: number): number;

interface MIDIIOErrorNotification {
	messageID: MIDINotificationMessageID;
	messageSize: number;
	driverDevice: number;
	errorCode: number;
}
declare var MIDIIOErrorNotification: MIDIIOErrorNotification;

declare function MIDIInputPortCreate(client: number, portName: string, readProc: (p1: MIDIPacketList, p2: any, p3: any) => void, refCon: any, outPort: number): number;

declare function MIDIInputPortCreateWithBlock(client: number, portName: string, outPort: number, readBlock: (p1: MIDIPacketList, p2: any) => void): number;

interface MIDINotification {
	messageID: MIDINotificationMessageID;
	messageSize: number;
}
declare var MIDINotification: MIDINotification;

enum MIDINotificationMessageID {

	kMIDIMsgSetupChanged = 1,

	kMIDIMsgObjectAdded = 2,

	kMIDIMsgObjectRemoved = 3,

	kMIDIMsgPropertyChanged = 4,

	kMIDIMsgThruConnectionsChanged = 5,

	kMIDIMsgSerialPortOwnerChanged = 6,

	kMIDIMsgIOError = 7
}


interface MIDIObjectAddRemoveNotification {
	messageID: MIDINotificationMessageID;
	messageSize: number;
	parent: number;
	parentType: MIDIObjectType;
	child: number;
	childType: MIDIObjectType;
}
declare var MIDIObjectAddRemoveNotification: MIDIObjectAddRemoveNotification;

declare function MIDIObjectFindByUniqueID(inUniqueID: number, outObject: number, outObjectType: MIDIObjectType): number;

declare function MIDIObjectGetDataProperty(obj: number, propertyID: string, outData: NSData): number;

declare function MIDIObjectGetDictionaryProperty(obj: number, propertyID: string, outDict: NSDictionary<any, any>): number;

declare function MIDIObjectGetIntegerProperty(obj: number, propertyID: string, outValue: number): number;

declare function MIDIObjectGetProperties(obj: number, outProperties: any, deep: boolean): number;

declare function MIDIObjectGetStringProperty(obj: number, propertyID: string, str: string): number;

interface MIDIObjectPropertyChangeNotification {
	messageID: MIDINotificationMessageID;
	messageSize: number;
	object: number;
	objectType: MIDIObjectType;
	propertyName: string;
}
declare var MIDIObjectPropertyChangeNotification: MIDIObjectPropertyChangeNotification;

declare function MIDIObjectRemoveProperty(obj: number, propertyID: string): number;

declare function MIDIObjectSetDataProperty(obj: number, propertyID: string, data: NSData): number;

declare function MIDIObjectSetDictionaryProperty(obj: number, propertyID: string, dict: NSDictionary<any, any>): number;

declare function MIDIObjectSetIntegerProperty(obj: number, propertyID: string, value: number): number;

declare function MIDIObjectSetStringProperty(obj: number, propertyID: string, str: string): number;

enum MIDIObjectType {

	kMIDIObjectType_Other = -1,

	kMIDIObjectType_Device = 0,

	kMIDIObjectType_Entity = 1,

	kMIDIObjectType_Source = 2,

	kMIDIObjectType_Destination = 3,

	kMIDIObjectType_ExternalDevice = 16,

	kMIDIObjectType_ExternalEntity = 17,

	kMIDIObjectType_ExternalSource = 18,

	kMIDIObjectType_ExternalDestination = 19
}


declare function MIDIOutputPortCreate(client: number, portName: string, outPort: number): number;

interface MIDIPacket {
	timeStamp: number;
	length: number;
	data: number;
}
declare var MIDIPacket: MIDIPacket;

interface MIDIPacketList {
	numPackets: number;
	packet: MIDIPacket;
}
declare var MIDIPacketList: MIDIPacketList;

declare function MIDIPacketListAdd(pktlist: MIDIPacketList, listSize: number, curPacket: MIDIPacket, time: number, nData: number, data: string | any): MIDIPacket;

declare function MIDIPacketListInit(pktlist: MIDIPacketList): MIDIPacket;

declare function MIDIPortConnectSource(port: number, source: number, connRefCon: any): number;

declare function MIDIPortDisconnectSource(port: number, source: number): number;

declare function MIDIPortDispose(port: number): number;

declare function MIDIReceived(src: number, pktlist: MIDIPacketList): number;

declare function MIDIRestart(): number;

declare function MIDISend(port: number, dest: number, pktlist: MIDIPacketList): number;

declare function MIDISendSysex(request: MIDISysexSendRequest): number;

declare function MIDISetupAddDevice(device: number): number;

declare function MIDISetupAddExternalDevice(device: number): number;

declare function MIDISetupRemoveDevice(device: number): number;

declare function MIDISetupRemoveExternalDevice(device: number): number;

declare function MIDISourceCreate(client: number, name: string, outSrc: number): number;

interface MIDISysexSendRequest {
	destination: number;
	data: string;
	bytesToSend: number;
	complete: boolean;
	reserved: number;
	completionProc: (p1: MIDISysexSendRequest) => void;
	completionRefCon: any;
}
declare var MIDISysexSendRequest: MIDISysexSendRequest;

declare function MIDIThruConnectionCreate(inPersistentOwnerID: string, inConnectionParams: NSData, outConnection: number): number;

declare function MIDIThruConnectionDispose(connection: number): number;

interface MIDIThruConnectionEndpoint {
	endpointRef: number;
	uniqueID: number;
}
declare var MIDIThruConnectionEndpoint: MIDIThruConnectionEndpoint;

declare function MIDIThruConnectionFind(inPersistentOwnerID: string, outConnectionList: NSData): number;

declare function MIDIThruConnectionGetParams(connection: number, outConnectionParams: NSData): number;

interface MIDIThruConnectionParams {
	version: number;
	numSources: number;
	sources: MIDIThruConnectionEndpoint;
	numDestinations: number;
	destinations: MIDIThruConnectionEndpoint;
	channelMap: number;
	lowVelocity: number;
	highVelocity: number;
	lowNote: number;
	highNote: number;
	noteNumber: MIDITransform;
	velocity: MIDITransform;
	keyPressure: MIDITransform;
	channelPressure: MIDITransform;
	programChange: MIDITransform;
	pitchBend: MIDITransform;
	filterOutSysEx: number;
	filterOutMTC: number;
	filterOutBeatClock: number;
	filterOutTuneRequest: number;
	reserved2: number;
	filterOutAllControls: number;
	numControlTransforms: number;
	numMaps: number;
	reserved3: number;
}
declare var MIDIThruConnectionParams: MIDIThruConnectionParams;

declare function MIDIThruConnectionParamsInitialize(inConnectionParams: MIDIThruConnectionParams): void;

declare function MIDIThruConnectionSetParams(connection: number, inConnectionParams: NSData): number;

interface MIDITransform {
	transform: MIDITransformType;
	param: number;
}
declare var MIDITransform: MIDITransform;

enum MIDITransformControlType {

	kMIDIControlType_7Bit = 0,

	kMIDIControlType_14Bit = 1,

	kMIDIControlType_7BitRPN = 2,

	kMIDIControlType_14BitRPN = 3,

	kMIDIControlType_7BitNRPN = 4,

	kMIDIControlType_14BitNRPN = 5
}


enum MIDITransformType {

	kMIDITransform_None = 0,

	kMIDITransform_FilterOut = 1,

	kMIDITransform_MapControl = 2,

	kMIDITransform_Add = 8,

	kMIDITransform_Scale = 9,

	kMIDITransform_MinValue = 10,

	kMIDITransform_MaxValue = 11,

	kMIDITransform_MapValue = 12
}


interface MIDIValueMap {
	value: number;
}
declare var MIDIValueMap: MIDIValueMap;

declare var kMIDIDriverPropertyUsesSerial: string;

declare const kMIDIIDNotUnique: number;

declare const kMIDIInvalidClient: number;

declare const kMIDIInvalidPort: number;

declare const kMIDIInvalidUniqueID: number;

declare const kMIDIMessageSendErr: number;

declare const kMIDINoConnection: number;

declare const kMIDINoCurrentSetup: number;

declare const kMIDINotPermitted: number;

declare const kMIDIObjectNotFound: number;

declare var kMIDIObjectType_ExternalMask: MIDIObjectType;

declare var kMIDIPropertyAdvanceScheduleTimeMuSec: string;

declare var kMIDIPropertyCanRoute: string;

declare var kMIDIPropertyConnectionUniqueID: string;

declare var kMIDIPropertyDeviceID: string;

declare var kMIDIPropertyDisplayName: string;

declare var kMIDIPropertyDriverDeviceEditorApp: string;

declare var kMIDIPropertyDriverOwner: string;

declare var kMIDIPropertyDriverVersion: string;

declare var kMIDIPropertyImage: string;

declare var kMIDIPropertyIsBroadcast: string;

declare var kMIDIPropertyIsDrumMachine: string;

declare var kMIDIPropertyIsEffectUnit: string;

declare var kMIDIPropertyIsEmbeddedEntity: string;

declare var kMIDIPropertyIsMixer: string;

declare var kMIDIPropertyIsSampler: string;

declare var kMIDIPropertyManufacturer: string;

declare var kMIDIPropertyMaxReceiveChannels: string;

declare var kMIDIPropertyMaxSysExSpeed: string;

declare var kMIDIPropertyMaxTransmitChannels: string;

declare var kMIDIPropertyModel: string;

declare var kMIDIPropertyName: string;

declare var kMIDIPropertyNameConfigurationDictionary: string;

declare var kMIDIPropertyOffline: string;

declare var kMIDIPropertyPanDisruptsStereo: string;

declare var kMIDIPropertyPrivate: string;

declare var kMIDIPropertyReceiveChannels: string;

declare var kMIDIPropertyReceivesBankSelectLSB: string;

declare var kMIDIPropertyReceivesBankSelectMSB: string;

declare var kMIDIPropertyReceivesClock: string;

declare var kMIDIPropertyReceivesMTC: string;

declare var kMIDIPropertyReceivesNotes: string;

declare var kMIDIPropertyReceivesProgramChanges: string;

declare var kMIDIPropertySingleRealtimeEntity: string;

declare var kMIDIPropertySupportsGeneralMIDI: string;

declare var kMIDIPropertySupportsMMC: string;

declare var kMIDIPropertySupportsShowControl: string;

declare var kMIDIPropertyTransmitChannels: string;

declare var kMIDIPropertyTransmitsBankSelectLSB: string;

declare var kMIDIPropertyTransmitsBankSelectMSB: string;

declare var kMIDIPropertyTransmitsClock: string;

declare var kMIDIPropertyTransmitsMTC: string;

declare var kMIDIPropertyTransmitsNotes: string;

declare var kMIDIPropertyTransmitsProgramChanges: string;

declare var kMIDIPropertyUniqueID: string;

declare const kMIDIServerStartErr: number;

declare const kMIDISetupFormatErr: number;

declare const kMIDIThruConnection_MaxEndpoints: number;

declare const kMIDIUnknownEndpoint: number;

declare const kMIDIUnknownError: number;

declare const kMIDIUnknownProperty: number;

declare const kMIDIWrongEndpointType: number;

declare const kMIDIWrongPropertyType: number;

declare const kMIDIWrongThread: number;
