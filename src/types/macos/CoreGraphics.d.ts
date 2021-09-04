
declare function CGAcquireDisplayFadeReservation(seconds: number, token: number): CGError;

interface CGAffineTransform {
	a: number;
	b: number;
	c: number;
	d: number;
	tx: number;
	ty: number;
}
declare var CGAffineTransform: CGAffineTransform;

declare function CGAffineTransformConcat(t1: CGAffineTransform, t2: CGAffineTransform): CGAffineTransform;

declare function CGAffineTransformEqualToTransform(t1: CGAffineTransform, t2: CGAffineTransform): boolean;

declare var CGAffineTransformIdentity: CGAffineTransform;

declare function CGAffineTransformInvert(t: CGAffineTransform): CGAffineTransform;

declare function CGAffineTransformIsIdentity(t: CGAffineTransform): boolean;

declare function CGAffineTransformMake(a: number, b: number, c: number, d: number, tx: number, ty: number): CGAffineTransform;

declare function CGAffineTransformMakeRotation(angle: number): CGAffineTransform;

declare function CGAffineTransformMakeScale(sx: number, sy: number): CGAffineTransform;

declare function CGAffineTransformMakeTranslation(tx: number, ty: number): CGAffineTransform;

declare function CGAffineTransformRotate(t: CGAffineTransform, angle: number): CGAffineTransform;

declare function CGAffineTransformScale(t: CGAffineTransform, sx: number, sy: number): CGAffineTransform;

declare function CGAffineTransformTranslate(t: CGAffineTransform, tx: number, ty: number): CGAffineTransform;

declare function CGAssociateMouseAndMouseCursorPosition(connected: number): CGError;

declare function CGBeginDisplayConfiguration(config: any): CGError;

declare function CGBitmapContextCreate(data: any, width: number, height: number, bitsPerComponent: number, bytesPerRow: number, space: any, bitmapInfo: number): any;

declare function CGBitmapContextCreateImage(context: any): any;

declare function CGBitmapContextCreateWithData(data: any, width: number, height: number, bitsPerComponent: number, bytesPerRow: number, space: any, bitmapInfo: number, releaseCallback: (p1: any, p2: any) => void, releaseInfo: any): any;

declare function CGBitmapContextGetAlphaInfo(context: any): CGImageAlphaInfo;

declare function CGBitmapContextGetBitmapInfo(context: any): CGBitmapInfo;

declare function CGBitmapContextGetBitsPerComponent(context: any): number;

declare function CGBitmapContextGetBitsPerPixel(context: any): number;

declare function CGBitmapContextGetBytesPerRow(context: any): number;

declare function CGBitmapContextGetColorSpace(context: any): any;

declare function CGBitmapContextGetData(context: any): any;

declare function CGBitmapContextGetHeight(context: any): number;

declare function CGBitmapContextGetWidth(context: any): number;

enum CGBitmapInfo {

	kCGBitmapAlphaInfoMask = 31,

	kCGBitmapFloatInfoMask = 3840,

	kCGBitmapFloatComponents = 256,

	kCGBitmapByteOrderMask = 28672,

	kCGBitmapByteOrderDefault = 0,

	kCGBitmapByteOrder16Little = 4096,

	kCGBitmapByteOrder32Little = 8192,

	kCGBitmapByteOrder16Big = 12288,

	kCGBitmapByteOrder32Big = 16384
}

globalThis.CGBitmapInfo = CGBitmapInfo;

enum CGBlendMode {

	kCGBlendModeNormal = 0,

	kCGBlendModeMultiply = 1,

	kCGBlendModeScreen = 2,

	kCGBlendModeOverlay = 3,

	kCGBlendModeDarken = 4,

	kCGBlendModeLighten = 5,

	kCGBlendModeColorDodge = 6,

	kCGBlendModeColorBurn = 7,

	kCGBlendModeSoftLight = 8,

	kCGBlendModeHardLight = 9,

	kCGBlendModeDifference = 10,

	kCGBlendModeExclusion = 11,

	kCGBlendModeHue = 12,

	kCGBlendModeSaturation = 13,

	kCGBlendModeColor = 14,

	kCGBlendModeLuminosity = 15,

	kCGBlendModeClear = 16,

	kCGBlendModeCopy = 17,

	kCGBlendModeSourceIn = 18,

	kCGBlendModeSourceOut = 19,

	kCGBlendModeSourceAtop = 20,

	kCGBlendModeDestinationOver = 21,

	kCGBlendModeDestinationIn = 22,

	kCGBlendModeDestinationOut = 23,

	kCGBlendModeDestinationAtop = 24,

	kCGBlendModeXOR = 25,

	kCGBlendModePlusDarker = 26,

	kCGBlendModePlusLighter = 27
}

globalThis.CGBlendMode = CGBlendMode;

declare function CGCancelDisplayConfiguration(config: any): CGError;

declare function CGCaptureAllDisplays(): CGError;

declare function CGCaptureAllDisplaysWithOptions(options: CGCaptureOptions): CGError;

enum CGCaptureOptions {

	kCGCaptureNoOptions = 0,

	kCGCaptureNoFill = 1
}

globalThis.CGCaptureOptions = CGCaptureOptions;

declare function CGColorConversionInfoCreate(src: any, dst: any): any;

declare function CGColorConversionInfoCreateWithOptions(src: any, dst: any, options: NSDictionary<any, any>): any;

declare function CGColorConversionInfoGetTypeID(): number;

enum CGColorConversionInfoTransformType {

	kCGColorConversionTransformFromSpace = 0,

	kCGColorConversionTransformToSpace = 1,

	kCGColorConversionTransformApplySpace = 2
}

globalThis.CGColorConversionInfoTransformType = CGColorConversionInfoTransformType;

declare function CGColorCreate(space: any, components: number): any;

declare function CGColorCreateCopy(color: any): any;

declare function CGColorCreateCopyByMatchingToColorSpace(p1: any, intent: CGColorRenderingIntent, color: any, options: NSDictionary<any, any>): any;

declare function CGColorCreateCopyWithAlpha(color: any, alpha: number): any;

declare function CGColorCreateGenericCMYK(cyan: number, magenta: number, yellow: number, black: number, alpha: number): any;

declare function CGColorCreateGenericGray(gray: number, alpha: number): any;

declare function CGColorCreateGenericGrayGamma2_2(gray: number, alpha: number): any;

declare function CGColorCreateGenericRGB(red: number, green: number, blue: number, alpha: number): any;

declare function CGColorCreateSRGB(red: number, green: number, blue: number, alpha: number): any;

declare function CGColorCreateWithPattern(space: any, pattern: any, components: number): any;

declare function CGColorEqualToColor(color1: any, color2: any): boolean;

declare function CGColorGetAlpha(color: any): number;

declare function CGColorGetColorSpace(color: any): any;

declare function CGColorGetComponents(color: any): number;

declare function CGColorGetConstantColor(colorName: string): any;

declare function CGColorGetNumberOfComponents(color: any): number;

declare function CGColorGetPattern(color: any): any;

declare function CGColorGetTypeID(): number;

declare function CGColorRelease(color: any): void;

enum CGColorRenderingIntent {

	kCGRenderingIntentDefault = 0,

	kCGRenderingIntentAbsoluteColorimetric = 1,

	kCGRenderingIntentRelativeColorimetric = 2,

	kCGRenderingIntentPerceptual = 3,

	kCGRenderingIntentSaturation = 4
}

globalThis.CGColorRenderingIntent = CGColorRenderingIntent;

declare function CGColorRetain(color: any): any;

declare function CGColorSpaceCopyICCData(space: any): NSData;

declare function CGColorSpaceCopyName(space: any): string;

declare function CGColorSpaceCopyPropertyList(space: any): any;

declare function CGColorSpaceCreateCalibratedGray(whitePoint: number, blackPoint: number, gamma: number): any;

declare function CGColorSpaceCreateCalibratedRGB(whitePoint: number, blackPoint: number, gamma: number, matrix: number): any;

declare function CGColorSpaceCreateDeviceCMYK(): any;

declare function CGColorSpaceCreateDeviceGray(): any;

declare function CGColorSpaceCreateDeviceRGB(): any;

declare function CGColorSpaceCreateICCBased(nComponents: number, range: number, profile: any, alternate: any): any;

declare function CGColorSpaceCreateIndexed(baseSpace: any, lastIndex: number, colorTable: string | any): any;

declare function CGColorSpaceCreateLab(whitePoint: number, blackPoint: number, range: number): any;

declare function CGColorSpaceCreatePattern(baseSpace: any): any;

declare function CGColorSpaceCreateWithICCData(data: any): any;

declare function CGColorSpaceCreateWithName(name: string): any;

declare function CGColorSpaceCreateWithPlatformColorSpace(ref: any): any;

declare function CGColorSpaceCreateWithPropertyList(plist: any): any;

declare function CGColorSpaceGetBaseColorSpace(space: any): any;

declare function CGColorSpaceGetColorTable(space: any, table: string | any): void;

declare function CGColorSpaceGetColorTableCount(space: any): number;

declare function CGColorSpaceGetModel(space: any): CGColorSpaceModel;

declare function CGColorSpaceGetName(space: any): string;

declare function CGColorSpaceGetNumberOfComponents(space: any): number;

declare function CGColorSpaceGetTypeID(): number;

declare function CGColorSpaceIsWideGamutRGB(p1: any): boolean;

enum CGColorSpaceModel {

	kCGColorSpaceModelUnknown = -1,

	kCGColorSpaceModelMonochrome = 0,

	kCGColorSpaceModelRGB = 1,

	kCGColorSpaceModelCMYK = 2,

	kCGColorSpaceModelLab = 3,

	kCGColorSpaceModelDeviceN = 4,

	kCGColorSpaceModelIndexed = 5,

	kCGColorSpaceModelPattern = 6,

	kCGColorSpaceModelXYZ = 7
}

globalThis.CGColorSpaceModel = CGColorSpaceModel;

declare function CGColorSpaceRelease(space: any): void;

declare function CGColorSpaceRetain(space: any): any;

declare function CGColorSpaceSupportsOutput(space: any): boolean;

declare function CGCompleteDisplayConfiguration(config: any, option: CGConfigureOption): CGError;

declare function CGConfigureDisplayFadeEffect(config: any, fadeOutSeconds: number, fadeInSeconds: number, fadeRed: number, fadeGreen: number, fadeBlue: number): CGError;

declare function CGConfigureDisplayMirrorOfDisplay(config: any, display: number, master: number): CGError;

declare function CGConfigureDisplayOrigin(config: any, display: number, x: number, y: number): CGError;

declare function CGConfigureDisplayStereoOperation(config: any, display: number, stereo: number, forceBlueLine: number): CGError;

declare function CGConfigureDisplayWithDisplayMode(config: any, display: number, mode: any, options: NSDictionary<any, any>): CGError;

enum CGConfigureOption {

	kCGConfigureForAppOnly = 0,

	kCGConfigureForSession = 1,

	kCGConfigurePermanently = 2
}

globalThis.CGConfigureOption = CGConfigureOption;

declare function CGContextAddArc(c: any, x: number, y: number, radius: number, startAngle: number, endAngle: number, clockwise: number): void;

declare function CGContextAddArcToPoint(c: any, x1: number, y1: number, x2: number, y2: number, radius: number): void;

declare function CGContextAddCurveToPoint(c: any, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

declare function CGContextAddEllipseInRect(c: any, rect: CGRect): void;

declare function CGContextAddLineToPoint(c: any, x: number, y: number): void;

declare function CGContextAddLines(c: any, points: CGPoint, count: number): void;

declare function CGContextAddPath(c: any, path: any): void;

declare function CGContextAddQuadCurveToPoint(c: any, cpx: number, cpy: number, x: number, y: number): void;

declare function CGContextAddRect(c: any, rect: CGRect): void;

declare function CGContextAddRects(c: any, rects: CGRect, count: number): void;

declare function CGContextBeginPage(c: any, mediaBox: CGRect): void;

declare function CGContextBeginPath(c: any): void;

declare function CGContextBeginTransparencyLayer(c: any, auxiliaryInfo: NSDictionary<any, any>): void;

declare function CGContextBeginTransparencyLayerWithRect(c: any, rect: CGRect, auxInfo: NSDictionary<any, any>): void;

declare function CGContextClearRect(c: any, rect: CGRect): void;

declare function CGContextClip(c: any): void;

declare function CGContextClipToMask(c: any, rect: CGRect, mask: any): void;

declare function CGContextClipToRect(c: any, rect: CGRect): void;

declare function CGContextClipToRects(c: any, rects: CGRect, count: number): void;

declare function CGContextClosePath(c: any): void;

declare function CGContextConcatCTM(c: any, transform: CGAffineTransform): void;

declare function CGContextConvertPointToDeviceSpace(c: any, point: CGPoint): CGPoint;

declare function CGContextConvertPointToUserSpace(c: any, point: CGPoint): CGPoint;

declare function CGContextConvertRectToDeviceSpace(c: any, rect: CGRect): CGRect;

declare function CGContextConvertRectToUserSpace(c: any, rect: CGRect): CGRect;

declare function CGContextConvertSizeToDeviceSpace(c: any, size: CGSize): CGSize;

declare function CGContextConvertSizeToUserSpace(c: any, size: CGSize): CGSize;

declare function CGContextCopyPath(c: any): any;

declare function CGContextDrawImage(c: any, rect: CGRect, image: any): void;

declare function CGContextDrawLayerAtPoint(context: any, point: CGPoint, layer: any): void;

declare function CGContextDrawLayerInRect(context: any, rect: CGRect, layer: any): void;

declare function CGContextDrawLinearGradient(c: any, gradient: any, startPoint: CGPoint, endPoint: CGPoint, options: CGGradientDrawingOptions): void;

declare function CGContextDrawPDFPage(c: any, page: any): void;

declare function CGContextDrawPath(c: any, mode: CGPathDrawingMode): void;

declare function CGContextDrawRadialGradient(c: any, gradient: any, startCenter: CGPoint, startRadius: number, endCenter: CGPoint, endRadius: number, options: CGGradientDrawingOptions): void;

declare function CGContextDrawShading(c: any, shading: any): void;

declare function CGContextDrawTiledImage(c: any, rect: CGRect, image: any): void;

declare function CGContextEOClip(c: any): void;

declare function CGContextEOFillPath(c: any): void;

declare function CGContextEndPage(c: any): void;

declare function CGContextEndTransparencyLayer(c: any): void;

declare function CGContextFillEllipseInRect(c: any, rect: CGRect): void;

declare function CGContextFillPath(c: any): void;

declare function CGContextFillRect(c: any, rect: CGRect): void;

declare function CGContextFillRects(c: any, rects: CGRect, count: number): void;

declare function CGContextFlush(c: any): void;

declare function CGContextGetCTM(c: any): CGAffineTransform;

declare function CGContextGetClipBoundingBox(c: any): CGRect;

declare function CGContextGetInterpolationQuality(c: any): CGInterpolationQuality;

declare function CGContextGetPathBoundingBox(c: any): CGRect;

declare function CGContextGetPathCurrentPoint(c: any): CGPoint;

declare function CGContextGetTextMatrix(c: any): CGAffineTransform;

declare function CGContextGetTextPosition(c: any): CGPoint;

declare function CGContextGetTypeID(): number;

declare function CGContextGetUserSpaceToDeviceSpaceTransform(c: any): CGAffineTransform;

declare function CGContextIsPathEmpty(c: any): boolean;

declare function CGContextMoveToPoint(c: any, x: number, y: number): void;

declare function CGContextPathContainsPoint(c: any, point: CGPoint, mode: CGPathDrawingMode): boolean;

declare function CGContextRelease(c: any): void;

declare function CGContextReplacePathWithStrokedPath(c: any): void;

declare function CGContextResetClip(c: any): void;

declare function CGContextRestoreGState(c: any): void;

declare function CGContextRetain(c: any): any;

declare function CGContextRotateCTM(c: any, angle: number): void;

declare function CGContextSaveGState(c: any): void;

declare function CGContextScaleCTM(c: any, sx: number, sy: number): void;

declare function CGContextSetAllowsAntialiasing(c: any, allowsAntialiasing: boolean): void;

declare function CGContextSetAllowsFontSmoothing(c: any, allowsFontSmoothing: boolean): void;

declare function CGContextSetAllowsFontSubpixelPositioning(c: any, allowsFontSubpixelPositioning: boolean): void;

declare function CGContextSetAllowsFontSubpixelQuantization(c: any, allowsFontSubpixelQuantization: boolean): void;

declare function CGContextSetAlpha(c: any, alpha: number): void;

declare function CGContextSetBlendMode(c: any, mode: CGBlendMode): void;

declare function CGContextSetCMYKFillColor(c: any, cyan: number, magenta: number, yellow: number, black: number, alpha: number): void;

declare function CGContextSetCMYKStrokeColor(c: any, cyan: number, magenta: number, yellow: number, black: number, alpha: number): void;

declare function CGContextSetCharacterSpacing(c: any, spacing: number): void;

declare function CGContextSetFillColor(c: any, components: number): void;

declare function CGContextSetFillColorSpace(c: any, space: any): void;

declare function CGContextSetFillColorWithColor(c: any, color: any): void;

declare function CGContextSetFillPattern(c: any, pattern: any, components: number): void;

declare function CGContextSetFlatness(c: any, flatness: number): void;

declare function CGContextSetFont(c: any, font: any): void;

declare function CGContextSetFontSize(c: any, size: number): void;

declare function CGContextSetGrayFillColor(c: any, gray: number, alpha: number): void;

declare function CGContextSetGrayStrokeColor(c: any, gray: number, alpha: number): void;

declare function CGContextSetInterpolationQuality(c: any, quality: CGInterpolationQuality): void;

declare function CGContextSetLineCap(c: any, cap: CGLineCap): void;

declare function CGContextSetLineDash(c: any, phase: number, lengths: number, count: number): void;

declare function CGContextSetLineJoin(c: any, join: CGLineJoin): void;

declare function CGContextSetLineWidth(c: any, width: number): void;

declare function CGContextSetMiterLimit(c: any, limit: number): void;

declare function CGContextSetPatternPhase(c: any, phase: CGSize): void;

declare function CGContextSetRGBFillColor(c: any, red: number, green: number, blue: number, alpha: number): void;

declare function CGContextSetRGBStrokeColor(c: any, red: number, green: number, blue: number, alpha: number): void;

declare function CGContextSetRenderingIntent(c: any, intent: CGColorRenderingIntent): void;

declare function CGContextSetShadow(c: any, offset: CGSize, blur: number): void;

declare function CGContextSetShadowWithColor(c: any, offset: CGSize, blur: number, color: any): void;

declare function CGContextSetShouldAntialias(c: any, shouldAntialias: boolean): void;

declare function CGContextSetShouldSmoothFonts(c: any, shouldSmoothFonts: boolean): void;

declare function CGContextSetShouldSubpixelPositionFonts(c: any, shouldSubpixelPositionFonts: boolean): void;

declare function CGContextSetShouldSubpixelQuantizeFonts(c: any, shouldSubpixelQuantizeFonts: boolean): void;

declare function CGContextSetStrokeColor(c: any, components: number): void;

declare function CGContextSetStrokeColorSpace(c: any, space: any): void;

declare function CGContextSetStrokeColorWithColor(c: any, color: any): void;

declare function CGContextSetStrokePattern(c: any, pattern: any, components: number): void;

declare function CGContextSetTextDrawingMode(c: any, mode: CGTextDrawingMode): void;

declare function CGContextSetTextMatrix(c: any, t: CGAffineTransform): void;

declare function CGContextSetTextPosition(c: any, x: number, y: number): void;

declare function CGContextShowGlyphsAtPositions(c: any, glyphs: number, Lpositions: CGPoint, count: number): void;

declare function CGContextStrokeEllipseInRect(c: any, rect: CGRect): void;

declare function CGContextStrokeLineSegments(c: any, points: CGPoint, count: number): void;

declare function CGContextStrokePath(c: any): void;

declare function CGContextStrokeRect(c: any, rect: CGRect): void;

declare function CGContextStrokeRectWithWidth(c: any, rect: CGRect, width: number): void;

declare function CGContextSynchronize(c: any): void;

declare function CGContextTranslateCTM(c: any, tx: number, ty: number): void;

interface CGDataConsumerCallbacks {
	putBytes: (p1: any, p2: any, p3: number) => number;
	releaseConsumer: (p1: any) => void;
}
declare var CGDataConsumerCallbacks: CGDataConsumerCallbacks;

declare function CGDataConsumerCreate(info: any, cbks: CGDataConsumerCallbacks): any;

declare function CGDataConsumerCreateWithCFData(data: NSData): any;

declare function CGDataConsumerCreateWithURL(url: NSURL): any;

declare function CGDataConsumerGetTypeID(): number;

declare function CGDataConsumerRelease(consumer: any): void;

declare function CGDataConsumerRetain(consumer: any): any;

declare function CGDataProviderCopyData(provider: any): NSData;

declare function CGDataProviderCreateDirect(info: any, size: number, callbacks: CGDataProviderDirectCallbacks): any;

declare function CGDataProviderCreateSequential(info: any, callbacks: CGDataProviderSequentialCallbacks): any;

declare function CGDataProviderCreateWithCFData(data: NSData): any;

declare function CGDataProviderCreateWithData(info: any, data: any, size: number, releaseData: (p1: any, p2: any, p3: number) => void): any;

declare function CGDataProviderCreateWithFilename(filename: string | any): any;

declare function CGDataProviderCreateWithURL(url: NSURL): any;

interface CGDataProviderDirectCallbacks {
	version: number;
	getBytePointer: (p1: any) => any;
	releaseBytePointer: (p1: any, p2: any) => void;
	getBytesAtPosition: (p1: any, p2: any, p3: number, p4: number) => number;
	releaseInfo: (p1: any) => void;
}
declare var CGDataProviderDirectCallbacks: CGDataProviderDirectCallbacks;

declare function CGDataProviderGetInfo(provider: any): any;

declare function CGDataProviderGetTypeID(): number;

declare function CGDataProviderRelease(provider: any): void;

declare function CGDataProviderRetain(provider: any): any;

interface CGDataProviderSequentialCallbacks {
	version: number;
	getBytes: (p1: any, p2: any, p3: number) => number;
	skipForward: (p1: any, p2: number) => number;
	rewind: (p1: any) => void;
	releaseInfo: (p1: any) => void;
}
declare var CGDataProviderSequentialCallbacks: CGDataProviderSequentialCallbacks;

interface CGDeviceColor {
	red: number;
	green: number;
	blue: number;
}
declare var CGDeviceColor: CGDeviceColor;

declare function CGDirectDisplayCopyCurrentMetalDevice(display: number): MTLDevice;

declare function CGDisplayBounds(display: number): CGRect;

declare function CGDisplayCapture(display: number): CGError;

declare function CGDisplayCaptureWithOptions(display: number, options: CGCaptureOptions): CGError;

enum CGDisplayChangeSummaryFlags {

	kCGDisplayBeginConfigurationFlag = 1,

	kCGDisplayMovedFlag = 2,

	kCGDisplaySetMainFlag = 4,

	kCGDisplaySetModeFlag = 8,

	kCGDisplayAddFlag = 16,

	kCGDisplayRemoveFlag = 32,

	kCGDisplayEnabledFlag = 256,

	kCGDisplayDisabledFlag = 512,

	kCGDisplayMirrorFlag = 1024,

	kCGDisplayUnMirrorFlag = 2048,

	kCGDisplayDesktopShapeChangedFlag = 4096
}

globalThis.CGDisplayChangeSummaryFlags = CGDisplayChangeSummaryFlags;

declare function CGDisplayCopyAllDisplayModes(display: number, options: NSDictionary<any, any>): NSArray<any>;

declare function CGDisplayCopyColorSpace(display: number): any;

declare function CGDisplayCopyDisplayMode(display: number): any;

declare function CGDisplayCreateImage(displayID: number): any;

declare function CGDisplayCreateImageForRect(display: number, rect: CGRect): any;

declare function CGDisplayFade(token: number, duration: number, startBlend: number, endBlend: number, redBlend: number, greenBlend: number, blueBlend: number, synchronous: number): CGError;

declare function CGDisplayGammaTableCapacity(display: number): number;

declare function CGDisplayGetDrawingContext(display: number): any;

declare function CGDisplayHideCursor(display: number): CGError;

declare function CGDisplayIDToOpenGLDisplayMask(display: number): number;

declare function CGDisplayIsActive(display: number): number;

declare function CGDisplayIsAlwaysInMirrorSet(display: number): number;

declare function CGDisplayIsAsleep(display: number): number;

declare function CGDisplayIsBuiltin(display: number): number;

declare function CGDisplayIsInHWMirrorSet(display: number): number;

declare function CGDisplayIsInMirrorSet(display: number): number;

declare function CGDisplayIsMain(display: number): number;

declare function CGDisplayIsOnline(display: number): number;

declare function CGDisplayIsStereo(display: number): number;

declare function CGDisplayMirrorsDisplay(display: number): number;

declare function CGDisplayModeGetHeight(mode: any): number;

declare function CGDisplayModeGetIODisplayModeID(mode: any): number;

declare function CGDisplayModeGetIOFlags(mode: any): number;

declare function CGDisplayModeGetPixelHeight(mode: any): number;

declare function CGDisplayModeGetPixelWidth(mode: any): number;

declare function CGDisplayModeGetRefreshRate(mode: any): number;

declare function CGDisplayModeGetTypeID(): number;

declare function CGDisplayModeGetWidth(mode: any): number;

declare function CGDisplayModeIsUsableForDesktopGUI(mode: any): boolean;

declare function CGDisplayModeRelease(mode: any): void;

declare function CGDisplayModeRetain(mode: any): any;

declare function CGDisplayModelNumber(display: number): number;

declare function CGDisplayMoveCursorToPoint(display: number, point: CGPoint): CGError;

declare function CGDisplayPixelsHigh(display: number): number;

declare function CGDisplayPixelsWide(display: number): number;

declare function CGDisplayPrimaryDisplay(display: number): number;

declare function CGDisplayRegisterReconfigurationCallback(callback: (p1: number, p2: CGDisplayChangeSummaryFlags, p3: any) => void, userInfo: any): CGError;

declare function CGDisplayRelease(display: number): CGError;

declare function CGDisplayRemoveReconfigurationCallback(callback: (p1: number, p2: CGDisplayChangeSummaryFlags, p3: any) => void, userInfo: any): CGError;

declare function CGDisplayRestoreColorSyncSettings(): void;

declare function CGDisplayRotation(display: number): number;

declare function CGDisplayScreenSize(display: number): CGSize;

declare function CGDisplaySerialNumber(display: number): number;

declare function CGDisplaySetDisplayMode(display: number, mode: any, options: NSDictionary<any, any>): CGError;

declare function CGDisplaySetStereoOperation(display: number, stereo: number, forceBlueLine: number, option: CGConfigureOption): CGError;

declare function CGDisplayShowCursor(display: number): CGError;

declare function CGDisplayStreamCreate(display: number, outputWidth: number, outputHeight: number, pixelFormat: number, properties: NSDictionary<any, any>, handler: (p1: CGDisplayStreamFrameStatus, p2: number, p3: any, p4: any) => void): any;

declare function CGDisplayStreamCreateWithDispatchQueue(display: number, outputWidth: number, outputHeight: number, pixelFormat: number, properties: NSDictionary<any, any>, queue: NSObject, handler: (p1: CGDisplayStreamFrameStatus, p2: number, p3: any, p4: any) => void): any;

enum CGDisplayStreamFrameStatus {

	kCGDisplayStreamFrameStatusFrameComplete = 0,

	kCGDisplayStreamFrameStatusFrameIdle = 1,

	kCGDisplayStreamFrameStatusFrameBlank = 2,

	kCGDisplayStreamFrameStatusStopped = 3
}

globalThis.CGDisplayStreamFrameStatus = CGDisplayStreamFrameStatus;

declare function CGDisplayStreamGetRunLoopSource(displayStream: any): any;

declare function CGDisplayStreamGetTypeID(): number;

declare function CGDisplayStreamStart(displayStream: any): CGError;

declare function CGDisplayStreamStop(displayStream: any): CGError;

declare function CGDisplayStreamUpdateCreateMergedUpdate(firstUpdate: any, secondUpdate: any): any;

declare function CGDisplayStreamUpdateGetDropCount(updateRef: any): number;

declare function CGDisplayStreamUpdateGetMovedRectsDelta(updateRef: any, dx: number, dy: number): void;

declare function CGDisplayStreamUpdateGetRects(updateRef: any, rectType: CGDisplayStreamUpdateRectType, rectCount: number): CGRect;

declare function CGDisplayStreamUpdateGetTypeID(): number;

enum CGDisplayStreamUpdateRectType {

	kCGDisplayStreamUpdateRefreshedRects = 0,

	kCGDisplayStreamUpdateMovedRects = 1,

	kCGDisplayStreamUpdateDirtyRects = 2,

	kCGDisplayStreamUpdateReducedDirtyRects = 3
}

globalThis.CGDisplayStreamUpdateRectType = CGDisplayStreamUpdateRectType;

declare function CGDisplayUnitNumber(display: number): number;

declare function CGDisplayUsesOpenGLAcceleration(display: number): number;

declare function CGDisplayVendorNumber(display: number): number;

enum CGError {

	kCGErrorSuccess = 0,

	kCGErrorFailure = 1000,

	kCGErrorIllegalArgument = 1001,

	kCGErrorInvalidConnection = 1002,

	kCGErrorInvalidContext = 1003,

	kCGErrorCannotComplete = 1004,

	kCGErrorNotImplemented = 1006,

	kCGErrorRangeCheck = 1007,

	kCGErrorTypeCheck = 1008,

	kCGErrorInvalidOperation = 1010,

	kCGErrorNoneAvailable = 1011
}

globalThis.CGError = CGError;

declare function CGEventCreate(source: any): any;

declare function CGEventCreateCopy(event: any): any;

declare function CGEventCreateData(allocator: any, event: any): NSData;

declare function CGEventCreateFromData(allocator: any, data: NSData): any;

declare function CGEventCreateKeyboardEvent(source: any, virtualKey: number, keyDown: boolean): any;

declare function CGEventCreateMouseEvent(source: any, mouseType: CGEventType, mouseCursorPosition: CGPoint, mouseButton: CGMouseButton): any;

declare function CGEventCreateScrollWheelEvent2(source: any, units: CGScrollEventUnit, wheelCount: number, wheel1: number, wheel2: number, wheel3: number): any;

declare function CGEventCreateSourceFromEvent(event: any): any;

enum CGEventField {

	kCGMouseEventNumber = 0,

	kCGMouseEventClickState = 1,

	kCGMouseEventPressure = 2,

	kCGMouseEventButtonNumber = 3,

	kCGMouseEventDeltaX = 4,

	kCGMouseEventDeltaY = 5,

	kCGMouseEventInstantMouser = 6,

	kCGMouseEventSubtype = 7,

	kCGKeyboardEventAutorepeat = 8,

	kCGKeyboardEventKeycode = 9,

	kCGKeyboardEventKeyboardType = 10,

	kCGScrollWheelEventDeltaAxis1 = 11,

	kCGScrollWheelEventDeltaAxis2 = 12,

	kCGScrollWheelEventDeltaAxis3 = 13,

	kCGScrollWheelEventFixedPtDeltaAxis1 = 93,

	kCGScrollWheelEventFixedPtDeltaAxis2 = 94,

	kCGScrollWheelEventFixedPtDeltaAxis3 = 95,

	kCGScrollWheelEventPointDeltaAxis1 = 96,

	kCGScrollWheelEventPointDeltaAxis2 = 97,

	kCGScrollWheelEventPointDeltaAxis3 = 98,

	kCGScrollWheelEventScrollPhase = 99,

	kCGScrollWheelEventScrollCount = 100,

	kCGScrollWheelEventMomentumPhase = 123,

	kCGScrollWheelEventInstantMouser = 14,

	kCGTabletEventPointX = 15,

	kCGTabletEventPointY = 16,

	kCGTabletEventPointZ = 17,

	kCGTabletEventPointButtons = 18,

	kCGTabletEventPointPressure = 19,

	kCGTabletEventTiltX = 20,

	kCGTabletEventTiltY = 21,

	kCGTabletEventRotation = 22,

	kCGTabletEventTangentialPressure = 23,

	kCGTabletEventDeviceID = 24,

	kCGTabletEventVendor1 = 25,

	kCGTabletEventVendor2 = 26,

	kCGTabletEventVendor3 = 27,

	kCGTabletProximityEventVendorID = 28,

	kCGTabletProximityEventTabletID = 29,

	kCGTabletProximityEventPointerID = 30,

	kCGTabletProximityEventDeviceID = 31,

	kCGTabletProximityEventSystemTabletID = 32,

	kCGTabletProximityEventVendorPointerType = 33,

	kCGTabletProximityEventVendorPointerSerialNumber = 34,

	kCGTabletProximityEventVendorUniqueID = 35,

	kCGTabletProximityEventCapabilityMask = 36,

	kCGTabletProximityEventPointerType = 37,

	kCGTabletProximityEventEnterProximity = 38,

	kCGEventTargetProcessSerialNumber = 39,

	kCGEventTargetUnixProcessID = 40,

	kCGEventSourceUnixProcessID = 41,

	kCGEventSourceUserData = 42,

	kCGEventSourceUserID = 43,

	kCGEventSourceGroupID = 44,

	kCGEventSourceStateID = 45,

	kCGScrollWheelEventIsContinuous = 88,

	kCGMouseEventWindowUnderMousePointer = 91,

	kCGMouseEventWindowUnderMousePointerThatCanHandleThisEvent = 92,

	kCGEventUnacceleratedPointerMovementX = 170,

	kCGEventUnacceleratedPointerMovementY = 171
}

globalThis.CGEventField = CGEventField;

enum CGEventFilterMask {

	kCGEventFilterMaskPermitLocalMouseEvents = 1,

	kCGEventFilterMaskPermitLocalKeyboardEvents = 2,

	kCGEventFilterMaskPermitSystemDefinedEvents = 4
}

globalThis.CGEventFilterMask = CGEventFilterMask;

enum CGEventFlags {

	kCGEventFlagMaskAlphaShift = 65536,

	kCGEventFlagMaskShift = 131072,

	kCGEventFlagMaskControl = 262144,

	kCGEventFlagMaskAlternate = 524288,

	kCGEventFlagMaskCommand = 1048576,

	kCGEventFlagMaskHelp = 4194304,

	kCGEventFlagMaskSecondaryFn = 8388608,

	kCGEventFlagMaskNumericPad = 2097152,

	kCGEventFlagMaskNonCoalesced = 256
}

globalThis.CGEventFlags = CGEventFlags;

declare function CGEventGetDoubleValueField(event: any, field: CGEventField): number;

declare function CGEventGetFlags(event: any): CGEventFlags;

declare function CGEventGetIntegerValueField(event: any, field: CGEventField): number;

declare function CGEventGetLocation(event: any): CGPoint;

declare function CGEventGetTimestamp(event: any): number;

declare function CGEventGetType(event: any): CGEventType;

declare function CGEventGetTypeID(): number;

declare function CGEventGetUnflippedLocation(event: any): CGPoint;

declare function CGEventKeyboardGetUnicodeString(event: any, maxStringLength: number, actualStringLength: number, unicodeString: number): void;

declare function CGEventKeyboardSetUnicodeString(event: any, stringLength: number, unicodeString: number): void;

enum CGEventMouseSubtype {

	kCGEventMouseSubtypeDefault = 0,

	kCGEventMouseSubtypeTabletPoint = 1,

	kCGEventMouseSubtypeTabletProximity = 2
}

globalThis.CGEventMouseSubtype = CGEventMouseSubtype;

declare function CGEventPost(tap: CGEventTapLocation, event: any): void;

declare function CGEventPostToPSN(processSerialNumber: any, event: any): void;

declare function CGEventPostToPid(pid: number, event: any): void;

declare function CGEventSetDoubleValueField(event: any, field: CGEventField, value: number): void;

declare function CGEventSetFlags(event: any, flags: CGEventFlags): void;

declare function CGEventSetIntegerValueField(event: any, field: CGEventField, value: number): void;

declare function CGEventSetLocation(event: any, location: CGPoint): void;

declare function CGEventSetSource(event: any, source: any): void;

declare function CGEventSetTimestamp(event: any, timestamp: number): void;

declare function CGEventSetType(event: any, type: CGEventType): void;

declare function CGEventSourceButtonState(stateID: CGEventSourceStateID, button: CGMouseButton): boolean;

declare function CGEventSourceCounterForEventType(stateID: CGEventSourceStateID, eventType: CGEventType): number;

declare function CGEventSourceCreate(stateID: CGEventSourceStateID): any;

declare function CGEventSourceFlagsState(stateID: CGEventSourceStateID): CGEventFlags;

declare function CGEventSourceGetKeyboardType(source: any): number;

declare function CGEventSourceGetLocalEventsFilterDuringSuppressionState(source: any, state: CGEventSuppressionState): CGEventFilterMask;

declare function CGEventSourceGetLocalEventsSuppressionInterval(source: any): number;

declare function CGEventSourceGetPixelsPerLine(source: any): number;

declare function CGEventSourceGetSourceStateID(source: any): CGEventSourceStateID;

declare function CGEventSourceGetTypeID(): number;

declare function CGEventSourceGetUserData(source: any): number;

declare function CGEventSourceKeyState(stateID: CGEventSourceStateID, key: number): boolean;

declare function CGEventSourceSecondsSinceLastEventType(stateID: CGEventSourceStateID, eventType: CGEventType): number;

declare function CGEventSourceSetKeyboardType(source: any, keyboardType: number): void;

declare function CGEventSourceSetLocalEventsFilterDuringSuppressionState(source: any, filter: CGEventFilterMask, state: CGEventSuppressionState): void;

declare function CGEventSourceSetLocalEventsSuppressionInterval(source: any, seconds: number): void;

declare function CGEventSourceSetPixelsPerLine(source: any, pixelsPerLine: number): void;

declare function CGEventSourceSetUserData(source: any, userData: number): void;

enum CGEventSourceStateID {

	kCGEventSourceStatePrivate = -1,

	kCGEventSourceStateCombinedSessionState = 0,

	kCGEventSourceStateHIDSystemState = 1
}

globalThis.CGEventSourceStateID = CGEventSourceStateID;

enum CGEventSuppressionState {

	kCGEventSuppressionStateSuppressionInterval = 0,

	kCGEventSuppressionStateRemoteMouseDrag = 1,

	kCGNumberOfEventSuppressionStates = 2
}

globalThis.CGEventSuppressionState = CGEventSuppressionState;

declare function CGEventTapCreate(tap: CGEventTapLocation, place: CGEventTapPlacement, options: CGEventTapOptions, eventsOfInterest: number, callback: (p1: any, p2: CGEventType, p3: any, p4: any) => any, userInfo: any): NSMachPort;

declare function CGEventTapCreateForPSN(processSerialNumber: any, place: CGEventTapPlacement, options: CGEventTapOptions, eventsOfInterest: number, callback: (p1: any, p2: CGEventType, p3: any, p4: any) => any, userInfo: any): NSMachPort;

declare function CGEventTapCreateForPid(pid: number, place: CGEventTapPlacement, options: CGEventTapOptions, eventsOfInterest: number, callback: (p1: any, p2: CGEventType, p3: any, p4: any) => any, userInfo: any): NSMachPort;

declare function CGEventTapEnable(tap: NSMachPort, enable: boolean): void;

declare function CGEventTapIsEnabled(tap: NSMachPort): boolean;

enum CGEventTapLocation {

	kCGHIDEventTap = 0,

	kCGSessionEventTap = 1,

	kCGAnnotatedSessionEventTap = 2
}

globalThis.CGEventTapLocation = CGEventTapLocation;

enum CGEventTapOptions {

	kCGEventTapOptionDefault = 0,

	kCGEventTapOptionListenOnly = 1
}

globalThis.CGEventTapOptions = CGEventTapOptions;

enum CGEventTapPlacement {

	kCGHeadInsertEventTap = 0,

	kCGTailAppendEventTap = 1
}

globalThis.CGEventTapPlacement = CGEventTapPlacement;

declare function CGEventTapPostEvent(proxy: any, event: any): void;

enum CGEventType {

	kCGEventNull = 0,

	kCGEventLeftMouseDown = 1,

	kCGEventLeftMouseUp = 2,

	kCGEventRightMouseDown = 3,

	kCGEventRightMouseUp = 4,

	kCGEventMouseMoved = 5,

	kCGEventLeftMouseDragged = 6,

	kCGEventRightMouseDragged = 7,

	kCGEventKeyDown = 10,

	kCGEventKeyUp = 11,

	kCGEventFlagsChanged = 12,

	kCGEventScrollWheel = 22,

	kCGEventTabletPointer = 23,

	kCGEventTabletProximity = 24,

	kCGEventOtherMouseDown = 25,

	kCGEventOtherMouseUp = 26,

	kCGEventOtherMouseDragged = 27,

	kCGEventTapDisabledByTimeout = 4294967294,

	kCGEventTapDisabledByUserInput = 4294967295
}

globalThis.CGEventType = CGEventType;

declare function CGFontCanCreatePostScriptSubset(font: any, format: CGFontPostScriptFormat): boolean;

declare function CGFontCopyFullName(font: any): string;

declare function CGFontCopyGlyphNameForGlyph(font: any, glyph: number): string;

declare function CGFontCopyPostScriptName(font: any): string;

declare function CGFontCopyTableForTag(font: any, tag: number): NSData;

declare function CGFontCopyTableTags(font: any): NSArray<any>;

declare function CGFontCopyVariationAxes(font: any): NSArray<any>;

declare function CGFontCopyVariations(font: any): NSDictionary<any, any>;

declare function CGFontCreateCopyWithVariations(font: any, variations: NSDictionary<any, any>): any;

declare function CGFontCreatePostScriptEncoding(font: any, encoding: number): NSData;

declare function CGFontCreatePostScriptSubset(font: any, subsetName: string, format: CGFontPostScriptFormat, glyphs: number, count: number, encoding: number): NSData;

declare function CGFontCreateWithDataProvider(provider: any): any;

declare function CGFontCreateWithFontName(name: string): any;

declare function CGFontGetAscent(font: any): number;

declare function CGFontGetCapHeight(font: any): number;

declare function CGFontGetDescent(font: any): number;

declare function CGFontGetFontBBox(font: any): CGRect;

declare function CGFontGetGlyphAdvances(font: any, glyphs: number, count: number, advances: number): boolean;

declare function CGFontGetGlyphBBoxes(font: any, glyphs: number, count: number, bboxes: CGRect): boolean;

declare function CGFontGetGlyphWithGlyphName(font: any, name: string): number;

declare function CGFontGetItalicAngle(font: any): number;

declare function CGFontGetLeading(font: any): number;

declare function CGFontGetNumberOfGlyphs(font: any): number;

declare function CGFontGetStemV(font: any): number;

declare function CGFontGetTypeID(): number;

declare function CGFontGetUnitsPerEm(font: any): number;

declare function CGFontGetXHeight(font: any): number;

enum CGFontPostScriptFormat {

	kCGFontPostScriptFormatType1 = 1,

	kCGFontPostScriptFormatType3 = 3,

	kCGFontPostScriptFormatType42 = 42
}

globalThis.CGFontPostScriptFormat = CGFontPostScriptFormat;

declare function CGFontRelease(font: any): void;

declare function CGFontRetain(font: any): any;

interface CGFunctionCallbacks {
	version: number;
	evaluate: (p1: any, p2: number, p3: number) => void;
	releaseInfo: (p1: any) => void;
}
declare var CGFunctionCallbacks: CGFunctionCallbacks;

declare function CGFunctionCreate(info: any, domainDimension: number, domain: number, rangeDimension: number, range: number, callbacks: CGFunctionCallbacks): any;

declare function CGFunctionGetTypeID(): number;

declare function CGFunctionRelease(function_: any): void;

declare function CGFunctionRetain(function_: any): any;

enum CGGesturePhase {

	kCGGesturePhaseNone = 0,

	kCGGesturePhaseBegan = 1,

	kCGGesturePhaseChanged = 2,

	kCGGesturePhaseEnded = 4,

	kCGGesturePhaseCancelled = 8,

	kCGGesturePhaseMayBegin = 128
}

globalThis.CGGesturePhase = CGGesturePhase;

declare function CGGetActiveDisplayList(maxDisplays: number, activeDisplays: number, displayCount: number): CGError;

declare function CGGetDisplayTransferByFormula(display: number, redMin: number, redMax: number, redGamma: number, greenMin: number, greenMax: number, greenGamma: number, blueMin: number, blueMax: number, blueGamma: number): CGError;

declare function CGGetDisplayTransferByTable(display: number, capacity: number, redTable: number, greenTable: number, blueTable: number, sampleCount: number): CGError;

declare function CGGetDisplaysWithOpenGLDisplayMask(mask: number, maxDisplays: number, displays: number, matchingDisplayCount: number): CGError;

declare function CGGetDisplaysWithPoint(point: CGPoint, maxDisplays: number, displays: number, matchingDisplayCount: number): CGError;

declare function CGGetDisplaysWithRect(rect: CGRect, maxDisplays: number, displays: number, matchingDisplayCount: number): CGError;

declare function CGGetEventTapList(maxNumberOfTaps: number, tapList: __CGEventTapInformation, eventTapCount: number): CGError;

declare function CGGetLastMouseDelta(deltaX: number, deltaY: number): void;

declare function CGGetOnlineDisplayList(maxDisplays: number, onlineDisplays: number, displayCount: number): CGError;

enum CGGlyphDeprecatedEnum {

	Min = 0,

	Max = 1
}

globalThis.CGGlyphDeprecatedEnum = CGGlyphDeprecatedEnum;

declare function CGGradientCreateWithColorComponents(space: any, components: number, locations: number, count: number): any;

declare function CGGradientCreateWithColors(space: any, colors: NSArray<any> | any[], locations: number): any;

enum CGGradientDrawingOptions {

	kCGGradientDrawsBeforeStartLocation = 1,

	kCGGradientDrawsAfterEndLocation = 2
}

globalThis.CGGradientDrawingOptions = CGGradientDrawingOptions;

declare function CGGradientGetTypeID(): number;

declare function CGGradientRelease(gradient: any): void;

declare function CGGradientRetain(gradient: any): any;

enum CGImageAlphaInfo {

	kCGImageAlphaNone = 0,

	kCGImageAlphaPremultipliedLast = 1,

	kCGImageAlphaPremultipliedFirst = 2,

	kCGImageAlphaLast = 3,

	kCGImageAlphaFirst = 4,

	kCGImageAlphaNoneSkipLast = 5,

	kCGImageAlphaNoneSkipFirst = 6,

	kCGImageAlphaOnly = 7
}

globalThis.CGImageAlphaInfo = CGImageAlphaInfo;

enum CGImageByteOrderInfo {

	kCGImageByteOrderMask = 28672,

	kCGImageByteOrderDefault = 0,

	kCGImageByteOrder16Little = 4096,

	kCGImageByteOrder32Little = 8192,

	kCGImageByteOrder16Big = 12288,

	kCGImageByteOrder32Big = 16384
}

globalThis.CGImageByteOrderInfo = CGImageByteOrderInfo;

declare function CGImageCreate(width: number, height: number, bitsPerComponent: number, bitsPerPixel: number, bytesPerRow: number, space: any, bitmapInfo: CGBitmapInfo, provider: any, decode: number, shouldInterpolate: boolean, intent: CGColorRenderingIntent): any;

declare function CGImageCreateCopy(image: any): any;

declare function CGImageCreateCopyWithColorSpace(image: any, space: any): any;

declare function CGImageCreateWithImageInRect(image: any, rect: CGRect): any;

declare function CGImageCreateWithJPEGDataProvider(source: any, decode: number, shouldInterpolate: boolean, intent: CGColorRenderingIntent): any;

declare function CGImageCreateWithMask(image: any, mask: any): any;

declare function CGImageCreateWithMaskingColors(image: any, components: number): any;

declare function CGImageCreateWithPNGDataProvider(source: any, decode: number, shouldInterpolate: boolean, intent: CGColorRenderingIntent): any;

declare function CGImageGetAlphaInfo(image: any): CGImageAlphaInfo;

declare function CGImageGetBitmapInfo(image: any): CGBitmapInfo;

declare function CGImageGetBitsPerComponent(image: any): number;

declare function CGImageGetBitsPerPixel(image: any): number;

declare function CGImageGetByteOrderInfo(image: any): CGImageByteOrderInfo;

declare function CGImageGetBytesPerRow(image: any): number;

declare function CGImageGetColorSpace(image: any): any;

declare function CGImageGetDataProvider(image: any): any;

declare function CGImageGetDecode(image: any): number;

declare function CGImageGetHeight(image: any): number;

declare function CGImageGetPixelFormatInfo(image: any): CGImagePixelFormatInfo;

declare function CGImageGetRenderingIntent(image: any): CGColorRenderingIntent;

declare function CGImageGetShouldInterpolate(image: any): boolean;

declare function CGImageGetTypeID(): number;

declare function CGImageGetUTType(image: any): string;

declare function CGImageGetWidth(image: any): number;

declare function CGImageIsMask(image: any): boolean;

declare function CGImageMaskCreate(width: number, height: number, bitsPerComponent: number, bitsPerPixel: number, bytesPerRow: number, provider: any, decode: number, shouldInterpolate: boolean): any;

enum CGImagePixelFormatInfo {

	kCGImagePixelFormatMask = 983040,

	kCGImagePixelFormatPacked = 0,

	kCGImagePixelFormatRGB555 = 65536,

	kCGImagePixelFormatRGB565 = 131072,

	kCGImagePixelFormatRGB101010 = 196608,

	kCGImagePixelFormatRGBCIF10 = 262144
}

globalThis.CGImagePixelFormatInfo = CGImagePixelFormatInfo;

declare function CGImageRelease(image: any): void;

declare function CGImageRetain(image: any): any;

enum CGInterpolationQuality {

	kCGInterpolationDefault = 0,

	kCGInterpolationNone = 1,

	kCGInterpolationLow = 2,

	kCGInterpolationMedium = 4,

	kCGInterpolationHigh = 3
}

globalThis.CGInterpolationQuality = CGInterpolationQuality;

declare function CGLayerCreateWithContext(context: any, size: CGSize, auxiliaryInfo: NSDictionary<any, any>): any;

declare function CGLayerGetContext(layer: any): any;

declare function CGLayerGetSize(layer: any): CGSize;

declare function CGLayerGetTypeID(): number;

declare function CGLayerRelease(layer: any): void;

declare function CGLayerRetain(layer: any): any;

enum CGLineCap {

	kCGLineCapButt = 0,

	kCGLineCapRound = 1,

	kCGLineCapSquare = 2
}

globalThis.CGLineCap = CGLineCap;

enum CGLineJoin {

	kCGLineJoinMiter = 0,

	kCGLineJoinRound = 1,

	kCGLineJoinBevel = 2
}

globalThis.CGLineJoin = CGLineJoin;

declare function CGMainDisplayID(): number;

enum CGMomentumScrollPhase {

	kCGMomentumScrollPhaseNone = 0,

	kCGMomentumScrollPhaseBegin = 1,

	kCGMomentumScrollPhaseContinue = 2,

	kCGMomentumScrollPhaseEnd = 3
}

globalThis.CGMomentumScrollPhase = CGMomentumScrollPhase;

enum CGMouseButton {

	kCGMouseButtonLeft = 0,

	kCGMouseButtonRight = 1,

	kCGMouseButtonCenter = 2
}

globalThis.CGMouseButton = CGMouseButton;

declare function CGOpenGLDisplayMaskToDisplayID(mask: number): number;

enum CGPDFAccessPermissions {

	kCGPDFAllowsLowQualityPrinting = 1,

	kCGPDFAllowsHighQualityPrinting = 2,

	kCGPDFAllowsDocumentChanges = 4,

	kCGPDFAllowsDocumentAssembly = 8,

	kCGPDFAllowsContentCopying = 16,

	kCGPDFAllowsContentAccessibility = 32,

	kCGPDFAllowsCommenting = 64,

	kCGPDFAllowsFormFieldEntry = 128
}

globalThis.CGPDFAccessPermissions = CGPDFAccessPermissions;

declare function CGPDFArrayApplyBlock(array: any, block: (p1: number, p2: any, p3: any) => boolean, info: any): void;

declare function CGPDFArrayGetArray(array: any, index: number, value: any): boolean;

declare function CGPDFArrayGetBoolean(array: any, index: number, value: string | any): boolean;

declare function CGPDFArrayGetCount(array: any): number;

declare function CGPDFArrayGetDictionary(array: any, index: number, value: any): boolean;

declare function CGPDFArrayGetInteger(array: any, index: number, value: number): boolean;

declare function CGPDFArrayGetName(array: any, index: number, value: string): boolean;

declare function CGPDFArrayGetNull(array: any, index: number): boolean;

declare function CGPDFArrayGetNumber(array: any, index: number, value: number): boolean;

declare function CGPDFArrayGetObject(array: any, index: number, value: any): boolean;

declare function CGPDFArrayGetStream(array: any, index: number, value: any): boolean;

declare function CGPDFArrayGetString(array: any, index: number, value: any): boolean;

enum CGPDFBox {

	kCGPDFMediaBox = 0,

	kCGPDFCropBox = 1,

	kCGPDFBleedBox = 2,

	kCGPDFTrimBox = 3,

	kCGPDFArtBox = 4
}

globalThis.CGPDFBox = CGPDFBox;

declare function CGPDFContentStreamCreateWithPage(page: any): any;

declare function CGPDFContentStreamCreateWithStream(stream: any, streamResources: any, parent: any): any;

declare function CGPDFContentStreamGetResource(cs: any, category: string | any, name: string | any): any;

declare function CGPDFContentStreamGetStreams(cs: any): NSArray<any>;

declare function CGPDFContentStreamRelease(cs: any): void;

declare function CGPDFContentStreamRetain(cs: any): any;

declare function CGPDFContextAddDestinationAtPoint(context: any, name: string, point: CGPoint): void;

declare function CGPDFContextAddDocumentMetadata(context: any, metadata: NSData): void;

declare function CGPDFContextBeginPage(context: any, pageInfo: NSDictionary<any, any>): void;

declare function CGPDFContextBeginTag(context: any, tagType: CGPDFTagType, tagProperties: NSDictionary<any, any>): void;

declare function CGPDFContextClose(context: any): void;

declare function CGPDFContextCreate(consumer: any, mediaBox: CGRect, auxiliaryInfo: NSDictionary<any, any>): any;

declare function CGPDFContextCreateWithURL(url: NSURL, mediaBox: CGRect, auxiliaryInfo: NSDictionary<any, any>): any;

declare function CGPDFContextEndPage(context: any): void;

declare function CGPDFContextEndTag(context: any): void;

declare function CGPDFContextSetDestinationForRect(context: any, name: string, rect: CGRect): void;

declare function CGPDFContextSetOutline(context: any, outline: NSDictionary<any, any>): void;

declare function CGPDFContextSetURLForRect(context: any, url: NSURL, rect: CGRect): void;

enum CGPDFDataFormat {

	Raw = 0,

	JPEGEncoded = 1,

	JPEG2000 = 2
}

globalThis.CGPDFDataFormat = CGPDFDataFormat;

declare function CGPDFDictionaryApplyBlock(dict: any, block: (p1: string, p2: any, p3: any) => boolean, info: any): void;

declare function CGPDFDictionaryApplyFunction(dict: any, function_: (p1: string, p2: any, p3: any) => void, info: any): void;

declare function CGPDFDictionaryGetArray(dict: any, key: string | any, value: any): boolean;

declare function CGPDFDictionaryGetBoolean(dict: any, key: string | any, value: string | any): boolean;

declare function CGPDFDictionaryGetCount(dict: any): number;

declare function CGPDFDictionaryGetDictionary(dict: any, key: string | any, value: any): boolean;

declare function CGPDFDictionaryGetInteger(dict: any, key: string | any, value: number): boolean;

declare function CGPDFDictionaryGetName(dict: any, key: string | any, value: string): boolean;

declare function CGPDFDictionaryGetNumber(dict: any, key: string | any, value: number): boolean;

declare function CGPDFDictionaryGetObject(dict: any, key: string | any, value: any): boolean;

declare function CGPDFDictionaryGetStream(dict: any, key: string | any, value: any): boolean;

declare function CGPDFDictionaryGetString(dict: any, key: string | any, value: any): boolean;

declare function CGPDFDocumentAllowsCopying(document: any): boolean;

declare function CGPDFDocumentAllowsPrinting(document: any): boolean;

declare function CGPDFDocumentCreateWithProvider(provider: any): any;

declare function CGPDFDocumentCreateWithURL(url: NSURL): any;

declare function CGPDFDocumentGetAccessPermissions(document: any): CGPDFAccessPermissions;

declare function CGPDFDocumentGetCatalog(document: any): any;

declare function CGPDFDocumentGetID(document: any): any;

declare function CGPDFDocumentGetInfo(document: any): any;

declare function CGPDFDocumentGetNumberOfPages(document: any): number;

declare function CGPDFDocumentGetOutline(document: any): NSDictionary<any, any>;

declare function CGPDFDocumentGetPage(document: any, pageNumber: number): any;

declare function CGPDFDocumentGetTypeID(): number;

declare function CGPDFDocumentGetVersion(document: any, majorVersion: number, minorVersion: number): void;

declare function CGPDFDocumentIsEncrypted(document: any): boolean;

declare function CGPDFDocumentIsUnlocked(document: any): boolean;

declare function CGPDFDocumentRelease(document: any): void;

declare function CGPDFDocumentRetain(document: any): any;

declare function CGPDFDocumentUnlockWithPassword(document: any, password: string | any): boolean;

declare function CGPDFObjectGetType(object_: any): CGPDFObjectType;

declare function CGPDFObjectGetValue(object_: any, type: CGPDFObjectType, value: any): boolean;

enum CGPDFObjectType {

	kCGPDFObjectTypeNull = 1,

	kCGPDFObjectTypeBoolean = 2,

	kCGPDFObjectTypeInteger = 3,

	kCGPDFObjectTypeReal = 4,

	kCGPDFObjectTypeName = 5,

	kCGPDFObjectTypeString = 6,

	kCGPDFObjectTypeArray = 7,

	kCGPDFObjectTypeDictionary = 8,

	kCGPDFObjectTypeStream = 9
}

globalThis.CGPDFObjectType = CGPDFObjectType;

declare function CGPDFOperatorTableCreate(): any;

declare function CGPDFOperatorTableRelease(table: any): void;

declare function CGPDFOperatorTableRetain(table: any): any;

declare function CGPDFOperatorTableSetCallback(table: any, name: string | any, callback: (p1: any, p2: any) => void): void;

declare function CGPDFPageGetBoxRect(page: any, box: CGPDFBox): CGRect;

declare function CGPDFPageGetDictionary(page: any): any;

declare function CGPDFPageGetDocument(page: any): any;

declare function CGPDFPageGetDrawingTransform(page: any, box: CGPDFBox, rect: CGRect, rotate: number, preserveAspectRatio: boolean): CGAffineTransform;

declare function CGPDFPageGetPageNumber(page: any): number;

declare function CGPDFPageGetRotationAngle(page: any): number;

declare function CGPDFPageGetTypeID(): number;

declare function CGPDFPageRelease(page: any): void;

declare function CGPDFPageRetain(page: any): any;

declare function CGPDFScannerCreate(cs: any, table: any, info: any): any;

declare function CGPDFScannerGetContentStream(scanner: any): any;

declare function CGPDFScannerPopArray(scanner: any, value: any): boolean;

declare function CGPDFScannerPopBoolean(scanner: any, value: string | any): boolean;

declare function CGPDFScannerPopDictionary(scanner: any, value: any): boolean;

declare function CGPDFScannerPopInteger(scanner: any, value: number): boolean;

declare function CGPDFScannerPopName(scanner: any, value: string): boolean;

declare function CGPDFScannerPopNumber(scanner: any, value: number): boolean;

declare function CGPDFScannerPopObject(scanner: any, value: any): boolean;

declare function CGPDFScannerPopStream(scanner: any, value: any): boolean;

declare function CGPDFScannerPopString(scanner: any, value: any): boolean;

declare function CGPDFScannerRelease(scanner: any): void;

declare function CGPDFScannerRetain(scanner: any): any;

declare function CGPDFScannerScan(scanner: any): boolean;

declare function CGPDFStreamCopyData(stream: any, format: CGPDFDataFormat): NSData;

declare function CGPDFStreamGetDictionary(stream: any): any;

declare function CGPDFStringCopyDate(string: any): Date;

declare function CGPDFStringCopyTextString(string: any): string;

declare function CGPDFStringGetBytePtr(string: any): string;

declare function CGPDFStringGetLength(string: any): number;

enum CGPDFTagType {

	Document = 100,

	Part = 101,

	Art = 102,

	Section = 103,

	Div = 104,

	BlockQuote = 105,

	Caption = 106,

	TOC = 107,

	TOCI = 108,

	Index = 109,

	NonStructure = 110,

	Private = 111,

	Paragraph = 200,

	Header = 201,

	Header1 = 202,

	Header2 = 203,

	Header3 = 204,

	Header4 = 205,

	Header5 = 206,

	Header6 = 207,

	List = 300,

	ListItem = 301,

	Label = 302,

	ListBody = 303,

	Table = 400,

	TableRow = 401,

	TableHeaderCell = 402,

	TableDataCell = 403,

	TableHeader = 404,

	TableBody = 405,

	TableFooter = 406,

	Span = 500,

	Quote = 501,

	Note = 502,

	Reference = 503,

	Bibliography = 504,

	Code = 505,

	Link = 506,

	Annotation = 507,

	Ruby = 600,

	RubyBaseText = 601,

	RubyAnnotationText = 602,

	RubyPunctuation = 603,

	Warichu = 604,

	WarichuText = 605,

	WarichuPunctiation = 606,

	Figure = 700,

	Formula = 701,

	Form = 702
}

globalThis.CGPDFTagType = CGPDFTagType;

declare function CGPDFTagTypeGetName(tagType: CGPDFTagType): string;

declare function CGPSConverterAbort(converter: any): boolean;

interface CGPSConverterCallbacks {
	version: number;
	beginDocument: (p1: any) => void;
	endDocument: (p1: any, p2: boolean) => void;
	beginPage: (p1: any, p2: number, p3: NSDictionary<any, any>) => void;
	endPage: (p1: any, p2: number, p3: NSDictionary<any, any>) => void;
	noteProgress: (p1: any) => void;
	noteMessage: (p1: any, p2: string) => void;
	releaseInfo: (p1: any) => void;
}
declare var CGPSConverterCallbacks: CGPSConverterCallbacks;

declare function CGPSConverterConvert(converter: any, provider: any, consumer: any, options: NSDictionary<any, any>): boolean;

declare function CGPSConverterCreate(info: any, callbacks: CGPSConverterCallbacks, options: NSDictionary<any, any>): any;

declare function CGPSConverterGetTypeID(): number;

declare function CGPSConverterIsConverting(converter: any): boolean;

declare function CGPathAddArc(path: any, m: CGAffineTransform, x: number, y: number, radius: number, startAngle: number, endAngle: number, clockwise: boolean): void;

declare function CGPathAddArcToPoint(path: any, m: CGAffineTransform, x1: number, y1: number, x2: number, y2: number, radius: number): void;

declare function CGPathAddCurveToPoint(path: any, m: CGAffineTransform, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

declare function CGPathAddEllipseInRect(path: any, m: CGAffineTransform, rect: CGRect): void;

declare function CGPathAddLineToPoint(path: any, m: CGAffineTransform, x: number, y: number): void;

declare function CGPathAddLines(path: any, m: CGAffineTransform, points: CGPoint, count: number): void;

declare function CGPathAddPath(path1: any, m: CGAffineTransform, path2: any): void;

declare function CGPathAddQuadCurveToPoint(path: any, m: CGAffineTransform, cpx: number, cpy: number, x: number, y: number): void;

declare function CGPathAddRect(path: any, m: CGAffineTransform, rect: CGRect): void;

declare function CGPathAddRects(path: any, m: CGAffineTransform, rects: CGRect, count: number): void;

declare function CGPathAddRelativeArc(path: any, matrix: CGAffineTransform, x: number, y: number, radius: number, startAngle: number, delta: number): void;

declare function CGPathAddRoundedRect(path: any, transform: CGAffineTransform, rect: CGRect, cornerWidth: number, cornerHeight: number): void;

declare function CGPathApply(path: any, info: any, function_: (p1: any, p2: CGPathElement) => void): void;

declare function CGPathApplyWithBlock(path: any, block: (p1: CGPathElement) => void): void;

declare function CGPathCloseSubpath(path: any): void;

declare function CGPathContainsPoint(path: any, m: CGAffineTransform, point: CGPoint, eoFill: boolean): boolean;

declare function CGPathCreateCopy(path: any): any;

declare function CGPathCreateCopyByDashingPath(path: any, transform: CGAffineTransform, phase: number, lengths: number, count: number): any;

declare function CGPathCreateCopyByStrokingPath(path: any, transform: CGAffineTransform, lineWidth: number, lineCap: CGLineCap, lineJoin: CGLineJoin, miterLimit: number): any;

declare function CGPathCreateCopyByTransformingPath(path: any, transform: CGAffineTransform): any;

declare function CGPathCreateMutable(): any;

declare function CGPathCreateMutableCopy(path: any): any;

declare function CGPathCreateMutableCopyByTransformingPath(path: any, transform: CGAffineTransform): any;

declare function CGPathCreateWithEllipseInRect(rect: CGRect, transform: CGAffineTransform): any;

declare function CGPathCreateWithRect(rect: CGRect, transform: CGAffineTransform): any;

declare function CGPathCreateWithRoundedRect(rect: CGRect, cornerWidth: number, cornerHeight: number, transform: CGAffineTransform): any;

enum CGPathDrawingMode {

	kCGPathFill = 0,

	kCGPathEOFill = 1,

	kCGPathStroke = 2,

	kCGPathFillStroke = 3,

	kCGPathEOFillStroke = 4
}

globalThis.CGPathDrawingMode = CGPathDrawingMode;

interface CGPathElement {
	type: CGPathElementType;
	points: CGPoint;
}
declare var CGPathElement: CGPathElement;

enum CGPathElementType {

	kCGPathElementMoveToPoint = 0,

	kCGPathElementAddLineToPoint = 1,

	kCGPathElementAddQuadCurveToPoint = 2,

	kCGPathElementAddCurveToPoint = 3,

	kCGPathElementCloseSubpath = 4
}

globalThis.CGPathElementType = CGPathElementType;

declare function CGPathEqualToPath(path1: any, path2: any): boolean;

declare function CGPathGetBoundingBox(path: any): CGRect;

declare function CGPathGetCurrentPoint(path: any): CGPoint;

declare function CGPathGetPathBoundingBox(path: any): CGRect;

declare function CGPathGetTypeID(): number;

declare function CGPathIsEmpty(path: any): boolean;

declare function CGPathIsRect(path: any, rect: CGRect): boolean;

declare function CGPathMoveToPoint(path: any, m: CGAffineTransform, x: number, y: number): void;

declare function CGPathRelease(path: any): void;

declare function CGPathRetain(path: any): any;

interface CGPatternCallbacks {
	version: number;
	drawPattern: (p1: any, p2: any) => void;
	releaseInfo: (p1: any) => void;
}
declare var CGPatternCallbacks: CGPatternCallbacks;

declare function CGPatternCreate(info: any, bounds: CGRect, matrix: CGAffineTransform, xStep: number, yStep: number, tiling: CGPatternTiling, isColored: boolean, callbacks: CGPatternCallbacks): any;

declare function CGPatternGetTypeID(): number;

declare function CGPatternRelease(pattern: any): void;

declare function CGPatternRetain(pattern: any): any;

enum CGPatternTiling {

	kCGPatternTilingNoDistortion = 0,

	kCGPatternTilingConstantSpacingMinimalDistortion = 1,

	kCGPatternTilingConstantSpacing = 2
}

globalThis.CGPatternTiling = CGPatternTiling;

interface CGPoint {
	x: number;
	y: number;
}
declare var CGPoint: CGPoint;

declare function CGPointApplyAffineTransform(point: CGPoint, t: CGAffineTransform): CGPoint;

declare function CGPointCreateDictionaryRepresentation(point: CGPoint): NSDictionary<any, any>;

declare function CGPointEqualToPoint(point1: CGPoint, point2: CGPoint): boolean;

declare function CGPointMake(x: number, y: number): CGPoint;

declare function CGPointMakeWithDictionaryRepresentation(dict: NSDictionary<any, any>, point: CGPoint): boolean;

declare var CGPointZero: CGPoint;

interface CGRect {
	origin: CGPoint;
	size: CGSize;
}
declare var CGRect: CGRect;

declare function CGRectApplyAffineTransform(rect: CGRect, t: CGAffineTransform): CGRect;

declare function CGRectContainsPoint(rect: CGRect, point: CGPoint): boolean;

declare function CGRectContainsRect(rect1: CGRect, rect2: CGRect): boolean;

declare function CGRectCreateDictionaryRepresentation(p1: CGRect): NSDictionary<any, any>;

declare function CGRectDivide(rect: CGRect, slice: CGRect, remainder: CGRect, amount: number, edge: CGRectEdge): void;

enum CGRectEdge {

	MinXEdge = 0,

	MinYEdge = 1,

	MaxXEdge = 2,

	MaxYEdge = 3
}

globalThis.CGRectEdge = CGRectEdge;

declare function CGRectEqualToRect(rect1: CGRect, rect2: CGRect): boolean;

declare function CGRectGetHeight(rect: CGRect): number;

declare function CGRectGetMaxX(rect: CGRect): number;

declare function CGRectGetMaxY(rect: CGRect): number;

declare function CGRectGetMidX(rect: CGRect): number;

declare function CGRectGetMidY(rect: CGRect): number;

declare function CGRectGetMinX(rect: CGRect): number;

declare function CGRectGetMinY(rect: CGRect): number;

declare function CGRectGetWidth(rect: CGRect): number;

declare var CGRectInfinite: CGRect;

declare function CGRectInset(rect: CGRect, dx: number, dy: number): CGRect;

declare function CGRectIntegral(rect: CGRect): CGRect;

declare function CGRectIntersection(r1: CGRect, r2: CGRect): CGRect;

declare function CGRectIntersectsRect(rect1: CGRect, rect2: CGRect): boolean;

declare function CGRectIsEmpty(rect: CGRect): boolean;

declare function CGRectIsInfinite(rect: CGRect): boolean;

declare function CGRectIsNull(rect: CGRect): boolean;

declare function CGRectMake(x: number, y: number, width: number, height: number): CGRect;

declare function CGRectMakeWithDictionaryRepresentation(dict: NSDictionary<any, any>, rect: CGRect): boolean;

declare var CGRectNull: CGRect;

declare function CGRectOffset(rect: CGRect, dx: number, dy: number): CGRect;

declare function CGRectStandardize(rect: CGRect): CGRect;

declare function CGRectUnion(r1: CGRect, r2: CGRect): CGRect;

declare var CGRectZero: CGRect;

declare function CGReleaseAllDisplays(): CGError;

declare function CGReleaseDisplayFadeReservation(token: number): CGError;

declare function CGRestorePermanentDisplayConfiguration(): void;

interface CGScreenUpdateMoveDelta {
	dX: number;
	dY: number;
}
declare var CGScreenUpdateMoveDelta: CGScreenUpdateMoveDelta;

enum CGScreenUpdateOperation {

	kCGScreenUpdateOperationRefresh = 0,

	kCGScreenUpdateOperationMove = 1,

	kCGScreenUpdateOperationReducedDirtyRectangleCount = 2147483648
}

globalThis.CGScreenUpdateOperation = CGScreenUpdateOperation;

enum CGScrollEventUnit {

	kCGScrollEventUnitPixel = 0,

	kCGScrollEventUnitLine = 1
}

globalThis.CGScrollEventUnit = CGScrollEventUnit;

enum CGScrollPhase {

	kCGScrollPhaseBegan = 1,

	kCGScrollPhaseChanged = 2,

	kCGScrollPhaseEnded = 4,

	kCGScrollPhaseCancelled = 8,

	kCGScrollPhaseMayBegin = 128
}

globalThis.CGScrollPhase = CGScrollPhase;

declare function CGSessionCopyCurrentDictionary(): NSDictionary<any, any>;

declare function CGSetDisplayTransferByByteTable(display: number, tableSize: number, redTable: string | any, greenTable: string | any, blueTable: string | any): CGError;

declare function CGSetDisplayTransferByFormula(display: number, redMin: number, redMax: number, redGamma: number, greenMin: number, greenMax: number, greenGamma: number, blueMin: number, blueMax: number, blueGamma: number): CGError;

declare function CGSetDisplayTransferByTable(display: number, tableSize: number, redTable: number, greenTable: number, blueTable: number): CGError;

declare function CGShadingCreateAxial(space: any, start: CGPoint, end: CGPoint, function_: any, extendStart: boolean, extendEnd: boolean): any;

declare function CGShadingCreateRadial(space: any, start: CGPoint, startRadius: number, end: CGPoint, endRadius: number, function_: any, extendStart: boolean, extendEnd: boolean): any;

declare function CGShadingGetTypeID(): number;

declare function CGShadingRelease(shading: any): void;

declare function CGShadingRetain(shading: any): any;

declare function CGShieldingWindowID(display: number): number;

declare function CGShieldingWindowLevel(): number;

interface CGSize {
	width: number;
	height: number;
}
declare var CGSize: CGSize;

declare function CGSizeApplyAffineTransform(size: CGSize, t: CGAffineTransform): CGSize;

declare function CGSizeCreateDictionaryRepresentation(size: CGSize): NSDictionary<any, any>;

declare function CGSizeEqualToSize(size1: CGSize, size2: CGSize): boolean;

declare function CGSizeMake(width: number, height: number): CGSize;

declare function CGSizeMakeWithDictionaryRepresentation(dict: NSDictionary<any, any>, size: CGSize): boolean;

declare var CGSizeZero: CGSize;

enum CGTextDrawingMode {

	kCGTextFill = 0,

	kCGTextStroke = 1,

	kCGTextFillStroke = 2,

	kCGTextInvisible = 3,

	kCGTextFillClip = 4,

	kCGTextStrokeClip = 5,

	kCGTextFillStrokeClip = 6,

	kCGTextClip = 7
}

globalThis.CGTextDrawingMode = CGTextDrawingMode;

interface CGVector {
	dx: number;
	dy: number;
}
declare var CGVector: CGVector;

declare function CGVectorMake(dx: number, dy: number): CGVector;

declare function CGWarpMouseCursorPosition(newCursorPosition: CGPoint): CGError;

enum CGWindowBackingType {

	kCGBackingStoreRetained = 0,

	kCGBackingStoreNonretained = 1,

	kCGBackingStoreBuffered = 2
}

globalThis.CGWindowBackingType = CGWindowBackingType;

enum CGWindowImageOption {

	kCGWindowImageDefault = 0,

	kCGWindowImageBoundsIgnoreFraming = 1,

	kCGWindowImageShouldBeOpaque = 2,

	kCGWindowImageOnlyShadows = 4,

	kCGWindowImageBestResolution = 8,

	kCGWindowImageNominalResolution = 16
}

globalThis.CGWindowImageOption = CGWindowImageOption;

declare function CGWindowLevelForKey(key: CGWindowLevelKey): number;

enum CGWindowLevelKey {

	kCGBaseWindowLevelKey = 0,

	kCGMinimumWindowLevelKey = 1,

	kCGDesktopWindowLevelKey = 2,

	kCGBackstopMenuLevelKey = 3,

	kCGNormalWindowLevelKey = 4,

	kCGFloatingWindowLevelKey = 5,

	kCGTornOffMenuWindowLevelKey = 6,

	kCGDockWindowLevelKey = 7,

	kCGMainMenuWindowLevelKey = 8,

	kCGStatusWindowLevelKey = 9,

	kCGModalPanelWindowLevelKey = 10,

	kCGPopUpMenuWindowLevelKey = 11,

	kCGDraggingWindowLevelKey = 12,

	kCGScreenSaverWindowLevelKey = 13,

	kCGMaximumWindowLevelKey = 14,

	kCGOverlayWindowLevelKey = 15,

	kCGHelpWindowLevelKey = 16,

	kCGUtilityWindowLevelKey = 17,

	kCGDesktopIconWindowLevelKey = 18,

	kCGCursorWindowLevelKey = 19,

	kCGAssistiveTechHighWindowLevelKey = 20,

	kCGNumberOfWindowLevelKeys = 21
}

globalThis.CGWindowLevelKey = CGWindowLevelKey;

declare function CGWindowListCopyWindowInfo(option: CGWindowListOption, relativeToWindow: number): NSArray<any>;

declare function CGWindowListCreateDescriptionFromArray(windowArray: NSArray<any> | any[]): NSArray<any>;

declare function CGWindowListCreateImage(screenBounds: CGRect, listOption: CGWindowListOption, windowID: number, imageOption: CGWindowImageOption): any;

declare function CGWindowListCreateImageFromArray(screenBounds: CGRect, windowArray: NSArray<any> | any[], imageOption: CGWindowImageOption): any;

enum CGWindowListOption {

	kCGWindowListOptionAll = 0,

	kCGWindowListOptionOnScreenOnly = 1,

	kCGWindowListOptionOnScreenAboveWindow = 2,

	kCGWindowListOptionOnScreenBelowWindow = 4,

	kCGWindowListOptionIncludingWindow = 8,

	kCGWindowListExcludeDesktopElements = 16
}

globalThis.CGWindowListOption = CGWindowListOption;

declare function CGWindowServerCreateServerPort(): NSMachPort;

enum CGWindowSharingType {

	kCGWindowSharingNone = 0,

	kCGWindowSharingReadOnly = 1,

	kCGWindowSharingReadWrite = 2
}

globalThis.CGWindowSharingType = CGWindowSharingType;

interface __CGEventTapInformation {
	eventTapID: number;
	tapPoint: CGEventTapLocation;
	options: CGEventTapOptions;
	eventsOfInterest: number;
	tappingProcess: number;
	processBeingTapped: number;
	enabled: boolean;
	minUsecLatency: number;
	avgUsecLatency: number;
	maxUsecLatency: number;
}
declare var __CGEventTapInformation: __CGEventTapInformation;

declare var kCGColorBlack: string;

declare var kCGColorClear: string;

declare var kCGColorConversionBlackPointCompensation: string;

declare var kCGColorConversionTRCSize: string;

declare var kCGColorSpaceACESCGLinear: string;

declare var kCGColorSpaceAdobeRGB1998: string;

declare var kCGColorSpaceDCIP3: string;

declare var kCGColorSpaceDisplayP3: string;

declare var kCGColorSpaceDisplayP3_HLG: string;

declare var kCGColorSpaceDisplayP3_PQ_EOTF: string;

declare var kCGColorSpaceExtendedGray: string;

declare var kCGColorSpaceExtendedLinearDisplayP3: string;

declare var kCGColorSpaceExtendedLinearGray: string;

declare var kCGColorSpaceExtendedLinearITUR_2020: string;

declare var kCGColorSpaceExtendedLinearSRGB: string;

declare var kCGColorSpaceExtendedSRGB: string;

declare var kCGColorSpaceGenericCMYK: string;

declare var kCGColorSpaceGenericGray: string;

declare var kCGColorSpaceGenericGrayGamma2_2: string;

declare var kCGColorSpaceGenericLab: string;

declare var kCGColorSpaceGenericRGB: string;

declare var kCGColorSpaceGenericRGBLinear: string;

declare var kCGColorSpaceGenericXYZ: string;

declare var kCGColorSpaceITUR_2020: string;

declare var kCGColorSpaceITUR_2020_HLG: string;

declare var kCGColorSpaceITUR_2020_PQ_EOTF: string;

declare var kCGColorSpaceITUR_709: string;

declare var kCGColorSpaceLinearGray: string;

declare var kCGColorSpaceLinearSRGB: string;

declare var kCGColorSpaceROMMRGB: string;

declare var kCGColorSpaceSRGB: string;

declare var kCGColorWhite: string;

declare var kCGDisplayShowDuplicateLowResolutionModes: string;

declare var kCGDisplayStreamColorSpace: string;

declare var kCGDisplayStreamDestinationRect: string;

declare var kCGDisplayStreamMinimumFrameTime: string;

declare var kCGDisplayStreamPreserveAspectRatio: string;

declare var kCGDisplayStreamQueueDepth: string;

declare var kCGDisplayStreamShowCursor: string;

declare var kCGDisplayStreamSourceRect: string;

declare var kCGDisplayStreamYCbCrMatrix: string;

declare var kCGDisplayStreamYCbCrMatrix_ITU_R_601_4: string;

declare var kCGDisplayStreamYCbCrMatrix_ITU_R_709_2: string;

declare var kCGDisplayStreamYCbCrMatrix_SMPTE_240M_1995: string;

declare var kCGFontIndexInvalid: number;

declare var kCGFontIndexMax: number;

declare var kCGFontVariationAxisDefaultValue: string;

declare var kCGFontVariationAxisMaxValue: string;

declare var kCGFontVariationAxisMinValue: string;

declare var kCGFontVariationAxisName: string;

declare var kCGGlyphMax: number;

declare var kCGPDFContextAccessPermissions: string;

declare var kCGPDFContextAllowsCopying: string;

declare var kCGPDFContextAllowsPrinting: string;

declare var kCGPDFContextArtBox: string;

declare var kCGPDFContextAuthor: string;

declare var kCGPDFContextBleedBox: string;

declare var kCGPDFContextCreator: string;

declare var kCGPDFContextCropBox: string;

declare var kCGPDFContextEncryptionKeyLength: string;

declare var kCGPDFContextKeywords: string;

declare var kCGPDFContextMediaBox: string;

declare var kCGPDFContextOutputIntent: string;

declare var kCGPDFContextOutputIntents: string;

declare var kCGPDFContextOwnerPassword: string;

declare var kCGPDFContextSubject: string;

declare var kCGPDFContextTitle: string;

declare var kCGPDFContextTrimBox: string;

declare var kCGPDFContextUserPassword: string;

declare var kCGPDFOutlineChildren: string;

declare var kCGPDFOutlineDestination: string;

declare var kCGPDFOutlineDestinationRect: string;

declare var kCGPDFOutlineTitle: string;

declare var kCGPDFTagPropertyActualText: any;

declare var kCGPDFTagPropertyAlternativeText: any;

declare var kCGPDFTagPropertyLanguageText: any;

declare var kCGPDFTagPropertyTitleText: any;

declare var kCGPDFXDestinationOutputProfile: string;

declare var kCGPDFXInfo: string;

declare var kCGPDFXOutputCondition: string;

declare var kCGPDFXOutputConditionIdentifier: string;

declare var kCGPDFXOutputIntentSubtype: string;

declare var kCGPDFXRegistryName: string;

declare var kCGWindowAlpha: string;

declare var kCGWindowBackingLocationVideoMemory: string;

declare var kCGWindowBounds: string;

declare var kCGWindowIsOnscreen: string;

declare var kCGWindowLayer: string;

declare var kCGWindowMemoryUsage: string;

declare var kCGWindowName: string;

declare var kCGWindowNumber: string;

declare var kCGWindowOwnerName: string;

declare var kCGWindowOwnerPID: string;

declare var kCGWindowSharingState: string;

declare var kCGWindowStoreType: string;
