
declare class InstallerPane extends NSObject {

	setContentView(_: NSView)

	contentView: NSView;

	setFirstKeyView(_: NSView)

	firstKeyView: NSView;

	readonly gotoNextPane: boolean;

	readonly gotoPreviousPane: boolean;

	setInitialKeyView(_: NSView)

	initialKeyView: NSView;

	setLastKeyView(_: NSView)

	lastKeyView: NSView;

	setNextEnabled(_: boolean)

	nextEnabled: boolean;

	setNextPane(_: InstallerPane)

	nextPane: InstallerPane;

	setPreviousEnabled(_: boolean)

	previousEnabled: boolean;

	readonly section: InstallerSection;

	readonly title: string;

	static create(section: any);

	didEnterPane(_: InstallerSectionDirection): void;

	didExitPane(_: InstallerSectionDirection): void;

	shouldExitPane(_: InstallerSectionDirection): boolean;

	willEnterPane(_: InstallerSectionDirection): void;

	willExitPane(_: InstallerSectionDirection): void;
}

declare class InstallerSection extends NSObject {

	readonly activePane: InstallerPane;

	readonly bundle: NSBundle;

	readonly firstPane: InstallerPane;

	readonly installerState: InstallerState;

	readonly shouldLoad: boolean;

	readonly title: string;

	didLoadMainNib(): void;

	gotoPane(_: InstallerPane): boolean;

	sharedDictionary(): NSMutableDictionary<any, any>;

	willLoadMainNib(): void;
}

enum InstallerSectionDirection {

	DirectionForward = 0,

	DirectionBackward = 1,

	DirectionUndefined = 2
}


declare class InstallerState extends NSObject {

	readonly choiceDictionaries: NSArray<any>;

	readonly installStarted: boolean;

	readonly installSucceeded: boolean;

	readonly licenseAgreed: boolean;

	readonly licenseAgreedLanguage: string;

	readonly targetPath: string;

	readonly targetVolumePath: string;

	choiceDictionaryForIdentifier(_: string): NSDictionary<any, any>;
}

declare var InstallerState_Choice_CustomLocation: string;

declare var InstallerState_Choice_Identifier: string;

declare var InstallerState_Choice_Installed: string;
