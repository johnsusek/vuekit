
declare class AMAction extends NSObject {

	readonly ignoresInput: boolean;

	readonly name: string;

	setOutput(_: any)

	output: any;

	setProgressValue(_: number)

	progressValue: number;

	setSelectedInputType(_: string)

	selectedInputType: string;

	setSelectedOutputType(_: string)

	selectedOutputType: string;

	readonly isStopped: boolean;

	static create(contentsOfURL: NSURL);

	static create(definition: NSDictionary<string, any>, fromArchive: boolean);

	activated(): void;

	closed(): void;

	finishRunningWithError(_?: NSError): void;

	opened(): void;

	parametersUpdated(): void;

	reset(): void;

	runAsynchronouslyWithInput(_?: any): void;

	runWithInputError(error?: any): any;

	stop(): void;

	updateParameters(): void;

	willFinishRunning(): void;

	writeToDictionary(_: NSMutableDictionary<string, any>): void;
}

declare class AMAppleScriptAction extends AMBundleAction {

	setScript(_: OSAScript)

	script: OSAScript;
}

declare class AMBundleAction extends AMAction implements NSCopying, NSSecureCoding {

	readonly bundle: NSBundle;

	readonly hasView: boolean;

	readonly view: NSView;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	awakeFromBundle(): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum AMErrorCode {

	WorkflowNewerVersionError = -100,

	WorkflowPropertyListInvalidError = -101,

	WorkflowNewerActionVersionError = -111,

	WorkflowOlderActionVersionError = -112,

	WorkflowActionsNotLoadedError = -113,

	WorkflowNoEnabledActionsError = -114,

	UserCanceledError = -128,

	NoSuchActionError = -200,

	ActionNotLoadableError = -201,

	ActionArchitectureMismatchError = -202,

	ActionRuntimeMismatchError = -203,

	ActionLoadError = -204,

	ActionLinkError = -205,

	ActionApplicationResourceError = -206,

	ActionApplicationVersionResourceError = -207,

	ActionFileResourceError = -208,

	ActionLicenseResourceError = -209,

	ActionRequiredActionResourceError = -210,

	ActionInitializationError = -211,

	ActionExecutionError = -212,

	ActionExceptionError = -213,

	ActionPropertyListInvalidError = -214,

	ActionInsufficientDataError = -215,

	ActionIsDeprecatedError = -216,

	ActionFailedGatekeeperError = -217,

	ActionSignatureCorruptError = -218,

	ActionQuarantineError = -219,

	ActionXProtectError = -220,

	ActionMalwareError = -221,

	ActionThirdPartyActionsNotAllowedError = -222,

	ConversionNotPossibleError = -300,

	ConversionNoDataError = -301,

	ConversionFailedError = -302
}


enum AMLogLevel {

	Debug = 0,

	Info = 1,

	Warn = 2,

	Error = 3
}


declare class AMShellScriptAction extends AMBundleAction {

	readonly inputFieldSeparator: string;

	readonly outputFieldSeparator: string;

	readonly remapLineEndings: boolean;
}

declare class AMWorkflow extends NSObject implements NSCopying {

	static runWorkflowAtURLWithInputError(withInput: NSURL, error?: any): any;

	readonly actions: NSArray<AMAction>;

	readonly fileURL: NSURL;

	setInput(_: any)

	input: any;

	readonly output: any;

	static create(contentsOfURL: NSURL);

	addAction(_: AMAction): void;

	copyWithZone(_?: any): any;

	insertActionAtIndex(_: AMAction, atIndex: number): void;

	moveActionAtIndexToIndex(_: number, toIndex: number): void;

	removeAction(_: AMAction): void;

	setValueForVariableWithName(_?: any, forVariableWithName: string): boolean;

	valueForVariableWithName(_: string): any;

	writeToURLError(error: NSURL): boolean;
}

declare class AMWorkflowController extends NSController {

	readonly canRun: boolean;

	setDelegate(_: AMWorkflowControllerDelegate)

	delegate: AMWorkflowControllerDelegate;

	readonly isPaused: boolean;

	readonly isRunning: boolean;

	setWorkflow(_: AMWorkflow)

	workflow: AMWorkflow;

	setWorkflowView(_: AMWorkflowView)

	workflowView: AMWorkflowView;

	pause(_: any): void;

	reset(_: any): void;

	run(_: any): void;

	step(_: any): void;

	stop(_: any): void;
}

interface AMWorkflowControllerDelegate extends NSObjectProtocol {

	workflowControllerDidError?(_: AMWorkflowController, didError: NSError): void;

	workflowControllerDidRunAction?(_: AMWorkflowController, didRunAction: AMAction): void;

	workflowControllerWillRunAction?(_: AMWorkflowController, willRunAction: AMAction): void;

	workflowControllerDidRun?(_: AMWorkflowController): void;

	workflowControllerDidStop?(_: AMWorkflowController): void;

	workflowControllerWillRun?(_: AMWorkflowController): void;

	workflowControllerWillStop?(_: AMWorkflowController): void;
}
declare var AMWorkflowControllerDelegate: {

	prototype: AMWorkflowControllerDelegate;
};

declare class AMWorkflowView extends NSView {

	setEditable(_: boolean)

	isEditable: boolean;

	setWorkflowController(_: AMWorkflowController)

	workflowController: AMWorkflowController;
}

declare class AMWorkspace extends NSObject {

	static sharedWorkspace(): AMWorkspace;

	runWorkflowAtPathWithInputError(withInput: string, error: any): any;
}

interface __AMWorkflowControllerDelegateRespondTo {
	workflowControllerDidAddWorkflow: number;
	workflowControllerDidRemoveWorkflow: number;
	workflowControllerWillRun: number;
	workflowControllerWillStep: number;
	workflowControllerWillStop: number;
	workflowControllerWillPause: number;
	workflowControllerDidRun: number;
	workflowControllerDidStep: number;
	workflowControllerDidStop: number;
	workflowControllerDidPause: number;
	workflowControllerWillRunAction: number;
	workflowControllerDidRunAction: number;
	workflowControllerDidError: number;
	workflowControllerDidLogMessageOfTypeFromAction: number;
	workflowControllerWillRunConversion: number;
	workflowControllerDidRunConversion: number;
	workflowControllerDidResumeWithAction: number;
	reserved: number;
}
declare var __AMWorkflowControllerDelegateRespondTo: __AMWorkflowControllerDelegateRespondTo;

interface __AMWorkflowControllerFlags {
	shouldRunLocally: number;
	isRunningLocally: number;
	shouldDisplayProgressInMenuBar: number;
	reserved: number;
}
declare var __AMWorkflowControllerFlags: __AMWorkflowControllerFlags;

interface __AMWorkflowViewFlags {
	ignoreSubviewFrameChanges: number;
	editingEnabled: number;
	reserved: number;
}
declare var __AMWorkflowViewFlags: __AMWorkflowViewFlags;
