
declare function SMJobBless(domain: string, executableLabel: string, auth: any, outError: NSError): boolean;

declare function SMLoginItemSetEnabled(identifier: string, enabled: boolean): boolean;

declare var kSMDomainSystemLaunchd: string;

declare var kSMDomainUserLaunchd: string;

declare const kSMErrorAuthorizationFailure: number;

declare const kSMErrorInternalFailure: number;

declare const kSMErrorInvalidPlist: number;

declare const kSMErrorInvalidSignature: number;

declare const kSMErrorJobMustBeEnabled: number;

declare const kSMErrorJobNotFound: number;

declare const kSMErrorJobPlistNotFound: number;

declare const kSMErrorServiceUnavailable: number;

declare const kSMErrorToolNotValid: number;
