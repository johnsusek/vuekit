globalThis.CIDataMatrixCodeECCVersion = globalThis.CIDataMatrixCodeECCVersion || {};

globalThis.CIDataMatrixCodeECCVersion = {
    Version000: 0,
    Version050: 50,
    Version080: 80,
    Version100: 100,
    Version140: 140,
    Version200: 200,
    '0': 'Version000',
    '50': 'Version050',
    '80': 'Version080',
    '100': 'Version100',
    '140': 'Version140',
    '200': 'Version200'
}

globalThis.CIQRCodeErrorCorrectionLevel = globalThis.CIQRCodeErrorCorrectionLevel || {};

globalThis.CIQRCodeErrorCorrectionLevel = {
    L: 76,
    M: 77,
    Q: 81,
    H: 72,
    '76': 'L',
    '77': 'M',
    '81': 'Q',
    '72': 'H'
}

globalThis.CIRenderDestinationAlphaMode = globalThis.CIRenderDestinationAlphaMode || {};

globalThis.CIRenderDestinationAlphaMode = {
    None: 0,
    Premultiplied: 1,
    Unpremultiplied: 2,
    '0': 'None',
    '1': 'Premultiplied',
    '2': 'Unpremultiplied'
}

interface CIAccordionFoldTransition extends CITransitionFilter {
  bottomHeight: number;
  setBottomHeight(_: number)
  foldShadowAmount: number;
  setFoldShadowAmount(_: number)
  numberOfFolds: number;
  setNumberOfFolds(_: number)
}

declare var CIAccordionFoldTransition: {
  prototype: CIAccordionFoldTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIAffineClamp extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  transform: CGAffineTransform;
  setTransform(_: CGAffineTransform)
}

declare var CIAffineClamp: {
  prototype: CIAffineClamp;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIAffineTile extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  transform: CGAffineTransform;
  setTransform(_: CGAffineTransform)
}

declare var CIAffineTile: {
  prototype: CIAffineTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIAttributedTextImageGenerator extends CIFilterProtocol {
  scaleFactor: number;
  setScaleFactor(_: number)
  text: NSAttributedString;
  setText(_: NSAttributedString)
}

declare var CIAttributedTextImageGenerator: {
  prototype: CIAttributedTextImageGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIAztecCodeDescriptor extends CIBarcodeDescriptor {
  static descriptorWithPayloadIsCompactLayerCountDataCodewordCount(payload: Data, isCompact: boolean, layerCount: number, dataCodewordCount: number): CIAztecCodeDescriptor;
  readonly dataCodewordCount: number;
  readonly errorCorrectedPayload: Data;
  readonly isCompact: boolean;
  readonly layerCount: number;
  static createWithPayloadIsCompactLayerCountDataCodewordCount(payload: Data, isCompact: boolean, layerCount: number, dataCodewordCount: number): this;
}

interface CIAztecCodeGenerator extends CIFilterProtocol {
  compactStyle: number;
  setCompactStyle(_: number)
  correctionLevel: number;
  setCorrectionLevel(_: number)
  layers: number;
  setLayers(_: number)
  message: Data;
  setMessage(_: Data)
}

declare var CIAztecCodeGenerator: {
  prototype: CIAztecCodeGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIBarcodeDescriptor extends NSObject implements NSCopying, NSSecureCoding {
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

interface CIBarcodeGenerator extends CIFilterProtocol {
  barcodeDescriptor: CIBarcodeDescriptor;
  setBarcodeDescriptor(_: CIBarcodeDescriptor)
}

declare var CIBarcodeGenerator: {
  prototype: CIBarcodeGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIBarsSwipeTransition extends CITransitionFilter {
  angle: number;
  setAngle(_: number)
  barOffset: number;
  setBarOffset(_: number)
  width: number;
  setWidth(_: number)
}

declare var CIBarsSwipeTransition: {
  prototype: CIBarsSwipeTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIBicubicScaleTransform extends CIFilterProtocol {
  aspectRatio: number;
  setAspectRatio(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  parameterB: number;
  setParameterB(_: number)
  parameterC: number;
  setParameterC(_: number)
  scale: number;
  setScale(_: number)
}

declare var CIBicubicScaleTransform: {
  prototype: CIBicubicScaleTransform;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIBlendKernel extends CIColorKernel {
  static kernelWithFunctionNameFromMetalLibraryDataError(fromMetalLibraryData: string, error: Data): CIBlendKernel; // inherited from CIKernel
  static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(fromMetalLibraryData: string, outputPixelFormat: Data, error: number): CIBlendKernel; // inherited from CIKernel
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
  backgroundImage: CIImage;
  setBackgroundImage(_: CIImage)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  maskImage: CIImage;
  setMaskImage(_: CIImage)
}

declare var CIBlendWithMask: {
  prototype: CIBlendWithMask;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIBloom extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  intensity: number;
  setIntensity(_: number)
  radius: number;
  setRadius(_: number)
}

declare var CIBloom: {
  prototype: CIBloom;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIBokehBlur extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
  ringAmount: number;
  setRingAmount(_: number)
  ringSize: number;
  setRingSize(_: number)
  softness: number;
  setSoftness(_: number)
}

declare var CIBokehBlur: {
  prototype: CIBokehBlur;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIBoxBlur extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIBoxBlur: {
  prototype: CIBoxBlur;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CICMYKHalftone extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  grayComponentReplacement: number;
  setGrayComponentReplacement(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  sharpness: number;
  setSharpness(_: number)
  underColorRemoval: number;
  setUnderColorRemoval(_: number)
  width: number;
  setWidth(_: number)
}

declare var CICMYKHalftone: {
  prototype: CICMYKHalftone;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CICheckerboardGenerator extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  color0: CIColor;
  setColor0(_: CIColor)
  color1: CIColor;
  setColor1(_: CIColor)
  sharpness: number;
  setSharpness(_: number)
  width: number;
  setWidth(_: number)
}

declare var CICheckerboardGenerator: {
  prototype: CICheckerboardGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CICircularScreen extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  sharpness: number;
  setSharpness(_: number)
  width: number;
  setWidth(_: number)
}

declare var CICircularScreen: {
  prototype: CICircularScreen;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CICode128BarcodeGenerator extends CIFilterProtocol {
  barcodeHeight: number;
  setBarcodeHeight(_: number)
  message: Data;
  setMessage(_: Data)
  quietSpace: number;
  setQuietSpace(_: number)
}

declare var CICode128BarcodeGenerator: {
  prototype: CICode128BarcodeGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIColor extends NSObject implements NSCopying, NSSecureCoding {
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
  encodeWithCoder(with_: NSCoder): void;
  static createWithCGColor(CGColor: any): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithColor(color: NSColor): this;
  static createWithRedGreenBlue(red: number, green: number, blue: number): this;
  static createWithRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): this;
  static createWithRedGreenBlueAlphaColorSpace(red: number, green: number, blue: number, alpha: number, colorSpace: any): this;
  static createWithRedGreenBlueColorSpace(red: number, green: number, blue: number, colorSpace: any): this;
}

interface CIColorClamp extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  maxComponents: CIVector;
  setMaxComponents(_: CIVector)
  minComponents: CIVector;
  setMinComponents(_: CIVector)
}

declare var CIColorClamp: {
  prototype: CIColorClamp;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorControls extends CIFilterProtocol {
  brightness: number;
  setBrightness(_: number)
  contrast: number;
  setContrast(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  saturation: number;
  setSaturation(_: number)
}

declare var CIColorControls: {
  prototype: CIColorControls;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorCrossPolynomial extends CIFilterProtocol {
  blueCoefficients: CIVector;
  setBlueCoefficients(_: CIVector)
  greenCoefficients: CIVector;
  setGreenCoefficients(_: CIVector)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  redCoefficients: CIVector;
  setRedCoefficients(_: CIVector)
}

declare var CIColorCrossPolynomial: {
  prototype: CIColorCrossPolynomial;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorCube extends CIFilterProtocol {
  cubeData: Data;
  setCubeData(_: Data)
  cubeDimension: number;
  setCubeDimension(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIColorCube: {
  prototype: CIColorCube;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorCubeWithColorSpace extends CIFilterProtocol {
  colorSpace: any;
  setColorSpace(_: any)
  cubeData: Data;
  setCubeData(_: Data)
  cubeDimension: number;
  setCubeDimension(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIColorCubeWithColorSpace: {
  prototype: CIColorCubeWithColorSpace;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorCubesMixedWithMask extends CIFilterProtocol {
  colorSpace: any;
  setColorSpace(_: any)
  cube0Data: Data;
  setCube0Data(_: Data)
  cube1Data: Data;
  setCube1Data(_: Data)
  cubeDimension: number;
  setCubeDimension(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  maskImage: CIImage;
  setMaskImage(_: CIImage)
}

declare var CIColorCubesMixedWithMask: {
  prototype: CIColorCubesMixedWithMask;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorCurves extends CIFilterProtocol {
  colorSpace: any;
  setColorSpace(_: any)
  curvesData: Data;
  setCurvesData(_: Data)
  curvesDomain: CIVector;
  setCurvesDomain(_: CIVector)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIColorCurves: {
  prototype: CIColorCurves;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorInvert extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIColorInvert: {
  prototype: CIColorInvert;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIColorKernel extends CIKernel {
  static kernelWithFunctionNameFromMetalLibraryDataError(fromMetalLibraryData: string, error: Data): CIColorKernel; // inherited from CIKernel
  static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(fromMetalLibraryData: string, outputPixelFormat: Data, error: number): CIColorKernel; // inherited from CIKernel
  applyWithExtentArguments(extent: NSRect, arguments_?: NSArray<any>): CIImage;
}

interface CIColorMap extends CIFilterProtocol {
  gradientImage: CIImage;
  setGradientImage(_: CIImage)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIColorMap: {
  prototype: CIColorMap;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorMatrix extends CIFilterProtocol {
  AVector: CIVector;
  setAVector(_: CIVector)
  biasVector: CIVector;
  setBiasVector(_: CIVector)
  BVector: CIVector;
  setBVector(_: CIVector)
  GVector: CIVector;
  setGVector(_: CIVector)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  RVector: CIVector;
  setRVector(_: CIVector)
}

declare var CIColorMatrix: {
  prototype: CIColorMatrix;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorMonochrome extends CIFilterProtocol {
  color: CIColor;
  setColor(_: CIColor)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  intensity: number;
  setIntensity(_: number)
}

declare var CIColorMonochrome: {
  prototype: CIColorMonochrome;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorPolynomial extends CIFilterProtocol {
  alphaCoefficients: CIVector;
  setAlphaCoefficients(_: CIVector)
  blueCoefficients: CIVector;
  setBlueCoefficients(_: CIVector)
  greenCoefficients: CIVector;
  setGreenCoefficients(_: CIVector)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  redCoefficients: CIVector;
  setRedCoefficients(_: CIVector)
}

declare var CIColorPolynomial: {
  prototype: CIColorPolynomial;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIColorPosterize extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  levels: number;
  setLevels(_: number)
}

declare var CIColorPosterize: {
  prototype: CIColorPosterize;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIComicEffect extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIComicEffect: {
  prototype: CIComicEffect;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CICompositeOperation extends CIFilterProtocol {
  backgroundImage: CIImage;
  setBackgroundImage(_: CIImage)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CICompositeOperation: {
  prototype: CICompositeOperation;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIContext extends NSObject {
  static offlineGPUCount(): number;
  readonly workingColorSpace: any;
  readonly workingFormat: number;
  HEIFRepresentationOfImageFormatColorSpaceOptions(of: CIImage, format: number, colorSpace: any, options: NSDictionary<string, any>): Data;
  JPEGRepresentationOfImageColorSpaceOptions(of: CIImage, colorSpace: any, options: NSDictionary<string, any>): Data;
  PNGRepresentationOfImageFormatColorSpaceOptions(of: CIImage, format: number, colorSpace: any, options: NSDictionary<string, any>): Data;
  TIFFRepresentationOfImageFormatColorSpaceOptions(of: CIImage, format: number, colorSpace: any, options: NSDictionary<string, any>): Data;
  clearCaches(): void;
  createCGImageFromRect(_: CIImage, from: NSRect): any;
  createCGImageFromRectFormatColorSpace(_: CIImage, from: NSRect, format: number, colorSpace?: any): any;
  createCGImageFromRectFormatColorSpaceDeferred(_: CIImage, from: NSRect, format: number, colorSpace?: any, deferred: boolean): any;
  depthBlurEffectFilterForImageDisparityImagePortraitEffectsMatteHairSemanticSegmentationOrientationOptions(for_: CIImage, disparityImage: CIImage, portraitEffectsMatte?: CIImage, hairSemanticSegmentation?: CIImage, orientation: CGImagePropertyOrientation, options?: NSDictionary<any, any>): CIFilter;
  depthBlurEffectFilterForImageDisparityImagePortraitEffectsMatteOrientationOptions(for_: CIImage, disparityImage: CIImage, portraitEffectsMatte?: CIImage, orientation: CGImagePropertyOrientation, options?: NSDictionary<any, any>): CIFilter;
  depthBlurEffectFilterForImageDataOptions(forImageData: Data, options?: NSDictionary<any, any>): CIFilter;
  depthBlurEffectFilterForImageURLOptions(forImageURL: NSURL, options?: NSDictionary<any, any>): CIFilter;
  drawImageInRectFromRect(_: CIImage, in_: NSRect, from: NSRect): void;
  static createWithOptions(options?: NSDictionary<string, any>): this;
  prepareRenderFromRectToDestinationAtPointError(fromRect: CIImage, toDestination: NSRect, atPoint: CIRenderDestination, error: NSPoint): boolean;
  reclaimResources(): void;
  renderToBitmapRowBytesBoundsFormatColorSpace(_: CIImage, toBitmap: any, rowBytes: number, bounds: NSRect, format: number, colorSpace?: any): void;
  renderToCVPixelBuffer(_: CIImage, to: any): void;
  renderToCVPixelBufferBoundsColorSpace(_: CIImage, to: any, bounds: NSRect, colorSpace?: any): void;
  renderToIOSurfaceBoundsColorSpace(_: CIImage, to: any, bounds: NSRect, colorSpace?: any): void;
  renderToMTLTextureCommandBufferBoundsColorSpace(_: CIImage, to: MTLTexture, commandBuffer?: MTLCommandBuffer, bounds: NSRect, colorSpace: any): void;
  startTaskToClearError(error: CIRenderDestination): CIRenderTask;
  startTaskToRenderFromRectToDestinationAtPointError(fromRect: CIImage, toDestination: NSRect, atPoint: CIRenderDestination, error: NSPoint): CIRenderTask;
  startTaskToRenderToDestinationError(toDestination: CIImage, error: CIRenderDestination): CIRenderTask;
  writeHEIFRepresentationOfImageToURLFormatColorSpaceOptionsError(toURL: CIImage, format: NSURL, colorSpace: number, options: any, error: NSDictionary<string, any>): boolean;
  writeJPEGRepresentationOfImageToURLColorSpaceOptionsError(toURL: CIImage, colorSpace: NSURL, options: any, error: NSDictionary<string, any>): boolean;
  writePNGRepresentationOfImageToURLFormatColorSpaceOptionsError(toURL: CIImage, format: NSURL, colorSpace: number, options: any, error: NSDictionary<string, any>): boolean;
  writeTIFFRepresentationOfImageToURLFormatColorSpaceOptionsError(toURL: CIImage, format: NSURL, colorSpace: number, options: any, error: NSDictionary<string, any>): boolean;
}

interface CIConvolution extends CIFilterProtocol {
  bias: number;
  setBias(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  weights: CIVector;
  setWeights(_: CIVector)
}

declare var CIConvolution: {
  prototype: CIConvolution;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CICopyMachineTransition extends CITransitionFilter {
  angle: number;
  setAngle(_: number)
  color: CIColor;
  setColor(_: CIColor)
  extent: NSRect;
  setExtent(_: NSRect)
  opacity: number;
  setOpacity(_: number)
  width: number;
  setWidth(_: number)
}

declare var CICopyMachineTransition: {
  prototype: CICopyMachineTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CICoreMLModel extends CIFilterProtocol {
  headIndex: number;
  setHeadIndex(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  model: MLModel;
  setModel(_: MLModel)
  softmaxNormalization: boolean;
  setSoftmaxNormalization(_: boolean)
}

declare var CICoreMLModel: {
  prototype: CICoreMLModel;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CICrystallize extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CICrystallize: {
  prototype: CICrystallize;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIDataMatrixCodeDescriptor extends CIBarcodeDescriptor {
  static descriptorWithPayloadRowCountColumnCountEccVersion(payload: Data, rowCount: number, columnCount: number, eccVersion: CIDataMatrixCodeECCVersion): CIDataMatrixCodeDescriptor;
  readonly columnCount: number;
  readonly eccVersion: CIDataMatrixCodeECCVersion;
  readonly errorCorrectedPayload: Data;
  readonly rowCount: number;
  static createWithPayloadRowCountColumnCountEccVersion(payload: Data, rowCount: number, columnCount: number, eccVersion: CIDataMatrixCodeECCVersion): this;
}

interface CIDepthOfField extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  point0: NSPoint;
  setPoint0(_: NSPoint)
  point1: NSPoint;
  setPoint1(_: NSPoint)
  radius: number;
  setRadius(_: number)
  saturation: number;
  setSaturation(_: number)
  unsharpMaskIntensity: number;
  setUnsharpMaskIntensity(_: number)
  unsharpMaskRadius: number;
  setUnsharpMaskRadius(_: number)
}

declare var CIDepthOfField: {
  prototype: CIDepthOfField;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIDepthToDisparity extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIDepthToDisparity: {
  prototype: CIDepthToDisparity;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIDetector extends NSObject {
  featuresInImage(in_: CIImage): NSArray<CIFeature>;
  featuresInImageOptions(in_: CIImage, options?: NSDictionary<string, any>): NSArray<CIFeature>;
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
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIDiscBlur: {
  prototype: CIDiscBlur;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIDisintegrateWithMaskTransition extends CITransitionFilter {
  maskImage: CIImage;
  setMaskImage(_: CIImage)
  shadowDensity: number;
  setShadowDensity(_: number)
  shadowOffset: NSPoint;
  setShadowOffset(_: NSPoint)
  shadowRadius: number;
  setShadowRadius(_: number)
}

declare var CIDisintegrateWithMaskTransition: {
  prototype: CIDisintegrateWithMaskTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIDisparityToDepth extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIDisparityToDepth: {
  prototype: CIDisparityToDepth;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIDissolveTransition extends CITransitionFilter {
}

declare var CIDissolveTransition: {
  prototype: CIDissolveTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIDither extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  intensity: number;
  setIntensity(_: number)
}

declare var CIDither: {
  prototype: CIDither;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIDocumentEnhancer extends CIFilterProtocol {
  amount: number;
  setAmount(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIDocumentEnhancer: {
  prototype: CIDocumentEnhancer;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIDotScreen extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  sharpness: number;
  setSharpness(_: number)
  width: number;
  setWidth(_: number)
}

declare var CIDotScreen: {
  prototype: CIDotScreen;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIEdgePreserveUpsample extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  lumaSigma: number;
  setLumaSigma(_: number)
  smallImage: CIImage;
  setSmallImage(_: CIImage)
  spatialSigma: number;
  setSpatialSigma(_: number)
}

declare var CIEdgePreserveUpsample: {
  prototype: CIEdgePreserveUpsample;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIEdgeWork extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIEdgeWork: {
  prototype: CIEdgeWork;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIEdges extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  intensity: number;
  setIntensity(_: number)
}

declare var CIEdges: {
  prototype: CIEdges;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIEightfoldReflectedTile extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CIEightfoldReflectedTile: {
  prototype: CIEightfoldReflectedTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIExposureAdjust extends CIFilterProtocol {
  EV: number;
  setEV(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIExposureAdjust: {
  prototype: CIExposureAdjust;
   static customAttributes?(): NSDictionary<string, any>;
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
  readonly leftEyePosition: NSPoint;
  readonly mouthPosition: NSPoint;
  readonly rightEyeClosed: boolean;
  readonly rightEyePosition: NSPoint;
  readonly trackingFrameCount: number;
  readonly trackingID: number;
}

interface CIFalseColor extends CIFilterProtocol {
  color0: CIColor;
  setColor0(_: CIColor)
  color1: CIColor;
  setColor1(_: CIColor)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIFalseColor: {
  prototype: CIFalseColor;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIFeature extends NSObject {
  readonly bounds: NSRect;
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
  static filterArrayFromSerializedXMPInputImageExtentError(fromSerializedXMP: Data, inputImageExtent: NSRect): NSArray<CIFilter>;
  static filterNamesInCategories(inCategories?: NSArray<string>): NSArray<string>;
  static filterNamesInCategory(inCategory?: string): NSArray<string>;
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
  static localizedDescriptionForFilterName(forFilterName: string): string;
  static localizedNameForCategory(forCategory: string): string;
  static localizedNameForFilterName(forFilterName: string): string;
  static localizedReferenceDocumentationForFilterName(forFilterName: string): NSURL;
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
  static serializedXMPFromFiltersInputImageExtent(from: NSArray<CIFilter>, inputImageExtent: NSRect): Data;
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
  isEnabled: boolean;
  setEnabled(_: boolean)
  readonly inputKeys: NSArray<string>;
  name: string;
  setName(_: string)
  readonly outputImage: CIImage;
  readonly outputKeys: NSArray<string>;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  applyArgumentsOptions(_: CIKernel, arguments_?: NSArray<any>, options?: NSDictionary<string, any>): CIImage;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  setDefaults(): void;
  setName(_: string): void;
  viewForUIConfigurationExcludedKeys(_: NSDictionary<any, any>, excludedKeys: NSArray<any>): IKFilterUIView;
}

interface CIFilterConstructor {
  filterWithName(withName: string): CIFilter;
}

declare var CIFilterConstructor: {
  prototype: CIFilterConstructor;
};

declare class CIFilterGenerator extends NSObject implements CIFilterConstructor, NSCopying, NSSecureCoding {
  classAttributes: NSDictionary<any, any>;
  setClassAttributes(_: NSDictionary<any, any>)
  readonly exportedKeys: NSDictionary<any, any>;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  connectObjectWithKeyToObjectWithKey(_: any, withKey?: string, to: any, withKey: string): void;
  disconnectObjectWithKeyToObjectWithKey(_: any, withKey: string, to: any, withKey: string): void;
  encodeWithCoder(with_: NSCoder): void;
  exportKeyFromObjectWithName(_: string, from: any, withName?: string): void;
  filter(): CIFilter;
  filterWithName(withName: string): CIFilter;
  static createWithCoder(coder: NSCoder): this;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  registerFilterName(_: string): void;
  removeExportedKey(_: string): void;
  setAttributesForExportedKey(_: NSDictionary<any, any>, forExportedKey: string): void;
  writeToURLAtomically(to: NSURL, atomically: boolean): boolean;
}

interface CIFilterProtocol {
  outputImage: CIImage;
}

declare var CIFilterProtocol: {
  prototype: CIFilterProtocol;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIFilterShape extends NSObject implements NSCopying {
  readonly extent: NSRect;
  static createWithRect(rect: NSRect): this;
  insetByXY(x: number, y: number): CIFilterShape;
  intersectWith(with_: CIFilterShape): CIFilterShape;
  intersectWithRect(with_: NSRect): CIFilterShape;
  transformByInterior(by: CGAffineTransform, interior: boolean): CIFilterShape;
  unionWith(with_: CIFilterShape): CIFilterShape;
  unionWithRect(with_: NSRect): CIFilterShape;
}

interface CIFlashTransition extends CITransitionFilter {
  center: NSPoint;
  setCenter(_: NSPoint)
  color: CIColor;
  setColor(_: CIColor)
  extent: NSRect;
  setExtent(_: NSRect)
  fadeThreshold: number;
  setFadeThreshold(_: number)
  maxStriationRadius: number;
  setMaxStriationRadius(_: number)
  striationContrast: number;
  setStriationContrast(_: number)
  striationStrength: number;
  setStriationStrength(_: number)
}

declare var CIFlashTransition: {
  prototype: CIFlashTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIFourCoordinateGeometryFilter extends CIFilterProtocol {
  bottomLeft: NSPoint;
  setBottomLeft(_: NSPoint)
  bottomRight: NSPoint;
  setBottomRight(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  topLeft: NSPoint;
  setTopLeft(_: NSPoint)
  topRight: NSPoint;
  setTopRight(_: NSPoint)
}

declare var CIFourCoordinateGeometryFilter: {
  prototype: CIFourCoordinateGeometryFilter;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIFourfoldReflectedTile extends CIFilterProtocol {
  acuteAngle: number;
  setAcuteAngle(_: number)
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CIFourfoldReflectedTile: {
  prototype: CIFourfoldReflectedTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIFourfoldRotatedTile extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CIFourfoldRotatedTile: {
  prototype: CIFourfoldRotatedTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIFourfoldTranslatedTile extends CIFilterProtocol {
  acuteAngle: number;
  setAcuteAngle(_: number)
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CIFourfoldTranslatedTile: {
  prototype: CIFourfoldTranslatedTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIGaborGradients extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIGaborGradients: {
  prototype: CIGaborGradients;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIGammaAdjust extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIGammaAdjust: {
  prototype: CIGammaAdjust;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIGaussianBlur extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIGaussianBlur: {
  prototype: CIGaussianBlur;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIGaussianGradient extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  color0: CIColor;
  setColor0(_: CIColor)
  color1: CIColor;
  setColor1(_: CIColor)
  radius: number;
  setRadius(_: number)
}

declare var CIGaussianGradient: {
  prototype: CIGaussianGradient;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIGlideReflectedTile extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CIGlideReflectedTile: {
  prototype: CIGlideReflectedTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIGloom extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  intensity: number;
  setIntensity(_: number)
  radius: number;
  setRadius(_: number)
}

declare var CIGloom: {
  prototype: CIGloom;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIHatchedScreen extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  sharpness: number;
  setSharpness(_: number)
  width: number;
  setWidth(_: number)
}

declare var CIHatchedScreen: {
  prototype: CIHatchedScreen;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIHeightFieldFromMask extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIHeightFieldFromMask: {
  prototype: CIHeightFieldFromMask;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIHexagonalPixellate extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  scale: number;
  setScale(_: number)
}

declare var CIHexagonalPixellate: {
  prototype: CIHexagonalPixellate;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIHighlightShadowAdjust extends CIFilterProtocol {
  highlightAmount: number;
  setHighlightAmount(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
  shadowAmount: number;
  setShadowAmount(_: number)
}

declare var CIHighlightShadowAdjust: {
  prototype: CIHighlightShadowAdjust;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIHueAdjust extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIHueAdjust: {
  prototype: CIHueAdjust;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIHueSaturationValueGradient extends CIFilterProtocol {
  colorSpace: any;
  setColorSpace(_: any)
  dither: number;
  setDither(_: number)
  radius: number;
  setRadius(_: number)
  softness: number;
  setSoftness(_: number)
  value: number;
  setValue(_: number)
}

declare var CIHueSaturationValueGradient: {
  prototype: CIHueSaturationValueGradient;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIImage extends NSObject implements NSCopying, NSSecureCoding {
  static emptyImage(): CIImage;
  static imageWithDepthData(_: AVDepthData): CIImage;
  static imageWithDepthDataOptions(_: AVDepthData, options?: NSDictionary<string, any>): CIImage;
  static imageWithImageProviderSizeFormatColorSpaceOptions(_: any, _: number, size: number, format: number, colorSpace?: any, options?: NSDictionary<string, any>): CIImage;
  static imageWithPortaitEffectsMatte(_: AVPortraitEffectsMatte): CIImage;
  static imageWithPortaitEffectsMatteOptions(_: AVPortraitEffectsMatte, options?: NSDictionary<string, any>): CIImage;
  static imageWithSemanticSegmentationMatte(_: AVSemanticSegmentationMatte): CIImage;
  static imageWithSemanticSegmentationMatteOptions(_: AVSemanticSegmentationMatte, options?: NSDictionary<string, any>): CIImage;
  readonly CGImage: any;
  readonly colorSpace: any;
  readonly definition: CIFilterShape;
  readonly depthData: AVDepthData;
  readonly extent: NSRect;
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
  autoAdjustmentFilters(): NSArray<CIFilter>;
  autoAdjustmentFiltersWithOptions(options?: NSDictionary<string, any>): NSArray<CIFilter>;
  drawAtPointFromRectOperationFraction(at: NSPoint, from: NSRect, operation: NSCompositingOperation, fraction: number): void;
  drawInRectFromRectOperationFraction(in_: NSRect, from: NSRect, operation: NSCompositingOperation, fraction: number): void;
  encodeWithCoder(with_: NSCoder): void;
  imageByApplyingCGOrientation(_: CGImagePropertyOrientation): CIImage;
  imageByApplyingFilter(_: string): CIImage;
  imageByApplyingFilterWithInputParameters(_: string, parameters?: NSDictionary<string, any>): CIImage;
  imageByApplyingGaussianBlurWithSigma(sigma: number): CIImage;
  imageByApplyingOrientation(forExifOrientation: number): CIImage;
  imageByApplyingTransform(by: CGAffineTransform): CIImage;
  imageByApplyingTransformHighQualityDownsample(by: CGAffineTransform, highQualityDownsample: boolean): CIImage;
  imageByClampingToExtent(): CIImage;
  imageByClampingToRect(to: NSRect): CIImage;
  imageByColorMatchingColorSpaceToWorkingSpace(from: any): CIImage;
  imageByColorMatchingWorkingSpaceToColorSpace(to: any): CIImage;
  imageByCompositingOverImage(over: CIImage): CIImage;
  imageByCroppingToRect(to: NSRect): CIImage;
  imageByInsertingIntermediate(): CIImage;
  imageByInsertingIntermediate(cache: boolean): CIImage;
  imageByPremultiplyingAlpha(): CIImage;
  imageBySamplingLinear(): CIImage;
  imageBySamplingNearest(): CIImage;
  imageBySettingAlphaOneInExtent(in_: NSRect): CIImage;
  imageBySettingProperties(_: NSDictionary<any, any>): CIImage;
  imageByUnpremultiplyingAlpha(): CIImage;
  imageTransformForCGOrientation(for_: CGImagePropertyOrientation): CGAffineTransform;
  imageTransformForOrientation(forExifOrientation: number): CGAffineTransform;
  static createWithBitmapDataBytesPerRowSizeFormatColorSpace(bitmapData: Data, bytesPerRow: number, size: NSSize, format: number, colorSpace?: any): this;
  static createWithBitmapImageRep(bitmapImageRep: NSBitmapImageRep): this;
  static createWithCGImage(CGImage: any): this;
  static createWithCGImageOptions(CGImage: any, options?: NSDictionary<string, any>): this;
  static createWithCGImageSourceIndexOptions(CGImageSource: any, index: number, options?: NSDictionary<string, any>): this;
  static createWithCVImageBuffer(CVImageBuffer: any): this;
  static createWithCVImageBufferOptions(CVImageBuffer: any, options?: NSDictionary<string, any>): this;
  static createWithCVPixelBuffer(CVPixelBuffer: any): this;
  static createWithCVPixelBufferOptions(CVPixelBuffer: any, options?: NSDictionary<string, any>): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithColor(color: CIColor): this;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  static createWithContentsOfURLOptions(contentsOfURL: NSURL, options?: NSDictionary<string, any>): this;
  static createWithData(data: Data): this;
  static createWithDataOptions(data: Data, options?: NSDictionary<string, any>): this;
  static createWithDepthData(depthData: AVDepthData): this;
  static createWithDepthDataOptions(depthData: AVDepthData, options?: NSDictionary<string, any>): this;
  static createWithIOSurface(IOSurface: any): this;
  static createWithIOSurfaceOptions(IOSurface: any, options?: NSDictionary<string, any>): this;
  static createWithImageProviderSizeFormatColorSpaceOptions(_: any, imageProvider: number, size: number, format: number, colorSpace?: any, options?: NSDictionary<string, any>): this;
  static createWithMTLTextureOptions(MTLTexture: MTLTexture, options?: NSDictionary<string, any>): this;
  static createWithPortaitEffectsMatte(portaitEffectsMatte: AVPortraitEffectsMatte): this;
  static createWithPortaitEffectsMatteOptions(portaitEffectsMatte: AVPortraitEffectsMatte, options?: NSDictionary<string, any>): this;
  static createWithSemanticSegmentationMatte(semanticSegmentationMatte: AVSemanticSegmentationMatte): this;
  static createWithSemanticSegmentationMatteOptions(semanticSegmentationMatte: AVSemanticSegmentationMatte, options?: NSDictionary<string, any>): this;
  regionOfInterestForImageInRect(for_: CIImage, in_: NSRect): NSRect;
}

declare class CIImageAccumulator extends NSObject {
  readonly extent: NSRect;
  readonly format: number;
  clear(): void;
  image(): CIImage;
  static createWithExtentFormat(extent: NSRect, format: number): this;
  static createWithExtentFormatColorSpace(extent: NSRect, format: number, colorSpace: any): this;
  setImage(_: CIImage): void;
  setImageDirtyRect(_: CIImage, dirtyRect: NSRect): void;
}

interface CIImageProcessorInput {
  baseAddress: any;
  bytesPerRow: number;
  format: number;
  metalTexture: MTLTexture;
  pixelBuffer: any;
  region: NSRect;
  surface: any;
}

declare var CIImageProcessorInput: {
  prototype: CIImageProcessorInput;
};

declare class CIImageProcessorKernel extends NSObject {
  static applyWithExtentInputsArgumentsError(inputs: NSRect, arguments_?: NSArray<CIImage>, error?: NSDictionary<string, any>): CIImage;
  static formatForInputAtIndex(at: number): number;
  static processWithInputsArgumentsOutputError(arguments_?: NSArray<CIImageProcessorInput>, output?: NSDictionary<string, any>, error: CIImageProcessorOutput): boolean;
  static roiForInputArgumentsOutputRect(forInput: number, arguments_?: NSDictionary<string, any>, outputRect: NSRect): NSRect;
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
  region: NSRect;
  surface: any;
}

declare var CIImageProcessorOutput: {
  prototype: CIImageProcessorOutput;
};

interface CIKaleidoscope extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  count: number;
  setCount(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIKaleidoscope: {
  prototype: CIKaleidoscope;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIKernel extends NSObject {
  static kernelWithFunctionNameFromMetalLibraryDataError(fromMetalLibraryData: string, error: Data): CIKernel;
  static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(fromMetalLibraryData: string, outputPixelFormat: Data, error: number): CIKernel;
  readonly name: string;
  applyWithExtentRoiCallbackArguments(extent: NSRect, roiCallback: (p1: number, p2: NSRect) => NSRect, arguments_?: NSArray<any>): CIImage;
  setROISelector(_: string): void;
}

interface CIKeystoneCorrectionCombined extends CIFourCoordinateGeometryFilter {
  focalLength: number;
  setFocalLength(_: number)
}

declare var CIKeystoneCorrectionCombined: {
  prototype: CIKeystoneCorrectionCombined;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIKeystoneCorrectionHorizontal extends CIFourCoordinateGeometryFilter {
  focalLength: number;
  setFocalLength(_: number)
}

declare var CIKeystoneCorrectionHorizontal: {
  prototype: CIKeystoneCorrectionHorizontal;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIKeystoneCorrectionVertical extends CIFourCoordinateGeometryFilter {
  focalLength: number;
  setFocalLength(_: number)
}

declare var CIKeystoneCorrectionVertical: {
  prototype: CIKeystoneCorrectionVertical;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CILabDeltaE extends CIFilterProtocol {
  image2: CIImage;
  setImage2(_: CIImage)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CILabDeltaE: {
  prototype: CILabDeltaE;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CILanczosScaleTransform extends CIFilterProtocol {
  aspectRatio: number;
  setAspectRatio(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  scale: number;
  setScale(_: number)
}

declare var CILanczosScaleTransform: {
  prototype: CILanczosScaleTransform;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CILenticularHaloGenerator extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  color: CIColor;
  setColor(_: CIColor)
  haloOverlap: number;
  setHaloOverlap(_: number)
  haloRadius: number;
  setHaloRadius(_: number)
  haloWidth: number;
  setHaloWidth(_: number)
  striationContrast: number;
  setStriationContrast(_: number)
  striationStrength: number;
  setStriationStrength(_: number)
  time: number;
  setTime(_: number)
}

declare var CILenticularHaloGenerator: {
  prototype: CILenticularHaloGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CILineOverlay extends CIFilterProtocol {
  contrast: number;
  setContrast(_: number)
  edgeIntensity: number;
  setEdgeIntensity(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  NRNoiseLevel: number;
  setNRNoiseLevel(_: number)
  NRSharpness: number;
  setNRSharpness(_: number)
  threshold: number;
  setThreshold(_: number)
}

declare var CILineOverlay: {
  prototype: CILineOverlay;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CILineScreen extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  sharpness: number;
  setSharpness(_: number)
  width: number;
  setWidth(_: number)
}

declare var CILineScreen: {
  prototype: CILineScreen;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CILinearGradient extends CIFilterProtocol {
  color0: CIColor;
  setColor0(_: CIColor)
  color1: CIColor;
  setColor1(_: CIColor)
  point0: NSPoint;
  setPoint0(_: NSPoint)
  point1: NSPoint;
  setPoint1(_: NSPoint)
}

declare var CILinearGradient: {
  prototype: CILinearGradient;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CILinearToSRGBToneCurve extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CILinearToSRGBToneCurve: {
  prototype: CILinearToSRGBToneCurve;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMaskToAlpha extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIMaskToAlpha: {
  prototype: CIMaskToAlpha;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMaskedVariableBlur extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  mask: CIImage;
  setMask(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIMaskedVariableBlur: {
  prototype: CIMaskedVariableBlur;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMaximumComponent extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIMaximumComponent: {
  prototype: CIMaximumComponent;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMedian extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIMedian: {
  prototype: CIMedian;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMeshGenerator extends CIFilterProtocol {
  color: CIColor;
  setColor(_: CIColor)
  mesh: NSArray<any>;
  setMesh(_: NSArray<any>)
  width: number;
  setWidth(_: number)
}

declare var CIMeshGenerator: {
  prototype: CIMeshGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMinimumComponent extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIMinimumComponent: {
  prototype: CIMinimumComponent;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMix extends CIFilterProtocol {
  amount: number;
  setAmount(_: number)
  backgroundImage: CIImage;
  setBackgroundImage(_: CIImage)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIMix: {
  prototype: CIMix;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIModTransition extends CITransitionFilter {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  compression: number;
  setCompression(_: number)
  radius: number;
  setRadius(_: number)
}

declare var CIModTransition: {
  prototype: CIModTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMorphologyGradient extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIMorphologyGradient: {
  prototype: CIMorphologyGradient;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMorphologyMaximum extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIMorphologyMaximum: {
  prototype: CIMorphologyMaximum;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMorphologyMinimum extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIMorphologyMinimum: {
  prototype: CIMorphologyMinimum;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMorphologyRectangleMaximum extends CIFilterProtocol {
  height: number;
  setHeight(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CIMorphologyRectangleMaximum: {
  prototype: CIMorphologyRectangleMaximum;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMorphologyRectangleMinimum extends CIFilterProtocol {
  height: number;
  setHeight(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CIMorphologyRectangleMinimum: {
  prototype: CIMorphologyRectangleMinimum;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIMotionBlur extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIMotionBlur: {
  prototype: CIMotionBlur;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CINoiseReduction extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  noiseLevel: number;
  setNoiseLevel(_: number)
  sharpness: number;
  setSharpness(_: number)
}

declare var CINoiseReduction: {
  prototype: CINoiseReduction;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIOpTile extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  scale: number;
  setScale(_: number)
  width: number;
  setWidth(_: number)
}

declare var CIOpTile: {
  prototype: CIOpTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPDF417BarcodeGenerator extends CIFilterProtocol {
  alwaysSpecifyCompaction: number;
  setAlwaysSpecifyCompaction(_: number)
  compactionMode: number;
  setCompactionMode(_: number)
  compactStyle: number;
  setCompactStyle(_: number)
  correctionLevel: number;
  setCorrectionLevel(_: number)
  dataColumns: number;
  setDataColumns(_: number)
  maxHeight: number;
  setMaxHeight(_: number)
  maxWidth: number;
  setMaxWidth(_: number)
  message: Data;
  setMessage(_: Data)
  minHeight: number;
  setMinHeight(_: number)
  minWidth: number;
  setMinWidth(_: number)
  preferredAspectRatio: number;
  setPreferredAspectRatio(_: number)
  rows: number;
  setRows(_: number)
}

declare var CIPDF417BarcodeGenerator: {
  prototype: CIPDF417BarcodeGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIPDF417CodeDescriptor extends CIBarcodeDescriptor {
  static descriptorWithPayloadIsCompactRowCountColumnCount(payload: Data, isCompact: boolean, rowCount: number, columnCount: number): CIPDF417CodeDescriptor;
  readonly columnCount: number;
  readonly errorCorrectedPayload: Data;
  readonly isCompact: boolean;
  readonly rowCount: number;
  static createWithPayloadIsCompactRowCountColumnCount(payload: Data, isCompact: boolean, rowCount: number, columnCount: number): this;
}

interface CIPageCurlTransition extends CITransitionFilter {
  angle: number;
  setAngle(_: number)
  backsideImage: CIImage;
  setBacksideImage(_: CIImage)
  extent: NSRect;
  setExtent(_: NSRect)
  radius: number;
  setRadius(_: number)
  shadingImage: CIImage;
  setShadingImage(_: CIImage)
}

declare var CIPageCurlTransition: {
  prototype: CIPageCurlTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPageCurlWithShadowTransition extends CITransitionFilter {
  angle: number;
  setAngle(_: number)
  backsideImage: CIImage;
  setBacksideImage(_: CIImage)
  extent: NSRect;
  setExtent(_: NSRect)
  radius: number;
  setRadius(_: number)
  shadowAmount: number;
  setShadowAmount(_: number)
  shadowExtent: NSRect;
  setShadowExtent(_: NSRect)
  shadowSize: number;
  setShadowSize(_: number)
}

declare var CIPageCurlWithShadowTransition: {
  prototype: CIPageCurlWithShadowTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPaletteCentroid extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  paletteImage: CIImage;
  setPaletteImage(_: CIImage)
  perceptual: boolean;
  setPerceptual(_: boolean)
}

declare var CIPaletteCentroid: {
  prototype: CIPaletteCentroid;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPalettize extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  paletteImage: CIImage;
  setPaletteImage(_: CIImage)
  perceptual: boolean;
  setPerceptual(_: boolean)
}

declare var CIPalettize: {
  prototype: CIPalettize;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIParallelogramTile extends CIFilterProtocol {
  acuteAngle: number;
  setAcuteAngle(_: number)
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CIParallelogramTile: {
  prototype: CIParallelogramTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPerspectiveCorrection extends CIFourCoordinateGeometryFilter {
  crop: boolean;
  setCrop(_: boolean)
}

declare var CIPerspectiveCorrection: {
  prototype: CIPerspectiveCorrection;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPerspectiveRotate extends CIFilterProtocol {
  focalLength: number;
  setFocalLength(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  pitch: number;
  setPitch(_: number)
  roll: number;
  setRoll(_: number)
  yaw: number;
  setYaw(_: number)
}

declare var CIPerspectiveRotate: {
  prototype: CIPerspectiveRotate;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPerspectiveTile extends CIFilterProtocol {
  bottomLeft: NSPoint;
  setBottomLeft(_: NSPoint)
  bottomRight: NSPoint;
  setBottomRight(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  topLeft: NSPoint;
  setTopLeft(_: NSPoint)
  topRight: NSPoint;
  setTopRight(_: NSPoint)
}

declare var CIPerspectiveTile: {
  prototype: CIPerspectiveTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPerspectiveTransform extends CIFourCoordinateGeometryFilter {
}

declare var CIPerspectiveTransform: {
  prototype: CIPerspectiveTransform;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPerspectiveTransformWithExtent extends CIFourCoordinateGeometryFilter {
  extent: NSRect;
  setExtent(_: NSRect)
}

declare var CIPerspectiveTransformWithExtent: {
  prototype: CIPerspectiveTransformWithExtent;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPhotoEffect extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIPhotoEffect: {
  prototype: CIPhotoEffect;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIPixellate extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  scale: number;
  setScale(_: number)
}

declare var CIPixellate: {
  prototype: CIPixellate;
   static customAttributes?(): NSDictionary<string, any>;
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
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
}

declare var CIPointillize: {
  prototype: CIPointillize;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIQRCodeDescriptor extends CIBarcodeDescriptor {
  static descriptorWithPayloadSymbolVersionMaskPatternErrorCorrectionLevel(payload: Data, symbolVersion: number, maskPattern: number, errorCorrectionLevel: CIQRCodeErrorCorrectionLevel): CIQRCodeDescriptor;
  readonly errorCorrectedPayload: Data;
  readonly errorCorrectionLevel: CIQRCodeErrorCorrectionLevel;
  readonly maskPattern: number;
  readonly symbolVersion: number;
  static createWithPayloadSymbolVersionMaskPatternErrorCorrectionLevel(payload: Data, symbolVersion: number, maskPattern: number, errorCorrectionLevel: CIQRCodeErrorCorrectionLevel): this;
}

declare class CIQRCodeFeature extends CIFeature implements NSCopying, NSSecureCoding {
  readonly bottomLeft: NSPoint;
  readonly bottomRight: NSPoint;
  readonly messageString: string;
  readonly symbolDescriptor: CIQRCodeDescriptor;
  readonly topLeft: NSPoint;
  readonly topRight: NSPoint;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

interface CIQRCodeGenerator extends CIFilterProtocol {
  correctionLevel: string;
  setCorrectionLevel(_: string)
  message: Data;
  setMessage(_: Data)
}

declare var CIQRCodeGenerator: {
  prototype: CIQRCodeGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIRadialGradient extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  color0: CIColor;
  setColor0(_: CIColor)
  color1: CIColor;
  setColor1(_: CIColor)
  radius0: number;
  setRadius0(_: number)
  radius1: number;
  setRadius1(_: number)
}

declare var CIRadialGradient: {
  prototype: CIRadialGradient;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIRandomGenerator extends CIFilterProtocol {
}

declare var CIRandomGenerator: {
  prototype: CIRandomGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIRectangleFeature extends CIFeature {
  readonly bottomLeft: NSPoint;
  readonly bottomRight: NSPoint;
  readonly topLeft: NSPoint;
  readonly topRight: NSPoint;
}

declare class CIRenderDestination extends NSObject {
  alphaMode: CIRenderDestinationAlphaMode;
  setAlphaMode(_: CIRenderDestinationAlphaMode)
  blendKernel: CIBlendKernel;
  setBlendKernel(_: CIBlendKernel)
  blendsInDestinationColorSpace: boolean;
  setBlendsInDestinationColorSpace(_: boolean)
  isClamped: boolean;
  setClamped(_: boolean)
  colorSpace: any;
  setColorSpace(_: any)
  isDithered: boolean;
  setDithered(_: boolean)
  isFlipped: boolean;
  setFlipped(_: boolean)
  readonly height: number;
  readonly width: number;
  static createWithBitmapDataWidthHeightBytesPerRowFormat(bitmapData: any, width: number, height: number, bytesPerRow: number, format: number): this;
  static createWithGLTextureTargetWidthHeight(GLTexture: number, target: number, width: number, height: number): this;
  static createWithIOSurface(IOSurface: IOSurface): this;
  static createWithMTLTextureCommandBuffer(MTLTexture: MTLTexture, commandBuffer?: MTLCommandBuffer): this;
  static createWithPixelBuffer(pixelBuffer: any): this;
  static createWithWidthHeightPixelFormatCommandBufferMtlTextureProvider(width: number, height: number, pixelFormat: MTLPixelFormat, commandBuffer?: MTLCommandBuffer, mtlTextureProvider?: () => MTLTexture): this;
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
  center: NSPoint;
  setCenter(_: NSPoint)
  extent: NSRect;
  setExtent(_: NSRect)
  scale: number;
  setScale(_: number)
  shadingImage: CIImage;
  setShadingImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CIRippleTransition: {
  prototype: CIRippleTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIRoundedRectangleGenerator extends CIFilterProtocol {
  color: CIColor;
  setColor(_: CIColor)
  extent: NSRect;
  setExtent(_: NSRect)
  radius: number;
  setRadius(_: number)
}

declare var CIRoundedRectangleGenerator: {
  prototype: CIRoundedRectangleGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CISRGBToneCurveToLinear extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CISRGBToneCurveToLinear: {
  prototype: CISRGBToneCurveToLinear;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CISaliencyMap extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CISaliencyMap: {
  prototype: CISaliencyMap;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CISampler extends NSObject implements NSCopying {
  static samplerWithImageKeysAndValues(_: CIImage, keysAndValues: any): CISampler;
  readonly definition: CIFilterShape;
  readonly extent: NSRect;
  static createWithImage(image: CIImage): this;
  static createWithImageOptions(image: CIImage, options?: NSDictionary<any, any>): this;
}

interface CISepiaTone extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  intensity: number;
  setIntensity(_: number)
}

declare var CISepiaTone: {
  prototype: CISepiaTone;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIShadedMaterial extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  scale: number;
  setScale(_: number)
  shadingImage: CIImage;
  setShadingImage(_: CIImage)
}

declare var CIShadedMaterial: {
  prototype: CIShadedMaterial;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CISharpenLuminance extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  radius: number;
  setRadius(_: number)
  sharpness: number;
  setSharpness(_: number)
}

declare var CISharpenLuminance: {
  prototype: CISharpenLuminance;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CISixfoldReflectedTile extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CISixfoldReflectedTile: {
  prototype: CISixfoldReflectedTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CISixfoldRotatedTile extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CISixfoldRotatedTile: {
  prototype: CISixfoldRotatedTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CISmoothLinearGradient extends CIFilterProtocol {
  color0: CIColor;
  setColor0(_: CIColor)
  color1: CIColor;
  setColor1(_: CIColor)
  point0: NSPoint;
  setPoint0(_: NSPoint)
  point1: NSPoint;
  setPoint1(_: NSPoint)
}

declare var CISmoothLinearGradient: {
  prototype: CISmoothLinearGradient;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CISpotColor extends CIFilterProtocol {
  centerColor1: CIColor;
  setCenterColor1(_: CIColor)
  centerColor2: CIColor;
  setCenterColor2(_: CIColor)
  centerColor3: CIColor;
  setCenterColor3(_: CIColor)
  closeness1: number;
  setCloseness1(_: number)
  closeness2: number;
  setCloseness2(_: number)
  closeness3: number;
  setCloseness3(_: number)
  contrast1: number;
  setContrast1(_: number)
  contrast2: number;
  setContrast2(_: number)
  contrast3: number;
  setContrast3(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  replacementColor1: CIColor;
  setReplacementColor1(_: CIColor)
  replacementColor2: CIColor;
  setReplacementColor2(_: CIColor)
  replacementColor3: CIColor;
  setReplacementColor3(_: CIColor)
}

declare var CISpotColor: {
  prototype: CISpotColor;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CISpotLight extends CIFilterProtocol {
  brightness: number;
  setBrightness(_: number)
  color: CIColor;
  setColor(_: CIColor)
  concentration: number;
  setConcentration(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  lightPointsAt: CIVector;
  setLightPointsAt(_: CIVector)
  lightPosition: CIVector;
  setLightPosition(_: CIVector)
}

declare var CISpotLight: {
  prototype: CISpotLight;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIStarShineGenerator extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  color: CIColor;
  setColor(_: CIColor)
  crossAngle: number;
  setCrossAngle(_: number)
  crossOpacity: number;
  setCrossOpacity(_: number)
  crossScale: number;
  setCrossScale(_: number)
  crossWidth: number;
  setCrossWidth(_: number)
  epsilon: number;
  setEpsilon(_: number)
  radius: number;
  setRadius(_: number)
}

declare var CIStarShineGenerator: {
  prototype: CIStarShineGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIStraighten extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIStraighten: {
  prototype: CIStraighten;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIStripesGenerator extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  color0: CIColor;
  setColor0(_: CIColor)
  color1: CIColor;
  setColor1(_: CIColor)
  sharpness: number;
  setSharpness(_: number)
  width: number;
  setWidth(_: number)
}

declare var CIStripesGenerator: {
  prototype: CIStripesGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CISunbeamsGenerator extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  color: CIColor;
  setColor(_: CIColor)
  maxStriationRadius: number;
  setMaxStriationRadius(_: number)
  striationContrast: number;
  setStriationContrast(_: number)
  striationStrength: number;
  setStriationStrength(_: number)
  sunRadius: number;
  setSunRadius(_: number)
  time: number;
  setTime(_: number)
}

declare var CISunbeamsGenerator: {
  prototype: CISunbeamsGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CISwipeTransition extends CITransitionFilter {
  angle: number;
  setAngle(_: number)
  color: CIColor;
  setColor(_: CIColor)
  extent: NSRect;
  setExtent(_: NSRect)
  opacity: number;
  setOpacity(_: number)
  width: number;
  setWidth(_: number)
}

declare var CISwipeTransition: {
  prototype: CISwipeTransition;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CITemperatureAndTint extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  neutral: CIVector;
  setNeutral(_: CIVector)
  targetNeutral: CIVector;
  setTargetNeutral(_: CIVector)
}

declare var CITemperatureAndTint: {
  prototype: CITemperatureAndTint;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CITextFeature extends CIFeature {
  readonly bottomLeft: NSPoint;
  readonly bottomRight: NSPoint;
  readonly subFeatures: NSArray<any>;
  readonly topLeft: NSPoint;
  readonly topRight: NSPoint;
}

interface CITextImageGenerator extends CIFilterProtocol {
  fontName: string;
  setFontName(_: string)
  fontSize: number;
  setFontSize(_: number)
  scaleFactor: number;
  setScaleFactor(_: number)
  text: string;
  setText(_: string)
}

declare var CITextImageGenerator: {
  prototype: CITextImageGenerator;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIThermal extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIThermal: {
  prototype: CIThermal;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIToneCurve extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  point0: NSPoint;
  setPoint0(_: NSPoint)
  point1: NSPoint;
  setPoint1(_: NSPoint)
  point2: NSPoint;
  setPoint2(_: NSPoint)
  point3: NSPoint;
  setPoint3(_: NSPoint)
  point4: NSPoint;
  setPoint4(_: NSPoint)
}

declare var CIToneCurve: {
  prototype: CIToneCurve;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CITransitionFilter extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  targetImage: CIImage;
  setTargetImage(_: CIImage)
  time: number;
  setTime(_: number)
}

declare var CITransitionFilter: {
  prototype: CITransitionFilter;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CITriangleKaleidoscope extends CIFilterProtocol {
  decay: number;
  setDecay(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  point: NSPoint;
  setPoint(_: NSPoint)
  rotation: number;
  setRotation(_: number)
  size: number;
  setSize(_: number)
}

declare var CITriangleKaleidoscope: {
  prototype: CITriangleKaleidoscope;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CITriangleTile extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CITriangleTile: {
  prototype: CITriangleTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CITwelvefoldReflectedTile extends CIFilterProtocol {
  angle: number;
  setAngle(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  width: number;
  setWidth(_: number)
}

declare var CITwelvefoldReflectedTile: {
  prototype: CITwelvefoldReflectedTile;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIUnsharpMask extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  intensity: number;
  setIntensity(_: number)
  radius: number;
  setRadius(_: number)
}

declare var CIUnsharpMask: {
  prototype: CIUnsharpMask;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIVector extends NSObject implements NSCopying, NSSecureCoding {
  readonly CGAffineTransformValue: CGAffineTransform;
  readonly CGPointValue: NSPoint;
  readonly CGRectValue: NSRect;
  readonly W: number;
  readonly X: number;
  readonly Y: number;
  readonly Z: number;
  readonly count: number;
  readonly stringRepresentation: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createCGAffineTransform(CGAffineTransform: CGAffineTransform): this;
  static createWithCGPoint(CGPoint: NSPoint): this;
  static createWithCGRect(CGRect: NSRect): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithString(string: string): this;
  static createWithValuesCount(values: number, count: number): this;
  static createWithX(x: number): this;
  static createWithXY(x: number, y: number): this;
  static createWithXYZ(x: number, y: number, z: number): this;
  static createWithXYZW(x: number, y: number, z: number, w: number): this;
  valueAtIndex(at: number): number;
}

interface CIVibrance extends CIFilterProtocol {
  amount: number;
  setAmount(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIVibrance: {
  prototype: CIVibrance;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIVignette extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
  intensity: number;
  setIntensity(_: number)
  radius: number;
  setRadius(_: number)
}

declare var CIVignette: {
  prototype: CIVignette;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIVignetteEffect extends CIFilterProtocol {
  center: NSPoint;
  setCenter(_: NSPoint)
  falloff: number;
  setFalloff(_: number)
  inputImage: CIImage;
  setInputImage(_: CIImage)
  intensity: number;
  setIntensity(_: number)
  radius: number;
  setRadius(_: number)
}

declare var CIVignetteEffect: {
  prototype: CIVignetteEffect;
   static customAttributes?(): NSDictionary<string, any>;
};

declare class CIWarpKernel extends CIKernel {
  static kernelWithFunctionNameFromMetalLibraryDataError(fromMetalLibraryData: string, error: Data): CIWarpKernel; // inherited from CIKernel
  static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(fromMetalLibraryData: string, outputPixelFormat: Data, error: number): CIWarpKernel; // inherited from CIKernel
  applyWithExtentRoiCallbackInputImageArguments(extent: NSRect, roiCallback: (p1: number, p2: NSRect) => NSRect, image: CIImage, arguments_?: NSArray<any>): CIImage;
}

interface CIWhitePointAdjust extends CIFilterProtocol {
  color: CIColor;
  setColor(_: CIColor)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIWhitePointAdjust: {
  prototype: CIWhitePointAdjust;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIXRay extends CIFilterProtocol {
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIXRay: {
  prototype: CIXRay;
   static customAttributes?(): NSDictionary<string, any>;
};

interface CIZoomBlur extends CIFilterProtocol {
  amount: number;
  setAmount(_: number)
  center: NSPoint;
  setCenter(_: NSPoint)
  inputImage: CIImage;
  setInputImage(_: CIImage)
}

declare var CIZoomBlur: {
  prototype: CIZoomBlur;
   static customAttributes?(): NSDictionary<string, any>;
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

enum CIDataMatrixCodeECCVersion {
    Version000 = 0,
    Version050 = 50,
    Version080 = 80,
    Version100 = 100,
    Version140 = 140,
    Version200 = 200
}

enum CIQRCodeErrorCorrectionLevel {
    L = 76,
    M = 77,
    Q = 81,
    H = 72
}

enum CIRenderDestinationAlphaMode {
    None = 0,
    Premultiplied = 1,
    Unpremultiplied = 2
}

