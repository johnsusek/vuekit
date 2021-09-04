
declare class ASIdentifierManager extends NSObject {

	static sharedManager(): ASIdentifierManager;

	readonly advertisingIdentifier: NSUUID;

	readonly isAdvertisingTrackingEnabled: boolean;

	clearAdvertisingIdentifier(): void;
}
