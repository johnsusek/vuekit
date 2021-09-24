globalThis.AUGenericViewDisplayFlags = globalThis.AUGenericViewDisplayFlags || {};

globalThis.AUGenericViewDisplayFlags = {
    ViewTitleDisplayFlag: 1,
    ViewPropertiesDisplayFlag: 2,
    ViewParametersDisplayFlag: 4,
    '1': 'ViewTitleDisplayFlag',
    '2': 'ViewPropertiesDisplayFlag',
    '4': 'ViewParametersDisplayFlag'
}

declare class AUAudioUnitViewConfiguration extends NSObject implements NSSecureCoding {
  readonly height: number;
  readonly hostHasController: boolean;
  readonly width: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithWidthHeightHostHasController(width: number, height: number, hostHasController: boolean): this;
}

interface AUCustomViewPersistentData {
  customViewPersistentData: NSDictionary<string, any>;
  setCustomViewPersistentData(_: NSDictionary<string, any>)
}

declare var AUCustomViewPersistentData: {
  prototype: AUCustomViewPersistentData;
};

declare class AUGenericView extends NSView implements AUCustomViewPersistentData {
  readonly audioUnit: ComponentInstanceRecord;
  showsExpertParameters: boolean;
  setShowsExpertParameters(_: boolean)
  customViewPersistentData: NSDictionary<string, any>;
  setCustomViewPersistentData(_: NSDictionary<string, any>) // inherited from AUCustomViewPersistentData
  static createWithAudioUnit(audioUnit: ComponentInstanceRecord): this;
  static createWithAudioUnitDisplayFlags(audioUnit: ComponentInstanceRecord, displayFlags: AUGenericViewDisplayFlags): this;
}

declare class AUPannerView extends NSView {
  static AUPannerViewWithAudioUnit(_: ComponentInstanceRecord): AUPannerView;
  readonly audioUnit: ComponentInstanceRecord;
}

declare class AUViewController extends NSViewController implements NSExtensionRequestHandling {
  readonly debugDescription: string; // inherited from NSObjectProtocol
  readonly description: string; // inherited from NSObjectProtocol
  readonly hash: number; // inherited from NSObjectProtocol
  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol
  beginRequestWithExtensionContext(with_: NSExtensionContext): void;
  conformsToProtocol(_: any /* Protocol */): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  isProxy(): boolean;
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

enum AUGenericViewDisplayFlags {
    ViewTitleDisplayFlag = 1,
    ViewPropertiesDisplayFlag = 2,
    ViewParametersDisplayFlag = 4
}

