
declare class SFAcousticFeature extends NSObject implements NSCopying, NSSecureCoding {

	readonly acousticFeatureValuePerFrame: NSArray<number>;

	readonly frameDuration: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SFSpeechAudioBufferRecognitionRequest extends SFSpeechRecognitionRequest {

	readonly nativeAudioFormat: AVAudioFormat;

	appendAudioPCMBuffer(_: AVAudioPCMBuffer): void;

	appendAudioSampleBuffer(_: any): void;

	endAudio(): void;
}

declare class SFSpeechRecognitionRequest extends NSObject {

	setContextualStrings(_: NSArray<string>)

	contextualStrings: NSArray<string>;

	setInteractionIdentifier(_: string)

	interactionIdentifier: string;

	setRequiresOnDeviceRecognition(_: boolean)

	requiresOnDeviceRecognition: boolean;

	setShouldReportPartialResults(_: boolean)

	shouldReportPartialResults: boolean;

	setTaskHint(_: SFSpeechRecognitionTaskHint)

	taskHint: SFSpeechRecognitionTaskHint;
}

declare class SFSpeechRecognitionResult extends NSObject implements NSCopying, NSSecureCoding {

	readonly bestTranscription: SFTranscription;

	readonly isFinal: boolean;

	readonly transcriptions: NSArray<SFTranscription>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SFSpeechRecognitionTask extends NSObject {

	readonly isCancelled: boolean;

	readonly error: NSError;

	readonly isFinishing: boolean;

	readonly state: SFSpeechRecognitionTaskState;

	cancel(): void;

	finish(): void;
}

interface SFSpeechRecognitionTaskDelegate extends NSObjectProtocol {

	speechRecognitionDidDetectSpeech?(_: SFSpeechRecognitionTask): void;

	speechRecognitionTaskDidFinishRecognition?(_: SFSpeechRecognitionTask, didFinishRecognition: SFSpeechRecognitionResult): void;

	speechRecognitionTaskDidFinishSuccessfully?(_: SFSpeechRecognitionTask, didFinishSuccessfully: boolean): void;

	speechRecognitionTaskDidHypothesizeTranscription?(_: SFSpeechRecognitionTask, didHypothesizeTranscription: SFTranscription): void;

	speechRecognitionTaskFinishedReadingAudio?(_: SFSpeechRecognitionTask): void;

	speechRecognitionTaskWasCancelled?(_: SFSpeechRecognitionTask): void;
}
declare var SFSpeechRecognitionTaskDelegate: {

	prototype: SFSpeechRecognitionTaskDelegate;
};

enum SFSpeechRecognitionTaskHint {

	Unspecified = 0,

	Dictation = 1,

	Search = 2,

	Confirmation = 3
}


enum SFSpeechRecognitionTaskState {

	Starting = 0,

	Running = 1,

	Finishing = 2,

	Canceling = 3,

	Completed = 4
}


declare class SFSpeechRecognizer extends NSObject {

	static authorizationStatus(): SFSpeechRecognizerAuthorizationStatus;

	static requestAuthorization(_: (p1: SFSpeechRecognizerAuthorizationStatus) => void): void;

	static supportedLocales(): NSSet<NSLocale>;

	readonly isAvailable: boolean;

	setDefaultTaskHint(_: SFSpeechRecognitionTaskHint)

	defaultTaskHint: SFSpeechRecognitionTaskHint;

	setDelegate(_: SFSpeechRecognizerDelegate)

	delegate: SFSpeechRecognizerDelegate;

	readonly locale: NSLocale;

	setQueue(_: NSOperationQueue)

	queue: NSOperationQueue;

	setSupportsOnDeviceRecognition(_: boolean)

	supportsOnDeviceRecognition: boolean;

	static create(locale: NSLocale);

	recognitionTaskWithRequestDelegate(_: SFSpeechRecognitionRequest, delegate: SFSpeechRecognitionTaskDelegate): SFSpeechRecognitionTask;

	recognitionTaskWithRequestResultHandler(_: SFSpeechRecognitionRequest, resultHandler?: (p1: SFSpeechRecognitionResult, p2: NSError) => void): SFSpeechRecognitionTask;
}

enum SFSpeechRecognizerAuthorizationStatus {

	NotDetermined = 0,

	Denied = 1,

	Restricted = 2,

	Authorized = 3
}


interface SFSpeechRecognizerDelegate extends NSObjectProtocol {

	speechRecognizerAvailabilityDidChange?(_: SFSpeechRecognizer, availabilityDidChange: boolean): void;
}
declare var SFSpeechRecognizerDelegate: {

	prototype: SFSpeechRecognizerDelegate;
};

declare class SFSpeechURLRecognitionRequest extends SFSpeechRecognitionRequest {

	readonly URL: NSURL;

	static create(URL: NSURL);
}

declare class SFTranscription extends NSObject implements NSCopying, NSSecureCoding {

	readonly averagePauseDuration: number;

	readonly formattedString: string;

	readonly segments: NSArray<SFTranscriptionSegment>;

	readonly speakingRate: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SFTranscriptionSegment extends NSObject implements NSCopying, NSSecureCoding {

	readonly alternativeSubstrings: NSArray<string>;

	readonly confidence: number;

	readonly duration: number;

	readonly substring: string;

	readonly substringRange: NSRange;

	readonly timestamp: number;

	readonly voiceAnalytics: SFVoiceAnalytics;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class SFVoiceAnalytics extends NSObject implements NSCopying, NSSecureCoding {

	readonly jitter: SFAcousticFeature;

	readonly pitch: SFAcousticFeature;

	readonly shimmer: SFAcousticFeature;

	readonly voicing: SFAcousticFeature;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}
