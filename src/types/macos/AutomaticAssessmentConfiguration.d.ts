
declare class AEAssessmentConfiguration extends NSObject implements NSCopying {

	copyWithZone(_?: any): any;
}

enum AEAssessmentErrorCode {

	Unknown = 1
}


declare var AEAssessmentErrorDomain: string;

declare class AEAssessmentSession extends NSObject {

	readonly isActive: boolean;

	setDelegate(_: AEAssessmentSessionDelegate)

	delegate: AEAssessmentSessionDelegate;

	static create(configuration: AEAssessmentConfiguration);

	begin(): void;

	end(): void;
}

interface AEAssessmentSessionDelegate extends NSObjectProtocol {

	assessmentSessionFailedToBeginWithError?(_: AEAssessmentSession, failedToBeginWithError: NSError): void;

	assessmentSessionWasInterruptedWithError?(_: AEAssessmentSession, wasInterruptedWithError: NSError): void;

	assessmentSessionDidBegin?(_: AEAssessmentSession): void;

	assessmentSessionDidEnd?(_: AEAssessmentSession): void;
}
declare var AEAssessmentSessionDelegate: {

	prototype: AEAssessmentSessionDelegate;
};
