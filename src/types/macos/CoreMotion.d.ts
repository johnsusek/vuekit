globalThis.CMAttitudeReferenceFrame = globalThis.CMAttitudeReferenceFrame || {};

globalThis.CMAttitudeReferenceFrame = {
    XArbitraryZVertical: 1,
    XArbitraryCorrectedZVertical: 2,
    XMagneticNorthZVertical: 4,
    XTrueNorthZVertical: 8,
    '1': 'XArbitraryZVertical',
    '2': 'XArbitraryCorrectedZVertical',
    '4': 'XMagneticNorthZVertical',
    '8': 'XTrueNorthZVertical'
}

globalThis.CMAuthorizationStatus = globalThis.CMAuthorizationStatus || {};

globalThis.CMAuthorizationStatus = {
    NotDetermined: 0,
    Restricted: 1,
    Denied: 2,
    Authorized: 3,
    '0': 'NotDetermined',
    '1': 'Restricted',
    '2': 'Denied',
    '3': 'Authorized'
}

globalThis.CMError = globalThis.CMError || {};

globalThis.CMError = {
    NULL: 100,
    DeviceRequiresMovement: 101,
    TrueNorthNotAvailable: 102,
    Unknown: 103,
    MotionActivityNotAvailable: 104,
    MotionActivityNotAuthorized: 105,
    MotionActivityNotEntitled: 106,
    InvalidParameter: 107,
    InvalidAction: 108,
    NotAvailable: 109,
    NotEntitled: 110,
    NotAuthorized: 111,
    '100': 'NULL',
    '101': 'DeviceRequiresMovement',
    '102': 'TrueNorthNotAvailable',
    '103': 'Unknown',
    '104': 'MotionActivityNotAvailable',
    '105': 'MotionActivityNotAuthorized',
    '106': 'MotionActivityNotEntitled',
    '107': 'InvalidParameter',
    '108': 'InvalidAction',
    '109': 'NotAvailable',
    '110': 'NotEntitled',
    '111': 'NotAuthorized'
}

globalThis.CMMagneticFieldCalibrationAccuracy = globalThis.CMMagneticFieldCalibrationAccuracy || {};

globalThis.CMMagneticFieldCalibrationAccuracy = {
    Uncalibrated: -1,
    Low: 0,
    Medium: 1,
    High: 2,
    '-1': 'Uncalibrated',
    '0': 'Low',
    '1': 'Medium',
    '2': 'High'
}

globalThis.CMMotionActivityConfidence = globalThis.CMMotionActivityConfidence || {};

globalThis.CMMotionActivityConfidence = {
    Low: 0,
    Medium: 1,
    High: 2,
    '0': 'Low',
    '1': 'Medium',
    '2': 'High'
}

globalThis.CMPedometerEventType = globalThis.CMPedometerEventType || {};

globalThis.CMPedometerEventType = {
    Pause: 0,
    Resume: 1,
    '0': 'Pause',
    '1': 'Resume'
}

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
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  multiplyByInverseOfAttitude(_: CMAttitude): void;
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

declare var CMErrorDomain: string;

declare class CMGyroData extends CMLogItem {
  readonly rotationRate: CMRotationRate;
}

declare class CMLogItem extends NSObject implements NSCopying, NSSecureCoding {
  readonly timestamp: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

interface CMMagneticField {
  x: number;
  y: number;
  z: number;
}

declare var CMMagneticField: CMMagneticField;

declare class CMMagnetometerData extends CMLogItem {
  readonly magneticField: CMMagneticField;
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
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CMPedometerEvent extends NSObject implements NSCopying, NSSecureCoding {
  readonly date: Date;
  readonly type: CMPedometerEventType;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
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

enum CMMagneticFieldCalibrationAccuracy {
    Uncalibrated = -1,
    Low = 0,
    Medium = 1,
    High = 2
}

enum CMMotionActivityConfidence {
    Low = 0,
    Medium = 1,
    High = 2
}

enum CMPedometerEventType {
    Pause = 0,
    Resume = 1
}

