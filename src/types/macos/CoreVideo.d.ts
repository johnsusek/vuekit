globalThis.CVAttachmentMode = globalThis.CVAttachmentMode || {};

globalThis.CVAttachmentMode = {
    kCVAttachmentMode_ShouldNotPropagate: 0,
    kCVAttachmentMode_ShouldPropagate: 1,
    '0': 'kCVAttachmentMode_ShouldNotPropagate',
    '1': 'kCVAttachmentMode_ShouldPropagate'
}

globalThis.CVPixelBufferLockFlags = globalThis.CVPixelBufferLockFlags || {};

globalThis.CVPixelBufferLockFlags = {
    kCVPixelBufferLock_ReadOnly: 1,
    '1': 'kCVPixelBufferLock_ReadOnly'
}

globalThis.CVPixelBufferPoolFlushFlags = globalThis.CVPixelBufferPoolFlushFlags || {};

globalThis.CVPixelBufferPoolFlushFlags = {
    kCVPixelBufferPoolFlushExcessBuffers: 1,
    '1': 'kCVPixelBufferPoolFlushExcessBuffers'
}

globalThis.CVSMPTETimeFlags = globalThis.CVSMPTETimeFlags || {};

globalThis.CVSMPTETimeFlags = {
    kCVSMPTETimeValid: 1,
    kCVSMPTETimeRunning: 2,
    '1': 'kCVSMPTETimeValid',
    '2': 'kCVSMPTETimeRunning'
}

globalThis.CVSMPTETimeType = globalThis.CVSMPTETimeType || {};

globalThis.CVSMPTETimeType = {
    kCVSMPTETimeType24: 0,
    kCVSMPTETimeType25: 1,
    kCVSMPTETimeType30Drop: 2,
    kCVSMPTETimeType30: 3,
    kCVSMPTETimeType2997: 4,
    kCVSMPTETimeType2997Drop: 5,
    kCVSMPTETimeType60: 6,
    kCVSMPTETimeType5994: 7,
    '0': 'kCVSMPTETimeType24',
    '1': 'kCVSMPTETimeType25',
    '2': 'kCVSMPTETimeType30Drop',
    '3': 'kCVSMPTETimeType30',
    '4': 'kCVSMPTETimeType2997',
    '5': 'kCVSMPTETimeType2997Drop',
    '6': 'kCVSMPTETimeType60',
    '7': 'kCVSMPTETimeType5994'
}

globalThis.CVTimeFlags = globalThis.CVTimeFlags || {};

globalThis.CVTimeFlags = {
    kCVTimeIsIndefinite: 1,
    '1': 'kCVTimeIsIndefinite'
}

globalThis.CVTimeStampFlags = globalThis.CVTimeStampFlags || {};

globalThis.CVTimeStampFlags = {
    kCVTimeStampVideoTimeValid: 1,
    kCVTimeStampHostTimeValid: 2,
    kCVTimeStampSMPTETimeValid: 4,
    kCVTimeStampVideoRefreshPeriodValid: 8,
    kCVTimeStampRateScalarValid: 16,
    kCVTimeStampTopField: 65536,
    kCVTimeStampBottomField: 131072,
    kCVTimeStampVideoHostTimeValid: 3,
    kCVTimeStampIsInterlaced: 196608,
    '1': 'kCVTimeStampVideoTimeValid',
    '2': 'kCVTimeStampHostTimeValid',
    '4': 'kCVTimeStampSMPTETimeValid',
    '8': 'kCVTimeStampVideoRefreshPeriodValid',
    '16': 'kCVTimeStampRateScalarValid',
    '65536': 'kCVTimeStampTopField',
    '131072': 'kCVTimeStampBottomField',
    '3': 'kCVTimeStampVideoHostTimeValid',
    '196608': 'kCVTimeStampIsInterlaced'
}

declare function CVBufferGetAttachment(buffer: any, key: NSObject, attachmentMode: CVAttachmentMode): any;
declare function CVBufferGetAttachments(buffer: any, attachmentMode: CVAttachmentMode): NSObject;
declare function CVBufferPropagateAttachments(sourceBuffer: any, destinationBuffer: any): void;
declare function CVBufferRelease(buffer: any): void;
declare function CVBufferRemoveAllAttachments(buffer: any): void;
declare function CVBufferRemoveAttachment(buffer: any, key: NSObject): void;
declare function CVBufferRetain(buffer: any): any;
declare function CVBufferSetAttachment(buffer: any, key: NSObject, value: any, attachmentMode: CVAttachmentMode): void;
declare function CVBufferSetAttachments(buffer: any, theAttachments: NSObject, attachmentMode: CVAttachmentMode): void;
declare function CVColorPrimariesGetIntegerCodePointForString(colorPrimariesString: NSObject): number;
declare function CVColorPrimariesGetStringForIntegerCodePoint(colorPrimariesCodePoint: number): NSObject;
declare function CVDisplayLinkCreateWithActiveCGDisplays(displayLinkOut: any): number;
declare function CVDisplayLinkCreateWithCGDisplay(displayID: number, displayLinkOut: any): number;
declare function CVDisplayLinkCreateWithCGDisplays(displayArray: number, count: number, displayLinkOut: any): number;
declare function CVDisplayLinkCreateWithOpenGLDisplayMask(mask: number, displayLinkOut: any): number;
declare function CVDisplayLinkGetActualOutputVideoRefreshPeriod(displayLink: any): number;
declare function CVDisplayLinkGetCurrentCGDisplay(displayLink: any): number;
declare function CVDisplayLinkGetCurrentTime(displayLink: any, outTime: CVTimeStamp): number;
declare function CVDisplayLinkGetNominalOutputVideoRefreshPeriod(displayLink: any): CVTime;
declare function CVDisplayLinkGetOutputVideoLatency(displayLink: any): CVTime;
declare function CVDisplayLinkGetTypeID(): number;
declare function CVDisplayLinkIsRunning(displayLink: any): boolean;
declare function CVDisplayLinkRelease(displayLink: any): void;
declare function CVDisplayLinkRetain(displayLink: any): any;
declare function CVDisplayLinkSetCurrentCGDisplay(displayLink: any, displayID: number): number;
declare function CVDisplayLinkSetCurrentCGDisplayFromOpenGLContext(displayLink: any, cglContext: _CGLContextObject, cglPixelFormat: any): number;
declare function CVDisplayLinkSetOutputCallback(displayLink: any, callback: (p1: any, p2: CVTimeStamp, p3: CVTimeStamp, p4: number, p5: number, p6: any) => number, userInfo: any): number;
declare function CVDisplayLinkSetOutputHandler(displayLink: any, handler: (p1: any, p2: CVTimeStamp, p3: CVTimeStamp, p4: number, p5: number) => number): number;
declare function CVDisplayLinkStart(displayLink: any): number;
declare function CVDisplayLinkStop(displayLink: any): number;
declare function CVDisplayLinkTranslateTime(displayLink: any, inTime: CVTimeStamp, outTime: CVTimeStamp): number;
interface CVFillExtendedPixelsCallBackData {
  version: number;
  fillCallBack: (p1: any, p2: any) => boolean;
  refCon: any;
}

declare var CVFillExtendedPixelsCallBackData: CVFillExtendedPixelsCallBackData;

declare function CVGetCurrentHostTime(): number;
declare function CVGetHostClockFrequency(): number;
declare function CVGetHostClockMinimumTimeDelta(): number;
declare function CVImageBufferCreateColorSpaceFromAttachments(attachments: NSObject): any;
declare function CVImageBufferGetCleanRect(imageBuffer: any): NSRect;
declare function CVImageBufferGetColorSpace(imageBuffer: any): any;
declare function CVImageBufferGetDisplaySize(imageBuffer: any): NSSize;
declare function CVImageBufferGetEncodedSize(imageBuffer: any): NSSize;
declare function CVImageBufferIsFlipped(imageBuffer: any): boolean;
declare function CVMetalTextureCacheCreate(allocator: any, cacheAttributes: NSObject, metalDevice: MTLDevice, textureAttributes: NSObject, cacheOut: any): number;
declare function CVMetalTextureCacheCreateTextureFromImage(allocator: any, textureCache: any, sourceImage: any, textureAttributes: NSObject, pixelFormat: MTLPixelFormat, width: number, height: number, planeIndex: number, textureOut: any): number;
declare function CVMetalTextureCacheFlush(textureCache: any, options: number): void;
declare function CVMetalTextureCacheGetTypeID(): number;
declare function CVMetalTextureGetCleanTexCoords(image: any, lowerLeft: number, lowerRight: number, upperRight: number, upperLeft: number): void;
declare function CVMetalTextureGetTexture(image: any): MTLTexture;
declare function CVMetalTextureGetTypeID(): number;
declare function CVMetalTextureIsFlipped(image: any): boolean;
declare function CVPixelBufferCreate(allocator: any, width: number, height: number, pixelFormatType: number, pixelBufferAttributes: NSObject, pixelBufferOut: any): number;
declare function CVPixelBufferCreateResolvedAttributesDictionary(allocator: any, attributes: NSObject, resolvedDictionaryOut: NSObject): number;
declare function CVPixelBufferCreateWithBytes(allocator: any, width: number, height: number, pixelFormatType: number, baseAddress: any, bytesPerRow: number, releaseCallback: (p1: any, p2: any) => void, releaseRefCon: any, pixelBufferAttributes: NSObject, pixelBufferOut: any): number;
declare function CVPixelBufferCreateWithIOSurface(allocator: any, surface: any, pixelBufferAttributes: NSObject, pixelBufferOut: any): number;
declare function CVPixelBufferCreateWithPlanarBytes(allocator: any, width: number, height: number, pixelFormatType: number, dataPtr: any, dataSize: number, numberOfPlanes: number, planeBaseAddress: any, planeWidth: number, planeHeight: number, planeBytesPerRow: number, releaseCallback: (p1: any, p2: any, p3: number, p4: number, p5: any) => void, releaseRefCon: any, pixelBufferAttributes: NSObject, pixelBufferOut: any): number;
declare function CVPixelBufferFillExtendedPixels(pixelBuffer: any): number;
declare function CVPixelBufferGetBaseAddress(pixelBuffer: any): any;
declare function CVPixelBufferGetBaseAddressOfPlane(pixelBuffer: any, planeIndex: number): any;
declare function CVPixelBufferGetBytesPerRow(pixelBuffer: any): number;
declare function CVPixelBufferGetBytesPerRowOfPlane(pixelBuffer: any, planeIndex: number): number;
declare function CVPixelBufferGetDataSize(pixelBuffer: any): number;
declare function CVPixelBufferGetExtendedPixels(pixelBuffer: any, extraColumnsOnLeft: number, extraColumnsOnRight: number, extraRowsOnTop: number, extraRowsOnBottom: number): void;
declare function CVPixelBufferGetHeight(pixelBuffer: any): number;
declare function CVPixelBufferGetHeightOfPlane(pixelBuffer: any, planeIndex: number): number;
declare function CVPixelBufferGetIOSurface(pixelBuffer: any): any;
declare function CVPixelBufferGetPixelFormatType(pixelBuffer: any): number;
declare function CVPixelBufferGetPlaneCount(pixelBuffer: any): number;
declare function CVPixelBufferGetTypeID(): number;
declare function CVPixelBufferGetWidth(pixelBuffer: any): number;
declare function CVPixelBufferGetWidthOfPlane(pixelBuffer: any, planeIndex: number): number;
declare function CVPixelBufferIsPlanar(pixelBuffer: any): boolean;
declare function CVPixelBufferLockBaseAddress(pixelBuffer: any, lockFlags: CVPixelBufferLockFlags): number;
declare function CVPixelBufferPoolCreate(allocator: any, poolAttributes: NSObject, pixelBufferAttributes: NSObject, poolOut: any): number;
declare function CVPixelBufferPoolCreatePixelBuffer(allocator: any, pixelBufferPool: any, pixelBufferOut: any): number;
declare function CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(allocator: any, pixelBufferPool: any, auxAttributes: NSObject, pixelBufferOut: any): number;
declare function CVPixelBufferPoolFlush(pool: any, options: CVPixelBufferPoolFlushFlags): void;
declare function CVPixelBufferPoolGetAttributes(pool: any): NSObject;
declare function CVPixelBufferPoolGetPixelBufferAttributes(pool: any): NSObject;
declare function CVPixelBufferPoolGetTypeID(): number;
declare function CVPixelBufferPoolRelease(pixelBufferPool: any): void;
declare function CVPixelBufferPoolRetain(pixelBufferPool: any): any;
declare function CVPixelBufferRelease(texture: any): void;
declare function CVPixelBufferRetain(texture: any): any;
declare function CVPixelBufferUnlockBaseAddress(pixelBuffer: any, unlockFlags: CVPixelBufferLockFlags): number;
declare function CVPixelFormatDescriptionArrayCreateWithAllPixelFormatTypes(allocator: any): NSObject;
declare function CVPixelFormatDescriptionCreateWithPixelFormatType(allocator: any, pixelFormat: number): NSObject;
declare function CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType(description: NSObject, pixelFormat: number): void;
interface CVPlanarComponentInfo {
  offset: number;
  rowBytes: number;
}

declare var CVPlanarComponentInfo: CVPlanarComponentInfo;

interface CVPlanarPixelBufferInfo {
  componentInfo: CVPlanarComponentInfo;
}

declare var CVPlanarPixelBufferInfo: CVPlanarPixelBufferInfo;

interface CVPlanarPixelBufferInfo_YCbCrBiPlanar {
  componentInfoY: CVPlanarComponentInfo;
  componentInfoCbCr: CVPlanarComponentInfo;
}

declare var CVPlanarPixelBufferInfo_YCbCrBiPlanar: CVPlanarPixelBufferInfo_YCbCrBiPlanar;

interface CVPlanarPixelBufferInfo_YCbCrPlanar {
  componentInfoY: CVPlanarComponentInfo;
  componentInfoCb: CVPlanarComponentInfo;
  componentInfoCr: CVPlanarComponentInfo;
}

declare var CVPlanarPixelBufferInfo_YCbCrPlanar: CVPlanarPixelBufferInfo_YCbCrPlanar;

interface CVSMPTETime {
  subframes: number;
  subframeDivisor: number;
  counter: number;
  type: number;
  flags: number;
  hours: number;
  minutes: number;
  seconds: number;
  frames: number;
}

declare var CVSMPTETime: CVSMPTETime;

interface CVTime {
  timeValue: number;
  timeScale: number;
  flags: number;
}

declare var CVTime: CVTime;

interface CVTimeStamp {
  version: number;
  videoTimeScale: number;
  videoTime: number;
  hostTime: number;
  rateScalar: number;
  videoRefreshPeriod: number;
  smpteTime: CVSMPTETime;
  flags: number;
  reserved: number;
}

declare var CVTimeStamp: CVTimeStamp;

declare function CVTransferFunctionGetIntegerCodePointForString(transferFunctionString: NSObject): number;
declare function CVTransferFunctionGetStringForIntegerCodePoint(transferFunctionCodePoint: number): NSObject;
declare function CVYCbCrMatrixGetIntegerCodePointForString(yCbCrMatrixString: NSObject): number;
declare function CVYCbCrMatrixGetStringForIntegerCodePoint(yCbCrMatrixCodePoint: number): NSObject;
declare var kCVBufferMovieTimeKey: NSObject;

declare var kCVBufferNonPropagatedAttachmentsKey: NSObject;

declare var kCVBufferPropagatedAttachmentsKey: NSObject;

declare var kCVBufferTimeScaleKey: NSObject;

declare var kCVBufferTimeValueKey: NSObject;

declare var kCVImageBufferAlphaChannelIsOpaque: NSObject;

declare var kCVImageBufferAlphaChannelModeKey: NSObject;

declare var kCVImageBufferAlphaChannelMode_PremultipliedAlpha: NSObject;

declare var kCVImageBufferAlphaChannelMode_StraightAlpha: NSObject;

declare var kCVImageBufferCGColorSpaceKey: NSObject;

declare var kCVImageBufferChromaLocationBottomFieldKey: NSObject;

declare var kCVImageBufferChromaLocationTopFieldKey: NSObject;

declare var kCVImageBufferChromaLocation_Bottom: NSObject;

declare var kCVImageBufferChromaLocation_BottomLeft: NSObject;

declare var kCVImageBufferChromaLocation_Center: NSObject;

declare var kCVImageBufferChromaLocation_DV420: NSObject;

declare var kCVImageBufferChromaLocation_Left: NSObject;

declare var kCVImageBufferChromaLocation_Top: NSObject;

declare var kCVImageBufferChromaLocation_TopLeft: NSObject;

declare var kCVImageBufferChromaSubsamplingKey: NSObject;

declare var kCVImageBufferChromaSubsampling_411: NSObject;

declare var kCVImageBufferChromaSubsampling_420: NSObject;

declare var kCVImageBufferChromaSubsampling_422: NSObject;

declare var kCVImageBufferCleanApertureHeightKey: NSObject;

declare var kCVImageBufferCleanApertureHorizontalOffsetKey: NSObject;

declare var kCVImageBufferCleanApertureKey: NSObject;

declare var kCVImageBufferCleanApertureVerticalOffsetKey: NSObject;

declare var kCVImageBufferCleanApertureWidthKey: NSObject;

declare var kCVImageBufferColorPrimariesKey: NSObject;

declare var kCVImageBufferColorPrimaries_DCI_P3: NSObject;

declare var kCVImageBufferColorPrimaries_EBU_3213: NSObject;

declare var kCVImageBufferColorPrimaries_ITU_R_2020: NSObject;

declare var kCVImageBufferColorPrimaries_ITU_R_709_2: NSObject;

declare var kCVImageBufferColorPrimaries_P22: NSObject;

declare var kCVImageBufferColorPrimaries_P3_D65: NSObject;

declare var kCVImageBufferColorPrimaries_SMPTE_C: NSObject;

declare var kCVImageBufferContentLightLevelInfoKey: NSObject;

declare var kCVImageBufferDisplayDimensionsKey: NSObject;

declare var kCVImageBufferDisplayHeightKey: NSObject;

declare var kCVImageBufferDisplayWidthKey: NSObject;

declare var kCVImageBufferFieldCountKey: NSObject;

declare var kCVImageBufferFieldDetailKey: NSObject;

declare var kCVImageBufferFieldDetailSpatialFirstLineEarly: NSObject;

declare var kCVImageBufferFieldDetailSpatialFirstLineLate: NSObject;

declare var kCVImageBufferFieldDetailTemporalBottomFirst: NSObject;

declare var kCVImageBufferFieldDetailTemporalTopFirst: NSObject;

declare var kCVImageBufferGammaLevelKey: NSObject;

declare var kCVImageBufferICCProfileKey: NSObject;

declare var kCVImageBufferMasteringDisplayColorVolumeKey: NSObject;

declare var kCVImageBufferPixelAspectRatioHorizontalSpacingKey: NSObject;

declare var kCVImageBufferPixelAspectRatioKey: NSObject;

declare var kCVImageBufferPixelAspectRatioVerticalSpacingKey: NSObject;

declare var kCVImageBufferPreferredCleanApertureKey: NSObject;

declare var kCVImageBufferTransferFunctionKey: NSObject;

declare var kCVImageBufferTransferFunction_ITU_R_2020: NSObject;

declare var kCVImageBufferTransferFunction_ITU_R_2100_HLG: NSObject;

declare var kCVImageBufferTransferFunction_ITU_R_709_2: NSObject;

declare var kCVImageBufferTransferFunction_Linear: NSObject;

declare var kCVImageBufferTransferFunction_SMPTE_240M_1995: NSObject;

declare var kCVImageBufferTransferFunction_SMPTE_ST_2084_PQ: NSObject;

declare var kCVImageBufferTransferFunction_SMPTE_ST_428_1: NSObject;

declare var kCVImageBufferTransferFunction_UseGamma: NSObject;

declare var kCVImageBufferTransferFunction_sRGB: NSObject;

declare var kCVImageBufferYCbCrMatrixKey: NSObject;

declare var kCVImageBufferYCbCrMatrix_DCI_P3: NSObject;

declare var kCVImageBufferYCbCrMatrix_ITU_R_2020: NSObject;

declare var kCVImageBufferYCbCrMatrix_ITU_R_601_4: NSObject;

declare var kCVImageBufferYCbCrMatrix_ITU_R_709_2: NSObject;

declare var kCVImageBufferYCbCrMatrix_P3_D65: NSObject;

declare var kCVImageBufferYCbCrMatrix_SMPTE_240M_1995: NSObject;

declare var kCVIndefiniteTime: CVTime;

declare var kCVMetalTextureCacheMaximumTextureAgeKey: NSObject;

declare var kCVMetalTextureStorageMode: NSObject;

declare var kCVMetalTextureUsage: NSObject;

declare var kCVPixelBufferBytesPerRowAlignmentKey: NSObject;

declare var kCVPixelBufferCGBitmapContextCompatibilityKey: NSObject;

declare var kCVPixelBufferCGImageCompatibilityKey: NSObject;

declare var kCVPixelBufferExtendedPixelsBottomKey: NSObject;

declare var kCVPixelBufferExtendedPixelsLeftKey: NSObject;

declare var kCVPixelBufferExtendedPixelsRightKey: NSObject;

declare var kCVPixelBufferExtendedPixelsTopKey: NSObject;

declare var kCVPixelBufferHeightKey: NSObject;

declare var kCVPixelBufferIOSurfaceCoreAnimationCompatibilityKey: NSObject;

declare var kCVPixelBufferIOSurfaceOpenGLFBOCompatibilityKey: NSObject;

declare var kCVPixelBufferIOSurfaceOpenGLTextureCompatibilityKey: NSObject;

declare var kCVPixelBufferIOSurfacePropertiesKey: NSObject;

declare var kCVPixelBufferMemoryAllocatorKey: NSObject;

declare var kCVPixelBufferMetalCompatibilityKey: NSObject;

declare var kCVPixelBufferOpenGLCompatibilityKey: NSObject;

declare var kCVPixelBufferOpenGLTextureCacheCompatibilityKey: NSObject;

declare var kCVPixelBufferPixelFormatTypeKey: NSObject;

declare var kCVPixelBufferPlaneAlignmentKey: NSObject;

declare var kCVPixelBufferPoolAllocationThresholdKey: NSObject;

declare var kCVPixelBufferPoolFreeBufferNotification: NSObject;

declare var kCVPixelBufferPoolMaximumBufferAgeKey: NSObject;

declare var kCVPixelBufferPoolMinimumBufferCountKey: NSObject;

declare var kCVPixelBufferWidthKey: NSObject;

declare var kCVPixelFormatBitsPerBlock: NSObject;

declare var kCVPixelFormatBlackBlock: NSObject;

declare var kCVPixelFormatBlockHeight: NSObject;

declare var kCVPixelFormatBlockHorizontalAlignment: NSObject;

declare var kCVPixelFormatBlockVerticalAlignment: NSObject;

declare var kCVPixelFormatBlockWidth: NSObject;

declare var kCVPixelFormatCGBitmapContextCompatibility: NSObject;

declare var kCVPixelFormatCGBitmapInfo: NSObject;

declare var kCVPixelFormatCGImageCompatibility: NSObject;

declare var kCVPixelFormatCodecType: NSObject;

declare var kCVPixelFormatComponentRange: NSObject;

declare var kCVPixelFormatComponentRange_FullRange: NSObject;

declare var kCVPixelFormatComponentRange_VideoRange: NSObject;

declare var kCVPixelFormatComponentRange_WideRange: NSObject;

declare var kCVPixelFormatConstant: NSObject;

declare var kCVPixelFormatContainsAlpha: NSObject;

declare var kCVPixelFormatContainsGrayscale: NSObject;

declare var kCVPixelFormatContainsRGB: NSObject;

declare var kCVPixelFormatContainsYCbCr: NSObject;

declare var kCVPixelFormatFillExtendedPixelsCallback: NSObject;

declare var kCVPixelFormatFourCC: NSObject;

declare var kCVPixelFormatHorizontalSubsampling: NSObject;

declare var kCVPixelFormatName: NSObject;

declare var kCVPixelFormatOpenGLCompatibility: NSObject;

declare var kCVPixelFormatOpenGLFormat: NSObject;

declare var kCVPixelFormatOpenGLInternalFormat: NSObject;

declare var kCVPixelFormatOpenGLType: NSObject;

declare var kCVPixelFormatPlanes: NSObject;

declare var kCVPixelFormatQDCompatibility: NSObject;


declare const kCVPixelFormatType_128RGBAFloat: number;

declare const kCVPixelFormatType_14Bayer_BGGR: number;

declare const kCVPixelFormatType_14Bayer_GBRG: number;

declare const kCVPixelFormatType_14Bayer_GRBG: number;

declare const kCVPixelFormatType_14Bayer_RGGB: number;

declare const kCVPixelFormatType_16BE555: number;

declare const kCVPixelFormatType_16BE565: number;

declare const kCVPixelFormatType_16Gray: number;

declare const kCVPixelFormatType_16LE555: number;

declare const kCVPixelFormatType_16LE5551: number;

declare const kCVPixelFormatType_16LE565: number;

declare const kCVPixelFormatType_1IndexedGray_WhiteIsZero: number;

declare const kCVPixelFormatType_1Monochrome: number;

declare const kCVPixelFormatType_24BGR: number;

declare const kCVPixelFormatType_24RGB: number;

declare const kCVPixelFormatType_2Indexed: number;

declare const kCVPixelFormatType_2IndexedGray_WhiteIsZero: number;

declare const kCVPixelFormatType_30RGB: number;

declare const kCVPixelFormatType_30RGBLEPackedWideGamut: number;

declare const kCVPixelFormatType_32ABGR: number;

declare const kCVPixelFormatType_32ARGB: number;

declare const kCVPixelFormatType_32AlphaGray: number;

declare const kCVPixelFormatType_32BGRA: number;

declare const kCVPixelFormatType_32RGBA: number;

declare const kCVPixelFormatType_420YpCbCr10BiPlanarFullRange: number;

declare const kCVPixelFormatType_420YpCbCr10BiPlanarVideoRange: number;

declare const kCVPixelFormatType_420YpCbCr8BiPlanarFullRange: number;

declare const kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange: number;

declare const kCVPixelFormatType_420YpCbCr8Planar: number;

declare const kCVPixelFormatType_420YpCbCr8PlanarFullRange: number;

declare const kCVPixelFormatType_420YpCbCr8VideoRange_8A_TriPlanar: number;

declare const kCVPixelFormatType_422YpCbCr10: number;

declare const kCVPixelFormatType_422YpCbCr10BiPlanarFullRange: number;

declare const kCVPixelFormatType_422YpCbCr10BiPlanarVideoRange: number;

declare const kCVPixelFormatType_422YpCbCr16: number;

declare const kCVPixelFormatType_422YpCbCr8: number;

declare const kCVPixelFormatType_422YpCbCr8FullRange: number;

declare const kCVPixelFormatType_422YpCbCr8_yuvs: number;

declare const kCVPixelFormatType_422YpCbCr_4A_8BiPlanar: number;

declare const kCVPixelFormatType_4444AYpCbCr16: number;

declare const kCVPixelFormatType_4444AYpCbCr8: number;

declare const kCVPixelFormatType_4444YpCbCrA8: number;

declare const kCVPixelFormatType_4444YpCbCrA8R: number;

declare const kCVPixelFormatType_444YpCbCr10: number;

declare const kCVPixelFormatType_444YpCbCr10BiPlanarFullRange: number;

declare const kCVPixelFormatType_444YpCbCr10BiPlanarVideoRange: number;

declare const kCVPixelFormatType_444YpCbCr8: number;

declare const kCVPixelFormatType_48RGB: number;

declare const kCVPixelFormatType_4Indexed: number;

declare const kCVPixelFormatType_4IndexedGray_WhiteIsZero: number;

declare const kCVPixelFormatType_64ARGB: number;

declare const kCVPixelFormatType_64RGBAHalf: number;

declare const kCVPixelFormatType_8Indexed: number;

declare const kCVPixelFormatType_8IndexedGray_WhiteIsZero: number;

declare const kCVPixelFormatType_ARGB2101010LEPacked: number;

declare const kCVPixelFormatType_DepthFloat16: number;

declare const kCVPixelFormatType_DepthFloat32: number;

declare const kCVPixelFormatType_DisparityFloat16: number;

declare const kCVPixelFormatType_DisparityFloat32: number;

declare const kCVPixelFormatType_OneComponent16Half: number;

declare const kCVPixelFormatType_OneComponent32Float: number;

declare const kCVPixelFormatType_OneComponent8: number;

declare const kCVPixelFormatType_TwoComponent16Half: number;

declare const kCVPixelFormatType_TwoComponent32Float: number;

declare const kCVPixelFormatType_TwoComponent8: number;
declare var kCVPixelFormatVerticalSubsampling: NSObject;


declare const kCVReturnAllocationFailed: number;

declare const kCVReturnDisplayLinkAlreadyRunning: number;

declare const kCVReturnDisplayLinkCallbacksNotSet: number;

declare const kCVReturnDisplayLinkNotRunning: number;

declare const kCVReturnError: number;

declare const kCVReturnFirst: number;

declare const kCVReturnInvalidArgument: number;

declare const kCVReturnInvalidDisplay: number;

declare const kCVReturnInvalidPixelBufferAttributes: number;

declare const kCVReturnInvalidPixelFormat: number;

declare const kCVReturnInvalidPoolAttributes: number;

declare const kCVReturnInvalidSize: number;

declare const kCVReturnLast: number;

declare const kCVReturnPixelBufferNotMetalCompatible: number;

declare const kCVReturnPixelBufferNotOpenGLCompatible: number;

declare const kCVReturnPoolAllocationFailed: number;

declare const kCVReturnRetry: number;

declare const kCVReturnSuccess: number;

declare const kCVReturnUnsupported: number;

declare const kCVReturnWouldExceedAllocationThreshold: number;
declare var kCVZeroTime: CVTime;

enum CVAttachmentMode {
    kCVAttachmentMode_ShouldNotPropagate = 0,
    kCVAttachmentMode_ShouldPropagate = 1
}

enum CVPixelBufferLockFlags {
    kCVPixelBufferLock_ReadOnly = 1
}

enum CVPixelBufferPoolFlushFlags {
    kCVPixelBufferPoolFlushExcessBuffers = 1
}

enum CVSMPTETimeFlags {
    kCVSMPTETimeValid = 1,
    kCVSMPTETimeRunning = 2
}

enum CVSMPTETimeType {
    kCVSMPTETimeType24 = 0,
    kCVSMPTETimeType25 = 1,
    kCVSMPTETimeType30Drop = 2,
    kCVSMPTETimeType30 = 3,
    kCVSMPTETimeType2997 = 4,
    kCVSMPTETimeType2997Drop = 5,
    kCVSMPTETimeType60 = 6,
    kCVSMPTETimeType5994 = 7
}

enum CVTimeFlags {
    kCVTimeIsIndefinite = 1
}

enum CVTimeStampFlags {
    kCVTimeStampVideoTimeValid = 1,
    kCVTimeStampHostTimeValid = 2,
    kCVTimeStampSMPTETimeValid = 4,
    kCVTimeStampVideoRefreshPeriodValid = 8,
    kCVTimeStampRateScalarValid = 16,
    kCVTimeStampTopField = 65536,
    kCVTimeStampBottomField = 131072,
    kCVTimeStampVideoHostTimeValid = 3,
    kCVTimeStampIsInterlaced = 196608
}

