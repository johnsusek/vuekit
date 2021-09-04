
declare class SFAuthorizationPluginView extends NSObject {

	static create(callbacks: AuthorizationCallbacks, andEngineRef: any);

	buttonPressed(_: SFButtonType): void;

	callbacks(): AuthorizationCallbacks;

	didActivate(): void;

	didDeactivate(): void;

	displayView(): void;

	engineRef(): any;

	firstKeyView(): NSView;

	firstResponder(): NSResponder;

	lastError(): NSError;

	lastKeyView(): NSView;

	setButtonEnabled(_: SFButtonType, enabled: boolean): void;

	setEnabled(_: boolean): void;

	updateView(): void;

	viewForType(_: SFViewType): NSView;

	willActivateWithUser(_: NSDictionary<any, any>): void;
}

declare var SFAuthorizationPluginViewUserNameKey: string;

declare var SFAuthorizationPluginViewUserShortNameKey: string;

declare class SFAuthorizationView extends NSView {

	authorization(): SFAuthorization;

	authorizationRights(): AuthorizationItemSet;

	authorizationState(): SFAuthorizationViewState;

	authorize(_: any): boolean;

	deauthorize(_: any): boolean;

	delegate(): any;

	isEnabled(): boolean;

	setAuthorizationRights(_: AuthorizationItemSet): void;

	setAutoupdate(_: boolean): void;

	setAutoupdateInterval(_: boolean, interval: number): void;

	setDelegate(_: any): void;

	setEnabled(_: boolean): void;

	setFlags(_: AuthorizationFlags): void;

	setString(_: string): void;

	updateStatus(_: any): boolean;
}

enum SFAuthorizationViewState {

	StartupState = 0,

	ViewLockedState = 1,

	ViewInProgressState = 2,

	ViewUnlockedState = 3
}


enum SFButtonType {

	Cancel = 0,

	OK = 1,

	Back = 0,

	Login = 1
}


declare class SFCertificatePanel extends NSPanel {

	static sharedCertificatePanel(): SFCertificatePanel;

	static windowWithContentViewController(contentViewController: NSViewController): SFCertificatePanel; // inherited from NSWindow

	beginSheetForWindowModalDelegateDidEndSelectorContextInfoCertificatesShowGroup(_: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any, certificates: NSArray<any>, showGroup: boolean): void;

	beginSheetForWindowModalDelegateDidEndSelectorContextInfoTrustShowGroup(_: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any, trust: any, showGroup: boolean): void;

	certificateView(): SFCertificateView;

	helpAnchor(): string;

	policies(): NSArray<any>;

	runModalForCertificatesShowGroup(_: NSArray<any>, showGroup: boolean): number;

	runModalForTrustShowGroup(_: any, showGroup: boolean): number;

	setAlternateButtonTitle(_: string): void;

	setDefaultButtonTitle(_: string): void;

	setHelpAnchor(_: string): void;

	setPolicies(_: any): void;

	setShowsHelp(_: boolean): void;

	showsHelp(): boolean;
}

declare class SFCertificateTrustPanel extends SFCertificatePanel {

	static sharedCertificateTrustPanel(): SFCertificateTrustPanel;

	static windowWithContentViewController(contentViewController: NSViewController): SFCertificateTrustPanel; // inherited from NSWindow

	beginSheetForWindowModalDelegateDidEndSelectorContextInfoTrustMessage(_: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any, trust: any, message: string): void;

	informativeText(): string;

	runModalForTrustMessage(_: any, message: string): number;

	setInformativeText(_: string): void;
}

declare class SFCertificateView extends NSVisualEffectView {

	certificate(): any;

	detailsDisclosed(): boolean;

	detailsDisplayed(): boolean;

	isEditable(): boolean;

	isTrustDisplayed(): boolean;

	policies(): NSArray<any>;

	policiesDisclosed(): boolean;

	saveTrustSettings(): void;

	setCertificate(_: any): void;

	setDetailsDisclosed(_: boolean): void;

	setDisplayDetails(_: boolean): void;

	setDisplayTrust(_: boolean): void;

	setEditableTrust(_: boolean): void;

	setPolicies(_: any): void;

	setPoliciesDisclosed(_: boolean): void;
}

declare var SFCertificateViewDisclosureStateDidChange: string;

declare class SFChooseIdentityPanel extends NSPanel {

	static sharedChooseIdentityPanel(): SFChooseIdentityPanel;

	static windowWithContentViewController(contentViewController: NSViewController): SFChooseIdentityPanel; // inherited from NSWindow

	beginSheetForWindowModalDelegateDidEndSelectorContextInfoIdentitiesMessage(_: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any, identities: NSArray<any>, message: string): void;

	domain(): string;

	helpAnchor(): string;

	identity(): any;

	informativeText(): string;

	policies(): NSArray<any>;

	runModalForIdentitiesMessage(_: NSArray<any>, message: string): number;

	setAlternateButtonTitle(_: string): void;

	setDefaultButtonTitle(_: string): void;

	setDomain(_: string): void;

	setHelpAnchor(_: string): void;

	setInformativeText(_: string): void;

	setPolicies(_: any): void;

	setShowsHelp(_: boolean): void;

	showsHelp(): boolean;
}

declare class SFChooseIdentityTableCellView extends NSTableCellView {

	setIssuerTextField(_: NSTextField)

	issuerTextField: NSTextField;
}

declare var SFDisplayViewException: string;

declare class SFKeychainSavePanel extends NSSavePanel {

	static sharedKeychainSavePanel(): SFKeychainSavePanel;

	static windowWithContentViewController(contentViewController: NSViewController): SFKeychainSavePanel; // inherited from NSWindow

	beginSheetForDirectoryFileModalForWindowModalDelegateDidEndSelectorContextInfo(_: string, file: string, modalForWindow: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any): void;

	error(): NSError;

	keychain(): any;

	runModalForDirectoryFile(_: string, file: string): number;

	setPassword(_: string): void;
}

declare class SFKeychainSettingsPanel extends NSPanel {

	static sharedKeychainSettingsPanel(): SFKeychainSettingsPanel;

	static windowWithContentViewController(contentViewController: NSViewController): SFKeychainSettingsPanel; // inherited from NSWindow

	beginSheetForWindowModalDelegateDidEndSelectorContextInfoSettingsKeychain(_: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any, settings: SecKeychainSettings, keychain: any): void;

	runModalForSettingsKeychain(_: SecKeychainSettings, keychain: any): number;
}

enum SFViewType {

	IdentityAndCredentials = 0,

	Credentials = 1
}

