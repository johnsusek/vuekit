
declare class NSExceptionHandler extends NSObject {

	static defaultExceptionHandler(): NSExceptionHandler;

	delegate(): any;

	exceptionHandlingMask(): number;

	exceptionHangingMask(): number;

	setDelegate(_: any): void;

	setExceptionHandlingMask(_: number): void;

	setExceptionHangingMask(_: number): void;
}

declare function NSExceptionHandlerResume(): void;

declare const NSHandleOtherExceptionMask: number;

declare const NSHandleTopLevelExceptionMask: number;

declare const NSHandleUncaughtExceptionMask: number;

declare const NSHandleUncaughtRuntimeErrorMask: number;

declare const NSHandleUncaughtSystemExceptionMask: number;

declare const NSHangOnOtherExceptionMask: number;

declare const NSHangOnTopLevelExceptionMask: number;

declare const NSHangOnUncaughtExceptionMask: number;

declare const NSHangOnUncaughtRuntimeErrorMask: number;

declare const NSHangOnUncaughtSystemExceptionMask: number;

declare const NSLogOtherExceptionMask: number;

declare const NSLogTopLevelExceptionMask: number;

declare const NSLogUncaughtExceptionMask: number;

declare const NSLogUncaughtRuntimeErrorMask: number;

declare const NSLogUncaughtSystemExceptionMask: number;

declare var NSStackTraceKey: string;

declare var NSUncaughtRuntimeErrorException: string;

declare var NSUncaughtSystemExceptionException: string;
