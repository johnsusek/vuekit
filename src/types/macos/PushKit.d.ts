
declare class PKPushCredentials extends NSObject {

	readonly token: NSData;

	readonly type: string;
}

declare class PKPushPayload extends NSObject {

	readonly dictionaryPayload: NSDictionary<any, any>;

	readonly type: string;
}

declare class PKPushRegistry extends NSObject {

	setDelegate(_: PKPushRegistryDelegate)

	delegate: PKPushRegistryDelegate;

	setDesiredPushTypes(_: NSSet<string>)

	desiredPushTypes: NSSet<string>;

	static create(queue: NSObject);

	pushTokenForType(for_: string): NSData;
}

interface PKPushRegistryDelegate extends NSObjectProtocol {

	pushRegistryDidInvalidatePushTokenForType?(_: PKPushRegistry, didInvalidatePushTokenForType: string): void;

	pushRegistryDidReceiveIncomingPushWithPayloadForTypeWithCompletionHandler?(_: PKPushRegistry, didReceiveIncomingPushWithPayload: PKPushPayload, forType: string, withCompletionHandler: () => void): void;

	pushRegistryDidUpdatePushCredentialsForType(_: PKPushRegistry, didUpdatePushCredentials: PKPushCredentials, forType: string): void;
}
declare var PKPushRegistryDelegate: {

	prototype: PKPushRegistryDelegate;
};

declare var PKPushTypeFileProvider: string;
