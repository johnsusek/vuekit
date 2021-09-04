
interface CMAcceleration {
	x: number;
	y: number;
	z: number;
}
declare var CMAcceleration: CMAcceleration;

declare class CMAccelerometerData extends CMLogItem {

	readonly acceleration: CMAcceleration;
}

declare class CMAttitude extends NSObject implements NSCopying, NSSecureCoding {

	readonly pitch: number;

	readonly quaternion: CMQuaternion;

	readonly roll: number;

	readonly rotationMatrix: CMRotationMatrix;

	readonly yaw: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	multiplyByInverseOfAttitude(_: CMAttitude): void;
}

enum CMAttitudeReferenceFrame {

	XArbitraryZVertical = 1,

	XArbitraryCorrectedZVertical = 2,

	XMagneticNorthZVertical = 4,

	XTrueNorthZVertical = 8
}


enum CMAuthorizationStatus {

	NotDetermined = 0,

	Restricted = 1,

	Denied = 2,

	Authorized = 3
}


interface CMCalibratedMagneticField {
	field: CMMagneticField;
	accuracy: CMMagneticFieldCalibrationAccuracy;
}
declare var CMCalibratedMagneticField: CMCalibratedMagneticField;

declare class CMDeviceMotion extends CMLogItem {

	readonly attitude: CMAttitude;

	readonly gravity: CMAcceleration;

	readonly heading: number;

	readonly magneticField: CMCalibratedMagneticField;

	readonly rotationRate: CMRotationRate;

	readonly userAcceleration: CMAcceleration;
}

enum CMError {

	NULL = 100,

	DeviceRequiresMovement = 101,

	TrueNorthNotAvailable = 102,

	Unknown = 103,

	MotionActivityNotAvailable = 104,

	MotionActivityNotAuthorized = 105,

	MotionActivityNotEntitled = 106,

	InvalidParameter = 107,

	InvalidAction = 108,

	NotAvailable = 109,

	NotEntitled = 110,

	NotAuthorized = 111
}


declare var CMErrorDomain: string;

declare class CMGyroData extends CMLogItem {

	readonly rotationRate: CMRotationRate;
}

declare class CMLogItem extends NSObject implements NSCopying, NSSecureCoding {

	readonly timestamp: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

interface CMMagneticField {
	x: number;
	y: number;
	z: number;
}
declare var CMMagneticField: CMMagneticField;

enum CMMagneticFieldCalibrationAccuracy {

	Uncalibrated = -1,

	Low = 0,

	Medium = 1,

	High = 2
}


declare class CMMagnetometerData extends CMLogItem {

	readonly magneticField: CMMagneticField;
}

enum CMMotionActivityConfidence {

	Low = 0,

	Medium = 1,

	High = 2
}


declare class CMPedometer extends NSObject {

	static isDistanceAvailable(): boolean;

	static isFloorCountingAvailable(): boolean;

	static isPaceAvailable(): boolean;

	static isStepCountingAvailable(): boolean;

	queryPedometerDataFromDateToDateWithHandler(_: Date, toDate: Date, withHandler: (p1: CMPedometerData, p2: NSError) => void): void;

	startPedometerUpdatesFromDateWithHandler(_: Date, withHandler: (p1: CMPedometerData, p2: NSError) => void): void;

	stopPedometerUpdates(): void;
}

declare class CMPedometerData extends NSObject implements NSCopying, NSSecureCoding {

	readonly averageActivePace: number;

	readonly currentCadence: number;

	readonly currentPace: number;

	readonly distance: number;

	readonly endDate: Date;

	readonly floorsAscended: number;

	readonly floorsDescended: number;

	readonly numberOfSteps: number;

	readonly startDate: Date;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CMPedometerEvent extends NSObject implements NSCopying, NSSecureCoding {

	readonly date: Date;

	readonly type: CMPedometerEventType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum CMPedometerEventType {

	Pause = 0,

	Resume = 1
}


interface CMQuaternion {
	x: number;
	y: number;
	z: number;
	w: number;
}
declare var CMQuaternion: CMQuaternion;

interface CMRotationMatrix {
	m11: number;
	m12: number;
	m13: number;
	m21: number;
	m22: number;
	m23: number;
	m31: number;
	m32: number;
	m33: number;
}
declare var CMRotationMatrix: CMRotationMatrix;

interface CMRotationRate {
	x: number;
	y: number;
	z: number;
}
declare var CMRotationRate: CMRotationRate;
