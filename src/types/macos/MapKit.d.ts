
interface MKAnnotation extends NSObjectProtocol {

	coordinate: CLLocationCoordinate2D;

	subtitle?: string;

	title?: string;

	setCoordinate?(_: CLLocationCoordinate2D): void;
}
declare var MKAnnotation: {

	prototype: MKAnnotation;
};

declare var MKAnnotationCalloutInfoDidChangeNotification: string;

declare class MKAnnotationView extends NSView {

	setAnnotation(_: MKAnnotation)

	annotation: MKAnnotation;

	setCalloutOffset(_: CGPoint)

	calloutOffset: CGPoint;

	setCanShowCallout(_: boolean)

	canShowCallout: boolean;

	setCenterOffset(_: CGPoint)

	centerOffset: CGPoint;

	readonly clusterAnnotationView: MKAnnotationView;

	setClusteringIdentifier(_: string)

	clusteringIdentifier: string;

	setCollisionMode(_: MKAnnotationViewCollisionMode)

	collisionMode: MKAnnotationViewCollisionMode;

	setDetailCalloutAccessoryView(_: NSView)

	detailCalloutAccessoryView: NSView;

	setDisplayPriority(_: number)

	displayPriority: number;

	setDragState(_: MKAnnotationViewDragState)

	dragState: MKAnnotationViewDragState;

	setDraggable(_: boolean)

	isDraggable: boolean;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setHighlighted(_: boolean)

	isHighlighted: boolean;

	setImage(_: NSImage)

	image: NSImage;

	setLeftCalloutAccessoryView(_: NSView)

	leftCalloutAccessoryView: NSView;

	setLeftCalloutOffset(_: CGPoint)

	leftCalloutOffset: CGPoint;

	readonly reuseIdentifier: string;

	setRightCalloutAccessoryView(_: NSView)

	rightCalloutAccessoryView: NSView;

	setRightCalloutOffset(_: CGPoint)

	rightCalloutOffset: CGPoint;

	setSelected(_: boolean)

	isSelected: boolean;

	static create(annotation: MKAnnotation, reuseIdentifier: string);

	prepareForDisplay(): void;

	setDragStateAnimated(_: MKAnnotationViewDragState, animated: boolean): void;

	setSelectedAnimated(_: boolean, animated: boolean): void;
}

enum MKAnnotationViewCollisionMode {

	Rectangle = 0,

	Circle = 1
}


enum MKAnnotationViewDragState {

	None = 0,

	Starting = 1,

	Dragging = 2,

	Canceling = 3,

	Ending = 4
}


declare class MKCircle extends MKShape implements MKOverlay {

	static circleWithCenterCoordinateRadius(_: CLLocationCoordinate2D, radius: number): MKCircle;

	static circleWithMapRect(_: MKMapRect): MKCircle;

	readonly radius: number;

	readonly boundingMapRect: MKMapRect; // inherited from MKOverlay

	readonly canReplaceMapContent: boolean; // inherited from MKOverlay

	readonly coordinate: CLLocationCoordinate2D; // inherited from MKAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MKAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MKAnnotation

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	intersectsMapRect(_: MKMapRect): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setCoordinate(_: CLLocationCoordinate2D): void;
}

declare class MKCircleRenderer extends MKOverlayPathRenderer {

	readonly circle: MKCircle;

	static create(circle: MKCircle);
}

declare class MKClusterAnnotation extends NSObject implements MKAnnotation {

	readonly memberAnnotations: NSArray<MKAnnotation>;

	setSubtitle(_: string)

	subtitle: string;

	setTitle(_: string)

	title: string;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MKAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(memberAnnotations: NSArray<MKAnnotation> | MKAnnotation[]);

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setCoordinate(_: CLLocationCoordinate2D): void;
}

declare function MKCoordinateForMapPoint(mapPoint: MKMapPoint): CLLocationCoordinate2D;

interface MKCoordinateRegion {
	center: CLLocationCoordinate2D;
	span: MKCoordinateSpan;
}
declare var MKCoordinateRegion: MKCoordinateRegion;

declare function MKCoordinateRegionForMapRect(rect: MKMapRect): MKCoordinateRegion;

declare function MKCoordinateRegionMakeWithDistance(centerCoordinate: CLLocationCoordinate2D, latitudinalMeters: number, longitudinalMeters: number): MKCoordinateRegion;

interface MKCoordinateSpan {
	latitudeDelta: number;
	longitudeDelta: number;
}
declare var MKCoordinateSpan: MKCoordinateSpan;

declare class MKDirections extends NSObject {

	readonly isCalculating: boolean;

	static create(request: MKDirectionsRequest);

	calculateDirectionsWithCompletionHandler(_: (p1: MKDirectionsResponse, p2: NSError) => void): void;

	calculateETAWithCompletionHandler(_: (p1: MKETAResponse, p2: NSError) => void): void;

	cancel(): void;
}

declare class MKDirectionsRequest extends NSObject {

	static isDirectionsRequestURL(_: NSURL): boolean;

	setArrivalDate(_: Date)

	arrivalDate: Date;

	setDepartureDate(_: Date)

	departureDate: Date;

	setDestination(_: MKMapItem)

	destination: MKMapItem;

	setRequestsAlternateRoutes(_: boolean)

	requestsAlternateRoutes: boolean;

	setSource(_: MKMapItem)

	source: MKMapItem;

	setTransportType(_: MKDirectionsTransportType)

	transportType: MKDirectionsTransportType;

	static create(contentsOfURL: NSURL);

	setDestination(_?: MKMapItem): void;

	setSource(_?: MKMapItem): void;
}

declare class MKDirectionsResponse extends NSObject {

	readonly destination: MKMapItem;

	readonly routes: NSArray<MKRoute>;

	readonly source: MKMapItem;
}

enum MKDirectionsTransportType {

	Automobile = 1,

	Walking = 2,

	Transit = 4,

	Any = 268435455
}


declare class MKDistanceFormatter extends NSFormatter {

	setLocale(_: NSLocale)

	locale: NSLocale;

	setUnitStyle(_: MKDistanceFormatterUnitStyle)

	unitStyle: MKDistanceFormatterUnitStyle;

	setUnits(_: MKDistanceFormatterUnits)

	units: MKDistanceFormatterUnits;

	distanceFromString(_: string): number;

	stringFromDistance(_: number): string;
}

enum MKDistanceFormatterUnitStyle {

	Default = 0,

	Abbreviated = 1,

	Full = 2
}


enum MKDistanceFormatterUnits {

	Default = 0,

	Metric = 1,

	Imperial = 2,

	ImperialWithYards = 3
}


declare class MKETAResponse extends NSObject {

	readonly destination: MKMapItem;

	readonly distance: number;

	readonly expectedArrivalDate: Date;

	readonly expectedDepartureDate: Date;

	readonly expectedTravelTime: number;

	readonly source: MKMapItem;

	readonly transportType: MKDirectionsTransportType;
}

enum MKErrorCode {

	Unknown = 1,

	ServerFailure = 2,

	LoadingThrottled = 3,

	PlacemarkNotFound = 4,

	DirectionsNotFound = 5,

	DecodingFailed = 6
}


declare var MKErrorDomain: string;

declare var MKFeatureDisplayPriorityDefaultHigh: number;

declare var MKFeatureDisplayPriorityDefaultLow: number;

declare var MKFeatureDisplayPriorityRequired: number;

declare class MKGeoJSONDecoder extends NSObject {

	geoJSONObjectsWithDataError(error: NSData): NSArray<MKGeoJSONObject>;
}

declare class MKGeoJSONFeature extends NSObject implements MKGeoJSONObject {

	readonly geometry: NSArray<MKShape>;

	readonly identifier: string;

	readonly properties: NSData;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

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

interface MKGeoJSONObject extends NSObjectProtocol {
}
declare var MKGeoJSONObject: {

	prototype: MKGeoJSONObject;
};

declare class MKGeodesicPolyline extends MKPolyline {

	static polylineWithCoordinatesCount(_: CLLocationCoordinate2D, count: number): MKGeodesicPolyline; // inherited from MKPolyline

	static polylineWithPointsCount(_: MKMapPoint, count: number): MKGeodesicPolyline; // inherited from MKPolyline
}

declare var MKLaunchOptionsCameraKey: string;

declare var MKLaunchOptionsDirectionsModeDefault: string;

declare var MKLaunchOptionsDirectionsModeDriving: string;

declare var MKLaunchOptionsDirectionsModeKey: string;

declare var MKLaunchOptionsDirectionsModeTransit: string;

declare var MKLaunchOptionsDirectionsModeWalking: string;

declare var MKLaunchOptionsMapCenterKey: string;

declare var MKLaunchOptionsMapSpanKey: string;

declare var MKLaunchOptionsMapTypeKey: string;

declare var MKLaunchOptionsShowsTrafficKey: string;

declare class MKLocalSearch extends NSObject {

	readonly isSearching: boolean;

	static create(request: MKLocalSearchRequest);

	cancel(): void;

	startWithCompletionHandler(_: (p1: MKLocalSearchResponse, p2: NSError) => void): void;
}

declare class MKLocalSearchCompleter extends NSObject {

	setDelegate(_: MKLocalSearchCompleterDelegate)

	delegate: MKLocalSearchCompleterDelegate;

	setPointOfInterestFilter(_: MKPointOfInterestFilter)

	pointOfInterestFilter: MKPointOfInterestFilter;

	setQueryFragment(_: string)

	queryFragment: string;

	setRegion(_: MKCoordinateRegion)

	region: MKCoordinateRegion;

	setResultTypes(_: MKLocalSearchCompleterResultType)

	resultTypes: MKLocalSearchCompleterResultType;

	readonly results: NSArray<MKLocalSearchCompletion>;

	readonly isSearching: boolean;

	cancel(): void;
}

interface MKLocalSearchCompleterDelegate extends NSObjectProtocol {

	completerDidFailWithError?(_: MKLocalSearchCompleter, didFailWithError: NSError): void;

	completerDidUpdateResults?(_: MKLocalSearchCompleter): void;
}
declare var MKLocalSearchCompleterDelegate: {

	prototype: MKLocalSearchCompleterDelegate;
};

enum MKLocalSearchCompleterResultType {

	Address = 1,

	PointOfInterest = 2,

	Query = 4
}


declare class MKLocalSearchCompletion extends NSObject {

	readonly subtitle: string;

	readonly subtitleHighlightRanges: NSArray<NSValue>;

	readonly title: string;

	readonly titleHighlightRanges: NSArray<NSValue>;
}

declare class MKLocalSearchRequest extends NSObject implements NSCopying {

	setNaturalLanguageQuery(_: string)

	naturalLanguageQuery: string;

	setPointOfInterestFilter(_: MKPointOfInterestFilter)

	pointOfInterestFilter: MKPointOfInterestFilter;

	setRegion(_: MKCoordinateRegion)

	region: MKCoordinateRegion;

	setResultTypes(_: MKLocalSearchResultType)

	resultTypes: MKLocalSearchResultType;

	static create(completion: MKLocalSearchCompletion);

	static create(naturalLanguageQuery: string);

	static create(naturalLanguageQuery: string, region: MKCoordinateRegion);

	copyWithZone(_?: any): any;
}

declare class MKLocalSearchResponse extends NSObject {

	readonly boundingRegion: MKCoordinateRegion;

	readonly mapItems: NSArray<MKMapItem>;
}

enum MKLocalSearchResultType {

	Address = 1,

	PointOfInterest = 2
}


declare class MKMapCamera extends NSObject implements NSCopying, NSSecureCoding {

	static camera(): MKMapCamera;

	static cameraLookingAtCenterCoordinateFromDistancePitchHeading(_: CLLocationCoordinate2D, fromDistance: number, pitch: number, heading: number): MKMapCamera;

	static cameraLookingAtCenterCoordinateFromEyeCoordinateEyeAltitude(_: CLLocationCoordinate2D, fromEyeCoordinate: CLLocationCoordinate2D, eyeAltitude: number): MKMapCamera;

	setAltitude(_: number)

	altitude: number;

	setCenterCoordinate(_: CLLocationCoordinate2D)

	centerCoordinate: CLLocationCoordinate2D;

	setCenterCoordinateDistance(_: number)

	centerCoordinateDistance: number;

	setHeading(_: number)

	heading: number;

	setPitch(_: number)

	pitch: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class MKMapCameraBoundary extends NSObject implements NSCopying, NSSecureCoding {

	readonly mapRect: MKMapRect;

	readonly region: MKCoordinateRegion;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(coordinateRegion: MKCoordinateRegion);

	static create(mapRect: MKMapRect);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var MKMapCameraZoomDefault: number;

declare class MKMapCameraZoomRange extends NSObject implements NSCopying, NSSecureCoding {

	readonly maxCenterCoordinateDistance: number;

	readonly minCenterCoordinateDistance: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(maxCenterCoordinateDistance: number);

	static create(minCenterCoordinateDistance: number);

	static create(minCenterCoordinateDistance: number, maxCenterCoordinateDistance: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class MKMapItem extends NSObject implements NSSecureCoding {

	static mapItemForCurrentLocation(): MKMapItem;

	static openMapsWithItemsLaunchOptions(_: NSArray<MKMapItem>, launchOptions?: NSDictionary<string, any>): boolean;

	readonly isCurrentLocation: boolean;

	setName(_: string)

	name: string;

	setPhoneNumber(_: string)

	phoneNumber: string;

	readonly placemark: MKPlacemark;

	setPointOfInterestCategory(_: string)

	pointOfInterestCategory: string;

	setTimeZone(_: NSTimeZone)

	timeZone: NSTimeZone;

	setUrl(_: NSURL)

	url: NSURL;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(placemark: MKPlacemark);

	encodeWithCoder(_: NSCoder): void;

	openInMapsWithLaunchOptions(_?: NSDictionary<string, any>): boolean;
}

declare var MKMapItemTypeIdentifier: string;

interface MKMapPoint {
	x: number;
	y: number;
}
declare var MKMapPoint: MKMapPoint;

declare function MKMapPointForCoordinate(coordinate: CLLocationCoordinate2D): MKMapPoint;

declare function MKMapPointsPerMeterAtLatitude(latitude: number): number;

interface MKMapRect {
	origin: MKMapPoint;
	size: MKMapSize;
}
declare var MKMapRect: MKMapRect;

declare function MKMapRectContainsPoint(rect: MKMapRect, point: MKMapPoint): boolean;

declare function MKMapRectContainsRect(rect1: MKMapRect, rect2: MKMapRect): boolean;

declare function MKMapRectDivide(rect: MKMapRect, slice: MKMapRect, remainder: MKMapRect, amount: number, edge: CGRectEdge): void;

declare function MKMapRectInset(rect: MKMapRect, dx: number, dy: number): MKMapRect;

declare function MKMapRectIntersection(rect1: MKMapRect, rect2: MKMapRect): MKMapRect;

declare function MKMapRectIntersectsRect(rect1: MKMapRect, rect2: MKMapRect): boolean;

declare var MKMapRectNull: MKMapRect;

declare function MKMapRectOffset(rect: MKMapRect, dx: number, dy: number): MKMapRect;

declare function MKMapRectRemainder(rect: MKMapRect): MKMapRect;

declare function MKMapRectSpans180thMeridian(rect: MKMapRect): boolean;

declare function MKMapRectUnion(rect1: MKMapRect, rect2: MKMapRect): MKMapRect;

declare var MKMapRectWorld: MKMapRect;

interface MKMapSize {
	width: number;
	height: number;
}
declare var MKMapSize: MKMapSize;

declare var MKMapSizeWorld: MKMapSize;

declare class MKMapSnapshot extends NSObject {

	readonly appearance: NSAppearance;

	readonly image: NSImage;

	pointForCoordinate(_: CLLocationCoordinate2D): CGPoint;
}

declare class MKMapSnapshotOptions extends NSObject implements NSCopying {

	setAppearance(_: NSAppearance)

	appearance: NSAppearance;

	setCamera(_: MKMapCamera)

	camera: MKMapCamera;

	setMapRect(_: MKMapRect)

	mapRect: MKMapRect;

	setMapType(_: MKMapType)

	mapType: MKMapType;

	setPointOfInterestFilter(_: MKPointOfInterestFilter)

	pointOfInterestFilter: MKPointOfInterestFilter;

	setRegion(_: MKCoordinateRegion)

	region: MKCoordinateRegion;

	setShowsBuildings(_: boolean)

	showsBuildings: boolean;

	setSize(_: CGSize)

	size: CGSize;

	copyWithZone(_?: any): any;
}

declare class MKMapSnapshotter extends NSObject {

	readonly isLoading: boolean;

	static create(options: MKMapSnapshotOptions);

	cancel(): void;

	startWithCompletionHandler(_: (p1: MKMapSnapshot, p2: NSError) => void): void;

	startWithQueueCompletionHandler(_: NSObject, completionHandler: (p1: MKMapSnapshot, p2: NSError) => void): void;
}

enum MKMapType {

	Standard = 0,

	Satellite = 1,

	Hybrid = 2,

	SatelliteFlyover = 3,

	HybridFlyover = 4,

	MutedStandard = 5
}


declare class MKMapView extends NSView implements NSCoding {

	readonly annotationVisibleRect: CGRect;

	readonly annotations: NSArray<MKAnnotation>;

	setCamera(_: MKMapCamera)

	camera: MKMapCamera;

	setCameraBoundary(_: MKMapCameraBoundary)

	cameraBoundary: MKMapCameraBoundary;

	setCameraZoomRange(_: MKMapCameraZoomRange)

	cameraZoomRange: MKMapCameraZoomRange;

	setCenterCoordinate(_: CLLocationCoordinate2D)

	centerCoordinate: CLLocationCoordinate2D;

	setDelegate(_: MKMapViewDelegate)

	delegate: MKMapViewDelegate;

	setMapType(_: MKMapType)

	mapType: MKMapType;

	readonly overlays: NSArray<MKOverlay>;

	setPitchEnabled(_: boolean)

	isPitchEnabled: boolean;

	setPointOfInterestFilter(_: MKPointOfInterestFilter)

	pointOfInterestFilter: MKPointOfInterestFilter;

	setRegion(_: MKCoordinateRegion)

	region: MKCoordinateRegion;

	setRotateEnabled(_: boolean)

	isRotateEnabled: boolean;

	setScrollEnabled(_: boolean)

	isScrollEnabled: boolean;

	setSelectedAnnotations(_: NSArray<MKAnnotation>)

	selectedAnnotations: NSArray<MKAnnotation>;

	setShowsBuildings(_: boolean)

	showsBuildings: boolean;

	setShowsCompass(_: boolean)

	showsCompass: boolean;

	setShowsScale(_: boolean)

	showsScale: boolean;

	setShowsTraffic(_: boolean)

	showsTraffic: boolean;

	setShowsUserLocation(_: boolean)

	showsUserLocation: boolean;

	setShowsZoomControls(_: boolean)

	showsZoomControls: boolean;

	readonly userLocation: MKUserLocation;

	readonly isUserLocationVisible: boolean;

	setVisibleMapRect(_: MKMapRect)

	visibleMapRect: MKMapRect;

	setZoomEnabled(_: boolean)

	isZoomEnabled: boolean;

	static create(coder: NSCoder); // inherited from NSCoding

	addAnnotation(_: MKAnnotation): void;

	addAnnotations(_: NSArray<MKAnnotation>): void;

	addOverlay(_: MKOverlay): void;

	addOverlayLevel(_: MKOverlay, level: MKOverlayLevel): void;

	addOverlays(_: NSArray<MKOverlay>): void;

	addOverlaysLevel(_: NSArray<MKOverlay>, level: MKOverlayLevel): void;

	annotationsInMapRect(_: MKMapRect): NSSet<MKAnnotation>;

	convertCoordinateToPointToView(_: CLLocationCoordinate2D, toPointToView?: NSView): CGPoint;

	convertPointToCoordinateFromView(_: CGPoint, toCoordinateFromView?: NSView): CLLocationCoordinate2D;

	convertRectToRegionFromView(_: CGRect, toRegionFromView?: NSView): MKCoordinateRegion;

	convertRegionToRectToView(_: MKCoordinateRegion, toRectTo?: NSView): CGRect;

	dequeueReusableAnnotationViewWithIdentifier(_: string): MKAnnotationView;

	dequeueReusableAnnotationViewWithIdentifierForAnnotation(_: string, forAnnotation: MKAnnotation): MKAnnotationView;

	deselectAnnotationAnimated(_?: MKAnnotation, animated: boolean): void;

	encodeWithCoder(_: NSCoder): void;

	exchangeOverlayWithOverlay(_: MKOverlay, withOverlay: MKOverlay): void;

	exchangeOverlayAtIndexWithOverlayAtIndex(_: number, withOverlayAtIndex: number): void;

	insertOverlayAboveOverlay(_: MKOverlay, above: MKOverlay): void;

	insertOverlayAtIndex(_: MKOverlay, at: number): void;

	insertOverlayAtIndexLevel(_: MKOverlay, at: number, level: MKOverlayLevel): void;

	insertOverlayBelowOverlay(_: MKOverlay, below: MKOverlay): void;

	mapRectThatFits(_: MKMapRect): MKMapRect;

	mapRectThatFitsEdgePadding(_: MKMapRect, edgePadding: NSEdgeInsets): MKMapRect;

	overlaysInLevel(_: MKOverlayLevel): NSArray<MKOverlay>;

	regionThatFits(_: MKCoordinateRegion): MKCoordinateRegion;

	registerClassForAnnotationViewWithReuseIdentifier(_?: typeof NSObject, forAnnotationViewWithReuseIdentifier: string): void;

	removeAnnotation(_: MKAnnotation): void;

	removeAnnotations(_: NSArray<MKAnnotation>): void;

	removeOverlay(_: MKOverlay): void;

	removeOverlays(_: NSArray<MKOverlay>): void;

	rendererForOverlay(_: MKOverlay): MKOverlayRenderer;

	selectAnnotationAnimated(_: MKAnnotation, animated: boolean): void;

	setCameraAnimated(_: MKMapCamera, animated: boolean): void;

	setCameraBoundaryAnimated(_?: MKMapCameraBoundary, animated: boolean): void;

	setCameraZoomRangeAnimated(_?: MKMapCameraZoomRange, animated: boolean): void;

	setCenterCoordinateAnimated(_: CLLocationCoordinate2D, animated: boolean): void;

	setRegionAnimated(_: MKCoordinateRegion, animated: boolean): void;

	setVisibleMapRectAnimated(_: MKMapRect, animated: boolean): void;

	setVisibleMapRectEdgePaddingAnimated(_: MKMapRect, edgePadding: NSEdgeInsets, animated: boolean): void;

	showAnnotationsAnimated(_: NSArray<MKAnnotation>, animated: boolean): void;

	viewForAnnotation(_: MKAnnotation): MKAnnotationView;
}

declare var MKMapViewDefaultAnnotationViewReuseIdentifier: string;

declare var MKMapViewDefaultClusterAnnotationViewReuseIdentifier: string;

interface MKMapViewDelegate extends NSObjectProtocol {

	mapViewAnnotationViewDidChangeDragStateFromOldState?(_: MKMapView, annotationView: MKAnnotationView, didChangeDragState: MKAnnotationViewDragState, fromOldState: MKAnnotationViewDragState): void;

	mapViewClusterAnnotationForMemberAnnotations?(_: MKMapView, clusterAnnotationForMemberAnnotations: NSArray<MKAnnotation>): MKClusterAnnotation;

	mapViewDidAddAnnotationViews?(_: MKMapView, didAddAnnotationViews: NSArray<MKAnnotationView>): void;

	mapViewDidAddOverlayRenderers?(_: MKMapView, didAddOverlayRenderers: NSArray<MKOverlayRenderer>): void;

	mapViewDidDeselectAnnotationView?(_: MKMapView, didDeselectAnnotationView: MKAnnotationView): void;

	mapViewDidFailToLocateUserWithError?(_: MKMapView, didFailToLocateUserWithError: NSError): void;

	mapViewDidSelectAnnotationView?(_: MKMapView, didSelectAnnotationView: MKAnnotationView): void;

	mapViewDidUpdateUserLocation?(_: MKMapView, didUpdateUserLocation: MKUserLocation): void;

	mapViewRegionDidChangeAnimated?(_: MKMapView, regionDidChangeAnimated: boolean): void;

	mapViewRegionWillChangeAnimated?(_: MKMapView, regionWillChangeAnimated: boolean): void;

	mapViewRendererForOverlay?(_: MKMapView, rendererForOverlay: MKOverlay): MKOverlayRenderer;

	mapViewViewForAnnotation?(_: MKMapView, viewForAnnotation: MKAnnotation): MKAnnotationView;

	mapViewDidChangeVisibleRegion?(_: MKMapView): void;

	mapViewDidFailLoadingMapWithError?(_: MKMapView, withError: NSError): void;

	mapViewDidFinishLoadingMap?(_: MKMapView): void;

	mapViewDidFinishRenderingMapFullyRendered?(_: MKMapView, fullyRendered: boolean): void;

	mapViewDidStopLocatingUser?(_: MKMapView): void;

	mapViewWillStartLoadingMap?(_: MKMapView): void;

	mapViewWillStartLocatingUser?(_: MKMapView): void;

	mapViewWillStartRenderingMap?(_: MKMapView): void;
}
declare var MKMapViewDelegate: {

	prototype: MKMapViewDelegate;
};

declare function MKMetersBetweenMapPoints(a: MKMapPoint, b: MKMapPoint): number;

declare function MKMetersPerMapPointAtLatitude(latitude: number): number;

declare class MKMultiPoint extends MKShape implements MKGeoJSONObject {

	readonly pointCount: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	getCoordinatesRange(_: CLLocationCoordinate2D, range: NSRange): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	points(): MKMapPoint;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MKMultiPolygon extends MKShape implements MKOverlay, MKGeoJSONObject {

	readonly polygons: NSArray<MKPolygon>;

	readonly boundingMapRect: MKMapRect; // inherited from MKOverlay

	readonly canReplaceMapContent: boolean; // inherited from MKOverlay

	readonly coordinate: CLLocationCoordinate2D; // inherited from MKAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MKAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MKAnnotation

	readonly  // inherited from NSObjectProtocol

	static create(polygons: NSArray<MKPolygon> | MKPolygon[]);

	conformsToProtocol(_: any /* Protocol */): boolean;

	intersectsMapRect(_: MKMapRect): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setCoordinate(_: CLLocationCoordinate2D): void;
}

declare class MKMultiPolygonRenderer extends MKOverlayPathRenderer {

	readonly multiPolygon: MKMultiPolygon;

	static create(multiPolygon: MKMultiPolygon);
}

declare class MKMultiPolyline extends MKShape implements MKOverlay, MKGeoJSONObject {

	readonly polylines: NSArray<MKPolyline>;

	readonly boundingMapRect: MKMapRect; // inherited from MKOverlay

	readonly canReplaceMapContent: boolean; // inherited from MKOverlay

	readonly coordinate: CLLocationCoordinate2D; // inherited from MKAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MKAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MKAnnotation

	readonly  // inherited from NSObjectProtocol

	static create(polylines: NSArray<MKPolyline> | MKPolyline[]);

	conformsToProtocol(_: any /* Protocol */): boolean;

	intersectsMapRect(_: MKMapRect): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setCoordinate(_: CLLocationCoordinate2D): void;
}

declare class MKMultiPolylineRenderer extends MKOverlayPathRenderer {

	readonly multiPolyline: MKMultiPolyline;

	static create(multiPolyline: MKMultiPolyline);
}

interface MKOverlay extends MKAnnotation {

	boundingMapRect: MKMapRect;

	canReplaceMapContent: boolean;

	intersectsMapRect?(_: MKMapRect): boolean;
}
declare var MKOverlay: {

	prototype: MKOverlay;
};

enum MKOverlayLevel {

	AboveRoads = 0,

	AboveLabels = 1
}


declare class MKOverlayPathRenderer extends MKOverlayRenderer {

	setFillColor(_: NSColor)

	fillColor: NSColor;

	setLineCap(_: CGLineCap)

	lineCap: CGLineCap;

	setLineDashPattern(_: NSArray<number>)

	lineDashPattern: NSArray<number>;

	setLineDashPhase(_: number)

	lineDashPhase: number;

	setLineJoin(_: CGLineJoin)

	lineJoin: CGLineJoin;

	setLineWidth(_: number)

	lineWidth: number;

	setMiterLimit(_: number)

	miterLimit: number;

	setPath(_: any)

	path: any;

	setShouldRasterize(_: boolean)

	shouldRasterize: boolean;

	setStrokeColor(_: NSColor)

	strokeColor: NSColor;

	applyFillPropertiesToContextAtZoomScale(_: any, atZoomScale: number): void;

	applyStrokePropertiesToContextAtZoomScale(_: any, atZoomScale: number): void;

	createPath(): void;

	fillPathInContext(_: any, inContext: any): void;

	invalidatePath(): void;

	strokePathInContext(_: any, inContext: any): void;
}

declare class MKOverlayRenderer extends NSObject {

	setAlpha(_: number)

	alpha: number;

	readonly contentScaleFactor: number;

	readonly overlay: MKOverlay;

	static create(overlay: MKOverlay);

	canDrawMapRectZoomScale(_: MKMapRect, zoomScale: number): boolean;

	drawMapRectZoomScaleInContext(_: MKMapRect, zoomScale: number, inContext: any): void;

	mapPointForPoint(_: CGPoint): MKMapPoint;

	mapRectForRect(_: CGRect): MKMapRect;

	pointForMapPoint(_: MKMapPoint): CGPoint;

	rectForMapRect(_: MKMapRect): CGRect;

	setNeedsDisplay(): void;

	setNeedsDisplayInMapRect(_: MKMapRect): void;

	setNeedsDisplayInMapRectZoomScale(_: MKMapRect, zoomScale: number): void;
}

declare class MKPinAnnotationView extends MKAnnotationView {

	static greenPinColor(): NSColor;

	static purplePinColor(): NSColor;

	static redPinColor(): NSColor;

	setAnimatesDrop(_: boolean)

	animatesDrop: boolean;

	setPinTintColor(_: NSColor)

	pinTintColor: NSColor;
}

declare class MKPlacemark extends CLPlacemark implements MKAnnotation {

	static placemarkWithLocationNamePostalAddress(_: CLLocation, name?: string, postalAddress?: CNPostalAddress): MKPlacemark; // inherited from CLPlacemark

	readonly countryCode: string;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MKAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MKAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MKAnnotation

	readonly  // inherited from NSObjectProtocol

	static create(coordinate: CLLocationCoordinate2D);

	static create(coordinate: CLLocationCoordinate2D, addressDictionary: NSDictionary<string, any>);

	static create(coordinate: CLLocationCoordinate2D, postalAddress: CNPostalAddress);

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setCoordinate(_: CLLocationCoordinate2D): void;
}

declare class MKPointAnnotation extends MKShape implements MKGeoJSONObject {

	setCoordinate(_: CLLocationCoordinate2D)

	coordinate: CLLocationCoordinate2D;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(coordinate: CLLocationCoordinate2D);

	static create(coordinate: CLLocationCoordinate2D, title: string, subtitle: string);

	conformsToProtocol(_: any /* Protocol */): boolean;

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

declare var MKPointOfInterestCategoryATM: string;

declare var MKPointOfInterestCategoryAirport: string;

declare var MKPointOfInterestCategoryAmusementPark: string;

declare var MKPointOfInterestCategoryAquarium: string;

declare var MKPointOfInterestCategoryBakery: string;

declare var MKPointOfInterestCategoryBank: string;

declare var MKPointOfInterestCategoryBeach: string;

declare var MKPointOfInterestCategoryBrewery: string;

declare var MKPointOfInterestCategoryCafe: string;

declare var MKPointOfInterestCategoryCampground: string;

declare var MKPointOfInterestCategoryCarRental: string;

declare var MKPointOfInterestCategoryEVCharger: string;

declare var MKPointOfInterestCategoryFireStation: string;

declare var MKPointOfInterestCategoryFitnessCenter: string;

declare var MKPointOfInterestCategoryFoodMarket: string;

declare var MKPointOfInterestCategoryGasStation: string;

declare var MKPointOfInterestCategoryHospital: string;

declare var MKPointOfInterestCategoryHotel: string;

declare var MKPointOfInterestCategoryLaundry: string;

declare var MKPointOfInterestCategoryLibrary: string;

declare var MKPointOfInterestCategoryMarina: string;

declare var MKPointOfInterestCategoryMovieTheater: string;

declare var MKPointOfInterestCategoryMuseum: string;

declare var MKPointOfInterestCategoryNationalPark: string;

declare var MKPointOfInterestCategoryNightlife: string;

declare var MKPointOfInterestCategoryPark: string;

declare var MKPointOfInterestCategoryParking: string;

declare var MKPointOfInterestCategoryPharmacy: string;

declare var MKPointOfInterestCategoryPolice: string;

declare var MKPointOfInterestCategoryPostOffice: string;

declare var MKPointOfInterestCategoryPublicTransport: string;

declare var MKPointOfInterestCategoryRestaurant: string;

declare var MKPointOfInterestCategoryRestroom: string;

declare var MKPointOfInterestCategorySchool: string;

declare var MKPointOfInterestCategoryStadium: string;

declare var MKPointOfInterestCategoryStore: string;

declare var MKPointOfInterestCategoryTheater: string;

declare var MKPointOfInterestCategoryUniversity: string;

declare var MKPointOfInterestCategoryWinery: string;

declare var MKPointOfInterestCategoryZoo: string;

declare class MKPointOfInterestFilter extends NSObject implements NSCopying, NSSecureCoding {

	static filterExcludingAllCategories(): MKPointOfInterestFilter;

	static filterIncludingAllCategories(): MKPointOfInterestFilter;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(excludingCategories: NSArray<string> | string[]);

	static create(includingCategories: NSArray<string> | string[]);

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	excludesCategory(_: string): boolean;

	includesCategory(_: string): boolean;
}

declare class MKPolygon extends MKMultiPoint implements MKOverlay, MKGeoJSONObject {

	static polygonWithCoordinatesCount(_: CLLocationCoordinate2D, count: number): MKPolygon;

	static polygonWithCoordinatesCountInteriorPolygons(_: CLLocationCoordinate2D, count: number, interiorPolygons?: NSArray<MKPolygon>): MKPolygon;

	static polygonWithPointsCount(_: MKMapPoint, count: number): MKPolygon;

	static polygonWithPointsCountInteriorPolygons(_: MKMapPoint, count: number, interiorPolygons?: NSArray<MKPolygon>): MKPolygon;

	readonly interiorPolygons: NSArray<MKPolygon>;

	readonly boundingMapRect: MKMapRect; // inherited from MKOverlay

	readonly canReplaceMapContent: boolean; // inherited from MKOverlay

	readonly coordinate: CLLocationCoordinate2D; // inherited from MKAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MKAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MKAnnotation

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	intersectsMapRect(_: MKMapRect): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setCoordinate(_: CLLocationCoordinate2D): void;
}

declare class MKPolygonRenderer extends MKOverlayPathRenderer {

	readonly polygon: MKPolygon;

	static create(polygon: MKPolygon);
}

declare class MKPolyline extends MKMultiPoint implements MKOverlay, MKGeoJSONObject {

	static polylineWithCoordinatesCount(_: CLLocationCoordinate2D, count: number): MKPolyline;

	static polylineWithPointsCount(_: MKMapPoint, count: number): MKPolyline;

	readonly boundingMapRect: MKMapRect; // inherited from MKOverlay

	readonly canReplaceMapContent: boolean; // inherited from MKOverlay

	readonly coordinate: CLLocationCoordinate2D; // inherited from MKAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MKAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MKAnnotation

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	intersectsMapRect(_: MKMapRect): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setCoordinate(_: CLLocationCoordinate2D): void;
}

declare class MKPolylineRenderer extends MKOverlayPathRenderer {

	readonly polyline: MKPolyline;

	static create(polyline: MKPolyline);
}

declare function MKRoadWidthAtZoomScale(zoomScale: number): number;

declare class MKRoute extends NSObject {

	readonly advisoryNotices: NSArray<string>;

	readonly distance: number;

	readonly expectedTravelTime: number;

	readonly name: string;

	readonly polyline: MKPolyline;

	readonly steps: NSArray<MKRouteStep>;

	readonly transportType: MKDirectionsTransportType;
}

declare class MKRouteStep extends NSObject {

	readonly distance: number;

	readonly instructions: string;

	readonly notice: string;

	readonly polyline: MKPolyline;

	readonly transportType: MKDirectionsTransportType;
}

declare class MKShape extends NSObject implements MKAnnotation {

	setSubtitle(_: string)

	subtitle: string;

	setTitle(_: string)

	title: string;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MKAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setCoordinate(_: CLLocationCoordinate2D): void;
}

declare class MKTileOverlay extends NSObject implements MKOverlay {

	readonly URLTemplate: string;

	setCanReplaceMapContent(_: boolean)

	canReplaceMapContent: boolean;

	setGeometryFlipped(_: boolean)

	isGeometryFlipped: boolean;

	setMaximumZ(_: number)

	maximumZ: number;

	setMinimumZ(_: number)

	minimumZ: number;

	setTileSize(_: CGSize)

	tileSize: CGSize;

	readonly boundingMapRect: MKMapRect; // inherited from MKOverlay

	readonly coordinate: CLLocationCoordinate2D; // inherited from MKAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly subtitle: string; // inherited from MKAnnotation

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly title: string; // inherited from MKAnnotation

	readonly  // inherited from NSObjectProtocol

	static create(URLTemplate: string);

	URLForTilePath(_: MKTileOverlayPath): NSURL;

	conformsToProtocol(_: any /* Protocol */): boolean;

	intersectsMapRect(_: MKMapRect): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	loadTileAtPathResult(_: MKTileOverlayPath, result?: (p1: NSData, p2: NSError) => void): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setCoordinate(_: CLLocationCoordinate2D): void;
}

interface MKTileOverlayPath {
	x: number;
	y: number;
	z: number;
	contentScaleFactor: number;
}
declare var MKTileOverlayPath: MKTileOverlayPath;

declare class MKTileOverlayRenderer extends MKOverlayRenderer {

	static create(tileOverlay: MKTileOverlay);

	reloadData(): void;
}

declare class MKUserLocation extends NSObject implements MKAnnotation {

	readonly heading: CLHeading;

	readonly location: CLLocation;

	setSubtitle(_: string)

	subtitle: string;

	setTitle(_: string)

	title: string;

	readonly isUpdating: boolean;

	readonly coordinate: CLLocationCoordinate2D; // inherited from MKAnnotation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setCoordinate(_: CLLocationCoordinate2D): void;
}
