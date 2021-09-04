
declare class EPDeveloperTool extends NSObject {

	readonly authorizationStatus: EPDeveloperToolStatus;

	requestDeveloperToolAccessWithCompletionHandler(_: (p1: boolean) => void): void;
}

enum EPDeveloperToolStatus {

	NotDetermined = 0,

	Restricted = 1,

	Denied = 2,

	Authorized = 3
}


enum EPError {

	Generic = 1,

	NotADeveloperTool = 2
}


declare var EPErrorDomain: string;

declare class EPExecutionPolicy extends NSObject {

	addPolicyExceptionForURLError(error: NSURL): boolean;
}
