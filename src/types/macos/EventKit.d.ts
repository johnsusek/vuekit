
declare class EKAlarm extends EKObject implements NSCopying {

	static alarmWithAbsoluteDate(_: Date): EKAlarm;

	static alarmWithRelativeOffset(_: number): EKAlarm;

	setAbsoluteDate(_: Date)

	absoluteDate: Date;

	setEmailAddress(_: string)

	emailAddress: string;

	setProximity(_: EKAlarmProximity)

	proximity: EKAlarmProximity;

	setRelativeOffset(_: number)

	relativeOffset: number;

	setSoundName(_: string)

	soundName: string;

	setStructuredLocation(_: EKStructuredLocation)

	structuredLocation: EKStructuredLocation;

	readonly type: EKAlarmType;

	copyWithZone(_?: any): any;
}

enum EKAlarmProximity {

	None = 0,

	Enter = 1,

	Leave = 2
}


enum EKAlarmType {

	Display = 0,

	Audio = 1,

	Procedure = 2,

	Email = 3
}


enum EKAuthorizationStatus {

	NotDetermined = 0,

	Restricted = 1,

	Denied = 2,

	Authorized = 3
}


declare class EKCalendar extends EKObject {

	static calendarForEntityTypeEventStore(_: EKEntityType, eventStore: EKEventStore): EKCalendar;

	setCGColor(_: any)

	CGColor: any;

	readonly allowedEntityTypes: EKEntityMask;

	readonly allowsContentModifications: boolean;

	readonly calendarIdentifier: string;

	setColor(_: NSColor)

	color: NSColor;

	readonly isImmutable: boolean;

	setSource(_: EKSource)

	source: EKSource;

	readonly isSubscribed: boolean;

	readonly supportedEventAvailabilities: EKCalendarEventAvailabilityMask;

	setTitle(_: string)

	title: string;

	readonly type: EKCalendarType;
}

enum EKCalendarEventAvailabilityMask {

	None = 0,

	Busy = 1,

	Free = 2,

	Tentative = 4,

	Unavailable = 8
}


declare class EKCalendarItem extends EKObject {

	setURL(_: NSURL)

	URL: NSURL;

	setAlarms(_: NSArray<EKAlarm>)

	alarms: NSArray<EKAlarm>;

	readonly attendees: NSArray<EKParticipant>;

	setCalendar(_: EKCalendar)

	calendar: EKCalendar;

	readonly calendarItemExternalIdentifier: string;

	readonly calendarItemIdentifier: string;

	readonly creationDate: Date;

	readonly hasAlarms: boolean;

	readonly hasAttendees: boolean;

	readonly hasNotes: boolean;

	readonly hasRecurrenceRules: boolean;

	readonly lastModifiedDate: Date;

	setLocation(_: string)

	location: string;

	setNotes(_: string)

	notes: string;

	setRecurrenceRules(_: NSArray<EKRecurrenceRule>)

	recurrenceRules: NSArray<EKRecurrenceRule>;

	setTimeZone(_: NSTimeZone)

	timeZone: NSTimeZone;

	setTitle(_: string)

	title: string;

	addAlarm(_: EKAlarm): void;

	addRecurrenceRule(_: EKRecurrenceRule): void;

	removeAlarm(_: EKAlarm): void;

	removeRecurrenceRule(_: EKRecurrenceRule): void;
}

enum EKCalendarType {

	Local = 0,

	CalDAV = 1,

	Exchange = 2,

	Subscription = 3,

	Birthday = 4
}


enum EKEntityMask {

	Event = 1,

	Reminder = 2
}


enum EKEntityType {

	Event = 0,

	Reminder = 1
}


enum EKErrorCode {

	EventNotMutable = 0,

	NoCalendar = 1,

	NoStartDate = 2,

	NoEndDate = 3,

	DatesInverted = 4,

	InternalFailure = 5,

	CalendarReadOnly = 6,

	DurationGreaterThanRecurrence = 7,

	AlarmGreaterThanRecurrence = 8,

	StartDateTooFarInFuture = 9,

	StartDateCollidesWithOtherOccurrence = 10,

	ObjectBelongsToDifferentStore = 11,

	InvitesCannotBeMoved = 12,

	InvalidSpan = 13,

	CalendarHasNoSource = 14,

	CalendarSourceCannotBeModified = 15,

	CalendarIsImmutable = 16,

	SourceDoesNotAllowCalendarAddDelete = 17,

	RecurringReminderRequiresDueDate = 18,

	StructuredLocationsNotSupported = 19,

	ReminderLocationsNotSupported = 20,

	AlarmProximityNotSupported = 21,

	CalendarDoesNotAllowEvents = 22,

	CalendarDoesNotAllowReminders = 23,

	SourceDoesNotAllowReminders = 24,

	SourceDoesNotAllowEvents = 25,

	PriorityIsInvalid = 26,

	InvalidEntityType = 27,

	ProcedureAlarmsNotMutable = 28,

	EventStoreNotAuthorized = 29,

	OSNotSupported = 30,

	InvalidInviteReplyCalendar = 31,

	NotificationsCollectionFlagNotSet = 32,

	SourceMismatch = 33,

	NotificationCollectionMismatch = 34,

	NotificationSavedWithoutCollection = 35,

	Last = 36
}


declare var EKErrorDomain: string;

declare class EKEvent extends EKCalendarItem {

	static eventWithEventStore(_: EKEventStore): EKEvent;

	setAllDay(_: boolean)

	isAllDay: boolean;

	setAvailability(_: EKEventAvailability)

	availability: EKEventAvailability;

	readonly birthdayContactIdentifier: string;

	setEndDate(_: Date)

	endDate: Date;

	readonly eventIdentifier: string;

	readonly isDetached: boolean;

	readonly occurrenceDate: Date;

	readonly organizer: EKParticipant;

	setStartDate(_: Date)

	startDate: Date;

	readonly status: EKEventStatus;

	setStructuredLocation(_: EKStructuredLocation)

	structuredLocation: EKStructuredLocation;

	compareStartDateWithEvent(_: EKEvent): NSComparisonResult;
}

enum EKEventAvailability {

	NotSupported = -1,

	Busy = 0,

	Free = 1,

	Tentative = 2,

	Unavailable = 3
}


enum EKEventStatus {

	None = 0,

	Confirmed = 1,

	Tentative = 2,

	Canceled = 3
}


declare class EKEventStore extends NSObject {

	static authorizationStatusForEntityType(_: EKEntityType): EKAuthorizationStatus;

	readonly defaultCalendarForNewEvents: EKCalendar;

	readonly delegateSources: NSArray<EKSource>;

	readonly eventStoreIdentifier: string;

	readonly sources: NSArray<EKSource>;

	static create(sources: NSArray<EKSource> | EKSource[]);

	calendarItemWithIdentifier(_: string): EKCalendarItem;

	calendarItemsWithExternalIdentifier(_: string): NSArray<EKCalendarItem>;

	calendarWithIdentifier(_: string): EKCalendar;

	calendarsForEntityType(_: EKEntityType): NSArray<EKCalendar>;

	cancelFetchRequest(_: any): void;

	commit(): boolean;

	defaultCalendarForNewReminders(): EKCalendar;

	enumerateEventsMatchingPredicateUsingBlock(_: NSPredicate, usingBlock: (p1: EKEvent, p2: boolean) => void): void;

	eventWithIdentifier(_: string): EKEvent;

	eventsMatchingPredicate(_: NSPredicate): NSArray<EKEvent>;

	fetchRemindersMatchingPredicateCompletion(_: NSPredicate, completion?: (p1: NSArray<EKReminder>) => void): any;

	predicateForCompletedRemindersWithCompletionDateStartingEndingCalendars(_?: Date, ending?: Date, calendars?: NSArray<EKCalendar>): NSPredicate;

	predicateForEventsWithStartDateEndDateCalendars(_: Date, endDate: Date, calendars?: NSArray<EKCalendar>): NSPredicate;

	predicateForIncompleteRemindersWithDueDateStartingEndingCalendars(_?: Date, ending?: Date, calendars?: NSArray<EKCalendar>): NSPredicate;

	predicateForRemindersInCalendars(_?: NSArray<EKCalendar>): NSPredicate;

	refreshSourcesIfNecessary(): void;

	removeCalendarCommitError(commit: EKCalendar, error: boolean): boolean;

	removeEventSpanCommitError(span: EKEvent, commit: EKSpan, error: boolean): boolean;

	removeEventSpanError(span: EKEvent, error: EKSpan): boolean;

	removeReminderCommitError(commit: EKReminder, error: boolean): boolean;

	requestAccessToEntityTypeCompletion(_: EKEntityType, completion: (p1: boolean, p2: NSError) => void): void;

	reset(): void;

	saveCalendarCommitError(commit: EKCalendar, error: boolean): boolean;

	saveEventSpanCommitError(span: EKEvent, commit: EKSpan, error: boolean): boolean;

	saveEventSpanError(span: EKEvent, error: EKSpan): boolean;

	saveReminderCommitError(commit: EKReminder, error: boolean): boolean;

	sourceWithIdentifier(_: string): EKSource;
}

declare var EKEventStoreChangedNotification: string;

declare class EKObject extends NSObject {

	readonly hasChanges: boolean;

	readonly isNew: boolean;

	refresh(): boolean;

	reset(): void;

	rollback(): void;
}

declare class EKParticipant extends EKObject implements NSCopying {

	readonly URL: NSURL;

	readonly contactPredicate: NSPredicate;

	readonly isCurrentUser: boolean;

	readonly name: string;

	readonly participantRole: EKParticipantRole;

	readonly participantStatus: EKParticipantStatus;

	readonly participantType: EKParticipantType;

	copyWithZone(_?: any): any;
}

enum EKParticipantRole {

	Unknown = 0,

	Required = 1,

	Optional = 2,

	Chair = 3,

	NonParticipant = 4
}


enum EKParticipantScheduleStatus {

	None = 0,

	Pending = 1,

	Sent = 2,

	Delivered = 3,

	RecipientNotRecognized = 4,

	NoPrivileges = 5,

	DeliveryFailed = 6,

	CannotDeliver = 7,

	RecipientNotAllowed = 8
}


enum EKParticipantStatus {

	Unknown = 0,

	Pending = 1,

	Accepted = 2,

	Declined = 3,

	Tentative = 4,

	Delegated = 5,

	Completed = 6,

	InProcess = 7
}


enum EKParticipantType {

	Unknown = 0,

	Person = 1,

	Room = 2,

	Resource = 3,

	Group = 4
}


declare class EKRecurrenceDayOfWeek extends NSObject implements NSCopying, NSSecureCoding {

	static dayOfWeek(_: EKWeekday): EKRecurrenceDayOfWeek;

	static dayOfWeekWeekNumber(_: EKWeekday, weekNumber: number): EKRecurrenceDayOfWeek;

	readonly dayOfTheWeek: EKWeekday;

	readonly weekNumber: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(dayOfTheWeek: EKWeekday, weekNumber: number);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class EKRecurrenceEnd extends NSObject implements NSCopying, NSSecureCoding {

	static recurrenceEndWithEndDate(_: Date): EKRecurrenceEnd;

	static recurrenceEndWithOccurrenceCount(_: number): EKRecurrenceEnd;

	readonly endDate: Date;

	readonly occurrenceCount: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum EKRecurrenceFrequency {

	Daily = 0,

	Weekly = 1,

	Monthly = 2,

	Yearly = 3
}


declare class EKRecurrenceRule extends EKObject implements NSCopying {

	readonly calendarIdentifier: string;

	readonly daysOfTheMonth: NSArray<number>;

	readonly daysOfTheWeek: NSArray<EKRecurrenceDayOfWeek>;

	readonly daysOfTheYear: NSArray<number>;

	readonly firstDayOfTheWeek: number;

	readonly frequency: EKRecurrenceFrequency;

	readonly interval: number;

	readonly monthsOfTheYear: NSArray<number>;

	setRecurrenceEnd(_: EKRecurrenceEnd)

	recurrenceEnd: EKRecurrenceEnd;

	readonly setPositions: NSArray<number>;

	readonly weeksOfTheYear: NSArray<number>;

	static create(recurrenceWithFrequency: EKRecurrenceFrequency, interval: number, daysOfTheWeek: NSArray<EKRecurrenceDayOfWeek> | EKRecurrenceDayOfWeek[], daysOfTheMonth: NSArray<number> | number[], monthsOfTheYear: NSArray<number> | number[], weeksOfTheYear: NSArray<number> | number[], daysOfTheYear: NSArray<number> | number[], setPositions: NSArray<number> | number[], end: EKRecurrenceEnd);

	static create(recurrenceWithFrequency: EKRecurrenceFrequency, interval: number, end: EKRecurrenceEnd);

	copyWithZone(_?: any): any;
}

declare class EKReminder extends EKCalendarItem {

	static reminderWithEventStore(_: EKEventStore): EKReminder;

	setCompleted(_: boolean)

	isCompleted: boolean;

	setCompletionDate(_: Date)

	completionDate: Date;

	setDueDateComponents(_: NSDateComponents)

	dueDateComponents: NSDateComponents;

	setPriority(_: number)

	priority: number;

	setStartDateComponents(_: NSDateComponents)

	startDateComponents: NSDateComponents;
}

enum EKReminderPriority {

	None = 0,

	High = 1,

	Medium = 5,

	Low = 9
}


declare class EKSource extends EKObject {

	readonly sourceIdentifier: string;

	readonly sourceType: EKSourceType;

	readonly title: string;

	calendarsForEntityType(_: EKEntityType): NSSet<EKCalendar>;
}

enum EKSourceType {

	Local = 0,

	Exchange = 1,

	CalDAV = 2,

	MobileMe = 3,

	Subscribed = 4,

	Birthdays = 5
}


enum EKSpan {

	ThisEvent = 0,

	FutureEvents = 1
}


declare class EKStructuredLocation extends EKObject implements NSCopying {

	static locationWithMapItem(_: MKMapItem): EKStructuredLocation;

	static locationWithTitle(_: string): EKStructuredLocation;

	setGeoLocation(_: CLLocation)

	geoLocation: CLLocation;

	setRadius(_: number)

	radius: number;

	setTitle(_: string)

	title: string;

	copyWithZone(_?: any): any;
}

enum EKWeekday {

	WeekdaySunday = 1,

	WeekdayMonday = 2,

	WeekdayTuesday = 3,

	WeekdayWednesday = 4,

	WeekdayThursday = 5,

	WeekdayFriday = 6,

	WeekdaySaturday = 7,

	Sunday = 1,

	Monday = 2,

	Tuesday = 3,

	Wednesday = 4,

	Thursday = 5,

	Friday = 6,

	Saturday = 7
}

