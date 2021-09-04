
declare class SBApplication extends SBObject implements NSCoding {

	static applicationWithBundleIdentifier(_: string): SBApplication;

	static applicationWithProcessIdentifier(_: number): SBApplication;

	static applicationWithURL(_: NSURL): SBApplication;

	setDelegate(_: SBApplicationDelegate)

	delegate: SBApplicationDelegate;

	setLaunchFlags(_: LSLaunchFlags)

	launchFlags: LSLaunchFlags;

	readonly isRunning: boolean;

	setSendMode(_: number)

	sendMode: number;

	setTimeout(_: number)

	timeout: number;

	static create(bundleIdentifier: string);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(processIdentifier: number);

	static create(URL: NSURL);

	activate(): void;

	classForScriptingClass(_: string): typeof NSObject;

	encodeWithCoder(_: NSCoder): void;
}

interface SBApplicationDelegate {

	eventDidFailWithError(_: AEDesc, withError: NSError): any;
}
declare var SBApplicationDelegate: {

	prototype: SBApplicationDelegate;
};

declare class SBElementArray<ObjectType> extends NSMutableArray<ObjectType> {

	static array<ObjectType>(): SBElementArray<ObjectType>; // inherited from NSArray

	static arrayWithArray<ObjectType>(_: NSArray<ObjectType>): SBElementArray<ObjectType>; // inherited from NSArray

	static arrayWithCapacity<ObjectType>(_: number): SBElementArray<ObjectType>; // inherited from NSMutableArray

	static arrayWithObject<ObjectType>(_: ObjectType): SBElementArray<ObjectType>; // inherited from NSArray

	static arrayWithObjects<ObjectType>(_: ObjectType): SBElementArray<ObjectType>; // inherited from NSArray

	static arrayWithObjectsCount<ObjectType>(_: ObjectType, count: number): SBElementArray<ObjectType>; // inherited from NSArray

	arrayByApplyingSelector(_: string): NSArray<any>;

	arrayByApplyingSelectorWithObject(_: string, withObject: any): NSArray<any>;

	get(): NSArray<ObjectType>;

	objectAtLocation(_: any): ObjectType;

	objectWithID(_: any): ObjectType;

	objectWithName(_: string): ObjectType;
}

declare class SBObject extends NSObject implements NSCoding {

	static create(coder: NSCoder); // inherited from NSCoding

	static create(data: any);

	static create(elementCode: number, properties: NSDictionary<string, any>, data: any);

	static create(properties: NSDictionary<any, any>);

	elementArrayWithCode(_: number): SBElementArray<any>;

	encodeWithCoder(_: NSCoder): void;

	get(): any;

	lastError(): NSError;

	propertyWithClassCode(_: typeof NSObject, code: number): SBObject;

	propertyWithCode(_: number): SBObject;

	setTo(_?: any): void;
}
