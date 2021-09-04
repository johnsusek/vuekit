
interface QLGeneratorInterfaceStruct {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	GenerateThumbnailForURL: (p1: any, p2: any, p3: NSURL, p4: string, p5: NSDictionary<any, any>, p6: CGSize) => number;
	CancelThumbnailGeneration: (p1: any, p2: any) => void;
	GeneratePreviewForURL: (p1: any, p2: any, p3: NSURL, p4: string, p5: NSDictionary<any, any>) => number;
	CancelPreviewGeneration: (p1: any, p2: any) => void;
}
declare var QLGeneratorInterfaceStruct: QLGeneratorInterfaceStruct;

enum QLPreviewPDFStyle {

	kQLPreviewPDFStandardStyle = 0,

	kQLPreviewPDFPagesWithThumbnailsOnRightStyle = 3,

	kQLPreviewPDFPagesWithThumbnailsOnLeftStyle = 4
}


declare function QLPreviewRequestCopyContentUTI(preview: any): string;

declare function QLPreviewRequestCopyOptions(preview: any): NSDictionary<any, any>;

declare function QLPreviewRequestCopyURL(preview: any): NSURL;

declare function QLPreviewRequestCreateContext(preview: any, size: CGSize, isBitmap: boolean, properties: NSDictionary<any, any>): any;

declare function QLPreviewRequestCreatePDFContext(preview: any, mediaBox: CGRect, auxiliaryInfo: NSDictionary<any, any>, properties: NSDictionary<any, any>): any;

declare function QLPreviewRequestFlushContext(preview: any, context: any): void;

declare function QLPreviewRequestGetDocumentObject(preview: any): any;

declare function QLPreviewRequestGetGeneratorBundle(preview: any): any;

declare function QLPreviewRequestGetTypeID(): number;

declare function QLPreviewRequestIsCancelled(preview: any): boolean;

declare function QLPreviewRequestSetDataRepresentation(preview: any, data: NSData, contentTypeUTI: string, properties: NSDictionary<any, any>): void;

declare function QLPreviewRequestSetDocumentObject(preview: any, object_: any, callbacks: CFArrayCallBacks): void;

declare function QLPreviewRequestSetURLRepresentation(preview: any, url: NSURL, contentTypeUTI: string, properties: NSDictionary<any, any>): void;

declare function QLThumbnailCancel(thumbnail: any): void;

declare function QLThumbnailCopyDocumentURL(thumbnail: any): NSURL;

declare function QLThumbnailCopyImage(thumbnail: any): any;

declare function QLThumbnailCopyOptions(thumbnail: any): NSDictionary<any, any>;

declare function QLThumbnailCreate(allocator: any, url: NSURL, maxThumbnailSize: CGSize, options: NSDictionary<any, any>): any;

declare function QLThumbnailDispatchAsync(thumbnail: any, queue: NSObject, completion: () => void): void;

declare function QLThumbnailGetContentRect(thumbnail: any): CGRect;

declare function QLThumbnailGetMaximumSize(thumbnail: any): CGSize;

declare function QLThumbnailGetTypeID(): number;

declare function QLThumbnailImageCreate(allocator: any, url: NSURL, maxThumbnailSize: CGSize, options: NSDictionary<any, any>): any;

declare function QLThumbnailIsCancelled(thumbnail: any): boolean;

declare function QLThumbnailRequestCopyContentUTI(thumbnail: any): string;

declare function QLThumbnailRequestCopyOptions(thumbnail: any): NSDictionary<any, any>;

declare function QLThumbnailRequestCopyURL(thumbnail: any): NSURL;

declare function QLThumbnailRequestCreateContext(thumbnail: any, size: CGSize, isBitmap: boolean, properties: NSDictionary<any, any>): any;

declare function QLThumbnailRequestFlushContext(thumbnail: any, context: any): void;

declare function QLThumbnailRequestGetDocumentObject(thumbnail: any): any;

declare function QLThumbnailRequestGetGeneratorBundle(thumbnail: any): any;

declare function QLThumbnailRequestGetMaximumSize(thumbnail: any): CGSize;

declare function QLThumbnailRequestGetTypeID(): number;

declare function QLThumbnailRequestIsCancelled(thumbnail: any): boolean;

declare function QLThumbnailRequestSetDocumentObject(thumbnail: any, object_: any, callbacks: CFArrayCallBacks): void;

declare function QLThumbnailRequestSetImage(thumbnail: any, image: any, properties: NSDictionary<any, any>): void;

declare function QLThumbnailRequestSetImageAtURL(thumbnail: any, url: NSURL, properties: NSDictionary<any, any>): void;

declare function QLThumbnailRequestSetImageWithData(thumbnail: any, data: NSData, properties: NSDictionary<any, any>): void;

declare function QLThumbnailRequestSetThumbnailWithDataRepresentation(thumbnail: any, data: NSData, contentTypeUTI: string, previewProperties: NSDictionary<any, any>, properties: NSDictionary<any, any>): void;

declare function QLThumbnailRequestSetThumbnailWithURLRepresentation(thumbnail: any, url: NSURL, contentTypeUTI: string, previewProperties: NSDictionary<any, any>, properties: NSDictionary<any, any>): void;

declare var kQLPreviewContentIDScheme: string;

declare var kQLPreviewOptionCursorKey: string;

declare var kQLPreviewPropertyAttachmentDataKey: string;

declare var kQLPreviewPropertyAttachmentsKey: string;

declare var kQLPreviewPropertyBaseBundlePathKey: string;

declare var kQLPreviewPropertyCursorKey: string;

declare var kQLPreviewPropertyDisplayNameKey: string;

declare var kQLPreviewPropertyHeightKey: string;

declare var kQLPreviewPropertyMIMETypeKey: string;

declare var kQLPreviewPropertyPDFStyleKey: string;

declare var kQLPreviewPropertyStringEncodingKey: string;

declare var kQLPreviewPropertyTextEncodingNameKey: string;

declare var kQLPreviewPropertyWidthKey: string;

declare var kQLThumbnailOptionIconModeKey: string;

declare var kQLThumbnailOptionScaleFactorKey: string;

declare var kQLThumbnailPropertyBadgeImageKey: string;

declare var kQLThumbnailPropertyBaseBundlePathKey: string;

declare var kQLThumbnailPropertyExtensionKey: string;
