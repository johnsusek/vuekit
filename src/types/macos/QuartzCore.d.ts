
interface CAAction {

	runActionForKeyObjectArguments(_: string, object_: any, arguments_?: NSDictionary<any, any>): void;
}
declare var CAAction: {

	prototype: CAAction;
};

declare class CAAnimation extends NSObject implements CAAction, CAMediaTiming, NSCopying, NSSecureCoding {

	static animation(): CAAnimation;

	static defaultValueForKey(_: string): any;

	setDelegate(_: CAAnimationDelegate)

	delegate: CAAnimationDelegate;

	setRemovedOnCompletion(_: boolean)

	isRemovedOnCompletion: boolean;

	setTimingFunction(_: CAMediaTimingFunction)

	timingFunction: CAMediaTimingFunction;

	setAutoreverses(_: boolean)

	autoreverses: boolean; // inherited from CAMediaTiming

	setBeginTime(_: number)

	beginTime: number; // inherited from CAMediaTiming

	setDuration(_: number)

	duration: number; // inherited from CAMediaTiming

	setFillMode(_: string)

	fillMode: string; // inherited from CAMediaTiming

	setRepeatCount(_: number)

	repeatCount: number; // inherited from CAMediaTiming

	setRepeatDuration(_: number)

	repeatDuration: number; // inherited from CAMediaTiming

	setSpeed(_: number)

	speed: number; // inherited from CAMediaTiming

	setTimeOffset(_: number)

	timeOffset: number; // inherited from CAMediaTiming

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	runActionForKeyObjectArguments(_: string, object_: any, arguments_?: NSDictionary<any, any>): void;

	shouldArchiveValueForKey(_: string): boolean;
}

interface CAAnimationDelegate extends NSObjectProtocol {

	animationDidStart?(_: CAAnimation): void;

	animationDidStopFinished?(_: CAAnimation, finished: boolean): void;
}
declare var CAAnimationDelegate: {

	prototype: CAAnimationDelegate;
};

declare class CAAnimationGroup extends CAAnimation {

	static animation(): CAAnimationGroup; // inherited from CAAnimation

	setAnimations(_: NSArray<CAAnimation>)

	animations: NSArray<CAAnimation>;
}

enum CAAutoresizingMask {

	kCALayerNotSizable = 0,

	kCALayerMinXMargin = 1,

	kCALayerWidthSizable = 2,

	kCALayerMaxXMargin = 4,

	kCALayerMinYMargin = 8,

	kCALayerHeightSizable = 16,

	kCALayerMaxYMargin = 32
}

globalThis.CAAutoresizingMask = CAAutoresizingMask;

declare class CABasicAnimation extends CAPropertyAnimation {

	static animation(): CABasicAnimation; // inherited from CAAnimation

	static animationWithKeyPath(_?: string): CABasicAnimation; // inherited from CAPropertyAnimation

	setByValue(_: any)

	byValue: any;

	setFromValue(_: any)

	fromValue: any;

	setToValue(_: any)

	toValue: any;
}

declare class CAConstraint extends NSObject implements NSSecureCoding {

	static constraintWithAttributeRelativeToAttribute(_: CAConstraintAttribute, relativeTo: string, attribute: CAConstraintAttribute): CAConstraint;

	static constraintWithAttributeRelativeToAttributeOffset(_: CAConstraintAttribute, relativeTo: string, attribute: CAConstraintAttribute, offset: number): CAConstraint;

	static constraintWithAttributeRelativeToAttributeScaleOffset(_: CAConstraintAttribute, relativeTo: string, attribute: CAConstraintAttribute, scale: number, offset: number): CAConstraint;

	readonly attribute: CAConstraintAttribute;

	readonly offset: number;

	readonly scale: number;

	readonly sourceAttribute: CAConstraintAttribute;

	readonly sourceName: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(attribute: CAConstraintAttribute, relativeTo: string, attribute2: CAConstraintAttribute, scale: number, offset: number);

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum CAConstraintAttribute {

	kCAConstraintMinX = 0,

	kCAConstraintMidX = 1,

	kCAConstraintMaxX = 2,

	kCAConstraintWidth = 3,

	kCAConstraintMinY = 4,

	kCAConstraintMidY = 5,

	kCAConstraintMaxY = 6,

	kCAConstraintHeight = 7
}

globalThis.CAConstraintAttribute = CAConstraintAttribute;

declare class CAConstraintLayoutManager extends NSObject implements CALayoutManager {

	static layoutManager(): CAConstraintLayoutManager;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	invalidateLayoutOfLayer(_: CALayer): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	layoutSublayersOfLayer(_: CALayer): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	preferredSizeOfLayer(_: CALayer): CGSize;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

enum CACornerMask {

	kCALayerMinXMinYCorner = 1,

	kCALayerMaxXMinYCorner = 2,

	kCALayerMinXMaxYCorner = 4,

	kCALayerMaxXMaxYCorner = 8
}

globalThis.CACornerMask = CACornerMask;

declare function CACurrentMediaTime(): number;

declare class CAEDRMetadata extends NSObject {

	static HDR10MetadataWithDisplayInfoContentInfoOpticalOutputScale(_?: NSData, contentInfo?: NSData, opticalOutputScale: number): CAEDRMetadata;

	static HDR10MetadataWithMinLuminanceMaxLuminanceOpticalOutputScale(_: number, maxLuminance: number, opticalOutputScale: number): CAEDRMetadata;

	static HLGMetadata(): CAEDRMetadata;
}

enum CAEdgeAntialiasingMask {

	kCALayerLeftEdge = 1,

	kCALayerRightEdge = 2,

	kCALayerBottomEdge = 4,

	kCALayerTopEdge = 8
}

globalThis.CAEdgeAntialiasingMask = CAEdgeAntialiasingMask;

declare class CAEmitterCell extends NSObject implements CAMediaTiming, NSSecureCoding {

	static defaultValueForKey(_: string): any;

	static emitterCell(): CAEmitterCell;

	setAlphaRange(_: number)

	alphaRange: number;

	setAlphaSpeed(_: number)

	alphaSpeed: number;

	setBirthRate(_: number)

	birthRate: number;

	setBlueRange(_: number)

	blueRange: number;

	setBlueSpeed(_: number)

	blueSpeed: number;

	setColor(_: any)

	color: any;

	setContents(_: any)

	contents: any;

	setContentsRect(_: CGRect)

	contentsRect: CGRect;

	setContentsScale(_: number)

	contentsScale: number;

	setEmissionLatitude(_: number)

	emissionLatitude: number;

	setEmissionLongitude(_: number)

	emissionLongitude: number;

	setEmissionRange(_: number)

	emissionRange: number;

	setEmitterCells(_: NSArray<CAEmitterCell>)

	emitterCells: NSArray<CAEmitterCell>;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setGreenRange(_: number)

	greenRange: number;

	setGreenSpeed(_: number)

	greenSpeed: number;

	setLifetime(_: number)

	lifetime: number;

	setLifetimeRange(_: number)

	lifetimeRange: number;

	setMagnificationFilter(_: string)

	magnificationFilter: string;

	setMinificationFilter(_: string)

	minificationFilter: string;

	setMinificationFilterBias(_: number)

	minificationFilterBias: number;

	setName(_: string)

	name: string;

	setRedRange(_: number)

	redRange: number;

	setRedSpeed(_: number)

	redSpeed: number;

	setScale(_: number)

	scale: number;

	setScaleRange(_: number)

	scaleRange: number;

	setScaleSpeed(_: number)

	scaleSpeed: number;

	setSpin(_: number)

	spin: number;

	setSpinRange(_: number)

	spinRange: number;

	setStyle(_: NSDictionary<any, any>)

	style: NSDictionary<any, any>;

	setVelocity(_: number)

	velocity: number;

	setVelocityRange(_: number)

	velocityRange: number;

	setXAcceleration(_: number)

	xAcceleration: number;

	setYAcceleration(_: number)

	yAcceleration: number;

	setZAcceleration(_: number)

	zAcceleration: number;

	setAutoreverses(_: boolean)

	autoreverses: boolean; // inherited from CAMediaTiming

	setBeginTime(_: number)

	beginTime: number; // inherited from CAMediaTiming

	setDuration(_: number)

	duration: number; // inherited from CAMediaTiming

	setFillMode(_: string)

	fillMode: string; // inherited from CAMediaTiming

	setRepeatCount(_: number)

	repeatCount: number; // inherited from CAMediaTiming

	setRepeatDuration(_: number)

	repeatDuration: number; // inherited from CAMediaTiming

	setSpeed(_: number)

	speed: number; // inherited from CAMediaTiming

	setTimeOffset(_: number)

	timeOffset: number; // inherited from CAMediaTiming

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	shouldArchiveValueForKey(_: string): boolean;
}

declare class CAEmitterLayer extends CALayer {

	static layer(): CAEmitterLayer; // inherited from CALayer

	setBirthRate(_: number)

	birthRate: number;

	setEmitterCells(_: NSArray<CAEmitterCell>)

	emitterCells: NSArray<CAEmitterCell>;

	setEmitterDepth(_: number)

	emitterDepth: number;

	setEmitterMode(_: string)

	emitterMode: string;

	setEmitterPosition(_: CGPoint)

	emitterPosition: CGPoint;

	setEmitterShape(_: string)

	emitterShape: string;

	setEmitterSize(_: CGSize)

	emitterSize: CGSize;

	setEmitterZPosition(_: number)

	emitterZPosition: number;

	setLifetime(_: number)

	lifetime: number;

	setPreservesDepth(_: boolean)

	preservesDepth: boolean;

	setRenderMode(_: string)

	renderMode: string;

	setScale(_: number)

	scale: number;

	setSeed(_: number)

	seed: number;

	setSpin(_: number)

	spin: number;

	setVelocity(_: number)

	velocity: number;
}

declare class CAGradientLayer extends CALayer {

	static layer(): CAGradientLayer; // inherited from CALayer

	setColors(_: NSArray<any>)

	colors: NSArray<any>;

	setEndPoint(_: CGPoint)

	endPoint: CGPoint;

	setLocations(_: NSArray<number>)

	locations: NSArray<number>;

	setStartPoint(_: CGPoint)

	startPoint: CGPoint;

	setType(_: string)

	type: string;
}

declare class CAKeyframeAnimation extends CAPropertyAnimation {

	static animation(): CAKeyframeAnimation; // inherited from CAAnimation

	static animationWithKeyPath(_?: string): CAKeyframeAnimation; // inherited from CAPropertyAnimation

	setBiasValues(_: NSArray<number>)

	biasValues: NSArray<number>;

	setCalculationMode(_: string)

	calculationMode: string;

	setContinuityValues(_: NSArray<number>)

	continuityValues: NSArray<number>;

	setKeyTimes(_: NSArray<number>)

	keyTimes: NSArray<number>;

	setPath(_: any)

	path: any;

	setRotationMode(_: string)

	rotationMode: string;

	setTensionValues(_: NSArray<number>)

	tensionValues: NSArray<number>;

	setTimingFunctions(_: NSArray<CAMediaTimingFunction>)

	timingFunctions: NSArray<CAMediaTimingFunction>;

	setValues(_: NSArray<any>)

	values: NSArray<any>;
}

declare class CALayer extends NSObject implements CAMediaTiming, NSSecureCoding {

	static cornerCurveExpansionFactor(_: string): number;

	static defaultActionForKey(_: string): CAAction;

	static defaultValueForKey(_: string): any;

	static layer(): CALayer;

	static layerWithRemoteClientId(_: number): CALayer;

	static needsDisplayForKey(_: string): boolean;

	setActions(_: NSDictionary<string, CAAction>)

	actions: NSDictionary<string, CAAction>;

	setAllowsEdgeAntialiasing(_: boolean)

	allowsEdgeAntialiasing: boolean;

	setAllowsGroupOpacity(_: boolean)

	allowsGroupOpacity: boolean;

	setAnchorPoint(_: CGPoint)

	anchorPoint: CGPoint;

	setAnchorPointZ(_: number)

	anchorPointZ: number;

	setAutoresizingMask(_: CAAutoresizingMask)

	autoresizingMask: CAAutoresizingMask;

	setBackgroundColor(_: any)

	backgroundColor: any;

	setBackgroundFilters(_: NSArray<any>)

	backgroundFilters: NSArray<any>;

	setBorderColor(_: any)

	borderColor: any;

	setBorderWidth(_: number)

	borderWidth: number;

	setBounds(_: CGRect)

	bounds: CGRect;

	setCompositingFilter(_: any)

	compositingFilter: any;

	setConstraints(_: NSArray<CAConstraint>)

	constraints: NSArray<CAConstraint>;

	setContents(_: any)

	contents: any;

	setContentsCenter(_: CGRect)

	contentsCenter: CGRect;

	setContentsFormat(_: string)

	contentsFormat: string;

	setContentsGravity(_: string)

	contentsGravity: string;

	setContentsRect(_: CGRect)

	contentsRect: CGRect;

	setContentsScale(_: number)

	contentsScale: number;

	setCornerCurve(_: string)

	cornerCurve: string;

	setCornerRadius(_: number)

	cornerRadius: number;

	setDelegate(_: CALayerDelegate)

	delegate: CALayerDelegate;

	setDoubleSided(_: boolean)

	isDoubleSided: boolean;

	setDrawsAsynchronously(_: boolean)

	drawsAsynchronously: boolean;

	setEdgeAntialiasingMask(_: CAEdgeAntialiasingMask)

	edgeAntialiasingMask: CAEdgeAntialiasingMask;

	setFilters(_: NSArray<any>)

	filters: NSArray<any>;

	setFrame(_: CGRect)

	frame: CGRect;

	setGeometryFlipped(_: boolean)

	isGeometryFlipped: boolean;

	setHidden(_: boolean)

	isHidden: boolean;

	setLayoutManager(_: CALayoutManager)

	layoutManager: CALayoutManager;

	setMagnificationFilter(_: string)

	magnificationFilter: string;

	setMask(_: CALayer)

	mask: CALayer;

	setMaskedCorners(_: CACornerMask)

	maskedCorners: CACornerMask;

	setMasksToBounds(_: boolean)

	masksToBounds: boolean;

	setMinificationFilter(_: string)

	minificationFilter: string;

	setMinificationFilterBias(_: number)

	minificationFilterBias: number;

	setName(_: string)

	name: string;

	setNeedsDisplayOnBoundsChange(_: boolean)

	needsDisplayOnBoundsChange: boolean;

	setOpacity(_: number)

	opacity: number;

	setOpaque(_: boolean)

	isOpaque: boolean;

	setPosition(_: CGPoint)

	position: CGPoint;

	setRasterizationScale(_: number)

	rasterizationScale: number;

	setShadowColor(_: any)

	shadowColor: any;

	setShadowOffset(_: CGSize)

	shadowOffset: CGSize;

	setShadowOpacity(_: number)

	shadowOpacity: number;

	setShadowPath(_: any)

	shadowPath: any;

	setShadowRadius(_: number)

	shadowRadius: number;

	setShouldRasterize(_: boolean)

	shouldRasterize: boolean;

	setStyle(_: NSDictionary<any, any>)

	style: NSDictionary<any, any>;

	setSublayerTransform(_: CATransform3D)

	sublayerTransform: CATransform3D;

	setSublayers(_: NSArray<CALayer>)

	sublayers: NSArray<CALayer>;

	readonly superlayer: CALayer;

	setTransform(_: CATransform3D)

	transform: CATransform3D;

	readonly visibleRect: CGRect;

	setZPosition(_: number)

	zPosition: number;

	setAutoreverses(_: boolean)

	autoreverses: boolean; // inherited from CAMediaTiming

	setBeginTime(_: number)

	beginTime: number; // inherited from CAMediaTiming

	setDuration(_: number)

	duration: number; // inherited from CAMediaTiming

	setFillMode(_: string)

	fillMode: string; // inherited from CAMediaTiming

	setRepeatCount(_: number)

	repeatCount: number; // inherited from CAMediaTiming

	setRepeatDuration(_: number)

	repeatDuration: number; // inherited from CAMediaTiming

	setSpeed(_: number)

	speed: number; // inherited from CAMediaTiming

	setTimeOffset(_: number)

	timeOffset: number; // inherited from CAMediaTiming

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(layer: any);

	actionForKey(_: string): CAAction;

	addAnimationForKey(_: CAAnimation, forKey?: string): void;

	addConstraint(_: CAConstraint): void;

	addSublayer(_: CALayer): void;

	affineTransform(): CGAffineTransform;

	animationForKey(_: string): CAAnimation;

	animationKeys(): NSArray<string>;

	containsPoint(_: CGPoint): boolean;

	contentsAreFlipped(): boolean;

	convertPointFromLayer(_: CGPoint, fromLayer?: CALayer): CGPoint;

	convertPointToLayer(_: CGPoint, toLayer?: CALayer): CGPoint;

	convertRectFromLayer(_: CGRect, fromLayer?: CALayer): CGRect;

	convertRectToLayer(_: CGRect, toLayer?: CALayer): CGRect;

	convertTimeFromLayer(_: number, fromLayer?: CALayer): number;

	convertTimeToLayer(_: number, toLayer?: CALayer): number;

	display(): void;

	displayIfNeeded(): void;

	drawInContext(_: any): void;

	encodeWithCoder(_: NSCoder): void;

	hitTest(_: CGPoint): CALayer;

	insertSublayerAbove(_: CALayer, above?: CALayer): void;

	insertSublayerAtIndex(_: CALayer, atIndex: number): void;

	insertSublayerBelow(_: CALayer, below?: CALayer): void;

	layoutIfNeeded(): void;

	layoutSublayers(): void;

	modelLayer(): this;

	needsDisplay(): boolean;

	needsLayout(): boolean;

	preferredFrameSize(): CGSize;

	presentationLayer(): this;

	removeAllAnimations(): void;

	removeAnimationForKey(_: string): void;

	removeFromSuperlayer(): void;

	renderInContext(_: any): void;

	replaceSublayerWith(_: CALayer, with_: CALayer): void;

	resizeSublayersWithOldSize(_: CGSize): void;

	resizeWithOldSuperlayerSize(_: CGSize): void;

	scrollPoint(_: CGPoint): void;

	scrollRectToVisible(_: CGRect): void;

	setAffineTransform(_: CGAffineTransform): void;

	setNeedsDisplay(): void;

	setNeedsDisplayInRect(_: CGRect): void;

	setNeedsLayout(): void;

	shouldArchiveValueForKey(_: string): boolean;
}

interface CALayerDelegate extends NSObjectProtocol {

	actionForLayerForKey?(_: CALayer, forKey: string): CAAction;

	displayLayer?(_: CALayer): void;

	drawLayerInContext?(_: CALayer, inContext: any): void;

	layerWillDraw?(_: CALayer): void;

	layoutSublayersOfLayer?(_: CALayer): void;
}
declare var CALayerDelegate: {

	prototype: CALayerDelegate;
};

interface CALayoutManager extends NSObjectProtocol {

	invalidateLayoutOfLayer?(_: CALayer): void;

	layoutSublayersOfLayer?(_: CALayer): void;

	preferredSizeOfLayer?(_: CALayer): CGSize;
}
declare var CALayoutManager: {

	prototype: CALayoutManager;
};

interface CAMediaTiming {

	setAutoreverses(_: boolean)

	autoreverses: boolean;

	setBeginTime(_: number)

	beginTime: number;

	setDuration(_: number)

	duration: number;

	setFillMode(_: string)

	fillMode: string;

	setRepeatCount(_: number)

	repeatCount: number;

	setRepeatDuration(_: number)

	repeatDuration: number;

	setSpeed(_: number)

	speed: number;

	setTimeOffset(_: number)

	timeOffset: number;
}
declare var CAMediaTiming: {

	prototype: CAMediaTiming;
};

declare class CAMediaTimingFunction extends NSObject implements NSSecureCoding {

	static functionWithControlPoints(_: number, _: number, _: number, _: number): CAMediaTimingFunction;

	static functionWithName(_: string): CAMediaTimingFunction;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(controlPoints: number);

	encodeWithCoder(_: NSCoder): void;

	getControlPointAtIndexValues(_: number, values: number): void;
}

interface CAMetalDrawable extends MTLDrawable {

	layer: CAMetalLayer;

	texture: MTLTexture;
}
declare var CAMetalDrawable: {

	prototype: CAMetalDrawable;
};

declare class CAMetalLayer extends CALayer {

	static layer(): CAMetalLayer; // inherited from CALayer

	setEDRMetadata(_: CAEDRMetadata)

	EDRMetadata: CAEDRMetadata;

	setAllowsNextDrawableTimeout(_: boolean)

	allowsNextDrawableTimeout: boolean;

	setColorspace(_: any)

	colorspace: any;

	setDevice(_: MTLDevice)

	device: MTLDevice;

	setDisplaySyncEnabled(_: boolean)

	displaySyncEnabled: boolean;

	setDrawableSize(_: CGSize)

	drawableSize: CGSize;

	setFramebufferOnly(_: boolean)

	framebufferOnly: boolean;

	setMaximumDrawableCount(_: number)

	maximumDrawableCount: number;

	setPixelFormat(_: MTLPixelFormat)

	pixelFormat: MTLPixelFormat;

	readonly preferredDevice: MTLDevice;

	setPresentsWithTransaction(_: boolean)

	presentsWithTransaction: boolean;

	setWantsExtendedDynamicRangeContent(_: boolean)

	wantsExtendedDynamicRangeContent: boolean;

	nextDrawable(): CAMetalDrawable;
}

declare class CAPropertyAnimation extends CAAnimation {

	static animation(): CAPropertyAnimation; // inherited from CAAnimation

	static animationWithKeyPath(_?: string): CAPropertyAnimation;

	setAdditive(_: boolean)

	isAdditive: boolean;

	setCumulative(_: boolean)

	isCumulative: boolean;

	setKeyPath(_: string)

	keyPath: string;

	setValueFunction(_: CAValueFunction)

	valueFunction: CAValueFunction;
}

declare class CARemoteLayerClient extends NSObject {

	readonly clientId: number;

	setLayer(_: CALayer)

	layer: CALayer;

	static create(serverPort: number);

	invalidate(): void;
}

declare class CARemoteLayerServer extends NSObject {

	static sharedServer(): CARemoteLayerServer;

	readonly serverPort: number;
}

declare class CARenderer extends NSObject {

	static rendererWithMTLTextureOptions(_: MTLTexture, options?: NSDictionary<any, any>): CARenderer;

	setBounds(_: CGRect)

	bounds: CGRect;

	setLayer(_: CALayer)

	layer: CALayer;

	addUpdateRect(_: CGRect): void;

	beginFrameAtTimeTimeStamp(_: number, timeStamp?: CVTimeStamp): void;

	endFrame(): void;

	nextFrameTime(): number;

	render(): void;

	setDestination(_: MTLTexture): void;

	updateBounds(): CGRect;
}

declare class CAReplicatorLayer extends CALayer {

	static layer(): CAReplicatorLayer; // inherited from CALayer

	setInstanceAlphaOffset(_: number)

	instanceAlphaOffset: number;

	setInstanceBlueOffset(_: number)

	instanceBlueOffset: number;

	setInstanceColor(_: any)

	instanceColor: any;

	setInstanceCount(_: number)

	instanceCount: number;

	setInstanceDelay(_: number)

	instanceDelay: number;

	setInstanceGreenOffset(_: number)

	instanceGreenOffset: number;

	setInstanceRedOffset(_: number)

	instanceRedOffset: number;

	setInstanceTransform(_: CATransform3D)

	instanceTransform: CATransform3D;

	setPreservesDepth(_: boolean)

	preservesDepth: boolean;
}

declare class CAScrollLayer extends CALayer {

	static layer(): CAScrollLayer; // inherited from CALayer

	setScrollMode(_: string)

	scrollMode: string;

	scrollToPoint(_: CGPoint): void;

	scrollToRect(_: CGRect): void;
}

declare class CAShapeLayer extends CALayer {

	static layer(): CAShapeLayer; // inherited from CALayer

	setFillColor(_: any)

	fillColor: any;

	setFillRule(_: string)

	fillRule: string;

	setLineCap(_: string)

	lineCap: string;

	setLineDashPattern(_: NSArray<number>)

	lineDashPattern: NSArray<number>;

	setLineDashPhase(_: number)

	lineDashPhase: number;

	setLineJoin(_: string)

	lineJoin: string;

	setLineWidth(_: number)

	lineWidth: number;

	setMiterLimit(_: number)

	miterLimit: number;

	setPath(_: any)

	path: any;

	setStrokeColor(_: any)

	strokeColor: any;

	setStrokeEnd(_: number)

	strokeEnd: number;

	setStrokeStart(_: number)

	strokeStart: number;
}

declare class CASpringAnimation extends CABasicAnimation {

	static animation(): CASpringAnimation; // inherited from CAAnimation

	static animationWithKeyPath(_?: string): CASpringAnimation; // inherited from CAPropertyAnimation

	setDamping(_: number)

	damping: number;

	setInitialVelocity(_: number)

	initialVelocity: number;

	setMass(_: number)

	mass: number;

	readonly settlingDuration: number;

	setStiffness(_: number)

	stiffness: number;
}

declare class CATextLayer extends CALayer {

	static layer(): CATextLayer; // inherited from CALayer

	setAlignmentMode(_: string)

	alignmentMode: string;

	setAllowsFontSubpixelQuantization(_: boolean)

	allowsFontSubpixelQuantization: boolean;

	setFont(_: any)

	font: any;

	setFontSize(_: number)

	fontSize: number;

	setForegroundColor(_: any)

	foregroundColor: any;

	setString(_: any)

	string: any;

	setTruncationMode(_: string)

	truncationMode: string;

	setWrapped(_: boolean)

	isWrapped: boolean;
}

declare class CATiledLayer extends CALayer {

	static fadeDuration(): number;

	static layer(): CATiledLayer; // inherited from CALayer

	setLevelsOfDetail(_: number)

	levelsOfDetail: number;

	setLevelsOfDetailBias(_: number)

	levelsOfDetailBias: number;

	setTileSize(_: CGSize)

	tileSize: CGSize;
}

declare class CATransaction extends NSObject {

	static animationDuration(): number;

	static animationTimingFunction(): CAMediaTimingFunction;

	static begin(): void;

	static commit(): void;

	static completionBlock(): () => void;

	static disableActions(): boolean;

	static flush(): void;

	static lock(): void;

	static setAnimationDuration(_: number): void;

	static setAnimationTimingFunction(_?: CAMediaTimingFunction): void;

	static setCompletionBlock(_?: () => void): void;

	static setDisableActions(_: boolean): void;

	static setValueForKey(_?: any, forKey: string): void;

	static unlock(): void;

	static valueForKey(_: string): any;
}

interface CATransform3D {
	m11: number;
	m12: number;
	m13: number;
	m14: number;
	m21: number;
	m22: number;
	m23: number;
	m24: number;
	m31: number;
	m32: number;
	m33: number;
	m34: number;
	m41: number;
	m42: number;
	m43: number;
	m44: number;
}
declare var CATransform3D: CATransform3D;

declare function CATransform3DConcat(a: CATransform3D, b: CATransform3D): CATransform3D;

declare function CATransform3DEqualToTransform(a: CATransform3D, b: CATransform3D): boolean;

declare function CATransform3DGetAffineTransform(t: CATransform3D): CGAffineTransform;

declare var CATransform3DIdentity: CATransform3D;

declare function CATransform3DInvert(t: CATransform3D): CATransform3D;

declare function CATransform3DIsAffine(t: CATransform3D): boolean;

declare function CATransform3DIsIdentity(t: CATransform3D): boolean;

declare function CATransform3DMakeAffineTransform(m: CGAffineTransform): CATransform3D;

declare function CATransform3DMakeRotation(angle: number, x: number, y: number, z: number): CATransform3D;

declare function CATransform3DMakeScale(sx: number, sy: number, sz: number): CATransform3D;

declare function CATransform3DMakeTranslation(tx: number, ty: number, tz: number): CATransform3D;

declare function CATransform3DRotate(t: CATransform3D, angle: number, x: number, y: number, z: number): CATransform3D;

declare function CATransform3DScale(t: CATransform3D, sx: number, sy: number, sz: number): CATransform3D;

declare function CATransform3DTranslate(t: CATransform3D, tx: number, ty: number, tz: number): CATransform3D;

declare class CATransformLayer extends CALayer {

	static layer(): CATransformLayer; // inherited from CALayer
}

declare class CATransition extends CAAnimation {

	static animation(): CATransition; // inherited from CAAnimation

	setEndProgress(_: number)

	endProgress: number;

	setFilter(_: any)

	filter: any;

	setStartProgress(_: number)

	startProgress: number;

	setSubtype(_: string)

	subtype: string;

	setType(_: string)

	type: string;
}

declare class CAValueFunction extends NSObject implements NSSecureCoding {

	static functionWithName(_: string): CAValueFunction;

	readonly name: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

interface _CALayerIvars {
	refcount: number;
	magic: number;
	layer: any;
}
declare var _CALayerIvars: _CALayerIvars;

declare var kCAAlignmentCenter: string;

declare var kCAAlignmentJustified: string;

declare var kCAAlignmentLeft: string;

declare var kCAAlignmentNatural: string;

declare var kCAAlignmentRight: string;

declare var kCAAnimationCubic: string;

declare var kCAAnimationCubicPaced: string;

declare var kCAAnimationDiscrete: string;

declare var kCAAnimationLinear: string;

declare var kCAAnimationPaced: string;

declare var kCAAnimationRotateAuto: string;

declare var kCAAnimationRotateAutoReverse: string;

declare var kCAContentsFormatGray8Uint: string;

declare var kCAContentsFormatRGBA16Float: string;

declare var kCAContentsFormatRGBA8Uint: string;

declare var kCACornerCurveCircular: string;

declare var kCACornerCurveContinuous: string;

declare var kCAEmitterLayerAdditive: string;

declare var kCAEmitterLayerBackToFront: string;

declare var kCAEmitterLayerCircle: string;

declare var kCAEmitterLayerCuboid: string;

declare var kCAEmitterLayerLine: string;

declare var kCAEmitterLayerOldestFirst: string;

declare var kCAEmitterLayerOldestLast: string;

declare var kCAEmitterLayerOutline: string;

declare var kCAEmitterLayerPoint: string;

declare var kCAEmitterLayerPoints: string;

declare var kCAEmitterLayerRectangle: string;

declare var kCAEmitterLayerSphere: string;

declare var kCAEmitterLayerSurface: string;

declare var kCAEmitterLayerUnordered: string;

declare var kCAEmitterLayerVolume: string;

declare var kCAFillModeBackwards: string;

declare var kCAFillModeBoth: string;

declare var kCAFillModeForwards: string;

declare var kCAFillModeRemoved: string;

declare var kCAFillRuleEvenOdd: string;

declare var kCAFillRuleNonZero: string;

declare var kCAFilterLinear: string;

declare var kCAFilterNearest: string;

declare var kCAFilterTrilinear: string;

declare var kCAGradientLayerAxial: string;

declare var kCAGradientLayerConic: string;

declare var kCAGradientLayerRadial: string;

declare var kCAGravityBottom: string;

declare var kCAGravityBottomLeft: string;

declare var kCAGravityBottomRight: string;

declare var kCAGravityCenter: string;

declare var kCAGravityLeft: string;

declare var kCAGravityResize: string;

declare var kCAGravityResizeAspect: string;

declare var kCAGravityResizeAspectFill: string;

declare var kCAGravityRight: string;

declare var kCAGravityTop: string;

declare var kCAGravityTopLeft: string;

declare var kCAGravityTopRight: string;

declare var kCALineCapButt: string;

declare var kCALineCapRound: string;

declare var kCALineCapSquare: string;

declare var kCALineJoinBevel: string;

declare var kCALineJoinMiter: string;

declare var kCALineJoinRound: string;

declare var kCAMediaTimingFunctionDefault: string;

declare var kCAMediaTimingFunctionEaseIn: string;

declare var kCAMediaTimingFunctionEaseInEaseOut: string;

declare var kCAMediaTimingFunctionEaseOut: string;

declare var kCAMediaTimingFunctionLinear: string;

declare var kCAOnOrderIn: string;

declare var kCAOnOrderOut: string;

declare var kCARendererColorSpace: string;

declare var kCARendererMetalCommandQueue: string;

declare var kCAScrollBoth: string;

declare var kCAScrollHorizontally: string;

declare var kCAScrollNone: string;

declare var kCAScrollVertically: string;

declare var kCATransactionAnimationDuration: string;

declare var kCATransactionAnimationTimingFunction: string;

declare var kCATransactionCompletionBlock: string;

declare var kCATransactionDisableActions: string;

declare var kCATransition: string;

declare var kCATransitionFade: string;

declare var kCATransitionFromBottom: string;

declare var kCATransitionFromLeft: string;

declare var kCATransitionFromRight: string;

declare var kCATransitionFromTop: string;

declare var kCATransitionMoveIn: string;

declare var kCATransitionPush: string;

declare var kCATransitionReveal: string;

declare var kCATruncationEnd: string;

declare var kCATruncationMiddle: string;

declare var kCATruncationNone: string;

declare var kCATruncationStart: string;

declare var kCAValueFunctionRotateX: string;

declare var kCAValueFunctionRotateY: string;

declare var kCAValueFunctionRotateZ: string;

declare var kCAValueFunctionScale: string;

declare var kCAValueFunctionScaleX: string;

declare var kCAValueFunctionScaleY: string;

declare var kCAValueFunctionScaleZ: string;

declare var kCAValueFunctionTranslate: string;

declare var kCAValueFunctionTranslateX: string;

declare var kCAValueFunctionTranslateY: string;

declare var kCAValueFunctionTranslateZ: string;
