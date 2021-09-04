
declare var DRBurnIcon: string;

declare class DRBurnProgressPanel extends NSPanel {

	static progressPanel(): DRBurnProgressPanel;

	static windowWithContentViewController(contentViewController: NSViewController): DRBurnProgressPanel; // inherited from NSWindow

	beginProgressPanelForBurnLayout(_: DRBurn, layout: any): void;

	beginProgressSheetForBurnLayoutModalForWindow(_: DRBurn, layout: any, modalForWindow: NSWindow): void;

	description(): string;

	setDescription(_: string): void;

	setVerboseProgressStatus(_: boolean): void;

	stopBurn(_: any): void;

	verboseProgressStatus(): boolean;
}

declare var DRBurnProgressPanelDidFinishNotification: string;

declare var DRBurnProgressPanelWillBeginNotification: string;

declare function DRBurnSessionBeginProgressDialog(burnSession: any, layout: any, options: DRBurnSessionProgressDialogOptions, progressCallbacks: DRBurnSessionProgressCallbacks): void;

declare function DRBurnSessionCreate(): any;

declare function DRBurnSessionGetBurn(burnSession: any): any;

declare function DRBurnSessionGetTypeID(): number;

interface DRBurnSessionProgressCallbacks {
	version: number;
	progressWillBegin: (p1: any) => void;
	progressDidFinish: (p1: any) => void;
	burnDidFinish: (p1: any, p2: any) => boolean;
}
declare var DRBurnSessionProgressCallbacks: DRBurnSessionProgressCallbacks;

interface DRBurnSessionProgressDialogOptions {
	version: number;
	dialogOptionFlags: number;
	description: string;
}
declare var DRBurnSessionProgressDialogOptions: DRBurnSessionProgressDialogOptions;

declare function DRBurnSessionSetBurn(burnSession: any, burn: any): void;

interface DRBurnSessionSetupCallbacks {
	version: number;
	deviceShouldBeTarget: (p1: any, p2: any) => boolean;
	containsSuitableMedia: (p1: any, p2: any, p3: string) => boolean;
	deviceSelectionChanged: (p1: any, p2: any) => void;
}
declare var DRBurnSessionSetupCallbacks: DRBurnSessionSetupCallbacks;

declare function DRBurnSessionSetupDialog(burnSession: any, options: DRBurnSessionSetupDialogOptions, setupCallbacks: DRBurnSessionSetupCallbacks): number;

interface DRBurnSessionSetupDialogOptions {
	version: number;
	dialogOptionFlags: number;
	defaultButtonTitle: string;
}
declare var DRBurnSessionSetupDialogOptions: DRBurnSessionSetupDialogOptions;

declare class DRBurnSetupPanel extends DRSetupPanel {

	static setupPanel(): DRBurnSetupPanel;

	static windowWithContentViewController(contentViewController: NSViewController): DRBurnSetupPanel; // inherited from NSWindow

	appendable(_: any): void;

	burnObject(): DRBurn;

	burnSpeed(_: any): void;

	completionAction(_: any): void;

	expand(_: any): void;

	setCanSelectAppendableMedia(_: boolean): void;

	setCanSelectTestBurn(_: boolean): void;

	setDefaultButtonTitle(_: string): void;

	testBurn(_: any): void;

	verifyBurn(_: any): void;
}

declare var DRBurnSetupPanelDefaultButtonDefaultTitle: string;

declare var DREraseIcon: string;

declare class DREraseProgressPanel extends NSPanel {

	static progressPanel(): DREraseProgressPanel;

	static windowWithContentViewController(contentViewController: NSViewController): DREraseProgressPanel; // inherited from NSWindow

	beginProgressPanelForErase(_: DRErase): void;

	beginProgressSheetForEraseModalForWindow(_: DRErase, modalForWindow: NSWindow): void;

	description(): string;

	setDescription(_: string): void;
}

declare var DREraseProgressPanelDidFinishNotification: string;

declare var DREraseProgressPanelWillBeginNotification: string;

declare function DREraseSessionBeginProgressDialog(eraseSession: any, options: DREraseSessionProgressDialogOptions, progressCallbacks: DREraseSessionProgressCallbacks): void;

declare function DREraseSessionCreate(): any;

declare function DREraseSessionGetErase(eraseSession: any): any;

declare function DREraseSessionGetTypeID(): number;

interface DREraseSessionProgressCallbacks {
	version: number;
	progressWillBegin: (p1: any) => void;
	progressDidFinish: (p1: any) => void;
	eraseDidFinish: (p1: any, p2: any) => boolean;
}
declare var DREraseSessionProgressCallbacks: DREraseSessionProgressCallbacks;

interface DREraseSessionProgressDialogOptions {
	version: number;
	dialogOptionFlags: number;
	description: string;
}
declare var DREraseSessionProgressDialogOptions: DREraseSessionProgressDialogOptions;

declare function DREraseSessionSetErase(eraseSession: any, erase: any): void;

interface DREraseSessionSetupCallbacks {
	version: number;
	deviceShouldBeTarget: (p1: any, p2: any) => boolean;
	containsSuitableMedia: (p1: any, p2: any, p3: string) => boolean;
	deviceSelectionChanged: (p1: any, p2: any) => void;
}
declare var DREraseSessionSetupCallbacks: DREraseSessionSetupCallbacks;

declare function DREraseSessionSetupDialog(eraseSession: any, options: DREraseSessionSetupDialogOptions, setupCallbacks: DREraseSessionSetupCallbacks): number;

interface DREraseSessionSetupDialogOptions {
	version: number;
	dialogOptionFlags: number;
}
declare var DREraseSessionSetupDialogOptions: DREraseSessionSetupDialogOptions;

declare class DREraseSetupPanel extends DRSetupPanel {

	static setupPanel(): DREraseSetupPanel;

	static windowWithContentViewController(contentViewController: NSViewController): DREraseSetupPanel; // inherited from NSWindow

	eraseObject(): DRErase;

	eraseType(_: any): void;
}

declare class DRSetupPanel extends NSPanel {

	static windowWithContentViewController(contentViewController: NSViewController): DRSetupPanel; // inherited from NSWindow

	static create(nibName: string);

	beginSetupSheetForWindowModalDelegateDidEndSelectorContextInfo(_: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any): void;

	cancel(_: any): void;

	close(_: any): void;

	deviceSelectionChanged(_: DRDevice): void;

	eject(_: any): void;

	mediaStateChanged(_: NSDictionary<any, any>): boolean;

	ok(_: any): void;

	open(_: any): void;

	runSetupPanel(): number;

	setupForDisplay(): void;
}

declare var DRSetupPanelDeviceSelectionChangedNotification: string;

declare var DRSetupPanelSelectedDeviceKey: string;

declare const kBurnSessionProgressDialogDefaultOptions: number;

declare const kBurnSessionProgressDialogDisplayVerboseProgress: number;

declare const kBurnSessionProgressDialogOptionsCurrentVersion: number;

declare const kBurnSessionSetupDialogAllowTestBurns: number;

declare const kBurnSessionSetupDialogDefaultOptions: number;

declare const kBurnSessionSetupDialogDontHandleReservations: number;

declare const kBurnSessionSetupDialogForceClosedDiscs: number;

declare const kBurnSessionSetupDialogOptionsCurrentVersion: number;

declare const kDRBurnProgressSetupCallbacksCurrentVersion: number;

declare const kDRBurnSessionCancel: number;

declare const kDRBurnSessionOK: number;

declare const kDRBurnSessionSetupCallbacksCurrentVersion: number;

declare const kDREraseProgressSetupCallbacksCurrentVersion: number;

declare const kDREraseSessionCancel: number;

declare const kDREraseSessionOK: number;

declare const kDREraseSessionSetupCallbacksCurrentVersion: number;

declare const kEraseSessionProgressDialogDefaultOptions: number;

declare const kEraseSessionProgressDialogOptionsCurrentVersion: number;

declare const kEraseSessionSetupDialogDefaultOptions: number;

declare const kEraseSessionSetupDialogDontHandleReservations: number;

declare const kEraseSessionSetupDialogOptionsCurrentVersion: number;
