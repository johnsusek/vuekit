
interface BNNSActivation {
	function: BNNSActivationFunction;
	alpha: number;
	beta: number;
	iscale: number;
	ioffset: number;
	ishift: number;
	iscale_per_channel: number;
	ioffset_per_channel: number;
	ishift_per_channel: number;
}
declare var BNNSActivation: BNNSActivation;

enum BNNSActivationFunction {

	Identity = 0,

	RectifiedLinear = 1,

	LeakyRectifiedLinear = 2,

	Sigmoid = 3,

	Tanh = 4,

	ScaledTanh = 5,

	Abs = 6,

	Linear = 7,

	Clamp = 8,

	IntegerLinearSaturate = 9,

	IntegerLinearSaturatePerChannel = 10,

	Softmax = 11
}


interface BNNSConvolutionLayerParameters {
	x_stride: number;
	y_stride: number;
	x_padding: number;
	y_padding: number;
	k_width: number;
	k_height: number;
	in_channels: number;
	out_channels: number;
	weights: BNNSLayerData;
	bias: BNNSLayerData;
	activation: BNNSActivation;
}
declare var BNNSConvolutionLayerParameters: BNNSConvolutionLayerParameters;

enum BNNSDataType {

	FloatBit = 65536,

	Float16 = 65552,

	Float32 = 65568,

	IntBit = 131072,

	Int8 = 131080,

	Int16 = 131088,

	Int32 = 131104,

	UIntBit = 262144,

	UInt8 = 262152,

	UInt16 = 262160,

	UInt32 = 262176,

	IndexedBit = 524288,

	Indexed8 = 524296
}


declare function BNNSFilterApply(filter: any, in_: any, out: any): number;

declare function BNNSFilterApplyBatch(filter: any, batch_size: number, in_: any, in_stride: number, out: any, out_stride: number): number;

declare function BNNSFilterCreateConvolutionLayer(in_desc: BNNSImageStackDescriptor, out_desc: BNNSImageStackDescriptor, layer_params: BNNSConvolutionLayerParameters, filter_params: BNNSFilterParameters): any;

declare function BNNSFilterCreateFullyConnectedLayer(in_desc: BNNSVectorDescriptor, out_desc: BNNSVectorDescriptor, layer_params: BNNSFullyConnectedLayerParameters, filter_params: BNNSFilterParameters): any;

declare function BNNSFilterCreatePoolingLayer(in_desc: BNNSImageStackDescriptor, out_desc: BNNSImageStackDescriptor, layer_params: BNNSPoolingLayerParameters, filter_params: BNNSFilterParameters): any;

declare function BNNSFilterCreateVectorActivationLayer(in_desc: BNNSVectorDescriptor, out_desc: BNNSVectorDescriptor, activation: BNNSActivation, filter_params: BNNSFilterParameters): any;

declare function BNNSFilterDestroy(filter: any): void;

interface BNNSFilterParameters {
	flags: number;
	n_threads: number;
	alloc_memory: (p1: any, p2: number, p3: number) => number;
	free_memory: (p1: any) => void;
}
declare var BNNSFilterParameters: BNNSFilterParameters;

enum BNNSFlags {

	UseClientPtr = 1
}


interface BNNSFullyConnectedLayerParameters {
	in_size: number;
	out_size: number;
	weights: BNNSLayerData;
	bias: BNNSLayerData;
	activation: BNNSActivation;
}
declare var BNNSFullyConnectedLayerParameters: BNNSFullyConnectedLayerParameters;

interface BNNSImageStackDescriptor {
	width: number;
	height: number;
	channels: number;
	row_stride: number;
	image_stride: number;
	data_type: BNNSDataType;
	data_scale: number;
	data_bias: number;
}
declare var BNNSImageStackDescriptor: BNNSImageStackDescriptor;

interface BNNSLayerData {
	data: any;
	data_type: BNNSDataType;
	data_scale: number;
	data_bias: number;
	data_table: number;
}
declare var BNNSLayerData: BNNSLayerData;

enum BNNSPoolingFunction {

	Max = 0,

	Average = 1
}


interface BNNSPoolingLayerParameters {
	x_stride: number;
	y_stride: number;
	x_padding: number;
	y_padding: number;
	k_width: number;
	k_height: number;
	in_channels: number;
	out_channels: number;
	pooling_function: BNNSPoolingFunction;
	bias: BNNSLayerData;
	activation: BNNSActivation;
}
declare var BNNSPoolingLayerParameters: BNNSPoolingLayerParameters;

interface BNNSVectorDescriptor {
	size: number;
	data_type: BNNSDataType;
	data_scale: number;
	data_bias: number;
}
declare var BNNSVectorDescriptor: BNNSVectorDescriptor;

enum CBLAS_DIAG {

	CblasNonUnit = 131,

	CblasUnit = 132
}


enum CBLAS_ORDER {

	CblasRowMajor = 101,

	CblasColMajor = 102
}


enum CBLAS_SIDE {

	CblasLeft = 141,

	CblasRight = 142
}


enum CBLAS_TRANSPOSE {

	CblasNoTrans = 111,

	CblasTrans = 112,

	CblasConjTrans = 113,

	AtlasConj = 114
}


enum CBLAS_UPLO {

	CblasUpper = 121,

	CblasLower = 122
}


interface DSPComplex {
	real: number;
	imag: number;
}
declare var DSPComplex: DSPComplex;

interface DSPDoubleComplex {
	real: number;
	imag: number;
}
declare var DSPDoubleComplex: DSPDoubleComplex;

interface DSPDoubleSplitComplex {
	realp: number;
	imagp: number;
}
declare var DSPDoubleSplitComplex: DSPDoubleSplitComplex;

interface DSPSplitComplex {
	realp: number;
	imagp: number;
}
declare var DSPSplitComplex: DSPSplitComplex;

interface DenseMatrix_Double {
	rowCount: number;
	columnCount: number;
	columnStride: number;
	attributes: SparseAttributes_t;
	data: number;
}
declare var DenseMatrix_Double: DenseMatrix_Double;

interface DenseMatrix_Float {
	rowCount: number;
	columnCount: number;
	columnStride: number;
	attributes: SparseAttributes_t;
	data: number;
}
declare var DenseMatrix_Float: DenseMatrix_Float;

interface DenseVector_Double {
	count: number;
	data: number;
}
declare var DenseVector_Double: DenseVector_Double;

interface DenseVector_Float {
	count: number;
	data: number;
}
declare var DenseVector_Float: DenseVector_Float;

declare const FFT_FORWARD: number;

declare const FFT_INVERSE: number;

declare const FFT_RADIX2: number;

declare const FFT_RADIX3: number;

declare const FFT_RADIX5: number;

declare function SetBLASParamErrorProc(__ErrorProc: (p1: string, p2: string, p3: number, p4: number) => void): void;

interface SparseAttributes_t {
	transpose: boolean;
	triangle: SparseTriangle_t;
	kind: SparseKind_t;
	_reserved: number;
	_allocatedBySparse: boolean;
}
declare var SparseAttributes_t: SparseAttributes_t;

interface SparseCGOptions {
	reportError: (p1: string) => void;
	maxIterations: number;
	atol: number;
	rtol: number;
	reportStatus: (p1: string) => void;
}
declare var SparseCGOptions: SparseCGOptions;

declare function SparseCleanup(Opaque: SparseOpaqueSymbolicFactorization): void;

declare function SparseCleanupFunction(Opaque: SparseOpaqueFactorization_Double): void;

declare function SparseCleanupFunction2(Opaque: SparseOpaqueFactorization_Float): void;

declare function SparseCleanupFunction3(Matrix: SparseMatrix_Double): void;

declare function SparseCleanupFunction4(Matrix: SparseMatrix_Float): void;

declare function SparseCleanupFunction5(Opaque: SparseOpaquePreconditioner_Double): void;

declare function SparseCleanupFunction6(Opaque: SparseOpaquePreconditioner_Float): void;

enum SparseControl_t {

	DefaultControl = 0
}


declare function SparseConvertFromCoordinate(rowCount: number, columnCount: number, blockCount: number, blockSize: number, attributes: SparseAttributes_t, row: number, column: number, data: number): SparseMatrix_Double;

declare function SparseConvertFromCoordinateFunction(rowCount: number, columnCount: number, blockCount: number, blockSize: number, attributes: SparseAttributes_t, row: number, column: number, data: number): SparseMatrix_Float;

declare function SparseConvertFromCoordinateFunction2(rowCount: number, columnCount: number, blockCount: number, blockSize: number, attributes: SparseAttributes_t, row: number, column: number, data: number, storage: any, workspace: any): SparseMatrix_Double;

declare function SparseConvertFromCoordinateFunction3(rowCount: number, columnCount: number, blockCount: number, blockSize: number, attributes: SparseAttributes_t, row: number, column: number, data: number, storage: any, workspace: any): SparseMatrix_Float;

declare function SparseConvertFromOpaque(matrix: any): SparseMatrix_Double;

declare function SparseConvertFromOpaqueFunction(matrix: any): SparseMatrix_Float;

declare function SparseCreatePreconditioner(type: SparsePreconditioner_t, A: SparseMatrix_Double): SparseOpaquePreconditioner_Double;

declare function SparseCreatePreconditionerFunction(type: SparsePreconditioner_t, A: SparseMatrix_Float): SparseOpaquePreconditioner_Float;

declare function SparseFactor(type: SparseFactorization_t, Matrix: SparseMatrix_Double): SparseOpaqueFactorization_Double;

declare function SparseFactorFunction(type: SparseFactorization_t, Matrix: SparseMatrix_Float): SparseOpaqueFactorization_Float;

declare function SparseFactorFunction10(type: SparseFactorization_t, Matrix: SparseMatrixStructure): SparseOpaqueSymbolicFactorization;

declare function SparseFactorFunction11(type: SparseFactorization_t, Matrix: SparseMatrixStructure, sfoptions: SparseSymbolicFactorOptions): SparseOpaqueSymbolicFactorization;

declare function SparseFactorFunction2(type: SparseFactorization_t, Matrix: SparseMatrix_Double, sfoptions: SparseSymbolicFactorOptions, nfoptions: SparseNumericFactorOptions): SparseOpaqueFactorization_Double;

declare function SparseFactorFunction3(type: SparseFactorization_t, Matrix: SparseMatrix_Float, sfoptions: SparseSymbolicFactorOptions, nfoptions: SparseNumericFactorOptions): SparseOpaqueFactorization_Float;

declare function SparseFactorFunction4(SymbolicFactor: SparseOpaqueSymbolicFactorization, Matrix: SparseMatrix_Double): SparseOpaqueFactorization_Double;

declare function SparseFactorFunction5(SymbolicFactor: SparseOpaqueSymbolicFactorization, Matrix: SparseMatrix_Float): SparseOpaqueFactorization_Float;

declare function SparseFactorFunction6(SymbolicFactor: SparseOpaqueSymbolicFactorization, Matrix: SparseMatrix_Double, nfoptions: SparseNumericFactorOptions): SparseOpaqueFactorization_Double;

declare function SparseFactorFunction7(SymbolicFactor: SparseOpaqueSymbolicFactorization, Matrix: SparseMatrix_Float, nfoptions: SparseNumericFactorOptions): SparseOpaqueFactorization_Float;

declare function SparseFactorFunction8(SymbolicFactor: SparseOpaqueSymbolicFactorization, Matrix: SparseMatrix_Double, nfoptions: SparseNumericFactorOptions, factorStorage: any, workspace: any): SparseOpaqueFactorization_Double;

declare function SparseFactorFunction9(SymbolicFactor: SparseOpaqueSymbolicFactorization, Matrix: SparseMatrix_Float, nfoptions: SparseNumericFactorOptions, factorStorage: any, workspace: any): SparseOpaqueFactorization_Float;

enum SparseFactorization_t {

	Cholesky = 0,

	LDLT = 1,

	LDLTUnpivoted = 2,

	LDLTSBK = 3,

	LDLTTPP = 4,

	QR = 40,

	CholeskyAtA = 41
}


interface SparseGMRESOptions {
	reportError: (p1: string) => void;
	variant: SparseGMRESVariant_t;
	nvec: number;
	maxIterations: number;
	atol: number;
	rtol: number;
	reportStatus: (p1: string) => void;
}
declare var SparseGMRESOptions: SparseGMRESOptions;

enum SparseGMRESVariant_t {

	VariantDQGMRES = 0,

	VariantGMRES = 1,

	VariantFGMRES = 2
}


declare function SparseGetTranspose(Matrix: SparseMatrix_Double): SparseMatrix_Double;

declare function SparseGetTransposeFunction(Matrix: SparseMatrix_Float): SparseMatrix_Float;

declare function SparseGetTransposeFunction2(Factor: SparseOpaqueFactorization_Double): SparseOpaqueFactorization_Double;

declare function SparseGetTransposeFunction3(Factor: SparseOpaqueFactorization_Float): SparseOpaqueFactorization_Float;

enum SparseIterativeStatus_t {

	Converged = 0,

	MaxIterations = 1,

	ParameterError = -1,

	IllConditioned = -2,

	InternalError = -99
}


enum SparseKind_t {

	Ordinary = 0,

	Triangular = 1,

	UnitTriangular = 2,

	Symmetric = 3
}


enum SparseLSMRConvergenceTest_t {

	TDefault = 0,

	TFongSaunders = 1
}


interface SparseLSMROptions {
	reportError: (p1: string) => void;
	lambda: number;
	nvec: number;
	convergenceTest: SparseLSMRConvergenceTest_t;
	atol: number;
	rtol: number;
	btol: number;
	conditionLimit: number;
	maxIterations: number;
	reportStatus: (p1: string) => void;
}
declare var SparseLSMROptions: SparseLSMROptions;

interface SparseMatrixStructure {
	rowCount: number;
	columnCount: number;
	columnStarts: number;
	rowIndices: number;
	attributes: SparseAttributes_t;
	blockSize: number;
}
declare var SparseMatrixStructure: SparseMatrixStructure;

interface SparseMatrix_Double {
	structure: SparseMatrixStructure;
	data: number;
}
declare var SparseMatrix_Double: SparseMatrix_Double;

interface SparseMatrix_Float {
	structure: SparseMatrixStructure;
	data: number;
}
declare var SparseMatrix_Float: SparseMatrix_Float;

declare function SparseMultiply(A: SparseMatrix_Double, X: DenseMatrix_Double, Y: DenseMatrix_Double): void;

declare function SparseMultiplyAdd(A: SparseMatrix_Double, X: DenseMatrix_Double, Y: DenseMatrix_Double): void;

declare function SparseMultiplyAddFunction(A: SparseMatrix_Float, X: DenseMatrix_Float, Y: DenseMatrix_Float): void;

declare function SparseMultiplyAddFunction2(alpha: number, A: SparseMatrix_Double, X: DenseMatrix_Double, Y: DenseMatrix_Double): void;

declare function SparseMultiplyAddFunction3(alpha: number, A: SparseMatrix_Float, X: DenseMatrix_Float, Y: DenseMatrix_Float): void;

declare function SparseMultiplyAddFunction4(A: SparseMatrix_Double, x: DenseVector_Double, y: DenseVector_Double): void;

declare function SparseMultiplyAddFunction5(A: SparseMatrix_Float, x: DenseVector_Float, y: DenseVector_Float): void;

declare function SparseMultiplyAddFunction6(alpha: number, A: SparseMatrix_Double, x: DenseVector_Double, y: DenseVector_Double): void;

declare function SparseMultiplyAddFunction7(alpha: number, A: SparseMatrix_Float, x: DenseVector_Float, y: DenseVector_Float): void;

declare function SparseMultiplyFunction(A: SparseMatrix_Float, X: DenseMatrix_Float, Y: DenseMatrix_Float): void;

declare function SparseMultiplyFunction2(alpha: number, A: SparseMatrix_Double, X: DenseMatrix_Double, Y: DenseMatrix_Double): void;

declare function SparseMultiplyFunction3(alpha: number, A: SparseMatrix_Float, X: DenseMatrix_Float, Y: DenseMatrix_Float): void;

declare function SparseMultiplyFunction4(A: SparseMatrix_Double, x: DenseVector_Double, y: DenseVector_Double): void;

declare function SparseMultiplyFunction5(A: SparseMatrix_Float, x: DenseVector_Float, y: DenseVector_Float): void;

declare function SparseMultiplyFunction6(alpha: number, A: SparseMatrix_Double, x: DenseVector_Double, y: DenseVector_Double): void;

declare function SparseMultiplyFunction7(alpha: number, A: SparseMatrix_Float, x: DenseVector_Float, y: DenseVector_Float): void;

interface SparseNumericFactorOptions {
	control: SparseControl_t;
	scalingMethod: SparseScaling_t;
	scaling: any;
	pivotTolerance: number;
	zeroTolerance: number;
}
declare var SparseNumericFactorOptions: SparseNumericFactorOptions;

interface SparseOpaqueFactorization_Double {
	status: SparseStatus_t;
	attributes: SparseAttributes_t;
	symbolicFactorization: SparseOpaqueSymbolicFactorization;
	userFactorStorage: boolean;
	numericFactorization: any;
	solveWorkspaceRequiredStatic: number;
	solveWorkspaceRequiredPerRHS: number;
}
declare var SparseOpaqueFactorization_Double: SparseOpaqueFactorization_Double;

interface SparseOpaqueFactorization_Float {
	status: SparseStatus_t;
	attributes: SparseAttributes_t;
	symbolicFactorization: SparseOpaqueSymbolicFactorization;
	userFactorStorage: boolean;
	numericFactorization: any;
	solveWorkspaceRequiredStatic: number;
	solveWorkspaceRequiredPerRHS: number;
}
declare var SparseOpaqueFactorization_Float: SparseOpaqueFactorization_Float;

interface SparseOpaquePreconditioner_Double {
	type: SparsePreconditioner_t;
	mem: any;
	apply: (p1: any, p2: CBLAS_TRANSPOSE, p3: DenseMatrix_Double, p4: DenseMatrix_Double) => void;
}
declare var SparseOpaquePreconditioner_Double: SparseOpaquePreconditioner_Double;

interface SparseOpaquePreconditioner_Float {
	type: SparsePreconditioner_t;
	mem: any;
	apply: (p1: any, p2: CBLAS_TRANSPOSE, p3: DenseMatrix_Float, p4: DenseMatrix_Float) => void;
}
declare var SparseOpaquePreconditioner_Float: SparseOpaquePreconditioner_Float;

interface SparseOpaqueSymbolicFactorization {
	status: SparseStatus_t;
	rowCount: number;
	columnCount: number;
	attributes: SparseAttributes_t;
	blockSize: number;
	type: SparseFactorization_t;
	factorization: any;
	workspaceSize_Float: number;
	workspaceSize_Double: number;
	factorSize_Float: number;
	factorSize_Double: number;
}
declare var SparseOpaqueSymbolicFactorization: SparseOpaqueSymbolicFactorization;

enum SparseOrder_t {

	Default = 0,

	User = 1,

	AMD = 2,

	Metis = 3,

	COLAMD = 4
}


enum SparsePreconditioner_t {

	None = 0,

	User = 1,

	Diagonal = 2,

	DiagScaling = 3
}


declare function SparseRefactor(Matrix: SparseMatrix_Double, Factorization: SparseOpaqueFactorization_Double): void;

declare function SparseRefactorFunction(Matrix: SparseMatrix_Float, Factorization: SparseOpaqueFactorization_Float): void;

declare function SparseRefactorFunction2(Matrix: SparseMatrix_Double, Factorization: SparseOpaqueFactorization_Double, nfoptions: SparseNumericFactorOptions): void;

declare function SparseRefactorFunction3(Matrix: SparseMatrix_Float, Factorization: SparseOpaqueFactorization_Float, nfoptions: SparseNumericFactorOptions): void;

declare function SparseRefactorFunction4(Matrix: SparseMatrix_Double, Factorization: SparseOpaqueFactorization_Double, workspace: any): void;

declare function SparseRefactorFunction5(Matrix: SparseMatrix_Float, Factorization: SparseOpaqueFactorization_Float, workspace: any): void;

declare function SparseRefactorFunction6(Matrix: SparseMatrix_Double, Factorization: SparseOpaqueFactorization_Double, nfoptions: SparseNumericFactorOptions, workspace: any): void;

declare function SparseRefactorFunction7(Matrix: SparseMatrix_Float, Factorization: SparseOpaqueFactorization_Float, nfoptions: SparseNumericFactorOptions, workspace: any): void;

declare function SparseRetain(SymbolicFactor: SparseOpaqueSymbolicFactorization): SparseOpaqueSymbolicFactorization;

declare function SparseRetainFunction(NumericFactor: SparseOpaqueFactorization_Double): SparseOpaqueFactorization_Double;

declare function SparseRetainFunction2(NumericFactor: SparseOpaqueFactorization_Float): SparseOpaqueFactorization_Float;

enum SparseScaling_t {

	Default = 0,

	User = 1,

	EquilibriationInf = 2
}


declare function SparseSolve(Factored: SparseOpaqueFactorization_Double, XB: DenseMatrix_Double): void;

declare function SparseSolveFunction(Factored: SparseOpaqueFactorization_Float, XB: DenseMatrix_Float): void;

declare function SparseSolveFunction10(Factored: SparseOpaqueFactorization_Double, b: DenseVector_Double, x: DenseVector_Double): void;

declare function SparseSolveFunction11(Factored: SparseOpaqueFactorization_Float, b: DenseVector_Float, x: DenseVector_Float): void;

declare function SparseSolveFunction12(Factored: SparseOpaqueFactorization_Double, xb: DenseVector_Double, workspace: any): void;

declare function SparseSolveFunction13(Factored: SparseOpaqueFactorization_Float, xb: DenseVector_Float, workspace: any): void;

declare function SparseSolveFunction14(Factored: SparseOpaqueFactorization_Double, x: DenseVector_Double, b: DenseVector_Double, workspace: any): void;

declare function SparseSolveFunction15(Factored: SparseOpaqueFactorization_Float, x: DenseVector_Float, b: DenseVector_Float, workspace: any): void;

declare function SparseSolveFunction2(Factored: SparseOpaqueFactorization_Double, B: DenseMatrix_Double, X: DenseMatrix_Double): void;

declare function SparseSolveFunction3(Factored: SparseOpaqueFactorization_Float, B: DenseMatrix_Float, X: DenseMatrix_Float): void;

declare function SparseSolveFunction4(Factored: SparseOpaqueFactorization_Double, XB: DenseMatrix_Double, workspace: any): void;

declare function SparseSolveFunction5(Factored: SparseOpaqueFactorization_Float, XB: DenseMatrix_Float, workspace: any): void;

declare function SparseSolveFunction6(Factored: SparseOpaqueFactorization_Double, X: DenseMatrix_Double, B: DenseMatrix_Double, workspace: any): void;

declare function SparseSolveFunction7(Factored: SparseOpaqueFactorization_Float, X: DenseMatrix_Float, B: DenseMatrix_Float, workspace: any): void;

declare function SparseSolveFunction8(Factored: SparseOpaqueFactorization_Double, xb: DenseVector_Double): void;

declare function SparseSolveFunction9(Factored: SparseOpaqueFactorization_Float, xb: DenseVector_Float): void;

enum SparseStatus_t {

	StatusOK = 0,

	FactorizationFailed = -1,

	MatrixIsSingular = -2,

	InternalError = -3,

	ParameterError = -4,

	StatusReleased = -2147483647
}


enum SparseSubfactor_t {

	Invalid = 0,

	P = 1,

	S = 2,

	L = 3,

	D = 4,

	PLPS = 5,

	Q = 6,

	R = 7,

	RP = 8
}


interface SparseSymbolicFactorOptions {
	control: SparseControl_t;
	orderMethod: SparseOrder_t;
	order: number;
	ignoreRowsAndColumns: number;
	malloc: (p1: number) => any;
	free: (p1: any) => void;
	reportError: (p1: string) => void;
}
declare var SparseSymbolicFactorOptions: SparseSymbolicFactorOptions;

enum SparseTriangle_t {

	UpperTriangle = 0,

	LowerTriangle = 1
}


interface _SparseIterativeMethodBaseOptions {
	reportError: (p1: string) => void;
}
declare var _SparseIterativeMethodBaseOptions: _SparseIterativeMethodBaseOptions;

interface __CLPK_complex {
	r: number;
	i: number;
}
declare var __CLPK_complex: __CLPK_complex;

interface __CLPK_doublecomplex {
	r: number;
	i: number;
}
declare var __CLPK_doublecomplex: __CLPK_doublecomplex;

declare function appleblas_dgeadd(__order: CBLAS_ORDER, __transA: CBLAS_TRANSPOSE, __transB: CBLAS_TRANSPOSE, __m: number, __n: number, __alpha: number, __A: number, __lda: number, __beta: number, __B: number, __ldb: number, __C: number, __ldc: number): void;

declare function appleblas_sgeadd(__order: CBLAS_ORDER, __transA: CBLAS_TRANSPOSE, __transB: CBLAS_TRANSPOSE, __m: number, __n: number, __alpha: number, __A: number, __lda: number, __beta: number, __B: number, __ldb: number, __C: number, __ldc: number): void;

declare function catlas_caxpby(__N: number, __alpha: any, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function catlas_cset(__N: number, __alpha: any, __X: any, __incX: number): void;

declare function catlas_daxpby(__N: number, __alpha: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function catlas_dset(__N: number, __alpha: number, __X: number, __incX: number): void;

declare function catlas_saxpby(__N: number, __alpha: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function catlas_sset(__N: number, __alpha: number, __X: number, __incX: number): void;

declare function catlas_zaxpby(__N: number, __alpha: any, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function catlas_zset(__N: number, __alpha: any, __X: any, __incX: number): void;

declare function cbdsqr_(__uplo: string | any, __n: number, __ncvt: number, __nru: number, __ncc: number, __d__: number, __e: number, __vt: __CLPK_complex, __ldvt: number, __u: __CLPK_complex, __ldu: number, __c__: __CLPK_complex, __ldc: number, __rwork: number, __info: number): number;

declare function cblas_caxpy(__N: number, __alpha: any, __X: any, __incX: number, __Y: any, __incY: number): void;

declare function cblas_ccopy(__N: number, __X: any, __incX: number, __Y: any, __incY: number): void;

declare function cblas_cdotc_sub(__N: number, __X: any, __incX: number, __Y: any, __incY: number, __dotc: any): void;

declare function cblas_cdotu_sub(__N: number, __X: any, __incX: number, __Y: any, __incY: number, __dotu: any): void;

declare function cblas_cgbmv(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __M: number, __N: number, __KL: number, __KU: number, __alpha: any, __A: any, __lda: number, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function cblas_cgemm(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __TransB: CBLAS_TRANSPOSE, __M: number, __N: number, __K: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number, __beta: any, __C: any, __ldc: number): void;

declare function cblas_cgemv(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __M: number, __N: number, __alpha: any, __A: any, __lda: number, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function cblas_cgerc(__Order: CBLAS_ORDER, __M: number, __N: number, __alpha: any, __X: any, __incX: number, __Y: any, __incY: number, __A: any, __lda: number): void;

declare function cblas_cgeru(__Order: CBLAS_ORDER, __M: number, __N: number, __alpha: any, __X: any, __incX: number, __Y: any, __incY: number, __A: any, __lda: number): void;

declare function cblas_chbmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __K: number, __alpha: any, __A: any, __lda: number, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function cblas_chemm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __M: number, __N: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number, __beta: any, __C: any, __ldc: number): void;

declare function cblas_chemv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: any, __A: any, __lda: number, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function cblas_cher(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: any, __incX: number, __A: any, __lda: number): void;

declare function cblas_cher2(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: any, __X: any, __incX: number, __Y: any, __incY: number, __A: any, __lda: number): void;

declare function cblas_cher2k(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number, __beta: number, __C: any, __ldc: number): void;

declare function cblas_cherk(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: number, __A: any, __lda: number, __beta: number, __C: any, __ldc: number): void;

declare function cblas_chpmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: any, __Ap: any, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function cblas_chpr(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: any, __incX: number, __A: any): void;

declare function cblas_chpr2(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: any, __X: any, __incX: number, __Y: any, __incY: number, __Ap: any): void;

declare function cblas_crotg(__a: any, __b: any, __c: any, __s: any): void;

declare function cblas_cscal(__N: number, __alpha: any, __X: any, __incX: number): void;

declare function cblas_csrot(__N: number, __X: any, __incX: number, __Y: any, __incY: number, __c: number, __s: number): void;

declare function cblas_csscal(__N: number, __alpha: number, __X: any, __incX: number): void;

declare function cblas_cswap(__N: number, __X: any, __incX: number, __Y: any, __incY: number): void;

declare function cblas_csymm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __M: number, __N: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number, __beta: any, __C: any, __ldc: number): void;

declare function cblas_csyr2k(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number, __beta: any, __C: any, __ldc: number): void;

declare function cblas_csyrk(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: any, __A: any, __lda: number, __beta: any, __C: any, __ldc: number): void;

declare function cblas_ctbmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __K: number, __A: any, __lda: number, __X: any, __incX: number): void;

declare function cblas_ctbsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __K: number, __A: any, __lda: number, __X: any, __incX: number): void;

declare function cblas_ctpmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __Ap: any, __X: any, __incX: number): void;

declare function cblas_ctpsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __Ap: any, __X: any, __incX: number): void;

declare function cblas_ctrmm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __M: number, __N: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number): void;

declare function cblas_ctrmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __A: any, __lda: number, __X: any, __incX: number): void;

declare function cblas_ctrsm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __M: number, __N: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number): void;

declare function cblas_ctrsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __A: any, __lda: number, __X: any, __incX: number): void;

declare function cblas_dasum(__N: number, __X: number, __incX: number): number;

declare function cblas_daxpy(__N: number, __alpha: number, __X: number, __incX: number, __Y: number, __incY: number): void;

declare function cblas_dcopy(__N: number, __X: number, __incX: number, __Y: number, __incY: number): void;

declare function cblas_ddot(__N: number, __X: number, __incX: number, __Y: number, __incY: number): number;

declare function cblas_dgbmv(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __M: number, __N: number, __KL: number, __KU: number, __alpha: number, __A: number, __lda: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function cblas_dgemm(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __TransB: CBLAS_TRANSPOSE, __M: number, __N: number, __K: number, __alpha: number, __A: number, __lda: number, __B: number, __ldb: number, __beta: number, __C: number, __ldc: number): void;

declare function cblas_dgemv(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __M: number, __N: number, __alpha: number, __A: number, __lda: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function cblas_dger(__Order: CBLAS_ORDER, __M: number, __N: number, __alpha: number, __X: number, __incX: number, __Y: number, __incY: number, __A: number, __lda: number): void;

declare function cblas_dnrm2(__N: number, __X: number, __incX: number): number;

declare function cblas_drot(__N: number, __X: number, __incX: number, __Y: number, __incY: number, __c: number, __s: number): void;

declare function cblas_drotg(__a: number, __b: number, __c: number, __s: number): void;

declare function cblas_drotm(__N: number, __X: number, __incX: number, __Y: number, __incY: number, __P: number): void;

declare function cblas_drotmg(__d1: number, __d2: number, __b1: number, __b2: number, __P: number): void;

declare function cblas_dsbmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __K: number, __alpha: number, __A: number, __lda: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function cblas_dscal(__N: number, __alpha: number, __X: number, __incX: number): void;

declare function cblas_dsdot(__N: number, __X: number, __incX: number, __Y: number, __incY: number): number;

declare function cblas_dspmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __Ap: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function cblas_dspr(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: number, __incX: number, __Ap: number): void;

declare function cblas_dspr2(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: number, __incX: number, __Y: number, __incY: number, __A: number): void;

declare function cblas_dswap(__N: number, __X: number, __incX: number, __Y: number, __incY: number): void;

declare function cblas_dsymm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __M: number, __N: number, __alpha: number, __A: number, __lda: number, __B: number, __ldb: number, __beta: number, __C: number, __ldc: number): void;

declare function cblas_dsymv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __A: number, __lda: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function cblas_dsyr(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: number, __incX: number, __A: number, __lda: number): void;

declare function cblas_dsyr2(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: number, __incX: number, __Y: number, __incY: number, __A: number, __lda: number): void;

declare function cblas_dsyr2k(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: number, __A: number, __lda: number, __B: number, __ldb: number, __beta: number, __C: number, __ldc: number): void;

declare function cblas_dsyrk(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: number, __A: number, __lda: number, __beta: number, __C: number, __ldc: number): void;

declare function cblas_dtbmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __K: number, __A: number, __lda: number, __X: number, __incX: number): void;

declare function cblas_dtbsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __K: number, __A: number, __lda: number, __X: number, __incX: number): void;

declare function cblas_dtpmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __Ap: number, __X: number, __incX: number): void;

declare function cblas_dtpsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __Ap: number, __X: number, __incX: number): void;

declare function cblas_dtrmm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __M: number, __N: number, __alpha: number, __A: number, __lda: number, __B: number, __ldb: number): void;

declare function cblas_dtrmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __A: number, __lda: number, __X: number, __incX: number): void;

declare function cblas_dtrsm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __M: number, __N: number, __alpha: number, __A: number, __lda: number, __B: number, __ldb: number): void;

declare function cblas_dtrsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __A: number, __lda: number, __X: number, __incX: number): void;

declare function cblas_dzasum(__N: number, __X: any, __incX: number): number;

declare function cblas_dznrm2(__N: number, __X: any, __incX: number): number;

declare function cblas_icamax(__N: number, __X: any, __incX: number): number;

declare function cblas_idamax(__N: number, __X: number, __incX: number): number;

declare function cblas_isamax(__N: number, __X: number, __incX: number): number;

declare function cblas_izamax(__N: number, __X: any, __incX: number): number;

declare function cblas_sasum(__N: number, __X: number, __incX: number): number;

declare function cblas_saxpy(__N: number, __alpha: number, __X: number, __incX: number, __Y: number, __incY: number): void;

declare function cblas_scasum(__N: number, __X: any, __incX: number): number;

declare function cblas_scnrm2(__N: number, __X: any, __incX: number): number;

declare function cblas_scopy(__N: number, __X: number, __incX: number, __Y: number, __incY: number): void;

declare function cblas_sdot(__N: number, __X: number, __incX: number, __Y: number, __incY: number): number;

declare function cblas_sdsdot(__N: number, __alpha: number, __X: number, __incX: number, __Y: number, __incY: number): number;

declare function cblas_sgbmv(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __M: number, __N: number, __KL: number, __KU: number, __alpha: number, __A: number, __lda: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function cblas_sgemm(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __TransB: CBLAS_TRANSPOSE, __M: number, __N: number, __K: number, __alpha: number, __A: number, __lda: number, __B: number, __ldb: number, __beta: number, __C: number, __ldc: number): void;

declare function cblas_sgemv(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __M: number, __N: number, __alpha: number, __A: number, __lda: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function cblas_sger(__Order: CBLAS_ORDER, __M: number, __N: number, __alpha: number, __X: number, __incX: number, __Y: number, __incY: number, __A: number, __lda: number): void;

declare function cblas_snrm2(__N: number, __X: number, __incX: number): number;

declare function cblas_srot(__N: number, __X: number, __incX: number, __Y: number, __incY: number, __c: number, __s: number): void;

declare function cblas_srotg(__a: number, __b: number, __c: number, __s: number): void;

declare function cblas_srotm(__N: number, __X: number, __incX: number, __Y: number, __incY: number, __P: number): void;

declare function cblas_srotmg(__d1: number, __d2: number, __b1: number, __b2: number, __P: number): void;

declare function cblas_ssbmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __K: number, __alpha: number, __A: number, __lda: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function cblas_sscal(__N: number, __alpha: number, __X: number, __incX: number): void;

declare function cblas_sspmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __Ap: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function cblas_sspr(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: number, __incX: number, __Ap: number): void;

declare function cblas_sspr2(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: number, __incX: number, __Y: number, __incY: number, __A: number): void;

declare function cblas_sswap(__N: number, __X: number, __incX: number, __Y: number, __incY: number): void;

declare function cblas_ssymm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __M: number, __N: number, __alpha: number, __A: number, __lda: number, __B: number, __ldb: number, __beta: number, __C: number, __ldc: number): void;

declare function cblas_ssymv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __A: number, __lda: number, __X: number, __incX: number, __beta: number, __Y: number, __incY: number): void;

declare function cblas_ssyr(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: number, __incX: number, __A: number, __lda: number): void;

declare function cblas_ssyr2(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: number, __incX: number, __Y: number, __incY: number, __A: number, __lda: number): void;

declare function cblas_ssyr2k(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: number, __A: number, __lda: number, __B: number, __ldb: number, __beta: number, __C: number, __ldc: number): void;

declare function cblas_ssyrk(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: number, __A: number, __lda: number, __beta: number, __C: number, __ldc: number): void;

declare function cblas_stbmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __K: number, __A: number, __lda: number, __X: number, __incX: number): void;

declare function cblas_stbsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __K: number, __A: number, __lda: number, __X: number, __incX: number): void;

declare function cblas_stpmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __Ap: number, __X: number, __incX: number): void;

declare function cblas_stpsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __Ap: number, __X: number, __incX: number): void;

declare function cblas_strmm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __M: number, __N: number, __alpha: number, __A: number, __lda: number, __B: number, __ldb: number): void;

declare function cblas_strmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __A: number, __lda: number, __X: number, __incX: number): void;

declare function cblas_strsm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __M: number, __N: number, __alpha: number, __A: number, __lda: number, __B: number, __ldb: number): void;

declare function cblas_strsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __A: number, __lda: number, __X: number, __incX: number): void;

declare function cblas_zaxpy(__N: number, __alpha: any, __X: any, __incX: number, __Y: any, __incY: number): void;

declare function cblas_zcopy(__N: number, __X: any, __incX: number, __Y: any, __incY: number): void;

declare function cblas_zdotc_sub(__N: number, __X: any, __incX: number, __Y: any, __incY: number, __dotc: any): void;

declare function cblas_zdotu_sub(__N: number, __X: any, __incX: number, __Y: any, __incY: number, __dotu: any): void;

declare function cblas_zdrot(__N: number, __X: any, __incX: number, __Y: any, __incY: number, __c: number, __s: number): void;

declare function cblas_zdscal(__N: number, __alpha: number, __X: any, __incX: number): void;

declare function cblas_zgbmv(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __M: number, __N: number, __KL: number, __KU: number, __alpha: any, __A: any, __lda: number, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function cblas_zgemm(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __TransB: CBLAS_TRANSPOSE, __M: number, __N: number, __K: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number, __beta: any, __C: any, __ldc: number): void;

declare function cblas_zgemv(__Order: CBLAS_ORDER, __TransA: CBLAS_TRANSPOSE, __M: number, __N: number, __alpha: any, __A: any, __lda: number, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function cblas_zgerc(__Order: CBLAS_ORDER, __M: number, __N: number, __alpha: any, __X: any, __incX: number, __Y: any, __incY: number, __A: any, __lda: number): void;

declare function cblas_zgeru(__Order: CBLAS_ORDER, __M: number, __N: number, __alpha: any, __X: any, __incX: number, __Y: any, __incY: number, __A: any, __lda: number): void;

declare function cblas_zhbmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __K: number, __alpha: any, __A: any, __lda: number, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function cblas_zhemm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __M: number, __N: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number, __beta: any, __C: any, __ldc: number): void;

declare function cblas_zhemv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: any, __A: any, __lda: number, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function cblas_zher(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: any, __incX: number, __A: any, __lda: number): void;

declare function cblas_zher2(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: any, __X: any, __incX: number, __Y: any, __incY: number, __A: any, __lda: number): void;

declare function cblas_zher2k(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number, __beta: number, __C: any, __ldc: number): void;

declare function cblas_zherk(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: number, __A: any, __lda: number, __beta: number, __C: any, __ldc: number): void;

declare function cblas_zhpmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: any, __Ap: any, __X: any, __incX: number, __beta: any, __Y: any, __incY: number): void;

declare function cblas_zhpr(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: number, __X: any, __incX: number, __A: any): void;

declare function cblas_zhpr2(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __N: number, __alpha: any, __X: any, __incX: number, __Y: any, __incY: number, __Ap: any): void;

declare function cblas_zrotg(__a: any, __b: any, __c: any, __s: any): void;

declare function cblas_zscal(__N: number, __alpha: any, __X: any, __incX: number): void;

declare function cblas_zswap(__N: number, __X: any, __incX: number, __Y: any, __incY: number): void;

declare function cblas_zsymm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __M: number, __N: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number, __beta: any, __C: any, __ldc: number): void;

declare function cblas_zsyr2k(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number, __beta: any, __C: any, __ldc: number): void;

declare function cblas_zsyrk(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __Trans: CBLAS_TRANSPOSE, __N: number, __K: number, __alpha: any, __A: any, __lda: number, __beta: any, __C: any, __ldc: number): void;

declare function cblas_ztbmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __K: number, __A: any, __lda: number, __X: any, __incX: number): void;

declare function cblas_ztbsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __K: number, __A: any, __lda: number, __X: any, __incX: number): void;

declare function cblas_ztpmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __Ap: any, __X: any, __incX: number): void;

declare function cblas_ztpsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __Ap: any, __X: any, __incX: number): void;

declare function cblas_ztrmm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __M: number, __N: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number): void;

declare function cblas_ztrmv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __A: any, __lda: number, __X: any, __incX: number): void;

declare function cblas_ztrsm(__Order: CBLAS_ORDER, __Side: CBLAS_SIDE, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __M: number, __N: number, __alpha: any, __A: any, __lda: number, __B: any, __ldb: number): void;

declare function cblas_ztrsv(__Order: CBLAS_ORDER, __Uplo: CBLAS_UPLO, __TransA: CBLAS_TRANSPOSE, __Diag: CBLAS_DIAG, __N: number, __A: any, __lda: number, __X: any, __incX: number): void;

declare function cgbbrd_(__vect: string | any, __m: number, __n: number, __ncc: number, __kl: number, __ku: number, __ab: __CLPK_complex, __ldab: number, __d__: number, __e: number, __q: __CLPK_complex, __ldq: number, __pt: __CLPK_complex, __ldpt: number, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgbcon_(__norm: string | any, __n: number, __kl: number, __ku: number, __ab: __CLPK_complex, __ldab: number, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgbequ_(__m: number, __n: number, __kl: number, __ku: number, __ab: __CLPK_complex, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function cgbequb_(__m: number, __n: number, __kl: number, __ku: number, __ab: __CLPK_complex, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function cgbrfs_(__trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: __CLPK_complex, __ldab: number, __afb: __CLPK_complex, __ldafb: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgbsv_(__n: number, __kl: number, __ku: number, __nrhs: number, __ab: __CLPK_complex, __ldab: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cgbsvx_(__fact: string | any, __trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: __CLPK_complex, __ldab: number, __afb: __CLPK_complex, __ldafb: number, __ipiv: number, __equed: string | any, __r__: number, __c__: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgbtf2_(__m: number, __n: number, __kl: number, __ku: number, __ab: __CLPK_complex, __ldab: number, __ipiv: number, __info: number): number;

declare function cgbtrf_(__m: number, __n: number, __kl: number, __ku: number, __ab: __CLPK_complex, __ldab: number, __ipiv: number, __info: number): number;

declare function cgbtrs_(__trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: __CLPK_complex, __ldab: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cgebak_(__job: string | any, __side: string | any, __n: number, __ilo: number, __ihi: number, __scale: number, __m: number, __v: __CLPK_complex, __ldv: number, __info: number): number;

declare function cgebal_(__job: string | any, __n: number, __a: __CLPK_complex, __lda: number, __ilo: number, __ihi: number, __scale: number, __info: number): number;

declare function cgebd2_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __d__: number, __e: number, __tauq: __CLPK_complex, __taup: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cgebrd_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __d__: number, __e: number, __tauq: __CLPK_complex, __taup: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cgecon_(__norm: string | any, __n: number, __a: __CLPK_complex, __lda: number, __anorm: number, __rcond: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgeequ_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function cgeequb_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function cgees_(__jobvs: string | any, __sort: string | any, __select: () => number, __n: number, __a: __CLPK_complex, __lda: number, __sdim: number, __w: __CLPK_complex, __vs: __CLPK_complex, __ldvs: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __bwork: number, __info: number): number;

declare function cgeesx_(__jobvs: string | any, __sort: string | any, __select: () => number, __sense: string | any, __n: number, __a: __CLPK_complex, __lda: number, __sdim: number, __w: __CLPK_complex, __vs: __CLPK_complex, __ldvs: number, __rconde: number, __rcondv: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __bwork: number, __info: number): number;

declare function cgeev_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: __CLPK_complex, __lda: number, __w: __CLPK_complex, __vl: __CLPK_complex, __ldvl: number, __vr: __CLPK_complex, __ldvr: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function cgeevx_(__balanc: string | any, __jobvl: string | any, __jobvr: string | any, __sense: string | any, __n: number, __a: __CLPK_complex, __lda: number, __w: __CLPK_complex, __vl: __CLPK_complex, __ldvl: number, __vr: __CLPK_complex, __ldvr: number, __ilo: number, __ihi: number, __scale: number, __abnrm: number, __rconde: number, __rcondv: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function cgegs_(__jobvsl: string | any, __jobvsr: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __alpha: __CLPK_complex, __beta: __CLPK_complex, __vsl: __CLPK_complex, __ldvsl: number, __vsr: __CLPK_complex, __ldvsr: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function cgegv_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __alpha: __CLPK_complex, __beta: __CLPK_complex, __vl: __CLPK_complex, __ldvl: number, __vr: __CLPK_complex, __ldvr: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function cgehd2_(__n: number, __ilo: number, __ihi: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cgehrd_(__n: number, __ilo: number, __ihi: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cgelq2_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cgelqf_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cgels_(__trans: string | any, __m: number, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cgelsd_(__m: number, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __s: number, __rcond: number, __rank: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __iwork: number, __info: number): number;

declare function cgelss_(__m: number, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __s: number, __rcond: number, __rank: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function cgelsx_(__m: number, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __jpvt: number, __rcond: number, __rank: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgelsy_(__m: number, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __jpvt: number, __rcond: number, __rank: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function cgeql2_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cgeqlf_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cgeqp3_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __jpvt: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function cgeqpf_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __jpvt: number, __tau: __CLPK_complex, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgeqr2_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cgeqrf_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cgerfs_(__trans: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __af: __CLPK_complex, __ldaf: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgerq2_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cgerqf_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cgesc2_(__n: number, __a: __CLPK_complex, __lda: number, __rhs: __CLPK_complex, __ipiv: number, __jpiv: number, __scale: number): number;

declare function cgesdd_(__jobz: string | any, __m: number, __n: number, __a: __CLPK_complex, __lda: number, __s: number, __u: __CLPK_complex, __ldu: number, __vt: __CLPK_complex, __ldvt: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __iwork: number, __info: number): number;

declare function cgesv_(__n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cgesvd_(__jobu: string | any, __jobvt: string | any, __m: number, __n: number, __a: __CLPK_complex, __lda: number, __s: number, __u: __CLPK_complex, __ldu: number, __vt: __CLPK_complex, __ldvt: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function cgesvx_(__fact: string | any, __trans: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __af: __CLPK_complex, __ldaf: number, __ipiv: number, __equed: string | any, __r__: number, __c__: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgetc2_(__n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __jpiv: number, __info: number): number;

declare function cgetf2_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __info: number): number;

declare function cgetrf_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __info: number): number;

declare function cgetri_(__n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cgetrs_(__trans: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cggbak_(__job: string | any, __side: string | any, __n: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __m: number, __v: __CLPK_complex, __ldv: number, __info: number): number;

declare function cggbal_(__job: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __work: number, __info: number): number;

declare function cgges_(__jobvsl: string | any, __jobvsr: string | any, __sort: string | any, __selctg: () => number, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __sdim: number, __alpha: __CLPK_complex, __beta: __CLPK_complex, __vsl: __CLPK_complex, __ldvsl: number, __vsr: __CLPK_complex, __ldvsr: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __bwork: number, __info: number): number;

declare function cggesx_(__jobvsl: string | any, __jobvsr: string | any, __sort: string | any, __selctg: () => number, __sense: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __sdim: number, __alpha: __CLPK_complex, __beta: __CLPK_complex, __vsl: __CLPK_complex, __ldvsl: number, __vsr: __CLPK_complex, __ldvsr: number, __rconde: number, __rcondv: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __iwork: number, __liwork: number, __bwork: number, __info: number): number;

declare function cggev_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __alpha: __CLPK_complex, __beta: __CLPK_complex, __vl: __CLPK_complex, __ldvl: number, __vr: __CLPK_complex, __ldvr: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function cggevx_(__balanc: string | any, __jobvl: string | any, __jobvr: string | any, __sense: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __alpha: __CLPK_complex, __beta: __CLPK_complex, __vl: __CLPK_complex, __ldvl: number, __vr: __CLPK_complex, __ldvr: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __abnrm: number, __bbnrm: number, __rconde: number, __rcondv: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __iwork: number, __bwork: number, __info: number): number;

declare function cggglm_(__n: number, __m: number, __p: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __d__: __CLPK_complex, __x: __CLPK_complex, __y: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cgghrd_(__compq: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __q: __CLPK_complex, __ldq: number, __z__: __CLPK_complex, __ldz: number, __info: number): number;

declare function cgglse_(__m: number, __n: number, __p: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __c__: __CLPK_complex, __d__: __CLPK_complex, __x: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cggqrf_(__n: number, __m: number, __p: number, __a: __CLPK_complex, __lda: number, __taua: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __taub: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cggrqf_(__m: number, __p: number, __n: number, __a: __CLPK_complex, __lda: number, __taua: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __taub: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cggsvd_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __n: number, __p: number, __k: number, __l: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __alpha: number, __beta: number, __u: __CLPK_complex, __ldu: number, __v: __CLPK_complex, __ldv: number, __q: __CLPK_complex, __ldq: number, __work: __CLPK_complex, __rwork: number, __iwork: number, __info: number): number;

declare function cggsvp_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __p: number, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __tola: number, __tolb: number, __k: number, __l: number, __u: __CLPK_complex, __ldu: number, __v: __CLPK_complex, __ldv: number, __q: __CLPK_complex, __ldq: number, __iwork: number, __rwork: number, __tau: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cgtcon_(__norm: string | any, __n: number, __dl: __CLPK_complex, __d__: __CLPK_complex, __du: __CLPK_complex, __du2: __CLPK_complex, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_complex, __info: number): number;

declare function cgtrfs_(__trans: string | any, __n: number, __nrhs: number, __dl: __CLPK_complex, __d__: __CLPK_complex, __du: __CLPK_complex, __dlf: __CLPK_complex, __df: __CLPK_complex, __duf: __CLPK_complex, __du2: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgtsv_(__n: number, __nrhs: number, __dl: __CLPK_complex, __d__: __CLPK_complex, __du: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cgtsvx_(__fact: string | any, __trans: string | any, __n: number, __nrhs: number, __dl: __CLPK_complex, __d__: __CLPK_complex, __du: __CLPK_complex, __dlf: __CLPK_complex, __df: __CLPK_complex, __duf: __CLPK_complex, __du2: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cgttrf_(__n: number, __dl: __CLPK_complex, __d__: __CLPK_complex, __du: __CLPK_complex, __du2: __CLPK_complex, __ipiv: number, __info: number): number;

declare function cgttrs_(__trans: string | any, __n: number, __nrhs: number, __dl: __CLPK_complex, __d__: __CLPK_complex, __du: __CLPK_complex, __du2: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cgtts2_(__itrans: number, __n: number, __nrhs: number, __dl: __CLPK_complex, __d__: __CLPK_complex, __du: __CLPK_complex, __du2: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number): number;

declare function chbev_(__jobz: string | any, __uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function chbevd_(__jobz: string | any, __uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function chbevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __q: __CLPK_complex, __ldq: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function chbgst_(__vect: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: __CLPK_complex, __ldab: number, __bb: __CLPK_complex, __ldbb: number, __x: __CLPK_complex, __ldx: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function chbgv_(__jobz: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: __CLPK_complex, __ldab: number, __bb: __CLPK_complex, __ldbb: number, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function chbgvd_(__jobz: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: __CLPK_complex, __ldab: number, __bb: __CLPK_complex, __ldbb: number, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function chbgvx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: __CLPK_complex, __ldab: number, __bb: __CLPK_complex, __ldbb: number, __q: __CLPK_complex, __ldq: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function chbtrd_(__vect: string | any, __uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __d__: number, __e: number, __q: __CLPK_complex, __ldq: number, __work: __CLPK_complex, __info: number): number;

declare function checon_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_complex, __info: number): number;

declare function cheequb_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __s: number, __scond: number, __amax: number, __work: __CLPK_complex, __info: number): number;

declare function cheev_(__jobz: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __w: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function cheevd_(__jobz: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __w: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function cheevr_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_complex, __ldz: number, __isuppz: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function cheevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function chegs2_(__itype: number, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function chegst_(__itype: number, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function chegv_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __w: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function chegvd_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __w: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function chegvx_(__itype: number, __jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function cherfs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __af: __CLPK_complex, __ldaf: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function chesv_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function chesvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __af: __CLPK_complex, __ldaf: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function chetd2_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __d__: number, __e: number, __tau: __CLPK_complex, __info: number): number;

declare function chetf2_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __info: number): number;

declare function chetrd_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __d__: number, __e: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function chetrf_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function chetri_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __work: __CLPK_complex, __info: number): number;

declare function chetrs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function chfrk_(__transr: string | any, __uplo: string | any, __trans: string | any, __n: number, __k: number, __alpha: number, __a: __CLPK_complex, __lda: number, __beta: number, __c__: __CLPK_complex): number;

declare function chgeqz_(__job: string | any, __compq: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __h__: __CLPK_complex, __ldh: number, __t: __CLPK_complex, __ldt: number, __alpha: __CLPK_complex, __beta: __CLPK_complex, __q: __CLPK_complex, __ldq: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function chla_transtype__(__ret_val: string | any, __ret_val_len: number, __trans: number): void;

declare function chpcon_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_complex, __info: number): number;

declare function chpev_(__jobz: string | any, __uplo: string | any, __n: number, __ap: __CLPK_complex, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function chpevd_(__jobz: string | any, __uplo: string | any, __n: number, __ap: __CLPK_complex, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function chpevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ap: __CLPK_complex, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function chpgst_(__itype: number, __uplo: string | any, __n: number, __ap: __CLPK_complex, __bp: __CLPK_complex, __info: number): number;

declare function chpgv_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __ap: __CLPK_complex, __bp: __CLPK_complex, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function chpgvd_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __ap: __CLPK_complex, __bp: __CLPK_complex, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function chpgvx_(__itype: number, __jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ap: __CLPK_complex, __bp: __CLPK_complex, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function chprfs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __afp: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function chpsv_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function chpsvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __afp: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function chptrd_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __d__: number, __e: number, __tau: __CLPK_complex, __info: number): number;

declare function chptrf_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __ipiv: number, __info: number): number;

declare function chptri_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __ipiv: number, __work: __CLPK_complex, __info: number): number;

declare function chptrs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function chsein_(__side: string | any, __eigsrc: string | any, __initv: string | any, __select: number, __n: number, __h__: __CLPK_complex, __ldh: number, __w: __CLPK_complex, __vl: __CLPK_complex, __ldvl: number, __vr: __CLPK_complex, __ldvr: number, __mm: number, __m: number, __work: __CLPK_complex, __rwork: number, __ifaill: number, __ifailr: number, __info: number): number;

declare function chseqr_(__job: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __h__: __CLPK_complex, __ldh: number, __w: __CLPK_complex, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function clabrd_(__m: number, __n: number, __nb: number, __a: __CLPK_complex, __lda: number, __d__: number, __e: number, __tauq: __CLPK_complex, __taup: __CLPK_complex, __x: __CLPK_complex, __ldx: number, __y: __CLPK_complex, __ldy: number): number;

declare function clacgv_(__n: number, __x: __CLPK_complex, __incx: number): number;

declare function clacn2_(__n: number, __v: __CLPK_complex, __x: __CLPK_complex, __est: number, __kase: number, __isave: number): number;

declare function clacon_(__n: number, __v: __CLPK_complex, __x: __CLPK_complex, __est: number, __kase: number): number;

declare function clacp2_(__uplo: string | any, __m: number, __n: number, __a: number, __lda: number, __b: __CLPK_complex, __ldb: number): number;

declare function clacpy_(__uplo: string | any, __m: number, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number): number;

declare function clacrm_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __b: number, __ldb: number, __c__: __CLPK_complex, __ldc: number, __rwork: number): number;

declare function clacrt_(__n: number, __cx: __CLPK_complex, __incx: number, __cy: __CLPK_complex, __incy: number, __c__: __CLPK_complex, __s: __CLPK_complex): number;

declare function cladiv_(__ret_val: __CLPK_complex, __x: __CLPK_complex, __y: __CLPK_complex): void;

declare function claed0_(__qsiz: number, __n: number, __d__: number, __e: number, __q: __CLPK_complex, __ldq: number, __qstore: __CLPK_complex, __ldqs: number, __rwork: number, __iwork: number, __info: number): number;

declare function claed7_(__n: number, __cutpnt: number, __qsiz: number, __tlvls: number, __curlvl: number, __curpbm: number, __d__: number, __q: __CLPK_complex, __ldq: number, __rho: number, __indxq: number, __qstore: number, __qptr: number, __prmptr: number, __perm: number, __givptr: number, __givcol: number, __givnum: number, __work: __CLPK_complex, __rwork: number, __iwork: number, __info: number): number;

declare function claed8_(__k: number, __n: number, __qsiz: number, __q: __CLPK_complex, __ldq: number, __d__: number, __rho: number, __cutpnt: number, __z__: number, __dlamda: number, __q2: __CLPK_complex, __ldq2: number, __w: number, __indxp: number, __indx: number, __indxq: number, __perm: number, __givptr: number, __givcol: number, __givnum: number, __info: number): number;

declare function claein_(__rightv: number, __noinit: number, __n: number, __h__: __CLPK_complex, __ldh: number, __w: __CLPK_complex, __v: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __rwork: number, __eps3: number, __smlnum: number, __info: number): number;

declare function claesy_(__a: __CLPK_complex, __b: __CLPK_complex, __c__: __CLPK_complex, __rt1: __CLPK_complex, __rt2: __CLPK_complex, __evscal: __CLPK_complex, __cs1: __CLPK_complex, __sn1: __CLPK_complex): number;

declare function claev2_(__a: __CLPK_complex, __b: __CLPK_complex, __c__: __CLPK_complex, __rt1: number, __rt2: number, __cs1: number, __sn1: __CLPK_complex): number;

declare function clag2z_(__m: number, __n: number, __sa: __CLPK_complex, __ldsa: number, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function clags2_(__upper: number, __a1: number, __a2: __CLPK_complex, __a3: number, __b1: number, __b2: __CLPK_complex, __b3: number, __csu: number, __snu: __CLPK_complex, __csv: number, __snv: __CLPK_complex, __csq: number, __snq: __CLPK_complex): number;

declare function clagtm_(__trans: string | any, __n: number, __nrhs: number, __alpha: number, __dl: __CLPK_complex, __d__: __CLPK_complex, __du: __CLPK_complex, __x: __CLPK_complex, __ldx: number, __beta: number, __b: __CLPK_complex, __ldb: number): number;

declare function clahef_(__uplo: string | any, __n: number, __nb: number, __kb: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __w: __CLPK_complex, __ldw: number, __info: number): number;

declare function clahqr_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: __CLPK_complex, __ldh: number, __w: __CLPK_complex, __iloz: number, __ihiz: number, __z__: __CLPK_complex, __ldz: number, __info: number): number;

declare function clahr2_(__n: number, __k: number, __nb: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __t: __CLPK_complex, __ldt: number, __y: __CLPK_complex, __ldy: number): number;

declare function clahrd_(__n: number, __k: number, __nb: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __t: __CLPK_complex, __ldt: number, __y: __CLPK_complex, __ldy: number): number;

declare function claic1_(__job: number, __j: number, __x: __CLPK_complex, __sest: number, __w: __CLPK_complex, __gamma: __CLPK_complex, __sestpr: number, __s: __CLPK_complex, __c__: __CLPK_complex): number;

declare function clals0_(__icompq: number, __nl: number, __nr: number, __sqre: number, __nrhs: number, __b: __CLPK_complex, __ldb: number, __bx: __CLPK_complex, __ldbx: number, __perm: number, __givptr: number, __givcol: number, __ldgcol: number, __givnum: number, __ldgnum: number, __poles: number, __difl: number, __difr: number, __z__: number, __k: number, __c__: number, __s: number, __rwork: number, __info: number): number;

declare function clalsa_(__icompq: number, __smlsiz: number, __n: number, __nrhs: number, __b: __CLPK_complex, __ldb: number, __bx: __CLPK_complex, __ldbx: number, __u: number, __ldu: number, __vt: number, __k: number, __difl: number, __difr: number, __z__: number, __poles: number, __givptr: number, __givcol: number, __ldgcol: number, __perm: number, __givnum: number, __c__: number, __s: number, __rwork: number, __iwork: number, __info: number): number;

declare function clalsd_(__uplo: string | any, __smlsiz: number, __n: number, __nrhs: number, __d__: number, __e: number, __b: __CLPK_complex, __ldb: number, __rcond: number, __rank: number, __work: __CLPK_complex, __rwork: number, __iwork: number, __info: number): number;

declare function clangb_(__norm: string | any, __n: number, __kl: number, __ku: number, __ab: __CLPK_complex, __ldab: number, __work: number): number;

declare function clange_(__norm: string | any, __m: number, __n: number, __a: __CLPK_complex, __lda: number, __work: number): number;

declare function clangt_(__norm: string | any, __n: number, __dl: __CLPK_complex, __d__: __CLPK_complex, __du: __CLPK_complex): number;

declare function clanhb_(__norm: string | any, __uplo: string | any, __n: number, __k: number, __ab: __CLPK_complex, __ldab: number, __work: number): number;

declare function clanhe_(__norm: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __work: number): number;

declare function clanhf_(__norm: string | any, __transr: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __work: number): number;

declare function clanhp_(__norm: string | any, __uplo: string | any, __n: number, __ap: __CLPK_complex, __work: number): number;

declare function clanhs_(__norm: string | any, __n: number, __a: __CLPK_complex, __lda: number, __work: number): number;

declare function clanht_(__norm: string | any, __n: number, __d__: number, __e: __CLPK_complex): number;

declare function clansb_(__norm: string | any, __uplo: string | any, __n: number, __k: number, __ab: __CLPK_complex, __ldab: number, __work: number): number;

declare function clansp_(__norm: string | any, __uplo: string | any, __n: number, __ap: __CLPK_complex, __work: number): number;

declare function clansy_(__norm: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __work: number): number;

declare function clantb_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __k: number, __ab: __CLPK_complex, __ldab: number, __work: number): number;

declare function clantp_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __ap: __CLPK_complex, __work: number): number;

declare function clantr_(__norm: string | any, __uplo: string | any, __diag: string | any, __m: number, __n: number, __a: __CLPK_complex, __lda: number, __work: number): number;

declare function clapll_(__n: number, __x: __CLPK_complex, __incx: number, __y: __CLPK_complex, __incy: number, __ssmin: number): number;

declare function clapmt_(__forwrd: number, __m: number, __n: number, __x: __CLPK_complex, __ldx: number, __k: number): number;

declare function claqgb_(__m: number, __n: number, __kl: number, __ku: number, __ab: __CLPK_complex, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __equed: string | any): number;

declare function claqge_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __equed: string | any): number;

declare function claqhb_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function claqhe_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function claqhp_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function claqp2_(__m: number, __n: number, __offset: number, __a: __CLPK_complex, __lda: number, __jpvt: number, __tau: __CLPK_complex, __vn1: number, __vn2: number, __work: __CLPK_complex): number;

declare function claqps_(__m: number, __n: number, __offset: number, __nb: number, __kb: number, __a: __CLPK_complex, __lda: number, __jpvt: number, __tau: __CLPK_complex, __vn1: number, __vn2: number, __auxv: __CLPK_complex, __f: __CLPK_complex, __ldf: number): number;

declare function claqr0_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: __CLPK_complex, __ldh: number, __w: __CLPK_complex, __iloz: number, __ihiz: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function claqr1_(__n: number, __h__: __CLPK_complex, __ldh: number, __s1: __CLPK_complex, __s2: __CLPK_complex, __v: __CLPK_complex): number;

declare function claqr2_(__wantt: number, __wantz: number, __n: number, __ktop: number, __kbot: number, __nw: number, __h__: __CLPK_complex, __ldh: number, __iloz: number, __ihiz: number, __z__: __CLPK_complex, __ldz: number, __ns: number, __nd: number, __sh: __CLPK_complex, __v: __CLPK_complex, __ldv: number, __nh: number, __t: __CLPK_complex, __ldt: number, __nv: number, __wv: __CLPK_complex, __ldwv: number, __work: __CLPK_complex, __lwork: number): number;

declare function claqr3_(__wantt: number, __wantz: number, __n: number, __ktop: number, __kbot: number, __nw: number, __h__: __CLPK_complex, __ldh: number, __iloz: number, __ihiz: number, __z__: __CLPK_complex, __ldz: number, __ns: number, __nd: number, __sh: __CLPK_complex, __v: __CLPK_complex, __ldv: number, __nh: number, __t: __CLPK_complex, __ldt: number, __nv: number, __wv: __CLPK_complex, __ldwv: number, __work: __CLPK_complex, __lwork: number): number;

declare function claqr4_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: __CLPK_complex, __ldh: number, __w: __CLPK_complex, __iloz: number, __ihiz: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function claqr5_(__wantt: number, __wantz: number, __kacc22: number, __n: number, __ktop: number, __kbot: number, __nshfts: number, __s: __CLPK_complex, __h__: __CLPK_complex, __ldh: number, __iloz: number, __ihiz: number, __z__: __CLPK_complex, __ldz: number, __v: __CLPK_complex, __ldv: number, __u: __CLPK_complex, __ldu: number, __nv: number, __wv: __CLPK_complex, __ldwv: number, __nh: number, __wh: __CLPK_complex, __ldwh: number): number;

declare function claqsb_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function claqsp_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function claqsy_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function clar1v_(__n: number, __b1: number, __bn: number, __lambda: number, __d__: number, __l: number, __ld: number, __lld: number, __pivmin: number, __gaptol: number, __z__: __CLPK_complex, __wantnc: number, __negcnt: number, __ztz: number, __mingma: number, __r__: number, __isuppz: number, __nrminv: number, __resid: number, __rqcorr: number, __work: number): number;

declare function clar2v_(__n: number, __x: __CLPK_complex, __y: __CLPK_complex, __z__: __CLPK_complex, __incx: number, __c__: number, __s: __CLPK_complex, __incc: number): number;

declare function clarcm_(__m: number, __n: number, __a: number, __lda: number, __b: __CLPK_complex, __ldb: number, __c__: __CLPK_complex, __ldc: number, __rwork: number): number;

declare function clarf_(__side: string | any, __m: number, __n: number, __v: __CLPK_complex, __incv: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex): number;

declare function clarfb_(__side: string | any, __trans: string | any, __direct: string | any, __storev: string | any, __m: number, __n: number, __k: number, __v: __CLPK_complex, __ldv: number, __t: __CLPK_complex, __ldt: number, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __ldwork: number): number;

declare function clarfg_(__n: number, __alpha: __CLPK_complex, __x: __CLPK_complex, __incx: number, __tau: __CLPK_complex): number;

declare function clarfp_(__n: number, __alpha: __CLPK_complex, __x: __CLPK_complex, __incx: number, __tau: __CLPK_complex): number;

declare function clarft_(__direct: string | any, __storev: string | any, __n: number, __k: number, __v: __CLPK_complex, __ldv: number, __tau: __CLPK_complex, __t: __CLPK_complex, __ldt: number): number;

declare function clarfx_(__side: string | any, __m: number, __n: number, __v: __CLPK_complex, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex): number;

declare function clargv_(__n: number, __x: __CLPK_complex, __incx: number, __y: __CLPK_complex, __incy: number, __c__: number, __incc: number): number;

declare function clarnv_(__idist: number, __iseed: number, __n: number, __x: __CLPK_complex): number;

declare function clarrv_(__n: number, __vl: number, __vu: number, __d__: number, __l: number, __pivmin: number, __isplit: number, __m: number, __dol: number, __dou: number, __minrgp: number, __rtol1: number, __rtol2: number, __w: number, __werr: number, __wgap: number, __iblock: number, __indexw: number, __gers: number, __z__: __CLPK_complex, __ldz: number, __isuppz: number, __work: number, __iwork: number, __info: number): number;

declare function clarscl2_(__m: number, __n: number, __d__: number, __x: __CLPK_complex, __ldx: number): number;

declare function clartg_(__f: __CLPK_complex, __g: __CLPK_complex, __cs: number, __sn: __CLPK_complex, __r__: __CLPK_complex): number;

declare function clartv_(__n: number, __x: __CLPK_complex, __incx: number, __y: __CLPK_complex, __incy: number, __c__: number, __s: __CLPK_complex, __incc: number): number;

declare function clarz_(__side: string | any, __m: number, __n: number, __l: number, __v: __CLPK_complex, __incv: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex): number;

declare function clarzb_(__side: string | any, __trans: string | any, __direct: string | any, __storev: string | any, __m: number, __n: number, __k: number, __l: number, __v: __CLPK_complex, __ldv: number, __t: __CLPK_complex, __ldt: number, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __ldwork: number): number;

declare function clarzt_(__direct: string | any, __storev: string | any, __n: number, __k: number, __v: __CLPK_complex, __ldv: number, __tau: __CLPK_complex, __t: __CLPK_complex, __ldt: number): number;

declare function clascl2_(__m: number, __n: number, __d__: number, __x: __CLPK_complex, __ldx: number): number;

declare function clascl_(__type__: string | any, __kl: number, __ku: number, __cfrom: number, __cto: number, __m: number, __n: number, __a: __CLPK_complex, __lda: number, __info: number): number;

declare function claset_(__uplo: string | any, __m: number, __n: number, __alpha: __CLPK_complex, __beta: __CLPK_complex, __a: __CLPK_complex, __lda: number): number;

declare function clasr_(__side: string | any, __pivot: string | any, __direct: string | any, __m: number, __n: number, __c__: number, __s: number, __a: __CLPK_complex, __lda: number): number;

declare function classq_(__n: number, __x: __CLPK_complex, __incx: number, __scale: number, __sumsq: number): number;

declare function claswp_(__n: number, __a: __CLPK_complex, __lda: number, __k1: number, __k2: number, __ipiv: number, __incx: number): number;

declare function clasyf_(__uplo: string | any, __n: number, __nb: number, __kb: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __w: __CLPK_complex, __ldw: number, __info: number): number;

declare function clatbs_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __x: __CLPK_complex, __scale: number, __cnorm: number, __info: number): number;

declare function clatdf_(__ijob: number, __n: number, __z__: __CLPK_complex, __ldz: number, __rhs: __CLPK_complex, __rdsum: number, __rdscal: number, __ipiv: number, __jpiv: number): number;

declare function clatps_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __ap: __CLPK_complex, __x: __CLPK_complex, __scale: number, __cnorm: number, __info: number): number;

declare function clatrd_(__uplo: string | any, __n: number, __nb: number, __a: __CLPK_complex, __lda: number, __e: number, __tau: __CLPK_complex, __w: __CLPK_complex, __ldw: number): number;

declare function clatrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __a: __CLPK_complex, __lda: number, __x: __CLPK_complex, __scale: number, __cnorm: number, __info: number): number;

declare function clatrz_(__m: number, __n: number, __l: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex): number;

declare function clatzm_(__side: string | any, __m: number, __n: number, __v: __CLPK_complex, __incv: number, __tau: __CLPK_complex, __c1: __CLPK_complex, __c2: __CLPK_complex, __ldc: number, __work: __CLPK_complex): number;

declare function clauu2_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __info: number): number;

declare function clauum_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __info: number): number;

declare function cpbcon_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __anorm: number, __rcond: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cpbequ_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function cpbrfs_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_complex, __ldab: number, __afb: __CLPK_complex, __ldafb: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cpbstf_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __info: number): number;

declare function cpbsv_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_complex, __ldab: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cpbsvx_(__fact: string | any, __uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_complex, __ldab: number, __afb: __CLPK_complex, __ldafb: number, __equed: string | any, __s: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cpbtf2_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __info: number): number;

declare function cpbtrf_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __info: number): number;

declare function cpbtrs_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_complex, __ldab: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cpftrf_(__transr: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __info: number): number;

declare function cpftri_(__transr: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __info: number): number;

declare function cpftrs_(__transr: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cpocon_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __anorm: number, __rcond: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cpoequ_(__n: number, __a: __CLPK_complex, __lda: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function cpoequb_(__n: number, __a: __CLPK_complex, __lda: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function cporfs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __af: __CLPK_complex, __ldaf: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cposv_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cposvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __af: __CLPK_complex, __ldaf: number, __equed: string | any, __s: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cpotf2_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __info: number): number;

declare function cpotrf_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __info: number): number;

declare function cpotri_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __info: number): number;

declare function cpotrs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cppcon_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __anorm: number, __rcond: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cppequ_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __s: number, __scond: number, __amax: number, __info: number): number;

declare function cpprfs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __afp: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cppsv_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cppsvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __afp: __CLPK_complex, __equed: string | any, __s: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cpptrf_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __info: number): number;

declare function cpptri_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __info: number): number;

declare function cpptrs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cpstf2_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __piv: number, __rank: number, __tol: number, __work: number, __info: number): number;

declare function cpstrf_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __piv: number, __rank: number, __tol: number, __work: number, __info: number): number;

declare function cptcon_(__n: number, __d__: number, __e: __CLPK_complex, __anorm: number, __rcond: number, __rwork: number, __info: number): number;

declare function cpteqr_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: __CLPK_complex, __ldz: number, __work: number, __info: number): number;

declare function cptrfs_(__uplo: string | any, __n: number, __nrhs: number, __d__: number, __e: __CLPK_complex, __df: number, __ef: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cptsv_(__n: number, __nrhs: number, __d__: number, __e: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cptsvx_(__fact: string | any, __n: number, __nrhs: number, __d__: number, __e: __CLPK_complex, __df: number, __ef: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cpttrf_(__n: number, __d__: number, __e: __CLPK_complex, __info: number): number;

declare function cpttrs_(__uplo: string | any, __n: number, __nrhs: number, __d__: number, __e: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cptts2_(__iuplo: number, __n: number, __nrhs: number, __d__: number, __e: __CLPK_complex, __b: __CLPK_complex, __ldb: number): number;

declare function crot_(__n: number, __cx: __CLPK_complex, __incx: number, __cy: __CLPK_complex, __incy: number, __c__: number, __s: __CLPK_complex): number;

declare function cspcon_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_complex, __info: number): number;

declare function cspmv_(__uplo: string | any, __n: number, __alpha: __CLPK_complex, __ap: __CLPK_complex, __x: __CLPK_complex, __incx: number, __beta: __CLPK_complex, __y: __CLPK_complex, __incy: number): number;

declare function cspr_(__uplo: string | any, __n: number, __alpha: __CLPK_complex, __x: __CLPK_complex, __incx: number, __ap: __CLPK_complex): number;

declare function csprfs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __afp: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function cspsv_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function cspsvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __afp: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function csptrf_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __ipiv: number, __info: number): number;

declare function csptri_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __ipiv: number, __work: __CLPK_complex, __info: number): number;

declare function csptrs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function csrscl_(__n: number, __sa: number, __sx: __CLPK_complex, __incx: number): number;

declare function cstedc_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: __CLPK_complex, __ldz: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function cstegr_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_complex, __ldz: number, __isuppz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function cstein_(__n: number, __d__: number, __e: number, __m: number, __w: number, __iblock: number, __isplit: number, __z__: __CLPK_complex, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function cstemr_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __m: number, __w: number, __z__: __CLPK_complex, __ldz: number, __nzc: number, __isuppz: number, __tryrac: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function csteqr_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: __CLPK_complex, __ldz: number, __work: number, __info: number): number;

declare function csycon_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_complex, __info: number): number;

declare function csyequb_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __s: number, __scond: number, __amax: number, __work: __CLPK_complex, __info: number): number;

declare function csymv_(__uplo: string | any, __n: number, __alpha: __CLPK_complex, __a: __CLPK_complex, __lda: number, __x: __CLPK_complex, __incx: number, __beta: __CLPK_complex, __y: __CLPK_complex, __incy: number): number;

declare function csyr_(__uplo: string | any, __n: number, __alpha: __CLPK_complex, __x: __CLPK_complex, __incx: number, __a: __CLPK_complex, __lda: number): number;

declare function csyrfs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __af: __CLPK_complex, __ldaf: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function csysv_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function csysvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __af: __CLPK_complex, __ldaf: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_complex, __lwork: number, __rwork: number, __info: number): number;

declare function csytf2_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __info: number): number;

declare function csytrf_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function csytri_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __work: __CLPK_complex, __info: number): number;

declare function csytrs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __ipiv: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function ctbcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __kd: number, __ab: __CLPK_complex, __ldab: number, __rcond: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function ctbrfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_complex, __ldab: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function ctbtrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_complex, __ldab: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function ctfsm_(__transr: string | any, __side: string | any, __uplo: string | any, __trans: string | any, __diag: string | any, __m: number, __n: number, __alpha: __CLPK_complex, __a: __CLPK_complex, __b: __CLPK_complex, __ldb: number): number;

declare function ctftri_(__transr: string | any, __uplo: string | any, __diag: string | any, __n: number, __a: __CLPK_complex, __info: number): number;

declare function ctfttp_(__transr: string | any, __uplo: string | any, __n: number, __arf: __CLPK_complex, __ap: __CLPK_complex, __info: number): number;

declare function ctfttr_(__transr: string | any, __uplo: string | any, __n: number, __arf: __CLPK_complex, __a: __CLPK_complex, __lda: number, __info: number): number;

declare function ctgevc_(__side: string | any, __howmny: string | any, __select: number, __n: number, __s: __CLPK_complex, __lds: number, __p: __CLPK_complex, __ldp: number, __vl: __CLPK_complex, __ldvl: number, __vr: __CLPK_complex, __ldvr: number, __mm: number, __m: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function ctgex2_(__wantq: number, __wantz: number, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __q: __CLPK_complex, __ldq: number, __z__: __CLPK_complex, __ldz: number, __j1: number, __info: number): number;

declare function ctgexc_(__wantq: number, __wantz: number, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __q: __CLPK_complex, __ldq: number, __z__: __CLPK_complex, __ldz: number, __ifst: number, __ilst: number, __info: number): number;

declare function ctgsen_(__ijob: number, __wantq: number, __wantz: number, __select: number, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __alpha: __CLPK_complex, __beta: __CLPK_complex, __q: __CLPK_complex, __ldq: number, __z__: __CLPK_complex, __ldz: number, __m: number, __pl: number, __pr: number, __dif: number, __work: __CLPK_complex, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function ctgsja_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __p: number, __n: number, __k: number, __l: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __tola: number, __tolb: number, __alpha: number, __beta: number, __u: __CLPK_complex, __ldu: number, __v: __CLPK_complex, __ldv: number, __q: __CLPK_complex, __ldq: number, __work: __CLPK_complex, __ncycle: number, __info: number): number;

declare function ctgsna_(__job: string | any, __howmny: string | any, __select: number, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __vl: __CLPK_complex, __ldvl: number, __vr: __CLPK_complex, __ldvr: number, __s: number, __dif: number, __mm: number, __m: number, __work: __CLPK_complex, __lwork: number, __iwork: number, __info: number): number;

declare function ctgsy2_(__trans: string | any, __ijob: number, __m: number, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __c__: __CLPK_complex, __ldc: number, __d__: __CLPK_complex, __ldd: number, __e: __CLPK_complex, __lde: number, __f: __CLPK_complex, __ldf: number, __scale: number, __rdsum: number, __rdscal: number, __info: number): number;

declare function ctgsyl_(__trans: string | any, __ijob: number, __m: number, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __c__: __CLPK_complex, __ldc: number, __d__: __CLPK_complex, __ldd: number, __e: __CLPK_complex, __lde: number, __f: __CLPK_complex, __ldf: number, __scale: number, __dif: number, __work: __CLPK_complex, __lwork: number, __iwork: number, __info: number): number;

declare function ctpcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __ap: __CLPK_complex, __rcond: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function ctprfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function ctptri_(__uplo: string | any, __diag: string | any, __n: number, __ap: __CLPK_complex, __info: number): number;

declare function ctptrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __ap: __CLPK_complex, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function ctpttf_(__transr: string | any, __uplo: string | any, __n: number, __ap: __CLPK_complex, __arf: __CLPK_complex, __info: number): number;

declare function ctpttr_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __a: __CLPK_complex, __lda: number, __info: number): number;

declare function ctrcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __a: __CLPK_complex, __lda: number, __rcond: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function ctrevc_(__side: string | any, __howmny: string | any, __select: number, __n: number, __t: __CLPK_complex, __ldt: number, __vl: __CLPK_complex, __ldvl: number, __vr: __CLPK_complex, __ldvr: number, __mm: number, __m: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function ctrexc_(__compq: string | any, __n: number, __t: __CLPK_complex, __ldt: number, __q: __CLPK_complex, __ldq: number, __ifst: number, __ilst: number, __info: number): number;

declare function ctrrfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __x: __CLPK_complex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_complex, __rwork: number, __info: number): number;

declare function ctrsen_(__job: string | any, __compq: string | any, __select: number, __n: number, __t: __CLPK_complex, __ldt: number, __q: __CLPK_complex, __ldq: number, __w: __CLPK_complex, __m: number, __s: number, __sep: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function ctrsna_(__job: string | any, __howmny: string | any, __select: number, __n: number, __t: __CLPK_complex, __ldt: number, __vl: __CLPK_complex, __ldvl: number, __vr: __CLPK_complex, __ldvr: number, __s: number, __sep: number, __mm: number, __m: number, __work: __CLPK_complex, __ldwork: number, __rwork: number, __info: number): number;

declare function ctrsyl_(__trana: string | any, __tranb: string | any, __isgn: number, __m: number, __n: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __c__: __CLPK_complex, __ldc: number, __scale: number, __info: number): number;

declare function ctrti2_(__uplo: string | any, __diag: string | any, __n: number, __a: __CLPK_complex, __lda: number, __info: number): number;

declare function ctrtri_(__uplo: string | any, __diag: string | any, __n: number, __a: __CLPK_complex, __lda: number, __info: number): number;

declare function ctrtrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __a: __CLPK_complex, __lda: number, __b: __CLPK_complex, __ldb: number, __info: number): number;

declare function ctrttf_(__transr: string | any, __uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __arf: __CLPK_complex, __info: number): number;

declare function ctrttp_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __ap: __CLPK_complex, __info: number): number;

declare function ctzrqf_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __info: number): number;

declare function ctzrzf_(__m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cung2l_(__m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cung2r_(__m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cungbr_(__vect: string | any, __m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cunghr_(__n: number, __ilo: number, __ihi: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cungl2_(__m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cunglq_(__m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cungql_(__m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cungqr_(__m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cungr2_(__m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __info: number): number;

declare function cungrq_(__m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cungtr_(__uplo: string | any, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cunm2l_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __info: number): number;

declare function cunm2r_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __info: number): number;

declare function cunmbr_(__vect: string | any, __side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cunmhr_(__side: string | any, __trans: string | any, __m: number, __n: number, __ilo: number, __ihi: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cunml2_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __info: number): number;

declare function cunmlq_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cunmql_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cunmqr_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cunmr2_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __info: number): number;

declare function cunmr3_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __l: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __info: number): number;

declare function cunmrq_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cunmrz_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __l: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cunmtr_(__side: string | any, __uplo: string | any, __trans: string | any, __m: number, __n: number, __a: __CLPK_complex, __lda: number, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __lwork: number, __info: number): number;

declare function cupgtr_(__uplo: string | any, __n: number, __ap: __CLPK_complex, __tau: __CLPK_complex, __q: __CLPK_complex, __ldq: number, __work: __CLPK_complex, __info: number): number;

declare function cupmtr_(__side: string | any, __uplo: string | any, __trans: string | any, __m: number, __n: number, __ap: __CLPK_complex, __tau: __CLPK_complex, __c__: __CLPK_complex, __ldc: number, __work: __CLPK_complex, __info: number): number;

declare function dbdsdc_(__uplo: string | any, __compq: string | any, __n: number, __d__: number, __e: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __q: number, __iq: number, __work: number, __iwork: number, __info: number): number;

declare function dbdsqr_(__uplo: string | any, __n: number, __ncvt: number, __nru: number, __ncc: number, __d__: number, __e: number, __vt: number, __ldvt: number, __u: number, __ldu: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function ddisna_(__job: string | any, __m: number, __n: number, __d__: number, __sep: number, __info: number): number;

declare function dgbbrd_(__vect: string | any, __m: number, __n: number, __ncc: number, __kl: number, __ku: number, __ab: number, __ldab: number, __d__: number, __e: number, __q: number, __ldq: number, __pt: number, __ldpt: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function dgbcon_(__norm: string | any, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __ipiv: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dgbequ_(__m: number, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function dgbequb_(__m: number, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function dgbrfs_(__trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: number, __ldab: number, __afb: number, __ldafb: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dgbsv_(__n: number, __kl: number, __ku: number, __nrhs: number, __ab: number, __ldab: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function dgbsvx_(__fact: string | any, __trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: number, __ldab: number, __afb: number, __ldafb: number, __ipiv: number, __equed: string | any, __r__: number, __c__: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dgbtf2_(__m: number, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __ipiv: number, __info: number): number;

declare function dgbtrf_(__m: number, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __ipiv: number, __info: number): number;

declare function dgbtrs_(__trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: number, __ldab: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function dgebak_(__job: string | any, __side: string | any, __n: number, __ilo: number, __ihi: number, __scale: number, __m: number, __v: number, __ldv: number, __info: number): number;

declare function dgebal_(__job: string | any, __n: number, __a: number, __lda: number, __ilo: number, __ihi: number, __scale: number, __info: number): number;

declare function dgebd2_(__m: number, __n: number, __a: number, __lda: number, __d__: number, __e: number, __tauq: number, __taup: number, __work: number, __info: number): number;

declare function dgebrd_(__m: number, __n: number, __a: number, __lda: number, __d__: number, __e: number, __tauq: number, __taup: number, __work: number, __lwork: number, __info: number): number;

declare function dgecon_(__norm: string | any, __n: number, __a: number, __lda: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dgeequ_(__m: number, __n: number, __a: number, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function dgeequb_(__m: number, __n: number, __a: number, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function dgees_(__jobvs: string | any, __sort: string | any, __select: () => number, __n: number, __a: number, __lda: number, __sdim: number, __wr: number, __wi: number, __vs: number, __ldvs: number, __work: number, __lwork: number, __bwork: number, __info: number): number;

declare function dgeesx_(__jobvs: string | any, __sort: string | any, __select: () => number, __sense: string | any, __n: number, __a: number, __lda: number, __sdim: number, __wr: number, __wi: number, __vs: number, __ldvs: number, __rconde: number, __rcondv: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __bwork: number, __info: number): number;

declare function dgeev_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: number, __lda: number, __wr: number, __wi: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __work: number, __lwork: number, __info: number): number;

declare function dgeevx_(__balanc: string | any, __jobvl: string | any, __jobvr: string | any, __sense: string | any, __n: number, __a: number, __lda: number, __wr: number, __wi: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __ilo: number, __ihi: number, __scale: number, __abnrm: number, __rconde: number, __rcondv: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function dgegs_(__jobvsl: string | any, __jobvsr: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __vsl: number, __ldvsl: number, __vsr: number, __ldvsr: number, __work: number, __lwork: number, __info: number): number;

declare function dgegv_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __work: number, __lwork: number, __info: number): number;

declare function dgehd2_(__n: number, __ilo: number, __ihi: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function dgehrd_(__n: number, __ilo: number, __ihi: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dgejsv_(__joba: string | any, __jobu: string | any, __jobv: string | any, __jobr: string | any, __jobt: string | any, __jobp: string | any, __m: number, __n: number, __a: number, __lda: number, __sva: number, __u: number, __ldu: number, __v: number, __ldv: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function dgelq2_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function dgelqf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dgels_(__trans: string | any, __m: number, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __work: number, __lwork: number, __info: number): number;

declare function dgelsd_(__m: number, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __s: number, __rcond: number, __rank: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function dgelss_(__m: number, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __s: number, __rcond: number, __rank: number, __work: number, __lwork: number, __info: number): number;

declare function dgelsx_(__m: number, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __jpvt: number, __rcond: number, __rank: number, __work: number, __info: number): number;

declare function dgelsy_(__m: number, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __jpvt: number, __rcond: number, __rank: number, __work: number, __lwork: number, __info: number): number;

declare function dgeql2_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function dgeqlf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dgeqp3_(__m: number, __n: number, __a: number, __lda: number, __jpvt: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dgeqpf_(__m: number, __n: number, __a: number, __lda: number, __jpvt: number, __tau: number, __work: number, __info: number): number;

declare function dgeqr2_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function dgeqrf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dgerfs_(__trans: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dgerq2_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function dgerqf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dgesc2_(__n: number, __a: number, __lda: number, __rhs: number, __ipiv: number, __jpiv: number, __scale: number): number;

declare function dgesdd_(__jobz: string | any, __m: number, __n: number, __a: number, __lda: number, __s: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function dgesv_(__n: number, __nrhs: number, __a: number, __lda: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function dgesvd_(__jobu: string | any, __jobvt: string | any, __m: number, __n: number, __a: number, __lda: number, __s: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __work: number, __lwork: number, __info: number): number;

declare function dgesvj_(__joba: string | any, __jobu: string | any, __jobv: string | any, __m: number, __n: number, __a: number, __lda: number, __sva: number, __mv: number, __v: number, __ldv: number, __work: number, __lwork: number, __info: number): number;

declare function dgesvx_(__fact: string | any, __trans: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __ipiv: number, __equed: string | any, __r__: number, __c__: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dgetc2_(__n: number, __a: number, __lda: number, __ipiv: number, __jpiv: number, __info: number): number;

declare function dgetf2_(__m: number, __n: number, __a: number, __lda: number, __ipiv: number, __info: number): number;

declare function dgetrf_(__m: number, __n: number, __a: number, __lda: number, __ipiv: number, __info: number): number;

declare function dgetri_(__n: number, __a: number, __lda: number, __ipiv: number, __work: number, __lwork: number, __info: number): number;

declare function dgetrs_(__trans: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function dggbak_(__job: string | any, __side: string | any, __n: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __m: number, __v: number, __ldv: number, __info: number): number;

declare function dggbal_(__job: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __work: number, __info: number): number;

declare function dgges_(__jobvsl: string | any, __jobvsr: string | any, __sort: string | any, __selctg: () => number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __sdim: number, __alphar: number, __alphai: number, __beta: number, __vsl: number, __ldvsl: number, __vsr: number, __ldvsr: number, __work: number, __lwork: number, __bwork: number, __info: number): number;

declare function dggesx_(__jobvsl: string | any, __jobvsr: string | any, __sort: string | any, __selctg: () => number, __sense: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __sdim: number, __alphar: number, __alphai: number, __beta: number, __vsl: number, __ldvsl: number, __vsr: number, __ldvsr: number, __rconde: number, __rcondv: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __bwork: number, __info: number): number;

declare function dggev_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __work: number, __lwork: number, __info: number): number;

declare function dggevx_(__balanc: string | any, __jobvl: string | any, __jobvr: string | any, __sense: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __abnrm: number, __bbnrm: number, __rconde: number, __rcondv: number, __work: number, __lwork: number, __iwork: number, __bwork: number, __info: number): number;

declare function dggglm_(__n: number, __m: number, __p: number, __a: number, __lda: number, __b: number, __ldb: number, __d__: number, __x: number, __y: number, __work: number, __lwork: number, __info: number): number;

declare function dgghrd_(__compq: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __a: number, __lda: number, __b: number, __ldb: number, __q: number, __ldq: number, __z__: number, __ldz: number, __info: number): number;

declare function dgglse_(__m: number, __n: number, __p: number, __a: number, __lda: number, __b: number, __ldb: number, __c__: number, __d__: number, __x: number, __work: number, __lwork: number, __info: number): number;

declare function dggqrf_(__n: number, __m: number, __p: number, __a: number, __lda: number, __taua: number, __b: number, __ldb: number, __taub: number, __work: number, __lwork: number, __info: number): number;

declare function dggrqf_(__m: number, __p: number, __n: number, __a: number, __lda: number, __taua: number, __b: number, __ldb: number, __taub: number, __work: number, __lwork: number, __info: number): number;

declare function dggsvd_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __n: number, __p: number, __k: number, __l: number, __a: number, __lda: number, __b: number, __ldb: number, __alpha: number, __beta: number, __u: number, __ldu: number, __v: number, __ldv: number, __q: number, __ldq: number, __work: number, __iwork: number, __info: number): number;

declare function dggsvp_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __p: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __tola: number, __tolb: number, __k: number, __l: number, __u: number, __ldu: number, __v: number, __ldv: number, __q: number, __ldq: number, __iwork: number, __tau: number, __work: number, __info: number): number;

declare function dgsvj0_(__jobv: string | any, __m: number, __n: number, __a: number, __lda: number, __d__: number, __sva: number, __mv: number, __v: number, __ldv: number, __eps: number, __sfmin: number, __tol: number, __nsweep: number, __work: number, __lwork: number, __info: number): number;

declare function dgsvj1_(__jobv: string | any, __m: number, __n: number, __n1: number, __a: number, __lda: number, __d__: number, __sva: number, __mv: number, __v: number, __ldv: number, __eps: number, __sfmin: number, __tol: number, __nsweep: number, __work: number, __lwork: number, __info: number): number;

declare function dgtcon_(__norm: string | any, __n: number, __dl: number, __d__: number, __du: number, __du2: number, __ipiv: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dgtrfs_(__trans: string | any, __n: number, __nrhs: number, __dl: number, __d__: number, __du: number, __dlf: number, __df: number, __duf: number, __du2: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dgtsv_(__n: number, __nrhs: number, __dl: number, __d__: number, __du: number, __b: number, __ldb: number, __info: number): number;

declare function dgtsvx_(__fact: string | any, __trans: string | any, __n: number, __nrhs: number, __dl: number, __d__: number, __du: number, __dlf: number, __df: number, __duf: number, __du2: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dgttrf_(__n: number, __dl: number, __d__: number, __du: number, __du2: number, __ipiv: number, __info: number): number;

declare function dgttrs_(__trans: string | any, __n: number, __nrhs: number, __dl: number, __d__: number, __du: number, __du2: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function dgtts2_(__itrans: number, __n: number, __nrhs: number, __dl: number, __d__: number, __du: number, __du2: number, __ipiv: number, __b: number, __ldb: number): number;

declare function dhgeqz_(__job: string | any, __compq: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __h__: number, __ldh: number, __t: number, __ldt: number, __alphar: number, __alphai: number, __beta: number, __q: number, __ldq: number, __z__: number, __ldz: number, __work: number, __lwork: number, __info: number): number;

declare function dhsein_(__side: string | any, __eigsrc: string | any, __initv: string | any, __select: number, __n: number, __h__: number, __ldh: number, __wr: number, __wi: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __mm: number, __m: number, __work: number, __ifaill: number, __ifailr: number, __info: number): number;

declare function dhseqr_(__job: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __h__: number, __ldh: number, __wr: number, __wi: number, __z__: number, __ldz: number, __work: number, __lwork: number, __info: number): number;

declare function disnan_(__din: number): number;

declare function dlabad_(__small: number, __large: number): number;

declare function dlabrd_(__m: number, __n: number, __nb: number, __a: number, __lda: number, __d__: number, __e: number, __tauq: number, __taup: number, __x: number, __ldx: number, __y: number, __ldy: number): number;

declare function dlacn2_(__n: number, __v: number, __x: number, __isgn: number, __est: number, __kase: number, __isave: number): number;

declare function dlacon_(__n: number, __v: number, __x: number, __isgn: number, __est: number, __kase: number): number;

declare function dlacpy_(__uplo: string | any, __m: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number): number;

declare function dladiv_(__a: number, __b: number, __c__: number, __d__: number, __p: number, __q: number): number;

declare function dlae2_(__a: number, __b: number, __c__: number, __rt1: number, __rt2: number): number;

declare function dlaebz_(__ijob: number, __nitmax: number, __n: number, __mmax: number, __minp: number, __nbmin: number, __abstol: number, __reltol: number, __pivmin: number, __d__: number, __e: number, __e2: number, __nval: number, __ab: number, __c__: number, __mout: number, __nab: number, __work: number, __iwork: number, __info: number): number;

declare function dlaed0_(__icompq: number, __qsiz: number, __n: number, __d__: number, __e: number, __q: number, __ldq: number, __qstore: number, __ldqs: number, __work: number, __iwork: number, __info: number): number;

declare function dlaed1_(__n: number, __d__: number, __q: number, __ldq: number, __indxq: number, __rho: number, __cutpnt: number, __work: number, __iwork: number, __info: number): number;

declare function dlaed2_(__k: number, __n: number, __n1: number, __d__: number, __q: number, __ldq: number, __indxq: number, __rho: number, __z__: number, __dlamda: number, __w: number, __q2: number, __indx: number, __indxc: number, __indxp: number, __coltyp: number, __info: number): number;

declare function dlaed3_(__k: number, __n: number, __n1: number, __d__: number, __q: number, __ldq: number, __rho: number, __dlamda: number, __q2: number, __indx: number, __ctot: number, __w: number, __s: number, __info: number): number;

declare function dlaed4_(__n: number, __i__: number, __d__: number, __z__: number, __delta: number, __rho: number, __dlam: number, __info: number): number;

declare function dlaed5_(__i__: number, __d__: number, __z__: number, __delta: number, __rho: number, __dlam: number): number;

declare function dlaed6_(__kniter: number, __orgati: number, __rho: number, __d__: number, __z__: number, __finit: number, __tau: number, __info: number): number;

declare function dlaed7_(__icompq: number, __n: number, __qsiz: number, __tlvls: number, __curlvl: number, __curpbm: number, __d__: number, __q: number, __ldq: number, __indxq: number, __rho: number, __cutpnt: number, __qstore: number, __qptr: number, __prmptr: number, __perm: number, __givptr: number, __givcol: number, __givnum: number, __work: number, __iwork: number, __info: number): number;

declare function dlaed8_(__icompq: number, __k: number, __n: number, __qsiz: number, __d__: number, __q: number, __ldq: number, __indxq: number, __rho: number, __cutpnt: number, __z__: number, __dlamda: number, __q2: number, __ldq2: number, __w: number, __perm: number, __givptr: number, __givcol: number, __givnum: number, __indxp: number, __indx: number, __info: number): number;

declare function dlaed9_(__k: number, __kstart: number, __kstop: number, __n: number, __d__: number, __q: number, __ldq: number, __rho: number, __dlamda: number, __w: number, __s: number, __lds: number, __info: number): number;

declare function dlaeda_(__n: number, __tlvls: number, __curlvl: number, __curpbm: number, __prmptr: number, __perm: number, __givptr: number, __givcol: number, __givnum: number, __q: number, __qptr: number, __z__: number, __ztemp: number, __info: number): number;

declare function dlaein_(__rightv: number, __noinit: number, __n: number, __h__: number, __ldh: number, __wr: number, __wi: number, __vr: number, __vi: number, __b: number, __ldb: number, __work: number, __eps3: number, __smlnum: number, __bignum: number, __info: number): number;

declare function dlaev2_(__a: number, __b: number, __c__: number, __rt1: number, __rt2: number, __cs1: number, __sn1: number): number;

declare function dlaexc_(__wantq: number, __n: number, __t: number, __ldt: number, __q: number, __ldq: number, __j1: number, __n1: number, __n2: number, __work: number, __info: number): number;

declare function dlag2_(__a: number, __lda: number, __b: number, __ldb: number, __safmin: number, __scale1: number, __scale2: number, __wr1: number, __wr2: number, __wi: number): number;

declare function dlag2s_(__m: number, __n: number, __a: number, __lda: number, __sa: number, __ldsa: number, __info: number): number;

declare function dlags2_(__upper: number, __a1: number, __a2: number, __a3: number, __b1: number, __b2: number, __b3: number, __csu: number, __snu: number, __csv: number, __snv: number, __csq: number, __snq: number): number;

declare function dlagtf_(__n: number, __a: number, __lambda: number, __b: number, __c__: number, __tol: number, __d__: number, __in: number, __info: number): number;

declare function dlagtm_(__trans: string | any, __n: number, __nrhs: number, __alpha: number, __dl: number, __d__: number, __du: number, __x: number, __ldx: number, __beta: number, __b: number, __ldb: number): number;

declare function dlagts_(__job: number, __n: number, __a: number, __b: number, __c__: number, __d__: number, __in: number, __y: number, __tol: number, __info: number): number;

declare function dlagv2_(__a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __csl: number, __snl: number, __csr: number, __snr: number): number;

declare function dlahqr_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: number, __ldh: number, __wr: number, __wi: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __info: number): number;

declare function dlahr2_(__n: number, __k: number, __nb: number, __a: number, __lda: number, __tau: number, __t: number, __ldt: number, __y: number, __ldy: number): number;

declare function dlahrd_(__n: number, __k: number, __nb: number, __a: number, __lda: number, __tau: number, __t: number, __ldt: number, __y: number, __ldy: number): number;

declare function dlaic1_(__job: number, __j: number, __x: number, __sest: number, __w: number, __gamma: number, __sestpr: number, __s: number, __c__: number): number;

declare function dlaisnan_(__din1: number, __din2: number): number;

declare function dlaln2_(__ltrans: number, __na: number, __nw: number, __smin: number, __ca: number, __a: number, __lda: number, __d1: number, __d2: number, __b: number, __ldb: number, __wr: number, __wi: number, __x: number, __ldx: number, __scale: number, __xnorm: number, __info: number): number;

declare function dlals0_(__icompq: number, __nl: number, __nr: number, __sqre: number, __nrhs: number, __b: number, __ldb: number, __bx: number, __ldbx: number, __perm: number, __givptr: number, __givcol: number, __ldgcol: number, __givnum: number, __ldgnum: number, __poles: number, __difl: number, __difr: number, __z__: number, __k: number, __c__: number, __s: number, __work: number, __info: number): number;

declare function dlalsa_(__icompq: number, __smlsiz: number, __n: number, __nrhs: number, __b: number, __ldb: number, __bx: number, __ldbx: number, __u: number, __ldu: number, __vt: number, __k: number, __difl: number, __difr: number, __z__: number, __poles: number, __givptr: number, __givcol: number, __ldgcol: number, __perm: number, __givnum: number, __c__: number, __s: number, __work: number, __iwork: number, __info: number): number;

declare function dlalsd_(__uplo: string | any, __smlsiz: number, __n: number, __nrhs: number, __d__: number, __e: number, __b: number, __ldb: number, __rcond: number, __rank: number, __work: number, __iwork: number, __info: number): number;

declare function dlamc1_(__beta: number, __t: number, __rnd: number, __ieee1: number): number;

declare function dlamc1_Function(__beta: number, __t: number, __rnd: number, __ieee1: number): number;

declare function dlamc2_(__beta: number, __t: number, __rnd: number, __eps: number, __emin: number, __rmin: number, __emax: number, __rmax: number): number;

declare function dlamc3_(__a: number, __b: number): number;

declare function dlamc4_(__emin: number, __start: number, __base: number): number;

declare function dlamc5_(__beta: number, __p: number, __emin: number, __ieee: number, __emax: number, __rmax: number): number;

declare function dlamch_(__cmach: string | any): number;

declare function dlamrg_(__n1: number, __n2: number, __a: number, __dtrd1: number, __dtrd2: number, __index: number): number;

declare function dlaneg_(__n: number, __d__: number, __lld: number, __sigma: number, __pivmin: number, __r__: number): number;

declare function dlangb_(__norm: string | any, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __work: number): number;

declare function dlange_(__norm: string | any, __m: number, __n: number, __a: number, __lda: number, __work: number): number;

declare function dlangt_(__norm: string | any, __n: number, __dl: number, __d__: number, __du: number): number;

declare function dlanhs_(__norm: string | any, __n: number, __a: number, __lda: number, __work: number): number;

declare function dlansb_(__norm: string | any, __uplo: string | any, __n: number, __k: number, __ab: number, __ldab: number, __work: number): number;

declare function dlansf_(__norm: string | any, __transr: string | any, __uplo: string | any, __n: number, __a: number, __work: number): number;

declare function dlansp_(__norm: string | any, __uplo: string | any, __n: number, __ap: number, __work: number): number;

declare function dlanst_(__norm: string | any, __n: number, __d__: number, __e: number): number;

declare function dlansy_(__norm: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __work: number): number;

declare function dlantb_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __k: number, __ab: number, __ldab: number, __work: number): number;

declare function dlantp_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __ap: number, __work: number): number;

declare function dlantr_(__norm: string | any, __uplo: string | any, __diag: string | any, __m: number, __n: number, __a: number, __lda: number, __work: number): number;

declare function dlanv2_(__a: number, __b: number, __c__: number, __d__: number, __rt1r: number, __rt1i: number, __rt2r: number, __rt2i: number, __cs: number, __sn: number): number;

declare function dlapll_(__n: number, __x: number, __incx: number, __y: number, __incy: number, __ssmin: number): number;

declare function dlapmt_(__forwrd: number, __m: number, __n: number, __x: number, __ldx: number, __k: number): number;

declare function dlapy2_(__x: number, __y: number): number;

declare function dlapy3_(__x: number, __y: number, __z__: number): number;

declare function dlaqgb_(__m: number, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __equed: string | any): number;

declare function dlaqge_(__m: number, __n: number, __a: number, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __equed: string | any): number;

declare function dlaqp2_(__m: number, __n: number, __offset: number, __a: number, __lda: number, __jpvt: number, __tau: number, __vn1: number, __vn2: number, __work: number): number;

declare function dlaqps_(__m: number, __n: number, __offset: number, __nb: number, __kb: number, __a: number, __lda: number, __jpvt: number, __tau: number, __vn1: number, __vn2: number, __auxv: number, __f: number, __ldf: number): number;

declare function dlaqr0_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: number, __ldh: number, __wr: number, __wi: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __work: number, __lwork: number, __info: number): number;

declare function dlaqr1_(__n: number, __h__: number, __ldh: number, __sr1: number, __si1: number, __sr2: number, __si2: number, __v: number): number;

declare function dlaqr2_(__wantt: number, __wantz: number, __n: number, __ktop: number, __kbot: number, __nw: number, __h__: number, __ldh: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __ns: number, __nd: number, __sr: number, __si: number, __v: number, __ldv: number, __nh: number, __t: number, __ldt: number, __nv: number, __wv: number, __ldwv: number, __work: number, __lwork: number): number;

declare function dlaqr3_(__wantt: number, __wantz: number, __n: number, __ktop: number, __kbot: number, __nw: number, __h__: number, __ldh: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __ns: number, __nd: number, __sr: number, __si: number, __v: number, __ldv: number, __nh: number, __t: number, __ldt: number, __nv: number, __wv: number, __ldwv: number, __work: number, __lwork: number): number;

declare function dlaqr4_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: number, __ldh: number, __wr: number, __wi: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __work: number, __lwork: number, __info: number): number;

declare function dlaqr5_(__wantt: number, __wantz: number, __kacc22: number, __n: number, __ktop: number, __kbot: number, __nshfts: number, __sr: number, __si: number, __h__: number, __ldh: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __v: number, __ldv: number, __u: number, __ldu: number, __nv: number, __wv: number, __ldwv: number, __nh: number, __wh: number, __ldwh: number): number;

declare function dlaqsb_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function dlaqsp_(__uplo: string | any, __n: number, __ap: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function dlaqsy_(__uplo: string | any, __n: number, __a: number, __lda: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function dlaqtr_(__ltran: number, __l__CLPK_real: number, __n: number, __t: number, __ldt: number, __b: number, __w: number, __scale: number, __x: number, __work: number, __info: number): number;

declare function dlar1v_(__n: number, __b1: number, __bn: number, __lambda: number, __d__: number, __l: number, __ld: number, __lld: number, __pivmin: number, __gaptol: number, __z__: number, __wantnc: number, __negcnt: number, __ztz: number, __mingma: number, __r__: number, __isuppz: number, __nrminv: number, __resid: number, __rqcorr: number, __work: number): number;

declare function dlar2v_(__n: number, __x: number, __y: number, __z__: number, __incx: number, __c__: number, __s: number, __incc: number): number;

declare function dlarf_(__side: string | any, __m: number, __n: number, __v: number, __incv: number, __tau: number, __c__: number, __ldc: number, __work: number): number;

declare function dlarfb_(__side: string | any, __trans: string | any, __direct: string | any, __storev: string | any, __m: number, __n: number, __k: number, __v: number, __ldv: number, __t: number, __ldt: number, __c__: number, __ldc: number, __work: number, __ldwork: number): number;

declare function dlarfg_(__n: number, __alpha: number, __x: number, __incx: number, __tau: number): number;

declare function dlarfp_(__n: number, __alpha: number, __x: number, __incx: number, __tau: number): number;

declare function dlarft_(__direct: string | any, __storev: string | any, __n: number, __k: number, __v: number, __ldv: number, __tau: number, __t: number, __ldt: number): number;

declare function dlarfx_(__side: string | any, __m: number, __n: number, __v: number, __tau: number, __c__: number, __ldc: number, __work: number): number;

declare function dlargv_(__n: number, __x: number, __incx: number, __y: number, __incy: number, __c__: number, __incc: number): number;

declare function dlarnv_(__idist: number, __iseed: number, __n: number, __x: number): number;

declare function dlarra_(__n: number, __d__: number, __e: number, __e2: number, __spltol: number, __tnrm: number, __nsplit: number, __isplit: number, __info: number): number;

declare function dlarrb_(__n: number, __d__: number, __lld: number, __ifirst: number, __ilast: number, __rtol1: number, __rtol2: number, __offset: number, __w: number, __wgap: number, __werr: number, __work: number, __iwork: number, __pivmin: number, __spdiam: number, __twist: number, __info: number): number;

declare function dlarrc_(__jobt: string | any, __n: number, __vl: number, __vu: number, __d__: number, __e: number, __pivmin: number, __eigcnt: number, __lcnt: number, __rcnt: number, __info: number): number;

declare function dlarrd_(__range: string | any, __order: string | any, __n: number, __vl: number, __vu: number, __il: number, __iu: number, __gers: number, __reltol: number, __d__: number, __e: number, __e2: number, __pivmin: number, __nsplit: number, __isplit: number, __m: number, __w: number, __werr: number, __wl: number, __wu: number, __iblock: number, __indexw: number, __work: number, __iwork: number, __info: number): number;

declare function dlarre_(__range: string | any, __n: number, __vl: number, __vu: number, __il: number, __iu: number, __d__: number, __e: number, __e2: number, __rtol1: number, __rtol2: number, __spltol: number, __nsplit: number, __isplit: number, __m: number, __w: number, __werr: number, __wgap: number, __iblock: number, __indexw: number, __gers: number, __pivmin: number, __work: number, __iwork: number, __info: number): number;

declare function dlarrf_(__n: number, __d__: number, __l: number, __ld: number, __clstrt: number, __clend: number, __w: number, __wgap: number, __werr: number, __spdiam: number, __clgapl: number, __clgapr: number, __pivmin: number, __sigma: number, __dplus: number, __lplus: number, __work: number, __info: number): number;

declare function dlarrj_(__n: number, __d__: number, __e2: number, __ifirst: number, __ilast: number, __rtol: number, __offset: number, __w: number, __werr: number, __work: number, __iwork: number, __pivmin: number, __spdiam: number, __info: number): number;

declare function dlarrk_(__n: number, __iw: number, __gl: number, __gu: number, __d__: number, __e2: number, __pivmin: number, __reltol: number, __w: number, __werr: number, __info: number): number;

declare function dlarrr_(__n: number, __d__: number, __e: number, __info: number): number;

declare function dlarrv_(__n: number, __vl: number, __vu: number, __d__: number, __l: number, __pivmin: number, __isplit: number, __m: number, __dol: number, __dou: number, __minrgp: number, __rtol1: number, __rtol2: number, __w: number, __werr: number, __wgap: number, __iblock: number, __indexw: number, __gers: number, __z__: number, __ldz: number, __isuppz: number, __work: number, __iwork: number, __info: number): number;

declare function dlarscl2_(__m: number, __n: number, __d__: number, __x: number, __ldx: number): number;

declare function dlartg_(__f: number, __g: number, __cs: number, __sn: number, __r__: number): number;

declare function dlartv_(__n: number, __x: number, __incx: number, __y: number, __incy: number, __c__: number, __s: number, __incc: number): number;

declare function dlaruv_(__iseed: number, __n: number, __x: number): number;

declare function dlarz_(__side: string | any, __m: number, __n: number, __l: number, __v: number, __incv: number, __tau: number, __c__: number, __ldc: number, __work: number): number;

declare function dlarzb_(__side: string | any, __trans: string | any, __direct: string | any, __storev: string | any, __m: number, __n: number, __k: number, __l: number, __v: number, __ldv: number, __t: number, __ldt: number, __c__: number, __ldc: number, __work: number, __ldwork: number): number;

declare function dlarzt_(__direct: string | any, __storev: string | any, __n: number, __k: number, __v: number, __ldv: number, __tau: number, __t: number, __ldt: number): number;

declare function dlas2_(__f: number, __g: number, __h__: number, __ssmin: number, __ssmax: number): number;

declare function dlascl2_(__m: number, __n: number, __d__: number, __x: number, __ldx: number): number;

declare function dlascl_(__type__: string | any, __kl: number, __ku: number, __cfrom: number, __cto: number, __m: number, __n: number, __a: number, __lda: number, __info: number): number;

declare function dlasd0_(__n: number, __sqre: number, __d__: number, __e: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __smlsiz: number, __iwork: number, __work: number, __info: number): number;

declare function dlasd1_(__nl: number, __nr: number, __sqre: number, __d__: number, __alpha: number, __beta: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __idxq: number, __iwork: number, __work: number, __info: number): number;

declare function dlasd2_(__nl: number, __nr: number, __sqre: number, __k: number, __d__: number, __z__: number, __alpha: number, __beta: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __dsigma: number, __u2: number, __ldu2: number, __vt2: number, __ldvt2: number, __idxp: number, __idx: number, __idxc: number, __idxq: number, __coltyp: number, __info: number): number;

declare function dlasd3_(__nl: number, __nr: number, __sqre: number, __k: number, __d__: number, __q: number, __ldq: number, __dsigma: number, __u: number, __ldu: number, __u2: number, __ldu2: number, __vt: number, __ldvt: number, __vt2: number, __ldvt2: number, __idxc: number, __ctot: number, __z__: number, __info: number): number;

declare function dlasd4_(__n: number, __i__: number, __d__: number, __z__: number, __delta: number, __rho: number, __sigma: number, __work: number, __info: number): number;

declare function dlasd5_(__i__: number, __d__: number, __z__: number, __delta: number, __rho: number, __dsigma: number, __work: number): number;

declare function dlasd6_(__icompq: number, __nl: number, __nr: number, __sqre: number, __d__: number, __vf: number, __vl: number, __alpha: number, __beta: number, __idxq: number, __perm: number, __givptr: number, __givcol: number, __ldgcol: number, __givnum: number, __ldgnum: number, __poles: number, __difl: number, __difr: number, __z__: number, __k: number, __c__: number, __s: number, __work: number, __iwork: number, __info: number): number;

declare function dlasd7_(__icompq: number, __nl: number, __nr: number, __sqre: number, __k: number, __d__: number, __z__: number, __zw: number, __vf: number, __vfw: number, __vl: number, __vlw: number, __alpha: number, __beta: number, __dsigma: number, __idx: number, __idxp: number, __idxq: number, __perm: number, __givptr: number, __givcol: number, __ldgcol: number, __givnum: number, __ldgnum: number, __c__: number, __s: number, __info: number): number;

declare function dlasd8_(__icompq: number, __k: number, __d__: number, __z__: number, __vf: number, __vl: number, __difl: number, __difr: number, __lddifr: number, __dsigma: number, __work: number, __info: number): number;

declare function dlasda_(__icompq: number, __smlsiz: number, __n: number, __sqre: number, __d__: number, __e: number, __u: number, __ldu: number, __vt: number, __k: number, __difl: number, __difr: number, __z__: number, __poles: number, __givptr: number, __givcol: number, __ldgcol: number, __perm: number, __givnum: number, __c__: number, __s: number, __work: number, __iwork: number, __info: number): number;

declare function dlasdq_(__uplo: string | any, __sqre: number, __n: number, __ncvt: number, __nru: number, __ncc: number, __d__: number, __e: number, __vt: number, __ldvt: number, __u: number, __ldu: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function dlasdt_(__n: number, __lvl: number, __nd: number, __inode: number, __ndiml: number, __ndimr: number, __msub: number): number;

declare function dlaset_(__uplo: string | any, __m: number, __n: number, __alpha: number, __beta: number, __a: number, __lda: number): number;

declare function dlasq1_(__n: number, __d__: number, __e: number, __work: number, __info: number): number;

declare function dlasq2_(__n: number, __z__: number, __info: number): number;

declare function dlasq3_(__i0: number, __n0: number, __z__: number, __pp: number, __dmin__: number, __sigma: number, __desig: number, __qmax: number, __nfail: number, __iter: number, __ndiv: number, __ieee: number, __ttype: number, __dmin1: number, __dmin2: number, __dn: number, __dn1: number, __dn2: number, __g: number, __tau: number): number;

declare function dlasq4_(__i0: number, __n0: number, __z__: number, __pp: number, __n0in: number, __dmin__: number, __dmin1: number, __dmin2: number, __dn: number, __dn1: number, __dn2: number, __tau: number, __ttype: number, __g: number): number;

declare function dlasq5_(__i0: number, __n0: number, __z__: number, __pp: number, __tau: number, __dmin__: number, __dmin1: number, __dmin2: number, __dn: number, __dnm1: number, __dnm2: number, __ieee: number): number;

declare function dlasq6_(__i0: number, __n0: number, __z__: number, __pp: number, __dmin__: number, __dmin1: number, __dmin2: number, __dn: number, __dnm1: number, __dnm2: number): number;

declare function dlasr_(__side: string | any, __pivot: string | any, __direct: string | any, __m: number, __n: number, __c__: number, __s: number, __a: number, __lda: number): number;

declare function dlasrt_(__id: string | any, __n: number, __d__: number, __info: number): number;

declare function dlassq_(__n: number, __x: number, __incx: number, __scale: number, __sumsq: number): number;

declare function dlasv2_(__f: number, __g: number, __h__: number, __ssmin: number, __ssmax: number, __snr: number, __csr: number, __snl: number, __csl: number): number;

declare function dlaswp_(__n: number, __a: number, __lda: number, __k1: number, __k2: number, __ipiv: number, __incx: number): number;

declare function dlasy2_(__ltranl: number, __ltranr: number, __isgn: number, __n1: number, __n2: number, __tl: number, __ldtl: number, __tr: number, __ldtr: number, __b: number, __ldb: number, __scale: number, __x: number, __ldx: number, __xnorm: number, __info: number): number;

declare function dlasyf_(__uplo: string | any, __n: number, __nb: number, __kb: number, __a: number, __lda: number, __ipiv: number, __w: number, __ldw: number, __info: number): number;

declare function dlat2s_(__uplo: string | any, __n: number, __a: number, __lda: number, __sa: number, __ldsa: number, __info: number): number;

declare function dlatbs_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __x: number, __scale: number, __cnorm: number, __info: number): number;

declare function dlatdf_(__ijob: number, __n: number, __z__: number, __ldz: number, __rhs: number, __rdsum: number, __rdscal: number, __ipiv: number, __jpiv: number): number;

declare function dlatps_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __ap: number, __x: number, __scale: number, __cnorm: number, __info: number): number;

declare function dlatrd_(__uplo: string | any, __n: number, __nb: number, __a: number, __lda: number, __e: number, __tau: number, __w: number, __ldw: number): number;

declare function dlatrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __a: number, __lda: number, __x: number, __scale: number, __cnorm: number, __info: number): number;

declare function dlatrz_(__m: number, __n: number, __l: number, __a: number, __lda: number, __tau: number, __work: number): number;

declare function dlatzm_(__side: string | any, __m: number, __n: number, __v: number, __incv: number, __tau: number, __c1: number, __c2: number, __ldc: number, __work: number): number;

declare function dlauu2_(__uplo: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function dlauum_(__uplo: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function dopgtr_(__uplo: string | any, __n: number, __ap: number, __tau: number, __q: number, __ldq: number, __work: number, __info: number): number;

declare function dopmtr_(__side: string | any, __uplo: string | any, __trans: string | any, __m: number, __n: number, __ap: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function dorg2l_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function dorg2r_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function dorgbr_(__vect: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dorghr_(__n: number, __ilo: number, __ihi: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dorgl2_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function dorglq_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dorgql_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dorgqr_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dorgr2_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function dorgrq_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dorgtr_(__uplo: string | any, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dorm2l_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function dorm2r_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function dormbr_(__vect: string | any, __side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function dormhr_(__side: string | any, __trans: string | any, __m: number, __n: number, __ilo: number, __ihi: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function dorml2_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function dormlq_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function dormql_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function dormqr_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function dormr2_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function dormr3_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __l: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function dormrq_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function dormrz_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __l: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function dormtr_(__side: string | any, __uplo: string | any, __trans: string | any, __m: number, __n: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function dpbcon_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dpbequ_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function dpbrfs_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __afb: number, __ldafb: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dpbstf_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __info: number): number;

declare function dpbsv_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __b: number, __ldb: number, __info: number): number;

declare function dpbsvx_(__fact: string | any, __uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __afb: number, __ldafb: number, __equed: string | any, __s: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dpbtf2_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __info: number): number;

declare function dpbtrf_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __info: number): number;

declare function dpbtrs_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __b: number, __ldb: number, __info: number): number;

declare function dpftrf_(__transr: string | any, __uplo: string | any, __n: number, __a: number, __info: number): number;

declare function dpftri_(__transr: string | any, __uplo: string | any, __n: number, __a: number, __info: number): number;

declare function dpftrs_(__transr: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: number, __b: number, __ldb: number, __info: number): number;

declare function dpocon_(__uplo: string | any, __n: number, __a: number, __lda: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dpoequ_(__n: number, __a: number, __lda: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function dpoequb_(__n: number, __a: number, __lda: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function dporfs_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dposv_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __info: number): number;

declare function dposvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __equed: string | any, __s: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dpotf2_(__uplo: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function dpotrf_(__uplo: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function dpotri_(__uplo: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function dpotrs_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __info: number): number;

declare function dppcon_(__uplo: string | any, __n: number, __ap: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dppequ_(__uplo: string | any, __n: number, __ap: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function dpprfs_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __afp: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dppsv_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __b: number, __ldb: number, __info: number): number;

declare function dppsvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __ap: number, __afp: number, __equed: string | any, __s: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dpptrf_(__uplo: string | any, __n: number, __ap: number, __info: number): number;

declare function dpptri_(__uplo: string | any, __n: number, __ap: number, __info: number): number;

declare function dpptrs_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __b: number, __ldb: number, __info: number): number;

declare function dpstf2_(__uplo: string | any, __n: number, __a: number, __lda: number, __piv: number, __rank: number, __tol: number, __work: number, __info: number): number;

declare function dpstrf_(__uplo: string | any, __n: number, __a: number, __lda: number, __piv: number, __rank: number, __tol: number, __work: number, __info: number): number;

declare function dptcon_(__n: number, __d__: number, __e: number, __anorm: number, __rcond: number, __work: number, __info: number): number;

declare function dpteqr_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function dptrfs_(__n: number, __nrhs: number, __d__: number, __e: number, __df: number, __ef: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __info: number): number;

declare function dptsv_(__n: number, __nrhs: number, __d__: number, __e: number, __b: number, __ldb: number, __info: number): number;

declare function dptsvx_(__fact: string | any, __n: number, __nrhs: number, __d__: number, __e: number, __df: number, __ef: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __info: number): number;

declare function dpttrf_(__n: number, __d__: number, __e: number, __info: number): number;

declare function dpttrs_(__n: number, __nrhs: number, __d__: number, __e: number, __b: number, __ldb: number, __info: number): number;

declare function dptts2_(__n: number, __nrhs: number, __d__: number, __e: number, __b: number, __ldb: number): number;

declare function drscl_(__n: number, __sa: number, __sx: number, __incx: number): number;

declare function dsbev_(__jobz: string | any, __uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __w: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function dsbevd_(__jobz: string | any, __uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dsbevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __q: number, __ldq: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function dsbgst_(__vect: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: number, __ldab: number, __bb: number, __ldbb: number, __x: number, __ldx: number, __work: number, __info: number): number;

declare function dsbgv_(__jobz: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: number, __ldab: number, __bb: number, __ldbb: number, __w: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function dsbgvd_(__jobz: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: number, __ldab: number, __bb: number, __ldbb: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dsbgvx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: number, __ldab: number, __bb: number, __ldbb: number, __q: number, __ldq: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function dsbtrd_(__vect: string | any, __uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __d__: number, __e: number, __q: number, __ldq: number, __work: number, __info: number): number;

declare function dsfrk_(__transr: string | any, __uplo: string | any, __trans: string | any, __n: number, __k: number, __alpha: number, __a: number, __lda: number, __beta: number, __c__: number): number;

declare function dsgesv_(__n: number, __nrhs: number, __a: number, __lda: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __work: number, __swork: number, __iter: number, __info: number): number;

declare function dspcon_(__uplo: string | any, __n: number, __ap: number, __ipiv: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dspev_(__jobz: string | any, __uplo: string | any, __n: number, __ap: number, __w: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function dspevd_(__jobz: string | any, __uplo: string | any, __n: number, __ap: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dspevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ap: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function dspgst_(__itype: number, __uplo: string | any, __n: number, __ap: number, __bp: number, __info: number): number;

declare function dspgv_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __ap: number, __bp: number, __w: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function dspgvd_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __ap: number, __bp: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dspgvx_(__itype: number, __jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ap: number, __bp: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function dsposv_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __x: number, __ldx: number, __work: number, __swork: number, __iter: number, __info: number): number;

declare function dsprfs_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __afp: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dspsv_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function dspsvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __ap: number, __afp: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dsptrd_(__uplo: string | any, __n: number, __ap: number, __d__: number, __e: number, __tau: number, __info: number): number;

declare function dsptrf_(__uplo: string | any, __n: number, __ap: number, __ipiv: number, __info: number): number;

declare function dsptri_(__uplo: string | any, __n: number, __ap: number, __ipiv: number, __work: number, __info: number): number;

declare function dsptrs_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function dstebz_(__range: string | any, __order: string | any, __n: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __d__: number, __e: number, __m: number, __nsplit: number, __w: number, __iblock: number, __isplit: number, __work: number, __iwork: number, __info: number): number;

declare function dstedc_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dstegr_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __isuppz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dstein_(__n: number, __d__: number, __e: number, __m: number, __w: number, __iblock: number, __isplit: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function dstemr_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __m: number, __w: number, __z__: number, __ldz: number, __nzc: number, __isuppz: number, __tryrac: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dsteqr_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function dsterf_(__n: number, __d__: number, __e: number, __info: number): number;

declare function dstev_(__jobz: string | any, __n: number, __d__: number, __e: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function dstevd_(__jobz: string | any, __n: number, __d__: number, __e: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dstevr_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __isuppz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dstevx_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function dsycon_(__uplo: string | any, __n: number, __a: number, __lda: number, __ipiv: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dsyequb_(__uplo: string | any, __n: number, __a: number, __lda: number, __s: number, __scond: number, __amax: number, __work: number, __info: number): number;

declare function dsyev_(__jobz: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __w: number, __work: number, __lwork: number, __info: number): number;

declare function dsyevd_(__jobz: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __w: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dsyevr_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __isuppz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dsyevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function dsygs2_(__itype: number, __uplo: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __info: number): number;

declare function dsygst_(__itype: number, __uplo: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __info: number): number;

declare function dsygv_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __w: number, __work: number, __lwork: number, __info: number): number;

declare function dsygvd_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __w: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dsygvx_(__itype: number, __jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function dsyrfs_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dsysv_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __ipiv: number, __b: number, __ldb: number, __work: number, __lwork: number, __info: number): number;

declare function dsysvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function dsytd2_(__uplo: string | any, __n: number, __a: number, __lda: number, __d__: number, __e: number, __tau: number, __info: number): number;

declare function dsytf2_(__uplo: string | any, __n: number, __a: number, __lda: number, __ipiv: number, __info: number): number;

declare function dsytrd_(__uplo: string | any, __n: number, __a: number, __lda: number, __d__: number, __e: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dsytrf_(__uplo: string | any, __n: number, __a: number, __lda: number, __ipiv: number, __work: number, __lwork: number, __info: number): number;

declare function dsytri_(__uplo: string | any, __n: number, __a: number, __lda: number, __ipiv: number, __work: number, __info: number): number;

declare function dsytrs_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function dtbcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dtbrfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dtbtrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __b: number, __ldb: number, __info: number): number;

declare function dtfsm_(__transr: string | any, __side: string | any, __uplo: string | any, __trans: string | any, __diag: string | any, __m: number, __n: number, __alpha: number, __a: number, __b: number, __ldb: number): number;

declare function dtftri_(__transr: string | any, __uplo: string | any, __diag: string | any, __n: number, __a: number, __info: number): number;

declare function dtfttp_(__transr: string | any, __uplo: string | any, __n: number, __arf: number, __ap: number, __info: number): number;

declare function dtfttr_(__transr: string | any, __uplo: string | any, __n: number, __arf: number, __a: number, __lda: number, __info: number): number;

declare function dtgevc_(__side: string | any, __howmny: string | any, __select: number, __n: number, __s: number, __lds: number, __p: number, __ldp: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __mm: number, __m: number, __work: number, __info: number): number;

declare function dtgex2_(__wantq: number, __wantz: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __q: number, __ldq: number, __z__: number, __ldz: number, __j1: number, __n1: number, __n2: number, __work: number, __lwork: number, __info: number): number;

declare function dtgexc_(__wantq: number, __wantz: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __q: number, __ldq: number, __z__: number, __ldz: number, __ifst: number, __ilst: number, __work: number, __lwork: number, __info: number): number;

declare function dtgsen_(__ijob: number, __wantq: number, __wantz: number, __select: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __q: number, __ldq: number, __z__: number, __ldz: number, __m: number, __pl: number, __pr: number, __dif: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dtgsja_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __p: number, __n: number, __k: number, __l: number, __a: number, __lda: number, __b: number, __ldb: number, __tola: number, __tolb: number, __alpha: number, __beta: number, __u: number, __ldu: number, __v: number, __ldv: number, __q: number, __ldq: number, __work: number, __ncycle: number, __info: number): number;

declare function dtgsna_(__job: string | any, __howmny: string | any, __select: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __s: number, __dif: number, __mm: number, __m: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function dtgsy2_(__trans: string | any, __ijob: number, __m: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __c__: number, __ldc: number, __d__: number, __ldd: number, __e: number, __lde: number, __f: number, __ldf: number, __scale: number, __rdsum: number, __rdscal: number, __iwork: number, __pq: number, __info: number): number;

declare function dtgsyl_(__trans: string | any, __ijob: number, __m: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __c__: number, __ldc: number, __d__: number, __ldd: number, __e: number, __lde: number, __f: number, __ldf: number, __scale: number, __dif: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function dtpcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __ap: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dtprfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __ap: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dtptri_(__uplo: string | any, __diag: string | any, __n: number, __ap: number, __info: number): number;

declare function dtptrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __ap: number, __b: number, __ldb: number, __info: number): number;

declare function dtpttf_(__transr: string | any, __uplo: string | any, __n: number, __ap: number, __arf: number, __info: number): number;

declare function dtpttr_(__uplo: string | any, __n: number, __ap: number, __a: number, __lda: number, __info: number): number;

declare function dtrcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __a: number, __lda: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function dtrevc_(__side: string | any, __howmny: string | any, __select: number, __n: number, __t: number, __ldt: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __mm: number, __m: number, __work: number, __info: number): number;

declare function dtrexc_(__compq: string | any, __n: number, __t: number, __ldt: number, __q: number, __ldq: number, __ifst: number, __ilst: number, __work: number, __info: number): number;

declare function dtrrfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function dtrsen_(__job: string | any, __compq: string | any, __select: number, __n: number, __t: number, __ldt: number, __q: number, __ldq: number, __wr: number, __wi: number, __m: number, __s: number, __sep: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function dtrsna_(__job: string | any, __howmny: string | any, __select: number, __n: number, __t: number, __ldt: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __s: number, __sep: number, __mm: number, __m: number, __work: number, __ldwork: number, __iwork: number, __info: number): number;

declare function dtrsyl_(__trana: string | any, __tranb: string | any, __isgn: number, __m: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __c__: number, __ldc: number, __scale: number, __info: number): number;

declare function dtrti2_(__uplo: string | any, __diag: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function dtrtri_(__uplo: string | any, __diag: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function dtrtrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __info: number): number;

declare function dtrttf_(__transr: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __arf: number, __info: number): number;

declare function dtrttp_(__uplo: string | any, __n: number, __a: number, __lda: number, __ap: number, __info: number): number;

declare function dtzrqf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __info: number): number;

declare function dtzrzf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function dzsum1_(__n: number, __cx: __CLPK_doublecomplex, __incx: number): number;

declare function icmax1_(__n: number, __cx: __CLPK_complex, __incx: number): number;

declare function ieeeck_(__ispec: number, __zero: number, __one: number): number;

declare function ilaclc_(__m: number, __n: number, __a: __CLPK_complex, __lda: number): number;

declare function ilaclr_(__m: number, __n: number, __a: __CLPK_complex, __lda: number): number;

declare function iladiag_(__diag: string | any): number;

declare function iladlc_(__m: number, __n: number, __a: number, __lda: number): number;

declare function iladlr_(__m: number, __n: number, __a: number, __lda: number): number;

declare function ilaenv_(__ispec: number, __name__: string | any, __opts: string | any, __n1: number, __n2: number, __n3: number, __n4: number): number;

declare function ilaenv_Function(__ispec: number, __name__: string | any, __opts: string | any, __n1: number, __n2: number, __n3: number, __n4: number): number;

declare function ilaprec_(__prec: string | any): number;

declare function ilaslc_(__m: number, __n: number, __a: number, __lda: number): number;

declare function ilaslr_(__m: number, __n: number, __a: number, __lda: number): number;

declare function ilatrans_(__trans: string | any): number;

declare function ilauplo_(__uplo: string | any): number;

declare function ilaver_(__vers_major__: number, __vers_minor__: number, __vers_patch__: number): number;

declare function ilaver_Function(__vers_major__: number, __vers_minor__: number, __vers_patch__: number): number;

declare function ilazlc_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number): number;

declare function ilazlr_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number): number;

declare function iparmq_(__ispec: number, __name__: string | any, __opts: string | any, __n: number, __ilo: number, __ihi: number, __lwork: number): number;

declare function izmax1_(__n: number, __cx: __CLPK_doublecomplex, __incx: number): number;

declare const kFFTDirection_Forward: number;

declare const kFFTDirection_Inverse: number;

declare const kFFTRadix2: number;

declare const kFFTRadix3: number;

declare const kFFTRadix5: number;

declare const kRotate0DegreesClockwise: number;

declare const kRotate0DegreesCounterClockwise: number;

declare const kRotate180DegreesClockwise: number;

declare const kRotate180DegreesCounterClockwise: number;

declare const kRotate270DegreesClockwise: number;

declare const kRotate270DegreesCounterClockwise: number;

declare const kRotate90DegreesClockwise: number;

declare const kRotate90DegreesCounterClockwise: number;

declare const kvImageBackgroundColorFill: number;

declare const kvImageBufferSizeMismatch: number;

declare const kvImageBufferTypeCode_Alpha: number;

declare const kvImageBufferTypeCode_CGFormat: number;

declare const kvImageBufferTypeCode_CMYK_Black: number;

declare const kvImageBufferTypeCode_CMYK_Cyan: number;

declare const kvImageBufferTypeCode_CMYK_Magenta: number;

declare const kvImageBufferTypeCode_CMYK_Yellow: number;

declare const kvImageBufferTypeCode_CVPixelBuffer_YCbCr: number;

declare const kvImageBufferTypeCode_Cb: number;

declare const kvImageBufferTypeCode_Chroma: number;

declare const kvImageBufferTypeCode_Chunky: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel1: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel10: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel11: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel12: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel13: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel14: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel15: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel16: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel2: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel3: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel4: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel5: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel6: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel7: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel8: number;

declare const kvImageBufferTypeCode_ColorSpaceChannel9: number;

declare const kvImageBufferTypeCode_Cr: number;

declare const kvImageBufferTypeCode_EndOfList: number;

declare const kvImageBufferTypeCode_Indexed: number;

declare const kvImageBufferTypeCode_LAB_A: number;

declare const kvImageBufferTypeCode_LAB_B: number;

declare const kvImageBufferTypeCode_LAB_L: number;

declare const kvImageBufferTypeCode_Luminance: number;

declare const kvImageBufferTypeCode_Monochrome: number;

declare const kvImageBufferTypeCode_RGB_Blue: number;

declare const kvImageBufferTypeCode_RGB_Green: number;

declare const kvImageBufferTypeCode_RGB_Red: number;

declare const kvImageBufferTypeCode_UniqueFormatCount: number;

declare const kvImageBufferTypeCode_XYZ_X: number;

declare const kvImageBufferTypeCode_XYZ_Y: number;

declare const kvImageBufferTypeCode_XYZ_Z: number;

declare const kvImageCVImageFormat_AlphaIsOneHint: number;

declare const kvImageCVImageFormat_ChromaSiting: number;

declare const kvImageCVImageFormat_ColorSpace: number;

declare const kvImageCVImageFormat_ConversionMatrix: number;

declare const kvImageCVImageFormat_NoError: number;

declare const kvImageCVImageFormat_VideoChannelDescription: number;

declare const kvImageColorSyncIsAbsent: number;

declare const kvImageConvert_DitherAtkinson: number;

declare const kvImageConvert_DitherFloydSteinberg: number;

declare const kvImageConvert_DitherNone: number;

declare const kvImageConvert_DitherOrdered: number;

declare const kvImageConvert_DitherOrderedReproducible: number;

declare const kvImageConvert_OrderedGaussianBlue: number;

declare const kvImageConvert_OrderedNoiseShapeMask: number;

declare const kvImageConvert_OrderedUniformBlue: number;

declare const kvImageCopyInPlace: number;

declare const kvImageCoreVideoIsAbsent: number;

declare var kvImageDecodeArray_16Q12Format: number;

declare const kvImageDoNotClamp: number;

declare const kvImageDoNotTile: number;

declare const kvImageEdgeExtend: number;

declare const kvImageGamma_11_over_5_half_precision: number;

declare const kvImageGamma_11_over_9_half_precision: number;

declare const kvImageGamma_5_over_11_half_precision: number;

declare const kvImageGamma_5_over_9_half_precision: number;

declare const kvImageGamma_9_over_11_half_precision: number;

declare const kvImageGamma_9_over_5_half_precision: number;

declare const kvImageGamma_BT709_forward_half_precision: number;

declare const kvImageGamma_BT709_reverse_half_precision: number;

declare const kvImageGamma_UseGammaValue: number;

declare const kvImageGamma_UseGammaValue_half_precision: number;

declare const kvImageGamma_sRGB_forward_half_precision: number;

declare const kvImageGamma_sRGB_reverse_half_precision: number;

declare const kvImageGetTempBufferSize: number;

declare const kvImageHDRContent: number;

declare const kvImageHighQualityResampling: number;

declare const kvImageInternalError: number;

declare const kvImageInvalidCVImageFormat: number;

declare const kvImageInvalidEdgeStyle: number;

declare const kvImageInvalidImageFormat: number;

declare const kvImageInvalidImageObject: number;

declare const kvImageInvalidKernelSize: number;

declare const kvImageInvalidOffset_X: number;

declare const kvImageInvalidOffset_Y: number;

declare const kvImageInvalidParameter: number;

declare const kvImageInvalidRowBytes: number;

declare const kvImageLeaveAlphaUnchanged: number;

declare const kvImageMatrixType_ARGBToYpCbCrMatrix: number;

declare const kvImageMatrixType_None: number;

declare const kvImageMemoryAllocationError: number;

declare const kvImageNoAllocate: number;

declare const kvImageNoError: number;

declare const kvImageNoFlags: number;

declare const kvImageNullPointerArgument: number;

declare const kvImageOutOfPlaceOperationRequired: number;

declare const kvImagePrintDiagnosticsToConsole: number;

declare const kvImageRoiLargerThanInputBuffer: number;

declare const kvImageTruncateKernel: number;

declare const kvImageUnknownFlagsBit: number;

declare const kvImageUnsupportedConversion: number;

declare var kvImage_ARGBToYpCbCrMatrix_ITU_R_601_4: vImage_ARGBToYpCbCrMatrix;

declare var kvImage_ARGBToYpCbCrMatrix_ITU_R_709_2: vImage_ARGBToYpCbCrMatrix;

declare const kvImage_PNG_FILTER_VALUE_AVG: number;

declare const kvImage_PNG_FILTER_VALUE_NONE: number;

declare const kvImage_PNG_FILTER_VALUE_PAETH: number;

declare const kvImage_PNG_FILTER_VALUE_SUB: number;

declare const kvImage_PNG_FILTER_VALUE_UP: number;

declare var kvImage_YpCbCrToARGBMatrix_ITU_R_601_4: vImage_YpCbCrToARGBMatrix;

declare var kvImage_YpCbCrToARGBMatrix_ITU_R_709_2: vImage_YpCbCrToARGBMatrix;

declare function lsamen_(__n: number, __ca: string | any, __cb: string | any): number;

enum quadrature_status {

	QUADRATURE_SUCCESS = 0,

	QUADRATURE_ERROR = -1,

	QUADRATURE_INVALID_ARG_ERROR = -2,

	QUADRATURE_ALLOC_ERROR = -3,

	QUADRATURE_INTERNAL_ERROR = -99,

	QUADRATURE_INTEGRATE_MAX_EVAL_ERROR = -101,

	QUADRATURE_INTEGRATE_BAD_BEHAVIOUR_ERROR = -102
}


declare function sbdsdc_(__uplo: string | any, __compq: string | any, __n: number, __d__: number, __e: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __q: number, __iq: number, __work: number, __iwork: number, __info: number): number;

declare function sbdsqr_(__uplo: string | any, __n: number, __ncvt: number, __nru: number, __ncc: number, __d__: number, __e: number, __vt: number, __ldvt: number, __u: number, __ldu: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function scsum1_(__n: number, __cx: __CLPK_complex, __incx: number): number;

declare function sdisna_(__job: string | any, __m: number, __n: number, __d__: number, __sep: number, __info: number): number;

declare function sgbbrd_(__vect: string | any, __m: number, __n: number, __ncc: number, __kl: number, __ku: number, __ab: number, __ldab: number, __d__: number, __e: number, __q: number, __ldq: number, __pt: number, __ldpt: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function sgbcon_(__norm: string | any, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __ipiv: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function sgbequ_(__m: number, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function sgbequb_(__m: number, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function sgbrfs_(__trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: number, __ldab: number, __afb: number, __ldafb: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function sgbsv_(__n: number, __kl: number, __ku: number, __nrhs: number, __ab: number, __ldab: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function sgbsvx_(__fact: string | any, __trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: number, __ldab: number, __afb: number, __ldafb: number, __ipiv: number, __equed: string | any, __r__: number, __c__: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function sgbtf2_(__m: number, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __ipiv: number, __info: number): number;

declare function sgbtrf_(__m: number, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __ipiv: number, __info: number): number;

declare function sgbtrs_(__trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: number, __ldab: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function sgebak_(__job: string | any, __side: string | any, __n: number, __ilo: number, __ihi: number, __scale: number, __m: number, __v: number, __ldv: number, __info: number): number;

declare function sgebal_(__job: string | any, __n: number, __a: number, __lda: number, __ilo: number, __ihi: number, __scale: number, __info: number): number;

declare function sgebd2_(__m: number, __n: number, __a: number, __lda: number, __d__: number, __e: number, __tauq: number, __taup: number, __work: number, __info: number): number;

declare function sgebrd_(__m: number, __n: number, __a: number, __lda: number, __d__: number, __e: number, __tauq: number, __taup: number, __work: number, __lwork: number, __info: number): number;

declare function sgecon_(__norm: string | any, __n: number, __a: number, __lda: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function sgeequ_(__m: number, __n: number, __a: number, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function sgeequb_(__m: number, __n: number, __a: number, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function sgees_(__jobvs: string | any, __sort: string | any, __select: () => number, __n: number, __a: number, __lda: number, __sdim: number, __wr: number, __wi: number, __vs: number, __ldvs: number, __work: number, __lwork: number, __bwork: number, __info: number): number;

declare function sgeesx_(__jobvs: string | any, __sort: string | any, __select: () => number, __sense: string | any, __n: number, __a: number, __lda: number, __sdim: number, __wr: number, __wi: number, __vs: number, __ldvs: number, __rconde: number, __rcondv: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __bwork: number, __info: number): number;

declare function sgeev_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: number, __lda: number, __wr: number, __wi: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __work: number, __lwork: number, __info: number): number;

declare function sgeevx_(__balanc: string | any, __jobvl: string | any, __jobvr: string | any, __sense: string | any, __n: number, __a: number, __lda: number, __wr: number, __wi: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __ilo: number, __ihi: number, __scale: number, __abnrm: number, __rconde: number, __rcondv: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function sgegs_(__jobvsl: string | any, __jobvsr: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __vsl: number, __ldvsl: number, __vsr: number, __ldvsr: number, __work: number, __lwork: number, __info: number): number;

declare function sgegv_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __work: number, __lwork: number, __info: number): number;

declare function sgehd2_(__n: number, __ilo: number, __ihi: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function sgehrd_(__n: number, __ilo: number, __ihi: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sgejsv_(__joba: string | any, __jobu: string | any, __jobv: string | any, __jobr: string | any, __jobt: string | any, __jobp: string | any, __m: number, __n: number, __a: number, __lda: number, __sva: number, __u: number, __ldu: number, __v: number, __ldv: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function sgelq2_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function sgelqf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sgels_(__trans: string | any, __m: number, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __work: number, __lwork: number, __info: number): number;

declare function sgelsd_(__m: number, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __s: number, __rcond: number, __rank: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function sgelss_(__m: number, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __s: number, __rcond: number, __rank: number, __work: number, __lwork: number, __info: number): number;

declare function sgelsx_(__m: number, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __jpvt: number, __rcond: number, __rank: number, __work: number, __info: number): number;

declare function sgelsy_(__m: number, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __jpvt: number, __rcond: number, __rank: number, __work: number, __lwork: number, __info: number): number;

declare function sgeql2_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function sgeqlf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sgeqp3_(__m: number, __n: number, __a: number, __lda: number, __jpvt: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sgeqpf_(__m: number, __n: number, __a: number, __lda: number, __jpvt: number, __tau: number, __work: number, __info: number): number;

declare function sgeqr2_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function sgeqrf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sgerfs_(__trans: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function sgerq2_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function sgerqf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sgesc2_(__n: number, __a: number, __lda: number, __rhs: number, __ipiv: number, __jpiv: number, __scale: number): number;

declare function sgesdd_(__jobz: string | any, __m: number, __n: number, __a: number, __lda: number, __s: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function sgesv_(__n: number, __nrhs: number, __a: number, __lda: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function sgesvd_(__jobu: string | any, __jobvt: string | any, __m: number, __n: number, __a: number, __lda: number, __s: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __work: number, __lwork: number, __info: number): number;

declare function sgesvj_(__joba: string | any, __jobu: string | any, __jobv: string | any, __m: number, __n: number, __a: number, __lda: number, __sva: number, __mv: number, __v: number, __ldv: number, __work: number, __lwork: number, __info: number): number;

declare function sgesvx_(__fact: string | any, __trans: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __ipiv: number, __equed: string | any, __r__: number, __c__: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function sgetc2_(__n: number, __a: number, __lda: number, __ipiv: number, __jpiv: number, __info: number): number;

declare function sgetf2_(__m: number, __n: number, __a: number, __lda: number, __ipiv: number, __info: number): number;

declare function sgetrf_(__m: number, __n: number, __a: number, __lda: number, __ipiv: number, __info: number): number;

declare function sgetri_(__n: number, __a: number, __lda: number, __ipiv: number, __work: number, __lwork: number, __info: number): number;

declare function sgetrs_(__trans: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function sggbak_(__job: string | any, __side: string | any, __n: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __m: number, __v: number, __ldv: number, __info: number): number;

declare function sggbal_(__job: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __work: number, __info: number): number;

declare function sgges_(__jobvsl: string | any, __jobvsr: string | any, __sort: string | any, __selctg: () => number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __sdim: number, __alphar: number, __alphai: number, __beta: number, __vsl: number, __ldvsl: number, __vsr: number, __ldvsr: number, __work: number, __lwork: number, __bwork: number, __info: number): number;

declare function sggesx_(__jobvsl: string | any, __jobvsr: string | any, __sort: string | any, __selctg: () => number, __sense: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __sdim: number, __alphar: number, __alphai: number, __beta: number, __vsl: number, __ldvsl: number, __vsr: number, __ldvsr: number, __rconde: number, __rcondv: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __bwork: number, __info: number): number;

declare function sggev_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __work: number, __lwork: number, __info: number): number;

declare function sggevx_(__balanc: string | any, __jobvl: string | any, __jobvr: string | any, __sense: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __abnrm: number, __bbnrm: number, __rconde: number, __rcondv: number, __work: number, __lwork: number, __iwork: number, __bwork: number, __info: number): number;

declare function sggglm_(__n: number, __m: number, __p: number, __a: number, __lda: number, __b: number, __ldb: number, __d__: number, __x: number, __y: number, __work: number, __lwork: number, __info: number): number;

declare function sgghrd_(__compq: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __a: number, __lda: number, __b: number, __ldb: number, __q: number, __ldq: number, __z__: number, __ldz: number, __info: number): number;

declare function sgglse_(__m: number, __n: number, __p: number, __a: number, __lda: number, __b: number, __ldb: number, __c__: number, __d__: number, __x: number, __work: number, __lwork: number, __info: number): number;

declare function sggqrf_(__n: number, __m: number, __p: number, __a: number, __lda: number, __taua: number, __b: number, __ldb: number, __taub: number, __work: number, __lwork: number, __info: number): number;

declare function sggrqf_(__m: number, __p: number, __n: number, __a: number, __lda: number, __taua: number, __b: number, __ldb: number, __taub: number, __work: number, __lwork: number, __info: number): number;

declare function sggsvd_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __n: number, __p: number, __k: number, __l: number, __a: number, __lda: number, __b: number, __ldb: number, __alpha: number, __beta: number, __u: number, __ldu: number, __v: number, __ldv: number, __q: number, __ldq: number, __work: number, __iwork: number, __info: number): number;

declare function sggsvp_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __p: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __tola: number, __tolb: number, __k: number, __l: number, __u: number, __ldu: number, __v: number, __ldv: number, __q: number, __ldq: number, __iwork: number, __tau: number, __work: number, __info: number): number;

declare function sgsvj0_(__jobv: string | any, __m: number, __n: number, __a: number, __lda: number, __d__: number, __sva: number, __mv: number, __v: number, __ldv: number, __eps: number, __sfmin: number, __tol: number, __nsweep: number, __work: number, __lwork: number, __info: number): number;

declare function sgsvj1_(__jobv: string | any, __m: number, __n: number, __n1: number, __a: number, __lda: number, __d__: number, __sva: number, __mv: number, __v: number, __ldv: number, __eps: number, __sfmin: number, __tol: number, __nsweep: number, __work: number, __lwork: number, __info: number): number;

declare function sgtcon_(__norm: string | any, __n: number, __dl: number, __d__: number, __du: number, __du2: number, __ipiv: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function sgtrfs_(__trans: string | any, __n: number, __nrhs: number, __dl: number, __d__: number, __du: number, __dlf: number, __df: number, __duf: number, __du2: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function sgtsv_(__n: number, __nrhs: number, __dl: number, __d__: number, __du: number, __b: number, __ldb: number, __info: number): number;

declare function sgtsvx_(__fact: string | any, __trans: string | any, __n: number, __nrhs: number, __dl: number, __d__: number, __du: number, __dlf: number, __df: number, __duf: number, __du2: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function sgttrf_(__n: number, __dl: number, __d__: number, __du: number, __du2: number, __ipiv: number, __info: number): number;

declare function sgttrs_(__trans: string | any, __n: number, __nrhs: number, __dl: number, __d__: number, __du: number, __du2: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function sgtts2_(__itrans: number, __n: number, __nrhs: number, __dl: number, __d__: number, __du: number, __du2: number, __ipiv: number, __b: number, __ldb: number): number;

declare function shgeqz_(__job: string | any, __compq: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __h__: number, __ldh: number, __t: number, __ldt: number, __alphar: number, __alphai: number, __beta: number, __q: number, __ldq: number, __z__: number, __ldz: number, __work: number, __lwork: number, __info: number): number;

declare function shsein_(__side: string | any, __eigsrc: string | any, __initv: string | any, __select: number, __n: number, __h__: number, __ldh: number, __wr: number, __wi: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __mm: number, __m: number, __work: number, __ifaill: number, __ifailr: number, __info: number): number;

declare function shseqr_(__job: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __h__: number, __ldh: number, __wr: number, __wi: number, __z__: number, __ldz: number, __work: number, __lwork: number, __info: number): number;

declare function sisnan_(__sin__: number): number;

declare function slabad_(__small: number, __large: number): number;

declare function slabrd_(__m: number, __n: number, __nb: number, __a: number, __lda: number, __d__: number, __e: number, __tauq: number, __taup: number, __x: number, __ldx: number, __y: number, __ldy: number): number;

declare function slacn2_(__n: number, __v: number, __x: number, __isgn: number, __est: number, __kase: number, __isave: number): number;

declare function slacon_(__n: number, __v: number, __x: number, __isgn: number, __est: number, __kase: number): number;

declare function slacpy_(__uplo: string | any, __m: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number): number;

declare function sladiv_(__a: number, __b: number, __c__: number, __d__: number, __p: number, __q: number): number;

declare function slae2_(__a: number, __b: number, __c__: number, __rt1: number, __rt2: number): number;

declare function slaebz_(__ijob: number, __nitmax: number, __n: number, __mmax: number, __minp: number, __nbmin: number, __abstol: number, __reltol: number, __pivmin: number, __d__: number, __e: number, __e2: number, __nval: number, __ab: number, __c__: number, __mout: number, __nab: number, __work: number, __iwork: number, __info: number): number;

declare function slaed0_(__icompq: number, __qsiz: number, __n: number, __d__: number, __e: number, __q: number, __ldq: number, __qstore: number, __ldqs: number, __work: number, __iwork: number, __info: number): number;

declare function slaed1_(__n: number, __d__: number, __q: number, __ldq: number, __indxq: number, __rho: number, __cutpnt: number, __work: number, __iwork: number, __info: number): number;

declare function slaed2_(__k: number, __n: number, __n1: number, __d__: number, __q: number, __ldq: number, __indxq: number, __rho: number, __z__: number, __dlamda: number, __w: number, __q2: number, __indx: number, __indxc: number, __indxp: number, __coltyp: number, __info: number): number;

declare function slaed3_(__k: number, __n: number, __n1: number, __d__: number, __q: number, __ldq: number, __rho: number, __dlamda: number, __q2: number, __indx: number, __ctot: number, __w: number, __s: number, __info: number): number;

declare function slaed4_(__n: number, __i__: number, __d__: number, __z__: number, __delta: number, __rho: number, __dlam: number, __info: number): number;

declare function slaed5_(__i__: number, __d__: number, __z__: number, __delta: number, __rho: number, __dlam: number): number;

declare function slaed6_(__kniter: number, __orgati: number, __rho: number, __d__: number, __z__: number, __finit: number, __tau: number, __info: number): number;

declare function slaed7_(__icompq: number, __n: number, __qsiz: number, __tlvls: number, __curlvl: number, __curpbm: number, __d__: number, __q: number, __ldq: number, __indxq: number, __rho: number, __cutpnt: number, __qstore: number, __qptr: number, __prmptr: number, __perm: number, __givptr: number, __givcol: number, __givnum: number, __work: number, __iwork: number, __info: number): number;

declare function slaed8_(__icompq: number, __k: number, __n: number, __qsiz: number, __d__: number, __q: number, __ldq: number, __indxq: number, __rho: number, __cutpnt: number, __z__: number, __dlamda: number, __q2: number, __ldq2: number, __w: number, __perm: number, __givptr: number, __givcol: number, __givnum: number, __indxp: number, __indx: number, __info: number): number;

declare function slaed9_(__k: number, __kstart: number, __kstop: number, __n: number, __d__: number, __q: number, __ldq: number, __rho: number, __dlamda: number, __w: number, __s: number, __lds: number, __info: number): number;

declare function slaeda_(__n: number, __tlvls: number, __curlvl: number, __curpbm: number, __prmptr: number, __perm: number, __givptr: number, __givcol: number, __givnum: number, __q: number, __qptr: number, __z__: number, __ztemp: number, __info: number): number;

declare function slaein_(__rightv: number, __noinit: number, __n: number, __h__: number, __ldh: number, __wr: number, __wi: number, __vr: number, __vi: number, __b: number, __ldb: number, __work: number, __eps3: number, __smlnum: number, __bignum: number, __info: number): number;

declare function slaev2_(__a: number, __b: number, __c__: number, __rt1: number, __rt2: number, __cs1: number, __sn1: number): number;

declare function slaexc_(__wantq: number, __n: number, __t: number, __ldt: number, __q: number, __ldq: number, __j1: number, __n1: number, __n2: number, __work: number, __info: number): number;

declare function slag2_(__a: number, __lda: number, __b: number, __ldb: number, __safmin: number, __scale1: number, __scale2: number, __wr1: number, __wr2: number, __wi: number): number;

declare function slag2d_(__m: number, __n: number, __sa: number, __ldsa: number, __a: number, __lda: number, __info: number): number;

declare function slags2_(__upper: number, __a1: number, __a2: number, __a3: number, __b1: number, __b2: number, __b3: number, __csu: number, __snu: number, __csv: number, __snv: number, __csq: number, __snq: number): number;

declare function slagtf_(__n: number, __a: number, __lambda: number, __b: number, __c__: number, __tol: number, __d__: number, __in: number, __info: number): number;

declare function slagtm_(__trans: string | any, __n: number, __nrhs: number, __alpha: number, __dl: number, __d__: number, __du: number, __x: number, __ldx: number, __beta: number, __b: number, __ldb: number): number;

declare function slagts_(__job: number, __n: number, __a: number, __b: number, __c__: number, __d__: number, __in: number, __y: number, __tol: number, __info: number): number;

declare function slagv2_(__a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __csl: number, __snl: number, __csr: number, __snr: number): number;

declare function slahqr_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: number, __ldh: number, __wr: number, __wi: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __info: number): number;

declare function slahr2_(__n: number, __k: number, __nb: number, __a: number, __lda: number, __tau: number, __t: number, __ldt: number, __y: number, __ldy: number): number;

declare function slahrd_(__n: number, __k: number, __nb: number, __a: number, __lda: number, __tau: number, __t: number, __ldt: number, __y: number, __ldy: number): number;

declare function slaic1_(__job: number, __j: number, __x: number, __sest: number, __w: number, __gamma: number, __sestpr: number, __s: number, __c__: number): number;

declare function slaisnan_(__sin1: number, __sin2: number): number;

declare function slaln2_(__ltrans: number, __na: number, __nw: number, __smin: number, __ca: number, __a: number, __lda: number, __d1: number, __d2: number, __b: number, __ldb: number, __wr: number, __wi: number, __x: number, __ldx: number, __scale: number, __xnorm: number, __info: number): number;

declare function slals0_(__icompq: number, __nl: number, __nr: number, __sqre: number, __nrhs: number, __b: number, __ldb: number, __bx: number, __ldbx: number, __perm: number, __givptr: number, __givcol: number, __ldgcol: number, __givnum: number, __ldgnum: number, __poles: number, __difl: number, __difr: number, __z__: number, __k: number, __c__: number, __s: number, __work: number, __info: number): number;

declare function slalsa_(__icompq: number, __smlsiz: number, __n: number, __nrhs: number, __b: number, __ldb: number, __bx: number, __ldbx: number, __u: number, __ldu: number, __vt: number, __k: number, __difl: number, __difr: number, __z__: number, __poles: number, __givptr: number, __givcol: number, __ldgcol: number, __perm: number, __givnum: number, __c__: number, __s: number, __work: number, __iwork: number, __info: number): number;

declare function slalsd_(__uplo: string | any, __smlsiz: number, __n: number, __nrhs: number, __d__: number, __e: number, __b: number, __ldb: number, __rcond: number, __rank: number, __work: number, __iwork: number, __info: number): number;

declare function slamc1_(__beta: number, __t: number, __rnd: number, __ieee1: number): number;

declare function slamc2_(__beta: number, __t: number, __rnd: number, __eps: number, __emin: number, __rmin: number, __emax: number, __rmax: number): number;

declare function slamc3_(__a: number, __b: number): number;

declare function slamc4_(__emin: number, __start: number, __base: number): number;

declare function slamc5_(__beta: number, __p: number, __emin: number, __ieee: number, __emax: number, __rmax: number): number;

declare function slamch_(__cmach: string | any): number;

declare function slamrg_(__n1: number, __n2: number, __a: number, __strd1: number, __strd2: number, __index: number): number;

declare function slaneg_(__n: number, __d__: number, __lld: number, __sigma: number, __pivmin: number, __r__: number): number;

declare function slangb_(__norm: string | any, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __work: number): number;

declare function slange_(__norm: string | any, __m: number, __n: number, __a: number, __lda: number, __work: number): number;

declare function slangt_(__norm: string | any, __n: number, __dl: number, __d__: number, __du: number): number;

declare function slanhs_(__norm: string | any, __n: number, __a: number, __lda: number, __work: number): number;

declare function slansb_(__norm: string | any, __uplo: string | any, __n: number, __k: number, __ab: number, __ldab: number, __work: number): number;

declare function slansf_(__norm: string | any, __transr: string | any, __uplo: string | any, __n: number, __a: number, __work: number): number;

declare function slansp_(__norm: string | any, __uplo: string | any, __n: number, __ap: number, __work: number): number;

declare function slanst_(__norm: string | any, __n: number, __d__: number, __e: number): number;

declare function slansy_(__norm: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __work: number): number;

declare function slantb_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __k: number, __ab: number, __ldab: number, __work: number): number;

declare function slantp_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __ap: number, __work: number): number;

declare function slantr_(__norm: string | any, __uplo: string | any, __diag: string | any, __m: number, __n: number, __a: number, __lda: number, __work: number): number;

declare function slanv2_(__a: number, __b: number, __c__: number, __d__: number, __rt1r: number, __rt1i: number, __rt2r: number, __rt2i: number, __cs: number, __sn: number): number;

declare function slapll_(__n: number, __x: number, __incx: number, __y: number, __incy: number, __ssmin: number): number;

declare function slapmt_(__forwrd: number, __m: number, __n: number, __x: number, __ldx: number, __k: number): number;

declare function slapy2_(__x: number, __y: number): number;

declare function slapy3_(__x: number, __y: number, __z__: number): number;

declare function slaqgb_(__m: number, __n: number, __kl: number, __ku: number, __ab: number, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __equed: string | any): number;

declare function slaqge_(__m: number, __n: number, __a: number, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __equed: string | any): number;

declare function slaqp2_(__m: number, __n: number, __offset: number, __a: number, __lda: number, __jpvt: number, __tau: number, __vn1: number, __vn2: number, __work: number): number;

declare function slaqps_(__m: number, __n: number, __offset: number, __nb: number, __kb: number, __a: number, __lda: number, __jpvt: number, __tau: number, __vn1: number, __vn2: number, __auxv: number, __f: number, __ldf: number): number;

declare function slaqr0_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: number, __ldh: number, __wr: number, __wi: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __work: number, __lwork: number, __info: number): number;

declare function slaqr1_(__n: number, __h__: number, __ldh: number, __sr1: number, __si1: number, __sr2: number, __si2: number, __v: number): number;

declare function slaqr2_(__wantt: number, __wantz: number, __n: number, __ktop: number, __kbot: number, __nw: number, __h__: number, __ldh: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __ns: number, __nd: number, __sr: number, __si: number, __v: number, __ldv: number, __nh: number, __t: number, __ldt: number, __nv: number, __wv: number, __ldwv: number, __work: number, __lwork: number): number;

declare function slaqr3_(__wantt: number, __wantz: number, __n: number, __ktop: number, __kbot: number, __nw: number, __h__: number, __ldh: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __ns: number, __nd: number, __sr: number, __si: number, __v: number, __ldv: number, __nh: number, __t: number, __ldt: number, __nv: number, __wv: number, __ldwv: number, __work: number, __lwork: number): number;

declare function slaqr4_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: number, __ldh: number, __wr: number, __wi: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __work: number, __lwork: number, __info: number): number;

declare function slaqr5_(__wantt: number, __wantz: number, __kacc22: number, __n: number, __ktop: number, __kbot: number, __nshfts: number, __sr: number, __si: number, __h__: number, __ldh: number, __iloz: number, __ihiz: number, __z__: number, __ldz: number, __v: number, __ldv: number, __u: number, __ldu: number, __nv: number, __wv: number, __ldwv: number, __nh: number, __wh: number, __ldwh: number): number;

declare function slaqsb_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function slaqsp_(__uplo: string | any, __n: number, __ap: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function slaqsy_(__uplo: string | any, __n: number, __a: number, __lda: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function slaqtr_(__ltran: number, __l__CLPK_real: number, __n: number, __t: number, __ldt: number, __b: number, __w: number, __scale: number, __x: number, __work: number, __info: number): number;

declare function slar1v_(__n: number, __b1: number, __bn: number, __lambda: number, __d__: number, __l: number, __ld: number, __lld: number, __pivmin: number, __gaptol: number, __z__: number, __wantnc: number, __negcnt: number, __ztz: number, __mingma: number, __r__: number, __isuppz: number, __nrminv: number, __resid: number, __rqcorr: number, __work: number): number;

declare function slar2v_(__n: number, __x: number, __y: number, __z__: number, __incx: number, __c__: number, __s: number, __incc: number): number;

declare function slarf_(__side: string | any, __m: number, __n: number, __v: number, __incv: number, __tau: number, __c__: number, __ldc: number, __work: number): number;

declare function slarfb_(__side: string | any, __trans: string | any, __direct: string | any, __storev: string | any, __m: number, __n: number, __k: number, __v: number, __ldv: number, __t: number, __ldt: number, __c__: number, __ldc: number, __work: number, __ldwork: number): number;

declare function slarfg_(__n: number, __alpha: number, __x: number, __incx: number, __tau: number): number;

declare function slarfp_(__n: number, __alpha: number, __x: number, __incx: number, __tau: number): number;

declare function slarft_(__direct: string | any, __storev: string | any, __n: number, __k: number, __v: number, __ldv: number, __tau: number, __t: number, __ldt: number): number;

declare function slarfx_(__side: string | any, __m: number, __n: number, __v: number, __tau: number, __c__: number, __ldc: number, __work: number): number;

declare function slargv_(__n: number, __x: number, __incx: number, __y: number, __incy: number, __c__: number, __incc: number): number;

declare function slarnv_(__idist: number, __iseed: number, __n: number, __x: number): number;

declare function slarra_(__n: number, __d__: number, __e: number, __e2: number, __spltol: number, __tnrm: number, __nsplit: number, __isplit: number, __info: number): number;

declare function slarrb_(__n: number, __d__: number, __lld: number, __ifirst: number, __ilast: number, __rtol1: number, __rtol2: number, __offset: number, __w: number, __wgap: number, __werr: number, __work: number, __iwork: number, __pivmin: number, __spdiam: number, __twist: number, __info: number): number;

declare function slarrc_(__jobt: string | any, __n: number, __vl: number, __vu: number, __d__: number, __e: number, __pivmin: number, __eigcnt: number, __lcnt: number, __rcnt: number, __info: number): number;

declare function slarrd_(__range: string | any, __order: string | any, __n: number, __vl: number, __vu: number, __il: number, __iu: number, __gers: number, __reltol: number, __d__: number, __e: number, __e2: number, __pivmin: number, __nsplit: number, __isplit: number, __m: number, __w: number, __werr: number, __wl: number, __wu: number, __iblock: number, __indexw: number, __work: number, __iwork: number, __info: number): number;

declare function slarre_(__range: string | any, __n: number, __vl: number, __vu: number, __il: number, __iu: number, __d__: number, __e: number, __e2: number, __rtol1: number, __rtol2: number, __spltol: number, __nsplit: number, __isplit: number, __m: number, __w: number, __werr: number, __wgap: number, __iblock: number, __indexw: number, __gers: number, __pivmin: number, __work: number, __iwork: number, __info: number): number;

declare function slarrf_(__n: number, __d__: number, __l: number, __ld: number, __clstrt: number, __clend: number, __w: number, __wgap: number, __werr: number, __spdiam: number, __clgapl: number, __clgapr: number, __pivmin: number, __sigma: number, __dplus: number, __lplus: number, __work: number, __info: number): number;

declare function slarrj_(__n: number, __d__: number, __e2: number, __ifirst: number, __ilast: number, __rtol: number, __offset: number, __w: number, __werr: number, __work: number, __iwork: number, __pivmin: number, __spdiam: number, __info: number): number;

declare function slarrk_(__n: number, __iw: number, __gl: number, __gu: number, __d__: number, __e2: number, __pivmin: number, __reltol: number, __w: number, __werr: number, __info: number): number;

declare function slarrr_(__n: number, __d__: number, __e: number, __info: number): number;

declare function slarrv_(__n: number, __vl: number, __vu: number, __d__: number, __l: number, __pivmin: number, __isplit: number, __m: number, __dol: number, __dou: number, __minrgp: number, __rtol1: number, __rtol2: number, __w: number, __werr: number, __wgap: number, __iblock: number, __indexw: number, __gers: number, __z__: number, __ldz: number, __isuppz: number, __work: number, __iwork: number, __info: number): number;

declare function slarscl2_(__m: number, __n: number, __d__: number, __x: number, __ldx: number): number;

declare function slartg_(__f: number, __g: number, __cs: number, __sn: number, __r__: number): number;

declare function slartv_(__n: number, __x: number, __incx: number, __y: number, __incy: number, __c__: number, __s: number, __incc: number): number;

declare function slaruv_(__iseed: number, __n: number, __x: number): number;

declare function slarz_(__side: string | any, __m: number, __n: number, __l: number, __v: number, __incv: number, __tau: number, __c__: number, __ldc: number, __work: number): number;

declare function slarzb_(__side: string | any, __trans: string | any, __direct: string | any, __storev: string | any, __m: number, __n: number, __k: number, __l: number, __v: number, __ldv: number, __t: number, __ldt: number, __c__: number, __ldc: number, __work: number, __ldwork: number): number;

declare function slarzt_(__direct: string | any, __storev: string | any, __n: number, __k: number, __v: number, __ldv: number, __tau: number, __t: number, __ldt: number): number;

declare function slas2_(__f: number, __g: number, __h__: number, __ssmin: number, __ssmax: number): number;

declare function slascl2_(__m: number, __n: number, __d__: number, __x: number, __ldx: number): number;

declare function slascl_(__type__: string | any, __kl: number, __ku: number, __cfrom: number, __cto: number, __m: number, __n: number, __a: number, __lda: number, __info: number): number;

declare function slasd0_(__n: number, __sqre: number, __d__: number, __e: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __smlsiz: number, __iwork: number, __work: number, __info: number): number;

declare function slasd1_(__nl: number, __nr: number, __sqre: number, __d__: number, __alpha: number, __beta: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __idxq: number, __iwork: number, __work: number, __info: number): number;

declare function slasd2_(__nl: number, __nr: number, __sqre: number, __k: number, __d__: number, __z__: number, __alpha: number, __beta: number, __u: number, __ldu: number, __vt: number, __ldvt: number, __dsigma: number, __u2: number, __ldu2: number, __vt2: number, __ldvt2: number, __idxp: number, __idx: number, __idxc: number, __idxq: number, __coltyp: number, __info: number): number;

declare function slasd3_(__nl: number, __nr: number, __sqre: number, __k: number, __d__: number, __q: number, __ldq: number, __dsigma: number, __u: number, __ldu: number, __u2: number, __ldu2: number, __vt: number, __ldvt: number, __vt2: number, __ldvt2: number, __idxc: number, __ctot: number, __z__: number, __info: number): number;

declare function slasd4_(__n: number, __i__: number, __d__: number, __z__: number, __delta: number, __rho: number, __sigma: number, __work: number, __info: number): number;

declare function slasd5_(__i__: number, __d__: number, __z__: number, __delta: number, __rho: number, __dsigma: number, __work: number): number;

declare function slasd6_(__icompq: number, __nl: number, __nr: number, __sqre: number, __d__: number, __vf: number, __vl: number, __alpha: number, __beta: number, __idxq: number, __perm: number, __givptr: number, __givcol: number, __ldgcol: number, __givnum: number, __ldgnum: number, __poles: number, __difl: number, __difr: number, __z__: number, __k: number, __c__: number, __s: number, __work: number, __iwork: number, __info: number): number;

declare function slasd7_(__icompq: number, __nl: number, __nr: number, __sqre: number, __k: number, __d__: number, __z__: number, __zw: number, __vf: number, __vfw: number, __vl: number, __vlw: number, __alpha: number, __beta: number, __dsigma: number, __idx: number, __idxp: number, __idxq: number, __perm: number, __givptr: number, __givcol: number, __ldgcol: number, __givnum: number, __ldgnum: number, __c__: number, __s: number, __info: number): number;

declare function slasd8_(__icompq: number, __k: number, __d__: number, __z__: number, __vf: number, __vl: number, __difl: number, __difr: number, __lddifr: number, __dsigma: number, __work: number, __info: number): number;

declare function slasda_(__icompq: number, __smlsiz: number, __n: number, __sqre: number, __d__: number, __e: number, __u: number, __ldu: number, __vt: number, __k: number, __difl: number, __difr: number, __z__: number, __poles: number, __givptr: number, __givcol: number, __ldgcol: number, __perm: number, __givnum: number, __c__: number, __s: number, __work: number, __iwork: number, __info: number): number;

declare function slasdq_(__uplo: string | any, __sqre: number, __n: number, __ncvt: number, __nru: number, __ncc: number, __d__: number, __e: number, __vt: number, __ldvt: number, __u: number, __ldu: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function slasdt_(__n: number, __lvl: number, __nd: number, __inode: number, __ndiml: number, __ndimr: number, __msub: number): number;

declare function slaset_(__uplo: string | any, __m: number, __n: number, __alpha: number, __beta: number, __a: number, __lda: number): number;

declare function slasq1_(__n: number, __d__: number, __e: number, __work: number, __info: number): number;

declare function slasq2_(__n: number, __z__: number, __info: number): number;

declare function slasq3_(__i0: number, __n0: number, __z__: number, __pp: number, __dmin__: number, __sigma: number, __desig: number, __qmax: number, __nfail: number, __iter: number, __ndiv: number, __ieee: number, __ttype: number, __dmin1: number, __dmin2: number, __dn: number, __dn1: number, __dn2: number, __g: number, __tau: number): number;

declare function slasq4_(__i0: number, __n0: number, __z__: number, __pp: number, __n0in: number, __dmin__: number, __dmin1: number, __dmin2: number, __dn: number, __dn1: number, __dn2: number, __tau: number, __ttype: number, __g: number): number;

declare function slasq5_(__i0: number, __n0: number, __z__: number, __pp: number, __tau: number, __dmin__: number, __dmin1: number, __dmin2: number, __dn: number, __dnm1: number, __dnm2: number, __ieee: number): number;

declare function slasq6_(__i0: number, __n0: number, __z__: number, __pp: number, __dmin__: number, __dmin1: number, __dmin2: number, __dn: number, __dnm1: number, __dnm2: number): number;

declare function slasr_(__side: string | any, __pivot: string | any, __direct: string | any, __m: number, __n: number, __c__: number, __s: number, __a: number, __lda: number): number;

declare function slasrt_(__id: string | any, __n: number, __d__: number, __info: number): number;

declare function slassq_(__n: number, __x: number, __incx: number, __scale: number, __sumsq: number): number;

declare function slasv2_(__f: number, __g: number, __h__: number, __ssmin: number, __ssmax: number, __snr: number, __csr: number, __snl: number, __csl: number): number;

declare function slaswp_(__n: number, __a: number, __lda: number, __k1: number, __k2: number, __ipiv: number, __incx: number): number;

declare function slasy2_(__ltranl: number, __ltranr: number, __isgn: number, __n1: number, __n2: number, __tl: number, __ldtl: number, __tr: number, __ldtr: number, __b: number, __ldb: number, __scale: number, __x: number, __ldx: number, __xnorm: number, __info: number): number;

declare function slasyf_(__uplo: string | any, __n: number, __nb: number, __kb: number, __a: number, __lda: number, __ipiv: number, __w: number, __ldw: number, __info: number): number;

declare function slatbs_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __x: number, __scale: number, __cnorm: number, __info: number): number;

declare function slatdf_(__ijob: number, __n: number, __z__: number, __ldz: number, __rhs: number, __rdsum: number, __rdscal: number, __ipiv: number, __jpiv: number): number;

declare function slatps_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __ap: number, __x: number, __scale: number, __cnorm: number, __info: number): number;

declare function slatrd_(__uplo: string | any, __n: number, __nb: number, __a: number, __lda: number, __e: number, __tau: number, __w: number, __ldw: number): number;

declare function slatrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __a: number, __lda: number, __x: number, __scale: number, __cnorm: number, __info: number): number;

declare function slatrz_(__m: number, __n: number, __l: number, __a: number, __lda: number, __tau: number, __work: number): number;

declare function slatzm_(__side: string | any, __m: number, __n: number, __v: number, __incv: number, __tau: number, __c1: number, __c2: number, __ldc: number, __work: number): number;

declare function slauu2_(__uplo: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function slauum_(__uplo: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function smaxloc_(__a: number, __dimm: number): number;

declare function sopgtr_(__uplo: string | any, __n: number, __ap: number, __tau: number, __q: number, __ldq: number, __work: number, __info: number): number;

declare function sopmtr_(__side: string | any, __uplo: string | any, __trans: string | any, __m: number, __n: number, __ap: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function sorg2l_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function sorg2r_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function sorgbr_(__vect: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sorghr_(__n: number, __ilo: number, __ihi: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sorgl2_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function sorglq_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sorgql_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sorgqr_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sorgr2_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __info: number): number;

declare function sorgrq_(__m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sorgtr_(__uplo: string | any, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function sorm2l_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function sorm2r_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function sormbr_(__vect: string | any, __side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function sormhr_(__side: string | any, __trans: string | any, __m: number, __n: number, __ilo: number, __ihi: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function sorml2_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function sormlq_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function sormql_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function sormqr_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function sormr2_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function sormr3_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __l: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __info: number): number;

declare function sormrq_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function sormrz_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __l: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function sormtr_(__side: string | any, __uplo: string | any, __trans: string | any, __m: number, __n: number, __a: number, __lda: number, __tau: number, __c__: number, __ldc: number, __work: number, __lwork: number, __info: number): number;

declare function sparse_commit(A: any): sparse_status;

declare function sparse_elementwise_norm_double(A: any, norm: sparse_norm): number;

declare function sparse_elementwise_norm_float(A: any, norm: sparse_norm): number;

declare function sparse_extract_block_double(A: any, bi: number, bj: number, row_stride: number, col_stride: number, val: number): sparse_status;

declare function sparse_extract_block_float(A: any, bi: number, bj: number, row_stride: number, col_stride: number, val: number): sparse_status;

declare function sparse_extract_sparse_column_double(A: any, column: number, row_start: number, row_end: number, nz: number, val: number, indx: number): sparse_status;

declare function sparse_extract_sparse_column_float(A: any, column: number, row_start: number, row_end: number, nz: number, val: number, indx: number): sparse_status;

declare function sparse_extract_sparse_row_double(A: any, row: number, column_start: number, column_end: number, nz: number, val: number, jndx: number): sparse_status;

declare function sparse_extract_sparse_row_float(A: any, row: number, column_start: number, column_end: number, nz: number, val: number, jndx: number): sparse_status;

declare function sparse_get_block_dimension_for_col(A: any, j: number): number;

declare function sparse_get_block_dimension_for_row(A: any, i: number): number;

declare function sparse_get_matrix_nonzero_count(A: any): number;

declare function sparse_get_matrix_nonzero_count_for_column(A: any, j: number): number;

declare function sparse_get_matrix_nonzero_count_for_row(A: any, i: number): number;

declare function sparse_get_matrix_number_of_columns(A: any): number;

declare function sparse_get_matrix_number_of_rows(A: any): number;

declare function sparse_get_matrix_property(A: any, pname: sparse_matrix_property): number;

declare function sparse_get_vector_nonzero_count_double(N: number, x: number, incx: number): number;

declare function sparse_get_vector_nonzero_count_float(N: number, x: number, incx: number): number;

declare function sparse_inner_product_dense_double(nz: number, x: number, indx: number, y: number, incy: number): number;

declare function sparse_inner_product_dense_float(nz: number, x: number, indx: number, y: number, incy: number): number;

declare function sparse_inner_product_sparse_double(nzx: number, nzy: number, x: number, indx: number, y: number, indy: number): number;

declare function sparse_inner_product_sparse_float(nzx: number, nzy: number, x: number, indx: number, y: number, indy: number): number;

declare function sparse_insert_block_double(A: any, val: number, row_stride: number, col_stride: number, bi: number, bj: number): sparse_status;

declare function sparse_insert_block_float(A: any, val: number, row_stride: number, col_stride: number, bi: number, bj: number): sparse_status;

declare function sparse_insert_col_double(A: any, j: number, nz: number, val: number, indx: number): sparse_status;

declare function sparse_insert_col_float(A: any, j: number, nz: number, val: number, indx: number): sparse_status;

declare function sparse_insert_entries_double(A: any, N: number, val: number, indx: number, jndx: number): sparse_status;

declare function sparse_insert_entries_float(A: any, N: number, val: number, indx: number, jndx: number): sparse_status;

declare function sparse_insert_entry_double(A: any, val: number, i: number, j: number): sparse_status;

declare function sparse_insert_entry_float(A: any, val: number, i: number, j: number): sparse_status;

declare function sparse_insert_row_double(A: any, i: number, nz: number, val: number, jndx: number): sparse_status;

declare function sparse_insert_row_float(A: any, i: number, nz: number, val: number, jndx: number): sparse_status;

declare function sparse_matrix_block_create_double(Mb: number, Nb: number, k: number, l: number): any;

declare function sparse_matrix_block_create_float(Mb: number, Nb: number, k: number, l: number): any;

declare function sparse_matrix_create_double(M: number, N: number): any;

declare function sparse_matrix_create_float(M: number, N: number): any;

declare function sparse_matrix_destroy(A: any): sparse_status;

declare function sparse_matrix_product_dense_double(order: CBLAS_ORDER, transa: CBLAS_TRANSPOSE, n: number, alpha: number, A: any, B: number, ldb: number, C: number, ldc: number): sparse_status;

declare function sparse_matrix_product_dense_float(order: CBLAS_ORDER, transa: CBLAS_TRANSPOSE, n: number, alpha: number, A: any, B: number, ldb: number, C: number, ldc: number): sparse_status;

declare function sparse_matrix_product_sparse_double(order: CBLAS_ORDER, transa: CBLAS_TRANSPOSE, alpha: number, A: any, B: any, C: number, ldc: number): sparse_status;

declare function sparse_matrix_product_sparse_float(order: CBLAS_ORDER, transa: CBLAS_TRANSPOSE, alpha: number, A: any, B: any, C: number, ldc: number): sparse_status;

enum sparse_matrix_property {

	SPARSE_UPPER_TRIANGULAR = 1,

	SPARSE_LOWER_TRIANGULAR = 2,

	SPARSE_UPPER_SYMMETRIC = 4,

	SPARSE_LOWER_SYMMETRIC = 8
}


declare function sparse_matrix_trace_double(A: any, offset: number): number;

declare function sparse_matrix_trace_float(A: any, offset: number): number;

declare function sparse_matrix_triangular_solve_dense_double(order: CBLAS_ORDER, transt: CBLAS_TRANSPOSE, nrhs: number, alpha: number, T: any, B: number, ldb: number): sparse_status;

declare function sparse_matrix_triangular_solve_dense_float(order: CBLAS_ORDER, transt: CBLAS_TRANSPOSE, nrhs: number, alpha: number, T: any, B: number, ldb: number): sparse_status;

declare function sparse_matrix_variable_block_create_double(Mb: number, Nb: number, K: number, L: number): any;

declare function sparse_matrix_variable_block_create_float(Mb: number, Nb: number, K: number, L: number): any;

declare function sparse_matrix_vector_product_dense_double(transa: CBLAS_TRANSPOSE, alpha: number, A: any, x: number, incx: number, y: number, incy: number): sparse_status;

declare function sparse_matrix_vector_product_dense_float(transa: CBLAS_TRANSPOSE, alpha: number, A: any, x: number, incx: number, y: number, incy: number): sparse_status;

enum sparse_norm {

	SPARSE_NORM_ONE = 171,

	SPARSE_NORM_TWO = 173,

	SPARSE_NORM_INF = 175,

	SPARSE_NORM_R1 = 179
}


declare function sparse_operator_norm_double(A: any, norm: sparse_norm): number;

declare function sparse_operator_norm_float(A: any, norm: sparse_norm): number;

declare function sparse_outer_product_dense_double(M: number, N: number, nz: number, alpha: number, x: number, incx: number, y: number, indy: number, C: any): sparse_status;

declare function sparse_outer_product_dense_float(M: number, N: number, nz: number, alpha: number, x: number, incx: number, y: number, indy: number, C: any): sparse_status;

declare function sparse_pack_vector_double(N: number, nz: number, x: number, incx: number, y: number, indy: number): number;

declare function sparse_pack_vector_float(N: number, nz: number, x: number, incx: number, y: number, indy: number): number;

declare function sparse_permute_cols_double(A: any, perm: number): sparse_status;

declare function sparse_permute_cols_float(A: any, perm: number): sparse_status;

declare function sparse_permute_rows_double(A: any, perm: number): sparse_status;

declare function sparse_permute_rows_float(A: any, perm: number): sparse_status;

declare function sparse_set_matrix_property(A: any, pname: sparse_matrix_property): sparse_status;

enum sparse_status {

	SPARSE_SUCCESS = 0,

	SPARSE_ILLEGAL_PARAMETER = -1000,

	SPARSE_CANNOT_SET_PROPERTY = -1001,

	SPARSE_SYSTEM_ERROR = -1002
}


declare function sparse_unpack_vector_double(N: number, nz: number, zero: boolean, x: number, indx: number, y: number, incy: number): void;

declare function sparse_unpack_vector_float(N: number, nz: number, zero: boolean, x: number, indx: number, y: number, incy: number): void;

declare function sparse_vector_add_with_scale_dense_double(nz: number, alpha: number, x: number, indx: number, y: number, incy: number): void;

declare function sparse_vector_add_with_scale_dense_float(nz: number, alpha: number, x: number, indx: number, y: number, incy: number): void;

declare function sparse_vector_norm_double(nz: number, x: number, indx: number, norm: sparse_norm): number;

declare function sparse_vector_norm_float(nz: number, x: number, indx: number, norm: sparse_norm): number;

declare function sparse_vector_triangular_solve_dense_double(transt: CBLAS_TRANSPOSE, alpha: number, T: any, x: number, incx: number): sparse_status;

declare function sparse_vector_triangular_solve_dense_float(transt: CBLAS_TRANSPOSE, alpha: number, T: any, x: number, incx: number): sparse_status;

declare function spbcon_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function spbequ_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function spbrfs_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __afb: number, __ldafb: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function spbstf_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __info: number): number;

declare function spbsv_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __b: number, __ldb: number, __info: number): number;

declare function spbsvx_(__fact: string | any, __uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __afb: number, __ldafb: number, __equed: string | any, __s: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function spbtf2_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __info: number): number;

declare function spbtrf_(__uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __info: number): number;

declare function spbtrs_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __b: number, __ldb: number, __info: number): number;

declare function spftrf_(__transr: string | any, __uplo: string | any, __n: number, __a: number, __info: number): number;

declare function spftri_(__transr: string | any, __uplo: string | any, __n: number, __a: number, __info: number): number;

declare function spftrs_(__transr: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: number, __b: number, __ldb: number, __info: number): number;

declare function spocon_(__uplo: string | any, __n: number, __a: number, __lda: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function spoequ_(__n: number, __a: number, __lda: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function spoequb_(__n: number, __a: number, __lda: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function sporfs_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function sposv_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __info: number): number;

declare function sposvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __equed: string | any, __s: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function spotf2_(__uplo: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function spotrf_(__uplo: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function spotri_(__uplo: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function spotrs_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __info: number): number;

declare function sppcon_(__uplo: string | any, __n: number, __ap: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function sppequ_(__uplo: string | any, __n: number, __ap: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function spprfs_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __afp: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function sppsv_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __b: number, __ldb: number, __info: number): number;

declare function sppsvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __ap: number, __afp: number, __equed: string | any, __s: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function spptrf_(__uplo: string | any, __n: number, __ap: number, __info: number): number;

declare function spptri_(__uplo: string | any, __n: number, __ap: number, __info: number): number;

declare function spptrs_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __b: number, __ldb: number, __info: number): number;

declare function spstf2_(__uplo: string | any, __n: number, __a: number, __lda: number, __piv: number, __rank: number, __tol: number, __work: number, __info: number): number;

declare function spstrf_(__uplo: string | any, __n: number, __a: number, __lda: number, __piv: number, __rank: number, __tol: number, __work: number, __info: number): number;

declare function sptcon_(__n: number, __d__: number, __e: number, __anorm: number, __rcond: number, __work: number, __info: number): number;

declare function spteqr_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function sptrfs_(__n: number, __nrhs: number, __d__: number, __e: number, __df: number, __ef: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __info: number): number;

declare function sptsv_(__n: number, __nrhs: number, __d__: number, __e: number, __b: number, __ldb: number, __info: number): number;

declare function sptsvx_(__fact: string | any, __n: number, __nrhs: number, __d__: number, __e: number, __df: number, __ef: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __info: number): number;

declare function spttrf_(__n: number, __d__: number, __e: number, __info: number): number;

declare function spttrs_(__n: number, __nrhs: number, __d__: number, __e: number, __b: number, __ldb: number, __info: number): number;

declare function sptts2_(__n: number, __nrhs: number, __d__: number, __e: number, __b: number, __ldb: number): number;

declare function srscl_(__n: number, __sa: number, __sx: number, __incx: number): number;

declare function ssbev_(__jobz: string | any, __uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __w: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function ssbevd_(__jobz: string | any, __uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function ssbevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __q: number, __ldq: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function ssbgst_(__vect: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: number, __ldab: number, __bb: number, __ldbb: number, __x: number, __ldx: number, __work: number, __info: number): number;

declare function ssbgv_(__jobz: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: number, __ldab: number, __bb: number, __ldbb: number, __w: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function ssbgvd_(__jobz: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: number, __ldab: number, __bb: number, __ldbb: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function ssbgvx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: number, __ldab: number, __bb: number, __ldbb: number, __q: number, __ldq: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function ssbtrd_(__vect: string | any, __uplo: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __d__: number, __e: number, __q: number, __ldq: number, __work: number, __info: number): number;

declare function ssfrk_(__transr: string | any, __uplo: string | any, __trans: string | any, __n: number, __k: number, __alpha: number, __a: number, __lda: number, __beta: number, __c__: number): number;

declare function sspcon_(__uplo: string | any, __n: number, __ap: number, __ipiv: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function sspev_(__jobz: string | any, __uplo: string | any, __n: number, __ap: number, __w: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function sspevd_(__jobz: string | any, __uplo: string | any, __n: number, __ap: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function sspevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ap: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function sspgst_(__itype: number, __uplo: string | any, __n: number, __ap: number, __bp: number, __info: number): number;

declare function sspgv_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __ap: number, __bp: number, __w: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function sspgvd_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __ap: number, __bp: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function sspgvx_(__itype: number, __jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ap: number, __bp: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function ssprfs_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __afp: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function sspsv_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function sspsvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __ap: number, __afp: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function ssptrd_(__uplo: string | any, __n: number, __ap: number, __d__: number, __e: number, __tau: number, __info: number): number;

declare function ssptrf_(__uplo: string | any, __n: number, __ap: number, __ipiv: number, __info: number): number;

declare function ssptri_(__uplo: string | any, __n: number, __ap: number, __ipiv: number, __work: number, __info: number): number;

declare function ssptrs_(__uplo: string | any, __n: number, __nrhs: number, __ap: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function sstebz_(__range: string | any, __order: string | any, __n: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __d__: number, __e: number, __m: number, __nsplit: number, __w: number, __iblock: number, __isplit: number, __work: number, __iwork: number, __info: number): number;

declare function sstedc_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function sstegr_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __isuppz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function sstein_(__n: number, __d__: number, __e: number, __m: number, __w: number, __iblock: number, __isplit: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function sstemr_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __m: number, __w: number, __z__: number, __ldz: number, __nzc: number, __isuppz: number, __tryrac: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function ssteqr_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function ssterf_(__n: number, __d__: number, __e: number, __info: number): number;

declare function sstev_(__jobz: string | any, __n: number, __d__: number, __e: number, __z__: number, __ldz: number, __work: number, __info: number): number;

declare function sstevd_(__jobz: string | any, __n: number, __d__: number, __e: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function sstevr_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __isuppz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function sstevx_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function ssycon_(__uplo: string | any, __n: number, __a: number, __lda: number, __ipiv: number, __anorm: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function ssyequb_(__uplo: string | any, __n: number, __a: number, __lda: number, __s: number, __scond: number, __amax: number, __work: number, __info: number): number;

declare function ssyev_(__jobz: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __w: number, __work: number, __lwork: number, __info: number): number;

declare function ssyevd_(__jobz: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __w: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function ssyevr_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __isuppz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function ssyevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function ssygs2_(__itype: number, __uplo: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __info: number): number;

declare function ssygst_(__itype: number, __uplo: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __info: number): number;

declare function ssygv_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __w: number, __work: number, __lwork: number, __info: number): number;

declare function ssygvd_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __w: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function ssygvx_(__itype: number, __jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: number, __ldz: number, __work: number, __lwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function ssyrfs_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function ssysv_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __ipiv: number, __b: number, __ldb: number, __work: number, __lwork: number, __info: number): number;

declare function ssysvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __af: number, __ldaf: number, __ipiv: number, __b: number, __ldb: number, __x: number, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function ssytd2_(__uplo: string | any, __n: number, __a: number, __lda: number, __d__: number, __e: number, __tau: number, __info: number): number;

declare function ssytf2_(__uplo: string | any, __n: number, __a: number, __lda: number, __ipiv: number, __info: number): number;

declare function ssytrd_(__uplo: string | any, __n: number, __a: number, __lda: number, __d__: number, __e: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function ssytrf_(__uplo: string | any, __n: number, __a: number, __lda: number, __ipiv: number, __work: number, __lwork: number, __info: number): number;

declare function ssytri_(__uplo: string | any, __n: number, __a: number, __lda: number, __ipiv: number, __work: number, __info: number): number;

declare function ssytrs_(__uplo: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __ipiv: number, __b: number, __ldb: number, __info: number): number;

declare function stbcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __kd: number, __ab: number, __ldab: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function stbrfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function stbtrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __kd: number, __nrhs: number, __ab: number, __ldab: number, __b: number, __ldb: number, __info: number): number;

declare function stfsm_(__transr: string | any, __side: string | any, __uplo: string | any, __trans: string | any, __diag: string | any, __m: number, __n: number, __alpha: number, __a: number, __b: number, __ldb: number): number;

declare function stftri_(__transr: string | any, __uplo: string | any, __diag: string | any, __n: number, __a: number, __info: number): number;

declare function stfttp_(__transr: string | any, __uplo: string | any, __n: number, __arf: number, __ap: number, __info: number): number;

declare function stfttr_(__transr: string | any, __uplo: string | any, __n: number, __arf: number, __a: number, __lda: number, __info: number): number;

declare function stgevc_(__side: string | any, __howmny: string | any, __select: number, __n: number, __s: number, __lds: number, __p: number, __ldp: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __mm: number, __m: number, __work: number, __info: number): number;

declare function stgex2_(__wantq: number, __wantz: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __q: number, __ldq: number, __z__: number, __ldz: number, __j1: number, __n1: number, __n2: number, __work: number, __lwork: number, __info: number): number;

declare function stgexc_(__wantq: number, __wantz: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __q: number, __ldq: number, __z__: number, __ldz: number, __ifst: number, __ilst: number, __work: number, __lwork: number, __info: number): number;

declare function stgsen_(__ijob: number, __wantq: number, __wantz: number, __select: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __alphar: number, __alphai: number, __beta: number, __q: number, __ldq: number, __z__: number, __ldz: number, __m: number, __pl: number, __pr: number, __dif: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function stgsja_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __p: number, __n: number, __k: number, __l: number, __a: number, __lda: number, __b: number, __ldb: number, __tola: number, __tolb: number, __alpha: number, __beta: number, __u: number, __ldu: number, __v: number, __ldv: number, __q: number, __ldq: number, __work: number, __ncycle: number, __info: number): number;

declare function stgsna_(__job: string | any, __howmny: string | any, __select: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __s: number, __dif: number, __mm: number, __m: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function stgsy2_(__trans: string | any, __ijob: number, __m: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __c__: number, __ldc: number, __d__: number, __ldd: number, __e: number, __lde: number, __f: number, __ldf: number, __scale: number, __rdsum: number, __rdscal: number, __iwork: number, __pq: number, __info: number): number;

declare function stgsyl_(__trans: string | any, __ijob: number, __m: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __c__: number, __ldc: number, __d__: number, __ldd: number, __e: number, __lde: number, __f: number, __ldf: number, __scale: number, __dif: number, __work: number, __lwork: number, __iwork: number, __info: number): number;

declare function stpcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __ap: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function stprfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __ap: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function stptri_(__uplo: string | any, __diag: string | any, __n: number, __ap: number, __info: number): number;

declare function stptrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __ap: number, __b: number, __ldb: number, __info: number): number;

declare function stpttf_(__transr: string | any, __uplo: string | any, __n: number, __ap: number, __arf: number, __info: number): number;

declare function stpttr_(__uplo: string | any, __n: number, __ap: number, __a: number, __lda: number, __info: number): number;

declare function strcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __a: number, __lda: number, __rcond: number, __work: number, __iwork: number, __info: number): number;

declare function strevc_(__side: string | any, __howmny: string | any, __select: number, __n: number, __t: number, __ldt: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __mm: number, __m: number, __work: number, __info: number): number;

declare function strexc_(__compq: string | any, __n: number, __t: number, __ldt: number, __q: number, __ldq: number, __ifst: number, __ilst: number, __work: number, __info: number): number;

declare function strrfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __x: number, __ldx: number, __ferr: number, __berr: number, __work: number, __iwork: number, __info: number): number;

declare function strsen_(__job: string | any, __compq: string | any, __select: number, __n: number, __t: number, __ldt: number, __q: number, __ldq: number, __wr: number, __wi: number, __m: number, __s: number, __sep: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function strsna_(__job: string | any, __howmny: string | any, __select: number, __n: number, __t: number, __ldt: number, __vl: number, __ldvl: number, __vr: number, __ldvr: number, __s: number, __sep: number, __mm: number, __m: number, __work: number, __ldwork: number, __iwork: number, __info: number): number;

declare function strsyl_(__trana: string | any, __tranb: string | any, __isgn: number, __m: number, __n: number, __a: number, __lda: number, __b: number, __ldb: number, __c__: number, __ldc: number, __scale: number, __info: number): number;

declare function strti2_(__uplo: string | any, __diag: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function strtri_(__uplo: string | any, __diag: string | any, __n: number, __a: number, __lda: number, __info: number): number;

declare function strtrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __a: number, __lda: number, __b: number, __ldb: number, __info: number): number;

declare function strttf_(__transr: string | any, __uplo: string | any, __n: number, __a: number, __lda: number, __arf: number, __info: number): number;

declare function strttp_(__uplo: string | any, __n: number, __a: number, __lda: number, __ap: number, __info: number): number;

declare function stzrqf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __info: number): number;

declare function stzrzf_(__m: number, __n: number, __a: number, __lda: number, __tau: number, __work: number, __lwork: number, __info: number): number;

declare function vDSP_DCT_CreateSetup(__Previous: any, __Length: number, __Type: vDSP_DCT_Type): any;

declare function vDSP_DCT_Execute(__Setup: any, __Input: number, __Output: number): void;

enum vDSP_DCT_Type {

	II = 2,

	III = 3,

	IV = 4
}


declare function vDSP_DFT_CreateSetup(__Previous: any, __Length: number): any;

declare function vDSP_DFT_DestroySetup(__Setup: any): void;

declare function vDSP_DFT_DestroySetupD(__Setup: any): void;

enum vDSP_DFT_Direction {

	FORWARD = 1,

	INVERSE = -1
}


declare function vDSP_DFT_Execute(__Setup: any, __Ir: number, __Ii: number, __Or: number, __Oi: number): void;

declare function vDSP_DFT_ExecuteD(__Setup: any, __Ir: number, __Ii: number, __Or: number, __Oi: number): void;

declare function vDSP_DFT_zop(__Setup: any, __Ir: number, __Ii: number, __Is: number, __Or: number, __Oi: number, __Os: number, __Direction: vDSP_DFT_Direction): void;

declare function vDSP_DFT_zop_CreateSetup(__Previous: any, __Length: number, __Direction: vDSP_DFT_Direction): any;

declare function vDSP_DFT_zop_CreateSetupD(__Previous: any, __Length: number, __Direction: vDSP_DFT_Direction): any;

declare function vDSP_DFT_zrop_CreateSetup(__Previous: any, __Length: number, __Direction: vDSP_DFT_Direction): any;

declare function vDSP_DFT_zrop_CreateSetupD(__Previous: any, __Length: number, __Direction: vDSP_DFT_Direction): any;

declare function vDSP_FFT16_copv(__Output: number, __Input: number, __Direction: number): void;

declare function vDSP_FFT16_zopv(__Or: number, __Oi: number, __Ir: number, __Ii: number, __Direction: number): void;

declare function vDSP_FFT32_copv(__Output: number, __Input: number, __Direction: number): void;

declare function vDSP_FFT32_zopv(__Or: number, __Oi: number, __Ir: number, __Ii: number, __Direction: number): void;

declare const vDSP_HALF_WINDOW: number;

declare const vDSP_HANN_DENORM: number;

declare const vDSP_HANN_NORM: number;

declare function vDSP_biquad(__Setup: any, __Delay: number, __X: number, __IX: number, __Y: number, __IY: number, __N: number): void;

declare function vDSP_biquadD(__Setup: any, __Delay: number, __X: number, __IX: number, __Y: number, __IY: number, __N: number): void;

declare function vDSP_biquad_CreateSetup(__Coefficients: number, __M: number): any;

declare function vDSP_biquad_CreateSetupD(__Coefficients: number, __M: number): any;

declare function vDSP_biquad_DestroySetup(__setup: any): void;

declare function vDSP_biquad_DestroySetupD(__setup: any): void;

declare function vDSP_biquadm(__Setup: any, __X: number, __IX: number, __Y: number, __IY: number, __N: number): void;

declare function vDSP_biquadmD(__Setup: any, __X: number, __IX: number, __Y: number, __IY: number, __N: number): void;

declare function vDSP_biquadm_CopyState(__dest: any, __src: any): void;

declare function vDSP_biquadm_CopyStateD(__dest: any, __src: any): void;

declare function vDSP_biquadm_CreateSetup(__coeffs: number, __M: number, __N: number): any;

declare function vDSP_biquadm_CreateSetupD(__coeffs: number, __M: number, __N: number): any;

declare function vDSP_biquadm_DestroySetup(__setup: any): void;

declare function vDSP_biquadm_DestroySetupD(__setup: any): void;

declare function vDSP_biquadm_ResetState(__setup: any): void;

declare function vDSP_biquadm_ResetStateD(__setup: any): void;

declare function vDSP_biquadm_SetActiveFilters(__setup: any, __filter_states: boolean): void;

declare function vDSP_biquadm_SetCoefficientsDouble(__setup: any, __coeffs: number, __start_sec: number, __start_chn: number, __nsec: number, __nchn: number): void;

declare function vDSP_biquadm_SetCoefficientsSingle(__setup: any, __coeffs: number, __start_sec: number, __start_chn: number, __nsec: number, __nchn: number): void;

declare function vDSP_biquadm_SetTargetsDouble(__setup: any, __targets: number, __interp_rate: number, __interp_threshold: number, __start_sec: number, __start_chn: number, __nsec: number, __nchn: number): void;

declare function vDSP_biquadm_SetTargetsSingle(__setup: any, __targets: number, __interp_rate: number, __interp_threshold: number, __start_sec: number, __start_chn: number, __nsec: number, __nchn: number): void;

declare function vDSP_blkman_window(__C: number, __N: number, __Flag: number): void;

declare function vDSP_blkman_windowD(__C: number, __N: number, __Flag: number): void;

declare function vDSP_conv(__A: number, __IA: number, __F: number, __IF: number, __C: number, __IC: number, __N: number, __P: number): void;

declare function vDSP_convD(__A: number, __IA: number, __F: number, __IF: number, __C: number, __IC: number, __N: number, __P: number): void;

declare function vDSP_create_fftsetup(__Log2n: number, __Radix: number): any;

declare function vDSP_create_fftsetupD(__Log2n: number, __Radix: number): any;

declare function vDSP_ctoz(__C: DSPComplex, __IC: number, __Z: DSPSplitComplex, __IZ: number, __N: number): void;

declare function vDSP_ctozD(__C: DSPDoubleComplex, __IC: number, __Z: DSPDoubleSplitComplex, __IZ: number, __N: number): void;

declare function vDSP_deq22(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_deq22D(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_desamp(__A: number, __DF: number, __F: number, __C: number, __N: number, __P: number): void;

declare function vDSP_desampD(__A: number, __DF: number, __F: number, __C: number, __N: number, __P: number): void;

declare function vDSP_destroy_fftsetup(__setup: any): void;

declare function vDSP_destroy_fftsetupD(__setup: any): void;

declare function vDSP_distancesq(__A: number, __IA: number, __B: number, __IB: number, __C: number, __N: number): void;

declare function vDSP_distancesqD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __N: number): void;

declare function vDSP_dotpr(__A: number, __IA: number, __B: number, __IB: number, __C: number, __N: number): void;

declare function vDSP_dotpr2(__A0: number, __IA0: number, __A1: number, __IA1: number, __B: number, __IB: number, __C0: number, __C1: number, __N: number): void;

declare function vDSP_dotpr2D(__A0: number, __IA0: number, __A1: number, __IA1: number, __B: number, __IB: number, __C0: number, __C1: number, __N: number): void;

declare function vDSP_dotpr2_s1_15(__A0: number, __IA0: number, __A1: number, __IA1: number, __B: number, __IB: number, __C0: number, __C1: number, __N: number): void;

declare function vDSP_dotpr2_s8_24(__A0: number, __IA0: number, __A1: number, __IA1: number, __B: number, __IB: number, __C0: number, __C1: number, __N: number): void;

declare function vDSP_dotprD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __N: number): void;

declare function vDSP_dotpr_s1_15(__A: number, __IA: number, __B: number, __IB: number, __C: number, __N: number): void;

declare function vDSP_dotpr_s8_24(__A: number, __IA: number, __B: number, __IB: number, __C: number, __N: number): void;

declare function vDSP_f3x3(__A: number, __NR: number, __NC: number, __F: number, __C: number): void;

declare function vDSP_f3x3D(__A: number, __NR: number, __NC: number, __F: number, __C: number): void;

declare function vDSP_f5x5(__A: number, __NR: number, __NC: number, __F: number, __C: number): void;

declare function vDSP_f5x5D(__A: number, __NR: number, __NC: number, __F: number, __C: number): void;

declare function vDSP_fft2d_zip(__Setup: any, __C: DSPSplitComplex, __IC0: number, __IC1: number, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zipD(__Setup: any, __C: DSPDoubleSplitComplex, __IC0: number, __IC1: number, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zipt(__Setup: any, __C: DSPSplitComplex, __IC1: number, __IC0: number, __Buffer: DSPSplitComplex, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_ziptD(__Setup: any, __C: DSPDoubleSplitComplex, __IC0: number, __IC1: number, __Buffer: DSPDoubleSplitComplex, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zop(__Setup: any, __A: DSPSplitComplex, __IA0: number, __IA1: number, __C: DSPSplitComplex, __IC0: number, __IC1: number, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zopD(__Setup: any, __A: DSPDoubleSplitComplex, __IA0: number, __IA1: number, __C: DSPDoubleSplitComplex, __IC0: number, __IC1: number, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zopt(__Setup: any, __A: DSPSplitComplex, __IA0: number, __IA1: number, __C: DSPSplitComplex, __IC0: number, __IC1: number, __Buffer: DSPSplitComplex, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zoptD(__Setup: any, __A: DSPDoubleSplitComplex, __IA0: number, __IA1: number, __C: DSPDoubleSplitComplex, __IC0: number, __IC1: number, __Buffer: DSPDoubleSplitComplex, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zrip(__Setup: any, __C: DSPSplitComplex, __IC0: number, __IC1: number, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zripD(__Setup: any, __C: DSPDoubleSplitComplex, __IC0: number, __IC1: number, __Log2N0: number, __Log2N1: number, __flag: number): void;

declare function vDSP_fft2d_zript(__Setup: any, __C: DSPSplitComplex, __IC0: number, __IC1: number, __Buffer: DSPSplitComplex, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zriptD(__Setup: any, __C: DSPDoubleSplitComplex, __IC0: number, __IC1: number, __Buffer: DSPDoubleSplitComplex, __Log2N0: number, __Log2N1: number, __flag: number): void;

declare function vDSP_fft2d_zrop(__Setup: any, __A: DSPSplitComplex, __IA0: number, __IA1: number, __C: DSPSplitComplex, __IC0: number, __IC1: number, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zropD(__Setup: any, __A: DSPDoubleSplitComplex, __IA0: number, __IA1: number, __C: DSPDoubleSplitComplex, __IC0: number, __IC1: number, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zropt(__Setup: any, __A: DSPSplitComplex, __IA0: number, __IA1: number, __C: DSPSplitComplex, __IC0: number, __IC1: number, __Buffer: DSPSplitComplex, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft2d_zroptD(__Setup: any, __A: DSPDoubleSplitComplex, __IA0: number, __IA1: number, __C: DSPDoubleSplitComplex, __IC0: number, __IC1: number, __Buffer: DSPDoubleSplitComplex, __Log2N0: number, __Log2N1: number, __Direction: number): void;

declare function vDSP_fft_zip(__Setup: any, __C: DSPSplitComplex, __IC: number, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zipD(__Setup: any, __C: DSPDoubleSplitComplex, __IC: number, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zipt(__Setup: any, __C: DSPSplitComplex, __IC: number, __Buffer: DSPSplitComplex, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_ziptD(__Setup: any, __C: DSPDoubleSplitComplex, __IC: number, __Buffer: DSPDoubleSplitComplex, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zop(__Setup: any, __A: DSPSplitComplex, __IA: number, __C: DSPSplitComplex, __IC: number, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zopD(__Setup: any, __A: DSPDoubleSplitComplex, __IA: number, __C: DSPDoubleSplitComplex, __IC: number, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zopt(__Setup: any, __A: DSPSplitComplex, __IA: number, __C: DSPSplitComplex, __IC: number, __Buffer: DSPSplitComplex, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zoptD(__Setup: any, __A: DSPDoubleSplitComplex, __IA: number, __C: DSPDoubleSplitComplex, __IC: number, __Buffer: DSPDoubleSplitComplex, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zrip(__Setup: any, __C: DSPSplitComplex, __IC: number, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zripD(__Setup: any, __C: DSPDoubleSplitComplex, __IC: number, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zript(__Setup: any, __C: DSPSplitComplex, __IC: number, __Buffer: DSPSplitComplex, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zriptD(__Setup: any, __C: DSPDoubleSplitComplex, __IC: number, __Buffer: DSPDoubleSplitComplex, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zrop(__Setup: any, __A: DSPSplitComplex, __IA: number, __C: DSPSplitComplex, __IC: number, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zropD(__Setup: any, __A: DSPDoubleSplitComplex, __IA: number, __C: DSPDoubleSplitComplex, __IC: number, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zropt(__Setup: any, __A: DSPSplitComplex, __IA: number, __C: DSPSplitComplex, __IC: number, __Buffer: DSPSplitComplex, __Log2N: number, __Direction: number): void;

declare function vDSP_fft_zroptD(__Setup: any, __A: DSPDoubleSplitComplex, __IA: number, __C: DSPDoubleSplitComplex, __IC: number, __Buffer: DSPDoubleSplitComplex, __Log2N: number, __Direction: number): void;

declare function vDSP_fftm_zip(__Setup: any, __C: DSPSplitComplex, __IC: number, __IM: number, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zipD(__Setup: any, __C: DSPDoubleSplitComplex, __IC: number, __IM: number, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zipt(__Setup: any, __C: DSPSplitComplex, __IC: number, __IM: number, __Buffer: DSPSplitComplex, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_ziptD(__Setup: any, __C: DSPDoubleSplitComplex, __IC: number, __IM: number, __Buffer: DSPDoubleSplitComplex, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zop(__Setup: any, __A: DSPSplitComplex, __IA: number, __IMA: number, __C: DSPSplitComplex, __IC: number, __IMC: number, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zopD(__Setup: any, __A: DSPDoubleSplitComplex, __IA: number, __IMA: number, __C: DSPDoubleSplitComplex, __IC: number, __IMC: number, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zopt(__Setup: any, __A: DSPSplitComplex, __IA: number, __IMA: number, __C: DSPSplitComplex, __IC: number, __IMC: number, __Buffer: DSPSplitComplex, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zoptD(__Setup: any, __A: DSPDoubleSplitComplex, __IA: number, __IMA: number, __C: DSPDoubleSplitComplex, __IC: number, __IMC: number, __Buffer: DSPDoubleSplitComplex, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zrip(__Setup: any, __C: DSPSplitComplex, __IC: number, __IM: number, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zripD(__Setup: any, __C: DSPDoubleSplitComplex, __IC: number, __IM: number, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zript(__Setup: any, __C: DSPSplitComplex, __IC: number, __IM: number, __Buffer: DSPSplitComplex, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zriptD(__Setup: any, __C: DSPDoubleSplitComplex, __IC: number, __IM: number, __Buffer: DSPDoubleSplitComplex, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zrop(__Setup: any, __A: DSPSplitComplex, __IA: number, __IMA: number, __C: DSPSplitComplex, __IC: number, __IMC: number, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zropD(__Setup: any, __A: DSPDoubleSplitComplex, __IA: number, __IMA: number, __C: DSPDoubleSplitComplex, __IC: number, __IMC: number, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zropt(__Setup: any, __A: DSPSplitComplex, __IA: number, __IMA: number, __C: DSPSplitComplex, __IC: number, __IMC: number, __Buffer: DSPSplitComplex, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_fftm_zroptD(__Setup: any, __A: DSPDoubleSplitComplex, __IA: number, __IMA: number, __C: DSPDoubleSplitComplex, __IC: number, __IMC: number, __Buffer: DSPDoubleSplitComplex, __Log2N: number, __M: number, __Direction: number): void;

declare function vDSP_hamm_window(__C: number, __N: number, __Flag: number): void;

declare function vDSP_hamm_windowD(__C: number, __N: number, __Flag: number): void;

declare function vDSP_hann_window(__C: number, __N: number, __Flag: number): void;

declare function vDSP_hann_windowD(__C: number, __N: number, __Flag: number): void;

declare function vDSP_imgfir(__A: number, __NR: number, __NC: number, __F: number, __C: number, __P: number, __Q: number): void;

declare function vDSP_imgfirD(__A: number, __NR: number, __NC: number, __F: number, __C: number, __P: number, __Q: number): void;

interface vDSP_int24 {
	bytes: number;
}
declare var vDSP_int24: vDSP_int24;

declare function vDSP_maxmgv(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_maxmgvD(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_maxmgvi(__A: number, __IA: number, __C: number, __I: number, __N: number): void;

declare function vDSP_maxmgviD(__A: number, __IA: number, __C: number, __I: number, __N: number): void;

declare function vDSP_maxv(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_maxvD(__A: number, __I: number, __C: number, __N: number): void;

declare function vDSP_maxvi(__A: number, __IA: number, __C: number, __I: number, __N: number): void;

declare function vDSP_maxviD(__A: number, __IA: number, __C: number, __I: number, __N: number): void;

declare function vDSP_meamgv(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_meamgvD(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_meanv(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_meanvD(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_measqv(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_measqvD(__A: number, __I: number, __C: number, __N: number): void;

declare function vDSP_minmgv(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_minmgvD(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_minmgvi(__A: number, __IA: number, __C: number, __I: number, __N: number): void;

declare function vDSP_minmgviD(__A: number, __IA: number, __C: number, __I: number, __N: number): void;

declare function vDSP_minv(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_minvD(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_minvi(__A: number, __IA: number, __C: number, __I: number, __N: number): void;

declare function vDSP_minviD(__A: number, __IA: number, __C: number, __I: number, __N: number): void;

declare function vDSP_mmov(__A: number, __C: number, __M: number, __N: number, __TA: number, __TC: number): void;

declare function vDSP_mmovD(__A: number, __C: number, __M: number, __N: number, __TA: number, __TC: number): void;

declare function vDSP_mmul(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __M: number, __N: number, __P: number): void;

declare function vDSP_mmulD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __M: number, __N: number, __P: number): void;

declare function vDSP_mtrans(__A: number, __IA: number, __C: number, __IC: number, __M: number, __N: number): void;

declare function vDSP_mtransD(__A: number, __IA: number, __C: number, __IC: number, __M: number, __N: number): void;

declare function vDSP_mvessq(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_mvessqD(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_normalize(__A: number, __IA: number, __C: number, __IC: number, __Mean: number, __StandardDeviation: number, __N: number): void;

declare function vDSP_normalizeD(__A: number, __IA: number, __C: number, __IC: number, __Mean: number, __StandardDeviation: number, __N: number): void;

declare function vDSP_nzcros(__A: number, __IA: number, __B: number, __C: number, __D: number, __N: number): void;

declare function vDSP_nzcrosD(__A: number, __IA: number, __B: number, __C: number, __D: number, __N: number): void;

declare function vDSP_polar(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_polarD(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_rect(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_rectD(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_rmsqv(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_rmsqvD(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_svdiv(__A: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_svdivD(__A: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_sve(__A: number, __I: number, __C: number, __N: number): void;

declare function vDSP_sveD(__A: number, __I: number, __C: number, __N: number): void;

declare function vDSP_sve_svesq(__A: number, __IA: number, __Sum: number, __SumOfSquares: number, __N: number): void;

declare function vDSP_sve_svesqD(__A: number, __IA: number, __Sum: number, __SumOfSquares: number, __N: number): void;

declare function vDSP_svemg(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_svemgD(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_svesq(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_svesqD(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_svs(__A: number, __IA: number, __C: number, __N: number): void;

declare function vDSP_svsD(__A: number, __IA: number, __C: number, __N: number): void;

interface vDSP_uint24 {
	bytes: number;
}
declare var vDSP_uint24: vDSP_uint24;

declare function vDSP_vaam(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vaamD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vabs(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vabsD(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vabsi(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vadd(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vaddD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vaddi(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vaddsub(__I0: number, __I0S: number, __I1: number, __I1S: number, __O0: number, __O0S: number, __O1: number, __O1S: number, __N: number): void;

declare function vDSP_vaddsubD(__I0: number, __I0S: number, __I1: number, __I1S: number, __O0: number, __O0S: number, __O1: number, __O1S: number, __N: number): void;

declare function vDSP_vam(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vamD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __IDD: number, __N: number): void;

declare function vDSP_vasbm(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vasbmD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vasm(__A: number, __IA: number, __B: number, __IB: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vasmD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vavlin(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vavlinD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vclip(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vclipD(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vclipc(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number, __NLow: number, __NHigh: number): void;

declare function vDSP_vclipcD(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number, __NLow: number, __NHigh: number): void;

declare function vDSP_vclr(__C: number, __IC: number, __N: number): void;

declare function vDSP_vclrD(__C: number, __IC: number, __N: number): void;

declare function vDSP_vcmprs(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vcmprsD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vdbcon(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number, __F: number): void;

declare function vDSP_vdbconD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number, __F: number): void;

declare function vDSP_vdist(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vdistD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vdiv(__B: number, __IB: number, __A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vdivD(__B: number, __IB: number, __A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vdivi(__B: number, __IB: number, __A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vdpsp(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_venvlp(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_venvlpD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_veqvi(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfill(__A: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfillD(__A: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfilli(__A: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfix16(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfix16D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfix32(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfix32D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfix8(__A: number, __IA: number, __C: string | any, __IC: number, __N: number): void;

declare function vDSP_vfix8D(__A: number, __IA: number, __C: string | any, __IC: number, __N: number): void;

declare function vDSP_vfixr16(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixr16D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixr32(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixr32D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixr8(__A: number, __IA: number, __C: string | any, __IC: number, __N: number): void;

declare function vDSP_vfixr8D(__A: number, __IA: number, __C: string | any, __IC: number, __N: number): void;

declare function vDSP_vfixru16(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixru16D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixru32(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixru32D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixru8(__A: number, __IA: number, __C: string | any, __IC: number, __N: number): void;

declare function vDSP_vfixru8D(__A: number, __IA: number, __C: string | any, __IC: number, __N: number): void;

declare function vDSP_vfixu16(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixu16D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixu32(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixu32D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfixu8(__A: number, __IA: number, __C: string | any, __IC: number, __N: number): void;

declare function vDSP_vfixu8D(__A: number, __IA: number, __C: string | any, __IC: number, __N: number): void;

declare function vDSP_vflt16(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vflt16D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vflt24(__A: vDSP_int24, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vflt32(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vflt32D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vflt8(__A: string | any, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vflt8D(__A: string | any, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfltsm24(__A: vDSP_int24, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfltsmu24(__A: vDSP_uint24, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfltu16(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfltu16D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfltu24(__A: vDSP_uint24, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfltu32(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfltu32D(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfltu8(__A: string | any, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfltu8D(__A: string | any, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfrac(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vfracD(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vgathr(__A: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vgathrD(__A: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vgathra(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vgathraD(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vgen(__A: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vgenD(__A: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vgenp(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number, __M: number): void;

declare function vDSP_vgenpD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number, __M: number): void;

declare function vDSP_viclip(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_viclipD(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vindex(__A: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vindexD(__A: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vintb(__A: number, __IA: number, __B: number, __IB: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vintbD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vlim(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vlimD(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vlint(__A: number, __B: number, __IB: number, __C: number, __IC: number, __N: number, __M: number): void;

declare function vDSP_vlintD(__A: number, __B: number, __IB: number, __C: number, __IC: number, __N: number, __M: number): void;

declare function vDSP_vma(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vmaD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vmax(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vmaxD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vmaxmg(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vmaxmgD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vmin(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vminD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vminmg(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vminmgD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vmma(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vmmaD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vmmsb(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vmmsbD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vmsa(__A: number, __IA: number, __B: number, __IB: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vmsaD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vmsb(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vmsbD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vmul(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vmulD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vnabs(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vnabsD(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vneg(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vnegD(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vpoly(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number, __P: number): void;

declare function vDSP_vpolyD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number, __P: number): void;

declare function vDSP_vpythg(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vpythgD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vqint(__A: number, __B: number, __IB: number, __C: number, __IC: number, __N: number, __M: number): void;

declare function vDSP_vqintD(__A: number, __B: number, __IB: number, __C: number, __IC: number, __N: number, __M: number): void;

declare function vDSP_vramp(__A: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vrampD(__A: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vrampmul(__I: number, __IS: number, __Start: number, __Step: number, __O: number, __OS: number, __N: number): void;

declare function vDSP_vrampmul2(__I0: number, __I1: number, __IS: number, __Start: number, __Step: number, __O0: number, __O1: number, __OS: number, __N: number): void;

declare function vDSP_vrampmul2D(__I0: number, __I1: number, __IS: number, __Start: number, __Step: number, __O0: number, __O1: number, __OS: number, __N: number): void;

declare function vDSP_vrampmul2_s1_15(__I0: number, __I1: number, __IS: number, __Start: number, __Step: number, __O0: number, __O1: number, __OS: number, __N: number): void;

declare function vDSP_vrampmul2_s8_24(__I0: number, __I1: number, __IS: number, __Start: number, __Step: number, __O0: number, __O1: number, __OS: number, __N: number): void;

declare function vDSP_vrampmulD(__I: number, __IS: number, __Start: number, __Step: number, __O: number, __OS: number, __N: number): void;

declare function vDSP_vrampmul_s1_15(__I: number, __IS: number, __Start: number, __Step: number, __O: number, __OS: number, __N: number): void;

declare function vDSP_vrampmul_s8_24(__I: number, __IS: number, __Start: number, __Step: number, __O: number, __OS: number, __N: number): void;

declare function vDSP_vrampmuladd(__I: number, __IS: number, __Start: number, __Step: number, __O: number, __OS: number, __N: number): void;

declare function vDSP_vrampmuladd2(__I0: number, __I1: number, __IS: number, __Start: number, __Step: number, __O0: number, __O1: number, __OS: number, __N: number): void;

declare function vDSP_vrampmuladd2D(__I0: number, __I1: number, __IS: number, __Start: number, __Step: number, __O0: number, __O1: number, __OS: number, __N: number): void;

declare function vDSP_vrampmuladd2_s1_15(__I0: number, __I1: number, __IS: number, __Start: number, __Step: number, __O0: number, __O1: number, __OS: number, __N: number): void;

declare function vDSP_vrampmuladd2_s8_24(__I0: number, __I1: number, __IS: number, __Start: number, __Step: number, __O0: number, __O1: number, __OS: number, __N: number): void;

declare function vDSP_vrampmuladdD(__I: number, __IS: number, __Start: number, __Step: number, __O: number, __OS: number, __N: number): void;

declare function vDSP_vrampmuladd_s1_15(__I: number, __IS: number, __Start: number, __Step: number, __O: number, __OS: number, __N: number): void;

declare function vDSP_vrampmuladd_s8_24(__I: number, __IS: number, __Start: number, __Step: number, __O: number, __OS: number, __N: number): void;

declare function vDSP_vrsum(__A: number, __IA: number, __S: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vrsumD(__A: number, __IA: number, __S: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vrvrs(__C: number, __IC: number, __N: number): void;

declare function vDSP_vrvrsD(__C: number, __IC: number, __N: number): void;

declare function vDSP_vsadd(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsaddD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsaddi(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsbm(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vsbmD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vsbsbm(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vsbsbmD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __D: number, __ID: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vsbsm(__A: number, __IA: number, __B: number, __IB: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vsbsmD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vsdiv(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsdivD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsdivi(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsimps(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsimpsD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsma(__A: number, __IA: number, __B: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vsmaD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vsmfix24(__A: number, __IA: number, __B: number, __C: vDSP_int24, __IC: number, __N: number): void;

declare function vDSP_vsmfixu24(__A: number, __IA: number, __B: number, __C: vDSP_uint24, __IC: number, __N: number): void;

declare function vDSP_vsmsa(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vsmsaD(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vsmsb(__A: number, __IA: number, __B: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vsmsbD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vsmsma(__A: number, __IA: number, __B: number, __C: number, __IC: number, __D: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vsmsmaD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __D: number, __E: number, __IE: number, __N: number): void;

declare function vDSP_vsmul(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsmulD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsort(__C: number, __N: number, __Order: number): void;

declare function vDSP_vsortD(__C: number, __N: number, __Order: number): void;

declare function vDSP_vsorti(__C: number, __I: number, __Temporary: number, __N: number, __Order: number): void;

declare function vDSP_vsortiD(__C: number, __I: number, __Temporary: number, __N: number, __Order: number): void;

declare function vDSP_vspdp(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsq(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsqD(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vssq(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vssqD(__A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsub(__B: number, __IB: number, __A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vsubD(__B: number, __IB: number, __A: number, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vswap(__A: number, __IA: number, __B: number, __IB: number, __N: number): void;

declare function vDSP_vswapD(__A: number, __IA: number, __B: number, __IB: number, __N: number): void;

declare function vDSP_vswmax(__A: number, __IA: number, __C: number, __IC: number, __N: number, __WindowLength: number): void;

declare function vDSP_vswmaxD(__A: number, __IA: number, __C: number, __IC: number, __N: number, __WindowLength: number): void;

declare function vDSP_vswsum(__A: number, __IA: number, __C: number, __IC: number, __N: number, __P: number): void;

declare function vDSP_vswsumD(__A: number, __IA: number, __C: number, __IC: number, __N: number, __P: number): void;

declare function vDSP_vtabi(__A: number, __IA: number, __S1: number, __S2: number, __C: number, __M: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vtabiD(__A: number, __IA: number, __S1: number, __S2: number, __C: number, __M: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vthr(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vthrD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vthres(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vthresD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vthrsc(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vthrscD(__A: number, __IA: number, __B: number, __C: number, __D: number, __ID: number, __N: number): void;

declare function vDSP_vtmerg(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vtmergD(__A: number, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vtrapz(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_vtrapzD(__A: number, __IA: number, __B: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_wiener(__L: number, __A: number, __C: number, __F: number, __P: number, __Flag: number, __Error: number): void;

declare function vDSP_wienerD(__L: number, __A: number, __C: number, __F: number, __P: number, __Flag: number, __Error: number): void;

declare function vDSP_zaspec(__A: DSPSplitComplex, __C: number, __N: number): void;

declare function vDSP_zaspecD(__A: DSPDoubleSplitComplex, __C: number, __N: number): void;

declare function vDSP_zcoher(__A: number, __B: number, __C: DSPSplitComplex, __D: number, __N: number): void;

declare function vDSP_zcoherD(__A: number, __B: number, __C: DSPDoubleSplitComplex, __D: number, __N: number): void;

declare function vDSP_zconv(__A: DSPSplitComplex, __IA: number, __F: DSPSplitComplex, __IF: number, __C: DSPSplitComplex, __IC: number, __N: number, __P: number): void;

declare function vDSP_zconvD(__A: DSPDoubleSplitComplex, __IA: number, __F: DSPDoubleSplitComplex, __IF: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number, __P: number): void;

declare function vDSP_zcspec(__A: DSPSplitComplex, __B: DSPSplitComplex, __C: DSPSplitComplex, __N: number): void;

declare function vDSP_zcspecD(__A: DSPDoubleSplitComplex, __B: DSPDoubleSplitComplex, __C: DSPDoubleSplitComplex, __N: number): void;

declare function vDSP_zdotpr(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __N: number): void;

declare function vDSP_zdotprD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __N: number): void;

declare function vDSP_zidotpr(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __N: number): void;

declare function vDSP_zidotprD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __N: number): void;

declare function vDSP_zmma(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __D: DSPSplitComplex, __ID: number, __M: number, __N: number, __P: number): void;

declare function vDSP_zmmaD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __D: DSPDoubleSplitComplex, __ID: number, __M: number, __N: number, __P: number): void;

declare function vDSP_zmms(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __D: DSPSplitComplex, __ID: number, __M: number, __N: number, __P: number): void;

declare function vDSP_zmmsD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __D: DSPDoubleSplitComplex, __ID: number, __M: number, __N: number, __P: number): void;

declare function vDSP_zmmul(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __M: number, __N: number, __P: number): void;

declare function vDSP_zmmulD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __M: number, __N: number, __P: number): void;

declare function vDSP_zmsm(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __D: DSPSplitComplex, __ID: number, __M: number, __N: number, __P: number): void;

declare function vDSP_zmsmD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __D: DSPDoubleSplitComplex, __ID: number, __M: number, __N: number, __P: number): void;

declare function vDSP_zrdesamp(__A: DSPSplitComplex, __DF: number, __F: number, __C: DSPSplitComplex, __N: number, __P: number): void;

declare function vDSP_zrdesampD(__A: DSPDoubleSplitComplex, __DF: number, __F: number, __C: DSPDoubleSplitComplex, __N: number, __P: number): void;

declare function vDSP_zrdotpr(__A: DSPSplitComplex, __IA: number, __B: number, __IB: number, __C: DSPSplitComplex, __N: number): void;

declare function vDSP_zrdotprD(__A: DSPDoubleSplitComplex, __IA: number, __B: number, __IB: number, __C: DSPDoubleSplitComplex, __N: number): void;

declare function vDSP_zrvadd(__A: DSPSplitComplex, __IA: number, __B: number, __IB: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zrvaddD(__A: DSPDoubleSplitComplex, __IA: number, __B: number, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zrvdiv(__A: DSPSplitComplex, __IA: number, __B: number, __IB: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zrvdivD(__A: DSPDoubleSplitComplex, __IA: number, __B: number, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zrvmul(__A: DSPSplitComplex, __IA: number, __B: number, __IB: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zrvmulD(__A: DSPDoubleSplitComplex, __IA: number, __B: number, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zrvsub(__A: DSPSplitComplex, __IA: number, __B: number, __IB: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zrvsubD(__A: DSPDoubleSplitComplex, __IA: number, __B: number, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_ztoc(__Z: DSPSplitComplex, __IZ: number, __C: DSPComplex, __IC: number, __N: number): void;

declare function vDSP_ztocD(__Z: DSPDoubleSplitComplex, __IZ: number, __C: DSPDoubleComplex, __IC: number, __N: number): void;

declare function vDSP_ztrans(__A: number, __B: DSPSplitComplex, __C: DSPSplitComplex, __N: number): void;

declare function vDSP_ztransD(__A: number, __B: DSPDoubleSplitComplex, __C: DSPDoubleSplitComplex, __N: number): void;

declare function vDSP_zvabs(__A: DSPSplitComplex, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_zvabsD(__A: DSPDoubleSplitComplex, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_zvadd(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvaddD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvcma(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __D: DSPSplitComplex, __ID: number, __N: number): void;

declare function vDSP_zvcmaD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __D: DSPDoubleSplitComplex, __ID: number, __N: number): void;

declare function vDSP_zvcmul(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvcmulD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __iC: number, __N: number): void;

declare function vDSP_zvconj(__A: DSPSplitComplex, __IA: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvconjD(__A: DSPDoubleSplitComplex, __IA: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvdiv(__B: DSPSplitComplex, __IB: number, __A: DSPSplitComplex, __IA: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvdivD(__B: DSPDoubleSplitComplex, __IB: number, __A: DSPDoubleSplitComplex, __IA: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvfill(__A: DSPSplitComplex, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvfillD(__A: DSPDoubleSplitComplex, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvma(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __D: DSPSplitComplex, __ID: number, __N: number): void;

declare function vDSP_zvmaD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __D: DSPDoubleSplitComplex, __ID: number, __N: number): void;

declare function vDSP_zvmags(__A: DSPSplitComplex, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_zvmagsD(__A: DSPDoubleSplitComplex, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_zvmgsa(__A: DSPSplitComplex, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_zvmgsaD(__A: DSPDoubleSplitComplex, __IA: number, __B: number, __IB: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_zvmmaa(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __D: DSPSplitComplex, __ID: number, __E: DSPSplitComplex, __IE: number, __F: DSPSplitComplex, __IF: number, __N: number): void;

declare function vDSP_zvmmaaD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __D: DSPDoubleSplitComplex, __ID: number, __E: DSPDoubleSplitComplex, __IE: number, __F: DSPDoubleSplitComplex, __IF: number, __N: number): void;

declare function vDSP_zvmov(__A: DSPSplitComplex, __IA: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvmovD(__A: DSPDoubleSplitComplex, __IA: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvmul(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __N: number, __Conjugate: number): void;

declare function vDSP_zvmulD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number, __Conjugate: number): void;

declare function vDSP_zvneg(__A: DSPSplitComplex, __IA: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvnegD(__A: DSPDoubleSplitComplex, __IA: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvphas(__A: DSPSplitComplex, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_zvphasD(__A: DSPDoubleSplitComplex, __IA: number, __C: number, __IC: number, __N: number): void;

declare function vDSP_zvsma(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __C: DSPSplitComplex, __IC: number, __D: DSPSplitComplex, __ID: number, __N: number): void;

declare function vDSP_zvsmaD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __C: DSPDoubleSplitComplex, __IC: number, __D: DSPDoubleSplitComplex, __ID: number, __N: number): void;

declare function vDSP_zvsub(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __IB: number, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvsubD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __IB: number, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvzsml(__A: DSPSplitComplex, __IA: number, __B: DSPSplitComplex, __C: DSPSplitComplex, __IC: number, __N: number): void;

declare function vDSP_zvzsmlD(__A: DSPDoubleSplitComplex, __IA: number, __B: DSPDoubleSplitComplex, __C: DSPDoubleSplitComplex, __IC: number, __N: number): void;

enum vImageARGBType {

	kvImageARGB8888 = 0,

	kvImageARGB16U = 1,

	kvImageARGB16Q12 = 2
}


declare function vImageAffineWarpCG_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpCG_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpCG_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpCG_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpCG_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpCG_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpD_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpD_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpD_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpD_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpD_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarpD_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform_Double, backColor: number, flags: number): number;

declare function vImageAffineWarp_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform, backColor: number, flags: number): number;

declare function vImageAffineWarp_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform, backColor: number, flags: number): number;

declare function vImageAffineWarp_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform, backColor: number, flags: number): number;

declare function vImageAffineWarp_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform, backColor: number, flags: number): number;

declare function vImageAffineWarp_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform, backColor: number, flags: number): number;

declare function vImageAffineWarp_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, transform: vImage_AffineTransform, backColor: number, flags: number): number;

declare function vImageAlphaBlend_ARGB8888(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageAlphaBlend_ARGBFFFF(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageAlphaBlend_NonpremultipliedToPremultiplied_ARGB8888(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageAlphaBlend_NonpremultipliedToPremultiplied_ARGBFFFF(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageAlphaBlend_NonpremultipliedToPremultiplied_Planar8(srcTop: vImage_Buffer, srcTopAlpha: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageAlphaBlend_NonpremultipliedToPremultiplied_PlanarF(srcTop: vImage_Buffer, srcTopAlpha: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageAlphaBlend_Planar8(srcTop: vImage_Buffer, srcTopAlpha: vImage_Buffer, srcBottom: vImage_Buffer, srcBottomAlpha: vImage_Buffer, alpha: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageAlphaBlend_PlanarF(srcTop: vImage_Buffer, srcTopAlpha: vImage_Buffer, srcBottom: vImage_Buffer, srcBottomAlpha: vImage_Buffer, alpha: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageBoxConvolve_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, backgroundColor: number, flags: number): number;

declare function vImageBoxConvolve_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, backgroundColor: number, flags: number): number;

declare function vImageBufferFill_ARGB16S(dest: vImage_Buffer, color: number, flags: number): number;

declare function vImageBufferFill_ARGB16U(dest: vImage_Buffer, color: number, flags: number): number;

declare function vImageBufferFill_ARGB8888(dest: vImage_Buffer, color: number, flags: number): number;

declare function vImageBufferFill_ARGBFFFF(dest: vImage_Buffer, color: number, flags: number): number;

declare function vImageBufferFill_CbCr16U(dest: vImage_Buffer, color: number, flags: number): number;

declare function vImageBufferFill_CbCr8(dest: vImage_Buffer, color: number, flags: number): number;

declare function vImageBuffer_CopyToCVPixelBuffer(buffer: vImage_Buffer, bufferFormat: vImage_CGImageFormat, cvPixelBuffer: any, cvImageFormat: any, backgroundColor: number, flags: number): number;

declare function vImageBuffer_GetSize(buf: vImage_Buffer): CGSize;

declare function vImageBuffer_Init(buf: vImage_Buffer, height: number, width: number, pixelBits: number, flags: number): number;

declare function vImageBuffer_InitForCopyFromCVPixelBuffer(buffers: vImage_Buffer, converter: any, pixelBuffer: any, flags: number): number;

declare function vImageBuffer_InitForCopyToCVPixelBuffer(buffers: vImage_Buffer, converter: any, pixelBuffer: any, flags: number): number;

declare function vImageBuffer_InitWithCGImage(buf: vImage_Buffer, format: vImage_CGImageFormat, backgroundColor: number, image: any, flags: number): number;

declare function vImageBuffer_InitWithCVPixelBuffer(buffer: vImage_Buffer, desiredFormat: vImage_CGImageFormat, cvPixelBuffer: any, cvImageFormat: any, backgroundColor: number, flags: number): number;

declare function vImageByteSwap_Planar16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageCGImageFormat_GetComponentCount(format: vImage_CGImageFormat): number;

declare function vImageCGImageFormat_IsEqual(f1: vImage_CGImageFormat, f2: vImage_CGImageFormat): boolean;

declare function vImageCVImageFormat_Copy(format: any): any;

declare function vImageCVImageFormat_CopyChannelDescription(format: any, desc: vImageChannelDescription, type: number): number;

declare function vImageCVImageFormat_CopyConversionMatrix(format: any, matrix: any, inType: number): number;

declare function vImageCVImageFormat_Create(imageFormatType: number, matrix: vImage_ARGBToYpCbCrMatrix, cvImageBufferChromaLocation: string, baseColorspace: any, alphaIsOneHint: number): any;

declare function vImageCVImageFormat_CreateWithCVPixelBuffer(buffer: any): any;

declare function vImageCVImageFormat_GetAlphaHint(format: any): number;

declare function vImageCVImageFormat_GetChannelCount(format: any): number;

declare function vImageCVImageFormat_GetChannelDescription(format: any, type: number): vImageChannelDescription;

declare function vImageCVImageFormat_GetChannelNames(format: any): number;

declare function vImageCVImageFormat_GetChromaSiting(format: any): string;

declare function vImageCVImageFormat_GetColorSpace(format: any): any;

declare function vImageCVImageFormat_GetConversionMatrix(format: any, outType: number): any;

declare function vImageCVImageFormat_GetFormatCode(format: any): number;

declare function vImageCVImageFormat_GetUserData(format: any): any;

declare function vImageCVImageFormat_Release(fmt: any): void;

declare function vImageCVImageFormat_Retain(fmt: any): void;

declare function vImageCVImageFormat_SetAlphaHint(format: any, alphaIsOne: number): number;

declare function vImageCVImageFormat_SetChromaSiting(format: any, siting: string): number;

declare function vImageCVImageFormat_SetColorSpace(format: any, colorspace: any): number;

declare function vImageCVImageFormat_SetUserData(format: any, userData: any, userDataReleaseCallback: (p1: any, p2: any) => void): number;

interface vImageChannelDescription {
	min: number;
	zero: number;
	full: number;
	max: number;
}
declare var vImageChannelDescription: vImageChannelDescription;

declare function vImageClipToAlpha_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageClipToAlpha_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageClipToAlpha_Planar8(src: vImage_Buffer, alpha: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageClipToAlpha_PlanarF(src: vImage_Buffer, alpha: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageClipToAlpha_RGBA8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageClipToAlpha_RGBAFFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageClip_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageContrastStretch_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageContrastStretch_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, histogram_entries: number, minVal: number, maxVal: number, flags: number): number;

declare function vImageContrastStretch_Planar8(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageContrastStretch_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, histogram_entries: number, minVal: number, maxVal: number, flags: number): number;

declare function vImageConvert_12UTo16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_16Fto16Q12(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_16Fto16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_16Q12to16F(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_16Q12to16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_16Q12to8(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_16Q12toF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_16SToF(src: vImage_Buffer, dest: vImage_Buffer, offset: number, scale: number, flags: number): number;

declare function vImageConvert_16UTo12U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_16UToF(src: vImage_Buffer, dest: vImage_Buffer, offset: number, scale: number, flags: number): number;

declare function vImageConvert_16UToPlanar8(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_16Uto16F(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_16Uto16Q12(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_420Yp8_Cb8_Cr8ToARGB8888(srcYp: vImage_Buffer, srcCb: vImage_Buffer, srcCr: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_420Yp8_CbCr8ToARGB8888(srcYp: vImage_Buffer, srcCbCr: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_422CbYpCrYp16ToARGB16U(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_422CbYpCrYp16ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_422CbYpCrYp8ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_422CbYpCrYp8_AA8ToARGB8888(src: vImage_Buffer, srcA: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, flags: number): number;

declare function vImageConvert_422CrYpCbYpCbYpCbYpCrYpCrYp10ToARGB16Q12(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_422CrYpCbYpCbYpCbYpCrYpCrYp10ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_422YpCbYpCr8ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_444AYpCbCr16ToARGB16U(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, flags: number): number;

declare function vImageConvert_444AYpCbCr16ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, flags: number): number;

declare function vImageConvert_444AYpCbCr8ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, flags: number): number;

declare function vImageConvert_444CbYpCrA8ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, flags: number): number;

declare function vImageConvert_444CrYpCb10ToARGB16Q12(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_444CrYpCb10ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_444CrYpCb8ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_YpCbCrToARGB, permuteMap: number, alpha: number, flags: number): number;

declare function vImageConvert_8to16Q12(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGB1555toARGB8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGB1555toPlanar8(src: vImage_Buffer, destA: vImage_Buffer, destR: vImage_Buffer, destG: vImage_Buffer, destB: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGB1555toRGB565(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGB16Q12To422CrYpCbYpCbYpCbYpCrYpCrYp10(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16Q12To444CrYpCb10(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16Q12ToARGB2101010(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, RGB101010Min: number, RGB101010Max: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16Q12ToRGBA1010102(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, RGB101010Min: number, RGB101010Max: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16Q12ToXRGB2101010(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, RGB101010Min: number, RGB101010Max: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16UTo422CbYpCrYp16(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16UTo444AYpCbCr16(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16UToARGB2101010(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16UToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, copyMask: number, backgroundColor: number, flags: number): number;

declare function vImageConvert_ARGB16UToRGBA1010102(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16UToXRGB2101010(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16UtoARGB8888_dithered(src: vImage_Buffer, dest: vImage_Buffer, dither: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB16UtoPlanar16U(argbSrc: vImage_Buffer, aDest: vImage_Buffer, rDest: vImage_Buffer, gDest: vImage_Buffer, bDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGB16UtoRGB16U(argbSrc: vImage_Buffer, rgbDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGB2101010ToARGB16F(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB2101010ToARGB16Q12(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB2101010ToARGB16U(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB2101010ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB2101010ToARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To420Yp8_Cb8_Cr8(src: vImage_Buffer, destYp: vImage_Buffer, destCb: vImage_Buffer, destCr: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To420Yp8_CbCr8(src: vImage_Buffer, destYp: vImage_Buffer, destCbCr: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To422CbYpCrYp16(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To422CbYpCrYp8(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To422CbYpCrYp8_AA8(src: vImage_Buffer, dest: vImage_Buffer, destA: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To422CrYpCbYpCbYpCbYpCrYpCrYp10(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To422YpCbYpCr8(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To444AYpCbCr16(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To444AYpCbCr8(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To444CbYpCrA8(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To444CrYpCb10(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888To444CrYpCb8(src: vImage_Buffer, dest: vImage_Buffer, info: vImage_ARGBToYpCbCr, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888ToARGB16U(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, copyMask: number, backgroundColor: number, flags: number): number;

declare function vImageConvert_ARGB8888ToARGB2101010(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888ToRGB16U(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, copyMask: number, backgroundColor: number, flags: number): number;

declare function vImageConvert_ARGB8888ToRGBA1010102(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888ToXRGB2101010(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGB8888toARGB1555(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGB8888toARGB1555_dithered(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, dither: number, flags: number): number;

declare function vImageConvert_ARGB8888toPlanar16Q12(src: vImage_Buffer, alpha: vImage_Buffer, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGB8888toPlanar8(srcARGB: vImage_Buffer, destA: vImage_Buffer, destR: vImage_Buffer, destG: vImage_Buffer, destB: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGB8888toPlanarF(src: vImage_Buffer, alpha: vImage_Buffer, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageConvert_ARGB8888toRGB565(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGB8888toRGB565_dithered(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, dither: number, flags: number): number;

declare function vImageConvert_ARGB8888toRGB888(p1: vImage_Buffer, p2: vImage_Buffer, p3: number): number;

declare function vImageConvert_ARGBFFFFToARGB2101010(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGBFFFFToXRGB2101010(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGBFFFFtoARGB8888_dithered(src: vImage_Buffer, dest: vImage_Buffer, maxFloat: number, minFloat: number, dither: number, permuteMap: number, flags: number): number;

declare function vImageConvert_ARGBFFFFtoPlanar8(src: vImage_Buffer, alpha: vImage_Buffer, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageConvert_ARGBFFFFtoPlanarF(srcARGB: vImage_Buffer, destA: vImage_Buffer, destR: vImage_Buffer, destG: vImage_Buffer, destB: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGBFFFFtoRGBFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_ARGBToYpCbCr_GenerateConversion(matrix: vImage_ARGBToYpCbCrMatrix, pixelRange: vImage_YpCbCrPixelRange, outInfo: vImage_ARGBToYpCbCr, inARGBType: vImageARGBType, outYpCbCrType: vImageYpCbCrType, flags: number): number;

declare function vImageConvert_AnyToAny(converter: any, srcs: vImage_Buffer, dests: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageConvert_BGRA16UtoRGB16U(bgraSrc: vImage_Buffer, rgbDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_BGRA8888toRGB565(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_BGRA8888toRGB565_dithered(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, dither: number, flags: number): number;

declare function vImageConvert_BGRA8888toRGB888(p1: vImage_Buffer, p2: vImage_Buffer, p3: number): number;

declare function vImageConvert_BGRAFFFFtoRGBFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_BGRX8888ToPlanar8(src: vImage_Buffer, blue: vImage_Buffer, green: vImage_Buffer, red: vImage_Buffer, flags: number): number;

declare function vImageConvert_BGRXFFFFToPlanarF(src: vImage_Buffer, blue: vImage_Buffer, green: vImage_Buffer, red: vImage_Buffer, flags: number): number;

declare function vImageConvert_ChunkyToPlanar8(srcChannels: any, destPlanarBuffers: vImage_Buffer, channelCount: number, srcStrideBytes: number, srcWidth: number, srcHeight: number, srcRowBytes: number, flags: number): number;

declare function vImageConvert_ChunkyToPlanarF(srcChannels: any, destPlanarBuffers: vImage_Buffer, channelCount: number, srcStrideBytes: number, srcWidth: number, srcHeight: number, srcRowBytes: number, flags: number): number;

declare function vImageConvert_FTo16S(src: vImage_Buffer, dest: vImage_Buffer, offset: number, scale: number, flags: number): number;

declare function vImageConvert_FTo16U(src: vImage_Buffer, dest: vImage_Buffer, offset: number, scale: number, flags: number): number;

declare function vImageConvert_Fto16Q12(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Indexed1toPlanar8(src: vImage_Buffer, dest: vImage_Buffer, colors: number, flags: number): number;

declare function vImageConvert_Indexed2toPlanar8(src: vImage_Buffer, dest: vImage_Buffer, colors: number, flags: number): number;

declare function vImageConvert_Indexed4toPlanar8(src: vImage_Buffer, dest: vImage_Buffer, colors: number, flags: number): number;

declare function vImageConvert_Planar16FtoPlanar8(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar16FtoPlanarF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar16Q12toARGB16F(alpha: vImage_Buffer, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar16Q12toARGB8888(alpha: vImage_Buffer, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar16Q12toRGB16F(red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar16Q12toRGB888(red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar16UtoARGB16U(aSrc: vImage_Buffer, rSrc: vImage_Buffer, gSrc: vImage_Buffer, bSrc: vImage_Buffer, argbDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar16UtoPlanar8_dithered(src: vImage_Buffer, dest: vImage_Buffer, dither: number, flags: number): number;

declare function vImageConvert_Planar16UtoRGB16U(rSrc: vImage_Buffer, gSrc: vImage_Buffer, bSrc: vImage_Buffer, rgbDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar1toPlanar8(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar2toPlanar8(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar4toPlanar8(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar8To16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar8ToARGBFFFF(alpha: vImage_Buffer, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, dest: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageConvert_Planar8ToBGRX8888(blue: vImage_Buffer, green: vImage_Buffer, red: vImage_Buffer, alpha: number, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar8ToBGRXFFFF(blue: vImage_Buffer, green: vImage_Buffer, red: vImage_Buffer, alpha: number, dest: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageConvert_Planar8ToXRGB8888(alpha: number, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar8ToXRGBFFFF(alpha: number, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, dest: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageConvert_Planar8toARGB1555(srcA: vImage_Buffer, srcR: vImage_Buffer, srcG: vImage_Buffer, srcB: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar8toARGB8888(srcA: vImage_Buffer, srcR: vImage_Buffer, srcG: vImage_Buffer, srcB: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar8toIndexed1(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, colors: number, dither: number, flags: number): number;

declare function vImageConvert_Planar8toIndexed2(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, colors: number, dither: number, flags: number): number;

declare function vImageConvert_Planar8toIndexed4(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, colors: number, dither: number, flags: number): number;

declare function vImageConvert_Planar8toPlanar1(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, dither: number, flags: number): number;

declare function vImageConvert_Planar8toPlanar16F(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar8toPlanar2(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, dither: number, flags: number): number;

declare function vImageConvert_Planar8toPlanar4(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, dither: number, flags: number): number;

declare function vImageConvert_Planar8toPlanarF(src: vImage_Buffer, dest: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageConvert_Planar8toRGB565(srcR: vImage_Buffer, srcG: vImage_Buffer, srcB: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_Planar8toRGB888(planarRed: vImage_Buffer, planarGreen: vImage_Buffer, planarBlue: vImage_Buffer, rgbDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_PlanarFToARGB8888(alpha: vImage_Buffer, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, dest: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageConvert_PlanarFToBGRX8888(blue: vImage_Buffer, green: vImage_Buffer, red: vImage_Buffer, alpha: number, dest: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageConvert_PlanarFToBGRXFFFF(blue: vImage_Buffer, green: vImage_Buffer, red: vImage_Buffer, alpha: number, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_PlanarFToXRGB8888(alpha: number, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, dest: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageConvert_PlanarFToXRGBFFFF(alpha: number, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_PlanarFtoARGBFFFF(srcA: vImage_Buffer, srcR: vImage_Buffer, srcG: vImage_Buffer, srcB: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_PlanarFtoPlanar16F(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_PlanarFtoPlanar8(src: vImage_Buffer, dest: vImage_Buffer, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageConvert_PlanarFtoPlanar8_dithered(src: vImage_Buffer, dest: vImage_Buffer, maxFloat: number, minFloat: number, dither: number, flags: number): number;

declare function vImageConvert_PlanarFtoRGBFFF(planarRed: vImage_Buffer, planarGreen: vImage_Buffer, planarBlue: vImage_Buffer, rgbDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_PlanarToChunky8(srcPlanarBuffers: vImage_Buffer, destChannels: any, channelCount: number, destStrideBytes: number, destWidth: number, destHeight: number, destRowBytes: number, flags: number): number;

declare function vImageConvert_PlanarToChunkyF(srcPlanarBuffers: vImage_Buffer, destChannels: any, channelCount: number, destStrideBytes: number, destWidth: number, destHeight: number, destRowBytes: number, flags: number): number;

declare function vImageConvert_RGB16UToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, copyMask: number, backgroundColor: number, flags: number): number;

declare function vImageConvert_RGB16UtoARGB16U(rgbSrc: vImage_Buffer, aSrc: vImage_Buffer, alpha: number, argbDest: vImage_Buffer, premultiply: boolean, flags: number): number;

declare function vImageConvert_RGB16UtoBGRA16U(rgbSrc: vImage_Buffer, aSrc: vImage_Buffer, alpha: number, bgraDest: vImage_Buffer, premultiply: boolean, flags: number): number;

declare function vImageConvert_RGB16UtoPlanar16U(rgbSrc: vImage_Buffer, rDest: vImage_Buffer, gDest: vImage_Buffer, bDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGB16UtoRGB888_dithered(src: vImage_Buffer, dest: vImage_Buffer, dither: number, flags: number): number;

declare function vImageConvert_RGB16UtoRGBA16U(rgbSrc: vImage_Buffer, aSrc: vImage_Buffer, alpha: number, rgbaDest: vImage_Buffer, premultiply: boolean, flags: number): number;

declare function vImageConvert_RGB565toARGB1555(src: vImage_Buffer, dest: vImage_Buffer, dither: number, flags: number): number;

declare function vImageConvert_RGB565toARGB8888(alpha: number, src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGB565toBGRA8888(alpha: number, src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGB565toPlanar8(src: vImage_Buffer, destR: vImage_Buffer, destG: vImage_Buffer, destB: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGB565toRGB888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGB565toRGBA5551(src: vImage_Buffer, dest: vImage_Buffer, dither: number, flags: number): number;

declare function vImageConvert_RGB565toRGBA8888(alpha: number, src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGB888toARGB8888(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: vImage_Buffer, p5: boolean, p6: number): number;

declare function vImageConvert_RGB888toBGRA8888(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: vImage_Buffer, p5: boolean, p6: number): number;

declare function vImageConvert_RGB888toPlanar16Q12(src: vImage_Buffer, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGB888toPlanar8(rgbSrc: vImage_Buffer, redDest: vImage_Buffer, greenDest: vImage_Buffer, blueDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGB888toRGB565_dithered(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, dither: number, flags: number): number;

declare function vImageConvert_RGB888toRGBA8888(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: vImage_Buffer, p5: boolean, p6: number): number;

declare function vImageConvert_RGBA1010102ToARGB16Q12(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_RGBA1010102ToARGB16U(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_RGBA1010102ToARGB8888(src: vImage_Buffer, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_RGBA16UtoRGB16U(rgbaSrc: vImage_Buffer, rgbDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGBA5551toRGB565(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGBA5551toRGBA8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGBA8888toRGB565(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGBA8888toRGB565_dithered(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, dither: number, flags: number): number;

declare function vImageConvert_RGBA8888toRGB888(p1: vImage_Buffer, p2: vImage_Buffer, p3: number): number;

declare function vImageConvert_RGBA8888toRGBA5551(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGBA8888toRGBA5551_dithered(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, dither: number, flags: number): number;

declare function vImageConvert_RGBAFFFFtoRGBFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGBFFFtoARGBFFFF(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: vImage_Buffer, p5: boolean, flags: number): number;

declare function vImageConvert_RGBFFFtoBGRAFFFF(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: vImage_Buffer, p5: boolean, flags: number): number;

declare function vImageConvert_RGBFFFtoPlanarF(rgbSrc: vImage_Buffer, redDest: vImage_Buffer, greenDest: vImage_Buffer, blueDest: vImage_Buffer, flags: number): number;

declare function vImageConvert_RGBFFFtoRGB888_dithered(src: vImage_Buffer, dest: vImage_Buffer, maxFloat: number, minFloat: number, dither: number, flags: number): number;

declare function vImageConvert_RGBFFFtoRGBAFFFF(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: vImage_Buffer, p5: boolean, flags: number): number;

declare function vImageConvert_XRGB2101010ToARGB16F(src: vImage_Buffer, alpha: number, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_XRGB2101010ToARGB16Q12(src: vImage_Buffer, alpha: number, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_XRGB2101010ToARGB16U(src: vImage_Buffer, alpha: number, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_XRGB2101010ToARGB8888(src: vImage_Buffer, alpha: number, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_XRGB2101010ToARGBFFFF(src: vImage_Buffer, alpha: number, dest: vImage_Buffer, RGB101010RangeMin: number, RGB101010RangeMax: number, permuteMap: number, flags: number): number;

declare function vImageConvert_XRGB8888ToPlanar8(src: vImage_Buffer, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, flags: number): number;

declare function vImageConvert_XRGBFFFFToPlanarF(src: vImage_Buffer, red: vImage_Buffer, green: vImage_Buffer, blue: vImage_Buffer, flags: number): number;

declare function vImageConvert_YpCbCrToARGB_GenerateConversion(matrix: vImage_YpCbCrToARGBMatrix, pixelRange: vImage_YpCbCrPixelRange, outInfo: vImage_YpCbCrToARGB, inYpCbCrType: vImageYpCbCrType, outARGBType: vImageARGBType, flags: number): number;

declare function vImageConverter_CreateForCGToCVImageFormat(srcFormat: vImage_CGImageFormat, destFormat: any, backgroundColor: number, flags: number, error: number): any;

declare function vImageConverter_CreateForCVToCGImageFormat(srcFormat: any, destFormat: vImage_CGImageFormat, backgroundColor: number, flags: number, error: number): any;

declare function vImageConverter_CreateWithCGImageFormat(srcFormat: vImage_CGImageFormat, destFormat: vImage_CGImageFormat, backgroundColor: number, flags: number, error: number): any;

declare function vImageConverter_CreateWithColorSyncCodeFragment(codeFragment: any, srcFormat: vImage_CGImageFormat, destFormat: vImage_CGImageFormat, backgroundColor: number, flags: number, error: number): any;

declare function vImageConverter_GetDestinationBufferOrder(converter: any): number;

declare function vImageConverter_GetNumberOfDestinationBuffers(converter: any): number;

declare function vImageConverter_GetNumberOfSourceBuffers(converter: any): number;

declare function vImageConverter_GetSourceBufferOrder(converter: any): number;

declare function vImageConverter_MustOperateOutOfPlace(converter: any, srcs: vImage_Buffer, dests: vImage_Buffer, flags: number): number;

declare function vImageConverter_Release(converter: any): void;

declare function vImageConverter_Retain(converter: any): void;

declare function vImageConvolveMultiKernel_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernels: number, kernel_height: number, kernel_width: number, divisors: number, biases: number, backgroundColor: number, flags: number): number;

declare function vImageConvolveMultiKernel_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernels: number, kernel_height: number, kernel_width: number, biases: number, backgroundColor: number, flags: number): number;

declare function vImageConvolveWithBias_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, divisor: number, bias: number, backgroundColor: number, flags: number): number;

declare function vImageConvolveWithBias_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, bias: number, backgroundColor: number, flags: number): number;

declare function vImageConvolveWithBias_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, divisor: number, bias: number, backgroundColor: number, flags: number): number;

declare function vImageConvolveWithBias_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, bias: number, backgroundColor: number, flags: number): number;

declare function vImageConvolve_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, divisor: number, backgroundColor: number, flags: number): number;

declare function vImageConvolve_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, backgroundColor: number, flags: number): number;

declare function vImageConvolve_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, divisor: number, backgroundColor: number, flags: number): number;

declare function vImageConvolve_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, backgroundColor: number, flags: number): number;

declare function vImageCopyBuffer(src: vImage_Buffer, dest: vImage_Buffer, pixelSize: number, flags: number): number;

declare function vImageCreateCGImageFromBuffer(buf: vImage_Buffer, format: vImage_CGImageFormat, callback: (p1: any, p2: any) => void, userData: any, flags: number, error: number): any;

declare function vImageCreateGammaFunction(gamma: number, gamma_type: number, flags: number): any;

declare function vImageCreateMonochromeColorSpaceWithWhitePointAndTransferFunction(whitePoint: vImageWhitePoint, tf: vImageTransferFunction, intent: CGColorRenderingIntent, flags: number, error: number): any;

declare function vImageCreateRGBColorSpaceWithPrimariesAndTransferFunction(primaries: vImageRGBPrimaries, tf: vImageTransferFunction, intent: CGColorRenderingIntent, flags: number, error: number): any;

declare function vImageDestroyGammaFunction(f: any): void;

declare function vImageDestroyResamplingFilter(filter: any): void;

declare function vImageDilate_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: string | any, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageDilate_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageDilate_Planar8(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: string | any, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageDilate_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageEndsInContrastStretch_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, percent_low: number, percent_high: number, flags: number): number;

declare function vImageEndsInContrastStretch_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, percent_low: number, percent_high: number, histogram_entries: number, minVal: number, maxVal: number, flags: number): number;

declare function vImageEndsInContrastStretch_Planar8(src: vImage_Buffer, dest: vImage_Buffer, percent_low: number, percent_high: number, flags: number): number;

declare function vImageEndsInContrastStretch_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, percent_low: number, percent_high: number, histogram_entries: number, minVal: number, maxVal: number, flags: number): number;

declare function vImageEqualization_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageEqualization_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, histogram_entries: number, minVal: number, maxVal: number, flags: number): number;

declare function vImageEqualization_Planar8(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageEqualization_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, histogram_entries: number, minVal: number, maxVal: number, flags: number): number;

declare function vImageErode_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: string | any, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageErode_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageErode_Planar8(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: string | any, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageErode_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageExtractChannel_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, channelIndex: number, flags: number): number;

declare function vImageExtractChannel_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, channelIndex: number, flags: number): number;

declare function vImageExtractChannel_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, channelIndex: number, flags: number): number;

declare function vImageFlatten_ARGB16Q12(argbSrc: vImage_Buffer, argbDst: vImage_Buffer, argbBackgroundColorPtr: number, isImagePremultiplied: boolean, flags: number): number;

declare function vImageFlatten_ARGB16U(argbSrc: vImage_Buffer, argbDst: vImage_Buffer, argbBackgroundColorPtr: number, isImagePremultiplied: boolean, flags: number): number;

declare function vImageFlatten_ARGB8888(argbSrc: vImage_Buffer, argbDst: vImage_Buffer, argbBackgroundColorPtr: number, isImagePremultiplied: boolean, flags: number): number;

declare function vImageFlatten_ARGB8888ToRGB888(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: boolean, p5: number): number;

declare function vImageFlatten_ARGBFFFF(argbSrc: vImage_Buffer, argbDst: vImage_Buffer, argbBackgroundColorPtr: number, isImagePremultiplied: boolean, flags: number): number;

declare function vImageFlatten_ARGBFFFFToRGBFFF(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: boolean, p5: number): number;

declare function vImageFlatten_BGRA8888ToRGB888(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: boolean, p5: number): number;

declare function vImageFlatten_BGRAFFFFToRGBFFF(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: boolean, p5: number): number;

declare function vImageFlatten_RGBA16Q12(argbSrc: vImage_Buffer, argbDst: vImage_Buffer, argbBackgroundColorPtr: number, isImagePremultiplied: boolean, flags: number): number;

declare function vImageFlatten_RGBA16U(rgbaSrc: vImage_Buffer, rgbaDst: vImage_Buffer, rgbaBackgroundColorPtr: number, isImagePremultiplied: boolean, flags: number): number;

declare function vImageFlatten_RGBA8888(rgbaSrc: vImage_Buffer, rgbaDst: vImage_Buffer, rgbaBackgroundColorPtr: number, isImagePremultiplied: boolean, flags: number): number;

declare function vImageFlatten_RGBA8888ToRGB888(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: boolean, p5: number): number;

declare function vImageFlatten_RGBAFFFF(rgbaSrc: vImage_Buffer, rgbaDst: vImage_Buffer, rgbaBackgroundColorPtr: number, isImagePremultiplied: boolean, flags: number): number;

declare function vImageFlatten_RGBAFFFFToRGBFFF(p1: vImage_Buffer, p2: vImage_Buffer, p3: number, p4: boolean, p5: number): number;

declare function vImageGamma_Planar8toPlanarF(src: vImage_Buffer, dest: vImage_Buffer, gamma: any, flags: number): number;

declare function vImageGamma_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, gamma: any, flags: number): number;

declare function vImageGamma_PlanarFtoPlanar8(src: vImage_Buffer, dest: vImage_Buffer, gamma: any, flags: number): number;

declare function vImageGetResamplingFilterExtent(filter: any, flags: number): number;

declare function vImageGetResamplingFilterSize(scale: number, kernelFunc: (p1: number, p2: number, p3: number, p4: any) => void, kernelWidth: number, flags: number): number;

declare function vImageHistogramCalculation_ARGB8888(src: vImage_Buffer, histogram: number, flags: number): number;

declare function vImageHistogramCalculation_ARGBFFFF(src: vImage_Buffer, histogram: number, histogram_entries: number, minVal: number, maxVal: number, flags: number): number;

declare function vImageHistogramCalculation_Planar8(src: vImage_Buffer, histogram: number, flags: number): number;

declare function vImageHistogramCalculation_PlanarF(src: vImage_Buffer, histogram: number, histogram_entries: number, minVal: number, maxVal: number, flags: number): number;

declare function vImageHistogramSpecification_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, desired_histogram: number, flags: number): number;

declare function vImageHistogramSpecification_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, desired_histogram: number, histogram_entries: number, minVal: number, maxVal: number, flags: number): number;

declare function vImageHistogramSpecification_Planar8(src: vImage_Buffer, dest: vImage_Buffer, desired_histogram: number, flags: number): number;

declare function vImageHistogramSpecification_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, desired_histogram: number, histogram_entries: number, minVal: number, maxVal: number, flags: number): number;

declare function vImageHorizontalReflect_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageHorizontalReflect_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageHorizontalReflect_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageHorizontalReflect_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageHorizontalReflect_Planar16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageHorizontalReflect_Planar8(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageHorizontalReflect_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageHorizontalShearD_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShearD_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShearD_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShearD_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShearD_Planar8(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShearD_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_CbCr16U(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_CbCr8(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_Planar16S(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_Planar16U(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_Planar8(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageHorizontalShear_XRGB2101010W(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, xTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageInterpolatedLookupTable_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, table: number, tableEntries: number, maxFloat: number, minFloat: number, flags: number): number;

declare function vImageLookupTable_8to64U(src: vImage_Buffer, dest: vImage_Buffer, LUT: number, flags: number): number;

declare function vImageLookupTable_Planar16(src: vImage_Buffer, dest: vImage_Buffer, table: number, flags: number): number;

declare function vImageLookupTable_Planar8toPlanar128(src: vImage_Buffer, dest: vImage_Buffer, table: number, flags: number): number;

declare function vImageLookupTable_Planar8toPlanar16(src: vImage_Buffer, dest: vImage_Buffer, table: number, flags: number): number;

declare function vImageLookupTable_Planar8toPlanar24(src: vImage_Buffer, dest: vImage_Buffer, table: number, flags: number): number;

declare function vImageLookupTable_Planar8toPlanar48(src: vImage_Buffer, dest: vImage_Buffer, table: number, flags: number): number;

declare function vImageLookupTable_Planar8toPlanar96(src: vImage_Buffer, dest: vImage_Buffer, table: number, flags: number): number;

declare function vImageLookupTable_Planar8toPlanarF(src: vImage_Buffer, dest: vImage_Buffer, table: number, flags: number): number;

declare function vImageLookupTable_PlanarFtoPlanar8(src: vImage_Buffer, dest: vImage_Buffer, table: number, flags: number): number;

enum vImageMDTableUsageHint {

	kvImageMDTableHint_16Q12 = 1,

	kvImageMDTableHint_Float = 2
}


declare function vImageMatrixMultiply_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, matrix: number, divisor: number, pre_bias: number, post_bias: number, flags: number): number;

declare function vImageMatrixMultiply_ARGB8888ToPlanar8(src: vImage_Buffer, dest: vImage_Buffer, matrix: number, divisor: number, pre_bias: number, post_bias: number, flags: number): number;

declare function vImageMatrixMultiply_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, matrix: number, pre_bias: number, post_bias: number, flags: number): number;

declare function vImageMatrixMultiply_ARGBFFFFToPlanarF(src: vImage_Buffer, dest: vImage_Buffer, matrix: number, pre_bias: number, post_bias: number, flags: number): number;

declare function vImageMatrixMultiply_Planar16S(srcs: vImage_Buffer, dests: vImage_Buffer, src_planes: number, dest_planes: number, matrix: number, divisor: number, pre_bias: number, post_bias: number, flags: number): number;

declare function vImageMatrixMultiply_Planar8(srcs: vImage_Buffer, dests: vImage_Buffer, src_planes: number, dest_planes: number, matrix: number, divisor: number, pre_bias: number, post_bias: number, flags: number): number;

declare function vImageMatrixMultiply_PlanarF(srcs: vImage_Buffer, dests: vImage_Buffer, src_planes: number, dest_planes: number, matrix: number, pre_bias: number, post_bias: number, flags: number): number;

declare function vImageMax_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageMax_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageMax_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageMax_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageMin_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageMin_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageMin_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageMin_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, flags: number): number;

declare function vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12(srcs: vImage_Buffer, dests: vImage_Buffer, tempBuffer: any, table: any, method: vImage_InterpolationMethod, flags: number): number;

declare function vImageMultiDimensionalInterpolatedLookupTable_PlanarF(srcs: vImage_Buffer, dests: vImage_Buffer, tempBuffer: any, table: any, method: vImage_InterpolationMethod, flags: number): number;

declare function vImageMultidimensionalTable_Create(tableData: number, numSrcChannels: number, numDestChannels: number, table_entries_per_dimension: number, hint: vImageMDTableUsageHint, flags: number, err: number): any;

declare function vImageMultidimensionalTable_Release(table: any): number;

declare function vImageMultidimensionalTable_Retain(table: any): number;

declare function vImageNewResamplingFilter(scale: number, flags: number): any;

declare function vImageNewResamplingFilterForFunctionUsingBuffer(filter: any, scale: number, kernelFunc: (p1: number, p2: number, p3: number, p4: any) => void, kernelWidth: number, userData: any, flags: number): number;

declare function vImageOverwriteChannelsWithPixel_ARGB16U(the_pixel: number, src: vImage_Buffer, dest: vImage_Buffer, copyMask: number, flags: number): number;

declare function vImageOverwriteChannelsWithPixel_ARGB8888(the_pixel: number, src: vImage_Buffer, dest: vImage_Buffer, copyMask: number, flags: number): number;

declare function vImageOverwriteChannelsWithPixel_ARGBFFFF(the_pixel: number, src: vImage_Buffer, dest: vImage_Buffer, copyMask: number, flags: number): number;

declare function vImageOverwriteChannelsWithScalar_ARGB8888(scalar: number, src: vImage_Buffer, dest: vImage_Buffer, copyMask: number, flags: number): number;

declare function vImageOverwriteChannelsWithScalar_ARGBFFFF(scalar: number, src: vImage_Buffer, dest: vImage_Buffer, copyMask: number, flags: number): number;

declare function vImageOverwriteChannelsWithScalar_Planar16S(scalar: number, dest: vImage_Buffer, flags: number): number;

declare function vImageOverwriteChannelsWithScalar_Planar16U(scalar: number, dest: vImage_Buffer, flags: number): number;

declare function vImageOverwriteChannelsWithScalar_Planar8(scalar: number, dest: vImage_Buffer, flags: number): number;

declare function vImageOverwriteChannelsWithScalar_PlanarF(scalar: number, dest: vImage_Buffer, flags: number): number;

declare function vImageOverwriteChannels_ARGB8888(newSrc: vImage_Buffer, origSrc: vImage_Buffer, dest: vImage_Buffer, copyMask: number, flags: number): number;

declare function vImageOverwriteChannels_ARGBFFFF(newSrc: vImage_Buffer, origSrc: vImage_Buffer, dest: vImage_Buffer, copyMask: number, flags: number): number;

declare function vImagePNGDecompressionFilter(buffer: vImage_Buffer, startScanline: number, scanlineCount: number, bitsPerPixel: number, filterMethodNumber: number, filterType: number, flags: number): number;

declare function vImagePermuteChannelsWithMaskedInsert_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, copyMask: number, backgroundColor: number, flags: number): number;

declare function vImagePermuteChannelsWithMaskedInsert_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, copyMask: number, backgroundColor: number, flags: number): number;

declare function vImagePermuteChannelsWithMaskedInsert_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, copyMask: number, backgroundColor: number, flags: number): number;

declare function vImagePermuteChannels_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, flags: number): number;

declare function vImagePermuteChannels_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, flags: number): number;

declare function vImagePermuteChannels_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, flags: number): number;

declare function vImagePermuteChannels_RGB888(src: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, flags: number): number;

declare function vImagePiecewiseGamma_Planar16Q12(src: vImage_Buffer, dest: vImage_Buffer, exponentialCoeffs: number, gamma: number, linearCoeffs: number, boundary: number, flags: number): number;

declare function vImagePiecewiseGamma_Planar16Q12toPlanar8(src: vImage_Buffer, dest: vImage_Buffer, exponentialCoeffs: number, gamma: number, linearCoeffs: number, boundary: number, flags: number): number;

declare function vImagePiecewiseGamma_Planar8(src: vImage_Buffer, dest: vImage_Buffer, exponentialCoeffs: number, gamma: number, linearCoeffs: number, boundary: number, flags: number): number;

declare function vImagePiecewiseGamma_Planar8toPlanar16Q12(src: vImage_Buffer, dest: vImage_Buffer, exponentialCoeffs: number, gamma: number, linearCoeffs: number, boundary: number, flags: number): number;

declare function vImagePiecewiseGamma_Planar8toPlanarF(src: vImage_Buffer, dest: vImage_Buffer, exponentialCoeffs: number, gamma: number, linearCoeffs: number, boundary: number, flags: number): number;

declare function vImagePiecewiseGamma_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, exponentialCoeffs: number, gamma: number, linearCoeffs: number, boundary: number, flags: number): number;

declare function vImagePiecewiseGamma_PlanarFtoPlanar8(src: vImage_Buffer, dest: vImage_Buffer, exponentialCoeffs: number, gamma: number, linearCoeffs: number, boundary: number, flags: number): number;

declare function vImagePiecewisePolynomial_Planar8toPlanarF(src: vImage_Buffer, dest: vImage_Buffer, coefficients: number, boundaries: number, order: number, log2segments: number, flags: number): number;

declare function vImagePiecewisePolynomial_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, coefficients: number, boundaries: number, order: number, log2segments: number, flags: number): number;

declare function vImagePiecewisePolynomial_PlanarFtoPlanar8(src: vImage_Buffer, dest: vImage_Buffer, coefficients: number, boundaries: number, order: number, log2segments: number, flags: number): number;

declare function vImagePiecewiseRational_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, topCoefficients: number, bottomCoefficients: number, boundaries: number, topOrder: number, bottomOrder: number, log2segments: number, flags: number): number;

declare function vImagePremultipliedAlphaBlendDarken_RGBA8888(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedAlphaBlendLighten_RGBA8888(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedAlphaBlendMultiply_RGBA8888(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedAlphaBlendScreen_RGBA8888(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedAlphaBlendWithPermute_ARGB8888(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, makeDestAlphaOpaque: boolean, flags: number): number;

declare function vImagePremultipliedAlphaBlendWithPermute_RGBA8888(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, permuteMap: number, makeDestAlphaOpaque: boolean, flags: number): number;

declare function vImagePremultipliedAlphaBlend_ARGB8888(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedAlphaBlend_ARGBFFFF(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedAlphaBlend_BGRA8888(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedAlphaBlend_BGRAFFFF(srcTop: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedAlphaBlend_Planar8(srcTop: vImage_Buffer, srcTopAlpha: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedAlphaBlend_PlanarF(srcTop: vImage_Buffer, srcTopAlpha: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedConstAlphaBlend_ARGB8888(srcTop: vImage_Buffer, constAlpha: number, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedConstAlphaBlend_ARGBFFFF(srcTop: vImage_Buffer, constAlpha: number, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedConstAlphaBlend_Planar8(srcTop: vImage_Buffer, constAlpha: number, srcTopAlpha: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultipliedConstAlphaBlend_PlanarF(srcTop: vImage_Buffer, constAlpha: number, srcTopAlpha: vImage_Buffer, srcBottom: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultiplyData_ARGB16Q12(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultiplyData_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultiplyData_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultiplyData_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultiplyData_Planar8(src: vImage_Buffer, alpha: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultiplyData_PlanarF(src: vImage_Buffer, alpha: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultiplyData_RGBA16Q12(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultiplyData_RGBA16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultiplyData_RGBA8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImagePremultiplyData_RGBAFFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

interface vImageRGBPrimaries {
	red_x: number;
	green_x: number;
	blue_x: number;
	white_x: number;
	red_y: number;
	green_y: number;
	blue_y: number;
	white_y: number;
}
declare var vImageRGBPrimaries: vImageRGBPrimaries;

declare function vImageRichardsonLucyDeConvolve_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel2: number, kernel_height: number, kernel_width: number, kernel_height2: number, kernel_width2: number, divisor: number, divisor2: number, backgroundColor: number, iterationCount: number, flags: number): number;

declare function vImageRichardsonLucyDeConvolve_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel2: number, kernel_height: number, kernel_width: number, kernel_height2: number, kernel_width2: number, backgroundColor: number, iterationCount: number, flags: number): number;

declare function vImageRichardsonLucyDeConvolve_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel2: number, kernel_height: number, kernel_width: number, kernel_height2: number, kernel_width2: number, divisor: number, divisor2: number, backgroundColor: number, iterationCount: number, flags: number): number;

declare function vImageRichardsonLucyDeConvolve_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel: number, kernel2: number, kernel_height: number, kernel_width: number, kernel_height2: number, kernel_width2: number, backgroundColor: number, iterationCount: number, flags: number): number;

declare function vImageRotate90_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, rotationConstant: number, backColor: number, flags: number): number;

declare function vImageRotate90_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, rotationConstant: number, backColor: number, flags: number): number;

declare function vImageRotate90_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, rotationConstant: number, backColor: number, flags: number): number;

declare function vImageRotate90_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, rotationConstant: number, backColor: number, flags: number): number;

declare function vImageRotate90_Planar16U(src: vImage_Buffer, dest: vImage_Buffer, rotationConstant: number, backColor: number, flags: number): number;

declare function vImageRotate90_Planar8(src: vImage_Buffer, dest: vImage_Buffer, rotationConstant: number, backColor: number, flags: number): number;

declare function vImageRotate90_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, rotationConstant: number, backColor: number, flags: number): number;

declare function vImageRotate_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, angleInRadians: number, backColor: number, flags: number): number;

declare function vImageRotate_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, angleInRadians: number, backColor: number, flags: number): number;

declare function vImageRotate_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, angleInRadians: number, backColor: number, flags: number): number;

declare function vImageRotate_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, angleInRadians: number, backColor: number, flags: number): number;

declare function vImageRotate_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, angleInRadians: number, backColor: number, flags: number): number;

declare function vImageRotate_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, angleInRadians: number, backColor: number, flags: number): number;

declare function vImageScale_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageScale_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageScale_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageScale_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageScale_CbCr16U(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageScale_CbCr8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageScale_Planar16S(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageScale_Planar16U(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageScale_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageScale_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageScale_XRGB2101010W(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, flags: number): number;

declare function vImageSelectChannels_ARGB8888(newSrc: vImage_Buffer, origSrc: vImage_Buffer, dest: vImage_Buffer, copyMask: number, flags: number): number;

declare function vImageSelectChannels_ARGBFFFF(newSrc: vImage_Buffer, origSrc: vImage_Buffer, dest: vImage_Buffer, copyMask: number, flags: number): number;

declare function vImageSymmetricPiecewiseGamma_Planar16Q12(src: vImage_Buffer, dest: vImage_Buffer, exponentialCoeffs: number, gamma: number, linearCoeffs: number, boundary: number, flags: number): number;

declare function vImageSymmetricPiecewiseGamma_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, exponentialCoeffs: number, gamma: number, linearCoeffs: number, boundary: number, flags: number): number;

declare function vImageSymmetricPiecewisePolynomial_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, coefficients: number, boundaries: number, order: number, log2segments: number, flags: number): number;

declare function vImageTableLookUp_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, alphaTable: number, redTable: number, greenTable: number, blueTable: number, flags: number): number;

declare function vImageTableLookUp_Planar8(src: vImage_Buffer, dest: vImage_Buffer, table: number, flags: number): number;

declare function vImageTentConvolve_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, backgroundColor: number, flags: number): number;

declare function vImageTentConvolve_Planar8(src: vImage_Buffer, dest: vImage_Buffer, tempBuffer: any, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, kernel_height: number, kernel_width: number, backgroundColor: number, flags: number): number;

interface vImageTransferFunction {
	c0: number;
	c1: number;
	c2: number;
	c3: number;
	gamma: number;
	cutoff: number;
	c4: number;
	c5: number;
}
declare var vImageTransferFunction: vImageTransferFunction;

declare function vImageUnpremultiplyData_ARGB16Q12(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageUnpremultiplyData_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageUnpremultiplyData_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageUnpremultiplyData_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageUnpremultiplyData_Planar8(src: vImage_Buffer, alpha: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageUnpremultiplyData_PlanarF(src: vImage_Buffer, alpha: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageUnpremultiplyData_RGBA16Q12(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageUnpremultiplyData_RGBA16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageUnpremultiplyData_RGBA8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageUnpremultiplyData_RGBAFFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageVerticalReflect_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageVerticalReflect_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageVerticalReflect_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageVerticalReflect_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageVerticalReflect_Planar16U(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageVerticalReflect_Planar8(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageVerticalReflect_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, flags: number): number;

declare function vImageVerticalShearD_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShearD_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShearD_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShearD_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShearD_Planar8(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShearD_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_ARGB16S(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_ARGB16U(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_ARGB8888(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_ARGBFFFF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_CbCr16U(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_CbCr8(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_Planar16S(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_Planar16U(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_Planar8(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_PlanarF(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

declare function vImageVerticalShear_XRGB2101010W(src: vImage_Buffer, dest: vImage_Buffer, srcOffsetToROI_X: number, srcOffsetToROI_Y: number, yTranslate: number, shearSlope: number, filter: any, backColor: number, flags: number): number;

interface vImageWhitePoint {
	white_x: number;
	white_y: number;
}
declare var vImageWhitePoint: vImageWhitePoint;

enum vImageYpCbCrType {

	kvImage422CbYpCrYp8 = 0,

	kvImage422YpCbYpCr8 = 1,

	kvImage422CbYpCrYp8_AA8 = 2,

	kvImage420Yp8_Cb8_Cr8 = 3,

	kvImage420Yp8_CbCr8 = 4,

	kvImage444AYpCbCr8 = 5,

	kvImage444CrYpCb8 = 6,

	kvImage444CbYpCrA8 = 7,

	kvImage444CrYpCb10 = 8,

	kvImage422CrYpCbYpCbYpCbYpCrYpCrYp10 = 9,

	kvImage422CbYpCrYp16 = 13,

	kvImage444AYpCbCr16 = 14
}


interface vImage_ARGBToYpCbCr {
	opaque: number;
}
declare var vImage_ARGBToYpCbCr: vImage_ARGBToYpCbCr;

interface vImage_ARGBToYpCbCrMatrix {
	R_Yp: number;
	G_Yp: number;
	B_Yp: number;
	R_Cb: number;
	G_Cb: number;
	B_Cb_R_Cr: number;
	G_Cr: number;
	B_Cr: number;
}
declare var vImage_ARGBToYpCbCrMatrix: vImage_ARGBToYpCbCrMatrix;

interface vImage_AffineTransform {
	a: number;
	b: number;
	c: number;
	d: number;
	tx: number;
	ty: number;
}
declare var vImage_AffineTransform: vImage_AffineTransform;

interface vImage_AffineTransform_Double {
	a: number;
	b: number;
	c: number;
	d: number;
	tx: number;
	ty: number;
}
declare var vImage_AffineTransform_Double: vImage_AffineTransform_Double;

interface vImage_Buffer {
	data: any;
	height: number;
	width: number;
	rowBytes: number;
}
declare var vImage_Buffer: vImage_Buffer;

interface vImage_CGImageFormat {
	bitsPerComponent: number;
	bitsPerPixel: number;
	colorSpace: any;
	bitmapInfo: CGBitmapInfo;
	version: number;
	decode: number;
	renderingIntent: CGColorRenderingIntent;
}
declare var vImage_CGImageFormat: vImage_CGImageFormat;

enum vImage_InterpolationMethod {

	kvImageNoInterpolation = 0,

	kvImageFullInterpolation = 1,

	kvImageHalfInterpolation = 2
}


interface vImage_YpCbCrPixelRange {
	Yp_bias: number;
	CbCr_bias: number;
	YpRangeMax: number;
	CbCrRangeMax: number;
	YpMax: number;
	YpMin: number;
	CbCrMax: number;
	CbCrMin: number;
}
declare var vImage_YpCbCrPixelRange: vImage_YpCbCrPixelRange;

interface vImage_YpCbCrToARGB {
	opaque: number;
}
declare var vImage_YpCbCrToARGB: vImage_YpCbCrToARGB;

interface vImage_YpCbCrToARGBMatrix {
	Yp: number;
	Cr_R: number;
	Cr_G: number;
	Cb_G: number;
	Cb_B: number;
}
declare var vImage_YpCbCrToARGBMatrix: vImage_YpCbCrToARGBMatrix;

declare function vvacos(p1: number, p2: number, p3: number): void;

declare function vvacosf(p1: number, p2: number, p3: number): void;

declare function vvacosh(p1: number, p2: number, p3: number): void;

declare function vvacoshf(p1: number, p2: number, p3: number): void;

declare function vvasin(p1: number, p2: number, p3: number): void;

declare function vvasinf(p1: number, p2: number, p3: number): void;

declare function vvasinh(p1: number, p2: number, p3: number): void;

declare function vvasinhf(p1: number, p2: number, p3: number): void;

declare function vvatan(p1: number, p2: number, p3: number): void;

declare function vvatan2(p1: number, p2: number, p3: number, p4: number): void;

declare function vvatan2f(p1: number, p2: number, p3: number, p4: number): void;

declare function vvatanf(p1: number, p2: number, p3: number): void;

declare function vvatanh(p1: number, p2: number, p3: number): void;

declare function vvatanhf(p1: number, p2: number, p3: number): void;

declare function vvcbrt(p1: number, p2: number, p3: number): void;

declare function vvcbrtf(p1: number, p2: number, p3: number): void;

declare function vvceil(p1: number, p2: number, p3: number): void;

declare function vvceilf(p1: number, p2: number, p3: number): void;

declare function vvcopysign(p1: number, p2: number, p3: number, p4: number): void;

declare function vvcopysignf(p1: number, p2: number, p3: number, p4: number): void;

declare function vvcos(p1: number, p2: number, p3: number): void;

declare function vvcosf(p1: number, p2: number, p3: number): void;

declare function vvcosh(p1: number, p2: number, p3: number): void;

declare function vvcoshf(p1: number, p2: number, p3: number): void;

declare function vvcospi(p1: number, p2: number, p3: number): void;

declare function vvcospif(p1: number, p2: number, p3: number): void;

declare function vvdiv(p1: number, p2: number, p3: number, p4: number): void;

declare function vvdivf(p1: number, p2: number, p3: number, p4: number): void;

declare function vvexp(p1: number, p2: number, p3: number): void;

declare function vvexp2(p1: number, p2: number, p3: number): void;

declare function vvexp2f(p1: number, p2: number, p3: number): void;

declare function vvexpf(p1: number, p2: number, p3: number): void;

declare function vvexpm1(p1: number, p2: number, p3: number): void;

declare function vvexpm1f(p1: number, p2: number, p3: number): void;

declare function vvfabs(p1: number, p2: number, p3: number): void;

declare function vvfabsf(p1: number, p2: number, p3: number): void;

declare function vvfloor(p1: number, p2: number, p3: number): void;

declare function vvfloorf(p1: number, p2: number, p3: number): void;

declare function vvfmod(p1: number, p2: number, p3: number, p4: number): void;

declare function vvfmodf(p1: number, p2: number, p3: number, p4: number): void;

declare function vvint(p1: number, p2: number, p3: number): void;

declare function vvintf(p1: number, p2: number, p3: number): void;

declare function vvlog(p1: number, p2: number, p3: number): void;

declare function vvlog10(p1: number, p2: number, p3: number): void;

declare function vvlog10f(p1: number, p2: number, p3: number): void;

declare function vvlog1p(p1: number, p2: number, p3: number): void;

declare function vvlog1pf(p1: number, p2: number, p3: number): void;

declare function vvlog2(p1: number, p2: number, p3: number): void;

declare function vvlog2f(p1: number, p2: number, p3: number): void;

declare function vvlogb(p1: number, p2: number, p3: number): void;

declare function vvlogbf(p1: number, p2: number, p3: number): void;

declare function vvlogf(p1: number, p2: number, p3: number): void;

declare function vvnextafter(p1: number, p2: number, p3: number, p4: number): void;

declare function vvnextafterf(p1: number, p2: number, p3: number, p4: number): void;

declare function vvnint(p1: number, p2: number, p3: number): void;

declare function vvnintf(p1: number, p2: number, p3: number): void;

declare function vvpow(p1: number, p2: number, p3: number, p4: number): void;

declare function vvpowf(p1: number, p2: number, p3: number, p4: number): void;

declare function vvpows(p1: number, p2: number, p3: number, p4: number): void;

declare function vvpowsf(p1: number, p2: number, p3: number, p4: number): void;

declare function vvrec(p1: number, p2: number, p3: number): void;

declare function vvrecf(p1: number, p2: number, p3: number): void;

declare function vvremainder(p1: number, p2: number, p3: number, p4: number): void;

declare function vvremainderf(p1: number, p2: number, p3: number, p4: number): void;

declare function vvrsqrt(p1: number, p2: number, p3: number): void;

declare function vvrsqrtf(p1: number, p2: number, p3: number): void;

declare function vvsin(p1: number, p2: number, p3: number): void;

declare function vvsincos(p1: number, p2: number, p3: number, p4: number): void;

declare function vvsincosf(p1: number, p2: number, p3: number, p4: number): void;

declare function vvsinf(p1: number, p2: number, p3: number): void;

declare function vvsinh(p1: number, p2: number, p3: number): void;

declare function vvsinhf(p1: number, p2: number, p3: number): void;

declare function vvsinpi(p1: number, p2: number, p3: number): void;

declare function vvsinpif(p1: number, p2: number, p3: number): void;

declare function vvsqrt(p1: number, p2: number, p3: number): void;

declare function vvsqrtf(p1: number, p2: number, p3: number): void;

declare function vvtan(p1: number, p2: number, p3: number): void;

declare function vvtanf(p1: number, p2: number, p3: number): void;

declare function vvtanh(p1: number, p2: number, p3: number): void;

declare function vvtanhf(p1: number, p2: number, p3: number): void;

declare function vvtanpi(p1: number, p2: number, p3: number): void;

declare function vvtanpif(p1: number, p2: number, p3: number): void;

declare function zbdsqr_(__uplo: string | any, __n: number, __ncvt: number, __nru: number, __ncc: number, __d__: number, __e: number, __vt: __CLPK_doublecomplex, __ldvt: number, __u: __CLPK_doublecomplex, __ldu: number, __c__: __CLPK_doublecomplex, __ldc: number, __rwork: number, __info: number): number;

declare function zcgesv_(__n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __work: __CLPK_doublecomplex, __swork: __CLPK_complex, __rwork: number, __iter: number, __info: number): number;

declare function zcposv_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __work: __CLPK_doublecomplex, __swork: __CLPK_complex, __rwork: number, __iter: number, __info: number): number;

declare function zdrscl_(__n: number, __sa: number, __sx: __CLPK_doublecomplex, __incx: number): number;

declare function zgbbrd_(__vect: string | any, __m: number, __n: number, __ncc: number, __kl: number, __ku: number, __ab: __CLPK_doublecomplex, __ldab: number, __d__: number, __e: number, __q: __CLPK_doublecomplex, __ldq: number, __pt: __CLPK_doublecomplex, __ldpt: number, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgbcon_(__norm: string | any, __n: number, __kl: number, __ku: number, __ab: __CLPK_doublecomplex, __ldab: number, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgbequ_(__m: number, __n: number, __kl: number, __ku: number, __ab: __CLPK_doublecomplex, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function zgbequb_(__m: number, __n: number, __kl: number, __ku: number, __ab: __CLPK_doublecomplex, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function zgbrfs_(__trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: __CLPK_doublecomplex, __ldab: number, __afb: __CLPK_doublecomplex, __ldafb: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgbsv_(__n: number, __kl: number, __ku: number, __nrhs: number, __ab: __CLPK_doublecomplex, __ldab: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zgbsvx_(__fact: string | any, __trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: __CLPK_doublecomplex, __ldab: number, __afb: __CLPK_doublecomplex, __ldafb: number, __ipiv: number, __equed: string | any, __r__: number, __c__: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgbtf2_(__m: number, __n: number, __kl: number, __ku: number, __ab: __CLPK_doublecomplex, __ldab: number, __ipiv: number, __info: number): number;

declare function zgbtrf_(__m: number, __n: number, __kl: number, __ku: number, __ab: __CLPK_doublecomplex, __ldab: number, __ipiv: number, __info: number): number;

declare function zgbtrs_(__trans: string | any, __n: number, __kl: number, __ku: number, __nrhs: number, __ab: __CLPK_doublecomplex, __ldab: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zgebak_(__job: string | any, __side: string | any, __n: number, __ilo: number, __ihi: number, __scale: number, __m: number, __v: __CLPK_doublecomplex, __ldv: number, __info: number): number;

declare function zgebal_(__job: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ilo: number, __ihi: number, __scale: number, __info: number): number;

declare function zgebd2_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __d__: number, __e: number, __tauq: __CLPK_doublecomplex, __taup: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zgebrd_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __d__: number, __e: number, __tauq: __CLPK_doublecomplex, __taup: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zgecon_(__norm: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __anorm: number, __rcond: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgeequ_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function zgeequb_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __info: number): number;

declare function zgees_(__jobvs: string | any, __sort: string | any, __select: () => number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __sdim: number, __w: __CLPK_doublecomplex, __vs: __CLPK_doublecomplex, __ldvs: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __bwork: number, __info: number): number;

declare function zgeesx_(__jobvs: string | any, __sort: string | any, __select: () => number, __sense: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __sdim: number, __w: __CLPK_doublecomplex, __vs: __CLPK_doublecomplex, __ldvs: number, __rconde: number, __rcondv: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __bwork: number, __info: number): number;

declare function zgeev_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __w: __CLPK_doublecomplex, __vl: __CLPK_doublecomplex, __ldvl: number, __vr: __CLPK_doublecomplex, __ldvr: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zgeevx_(__balanc: string | any, __jobvl: string | any, __jobvr: string | any, __sense: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __w: __CLPK_doublecomplex, __vl: __CLPK_doublecomplex, __ldvl: number, __vr: __CLPK_doublecomplex, __ldvr: number, __ilo: number, __ihi: number, __scale: number, __abnrm: number, __rconde: number, __rcondv: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zgegs_(__jobvsl: string | any, __jobvsr: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __alpha: __CLPK_doublecomplex, __beta: __CLPK_doublecomplex, __vsl: __CLPK_doublecomplex, __ldvsl: number, __vsr: __CLPK_doublecomplex, __ldvsr: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zgegv_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __alpha: __CLPK_doublecomplex, __beta: __CLPK_doublecomplex, __vl: __CLPK_doublecomplex, __ldvl: number, __vr: __CLPK_doublecomplex, __ldvr: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zgehd2_(__n: number, __ilo: number, __ihi: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zgehrd_(__n: number, __ilo: number, __ihi: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zgelq2_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zgelqf_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zgels_(__trans: string | any, __m: number, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zgelsd_(__m: number, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __s: number, __rcond: number, __rank: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __iwork: number, __info: number): number;

declare function zgelss_(__m: number, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __s: number, __rcond: number, __rank: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zgelsx_(__m: number, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __jpvt: number, __rcond: number, __rank: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgelsy_(__m: number, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __jpvt: number, __rcond: number, __rank: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zgeql2_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zgeqlf_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zgeqp3_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __jpvt: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zgeqpf_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __jpvt: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgeqr2_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zgeqrf_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zgerfs_(__trans: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __af: __CLPK_doublecomplex, __ldaf: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgerq2_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zgerqf_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zgesc2_(__n: number, __a: __CLPK_doublecomplex, __lda: number, __rhs: __CLPK_doublecomplex, __ipiv: number, __jpiv: number, __scale: number): number;

declare function zgesdd_(__jobz: string | any, __m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __s: number, __u: __CLPK_doublecomplex, __ldu: number, __vt: __CLPK_doublecomplex, __ldvt: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __iwork: number, __info: number): number;

declare function zgesv_(__n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zgesvd_(__jobu: string | any, __jobvt: string | any, __m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __s: number, __u: __CLPK_doublecomplex, __ldu: number, __vt: __CLPK_doublecomplex, __ldvt: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zgesvx_(__fact: string | any, __trans: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __af: __CLPK_doublecomplex, __ldaf: number, __ipiv: number, __equed: string | any, __r__: number, __c__: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgetc2_(__n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __jpiv: number, __info: number): number;

declare function zgetf2_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __info: number): number;

declare function zgetrf_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __info: number): number;

declare function zgetri_(__n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zgetrs_(__trans: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zggbak_(__job: string | any, __side: string | any, __n: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __m: number, __v: __CLPK_doublecomplex, __ldv: number, __info: number): number;

declare function zggbal_(__job: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __work: number, __info: number): number;

declare function zgges_(__jobvsl: string | any, __jobvsr: string | any, __sort: string | any, __selctg: () => number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __sdim: number, __alpha: __CLPK_doublecomplex, __beta: __CLPK_doublecomplex, __vsl: __CLPK_doublecomplex, __ldvsl: number, __vsr: __CLPK_doublecomplex, __ldvsr: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __bwork: number, __info: number): number;

declare function zggesx_(__jobvsl: string | any, __jobvsr: string | any, __sort: string | any, __selctg: () => number, __sense: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __sdim: number, __alpha: __CLPK_doublecomplex, __beta: __CLPK_doublecomplex, __vsl: __CLPK_doublecomplex, __ldvsl: number, __vsr: __CLPK_doublecomplex, __ldvsr: number, __rconde: number, __rcondv: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __iwork: number, __liwork: number, __bwork: number, __info: number): number;

declare function zggev_(__jobvl: string | any, __jobvr: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __alpha: __CLPK_doublecomplex, __beta: __CLPK_doublecomplex, __vl: __CLPK_doublecomplex, __ldvl: number, __vr: __CLPK_doublecomplex, __ldvr: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zggevx_(__balanc: string | any, __jobvl: string | any, __jobvr: string | any, __sense: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __alpha: __CLPK_doublecomplex, __beta: __CLPK_doublecomplex, __vl: __CLPK_doublecomplex, __ldvl: number, __vr: __CLPK_doublecomplex, __ldvr: number, __ilo: number, __ihi: number, __lscale: number, __rscale: number, __abnrm: number, __bbnrm: number, __rconde: number, __rcondv: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __iwork: number, __bwork: number, __info: number): number;

declare function zggglm_(__n: number, __m: number, __p: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __d__: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __y: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zgghrd_(__compq: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __q: __CLPK_doublecomplex, __ldq: number, __z__: __CLPK_doublecomplex, __ldz: number, __info: number): number;

declare function zgglse_(__m: number, __n: number, __p: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __c__: __CLPK_doublecomplex, __d__: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zggqrf_(__n: number, __m: number, __p: number, __a: __CLPK_doublecomplex, __lda: number, __taua: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __taub: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zggrqf_(__m: number, __p: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __taua: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __taub: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zggsvd_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __n: number, __p: number, __k: number, __l: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __alpha: number, __beta: number, __u: __CLPK_doublecomplex, __ldu: number, __v: __CLPK_doublecomplex, __ldv: number, __q: __CLPK_doublecomplex, __ldq: number, __work: __CLPK_doublecomplex, __rwork: number, __iwork: number, __info: number): number;

declare function zggsvp_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __p: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __tola: number, __tolb: number, __k: number, __l: number, __u: __CLPK_doublecomplex, __ldu: number, __v: __CLPK_doublecomplex, __ldv: number, __q: __CLPK_doublecomplex, __ldq: number, __iwork: number, __rwork: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zgtcon_(__norm: string | any, __n: number, __dl: __CLPK_doublecomplex, __d__: __CLPK_doublecomplex, __du: __CLPK_doublecomplex, __du2: __CLPK_doublecomplex, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zgtrfs_(__trans: string | any, __n: number, __nrhs: number, __dl: __CLPK_doublecomplex, __d__: __CLPK_doublecomplex, __du: __CLPK_doublecomplex, __dlf: __CLPK_doublecomplex, __df: __CLPK_doublecomplex, __duf: __CLPK_doublecomplex, __du2: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgtsv_(__n: number, __nrhs: number, __dl: __CLPK_doublecomplex, __d__: __CLPK_doublecomplex, __du: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zgtsvx_(__fact: string | any, __trans: string | any, __n: number, __nrhs: number, __dl: __CLPK_doublecomplex, __d__: __CLPK_doublecomplex, __du: __CLPK_doublecomplex, __dlf: __CLPK_doublecomplex, __df: __CLPK_doublecomplex, __duf: __CLPK_doublecomplex, __du2: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zgttrf_(__n: number, __dl: __CLPK_doublecomplex, __d__: __CLPK_doublecomplex, __du: __CLPK_doublecomplex, __du2: __CLPK_doublecomplex, __ipiv: number, __info: number): number;

declare function zgttrs_(__trans: string | any, __n: number, __nrhs: number, __dl: __CLPK_doublecomplex, __d__: __CLPK_doublecomplex, __du: __CLPK_doublecomplex, __du2: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zgtts2_(__itrans: number, __n: number, __nrhs: number, __dl: __CLPK_doublecomplex, __d__: __CLPK_doublecomplex, __du: __CLPK_doublecomplex, __du2: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number): number;

declare function zhbev_(__jobz: string | any, __uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zhbevd_(__jobz: string | any, __uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function zhbevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __q: __CLPK_doublecomplex, __ldq: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function zhbgst_(__vect: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: __CLPK_doublecomplex, __ldab: number, __bb: __CLPK_doublecomplex, __ldbb: number, __x: __CLPK_doublecomplex, __ldx: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zhbgv_(__jobz: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: __CLPK_doublecomplex, __ldab: number, __bb: __CLPK_doublecomplex, __ldbb: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zhbgvd_(__jobz: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: __CLPK_doublecomplex, __ldab: number, __bb: __CLPK_doublecomplex, __ldbb: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function zhbgvx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ka: number, __kb: number, __ab: __CLPK_doublecomplex, __ldab: number, __bb: __CLPK_doublecomplex, __ldbb: number, __q: __CLPK_doublecomplex, __ldq: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function zhbtrd_(__vect: string | any, __uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __d__: number, __e: number, __q: __CLPK_doublecomplex, __ldq: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zhecon_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zheequb_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __s: number, __scond: number, __amax: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zheev_(__jobz: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __w: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zheevd_(__jobz: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __w: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function zheevr_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __isuppz: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function zheevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function zhegs2_(__itype: number, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zhegst_(__itype: number, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zhegv_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __w: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zhegvd_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __w: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function zhegvx_(__itype: number, __jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function zherfs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __af: __CLPK_doublecomplex, __ldaf: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zhesv_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zhesvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __af: __CLPK_doublecomplex, __ldaf: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zhetd2_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __d__: number, __e: number, __tau: __CLPK_doublecomplex, __info: number): number;

declare function zhetf2_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __info: number): number;

declare function zhetrd_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __d__: number, __e: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zhetrf_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zhetri_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zhetrs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zhfrk_(__transr: string | any, __uplo: string | any, __trans: string | any, __n: number, __k: number, __alpha: number, __a: __CLPK_doublecomplex, __lda: number, __beta: number, __c__: __CLPK_doublecomplex): number;

declare function zhgeqz_(__job: string | any, __compq: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __h__: __CLPK_doublecomplex, __ldh: number, __t: __CLPK_doublecomplex, __ldt: number, __alpha: __CLPK_doublecomplex, __beta: __CLPK_doublecomplex, __q: __CLPK_doublecomplex, __ldq: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zhpcon_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zhpev_(__jobz: string | any, __uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zhpevd_(__jobz: string | any, __uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function zhpevx_(__jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function zhpgst_(__itype: number, __uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __bp: __CLPK_doublecomplex, __info: number): number;

declare function zhpgv_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __bp: __CLPK_doublecomplex, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zhpgvd_(__itype: number, __jobz: string | any, __uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __bp: __CLPK_doublecomplex, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function zhpgvx_(__itype: number, __jobz: string | any, __range: string | any, __uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __bp: __CLPK_doublecomplex, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __rwork: number, __iwork: number, __ifail: number, __info: number): number;

declare function zhprfs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __afp: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zhpsv_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zhpsvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __afp: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zhptrd_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __d__: number, __e: number, __tau: __CLPK_doublecomplex, __info: number): number;

declare function zhptrf_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __ipiv: number, __info: number): number;

declare function zhptri_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __ipiv: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zhptrs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zhsein_(__side: string | any, __eigsrc: string | any, __initv: string | any, __select: number, __n: number, __h__: __CLPK_doublecomplex, __ldh: number, __w: __CLPK_doublecomplex, __vl: __CLPK_doublecomplex, __ldvl: number, __vr: __CLPK_doublecomplex, __ldvr: number, __mm: number, __m: number, __work: __CLPK_doublecomplex, __rwork: number, __ifaill: number, __ifailr: number, __info: number): number;

declare function zhseqr_(__job: string | any, __compz: string | any, __n: number, __ilo: number, __ihi: number, __h__: __CLPK_doublecomplex, __ldh: number, __w: __CLPK_doublecomplex, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zlabrd_(__m: number, __n: number, __nb: number, __a: __CLPK_doublecomplex, __lda: number, __d__: number, __e: number, __tauq: __CLPK_doublecomplex, __taup: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __ldx: number, __y: __CLPK_doublecomplex, __ldy: number): number;

declare function zlacgv_(__n: number, __x: __CLPK_doublecomplex, __incx: number): number;

declare function zlacn2_(__n: number, __v: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __est: number, __kase: number, __isave: number): number;

declare function zlacon_(__n: number, __v: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __est: number, __kase: number): number;

declare function zlacp2_(__uplo: string | any, __m: number, __n: number, __a: number, __lda: number, __b: __CLPK_doublecomplex, __ldb: number): number;

declare function zlacpy_(__uplo: string | any, __m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number): number;

declare function zlacrm_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: number, __ldb: number, __c__: __CLPK_doublecomplex, __ldc: number, __rwork: number): number;

declare function zlacrt_(__n: number, __cx: __CLPK_doublecomplex, __incx: number, __cy: __CLPK_doublecomplex, __incy: number, __c__: __CLPK_doublecomplex, __s: __CLPK_doublecomplex): number;

declare function zladiv_(__ret_val: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __y: __CLPK_doublecomplex): void;

declare function zlaed0_(__qsiz: number, __n: number, __d__: number, __e: number, __q: __CLPK_doublecomplex, __ldq: number, __qstore: __CLPK_doublecomplex, __ldqs: number, __rwork: number, __iwork: number, __info: number): number;

declare function zlaed7_(__n: number, __cutpnt: number, __qsiz: number, __tlvls: number, __curlvl: number, __curpbm: number, __d__: number, __q: __CLPK_doublecomplex, __ldq: number, __rho: number, __indxq: number, __qstore: number, __qptr: number, __prmptr: number, __perm: number, __givptr: number, __givcol: number, __givnum: number, __work: __CLPK_doublecomplex, __rwork: number, __iwork: number, __info: number): number;

declare function zlaed8_(__k: number, __n: number, __qsiz: number, __q: __CLPK_doublecomplex, __ldq: number, __d__: number, __rho: number, __cutpnt: number, __z__: number, __dlamda: number, __q2: __CLPK_doublecomplex, __ldq2: number, __w: number, __indxp: number, __indx: number, __indxq: number, __perm: number, __givptr: number, __givcol: number, __givnum: number, __info: number): number;

declare function zlaein_(__rightv: number, __noinit: number, __n: number, __h__: __CLPK_doublecomplex, __ldh: number, __w: __CLPK_doublecomplex, __v: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __rwork: number, __eps3: number, __smlnum: number, __info: number): number;

declare function zlaesy_(__a: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __rt1: __CLPK_doublecomplex, __rt2: __CLPK_doublecomplex, __evscal: __CLPK_doublecomplex, __cs1: __CLPK_doublecomplex, __sn1: __CLPK_doublecomplex): number;

declare function zlaev2_(__a: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __rt1: number, __rt2: number, __cs1: number, __sn1: __CLPK_doublecomplex): number;

declare function zlag2c_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __sa: __CLPK_complex, __ldsa: number, __info: number): number;

declare function zlags2_(__upper: number, __a1: number, __a2: __CLPK_doublecomplex, __a3: number, __b1: number, __b2: __CLPK_doublecomplex, __b3: number, __csu: number, __snu: __CLPK_doublecomplex, __csv: number, __snv: __CLPK_doublecomplex, __csq: number, __snq: __CLPK_doublecomplex): number;

declare function zlagtm_(__trans: string | any, __n: number, __nrhs: number, __alpha: number, __dl: __CLPK_doublecomplex, __d__: __CLPK_doublecomplex, __du: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __ldx: number, __beta: number, __b: __CLPK_doublecomplex, __ldb: number): number;

declare function zlahef_(__uplo: string | any, __n: number, __nb: number, __kb: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __w: __CLPK_doublecomplex, __ldw: number, __info: number): number;

declare function zlahqr_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: __CLPK_doublecomplex, __ldh: number, __w: __CLPK_doublecomplex, __iloz: number, __ihiz: number, __z__: __CLPK_doublecomplex, __ldz: number, __info: number): number;

declare function zlahr2_(__n: number, __k: number, __nb: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __t: __CLPK_doublecomplex, __ldt: number, __y: __CLPK_doublecomplex, __ldy: number): number;

declare function zlahrd_(__n: number, __k: number, __nb: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __t: __CLPK_doublecomplex, __ldt: number, __y: __CLPK_doublecomplex, __ldy: number): number;

declare function zlaic1_(__job: number, __j: number, __x: __CLPK_doublecomplex, __sest: number, __w: __CLPK_doublecomplex, __gamma: __CLPK_doublecomplex, __sestpr: number, __s: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex): number;

declare function zlals0_(__icompq: number, __nl: number, __nr: number, __sqre: number, __nrhs: number, __b: __CLPK_doublecomplex, __ldb: number, __bx: __CLPK_doublecomplex, __ldbx: number, __perm: number, __givptr: number, __givcol: number, __ldgcol: number, __givnum: number, __ldgnum: number, __poles: number, __difl: number, __difr: number, __z__: number, __k: number, __c__: number, __s: number, __rwork: number, __info: number): number;

declare function zlalsa_(__icompq: number, __smlsiz: number, __n: number, __nrhs: number, __b: __CLPK_doublecomplex, __ldb: number, __bx: __CLPK_doublecomplex, __ldbx: number, __u: number, __ldu: number, __vt: number, __k: number, __difl: number, __difr: number, __z__: number, __poles: number, __givptr: number, __givcol: number, __ldgcol: number, __perm: number, __givnum: number, __c__: number, __s: number, __rwork: number, __iwork: number, __info: number): number;

declare function zlalsd_(__uplo: string | any, __smlsiz: number, __n: number, __nrhs: number, __d__: number, __e: number, __b: __CLPK_doublecomplex, __ldb: number, __rcond: number, __rank: number, __work: __CLPK_doublecomplex, __rwork: number, __iwork: number, __info: number): number;

declare function zlangb_(__norm: string | any, __n: number, __kl: number, __ku: number, __ab: __CLPK_doublecomplex, __ldab: number, __work: number): number;

declare function zlange_(__norm: string | any, __m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __work: number): number;

declare function zlangt_(__norm: string | any, __n: number, __dl: __CLPK_doublecomplex, __d__: __CLPK_doublecomplex, __du: __CLPK_doublecomplex): number;

declare function zlanhb_(__norm: string | any, __uplo: string | any, __n: number, __k: number, __ab: __CLPK_doublecomplex, __ldab: number, __work: number): number;

declare function zlanhe_(__norm: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __work: number): number;

declare function zlanhf_(__norm: string | any, __transr: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __work: number): number;

declare function zlanhp_(__norm: string | any, __uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __work: number): number;

declare function zlanhs_(__norm: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __work: number): number;

declare function zlanht_(__norm: string | any, __n: number, __d__: number, __e: __CLPK_doublecomplex): number;

declare function zlansb_(__norm: string | any, __uplo: string | any, __n: number, __k: number, __ab: __CLPK_doublecomplex, __ldab: number, __work: number): number;

declare function zlansp_(__norm: string | any, __uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __work: number): number;

declare function zlansy_(__norm: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __work: number): number;

declare function zlantb_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __k: number, __ab: __CLPK_doublecomplex, __ldab: number, __work: number): number;

declare function zlantp_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __ap: __CLPK_doublecomplex, __work: number): number;

declare function zlantr_(__norm: string | any, __uplo: string | any, __diag: string | any, __m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __work: number): number;

declare function zlapll_(__n: number, __x: __CLPK_doublecomplex, __incx: number, __y: __CLPK_doublecomplex, __incy: number, __ssmin: number): number;

declare function zlapmt_(__forwrd: number, __m: number, __n: number, __x: __CLPK_doublecomplex, __ldx: number, __k: number): number;

declare function zlaqgb_(__m: number, __n: number, __kl: number, __ku: number, __ab: __CLPK_doublecomplex, __ldab: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __equed: string | any): number;

declare function zlaqge_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __r__: number, __c__: number, __rowcnd: number, __colcnd: number, __amax: number, __equed: string | any): number;

declare function zlaqhb_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function zlaqhe_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function zlaqhp_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function zlaqp2_(__m: number, __n: number, __offset: number, __a: __CLPK_doublecomplex, __lda: number, __jpvt: number, __tau: __CLPK_doublecomplex, __vn1: number, __vn2: number, __work: __CLPK_doublecomplex): number;

declare function zlaqps_(__m: number, __n: number, __offset: number, __nb: number, __kb: number, __a: __CLPK_doublecomplex, __lda: number, __jpvt: number, __tau: __CLPK_doublecomplex, __vn1: number, __vn2: number, __auxv: __CLPK_doublecomplex, __f: __CLPK_doublecomplex, __ldf: number): number;

declare function zlaqr0_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: __CLPK_doublecomplex, __ldh: number, __w: __CLPK_doublecomplex, __iloz: number, __ihiz: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zlaqr1_(__n: number, __h__: __CLPK_doublecomplex, __ldh: number, __s1: __CLPK_doublecomplex, __s2: __CLPK_doublecomplex, __v: __CLPK_doublecomplex): number;

declare function zlaqr2_(__wantt: number, __wantz: number, __n: number, __ktop: number, __kbot: number, __nw: number, __h__: __CLPK_doublecomplex, __ldh: number, __iloz: number, __ihiz: number, __z__: __CLPK_doublecomplex, __ldz: number, __ns: number, __nd: number, __sh: __CLPK_doublecomplex, __v: __CLPK_doublecomplex, __ldv: number, __nh: number, __t: __CLPK_doublecomplex, __ldt: number, __nv: number, __wv: __CLPK_doublecomplex, __ldwv: number, __work: __CLPK_doublecomplex, __lwork: number): number;

declare function zlaqr3_(__wantt: number, __wantz: number, __n: number, __ktop: number, __kbot: number, __nw: number, __h__: __CLPK_doublecomplex, __ldh: number, __iloz: number, __ihiz: number, __z__: __CLPK_doublecomplex, __ldz: number, __ns: number, __nd: number, __sh: __CLPK_doublecomplex, __v: __CLPK_doublecomplex, __ldv: number, __nh: number, __t: __CLPK_doublecomplex, __ldt: number, __nv: number, __wv: __CLPK_doublecomplex, __ldwv: number, __work: __CLPK_doublecomplex, __lwork: number): number;

declare function zlaqr4_(__wantt: number, __wantz: number, __n: number, __ilo: number, __ihi: number, __h__: __CLPK_doublecomplex, __ldh: number, __w: __CLPK_doublecomplex, __iloz: number, __ihiz: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zlaqr5_(__wantt: number, __wantz: number, __kacc22: number, __n: number, __ktop: number, __kbot: number, __nshfts: number, __s: __CLPK_doublecomplex, __h__: __CLPK_doublecomplex, __ldh: number, __iloz: number, __ihiz: number, __z__: __CLPK_doublecomplex, __ldz: number, __v: __CLPK_doublecomplex, __ldv: number, __u: __CLPK_doublecomplex, __ldu: number, __nv: number, __wv: __CLPK_doublecomplex, __ldwv: number, __nh: number, __wh: __CLPK_doublecomplex, __ldwh: number): number;

declare function zlaqsb_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function zlaqsp_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function zlaqsy_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __s: number, __scond: number, __amax: number, __equed: string | any): number;

declare function zlar1v_(__n: number, __b1: number, __bn: number, __lambda: number, __d__: number, __l: number, __ld: number, __lld: number, __pivmin: number, __gaptol: number, __z__: __CLPK_doublecomplex, __wantnc: number, __negcnt: number, __ztz: number, __mingma: number, __r__: number, __isuppz: number, __nrminv: number, __resid: number, __rqcorr: number, __work: number): number;

declare function zlar2v_(__n: number, __x: __CLPK_doublecomplex, __y: __CLPK_doublecomplex, __z__: __CLPK_doublecomplex, __incx: number, __c__: number, __s: __CLPK_doublecomplex, __incc: number): number;

declare function zlarcm_(__m: number, __n: number, __a: number, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __c__: __CLPK_doublecomplex, __ldc: number, __rwork: number): number;

declare function zlarf_(__side: string | any, __m: number, __n: number, __v: __CLPK_doublecomplex, __incv: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex): number;

declare function zlarfb_(__side: string | any, __trans: string | any, __direct: string | any, __storev: string | any, __m: number, __n: number, __k: number, __v: __CLPK_doublecomplex, __ldv: number, __t: __CLPK_doublecomplex, __ldt: number, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __ldwork: number): number;

declare function zlarfg_(__n: number, __alpha: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __incx: number, __tau: __CLPK_doublecomplex): number;

declare function zlarfp_(__n: number, __alpha: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __incx: number, __tau: __CLPK_doublecomplex): number;

declare function zlarft_(__direct: string | any, __storev: string | any, __n: number, __k: number, __v: __CLPK_doublecomplex, __ldv: number, __tau: __CLPK_doublecomplex, __t: __CLPK_doublecomplex, __ldt: number): number;

declare function zlarfx_(__side: string | any, __m: number, __n: number, __v: __CLPK_doublecomplex, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex): number;

declare function zlargv_(__n: number, __x: __CLPK_doublecomplex, __incx: number, __y: __CLPK_doublecomplex, __incy: number, __c__: number, __incc: number): number;

declare function zlarnv_(__idist: number, __iseed: number, __n: number, __x: __CLPK_doublecomplex): number;

declare function zlarrv_(__n: number, __vl: number, __vu: number, __d__: number, __l: number, __pivmin: number, __isplit: number, __m: number, __dol: number, __dou: number, __minrgp: number, __rtol1: number, __rtol2: number, __w: number, __werr: number, __wgap: number, __iblock: number, __indexw: number, __gers: number, __z__: __CLPK_doublecomplex, __ldz: number, __isuppz: number, __work: number, __iwork: number, __info: number): number;

declare function zlarscl2_(__m: number, __n: number, __d__: number, __x: __CLPK_doublecomplex, __ldx: number): number;

declare function zlartg_(__f: __CLPK_doublecomplex, __g: __CLPK_doublecomplex, __cs: number, __sn: __CLPK_doublecomplex, __r__: __CLPK_doublecomplex): number;

declare function zlartv_(__n: number, __x: __CLPK_doublecomplex, __incx: number, __y: __CLPK_doublecomplex, __incy: number, __c__: number, __s: __CLPK_doublecomplex, __incc: number): number;

declare function zlarz_(__side: string | any, __m: number, __n: number, __l: number, __v: __CLPK_doublecomplex, __incv: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex): number;

declare function zlarzb_(__side: string | any, __trans: string | any, __direct: string | any, __storev: string | any, __m: number, __n: number, __k: number, __l: number, __v: __CLPK_doublecomplex, __ldv: number, __t: __CLPK_doublecomplex, __ldt: number, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __ldwork: number): number;

declare function zlarzt_(__direct: string | any, __storev: string | any, __n: number, __k: number, __v: __CLPK_doublecomplex, __ldv: number, __tau: __CLPK_doublecomplex, __t: __CLPK_doublecomplex, __ldt: number): number;

declare function zlascl2_(__m: number, __n: number, __d__: number, __x: __CLPK_doublecomplex, __ldx: number): number;

declare function zlascl_(__type__: string | any, __kl: number, __ku: number, __cfrom: number, __cto: number, __m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function zlaset_(__uplo: string | any, __m: number, __n: number, __alpha: __CLPK_doublecomplex, __beta: __CLPK_doublecomplex, __a: __CLPK_doublecomplex, __lda: number): number;

declare function zlasr_(__side: string | any, __pivot: string | any, __direct: string | any, __m: number, __n: number, __c__: number, __s: number, __a: __CLPK_doublecomplex, __lda: number): number;

declare function zlassq_(__n: number, __x: __CLPK_doublecomplex, __incx: number, __scale: number, __sumsq: number): number;

declare function zlaswp_(__n: number, __a: __CLPK_doublecomplex, __lda: number, __k1: number, __k2: number, __ipiv: number, __incx: number): number;

declare function zlasyf_(__uplo: string | any, __n: number, __nb: number, __kb: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __w: __CLPK_doublecomplex, __ldw: number, __info: number): number;

declare function zlat2c_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __sa: __CLPK_complex, __ldsa: number, __info: number): number;

declare function zlatbs_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __x: __CLPK_doublecomplex, __scale: number, __cnorm: number, __info: number): number;

declare function zlatdf_(__ijob: number, __n: number, __z__: __CLPK_doublecomplex, __ldz: number, __rhs: __CLPK_doublecomplex, __rdsum: number, __rdscal: number, __ipiv: number, __jpiv: number): number;

declare function zlatps_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __ap: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __scale: number, __cnorm: number, __info: number): number;

declare function zlatrd_(__uplo: string | any, __n: number, __nb: number, __a: __CLPK_doublecomplex, __lda: number, __e: number, __tau: __CLPK_doublecomplex, __w: __CLPK_doublecomplex, __ldw: number): number;

declare function zlatrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __normin: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __x: __CLPK_doublecomplex, __scale: number, __cnorm: number, __info: number): number;

declare function zlatrz_(__m: number, __n: number, __l: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex): number;

declare function zlatzm_(__side: string | any, __m: number, __n: number, __v: __CLPK_doublecomplex, __incv: number, __tau: __CLPK_doublecomplex, __c1: __CLPK_doublecomplex, __c2: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex): number;

declare function zlauu2_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function zlauum_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function zpbcon_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __anorm: number, __rcond: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zpbequ_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function zpbrfs_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_doublecomplex, __ldab: number, __afb: __CLPK_doublecomplex, __ldafb: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zpbstf_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __info: number): number;

declare function zpbsv_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_doublecomplex, __ldab: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zpbsvx_(__fact: string | any, __uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_doublecomplex, __ldab: number, __afb: __CLPK_doublecomplex, __ldafb: number, __equed: string | any, __s: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zpbtf2_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __info: number): number;

declare function zpbtrf_(__uplo: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __info: number): number;

declare function zpbtrs_(__uplo: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_doublecomplex, __ldab: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zpftrf_(__transr: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __info: number): number;

declare function zpftri_(__transr: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __info: number): number;

declare function zpftrs_(__transr: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zpocon_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __anorm: number, __rcond: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zpoequ_(__n: number, __a: __CLPK_doublecomplex, __lda: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function zpoequb_(__n: number, __a: __CLPK_doublecomplex, __lda: number, __s: number, __scond: number, __amax: number, __info: number): number;

declare function zporfs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __af: __CLPK_doublecomplex, __ldaf: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zposv_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zposvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __af: __CLPK_doublecomplex, __ldaf: number, __equed: string | any, __s: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zpotf2_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function zpotrf_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function zpotri_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function zpotrs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zppcon_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __anorm: number, __rcond: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zppequ_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __s: number, __scond: number, __amax: number, __info: number): number;

declare function zpprfs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __afp: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zppsv_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zppsvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __afp: __CLPK_doublecomplex, __equed: string | any, __s: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zpptrf_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __info: number): number;

declare function zpptri_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __info: number): number;

declare function zpptrs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zpstf2_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __piv: number, __rank: number, __tol: number, __work: number, __info: number): number;

declare function zpstrf_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __piv: number, __rank: number, __tol: number, __work: number, __info: number): number;

declare function zptcon_(__n: number, __d__: number, __e: __CLPK_doublecomplex, __anorm: number, __rcond: number, __rwork: number, __info: number): number;

declare function zpteqr_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: number, __info: number): number;

declare function zptrfs_(__uplo: string | any, __n: number, __nrhs: number, __d__: number, __e: __CLPK_doublecomplex, __df: number, __ef: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zptsv_(__n: number, __nrhs: number, __d__: number, __e: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zptsvx_(__fact: string | any, __n: number, __nrhs: number, __d__: number, __e: __CLPK_doublecomplex, __df: number, __ef: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zpttrf_(__n: number, __d__: number, __e: __CLPK_doublecomplex, __info: number): number;

declare function zpttrs_(__uplo: string | any, __n: number, __nrhs: number, __d__: number, __e: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zptts2_(__iuplo: number, __n: number, __nrhs: number, __d__: number, __e: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number): number;

declare function zrot_(__n: number, __cx: __CLPK_doublecomplex, __incx: number, __cy: __CLPK_doublecomplex, __incy: number, __c__: number, __s: __CLPK_doublecomplex): number;

declare function zspcon_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zspmv_(__uplo: string | any, __n: number, __alpha: __CLPK_doublecomplex, __ap: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __incx: number, __beta: __CLPK_doublecomplex, __y: __CLPK_doublecomplex, __incy: number): number;

declare function zspr_(__uplo: string | any, __n: number, __alpha: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __incx: number, __ap: __CLPK_doublecomplex): number;

declare function zsprfs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __afp: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zspsv_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zspsvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __afp: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zsptrf_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __ipiv: number, __info: number): number;

declare function zsptri_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __ipiv: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zsptrs_(__uplo: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function zstedc_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __lrwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function zstegr_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __abstol: number, __m: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __isuppz: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function zstein_(__n: number, __d__: number, __e: number, __m: number, __w: number, __iblock: number, __isplit: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: number, __iwork: number, __ifail: number, __info: number): number;

declare function zstemr_(__jobz: string | any, __range: string | any, __n: number, __d__: number, __e: number, __vl: number, __vu: number, __il: number, __iu: number, __m: number, __w: number, __z__: __CLPK_doublecomplex, __ldz: number, __nzc: number, __isuppz: number, __tryrac: number, __work: number, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function zsteqr_(__compz: string | any, __n: number, __d__: number, __e: number, __z__: __CLPK_doublecomplex, __ldz: number, __work: number, __info: number): number;

declare function zsycon_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __anorm: number, __rcond: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zsyequb_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __s: number, __scond: number, __amax: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zsymv_(__uplo: string | any, __n: number, __alpha: __CLPK_doublecomplex, __a: __CLPK_doublecomplex, __lda: number, __x: __CLPK_doublecomplex, __incx: number, __beta: __CLPK_doublecomplex, __y: __CLPK_doublecomplex, __incy: number): number;

declare function zsyr_(__uplo: string | any, __n: number, __alpha: __CLPK_doublecomplex, __x: __CLPK_doublecomplex, __incx: number, __a: __CLPK_doublecomplex, __lda: number): number;

declare function zsyrfs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __af: __CLPK_doublecomplex, __ldaf: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function zsysv_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zsysvx_(__fact: string | any, __uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __af: __CLPK_doublecomplex, __ldaf: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __rcond: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __lwork: number, __rwork: number, __info: number): number;

declare function zsytf2_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __info: number): number;

declare function zsytrf_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zsytri_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zsytrs_(__uplo: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __ipiv: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function ztbcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __kd: number, __ab: __CLPK_doublecomplex, __ldab: number, __rcond: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function ztbrfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_doublecomplex, __ldab: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function ztbtrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __kd: number, __nrhs: number, __ab: __CLPK_doublecomplex, __ldab: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function ztfsm_(__transr: string | any, __side: string | any, __uplo: string | any, __trans: string | any, __diag: string | any, __m: number, __n: number, __alpha: __CLPK_doublecomplex, __a: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number): number;

declare function ztftri_(__transr: string | any, __uplo: string | any, __diag: string | any, __n: number, __a: __CLPK_doublecomplex, __info: number): number;

declare function ztfttp_(__transr: string | any, __uplo: string | any, __n: number, __arf: __CLPK_doublecomplex, __ap: __CLPK_doublecomplex, __info: number): number;

declare function ztfttr_(__transr: string | any, __uplo: string | any, __n: number, __arf: __CLPK_doublecomplex, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function ztgevc_(__side: string | any, __howmny: string | any, __select: number, __n: number, __s: __CLPK_doublecomplex, __lds: number, __p: __CLPK_doublecomplex, __ldp: number, __vl: __CLPK_doublecomplex, __ldvl: number, __vr: __CLPK_doublecomplex, __ldvr: number, __mm: number, __m: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function ztgex2_(__wantq: number, __wantz: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __q: __CLPK_doublecomplex, __ldq: number, __z__: __CLPK_doublecomplex, __ldz: number, __j1: number, __info: number): number;

declare function ztgexc_(__wantq: number, __wantz: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __q: __CLPK_doublecomplex, __ldq: number, __z__: __CLPK_doublecomplex, __ldz: number, __ifst: number, __ilst: number, __info: number): number;

declare function ztgsen_(__ijob: number, __wantq: number, __wantz: number, __select: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __alpha: __CLPK_doublecomplex, __beta: __CLPK_doublecomplex, __q: __CLPK_doublecomplex, __ldq: number, __z__: __CLPK_doublecomplex, __ldz: number, __m: number, __pl: number, __pr: number, __dif: number, __work: __CLPK_doublecomplex, __lwork: number, __iwork: number, __liwork: number, __info: number): number;

declare function ztgsja_(__jobu: string | any, __jobv: string | any, __jobq: string | any, __m: number, __p: number, __n: number, __k: number, __l: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __tola: number, __tolb: number, __alpha: number, __beta: number, __u: __CLPK_doublecomplex, __ldu: number, __v: __CLPK_doublecomplex, __ldv: number, __q: __CLPK_doublecomplex, __ldq: number, __work: __CLPK_doublecomplex, __ncycle: number, __info: number): number;

declare function ztgsna_(__job: string | any, __howmny: string | any, __select: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __vl: __CLPK_doublecomplex, __ldvl: number, __vr: __CLPK_doublecomplex, __ldvr: number, __s: number, __dif: number, __mm: number, __m: number, __work: __CLPK_doublecomplex, __lwork: number, __iwork: number, __info: number): number;

declare function ztgsy2_(__trans: string | any, __ijob: number, __m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __c__: __CLPK_doublecomplex, __ldc: number, __d__: __CLPK_doublecomplex, __ldd: number, __e: __CLPK_doublecomplex, __lde: number, __f: __CLPK_doublecomplex, __ldf: number, __scale: number, __rdsum: number, __rdscal: number, __info: number): number;

declare function ztgsyl_(__trans: string | any, __ijob: number, __m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __c__: __CLPK_doublecomplex, __ldc: number, __d__: __CLPK_doublecomplex, __ldd: number, __e: __CLPK_doublecomplex, __lde: number, __f: __CLPK_doublecomplex, __ldf: number, __scale: number, __dif: number, __work: __CLPK_doublecomplex, __lwork: number, __iwork: number, __info: number): number;

declare function ztpcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __ap: __CLPK_doublecomplex, __rcond: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function ztprfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function ztptri_(__uplo: string | any, __diag: string | any, __n: number, __ap: __CLPK_doublecomplex, __info: number): number;

declare function ztptrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __ap: __CLPK_doublecomplex, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function ztpttf_(__transr: string | any, __uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __arf: __CLPK_doublecomplex, __info: number): number;

declare function ztpttr_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function ztrcon_(__norm: string | any, __uplo: string | any, __diag: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __rcond: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function ztrevc_(__side: string | any, __howmny: string | any, __select: number, __n: number, __t: __CLPK_doublecomplex, __ldt: number, __vl: __CLPK_doublecomplex, __ldvl: number, __vr: __CLPK_doublecomplex, __ldvr: number, __mm: number, __m: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function ztrexc_(__compq: string | any, __n: number, __t: __CLPK_doublecomplex, __ldt: number, __q: __CLPK_doublecomplex, __ldq: number, __ifst: number, __ilst: number, __info: number): number;

declare function ztrrfs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __x: __CLPK_doublecomplex, __ldx: number, __ferr: number, __berr: number, __work: __CLPK_doublecomplex, __rwork: number, __info: number): number;

declare function ztrsen_(__job: string | any, __compq: string | any, __select: number, __n: number, __t: __CLPK_doublecomplex, __ldt: number, __q: __CLPK_doublecomplex, __ldq: number, __w: __CLPK_doublecomplex, __m: number, __s: number, __sep: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function ztrsna_(__job: string | any, __howmny: string | any, __select: number, __n: number, __t: __CLPK_doublecomplex, __ldt: number, __vl: __CLPK_doublecomplex, __ldvl: number, __vr: __CLPK_doublecomplex, __ldvr: number, __s: number, __sep: number, __mm: number, __m: number, __work: __CLPK_doublecomplex, __ldwork: number, __rwork: number, __info: number): number;

declare function ztrsyl_(__trana: string | any, __tranb: string | any, __isgn: number, __m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __c__: __CLPK_doublecomplex, __ldc: number, __scale: number, __info: number): number;

declare function ztrti2_(__uplo: string | any, __diag: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function ztrtri_(__uplo: string | any, __diag: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __info: number): number;

declare function ztrtrs_(__uplo: string | any, __trans: string | any, __diag: string | any, __n: number, __nrhs: number, __a: __CLPK_doublecomplex, __lda: number, __b: __CLPK_doublecomplex, __ldb: number, __info: number): number;

declare function ztrttf_(__transr: string | any, __uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __arf: __CLPK_doublecomplex, __info: number): number;

declare function ztrttp_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __ap: __CLPK_doublecomplex, __info: number): number;

declare function ztzrqf_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __info: number): number;

declare function ztzrzf_(__m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zung2l_(__m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zung2r_(__m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zungbr_(__vect: string | any, __m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zunghr_(__n: number, __ilo: number, __ihi: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zungl2_(__m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zunglq_(__m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zungql_(__m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zungqr_(__m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zungr2_(__m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __info: number): number;

declare function zungrq_(__m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zungtr_(__uplo: string | any, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zunm2l_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zunm2r_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zunmbr_(__vect: string | any, __side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zunmhr_(__side: string | any, __trans: string | any, __m: number, __n: number, __ilo: number, __ihi: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zunml2_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zunmlq_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zunmql_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zunmqr_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zunmr2_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zunmr3_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __l: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zunmrq_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zunmrz_(__side: string | any, __trans: string | any, __m: number, __n: number, __k: number, __l: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zunmtr_(__side: string | any, __uplo: string | any, __trans: string | any, __m: number, __n: number, __a: __CLPK_doublecomplex, __lda: number, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __lwork: number, __info: number): number;

declare function zupgtr_(__uplo: string | any, __n: number, __ap: __CLPK_doublecomplex, __tau: __CLPK_doublecomplex, __q: __CLPK_doublecomplex, __ldq: number, __work: __CLPK_doublecomplex, __info: number): number;

declare function zupmtr_(__side: string | any, __uplo: string | any, __trans: string | any, __m: number, __n: number, __ap: __CLPK_doublecomplex, __tau: __CLPK_doublecomplex, __c__: __CLPK_doublecomplex, __ldc: number, __work: __CLPK_doublecomplex, __info: number): number;
