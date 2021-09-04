
declare class SK3DNode extends SKNode {

	static node(): SK3DNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SK3DNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SK3DNode; // inherited from SKNode

	static nodeWithViewportSize(_: CGSize): SK3DNode;

	setAutoenablesDefaultLighting(_: boolean)

	autoenablesDefaultLighting: boolean;

	setLoops(_: boolean)

	loops: boolean;

	setPlaying(_: boolean)

	isPlaying: boolean;

	setPointOfView(_: SCNNode)

	pointOfView: SCNNode;

	setSceneTime(_: number)

	sceneTime: number;

	setScnScene(_: SCNScene)

	scnScene: SCNScene;

	setViewportSize(_: CGSize)

	viewportSize: CGSize;

	static create(viewportSize: CGSize);

	hitTestOptions(_: CGPoint, options?: NSDictionary<string, any>): NSArray<SCNHitTestResult>;

	projectPoint(_: number): number;

	unprojectPoint(_: number): number;
}

declare class SKAction extends NSObject implements NSCopying, NSSecureCoding {

	static actionNamed(_: string): SKAction;

	static actionNamedDuration(_: string, duration: number): SKAction;

	static actionNamedFromURL(_: string, fromURL: NSURL): SKAction;

	static actionNamedFromURLDuration(_: string, fromURL: NSURL, duration: number): SKAction;

	static animateWithNormalTexturesTimePerFrame(_: NSArray<SKTexture>, timePerFrame: number): SKAction;

	static animateWithNormalTexturesTimePerFrameResizeRestore(_: NSArray<SKTexture>, timePerFrame: number, resize: boolean, restore: boolean): SKAction;

	static animateWithTexturesTimePerFrame(_: NSArray<SKTexture>, timePerFrame: number): SKAction;

	static animateWithTexturesTimePerFrameResizeRestore(_: NSArray<SKTexture>, timePerFrame: number, resize: boolean, restore: boolean): SKAction;

	static animateWithWarpsTimes(_: NSArray<SKWarpGeometry>, times: NSArray<number>): SKAction;

	static animateWithWarpsTimesRestore(_: NSArray<SKWarpGeometry>, times: NSArray<number>, restore: boolean): SKAction;

	static applyAngularImpulseDuration(_: number, duration: number): SKAction;

	static applyForceAtPointDuration(_: CGVector, atPoint: CGPoint, duration: number): SKAction;

	static applyForceDuration(_: CGVector, duration: number): SKAction;

	static applyImpulseAtPointDuration(_: CGVector, atPoint: CGPoint, duration: number): SKAction;

	static applyImpulseDuration(_: CGVector, duration: number): SKAction;

	static applyTorqueDuration(_: number, duration: number): SKAction;

	static changeChargeByDuration(_: number, duration: number): SKAction;

	static changeChargeToDuration(_: number, duration: number): SKAction;

	static changeMassByDuration(_: number, duration: number): SKAction;

	static changeMassToDuration(_: number, duration: number): SKAction;

	static changeObstructionByDuration(_: number, duration: number): SKAction;

	static changeObstructionToDuration(_: number, duration: number): SKAction;

	static changeOcclusionByDuration(_: number, duration: number): SKAction;

	static changeOcclusionToDuration(_: number, duration: number): SKAction;

	static changePlaybackRateByDuration(_: number, duration: number): SKAction;

	static changePlaybackRateToDuration(_: number, duration: number): SKAction;

	static changeReverbByDuration(_: number, duration: number): SKAction;

	static changeReverbToDuration(_: number, duration: number): SKAction;

	static changeVolumeByDuration(_: number, duration: number): SKAction;

	static changeVolumeToDuration(_: number, duration: number): SKAction;

	static colorizeWithColorColorBlendFactorDuration(_: NSColor, colorBlendFactor: number, duration: number): SKAction;

	static colorizeWithColorBlendFactorDuration(_: number, duration: number): SKAction;

	static customActionWithDurationActionBlock(_: number, actionBlock: (p1: SKNode, p2: number) => void): SKAction;

	static fadeAlphaToDuration(_: number, duration: number): SKAction;

	static fadeInWithDuration(_: number): SKAction;

	static fadeOutWithDuration(_: number): SKAction;

	static falloffByDuration(_: number, duration: number): SKAction;

	static falloffToDuration(_: number, duration: number): SKAction;

	static followPathAsOffsetOrientToPathDuration(_: any, asOffset: boolean, orientToPath: boolean, duration: number): SKAction;

	static followPathAsOffsetOrientToPathSpeed(_: any, asOffset: boolean, orientToPath: boolean, speed: number): SKAction;

	static followPathDuration(_: any, duration: number): SKAction;

	static followPathSpeed(_: any, speed: number): SKAction;

	static group(_: NSArray<SKAction>): SKAction;

	static hide(): SKAction;

	static moveByDuration(_: CGVector, duration: number): SKAction;

	static moveByXYDuration(_: number, y: number, duration: number): SKAction;

	static moveToDuration(_: CGPoint, duration: number): SKAction;

	static moveToXDuration(_: number, duration: number): SKAction;

	static moveToYDuration(_: number, duration: number): SKAction;

	static pause(): SKAction;

	static performSelectorOnTarget(_: string, onTarget: any): SKAction;

	static play(): SKAction;

	static playSoundFileNamedWaitForCompletion(_: string, waitForCompletion: boolean): SKAction;

	static reachToRootNodeDuration(_: CGPoint, rootNode: SKNode, duration: number): SKAction;

	static reachToRootNodeVelocity(_: CGPoint, rootNode: SKNode, velocity: number): SKAction;

	static reachToNodeRootNodeDuration(_: SKNode, rootNode: SKNode, duration: number): SKAction;

	static reachToNodeRootNodeVelocity(_: SKNode, rootNode: SKNode, velocity: number): SKAction;

	static removeFromParent(): SKAction;

	static repeatActionCount(_: SKAction, count: number): SKAction;

	static repeatActionForever(_: SKAction): SKAction;

	static resizeByWidthHeightDuration(_: number, height: number, duration: number): SKAction;

	static resizeToHeightDuration(_: number, duration: number): SKAction;

	static resizeToWidthDuration(_: number, duration: number): SKAction;

	static resizeToWidthHeightDuration(_: number, height: number, duration: number): SKAction;

	static rotateByAngleDuration(_: number, duration: number): SKAction;

	static rotateToAngleDuration(_: number, duration: number): SKAction;

	static rotateToAngleDurationShortestUnitArc(_: number, duration: number, shortestUnitArc: boolean): SKAction;

	static runActionOnChildWithName(_: SKAction, onChildWithName: string): SKAction;

	static runBlock(_: () => void): SKAction;

	static runBlockQueue(_: () => void, queue: NSObject): SKAction;

	static scaleByDuration(_: number, duration: number): SKAction;

	static scaleToDuration(_: number, duration: number): SKAction;

	static scaleToSizeDuration(_: CGSize, duration: number): SKAction;

	static scaleXByYDuration(_: number, y: number, duration: number): SKAction;

	static scaleXToDuration(_: number, duration: number): SKAction;

	static scaleXToYDuration(_: number, y: number, duration: number): SKAction;

	static scaleYToDuration(_: number, duration: number): SKAction;

	static sequence(_: NSArray<SKAction>): SKAction;

	static setNormalTexture(_: SKTexture): SKAction;

	static setNormalTextureResize(_: SKTexture, resize: boolean): SKAction;

	static setTexture(_: SKTexture): SKAction;

	static setTextureResize(_: SKTexture, resize: boolean): SKAction;

	static speedByDuration(_: number, duration: number): SKAction;

	static speedToDuration(_: number, duration: number): SKAction;

	static stereoPanByDuration(_: number, duration: number): SKAction;

	static stereoPanToDuration(_: number, duration: number): SKAction;

	static stop(): SKAction;

	static strengthByDuration(_: number, duration: number): SKAction;

	static strengthToDuration(_: number, duration: number): SKAction;

	static unhide(): SKAction;

	static waitForDuration(_: number): SKAction;

	static waitForDurationWithRange(_: number, withRange: number): SKAction;

	static warpToDuration(_: SKWarpGeometry, duration: number): SKAction;

	setDuration(_: number)

	duration: number;

	setSpeed(_: number)

	speed: number;

	setTimingFunction(_: (p1: number) => number)

	timingFunction: (p1: number) => number;

	setTimingMode(_: SKActionTimingMode)

	timingMode: SKActionTimingMode;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	reversedAction(): SKAction;
}

enum SKActionTimingMode {

	Linear = 0,

	EaseIn = 1,

	EaseOut = 2,

	EaseInEaseOut = 3
}


declare class SKAttribute extends NSObject implements NSSecureCoding {

	static attributeWithNameType(_: string, type: SKAttributeType): SKAttribute;

	readonly name: string;

	readonly type: SKAttributeType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(name: string, type: SKAttributeType);

	encodeWithCoder(_: NSCoder): void;
}

enum SKAttributeType {

	None = 0,

	Float = 1,

	VectorFloat2 = 2,

	VectorFloat3 = 3,

	VectorFloat4 = 4,

	HalfFloat = 5,

	VectorHalfFloat2 = 6,

	VectorHalfFloat3 = 7,

	VectorHalfFloat4 = 8
}


declare class SKAttributeValue extends NSObject implements NSSecureCoding {

	static valueWithFloat(_: number): SKAttributeValue;

	static valueWithVectorFloat2(_: number): SKAttributeValue;

	static valueWithVectorFloat3(_: number): SKAttributeValue;

	static valueWithVectorFloat4(_: number): SKAttributeValue;

	setFloatValue(_: number)

	floatValue: number;

	setVectorFloat2Value(_: number)

	vectorFloat2Value: number;

	setVectorFloat3Value(_: number)

	vectorFloat3Value: number;

	setVectorFloat4Value(_: number)

	vectorFloat4Value: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class SKAudioNode extends SKNode implements NSSecureCoding {

	static node(): SKAudioNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKAudioNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKAudioNode; // inherited from SKNode

	setAutoplayLooped(_: boolean)

	autoplayLooped: boolean;

	setAvAudioNode(_: AVAudioNode)

	avAudioNode: AVAudioNode;

	setPositional(_: boolean)

	isPositional: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(AVAudioNode: AVAudioNode);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(fileNamed: string);

	static create(URL: NSURL);

	encodeWithCoder(_: NSCoder): void;
}

enum SKBlendMode {

	Alpha = 0,

	Add = 1,

	Subtract = 2,

	Multiply = 3,

	MultiplyX2 = 4,

	Screen = 5,

	Replace = 6,

	MultiplyAlpha = 7
}


declare class SKCameraNode extends SKNode {

	static node(): SKCameraNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKCameraNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKCameraNode; // inherited from SKNode

	containedNodeSet(): NSSet<SKNode>;

	containsNode(_: SKNode): boolean;
}

declare class SKConstraint extends NSObject implements NSCopying, NSSecureCoding {

	static distanceToNode(_: SKRange, toNode: SKNode): SKConstraint;

	static distanceToPoint(_: SKRange, toPoint: CGPoint): SKConstraint;

	static distanceToPointInNode(_: SKRange, toPoint: CGPoint, inNode: SKNode): SKConstraint;

	static orientToNodeOffset(_: SKNode, offset: SKRange): SKConstraint;

	static orientToPointInNodeOffset(_: CGPoint, inNode: SKNode, offset: SKRange): SKConstraint;

	static orientToPointOffset(_: CGPoint, offset: SKRange): SKConstraint;

	static positionX(_: SKRange): SKConstraint;

	static positionXY(_: SKRange, Y: SKRange): SKConstraint;

	static positionY(_: SKRange): SKConstraint;

	static zRotation(_: SKRange): SKConstraint;

	setEnabled(_: boolean)

	enabled: boolean;

	setReferenceNode(_: SKNode)

	referenceNode: SKNode;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SKCropNode extends SKNode {

	static node(): SKCropNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKCropNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKCropNode; // inherited from SKNode

	setMaskNode(_: SKNode)

	maskNode: SKNode;
}

declare class SKEffectNode extends SKNode implements SKWarpable {

	static node(): SKEffectNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKEffectNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKEffectNode; // inherited from SKNode

	setAttributeValues(_: NSDictionary<string, SKAttributeValue>)

	attributeValues: NSDictionary<string, SKAttributeValue>;

	setBlendMode(_: SKBlendMode)

	blendMode: SKBlendMode;

	setFilter(_: CIFilter)

	filter: CIFilter;

	setShader(_: SKShader)

	shader: SKShader;

	setShouldCenterFilter(_: boolean)

	shouldCenterFilter: boolean;

	setShouldEnableEffects(_: boolean)

	shouldEnableEffects: boolean;

	setShouldRasterize(_: boolean)

	shouldRasterize: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setSubdivisionLevels(_: number)

	subdivisionLevels: number; // inherited from SKWarpable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setWarpGeometry(_: SKWarpGeometry)

	warpGeometry: SKWarpGeometry; // inherited from SKWarpable

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

	setValueForAttributeNamed(_: SKAttributeValue, forAttributeNamed: string): void;

	valueForAttributeNamed(_: string): SKAttributeValue;
}

declare class SKEmitterNode extends SKNode {

	static node(): SKEmitterNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKEmitterNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKEmitterNode; // inherited from SKNode

	setAttributeValues(_: NSDictionary<string, SKAttributeValue>)

	attributeValues: NSDictionary<string, SKAttributeValue>;

	setEmissionAngle(_: number)

	emissionAngle: number;

	setEmissionAngleRange(_: number)

	emissionAngleRange: number;

	setFieldBitMask(_: number)

	fieldBitMask: number;

	setNumParticlesToEmit(_: number)

	numParticlesToEmit: number;

	setParticleAction(_: SKAction)

	particleAction: SKAction;

	setParticleAlpha(_: number)

	particleAlpha: number;

	setParticleAlphaRange(_: number)

	particleAlphaRange: number;

	setParticleAlphaSequence(_: SKKeyframeSequence)

	particleAlphaSequence: SKKeyframeSequence;

	setParticleAlphaSpeed(_: number)

	particleAlphaSpeed: number;

	setParticleBirthRate(_: number)

	particleBirthRate: number;

	setParticleBlendMode(_: SKBlendMode)

	particleBlendMode: SKBlendMode;

	setParticleColor(_: NSColor)

	particleColor: NSColor;

	setParticleColorAlphaRange(_: number)

	particleColorAlphaRange: number;

	setParticleColorAlphaSpeed(_: number)

	particleColorAlphaSpeed: number;

	setParticleColorBlendFactor(_: number)

	particleColorBlendFactor: number;

	setParticleColorBlendFactorRange(_: number)

	particleColorBlendFactorRange: number;

	setParticleColorBlendFactorSequence(_: SKKeyframeSequence)

	particleColorBlendFactorSequence: SKKeyframeSequence;

	setParticleColorBlendFactorSpeed(_: number)

	particleColorBlendFactorSpeed: number;

	setParticleColorBlueRange(_: number)

	particleColorBlueRange: number;

	setParticleColorBlueSpeed(_: number)

	particleColorBlueSpeed: number;

	setParticleColorGreenRange(_: number)

	particleColorGreenRange: number;

	setParticleColorGreenSpeed(_: number)

	particleColorGreenSpeed: number;

	setParticleColorRedRange(_: number)

	particleColorRedRange: number;

	setParticleColorRedSpeed(_: number)

	particleColorRedSpeed: number;

	setParticleColorSequence(_: SKKeyframeSequence)

	particleColorSequence: SKKeyframeSequence;

	setParticleLifetime(_: number)

	particleLifetime: number;

	setParticleLifetimeRange(_: number)

	particleLifetimeRange: number;

	setParticlePosition(_: CGPoint)

	particlePosition: CGPoint;

	setParticlePositionRange(_: CGVector)

	particlePositionRange: CGVector;

	setParticleRenderOrder(_: SKParticleRenderOrder)

	particleRenderOrder: SKParticleRenderOrder;

	setParticleRotation(_: number)

	particleRotation: number;

	setParticleRotationRange(_: number)

	particleRotationRange: number;

	setParticleRotationSpeed(_: number)

	particleRotationSpeed: number;

	setParticleScale(_: number)

	particleScale: number;

	setParticleScaleRange(_: number)

	particleScaleRange: number;

	setParticleScaleSequence(_: SKKeyframeSequence)

	particleScaleSequence: SKKeyframeSequence;

	setParticleScaleSpeed(_: number)

	particleScaleSpeed: number;

	setParticleSize(_: CGSize)

	particleSize: CGSize;

	setParticleSpeed(_: number)

	particleSpeed: number;

	setParticleSpeedRange(_: number)

	particleSpeedRange: number;

	setParticleTexture(_: SKTexture)

	particleTexture: SKTexture;

	setParticleZPosition(_: number)

	particleZPosition: number;

	setShader(_: SKShader)

	shader: SKShader;

	setTargetNode(_: SKNode)

	targetNode: SKNode;

	setXAcceleration(_: number)

	xAcceleration: number;

	setYAcceleration(_: number)

	yAcceleration: number;

	advanceSimulationTime(_: number): void;

	resetSimulation(): void;

	setValueForAttributeNamed(_: SKAttributeValue, forAttributeNamed: string): void;

	valueForAttributeNamed(_: string): SKAttributeValue;
}

declare class SKFieldNode extends SKNode {

	static customFieldWithEvaluationBlock(_: (p1: number, p2: number, p3: number, p4: number, p5: number) => number): SKFieldNode;

	static dragField(): SKFieldNode;

	static electricField(): SKFieldNode;

	static linearGravityFieldWithVector(_: number): SKFieldNode;

	static magneticField(): SKFieldNode;

	static node(): SKFieldNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKFieldNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKFieldNode; // inherited from SKNode

	static noiseFieldWithSmoothnessAnimationSpeed(_: number, animationSpeed: number): SKFieldNode;

	static radialGravityField(): SKFieldNode;

	static springField(): SKFieldNode;

	static turbulenceFieldWithSmoothnessAnimationSpeed(_: number, animationSpeed: number): SKFieldNode;

	static velocityFieldWithTexture(_: SKTexture): SKFieldNode;

	static velocityFieldWithVector(_: number): SKFieldNode;

	static vortexField(): SKFieldNode;

	setAnimationSpeed(_: number)

	animationSpeed: number;

	setCategoryBitMask(_: number)

	categoryBitMask: number;

	setDirection(_: number)

	direction: number;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setExclusive(_: boolean)

	isExclusive: boolean;

	setFalloff(_: number)

	falloff: number;

	setMinimumRadius(_: number)

	minimumRadius: number;

	setRegion(_: SKRegion)

	region: SKRegion;

	setSmoothness(_: number)

	smoothness: number;

	setStrength(_: number)

	strength: number;

	setTexture(_: SKTexture)

	texture: SKTexture;
}

enum SKInterpolationMode {

	Linear = 1,

	Spline = 2,

	Step = 3
}


declare class SKKeyframeSequence extends NSObject implements NSCopying, NSSecureCoding {

	setInterpolationMode(_: SKInterpolationMode)

	interpolationMode: SKInterpolationMode;

	setRepeatMode(_: SKRepeatMode)

	repeatMode: SKRepeatMode;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(capacity: number);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(keyframeValues: NSArray<any> | any[], times: NSArray<number> | number[]);

	addKeyframeValueTime(_: any, time: number): void;

	copyWithZone(_?: any): any;

	count(): number;

	encodeWithCoder(_: NSCoder): void;

	getKeyframeTimeForIndex(_: number): number;

	getKeyframeValueForIndex(_: number): any;

	removeKeyframeAtIndex(_: number): void;

	removeLastKeyframe(): void;

	sampleAtTime(_: number): any;

	setKeyframeTimeForIndex(_: number, forIndex: number): void;

	setKeyframeValueForIndex(_: any, forIndex: number): void;

	setKeyframeValueTimeForIndex(_: any, time: number, forIndex: number): void;
}

enum SKLabelHorizontalAlignmentMode {

	Center = 0,

	Left = 1,

	Right = 2
}


declare class SKLabelNode extends SKNode {

	static labelNodeWithAttributedText(_?: NSAttributedString): SKLabelNode;

	static labelNodeWithFontNamed(_?: string): SKLabelNode;

	static labelNodeWithText(_?: string): SKLabelNode;

	static node(): SKLabelNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKLabelNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKLabelNode; // inherited from SKNode

	setAttributedText(_: NSAttributedString)

	attributedText: NSAttributedString;

	setBlendMode(_: SKBlendMode)

	blendMode: SKBlendMode;

	setColor(_: NSColor)

	color: NSColor;

	setColorBlendFactor(_: number)

	colorBlendFactor: number;

	setFontColor(_: NSColor)

	fontColor: NSColor;

	setFontName(_: string)

	fontName: string;

	setFontSize(_: number)

	fontSize: number;

	setHorizontalAlignmentMode(_: SKLabelHorizontalAlignmentMode)

	horizontalAlignmentMode: SKLabelHorizontalAlignmentMode;

	setLineBreakMode(_: NSLineBreakMode)

	lineBreakMode: NSLineBreakMode;

	setNumberOfLines(_: number)

	numberOfLines: number;

	setPreferredMaxLayoutWidth(_: number)

	preferredMaxLayoutWidth: number;

	setText(_: string)

	text: string;

	setVerticalAlignmentMode(_: SKLabelVerticalAlignmentMode)

	verticalAlignmentMode: SKLabelVerticalAlignmentMode;

	static create(fontNamed: string);
}

enum SKLabelVerticalAlignmentMode {

	Baseline = 0,

	Center = 1,

	Top = 2,

	Bottom = 3
}


declare class SKLightNode extends SKNode {

	static node(): SKLightNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKLightNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKLightNode; // inherited from SKNode

	setAmbientColor(_: NSColor)

	ambientColor: NSColor;

	setCategoryBitMask(_: number)

	categoryBitMask: number;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setFalloff(_: number)

	falloff: number;

	setLightColor(_: NSColor)

	lightColor: NSColor;

	setShadowColor(_: NSColor)

	shadowColor: NSColor;
}

declare class SKMutableTexture extends SKTexture {

	static mutableTextureWithSize(_: CGSize): SKMutableTexture;

	static textureNoiseWithSmoothnessSizeGrayscale(_: number, size: CGSize, grayscale: boolean): SKMutableTexture; // inherited from SKTexture

	static textureVectorNoiseWithSmoothnessSize(_: number, size: CGSize): SKMutableTexture; // inherited from SKTexture

	static textureWithCGImage(_: any): SKMutableTexture; // inherited from SKTexture

	static textureWithDataSize(_: NSData, size: CGSize): SKMutableTexture; // inherited from SKTexture

	static textureWithDataSizeFlipped(_: NSData, size: CGSize, flipped: boolean): SKMutableTexture; // inherited from SKTexture

	static textureWithDataSizeRowLengthAlignment(_: NSData, size: CGSize, rowLength: number, alignment: number): SKMutableTexture; // inherited from SKTexture

	static textureWithImage(_: NSImage): SKMutableTexture; // inherited from SKTexture

	static textureWithImageNamed(_: string): SKMutableTexture; // inherited from SKTexture

	static textureWithNoiseMap(_: GKNoiseMap): SKMutableTexture; // inherited from SKTexture

	static textureWithRectInTexture(_: CGRect, inTexture: SKTexture): SKMutableTexture; // inherited from SKTexture

	static create(size: CGSize);

	static create(size: CGSize, pixelFormat: number);

	modifyPixelDataWithBlock(_: (p1: any, p2: number) => void): void;
}

declare class SKNode extends NSResponder implements NSCopying, NSSecureCoding {

	static node(): SKNode;

	static nodeWithFileNamed(_: string): SKNode;

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKNode;

	static obstaclesFromNodeBounds(_: NSArray<SKNode>): NSArray<GKPolygonObstacle>;

	static obstaclesFromNodePhysicsBodies(_: NSArray<SKNode>): NSArray<GKPolygonObstacle>;

	static obstaclesFromSpriteTexturesAccuracy(_: NSArray<SKNode>, accuracy: number): NSArray<GKPolygonObstacle>;

	setAccessibilityChildren(_: NSArray<any>)

	accessibilityChildren: NSArray<any>;

	setAccessibilityElement(_: boolean)

	isAccessibilityElement: boolean;

	setAccessibilityEnabled(_: boolean)

	isAccessibilityEnabled: boolean;

	setAccessibilityFrame(_: CGRect)

	accessibilityFrame: CGRect;

	setAccessibilityHelp(_: string)

	accessibilityHelp: string;

	setAccessibilityLabel(_: string)

	accessibilityLabel: string;

	setAccessibilityParent(_: any)

	accessibilityParent: any;

	setAccessibilityRole(_: string)

	accessibilityRole: string;

	setAccessibilityRoleDescription(_: string)

	accessibilityRoleDescription: string;

	setAccessibilitySubrole(_: string)

	accessibilitySubrole: string;

	setAlpha(_: number)

	alpha: number;

	readonly children: NSArray<SKNode>;

	setConstraints(_: NSArray<SKConstraint>)

	constraints: NSArray<SKConstraint>;

	setEntity(_: GKEntity)

	entity: GKEntity;

	readonly frame: CGRect;

	setHidden(_: boolean)

	isHidden: boolean;

	setName(_: string)

	name: string;

	readonly parent: SKNode;

	setPaused(_: boolean)

	isPaused: boolean;

	setPhysicsBody(_: SKPhysicsBody)

	physicsBody: SKPhysicsBody;

	setPosition(_: CGPoint)

	position: CGPoint;

	setReachConstraints(_: SKReachConstraints)

	reachConstraints: SKReachConstraints;

	readonly scene: SKScene;

	setSpeed(_: number)

	speed: number;

	setUserData(_: NSMutableDictionary<any, any>)

	userData: NSMutableDictionary<any, any>;

	setUserInteractionEnabled(_: boolean)

	isUserInteractionEnabled: boolean;

	setXScale(_: number)

	xScale: number;

	setYScale(_: number)

	yScale: number;

	setZPosition(_: number)

	zPosition: number;

	setZRotation(_: number)

	zRotation: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	actionForKey(_: string): SKAction;

	addChild(_: SKNode): void;

	calculateAccumulatedFrame(): CGRect;

	childNodeWithName(_: string): SKNode;

	containsPoint(_: CGPoint): boolean;

	convertPointFromNode(_: CGPoint, fromNode: SKNode): CGPoint;

	convertPointToNode(_: CGPoint, toNode: SKNode): CGPoint;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	enumerateChildNodesWithNameUsingBlock(_: string, usingBlock: (p1: SKNode, p2: boolean) => void): void;

	hasActions(): boolean;

	inParentHierarchy(_: SKNode): boolean;

	insertChildAtIndex(_: SKNode, atIndex: number): void;

	intersectsNode(_: SKNode): boolean;

	isEqualToNode(_: SKNode): boolean;

	moveToParent(_: SKNode): void;

	nodeAtPoint(_: CGPoint): SKNode;

	nodesAtPoint(_: CGPoint): NSArray<SKNode>;

	objectForKeyedSubscript(_: string): NSArray<SKNode>;

	removeActionForKey(_: string): void;

	removeAllActions(): void;

	removeAllChildren(): void;

	removeChildrenInArray(_: NSArray<SKNode>): void;

	removeFromParent(): void;

	runAction(_: SKAction): void;

	runActionCompletion(_: SKAction, completion: () => void): void;

	runActionWithKey(_: SKAction, withKey: string): void;

	setScale(_: number): void;
}

enum SKParticleRenderOrder {

	OldestLast = 0,

	OldestFirst = 1,

	DontCare = 2
}


declare class SKPhysicsBody extends NSObject implements NSCopying, NSSecureCoding {

	static bodyWithBodies(_: NSArray<SKPhysicsBody>): SKPhysicsBody;

	static bodyWithCircleOfRadius(_: number): SKPhysicsBody;

	static bodyWithCircleOfRadiusCenter(_: number, center: CGPoint): SKPhysicsBody;

	static bodyWithEdgeChainFromPath(_: any): SKPhysicsBody;

	static bodyWithEdgeFromPointToPoint(_: CGPoint, toPoint: CGPoint): SKPhysicsBody;

	static bodyWithEdgeLoopFromPath(_: any): SKPhysicsBody;

	static bodyWithEdgeLoopFromRect(_: CGRect): SKPhysicsBody;

	static bodyWithPolygonFromPath(_: any): SKPhysicsBody;

	static bodyWithRectangleOfSize(_: CGSize): SKPhysicsBody;

	static bodyWithRectangleOfSizeCenter(_: CGSize, center: CGPoint): SKPhysicsBody;

	static bodyWithTextureAlphaThresholdSize(_: SKTexture, alphaThreshold: number, size: CGSize): SKPhysicsBody;

	static bodyWithTextureSize(_: SKTexture, size: CGSize): SKPhysicsBody;

	setAffectedByGravity(_: boolean)

	affectedByGravity: boolean;

	setAllowsRotation(_: boolean)

	allowsRotation: boolean;

	setAngularDamping(_: number)

	angularDamping: number;

	setAngularVelocity(_: number)

	angularVelocity: number;

	readonly area: number;

	setCategoryBitMask(_: number)

	categoryBitMask: number;

	setCharge(_: number)

	charge: number;

	setCollisionBitMask(_: number)

	collisionBitMask: number;

	setContactTestBitMask(_: number)

	contactTestBitMask: number;

	setDensity(_: number)

	density: number;

	setDynamic(_: boolean)

	isDynamic: boolean;

	setFieldBitMask(_: number)

	fieldBitMask: number;

	setFriction(_: number)

	friction: number;

	readonly joints: NSArray<SKPhysicsJoint>;

	setLinearDamping(_: number)

	linearDamping: number;

	setMass(_: number)

	mass: number;

	readonly node: SKNode;

	setPinned(_: boolean)

	pinned: boolean;

	setResting(_: boolean)

	isResting: boolean;

	setRestitution(_: number)

	restitution: number;

	setUsesPreciseCollisionDetection(_: boolean)

	usesPreciseCollisionDetection: boolean;

	setVelocity(_: CGVector)

	velocity: CGVector;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	allContactedBodies(): NSArray<SKPhysicsBody>;

	applyAngularImpulse(_: number): void;

	applyForce(_: CGVector): void;

	applyForceAtPoint(_: CGVector, atPoint: CGPoint): void;

	applyImpulse(_: CGVector): void;

	applyImpulseAtPoint(_: CGVector, atPoint: CGPoint): void;

	applyTorque(_: number): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SKPhysicsContact extends NSObject {

	readonly bodyA: SKPhysicsBody;

	readonly bodyB: SKPhysicsBody;

	readonly collisionImpulse: number;

	readonly contactNormal: CGVector;

	readonly contactPoint: CGPoint;
}

interface SKPhysicsContactDelegate extends NSObjectProtocol {

	didBeginContact?(_: SKPhysicsContact): void;

	didEndContact?(_: SKPhysicsContact): void;
}
declare var SKPhysicsContactDelegate: {

	prototype: SKPhysicsContactDelegate;
};

declare class SKPhysicsJoint extends NSObject implements NSSecureCoding {

	setBodyA(_: SKPhysicsBody)

	bodyA: SKPhysicsBody;

	setBodyB(_: SKPhysicsBody)

	bodyB: SKPhysicsBody;

	readonly reactionForce: CGVector;

	readonly reactionTorque: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class SKPhysicsJointFixed extends SKPhysicsJoint {

	static jointWithBodyABodyBAnchor(_: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint): SKPhysicsJointFixed;
}

declare class SKPhysicsJointLimit extends SKPhysicsJoint {

	static jointWithBodyABodyBAnchorAAnchorB(_: SKPhysicsBody, bodyB: SKPhysicsBody, anchorA: CGPoint, anchorB: CGPoint): SKPhysicsJointLimit;

	setMaxLength(_: number)

	maxLength: number;
}

declare class SKPhysicsJointPin extends SKPhysicsJoint {

	static jointWithBodyABodyBAnchor(_: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint): SKPhysicsJointPin;

	setFrictionTorque(_: number)

	frictionTorque: number;

	setLowerAngleLimit(_: number)

	lowerAngleLimit: number;

	setRotationSpeed(_: number)

	rotationSpeed: number;

	setShouldEnableLimits(_: boolean)

	shouldEnableLimits: boolean;

	setUpperAngleLimit(_: number)

	upperAngleLimit: number;
}

declare class SKPhysicsJointSliding extends SKPhysicsJoint {

	static jointWithBodyABodyBAnchorAxis(_: SKPhysicsBody, bodyB: SKPhysicsBody, anchor: CGPoint, axis: CGVector): SKPhysicsJointSliding;

	setLowerDistanceLimit(_: number)

	lowerDistanceLimit: number;

	setShouldEnableLimits(_: boolean)

	shouldEnableLimits: boolean;

	setUpperDistanceLimit(_: number)

	upperDistanceLimit: number;
}

declare class SKPhysicsJointSpring extends SKPhysicsJoint {

	static jointWithBodyABodyBAnchorAAnchorB(_: SKPhysicsBody, bodyB: SKPhysicsBody, anchorA: CGPoint, anchorB: CGPoint): SKPhysicsJointSpring;

	setDamping(_: number)

	damping: number;

	setFrequency(_: number)

	frequency: number;
}

declare class SKPhysicsWorld extends NSObject implements NSSecureCoding {

	setContactDelegate(_: SKPhysicsContactDelegate)

	contactDelegate: SKPhysicsContactDelegate;

	setGravity(_: CGVector)

	gravity: CGVector;

	setSpeed(_: number)

	speed: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addJoint(_: SKPhysicsJoint): void;

	bodyAlongRayStartEnd(_: CGPoint, end: CGPoint): SKPhysicsBody;

	bodyAtPoint(_: CGPoint): SKPhysicsBody;

	bodyInRect(_: CGRect): SKPhysicsBody;

	encodeWithCoder(_: NSCoder): void;

	enumerateBodiesAlongRayStartEndUsingBlock(_: CGPoint, end: CGPoint, usingBlock: (p1: SKPhysicsBody, p2: CGPoint, p3: CGVector, p4: boolean) => void): void;

	enumerateBodiesAtPointUsingBlock(_: CGPoint, usingBlock: (p1: SKPhysicsBody, p2: boolean) => void): void;

	enumerateBodiesInRectUsingBlock(_: CGRect, usingBlock: (p1: SKPhysicsBody, p2: boolean) => void): void;

	removeAllJoints(): void;

	removeJoint(_: SKPhysicsJoint): void;

	sampleFieldsAt(_: number): number;
}

declare class SKRange extends NSObject implements NSCopying, NSSecureCoding {

	static rangeWithConstantValue(_: number): SKRange;

	static rangeWithLowerLimit(_: number): SKRange;

	static rangeWithLowerLimitUpperLimit(_: number, upperLimit: number): SKRange;

	static rangeWithNoLimits(): SKRange;

	static rangeWithUpperLimit(_: number): SKRange;

	static rangeWithValueVariance(_: number, variance: number): SKRange;

	setLowerLimit(_: number)

	lowerLimit: number;

	setUpperLimit(_: number)

	upperLimit: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(lowerLimit: number, upperLimit: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SKReachConstraints extends NSObject implements NSSecureCoding {

	setLowerAngleLimit(_: number)

	lowerAngleLimit: number;

	setUpperAngleLimit(_: number)

	upperAngleLimit: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(lowerAngleLimit: number, upperAngleLimit: number);

	encodeWithCoder(_: NSCoder): void;
}

declare class SKReferenceNode extends SKNode {

	static node(): SKReferenceNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKReferenceNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKReferenceNode; // inherited from SKNode

	static referenceNodeWithFileNamed(_: string): SKReferenceNode;

	static referenceNodeWithURL(_: NSURL): SKReferenceNode;

	static create(fileNamed: string);

	static create(URL: NSURL);

	didLoadReferenceNode(_?: SKNode): void;

	resolveReferenceNode(): void;
}

declare class SKRegion extends NSObject implements NSCopying, NSSecureCoding {

	static infiniteRegion(): SKRegion;

	readonly path: any;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(path: any);

	static create(radius: number);

	static create(size: CGSize);

	containsPoint(_: CGPoint): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	inverseRegion(): this;

	regionByDifferenceFromRegion(_: SKRegion): this;

	regionByIntersectionWithRegion(_: SKRegion): this;

	regionByUnionWithRegion(_: SKRegion): this;
}

declare class SKRenderer extends NSObject {

	static rendererWithDevice(_: MTLDevice): SKRenderer;

	setIgnoresSiblingOrder(_: boolean)

	ignoresSiblingOrder: boolean;

	setScene(_: SKScene)

	scene: SKScene;

	setShouldCullNonVisibleNodes(_: boolean)

	shouldCullNonVisibleNodes: boolean;

	setShowsDrawCount(_: boolean)

	showsDrawCount: boolean;

	setShowsFields(_: boolean)

	showsFields: boolean;

	setShowsNodeCount(_: boolean)

	showsNodeCount: boolean;

	setShowsPhysics(_: boolean)

	showsPhysics: boolean;

	setShowsQuadCount(_: boolean)

	showsQuadCount: boolean;

	renderWithViewportCommandBufferRenderPassDescriptor(_: CGRect, commandBuffer: MTLCommandBuffer, renderPassDescriptor: MTLRenderPassDescriptor): void;

	renderWithViewportRenderCommandEncoderRenderPassDescriptorCommandQueue(_: CGRect, renderCommandEncoder: MTLRenderCommandEncoder, renderPassDescriptor: MTLRenderPassDescriptor, commandQueue: MTLCommandQueue): void;

	updateAtTime(_: number): void;
}

enum SKRepeatMode {

	Clamp = 1,

	Loop = 2
}


declare class SKScene extends SKEffectNode implements GKSceneRootNodeType {

	static node(): SKScene; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKScene; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKScene; // inherited from SKNode

	static sceneWithSize(_: CGSize): SKScene;

	setAnchorPoint(_: CGPoint)

	anchorPoint: CGPoint;

	readonly audioEngine: AVAudioEngine;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setCamera(_: SKCameraNode)

	camera: SKCameraNode;

	setDelegate(_: SKSceneDelegate)

	delegate: SKSceneDelegate;

	setListener(_: SKNode)

	listener: SKNode;

	readonly physicsWorld: SKPhysicsWorld;

	setScaleMode(_: SKSceneScaleMode)

	scaleMode: SKSceneScaleMode;

	setSize(_: CGSize)

	size: CGSize;

	readonly view: SKView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(size: CGSize);

	conformsToProtocol(_: any /* Protocol */): boolean;

	convertPointFromView(_: CGPoint): CGPoint;

	convertPointToView(_: CGPoint): CGPoint;

	didApplyConstraints(): void;

	didChangeSize(_: CGSize): void;

	didEvaluateActions(): void;

	didFinishUpdate(): void;

	didMoveToView(_: SKView): void;

	didSimulatePhysics(): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	sceneDidLoad(): void;

	self(): this;

	update(_: number): void;

	willMoveFromView(_: SKView): void;
}

interface SKSceneDelegate extends NSObjectProtocol {

	didApplyConstraintsForScene?(_: SKScene): void;

	didEvaluateActionsForScene?(_: SKScene): void;

	didFinishUpdateForScene?(_: SKScene): void;

	didSimulatePhysicsForScene?(_: SKScene): void;

	updateForScene?(_: number, forScene: SKScene): void;
}
declare var SKSceneDelegate: {

	prototype: SKSceneDelegate;
};

enum SKSceneScaleMode {

	Fill = 0,

	AspectFill = 1,

	AspectFit = 2,

	ResizeFill = 3
}


declare class SKShader extends NSObject implements NSCopying, NSSecureCoding {

	static shader(): SKShader;

	static shaderWithFileNamed(_: string): SKShader;

	static shaderWithSource(_: string): SKShader;

	static shaderWithSourceUniforms(_: string, uniforms: NSArray<SKUniform>): SKShader;

	setAttributes(_: NSArray<SKAttribute>)

	attributes: NSArray<SKAttribute>;

	setSource(_: string)

	source: string;

	setUniforms(_: NSArray<SKUniform>)

	uniforms: NSArray<SKUniform>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(source: string);

	static create(source: string, uniforms: NSArray<SKUniform> | SKUniform[]);

	addUniform(_: SKUniform): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	removeUniformNamed(_: string): void;

	uniformNamed(_: string): SKUniform;
}

declare class SKShapeNode extends SKNode {

	static node(): SKShapeNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKShapeNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKShapeNode; // inherited from SKNode

	static shapeNodeWithCircleOfRadius(_: number): SKShapeNode;

	static shapeNodeWithEllipseInRect(_: CGRect): SKShapeNode;

	static shapeNodeWithEllipseOfSize(_: CGSize): SKShapeNode;

	static shapeNodeWithPath(_: any): SKShapeNode;

	static shapeNodeWithPathCentered(_: any, centered: boolean): SKShapeNode;

	static shapeNodeWithPointsCount(_: CGPoint, count: number): SKShapeNode;

	static shapeNodeWithRect(_: CGRect): SKShapeNode;

	static shapeNodeWithRectCornerRadius(_: CGRect, cornerRadius: number): SKShapeNode;

	static shapeNodeWithRectOfSize(_: CGSize): SKShapeNode;

	static shapeNodeWithRectOfSizeCornerRadius(_: CGSize, cornerRadius: number): SKShapeNode;

	static shapeNodeWithSplinePointsCount(_: CGPoint, count: number): SKShapeNode;

	setAntialiased(_: boolean)

	isAntialiased: boolean;

	setAttributeValues(_: NSDictionary<string, SKAttributeValue>)

	attributeValues: NSDictionary<string, SKAttributeValue>;

	setBlendMode(_: SKBlendMode)

	blendMode: SKBlendMode;

	setFillColor(_: NSColor)

	fillColor: NSColor;

	setFillShader(_: SKShader)

	fillShader: SKShader;

	setFillTexture(_: SKTexture)

	fillTexture: SKTexture;

	setGlowWidth(_: number)

	glowWidth: number;

	setLineCap(_: CGLineCap)

	lineCap: CGLineCap;

	setLineJoin(_: CGLineJoin)

	lineJoin: CGLineJoin;

	readonly lineLength: number;

	setLineWidth(_: number)

	lineWidth: number;

	setMiterLimit(_: number)

	miterLimit: number;

	setPath(_: any)

	path: any;

	setStrokeColor(_: NSColor)

	strokeColor: NSColor;

	setStrokeShader(_: SKShader)

	strokeShader: SKShader;

	setStrokeTexture(_: SKTexture)

	strokeTexture: SKTexture;

	setValueForAttributeNamed(_: SKAttributeValue, forAttributeNamed: string): void;

	valueForAttributeNamed(_: string): SKAttributeValue;
}

declare class SKSpriteNode extends SKNode implements SKWarpable {

	static node(): SKSpriteNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKSpriteNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKSpriteNode; // inherited from SKNode

	static spriteNodeWithColorSize(_: NSColor, size: CGSize): SKSpriteNode;

	static spriteNodeWithImageNamed(_: string): SKSpriteNode;

	static spriteNodeWithImageNamedNormalMapped(_: string, normalMapped: boolean): SKSpriteNode;

	static spriteNodeWithTexture(_?: SKTexture): SKSpriteNode;

	static spriteNodeWithTextureNormalMap(_?: SKTexture, normalMap?: SKTexture): SKSpriteNode;

	static spriteNodeWithTextureSize(_?: SKTexture, size: CGSize): SKSpriteNode;

	setAnchorPoint(_: CGPoint)

	anchorPoint: CGPoint;

	setAttributeValues(_: NSDictionary<string, SKAttributeValue>)

	attributeValues: NSDictionary<string, SKAttributeValue>;

	setBlendMode(_: SKBlendMode)

	blendMode: SKBlendMode;

	setCenterRect(_: CGRect)

	centerRect: CGRect;

	setColor(_: NSColor)

	color: NSColor;

	setColorBlendFactor(_: number)

	colorBlendFactor: number;

	setLightingBitMask(_: number)

	lightingBitMask: number;

	setNormalTexture(_: SKTexture)

	normalTexture: SKTexture;

	setShader(_: SKShader)

	shader: SKShader;

	setShadowCastBitMask(_: number)

	shadowCastBitMask: number;

	setShadowedBitMask(_: number)

	shadowedBitMask: number;

	setSize(_: CGSize)

	size: CGSize;

	setTexture(_: SKTexture)

	texture: SKTexture;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setSubdivisionLevels(_: number)

	subdivisionLevels: number; // inherited from SKWarpable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setWarpGeometry(_: SKWarpGeometry)

	warpGeometry: SKWarpGeometry; // inherited from SKWarpable

	readonly  // inherited from NSObjectProtocol

	static create(color: NSColor, size: CGSize);

	static create(imageNamed: string);

	static create(texture: SKTexture);

	static create(texture: SKTexture, color: NSColor, size: CGSize);

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	scaleToSize(_: CGSize): void;

	self(): this;

	setValueForAttributeNamed(_: SKAttributeValue, forAttributeNamed: string): void;

	valueForAttributeNamed(_: string): SKAttributeValue;
}

declare class SKTexture extends NSObject implements NSCopying, NSSecureCoding {

	static preloadTexturesWithCompletionHandler(_: NSArray<SKTexture>, withCompletionHandler: () => void): void;

	static textureNoiseWithSmoothnessSizeGrayscale(_: number, size: CGSize, grayscale: boolean): SKTexture;

	static textureVectorNoiseWithSmoothnessSize(_: number, size: CGSize): SKTexture;

	static textureWithCGImage(_: any): SKTexture;

	static textureWithDataSize(_: NSData, size: CGSize): SKTexture;

	static textureWithDataSizeFlipped(_: NSData, size: CGSize, flipped: boolean): SKTexture;

	static textureWithDataSizeRowLengthAlignment(_: NSData, size: CGSize, rowLength: number, alignment: number): SKTexture;

	static textureWithImage(_: NSImage): SKTexture;

	static textureWithImageNamed(_: string): SKTexture;

	static textureWithNoiseMap(_: GKNoiseMap): SKTexture;

	static textureWithRectInTexture(_: CGRect, inTexture: SKTexture): SKTexture;

	setFilteringMode(_: SKTextureFilteringMode)

	filteringMode: SKTextureFilteringMode;

	setUsesMipmaps(_: boolean)

	usesMipmaps: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	CGImage(): any;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	preloadWithCompletionHandler(_: () => void): void;

	size(): CGSize;

	textureByApplyingCIFilter(_: CIFilter): this;

	textureByGeneratingNormalMap(): this;

	textureByGeneratingNormalMapWithSmoothnessContrast(_: number, contrast: number): this;

	textureRect(): CGRect;
}

declare class SKTextureAtlas extends NSObject implements NSSecureCoding {

	static atlasNamed(_: string): SKTextureAtlas;

	static atlasWithDictionary(_: NSDictionary<string, any>): SKTextureAtlas;

	static preloadTextureAtlasesWithCompletionHandler(_: NSArray<SKTextureAtlas>, withCompletionHandler: () => void): void;

	static preloadTextureAtlasesNamedWithCompletionHandler(_: NSArray<string>, withCompletionHandler?: (p1: NSError, p2: NSArray<SKTextureAtlas>) => void): void;

	readonly textureNames: NSArray<string>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	preloadWithCompletionHandler(_: () => void): void;

	textureNamed(_: string): SKTexture;
}

enum SKTextureFilteringMode {

	Nearest = 0,

	Linear = 1
}


enum SKTileAdjacencyMask {

	AdjacencyUp = 1,

	AdjacencyUpperRight = 2,

	AdjacencyRight = 4,

	AdjacencyLowerRight = 8,

	AdjacencyDown = 16,

	AdjacencyLowerLeft = 32,

	AdjacencyLeft = 64,

	AdjacencyUpperLeft = 128,

	AdjacencyAll = 255,

	HexFlatAdjacencyUp = 1,

	HexFlatAdjacencyUpperRight = 2,

	HexFlatAdjacencyLowerRight = 4,

	HexFlatAdjacencyDown = 8,

	HexFlatAdjacencyLowerLeft = 16,

	HexFlatAdjacencyUpperLeft = 32,

	HexFlatAdjacencyAll = 63,

	HexPointyAdjacencyUpperLeft = 1,

	HexPointyAdjacencyUpperRight = 2,

	HexPointyAdjacencyRight = 4,

	HexPointyAdjacencyLowerRight = 8,

	HexPointyAdjacencyLowerLeft = 16,

	HexPointyAdjacencyLeft = 32,

	HexPointyAdjacencyAdd = 63,

	AdjacencyUpEdge = 124,

	AdjacencyUpperRightEdge = 112,

	AdjacencyRightEdge = 241,

	AdjacencyLowerRightEdge = 193,

	AdjacencyDownEdge = 199,

	AdjacencyLowerLeftEdge = 7,

	AdjacencyLeftEdge = 31,

	AdjacencyUpperLeftEdge = 28,

	AdjacencyUpperRightCorner = 223,

	AdjacencyLowerRightCorner = 127,

	AdjacencyLowerLeftCorner = 253,

	AdjacencyUpperLeftCorner = 247
}


declare class SKTileDefinition extends NSObject implements NSCopying, NSSecureCoding {

	static tileDefinitionWithTexture(_: SKTexture): SKTileDefinition;

	static tileDefinitionWithTextureNormalTextureSize(_: SKTexture, normalTexture: SKTexture, size: CGSize): SKTileDefinition;

	static tileDefinitionWithTextureSize(_: SKTexture, size: CGSize): SKTileDefinition;

	static tileDefinitionWithTexturesNormalTexturesSizeTimePerFrame(_: NSArray<SKTexture>, normalTextures: NSArray<SKTexture>, size: CGSize, timePerFrame: number): SKTileDefinition;

	static tileDefinitionWithTexturesSizeTimePerFrame(_: NSArray<SKTexture>, size: CGSize, timePerFrame: number): SKTileDefinition;

	setFlipHorizontally(_: boolean)

	flipHorizontally: boolean;

	setFlipVertically(_: boolean)

	flipVertically: boolean;

	setName(_: string)

	name: string;

	setNormalTextures(_: NSArray<SKTexture>)

	normalTextures: NSArray<SKTexture>;

	setPlacementWeight(_: number)

	placementWeight: number;

	setRotation(_: SKTileDefinitionRotation)

	rotation: SKTileDefinitionRotation;

	setSize(_: CGSize)

	size: CGSize;

	setTextures(_: NSArray<SKTexture>)

	textures: NSArray<SKTexture>;

	setTimePerFrame(_: number)

	timePerFrame: number;

	setUserData(_: NSMutableDictionary<any, any>)

	userData: NSMutableDictionary<any, any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(texture: SKTexture);

	static create(texture: SKTexture, normalTexture: SKTexture, size: CGSize);

	static create(texture: SKTexture, size: CGSize);

	static create(textures: NSArray<SKTexture> | SKTexture[], normalTextures: NSArray<SKTexture> | SKTexture[], size: CGSize, timePerFrame: number);

	static create(textures: NSArray<SKTexture> | SKTexture[], size: CGSize, timePerFrame: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum SKTileDefinitionRotation {

	Rotation0 = 0,

	Rotation90 = 1,

	Rotation180 = 2,

	Rotation270 = 3
}


declare class SKTileGroup extends NSObject implements NSCopying, NSSecureCoding {

	static emptyTileGroup(): SKTileGroup;

	static tileGroupWithRules(_: NSArray<SKTileGroupRule>): SKTileGroup;

	static tileGroupWithTileDefinition(_: SKTileDefinition): SKTileGroup;

	setName(_: string)

	name: string;

	setRules(_: NSArray<SKTileGroupRule>)

	rules: NSArray<SKTileGroupRule>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(rules: NSArray<SKTileGroupRule> | SKTileGroupRule[]);

	static create(tileDefinition: SKTileDefinition);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SKTileGroupRule extends NSObject implements NSCopying, NSSecureCoding {

	static tileGroupRuleWithAdjacencyTileDefinitions(_: SKTileAdjacencyMask, tileDefinitions: NSArray<SKTileDefinition>): SKTileGroupRule;

	setAdjacency(_: SKTileAdjacencyMask)

	adjacency: SKTileAdjacencyMask;

	setName(_: string)

	name: string;

	setTileDefinitions(_: NSArray<SKTileDefinition>)

	tileDefinitions: NSArray<SKTileDefinition>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(adjacency: SKTileAdjacencyMask, tileDefinitions: NSArray<SKTileDefinition> | SKTileDefinition[]);

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SKTileMapNode extends SKNode implements NSCopying, NSSecureCoding {

	static node(): SKTileMapNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKTileMapNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKTileMapNode; // inherited from SKNode

	static tileMapNodeWithTileSetColumnsRowsTileSize(_: SKTileSet, columns: number, rows: number, tileSize: CGSize): SKTileMapNode;

	static tileMapNodeWithTileSetColumnsRowsTileSizeFillWithTileGroup(_: SKTileSet, columns: number, rows: number, tileSize: CGSize, fillWithTileGroup: SKTileGroup): SKTileMapNode;

	static tileMapNodeWithTileSetColumnsRowsTileSizeTileGroupLayout(_: SKTileSet, columns: number, rows: number, tileSize: CGSize, tileGroupLayout: NSArray<SKTileGroup>): SKTileMapNode;

	static tileMapNodesWithTileSetColumnsRowsTileSizeFromNoiseMapTileTypeNoiseMapThresholds(tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize, from: GKNoiseMap, tileTypeNoiseMapThresholds: NSArray<number>): NSArray<SKTileMapNode>;

	setAnchorPoint(_: CGPoint)

	anchorPoint: CGPoint;

	setAttributeValues(_: NSDictionary<string, SKAttributeValue>)

	attributeValues: NSDictionary<string, SKAttributeValue>;

	setBlendMode(_: SKBlendMode)

	blendMode: SKBlendMode;

	setColor(_: NSColor)

	color: NSColor;

	setColorBlendFactor(_: number)

	colorBlendFactor: number;

	setEnableAutomapping(_: boolean)

	enableAutomapping: boolean;

	setLightingBitMask(_: number)

	lightingBitMask: number;

	readonly mapSize: CGSize;

	setNumberOfColumns(_: number)

	numberOfColumns: number;

	setNumberOfRows(_: number)

	numberOfRows: number;

	setShader(_: SKShader)

	shader: SKShader;

	setTileSet(_: SKTileSet)

	tileSet: SKTileSet;

	setTileSize(_: CGSize)

	tileSize: CGSize;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize);

	static create(tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize, fillWithTileGroup: SKTileGroup);

	static create(tileSet: SKTileSet, columns: number, rows: number, tileSize: CGSize, tileGroupLayout: NSArray<SKTileGroup> | SKTileGroup[]);

	centerOfTileAtColumnRow(_: number, row: number): CGPoint;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	fillWithTileGroup(_?: SKTileGroup): void;

	setTileGroupAndTileDefinitionForColumnRow(_: SKTileGroup, andTileDefinition: SKTileDefinition, forColumn: number, row: number): void;

	setTileGroupForColumnRow(_?: SKTileGroup, forColumn: number, row: number): void;

	setValueForAttributeNamed(_: SKAttributeValue, forAttributeNamed: string): void;

	tileColumnIndexFromPosition(_: CGPoint): number;

	tileDefinitionAtColumnRow(_: number, row: number): SKTileDefinition;

	tileGroupAtColumnRow(_: number, row: number): SKTileGroup;

	tileRowIndexFromPosition(_: CGPoint): number;

	valueForAttributeNamed(_: string): SKAttributeValue;
}

declare class SKTileSet extends NSObject implements NSCopying, NSSecureCoding {

	static tileSetFromURL(_: NSURL): SKTileSet;

	static tileSetNamed(_: string): SKTileSet;

	static tileSetWithTileGroups(_: NSArray<SKTileGroup>): SKTileSet;

	static tileSetWithTileGroupsTileSetType(_: NSArray<SKTileGroup>, tileSetType: SKTileSetType): SKTileSet;

	setDefaultTileGroup(_: SKTileGroup)

	defaultTileGroup: SKTileGroup;

	setDefaultTileSize(_: CGSize)

	defaultTileSize: CGSize;

	setName(_: string)

	name: string;

	setTileGroups(_: NSArray<SKTileGroup>)

	tileGroups: NSArray<SKTileGroup>;

	setType(_: SKTileSetType)

	type: SKTileSetType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(tileGroups: NSArray<SKTileGroup> | SKTileGroup[]);

	static create(tileGroups: NSArray<SKTileGroup> | SKTileGroup[], tileSetType: SKTileSetType);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum SKTileSetType {

	Grid = 0,

	Isometric = 1,

	HexagonalFlat = 2,

	HexagonalPointy = 3
}


declare class SKTransformNode extends SKNode {

	static node(): SKTransformNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKTransformNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKTransformNode; // inherited from SKNode

	setXRotation(_: number)

	xRotation: number;

	setYRotation(_: number)

	yRotation: number;

	eulerAngles(): number;

	quaternion(): simd_quatf;

	rotationMatrix(): simd_float3x3;

	setEulerAngles(_: number): void;

	setQuaternion(_: simd_quatf): void;

	setRotationMatrix(_: simd_float3x3): void;
}

declare class SKTransition extends NSObject implements NSCopying {

	static crossFadeWithDuration(_: number): SKTransition;

	static doorsCloseHorizontalWithDuration(_: number): SKTransition;

	static doorsCloseVerticalWithDuration(_: number): SKTransition;

	static doorsOpenHorizontalWithDuration(_: number): SKTransition;

	static doorsOpenVerticalWithDuration(_: number): SKTransition;

	static doorwayWithDuration(_: number): SKTransition;

	static fadeWithColorDuration(_: NSColor, duration: number): SKTransition;

	static fadeWithDuration(_: number): SKTransition;

	static flipHorizontalWithDuration(_: number): SKTransition;

	static flipVerticalWithDuration(_: number): SKTransition;

	static moveInWithDirectionDuration(_: SKTransitionDirection, duration: number): SKTransition;

	static pushWithDirectionDuration(_: SKTransitionDirection, duration: number): SKTransition;

	static revealWithDirectionDuration(_: SKTransitionDirection, duration: number): SKTransition;

	static transitionWithCIFilterDuration(_: CIFilter, duration: number): SKTransition;

	setPausesIncomingScene(_: boolean)

	pausesIncomingScene: boolean;

	setPausesOutgoingScene(_: boolean)

	pausesOutgoingScene: boolean;

	copyWithZone(_?: any): any;
}

enum SKTransitionDirection {

	Up = 0,

	Down = 1,

	Right = 2,

	Left = 3
}


declare class SKUniform extends NSObject implements NSCopying, NSSecureCoding {

	static uniformWithName(_: string): SKUniform;

	static uniformWithNameFloat(_: string, float: number): SKUniform;

	static uniformWithNameMatrixFloat2x2(_: string, matrixFloat2x2: simd_float2x2): SKUniform;

	static uniformWithNameMatrixFloat3x3(_: string, matrixFloat3x3: simd_float3x3): SKUniform;

	static uniformWithNameMatrixFloat4x4(_: string, matrixFloat4x4: simd_float4x4): SKUniform;

	static uniformWithNameTexture(_: string, texture?: SKTexture): SKUniform;

	static uniformWithNameVectorFloat2(_: string, vectorFloat2: number): SKUniform;

	static uniformWithNameVectorFloat3(_: string, vectorFloat3: number): SKUniform;

	static uniformWithNameVectorFloat4(_: string, vectorFloat4: number): SKUniform;

	setFloatValue(_: number)

	floatValue: number;

	setMatrixFloat2x2Value(_: simd_float2x2)

	matrixFloat2x2Value: simd_float2x2;

	setMatrixFloat3x3Value(_: simd_float3x3)

	matrixFloat3x3Value: simd_float3x3;

	setMatrixFloat4x4Value(_: simd_float4x4)

	matrixFloat4x4Value: simd_float4x4;

	readonly name: string;

	setTextureValue(_: SKTexture)

	textureValue: SKTexture;

	readonly uniformType: SKUniformType;

	setVectorFloat2Value(_: number)

	vectorFloat2Value: number;

	setVectorFloat3Value(_: number)

	vectorFloat3Value: number;

	setVectorFloat4Value(_: number)

	vectorFloat4Value: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(name: string);

	static create(name: string, float: number);

	static create(name: string, matrixFloat2x2: simd_float2x2);

	static create(name: string, matrixFloat3x3: simd_float3x3);

	static create(name: string, matrixFloat4x4: simd_float4x4);

	static create(name: string, texture: SKTexture);

	static create(name: string, vectorFloat2: number);

	static create(name: string, vectorFloat3: number);

	static create(name: string, vectorFloat4: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum SKUniformType {

	None = 0,

	Float = 1,

	FloatVector2 = 2,

	FloatVector3 = 3,

	FloatVector4 = 4,

	FloatMatrix2 = 5,

	FloatMatrix3 = 6,

	FloatMatrix4 = 7,

	Texture = 8
}


declare class SKVideoNode extends SKNode {

	static node(): SKVideoNode; // inherited from SKNode

	static nodeWithFileNamed(_: string): SKVideoNode; // inherited from SKNode

	static nodeWithFileNamedWithSecurelyWithClassesAndError(securelyWithClasses: string, andError: NSSet<typeof NSObject>): SKVideoNode; // inherited from SKNode

	static videoNodeWithAVPlayer(_: AVPlayer): SKVideoNode;

	static videoNodeWithFileNamed(_: string): SKVideoNode;

	static videoNodeWithURL(_: NSURL): SKVideoNode;

	setAnchorPoint(_: CGPoint)

	anchorPoint: CGPoint;

	setSize(_: CGSize)

	size: CGSize;

	static create(AVPlayer: AVPlayer);

	static create(fileNamed: string);

	static create(URL: NSURL);

	pause(): void;

	play(): void;
}

declare class SKView extends NSView implements NSSecureCoding {

	setAllowsTransparency(_: boolean)

	allowsTransparency: boolean;

	setAsynchronous(_: boolean)

	isAsynchronous: boolean;

	setDelegate(_: NSObject)

	delegate: NSObject;

	setIgnoresSiblingOrder(_: boolean)

	ignoresSiblingOrder: boolean;

	setPaused(_: boolean)

	isPaused: boolean;

	setPreferredFramesPerSecond(_: number)

	preferredFramesPerSecond: number;

	readonly scene: SKScene;

	setShouldCullNonVisibleNodes(_: boolean)

	shouldCullNonVisibleNodes: boolean;

	setShowsDrawCount(_: boolean)

	showsDrawCount: boolean;

	setShowsFPS(_: boolean)

	showsFPS: boolean;

	setShowsFields(_: boolean)

	showsFields: boolean;

	setShowsNodeCount(_: boolean)

	showsNodeCount: boolean;

	setShowsPhysics(_: boolean)

	showsPhysics: boolean;

	setShowsQuadCount(_: boolean)

	showsQuadCount: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	convertPointFromScene(_: CGPoint, fromScene: SKScene): CGPoint;

	convertPointToScene(_: CGPoint, toScene: SKScene): CGPoint;

	encodeWithCoder(_: NSCoder): void;

	presentScene(_?: SKScene): void;

	presentSceneTransition(_: SKScene, transition: SKTransition): void;

	textureFromNode(_: SKNode): SKTexture;

	textureFromNodeCrop(_: SKNode, crop: CGRect): SKTexture;
}

interface SKViewDelegate extends NSObjectProtocol {

	viewShouldRenderAtTime?(_: SKView, shouldRenderAtTime: number): boolean;
}
declare var SKViewDelegate: {

	prototype: SKViewDelegate;
};

declare class SKWarpGeometry extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SKWarpGeometryGrid extends SKWarpGeometry implements NSSecureCoding {

	static grid(): SKWarpGeometryGrid;

	static gridWithColumnsRows(_: number, rows: number): SKWarpGeometryGrid;

	static gridWithColumnsRowsSourcePositionsDestPositions(_: number, rows: number, sourcePositions?: number, destPositions?: number): SKWarpGeometryGrid;

	readonly numberOfColumns: number;

	readonly numberOfRows: number;

	readonly vertexCount: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(columns: number, rows: number, sourcePositions: number, destPositions: number);

	destPositionAtIndex(_: number): number;

	encodeWithCoder(_: NSCoder): void;

	gridByReplacingDestPositions(_: number): this;

	gridByReplacingSourcePositions(_: number): this;

	sourcePositionAtIndex(_: number): number;
}

interface SKWarpable extends NSObjectProtocol {

	setSubdivisionLevels(_: number)

	subdivisionLevels: number;

	setWarpGeometry(_: SKWarpGeometry)

	warpGeometry: SKWarpGeometry;
}
declare var SKWarpable: {

	prototype: SKWarpable;
};
