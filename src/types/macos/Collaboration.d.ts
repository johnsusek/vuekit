
declare class CBGroupIdentity extends CBIdentity {

	static groupIdentityWithPosixGIDAuthority(_: number, authority: CBIdentityAuthority): CBGroupIdentity;

	readonly memberIdentities: NSArray<CBIdentity>;

	readonly posixGID: number;
}

declare class CBIdentity extends NSObject implements NSCoding, NSCopying {

	static identityWithNameAuthority(_: string, authority: CBIdentityAuthority): CBIdentity;

	static identityWithPersistentReference(_: NSData): CBIdentity;

	static identityWithUniqueIdentifierAuthority(_: NSUUID, authority: CBIdentityAuthority): CBIdentity;

	readonly aliases: NSArray<string>;

	readonly authority: CBIdentityAuthority;

	readonly emailAddress: string;

	readonly fullName: string;

	readonly isHidden: boolean;

	readonly image: NSImage;

	readonly persistentReference: NSData;

	readonly posixName: string;

	readonly uniqueIdentifier: NSUUID;

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isMemberOfGroup(_: CBGroupIdentity): boolean;
}

declare class CBIdentityAuthority extends NSObject {

	static defaultIdentityAuthority(): CBIdentityAuthority;

	static localIdentityAuthority(): CBIdentityAuthority;

	static managedIdentityAuthority(): CBIdentityAuthority;

	readonly localizedName: string;
}

declare class CBIdentityPicker extends NSObject {

	setAllowsMultipleSelection(_: boolean)

	allowsMultipleSelection: boolean;

	readonly identities: NSArray<CBIdentity>;

	setTitle(_: string)

	title: string;

	runModal(): number;

	runModalForWindowCompletionHandler(_: NSWindow, completionHandler?: (p1: number) => void): void;
}

declare class CBUserIdentity extends CBIdentity implements NSCoding, NSCopying {

	static userIdentityWithPosixUIDAuthority(_: number, authority: CBIdentityAuthority): CBUserIdentity;

	readonly certificate: any;

	readonly isEnabled: boolean;

	readonly posixUID: number;

	static create(coder: NSCoder); // inherited from NSCoding

	authenticateWithPassword(_: string): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}
