
declare class CalAlarm extends NSObject implements NSCopying {

	copyWithZone(_?: any): any;
}

declare class CalAttendee extends NSObject implements NSCopying {

	copyWithZone(_?: any): any;
}

declare var CalAttendeeStatusAccepted: string;

declare var CalAttendeeStatusDeclined: string;

declare var CalAttendeeStatusNeedsAction: string;

declare var CalAttendeeStatusTentative: string;

declare class CalCalendar extends NSObject implements NSCopying {

	copyWithZone(_?: any): any;
}

declare class CalCalendarItem extends NSObject implements NSCopying {

	copyWithZone(_?: any): any;
}

declare const CalCalendarNotEditableError: number;

declare const CalCalendarNotInRepository: number;

declare class CalCalendarStore extends NSObject {
}

declare const CalCalendarTitleNotUniqueError: number;

declare const CalDateInvalidError: number;

declare var CalDeletedRecordsKey: string;

declare class CalEvent extends CalCalendarItem {
}

declare var CalInsertedRecordsKey: string;

declare class CalNthWeekDay extends NSObject implements NSCopying {

	copyWithZone(_?: any): any;
}

declare const CalPriorityHigh: number;

declare const CalPriorityLow: number;

declare const CalPriorityMedium: number;

declare const CalPriorityNone: number;

declare class CalRecurrenceEnd extends NSObject implements NSCopying {

	copyWithZone(_?: any): any;
}

declare class CalRecurrenceRule extends NSObject implements NSCopying {

	copyWithZone(_?: any): any;
}

enum CalRecurrenceType {

	Daily = 0,

	Weekly = 1,

	Monthly = 2,

	Yearly = 3
}


enum CalSpan {

	ThisEvent = 0,

	FutureEvents = 1,

	AllEvents = 2
}


declare class CalTask extends CalCalendarItem {

	static task(): any;
}

declare var CalUpdatedRecordsKey: string;
