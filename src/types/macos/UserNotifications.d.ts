
enum UNAlertStyle {

	None = 0,

	Banner = 1,

	Alert = 2
}


enum UNAuthorizationOptions {

	Badge = 1,

	Sound = 2,

	Alert = 4,

	CarPlay = 8,

	CriticalAlert = 16,

	ProvidesAppNotificationSettings = 32,

	Provisional = 64,

	Announcement = 128
}


enum UNAuthorizationStatus {

	NotDetermined = 0,

	Denied = 1,

	Authorized = 2,

	Provisional = 3
}


declare class UNCalendarNotificationTrigger extends UNNotificationTrigger {

	static triggerWithDateMatchingComponentsRepeats(_: NSDateComponents, repeats: boolean): UNCalendarNotificationTrigger;

	readonly dateComponents: NSDateComponents;

	nextTriggerDate(): Date;
}

enum UNErrorCode {

	NotificationsNotAllowed = 1,

	AttachmentInvalidURL = 100,

	AttachmentUnrecognizedType = 101,

	AttachmentInvalidFileSize = 102,

	AttachmentNotInDataStore = 103,

	AttachmentMoveIntoDataStoreFailed = 104,

	AttachmentCorrupt = 105,

	NotificationInvalidNoDate = 1400,

	NotificationInvalidNoContent = 1401
}


declare var UNErrorDomain: string;

declare class UNMutableNotificationContent extends UNNotificationContent {

	setAttachments(_: NSArray<UNNotificationAttachment>)

	attachments: NSArray<UNNotificationAttachment>;

	setBadge(_: number)

	badge: number;

	setBody(_: string)

	body: string;

	setCategoryIdentifier(_: string)

	categoryIdentifier: string;

	setSound(_: UNNotificationSound)

	sound: UNNotificationSound;

	setSubtitle(_: string)

	subtitle: string;

	setSummaryArgument(_: string)

	summaryArgument: string;

	setSummaryArgumentCount(_: number)

	summaryArgumentCount: number;

	setTargetContentIdentifier(_: string)

	targetContentIdentifier: string;

	setThreadIdentifier(_: string)

	threadIdentifier: string;

	setTitle(_: string)

	title: string;

	setUserInfo(_: NSDictionary<any, any>)

	userInfo: NSDictionary<any, any>;
}

declare class UNNotification extends NSObject implements NSCopying, NSSecureCoding {

	readonly date: Date;

	readonly request: UNNotificationRequest;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class UNNotificationAction extends NSObject implements NSCopying, NSSecureCoding {

	static actionWithIdentifierTitleOptions(_: string, title: string, options: UNNotificationActionOptions): UNNotificationAction;

	readonly identifier: string;

	readonly options: UNNotificationActionOptions;

	readonly title: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum UNNotificationActionOptions {

	AuthenticationRequired = 1,

	Destructive = 2,

	Foreground = 4
}


declare class UNNotificationAttachment extends NSObject implements NSCopying, NSSecureCoding {

	static attachmentWithIdentifierURLOptionsError(URL: string, options: NSURL, error?: NSDictionary<any, any>): UNNotificationAttachment;

	readonly URL: NSURL;

	readonly identifier: string;

	readonly type: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var UNNotificationAttachmentOptionsThumbnailClippingRectKey: string;

declare var UNNotificationAttachmentOptionsThumbnailHiddenKey: string;

declare var UNNotificationAttachmentOptionsThumbnailTimeKey: string;

declare var UNNotificationAttachmentOptionsTypeHintKey: string;

declare class UNNotificationCategory extends NSObject implements NSCopying, NSSecureCoding {

	static categoryWithIdentifierActionsIntentIdentifiersHiddenPreviewsBodyPlaceholderCategorySummaryFormatOptions(_: string, actions: NSArray<UNNotificationAction>, intentIdentifiers: NSArray<string>, hiddenPreviewsBodyPlaceholder?: string, categorySummaryFormat?: string, options: UNNotificationCategoryOptions): UNNotificationCategory;

	static categoryWithIdentifierActionsIntentIdentifiersHiddenPreviewsBodyPlaceholderOptions(_: string, actions: NSArray<UNNotificationAction>, intentIdentifiers: NSArray<string>, hiddenPreviewsBodyPlaceholder: string, options: UNNotificationCategoryOptions): UNNotificationCategory;

	static categoryWithIdentifierActionsIntentIdentifiersOptions(_: string, actions: NSArray<UNNotificationAction>, intentIdentifiers: NSArray<string>, options: UNNotificationCategoryOptions): UNNotificationCategory;

	readonly actions: NSArray<UNNotificationAction>;

	readonly categorySummaryFormat: string;

	readonly hiddenPreviewsBodyPlaceholder: string;

	readonly identifier: string;

	readonly intentIdentifiers: NSArray<string>;

	readonly options: UNNotificationCategoryOptions;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum UNNotificationCategoryOptions {

	CustomDismissAction = 1,

	AllowInCarPlay = 2,

	HiddenPreviewsShowTitle = 4,

	HiddenPreviewsShowSubtitle = 8,

	AllowAnnouncement = 16
}


declare class UNNotificationContent extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	readonly attachments: NSArray<UNNotificationAttachment>;

	readonly badge: number;

	readonly body: string;

	readonly categoryIdentifier: string;

	readonly sound: UNNotificationSound;

	readonly subtitle: string;

	readonly summaryArgument: string;

	readonly summaryArgumentCount: number;

	readonly targetContentIdentifier: string;

	readonly threadIdentifier: string;

	readonly title: string;

	readonly userInfo: NSDictionary<any, any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	mutableCopyWithZone(_?: any): any;
}

declare var UNNotificationDefaultActionIdentifier: string;

declare var UNNotificationDismissActionIdentifier: string;

enum UNNotificationPresentationOptions {

	Badge = 1,

	Sound = 2,

	Alert = 4
}


declare class UNNotificationRequest extends NSObject implements NSCopying, NSSecureCoding {

	static requestWithIdentifierContentTrigger(_: string, content: UNNotificationContent, trigger?: UNNotificationTrigger): UNNotificationRequest;

	readonly content: UNNotificationContent;

	readonly identifier: string;

	readonly trigger: UNNotificationTrigger;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class UNNotificationResponse extends NSObject implements NSCopying, NSSecureCoding {

	readonly actionIdentifier: string;

	readonly notification: UNNotification;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class UNNotificationServiceExtension extends NSObject {

	didReceiveNotificationRequestWithContentHandler(_: UNNotificationRequest, withContentHandler: (p1: UNNotificationContent) => void): void;

	serviceExtensionTimeWillExpire(): void;
}

enum UNNotificationSetting {

	NotSupported = 0,

	Disabled = 1,

	Enabled = 2
}


declare class UNNotificationSettings extends NSObject implements NSCopying, NSSecureCoding {

	readonly alertSetting: UNNotificationSetting;

	readonly alertStyle: UNAlertStyle;

	readonly authorizationStatus: UNAuthorizationStatus;

	readonly badgeSetting: UNNotificationSetting;

	readonly criticalAlertSetting: UNNotificationSetting;

	readonly lockScreenSetting: UNNotificationSetting;

	readonly notificationCenterSetting: UNNotificationSetting;

	readonly providesAppNotificationSettings: boolean;

	readonly showPreviewsSetting: UNShowPreviewsSetting;

	readonly soundSetting: UNNotificationSetting;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class UNNotificationSound extends NSObject implements NSCopying, NSSecureCoding {

	static criticalSoundNamed(_: string): UNNotificationSound;

	static criticalSoundNamedWithAudioVolume(_: string, withAudioVolume: number): UNNotificationSound;

	static defaultCriticalSoundWithAudioVolume(_: number): UNNotificationSound;

	static soundNamed(_: string): UNNotificationSound;

	static defaultCriticalSound(): UNNotificationSound;

	static defaultSound(): UNNotificationSound;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class UNNotificationTrigger extends NSObject implements NSCopying, NSSecureCoding {

	readonly repeats: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class UNPushNotificationTrigger extends UNNotificationTrigger {
}

enum UNShowPreviewsSetting {

	Always = 0,

	WhenAuthenticated = 1,

	Never = 2
}


declare class UNTextInputNotificationAction extends UNNotificationAction {

	static actionWithIdentifierTitleOptions(_: string, title: string, options: UNNotificationActionOptions): UNTextInputNotificationAction; // inherited from UNNotificationAction

	static actionWithIdentifierTitleOptionsTextInputButtonTitleTextInputPlaceholder(_: string, title: string, options: UNNotificationActionOptions, textInputButtonTitle: string, textInputPlaceholder: string): UNTextInputNotificationAction;

	readonly textInputButtonTitle: string;

	readonly textInputPlaceholder: string;
}

declare class UNTextInputNotificationResponse extends UNNotificationResponse {

	readonly userText: string;
}

declare class UNTimeIntervalNotificationTrigger extends UNNotificationTrigger {

	static triggerWithTimeIntervalRepeats(_: number, repeats: boolean): UNTimeIntervalNotificationTrigger;

	readonly timeInterval: number;

	nextTriggerDate(): Date;
}

declare class UNUserNotificationCenter extends NSObject {

	static currentNotificationCenter(): UNUserNotificationCenter;

	setDelegate(_: UNUserNotificationCenterDelegate)

	delegate: UNUserNotificationCenterDelegate;

	readonly supportsContentExtensions: boolean;

	addNotificationRequestWithCompletionHandler(_: UNNotificationRequest, withCompletionHandler?: (p1: NSError) => void): void;

	getDeliveredNotificationsWithCompletionHandler(_: (p1: NSArray<UNNotification>) => void): void;

	getNotificationCategoriesWithCompletionHandler(_: (p1: NSSet<UNNotificationCategory>) => void): void;

	getNotificationSettingsWithCompletionHandler(_: (p1: UNNotificationSettings) => void): void;

	getPendingNotificationRequestsWithCompletionHandler(_: (p1: NSArray<UNNotificationRequest>) => void): void;

	removeAllDeliveredNotifications(): void;

	removeAllPendingNotificationRequests(): void;

	removeDeliveredNotificationsWithIdentifiers(_: NSArray<string>): void;

	removePendingNotificationRequestsWithIdentifiers(_: NSArray<string>): void;

	requestAuthorizationWithOptionsCompletionHandler(_: UNAuthorizationOptions, completionHandler?: (p1: boolean, p2: NSError) => void): void;

	setNotificationCategories(_: NSSet<UNNotificationCategory>): void;
}

interface UNUserNotificationCenterDelegate extends NSObjectProtocol {

	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler?(_: UNUserNotificationCenter, didReceiveNotificationResponse: UNNotificationResponse, withCompletionHandler: () => void): void;

	userNotificationCenterOpenSettingsForNotification?(_: UNUserNotificationCenter, openSettingsForNotification?: UNNotification): void;

	userNotificationCenterWillPresentNotificationWithCompletionHandler?(_: UNUserNotificationCenter, willPresentNotification: UNNotification, withCompletionHandler: (p1: UNNotificationPresentationOptions) => void): void;
}
declare var UNUserNotificationCenterDelegate: {

	prototype: UNUserNotificationCenterDelegate;
};
