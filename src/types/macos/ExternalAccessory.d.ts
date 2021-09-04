
declare class EAAccessory extends NSObject {

	readonly isConnected: boolean;

	readonly connectionID: number;

	setDelegate(_: EAAccessoryDelegate)

	delegate: EAAccessoryDelegate;

	readonly firmwareRevision: string;

	readonly hardwareRevision: string;

	readonly manufacturer: string;

	readonly modelNumber: string;

	readonly name: string;

	readonly protocolStrings: NSArray<string>;

	readonly serialNumber: string;
}

interface EAAccessoryDelegate extends NSObjectProtocol {

	accessoryDidDisconnect?(_: EAAccessory): void;
}
declare var EAAccessoryDelegate: {

	prototype: EAAccessoryDelegate;
};

declare var EAAccessoryDidConnectNotification: string;

declare var EAAccessoryDidDisconnectNotification: string;

declare var EAAccessoryKey: string;

declare class EAAccessoryManager extends NSObject {

	static sharedAccessoryManager(): EAAccessoryManager;

	readonly connectedAccessories: NSArray<EAAccessory>;

	registerForLocalNotifications(): void;

	unregisterForLocalNotifications(): void;
}

enum EABluetoothAccessoryPickerErrorCode {

	AlreadyConnected = 0,

	ResultNotFound = 1,

	ResultCancelled = 2,

	ResultFailed = 3
}


declare var EABluetoothAccessoryPickerErrorDomain: string;

declare const EAConnectionIDNone: number;

declare class EASession extends NSObject {

	readonly accessory: EAAccessory;

	readonly inputStream: NSInputStream;

	readonly outputStream: NSOutputStream;

	readonly protocolString: string;

	static create(accessory: EAAccessory, forProtocol: string);
}

interface EAWiFiUnconfiguredAccessoryBrowserDelegate extends NSObjectProtocol {
}
declare var EAWiFiUnconfiguredAccessoryBrowserDelegate: {

	prototype: EAWiFiUnconfiguredAccessoryBrowserDelegate;
};

enum EAWiFiUnconfiguredAccessoryBrowserState {

	WiFiUnavailable = 0,

	Stopped = 1,

	Searching = 2,

	Configuring = 3
}


enum EAWiFiUnconfiguredAccessoryConfigurationStatus {

	Success = 0,

	UserCancelledConfiguration = 1,

	Failed = 2
}


enum EAWiFiUnconfiguredAccessoryProperties {

	PropertySupportsAirPlay = 1,

	PropertySupportsAirPrint = 2,

	PropertySupportsHomeKit = 4
}

