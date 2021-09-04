
declare class GKAchievement extends NSObject implements NSCoding, NSSecureCoding {

	static loadAchievementsWithCompletionHandler(_?: (p1: NSArray<GKAchievement>, p2: NSError) => void): void;

	static reportAchievementsWithCompletionHandler(_: NSArray<GKAchievement>, withCompletionHandler?: (p1: NSError) => void): void;

	static reportAchievementsWithEligibleChallengesWithCompletionHandler(_: NSArray<GKAchievement>, withEligibleChallenges: NSArray<GKChallenge>, withCompletionHandler?: (p1: NSError) => void): void;

	static resetAchievementsWithCompletionHandler(_?: (p1: NSError) => void): void;

	readonly isCompleted: boolean;

	setIdentifier(_: string)

	identifier: string;

	readonly lastReportedDate: Date;

	setPercentComplete(_: number)

	percentComplete: number;

	readonly player: GKPlayer;

	setShowsCompletionBanner(_: boolean)

	showsCompletionBanner: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(identifier: string);

	static create(identifier: string, player: GKPlayer);

	challengeComposeControllerWithMessagePlayersCompletionHandler(_?: string, players: NSArray<GKPlayer>, completionHandler?: (p1: NSViewController, p2: boolean, p3: NSArray<string>) => void): NSViewController;

	encodeWithCoder(_: NSCoder): void;

	selectChallengeablePlayersWithCompletionHandler(_: NSArray<GKPlayer>, withCompletionHandler?: (p1: NSArray<GKPlayer>, p2: NSError) => void): void;
}

declare class GKAchievementChallenge extends GKChallenge {

	readonly achievement: GKAchievement;
}

declare class GKAchievementDescription extends NSObject implements NSCoding, NSSecureCoding {

	static incompleteAchievementImage(): NSImage;

	static loadAchievementDescriptionsWithCompletionHandler(_?: (p1: NSArray<GKAchievementDescription>, p2: NSError) => void): void;

	static placeholderCompletedAchievementImage(): NSImage;

	readonly achievedDescription: string;

	readonly groupIdentifier: string;

	readonly isHidden: boolean;

	readonly identifier: string;

	readonly image: NSImage;

	readonly maximumPoints: number;

	readonly isReplayable: boolean;

	readonly title: string;

	readonly unachievedDescription: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	loadImageWithCompletionHandler(_?: (p1: NSImage, p2: NSError) => void): void;
}

enum GKAuthenticationType {

	AuthenticatingWithoutUI = 0,

	AuthenticatingWithGreenBuddyUI = 1,

	AuthenticatingWithAuthKitInvocation = 2
}


declare class GKBasePlayer extends NSObject {

	readonly displayName: string;

	readonly playerID: string;
}

declare class GKChallenge extends NSObject implements NSCoding, NSSecureCoding {

	static loadReceivedChallengesWithCompletionHandler(_?: (p1: NSArray<GKChallenge>, p2: NSError) => void): void;

	readonly completionDate: Date;

	readonly issueDate: Date;

	readonly issuingPlayer: GKPlayer;

	readonly message: string;

	readonly receivingPlayer: GKPlayer;

	readonly state: GKChallengeState;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	decline(): void;

	encodeWithCoder(_: NSCoder): void;
}

interface GKChallengeListener extends NSObjectProtocol {

	playerDidCompleteChallengeIssuedByFriend?(_: GKPlayer, didCompleteChallenge: GKChallenge, issuedByFriend: GKPlayer): void;

	playerDidReceiveChallenge?(_: GKPlayer, didReceiveChallenge: GKChallenge): void;

	playerIssuedChallengeWasCompletedByFriend?(_: GKPlayer, issuedChallengeWasCompleted: GKChallenge, byFriend: GKPlayer): void;

	playerWantsToPlayChallenge?(_: GKPlayer, wantsToPlayChallenge: GKChallenge): void;
}
declare var GKChallengeListener: {

	prototype: GKChallengeListener;
};

enum GKChallengeState {

	Invalid = 0,

	Pending = 1,

	Completed = 2,

	Declined = 3
}


interface GKChallengesViewControllerDelegate {
}
declare var GKChallengesViewControllerDelegate: {

	prototype: GKChallengesViewControllerDelegate;
};

enum GKConnectionState {

	NotConnected = 0,

	Connected = 1
}


declare class GKDialogController extends NSResponder {

	static sharedDialogController(): GKDialogController;

	setParentWindow(_: NSWindow)

	parentWindow: NSWindow;

	dismiss(_: any): void;

	presentViewController(_: NSViewController): boolean;
}

enum GKErrorCode {

	Unknown = 1,

	Cancelled = 2,

	CommunicationsFailure = 3,

	UserDenied = 4,

	InvalidCredentials = 5,

	NotAuthenticated = 6,

	AuthenticationInProgress = 7,

	InvalidPlayer = 8,

	ScoreNotSet = 9,

	ParentalControlsBlocked = 10,

	PlayerStatusExceedsMaximumLength = 11,

	PlayerStatusInvalid = 12,

	MatchRequestInvalid = 13,

	Underage = 14,

	GameUnrecognized = 15,

	NotSupported = 16,

	InvalidParameter = 17,

	UnexpectedConnection = 18,

	ChallengeInvalid = 19,

	TurnBasedMatchDataTooLarge = 20,

	TurnBasedTooManySessions = 21,

	TurnBasedInvalidParticipant = 22,

	TurnBasedInvalidTurn = 23,

	TurnBasedInvalidState = 24,

	InvitationsDisabled = 25,

	PlayerPhotoFailure = 26,

	UbiquityContainerUnavailable = 27,

	MatchNotConnected = 28,

	GameSessionRequestInvalid = 29,

	RestrictedToAutomatch = 30,

	APINotAvailable = 31
}


declare var GKErrorDomain: string;

declare var GKExchangeTimeoutDefault: number;

declare var GKExchangeTimeoutNone: number;

interface GKGameCenterControllerDelegate extends NSObjectProtocol {

	gameCenterViewControllerDidFinish(_: GKGameCenterViewController): void;
}
declare var GKGameCenterControllerDelegate: {

	prototype: GKGameCenterControllerDelegate;
};

declare class GKGameCenterViewController extends NSViewController implements GKViewController {

	setGameCenterDelegate(_: GKGameCenterControllerDelegate)

	gameCenterDelegate: GKGameCenterControllerDelegate;

	setLeaderboardIdentifier(_: string)

	leaderboardIdentifier: string;

	setLeaderboardTimeScope(_: GKLeaderboardTimeScope)

	leaderboardTimeScope: GKLeaderboardTimeScope;

	setViewState(_: GKGameCenterViewControllerState)

	viewState: GKGameCenterViewControllerState;
}

enum GKGameCenterViewControllerState {

	Default = -1,

	Leaderboards = 0,

	Achievements = 1,

	Challenges = 2
}


declare class GKInvite extends NSObject {

	readonly isHosted: boolean;

	readonly playerAttributes: number;

	readonly playerGroup: number;

	readonly sender: GKPlayer;
}

interface GKInviteEventListener {

	playerDidAcceptInvite?(_: GKPlayer, didAcceptInvite: GKInvite): void;

	playerDidRequestMatchWithRecipients?(_: GKPlayer, didRequestMatchWithRecipients: NSArray<GKPlayer>): void;
}
declare var GKInviteEventListener: {

	prototype: GKInviteEventListener;
};

enum GKInviteRecipientResponse {

	InviteRecipientResponseAccepted = 0,

	InviteRecipientResponseDeclined = 1,

	InviteRecipientResponseFailed = 2,

	InviteRecipientResponseIncompatible = 3,

	InviteRecipientResponseUnableToConnect = 4,

	InviteRecipientResponseNoAnswer = 5,

	InviteeResponseAccepted = 0,

	InviteeResponseDeclined = 1,

	InviteeResponseFailed = 2,

	InviteeResponseIncompatible = 3,

	InviteeResponseUnableToConnect = 4,

	InviteeResponseNoAnswer = 5
}


declare class GKLeaderboard extends NSObject {

	static loadLeaderboardsWithCompletionHandler(_?: (p1: NSArray<GKLeaderboard>, p2: NSError) => void): void;

	readonly groupIdentifier: string;

	setIdentifier(_: string)

	identifier: string;

	readonly isLoading: boolean;

	readonly localPlayerScore: GKScore;

	readonly maxRange: number;

	setPlayerScope(_: GKLeaderboardPlayerScope)

	playerScope: GKLeaderboardPlayerScope;

	setRange(_: NSRange)

	range: NSRange;

	readonly scores: NSArray<GKScore>;

	setTimeScope(_: GKLeaderboardTimeScope)

	timeScope: GKLeaderboardTimeScope;

	readonly title: string;

	static create(players: NSArray<GKPlayer> | GKPlayer[]);

	loadImageWithCompletionHandler(_?: (p1: NSImage, p2: NSError) => void): void;

	loadScoresWithCompletionHandler(_?: (p1: NSArray<GKScore>, p2: NSError) => void): void;
}

enum GKLeaderboardPlayerScope {

	Global = 0,

	FriendsOnly = 1
}


declare class GKLeaderboardSet extends NSObject implements NSCoding, NSSecureCoding {

	static loadLeaderboardSetsWithCompletionHandler(_?: (p1: NSArray<GKLeaderboardSet>, p2: NSError) => void): void;

	readonly groupIdentifier: string;

	setIdentifier(_: string)

	identifier: string;

	readonly title: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;

	loadImageWithCompletionHandler(_?: (p1: NSImage, p2: NSError) => void): void;

	loadLeaderboardsWithCompletionHandler(_?: (p1: NSArray<GKLeaderboard>, p2: NSError) => void): void;
}

enum GKLeaderboardTimeScope {

	Today = 0,

	Week = 1,

	AllTime = 2
}


declare class GKLocalPlayer extends GKPlayer implements GKSavedGameListener {

	static anonymousGuestPlayerWithIdentifier(_: string): GKLocalPlayer; // inherited from GKPlayer

	setAuthenticateHandler(_: (p1: NSViewController, p2: NSError) => void)

	authenticateHandler: (p1: NSViewController, p2: NSError) => void;

	readonly isAuthenticated: boolean;

	readonly isMultiplayerGamingRestricted: boolean;

	readonly isUnderage: boolean;

	static local(): GKLocalPlayer;

	static localPlayer(): GKLocalPlayer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	deleteSavedGamesWithNameCompletionHandler(_: string, completionHandler?: (p1: NSError) => void): void;

	fetchItemsForIdentityVerificationSignature(_?: (p1: NSURL, p2: NSData, p3: NSData, p4: number, p5: NSError) => void): void;

	fetchSavedGamesWithCompletionHandler(_?: (p1: NSArray<GKSavedGame>, p2: NSError) => void): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	loadChallengableFriendsWithCompletionHandler(_?: (p1: NSArray<GKPlayer>, p2: NSError) => void): void;

	loadDefaultLeaderboardIdentifierWithCompletionHandler(_?: (p1: string, p2: NSError) => void): void;

	loadRecentPlayersWithCompletionHandler(_?: (p1: NSArray<GKPlayer>, p2: NSError) => void): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	playerDidModifySavedGame(_: GKPlayer, didModifySavedGame: GKSavedGame): void;

	playerHasConflictingSavedGames(_: GKPlayer, hasConflictingSavedGames: NSArray<GKSavedGame>): void;

	registerListener(_: GKLocalPlayerListener): void;

	resolveConflictingSavedGamesWithDataCompletionHandler(_: NSArray<GKSavedGame>, withData: NSData, completionHandler?: (p1: NSArray<GKSavedGame>, p2: NSError) => void): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	saveGameDataWithNameCompletionHandler(_: NSData, withName: string, completionHandler?: (p1: GKSavedGame, p2: NSError) => void): void;

	self(): this;

	setDefaultLeaderboardIdentifierCompletionHandler(_: string, completionHandler?: (p1: NSError) => void): void;

	unregisterAllListeners(): void;

	unregisterListener(_: GKLocalPlayerListener): void;
}

interface GKLocalPlayerListener extends GKChallengeListener, GKInviteEventListener, GKSavedGameListener, GKTurnBasedEventListener {
}
declare var GKLocalPlayerListener: {

	prototype: GKLocalPlayerListener;
};

declare class GKMatch extends NSObject {

	setDelegate(_: GKMatchDelegate)

	delegate: GKMatchDelegate;

	readonly expectedPlayerCount: number;

	readonly players: NSArray<GKPlayer>;

	chooseBestHostingPlayerWithCompletionHandler(_?: (p1: GKPlayer) => void): void;

	disconnect(): void;

	rematchWithCompletionHandler(_?: (p1: GKMatch, p2: NSError) => void): void;

	sendDataToPlayersDataModeError(toPlayers: NSData, dataMode: NSArray<GKPlayer>, error: GKMatchSendDataMode): boolean;

	sendDataToAllPlayersWithDataModeError(withDataMode: NSData, error: GKMatchSendDataMode): boolean;

	voiceChatWithName(_: string): GKVoiceChat;
}

interface GKMatchDelegate extends NSObjectProtocol {

	matchDidFailWithError?(_: GKMatch, didFailWithError?: NSError): void;

	matchDidReceiveDataForRecipientFromRemotePlayer?(_: GKMatch, didReceiveData: NSData, forRecipient: GKPlayer, fromRemotePlayer: GKPlayer): void;

	matchDidReceiveDataFromRemotePlayer?(_: GKMatch, didReceiveData: NSData, fromRemotePlayer: GKPlayer): void;

	matchPlayerDidChangeConnectionState?(_: GKMatch, player: GKPlayer, didChangeConnectionState: GKPlayerConnectionState): void;

	matchShouldReinviteDisconnectedPlayer?(_: GKMatch, shouldReinviteDisconnectedPlayer: GKPlayer): boolean;
}
declare var GKMatchDelegate: {

	prototype: GKMatchDelegate;
};

declare class GKMatchRequest extends NSObject {

	static maxPlayersAllowedForMatchOfType(_: GKMatchType): number;

	setDefaultNumberOfPlayers(_: number)

	defaultNumberOfPlayers: number;

	setInviteMessage(_: string)

	inviteMessage: string;

	setMaxPlayers(_: number)

	maxPlayers: number;

	setMinPlayers(_: number)

	minPlayers: number;

	setPlayerAttributes(_: number)

	playerAttributes: number;

	setPlayerGroup(_: number)

	playerGroup: number;

	setRecipientResponseHandler(_: (p1: GKPlayer, p2: GKInviteRecipientResponse) => void)

	recipientResponseHandler: (p1: GKPlayer, p2: GKInviteRecipientResponse) => void;

	setRecipients(_: NSArray<GKPlayer>)

	recipients: NSArray<GKPlayer>;

	setRestrictToAutomatch(_: boolean)

	restrictToAutomatch: boolean;
}

enum GKMatchSendDataMode {

	Reliable = 0,

	Unreliable = 1
}


enum GKMatchType {

	PeerToPeer = 0,

	Hosted = 1,

	TurnBased = 2
}


declare class GKMatchmaker extends NSObject {

	static sharedMatchmaker(): GKMatchmaker;

	addPlayersToMatchMatchRequestCompletionHandler(_: GKMatch, matchRequest: GKMatchRequest, completionHandler?: (p1: NSError) => void): void;

	cancel(): void;

	cancelPendingInviteToPlayer(_: GKPlayer): void;

	findMatchForRequestWithCompletionHandler(_: GKMatchRequest, withCompletionHandler?: (p1: GKMatch, p2: NSError) => void): void;

	findPlayersForHostedRequestWithCompletionHandler(_: GKMatchRequest, withCompletionHandler?: (p1: NSArray<GKPlayer>, p2: NSError) => void): void;

	finishMatchmakingForMatch(_: GKMatch): void;

	matchForInviteCompletionHandler(_: GKInvite, completionHandler?: (p1: GKMatch, p2: NSError) => void): void;

	queryActivityWithCompletionHandler(_?: (p1: number, p2: NSError) => void): void;

	queryPlayerGroupActivityWithCompletionHandler(_: number, withCompletionHandler?: (p1: number, p2: NSError) => void): void;

	startBrowsingForNearbyPlayersWithHandler(_?: (p1: GKPlayer, p2: boolean) => void): void;

	stopBrowsingForNearbyPlayers(): void;
}

declare class GKMatchmakerViewController extends NSViewController implements GKViewController {

	setHosted(_: boolean)

	isHosted: boolean;

	readonly matchRequest: GKMatchRequest;

	setMatchmakerDelegate(_: GKMatchmakerViewControllerDelegate)

	matchmakerDelegate: GKMatchmakerViewControllerDelegate;

	static create(invite: GKInvite);

	static create(matchRequest: GKMatchRequest);

	addPlayersToMatch(_: GKMatch): void;

	setHostedPlayerDidConnect(_: GKPlayer, didConnect: boolean): void;
}

interface GKMatchmakerViewControllerDelegate extends NSObjectProtocol {

	matchmakerViewControllerDidFailWithError(_: GKMatchmakerViewController, didFailWithError: NSError): void;

	matchmakerViewControllerDidFindHostedPlayers?(_: GKMatchmakerViewController, didFindHostedPlayers: NSArray<GKPlayer>): void;

	matchmakerViewControllerDidFindMatch?(_: GKMatchmakerViewController, didFindMatch: GKMatch): void;

	matchmakerViewControllerHostedPlayerDidAccept?(_: GKMatchmakerViewController, hostedPlayerDidAccept: GKPlayer): void;

	matchmakerViewControllerWasCancelled(_: GKMatchmakerViewController): void;
}
declare var GKMatchmakerViewControllerDelegate: {

	prototype: GKMatchmakerViewControllerDelegate;
};

declare class GKNotificationBanner extends NSObject {

	static showBannerWithTitleMessageCompletionHandler(_?: string, message?: string, completionHandler?: () => void): void;

	static showBannerWithTitleMessageDurationCompletionHandler(_?: string, message?: string, duration: number, completionHandler?: () => void): void;
}

enum GKPhotoSize {

	Small = 0,

	Normal = 1
}


declare class GKPlayer extends GKBasePlayer {

	static anonymousGuestPlayerWithIdentifier(_: string): GKPlayer;

	static loadPlayersForIdentifiersWithCompletionHandler(_: NSArray<string>, withCompletionHandler?: (p1: NSArray<GKPlayer>, p2: NSError) => void): void;

	readonly alias: string;

	readonly gamePlayerID: string;

	readonly guestIdentifier: string;

	readonly teamPlayerID: string;

	loadPhotoForSizeWithCompletionHandler(_: GKPhotoSize, withCompletionHandler?: (p1: NSImage, p2: NSError) => void): void;

	scopedIDsArePersistent(): boolean;
}

declare var GKPlayerAuthenticationDidChangeNotificationName: string;

enum GKPlayerConnectionState {

	StateUnknown = 0,

	StateConnected = 1,

	StateDisconnected = 2
}


declare var GKPlayerDidChangeNotificationName: string;

declare class GKSavedGame extends NSObject implements NSCopying {

	readonly deviceName: string;

	readonly modificationDate: Date;

	readonly name: string;

	copyWithZone(_?: any): any;

	loadDataWithCompletionHandler(_?: (p1: NSData, p2: NSError) => void): void;
}

interface GKSavedGameListener extends NSObjectProtocol {

	playerDidModifySavedGame?(_: GKPlayer, didModifySavedGame: GKSavedGame): void;

	playerHasConflictingSavedGames?(_: GKPlayer, hasConflictingSavedGames: NSArray<GKSavedGame>): void;
}
declare var GKSavedGameListener: {

	prototype: GKSavedGameListener;
};

declare class GKScore extends NSObject implements NSCoding, NSSecureCoding {

	static reportScoresWithCompletionHandler(_: NSArray<GKScore>, withCompletionHandler?: (p1: NSError) => void): void;

	static reportScoresWithEligibleChallengesWithCompletionHandler(_: NSArray<GKScore>, withEligibleChallenges: NSArray<GKChallenge>, withCompletionHandler?: (p1: NSError) => void): void;

	setContext(_: number)

	context: number;

	readonly date: Date;

	readonly formattedValue: string;

	setLeaderboardIdentifier(_: string)

	leaderboardIdentifier: string;

	readonly player: GKPlayer;

	readonly rank: number;

	setShouldSetDefaultLeaderboard(_: boolean)

	shouldSetDefaultLeaderboard: boolean;

	setValue(_: number)

	value: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(leaderboardIdentifier: string);

	static create(leaderboardIdentifier: string, player: GKPlayer);

	challengeComposeControllerWithMessagePlayersCompletionHandler(_?: string, players?: NSArray<GKPlayer>, completionHandler?: (p1: NSViewController, p2: boolean, p3: NSArray<string>) => void): NSViewController;

	encodeWithCoder(_: NSCoder): void;
}

declare class GKScoreChallenge extends GKChallenge {

	readonly score: GKScore;
}

declare var GKSessionErrorDomain: string;

enum GKTransportType {

	Unreliable = 0,

	Reliable = 1
}


interface GKTurnBasedEventListener {

	playerDidRequestMatchWithOtherPlayers?(_: GKPlayer, didRequestMatchWithOtherPlayers: NSArray<GKPlayer>): void;

	playerMatchEnded?(_: GKPlayer, matchEnded: GKTurnBasedMatch): void;

	playerReceivedExchangeCancellationForMatch?(_: GKPlayer, receivedExchangeCancellation: GKTurnBasedExchange, forMatch: GKTurnBasedMatch): void;

	playerReceivedExchangeRepliesForCompletedExchangeForMatch?(_: GKPlayer, receivedExchangeReplies: NSArray<GKTurnBasedExchangeReply>, forCompletedExchange: GKTurnBasedExchange, forMatch: GKTurnBasedMatch): void;

	playerReceivedExchangeRequestForMatch?(_: GKPlayer, receivedExchangeRequest: GKTurnBasedExchange, forMatch: GKTurnBasedMatch): void;

	playerReceivedTurnEventForMatchDidBecomeActive?(_: GKPlayer, receivedTurnEventForMatch: GKTurnBasedMatch, didBecomeActive: boolean): void;

	playerWantsToQuitMatch?(_: GKPlayer, wantsToQuitMatch: GKTurnBasedMatch): void;
}
declare var GKTurnBasedEventListener: {

	prototype: GKTurnBasedEventListener;
};

declare class GKTurnBasedExchange extends NSObject {

	readonly completionDate: Date;

	readonly data: NSData;

	readonly exchangeID: string;

	readonly message: string;

	readonly recipients: NSArray<GKTurnBasedParticipant>;

	readonly replies: NSArray<GKTurnBasedExchangeReply>;

	readonly sendDate: Date;

	readonly sender: GKTurnBasedParticipant;

	readonly status: GKTurnBasedExchangeStatus;

	readonly timeoutDate: Date;

	cancelWithLocalizableMessageKeyArgumentsCompletionHandler(_: string, arguments_: NSArray<string>, completionHandler?: (p1: NSError) => void): void;

	replyWithLocalizableMessageKeyArgumentsDataCompletionHandler(_: string, arguments_: NSArray<string>, data: NSData, completionHandler?: (p1: NSError) => void): void;
}

declare class GKTurnBasedExchangeReply extends NSObject {

	readonly data: NSData;

	readonly message: string;

	readonly recipient: GKTurnBasedParticipant;

	readonly replyDate: Date;
}

enum GKTurnBasedExchangeStatus {

	Unknown = 0,

	Active = 1,

	Complete = 2,

	Resolved = 3,

	Canceled = 4
}


declare class GKTurnBasedMatch extends NSObject {

	static findMatchForRequestWithCompletionHandler(_: GKMatchRequest, withCompletionHandler?: (p1: GKTurnBasedMatch, p2: NSError) => void): void;

	static loadMatchWithIDWithCompletionHandler(_: string, withCompletionHandler?: (p1: GKTurnBasedMatch, p2: NSError) => void): void;

	static loadMatchesWithCompletionHandler(_?: (p1: NSArray<GKTurnBasedMatch>, p2: NSError) => void): void;

	readonly activeExchanges: NSArray<GKTurnBasedExchange>;

	readonly completedExchanges: NSArray<GKTurnBasedExchange>;

	readonly creationDate: Date;

	readonly currentParticipant: GKTurnBasedParticipant;

	readonly exchangeDataMaximumSize: number;

	readonly exchangeMaxInitiatedExchangesPerPlayer: number;

	readonly exchanges: NSArray<GKTurnBasedExchange>;

	readonly matchData: NSData;

	readonly matchDataMaximumSize: number;

	readonly matchID: string;

	setMessage(_: string)

	message: string;

	readonly participants: NSArray<GKTurnBasedParticipant>;

	readonly status: GKTurnBasedMatchStatus;

	acceptInviteWithCompletionHandler(_?: (p1: GKTurnBasedMatch, p2: NSError) => void): void;

	declineInviteWithCompletionHandler(_?: (p1: NSError) => void): void;

	endMatchInTurnWithMatchDataCompletionHandler(_: NSData, completionHandler?: (p1: NSError) => void): void;

	endMatchInTurnWithMatchDataScoresAchievementsCompletionHandler(_: NSData, scores?: NSArray<GKScore>, achievements?: NSArray<GKAchievement>, completionHandler?: (p1: NSError) => void): void;

	endTurnWithNextParticipantsTurnTimeoutMatchDataCompletionHandler(_: NSArray<GKTurnBasedParticipant>, turnTimeout: number, matchData: NSData, completionHandler?: (p1: NSError) => void): void;

	loadMatchDataWithCompletionHandler(_?: (p1: NSData, p2: NSError) => void): void;

	participantQuitInTurnWithOutcomeNextParticipantsTurnTimeoutMatchDataCompletionHandler(_: GKTurnBasedMatchOutcome, nextParticipants: NSArray<GKTurnBasedParticipant>, turnTimeout: number, matchData: NSData, completionHandler?: (p1: NSError) => void): void;

	participantQuitOutOfTurnWithOutcomeWithCompletionHandler(_: GKTurnBasedMatchOutcome, withCompletionHandler?: (p1: NSError) => void): void;

	rematchWithCompletionHandler(_?: (p1: GKTurnBasedMatch, p2: NSError) => void): void;

	removeWithCompletionHandler(_?: (p1: NSError) => void): void;

	saveCurrentTurnWithMatchDataCompletionHandler(_: NSData, completionHandler?: (p1: NSError) => void): void;

	saveMergedMatchDataWithResolvedExchangesCompletionHandler(_: NSData, withResolvedExchanges: NSArray<GKTurnBasedExchange>, completionHandler?: (p1: NSError) => void): void;

	sendExchangeToParticipantsDataLocalizableMessageKeyArgumentsTimeoutCompletionHandler(_: NSArray<GKTurnBasedParticipant>, data: NSData, localizableMessageKey: string, arguments_: NSArray<string>, timeout: number, completionHandler?: (p1: GKTurnBasedExchange, p2: NSError) => void): void;

	sendReminderToParticipantsLocalizableMessageKeyArgumentsCompletionHandler(_: NSArray<GKTurnBasedParticipant>, localizableMessageKey: string, arguments_: NSArray<string>, completionHandler?: (p1: NSError) => void): void;

	setLocalizableMessageWithKeyArguments(_: string, arguments_?: NSArray<string>): void;
}

enum GKTurnBasedMatchOutcome {

	None = 0,

	Quit = 1,

	Won = 2,

	Lost = 3,

	Tied = 4,

	TimeExpired = 5,

	First = 6,

	Second = 7,

	Third = 8,

	Fourth = 9,

	CustomRange = 16711680
}


enum GKTurnBasedMatchStatus {

	Unknown = 0,

	Open = 1,

	Ended = 2,

	Matching = 3
}


declare class GKTurnBasedMatchmakerViewController extends NSViewController implements GKViewController {

	setShowExistingMatches(_: boolean)

	showExistingMatches: boolean;

	setTurnBasedMatchmakerDelegate(_: GKTurnBasedMatchmakerViewControllerDelegate)

	turnBasedMatchmakerDelegate: GKTurnBasedMatchmakerViewControllerDelegate;

	static create(matchRequest: GKMatchRequest);
}

interface GKTurnBasedMatchmakerViewControllerDelegate extends NSObjectProtocol {

	turnBasedMatchmakerViewControllerDidFailWithError(_: GKTurnBasedMatchmakerViewController, didFailWithError: NSError): void;

	turnBasedMatchmakerViewControllerWasCancelled(_: GKTurnBasedMatchmakerViewController): void;
}
declare var GKTurnBasedMatchmakerViewControllerDelegate: {

	prototype: GKTurnBasedMatchmakerViewControllerDelegate;
};

declare class GKTurnBasedParticipant extends NSObject {

	readonly lastTurnDate: Date;

	setMatchOutcome(_: GKTurnBasedMatchOutcome)

	matchOutcome: GKTurnBasedMatchOutcome;

	readonly player: GKPlayer;

	readonly status: GKTurnBasedParticipantStatus;

	readonly timeoutDate: Date;
}

enum GKTurnBasedParticipantStatus {

	Unknown = 0,

	Invited = 1,

	Declined = 2,

	Matching = 3,

	Active = 4,

	Done = 5
}


declare var GKTurnTimeoutDefault: number;

declare var GKTurnTimeoutNone: number;

interface GKViewController {
}
declare var GKViewController: {

	prototype: GKViewController;
};

declare class GKVoiceChat extends NSObject {

	static isVoIPAllowed(): boolean;

	setActive(_: boolean)

	isActive: boolean;

	readonly name: string;

	setPlayerVoiceChatStateDidChangeHandler(_: (p1: GKPlayer, p2: GKVoiceChatPlayerState) => void)

	playerVoiceChatStateDidChangeHandler: (p1: GKPlayer, p2: GKVoiceChatPlayerState) => void;

	readonly players: NSArray<GKPlayer>;

	setVolume(_: number)

	volume: number;

	setPlayerMuted(_: GKPlayer, muted: boolean): void;

	start(): void;

	stop(): void;
}

enum GKVoiceChatPlayerState {

	Connected = 0,

	Disconnected = 1,

	Speaking = 2,

	Silent = 3,

	Connecting = 4
}


declare var GKVoiceChatServiceErrorDomain: string;
