
declare class MTLArgument extends NSObject {

	readonly access: MTLArgumentAccess;

	readonly isActive: boolean;

	readonly arrayLength: number;

	readonly bufferAlignment: number;

	readonly bufferDataSize: number;

	readonly bufferDataType: MTLDataType;

	readonly bufferPointerType: MTLPointerType;

	readonly bufferStructType: MTLStructType;

	readonly index: number;

	readonly isDepthTexture: boolean;

	readonly name: string;

	readonly textureDataType: MTLDataType;

	readonly textureType: MTLTextureType;

	readonly threadgroupMemoryAlignment: number;

	readonly threadgroupMemoryDataSize: number;

	readonly type: MTLArgumentType;
}

enum MTLArgumentAccess {

	ReadOnly = 0,

	ReadWrite = 1,

	WriteOnly = 2
}


enum MTLArgumentBuffersTier {

	Tier1 = 0,

	Tier2 = 1
}


declare class MTLArgumentDescriptor extends NSObject implements NSCopying {

	static argumentDescriptor(): MTLArgumentDescriptor;

	setAccess(_: MTLArgumentAccess)

	access: MTLArgumentAccess;

	setArrayLength(_: number)

	arrayLength: number;

	setConstantBlockAlignment(_: number)

	constantBlockAlignment: number;

	setDataType(_: MTLDataType)

	dataType: MTLDataType;

	setIndex(_: number)

	index: number;

	setTextureType(_: MTLTextureType)

	textureType: MTLTextureType;

	copyWithZone(_?: any): any;
}

interface MTLArgumentEncoder extends NSObjectProtocol {

	alignment: number;

	device: MTLDevice;

	encodedLength: number;

	setLabel(_: string)

	label: string;

	constantDataAtIndex(_: number): any;

	newArgumentEncoderForBufferAtIndex(_: number): MTLArgumentEncoder;

	setArgumentBufferOffset(_?: MTLBuffer, offset: number): void;

	setArgumentBufferStartOffsetArrayElement(_?: MTLBuffer, startOffset: number, arrayElement: number): void;

	setBufferOffsetAtIndex(_?: MTLBuffer, offset: number, atIndex: number): void;

	setBuffersOffsetsWithRange(_?: MTLBuffer, offsets: number, withRange: NSRange): void;

	setIndirectCommandBufferAtIndex(_?: MTLIndirectCommandBuffer, atIndex: number): void;

	setIndirectCommandBuffersWithRange(_?: MTLIndirectCommandBuffer, withRange: NSRange): void;

	setRenderPipelineStateAtIndex(_?: MTLRenderPipelineState, atIndex: number): void;

	setRenderPipelineStatesWithRange(_?: MTLRenderPipelineState, withRange: NSRange): void;

	setSamplerStateAtIndex(_?: MTLSamplerState, atIndex: number): void;

	setSamplerStatesWithRange(_?: MTLSamplerState, withRange: NSRange): void;

	setTextureAtIndex(_?: MTLTexture, atIndex: number): void;

	setTexturesWithRange(_?: MTLTexture, withRange: NSRange): void;
}
declare var MTLArgumentEncoder: {

	prototype: MTLArgumentEncoder;
};

enum MTLArgumentType {

	Buffer = 0,

	ThreadgroupMemory = 1,

	Texture = 2,

	Sampler = 3
}


declare class MTLArrayType extends MTLType {

	readonly argumentIndexStride: number;

	readonly arrayLength: number;

	readonly elementType: MTLDataType;

	readonly stride: number;

	elementArrayType(): MTLArrayType;

	elementPointerType(): MTLPointerType;

	elementStructType(): MTLStructType;

	elementTextureReferenceType(): MTLTextureReferenceType;
}

declare class MTLAttribute extends NSObject {

	readonly isActive: boolean;

	readonly attributeIndex: number;

	readonly attributeType: MTLDataType;

	readonly name: string;

	readonly isPatchControlPointData: boolean;

	readonly isPatchData: boolean;
}

declare class MTLAttributeDescriptor extends NSObject implements NSCopying {

	setBufferIndex(_: number)

	bufferIndex: number;

	setFormat(_: MTLAttributeFormat)

	format: MTLAttributeFormat;

	setOffset(_: number)

	offset: number;

	copyWithZone(_?: any): any;
}

declare class MTLAttributeDescriptorArray extends NSObject {

	objectAtIndexedSubscript(_: number): MTLAttributeDescriptor;

	setObjectAtIndexedSubscript(_?: MTLAttributeDescriptor, atIndexedSubscript: number): void;
}

enum MTLAttributeFormat {

	Invalid = 0,

	UChar2 = 1,

	UChar3 = 2,

	UChar4 = 3,

	Char2 = 4,

	Char3 = 5,

	Char4 = 6,

	UChar2Normalized = 7,

	UChar3Normalized = 8,

	UChar4Normalized = 9,

	Char2Normalized = 10,

	Char3Normalized = 11,

	Char4Normalized = 12,

	UShort2 = 13,

	UShort3 = 14,

	UShort4 = 15,

	Short2 = 16,

	Short3 = 17,

	Short4 = 18,

	UShort2Normalized = 19,

	UShort3Normalized = 20,

	UShort4Normalized = 21,

	Short2Normalized = 22,

	Short3Normalized = 23,

	Short4Normalized = 24,

	Half2 = 25,

	Half3 = 26,

	Half4 = 27,

	Float = 28,

	Float2 = 29,

	Float3 = 30,

	Float4 = 31,

	Int = 32,

	Int2 = 33,

	Int3 = 34,

	Int4 = 35,

	UInt = 36,

	UInt2 = 37,

	UInt3 = 38,

	UInt4 = 39,

	Int1010102Normalized = 40,

	UInt1010102Normalized = 41,

	UChar4Normalized_BGRA = 42,

	UChar = 45,

	Char = 46,

	UCharNormalized = 47,

	CharNormalized = 48,

	UShort = 49,

	Short = 50,

	UShortNormalized = 51,

	ShortNormalized = 52,

	Half = 53
}


enum MTLBarrierScope {

	Buffers = 1,

	Textures = 2,

	RenderTargets = 4
}


enum MTLBlendFactor {

	Zero = 0,

	One = 1,

	SourceColor = 2,

	OneMinusSourceColor = 3,

	SourceAlpha = 4,

	OneMinusSourceAlpha = 5,

	DestinationColor = 6,

	OneMinusDestinationColor = 7,

	DestinationAlpha = 8,

	OneMinusDestinationAlpha = 9,

	SourceAlphaSaturated = 10,

	BlendColor = 11,

	OneMinusBlendColor = 12,

	BlendAlpha = 13,

	OneMinusBlendAlpha = 14,

	Source1Color = 15,

	OneMinusSource1Color = 16,

	Source1Alpha = 17,

	OneMinusSource1Alpha = 18
}


enum MTLBlendOperation {

	Add = 0,

	Subtract = 1,

	ReverseSubtract = 2,

	Min = 3,

	Max = 4
}


interface MTLBlitCommandEncoder extends MTLCommandEncoder {

	copyFromBufferSourceOffsetSourceBytesPerRowSourceBytesPerImageSourceSizeToTextureDestinationSliceDestinationLevelDestinationOrigin(_: MTLBuffer, sourceOffset: number, sourceBytesPerRow: number, sourceBytesPerImage: number, sourceSize: MTLSize, toTexture: MTLTexture, destinationSlice: number, destinationLevel: number, destinationOrigin: MTLOrigin): void;

	copyFromBufferSourceOffsetSourceBytesPerRowSourceBytesPerImageSourceSizeToTextureDestinationSliceDestinationLevelDestinationOriginOptions(_: MTLBuffer, sourceOffset: number, sourceBytesPerRow: number, sourceBytesPerImage: number, sourceSize: MTLSize, toTexture: MTLTexture, destinationSlice: number, destinationLevel: number, destinationOrigin: MTLOrigin, options: MTLBlitOption): void;

	copyFromBufferSourceOffsetToBufferDestinationOffsetSize(_: MTLBuffer, sourceOffset: number, toBuffer: MTLBuffer, destinationOffset: number, size: number): void;

	copyFromTextureSourceSliceSourceLevelSourceOriginSourceSizeToBufferDestinationOffsetDestinationBytesPerRowDestinationBytesPerImage(_: MTLTexture, sourceSlice: number, sourceLevel: number, sourceOrigin: MTLOrigin, sourceSize: MTLSize, toBuffer: MTLBuffer, destinationOffset: number, destinationBytesPerRow: number, destinationBytesPerImage: number): void;

	copyFromTextureSourceSliceSourceLevelSourceOriginSourceSizeToBufferDestinationOffsetDestinationBytesPerRowDestinationBytesPerImageOptions(_: MTLTexture, sourceSlice: number, sourceLevel: number, sourceOrigin: MTLOrigin, sourceSize: MTLSize, toBuffer: MTLBuffer, destinationOffset: number, destinationBytesPerRow: number, destinationBytesPerImage: number, options: MTLBlitOption): void;

	copyFromTextureSourceSliceSourceLevelSourceOriginSourceSizeToTextureDestinationSliceDestinationLevelDestinationOrigin(_: MTLTexture, sourceSlice: number, sourceLevel: number, sourceOrigin: MTLOrigin, sourceSize: MTLSize, toTexture: MTLTexture, destinationSlice: number, destinationLevel: number, destinationOrigin: MTLOrigin): void;

	copyFromTextureSourceSliceSourceLevelToTextureDestinationSliceDestinationLevelSliceCountLevelCount(_: MTLTexture, sourceSlice: number, sourceLevel: number, toTexture: MTLTexture, destinationSlice: number, destinationLevel: number, sliceCount: number, levelCount: number): void;

	copyFromTextureToTexture(_: MTLTexture, toTexture: MTLTexture): void;

	copyIndirectCommandBufferSourceRangeDestinationDestinationIndex(_: MTLIndirectCommandBuffer, sourceRange: NSRange, destination: MTLIndirectCommandBuffer, destinationIndex: number): void;

	fillBufferRangeValue(_: MTLBuffer, range: NSRange, value: number): void;

	generateMipmapsForTexture(_: MTLTexture): void;

	optimizeContentsForCPUAccess(_: MTLTexture): void;

	optimizeContentsForCPUAccessSliceLevel(_: MTLTexture, slice: number, level: number): void;

	optimizeContentsForGPUAccess(_: MTLTexture): void;

	optimizeContentsForGPUAccessSliceLevel(_: MTLTexture, slice: number, level: number): void;

	optimizeIndirectCommandBufferWithRange(_: MTLIndirectCommandBuffer, withRange: NSRange): void;

	resetCommandsInBufferWithRange(_: MTLIndirectCommandBuffer, withRange: NSRange): void;

	resolveCountersInRangeDestinationBufferDestinationOffset(_: MTLCounterSampleBuffer, inRange: NSRange, destinationBuffer: MTLBuffer, destinationOffset: number): void;

	sampleCountersInBufferAtSampleIndexWithBarrier(_: MTLCounterSampleBuffer, atSampleIndex: number, withBarrier: boolean): void;

	synchronizeResource(_: MTLResource): void;

	synchronizeTextureSliceLevel(_: MTLTexture, slice: number, level: number): void;

	updateFence(_: MTLFence): void;

	waitForFence(_: MTLFence): void;
}
declare var MTLBlitCommandEncoder: {

	prototype: MTLBlitCommandEncoder;
};

enum MTLBlitOption {

	None = 0,

	DepthFromDepthStencil = 1,

	StencilFromDepthStencil = 2,

	RowLinearPVRTC = 4
}


interface MTLBuffer extends MTLResource {

	length: number;

	remoteStorageBuffer: MTLBuffer;

	addDebugMarkerRange(_: string, range: NSRange): void;

	contents(): any;

	didModifyRange(_: NSRange): void;

	newRemoteBufferViewForDevice(_: MTLDevice): MTLBuffer;

	newTextureWithDescriptorOffsetBytesPerRow(_: MTLTextureDescriptor, offset: number, bytesPerRow: number): MTLTexture;

	removeAllDebugMarkers(): void;
}
declare var MTLBuffer: {

	prototype: MTLBuffer;
};

declare class MTLBufferLayoutDescriptor extends NSObject implements NSCopying {

	setStepFunction(_: MTLStepFunction)

	stepFunction: MTLStepFunction;

	setStepRate(_: number)

	stepRate: number;

	setStride(_: number)

	stride: number;

	copyWithZone(_?: any): any;
}

declare class MTLBufferLayoutDescriptorArray extends NSObject {

	objectAtIndexedSubscript(_: number): MTLBufferLayoutDescriptor;

	setObjectAtIndexedSubscript(_?: MTLBufferLayoutDescriptor, atIndexedSubscript: number): void;
}

enum MTLCPUCacheMode {

	DefaultCache = 0,

	WriteCombined = 1
}


declare class MTLCaptureDescriptor extends NSObject implements NSCopying {

	setCaptureObject(_: any)

	captureObject: any;

	setDestination(_: MTLCaptureDestination)

	destination: MTLCaptureDestination;

	setOutputURL(_: NSURL)

	outputURL: NSURL;

	copyWithZone(_?: any): any;
}

enum MTLCaptureDestination {

	DeveloperTools = 1,

	GPUTraceDocument = 2
}


enum MTLCaptureError {

	NotSupported = 1,

	AlreadyCapturing = 2,

	InvalidDescriptor = 3
}


declare var MTLCaptureErrorDomain: string;

declare class MTLCaptureManager extends NSObject {

	static sharedCaptureManager(): MTLCaptureManager;

	setDefaultCaptureScope(_: MTLCaptureScope)

	defaultCaptureScope: MTLCaptureScope;

	readonly isCapturing: boolean;

	newCaptureScopeWithCommandQueue(commandQueue: MTLCommandQueue): MTLCaptureScope;

	newCaptureScopeWithDevice(device: MTLDevice): MTLCaptureScope;

	startCaptureWithDescriptorError(error: MTLCaptureDescriptor): boolean;

	stopCapture(): void;

	supportsDestination(_: MTLCaptureDestination): boolean;
}

interface MTLCaptureScope extends NSObjectProtocol {

	commandQueue: MTLCommandQueue;

	device: MTLDevice;

	setLabel(_: string)

	label: string;

	beginScope(): void;

	endScope(): void;
}
declare var MTLCaptureScope: {

	prototype: MTLCaptureScope;
};

interface MTLClearColor {
	red: number;
	green: number;
	blue: number;
	alpha: number;
}
declare var MTLClearColor: MTLClearColor;

declare function MTLClearColorMake(red: number, green: number, blue: number, alpha: number): MTLClearColor;

enum MTLColorWriteMask {

	None = 0,

	Red = 8,

	Green = 4,

	Blue = 2,

	Alpha = 1,

	All = 15
}


interface MTLCommandBuffer extends NSObjectProtocol {

	commandQueue: MTLCommandQueue;

	device: MTLDevice;

	error: NSError;

	GPUEndTime: number;

	GPUStartTime: number;

	kernelEndTime: number;

	kernelStartTime: number;

	setLabel(_: string)

	label: string;

	retainedReferences: boolean;

	status: MTLCommandBufferStatus;

	addCompletedHandler(_: (p1: MTLCommandBuffer) => void): void;

	addScheduledHandler(_: (p1: MTLCommandBuffer) => void): void;

	blitCommandEncoder(): MTLBlitCommandEncoder;

	commit(): void;

	computeCommandEncoder(): MTLComputeCommandEncoder;

	computeCommandEncoderWithDispatchType(_: MTLDispatchType): MTLComputeCommandEncoder;

	encodeSignalEventValue(_: MTLEvent, value: number): void;

	encodeWaitForEventValue(_: MTLEvent, value: number): void;

	enqueue(): void;

	parallelRenderCommandEncoderWithDescriptor(_: MTLRenderPassDescriptor): MTLParallelRenderCommandEncoder;

	popDebugGroup(): void;

	presentDrawable(_: MTLDrawable): void;

	presentDrawableAfterMinimumDuration(_: MTLDrawable, afterMinimumDuration: number): void;

	presentDrawableAtTime(_: MTLDrawable, atTime: number): void;

	pushDebugGroup(_: string): void;

	renderCommandEncoderWithDescriptor(_: MTLRenderPassDescriptor): MTLRenderCommandEncoder;

	waitUntilCompleted(): void;

	waitUntilScheduled(): void;
}
declare var MTLCommandBuffer: {

	prototype: MTLCommandBuffer;
};

enum MTLCommandBufferError {

	None = 0,

	Internal = 1,

	Timeout = 2,

	PageFault = 3,

	Blacklisted = 4,

	NotPermitted = 7,

	OutOfMemory = 8,

	InvalidResource = 9,

	Memoryless = 10,

	DeviceRemoved = 11
}


declare var MTLCommandBufferErrorDomain: string;

enum MTLCommandBufferStatus {

	NotEnqueued = 0,

	Enqueued = 1,

	Committed = 2,

	Scheduled = 3,

	Completed = 4,

	Error = 5
}


interface MTLCommandEncoder extends NSObjectProtocol {

	device: MTLDevice;

	setLabel(_: string)

	label: string;

	endEncoding(): void;

	insertDebugSignpost(_: string): void;

	popDebugGroup(): void;

	pushDebugGroup(_: string): void;
}
declare var MTLCommandEncoder: {

	prototype: MTLCommandEncoder;
};

interface MTLCommandQueue extends NSObjectProtocol {

	device: MTLDevice;

	setLabel(_: string)

	label: string;

	commandBuffer(): MTLCommandBuffer;

	commandBufferWithUnretainedReferences(): MTLCommandBuffer;
}
declare var MTLCommandQueue: {

	prototype: MTLCommandQueue;
};

declare var MTLCommonCounterClipperInvocations: string;

declare var MTLCommonCounterClipperPrimitivesOut: string;

declare var MTLCommonCounterComputeKernelInvocations: string;

declare var MTLCommonCounterFragmentCycles: string;

declare var MTLCommonCounterFragmentInvocations: string;

declare var MTLCommonCounterFragmentsPassed: string;

declare var MTLCommonCounterPostTessellationVertexCycles: string;

declare var MTLCommonCounterPostTessellationVertexInvocations: string;

declare var MTLCommonCounterRenderTargetWriteCycles: string;

declare var MTLCommonCounterSetStageUtilization: string;

declare var MTLCommonCounterSetStatistic: string;

declare var MTLCommonCounterSetTimestamp: string;

declare var MTLCommonCounterTessellationCycles: string;

declare var MTLCommonCounterTessellationInputPatches: string;

declare var MTLCommonCounterTimestamp: string;

declare var MTLCommonCounterTotalCycles: string;

declare var MTLCommonCounterVertexCycles: string;

declare var MTLCommonCounterVertexInvocations: string;

enum MTLCompareFunction {

	Never = 0,

	Less = 1,

	Equal = 2,

	LessEqual = 3,

	Greater = 4,

	NotEqual = 5,

	GreaterEqual = 6,

	Always = 7
}


declare class MTLCompileOptions extends NSObject implements NSCopying {

	setFastMathEnabled(_: boolean)

	fastMathEnabled: boolean;

	setLanguageVersion(_: MTLLanguageVersion)

	languageVersion: MTLLanguageVersion;

	setPreprocessorMacros(_: NSDictionary<string, NSObject>)

	preprocessorMacros: NSDictionary<string, NSObject>;

	copyWithZone(_?: any): any;
}

interface MTLComputeCommandEncoder extends MTLCommandEncoder {

	dispatchType: MTLDispatchType;

	dispatchThreadgroupsThreadsPerThreadgroup(_: MTLSize, threadsPerThreadgroup: MTLSize): void;

	dispatchThreadgroupsWithIndirectBufferIndirectBufferOffsetThreadsPerThreadgroup(_: MTLBuffer, indirectBufferOffset: number, threadsPerThreadgroup: MTLSize): void;

	dispatchThreadsThreadsPerThreadgroup(_: MTLSize, threadsPerThreadgroup: MTLSize): void;

	memoryBarrierWithResourcesCount(_: MTLResource, count: number): void;

	memoryBarrierWithScope(_: MTLBarrierScope): void;

	sampleCountersInBufferAtSampleIndexWithBarrier(_: MTLCounterSampleBuffer, atSampleIndex: number, withBarrier: boolean): void;

	setBufferOffsetAtIndex(_?: MTLBuffer, offset: number, atIndex: number): void;

	setBufferOffsetAtIndex(_: number, atIndex: number): void;

	setBuffersOffsetsWithRange(_?: MTLBuffer, offsets: number, withRange: NSRange): void;

	setBytesLengthAtIndex(_: any, length: number, atIndex: number): void;

	setComputePipelineState(_: MTLComputePipelineState): void;

	setSamplerStateAtIndex(_?: MTLSamplerState, atIndex: number): void;

	setSamplerStateLodMinClampLodMaxClampAtIndex(_?: MTLSamplerState, lodMinClamp: number, lodMaxClamp: number, atIndex: number): void;

	setSamplerStatesLodMinClampsLodMaxClampsWithRange(_?: MTLSamplerState, lodMinClamps: number, lodMaxClamps: number, withRange: NSRange): void;

	setSamplerStatesWithRange(_?: MTLSamplerState, withRange: NSRange): void;

	setStageInRegion(_: MTLRegion): void;

	setStageInRegionWithIndirectBufferIndirectBufferOffset(_: MTLBuffer, indirectBufferOffset: number): void;

	setTextureAtIndex(_?: MTLTexture, atIndex: number): void;

	setTexturesWithRange(_?: MTLTexture, withRange: NSRange): void;

	setThreadgroupMemoryLengthAtIndex(_: number, atIndex: number): void;

	updateFence(_: MTLFence): void;

	useHeap(_: MTLHeap): void;

	useHeapsCount(_: MTLHeap, count: number): void;

	useResourceUsage(_: MTLResource, usage: MTLResourceUsage): void;

	useResourcesCountUsage(_: MTLResource, count: number, usage: MTLResourceUsage): void;

	waitForFence(_: MTLFence): void;
}
declare var MTLComputeCommandEncoder: {

	prototype: MTLComputeCommandEncoder;
};

declare class MTLComputePipelineDescriptor extends NSObject implements NSCopying {

	readonly buffers: MTLPipelineBufferDescriptorArray;

	setComputeFunction(_: MTLFunction)

	computeFunction: MTLFunction;

	setLabel(_: string)

	label: string;

	setMaxTotalThreadsPerThreadgroup(_: number)

	maxTotalThreadsPerThreadgroup: number;

	setStageInputDescriptor(_: MTLStageInputOutputDescriptor)

	stageInputDescriptor: MTLStageInputOutputDescriptor;

	setThreadGroupSizeIsMultipleOfThreadExecutionWidth(_: boolean)

	threadGroupSizeIsMultipleOfThreadExecutionWidth: boolean;

	copyWithZone(_?: any): any;

	reset(): void;
}

declare class MTLComputePipelineReflection extends NSObject {

	readonly arguments: NSArray<MTLArgument>;
}

interface MTLComputePipelineState extends NSObjectProtocol {

	device: MTLDevice;

	label: string;

	maxTotalThreadsPerThreadgroup: number;

	staticThreadgroupMemoryLength: number;

	threadExecutionWidth: number;
}
declare var MTLComputePipelineState: {

	prototype: MTLComputePipelineState;
};

declare function MTLCopyAllDevices(): NSArray<MTLDevice>;

declare function MTLCopyAllDevicesWithObserver(observer: NSObjectProtocol, handler: (p1: MTLDevice, p2: string) => void): NSArray<MTLDevice>;

interface MTLCounter extends NSObjectProtocol {

	name: string;
}
declare var MTLCounter: {

	prototype: MTLCounter;
};

declare var MTLCounterErrorDomain: string;

interface MTLCounterResultStageUtilization {
	totalCycles: number;
	vertexCycles: number;
	tessellationCycles: number;
	postTessellationVertexCycles: number;
	fragmentCycles: number;
	renderTargetCycles: number;
}
declare var MTLCounterResultStageUtilization: MTLCounterResultStageUtilization;

interface MTLCounterResultStatistic {
	tessellationInputPatches: number;
	vertexInvocations: number;
	postTessellationVertexInvocations: number;
	clipperInvocations: number;
	clipperPrimitivesOut: number;
	fragmentInvocations: number;
	fragmentsPassed: number;
	computeKernelInvocations: number;
}
declare var MTLCounterResultStatistic: MTLCounterResultStatistic;

interface MTLCounterResultTimestamp {
	timestamp: number;
}
declare var MTLCounterResultTimestamp: MTLCounterResultTimestamp;

interface MTLCounterSampleBuffer extends NSObjectProtocol {

	device: MTLDevice;

	label: string;

	sampleCount: number;

	resolveCounterRange(_: NSRange): NSData;
}
declare var MTLCounterSampleBuffer: {

	prototype: MTLCounterSampleBuffer;
};

declare class MTLCounterSampleBufferDescriptor extends NSObject implements NSCopying {

	setCounterSet(_: MTLCounterSet)

	counterSet: MTLCounterSet;

	setLabel(_: string)

	label: string;

	setSampleCount(_: number)

	sampleCount: number;

	setStorageMode(_: MTLStorageMode)

	storageMode: MTLStorageMode;

	copyWithZone(_?: any): any;
}

enum MTLCounterSampleBufferError {

	OutOfMemory = 0,

	Internal = 1
}


interface MTLCounterSet extends NSObjectProtocol {

	counters: NSArray<MTLCounter>;

	name: string;
}
declare var MTLCounterSet: {

	prototype: MTLCounterSet;
};

declare function MTLCreateSystemDefaultDevice(): MTLDevice;

enum MTLCullMode {

	None = 0,

	Front = 1,

	Back = 2
}


enum MTLDataType {

	None = 0,

	Struct = 1,

	Array = 2,

	Float = 3,

	Float2 = 4,

	Float3 = 5,

	Float4 = 6,

	Float2x2 = 7,

	Float2x3 = 8,

	Float2x4 = 9,

	Float3x2 = 10,

	Float3x3 = 11,

	Float3x4 = 12,

	Float4x2 = 13,

	Float4x3 = 14,

	Float4x4 = 15,

	Half = 16,

	Half2 = 17,

	Half3 = 18,

	Half4 = 19,

	Half2x2 = 20,

	Half2x3 = 21,

	Half2x4 = 22,

	Half3x2 = 23,

	Half3x3 = 24,

	Half3x4 = 25,

	Half4x2 = 26,

	Half4x3 = 27,

	Half4x4 = 28,

	Int = 29,

	Int2 = 30,

	Int3 = 31,

	Int4 = 32,

	UInt = 33,

	UInt2 = 34,

	UInt3 = 35,

	UInt4 = 36,

	Short = 37,

	Short2 = 38,

	Short3 = 39,

	Short4 = 40,

	UShort = 41,

	UShort2 = 42,

	UShort3 = 43,

	UShort4 = 44,

	Char = 45,

	Char2 = 46,

	Char3 = 47,

	Char4 = 48,

	UChar = 49,

	UChar2 = 50,

	UChar3 = 51,

	UChar4 = 52,

	Bool = 53,

	Bool2 = 54,

	Bool3 = 55,

	Bool4 = 56,

	Texture = 58,

	Sampler = 59,

	Pointer = 60,

	RenderPipeline = 78,

	IndirectCommandBuffer = 80
}


enum MTLDepthClipMode {

	Clip = 0,

	Clamp = 1
}


declare class MTLDepthStencilDescriptor extends NSObject implements NSCopying {

	setBackFaceStencil(_: MTLStencilDescriptor)

	backFaceStencil: MTLStencilDescriptor;

	setDepthCompareFunction(_: MTLCompareFunction)

	depthCompareFunction: MTLCompareFunction;

	setDepthWriteEnabled(_: boolean)

	isDepthWriteEnabled: boolean;

	setFrontFaceStencil(_: MTLStencilDescriptor)

	frontFaceStencil: MTLStencilDescriptor;

	setLabel(_: string)

	label: string;

	copyWithZone(_?: any): any;
}

interface MTLDepthStencilState extends NSObjectProtocol {

	device: MTLDevice;

	label: string;
}
declare var MTLDepthStencilState: {

	prototype: MTLDepthStencilState;
};

interface MTLDevice extends NSObjectProtocol {

	argumentBuffersSupport: MTLArgumentBuffersTier;

	areBarycentricCoordsSupported: boolean;

	counterSets: NSArray<MTLCounterSet>;

	currentAllocatedSize: number;

	isDepth24Stencil8PixelFormatSupported: boolean;

	hasUnifiedMemory: boolean;

	isHeadless: boolean;

	location: MTLDeviceLocation;

	locationNumber: number;

	isLowPower: boolean;

	maxArgumentBufferSamplerCount: number;

	maxBufferLength: number;

	maxThreadgroupMemoryLength: number;

	maxThreadsPerThreadgroup: MTLSize;

	maxTransferRate: number;

	name: string;

	peerCount: number;

	peerGroupID: number;

	peerIndex: number;

	areProgrammableSamplePositionsSupported: boolean;

	areRasterOrderGroupsSupported: boolean;

	readWriteTextureSupport: MTLReadWriteTextureTier;

	recommendedMaxWorkingSetSize: number;

	registryID: number;

	isRemovable: boolean;

	supportsShaderBarycentricCoordinates: boolean;

	getDefaultSamplePositionsCount(_: MTLSamplePosition, count: number): void;

	heapBufferSizeAndAlignWithLengthOptions(_: number, options: MTLResourceOptions): MTLSizeAndAlign;

	heapTextureSizeAndAlignWithDescriptor(_: MTLTextureDescriptor): MTLSizeAndAlign;

	minimumLinearTextureAlignmentForPixelFormat(_: MTLPixelFormat): number;

	minimumTextureBufferAlignmentForPixelFormat(_: MTLPixelFormat): number;

	newArgumentEncoderWithArguments(_: NSArray<MTLArgumentDescriptor>): MTLArgumentEncoder;

	newBufferWithBytesLengthOptions(_: any, length: number, options: MTLResourceOptions): MTLBuffer;

	newBufferWithBytesNoCopyLengthOptionsDeallocator(_: any, length: number, options: MTLResourceOptions, deallocator?: (p1: any, p2: number) => void): MTLBuffer;

	newBufferWithLengthOptions(_: number, options: MTLResourceOptions): MTLBuffer;

	newCommandQueue(): MTLCommandQueue;

	newCommandQueueWithMaxCommandBufferCount(_: number): MTLCommandQueue;

	newComputePipelineStateWithDescriptorOptionsCompletionHandler(_: MTLComputePipelineDescriptor, options: MTLPipelineOption, completionHandler: (p1: MTLComputePipelineState, p2: MTLComputePipelineReflection, p3: NSError) => void): void;

	newComputePipelineStateWithDescriptorOptionsReflectionError(options: MTLComputePipelineDescriptor, reflection: MTLPipelineOption, error?: MTLComputePipelineReflection): MTLComputePipelineState;

	newComputePipelineStateWithFunctionCompletionHandler(_: MTLFunction, completionHandler: (p1: MTLComputePipelineState, p2: NSError) => void): void;

	newComputePipelineStateWithFunctionError(error: MTLFunction): MTLComputePipelineState;

	newComputePipelineStateWithFunctionOptionsCompletionHandler(_: MTLFunction, options: MTLPipelineOption, completionHandler: (p1: MTLComputePipelineState, p2: MTLComputePipelineReflection, p3: NSError) => void): void;

	newComputePipelineStateWithFunctionOptionsReflectionError(options: MTLFunction, reflection: MTLPipelineOption, error?: MTLComputePipelineReflection): MTLComputePipelineState;

	newCounterSampleBufferWithDescriptorError(error: MTLCounterSampleBufferDescriptor): MTLCounterSampleBuffer;

	newDefaultLibrary(): MTLLibrary;

	newDefaultLibraryWithBundleError(error: NSBundle): MTLLibrary;

	newDepthStencilStateWithDescriptor(_: MTLDepthStencilDescriptor): MTLDepthStencilState;

	newEvent(): MTLEvent;

	newFence(): MTLFence;

	newHeapWithDescriptor(_: MTLHeapDescriptor): MTLHeap;

	newIndirectCommandBufferWithDescriptorMaxCommandCountOptions(_: MTLIndirectCommandBufferDescriptor, maxCommandCount: number, options: MTLResourceOptions): MTLIndirectCommandBuffer;

	newLibraryWithDataError(error: NSObject): MTLLibrary;

	newLibraryWithFileError(error: string): MTLLibrary;

	newLibraryWithSourceOptionsCompletionHandler(_: string, options?: MTLCompileOptions, completionHandler: (p1: MTLLibrary, p2: NSError) => void): void;

	newLibraryWithSourceOptionsError(options: string, error?: MTLCompileOptions): MTLLibrary;

	newLibraryWithURLError(error: NSURL): MTLLibrary;

	newRasterizationRateMapWithDescriptor(_: MTLRasterizationRateMapDescriptor): MTLRasterizationRateMap;

	newRenderPipelineStateWithDescriptorCompletionHandler(_: MTLRenderPipelineDescriptor, completionHandler: (p1: MTLRenderPipelineState, p2: NSError) => void): void;

	newRenderPipelineStateWithDescriptorError(error: MTLRenderPipelineDescriptor): MTLRenderPipelineState;

	newRenderPipelineStateWithDescriptorOptionsCompletionHandler(_: MTLRenderPipelineDescriptor, options: MTLPipelineOption, completionHandler: (p1: MTLRenderPipelineState, p2: MTLRenderPipelineReflection, p3: NSError) => void): void;

	newRenderPipelineStateWithDescriptorOptionsReflectionError(options: MTLRenderPipelineDescriptor, reflection: MTLPipelineOption, error?: MTLRenderPipelineReflection): MTLRenderPipelineState;

	newSamplerStateWithDescriptor(_: MTLSamplerDescriptor): MTLSamplerState;

	newSharedEvent(): MTLSharedEvent;

	newSharedEventWithHandle(_: MTLSharedEventHandle): MTLSharedEvent;

	newSharedTextureWithDescriptor(_: MTLTextureDescriptor): MTLTexture;

	newSharedTextureWithHandle(_: MTLSharedTextureHandle): MTLTexture;

	newTextureWithDescriptor(_: MTLTextureDescriptor): MTLTexture;

	newTextureWithDescriptorIosurfacePlane(_: MTLTextureDescriptor, iosurface: any, plane: number): MTLTexture;

	sampleTimestampsGpuTimestamp(_: number, gpuTimestamp: number): void;

	supportsFamily(_: MTLGPUFamily): boolean;

	supportsFeatureSet(_: MTLFeatureSet): boolean;

	supportsRasterizationRateMapWithLayerCount(_: number): boolean;

	supportsTextureSampleCount(_: number): boolean;

	supportsVertexAmplificationCount(_: number): boolean;
}
declare var MTLDevice: {

	prototype: MTLDevice;
};

enum MTLDeviceLocation {

	BuiltIn = 0,

	Slot = 1,

	External = 2,

	Unspecified = -1
}


declare var MTLDeviceRemovalRequestedNotification: string;

declare var MTLDeviceWasAddedNotification: string;

declare var MTLDeviceWasRemovedNotification: string;

interface MTLDispatchThreadgroupsIndirectArguments {
	threadgroupsPerGrid: number;
}
declare var MTLDispatchThreadgroupsIndirectArguments: MTLDispatchThreadgroupsIndirectArguments;

enum MTLDispatchType {

	Serial = 0,

	Concurrent = 1
}


interface MTLDrawIndexedPrimitivesIndirectArguments {
	indexCount: number;
	instanceCount: number;
	indexStart: number;
	baseVertex: number;
	baseInstance: number;
}
declare var MTLDrawIndexedPrimitivesIndirectArguments: MTLDrawIndexedPrimitivesIndirectArguments;

interface MTLDrawPatchIndirectArguments {
	patchCount: number;
	instanceCount: number;
	patchStart: number;
	baseInstance: number;
}
declare var MTLDrawPatchIndirectArguments: MTLDrawPatchIndirectArguments;

interface MTLDrawPrimitivesIndirectArguments {
	vertexCount: number;
	instanceCount: number;
	vertexStart: number;
	baseInstance: number;
}
declare var MTLDrawPrimitivesIndirectArguments: MTLDrawPrimitivesIndirectArguments;

interface MTLDrawable extends NSObjectProtocol {

	drawableID: number;

	presentedTime: number;

	addPresentedHandler(_: (p1: MTLDrawable) => void): void;

	present(): void;

	presentAfterMinimumDuration(_: number): void;

	presentAtTime(_: number): void;
}
declare var MTLDrawable: {

	prototype: MTLDrawable;
};

interface MTLEvent extends NSObjectProtocol {

	device: MTLDevice;

	setLabel(_: string)

	label: string;
}
declare var MTLEvent: {

	prototype: MTLEvent;
};

enum MTLFeatureSet {

	iOS_GPUFamily1_v1 = 0,

	iOS_GPUFamily2_v1 = 1,

	iOS_GPUFamily1_v2 = 2,

	iOS_GPUFamily2_v2 = 3,

	iOS_GPUFamily3_v1 = 4,

	iOS_GPUFamily1_v3 = 5,

	iOS_GPUFamily2_v3 = 6,

	iOS_GPUFamily3_v2 = 7,

	iOS_GPUFamily1_v4 = 8,

	iOS_GPUFamily2_v4 = 9,

	iOS_GPUFamily3_v3 = 10,

	iOS_GPUFamily4_v1 = 11,

	iOS_GPUFamily1_v5 = 12,

	iOS_GPUFamily2_v5 = 13,

	iOS_GPUFamily3_v4 = 14,

	iOS_GPUFamily4_v2 = 15,

	macOS_GPUFamily1_v1 = 10000,

	OSX_GPUFamily1_v1 = 10000,

	macOS_GPUFamily1_v2 = 10001,

	OSX_GPUFamily1_v2 = 10001,

	macOS_ReadWriteTextureTier2 = 10002,

	OSX_ReadWriteTextureTier2 = 10002,

	macOS_GPUFamily1_v3 = 10003,

	macOS_GPUFamily1_v4 = 10004,

	macOS_GPUFamily2_v1 = 10005,

	tvOS_GPUFamily1_v1 = 30000,

	TVOS_GPUFamily1_v1 = 30000,

	tvOS_GPUFamily1_v2 = 30001,

	tvOS_GPUFamily1_v3 = 30002,

	tvOS_GPUFamily1_v4 = 30004
}


interface MTLFence extends NSObjectProtocol {

	device: MTLDevice;

	setLabel(_: string)

	label: string;
}
declare var MTLFence: {

	prototype: MTLFence;
};

interface MTLFunction extends NSObjectProtocol {

	device: MTLDevice;

	functionConstantsDictionary: NSDictionary<string, MTLFunctionConstant>;

	functionType: MTLFunctionType;

	setLabel(_: string)

	label: string;

	name: string;

	patchControlPointCount: number;

	patchType: MTLPatchType;

	stageInputAttributes: NSArray<MTLAttribute>;

	vertexAttributes: NSArray<MTLVertexAttribute>;

	newArgumentEncoderWithBufferIndex(_: number): MTLArgumentEncoder;

	newArgumentEncoderWithBufferIndexReflection(_: number, reflection?: MTLArgument): MTLArgumentEncoder;
}
declare var MTLFunction: {

	prototype: MTLFunction;
};

declare class MTLFunctionConstant extends NSObject {

	readonly index: number;

	readonly name: string;

	readonly required: boolean;

	readonly type: MTLDataType;
}

declare class MTLFunctionConstantValues extends NSObject implements NSCopying {

	copyWithZone(_?: any): any;

	reset(): void;

	setConstantValueTypeAtIndex(_: any, type: MTLDataType, index: number): void;

	setConstantValueTypeWithName(_: any, type: MTLDataType, withName: string): void;

	setConstantValuesTypeWithRange(_: any, type: MTLDataType, withRange: NSRange): void;
}

enum MTLFunctionType {

	Vertex = 1,

	Fragment = 2,

	Kernel = 3
}


enum MTLGPUFamily {

	Apple1 = 1001,

	Apple2 = 1002,

	Apple3 = 1003,

	Apple4 = 1004,

	Apple5 = 1005,

	Mac1 = 2001,

	Mac2 = 2002,

	Common1 = 3001,

	Common2 = 3002,

	Common3 = 3003,

	MacCatalyst1 = 4001,

	MacCatalyst2 = 4002
}


enum MTLHazardTrackingMode {

	Default = 0,

	Untracked = 1,

	Tracked = 2
}


interface MTLHeap extends NSObjectProtocol {

	cpuCacheMode: MTLCPUCacheMode;

	currentAllocatedSize: number;

	device: MTLDevice;

	hazardTrackingMode: MTLHazardTrackingMode;

	setLabel(_: string)

	label: string;

	resourceOptions: MTLResourceOptions;

	size: number;

	storageMode: MTLStorageMode;

	type: MTLHeapType;

	usedSize: number;

	maxAvailableSizeWithAlignment(_: number): number;

	newBufferWithLengthOptions(_: number, options: MTLResourceOptions): MTLBuffer;

	newBufferWithLengthOptionsOffset(_: number, options: MTLResourceOptions, offset: number): MTLBuffer;

	newTextureWithDescriptor(_: MTLTextureDescriptor): MTLTexture;

	newTextureWithDescriptorOffset(_: MTLTextureDescriptor, offset: number): MTLTexture;

	setPurgeableState(_: MTLPurgeableState): MTLPurgeableState;
}
declare var MTLHeap: {

	prototype: MTLHeap;
};

declare class MTLHeapDescriptor extends NSObject implements NSCopying {

	setCpuCacheMode(_: MTLCPUCacheMode)

	cpuCacheMode: MTLCPUCacheMode;

	setHazardTrackingMode(_: MTLHazardTrackingMode)

	hazardTrackingMode: MTLHazardTrackingMode;

	setResourceOptions(_: MTLResourceOptions)

	resourceOptions: MTLResourceOptions;

	setSize(_: number)

	size: number;

	setStorageMode(_: MTLStorageMode)

	storageMode: MTLStorageMode;

	setType(_: MTLHeapType)

	type: MTLHeapType;

	copyWithZone(_?: any): any;
}

enum MTLHeapType {

	Automatic = 0,

	Placement = 1
}


enum MTLIndexType {

	UInt16 = 0,

	UInt32 = 1
}


interface MTLIndirectCommandBuffer extends MTLResource {

	size: number;

	indirectRenderCommandAtIndex(_: number): MTLIndirectRenderCommand;

	resetWithRange(_: NSRange): void;
}
declare var MTLIndirectCommandBuffer: {

	prototype: MTLIndirectCommandBuffer;
};

declare class MTLIndirectCommandBufferDescriptor extends NSObject {

	setCommandTypes(_: MTLIndirectCommandType)

	commandTypes: MTLIndirectCommandType;

	setInheritBuffers(_: boolean)

	inheritBuffers: boolean;

	setInheritPipelineState(_: boolean)

	inheritPipelineState: boolean;

	setMaxFragmentBufferBindCount(_: number)

	maxFragmentBufferBindCount: number;

	setMaxVertexBufferBindCount(_: number)

	maxVertexBufferBindCount: number;
}

interface MTLIndirectCommandBufferExecutionRange {
	location: number;
	length: number;
}
declare var MTLIndirectCommandBufferExecutionRange: MTLIndirectCommandBufferExecutionRange;

enum MTLIndirectCommandType {

	Draw = 1,

	DrawIndexed = 2,

	DrawPatches = 4,

	DrawIndexedPatches = 8
}


interface MTLIndirectRenderCommand extends NSObjectProtocol {

	drawIndexedPatchesPatchStartPatchCountPatchIndexBufferPatchIndexBufferOffsetControlPointIndexBufferControlPointIndexBufferOffsetInstanceCountBaseInstanceTessellationFactorBufferTessellationFactorBufferOffsetTessellationFactorBufferInstanceStride(_: number, patchStart: number, patchCount: number, patchIndexBuffer?: MTLBuffer, patchIndexBufferOffset: number, controlPointIndexBuffer: MTLBuffer, controlPointIndexBufferOffset: number, instanceCount: number, baseInstance: number, tessellationFactorBuffer: MTLBuffer, tessellationFactorBufferOffset: number, tessellationFactorBufferInstanceStride: number): void;

	drawIndexedPrimitivesIndexCountIndexTypeIndexBufferIndexBufferOffsetInstanceCountBaseVertexBaseInstance(_: MTLPrimitiveType, indexCount: number, indexType: MTLIndexType, indexBuffer: MTLBuffer, indexBufferOffset: number, instanceCount: number, baseVertex: number, baseInstance: number): void;

	drawPatchesPatchStartPatchCountPatchIndexBufferPatchIndexBufferOffsetInstanceCountBaseInstanceTessellationFactorBufferTessellationFactorBufferOffsetTessellationFactorBufferInstanceStride(_: number, patchStart: number, patchCount: number, patchIndexBuffer?: MTLBuffer, patchIndexBufferOffset: number, instanceCount: number, baseInstance: number, tessellationFactorBuffer: MTLBuffer, tessellationFactorBufferOffset: number, tessellationFactorBufferInstanceStride: number): void;

	drawPrimitivesVertexStartVertexCountInstanceCountBaseInstance(_: MTLPrimitiveType, vertexStart: number, vertexCount: number, instanceCount: number, baseInstance: number): void;

	reset(): void;

	setFragmentBufferOffsetAtIndex(_: MTLBuffer, offset: number, atIndex: number): void;

	setRenderPipelineState(_: MTLRenderPipelineState): void;

	setVertexBufferOffsetAtIndex(_: MTLBuffer, offset: number, atIndex: number): void;
}
declare var MTLIndirectRenderCommand: {

	prototype: MTLIndirectRenderCommand;
};

enum MTLLanguageVersion {

	Version1_0 = 65536,

	Version1_1 = 65537,

	Version1_2 = 65538,

	Version2_0 = 131072,

	Version2_1 = 131073,

	Version2_2 = 131074
}


interface MTLLibrary extends NSObjectProtocol {

	device: MTLDevice;

	functionNames: NSArray<string>;

	setLabel(_: string)

	label: string;

	newFunctionWithName(_: string): MTLFunction;

	newFunctionWithNameConstantValuesCompletionHandler(_: string, constantValues: MTLFunctionConstantValues, completionHandler?: (p1: MTLFunction, p2: NSError) => void): void;

	newFunctionWithNameConstantValuesError(constantValues: string, error: MTLFunctionConstantValues): MTLFunction;
}
declare var MTLLibrary: {

	prototype: MTLLibrary;
};

enum MTLLibraryError {

	Unsupported = 1,

	Internal = 2,

	CompileFailure = 3,

	CompileWarning = 4,

	FunctionNotFound = 5,

	FileNotFound = 6
}


declare var MTLLibraryErrorDomain: string;

enum MTLLoadAction {

	DontCare = 0,

	Load = 1,

	Clear = 2
}


enum MTLMultisampleDepthResolveFilter {

	Sample0 = 0,

	Min = 1,

	Max = 2
}


enum MTLMultisampleStencilResolveFilter {

	Sample0 = 0,

	DepthResolvedSample = 1
}


enum MTLMutability {

	Default = 0,

	Mutable = 1,

	Immutable = 2
}


interface MTLOrigin {
	x: number;
	y: number;
	z: number;
}
declare var MTLOrigin: MTLOrigin;

interface MTLParallelRenderCommandEncoder extends MTLCommandEncoder {

	renderCommandEncoder(): MTLRenderCommandEncoder;

	setColorStoreActionAtIndex(_: MTLStoreAction, atIndex: number): void;

	setColorStoreActionOptionsAtIndex(_: MTLStoreActionOptions, atIndex: number): void;

	setDepthStoreAction(_: MTLStoreAction): void;

	setDepthStoreActionOptions(_: MTLStoreActionOptions): void;

	setStencilStoreAction(_: MTLStoreAction): void;

	setStencilStoreActionOptions(_: MTLStoreActionOptions): void;
}
declare var MTLParallelRenderCommandEncoder: {

	prototype: MTLParallelRenderCommandEncoder;
};

enum MTLPatchType {

	None = 0,

	Triangle = 1,

	Quad = 2
}


declare class MTLPipelineBufferDescriptor extends NSObject implements NSCopying {

	setMutability(_: MTLMutability)

	mutability: MTLMutability;

	copyWithZone(_?: any): any;
}

declare class MTLPipelineBufferDescriptorArray extends NSObject {

	objectAtIndexedSubscript(_: number): MTLPipelineBufferDescriptor;

	setObjectAtIndexedSubscript(_?: MTLPipelineBufferDescriptor, atIndexedSubscript: number): void;
}

enum MTLPipelineOption {

	None = 0,

	ArgumentInfo = 1,

	BufferTypeInfo = 2
}


enum MTLPixelFormat {

	Invalid = 0,

	A8Unorm = 1,

	R8Unorm = 10,

	R8Unorm_sRGB = 11,

	R8Snorm = 12,

	R8Uint = 13,

	R8Sint = 14,

	R16Unorm = 20,

	R16Snorm = 22,

	R16Uint = 23,

	R16Sint = 24,

	R16Float = 25,

	RG8Unorm = 30,

	RG8Unorm_sRGB = 31,

	RG8Snorm = 32,

	RG8Uint = 33,

	RG8Sint = 34,

	B5G6R5Unorm = 40,

	A1BGR5Unorm = 41,

	ABGR4Unorm = 42,

	BGR5A1Unorm = 43,

	R32Uint = 53,

	R32Sint = 54,

	R32Float = 55,

	RG16Unorm = 60,

	RG16Snorm = 62,

	RG16Uint = 63,

	RG16Sint = 64,

	RG16Float = 65,

	RGBA8Unorm = 70,

	RGBA8Unorm_sRGB = 71,

	RGBA8Snorm = 72,

	RGBA8Uint = 73,

	RGBA8Sint = 74,

	BGRA8Unorm = 80,

	BGRA8Unorm_sRGB = 81,

	RGB10A2Unorm = 90,

	RGB10A2Uint = 91,

	RG11B10Float = 92,

	RGB9E5Float = 93,

	BGR10A2Unorm = 94,

	BGR10_XR = 554,

	BGR10_XR_sRGB = 555,

	RG32Uint = 103,

	RG32Sint = 104,

	RG32Float = 105,

	RGBA16Unorm = 110,

	RGBA16Snorm = 112,

	RGBA16Uint = 113,

	RGBA16Sint = 114,

	RGBA16Float = 115,

	BGRA10_XR = 552,

	BGRA10_XR_sRGB = 553,

	RGBA32Uint = 123,

	RGBA32Sint = 124,

	RGBA32Float = 125,

	BC1_RGBA = 130,

	BC1_RGBA_sRGB = 131,

	BC2_RGBA = 132,

	BC2_RGBA_sRGB = 133,

	BC3_RGBA = 134,

	BC3_RGBA_sRGB = 135,

	BC4_RUnorm = 140,

	BC4_RSnorm = 141,

	BC5_RGUnorm = 142,

	BC5_RGSnorm = 143,

	BC6H_RGBFloat = 150,

	BC6H_RGBUfloat = 151,

	BC7_RGBAUnorm = 152,

	BC7_RGBAUnorm_sRGB = 153,

	PVRTC_RGB_2BPP = 160,

	PVRTC_RGB_2BPP_sRGB = 161,

	PVRTC_RGB_4BPP = 162,

	PVRTC_RGB_4BPP_sRGB = 163,

	PVRTC_RGBA_2BPP = 164,

	PVRTC_RGBA_2BPP_sRGB = 165,

	PVRTC_RGBA_4BPP = 166,

	PVRTC_RGBA_4BPP_sRGB = 167,

	EAC_R11Unorm = 170,

	EAC_R11Snorm = 172,

	EAC_RG11Unorm = 174,

	EAC_RG11Snorm = 176,

	EAC_RGBA8 = 178,

	EAC_RGBA8_sRGB = 179,

	ETC2_RGB8 = 180,

	ETC2_RGB8_sRGB = 181,

	ETC2_RGB8A1 = 182,

	ETC2_RGB8A1_sRGB = 183,

	ASTC_4x4_sRGB = 186,

	ASTC_5x4_sRGB = 187,

	ASTC_5x5_sRGB = 188,

	ASTC_6x5_sRGB = 189,

	ASTC_6x6_sRGB = 190,

	ASTC_8x5_sRGB = 192,

	ASTC_8x6_sRGB = 193,

	ASTC_8x8_sRGB = 194,

	ASTC_10x5_sRGB = 195,

	ASTC_10x6_sRGB = 196,

	ASTC_10x8_sRGB = 197,

	ASTC_10x10_sRGB = 198,

	ASTC_12x10_sRGB = 199,

	ASTC_12x12_sRGB = 200,

	ASTC_4x4_LDR = 204,

	ASTC_5x4_LDR = 205,

	ASTC_5x5_LDR = 206,

	ASTC_6x5_LDR = 207,

	ASTC_6x6_LDR = 208,

	ASTC_8x5_LDR = 210,

	ASTC_8x6_LDR = 211,

	ASTC_8x8_LDR = 212,

	ASTC_10x5_LDR = 213,

	ASTC_10x6_LDR = 214,

	ASTC_10x8_LDR = 215,

	ASTC_10x10_LDR = 216,

	ASTC_12x10_LDR = 217,

	ASTC_12x12_LDR = 218,

	GBGR422 = 240,

	BGRG422 = 241,

	Depth16Unorm = 250,

	Depth32Float = 252,

	Stencil8 = 253,

	Depth24Unorm_Stencil8 = 255,

	Depth32Float_Stencil8 = 260,

	X32_Stencil8 = 261,

	X24_Stencil8 = 262
}


declare class MTLPointerType extends MTLType {

	readonly access: MTLArgumentAccess;

	readonly alignment: number;

	readonly dataSize: number;

	readonly elementIsArgumentBuffer: boolean;

	readonly elementType: MTLDataType;

	elementArrayType(): MTLArrayType;

	elementStructType(): MTLStructType;
}

enum MTLPrimitiveTopologyClass {

	Unspecified = 0,

	Point = 1,

	Line = 2,

	Triangle = 3
}


enum MTLPrimitiveType {

	Point = 0,

	Line = 1,

	LineStrip = 2,

	Triangle = 3,

	TriangleStrip = 4
}


enum MTLPurgeableState {

	KeepCurrent = 1,

	NonVolatile = 2,

	Volatile = 3,

	Empty = 4
}


interface MTLQuadTessellationFactorsHalf {
	edgeTessellationFactor: number;
	insideTessellationFactor: number;
}
declare var MTLQuadTessellationFactorsHalf: MTLQuadTessellationFactorsHalf;

declare class MTLRasterizationRateLayerArray extends NSObject {

	objectAtIndexedSubscript(_: number): MTLRasterizationRateLayerDescriptor;

	setObjectAtIndexedSubscript(_?: MTLRasterizationRateLayerDescriptor, atIndexedSubscript: number): void;
}

declare class MTLRasterizationRateLayerDescriptor extends NSObject implements NSCopying {

	readonly horizontal: MTLRasterizationRateSampleArray;

	readonly horizontalSampleStorage: number;

	readonly sampleCount: MTLSize;

	readonly vertical: MTLRasterizationRateSampleArray;

	readonly verticalSampleStorage: number;

	static create(sampleCount: MTLSize);

	static create(sampleCount: MTLSize, horizontal: number, vertical: number);

	copyWithZone(_?: any): any;
}

interface MTLRasterizationRateMap extends NSObjectProtocol {

	device: MTLDevice;

	label: string;

	layerCount: number;

	parameterBufferSizeAndAlign: MTLSizeAndAlign;

	physicalGranularity: MTLSize;

	screenSize: MTLSize;

	copyParameterDataToBufferOffset(_: MTLBuffer, offset: number): void;

	mapPhysicalToScreenCoordinatesForLayer(_: MTLSamplePosition, forLayer: number): MTLSamplePosition;

	mapScreenToPhysicalCoordinatesForLayer(_: MTLSamplePosition, forLayer: number): MTLSamplePosition;

	physicalSizeForLayer(_: number): MTLSize;
}
declare var MTLRasterizationRateMap: {

	prototype: MTLRasterizationRateMap;
};

declare class MTLRasterizationRateMapDescriptor extends NSObject implements NSCopying {

	static rasterizationRateMapDescriptorWithScreenSize(_: MTLSize): MTLRasterizationRateMapDescriptor;

	static rasterizationRateMapDescriptorWithScreenSizeLayer(_: MTLSize, layer: MTLRasterizationRateLayerDescriptor): MTLRasterizationRateMapDescriptor;

	static rasterizationRateMapDescriptorWithScreenSizeLayerCountLayers(_: MTLSize, layerCount: number, layers: MTLRasterizationRateLayerDescriptor): MTLRasterizationRateMapDescriptor;

	setLabel(_: string)

	label: string;

	readonly layerCount: number;

	readonly layers: MTLRasterizationRateLayerArray;

	setScreenSize(_: MTLSize)

	screenSize: MTLSize;

	copyWithZone(_?: any): any;

	layerAtIndex(_: number): MTLRasterizationRateLayerDescriptor;

	setLayerAtIndex(_?: MTLRasterizationRateLayerDescriptor, atIndex: number): void;
}

declare class MTLRasterizationRateSampleArray extends NSObject {

	objectAtIndexedSubscript(_: number): number;

	setObjectAtIndexedSubscript(_: number, atIndexedSubscript: number): void;
}

enum MTLReadWriteTextureTier {

	TierNone = 0,

	Tier1 = 1,

	Tier2 = 2
}


interface MTLRegion {
	origin: MTLOrigin;
	size: MTLSize;
}
declare var MTLRegion: MTLRegion;

declare function MTLRemoveDeviceObserver(observer: NSObjectProtocol): void;

interface MTLRenderCommandEncoder extends MTLCommandEncoder {

	drawIndexedPatchesPatchIndexBufferPatchIndexBufferOffsetControlPointIndexBufferControlPointIndexBufferOffsetIndirectBufferIndirectBufferOffset(_: number, patchIndexBuffer?: MTLBuffer, patchIndexBufferOffset: number, controlPointIndexBuffer: MTLBuffer, controlPointIndexBufferOffset: number, indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

	drawIndexedPatchesPatchStartPatchCountPatchIndexBufferPatchIndexBufferOffsetControlPointIndexBufferControlPointIndexBufferOffsetInstanceCountBaseInstance(_: number, patchStart: number, patchCount: number, patchIndexBuffer?: MTLBuffer, patchIndexBufferOffset: number, controlPointIndexBuffer: MTLBuffer, controlPointIndexBufferOffset: number, instanceCount: number, baseInstance: number): void;

	drawIndexedPrimitivesIndexCountIndexTypeIndexBufferIndexBufferOffset(_: MTLPrimitiveType, indexCount: number, indexType: MTLIndexType, indexBuffer: MTLBuffer, indexBufferOffset: number): void;

	drawIndexedPrimitivesIndexCountIndexTypeIndexBufferIndexBufferOffsetInstanceCount(_: MTLPrimitiveType, indexCount: number, indexType: MTLIndexType, indexBuffer: MTLBuffer, indexBufferOffset: number, instanceCount: number): void;

	drawIndexedPrimitivesIndexCountIndexTypeIndexBufferIndexBufferOffsetInstanceCountBaseVertexBaseInstance(_: MTLPrimitiveType, indexCount: number, indexType: MTLIndexType, indexBuffer: MTLBuffer, indexBufferOffset: number, instanceCount: number, baseVertex: number, baseInstance: number): void;

	drawIndexedPrimitivesIndexTypeIndexBufferIndexBufferOffsetIndirectBufferIndirectBufferOffset(_: MTLPrimitiveType, indexType: MTLIndexType, indexBuffer: MTLBuffer, indexBufferOffset: number, indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

	drawPatchesPatchIndexBufferPatchIndexBufferOffsetIndirectBufferIndirectBufferOffset(_: number, patchIndexBuffer?: MTLBuffer, patchIndexBufferOffset: number, indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

	drawPatchesPatchStartPatchCountPatchIndexBufferPatchIndexBufferOffsetInstanceCountBaseInstance(_: number, patchStart: number, patchCount: number, patchIndexBuffer?: MTLBuffer, patchIndexBufferOffset: number, instanceCount: number, baseInstance: number): void;

	drawPrimitivesIndirectBufferIndirectBufferOffset(_: MTLPrimitiveType, indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

	drawPrimitivesVertexStartVertexCount(_: MTLPrimitiveType, vertexStart: number, vertexCount: number): void;

	drawPrimitivesVertexStartVertexCountInstanceCount(_: MTLPrimitiveType, vertexStart: number, vertexCount: number, instanceCount: number): void;

	drawPrimitivesVertexStartVertexCountInstanceCountBaseInstance(_: MTLPrimitiveType, vertexStart: number, vertexCount: number, instanceCount: number, baseInstance: number): void;

	executeCommandsInBufferIndirectBufferIndirectBufferOffset(_: MTLIndirectCommandBuffer, indirectBuffer: MTLBuffer, indirectBufferOffset: number): void;

	executeCommandsInBufferWithRange(_: MTLIndirectCommandBuffer, withRange: NSRange): void;

	memoryBarrierWithResourcesCountAfterStagesBeforeStages(_: MTLResource, count: number, afterStages: MTLRenderStages, beforeStages: MTLRenderStages): void;

	memoryBarrierWithScopeAfterStagesBeforeStages(_: MTLBarrierScope, afterStages: MTLRenderStages, beforeStages: MTLRenderStages): void;

	sampleCountersInBufferAtSampleIndexWithBarrier(_: MTLCounterSampleBuffer, atSampleIndex: number, withBarrier: boolean): void;

	setBlendColorRedGreenBlueAlpha(_: number, green: number, blue: number, alpha: number): void;

	setColorStoreActionAtIndex(_: MTLStoreAction, atIndex: number): void;

	setColorStoreActionOptionsAtIndex(_: MTLStoreActionOptions, atIndex: number): void;

	setCullMode(_: MTLCullMode): void;

	setDepthBiasSlopeScaleClamp(_: number, slopeScale: number, clamp: number): void;

	setDepthClipMode(_: MTLDepthClipMode): void;

	setDepthStencilState(_?: MTLDepthStencilState): void;

	setDepthStoreAction(_: MTLStoreAction): void;

	setDepthStoreActionOptions(_: MTLStoreActionOptions): void;

	setFragmentBufferOffsetAtIndex(_?: MTLBuffer, offset: number, atIndex: number): void;

	setFragmentBufferOffsetAtIndex(_: number, atIndex: number): void;

	setFragmentBuffersOffsetsWithRange(_?: MTLBuffer, offsets: number, withRange: NSRange): void;

	setFragmentBytesLengthAtIndex(_: any, length: number, atIndex: number): void;

	setFragmentSamplerStateAtIndex(_?: MTLSamplerState, atIndex: number): void;

	setFragmentSamplerStateLodMinClampLodMaxClampAtIndex(_?: MTLSamplerState, lodMinClamp: number, lodMaxClamp: number, atIndex: number): void;

	setFragmentSamplerStatesLodMinClampsLodMaxClampsWithRange(_?: MTLSamplerState, lodMinClamps: number, lodMaxClamps: number, withRange: NSRange): void;

	setFragmentSamplerStatesWithRange(_?: MTLSamplerState, withRange: NSRange): void;

	setFragmentTextureAtIndex(_?: MTLTexture, atIndex: number): void;

	setFragmentTexturesWithRange(_?: MTLTexture, withRange: NSRange): void;

	setFrontFacingWinding(_: MTLWinding): void;

	setRenderPipelineState(_: MTLRenderPipelineState): void;

	setScissorRect(_: MTLScissorRect): void;

	setScissorRectsCount(_: MTLScissorRect, count: number): void;

	setStencilFrontReferenceValueBackReferenceValue(_: number, backReferenceValue: number): void;

	setStencilReferenceValue(_: number): void;

	setStencilStoreAction(_: MTLStoreAction): void;

	setStencilStoreActionOptions(_: MTLStoreActionOptions): void;

	setTessellationFactorBufferOffsetInstanceStride(_?: MTLBuffer, offset: number, instanceStride: number): void;

	setTessellationFactorScale(_: number): void;

	setTriangleFillMode(_: MTLTriangleFillMode): void;

	setVertexAmplificationCountViewMappings(_: number, viewMappings?: MTLVertexAmplificationViewMapping): void;

	setVertexBufferOffsetAtIndex(_?: MTLBuffer, offset: number, atIndex: number): void;

	setVertexBufferOffsetAtIndex(_: number, atIndex: number): void;

	setVertexBuffersOffsetsWithRange(_?: MTLBuffer, offsets: number, withRange: NSRange): void;

	setVertexBytesLengthAtIndex(_: any, length: number, atIndex: number): void;

	setVertexSamplerStateAtIndex(_?: MTLSamplerState, atIndex: number): void;

	setVertexSamplerStateLodMinClampLodMaxClampAtIndex(_?: MTLSamplerState, lodMinClamp: number, lodMaxClamp: number, atIndex: number): void;

	setVertexSamplerStatesLodMinClampsLodMaxClampsWithRange(_?: MTLSamplerState, lodMinClamps: number, lodMaxClamps: number, withRange: NSRange): void;

	setVertexSamplerStatesWithRange(_?: MTLSamplerState, withRange: NSRange): void;

	setVertexTextureAtIndex(_?: MTLTexture, atIndex: number): void;

	setVertexTexturesWithRange(_?: MTLTexture, withRange: NSRange): void;

	setViewport(_: MTLViewport): void;

	setViewportsCount(_: MTLViewport, count: number): void;

	setVisibilityResultModeOffset(_: MTLVisibilityResultMode, offset: number): void;

	updateFenceAfterStages(_: MTLFence, afterStages: MTLRenderStages): void;

	useHeap(_: MTLHeap): void;

	useHeapStages(_: MTLHeap, stages: MTLRenderStages): void;

	useHeapsCount(_: MTLHeap, count: number): void;

	useHeapsCountStages(_: MTLHeap, count: number, stages: MTLRenderStages): void;

	useResourceUsage(_: MTLResource, usage: MTLResourceUsage): void;

	useResourceUsageStages(_: MTLResource, usage: MTLResourceUsage, stages: MTLRenderStages): void;

	useResourcesCountUsage(_: MTLResource, count: number, usage: MTLResourceUsage): void;

	useResourcesCountUsageStages(_: MTLResource, count: number, usage: MTLResourceUsage, stages: MTLRenderStages): void;

	waitForFenceBeforeStages(_: MTLFence, beforeStages: MTLRenderStages): void;
}
declare var MTLRenderCommandEncoder: {

	prototype: MTLRenderCommandEncoder;
};

declare class MTLRenderPassAttachmentDescriptor extends NSObject implements NSCopying {

	setDepthPlane(_: number)

	depthPlane: number;

	setLevel(_: number)

	level: number;

	setLoadAction(_: MTLLoadAction)

	loadAction: MTLLoadAction;

	setResolveDepthPlane(_: number)

	resolveDepthPlane: number;

	setResolveLevel(_: number)

	resolveLevel: number;

	setResolveSlice(_: number)

	resolveSlice: number;

	setResolveTexture(_: MTLTexture)

	resolveTexture: MTLTexture;

	setSlice(_: number)

	slice: number;

	setStoreAction(_: MTLStoreAction)

	storeAction: MTLStoreAction;

	setStoreActionOptions(_: MTLStoreActionOptions)

	storeActionOptions: MTLStoreActionOptions;

	setTexture(_: MTLTexture)

	texture: MTLTexture;

	copyWithZone(_?: any): any;
}

declare class MTLRenderPassColorAttachmentDescriptor extends MTLRenderPassAttachmentDescriptor {

	setClearColor(_: MTLClearColor)

	clearColor: MTLClearColor;
}

declare class MTLRenderPassColorAttachmentDescriptorArray extends NSObject {

	objectAtIndexedSubscript(_: number): MTLRenderPassColorAttachmentDescriptor;

	setObjectAtIndexedSubscript(_?: MTLRenderPassColorAttachmentDescriptor, atIndexedSubscript: number): void;
}

declare class MTLRenderPassDepthAttachmentDescriptor extends MTLRenderPassAttachmentDescriptor {

	setClearDepth(_: number)

	clearDepth: number;

	setDepthResolveFilter(_: MTLMultisampleDepthResolveFilter)

	depthResolveFilter: MTLMultisampleDepthResolveFilter;
}

declare class MTLRenderPassDescriptor extends NSObject implements NSCopying {

	static renderPassDescriptor(): MTLRenderPassDescriptor;

	readonly colorAttachments: MTLRenderPassColorAttachmentDescriptorArray;

	setDefaultRasterSampleCount(_: number)

	defaultRasterSampleCount: number;

	setDepthAttachment(_: MTLRenderPassDepthAttachmentDescriptor)

	depthAttachment: MTLRenderPassDepthAttachmentDescriptor;

	setRasterizationRateMap(_: MTLRasterizationRateMap)

	rasterizationRateMap: MTLRasterizationRateMap;

	setRenderTargetArrayLength(_: number)

	renderTargetArrayLength: number;

	setRenderTargetHeight(_: number)

	renderTargetHeight: number;

	setRenderTargetWidth(_: number)

	renderTargetWidth: number;

	setStencilAttachment(_: MTLRenderPassStencilAttachmentDescriptor)

	stencilAttachment: MTLRenderPassStencilAttachmentDescriptor;

	setVisibilityResultBuffer(_: MTLBuffer)

	visibilityResultBuffer: MTLBuffer;

	copyWithZone(_?: any): any;

	getSamplePositionsCount(_?: MTLSamplePosition, count: number): number;

	setSamplePositionsCount(_?: MTLSamplePosition, count: number): void;
}

declare class MTLRenderPassStencilAttachmentDescriptor extends MTLRenderPassAttachmentDescriptor {

	setClearStencil(_: number)

	clearStencil: number;

	setStencilResolveFilter(_: MTLMultisampleStencilResolveFilter)

	stencilResolveFilter: MTLMultisampleStencilResolveFilter;
}

declare class MTLRenderPipelineColorAttachmentDescriptor extends NSObject implements NSCopying {

	setAlphaBlendOperation(_: MTLBlendOperation)

	alphaBlendOperation: MTLBlendOperation;

	setBlendingEnabled(_: boolean)

	isBlendingEnabled: boolean;

	setDestinationAlphaBlendFactor(_: MTLBlendFactor)

	destinationAlphaBlendFactor: MTLBlendFactor;

	setDestinationRGBBlendFactor(_: MTLBlendFactor)

	destinationRGBBlendFactor: MTLBlendFactor;

	setPixelFormat(_: MTLPixelFormat)

	pixelFormat: MTLPixelFormat;

	setRgbBlendOperation(_: MTLBlendOperation)

	rgbBlendOperation: MTLBlendOperation;

	setSourceAlphaBlendFactor(_: MTLBlendFactor)

	sourceAlphaBlendFactor: MTLBlendFactor;

	setSourceRGBBlendFactor(_: MTLBlendFactor)

	sourceRGBBlendFactor: MTLBlendFactor;

	setWriteMask(_: MTLColorWriteMask)

	writeMask: MTLColorWriteMask;

	copyWithZone(_?: any): any;
}

declare class MTLRenderPipelineColorAttachmentDescriptorArray extends NSObject {

	objectAtIndexedSubscript(_: number): MTLRenderPipelineColorAttachmentDescriptor;

	setObjectAtIndexedSubscript(_?: MTLRenderPipelineColorAttachmentDescriptor, atIndexedSubscript: number): void;
}

declare class MTLRenderPipelineDescriptor extends NSObject implements NSCopying {

	setAlphaToCoverageEnabled(_: boolean)

	isAlphaToCoverageEnabled: boolean;

	setAlphaToOneEnabled(_: boolean)

	isAlphaToOneEnabled: boolean;

	readonly colorAttachments: MTLRenderPipelineColorAttachmentDescriptorArray;

	setDepthAttachmentPixelFormat(_: MTLPixelFormat)

	depthAttachmentPixelFormat: MTLPixelFormat;

	readonly fragmentBuffers: MTLPipelineBufferDescriptorArray;

	setFragmentFunction(_: MTLFunction)

	fragmentFunction: MTLFunction;

	setInputPrimitiveTopology(_: MTLPrimitiveTopologyClass)

	inputPrimitiveTopology: MTLPrimitiveTopologyClass;

	setLabel(_: string)

	label: string;

	setMaxTessellationFactor(_: number)

	maxTessellationFactor: number;

	setMaxVertexAmplificationCount(_: number)

	maxVertexAmplificationCount: number;

	setRasterSampleCount(_: number)

	rasterSampleCount: number;

	setRasterizationEnabled(_: boolean)

	isRasterizationEnabled: boolean;

	setSampleCount(_: number)

	sampleCount: number;

	setStencilAttachmentPixelFormat(_: MTLPixelFormat)

	stencilAttachmentPixelFormat: MTLPixelFormat;

	setSupportIndirectCommandBuffers(_: boolean)

	supportIndirectCommandBuffers: boolean;

	setTessellationControlPointIndexType(_: MTLTessellationControlPointIndexType)

	tessellationControlPointIndexType: MTLTessellationControlPointIndexType;

	setTessellationFactorFormat(_: MTLTessellationFactorFormat)

	tessellationFactorFormat: MTLTessellationFactorFormat;

	setTessellationFactorScaleEnabled(_: boolean)

	isTessellationFactorScaleEnabled: boolean;

	setTessellationFactorStepFunction(_: MTLTessellationFactorStepFunction)

	tessellationFactorStepFunction: MTLTessellationFactorStepFunction;

	setTessellationOutputWindingOrder(_: MTLWinding)

	tessellationOutputWindingOrder: MTLWinding;

	setTessellationPartitionMode(_: MTLTessellationPartitionMode)

	tessellationPartitionMode: MTLTessellationPartitionMode;

	readonly vertexBuffers: MTLPipelineBufferDescriptorArray;

	setVertexDescriptor(_: MTLVertexDescriptor)

	vertexDescriptor: MTLVertexDescriptor;

	setVertexFunction(_: MTLFunction)

	vertexFunction: MTLFunction;

	copyWithZone(_?: any): any;

	reset(): void;
}

declare class MTLRenderPipelineReflection extends NSObject {

	readonly fragmentArguments: NSArray<MTLArgument>;

	readonly vertexArguments: NSArray<MTLArgument>;
}

interface MTLRenderPipelineState extends NSObjectProtocol {

	device: MTLDevice;

	label: string;

	supportIndirectCommandBuffers: boolean;
}
declare var MTLRenderPipelineState: {

	prototype: MTLRenderPipelineState;
};

enum MTLRenderStages {

	Vertex = 1,

	Fragment = 2
}


interface MTLResource extends NSObjectProtocol {

	allocatedSize: number;

	cpuCacheMode: MTLCPUCacheMode;

	device: MTLDevice;

	hazardTrackingMode: MTLHazardTrackingMode;

	heap: MTLHeap;

	heapOffset: number;

	setLabel(_: string)

	label: string;

	resourceOptions: MTLResourceOptions;

	storageMode: MTLStorageMode;

	isAliasable(): boolean;

	makeAliasable(): void;

	setPurgeableState(_: MTLPurgeableState): MTLPurgeableState;
}
declare var MTLResource: {

	prototype: MTLResource;
};

enum MTLResourceOptions {

	CPUCacheModeDefaultCache = 0,

	CPUCacheModeWriteCombined = 1,

	StorageModeShared = 0,

	StorageModeManaged = 16,

	StorageModePrivate = 32,

	StorageModeMemoryless = 48,

	HazardTrackingModeDefault = 0,

	HazardTrackingModeUntracked = 256,

	HazardTrackingModeTracked = 512,

	OptionCPUCacheModeDefault = 0,

	OptionCPUCacheModeWriteCombined = 1
}


enum MTLResourceUsage {

	Read = 1,

	Write = 2,

	Sample = 4
}


interface MTLSamplePosition {
	x: number;
	y: number;
}
declare var MTLSamplePosition: MTLSamplePosition;

enum MTLSamplerAddressMode {

	ClampToEdge = 0,

	MirrorClampToEdge = 1,

	Repeat = 2,

	MirrorRepeat = 3,

	ClampToZero = 4,

	ClampToBorderColor = 5
}


enum MTLSamplerBorderColor {

	TransparentBlack = 0,

	OpaqueBlack = 1,

	OpaqueWhite = 2
}


declare class MTLSamplerDescriptor extends NSObject implements NSCopying {

	setBorderColor(_: MTLSamplerBorderColor)

	borderColor: MTLSamplerBorderColor;

	setCompareFunction(_: MTLCompareFunction)

	compareFunction: MTLCompareFunction;

	setLabel(_: string)

	label: string;

	setLodMaxClamp(_: number)

	lodMaxClamp: number;

	setLodMinClamp(_: number)

	lodMinClamp: number;

	setMagFilter(_: MTLSamplerMinMagFilter)

	magFilter: MTLSamplerMinMagFilter;

	setMaxAnisotropy(_: number)

	maxAnisotropy: number;

	setMinFilter(_: MTLSamplerMinMagFilter)

	minFilter: MTLSamplerMinMagFilter;

	setMipFilter(_: MTLSamplerMipFilter)

	mipFilter: MTLSamplerMipFilter;

	setNormalizedCoordinates(_: boolean)

	normalizedCoordinates: boolean;

	setRAddressMode(_: MTLSamplerAddressMode)

	rAddressMode: MTLSamplerAddressMode;

	setSAddressMode(_: MTLSamplerAddressMode)

	sAddressMode: MTLSamplerAddressMode;

	setSupportArgumentBuffers(_: boolean)

	supportArgumentBuffers: boolean;

	setTAddressMode(_: MTLSamplerAddressMode)

	tAddressMode: MTLSamplerAddressMode;

	copyWithZone(_?: any): any;
}

enum MTLSamplerMinMagFilter {

	Nearest = 0,

	Linear = 1
}


enum MTLSamplerMipFilter {

	NotMipmapped = 0,

	Nearest = 1,

	Linear = 2
}


interface MTLSamplerState extends NSObjectProtocol {

	device: MTLDevice;

	label: string;
}
declare var MTLSamplerState: {

	prototype: MTLSamplerState;
};

interface MTLScissorRect {
	x: number;
	y: number;
	width: number;
	height: number;
}
declare var MTLScissorRect: MTLScissorRect;

interface MTLSharedEvent extends MTLEvent {

	setSignaledValue(_: number)

	signaledValue: number;

	newSharedEventHandle(): MTLSharedEventHandle;

	notifyListenerAtValueBlock(_: MTLSharedEventListener, atValue: number, block: (p1: MTLSharedEvent, p2: number) => void): void;
}
declare var MTLSharedEvent: {

	prototype: MTLSharedEvent;
};

declare class MTLSharedEventHandle extends NSObject implements NSSecureCoding {

	readonly label: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class MTLSharedEventListener extends NSObject {

	readonly dispatchQueue: NSObject;

	static create(dispatchQueue: NSObject);
}

declare class MTLSharedTextureHandle extends NSObject implements NSSecureCoding {

	readonly device: MTLDevice;

	readonly label: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

interface MTLSize {
	width: number;
	height: number;
	depth: number;
}
declare var MTLSize: MTLSize;

interface MTLSizeAndAlign {
	size: number;
	align: number;
}
declare var MTLSizeAndAlign: MTLSizeAndAlign;

interface MTLStageInRegionIndirectArguments {
	stageInOrigin: number;
	stageInSize: number;
}
declare var MTLStageInRegionIndirectArguments: MTLStageInRegionIndirectArguments;

declare class MTLStageInputOutputDescriptor extends NSObject implements NSCopying {

	static stageInputOutputDescriptor(): MTLStageInputOutputDescriptor;

	readonly attributes: MTLAttributeDescriptorArray;

	setIndexBufferIndex(_: number)

	indexBufferIndex: number;

	setIndexType(_: MTLIndexType)

	indexType: MTLIndexType;

	readonly layouts: MTLBufferLayoutDescriptorArray;

	copyWithZone(_?: any): any;

	reset(): void;
}

declare class MTLStencilDescriptor extends NSObject implements NSCopying {

	setDepthFailureOperation(_: MTLStencilOperation)

	depthFailureOperation: MTLStencilOperation;

	setDepthStencilPassOperation(_: MTLStencilOperation)

	depthStencilPassOperation: MTLStencilOperation;

	setReadMask(_: number)

	readMask: number;

	setStencilCompareFunction(_: MTLCompareFunction)

	stencilCompareFunction: MTLCompareFunction;

	setStencilFailureOperation(_: MTLStencilOperation)

	stencilFailureOperation: MTLStencilOperation;

	setWriteMask(_: number)

	writeMask: number;

	copyWithZone(_?: any): any;
}

enum MTLStencilOperation {

	Keep = 0,

	Zero = 1,

	Replace = 2,

	IncrementClamp = 3,

	DecrementClamp = 4,

	Invert = 5,

	IncrementWrap = 6,

	DecrementWrap = 7
}


enum MTLStepFunction {

	Constant = 0,

	PerVertex = 1,

	PerInstance = 2,

	PerPatch = 3,

	PerPatchControlPoint = 4,

	ThreadPositionInGridX = 5,

	ThreadPositionInGridY = 6,

	ThreadPositionInGridXIndexed = 7,

	ThreadPositionInGridYIndexed = 8
}


enum MTLStorageMode {

	Shared = 0,

	Managed = 1,

	Private = 2,

	Memoryless = 3
}


enum MTLStoreAction {

	DontCare = 0,

	Store = 1,

	MultisampleResolve = 2,

	StoreAndMultisampleResolve = 3,

	Unknown = 4,

	CustomSampleDepthStore = 5
}


enum MTLStoreActionOptions {

	None = 0,

	CustomSamplePositions = 1
}


declare class MTLStructMember extends NSObject {

	readonly argumentIndex: number;

	readonly dataType: MTLDataType;

	readonly name: string;

	readonly offset: number;

	arrayType(): MTLArrayType;

	pointerType(): MTLPointerType;

	structType(): MTLStructType;

	textureReferenceType(): MTLTextureReferenceType;
}

declare class MTLStructType extends MTLType {

	readonly members: NSArray<MTLStructMember>;

	memberByName(_: string): MTLStructMember;
}

enum MTLTessellationControlPointIndexType {

	None = 0,

	UInt16 = 1,

	UInt32 = 2
}


enum MTLTessellationFactorFormat {

	Half = 0
}


enum MTLTessellationFactorStepFunction {

	Constant = 0,

	PerPatch = 1,

	PerInstance = 2,

	PerPatchAndPerInstance = 3
}


enum MTLTessellationPartitionMode {

	Pow2 = 0,

	Integer = 1,

	FractionalOdd = 2,

	FractionalEven = 3
}


interface MTLTexture extends MTLResource {

	allowGPUOptimizedContents: boolean;

	arrayLength: number;

	buffer: MTLBuffer;

	bufferBytesPerRow: number;

	bufferOffset: number;

	depth: number;

	isFramebufferOnly: boolean;

	height: number;

	iosurface: any;

	iosurfacePlane: number;

	mipmapLevelCount: number;

	parentRelativeLevel: number;

	parentRelativeSlice: number;

	parentTexture: MTLTexture;

	pixelFormat: MTLPixelFormat;

	remoteStorageTexture: MTLTexture;

	sampleCount: number;

	isShareable: boolean;

	swizzle: MTLTextureSwizzleChannels;

	textureType: MTLTextureType;

	usage: MTLTextureUsage;

	width: number;

	getBytesBytesPerRowBytesPerImageFromRegionMipmapLevelSlice(_: any, bytesPerRow: number, bytesPerImage: number, fromRegion: MTLRegion, mipmapLevel: number, slice: number): void;

	getBytesBytesPerRowFromRegionMipmapLevel(_: any, bytesPerRow: number, fromRegion: MTLRegion, mipmapLevel: number): void;

	newRemoteTextureViewForDevice(_: MTLDevice): MTLTexture;

	newSharedTextureHandle(): MTLSharedTextureHandle;

	newTextureViewWithPixelFormat(_: MTLPixelFormat): MTLTexture;

	newTextureViewWithPixelFormatTextureTypeLevelsSlices(_: MTLPixelFormat, textureType: MTLTextureType, levels: NSRange, slices: NSRange): MTLTexture;

	newTextureViewWithPixelFormatTextureTypeLevelsSlicesSwizzle(_: MTLPixelFormat, textureType: MTLTextureType, levels: NSRange, slices: NSRange, swizzle: MTLTextureSwizzleChannels): MTLTexture;

	replaceRegionMipmapLevelSliceWithBytesBytesPerRowBytesPerImage(_: MTLRegion, mipmapLevel: number, slice: number, withBytes: any, bytesPerRow: number, bytesPerImage: number): void;

	replaceRegionMipmapLevelWithBytesBytesPerRow(_: MTLRegion, mipmapLevel: number, withBytes: any, bytesPerRow: number): void;
}
declare var MTLTexture: {

	prototype: MTLTexture;
};

declare class MTLTextureDescriptor extends NSObject implements NSCopying {

	static texture2DDescriptorWithPixelFormatWidthHeightMipmapped(pixelFormat: MTLPixelFormat, width: number, height: number, mipmapped: boolean): MTLTextureDescriptor;

	static textureBufferDescriptorWithPixelFormatWidthResourceOptionsUsage(_: MTLPixelFormat, width: number, resourceOptions: MTLResourceOptions, usage: MTLTextureUsage): MTLTextureDescriptor;

	static textureCubeDescriptorWithPixelFormatSizeMipmapped(pixelFormat: MTLPixelFormat, size: number, mipmapped: boolean): MTLTextureDescriptor;

	setAllowGPUOptimizedContents(_: boolean)

	allowGPUOptimizedContents: boolean;

	setArrayLength(_: number)

	arrayLength: number;

	setCpuCacheMode(_: MTLCPUCacheMode)

	cpuCacheMode: MTLCPUCacheMode;

	setDepth(_: number)

	depth: number;

	setHazardTrackingMode(_: MTLHazardTrackingMode)

	hazardTrackingMode: MTLHazardTrackingMode;

	setHeight(_: number)

	height: number;

	setMipmapLevelCount(_: number)

	mipmapLevelCount: number;

	setPixelFormat(_: MTLPixelFormat)

	pixelFormat: MTLPixelFormat;

	setResourceOptions(_: MTLResourceOptions)

	resourceOptions: MTLResourceOptions;

	setSampleCount(_: number)

	sampleCount: number;

	setStorageMode(_: MTLStorageMode)

	storageMode: MTLStorageMode;

	setSwizzle(_: MTLTextureSwizzleChannels)

	swizzle: MTLTextureSwizzleChannels;

	setTextureType(_: MTLTextureType)

	textureType: MTLTextureType;

	setUsage(_: MTLTextureUsage)

	usage: MTLTextureUsage;

	setWidth(_: number)

	width: number;

	copyWithZone(_?: any): any;
}

declare class MTLTextureReferenceType extends MTLType {

	readonly access: MTLArgumentAccess;

	readonly isDepthTexture: boolean;

	readonly textureDataType: MTLDataType;

	readonly textureType: MTLTextureType;
}

enum MTLTextureSwizzle {

	Zero = 0,

	One = 1,

	Red = 2,

	Green = 3,

	Blue = 4,

	Alpha = 5
}


interface MTLTextureSwizzleChannels {
	red: MTLTextureSwizzle;
	green: MTLTextureSwizzle;
	blue: MTLTextureSwizzle;
	alpha: MTLTextureSwizzle;
}
declare var MTLTextureSwizzleChannels: MTLTextureSwizzleChannels;

enum MTLTextureType {

	Type1D = 0,

	Type1DArray = 1,

	Type2D = 2,

	Type2DArray = 3,

	Type2DMultisample = 4,

	TypeCube = 5,

	TypeCubeArray = 6,

	Type3D = 7,

	Type2DMultisampleArray = 8,

	TypeTextureBuffer = 9
}


enum MTLTextureUsage {

	Unknown = 0,

	ShaderRead = 1,

	ShaderWrite = 2,

	RenderTarget = 4,

	PixelFormatView = 16
}


enum MTLTriangleFillMode {

	Fill = 0,

	Lines = 1
}


interface MTLTriangleTessellationFactorsHalf {
	edgeTessellationFactor: number;
	insideTessellationFactor: number;
}
declare var MTLTriangleTessellationFactorsHalf: MTLTriangleTessellationFactorsHalf;

declare class MTLType extends NSObject {

	readonly dataType: MTLDataType;
}

interface MTLVertexAmplificationViewMapping {
	viewportArrayIndexOffset: number;
	renderTargetArrayIndexOffset: number;
}
declare var MTLVertexAmplificationViewMapping: MTLVertexAmplificationViewMapping;

declare class MTLVertexAttribute extends NSObject {

	readonly isActive: boolean;

	readonly attributeIndex: number;

	readonly attributeType: MTLDataType;

	readonly name: string;

	readonly isPatchControlPointData: boolean;

	readonly isPatchData: boolean;
}

declare class MTLVertexAttributeDescriptor extends NSObject implements NSCopying {

	setBufferIndex(_: number)

	bufferIndex: number;

	setFormat(_: MTLVertexFormat)

	format: MTLVertexFormat;

	setOffset(_: number)

	offset: number;

	copyWithZone(_?: any): any;
}

declare class MTLVertexAttributeDescriptorArray extends NSObject {

	objectAtIndexedSubscript(_: number): MTLVertexAttributeDescriptor;

	setObjectAtIndexedSubscript(_?: MTLVertexAttributeDescriptor, atIndexedSubscript: number): void;
}

declare class MTLVertexBufferLayoutDescriptor extends NSObject implements NSCopying {

	setStepFunction(_: MTLVertexStepFunction)

	stepFunction: MTLVertexStepFunction;

	setStepRate(_: number)

	stepRate: number;

	setStride(_: number)

	stride: number;

	copyWithZone(_?: any): any;
}

declare class MTLVertexBufferLayoutDescriptorArray extends NSObject {

	objectAtIndexedSubscript(_: number): MTLVertexBufferLayoutDescriptor;

	setObjectAtIndexedSubscript(_?: MTLVertexBufferLayoutDescriptor, atIndexedSubscript: number): void;
}

declare class MTLVertexDescriptor extends NSObject implements NSCopying {

	static vertexDescriptor(): MTLVertexDescriptor;

	readonly attributes: MTLVertexAttributeDescriptorArray;

	readonly layouts: MTLVertexBufferLayoutDescriptorArray;

	copyWithZone(_?: any): any;

	reset(): void;
}

enum MTLVertexFormat {

	Invalid = 0,

	UChar2 = 1,

	UChar3 = 2,

	UChar4 = 3,

	Char2 = 4,

	Char3 = 5,

	Char4 = 6,

	UChar2Normalized = 7,

	UChar3Normalized = 8,

	UChar4Normalized = 9,

	Char2Normalized = 10,

	Char3Normalized = 11,

	Char4Normalized = 12,

	UShort2 = 13,

	UShort3 = 14,

	UShort4 = 15,

	Short2 = 16,

	Short3 = 17,

	Short4 = 18,

	UShort2Normalized = 19,

	UShort3Normalized = 20,

	UShort4Normalized = 21,

	Short2Normalized = 22,

	Short3Normalized = 23,

	Short4Normalized = 24,

	Half2 = 25,

	Half3 = 26,

	Half4 = 27,

	Float = 28,

	Float2 = 29,

	Float3 = 30,

	Float4 = 31,

	Int = 32,

	Int2 = 33,

	Int3 = 34,

	Int4 = 35,

	UInt = 36,

	UInt2 = 37,

	UInt3 = 38,

	UInt4 = 39,

	Int1010102Normalized = 40,

	UInt1010102Normalized = 41,

	UChar4Normalized_BGRA = 42,

	UChar = 45,

	Char = 46,

	UCharNormalized = 47,

	CharNormalized = 48,

	UShort = 49,

	Short = 50,

	UShortNormalized = 51,

	ShortNormalized = 52,

	Half = 53
}


enum MTLVertexStepFunction {

	Constant = 0,

	PerVertex = 1,

	PerInstance = 2,

	PerPatch = 3,

	PerPatchControlPoint = 4
}


interface MTLViewport {
	originX: number;
	originY: number;
	width: number;
	height: number;
	znear: number;
	zfar: number;
}
declare var MTLViewport: MTLViewport;

enum MTLVisibilityResultMode {

	Disabled = 0,

	Boolean = 1,

	Counting = 2
}


enum MTLWinding {

	Clockwise = 0,

	CounterClockwise = 1
}

