
declare class AVAsset extends NSObject implements AVAsynchronousKeyValueLoading, NSCopying {

	static assetWithURL(_: NSURL): AVAsset;

	readonly allMediaSelections: NSArray<AVMediaSelection>;

	readonly availableChapterLocales: NSArray<NSLocale>;

	readonly availableMediaCharacteristicsWithMediaSelectionOptions: NSArray<string>;

	readonly availableMetadataFormats: NSArray<string>;

	readonly canContainFragments: boolean;

	readonly commonMetadata: NSArray<AVMetadataItem>;

	readonly isCompatibleWithAirPlayVideo: boolean;

	readonly isComposable: boolean;

	readonly containsFragments: boolean;

	readonly creationDate: AVMetadataItem;

	readonly duration: CMTime;

	readonly isExportable: boolean;

	readonly hasProtectedContent: boolean;

	readonly lyrics: string;

	readonly metadata: NSArray<AVMetadataItem>;

	readonly minimumTimeOffsetFromLive: CMTime;

	readonly overallDurationHint: CMTime;

	readonly isPlayable: boolean;

	readonly preferredMediaSelection: AVMediaSelection;

	readonly preferredRate: number;

	readonly preferredTransform: CGAffineTransform;

	readonly preferredVolume: number;

	readonly providesPreciseDurationAndTiming: boolean;

	readonly isReadable: boolean;

	readonly referenceRestrictions: AVAssetReferenceRestrictions;

	readonly trackGroups: NSArray<AVAssetTrackGroup>;

	readonly tracks: NSArray<AVAssetTrack>;

	cancelLoading(): void;

	chapterMetadataGroupsBestMatchingPreferredLanguages(_: NSArray<string>): NSArray<AVTimedMetadataGroup>;

	chapterMetadataGroupsWithTitleLocaleContainingItemsWithCommonKeys(_: NSLocale, containingItemsWithCommonKeys?: NSArray<string>): NSArray<AVTimedMetadataGroup>;

	copyWithZone(_?: any): any;

	loadValuesAsynchronouslyForKeysCompletionHandler(_: NSArray<string>, completionHandler?: () => void): void;

	mediaSelectionGroupForMediaCharacteristic(_: string): AVMediaSelectionGroup;

	metadataForFormat(_: string): NSArray<AVMetadataItem>;

	statusOfValueForKeyError(error: string): AVKeyValueStatus;

	trackWithTrackID(_: number): AVAssetTrack;

	tracksWithMediaCharacteristic(_: string): NSArray<AVAssetTrack>;

	tracksWithMediaType(_: string): NSArray<AVAssetTrack>;

	unusedTrackID(): number;
}

declare class AVAssetCache extends NSObject {

	readonly isPlayableOffline: boolean;

	mediaSelectionOptionsInMediaSelectionGroup(_: AVMediaSelectionGroup): NSArray<AVMediaSelectionOption>;
}

declare var AVAssetChapterMetadataGroupsDidChangeNotification: string;

declare var AVAssetContainsFragmentsDidChangeNotification: string;

declare var AVAssetDurationDidChangeNotification: string;

declare var AVAssetExportPreset1280x720: string;

declare var AVAssetExportPreset1920x1080: string;

declare var AVAssetExportPreset3840x2160: string;

declare var AVAssetExportPreset640x480: string;

declare var AVAssetExportPreset960x540: string;

declare var AVAssetExportPresetAppleM4A: string;

declare var AVAssetExportPresetAppleM4V1080pHD: string;

declare var AVAssetExportPresetAppleM4V480pSD: string;

declare var AVAssetExportPresetAppleM4V720pHD: string;

declare var AVAssetExportPresetAppleM4VAppleTV: string;

declare var AVAssetExportPresetAppleM4VCellular: string;

declare var AVAssetExportPresetAppleM4VWiFi: string;

declare var AVAssetExportPresetAppleM4ViPod: string;

declare var AVAssetExportPresetAppleProRes422LPCM: string;

declare var AVAssetExportPresetAppleProRes4444LPCM: string;

declare var AVAssetExportPresetHEVC1920x1080: string;

declare var AVAssetExportPresetHEVC1920x1080WithAlpha: string;

declare var AVAssetExportPresetHEVC3840x2160: string;

declare var AVAssetExportPresetHEVC3840x2160WithAlpha: string;

declare var AVAssetExportPresetHEVCHighestQuality: string;

declare var AVAssetExportPresetHEVCHighestQualityWithAlpha: string;

declare var AVAssetExportPresetHighestQuality: string;

declare var AVAssetExportPresetLowQuality: string;

declare var AVAssetExportPresetMediumQuality: string;

declare var AVAssetExportPresetPassthrough: string;

declare class AVAssetExportSession extends NSObject {

	static allExportPresets(): NSArray<string>;

	static determineCompatibilityOfExportPresetWithAssetOutputFileTypeCompletionHandler(_: string, withAsset: AVAsset, outputFileType?: string, completionHandler: (p1: boolean) => void): void;

	static exportPresetsCompatibleWithAsset(_: AVAsset): NSArray<string>;

	static exportSessionWithAssetPresetName(_: AVAsset, presetName: string): AVAssetExportSession;

	readonly asset: AVAsset;

	setAudioMix(_: AVAudioMix)

	audioMix: AVAudioMix;

	setAudioTimePitchAlgorithm(_: string)

	audioTimePitchAlgorithm: string;

	setCanPerformMultiplePassesOverSourceMediaData(_: boolean)

	canPerformMultiplePassesOverSourceMediaData: boolean;

	readonly customVideoCompositor: AVVideoCompositing;

	setDirectoryForTemporaryFiles(_: NSURL)

	directoryForTemporaryFiles: NSURL;

	readonly error: NSError;

	readonly estimatedOutputFileLength: number;

	setFileLengthLimit(_: number)

	fileLengthLimit: number;

	readonly maxDuration: CMTime;

	setMetadata(_: NSArray<AVMetadataItem>)

	metadata: NSArray<AVMetadataItem>;

	setMetadataItemFilter(_: AVMetadataItemFilter)

	metadataItemFilter: AVMetadataItemFilter;

	setOutputFileType(_: string)

	outputFileType: string;

	setOutputURL(_: NSURL)

	outputURL: NSURL;

	readonly presetName: string;

	readonly progress: number;

	setShouldOptimizeForNetworkUse(_: boolean)

	shouldOptimizeForNetworkUse: boolean;

	readonly status: AVAssetExportSessionStatus;

	readonly supportedFileTypes: NSArray<string>;

	setTimeRange(_: CMTimeRange)

	timeRange: CMTimeRange;

	setVideoComposition(_: AVVideoComposition)

	videoComposition: AVVideoComposition;

	static create(asset: AVAsset, presetName: string);

	cancelExport(): void;

	determineCompatibleFileTypesWithCompletionHandler(_: (p1: NSArray<string>) => void): void;

	estimateMaximumDurationWithCompletionHandler(_?: (p1: CMTime, p2: NSError) => void): void;

	estimateOutputFileLengthWithCompletionHandler(_?: (p1: number, p2: NSError) => void): void;

	exportAsynchronouslyWithCompletionHandler(_: () => void): void;
}

enum AVAssetExportSessionStatus {

	Unknown = 0,

	Waiting = 1,

	Exporting = 2,

	Completed = 3,

	Failed = 4,

	Cancelled = 5
}


declare class AVAssetImageGenerator extends NSObject {

	static assetImageGeneratorWithAsset(_: AVAsset): AVAssetImageGenerator;

	setApertureMode(_: string)

	apertureMode: string;

	setAppliesPreferredTrackTransform(_: boolean)

	appliesPreferredTrackTransform: boolean;

	readonly asset: AVAsset;

	readonly customVideoCompositor: AVVideoCompositing;

	setMaximumSize(_: CGSize)

	maximumSize: CGSize;

	setRequestedTimeToleranceAfter(_: CMTime)

	requestedTimeToleranceAfter: CMTime;

	setRequestedTimeToleranceBefore(_: CMTime)

	requestedTimeToleranceBefore: CMTime;

	setVideoComposition(_: AVVideoComposition)

	videoComposition: AVVideoComposition;

	static create(asset: AVAsset);

	cancelAllCGImageGeneration(): void;

	copyCGImageAtTimeActualTimeError(actualTime: CMTime, error?: CMTime): any;

	generateCGImagesAsynchronouslyForTimesCompletionHandler(_: NSArray<NSValue>, completionHandler: (p1: CMTime, p2: any, p3: CMTime, p4: AVAssetImageGeneratorResult, p5: NSError) => void): void;
}

declare var AVAssetImageGeneratorApertureModeCleanAperture: string;

declare var AVAssetImageGeneratorApertureModeEncodedPixels: string;

declare var AVAssetImageGeneratorApertureModeProductionAperture: string;

enum AVAssetImageGeneratorResult {

	Succeeded = 0,

	Failed = 1,

	Cancelled = 2
}


declare var AVAssetMediaSelectionGroupsDidChangeNotification: string;

declare class AVAssetReader extends NSObject {

	static assetReaderWithAssetError(error: AVAsset): AVAssetReader;

	readonly asset: AVAsset;

	readonly error: NSError;

	readonly outputs: NSArray<AVAssetReaderOutput>;

	readonly status: AVAssetReaderStatus;

	setTimeRange(_: CMTimeRange)

	timeRange: CMTimeRange;

	static create(asset: AVAsset);

	addOutput(_: AVAssetReaderOutput): void;

	canAddOutput(_: AVAssetReaderOutput): boolean;

	cancelReading(): void;

	startReading(): boolean;
}

declare class AVAssetReaderAudioMixOutput extends AVAssetReaderOutput {

	static assetReaderAudioMixOutputWithAudioTracksAudioSettings(_: NSArray<AVAssetTrack>, audioSettings?: NSDictionary<string, any>): AVAssetReaderAudioMixOutput;

	setAudioMix(_: AVAudioMix)

	audioMix: AVAudioMix;

	readonly audioSettings: NSDictionary<string, any>;

	setAudioTimePitchAlgorithm(_: string)

	audioTimePitchAlgorithm: string;

	readonly audioTracks: NSArray<AVAssetTrack>;

	static create(audioTracks: NSArray<AVAssetTrack> | AVAssetTrack[], audioSettings: NSDictionary<string, any>);
}

declare class AVAssetReaderOutput extends NSObject {

	setAlwaysCopiesSampleData(_: boolean)

	alwaysCopiesSampleData: boolean;

	readonly mediaType: string;

	setSupportsRandomAccess(_: boolean)

	supportsRandomAccess: boolean;

	copyNextSampleBuffer(): any;

	markConfigurationAsFinal(): void;

	resetForReadingTimeRanges(_: NSArray<NSValue>): void;
}

declare class AVAssetReaderOutputMetadataAdaptor extends NSObject {

	static assetReaderOutputMetadataAdaptorWithAssetReaderTrackOutput(_: AVAssetReaderTrackOutput): AVAssetReaderOutputMetadataAdaptor;

	readonly assetReaderTrackOutput: AVAssetReaderTrackOutput;

	static create(assetReaderTrackOutput: AVAssetReaderTrackOutput);

	nextTimedMetadataGroup(): AVTimedMetadataGroup;
}

declare class AVAssetReaderSampleReferenceOutput extends AVAssetReaderOutput {

	static assetReaderSampleReferenceOutputWithTrack(_: AVAssetTrack): AVAssetReaderSampleReferenceOutput;

	readonly track: AVAssetTrack;

	static create(track: AVAssetTrack);
}

enum AVAssetReaderStatus {

	Unknown = 0,

	Reading = 1,

	Completed = 2,

	Failed = 3,

	Cancelled = 4
}


declare class AVAssetReaderTrackOutput extends AVAssetReaderOutput {

	static assetReaderTrackOutputWithTrackOutputSettings(_: AVAssetTrack, outputSettings?: NSDictionary<string, any>): AVAssetReaderTrackOutput;

	setAudioTimePitchAlgorithm(_: string)

	audioTimePitchAlgorithm: string;

	readonly outputSettings: NSDictionary<string, any>;

	readonly track: AVAssetTrack;

	static create(track: AVAssetTrack, outputSettings: NSDictionary<string, any>);
}

declare class AVAssetReaderVideoCompositionOutput extends AVAssetReaderOutput {

	static assetReaderVideoCompositionOutputWithVideoTracksVideoSettings(_: NSArray<AVAssetTrack>, videoSettings?: NSDictionary<string, any>): AVAssetReaderVideoCompositionOutput;

	readonly customVideoCompositor: AVVideoCompositing;

	setVideoComposition(_: AVVideoComposition)

	videoComposition: AVVideoComposition;

	readonly videoSettings: NSDictionary<string, any>;

	readonly videoTracks: NSArray<AVAssetTrack>;

	static create(videoTracks: NSArray<AVAssetTrack> | AVAssetTrack[], videoSettings: NSDictionary<string, any>);
}

enum AVAssetReferenceRestrictions {

	ForbidNone = 0,

	ForbidRemoteReferenceToLocal = 1,

	ForbidLocalReferenceToRemote = 2,

	ForbidCrossSiteReference = 4,

	ForbidLocalReferenceToLocal = 8,

	ForbidAll = 65535,

	DefaultPolicy = 2
}


declare class AVAssetResourceLoader extends NSObject {

	readonly delegate: AVAssetResourceLoaderDelegate;

	readonly delegateQueue: NSObject;

	setPreloadsEligibleContentKeys(_: boolean)

	preloadsEligibleContentKeys: boolean;

	setDelegateQueue(_?: AVAssetResourceLoaderDelegate, queue?: NSObject): void;
}

interface AVAssetResourceLoaderDelegate extends NSObjectProtocol {

	resourceLoaderDidCancelAuthenticationChallenge?(_: AVAssetResourceLoader, didCancelAuthenticationChallenge: NSURLAuthenticationChallenge): void;

	resourceLoaderDidCancelLoadingRequest?(_: AVAssetResourceLoader, didCancelLoadingRequest: AVAssetResourceLoadingRequest): void;

	resourceLoaderShouldWaitForLoadingOfRequestedResource?(_: AVAssetResourceLoader, shouldWaitForLoadingOfRequestedResource: AVAssetResourceLoadingRequest): boolean;

	resourceLoaderShouldWaitForRenewalOfRequestedResource?(_: AVAssetResourceLoader, shouldWaitForRenewalOfRequestedResource: AVAssetResourceRenewalRequest): boolean;

	resourceLoaderShouldWaitForResponseToAuthenticationChallenge?(_: AVAssetResourceLoader, shouldWaitForResponseToAuthenticationChallenge: NSURLAuthenticationChallenge): boolean;
}
declare var AVAssetResourceLoaderDelegate: {

	prototype: AVAssetResourceLoaderDelegate;
};

declare class AVAssetResourceLoadingContentInformationRequest extends NSObject {

	readonly allowedContentTypes: NSArray<string>;

	setByteRangeAccessSupported(_: boolean)

	isByteRangeAccessSupported: boolean;

	setContentLength(_: number)

	contentLength: number;

	setContentType(_: string)

	contentType: string;

	setRenewalDate(_: Date)

	renewalDate: Date;
}

declare class AVAssetResourceLoadingDataRequest extends NSObject {

	readonly currentOffset: number;

	readonly requestedLength: number;

	readonly requestedOffset: number;

	readonly requestsAllDataToEndOfResource: boolean;

	respondWithData(_: NSData): void;
}

declare class AVAssetResourceLoadingRequest extends NSObject {

	readonly isCancelled: boolean;

	readonly contentInformationRequest: AVAssetResourceLoadingContentInformationRequest;

	readonly dataRequest: AVAssetResourceLoadingDataRequest;

	readonly isFinished: boolean;

	setRedirect(_: NSURLRequest)

	redirect: NSURLRequest;

	readonly request: NSURLRequest;

	readonly requestor: AVAssetResourceLoadingRequestor;

	setResponse(_: NSURLResponse)

	response: NSURLResponse;

	finishLoading(): void;

	finishLoadingWithError(with_?: NSError): void;

	persistentContentKeyFromKeyVendorResponseOptionsError(options: NSData, error?: NSDictionary<string, any>): NSData;

	streamingContentKeyRequestDataForAppContentIdentifierOptionsError(contentIdentifier: NSData, options: NSData, error?: NSDictionary<string, any>): NSData;
}

declare var AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey: string;

declare class AVAssetResourceLoadingRequestor extends NSObject {

	readonly providesExpiredSessionReports: boolean;
}

declare class AVAssetResourceRenewalRequest extends AVAssetResourceLoadingRequest {
}

declare class AVAssetTrack extends NSObject implements AVAsynchronousKeyValueLoading, NSCopying {

	readonly asset: AVAsset;

	readonly availableMetadataFormats: NSArray<string>;

	readonly availableTrackAssociationTypes: NSArray<string>;

	readonly canProvideSampleCursors: boolean;

	readonly commonMetadata: NSArray<AVMetadataItem>;

	readonly isDecodable: boolean;

	readonly isEnabled: boolean;

	readonly estimatedDataRate: number;

	readonly extendedLanguageTag: string;

	readonly formatDescriptions: NSArray<any>;

	readonly hasAudioSampleDependencies: boolean;

	readonly languageCode: string;

	readonly mediaType: string;

	readonly metadata: NSArray<AVMetadataItem>;

	readonly minFrameDuration: CMTime;

	readonly naturalSize: CGSize;

	readonly naturalTimeScale: number;

	readonly nominalFrameRate: number;

	readonly isPlayable: boolean;

	readonly preferredTransform: CGAffineTransform;

	readonly preferredVolume: number;

	readonly requiresFrameReordering: boolean;

	readonly segments: NSArray<AVAssetTrackSegment>;

	readonly isSelfContained: boolean;

	readonly timeRange: CMTimeRange;

	readonly totalSampleDataLength: number;

	readonly trackID: number;

	associatedTracksOfType(_: string): NSArray<AVAssetTrack>;

	copyWithZone(_?: any): any;

	hasMediaCharacteristic(_: string): boolean;

	loadValuesAsynchronouslyForKeysCompletionHandler(_: NSArray<string>, completionHandler?: () => void): void;

	makeSampleCursorAtFirstSampleInDecodeOrder(): AVSampleCursor;

	makeSampleCursorAtLastSampleInDecodeOrder(): AVSampleCursor;

	makeSampleCursorWithPresentationTimeStamp(presentationTimeStamp: CMTime): AVSampleCursor;

	metadataForFormat(_: string): NSArray<AVMetadataItem>;

	samplePresentationTimeForTrackTime(_: CMTime): CMTime;

	segmentForTrackTime(_: CMTime): AVAssetTrackSegment;

	statusOfValueForKeyError(error: string): AVKeyValueStatus;
}

declare class AVAssetTrackGroup extends NSObject implements NSCopying {

	readonly trackIDs: NSArray<number>;

	copyWithZone(_?: any): any;
}

declare class AVAssetTrackSegment extends NSObject {

	readonly isEmpty: boolean;

	readonly timeMapping: CMTimeMapping;
}

declare var AVAssetTrackSegmentsDidChangeNotification: string;

declare var AVAssetTrackTimeRangeDidChangeNotification: string;

declare var AVAssetTrackTrackAssociationsDidChangeNotification: string;

declare var AVAssetWasDefragmentedNotification: string;

declare class AVAssetWriter extends NSObject {

	static assetWriterWithURLFileTypeError(fileType: NSURL, error: string): AVAssetWriter;

	readonly availableMediaTypes: NSArray<string>;

	setDirectoryForTemporaryFiles(_: NSURL)

	directoryForTemporaryFiles: NSURL;

	readonly error: NSError;

	readonly inputGroups: NSArray<AVAssetWriterInputGroup>;

	readonly inputs: NSArray<AVAssetWriterInput>;

	setMetadata(_: NSArray<AVMetadataItem>)

	metadata: NSArray<AVMetadataItem>;

	setMovieFragmentInterval(_: CMTime)

	movieFragmentInterval: CMTime;

	setMovieTimeScale(_: number)

	movieTimeScale: number;

	readonly outputFileType: string;

	readonly outputURL: NSURL;

	setOverallDurationHint(_: CMTime)

	overallDurationHint: CMTime;

	setShouldOptimizeForNetworkUse(_: boolean)

	shouldOptimizeForNetworkUse: boolean;

	readonly status: AVAssetWriterStatus;

	static create(URL: NSURL, fileType: string);

	addInput(_: AVAssetWriterInput): void;

	addInputGroup(_: AVAssetWriterInputGroup): void;

	canAddInput(_: AVAssetWriterInput): boolean;

	canAddInputGroup(_: AVAssetWriterInputGroup): boolean;

	canApplyOutputSettingsForMediaType(outputSettings?: NSDictionary<string, any>, forMediaType: string): boolean;

	cancelWriting(): void;

	endSessionAtSourceTime(_: CMTime): void;

	finishWritingWithCompletionHandler(_: () => void): void;

	startSessionAtSourceTime(_: CMTime): void;

	startWriting(): boolean;
}

declare class AVAssetWriterInput extends NSObject {

	static assetWriterInputWithMediaTypeOutputSettings(_: string, outputSettings?: NSDictionary<string, any>): AVAssetWriterInput;

	static assetWriterInputWithMediaTypeOutputSettingsSourceFormatHint(_: string, outputSettings?: NSDictionary<string, any>, sourceFormatHint?: any): AVAssetWriterInput;

	readonly canPerformMultiplePasses: boolean;

	readonly currentPassDescription: AVAssetWriterInputPassDescription;

	setExpectsMediaDataInRealTime(_: boolean)

	expectsMediaDataInRealTime: boolean;

	setExtendedLanguageTag(_: string)

	extendedLanguageTag: string;

	setLanguageCode(_: string)

	languageCode: string;

	setMarksOutputTrackAsEnabled(_: boolean)

	marksOutputTrackAsEnabled: boolean;

	setMediaDataLocation(_: string)

	mediaDataLocation: string;

	setMediaTimeScale(_: number)

	mediaTimeScale: number;

	readonly mediaType: string;

	setMetadata(_: NSArray<AVMetadataItem>)

	metadata: NSArray<AVMetadataItem>;

	setNaturalSize(_: CGSize)

	naturalSize: CGSize;

	readonly outputSettings: NSDictionary<string, any>;

	setPerformsMultiPassEncodingIfSupported(_: boolean)

	performsMultiPassEncodingIfSupported: boolean;

	setPreferredMediaChunkAlignment(_: number)

	preferredMediaChunkAlignment: number;

	setPreferredMediaChunkDuration(_: CMTime)

	preferredMediaChunkDuration: CMTime;

	setPreferredVolume(_: number)

	preferredVolume: number;

	readonly isReadyForMoreMediaData: boolean;

	setSampleReferenceBaseURL(_: NSURL)

	sampleReferenceBaseURL: NSURL;

	readonly sourceFormatHint: any;

	setTransform(_: CGAffineTransform)

	transform: CGAffineTransform;

	static create(mediaType: string, outputSettings: NSDictionary<string, any>);

	static create(mediaType: string, outputSettings: NSDictionary<string, any>, sourceFormatHint: any);

	addTrackAssociationWithTrackOfInputType(_: AVAssetWriterInput, type: string): void;

	appendSampleBuffer(_: any): boolean;

	canAddTrackAssociationWithTrackOfInputType(_: AVAssetWriterInput, type: string): boolean;

	markAsFinished(): void;

	markCurrentPassAsFinished(): void;

	requestMediaDataWhenReadyOnQueueUsingBlock(_: NSObject, usingBlock: () => void): void;

	respondToEachPassDescriptionOnQueueUsingBlock(_: NSObject, usingBlock: () => void): void;
}

declare class AVAssetWriterInputGroup extends AVMediaSelectionGroup {

	static assetWriterInputGroupWithInputsDefaultInput(_: NSArray<AVAssetWriterInput>, defaultInput?: AVAssetWriterInput): AVAssetWriterInputGroup;

	readonly defaultInput: AVAssetWriterInput;

	readonly inputs: NSArray<AVAssetWriterInput>;

	static create(inputs: NSArray<AVAssetWriterInput> | AVAssetWriterInput[], defaultInput: AVAssetWriterInput);
}

declare var AVAssetWriterInputMediaDataLocationBeforeMainMediaDataNotInterleaved: string;

declare var AVAssetWriterInputMediaDataLocationInterleavedWithMainMediaData: string;

declare class AVAssetWriterInputMetadataAdaptor extends NSObject {

	static assetWriterInputMetadataAdaptorWithAssetWriterInput(_: AVAssetWriterInput): AVAssetWriterInputMetadataAdaptor;

	readonly assetWriterInput: AVAssetWriterInput;

	static create(assetWriterInput: AVAssetWriterInput);

	appendTimedMetadataGroup(_: AVTimedMetadataGroup): boolean;
}

declare class AVAssetWriterInputPassDescription extends NSObject {

	readonly sourceTimeRanges: NSArray<NSValue>;
}

declare class AVAssetWriterInputPixelBufferAdaptor extends NSObject {

	static assetWriterInputPixelBufferAdaptorWithAssetWriterInputSourcePixelBufferAttributes(_: AVAssetWriterInput, sourcePixelBufferAttributes?: NSDictionary<string, any>): AVAssetWriterInputPixelBufferAdaptor;

	readonly assetWriterInput: AVAssetWriterInput;

	readonly pixelBufferPool: any;

	readonly sourcePixelBufferAttributes: NSDictionary<string, any>;

	static create(assetWriterInput: AVAssetWriterInput, sourcePixelBufferAttributes: NSDictionary<string, any>);

	appendPixelBufferWithPresentationTime(_: any, withPresentationTime: CMTime): boolean;
}

enum AVAssetWriterStatus {

	Unknown = 0,

	Writing = 1,

	Completed = 2,

	Failed = 3,

	Cancelled = 4
}


declare class AVAsynchronousCIImageFilteringRequest extends NSObject implements NSCopying {

	readonly compositionTime: CMTime;

	readonly renderSize: CGSize;

	readonly sourceImage: CIImage;

	copyWithZone(_?: any): any;

	finishWithError(with_: NSError): void;

	finishWithImageContext(_: CIImage, context?: CIContext): void;
}

interface AVAsynchronousKeyValueLoading {

	loadValuesAsynchronouslyForKeysCompletionHandler(_: NSArray<string>, completionHandler?: () => void): void;

	statusOfValueForKeyError(error: string): AVKeyValueStatus;
}
declare var AVAsynchronousKeyValueLoading: {

	prototype: AVAsynchronousKeyValueLoading;
};

declare class AVAsynchronousVideoCompositionRequest extends NSObject implements NSCopying {

	readonly compositionTime: CMTime;

	readonly renderContext: AVVideoCompositionRenderContext;

	readonly sourceTrackIDs: NSArray<number>;

	readonly videoCompositionInstruction: AVVideoCompositionInstructionProtocol;

	copyWithZone(_?: any): any;

	finishCancelledRequest(): void;

	finishWithComposedVideoFrame(_: any): void;

	finishWithError(with_: NSError): void;

	sourceFrameByTrackID(_: number): any;
}

interface AVAudio3DAngularOrientation {
	yaw: number;
	pitch: number;
	roll: number;
}
declare var AVAudio3DAngularOrientation: AVAudio3DAngularOrientation;

interface AVAudio3DMixing extends NSObjectProtocol {

	setObstruction(_: number)

	obstruction: number;

	setOcclusion(_: number)

	occlusion: number;

	setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode)

	pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode;

	setPosition(_: AVAudio3DPoint)

	position: AVAudio3DPoint;

	setRate(_: number)

	rate: number;

	setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm)

	renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm;

	setReverbBlend(_: number)

	reverbBlend: number;

	setSourceMode(_: AVAudio3DMixingSourceMode)

	sourceMode: AVAudio3DMixingSourceMode;
}
declare var AVAudio3DMixing: {

	prototype: AVAudio3DMixing;
};

enum AVAudio3DMixingPointSourceInHeadMode {

	Mono = 0,

	Bypass = 1
}


enum AVAudio3DMixingRenderingAlgorithm {

	EqualPowerPanning = 0,

	SphericalHead = 1,

	HRTF = 2,

	SoundField = 3,

	StereoPassThrough = 5,

	HRTFHQ = 6,

	Auto = 7
}


enum AVAudio3DMixingSourceMode {

	SpatializeIfMono = 0,

	Bypass = 1,

	PointSource = 2,

	AmbienceBed = 3
}


interface AVAudio3DPoint {
	x: number;
	y: number;
	z: number;
}
declare var AVAudio3DPoint: AVAudio3DPoint;

interface AVAudio3DVectorOrientation {
	forward: AVAudio3DPoint;
	up: AVAudio3DPoint;
}
declare var AVAudio3DVectorOrientation: AVAudio3DVectorOrientation;

declare var AVAudioBitRateStrategy_Constant: string;

declare var AVAudioBitRateStrategy_LongTermAverage: string;

declare var AVAudioBitRateStrategy_Variable: string;

declare var AVAudioBitRateStrategy_VariableConstrained: string;

declare class AVAudioBuffer extends NSObject implements NSCopying, NSMutableCopying {

	readonly audioBufferList: AudioBufferList;

	readonly format: AVAudioFormat;

	readonly mutableAudioBufferList: AudioBufferList;

	copyWithZone(_?: any): any;

	mutableCopyWithZone(_?: any): any;
}

declare class AVAudioChannelLayout extends NSObject implements NSSecureCoding {

	static layoutWithLayout(_: AudioChannelLayout): AVAudioChannelLayout;

	static layoutWithLayoutTag(_: number): AVAudioChannelLayout;

	readonly channelCount: number;

	readonly layout: AudioChannelLayout;

	readonly layoutTag: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(layout: AudioChannelLayout);

	static create(layoutTag: number);

	encodeWithCoder(_: NSCoder): void;
}

enum AVAudioCommonFormat {

	OtherFormat = 0,

	PCMFormatFloat32 = 1,

	PCMFormatFloat64 = 2,

	PCMFormatInt16 = 3,

	PCMFormatInt32 = 4
}


declare class AVAudioCompressedBuffer extends AVAudioBuffer {

	readonly byteCapacity: number;

	setByteLength(_: number)

	byteLength: number;

	readonly data: any;

	readonly maximumPacketSize: number;

	readonly packetCapacity: number;

	setPacketCount(_: number)

	packetCount: number;

	readonly packetDescriptions: AudioStreamPacketDescription;

	static create(format: AVAudioFormat, packetCapacity: number);

	static create(format: AVAudioFormat, packetCapacity: number, maximumPacketSize: number);
}

declare class AVAudioConnectionPoint extends NSObject {

	readonly bus: number;

	readonly node: AVAudioNode;

	static create(node: AVAudioNode, bus: number);
}

declare class AVAudioConverter extends NSObject {

	readonly applicableEncodeBitRates: NSArray<number>;

	readonly applicableEncodeSampleRates: NSArray<number>;

	readonly availableEncodeBitRates: NSArray<number>;

	readonly availableEncodeChannelLayoutTags: NSArray<number>;

	readonly availableEncodeSampleRates: NSArray<number>;

	setBitRate(_: number)

	bitRate: number;

	setBitRateStrategy(_: string)

	bitRateStrategy: string;

	setChannelMap(_: NSArray<number>)

	channelMap: NSArray<number>;

	setDither(_: boolean)

	dither: boolean;

	setDownmix(_: boolean)

	downmix: boolean;

	readonly inputFormat: AVAudioFormat;

	setMagicCookie(_: NSData)

	magicCookie: NSData;

	readonly maximumOutputPacketSize: number;

	readonly outputFormat: AVAudioFormat;

	setPrimeInfo(_: AVAudioConverterPrimeInfo)

	primeInfo: AVAudioConverterPrimeInfo;

	setPrimeMethod(_: AVAudioConverterPrimeMethod)

	primeMethod: AVAudioConverterPrimeMethod;

	setSampleRateConverterAlgorithm(_: string)

	sampleRateConverterAlgorithm: string;

	setSampleRateConverterQuality(_: number)

	sampleRateConverterQuality: number;

	static create(fromFormat: AVAudioFormat, toFormat: AVAudioFormat);

	convertToBufferErrorWithInputFromBlock(_: AVAudioBuffer, error?: NSError, withInputFromBlock: (p1: number, p2: AVAudioConverterInputStatus) => AVAudioBuffer): AVAudioConverterOutputStatus;

	convertToBufferFromBufferError(fromBuffer: AVAudioPCMBuffer, error: AVAudioPCMBuffer): boolean;

	reset(): void;
}

enum AVAudioConverterInputStatus {

	HaveData = 0,

	NoDataNow = 1,

	EndOfStream = 2
}


enum AVAudioConverterOutputStatus {

	HaveData = 0,

	InputRanDry = 1,

	EndOfStream = 2,

	Error = 3
}


interface AVAudioConverterPrimeInfo {
	leadingFrames: number;
	trailingFrames: number;
}
declare var AVAudioConverterPrimeInfo: AVAudioConverterPrimeInfo;

enum AVAudioConverterPrimeMethod {

	Pre = 0,

	Normal = 1,

	None = 2
}


declare class AVAudioEngine extends NSObject {

	readonly attachedNodes: NSSet<AVAudioNode>;

	setAutoShutdownEnabled(_: boolean)

	isAutoShutdownEnabled: boolean;

	readonly inputNode: AVAudioInputNode;

	readonly isInManualRenderingMode: boolean;

	readonly mainMixerNode: AVAudioMixerNode;

	readonly manualRenderingBlock: (p1: number, p2: AudioBufferList, p3: number) => AVAudioEngineManualRenderingStatus;

	readonly manualRenderingFormat: AVAudioFormat;

	readonly manualRenderingMaximumFrameCount: number;

	readonly manualRenderingMode: AVAudioEngineManualRenderingMode;

	readonly manualRenderingSampleTime: number;

	setMusicSequence(_: any)

	musicSequence: any;

	readonly outputNode: AVAudioOutputNode;

	readonly isRunning: boolean;

	attachNode(_: AVAudioNode): void;

	connectToFormat(_: AVAudioNode, to: AVAudioNode, format?: AVAudioFormat): void;

	connectToFromBusToBusFormat(_: AVAudioNode, to: AVAudioNode, fromBus: number, toBus: number, format?: AVAudioFormat): void;

	connectToConnectionPointsFromBusFormat(_: AVAudioNode, toConnectionPoints: NSArray<AVAudioConnectionPoint>, fromBus: number, format?: AVAudioFormat): void;

	connectMIDIToFormatBlock(_: AVAudioNode, to: AVAudioNode, format?: AVAudioFormat, block?: (p1: number, p2: number, p3: number, p4: string) => number): void;

	connectMIDIToNodesFormatBlock(_: AVAudioNode, toNodes: NSArray<AVAudioNode>, format?: AVAudioFormat, block?: (p1: number, p2: number, p3: number, p4: string) => number): void;

	detachNode(_: AVAudioNode): void;

	disableManualRenderingMode(): void;

	disconnectMIDIFrom(_: AVAudioNode, from: AVAudioNode): void;

	disconnectMIDIFromNodes(_: AVAudioNode, fromNodes: NSArray<AVAudioNode>): void;

	disconnectMIDIInput(_: AVAudioNode): void;

	disconnectMIDIOutput(_: AVAudioNode): void;

	disconnectNodeInput(_: AVAudioNode): void;

	disconnectNodeInputBus(_: AVAudioNode, bus: number): void;

	disconnectNodeOutput(_: AVAudioNode): void;

	disconnectNodeOutputBus(_: AVAudioNode, bus: number): void;

	enableManualRenderingModeFormatMaximumFrameCountError(format: AVAudioEngineManualRenderingMode, maximumFrameCount: AVAudioFormat, error: number): boolean;

	inputConnectionPointForNodeInputBus(_: AVAudioNode, inputBus: number): AVAudioConnectionPoint;

	outputConnectionPointsForNodeOutputBus(_: AVAudioNode, outputBus: number): NSArray<AVAudioConnectionPoint>;

	pause(): void;

	prepare(): void;

	renderOfflineToBufferError(toBuffer: number, error: AVAudioPCMBuffer): AVAudioEngineManualRenderingStatus;

	reset(): void;

	startAndReturnError(): boolean;

	stop(): void;
}

declare var AVAudioEngineConfigurationChangeNotification: string;

enum AVAudioEngineManualRenderingError {

	InvalidMode = -80800,

	Initialized = -80801,

	NotRunning = -80802
}


enum AVAudioEngineManualRenderingMode {

	Offline = 0,

	Realtime = 1
}


enum AVAudioEngineManualRenderingStatus {

	Error = -1,

	Success = 0,

	InsufficientDataFromInputNode = 1,

	CannotDoInCurrentContext = 2
}


enum AVAudioEnvironmentDistanceAttenuationModel {

	Exponential = 1,

	Inverse = 2,

	Linear = 3
}


declare class AVAudioEnvironmentDistanceAttenuationParameters extends NSObject {

	setDistanceAttenuationModel(_: AVAudioEnvironmentDistanceAttenuationModel)

	distanceAttenuationModel: AVAudioEnvironmentDistanceAttenuationModel;

	setMaximumDistance(_: number)

	maximumDistance: number;

	setReferenceDistance(_: number)

	referenceDistance: number;

	setRolloffFactor(_: number)

	rolloffFactor: number;
}

declare class AVAudioEnvironmentNode extends AVAudioNode implements AVAudioMixing {

	readonly applicableRenderingAlgorithms: NSArray<number>;

	readonly distanceAttenuationParameters: AVAudioEnvironmentDistanceAttenuationParameters;

	setListenerAngularOrientation(_: AVAudio3DAngularOrientation)

	listenerAngularOrientation: AVAudio3DAngularOrientation;

	setListenerPosition(_: AVAudio3DPoint)

	listenerPosition: AVAudio3DPoint;

	setListenerVectorOrientation(_: AVAudio3DVectorOrientation)

	listenerVectorOrientation: AVAudio3DVectorOrientation;

	readonly nextAvailableInputBus: number;

	setOutputType(_: AVAudioEnvironmentOutputType)

	outputType: AVAudioEnvironmentOutputType;

	setOutputVolume(_: number)

	outputVolume: number;

	readonly reverbParameters: AVAudioEnvironmentReverbParameters;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setObstruction(_: number)

	obstruction: number; // inherited from AVAudio3DMixing

	setOcclusion(_: number)

	occlusion: number; // inherited from AVAudio3DMixing

	setPan(_: number)

	pan: number; // inherited from AVAudioStereoMixing

	setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode)

	pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode; // inherited from AVAudio3DMixing

	setPosition(_: AVAudio3DPoint)

	position: AVAudio3DPoint; // inherited from AVAudio3DMixing

	setRate(_: number)

	rate: number; // inherited from AVAudio3DMixing

	setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm)

	renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm; // inherited from AVAudio3DMixing

	setReverbBlend(_: number)

	reverbBlend: number; // inherited from AVAudio3DMixing

	setSourceMode(_: AVAudio3DMixingSourceMode)

	sourceMode: AVAudio3DMixingSourceMode; // inherited from AVAudio3DMixing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setVolume(_: number)

	volume: number; // inherited from AVAudioMixing

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	destinationForMixerBus(_: AVAudioNode, bus: number): AVAudioMixingDestination;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

enum AVAudioEnvironmentOutputType {

	Auto = 0,

	Headphones = 1,

	BuiltInSpeakers = 2,

	ExternalSpeakers = 3
}


declare class AVAudioEnvironmentReverbParameters extends NSObject {

	setEnable(_: boolean)

	enable: boolean;

	readonly filterParameters: AVAudioUnitEQFilterParameters;

	setLevel(_: number)

	level: number;

	loadFactoryReverbPreset(_: AVAudioUnitReverbPreset): void;
}

declare class AVAudioFile extends NSObject {

	readonly fileFormat: AVAudioFormat;

	setFramePosition(_: number)

	framePosition: number;

	readonly length: number;

	readonly processingFormat: AVAudioFormat;

	readonly url: NSURL;

	static create(forReading: NSURL, commonFormat: AVAudioCommonFormat, interleaved: boolean);

	static create(forReading: NSURL);

	static create(forWriting: NSURL, settings: NSDictionary<string, any>, commonFormat: AVAudioCommonFormat, interleaved: boolean);

	static create(forWriting: NSURL, settings: NSDictionary<string, any>);

	readIntoBufferError(error: AVAudioPCMBuffer): boolean;

	readIntoBufferFrameCountError(frameCount: AVAudioPCMBuffer, error: number): boolean;

	writeFromBufferError(error: AVAudioPCMBuffer): boolean;
}

declare var AVAudioFileTypeKey: string;

declare class AVAudioFormat extends NSObject implements NSSecureCoding {

	readonly channelCount: number;

	readonly channelLayout: AVAudioChannelLayout;

	readonly commonFormat: AVAudioCommonFormat;

	readonly formatDescription: any;

	readonly isInterleaved: boolean;

	setMagicCookie(_: NSData)

	magicCookie: NSData;

	readonly sampleRate: number;

	readonly settings: NSDictionary<string, any>;

	readonly isStandard: boolean;

	readonly streamDescription: AudioStreamBasicDescription;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(standardFormatWithSampleRate: number, channelLayout: AVAudioChannelLayout);

	static create(standardFormatWithSampleRate: number, channels: number);

	static create(CMAudioFormatDescription: any);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(commonFormat: AVAudioCommonFormat, sampleRate: number, channels: number, interleaved: boolean);

	static create(commonFormat: AVAudioCommonFormat, sampleRate: number, interleaved: boolean, channelLayout: AVAudioChannelLayout);

	static create(settings: NSDictionary<string, any>);

	static create(streamDescription: AudioStreamBasicDescription);

	static create(streamDescription: AudioStreamBasicDescription, channelLayout: AVAudioChannelLayout);

	encodeWithCoder(_: NSCoder): void;
}

declare class AVAudioIONode extends AVAudioNode {

	readonly audioUnit: ComponentInstanceRecord;

	readonly presentationLatency: number;

	readonly isVoiceProcessingEnabled: boolean;

	setVoiceProcessingEnabledError(error: boolean): boolean;
}

declare class AVAudioInputNode extends AVAudioIONode implements AVAudioMixing {

	setVoiceProcessingAGCEnabled(_: boolean)

	isVoiceProcessingAGCEnabled: boolean;

	setVoiceProcessingBypassed(_: boolean)

	isVoiceProcessingBypassed: boolean;

	setVoiceProcessingInputMuted(_: boolean)

	isVoiceProcessingInputMuted: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setObstruction(_: number)

	obstruction: number; // inherited from AVAudio3DMixing

	setOcclusion(_: number)

	occlusion: number; // inherited from AVAudio3DMixing

	setPan(_: number)

	pan: number; // inherited from AVAudioStereoMixing

	setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode)

	pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode; // inherited from AVAudio3DMixing

	setPosition(_: AVAudio3DPoint)

	position: AVAudio3DPoint; // inherited from AVAudio3DMixing

	setRate(_: number)

	rate: number; // inherited from AVAudio3DMixing

	setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm)

	renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm; // inherited from AVAudio3DMixing

	setReverbBlend(_: number)

	reverbBlend: number; // inherited from AVAudio3DMixing

	setSourceMode(_: AVAudio3DMixingSourceMode)

	sourceMode: AVAudio3DMixingSourceMode; // inherited from AVAudio3DMixing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setVolume(_: number)

	volume: number; // inherited from AVAudioMixing

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	destinationForMixerBus(_: AVAudioNode, bus: number): AVAudioMixingDestination;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setManualRenderingInputPCMFormatInputBlock(_: AVAudioFormat, inputBlock: (p1: number) => AudioBufferList): boolean;
}

declare class AVAudioMix extends NSObject implements NSCopying, NSMutableCopying {

	readonly inputParameters: NSArray<AVAudioMixInputParameters>;

	copyWithZone(_?: any): any;

	mutableCopyWithZone(_?: any): any;
}

declare class AVAudioMixInputParameters extends NSObject implements NSCopying, NSMutableCopying {

	readonly audioTapProcessor: any;

	readonly audioTimePitchAlgorithm: string;

	readonly trackID: number;

	copyWithZone(_?: any): any;

	getVolumeRampForTimeStartVolumeEndVolumeTimeRange(_: CMTime, startVolume?: number, endVolume?: number, timeRange?: CMTimeRange): boolean;

	mutableCopyWithZone(_?: any): any;
}

declare class AVAudioMixerNode extends AVAudioNode implements AVAudioMixing {

	readonly nextAvailableInputBus: number;

	setOutputVolume(_: number)

	outputVolume: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setObstruction(_: number)

	obstruction: number; // inherited from AVAudio3DMixing

	setOcclusion(_: number)

	occlusion: number; // inherited from AVAudio3DMixing

	setPan(_: number)

	pan: number; // inherited from AVAudioStereoMixing

	setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode)

	pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode; // inherited from AVAudio3DMixing

	setPosition(_: AVAudio3DPoint)

	position: AVAudio3DPoint; // inherited from AVAudio3DMixing

	setRate(_: number)

	rate: number; // inherited from AVAudio3DMixing

	setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm)

	renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm; // inherited from AVAudio3DMixing

	setReverbBlend(_: number)

	reverbBlend: number; // inherited from AVAudio3DMixing

	setSourceMode(_: AVAudio3DMixingSourceMode)

	sourceMode: AVAudio3DMixingSourceMode; // inherited from AVAudio3DMixing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setVolume(_: number)

	volume: number; // inherited from AVAudioMixing

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	destinationForMixerBus(_: AVAudioNode, bus: number): AVAudioMixingDestination;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

interface AVAudioMixing extends AVAudio3DMixing, AVAudioStereoMixing {

	setVolume(_: number)

	volume: number;

	destinationForMixerBus(_: AVAudioNode, bus: number): AVAudioMixingDestination;
}
declare var AVAudioMixing: {

	prototype: AVAudioMixing;
};

declare class AVAudioMixingDestination extends NSObject implements AVAudioMixing {

	readonly connectionPoint: AVAudioConnectionPoint;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setObstruction(_: number)

	obstruction: number; // inherited from AVAudio3DMixing

	setOcclusion(_: number)

	occlusion: number; // inherited from AVAudio3DMixing

	setPan(_: number)

	pan: number; // inherited from AVAudioStereoMixing

	setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode)

	pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode; // inherited from AVAudio3DMixing

	setPosition(_: AVAudio3DPoint)

	position: AVAudio3DPoint; // inherited from AVAudio3DMixing

	setRate(_: number)

	rate: number; // inherited from AVAudio3DMixing

	setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm)

	renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm; // inherited from AVAudio3DMixing

	setReverbBlend(_: number)

	reverbBlend: number; // inherited from AVAudio3DMixing

	setSourceMode(_: AVAudio3DMixingSourceMode)

	sourceMode: AVAudio3DMixingSourceMode; // inherited from AVAudio3DMixing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setVolume(_: number)

	volume: number; // inherited from AVAudioMixing

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	destinationForMixerBus(_: AVAudioNode, bus: number): AVAudioMixingDestination;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AVAudioNode extends NSObject {

	readonly AUAudioUnit: AUAudioUnit;

	readonly engine: AVAudioEngine;

	readonly lastRenderTime: AVAudioTime;

	readonly latency: number;

	readonly numberOfInputs: number;

	readonly numberOfOutputs: number;

	readonly outputPresentationLatency: number;

	inputFormatForBus(_: number): AVAudioFormat;

	installTapOnBusBufferSizeFormatBlock(_: number, bufferSize: number, format?: AVAudioFormat, block: (p1: AVAudioPCMBuffer, p2: AVAudioTime) => void): void;

	nameForInputBus(_: number): string;

	nameForOutputBus(_: number): string;

	outputFormatForBus(_: number): AVAudioFormat;

	removeTapOnBus(_: number): void;

	reset(): void;
}

declare class AVAudioOutputNode extends AVAudioIONode {
}

declare class AVAudioPCMBuffer extends AVAudioBuffer {

	readonly floatChannelData: number;

	readonly frameCapacity: number;

	setFrameLength(_: number)

	frameLength: number;

	readonly int16ChannelData: number;

	readonly int32ChannelData: number;

	readonly stride: number;

	static create(PCMFormat: AVAudioFormat, frameCapacity: number);
}

declare class AVAudioPlayer extends NSObject {

	setCurrentDevice(_: string)

	currentDevice: string;

	setCurrentTime(_: number)

	currentTime: number;

	readonly data: NSData;

	setDelegate(_: AVAudioPlayerDelegate)

	delegate: AVAudioPlayerDelegate;

	readonly deviceCurrentTime: number;

	readonly duration: number;

	setEnableRate(_: boolean)

	enableRate: boolean;

	readonly format: AVAudioFormat;

	setMeteringEnabled(_: boolean)

	isMeteringEnabled: boolean;

	readonly numberOfChannels: number;

	setNumberOfLoops(_: number)

	numberOfLoops: number;

	setPan(_: number)

	pan: number;

	readonly isPlaying: boolean;

	setRate(_: number)

	rate: number;

	readonly settings: NSDictionary<string, any>;

	readonly url: NSURL;

	setVolume(_: number)

	volume: number;

	static create(contentsOfURL: NSURL);

	static create(contentsOfURL: NSURL, fileTypeHint: string);

	static create(data: NSData);

	static create(data: NSData, fileTypeHint: string);

	averagePowerForChannel(_: number): number;

	pause(): void;

	peakPowerForChannel(_: number): number;

	play(): boolean;

	playAtTime(_: number): boolean;

	prepareToPlay(): boolean;

	setVolumeFadeDuration(_: number, fadeDuration: number): void;

	stop(): void;

	updateMeters(): void;
}

interface AVAudioPlayerDelegate extends NSObjectProtocol {

	audioPlayerDecodeErrorDidOccurError?(_: AVAudioPlayer, error?: NSError): void;

	audioPlayerDidFinishPlayingSuccessfully?(_: AVAudioPlayer, successfully: boolean): void;
}
declare var AVAudioPlayerDelegate: {

	prototype: AVAudioPlayerDelegate;
};

declare class AVAudioPlayerNode extends AVAudioNode implements AVAudioMixing {

	readonly isPlaying: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setObstruction(_: number)

	obstruction: number; // inherited from AVAudio3DMixing

	setOcclusion(_: number)

	occlusion: number; // inherited from AVAudio3DMixing

	setPan(_: number)

	pan: number; // inherited from AVAudioStereoMixing

	setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode)

	pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode; // inherited from AVAudio3DMixing

	setPosition(_: AVAudio3DPoint)

	position: AVAudio3DPoint; // inherited from AVAudio3DMixing

	setRate(_: number)

	rate: number; // inherited from AVAudio3DMixing

	setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm)

	renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm; // inherited from AVAudio3DMixing

	setReverbBlend(_: number)

	reverbBlend: number; // inherited from AVAudio3DMixing

	setSourceMode(_: AVAudio3DMixingSourceMode)

	sourceMode: AVAudio3DMixingSourceMode; // inherited from AVAudio3DMixing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setVolume(_: number)

	volume: number; // inherited from AVAudioMixing

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	destinationForMixerBus(_: AVAudioNode, bus: number): AVAudioMixingDestination;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	nodeTimeForPlayerTime(_: AVAudioTime): AVAudioTime;

	pause(): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	play(): void;

	playAtTime(_?: AVAudioTime): void;

	playerTimeForNodeTime(_: AVAudioTime): AVAudioTime;

	prepareWithFrameCount(_: number): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	scheduleBufferAtTimeOptionsCompletionCallbackTypeCompletionHandler(_: AVAudioPCMBuffer, atTime?: AVAudioTime, options: AVAudioPlayerNodeBufferOptions, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler?: (p1: AVAudioPlayerNodeCompletionCallbackType) => void): void;

	scheduleBufferAtTimeOptionsCompletionHandler(_: AVAudioPCMBuffer, atTime?: AVAudioTime, options: AVAudioPlayerNodeBufferOptions, completionHandler?: () => void): void;

	scheduleBufferCompletionCallbackTypeCompletionHandler(_: AVAudioPCMBuffer, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler?: (p1: AVAudioPlayerNodeCompletionCallbackType) => void): void;

	scheduleBufferCompletionHandler(_: AVAudioPCMBuffer, completionHandler?: () => void): void;

	scheduleFileAtTimeCompletionCallbackTypeCompletionHandler(_: AVAudioFile, atTime?: AVAudioTime, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler?: (p1: AVAudioPlayerNodeCompletionCallbackType) => void): void;

	scheduleFileAtTimeCompletionHandler(_: AVAudioFile, atTime?: AVAudioTime, completionHandler?: () => void): void;

	scheduleSegmentStartingFrameFrameCountAtTimeCompletionCallbackTypeCompletionHandler(_: AVAudioFile, startingFrame: number, frameCount: number, atTime?: AVAudioTime, completionCallbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler?: (p1: AVAudioPlayerNodeCompletionCallbackType) => void): void;

	scheduleSegmentStartingFrameFrameCountAtTimeCompletionHandler(_: AVAudioFile, startingFrame: number, frameCount: number, atTime?: AVAudioTime, completionHandler?: () => void): void;

	self(): this;

	stop(): void;
}

enum AVAudioPlayerNodeBufferOptions {

	Loops = 1,

	Interrupts = 2,

	InterruptsAtLoop = 4
}


enum AVAudioPlayerNodeCompletionCallbackType {

	DataConsumed = 0,

	DataRendered = 1,

	DataPlayedBack = 2
}


enum AVAudioQuality {

	Min = 0,

	Low = 32,

	Medium = 64,

	High = 96,

	Max = 127
}


declare class AVAudioRecorder extends NSObject {

	readonly currentTime: number;

	setDelegate(_: AVAudioRecorderDelegate)

	delegate: AVAudioRecorderDelegate;

	readonly deviceCurrentTime: number;

	readonly format: AVAudioFormat;

	setMeteringEnabled(_: boolean)

	isMeteringEnabled: boolean;

	readonly isRecording: boolean;

	readonly settings: NSDictionary<string, any>;

	readonly url: NSURL;

	static create(URL: NSURL, format: AVAudioFormat);

	static create(URL: NSURL, settings: NSDictionary<string, any>);

	averagePowerForChannel(_: number): number;

	deleteRecording(): boolean;

	pause(): void;

	peakPowerForChannel(_: number): number;

	prepareToRecord(): boolean;

	record(): boolean;

	recordAtTime(_: number): boolean;

	recordAtTimeForDuration(_: number, forDuration: number): boolean;

	recordForDuration(_: number): boolean;

	stop(): void;

	updateMeters(): void;
}

interface AVAudioRecorderDelegate extends NSObjectProtocol {

	audioRecorderDidFinishRecordingSuccessfully?(_: AVAudioRecorder, successfully: boolean): void;

	audioRecorderEncodeErrorDidOccurError?(_: AVAudioRecorder, error?: NSError): void;
}
declare var AVAudioRecorderDelegate: {

	prototype: AVAudioRecorderDelegate;
};

declare class AVAudioSequencer extends NSObject {

	setCurrentPositionInBeats(_: number)

	currentPositionInBeats: number;

	setCurrentPositionInSeconds(_: number)

	currentPositionInSeconds: number;

	readonly isPlaying: boolean;

	setRate(_: number)

	rate: number;

	readonly tempoTrack: AVMusicTrack;

	readonly tracks: NSArray<AVMusicTrack>;

	readonly userInfo: NSDictionary<string, any>;

	static create(audioEngine: AVAudioEngine);

	beatsForHostTimeError(error: number): number;

	beatsForSeconds(_: number): number;

	dataWithSMPTEResolutionError(error: number): NSData;

	hostTimeForBeatsError(error: number): number;

	loadFromDataOptionsError(options: NSData, error: AVMusicSequenceLoadOptions): boolean;

	loadFromURLOptionsError(options: NSURL, error: AVMusicSequenceLoadOptions): boolean;

	prepareToPlay(): void;

	secondsForBeats(_: number): number;

	startAndReturnError(): boolean;

	stop(): void;

	writeToURLSMPTEResolutionReplaceExistingError(SMPTEResolution: NSURL, replaceExisting: number, error: boolean): boolean;
}

enum AVAudioSessionActivationOptions {

	None = 0
}


enum AVAudioSessionCategoryOptions {

	MixWithOthers = 1,

	DuckOthers = 2,

	AllowBluetooth = 4,

	DefaultToSpeaker = 8,

	InterruptSpokenAudioAndMixWithOthers = 17,

	AllowBluetoothA2DP = 32,

	AllowAirPlay = 64
}


enum AVAudioSessionIOType {

	NotSpecified = 0,

	Aggregated = 1
}


enum AVAudioSessionInterruptionOptions {

	ShouldResume = 1
}


enum AVAudioSessionInterruptionType {

	Began = 1,

	Ended = 0
}


enum AVAudioSessionPortOverride {

	None = 0,

	Speaker = 1936747378
}


enum AVAudioSessionPromptStyle {

	None = 1852796517,

	Short = 1936224884,

	Normal = 1852992876
}


enum AVAudioSessionRecordPermission {

	Undetermined = 1970168948,

	Denied = 1684369017,

	Granted = 1735552628
}


enum AVAudioSessionRouteChangeReason {

	Unknown = 0,

	NewDeviceAvailable = 1,

	OldDeviceUnavailable = 2,

	CategoryChange = 3,

	Override = 4,

	WakeFromSleep = 6,

	NoSuitableRouteForCategory = 7,

	RouteConfigurationChange = 8
}


enum AVAudioSessionRouteSharingPolicy {

	Default = 0,

	LongFormAudio = 1,

	LongForm = 1,

	Independent = 2,

	LongFormVideo = 3
}


enum AVAudioSessionSetActiveOptions {

	NotifyOthersOnDeactivation = 1
}


enum AVAudioSessionSilenceSecondaryAudioHintType {

	Begin = 1,

	End = 0
}


declare class AVAudioSinkNode extends AVAudioNode {

	static create(receiverBlock: (p1: AudioTimeStamp, p2: number, p3: AudioBufferList) => number);
}

declare class AVAudioSourceNode extends AVAudioNode implements AVAudioMixing {

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setObstruction(_: number)

	obstruction: number; // inherited from AVAudio3DMixing

	setOcclusion(_: number)

	occlusion: number; // inherited from AVAudio3DMixing

	setPan(_: number)

	pan: number; // inherited from AVAudioStereoMixing

	setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode)

	pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode; // inherited from AVAudio3DMixing

	setPosition(_: AVAudio3DPoint)

	position: AVAudio3DPoint; // inherited from AVAudio3DMixing

	setRate(_: number)

	rate: number; // inherited from AVAudio3DMixing

	setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm)

	renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm; // inherited from AVAudio3DMixing

	setReverbBlend(_: number)

	reverbBlend: number; // inherited from AVAudio3DMixing

	setSourceMode(_: AVAudio3DMixingSourceMode)

	sourceMode: AVAudio3DMixingSourceMode; // inherited from AVAudio3DMixing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setVolume(_: number)

	volume: number; // inherited from AVAudioMixing

	readonly  // inherited from NSObjectProtocol

	static create(format: AVAudioFormat, renderBlock: (p1: boolean, p2: AudioTimeStamp, p3: number, p4: AudioBufferList) => number);

	static create(renderBlock: (p1: boolean, p2: AudioTimeStamp, p3: number, p4: AudioBufferList) => number);

	conformsToProtocol(_: any /* Protocol */): boolean;

	destinationForMixerBus(_: AVAudioNode, bus: number): AVAudioMixingDestination;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

interface AVAudioStereoMixing extends NSObjectProtocol {

	setPan(_: number)

	pan: number;
}
declare var AVAudioStereoMixing: {

	prototype: AVAudioStereoMixing;
};

declare class AVAudioTime extends NSObject {

	static hostTimeForSeconds(_: number): number;

	static secondsForHostTime(_: number): number;

	static timeWithAudioTimeStampSampleRate(_: AudioTimeStamp, sampleRate: number): AVAudioTime;

	static timeWithHostTime(_: number): AVAudioTime;

	static timeWithHostTimeSampleTimeAtRate(_: number, sampleTime: number, atRate: number): AVAudioTime;

	static timeWithSampleTimeAtRate(_: number, atRate: number): AVAudioTime;

	readonly audioTimeStamp: AudioTimeStamp;

	readonly hostTime: number;

	readonly isHostTimeValid: boolean;

	readonly sampleRate: number;

	readonly sampleTime: number;

	readonly isSampleTimeValid: boolean;

	static create(audioTimeStamp: AudioTimeStamp, sampleRate: number);

	static create(hostTime: number);

	static create(hostTime: number, sampleTime: number, atRate: number);

	static create(sampleTime: number, atRate: number);

	extrapolateTimeFromAnchor(_: AVAudioTime): AVAudioTime;
}

declare var AVAudioTimePitchAlgorithmSpectral: string;

declare var AVAudioTimePitchAlgorithmTimeDomain: string;

declare var AVAudioTimePitchAlgorithmVarispeed: string;

declare class AVAudioUnit extends AVAudioNode {

	static instantiateWithComponentDescriptionOptionsCompletionHandler(_: AudioComponentDescription, options: AudioComponentInstantiationOptions, completionHandler?: (p1: AVAudioUnit, p2: NSError) => void): void;

	readonly audioComponentDescription: AudioComponentDescription;

	readonly audioUnit: ComponentInstanceRecord;

	readonly manufacturerName: string;

	readonly name: string;

	readonly version: number;

	loadAudioUnitPresetAtURLError(error: NSURL): boolean;
}

declare class AVAudioUnitComponent extends NSObject {

	readonly allTagNames: NSArray<string>;

	readonly audioComponent: any;

	readonly audioComponentDescription: AudioComponentDescription;

	readonly availableArchitectures: NSArray<number>;

	readonly configurationDictionary: NSDictionary<string, any>;

	readonly hasCustomView: boolean;

	readonly hasMIDIInput: boolean;

	readonly hasMIDIOutput: boolean;

	readonly icon: NSImage;

	readonly iconURL: NSURL;

	readonly localizedTypeName: string;

	readonly manufacturerName: string;

	readonly name: string;

	readonly passesAUVal: boolean;

	readonly isSandboxSafe: boolean;

	readonly typeName: string;

	setUserTagNames(_: NSArray<string>)

	userTagNames: NSArray<string>;

	readonly version: number;

	readonly versionString: string;

	supportsNumberInputChannelsOutputChannels(_: number, outputChannels: number): boolean;
}

declare class AVAudioUnitComponentManager extends NSObject {

	static sharedAudioUnitComponentManager(): AVAudioUnitComponentManager;

	readonly standardLocalizedTagNames: NSArray<string>;

	readonly tagNames: NSArray<string>;

	componentsMatchingDescription(_: AudioComponentDescription): NSArray<AVAudioUnitComponent>;

	componentsMatchingPredicate(_: NSPredicate): NSArray<AVAudioUnitComponent>;

	componentsPassingTest(_: (p1: AVAudioUnitComponent, p2: boolean) => boolean): NSArray<AVAudioUnitComponent>;
}

declare var AVAudioUnitComponentManagerRegistrationsChangedNotification: string;

declare var AVAudioUnitComponentTagsDidChangeNotification: string;

declare class AVAudioUnitDelay extends AVAudioUnitEffect {

	setDelayTime(_: number)

	delayTime: number;

	setFeedback(_: number)

	feedback: number;

	setLowPassCutoff(_: number)

	lowPassCutoff: number;

	setWetDryMix(_: number)

	wetDryMix: number;
}

declare class AVAudioUnitDistortion extends AVAudioUnitEffect {

	setPreGain(_: number)

	preGain: number;

	setWetDryMix(_: number)

	wetDryMix: number;

	loadFactoryPreset(_: AVAudioUnitDistortionPreset): void;
}

enum AVAudioUnitDistortionPreset {

	DrumsBitBrush = 0,

	DrumsBufferBeats = 1,

	DrumsLoFi = 2,

	MultiBrokenSpeaker = 3,

	MultiCellphoneConcert = 4,

	MultiDecimated1 = 5,

	MultiDecimated2 = 6,

	MultiDecimated3 = 7,

	MultiDecimated4 = 8,

	MultiDistortedFunk = 9,

	MultiDistortedCubed = 10,

	MultiDistortedSquared = 11,

	MultiEcho1 = 12,

	MultiEcho2 = 13,

	MultiEchoTight1 = 14,

	MultiEchoTight2 = 15,

	MultiEverythingIsBroken = 16,

	SpeechAlienChatter = 17,

	SpeechCosmicInterference = 18,

	SpeechGoldenPi = 19,

	SpeechRadioTower = 20,

	SpeechWaves = 21
}


declare class AVAudioUnitEQ extends AVAudioUnitEffect {

	readonly bands: NSArray<AVAudioUnitEQFilterParameters>;

	setGlobalGain(_: number)

	globalGain: number;

	static create(numberOfBands: number);
}

declare class AVAudioUnitEQFilterParameters extends NSObject {

	setBandwidth(_: number)

	bandwidth: number;

	setBypass(_: boolean)

	bypass: boolean;

	setFilterType(_: AVAudioUnitEQFilterType)

	filterType: AVAudioUnitEQFilterType;

	setFrequency(_: number)

	frequency: number;

	setGain(_: number)

	gain: number;
}

enum AVAudioUnitEQFilterType {

	Parametric = 0,

	LowPass = 1,

	HighPass = 2,

	ResonantLowPass = 3,

	ResonantHighPass = 4,

	BandPass = 5,

	BandStop = 6,

	LowShelf = 7,

	HighShelf = 8,

	ResonantLowShelf = 9,

	ResonantHighShelf = 10
}


declare class AVAudioUnitEffect extends AVAudioUnit {

	setBypass(_: boolean)

	bypass: boolean;

	static create(audioComponentDescription: AudioComponentDescription);
}

declare class AVAudioUnitGenerator extends AVAudioUnit implements AVAudioMixing {

	setBypass(_: boolean)

	bypass: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setObstruction(_: number)

	obstruction: number; // inherited from AVAudio3DMixing

	setOcclusion(_: number)

	occlusion: number; // inherited from AVAudio3DMixing

	setPan(_: number)

	pan: number; // inherited from AVAudioStereoMixing

	setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode)

	pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode; // inherited from AVAudio3DMixing

	setPosition(_: AVAudio3DPoint)

	position: AVAudio3DPoint; // inherited from AVAudio3DMixing

	setRate(_: number)

	rate: number; // inherited from AVAudio3DMixing

	setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm)

	renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm; // inherited from AVAudio3DMixing

	setReverbBlend(_: number)

	reverbBlend: number; // inherited from AVAudio3DMixing

	setSourceMode(_: AVAudio3DMixingSourceMode)

	sourceMode: AVAudio3DMixingSourceMode; // inherited from AVAudio3DMixing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setVolume(_: number)

	volume: number; // inherited from AVAudioMixing

	readonly  // inherited from NSObjectProtocol

	static create(audioComponentDescription: AudioComponentDescription);

	conformsToProtocol(_: any /* Protocol */): boolean;

	destinationForMixerBus(_: AVAudioNode, bus: number): AVAudioMixingDestination;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AVAudioUnitMIDIInstrument extends AVAudioUnit implements AVAudioMixing {

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setObstruction(_: number)

	obstruction: number; // inherited from AVAudio3DMixing

	setOcclusion(_: number)

	occlusion: number; // inherited from AVAudio3DMixing

	setPan(_: number)

	pan: number; // inherited from AVAudioStereoMixing

	setPointSourceInHeadMode(_: AVAudio3DMixingPointSourceInHeadMode)

	pointSourceInHeadMode: AVAudio3DMixingPointSourceInHeadMode; // inherited from AVAudio3DMixing

	setPosition(_: AVAudio3DPoint)

	position: AVAudio3DPoint; // inherited from AVAudio3DMixing

	setRate(_: number)

	rate: number; // inherited from AVAudio3DMixing

	setRenderingAlgorithm(_: AVAudio3DMixingRenderingAlgorithm)

	renderingAlgorithm: AVAudio3DMixingRenderingAlgorithm; // inherited from AVAudio3DMixing

	setReverbBlend(_: number)

	reverbBlend: number; // inherited from AVAudio3DMixing

	setSourceMode(_: AVAudio3DMixingSourceMode)

	sourceMode: AVAudio3DMixingSourceMode; // inherited from AVAudio3DMixing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	setVolume(_: number)

	volume: number; // inherited from AVAudioMixing

	readonly  // inherited from NSObjectProtocol

	static create(audioComponentDescription: AudioComponentDescription);

	conformsToProtocol(_: any /* Protocol */): boolean;

	destinationForMixerBus(_: AVAudioNode, bus: number): AVAudioMixingDestination;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	sendControllerWithValueOnChannel(_: number, withValue: number, onChannel: number): void;

	sendMIDIEventData1(_: number, data1: number): void;

	sendMIDIEventData1Data2(_: number, data1: number, data2: number): void;

	sendMIDISysExEvent(_: NSData): void;

	sendPitchBendOnChannel(_: number, onChannel: number): void;

	sendPressureOnChannel(_: number, onChannel: number): void;

	sendPressureForKeyWithValueOnChannel(_: number, withValue: number, onChannel: number): void;

	sendProgramChangeBankMSBBankLSBOnChannel(_: number, bankMSB: number, bankLSB: number, onChannel: number): void;

	sendProgramChangeOnChannel(_: number, onChannel: number): void;

	startNoteWithVelocityOnChannel(_: number, withVelocity: number, onChannel: number): void;

	stopNoteOnChannel(_: number, onChannel: number): void;
}

declare var AVAudioUnitManufacturerNameApple: string;

declare class AVAudioUnitReverb extends AVAudioUnitEffect {

	setWetDryMix(_: number)

	wetDryMix: number;

	loadFactoryPreset(_: AVAudioUnitReverbPreset): void;
}

enum AVAudioUnitReverbPreset {

	SmallRoom = 0,

	MediumRoom = 1,

	LargeRoom = 2,

	MediumHall = 3,

	LargeHall = 4,

	Plate = 5,

	MediumChamber = 6,

	LargeChamber = 7,

	Cathedral = 8,

	LargeRoom2 = 9,

	MediumHall2 = 10,

	MediumHall3 = 11,

	LargeHall2 = 12
}


declare class AVAudioUnitSampler extends AVAudioUnitMIDIInstrument {

	setGlobalTuning(_: number)

	globalTuning: number;

	setMasterGain(_: number)

	masterGain: number;

	setStereoPan(_: number)

	stereoPan: number;

	loadAudioFilesAtURLsError(error: NSArray<NSURL>): boolean;

	loadInstrumentAtURLError(error: NSURL): boolean;

	loadSoundBankInstrumentAtURLProgramBankMSBBankLSBError(program: NSURL, bankMSB: number, bankLSB: number, error: number): boolean;
}

declare class AVAudioUnitTimeEffect extends AVAudioUnit {

	setBypass(_: boolean)

	bypass: boolean;

	static create(audioComponentDescription: AudioComponentDescription);
}

declare class AVAudioUnitTimePitch extends AVAudioUnitTimeEffect {

	setOverlap(_: number)

	overlap: number;

	setPitch(_: number)

	pitch: number;

	setRate(_: number)

	rate: number;
}

declare var AVAudioUnitTypeEffect: string;

declare var AVAudioUnitTypeFormatConverter: string;

declare var AVAudioUnitTypeGenerator: string;

declare var AVAudioUnitTypeMIDIProcessor: string;

declare var AVAudioUnitTypeMixer: string;

declare var AVAudioUnitTypeMusicDevice: string;

declare var AVAudioUnitTypeMusicEffect: string;

declare var AVAudioUnitTypeOfflineEffect: string;

declare var AVAudioUnitTypeOutput: string;

declare var AVAudioUnitTypePanner: string;

declare class AVAudioUnitVarispeed extends AVAudioUnitTimeEffect {

	setRate(_: number)

	rate: number;
}

enum AVAuthorizationStatus {

	NotDetermined = 0,

	Restricted = 1,

	Denied = 2,

	Authorized = 3
}


interface AVBeatRange {
	start: number;
	length: number;
}
declare var AVBeatRange: AVBeatRange;

declare class AVCameraCalibrationData extends NSObject {

	readonly extrinsicMatrix: simd_float4x3;

	readonly intrinsicMatrix: simd_float3x3;

	readonly intrinsicMatrixReferenceDimensions: CGSize;

	readonly inverseLensDistortionLookupTable: NSData;

	readonly lensDistortionCenter: CGPoint;

	readonly lensDistortionLookupTable: NSData;

	readonly pixelSize: number;
}

declare class AVCaptureAudioChannel extends NSObject {

	readonly averagePowerLevel: number;

	setEnabled(_: boolean)

	isEnabled: boolean;

	readonly peakHoldLevel: number;

	setVolume(_: number)

	volume: number;
}

declare class AVCaptureAudioDataOutput extends AVCaptureOutput {

	setAudioSettings(_: NSDictionary<string, any>)

	audioSettings: NSDictionary<string, any>;

	readonly sampleBufferCallbackQueue: NSObject;

	readonly sampleBufferDelegate: AVCaptureAudioDataOutputSampleBufferDelegate;

	recommendedAudioSettingsForAssetWriterWithOutputFileType(writingTo: string): NSDictionary<any, any>;

	setSampleBufferDelegateQueue(_?: AVCaptureAudioDataOutputSampleBufferDelegate, queue?: NSObject): void;
}

interface AVCaptureAudioDataOutputSampleBufferDelegate extends NSObjectProtocol {

	captureOutputDidOutputSampleBufferFromConnection?(_: AVCaptureOutput, didOutputSampleBuffer: any, fromConnection: AVCaptureConnection): void;
}
declare var AVCaptureAudioDataOutputSampleBufferDelegate: {

	prototype: AVCaptureAudioDataOutputSampleBufferDelegate;
};

declare class AVCaptureAudioFileOutput extends AVCaptureFileOutput {

	static availableOutputFileTypes(): NSArray<string>;

	setAudioSettings(_: NSDictionary<string, any>)

	audioSettings: NSDictionary<string, any>;

	setMetadata(_: NSArray<AVMetadataItem>)

	metadata: NSArray<AVMetadataItem>;

	startRecordingToOutputFileURLOutputFileTypeRecordingDelegate(to: NSURL, outputFileType: string, recordingDelegate: AVCaptureFileOutputRecordingDelegate): void;
}

declare class AVCaptureAudioPreviewOutput extends AVCaptureOutput {

	setOutputDeviceUniqueID(_: string)

	outputDeviceUniqueID: string;

	setVolume(_: number)

	volume: number;
}

enum AVCaptureAutoFocusSystem {

	None = 0,

	ContrastDetection = 1,

	PhaseDetection = 2
}


enum AVCaptureColorSpace {

	sRGB = 0,

	P3_D65 = 1
}


declare class AVCaptureConnection extends NSObject {

	static connectionWithInputPortVideoPreviewLayer(_: AVCaptureInputPort, videoPreviewLayer: AVCaptureVideoPreviewLayer): AVCaptureConnection;

	static connectionWithInputPortsOutput(_: NSArray<AVCaptureInputPort>, output: AVCaptureOutput): AVCaptureConnection;

	readonly isActive: boolean;

	readonly audioChannels: NSArray<AVCaptureAudioChannel>;

	setAutomaticallyAdjustsVideoMirroring(_: boolean)

	automaticallyAdjustsVideoMirroring: boolean;

	setEnabled(_: boolean)

	isEnabled: boolean;

	readonly inputPorts: NSArray<AVCaptureInputPort>;

	readonly output: AVCaptureOutput;

	readonly isVideoFieldModeSupported: boolean;

	readonly isVideoMaxFrameDurationSupported: boolean;

	readonly isVideoMinFrameDurationSupported: boolean;

	readonly isVideoMirroringSupported: boolean;

	readonly isVideoOrientationSupported: boolean;

	setVideoFieldMode(_: AVVideoFieldMode)

	videoFieldMode: AVVideoFieldMode;

	setVideoMaxFrameDuration(_: CMTime)

	videoMaxFrameDuration: CMTime;

	setVideoMinFrameDuration(_: CMTime)

	videoMinFrameDuration: CMTime;

	setVideoMirrored(_: boolean)

	isVideoMirrored: boolean;

	setVideoOrientation(_: AVCaptureVideoOrientation)

	videoOrientation: AVCaptureVideoOrientation;

	readonly videoPreviewLayer: AVCaptureVideoPreviewLayer;

	static create(inputPort: AVCaptureInputPort, videoPreviewLayer: AVCaptureVideoPreviewLayer);

	static create(inputPorts: NSArray<AVCaptureInputPort> | AVCaptureInputPort[], output: AVCaptureOutput);
}

declare class AVCaptureDevice extends NSObject {

	static authorizationStatusForMediaType(for_: string): AVAuthorizationStatus;

	static defaultDeviceWithDeviceTypeMediaTypePosition(_: string, for_?: string, position: AVCaptureDevicePosition): AVCaptureDevice;

	static defaultDeviceWithMediaType(for_: string): AVCaptureDevice;

	static deviceWithUniqueID(_: string): AVCaptureDevice;

	static requestAccessForMediaTypeCompletionHandler(for_: string, completionHandler: (p1: boolean) => void): void;

	setActiveColorSpace(_: AVCaptureColorSpace)

	activeColorSpace: AVCaptureColorSpace;

	setActiveFormat(_: AVCaptureDeviceFormat)

	activeFormat: AVCaptureDeviceFormat;

	setActiveInputSource(_: AVCaptureDeviceInputSource)

	activeInputSource: AVCaptureDeviceInputSource;

	setActiveVideoMaxFrameDuration(_: CMTime)

	activeVideoMaxFrameDuration: CMTime;

	setActiveVideoMinFrameDuration(_: CMTime)

	activeVideoMinFrameDuration: CMTime;

	readonly isAdjustingExposure: boolean;

	readonly isAdjustingFocus: boolean;

	readonly isAdjustingWhiteBalance: boolean;

	readonly isConnected: boolean;

	readonly deviceType: string;

	setExposureMode(_: AVCaptureExposureMode)

	exposureMode: AVCaptureExposureMode;

	setExposurePointOfInterest(_: CGPoint)

	exposurePointOfInterest: CGPoint;

	readonly isExposurePointOfInterestSupported: boolean;

	readonly isFlashAvailable: boolean;

	setFlashMode(_: AVCaptureFlashMode)

	flashMode: AVCaptureFlashMode;

	setFocusMode(_: AVCaptureFocusMode)

	focusMode: AVCaptureFocusMode;

	setFocusPointOfInterest(_: CGPoint)

	focusPointOfInterest: CGPoint;

	readonly isFocusPointOfInterestSupported: boolean;

	readonly formats: NSArray<AVCaptureDeviceFormat>;

	readonly hasFlash: boolean;

	readonly hasTorch: boolean;

	readonly isInUseByAnotherApplication: boolean;

	readonly inputSources: NSArray<AVCaptureDeviceInputSource>;

	readonly linkedDevices: NSArray<AVCaptureDevice>;

	readonly localizedName: string;

	readonly manufacturer: string;

	readonly modelID: string;

	readonly position: AVCaptureDevicePosition;

	readonly isSuspended: boolean;

	readonly isTorchActive: boolean;

	readonly isTorchAvailable: boolean;

	readonly torchLevel: number;

	setTorchMode(_: AVCaptureTorchMode)

	torchMode: AVCaptureTorchMode;

	readonly transportControlsPlaybackMode: AVCaptureDeviceTransportControlsPlaybackMode;

	readonly transportControlsSpeed: number;

	readonly transportControlsSupported: boolean;

	readonly transportType: number;

	readonly uniqueID: string;

	setWhiteBalanceMode(_: AVCaptureWhiteBalanceMode)

	whiteBalanceMode: AVCaptureWhiteBalanceMode;

	hasMediaType(_: string): boolean;

	isExposureModeSupported(_: AVCaptureExposureMode): boolean;

	isFlashModeSupported(_: AVCaptureFlashMode): boolean;

	isFocusModeSupported(_: AVCaptureFocusMode): boolean;

	isTorchModeSupported(_: AVCaptureTorchMode): boolean;

	isWhiteBalanceModeSupported(_: AVCaptureWhiteBalanceMode): boolean;

	lockForConfiguration(): boolean;

	setTorchModeOnWithLevelError(level: number): boolean;

	setTransportControlsPlaybackModeSpeed(_: AVCaptureDeviceTransportControlsPlaybackMode, speed: number): void;

	supportsAVCaptureSessionPreset(_: string): boolean;

	unlockForConfiguration(): void;
}

declare class AVCaptureDeviceDiscoverySession extends NSObject {

	static discoverySessionWithDeviceTypesMediaTypePosition(_: NSArray<string>, mediaType?: string, position: AVCaptureDevicePosition): AVCaptureDeviceDiscoverySession;

	readonly devices: NSArray<AVCaptureDevice>;
}

declare class AVCaptureDeviceFormat extends NSObject {

	readonly autoFocusSystem: AVCaptureAutoFocusSystem;

	readonly formatDescription: any;

	readonly mediaType: string;

	readonly supportedColorSpaces: NSArray<number>;

	readonly videoSupportedFrameRateRanges: NSArray<AVFrameRateRange>;
}

declare class AVCaptureDeviceInput extends AVCaptureInput {

	static deviceInputWithDeviceError(error: AVCaptureDevice): AVCaptureDeviceInput;

	readonly device: AVCaptureDevice;

	static create(device: AVCaptureDevice);
}

declare class AVCaptureDeviceInputSource extends NSObject {

	readonly inputSourceID: string;

	readonly localizedName: string;
}

enum AVCaptureDevicePosition {

	Unspecified = 0,

	Back = 1,

	Front = 2
}


enum AVCaptureDeviceTransportControlsPlaybackMode {

	NotPlayingMode = 0,

	PlayingMode = 1
}


declare var AVCaptureDeviceTypeBuiltInMicrophone: string;

declare var AVCaptureDeviceTypeBuiltInWideAngleCamera: string;

declare var AVCaptureDeviceTypeExternalUnknown: string;

declare var AVCaptureDeviceWasConnectedNotification: string;

declare var AVCaptureDeviceWasDisconnectedNotification: string;

enum AVCaptureExposureMode {

	Locked = 0,

	AutoExpose = 1,

	ContinuousAutoExposure = 2,

	Custom = 3
}


declare class AVCaptureFileOutput extends AVCaptureOutput {

	setDelegate(_: AVCaptureFileOutputDelegate)

	delegate: AVCaptureFileOutputDelegate;

	setMaxRecordedDuration(_: CMTime)

	maxRecordedDuration: CMTime;

	setMaxRecordedFileSize(_: number)

	maxRecordedFileSize: number;

	setMinFreeDiskSpaceLimit(_: number)

	minFreeDiskSpaceLimit: number;

	readonly outputFileURL: NSURL;

	readonly recordedDuration: CMTime;

	readonly recordedFileSize: number;

	readonly isRecording: boolean;

	readonly isRecordingPaused: boolean;

	pauseRecording(): void;

	resumeRecording(): void;

	startRecordingToOutputFileURLRecordingDelegate(to: NSURL, recordingDelegate: AVCaptureFileOutputRecordingDelegate): void;

	stopRecording(): void;
}

interface AVCaptureFileOutputDelegate extends NSObjectProtocol {

	captureOutputDidOutputSampleBufferFromConnection?(_: AVCaptureFileOutput, didOutputSampleBuffer: any, fromConnection: AVCaptureConnection): void;

	captureOutputShouldProvideSampleAccurateRecordingStart(_: AVCaptureOutput): boolean;
}
declare var AVCaptureFileOutputDelegate: {

	prototype: AVCaptureFileOutputDelegate;
};

interface AVCaptureFileOutputRecordingDelegate extends NSObjectProtocol {

	captureOutputDidFinishRecordingToOutputFileAtURLFromConnectionsError(_: AVCaptureFileOutput, didFinishRecordingToOutputFileAtURL: NSURL, fromConnections: NSArray<AVCaptureConnection>, error?: NSError): void;

	captureOutputDidPauseRecordingToOutputFileAtURLFromConnections?(_: AVCaptureFileOutput, didPauseRecordingToOutputFileAtURL: NSURL, fromConnections: NSArray<AVCaptureConnection>): void;

	captureOutputDidResumeRecordingToOutputFileAtURLFromConnections?(_: AVCaptureFileOutput, didResumeRecordingToOutputFileAtURL: NSURL, fromConnections: NSArray<AVCaptureConnection>): void;

	captureOutputDidStartRecordingToOutputFileAtURLFromConnections?(_: AVCaptureFileOutput, didStartRecordingToOutputFileAtURL: NSURL, fromConnections: NSArray<AVCaptureConnection>): void;

	captureOutputWillFinishRecordingToOutputFileAtURLFromConnectionsError?(_: AVCaptureFileOutput, willFinishRecordingToOutputFileAtURL: NSURL, fromConnections: NSArray<AVCaptureConnection>, error?: NSError): void;
}
declare var AVCaptureFileOutputRecordingDelegate: {

	prototype: AVCaptureFileOutputRecordingDelegate;
};

enum AVCaptureFlashMode {

	Off = 0,

	On = 1,

	Auto = 2
}


enum AVCaptureFocusMode {

	Locked = 0,

	AutoFocus = 1,

	ContinuousAutoFocus = 2
}


declare class AVCaptureInput extends NSObject {

	readonly ports: NSArray<AVCaptureInputPort>;
}

declare class AVCaptureInputPort extends NSObject {

	readonly clock: any;

	setEnabled(_: boolean)

	isEnabled: boolean;

	readonly formatDescription: any;

	readonly input: AVCaptureInput;

	readonly mediaType: string;
}

declare var AVCaptureInputPortFormatDescriptionDidChangeNotification: string;

declare var AVCaptureMaxAvailableTorchLevel: number;

declare class AVCaptureMovieFileOutput extends AVCaptureFileOutput {

	setMetadata(_: NSArray<AVMetadataItem>)

	metadata: NSArray<AVMetadataItem>;

	setMovieFragmentInterval(_: CMTime)

	movieFragmentInterval: CMTime;

	outputSettingsForConnection(_: AVCaptureConnection): NSDictionary<string, any>;

	setOutputSettingsForConnection(_?: NSDictionary<string, any>, forConnection: AVCaptureConnection): void;
}

declare class AVCaptureOutput extends NSObject {

	readonly connections: NSArray<AVCaptureConnection>;

	connectionWithMediaType(with_: string): AVCaptureConnection;

	metadataOutputRectOfInterestForRect(fromOutputRect: CGRect): CGRect;

	rectForMetadataOutputRectOfInterest(fromMetadataOutputRect: CGRect): CGRect;

	transformedMetadataObjectForMetadataObjectConnection(_: AVMetadataObject, connection: AVCaptureConnection): AVMetadataObject;
}

enum AVCaptureOutputDataDroppedReason {

	None = 0,

	LateData = 1,

	OutOfBuffers = 2,

	Discontinuity = 3
}


declare class AVCapturePhoto extends NSObject {

	readonly photoCount: number;

	readonly pixelBuffer: any;

	readonly resolvedSettings: AVCaptureResolvedPhotoSettings;

	readonly timestamp: CMTime;

	CGImageRepresentation(): any;

	fileDataRepresentation(): NSData;
}

interface AVCapturePhotoCaptureDelegate extends NSObjectProtocol {

	captureOutputDidCapturePhotoForResolvedSettings?(_: AVCapturePhotoOutput, didCapturePhotoForResolvedSettings: AVCaptureResolvedPhotoSettings): void;

	captureOutputDidFinishCaptureForResolvedSettingsError?(_: AVCapturePhotoOutput, didFinishCaptureForResolvedSettings: AVCaptureResolvedPhotoSettings, error?: NSError): void;

	captureOutputDidFinishProcessingPhotoError?(_: AVCapturePhotoOutput, didFinishProcessingPhoto: AVCapturePhoto, error?: NSError): void;

	captureOutputWillBeginCaptureForResolvedSettings?(_: AVCapturePhotoOutput, willBeginCaptureForResolvedSettings: AVCaptureResolvedPhotoSettings): void;

	captureOutputWillCapturePhotoForResolvedSettings?(_: AVCapturePhotoOutput, willCapturePhotoForResolvedSettings: AVCaptureResolvedPhotoSettings): void;
}
declare var AVCapturePhotoCaptureDelegate: {

	prototype: AVCapturePhotoCaptureDelegate;
};

declare class AVCapturePhotoOutput extends AVCaptureOutput {

	readonly availablePhotoCodecTypes: NSArray<string>;

	readonly availablePhotoFileTypes: NSArray<string>;

	readonly availablePhotoPixelFormatTypes: NSArray<number>;

	capturePhotoWithSettingsDelegate(_: AVCapturePhotoSettings, delegate: AVCapturePhotoCaptureDelegate): void;

	supportedPhotoCodecTypesForFileType(for_: string): NSArray<string>;

	supportedPhotoPixelFormatTypesForFileType(for_: string): NSArray<number>;
}

declare class AVCapturePhotoSettings extends NSObject implements NSCopying {

	static photoSettings(): AVCapturePhotoSettings;

	static photoSettingsFromPhotoSettings(_: AVCapturePhotoSettings): AVCapturePhotoSettings;

	static photoSettingsWithFormat(_?: NSDictionary<string, any>): AVCapturePhotoSettings;

	readonly format: NSDictionary<string, any>;

	readonly processedFileType: string;

	readonly uniqueID: number;

	copyWithZone(_?: any): any;
}

declare class AVCaptureResolvedPhotoSettings extends NSObject {

	readonly expectedPhotoCount: number;

	readonly photoDimensions: CMVideoDimensions;

	readonly uniqueID: number;
}

declare class AVCaptureScreenInput extends AVCaptureInput {

	setCapturesCursor(_: boolean)

	capturesCursor: boolean;

	setCapturesMouseClicks(_: boolean)

	capturesMouseClicks: boolean;

	setCropRect(_: CGRect)

	cropRect: CGRect;

	setMinFrameDuration(_: CMTime)

	minFrameDuration: CMTime;

	setScaleFactor(_: number)

	scaleFactor: number;

	static create(displayID: number);
}

declare class AVCaptureSession extends NSObject {

	readonly connections: NSArray<AVCaptureConnection>;

	readonly inputs: NSArray<AVCaptureInput>;

	readonly masterClock: any;

	readonly outputs: NSArray<AVCaptureOutput>;

	readonly isRunning: boolean;

	setSessionPreset(_: string)

	sessionPreset: string;

	addConnection(_: AVCaptureConnection): void;

	addInput(_: AVCaptureInput): void;

	addInputWithNoConnections(_: AVCaptureInput): void;

	addOutput(_: AVCaptureOutput): void;

	addOutputWithNoConnections(_: AVCaptureOutput): void;

	beginConfiguration(): void;

	canAddConnection(_: AVCaptureConnection): boolean;

	canAddInput(_: AVCaptureInput): boolean;

	canAddOutput(_: AVCaptureOutput): boolean;

	canSetSessionPreset(_: string): boolean;

	commitConfiguration(): void;

	removeConnection(_: AVCaptureConnection): void;

	removeInput(_: AVCaptureInput): void;

	removeOutput(_: AVCaptureOutput): void;

	startRunning(): void;

	stopRunning(): void;
}

declare var AVCaptureSessionDidStartRunningNotification: string;

declare var AVCaptureSessionDidStopRunningNotification: string;

declare var AVCaptureSessionErrorKey: string;

declare var AVCaptureSessionInterruptionEndedNotification: string;

declare var AVCaptureSessionPreset1280x720: string;

declare var AVCaptureSessionPreset1920x1080: string;

declare var AVCaptureSessionPreset320x240: string;

declare var AVCaptureSessionPreset352x288: string;

declare var AVCaptureSessionPreset3840x2160: string;

declare var AVCaptureSessionPreset640x480: string;

declare var AVCaptureSessionPreset960x540: string;

declare var AVCaptureSessionPresetHigh: string;

declare var AVCaptureSessionPresetLow: string;

declare var AVCaptureSessionPresetMedium: string;

declare var AVCaptureSessionPresetPhoto: string;

declare var AVCaptureSessionPresetiFrame1280x720: string;

declare var AVCaptureSessionPresetiFrame960x540: string;

declare var AVCaptureSessionRuntimeErrorNotification: string;

declare var AVCaptureSessionWasInterruptedNotification: string;

enum AVCaptureTorchMode {

	Off = 0,

	On = 1,

	Auto = 2
}


declare class AVCaptureVideoDataOutput extends AVCaptureOutput {

	setAlwaysDiscardsLateVideoFrames(_: boolean)

	alwaysDiscardsLateVideoFrames: boolean;

	readonly availableVideoCVPixelFormatTypes: NSArray<number>;

	readonly availableVideoCodecTypes: NSArray<string>;

	readonly sampleBufferCallbackQueue: NSObject;

	readonly sampleBufferDelegate: AVCaptureVideoDataOutputSampleBufferDelegate;

	setVideoSettings(_: NSDictionary<string, any>)

	videoSettings: NSDictionary<string, any>;

	availableVideoCodecTypesForAssetWriterWithOutputFileType(writingTo: string): NSArray<string>;

	recommendedVideoSettingsForAssetWriterWithOutputFileType(writingTo: string): NSDictionary<string, any>;

	recommendedVideoSettingsForVideoCodecTypeAssetWriterOutputFileType(_: string, assetWriterOutputFileType: string): NSDictionary<any, any>;

	setSampleBufferDelegateQueue(_?: AVCaptureVideoDataOutputSampleBufferDelegate, queue?: NSObject): void;
}

interface AVCaptureVideoDataOutputSampleBufferDelegate extends NSObjectProtocol {

	captureOutputDidDropSampleBufferFromConnection?(_: AVCaptureOutput, didDropSampleBuffer: any, fromConnection: AVCaptureConnection): void;

	captureOutputDidOutputSampleBufferFromConnection?(_: AVCaptureOutput, didOutputSampleBuffer: any, fromConnection: AVCaptureConnection): void;
}
declare var AVCaptureVideoDataOutputSampleBufferDelegate: {

	prototype: AVCaptureVideoDataOutputSampleBufferDelegate;
};

enum AVCaptureVideoOrientation {

	Portrait = 1,

	PortraitUpsideDown = 2,

	LandscapeRight = 3,

	LandscapeLeft = 4
}


declare class AVCaptureVideoPreviewLayer extends CALayer {

	static layer(): AVCaptureVideoPreviewLayer; // inherited from CALayer

	static layerWithSession(_: AVCaptureSession): AVCaptureVideoPreviewLayer;

	static layerWithSessionWithNoConnection(_: AVCaptureSession): AVCaptureVideoPreviewLayer;

	readonly connection: AVCaptureConnection;

	setSession(_: AVCaptureSession)

	session: AVCaptureSession;

	setVideoGravity(_: string)

	videoGravity: string;

	static create(session: AVCaptureSession);

	static create(sessionWithNoConnection: AVCaptureSession);

	captureDevicePointOfInterestForPoint(fromLayerPoint: CGPoint): CGPoint;

	metadataOutputRectOfInterestForRect(fromLayerRect: CGRect): CGRect;

	pointForCaptureDevicePointOfInterest(fromCaptureDevicePoint: CGPoint): CGPoint;

	rectForMetadataOutputRectOfInterest(fromMetadataOutputRect: CGRect): CGRect;

	setSessionWithNoConnection(_: AVCaptureSession): void;

	transformedMetadataObjectForMetadataObject(_: AVMetadataObject): AVMetadataObject;
}

interface AVCaptureWhiteBalanceChromaticityValues {
	x: number;
	y: number;
}
declare var AVCaptureWhiteBalanceChromaticityValues: AVCaptureWhiteBalanceChromaticityValues;

interface AVCaptureWhiteBalanceGains {
	redGain: number;
	greenGain: number;
	blueGain: number;
}
declare var AVCaptureWhiteBalanceGains: AVCaptureWhiteBalanceGains;

enum AVCaptureWhiteBalanceMode {

	Locked = 0,

	AutoWhiteBalance = 1,

	ContinuousAutoWhiteBalance = 2
}


interface AVCaptureWhiteBalanceTemperatureAndTintValues {
	temperature: number;
	tint: number;
}
declare var AVCaptureWhiteBalanceTemperatureAndTintValues: AVCaptureWhiteBalanceTemperatureAndTintValues;

declare var AVChannelLayoutKey: string;

declare class AVComposition extends AVAsset implements NSMutableCopying {

	static assetWithURL(_: NSURL): AVComposition; // inherited from AVAsset

	readonly URLAssetInitializationOptions: NSDictionary<string, any>;

	readonly naturalSize: CGSize;

	mutableCopyWithZone(_?: any): any;

	trackWithTrackID(_: number): AVCompositionTrack;
}

declare class AVCompositionTrack extends AVAssetTrack {

	readonly formatDescriptionReplacements: NSArray<AVCompositionTrackFormatDescriptionReplacement>;

	segmentForTrackTime(_: CMTime): AVCompositionTrackSegment;
}

declare class AVCompositionTrackFormatDescriptionReplacement extends NSObject implements NSSecureCoding {

	readonly originalFormatDescription: any;

	readonly replacementFormatDescription: any;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class AVCompositionTrackSegment extends AVAssetTrackSegment {

	static compositionTrackSegmentWithTimeRange(_: CMTimeRange): AVCompositionTrackSegment;

	static compositionTrackSegmentWithURLTrackIDSourceTimeRangeTargetTimeRange(url: NSURL, trackID: number, sourceTimeRange: CMTimeRange, targetTimeRange: CMTimeRange): AVCompositionTrackSegment;

	readonly sourceTrackID: number;

	readonly sourceURL: NSURL;

	static create(timeRange: CMTimeRange);

	static create(URL: NSURL, trackID: number, sourceTimeRange: CMTimeRange, targetTimeRange: CMTimeRange);
}

enum AVContentAuthorizationStatus {

	Unknown = 0,

	Completed = 1,

	Cancelled = 2,

	TimedOut = 3,

	Busy = 4,

	NotAvailable = 5,

	NotPossible = 6
}


interface AVContentKeyRecipient {

	mayRequireContentKeysForMediaDataProcessing: boolean;
}
declare var AVContentKeyRecipient: {

	prototype: AVContentKeyRecipient;
};

declare class AVContentKeyRequest extends NSObject {

	readonly canProvidePersistableContentKey: boolean;

	readonly error: NSError;

	readonly identifier: any;

	readonly initializationData: NSData;

	readonly options: NSDictionary<string, any>;

	readonly renewsExpiringResponseData: boolean;

	readonly status: AVContentKeyRequestStatus;

	makeStreamingContentKeyRequestDataForAppContentIdentifierOptionsCompletionHandler(_: NSData, contentIdentifier?: NSData, options?: NSDictionary<string, any>, completionHandler?: (p1: NSData, p2: NSError) => void): void;

	processContentKeyResponse(_: AVContentKeyResponse): void;

	processContentKeyResponseError(_: NSError): void;

	respondByRequestingPersistableContentKeyRequestAndReturnError(): boolean;
}

declare var AVContentKeyRequestProtocolVersionsKey: string;

declare var AVContentKeyRequestRequiresValidationDataInSecureTokenKey: string;

declare var AVContentKeyRequestRetryReasonReceivedObsoleteContentKey: string;

declare var AVContentKeyRequestRetryReasonReceivedResponseWithExpiredLease: string;

declare var AVContentKeyRequestRetryReasonTimedOut: string;

enum AVContentKeyRequestStatus {

	RequestingResponse = 0,

	ReceivedResponse = 1,

	Renewed = 2,

	Retried = 3,

	Cancelled = 4,

	Failed = 5
}


declare class AVContentKeyResponse extends NSObject {

	static contentKeyResponseWithAuthorizationTokenData(_: NSData): AVContentKeyResponse;

	static contentKeyResponseWithClearKeyDataInitializationVector(_: NSData, initializationVector?: NSData): AVContentKeyResponse;

	static contentKeyResponseWithFairPlayStreamingKeyResponseData(_: NSData): AVContentKeyResponse;
}

declare class AVContentKeySession extends NSObject {

	static contentKeySessionWithKeySystem(_: string): AVContentKeySession;

	static contentKeySessionWithKeySystemStorageDirectoryAtURL(_: string, storageDirectoryAtURL: NSURL): AVContentKeySession;

	static pendingExpiredSessionReportsWithAppIdentifierStorageDirectoryAtURL(_: NSData, storageDirectoryAtURL: NSURL): NSArray<NSData>;

	static removePendingExpiredSessionReportsWithAppIdentifierStorageDirectoryAtURL(_: NSArray<NSData>, withAppIdentifier: NSData, storageDirectoryAtURL: NSURL): void;

	readonly contentKeyRecipients: NSArray<AVContentKeyRecipient>;

	readonly contentProtectionSessionIdentifier: NSData;

	readonly delegate: AVContentKeySessionDelegate;

	readonly delegateQueue: NSObject;

	readonly keySystem: string;

	readonly storageURL: NSURL;

	addContentKeyRecipient(_: AVContentKeyRecipient): void;

	expire(): void;

	invalidateAllPersistableContentKeysForAppOptionsCompletionHandler(_: NSData, options?: NSDictionary<string, any>, completionHandler?: (p1: NSData, p2: NSError) => void): void;

	invalidatePersistableContentKeyOptionsCompletionHandler(_: NSData, options?: NSDictionary<string, any>, completionHandler?: (p1: NSData, p2: NSError) => void): void;

	makeSecureTokenForExpirationDateOfPersistableContentKeyCompletionHandler(_: NSData, completionHandler?: (p1: NSData, p2: NSError) => void): void;

	processContentKeyRequestWithIdentifierInitializationDataOptions(_?: any, initializationData?: NSData, options?: NSDictionary<string, any>): void;

	removeContentKeyRecipient(_: AVContentKeyRecipient): void;

	renewExpiringResponseDataForContentKeyRequest(_: AVContentKeyRequest): void;

	setDelegateQueue(_?: AVContentKeySessionDelegate, queue?: NSObject): void;
}

interface AVContentKeySessionDelegate extends NSObjectProtocol {

	contentKeySessionContentKeyRequestDidFailWithError?(_: AVContentKeySession, contentKeyRequest: AVContentKeyRequest, didFailWithError: NSError): void;

	contentKeySessionContentKeyRequestDidSucceed?(_: AVContentKeySession, contentKeyRequestDidSucceed: AVContentKeyRequest): void;

	contentKeySessionDidProvideContentKeyRequest(_: AVContentKeySession, didProvideContentKeyRequest: AVContentKeyRequest): void;

	contentKeySessionDidProvidePersistableContentKeyRequest?(_: AVContentKeySession, didProvidePersistableContentKeyRequest: AVPersistableContentKeyRequest): void;

	contentKeySessionDidProvideRenewingContentKeyRequest?(_: AVContentKeySession, didProvideRenewingContentKeyRequest: AVContentKeyRequest): void;

	contentKeySessionDidUpdatePersistableContentKeyForContentKeyIdentifier?(_: AVContentKeySession, didUpdatePersistableContentKey: NSData, forContentKeyIdentifier: any): void;

	contentKeySessionShouldRetryContentKeyRequestReason?(_: AVContentKeySession, shouldRetryContentKeyRequest: AVContentKeyRequest, reason: string): boolean;

	contentKeySessionContentProtectionSessionIdentifierDidChange?(_: AVContentKeySession): void;

	contentKeySessionDidGenerateExpiredSessionReport?(_: AVContentKeySession): void;
}
declare var AVContentKeySessionDelegate: {

	prototype: AVContentKeySessionDelegate;
};

declare var AVContentKeySessionServerPlaybackContextOptionProtocolVersions: string;

declare var AVContentKeySessionServerPlaybackContextOptionServerChallenge: string;

declare var AVContentKeySystemAuthorizationToken: string;

declare var AVContentKeySystemClearKey: string;

declare var AVContentKeySystemFairPlayStreaming: string;

declare var AVCoreAnimationBeginTimeAtZero: number;

declare class AVDateRangeMetadataGroup extends AVMetadataGroup implements NSCopying, NSMutableCopying {

	readonly endDate: Date;

	readonly startDate: Date;

	static create(items: NSArray<AVMetadataItem> | AVMetadataItem[], startDate: Date, endDate: Date);

	copyWithZone(_?: any): any;

	mutableCopyWithZone(_?: any): any;
}

declare class AVDepthData extends NSObject {

	static depthDataFromDictionaryRepresentationError(error: NSDictionary<any, any>): AVDepthData;

	readonly availableDepthDataTypes: NSArray<number>;

	readonly cameraCalibrationData: AVCameraCalibrationData;

	readonly depthDataAccuracy: AVDepthDataAccuracy;

	readonly isDepthDataFiltered: boolean;

	readonly depthDataMap: any;

	readonly depthDataQuality: AVDepthDataQuality;

	readonly depthDataType: number;

	depthDataByApplyingExifOrientation(_: CGImagePropertyOrientation): this;

	depthDataByConvertingToDepthDataType(_: number): this;

	depthDataByReplacingDepthDataMapWithPixelBufferError(error: any): this;

	dictionaryRepresentationForAuxiliaryDataType(_?: string): NSDictionary<any, any>;
}

enum AVDepthDataAccuracy {

	Relative = 0,

	Absolute = 1
}


enum AVDepthDataQuality {

	Low = 0,

	High = 1
}


interface AVEdgeWidths {
	left: number;
	top: number;
	right: number;
	bottom: number;
}
declare var AVEdgeWidths: AVEdgeWidths;

declare var AVEncoderAudioQualityForVBRKey: string;

declare var AVEncoderAudioQualityKey: string;

declare var AVEncoderBitDepthHintKey: string;

declare var AVEncoderBitRateKey: string;

declare var AVEncoderBitRatePerChannelKey: string;

declare var AVEncoderBitRateStrategyKey: string;

enum AVError {

	Unknown = -11800,

	OutOfMemory = -11801,

	SessionNotRunning = -11803,

	DeviceAlreadyUsedByAnotherSession = -11804,

	NoDataCaptured = -11805,

	SessionConfigurationChanged = -11806,

	DiskFull = -11807,

	DeviceWasDisconnected = -11808,

	MediaChanged = -11809,

	MaximumDurationReached = -11810,

	MaximumFileSizeReached = -11811,

	MediaDiscontinuity = -11812,

	MaximumNumberOfSamplesForFileFormatReached = -11813,

	DeviceNotConnected = -11814,

	DeviceInUseByAnotherApplication = -11815,

	DeviceLockedForConfigurationByAnotherProcess = -11817,

	ExportFailed = -11820,

	DecodeFailed = -11821,

	InvalidSourceMedia = -11822,

	FileAlreadyExists = -11823,

	CompositionTrackSegmentsNotContiguous = -11824,

	InvalidCompositionTrackSegmentDuration = -11825,

	InvalidCompositionTrackSegmentSourceStartTime = -11826,

	InvalidCompositionTrackSegmentSourceDuration = -11827,

	FileFormatNotRecognized = -11828,

	FileFailedToParse = -11829,

	MaximumStillImageCaptureRequestsExceeded = -11830,

	ContentIsProtected = -11831,

	NoImageAtTime = -11832,

	DecoderNotFound = -11833,

	EncoderNotFound = -11834,

	ContentIsNotAuthorized = -11835,

	ApplicationIsNotAuthorized = -11836,

	OperationNotSupportedForAsset = -11838,

	DecoderTemporarilyUnavailable = -11839,

	EncoderTemporarilyUnavailable = -11840,

	InvalidVideoComposition = -11841,

	ReferenceForbiddenByReferencePolicy = -11842,

	InvalidOutputURLPathExtension = -11843,

	ScreenCaptureFailed = -11844,

	DisplayWasDisabled = -11845,

	TorchLevelUnavailable = -11846,

	IncompatibleAsset = -11848,

	FailedToLoadMediaData = -11849,

	ServerIncorrectlyConfigured = -11850,

	ApplicationIsNotAuthorizedToUseDevice = -11852,

	FailedToParse = -11853,

	FileTypeDoesNotSupportSampleReferences = -11854,

	UndecodableMediaData = -11855,

	AirPlayControllerRequiresInternet = -11856,

	AirPlayReceiverRequiresInternet = -11857,

	VideoCompositorFailed = -11858,

	CreateContentKeyRequestFailed = -11860,

	UnsupportedOutputSettings = -11861,

	OperationNotAllowed = -11862,

	ContentIsUnavailable = -11863,

	FormatUnsupported = -11864,

	MalformedDepth = -11865,

	ContentNotUpdated = -11866,

	NoLongerPlayable = -11867,

	NoCompatibleAlternatesForExternalDisplay = -11868,

	NoSourceTrack = -11869,

	ExternalPlaybackNotSupportedForAsset = -11870,

	OperationNotSupportedForPreset = -11871,

	SessionHardwareCostOverage = -11872,

	UnsupportedDeviceActiveFormat = -11873
}


declare var AVErrorDeviceKey: string;

declare var AVErrorDiscontinuityFlagsKey: string;

declare var AVErrorFileSizeKey: string;

declare var AVErrorFileTypeKey: string;

declare var AVErrorMediaSubTypeKey: string;

declare var AVErrorMediaTypeKey: string;

declare var AVErrorPIDKey: string;

declare var AVErrorPersistentTrackIDKey: string;

declare var AVErrorPresentationTimeStampKey: string;

declare var AVErrorRecordingSuccessfullyFinishedKey: string;

declare var AVErrorTimeKey: string;

declare var AVFileType3GPP: string;

declare var AVFileType3GPP2: string;

declare var AVFileTypeAC3: string;

declare var AVFileTypeAIFC: string;

declare var AVFileTypeAIFF: string;

declare var AVFileTypeAMR: string;

declare var AVFileTypeAVCI: string;

declare var AVFileTypeAppleM4A: string;

declare var AVFileTypeAppleM4V: string;

declare var AVFileTypeCoreAudioFormat: string;

declare var AVFileTypeDNG: string;

declare var AVFileTypeEnhancedAC3: string;

declare var AVFileTypeHEIC: string;

declare var AVFileTypeHEIF: string;

declare var AVFileTypeJPEG: string;

declare var AVFileTypeMPEG4: string;

declare var AVFileTypeMPEGLayer3: string;

declare var AVFileTypeQuickTimeMovie: string;

declare var AVFileTypeSunAU: string;

declare var AVFileTypeTIFF: string;

declare var AVFileTypeWAVE: string;

declare var AVFormatIDKey: string;

declare var AVFoundationErrorDomain: string;

interface AVFragmentMinding {

	isAssociatedWithFragmentMinder: boolean;
}
declare var AVFragmentMinding: {

	prototype: AVFragmentMinding;
};

declare class AVFragmentedAsset extends AVURLAsset implements AVFragmentMinding {

	static URLAssetWithURLOptions(_: NSURL, options?: NSDictionary<string, any>): AVFragmentedAsset; // inherited from AVURLAsset

	static assetWithURL(_: NSURL): AVFragmentedAsset; // inherited from AVAsset

	static fragmentedAssetWithURLOptions(_: NSURL, options?: NSDictionary<string, any>): AVFragmentedAsset;

	readonly isAssociatedWithFragmentMinder: boolean; // inherited from AVFragmentMinding

	trackWithTrackID(_: number): AVFragmentedAssetTrack;
}

declare class AVFragmentedAssetMinder extends NSObject {

	static fragmentedAssetMinderWithAssetMindingInterval(_: AVAsset, mindingInterval: number): AVFragmentedAssetMinder;

	readonly assets: NSArray<AVAsset>;

	setMindingInterval(_: number)

	mindingInterval: number;

	static create(asset: AVAsset, mindingInterval: number);

	addFragmentedAsset(_: AVAsset): void;

	removeFragmentedAsset(_: AVAsset): void;
}

declare class AVFragmentedAssetTrack extends AVAssetTrack {
}

declare class AVFragmentedMovie extends AVMovie implements AVFragmentMinding {

	static assetWithURL(_: NSURL): AVFragmentedMovie; // inherited from AVAsset

	static movieWithDataOptions(_: NSData, options?: NSDictionary<string, any>): AVFragmentedMovie; // inherited from AVMovie

	static movieWithURLOptions(url: NSURL, options?: NSDictionary<string, any>): AVFragmentedMovie; // inherited from AVMovie

	readonly isAssociatedWithFragmentMinder: boolean; // inherited from AVFragmentMinding

	trackWithTrackID(_: number): AVFragmentedMovieTrack;
}

declare var AVFragmentedMovieContainsMovieFragmentsDidChangeNotification: string;

declare var AVFragmentedMovieDurationDidChangeNotification: string;

declare class AVFragmentedMovieMinder extends AVFragmentedAssetMinder {

	static fragmentedAssetMinderWithAssetMindingInterval(_: AVAsset, mindingInterval: number): AVFragmentedMovieMinder; // inherited from AVFragmentedAssetMinder

	static fragmentedMovieMinderWithMovieMindingInterval(_: AVFragmentedMovie, mindingInterval: number): AVFragmentedMovieMinder;

	readonly movies: NSArray<AVFragmentedMovie>;

	static create(movie: AVFragmentedMovie, mindingInterval: number);

	addFragmentedMovie(_: AVFragmentedMovie): void;

	removeFragmentedMovie(_: AVFragmentedMovie): void;
}

declare class AVFragmentedMovieTrack extends AVMovieTrack {
}

declare var AVFragmentedMovieTrackSegmentsDidChangeNotification: string;

declare var AVFragmentedMovieTrackTimeRangeDidChangeNotification: string;

declare var AVFragmentedMovieWasDefragmentedNotification: string;

declare class AVFrameRateRange extends NSObject {

	readonly maxFrameDuration: CMTime;

	readonly maxFrameRate: number;

	readonly minFrameDuration: CMTime;

	readonly minFrameRate: number;
}

enum AVKeyValueStatus {

	Unknown = 0,

	Loading = 1,

	Loaded = 2,

	Failed = 3,

	Cancelled = 4
}


declare var AVLayerVideoGravityResize: string;

declare var AVLayerVideoGravityResizeAspect: string;

declare var AVLayerVideoGravityResizeAspectFill: string;

declare var AVLinearPCMBitDepthKey: string;

declare var AVLinearPCMIsBigEndianKey: string;

declare var AVLinearPCMIsFloatKey: string;

declare var AVLinearPCMIsNonInterleaved: string;

declare class AVMIDIPlayer extends NSObject {

	setCurrentPosition(_: number)

	currentPosition: number;

	readonly duration: number;

	readonly isPlaying: boolean;

	setRate(_: number)

	rate: number;

	static create(contentsOfURL: NSURL, soundBankURL: NSURL);

	static create(data: NSData, soundBankURL: NSURL);

	play(_?: () => void): void;

	prepareToPlay(): void;

	stop(): void;
}

declare function AVMakeRectWithAspectRatioInsideRect(aspectRatio: CGSize, boundingRect: CGRect): CGRect;

declare var AVMediaCharacteristicAudible: string;

declare var AVMediaCharacteristicContainsAlphaChannel: string;

declare var AVMediaCharacteristicContainsOnlyForcedSubtitles: string;

declare var AVMediaCharacteristicDescribesMusicAndSoundForAccessibility: string;

declare var AVMediaCharacteristicDescribesVideoForAccessibility: string;

declare var AVMediaCharacteristicDubbedTranslation: string;

declare var AVMediaCharacteristicEasyToRead: string;

declare var AVMediaCharacteristicFrameBased: string;

declare var AVMediaCharacteristicIsAuxiliaryContent: string;

declare var AVMediaCharacteristicIsMainProgramContent: string;

declare var AVMediaCharacteristicIsOriginalContent: string;

declare var AVMediaCharacteristicLanguageTranslation: string;

declare var AVMediaCharacteristicLegible: string;

declare var AVMediaCharacteristicTranscribesSpokenDialogForAccessibility: string;

declare var AVMediaCharacteristicUsesWideGamutColorSpace: string;

declare var AVMediaCharacteristicVisual: string;

declare var AVMediaCharacteristicVoiceOverTranslation: string;

declare class AVMediaDataStorage extends NSObject {

	static create(URL: NSURL, options: NSDictionary<string, any>);

	URL(): NSURL;
}

declare class AVMediaSelection extends NSObject implements NSCopying, NSMutableCopying {

	readonly asset: AVAsset;

	copyWithZone(_?: any): any;

	mediaSelectionCriteriaCanBeAppliedAutomaticallyToMediaSelectionGroup(_: AVMediaSelectionGroup): boolean;

	mutableCopyWithZone(_?: any): any;

	selectedMediaOptionInMediaSelectionGroup(_: AVMediaSelectionGroup): AVMediaSelectionOption;
}

declare class AVMediaSelectionGroup extends NSObject implements NSCopying {

	static mediaSelectionOptionsFromArrayFilteredAndSortedAccordingToPreferredLanguages(_: NSArray<AVMediaSelectionOption>, filteredAndSortedAccordingToPreferredLanguages: NSArray<string>): NSArray<AVMediaSelectionOption>;

	static mediaSelectionOptionsFromArrayWithLocale(_: NSArray<AVMediaSelectionOption>, withLocale: NSLocale): NSArray<AVMediaSelectionOption>;

	static mediaSelectionOptionsFromArrayWithMediaCharacteristics(_: NSArray<AVMediaSelectionOption>, withMediaCharacteristics: NSArray<string>): NSArray<AVMediaSelectionOption>;

	static mediaSelectionOptionsFromArrayWithoutMediaCharacteristics(_: NSArray<AVMediaSelectionOption>, withoutMediaCharacteristics: NSArray<string>): NSArray<AVMediaSelectionOption>;

	static playableMediaSelectionOptionsFromArray(_: NSArray<AVMediaSelectionOption>): NSArray<AVMediaSelectionOption>;

	readonly allowsEmptySelection: boolean;

	readonly defaultOption: AVMediaSelectionOption;

	readonly options: NSArray<AVMediaSelectionOption>;

	copyWithZone(_?: any): any;

	makeNowPlayingInfoLanguageOptionGroup(): MPNowPlayingInfoLanguageOptionGroup;

	mediaSelectionOptionWithPropertyList(_: any): AVMediaSelectionOption;
}

declare class AVMediaSelectionOption extends NSObject implements NSCopying {

	readonly availableMetadataFormats: NSArray<string>;

	readonly commonMetadata: NSArray<AVMetadataItem>;

	readonly displayName: string;

	readonly extendedLanguageTag: string;

	readonly locale: NSLocale;

	readonly mediaSubTypes: NSArray<number>;

	readonly mediaType: string;

	readonly isPlayable: boolean;

	associatedMediaSelectionOptionInMediaSelectionGroup(_: AVMediaSelectionGroup): AVMediaSelectionOption;

	copyWithZone(_?: any): any;

	displayNameWithLocale(_: NSLocale): string;

	hasMediaCharacteristic(_: string): boolean;

	makeNowPlayingInfoLanguageOption(): MPNowPlayingInfoLanguageOption;

	metadataForFormat(_: string): NSArray<AVMetadataItem>;

	propertyList(): any;
}

declare var AVMediaTypeAudio: string;

declare var AVMediaTypeClosedCaption: string;

declare var AVMediaTypeDepthData: string;

declare var AVMediaTypeMetadata: string;

declare var AVMediaTypeMuxed: string;

declare var AVMediaTypeSubtitle: string;

declare var AVMediaTypeText: string;

declare var AVMediaTypeTimecode: string;

declare var AVMediaTypeVideo: string;

declare var AVMetadata3GPUserDataKeyAlbumAndTrack: string;

declare var AVMetadata3GPUserDataKeyAuthor: string;

declare var AVMetadata3GPUserDataKeyCollection: string;

declare var AVMetadata3GPUserDataKeyCopyright: string;

declare var AVMetadata3GPUserDataKeyDescription: string;

declare var AVMetadata3GPUserDataKeyGenre: string;

declare var AVMetadata3GPUserDataKeyKeywordList: string;

declare var AVMetadata3GPUserDataKeyLocation: string;

declare var AVMetadata3GPUserDataKeyMediaClassification: string;

declare var AVMetadata3GPUserDataKeyMediaRating: string;

declare var AVMetadata3GPUserDataKeyPerformer: string;

declare var AVMetadata3GPUserDataKeyRecordingYear: string;

declare var AVMetadata3GPUserDataKeyThumbnail: string;

declare var AVMetadata3GPUserDataKeyTitle: string;

declare var AVMetadata3GPUserDataKeyUserRating: string;

declare class AVMetadataBodyObject extends AVMetadataObject implements NSCopying {

	readonly bodyID: number;

	copyWithZone(_?: any): any;
}

declare class AVMetadataCatBodyObject extends AVMetadataBodyObject implements NSCopying {

	copyWithZone(_?: any): any;
}

declare var AVMetadataCommonIdentifierAlbumName: string;

declare var AVMetadataCommonIdentifierArtist: string;

declare var AVMetadataCommonIdentifierArtwork: string;

declare var AVMetadataCommonIdentifierAssetIdentifier: string;

declare var AVMetadataCommonIdentifierAuthor: string;

declare var AVMetadataCommonIdentifierContributor: string;

declare var AVMetadataCommonIdentifierCopyrights: string;

declare var AVMetadataCommonIdentifierCreationDate: string;

declare var AVMetadataCommonIdentifierCreator: string;

declare var AVMetadataCommonIdentifierDescription: string;

declare var AVMetadataCommonIdentifierFormat: string;

declare var AVMetadataCommonIdentifierLanguage: string;

declare var AVMetadataCommonIdentifierLastModifiedDate: string;

declare var AVMetadataCommonIdentifierLocation: string;

declare var AVMetadataCommonIdentifierMake: string;

declare var AVMetadataCommonIdentifierModel: string;

declare var AVMetadataCommonIdentifierPublisher: string;

declare var AVMetadataCommonIdentifierRelation: string;

declare var AVMetadataCommonIdentifierSoftware: string;

declare var AVMetadataCommonIdentifierSource: string;

declare var AVMetadataCommonIdentifierSubject: string;

declare var AVMetadataCommonIdentifierTitle: string;

declare var AVMetadataCommonIdentifierType: string;

declare var AVMetadataCommonKeyAlbumName: string;

declare var AVMetadataCommonKeyArtist: string;

declare var AVMetadataCommonKeyArtwork: string;

declare var AVMetadataCommonKeyAuthor: string;

declare var AVMetadataCommonKeyContributor: string;

declare var AVMetadataCommonKeyCopyrights: string;

declare var AVMetadataCommonKeyCreationDate: string;

declare var AVMetadataCommonKeyCreator: string;

declare var AVMetadataCommonKeyDescription: string;

declare var AVMetadataCommonKeyFormat: string;

declare var AVMetadataCommonKeyIdentifier: string;

declare var AVMetadataCommonKeyLanguage: string;

declare var AVMetadataCommonKeyLastModifiedDate: string;

declare var AVMetadataCommonKeyLocation: string;

declare var AVMetadataCommonKeyMake: string;

declare var AVMetadataCommonKeyModel: string;

declare var AVMetadataCommonKeyPublisher: string;

declare var AVMetadataCommonKeyRelation: string;

declare var AVMetadataCommonKeySoftware: string;

declare var AVMetadataCommonKeySource: string;

declare var AVMetadataCommonKeySubject: string;

declare var AVMetadataCommonKeyTitle: string;

declare var AVMetadataCommonKeyType: string;

declare class AVMetadataDogBodyObject extends AVMetadataBodyObject implements NSCopying {

	copyWithZone(_?: any): any;
}

declare var AVMetadataExtraAttributeBaseURIKey: string;

declare var AVMetadataExtraAttributeInfoKey: string;

declare var AVMetadataExtraAttributeValueURIKey: string;

declare class AVMetadataFaceObject extends AVMetadataObject implements NSCopying {

	readonly faceID: number;

	readonly hasRollAngle: boolean;

	readonly hasYawAngle: boolean;

	readonly rollAngle: number;

	readonly yawAngle: number;

	copyWithZone(_?: any): any;
}

declare var AVMetadataFormatHLSMetadata: string;

declare var AVMetadataFormatID3Metadata: string;

declare var AVMetadataFormatISOUserData: string;

declare var AVMetadataFormatQuickTimeMetadata: string;

declare var AVMetadataFormatQuickTimeUserData: string;

declare var AVMetadataFormatUnknown: string;

declare var AVMetadataFormatiTunesMetadata: string;

declare class AVMetadataGroup extends NSObject {

	readonly classifyingLabel: string;

	readonly items: NSArray<AVMetadataItem>;

	readonly uniqueID: string;
}

declare class AVMetadataHumanBodyObject extends AVMetadataBodyObject implements NSCopying {

	copyWithZone(_?: any): any;
}

declare var AVMetadataID3MetadataKeyAlbumSortOrder: string;

declare var AVMetadataID3MetadataKeyAlbumTitle: string;

declare var AVMetadataID3MetadataKeyAttachedPicture: string;

declare var AVMetadataID3MetadataKeyAudioEncryption: string;

declare var AVMetadataID3MetadataKeyAudioSeekPointIndex: string;

declare var AVMetadataID3MetadataKeyBand: string;

declare var AVMetadataID3MetadataKeyBeatsPerMinute: string;

declare var AVMetadataID3MetadataKeyComments: string;

declare var AVMetadataID3MetadataKeyCommercial: string;

declare var AVMetadataID3MetadataKeyCommercialInformation: string;

declare var AVMetadataID3MetadataKeyComposer: string;

declare var AVMetadataID3MetadataKeyConductor: string;

declare var AVMetadataID3MetadataKeyContentGroupDescription: string;

declare var AVMetadataID3MetadataKeyContentType: string;

declare var AVMetadataID3MetadataKeyCopyright: string;

declare var AVMetadataID3MetadataKeyCopyrightInformation: string;

declare var AVMetadataID3MetadataKeyDate: string;

declare var AVMetadataID3MetadataKeyEncodedBy: string;

declare var AVMetadataID3MetadataKeyEncodedWith: string;

declare var AVMetadataID3MetadataKeyEncodingTime: string;

declare var AVMetadataID3MetadataKeyEncryption: string;

declare var AVMetadataID3MetadataKeyEqualization: string;

declare var AVMetadataID3MetadataKeyEqualization2: string;

declare var AVMetadataID3MetadataKeyEventTimingCodes: string;

declare var AVMetadataID3MetadataKeyFileOwner: string;

declare var AVMetadataID3MetadataKeyFileType: string;

declare var AVMetadataID3MetadataKeyGeneralEncapsulatedObject: string;

declare var AVMetadataID3MetadataKeyGroupIdentifier: string;

declare var AVMetadataID3MetadataKeyInitialKey: string;

declare var AVMetadataID3MetadataKeyInternationalStandardRecordingCode: string;

declare var AVMetadataID3MetadataKeyInternetRadioStationName: string;

declare var AVMetadataID3MetadataKeyInternetRadioStationOwner: string;

declare var AVMetadataID3MetadataKeyInvolvedPeopleList_v23: string;

declare var AVMetadataID3MetadataKeyInvolvedPeopleList_v24: string;

declare var AVMetadataID3MetadataKeyLanguage: string;

declare var AVMetadataID3MetadataKeyLeadPerformer: string;

declare var AVMetadataID3MetadataKeyLength: string;

declare var AVMetadataID3MetadataKeyLink: string;

declare var AVMetadataID3MetadataKeyLyricist: string;

declare var AVMetadataID3MetadataKeyMPEGLocationLookupTable: string;

declare var AVMetadataID3MetadataKeyMediaType: string;

declare var AVMetadataID3MetadataKeyModifiedBy: string;

declare var AVMetadataID3MetadataKeyMood: string;

declare var AVMetadataID3MetadataKeyMusicCDIdentifier: string;

declare var AVMetadataID3MetadataKeyMusicianCreditsList: string;

declare var AVMetadataID3MetadataKeyOfficialArtistWebpage: string;

declare var AVMetadataID3MetadataKeyOfficialAudioFileWebpage: string;

declare var AVMetadataID3MetadataKeyOfficialAudioSourceWebpage: string;

declare var AVMetadataID3MetadataKeyOfficialInternetRadioStationHomepage: string;

declare var AVMetadataID3MetadataKeyOfficialPublisherWebpage: string;

declare var AVMetadataID3MetadataKeyOriginalAlbumTitle: string;

declare var AVMetadataID3MetadataKeyOriginalArtist: string;

declare var AVMetadataID3MetadataKeyOriginalFilename: string;

declare var AVMetadataID3MetadataKeyOriginalLyricist: string;

declare var AVMetadataID3MetadataKeyOriginalReleaseTime: string;

declare var AVMetadataID3MetadataKeyOriginalReleaseYear: string;

declare var AVMetadataID3MetadataKeyOwnership: string;

declare var AVMetadataID3MetadataKeyPartOfASet: string;

declare var AVMetadataID3MetadataKeyPayment: string;

declare var AVMetadataID3MetadataKeyPerformerSortOrder: string;

declare var AVMetadataID3MetadataKeyPlayCounter: string;

declare var AVMetadataID3MetadataKeyPlaylistDelay: string;

declare var AVMetadataID3MetadataKeyPopularimeter: string;

declare var AVMetadataID3MetadataKeyPositionSynchronization: string;

declare var AVMetadataID3MetadataKeyPrivate: string;

declare var AVMetadataID3MetadataKeyProducedNotice: string;

declare var AVMetadataID3MetadataKeyPublisher: string;

declare var AVMetadataID3MetadataKeyRecommendedBufferSize: string;

declare var AVMetadataID3MetadataKeyRecordingDates: string;

declare var AVMetadataID3MetadataKeyRecordingTime: string;

declare var AVMetadataID3MetadataKeyRelativeVolumeAdjustment: string;

declare var AVMetadataID3MetadataKeyRelativeVolumeAdjustment2: string;

declare var AVMetadataID3MetadataKeyReleaseTime: string;

declare var AVMetadataID3MetadataKeyReverb: string;

declare var AVMetadataID3MetadataKeySeek: string;

declare var AVMetadataID3MetadataKeySetSubtitle: string;

declare var AVMetadataID3MetadataKeySignature: string;

declare var AVMetadataID3MetadataKeySize: string;

declare var AVMetadataID3MetadataKeySubTitle: string;

declare var AVMetadataID3MetadataKeySynchronizedLyric: string;

declare var AVMetadataID3MetadataKeySynchronizedTempoCodes: string;

declare var AVMetadataID3MetadataKeyTaggingTime: string;

declare var AVMetadataID3MetadataKeyTermsOfUse: string;

declare var AVMetadataID3MetadataKeyTime: string;

declare var AVMetadataID3MetadataKeyTitleDescription: string;

declare var AVMetadataID3MetadataKeyTitleSortOrder: string;

declare var AVMetadataID3MetadataKeyTrackNumber: string;

declare var AVMetadataID3MetadataKeyUniqueFileIdentifier: string;

declare var AVMetadataID3MetadataKeyUnsynchronizedLyric: string;

declare var AVMetadataID3MetadataKeyUserText: string;

declare var AVMetadataID3MetadataKeyUserURL: string;

declare var AVMetadataID3MetadataKeyYear: string;

declare var AVMetadataISOUserDataKeyCopyright: string;

declare var AVMetadataISOUserDataKeyDate: string;

declare var AVMetadataISOUserDataKeyTaggedCharacteristic: string;

declare var AVMetadataIcyMetadataKeyStreamTitle: string;

declare var AVMetadataIcyMetadataKeyStreamURL: string;

declare var AVMetadataIdentifier3GPUserDataAlbumAndTrack: string;

declare var AVMetadataIdentifier3GPUserDataAuthor: string;

declare var AVMetadataIdentifier3GPUserDataCollection: string;

declare var AVMetadataIdentifier3GPUserDataCopyright: string;

declare var AVMetadataIdentifier3GPUserDataDescription: string;

declare var AVMetadataIdentifier3GPUserDataGenre: string;

declare var AVMetadataIdentifier3GPUserDataKeywordList: string;

declare var AVMetadataIdentifier3GPUserDataLocation: string;

declare var AVMetadataIdentifier3GPUserDataMediaClassification: string;

declare var AVMetadataIdentifier3GPUserDataMediaRating: string;

declare var AVMetadataIdentifier3GPUserDataPerformer: string;

declare var AVMetadataIdentifier3GPUserDataRecordingYear: string;

declare var AVMetadataIdentifier3GPUserDataThumbnail: string;

declare var AVMetadataIdentifier3GPUserDataTitle: string;

declare var AVMetadataIdentifier3GPUserDataUserRating: string;

declare var AVMetadataIdentifierID3MetadataAlbumSortOrder: string;

declare var AVMetadataIdentifierID3MetadataAlbumTitle: string;

declare var AVMetadataIdentifierID3MetadataAttachedPicture: string;

declare var AVMetadataIdentifierID3MetadataAudioEncryption: string;

declare var AVMetadataIdentifierID3MetadataAudioSeekPointIndex: string;

declare var AVMetadataIdentifierID3MetadataBand: string;

declare var AVMetadataIdentifierID3MetadataBeatsPerMinute: string;

declare var AVMetadataIdentifierID3MetadataComments: string;

declare var AVMetadataIdentifierID3MetadataCommercial: string;

declare var AVMetadataIdentifierID3MetadataCommercialInformation: string;

declare var AVMetadataIdentifierID3MetadataComposer: string;

declare var AVMetadataIdentifierID3MetadataConductor: string;

declare var AVMetadataIdentifierID3MetadataContentGroupDescription: string;

declare var AVMetadataIdentifierID3MetadataContentType: string;

declare var AVMetadataIdentifierID3MetadataCopyright: string;

declare var AVMetadataIdentifierID3MetadataCopyrightInformation: string;

declare var AVMetadataIdentifierID3MetadataDate: string;

declare var AVMetadataIdentifierID3MetadataEncodedBy: string;

declare var AVMetadataIdentifierID3MetadataEncodedWith: string;

declare var AVMetadataIdentifierID3MetadataEncodingTime: string;

declare var AVMetadataIdentifierID3MetadataEncryption: string;

declare var AVMetadataIdentifierID3MetadataEqualization: string;

declare var AVMetadataIdentifierID3MetadataEqualization2: string;

declare var AVMetadataIdentifierID3MetadataEventTimingCodes: string;

declare var AVMetadataIdentifierID3MetadataFileOwner: string;

declare var AVMetadataIdentifierID3MetadataFileType: string;

declare var AVMetadataIdentifierID3MetadataGeneralEncapsulatedObject: string;

declare var AVMetadataIdentifierID3MetadataGroupIdentifier: string;

declare var AVMetadataIdentifierID3MetadataInitialKey: string;

declare var AVMetadataIdentifierID3MetadataInternationalStandardRecordingCode: string;

declare var AVMetadataIdentifierID3MetadataInternetRadioStationName: string;

declare var AVMetadataIdentifierID3MetadataInternetRadioStationOwner: string;

declare var AVMetadataIdentifierID3MetadataInvolvedPeopleList_v23: string;

declare var AVMetadataIdentifierID3MetadataInvolvedPeopleList_v24: string;

declare var AVMetadataIdentifierID3MetadataLanguage: string;

declare var AVMetadataIdentifierID3MetadataLeadPerformer: string;

declare var AVMetadataIdentifierID3MetadataLength: string;

declare var AVMetadataIdentifierID3MetadataLink: string;

declare var AVMetadataIdentifierID3MetadataLyricist: string;

declare var AVMetadataIdentifierID3MetadataMPEGLocationLookupTable: string;

declare var AVMetadataIdentifierID3MetadataMediaType: string;

declare var AVMetadataIdentifierID3MetadataModifiedBy: string;

declare var AVMetadataIdentifierID3MetadataMood: string;

declare var AVMetadataIdentifierID3MetadataMusicCDIdentifier: string;

declare var AVMetadataIdentifierID3MetadataMusicianCreditsList: string;

declare var AVMetadataIdentifierID3MetadataOfficialArtistWebpage: string;

declare var AVMetadataIdentifierID3MetadataOfficialAudioFileWebpage: string;

declare var AVMetadataIdentifierID3MetadataOfficialAudioSourceWebpage: string;

declare var AVMetadataIdentifierID3MetadataOfficialInternetRadioStationHomepage: string;

declare var AVMetadataIdentifierID3MetadataOfficialPublisherWebpage: string;

declare var AVMetadataIdentifierID3MetadataOriginalAlbumTitle: string;

declare var AVMetadataIdentifierID3MetadataOriginalArtist: string;

declare var AVMetadataIdentifierID3MetadataOriginalFilename: string;

declare var AVMetadataIdentifierID3MetadataOriginalLyricist: string;

declare var AVMetadataIdentifierID3MetadataOriginalReleaseTime: string;

declare var AVMetadataIdentifierID3MetadataOriginalReleaseYear: string;

declare var AVMetadataIdentifierID3MetadataOwnership: string;

declare var AVMetadataIdentifierID3MetadataPartOfASet: string;

declare var AVMetadataIdentifierID3MetadataPayment: string;

declare var AVMetadataIdentifierID3MetadataPerformerSortOrder: string;

declare var AVMetadataIdentifierID3MetadataPlayCounter: string;

declare var AVMetadataIdentifierID3MetadataPlaylistDelay: string;

declare var AVMetadataIdentifierID3MetadataPopularimeter: string;

declare var AVMetadataIdentifierID3MetadataPositionSynchronization: string;

declare var AVMetadataIdentifierID3MetadataPrivate: string;

declare var AVMetadataIdentifierID3MetadataProducedNotice: string;

declare var AVMetadataIdentifierID3MetadataPublisher: string;

declare var AVMetadataIdentifierID3MetadataRecommendedBufferSize: string;

declare var AVMetadataIdentifierID3MetadataRecordingDates: string;

declare var AVMetadataIdentifierID3MetadataRecordingTime: string;

declare var AVMetadataIdentifierID3MetadataRelativeVolumeAdjustment: string;

declare var AVMetadataIdentifierID3MetadataRelativeVolumeAdjustment2: string;

declare var AVMetadataIdentifierID3MetadataReleaseTime: string;

declare var AVMetadataIdentifierID3MetadataReverb: string;

declare var AVMetadataIdentifierID3MetadataSeek: string;

declare var AVMetadataIdentifierID3MetadataSetSubtitle: string;

declare var AVMetadataIdentifierID3MetadataSignature: string;

declare var AVMetadataIdentifierID3MetadataSize: string;

declare var AVMetadataIdentifierID3MetadataSubTitle: string;

declare var AVMetadataIdentifierID3MetadataSynchronizedLyric: string;

declare var AVMetadataIdentifierID3MetadataSynchronizedTempoCodes: string;

declare var AVMetadataIdentifierID3MetadataTaggingTime: string;

declare var AVMetadataIdentifierID3MetadataTermsOfUse: string;

declare var AVMetadataIdentifierID3MetadataTime: string;

declare var AVMetadataIdentifierID3MetadataTitleDescription: string;

declare var AVMetadataIdentifierID3MetadataTitleSortOrder: string;

declare var AVMetadataIdentifierID3MetadataTrackNumber: string;

declare var AVMetadataIdentifierID3MetadataUniqueFileIdentifier: string;

declare var AVMetadataIdentifierID3MetadataUnsynchronizedLyric: string;

declare var AVMetadataIdentifierID3MetadataUserText: string;

declare var AVMetadataIdentifierID3MetadataUserURL: string;

declare var AVMetadataIdentifierID3MetadataYear: string;

declare var AVMetadataIdentifierISOUserDataCopyright: string;

declare var AVMetadataIdentifierISOUserDataDate: string;

declare var AVMetadataIdentifierISOUserDataTaggedCharacteristic: string;

declare var AVMetadataIdentifierIcyMetadataStreamTitle: string;

declare var AVMetadataIdentifierIcyMetadataStreamURL: string;

declare var AVMetadataIdentifierQuickTimeMetadataAlbum: string;

declare var AVMetadataIdentifierQuickTimeMetadataArranger: string;

declare var AVMetadataIdentifierQuickTimeMetadataArtist: string;

declare var AVMetadataIdentifierQuickTimeMetadataArtwork: string;

declare var AVMetadataIdentifierQuickTimeMetadataAuthor: string;

declare var AVMetadataIdentifierQuickTimeMetadataAutoLivePhoto: string;

declare var AVMetadataIdentifierQuickTimeMetadataCameraFrameReadoutTime: string;

declare var AVMetadataIdentifierQuickTimeMetadataCameraIdentifier: string;

declare var AVMetadataIdentifierQuickTimeMetadataCollectionUser: string;

declare var AVMetadataIdentifierQuickTimeMetadataComment: string;

declare var AVMetadataIdentifierQuickTimeMetadataComposer: string;

declare var AVMetadataIdentifierQuickTimeMetadataContentIdentifier: string;

declare var AVMetadataIdentifierQuickTimeMetadataCopyright: string;

declare var AVMetadataIdentifierQuickTimeMetadataCreationDate: string;

declare var AVMetadataIdentifierQuickTimeMetadataCredits: string;

declare var AVMetadataIdentifierQuickTimeMetadataDescription: string;

declare var AVMetadataIdentifierQuickTimeMetadataDetectedCatBody: string;

declare var AVMetadataIdentifierQuickTimeMetadataDetectedDogBody: string;

declare var AVMetadataIdentifierQuickTimeMetadataDetectedFace: string;

declare var AVMetadataIdentifierQuickTimeMetadataDetectedHumanBody: string;

declare var AVMetadataIdentifierQuickTimeMetadataDetectedSalientObject: string;

declare var AVMetadataIdentifierQuickTimeMetadataDirectionFacing: string;

declare var AVMetadataIdentifierQuickTimeMetadataDirectionMotion: string;

declare var AVMetadataIdentifierQuickTimeMetadataDirector: string;

declare var AVMetadataIdentifierQuickTimeMetadataDisplayName: string;

declare var AVMetadataIdentifierQuickTimeMetadataEncodedBy: string;

declare var AVMetadataIdentifierQuickTimeMetadataGenre: string;

declare var AVMetadataIdentifierQuickTimeMetadataInformation: string;

declare var AVMetadataIdentifierQuickTimeMetadataKeywords: string;

declare var AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScore: string;

declare var AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScoringVersion: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationBody: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationDate: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationISO6709: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationName: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationNote: string;

declare var AVMetadataIdentifierQuickTimeMetadataLocationRole: string;

declare var AVMetadataIdentifierQuickTimeMetadataMake: string;

declare var AVMetadataIdentifierQuickTimeMetadataModel: string;

declare var AVMetadataIdentifierQuickTimeMetadataOriginalArtist: string;

declare var AVMetadataIdentifierQuickTimeMetadataPerformer: string;

declare var AVMetadataIdentifierQuickTimeMetadataPhonogramRights: string;

declare var AVMetadataIdentifierQuickTimeMetadataPreferredAffineTransform: string;

declare var AVMetadataIdentifierQuickTimeMetadataProducer: string;

declare var AVMetadataIdentifierQuickTimeMetadataPublisher: string;

declare var AVMetadataIdentifierQuickTimeMetadataRatingUser: string;

declare var AVMetadataIdentifierQuickTimeMetadataSoftware: string;

declare var AVMetadataIdentifierQuickTimeMetadataSpatialOverCaptureQualityScore: string;

declare var AVMetadataIdentifierQuickTimeMetadataSpatialOverCaptureQualityScoringVersion: string;

declare var AVMetadataIdentifierQuickTimeMetadataTitle: string;

declare var AVMetadataIdentifierQuickTimeMetadataVideoOrientation: string;

declare var AVMetadataIdentifierQuickTimeMetadataYear: string;

declare var AVMetadataIdentifierQuickTimeMetadataiXML: string;

declare var AVMetadataIdentifierQuickTimeUserDataAlbum: string;

declare var AVMetadataIdentifierQuickTimeUserDataArranger: string;

declare var AVMetadataIdentifierQuickTimeUserDataArtist: string;

declare var AVMetadataIdentifierQuickTimeUserDataAuthor: string;

declare var AVMetadataIdentifierQuickTimeUserDataChapter: string;

declare var AVMetadataIdentifierQuickTimeUserDataComment: string;

declare var AVMetadataIdentifierQuickTimeUserDataComposer: string;

declare var AVMetadataIdentifierQuickTimeUserDataCopyright: string;

declare var AVMetadataIdentifierQuickTimeUserDataCreationDate: string;

declare var AVMetadataIdentifierQuickTimeUserDataCredits: string;

declare var AVMetadataIdentifierQuickTimeUserDataDescription: string;

declare var AVMetadataIdentifierQuickTimeUserDataDirector: string;

declare var AVMetadataIdentifierQuickTimeUserDataDisclaimer: string;

declare var AVMetadataIdentifierQuickTimeUserDataEncodedBy: string;

declare var AVMetadataIdentifierQuickTimeUserDataFullName: string;

declare var AVMetadataIdentifierQuickTimeUserDataGenre: string;

declare var AVMetadataIdentifierQuickTimeUserDataHostComputer: string;

declare var AVMetadataIdentifierQuickTimeUserDataInformation: string;

declare var AVMetadataIdentifierQuickTimeUserDataKeywords: string;

declare var AVMetadataIdentifierQuickTimeUserDataLocationISO6709: string;

declare var AVMetadataIdentifierQuickTimeUserDataMake: string;

declare var AVMetadataIdentifierQuickTimeUserDataModel: string;

declare var AVMetadataIdentifierQuickTimeUserDataOriginalArtist: string;

declare var AVMetadataIdentifierQuickTimeUserDataOriginalFormat: string;

declare var AVMetadataIdentifierQuickTimeUserDataOriginalSource: string;

declare var AVMetadataIdentifierQuickTimeUserDataPerformers: string;

declare var AVMetadataIdentifierQuickTimeUserDataPhonogramRights: string;

declare var AVMetadataIdentifierQuickTimeUserDataProducer: string;

declare var AVMetadataIdentifierQuickTimeUserDataProduct: string;

declare var AVMetadataIdentifierQuickTimeUserDataPublisher: string;

declare var AVMetadataIdentifierQuickTimeUserDataSoftware: string;

declare var AVMetadataIdentifierQuickTimeUserDataSpecialPlaybackRequirements: string;

declare var AVMetadataIdentifierQuickTimeUserDataTaggedCharacteristic: string;

declare var AVMetadataIdentifierQuickTimeUserDataTrack: string;

declare var AVMetadataIdentifierQuickTimeUserDataTrackName: string;

declare var AVMetadataIdentifierQuickTimeUserDataURLLink: string;

declare var AVMetadataIdentifierQuickTimeUserDataWarning: string;

declare var AVMetadataIdentifierQuickTimeUserDataWriter: string;

declare var AVMetadataIdentifieriTunesMetadataAccountKind: string;

declare var AVMetadataIdentifieriTunesMetadataAcknowledgement: string;

declare var AVMetadataIdentifieriTunesMetadataAlbum: string;

declare var AVMetadataIdentifieriTunesMetadataAlbumArtist: string;

declare var AVMetadataIdentifieriTunesMetadataAppleID: string;

declare var AVMetadataIdentifieriTunesMetadataArranger: string;

declare var AVMetadataIdentifieriTunesMetadataArtDirector: string;

declare var AVMetadataIdentifieriTunesMetadataArtist: string;

declare var AVMetadataIdentifieriTunesMetadataArtistID: string;

declare var AVMetadataIdentifieriTunesMetadataAuthor: string;

declare var AVMetadataIdentifieriTunesMetadataBeatsPerMin: string;

declare var AVMetadataIdentifieriTunesMetadataComposer: string;

declare var AVMetadataIdentifieriTunesMetadataConductor: string;

declare var AVMetadataIdentifieriTunesMetadataContentRating: string;

declare var AVMetadataIdentifieriTunesMetadataCopyright: string;

declare var AVMetadataIdentifieriTunesMetadataCoverArt: string;

declare var AVMetadataIdentifieriTunesMetadataCredits: string;

declare var AVMetadataIdentifieriTunesMetadataDescription: string;

declare var AVMetadataIdentifieriTunesMetadataDirector: string;

declare var AVMetadataIdentifieriTunesMetadataDiscCompilation: string;

declare var AVMetadataIdentifieriTunesMetadataDiscNumber: string;

declare var AVMetadataIdentifieriTunesMetadataEQ: string;

declare var AVMetadataIdentifieriTunesMetadataEncodedBy: string;

declare var AVMetadataIdentifieriTunesMetadataEncodingTool: string;

declare var AVMetadataIdentifieriTunesMetadataExecProducer: string;

declare var AVMetadataIdentifieriTunesMetadataGenreID: string;

declare var AVMetadataIdentifieriTunesMetadataGrouping: string;

declare var AVMetadataIdentifieriTunesMetadataLinerNotes: string;

declare var AVMetadataIdentifieriTunesMetadataLyrics: string;

declare var AVMetadataIdentifieriTunesMetadataOnlineExtras: string;

declare var AVMetadataIdentifieriTunesMetadataOriginalArtist: string;

declare var AVMetadataIdentifieriTunesMetadataPerformer: string;

declare var AVMetadataIdentifieriTunesMetadataPhonogramRights: string;

declare var AVMetadataIdentifieriTunesMetadataPlaylistID: string;

declare var AVMetadataIdentifieriTunesMetadataPredefinedGenre: string;

declare var AVMetadataIdentifieriTunesMetadataProducer: string;

declare var AVMetadataIdentifieriTunesMetadataPublisher: string;

declare var AVMetadataIdentifieriTunesMetadataRecordCompany: string;

declare var AVMetadataIdentifieriTunesMetadataReleaseDate: string;

declare var AVMetadataIdentifieriTunesMetadataSoloist: string;

declare var AVMetadataIdentifieriTunesMetadataSongID: string;

declare var AVMetadataIdentifieriTunesMetadataSongName: string;

declare var AVMetadataIdentifieriTunesMetadataSoundEngineer: string;

declare var AVMetadataIdentifieriTunesMetadataThanks: string;

declare var AVMetadataIdentifieriTunesMetadataTrackNumber: string;

declare var AVMetadataIdentifieriTunesMetadataTrackSubTitle: string;

declare var AVMetadataIdentifieriTunesMetadataUserComment: string;

declare var AVMetadataIdentifieriTunesMetadataUserGenre: string;

declare class AVMetadataItem extends NSObject implements AVAsynchronousKeyValueLoading, NSCopying, NSMutableCopying {

	static identifierForKeyKeySpace(_: any, keySpace: string): string;

	static keyForIdentifier(_: string): any;

	static keySpaceForIdentifier(_: string): string;

	static metadataItemWithPropertiesOfMetadataItemValueLoadingHandler(_: AVMetadataItem, valueLoadingHandler: (p1: AVMetadataItemValueRequest) => void): AVMetadataItem;

	static metadataItemsFromArrayFilteredAndSortedAccordingToPreferredLanguages(_: NSArray<AVMetadataItem>, filteredAndSortedAccordingToPreferredLanguages: NSArray<string>): NSArray<AVMetadataItem>;

	static metadataItemsFromArrayFilteredByIdentifier(_: NSArray<AVMetadataItem>, filteredByIdentifier: string): NSArray<AVMetadataItem>;

	static metadataItemsFromArrayFilteredByMetadataItemFilter(_: NSArray<AVMetadataItem>, filteredByMetadataItemFilter: AVMetadataItemFilter): NSArray<AVMetadataItem>;

	static metadataItemsFromArrayWithKeyKeySpace(_: NSArray<AVMetadataItem>, withKey?: any, keySpace?: string): NSArray<AVMetadataItem>;

	static metadataItemsFromArrayWithLocale(_: NSArray<AVMetadataItem>, withLocale: NSLocale): NSArray<AVMetadataItem>;

	readonly commonKey: string;

	readonly dataType: string;

	readonly dataValue: NSData;

	readonly dateValue: Date;

	readonly duration: CMTime;

	readonly extendedLanguageTag: string;

	readonly extraAttributes: NSDictionary<string, any>;

	readonly identifier: string;

	readonly key: any;

	readonly keySpace: string;

	readonly locale: NSLocale;

	readonly numberValue: number;

	readonly startDate: Date;

	readonly stringValue: string;

	readonly time: CMTime;

	readonly value: any;

	copyWithZone(_?: any): any;

	loadValuesAsynchronouslyForKeysCompletionHandler(_: NSArray<string>, completionHandler?: () => void): void;

	mutableCopyWithZone(_?: any): any;

	statusOfValueForKeyError(error: string): AVKeyValueStatus;
}

declare class AVMetadataItemFilter extends NSObject {

	static metadataItemFilterForSharing(): AVMetadataItemFilter;
}

declare class AVMetadataItemValueRequest extends NSObject {

	readonly metadataItem: AVMetadataItem;

	respondWithError(error: NSError): void;

	respondWithValue(value: any): void;
}

declare var AVMetadataKeySpaceAudioFile: string;

declare var AVMetadataKeySpaceCommon: string;

declare var AVMetadataKeySpaceHLSDateRange: string;

declare var AVMetadataKeySpaceID3: string;

declare var AVMetadataKeySpaceISOUserData: string;

declare var AVMetadataKeySpaceIcy: string;

declare var AVMetadataKeySpaceQuickTimeMetadata: string;

declare var AVMetadataKeySpaceQuickTimeUserData: string;

declare var AVMetadataKeySpaceiTunes: string;

declare class AVMetadataMachineReadableCodeObject extends AVMetadataObject {

	readonly corners: NSArray<NSDictionary<any, any>>;

	readonly descriptor: CIBarcodeDescriptor;

	readonly stringValue: string;
}

declare class AVMetadataObject extends NSObject {

	readonly bounds: CGRect;

	readonly duration: CMTime;

	readonly time: CMTime;

	readonly type: string;
}

declare var AVMetadataObjectTypeAztecCode: string;

declare var AVMetadataObjectTypeCatBody: string;

declare var AVMetadataObjectTypeCode128Code: string;

declare var AVMetadataObjectTypeCode39Code: string;

declare var AVMetadataObjectTypeCode39Mod43Code: string;

declare var AVMetadataObjectTypeCode93Code: string;

declare var AVMetadataObjectTypeDataMatrixCode: string;

declare var AVMetadataObjectTypeDogBody: string;

declare var AVMetadataObjectTypeEAN13Code: string;

declare var AVMetadataObjectTypeEAN8Code: string;

declare var AVMetadataObjectTypeFace: string;

declare var AVMetadataObjectTypeHumanBody: string;

declare var AVMetadataObjectTypeITF14Code: string;

declare var AVMetadataObjectTypeInterleaved2of5Code: string;

declare var AVMetadataObjectTypePDF417Code: string;

declare var AVMetadataObjectTypeQRCode: string;

declare var AVMetadataObjectTypeSalientObject: string;

declare var AVMetadataObjectTypeUPCECode: string;

declare var AVMetadataQuickTimeMetadataKeyAlbum: string;

declare var AVMetadataQuickTimeMetadataKeyArranger: string;

declare var AVMetadataQuickTimeMetadataKeyArtist: string;

declare var AVMetadataQuickTimeMetadataKeyArtwork: string;

declare var AVMetadataQuickTimeMetadataKeyAuthor: string;

declare var AVMetadataQuickTimeMetadataKeyCameraFrameReadoutTime: string;

declare var AVMetadataQuickTimeMetadataKeyCameraIdentifier: string;

declare var AVMetadataQuickTimeMetadataKeyCollectionUser: string;

declare var AVMetadataQuickTimeMetadataKeyComment: string;

declare var AVMetadataQuickTimeMetadataKeyComposer: string;

declare var AVMetadataQuickTimeMetadataKeyContentIdentifier: string;

declare var AVMetadataQuickTimeMetadataKeyCopyright: string;

declare var AVMetadataQuickTimeMetadataKeyCreationDate: string;

declare var AVMetadataQuickTimeMetadataKeyCredits: string;

declare var AVMetadataQuickTimeMetadataKeyDescription: string;

declare var AVMetadataQuickTimeMetadataKeyDirectionFacing: string;

declare var AVMetadataQuickTimeMetadataKeyDirectionMotion: string;

declare var AVMetadataQuickTimeMetadataKeyDirector: string;

declare var AVMetadataQuickTimeMetadataKeyDisplayName: string;

declare var AVMetadataQuickTimeMetadataKeyEncodedBy: string;

declare var AVMetadataQuickTimeMetadataKeyGenre: string;

declare var AVMetadataQuickTimeMetadataKeyInformation: string;

declare var AVMetadataQuickTimeMetadataKeyKeywords: string;

declare var AVMetadataQuickTimeMetadataKeyLocationBody: string;

declare var AVMetadataQuickTimeMetadataKeyLocationDate: string;

declare var AVMetadataQuickTimeMetadataKeyLocationISO6709: string;

declare var AVMetadataQuickTimeMetadataKeyLocationName: string;

declare var AVMetadataQuickTimeMetadataKeyLocationNote: string;

declare var AVMetadataQuickTimeMetadataKeyLocationRole: string;

declare var AVMetadataQuickTimeMetadataKeyMake: string;

declare var AVMetadataQuickTimeMetadataKeyModel: string;

declare var AVMetadataQuickTimeMetadataKeyOriginalArtist: string;

declare var AVMetadataQuickTimeMetadataKeyPerformer: string;

declare var AVMetadataQuickTimeMetadataKeyPhonogramRights: string;

declare var AVMetadataQuickTimeMetadataKeyProducer: string;

declare var AVMetadataQuickTimeMetadataKeyPublisher: string;

declare var AVMetadataQuickTimeMetadataKeyRatingUser: string;

declare var AVMetadataQuickTimeMetadataKeySoftware: string;

declare var AVMetadataQuickTimeMetadataKeyTitle: string;

declare var AVMetadataQuickTimeMetadataKeyYear: string;

declare var AVMetadataQuickTimeMetadataKeyiXML: string;

declare var AVMetadataQuickTimeUserDataKeyAlbum: string;

declare var AVMetadataQuickTimeUserDataKeyArranger: string;

declare var AVMetadataQuickTimeUserDataKeyArtist: string;

declare var AVMetadataQuickTimeUserDataKeyAuthor: string;

declare var AVMetadataQuickTimeUserDataKeyChapter: string;

declare var AVMetadataQuickTimeUserDataKeyComment: string;

declare var AVMetadataQuickTimeUserDataKeyComposer: string;

declare var AVMetadataQuickTimeUserDataKeyCopyright: string;

declare var AVMetadataQuickTimeUserDataKeyCreationDate: string;

declare var AVMetadataQuickTimeUserDataKeyCredits: string;

declare var AVMetadataQuickTimeUserDataKeyDescription: string;

declare var AVMetadataQuickTimeUserDataKeyDirector: string;

declare var AVMetadataQuickTimeUserDataKeyDisclaimer: string;

declare var AVMetadataQuickTimeUserDataKeyEncodedBy: string;

declare var AVMetadataQuickTimeUserDataKeyFullName: string;

declare var AVMetadataQuickTimeUserDataKeyGenre: string;

declare var AVMetadataQuickTimeUserDataKeyHostComputer: string;

declare var AVMetadataQuickTimeUserDataKeyInformation: string;

declare var AVMetadataQuickTimeUserDataKeyKeywords: string;

declare var AVMetadataQuickTimeUserDataKeyLocationISO6709: string;

declare var AVMetadataQuickTimeUserDataKeyMake: string;

declare var AVMetadataQuickTimeUserDataKeyModel: string;

declare var AVMetadataQuickTimeUserDataKeyOriginalArtist: string;

declare var AVMetadataQuickTimeUserDataKeyOriginalFormat: string;

declare var AVMetadataQuickTimeUserDataKeyOriginalSource: string;

declare var AVMetadataQuickTimeUserDataKeyPerformers: string;

declare var AVMetadataQuickTimeUserDataKeyPhonogramRights: string;

declare var AVMetadataQuickTimeUserDataKeyProducer: string;

declare var AVMetadataQuickTimeUserDataKeyProduct: string;

declare var AVMetadataQuickTimeUserDataKeyPublisher: string;

declare var AVMetadataQuickTimeUserDataKeySoftware: string;

declare var AVMetadataQuickTimeUserDataKeySpecialPlaybackRequirements: string;

declare var AVMetadataQuickTimeUserDataKeyTaggedCharacteristic: string;

declare var AVMetadataQuickTimeUserDataKeyTrack: string;

declare var AVMetadataQuickTimeUserDataKeyTrackName: string;

declare var AVMetadataQuickTimeUserDataKeyURLLink: string;

declare var AVMetadataQuickTimeUserDataKeyWarning: string;

declare var AVMetadataQuickTimeUserDataKeyWriter: string;

declare class AVMetadataSalientObject extends AVMetadataObject implements NSCopying {

	readonly objectID: number;

	copyWithZone(_?: any): any;
}

declare var AVMetadataiTunesMetadataKeyAccountKind: string;

declare var AVMetadataiTunesMetadataKeyAcknowledgement: string;

declare var AVMetadataiTunesMetadataKeyAlbum: string;

declare var AVMetadataiTunesMetadataKeyAlbumArtist: string;

declare var AVMetadataiTunesMetadataKeyAppleID: string;

declare var AVMetadataiTunesMetadataKeyArranger: string;

declare var AVMetadataiTunesMetadataKeyArtDirector: string;

declare var AVMetadataiTunesMetadataKeyArtist: string;

declare var AVMetadataiTunesMetadataKeyArtistID: string;

declare var AVMetadataiTunesMetadataKeyAuthor: string;

declare var AVMetadataiTunesMetadataKeyBeatsPerMin: string;

declare var AVMetadataiTunesMetadataKeyComposer: string;

declare var AVMetadataiTunesMetadataKeyConductor: string;

declare var AVMetadataiTunesMetadataKeyContentRating: string;

declare var AVMetadataiTunesMetadataKeyCopyright: string;

declare var AVMetadataiTunesMetadataKeyCoverArt: string;

declare var AVMetadataiTunesMetadataKeyCredits: string;

declare var AVMetadataiTunesMetadataKeyDescription: string;

declare var AVMetadataiTunesMetadataKeyDirector: string;

declare var AVMetadataiTunesMetadataKeyDiscCompilation: string;

declare var AVMetadataiTunesMetadataKeyDiscNumber: string;

declare var AVMetadataiTunesMetadataKeyEQ: string;

declare var AVMetadataiTunesMetadataKeyEncodedBy: string;

declare var AVMetadataiTunesMetadataKeyEncodingTool: string;

declare var AVMetadataiTunesMetadataKeyExecProducer: string;

declare var AVMetadataiTunesMetadataKeyGenreID: string;

declare var AVMetadataiTunesMetadataKeyGrouping: string;

declare var AVMetadataiTunesMetadataKeyLinerNotes: string;

declare var AVMetadataiTunesMetadataKeyLyrics: string;

declare var AVMetadataiTunesMetadataKeyOnlineExtras: string;

declare var AVMetadataiTunesMetadataKeyOriginalArtist: string;

declare var AVMetadataiTunesMetadataKeyPerformer: string;

declare var AVMetadataiTunesMetadataKeyPhonogramRights: string;

declare var AVMetadataiTunesMetadataKeyPlaylistID: string;

declare var AVMetadataiTunesMetadataKeyPredefinedGenre: string;

declare var AVMetadataiTunesMetadataKeyProducer: string;

declare var AVMetadataiTunesMetadataKeyPublisher: string;

declare var AVMetadataiTunesMetadataKeyRecordCompany: string;

declare var AVMetadataiTunesMetadataKeyReleaseDate: string;

declare var AVMetadataiTunesMetadataKeySoloist: string;

declare var AVMetadataiTunesMetadataKeySongID: string;

declare var AVMetadataiTunesMetadataKeySongName: string;

declare var AVMetadataiTunesMetadataKeySoundEngineer: string;

declare var AVMetadataiTunesMetadataKeyThanks: string;

declare var AVMetadataiTunesMetadataKeyTrackNumber: string;

declare var AVMetadataiTunesMetadataKeyTrackSubTitle: string;

declare var AVMetadataiTunesMetadataKeyUserComment: string;

declare var AVMetadataiTunesMetadataKeyUserGenre: string;

declare class AVMovie extends AVAsset implements NSCopying, NSMutableCopying {

	static assetWithURL(_: NSURL): AVMovie; // inherited from AVAsset

	static movieTypes(): NSArray<string>;

	static movieWithDataOptions(_: NSData, options?: NSDictionary<string, any>): AVMovie;

	static movieWithURLOptions(url: NSURL, options?: NSDictionary<string, any>): AVMovie;

	readonly URL: NSURL;

	readonly canContainMovieFragments: boolean;

	readonly containsMovieFragments: boolean;

	readonly data: NSData;

	readonly defaultMediaDataStorage: AVMediaDataStorage;

	static create(data: NSData, options: NSDictionary<string, any>);

	static create(URL: NSURL, options: NSDictionary<string, any>);

	copyWithZone(_?: any): any;

	isCompatibleWithFileType(_: string): boolean;

	movieHeaderWithFileTypeError(fileType: string): NSData;

	mutableCopyWithZone(_?: any): any;

	trackWithTrackID(_: number): AVMovieTrack;

	writeMovieHeaderToURLFileTypeOptionsError(fileType: NSURL, options: string, error: AVMovieWritingOptions): boolean;
}

declare var AVMovieReferenceRestrictionsKey: string;

declare class AVMovieTrack extends AVAssetTrack {

	readonly alternateGroupID: number;

	readonly mediaDataStorage: AVMediaDataStorage;

	readonly mediaDecodeTimeRange: CMTimeRange;

	readonly mediaPresentationTimeRange: CMTimeRange;
}

enum AVMovieWritingOptions {

	AddMovieHeaderToDestination = 0,

	TruncateDestinationToMovieHeaderOnly = 1
}


enum AVMusicSequenceLoadOptions {

	SMF_PreserveTracks = 0,

	SMF_ChannelsToTracks = 1
}


declare class AVMusicTrack extends NSObject {

	setDestinationAudioUnit(_: AVAudioUnit)

	destinationAudioUnit: AVAudioUnit;

	setDestinationMIDIEndpoint(_: number)

	destinationMIDIEndpoint: number;

	setLengthInBeats(_: number)

	lengthInBeats: number;

	setLengthInSeconds(_: number)

	lengthInSeconds: number;

	setLoopRange(_: AVBeatRange)

	loopRange: AVBeatRange;

	setLoopingEnabled(_: boolean)

	isLoopingEnabled: boolean;

	setMuted(_: boolean)

	isMuted: boolean;

	setNumberOfLoops(_: number)

	numberOfLoops: number;

	setOffsetTime(_: number)

	offsetTime: number;

	setSoloed(_: boolean)

	isSoloed: boolean;

	readonly timeResolution: number;
}

enum AVMusicTrackLoopCount {

	Forever = -1
}


declare class AVMutableAudioMix extends AVAudioMix {

	static audioMix(): AVMutableAudioMix;

	setInputParameters(_: NSArray<AVAudioMixInputParameters>)

	inputParameters: NSArray<AVAudioMixInputParameters>;
}

declare class AVMutableAudioMixInputParameters extends AVAudioMixInputParameters {

	static audioMixInputParameters(): AVMutableAudioMixInputParameters;

	static audioMixInputParametersWithTrack(_?: AVAssetTrack): AVMutableAudioMixInputParameters;

	setAudioTapProcessor(_: any)

	audioTapProcessor: any;

	setAudioTimePitchAlgorithm(_: string)

	audioTimePitchAlgorithm: string;

	setTrackID(_: number)

	trackID: number;

	setVolumeAtTime(_: number, atTime: CMTime): void;

	setVolumeRampFromStartVolumeToEndVolumeTimeRange(fromStartVolume: number, toEndVolume: number, timeRange: CMTimeRange): void;
}

declare class AVMutableComposition extends AVComposition {

	static assetWithURL(_: NSURL): AVMutableComposition; // inherited from AVAsset

	static composition(): AVMutableComposition;

	static compositionWithURLAssetInitializationOptions(urlAssetInitializationOptions?: NSDictionary<string, any>): AVMutableComposition;

	setNaturalSize(_: CGSize)

	naturalSize: CGSize;

	addMutableTrackWithMediaTypePreferredTrackID(_: string, preferredTrackID: number): AVMutableCompositionTrack;

	insertEmptyTimeRange(_: CMTimeRange): void;

	insertTimeRangeOfAssetAtTimeError(_: CMTimeRange, of: AVAsset, at: CMTime): boolean;

	mutableTrackCompatibleWithTrack(_: AVAssetTrack): AVMutableCompositionTrack;

	removeTimeRange(_: CMTimeRange): void;

	removeTrack(_: AVCompositionTrack): void;

	scaleTimeRangeToDuration(_: CMTimeRange, toDuration: CMTime): void;

	trackWithTrackID(_: number): AVMutableCompositionTrack;
}

declare class AVMutableCompositionTrack extends AVCompositionTrack {

	setEnabled(_: boolean)

	isEnabled: boolean;

	setExtendedLanguageTag(_: string)

	extendedLanguageTag: string;

	setLanguageCode(_: string)

	languageCode: string;

	setNaturalTimeScale(_: number)

	naturalTimeScale: number;

	setPreferredTransform(_: CGAffineTransform)

	preferredTransform: CGAffineTransform;

	setPreferredVolume(_: number)

	preferredVolume: number;

	setSegments(_: NSArray<AVCompositionTrackSegment>)

	segments: NSArray<AVCompositionTrackSegment>;

	addTrackAssociationToTrackType(_: AVCompositionTrack, type: string): void;

	insertEmptyTimeRange(_: CMTimeRange): void;

	insertTimeRangeOfTrackAtTimeError(ofTrack: CMTimeRange, atTime: AVAssetTrack, error: CMTime): boolean;

	insertTimeRangesOfTracksAtTimeError(ofTracks: NSArray<NSValue>, atTime: NSArray<AVAssetTrack>, error: CMTime): boolean;

	removeTimeRange(_: CMTimeRange): void;

	removeTrackAssociationToTrackType(_: AVCompositionTrack, type: string): void;

	replaceFormatDescriptionWithFormatDescription(_: any, withFormatDescription?: any): void;

	scaleTimeRangeToDuration(_: CMTimeRange, toDuration: CMTime): void;

	validateTrackSegmentsError(error: NSArray<AVCompositionTrackSegment>): boolean;
}

declare class AVMutableDateRangeMetadataGroup extends AVDateRangeMetadataGroup {

	setEndDate(_: Date)

	endDate: Date;

	setItems(_: NSArray<AVMetadataItem>)

	items: NSArray<AVMetadataItem>;

	setStartDate(_: Date)

	startDate: Date;
}

declare class AVMutableMediaSelection extends AVMediaSelection {

	selectMediaOptionInMediaSelectionGroup(_?: AVMediaSelectionOption, in_: AVMediaSelectionGroup): void;
}

declare class AVMutableMetadataItem extends AVMetadataItem {

	static metadataItem(): AVMutableMetadataItem;

	setDataType(_: string)

	dataType: string;

	setDuration(_: CMTime)

	duration: CMTime;

	setExtendedLanguageTag(_: string)

	extendedLanguageTag: string;

	setExtraAttributes(_: NSDictionary<string, any>)

	extraAttributes: NSDictionary<string, any>;

	setIdentifier(_: string)

	identifier: string;

	setKey(_: any)

	key: any;

	setKeySpace(_: string)

	keySpace: string;

	setLocale(_: NSLocale)

	locale: NSLocale;

	setStartDate(_: Date)

	startDate: Date;

	setTime(_: CMTime)

	time: CMTime;

	setValue(_: any)

	value: any;
}

declare class AVMutableMovie extends AVMovie {

	static assetWithURL(_: NSURL): AVMutableMovie; // inherited from AVAsset

	static movieWithDataOptions(_: NSData, options?: NSDictionary<string, any>): AVMutableMovie; // inherited from AVMovie

	static movieWithDataOptionsError(options: NSData, error?: NSDictionary<string, any>): AVMutableMovie;

	static movieWithSettingsFromMovieOptionsError(options?: AVMovie, error?: NSDictionary<string, any>): AVMutableMovie;

	static movieWithURLOptions(url: NSURL, options?: NSDictionary<string, any>): AVMutableMovie; // inherited from AVMovie

	static movieWithURLOptionsError(options: NSURL, error?: NSDictionary<string, any>): AVMutableMovie;

	setDefaultMediaDataStorage(_: AVMediaDataStorage)

	defaultMediaDataStorage: AVMediaDataStorage;

	setInterleavingPeriod(_: CMTime)

	interleavingPeriod: CMTime;

	setMetadata(_: NSArray<AVMetadataItem>)

	metadata: NSArray<AVMetadataItem>;

	setModified(_: boolean)

	isModified: boolean;

	setPreferredRate(_: number)

	preferredRate: number;

	setPreferredTransform(_: CGAffineTransform)

	preferredTransform: CGAffineTransform;

	setPreferredVolume(_: number)

	preferredVolume: number;

	setTimescale(_: number)

	timescale: number;

	static create(data: NSData, options: NSDictionary<string, any>);

	static create(settingsFromMovie: AVMovie, options: NSDictionary<string, any>);

	static create(URL: NSURL, options: NSDictionary<string, any>);

	addMutableTrackWithMediaTypeCopySettingsFromTrackOptions(_: string, copySettingsFromTrack?: AVAssetTrack, options?: NSDictionary<string, any>): AVMutableMovieTrack;

	addMutableTracksCopyingSettingsFromTracksOptions(_: NSArray<AVAssetTrack>, options?: NSDictionary<string, any>): NSArray<AVMutableMovieTrack>;

	insertEmptyTimeRange(_: CMTimeRange): void;

	insertTimeRangeOfAssetAtTimeCopySampleDataError(_: CMTimeRange, of: AVAsset, at: CMTime, copySampleData: boolean): boolean;

	mutableTrackCompatibleWithTrack(_: AVAssetTrack): AVMutableMovieTrack;

	removeTimeRange(_: CMTimeRange): void;

	removeTrack(_: AVMovieTrack): void;

	scaleTimeRangeToDuration(_: CMTimeRange, toDuration: CMTime): void;

	trackWithTrackID(_: number): AVMutableMovieTrack;
}

declare class AVMutableMovieTrack extends AVMovieTrack {

	setAlternateGroupID(_: number)

	alternateGroupID: number;

	setCleanApertureDimensions(_: CGSize)

	cleanApertureDimensions: CGSize;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setEncodedPixelsDimensions(_: CGSize)

	encodedPixelsDimensions: CGSize;

	setExtendedLanguageTag(_: string)

	extendedLanguageTag: string;

	readonly hasProtectedContent: boolean;

	setLanguageCode(_: string)

	languageCode: string;

	setLayer(_: number)

	layer: number;

	setMediaDataStorage(_: AVMediaDataStorage)

	mediaDataStorage: AVMediaDataStorage;

	setMetadata(_: NSArray<AVMetadataItem>)

	metadata: NSArray<AVMetadataItem>;

	setModified(_: boolean)

	isModified: boolean;

	setNaturalSize(_: CGSize)

	naturalSize: CGSize;

	setPreferredMediaChunkAlignment(_: number)

	preferredMediaChunkAlignment: number;

	setPreferredMediaChunkDuration(_: CMTime)

	preferredMediaChunkDuration: CMTime;

	setPreferredMediaChunkSize(_: number)

	preferredMediaChunkSize: number;

	setPreferredTransform(_: CGAffineTransform)

	preferredTransform: CGAffineTransform;

	setPreferredVolume(_: number)

	preferredVolume: number;

	setProductionApertureDimensions(_: CGSize)

	productionApertureDimensions: CGSize;

	setSampleReferenceBaseURL(_: NSURL)

	sampleReferenceBaseURL: NSURL;

	setTimescale(_: number)

	timescale: number;

	addTrackAssociationToTrackType(_: AVMovieTrack, type: string): void;

	appendSampleBufferDecodeTimePresentationTimeError(_: any, decodeTime?: CMTime, presentationTime?: CMTime): boolean;

	insertEmptyTimeRange(_: CMTimeRange): void;

	insertMediaTimeRangeIntoTimeRange(_: CMTimeRange, intoTimeRange: CMTimeRange): boolean;

	insertTimeRangeOfTrackAtTimeCopySampleDataError(ofTrack: CMTimeRange, atTime: AVAssetTrack, copySampleData: CMTime, error: boolean): boolean;

	removeTimeRange(_: CMTimeRange): void;

	removeTrackAssociationToTrackType(_: AVMovieTrack, type: string): void;

	replaceFormatDescriptionWithFormatDescription(_: any, withFormatDescription: any): void;

	scaleTimeRangeToDuration(_: CMTimeRange, toDuration: CMTime): void;
}

declare class AVMutableTimedMetadataGroup extends AVTimedMetadataGroup {

	setItems(_: NSArray<AVMetadataItem>)

	items: NSArray<AVMetadataItem>;

	setTimeRange(_: CMTimeRange)

	timeRange: CMTimeRange;
}

declare class AVMutableVideoComposition extends AVVideoComposition {

	static videoComposition(): AVMutableVideoComposition;

	static videoCompositionWithAssetApplyingCIFiltersWithHandler(_: AVAsset, applyingCIFiltersWithHandler: (p1: AVAsynchronousCIImageFilteringRequest) => void): AVMutableVideoComposition;

	static videoCompositionWithPropertiesOfAssetPrototypeInstruction(_: AVAsset, prototypeInstruction: AVVideoCompositionInstruction): AVMutableVideoComposition;

	setAnimationTool(_: AVVideoCompositionCoreAnimationTool)

	animationTool: AVVideoCompositionCoreAnimationTool;

	setColorPrimaries(_: string)

	colorPrimaries: string;

	setColorTransferFunction(_: string)

	colorTransferFunction: string;

	setColorYCbCrMatrix(_: string)

	colorYCbCrMatrix: string;

	setCustomVideoCompositorClass(_: typeof NSObject)

	customVideoCompositorClass: typeof NSObject;

	setFrameDuration(_: CMTime)

	frameDuration: CMTime;

	setInstructions(_: NSArray<AVVideoCompositionInstructionProtocol>)

	instructions: NSArray<AVVideoCompositionInstructionProtocol>;

	setRenderScale(_: number)

	renderScale: number;

	setRenderSize(_: CGSize)

	renderSize: CGSize;

	setSourceTrackIDForFrameTiming(_: number)

	sourceTrackIDForFrameTiming: number;
}

declare class AVMutableVideoCompositionInstruction extends AVVideoCompositionInstruction {

	static videoCompositionInstruction(): AVMutableVideoCompositionInstruction;

	setBackgroundColor(_: any)

	backgroundColor: any;

	setEnablePostProcessing(_: boolean)

	enablePostProcessing: boolean;

	setLayerInstructions(_: NSArray<AVVideoCompositionLayerInstruction>)

	layerInstructions: NSArray<AVVideoCompositionLayerInstruction>;

	setTimeRange(_: CMTimeRange)

	timeRange: CMTimeRange;
}

declare class AVMutableVideoCompositionLayerInstruction extends AVVideoCompositionLayerInstruction {

	static videoCompositionLayerInstruction(): AVMutableVideoCompositionLayerInstruction;

	static videoCompositionLayerInstructionWithAssetTrack(_: AVAssetTrack): AVMutableVideoCompositionLayerInstruction;

	setTrackID(_: number)

	trackID: number;

	setCropRectangleAtTime(_: CGRect, atTime: CMTime): void;

	setCropRectangleRampFromStartCropRectangleToEndCropRectangleTimeRange(fromStartCropRectangle: CGRect, toEndCropRectangle: CGRect, timeRange: CMTimeRange): void;

	setOpacityAtTime(_: number, atTime: CMTime): void;

	setOpacityRampFromStartOpacityToEndOpacityTimeRange(fromStartOpacity: number, toEndOpacity: number, timeRange: CMTimeRange): void;

	setTransformAtTime(_: CGAffineTransform, atTime: CMTime): void;

	setTransformRampFromStartTransformToEndTransformTimeRange(fromStart: CGAffineTransform, toEnd: CGAffineTransform, timeRange: CMTimeRange): void;
}

declare var AVNumberOfChannelsKey: string;

declare class AVOutputSettingsAssistant extends NSObject {

	static availableOutputSettingsPresets(): NSArray<string>;

	static outputSettingsAssistantWithPreset(_: string): AVOutputSettingsAssistant;

	readonly audioSettings: NSDictionary<string, any>;

	readonly outputFileType: string;

	setSourceAudioFormat(_: any)

	sourceAudioFormat: any;

	setSourceVideoAverageFrameDuration(_: CMTime)

	sourceVideoAverageFrameDuration: CMTime;

	setSourceVideoFormat(_: any)

	sourceVideoFormat: any;

	setSourceVideoMinFrameDuration(_: CMTime)

	sourceVideoMinFrameDuration: CMTime;

	readonly videoSettings: NSDictionary<string, any>;
}

declare var AVOutputSettingsPreset1280x720: string;

declare var AVOutputSettingsPreset1920x1080: string;

declare var AVOutputSettingsPreset3840x2160: string;

declare var AVOutputSettingsPreset640x480: string;

declare var AVOutputSettingsPreset960x540: string;

declare var AVOutputSettingsPresetHEVC1920x1080: string;

declare var AVOutputSettingsPresetHEVC1920x1080WithAlpha: string;

declare var AVOutputSettingsPresetHEVC3840x2160: string;

declare var AVOutputSettingsPresetHEVC3840x2160WithAlpha: string;

declare class AVPersistableContentKeyRequest extends AVContentKeyRequest {

	persistableContentKeyFromKeyVendorResponseOptionsError(options: NSData, error?: NSDictionary<string, any>): NSData;
}

interface AVPixelAspectRatio {
	horizontalSpacing: number;
	verticalSpacing: number;
}
declare var AVPixelAspectRatio: AVPixelAspectRatio;

declare class AVPlayer extends NSObject {

	static playerWithPlayerItem(_?: AVPlayerItem): AVPlayer;

	static playerWithURL(_: NSURL): AVPlayer;

	setActionAtItemEnd(_: AVPlayerActionAtItemEnd)

	actionAtItemEnd: AVPlayerActionAtItemEnd;

	setAllowsExternalPlayback(_: boolean)

	allowsExternalPlayback: boolean;

	setAppliesMediaSelectionCriteriaAutomatically(_: boolean)

	appliesMediaSelectionCriteriaAutomatically: boolean;

	setAudioOutputDeviceUniqueID(_: string)

	audioOutputDeviceUniqueID: string;

	setAutomaticallyWaitsToMinimizeStalling(_: boolean)

	automaticallyWaitsToMinimizeStalling: boolean;

	readonly currentItem: AVPlayerItem;

	readonly error: NSError;

	readonly isExternalPlaybackActive: boolean;

	setMasterClock(_: any)

	masterClock: any;

	setMuted(_: boolean)

	isMuted: boolean;

	readonly outputObscuredDueToInsufficientExternalProtection: boolean;

	setPreferredVideoDecoderGPURegistryID(_: number)

	preferredVideoDecoderGPURegistryID: number;

	setPreventsDisplaySleepDuringVideoPlayback(_: boolean)

	preventsDisplaySleepDuringVideoPlayback: boolean;

	setRate(_: number)

	rate: number;

	readonly reasonForWaitingToPlay: string;

	readonly status: AVPlayerStatus;

	readonly timeControlStatus: AVPlayerTimeControlStatus;

	setVolume(_: number)

	volume: number;

	static eligibleForHDRPlayback(): boolean;

	static create(playerItem: AVPlayerItem);

	static create(URL: NSURL);

	addBoundaryTimeObserverForTimesQueueUsingBlock(_: NSArray<NSValue>, queue?: NSObject, usingBlock: () => void): any;

	addPeriodicTimeObserverForIntervalQueueUsingBlock(_: CMTime, queue?: NSObject, usingBlock: (p1: CMTime) => void): any;

	cancelPendingPrerolls(): void;

	currentTime(): CMTime;

	mediaSelectionCriteriaForMediaCharacteristic(_: string): AVPlayerMediaSelectionCriteria;

	pause(): void;

	play(): void;

	playImmediatelyAtRate(_: number): void;

	prerollAtRateCompletionHandler(_: number, completionHandler?: (p1: boolean) => void): void;

	removeTimeObserver(_: any): void;

	replaceCurrentItemWithPlayerItem(_?: AVPlayerItem): void;

	seekToDate(_: Date): void;

	seekToDateCompletionHandler(_: Date, completionHandler: (p1: boolean) => void): void;

	seekToTime(_: CMTime): void;

	seekToTimeCompletionHandler(_: CMTime, completionHandler: (p1: boolean) => void): void;

	seekToTimeToleranceBeforeToleranceAfter(_: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime): void;

	seekToTimeToleranceBeforeToleranceAfterCompletionHandler(_: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: (p1: boolean) => void): void;

	setMediaSelectionCriteriaForMediaCharacteristic(_?: AVPlayerMediaSelectionCriteria, forMediaCharacteristic: string): void;

	setRateTimeAtHostTime(_: number, time: CMTime, atHostTime: CMTime): void;
}

enum AVPlayerActionAtItemEnd {

	Advance = 0,

	Pause = 1,

	None = 2
}


declare var AVPlayerEligibleForHDRPlaybackDidChangeNotification: string;

declare class AVPlayerItem extends NSObject implements NSCopying {

	static playerItemWithAsset(_: AVAsset): AVPlayerItem;

	static playerItemWithAssetAutomaticallyLoadedAssetKeys(_: AVAsset, automaticallyLoadedAssetKeys?: NSArray<string>): AVPlayerItem;

	static playerItemWithURL(_: NSURL): AVPlayerItem;

	readonly isApplicationAuthorizedForPlayback: boolean;

	readonly asset: AVAsset;

	setAudioMix(_: AVAudioMix)

	audioMix: AVAudioMix;

	setAudioSpatializationAllowed(_: boolean)

	isAudioSpatializationAllowed: boolean;

	setAudioTimePitchAlgorithm(_: string)

	audioTimePitchAlgorithm: string;

	readonly isAuthorizationRequiredForPlayback: boolean;

	readonly automaticallyLoadedAssetKeys: NSArray<string>;

	setAutomaticallyPreservesTimeOffsetFromLive(_: boolean)

	automaticallyPreservesTimeOffsetFromLive: boolean;

	readonly canPlayFastForward: boolean;

	readonly canPlayFastReverse: boolean;

	readonly canPlayReverse: boolean;

	readonly canPlaySlowForward: boolean;

	readonly canPlaySlowReverse: boolean;

	readonly canStepBackward: boolean;

	readonly canStepForward: boolean;

	setCanUseNetworkResourcesForLiveStreamingWhilePaused(_: boolean)

	canUseNetworkResourcesForLiveStreamingWhilePaused: boolean;

	setConfiguredTimeOffsetFromLive(_: CMTime)

	configuredTimeOffsetFromLive: CMTime;

	readonly contentAuthorizationRequestStatus: AVContentAuthorizationStatus;

	readonly isContentAuthorizedForPlayback: boolean;

	readonly currentMediaSelection: AVMediaSelection;

	readonly customVideoCompositor: AVVideoCompositing;

	readonly duration: CMTime;

	readonly error: NSError;

	setForwardPlaybackEndTime(_: CMTime)

	forwardPlaybackEndTime: CMTime;

	readonly loadedTimeRanges: NSArray<NSValue>;

	readonly mediaDataCollectors: NSArray<AVPlayerItemMediaDataCollector>;

	readonly outputs: NSArray<AVPlayerItemOutput>;

	readonly isPlaybackBufferEmpty: boolean;

	readonly isPlaybackBufferFull: boolean;

	readonly isPlaybackLikelyToKeepUp: boolean;

	setPreferredForwardBufferDuration(_: number)

	preferredForwardBufferDuration: number;

	setPreferredMaximumResolution(_: CGSize)

	preferredMaximumResolution: CGSize;

	setPreferredPeakBitRate(_: number)

	preferredPeakBitRate: number;

	readonly presentationSize: CGSize;

	readonly recommendedTimeOffsetFromLive: CMTime;

	setReversePlaybackEndTime(_: CMTime)

	reversePlaybackEndTime: CMTime;

	readonly seekableTimeRanges: NSArray<NSValue>;

	setSeekingWaitsForVideoCompositionRendering(_: boolean)

	seekingWaitsForVideoCompositionRendering: boolean;

	readonly status: AVPlayerItemStatus;

	setTextStyleRules(_: NSArray<AVTextStyleRule>)

	textStyleRules: NSArray<AVTextStyleRule>;

	readonly timebase: any;

	readonly tracks: NSArray<AVPlayerItemTrack>;

	setVideoApertureMode(_: string)

	videoApertureMode: string;

	setVideoComposition(_: AVVideoComposition)

	videoComposition: AVVideoComposition;

	static create(asset: AVAsset);

	static create(asset: AVAsset, automaticallyLoadedAssetKeys: NSArray<string> | string[]);

	static create(URL: NSURL);

	accessLog(): AVPlayerItemAccessLog;

	addMediaDataCollector(_: AVPlayerItemMediaDataCollector): void;

	addOutput(_: AVPlayerItemOutput): void;

	cancelContentAuthorizationRequest(): void;

	cancelPendingSeeks(): void;

	copyWithZone(_?: any): any;

	currentDate(): Date;

	currentTime(): CMTime;

	errorLog(): AVPlayerItemErrorLog;

	removeMediaDataCollector(_: AVPlayerItemMediaDataCollector): void;

	removeOutput(_: AVPlayerItemOutput): void;

	requestContentAuthorizationAsynchronouslyWithTimeoutIntervalCompletionHandler(_: number, completionHandler: () => void): void;

	seekToDateCompletionHandler(_: Date, completionHandler?: (p1: boolean) => void): boolean;

	seekToTimeCompletionHandler(_: CMTime, completionHandler?: (p1: boolean) => void): void;

	seekToTimeToleranceBeforeToleranceAfterCompletionHandler(_: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler?: (p1: boolean) => void): void;

	selectMediaOptionInMediaSelectionGroup(_?: AVMediaSelectionOption, in_: AVMediaSelectionGroup): void;

	selectMediaOptionAutomaticallyInMediaSelectionGroup(_: AVMediaSelectionGroup): void;

	stepByCount(_: number): void;
}

declare class AVPlayerItemAccessLog extends NSObject implements NSCopying {

	readonly events: NSArray<AVPlayerItemAccessLogEvent>;

	readonly extendedLogDataStringEncoding: number;

	copyWithZone(_?: any): any;

	extendedLogData(): NSData;
}

declare class AVPlayerItemAccessLogEvent extends NSObject implements NSCopying {

	readonly URI: string;

	readonly averageAudioBitrate: number;

	readonly averageVideoBitrate: number;

	readonly downloadOverdue: number;

	readonly durationWatched: number;

	readonly indicatedAverageBitrate: number;

	readonly indicatedBitrate: number;

	readonly mediaRequestsWWAN: number;

	readonly numberOfBytesTransferred: number;

	readonly numberOfDroppedVideoFrames: number;

	readonly numberOfMediaRequests: number;

	readonly numberOfServerAddressChanges: number;

	readonly numberOfStalls: number;

	readonly observedBitrate: number;

	readonly observedBitrateStandardDeviation: number;

	readonly observedMaxBitrate: number;

	readonly observedMinBitrate: number;

	readonly playbackSessionID: string;

	readonly playbackStartDate: Date;

	readonly playbackStartOffset: number;

	readonly playbackType: string;

	readonly segmentsDownloadedDuration: number;

	readonly serverAddress: string;

	readonly startupTime: number;

	readonly switchBitrate: number;

	readonly transferDuration: number;

	copyWithZone(_?: any): any;
}

declare var AVPlayerItemDidPlayToEndTimeNotification: string;

declare class AVPlayerItemErrorLog extends NSObject implements NSCopying {

	readonly events: NSArray<AVPlayerItemErrorLogEvent>;

	readonly extendedLogDataStringEncoding: number;

	copyWithZone(_?: any): any;

	extendedLogData(): NSData;
}

declare class AVPlayerItemErrorLogEvent extends NSObject implements NSCopying {

	readonly URI: string;

	readonly date: Date;

	readonly errorComment: string;

	readonly errorDomain: string;

	readonly errorStatusCode: number;

	readonly playbackSessionID: string;

	readonly serverAddress: string;

	copyWithZone(_?: any): any;
}

declare var AVPlayerItemFailedToPlayToEndTimeErrorKey: string;

declare var AVPlayerItemFailedToPlayToEndTimeNotification: string;

declare class AVPlayerItemLegibleOutput extends AVPlayerItemOutput {

	setAdvanceIntervalForDelegateInvocation(_: number)

	advanceIntervalForDelegateInvocation: number;

	readonly delegate: AVPlayerItemLegibleOutputPushDelegate;

	readonly delegateQueue: NSObject;

	setTextStylingResolution(_: string)

	textStylingResolution: string;

	static create(mediaSubtypesForNativeRepresentation: NSArray<number> | number[]);

	setDelegateQueue(_?: AVPlayerItemLegibleOutputPushDelegate, queue?: NSObject): void;
}

interface AVPlayerItemLegibleOutputPushDelegate extends AVPlayerItemOutputPushDelegate {

	legibleOutputDidOutputAttributedStringsNativeSampleBuffersForItemTime?(_: AVPlayerItemLegibleOutput, didOutputAttributedStrings: NSArray<NSAttributedString>, nativeSampleBuffers: NSArray<any>, forItemTime: CMTime): void;
}
declare var AVPlayerItemLegibleOutputPushDelegate: {

	prototype: AVPlayerItemLegibleOutputPushDelegate;
};

declare var AVPlayerItemLegibleOutputTextStylingResolutionDefault: string;

declare var AVPlayerItemLegibleOutputTextStylingResolutionSourceAndRulesOnly: string;

declare class AVPlayerItemMediaDataCollector extends NSObject {
}

declare var AVPlayerItemMediaSelectionDidChangeNotification: string;

declare class AVPlayerItemMetadataCollector extends AVPlayerItemMediaDataCollector {

	readonly delegate: AVPlayerItemMetadataCollectorPushDelegate;

	readonly delegateQueue: NSObject;

	static create(identifiers: NSArray<string> | string[], classifyingLabels: NSArray<string> | string[]);

	setDelegateQueue(_?: AVPlayerItemMetadataCollectorPushDelegate, queue?: NSObject): void;
}

interface AVPlayerItemMetadataCollectorPushDelegate extends NSObjectProtocol {

	metadataCollectorDidCollectDateRangeMetadataGroupsIndexesOfNewGroupsIndexesOfModifiedGroups(_: AVPlayerItemMetadataCollector, didCollectDateRangeMetadataGroups: NSArray<AVDateRangeMetadataGroup>, indexesOfNewGroups: NSIndexSet, indexesOfModifiedGroups: NSIndexSet): void;
}
declare var AVPlayerItemMetadataCollectorPushDelegate: {

	prototype: AVPlayerItemMetadataCollectorPushDelegate;
};

declare class AVPlayerItemMetadataOutput extends AVPlayerItemOutput {

	setAdvanceIntervalForDelegateInvocation(_: number)

	advanceIntervalForDelegateInvocation: number;

	readonly delegate: AVPlayerItemMetadataOutputPushDelegate;

	readonly delegateQueue: NSObject;

	static create(identifiers: NSArray<string> | string[]);

	setDelegateQueue(_?: AVPlayerItemMetadataOutputPushDelegate, queue?: NSObject): void;
}

interface AVPlayerItemMetadataOutputPushDelegate extends AVPlayerItemOutputPushDelegate {

	metadataOutputDidOutputTimedMetadataGroupsFromPlayerItemTrack?(_: AVPlayerItemMetadataOutput, didOutputTimedMetadataGroups: NSArray<AVTimedMetadataGroup>, fromPlayerItemTrack?: AVPlayerItemTrack): void;
}
declare var AVPlayerItemMetadataOutputPushDelegate: {

	prototype: AVPlayerItemMetadataOutputPushDelegate;
};

declare var AVPlayerItemNewAccessLogEntryNotification: string;

declare var AVPlayerItemNewErrorLogEntryNotification: string;

declare class AVPlayerItemOutput extends NSObject {

	setSuppressesPlayerRendering(_: boolean)

	suppressesPlayerRendering: boolean;

	itemTimeForCVTimeStamp(_: CVTimeStamp): CMTime;

	itemTimeForHostTime(_: number): CMTime;

	itemTimeForMachAbsoluteTime(_: number): CMTime;
}

interface AVPlayerItemOutputPullDelegate extends NSObjectProtocol {

	outputMediaDataWillChange?(_: AVPlayerItemOutput): void;

	outputSequenceWasFlushed?(_: AVPlayerItemOutput): void;
}
declare var AVPlayerItemOutputPullDelegate: {

	prototype: AVPlayerItemOutputPullDelegate;
};

interface AVPlayerItemOutputPushDelegate extends NSObjectProtocol {

	outputSequenceWasFlushed?(_: AVPlayerItemOutput): void;
}
declare var AVPlayerItemOutputPushDelegate: {

	prototype: AVPlayerItemOutputPushDelegate;
};

declare var AVPlayerItemPlaybackStalledNotification: string;

declare var AVPlayerItemRecommendedTimeOffsetFromLiveDidChangeNotification: string;

enum AVPlayerItemStatus {

	Unknown = 0,

	ReadyToPlay = 1,

	Failed = 2
}


declare var AVPlayerItemTimeJumpedNotification: string;

declare class AVPlayerItemTrack extends NSObject {

	readonly assetTrack: AVAssetTrack;

	readonly currentVideoFrameRate: number;

	setEnabled(_: boolean)

	isEnabled: boolean;

	setVideoFieldMode(_: string)

	videoFieldMode: string;
}

declare var AVPlayerItemTrackVideoFieldModeDeinterlaceFields: string;

declare class AVPlayerItemVideoOutput extends AVPlayerItemOutput {

	readonly delegate: AVPlayerItemOutputPullDelegate;

	readonly delegateQueue: NSObject;

	static create(outputSettings: NSDictionary<string, any>);

	static create(pixelBufferAttributes: NSDictionary<string, any>);

	copyPixelBufferForItemTimeItemTimeForDisplay(_: CMTime, itemTimeForDisplay?: CMTime): any;

	hasNewPixelBufferForItemTime(_: CMTime): boolean;

	requestNotificationOfMediaDataChangeWithAdvanceInterval(_: number): void;

	setDelegateQueue(_?: AVPlayerItemOutputPullDelegate, queue?: NSObject): void;
}

declare class AVPlayerLayer extends CALayer {

	static layer(): AVPlayerLayer; // inherited from CALayer

	static playerLayerWithPlayer(_?: AVPlayer): AVPlayerLayer;

	setPixelBufferAttributes(_: NSDictionary<string, any>)

	pixelBufferAttributes: NSDictionary<string, any>;

	setPlayer(_: AVPlayer)

	player: AVPlayer;

	readonly isReadyForDisplay: boolean;

	setVideoGravity(_: string)

	videoGravity: string;

	readonly videoRect: CGRect;
}

declare class AVPlayerLooper extends NSObject {

	static playerLooperWithPlayerTemplateItem(_: AVQueuePlayer, templateItem: AVPlayerItem): AVPlayerLooper;

	static playerLooperWithPlayerTemplateItemTimeRange(_: AVQueuePlayer, templateItem: AVPlayerItem, timeRange: CMTimeRange): AVPlayerLooper;

	readonly error: NSError;

	readonly loopCount: number;

	readonly loopingPlayerItems: NSArray<AVPlayerItem>;

	readonly status: AVPlayerLooperStatus;

	static create(player: AVQueuePlayer, templateItem: AVPlayerItem, timeRange: CMTimeRange);

	disableLooping(): void;
}

enum AVPlayerLooperStatus {

	Unknown = 0,

	Ready = 1,

	Failed = 2,

	Cancelled = 3
}


declare class AVPlayerMediaSelectionCriteria extends NSObject {

	readonly preferredLanguages: NSArray<string>;

	readonly preferredMediaCharacteristics: NSArray<string>;

	readonly principalMediaCharacteristics: NSArray<string>;

	static create(preferredLanguages: NSArray<string> | string[], preferredMediaCharacteristics: NSArray<string> | string[]);

	static create(principalMediaCharacteristics: NSArray<string> | string[], preferredLanguages: NSArray<string> | string[], preferredMediaCharacteristics: NSArray<string> | string[]);
}

enum AVPlayerStatus {

	Unknown = 0,

	ReadyToPlay = 1,

	Failed = 2
}


enum AVPlayerTimeControlStatus {

	Paused = 0,

	WaitingToPlayAtSpecifiedRate = 1,

	Playing = 2
}


declare var AVPlayerWaitingToMinimizeStallsReason: string;

declare var AVPlayerWaitingWhileEvaluatingBufferingRateReason: string;

declare var AVPlayerWaitingWithNoItemToPlayReason: string;

declare class AVPortraitEffectsMatte extends NSObject {

	static portraitEffectsMatteFromDictionaryRepresentationError(error: NSDictionary<any, any>): AVPortraitEffectsMatte;

	readonly mattingImage: any;

	readonly pixelFormatType: number;

	dictionaryRepresentationForAuxiliaryDataType(_?: string): NSDictionary<any, any>;

	portraitEffectsMatteByApplyingExifOrientation(_: CGImagePropertyOrientation): this;

	portraitEffectsMatteByReplacingPortraitEffectsMatteWithPixelBufferError(error: any): this;
}

declare class AVQueuePlayer extends AVPlayer {

	static playerWithPlayerItem(_?: AVPlayerItem): AVQueuePlayer; // inherited from AVPlayer

	static playerWithURL(_: NSURL): AVQueuePlayer; // inherited from AVPlayer

	static queuePlayerWithItems(_: NSArray<AVPlayerItem>): AVQueuePlayer;

	static create(items: NSArray<AVPlayerItem> | AVPlayerItem[]);

	advanceToNextItem(): void;

	canInsertItemAfterItem(_: AVPlayerItem, after?: AVPlayerItem): boolean;

	insertItemAfterItem(_: AVPlayerItem, after?: AVPlayerItem): void;

	items(): NSArray<AVPlayerItem>;

	removeAllItems(): void;

	removeItem(_: AVPlayerItem): void;
}

interface AVQueuedSampleBufferRendering extends NSObjectProtocol {

	isReadyForMoreMediaData: boolean;

	timebase: any;

	enqueueSampleBuffer(_: any): void;

	flush(): void;

	requestMediaDataWhenReadyOnQueueUsingBlock(_: NSObject, usingBlock: () => void): void;

	stopRequestingMediaData(): void;
}
declare var AVQueuedSampleBufferRendering: {

	prototype: AVQueuedSampleBufferRendering;
};

enum AVQueuedSampleBufferRenderingStatus {

	Unknown = 0,

	Rendering = 1,

	Failed = 2
}


declare class AVRouteDetector extends NSObject {

	readonly multipleRoutesDetected: boolean;

	setRouteDetectionEnabled(_: boolean)

	isRouteDetectionEnabled: boolean;
}

declare var AVRouteDetectorMultipleRoutesDetectedDidChangeNotification: string;

declare class AVSampleBufferAudioRenderer extends NSObject implements AVQueuedSampleBufferRendering {

	setAudioOutputDeviceUniqueID(_: string)

	audioOutputDeviceUniqueID: string;

	setAudioTimePitchAlgorithm(_: string)

	audioTimePitchAlgorithm: string;

	readonly error: NSError;

	setMuted(_: boolean)

	isMuted: boolean;

	readonly status: AVQueuedSampleBufferRenderingStatus;

	setVolume(_: number)

	volume: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReadyForMoreMediaData: boolean; // inherited from AVQueuedSampleBufferRendering

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly timebase: any; // inherited from AVQueuedSampleBufferRendering

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	enqueueSampleBuffer(_: any): void;

	flush(): void;

	flushFromSourceTimeCompletionHandler(_: CMTime, completionHandler: (p1: boolean) => void): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	requestMediaDataWhenReadyOnQueueUsingBlock(_: NSObject, usingBlock: () => void): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	stopRequestingMediaData(): void;
}

declare var AVSampleBufferAudioRendererFlushTimeKey: string;

declare var AVSampleBufferAudioRendererWasFlushedAutomaticallyNotification: string;

declare class AVSampleBufferDisplayLayer extends CALayer implements AVQueuedSampleBufferRendering {

	static layer(): AVSampleBufferDisplayLayer; // inherited from CALayer

	setControlTimebase(_: any)

	controlTimebase: any;

	readonly error: NSError;

	setPreventsCapture(_: boolean)

	preventsCapture: boolean;

	setPreventsDisplaySleepDuringVideoPlayback(_: boolean)

	preventsDisplaySleepDuringVideoPlayback: boolean;

	readonly status: AVQueuedSampleBufferRenderingStatus;

	setVideoGravity(_: string)

	videoGravity: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReadyForMoreMediaData: boolean; // inherited from AVQueuedSampleBufferRendering

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly timebase: any; // inherited from AVQueuedSampleBufferRendering

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	enqueueSampleBuffer(_: any): void;

	flush(): void;

	flushAndRemoveImage(): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	requestMediaDataWhenReadyOnQueueUsingBlock(_: NSObject, usingBlock: () => void): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	stopRequestingMediaData(): void;
}

declare var AVSampleBufferDisplayLayerFailedToDecodeNotification: string;

declare var AVSampleBufferDisplayLayerFailedToDecodeNotificationErrorKey: string;

declare class AVSampleBufferGenerator extends NSObject {

	static notifyOfDataReadyForSampleBufferCompletionHandler(_: any, completionHandler: (p1: boolean, p2: NSError) => void): void;

	static create(asset: AVAsset, timebase: any);

	createSampleBufferForRequest(_: AVSampleBufferRequest): any;
}

declare class AVSampleBufferRenderSynchronizer extends NSObject {

	setRate(_: number)

	rate: number;

	readonly renderers: NSArray<AVQueuedSampleBufferRendering>;

	readonly timebase: any;

	addBoundaryTimeObserverForTimesQueueUsingBlock(_: NSArray<NSValue>, queue?: NSObject, usingBlock: () => void): any;

	addPeriodicTimeObserverForIntervalQueueUsingBlock(_: CMTime, queue?: NSObject, usingBlock: (p1: CMTime) => void): any;

	addRenderer(_: AVQueuedSampleBufferRendering): void;

	currentTime(): CMTime;

	removeRendererAtTimeCompletionHandler(_: AVQueuedSampleBufferRendering, atTime: CMTime, completionHandler?: (p1: boolean) => void): void;

	removeTimeObserver(_: any): void;

	setRateTime(_: number, time: CMTime): void;
}

declare var AVSampleBufferRenderSynchronizerRateDidChangeNotification: string;

declare class AVSampleBufferRequest extends NSObject {

	setDirection(_: AVSampleBufferRequestDirection)

	direction: AVSampleBufferRequestDirection;

	setLimitCursor(_: AVSampleCursor)

	limitCursor: AVSampleCursor;

	setMaxSampleCount(_: number)

	maxSampleCount: number;

	setMode(_: AVSampleBufferRequestMode)

	mode: AVSampleBufferRequestMode;

	setOverrideTime(_: CMTime)

	overrideTime: CMTime;

	setPreferredMinSampleCount(_: number)

	preferredMinSampleCount: number;

	readonly startCursor: AVSampleCursor;

	static create(startCursor: AVSampleCursor);
}

enum AVSampleBufferRequestDirection {

	Forward = 1,

	None = 0,

	Reverse = -1
}


enum AVSampleBufferRequestMode {

	Immediate = 0,

	Scheduled = 1,

	Opportunistic = 2
}


declare class AVSampleCursor extends NSObject implements NSCopying {

	readonly currentChunkInfo: AVSampleCursorChunkInfo;

	readonly currentChunkStorageRange: AVSampleCursorStorageRange;

	readonly currentChunkStorageURL: NSURL;

	readonly currentSampleAudioDependencyInfo: AVSampleCursorAudioDependencyInfo;

	readonly currentSampleDependencyInfo: AVSampleCursorDependencyInfo;

	readonly currentSampleDuration: CMTime;

	readonly currentSampleIndexInChunk: number;

	readonly currentSampleStorageRange: AVSampleCursorStorageRange;

	readonly currentSampleSyncInfo: AVSampleCursorSyncInfo;

	readonly decodeTimeStamp: CMTime;

	readonly presentationTimeStamp: CMTime;

	readonly samplesRequiredForDecoderRefresh: number;

	comparePositionInDecodeOrderWithPositionOfCursor(_: AVSampleCursor): NSComparisonResult;

	copyCurrentSampleFormatDescription(): any;

	copyWithZone(_?: any): any;

	samplesWithEarlierDecodeTimeStampsMayHaveLaterPresentationTimeStampsThanCursor(laterThan: AVSampleCursor): boolean;

	samplesWithLaterDecodeTimeStampsMayHaveEarlierPresentationTimeStampsThanCursor(earlierThan: AVSampleCursor): boolean;

	stepByDecodeTimeWasPinned(byDecodeTime: CMTime, wasPinned?: boolean): CMTime;

	stepByPresentationTimeWasPinned(_: CMTime, wasPinned?: boolean): CMTime;

	stepInDecodeOrderByCount(_: number): number;

	stepInPresentationOrderByCount(_: number): number;
}

interface AVSampleCursorAudioDependencyInfo {
	audioSampleIsIndependentlyDecodable: boolean;
	audioSamplePacketRefreshCount: number;
}
declare var AVSampleCursorAudioDependencyInfo: AVSampleCursorAudioDependencyInfo;

interface AVSampleCursorChunkInfo {
	chunkSampleCount: number;
	chunkHasUniformSampleSizes: boolean;
	chunkHasUniformSampleDurations: boolean;
	chunkHasUniformFormatDescriptions: boolean;
}
declare var AVSampleCursorChunkInfo: AVSampleCursorChunkInfo;

interface AVSampleCursorDependencyInfo {
	sampleIndicatesWhetherItHasDependentSamples: boolean;
	sampleHasDependentSamples: boolean;
	sampleIndicatesWhetherItDependsOnOthers: boolean;
	sampleDependsOnOthers: boolean;
	sampleIndicatesWhetherItHasRedundantCoding: boolean;
	sampleHasRedundantCoding: boolean;
}
declare var AVSampleCursorDependencyInfo: AVSampleCursorDependencyInfo;

interface AVSampleCursorStorageRange {
	offset: number;
	length: number;
}
declare var AVSampleCursorStorageRange: AVSampleCursorStorageRange;

interface AVSampleCursorSyncInfo {
	sampleIsFullSync: boolean;
	sampleIsPartialSync: boolean;
	sampleIsDroppable: boolean;
}
declare var AVSampleCursorSyncInfo: AVSampleCursorSyncInfo;

declare var AVSampleRateConverterAlgorithmKey: string;

declare var AVSampleRateConverterAlgorithm_Mastering: string;

declare var AVSampleRateConverterAlgorithm_MinimumPhase: string;

declare var AVSampleRateConverterAlgorithm_Normal: string;

declare var AVSampleRateConverterAudioQualityKey: string;

declare var AVSampleRateKey: string;

declare class AVSemanticSegmentationMatte extends NSObject {

	static semanticSegmentationMatteFromImageSourceAuxiliaryDataTypeDictionaryRepresentationError(dictionaryRepresentation: string, error: NSDictionary<any, any>): AVSemanticSegmentationMatte;

	readonly matteType: string;

	readonly mattingImage: any;

	readonly pixelFormatType: number;

	dictionaryRepresentationForAuxiliaryDataType(_?: string): NSDictionary<any, any>;

	semanticSegmentationMatteByApplyingExifOrientation(_: CGImagePropertyOrientation): this;

	semanticSegmentationMatteByReplacingSemanticSegmentationMatteWithPixelBufferError(error: any): this;
}

declare var AVSemanticSegmentationMatteTypeHair: string;

declare var AVSemanticSegmentationMatteTypeSkin: string;

declare var AVSemanticSegmentationMatteTypeTeeth: string;

enum AVSpeechBoundary {

	Immediate = 0,

	Word = 1
}


declare var AVSpeechSynthesisIPANotationAttribute: string;

declare class AVSpeechSynthesisVoice extends NSObject implements NSSecureCoding {

	static currentLanguageCode(): string;

	static speechVoices(): NSArray<AVSpeechSynthesisVoice>;

	static voiceWithIdentifier(_: string): AVSpeechSynthesisVoice;

	static voiceWithLanguage(_?: string): AVSpeechSynthesisVoice;

	readonly audioFileSettings: NSDictionary<string, any>;

	readonly gender: AVSpeechSynthesisVoiceGender;

	readonly identifier: string;

	readonly language: string;

	readonly name: string;

	readonly quality: AVSpeechSynthesisVoiceQuality;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum AVSpeechSynthesisVoiceGender {

	Unspecified = 0,

	Male = 1,

	Female = 2
}


declare var AVSpeechSynthesisVoiceIdentifierAlex: string;

enum AVSpeechSynthesisVoiceQuality {

	Default = 1,

	Enhanced = 2
}


declare class AVSpeechSynthesizer extends NSObject {

	setDelegate(_: AVSpeechSynthesizerDelegate)

	delegate: AVSpeechSynthesizerDelegate;

	readonly isPaused: boolean;

	readonly isSpeaking: boolean;

	continueSpeaking(): boolean;

	pauseSpeakingAtBoundary(_: AVSpeechBoundary): boolean;

	speakUtterance(_: AVSpeechUtterance): void;

	stopSpeakingAtBoundary(_: AVSpeechBoundary): boolean;

	writeUtteranceToBufferCallback(_: AVSpeechUtterance, toBufferCallback: (p1: AVAudioBuffer) => void): void;
}

interface AVSpeechSynthesizerDelegate extends NSObjectProtocol {

	speechSynthesizerDidCancelSpeechUtterance?(_: AVSpeechSynthesizer, didCancelSpeechUtterance: AVSpeechUtterance): void;

	speechSynthesizerDidContinueSpeechUtterance?(_: AVSpeechSynthesizer, didContinueSpeechUtterance: AVSpeechUtterance): void;

	speechSynthesizerDidFinishSpeechUtterance?(_: AVSpeechSynthesizer, didFinishSpeechUtterance: AVSpeechUtterance): void;

	speechSynthesizerDidPauseSpeechUtterance?(_: AVSpeechSynthesizer, didPauseSpeechUtterance: AVSpeechUtterance): void;

	speechSynthesizerDidStartSpeechUtterance?(_: AVSpeechSynthesizer, didStartSpeechUtterance: AVSpeechUtterance): void;

	speechSynthesizerWillSpeakRangeOfSpeechStringUtterance?(_: AVSpeechSynthesizer, willSpeakRangeOfSpeechString: NSRange, utterance: AVSpeechUtterance): void;
}
declare var AVSpeechSynthesizerDelegate: {

	prototype: AVSpeechSynthesizerDelegate;
};

declare class AVSpeechUtterance extends NSObject implements NSCopying, NSSecureCoding {

	static speechUtteranceWithAttributedString(_: NSAttributedString): AVSpeechUtterance;

	static speechUtteranceWithString(_: string): AVSpeechUtterance;

	readonly attributedSpeechString: NSAttributedString;

	setPitchMultiplier(_: number)

	pitchMultiplier: number;

	setPostUtteranceDelay(_: number)

	postUtteranceDelay: number;

	setPreUtteranceDelay(_: number)

	preUtteranceDelay: number;

	setRate(_: number)

	rate: number;

	readonly speechString: string;

	setVoice(_: AVSpeechSynthesisVoice)

	voice: AVSpeechSynthesisVoice;

	setVolume(_: number)

	volume: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(attributedString: NSAttributedString);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(string: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var AVSpeechUtteranceDefaultSpeechRate: number;

declare var AVSpeechUtteranceMaximumSpeechRate: number;

declare var AVSpeechUtteranceMinimumSpeechRate: number;

declare var AVStreamingKeyDeliveryContentKeyType: string;

declare var AVStreamingKeyDeliveryPersistentContentKeyType: string;

declare class AVSynchronizedLayer extends CALayer {

	static layer(): AVSynchronizedLayer; // inherited from CALayer

	static synchronizedLayerWithPlayerItem(_: AVPlayerItem): AVSynchronizedLayer;

	setPlayerItem(_: AVPlayerItem)

	playerItem: AVPlayerItem;
}

declare class AVTextStyleRule extends NSObject implements NSCopying {

	static propertyListForTextStyleRules(_: NSArray<AVTextStyleRule>): any;

	static textStyleRuleWithTextMarkupAttributes(_: NSDictionary<string, any>): AVTextStyleRule;

	static textStyleRuleWithTextMarkupAttributesTextSelector(_: NSDictionary<string, any>, textSelector?: string): AVTextStyleRule;

	static textStyleRulesFromPropertyList(_: any): NSArray<AVTextStyleRule>;

	readonly textMarkupAttributes: NSDictionary<string, any>;

	readonly textSelector: string;

	static create(textMarkupAttributes: NSDictionary<string, any>);

	static create(textMarkupAttributes: NSDictionary<string, any>, textSelector: string);

	copyWithZone(_?: any): any;
}

declare class AVTimedMetadataGroup extends AVMetadataGroup implements NSCopying, NSMutableCopying {

	readonly timeRange: CMTimeRange;

	static create(items: NSArray<AVMetadataItem> | AVMetadataItem[], timeRange: CMTimeRange);

	static create(sampleBuffer: any);

	copyFormatDescription(): any;

	copyWithZone(_?: any): any;

	mutableCopyWithZone(_?: any): any;
}

declare var AVTrackAssociationTypeAudioFallback: string;

declare var AVTrackAssociationTypeChapterList: string;

declare var AVTrackAssociationTypeForcedSubtitlesOnly: string;

declare var AVTrackAssociationTypeMetadataReferent: string;

declare var AVTrackAssociationTypeSelectionFollower: string;

declare var AVTrackAssociationTypeTimecode: string;

declare class AVURLAsset extends AVAsset implements AVContentKeyRecipient {

	static URLAssetWithURLOptions(_: NSURL, options?: NSDictionary<string, any>): AVURLAsset;

	static assetWithURL(_: NSURL): AVURLAsset; // inherited from AVAsset

	static audiovisualMIMETypes(): NSArray<string>;

	static audiovisualTypes(): NSArray<string>;

	static isPlayableExtendedMIMEType(_: string): boolean;

	readonly URL: NSURL;

	readonly assetCache: AVAssetCache;

	readonly resourceLoader: AVAssetResourceLoader;

	readonly mayRequireContentKeysForMediaDataProcessing: boolean; // inherited from AVContentKeyRecipient

	static create(URL: NSURL, options: NSDictionary<string, any>);

	compatibleTrackForCompositionTrack(_: AVCompositionTrack): AVAssetTrack;
}

declare var AVURLAssetAllowsCellularAccessKey: string;

declare var AVURLAssetAllowsConstrainedNetworkAccessKey: string;

declare var AVURLAssetAllowsExpensiveNetworkAccessKey: string;

declare var AVURLAssetHTTPCookiesKey: string;

declare var AVURLAssetPreferPreciseDurationAndTimingKey: string;

declare var AVURLAssetReferenceRestrictionsKey: string;

declare var AVVideoAllowFrameReorderingKey: string;

declare var AVVideoAllowWideColorKey: string;

declare var AVVideoApertureModeCleanAperture: string;

declare var AVVideoApertureModeEncodedPixels: string;

declare var AVVideoApertureModeProductionAperture: string;

declare var AVVideoAverageBitRateKey: string;

declare var AVVideoAverageNonDroppableFrameRateKey: string;

declare var AVVideoCleanApertureHeightKey: string;

declare var AVVideoCleanApertureHorizontalOffsetKey: string;

declare var AVVideoCleanApertureKey: string;

declare var AVVideoCleanApertureVerticalOffsetKey: string;

declare var AVVideoCleanApertureWidthKey: string;

declare var AVVideoCodecKey: string;

declare var AVVideoCodecTypeAppleProRes422: string;

declare var AVVideoCodecTypeAppleProRes422HQ: string;

declare var AVVideoCodecTypeAppleProRes422LT: string;

declare var AVVideoCodecTypeAppleProRes422Proxy: string;

declare var AVVideoCodecTypeAppleProRes4444: string;

declare var AVVideoCodecTypeH264: string;

declare var AVVideoCodecTypeHEVC: string;

declare var AVVideoCodecTypeHEVCWithAlpha: string;

declare var AVVideoCodecTypeJPEG: string;

declare var AVVideoColorPrimariesKey: string;

declare var AVVideoColorPrimaries_EBU_3213: string;

declare var AVVideoColorPrimaries_ITU_R_2020: string;

declare var AVVideoColorPrimaries_ITU_R_709_2: string;

declare var AVVideoColorPrimaries_P3_D65: string;

declare var AVVideoColorPrimaries_SMPTE_C: string;

declare var AVVideoColorPropertiesKey: string;

interface AVVideoCompositing extends NSObjectProtocol {

	requiredPixelBufferAttributesForRenderContext: NSDictionary<string, any>;

	sourcePixelBufferAttributes: NSDictionary<string, any>;

	supportsWideColorSourceFrames?: boolean;

	anticipateRenderingUsingHint?(_: AVVideoCompositionRenderHint): void;

	cancelAllPendingVideoCompositionRequests?(): void;

	prerollForRenderingUsingHint?(_: AVVideoCompositionRenderHint): void;

	renderContextChanged(_: AVVideoCompositionRenderContext): void;

	startVideoCompositionRequest(_: AVAsynchronousVideoCompositionRequest): void;
}
declare var AVVideoCompositing: {

	prototype: AVVideoCompositing;
};

declare class AVVideoComposition extends NSObject implements NSCopying, NSMutableCopying {

	static videoCompositionWithAssetApplyingCIFiltersWithHandler(asset: AVAsset, filterApplier: (p1: AVAsynchronousCIImageFilteringRequest) => void): AVVideoComposition;

	static videoCompositionWithPropertiesOfAsset(propertiesOf: AVAsset): AVVideoComposition;

	readonly animationTool: AVVideoCompositionCoreAnimationTool;

	readonly colorPrimaries: string;

	readonly colorTransferFunction: string;

	readonly colorYCbCrMatrix: string;

	readonly customVideoCompositorClass: typeof NSObject;

	readonly frameDuration: CMTime;

	readonly instructions: NSArray<AVVideoCompositionInstructionProtocol>;

	readonly renderScale: number;

	readonly renderSize: CGSize;

	readonly sourceTrackIDForFrameTiming: number;

	copyWithZone(_?: any): any;

	isValidForAssetTimeRangeValidationDelegate(_?: AVAsset, timeRange: CMTimeRange, validationDelegate?: AVVideoCompositionValidationHandling): boolean;

	mutableCopyWithZone(_?: any): any;
}

declare class AVVideoCompositionCoreAnimationTool extends NSObject {

	static videoCompositionCoreAnimationToolWithAdditionalLayerAsTrackID(_: CALayer, asTrackID: number): AVVideoCompositionCoreAnimationTool;

	static videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayerInLayer(_: CALayer, inLayer: CALayer): AVVideoCompositionCoreAnimationTool;

	static videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayersInLayer(_: NSArray<CALayer>, inLayer: CALayer): AVVideoCompositionCoreAnimationTool;
}

declare class AVVideoCompositionInstruction extends NSObject implements AVVideoCompositionInstructionProtocol, NSCopying, NSMutableCopying, NSSecureCoding {

	readonly backgroundColor: any;

	readonly layerInstructions: NSArray<AVVideoCompositionLayerInstruction>;

	readonly containsTweening: boolean; // inherited from AVVideoCompositionInstructionProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly enablePostProcessing: boolean; // inherited from AVVideoCompositionInstructionProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly passthroughTrackID: number; // inherited from AVVideoCompositionInstructionProtocol

	readonly requiredSourceTrackIDs: NSArray<NSValue>; // inherited from AVVideoCompositionInstructionProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly timeRange: CMTimeRange; // inherited from AVVideoCompositionInstructionProtocol

	readonly  // inherited from NSObjectProtocol

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	mutableCopyWithZone(_?: any): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

interface AVVideoCompositionInstructionProtocol extends NSObjectProtocol {

	containsTweening: boolean;

	enablePostProcessing: boolean;

	passthroughTrackID: number;

	requiredSourceTrackIDs: NSArray<NSValue>;

	timeRange: CMTimeRange;
}
declare var AVVideoCompositionInstructionProtocol: {

	prototype: AVVideoCompositionInstructionProtocol;
};

declare class AVVideoCompositionLayerInstruction extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	readonly trackID: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	getCropRectangleRampForTimeStartCropRectangleEndCropRectangleTimeRange(_: CMTime, startCropRectangle?: CGRect, endCropRectangle?: CGRect, timeRange?: CMTimeRange): boolean;

	getOpacityRampForTimeStartOpacityEndOpacityTimeRange(_: CMTime, startOpacity?: number, endOpacity?: number, timeRange?: CMTimeRange): boolean;

	getTransformRampForTimeStartTransformEndTransformTimeRange(_: CMTime, startTransform?: CGAffineTransform, endTransform?: CGAffineTransform, timeRange?: CMTimeRange): boolean;

	mutableCopyWithZone(_?: any): any;
}

declare class AVVideoCompositionRenderContext extends NSObject {

	readonly edgeWidths: AVEdgeWidths;

	readonly highQualityRendering: boolean;

	readonly pixelAspectRatio: AVPixelAspectRatio;

	readonly renderScale: number;

	readonly renderTransform: CGAffineTransform;

	readonly size: CGSize;

	readonly videoComposition: AVVideoComposition;

	newPixelBuffer(): any;
}

declare class AVVideoCompositionRenderHint extends NSObject {

	readonly endCompositionTime: CMTime;

	readonly startCompositionTime: CMTime;
}

interface AVVideoCompositionValidationHandling extends NSObjectProtocol {

	videoCompositionShouldContinueValidatingAfterFindingEmptyTimeRange?(_: AVVideoComposition, shouldContinueValidatingAfterFindingEmptyTimeRange: CMTimeRange): boolean;

	videoCompositionShouldContinueValidatingAfterFindingInvalidTimeRangeInInstruction?(_: AVVideoComposition, shouldContinueValidatingAfterFindingInvalidTimeRangeInInstruction: AVVideoCompositionInstructionProtocol): boolean;

	videoCompositionShouldContinueValidatingAfterFindingInvalidTrackIDInInstructionLayerInstructionAsset?(_: AVVideoComposition, shouldContinueValidatingAfterFindingInvalidTrackIDInInstruction: AVVideoCompositionInstructionProtocol, layerInstruction: AVVideoCompositionLayerInstruction, asset: AVAsset): boolean;

	videoCompositionShouldContinueValidatingAfterFindingInvalidValueForKey?(_: AVVideoComposition, shouldContinueValidatingAfterFindingInvalidValueForKey: string): boolean;
}
declare var AVVideoCompositionValidationHandling: {

	prototype: AVVideoCompositionValidationHandling;
};

declare var AVVideoCompressionPropertiesKey: string;

declare var AVVideoDecompressionPropertiesKey: string;

declare var AVVideoEncoderSpecificationKey: string;

declare var AVVideoExpectedSourceFrameRateKey: string;

enum AVVideoFieldMode {

	Both = 0,

	TopOnly = 1,

	BottomOnly = 2,

	Deinterlace = 3
}


declare var AVVideoH264EntropyModeCABAC: string;

declare var AVVideoH264EntropyModeCAVLC: string;

declare var AVVideoH264EntropyModeKey: string;

declare var AVVideoHeightKey: string;

declare var AVVideoMaxKeyFrameIntervalDurationKey: string;

declare var AVVideoMaxKeyFrameIntervalKey: string;

declare var AVVideoPixelAspectRatioHorizontalSpacingKey: string;

declare var AVVideoPixelAspectRatioKey: string;

declare var AVVideoPixelAspectRatioVerticalSpacingKey: string;

declare var AVVideoProfileLevelH264Baseline30: string;

declare var AVVideoProfileLevelH264Baseline31: string;

declare var AVVideoProfileLevelH264Baseline41: string;

declare var AVVideoProfileLevelH264BaselineAutoLevel: string;

declare var AVVideoProfileLevelH264High40: string;

declare var AVVideoProfileLevelH264High41: string;

declare var AVVideoProfileLevelH264HighAutoLevel: string;

declare var AVVideoProfileLevelH264Main30: string;

declare var AVVideoProfileLevelH264Main31: string;

declare var AVVideoProfileLevelH264Main32: string;

declare var AVVideoProfileLevelH264Main41: string;

declare var AVVideoProfileLevelH264MainAutoLevel: string;

declare var AVVideoProfileLevelKey: string;

declare var AVVideoQualityKey: string;

declare var AVVideoScalingModeFit: string;

declare var AVVideoScalingModeKey: string;

declare var AVVideoScalingModeResize: string;

declare var AVVideoScalingModeResizeAspect: string;

declare var AVVideoScalingModeResizeAspectFill: string;

declare var AVVideoTransferFunctionKey: string;

declare var AVVideoTransferFunction_ITU_R_2100_HLG: string;

declare var AVVideoTransferFunction_ITU_R_709_2: string;

declare var AVVideoTransferFunction_SMPTE_240M_1995: string;

declare var AVVideoTransferFunction_SMPTE_ST_2084_PQ: string;

declare var AVVideoWidthKey: string;

declare var AVVideoYCbCrMatrixKey: string;

declare var AVVideoYCbCrMatrix_ITU_R_2020: string;

declare var AVVideoYCbCrMatrix_ITU_R_601_4: string;

declare var AVVideoYCbCrMatrix_ITU_R_709_2: string;

declare var AVVideoYCbCrMatrix_SMPTE_240M_1995: string;
