
declare class OSLogEntry extends NSObject {

	readonly composedMessage: string;

	readonly date: Date;

	readonly storeCategory: OSLogEntryStoreCategory;
}

declare class OSLogEntryActivity extends OSLogEntry implements OSLogEntryFromProcess {

	readonly parentActivityIdentifier: number;

	readonly activityIdentifier: number; // inherited from OSLogEntryFromProcess

	readonly process: string; // inherited from OSLogEntryFromProcess

	readonly processIdentifier: number; // inherited from OSLogEntryFromProcess

	readonly sender: string; // inherited from OSLogEntryFromProcess

	readonly threadIdentifier: number; // inherited from OSLogEntryFromProcess
}

declare class OSLogEntryBoundary extends OSLogEntry {
}

interface OSLogEntryFromProcess {

	activityIdentifier: number;

	process: string;

	processIdentifier: number;

	sender: string;

	threadIdentifier: number;
}
declare var OSLogEntryFromProcess: {

	prototype: OSLogEntryFromProcess;
};

declare class OSLogEntryLog extends OSLogEntry implements OSLogEntryFromProcess, OSLogEntryWithPayload {

	readonly level: OSLogEntryLogLevel;

	readonly activityIdentifier: number; // inherited from OSLogEntryFromProcess

	readonly category: string; // inherited from OSLogEntryWithPayload

	readonly components: NSArray<OSLogMessageComponent>; // inherited from OSLogEntryWithPayload

	readonly formatString: string; // inherited from OSLogEntryWithPayload

	readonly process: string; // inherited from OSLogEntryFromProcess

	readonly processIdentifier: number; // inherited from OSLogEntryFromProcess

	readonly sender: string; // inherited from OSLogEntryFromProcess

	readonly subsystem: string; // inherited from OSLogEntryWithPayload

	readonly threadIdentifier: number; // inherited from OSLogEntryFromProcess
}

enum OSLogEntryLogLevel {

	Undefined = 0,

	Debug = 1,

	Info = 2,

	Notice = 3,

	Error = 4,

	Fault = 5
}


declare class OSLogEntrySignpost extends OSLogEntry implements OSLogEntryFromProcess, OSLogEntryWithPayload {

	readonly signpostIdentifier: number;

	readonly signpostName: string;

	readonly signpostType: OSLogEntrySignpostType;

	readonly activityIdentifier: number; // inherited from OSLogEntryFromProcess

	readonly category: string; // inherited from OSLogEntryWithPayload

	readonly components: NSArray<OSLogMessageComponent>; // inherited from OSLogEntryWithPayload

	readonly formatString: string; // inherited from OSLogEntryWithPayload

	readonly process: string; // inherited from OSLogEntryFromProcess

	readonly processIdentifier: number; // inherited from OSLogEntryFromProcess

	readonly sender: string; // inherited from OSLogEntryFromProcess

	readonly subsystem: string; // inherited from OSLogEntryWithPayload

	readonly threadIdentifier: number; // inherited from OSLogEntryFromProcess
}

enum OSLogEntrySignpostType {

	Undefined = 0,

	IntervalBegin = 1,

	IntervalEnd = 2,

	Event = 3
}


enum OSLogEntryStoreCategory {

	Undefined = 0,

	Metadata = 1,

	ShortTerm = 2,

	LongTermAuto = 3,

	LongTerm1 = 4,

	LongTerm3 = 5,

	LongTerm7 = 6,

	LongTerm14 = 7,

	LongTerm30 = 8
}


interface OSLogEntryWithPayload {

	category: string;

	components: NSArray<OSLogMessageComponent>;

	formatString: string;

	subsystem: string;
}
declare var OSLogEntryWithPayload: {

	prototype: OSLogEntryWithPayload;
};

declare class OSLogEnumerator extends NSEnumerator<NSObject> {
}

enum OSLogEnumeratorOptions {

	Reverse = 1
}


declare class OSLogMessageComponent extends NSObject {

	readonly argumentCategory: OSLogMessageComponentArgumentCategory;

	readonly argumentDataValue: NSData;

	readonly argumentDoubleValue: number;

	readonly argumentInt64Value: number;

	readonly argumentNumberValue: number;

	readonly argumentStringValue: string;

	readonly argumentUInt64Value: number;

	readonly formatSubstring: string;

	readonly placeholder: string;
}

enum OSLogMessageComponentArgumentCategory {

	Undefined = 0,

	Data = 1,

	Double = 2,

	Int64 = 3,

	String = 4,

	UInt64 = 5
}


declare class OSLogPosition extends NSObject {
}

declare class OSLogStore extends NSObject {

	static localStoreAndReturnError(): OSLogStore;

	static storeWithURLError(error: NSURL): OSLogStore;

	entriesEnumeratorWithOptionsPositionPredicateError(position: OSLogEnumeratorOptions, predicate?: OSLogPosition, error?: NSPredicate): OSLogEnumerator;

	positionWithDate(_: Date): OSLogPosition;

	positionWithTimeIntervalSinceEnd(_: number): OSLogPosition;

	positionWithTimeIntervalSinceLatestBoot(_: number): OSLogPosition;
}
