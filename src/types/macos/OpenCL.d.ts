
declare function clBuildProgram(p1: any, p2: number, p3: any, p4: string | any, p5: (p1: any, p2: any) => void, p6: any): number;

declare function clCompileProgram(p1: any, p2: number, p3: any, p4: string | any, p5: number, p6: any, p7: string, p8: (p1: any, p2: any) => void, p9: any): number;

declare function clCreateBuffer(p1: any, p2: number, p3: number, p4: any, p5: number): any;

declare function clCreateCommandQueue(p1: any, p2: any, p3: number, p4: number): any;

declare function clCreateCommandQueueWithPropertiesAPPLE(p1: any, p2: any, p3: number, p4: number): any;

declare function clCreateContext(p1: number, p2: number, p3: any, p4: (p1: string, p2: any, p3: number, p4: any) => void, p5: any, p6: number): any;

declare function clCreateContextAndCommandQueueAPPLE(p1: number, p2: number, p3: any, p4: (p1: string, p2: any, p3: number, p4: any) => void, p5: any, p6: number, p7: any, p8: any): number;

declare function clCreateContextFromType(p1: number, p2: number, p3: (p1: string, p2: any, p3: number, p4: any) => void, p4: any, p5: number): any;

declare function clCreateDAGAPPLE(c: any): any;

declare function clCreateEventFromGLsyncKHR(p1: any, p2: any, p3: number): any;

declare function clCreateFromGLBuffer(p1: any, p2: number, p3: number, p4: number): any;

declare function clCreateFromGLRenderbuffer(p1: any, p2: number, p3: number, p4: number): any;

declare function clCreateFromGLTexture(p1: any, p2: number, p3: number, p4: number, p5: number, p6: number): any;

declare function clCreateImage(p1: any, p2: number, p3: cl_image_format, p4: cl_image_desc, p5: any, p6: number): any;

declare function clCreateImageFromIOSurface2DAPPLE(p1: any, p2: number, p3: cl_image_format, p4: number, p5: number, p6: any, p7: number): any;

declare function clCreateImageFromIOSurfaceWithPropertiesAPPLE(p1: any, p2: number, p3: cl_image_format, p4: cl_image_desc, p5: number, p6: number): any;

declare function clCreateKernel(p1: any, p2: string | any, p3: number): any;

declare function clCreateKernelFromDAGAPPLE(d: any, n: number, list: any): any;

declare function clCreateKernelsInProgram(p1: any, p2: number, p3: any, p4: number): number;

declare function clCreateProgramAndKernelsWithSourceAPPLE(p1: any, p2: number, p3: string, p4: number, p5: number, p6: any, p7: string | any, p8: number, p9: string, p10: any, p11: any): number;

declare function clCreateProgramWithBinary(p1: any, p2: number, p3: any, p4: number, p5: string, p6: number, p7: number): any;

declare function clCreateProgramWithBuiltInKernels(p1: any, p2: number, p3: any, p4: string | any, p5: number): any;

declare function clCreateProgramWithSource(p1: any, p2: number, p3: string, p4: number, p5: number): any;

declare function clCreateSampler(p1: any, p2: number, p3: number, p4: number, p5: number): any;

declare function clCreateSubBuffer(p1: any, p2: number, p3: number, p4: any, p5: number): any;

declare function clCreateSubDevices(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clCreateUserEvent(p1: any, p2: number): any;

declare function clEnqueueAcquireGLObjects(p1: any, p2: number, p3: any, p4: number, p5: any, p6: any): number;

declare function clEnqueueBarrierWithWaitList(p1: any, p2: number, p3: any, p4: any): number;

declare function clEnqueueCopyBuffer(p1: any, p2: any, p3: any, p4: number, p5: number, p6: number, p7: number, p8: any, p9: any): number;

declare function clEnqueueCopyBufferRect(p1: any, p2: any, p3: any, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: any, p13: any): number;

declare function clEnqueueCopyBufferToImage(p1: any, p2: any, p3: any, p4: number, p5: number, p6: number, p7: number, p8: any, p9: any): number;

declare function clEnqueueCopyImage(p1: any, p2: any, p3: any, p4: number, p5: number, p6: number, p7: number, p8: any, p9: any): number;

declare function clEnqueueCopyImageToBuffer(p1: any, p2: any, p3: any, p4: number, p5: number, p6: number, p7: number, p8: any, p9: any): number;

declare function clEnqueueFillBuffer(p1: any, p2: any, p3: any, p4: number, p5: number, p6: number, p7: number, p8: any, p9: any): number;

declare function clEnqueueFillImage(p1: any, p2: any, p3: any, p4: number, p5: number, p6: number, p7: any, p8: any): number;

declare function clEnqueueMapBuffer(p1: any, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any, p9: any, p10: number): any;

declare function clEnqueueMapImage(p1: any, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: any, p11: any, p12: number): any;

declare function clEnqueueMarkerWithWaitList(p1: any, p2: number, p3: any, p4: any): number;

declare function clEnqueueMigrateMemObjects(p1: any, p2: number, p3: any, p4: number, p5: number, p6: any, p7: any): number;

declare function clEnqueueNDRangeKernel(p1: any, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any, p9: any): number;

declare function clEnqueueNativeKernel(p1: any, p2: (p1: any) => void, p3: any, p4: number, p5: number, p6: any, p7: any, p8: number, p9: any, p10: any): number;

declare function clEnqueueReadBuffer(p1: any, p2: any, p3: number, p4: number, p5: number, p6: any, p7: number, p8: any, p9: any): number;

declare function clEnqueueReadBufferRect(p1: any, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: any, p12: number, p13: any, p14: any): number;

declare function clEnqueueReadImage(p1: any, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any, p9: number, p10: any, p11: any): number;

declare function clEnqueueReleaseGLObjects(p1: any, p2: number, p3: any, p4: number, p5: any, p6: any): number;

declare function clEnqueueTask(p1: any, p2: any, p3: number, p4: any, p5: any): number;

declare function clEnqueueUnmapMemObject(p1: any, p2: any, p3: any, p4: number, p5: any, p6: any): number;

declare function clEnqueueWriteBuffer(p1: any, p2: any, p3: number, p4: number, p5: number, p6: any, p7: number, p8: any, p9: any): number;

declare function clEnqueueWriteBufferRect(p1: any, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: any, p12: number, p13: any, p14: any): number;

declare function clEnqueueWriteImage(p1: any, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number, p8: any, p9: number, p10: any, p11: any): number;

declare function clFinish(p1: any): number;

declare function clFlush(p1: any): number;

declare function clGetCommandQueueInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetContextInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetDAGNodeAPPLE(d: any, f: any, args: number, arg_indices: number, nargs: number): number;

declare function clGetDeviceIDs(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetDeviceInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetEventInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetEventProfilingInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetExtensionFunctionAddressForPlatform(p1: any, p2: string | any): any;

declare function clGetGLContextInfoAPPLE(p1: any, p2: any, p3: number, p4: number, p5: any, p6: number): number;

declare function clGetGLObjectInfo(p1: any, p2: number, p3: number): number;

declare function clGetGLTextureInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetImageInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetKernelArgInfo(p1: any, p2: number, p3: number, p4: number, p5: any, p6: number): number;

declare function clGetKernelInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetKernelWorkGroupInfo(p1: any, p2: any, p3: number, p4: number, p5: any, p6: number): number;

declare function clGetMemObjectInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetPlatformIDs(p1: number, p2: any, p3: number): number;

declare function clGetPlatformInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetProgramBuildInfo(p1: any, p2: any, p3: number, p4: number, p5: any, p6: number): number;

declare function clGetProgramInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetSamplerInfo(p1: any, p2: number, p3: number, p4: any, p5: number): number;

declare function clGetSupportedImageFormats(p1: any, p2: number, p3: number, p4: number, p5: cl_image_format, p6: number): number;

declare function clLinkProgram(p1: any, p2: number, p3: any, p4: string | any, p5: number, p6: any, p7: (p1: any, p2: any) => void, p8: any, p9: number): any;

declare function clLogMessagesToStderrAPPLE(p1: string | any, p2: any, p3: number, p4: any): void;

declare function clLogMessagesToStdoutAPPLE(p1: string | any, p2: any, p3: number, p4: any): void;

declare function clLogMessagesToSystemLogAPPLE(p1: string | any, p2: any, p3: number, p4: any): void;

declare function clReleaseCommandQueue(p1: any): number;

declare function clReleaseContext(p1: any): number;

declare function clReleaseDAGAPPLE(dag: any): void;

declare function clReleaseDevice(p1: any): number;

declare function clReleaseEvent(p1: any): number;

declare function clReleaseKernel(p1: any): number;

declare function clReleaseMemObject(p1: any): number;

declare function clReleaseProgram(p1: any): number;

declare function clReleaseSampler(p1: any): number;

declare function clRetainCommandQueue(p1: any): number;

declare function clRetainContext(p1: any): number;

declare function clRetainDevice(p1: any): number;

declare function clRetainEvent(p1: any): number;

declare function clRetainKernel(p1: any): number;

declare function clRetainMemObject(p1: any): number;

declare function clRetainProgram(p1: any): number;

declare function clRetainSampler(p1: any): number;

declare function clSetEventCallback(p1: any, p2: number, p3: (p1: any, p2: number, p3: any) => void, p4: any): number;

declare function clSetKernelArg(p1: any, p2: number, p3: number, p4: any): number;

declare function clSetKernelArgByNameAPPLE(p1: any, p2: string | any, p3: number, p4: any): number;

declare function clSetMemObjectDestructorCallback(p1: any, p2: (p1: any, p2: any) => void, p3: any): number;

declare function clSetUserEventStatus(p1: any, p2: number): number;

declare function clUnloadPlatformCompiler(p1: any): number;

declare function clWaitForEvents(p1: number, p2: any): number;

interface cl_buffer_region {
	origin: number;
	size: number;
}
declare var cl_buffer_region: cl_buffer_region;

interface cl_image_desc {
	image_type: number;
	image_width: number;
	image_height: number;
	image_depth: number;
	image_array_size: number;
	image_row_pitch: number;
	image_slice_pitch: number;
	num_mip_levels: number;
	num_samples: number;
	buffer: any;
}
declare var cl_image_desc: cl_image_desc;

interface cl_image_format {
	image_channel_order: number;
	image_channel_data_type: number;
}
declare var cl_image_format: cl_image_format;

interface cl_ndrange {
	work_dim: number;
	global_work_offset: number;
	global_work_size: number;
	local_work_size: number;
}
declare var cl_ndrange: cl_ndrange;

enum clk_sampler_type {

	__CLK_ADDRESS_BASE = 0,

	CLK_ADDRESS_NONE = 0,

	CLK_ADDRESS_CLAMP = 1,

	CLK_ADDRESS_CLAMP_TO_EDGE = 2,

	CLK_ADDRESS_REPEAT = 3,

	CLK_ADDRESS_MIRRORED_REPEAT = 4,

	__CLK_ADDRESS_MASK = 7,

	__CLK_ADDRESS_BITS = 3,

	__CLK_NORMALIZED_BASE = 3,

	CLK_NORMALIZED_COORDS_FALSE = 0,

	CLK_NORMALIZED_COORDS_TRUE = 8,

	__CLK_NORMALIZED_MASK = 8,

	__CLK_NORMALIZED_BITS = 1,

	__CLK_FILTER_BASE = 4,

	CLK_FILTER_NEAREST = 0,

	CLK_FILTER_LINEAR = 16,

	__CLK_FILTER_MASK = 16,

	__CLK_FILTER_BITS = 2
}


declare function gcl_copy_image(dst_image: any, src_image: any, dst_origin: number, src_origin: number, region: number): void;

declare function gcl_copy_image_to_ptr(dst_ptr: any, src_image: any, src_origin: number, region: number): void;

declare function gcl_copy_ptr_to_image(dst_image: any, src_ptr: any, dst_origin: number, region: number): void;

declare function gcl_create_buffer_from_ptr(ptr: any): any;

declare function gcl_create_dispatch_queue(flags: number, device_id: any): NSObject;

declare function gcl_create_image(image_format: cl_image_format, image_width: number, image_height: number, image_depth: number, io_surface: any): any;

declare function gcl_create_kernel_from_block(kernel_block_ptr: any): any;

declare function gcl_free(ptr: any): void;

declare function gcl_get_context(): any;

declare function gcl_get_device_id_with_dispatch_queue(queue: NSObject): any;

declare function gcl_get_kernel_block_workgroup_info(kernel_block_ptr: any, param_name: number, param_value_size: number, param_value: any, param_value_size_ret: number): void;

declare function gcl_get_supported_image_formats(device_id: any, image_type: number, num_entries: number, image_formats: cl_image_format, num_image_formats: number): void;

declare function gcl_gl_create_image_from_renderbuffer(render_buffer: number): any;

declare function gcl_gl_create_image_from_texture(texture_target: number, mip_level: number, texture: number): any;

declare function gcl_gl_create_ptr_from_buffer(bufobj: number): any;

declare function gcl_gl_set_sharegroup(share: any): void;

declare function gcl_malloc(bytes: number, host_ptr: any, flags: number): any;

declare function gcl_map_image(image: any, map_flags: number, origin: number, region: number): any;

declare function gcl_map_ptr(ptr: any, map_flags: number, cb: number): any;

declare function gcl_memcpy(dst: any, src: any, size: number): void;

declare function gcl_memcpy_rect(dst: any, src: any, dst_origin: number, src_origin: number, region: number, dst_row_pitch: number, dst_slice_pitch: number, src_row_pitch: number, src_slice_pitch: number): void;

declare function gcl_release_image(image: any): void;

declare function gcl_retain_image(image: any): void;

declare function gcl_set_finalizer(object_: any, cl_pfn_finalizer: (p1: any, p2: any) => void, user_data: any): void;

declare function gcl_start_timer(): number;

declare function gcl_stop_timer(t: number): number;

declare function gcl_unmap(p1: any): void;
