
interface GCAcceleration {
	x: number;
	y: number;
	z: number;
}
declare var GCAcceleration: GCAcceleration;

declare class GCController extends NSObject {

	static controllerWithExtendedGamepad(): GCController;

	static controllerWithMicroGamepad(): GCController;

	static controllers(): NSArray<GCController>;

	static startWirelessControllerDiscoveryWithCompletionHandler(_?: () => void): void;

	static stopWirelessControllerDiscovery(): void;

	readonly isAttachedToDevice: boolean;

	readonly extendedGamepad: GCExtendedGamepad;

	setHandlerQueue(_: NSObject)

	handlerQueue: NSObject;

	readonly microGamepad: GCMicroGamepad;

	readonly motion: GCMotion;

	setPlayerIndex(_: GCControllerPlayerIndex)

	playerIndex: GCControllerPlayerIndex;

	readonly productCategory: string;

	readonly isSnapshot: boolean;

	readonly vendorName: string;

	capture(): GCController;
}

declare class GCControllerAxisInput extends GCControllerElement {

	readonly value: number;

	setValueChangedHandler(_: (p1: GCControllerAxisInput, p2: number) => void)

	valueChangedHandler: (p1: GCControllerAxisInput, p2: number) => void;

	setValue(_: number): void;
}

declare class GCControllerButtonInput extends GCControllerElement {

	readonly isPressed: boolean;

	setPressedChangedHandler(_: (p1: GCControllerButtonInput, p2: number, p3: boolean) => void)

	pressedChangedHandler: (p1: GCControllerButtonInput, p2: number, p3: boolean) => void;

	readonly value: number;

	setValueChangedHandler(_: (p1: GCControllerButtonInput, p2: number, p3: boolean) => void)

	valueChangedHandler: (p1: GCControllerButtonInput, p2: number, p3: boolean) => void;

	setValue(_: number): void;
}

declare var GCControllerDidConnectNotification: string;

declare var GCControllerDidDisconnectNotification: string;

declare class GCControllerDirectionPad extends GCControllerElement {

	readonly down: GCControllerButtonInput;

	readonly left: GCControllerButtonInput;

	readonly right: GCControllerButtonInput;

	readonly up: GCControllerButtonInput;

	setValueChangedHandler(_: (p1: GCControllerDirectionPad, p2: number, p3: number) => void)

	valueChangedHandler: (p1: GCControllerDirectionPad, p2: number, p3: number) => void;

	readonly xAxis: GCControllerAxisInput;

	readonly yAxis: GCControllerAxisInput;

	setValueForXAxisYAxis(_: number, yAxis: number): void;
}

declare class GCControllerElement extends NSObject {

	readonly isAnalog: boolean;

	readonly collection: GCControllerElement;
}

enum GCControllerPlayerIndex {

	IndexUnset = -1,

	Index1 = 0,

	Index2 = 1,

	Index3 = 2,

	Index4 = 3
}


interface GCEulerAngles {
	pitch: number;
	yaw: number;
	roll: number;
}
declare var GCEulerAngles: GCEulerAngles;

declare class GCEventViewController extends NSViewController {

	setControllerUserInteractionEnabled(_: boolean)

	controllerUserInteractionEnabled: boolean;
}

declare class GCExtendedGamepad extends NSObject {

	readonly buttonA: GCControllerButtonInput;

	readonly buttonB: GCControllerButtonInput;

	readonly buttonMenu: GCControllerButtonInput;

	readonly buttonOptions: GCControllerButtonInput;

	readonly buttonX: GCControllerButtonInput;

	readonly buttonY: GCControllerButtonInput;

	readonly controller: GCController;

	readonly dpad: GCControllerDirectionPad;

	readonly leftShoulder: GCControllerButtonInput;

	readonly leftThumbstick: GCControllerDirectionPad;

	readonly leftThumbstickButton: GCControllerButtonInput;

	readonly leftTrigger: GCControllerButtonInput;

	readonly rightShoulder: GCControllerButtonInput;

	readonly rightThumbstick: GCControllerDirectionPad;

	readonly rightThumbstickButton: GCControllerButtonInput;

	readonly rightTrigger: GCControllerButtonInput;

	setValueChangedHandler(_: (p1: GCExtendedGamepad, p2: GCControllerElement) => void)

	valueChangedHandler: (p1: GCExtendedGamepad, p2: GCControllerElement) => void;

	setStateFromExtendedGamepad(_: GCExtendedGamepad): void;
}

interface GCExtendedGamepadSnapShotDataV100 {
	version: number;
	size: number;
	dpadX: number;
	dpadY: number;
	buttonA: number;
	buttonB: number;
	buttonX: number;
	buttonY: number;
	leftShoulder: number;
	rightShoulder: number;
	leftThumbstickX: number;
	leftThumbstickY: number;
	rightThumbstickX: number;
	rightThumbstickY: number;
	leftTrigger: number;
	rightTrigger: number;
}
declare var GCExtendedGamepadSnapShotDataV100: GCExtendedGamepadSnapShotDataV100;

interface GCExtendedGamepadSnapshotData {
	version: number;
	size: number;
	dpadX: number;
	dpadY: number;
	buttonA: number;
	buttonB: number;
	buttonX: number;
	buttonY: number;
	leftShoulder: number;
	rightShoulder: number;
	leftThumbstickX: number;
	leftThumbstickY: number;
	rightThumbstickX: number;
	rightThumbstickY: number;
	leftTrigger: number;
	rightTrigger: number;
	supportsClickableThumbsticks: boolean;
	leftThumbstickButton: boolean;
	rightThumbstickButton: boolean;
}
declare var GCExtendedGamepadSnapshotData: GCExtendedGamepadSnapshotData;

interface GCGamepadSnapShotDataV100 {
	version: number;
	size: number;
	dpadX: number;
	dpadY: number;
	buttonA: number;
	buttonB: number;
	buttonX: number;
	buttonY: number;
	leftShoulder: number;
	rightShoulder: number;
}
declare var GCGamepadSnapShotDataV100: GCGamepadSnapShotDataV100;

declare class GCMicroGamepad extends NSObject {

	setAllowsRotation(_: boolean)

	allowsRotation: boolean;

	readonly buttonA: GCControllerButtonInput;

	readonly buttonMenu: GCControllerButtonInput;

	readonly buttonX: GCControllerButtonInput;

	readonly controller: GCController;

	readonly dpad: GCControllerDirectionPad;

	setReportsAbsoluteDpadValues(_: boolean)

	reportsAbsoluteDpadValues: boolean;

	setValueChangedHandler(_: (p1: GCMicroGamepad, p2: GCControllerElement) => void)

	valueChangedHandler: (p1: GCMicroGamepad, p2: GCControllerElement) => void;

	setStateFromMicroGamepad(_: GCMicroGamepad): void;
}

interface GCMicroGamepadSnapShotDataV100 {
	version: number;
	size: number;
	dpadX: number;
	dpadY: number;
	buttonA: number;
	buttonX: number;
}
declare var GCMicroGamepadSnapShotDataV100: GCMicroGamepadSnapShotDataV100;

interface GCMicroGamepadSnapshotData {
	version: number;
	size: number;
	dpadX: number;
	dpadY: number;
	buttonA: number;
	buttonX: number;
}
declare var GCMicroGamepadSnapshotData: GCMicroGamepadSnapshotData;

declare class GCMotion extends NSObject {

	readonly attitude: GCQuaternion;

	readonly controller: GCController;

	readonly gravity: GCAcceleration;

	readonly hasAttitudeAndRotationRate: boolean;

	readonly rotationRate: GCRotationRate;

	readonly userAcceleration: GCAcceleration;

	setValueChangedHandler(_: (p1: GCMotion) => void)

	valueChangedHandler: (p1: GCMotion) => void;

	setAttitude(_: GCQuaternion): void;

	setGravity(_: GCAcceleration): void;

	setRotationRate(_: GCRotationRate): void;

	setStateFromMotion(_: GCMotion): void;

	setUserAcceleration(_: GCAcceleration): void;
}

interface GCQuaternion {
	x: number;
	y: number;
	z: number;
	w: number;
}
declare var GCQuaternion: GCQuaternion;

interface GCRotationRate {
	x: number;
	y: number;
	z: number;
}
declare var GCRotationRate: GCRotationRate;
