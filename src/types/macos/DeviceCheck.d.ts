
declare class DCDevice extends NSObject {

	readonly isSupported: boolean;

	static currentDevice(): DCDevice;

	generateTokenWithCompletionHandler(_?: (p1: NSData, p2: NSError) => void): void;
}

enum DCError {

	UnknownSystemFailure = 0,

	FeatureUnsupported = 1
}


declare var DCErrorDomain: string;
