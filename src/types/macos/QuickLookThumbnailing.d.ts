
declare class QLFileThumbnailRequest extends NSObject {

	readonly fileURL: NSURL;

	readonly maximumSize: CGSize;

	readonly minimumSize: CGSize;

	readonly scale: number;
}

enum QLThumbnailError {

	GenerationFailed = 0,

	SavingToURLFailed = 1,

	NoCachedThumbnail = 2,

	NoCloudThumbnail = 3,

	RequestInvalid = 4,

	RequestCancelled = 5
}


declare var QLThumbnailErrorDomain: string;

declare class QLThumbnailGenerationRequest extends NSObject implements NSCopying, NSSecureCoding {

	setIconMode(_: boolean)

	iconMode: boolean;

	setMinimumDimension(_: number)

	minimumDimension: number;

	readonly representationTypes: QLThumbnailGenerationRequestRepresentationTypes;

	readonly scale: number;

	readonly size: CGSize;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(fileAtURL: NSURL, size: CGSize, scale: number, representationTypes: QLThumbnailGenerationRequestRepresentationTypes);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum QLThumbnailGenerationRequestRepresentationTypes {

	Icon = 1,

	LowQualityThumbnail = 2,

	Thumbnail = 4,

	All = -1
}


declare class QLThumbnailGenerator extends NSObject {

	static sharedGenerator(): QLThumbnailGenerator;

	cancelRequest(_: QLThumbnailGenerationRequest): void;

	generateBestRepresentationForRequestCompletionHandler(_: QLThumbnailGenerationRequest, completionHandler?: (p1: QLThumbnailRepresentation, p2: NSError) => void): void;

	generateRepresentationsForRequestUpdateHandler(_: QLThumbnailGenerationRequest, updateHandler?: (p1: QLThumbnailRepresentation, p2: QLThumbnailRepresentationType, p3: NSError) => void): void;

	saveBestRepresentationForRequestToFileAtURLWithContentTypeCompletionHandler(_: QLThumbnailGenerationRequest, toFileAtURL: NSURL, withContentType: string, completionHandler?: (p1: NSError) => void): void;
}

declare class QLThumbnailProvider extends NSObject {

	provideThumbnailForFileRequestCompletionHandler(_: QLFileThumbnailRequest, completionHandler?: (p1: QLThumbnailReply, p2: NSError) => void): void;
}

declare class QLThumbnailReply extends NSObject {

	static replyWithContextSizeCurrentContextDrawingBlock(_: CGSize, currentContextDrawingBlock: () => boolean): QLThumbnailReply;

	static replyWithContextSizeDrawingBlock(_: CGSize, drawingBlock: (p1: any) => boolean): QLThumbnailReply;

	static replyWithImageFileURL(_: NSURL): QLThumbnailReply;
}

declare class QLThumbnailRepresentation extends NSObject {

	readonly CGImage: any;

	readonly NSImage: NSImage;

	readonly type: QLThumbnailRepresentationType;
}

enum QLThumbnailRepresentationType {

	Icon = 0,

	LowQualityThumbnail = 1,

	Thumbnail = 2
}

