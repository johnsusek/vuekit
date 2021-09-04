
declare class MTKMesh extends NSObject {

	static newMeshesFromAssetDeviceSourceMeshesError(device: MDLAsset, sourceMeshes: MTLDevice, error?: NSArray<MDLMesh>): NSArray<MTKMesh>;

	setName(_: string)

	name: string;

	readonly submeshes: NSArray<MTKSubmesh>;

	readonly vertexBuffers: NSArray<MTKMeshBuffer>;

	readonly vertexCount: number;

	readonly vertexDescriptor: MDLVertexDescriptor;

	static create(mesh: MDLMesh, device: MTLDevice);
}

declare class MTKMeshBuffer extends NSObject implements MDLMeshBuffer, MDLNamed {

	readonly allocator: MTKMeshBufferAllocator;

	readonly buffer: MTLBuffer;

	readonly offset: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly length: number; // inherited from MDLMeshBuffer

	setName(_: string)

	name: string; // inherited from MDLNamed

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly type: MDLMeshBufferType; // inherited from MDLMeshBuffer

	readonly  // inherited from MDLMeshBuffer

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

declare class MTKMeshBufferAllocator extends NSObject implements MDLMeshBufferAllocator {

	readonly device: MTLDevice;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(device: MTLDevice);

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

declare function MTKMetalVertexDescriptorFromModelIO(modelIODescriptor: MDLVertexDescriptor): MTLVertexDescriptor;

declare function MTKMetalVertexDescriptorFromModelIOWithError(modelIODescriptor: MDLVertexDescriptor, error: NSError): MTLVertexDescriptor;

declare function MTKMetalVertexFormatFromModelIO(vertexFormat: MDLVertexFormat): MTLVertexFormat;

declare var MTKModelErrorDomain: string;

declare var MTKModelErrorKey: string;

declare function MTKModelIOVertexDescriptorFromMetal(metalDescriptor: MTLVertexDescriptor): MDLVertexDescriptor;

declare function MTKModelIOVertexDescriptorFromMetalWithError(metalDescriptor: MTLVertexDescriptor, error: NSError): MDLVertexDescriptor;

declare function MTKModelIOVertexFormatFromMetal(vertexFormat: MTLVertexFormat): MDLVertexFormat;

declare class MTKSubmesh extends NSObject {

	readonly indexBuffer: MTKMeshBuffer;

	readonly indexCount: number;

	readonly indexType: MTLIndexType;

	readonly mesh: MTKMesh;

	setName(_: string)

	name: string;

	readonly primitiveType: MTLPrimitiveType;
}

declare class MTKTextureLoader extends NSObject {

	readonly device: MTLDevice;

	static create(device: MTLDevice);

	newTextureWithCGImageOptionsCompletionHandler(cgImage: any, options?: NSDictionary<string, any>, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

	newTextureWithCGImageOptionsError(cgImage: any, options?: NSDictionary<string, any>): MTLTexture;

	newTextureWithContentsOfURLOptionsCompletionHandler(URL: NSURL, options?: NSDictionary<string, any>, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

	newTextureWithContentsOfURLOptionsError(URL: NSURL, options?: NSDictionary<string, any>): MTLTexture;

	newTextureWithDataOptionsCompletionHandler(data: NSData, options?: NSDictionary<string, any>, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

	newTextureWithDataOptionsError(data: NSData, options?: NSDictionary<string, any>): MTLTexture;

	newTextureWithMDLTextureOptionsCompletionHandler(texture: MDLTexture, options?: NSDictionary<string, any>, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

	newTextureWithMDLTextureOptionsError(texture: MDLTexture, options?: NSDictionary<string, any>): MTLTexture;

	newTextureWithNameScaleFactorBundleOptionsCompletionHandler(name: string, scaleFactor: number, bundle?: NSBundle, options?: NSDictionary<string, any>, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

	newTextureWithNameScaleFactorBundleOptionsError(name: string, scaleFactor: number, bundle?: NSBundle, options?: NSDictionary<string, any>): MTLTexture;

	newTextureWithNameScaleFactorDisplayGamutBundleOptionsCompletionHandler(name: string, scaleFactor: number, displayGamut: NSDisplayGamut, bundle?: NSBundle, options?: NSDictionary<string, any>, completionHandler: (p1: MTLTexture, p2: NSError) => void): void;

	newTextureWithNameScaleFactorDisplayGamutBundleOptionsError(name: string, scaleFactor: number, displayGamut: NSDisplayGamut, bundle?: NSBundle, options?: NSDictionary<string, any>): MTLTexture;

	newTexturesWithContentsOfURLsOptionsCompletionHandler(URLs: NSArray<NSURL>, options?: NSDictionary<string, any>, completionHandler: (p1: NSArray<MTLTexture>, p2: NSError) => void): void;

	newTexturesWithContentsOfURLsOptionsError(URLs: NSArray<NSURL>, options?: NSDictionary<string, any>): NSArray<MTLTexture>;

	newTexturesWithNamesScaleFactorBundleOptionsCompletionHandler(names: NSArray<string>, scaleFactor: number, bundle?: NSBundle, options?: NSDictionary<string, any>, completionHandler: (p1: NSArray<MTLTexture>, p2: NSError) => void): void;

	newTexturesWithNamesScaleFactorDisplayGamutBundleOptionsCompletionHandler(names: NSArray<string>, scaleFactor: number, displayGamut: NSDisplayGamut, bundle?: NSBundle, options?: NSDictionary<string, any>, completionHandler: (p1: NSArray<MTLTexture>, p2: NSError) => void): void;
}

declare var MTKTextureLoaderCubeLayoutVertical: string;

declare var MTKTextureLoaderErrorDomain: string;

declare var MTKTextureLoaderErrorKey: string;

declare var MTKTextureLoaderOptionAllocateMipmaps: string;

declare var MTKTextureLoaderOptionCubeLayout: string;

declare var MTKTextureLoaderOptionGenerateMipmaps: string;

declare var MTKTextureLoaderOptionOrigin: string;

declare var MTKTextureLoaderOptionSRGB: string;

declare var MTKTextureLoaderOptionTextureCPUCacheMode: string;

declare var MTKTextureLoaderOptionTextureStorageMode: string;

declare var MTKTextureLoaderOptionTextureUsage: string;

declare var MTKTextureLoaderOriginBottomLeft: string;

declare var MTKTextureLoaderOriginFlippedVertically: string;

declare var MTKTextureLoaderOriginTopLeft: string;

declare class MTKView extends NSView implements CALayerDelegate, NSCoding {

	setAutoResizeDrawable(_: boolean)

	autoResizeDrawable: boolean;

	setClearColor(_: MTLClearColor)

	clearColor: MTLClearColor;

	setClearDepth(_: number)

	clearDepth: number;

	setClearStencil(_: number)

	clearStencil: number;

	setColorPixelFormat(_: MTLPixelFormat)

	colorPixelFormat: MTLPixelFormat;

	setColorspace(_: any)

	colorspace: any;

	readonly currentDrawable: CAMetalDrawable;

	readonly currentRenderPassDescriptor: MTLRenderPassDescriptor;

	setDelegate(_: MTKViewDelegate)

	delegate: MTKViewDelegate;

	setDepthStencilAttachmentTextureUsage(_: MTLTextureUsage)

	depthStencilAttachmentTextureUsage: MTLTextureUsage;

	setDepthStencilPixelFormat(_: MTLPixelFormat)

	depthStencilPixelFormat: MTLPixelFormat;

	readonly depthStencilTexture: MTLTexture;

	setDevice(_: MTLDevice)

	device: MTLDevice;

	setDrawableSize(_: CGSize)

	drawableSize: CGSize;

	setEnableSetNeedsDisplay(_: boolean)

	enableSetNeedsDisplay: boolean;

	setFramebufferOnly(_: boolean)

	framebufferOnly: boolean;

	setMultisampleColorAttachmentTextureUsage(_: MTLTextureUsage)

	multisampleColorAttachmentTextureUsage: MTLTextureUsage;

	readonly multisampleColorTexture: MTLTexture;

	setPaused(_: boolean)

	isPaused: boolean;

	readonly preferredDevice: MTLDevice;

	readonly preferredDrawableSize: CGSize;

	setPreferredFramesPerSecond(_: number)

	preferredFramesPerSecond: number;

	setPresentsWithTransaction(_: boolean)

	presentsWithTransaction: boolean;

	setSampleCount(_: number)

	sampleCount: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(coder: NSCoder); // inherited from NSCoding

	static create(frame: CGRect, device: MTLDevice);

	actionForLayerForKey(_: CALayer, forKey: string): CAAction;

	conformsToProtocol(_: any /* Protocol */): boolean;

	displayLayer(_: CALayer): void;

	draw(): void;

	drawLayerInContext(_: CALayer, inContext: any): void;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	layerWillDraw(_: CALayer): void;

	layoutSublayersOfLayer(_: CALayer): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	releaseDrawables(): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

interface MTKViewDelegate extends NSObjectProtocol {

	drawInMTKView(_: MTKView): void;

	mtkViewDrawableSizeWillChange(_: MTKView, drawableSizeWillChange: CGSize): void;
}
declare var MTKViewDelegate: {

	prototype: MTKViewDelegate;
};
