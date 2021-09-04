
declare class CSCustomAttributeKey extends NSObject implements NSCopying, NSSecureCoding {

	readonly keyName: string;

	readonly isMultiValued: boolean;

	readonly isSearchable: boolean;

	readonly isSearchableByDefault: boolean;

	readonly isUnique: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(keyName: string);

	static create(keyName: string, searchable: boolean, searchableByDefault: boolean, unique: boolean, multiValued: boolean);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum CSIndexErrorCode {

	UnknownError = -1,

	IndexUnavailableError = -1000,

	InvalidItemError = -1001,

	InvalidClientStateError = -1002,

	RemoteConnectionError = -1003,

	QuotaExceeded = -1004,

	IndexingUnsupported = -1005
}


declare var CSIndexErrorDomain: string;

declare class CSIndexExtensionRequestHandler extends NSObject implements CSSearchableIndexDelegate, NSExtensionRequestHandling {

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	beginRequestWithExtensionContext(_: NSExtensionContext): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	dataForSearchableIndexItemIdentifierTypeIdentifierError(itemIdentifier: CSSearchableIndex, typeIdentifier: string, error: string): NSData;

	fileURLForSearchableIndexItemIdentifierTypeIdentifierInPlaceError(itemIdentifier: CSSearchableIndex, typeIdentifier: string, inPlace: string, error: boolean): NSURL;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	searchableIndexReindexAllSearchableItemsWithAcknowledgementHandler(_: CSSearchableIndex, reindexAllSearchableItemsWithAcknowledgementHandler: () => void): void;

	searchableIndexReindexSearchableItemsWithIdentifiersAcknowledgementHandler(_: CSSearchableIndex, reindexSearchableItemsWithIdentifiers: NSArray<string>, acknowledgementHandler: () => void): void;

	searchableIndexDidFinishThrottle(_: CSSearchableIndex): void;

	searchableIndexDidThrottle(_: CSSearchableIndex): void;

	self(): this;
}

declare class CSLocalizedString extends NSString {

	static objectWithItemProviderDataTypeIdentifierError(typeIdentifier: NSData, error: string): CSLocalizedString; // inherited from NSItemProviderReading

	static string(): CSLocalizedString; // inherited from NSString

	static stringWithCStringEncoding(_: string, encoding: number): CSLocalizedString; // inherited from NSString

	static stringWithCharactersLength(_: string, length: number): CSLocalizedString; // inherited from NSString

	static stringWithContentsOfFileEncodingError(encoding: string, error: number): CSLocalizedString; // inherited from NSString

	static stringWithContentsOfFileUsedEncodingError(usedEncoding: string, error?: number): CSLocalizedString; // inherited from NSString

	static stringWithContentsOfURLEncodingError(encoding: NSURL, error: number): CSLocalizedString; // inherited from NSString

	static stringWithContentsOfURLUsedEncodingError(usedEncoding: NSURL, error?: number): CSLocalizedString; // inherited from NSString

	static stringWithString(_: string): CSLocalizedString; // inherited from NSString

	static stringWithUTF8String(_: string): CSLocalizedString; // inherited from NSString

	static create(localizedStrings: NSDictionary<any, any>);

	localizedString(): string;
}

declare var CSMailboxArchive: string;

declare var CSMailboxDrafts: string;

declare var CSMailboxInbox: string;

declare var CSMailboxJunk: string;

declare var CSMailboxSent: string;

declare var CSMailboxTrash: string;

declare class CSPerson extends NSObject implements NSCopying, NSSecureCoding {

	setContactIdentifier(_: string)

	contactIdentifier: string;

	readonly displayName: string;

	readonly handleIdentifier: string;

	readonly handles: NSArray<string>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(displayName: string, handles: NSArray<string> | string[], handleIdentifier: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var CSQueryContinuationActionType: string;

declare class CSSearchQuery extends NSObject {

	readonly isCancelled: boolean;

	setCompletionHandler(_: (p1: NSError) => void)

	completionHandler: (p1: NSError) => void;

	readonly foundItemCount: number;

	setFoundItemsHandler(_: (p1: NSArray<CSSearchableItem>) => void)

	foundItemsHandler: (p1: NSArray<CSSearchableItem>) => void;

	setProtectionClasses(_: NSArray<string>)

	protectionClasses: NSArray<string>;

	static create(queryString: string, attributes: NSArray<string> | string[]);

	cancel(): void;

	start(): void;
}

enum CSSearchQueryErrorCode {

	Unknown = -2000,

	IndexUnreachable = -2001,

	InvalidQuery = -2002,

	Cancelled = -2003
}


declare var CSSearchQueryErrorDomain: string;

declare var CSSearchQueryString: string;

declare class CSSearchableIndex extends NSObject {

	static defaultSearchableIndex(): CSSearchableIndex;

	static isIndexingAvailable(): boolean;

	setIndexDelegate(_: CSSearchableIndexDelegate)

	indexDelegate: CSSearchableIndexDelegate;

	static create(name: string);

	static create(name: string, protectionClass: string);

	beginIndexBatch(): void;

	deleteAllSearchableItemsWithCompletionHandler(_?: (p1: NSError) => void): void;

	deleteSearchableItemsWithDomainIdentifiersCompletionHandler(_: NSArray<string>, completionHandler?: (p1: NSError) => void): void;

	deleteSearchableItemsWithIdentifiersCompletionHandler(_: NSArray<string>, completionHandler?: (p1: NSError) => void): void;

	endIndexBatchWithClientStateCompletionHandler(_: NSData, completionHandler?: (p1: NSError) => void): void;

	fetchLastClientStateWithCompletionHandler(_?: (p1: NSData, p2: NSError) => void): void;

	indexSearchableItemsCompletionHandler(_: NSArray<CSSearchableItem>, completionHandler?: (p1: NSError) => void): void;
}

interface CSSearchableIndexDelegate extends NSObjectProtocol {

	dataForSearchableIndexItemIdentifierTypeIdentifierError?(itemIdentifier: CSSearchableIndex, typeIdentifier: string, error: string): NSData;

	fileURLForSearchableIndexItemIdentifierTypeIdentifierInPlaceError?(itemIdentifier: CSSearchableIndex, typeIdentifier: string, inPlace: string, error: boolean): NSURL;

	searchableIndexReindexAllSearchableItemsWithAcknowledgementHandler(_: CSSearchableIndex, reindexAllSearchableItemsWithAcknowledgementHandler: () => void): void;

	searchableIndexReindexSearchableItemsWithIdentifiersAcknowledgementHandler(_: CSSearchableIndex, reindexSearchableItemsWithIdentifiers: NSArray<string>, acknowledgementHandler: () => void): void;

	searchableIndexDidFinishThrottle?(_: CSSearchableIndex): void;

	searchableIndexDidThrottle?(_: CSSearchableIndex): void;
}
declare var CSSearchableIndexDelegate: {

	prototype: CSSearchableIndexDelegate;
};

declare class CSSearchableItem extends NSObject implements NSCopying, NSSecureCoding {

	setAttributeSet(_: CSSearchableItemAttributeSet)

	attributeSet: CSSearchableItemAttributeSet;

	setDomainIdentifier(_: string)

	domainIdentifier: string;

	setExpirationDate(_: Date)

	expirationDate: Date;

	setUniqueIdentifier(_: string)

	uniqueIdentifier: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(uniqueIdentifier: string, domainIdentifier: string, attributeSet: CSSearchableItemAttributeSet);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var CSSearchableItemActionType: string;

declare var CSSearchableItemActivityIdentifier: string;

declare class CSSearchableItemAttributeSet extends NSObject implements NSCopying, NSSecureCoding {

	setEXIFGPSVersion(_: string)

	EXIFGPSVersion: string;

	setEXIFVersion(_: string)

	EXIFVersion: string;

	setGPSAreaInformation(_: string)

	GPSAreaInformation: string;

	setGPSDOP(_: number)

	GPSDOP: number;

	setGPSDateStamp(_: Date)

	GPSDateStamp: Date;

	setGPSDestBearing(_: number)

	GPSDestBearing: number;

	setGPSDestDistance(_: number)

	GPSDestDistance: number;

	setGPSDestLatitude(_: number)

	GPSDestLatitude: number;

	setGPSDestLongitude(_: number)

	GPSDestLongitude: number;

	setGPSDifferental(_: number)

	GPSDifferental: number;

	setGPSMapDatum(_: string)

	GPSMapDatum: string;

	setGPSMeasureMode(_: string)

	GPSMeasureMode: string;

	setGPSProcessingMethod(_: string)

	GPSProcessingMethod: string;

	setGPSStatus(_: string)

	GPSStatus: string;

	setGPSTrack(_: number)

	GPSTrack: number;

	setHTMLContentData(_: NSData)

	HTMLContentData: NSData;

	setISOSpeed(_: number)

	ISOSpeed: number;

	setURL(_: NSURL)

	URL: NSURL;

	setAccountHandles(_: NSArray<string>)

	accountHandles: NSArray<string>;

	setAccountIdentifier(_: string)

	accountIdentifier: string;

	setAcquisitionMake(_: string)

	acquisitionMake: string;

	setAcquisitionModel(_: string)

	acquisitionModel: string;

	setAddedDate(_: Date)

	addedDate: Date;

	setAdditionalRecipients(_: NSArray<CSPerson>)

	additionalRecipients: NSArray<CSPerson>;

	setAlbum(_: string)

	album: string;

	setAllDay(_: number)

	allDay: number;

	setAlternateNames(_: NSArray<string>)

	alternateNames: NSArray<string>;

	setAltitude(_: number)

	altitude: number;

	setAperture(_: number)

	aperture: number;

	setArtist(_: string)

	artist: string;

	setAudiences(_: NSArray<string>)

	audiences: NSArray<string>;

	setAudioBitRate(_: number)

	audioBitRate: number;

	setAudioChannelCount(_: number)

	audioChannelCount: number;

	setAudioEncodingApplication(_: string)

	audioEncodingApplication: string;

	setAudioSampleRate(_: number)

	audioSampleRate: number;

	setAudioTrackNumber(_: number)

	audioTrackNumber: number;

	setAuthorAddresses(_: NSArray<string>)

	authorAddresses: NSArray<string>;

	setAuthorEmailAddresses(_: NSArray<string>)

	authorEmailAddresses: NSArray<string>;

	setAuthorNames(_: NSArray<string>)

	authorNames: NSArray<string>;

	setAuthors(_: NSArray<CSPerson>)

	authors: NSArray<CSPerson>;

	setBitsPerSample(_: number)

	bitsPerSample: number;

	setCameraOwner(_: string)

	cameraOwner: string;

	setCity(_: string)

	city: string;

	setCodecs(_: NSArray<string>)

	codecs: NSArray<string>;

	setColorSpace(_: string)

	colorSpace: string;

	setComment(_: string)

	comment: string;

	setCompletionDate(_: Date)

	completionDate: Date;

	setComposer(_: string)

	composer: string;

	setContactKeywords(_: NSArray<string>)

	contactKeywords: NSArray<string>;

	setContainerDisplayName(_: string)

	containerDisplayName: string;

	setContainerIdentifier(_: string)

	containerIdentifier: string;

	setContainerOrder(_: number)

	containerOrder: number;

	setContainerTitle(_: string)

	containerTitle: string;

	setContentCreationDate(_: Date)

	contentCreationDate: Date;

	setContentDescription(_: string)

	contentDescription: string;

	setContentModificationDate(_: Date)

	contentModificationDate: Date;

	setContentRating(_: number)

	contentRating: number;

	setContentSources(_: NSArray<string>)

	contentSources: NSArray<string>;

	setContentType(_: string)

	contentType: string;

	setContentTypeTree(_: NSArray<string>)

	contentTypeTree: NSArray<string>;

	setContentURL(_: NSURL)

	contentURL: NSURL;

	setContributors(_: NSArray<string>)

	contributors: NSArray<string>;

	setCopyright(_: string)

	copyright: string;

	setCountry(_: string)

	country: string;

	setCoverage(_: NSArray<string>)

	coverage: NSArray<string>;

	setCreator(_: string)

	creator: string;

	setDeliveryType(_: number)

	deliveryType: number;

	setDirector(_: string)

	director: string;

	setDisplayName(_: string)

	displayName: string;

	setDomainIdentifier(_: string)

	domainIdentifier: string;

	setDownloadedDate(_: Date)

	downloadedDate: Date;

	setDueDate(_: Date)

	dueDate: Date;

	setDuration(_: number)

	duration: number;

	setEditors(_: NSArray<string>)

	editors: NSArray<string>;

	setEmailAddresses(_: NSArray<string>)

	emailAddresses: NSArray<string>;

	setEmailHeaders(_: NSDictionary<string, NSArray<any>>)

	emailHeaders: NSDictionary<string, NSArray<any>>;

	setEncodingApplications(_: NSArray<string>)

	encodingApplications: NSArray<string>;

	setEndDate(_: Date)

	endDate: Date;

	setExposureMode(_: number)

	exposureMode: number;

	setExposureProgram(_: string)

	exposureProgram: string;

	setExposureTime(_: number)

	exposureTime: number;

	setExposureTimeString(_: string)

	exposureTimeString: string;

	setFNumber(_: number)

	fNumber: number;

	setFileSize(_: number)

	fileSize: number;

	setFlashOn(_: number)

	isFlashOn: number;

	setFocalLength(_: number)

	focalLength: number;

	setFocalLength35mm(_: number)

	isFocalLength35mm: number;

	setFontNames(_: NSArray<string>)

	fontNames: NSArray<string>;

	setFullyFormattedAddress(_: string)

	fullyFormattedAddress: string;

	setGeneralMIDISequence(_: number)

	isGeneralMIDISequence: number;

	setGenre(_: string)

	genre: string;

	setHasAlphaChannel(_: number)

	hasAlphaChannel: number;

	setHeadline(_: string)

	headline: string;

	setHiddenAdditionalRecipients(_: NSArray<CSPerson>)

	hiddenAdditionalRecipients: NSArray<CSPerson>;

	setIdentifier(_: string)

	identifier: string;

	setImageDirection(_: number)

	imageDirection: number;

	setImportantDates(_: NSArray<Date>)

	importantDates: NSArray<Date>;

	setInformation(_: string)

	information: string;

	setInstantMessageAddresses(_: NSArray<string>)

	instantMessageAddresses: NSArray<string>;

	setInstructions(_: string)

	instructions: string;

	setKeySignature(_: string)

	keySignature: string;

	setKeywords(_: NSArray<string>)

	keywords: NSArray<string>;

	setKind(_: string)

	kind: string;

	setLanguages(_: NSArray<string>)

	languages: NSArray<string>;

	setLastUsedDate(_: Date)

	lastUsedDate: Date;

	setLatitude(_: number)

	latitude: number;

	setLayerNames(_: NSArray<string>)

	layerNames: NSArray<string>;

	setLensModel(_: string)

	lensModel: string;

	setLikelyJunk(_: number)

	isLikelyJunk: number;

	setLocal(_: number)

	isLocal: number;

	setLongitude(_: number)

	longitude: number;

	setLyricist(_: string)

	lyricist: string;

	setMailboxIdentifiers(_: NSArray<string>)

	mailboxIdentifiers: NSArray<string>;

	setMaxAperture(_: number)

	maxAperture: number;

	setMediaTypes(_: NSArray<string>)

	mediaTypes: NSArray<string>;

	setMetadataModificationDate(_: Date)

	metadataModificationDate: Date;

	setMeteringMode(_: string)

	meteringMode: string;

	setMusicalGenre(_: string)

	musicalGenre: string;

	setMusicalInstrumentCategory(_: string)

	musicalInstrumentCategory: string;

	setMusicalInstrumentName(_: string)

	musicalInstrumentName: string;

	setNamedLocation(_: string)

	namedLocation: string;

	setOrganizations(_: NSArray<string>)

	organizations: NSArray<string>;

	setOrientation(_: number)

	orientation: number;

	setOriginalFormat(_: string)

	originalFormat: string;

	setOriginalSource(_: string)

	originalSource: string;

	setPageCount(_: number)

	pageCount: number;

	setPageHeight(_: number)

	pageHeight: number;

	setPageWidth(_: number)

	pageWidth: number;

	setParticipants(_: NSArray<string>)

	participants: NSArray<string>;

	setPath(_: string)

	path: string;

	setPerformers(_: NSArray<string>)

	performers: NSArray<string>;

	setPhoneNumbers(_: NSArray<string>)

	phoneNumbers: NSArray<string>;

	setPixelCount(_: number)

	pixelCount: number;

	setPixelHeight(_: number)

	pixelHeight: number;

	setPixelWidth(_: number)

	pixelWidth: number;

	setPlayCount(_: number)

	playCount: number;

	setPostalCode(_: string)

	postalCode: string;

	setPrimaryRecipients(_: NSArray<CSPerson>)

	primaryRecipients: NSArray<CSPerson>;

	setProducer(_: string)

	producer: string;

	setProfileName(_: string)

	profileName: string;

	setProjects(_: NSArray<string>)

	projects: NSArray<string>;

	setProviderDataTypeIdentifiers(_: NSArray<string>)

	providerDataTypeIdentifiers: NSArray<string>;

	setProviderFileTypeIdentifiers(_: NSArray<string>)

	providerFileTypeIdentifiers: NSArray<string>;

	setProviderInPlaceFileTypeIdentifiers(_: NSArray<string>)

	providerInPlaceFileTypeIdentifiers: NSArray<string>;

	setPublishers(_: NSArray<string>)

	publishers: NSArray<string>;

	setRankingHint(_: number)

	rankingHint: number;

	setRating(_: number)

	rating: number;

	setRatingDescription(_: string)

	ratingDescription: string;

	setRecipientAddresses(_: NSArray<string>)

	recipientAddresses: NSArray<string>;

	setRecipientEmailAddresses(_: NSArray<string>)

	recipientEmailAddresses: NSArray<string>;

	setRecipientNames(_: NSArray<string>)

	recipientNames: NSArray<string>;

	setRecordingDate(_: Date)

	recordingDate: Date;

	setRedEyeOn(_: number)

	isRedEyeOn: number;

	setRelatedUniqueIdentifier(_: string)

	relatedUniqueIdentifier: string;

	setResolutionHeightDPI(_: number)

	resolutionHeightDPI: number;

	setResolutionWidthDPI(_: number)

	resolutionWidthDPI: number;

	setRights(_: string)

	rights: string;

	setRole(_: string)

	role: string;

	setSecurityMethod(_: string)

	securityMethod: string;

	setSpeed(_: number)

	speed: number;

	setStartDate(_: Date)

	startDate: Date;

	setStateOrProvince(_: string)

	stateOrProvince: string;

	setStreamable(_: number)

	isStreamable: number;

	setSubThoroughfare(_: string)

	subThoroughfare: string;

	setSubject(_: string)

	subject: string;

	setSupportsNavigation(_: number)

	supportsNavigation: number;

	setSupportsPhoneCall(_: number)

	supportsPhoneCall: number;

	setTempo(_: number)

	tempo: number;

	setTextContent(_: string)

	textContent: string;

	setTheme(_: string)

	theme: string;

	setThoroughfare(_: string)

	thoroughfare: string;

	setThumbnailData(_: NSData)

	thumbnailData: NSData;

	setThumbnailURL(_: NSURL)

	thumbnailURL: NSURL;

	setTimeSignature(_: string)

	timeSignature: string;

	setTimestamp(_: Date)

	timestamp: Date;

	setTitle(_: string)

	title: string;

	setTotalBitRate(_: number)

	totalBitRate: number;

	setUserCreated(_: number)

	isUserCreated: number;

	setUserCurated(_: number)

	isUserCurated: number;

	setUserOwned(_: number)

	isUserOwned: number;

	setVersion(_: string)

	version: string;

	setVideoBitRate(_: number)

	videoBitRate: number;

	setWeakRelatedUniqueIdentifier(_: string)

	weakRelatedUniqueIdentifier: string;

	setWhiteBalance(_: number)

	whiteBalance: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(itemContentType: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	setValueForCustomKey(_?: NSSecureCoding, forCustomKey: CSCustomAttributeKey): void;

	valueForCustomKey(_: CSCustomAttributeKey): NSSecureCoding;
}

declare var CoreSpotlightVersionNumber: number;

declare var CoreSpotlightVersionString: number;
