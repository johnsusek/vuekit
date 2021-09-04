
declare class SNAudioFileAnalyzer extends NSObject {

	static create(URL: NSURL);

	addRequestWithObserverError(withObserver: SNRequest, error: SNResultsObserving): boolean;

	analyze(): void;

	analyzeWithCompletionHandler(_: (p1: boolean) => void): void;

	cancelAnalysis(): void;

	removeAllRequests(): void;

	removeRequest(_: SNRequest): void;
}

declare class SNAudioStreamAnalyzer extends NSObject {

	static create(format: AVAudioFormat);

	addRequestWithObserverError(withObserver: SNRequest, error: SNResultsObserving): boolean;

	analyzeAudioBufferAtAudioFramePosition(_: AVAudioBuffer, atAudioFramePosition: number): void;

	completeAnalysis(): void;

	removeAllRequests(): void;

	removeRequest(_: SNRequest): void;
}

declare class SNClassification extends NSObject {

	readonly confidence: number;

	readonly identifier: string;
}

declare class SNClassificationResult extends NSObject implements SNResult {

	readonly classifications: NSArray<SNClassification>;

	readonly timeRange: CMTimeRange;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SNClassifySoundRequest extends NSObject implements SNRequest {

	setOverlapFactor(_: number)

	overlapFactor: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(MLModel: MLModel);

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

enum SNErrorCode {

	UnknownError = 1,

	OperationFailed = 2,

	InvalidFormat = 3,

	InvalidModel = 4,

	InvalidFile = 5
}


declare var SNErrorDomain: string;

interface SNRequest extends NSObjectProtocol {
}
declare var SNRequest: {

	prototype: SNRequest;
};

interface SNResult extends NSObjectProtocol {
}
declare var SNResult: {

	prototype: SNResult;
};

interface SNResultsObserving extends NSObjectProtocol {

	requestDidFailWithError?(_: SNRequest, didFailWithError: NSError): void;

	requestDidProduceResult(_: SNRequest, didProduceResult: SNResult): void;

	requestDidComplete?(_: SNRequest): void;
}
declare var SNResultsObserving: {

	prototype: SNResultsObserving;
};
