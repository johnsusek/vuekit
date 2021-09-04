
declare class AUAudioUnitViewConfiguration extends NSObject implements NSSecureCoding {

	readonly height: number;

	readonly hostHasController: boolean;

	readonly width: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(width: number, height: number, hostHasController: boolean);

	encodeWithCoder(_: NSCoder): void;
}

interface AUCustomViewPersistentData {

	setCustomViewPersistentData(_: NSDictionary<string, any>)

	customViewPersistentData: NSDictionary<string, any>;
}
declare var AUCustomViewPersistentData: {

	prototype: AUCustomViewPersistentData;
};

declare class AUGenericView extends NSView implements AUCustomViewPersistentData {

	readonly audioUnit: ComponentInstanceRecord;

	setShowsExpertParameters(_: boolean)

	showsExpertParameters: boolean;

	setCustomViewPersistentData(_: NSDictionary<string, any>)

	customViewPersistentData: NSDictionary<string, any>; // inherited from AUCustomViewPersistentData

	static create(audioUnit: ComponentInstanceRecord);

	static create(audioUnit: ComponentInstanceRecord, displayFlags: AUGenericViewDisplayFlags);
}

enum AUGenericViewDisplayFlags {

	ViewTitleDisplayFlag = 1,

	ViewPropertiesDisplayFlag = 2,

	ViewParametersDisplayFlag = 4
}


declare class AUPannerView extends NSView {

	static AUPannerViewWithAudioUnit(_: ComponentInstanceRecord): AUPannerView;

	readonly audioUnit: ComponentInstanceRecord;
}

declare class AUViewController extends NSViewController implements NSExtensionRequestHandling {

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	beginRequestWithExtensionContext(_: NSExtensionContext): void;

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

declare class CABTLEMIDIWindowController extends NSWindowController {
}

declare class CAInterDeviceAudioViewController extends NSViewController {
}

declare class CANetworkBrowserWindowController extends NSWindowController {

	static isAVBSupported(): boolean;
}
