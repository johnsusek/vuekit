globalThis.CAAutoresizingMask = globalThis.CAAutoresizingMask || {};

globalThis.CAAutoresizingMask = {
    kCALayerNotSizable: 0,
    kCALayerMinXMargin: 1,
    kCALayerWidthSizable: 2,
    kCALayerMaxXMargin: 4,
    kCALayerMinYMargin: 8,
    kCALayerHeightSizable: 16,
    kCALayerMaxYMargin: 32,
    '0': 'kCALayerNotSizable',
    '1': 'kCALayerMinXMargin',
    '2': 'kCALayerWidthSizable',
    '4': 'kCALayerMaxXMargin',
    '8': 'kCALayerMinYMargin',
    '16': 'kCALayerHeightSizable',
    '32': 'kCALayerMaxYMargin'
}

globalThis.CAConstraintAttribute = globalThis.CAConstraintAttribute || {};

globalThis.CAConstraintAttribute = {
    kCAConstraintMinX: 0,
    kCAConstraintMidX: 1,
    kCAConstraintMaxX: 2,
    kCAConstraintWidth: 3,
    kCAConstraintMinY: 4,
    kCAConstraintMidY: 5,
    kCAConstraintMaxY: 6,
    kCAConstraintHeight: 7,
    '0': 'kCAConstraintMinX',
    '1': 'kCAConstraintMidX',
    '2': 'kCAConstraintMaxX',
    '3': 'kCAConstraintWidth',
    '4': 'kCAConstraintMinY',
    '5': 'kCAConstraintMidY',
    '6': 'kCAConstraintMaxY',
    '7': 'kCAConstraintHeight'
}

globalThis.CACornerMask = globalThis.CACornerMask || {};

globalThis.CACornerMask = {
    kCALayerMinXMinYCorner: 1,
    kCALayerMaxXMinYCorner: 2,
    kCALayerMinXMaxYCorner: 4,
    kCALayerMaxXMaxYCorner: 8,
    '1': 'kCALayerMinXMinYCorner',
    '2': 'kCALayerMaxXMinYCorner',
    '4': 'kCALayerMinXMaxYCorner',
    '8': 'kCALayerMaxXMaxYCorner'
}

globalThis.CAEdgeAntialiasingMask = globalThis.CAEdgeAntialiasingMask || {};

globalThis.CAEdgeAntialiasingMask = {
    kCALayerLeftEdge: 1,
    kCALayerRightEdge: 2,
    kCALayerBottomEdge: 4,
    kCALayerTopEdge: 8,
    '1': 'kCALayerLeftEdge',
    '2': 'kCALayerRightEdge',
    '4': 'kCALayerBottomEdge',
    '8': 'kCALayerTopEdge'
}

interface CAAction {
  runActionForKeyObjectArguments(forKey: string, object_: any, arguments_?: NSDictionary<any, any>): void;
}

declare var CAAction: {
  prototype: CAAction;
};

declare class CAAnimation extends NSObject implements CAAction, CAMediaTiming, NSCopying, NSSecureCoding {
  static defaultValueForKey(forKey: string): any;
  delegate: CAAnimationDelegate;
  setDelegate(_: CAAnimationDelegate)
  isRemovedOnCompletion: boolean;
  setRemovedOnCompletion(_: boolean)
  timingFunction: CAMediaTimingFunction;
  setTimingFunction(_: CAMediaTimingFunction)
  autoreverses: boolean;
  setAutoreverses(_: boolean) // inherited from CAMediaTiming
  beginTime: number;
  setBeginTime(_: number) // inherited from CAMediaTiming
  duration: number;
  setDuration(_: number) // inherited from CAMediaTiming
  fillMode: string;
  setFillMode(_: string) // inherited from CAMediaTiming
  repeatCount: number;
  setRepeatCount(_: number) // inherited from CAMediaTiming
  repeatDuration: number;
  setRepeatDuration(_: number) // inherited from CAMediaTiming
  speed: number;
  setSpeed(_: number) // inherited from CAMediaTiming
  timeOffset: number;
  setTimeOffset(_: number) // inherited from CAMediaTiming
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  runActionForKeyObjectArguments(forKey: string, object_: any, arguments_?: NSDictionary<any, any>): void;
  shouldArchiveValueForKey(forKey: string): boolean;
}

interface CAAnimationDelegate extends NSObject {
  animationDidStart?(_: CAAnimation): void;
  animationDidStopFinished?(_: CAAnimation, finished: boolean): void;
}

declare var CAAnimationDelegate: {
  prototype: CAAnimationDelegate;
};

declare class CAAnimationGroup extends CAAnimation {
  animations: NSArray<CAAnimation>;
  setAnimations(_: NSArray<CAAnimation>)
}

declare class CABasicAnimation extends CAPropertyAnimation {
  static animationWithKeyPath(keyPath?: string): CABasicAnimation; // inherited from CAPropertyAnimation
  byValue: any;
  setByValue(_: any)
  fromValue: any;
  setFromValue(_: any)
  toValue: any;
  setToValue(_: any)
}

declare class CAConstraint extends NSObject implements NSSecureCoding {
  static constraintWithAttributeRelativeToAttribute(attribute: CAConstraintAttribute, relativeTo: string, attribute: CAConstraintAttribute): CAConstraint;
  static constraintWithAttributeRelativeToAttributeOffset(attribute: CAConstraintAttribute, relativeTo: string, attribute: CAConstraintAttribute, offset: number): CAConstraint;
  static constraintWithAttributeRelativeToAttributeScaleOffset(attribute: CAConstraintAttribute, relativeTo: string, attribute: CAConstraintAttribute, scale: number, offset: number): CAConstraint;
  readonly attribute: CAConstraintAttribute;
  readonly offset: number;
  readonly scale: number;
  readonly sourceAttribute: CAConstraintAttribute;
  readonly sourceName: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithAttributeRelativeToAttribute2ScaleOffset(attribute: CAConstraintAttribute, relativeTo: string, attribute2: CAConstraintAttribute, scale: number, offset: number): this;
  static createWithCoder(coder: NSCoder): this;
}

declare class CAConstraintLayoutManager extends NSObject implements CALayoutManager {
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  conformsToProtocol(to: any /* Protocol */): boolean;
  invalidateLayoutOfLayer(of: CALayer): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  layoutSublayersOfLayer(of: CALayer): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  preferredSizeOfLayer(of: CALayer): NSSize;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare function CACurrentMediaTime(): number;
declare class CAEDRMetadata extends NSObject {
  static HDR10MetadataWithDisplayInfoContentInfoOpticalOutputScale(displayInfo?: Data, contentInfo?: Data, opticalOutputScale: number): CAEDRMetadata;
  static HDR10MetadataWithMinLuminanceMaxLuminanceOpticalOutputScale(minLuminance: number, maxLuminance: number, opticalOutputScale: number): CAEDRMetadata;
  static HLGMetadata(): CAEDRMetadata;
}

declare class CAEmitterCell extends NSObject implements CAMediaTiming, NSSecureCoding {
  static defaultValueForKey(forKey: string): any;
  alphaRange: number;
  setAlphaRange(_: number)
  alphaSpeed: number;
  setAlphaSpeed(_: number)
  birthRate: number;
  setBirthRate(_: number)
  blueRange: number;
  setBlueRange(_: number)
  blueSpeed: number;
  setBlueSpeed(_: number)
  color: any;
  setColor(_: any)
  contents: any;
  setContents(_: any)
  contentsRect: NSRect;
  setContentsRect(_: NSRect)
  contentsScale: number;
  setContentsScale(_: number)
  emissionLatitude: number;
  setEmissionLatitude(_: number)
  emissionLongitude: number;
  setEmissionLongitude(_: number)
  emissionRange: number;
  setEmissionRange(_: number)
  emitterCells: NSArray<CAEmitterCell>;
  setEmitterCells(_: NSArray<CAEmitterCell>)
  isEnabled: boolean;
  setEnabled(_: boolean)
  greenRange: number;
  setGreenRange(_: number)
  greenSpeed: number;
  setGreenSpeed(_: number)
  lifetime: number;
  setLifetime(_: number)
  lifetimeRange: number;
  setLifetimeRange(_: number)
  magnificationFilter: string;
  setMagnificationFilter(_: string)
  minificationFilter: string;
  setMinificationFilter(_: string)
  minificationFilterBias: number;
  setMinificationFilterBias(_: number)
  name: string;
  setName(_: string)
  redRange: number;
  setRedRange(_: number)
  redSpeed: number;
  setRedSpeed(_: number)
  scale: number;
  setScale(_: number)
  scaleRange: number;
  setScaleRange(_: number)
  scaleSpeed: number;
  setScaleSpeed(_: number)
  spin: number;
  setSpin(_: number)
  spinRange: number;
  setSpinRange(_: number)
  style: NSDictionary<any, any>;
  setStyle(_: NSDictionary<any, any>)
  velocity: number;
  setVelocity(_: number)
  velocityRange: number;
  setVelocityRange(_: number)
  xAcceleration: number;
  setXAcceleration(_: number)
  yAcceleration: number;
  setYAcceleration(_: number)
  zAcceleration: number;
  setZAcceleration(_: number)
  autoreverses: boolean;
  setAutoreverses(_: boolean) // inherited from CAMediaTiming
  beginTime: number;
  setBeginTime(_: number) // inherited from CAMediaTiming
  duration: number;
  setDuration(_: number) // inherited from CAMediaTiming
  fillMode: string;
  setFillMode(_: string) // inherited from CAMediaTiming
  repeatCount: number;
  setRepeatCount(_: number) // inherited from CAMediaTiming
  repeatDuration: number;
  setRepeatDuration(_: number) // inherited from CAMediaTiming
  speed: number;
  setSpeed(_: number) // inherited from CAMediaTiming
  timeOffset: number;
  setTimeOffset(_: number) // inherited from CAMediaTiming
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  shouldArchiveValueForKey(forKey: string): boolean;
}

declare class CAEmitterLayer extends CALayer {
  birthRate: number;
  setBirthRate(_: number)
  emitterCells: NSArray<CAEmitterCell>;
  setEmitterCells(_: NSArray<CAEmitterCell>)
  emitterDepth: number;
  setEmitterDepth(_: number)
  emitterMode: string;
  setEmitterMode(_: string)
  emitterPosition: NSPoint;
  setEmitterPosition(_: NSPoint)
  emitterShape: string;
  setEmitterShape(_: string)
  emitterSize: NSSize;
  setEmitterSize(_: NSSize)
  emitterZPosition: number;
  setEmitterZPosition(_: number)
  lifetime: number;
  setLifetime(_: number)
  preservesDepth: boolean;
  setPreservesDepth(_: boolean)
  renderMode: string;
  setRenderMode(_: string)
  scale: number;
  setScale(_: number)
  seed: number;
  setSeed(_: number)
  spin: number;
  setSpin(_: number)
  velocity: number;
  setVelocity(_: number)
}

declare class CAGradientLayer extends CALayer {
  colors: NSArray<any>;
  setColors(_: NSArray<any>)
  endPoint: NSPoint;
  setEndPoint(_: NSPoint)
  locations: NSArray<number>;
  setLocations(_: NSArray<number>)
  startPoint: NSPoint;
  setStartPoint(_: NSPoint)
  type: string;
  setType(_: string)
}

declare class CAKeyframeAnimation extends CAPropertyAnimation {
  static animationWithKeyPath(keyPath?: string): CAKeyframeAnimation; // inherited from CAPropertyAnimation
  biasValues: NSArray<number>;
  setBiasValues(_: NSArray<number>)
  calculationMode: string;
  setCalculationMode(_: string)
  continuityValues: NSArray<number>;
  setContinuityValues(_: NSArray<number>)
  keyTimes: NSArray<number>;
  setKeyTimes(_: NSArray<number>)
  path: any;
  setPath(_: any)
  rotationMode: string;
  setRotationMode(_: string)
  tensionValues: NSArray<number>;
  setTensionValues(_: NSArray<number>)
  timingFunctions: NSArray<CAMediaTimingFunction>;
  setTimingFunctions(_: NSArray<CAMediaTimingFunction>)
  values: NSArray<any>;
  setValues(_: NSArray<any>)
}

declare class CALayer extends NSObject implements CAMediaTiming, NSSecureCoding {
  static cornerCurveExpansionFactor(_: string): number;
  static defaultActionForKey(forKey: string): CAAction;
  static defaultValueForKey(forKey: string): any;
  static needsDisplayForKey(forKey: string): boolean;
  actions: NSDictionary<string, CAAction>;
  setActions(_: NSDictionary<string, CAAction>)
  allowsEdgeAntialiasing: boolean;
  setAllowsEdgeAntialiasing(_: boolean)
  allowsGroupOpacity: boolean;
  setAllowsGroupOpacity(_: boolean)
  anchorPoint: NSPoint;
  setAnchorPoint(_: NSPoint)
  anchorPointZ: number;
  setAnchorPointZ(_: number)
  autoresizingMask: CAAutoresizingMask;
  setAutoresizingMask(_: CAAutoresizingMask)
  backgroundColor: any;
  setBackgroundColor(_: any)
  backgroundFilters: NSArray<any>;
  setBackgroundFilters(_: NSArray<any>)
  borderColor: any;
  setBorderColor(_: any)
  borderWidth: number;
  setBorderWidth(_: number)
  bounds: NSRect;
  setBounds(_: NSRect)
  compositingFilter: any;
  setCompositingFilter(_: any)
  constraints: NSArray<CAConstraint>;
  setConstraints(_: NSArray<CAConstraint>)
  contents: any;
  setContents(_: any)
  contentsCenter: NSRect;
  setContentsCenter(_: NSRect)
  contentsFormat: string;
  setContentsFormat(_: string)
  contentsGravity: string;
  setContentsGravity(_: string)
  contentsRect: NSRect;
  setContentsRect(_: NSRect)
  contentsScale: number;
  setContentsScale(_: number)
  cornerCurve: string;
  setCornerCurve(_: string)
  cornerRadius: number;
  setCornerRadius(_: number)
  delegate: CALayerDelegate;
  setDelegate(_: CALayerDelegate)
  isDoubleSided: boolean;
  setDoubleSided(_: boolean)
  drawsAsynchronously: boolean;
  setDrawsAsynchronously(_: boolean)
  edgeAntialiasingMask: CAEdgeAntialiasingMask;
  setEdgeAntialiasingMask(_: CAEdgeAntialiasingMask)
  filters: NSArray<any>;
  setFilters(_: NSArray<any>)
  frame: NSRect;
  setFrame(_: NSRect)
  isGeometryFlipped: boolean;
  setGeometryFlipped(_: boolean)
  isHidden: boolean;
  setHidden(_: boolean)
  layoutManager: CALayoutManager;
  setLayoutManager(_: CALayoutManager)
  magnificationFilter: string;
  setMagnificationFilter(_: string)
  mask: CALayer;
  setMask(_: CALayer)
  maskedCorners: CACornerMask;
  setMaskedCorners(_: CACornerMask)
  masksToBounds: boolean;
  setMasksToBounds(_: boolean)
  minificationFilter: string;
  setMinificationFilter(_: string)
  minificationFilterBias: number;
  setMinificationFilterBias(_: number)
  name: string;
  setName(_: string)
  needsDisplayOnBoundsChange: boolean;
  setNeedsDisplayOnBoundsChange(_: boolean)
  opacity: number;
  setOpacity(_: number)
  isOpaque: boolean;
  setOpaque(_: boolean)
  position: NSPoint;
  setPosition(_: NSPoint)
  rasterizationScale: number;
  setRasterizationScale(_: number)
  shadowColor: any;
  setShadowColor(_: any)
  shadowOffset: NSSize;
  setShadowOffset(_: NSSize)
  shadowOpacity: number;
  setShadowOpacity(_: number)
  shadowPath: any;
  setShadowPath(_: any)
  shadowRadius: number;
  setShadowRadius(_: number)
  shouldRasterize: boolean;
  setShouldRasterize(_: boolean)
  style: NSDictionary<any, any>;
  setStyle(_: NSDictionary<any, any>)
  sublayerTransform: CATransform3D;
  setSublayerTransform(_: CATransform3D)
  sublayers: NSArray<CALayer>;
  setSublayers(_: NSArray<CALayer>)
  readonly superlayer: CALayer;
  transform: CATransform3D;
  setTransform(_: CATransform3D)
  readonly visibleRect: NSRect;
  zPosition: number;
  setZPosition(_: number)
  autoreverses: boolean;
  setAutoreverses(_: boolean) // inherited from CAMediaTiming
  beginTime: number;
  setBeginTime(_: number) // inherited from CAMediaTiming
  duration: number;
  setDuration(_: number) // inherited from CAMediaTiming
  fillMode: string;
  setFillMode(_: string) // inherited from CAMediaTiming
  repeatCount: number;
  setRepeatCount(_: number) // inherited from CAMediaTiming
  repeatDuration: number;
  setRepeatDuration(_: number) // inherited from CAMediaTiming
  speed: number;
  setSpeed(_: number) // inherited from CAMediaTiming
  timeOffset: number;
  setTimeOffset(_: number) // inherited from CAMediaTiming
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  actionForKey(forKey: string): CAAction;
  addAnimationForKey(_: CAAnimation, forKey?: string): void;
  addConstraint(_: CAConstraint): void;
  addSublayer(_: CALayer): void;
  affineTransform(): CGAffineTransform;
  animationForKey(forKey: string): CAAnimation;
  animationKeys(): NSArray<string>;
  containsPoint(_: NSPoint): boolean;
  contentsAreFlipped(): boolean;
  convertPointFromLayer(_: NSPoint, from?: CALayer): NSPoint;
  convertPointToLayer(_: NSPoint, to?: CALayer): NSPoint;
  convertRectFromLayer(_: NSRect, from?: CALayer): NSRect;
  convertRectToLayer(_: NSRect, to?: CALayer): NSRect;
  convertTimeFromLayer(_: number, from?: CALayer): number;
  convertTimeToLayer(_: number, to?: CALayer): number;
  display(): void;
  displayIfNeeded(): void;
  drawInContext(in_: any): void;
  encodeWithCoder(with_: NSCoder): void;
  hitTest(_: NSPoint): CALayer;
  static createWithCoder(coder: NSCoder): this;
  static createWithLayer(layer: any): this;
  insertSublayerAbove(_: CALayer, above?: CALayer): void;
  insertSublayerAtIndex(_: CALayer, at: number): void;
  insertSublayerBelow(_: CALayer, below?: CALayer): void;
  layoutIfNeeded(): void;
  layoutSublayers(): void;
  modelLayer(): this;
  needsDisplay(): boolean;
  needsLayout(): boolean;
  preferredFrameSize(): NSSize;
  presentationLayer(): this;
  removeAllAnimations(): void;
  removeAnimationForKey(forKey: string): void;
  removeFromSuperlayer(): void;
  renderInContext(in_: any): void;
  replaceSublayerWith(_: CALayer, with_: CALayer): void;
  resizeSublayersWithOldSize(withOldSize: NSSize): void;
  resizeWithOldSuperlayerSize(withOldSuperlayerSize: NSSize): void;
  scrollPoint(_: NSPoint): void;
  scrollRectToVisible(_: NSRect): void;
  setAffineTransform(_: CGAffineTransform): void;
  setNeedsDisplay(): void;
  setNeedsDisplayInRect(_: NSRect): void;
  setNeedsLayout(): void;
  shouldArchiveValueForKey(forKey: string): boolean;
}

interface CALayerDelegate extends NSObject {
  actionForLayerForKey?(for_: CALayer, forKey: string): CAAction;
  displayLayer?(_: CALayer): void;
  drawLayerInContext?(_: CALayer, in_: any): void;
  layerWillDraw?(_: CALayer): void;
  layoutSublayersOfLayer?(of: CALayer): void;
}

declare var CALayerDelegate: {
  prototype: CALayerDelegate;
};

interface CALayoutManager extends NSObject {
  invalidateLayoutOfLayer?(of: CALayer): void;
  layoutSublayersOfLayer?(of: CALayer): void;
  preferredSizeOfLayer?(of: CALayer): NSSize;
}

declare var CALayoutManager: {
  prototype: CALayoutManager;
};

interface CAMediaTiming {
  autoreverses: boolean;
  setAutoreverses(_: boolean)
  beginTime: number;
  setBeginTime(_: number)
  duration: number;
  setDuration(_: number)
  fillMode: string;
  setFillMode(_: string)
  repeatCount: number;
  setRepeatCount(_: number)
  repeatDuration: number;
  setRepeatDuration(_: number)
  speed: number;
  setSpeed(_: number)
  timeOffset: number;
  setTimeOffset(_: number)
}

declare var CAMediaTiming: {
  prototype: CAMediaTiming;
};

declare class CAMediaTimingFunction extends NSObject implements NSSecureCoding {
  static functionWithControlPoints(_: number, _: number, _: number, _: number): CAMediaTimingFunction;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  getControlPointAtIndexValues(at: number, values: number): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithControlPoints(_: number, _: number, _: number, controlPoints: number): this;
}

interface CAMetalDrawable extends MTLDrawable {
  layer: CAMetalLayer;
  texture: MTLTexture;
}

declare var CAMetalDrawable: {
  prototype: CAMetalDrawable;
};

declare class CAMetalLayer extends CALayer {
  EDRMetadata: CAEDRMetadata;
  setEDRMetadata(_: CAEDRMetadata)
  allowsNextDrawableTimeout: boolean;
  setAllowsNextDrawableTimeout(_: boolean)
  colorspace: any;
  setColorspace(_: any)
  device: MTLDevice;
  setDevice(_: MTLDevice)
  displaySyncEnabled: boolean;
  setDisplaySyncEnabled(_: boolean)
  drawableSize: NSSize;
  setDrawableSize(_: NSSize)
  framebufferOnly: boolean;
  setFramebufferOnly(_: boolean)
  maximumDrawableCount: number;
  setMaximumDrawableCount(_: number)
  pixelFormat: MTLPixelFormat;
  setPixelFormat(_: MTLPixelFormat)
  readonly preferredDevice: MTLDevice;
  presentsWithTransaction: boolean;
  setPresentsWithTransaction(_: boolean)
  wantsExtendedDynamicRangeContent: boolean;
  setWantsExtendedDynamicRangeContent(_: boolean)
  nextDrawable(): CAMetalDrawable;
}

declare class CAPropertyAnimation extends CAAnimation {
  static animationWithKeyPath(keyPath?: string): CAPropertyAnimation;
  isAdditive: boolean;
  setAdditive(_: boolean)
  isCumulative: boolean;
  setCumulative(_: boolean)
  keyPath: string;
  setKeyPath(_: string)
  valueFunction: CAValueFunction;
  setValueFunction(_: CAValueFunction)
}

declare class CARemoteLayerClient extends NSObject {
  readonly clientId: number;
  layer: CALayer;
  setLayer(_: CALayer)
  static createWithServerPort(serverPort: number): this;
  invalidate(): void;
}

declare class CARemoteLayerServer extends NSObject {
  static sharedServer(): CARemoteLayerServer;
  readonly serverPort: number;
}

declare class CARenderer extends NSObject {
  bounds: NSRect;
  setBounds(_: NSRect)
  layer: CALayer;
  setLayer(_: CALayer)
  addUpdateRect(_: NSRect): void;
  beginFrameAtTimeTimeStamp(atTime: number, timeStamp?: CVTimeStamp): void;
  endFrame(): void;
  nextFrameTime(): number;
  render(): void;
  setDestination(_: MTLTexture): void;
  updateBounds(): NSRect;
}

declare class CAReplicatorLayer extends CALayer {
  instanceAlphaOffset: number;
  setInstanceAlphaOffset(_: number)
  instanceBlueOffset: number;
  setInstanceBlueOffset(_: number)
  instanceColor: any;
  setInstanceColor(_: any)
  instanceCount: number;
  setInstanceCount(_: number)
  instanceDelay: number;
  setInstanceDelay(_: number)
  instanceGreenOffset: number;
  setInstanceGreenOffset(_: number)
  instanceRedOffset: number;
  setInstanceRedOffset(_: number)
  instanceTransform: CATransform3D;
  setInstanceTransform(_: CATransform3D)
  preservesDepth: boolean;
  setPreservesDepth(_: boolean)
}

declare class CAScrollLayer extends CALayer {
  scrollMode: string;
  setScrollMode(_: string)
  scrollToPoint(to: NSPoint): void;
  scrollToRect(to: NSRect): void;
}

declare class CAShapeLayer extends CALayer {
  fillColor: any;
  setFillColor(_: any)
  fillRule: string;
  setFillRule(_: string)
  lineCap: string;
  setLineCap(_: string)
  lineDashPattern: NSArray<number>;
  setLineDashPattern(_: NSArray<number>)
  lineDashPhase: number;
  setLineDashPhase(_: number)
  lineJoin: string;
  setLineJoin(_: string)
  lineWidth: number;
  setLineWidth(_: number)
  miterLimit: number;
  setMiterLimit(_: number)
  path: any;
  setPath(_: any)
  strokeColor: any;
  setStrokeColor(_: any)
  strokeEnd: number;
  setStrokeEnd(_: number)
  strokeStart: number;
  setStrokeStart(_: number)
}

declare class CASpringAnimation extends CABasicAnimation {
  static animationWithKeyPath(keyPath?: string): CASpringAnimation; // inherited from CAPropertyAnimation
  damping: number;
  setDamping(_: number)
  initialVelocity: number;
  setInitialVelocity(_: number)
  mass: number;
  setMass(_: number)
  readonly settlingDuration: number;
  stiffness: number;
  setStiffness(_: number)
}

declare class CATextLayer extends CALayer {
  alignmentMode: string;
  setAlignmentMode(_: string)
  allowsFontSubpixelQuantization: boolean;
  setAllowsFontSubpixelQuantization(_: boolean)
  font: any;
  setFont(_: any)
  fontSize: number;
  setFontSize(_: number)
  foregroundColor: any;
  setForegroundColor(_: any)
  string: any;
  setString(_: any)
  truncationMode: string;
  setTruncationMode(_: string)
  isWrapped: boolean;
  setWrapped(_: boolean)
}

declare class CATiledLayer extends CALayer {
  static fadeDuration(): number;
  levelsOfDetail: number;
  setLevelsOfDetail(_: number)
  levelsOfDetailBias: number;
  setLevelsOfDetailBias(_: number)
  tileSize: NSSize;
  setTileSize(_: NSSize)
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
  static valueForKey(forKey: string): any;
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
}

declare class CATransition extends CAAnimation {
  endProgress: number;
  setEndProgress(_: number)
  filter: any;
  setFilter(_: any)
  startProgress: number;
  setStartProgress(_: number)
  subtype: string;
  setSubtype(_: string)
  type: string;
  setType(_: string)
}

declare class CAValueFunction extends NSObject implements NSSecureCoding {
  readonly name: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
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

enum CAAutoresizingMask {
    kCALayerNotSizable = 0,
    kCALayerMinXMargin = 1,
    kCALayerWidthSizable = 2,
    kCALayerMaxXMargin = 4,
    kCALayerMinYMargin = 8,
    kCALayerHeightSizable = 16,
    kCALayerMaxYMargin = 32
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

enum CACornerMask {
    kCALayerMinXMinYCorner = 1,
    kCALayerMaxXMinYCorner = 2,
    kCALayerMinXMaxYCorner = 4,
    kCALayerMaxXMaxYCorner = 8
}

enum CAEdgeAntialiasingMask {
    kCALayerLeftEdge = 1,
    kCALayerRightEdge = 2,
    kCALayerBottomEdge = 4,
    kCALayerTopEdge = 8
}

