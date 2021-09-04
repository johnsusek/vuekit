
enum CGLCPContextPriorityRequest {

	kCGLCPContextPriorityRequestHigh = 0,

	kCGLCPContextPriorityRequestNormal = 1,

	kCGLCPContextPriorityRequestLow = 2
}


enum CGLContextEnable {

	kCGLCESwapRectangle = 201,

	kCGLCESwapLimit = 203,

	kCGLCERasterization = 221,

	kCGLCEStateValidation = 301,

	kCGLCESurfaceBackingSize = 305,

	kCGLCEDisplayListOptimization = 307,

	kCGLCEMPEngine = 313,

	kCGLCECrashOnRemovedFunctions = 316
}


enum CGLContextParameter {

	kCGLCPSwapRectangle = 200,

	kCGLCPSwapInterval = 222,

	kCGLCPDispatchTableSize = 224,

	kCGLCPClientStorage = 226,

	kCGLCPSurfaceTexture = 228,

	kCGLCPSurfaceOrder = 235,

	kCGLCPSurfaceOpacity = 236,

	kCGLCPSurfaceBackingSize = 304,

	kCGLCPSurfaceSurfaceVolatile = 306,

	kCGLCPReclaimResources = 308,

	kCGLCPCurrentRendererID = 309,

	kCGLCPGPUVertexProcessing = 310,

	kCGLCPGPUFragmentProcessing = 311,

	kCGLCPHasDrawable = 314,

	kCGLCPMPSwapsInFlight = 315,

	kCGLCPGPURestartStatus = 317,

	kCGLCPAbortOnGPURestartStatusBlacklisted = 318,

	kCGLCPSupportGPURestart = 319,

	kCGLCPSupportSeparateAddressSpace = 320,

	kCGLCPContextPriorityRequest = 608
}


enum CGLError {

	kCGLNoError = 0,

	kCGLBadAttribute = 10000,

	kCGLBadProperty = 10001,

	kCGLBadPixelFormat = 10002,

	kCGLBadRendererInfo = 10003,

	kCGLBadContext = 10004,

	kCGLBadDrawable = 10005,

	kCGLBadDisplay = 10006,

	kCGLBadState = 10007,

	kCGLBadValue = 10008,

	kCGLBadMatch = 10009,

	kCGLBadEnumeration = 10010,

	kCGLBadOffScreen = 10011,

	kCGLBadFullScreen = 10012,

	kCGLBadWindow = 10013,

	kCGLBadAddress = 10014,

	kCGLBadCodeModule = 10015,

	kCGLBadAlloc = 10016,

	kCGLBadConnection = 10017
}


enum CGLGPURestartStatus {

	kCGLCPGPURestartStatusNone = 0,

	kCGLCPGPURestartStatusCaused = 1,

	kCGLCPGPURestartStatusBlacklisted = 2
}


declare function CGLGetContextRetainCount(ctx: _CGLContextObject): number;

declare function CGLGetCurrentContext(): _CGLContextObject;

declare function CGLGetDeviceFromGLRenderer(rendererID: number): any;

declare function CGLGetGlobalOption(pname: CGLGlobalOption, params: number): CGLError;

declare function CGLGetPixelFormat(ctx: _CGLContextObject): any;

declare function CGLGetPixelFormatRetainCount(pix: any): number;

declare function CGLGetShareGroup(ctx: _CGLContextObject): any;

enum CGLGlobalOption {

	kCGLGOFormatCacheSize = 501,

	kCGLGOClearFormatCache = 502,

	kCGLGORetainRenderers = 503,

	kCGLGOUseBuildCache = 506,

	kCGLGOResetLibrary = 504,

	kCGLGOUseErrorHandler = 505
}


declare function CGLLockContext(ctx: _CGLContextObject): CGLError;

enum CGLOpenGLProfile {

	kCGLOGLPVersion_Legacy = 4096,

	kCGLOGLPVersion_3_2_Core = 12800,

	kCGLOGLPVersion_GL3_Core = 12800,

	kCGLOGLPVersion_GL4_Core = 16640
}


enum CGLPixelFormatAttribute {

	kCGLPFAAllRenderers = 1,

	kCGLPFATripleBuffer = 3,

	kCGLPFADoubleBuffer = 5,

	kCGLPFAColorSize = 8,

	kCGLPFAAlphaSize = 11,

	kCGLPFADepthSize = 12,

	kCGLPFAStencilSize = 13,

	kCGLPFAMinimumPolicy = 51,

	kCGLPFAMaximumPolicy = 52,

	kCGLPFASampleBuffers = 55,

	kCGLPFASamples = 56,

	kCGLPFAColorFloat = 58,

	kCGLPFAMultisample = 59,

	kCGLPFASupersample = 60,

	kCGLPFASampleAlpha = 61,

	kCGLPFARendererID = 70,

	kCGLPFANoRecovery = 72,

	kCGLPFAAccelerated = 73,

	kCGLPFAClosestPolicy = 74,

	kCGLPFABackingStore = 76,

	kCGLPFABackingVolatile = 77,

	kCGLPFADisplayMask = 84,

	kCGLPFAAllowOfflineRenderers = 96,

	kCGLPFAAcceleratedCompute = 97,

	kCGLPFAOpenGLProfile = 99,

	kCGLPFASupportsAutomaticGraphicsSwitching = 101,

	kCGLPFAVirtualScreenCount = 128,

	kCGLPFAAuxBuffers = 7,

	kCGLPFAAccumSize = 14,

	kCGLPFAAuxDepthStencil = 57,

	kCGLPFAStereo = 6,

	kCGLPFAOffScreen = 53,

	kCGLPFAWindow = 80,

	kCGLPFACompliant = 83,

	kCGLPFAPBuffer = 90,

	kCGLPFARemotePBuffer = 91,

	kCGLPFASingleRenderer = 71,

	kCGLPFARobust = 75,

	kCGLPFAMPSafe = 78,

	kCGLPFAMultiScreen = 81,

	kCGLPFAFullScreen = 54
}


declare function CGLReleaseContext(ctx: _CGLContextObject): void;

declare function CGLReleasePixelFormat(pix: any): void;

enum CGLRendererProperty {

	kCGLRPOffScreen = 53,

	kCGLRPRendererID = 70,

	kCGLRPAccelerated = 73,

	kCGLRPBackingStore = 76,

	kCGLRPWindow = 80,

	kCGLRPCompliant = 83,

	kCGLRPDisplayMask = 84,

	kCGLRPBufferModes = 100,

	kCGLRPColorModes = 103,

	kCGLRPAccumModes = 104,

	kCGLRPDepthModes = 105,

	kCGLRPStencilModes = 106,

	kCGLRPMaxAuxBuffers = 107,

	kCGLRPMaxSampleBuffers = 108,

	kCGLRPMaxSamples = 109,

	kCGLRPSampleModes = 110,

	kCGLRPSampleAlpha = 111,

	kCGLRPGPUVertProcCapable = 122,

	kCGLRPGPUFragProcCapable = 123,

	kCGLRPRendererCount = 128,

	kCGLRPOnline = 129,

	kCGLRPAcceleratedCompute = 130,

	kCGLRPVideoMemoryMegabytes = 131,

	kCGLRPTextureMemoryMegabytes = 132,

	kCGLRPMajorGLVersion = 133,

	kCGLRPRegistryIDLow = 140,

	kCGLRPRegistryIDHigh = 141,

	kCGLRPRemovable = 142,

	kCGLRPRobust = 75,

	kCGLRPMPSafe = 78,

	kCGLRPMultiScreen = 81,

	kCGLRPFullScreen = 54,

	kCGLRPVideoMemory = 120,

	kCGLRPTextureMemory = 121
}


declare function CGLRetainContext(ctx: _CGLContextObject): _CGLContextObject;

declare function CGLRetainPixelFormat(pix: any): any;

declare function CGLSetCurrentContext(ctx: _CGLContextObject): CGLError;

declare function CGLSetGlobalOption(pname: CGLGlobalOption, params: number): CGLError;

declare function CGLTexImageIOSurface2D(ctx: _CGLContextObject, target: number, internal_format: number, width: number, height: number, format: number, type: number, ioSurface: any, plane: number): CGLError;

declare function CGLUnlockContext(ctx: _CGLContextObject): CGLError;

declare function CGLUpdateContext(ctx: _CGLContextObject): CGLError;

interface GLIFunctionDispatch {
	accum: (p1: any, p2: number, p3: number) => void;
	alpha_func: (p1: any, p2: number, p3: number) => void;
	are_textures_resident: (p1: any, p2: number, p3: number, p4: string) => number;
	array_element: (p1: any, p2: number) => void;
	begin: (p1: any, p2: number) => void;
	bind_texture: (p1: any, p2: number, p3: number) => void;
	bitmap: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: string) => void;
	blend_func: (p1: any, p2: number, p3: number) => void;
	call_list: (p1: any, p2: number) => void;
	call_lists: (p1: any, p2: number, p3: number, p4: any) => void;
	clear: (p1: any, p2: number) => void;
	clear_accum: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	clear_color: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	clear_depth: (p1: any, p2: number) => void;
	clear_index: (p1: any, p2: number) => void;
	clear_stencil: (p1: any, p2: number) => void;
	clip_plane: (p1: any, p2: number, p3: number) => void;
	color3b: (p1: any, p2: number, p3: number, p4: number) => void;
	color3bv: (p1: any, p2: number) => void;
	color3d: (p1: any, p2: number, p3: number, p4: number) => void;
	color3dv: (p1: any, p2: number) => void;
	color3f: (p1: any, p2: number, p3: number, p4: number) => void;
	color3fv: (p1: any, p2: number) => void;
	color3i: (p1: any, p2: number, p3: number, p4: number) => void;
	color3iv: (p1: any, p2: number) => void;
	color3s: (p1: any, p2: number, p3: number, p4: number) => void;
	color3sv: (p1: any, p2: number) => void;
	color3ub: (p1: any, p2: number, p3: number, p4: number) => void;
	color3ubv: (p1: any, p2: string) => void;
	color3ui: (p1: any, p2: number, p3: number, p4: number) => void;
	color3uiv: (p1: any, p2: number) => void;
	color3us: (p1: any, p2: number, p3: number, p4: number) => void;
	color3usv: (p1: any, p2: number) => void;
	color4b: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	color4bv: (p1: any, p2: number) => void;
	color4d: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	color4dv: (p1: any, p2: number) => void;
	color4f: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	color4fv: (p1: any, p2: number) => void;
	color4i: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	color4iv: (p1: any, p2: number) => void;
	color4s: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	color4sv: (p1: any, p2: number) => void;
	color4ub: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	color4ubv: (p1: any, p2: string) => void;
	color4ui: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	color4uiv: (p1: any, p2: number) => void;
	color4us: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	color4usv: (p1: any, p2: number) => void;
	color_mask: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	color_material: (p1: any, p2: number, p3: number) => void;
	color_pointer: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	copy_pixels: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	copy_tex_image1D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number) => void;
	copy_tex_image2D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number) => void;
	copy_tex_sub_image1D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	copy_tex_sub_image2D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number) => void;
	cull_face: (p1: any, p2: number) => void;
	delete_lists: (p1: any, p2: number, p3: number) => void;
	delete_textures: (p1: any, p2: number, p3: number) => void;
	depth_func: (p1: any, p2: number) => void;
	depth_mask: (p1: any, p2: number) => void;
	depth_range: (p1: any, p2: number, p3: number) => void;
	disable: (p1: any, p2: number) => void;
	disable_client_state: (p1: any, p2: number) => void;
	draw_arrays: (p1: any, p2: number, p3: number, p4: number) => void;
	draw_buffer: (p1: any, p2: number) => void;
	draw_elements: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	draw_pixels: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: any) => void;
	edge_flag: (p1: any, p2: number) => void;
	edge_flag_pointer: (p1: any, p2: number, p3: any) => void;
	edge_flagv: (p1: any, p2: string) => void;
	enable: (p1: any, p2: number) => void;
	enable_client_state: (p1: any, p2: number) => void;
	end: (p1: any) => void;
	end_list: (p1: any) => void;
	eval_coord1d: (p1: any, p2: number) => void;
	eval_coord1dv: (p1: any, p2: number) => void;
	eval_coord1f: (p1: any, p2: number) => void;
	eval_coord1fv: (p1: any, p2: number) => void;
	eval_coord2d: (p1: any, p2: number, p3: number) => void;
	eval_coord2dv: (p1: any, p2: number) => void;
	eval_coord2f: (p1: any, p2: number, p3: number) => void;
	eval_coord2fv: (p1: any, p2: number) => void;
	eval_mesh1: (p1: any, p2: number, p3: number, p4: number) => void;
	eval_mesh2: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	eval_point1: (p1: any, p2: number) => void;
	eval_point2: (p1: any, p2: number, p3: number) => void;
	feedback_buffer: (p1: any, p2: number, p3: number, p4: number) => void;
	finish: (p1: any) => void;
	flush: (p1: any) => void;
	fogf: (p1: any, p2: number, p3: number) => void;
	fogfv: (p1: any, p2: number, p3: number) => void;
	fogi: (p1: any, p2: number, p3: number) => void;
	fogiv: (p1: any, p2: number, p3: number) => void;
	front_face: (p1: any, p2: number) => void;
	frustum: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	gen_lists: (p1: any, p2: number) => number;
	gen_textures: (p1: any, p2: number, p3: number) => void;
	get_booleanv: (p1: any, p2: number, p3: string) => void;
	get_clip_plane: (p1: any, p2: number, p3: number) => void;
	get_doublev: (p1: any, p2: number, p3: number) => void;
	get_error: (p1: any) => number;
	get_floatv: (p1: any, p2: number, p3: number) => void;
	get_integerv: (p1: any, p2: number, p3: number) => void;
	get_lightfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_lightiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_mapdv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_mapfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_mapiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_materialfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_materialiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_pixel_mapfv: (p1: any, p2: number, p3: number) => void;
	get_pixel_mapuiv: (p1: any, p2: number, p3: number) => void;
	get_pixel_mapusv: (p1: any, p2: number, p3: number) => void;
	get_pointerv: (p1: any, p2: number, p3: any) => void;
	get_polygon_stipple: (p1: any, p2: string) => void;
	get_string: (p1: any, p2: number) => string;
	get_tex_envfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_tex_enviv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_tex_gendv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_tex_genfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_tex_geniv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_tex_image: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: any) => void;
	get_tex_level_parameterfv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_tex_level_parameteriv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_tex_parameterfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_tex_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	hint: (p1: any, p2: number, p3: number) => void;
	index_mask: (p1: any, p2: number) => void;
	index_pointer: (p1: any, p2: number, p3: number, p4: any) => void;
	indexd: (p1: any, p2: number) => void;
	indexdv: (p1: any, p2: number) => void;
	indexf: (p1: any, p2: number) => void;
	indexfv: (p1: any, p2: number) => void;
	indexi: (p1: any, p2: number) => void;
	indexiv: (p1: any, p2: number) => void;
	indexs: (p1: any, p2: number) => void;
	indexsv: (p1: any, p2: number) => void;
	indexub: (p1: any, p2: number) => void;
	indexubv: (p1: any, p2: string) => void;
	init_names: (p1: any) => void;
	interleaved_arrays: (p1: any, p2: number, p3: number, p4: any) => void;
	is_enabled: (p1: any, p2: number) => number;
	is_list: (p1: any, p2: number) => number;
	is_texture: (p1: any, p2: number) => number;
	light_modelf: (p1: any, p2: number, p3: number) => void;
	light_modelfv: (p1: any, p2: number, p3: number) => void;
	light_modeli: (p1: any, p2: number, p3: number) => void;
	light_modeliv: (p1: any, p2: number, p3: number) => void;
	lightf: (p1: any, p2: number, p3: number, p4: number) => void;
	lightfv: (p1: any, p2: number, p3: number, p4: number) => void;
	lighti: (p1: any, p2: number, p3: number, p4: number) => void;
	lightiv: (p1: any, p2: number, p3: number, p4: number) => void;
	line_stipple: (p1: any, p2: number) => void;
	line_width: (p1: any, p2: number) => void;
	list_base: (p1: any, p2: number) => void;
	load_identity: (p1: any) => void;
	load_matrixd: (p1: any, p2: number) => void;
	load_matrixf: (p1: any, p2: number) => void;
	load_name: (p1: any, p2: number) => void;
	logic_op: (p1: any, p2: number) => void;
	map1d: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	map1f: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	map2d: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number) => void;
	map2f: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number) => void;
	map_grid1d: (p1: any, p2: number, p3: number, p4: number) => void;
	map_grid1f: (p1: any, p2: number, p3: number, p4: number) => void;
	map_grid2d: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	map_grid2f: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	materialf: (p1: any, p2: number, p3: number, p4: number) => void;
	materialfv: (p1: any, p2: number, p3: number, p4: number) => void;
	materiali: (p1: any, p2: number, p3: number, p4: number) => void;
	materialiv: (p1: any, p2: number, p3: number, p4: number) => void;
	matrix_mode: (p1: any, p2: number) => void;
	mult_matrixd: (p1: any, p2: number) => void;
	mult_matrixf: (p1: any, p2: number) => void;
	new_list: (p1: any, p2: number, p3: number) => void;
	normal3b: (p1: any, p2: number, p3: number, p4: number) => void;
	normal3bv: (p1: any, p2: number) => void;
	normal3d: (p1: any, p2: number, p3: number, p4: number) => void;
	normal3dv: (p1: any, p2: number) => void;
	normal3f: (p1: any, p2: number, p3: number, p4: number) => void;
	normal3fv: (p1: any, p2: number) => void;
	normal3i: (p1: any, p2: number, p3: number, p4: number) => void;
	normal3iv: (p1: any, p2: number) => void;
	normal3s: (p1: any, p2: number, p3: number, p4: number) => void;
	normal3sv: (p1: any, p2: number) => void;
	normal_pointer: (p1: any, p2: number, p3: number, p4: any) => void;
	ortho: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	pass_through: (p1: any, p2: number) => void;
	pixel_mapfv: (p1: any, p2: number, p3: number, p4: number) => void;
	pixel_mapuiv: (p1: any, p2: number, p3: number, p4: number) => void;
	pixel_mapusv: (p1: any, p2: number, p3: number, p4: number) => void;
	pixel_storef: (p1: any, p2: number, p3: number) => void;
	pixel_storei: (p1: any, p2: number, p3: number) => void;
	pixel_transferf: (p1: any, p2: number, p3: number) => void;
	pixel_transferi: (p1: any, p2: number, p3: number) => void;
	pixel_zoom: (p1: any, p2: number, p3: number) => void;
	point_size: (p1: any, p2: number) => void;
	polygon_mode: (p1: any, p2: number, p3: number) => void;
	polygon_offset: (p1: any, p2: number) => void;
	polygon_stipple: (p1: any, p2: string) => void;
	pop_attrib: (p1: any) => void;
	pop_client_attrib: (p1: any) => void;
	pop_matrix: (p1: any) => void;
	pop_name: (p1: any) => void;
	prioritize_textures: (p1: any, p2: number, p3: number, p4: number) => void;
	push_attrib: (p1: any, p2: number) => void;
	push_client_attrib: (p1: any, p2: number) => void;
	push_matrix: (p1: any) => void;
	push_name: (p1: any, p2: number) => void;
	raster_pos2d: (p1: any, p2: number, p3: number) => void;
	raster_pos2dv: (p1: any, p2: number) => void;
	raster_pos2f: (p1: any, p2: number, p3: number) => void;
	raster_pos2fv: (p1: any, p2: number) => void;
	raster_pos2i: (p1: any, p2: number, p3: number) => void;
	raster_pos2iv: (p1: any, p2: number) => void;
	raster_pos2s: (p1: any, p2: number, p3: number) => void;
	raster_pos2sv: (p1: any, p2: number) => void;
	raster_pos3d: (p1: any, p2: number, p3: number, p4: number) => void;
	raster_pos3dv: (p1: any, p2: number) => void;
	raster_pos3f: (p1: any, p2: number, p3: number, p4: number) => void;
	raster_pos3fv: (p1: any, p2: number) => void;
	raster_pos3i: (p1: any, p2: number, p3: number, p4: number) => void;
	raster_pos3iv: (p1: any, p2: number) => void;
	raster_pos3s: (p1: any, p2: number, p3: number, p4: number) => void;
	raster_pos3sv: (p1: any, p2: number) => void;
	raster_pos4d: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	raster_pos4dv: (p1: any, p2: number) => void;
	raster_pos4f: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	raster_pos4fv: (p1: any, p2: number) => void;
	raster_pos4i: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	raster_pos4iv: (p1: any, p2: number) => void;
	raster_pos4s: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	raster_pos4sv: (p1: any, p2: number) => void;
	read_buffer: (p1: any, p2: number) => void;
	read_pixels: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any) => void;
	rectd: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	rectdv: (p1: any, p2: number, p3: number) => void;
	rectf: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	rectfv: (p1: any, p2: number, p3: number) => void;
	recti: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	rectiv: (p1: any, p2: number, p3: number) => void;
	rects: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	rectsv: (p1: any, p2: number, p3: number) => void;
	render_mode: (p1: any, p2: number) => number;
	rotated: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	rotatef: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	scaled: (p1: any, p2: number, p3: number, p4: number) => void;
	scalef: (p1: any, p2: number, p3: number, p4: number) => void;
	scissor: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	select_buffer: (p1: any, p2: number, p3: number) => void;
	shade_model: (p1: any, p2: number) => void;
	stencil_func: (p1: any, p2: number, p3: number, p4: number) => void;
	stencil_mask: (p1: any, p2: number) => void;
	stencil_op: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_coord1d: (p1: any, p2: number) => void;
	tex_coord1dv: (p1: any, p2: number) => void;
	tex_coord1f: (p1: any, p2: number) => void;
	tex_coord1fv: (p1: any, p2: number) => void;
	tex_coord1i: (p1: any, p2: number) => void;
	tex_coord1iv: (p1: any, p2: number) => void;
	tex_coord1s: (p1: any, p2: number) => void;
	tex_coord1sv: (p1: any, p2: number) => void;
	tex_coord2d: (p1: any, p2: number, p3: number) => void;
	tex_coord2dv: (p1: any, p2: number) => void;
	tex_coord2f: (p1: any, p2: number, p3: number) => void;
	tex_coord2fv: (p1: any, p2: number) => void;
	tex_coord2i: (p1: any, p2: number, p3: number) => void;
	tex_coord2iv: (p1: any, p2: number) => void;
	tex_coord2s: (p1: any, p2: number, p3: number) => void;
	tex_coord2sv: (p1: any, p2: number) => void;
	tex_coord3d: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_coord3dv: (p1: any, p2: number) => void;
	tex_coord3f: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_coord3fv: (p1: any, p2: number) => void;
	tex_coord3i: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_coord3iv: (p1: any, p2: number) => void;
	tex_coord3s: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_coord3sv: (p1: any, p2: number) => void;
	tex_coord4d: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	tex_coord4dv: (p1: any, p2: number) => void;
	tex_coord4f: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	tex_coord4fv: (p1: any, p2: number) => void;
	tex_coord4i: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	tex_coord4iv: (p1: any, p2: number) => void;
	tex_coord4s: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	tex_coord4sv: (p1: any, p2: number) => void;
	tex_coord_pointer: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	tex_envf: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_envfv: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_envi: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_enviv: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_gend: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_gendv: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_genf: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_genfv: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_geni: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_geniv: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_image1D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: any) => void;
	tex_image2D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: any) => void;
	tex_parameterf: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_parameterfv: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_parameteri: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_sub_image1D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any) => void;
	tex_sub_image2D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: any) => void;
	translated: (p1: any, p2: number, p3: number, p4: number) => void;
	translatef: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex2d: (p1: any, p2: number, p3: number) => void;
	vertex2dv: (p1: any, p2: number) => void;
	vertex2f: (p1: any, p2: number, p3: number) => void;
	vertex2fv: (p1: any, p2: number) => void;
	vertex2i: (p1: any, p2: number, p3: number) => void;
	vertex2iv: (p1: any, p2: number) => void;
	vertex2s: (p1: any, p2: number, p3: number) => void;
	vertex2sv: (p1: any, p2: number) => void;
	vertex3d: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex3dv: (p1: any, p2: number) => void;
	vertex3f: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex3fv: (p1: any, p2: number) => void;
	vertex3i: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex3iv: (p1: any, p2: number) => void;
	vertex3s: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex3sv: (p1: any, p2: number) => void;
	vertex4d: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex4dv: (p1: any, p2: number) => void;
	vertex4f: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex4fv: (p1: any, p2: number) => void;
	vertex4i: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex4iv: (p1: any, p2: number) => void;
	vertex4s: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex4sv: (p1: any, p2: number) => void;
	vertex_pointer: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	viewport: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	blend_func_separate: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	blend_color: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	blend_equation: (p1: any, p2: number) => void;
	lock_arrays_EXT: (p1: any, p2: number, p3: number) => void;
	unlock_arrays_EXT: (p1: any) => void;
	client_active_texture: (p1: any, p2: number) => void;
	active_texture: (p1: any, p2: number) => void;
	multi_tex_coord1d: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord1dv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord1f: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord1fv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord1i: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord1iv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord1s: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord1sv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord2d: (p1: any, p2: number, p3: number, p4: number) => void;
	multi_tex_coord2dv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord2f: (p1: any, p2: number, p3: number, p4: number) => void;
	multi_tex_coord2fv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord2i: (p1: any, p2: number, p3: number, p4: number) => void;
	multi_tex_coord2iv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord2s: (p1: any, p2: number, p3: number, p4: number) => void;
	multi_tex_coord2sv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord3d: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	multi_tex_coord3dv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord3f: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	multi_tex_coord3fv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord3i: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	multi_tex_coord3iv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord3s: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	multi_tex_coord3sv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord4d: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	multi_tex_coord4dv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord4f: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	multi_tex_coord4fv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord4i: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	multi_tex_coord4iv: (p1: any, p2: number, p3: number) => void;
	multi_tex_coord4s: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	multi_tex_coord4sv: (p1: any, p2: number, p3: number) => void;
	load_transpose_matrixd: (p1: any, p2: number) => void;
	load_transpose_matrixf: (p1: any, p2: number) => void;
	mult_transpose_matrixd: (p1: any, p2: number) => void;
	mult_transpose_matrixf: (p1: any, p2: number) => void;
	compressed_tex_image3D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: any) => void;
	compressed_tex_image2D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: any) => void;
	compressed_tex_image1D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any) => void;
	compressed_tex_sub_image3D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: any) => void;
	compressed_tex_sub_image2D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: any) => void;
	compressed_tex_sub_image1D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any) => void;
	get_compressed_tex_image: (p1: any, p2: number, p3: number, p4: any) => void;
	secondary_color3b: (p1: any, p2: number, p3: number, p4: number) => void;
	secondary_color3bv: (p1: any, p2: number) => void;
	secondary_color3d: (p1: any, p2: number, p3: number, p4: number) => void;
	secondary_color3dv: (p1: any, p2: number) => void;
	secondary_color3f: (p1: any, p2: number, p3: number, p4: number) => void;
	secondary_color3fv: (p1: any, p2: number) => void;
	secondary_color3i: (p1: any, p2: number, p3: number, p4: number) => void;
	secondary_color3iv: (p1: any, p2: number) => void;
	secondary_color3s: (p1: any, p2: number, p3: number, p4: number) => void;
	secondary_color3sv: (p1: any, p2: number) => void;
	secondary_color3ub: (p1: any, p2: number, p3: number, p4: number) => void;
	secondary_color3ubv: (p1: any, p2: string) => void;
	secondary_color3ui: (p1: any, p2: number, p3: number, p4: number) => void;
	secondary_color3uiv: (p1: any, p2: number) => void;
	secondary_color3us: (p1: any, p2: number, p3: number, p4: number) => void;
	secondary_color3usv: (p1: any, p2: number) => void;
	secondary_color_pointer: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	vertex_array_range_EXT: (p1: any, p2: number, p3: any) => void;
	flush_vertex_array_range_EXT: (p1: any, p2: number, p3: any) => void;
	draw_range_elements: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any) => void;
	color_table: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any) => void;
	color_table_parameterfv: (p1: any, p2: number, p3: number, p4: number) => void;
	color_table_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	copy_color_table: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	get_color_table: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	get_color_table_parameterfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_color_table_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	color_sub_table: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any) => void;
	copy_color_sub_table: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	convolution_filter1D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any) => void;
	convolution_filter2D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any) => void;
	convolution_parameterf: (p1: any, p2: number, p3: number, p4: number) => void;
	convolution_parameterfv: (p1: any, p2: number, p3: number, p4: number) => void;
	convolution_parameteri: (p1: any, p2: number, p3: number, p4: number) => void;
	convolution_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	copy_convolution_filter1D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	copy_convolution_filter2D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	get_convolution_filter: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	get_convolution_parameterfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_convolution_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_separable_filter: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: any, p7: any) => void;
	separable_filter2D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any, p9: any) => void;
	get_histogram: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: any) => void;
	get_histogram_parameterfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_histogram_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_minmax: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: any) => void;
	get_minmax_parameterfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_minmax_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	histogram: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	minmax: (p1: any, p2: number, p3: number, p4: number) => void;
	reset_histogram: (p1: any, p2: number) => void;
	reset_minmax: (p1: any, p2: number) => void;
	tex_image3D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: any) => void;
	tex_sub_image3D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: any) => void;
	copy_tex_sub_image3D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number) => void;
	get_uniform_indices: (p1: any, p2: number, p3: number, p4: string, p5: number) => void;
	get_active_uniformsiv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	get_active_uniform_name: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: string) => void;
	get_uniform_block_index: (p1: any, p2: number, p3: string) => number;
	get_active_uniform_blockiv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_active_uniform_block_name: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: string) => void;
	uniform_block_binding: (p1: any, p2: number, p3: number, p4: number) => void;
	get_combiner_input_parameterfv_NV: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	get_combiner_input_parameteriv_NV: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	get_combiner_output_parameterfv_NV: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_combiner_output_parameteriv_NV: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_final_combiner_input_parameterfv_NV: (p1: any, p2: number, p3: number, p4: number) => void;
	get_final_combiner_input_parameteriv_NV: (p1: any, p2: number, p3: number, p4: number) => void;
	combiner_stage_parameterfv_NV: (p1: any, p2: number, p3: number, p4: number) => void;
	get_combiner_stage_parameterfv_NV: (p1: any, p2: number, p3: number, p4: number) => void;
	texture_range_APPLE: (p1: any, p2: number, p3: number, p4: any) => void;
	get_tex_parameter_pointerv_APPLE: (p1: any, p2: number, p3: number, p4: any) => void;
	blend_equation_separate_EXT: (p1: any, p2: number, p3: number) => void;
	sample_coverage: (p1: any, p2: number, p3: number) => void;
	sample_pass: (p1: any, p2: number) => void;
	pn_trianglesi_ATI: (p1: any, p2: number, p3: number) => void;
	pn_trianglesf_ATI: (p1: any, p2: number, p3: number) => void;
	gen_fences_APPLE: (p1: any, p2: number, p3: number) => void;
	delete_fences_APPLE: (p1: any, p2: number, p3: number) => void;
	set_fence_APPLE: (p1: any, p2: number) => void;
	is_fence_APPLE: (p1: any, p2: number) => number;
	test_fence_APPLE: (p1: any, p2: number) => number;
	finish_fence_APPLE: (p1: any, p2: number) => void;
	test_object_APPLE: (p1: any, p2: number, p3: number) => number;
	finish_object_APPLE: (p1: any, p2: number, p3: number) => void;
	bind_program_ARB: (p1: any, p2: number, p3: number) => void;
	delete_programs_ARB: (p1: any, p2: number, p3: number) => void;
	gen_programs_ARB: (p1: any, p2: number, p3: number) => void;
	is_program_ARB: (p1: any, p2: number) => number;
	vertex_attrib1s_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib1f_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib1d_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib2s_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex_attrib2f_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex_attrib2d_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex_attrib3s_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attrib3f_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attrib3d_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attrib4s_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	vertex_attrib4f_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	vertex_attrib4d_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	vertex_attrib4Nub_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	vertex_attrib1sv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib1fv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib1dv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib2sv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib2fv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib2dv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib3sv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib3fv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib3dv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4bv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4sv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4iv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4ubv_ARB: (p1: any, p2: number, p3: string) => void;
	vertex_attrib4usv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4uiv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4fv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4dv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4Nbv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4Nsv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4Niv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4Nubv_ARB: (p1: any, p2: number, p3: string) => void;
	vertex_attrib4Nusv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib4Nuiv_ARB: (p1: any, p2: number, p3: number) => void;
	vertex_attrib_pointer_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any) => void;
	enable_vertex_attrib_array_ARB: (p1: any, p2: number) => void;
	disable_vertex_attrib_array_ARB: (p1: any, p2: number) => void;
	get_vertex_attribdv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	get_vertex_attribfv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	get_vertex_attribiv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	get_vertex_attrib_pointerv_ARB: (p1: any, p2: number, p3: number, p4: any) => void;
	program_env_parameter4d_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	program_env_parameter4dv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	program_env_parameter4f_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	program_env_parameter4fv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	program_local_parameter4d_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	program_local_parameter4dv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	program_local_parameter4f_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	program_local_parameter4fv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	get_program_env_parameterdv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	get_program_env_parameterfv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	get_program_local_parameterdv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	get_program_local_parameterfv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	program_string_ARB: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	get_program_string_ARB: (p1: any, p2: number, p3: number, p4: any) => void;
	get_programiv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	enable_vertex_attrib_ARB: (p1: any, p2: number, p3: number) => void;
	disable_vertex_attrib_ARB: (p1: any, p2: number, p3: number) => void;
	is_vertex_attrib_enabled_ARB: (p1: any, p2: number, p3: number) => number;
	map_vertex_attrib1d_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number) => void;
	map_vertex_attrib1f_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number) => void;
	map_vertex_attrib2d_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number) => void;
	map_vertex_attrib2f_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number) => void;
	point_parameterf: (p1: any, p2: number, p3: number) => void;
	point_parameterfv: (p1: any, p2: number, p3: number) => void;
	point_parameteri: (p1: any, p2: number, p3: number) => void;
	point_parameteriv: (p1: any, p2: number, p3: number) => void;
	fog_coordf: (p1: any, p2: number) => void;
	fog_coordfv: (p1: any, p2: number) => void;
	fog_coordd: (p1: any, p2: number) => void;
	fog_coorddv: (p1: any, p2: number) => void;
	fog_coord_pointer: (p1: any, p2: number, p3: number, p4: any) => void;
	vertex_array_parameteri_EXT: (p1: any, p2: number, p3: number) => void;
	bind_vertex_array_EXT: (p1: any, p2: number) => void;
	delete_vertex_arrays_EXT: (p1: any, p2: number, p3: number) => void;
	gen_vertex_arrays_EXT: (p1: any, p2: number, p3: number) => void;
	is_vertex_array_EXT: (p1: any, p2: number) => number;
	element_pointer_APPLE: (p1: any, p2: number, p3: any) => void;
	draw_element_array_APPLE: (p1: any, p2: number, p3: number, p4: number) => void;
	draw_range_element_array_APPLE: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	weightbv_ARB: (p1: any, p2: number, p3: number) => void;
	weightsv_ARB: (p1: any, p2: number, p3: number) => void;
	weightiv_ARB: (p1: any, p2: number, p3: number) => void;
	weightfv_ARB: (p1: any, p2: number, p3: number) => void;
	weightdv_ARB: (p1: any, p2: number, p3: number) => void;
	weightubv_ARB: (p1: any, p2: number, p3: string) => void;
	weightusv_ARB: (p1: any, p2: number, p3: number) => void;
	weightuiv_ARB: (p1: any, p2: number, p3: number) => void;
	weight_pointer_ARB: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	vertex_blend_ARB: (p1: any, p2: number) => void;
	multi_draw_arrays: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	multi_draw_elements: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: number) => void;
	window_pos2d: (p1: any, p2: number, p3: number) => void;
	window_pos2dv: (p1: any, p2: number) => void;
	window_pos2f: (p1: any, p2: number, p3: number) => void;
	window_pos2fv: (p1: any, p2: number) => void;
	window_pos2i: (p1: any, p2: number, p3: number) => void;
	window_pos2iv: (p1: any, p2: number) => void;
	window_pos2s: (p1: any, p2: number, p3: number) => void;
	window_pos2sv: (p1: any, p2: number) => void;
	window_pos3d: (p1: any, p2: number, p3: number, p4: number) => void;
	window_pos3dv: (p1: any, p2: number) => void;
	window_pos3f: (p1: any, p2: number, p3: number, p4: number) => void;
	window_pos3fv: (p1: any, p2: number) => void;
	window_pos3i: (p1: any, p2: number, p3: number, p4: number) => void;
	window_pos3iv: (p1: any, p2: number) => void;
	window_pos3s: (p1: any, p2: number, p3: number, p4: number) => void;
	window_pos3sv: (p1: any, p2: number) => void;
	active_stencil_face_EXT: (p1: any, p2: number) => void;
	stencil_op_separate_ATI: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	stencil_func_separate_ATI: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	flush_render_APPLE: (p1: any) => void;
	finish_render_APPLE: (p1: any) => void;
	swap_APPLE: (p1: any) => void;
	delete_object_ARB: (p1: any, p2: any) => void;
	get_handle_ARB: (p1: any, p2: number) => any;
	detach_object_ARB: (p1: any, p2: any, p3: any) => void;
	create_shader_object_ARB: (p1: any, p2: number) => any;
	shader_source_ARB: (p1: any, p2: any, p3: number, p4: string, p5: number) => void;
	compile_shader_ARB: (p1: any, p2: any) => void;
	create_program_object_ARB: (p1: any) => any;
	attach_object_ARB: (p1: any, p2: any, p3: any) => void;
	link_program_ARB: (p1: any, p2: any) => void;
	use_program_object_ARB: (p1: any, p2: any) => void;
	validate_program_ARB: (p1: any, p2: any) => void;
	uniform1f_ARB: (p1: any, p2: number, p3: number) => void;
	uniform2f_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform3f_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform4f_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	uniform1i_ARB: (p1: any, p2: number, p3: number) => void;
	uniform2i_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform3i_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform4i_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	uniform1fv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform2fv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform3fv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform4fv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform1iv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform2iv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform3iv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform4iv_ARB: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform_matrix2fv_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix3fv_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix4fv_ARB: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_object_parameterfv_ARB: (p1: any, p2: any, p3: number, p4: number) => void;
	get_object_parameteriv_ARB: (p1: any, p2: any, p3: number, p4: number) => void;
	get_info_log_ARB: (p1: any, p2: any, p3: number, p4: number, p5: string) => void;
	get_attached_objects_ARB: (p1: any, p2: any, p3: number, p4: number, p5: any) => void;
	get_uniform_location_ARB: (p1: any, p2: any, p3: string) => number;
	get_active_uniform_ARB: (p1: any, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: string) => void;
	get_uniformfv_ARB: (p1: any, p2: any, p3: number, p4: number) => void;
	get_uniformiv_ARB: (p1: any, p2: any, p3: number, p4: number) => void;
	get_shader_source_ARB: (p1: any, p2: any, p3: number, p4: number, p5: string) => void;
	bind_attrib_location_ARB: (p1: any, p2: any, p3: number, p4: string) => void;
	get_active_attrib_ARB: (p1: any, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: string) => void;
	get_attrib_location_ARB: (p1: any, p2: any, p3: string) => number;
	clamp_color_ARB: (p1: any, p2: number, p3: number) => void;
	gen_queries: (p1: any, p2: number, p3: number) => void;
	delete_queries: (p1: any, p2: number, p3: number) => void;
	is_query: (p1: any, p2: number) => number;
	begin_query: (p1: any, p2: number, p3: number) => void;
	end_query: (p1: any, p2: number) => void;
	get_queryiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_query_objectiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_query_objectuiv: (p1: any, p2: number, p3: number, p4: number) => void;
	bind_buffer: (p1: any, p2: number, p3: number) => void;
	delete_buffers: (p1: any, p2: number, p3: number) => void;
	gen_buffers: (p1: any, p2: number, p3: number) => void;
	is_buffer: (p1: any, p2: number) => number;
	buffer_data: (p1: any, p2: number, p3: number, p4: any, p5: number) => void;
	buffer_sub_data: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	get_buffer_sub_data: (p1: any, p2: number, p3: number, p4: number, p5: any) => void;
	map_buffer: (p1: any, p2: number, p3: number) => any;
	unmap_buffer: (p1: any, p2: number) => number;
	get_buffer_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_buffer_pointerv: (p1: any, p2: number, p3: number, p4: any) => void;
	depth_bounds_EXT: (p1: any, p2: number, p3: number) => void;
	draw_buffers_ARB: (p1: any, p2: number, p3: number) => void;
	is_shader: (p1: any, p2: number) => number;
	is_program: (p1: any, p2: number) => number;
	get_shaderiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_programiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_shader_info_log: (p1: any, p2: number, p3: number, p4: number, p5: string) => void;
	get_program_info_log: (p1: any, p2: number, p3: number, p4: number, p5: string) => void;
	stencil_func_separate: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	stencil_mask_separate: (p1: any, p2: number, p3: number) => void;
	multi_draw_element_array_APPLE: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	multi_draw_range_element_array_APPLE: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	is_renderbuffer_EXT: (p1: any, p2: number) => number;
	bind_renderbuffer_EXT: (p1: any, p2: number, p3: number) => void;
	delete_renderbuffers_EXT: (p1: any, p2: number, p3: number) => void;
	gen_renderbuffers_EXT: (p1: any, p2: number, p3: number) => void;
	renderbuffer_storage_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_renderbuffer_parameteriv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	is_framebuffer_EXT: (p1: any, p2: number) => number;
	bind_framebuffer_EXT: (p1: any, p2: number, p3: number) => void;
	delete_framebuffers_EXT: (p1: any, p2: number, p3: number) => void;
	gen_framebuffers_EXT: (p1: any, p2: number, p3: number) => void;
	check_framebuffer_status_EXT: (p1: any, p2: number) => number;
	framebuffer_texture1D_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	framebuffer_texture2D_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	framebuffer_texture3D_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	framebuffer_renderbuffer_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_framebuffer_attachment_parameteriv_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	generate_mipmap_EXT: (p1: any, p2: number) => void;
	buffer_parameteri_APPLE: (p1: any, p2: number, p3: number, p4: number) => void;
	flush_mapped_buffer_range_APPLE: (p1: any, p2: number, p3: number, p4: number) => void;
	program_env_parameters4fv_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_local_parameters4fv_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	object_purgeable_APPLE: (p1: any, p2: number, p3: number, p4: number) => number;
	object_unpurgeable_APPLE: (p1: any, p2: number, p3: number, p4: number) => number;
	get_object_parameteriv_APPLE: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_parameteri_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	framebuffer_texture_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	framebuffer_texture_layer_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	framebuffer_texture_face_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	bind_buffer_range_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	bind_buffer_offset_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	bind_buffer_base_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	begin_transform_feedback_EXT: (p1: any, p2: number) => void;
	end_transform_feedback_EXT: (p1: any) => void;
	transform_feedback_varyings_EXT: (p1: any, p2: number, p3: number, p4: string, p5: number) => void;
	get_transform_feedback_varying_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: string) => void;
	get_integer_indexedv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	get_boolean_indexedv_EXT: (p1: any, p2: number, p3: number, p4: string) => void;
	uniform_buffer_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	get_uniform_buffer_size_EXT: (p1: any, p2: number, p3: number) => number;
	get_uniform_buffer_offset_EXT: (p1: any, p2: number, p3: number) => number;
	clear_colorIi_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	clear_colorIui_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	tex_parameterIiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	tex_parameterIuiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	get_tex_parameterIiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	get_tex_parameterIuiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex_attribI1i_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI2i_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex_attribI3i_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attribI4i_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	vertex_attribI1ui_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI2ui_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex_attribI3ui_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attribI4ui_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	vertex_attribI1iv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI2iv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI3iv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI4iv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI1uiv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI2uiv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI3uiv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI4uiv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI4bv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI4sv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI4ubv_EXT: (p1: any, p2: number, p3: string) => void;
	vertex_attribI4usv_EXT: (p1: any, p2: number, p3: number) => void;
	vertex_attribI_pointer_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: any) => void;
	get_vertex_attribIiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	get_vertex_attribIuiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform1ui_EXT: (p1: any, p2: number, p3: number) => void;
	uniform2ui_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform3ui_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform4ui_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	uniform1uiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform2uiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform3uiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform4uiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	get_uniformuiv_EXT: (p1: any, p2: number, p3: number, p4: number) => void;
	bind_frag_data_location_EXT: (p1: any, p2: number, p3: number, p4: string) => void;
	get_frag_data_location_EXT: (p1: any, p2: number, p3: string) => number;
	color_mask_indexed_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	enable_indexed_EXT: (p1: any, p2: number, p3: number) => void;
	disable_indexed_EXT: (p1: any, p2: number, p3: number) => void;
	is_enabled_indexed_EXT: (p1: any, p2: number, p3: number) => number;
	uniform_matrix2x3fv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix3x2fv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix2x4fv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix4x2fv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix3x4fv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix4x3fv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	blit_framebuffer_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number) => void;
	renderbuffer_storage_multisample_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	begin_conditional_render_NV: (p1: any, p2: number, p3: number) => void;
	end_conditional_render_NV: (p1: any) => void;
	get_attached_shaders: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	provoking_vertex_EXT: (p1: any, p2: number) => void;
	vertex_attrib_divisor: (p1: any, p2: number, p3: number) => void;
	draw_arrays_instanced: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	draw_elements_instanced: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: number) => void;
	draw_elements_base_vertex: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: number) => void;
	draw_range_elements_base_vertex: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any, p8: number) => void;
	draw_elements_instanced_base_vertex: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: number, p7: number) => void;
	multi_draw_elements_base_vertex: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: number, p7: number) => void;
	bind_vertex_array_ARB: (p1: any, p2: number) => void;
	delete_vertex_arrays_ARB: (p1: any, p2: number, p3: number) => void;
	gen_vertex_arrays_ARB: (p1: any, p2: number, p3: number) => void;
	is_vertex_array_ARB: (p1: any, p2: number) => number;
	point_size_pointer: (p1: any, p2: number, p3: number, p4: any) => void;
	vertex_point_sizef_APPLE: (p1: any, p2: number) => void;
	clear_bufferiv: (p1: any, p2: number, p3: number, p4: number) => void;
	clear_bufferuiv: (p1: any, p2: number, p3: number, p4: number) => void;
	clear_bufferfv: (p1: any, p2: number, p3: number, p4: number) => void;
	clear_bufferfi: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_stringi: (p1: any, p2: number, p3: number) => string;
	fence_sync: (p1: any, p2: number, p3: number) => any;
	is_sync: (p1: any, p2: any) => number;
	delete_sync: (p1: any, p2: any) => void;
	client_wait_sync: (p1: any, p2: any, p3: number, p4: number) => number;
	wait_sync: (p1: any, p2: any, p3: number, p4: number) => void;
	get_integer64v_sync: (p1: any, p2: number, p3: number) => void;
	get_synciv: (p1: any, p2: any, p3: number, p4: number, p5: number, p6: number) => void;
	tex_image2D_multisample: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	tex_image3D_multisample: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number) => void;
	get_multisamplefv: (p1: any, p2: number, p3: number, p4: number) => void;
	sample_maski: (p1: any, p2: number, p3: number) => void;
	tex_buffer: (p1: any, p2: number, p3: number, p4: number) => void;
	copy_buffer_sub_data: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	primitive_restart_index: (p1: any, p2: number) => void;
	get_query_objecti64v: (p1: any, p2: number, p3: number, p4: number) => void;
	get_query_objectui64v: (p1: any, p2: number, p3: number, p4: number) => void;
	map_buffer_range: (p1: any, p2: number, p3: number, p4: number, p5: number) => any;
	flush_mapped_buffer_range: (p1: any, p2: number, p3: number, p4: number) => void;
	query_counter: (p1: any, p2: number, p3: number) => void;
	get_integer64i_v: (p1: any, p2: number, p3: number, p4: number) => void;
	get_buffer_parameteri64v: (p1: any, p2: number, p3: number, p4: number) => void;
	gen_samplers: (p1: any, p2: number, p3: number) => void;
	delete_samplers: (p1: any, p2: number, p3: number) => void;
	is_sampler: (p1: any, p2: number) => number;
	bind_sampler: (p1: any, p2: number, p3: number) => void;
	sampler_parameteri: (p1: any, p2: number, p3: number, p4: number) => void;
	sampler_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	sampler_parameterf: (p1: any, p2: number, p3: number, p4: number) => void;
	sampler_parameterfv: (p1: any, p2: number, p3: number, p4: number) => void;
	sampler_parameterIiv: (p1: any, p2: number, p3: number, p4: number) => void;
	sampler_parameterIuiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_sampler_parameteriv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_sampler_parameterfv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_sampler_parameterIiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_sampler_parameterIuiv: (p1: any, p2: number, p3: number, p4: number) => void;
	label_object_EXT: (p1: any, p2: number, p3: number, p4: number, p5: string) => void;
	get_object_label_EXT: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: string) => void;
	insert_event_marker_EXT: (p1: any, p2: number, p3: string) => void;
	push_group_marker_EXT: (p1: any, p2: number, p3: string) => void;
	pop_group_marker_EXT: (p1: any) => void;
	use_program_stages: (p1: any, p2: number, p3: number, p4: number) => void;
	active_shader_program: (p1: any, p2: number, p3: number) => void;
	create_shader_programv: (p1: any, p2: number, p3: number, p4: string) => number;
	bind_program_pipeline: (p1: any, p2: number) => void;
	delete_program_pipelines: (p1: any, p2: number, p3: number) => void;
	gen_program_pipelines: (p1: any, p2: number, p3: number) => void;
	is_program_pipeline: (p1: any, p2: number) => number;
	get_program_pipelineiv: (p1: any, p2: number, p3: number, p4: number) => void;
	validate_program_pipeline: (p1: any, p2: number) => void;
	get_program_pipeline_info_log: (p1: any, p2: number, p3: number, p4: number, p5: string) => void;
	program_uniform1i: (p1: any, p2: number, p3: number, p4: number) => void;
	program_uniform2i: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform3i: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform4i: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	program_uniform1f: (p1: any, p2: number, p3: number, p4: number) => void;
	program_uniform2f: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform3f: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform4f: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	program_uniform1iv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform2iv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform3iv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform4iv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform1fv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform2fv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform3fv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform4fv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform_matrix2fv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix3fv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix4fv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform1ui: (p1: any, p2: number, p3: number, p4: number) => void;
	program_uniform2ui: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform3ui: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform4ui: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	program_uniform1uiv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform2uiv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform3uiv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform4uiv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform_matrix2x3fv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix3x2fv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix2x4fv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix4x2fv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix3x4fv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix4x3fv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	bind_frag_data_location_indexed: (p1: any, p2: number, p3: number, p4: number, p5: string) => void;
	get_frag_data_index: (p1: any, p2: number, p3: string) => number;
	blend_func_i: (p1: any, p2: number, p3: number, p4: number) => void;
	blend_func_separate_i: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	blend_equation_i: (p1: any, p2: number, p3: number) => void;
	blend_equation_separate_i: (p1: any, p2: number, p3: number, p4: number) => void;
	named_string_ARB: (p1: any, p2: number, p3: number, p4: string, p5: number, p6: string) => void;
	delete_named_string_ARB: (p1: any, p2: number, p3: string) => void;
	compile_shader_include_ARB: (p1: any, p2: number, p3: number, p4: string, p5: number) => void;
	is_named_string_ARB: (p1: any, p2: number, p3: string) => number;
	get_named_string_ARB: (p1: any, p2: number, p3: string, p4: number, p5: number, p6: string) => void;
	get_named_string_iv_ARB: (p1: any, p2: number, p3: string, p4: number, p5: number) => void;
	release_shader_compiler: (p1: any) => void;
	shader_binary: (p1: any, p2: number, p3: number, p4: number, p5: any, p6: number) => void;
	get_shader_precision_format: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	depth_rangef: (p1: any, p2: number, p3: number) => void;
	clear_depthf: (p1: any, p2: number) => void;
	vertex_attribP1ui: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attribP2ui: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attribP3ui: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attribP4ui: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attribP1uiv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attribP2uiv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attribP3uiv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attribP4uiv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_program_binary: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: any) => void;
	program_binary: (p1: any, p2: number, p3: number, p4: any, p5: number) => void;
	min_sample_shading: (p1: any, p2: number) => void;
	viewport_arrayv: (p1: any, p2: number, p3: number, p4: number) => void;
	viewport_indexedf: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	viewport_indexedfv: (p1: any, p2: number, p3: number) => void;
	scissor_arrayv: (p1: any, p2: number, p3: number, p4: number) => void;
	scissor_indexed: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	scissor_indexedv: (p1: any, p2: number, p3: number) => void;
	depth_range_arrayv: (p1: any, p2: number, p3: number, p4: number) => void;
	depth_range_indexed: (p1: any, p2: number, p3: number, p4: number) => void;
	get_floati_v: (p1: any, p2: number, p3: number, p4: number) => void;
	get_doublei_v: (p1: any, p2: number, p3: number, p4: number) => void;
	draw_arrays_indirect: (p1: any, p2: number, p3: any) => void;
	draw_elements_indirect: (p1: any, p2: number, p3: number, p4: any) => void;
	patch_parameteri: (p1: any, p2: number, p3: number) => void;
	patch_parameterfv: (p1: any, p2: number, p3: number) => void;
	bind_transform_feedback: (p1: any, p2: number, p3: number) => void;
	gen_transform_feedbacks: (p1: any, p2: number, p3: number) => void;
	delete_transform_feedbacks: (p1: any, p2: number, p3: number) => void;
	pause_transform_feedback: (p1: any) => void;
	resume_transform_feedback: (p1: any) => void;
	is_transform_feedback: (p1: any, p2: number) => number;
	draw_transform_feedback: (p1: any, p2: number, p3: number) => void;
	begin_query_indexed: (p1: any, p2: number, p3: number, p4: number) => void;
	end_query_indexed: (p1: any, p2: number, p3: number) => void;
	get_query_indexediv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	draw_transform_feedback_stream: (p1: any, p2: number, p3: number, p4: number) => void;
	program_uniform1d: (p1: any, p2: number, p3: number, p4: number) => void;
	program_uniform2d: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform3d: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform4d: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	program_uniform1dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform2dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform3dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform4dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	program_uniform_matrix2dv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix3dv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix4dv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix2x3dv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix3x2dv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix2x4dv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix4x2dv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix3x4dv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	program_uniform_matrix4x3dv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	uniform1d: (p1: any, p2: number, p3: number) => void;
	uniform2d: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform3d: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform4d: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	uniform1dv: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform2dv: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform3dv: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform4dv: (p1: any, p2: number, p3: number, p4: number) => void;
	uniform_matrix2dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix3dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix4dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix2x3dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix3x2dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix2x4dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix4x2dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix3x4dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	uniform_matrix4x3dv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_uniformdv: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex_attribl1d: (p1: any, p2: number, p3: number) => void;
	vertex_attribl2d: (p1: any, p2: number, p3: number, p4: number) => void;
	vertex_attribl3d: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	vertex_attribl4d: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	vertex_attribl1dv: (p1: any, p2: number, p3: number) => void;
	vertex_attribl2dv: (p1: any, p2: number, p3: number) => void;
	vertex_attribl3dv: (p1: any, p2: number, p3: number) => void;
	vertex_attribl4dv: (p1: any, p2: number, p3: number) => void;
	vertex_attrib_lpointer: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: any) => void;
	get_vertex_attrib_ldv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_subroutine_uniform_location: (p1: any, p2: number, p3: number, p4: string) => number;
	get_subroutine_index: (p1: any, p2: number, p3: number, p4: string) => number;
	get_active_subroutine_uniformiv: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	get_active_subroutine_uniform_name: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: string) => void;
	get_active_subroutine_name: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: string) => void;
	uniform_subroutinesuiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_uniform_subroutineuiv: (p1: any, p2: number, p3: number, p4: number) => void;
	get_program_stageiv: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	get_internal_formativ: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	tex_storage1D: (p1: any, p2: number, p3: number, p4: number, p5: number) => void;
	tex_storage2D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number) => void;
	tex_storage3D: (p1: any, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number) => void;
	label_object_with_responsible_process_APPLE: (p1: any, p2: number, p3: number, p4: number) => void;
	texture_barrier_NV: (p1: any) => void;
	multi_draw_elements_indirect_APPLE: (p1: any, p2: number, p3: number, p4: any, p5: number, p6: number) => void;
}
declare var GLIFunctionDispatch: GLIFunctionDispatch;

interface _CGLContextObject {
	rend: any;
	disp: GLIFunctionDispatch;
	priv: any;
	stak: any;
}
declare var _CGLContextObject: _CGLContextObject;

declare function glActiveStencilFaceEXT(face: number): void;

declare function glActiveTextureARB(texture: number): void;

declare function glAttachObjectARB(containerObj: any, obj: any): void;

declare function glBeginConditionalRenderNV(id: number, mode: number): void;

declare function glBeginQueryARB(target: number, id: number): void;

declare function glBeginTransformFeedbackEXT(primitiveMode: number): void;

declare function glBindAttribLocationARB(programObj: any, index: number, name: string | any): void;

declare function glBindBufferARB(target: number, buffer: number): void;

declare function glBindBufferBaseEXT(target: number, index: number, buffer: number): void;

declare function glBindBufferOffsetEXT(target: number, index: number, buffer: number, offset: number): void;

declare function glBindBufferRangeEXT(target: number, index: number, buffer: number, offset: number, size: number): void;

declare function glBindFragDataLocationEXT(program: number, colorNumber: number, name: string | any): void;

declare function glBindFramebuffer(target: number, framebuffer: number): void;

declare function glBindFramebufferEXT(target: number, framebuffer: number): void;

declare function glBindProgramARB(target: number, program: number): void;

declare function glBindRenderbuffer(target: number, renderbuffer: number): void;

declare function glBindRenderbufferEXT(target: number, renderbuffer: number): void;

declare function glBindVertexArrayAPPLE(id: number): void;

declare function glBlendColorEXT(red: number, green: number, blue: number, alpha: number): void;

declare function glBlendEquationEXT(mode: number): void;

declare function glBlendEquationSeparateATI(equationRGB: number, equationAlpha: number): void;

declare function glBlendEquationSeparateEXT(modeRGB: number, modeAlpha: number): void;

declare function glBlendFunc(sfactor: number, dfactor: number): void;

declare function glBlendFuncSeparateEXT(sfactorRGB: number, dfactorRGB: number, sfactorAlpha: number, dfactorAlpha: number): void;

declare function glBlitFramebuffer(srcX0: number, srcY0: number, srcX1: number, srcY1: number, dstX0: number, dstY0: number, dstX1: number, dstY1: number, mask: number, filter: number): void;

declare function glBlitFramebufferEXT(srcX0: number, srcY0: number, srcX1: number, srcY1: number, dstX0: number, dstY0: number, dstX1: number, dstY1: number, mask: number, filter: number): void;

declare function glBufferDataARB(target: number, size: number, data: any, usage: number): void;

declare function glBufferParameteriAPPLE(target: number, pname: number, param: number): void;

declare function glBufferSubDataARB(target: number, offset: number, size: number, data: any): void;

declare function glCheckFramebufferStatus(target: number): number;

declare function glCheckFramebufferStatusEXT(target: number): number;

declare function glClampColorARB(target: number, clamp: number): void;

declare function glClear(mask: number): void;

declare function glClearColor(red: number, green: number, blue: number, alpha: number): void;

declare function glClearColorIiEXT(r: number, g: number, b: number, a: number): void;

declare function glClearColorIuiEXT(r: number, g: number, b: number, a: number): void;

declare function glClearDepth(depth: number): void;

declare function glClearStencil(s: number): void;

declare function glClientActiveTextureARB(texture: number): void;

declare function glClientWaitSync(sync: any, flags: number, timeout: number): number;

declare function glColorMask(red: number, green: number, blue: number, alpha: number): void;

declare function glColorMaskIndexedEXT(index: number, r: number, g: number, b: number, a: number): void;

declare function glCompileShaderARB(shaderObj: any): void;

declare function glCompressedTexImage1DARB(target: number, level: number, internalformat: number, width: number, border: number, imageSize: number, data: any): void;

declare function glCompressedTexImage2DARB(target: number, level: number, internalformat: number, width: number, height: number, border: number, imageSize: number, data: any): void;

declare function glCompressedTexImage3DARB(target: number, level: number, internalformat: number, width: number, height: number, depth: number, border: number, imageSize: number, data: any): void;

declare function glCompressedTexSubImage1DARB(target: number, level: number, xoffset: number, width: number, format: number, imageSize: number, data: any): void;

declare function glCompressedTexSubImage2DARB(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, imageSize: number, data: any): void;

declare function glCompressedTexSubImage3DARB(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, imageSize: number, data: any): void;

declare function glCreateProgramObjectARB(): any;

declare function glCreateShaderObjectARB(shaderType: number): any;

declare function glCullFace(mode: number): void;

declare function glDeleteBuffersARB(n: number, buffers: number): void;

declare function glDeleteFencesAPPLE(n: number, fences: number): void;

declare function glDeleteFramebuffers(n: number, framebuffers: number): void;

declare function glDeleteFramebuffersEXT(n: number, framebuffers: number): void;

declare function glDeleteObjectARB(obj: any): void;

declare function glDeleteProgramsARB(n: number, programs: number): void;

declare function glDeleteQueriesARB(n: number, ids: number): void;

declare function glDeleteRenderbuffers(n: number, renderbuffers: number): void;

declare function glDeleteRenderbuffersEXT(n: number, renderbuffers: number): void;

declare function glDeleteSync(sync: any): void;

declare function glDeleteVertexArraysAPPLE(n: number, ids: number): void;

declare function glDepthBoundsEXT(zmin: number, zmax: number): void;

declare function glDepthFunc(func: number): void;

declare function glDepthMask(flag: number): void;

declare function glDepthRange(near: number, far: number): void;

declare function glDetachObjectARB(containerObj: any, attachedObj: any): void;

declare function glDisable(cap: number): void;

declare function glDisableIndexedEXT(target: number, index: number): void;

declare function glDisableVertexAttribAPPLE(index: number, pname: number): void;

declare function glDisableVertexAttribArrayARB(index: number): void;

declare function glDrawArraysInstancedARB(mode: number, first: number, count: number, primcount: number): void;

declare function glDrawBuffer(mode: number): void;

declare function glDrawBuffersARB(n: number, bufs: number): void;

declare function glDrawElementArrayAPPLE(mode: number, first: number, count: number): void;

declare function glDrawElementsBaseVertex(mode: number, count: number, type: number, indices: any, base_vertex: number): void;

declare function glDrawElementsInstancedARB(mode: number, count: number, type: number, indices: any, primcount: number): void;

declare function glDrawElementsInstancedBaseVertex(mode: number, count: number, type: number, indices: any, primcount: number, base_vertex: number): void;

declare function glDrawRangeElementArrayAPPLE(mode: number, start: number, end: number, first: number, count: number): void;

declare function glDrawRangeElementsBaseVertex(mode: number, start: number, end: number, count: number, type: number, indices: any, base_vertex: number): void;

declare function glDrawRangeElementsEXT(mode: number, start: number, end: number, count: number, type: number, indices: any): void;

declare function glElementPointerAPPLE(type: number, pointer: any): void;

declare function glEnable(cap: number): void;

declare function glEnableIndexedEXT(target: number, index: number): void;

declare function glEnableVertexAttribAPPLE(index: number, pname: number): void;

declare function glEnableVertexAttribArrayARB(index: number): void;

declare function glEndConditionalRenderNV(): void;

declare function glEndQueryARB(target: number): void;

declare function glEndTransformFeedbackEXT(): void;

declare function glFenceSync(condition: number, flags: number): any;

declare function glFinish(): void;

declare function glFinishFenceAPPLE(fence: number): void;

declare function glFinishObjectAPPLE(object_: number, name: number): void;

declare function glFinishRenderAPPLE(): void;

declare function glFlush(): void;

declare function glFlushMappedBufferRange(target: number, offset: number, length: number): void;

declare function glFlushMappedBufferRangeAPPLE(target: number, offset: number, size: number): void;

declare function glFlushRenderAPPLE(): void;

declare function glFlushVertexArrayRangeAPPLE(length: number, pointer: any): void;

declare function glFogCoordPointerEXT(type: number, stride: number, pointer: any): void;

declare function glFogCoorddEXT(coord: number): void;

declare function glFogCoorddv(coord: number): void;

declare function glFogCoorddvEXT(coord: number): void;

declare function glFogCoordfEXT(coord: number): void;

declare function glFogCoordfv(coord: number): void;

declare function glFogCoordfvEXT(coord: number): void;

declare function glFramebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: number): void;

declare function glFramebufferRenderbufferEXT(target: number, attachment: number, renderbuffertarget: number, renderbuffer: number): void;

declare function glFramebufferTexture1D(target: number, attachment: number, textarget: number, texture: number, level: number): void;

declare function glFramebufferTexture1DEXT(target: number, attachment: number, textarget: number, texture: number, level: number): void;

declare function glFramebufferTexture2D(target: number, attachment: number, textarget: number, texture: number, level: number): void;

declare function glFramebufferTexture2DEXT(target: number, attachment: number, textarget: number, texture: number, level: number): void;

declare function glFramebufferTexture3D(target: number, attachment: number, textarget: number, texture: number, level: number, zoffset: number): void;

declare function glFramebufferTexture3DEXT(target: number, attachment: number, textarget: number, texture: number, level: number, zoffset: number): void;

declare function glFramebufferTextureEXT(target: number, attachment: number, texture: number, level: number): void;

declare function glFramebufferTextureFaceEXT(target: number, attachment: number, texture: number, level: number, face: number): void;

declare function glFramebufferTextureLayer(target: number, attachment: number, texture: number, level: number, layer: number): void;

declare function glFramebufferTextureLayerEXT(target: number, attachment: number, texture: number, level: number, layer: number): void;

declare function glFrontFace(mode: number): void;

declare function glGenBuffersARB(n: number, buffers: number): void;

declare function glGenFencesAPPLE(n: number, fences: number): void;

declare function glGenFramebuffers(n: number, framebuffers: number): void;

declare function glGenFramebuffersEXT(n: number, framebuffers: number): void;

declare function glGenProgramsARB(n: number, programs: number): void;

declare function glGenQueriesARB(n: number, ids: number): void;

declare function glGenRenderbuffers(n: number, renderbuffers: number): void;

declare function glGenRenderbuffersEXT(n: number, renderbuffers: number): void;

declare function glGenVertexArraysAPPLE(n: number, ids: number): void;

declare function glGenerateMipmap(target: number): void;

declare function glGenerateMipmapEXT(target: number): void;

declare function glGetActiveAttribARB(programObj: any, index: number, maxLength: number, length: number, size: number, type: number, name: string | any): void;

declare function glGetActiveUniformARB(programObj: any, index: number, maxLength: number, length: number, size: number, type: number, name: string | any): void;

declare function glGetAttachedObjectsARB(containerObj: any, maxCount: number, count: number, obj: any): void;

declare function glGetAttribLocationARB(programObj: any, name: string | any): number;

declare function glGetBooleanIndexedvEXT(param: number, index: number, values: string | any): void;

declare function glGetBooleanv(pname: number, params: string | any): void;

declare function glGetBufferParameterivARB(target: number, pname: number, params: number): void;

declare function glGetBufferPointervARB(target: number, pname: number, params: any): void;

declare function glGetBufferSubDataARB(target: number, offset: number, size: number, data: any): void;

declare function glGetCompressedTexImageARB(target: number, level: number, data: any): void;

declare function glGetDoublev(pname: number, params: number): void;

declare function glGetError(): number;

declare function glGetFloatv(pname: number, params: number): void;

declare function glGetFragDataLocationEXT(program: number, name: string | any): number;

declare function glGetFramebufferAttachmentParameteriv(target: number, attachment: number, pname: number, params: number): void;

declare function glGetFramebufferAttachmentParameterivEXT(target: number, attachment: number, pname: number, params: number): void;

declare function glGetHandleARB(pname: number): any;

declare function glGetInfoLogARB(obj: any, maxLength: number, length: number, infoLog: string | any): void;

declare function glGetInteger64v(pname: number, params: number): void;

declare function glGetIntegerIndexedvEXT(param: number, index: number, values: number): void;

declare function glGetIntegerv(pname: number, params: number): void;

declare function glGetObjectLabelEXT(type: number, object_: number, bufSize: number, length: number, label: string | any): void;

declare function glGetObjectParameterfvARB(obj: any, pname: number, params: number): void;

declare function glGetObjectParameterivAPPLE(objectType: number, name: number, pname: number, params: number): void;

declare function glGetObjectParameterivARB(obj: any, pname: number, params: number): void;

declare function glGetProgramEnvParameterdvARB(target: number, index: number, params: number): void;

declare function glGetProgramEnvParameterfvARB(target: number, index: number, params: number): void;

declare function glGetProgramLocalParameterdvARB(target: number, index: number, params: number): void;

declare function glGetProgramLocalParameterfvARB(target: number, index: number, params: number): void;

declare function glGetProgramStringARB(target: number, pname: number, string: any): void;

declare function glGetProgramivARB(target: number, pname: number, params: number): void;

declare function glGetQueryObjecti64vEXT(id: number, pname: number, params: number): void;

declare function glGetQueryObjectivARB(id: number, pname: number, params: number): void;

declare function glGetQueryObjectui64vEXT(id: number, pname: number, params: number): void;

declare function glGetQueryObjectuivARB(id: number, pname: number, params: number): void;

declare function glGetQueryivARB(target: number, pname: number, params: number): void;

declare function glGetRenderbufferParameteriv(target: number, pname: number, params: number): void;

declare function glGetRenderbufferParameterivEXT(target: number, pname: number, params: number): void;

declare function glGetShaderSourceARB(obj: any, maxLength: number, length: number, source: string | any): void;

declare function glGetString(name: number): string;

declare function glGetSynciv(sync: any, pname: number, bufSize: number, length: number, values: number): void;

declare function glGetTexImage(target: number, level: number, format: number, type: number, pixels: any): void;

declare function glGetTexLevelParameterfv(target: number, level: number, pname: number, params: number): void;

declare function glGetTexLevelParameteriv(target: number, level: number, pname: number, params: number): void;

declare function glGetTexParameterIivEXT(target: number, pname: number, params: number): void;

declare function glGetTexParameterIuivEXT(target: number, pname: number, params: number): void;

declare function glGetTexParameterPointervAPPLE(target: number, pname: number, params: any): void;

declare function glGetTexParameterfv(target: number, pname: number, params: number): void;

declare function glGetTexParameteriv(target: number, pname: number, params: number): void;

declare function glGetTransformFeedbackVaryingEXT(program: number, index: number, bufSize: number, length: number, size: number, type: number, name: string | any): void;

declare function glGetUniformBufferSizeEXT(program: number, location: number): number;

declare function glGetUniformLocationARB(programObj: any, name: string | any): number;

declare function glGetUniformOffsetEXT(program: number, location: number): number;

declare function glGetUniformfvARB(programObj: any, location: number, params: number): void;

declare function glGetUniformivARB(programObj: any, location: number, params: number): void;

declare function glGetUniformuivEXT(program: number, location: number, params: number): void;

declare function glGetVertexAttribIivEXT(index: number, pname: number, params: number): void;

declare function glGetVertexAttribIuivEXT(index: number, pname: number, params: number): void;

declare function glGetVertexAttribPointervARB(index: number, pname: number, pointer: any): void;

declare function glGetVertexAttribdvARB(index: number, pname: number, params: number): void;

declare function glGetVertexAttribfvARB(index: number, pname: number, params: number): void;

declare function glGetVertexAttribivARB(index: number, pname: number, params: number): void;

declare function glHint(target: number, mode: number): void;

declare function glInsertEventMarkerEXT(length: number, marker: string | any): void;

declare function glIsBufferARB(buffer: number): number;

declare function glIsEnabled(cap: number): number;

declare function glIsEnabledIndexedEXT(target: number, index: number): number;

declare function glIsFenceAPPLE(fence: number): number;

declare function glIsFramebuffer(framebuffer: number): number;

declare function glIsFramebufferEXT(framebuffer: number): number;

declare function glIsProgramARB(program: number): number;

declare function glIsQueryARB(id: number): number;

declare function glIsRenderbuffer(renderbuffer: number): number;

declare function glIsRenderbufferEXT(renderbuffer: number): number;

declare function glIsSync(sync: any): number;

declare function glIsVertexArrayAPPLE(id: number): number;

declare function glIsVertexAttribEnabledAPPLE(index: number, pname: number): number;

declare function glLabelObjectEXT(type: number, object_: number, length: number, label: string | any): void;

declare function glLineWidth(width: number): void;

declare function glLinkProgramARB(programObj: any): void;

declare function glLoadTransposeMatrixdARB(m: number): void;

declare function glLoadTransposeMatrixfARB(m: number): void;

declare function glLogicOp(opcode: number): void;

declare function glMapBufferARB(target: number, access: number): any;

declare function glMapBufferRange(target: number, offset: number, length: number, access: number): any;

declare function glMapVertexAttrib1dAPPLE(index: number, size: number, u1: number, u2: number, stride: number, order: number, points: number): void;

declare function glMapVertexAttrib1fAPPLE(index: number, size: number, u1: number, u2: number, stride: number, order: number, points: number): void;

declare function glMapVertexAttrib2dAPPLE(index: number, size: number, u1: number, u2: number, ustride: number, uorder: number, v1: number, v2: number, vstride: number, vorder: number, points: number): void;

declare function glMapVertexAttrib2fAPPLE(index: number, size: number, u1: number, u2: number, ustride: number, uorder: number, v1: number, v2: number, vstride: number, vorder: number, points: number): void;

declare function glMultTransposeMatrixdARB(m: number): void;

declare function glMultTransposeMatrixfARB(m: number): void;

declare function glMultiDrawArraysEXT(mode: number, first: number, count: number, primcount: number): void;

declare function glMultiDrawElementArrayAPPLE(mode: number, first: number, count: number, primcount: number): void;

declare function glMultiDrawElementsBaseVertex(mode: number, count: number, type: number, indices: any, primcount: number, base_vertex: number): void;

declare function glMultiDrawElementsEXT(mode: number, count: number, type: number, indices: any, primcount: number): void;

declare function glMultiDrawRangeElementArrayAPPLE(mode: number, start: number, end: number, first: number, count: number, primcount: number): void;

declare function glMultiTexCoord1dARB(target: number, s: number): void;

declare function glMultiTexCoord1dvARB(target: number, v: number): void;

declare function glMultiTexCoord1fARB(target: number, s: number): void;

declare function glMultiTexCoord1fvARB(target: number, v: number): void;

declare function glMultiTexCoord1iARB(target: number, s: number): void;

declare function glMultiTexCoord1ivARB(target: number, v: number): void;

declare function glMultiTexCoord1sARB(target: number, s: number): void;

declare function glMultiTexCoord1svARB(target: number, v: number): void;

declare function glMultiTexCoord2dARB(target: number, s: number, t: number): void;

declare function glMultiTexCoord2dvARB(target: number, v: number): void;

declare function glMultiTexCoord2fARB(target: number, s: number, t: number): void;

declare function glMultiTexCoord2fvARB(target: number, v: number): void;

declare function glMultiTexCoord2iARB(target: number, s: number, t: number): void;

declare function glMultiTexCoord2ivARB(target: number, v: number): void;

declare function glMultiTexCoord2sARB(target: number, s: number, t: number): void;

declare function glMultiTexCoord2svARB(target: number, v: number): void;

declare function glMultiTexCoord3dARB(target: number, s: number, t: number, r: number): void;

declare function glMultiTexCoord3dvARB(target: number, v: number): void;

declare function glMultiTexCoord3fARB(target: number, s: number, t: number, r: number): void;

declare function glMultiTexCoord3fvARB(target: number, v: number): void;

declare function glMultiTexCoord3iARB(target: number, s: number, t: number, r: number): void;

declare function glMultiTexCoord3ivARB(target: number, v: number): void;

declare function glMultiTexCoord3sARB(target: number, s: number, t: number, r: number): void;

declare function glMultiTexCoord3svARB(target: number, v: number): void;

declare function glMultiTexCoord4dARB(target: number, s: number, t: number, r: number, q: number): void;

declare function glMultiTexCoord4dvARB(target: number, v: number): void;

declare function glMultiTexCoord4fARB(target: number, s: number, t: number, r: number, q: number): void;

declare function glMultiTexCoord4fvARB(target: number, v: number): void;

declare function glMultiTexCoord4iARB(target: number, s: number, t: number, r: number, q: number): void;

declare function glMultiTexCoord4ivARB(target: number, v: number): void;

declare function glMultiTexCoord4sARB(target: number, s: number, t: number, r: number, q: number): void;

declare function glMultiTexCoord4svARB(target: number, v: number): void;

declare function glObjectPurgeableAPPLE(objectType: number, name: number, option: number): number;

declare function glObjectUnpurgeableAPPLE(objectType: number, name: number, option: number): number;

declare function glPixelStoref(pname: number, param: number): void;

declare function glPixelStorei(pname: number, param: number): void;

declare function glPointParameterf(pname: number, param: number): void;

declare function glPointParameterfARB(pname: number, param: number): void;

declare function glPointParameterfvARB(pname: number, params: number): void;

declare function glPointParameteri(pname: number, param: number): void;

declare function glPointParameteriNV(pname: number, param: number): void;

declare function glPointParameterivNV(pname: number, params: number): void;

declare function glPointSize(size: number): void;

declare function glPointSizePointerAPPLE(type: number, stride: number, pointer: any): void;

declare function glPolygonMode(face: number, mode: number): void;

declare function glPopGroupMarkerEXT(): void;

declare function glProgramEnvParameter4dARB(target: number, index: number, x: number, y: number, z: number, w: number): void;

declare function glProgramEnvParameter4dvARB(target: number, index: number, params: number): void;

declare function glProgramEnvParameter4fARB(target: number, index: number, x: number, y: number, z: number, w: number): void;

declare function glProgramEnvParameter4fvARB(target: number, index: number, params: number): void;

declare function glProgramEnvParameters4fvEXT(target: number, index: number, count: number, params: number): void;

declare function glProgramLocalParameter4dARB(target: number, index: number, x: number, y: number, z: number, w: number): void;

declare function glProgramLocalParameter4dvARB(target: number, index: number, params: number): void;

declare function glProgramLocalParameter4fARB(target: number, index: number, x: number, y: number, z: number, w: number): void;

declare function glProgramLocalParameter4fvARB(target: number, index: number, params: number): void;

declare function glProgramLocalParameters4fvEXT(target: number, index: number, count: number, params: number): void;

declare function glProgramParameteriEXT(program: number, pname: number, value: number): void;

declare function glProgramStringARB(target: number, format: number, len: number, string: any): void;

declare function glProvokingVertex(mode: number): void;

declare function glProvokingVertexEXT(mode: number): void;

declare function glPushGroupMarkerEXT(length: number, marker: string | any): void;

declare function glReadBuffer(mode: number): void;

declare function glReadPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: any): void;

declare function glRenderbufferStorage(target: number, internalformat: number, width: number, height: number): void;

declare function glRenderbufferStorageEXT(target: number, internalformat: number, width: number, height: number): void;

declare function glRenderbufferStorageMultisample(target: number, samples: number, internalformat: number, width: number, height: number): void;

declare function glRenderbufferStorageMultisampleEXT(target: number, samples: number, internalformat: number, width: number, height: number): void;

declare function glSampleCoverageARB(value: number, invert: number): void;

declare function glScissor(x: number, y: number, width: number, height: number): void;

declare function glSecondaryColor3bEXT(red: number, green: number, blue: number): void;

declare function glSecondaryColor3bvEXT(v: number): void;

declare function glSecondaryColor3dEXT(red: number, green: number, blue: number): void;

declare function glSecondaryColor3dvEXT(v: number): void;

declare function glSecondaryColor3fEXT(red: number, green: number, blue: number): void;

declare function glSecondaryColor3fvEXT(v: number): void;

declare function glSecondaryColor3iEXT(red: number, green: number, blue: number): void;

declare function glSecondaryColor3ivEXT(v: number): void;

declare function glSecondaryColor3sEXT(red: number, green: number, blue: number): void;

declare function glSecondaryColor3svEXT(v: number): void;

declare function glSecondaryColor3ubEXT(red: number, green: number, blue: number): void;

declare function glSecondaryColor3ubvEXT(v: string | any): void;

declare function glSecondaryColor3uiEXT(red: number, green: number, blue: number): void;

declare function glSecondaryColor3uivEXT(v: number): void;

declare function glSecondaryColor3usEXT(red: number, green: number, blue: number): void;

declare function glSecondaryColor3usvEXT(v: number): void;

declare function glSecondaryColorPointerEXT(size: number, type: number, stride: number, pointer: any): void;

declare function glSetFenceAPPLE(fence: number): void;

declare function glShaderSourceARB(shaderObj: any, count: number, string: string, length: number): void;

declare function glStencilFunc(func: number, ref: number, mask: number): void;

declare function glStencilFuncSeparateATI(frontfunc: number, backfunc: number, ref: number, mask: number): void;

declare function glStencilMask(mask: number): void;

declare function glStencilOp(fail: number, zfail: number, zpass: number): void;

declare function glStencilOpSeparateATI(face: number, sfail: number, dpfail: number, dppass: number): void;

declare function glSwapAPPLE(): void;

declare function glTestFenceAPPLE(fence: number): number;

declare function glTestObjectAPPLE(object_: number, name: number): number;

declare function glTexImage1D(target: number, level: number, internalformat: number, width: number, border: number, format: number, type: number, pixels: any): void;

declare function glTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: any): void;

declare function glTexParameterIivEXT(target: number, pname: number, params: number): void;

declare function glTexParameterIuivEXT(target: number, pname: number, params: number): void;

declare function glTexParameterf(target: number, pname: number, param: number): void;

declare function glTexParameterfv(target: number, pname: number, params: number): void;

declare function glTexParameteri(target: number, pname: number, param: number): void;

declare function glTexParameteriv(target: number, pname: number, params: number): void;

declare function glTextureBarrierNV(): void;

declare function glTextureRangeAPPLE(target: number, length: number, pointer: any): void;

declare function glTransformFeedbackVaryingsEXT(program: number, count: number, varyings: string, bufferMode: number): void;

declare function glUniform1fARB(location: number, v0: number): void;

declare function glUniform1fvARB(location: number, count: number, value: number): void;

declare function glUniform1iARB(location: number, v0: number): void;

declare function glUniform1ivARB(location: number, count: number, value: number): void;

declare function glUniform1uiEXT(location: number, v0: number): void;

declare function glUniform1uivEXT(location: number, count: number, value: number): void;

declare function glUniform2fARB(location: number, v0: number, v1: number): void;

declare function glUniform2fvARB(location: number, count: number, value: number): void;

declare function glUniform2iARB(location: number, v0: number, v1: number): void;

declare function glUniform2ivARB(location: number, count: number, value: number): void;

declare function glUniform2uiEXT(location: number, v0: number, v1: number): void;

declare function glUniform2uivEXT(location: number, count: number, value: number): void;

declare function glUniform3fARB(location: number, v0: number, v1: number, v2: number): void;

declare function glUniform3fvARB(location: number, count: number, value: number): void;

declare function glUniform3iARB(location: number, v0: number, v1: number, v2: number): void;

declare function glUniform3ivARB(location: number, count: number, value: number): void;

declare function glUniform3uiEXT(location: number, v0: number, v1: number, v2: number): void;

declare function glUniform3uivEXT(location: number, count: number, value: number): void;

declare function glUniform4fARB(location: number, v0: number, v1: number, v2: number, v3: number): void;

declare function glUniform4fvARB(location: number, count: number, value: number): void;

declare function glUniform4iARB(location: number, v0: number, v1: number, v2: number, v3: number): void;

declare function glUniform4ivARB(location: number, count: number, value: number): void;

declare function glUniform4uiEXT(location: number, v0: number, v1: number, v2: number, v3: number): void;

declare function glUniform4uivEXT(location: number, count: number, value: number): void;

declare function glUniformBufferEXT(program: number, location: number, buffer: number): void;

declare function glUniformMatrix2fvARB(location: number, count: number, transpose: number, value: number): void;

declare function glUniformMatrix3fvARB(location: number, count: number, transpose: number, value: number): void;

declare function glUniformMatrix4fvARB(location: number, count: number, transpose: number, value: number): void;

declare function glUnmapBufferARB(target: number): number;

declare function glUseProgramObjectARB(programObj: any): void;

declare function glValidateProgramARB(programObj: any): void;

declare function glVertexArrayParameteriAPPLE(pname: number, param: number): void;

declare function glVertexArrayRangeAPPLE(length: number, pointer: any): void;

declare function glVertexAttrib1dARB(index: number, x: number): void;

declare function glVertexAttrib1dvARB(index: number, v: number): void;

declare function glVertexAttrib1fARB(index: number, x: number): void;

declare function glVertexAttrib1fvARB(index: number, v: number): void;

declare function glVertexAttrib1sARB(index: number, x: number): void;

declare function glVertexAttrib1svARB(index: number, v: number): void;

declare function glVertexAttrib2dARB(index: number, x: number, y: number): void;

declare function glVertexAttrib2dvARB(index: number, v: number): void;

declare function glVertexAttrib2fARB(index: number, x: number, y: number): void;

declare function glVertexAttrib2fvARB(index: number, v: number): void;

declare function glVertexAttrib2sARB(index: number, x: number, y: number): void;

declare function glVertexAttrib2svARB(index: number, v: number): void;

declare function glVertexAttrib3dARB(index: number, x: number, y: number, z: number): void;

declare function glVertexAttrib3dvARB(index: number, v: number): void;

declare function glVertexAttrib3fARB(index: number, x: number, y: number, z: number): void;

declare function glVertexAttrib3fvARB(index: number, v: number): void;

declare function glVertexAttrib3sARB(index: number, x: number, y: number, z: number): void;

declare function glVertexAttrib3svARB(index: number, v: number): void;

declare function glVertexAttrib4NbvARB(index: number, v: number): void;

declare function glVertexAttrib4NivARB(index: number, v: number): void;

declare function glVertexAttrib4NsvARB(index: number, v: number): void;

declare function glVertexAttrib4NubARB(index: number, x: number, y: number, z: number, w: number): void;

declare function glVertexAttrib4NubvARB(index: number, v: string | any): void;

declare function glVertexAttrib4NuivARB(index: number, v: number): void;

declare function glVertexAttrib4NusvARB(index: number, v: number): void;

declare function glVertexAttrib4bvARB(index: number, v: number): void;

declare function glVertexAttrib4dARB(index: number, x: number, y: number, z: number, w: number): void;

declare function glVertexAttrib4dvARB(index: number, v: number): void;

declare function glVertexAttrib4fARB(index: number, x: number, y: number, z: number, w: number): void;

declare function glVertexAttrib4fvARB(index: number, v: number): void;

declare function glVertexAttrib4ivARB(index: number, v: number): void;

declare function glVertexAttrib4sARB(index: number, x: number, y: number, z: number, w: number): void;

declare function glVertexAttrib4svARB(index: number, v: number): void;

declare function glVertexAttrib4ubvARB(index: number, v: string | any): void;

declare function glVertexAttrib4uivARB(index: number, v: number): void;

declare function glVertexAttrib4usvARB(index: number, v: number): void;

declare function glVertexAttribDivisor(index: number, divisor: number): void;

declare function glVertexAttribDivisorARB(index: number, divisor: number): void;

declare function glVertexAttribI1iEXT(index: number, x: number): void;

declare function glVertexAttribI1ivEXT(index: number, v: number): void;

declare function glVertexAttribI1uiEXT(index: number, x: number): void;

declare function glVertexAttribI1uivEXT(index: number, v: number): void;

declare function glVertexAttribI2iEXT(index: number, x: number, y: number): void;

declare function glVertexAttribI2ivEXT(index: number, v: number): void;

declare function glVertexAttribI2uiEXT(index: number, x: number, y: number): void;

declare function glVertexAttribI2uivEXT(index: number, v: number): void;

declare function glVertexAttribI3iEXT(index: number, x: number, y: number, z: number): void;

declare function glVertexAttribI3ivEXT(index: number, v: number): void;

declare function glVertexAttribI3uiEXT(index: number, x: number, y: number, z: number): void;

declare function glVertexAttribI3uivEXT(index: number, v: number): void;

declare function glVertexAttribI4bvEXT(index: number, v: number): void;

declare function glVertexAttribI4iEXT(index: number, x: number, y: number, z: number, w: number): void;

declare function glVertexAttribI4ivEXT(index: number, v: number): void;

declare function glVertexAttribI4svEXT(index: number, v: number): void;

declare function glVertexAttribI4ubvEXT(index: number, v: string | any): void;

declare function glVertexAttribI4uiEXT(index: number, x: number, y: number, z: number, w: number): void;

declare function glVertexAttribI4uivEXT(index: number, v: number): void;

declare function glVertexAttribI4usvEXT(index: number, v: number): void;

declare function glVertexAttribIPointerEXT(index: number, size: number, type: number, stride: number, pointer: any): void;

declare function glVertexAttribPointerARB(index: number, size: number, type: number, normalized: number, stride: number, pointer: any): void;

declare function glVertexBlendARB(count: number): void;

declare function glVertexPointSizefAPPLE(size: number): void;

declare function glViewport(x: number, y: number, width: number, height: number): void;

declare function glWaitSync(sync: any, flags: number, timeout: number): void;

declare function glWeightPointerARB(size: number, type: number, stride: number, pointer: any): void;

declare function glWeightbvARB(size: number, weights: number): void;

declare function glWeightdvARB(size: number, weights: number): void;

declare function glWeightfvARB(size: number, weights: number): void;

declare function glWeightivARB(size: number, weights: number): void;

declare function glWeightsvARB(size: number, weights: number): void;

declare function glWeightubvARB(size: number, weights: string | any): void;

declare function glWeightuivARB(size: number, weights: number): void;

declare function glWeightusvARB(size: number, weights: number): void;

declare function glWindowPos2dARB(x: number, y: number): void;

declare function glWindowPos2dvARB(p: number): void;

declare function glWindowPos2fARB(x: number, y: number): void;

declare function glWindowPos2fvARB(p: number): void;

declare function glWindowPos2i(x: number, y: number): void;

declare function glWindowPos2iARB(x: number, y: number): void;

declare function glWindowPos2ivARB(p: number): void;

declare function glWindowPos2sARB(x: number, y: number): void;

declare function glWindowPos2svARB(p: number): void;

declare function glWindowPos3dARB(x: number, y: number, z: number): void;

declare function glWindowPos3dvARB(p: number): void;

declare function glWindowPos3fARB(x: number, y: number, z: number): void;

declare function glWindowPos3fvARB(p: number): void;

declare function glWindowPos3iARB(x: number, y: number, z: number): void;

declare function glWindowPos3ivARB(p: number): void;

declare function glWindowPos3sARB(x: number, y: number, z: number): void;

declare function glWindowPos3svARB(p: number): void;

declare const kCGLRendererATIRadeonX2000ID: number;

declare const kCGLRendererATIRadeonX3000ID: number;

declare const kCGLRendererATIRadeonX4000ID: number;

declare const kCGLRendererAppleSWID: number;

declare const kCGLRendererGeForce8xxxID: number;

declare const kCGLRendererGeForceID: number;

declare const kCGLRendererGenericFloatID: number;

declare const kCGLRendererIntelHD4000ID: number;

declare const kCGLRendererIntelHD5000ID: number;

declare const kCGLRendererIntelHDID: number;
