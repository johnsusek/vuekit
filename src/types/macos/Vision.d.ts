
declare var VNAnimalIdentifierCat: string;

declare var VNAnimalIdentifierDog: string;

declare class VNBarcodeObservation extends VNRectangleObservation {

	static observationWithBoundingBox(_: CGRect): VNBarcodeObservation; // inherited from VNDetectedObjectObservation

	static observationWithRequestRevisionBoundingBox(_: number, boundingBox: CGRect): VNBarcodeObservation; // inherited from VNDetectedObjectObservation

	static rectangleObservationWithRequestRevisionTopLeftBottomLeftBottomRightTopRight(_: number, topLeft: CGPoint, bottomLeft: CGPoint, bottomRight: CGPoint, topRight: CGPoint): VNBarcodeObservation; // inherited from VNRectangleObservation

	readonly barcodeDescriptor: CIBarcodeDescriptor;

	readonly payloadStringValue: string;

	readonly symbology: string;
}

declare var VNBarcodeSymbologyAztec: string;

declare var VNBarcodeSymbologyCode128: string;

declare var VNBarcodeSymbologyCode39: string;

declare var VNBarcodeSymbologyCode39Checksum: string;

declare var VNBarcodeSymbologyCode39FullASCII: string;

declare var VNBarcodeSymbologyCode39FullASCIIChecksum: string;

declare var VNBarcodeSymbologyCode93: string;

declare var VNBarcodeSymbologyCode93i: string;

declare var VNBarcodeSymbologyDataMatrix: string;

declare var VNBarcodeSymbologyEAN13: string;

declare var VNBarcodeSymbologyEAN8: string;

declare var VNBarcodeSymbologyI2of5: string;

declare var VNBarcodeSymbologyI2of5Checksum: string;

declare var VNBarcodeSymbologyITF14: string;

declare var VNBarcodeSymbologyPDF417: string;

declare var VNBarcodeSymbologyQR: string;

declare var VNBarcodeSymbologyUPCE: string;

declare class VNClassificationObservation extends VNObservation {

	readonly hasPrecisionRecallCurve: boolean;

	readonly identifier: string;

	hasMinimumPrecisionForRecall(_: number, forRecall: number): boolean;

	hasMinimumRecallForPrecision(_: number, forPrecision: number): boolean;
}

declare class VNClassifyImageRequest extends VNImageBasedRequest {

	static knownClassificationsForRevisionError(error: number): NSArray<VNClassificationObservation>;
}

declare var VNClassifyImageRequestRevision1: number;

declare class VNCoreMLFeatureValueObservation extends VNObservation {

	readonly featureName: string;

	readonly featureValue: MLFeatureValue;
}

declare class VNCoreMLModel extends NSObject {

	static modelForMLModelError(error: MLModel): VNCoreMLModel;

	setFeatureProvider(_: MLFeatureProvider)

	featureProvider: MLFeatureProvider;

	setInputImageFeatureName(_: string)

	inputImageFeatureName: string;
}

declare class VNCoreMLRequest extends VNImageBasedRequest {

	setImageCropAndScaleOption(_: VNImageCropAndScaleOption)

	imageCropAndScaleOption: VNImageCropAndScaleOption;

	readonly model: VNCoreMLModel;

	static create(model: VNCoreMLModel);

	static create(model: VNCoreMLModel, completionHandler: (p1: VNRequest, p2: NSError) => void);
}

declare var VNCoreMLRequestRevision1: number;

declare class VNDetectBarcodesRequest extends VNImageBasedRequest {

	setSymbologies(_: NSArray<string>)

	symbologies: NSArray<string>;

	static supportedSymbologies(): NSArray<string>;
}

declare var VNDetectBarcodesRequestRevision1: number;

declare class VNDetectFaceCaptureQualityRequest extends VNImageBasedRequest implements VNFaceObservationAccepting {

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	setInputFaceObservations(_: NSArray<VNFaceObservation>)

	inputFaceObservations: NSArray<VNFaceObservation>; // inherited from VNFaceObservationAccepting

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

declare var VNDetectFaceCaptureQualityRequestRevision1: number;

declare class VNDetectFaceLandmarksRequest extends VNImageBasedRequest implements VNFaceObservationAccepting {

	static revisionSupportsConstellation(_: number, supportsConstellation: VNRequestFaceLandmarksConstellation): boolean;

	setConstellation(_: VNRequestFaceLandmarksConstellation)

	constellation: VNRequestFaceLandmarksConstellation;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	setInputFaceObservations(_: NSArray<VNFaceObservation>)

	inputFaceObservations: NSArray<VNFaceObservation>; // inherited from VNFaceObservationAccepting

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

declare var VNDetectFaceLandmarksRequestRevision1: number;

declare var VNDetectFaceLandmarksRequestRevision2: number;

declare var VNDetectFaceLandmarksRequestRevision3: number;

declare class VNDetectFaceRectanglesRequest extends VNImageBasedRequest {
}

declare var VNDetectFaceRectanglesRequestRevision1: number;

declare var VNDetectFaceRectanglesRequestRevision2: number;

declare class VNDetectHorizonRequest extends VNImageBasedRequest {
}

declare var VNDetectHorizonRequestRevision1: number;

declare class VNDetectHumanRectanglesRequest extends VNImageBasedRequest {
}

declare var VNDetectHumanRectanglesRequestRevision1: number;

declare class VNDetectRectanglesRequest extends VNImageBasedRequest {

	setMaximumAspectRatio(_: number)

	maximumAspectRatio: number;

	setMaximumObservations(_: number)

	maximumObservations: number;

	setMinimumAspectRatio(_: number)

	minimumAspectRatio: number;

	setMinimumConfidence(_: number)

	minimumConfidence: number;

	setMinimumSize(_: number)

	minimumSize: number;

	setQuadratureTolerance(_: number)

	quadratureTolerance: number;
}

declare var VNDetectRectanglesRequestRevision1: number;

declare class VNDetectTextRectanglesRequest extends VNImageBasedRequest {

	setReportCharacterBoxes(_: boolean)

	reportCharacterBoxes: boolean;
}

declare var VNDetectTextRectanglesRequestRevision1: number;

declare class VNDetectedObjectObservation extends VNObservation {

	static observationWithBoundingBox(_: CGRect): VNDetectedObjectObservation;

	static observationWithRequestRevisionBoundingBox(_: number, boundingBox: CGRect): VNDetectedObjectObservation;

	readonly boundingBox: CGRect;
}

enum VNElementType {

	Unknown = 0,

	Float = 1,

	Double = 2
}


declare function VNElementTypeSize(elementType: VNElementType): number;

enum VNErrorCode {

	OK = 0,

	RequestCancelled = 1,

	InvalidFormat = 2,

	OperationFailed = 3,

	OutOfBoundsError = 4,

	InvalidOption = 5,

	IOError = 6,

	MissingOption = 7,

	NotImplemented = 8,

	InternalError = 9,

	OutOfMemory = 10,

	UnknownError = 11,

	InvalidOperation = 12,

	InvalidImage = 13,

	InvalidArgument = 14,

	InvalidModel = 15,

	UnsupportedRevision = 16,

	DataUnavailable = 17
}


declare var VNErrorDomain: string;

declare class VNFaceLandmarkRegion extends NSObject implements NSCopying, NSSecureCoding, VNRequestRevisionProviding {

	readonly pointCount: number;

	readonly requestRevision: number; // inherited from VNRequestRevisionProviding

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class VNFaceLandmarkRegion2D extends VNFaceLandmarkRegion {

	readonly normalizedPoints: CGPoint;

	readonly precisionEstimatesPerPoint: NSArray<number>;

	pointsInImageOfSize(imageSize: CGSize): CGPoint;
}

declare class VNFaceLandmarks extends NSObject implements NSCopying, NSSecureCoding, VNRequestRevisionProviding {

	readonly confidence: number;

	readonly requestRevision: number; // inherited from VNRequestRevisionProviding

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class VNFaceLandmarks2D extends VNFaceLandmarks {

	readonly allPoints: VNFaceLandmarkRegion2D;

	readonly faceContour: VNFaceLandmarkRegion2D;

	readonly innerLips: VNFaceLandmarkRegion2D;

	readonly leftEye: VNFaceLandmarkRegion2D;

	readonly leftEyebrow: VNFaceLandmarkRegion2D;

	readonly leftPupil: VNFaceLandmarkRegion2D;

	readonly medianLine: VNFaceLandmarkRegion2D;

	readonly nose: VNFaceLandmarkRegion2D;

	readonly noseCrest: VNFaceLandmarkRegion2D;

	readonly outerLips: VNFaceLandmarkRegion2D;

	readonly rightEye: VNFaceLandmarkRegion2D;

	readonly rightEyebrow: VNFaceLandmarkRegion2D;

	readonly rightPupil: VNFaceLandmarkRegion2D;
}

declare class VNFaceObservation extends VNDetectedObjectObservation {

	static faceObservationWithRequestRevisionBoundingBoxRollYaw(_: number, boundingBox: CGRect, roll?: number, yaw?: number): VNFaceObservation;

	static observationWithBoundingBox(_: CGRect): VNFaceObservation; // inherited from VNDetectedObjectObservation

	static observationWithRequestRevisionBoundingBox(_: number, boundingBox: CGRect): VNFaceObservation; // inherited from VNDetectedObjectObservation

	readonly faceCaptureQuality: number;

	readonly landmarks: VNFaceLandmarks2D;

	readonly roll: number;

	readonly yaw: number;
}

interface VNFaceObservationAccepting extends NSObjectProtocol {

	setInputFaceObservations(_: NSArray<VNFaceObservation>)

	inputFaceObservations: NSArray<VNFaceObservation>;
}
declare var VNFaceObservationAccepting: {

	prototype: VNFaceObservationAccepting;
};

declare class VNFeaturePrintObservation extends VNObservation {

	readonly data: NSData;

	readonly elementCount: number;

	readonly elementType: VNElementType;

	computeDistanceToFeaturePrintObservationError(toFeaturePrintObservation: number, error: VNFeaturePrintObservation): boolean;
}

declare class VNGenerateAttentionBasedSaliencyImageRequest extends VNImageBasedRequest {
}

declare var VNGenerateAttentionBasedSaliencyImageRequestRevision1: number;

declare class VNGenerateImageFeaturePrintRequest extends VNImageBasedRequest {

	setImageCropAndScaleOption(_: VNImageCropAndScaleOption)

	imageCropAndScaleOption: VNImageCropAndScaleOption;
}

declare var VNGenerateImageFeaturePrintRequestRevision1: number;

declare class VNGenerateObjectnessBasedSaliencyImageRequest extends VNImageBasedRequest {
}

declare var VNGenerateObjectnessBasedSaliencyImageRequestRevision1: number;

declare class VNHomographicImageRegistrationRequest extends VNImageRegistrationRequest {
}

declare var VNHomographicImageRegistrationRequestRevision1: number;

declare class VNHorizonObservation extends VNObservation {

	readonly angle: number;

	readonly transform: CGAffineTransform;
}

declare class VNImageAlignmentObservation extends VNObservation {
}

declare class VNImageBasedRequest extends VNRequest {

	setRegionOfInterest(_: CGRect)

	regionOfInterest: CGRect;
}

enum VNImageCropAndScaleOption {

	CenterCrop = 0,

	ScaleFit = 1,

	ScaleFill = 2
}


declare class VNImageHomographicAlignmentObservation extends VNImageAlignmentObservation {

	setWarpTransform(_: simd_float3x3)

	warpTransform: simd_float3x3;
}

declare var VNImageOptionCIContext: string;

declare var VNImageOptionCameraIntrinsics: string;

declare var VNImageOptionProperties: string;

declare function VNImagePointForFaceLandmarkPoint(faceLandmarkPoint: number, faceBoundingBox: CGRect, imageWidth: number, imageHeight: number): CGPoint;

declare function VNImagePointForNormalizedPoint(normalizedPoint: CGPoint, imageWidth: number, imageHeight: number): CGPoint;

declare function VNImageRectForNormalizedRect(normalizedRect: CGRect, imageWidth: number, imageHeight: number): CGRect;

declare class VNImageRegistrationRequest extends VNTargetedImageRequest {
}

declare class VNImageRequestHandler extends NSObject {

	static create(CGImage: any, options: NSDictionary<string, any>);

	static create(CGImage: any, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>);

	static create(CIImage: CIImage, options: NSDictionary<string, any>);

	static create(CIImage: CIImage, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>);

	static create(CVPixelBuffer: any, options: NSDictionary<string, any>);

	static create(CVPixelBuffer: any, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>);

	static create(data: NSData, options: NSDictionary<string, any>);

	static create(data: NSData, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>);

	static create(URL: NSURL, options: NSDictionary<string, any>);

	static create(URL: NSURL, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>);

	performRequestsError(error: NSArray<VNRequest>): boolean;
}

declare class VNImageTranslationAlignmentObservation extends VNImageAlignmentObservation {

	setAlignmentTransform(_: CGAffineTransform)

	alignmentTransform: CGAffineTransform;
}

declare function VNNormalizedFaceBoundingBoxPointForLandmarkPoint(faceLandmarkPoint: number, faceBoundingBox: CGRect, imageWidth: number, imageHeight: number): CGPoint;

declare var VNNormalizedIdentityRect: CGRect;

declare function VNNormalizedRectForImageRect(imageRect: CGRect, imageWidth: number, imageHeight: number): CGRect;

declare function VNNormalizedRectIsIdentityRect(normalizedRect: CGRect): boolean;

declare class VNObservation extends NSObject implements NSCopying, NSSecureCoding, VNRequestRevisionProviding {

	readonly confidence: number;

	readonly uuid: NSUUID;

	readonly requestRevision: number; // inherited from VNRequestRevisionProviding

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class VNPixelBufferObservation extends VNObservation {

	readonly featureName: string;

	readonly pixelBuffer: any;
}

declare class VNRecognizeAnimalsRequest extends VNImageBasedRequest {

	static knownAnimalIdentifiersForRevisionError(error: number): NSArray<string>;
}

declare var VNRecognizeAnimalsRequestRevision1: number;

declare class VNRecognizeTextRequest extends VNImageBasedRequest implements VNRequestProgressProviding {

	static supportedRecognitionLanguagesForTextRecognitionLevelRevisionError(revision: VNRequestTextRecognitionLevel, error: number): NSArray<string>;

	setCustomWords(_: NSArray<string>)

	customWords: NSArray<string>;

	setMinimumTextHeight(_: number)

	minimumTextHeight: number;

	setRecognitionLanguages(_: NSArray<string>)

	recognitionLanguages: NSArray<string>;

	setRecognitionLevel(_: VNRequestTextRecognitionLevel)

	recognitionLevel: VNRequestTextRecognitionLevel;

	setUsesLanguageCorrection(_: boolean)

	usesLanguageCorrection: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly indeterminate: boolean; // inherited from VNRequestProgressProviding

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setProgressHandler(_: (p1: VNRequest, p2: number, p3: NSError) => void)

	progressHandler: (p1: VNRequest, p2: number, p3: NSError) => void; // inherited from VNRequestProgressProviding

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

declare var VNRecognizeTextRequestRevision1: number;

declare class VNRecognizedObjectObservation extends VNDetectedObjectObservation {

	static observationWithBoundingBox(_: CGRect): VNRecognizedObjectObservation; // inherited from VNDetectedObjectObservation

	static observationWithRequestRevisionBoundingBox(_: number, boundingBox: CGRect): VNRecognizedObjectObservation; // inherited from VNDetectedObjectObservation

	readonly labels: NSArray<VNClassificationObservation>;
}

declare class VNRecognizedText extends NSObject implements NSCopying, NSSecureCoding {

	readonly confidence: number;

	readonly string: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	boundingBoxForRangeError(_: NSRange): VNRectangleObservation;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class VNRecognizedTextObservation extends VNRectangleObservation {

	static observationWithBoundingBox(_: CGRect): VNRecognizedTextObservation; // inherited from VNDetectedObjectObservation

	static observationWithRequestRevisionBoundingBox(_: number, boundingBox: CGRect): VNRecognizedTextObservation; // inherited from VNDetectedObjectObservation

	static rectangleObservationWithRequestRevisionTopLeftBottomLeftBottomRightTopRight(_: number, topLeft: CGPoint, bottomLeft: CGPoint, bottomRight: CGPoint, topRight: CGPoint): VNRecognizedTextObservation; // inherited from VNRectangleObservation

	topCandidates(_: number): NSArray<VNRecognizedText>;
}

declare class VNRectangleObservation extends VNDetectedObjectObservation {

	static observationWithBoundingBox(_: CGRect): VNRectangleObservation; // inherited from VNDetectedObjectObservation

	static observationWithRequestRevisionBoundingBox(_: number, boundingBox: CGRect): VNRectangleObservation; // inherited from VNDetectedObjectObservation

	static rectangleObservationWithRequestRevisionTopLeftBottomLeftBottomRightTopRight(_: number, topLeft: CGPoint, bottomLeft: CGPoint, bottomRight: CGPoint, topRight: CGPoint): VNRectangleObservation;

	readonly bottomLeft: CGPoint;

	readonly bottomRight: CGPoint;

	readonly topLeft: CGPoint;

	readonly topRight: CGPoint;
}

declare class VNRequest extends NSObject implements NSCopying {

	readonly completionHandler: (p1: VNRequest, p2: NSError) => void;

	setPreferBackgroundProcessing(_: boolean)

	preferBackgroundProcessing: boolean;

	readonly results: NSArray<any>;

	setRevision(_: number)

	revision: number;

	setUsesCPUOnly(_: boolean)

	usesCPUOnly: boolean;

	static currentRevision(): number;

	static defaultRevision(): number;

	static supportedRevisions(): NSIndexSet;

	static create(completionHandler: (p1: VNRequest, p2: NSError) => void);

	cancel(): void;

	copyWithZone(_?: any): any;
}

enum VNRequestFaceLandmarksConstellation {

	ConstellationNotDefined = 0,

	Constellation65Points = 1,

	Constellation76Points = 2
}


interface VNRequestProgressProviding extends NSObjectProtocol {

	indeterminate: boolean;

	setProgressHandler(_: (p1: VNRequest, p2: number, p3: NSError) => void)

	progressHandler: (p1: VNRequest, p2: number, p3: NSError) => void;
}
declare var VNRequestProgressProviding: {

	prototype: VNRequestProgressProviding;
};

interface VNRequestRevisionProviding {

	requestRevision: number;
}
declare var VNRequestRevisionProviding: {

	prototype: VNRequestRevisionProviding;
};

declare var VNRequestRevisionUnspecified: number;

enum VNRequestTextRecognitionLevel {

	Accurate = 0,

	Fast = 1
}


enum VNRequestTrackingLevel {

	Accurate = 0,

	Fast = 1
}


declare class VNSaliencyImageObservation extends VNPixelBufferObservation {

	readonly salientObjects: NSArray<VNRectangleObservation>;
}

declare class VNSequenceRequestHandler extends NSObject {

	performRequestsOnCGImageError(onCGImage: NSArray<VNRequest>, error: any): boolean;

	performRequestsOnCGImageOrientationError(onCGImage: NSArray<VNRequest>, orientation: any, error: CGImagePropertyOrientation): boolean;

	performRequestsOnCIImageError(onCIImage: NSArray<VNRequest>, error: CIImage): boolean;

	performRequestsOnCIImageOrientationError(onCIImage: NSArray<VNRequest>, orientation: CIImage, error: CGImagePropertyOrientation): boolean;

	performRequestsOnCVPixelBufferError(onCVPixelBuffer: NSArray<VNRequest>, error: any): boolean;

	performRequestsOnCVPixelBufferOrientationError(onCVPixelBuffer: NSArray<VNRequest>, orientation: any, error: CGImagePropertyOrientation): boolean;

	performRequestsOnImageDataError(onImageData: NSArray<VNRequest>, error: NSData): boolean;

	performRequestsOnImageDataOrientationError(onImageData: NSArray<VNRequest>, orientation: NSData, error: CGImagePropertyOrientation): boolean;

	performRequestsOnImageURLError(onImageURL: NSArray<VNRequest>, error: NSURL): boolean;

	performRequestsOnImageURLOrientationError(onImageURL: NSArray<VNRequest>, orientation: NSURL, error: CGImagePropertyOrientation): boolean;
}

declare class VNTargetedImageRequest extends VNImageBasedRequest {

	static create(targetedCGImage: any, options: NSDictionary<string, any>);

	static create(targetedCGImage: any, options: NSDictionary<string, any>, completionHandler: (p1: VNRequest, p2: NSError) => void);

	static create(targetedCGImage: any, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>);

	static create(targetedCGImage: any, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>, completionHandler: (p1: VNRequest, p2: NSError) => void);

	static create(targetedCIImage: CIImage, options: NSDictionary<string, any>);

	static create(targetedCIImage: CIImage, options: NSDictionary<string, any>, completionHandler: (p1: VNRequest, p2: NSError) => void);

	static create(targetedCIImage: CIImage, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>);

	static create(targetedCIImage: CIImage, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>, completionHandler: (p1: VNRequest, p2: NSError) => void);

	static create(targetedCVPixelBuffer: any, options: NSDictionary<string, any>);

	static create(targetedCVPixelBuffer: any, options: NSDictionary<string, any>, completionHandler: (p1: VNRequest, p2: NSError) => void);

	static create(targetedCVPixelBuffer: any, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>);

	static create(targetedCVPixelBuffer: any, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>, completionHandler: (p1: VNRequest, p2: NSError) => void);

	static create(targetedImageData: NSData, options: NSDictionary<string, any>);

	static create(targetedImageData: NSData, options: NSDictionary<string, any>, completionHandler: (p1: VNRequest, p2: NSError) => void);

	static create(targetedImageData: NSData, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>);

	static create(targetedImageData: NSData, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>, completionHandler: (p1: VNRequest, p2: NSError) => void);

	static create(targetedImageURL: NSURL, options: NSDictionary<string, any>);

	static create(targetedImageURL: NSURL, options: NSDictionary<string, any>, completionHandler: (p1: VNRequest, p2: NSError) => void);

	static create(targetedImageURL: NSURL, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>);

	static create(targetedImageURL: NSURL, orientation: CGImagePropertyOrientation, options: NSDictionary<string, any>, completionHandler: (p1: VNRequest, p2: NSError) => void);
}

declare class VNTextObservation extends VNRectangleObservation {

	static observationWithBoundingBox(_: CGRect): VNTextObservation; // inherited from VNDetectedObjectObservation

	static observationWithRequestRevisionBoundingBox(_: number, boundingBox: CGRect): VNTextObservation; // inherited from VNDetectedObjectObservation

	static rectangleObservationWithRequestRevisionTopLeftBottomLeftBottomRightTopRight(_: number, topLeft: CGPoint, bottomLeft: CGPoint, bottomRight: CGPoint, topRight: CGPoint): VNTextObservation; // inherited from VNRectangleObservation

	readonly characterBoxes: NSArray<VNRectangleObservation>;
}

declare class VNTrackObjectRequest extends VNTrackingRequest {

	static create(detectedObjectObservation: VNDetectedObjectObservation);

	static create(detectedObjectObservation: VNDetectedObjectObservation, completionHandler: (p1: VNRequest, p2: NSError) => void);
}

declare var VNTrackObjectRequestRevision1: number;

declare var VNTrackObjectRequestRevision2: number;

declare class VNTrackRectangleRequest extends VNTrackingRequest {

	static create(rectangleObservation: VNRectangleObservation);

	static create(rectangleObservation: VNRectangleObservation, completionHandler: (p1: VNRequest, p2: NSError) => void);
}

declare var VNTrackRectangleRequestRevision1: number;

declare class VNTrackingRequest extends VNImageBasedRequest {

	setInputObservation(_: VNDetectedObjectObservation)

	inputObservation: VNDetectedObjectObservation;

	setLastFrame(_: boolean)

	isLastFrame: boolean;

	setTrackingLevel(_: VNRequestTrackingLevel)

	trackingLevel: VNRequestTrackingLevel;
}

declare class VNTranslationalImageRegistrationRequest extends VNImageRegistrationRequest {
}

declare var VNTranslationalImageRegistrationRequestRevision1: number;

declare var VNVisionVersionNumber: number;
