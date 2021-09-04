
enum LPErrorCode {

	Unknown = 1,

	MetadataFetchFailed = 2,

	MetadataFetchCancelled = 3,

	MetadataFetchTimedOut = 4
}


declare var LPErrorDomain: string;

declare class LPLinkMetadata extends NSObject implements NSCopying, NSSecureCoding {

	setURL(_: NSURL)

	URL: NSURL;

	setIconProvider(_: NSItemProvider)

	iconProvider: NSItemProvider;

	setImageProvider(_: NSItemProvider)

	imageProvider: NSItemProvider;

	setOriginalURL(_: NSURL)

	originalURL: NSURL;

	setRemoteVideoURL(_: NSURL)

	remoteVideoURL: NSURL;

	setTitle(_: string)

	title: string;

	setVideoProvider(_: NSItemProvider)

	videoProvider: NSItemProvider;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class LPLinkView extends NSView {

	setMetadata(_: LPLinkMetadata)

	metadata: LPLinkMetadata;

	static create(metadata: LPLinkMetadata);

	static create(URL: NSURL);
}

declare class LPMetadataProvider extends NSObject {

	setShouldFetchSubresources(_: boolean)

	shouldFetchSubresources: boolean;

	setTimeout(_: number)

	timeout: number;

	cancel(): void;

	startFetchingMetadataForURLCompletionHandler(_: NSURL, completionHandler?: (p1: LPLinkMetadata, p2: NSError) => void): void;
}
