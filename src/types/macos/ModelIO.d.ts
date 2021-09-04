
declare class MDLAnimatedMatrix4x4 extends MDLAnimatedValue {

	double4x4AtTime(atTime: number): simd_double4x4;

	float4x4AtTime(atTime: number): simd_float4x4;

	getDouble4x4ArrayMaxCount(_: simd_double4x4, maxCount: number): number;

	getFloat4x4ArrayMaxCount(_: simd_float4x4, maxCount: number): number;

	resetWithDouble4x4ArrayAtTimesCount(_: simd_double4x4, atTimes: number, count: number): void;

	resetWithFloat4x4ArrayAtTimesCount(_: simd_float4x4, atTimes: number, count: number): void;

	setDouble4x4AtTime(_: simd_double4x4, atTime: number): void;

	setFloat4x4AtTime(_: simd_float4x4, atTime: number): void;
}

declare class MDLAnimatedQuaternion extends MDLAnimatedValue {

	doubleQuaternionAtTime(atTime: number): simd_quatd;

	floatQuaternionAtTime(atTime: number): simd_quatf;

	getDoubleQuaternionArrayMaxCount(_: simd_quatd, maxCount: number): number;

	getFloatQuaternionArrayMaxCount(_: simd_quatf, maxCount: number): number;

	resetWithDoubleQuaternionArrayAtTimesCount(_: simd_quatd, atTimes: number, count: number): void;

	resetWithFloatQuaternionArrayAtTimesCount(_: simd_quatf, atTimes: number, count: number): void;

	setDoubleQuaternionAtTime(_: simd_quatd, atTime: number): void;

	setFloatQuaternionAtTime(_: simd_quatf, atTime: number): void;
}

declare class MDLAnimatedQuaternionArray extends MDLAnimatedValue {

	readonly elementCount: number;

	static create(elementCount: number);

	getDoubleQuaternionArrayMaxCount(_: simd_quatd, maxCount: number): number;

	getDoubleQuaternionArrayMaxCountAtTime(_: simd_quatd, maxCount: number, atTime: number): number;

	getFloatQuaternionArrayMaxCount(_: simd_quatf, maxCount: number): number;

	getFloatQuaternionArrayMaxCountAtTime(_: simd_quatf, maxCount: number, atTime: number): number;

	resetWithDoubleQuaternionArrayCountAtTimesCount(_: simd_quatd, count: number, atTimes: number, count: number): void;

	resetWithFloatQuaternionArrayCountAtTimesCount(_: simd_quatf, count: number, atTimes: number, count: number): void;

	setDoubleQuaternionArrayCountAtTime(_: simd_quatd, count: number, atTime: number): void;

	setFloatQuaternionArrayCountAtTime(_: simd_quatf, count: number, atTime: number): void;
}

declare class MDLAnimatedScalar extends MDLAnimatedValue {

	doubleAtTime(atTime: number): number;

	floatAtTime(atTime: number): number;

	getDoubleArrayMaxCount(_: number, maxCount: number): number;

	getFloatArrayMaxCount(_: number, maxCount: number): number;

	resetWithDoubleArrayAtTimesCount(_: number, atTimes: number, count: number): void;

	resetWithFloatArrayAtTimesCount(_: number, atTimes: number, count: number): void;

	setDoubleAtTime(_: number, atTime: number): void;

	setFloatAtTime(_: number, atTime: number): void;
}

declare class MDLAnimatedScalarArray extends MDLAnimatedValue {

	readonly elementCount: number;

	static create(elementCount: number);

	getDoubleArrayMaxCount(_: number, maxCount: number): number;

	getDoubleArrayMaxCountAtTime(_: number, maxCount: number, atTime: number): number;

	getFloatArrayMaxCount(_: number, maxCount: number): number;

	getFloatArrayMaxCountAtTime(_: number, maxCount: number, atTime: number): number;

	resetWithDoubleArrayCountAtTimesCount(_: number, count: number, atTimes: number, count: number): void;

	resetWithFloatArrayCountAtTimesCount(_: number, count: number, atTimes: number, count: number): void;

	setDoubleArrayCountAtTime(_: number, count: number, atTime: number): void;

	setFloatArrayCountAtTime(_: number, count: number, atTime: number): void;
}

declare class MDLAnimatedValue extends NSObject implements NSCopying {

	setInterpolation(_: MDLAnimatedValueInterpolation)

	interpolation: MDLAnimatedValueInterpolation;

	readonly keyTimes: NSArray<number>;

	readonly maximumTime: number;

	readonly minimumTime: number;

	readonly precision: MDLDataPrecision;

	readonly timeSampleCount: number;

	clear(): void;

	copyWithZone(_?: any): any;

	getTimesMaxCount(_: number, maxCount: number): number;

	isAnimated(): boolean;
}

enum MDLAnimatedValueInterpolation {

	Constant = 0,

	Linear = 1
}


declare class MDLAnimatedVector2 extends MDLAnimatedValue {

	double2AtTime(atTime: number): number;

	float2AtTime(atTime: number): number;

	getDouble2ArrayMaxCount(_: number, maxCount: number): number;

	getFloat2ArrayMaxCount(_: number, maxCount: number): number;

	resetWithDouble2ArrayAtTimesCount(_: number, atTimes: number, count: number): void;

	resetWithFloat2ArrayAtTimesCount(_: number, atTimes: number, count: number): void;

	setDouble2AtTime(_: number, atTime: number): void;

	setFloat2AtTime(_: number, atTime: number): void;
}

declare class MDLAnimatedVector3 extends MDLAnimatedValue {

	double3AtTime(atTime: number): number;

	float3AtTime(atTime: number): number;

	getDouble3ArrayMaxCount(_: number, maxCount: number): number;

	getFloat3ArrayMaxCount(_: number, maxCount: number): number;

	resetWithDouble3ArrayAtTimesCount(_: number, atTimes: number, count: number): void;

	resetWithFloat3ArrayAtTimesCount(_: number, atTimes: number, count: number): void;

	setDouble3AtTime(_: number, atTime: number): void;

	setFloat3AtTime(_: number, atTime: number): void;
}

declare class MDLAnimatedVector3Array extends MDLAnimatedValue {

	readonly elementCount: number;

	static create(elementCount: number);

	getDouble3ArrayMaxCount(_: number, maxCount: number): number;

	getDouble3ArrayMaxCountAtTime(_: number, maxCount: number, atTime: number): number;

	getFloat3ArrayMaxCount(_: number, maxCount: number): number;

	getFloat3ArrayMaxCountAtTime(_: number, maxCount: number, atTime: number): number;

	resetWithDouble3ArrayCountAtTimesCount(_: number, count: number, atTimes: number, count: number): void;

	resetWithFloat3ArrayCountAtTimesCount(_: number, count: number, atTimes: number, count: number): void;

	setDouble3ArrayCountAtTime(_: number, count: number, atTime: number): void;

	setFloat3ArrayCountAtTime(_: number, count: number, atTime: number): void;
}

declare class MDLAnimatedVector4 extends MDLAnimatedValue {

	double4AtTime(atTime: number): number;

	float4AtTime(atTime: number): number;

	getDouble4ArrayMaxCount(_: number, maxCount: number): number;

	getFloat4ArrayMaxCount(_: number, maxCount: number): number;

	resetWithDouble4ArrayAtTimesCount(_: number, atTimes: number, count: number): void;

	resetWithFloat4ArrayAtTimesCount(_: number, atTimes: number, count: number): void;

	setDouble4AtTime(_: number, atTime: number): void;

	setFloat4AtTime(_: number, atTime: number): void;
}

declare class MDLAnimationBindComponent extends NSObject implements MDLComponent, NSCopying {

	setGeometryBindTransform(_: simd_double4x4)

	geometryBindTransform: simd_double4x4;

	setJointAnimation(_: MDLJointAnimation)

	jointAnimation: MDLJointAnimation;

	setJointPaths(_: NSArray<string>)

	jointPaths: NSArray<string>;

	setSkeleton(_: MDLSkeleton)

	skeleton: MDLSkeleton;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

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

declare class MDLAreaLight extends MDLPhysicallyPlausibleLight {

	static lightWithSCNLight(_: SCNLight): MDLAreaLight; // inherited from MDLLight

	static objectWithSCNNode(_: SCNNode): MDLAreaLight; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLAreaLight; // inherited from MDLObject

	setAreaRadius(_: number)

	areaRadius: number;

	setAspect(_: number)

	aspect: number;

	setSuperEllipticPower(_: number)

	superEllipticPower: number;
}

declare class MDLAsset extends NSObject implements NSCopying, NSFastEnumeration {

	static assetWithSCNScene(_: SCNScene): MDLAsset;

	static assetWithSCNSceneBufferAllocator(_: SCNScene, bufferAllocator?: MDLMeshBufferAllocator): MDLAsset;

	static canExportFileExtension(_: string): boolean;

	static canImportFileExtension(_: string): boolean;

	static placeLightProbesWithDensityHeuristicUsingIrradianceDataSource(_: number, heuristic: MDLProbePlacement, usingIrradianceDataSource: MDLLightProbeIrradianceDataSource): NSArray<MDLLightProbe>;

	readonly URL: NSURL;

	setAnimations(_: MDLObjectContainerComponent)

	animations: MDLObjectContainerComponent;

	readonly boundingBox: MDLAxisAlignedBoundingBox;

	readonly bufferAllocator: MDLMeshBufferAllocator;

	readonly count: number;

	setEndTime(_: number)

	endTime: number;

	setFrameInterval(_: number)

	frameInterval: number;

	setMasters(_: MDLObjectContainerComponent)

	masters: MDLObjectContainerComponent;

	setResolver(_: MDLAssetResolver)

	resolver: MDLAssetResolver;

	setStartTime(_: number)

	startTime: number;

	setUpAxis(_: number)

	upAxis: number;

	readonly vertexDescriptor: MDLVertexDescriptor;

	static create(bufferAllocator: MDLMeshBufferAllocator);

	static create(URL: NSURL);

	static create(URL: NSURL, vertexDescriptor: MDLVertexDescriptor, bufferAllocator: MDLMeshBufferAllocator);

	static create(URL: NSURL, vertexDescriptor: MDLVertexDescriptor, bufferAllocator: MDLMeshBufferAllocator, preserveTopology: boolean);

	addObject(_: MDLObject): void;

	boundingBoxAtTime(_: number): MDLAxisAlignedBoundingBox;

	childObjectsOfClass(_: typeof NSObject): NSArray<MDLObject>;

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	exportAssetToURLError(error: NSURL): boolean;

	loadTextures(): void;

	objectAtIndex(_: number): MDLObject;

	objectAtIndexedSubscript(_: number): MDLObject;

	objectAtPath(_: string): MDLObject;

	removeObject(_: MDLObject): void;
}

interface MDLAssetResolver extends NSObjectProtocol {

	canResolveAssetNamed(_: string): boolean;

	resolveAssetNamed(_: string): NSURL;
}
declare var MDLAssetResolver: {

	prototype: MDLAssetResolver;
};

interface MDLAxisAlignedBoundingBox {
	maxBounds: number;
	minBounds: number;
}
declare var MDLAxisAlignedBoundingBox: MDLAxisAlignedBoundingBox;

declare class MDLBundleAssetResolver extends NSObject implements MDLAssetResolver {

	setPath(_: string)

	path: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(bundle: string);

	canResolveAssetNamed(_: string): boolean;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	resolveAssetNamed(_: string): NSURL;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDLCamera extends MDLObject {

	static cameraWithSCNCamera(_: SCNCamera): MDLCamera;

	static objectWithSCNNode(_: SCNNode): MDLCamera; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLCamera; // inherited from MDLObject

	setApertureBladeCount(_: number)

	apertureBladeCount: number;

	setBarrelDistortion(_: number)

	barrelDistortion: number;

	setChromaticAberration(_: number)

	chromaticAberration: number;

	setExposure(_: number)

	exposure: number;

	setExposureCompression(_: number)

	exposureCompression: number;

	setFStop(_: number)

	fStop: number;

	setFarVisibilityDistance(_: number)

	farVisibilityDistance: number;

	setFieldOfView(_: number)

	fieldOfView: number;

	setFisheyeDistortion(_: number)

	fisheyeDistortion: number;

	setFlash(_: number)

	flash: number;

	setFocalLength(_: number)

	focalLength: number;

	setFocusDistance(_: number)

	focusDistance: number;

	setMaximumCircleOfConfusion(_: number)

	maximumCircleOfConfusion: number;

	setNearVisibilityDistance(_: number)

	nearVisibilityDistance: number;

	setOpticalVignetting(_: number)

	opticalVignetting: number;

	setProjection(_: MDLCameraProjection)

	projection: MDLCameraProjection;

	readonly projectionMatrix: simd_float4x4;

	setSensorAspect(_: number)

	sensorAspect: number;

	setSensorEnlargement(_: number)

	sensorEnlargement: number;

	setSensorShift(_: number)

	sensorShift: number;

	setSensorVerticalAperture(_: number)

	sensorVerticalAperture: number;

	setShutterOpenInterval(_: number)

	shutterOpenInterval: number;

	setWorldToMetersConversionScale(_: number)

	worldToMetersConversionScale: number;

	bokehKernelWithSize(_: number): MDLTexture;

	frameBoundingBoxSetNearAndFar(_: MDLAxisAlignedBoundingBox, setNearAndFar: boolean): void;

	lookAt(_: number): void;

	lookAtFrom(_: number, from: number): void;

	rayToForViewPort(_: number, forViewPort: number): number;
}

enum MDLCameraProjection {

	Perspective = 0,

	Orthographic = 1
}


declare class MDLCheckerboardTexture extends MDLTexture {

	static irradianceTextureCubeWithTextureNameDimensions(_: MDLTexture, name?: string, dimensions: number): MDLCheckerboardTexture; // inherited from MDLTexture

	static irradianceTextureCubeWithTextureNameDimensionsRoughness(_: MDLTexture, name?: string, dimensions: number, roughness: number): MDLCheckerboardTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamed(_: NSArray<string>): MDLCheckerboardTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamedBundle(_: NSArray<string>, bundle?: NSBundle): MDLCheckerboardTexture; // inherited from MDLTexture

	static textureNamed(_: string): MDLCheckerboardTexture; // inherited from MDLTexture

	static textureNamedAssetResolver(_: string, assetResolver: MDLAssetResolver): MDLCheckerboardTexture; // inherited from MDLTexture

	static textureNamedBundle(_: string, bundle?: NSBundle): MDLCheckerboardTexture; // inherited from MDLTexture

	setColor1(_: any)

	color1: any;

	setColor2(_: any)

	color2: any;

	setDivisions(_: number)

	divisions: number;

	static create(divisions: number, name: string, dimensions: number, channelCount: number, channelEncoding: MDLTextureChannelEncoding, color1: any, color2: any);
}

declare class MDLColorSwatchTexture extends MDLTexture {

	static irradianceTextureCubeWithTextureNameDimensions(_: MDLTexture, name?: string, dimensions: number): MDLColorSwatchTexture; // inherited from MDLTexture

	static irradianceTextureCubeWithTextureNameDimensionsRoughness(_: MDLTexture, name?: string, dimensions: number, roughness: number): MDLColorSwatchTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamed(_: NSArray<string>): MDLColorSwatchTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamedBundle(_: NSArray<string>, bundle?: NSBundle): MDLColorSwatchTexture; // inherited from MDLTexture

	static textureNamed(_: string): MDLColorSwatchTexture; // inherited from MDLTexture

	static textureNamedAssetResolver(_: string, assetResolver: MDLAssetResolver): MDLColorSwatchTexture; // inherited from MDLTexture

	static textureNamedBundle(_: string, bundle?: NSBundle): MDLColorSwatchTexture; // inherited from MDLTexture

	static create(colorGradientFrom: any, toColor: any, name: string, textureDimensions: number);

	static create(colorTemperatureGradientFrom: number, toColorTemperature: number, name: string, textureDimensions: number);
}

interface MDLComponent extends NSObjectProtocol {
}
declare var MDLComponent: {

	prototype: MDLComponent;
};

enum MDLDataPrecision {

	Undefined = 0,

	Float = 1,

	Double = 2
}


enum MDLGeometryType {

	Points = 0,

	Lines = 1,

	Triangles = 2,

	TriangleStrips = 3,

	Quads = 4,

	VariableTopology = 5
}


enum MDLIndexBitDepth {

	Invalid = 0,

	UInt8 = 8,

	Uint8 = 8,

	UInt16 = 16,

	Uint16 = 16,

	UInt32 = 32,

	Uint32 = 32
}


interface MDLJointAnimation {
}
declare var MDLJointAnimation: {

	prototype: MDLJointAnimation;
};

declare class MDLLight extends MDLObject {

	static lightWithSCNLight(_: SCNLight): MDLLight;

	static objectWithSCNNode(_: SCNNode): MDLLight; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLLight; // inherited from MDLObject

	setColorSpace(_: string)

	colorSpace: string;

	setLightType(_: MDLLightType)

	lightType: MDLLightType;

	irradianceAtPoint(_: number): any;

	irradianceAtPointColorSpace(_: number, colorSpace: any): any;
}

declare class MDLLightProbe extends MDLLight {

	static lightProbeWithTextureSizeForLocationLightsToConsiderObjectsToConsiderReflectiveCubemapIrradianceCubemap(_: number, forLocation: MDLTransform, lightsToConsider: NSArray<MDLLight>, objectsToConsider: NSArray<MDLObject>, reflectiveCubemap?: MDLTexture, irradianceCubemap?: MDLTexture): MDLLightProbe;

	static lightWithSCNLight(_: SCNLight): MDLLightProbe; // inherited from MDLLight

	static objectWithSCNNode(_: SCNNode): MDLLightProbe; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLLightProbe; // inherited from MDLObject

	readonly irradianceTexture: MDLTexture;

	readonly reflectiveTexture: MDLTexture;

	readonly sphericalHarmonicsCoefficients: NSData;

	readonly sphericalHarmonicsLevel: number;

	static create(reflectiveTexture: MDLTexture, irradianceTexture: MDLTexture);

	generateSphericalHarmonicsFromIrradiance(_: number): void;
}

interface MDLLightProbeIrradianceDataSource extends NSObjectProtocol {

	setBoundingBox(_: MDLAxisAlignedBoundingBox)

	boundingBox: MDLAxisAlignedBoundingBox;

	setSphericalHarmonicsLevel(_: number)

	sphericalHarmonicsLevel?: number;

	sphericalHarmonicsCoefficientsAtPosition?(_: number): NSData;
}
declare var MDLLightProbeIrradianceDataSource: {

	prototype: MDLLightProbeIrradianceDataSource;
};

enum MDLLightType {

	Unknown = 0,

	Ambient = 1,

	Directional = 2,

	Spot = 3,

	Point = 4,

	Linear = 5,

	DiscArea = 6,

	RectangularArea = 7,

	SuperElliptical = 8,

	Photometric = 9,

	Probe = 10,

	Environment = 11
}


declare class MDLMaterial extends NSObject implements MDLNamed, NSFastEnumeration {

	static materialWithSCNMaterial(_: SCNMaterial): MDLMaterial;

	setBaseMaterial(_: MDLMaterial)

	baseMaterial: MDLMaterial;

	readonly count: number;

	setMaterialFace(_: MDLMaterialFace)

	materialFace: MDLMaterialFace;

	readonly scatteringFunction: MDLScatteringFunction;

	setName(_: string)

	name: string; // inherited from MDLNamed

	static create(name: string, scatteringFunction: MDLScatteringFunction);

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	loadTexturesUsingResolver(_: MDLAssetResolver): void;

	objectAtIndexedSubscript(_: number): MDLMaterialProperty;

	objectForKeyedSubscript(_: string): MDLMaterialProperty;

	propertiesWithSemantic(_: MDLMaterialSemantic): NSArray<MDLMaterialProperty>;

	propertyNamed(_: string): MDLMaterialProperty;

	propertyWithSemantic(_: MDLMaterialSemantic): MDLMaterialProperty;

	removeAllProperties(): void;

	removeProperty(_: MDLMaterialProperty): void;

	resolveTexturesWithResolver(_: MDLAssetResolver): void;

	setProperty(_: MDLMaterialProperty): void;
}

enum MDLMaterialFace {

	Front = 0,

	Back = 1,

	DoubleSided = 2
}


enum MDLMaterialMipMapFilterMode {

	Nearest = 0,

	Linear = 1
}


declare class MDLMaterialProperty extends NSObject implements MDLNamed, NSCopying {

	setURLValue(_: NSURL)

	URLValue: NSURL;

	setColor(_: any)

	color: any;

	setFloat2Value(_: number)

	float2Value: number;

	setFloat3Value(_: number)

	float3Value: number;

	setFloat4Value(_: number)

	float4Value: number;

	setFloatValue(_: number)

	floatValue: number;

	setLuminance(_: number)

	luminance: number;

	setMatrix4x4(_: simd_float4x4)

	matrix4x4: simd_float4x4;

	setSemantic(_: MDLMaterialSemantic)

	semantic: MDLMaterialSemantic;

	setStringValue(_: string)

	stringValue: string;

	setTextureSamplerValue(_: MDLTextureSampler)

	textureSamplerValue: MDLTextureSampler;

	setType(_: MDLMaterialPropertyType)

	type: MDLMaterialPropertyType;

	setName(_: string)

	name: string; // inherited from MDLNamed

	static create(name: string, semantic: MDLMaterialSemantic);

	static create(name: string, semantic: MDLMaterialSemantic, URL: NSURL);

	static create(name: string, semantic: MDLMaterialSemantic, color: any);

	static create(name: string, semantic: MDLMaterialSemantic, float2: number);

	static create(name: string, semantic: MDLMaterialSemantic, float3: number);

	static create(name: string, semantic: MDLMaterialSemantic, float4: number);

	static create(name: string, semantic: MDLMaterialSemantic, float: number);

	static create(name: string, semantic: MDLMaterialSemantic, matrix4x4: simd_float4x4);

	static create(name: string, semantic: MDLMaterialSemantic, string: string);

	static create(name: string, semantic: MDLMaterialSemantic, textureSampler: MDLTextureSampler);

	copyWithZone(_?: any): any;

	setProperties(_: MDLMaterialProperty): void;
}

declare class MDLMaterialPropertyConnection extends NSObject implements MDLNamed {

	readonly input: MDLMaterialProperty;

	readonly output: MDLMaterialProperty;

	setName(_: string)

	name: string; // inherited from MDLNamed

	static create(output: MDLMaterialProperty, input: MDLMaterialProperty);
}

declare class MDLMaterialPropertyGraph extends MDLMaterialPropertyNode {

	readonly connections: NSArray<MDLMaterialPropertyConnection>;

	readonly nodes: NSArray<MDLMaterialPropertyNode>;

	static create(nodes: NSArray<MDLMaterialPropertyNode> | MDLMaterialPropertyNode[], connections: NSArray<MDLMaterialPropertyConnection> | MDLMaterialPropertyConnection[]);

	evaluate(): void;
}

declare class MDLMaterialPropertyNode extends NSObject implements MDLNamed {

	setEvaluationFunction(_: (p1: MDLMaterialPropertyNode) => void)

	evaluationFunction: (p1: MDLMaterialPropertyNode) => void;

	readonly inputs: NSArray<MDLMaterialProperty>;

	readonly outputs: NSArray<MDLMaterialProperty>;

	setName(_: string)

	name: string; // inherited from MDLNamed

	static create(inputs: NSArray<MDLMaterialProperty> | MDLMaterialProperty[], outputs: NSArray<MDLMaterialProperty> | MDLMaterialProperty[], evaluationFunction: (p1: MDLMaterialPropertyNode) => void);
}

enum MDLMaterialPropertyType {

	None = 0,

	String = 1,

	URL = 2,

	Texture = 3,

	Color = 4,

	Float = 5,

	Float2 = 6,

	Float3 = 7,

	Float4 = 8,

	Matrix44 = 9
}


enum MDLMaterialSemantic {

	BaseColor = 0,

	Subsurface = 1,

	Metallic = 2,

	Specular = 3,

	SpecularExponent = 4,

	SpecularTint = 5,

	Roughness = 6,

	Anisotropic = 7,

	AnisotropicRotation = 8,

	Sheen = 9,

	SheenTint = 10,

	Clearcoat = 11,

	ClearcoatGloss = 12,

	Emission = 13,

	Bump = 14,

	Opacity = 15,

	InterfaceIndexOfRefraction = 16,

	MaterialIndexOfRefraction = 17,

	ObjectSpaceNormal = 18,

	TangentSpaceNormal = 19,

	Displacement = 20,

	DisplacementScale = 21,

	AmbientOcclusion = 22,

	AmbientOcclusionScale = 23,

	None = 32768,

	UserDefined = 32769
}


enum MDLMaterialTextureFilterMode {

	Nearest = 0,

	Linear = 1
}


enum MDLMaterialTextureWrapMode {

	Clamp = 0,

	Repeat = 1,

	Mirror = 2
}


declare class MDLMatrix4x4Array extends NSObject implements NSCopying {

	readonly elementCount: number;

	readonly precision: MDLDataPrecision;

	static create(elementCount: number);

	clear(): void;

	copyWithZone(_?: any): any;

	getDouble4x4ArrayMaxCount(_: simd_double4x4, maxCount: number): number;

	getFloat4x4ArrayMaxCount(_: simd_float4x4, maxCount: number): number;

	setDouble4x4ArrayCount(_: simd_double4x4, count: number): void;

	setFloat4x4ArrayCount(_: simd_float4x4, count: number): void;
}

declare class MDLMesh extends MDLObject {

	static meshWithSCNGeometry(_: SCNGeometry): MDLMesh;

	static meshWithSCNGeometryBufferAllocator(_: SCNGeometry, bufferAllocator?: MDLMeshBufferAllocator): MDLMesh;

	static newBoxWithDimensionsSegmentsGeometryTypeInwardNormalsAllocator(_: number, segments: number, geometryType: MDLGeometryType, inwardNormals: boolean, allocator?: MDLMeshBufferAllocator): MDLMesh;

	static newCapsuleWithHeightRadiiRadialSegmentsVerticalSegmentsHemisphereSegmentsGeometryTypeInwardNormalsAllocator(_: number, radii: number, radialSegments: number, verticalSegments: number, hemisphereSegments: number, geometryType: MDLGeometryType, inwardNormals: boolean, allocator?: MDLMeshBufferAllocator): MDLMesh;

	static newCylinderWithHeightRadiiRadialSegmentsVerticalSegmentsGeometryTypeInwardNormalsAllocator(_: number, radii: number, radialSegments: number, verticalSegments: number, geometryType: MDLGeometryType, inwardNormals: boolean, allocator?: MDLMeshBufferAllocator): MDLMesh;

	static newEllipsoidWithRadiiRadialSegmentsVerticalSegmentsGeometryTypeInwardNormalsHemisphereAllocator(_: number, radialSegments: number, verticalSegments: number, geometryType: MDLGeometryType, inwardNormals: boolean, hemisphere: boolean, allocator?: MDLMeshBufferAllocator): MDLMesh;

	static newEllipticalConeWithHeightRadiiRadialSegmentsVerticalSegmentsGeometryTypeInwardNormalsAllocator(_: number, radii: number, radialSegments: number, verticalSegments: number, geometryType: MDLGeometryType, inwardNormals: boolean, allocator?: MDLMeshBufferAllocator): MDLMesh;

	static newIcosahedronWithRadiusInwardNormalsAllocator(_: number, inwardNormals: boolean, allocator?: MDLMeshBufferAllocator): MDLMesh;

	static newIcosahedronWithRadiusInwardNormalsGeometryTypeAllocator(_: number, inwardNormals: boolean, geometryType: MDLGeometryType, allocator?: MDLMeshBufferAllocator): MDLMesh;

	static newPlaneWithDimensionsSegmentsGeometryTypeAllocator(_: number, segments: number, geometryType: MDLGeometryType, allocator?: MDLMeshBufferAllocator): MDLMesh;

	static newSubdividedMeshSubmeshIndexSubdivisionLevels(_: MDLMesh, submeshIndex: number, subdivisionLevels: number): MDLMesh;

	static objectWithSCNNode(_: SCNNode): MDLMesh; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLMesh; // inherited from MDLObject

	readonly allocator: MDLMeshBufferAllocator;

	readonly boundingBox: MDLAxisAlignedBoundingBox;

	setSubmeshes(_: NSMutableArray<MDLSubmesh>)

	submeshes: NSMutableArray<MDLSubmesh>;

	setVertexBuffers(_: NSArray<MDLMeshBuffer>)

	vertexBuffers: NSArray<MDLMeshBuffer>;

	setVertexCount(_: number)

	vertexCount: number;

	setVertexDescriptor(_: MDLVertexDescriptor)

	vertexDescriptor: MDLVertexDescriptor;

	static create(boxWithExtent: number, segments: number, inwardNormals: boolean, geometryType: MDLGeometryType, allocator: MDLMeshBufferAllocator);

	static create(capsuleWithExtent: number, cylinderSegments: number, hemisphereSegments: number, inwardNormals: boolean, geometryType: MDLGeometryType, allocator: MDLMeshBufferAllocator);

	static create(coneWithExtent: number, segments: number, inwardNormals: boolean, cap: boolean, geometryType: MDLGeometryType, allocator: MDLMeshBufferAllocator);

	static create(cylinderWithExtent: number, segments: number, inwardNormals: boolean, topCap: boolean, bottomCap: boolean, geometryType: MDLGeometryType, allocator: MDLMeshBufferAllocator);

	static create(hemisphereWithExtent: number, segments: number, inwardNormals: boolean, cap: boolean, geometryType: MDLGeometryType, allocator: MDLMeshBufferAllocator);

	static create(icosahedronWithExtent: number, inwardNormals: boolean, geometryType: MDLGeometryType, allocator: MDLMeshBufferAllocator);

	static create(meshBySubdividingMesh: MDLMesh, submeshIndex: number, subdivisionLevels: number, allocator: MDLMeshBufferAllocator);

	static create(planeWithExtent: number, segments: number, geometryType: MDLGeometryType, allocator: MDLMeshBufferAllocator);

	static create(sphereWithExtent: number, segments: number, inwardNormals: boolean, geometryType: MDLGeometryType, allocator: MDLMeshBufferAllocator);

	static create(bufferAllocator: MDLMeshBufferAllocator);

	static create(vertexBuffer: MDLMeshBuffer, vertexCount: number, descriptor: MDLVertexDescriptor, submeshes: NSArray<MDLSubmesh> | MDLSubmesh[]);

	static create(vertexBuffers: NSArray<MDLMeshBuffer> | MDLMeshBuffer[], vertexCount: number, descriptor: MDLVertexDescriptor, submeshes: NSArray<MDLSubmesh> | MDLSubmesh[]);

	addAttributeWithNameFormat(_: string, format: MDLVertexFormat): void;

	addAttributeWithNameFormatTypeDataStride(_: string, format: MDLVertexFormat, type: string, data: NSData, stride: number): void;

	addAttributeWithNameFormatTypeDataStrideTime(_: string, format: MDLVertexFormat, type: string, data: NSData, stride: number, time: number): void;

	addNormalsWithAttributeNamedCreaseThreshold(_?: string, creaseThreshold: number): void;

	addOrthTanBasisForTextureCoordinateAttributeNamedNormalAttributeNamedTangentAttributeNamed(_: string, normalAttributeNamed: string, tangentAttributeNamed: string): void;

	addTangentBasisForTextureCoordinateAttributeNamedNormalAttributeNamedTangentAttributeNamed(_: string, normalAttributeNamed: string, tangentAttributeNamed: string): void;

	addTangentBasisForTextureCoordinateAttributeNamedTangentAttributeNamedBitangentAttributeNamed(_: string, tangentAttributeNamed: string, bitangentAttributeNamed?: string): void;

	addUnwrappedTextureCoordinatesForAttributeNamed(_: string): void;

	flipTextureCoordinatesInAttributeNamed(_: string): void;

	generateAmbientOcclusionTextureWithQualityAttenuationFactorObjectsToConsiderVertexAttributeNamedMaterialPropertyNamed(_: number, attenuationFactor: number, objectsToConsider: NSArray<MDLObject>, vertexAttributeNamed: string, materialPropertyNamed: string): boolean;

	generateAmbientOcclusionTextureWithSizeRaysPerSampleAttenuationFactorObjectsToConsiderVertexAttributeNamedMaterialPropertyNamed(_: number, raysPerSample: number, attenuationFactor: number, objectsToConsider: NSArray<MDLObject>, vertexAttributeNamed: string, materialPropertyNamed: string): boolean;

	generateAmbientOcclusionVertexColorsWithQualityAttenuationFactorObjectsToConsiderVertexAttributeNamed(_: number, attenuationFactor: number, objectsToConsider: NSArray<MDLObject>, vertexAttributeNamed: string): boolean;

	generateAmbientOcclusionVertexColorsWithRaysPerSampleAttenuationFactorObjectsToConsiderVertexAttributeNamed(_: number, attenuationFactor: number, objectsToConsider: NSArray<MDLObject>, vertexAttributeNamed: string): boolean;

	generateLightMapTextureWithQualityLightsToConsiderObjectsToConsiderVertexAttributeNamedMaterialPropertyNamed(_: number, lightsToConsider: NSArray<MDLLight>, objectsToConsider: NSArray<MDLObject>, vertexAttributeNamed: string, materialPropertyNamed: string): boolean;

	generateLightMapTextureWithTextureSizeLightsToConsiderObjectsToConsiderVertexAttributeNamedMaterialPropertyNamed(_: number, lightsToConsider: NSArray<MDLLight>, objectsToConsider: NSArray<MDLObject>, vertexAttributeNamed: string, materialPropertyNamed: string): boolean;

	generateLightMapVertexColorsWithLightsToConsiderObjectsToConsiderVertexAttributeNamed(_: NSArray<MDLLight>, objectsToConsider: NSArray<MDLObject>, vertexAttributeNamed: string): boolean;

	makeVerticesUniqueAndReturnError(): boolean;

	removeAttributeNamed(_: string): void;

	replaceAttributeNamedWithData(_: string, withData: MDLVertexAttributeData): void;

	updateAttributeNamedWithData(_: string, withData: MDLVertexAttributeData): void;

	vertexAttributeDataForAttributeNamed(_: string): MDLVertexAttributeData;

	vertexAttributeDataForAttributeNamedAsFormat(_: string, asFormat: MDLVertexFormat): MDLVertexAttributeData;
}

interface MDLMeshBuffer extends NSCopying, NSObjectProtocol {

	allocator: MDLMeshBufferAllocator;

	length: number;

	type: MDLMeshBufferType;

	

	fillDataOffset(_: NSData, offset: number): void;

	map(): MDLMeshBufferMap;
}
declare var MDLMeshBuffer: {

	prototype: MDLMeshBuffer;
};

interface MDLMeshBufferAllocator extends NSObjectProtocol {

	newBufferType(_: number, type: MDLMeshBufferType): MDLMeshBuffer;

	newBufferFromZoneDataType(_?: MDLMeshBufferZone, data: NSData, type: MDLMeshBufferType): MDLMeshBuffer;

	newBufferFromZoneLengthType(_?: MDLMeshBufferZone, length: number, type: MDLMeshBufferType): MDLMeshBuffer;

	newBufferWithDataType(_: NSData, type: MDLMeshBufferType): MDLMeshBuffer;

	newZone(_: number): MDLMeshBufferZone;

	newZoneForBuffersWithSizeAndType(_: NSArray<number>, andType: NSArray<number>): MDLMeshBufferZone;
}
declare var MDLMeshBufferAllocator: {

	prototype: MDLMeshBufferAllocator;
};

declare class MDLMeshBufferData extends NSObject implements MDLMeshBuffer {

	readonly data: NSData;

	readonly allocator: MDLMeshBufferAllocator; // inherited from MDLMeshBuffer

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly length: number; // inherited from MDLMeshBuffer

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: MDLMeshBufferType; // inherited from MDLMeshBuffer

	readonly  // inherited from MDLMeshBuffer

	static create(type: MDLMeshBufferType, data: NSData);

	static create(type: MDLMeshBufferType, length: number);

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	fillDataOffset(_: NSData, offset: number): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	map(): MDLMeshBufferMap;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDLMeshBufferDataAllocator extends NSObject implements MDLMeshBufferAllocator {

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

	newBufferType(_: number, type: MDLMeshBufferType): MDLMeshBuffer;

	newBufferFromZoneDataType(_?: MDLMeshBufferZone, data: NSData, type: MDLMeshBufferType): MDLMeshBuffer;

	newBufferFromZoneLengthType(_?: MDLMeshBufferZone, length: number, type: MDLMeshBufferType): MDLMeshBuffer;

	newBufferWithDataType(_: NSData, type: MDLMeshBufferType): MDLMeshBuffer;

	newZone(_: number): MDLMeshBufferZone;

	newZoneForBuffersWithSizeAndType(_: NSArray<number>, andType: NSArray<number>): MDLMeshBufferZone;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDLMeshBufferMap extends NSObject {

	readonly bytes: any;

	static create(bytes: any, deallocator: () => void);
}

enum MDLMeshBufferType {

	Vertex = 1,

	Index = 2
}


interface MDLMeshBufferZone extends NSObjectProtocol {

	allocator: MDLMeshBufferAllocator;

	capacity: number;
}
declare var MDLMeshBufferZone: {

	prototype: MDLMeshBufferZone;
};

declare class MDLMeshBufferZoneDefault extends NSObject implements MDLMeshBufferZone {

	readonly allocator: MDLMeshBufferAllocator; // inherited from MDLMeshBufferZone

	readonly capacity: number; // inherited from MDLMeshBufferZone

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

interface MDLNamed {

	setName(_: string)

	name: string;
}
declare var MDLNamed: {

	prototype: MDLNamed;
};

declare class MDLNoiseTexture extends MDLTexture {

	static irradianceTextureCubeWithTextureNameDimensions(_: MDLTexture, name?: string, dimensions: number): MDLNoiseTexture; // inherited from MDLTexture

	static irradianceTextureCubeWithTextureNameDimensionsRoughness(_: MDLTexture, name?: string, dimensions: number, roughness: number): MDLNoiseTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamed(_: NSArray<string>): MDLNoiseTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamedBundle(_: NSArray<string>, bundle?: NSBundle): MDLNoiseTexture; // inherited from MDLTexture

	static textureNamed(_: string): MDLNoiseTexture; // inherited from MDLTexture

	static textureNamedAssetResolver(_: string, assetResolver: MDLAssetResolver): MDLNoiseTexture; // inherited from MDLTexture

	static textureNamedBundle(_: string, bundle?: NSBundle): MDLNoiseTexture; // inherited from MDLTexture

	static create(cellularNoiseWithFrequency: number, name: string, textureDimensions: number, channelEncoding: MDLTextureChannelEncoding);

	static create(scalarNoiseWithSmoothness: number, name: string, textureDimensions: number, channelCount: number, channelEncoding: MDLTextureChannelEncoding, grayscale: boolean);

	static create(vectorNoiseWithSmoothness: number, name: string, textureDimensions: number, channelEncoding: MDLTextureChannelEncoding);
}

declare class MDLNormalMapTexture extends MDLTexture {

	static irradianceTextureCubeWithTextureNameDimensions(_: MDLTexture, name?: string, dimensions: number): MDLNormalMapTexture; // inherited from MDLTexture

	static irradianceTextureCubeWithTextureNameDimensionsRoughness(_: MDLTexture, name?: string, dimensions: number, roughness: number): MDLNormalMapTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamed(_: NSArray<string>): MDLNormalMapTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamedBundle(_: NSArray<string>, bundle?: NSBundle): MDLNormalMapTexture; // inherited from MDLTexture

	static textureNamed(_: string): MDLNormalMapTexture; // inherited from MDLTexture

	static textureNamedAssetResolver(_: string, assetResolver: MDLAssetResolver): MDLNormalMapTexture; // inherited from MDLTexture

	static textureNamedBundle(_: string, bundle?: NSBundle): MDLNormalMapTexture; // inherited from MDLTexture

	static create(byGeneratingNormalMapWithTexture: MDLTexture, name: string, smoothness: number, contrast: number);
}

declare class MDLObject extends NSObject implements MDLNamed {

	static objectWithSCNNode(_: SCNNode): MDLObject;

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLObject;

	setChildren(_: MDLObjectContainerComponent)

	children: MDLObjectContainerComponent;

	readonly components: NSArray<MDLComponent>;

	setHidden(_: boolean)

	hidden: boolean;

	setInstance(_: MDLObject)

	instance: MDLObject;

	setParent(_: MDLObject)

	parent: MDLObject;

	readonly path: string;

	setTransform(_: MDLTransformComponent)

	transform: MDLTransformComponent;

	setName(_: string)

	name: string; // inherited from MDLNamed

	addChild(_: MDLObject): void;

	boundingBoxAtTime(_: number): MDLAxisAlignedBoundingBox;

	componentConformingToProtocol(_: any /* Protocol */): MDLComponent;

	enumerateChildObjectsOfClassRootUsingBlockStopPointer(_: typeof NSObject, root: MDLObject, usingBlock: (p1: MDLObject, p2: boolean) => void, stopPointer: boolean): void;

	objectAtPath(_: string): MDLObject;

	objectForKeyedSubscript(_: any /* Protocol */): MDLComponent;

	setComponentForProtocol(_: MDLComponent, forProtocol: any /* Protocol */): void;

	setObjectForKeyedSubscript(_?: MDLComponent, forKeyedSubscript: any /* Protocol */): void;
}

declare class MDLObjectContainer extends NSObject implements MDLObjectContainerComponent {

	readonly count: number; // inherited from MDLObjectContainerComponent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly objects: NSArray<MDLObject>; // inherited from MDLObjectContainerComponent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addObject(_: MDLObject): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	objectAtIndexedSubscript(_: number): MDLObject;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeObject(_: MDLObject): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

interface MDLObjectContainerComponent extends MDLComponent, NSFastEnumeration {

	count: number;

	objects: NSArray<MDLObject>;

	addObject(_: MDLObject): void;

	objectAtIndexedSubscript(_: number): MDLObject;

	removeObject(_: MDLObject): void;
}
declare var MDLObjectContainerComponent: {

	prototype: MDLObjectContainerComponent;
};

declare class MDLPackedJointAnimation extends MDLObject implements MDLJointAnimation, NSCopying {

	static objectWithSCNNode(_: SCNNode): MDLPackedJointAnimation; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLPackedJointAnimation; // inherited from MDLObject

	readonly jointPaths: NSArray<string>;

	readonly rotations: MDLAnimatedQuaternionArray;

	readonly scales: MDLAnimatedVector3Array;

	readonly translations: MDLAnimatedVector3Array;

	static create(name: string, jointPaths: NSArray<string> | string[]);

	copyWithZone(_?: any): any;
}

declare class MDLPathAssetResolver extends NSObject implements MDLAssetResolver {

	setPath(_: string)

	path: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(path: string);

	canResolveAssetNamed(_: string): boolean;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	resolveAssetNamed(_: string): NSURL;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDLPhotometricLight extends MDLPhysicallyPlausibleLight {

	static lightWithSCNLight(_: SCNLight): MDLPhotometricLight; // inherited from MDLLight

	static objectWithSCNNode(_: SCNNode): MDLPhotometricLight; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLPhotometricLight; // inherited from MDLObject

	readonly lightCubeMap: MDLTexture;

	readonly sphericalHarmonicsCoefficients: NSData;

	readonly sphericalHarmonicsLevel: number;

	static create(IESProfile: NSURL);

	generateCubemapFromLight(_: number): void;

	generateSphericalHarmonicsFromLight(_: number): void;

	generateTexture(_: number): MDLTexture;
}

declare class MDLPhysicallyPlausibleLight extends MDLLight {

	static lightWithSCNLight(_: SCNLight): MDLPhysicallyPlausibleLight; // inherited from MDLLight

	static objectWithSCNNode(_: SCNNode): MDLPhysicallyPlausibleLight; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLPhysicallyPlausibleLight; // inherited from MDLObject

	setAttenuationEndDistance(_: number)

	attenuationEndDistance: number;

	setAttenuationStartDistance(_: number)

	attenuationStartDistance: number;

	setColor(_: any)

	color: any;

	setInnerConeAngle(_: number)

	innerConeAngle: number;

	setLumens(_: number)

	lumens: number;

	setOuterConeAngle(_: number)

	outerConeAngle: number;

	setColorByTemperature(_: number): void;
}

declare class MDLPhysicallyPlausibleScatteringFunction extends MDLScatteringFunction {

	readonly anisotropic: MDLMaterialProperty;

	readonly anisotropicRotation: MDLMaterialProperty;

	readonly clearcoat: MDLMaterialProperty;

	readonly clearcoatGloss: MDLMaterialProperty;

	readonly metallic: MDLMaterialProperty;

	readonly roughness: MDLMaterialProperty;

	readonly sheen: MDLMaterialProperty;

	readonly sheenTint: MDLMaterialProperty;

	readonly specularAmount: MDLMaterialProperty;

	readonly specularTint: MDLMaterialProperty;

	readonly subsurface: MDLMaterialProperty;

	readonly version: number;
}

enum MDLProbePlacement {

	UniformGrid = 0,

	IrradianceDistribution = 1
}


declare class MDLRelativeAssetResolver extends NSObject implements MDLAssetResolver {

	setAsset(_: MDLAsset)

	asset: MDLAsset;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(asset: MDLAsset);

	canResolveAssetNamed(_: string): boolean;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	resolveAssetNamed(_: string): NSURL;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDLScatteringFunction extends NSObject implements MDLNamed {

	readonly ambientOcclusion: MDLMaterialProperty;

	readonly ambientOcclusionScale: MDLMaterialProperty;

	readonly baseColor: MDLMaterialProperty;

	readonly emission: MDLMaterialProperty;

	readonly interfaceIndexOfRefraction: MDLMaterialProperty;

	readonly materialIndexOfRefraction: MDLMaterialProperty;

	readonly normal: MDLMaterialProperty;

	readonly specular: MDLMaterialProperty;

	setName(_: string)

	name: string; // inherited from MDLNamed
}

declare class MDLSkeleton extends MDLObject implements NSCopying {

	static objectWithSCNNode(_: SCNNode): MDLSkeleton; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLSkeleton; // inherited from MDLObject

	readonly jointBindTransforms: MDLMatrix4x4Array;

	readonly jointPaths: NSArray<string>;

	readonly jointRestTransforms: MDLMatrix4x4Array;

	static create(name: string, jointPaths: NSArray<string> | string[]);

	copyWithZone(_?: any): any;
}

declare class MDLSkyCubeTexture extends MDLTexture {

	static irradianceTextureCubeWithTextureNameDimensions(_: MDLTexture, name?: string, dimensions: number): MDLSkyCubeTexture; // inherited from MDLTexture

	static irradianceTextureCubeWithTextureNameDimensionsRoughness(_: MDLTexture, name?: string, dimensions: number, roughness: number): MDLSkyCubeTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamed(_: NSArray<string>): MDLSkyCubeTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamedBundle(_: NSArray<string>, bundle?: NSBundle): MDLSkyCubeTexture; // inherited from MDLTexture

	static textureNamed(_: string): MDLSkyCubeTexture; // inherited from MDLTexture

	static textureNamedAssetResolver(_: string, assetResolver: MDLAssetResolver): MDLSkyCubeTexture; // inherited from MDLTexture

	static textureNamedBundle(_: string, bundle?: NSBundle): MDLSkyCubeTexture; // inherited from MDLTexture

	setBrightness(_: number)

	brightness: number;

	setContrast(_: number)

	contrast: number;

	setExposure(_: number)

	exposure: number;

	setGamma(_: number)

	gamma: number;

	setGroundAlbedo(_: number)

	groundAlbedo: number;

	setGroundColor(_: any)

	groundColor: any;

	setHighDynamicRangeCompression(_: number)

	highDynamicRangeCompression: number;

	setHorizonElevation(_: number)

	horizonElevation: number;

	setSaturation(_: number)

	saturation: number;

	setSunAzimuth(_: number)

	sunAzimuth: number;

	setSunElevation(_: number)

	sunElevation: number;

	setTurbidity(_: number)

	turbidity: number;

	setUpperAtmosphereScattering(_: number)

	upperAtmosphereScattering: number;

	static create(name: string, channelEncoding: MDLTextureChannelEncoding, textureDimensions: number, turbidity: number, sunElevation: number, sunAzimuth: number, upperAtmosphereScattering: number, groundAlbedo: number);

	static create(name: string, channelEncoding: MDLTextureChannelEncoding, textureDimensions: number, turbidity: number, sunElevation: number, upperAtmosphereScattering: number, groundAlbedo: number);

	updateTexture(): void;
}

declare class MDLStereoscopicCamera extends MDLCamera {

	static cameraWithSCNCamera(_: SCNCamera): MDLStereoscopicCamera; // inherited from MDLCamera

	static objectWithSCNNode(_: SCNNode): MDLStereoscopicCamera; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLStereoscopicCamera; // inherited from MDLObject

	setInterPupillaryDistance(_: number)

	interPupillaryDistance: number;

	readonly leftProjectionMatrix: simd_float4x4;

	setLeftVergence(_: number)

	leftVergence: number;

	readonly leftViewMatrix: simd_float4x4;

	setOverlap(_: number)

	overlap: number;

	readonly rightProjectionMatrix: simd_float4x4;

	setRightVergence(_: number)

	rightVergence: number;

	readonly rightViewMatrix: simd_float4x4;
}

declare class MDLSubmesh extends NSObject implements MDLNamed {

	static submeshWithSCNGeometryElement(_: SCNGeometryElement): MDLSubmesh;

	static submeshWithSCNGeometryElementBufferAllocator(_: SCNGeometryElement, bufferAllocator?: MDLMeshBufferAllocator): MDLSubmesh;

	readonly geometryType: MDLGeometryType;

	readonly indexBuffer: MDLMeshBuffer;

	readonly indexCount: number;

	readonly indexType: MDLIndexBitDepth;

	setMaterial(_: MDLMaterial)

	material: MDLMaterial;

	setTopology(_: MDLSubmeshTopology)

	topology: MDLSubmeshTopology;

	setName(_: string)

	name: string; // inherited from MDLNamed

	static create(indexBuffer: MDLMeshBuffer, indexCount: number, indexType: MDLIndexBitDepth, geometryType: MDLGeometryType, material: MDLMaterial);

	static create(MDLSubmesh: MDLSubmesh, indexType: MDLIndexBitDepth, geometryType: MDLGeometryType);

	static create(name: string, indexBuffer: MDLMeshBuffer, indexCount: number, indexType: MDLIndexBitDepth, geometryType: MDLGeometryType, material: MDLMaterial);

	static create(name: string, indexBuffer: MDLMeshBuffer, indexCount: number, indexType: MDLIndexBitDepth, geometryType: MDLGeometryType, material: MDLMaterial, topology: MDLSubmeshTopology);

	indexBufferAsIndexType(_: MDLIndexBitDepth): MDLMeshBuffer;
}

declare class MDLSubmeshTopology extends NSObject {

	setEdgeCreaseCount(_: number)

	edgeCreaseCount: number;

	setEdgeCreaseIndices(_: MDLMeshBuffer)

	edgeCreaseIndices: MDLMeshBuffer;

	setEdgeCreases(_: MDLMeshBuffer)

	edgeCreases: MDLMeshBuffer;

	setFaceCount(_: number)

	faceCount: number;

	setFaceTopology(_: MDLMeshBuffer)

	faceTopology: MDLMeshBuffer;

	setHoleCount(_: number)

	holeCount: number;

	setHoles(_: MDLMeshBuffer)

	holes: MDLMeshBuffer;

	setVertexCreaseCount(_: number)

	vertexCreaseCount: number;

	setVertexCreaseIndices(_: MDLMeshBuffer)

	vertexCreaseIndices: MDLMeshBuffer;

	setVertexCreases(_: MDLMeshBuffer)

	vertexCreases: MDLMeshBuffer;

	static create(submesh: MDLSubmesh);
}

declare class MDLTexture extends NSObject implements MDLNamed {

	static irradianceTextureCubeWithTextureNameDimensions(_: MDLTexture, name?: string, dimensions: number): MDLTexture;

	static irradianceTextureCubeWithTextureNameDimensionsRoughness(_: MDLTexture, name?: string, dimensions: number, roughness: number): MDLTexture;

	static textureCubeWithImagesNamed(_: NSArray<string>): MDLTexture;

	static textureCubeWithImagesNamedBundle(_: NSArray<string>, bundle?: NSBundle): MDLTexture;

	static textureNamed(_: string): MDLTexture;

	static textureNamedAssetResolver(_: string, assetResolver: MDLAssetResolver): MDLTexture;

	static textureNamedBundle(_: string, bundle?: NSBundle): MDLTexture;

	readonly channelCount: number;

	readonly channelEncoding: MDLTextureChannelEncoding;

	readonly dimensions: number;

	setHasAlphaValues(_: boolean)

	hasAlphaValues: boolean;

	setIsCube(_: boolean)

	isCube: boolean;

	readonly mipLevelCount: number;

	readonly rowStride: number;

	setName(_: string)

	name: string; // inherited from MDLNamed

	static create(data: NSData, topLeftOrigin: boolean, name: string, dimensions: number, rowStride: number, channelCount: number, channelEncoding: MDLTextureChannelEncoding, isCube: boolean);

	imageFromTexture(): any;

	imageFromTextureAtLevel(_: number): any;

	texelDataWithBottomLeftOrigin(): NSData;

	texelDataWithBottomLeftOriginAtMipLevelCreate(_: number, create: boolean): NSData;

	texelDataWithTopLeftOrigin(): NSData;

	texelDataWithTopLeftOriginAtMipLevelCreate(_: number, create: boolean): NSData;

	writeToURL(_: NSURL): boolean;

	writeToURLLevel(_: NSURL, level: number): boolean;

	writeToURLType(_: NSURL, type: string): boolean;

	writeToURLTypeLevel(_: NSURL, type: string, level: number): boolean;
}

enum MDLTextureChannelEncoding {

	UInt8 = 1,

	Uint8 = 1,

	UInt16 = 2,

	Uint16 = 2,

	UInt24 = 3,

	Uint24 = 3,

	UInt32 = 4,

	Uint32 = 4,

	Float16 = 258,

	Float16SR = 770,

	Float32 = 260
}


declare class MDLTextureFilter extends NSObject {

	setMagFilter(_: MDLMaterialTextureFilterMode)

	magFilter: MDLMaterialTextureFilterMode;

	setMinFilter(_: MDLMaterialTextureFilterMode)

	minFilter: MDLMaterialTextureFilterMode;

	setMipFilter(_: MDLMaterialMipMapFilterMode)

	mipFilter: MDLMaterialMipMapFilterMode;

	setRWrapMode(_: MDLMaterialTextureWrapMode)

	rWrapMode: MDLMaterialTextureWrapMode;

	setSWrapMode(_: MDLMaterialTextureWrapMode)

	sWrapMode: MDLMaterialTextureWrapMode;

	setTWrapMode(_: MDLMaterialTextureWrapMode)

	tWrapMode: MDLMaterialTextureWrapMode;
}

declare class MDLTextureSampler extends NSObject {

	setHardwareFilter(_: MDLTextureFilter)

	hardwareFilter: MDLTextureFilter;

	setTexture(_: MDLTexture)

	texture: MDLTexture;

	setTransform(_: MDLTransform)

	transform: MDLTransform;
}

declare class MDLTransform extends NSObject implements MDLTransformComponent, NSCopying {

	static globalTransformWithObjectAtTime(_: MDLObject, atTime: number): simd_float4x4;

	setRotation(_: number)

	rotation: number;

	setScale(_: number)

	scale: number;

	setShear(_: number)

	shear: number;

	setTranslation(_: number)

	translation: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly keyTimes: NSArray<number>; // inherited from MDLTransformComponent

	setMatrix(_: simd_float4x4)

	matrix: simd_float4x4; // inherited from MDLTransformComponent

	readonly maximumTime: number; // inherited from MDLTransformComponent

	readonly minimumTime: number; // inherited from MDLTransformComponent

	setResetsTransform(_: boolean)

	resetsTransform: boolean; // inherited from MDLTransformComponent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(matrix: simd_float4x4);

	static create(matrix: simd_float4x4, resetsTransform: boolean);

	static create(transformComponent: MDLTransformComponent);

	static create(transformComponent: MDLTransformComponent, resetsTransform: boolean);

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	localTransformAtTime(_: number): simd_float4x4;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	rotationAtTime(_: number): number;

	rotationMatrixAtTime(_: number): simd_float4x4;

	scaleAtTime(_: number): number;

	self(): this;

	setIdentity(): void;

	setLocalTransform(_: simd_float4x4): void;

	setLocalTransformForTime(_: simd_float4x4, forTime: number): void;

	setMatrixForTime(_: simd_float4x4, forTime: number): void;

	setRotationForTime(_: number, forTime: number): void;

	setScaleForTime(_: number, forTime: number): void;

	setShearForTime(_: number, forTime: number): void;

	setTranslationForTime(_: number, forTime: number): void;

	shearAtTime(_: number): number;

	translationAtTime(_: number): number;
}

interface MDLTransformComponent extends MDLComponent {

	keyTimes: NSArray<number>;

	setMatrix(_: simd_float4x4)

	matrix: simd_float4x4;

	maximumTime: number;

	minimumTime: number;

	setResetsTransform(_: boolean)

	resetsTransform: boolean;

	localTransformAtTime?(_: number): simd_float4x4;

	setLocalTransform?(_: simd_float4x4): void;

	setLocalTransformForTime?(_: simd_float4x4, forTime: number): void;
}
declare var MDLTransformComponent: {

	prototype: MDLTransformComponent;

	globalTransformWithObjectAtTime?(_: MDLObject, atTime: number): simd_float4x4;
};

declare class MDLTransformMatrixOp extends NSObject implements MDLTransformOp {

	readonly animatedValue: MDLAnimatedMatrix4x4;

	readonly name: string; // inherited from MDLTransformOp

	IsInverseOp(): boolean;

	double4x4AtTime(_: number): simd_double4x4;

	float4x4AtTime(_: number): simd_float4x4;
}

interface MDLTransformOp {

	name: string;

	double4x4AtTime(_: number): simd_double4x4;

	float4x4AtTime(_: number): simd_float4x4;

	IsInverseOp(): boolean;
}
declare var MDLTransformOp: {

	prototype: MDLTransformOp;
};

enum MDLTransformOpRotationOrder {

	XYZ = 1,

	XZY = 2,

	YXZ = 3,

	YZX = 4,

	ZXY = 5,

	ZYX = 6
}


declare class MDLTransformOrientOp extends NSObject implements MDLTransformOp {

	readonly animatedValue: MDLAnimatedQuaternion;

	readonly name: string; // inherited from MDLTransformOp

	IsInverseOp(): boolean;

	double4x4AtTime(_: number): simd_double4x4;

	float4x4AtTime(_: number): simd_float4x4;
}

declare class MDLTransformRotateOp extends NSObject implements MDLTransformOp {

	readonly animatedValue: MDLAnimatedVector3;

	readonly name: string; // inherited from MDLTransformOp

	IsInverseOp(): boolean;

	double4x4AtTime(_: number): simd_double4x4;

	float4x4AtTime(_: number): simd_float4x4;
}

declare class MDLTransformRotateXOp extends NSObject implements MDLTransformOp {

	readonly animatedValue: MDLAnimatedScalar;

	readonly name: string; // inherited from MDLTransformOp

	IsInverseOp(): boolean;

	double4x4AtTime(_: number): simd_double4x4;

	float4x4AtTime(_: number): simd_float4x4;
}

declare class MDLTransformRotateYOp extends NSObject implements MDLTransformOp {

	readonly animatedValue: MDLAnimatedScalar;

	readonly name: string; // inherited from MDLTransformOp

	IsInverseOp(): boolean;

	double4x4AtTime(_: number): simd_double4x4;

	float4x4AtTime(_: number): simd_float4x4;
}

declare class MDLTransformRotateZOp extends NSObject implements MDLTransformOp {

	readonly animatedValue: MDLAnimatedScalar;

	readonly name: string; // inherited from MDLTransformOp

	IsInverseOp(): boolean;

	double4x4AtTime(_: number): simd_double4x4;

	float4x4AtTime(_: number): simd_float4x4;
}

declare class MDLTransformScaleOp extends NSObject implements MDLTransformOp {

	readonly animatedValue: MDLAnimatedVector3;

	readonly name: string; // inherited from MDLTransformOp

	IsInverseOp(): boolean;

	double4x4AtTime(_: number): simd_double4x4;

	float4x4AtTime(_: number): simd_float4x4;
}

declare class MDLTransformStack extends NSObject implements MDLTransformComponent, NSCopying {

	static globalTransformWithObjectAtTime(_: MDLObject, atTime: number): simd_float4x4;

	readonly transformOps: NSArray<MDLTransformOp>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly keyTimes: NSArray<number>; // inherited from MDLTransformComponent

	setMatrix(_: simd_float4x4)

	matrix: simd_float4x4; // inherited from MDLTransformComponent

	readonly maximumTime: number; // inherited from MDLTransformComponent

	readonly minimumTime: number; // inherited from MDLTransformComponent

	setResetsTransform(_: boolean)

	resetsTransform: boolean; // inherited from MDLTransformComponent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addMatrixOpInverse(_: string, inverse: boolean): MDLTransformMatrixOp;

	addOrientOpInverse(_: string, inverse: boolean): MDLTransformOrientOp;

	addRotateOpOrderInverse(_: string, order: MDLTransformOpRotationOrder, inverse: boolean): MDLTransformRotateOp;

	addRotateXOpInverse(_: string, inverse: boolean): MDLTransformRotateXOp;

	addRotateYOpInverse(_: string, inverse: boolean): MDLTransformRotateYOp;

	addRotateZOpInverse(_: string, inverse: boolean): MDLTransformRotateZOp;

	addScaleOpInverse(_: string, inverse: boolean): MDLTransformScaleOp;

	addTranslateOpInverse(_: string, inverse: boolean): MDLTransformTranslateOp;

	animatedValueWithName(_: string): MDLAnimatedValue;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	count(): number;

	double4x4AtTime(_: number): simd_double4x4;

	float4x4AtTime(_: number): simd_float4x4;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	localTransformAtTime(_: number): simd_float4x4;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setLocalTransform(_: simd_float4x4): void;

	setLocalTransformForTime(_: simd_float4x4, forTime: number): void;
}

declare class MDLTransformTranslateOp extends NSObject implements MDLTransformOp {

	readonly animatedValue: MDLAnimatedVector3;

	readonly name: string; // inherited from MDLTransformOp

	IsInverseOp(): boolean;

	double4x4AtTime(_: number): simd_double4x4;

	float4x4AtTime(_: number): simd_float4x4;
}

declare class MDLURLTexture extends MDLTexture {

	static irradianceTextureCubeWithTextureNameDimensions(_: MDLTexture, name?: string, dimensions: number): MDLURLTexture; // inherited from MDLTexture

	static irradianceTextureCubeWithTextureNameDimensionsRoughness(_: MDLTexture, name?: string, dimensions: number, roughness: number): MDLURLTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamed(_: NSArray<string>): MDLURLTexture; // inherited from MDLTexture

	static textureCubeWithImagesNamedBundle(_: NSArray<string>, bundle?: NSBundle): MDLURLTexture; // inherited from MDLTexture

	static textureNamed(_: string): MDLURLTexture; // inherited from MDLTexture

	static textureNamedAssetResolver(_: string, assetResolver: MDLAssetResolver): MDLURLTexture; // inherited from MDLTexture

	static textureNamedBundle(_: string, bundle?: NSBundle): MDLURLTexture; // inherited from MDLTexture

	setURL(_: NSURL)

	URL: NSURL;

	static create(URL: NSURL, name: string);
}

declare class MDLVertexAttribute extends NSObject implements NSCopying {

	setBufferIndex(_: number)

	bufferIndex: number;

	setFormat(_: MDLVertexFormat)

	format: MDLVertexFormat;

	setInitializationValue(_: number)

	initializationValue: number;

	setName(_: string)

	name: string;

	setOffset(_: number)

	offset: number;

	setTime(_: number)

	time: number;

	static create(name: string, format: MDLVertexFormat, offset: number, bufferIndex: number);

	copyWithZone(_?: any): any;
}

declare var MDLVertexAttributeAnisotropy: string;

declare var MDLVertexAttributeBinormal: string;

declare var MDLVertexAttributeBitangent: string;

declare var MDLVertexAttributeColor: string;

declare class MDLVertexAttributeData extends NSObject {

	setBufferSize(_: number)

	bufferSize: number;

	setDataStart(_: any)

	dataStart: any;

	setFormat(_: MDLVertexFormat)

	format: MDLVertexFormat;

	setMap(_: MDLMeshBufferMap)

	map: MDLMeshBufferMap;

	setStride(_: number)

	stride: number;
}

declare var MDLVertexAttributeEdgeCrease: string;

declare var MDLVertexAttributeJointIndices: string;

declare var MDLVertexAttributeJointWeights: string;

declare var MDLVertexAttributeNormal: string;

declare var MDLVertexAttributeOcclusionValue: string;

declare var MDLVertexAttributePosition: string;

declare var MDLVertexAttributeShadingBasisU: string;

declare var MDLVertexAttributeShadingBasisV: string;

declare var MDLVertexAttributeSubdivisionStencil: string;

declare var MDLVertexAttributeTangent: string;

declare var MDLVertexAttributeTextureCoordinate: string;

declare class MDLVertexBufferLayout extends NSObject implements NSCopying {

	setStride(_: number)

	stride: number;

	static create(stride: number);

	copyWithZone(_?: any): any;
}

declare class MDLVertexDescriptor extends NSObject implements NSCopying {

	setAttributes(_: NSMutableArray<MDLVertexAttribute>)

	attributes: NSMutableArray<MDLVertexAttribute>;

	setLayouts(_: NSMutableArray<MDLVertexBufferLayout>)

	layouts: NSMutableArray<MDLVertexBufferLayout>;

	static create(vertexDescriptor: MDLVertexDescriptor);

	addOrReplaceAttribute(_: MDLVertexAttribute): void;

	attributeNamed(_: string): MDLVertexAttribute;

	copyWithZone(_?: any): any;

	removeAttributeNamed(_: string): void;

	reset(): void;

	setPackedOffsets(): void;

	setPackedStrides(): void;
}

enum MDLVertexFormat {

	Invalid = 0,

	PackedBit = 4096,

	UCharBits = 65536,

	CharBits = 131072,

	UCharNormalizedBits = 196608,

	CharNormalizedBits = 262144,

	UShortBits = 327680,

	ShortBits = 393216,

	UShortNormalizedBits = 458752,

	ShortNormalizedBits = 524288,

	UIntBits = 589824,

	IntBits = 655360,

	HalfBits = 720896,

	FloatBits = 786432,

	UChar = 65537,

	UChar2 = 65538,

	UChar3 = 65539,

	UChar4 = 65540,

	Char = 131073,

	Char2 = 131074,

	Char3 = 131075,

	Char4 = 131076,

	UCharNormalized = 196609,

	UChar2Normalized = 196610,

	UChar3Normalized = 196611,

	UChar4Normalized = 196612,

	CharNormalized = 262145,

	Char2Normalized = 262146,

	Char3Normalized = 262147,

	Char4Normalized = 262148,

	UShort = 327681,

	UShort2 = 327682,

	UShort3 = 327683,

	UShort4 = 327684,

	Short = 393217,

	Short2 = 393218,

	Short3 = 393219,

	Short4 = 393220,

	UShortNormalized = 458753,

	UShort2Normalized = 458754,

	UShort3Normalized = 458755,

	UShort4Normalized = 458756,

	ShortNormalized = 524289,

	Short2Normalized = 524290,

	Short3Normalized = 524291,

	Short4Normalized = 524292,

	UInt = 589825,

	UInt2 = 589826,

	UInt3 = 589827,

	UInt4 = 589828,

	Int = 655361,

	Int2 = 655362,

	Int3 = 655363,

	Int4 = 655364,

	Half = 720897,

	Half2 = 720898,

	Half3 = 720899,

	Half4 = 720900,

	Float = 786433,

	Float2 = 786434,

	Float3 = 786435,

	Float4 = 786436,

	Int1010102Normalized = 659460,

	UInt1010102Normalized = 593924
}


declare class MDLVoxelArray extends MDLObject {

	static objectWithSCNNode(_: SCNNode): MDLVoxelArray; // inherited from MDLObject

	static objectWithSCNNodeBufferAllocator(_: SCNNode, bufferAllocator?: MDLMeshBufferAllocator): MDLVoxelArray; // inherited from MDLObject

	readonly boundingBox: MDLAxisAlignedBoundingBox;

	readonly count: number;

	readonly isValidSignedShellField: boolean;

	setShellFieldExteriorThickness(_: number)

	shellFieldExteriorThickness: number;

	setShellFieldInteriorThickness(_: number)

	shellFieldInteriorThickness: number;

	readonly voxelIndexExtent: MDLVoxelIndexExtent;

	static create(asset: MDLAsset, divisions: number, patchRadius: number);

	static create(data: NSData, boundingBox: MDLAxisAlignedBoundingBox, voxelExtent: number);

	coarseMesh(): MDLMesh;

	coarseMeshUsingAllocator(_?: MDLMeshBufferAllocator): MDLMesh;

	convertToSignedShellField(): void;

	differenceWithVoxels(_: MDLVoxelArray): void;

	indexOfSpatialLocation(_: number): number;

	intersectWithVoxels(_: MDLVoxelArray): void;

	meshUsingAllocator(_?: MDLMeshBufferAllocator): MDLMesh;

	setVoxelAtIndex(_: number): void;

	setVoxelsForMeshDivisionsPatchRadius(_: MDLMesh, divisions: number, patchRadius: number): void;

	spatialLocationOfIndex(_: number): number;

	unionWithVoxels(_: MDLVoxelArray): void;

	voxelBoundingBoxAtIndex(_: number): MDLAxisAlignedBoundingBox;

	voxelExistsAtIndexAllowAnyXAllowAnyYAllowAnyZAllowAnyShell(_: number, allowAnyX: boolean, allowAnyY: boolean, allowAnyZ: boolean, allowAnyShell: boolean): boolean;

	voxelIndices(): NSData;

	voxelsWithinExtent(_: MDLVoxelIndexExtent): NSData;
}

interface MDLVoxelIndexExtent {
	minimumExtent: number;
	maximumExtent: number;
}
declare var MDLVoxelIndexExtent: MDLVoxelIndexExtent;

declare var kUTType3dObject: string;

declare var kUTTypeAlembic: string;

declare var kUTTypePolygon: string;

declare var kUTTypeStereolithography: string;

declare var kUTTypeUniversalSceneDescription: string;
