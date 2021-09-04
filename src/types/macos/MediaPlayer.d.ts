
declare class MPChangeLanguageOptionCommandEvent extends MPRemoteCommandEvent {

	readonly languageOption: MPNowPlayingInfoLanguageOption;

	readonly setting: MPChangeLanguageOptionSetting;
}

enum MPChangeLanguageOptionSetting {

	None = 0,

	NowPlayingItemOnly = 1,

	Permanent = 2
}


declare class MPChangePlaybackPositionCommand extends MPRemoteCommand {
}

declare class MPChangePlaybackPositionCommandEvent extends MPRemoteCommandEvent {

	readonly positionTime: number;
}

declare class MPChangePlaybackRateCommand extends MPRemoteCommand {

	setSupportedPlaybackRates(_: NSArray<number>)

	supportedPlaybackRates: NSArray<number>;
}

declare class MPChangePlaybackRateCommandEvent extends MPRemoteCommandEvent {

	readonly playbackRate: number;
}

declare class MPChangeRepeatModeCommand extends MPRemoteCommand {

	setCurrentRepeatType(_: MPRepeatType)

	currentRepeatType: MPRepeatType;
}

declare class MPChangeRepeatModeCommandEvent extends MPRemoteCommandEvent {

	readonly preservesRepeatMode: boolean;

	readonly repeatType: MPRepeatType;
}

declare class MPChangeShuffleModeCommand extends MPRemoteCommand {

	setCurrentShuffleType(_: MPShuffleType)

	currentShuffleType: MPShuffleType;
}

declare class MPChangeShuffleModeCommandEvent extends MPRemoteCommandEvent {

	readonly preservesShuffleMode: boolean;

	readonly shuffleType: MPShuffleType;
}

declare class MPContentItem extends NSObject {

	setArtwork(_: MPMediaItemArtwork)

	artwork: MPMediaItemArtwork;

	setContainer(_: boolean)

	isContainer: boolean;

	setExplicitContent(_: boolean)

	isExplicitContent: boolean;

	readonly identifier: string;

	setPlayable(_: boolean)

	isPlayable: boolean;

	setPlaybackProgress(_: number)

	playbackProgress: number;

	setStreamingContent(_: boolean)

	isStreamingContent: boolean;

	setSubtitle(_: string)

	subtitle: string;

	setTitle(_: string)

	title: string;

	static create(identifier: string);
}

enum MPErrorCode {

	Unknown = 0,

	PermissionDenied = 1,

	CloudServiceCapabilityMissing = 2,

	NetworkConnectionFailed = 3,

	NotFound = 4,

	NotSupported = 5,

	Cancelled = 6,

	RequestTimedOut = 7
}


declare var MPErrorDomain: string;

declare class MPFeedbackCommand extends MPRemoteCommand {

	setActive(_: boolean)

	isActive: boolean;

	setLocalizedShortTitle(_: string)

	localizedShortTitle: string;

	setLocalizedTitle(_: string)

	localizedTitle: string;
}

declare class MPFeedbackCommandEvent extends MPRemoteCommandEvent {

	readonly isNegative: boolean;
}

declare var MPLanguageOptionCharacteristicContainsOnlyForcedSubtitles: string;

declare var MPLanguageOptionCharacteristicDescribesMusicAndSound: string;

declare var MPLanguageOptionCharacteristicDescribesVideo: string;

declare var MPLanguageOptionCharacteristicDubbedTranslation: string;

declare var MPLanguageOptionCharacteristicEasyToRead: string;

declare var MPLanguageOptionCharacteristicIsAuxiliaryContent: string;

declare var MPLanguageOptionCharacteristicIsMainProgramContent: string;

declare var MPLanguageOptionCharacteristicLanguageTranslation: string;

declare var MPLanguageOptionCharacteristicTranscribesSpokenDialog: string;

declare var MPLanguageOptionCharacteristicVoiceOverTranslation: string;

declare var MPMediaEntityPropertyPersistentID: string;

declare class MPMediaItemArtwork extends NSObject {

	readonly bounds: CGRect;

	readonly imageCropRect: CGRect;

	static create(boundsSize: CGSize, requestHandler: (p1: CGSize) => NSImage);

	imageWithSize(at: CGSize): NSImage;
}

declare var MPMediaItemPropertyAlbumArtist: string;

declare var MPMediaItemPropertyAlbumArtistPersistentID: string;

declare var MPMediaItemPropertyAlbumPersistentID: string;

declare var MPMediaItemPropertyAlbumTitle: string;

declare var MPMediaItemPropertyAlbumTrackCount: string;

declare var MPMediaItemPropertyAlbumTrackNumber: string;

declare var MPMediaItemPropertyArtist: string;

declare var MPMediaItemPropertyArtistPersistentID: string;

declare var MPMediaItemPropertyArtwork: string;

declare var MPMediaItemPropertyAssetURL: string;

declare var MPMediaItemPropertyBeatsPerMinute: string;

declare var MPMediaItemPropertyBookmarkTime: string;

declare var MPMediaItemPropertyComments: string;

declare var MPMediaItemPropertyComposer: string;

declare var MPMediaItemPropertyComposerPersistentID: string;

declare var MPMediaItemPropertyDateAdded: string;

declare var MPMediaItemPropertyDiscCount: string;

declare var MPMediaItemPropertyDiscNumber: string;

declare var MPMediaItemPropertyGenre: string;

declare var MPMediaItemPropertyGenrePersistentID: string;

declare var MPMediaItemPropertyHasProtectedAsset: string;

declare var MPMediaItemPropertyIsCloudItem: string;

declare var MPMediaItemPropertyIsCompilation: string;

declare var MPMediaItemPropertyIsExplicit: string;

declare var MPMediaItemPropertyLastPlayedDate: string;

declare var MPMediaItemPropertyLyrics: string;

declare var MPMediaItemPropertyMediaType: string;

declare var MPMediaItemPropertyPersistentID: string;

declare var MPMediaItemPropertyPlayCount: string;

declare var MPMediaItemPropertyPlaybackDuration: string;

declare var MPMediaItemPropertyPlaybackStoreID: string;

declare var MPMediaItemPropertyPodcastPersistentID: string;

declare var MPMediaItemPropertyPodcastTitle: string;

declare var MPMediaItemPropertyRating: string;

declare var MPMediaItemPropertyReleaseDate: string;

declare var MPMediaItemPropertySkipCount: string;

declare var MPMediaItemPropertyTitle: string;

declare var MPMediaItemPropertyUserGrouping: string;

enum MPMediaType {

	Music = 1,

	Podcast = 2,

	AudioBook = 4,

	AudioITunesU = 8,

	AnyAudio = 255,

	Movie = 256,

	TVShow = 512,

	VideoPodcast = 1024,

	MusicVideo = 2048,

	VideoITunesU = 4096,

	HomeVideo = 8192,

	AnyVideo = 65280,

	Any = -1
}


declare class MPNowPlayingInfoCenter extends NSObject {

	static defaultCenter(): MPNowPlayingInfoCenter;

	setNowPlayingInfo(_: NSDictionary<string, any>)

	nowPlayingInfo: NSDictionary<string, any>;

	setPlaybackState(_: MPNowPlayingPlaybackState)

	playbackState: MPNowPlayingPlaybackState;
}

declare var MPNowPlayingInfoCollectionIdentifier: string;

declare class MPNowPlayingInfoLanguageOption extends NSObject {

	readonly displayName: string;

	readonly identifier: string;

	readonly languageOptionCharacteristics: NSArray<string>;

	readonly languageOptionType: MPNowPlayingInfoLanguageOptionType;

	readonly languageTag: string;

	static create(type: MPNowPlayingInfoLanguageOptionType, languageTag: string, characteristics: NSArray<string> | string[], displayName: string, identifier: string);

	isAutomaticAudibleLanguageOption(): boolean;

	isAutomaticLegibleLanguageOption(): boolean;
}

declare class MPNowPlayingInfoLanguageOptionGroup extends NSObject {

	readonly allowEmptySelection: boolean;

	readonly defaultLanguageOption: MPNowPlayingInfoLanguageOption;

	readonly languageOptions: NSArray<MPNowPlayingInfoLanguageOption>;

	static create(languageOptions: NSArray<MPNowPlayingInfoLanguageOption> | MPNowPlayingInfoLanguageOption[], defaultLanguageOption: MPNowPlayingInfoLanguageOption, allowEmptySelection: boolean);
}

enum MPNowPlayingInfoLanguageOptionType {

	Audible = 0,

	Legible = 1
}


enum MPNowPlayingInfoMediaType {

	None = 0,

	Audio = 1,

	Video = 2
}


declare var MPNowPlayingInfoPropertyAssetURL: string;

declare var MPNowPlayingInfoPropertyAvailableLanguageOptions: string;

declare var MPNowPlayingInfoPropertyChapterCount: string;

declare var MPNowPlayingInfoPropertyChapterNumber: string;

declare var MPNowPlayingInfoPropertyCurrentLanguageOptions: string;

declare var MPNowPlayingInfoPropertyCurrentPlaybackDate: string;

declare var MPNowPlayingInfoPropertyDefaultPlaybackRate: string;

declare var MPNowPlayingInfoPropertyElapsedPlaybackTime: string;

declare var MPNowPlayingInfoPropertyExternalContentIdentifier: string;

declare var MPNowPlayingInfoPropertyExternalUserProfileIdentifier: string;

declare var MPNowPlayingInfoPropertyIsLiveStream: string;

declare var MPNowPlayingInfoPropertyMediaType: string;

declare var MPNowPlayingInfoPropertyPlaybackProgress: string;

declare var MPNowPlayingInfoPropertyPlaybackQueueCount: string;

declare var MPNowPlayingInfoPropertyPlaybackQueueIndex: string;

declare var MPNowPlayingInfoPropertyPlaybackRate: string;

declare var MPNowPlayingInfoPropertyServiceIdentifier: string;

enum MPNowPlayingPlaybackState {

	Unknown = 0,

	Playing = 1,

	Paused = 2,

	Stopped = 3,

	Interrupted = 4
}


declare class MPRatingCommand extends MPRemoteCommand {

	setMaximumRating(_: number)

	maximumRating: number;

	setMinimumRating(_: number)

	minimumRating: number;
}

declare class MPRatingCommandEvent extends MPRemoteCommandEvent {

	readonly rating: number;
}

declare class MPRemoteCommand extends NSObject {

	setEnabled(_: boolean)

	isEnabled: boolean;

	addTargetAction(_: any, action: string): void;

	addTargetWithHandler(_: (p1: MPRemoteCommandEvent) => MPRemoteCommandHandlerStatus): any;

	removeTarget(_?: any): void;

	removeTargetAction(_: any, action?: string): void;
}

declare class MPRemoteCommandCenter extends NSObject {

	static sharedCommandCenter(): MPRemoteCommandCenter;

	readonly bookmarkCommand: MPFeedbackCommand;

	readonly changePlaybackPositionCommand: MPChangePlaybackPositionCommand;

	readonly changePlaybackRateCommand: MPChangePlaybackRateCommand;

	readonly changeRepeatModeCommand: MPChangeRepeatModeCommand;

	readonly changeShuffleModeCommand: MPChangeShuffleModeCommand;

	readonly disableLanguageOptionCommand: MPRemoteCommand;

	readonly dislikeCommand: MPFeedbackCommand;

	readonly enableLanguageOptionCommand: MPRemoteCommand;

	readonly likeCommand: MPFeedbackCommand;

	readonly nextTrackCommand: MPRemoteCommand;

	readonly pauseCommand: MPRemoteCommand;

	readonly playCommand: MPRemoteCommand;

	readonly previousTrackCommand: MPRemoteCommand;

	readonly ratingCommand: MPRatingCommand;

	readonly seekBackwardCommand: MPRemoteCommand;

	readonly seekForwardCommand: MPRemoteCommand;

	readonly skipBackwardCommand: MPSkipIntervalCommand;

	readonly skipForwardCommand: MPSkipIntervalCommand;

	readonly stopCommand: MPRemoteCommand;

	readonly togglePlayPauseCommand: MPRemoteCommand;
}

declare class MPRemoteCommandEvent extends NSObject {

	readonly command: MPRemoteCommand;

	readonly timestamp: number;
}

enum MPRemoteCommandHandlerStatus {

	Success = 0,

	NoSuchContent = 100,

	NoActionableNowPlayingItem = 110,

	DeviceNotFound = 120,

	CommandFailed = 200
}


enum MPRepeatType {

	Off = 0,

	One = 1,

	All = 2
}


declare class MPSeekCommandEvent extends MPRemoteCommandEvent {

	readonly type: MPSeekCommandEventType;
}

enum MPSeekCommandEventType {

	BeginSeeking = 0,

	EndSeeking = 1
}


enum MPShuffleType {

	Off = 0,

	Items = 1,

	Collections = 2
}


declare class MPSkipIntervalCommand extends MPRemoteCommand {

	setPreferredIntervals(_: NSArray<number>)

	preferredIntervals: NSArray<number>;
}

declare class MPSkipIntervalCommandEvent extends MPRemoteCommandEvent {

	readonly interval: number;
}
