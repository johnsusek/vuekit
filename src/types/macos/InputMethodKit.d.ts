
declare class IMKCandidates extends NSResponder {

	static create(server: IMKServer, panelType: number);

	static create(server: IMKServer, panelType: number, styleType: number);

	attachChildToCandidateType(_: IMKCandidates, toCandidate: number, type: number): void;

	attributes(): NSDictionary<any, any>;

	candidateFrame(): CGRect;

	candidateIdentifierAtLineNumber(_: number): number;

	candidateStringIdentifier(_: any): number;

	clearSelection(): void;

	detachChild(_: number): void;

	dismissesAutomatically(): boolean;

	hide(): void;

	hideChild(): void;

	isVisible(): boolean;

	lineNumberForCandidateWithIdentifier(_: number): number;

	panelType(): number;

	selectCandidate(_: number): void;

	selectCandidateWithIdentifier(_: number): boolean;

	selectedCandidate(): number;

	selectedCandidateString(): NSAttributedString;

	selectionKeys(): NSArray<any>;

	selectionKeysKeylayout(): any;

	setAttributes(_: NSDictionary<any, any>): void;

	setCandidateData(_: NSArray<any>): void;

	setCandidateFrameTopLeft(_: CGPoint): void;

	setDismissesAutomatically(_: boolean): void;

	setPanelType(_: number): void;

	setSelectionKeys(_: NSArray<any>): void;

	setSelectionKeysKeylayout(_: any): void;

	show(_: number): void;

	showAnnotation(_: NSAttributedString): void;

	showCandidates(): void;

	showChild(): void;

	showSublistSubListDelegate(_: NSArray<any>, subListDelegate: any): void;

	updateCandidates(): void;
}

declare var IMKCandidatesOpacityAttributeName: string;

declare var IMKCandidatesSendServerKeyEventFirst: string;

declare var IMKControllerClass: string;

declare var IMKDelegateClass: string;

declare class IMKInputController extends NSObject implements IMKMouseHandling, IMKStateSetting {

	static create(server: IMKServer, delegate: any, client: any);

	activateServer(_: any): void;

	annotationSelectedForCandidate(_: NSAttributedString, forCandidate: NSAttributedString): void;

	cancelComposition(): void;

	candidateSelected(_: NSAttributedString): void;

	candidateSelectionChanged(_: NSAttributedString): void;

	client(): any;

	compositionAttributesAtRange(_: NSRange): NSMutableDictionary<any, any>;

	deactivateServer(_: any): void;

	delegate(): any;

	doCommandBySelectorCommandDictionary(_: string, commandDictionary: NSDictionary<any, any>): void;

	hidePalettes(): void;

	inputControllerWillClose(): void;

	markForStyleAtRange(_: number, atRange: NSRange): NSDictionary<any, any>;

	menu(): NSMenu;

	modes(_: any): NSDictionary<any, any>;

	mouseDownOnCharacterIndexCoordinateWithModifierContinueTrackingClient(_: number, coordinate: CGPoint, withModifier: number, continueTracking: boolean, client: any): boolean;

	mouseMovedOnCharacterIndexCoordinateWithModifierClient(_: number, coordinate: CGPoint, withModifier: number, client: any): boolean;

	mouseUpOnCharacterIndexCoordinateWithModifierClient(_: number, coordinate: CGPoint, withModifier: number, client: any): boolean;

	recognizedEvents(_: any): number;

	replacementRange(): NSRange;

	selectionRange(): NSRange;

	server(): IMKServer;

	setDelegate(_: any): void;

	setValueForTagClient(_: any, forTag: number, client: any): void;

	showPreferences(_: any): void;

	updateComposition(): void;

	valueForTagClient(_: number, client: any): any;
}

declare var IMKModeDictionary: string;

interface IMKMouseHandling {

	mouseDownOnCharacterIndexCoordinateWithModifierContinueTrackingClient(_: number, coordinate: CGPoint, withModifier: number, continueTracking: boolean, client: any): boolean;

	mouseMovedOnCharacterIndexCoordinateWithModifierClient(_: number, coordinate: CGPoint, withModifier: number, client: any): boolean;

	mouseUpOnCharacterIndexCoordinateWithModifierClient(_: number, coordinate: CGPoint, withModifier: number, client: any): boolean;
}
declare var IMKMouseHandling: {

	prototype: IMKMouseHandling;
};

declare class IMKServer extends NSObject {

	static create(name: string, bundleIdentifier: string);

	static create(name: string, controllerClass: typeof NSObject, delegateClass: typeof NSObject);

	bundle(): NSBundle;

	lastKeyEventWasDeadKey(): boolean;

	paletteWillTerminate(): boolean;
}

interface IMKStateSetting {

	activateServer(_: any): void;

	deactivateServer(_: any): void;

	modes(_: any): NSDictionary<any, any>;

	recognizedEvents(_: any): number;

	setValueForTagClient(_: any, forTag: number, client: any): void;

	showPreferences(_: any): void;

	valueForTagClient(_: number, client: any): any;
}
declare var IMKStateSetting: {

	prototype: IMKStateSetting;
};

declare const kIMKAnnotation: number;

declare var kIMKCommandClientName: string;

declare var kIMKCommandMenuItemName: string;

declare const kIMKLocateCandidatesAboveHint: number;

declare const kIMKLocateCandidatesBelowHint: number;

declare const kIMKLocateCandidatesLeftHint: number;

declare const kIMKLocateCandidatesRightHint: number;

declare const kIMKMain: number;

declare const kIMKScrollingGridCandidatePanel: number;

declare const kIMKSingleColumnScrollingCandidatePanel: number;

declare const kIMKSingleRowSteppingCandidatePanel: number;

declare const kIMKSubList: number;
