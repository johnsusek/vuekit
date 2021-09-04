
declare class ISyncChange extends NSObject {
}

declare class ISyncClient extends NSObject {
}

declare class ISyncFilter extends NSObject {
}

interface ISyncFiltering extends NSCoding {
}
declare var ISyncFiltering: {

	prototype: ISyncFiltering;
};

declare class ISyncManager extends NSObject {
}

declare class ISyncRecordReference extends NSObject implements NSCoding {

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class ISyncRecordSnapshot extends NSObject {
}

enum ISyncServerDisabledReason {

	None = 1000,

	ByPreference = 1001,

	SharedNetworkHome = 1002,

	Unresponsive = 1003,

	Unknown = 1004
}


declare class ISyncSession extends NSObject {
}

declare const ISyncSessionClientAlreadySyncingError: number;

declare class ISyncSessionDriver extends NSObject {
}

enum ISyncSessionDriverChangeResult {

	Refused = 0,

	Accepted = 1,

	Ignored = 2,

	Error = 3
}


interface ISyncSessionDriverDataSource {
}
declare var ISyncSessionDriverDataSource: {

	prototype: ISyncSessionDriverDataSource;
};

declare const ISyncSessionDriverFatalError: number;

enum ISyncSessionDriverMode {

	Fast = 1,

	Slow = 2,

	Refresh = 3
}


declare const ISyncSessionDriverPullFailureError: number;

declare const ISyncSessionDriverRegistrationError: number;

declare const ISyncSessionUserCanceledSessionError: number;

interface NSPersistentStoreCoordinatorSyncing extends NSObjectProtocol {
}
declare var NSPersistentStoreCoordinatorSyncing: {

	prototype: NSPersistentStoreCoordinatorSyncing;
};
