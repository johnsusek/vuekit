
declare class MLArrayBatchProvider extends NSObject implements MLBatchProvider {

	readonly array: NSArray<MLFeatureProvider>;

	readonly count: number; // inherited from MLBatchProvider

	static create(dictionary: NSDictionary<string, NSArray<any>>);

	static create(featureProviderArray: NSArray<MLFeatureProvider> | MLFeatureProvider[]);

	featuresAtIndex(_: number): MLFeatureProvider;
}

interface MLBatchProvider {

	count: number;

	featuresAtIndex(_: number): MLFeatureProvider;
}
declare var MLBatchProvider: {

	prototype: MLBatchProvider;
};

enum MLComputeUnits {

	CPUOnly = 0,

	CPUAndGPU = 1,

	All = 2
}


interface MLCustomLayer {

	encodeToCommandBufferInputsOutputsError?(inputs: MTLCommandBuffer, outputs: NSArray<MTLTexture>, error: NSArray<MTLTexture>): boolean;

	evaluateOnCPUWithInputsOutputsError(outputs: NSArray<MLMultiArray>, error: NSArray<MLMultiArray>): boolean;

	outputShapesForInputShapesError(error: NSArray<NSArray<number>>): NSArray<NSArray<number>>;

	setWeightDataError(error: NSArray<NSData>): boolean;
}
declare var MLCustomLayer: {

	prototype: MLCustomLayer;
};

interface MLCustomModel {

	initWithModelDescription?(modelDescription: MLModelDescription): MLCustomModel;

	predictionFromFeaturesOptionsError(options: MLFeatureProvider, error: MLPredictionOptions): MLFeatureProvider;

	predictionsFromBatchOptionsError?(options: MLBatchProvider, error: MLPredictionOptions): MLBatchProvider;
}
declare var MLCustomModel: {

	prototype: MLCustomModel;
};

declare class MLDictionaryConstraint extends NSObject implements NSSecureCoding {

	readonly keyType: MLFeatureType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class MLDictionaryFeatureProvider extends NSObject implements MLFeatureProvider, NSFastEnumeration {

	readonly dictionary: NSDictionary<string, MLFeatureValue>;

	readonly featureNames: NSSet<string>; // inherited from MLFeatureProvider

	static create(dictionary: NSDictionary<string, any>);

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	featureValueForName(_: string): MLFeatureValue;

	objectForKeyedSubscript(_: string): MLFeatureValue;
}

declare class MLFeatureDescription extends NSObject implements NSCopying, NSSecureCoding {

	readonly dictionaryConstraint: MLDictionaryConstraint;

	readonly imageConstraint: MLImageConstraint;

	readonly multiArrayConstraint: MLMultiArrayConstraint;

	readonly name: string;

	readonly isOptional: boolean;

	readonly sequenceConstraint: MLSequenceConstraint;

	readonly type: MLFeatureType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isAllowedValue(_: MLFeatureValue): boolean;
}

interface MLFeatureProvider {

	featureNames: NSSet<string>;

	featureValueForName(_: string): MLFeatureValue;
}
declare var MLFeatureProvider: {

	prototype: MLFeatureProvider;
};

enum MLFeatureType {

	Invalid = 0,

	Int64 = 1,

	Double = 2,

	String = 3,

	Image = 4,

	MultiArray = 5,

	Dictionary = 6,

	Sequence = 7
}


declare class MLFeatureValue extends NSObject implements NSCopying {

	static featureValueWithCGImageConstraintOptionsError(constraint: any, options: MLImageConstraint, error?: NSDictionary<string, any>): MLFeatureValue;

	static featureValueWithCGImageOrientationConstraintOptionsError(orientation: any, constraint: CGImagePropertyOrientation, options: MLImageConstraint, error?: NSDictionary<string, any>): MLFeatureValue;

	static featureValueWithCGImageOrientationPixelsWidePixelsHighPixelFormatTypeOptionsError(orientation: any, pixelsWide: CGImagePropertyOrientation, pixelsHigh: number, pixelFormatType: number, options: number, error?: NSDictionary<string, any>): MLFeatureValue;

	static featureValueWithCGImagePixelsWidePixelsHighPixelFormatTypeOptionsError(pixelsWide: any, pixelsHigh: number, pixelFormatType: number, options: number, error?: NSDictionary<string, any>): MLFeatureValue;

	static featureValueWithDictionaryError(error: NSDictionary<any, number>): MLFeatureValue;

	static featureValueWithDouble(_: number): MLFeatureValue;

	static featureValueWithImageAtURLConstraintOptionsError(constraint: NSURL, options: MLImageConstraint, error?: NSDictionary<string, any>): MLFeatureValue;

	static featureValueWithImageAtURLOrientationConstraintOptionsError(orientation: NSURL, constraint: CGImagePropertyOrientation, options: MLImageConstraint, error?: NSDictionary<string, any>): MLFeatureValue;

	static featureValueWithImageAtURLOrientationPixelsWidePixelsHighPixelFormatTypeOptionsError(orientation: NSURL, pixelsWide: CGImagePropertyOrientation, pixelsHigh: number, pixelFormatType: number, options: number, error?: NSDictionary<string, any>): MLFeatureValue;

	static featureValueWithImageAtURLPixelsWidePixelsHighPixelFormatTypeOptionsError(pixelsWide: NSURL, pixelsHigh: number, pixelFormatType: number, options: number, error?: NSDictionary<string, any>): MLFeatureValue;

	static featureValueWithInt64(_: number): MLFeatureValue;

	static featureValueWithMultiArray(_: MLMultiArray): MLFeatureValue;

	static featureValueWithPixelBuffer(_: any): MLFeatureValue;

	static featureValueWithSequence(_: MLSequence): MLFeatureValue;

	static featureValueWithString(_: string): MLFeatureValue;

	static undefinedFeatureValueWithType(undefined: MLFeatureType): MLFeatureValue;

	readonly dictionaryValue: NSDictionary<any, number>;

	readonly doubleValue: number;

	readonly imageBufferValue: any;

	readonly int64Value: number;

	readonly multiArrayValue: MLMultiArray;

	readonly sequenceValue: MLSequence;

	readonly stringValue: string;

	readonly type: MLFeatureType;

	readonly isUndefined: boolean;

	copyWithZone(_?: any): any;

	isEqualToFeatureValue(_: MLFeatureValue): boolean;
}

declare var MLFeatureValueImageOptionCropAndScale: string;

declare var MLFeatureValueImageOptionCropRect: string;

declare class MLImageConstraint extends NSObject implements NSSecureCoding {

	readonly pixelFormatType: number;

	readonly pixelsHigh: number;

	readonly pixelsWide: number;

	readonly sizeConstraint: MLImageSizeConstraint;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class MLImageSize extends NSObject implements NSSecureCoding {

	readonly pixelsHigh: number;

	readonly pixelsWide: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class MLImageSizeConstraint extends NSObject implements NSSecureCoding {

	readonly enumeratedImageSizes: NSArray<MLImageSize>;

	readonly pixelsHighRange: NSRange;

	readonly pixelsWideRange: NSRange;

	readonly type: MLImageSizeConstraintType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum MLImageSizeConstraintType {

	Unspecified = 0,

	Enumerated = 2,

	Range = 3
}


declare class MLKey extends NSObject implements NSCopying, NSSecureCoding {

	readonly name: string;

	readonly scope: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class MLMetricKey extends MLKey {

	static epochIndex(): MLMetricKey;

	static lossValue(): MLMetricKey;

	static miniBatchIndex(): MLMetricKey;
}

declare class MLModel extends NSObject {

	static compileModelAtURLError(error: NSURL): NSURL;

	static modelWithContentsOfURLConfigurationError(configuration: NSURL, error: MLModelConfiguration): MLModel;

	static modelWithContentsOfURLError(error: NSURL): MLModel;

	readonly configuration: MLModelConfiguration;

	readonly modelDescription: MLModelDescription;

	parameterValueForKeyError(error: MLParameterKey): any;

	predictionFromFeaturesError(from: MLFeatureProvider): MLFeatureProvider;

	predictionFromFeaturesOptionsError(from: MLFeatureProvider, options: MLPredictionOptions): MLFeatureProvider;

	predictionsFromBatchError(error: MLBatchProvider): MLBatchProvider;

	predictionsFromBatchOptionsError(from: MLBatchProvider, options: MLPredictionOptions): MLBatchProvider;
}

declare var MLModelAuthorKey: string;

declare class MLModelConfiguration extends NSObject implements NSCopying, NSSecureCoding {

	setAllowLowPrecisionAccumulationOnGPU(_: boolean)

	allowLowPrecisionAccumulationOnGPU: boolean;

	setComputeUnits(_: MLComputeUnits)

	computeUnits: MLComputeUnits;

	setPreferredMetalDevice(_: MTLDevice)

	preferredMetalDevice: MTLDevice;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var MLModelCreatorDefinedKey: string;

declare class MLModelDescription extends NSObject implements NSSecureCoding {

	readonly inputDescriptionsByName: NSDictionary<string, MLFeatureDescription>;

	readonly isUpdatable: boolean;

	readonly metadata: NSDictionary<string, any>;

	readonly outputDescriptionsByName: NSDictionary<string, MLFeatureDescription>;

	readonly parameterDescriptionsByKey: NSDictionary<MLParameterKey, MLParameterDescription>;

	readonly predictedFeatureName: string;

	readonly predictedProbabilitiesName: string;

	readonly trainingInputDescriptionsByName: NSDictionary<string, MLFeatureDescription>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare var MLModelDescriptionKey: string;

enum MLModelError {

	Generic = 0,

	FeatureType = 1,

	IO = 3,

	CustomLayer = 4,

	CustomModel = 5,

	Update = 6,

	Parameters = 7
}


declare var MLModelErrorDomain: string;

declare var MLModelLicenseKey: string;

declare var MLModelVersionStringKey: string;

declare class MLMultiArray extends NSObject {

	readonly count: number;

	readonly dataPointer: any;

	readonly dataType: MLMultiArrayDataType;

	readonly shape: NSArray<number>;

	readonly strides: NSArray<number>;

	static create(dataPointer: any, shape: NSArray<number> | number[], dataType: MLMultiArrayDataType, strides: NSArray<number> | number[], deallocator: (p1: any) => void);

	static create(shape: NSArray<number> | number[], dataType: MLMultiArrayDataType);

	objectAtIndexedSubscript(_: number): number;

	objectForKeyedSubscript(_: NSArray<number>): number;

	setObjectAtIndexedSubscript(_: number, atIndexedSubscript: number): void;

	setObjectForKeyedSubscript(_: number, forKeyedSubscript: NSArray<number>): void;
}

declare class MLMultiArrayConstraint extends NSObject implements NSSecureCoding {

	readonly dataType: MLMultiArrayDataType;

	readonly shape: NSArray<number>;

	readonly shapeConstraint: MLMultiArrayShapeConstraint;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum MLMultiArrayDataType {

	Double = 65600,

	Float32 = 65568,

	Int32 = 131104
}


declare class MLMultiArrayShapeConstraint extends NSObject implements NSSecureCoding {

	readonly enumeratedShapes: NSArray<NSArray<number>>;

	readonly sizeRangeForDimension: NSArray<NSValue>;

	readonly type: MLMultiArrayShapeConstraintType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum MLMultiArrayShapeConstraintType {

	Unspecified = 1,

	Enumerated = 2,

	Range = 3
}


declare class MLNumericConstraint extends NSObject implements NSSecureCoding {

	readonly enumeratedNumbers: NSSet<number>;

	readonly maxNumber: number;

	readonly minNumber: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class MLParameterDescription extends NSObject implements NSSecureCoding {

	readonly defaultValue: any;

	readonly key: MLParameterKey;

	readonly numericConstraint: MLNumericConstraint;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class MLParameterKey extends MLKey {

	static beta1(): MLParameterKey;

	static beta2(): MLParameterKey;

	static biases(): MLParameterKey;

	static epochs(): MLParameterKey;

	static eps(): MLParameterKey;

	static learningRate(): MLParameterKey;

	static linkedModelFileName(): MLParameterKey;

	static linkedModelSearchPath(): MLParameterKey;

	static miniBatchSize(): MLParameterKey;

	static momentum(): MLParameterKey;

	static numberOfNeighbors(): MLParameterKey;

	static seed(): MLParameterKey;

	static shuffle(): MLParameterKey;

	static weights(): MLParameterKey;

	scopedTo(_: string): MLParameterKey;
}

declare class MLPredictionOptions extends NSObject {

	setUsesCPUOnly(_: boolean)

	usesCPUOnly: boolean;
}

declare class MLSequence extends NSObject {

	static emptySequenceWithType(empty: MLFeatureType): MLSequence;

	static sequenceWithInt64Array(int64s: NSArray<number>): MLSequence;

	static sequenceWithStringArray(strings: NSArray<string>): MLSequence;

	readonly int64Values: NSArray<number>;

	readonly stringValues: NSArray<string>;

	readonly type: MLFeatureType;
}

declare class MLSequenceConstraint extends NSObject implements NSSecureCoding {

	readonly countRange: NSRange;

	readonly valueDescription: MLFeatureDescription;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class MLTask extends NSObject {

	readonly error: NSError;

	readonly state: MLTaskState;

	readonly taskIdentifier: string;

	cancel(): void;

	resume(): void;
}

enum MLTaskState {

	Suspended = 1,

	Running = 2,

	Cancelling = 3,

	Completed = 4,

	Failed = 5
}


declare class MLUpdateContext extends NSObject {

	readonly event: MLUpdateProgressEvent;

	readonly metrics: NSDictionary<MLMetricKey, any>;

	readonly model: MLModel;

	readonly task: MLUpdateTask;
}

enum MLUpdateProgressEvent {

	TrainingBegin = 1,

	EpochEnd = 2,

	MiniBatchEnd = 4
}


declare class MLUpdateProgressHandlers extends NSObject {

	static create(forEvents: MLUpdateProgressEvent, progressHandler: (p1: MLUpdateContext) => void, completionHandler: (p1: MLUpdateContext) => void);
}

declare class MLUpdateTask extends MLTask {

	static updateTaskForModelAtURLTrainingDataConfigurationCompletionHandlerError(trainingData: NSURL, configuration: MLBatchProvider, completionHandler?: MLModelConfiguration, error: (p1: MLUpdateContext) => void): MLUpdateTask;

	static updateTaskForModelAtURLTrainingDataConfigurationProgressHandlersError(trainingData: NSURL, configuration: MLBatchProvider, progressHandlers?: MLModelConfiguration, error: MLUpdateProgressHandlers): MLUpdateTask;

	resumeWithParameters(_: NSDictionary<MLParameterKey, any>): void;
}

interface MLWritable extends NSObjectProtocol {

	writeToURLError(error: NSURL): boolean;
}
declare var MLWritable: {

	prototype: MLWritable;
};
