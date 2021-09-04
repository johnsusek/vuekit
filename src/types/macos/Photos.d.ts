
declare class PHAdjustmentData extends NSObject {

	readonly data: NSData;

	readonly formatIdentifier: string;

	readonly formatVersion: string;

	static create(formatIdentifier: string, formatVersion: string, data: NSData);
}

declare class PHAsset extends PHObject {

	static fetchAssetsInAssetCollectionOptions(_: PHAssetCollection, options?: PHFetchOptions): PHFetchResult<PHAsset>;

	static fetchAssetsWithALAssetURLsOptions(_: NSArray<NSURL>, options?: PHFetchOptions): PHFetchResult<PHAsset>;

	static fetchAssetsWithBurstIdentifierOptions(_: string, options?: PHFetchOptions): PHFetchResult<PHAsset>;

	static fetchAssetsWithLocalIdentifiersOptions(_: NSArray<string>, options?: PHFetchOptions): PHFetchResult<PHAsset>;

	static fetchAssetsWithMediaTypeOptions(_: PHAssetMediaType, options?: PHFetchOptions): PHFetchResult<PHAsset>;

	static fetchAssetsWithOptions(_?: PHFetchOptions): PHFetchResult<PHAsset>;

	static fetchKeyAssetsInAssetCollectionOptions(_: PHAssetCollection, options?: PHFetchOptions): PHFetchResult<PHAsset>;

	readonly burstIdentifier: string;

	readonly burstSelectionTypes: PHAssetBurstSelectionType;

	readonly creationDate: Date;

	readonly duration: number;

	readonly isFavorite: boolean;

	readonly isHidden: boolean;

	readonly location: CLLocation;

	readonly mediaSubtypes: PHAssetMediaSubtype;

	readonly mediaType: PHAssetMediaType;

	readonly modificationDate: Date;

	readonly pixelHeight: number;

	readonly pixelWidth: number;

	readonly playbackStyle: PHAssetPlaybackStyle;

	readonly representsBurst: boolean;

	readonly sourceType: PHAssetSourceType;

	readonly isSyncFailureHidden: boolean;

	canPerformEditOperation(_: PHAssetEditOperation): boolean;

	cancelContentEditingInputRequest(_: number): void;

	requestContentEditingInputWithOptionsCompletionHandler(_?: PHContentEditingInputRequestOptions, completionHandler?: (p1: PHContentEditingInput, p2: NSDictionary<any, any>) => void): number;
}

enum PHAssetBurstSelectionType {

	None = 0,

	AutoPick = 1,

	UserPick = 2
}


declare class PHAssetChangeRequest extends PHChangeRequest {

	static changeRequestForAsset(_: PHAsset): PHAssetChangeRequest;

	static creationRequestForAssetFromImage(_: NSImage): PHAssetChangeRequest;

	static creationRequestForAssetFromImageAtFileURL(_: NSURL): PHAssetChangeRequest;

	static creationRequestForAssetFromVideoAtFileURL(_: NSURL): PHAssetChangeRequest;

	static deleteAssets(_: NSFastEnumeration): void;

	setContentEditingOutput(_: PHContentEditingOutput)

	contentEditingOutput: PHContentEditingOutput;

	setCreationDate(_: Date)

	creationDate: Date;

	setFavorite(_: boolean)

	isFavorite: boolean;

	setHidden(_: boolean)

	isHidden: boolean;

	setLocation(_: CLLocation)

	location: CLLocation;

	readonly placeholderForCreatedAsset: PHObjectPlaceholder;

	revertAssetContentToOriginal(): void;
}

declare class PHAssetCollection extends PHCollection {

	static fetchAssetCollectionsContainingAssetWithTypeOptions(_: PHAsset, withType: PHAssetCollectionType, options?: PHFetchOptions): PHFetchResult<PHAssetCollection>;

	static fetchAssetCollectionsWithALAssetGroupURLsOptions(_: NSArray<NSURL>, options?: PHFetchOptions): PHFetchResult<PHAssetCollection>;

	static fetchAssetCollectionsWithLocalIdentifiersOptions(_: NSArray<string>, options?: PHFetchOptions): PHFetchResult<PHAssetCollection>;

	static fetchAssetCollectionsWithTypeSubtypeOptions(_: PHAssetCollectionType, subtype: PHAssetCollectionSubtype, options?: PHFetchOptions): PHFetchResult<PHAssetCollection>;

	static fetchMomentsInMomentListOptions(_: PHCollectionList, options?: PHFetchOptions): PHFetchResult<PHAssetCollection>;

	static fetchMomentsWithOptions(_?: PHFetchOptions): PHFetchResult<PHAssetCollection>;

	static transientAssetCollectionWithAssetFetchResultWithTitle(_: PHFetchResult<PHAsset>, title?: string): PHAssetCollection;

	static transientAssetCollectionWithAssetsTitle(_: NSArray<PHAsset>, title?: string): PHAssetCollection;

	readonly approximateLocation: CLLocation;

	readonly assetCollectionSubtype: PHAssetCollectionSubtype;

	readonly assetCollectionType: PHAssetCollectionType;

	readonly endDate: Date;

	readonly estimatedAssetCount: number;

	readonly localizedLocationNames: NSArray<string>;

	readonly startDate: Date;
}

declare class PHAssetCollectionChangeRequest extends PHChangeRequest {

	static changeRequestForAssetCollection(_: PHAssetCollection): PHAssetCollectionChangeRequest;

	static changeRequestForAssetCollectionWithAssets(_: PHAssetCollection, assets: PHFetchResult<PHAsset>): PHAssetCollectionChangeRequest;

	static creationRequestForAssetCollectionWithTitle(_: string): PHAssetCollectionChangeRequest;

	static deleteAssetCollections(_: NSFastEnumeration): void;

	readonly placeholderForCreatedAssetCollection: PHObjectPlaceholder;

	setTitle(_: string)

	title: string;

	addAssets(_: NSFastEnumeration): void;

	insertAssetsAtIndexes(_: NSFastEnumeration, atIndexes: NSIndexSet): void;

	moveAssetsAtIndexesToIndex(_: NSIndexSet, toIndex: number): void;

	removeAssets(_: NSFastEnumeration): void;

	removeAssetsAtIndexes(_: NSIndexSet): void;

	replaceAssetsAtIndexesWithAssets(_: NSIndexSet, withAssets: NSFastEnumeration): void;
}

enum PHAssetCollectionSubtype {

	AlbumRegular = 2,

	AlbumSyncedEvent = 3,

	AlbumSyncedFaces = 4,

	AlbumSyncedAlbum = 5,

	AlbumImported = 6,

	AlbumMyPhotoStream = 100,

	AlbumCloudShared = 101,

	SmartAlbumGeneric = 200,

	SmartAlbumPanoramas = 201,

	SmartAlbumVideos = 202,

	SmartAlbumFavorites = 203,

	SmartAlbumTimelapses = 204,

	SmartAlbumAllHidden = 205,

	SmartAlbumRecentlyAdded = 206,

	SmartAlbumBursts = 207,

	SmartAlbumSlomoVideos = 208,

	SmartAlbumUserLibrary = 209,

	SmartAlbumSelfPortraits = 210,

	SmartAlbumScreenshots = 211,

	SmartAlbumDepthEffect = 212,

	SmartAlbumLivePhotos = 213,

	SmartAlbumAnimated = 214,

	SmartAlbumLongExposures = 215,

	SmartAlbumUnableToUpload = 216,

	Any = 9223372036854775807
}


enum PHAssetCollectionType {

	Album = 1,

	SmartAlbum = 2,

	Moment = 3
}


declare class PHAssetCreationRequest extends PHAssetChangeRequest {

	static changeRequestForAsset(_: PHAsset): PHAssetCreationRequest; // inherited from PHAssetChangeRequest

	static creationRequestForAsset(): PHAssetCreationRequest;

	static creationRequestForAssetFromImage(_: NSImage): PHAssetCreationRequest; // inherited from PHAssetChangeRequest

	static creationRequestForAssetFromImageAtFileURL(_: NSURL): PHAssetCreationRequest; // inherited from PHAssetChangeRequest

	static creationRequestForAssetFromVideoAtFileURL(_: NSURL): PHAssetCreationRequest; // inherited from PHAssetChangeRequest

	static supportsAssetResourceTypes(_: NSArray<number>): boolean;

	addResourceWithTypeDataOptions(_: PHAssetResourceType, data: NSData, options?: PHAssetResourceCreationOptions): void;

	addResourceWithTypeFileURLOptions(_: PHAssetResourceType, fileURL: NSURL, options?: PHAssetResourceCreationOptions): void;
}

enum PHAssetEditOperation {

	Delete = 1,

	Content = 2,

	Properties = 3
}


enum PHAssetMediaSubtype {

	None = 0,

	PhotoPanorama = 1,

	PhotoHDR = 2,

	PhotoScreenshot = 4,

	PhotoLive = 8,

	PhotoDepthEffect = 16,

	VideoStreamed = 65536,

	VideoHighFrameRate = 131072,

	VideoTimelapse = 262144
}


enum PHAssetMediaType {

	Unknown = 0,

	Image = 1,

	Video = 2,

	Audio = 3
}


enum PHAssetPlaybackStyle {

	Unsupported = 0,

	Image = 1,

	ImageAnimated = 2,

	LivePhoto = 3,

	Video = 4,

	VideoLooping = 5
}


declare class PHAssetResource extends NSObject {

	static assetResourcesForAsset(_: PHAsset): NSArray<PHAssetResource>;

	static assetResourcesForLivePhoto(_: PHLivePhoto): NSArray<PHAssetResource>;

	readonly assetLocalIdentifier: string;

	readonly originalFilename: string;

	readonly type: PHAssetResourceType;

	readonly uniformTypeIdentifier: string;
}

declare class PHAssetResourceCreationOptions extends NSObject implements NSCopying {

	setOriginalFilename(_: string)

	originalFilename: string;

	setShouldMoveFile(_: boolean)

	shouldMoveFile: boolean;

	setUniformTypeIdentifier(_: string)

	uniformTypeIdentifier: string;

	copyWithZone(_?: any): any;
}

declare class PHAssetResourceManager extends NSObject {

	static defaultManager(): PHAssetResourceManager;

	cancelDataRequest(_: number): void;

	requestDataForAssetResourceOptionsDataReceivedHandlerCompletionHandler(_: PHAssetResource, options?: PHAssetResourceRequestOptions, dataReceivedHandler: (p1: NSData) => void, completionHandler?: (p1: NSError) => void): number;

	writeDataForAssetResourceToFileOptionsCompletionHandler(_: PHAssetResource, toFile: NSURL, options?: PHAssetResourceRequestOptions, completionHandler?: (p1: NSError) => void): void;
}

declare class PHAssetResourceRequestOptions extends NSObject implements NSCopying {

	setNetworkAccessAllowed(_: boolean)

	isNetworkAccessAllowed: boolean;

	setProgressHandler(_: (p1: number) => void)

	progressHandler: (p1: number) => void;

	copyWithZone(_?: any): any;
}

enum PHAssetResourceType {

	Photo = 1,

	Video = 2,

	Audio = 3,

	AlternatePhoto = 4,

	FullSizePhoto = 5,

	FullSizeVideo = 6,

	AdjustmentData = 7,

	AdjustmentBasePhoto = 8,

	PairedVideo = 9,

	FullSizePairedVideo = 10,

	AdjustmentBasePairedVideo = 11,

	AdjustmentBaseVideo = 12
}


enum PHAssetSourceType {

	None = 0,

	UserLibrary = 1,

	CloudShared = 2,

	iTunesSynced = 4
}


enum PHAuthorizationStatus {

	NotDetermined = 0,

	Restricted = 1,

	Denied = 2,

	Authorized = 3
}


declare class PHCachingImageManager extends PHImageManager {

	setAllowsCachingHighQualityImages(_: boolean)

	allowsCachingHighQualityImages: boolean;

	startCachingImagesForAssetsTargetSizeContentModeOptions(_: NSArray<PHAsset>, targetSize: CGSize, contentMode: PHImageContentMode, options?: PHImageRequestOptions): void;

	stopCachingImagesForAllAssets(): void;

	stopCachingImagesForAssetsTargetSizeContentModeOptions(_: NSArray<PHAsset>, targetSize: CGSize, contentMode: PHImageContentMode, options?: PHImageRequestOptions): void;
}

declare class PHChange extends NSObject {

	changeDetailsForFetchResult(_: PHFetchResult<any>): PHFetchResultChangeDetails<any>;

	changeDetailsForObject(_: PHObject): PHObjectChangeDetails<any>;
}

declare class PHChangeRequest extends NSObject {
}

declare class PHCloudIdentifier extends NSObject implements NSSecureCoding {

	readonly stringValue: string;

	static notFoundIdentifier(): PHCloudIdentifier;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(stringValue: string);

	encodeWithCoder(_: NSCoder): void;
}

declare class PHCollection extends PHObject {

	static fetchCollectionsInCollectionListOptions(_: PHCollectionList, options?: PHFetchOptions): PHFetchResult<PHCollection>;

	static fetchTopLevelUserCollectionsWithOptions(_?: PHFetchOptions): PHFetchResult<PHCollection>;

	readonly canContainAssets: boolean;

	readonly canContainCollections: boolean;

	readonly localizedTitle: string;

	canPerformEditOperation(_: PHCollectionEditOperation): boolean;
}

enum PHCollectionEditOperation {

	DeleteContent = 1,

	RemoveContent = 2,

	AddContent = 3,

	CreateContent = 4,

	RearrangeContent = 5,

	Delete = 6,

	Rename = 7
}


declare class PHCollectionList extends PHCollection {

	static fetchCollectionListsContainingCollectionOptions(_: PHCollection, options?: PHFetchOptions): PHFetchResult<PHCollectionList>;

	static fetchCollectionListsWithLocalIdentifiersOptions(_: NSArray<string>, options?: PHFetchOptions): PHFetchResult<PHCollectionList>;

	static fetchCollectionListsWithTypeSubtypeOptions(_: PHCollectionListType, subtype: PHCollectionListSubtype, options?: PHFetchOptions): PHFetchResult<PHCollectionList>;

	static fetchMomentListsWithSubtypeContainingMomentOptions(_: PHCollectionListSubtype, containingMoment: PHAssetCollection, options?: PHFetchOptions): PHFetchResult<PHCollectionList>;

	static fetchMomentListsWithSubtypeOptions(_: PHCollectionListSubtype, options?: PHFetchOptions): PHFetchResult<PHCollectionList>;

	static transientCollectionListWithCollectionsTitle(_: NSArray<PHCollection>, title?: string): PHCollectionList;

	static transientCollectionListWithCollectionsFetchResultWithTitle(_: PHFetchResult<PHCollection>, title?: string): PHCollectionList;

	readonly collectionListSubtype: PHCollectionListSubtype;

	readonly collectionListType: PHCollectionListType;

	readonly endDate: Date;

	readonly localizedLocationNames: NSArray<string>;

	readonly startDate: Date;
}

declare class PHCollectionListChangeRequest extends PHChangeRequest {

	static changeRequestForCollectionList(_: PHCollectionList): PHCollectionListChangeRequest;

	static changeRequestForCollectionListWithChildCollections(_: PHCollectionList, childCollections: PHFetchResult<PHCollection>): PHCollectionListChangeRequest;

	static creationRequestForCollectionListWithTitle(_: string): PHCollectionListChangeRequest;

	static deleteCollectionLists(_: NSFastEnumeration): void;

	readonly placeholderForCreatedCollectionList: PHObjectPlaceholder;

	setTitle(_: string)

	title: string;

	addChildCollections(_: NSFastEnumeration): void;

	insertChildCollectionsAtIndexes(_: NSFastEnumeration, atIndexes: NSIndexSet): void;

	moveChildCollectionsAtIndexesToIndex(_: NSIndexSet, toIndex: number): void;

	removeChildCollections(_: NSFastEnumeration): void;

	removeChildCollectionsAtIndexes(_: NSIndexSet): void;

	replaceChildCollectionsAtIndexesWithChildCollections(_: NSIndexSet, withChildCollections: NSFastEnumeration): void;
}

enum PHCollectionListSubtype {

	MomentListCluster = 1,

	MomentListYear = 2,

	RegularFolder = 100,

	SmartFolderEvents = 200,

	SmartFolderFaces = 201,

	Any = 9223372036854775807
}


enum PHCollectionListType {

	MomentList = 1,

	Folder = 2,

	SmartFolder = 3
}


declare class PHContentEditingInput extends NSObject {

	readonly adjustmentData: PHAdjustmentData;

	readonly audiovisualAsset: AVAsset;

	readonly avAsset: AVAsset;

	readonly creationDate: Date;

	readonly displaySizeImage: NSImage;

	readonly fullSizeImageOrientation: number;

	readonly fullSizeImageURL: NSURL;

	readonly livePhoto: PHLivePhoto;

	readonly location: CLLocation;

	readonly mediaSubtypes: PHAssetMediaSubtype;

	readonly mediaType: PHAssetMediaType;

	readonly playbackStyle: PHAssetPlaybackStyle;

	readonly uniformTypeIdentifier: string;
}

declare var PHContentEditingInputCancelledKey: string;

declare var PHContentEditingInputErrorKey: string;

declare class PHContentEditingInputRequestOptions extends NSObject {

	setCanHandleAdjustmentData(_: (p1: PHAdjustmentData) => boolean)

	canHandleAdjustmentData: (p1: PHAdjustmentData) => boolean;

	setNetworkAccessAllowed(_: boolean)

	isNetworkAccessAllowed: boolean;

	setProgressHandler(_: (p1: number, p2: boolean) => void)

	progressHandler: (p1: number, p2: boolean) => void;
}

declare var PHContentEditingInputResultIsInCloudKey: string;

declare class PHContentEditingOutput extends NSObject {

	setAdjustmentData(_: PHAdjustmentData)

	adjustmentData: PHAdjustmentData;

	readonly renderedContentURL: NSURL;

	static create(contentEditingInput: PHContentEditingInput);

	static create(placeholderForCreatedAsset: PHObjectPlaceholder);
}

declare class PHFetchOptions extends NSObject implements NSCopying {

	setFetchLimit(_: number)

	fetchLimit: number;

	setIncludeAllBurstAssets(_: boolean)

	includeAllBurstAssets: boolean;

	setIncludeAssetSourceTypes(_: PHAssetSourceType)

	includeAssetSourceTypes: PHAssetSourceType;

	setIncludeHiddenAssets(_: boolean)

	includeHiddenAssets: boolean;

	setPredicate(_: NSPredicate)

	predicate: NSPredicate;

	setSortDescriptors(_: NSArray<NSSortDescriptor>)

	sortDescriptors: NSArray<NSSortDescriptor>;

	setWantsIncrementalChangeDetails(_: boolean)

	wantsIncrementalChangeDetails: boolean;

	copyWithZone(_?: any): any;
}

declare class PHFetchResult<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration {

	readonly count: number;

	readonly firstObject: ObjectType;

	readonly lastObject: ObjectType;

	containsObject(_: ObjectType): boolean;

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	countOfAssetsWithMediaType(_: PHAssetMediaType): number;

	enumerateObjectsAtIndexesOptionsUsingBlock(_: NSIndexSet, options: NSEnumerationOptions, usingBlock: (p1: ObjectType, p2: number, p3: boolean) => void): void;

	enumerateObjectsUsingBlock(_: (p1: ObjectType, p2: number, p3: boolean) => void): void;

	enumerateObjectsWithOptionsUsingBlock(_: NSEnumerationOptions, usingBlock: (p1: ObjectType, p2: number, p3: boolean) => void): void;

	indexOfObject(_: ObjectType): number;

	indexOfObjectInRange(_: ObjectType, inRange: NSRange): number;

	objectAtIndex(_: number): ObjectType;

	objectAtIndexedSubscript(_: number): ObjectType;

	objectsAtIndexes(_: NSIndexSet): NSArray<ObjectType>;
}

declare class PHFetchResultChangeDetails<ObjectType> extends NSObject {

	static changeDetailsFromFetchResultWithToFetchResultChangedObjects<ObjectType>(_: PHFetchResult<ObjectType>, toFetchResult: PHFetchResult<ObjectType>, changedObjects: NSArray<ObjectType>): PHFetchResultChangeDetails<ObjectType>;

	readonly changedIndexes: NSIndexSet;

	readonly changedObjects: NSArray<ObjectType>;

	readonly fetchResultAfterChanges: PHFetchResult<ObjectType>;

	readonly fetchResultBeforeChanges: PHFetchResult<ObjectType>;

	readonly hasIncrementalChanges: boolean;

	readonly hasMoves: boolean;

	readonly insertedIndexes: NSIndexSet;

	readonly insertedObjects: NSArray<ObjectType>;

	readonly removedIndexes: NSIndexSet;

	readonly removedObjects: NSArray<ObjectType>;

	enumerateMovesWithBlock(_: (p1: number, p2: number) => void): void;
}

declare var PHImageCancelledKey: string;

enum PHImageContentMode {

	AspectFit = 0,

	AspectFill = 1,

	Default = 0
}


declare var PHImageErrorKey: string;

declare class PHImageManager extends NSObject {

	static defaultManager(): PHImageManager;

	cancelImageRequest(_: number): void;

	requestAVAssetForVideoOptionsResultHandler(_: PHAsset, options?: PHVideoRequestOptions, resultHandler?: (p1: AVAsset, p2: AVAudioMix, p3: NSDictionary<any, any>) => void): number;

	requestExportSessionForVideoOptionsExportPresetResultHandler(_: PHAsset, options?: PHVideoRequestOptions, exportPreset: string, resultHandler?: (p1: AVAssetExportSession, p2: NSDictionary<any, any>) => void): number;

	requestImageDataAndOrientationForAssetOptionsResultHandler(_: PHAsset, options?: PHImageRequestOptions, resultHandler?: (p1: NSData, p2: string, p3: CGImagePropertyOrientation, p4: NSDictionary<any, any>) => void): number;

	requestImageForAssetTargetSizeContentModeOptionsResultHandler(_: PHAsset, targetSize: CGSize, contentMode: PHImageContentMode, options?: PHImageRequestOptions, resultHandler?: (p1: NSImage, p2: NSDictionary<any, any>) => void): number;

	requestLivePhotoForAssetTargetSizeContentModeOptionsResultHandler(_: PHAsset, targetSize: CGSize, contentMode: PHImageContentMode, options?: PHLivePhotoRequestOptions, resultHandler?: (p1: PHLivePhoto, p2: NSDictionary<any, any>) => void): number;

	requestPlayerItemForVideoOptionsResultHandler(_: PHAsset, options?: PHVideoRequestOptions, resultHandler?: (p1: AVPlayerItem, p2: NSDictionary<any, any>) => void): number;
}

declare var PHImageManagerMaximumSize: CGSize;

declare class PHImageRequestOptions extends NSObject implements NSCopying {

	setDeliveryMode(_: PHImageRequestOptionsDeliveryMode)

	deliveryMode: PHImageRequestOptionsDeliveryMode;

	setNetworkAccessAllowed(_: boolean)

	isNetworkAccessAllowed: boolean;

	setNormalizedCropRect(_: CGRect)

	normalizedCropRect: CGRect;

	setProgressHandler(_: (p1: number, p2: NSError, p3: boolean, p4: NSDictionary<any, any>) => void)

	progressHandler: (p1: number, p2: NSError, p3: boolean, p4: NSDictionary<any, any>) => void;

	setResizeMode(_: PHImageRequestOptionsResizeMode)

	resizeMode: PHImageRequestOptionsResizeMode;

	setSynchronous(_: boolean)

	isSynchronous: boolean;

	setVersion(_: PHImageRequestOptionsVersion)

	version: PHImageRequestOptionsVersion;

	copyWithZone(_?: any): any;
}

enum PHImageRequestOptionsDeliveryMode {

	Opportunistic = 0,

	HighQualityFormat = 1,

	FastFormat = 2
}


enum PHImageRequestOptionsResizeMode {

	None = 0,

	Fast = 1,

	Exact = 2
}


enum PHImageRequestOptionsVersion {

	Current = 0,

	Unadjusted = 1,

	Original = 2
}


declare var PHImageResultIsDegradedKey: string;

declare var PHImageResultIsInCloudKey: string;

declare var PHImageResultRequestIDKey: string;

declare var PHInvalidAssetResourceDataRequestID: number;

declare var PHInvalidImageRequestID: number;

declare class PHLivePhoto extends NSObject implements NSCopying, NSSecureCoding {

	static cancelLivePhotoRequestWithRequestID(_: number): void;

	static requestLivePhotoWithResourceFileURLsPlaceholderImageTargetSizeContentModeResultHandler(_: NSArray<NSURL>, placeholderImage?: NSImage, targetSize: CGSize, contentMode: PHImageContentMode, resultHandler?: (p1: PHLivePhoto, p2: NSDictionary<any, any>) => void): number;

	readonly size: CGSize;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class PHLivePhotoEditingContext extends NSObject {

	setAudioVolume(_: number)

	audioVolume: number;

	readonly duration: CMTime;

	setFrameProcessor(_: (p1: PHLivePhotoFrame, p2: NSError) => CIImage)

	frameProcessor: (p1: PHLivePhotoFrame, p2: NSError) => CIImage;

	readonly fullSizeImage: CIImage;

	readonly orientation: CGImagePropertyOrientation;

	readonly photoTime: CMTime;

	static create(livePhotoEditingInput: PHContentEditingInput);

	cancel(): void;

	prepareLivePhotoForPlaybackWithTargetSizeOptionsCompletionHandler(_: CGSize, options?: NSDictionary<string, any>, completionHandler?: (p1: PHLivePhoto, p2: NSError) => void): void;

	saveLivePhotoToOutputOptionsCompletionHandler(_: PHContentEditingOutput, options?: NSDictionary<string, any>, completionHandler?: (p1: boolean, p2: NSError) => void): void;
}

enum PHLivePhotoEditingErrorCode {

	Unknown = 0,

	Aborted = 1
}


interface PHLivePhotoFrame {

	image: CIImage;

	renderScale: number;

	time: CMTime;

	type: PHLivePhotoFrameType;
}
declare var PHLivePhotoFrame: {

	prototype: PHLivePhotoFrame;
};

enum PHLivePhotoFrameType {

	Photo = 0,

	Video = 1
}


declare var PHLivePhotoInfoCancelledKey: string;

declare var PHLivePhotoInfoErrorKey: string;

declare var PHLivePhotoInfoIsDegradedKey: string;

declare var PHLivePhotoRequestIDInvalid: number;

declare class PHLivePhotoRequestOptions extends NSObject implements NSCopying {

	setDeliveryMode(_: PHImageRequestOptionsDeliveryMode)

	deliveryMode: PHImageRequestOptionsDeliveryMode;

	setNetworkAccessAllowed(_: boolean)

	isNetworkAccessAllowed: boolean;

	setProgressHandler(_: (p1: number, p2: NSError, p3: boolean, p4: NSDictionary<any, any>) => void)

	progressHandler: (p1: number, p2: NSError, p3: boolean, p4: NSDictionary<any, any>) => void;

	setVersion(_: PHImageRequestOptionsVersion)

	version: PHImageRequestOptionsVersion;

	copyWithZone(_?: any): any;
}

declare var PHLivePhotoShouldRenderAtPlaybackTime: string;

declare var PHLocalIdentifierNotFound: string;

declare class PHObject extends NSObject implements NSCopying {

	readonly localIdentifier: string;

	copyWithZone(_?: any): any;
}

declare class PHObjectChangeDetails<ObjectType> extends NSObject {

	readonly assetContentChanged: boolean;

	readonly objectAfterChanges: ObjectType;

	readonly objectBeforeChanges: ObjectType;

	readonly objectWasDeleted: boolean;
}

declare class PHObjectPlaceholder extends PHObject {
}

declare class PHPhotoLibrary extends NSObject {

	static authorizationStatus(): PHAuthorizationStatus;

	static requestAuthorization(_: (p1: PHAuthorizationStatus) => void): void;

	static sharedPhotoLibrary(): PHPhotoLibrary;

	readonly unavailabilityReason: NSError;

	cloudIdentifiersForLocalIdentifiers(_: NSArray<string>): NSArray<PHCloudIdentifier>;

	localIdentifiersForCloudIdentifiers(_: NSArray<PHCloudIdentifier>): NSArray<string>;

	performChangesCompletionHandler(_: () => void, completionHandler?: (p1: boolean, p2: NSError) => void): void;

	performChangesAndWaitError(error: () => void): boolean;

	registerAvailabilityObserver(_: PHPhotoLibraryAvailabilityObserver): void;

	registerChangeObserver(_: PHPhotoLibraryChangeObserver): void;

	unregisterAvailabilityObserver(_: PHPhotoLibraryAvailabilityObserver): void;

	unregisterChangeObserver(_: PHPhotoLibraryChangeObserver): void;
}

interface PHPhotoLibraryAvailabilityObserver extends NSObjectProtocol {

	photoLibraryDidBecomeUnavailable(_: PHPhotoLibrary): void;
}
declare var PHPhotoLibraryAvailabilityObserver: {

	prototype: PHPhotoLibraryAvailabilityObserver;
};

interface PHPhotoLibraryChangeObserver extends NSObjectProtocol {

	photoLibraryDidChange(_: PHChange): void;
}
declare var PHPhotoLibraryChangeObserver: {

	prototype: PHPhotoLibraryChangeObserver;
};

declare var PHPhotosErrorDomain: string;

declare const PHPhotosErrorInvalid: number;

declare const PHPhotosErrorLibraryVolumeOffline: number;

declare const PHPhotosErrorRelinquishingLibraryBundleToWriter: number;

declare const PHPhotosErrorSwitchingSystemPhotoLibrary: number;

declare const PHPhotosErrorUserCancelled: number;

declare class PHProject extends PHAssetCollection {

	readonly hasProjectPreview: boolean;

	readonly projectExtensionData: NSData;
}

declare class PHProjectChangeRequest extends PHChangeRequest {

	setProjectExtensionData(_: NSData)

	projectExtensionData: NSData;

	setTitle(_: string)

	title: string;

	static create(project: PHProject);

	removeAssets(_: NSFastEnumeration): void;

	setProjectPreviewImage(_: NSImage): void;
}

declare class PHVideoRequestOptions extends NSObject {

	setDeliveryMode(_: PHVideoRequestOptionsDeliveryMode)

	deliveryMode: PHVideoRequestOptionsDeliveryMode;

	setNetworkAccessAllowed(_: boolean)

	isNetworkAccessAllowed: boolean;

	setProgressHandler(_: (p1: number, p2: NSError, p3: boolean, p4: NSDictionary<any, any>) => void)

	progressHandler: (p1: number, p2: NSError, p3: boolean, p4: NSDictionary<any, any>) => void;

	setVersion(_: PHVideoRequestOptionsVersion)

	version: PHVideoRequestOptionsVersion;
}

enum PHVideoRequestOptionsDeliveryMode {

	Automatic = 0,

	HighQualityFormat = 1,

	MediumQualityFormat = 2,

	FastFormat = 3
}


enum PHVideoRequestOptionsVersion {

	Current = 0,

	Original = 1
}

