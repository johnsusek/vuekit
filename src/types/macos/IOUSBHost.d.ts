
enum IOUSBHostAbortOption {

	Asynchronous = 0,

	Synchronous = 1
}


declare var IOUSBHostDefaultControlCompletionTimeout: number;

declare class IOUSBHostDevice extends IOUSBHostObject {

	static createMatchingDictionaryWithVendorIDProductIDBcdDeviceDeviceClassDeviceSubclassDeviceProtocolSpeedProductIDArray(_?: number, productID?: number, bcdDevice?: number, deviceClass?: number, deviceSubclass?: number, deviceProtocol?: number, speed?: number, productIDArray?: NSArray<any>): NSDictionary<any, any>;

	readonly capabilityDescriptors: IOUSBBOSDescriptor;

	readonly configurationDescriptor: IOUSBConfigurationDescriptor;

	readonly deviceDescriptor: IOUSBDeviceDescriptor;

	configurationDescriptorWithConfigurationValueError(error: number): IOUSBConfigurationDescriptor;

	configurationDescriptorWithIndexError(error: number): IOUSBConfigurationDescriptor;

	configureWithValueMatchInterfacesError(matchInterfaces: number, error: boolean): boolean;

	resetWithError(): boolean;
}

declare var IOUSBHostDevicePropertyKeyContainerID: string;

declare var IOUSBHostDevicePropertyKeyCurrentConfiguration: string;

declare var IOUSBHostDevicePropertyKeySerialNumberString: string;

declare var IOUSBHostDevicePropertyKeyVendorString: string;

declare var IOUSBHostErrorDomain: string;

declare class IOUSBHostIOSource extends NSObject {

	readonly deviceAddress: number;

	readonly endpointAddress: number;

	readonly hostInterface: IOUSBHostInterface;
}

interface IOUSBHostIOSourceDescriptors {
	bcdUSB: number;
	descriptor: IOUSBEndpointDescriptor;
	ssCompanionDescriptor: IOUSBSuperSpeedEndpointCompanionDescriptor;
	sspCompanionDescriptor: IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor;
}
declare var IOUSBHostIOSourceDescriptors: IOUSBHostIOSourceDescriptors;

declare class IOUSBHostInterface extends IOUSBHostObject {

	static createMatchingDictionaryWithVendorIDProductIDBcdDeviceInterfaceNumberConfigurationValueInterfaceClassInterfaceSubclassInterfaceProtocolSpeedProductIDArray(_?: number, productID?: number, bcdDevice?: number, interfaceNumber?: number, configurationValue?: number, interfaceClass?: number, interfaceSubclass?: number, interfaceProtocol?: number, speed?: number, productIDArray?: NSArray<any>): NSDictionary<any, any>;

	readonly configurationDescriptor: IOUSBConfigurationDescriptor;

	readonly idleTimeout: number;

	readonly interfaceDescriptor: IOUSBInterfaceDescriptor;

	copyPipeWithAddressError(error: number): IOUSBHostPipe;

	selectAlternateSettingError(error: number): boolean;

	setIdleTimeoutError(error: number): boolean;
}

declare var IOUSBHostInterfacePropertyKeyAlternateSetting: string;

interface IOUSBHostIsochronousFrame {
	status: number;
	requestCount: number;
	completeCount: number;
	reserved: number;
	timeStamp: number;
}
declare var IOUSBHostIsochronousFrame: IOUSBHostIsochronousFrame;

declare var IOUSBHostMatchingPropertyKeyConfigurationValue: string;

declare var IOUSBHostMatchingPropertyKeyDeviceClass: string;

declare var IOUSBHostMatchingPropertyKeyDeviceProtocol: string;

declare var IOUSBHostMatchingPropertyKeyDeviceReleaseNumber: string;

declare var IOUSBHostMatchingPropertyKeyDeviceSubClass: string;

declare var IOUSBHostMatchingPropertyKeyInterfaceClass: string;

declare var IOUSBHostMatchingPropertyKeyInterfaceNumber: string;

declare var IOUSBHostMatchingPropertyKeyInterfaceProtocol: string;

declare var IOUSBHostMatchingPropertyKeyInterfaceSubClass: string;

declare var IOUSBHostMatchingPropertyKeyProductID: string;

declare var IOUSBHostMatchingPropertyKeyProductIDArray: string;

declare var IOUSBHostMatchingPropertyKeyProductIDMask: string;

declare var IOUSBHostMatchingPropertyKeyProductIDMaskVar: string;

declare var IOUSBHostMatchingPropertyKeySpeed: string;

declare var IOUSBHostMatchingPropertyKeyVendorID: string;

declare class IOUSBHostObject extends NSObject {

	readonly deviceAddress: number;

	readonly ioService: number;

	readonly queue: NSObject;

	static create(IOService: number, options: IOUSBHostObjectInitOptions, queue: NSObject, error: NSError, interestHandler: (p1: IOUSBHostObject, p2: number, p3: any) => void);

	abortDeviceRequestsWithOptionError(error: IOUSBHostAbortOption): boolean;

	descriptorWithTypeLengthIndexLanguageIDRequestTypeRequestRecipientError(length: tIOUSBDescriptorType, index: number, languageID: number, requestType: number, requestRecipient: tIOUSBDeviceRequestTypeValue, error: tIOUSBDeviceRequestRecipientValue): IOUSBDescriptorHeader;

	destroy(): void;

	enqueueDeviceRequestDataCompletionTimeoutErrorCompletionHandler(_: IOUSBDeviceRequest, data?: NSMutableData, completionTimeout: number, error?: NSError, completionHandler?: (p1: number, p2: number) => void): boolean;

	frameNumberWithTime(_?: number): number;

	ioDataWithCapacityError(error: number): NSMutableData;

	sendDeviceRequestDataBytesTransferredCompletionTimeoutError(data: IOUSBDeviceRequest, bytesTransferred?: NSMutableData, completionTimeout?: number, error: number): boolean;

	stringWithIndexLanguageIDError(languageID: number, error: number): string;
}

enum IOUSBHostObjectInitOptions {

	None = 0,

	DeviceCapture = 1
}


declare class IOUSBHostPipe extends IOUSBHostIOSource {

	readonly descriptors: IOUSBHostIOSourceDescriptors;

	readonly idleTimeout: number;

	readonly originalDescriptors: IOUSBHostIOSourceDescriptors;

	abortWithOptionError(error: IOUSBHostAbortOption): boolean;

	adjustPipeWithDescriptorsError(error: IOUSBHostIOSourceDescriptors): boolean;

	clearStallWithError(): boolean;

	copyStreamWithStreamIDError(error: number): IOUSBHostStream;

	disableStreamsWithError(): boolean;

	enableStreamsWithError(): boolean;

	enqueueControlRequestDataCompletionTimeoutErrorCompletionHandler(_: IOUSBDeviceRequest, data?: NSMutableData, completionTimeout: number, error?: NSError, completionHandler?: (p1: number, p2: number) => void): boolean;

	enqueueIORequestWithDataCompletionTimeoutErrorCompletionHandler(_?: NSMutableData, completionTimeout: number, error?: NSError, completionHandler?: (p1: number, p2: number) => void): boolean;

	enqueueIORequestWithDataFrameListFrameListCountFirstFrameNumberErrorCompletionHandler(_: NSMutableData, frameList: IOUSBHostIsochronousFrame, frameListCount: number, firstFrameNumber: number, error?: NSError, completionHandler?: (p1: number, p2: IOUSBHostIsochronousFrame) => void): boolean;

	sendControlRequestDataBytesTransferredCompletionTimeoutError(data: IOUSBDeviceRequest, bytesTransferred?: NSMutableData, completionTimeout?: number, error: number): boolean;

	sendIORequestWithDataBytesTransferredCompletionTimeoutError(bytesTransferred?: NSMutableData, completionTimeout?: number, error: number): boolean;

	sendIORequestWithDataFrameListFrameListCountFirstFrameNumberError(frameList: NSMutableData, frameListCount: IOUSBHostIsochronousFrame, firstFrameNumber: number, error: number): boolean;

	setIdleTimeoutError(error: number): boolean;
}

declare var IOUSBHostPropertyKeyLocationID: string;

declare class IOUSBHostStream extends IOUSBHostIOSource {

	readonly hostPipe: IOUSBHostPipe;

	readonly streamID: number;

	abortWithError(): boolean;

	abortWithOptionError(error: IOUSBHostAbortOption): boolean;

	enqueueIORequestWithDataErrorCompletionHandler(_?: NSMutableData, error?: NSError, completionHandler?: (p1: number, p2: number) => void): boolean;

	sendIORequestWithDataBytesTransferredError(bytesTransferred?: NSMutableData, error?: number): boolean;
}

declare var IOUSBHostVersionNumber: number;

declare var IOUSBHostVersionString: number;
