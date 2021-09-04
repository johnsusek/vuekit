
interface CIAccordionFoldTransition extends CITransitionFilter {

	setBottomHeight(_: number)

	bottomHeight: number;

	setFoldShadowAmount(_: number)

	foldShadowAmount: number;

	setNumberOfFolds(_: number)

	numberOfFolds: number;
}
declare var CIAccordionFoldTransition: {

	prototype: CIAccordionFoldTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIAffineClamp extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setTransform(_: CGAffineTransform)

	transform: CGAffineTransform;
}
declare var CIAffineClamp: {

	prototype: CIAffineClamp;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIAffineTile extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setTransform(_: CGAffineTransform)

	transform: CGAffineTransform;
}
declare var CIAffineTile: {

	prototype: CIAffineTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIAttributedTextImageGenerator extends CIFilterProtocol {

	setScaleFactor(_: number)

	scaleFactor: number;

	setText(_: NSAttributedString)

	text: NSAttributedString;
}
declare var CIAttributedTextImageGenerator: {

	prototype: CIAttributedTextImageGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIAztecCodeDescriptor extends CIBarcodeDescriptor {

	static descriptorWithPayloadIsCompactLayerCountDataCodewordCount(_: NSData, isCompact: boolean, layerCount: number, dataCodewordCount: number): CIAztecCodeDescriptor;

	readonly dataCodewordCount: number;

	readonly errorCorrectedPayload: NSData;

	readonly isCompact: boolean;

	readonly layerCount: number;

	static create(payload: NSData, isCompact: boolean, layerCount: number, dataCodewordCount: number);
}

interface CIAztecCodeGenerator extends CIFilterProtocol {

	setCompactStyle(_: number)

	compactStyle: number;

	setCorrectionLevel(_: number)

	correctionLevel: number;

	setLayers(_: number)

	layers: number;

	setMessage(_: NSData)

	message: NSData;
}
declare var CIAztecCodeGenerator: {

	prototype: CIAztecCodeGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIBarcodeDescriptor extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

interface CIBarcodeGenerator extends CIFilterProtocol {

	setBarcodeDescriptor(_: CIBarcodeDescriptor)

	barcodeDescriptor: CIBarcodeDescriptor;
}
declare var CIBarcodeGenerator: {

	prototype: CIBarcodeGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIBarsSwipeTransition extends CITransitionFilter {

	setAngle(_: number)

	angle: number;

	setBarOffset(_: number)

	barOffset: number;

	setWidth(_: number)

	width: number;
}
declare var CIBarsSwipeTransition: {

	prototype: CIBarsSwipeTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIBicubicScaleTransform extends CIFilterProtocol {

	setAspectRatio(_: number)

	aspectRatio: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setParameterB(_: number)

	parameterB: number;

	setParameterC(_: number)

	parameterC: number;

	setScale(_: number)

	scale: number;
}
declare var CIBicubicScaleTransform: {

	prototype: CIBicubicScaleTransform;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIBlendKernel extends CIColorKernel {

	static kernelWithFunctionNameFromMetalLibraryDataError(fromMetalLibraryData: string, error: NSData): CIBlendKernel; // inherited from CIKernel

	static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(fromMetalLibraryData: string, outputPixelFormat: NSData, error: number): CIBlendKernel; // inherited from CIKernel

	static clear(): CIBlendKernel;

	static color(): CIBlendKernel;

	static colorBurn(): CIBlendKernel;

	static colorDodge(): CIBlendKernel;

	static componentAdd(): CIBlendKernel;

	static componentMax(): CIBlendKernel;

	static componentMin(): CIBlendKernel;

	static componentMultiply(): CIBlendKernel;

	static darken(): CIBlendKernel;

	static darkerColor(): CIBlendKernel;

	static destination(): CIBlendKernel;

	static destinationAtop(): CIBlendKernel;

	static destinationIn(): CIBlendKernel;

	static destinationOut(): CIBlendKernel;

	static destinationOver(): CIBlendKernel;

	static difference(): CIBlendKernel;

	static divide(): CIBlendKernel;

	static exclusion(): CIBlendKernel;

	static exclusiveOr(): CIBlendKernel;

	static hardLight(): CIBlendKernel;

	static hardMix(): CIBlendKernel;

	static hue(): CIBlendKernel;

	static lighten(): CIBlendKernel;

	static lighterColor(): CIBlendKernel;

	static linearBurn(): CIBlendKernel;

	static linearDodge(): CIBlendKernel;

	static linearLight(): CIBlendKernel;

	static luminosity(): CIBlendKernel;

	static multiply(): CIBlendKernel;

	static overlay(): CIBlendKernel;

	static pinLight(): CIBlendKernel;

	static saturation(): CIBlendKernel;

	static screen(): CIBlendKernel;

	static softLight(): CIBlendKernel;

	static source(): CIBlendKernel;

	static sourceAtop(): CIBlendKernel;

	static sourceIn(): CIBlendKernel;

	static sourceOut(): CIBlendKernel;

	static sourceOver(): CIBlendKernel;

	static subtract(): CIBlendKernel;

	static vividLight(): CIBlendKernel;

	applyWithForegroundBackground(foreground: CIImage, background: CIImage): CIImage;

	applyWithForegroundBackgroundColorSpace(foreground: CIImage, background: CIImage, colorSpace: any): CIImage;
}

interface CIBlendWithMask extends CIFilterProtocol {

	setBackgroundImage(_: CIImage)

	backgroundImage: CIImage;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setMaskImage(_: CIImage)

	maskImage: CIImage;
}
declare var CIBlendWithMask: {

	prototype: CIBlendWithMask;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIBloom extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setIntensity(_: number)

	intensity: number;

	setRadius(_: number)

	radius: number;
}
declare var CIBloom: {

	prototype: CIBloom;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIBokehBlur extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;

	setRingAmount(_: number)

	ringAmount: number;

	setRingSize(_: number)

	ringSize: number;

	setSoftness(_: number)

	softness: number;
}
declare var CIBokehBlur: {

	prototype: CIBokehBlur;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIBoxBlur extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIBoxBlur: {

	prototype: CIBoxBlur;

	customAttributes?(): NSDictionary<string, any>;
};

interface CICMYKHalftone extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setGrayComponentReplacement(_: number)

	grayComponentReplacement: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setSharpness(_: number)

	sharpness: number;

	setUnderColorRemoval(_: number)

	underColorRemoval: number;

	setWidth(_: number)

	width: number;
}
declare var CICMYKHalftone: {

	prototype: CICMYKHalftone;

	customAttributes?(): NSDictionary<string, any>;
};

interface CICheckerboardGenerator extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setColor0(_: CIColor)

	color0: CIColor;

	setColor1(_: CIColor)

	color1: CIColor;

	setSharpness(_: number)

	sharpness: number;

	setWidth(_: number)

	width: number;
}
declare var CICheckerboardGenerator: {

	prototype: CICheckerboardGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

interface CICircularScreen extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setSharpness(_: number)

	sharpness: number;

	setWidth(_: number)

	width: number;
}
declare var CICircularScreen: {

	prototype: CICircularScreen;

	customAttributes?(): NSDictionary<string, any>;
};

interface CICode128BarcodeGenerator extends CIFilterProtocol {

	setBarcodeHeight(_: number)

	barcodeHeight: number;

	setMessage(_: NSData)

	message: NSData;

	setQuietSpace(_: number)

	quietSpace: number;
}
declare var CICode128BarcodeGenerator: {

	prototype: CICode128BarcodeGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIColor extends NSObject implements NSCopying, NSSecureCoding {

	static colorWithCGColor(_: any): CIColor;

	static colorWithRedGreenBlue(_: number, green: number, blue: number): CIColor;

	static colorWithRedGreenBlueAlpha(_: number, green: number, blue: number, alpha: number): CIColor;

	static colorWithRedGreenBlueAlphaColorSpace(_: number, green: number, blue: number, alpha: number, colorSpace: any): CIColor;

	static colorWithRedGreenBlueColorSpace(_: number, green: number, blue: number, colorSpace: any): CIColor;

	static colorWithString(_: string): CIColor;

	readonly alpha: number;

	readonly blue: number;

	readonly colorSpace: any;

	readonly components: number;

	readonly green: number;

	readonly numberOfComponents: number;

	readonly red: number;

	readonly stringRepresentation: string;

	static blackColor(): CIColor;

	static blueColor(): CIColor;

	static clearColor(): CIColor;

	static cyanColor(): CIColor;

	static grayColor(): CIColor;

	static greenColor(): CIColor;

	static magentaColor(): CIColor;

	static redColor(): CIColor;

	static whiteColor(): CIColor;

	static yellowColor(): CIColor;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(CGColor: any);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(color: NSColor);

	static create(red: number, green: number, blue: number);

	static create(red: number, green: number, blue: number, alpha: number);

	static create(red: number, green: number, blue: number, alpha: number, colorSpace: any);

	static create(red: number, green: number, blue: number, colorSpace: any);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

interface CIColorClamp extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setMaxComponents(_: CIVector)

	maxComponents: CIVector;

	setMinComponents(_: CIVector)

	minComponents: CIVector;
}
declare var CIColorClamp: {

	prototype: CIColorClamp;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorControls extends CIFilterProtocol {

	setBrightness(_: number)

	brightness: number;

	setContrast(_: number)

	contrast: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setSaturation(_: number)

	saturation: number;
}
declare var CIColorControls: {

	prototype: CIColorControls;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorCrossPolynomial extends CIFilterProtocol {

	setBlueCoefficients(_: CIVector)

	blueCoefficients: CIVector;

	setGreenCoefficients(_: CIVector)

	greenCoefficients: CIVector;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRedCoefficients(_: CIVector)

	redCoefficients: CIVector;
}
declare var CIColorCrossPolynomial: {

	prototype: CIColorCrossPolynomial;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorCube extends CIFilterProtocol {

	setCubeData(_: NSData)

	cubeData: NSData;

	setCubeDimension(_: number)

	cubeDimension: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIColorCube: {

	prototype: CIColorCube;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorCubeWithColorSpace extends CIFilterProtocol {

	setColorSpace(_: any)

	colorSpace: any;

	setCubeData(_: NSData)

	cubeData: NSData;

	setCubeDimension(_: number)

	cubeDimension: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIColorCubeWithColorSpace: {

	prototype: CIColorCubeWithColorSpace;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorCubesMixedWithMask extends CIFilterProtocol {

	setColorSpace(_: any)

	colorSpace: any;

	setCube0Data(_: NSData)

	cube0Data: NSData;

	setCube1Data(_: NSData)

	cube1Data: NSData;

	setCubeDimension(_: number)

	cubeDimension: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setMaskImage(_: CIImage)

	maskImage: CIImage;
}
declare var CIColorCubesMixedWithMask: {

	prototype: CIColorCubesMixedWithMask;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorCurves extends CIFilterProtocol {

	setColorSpace(_: any)

	colorSpace: any;

	setCurvesData(_: NSData)

	curvesData: NSData;

	setCurvesDomain(_: CIVector)

	curvesDomain: CIVector;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIColorCurves: {

	prototype: CIColorCurves;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorInvert extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIColorInvert: {

	prototype: CIColorInvert;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIColorKernel extends CIKernel {

	static kernelWithFunctionNameFromMetalLibraryDataError(fromMetalLibraryData: string, error: NSData): CIColorKernel; // inherited from CIKernel

	static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(fromMetalLibraryData: string, outputPixelFormat: NSData, error: number): CIColorKernel; // inherited from CIKernel

	applyWithExtentArguments(extent: CGRect, arguments_?: NSArray<any>): CIImage;
}

interface CIColorMap extends CIFilterProtocol {

	setGradientImage(_: CIImage)

	gradientImage: CIImage;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIColorMap: {

	prototype: CIColorMap;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorMatrix extends CIFilterProtocol {

	setAVector(_: CIVector)

	AVector: CIVector;

	setBiasVector(_: CIVector)

	biasVector: CIVector;

	setBVector(_: CIVector)

	BVector: CIVector;

	setGVector(_: CIVector)

	GVector: CIVector;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRVector(_: CIVector)

	RVector: CIVector;
}
declare var CIColorMatrix: {

	prototype: CIColorMatrix;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorMonochrome extends CIFilterProtocol {

	setColor(_: CIColor)

	color: CIColor;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setIntensity(_: number)

	intensity: number;
}
declare var CIColorMonochrome: {

	prototype: CIColorMonochrome;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorPolynomial extends CIFilterProtocol {

	setAlphaCoefficients(_: CIVector)

	alphaCoefficients: CIVector;

	setBlueCoefficients(_: CIVector)

	blueCoefficients: CIVector;

	setGreenCoefficients(_: CIVector)

	greenCoefficients: CIVector;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRedCoefficients(_: CIVector)

	redCoefficients: CIVector;
}
declare var CIColorPolynomial: {

	prototype: CIColorPolynomial;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIColorPosterize extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setLevels(_: number)

	levels: number;
}
declare var CIColorPosterize: {

	prototype: CIColorPosterize;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIComicEffect extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIComicEffect: {

	prototype: CIComicEffect;

	customAttributes?(): NSDictionary<string, any>;
};

interface CICompositeOperation extends CIFilterProtocol {

	setBackgroundImage(_: CIImage)

	backgroundImage: CIImage;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CICompositeOperation: {

	prototype: CICompositeOperation;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIContext extends NSObject {

	static context(): CIContext;

	static contextWithCGContextOptions(_: any, options?: NSDictionary<string, any>): CIContext;

	static contextWithMTLCommandQueue(_: MTLCommandQueue): CIContext;

	static contextWithMTLCommandQueueOptions(_: MTLCommandQueue, options?: NSDictionary<string, any>): CIContext;

	static contextWithMTLDevice(_: MTLDevice): CIContext;

	static contextWithMTLDeviceOptions(_: MTLDevice, options?: NSDictionary<string, any>): CIContext;

	static contextWithOptions(_?: NSDictionary<string, any>): CIContext;

	static offlineGPUCount(): number;

	readonly workingColorSpace: any;

	readonly workingFormat: number;

	static create(options: NSDictionary<string, any>);

	HEIFRepresentationOfImageFormatColorSpaceOptions(_: CIImage, format: number, colorSpace: any, options: NSDictionary<string, any>): NSData;

	JPEGRepresentationOfImageColorSpaceOptions(_: CIImage, colorSpace: any, options: NSDictionary<string, any>): NSData;

	PNGRepresentationOfImageFormatColorSpaceOptions(_: CIImage, format: number, colorSpace: any, options: NSDictionary<string, any>): NSData;

	TIFFRepresentationOfImageFormatColorSpaceOptions(_: CIImage, format: number, colorSpace: any, options: NSDictionary<string, any>): NSData;

	clearCaches(): void;

	createCGImageFromRect(_: CIImage, fromRect: CGRect): any;

	createCGImageFromRectFormatColorSpace(_: CIImage, fromRect: CGRect, format: number, colorSpace?: any): any;

	createCGImageFromRectFormatColorSpaceDeferred(_: CIImage, fromRect: CGRect, format: number, colorSpace?: any, deferred: boolean): any;

	depthBlurEffectFilterForImageDisparityImagePortraitEffectsMatteHairSemanticSegmentationOrientationOptions(_: CIImage, disparityImage: CIImage, portraitEffectsMatte?: CIImage, hairSemanticSegmentation?: CIImage, orientation: CGImagePropertyOrientation, options?: NSDictionary<any, any>): CIFilter;

	depthBlurEffectFilterForImageDisparityImagePortraitEffectsMatteOrientationOptions(_: CIImage, disparityImage: CIImage, portraitEffectsMatte?: CIImage, orientation: CGImagePropertyOrientation, options?: NSDictionary<any, any>): CIFilter;

	depthBlurEffectFilterForImageDataOptions(_: NSData, options?: NSDictionary<any, any>): CIFilter;

	depthBlurEffectFilterForImageURLOptions(_: NSURL, options?: NSDictionary<any, any>): CIFilter;

	drawImageInRectFromRect(_: CIImage, inRect: CGRect, fromRect: CGRect): void;

	prepareRenderFromRectToDestinationAtPointError(fromRect: CIImage, toDestination: CGRect, atPoint: CIRenderDestination, error: CGPoint): boolean;

	reclaimResources(): void;

	renderToBitmapRowBytesBoundsFormatColorSpace(_: CIImage, toBitmap: any, rowBytes: number, bounds: CGRect, format: number, colorSpace?: any): void;

	renderToCVPixelBuffer(_: CIImage, toCVPixelBuffer: any): void;

	renderToCVPixelBufferBoundsColorSpace(_: CIImage, toCVPixelBuffer: any, bounds: CGRect, colorSpace?: any): void;

	renderToIOSurfaceBoundsColorSpace(_: CIImage, toIOSurface: any, bounds: CGRect, colorSpace?: any): void;

	renderToMTLTextureCommandBufferBoundsColorSpace(_: CIImage, toMTLTexture: MTLTexture, commandBuffer?: MTLCommandBuffer, bounds: CGRect, colorSpace: any): void;

	startTaskToClearError(error: CIRenderDestination): CIRenderTask;

	startTaskToRenderFromRectToDestinationAtPointError(fromRect: CIImage, toDestination: CGRect, atPoint: CIRenderDestination, error: CGPoint): CIRenderTask;

	startTaskToRenderToDestinationError(toDestination: CIImage, error: CIRenderDestination): CIRenderTask;

	writeHEIFRepresentationOfImageToURLFormatColorSpaceOptionsError(toURL: CIImage, format: NSURL, colorSpace: number, options: any, error: NSDictionary<string, any>): boolean;

	writeJPEGRepresentationOfImageToURLColorSpaceOptionsError(toURL: CIImage, colorSpace: NSURL, options: any, error: NSDictionary<string, any>): boolean;

	writePNGRepresentationOfImageToURLFormatColorSpaceOptionsError(toURL: CIImage, format: NSURL, colorSpace: number, options: any, error: NSDictionary<string, any>): boolean;

	writeTIFFRepresentationOfImageToURLFormatColorSpaceOptionsError(toURL: CIImage, format: NSURL, colorSpace: number, options: any, error: NSDictionary<string, any>): boolean;
}

interface CIConvolution extends CIFilterProtocol {

	setBias(_: number)

	bias: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWeights(_: CIVector)

	weights: CIVector;
}
declare var CIConvolution: {

	prototype: CIConvolution;

	customAttributes?(): NSDictionary<string, any>;
};

interface CICopyMachineTransition extends CITransitionFilter {

	setAngle(_: number)

	angle: number;

	setColor(_: CIColor)

	color: CIColor;

	setExtent(_: CGRect)

	extent: CGRect;

	setOpacity(_: number)

	opacity: number;

	setWidth(_: number)

	width: number;
}
declare var CICopyMachineTransition: {

	prototype: CICopyMachineTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CICoreMLModel extends CIFilterProtocol {

	setHeadIndex(_: number)

	headIndex: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setModel(_: MLModel)

	model: MLModel;

	setSoftmaxNormalization(_: boolean)

	softmaxNormalization: boolean;
}
declare var CICoreMLModel: {

	prototype: CICoreMLModel;

	customAttributes?(): NSDictionary<string, any>;
};

interface CICrystallize extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CICrystallize: {

	prototype: CICrystallize;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIDataMatrixCodeDescriptor extends CIBarcodeDescriptor {

	static descriptorWithPayloadRowCountColumnCountEccVersion(_: NSData, rowCount: number, columnCount: number, eccVersion: CIDataMatrixCodeECCVersion): CIDataMatrixCodeDescriptor;

	readonly columnCount: number;

	readonly eccVersion: CIDataMatrixCodeECCVersion;

	readonly errorCorrectedPayload: NSData;

	readonly rowCount: number;

	static create(payload: NSData, rowCount: number, columnCount: number, eccVersion: CIDataMatrixCodeECCVersion);
}

enum CIDataMatrixCodeECCVersion {

	Version000 = 0,

	Version050 = 50,

	Version080 = 80,

	Version100 = 100,

	Version140 = 140,

	Version200 = 200
}


interface CIDepthOfField extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setPoint0(_: CGPoint)

	point0: CGPoint;

	setPoint1(_: CGPoint)

	point1: CGPoint;

	setRadius(_: number)

	radius: number;

	setSaturation(_: number)

	saturation: number;

	setUnsharpMaskIntensity(_: number)

	unsharpMaskIntensity: number;

	setUnsharpMaskRadius(_: number)

	unsharpMaskRadius: number;
}
declare var CIDepthOfField: {

	prototype: CIDepthOfField;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIDepthToDisparity extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIDepthToDisparity: {

	prototype: CIDepthToDisparity;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIDetector extends NSObject {

	static detectorOfTypeContextOptions(_: string, context?: CIContext, options?: NSDictionary<string, any>): CIDetector;

	featuresInImage(_: CIImage): NSArray<CIFeature>;

	featuresInImageOptions(_: CIImage, options?: NSDictionary<string, any>): NSArray<CIFeature>;
}

declare var CIDetectorAccuracy: string;

declare var CIDetectorAccuracyHigh: string;

declare var CIDetectorAccuracyLow: string;

declare var CIDetectorAspectRatio: string;

declare var CIDetectorEyeBlink: string;

declare var CIDetectorFocalLength: string;

declare var CIDetectorImageOrientation: string;

declare var CIDetectorMaxFeatureCount: string;

declare var CIDetectorMinFeatureSize: string;

declare var CIDetectorNumberOfAngles: string;

declare var CIDetectorReturnSubFeatures: string;

declare var CIDetectorSmile: string;

declare var CIDetectorTracking: string;

declare var CIDetectorTypeFace: string;

declare var CIDetectorTypeQRCode: string;

declare var CIDetectorTypeRectangle: string;

declare var CIDetectorTypeText: string;

interface CIDiscBlur extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIDiscBlur: {

	prototype: CIDiscBlur;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIDisintegrateWithMaskTransition extends CITransitionFilter {

	setMaskImage(_: CIImage)

	maskImage: CIImage;

	setShadowDensity(_: number)

	shadowDensity: number;

	setShadowOffset(_: CGPoint)

	shadowOffset: CGPoint;

	setShadowRadius(_: number)

	shadowRadius: number;
}
declare var CIDisintegrateWithMaskTransition: {

	prototype: CIDisintegrateWithMaskTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIDisparityToDepth extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIDisparityToDepth: {

	prototype: CIDisparityToDepth;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIDissolveTransition extends CITransitionFilter {
}
declare var CIDissolveTransition: {

	prototype: CIDissolveTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIDither extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setIntensity(_: number)

	intensity: number;
}
declare var CIDither: {

	prototype: CIDither;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIDocumentEnhancer extends CIFilterProtocol {

	setAmount(_: number)

	amount: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIDocumentEnhancer: {

	prototype: CIDocumentEnhancer;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIDotScreen extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setSharpness(_: number)

	sharpness: number;

	setWidth(_: number)

	width: number;
}
declare var CIDotScreen: {

	prototype: CIDotScreen;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIEdgePreserveUpsample extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setLumaSigma(_: number)

	lumaSigma: number;

	setSmallImage(_: CIImage)

	smallImage: CIImage;

	setSpatialSigma(_: number)

	spatialSigma: number;
}
declare var CIEdgePreserveUpsample: {

	prototype: CIEdgePreserveUpsample;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIEdgeWork extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIEdgeWork: {

	prototype: CIEdgeWork;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIEdges extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setIntensity(_: number)

	intensity: number;
}
declare var CIEdges: {

	prototype: CIEdges;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIEightfoldReflectedTile extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CIEightfoldReflectedTile: {

	prototype: CIEightfoldReflectedTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIExposureAdjust extends CIFilterProtocol {

	setEV(_: number)

	EV: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIExposureAdjust: {

	prototype: CIExposureAdjust;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIFaceFeature extends CIFeature {

	readonly faceAngle: number;

	readonly hasFaceAngle: boolean;

	readonly hasLeftEyePosition: boolean;

	readonly hasMouthPosition: boolean;

	readonly hasRightEyePosition: boolean;

	readonly hasSmile: boolean;

	readonly hasTrackingFrameCount: boolean;

	readonly hasTrackingID: boolean;

	readonly leftEyeClosed: boolean;

	readonly leftEyePosition: CGPoint;

	readonly mouthPosition: CGPoint;

	readonly rightEyeClosed: boolean;

	readonly rightEyePosition: CGPoint;

	readonly trackingFrameCount: number;

	readonly trackingID: number;
}

interface CIFalseColor extends CIFilterProtocol {

	setColor0(_: CIColor)

	color0: CIColor;

	setColor1(_: CIColor)

	color1: CIColor;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIFalseColor: {

	prototype: CIFalseColor;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIFeature extends NSObject {

	readonly bounds: CGRect;

	readonly type: string;
}

declare var CIFeatureTypeFace: string;

declare var CIFeatureTypeQRCode: string;

declare var CIFeatureTypeRectangle: string;

declare var CIFeatureTypeText: string;

declare class CIFilter extends NSObject implements NSCopying, NSSecureCoding {

	static CMYKHalftone(): CIFilter;

	static LabDeltaE(): CIFilter;

	static PDF417BarcodeGenerator(): CIFilter;

	static QRCodeGenerator(): CIFilter;

	static accordionFoldTransitionFilter(): CIFilter;

	static additionCompositingFilter(): CIFilter;

	static affineClampFilter(): CIFilter;

	static affineTileFilter(): CIFilter;

	static attributedTextImageGeneratorFilter(): CIFilter;

	static aztecCodeGeneratorFilter(): CIFilter;

	static barcodeGeneratorFilter(): CIFilter;

	static barsSwipeTransitionFilter(): CIFilter;

	static bicubicScaleTransformFilter(): CIFilter;

	static blendWithAlphaMaskFilter(): CIFilter;

	static blendWithBlueMaskFilter(): CIFilter;

	static blendWithMaskFilter(): CIFilter;

	static blendWithRedMaskFilter(): CIFilter;

	static bloomFilter(): CIFilter;

	static bokehBlurFilter(): CIFilter;

	static boxBlurFilter(): CIFilter;

	static checkerboardGeneratorFilter(): CIFilter;

	static circularScreenFilter(): CIFilter;

	static code128BarcodeGeneratorFilter(): CIFilter;

	static colorBlendModeFilter(): CIFilter;

	static colorBurnBlendModeFilter(): CIFilter;

	static colorClampFilter(): CIFilter;

	static colorControlsFilter(): CIFilter;

	static colorCrossPolynomialFilter(): CIFilter;

	static colorCubeFilter(): CIFilter;

	static colorCubeWithColorSpaceFilter(): CIFilter;

	static colorCubesMixedWithMaskFilter(): CIFilter;

	static colorCurvesFilter(): CIFilter;

	static colorDodgeBlendModeFilter(): CIFilter;

	static colorInvertFilter(): CIFilter;

	static colorMapFilter(): CIFilter;

	static colorMatrixFilter(): CIFilter;

	static colorMonochromeFilter(): CIFilter;

	static colorPolynomialFilter(): CIFilter;

	static colorPosterizeFilter(): CIFilter;

	static comicEffectFilter(): CIFilter;

	static convolution3X3Filter(): CIFilter;

	static convolution5X5Filter(): CIFilter;

	static convolution7X7Filter(): CIFilter;

	static convolution9HorizontalFilter(): CIFilter;

	static convolution9VerticalFilter(): CIFilter;

	static copyMachineTransitionFilter(): CIFilter;

	static coreMLModelFilter(): CIFilter;

	static crystallizeFilter(): CIFilter;

	static darkenBlendModeFilter(): CIFilter;

	static depthOfFieldFilter(): CIFilter;

	static depthToDisparityFilter(): CIFilter;

	static differenceBlendModeFilter(): CIFilter;

	static discBlurFilter(): CIFilter;

	static disintegrateWithMaskTransitionFilter(): CIFilter;

	static disparityToDepthFilter(): CIFilter;

	static dissolveTransitionFilter(): CIFilter;

	static ditherFilter(): CIFilter;

	static divideBlendModeFilter(): CIFilter;

	static documentEnhancerFilter(): CIFilter;

	static dotScreenFilter(): CIFilter;

	static edgePreserveUpsampleFilter(): CIFilter;

	static edgeWorkFilter(): CIFilter;

	static edgesFilter(): CIFilter;

	static eightfoldReflectedTileFilter(): CIFilter;

	static exclusionBlendModeFilter(): CIFilter;

	static exposureAdjustFilter(): CIFilter;

	static falseColorFilter(): CIFilter;

	static filterArrayFromSerializedXMPInputImageExtentError(inputImageExtent: NSData, error: CGRect): NSArray<CIFilter>;

	static filterNamesInCategories(_?: NSArray<string>): NSArray<string>;

	static filterNamesInCategory(_?: string): NSArray<string>;

	static filterWithCVPixelBufferPropertiesOptions(_: any, properties: NSDictionary<any, any>, options: NSDictionary<string, any>): CIFilter;

	static filterWithImageDataOptions(_: NSData, options: NSDictionary<string, any>): CIFilter;

	static filterWithImageURLOptions(_: NSURL, options: NSDictionary<string, any>): CIFilter;

	static filterWithName(_: string): CIFilter;

	static filterWithNameWithInputParameters(name: string, parameters?: NSDictionary<string, any>): CIFilter;

	static flashTransitionFilter(): CIFilter;

	static fourfoldReflectedTileFilter(): CIFilter;

	static fourfoldRotatedTileFilter(): CIFilter;

	static fourfoldTranslatedTileFilter(): CIFilter;

	static gaborGradientsFilter(): CIFilter;

	static gammaAdjustFilter(): CIFilter;

	static gaussianBlurFilter(): CIFilter;

	static gaussianGradientFilter(): CIFilter;

	static glideReflectedTileFilter(): CIFilter;

	static gloomFilter(): CIFilter;

	static hardLightBlendModeFilter(): CIFilter;

	static hatchedScreenFilter(): CIFilter;

	static heightFieldFromMaskFilter(): CIFilter;

	static hexagonalPixellateFilter(): CIFilter;

	static highlightShadowAdjustFilter(): CIFilter;

	static hueAdjustFilter(): CIFilter;

	static hueBlendModeFilter(): CIFilter;

	static hueSaturationValueGradientFilter(): CIFilter;

	static kaleidoscopeFilter(): CIFilter;

	static keystoneCorrectionCombinedFilter(): CIFilter;

	static keystoneCorrectionHorizontalFilter(): CIFilter;

	static keystoneCorrectionVerticalFilter(): CIFilter;

	static lanczosScaleTransformFilter(): CIFilter;

	static lenticularHaloGeneratorFilter(): CIFilter;

	static lightenBlendModeFilter(): CIFilter;

	static lineOverlayFilter(): CIFilter;

	static lineScreenFilter(): CIFilter;

	static linearBurnBlendModeFilter(): CIFilter;

	static linearDodgeBlendModeFilter(): CIFilter;

	static linearGradientFilter(): CIFilter;

	static linearToSRGBToneCurveFilter(): CIFilter;

	static localizedDescriptionForFilterName(_: string): string;

	static localizedNameForCategory(_: string): string;

	static localizedNameForFilterName(_: string): string;

	static localizedReferenceDocumentationForFilterName(_: string): NSURL;

	static luminosityBlendModeFilter(): CIFilter;

	static maskToAlphaFilter(): CIFilter;

	static maskedVariableBlurFilter(): CIFilter;

	static maximumComponentFilter(): CIFilter;

	static maximumCompositingFilter(): CIFilter;

	static medianFilter(): CIFilter;

	static meshGeneratorFilter(): CIFilter;

	static minimumComponentFilter(): CIFilter;

	static minimumCompositingFilter(): CIFilter;

	static mixFilter(): CIFilter;

	static modTransitionFilter(): CIFilter;

	static morphologyGradientFilter(): CIFilter;

	static morphologyMaximumFilter(): CIFilter;

	static morphologyMinimumFilter(): CIFilter;

	static morphologyRectangleMaximumFilter(): CIFilter;

	static morphologyRectangleMinimumFilter(): CIFilter;

	static motionBlurFilter(): CIFilter;

	static multiplyBlendModeFilter(): CIFilter;

	static multiplyCompositingFilter(): CIFilter;

	static noiseReductionFilter(): CIFilter;

	static opTileFilter(): CIFilter;

	static overlayBlendModeFilter(): CIFilter;

	static pageCurlTransitionFilter(): CIFilter;

	static pageCurlWithShadowTransitionFilter(): CIFilter;

	static paletteCentroidFilter(): CIFilter;

	static palettizeFilter(): CIFilter;

	static parallelogramTileFilter(): CIFilter;

	static perspectiveCorrectionFilter(): CIFilter;

	static perspectiveRotateFilter(): CIFilter;

	static perspectiveTileFilter(): CIFilter;

	static perspectiveTransformFilter(): CIFilter;

	static perspectiveTransformWithExtentFilter(): CIFilter;

	static photoEffectChromeFilter(): CIFilter;

	static photoEffectFadeFilter(): CIFilter;

	static photoEffectInstantFilter(): CIFilter;

	static photoEffectMonoFilter(): CIFilter;

	static photoEffectNoirFilter(): CIFilter;

	static photoEffectProcessFilter(): CIFilter;

	static photoEffectTonalFilter(): CIFilter;

	static photoEffectTransferFilter(): CIFilter;

	static pinLightBlendModeFilter(): CIFilter;

	static pixellateFilter(): CIFilter;

	static pointillizeFilter(): CIFilter;

	static radialGradientFilter(): CIFilter;

	static randomGeneratorFilter(): CIFilter;

	static registerFilterNameConstructorClassAttributes(_: string, constructor: CIFilterConstructor, classAttributes: NSDictionary<string, any>): void;

	static rippleTransitionFilter(): CIFilter;

	static roundedRectangleGeneratorFilter(): CIFilter;

	static sRGBToneCurveToLinearFilter(): CIFilter;

	static saliencyMapFilter(): CIFilter;

	static saturationBlendModeFilter(): CIFilter;

	static screenBlendModeFilter(): CIFilter;

	static sepiaToneFilter(): CIFilter;

	static serializedXMPFromFiltersInputImageExtent(_: NSArray<CIFilter>, inputImageExtent: CGRect): NSData;

	static shadedMaterialFilter(): CIFilter;

	static sharpenLuminanceFilter(): CIFilter;

	static sixfoldReflectedTileFilter(): CIFilter;

	static sixfoldRotatedTileFilter(): CIFilter;

	static smoothLinearGradientFilter(): CIFilter;

	static softLightBlendModeFilter(): CIFilter;

	static sourceAtopCompositingFilter(): CIFilter;

	static sourceInCompositingFilter(): CIFilter;

	static sourceOutCompositingFilter(): CIFilter;

	static sourceOverCompositingFilter(): CIFilter;

	static spotColorFilter(): CIFilter;

	static spotLightFilter(): CIFilter;

	static starShineGeneratorFilter(): CIFilter;

	static straightenFilter(): CIFilter;

	static stripesGeneratorFilter(): CIFilter;

	static subtractBlendModeFilter(): CIFilter;

	static sunbeamsGeneratorFilter(): CIFilter;

	static supportedRawCameraModels(): NSArray<string>;

	static swipeTransitionFilter(): CIFilter;

	static temperatureAndTintFilter(): CIFilter;

	static textImageGeneratorFilter(): CIFilter;

	static thermalFilter(): CIFilter;

	static toneCurveFilter(): CIFilter;

	static triangleKaleidoscopeFilter(): CIFilter;

	static triangleTileFilter(): CIFilter;

	static twelvefoldReflectedTileFilter(): CIFilter;

	static unsharpMaskFilter(): CIFilter;

	static vibranceFilter(): CIFilter;

	static vignetteEffectFilter(): CIFilter;

	static vignetteFilter(): CIFilter;

	static whitePointAdjustFilter(): CIFilter;

	static xRayFilter(): CIFilter;

	static zoomBlurFilter(): CIFilter;

	readonly attributes: NSDictionary<string, any>;

	setEnabled(_: boolean)

	isEnabled: boolean;

	readonly inputKeys: NSArray<string>;

	setName(_: string)

	name: string;

	readonly outputImage: CIImage;

	readonly outputKeys: NSArray<string>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	applyArgumentsOptions(_: CIKernel, arguments_?: NSArray<any>, options?: NSDictionary<string, any>): CIImage;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	setDefaults(): void;

	setName(_: string): void;

	viewForUIConfigurationExcludedKeys(_: NSDictionary<any, any>, excludedKeys: NSArray<any>): IKFilterUIView;
}

interface CIFilterConstructor {

	filterWithName(_: string): CIFilter;
}
declare var CIFilterConstructor: {

	prototype: CIFilterConstructor;
};

declare class CIFilterGenerator extends NSObject implements CIFilterConstructor, NSCopying, NSSecureCoding {

	static filterGenerator(): CIFilterGenerator;

	static filterGeneratorWithContentsOfURL(_: NSURL): CIFilterGenerator;

	setClassAttributes(_: NSDictionary<any, any>)

	classAttributes: NSDictionary<any, any>;

	readonly exportedKeys: NSDictionary<any, any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(contentsOfURL: NSURL);

	connectObjectWithKeyToObjectWithKey(_: any, withKey?: string, toObject: any, withKey: string): void;

	copyWithZone(_?: any): any;

	disconnectObjectWithKeyToObjectWithKey(_: any, withKey: string, toObject: any, withKey: string): void;

	encodeWithCoder(_: NSCoder): void;

	exportKeyFromObjectWithName(_: string, fromObject: any, withName?: string): void;

	filter(): CIFilter;

	filterWithName(_: string): CIFilter;

	registerFilterName(_: string): void;

	removeExportedKey(_: string): void;

	setAttributesForExportedKey(_: NSDictionary<any, any>, forExportedKey: string): void;

	writeToURLAtomically(_: NSURL, atomically: boolean): boolean;
}

interface CIFilterProtocol {

	outputImage: CIImage;
}
declare var CIFilterProtocol: {

	prototype: CIFilterProtocol;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIFilterShape extends NSObject implements NSCopying {

	static shapeWithRect(_: CGRect): CIFilterShape;

	readonly extent: CGRect;

	static create(rect: CGRect);

	copyWithZone(_?: any): any;

	insetByXY(_: number, Y: number): CIFilterShape;

	intersectWith(_: CIFilterShape): CIFilterShape;

	intersectWithRect(_: CGRect): CIFilterShape;

	transformByInterior(_: CGAffineTransform, interior: boolean): CIFilterShape;

	unionWith(_: CIFilterShape): CIFilterShape;

	unionWithRect(_: CGRect): CIFilterShape;
}

interface CIFlashTransition extends CITransitionFilter {

	setCenter(_: CGPoint)

	center: CGPoint;

	setColor(_: CIColor)

	color: CIColor;

	setExtent(_: CGRect)

	extent: CGRect;

	setFadeThreshold(_: number)

	fadeThreshold: number;

	setMaxStriationRadius(_: number)

	maxStriationRadius: number;

	setStriationContrast(_: number)

	striationContrast: number;

	setStriationStrength(_: number)

	striationStrength: number;
}
declare var CIFlashTransition: {

	prototype: CIFlashTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIFourCoordinateGeometryFilter extends CIFilterProtocol {

	setBottomLeft(_: CGPoint)

	bottomLeft: CGPoint;

	setBottomRight(_: CGPoint)

	bottomRight: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setTopLeft(_: CGPoint)

	topLeft: CGPoint;

	setTopRight(_: CGPoint)

	topRight: CGPoint;
}
declare var CIFourCoordinateGeometryFilter: {

	prototype: CIFourCoordinateGeometryFilter;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIFourfoldReflectedTile extends CIFilterProtocol {

	setAcuteAngle(_: number)

	acuteAngle: number;

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CIFourfoldReflectedTile: {

	prototype: CIFourfoldReflectedTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIFourfoldRotatedTile extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CIFourfoldRotatedTile: {

	prototype: CIFourfoldRotatedTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIFourfoldTranslatedTile extends CIFilterProtocol {

	setAcuteAngle(_: number)

	acuteAngle: number;

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CIFourfoldTranslatedTile: {

	prototype: CIFourfoldTranslatedTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIGaborGradients extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIGaborGradients: {

	prototype: CIGaborGradients;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIGammaAdjust extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIGammaAdjust: {

	prototype: CIGammaAdjust;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIGaussianBlur extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIGaussianBlur: {

	prototype: CIGaussianBlur;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIGaussianGradient extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setColor0(_: CIColor)

	color0: CIColor;

	setColor1(_: CIColor)

	color1: CIColor;

	setRadius(_: number)

	radius: number;
}
declare var CIGaussianGradient: {

	prototype: CIGaussianGradient;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIGlideReflectedTile extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CIGlideReflectedTile: {

	prototype: CIGlideReflectedTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIGloom extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setIntensity(_: number)

	intensity: number;

	setRadius(_: number)

	radius: number;
}
declare var CIGloom: {

	prototype: CIGloom;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIHatchedScreen extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setSharpness(_: number)

	sharpness: number;

	setWidth(_: number)

	width: number;
}
declare var CIHatchedScreen: {

	prototype: CIHatchedScreen;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIHeightFieldFromMask extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIHeightFieldFromMask: {

	prototype: CIHeightFieldFromMask;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIHexagonalPixellate extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setScale(_: number)

	scale: number;
}
declare var CIHexagonalPixellate: {

	prototype: CIHexagonalPixellate;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIHighlightShadowAdjust extends CIFilterProtocol {

	setHighlightAmount(_: number)

	highlightAmount: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;

	setShadowAmount(_: number)

	shadowAmount: number;
}
declare var CIHighlightShadowAdjust: {

	prototype: CIHighlightShadowAdjust;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIHueAdjust extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIHueAdjust: {

	prototype: CIHueAdjust;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIHueSaturationValueGradient extends CIFilterProtocol {

	setColorSpace(_: any)

	colorSpace: any;

	setDither(_: number)

	dither: number;

	setRadius(_: number)

	radius: number;

	setSoftness(_: number)

	softness: number;

	setValue(_: number)

	value: number;
}
declare var CIHueSaturationValueGradient: {

	prototype: CIHueSaturationValueGradient;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIImage extends NSObject implements NSCopying, NSSecureCoding {

	static emptyImage(): CIImage;

	static imageWithBitmapDataBytesPerRowSizeFormatColorSpace(_: NSData, bytesPerRow: number, size: CGSize, format: number, colorSpace?: any): CIImage;

	static imageWithCGImage(_: any): CIImage;

	static imageWithCGImageOptions(_: any, options?: NSDictionary<string, any>): CIImage;

	static imageWithCGImageSourceIndexOptions(_: any, index: number, options?: NSDictionary<string, any>): CIImage;

	static imageWithCVImageBuffer(_: any): CIImage;

	static imageWithCVImageBufferOptions(_: any, options?: NSDictionary<string, any>): CIImage;

	static imageWithCVPixelBuffer(_: any): CIImage;

	static imageWithCVPixelBufferOptions(_: any, options?: NSDictionary<string, any>): CIImage;

	static imageWithColor(_: CIColor): CIImage;

	static imageWithContentsOfURL(_: NSURL): CIImage;

	static imageWithContentsOfURLOptions(_: NSURL, options?: NSDictionary<string, any>): CIImage;

	static imageWithData(_: NSData): CIImage;

	static imageWithDataOptions(_: NSData, options?: NSDictionary<string, any>): CIImage;

	static imageWithDepthData(_: AVDepthData): CIImage;

	static imageWithDepthDataOptions(_: AVDepthData, options?: NSDictionary<string, any>): CIImage;

	static imageWithIOSurface(_: any): CIImage;

	static imageWithIOSurfaceOptions(_: any, options?: NSDictionary<string, any>): CIImage;

	static imageWithImageProviderSizeFormatColorSpaceOptions(_: any, _: number, size: number, format: number, colorSpace?: any, options?: NSDictionary<string, any>): CIImage;

	static imageWithMTLTextureOptions(_: MTLTexture, options?: NSDictionary<string, any>): CIImage;

	static imageWithPortaitEffectsMatte(_: AVPortraitEffectsMatte): CIImage;

	static imageWithPortaitEffectsMatteOptions(_: AVPortraitEffectsMatte, options?: NSDictionary<string, any>): CIImage;

	static imageWithSemanticSegmentationMatte(_: AVSemanticSegmentationMatte): CIImage;

	static imageWithSemanticSegmentationMatteOptions(_: AVSemanticSegmentationMatte, options?: NSDictionary<string, any>): CIImage;

	readonly CGImage: any;

	readonly colorSpace: any;

	readonly definition: CIFilterShape;

	readonly depthData: AVDepthData;

	readonly extent: CGRect;

	readonly pixelBuffer: any;

	readonly portraitEffectsMatte: AVPortraitEffectsMatte;

	readonly properties: NSDictionary<string, any>;

	readonly semanticSegmentationMatte: AVSemanticSegmentationMatte;

	readonly url: NSURL;

	static blackImage(): CIImage;

	static blueImage(): CIImage;

	static clearImage(): CIImage;

	static cyanImage(): CIImage;

	static grayImage(): CIImage;

	static greenImage(): CIImage;

	static magentaImage(): CIImage;

	static redImage(): CIImage;

	static whiteImage(): CIImage;

	static yellowImage(): CIImage;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(bitmapData: NSData, bytesPerRow: number, size: CGSize, format: number, colorSpace: any);

	static create(bitmapImageRep: NSBitmapImageRep);

	static create(CGImage: any);

	static create(CGImage: any, options: NSDictionary<string, any>);

	static create(CGImageSource: any, index: number, options: NSDictionary<string, any>);

	static create(CVImageBuffer: any);

	static create(CVImageBuffer: any, options: NSDictionary<string, any>);

	static create(CVPixelBuffer: any);

	static create(CVPixelBuffer: any, options: NSDictionary<string, any>);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(color: CIColor);

	static create(contentsOfURL: NSURL);

	static create(contentsOfURL: NSURL, options: NSDictionary<string, any>);

	static create(data: NSData);

	static create(data: NSData, options: NSDictionary<string, any>);

	static create(depthData: AVDepthData);

	static create(depthData: AVDepthData, options: NSDictionary<string, any>);

	static create(IOSurface: any);

	static create(IOSurface: any, options: NSDictionary<string, any>);

	static create(imageProvider: any, size: number, format: number, colorSpace: number, options: any);

	static create(MTLTexture: MTLTexture, options: NSDictionary<string, any>);

	static create(portaitEffectsMatte: AVPortraitEffectsMatte);

	static create(portaitEffectsMatte: AVPortraitEffectsMatte, options: NSDictionary<string, any>);

	static create(semanticSegmentationMatte: AVSemanticSegmentationMatte);

	static create(semanticSegmentationMatte: AVSemanticSegmentationMatte, options: NSDictionary<string, any>);

	autoAdjustmentFilters(): NSArray<CIFilter>;

	autoAdjustmentFiltersWithOptions(_?: NSDictionary<string, any>): NSArray<CIFilter>;

	copyWithZone(_?: any): any;

	drawAtPointFromRectOperationFraction(_: CGPoint, fromRect: CGRect, operation: NSCompositingOperation, fraction: number): void;

	drawInRectFromRectOperationFraction(_: CGRect, fromRect: CGRect, operation: NSCompositingOperation, fraction: number): void;

	encodeWithCoder(_: NSCoder): void;

	imageByApplyingCGOrientation(_: CGImagePropertyOrientation): CIImage;

	imageByApplyingFilter(_: string): CIImage;

	imageByApplyingFilterWithInputParameters(_: string, parameters?: NSDictionary<string, any>): CIImage;

	imageByApplyingGaussianBlurWithSigma(sigma: number): CIImage;

	imageByApplyingOrientation(forExifOrientation: number): CIImage;

	imageByApplyingTransform(by: CGAffineTransform): CIImage;

	imageByApplyingTransformHighQualityDownsample(by: CGAffineTransform, highQualityDownsample: boolean): CIImage;

	imageByClampingToExtent(): CIImage;

	imageByClampingToRect(to: CGRect): CIImage;

	imageByColorMatchingColorSpaceToWorkingSpace(from: any): CIImage;

	imageByColorMatchingWorkingSpaceToColorSpace(to: any): CIImage;

	imageByCompositingOverImage(over: CIImage): CIImage;

	imageByCroppingToRect(to: CGRect): CIImage;

	imageByInsertingIntermediate(): CIImage;

	imageByInsertingIntermediate(cache: boolean): CIImage;

	imageByPremultiplyingAlpha(): CIImage;

	imageBySamplingLinear(): CIImage;

	imageBySamplingNearest(): CIImage;

	imageBySettingAlphaOneInExtent(in_: CGRect): CIImage;

	imageBySettingProperties(_: NSDictionary<any, any>): CIImage;

	imageByUnpremultiplyingAlpha(): CIImage;

	imageTransformForCGOrientation(for_: CGImagePropertyOrientation): CGAffineTransform;

	imageTransformForOrientation(forExifOrientation: number): CGAffineTransform;

	regionOfInterestForImageInRect(_: CIImage, inRect: CGRect): CGRect;
}

declare class CIImageAccumulator extends NSObject {

	static imageAccumulatorWithExtentFormat(_: CGRect, format: number): CIImageAccumulator;

	static imageAccumulatorWithExtentFormatColorSpace(_: CGRect, format: number, colorSpace: any): CIImageAccumulator;

	readonly extent: CGRect;

	readonly format: number;

	static create(extent: CGRect, format: number);

	static create(extent: CGRect, format: number, colorSpace: any);

	clear(): void;

	image(): CIImage;

	setImage(_: CIImage): void;

	setImageDirtyRect(_: CIImage, dirtyRect: CGRect): void;
}

interface CIImageProcessorInput {

	baseAddress: any;

	bytesPerRow: number;

	format: number;

	metalTexture: MTLTexture;

	pixelBuffer: any;

	region: CGRect;

	surface: any;
}
declare var CIImageProcessorInput: {

	prototype: CIImageProcessorInput;
};

declare class CIImageProcessorKernel extends NSObject {

	static applyWithExtentInputsArgumentsError(inputs: CGRect, arguments_?: NSArray<CIImage>, error?: NSDictionary<string, any>): CIImage;

	static formatForInputAtIndex(_: number): number;

	static processWithInputsArgumentsOutputError(arguments_?: NSArray<CIImageProcessorInput>, output?: NSDictionary<string, any>, error: CIImageProcessorOutput): boolean;

	static roiForInputArgumentsOutputRect(_: number, arguments_?: NSDictionary<string, any>, outputRect: CGRect): CGRect;

	static outputFormat(): number;

	static outputIsOpaque(): boolean;

	static synchronizeInputs(): boolean;
}

interface CIImageProcessorOutput {

	baseAddress: any;

	bytesPerRow: number;

	format: number;

	metalCommandBuffer: MTLCommandBuffer;

	metalTexture: MTLTexture;

	pixelBuffer: any;

	region: CGRect;

	surface: any;
}
declare var CIImageProcessorOutput: {

	prototype: CIImageProcessorOutput;
};

interface CIKaleidoscope extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setCount(_: number)

	count: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIKaleidoscope: {

	prototype: CIKaleidoscope;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIKernel extends NSObject {

	static kernelWithFunctionNameFromMetalLibraryDataError(fromMetalLibraryData: string, error: NSData): CIKernel;

	static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(fromMetalLibraryData: string, outputPixelFormat: NSData, error: number): CIKernel;

	readonly name: string;

	applyWithExtentRoiCallbackArguments(extent: CGRect, roiCallback: (p1: number, p2: CGRect) => CGRect, arguments_?: NSArray<any>): CIImage;

	setROISelector(_: string): void;
}

interface CIKeystoneCorrectionCombined extends CIFourCoordinateGeometryFilter {

	setFocalLength(_: number)

	focalLength: number;
}
declare var CIKeystoneCorrectionCombined: {

	prototype: CIKeystoneCorrectionCombined;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIKeystoneCorrectionHorizontal extends CIFourCoordinateGeometryFilter {

	setFocalLength(_: number)

	focalLength: number;
}
declare var CIKeystoneCorrectionHorizontal: {

	prototype: CIKeystoneCorrectionHorizontal;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIKeystoneCorrectionVertical extends CIFourCoordinateGeometryFilter {

	setFocalLength(_: number)

	focalLength: number;
}
declare var CIKeystoneCorrectionVertical: {

	prototype: CIKeystoneCorrectionVertical;

	customAttributes?(): NSDictionary<string, any>;
};

interface CILabDeltaE extends CIFilterProtocol {

	setImage2(_: CIImage)

	image2: CIImage;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CILabDeltaE: {

	prototype: CILabDeltaE;

	customAttributes?(): NSDictionary<string, any>;
};

interface CILanczosScaleTransform extends CIFilterProtocol {

	setAspectRatio(_: number)

	aspectRatio: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setScale(_: number)

	scale: number;
}
declare var CILanczosScaleTransform: {

	prototype: CILanczosScaleTransform;

	customAttributes?(): NSDictionary<string, any>;
};

interface CILenticularHaloGenerator extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setColor(_: CIColor)

	color: CIColor;

	setHaloOverlap(_: number)

	haloOverlap: number;

	setHaloRadius(_: number)

	haloRadius: number;

	setHaloWidth(_: number)

	haloWidth: number;

	setStriationContrast(_: number)

	striationContrast: number;

	setStriationStrength(_: number)

	striationStrength: number;

	setTime(_: number)

	time: number;
}
declare var CILenticularHaloGenerator: {

	prototype: CILenticularHaloGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

interface CILineOverlay extends CIFilterProtocol {

	setContrast(_: number)

	contrast: number;

	setEdgeIntensity(_: number)

	edgeIntensity: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setNRNoiseLevel(_: number)

	NRNoiseLevel: number;

	setNRSharpness(_: number)

	NRSharpness: number;

	setThreshold(_: number)

	threshold: number;
}
declare var CILineOverlay: {

	prototype: CILineOverlay;

	customAttributes?(): NSDictionary<string, any>;
};

interface CILineScreen extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setSharpness(_: number)

	sharpness: number;

	setWidth(_: number)

	width: number;
}
declare var CILineScreen: {

	prototype: CILineScreen;

	customAttributes?(): NSDictionary<string, any>;
};

interface CILinearGradient extends CIFilterProtocol {

	setColor0(_: CIColor)

	color0: CIColor;

	setColor1(_: CIColor)

	color1: CIColor;

	setPoint0(_: CGPoint)

	point0: CGPoint;

	setPoint1(_: CGPoint)

	point1: CGPoint;
}
declare var CILinearGradient: {

	prototype: CILinearGradient;

	customAttributes?(): NSDictionary<string, any>;
};

interface CILinearToSRGBToneCurve extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CILinearToSRGBToneCurve: {

	prototype: CILinearToSRGBToneCurve;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMaskToAlpha extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIMaskToAlpha: {

	prototype: CIMaskToAlpha;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMaskedVariableBlur extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setMask(_: CIImage)

	mask: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIMaskedVariableBlur: {

	prototype: CIMaskedVariableBlur;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMaximumComponent extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIMaximumComponent: {

	prototype: CIMaximumComponent;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMedian extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIMedian: {

	prototype: CIMedian;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMeshGenerator extends CIFilterProtocol {

	setColor(_: CIColor)

	color: CIColor;

	setMesh(_: NSArray<any>)

	mesh: NSArray<any>;

	setWidth(_: number)

	width: number;
}
declare var CIMeshGenerator: {

	prototype: CIMeshGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMinimumComponent extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIMinimumComponent: {

	prototype: CIMinimumComponent;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMix extends CIFilterProtocol {

	setAmount(_: number)

	amount: number;

	setBackgroundImage(_: CIImage)

	backgroundImage: CIImage;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIMix: {

	prototype: CIMix;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIModTransition extends CITransitionFilter {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setCompression(_: number)

	compression: number;

	setRadius(_: number)

	radius: number;
}
declare var CIModTransition: {

	prototype: CIModTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMorphologyGradient extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIMorphologyGradient: {

	prototype: CIMorphologyGradient;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMorphologyMaximum extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIMorphologyMaximum: {

	prototype: CIMorphologyMaximum;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMorphologyMinimum extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIMorphologyMinimum: {

	prototype: CIMorphologyMinimum;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMorphologyRectangleMaximum extends CIFilterProtocol {

	setHeight(_: number)

	height: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CIMorphologyRectangleMaximum: {

	prototype: CIMorphologyRectangleMaximum;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMorphologyRectangleMinimum extends CIFilterProtocol {

	setHeight(_: number)

	height: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CIMorphologyRectangleMinimum: {

	prototype: CIMorphologyRectangleMinimum;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIMotionBlur extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIMotionBlur: {

	prototype: CIMotionBlur;

	customAttributes?(): NSDictionary<string, any>;
};

interface CINoiseReduction extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setNoiseLevel(_: number)

	noiseLevel: number;

	setSharpness(_: number)

	sharpness: number;
}
declare var CINoiseReduction: {

	prototype: CINoiseReduction;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIOpTile extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setScale(_: number)

	scale: number;

	setWidth(_: number)

	width: number;
}
declare var CIOpTile: {

	prototype: CIOpTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPDF417BarcodeGenerator extends CIFilterProtocol {

	setAlwaysSpecifyCompaction(_: number)

	alwaysSpecifyCompaction: number;

	setCompactionMode(_: number)

	compactionMode: number;

	setCompactStyle(_: number)

	compactStyle: number;

	setCorrectionLevel(_: number)

	correctionLevel: number;

	setDataColumns(_: number)

	dataColumns: number;

	setMaxHeight(_: number)

	maxHeight: number;

	setMaxWidth(_: number)

	maxWidth: number;

	setMessage(_: NSData)

	message: NSData;

	setMinHeight(_: number)

	minHeight: number;

	setMinWidth(_: number)

	minWidth: number;

	setPreferredAspectRatio(_: number)

	preferredAspectRatio: number;

	setRows(_: number)

	rows: number;
}
declare var CIPDF417BarcodeGenerator: {

	prototype: CIPDF417BarcodeGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIPDF417CodeDescriptor extends CIBarcodeDescriptor {

	static descriptorWithPayloadIsCompactRowCountColumnCount(_: NSData, isCompact: boolean, rowCount: number, columnCount: number): CIPDF417CodeDescriptor;

	readonly columnCount: number;

	readonly errorCorrectedPayload: NSData;

	readonly isCompact: boolean;

	readonly rowCount: number;

	static create(payload: NSData, isCompact: boolean, rowCount: number, columnCount: number);
}

interface CIPageCurlTransition extends CITransitionFilter {

	setAngle(_: number)

	angle: number;

	setBacksideImage(_: CIImage)

	backsideImage: CIImage;

	setExtent(_: CGRect)

	extent: CGRect;

	setRadius(_: number)

	radius: number;

	setShadingImage(_: CIImage)

	shadingImage: CIImage;
}
declare var CIPageCurlTransition: {

	prototype: CIPageCurlTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPageCurlWithShadowTransition extends CITransitionFilter {

	setAngle(_: number)

	angle: number;

	setBacksideImage(_: CIImage)

	backsideImage: CIImage;

	setExtent(_: CGRect)

	extent: CGRect;

	setRadius(_: number)

	radius: number;

	setShadowAmount(_: number)

	shadowAmount: number;

	setShadowExtent(_: CGRect)

	shadowExtent: CGRect;

	setShadowSize(_: number)

	shadowSize: number;
}
declare var CIPageCurlWithShadowTransition: {

	prototype: CIPageCurlWithShadowTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPaletteCentroid extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setPaletteImage(_: CIImage)

	paletteImage: CIImage;

	setPerceptual(_: boolean)

	perceptual: boolean;
}
declare var CIPaletteCentroid: {

	prototype: CIPaletteCentroid;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPalettize extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setPaletteImage(_: CIImage)

	paletteImage: CIImage;

	setPerceptual(_: boolean)

	perceptual: boolean;
}
declare var CIPalettize: {

	prototype: CIPalettize;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIParallelogramTile extends CIFilterProtocol {

	setAcuteAngle(_: number)

	acuteAngle: number;

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CIParallelogramTile: {

	prototype: CIParallelogramTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPerspectiveCorrection extends CIFourCoordinateGeometryFilter {

	setCrop(_: boolean)

	crop: boolean;
}
declare var CIPerspectiveCorrection: {

	prototype: CIPerspectiveCorrection;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPerspectiveRotate extends CIFilterProtocol {

	setFocalLength(_: number)

	focalLength: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setPitch(_: number)

	pitch: number;

	setRoll(_: number)

	roll: number;

	setYaw(_: number)

	yaw: number;
}
declare var CIPerspectiveRotate: {

	prototype: CIPerspectiveRotate;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPerspectiveTile extends CIFilterProtocol {

	setBottomLeft(_: CGPoint)

	bottomLeft: CGPoint;

	setBottomRight(_: CGPoint)

	bottomRight: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setTopLeft(_: CGPoint)

	topLeft: CGPoint;

	setTopRight(_: CGPoint)

	topRight: CGPoint;
}
declare var CIPerspectiveTile: {

	prototype: CIPerspectiveTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPerspectiveTransform extends CIFourCoordinateGeometryFilter {
}
declare var CIPerspectiveTransform: {

	prototype: CIPerspectiveTransform;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPerspectiveTransformWithExtent extends CIFourCoordinateGeometryFilter {

	setExtent(_: CGRect)

	extent: CGRect;
}
declare var CIPerspectiveTransformWithExtent: {

	prototype: CIPerspectiveTransformWithExtent;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPhotoEffect extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIPhotoEffect: {

	prototype: CIPhotoEffect;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIPixellate extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setScale(_: number)

	scale: number;
}
declare var CIPixellate: {

	prototype: CIPixellate;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIPlugIn extends NSObject {

	static loadNonExecutablePlugIn(_: NSURL): void;

	static loadNonExecutablePlugIns(): void;
}

interface CIPlugInRegistration {

	load(_: any): boolean;
}
declare var CIPlugInRegistration: {

	prototype: CIPlugInRegistration;
};

interface CIPointillize extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;
}
declare var CIPointillize: {

	prototype: CIPointillize;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIQRCodeDescriptor extends CIBarcodeDescriptor {

	static descriptorWithPayloadSymbolVersionMaskPatternErrorCorrectionLevel(_: NSData, symbolVersion: number, maskPattern: number, errorCorrectionLevel: CIQRCodeErrorCorrectionLevel): CIQRCodeDescriptor;

	readonly errorCorrectedPayload: NSData;

	readonly errorCorrectionLevel: CIQRCodeErrorCorrectionLevel;

	readonly maskPattern: number;

	readonly symbolVersion: number;

	static create(payload: NSData, symbolVersion: number, maskPattern: number, errorCorrectionLevel: CIQRCodeErrorCorrectionLevel);
}

enum CIQRCodeErrorCorrectionLevel {

	L = 76,

	M = 77,

	Q = 81,

	H = 72
}


declare class CIQRCodeFeature extends CIFeature implements NSCopying, NSSecureCoding {

	readonly bottomLeft: CGPoint;

	readonly bottomRight: CGPoint;

	readonly messageString: string;

	readonly symbolDescriptor: CIQRCodeDescriptor;

	readonly topLeft: CGPoint;

	readonly topRight: CGPoint;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

interface CIQRCodeGenerator extends CIFilterProtocol {

	setCorrectionLevel(_: string)

	correctionLevel: string;

	setMessage(_: NSData)

	message: NSData;
}
declare var CIQRCodeGenerator: {

	prototype: CIQRCodeGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIRadialGradient extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setColor0(_: CIColor)

	color0: CIColor;

	setColor1(_: CIColor)

	color1: CIColor;

	setRadius0(_: number)

	radius0: number;

	setRadius1(_: number)

	radius1: number;
}
declare var CIRadialGradient: {

	prototype: CIRadialGradient;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIRandomGenerator extends CIFilterProtocol {
}
declare var CIRandomGenerator: {

	prototype: CIRandomGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIRectangleFeature extends CIFeature {

	readonly bottomLeft: CGPoint;

	readonly bottomRight: CGPoint;

	readonly topLeft: CGPoint;

	readonly topRight: CGPoint;
}

declare class CIRenderDestination extends NSObject {

	setAlphaMode(_: CIRenderDestinationAlphaMode)

	alphaMode: CIRenderDestinationAlphaMode;

	setBlendKernel(_: CIBlendKernel)

	blendKernel: CIBlendKernel;

	setBlendsInDestinationColorSpace(_: boolean)

	blendsInDestinationColorSpace: boolean;

	setClamped(_: boolean)

	isClamped: boolean;

	setColorSpace(_: any)

	colorSpace: any;

	setDithered(_: boolean)

	isDithered: boolean;

	setFlipped(_: boolean)

	isFlipped: boolean;

	readonly height: number;

	readonly width: number;

	static create(bitmapData: any, width: number, height: number, bytesPerRow: number, format: number);

	static create(GLTexture: number, target: number, width: number, height: number);

	static create(IOSurface: IOSurface);

	static create(MTLTexture: MTLTexture, commandBuffer: MTLCommandBuffer);

	static create(pixelBuffer: any);

	static create(width: number, height: number, pixelFormat: MTLPixelFormat, commandBuffer: MTLCommandBuffer, mtlTextureProvider: () => MTLTexture);
}

enum CIRenderDestinationAlphaMode {

	None = 0,

	Premultiplied = 1,

	Unpremultiplied = 2
}


declare class CIRenderInfo extends NSObject {

	readonly kernelExecutionTime: number;

	readonly passCount: number;

	readonly pixelsProcessed: number;
}

declare class CIRenderTask extends NSObject {

	waitUntilCompletedAndReturnError(): CIRenderInfo;
}

interface CIRippleTransition extends CITransitionFilter {

	setCenter(_: CGPoint)

	center: CGPoint;

	setExtent(_: CGRect)

	extent: CGRect;

	setScale(_: number)

	scale: number;

	setShadingImage(_: CIImage)

	shadingImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CIRippleTransition: {

	prototype: CIRippleTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIRoundedRectangleGenerator extends CIFilterProtocol {

	setColor(_: CIColor)

	color: CIColor;

	setExtent(_: CGRect)

	extent: CGRect;

	setRadius(_: number)

	radius: number;
}
declare var CIRoundedRectangleGenerator: {

	prototype: CIRoundedRectangleGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

interface CISRGBToneCurveToLinear extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CISRGBToneCurveToLinear: {

	prototype: CISRGBToneCurveToLinear;

	customAttributes?(): NSDictionary<string, any>;
};

interface CISaliencyMap extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CISaliencyMap: {

	prototype: CISaliencyMap;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CISampler extends NSObject implements NSCopying {

	static samplerWithImage(_: CIImage): CISampler;

	static samplerWithImageKeysAndValues(_: CIImage, keysAndValues: any): CISampler;

	static samplerWithImageOptions(_: CIImage, options?: NSDictionary<any, any>): CISampler;

	readonly definition: CIFilterShape;

	readonly extent: CGRect;

	static create(image: CIImage);

	static create(image: CIImage, options: NSDictionary<any, any>);

	copyWithZone(_?: any): any;
}

interface CISepiaTone extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setIntensity(_: number)

	intensity: number;
}
declare var CISepiaTone: {

	prototype: CISepiaTone;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIShadedMaterial extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setScale(_: number)

	scale: number;

	setShadingImage(_: CIImage)

	shadingImage: CIImage;
}
declare var CIShadedMaterial: {

	prototype: CIShadedMaterial;

	customAttributes?(): NSDictionary<string, any>;
};

interface CISharpenLuminance extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setRadius(_: number)

	radius: number;

	setSharpness(_: number)

	sharpness: number;
}
declare var CISharpenLuminance: {

	prototype: CISharpenLuminance;

	customAttributes?(): NSDictionary<string, any>;
};

interface CISixfoldReflectedTile extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CISixfoldReflectedTile: {

	prototype: CISixfoldReflectedTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CISixfoldRotatedTile extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CISixfoldRotatedTile: {

	prototype: CISixfoldRotatedTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CISmoothLinearGradient extends CIFilterProtocol {

	setColor0(_: CIColor)

	color0: CIColor;

	setColor1(_: CIColor)

	color1: CIColor;

	setPoint0(_: CGPoint)

	point0: CGPoint;

	setPoint1(_: CGPoint)

	point1: CGPoint;
}
declare var CISmoothLinearGradient: {

	prototype: CISmoothLinearGradient;

	customAttributes?(): NSDictionary<string, any>;
};

interface CISpotColor extends CIFilterProtocol {

	setCenterColor1(_: CIColor)

	centerColor1: CIColor;

	setCenterColor2(_: CIColor)

	centerColor2: CIColor;

	setCenterColor3(_: CIColor)

	centerColor3: CIColor;

	setCloseness1(_: number)

	closeness1: number;

	setCloseness2(_: number)

	closeness2: number;

	setCloseness3(_: number)

	closeness3: number;

	setContrast1(_: number)

	contrast1: number;

	setContrast2(_: number)

	contrast2: number;

	setContrast3(_: number)

	contrast3: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setReplacementColor1(_: CIColor)

	replacementColor1: CIColor;

	setReplacementColor2(_: CIColor)

	replacementColor2: CIColor;

	setReplacementColor3(_: CIColor)

	replacementColor3: CIColor;
}
declare var CISpotColor: {

	prototype: CISpotColor;

	customAttributes?(): NSDictionary<string, any>;
};

interface CISpotLight extends CIFilterProtocol {

	setBrightness(_: number)

	brightness: number;

	setColor(_: CIColor)

	color: CIColor;

	setConcentration(_: number)

	concentration: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setLightPointsAt(_: CIVector)

	lightPointsAt: CIVector;

	setLightPosition(_: CIVector)

	lightPosition: CIVector;
}
declare var CISpotLight: {

	prototype: CISpotLight;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIStarShineGenerator extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setColor(_: CIColor)

	color: CIColor;

	setCrossAngle(_: number)

	crossAngle: number;

	setCrossOpacity(_: number)

	crossOpacity: number;

	setCrossScale(_: number)

	crossScale: number;

	setCrossWidth(_: number)

	crossWidth: number;

	setEpsilon(_: number)

	epsilon: number;

	setRadius(_: number)

	radius: number;
}
declare var CIStarShineGenerator: {

	prototype: CIStarShineGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIStraighten extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIStraighten: {

	prototype: CIStraighten;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIStripesGenerator extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setColor0(_: CIColor)

	color0: CIColor;

	setColor1(_: CIColor)

	color1: CIColor;

	setSharpness(_: number)

	sharpness: number;

	setWidth(_: number)

	width: number;
}
declare var CIStripesGenerator: {

	prototype: CIStripesGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

interface CISunbeamsGenerator extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setColor(_: CIColor)

	color: CIColor;

	setMaxStriationRadius(_: number)

	maxStriationRadius: number;

	setStriationContrast(_: number)

	striationContrast: number;

	setStriationStrength(_: number)

	striationStrength: number;

	setSunRadius(_: number)

	sunRadius: number;

	setTime(_: number)

	time: number;
}
declare var CISunbeamsGenerator: {

	prototype: CISunbeamsGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

interface CISwipeTransition extends CITransitionFilter {

	setAngle(_: number)

	angle: number;

	setColor(_: CIColor)

	color: CIColor;

	setExtent(_: CGRect)

	extent: CGRect;

	setOpacity(_: number)

	opacity: number;

	setWidth(_: number)

	width: number;
}
declare var CISwipeTransition: {

	prototype: CISwipeTransition;

	customAttributes?(): NSDictionary<string, any>;
};

interface CITemperatureAndTint extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setNeutral(_: CIVector)

	neutral: CIVector;

	setTargetNeutral(_: CIVector)

	targetNeutral: CIVector;
}
declare var CITemperatureAndTint: {

	prototype: CITemperatureAndTint;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CITextFeature extends CIFeature {

	readonly bottomLeft: CGPoint;

	readonly bottomRight: CGPoint;

	readonly subFeatures: NSArray<any>;

	readonly topLeft: CGPoint;

	readonly topRight: CGPoint;
}

interface CITextImageGenerator extends CIFilterProtocol {

	setFontName(_: string)

	fontName: string;

	setFontSize(_: number)

	fontSize: number;

	setScaleFactor(_: number)

	scaleFactor: number;

	setText(_: string)

	text: string;
}
declare var CITextImageGenerator: {

	prototype: CITextImageGenerator;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIThermal extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIThermal: {

	prototype: CIThermal;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIToneCurve extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setPoint0(_: CGPoint)

	point0: CGPoint;

	setPoint1(_: CGPoint)

	point1: CGPoint;

	setPoint2(_: CGPoint)

	point2: CGPoint;

	setPoint3(_: CGPoint)

	point3: CGPoint;

	setPoint4(_: CGPoint)

	point4: CGPoint;
}
declare var CIToneCurve: {

	prototype: CIToneCurve;

	customAttributes?(): NSDictionary<string, any>;
};

interface CITransitionFilter extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setTargetImage(_: CIImage)

	targetImage: CIImage;

	setTime(_: number)

	time: number;
}
declare var CITransitionFilter: {

	prototype: CITransitionFilter;

	customAttributes?(): NSDictionary<string, any>;
};

interface CITriangleKaleidoscope extends CIFilterProtocol {

	setDecay(_: number)

	decay: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setPoint(_: CGPoint)

	point: CGPoint;

	setRotation(_: number)

	rotation: number;

	setSize(_: number)

	size: number;
}
declare var CITriangleKaleidoscope: {

	prototype: CITriangleKaleidoscope;

	customAttributes?(): NSDictionary<string, any>;
};

interface CITriangleTile extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CITriangleTile: {

	prototype: CITriangleTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CITwelvefoldReflectedTile extends CIFilterProtocol {

	setAngle(_: number)

	angle: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setWidth(_: number)

	width: number;
}
declare var CITwelvefoldReflectedTile: {

	prototype: CITwelvefoldReflectedTile;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIUnsharpMask extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setIntensity(_: number)

	intensity: number;

	setRadius(_: number)

	radius: number;
}
declare var CIUnsharpMask: {

	prototype: CIUnsharpMask;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIVector extends NSObject implements NSCopying, NSSecureCoding {

	static vectorWithCGAffineTransform(_: CGAffineTransform): CIVector;

	static vectorWithCGPoint(_: CGPoint): CIVector;

	static vectorWithCGRect(_: CGRect): CIVector;

	static vectorWithString(_: string): CIVector;

	static vectorWithValuesCount(_: number, count: number): CIVector;

	static vectorWithX(_: number): CIVector;

	static vectorWithXY(_: number, Y: number): CIVector;

	static vectorWithXYZ(_: number, Y: number, Z: number): CIVector;

	static vectorWithXYZW(_: number, Y: number, Z: number, W: number): CIVector;

	readonly CGAffineTransformValue: CGAffineTransform;

	readonly CGPointValue: CGPoint;

	readonly CGRectValue: CGRect;

	readonly W: number;

	readonly X: number;

	readonly Y: number;

	readonly Z: number;

	readonly count: number;

	readonly stringRepresentation: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(CGAffineTransform: CGAffineTransform);

	static create(CGPoint: CGPoint);

	static create(CGRect: CGRect);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(string: string);

	static create(values: number, count: number);

	static create(x: number);

	static create(x: number, y: number);

	static create(x: number, y: number, z: number);

	static create(x: number, y: number, z: number, w: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	valueAtIndex(_: number): number;
}

interface CIVibrance extends CIFilterProtocol {

	setAmount(_: number)

	amount: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIVibrance: {

	prototype: CIVibrance;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIVignette extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setIntensity(_: number)

	intensity: number;

	setRadius(_: number)

	radius: number;
}
declare var CIVignette: {

	prototype: CIVignette;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIVignetteEffect extends CIFilterProtocol {

	setCenter(_: CGPoint)

	center: CGPoint;

	setFalloff(_: number)

	falloff: number;

	setInputImage(_: CIImage)

	inputImage: CIImage;

	setIntensity(_: number)

	intensity: number;

	setRadius(_: number)

	radius: number;
}
declare var CIVignetteEffect: {

	prototype: CIVignetteEffect;

	customAttributes?(): NSDictionary<string, any>;
};

declare class CIWarpKernel extends CIKernel {

	static kernelWithFunctionNameFromMetalLibraryDataError(fromMetalLibraryData: string, error: NSData): CIWarpKernel; // inherited from CIKernel

	static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(fromMetalLibraryData: string, outputPixelFormat: NSData, error: number): CIWarpKernel; // inherited from CIKernel

	applyWithExtentRoiCallbackInputImageArguments(extent: CGRect, roiCallback: (p1: number, p2: CGRect) => CGRect, image: CIImage, arguments_?: NSArray<any>): CIImage;
}

interface CIWhitePointAdjust extends CIFilterProtocol {

	setColor(_: CIColor)

	color: CIColor;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIWhitePointAdjust: {

	prototype: CIWhitePointAdjust;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIXRay extends CIFilterProtocol {

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIXRay: {

	prototype: CIXRay;

	customAttributes?(): NSDictionary<string, any>;
};

interface CIZoomBlur extends CIFilterProtocol {

	setAmount(_: number)

	amount: number;

	setCenter(_: CGPoint)

	center: CGPoint;

	setInputImage(_: CIImage)

	inputImage: CIImage;
}
declare var CIZoomBlur: {

	prototype: CIZoomBlur;

	customAttributes?(): NSDictionary<string, any>;
};

declare var kCIActiveKeys: string;

declare var kCIApplyOptionColorSpace: string;

declare var kCIApplyOptionDefinition: string;

declare var kCIApplyOptionExtent: string;

declare var kCIApplyOptionUserInfo: string;

declare var kCIAttributeClass: string;

declare var kCIAttributeDefault: string;

declare var kCIAttributeDescription: string;

declare var kCIAttributeDisplayName: string;

declare var kCIAttributeFilterAvailable_Mac: string;

declare var kCIAttributeFilterAvailable_iOS: string;

declare var kCIAttributeFilterCategories: string;

declare var kCIAttributeFilterDisplayName: string;

declare var kCIAttributeFilterName: string;

declare var kCIAttributeIdentity: string;

declare var kCIAttributeMax: string;

declare var kCIAttributeMin: string;

declare var kCIAttributeName: string;

declare var kCIAttributeReferenceDocumentation: string;

declare var kCIAttributeSliderMax: string;

declare var kCIAttributeSliderMin: string;

declare var kCIAttributeType: string;

declare var kCIAttributeTypeAngle: string;

declare var kCIAttributeTypeBoolean: string;

declare var kCIAttributeTypeColor: string;

declare var kCIAttributeTypeCount: string;

declare var kCIAttributeTypeDistance: string;

declare var kCIAttributeTypeGradient: string;

declare var kCIAttributeTypeImage: string;

declare var kCIAttributeTypeInteger: string;

declare var kCIAttributeTypeOffset: string;

declare var kCIAttributeTypeOpaqueColor: string;

declare var kCIAttributeTypePosition: string;

declare var kCIAttributeTypePosition3: string;

declare var kCIAttributeTypeRectangle: string;

declare var kCIAttributeTypeScalar: string;

declare var kCIAttributeTypeTime: string;

declare var kCIAttributeTypeTransform: string;

declare var kCICategoryBlur: string;

declare var kCICategoryBuiltIn: string;

declare var kCICategoryColorAdjustment: string;

declare var kCICategoryColorEffect: string;

declare var kCICategoryCompositeOperation: string;

declare var kCICategoryDistortionEffect: string;

declare var kCICategoryFilterGenerator: string;

declare var kCICategoryGenerator: string;

declare var kCICategoryGeometryAdjustment: string;

declare var kCICategoryGradient: string;

declare var kCICategoryHalftoneEffect: string;

declare var kCICategoryHighDynamicRange: string;

declare var kCICategoryInterlaced: string;

declare var kCICategoryNonSquarePixels: string;

declare var kCICategoryReduction: string;

declare var kCICategorySharpen: string;

declare var kCICategoryStillImage: string;

declare var kCICategoryStylize: string;

declare var kCICategoryTileEffect: string;

declare var kCICategoryTransition: string;

declare var kCICategoryVideo: string;

declare var kCIContextAllowLowPower: string;

declare var kCIContextCacheIntermediates: string;

declare var kCIContextHighQualityDownsample: string;

declare var kCIContextOutputColorSpace: string;

declare var kCIContextOutputPremultiplied: string;

declare var kCIContextPriorityRequestLow: string;

declare var kCIContextUseSoftwareRenderer: string;

declare var kCIContextWorkingColorSpace: string;

declare var kCIContextWorkingFormat: string;

declare var kCIFilterGeneratorExportedKey: string;

declare var kCIFilterGeneratorExportedKeyName: string;

declare var kCIFilterGeneratorExportedKeyTargetObject: string;

declare var kCIFormatA16: number;

declare var kCIFormatA8: number;

declare var kCIFormatABGR8: number;

declare var kCIFormatARGB8: number;

declare var kCIFormatAf: number;

declare var kCIFormatAh: number;

declare var kCIFormatBGRA8: number;

declare var kCIFormatL16: number;

declare var kCIFormatL8: number;

declare var kCIFormatLA16: number;

declare var kCIFormatLA8: number;

declare var kCIFormatLAf: number;

declare var kCIFormatLAh: number;

declare var kCIFormatLf: number;

declare var kCIFormatLh: number;

declare var kCIFormatR16: number;

declare var kCIFormatR8: number;

declare var kCIFormatRG16: number;

declare var kCIFormatRG8: number;

declare var kCIFormatRGBA16: number;

declare var kCIFormatRGBA8: number;

declare var kCIFormatRGBAf: number;

declare var kCIFormatRGBAh: number;

declare var kCIFormatRGf: number;

declare var kCIFormatRGh: number;

declare var kCIFormatRf: number;

declare var kCIFormatRh: number;

declare var kCIImageApplyOrientationProperty: string;

declare var kCIImageAutoAdjustCrop: string;

declare var kCIImageAutoAdjustEnhance: string;

declare var kCIImageAutoAdjustFeatures: string;

declare var kCIImageAutoAdjustLevel: string;

declare var kCIImageAutoAdjustRedEye: string;

declare var kCIImageAuxiliaryDepth: string;

declare var kCIImageAuxiliaryDisparity: string;

declare var kCIImageAuxiliaryPortraitEffectsMatte: string;

declare var kCIImageAuxiliarySemanticSegmentationHairMatte: string;

declare var kCIImageAuxiliarySemanticSegmentationSkinMatte: string;

declare var kCIImageAuxiliarySemanticSegmentationTeethMatte: string;

declare var kCIImageColorSpace: string;

declare var kCIImageNearestSampling: string;

declare var kCIImageProperties: string;

declare var kCIImageProviderTileSize: string;

declare var kCIImageProviderUserInfo: string;

declare var kCIImageRepresentationAVDepthData: string;

declare var kCIImageRepresentationAVPortraitEffectsMatte: string;

declare var kCIImageRepresentationAVSemanticSegmentationMattes: string;

declare var kCIImageRepresentationDepthImage: string;

declare var kCIImageRepresentationDisparityImage: string;

declare var kCIImageRepresentationPortraitEffectsMatteImage: string;

declare var kCIImageRepresentationSemanticSegmentationHairMatteImage: string;

declare var kCIImageRepresentationSemanticSegmentationSkinMatteImage: string;

declare var kCIImageRepresentationSemanticSegmentationTeethMatteImage: string;

declare var kCIInputAllowDraftModeKey: string;

declare var kCIInputAmountKey: string;

declare var kCIInputAngleKey: string;

declare var kCIInputAspectRatioKey: string;

declare var kCIInputBackgroundImageKey: string;

declare var kCIInputBaselineExposureKey: string;

declare var kCIInputBiasKey: string;

declare var kCIInputBoostKey: string;

declare var kCIInputBoostShadowAmountKey: string;

declare var kCIInputBrightnessKey: string;

declare var kCIInputCenterKey: string;

declare var kCIInputColorKey: string;

declare var kCIInputColorNoiseReductionAmountKey: string;

declare var kCIInputContrastKey: string;

declare var kCIInputDecoderVersionKey: string;

declare var kCIInputDepthImageKey: string;

declare var kCIInputDisableGamutMapKey: string;

declare var kCIInputDisparityImageKey: string;

declare var kCIInputEVKey: string;

declare var kCIInputEnableChromaticNoiseTrackingKey: string;

declare var kCIInputEnableEDRModeKey: string;

declare var kCIInputEnableSharpeningKey: string;

declare var kCIInputEnableVendorLensCorrectionKey: string;

declare var kCIInputExtentKey: string;

declare var kCIInputGradientImageKey: string;

declare var kCIInputIgnoreImageOrientationKey: string;

declare var kCIInputImageKey: string;

declare var kCIInputImageOrientationKey: string;

declare var kCIInputIntensityKey: string;

declare var kCIInputLinearSpaceFilter: string;

declare var kCIInputLuminanceNoiseReductionAmountKey: string;

declare var kCIInputMaskImageKey: string;

declare var kCIInputMatteImageKey: string;

declare var kCIInputMoireAmountKey: string;

declare var kCIInputNeutralChromaticityXKey: string;

declare var kCIInputNeutralChromaticityYKey: string;

declare var kCIInputNeutralLocationKey: string;

declare var kCIInputNeutralTemperatureKey: string;

declare var kCIInputNeutralTintKey: string;

declare var kCIInputNoiseReductionAmountKey: string;

declare var kCIInputNoiseReductionContrastAmountKey: string;

declare var kCIInputNoiseReductionDetailAmountKey: string;

declare var kCIInputNoiseReductionSharpnessAmountKey: string;

declare var kCIInputRadiusKey: string;

declare var kCIInputRefractionKey: string;

declare var kCIInputSaturationKey: string;

declare var kCIInputScaleFactorKey: string;

declare var kCIInputScaleKey: string;

declare var kCIInputShadingImageKey: string;

declare var kCIInputSharpnessKey: string;

declare var kCIInputTargetImageKey: string;

declare var kCIInputTimeKey: string;

declare var kCIInputTransformKey: string;

declare var kCIInputVersionKey: string;

declare var kCIInputWeightsKey: string;

declare var kCIInputWidthKey: string;

declare var kCIOutputImageKey: string;

declare var kCIOutputNativeSizeKey: string;

declare var kCISamplerAffineMatrix: string;

declare var kCISamplerColorSpace: string;

declare var kCISamplerFilterLinear: string;

declare var kCISamplerFilterMode: string;

declare var kCISamplerFilterNearest: string;

declare var kCISamplerWrapBlack: string;

declare var kCISamplerWrapClamp: string;

declare var kCISamplerWrapMode: string;

declare var kCISupportedDecoderVersionsKey: string;

declare var kCIUIParameterSet: string;

declare var kCIUISetAdvanced: string;

declare var kCIUISetBasic: string;

declare var kCIUISetDevelopment: string;

declare var kCIUISetIntermediate: string;
