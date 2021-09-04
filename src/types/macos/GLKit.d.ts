
enum GLKFogMode {

	Exp = 0,

	Exp2 = 1,

	Linear = 2
}


enum GLKLightingType {

	PerVertex = 0,

	PerPixel = 1
}


declare function GLKMatrixStackCreate(alloc: any): any;

declare function GLKMatrixStackGetTypeID(): number;

declare function GLKMatrixStackMultiplyMatrixStack(stackLeft: any, stackRight: any): void;

declare function GLKMatrixStackPop(stack: any): void;

declare function GLKMatrixStackPush(stack: any): void;

declare function GLKMatrixStackRotate(stack: any, radians: number, x: number, y: number, z: number): void;

declare function GLKMatrixStackRotateX(stack: any, radians: number): void;

declare function GLKMatrixStackRotateY(stack: any, radians: number): void;

declare function GLKMatrixStackRotateZ(stack: any, radians: number): void;

declare function GLKMatrixStackScale(stack: any, sx: number, sy: number, sz: number): void;

declare function GLKMatrixStackSize(stack: any): number;

declare function GLKMatrixStackTranslate(stack: any, tx: number, ty: number, tz: number): void;

interface GLKNamedEffect {

	prepareToDraw(): void;
}
declare var GLKNamedEffect: {

	prototype: GLKNamedEffect;
};

enum GLKTextureEnvMode {

	Replace = 0,

	Modulate = 1,

	Decal = 2
}


enum GLKTextureInfoAlphaState {

	None = 0,

	NonPremultiplied = 1,

	Premultiplied = 2
}


enum GLKTextureInfoOrigin {

	Unknown = 0,

	TopLeft = 1,

	BottomLeft = 2
}


declare var GLKTextureLoaderApplyPremultiplication: string;

enum GLKTextureLoaderError {

	FileOrURLNotFound = 0,

	InvalidNSData = 1,

	InvalidCGImage = 2,

	UnknownPathType = 3,

	UnknownFileType = 4,

	PVRAtlasUnsupported = 5,

	CubeMapInvalidNumFiles = 6,

	CompressedTextureUpload = 7,

	UncompressedTextureUpload = 8,

	UnsupportedCubeMapDimensions = 9,

	UnsupportedBitDepth = 10,

	UnsupportedPVRFormat = 11,

	DataPreprocessingFailure = 12,

	MipmapUnsupported = 13,

	UnsupportedOrientation = 14,

	ReorientationFailure = 15,

	AlphaPremultiplicationFailure = 16,

	InvalidEAGLContext = 17,

	IncompatibleFormatSRGB = 18,

	UnsupportedTextureTarget = 19
}


declare var GLKTextureLoaderGenerateMipmaps: string;

declare var GLKTextureLoaderGrayscaleAsAlpha: string;

declare var GLKTextureLoaderOriginBottomLeft: string;

enum GLKTextureTarget {

	Target2D = 3553,

	TargetCubeMap = 34067,

	TargetCt = 2
}


enum GLKVertexAttrib {

	Position = 0,

	Normal = 1,

	Color = 2,

	TexCoord0 = 3,

	TexCoord1 = 4
}


declare function GLKVertexAttributeParametersFromModelIO(vertexFormat: MDLVertexFormat): _GLKVertexAttributeParameters;

interface _GLKVertexAttributeParameters {
	type: number;
	size: number;
	normalized: number;
}
declare var _GLKVertexAttributeParameters: _GLKVertexAttributeParameters;
