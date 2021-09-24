globalThis.CLActivityType = globalThis.CLActivityType || {};

globalThis.CLActivityType = {
    Other: 1,
    AutomotiveNavigation: 2,
    Fitness: 3,
    OtherNavigation: 4,
    Airborne: 5,
    '1': 'Other',
    '2': 'AutomotiveNavigation',
    '3': 'Fitness',
    '4': 'OtherNavigation',
    '5': 'Airborne'
}

globalThis.CLAuthorizationStatus = globalThis.CLAuthorizationStatus || {};

globalThis.CLAuthorizationStatus = {
    kCLAuthorizationStatusNotDetermined: 0,
    kCLAuthorizationStatusRestricted: 1,
    kCLAuthorizationStatusDenied: 2,
    kCLAuthorizationStatusAuthorizedAlways: 3,
    kCLAuthorizationStatusAuthorizedWhenInUse: 4,
    kCLAuthorizationStatusAuthorized: 3,
    '0': 'kCLAuthorizationStatusNotDetermined',
    '1': 'kCLAuthorizationStatusRestricted',
    '2': 'kCLAuthorizationStatusDenied',
    '3': 'kCLAuthorizationStatusAuthorizedAlways',
    '4': 'kCLAuthorizationStatusAuthorizedWhenInUse',
    '3': 'kCLAuthorizationStatusAuthorized'
}

globalThis.CLDeviceOrientation = globalThis.CLDeviceOrientation || {};

globalThis.CLDeviceOrientation = {
    Unknown: 0,
    Portrait: 1,
    PortraitUpsideDown: 2,
    LandscapeLeft: 3,
    LandscapeRight: 4,
    FaceUp: 5,
    FaceDown: 6,
    '0': 'Unknown',
    '1': 'Portrait',
    '2': 'PortraitUpsideDown',
    '3': 'LandscapeLeft',
    '4': 'LandscapeRight',
    '5': 'FaceUp',
    '6': 'FaceDown'
}

globalThis.CLError = globalThis.CLError || {};

globalThis.CLError = {
    kCLErrorLocationUnknown: 0,
    kCLErrorDenied: 1,
    kCLErrorNetwork: 2,
    kCLErrorHeadingFailure: 3,
    kCLErrorRegionMonitoringDenied: 4,
    kCLErrorRegionMonitoringFailure: 5,
    kCLErrorRegionMonitoringSetupDelayed: 6,
    kCLErrorRegionMonitoringResponseDelayed: 7,
    kCLErrorGeocodeFoundNoResult: 8,
    kCLErrorGeocodeFoundPartialResult: 9,
    kCLErrorGeocodeCanceled: 10,
    kCLErrorDeferredFailed: 11,
    kCLErrorDeferredNotUpdatingLocation: 12,
    kCLErrorDeferredAccuracyTooLow: 13,
    kCLErrorDeferredDistanceFiltered: 14,
    kCLErrorDeferredCanceled: 15,
    kCLErrorRangingUnavailable: 16,
    kCLErrorRangingFailure: 17,
    '0': 'kCLErrorLocationUnknown',
    '1': 'kCLErrorDenied',
    '2': 'kCLErrorNetwork',
    '3': 'kCLErrorHeadingFailure',
    '4': 'kCLErrorRegionMonitoringDenied',
    '5': 'kCLErrorRegionMonitoringFailure',
    '6': 'kCLErrorRegionMonitoringSetupDelayed',
    '7': 'kCLErrorRegionMonitoringResponseDelayed',
    '8': 'kCLErrorGeocodeFoundNoResult',
    '9': 'kCLErrorGeocodeFoundPartialResult',
    '10': 'kCLErrorGeocodeCanceled',
    '11': 'kCLErrorDeferredFailed',
    '12': 'kCLErrorDeferredNotUpdatingLocation',
    '13': 'kCLErrorDeferredAccuracyTooLow',
    '14': 'kCLErrorDeferredDistanceFiltered',
    '15': 'kCLErrorDeferredCanceled',
    '16': 'kCLErrorRangingUnavailable',
    '17': 'kCLErrorRangingFailure'
}

globalThis.CLProximity = globalThis.CLProximity || {};

globalThis.CLProximity = {
    Unknown: 0,
    Immediate: 1,
    Near: 2,
    Far: 3,
    '0': 'Unknown',
    '1': 'Immediate',
    '2': 'Near',
    '3': 'Far'
}

globalThis.CLRegionState = globalThis.CLRegionState || {};

globalThis.CLRegionState = {
    Unknown: 0,
    Inside: 1,
    Outside: 2,
    '0': 'Unknown',
    '1': 'Inside',
    '2': 'Outside'
}

declare class CLCircularRegion extends CLRegion {
  readonly center: CLLocationCoordinate2D;
  readonly radius: number;
  containsCoordinate(_: CLLocationCoordinate2D): boolean;
  static createWithCenterRadiusIdentifier(center: CLLocationCoordinate2D, radius: number, identifier: string): this;
}

declare class CLFloor extends NSObject implements NSCopying, NSSecureCoding {
  readonly level: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CLGeocoder extends NSObject {
  readonly isGeocoding: boolean;
  cancelGeocode(): void;
  geocodeAddressStringCompletionHandler(_: string, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;
  geocodeAddressStringInRegionCompletionHandler(_: string, inRegion?: CLRegion, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;
  geocodeAddressStringInRegionPreferredLocaleCompletionHandler(_: string, inRegion?: CLRegion, preferredLocale?: Locale, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;
  geocodePostalAddressCompletionHandler(_: CNPostalAddress, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;
  geocodePostalAddressPreferredLocaleCompletionHandler(_: CNPostalAddress, preferredLocale?: Locale, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;
  reverseGeocodeLocationCompletionHandler(_: CLLocation, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;
  reverseGeocodeLocationPreferredLocaleCompletionHandler(_: CLLocation, preferredLocale?: Locale, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;
}

declare class CLHeading extends NSObject implements NSCopying, NSSecureCoding {
  readonly headingAccuracy: number;
  readonly magneticHeading: number;
  readonly timestamp: Date;
  readonly trueHeading: number;
  readonly x: number;
  readonly y: number;
  readonly z: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class CLLocation extends NSObject implements NSCopying, NSSecureCoding {
  readonly altitude: number;
  readonly coordinate: CLLocationCoordinate2D;
  readonly course: number;
  readonly courseAccuracy: number;
  readonly floor: CLFloor;
  readonly horizontalAccuracy: number;
  readonly speed: number;
  readonly speedAccuracy: number;
  readonly timestamp: Date;
  readonly verticalAccuracy: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  distanceFromLocation(_: CLLocation): number;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseCourseAccuracySpeedSpeedAccuracyTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, horizontalAccuracy: number, verticalAccuracy: number, course: number, courseAccuracy: number, speed: number, speedAccuracy: number, timestamp: Date): this;
  static createWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyCourseSpeedTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, horizontalAccuracy: number, verticalAccuracy: number, course: number, speed: number, timestamp: Date): this;
  static createWithCoordinateAltitudeHorizontalAccuracyVerticalAccuracyTimestamp(coordinate: CLLocationCoordinate2D, altitude: number, horizontalAccuracy: number, verticalAccuracy: number, timestamp: Date): this;
  static createWithLatitudeLongitude(latitude: number, longitude: number): this;
}

interface CLLocationCoordinate2D {
  latitude: number;
  longitude: number;
}

declare var CLLocationCoordinate2D: CLLocationCoordinate2D;

declare function CLLocationCoordinate2DIsValid(coord: CLLocationCoordinate2D): boolean;
declare function CLLocationCoordinate2DMake(latitude: number, longitude: number): CLLocationCoordinate2D;
declare var CLLocationDistanceMax: number;

declare class CLLocationManager extends NSObject {
  static authorizationStatus(): CLAuthorizationStatus;
  static headingAvailable(): boolean;
  static isMonitoringAvailableForClass(_: typeof NSObject): boolean;
  static locationServicesEnabled(): boolean;
  static significantLocationChangeMonitoringAvailable(): boolean;
  delegate: CLLocationManagerDelegate;
  setDelegate(_: CLLocationManagerDelegate)
  desiredAccuracy: number;
  setDesiredAccuracy(_: number)
  distanceFilter: number;
  setDistanceFilter(_: number)
  readonly location: CLLocation;
  readonly maximumRegionMonitoringDistance: number;
  readonly monitoredRegions: Set<CLRegion>;
  purpose: string;
  setPurpose(_: string)
  requestAlwaysAuthorization(): void;
  requestLocation(): void;
  requestStateForRegion(_: CLRegion): void;
  startMonitoringForRegion(_: CLRegion): void;
  startMonitoringSignificantLocationChanges(): void;
  startUpdatingLocation(): void;
  stopMonitoringForRegion(_: CLRegion): void;
  stopMonitoringSignificantLocationChanges(): void;
  stopUpdatingLocation(): void;
}

interface CLLocationManagerDelegate extends NSObjectProtocol {
  locationManagerDidChangeAuthorizationStatus?(_: CLLocationManager, didChangeAuthorizationStatus: CLAuthorizationStatus): void;
  locationManagerDidDetermineStateForRegion?(_: CLLocationManager, didDetermineState: CLRegionState, forRegion: CLRegion): void;
  locationManagerDidEnterRegion?(_: CLLocationManager, didEnterRegion: CLRegion): void;
  locationManagerDidExitRegion?(_: CLLocationManager, didExitRegion: CLRegion): void;
  locationManagerDidFailWithError?(_: CLLocationManager, didFailWithError: NSError): void;
  locationManagerDidFinishDeferredUpdatesWithError?(_: CLLocationManager, didFinishDeferredUpdatesWithError?: NSError): void;
  locationManagerDidStartMonitoringForRegion?(_: CLLocationManager, didStartMonitoringForRegion: CLRegion): void;
  locationManagerDidUpdateLocations?(_: CLLocationManager, didUpdateLocations: NSArray<CLLocation>): void;
  locationManagerDidUpdateToLocationFromLocation?(_: CLLocationManager, didUpdateToLocation: CLLocation, fromLocation: CLLocation): void;
  locationManagerMonitoringDidFailForRegionWithError?(_: CLLocationManager, monitoringDidFailForRegion?: CLRegion, withError: NSError): void;
}

declare var CLLocationManagerDelegate: {
  prototype: CLLocationManagerDelegate;
};

declare class CLPlacemark extends NSObject implements NSCopying, NSSecureCoding {
  readonly ISOcountryCode: string;
  readonly administrativeArea: string;
  readonly areasOfInterest: NSArray<string>;
  readonly country: string;
  readonly inlandWater: string;
  readonly locality: string;
  readonly location: CLLocation;
  readonly name: string;
  readonly ocean: string;
  readonly postalAddress: CNPostalAddress;
  readonly postalCode: string;
  readonly region: CLRegion;
  readonly subAdministrativeArea: string;
  readonly subLocality: string;
  readonly subThoroughfare: string;
  readonly thoroughfare: string;
  readonly timeZone: NSTimeZone;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithPlacemark(placemark: CLPlacemark): this;
}

declare class CLRegion extends NSObject implements NSCopying, NSSecureCoding {
  readonly identifier: string;
  notifyOnEntry: boolean;
  setNotifyOnEntry(_: boolean)
  notifyOnExit: boolean;
  setNotifyOnExit(_: boolean)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var CLTimeIntervalMax: number;

declare var kCLDistanceFilterNone: number;

declare var kCLErrorDomain: string;

declare var kCLErrorUserInfoAlternateRegionKey: string;

declare var kCLHeadingFilterNone: number;

declare var kCLLocationAccuracyBest: number;

declare var kCLLocationAccuracyBestForNavigation: number;

declare var kCLLocationAccuracyHundredMeters: number;

declare var kCLLocationAccuracyKilometer: number;

declare var kCLLocationAccuracyNearestTenMeters: number;

declare var kCLLocationAccuracyThreeKilometers: number;

declare var kCLLocationCoordinate2DInvalid: CLLocationCoordinate2D;

enum CLActivityType {
    Other = 1,
    AutomotiveNavigation = 2,
    Fitness = 3,
    OtherNavigation = 4,
    Airborne = 5
}

enum CLAuthorizationStatus {
    kCLAuthorizationStatusNotDetermined = 0,
    kCLAuthorizationStatusRestricted = 1,
    kCLAuthorizationStatusDenied = 2,
    kCLAuthorizationStatusAuthorizedAlways = 3,
    kCLAuthorizationStatusAuthorizedWhenInUse = 4,
    kCLAuthorizationStatusAuthorized = 3
}

enum CLDeviceOrientation {
    Unknown = 0,
    Portrait = 1,
    PortraitUpsideDown = 2,
    LandscapeLeft = 3,
    LandscapeRight = 4,
    FaceUp = 5,
    FaceDown = 6
}

enum CLError {
    kCLErrorLocationUnknown = 0,
    kCLErrorDenied = 1,
    kCLErrorNetwork = 2,
    kCLErrorHeadingFailure = 3,
    kCLErrorRegionMonitoringDenied = 4,
    kCLErrorRegionMonitoringFailure = 5,
    kCLErrorRegionMonitoringSetupDelayed = 6,
    kCLErrorRegionMonitoringResponseDelayed = 7,
    kCLErrorGeocodeFoundNoResult = 8,
    kCLErrorGeocodeFoundPartialResult = 9,
    kCLErrorGeocodeCanceled = 10,
    kCLErrorDeferredFailed = 11,
    kCLErrorDeferredNotUpdatingLocation = 12,
    kCLErrorDeferredAccuracyTooLow = 13,
    kCLErrorDeferredDistanceFiltered = 14,
    kCLErrorDeferredCanceled = 15,
    kCLErrorRangingUnavailable = 16,
    kCLErrorRangingFailure = 17
}

enum CLProximity {
    Unknown = 0,
    Immediate = 1,
    Near = 2,
    Far = 3
}

enum CLRegionState {
    Unknown = 0,
    Inside = 1,
    Outside = 2
}

