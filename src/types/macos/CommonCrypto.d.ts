
declare function CCCalibratePBKDF(algorithm: number, passwordLen: number, saltLen: number, prf: number, derivedKeyLen: number, msec: number): number;

declare function CCCrypt(op: number, alg: number, options: number, key: any, keyLength: number, iv: any, dataIn: any, dataInLength: number, dataOut: any, dataOutAvailable: number, dataOutMoved: number): number;

declare function CCCryptorCreate(op: number, alg: number, options: number, key: any, keyLength: number, iv: any, cryptorRef: any): number;

declare function CCCryptorCreateFromData(op: number, alg: number, options: number, key: any, keyLength: number, iv: any, data: any, dataLength: number, cryptorRef: any, dataUsed: number): number;

declare function CCCryptorCreateWithMode(op: number, mode: number, alg: number, padding: number, iv: any, key: any, keyLength: number, tweak: any, tweakLength: number, numRounds: number, options: number, cryptorRef: any): number;

declare function CCCryptorFinal(cryptorRef: any, dataOut: any, dataOutAvailable: number, dataOutMoved: number): number;

declare function CCCryptorGetOutputLength(cryptorRef: any, inputLength: number, final: boolean): number;

declare function CCCryptorRelease(cryptorRef: any): number;

declare function CCCryptorReset(cryptorRef: any, iv: any): number;

declare function CCCryptorUpdate(cryptorRef: any, dataIn: any, dataInLength: number, dataOut: any, dataOutAvailable: number, dataOutMoved: number): number;

declare function CCHmac(algorithm: number, key: any, keyLength: number, data: any, dataLength: number, macOut: any): void;

interface CCHmacContext {
	ctx: number;
}
declare var CCHmacContext: CCHmacContext;

declare function CCHmacFinal(ctx: CCHmacContext, macOut: any): void;

declare function CCHmacInit(ctx: CCHmacContext, algorithm: number, key: any, keyLength: number): void;

declare function CCHmacUpdate(ctx: CCHmacContext, data: any, dataLength: number): void;

declare function CCKeyDerivationPBKDF(algorithm: number, password: string | any, passwordLen: number, salt: string | any, saltLen: number, prf: number, rounds: number, derivedKey: string | any, derivedKeyLen: number): number;

declare function CCRandomGenerateBytes(bytes: any, count: number): number;

declare function CCSymmetricKeyUnwrap(algorithm: number, iv: string | any, ivLen: number, kek: string | any, kekLen: number, wrappedKey: string | any, wrappedKeyLen: number, rawKey: string | any, rawKeyLen: number): number;

declare function CCSymmetricKeyWrap(algorithm: number, iv: string | any, ivLen: number, kek: string | any, kekLen: number, rawKey: string | any, rawKeyLen: number, wrappedKey: string | any, wrappedKeyLen: number): number;

declare function CCSymmetricUnwrappedSize(algorithm: number, wrappedKeyLen: number): number;

declare function CCSymmetricWrappedSize(algorithm: number, rawKeyLen: number): number;

interface CC_MD2_CTX {
	num: number;
	data: number;
	cksm: number;
	state: number;
}
declare var CC_MD2_CTX: CC_MD2_CTX;

interface CC_MD4_CTX {
	A: number;
	B: number;
	C: number;
	D: number;
	Nl: number;
	Nh: number;
	data: number;
	num: number;
}
declare var CC_MD4_CTX: CC_MD4_CTX;

interface CC_MD5_CTX {
	A: number;
	B: number;
	C: number;
	D: number;
	Nl: number;
	Nh: number;
	data: number;
	num: number;
}
declare var CC_MD5_CTX: CC_MD5_CTX;

declare function CC_SHA1(data: any, len: number, md: string | any): string;

interface CC_SHA1_CTX {
	h0: number;
	h1: number;
	h2: number;
	h3: number;
	h4: number;
	Nl: number;
	Nh: number;
	data: number;
	num: number;
}
declare var CC_SHA1_CTX: CC_SHA1_CTX;

declare function CC_SHA1_Final(md: string | any, c: CC_SHA1_CTX): number;

declare function CC_SHA1_Init(c: CC_SHA1_CTX): number;

declare function CC_SHA1_Update(c: CC_SHA1_CTX, data: any, len: number): number;

declare function CC_SHA224(data: any, len: number, md: string | any): string;

declare function CC_SHA224_Final(md: string | any, c: CC_SHA256_CTX): number;

declare function CC_SHA224_Init(c: CC_SHA256_CTX): number;

declare function CC_SHA224_Update(c: CC_SHA256_CTX, data: any, len: number): number;

declare function CC_SHA256(data: any, len: number, md: string | any): string;

interface CC_SHA256_CTX {
	count: number;
	hash: number;
	wbuf: number;
}
declare var CC_SHA256_CTX: CC_SHA256_CTX;

declare function CC_SHA256_Final(md: string | any, c: CC_SHA256_CTX): number;

declare function CC_SHA256_Init(c: CC_SHA256_CTX): number;

declare function CC_SHA256_Update(c: CC_SHA256_CTX, data: any, len: number): number;

declare function CC_SHA384(data: any, len: number, md: string | any): string;

declare function CC_SHA384_Final(md: string | any, c: CC_SHA512_CTX): number;

declare function CC_SHA384_Init(c: CC_SHA512_CTX): number;

declare function CC_SHA384_Update(c: CC_SHA512_CTX, data: any, len: number): number;

declare function CC_SHA512(data: any, len: number, md: string | any): string;

interface CC_SHA512_CTX {
	count: number;
	hash: number;
	wbuf: number;
}
declare var CC_SHA512_CTX: CC_SHA512_CTX;

declare function CC_SHA512_Final(md: string | any, c: CC_SHA512_CTX): number;

declare function CC_SHA512_Init(c: CC_SHA512_CTX): number;

declare function CC_SHA512_Update(c: CC_SHA512_CTX, data: any, len: number): number;

declare var CCrfc3394_iv: string;

declare var CCrfc3394_ivLen: number;

declare const ccNoPadding: number;

declare const ccPKCS7Padding: number;

declare const kCCAlgorithm3DES: number;

declare const kCCAlgorithmAES: number;

declare const kCCAlgorithmAES128: number;

declare const kCCAlgorithmBlowfish: number;

declare const kCCAlgorithmCAST: number;

declare const kCCAlgorithmDES: number;

declare const kCCAlgorithmRC2: number;

declare const kCCAlgorithmRC4: number;

declare const kCCAlignmentError: number;

declare const kCCBlockSize3DES: number;

declare const kCCBlockSizeAES128: number;

declare const kCCBlockSizeBlowfish: number;

declare const kCCBlockSizeCAST: number;

declare const kCCBlockSizeDES: number;

declare const kCCBlockSizeRC2: number;

declare const kCCBufferTooSmall: number;

declare const kCCCallSequenceError: number;

declare const kCCContextSize3DES: number;

declare const kCCContextSizeAES128: number;

declare const kCCContextSizeCAST: number;

declare const kCCContextSizeDES: number;

declare const kCCContextSizeRC4: number;

declare const kCCDecodeError: number;

declare const kCCDecrypt: number;

declare const kCCEncrypt: number;

declare const kCCHmacAlgMD5: number;

declare const kCCHmacAlgSHA1: number;

declare const kCCHmacAlgSHA224: number;

declare const kCCHmacAlgSHA256: number;

declare const kCCHmacAlgSHA384: number;

declare const kCCHmacAlgSHA512: number;

declare const kCCInvalidKey: number;

declare const kCCKeySize3DES: number;

declare const kCCKeySizeAES128: number;

declare const kCCKeySizeAES192: number;

declare const kCCKeySizeAES256: number;

declare const kCCKeySizeDES: number;

declare const kCCKeySizeError: number;

declare const kCCKeySizeMaxBlowfish: number;

declare const kCCKeySizeMaxCAST: number;

declare const kCCKeySizeMaxRC2: number;

declare const kCCKeySizeMaxRC4: number;

declare const kCCKeySizeMinBlowfish: number;

declare const kCCKeySizeMinCAST: number;

declare const kCCKeySizeMinRC2: number;

declare const kCCKeySizeMinRC4: number;

declare const kCCMemoryFailure: number;

declare const kCCModeCBC: number;

declare const kCCModeCFB: number;

declare const kCCModeCFB8: number;

declare const kCCModeCTR: number;

declare const kCCModeECB: number;

declare const kCCModeOFB: number;

declare const kCCModeOptionCTR_BE: number;

declare const kCCModeRC4: number;

declare const kCCOptionECBMode: number;

declare const kCCOptionPKCS7Padding: number;

declare const kCCOverflow: number;

declare const kCCPBKDF2: number;

declare const kCCPRFHmacAlgSHA1: number;

declare const kCCPRFHmacAlgSHA224: number;

declare const kCCPRFHmacAlgSHA256: number;

declare const kCCPRFHmacAlgSHA384: number;

declare const kCCPRFHmacAlgSHA512: number;

declare const kCCParamError: number;

declare const kCCRNGFailure: number;

declare const kCCSuccess: number;

declare const kCCUnimplemented: number;

declare const kCCUnspecifiedError: number;

declare const kCCWRAPAES: number;
