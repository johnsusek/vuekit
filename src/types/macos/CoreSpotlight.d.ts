globalThis.CSIndexErrorCode = globalThis.CSIndexErrorCode || {};

globalThis.CSIndexErrorCode = {
    UnknownError: -1,
    IndexUnavailableError: -1000,
    InvalidItemError: -1001,
    InvalidClientStateError: -1002,
    RemoteConnectionError: -1003,
    QuotaExceeded: -1004,
    IndexingUnsupported: -1005,
    '-1': 'UnknownError',
    '-1000': 'IndexUnavailableError',
    '-1001': 'InvalidItemError',
    '-1002': 'InvalidClientStateError',
    '-1003': 'RemoteConnectionError',
    '-1004': 'QuotaExceeded',
    '-1005': 'IndexingUnsupported'
}

globalThis.CSSearchQueryErrorCode = globalThis.CSSearchQueryErrorCode || {};

globalThis.CSSearchQueryErrorCode = {
    Unknown: -2000,
    IndexUnreachable: -2001,
    InvalidQuery: -2002,
    Cancelled: -2003,
    '-2000': 'Unknown',
    '-2001': 'IndexUnreachable',
    '-2002': 'InvalidQuery',
    '-2003': 'Cancelled'
}

declare class CSCustomAttributeKey extends NSObject implements NSCopying, NSSecureCoding {
  readonly keyName: string;
  readonly isMultiValued: boolean;
  readonly isSearchable: boolean;
  readonly isSearchableByDefault: boolean;
  readonly isUnique: boolean;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithKeyName(keyName: string): this;
  static createWithKeyNameSearchableSearchableByDefaultUniqueMultiValued(keyName: string, searchable: boolean, searchableByDefault: boolean, unique: boolean, multiValued: boolean): this;
}

declare var CSIndexErrorDomain: string;

declare class CSIndexExtensionRequestHandler extends NSObject implements CSSearchableIndexDelegate, NSExtensionRequestHandling {
  readonly debugDescription: string; // inherited from NSObjectProtocol
  readonly description: string; // inherited from NSObjectProtocol
  readonly hash: number; // inherited from NSObjectProtocol
  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol
  beginRequestWithExtensionContext(with_: NSExtensionContext): void;
  conformsToProtocol(_: any /* Protocol */): boolean;
  dataForSearchableIndexItemIdentifierTypeIdentifierError(itemIdentifier: CSSearchableIndex, typeIdentifier: string, error: string): Data;
  fileURLForSearchableIndexItemIdentifierTypeIdentifierInPlaceError(itemIdentifier: CSSearchableIndex, typeIdentifier: string, inPlace: string, error: boolean): URL;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  isProxy(): boolean;
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
  static createWithLocalizedStrings(localizedStrings: NSDictionary<any, any>): this;
  localizedString(): string;
}

declare var CSMailboxArchive: string;

declare var CSMailboxDrafts: string;

declare var CSMailboxInbox: string;

declare var CSMailboxJunk: string;

declare var CSMailboxSent: string;

declare var CSMailboxTrash: string;

declare class CSPerson extends NSObject implements NSCopying, NSSecureCoding {
  contactIdentifier: string;
  setContactIdentifier(_: string)
  readonly displayName: string;
  readonly handleIdentifier: string;
  readonly handles: NSArray<string>;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithDisplayNameHandlesHandleIdentifier(displayName?: string, handles: NSArray<string>, handleIdentifier: string): this;
}

declare var CSQueryContinuationActionType: string;

declare class CSSearchQuery extends NSObject {
  readonly isCancelled: boolean;
  completionHandler: (p1: NSError) => void;
  setCompletionHandler(_: (p1: NSError) => void)
  readonly foundItemCount: number;
  foundItemsHandler: (p1: NSArray<CSSearchableItem>) => void;
  setFoundItemsHandler(_: (p1: NSArray<CSSearchableItem>) => void)
  protectionClasses: NSArray<string>;
  setProtectionClasses(_: NSArray<string>)
  cancel(): void;
  static createWithQueryStringAttributes(queryString: string, attributes?: NSArray<string>): this;
  start(): void;
}

declare var CSSearchQueryErrorDomain: string;

declare var CSSearchQueryString: string;

declare class CSSearchableIndex extends NSObject {
  static defaultSearchableIndex(): CSSearchableIndex;
  static isIndexingAvailable(): boolean;
  indexDelegate: CSSearchableIndexDelegate;
  setIndexDelegate(_: CSSearchableIndexDelegate)
  beginIndexBatch(): void;
  deleteAllSearchableItemsWithCompletionHandler(_?: (p1: NSError) => void): void;
  deleteSearchableItemsWithDomainIdentifiersCompletionHandler(_: NSArray<string>, completionHandler?: (p1: NSError) => void): void;
  deleteSearchableItemsWithIdentifiersCompletionHandler(_: NSArray<string>, completionHandler?: (p1: NSError) => void): void;
  endIndexBatchWithClientStateCompletionHandler(_: Data, completionHandler?: (p1: NSError) => void): void;
  fetchLastClientStateWithCompletionHandler(_?: (p1: Data, p2: NSError) => void): void;
  indexSearchableItemsCompletionHandler(_: NSArray<CSSearchableItem>, completionHandler?: (p1: NSError) => void): void;
  static createWithName(name: string): this;
  static createWithNameProtectionClass(name: string, protectionClass?: string): this;
}

interface CSSearchableIndexDelegate extends NSObjectProtocol {
  dataForSearchableIndexItemIdentifierTypeIdentifierError?(itemIdentifier: CSSearchableIndex, typeIdentifier: string, error: string): Data;
  fileURLForSearchableIndexItemIdentifierTypeIdentifierInPlaceError?(itemIdentifier: CSSearchableIndex, typeIdentifier: string, inPlace: string, error: boolean): URL;
  searchableIndexReindexAllSearchableItemsWithAcknowledgementHandler(_: CSSearchableIndex, reindexAllSearchableItemsWithAcknowledgementHandler: () => void): void;
  searchableIndexReindexSearchableItemsWithIdentifiersAcknowledgementHandler(_: CSSearchableIndex, reindexSearchableItemsWithIdentifiers: NSArray<string>, acknowledgementHandler: () => void): void;
  searchableIndexDidFinishThrottle?(_: CSSearchableIndex): void;
  searchableIndexDidThrottle?(_: CSSearchableIndex): void;
}

declare var CSSearchableIndexDelegate: {
  prototype: CSSearchableIndexDelegate;
};

declare class CSSearchableItem extends NSObject implements NSCopying, NSSecureCoding {
  attributeSet: CSSearchableItemAttributeSet;
  setAttributeSet(_: CSSearchableItemAttributeSet)
  domainIdentifier: string;
  setDomainIdentifier(_: string)
  expirationDate: Date;
  setExpirationDate(_: Date)
  uniqueIdentifier: string;
  setUniqueIdentifier(_: string)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithUniqueIdentifierDomainIdentifierAttributeSet(uniqueIdentifier?: string, domainIdentifier?: string, attributeSet: CSSearchableItemAttributeSet): this;
}

declare var CSSearchableItemActionType: string;

declare var CSSearchableItemActivityIdentifier: string;

declare class CSSearchableItemAttributeSet extends NSObject implements NSCopying, NSSecureCoding {
  EXIFGPSVersion: string;
  setEXIFGPSVersion(_: string)
  EXIFVersion: string;
  setEXIFVersion(_: string)
  GPSAreaInformation: string;
  setGPSAreaInformation(_: string)
  GPSDOP: number;
  setGPSDOP(_: number)
  GPSDateStamp: Date;
  setGPSDateStamp(_: Date)
  GPSDestBearing: number;
  setGPSDestBearing(_: number)
  GPSDestDistance: number;
  setGPSDestDistance(_: number)
  GPSDestLatitude: number;
  setGPSDestLatitude(_: number)
  GPSDestLongitude: number;
  setGPSDestLongitude(_: number)
  GPSDifferental: number;
  setGPSDifferental(_: number)
  GPSMapDatum: string;
  setGPSMapDatum(_: string)
  GPSMeasureMode: string;
  setGPSMeasureMode(_: string)
  GPSProcessingMethod: string;
  setGPSProcessingMethod(_: string)
  GPSStatus: string;
  setGPSStatus(_: string)
  GPSTrack: number;
  setGPSTrack(_: number)
  HTMLContentData: Data;
  setHTMLContentData(_: Data)
  ISOSpeed: number;
  setISOSpeed(_: number)
  URL: URL;
  setURL(_: URL)
  accountHandles: NSArray<string>;
  setAccountHandles(_: NSArray<string>)
  accountIdentifier: string;
  setAccountIdentifier(_: string)
  acquisitionMake: string;
  setAcquisitionMake(_: string)
  acquisitionModel: string;
  setAcquisitionModel(_: string)
  addedDate: Date;
  setAddedDate(_: Date)
  additionalRecipients: NSArray<CSPerson>;
  setAdditionalRecipients(_: NSArray<CSPerson>)
  album: string;
  setAlbum(_: string)
  allDay: number;
  setAllDay(_: number)
  alternateNames: NSArray<string>;
  setAlternateNames(_: NSArray<string>)
  altitude: number;
  setAltitude(_: number)
  aperture: number;
  setAperture(_: number)
  artist: string;
  setArtist(_: string)
  audiences: NSArray<string>;
  setAudiences(_: NSArray<string>)
  audioBitRate: number;
  setAudioBitRate(_: number)
  audioChannelCount: number;
  setAudioChannelCount(_: number)
  audioEncodingApplication: string;
  setAudioEncodingApplication(_: string)
  audioSampleRate: number;
  setAudioSampleRate(_: number)
  audioTrackNumber: number;
  setAudioTrackNumber(_: number)
  authorAddresses: NSArray<string>;
  setAuthorAddresses(_: NSArray<string>)
  authorEmailAddresses: NSArray<string>;
  setAuthorEmailAddresses(_: NSArray<string>)
  authorNames: NSArray<string>;
  setAuthorNames(_: NSArray<string>)
  authors: NSArray<CSPerson>;
  setAuthors(_: NSArray<CSPerson>)
  bitsPerSample: number;
  setBitsPerSample(_: number)
  cameraOwner: string;
  setCameraOwner(_: string)
  city: string;
  setCity(_: string)
  codecs: NSArray<string>;
  setCodecs(_: NSArray<string>)
  colorSpace: string;
  setColorSpace(_: string)
  comment: string;
  setComment(_: string)
  completionDate: Date;
  setCompletionDate(_: Date)
  composer: string;
  setComposer(_: string)
  contactKeywords: NSArray<string>;
  setContactKeywords(_: NSArray<string>)
  containerDisplayName: string;
  setContainerDisplayName(_: string)
  containerIdentifier: string;
  setContainerIdentifier(_: string)
  containerOrder: number;
  setContainerOrder(_: number)
  containerTitle: string;
  setContainerTitle(_: string)
  contentCreationDate: Date;
  setContentCreationDate(_: Date)
  contentDescription: string;
  setContentDescription(_: string)
  contentModificationDate: Date;
  setContentModificationDate(_: Date)
  contentRating: number;
  setContentRating(_: number)
  contentSources: NSArray<string>;
  setContentSources(_: NSArray<string>)
  contentType: string;
  setContentType(_: string)
  contentTypeTree: NSArray<string>;
  setContentTypeTree(_: NSArray<string>)
  contentURL: URL;
  setContentURL(_: URL)
  contributors: NSArray<string>;
  setContributors(_: NSArray<string>)
  copyright: string;
  setCopyright(_: string)
  country: string;
  setCountry(_: string)
  coverage: NSArray<string>;
  setCoverage(_: NSArray<string>)
  creator: string;
  setCreator(_: string)
  deliveryType: number;
  setDeliveryType(_: number)
  director: string;
  setDirector(_: string)
  displayName: string;
  setDisplayName(_: string)
  domainIdentifier: string;
  setDomainIdentifier(_: string)
  downloadedDate: Date;
  setDownloadedDate(_: Date)
  dueDate: Date;
  setDueDate(_: Date)
  duration: number;
  setDuration(_: number)
  editors: NSArray<string>;
  setEditors(_: NSArray<string>)
  emailAddresses: NSArray<string>;
  setEmailAddresses(_: NSArray<string>)
  emailHeaders: NSDictionary<string, NSArray<any>>;
  setEmailHeaders(_: NSDictionary<string, NSArray<any>>)
  encodingApplications: NSArray<string>;
  setEncodingApplications(_: NSArray<string>)
  endDate: Date;
  setEndDate(_: Date)
  exposureMode: number;
  setExposureMode(_: number)
  exposureProgram: string;
  setExposureProgram(_: string)
  exposureTime: number;
  setExposureTime(_: number)
  exposureTimeString: string;
  setExposureTimeString(_: string)
  fNumber: number;
  setFNumber(_: number)
  fileSize: number;
  setFileSize(_: number)
  isFlashOn: number;
  setFlashOn(_: number)
  focalLength: number;
  setFocalLength(_: number)
  isFocalLength35mm: number;
  setFocalLength35mm(_: number)
  fontNames: NSArray<string>;
  setFontNames(_: NSArray<string>)
  fullyFormattedAddress: string;
  setFullyFormattedAddress(_: string)
  isGeneralMIDISequence: number;
  setGeneralMIDISequence(_: number)
  genre: string;
  setGenre(_: string)
  hasAlphaChannel: number;
  setHasAlphaChannel(_: number)
  headline: string;
  setHeadline(_: string)
  hiddenAdditionalRecipients: NSArray<CSPerson>;
  setHiddenAdditionalRecipients(_: NSArray<CSPerson>)
  identifier: string;
  setIdentifier(_: string)
  imageDirection: number;
  setImageDirection(_: number)
  importantDates: NSArray<Date>;
  setImportantDates(_: NSArray<Date>)
  information: string;
  setInformation(_: string)
  instantMessageAddresses: NSArray<string>;
  setInstantMessageAddresses(_: NSArray<string>)
  instructions: string;
  setInstructions(_: string)
  keySignature: string;
  setKeySignature(_: string)
  keywords: NSArray<string>;
  setKeywords(_: NSArray<string>)
  kind: string;
  setKind(_: string)
  languages: NSArray<string>;
  setLanguages(_: NSArray<string>)
  lastUsedDate: Date;
  setLastUsedDate(_: Date)
  latitude: number;
  setLatitude(_: number)
  layerNames: NSArray<string>;
  setLayerNames(_: NSArray<string>)
  lensModel: string;
  setLensModel(_: string)
  isLikelyJunk: number;
  setLikelyJunk(_: number)
  isLocal: number;
  setLocal(_: number)
  longitude: number;
  setLongitude(_: number)
  lyricist: string;
  setLyricist(_: string)
  mailboxIdentifiers: NSArray<string>;
  setMailboxIdentifiers(_: NSArray<string>)
  maxAperture: number;
  setMaxAperture(_: number)
  mediaTypes: NSArray<string>;
  setMediaTypes(_: NSArray<string>)
  metadataModificationDate: Date;
  setMetadataModificationDate(_: Date)
  meteringMode: string;
  setMeteringMode(_: string)
  musicalGenre: string;
  setMusicalGenre(_: string)
  musicalInstrumentCategory: string;
  setMusicalInstrumentCategory(_: string)
  musicalInstrumentName: string;
  setMusicalInstrumentName(_: string)
  namedLocation: string;
  setNamedLocation(_: string)
  organizations: NSArray<string>;
  setOrganizations(_: NSArray<string>)
  orientation: number;
  setOrientation(_: number)
  originalFormat: string;
  setOriginalFormat(_: string)
  originalSource: string;
  setOriginalSource(_: string)
  pageCount: number;
  setPageCount(_: number)
  pageHeight: number;
  setPageHeight(_: number)
  pageWidth: number;
  setPageWidth(_: number)
  participants: NSArray<string>;
  setParticipants(_: NSArray<string>)
  path: string;
  setPath(_: string)
  performers: NSArray<string>;
  setPerformers(_: NSArray<string>)
  phoneNumbers: NSArray<string>;
  setPhoneNumbers(_: NSArray<string>)
  pixelCount: number;
  setPixelCount(_: number)
  pixelHeight: number;
  setPixelHeight(_: number)
  pixelWidth: number;
  setPixelWidth(_: number)
  playCount: number;
  setPlayCount(_: number)
  postalCode: string;
  setPostalCode(_: string)
  primaryRecipients: NSArray<CSPerson>;
  setPrimaryRecipients(_: NSArray<CSPerson>)
  producer: string;
  setProducer(_: string)
  profileName: string;
  setProfileName(_: string)
  projects: NSArray<string>;
  setProjects(_: NSArray<string>)
  providerDataTypeIdentifiers: NSArray<string>;
  setProviderDataTypeIdentifiers(_: NSArray<string>)
  providerFileTypeIdentifiers: NSArray<string>;
  setProviderFileTypeIdentifiers(_: NSArray<string>)
  providerInPlaceFileTypeIdentifiers: NSArray<string>;
  setProviderInPlaceFileTypeIdentifiers(_: NSArray<string>)
  publishers: NSArray<string>;
  setPublishers(_: NSArray<string>)
  rankingHint: number;
  setRankingHint(_: number)
  rating: number;
  setRating(_: number)
  ratingDescription: string;
  setRatingDescription(_: string)
  recipientAddresses: NSArray<string>;
  setRecipientAddresses(_: NSArray<string>)
  recipientEmailAddresses: NSArray<string>;
  setRecipientEmailAddresses(_: NSArray<string>)
  recipientNames: NSArray<string>;
  setRecipientNames(_: NSArray<string>)
  recordingDate: Date;
  setRecordingDate(_: Date)
  isRedEyeOn: number;
  setRedEyeOn(_: number)
  relatedUniqueIdentifier: string;
  setRelatedUniqueIdentifier(_: string)
  resolutionHeightDPI: number;
  setResolutionHeightDPI(_: number)
  resolutionWidthDPI: number;
  setResolutionWidthDPI(_: number)
  rights: string;
  setRights(_: string)
  role: string;
  setRole(_: string)
  securityMethod: string;
  setSecurityMethod(_: string)
  speed: number;
  setSpeed(_: number)
  startDate: Date;
  setStartDate(_: Date)
  stateOrProvince: string;
  setStateOrProvince(_: string)
  isStreamable: number;
  setStreamable(_: number)
  subThoroughfare: string;
  setSubThoroughfare(_: string)
  subject: string;
  setSubject(_: string)
  supportsNavigation: number;
  setSupportsNavigation(_: number)
  supportsPhoneCall: number;
  setSupportsPhoneCall(_: number)
  tempo: number;
  setTempo(_: number)
  textContent: string;
  setTextContent(_: string)
  theme: string;
  setTheme(_: string)
  thoroughfare: string;
  setThoroughfare(_: string)
  thumbnailData: Data;
  setThumbnailData(_: Data)
  thumbnailURL: URL;
  setThumbnailURL(_: URL)
  timeSignature: string;
  setTimeSignature(_: string)
  timestamp: Date;
  setTimestamp(_: Date)
  title: string;
  setTitle(_: string)
  totalBitRate: number;
  setTotalBitRate(_: number)
  isUserCreated: number;
  setUserCreated(_: number)
  isUserCurated: number;
  setUserCurated(_: number)
  isUserOwned: number;
  setUserOwned(_: number)
  version: string;
  setVersion(_: string)
  videoBitRate: number;
  setVideoBitRate(_: number)
  weakRelatedUniqueIdentifier: string;
  setWeakRelatedUniqueIdentifier(_: string)
  whiteBalance: number;
  setWhiteBalance(_: number)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithItemContentType(itemContentType: string): this;
  setValueForCustomKey(_?: NSSecureCoding, forCustomKey: CSCustomAttributeKey): void;
  valueForCustomKey(_: CSCustomAttributeKey): NSSecureCoding;
}

declare var CoreSpotlightVersionNumber: number;

declare var CoreSpotlightVersionString: number;

enum CSIndexErrorCode {
    UnknownError = -1,
    IndexUnavailableError = -1000,
    InvalidItemError = -1001,
    InvalidClientStateError = -1002,
    RemoteConnectionError = -1003,
    QuotaExceeded = -1004,
    IndexingUnsupported = -1005
}

enum CSSearchQueryErrorCode {
    Unknown = -2000,
    IndexUnreachable = -2001,
    InvalidQuery = -2002,
    Cancelled = -2003
}

