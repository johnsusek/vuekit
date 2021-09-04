
declare class OSALanguage extends NSObject {

	static availableLanguages(): NSArray<OSALanguage>;

	static defaultLanguage(): OSALanguage;

	static languageForName(_: string): OSALanguage;

	static languageForScriptDataDescriptor(_: NSAppleEventDescriptor): OSALanguage;

	static setDefaultLanguage(_: OSALanguage): void;

	readonly componentInstance: ComponentInstanceRecord;

	readonly features: OSALanguageFeatures;

	readonly info: string;

	readonly manufacturer: number;

	readonly name: string;

	readonly subType: number;

	readonly isThreadSafe: boolean;

	readonly type: number;

	readonly version: string;

	static create(component: ComponentRecord);

	sharedLanguageInstance(): OSALanguageInstance;
}

enum OSALanguageFeatures {

	SupportsCompiling = 2,

	SupportsGetSource = 4,

	SupportsAECoercion = 8,

	SupportsAESending = 16,

	SupportsRecording = 32,

	SupportsConvenience = 64,

	SupportsDialects = 128,

	SupportsEventHandling = 256
}


declare class OSALanguageInstance extends NSObject {

	static languageInstanceWithLanguage(_: OSALanguage): OSALanguageInstance;

	readonly componentInstance: ComponentInstanceRecord;

	setDefaultTarget(_: NSAppleEventDescriptor)

	defaultTarget: NSAppleEventDescriptor;

	readonly language: OSALanguage;

	static create(language: OSALanguage);

	richTextFromDescriptor(_: NSAppleEventDescriptor): NSAttributedString;
}

declare class OSAScript extends NSObject implements NSCopying {

	static scriptDataDescriptorWithContentsOfURL(_: NSURL): NSAppleEventDescriptor;

	readonly isCompiled: boolean;

	setLanguage(_: OSALanguage)

	language: OSALanguage;

	setLanguageInstance(_: OSALanguageInstance)

	languageInstance: OSALanguageInstance;

	readonly richTextSource: NSAttributedString;

	readonly source: string;

	readonly url: NSURL;

	static create(compiledData: NSData, fromURL: NSURL, usingStorageOptions: OSAStorageOptions);

	static create(contentsOfURL: NSURL, error: NSDictionary<string, any>);

	static create(contentsOfURL: NSURL, languageInstance: OSALanguageInstance, usingStorageOptions: OSAStorageOptions);

	static create(scriptDataDescriptor: NSAppleEventDescriptor, fromURL: NSURL, languageInstance: OSALanguageInstance, usingStorageOptions: OSAStorageOptions);

	static create(source: string);

	static create(source: string, fromURL: NSURL, languageInstance: OSALanguageInstance, usingStorageOptions: OSAStorageOptions);

	static create(source: string, language: OSALanguage);

	compileAndReturnError(_?: NSDictionary<string, any>): boolean;

	compiledDataForTypeUsingStorageOptionsError(_: string, usingStorageOptions: OSAStorageOptions, error?: NSDictionary<string, any>): NSData;

	copyWithZone(_?: any): any;

	executeAndReturnDisplayValueError(_?: NSAttributedString, error?: NSDictionary<string, any>): NSAppleEventDescriptor;

	executeAndReturnError(_?: NSDictionary<string, any>): NSAppleEventDescriptor;

	executeAppleEventError(_: NSAppleEventDescriptor, error?: NSDictionary<string, any>): NSAppleEventDescriptor;

	executeHandlerWithNameArgumentsError(_: string, arguments_: NSArray<any>, error?: NSDictionary<string, any>): NSAppleEventDescriptor;

	richTextFromDescriptor(_: NSAppleEventDescriptor): NSAttributedString;

	writeToURLOfTypeError(_: NSURL, ofType: string, error?: NSDictionary<string, any>): boolean;

	writeToURLOfTypeUsingStorageOptionsError(_: NSURL, ofType: string, usingStorageOptions: OSAStorageOptions, error?: NSDictionary<string, any>): boolean;
}

declare class OSAScriptController extends NSController {

	readonly isCompiling: boolean;

	setLanguage(_: OSALanguage)

	language: OSALanguage;

	setResultView(_: NSTextView)

	resultView: NSTextView;

	setScript(_: OSAScript)

	script: OSAScript;

	readonly scriptState: OSAScriptState;

	setScriptView(_: OSAScriptView)

	scriptView: OSAScriptView;

	compileScript(_?: any): void;

	recordScript(_?: any): void;

	runScript(_?: any): void;

	stopScript(_?: any): void;
}

declare var OSAScriptErrorAppAddressKey: string;

declare var OSAScriptErrorAppName: string;

declare var OSAScriptErrorAppNameKey: string;

declare var OSAScriptErrorBriefMessage: string;

declare var OSAScriptErrorBriefMessageKey: string;

declare var OSAScriptErrorExpectedTypeKey: string;

declare var OSAScriptErrorMessage: string;

declare var OSAScriptErrorMessageKey: string;

declare var OSAScriptErrorNumber: string;

declare var OSAScriptErrorNumberKey: string;

declare var OSAScriptErrorOffendingObjectKey: string;

declare var OSAScriptErrorPartialResultKey: string;

declare var OSAScriptErrorRange: string;

declare var OSAScriptErrorRangeKey: string;

enum OSAScriptState {

	Stopped = 0,

	Running = 1,

	Recording = 2
}


declare class OSAScriptView extends NSTextView {

	static fieldEditor(): OSAScriptView; // inherited from NSTextView

	setIndentWidth(_: number)

	indentWidth: number;

	setIndentsWrappedLines(_: boolean)

	indentsWrappedLines: boolean;

	setSource(_: string)

	source: string;

	setTabWidth(_: number)

	tabWidth: number;

	setUsesScriptAssistant(_: boolean)

	usesScriptAssistant: boolean;

	setUsesTabs(_: boolean)

	usesTabs: boolean;

	setWrapsLines(_: boolean)

	wrapsLines: boolean;
}

declare var OSAStorageApplicationBundleType: string;

declare var OSAStorageApplicationType: string;

enum OSAStorageOptions {

	Null = 0,

	PreventGetSource = 1,

	CompileIntoContext = 2,

	DontSetScriptLocation = 16777216,

	StayOpenApplet = 268435456,

	ShowStartupScreen = 536870912
}


declare var OSAStorageScriptBundleType: string;

declare var OSAStorageScriptType: string;

declare var OSAStorageTextType: string;
