
declare class SCNAccelerationConstraint extends SCNConstraint {

	static accelerationConstraint(): SCNAccelerationConstraint;

	setDamping(_: number)

	damping: number;

	setDecelerationDistance(_: number)

	decelerationDistance: number;

	setMaximumLinearAcceleration(_: number)

	maximumLinearAcceleration: number;

	setMaximumLinearVelocity(_: number)

	maximumLinearVelocity: number;
}

declare class SCNAction extends NSObject implements NSCopying, NSSecureCoding {

	static customActionWithDurationActionBlock(duration: number, action: (p1: SCNNode, p2: number) => void): SCNAction;

	static fadeInWithDuration(duration: number): SCNAction;

	static fadeOpacityToDuration(_: number, duration: number): SCNAction;

	static fadeOutWithDuration(duration: number): SCNAction;

	static group(_: NSArray<SCNAction>): SCNAction;

	static hide(): SCNAction;

	static javaScriptActionWithScriptDuration(_: string, duration: number): SCNAction;

	static moveByDuration(_: SCNVector3, duration: number): SCNAction;

	static moveByXYZDuration(_: number, y: number, z: number, duration: number): SCNAction;

	static moveToDuration(_: SCNVector3, duration: number): SCNAction;

	static playAudioSourceWaitForCompletion(_: SCNAudioSource, waitForCompletion: boolean): SCNAction;

	static removeFromParentNode(): SCNAction;

	static repeatActionCount(_: SCNAction, count: number): SCNAction;

	static repeatActionForever(_: SCNAction): SCNAction;

	static rotateByAngleAroundAxisDuration(by: number, around: SCNVector3, duration: number): SCNAction;

	static rotateByXYZDuration(_: number, y: number, z: number, duration: number): SCNAction;

	static rotateToAxisAngleDuration(_: SCNVector4, duration: number): SCNAction;

	static rotateToXYZDuration(_: number, y: number, z: number, duration: number): SCNAction;

	static rotateToXYZDurationShortestUnitArc(x: number, y: number, z: number, duration: number, usesShortestUnitArc: boolean): SCNAction;

	static runBlock(_: (p1: SCNNode) => void): SCNAction;

	static runBlockQueue(_: (p1: SCNNode) => void, queue: NSObject): SCNAction;

	static scaleByDuration(_: number, duration: number): SCNAction;

	static scaleToDuration(_: number, duration: number): SCNAction;

	static sequence(_: NSArray<SCNAction>): SCNAction;

	static unhide(): SCNAction;

	static waitForDuration(duration: number): SCNAction;

	static waitForDurationWithRange(duration: number, withRange: number): SCNAction;

	setDuration(_: number)

	duration: number;

	setSpeed(_: number)

	speed: number;

	setTimingFunction(_: (p1: number) => number)

	timingFunction: (p1: number) => number;

	setTimingMode(_: SCNActionTimingMode)

	timingMode: SCNActionTimingMode;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	reversedAction(): SCNAction;
}

enum SCNActionTimingMode {

	Linear = 0,

	EaseIn = 1,

	EaseOut = 2,

	EaseInEaseOut = 3
}


interface SCNActionable extends NSObjectProtocol {

	actionKeys: NSArray<string>;

	hasActions: boolean;

	actionForKey(_: string): SCNAction;

	removeActionForKey(_: string): void;

	removeAllActions(): void;

	runAction(_: SCNAction): void;

	runActionCompletionHandler(_: SCNAction, completionHandler?: () => void): void;

	runActionForKey(_: SCNAction, forKey?: string): void;

	runActionForKeyCompletionHandler(_: SCNAction, forKey?: string, completionHandler?: () => void): void;
}
declare var SCNActionable: {

	prototype: SCNActionable;
};

interface SCNAnimatable extends NSObjectProtocol {

	animationKeys: NSArray<string>;

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;
}
declare var SCNAnimatable: {

	prototype: SCNAnimatable;
};

declare class SCNAnimation extends NSObject implements NSCopying, NSSecureCoding, SCNAnimationProtocol {

	static animationNamed(_: string): SCNAnimation;

	static animationWithCAAnimation(_: CAAnimation): SCNAnimation;

	static animationWithContentsOfURL(_: NSURL): SCNAnimation;

	setAdditive(_: boolean)

	isAdditive: boolean;

	setAnimationDidStart(_: (p1: SCNAnimation, p2: SCNAnimatable) => void)

	animationDidStart: (p1: SCNAnimation, p2: SCNAnimatable) => void;

	setAnimationDidStop(_: (p1: SCNAnimation, p2: SCNAnimatable, p3: boolean) => void)

	animationDidStop: (p1: SCNAnimation, p2: SCNAnimatable, p3: boolean) => void;

	setAnimationEvents(_: NSArray<SCNAnimationEvent>)

	animationEvents: NSArray<SCNAnimationEvent>;

	setAppliedOnCompletion(_: boolean)

	isAppliedOnCompletion: boolean;

	setAutoreverses(_: boolean)

	autoreverses: boolean;

	setBlendInDuration(_: number)

	blendInDuration: number;

	setBlendOutDuration(_: number)

	blendOutDuration: number;

	setCumulative(_: boolean)

	isCumulative: boolean;

	setDuration(_: number)

	duration: number;

	setFillsBackward(_: boolean)

	fillsBackward: boolean;

	setFillsForward(_: boolean)

	fillsForward: boolean;

	setKeyPath(_: string)

	keyPath: string;

	setRemovedOnCompletion(_: boolean)

	isRemovedOnCompletion: boolean;

	setRepeatCount(_: number)

	repeatCount: number;

	setStartDelay(_: number)

	startDelay: number;

	setTimeOffset(_: number)

	timeOffset: number;

	setTimingFunction(_: SCNTimingFunction)

	timingFunction: SCNTimingFunction;

	setUsesSceneTimeBase(_: boolean)

	usesSceneTimeBase: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

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

declare class SCNAnimationEvent extends NSObject {

	static animationEventWithKeyTimeBlock(_: number, block: (p1: SCNAnimationProtocol, p2: any, p3: boolean) => void): SCNAnimationEvent;
}

declare class SCNAnimationPlayer extends NSObject implements NSCopying, NSSecureCoding, SCNAnimatable {

	static animationPlayerWithAnimation(_: SCNAnimation): SCNAnimationPlayer;

	readonly animation: SCNAnimation;

	setBlendFactor(_: number)

	blendFactor: number;

	setPaused(_: boolean)

	paused: boolean;

	setSpeed(_: number)

	speed: number;

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	play(): void;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	stop(): void;

	stopWithBlendOutDuration(_: number): void;
}

interface SCNAnimationProtocol extends NSObjectProtocol {
}
declare var SCNAnimationProtocol: {

	prototype: SCNAnimationProtocol;
};

enum SCNAntialiasingMode {

	None = 0,

	Multisampling2X = 1,

	Multisampling4X = 2,

	Multisampling8X = 3,

	Multisampling16X = 4
}


declare class SCNAudioPlayer extends NSObject {

	static audioPlayerWithAVAudioNode(_: AVAudioNode): SCNAudioPlayer;

	static audioPlayerWithSource(_: SCNAudioSource): SCNAudioPlayer;

	readonly audioNode: AVAudioNode;

	readonly audioSource: SCNAudioSource;

	setDidFinishPlayback(_: () => void)

	didFinishPlayback: () => void;

	setWillStartPlayback(_: () => void)

	willStartPlayback: () => void;

	static create(AVAudioNode: AVAudioNode);

	static create(source: SCNAudioSource);
}

declare class SCNAudioSource extends NSObject implements NSCopying, NSSecureCoding {

	static audioSourceNamed(_: string): SCNAudioSource;

	setLoops(_: boolean)

	loops: boolean;

	setPositional(_: boolean)

	isPositional: boolean;

	setRate(_: number)

	rate: number;

	setReverbBlend(_: number)

	reverbBlend: number;

	setShouldStream(_: boolean)

	shouldStream: boolean;

	setVolume(_: number)

	volume: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(fileNamed: string);

	static create(URL: NSURL);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	load(): void;
}

declare class SCNAvoidOccluderConstraint extends SCNConstraint {

	static avoidOccluderConstraintWithTarget(_?: SCNNode): SCNAvoidOccluderConstraint;

	setBias(_: number)

	bias: number;

	setDelegate(_: SCNAvoidOccluderConstraintDelegate)

	delegate: SCNAvoidOccluderConstraintDelegate;

	setOccluderCategoryBitMask(_: number)

	occluderCategoryBitMask: number;

	setTarget(_: SCNNode)

	target: SCNNode;
}

interface SCNAvoidOccluderConstraintDelegate extends NSObjectProtocol {

	avoidOccluderConstraintDidAvoidOccluderForNode?(_: SCNAvoidOccluderConstraint, didAvoidOccluder: SCNNode, forNode: SCNNode): void;

	avoidOccluderConstraintShouldAvoidOccluderForNode?(_: SCNAvoidOccluderConstraint, shouldAvoidOccluder: SCNNode, forNode: SCNNode): boolean;
}
declare var SCNAvoidOccluderConstraintDelegate: {

	prototype: SCNAvoidOccluderConstraintDelegate;
};

enum SCNBillboardAxis {

	X = 1,

	Y = 2,

	Z = 4,

	All = 7
}


declare class SCNBillboardConstraint extends SCNConstraint {

	static billboardConstraint(): SCNBillboardConstraint;

	setFreeAxes(_: SCNBillboardAxis)

	freeAxes: SCNBillboardAxis;
}

enum SCNBlendMode {

	Alpha = 0,

	Add = 1,

	Subtract = 2,

	Multiply = 3,

	Screen = 4,

	Replace = 5,

	Max = 6
}


interface SCNBoundingVolume extends NSObjectProtocol {

	getBoundingBoxMinMax(_?: SCNVector3, max?: SCNVector3): boolean;

	getBoundingSphereCenterRadius(_?: SCNVector3, radius?: number): boolean;

	setBoundingBoxMinMax(_?: SCNVector3, max?: SCNVector3): void;
}
declare var SCNBoundingVolume: {

	prototype: SCNBoundingVolume;
};

declare class SCNBox extends SCNGeometry {

	static boxWithWidthHeightLengthChamferRadius(_: number, height: number, length: number, chamferRadius: number): SCNBox;

	static geometry(): SCNBox; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNBox; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNBox; // inherited from SCNGeometry

	setChamferRadius(_: number)

	chamferRadius: number;

	setChamferSegmentCount(_: number)

	chamferSegmentCount: number;

	setHeight(_: number)

	height: number;

	setHeightSegmentCount(_: number)

	heightSegmentCount: number;

	setLength(_: number)

	length: number;

	setLengthSegmentCount(_: number)

	lengthSegmentCount: number;

	setWidth(_: number)

	width: number;

	setWidthSegmentCount(_: number)

	widthSegmentCount: number;
}

enum SCNBufferFrequency {

	PerFrame = 0,

	PerNode = 1,

	PerShadable = 2
}


interface SCNBufferStream extends NSObjectProtocol {

	writeBytesLength(_: any, length: number): void;
}
declare var SCNBufferStream: {

	prototype: SCNBufferStream;
};

declare class SCNCamera extends NSObject implements NSCopying, NSSecureCoding, SCNAnimatable, SCNTechniqueSupport {

	static camera(): SCNCamera;

	static cameraWithMDLCamera(_: MDLCamera): SCNCamera;

	setApertureBladeCount(_: number)

	apertureBladeCount: number;

	setAutomaticallyAdjustsZRange(_: boolean)

	automaticallyAdjustsZRange: boolean;

	setAverageGray(_: number)

	averageGray: number;

	setBloomBlurRadius(_: number)

	bloomBlurRadius: number;

	setBloomIntensity(_: number)

	bloomIntensity: number;

	setBloomIterationCount(_: number)

	bloomIterationCount: number;

	setBloomIterationSpread(_: number)

	bloomIterationSpread: number;

	setBloomThreshold(_: number)

	bloomThreshold: number;

	setCategoryBitMask(_: number)

	categoryBitMask: number;

	setColorFringeIntensity(_: number)

	colorFringeIntensity: number;

	setColorFringeStrength(_: number)

	colorFringeStrength: number;

	readonly colorGrading: SCNMaterialProperty;

	setContrast(_: number)

	contrast: number;

	setExposureAdaptationBrighteningSpeedFactor(_: number)

	exposureAdaptationBrighteningSpeedFactor: number;

	setExposureAdaptationDarkeningSpeedFactor(_: number)

	exposureAdaptationDarkeningSpeedFactor: number;

	setExposureOffset(_: number)

	exposureOffset: number;

	setFStop(_: number)

	fStop: number;

	setFieldOfView(_: number)

	fieldOfView: number;

	setFocalBlurSampleCount(_: number)

	focalBlurSampleCount: number;

	setFocalLength(_: number)

	focalLength: number;

	setFocusDistance(_: number)

	focusDistance: number;

	setGrainIntensity(_: number)

	grainIntensity: number;

	setGrainIsColored(_: boolean)

	grainIsColored: boolean;

	setGrainScale(_: number)

	grainScale: number;

	setMaximumExposure(_: number)

	maximumExposure: number;

	setMinimumExposure(_: number)

	minimumExposure: number;

	setMotionBlurIntensity(_: number)

	motionBlurIntensity: number;

	setName(_: string)

	name: string;

	setOrthographicScale(_: number)

	orthographicScale: number;

	setProjectionDirection(_: SCNCameraProjectionDirection)

	projectionDirection: SCNCameraProjectionDirection;

	setProjectionTransform(_: CATransform3D)

	projectionTransform: CATransform3D;

	setSaturation(_: number)

	saturation: number;

	setScreenSpaceAmbientOcclusionBias(_: number)

	screenSpaceAmbientOcclusionBias: number;

	setScreenSpaceAmbientOcclusionDepthThreshold(_: number)

	screenSpaceAmbientOcclusionDepthThreshold: number;

	setScreenSpaceAmbientOcclusionIntensity(_: number)

	screenSpaceAmbientOcclusionIntensity: number;

	setScreenSpaceAmbientOcclusionNormalThreshold(_: number)

	screenSpaceAmbientOcclusionNormalThreshold: number;

	setScreenSpaceAmbientOcclusionRadius(_: number)

	screenSpaceAmbientOcclusionRadius: number;

	setSensorHeight(_: number)

	sensorHeight: number;

	setUsesOrthographicProjection(_: boolean)

	usesOrthographicProjection: boolean;

	setVignettingIntensity(_: number)

	vignettingIntensity: number;

	setVignettingPower(_: number)

	vignettingPower: number;

	setWantsDepthOfField(_: boolean)

	wantsDepthOfField: boolean;

	setWantsExposureAdaptation(_: boolean)

	wantsExposureAdaptation: boolean;

	setWantsHDR(_: boolean)

	wantsHDR: boolean;

	setWhiteBalanceTemperature(_: number)

	whiteBalanceTemperature: number;

	setWhiteBalanceTint(_: number)

	whiteBalanceTint: number;

	setWhitePoint(_: number)

	whitePoint: number;

	setZFar(_: number)

	zFar: number;

	setZNear(_: number)

	zNear: number;

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setTechnique(_: SCNTechnique)

	technique: SCNTechnique; // inherited from SCNTechniqueSupport

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	projectionTransformWithViewportSize(_: CGSize): CATransform3D;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setProjectionTransform(_: CATransform3D): void;
}

interface SCNCameraControlConfiguration extends NSObjectProtocol {

	setAllowsTranslation(_: boolean)

	allowsTranslation: boolean;

	setAutoSwitchToFreeCamera(_: boolean)

	autoSwitchToFreeCamera: boolean;

	setFlyModeVelocity(_: number)

	flyModeVelocity: number;

	setPanSensitivity(_: number)

	panSensitivity: number;

	setRotationSensitivity(_: number)

	rotationSensitivity: number;

	setTruckSensitivity(_: number)

	truckSensitivity: number;
}
declare var SCNCameraControlConfiguration: {

	prototype: SCNCameraControlConfiguration;
};

declare class SCNCameraController extends NSObject {

	setAutomaticTarget(_: boolean)

	automaticTarget: boolean;

	setDelegate(_: SCNCameraControllerDelegate)

	delegate: SCNCameraControllerDelegate;

	setInertiaEnabled(_: boolean)

	inertiaEnabled: boolean;

	setInertiaFriction(_: number)

	inertiaFriction: number;

	readonly isInertiaRunning: boolean;

	setInteractionMode(_: SCNInteractionMode)

	interactionMode: SCNInteractionMode;

	setMaximumHorizontalAngle(_: number)

	maximumHorizontalAngle: number;

	setMaximumVerticalAngle(_: number)

	maximumVerticalAngle: number;

	setMinimumHorizontalAngle(_: number)

	minimumHorizontalAngle: number;

	setMinimumVerticalAngle(_: number)

	minimumVerticalAngle: number;

	setPointOfView(_: SCNNode)

	pointOfView: SCNNode;

	setTarget(_: SCNVector3)

	target: SCNVector3;

	setWorldUp(_: SCNVector3)

	worldUp: SCNVector3;

	beginInteractionWithViewport(_: CGPoint, withViewport: CGSize): void;

	clearRoll(): void;

	continueInteractionWithViewportSensitivity(_: CGPoint, withViewport: CGSize, sensitivity: number): void;

	dollyByOnScreenPointViewport(_: number, onScreenPoint: CGPoint, viewport: CGSize): void;

	dollyToTarget(_: number): void;

	endInteractionWithViewportVelocity(_: CGPoint, withViewport: CGSize, velocity: CGPoint): void;

	frameNodes(_: NSArray<SCNNode>): void;

	rollAroundTarget(_: number): void;

	rollByAroundScreenPointViewport(_: number, aroundScreenPoint: CGPoint, viewport: CGSize): void;

	rotateByXY(_: number, Y: number): void;

	stopInertia(): void;

	translateInCameraSpaceByXYZ(_: number, Y: number, Z: number): void;
}

interface SCNCameraControllerDelegate extends NSObjectProtocol {

	cameraInertiaDidEndForController?(_: SCNCameraController): void;

	cameraInertiaWillStartForController?(_: SCNCameraController): void;
}
declare var SCNCameraControllerDelegate: {

	prototype: SCNCameraControllerDelegate;
};

enum SCNCameraProjectionDirection {

	Vertical = 0,

	Horizontal = 1
}


declare class SCNCapsule extends SCNGeometry {

	static capsuleWithCapRadiusHeight(_: number, height: number): SCNCapsule;

	static geometry(): SCNCapsule; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNCapsule; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNCapsule; // inherited from SCNGeometry

	setCapRadius(_: number)

	capRadius: number;

	setCapSegmentCount(_: number)

	capSegmentCount: number;

	setHeight(_: number)

	height: number;

	setHeightSegmentCount(_: number)

	heightSegmentCount: number;

	setRadialSegmentCount(_: number)

	radialSegmentCount: number;
}

enum SCNChamferMode {

	Both = 0,

	Front = 1,

	Back = 2
}


enum SCNColorMask {

	None = 0,

	Red = 8,

	Green = 4,

	Blue = 2,

	Alpha = 1,

	All = 15
}


declare class SCNCone extends SCNGeometry {

	static coneWithTopRadiusBottomRadiusHeight(_: number, bottomRadius: number, height: number): SCNCone;

	static geometry(): SCNCone; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNCone; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNCone; // inherited from SCNGeometry

	setBottomRadius(_: number)

	bottomRadius: number;

	setHeight(_: number)

	height: number;

	setHeightSegmentCount(_: number)

	heightSegmentCount: number;

	setRadialSegmentCount(_: number)

	radialSegmentCount: number;

	setTopRadius(_: number)

	topRadius: number;
}

declare var SCNConsistencyElementIDErrorKey: string;

declare var SCNConsistencyElementTypeErrorKey: string;

declare const SCNConsistencyInvalidArgumentError: number;

declare const SCNConsistencyInvalidCountError: number;

declare const SCNConsistencyInvalidURIError: number;

declare var SCNConsistencyLineNumberErrorKey: string;

declare const SCNConsistencyMissingAttributeError: number;

declare const SCNConsistencyMissingElementError: number;

declare const SCNConsistencyXMLSchemaValidationError: number;

declare class SCNConstraint extends NSObject implements NSCopying, NSSecureCoding, SCNAnimatable {

	setEnabled(_: boolean)

	isEnabled: boolean;

	setIncremental(_: boolean)

	isIncremental: boolean;

	setInfluenceFactor(_: number)

	influenceFactor: number;

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

enum SCNCullMode {

	Back = 0,

	Front = 1
}


declare class SCNCylinder extends SCNGeometry {

	static cylinderWithRadiusHeight(_: number, height: number): SCNCylinder;

	static geometry(): SCNCylinder; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNCylinder; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNCylinder; // inherited from SCNGeometry

	setHeight(_: number)

	height: number;

	setHeightSegmentCount(_: number)

	heightSegmentCount: number;

	setRadialSegmentCount(_: number)

	radialSegmentCount: number;

	setRadius(_: number)

	radius: number;
}

enum SCNDebugOptions {

	None = 0,

	ShowPhysicsShapes = 1,

	ShowBoundingBoxes = 2,

	ShowLightInfluences = 4,

	ShowLightExtents = 8,

	ShowPhysicsFields = 16,

	ShowWireframe = 32,

	RenderAsWireframe = 64,

	ShowSkeletons = 128,

	ShowCreases = 256,

	ShowConstraints = 512,

	ShowCameras = 1024
}


declare var SCNDetailedErrorsKey: string;

declare class SCNDistanceConstraint extends SCNConstraint {

	static distanceConstraintWithTarget(_?: SCNNode): SCNDistanceConstraint;

	setMaximumDistance(_: number)

	maximumDistance: number;

	setMinimumDistance(_: number)

	minimumDistance: number;

	setTarget(_: SCNNode)

	target: SCNNode;
}

declare var SCNErrorDomain: string;

enum SCNFillMode {

	Fill = 0,

	Lines = 1
}


enum SCNFilterMode {

	None = 0,

	Nearest = 1,

	Linear = 2
}


declare class SCNFloor extends SCNGeometry {

	static floor(): SCNFloor;

	static geometry(): SCNFloor; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNFloor; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNFloor; // inherited from SCNGeometry

	setLength(_: number)

	length: number;

	setReflectionCategoryBitMask(_: number)

	reflectionCategoryBitMask: number;

	setReflectionFalloffEnd(_: number)

	reflectionFalloffEnd: number;

	setReflectionFalloffStart(_: number)

	reflectionFalloffStart: number;

	setReflectionResolutionScaleFactor(_: number)

	reflectionResolutionScaleFactor: number;

	setReflectivity(_: number)

	reflectivity: number;

	setWidth(_: number)

	width: number;
}

declare class SCNGeometry extends NSObject implements NSCopying, NSSecureCoding, SCNAnimatable, SCNBoundingVolume, SCNShadable {

	static geometry(): SCNGeometry;

	static geometryWithMDLMesh(_: MDLMesh): SCNGeometry;

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNGeometry;

	setEdgeCreasesElement(_: SCNGeometryElement)

	edgeCreasesElement: SCNGeometryElement;

	setEdgeCreasesSource(_: SCNGeometrySource)

	edgeCreasesSource: SCNGeometrySource;

	setFirstMaterial(_: SCNMaterial)

	firstMaterial: SCNMaterial;

	readonly geometryElementCount: number;

	readonly geometryElements: NSArray<SCNGeometryElement>;

	readonly geometrySources: NSArray<SCNGeometrySource>;

	setLevelsOfDetail(_: NSArray<SCNLevelOfDetail>)

	levelsOfDetail: NSArray<SCNLevelOfDetail>;

	setMaterials(_: NSArray<SCNMaterial>)

	materials: NSArray<SCNMaterial>;

	setName(_: string)

	name: string;

	setSubdivisionLevel(_: number)

	subdivisionLevel: number;

	setTessellator(_: SCNGeometryTessellator)

	tessellator: SCNGeometryTessellator;

	setWantsAdaptiveSubdivision(_: boolean)

	wantsAdaptiveSubdivision: boolean;

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setProgram(_: SCNProgram)

	program: SCNProgram; // inherited from SCNShadable

	setShaderModifiers(_: NSDictionary<string, string>)

	shaderModifiers: NSDictionary<string, string>; // inherited from SCNShadable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	geometryElementAtIndex(at: number): SCNGeometryElement;

	geometrySourcesForSemantic(for_: string): NSArray<SCNGeometrySource>;

	getBoundingBoxMinMax(_?: SCNVector3, max?: SCNVector3): boolean;

	getBoundingSphereCenterRadius(_?: SCNVector3, radius?: number): boolean;

	handleBindingOfSymbolUsingBlock(_: string, usingBlock?: (p1: number, p2: number, p3: SCNNode, p4: SCNRenderer) => void): void;

	handleUnbindingOfSymbolUsingBlock(_: string, usingBlock?: (p1: number, p2: number, p3: SCNNode, p4: SCNRenderer) => void): void;

	insertMaterialAtIndex(_: SCNMaterial, atIndex: number): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	materialWithName(named: string): SCNMaterial;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	removeMaterialAtIndex(_: number): void;

	replaceMaterialAtIndexWithMaterial(_: number, withMaterial: SCNMaterial): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setBoundingBoxMinMax(_?: SCNVector3, max?: SCNVector3): void;
}

declare class SCNGeometryElement extends NSObject implements NSSecureCoding {

	static geometryElementWithDataPrimitiveTypePrimitiveCountBytesPerIndex(_?: NSData, primitiveType: SCNGeometryPrimitiveType, primitiveCount: number, bytesPerIndex: number): SCNGeometryElement;

	static geometryElementWithMDLSubmesh(_: MDLSubmesh): SCNGeometryElement;

	readonly bytesPerIndex: number;

	readonly data: NSData;

	setMaximumPointScreenSpaceRadius(_: number)

	maximumPointScreenSpaceRadius: number;

	setMinimumPointScreenSpaceRadius(_: number)

	minimumPointScreenSpaceRadius: number;

	setPointSize(_: number)

	pointSize: number;

	readonly primitiveCount: number;

	setPrimitiveRange(_: NSRange)

	primitiveRange: NSRange;

	readonly primitiveType: SCNGeometryPrimitiveType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum SCNGeometryPrimitiveType {

	Triangles = 0,

	TriangleStrip = 1,

	Line = 2,

	Point = 3,

	Polygon = 4
}


declare class SCNGeometrySource extends NSObject implements NSSecureCoding {

	static geometrySourceWithBufferVertexFormatSemanticVertexCountDataOffsetDataStride(_: MTLBuffer, vertexFormat: MTLVertexFormat, semantic: string, vertexCount: number, dataOffset: number, dataStride: number): SCNGeometrySource;

	static geometrySourceWithDataSemanticVectorCountFloatComponentsComponentsPerVectorBytesPerComponentDataOffsetDataStride(data: NSData, semantic: string, vectorCount: number, usesFloatComponents: boolean, componentsPerVector: number, bytesPerComponent: number, dataOffset: number, dataStride: number): SCNGeometrySource;

	static geometrySourceWithNormalsCount(_: SCNVector3, count: number): SCNGeometrySource;

	static geometrySourceWithTextureCoordinatesCount(_: CGPoint, count: number): SCNGeometrySource;

	static geometrySourceWithVerticesCount(_: SCNVector3, count: number): SCNGeometrySource;

	readonly bytesPerComponent: number;

	readonly componentsPerVector: number;

	readonly data: NSData;

	readonly dataOffset: number;

	readonly dataStride: number;

	readonly floatComponents: boolean;

	readonly semantic: string;

	readonly vectorCount: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare var SCNGeometrySourceSemanticBoneIndices: string;

declare var SCNGeometrySourceSemanticBoneWeights: string;

declare var SCNGeometrySourceSemanticColor: string;

declare var SCNGeometrySourceSemanticEdgeCrease: string;

declare var SCNGeometrySourceSemanticNormal: string;

declare var SCNGeometrySourceSemanticTangent: string;

declare var SCNGeometrySourceSemanticTexcoord: string;

declare var SCNGeometrySourceSemanticVertex: string;

declare var SCNGeometrySourceSemanticVertexCrease: string;

declare class SCNGeometryTessellator extends NSObject implements NSCopying, NSSecureCoding {

	setAdaptive(_: boolean)

	isAdaptive: boolean;

	setEdgeTessellationFactor(_: number)

	edgeTessellationFactor: number;

	setInsideTessellationFactor(_: number)

	insideTessellationFactor: number;

	setMaximumEdgeLength(_: number)

	maximumEdgeLength: number;

	setScreenSpace(_: boolean)

	isScreenSpace: boolean;

	setSmoothingMode(_: SCNTessellationSmoothingMode)

	smoothingMode: SCNTessellationSmoothingMode;

	setTessellationFactorScale(_: number)

	tessellationFactorScale: number;

	setTessellationPartitionMode(_: MTLTessellationPartitionMode)

	tessellationPartitionMode: MTLTessellationPartitionMode;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var SCNHitTestBackFaceCullingKey: string;

declare var SCNHitTestBoundingBoxOnlyKey: string;

declare var SCNHitTestClipToZRangeKey: string;

declare var SCNHitTestFirstFoundOnlyKey: string;

declare var SCNHitTestIgnoreChildNodesKey: string;

declare var SCNHitTestIgnoreHiddenNodesKey: string;

declare var SCNHitTestOptionCategoryBitMask: string;

declare var SCNHitTestOptionIgnoreLightArea: string;

declare var SCNHitTestOptionSearchMode: string;

declare class SCNHitTestResult extends NSObject {

	readonly boneNode: SCNNode;

	readonly faceIndex: number;

	readonly geometryIndex: number;

	readonly localCoordinates: SCNVector3;

	readonly localNormal: SCNVector3;

	readonly modelTransform: CATransform3D;

	readonly node: SCNNode;

	readonly simdLocalCoordinates: number;

	readonly simdLocalNormal: number;

	readonly simdModelTransform: simd_float4x4;

	readonly simdWorldCoordinates: number;

	readonly simdWorldNormal: number;

	readonly worldCoordinates: SCNVector3;

	readonly worldNormal: SCNVector3;

	textureCoordinatesWithMappingChannel(_: number): CGPoint;
}

declare var SCNHitTestRootNodeKey: string;

enum SCNHitTestSearchMode {

	Closest = 0,

	All = 1,

	Any = 2
}


declare var SCNHitTestSortResultsKey: string;

declare class SCNIKConstraint extends SCNConstraint {

	static inverseKinematicsConstraintWithChainRootNode(chainRootNode: SCNNode): SCNIKConstraint;

	readonly chainRootNode: SCNNode;

	setTargetPosition(_: SCNVector3)

	targetPosition: SCNVector3;

	static create(chainRootNode: SCNNode);

	maxAllowedRotationAngleForJoint(_: SCNNode): number;

	setMaxAllowedRotationAngleForJoint(_: number, forJoint: SCNNode): void;
}

enum SCNInteractionMode {

	Fly = 0,

	OrbitTurntable = 1,

	OrbitAngleMapping = 2,

	OrbitCenteredArcball = 3,

	OrbitArcball = 4,

	Pan = 5,

	Truck = 6
}


declare class SCNLevelOfDetail extends NSObject implements NSCopying, NSSecureCoding {

	static levelOfDetailWithGeometryScreenSpaceRadius(_?: SCNGeometry, screenSpaceRadius: number): SCNLevelOfDetail;

	static levelOfDetailWithGeometryWorldSpaceDistance(_?: SCNGeometry, worldSpaceDistance: number): SCNLevelOfDetail;

	readonly geometry: SCNGeometry;

	readonly screenSpaceRadius: number;

	readonly worldSpaceDistance: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SCNLight extends NSObject implements NSCopying, NSSecureCoding, SCNAnimatable, SCNTechniqueSupport {

	static light(): SCNLight;

	static lightWithMDLLight(_: MDLLight): SCNLight;

	setIESProfileURL(_: NSURL)

	IESProfileURL: NSURL;

	setAreaExtents(_: number)

	areaExtents: number;

	setAreaPolygonVertices(_: NSArray<NSValue>)

	areaPolygonVertices: NSArray<NSValue>;

	setAreaType(_: SCNLightAreaType)

	areaType: SCNLightAreaType;

	setAttenuationEndDistance(_: number)

	attenuationEndDistance: number;

	setAttenuationFalloffExponent(_: number)

	attenuationFalloffExponent: number;

	setAttenuationStartDistance(_: number)

	attenuationStartDistance: number;

	setAutomaticallyAdjustsShadowProjection(_: boolean)

	automaticallyAdjustsShadowProjection: boolean;

	setCastsShadow(_: boolean)

	castsShadow: boolean;

	setCategoryBitMask(_: number)

	categoryBitMask: number;

	setColor(_: any)

	color: any;

	setDoubleSided(_: boolean)

	doubleSided: boolean;

	setDrawsArea(_: boolean)

	drawsArea: boolean;

	setForcesBackFaceCasters(_: boolean)

	forcesBackFaceCasters: boolean;

	readonly gobo: SCNMaterialProperty;

	setIntensity(_: number)

	intensity: number;

	setMaximumShadowDistance(_: number)

	maximumShadowDistance: number;

	setName(_: string)

	name: string;

	setOrthographicScale(_: number)

	orthographicScale: number;

	setParallaxCenterOffset(_: number)

	parallaxCenterOffset: number;

	setParallaxCorrectionEnabled(_: boolean)

	parallaxCorrectionEnabled: boolean;

	setParallaxExtentsFactor(_: number)

	parallaxExtentsFactor: number;

	readonly probeEnvironment: SCNMaterialProperty;

	setProbeExtents(_: number)

	probeExtents: number;

	setProbeOffset(_: number)

	probeOffset: number;

	setProbeType(_: SCNLightProbeType)

	probeType: SCNLightProbeType;

	setProbeUpdateType(_: SCNLightProbeUpdateType)

	probeUpdateType: SCNLightProbeUpdateType;

	setSampleDistributedShadowMaps(_: boolean)

	sampleDistributedShadowMaps: boolean;

	setShadowBias(_: number)

	shadowBias: number;

	setShadowCascadeCount(_: number)

	shadowCascadeCount: number;

	setShadowCascadeSplittingFactor(_: number)

	shadowCascadeSplittingFactor: number;

	setShadowColor(_: any)

	shadowColor: any;

	setShadowMapSize(_: CGSize)

	shadowMapSize: CGSize;

	setShadowMode(_: SCNShadowMode)

	shadowMode: SCNShadowMode;

	setShadowRadius(_: number)

	shadowRadius: number;

	setShadowSampleCount(_: number)

	shadowSampleCount: number;

	readonly sphericalHarmonicsCoefficients: NSData;

	setSpotInnerAngle(_: number)

	spotInnerAngle: number;

	setSpotOuterAngle(_: number)

	spotOuterAngle: number;

	setTemperature(_: number)

	temperature: number;

	setType(_: string)

	type: string;

	setZFar(_: number)

	zFar: number;

	setZNear(_: number)

	zNear: number;

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setTechnique(_: SCNTechnique)

	technique: SCNTechnique; // inherited from SCNTechniqueSupport

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

enum SCNLightAreaType {

	Rectangle = 1,

	Polygon = 4
}


enum SCNLightProbeType {

	Irradiance = 0,

	Radiance = 1
}


enum SCNLightProbeUpdateType {

	Never = 0,

	Realtime = 1
}


declare var SCNLightTypeAmbient: string;

declare var SCNLightTypeArea: string;

declare var SCNLightTypeDirectional: string;

declare var SCNLightTypeIES: string;

declare var SCNLightTypeOmni: string;

declare var SCNLightTypeProbe: string;

declare var SCNLightTypeSpot: string;

declare var SCNLightingModelBlinn: string;

declare var SCNLightingModelConstant: string;

declare var SCNLightingModelLambert: string;

declare var SCNLightingModelPhong: string;

declare var SCNLightingModelPhysicallyBased: string;

declare var SCNLightingModelShadowOnly: string;

declare class SCNLookAtConstraint extends SCNConstraint {

	static lookAtConstraintWithTarget(_?: SCNNode): SCNLookAtConstraint;

	setGimbalLockEnabled(_: boolean)

	gimbalLockEnabled: boolean;

	setLocalFront(_: SCNVector3)

	localFront: SCNVector3;

	setTarget(_: SCNNode)

	target: SCNNode;

	setTargetOffset(_: SCNVector3)

	targetOffset: SCNVector3;

	setWorldUp(_: SCNVector3)

	worldUp: SCNVector3;

	setTarget(_?: SCNNode): void;
}

declare class SCNMaterial extends NSObject implements NSCopying, NSSecureCoding, SCNAnimatable, SCNShadable {

	static material(): SCNMaterial;

	static materialWithMDLMaterial(_: MDLMaterial): SCNMaterial;

	readonly ambient: SCNMaterialProperty;

	readonly ambientOcclusion: SCNMaterialProperty;

	setBlendMode(_: SCNBlendMode)

	blendMode: SCNBlendMode;

	readonly clearCoat: SCNMaterialProperty;

	readonly clearCoatNormal: SCNMaterialProperty;

	readonly clearCoatRoughness: SCNMaterialProperty;

	setColorBufferWriteMask(_: SCNColorMask)

	colorBufferWriteMask: SCNColorMask;

	setCullMode(_: SCNCullMode)

	cullMode: SCNCullMode;

	readonly diffuse: SCNMaterialProperty;

	readonly displacement: SCNMaterialProperty;

	setDoubleSided(_: boolean)

	isDoubleSided: boolean;

	readonly emission: SCNMaterialProperty;

	setFillMode(_: SCNFillMode)

	fillMode: SCNFillMode;

	setFresnelExponent(_: number)

	fresnelExponent: number;

	setLightingModelName(_: string)

	lightingModelName: string;

	setLitPerPixel(_: boolean)

	isLitPerPixel: boolean;

	setLocksAmbientWithDiffuse(_: boolean)

	locksAmbientWithDiffuse: boolean;

	readonly metalness: SCNMaterialProperty;

	readonly multiply: SCNMaterialProperty;

	setName(_: string)

	name: string;

	readonly normal: SCNMaterialProperty;

	setReadsFromDepthBuffer(_: boolean)

	readsFromDepthBuffer: boolean;

	readonly reflective: SCNMaterialProperty;

	readonly roughness: SCNMaterialProperty;

	readonly selfIllumination: SCNMaterialProperty;

	setShininess(_: number)

	shininess: number;

	readonly specular: SCNMaterialProperty;

	setTransparency(_: number)

	transparency: number;

	setTransparencyMode(_: SCNTransparencyMode)

	transparencyMode: SCNTransparencyMode;

	readonly transparent: SCNMaterialProperty;

	setWritesToDepthBuffer(_: boolean)

	writesToDepthBuffer: boolean;

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setProgram(_: SCNProgram)

	program: SCNProgram; // inherited from SCNShadable

	setShaderModifiers(_: NSDictionary<string, string>)

	shaderModifiers: NSDictionary<string, string>; // inherited from SCNShadable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	handleBindingOfSymbolUsingBlock(_: string, usingBlock?: (p1: number, p2: number, p3: SCNNode, p4: SCNRenderer) => void): void;

	handleUnbindingOfSymbolUsingBlock(_: string, usingBlock?: (p1: number, p2: number, p3: SCNNode, p4: SCNRenderer) => void): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SCNMaterialProperty extends NSObject implements NSSecureCoding, SCNAnimatable {

	static materialPropertyWithContents(_: any): SCNMaterialProperty;

	setContents(_: any)

	contents: any;

	setContentsTransform(_: CATransform3D)

	contentsTransform: CATransform3D;

	setIntensity(_: number)

	intensity: number;

	setMagnificationFilter(_: SCNFilterMode)

	magnificationFilter: SCNFilterMode;

	setMappingChannel(_: number)

	mappingChannel: number;

	setMaxAnisotropy(_: number)

	maxAnisotropy: number;

	setMinificationFilter(_: SCNFilterMode)

	minificationFilter: SCNFilterMode;

	setMipFilter(_: SCNFilterMode)

	mipFilter: SCNFilterMode;

	setTextureComponents(_: SCNColorMask)

	textureComponents: SCNColorMask;

	setWrapS(_: SCNWrapMode)

	wrapS: SCNWrapMode;

	setWrapT(_: SCNWrapMode)

	wrapT: SCNWrapMode;

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	conformsToProtocol(_: any /* Protocol */): boolean;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function SCNMatrix4EqualToMatrix4(a: CATransform3D, b: CATransform3D): boolean;

declare var SCNMatrix4Identity: CATransform3D;

declare function SCNMatrix4Invert(m: CATransform3D): CATransform3D;

declare function SCNMatrix4IsIdentity(m: CATransform3D): boolean;

declare function SCNMatrix4MakeRotation(angle: number, x: number, y: number, z: number): CATransform3D;

declare function SCNMatrix4Mult(a: CATransform3D, b: CATransform3D): CATransform3D;

declare function SCNMatrix4Rotate(m: CATransform3D, angle: number, x: number, y: number, z: number): CATransform3D;

declare function SCNMatrix4Scale(m: CATransform3D, sx: number, sy: number, sz: number): CATransform3D;

declare var SCNModelTransform: string;

declare var SCNModelViewProjectionTransform: string;

declare var SCNModelViewTransform: string;

declare class SCNMorpher extends NSObject implements NSSecureCoding, SCNAnimatable {

	setCalculationMode(_: SCNMorpherCalculationMode)

	calculationMode: SCNMorpherCalculationMode;

	setTargets(_: NSArray<SCNGeometry>)

	targets: NSArray<SCNGeometry>;

	setUnifiesNormals(_: boolean)

	unifiesNormals: boolean;

	setWeights(_: NSArray<number>)

	weights: NSArray<number>;

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	conformsToProtocol(_: any /* Protocol */): boolean;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setWeightForTargetAtIndex(_: number, forTargetAtIndex: number): void;

	setWeightForTargetNamed(_: number, forTargetNamed: string): void;

	weightForTargetAtIndex(forTargetAt: number): number;

	weightForTargetNamed(_: string): number;
}

enum SCNMorpherCalculationMode {

	Normalized = 0,

	Additive = 1
}


enum SCNMovabilityHint {

	Fixed = 0,

	Movable = 1
}


declare class SCNNode extends NSObject implements NSCopying, NSSecureCoding, SCNActionable, SCNAnimatable, SCNBoundingVolume {

	static node(): SCNNode;

	static nodeWithGeometry(_?: SCNGeometry): SCNNode;

	static nodeWithMDLObject(_: MDLObject): SCNNode;

	readonly audioPlayers: NSArray<SCNAudioPlayer>;

	setCamera(_: SCNCamera)

	camera: SCNCamera;

	setCastsShadow(_: boolean)

	castsShadow: boolean;

	setCategoryBitMask(_: number)

	categoryBitMask: number;

	readonly childNodes: NSArray<SCNNode>;

	setConstraints(_: NSArray<SCNConstraint>)

	constraints: NSArray<SCNConstraint>;

	setEntity(_: GKEntity)

	entity: GKEntity;

	setEulerAngles(_: SCNVector3)

	eulerAngles: SCNVector3;

	setFilters(_: NSArray<CIFilter>)

	filters: NSArray<CIFilter>;

	setFocusBehavior(_: SCNNodeFocusBehavior)

	focusBehavior: SCNNodeFocusBehavior;

	setGeometry(_: SCNGeometry)

	geometry: SCNGeometry;

	setHidden(_: boolean)

	isHidden: boolean;

	setLight(_: SCNLight)

	light: SCNLight;

	setMorpher(_: SCNMorpher)

	morpher: SCNMorpher;

	setMovabilityHint(_: SCNMovabilityHint)

	movabilityHint: SCNMovabilityHint;

	setName(_: string)

	name: string;

	setOpacity(_: number)

	opacity: number;

	setOrientation(_: SCNVector4)

	orientation: SCNVector4;

	readonly parentNode: SCNNode;

	readonly particleSystems: NSArray<SCNParticleSystem>;

	setPaused(_: boolean)

	isPaused: boolean;

	setPhysicsBody(_: SCNPhysicsBody)

	physicsBody: SCNPhysicsBody;

	setPhysicsField(_: SCNPhysicsField)

	physicsField: SCNPhysicsField;

	setPivot(_: CATransform3D)

	pivot: CATransform3D;

	setPosition(_: SCNVector3)

	position: SCNVector3;

	readonly presentationNode: SCNNode;

	setRendererDelegate(_: SCNNodeRendererDelegate)

	rendererDelegate: SCNNodeRendererDelegate;

	setRenderingOrder(_: number)

	renderingOrder: number;

	setRotation(_: SCNVector4)

	rotation: SCNVector4;

	setScale(_: SCNVector3)

	scale: SCNVector3;

	setSimdEulerAngles(_: number)

	simdEulerAngles: number;

	setSimdOrientation(_: simd_quatf)

	simdOrientation: simd_quatf;

	setSimdPivot(_: simd_float4x4)

	simdPivot: simd_float4x4;

	setSimdPosition(_: number)

	simdPosition: number;

	setSimdRotation(_: number)

	simdRotation: number;

	setSimdScale(_: number)

	simdScale: number;

	setSimdTransform(_: simd_float4x4)

	simdTransform: simd_float4x4;

	readonly simdWorldFront: number;

	setSimdWorldOrientation(_: simd_quatf)

	simdWorldOrientation: simd_quatf;

	setSimdWorldPosition(_: number)

	simdWorldPosition: number;

	readonly simdWorldRight: number;

	setSimdWorldTransform(_: simd_float4x4)

	simdWorldTransform: simd_float4x4;

	readonly simdWorldUp: number;

	setSkinner(_: SCNSkinner)

	skinner: SCNSkinner;

	setTransform(_: CATransform3D)

	transform: CATransform3D;

	readonly worldFront: SCNVector3;

	setWorldOrientation(_: SCNVector4)

	worldOrientation: SCNVector4;

	setWorldPosition(_: SCNVector3)

	worldPosition: SCNVector3;

	readonly worldRight: SCNVector3;

	readonly worldTransform: CATransform3D;

	readonly worldUp: SCNVector3;

	static localFront(): SCNVector3;

	static localRight(): SCNVector3;

	static localUp(): SCNVector3;

	static simdLocalFront(): number;

	static simdLocalRight(): number;

	static simdLocalUp(): number;

	readonly actionKeys: NSArray<string>; // inherited from SCNActionable

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hasActions: boolean; // inherited from SCNActionable

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	actionForKey(_: string): SCNAction;

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	addAudioPlayer(_: SCNAudioPlayer): void;

	addChildNode(_: SCNNode): void;

	addParticleSystem(_: SCNParticleSystem): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	childNodeWithNameRecursively(_: string, recursively: boolean): SCNNode;

	childNodesPassingTest(_: (p1: SCNNode, p2: boolean) => boolean): NSArray<SCNNode>;

	clone(): this;

	conformsToProtocol(_: any /* Protocol */): boolean;

	convertPositionFromNode(_: SCNVector3, fromNode?: SCNNode): SCNVector3;

	convertPositionToNode(_: SCNVector3, toNode?: SCNNode): SCNVector3;

	convertTransformFromNode(_: CATransform3D, fromNode?: SCNNode): CATransform3D;

	convertTransformToNode(_: CATransform3D, toNode?: SCNNode): CATransform3D;

	convertVectorFromNode(_: SCNVector3, from?: SCNNode): SCNVector3;

	convertVectorToNode(_: SCNVector3, to?: SCNNode): SCNVector3;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	enumerateChildNodesUsingBlock(_: (p1: SCNNode, p2: boolean) => void): void;

	enumerateHierarchyUsingBlock(_: (p1: SCNNode, p2: boolean) => void): void;

	flattenedClone(): this;

	getBoundingBoxMinMax(_?: SCNVector3, max?: SCNVector3): boolean;

	getBoundingSphereCenterRadius(_?: SCNVector3, radius?: number): boolean;

	hitTestWithSegmentFromPointToPointOptions(from: SCNVector3, to: SCNVector3, options?: NSDictionary<string, any>): NSArray<SCNHitTestResult>;

	insertChildNodeAtIndex(_: SCNNode, atIndex: number): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	localRotateBy(_: SCNVector4): void;

	localTranslateBy(_: SCNVector3): void;

	lookAt(_: SCNVector3): void;

	lookAtUpLocalFront(_: SCNVector3, up: SCNVector3, localFront: SCNVector3): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeActionForKey(_: string): void;

	removeAllActions(): void;

	removeAllAnimations(): void;

	removeAllAudioPlayers(): void;

	removeAllParticleSystems(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	removeAudioPlayer(_: SCNAudioPlayer): void;

	removeFromParentNode(): void;

	removeParticleSystem(_: SCNParticleSystem): void;

	replaceChildNodeWith(_: SCNNode, with_: SCNNode): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	rotateByAroundTarget(_: SCNVector4, aroundTarget: SCNVector3): void;

	runAction(_: SCNAction): void;

	runActionCompletionHandler(_: SCNAction, completionHandler?: () => void): void;

	runActionForKey(_: SCNAction, forKey?: string): void;

	runActionForKeyCompletionHandler(_: SCNAction, forKey?: string, completionHandler?: () => void): void;

	self(): this;

	setBoundingBoxMinMax(_?: SCNVector3, max?: SCNVector3): void;

	setWorldTransform(_: CATransform3D): void;

	simdConvertPositionFromNode(_: number, fromNode?: SCNNode): number;

	simdConvertPositionToNode(_: number, toNode?: SCNNode): number;

	simdConvertTransformFromNode(_: simd_float4x4, fromNode?: SCNNode): simd_float4x4;

	simdConvertTransformToNode(_: simd_float4x4, toNode?: SCNNode): simd_float4x4;

	simdConvertVectorFromNode(_: number, fromNode?: SCNNode): number;

	simdConvertVectorToNode(_: number, toNode?: SCNNode): number;

	simdLocalRotateBy(_: simd_quatf): void;

	simdLocalTranslateBy(_: number): void;

	simdLookAt(_: number): void;

	simdLookAtUpLocalFront(_: number, up: number, localFront: number): void;

	simdRotateByAroundTarget(_: simd_quatf, aroundTarget: number): void;
}

enum SCNNodeFocusBehavior {

	None = 0,

	Occluding = 1,

	Focusable = 2
}


interface SCNNodeRendererDelegate extends NSObjectProtocol {

	renderNodeRendererArguments?(_: SCNNode, renderer: SCNRenderer, arguments_: NSDictionary<string, any>): void;
}
declare var SCNNodeRendererDelegate: {

	prototype: SCNNodeRendererDelegate;
};

declare var SCNNormalTransform: string;

enum SCNParticleBirthDirection {

	Constant = 0,

	SurfaceNormal = 1,

	Random = 2
}


enum SCNParticleBirthLocation {

	Surface = 0,

	Volume = 1,

	Vertex = 2
}


enum SCNParticleBlendMode {

	Additive = 0,

	Subtract = 1,

	Multiply = 2,

	Screen = 3,

	Alpha = 4,

	Replace = 5
}


enum SCNParticleEvent {

	Birth = 0,

	Death = 1,

	Collision = 2
}


enum SCNParticleImageSequenceAnimationMode {

	Repeat = 0,

	Clamp = 1,

	AutoReverse = 2
}


enum SCNParticleInputMode {

	OverLife = 0,

	OverDistance = 1,

	OverOtherProperty = 2
}


enum SCNParticleModifierStage {

	PreDynamics = 0,

	PostDynamics = 1,

	PreCollision = 2,

	PostCollision = 3
}


enum SCNParticleOrientationMode {

	BillboardScreenAligned = 0,

	BillboardViewAligned = 1,

	Free = 2,

	BillboardYAligned = 3
}


declare var SCNParticlePropertyAngle: string;

declare var SCNParticlePropertyAngularVelocity: string;

declare var SCNParticlePropertyBounce: string;

declare var SCNParticlePropertyCharge: string;

declare var SCNParticlePropertyColor: string;

declare var SCNParticlePropertyContactNormal: string;

declare var SCNParticlePropertyContactPoint: string;

declare class SCNParticlePropertyController extends NSObject implements NSCopying, NSSecureCoding {

	static controllerWithAnimation(_: CAAnimation): SCNParticlePropertyController;

	setAnimation(_: CAAnimation)

	animation: CAAnimation;

	setInputBias(_: number)

	inputBias: number;

	setInputMode(_: SCNParticleInputMode)

	inputMode: SCNParticleInputMode;

	setInputOrigin(_: SCNNode)

	inputOrigin: SCNNode;

	setInputProperty(_: string)

	inputProperty: string;

	setInputScale(_: number)

	inputScale: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var SCNParticlePropertyFrame: string;

declare var SCNParticlePropertyFrameRate: string;

declare var SCNParticlePropertyFriction: string;

declare var SCNParticlePropertyLife: string;

declare var SCNParticlePropertyOpacity: string;

declare var SCNParticlePropertyPosition: string;

declare var SCNParticlePropertyRotationAxis: string;

declare var SCNParticlePropertySize: string;

declare var SCNParticlePropertyVelocity: string;

enum SCNParticleSortingMode {

	None = 0,

	ProjectedDepth = 1,

	Distance = 2,

	OldestFirst = 3,

	YoungestFirst = 4
}


declare class SCNParticleSystem extends NSObject implements NSCopying, NSSecureCoding, SCNAnimatable {

	static particleSystem(): SCNParticleSystem;

	static particleSystemNamedInDirectory(_: string, inDirectory?: string): SCNParticleSystem;

	setAcceleration(_: SCNVector3)

	acceleration: SCNVector3;

	setAffectedByGravity(_: boolean)

	affectedByGravity: boolean;

	setAffectedByPhysicsFields(_: boolean)

	affectedByPhysicsFields: boolean;

	setBirthDirection(_: SCNParticleBirthDirection)

	birthDirection: SCNParticleBirthDirection;

	setBirthLocation(_: SCNParticleBirthLocation)

	birthLocation: SCNParticleBirthLocation;

	setBirthRate(_: number)

	birthRate: number;

	setBirthRateVariation(_: number)

	birthRateVariation: number;

	setBlackPassEnabled(_: boolean)

	isBlackPassEnabled: boolean;

	setBlendMode(_: SCNParticleBlendMode)

	blendMode: SCNParticleBlendMode;

	setColliderNodes(_: NSArray<SCNNode>)

	colliderNodes: NSArray<SCNNode>;

	setDampingFactor(_: number)

	dampingFactor: number;

	setEmissionDuration(_: number)

	emissionDuration: number;

	setEmissionDurationVariation(_: number)

	emissionDurationVariation: number;

	setEmitterShape(_: SCNGeometry)

	emitterShape: SCNGeometry;

	setEmittingDirection(_: SCNVector3)

	emittingDirection: SCNVector3;

	setFresnelExponent(_: number)

	fresnelExponent: number;

	setIdleDuration(_: number)

	idleDuration: number;

	setIdleDurationVariation(_: number)

	idleDurationVariation: number;

	setImageSequenceAnimationMode(_: SCNParticleImageSequenceAnimationMode)

	imageSequenceAnimationMode: SCNParticleImageSequenceAnimationMode;

	setImageSequenceColumnCount(_: number)

	imageSequenceColumnCount: number;

	setImageSequenceFrameRate(_: number)

	imageSequenceFrameRate: number;

	setImageSequenceFrameRateVariation(_: number)

	imageSequenceFrameRateVariation: number;

	setImageSequenceInitialFrame(_: number)

	imageSequenceInitialFrame: number;

	setImageSequenceInitialFrameVariation(_: number)

	imageSequenceInitialFrameVariation: number;

	setImageSequenceRowCount(_: number)

	imageSequenceRowCount: number;

	setLightingEnabled(_: boolean)

	isLightingEnabled: boolean;

	setLocal(_: boolean)

	isLocal: boolean;

	setLoops(_: boolean)

	loops: boolean;

	setOrientationDirection(_: SCNVector3)

	orientationDirection: SCNVector3;

	setOrientationMode(_: SCNParticleOrientationMode)

	orientationMode: SCNParticleOrientationMode;

	setParticleAngle(_: number)

	particleAngle: number;

	setParticleAngleVariation(_: number)

	particleAngleVariation: number;

	setParticleAngularVelocity(_: number)

	particleAngularVelocity: number;

	setParticleAngularVelocityVariation(_: number)

	particleAngularVelocityVariation: number;

	setParticleBounce(_: number)

	particleBounce: number;

	setParticleBounceVariation(_: number)

	particleBounceVariation: number;

	setParticleCharge(_: number)

	particleCharge: number;

	setParticleChargeVariation(_: number)

	particleChargeVariation: number;

	setParticleColor(_: NSColor)

	particleColor: NSColor;

	setParticleColorVariation(_: SCNVector4)

	particleColorVariation: SCNVector4;

	setParticleDiesOnCollision(_: boolean)

	particleDiesOnCollision: boolean;

	setParticleFriction(_: number)

	particleFriction: number;

	setParticleFrictionVariation(_: number)

	particleFrictionVariation: number;

	setParticleImage(_: any)

	particleImage: any;

	setParticleIntensity(_: number)

	particleIntensity: number;

	setParticleIntensityVariation(_: number)

	particleIntensityVariation: number;

	setParticleLifeSpan(_: number)

	particleLifeSpan: number;

	setParticleLifeSpanVariation(_: number)

	particleLifeSpanVariation: number;

	setParticleMass(_: number)

	particleMass: number;

	setParticleMassVariation(_: number)

	particleMassVariation: number;

	setParticleSize(_: number)

	particleSize: number;

	setParticleSizeVariation(_: number)

	particleSizeVariation: number;

	setParticleVelocity(_: number)

	particleVelocity: number;

	setParticleVelocityVariation(_: number)

	particleVelocityVariation: number;

	setPropertyControllers(_: NSDictionary<string, SCNParticlePropertyController>)

	propertyControllers: NSDictionary<string, SCNParticlePropertyController>;

	setSortingMode(_: SCNParticleSortingMode)

	sortingMode: SCNParticleSortingMode;

	setSpeedFactor(_: number)

	speedFactor: number;

	setSpreadingAngle(_: number)

	spreadingAngle: number;

	setStretchFactor(_: number)

	stretchFactor: number;

	setSystemSpawnedOnCollision(_: SCNParticleSystem)

	systemSpawnedOnCollision: SCNParticleSystem;

	setSystemSpawnedOnDying(_: SCNParticleSystem)

	systemSpawnedOnDying: SCNParticleSystem;

	setSystemSpawnedOnLiving(_: SCNParticleSystem)

	systemSpawnedOnLiving: SCNParticleSystem;

	setWarmupDuration(_: number)

	warmupDuration: number;

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	addModifierForPropertiesAtStageWithBlock(forProperties: NSArray<string>, at: SCNParticleModifierStage, modifier: (p1: any, p2: number, p3: number, p4: number, p5: number) => void): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	handleEventForPropertiesWithBlock(_: SCNParticleEvent, forProperties: NSArray<string>, handler: (p1: any, p2: number, p3: number, p4: number) => void): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeAllAnimations(): void;

	removeAllModifiers(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	removeModifiersOfStage(at: SCNParticleModifierStage): void;

	reset(): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SCNPhysicsBallSocketJoint extends SCNPhysicsBehavior {

	static jointWithBodyAnchor(_: SCNPhysicsBody, anchor: SCNVector3): SCNPhysicsBallSocketJoint;

	static jointWithBodyAAnchorABodyBAnchorB(_: SCNPhysicsBody, anchorA: SCNVector3, bodyB: SCNPhysicsBody, anchorB: SCNVector3): SCNPhysicsBallSocketJoint;

	setAnchorA(_: SCNVector3)

	anchorA: SCNVector3;

	setAnchorB(_: SCNVector3)

	anchorB: SCNVector3;

	readonly bodyA: SCNPhysicsBody;

	readonly bodyB: SCNPhysicsBody;
}

declare class SCNPhysicsBehavior extends NSObject implements NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class SCNPhysicsBody extends NSObject implements NSCopying, NSSecureCoding {

	static bodyWithTypeShape(_: SCNPhysicsBodyType, shape?: SCNPhysicsShape): SCNPhysicsBody;

	static dynamicBody(): SCNPhysicsBody;

	static kinematicBody(): SCNPhysicsBody;

	static staticBody(): SCNPhysicsBody;

	setAffectedByGravity(_: boolean)

	isAffectedByGravity: boolean;

	setAllowsResting(_: boolean)

	allowsResting: boolean;

	setAngularDamping(_: number)

	angularDamping: number;

	setAngularRestingThreshold(_: number)

	angularRestingThreshold: number;

	setAngularVelocity(_: SCNVector4)

	angularVelocity: SCNVector4;

	setAngularVelocityFactor(_: SCNVector3)

	angularVelocityFactor: SCNVector3;

	setCategoryBitMask(_: number)

	categoryBitMask: number;

	setCenterOfMassOffset(_: SCNVector3)

	centerOfMassOffset: SCNVector3;

	setCharge(_: number)

	charge: number;

	setCollisionBitMask(_: number)

	collisionBitMask: number;

	setContactTestBitMask(_: number)

	contactTestBitMask: number;

	setContinuousCollisionDetectionThreshold(_: number)

	continuousCollisionDetectionThreshold: number;

	setDamping(_: number)

	damping: number;

	setFriction(_: number)

	friction: number;

	readonly isResting: boolean;

	setLinearRestingThreshold(_: number)

	linearRestingThreshold: number;

	setMass(_: number)

	mass: number;

	setMomentOfInertia(_: SCNVector3)

	momentOfInertia: SCNVector3;

	setPhysicsShape(_: SCNPhysicsShape)

	physicsShape: SCNPhysicsShape;

	setRestitution(_: number)

	restitution: number;

	setRollingFriction(_: number)

	rollingFriction: number;

	setType(_: SCNPhysicsBodyType)

	type: SCNPhysicsBodyType;

	setUsesDefaultMomentOfInertia(_: boolean)

	usesDefaultMomentOfInertia: boolean;

	setVelocity(_: SCNVector3)

	velocity: SCNVector3;

	setVelocityFactor(_: SCNVector3)

	velocityFactor: SCNVector3;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	applyForceAtPositionImpulse(_: SCNVector3, at: SCNVector3, asImpulse: boolean): void;

	applyForceImpulse(_: SCNVector3, asImpulse: boolean): void;

	applyTorqueImpulse(_: SCNVector4, asImpulse: boolean): void;

	clearAllForces(): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	resetTransform(): void;

	setResting(_: boolean): void;
}

enum SCNPhysicsBodyType {

	Static = 0,

	Dynamic = 1,

	Kinematic = 2
}


enum SCNPhysicsCollisionCategory {

	Default = 1,

	Static = 2,

	All = -1
}


declare class SCNPhysicsConeTwistJoint extends SCNPhysicsBehavior {

	static jointWithBodyFrame(_: SCNPhysicsBody, frame: CATransform3D): SCNPhysicsConeTwistJoint;

	static jointWithBodyAFrameABodyBFrameB(_: SCNPhysicsBody, frameA: CATransform3D, bodyB: SCNPhysicsBody, frameB: CATransform3D): SCNPhysicsConeTwistJoint;

	readonly bodyA: SCNPhysicsBody;

	readonly bodyB: SCNPhysicsBody;

	setFrameA(_: CATransform3D)

	frameA: CATransform3D;

	setFrameB(_: CATransform3D)

	frameB: CATransform3D;

	setMaximumAngularLimit1(_: number)

	maximumAngularLimit1: number;

	setMaximumAngularLimit2(_: number)

	maximumAngularLimit2: number;

	setMaximumTwistAngle(_: number)

	maximumTwistAngle: number;
}

declare class SCNPhysicsContact extends NSObject {

	readonly collisionImpulse: number;

	readonly contactNormal: SCNVector3;

	readonly contactPoint: SCNVector3;

	readonly nodeA: SCNNode;

	readonly nodeB: SCNNode;

	readonly penetrationDistance: number;

	readonly sweepTestFraction: number;
}

interface SCNPhysicsContactDelegate extends NSObjectProtocol {

	physicsWorldDidBeginContact?(_: SCNPhysicsWorld, didBeginContact: SCNPhysicsContact): void;

	physicsWorldDidEndContact?(_: SCNPhysicsWorld, didEndContact: SCNPhysicsContact): void;

	physicsWorldDidUpdateContact?(_: SCNPhysicsWorld, didUpdateContact: SCNPhysicsContact): void;
}
declare var SCNPhysicsContactDelegate: {

	prototype: SCNPhysicsContactDelegate;
};

declare class SCNPhysicsField extends NSObject implements NSCopying, NSSecureCoding {

	static customFieldWithEvaluationBlock(_: (p1: SCNVector3, p2: SCNVector3, p3: number, p4: number, p5: number) => SCNVector3): SCNPhysicsField;

	static dragField(): SCNPhysicsField;

	static electricField(): SCNPhysicsField;

	static linearGravityField(): SCNPhysicsField;

	static magneticField(): SCNPhysicsField;

	static noiseFieldWithSmoothnessAnimationSpeed(smoothness: number, animationSpeed: number): SCNPhysicsField;

	static radialGravityField(): SCNPhysicsField;

	static springField(): SCNPhysicsField;

	static turbulenceFieldWithSmoothnessAnimationSpeed(smoothness: number, animationSpeed: number): SCNPhysicsField;

	static vortexField(): SCNPhysicsField;

	setActive(_: boolean)

	isActive: boolean;

	setCategoryBitMask(_: number)

	categoryBitMask: number;

	setDirection(_: SCNVector3)

	direction: SCNVector3;

	setExclusive(_: boolean)

	isExclusive: boolean;

	setFalloffExponent(_: number)

	falloffExponent: number;

	setHalfExtent(_: SCNVector3)

	halfExtent: SCNVector3;

	setMinimumDistance(_: number)

	minimumDistance: number;

	setOffset(_: SCNVector3)

	offset: SCNVector3;

	setScope(_: SCNPhysicsFieldScope)

	scope: SCNPhysicsFieldScope;

	setStrength(_: number)

	strength: number;

	setUsesEllipsoidalExtent(_: boolean)

	usesEllipsoidalExtent: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum SCNPhysicsFieldScope {

	InsideExtent = 0,

	OutsideExtent = 1
}


declare class SCNPhysicsHingeJoint extends SCNPhysicsBehavior {

	static jointWithBodyAxisAnchor(_: SCNPhysicsBody, axis: SCNVector3, anchor: SCNVector3): SCNPhysicsHingeJoint;

	static jointWithBodyAAxisAAnchorABodyBAxisBAnchorB(_: SCNPhysicsBody, axisA: SCNVector3, anchorA: SCNVector3, bodyB: SCNPhysicsBody, axisB: SCNVector3, anchorB: SCNVector3): SCNPhysicsHingeJoint;

	setAnchorA(_: SCNVector3)

	anchorA: SCNVector3;

	setAnchorB(_: SCNVector3)

	anchorB: SCNVector3;

	setAxisA(_: SCNVector3)

	axisA: SCNVector3;

	setAxisB(_: SCNVector3)

	axisB: SCNVector3;

	readonly bodyA: SCNPhysicsBody;

	readonly bodyB: SCNPhysicsBody;
}

declare class SCNPhysicsShape extends NSObject implements NSCopying, NSSecureCoding {

	static shapeWithGeometryOptions(_: SCNGeometry, options?: NSDictionary<string, any>): SCNPhysicsShape;

	static shapeWithNodeOptions(_: SCNNode, options?: NSDictionary<string, any>): SCNPhysicsShape;

	static shapeWithShapesTransforms(_: NSArray<SCNPhysicsShape>, transforms?: NSArray<NSValue>): SCNPhysicsShape;

	readonly options: NSDictionary<string, any>;

	readonly sourceObject: any;

	readonly transforms: NSArray<NSValue>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var SCNPhysicsShapeKeepAsCompoundKey: string;

declare var SCNPhysicsShapeOptionCollisionMargin: string;

declare var SCNPhysicsShapeScaleKey: string;

declare var SCNPhysicsShapeTypeBoundingBox: string;

declare var SCNPhysicsShapeTypeConcavePolyhedron: string;

declare var SCNPhysicsShapeTypeConvexHull: string;

declare var SCNPhysicsShapeTypeKey: string;

declare class SCNPhysicsSliderJoint extends SCNPhysicsBehavior {

	static jointWithBodyAxisAnchor(_: SCNPhysicsBody, axis: SCNVector3, anchor: SCNVector3): SCNPhysicsSliderJoint;

	static jointWithBodyAAxisAAnchorABodyBAxisBAnchorB(_: SCNPhysicsBody, axisA: SCNVector3, anchorA: SCNVector3, bodyB: SCNPhysicsBody, axisB: SCNVector3, anchorB: SCNVector3): SCNPhysicsSliderJoint;

	setAnchorA(_: SCNVector3)

	anchorA: SCNVector3;

	setAnchorB(_: SCNVector3)

	anchorB: SCNVector3;

	setAxisA(_: SCNVector3)

	axisA: SCNVector3;

	setAxisB(_: SCNVector3)

	axisB: SCNVector3;

	readonly bodyA: SCNPhysicsBody;

	readonly bodyB: SCNPhysicsBody;

	setMaximumAngularLimit(_: number)

	maximumAngularLimit: number;

	setMaximumLinearLimit(_: number)

	maximumLinearLimit: number;

	setMinimumAngularLimit(_: number)

	minimumAngularLimit: number;

	setMinimumLinearLimit(_: number)

	minimumLinearLimit: number;

	setMotorMaximumForce(_: number)

	motorMaximumForce: number;

	setMotorMaximumTorque(_: number)

	motorMaximumTorque: number;

	setMotorTargetAngularVelocity(_: number)

	motorTargetAngularVelocity: number;

	setMotorTargetLinearVelocity(_: number)

	motorTargetLinearVelocity: number;
}

declare var SCNPhysicsTestBackfaceCullingKey: string;

declare var SCNPhysicsTestCollisionBitMaskKey: string;

declare var SCNPhysicsTestSearchModeAll: string;

declare var SCNPhysicsTestSearchModeAny: string;

declare var SCNPhysicsTestSearchModeClosest: string;

declare var SCNPhysicsTestSearchModeKey: string;

declare class SCNPhysicsVehicle extends SCNPhysicsBehavior {

	static vehicleWithChassisBodyWheels(_: SCNPhysicsBody, wheels: NSArray<SCNPhysicsVehicleWheel>): SCNPhysicsVehicle;

	readonly chassisBody: SCNPhysicsBody;

	readonly speedInKilometersPerHour: number;

	readonly wheels: NSArray<SCNPhysicsVehicleWheel>;

	applyBrakingForceForWheelAtIndex(_: number, forWheelAtIndex: number): void;

	applyEngineForceForWheelAtIndex(_: number, forWheelAtIndex: number): void;

	setSteeringAngleForWheelAtIndex(_: number, forWheelAtIndex: number): void;
}

declare class SCNPhysicsVehicleWheel extends NSObject implements NSCopying, NSSecureCoding {

	static wheelWithNode(_: SCNNode): SCNPhysicsVehicleWheel;

	setAxle(_: SCNVector3)

	axle: SCNVector3;

	setConnectionPosition(_: SCNVector3)

	connectionPosition: SCNVector3;

	setFrictionSlip(_: number)

	frictionSlip: number;

	setMaximumSuspensionForce(_: number)

	maximumSuspensionForce: number;

	setMaximumSuspensionTravel(_: number)

	maximumSuspensionTravel: number;

	readonly node: SCNNode;

	setRadius(_: number)

	radius: number;

	setSteeringAxis(_: SCNVector3)

	steeringAxis: SCNVector3;

	setSuspensionCompression(_: number)

	suspensionCompression: number;

	setSuspensionDamping(_: number)

	suspensionDamping: number;

	setSuspensionRestLength(_: number)

	suspensionRestLength: number;

	setSuspensionStiffness(_: number)

	suspensionStiffness: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SCNPhysicsWorld extends NSObject implements NSSecureCoding {

	readonly allBehaviors: NSArray<SCNPhysicsBehavior>;

	setContactDelegate(_: SCNPhysicsContactDelegate)

	contactDelegate: SCNPhysicsContactDelegate;

	setGravity(_: SCNVector3)

	gravity: SCNVector3;

	setSpeed(_: number)

	speed: number;

	setTimeStep(_: number)

	timeStep: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addBehavior(_: SCNPhysicsBehavior): void;

	contactTestBetweenBodyAndBodyOptions(_: SCNPhysicsBody, _: SCNPhysicsBody, options?: NSDictionary<string, any>): NSArray<SCNPhysicsContact>;

	contactTestWithBodyOptions(with_: SCNPhysicsBody, options?: NSDictionary<string, any>): NSArray<SCNPhysicsContact>;

	convexSweepTestWithShapeFromTransformToTransformOptions(with_: SCNPhysicsShape, from: CATransform3D, to: CATransform3D, options?: NSDictionary<string, any>): NSArray<SCNPhysicsContact>;

	encodeWithCoder(_: NSCoder): void;

	rayTestWithSegmentFromPointToPointOptions(from: SCNVector3, to: SCNVector3, options?: NSDictionary<string, any>): NSArray<SCNHitTestResult>;

	removeAllBehaviors(): void;

	removeBehavior(_: SCNPhysicsBehavior): void;

	updateCollisionPairs(): void;
}

declare class SCNPlane extends SCNGeometry {

	static geometry(): SCNPlane; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNPlane; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNPlane; // inherited from SCNGeometry

	static planeWithWidthHeight(_: number, height: number): SCNPlane;

	setCornerRadius(_: number)

	cornerRadius: number;

	setCornerSegmentCount(_: number)

	cornerSegmentCount: number;

	setHeight(_: number)

	height: number;

	setHeightSegmentCount(_: number)

	heightSegmentCount: number;

	setWidth(_: number)

	width: number;

	setWidthSegmentCount(_: number)

	widthSegmentCount: number;
}

declare var SCNPreferLowPowerDeviceKey: string;

declare var SCNPreferredDeviceKey: string;

declare var SCNPreferredRenderingAPIKey: string;

declare class SCNProgram extends NSObject implements NSCopying, NSSecureCoding {

	static program(): SCNProgram;

	setDelegate(_: SCNProgramDelegate)

	delegate: SCNProgramDelegate;

	setFragmentFunctionName(_: string)

	fragmentFunctionName: string;

	setFragmentShader(_: string)

	fragmentShader: string;

	setGeometryShader(_: string)

	geometryShader: string;

	setLibrary(_: MTLLibrary)

	library: MTLLibrary;

	setOpaque(_: boolean)

	isOpaque: boolean;

	setTessellationControlShader(_: string)

	tessellationControlShader: string;

	setTessellationEvaluationShader(_: string)

	tessellationEvaluationShader: string;

	setVertexFunctionName(_: string)

	vertexFunctionName: string;

	setVertexShader(_: string)

	vertexShader: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	handleBindingOfBufferNamedFrequencyUsingBlock(ofBufferNamed: string, frequency: SCNBufferFrequency, handler: (p1: SCNBufferStream, p2: SCNNode, p3: SCNShadable, p4: SCNRenderer) => void): void;

	semanticForSymbol(_: string): string;

	setSemanticForSymbolOptions(_?: string, forSymbol: string, options?: NSDictionary<string, any>): void;
}

declare const SCNProgramCompilationError: number;

interface SCNProgramDelegate extends NSObjectProtocol {

	programHandleError?(_: SCNProgram, handleError: NSError): void;
}
declare var SCNProgramDelegate: {

	prototype: SCNProgramDelegate;
};

declare var SCNProgramMappingChannelKey: string;

declare var SCNProjectionTransform: string;

declare class SCNPyramid extends SCNGeometry {

	static geometry(): SCNPyramid; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNPyramid; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNPyramid; // inherited from SCNGeometry

	static pyramidWithWidthHeightLength(_: number, height: number, length: number): SCNPyramid;

	setHeight(_: number)

	height: number;

	setHeightSegmentCount(_: number)

	heightSegmentCount: number;

	setLength(_: number)

	length: number;

	setLengthSegmentCount(_: number)

	lengthSegmentCount: number;

	setWidth(_: number)

	width: number;

	setWidthSegmentCount(_: number)

	widthSegmentCount: number;
}

enum SCNReferenceLoadingPolicy {

	Immediate = 0,

	OnDemand = 1
}


declare class SCNReferenceNode extends SCNNode {

	static node(): SCNReferenceNode; // inherited from SCNNode

	static nodeWithMDLObject(_: MDLObject): SCNReferenceNode; // inherited from SCNNode

	static referenceNodeWithURL(_: NSURL): SCNReferenceNode;

	readonly isLoaded: boolean;

	setLoadingPolicy(_: SCNReferenceLoadingPolicy)

	loadingPolicy: SCNReferenceLoadingPolicy;

	setReferenceURL(_: NSURL)

	referenceURL: NSURL;

	static create(URL: NSURL);

	load(): void;

	unload(): void;
}

declare class SCNRenderer extends NSObject implements SCNSceneRenderer, SCNTechniqueSupport {

	static rendererWithContextOptions(_?: _CGLContextObject, options?: NSDictionary<any, any>): SCNRenderer;

	static rendererWithDeviceOptions(_?: MTLDevice, options?: NSDictionary<any, any>): SCNRenderer;

	readonly nextFrameTime: number;

	readonly audioEngine: AVAudioEngine; // inherited from SCNSceneRenderer

	readonly audioEnvironmentNode: AVAudioEnvironmentNode; // inherited from SCNSceneRenderer

	setAudioListener(_: SCNNode)

	audioListener: SCNNode; // inherited from SCNSceneRenderer

	setAutoenablesDefaultLighting(_: boolean)

	autoenablesDefaultLighting: boolean; // inherited from SCNSceneRenderer

	readonly colorPixelFormat: MTLPixelFormat; // inherited from SCNSceneRenderer

	readonly commandQueue: MTLCommandQueue; // inherited from SCNSceneRenderer

	readonly context: any; // inherited from SCNSceneRenderer

	readonly currentRenderCommandEncoder: MTLRenderCommandEncoder; // inherited from SCNSceneRenderer

	readonly currentViewport: CGRect; // inherited from SCNSceneRenderer

	readonly debugDescription: string; // inherited from NSObjectProtocol

	setDebugOptions(_: SCNDebugOptions)

	debugOptions: SCNDebugOptions; // inherited from SCNSceneRenderer

	setDelegate(_: SCNSceneRendererDelegate)

	delegate: SCNSceneRendererDelegate; // inherited from SCNSceneRenderer

	readonly depthPixelFormat: MTLPixelFormat; // inherited from SCNSceneRenderer

	readonly description: string; // inherited from NSObjectProtocol

	readonly device: MTLDevice; // inherited from SCNSceneRenderer

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setJitteringEnabled(_: boolean)

	isJitteringEnabled: boolean; // inherited from SCNSceneRenderer

	setLoops(_: boolean)

	loops: boolean; // inherited from SCNSceneRenderer

	setOverlaySKScene(_: SKScene)

	overlaySKScene: SKScene; // inherited from SCNSceneRenderer

	setPlaying(_: boolean)

	isPlaying: boolean; // inherited from SCNSceneRenderer

	setPointOfView(_: SCNNode)

	pointOfView: SCNNode; // inherited from SCNSceneRenderer

	readonly renderingAPI: SCNRenderingAPI; // inherited from SCNSceneRenderer

	setScene(_: SCNScene)

	scene: SCNScene; // inherited from SCNSceneRenderer

	setSceneTime(_: number)

	sceneTime: number; // inherited from SCNSceneRenderer

	setShowsStatistics(_: boolean)

	showsStatistics: boolean; // inherited from SCNSceneRenderer

	readonly stencilPixelFormat: MTLPixelFormat; // inherited from SCNSceneRenderer

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setTechnique(_: SCNTechnique)

	technique: SCNTechnique; // inherited from SCNTechniqueSupport

	setTemporalAntialiasingEnabled(_: boolean)

	isTemporalAntialiasingEnabled: boolean; // inherited from SCNSceneRenderer

	setUsesReverseZ(_: boolean)

	usesReverseZ: boolean; // inherited from SCNSceneRenderer

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	hitTestOptions(_: CGPoint, options?: NSDictionary<string, any>): NSArray<SCNHitTestResult>;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	isNodeInsideFrustumWithPointOfView(_: SCNNode, withPointOfView: SCNNode): boolean;

	nodesInsideFrustumWithPointOfView(_: SCNNode): NSArray<SCNNode>;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	prepareObjectShouldAbortBlock(_: any, shouldAbortBlock?: () => boolean): boolean;

	prepareObjectsWithCompletionHandler(_: NSArray<any>, withCompletionHandler?: (p1: boolean) => void): void;

	presentSceneWithTransitionIncomingPointOfViewCompletionHandler(_: SCNScene, withTransition: SKTransition, incomingPointOfView?: SCNNode, completionHandler?: () => void): void;

	projectPoint(_: SCNVector3): SCNVector3;

	renderAtTime(_: number): void;

	renderAtTimeViewportCommandBufferPassDescriptor(_: number, viewport: CGRect, commandBuffer: MTLCommandBuffer, passDescriptor: MTLRenderPassDescriptor): void;

	renderWithViewportCommandBufferPassDescriptor(_: CGRect, commandBuffer: MTLCommandBuffer, passDescriptor: MTLRenderPassDescriptor): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	snapshotAtTimeWithSizeAntialiasingMode(_: number, withSize: CGSize, antialiasingMode: SCNAntialiasingMode): NSImage;

	unprojectPoint(_: SCNVector3): SCNVector3;

	updateAtTime(_: number): void;

	updateProbesAtTime(_: NSArray<SCNNode>, atTime: number): void;
}

enum SCNRenderingAPI {

	Metal = 0,

	OpenGLLegacy = 1,

	OpenGLCore32 = 2,

	OpenGLCore41 = 3
}


declare class SCNReplicatorConstraint extends SCNConstraint {

	static replicatorConstraintWithTarget(_?: SCNNode): SCNReplicatorConstraint;

	setOrientationOffset(_: SCNVector4)

	orientationOffset: SCNVector4;

	setPositionOffset(_: SCNVector3)

	positionOffset: SCNVector3;

	setReplicatesOrientation(_: boolean)

	replicatesOrientation: boolean;

	setReplicatesPosition(_: boolean)

	replicatesPosition: boolean;

	setReplicatesScale(_: boolean)

	replicatesScale: boolean;

	setScaleOffset(_: SCNVector3)

	scaleOffset: SCNVector3;

	setTarget(_: SCNNode)

	target: SCNNode;
}

declare class SCNScene extends NSObject implements NSSecureCoding, GKSceneRootNodeType {

	static scene(): SCNScene;

	static sceneNamed(_: string): SCNScene;

	static sceneNamedInDirectoryOptions(_: string, inDirectory?: string, options?: NSDictionary<string, any>): SCNScene;

	static sceneWithMDLAsset(_: MDLAsset): SCNScene;

	static sceneWithURLOptionsError(options: NSURL, error?: NSDictionary<string, any>): SCNScene;

	readonly background: SCNMaterialProperty;

	setFogColor(_: any)

	fogColor: any;

	setFogDensityExponent(_: number)

	fogDensityExponent: number;

	setFogEndDistance(_: number)

	fogEndDistance: number;

	setFogStartDistance(_: number)

	fogStartDistance: number;

	readonly lightingEnvironment: SCNMaterialProperty;

	readonly particleSystems: NSArray<SCNParticleSystem>;

	setPaused(_: boolean)

	isPaused: boolean;

	readonly physicsWorld: SCNPhysicsWorld;

	readonly rootNode: SCNNode;

	setScreenSpaceReflectionMaximumDistance(_: number)

	screenSpaceReflectionMaximumDistance: number;

	setScreenSpaceReflectionSampleCount(_: number)

	screenSpaceReflectionSampleCount: number;

	setScreenSpaceReflectionStride(_: number)

	screenSpaceReflectionStride: number;

	setWantsScreenSpaceReflection(_: boolean)

	wantsScreenSpaceReflection: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addParticleSystemWithTransform(_: SCNParticleSystem, transform: CATransform3D): void;

	attributeForKey(_: string): any;

	conformsToProtocol(_: any /* Protocol */): boolean;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeAllParticleSystems(): void;

	removeParticleSystem(_: SCNParticleSystem): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setAttributeForKey(_?: any, forKey: string): void;

	writeToURLOptionsDelegateProgressHandler(_: NSURL, options?: NSDictionary<string, any>, delegate?: SCNSceneExportDelegate, progressHandler?: (p1: number, p2: NSError, p3: boolean) => void): boolean;
}

declare var SCNSceneEndTimeAttributeKey: string;

interface SCNSceneExportDelegate extends NSObjectProtocol {

	writeImageWithSceneDocumentURLOriginalImageURL?(_: NSImage, withSceneDocumentURL: NSURL, originalImageURL?: NSURL): NSURL;
}
declare var SCNSceneExportDelegate: {

	prototype: SCNSceneExportDelegate;
};

declare var SCNSceneExportDestinationURL: string;

declare var SCNSceneFrameRateAttributeKey: string;

interface SCNSceneRenderer extends NSObjectProtocol {

	audioEngine: AVAudioEngine;

	audioEnvironmentNode: AVAudioEnvironmentNode;

	setAudioListener(_: SCNNode)

	audioListener: SCNNode;

	setAutoenablesDefaultLighting(_: boolean)

	autoenablesDefaultLighting: boolean;

	colorPixelFormat: MTLPixelFormat;

	commandQueue: MTLCommandQueue;

	context: any;

	currentRenderCommandEncoder: MTLRenderCommandEncoder;

	currentViewport: CGRect;

	setDebugOptions(_: SCNDebugOptions)

	debugOptions: SCNDebugOptions;

	setDelegate(_: SCNSceneRendererDelegate)

	delegate: SCNSceneRendererDelegate;

	depthPixelFormat: MTLPixelFormat;

	device: MTLDevice;

	setJitteringEnabled(_: boolean)

	isJitteringEnabled: boolean;

	setLoops(_: boolean)

	loops: boolean;

	setOverlaySKScene(_: SKScene)

	overlaySKScene: SKScene;

	setPlaying(_: boolean)

	isPlaying: boolean;

	setPointOfView(_: SCNNode)

	pointOfView: SCNNode;

	renderingAPI: SCNRenderingAPI;

	setScene(_: SCNScene)

	scene: SCNScene;

	setSceneTime(_: number)

	sceneTime: number;

	setShowsStatistics(_: boolean)

	showsStatistics: boolean;

	stencilPixelFormat: MTLPixelFormat;

	setTemporalAntialiasingEnabled(_: boolean)

	isTemporalAntialiasingEnabled: boolean;

	setUsesReverseZ(_: boolean)

	usesReverseZ: boolean;

	hitTestOptions(_: CGPoint, options?: NSDictionary<string, any>): NSArray<SCNHitTestResult>;

	isNodeInsideFrustumWithPointOfView(_: SCNNode, withPointOfView: SCNNode): boolean;

	nodesInsideFrustumWithPointOfView(_: SCNNode): NSArray<SCNNode>;

	prepareObjectShouldAbortBlock(_: any, shouldAbortBlock?: () => boolean): boolean;

	prepareObjectsWithCompletionHandler(_: NSArray<any>, withCompletionHandler?: (p1: boolean) => void): void;

	presentSceneWithTransitionIncomingPointOfViewCompletionHandler(_: SCNScene, withTransition: SKTransition, incomingPointOfView?: SCNNode, completionHandler?: () => void): void;

	projectPoint(_: SCNVector3): SCNVector3;

	unprojectPoint(_: SCNVector3): SCNVector3;
}
declare var SCNSceneRenderer: {

	prototype: SCNSceneRenderer;
};

interface SCNSceneRendererDelegate extends NSObjectProtocol {

	rendererDidApplyAnimationsAtTime?(_: SCNSceneRenderer, didApplyAnimationsAtTime: number): void;

	rendererDidApplyConstraintsAtTime?(_: SCNSceneRenderer, didApplyConstraintsAtTime: number): void;

	rendererDidRenderSceneAtTime?(_: SCNSceneRenderer, didRenderScene: SCNScene, atTime: number): void;

	rendererDidSimulatePhysicsAtTime?(_: SCNSceneRenderer, didSimulatePhysicsAtTime: number): void;

	rendererUpdateAtTime?(_: SCNSceneRenderer, updateAtTime: number): void;

	rendererWillRenderSceneAtTime?(_: SCNSceneRenderer, willRenderScene: SCNScene, atTime: number): void;
}
declare var SCNSceneRendererDelegate: {

	prototype: SCNSceneRendererDelegate;
};

declare class SCNSceneSource extends NSObject {

	static sceneSourceWithDataOptions(_: NSData, options?: NSDictionary<string, any>): SCNSceneSource;

	static sceneSourceWithURLOptions(_: NSURL, options?: NSDictionary<string, any>): SCNSceneSource;

	readonly data: NSData;

	readonly url: NSURL;

	static create(data: NSData, options: NSDictionary<string, any>);

	static create(URL: NSURL, options: NSDictionary<string, any>);

	entriesPassingTest(_: (p1: any, p2: string, p3: boolean) => boolean): NSArray<any>;

	entryWithIdentifierWithClass(_: string, withClass: typeof NSObject): any;

	identifiersOfEntriesWithClass(withClass: typeof NSObject): NSArray<string>;

	propertyForKey(_: string): any;

	sceneWithOptionsError(error?: NSDictionary<string, any>): SCNScene;

	sceneWithOptionsStatusHandler(_?: NSDictionary<string, any>, statusHandler?: (p1: number, p2: SCNSceneSourceStatus, p3: NSError, p4: boolean) => void): SCNScene;
}

declare var SCNSceneSourceAnimationImportPolicyDoNotPlay: string;

declare var SCNSceneSourceAnimationImportPolicyKey: string;

declare var SCNSceneSourceAnimationImportPolicyPlay: string;

declare var SCNSceneSourceAnimationImportPolicyPlayRepeatedly: string;

declare var SCNSceneSourceAnimationImportPolicyPlayUsingSceneTimeBase: string;

declare var SCNSceneSourceAssetAuthorKey: string;

declare var SCNSceneSourceAssetAuthoringToolKey: string;

declare var SCNSceneSourceAssetContributorsKey: string;

declare var SCNSceneSourceAssetCreatedDateKey: string;

declare var SCNSceneSourceAssetDirectoryURLsKey: string;

declare var SCNSceneSourceAssetModifiedDateKey: string;

declare var SCNSceneSourceAssetUnitKey: string;

declare var SCNSceneSourceAssetUnitMeterKey: string;

declare var SCNSceneSourceAssetUnitNameKey: string;

declare var SCNSceneSourceAssetUpAxisKey: string;

declare var SCNSceneSourceCheckConsistencyKey: string;

declare var SCNSceneSourceConvertToYUpKey: string;

declare var SCNSceneSourceConvertUnitsToMetersKey: string;

declare var SCNSceneSourceCreateNormalsIfAbsentKey: string;

declare var SCNSceneSourceFlattenSceneKey: string;

declare var SCNSceneSourceLoadingOptionPreserveOriginalTopology: string;

declare var SCNSceneSourceOverrideAssetURLsKey: string;

enum SCNSceneSourceStatus {

	Error = -1,

	Parsing = 4,

	Validating = 8,

	Processing = 12,

	Complete = 16
}


declare var SCNSceneSourceStrictConformanceKey: string;

declare var SCNSceneStartTimeAttributeKey: string;

declare var SCNSceneUpAxisAttributeKey: string;

interface SCNShadable extends NSObjectProtocol {

	setProgram(_: SCNProgram)

	program?: SCNProgram;

	setShaderModifiers(_: NSDictionary<string, string>)

	shaderModifiers?: NSDictionary<string, string>;

	handleBindingOfSymbolUsingBlock?(_: string, usingBlock?: (p1: number, p2: number, p3: SCNNode, p4: SCNRenderer) => void): void;

	handleUnbindingOfSymbolUsingBlock?(_: string, usingBlock?: (p1: number, p2: number, p3: SCNNode, p4: SCNRenderer) => void): void;
}
declare var SCNShadable: {

	prototype: SCNShadable;
};

declare var SCNShaderModifierEntryPointFragment: string;

declare var SCNShaderModifierEntryPointGeometry: string;

declare var SCNShaderModifierEntryPointLightingModel: string;

declare var SCNShaderModifierEntryPointSurface: string;

enum SCNShadowMode {

	Forward = 0,

	Deferred = 1,

	Modulated = 2
}


declare class SCNShape extends SCNGeometry {

	static geometry(): SCNShape; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNShape; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNShape; // inherited from SCNGeometry

	static shapeWithPathExtrusionDepth(_?: NSBezierPath, extrusionDepth: number): SCNShape;

	setChamferMode(_: SCNChamferMode)

	chamferMode: SCNChamferMode;

	setChamferProfile(_: NSBezierPath)

	chamferProfile: NSBezierPath;

	setChamferRadius(_: number)

	chamferRadius: number;

	setExtrusionDepth(_: number)

	extrusionDepth: number;

	setPath(_: NSBezierPath)

	path: NSBezierPath;
}

declare class SCNSkinner extends NSObject implements NSSecureCoding {

	static skinnerWithBaseGeometryBonesBoneInverseBindTransformsBoneWeightsBoneIndices(_?: SCNGeometry, bones: NSArray<SCNNode>, boneInverseBindTransforms?: NSArray<NSValue>, boneWeights: SCNGeometrySource, boneIndices: SCNGeometrySource): SCNSkinner;

	setBaseGeometry(_: SCNGeometry)

	baseGeometry: SCNGeometry;

	setBaseGeometryBindTransform(_: CATransform3D)

	baseGeometryBindTransform: CATransform3D;

	readonly boneIndices: SCNGeometrySource;

	readonly boneInverseBindTransforms: NSArray<NSValue>;

	readonly boneWeights: SCNGeometrySource;

	readonly bones: NSArray<SCNNode>;

	setSkeleton(_: SCNNode)

	skeleton: SCNNode;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class SCNSliderConstraint extends SCNConstraint {

	static sliderConstraint(): SCNSliderConstraint;

	setCollisionCategoryBitMask(_: number)

	collisionCategoryBitMask: number;

	setOffset(_: SCNVector3)

	offset: SCNVector3;

	setRadius(_: number)

	radius: number;
}

declare class SCNSphere extends SCNGeometry {

	static geometry(): SCNSphere; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNSphere; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNSphere; // inherited from SCNGeometry

	static sphereWithRadius(_: number): SCNSphere;

	setGeodesic(_: boolean)

	isGeodesic: boolean;

	setRadius(_: number)

	radius: number;

	setSegmentCount(_: number)

	segmentCount: number;
}

declare class SCNTechnique extends NSObject implements NSCopying, NSSecureCoding, SCNAnimatable {

	static techniqueBySequencingTechniques(_: NSArray<SCNTechnique>): SCNTechnique;

	static techniqueWithDictionary(_: NSDictionary<string, any>): SCNTechnique;

	readonly dictionaryRepresentation: NSDictionary<string, any>;

	setLibrary(_: MTLLibrary)

	library: MTLLibrary;

	readonly animationKeys: NSArray<string>; // inherited from SCNAnimatable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addAnimationForKey(_: SCNAnimationProtocol, forKey?: string): void;

	addAnimationPlayerForKey(_: SCNAnimationPlayer, forKey?: string): void;

	animationPlayerForKey(_: string): SCNAnimationPlayer;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	handleBindingOfSymbolUsingBlock(_: string, usingBlock?: (p1: number, p2: number, p3: SCNNode, p4: SCNRenderer) => void): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	objectForKeyedSubscript(_: any): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeAnimationForKeyBlendOutDuration(_: string, blendOutDuration: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setObjectForKeyedSubscript(_?: any, forKeyedSubscript: any): void;
}

interface SCNTechniqueSupport extends NSObjectProtocol {

	setTechnique(_: SCNTechnique)

	technique: SCNTechnique;
}
declare var SCNTechniqueSupport: {

	prototype: SCNTechniqueSupport;
};

enum SCNTessellationSmoothingMode {

	None = 0,

	PNTriangles = 1,

	Phong = 2
}


declare class SCNText extends SCNGeometry {

	static geometry(): SCNText; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNText; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNText; // inherited from SCNGeometry

	static textWithStringExtrusionDepth(_?: any, extrusionDepth: number): SCNText;

	setAlignmentMode(_: string)

	alignmentMode: string;

	setChamferProfile(_: NSBezierPath)

	chamferProfile: NSBezierPath;

	setChamferRadius(_: number)

	chamferRadius: number;

	setContainerFrame(_: CGRect)

	containerFrame: CGRect;

	setExtrusionDepth(_: number)

	extrusionDepth: number;

	setFlatness(_: number)

	flatness: number;

	setFont(_: NSFont)

	font: NSFont;

	setString(_: any)

	string: any;

	readonly textSize: CGSize;

	setTruncationMode(_: string)

	truncationMode: string;

	setWrapped(_: boolean)

	isWrapped: boolean;
}

declare class SCNTimingFunction extends NSObject implements NSSecureCoding {

	static functionWithCAMediaTimingFunction(_: CAMediaTimingFunction): SCNTimingFunction;

	static functionWithTimingMode(_: SCNActionTimingMode): SCNTimingFunction;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class SCNTorus extends SCNGeometry {

	static geometry(): SCNTorus; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNTorus; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNTorus; // inherited from SCNGeometry

	static torusWithRingRadiusPipeRadius(_: number, pipeRadius: number): SCNTorus;

	setPipeRadius(_: number)

	pipeRadius: number;

	setPipeSegmentCount(_: number)

	pipeSegmentCount: number;

	setRingRadius(_: number)

	ringRadius: number;

	setRingSegmentCount(_: number)

	ringSegmentCount: number;
}

declare class SCNTransaction extends NSObject {

	static begin(): void;

	static commit(): void;

	static flush(): void;

	static lock(): void;

	static setValueForKey(_?: any, forKey: string): void;

	static unlock(): void;

	static valueForKey(_: string): any;

	static setAnimationDuration(_: number)

	animationDuration: number;

	static setAnimationTimingFunction(_: CAMediaTimingFunction)

	animationTimingFunction: CAMediaTimingFunction;

	static setCompletionBlock(_: () => void)

	completionBlock: () => void;

	static setDisableActions(_: boolean)

	disableActions: boolean;
}

declare class SCNTransformConstraint extends SCNConstraint {

	static orientationConstraintInWorldSpaceWithBlock(_: boolean, withBlock: (p1: SCNNode, p2: SCNVector4) => SCNVector4): SCNTransformConstraint;

	static positionConstraintInWorldSpaceWithBlock(_: boolean, withBlock: (p1: SCNNode, p2: SCNVector3) => SCNVector3): SCNTransformConstraint;

	static transformConstraintInWorldSpaceWithBlock(_: boolean, withBlock: (p1: SCNNode, p2: CATransform3D) => CATransform3D): SCNTransformConstraint;
}

enum SCNTransparencyMode {

	AOne = 0,

	RGBZero = 1,

	SingleLayer = 2,

	DualLayer = 3,

	Default = 0
}


declare class SCNTube extends SCNGeometry {

	static geometry(): SCNTube; // inherited from SCNGeometry

	static geometryWithMDLMesh(_: MDLMesh): SCNTube; // inherited from SCNGeometry

	static geometryWithSourcesElements(_: NSArray<SCNGeometrySource>, elements?: NSArray<SCNGeometryElement>): SCNTube; // inherited from SCNGeometry

	static tubeWithInnerRadiusOuterRadiusHeight(_: number, outerRadius: number, height: number): SCNTube;

	setHeight(_: number)

	height: number;

	setHeightSegmentCount(_: number)

	heightSegmentCount: number;

	setInnerRadius(_: number)

	innerRadius: number;

	setOuterRadius(_: number)

	outerRadius: number;

	setRadialSegmentCount(_: number)

	radialSegmentCount: number;
}

interface SCNVector3 {
	x: number;
	y: number;
	z: number;
}
declare var SCNVector3: SCNVector3;

declare function SCNVector3EqualToVector3(a: SCNVector3, b: SCNVector3): boolean;

declare var SCNVector3Zero: SCNVector3;

interface SCNVector4 {
	x: number;
	y: number;
	z: number;
	w: number;
}
declare var SCNVector4: SCNVector4;

declare function SCNVector4EqualToVector4(a: SCNVector4, b: SCNVector4): boolean;

declare var SCNVector4Zero: SCNVector4;

declare class SCNView extends NSView implements SCNSceneRenderer, SCNTechniqueSupport {

	setAllowsCameraControl(_: boolean)

	allowsCameraControl: boolean;

	setAntialiasingMode(_: SCNAntialiasingMode)

	antialiasingMode: SCNAntialiasingMode;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	readonly cameraControlConfiguration: SCNCameraControlConfiguration;

	readonly defaultCameraController: SCNCameraController;

	setDrawableResizesAsynchronously(_: boolean)

	drawableResizesAsynchronously: boolean;

	setPreferredFramesPerSecond(_: number)

	preferredFramesPerSecond: number;

	setRendersContinuously(_: boolean)

	rendersContinuously: boolean;

	readonly audioEngine: AVAudioEngine; // inherited from SCNSceneRenderer

	readonly audioEnvironmentNode: AVAudioEnvironmentNode; // inherited from SCNSceneRenderer

	setAudioListener(_: SCNNode)

	audioListener: SCNNode; // inherited from SCNSceneRenderer

	setAutoenablesDefaultLighting(_: boolean)

	autoenablesDefaultLighting: boolean; // inherited from SCNSceneRenderer

	readonly colorPixelFormat: MTLPixelFormat; // inherited from SCNSceneRenderer

	readonly commandQueue: MTLCommandQueue; // inherited from SCNSceneRenderer

	readonly context: any; // inherited from SCNSceneRenderer

	readonly currentRenderCommandEncoder: MTLRenderCommandEncoder; // inherited from SCNSceneRenderer

	readonly currentViewport: CGRect; // inherited from SCNSceneRenderer

	readonly debugDescription: string; // inherited from NSObjectProtocol

	setDebugOptions(_: SCNDebugOptions)

	debugOptions: SCNDebugOptions; // inherited from SCNSceneRenderer

	setDelegate(_: SCNSceneRendererDelegate)

	delegate: SCNSceneRendererDelegate; // inherited from SCNSceneRenderer

	readonly depthPixelFormat: MTLPixelFormat; // inherited from SCNSceneRenderer

	readonly description: string; // inherited from NSObjectProtocol

	readonly device: MTLDevice; // inherited from SCNSceneRenderer

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setJitteringEnabled(_: boolean)

	isJitteringEnabled: boolean; // inherited from SCNSceneRenderer

	setLoops(_: boolean)

	loops: boolean; // inherited from SCNSceneRenderer

	setOverlaySKScene(_: SKScene)

	overlaySKScene: SKScene; // inherited from SCNSceneRenderer

	setPlaying(_: boolean)

	isPlaying: boolean; // inherited from SCNSceneRenderer

	setPointOfView(_: SCNNode)

	pointOfView: SCNNode; // inherited from SCNSceneRenderer

	readonly renderingAPI: SCNRenderingAPI; // inherited from SCNSceneRenderer

	setScene(_: SCNScene)

	scene: SCNScene; // inherited from SCNSceneRenderer

	setSceneTime(_: number)

	sceneTime: number; // inherited from SCNSceneRenderer

	setShowsStatistics(_: boolean)

	showsStatistics: boolean; // inherited from SCNSceneRenderer

	readonly stencilPixelFormat: MTLPixelFormat; // inherited from SCNSceneRenderer

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setTechnique(_: SCNTechnique)

	technique: SCNTechnique; // inherited from SCNTechniqueSupport

	setTemporalAntialiasingEnabled(_: boolean)

	isTemporalAntialiasingEnabled: boolean; // inherited from SCNSceneRenderer

	setUsesReverseZ(_: boolean)

	usesReverseZ: boolean; // inherited from SCNSceneRenderer

	readonly  // inherited from NSObjectProtocol

	static create(frame: CGRect, options: NSDictionary<string, any>);

	conformsToProtocol(_: any /* Protocol */): boolean;

	hitTestOptions(_: CGPoint, options?: NSDictionary<string, any>): NSArray<SCNHitTestResult>;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	isNodeInsideFrustumWithPointOfView(_: SCNNode, withPointOfView: SCNNode): boolean;

	nodesInsideFrustumWithPointOfView(_: SCNNode): NSArray<SCNNode>;

	pause(_?: any): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	play(_?: any): void;

	prepareObjectShouldAbortBlock(_: any, shouldAbortBlock?: () => boolean): boolean;

	prepareObjectsWithCompletionHandler(_: NSArray<any>, withCompletionHandler?: (p1: boolean) => void): void;

	presentSceneWithTransitionIncomingPointOfViewCompletionHandler(_: SCNScene, withTransition: SKTransition, incomingPointOfView?: SCNNode, completionHandler?: () => void): void;

	projectPoint(_: SCNVector3): SCNVector3;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	snapshot(): NSImage;

	stop(_?: any): void;

	unprojectPoint(_: SCNVector3): SCNVector3;
}

declare var SCNViewTransform: string;

enum SCNWrapMode {

	Clamp = 1,

	Repeat = 2,

	ClampToBorder = 3,

	Mirror = 4
}

