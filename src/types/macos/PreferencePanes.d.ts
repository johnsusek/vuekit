
declare var NSPrefPaneHelpMenuAnchorKey: string;

declare var NSPrefPaneHelpMenuInfoPListKey: string;

declare var NSPrefPaneHelpMenuTitleKey: string;

declare class NSPreferencePane extends NSObject {

	readonly autoSaveTextFields: boolean;

	readonly bundle: NSBundle;

	setFirstKeyView(_: NSView)

	firstKeyView: NSView;

	setInitialKeyView(_: NSView)

	initialKeyView: NSView;

	setLastKeyView(_: NSView)

	lastKeyView: NSView;

	readonly mainNibName: string;

	setMainView(_: NSView)

	mainView: NSView;

	readonly isSelected: boolean;

	readonly shouldUnselect: NSPreferencePaneUnselectReply;

	static create(bundle: NSBundle);

	assignMainView(): void;

	didSelect(): void;

	didUnselect(): void;

	loadMainView(): NSView;

	mainViewDidLoad(): void;

	replyToShouldUnselect(_: boolean): void;

	updateHelpMenuWithArray(_?: NSArray<NSDictionary<string, string>>): void;

	willSelect(): void;

	willUnselect(): void;
}

declare var NSPreferencePaneCancelUnselectNotification: string;

declare var NSPreferencePaneDoUnselectNotification: string;

declare var NSPreferencePaneSwitchToPaneNotification: string;

enum NSPreferencePaneUnselectReply {

	UnselectCancel = 0,

	UnselectNow = 1,

	UnselectLater = 2
}


declare var NSPreferencePaneUpdateHelpMenuNotification: string;

declare var NSPreferencePrefPaneIsAvailableNotification: string;
