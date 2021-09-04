
declare class ITLibAlbum extends NSObject {

	readonly albumArtist: string;

	readonly artist: ITLibArtist;

	readonly isCompilation: boolean;

	readonly discCount: number;

	readonly discNumber: number;

	readonly isGapless: boolean;

	readonly persistentID: number;

	readonly rating: number;

	readonly isRatingComputed: boolean;

	readonly sortAlbumArtist: string;

	readonly sortTitle: string;

	readonly title: string;

	readonly trackCount: number;
}

declare class ITLibArtist extends NSObject {

	readonly name: string;

	readonly persistentID: number;

	readonly sortName: string;
}

declare class ITLibArtwork extends NSObject {

	readonly image: NSImage;

	readonly imageData: NSData;

	readonly imageDataFormat: ITLibArtworkFormat;
}

enum ITLibArtworkFormat {

	None = 0,

	Bitmap = 1,

	JPEG = 2,

	JPEG2000 = 3,

	GIF = 4,

	PNG = 5,

	BMP = 6,

	TIFF = 7,

	PICT = 8
}


enum ITLibDistinguishedPlaylistKind {

	KindNone = 0,

	KindMovies = 1,

	KindTVShows = 2,

	KindMusic = 3,

	KindAudiobooks = 4,

	KindBooks = 4,

	KindRingtones = 5,

	KindPodcasts = 7,

	KindVoiceMemos = 14,

	KindPurchases = 16,

	KindiTunesU = 26,

	Kind90sMusic = 42,

	KindMyTopRated = 43,

	KindTop25MostPlayed = 44,

	KindRecentlyPlayed = 45,

	KindRecentlyAdded = 46,

	KindMusicVideos = 47,

	KindClassicalMusic = 48,

	KindLibraryMusicVideos = 49,

	KindHomeVideos = 50,

	KindApplications = 51,

	KindLovedSongs = 52,

	KindMusicShowsAndMovies = 53
}


enum ITLibExportFeature {

	None = 0
}


enum ITLibInitOptions {

	None = 0,

	LazyLoadData = 1
}


declare class ITLibMediaEntity extends NSObject {

	readonly persistentID: number;

	enumerateValuesExceptForPropertiesWithUsingBlock(_?: NSSet<string>, usingBlock: (p1: string, p2: any, p3: boolean) => void): void;

	enumerateValuesForPropertiesWithUsingBlock(_?: NSSet<string>, usingBlock: (p1: string, p2: any, p3: boolean) => void): void;

	valueForProperty(_: string): any;
}

declare var ITLibMediaEntityPropertyPersistentID: string;

declare class ITLibMediaItem extends ITLibMediaEntity {

	readonly addedDate: Date;

	readonly album: ITLibAlbum;

	readonly artist: ITLibArtist;

	readonly artwork: ITLibArtwork;

	readonly hasArtworkAvailable: boolean;

	readonly beatsPerMinute: number;

	readonly bitrate: number;

	readonly category: string;

	readonly isCloud: boolean;

	readonly comments: string;

	readonly composer: string;

	readonly contentRating: string;

	readonly isDRMProtected: boolean;

	readonly fileSize: number;

	readonly fileType: number;

	readonly genre: string;

	readonly grouping: string;

	readonly kind: string;

	readonly lastPlayedDate: Date;

	readonly location: NSURL;

	readonly locationType: ITLibMediaItemLocationType;

	readonly lyricsContentRating: ITLibMediaItemLyricsContentRating;

	readonly mediaKind: ITLibMediaItemMediaKind;

	readonly modifiedDate: Date;

	readonly playCount: number;

	readonly playStatus: ITLibMediaItemPlayStatus;

	readonly isPurchased: boolean;

	readonly rating: number;

	readonly isRatingComputed: boolean;

	readonly releaseDate: Date;

	readonly sampleRate: number;

	readonly size: number;

	readonly skipCount: number;

	readonly skipDate: Date;

	readonly sortComposer: string;

	readonly sortTitle: string;

	readonly startTime: number;

	readonly stopTime: number;

	readonly title: string;

	readonly totalTime: number;

	readonly trackNumber: number;

	readonly isUserDisabled: boolean;

	readonly isVideo: boolean;

	readonly videoInfo: ITLibMediaItemVideoInfo;

	readonly voiceOverLanguage: string;

	readonly volumeAdjustment: number;

	readonly volumeNormalizationEnergy: number;

	readonly year: number;
}

enum ITLibMediaItemLocationType {

	Unknown = 0,

	File = 1,

	URL = 2,

	Remote = 3
}


enum ITLibMediaItemLyricsContentRating {

	None = 0,

	Explicit = 1,

	Clean = 2
}


enum ITLibMediaItemMediaKind {

	Unknown = 1,

	Song = 2,

	Movie = 3,

	Podcast = 4,

	Audiobook = 5,

	PDFBooklet = 6,

	MusicVideo = 7,

	TVShow = 8,

	InteractiveBooklet = 9,

	HomeVideo = 12,

	Ringtone = 14,

	DigitalBooklet = 15,

	IOSApplication = 16,

	VoiceMemo = 17,

	iTunesU = 18,

	Book = 19,

	PDFBook = 20,

	AlertTone = 21
}


enum ITLibMediaItemPlayStatus {

	None = 0,

	PartiallyPlayed = 1,

	Unplayed = 2
}


declare var ITLibMediaItemPropertyAddedDate: string;

declare var ITLibMediaItemPropertyAlbumArtist: string;

declare var ITLibMediaItemPropertyAlbumDiscCount: string;

declare var ITLibMediaItemPropertyAlbumDiscNumber: string;

declare var ITLibMediaItemPropertyAlbumIsCompilation: string;

declare var ITLibMediaItemPropertyAlbumIsGapless: string;

declare var ITLibMediaItemPropertyAlbumRating: string;

declare var ITLibMediaItemPropertyAlbumRatingComputed: string;

declare var ITLibMediaItemPropertyAlbumTitle: string;

declare var ITLibMediaItemPropertyAlbumTrackCount: string;

declare var ITLibMediaItemPropertyArtistName: string;

declare var ITLibMediaItemPropertyArtwork: string;

declare var ITLibMediaItemPropertyBeatsPerMinute: string;

declare var ITLibMediaItemPropertyBitRate: string;

declare var ITLibMediaItemPropertyCategory: string;

declare var ITLibMediaItemPropertyComments: string;

declare var ITLibMediaItemPropertyComposer: string;

declare var ITLibMediaItemPropertyContentRating: string;

declare var ITLibMediaItemPropertyDescription: string;

declare var ITLibMediaItemPropertyFileSize: string;

declare var ITLibMediaItemPropertyFileType: string;

declare var ITLibMediaItemPropertyGenre: string;

declare var ITLibMediaItemPropertyGrouping: string;

declare var ITLibMediaItemPropertyHasArtwork: string;

declare var ITLibMediaItemPropertyIsDRMProtected: string;

declare var ITLibMediaItemPropertyIsPurchased: string;

declare var ITLibMediaItemPropertyIsUserDisabled: string;

declare var ITLibMediaItemPropertyIsVideo: string;

declare var ITLibMediaItemPropertyKind: string;

declare var ITLibMediaItemPropertyLastPlayDate: string;

declare var ITLibMediaItemPropertyLocation: string;

declare var ITLibMediaItemPropertyLocationType: string;

declare var ITLibMediaItemPropertyLyricsContentRating: string;

declare var ITLibMediaItemPropertyMediaKind: string;

declare var ITLibMediaItemPropertyModifiedDate: string;

declare var ITLibMediaItemPropertyMovementCount: string;

declare var ITLibMediaItemPropertyMovementName: string;

declare var ITLibMediaItemPropertyMovementNumber: string;

declare var ITLibMediaItemPropertyPlayCount: string;

declare var ITLibMediaItemPropertyPlayStatus: string;

declare var ITLibMediaItemPropertyRating: string;

declare var ITLibMediaItemPropertyRatingComputed: string;

declare var ITLibMediaItemPropertyReleaseDate: string;

declare var ITLibMediaItemPropertySampleRate: string;

declare var ITLibMediaItemPropertySize: string;

declare var ITLibMediaItemPropertySkipDate: string;

declare var ITLibMediaItemPropertySortAlbumArtist: string;

declare var ITLibMediaItemPropertySortAlbumTitle: string;

declare var ITLibMediaItemPropertySortArtistName: string;

declare var ITLibMediaItemPropertySortComposer: string;

declare var ITLibMediaItemPropertySortTitle: string;

declare var ITLibMediaItemPropertyStartTime: string;

declare var ITLibMediaItemPropertyStopTime: string;

declare var ITLibMediaItemPropertyTitle: string;

declare var ITLibMediaItemPropertyTotalTime: string;

declare var ITLibMediaItemPropertyTrackNumber: string;

declare var ITLibMediaItemPropertyUserSkipCount: string;

declare var ITLibMediaItemPropertyVideoEpisode: string;

declare var ITLibMediaItemPropertyVideoEpisodeOrder: string;

declare var ITLibMediaItemPropertyVideoHeight: string;

declare var ITLibMediaItemPropertyVideoIsHD: string;

declare var ITLibMediaItemPropertyVideoSeason: string;

declare var ITLibMediaItemPropertyVideoSeries: string;

declare var ITLibMediaItemPropertyVideoSortSeries: string;

declare var ITLibMediaItemPropertyVideoWidth: string;

declare var ITLibMediaItemPropertyVoiceOverLanguage: string;

declare var ITLibMediaItemPropertyVolumeAdjustment: string;

declare var ITLibMediaItemPropertyVolumeNormalizationEnergy: string;

declare var ITLibMediaItemPropertyWork: string;

declare var ITLibMediaItemPropertyYear: string;

declare class ITLibMediaItemVideoInfo extends NSObject {

	readonly episode: string;

	readonly episodeOrder: number;

	readonly isHD: boolean;

	readonly season: number;

	readonly series: string;

	readonly sortSeries: string;

	readonly videoHeight: number;

	readonly videoWidth: number;
}

declare class ITLibPlaylist extends ITLibMediaEntity {

	readonly isAllItemsPlaylist: boolean;

	readonly distinguishedKind: ITLibDistinguishedPlaylistKind;

	readonly items: NSArray<ITLibMediaItem>;

	readonly kind: ITLibPlaylistKind;

	readonly isMaster: boolean;

	readonly name: string;

	readonly parentID: number;

	readonly isVisible: boolean;
}

enum ITLibPlaylistKind {

	Regular = 0,

	Smart = 1,

	Genius = 2,

	Folder = 3,

	GeniusMix = 4
}


declare var ITLibPlaylistPropertyAllItemsPlaylist: string;

declare var ITLibPlaylistPropertyDistinguisedKind: string;

declare var ITLibPlaylistPropertyItems: string;

declare var ITLibPlaylistPropertyKind: string;

declare var ITLibPlaylistPropertyMaster: string;

declare var ITLibPlaylistPropertyName: string;

declare var ITLibPlaylistPropertyParentPersistentID: string;

declare var ITLibPlaylistPropertyVisible: string;

declare class ITLibrary extends NSObject {

	static libraryWithAPIVersionError(error: string): ITLibrary;

	static libraryWithAPIVersionOptionsError(options: string, error: ITLibInitOptions): ITLibrary;

	readonly allMediaItems: NSArray<ITLibMediaItem>;

	readonly allPlaylists: NSArray<ITLibPlaylist>;

	readonly apiMajorVersion: number;

	readonly apiMinorVersion: number;

	readonly applicationVersion: string;

	readonly features: ITLibExportFeature;

	readonly mediaFolderLocation: NSURL;

	readonly musicFolderLocation: NSURL;

	readonly shouldShowContentRating: boolean;

	static create(APIVersion: string);

	static create(APIVersion: string, options: ITLibInitOptions);

	artworkForMediaFile(_: NSURL): ITLibArtwork;

	reloadData(): boolean;

	unloadData(): void;
}
