
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


declare class CLCircularRegion extends CLRegion {

	readonly center: CLLocationCoordinate2D;

	readonly radius: number;

	static create(center: CLLocationCoordinate2D, radius: number, identifier: string);

	containsCoordinate(_: CLLocationCoordinate2D): boolean;
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


declare class CLFloor extends NSObject implements NSCopying, NSSecureCoding {

	readonly level: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CLGeocoder extends NSObject {

	readonly isGeocoding: boolean;

	cancelGeocode(): void;

	geocodeAddressStringCompletionHandler(_: string, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	geocodeAddressStringInRegionCompletionHandler(_: string, inRegion?: CLRegion, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	geocodeAddressStringInRegionPreferredLocaleCompletionHandler(_: string, inRegion?: CLRegion, preferredLocale?: NSLocale, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	geocodePostalAddressCompletionHandler(_: CNPostalAddress, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	geocodePostalAddressPreferredLocaleCompletionHandler(_: CNPostalAddress, preferredLocale?: NSLocale, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	reverseGeocodeLocationCompletionHandler(_: CLLocation, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;

	reverseGeocodeLocationPreferredLocaleCompletionHandler(_: CLLocation, preferredLocale?: NSLocale, completionHandler: (p1: NSArray<CLPlacemark>, p2: NSError) => void): void;
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

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CLLocation extends NSObject implements NSCopying, NSSecureCoding, CKRecordValue {

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

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(coordinate: CLLocationCoordinate2D, altitude: number, horizontalAccuracy: number, verticalAccuracy: number, course: number, courseAccuracy: number, speed: number, speedAccuracy: number, timestamp: Date);

	static create(coordinate: CLLocationCoordinate2D, altitude: number, horizontalAccuracy: number, verticalAccuracy: number, course: number, speed: number, timestamp: Date);

	static create(coordinate: CLLocationCoordinate2D, altitude: number, horizontalAccuracy: number, verticalAccuracy: number, timestamp: Date);

	static create(latitude: number, longitude: number);

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	distanceFromLocation(_: CLLocation): number;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
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

	setDelegate(_: CLLocationManagerDelegate)

	delegate: CLLocationManagerDelegate;

	setDesiredAccuracy(_: number)

	desiredAccuracy: number;

	setDistanceFilter(_: number)

	distanceFilter: number;

	readonly location: CLLocation;

	readonly maximumRegionMonitoringDistance: number;

	readonly monitoredRegions: NSSet<CLRegion>;

	setPurpose(_: string)

	purpose: string;

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

	static placemarkWithLocationNamePostalAddress(_: CLLocation, name?: string, postalAddress?: CNPostalAddress): CLPlacemark;

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

	static create(coder: NSCoder); // inherited from NSCoding

	static create(placemark: CLPlacemark);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum CLProximity {

	Unknown = 0,

	Immediate = 1,

	Near = 2,

	Far = 3
}


declare class CLRegion extends NSObject implements NSCopying, NSSecureCoding {

	readonly identifier: string;

	setNotifyOnEntry(_: boolean)

	notifyOnEntry: boolean;

	setNotifyOnExit(_: boolean)

	notifyOnExit: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum CLRegionState {

	Unknown = 0,

	Inside = 1,

	Outside = 2
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
