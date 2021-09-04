
enum BluetoothKeyboardReturnType {

	kBluetoothKeyboardANSIReturn = 0,

	kBluetoothKeyboardISOReturn = 1,

	kBluetoothKeyboardJISReturn = 2,

	kBluetoothKeyboardNoReturn = 3
}


declare class IOBluetoothAccessibilityIgnoredImageCell extends NSImageCell {
}

declare class IOBluetoothAccessibilityIgnoredTextFieldCell extends NSTextFieldCell {
}

declare class IOBluetoothDeviceSelectorController extends NSWindowController {

	static deviceSelector(): IOBluetoothDeviceSelectorController;

	addAllowedUUID(_: IOBluetoothSDPUUID): void;

	addAllowedUUIDArray(_: NSArray<any>): void;

	beginSheetModalForWindowModalDelegateDidEndSelectorContextInfo(_: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any): number;

	clearAllowedUUIDs(): void;

	getCancel(): string;

	getDescriptionText(): string;

	getHeader(): string;

	getOptions(): number;

	getPrompt(): string;

	getResults(): NSArray<any>;

	getSearchAttributes(): IOBluetoothDeviceSearchAttributes;

	getTitle(): string;

	runModal(): number;

	setCancel(_: string): void;

	setDescriptionText(_: string): void;

	setHeader(_: string): void;

	setOptions(_: number): void;

	setPrompt(_: string): void;

	setSearchAttributes(_: IOBluetoothDeviceSearchAttributes): void;

	setTitle(_: string): void;
}

declare function IOBluetoothGetDeviceSelectorController(): any;

declare function IOBluetoothGetPairingController(): any;

declare class IOBluetoothObjectPushUIController extends NSWindowController {

	static create(objectPushWithBluetoothDevice: IOBluetoothDevice, withFiles: NSArray<any> | any[], delegate: any);

	beginSheetModalForWindowModalDelegateDidEndSelectorContextInfo(_: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any): number;

	getDevice(): IOBluetoothDevice;

	getTitle(): string;

	isTransferInProgress(): boolean;

	runModal(): void;

	runPanel(): void;

	setIconImage(_: NSImage): void;

	setTitle(_: string): void;

	stop(): void;
}

declare class IOBluetoothPairingController extends NSWindowController {

	static pairingController(): IOBluetoothPairingController;

	addAllowedUUID(_: IOBluetoothSDPUUID): void;

	addAllowedUUIDArray(_: NSArray<any>): void;

	clearAllowedUUIDs(): void;

	getDescriptionText(): string;

	getOptions(): number;

	getPrompt(): string;

	getResults(): NSArray<any>;

	getSearchAttributes(): IOBluetoothDeviceSearchAttributes;

	getTitle(): string;

	runModal(): number;

	setDescriptionText(_: string): void;

	setOptions(_: number): void;

	setPrompt(_: string): void;

	setSearchAttributes(_: IOBluetoothDeviceSearchAttributes): void;

	setTitle(_: string): void;
}

declare class IOBluetoothPasskeyDisplay extends NSView {

	static sharedDisplayView(): IOBluetoothPasskeyDisplay;

	setBackgroundImageConstraint(_: NSLayoutConstraint)

	backgroundImageConstraint: NSLayoutConstraint;

	setCenteredView(_: NSView)

	centeredView: NSView;

	setIsIncomingRequest(_: boolean)

	isIncomingRequest: boolean;

	setPasskey(_: string)

	passkey: string;

	setReturnHighlightImage(_: NSImage)

	returnHighlightImage: NSImage;

	setReturnImage(_: NSImage)

	returnImage: NSImage;

	setUsePasskeyNotificaitons(_: boolean)

	usePasskeyNotificaitons: boolean;

	advancePasskeyIndicator(): void;

	resetPasskeyIndicator(): void;

	retreatPasskeyIndicator(): void;

	setPasskeyForDeviceUsingSSP(_: string, forDevice: IOBluetoothDevice, usingSSP: boolean): void;
}

declare class IOBluetoothServiceBrowserController extends NSWindowController {

	static serviceBrowserController(_: number): IOBluetoothServiceBrowserController;

	static withServiceBrowserControllerRef(_: any): IOBluetoothServiceBrowserController;

	addAllowedUUID(_: IOBluetoothSDPUUID): void;

	addAllowedUUIDArray(_: NSArray<any>): void;

	beginSheetModalForWindowModalDelegateDidEndSelectorContextInfo(_: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any): number;

	clearAllowedUUIDs(): void;

	getDescriptionText(): string;

	getOptions(): number;

	getPrompt(): string;

	getResults(): NSArray<any>;

	getSearchAttributes(): IOBluetoothDeviceSearchAttributes;

	getServiceBrowserControllerRef(): any;

	getTitle(): string;

	runModal(): number;

	setDescriptionText(_: string): void;

	setOptions(_: number): void;

	setPrompt(_: string): void;

	setSearchAttributes(_: IOBluetoothDeviceSearchAttributes): void;

	setTitle(_: string): void;
}

declare function IOBluetoothValidateHardwareWithDescription(cancelButtonTitle: string, descriptionText: string): number;

declare const kIOBluetoothServiceBrowserControllerOptionsAutoStartInquiry: number;

declare const kIOBluetoothServiceBrowserControllerOptionsDisconnectWhenDone: number;

declare const kIOBluetoothServiceBrowserControllerOptionsNone: number;

declare const kIOBluetoothUISuccess: number;

declare const kIOBluetoothUIUserCanceledErr: number;
