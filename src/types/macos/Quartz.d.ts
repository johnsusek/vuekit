globalThis.IKCameraDeviceViewDisplayMode = globalThis.IKCameraDeviceViewDisplayMode || {};

globalThis.IKCameraDeviceViewDisplayMode = {
    None: -1,
    Table: 0,
    Icon: 1,
    '-1': 'None',
    '0': 'Table',
    '1': 'Icon'
}

globalThis.IKCameraDeviceViewTransferMode = globalThis.IKCameraDeviceViewTransferMode || {};

globalThis.IKCameraDeviceViewTransferMode = {
    FileBased: 0,
    MemoryBased: 1,
    '0': 'FileBased',
    '1': 'MemoryBased'
}

globalThis.IKDeviceBrowserViewDisplayMode = globalThis.IKDeviceBrowserViewDisplayMode || {};

globalThis.IKDeviceBrowserViewDisplayMode = {
    Table: 0,
    Outline: 1,
    Icon: 2,
    '0': 'Table',
    '1': 'Outline',
    '2': 'Icon'
}

globalThis.IKImageBrowserCellState = globalThis.IKImageBrowserCellState || {};

globalThis.IKImageBrowserCellState = {
    StateNoImage: 0,
    StateInvalid: 1,
    StateReady: 2,
    '0': 'StateNoImage',
    '1': 'StateInvalid',
    '2': 'StateReady'
}

globalThis.IKImageBrowserDropOperation = globalThis.IKImageBrowserDropOperation || {};

globalThis.IKImageBrowserDropOperation = {
    On: 0,
    Before: 1,
    '0': 'On',
    '1': 'Before'
}

globalThis.IKScannerDeviceViewDisplayMode = globalThis.IKScannerDeviceViewDisplayMode || {};

globalThis.IKScannerDeviceViewDisplayMode = {
    None: -1,
    Simple: 0,
    Advanced: 1,
    '-1': 'None',
    '0': 'Simple',
    '1': 'Advanced'
}

globalThis.IKScannerDeviceViewTransferMode = globalThis.IKScannerDeviceViewTransferMode || {};

globalThis.IKScannerDeviceViewTransferMode = {
    FileBased: 0,
    MemoryBased: 1,
    '0': 'FileBased',
    '1': 'MemoryBased'
}

globalThis.QCPlugInExecutionMode = globalThis.QCPlugInExecutionMode || {};

globalThis.QCPlugInExecutionMode = {
    kQCPlugInExecutionModeProvider: 1,
    kQCPlugInExecutionModeProcessor: 2,
    kQCPlugInExecutionModeConsumer: 3,
    '1': 'kQCPlugInExecutionModeProvider',
    '2': 'kQCPlugInExecutionModeProcessor',
    '3': 'kQCPlugInExecutionModeConsumer'
}

globalThis.QCPlugInTimeMode = globalThis.QCPlugInTimeMode || {};

globalThis.QCPlugInTimeMode = {
    kQCPlugInTimeModeNone: 0,
    kQCPlugInTimeModeIdle: 1,
    kQCPlugInTimeModeTimeBase: 2,
    '0': 'kQCPlugInTimeModeNone',
    '1': 'kQCPlugInTimeModeIdle',
    '2': 'kQCPlugInTimeModeTimeBase'
}

globalThis.QLPreviewViewStyle = globalThis.QLPreviewViewStyle || {};

globalThis.QLPreviewViewStyle = {
    Normal: 0,
    Compact: 1,
    '0': 'Normal',
    '1': 'Compact'
}

declare class IKCameraDeviceView extends NSView {
  cameraDevice: ICCameraDevice;
  setCameraDevice(_: ICCameraDevice)
  readonly canDeleteSelectedItems: boolean;
  readonly canDownloadSelectedItems: boolean;
  readonly canRotateSelectedItemsLeft: boolean;
  readonly canRotateSelectedItemsRight: boolean;
  delegate: IKCameraDeviceViewDelegate;
  setDelegate(_: IKCameraDeviceViewDelegate)
  displaysDownloadsDirectoryControl: boolean;
  setDisplaysDownloadsDirectoryControl(_: boolean)
  displaysPostProcessApplicationControl: boolean;
  setDisplaysPostProcessApplicationControl(_: boolean)
  downloadAllControlLabel: string;
  setDownloadAllControlLabel(_: string)
  downloadSelectedControlLabel: string;
  setDownloadSelectedControlLabel(_: string)
  downloadsDirectory: NSURL;
  setDownloadsDirectory(_: NSURL)
  hasDisplayModeIcon: boolean;
  setHasDisplayModeIcon(_: boolean)
  hasDisplayModeTable: boolean;
  setHasDisplayModeTable(_: boolean)
  iconSize: number;
  setIconSize(_: number)
  mode: IKCameraDeviceViewDisplayMode;
  setMode(_: IKCameraDeviceViewDisplayMode)
  postProcessApplication: NSURL;
  setPostProcessApplication(_: NSURL)
  transferMode: IKCameraDeviceViewTransferMode;
  setTransferMode(_: IKCameraDeviceViewTransferMode)
  deleteSelectedItems(_: any): void;
  downloadAllItems(_: any): void;
  downloadSelectedItems(_: any): void;
  rotateLeft(_: any): void;
  rotateRight(_: any): void;
  selectIndexesByExtendingSelection(_: IndexSet, byExtendingSelection: boolean): void;
  selectedIndexes(): IndexSet;
}

interface IKCameraDeviceViewDelegate {
  cameraDeviceViewDidDownloadFileLocationFileDataError?(_: IKCameraDeviceView, didDownloadFile: ICCameraFile, location: NSURL, fileData: Data, error: Error): void;
  cameraDeviceViewDidEncounterError?(_: IKCameraDeviceView, didEncounterError: Error): void;
  cameraDeviceViewSelectionDidChange?(_: IKCameraDeviceView): void;
}

declare var IKCameraDeviceViewDelegate: {
  prototype: IKCameraDeviceViewDelegate;
};


declare const IKCellsStyleNone: number;

declare const IKCellsStyleOutlined: number;

declare const IKCellsStyleShadowed: number;

declare const IKCellsStyleSubtitled: number;

declare const IKCellsStyleTitled: number;
declare class IKDeviceBrowserView extends NSView {
  delegate: IKDeviceBrowserViewDelegate;
  setDelegate(_: IKDeviceBrowserViewDelegate)
  displaysLocalCameras: boolean;
  setDisplaysLocalCameras(_: boolean)
  displaysLocalScanners: boolean;
  setDisplaysLocalScanners(_: boolean)
  displaysNetworkCameras: boolean;
  setDisplaysNetworkCameras(_: boolean)
  displaysNetworkScanners: boolean;
  setDisplaysNetworkScanners(_: boolean)
  mode: IKDeviceBrowserViewDisplayMode;
  setMode(_: IKDeviceBrowserViewDisplayMode)
  readonly selectedDevice: ICDevice;
}

interface IKDeviceBrowserViewDelegate {
  deviceBrowserViewDidEncounterError?(_: IKDeviceBrowserView, didEncounterError: Error): void;
  deviceBrowserViewSelectionDidChange(_: IKDeviceBrowserView, selectionDidChange: ICDevice): void;
}

declare var IKDeviceBrowserViewDelegate: {
  prototype: IKDeviceBrowserViewDelegate;
};

declare var IKFilterBrowserDefaultInputImage: string;

declare var IKFilterBrowserExcludeCategories: string;

declare var IKFilterBrowserExcludeFilters: string;

declare var IKFilterBrowserFilterDoubleClickNotification: string;

declare var IKFilterBrowserFilterSelectedNotification: string;

declare class IKFilterBrowserPanel extends NSPanel {
  static filterBrowserPanelWithStyleMask(withStyleMask: number): any;
  beginSheetWithOptionsModalForWindowModalDelegateDidEndSelectorContextInfo(options: NSDictionary<any, any>, modalFor: NSWindow, modalDelegate: any, didEnd: string, contextInfo: any): void;
  beginWithOptionsModelessDelegateDidEndSelectorContextInfo(options: NSDictionary<any, any>, modelessDelegate: any, didEnd: string, contextInfo: any): void;
  filterBrowserViewWithOptions(options: NSDictionary<any, any>): IKFilterBrowserView;
  filterName(): string;
  finish(_: any): void;
  runModalWithOptions(options: NSDictionary<any, any>): number;
}

declare var IKFilterBrowserShowCategories: string;

declare var IKFilterBrowserShowPreview: string;

declare class IKFilterBrowserView extends NSView {
  filterName(): string;
  setPreviewState(_: boolean): void;
}

declare var IKFilterBrowserWillPreviewFilterNotification: string;

interface IKFilterCustomUIProvider {
  provideViewForUIConfigurationExcludedKeys(forUIConfiguration: NSDictionary<any, any>, excludedKeys: NSArray<any>): IKFilterUIView;
}

declare var IKFilterCustomUIProvider: {
  prototype: IKFilterCustomUIProvider;
};

declare class IKFilterUIView extends NSView {
  static viewWithFrameFilter(withFrame: NSRect, filter: CIFilter): any;
  filter(): CIFilter;
  static createWithFrameFilter(frame: NSRect, filter: CIFilter): this;
  objectController(): NSObjectController;
}


declare const IKGroupBezelStyle: number;

declare const IKGroupDisclosureStyle: number;
declare var IKImageBrowserBackgroundColorKey: string;

declare var IKImageBrowserCGImageRepresentationType: string;

declare var IKImageBrowserCGImageSourceRepresentationType: string;

declare class IKImageBrowserCell extends NSObject {
  cellState(): IKImageBrowserCellState;
  frame(): NSRect;
  imageAlignment(): NSImageAlignment;
  imageContainerFrame(): NSRect;
  imageFrame(): NSRect;
  indexOfRepresentedItem(): number;
  isSelected(): boolean;
  layerForType(forType: string): CALayer;
  opacity(): number;
  representedItem(): any;
  selectionFrame(): NSRect;
  subtitleFrame(): NSRect;
  titleFrame(): NSRect;
}

declare var IKImageBrowserCellBackgroundLayer: string;

declare var IKImageBrowserCellForegroundLayer: string;

declare var IKImageBrowserCellPlaceHolderLayer: string;

declare var IKImageBrowserCellSelectionLayer: string;

declare var IKImageBrowserCellsHighlightedTitleAttributesKey: string;

declare var IKImageBrowserCellsOutlineColorKey: string;

declare var IKImageBrowserCellsSubtitleAttributesKey: string;

declare var IKImageBrowserCellsTitleAttributesKey: string;

declare var IKImageBrowserGroupBackgroundColorKey: string;

declare var IKImageBrowserGroupFooterLayer: string;

declare var IKImageBrowserGroupHeaderLayer: string;

declare var IKImageBrowserGroupRangeKey: string;

declare var IKImageBrowserGroupStyleKey: string;

declare var IKImageBrowserGroupTitleKey: string;

declare var IKImageBrowserIconRefPathRepresentationType: string;

declare var IKImageBrowserIconRefRepresentationType: string;

declare var IKImageBrowserNSBitmapImageRepresentationType: string;

declare var IKImageBrowserNSDataRepresentationType: string;

declare var IKImageBrowserNSImageRepresentationType: string;

declare var IKImageBrowserNSURLRepresentationType: string;

declare var IKImageBrowserPDFPageRepresentationType: string;

declare var IKImageBrowserPathRepresentationType: string;

declare var IKImageBrowserQCCompositionPathRepresentationType: string;

declare var IKImageBrowserQCCompositionRepresentationType: string;

declare var IKImageBrowserQTMoviePathRepresentationType: string;

declare var IKImageBrowserQTMovieRepresentationType: string;

declare var IKImageBrowserQuickLookPathRepresentationType: string;

declare var IKImageBrowserSelectionColorKey: string;

declare class IKImageEditPanel extends NSPanel {
  static sharedImageEditPanel(): IKImageEditPanel;
  dataSource: IKImageEditPanelDataSource;
  setDataSource(_: IKImageEditPanelDataSource)
  readonly filterArray: NSArray<any>;
  reloadData(): void;
}

interface IKImageEditPanelDataSource {
  hasAdjustMode?(): boolean;
  hasDetailsMode?(): boolean;
  hasEffectsMode?(): boolean;
  image(): any;
  imageProperties?(): NSDictionary<any, any>;
  setImageImageProperties(_: any, imageProperties: NSDictionary<any, any>): void;
  thumbnailWithMaximumSize?(withMaximumSize: NSSize): any;
}

declare var IKImageEditPanelDataSource: {
  prototype: IKImageEditPanelDataSource;
};

declare class IKImageView extends NSView {
  autohidesScrollers: boolean;
  setAutohidesScrollers(_: boolean)
  autoresizes: boolean;
  setAutoresizes(_: boolean)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  currentToolMode: string;
  setCurrentToolMode(_: string)
  delegate: any;
  setDelegate(_: any)
  doubleClickOpensImageEditPanel: boolean;
  setDoubleClickOpensImageEditPanel(_: boolean)
  editable: boolean;
  setEditable(_: boolean)
  hasHorizontalScroller: boolean;
  setHasHorizontalScroller(_: boolean)
  hasVerticalScroller: boolean;
  setHasVerticalScroller(_: boolean)
  imageCorrection: CIFilter;
  setImageCorrection(_: CIFilter)
  rotationAngle: number;
  setRotationAngle(_: number)
  supportsDragAndDrop: boolean;
  setSupportsDragAndDrop(_: boolean)
  zoomFactor: number;
  setZoomFactor(_: number)
  convertImagePointToViewPoint(toViewPoint: NSPoint): NSPoint;
  convertImageRectToViewRect(toViewRect: NSRect): NSRect;
  convertViewPointToImagePoint(toImagePoint: NSPoint): NSPoint;
  convertViewRectToImageRect(toImageRect: NSRect): NSRect;
  crop(_: any): void;
  flipImageHorizontal(_: any): void;
  flipImageVertical(_: any): void;
  image(): any;
  imageProperties(): NSDictionary<any, any>;
  imageSize(): NSSize;
  overlayForType(forType: string): CALayer;
  rotateImageLeft(_: any): void;
  rotateImageRight(_: any): void;
  scrollToPoint(to: NSPoint): void;
  scrollToRect(to: NSRect): void;
  setImageImageProperties(_: any, imageProperties: NSDictionary<any, any>): void;
  setImageWithURL(_: NSURL): void;
  setImageZoomFactorCenterPoint(_: number, center: NSPoint): void;
  setOverlayForType(_: CALayer, forType: string): void;
  setRotationAngleCenterPoint(_: number, center: NSPoint): void;
  zoomImageToActualSize(_: any): void;
  zoomImageToFit(_: any): void;
  zoomImageToRect(to: NSRect): void;
  zoomIn(_: any): void;
  zoomOut(_: any): void;
}

declare var IKOverlayTypeBackground: string;

declare var IKOverlayTypeImage: string;

declare class IKPictureTaker extends NSPanel {
  static pictureTaker(): IKPictureTaker;
  beginPictureTakerSheetForWindowWithDelegateDidEndSelectorContextInfo(for_: NSWindow, withDelegate: any, didEnd: string, contextInfo: any): void;
  beginPictureTakerWithDelegateDidEndSelectorContextInfo(withDelegate: any, didEnd: string, contextInfo: any): void;
  inputImage(): NSImage;
  mirroring(): boolean;
  outputImage(): NSImage;
  popUpRecentsMenuForViewWithDelegateDidEndSelectorContextInfo(for_: NSView, withDelegate: any, didEnd: string, contextInfo: any): void;
  runModal(): number;
  setInputImage(_: NSImage): void;
  setMirroring(_: boolean): void;
}

declare var IKPictureTakerAllowsEditingKey: string;

declare var IKPictureTakerAllowsFileChoosingKey: string;

declare var IKPictureTakerAllowsVideoCaptureKey: string;

declare var IKPictureTakerCropAreaSizeKey: string;

declare var IKPictureTakerImageTransformsKey: string;

declare var IKPictureTakerInformationalTextKey: string;

declare var IKPictureTakerOutputImageMaxSizeKey: string;

declare var IKPictureTakerRemainOpenAfterValidateKey: string;

declare var IKPictureTakerShowAddressBookPicture: string;

declare var IKPictureTakerShowAddressBookPictureKey: string;

declare var IKPictureTakerShowEffectsKey: string;

declare var IKPictureTakerShowEmptyPicture: string;

declare var IKPictureTakerShowEmptyPictureKey: string;

declare var IKPictureTakerShowRecentPictureKey: string;

declare var IKPictureTakerUpdateRecentPictureKey: string;

declare class IKSaveOptions extends NSObject {
  delegate: any;
  setDelegate(_: any)
  readonly imageProperties: NSDictionary<any, any>;
  readonly imageUTType: string;
  readonly userSelection: NSDictionary<any, any>;
  addSaveOptionsAccessoryViewToSavePanel(to: NSSavePanel): void;
  addSaveOptionsToView(to: NSView): void;
  static createWithImagePropertiesImageUTType(imageProperties: NSDictionary<any, any>, imageUTType: string): this;
}

declare class IKScannerDeviceView extends NSView {
  delegate: IKScannerDeviceViewDelegate;
  setDelegate(_: IKScannerDeviceViewDelegate)
  displaysDownloadsDirectoryControl: boolean;
  setDisplaysDownloadsDirectoryControl(_: boolean)
  displaysPostProcessApplicationControl: boolean;
  setDisplaysPostProcessApplicationControl(_: boolean)
  documentName: string;
  setDocumentName(_: string)
  downloadsDirectory: NSURL;
  setDownloadsDirectory(_: NSURL)
  hasDisplayModeAdvanced: boolean;
  setHasDisplayModeAdvanced(_: boolean)
  hasDisplayModeSimple: boolean;
  setHasDisplayModeSimple(_: boolean)
  mode: IKScannerDeviceViewDisplayMode;
  setMode(_: IKScannerDeviceViewDisplayMode)
  overviewControlLabel: string;
  setOverviewControlLabel(_: string)
  postProcessApplication: NSURL;
  setPostProcessApplication(_: NSURL)
  scanControlLabel: string;
  setScanControlLabel(_: string)
  scannerDevice: ICScannerDevice;
  setScannerDevice(_: ICScannerDevice)
  transferMode: IKScannerDeviceViewTransferMode;
  setTransferMode(_: IKScannerDeviceViewTransferMode)
}

interface IKScannerDeviceViewDelegate {
  scannerDeviceViewDidScanToURLFileDataError?(_: IKScannerDeviceView, didScanTo: NSURL, fileData: Data, error: Error): void;
  scannerDeviceViewDidScanToURLError?(_: IKScannerDeviceView, didScanTo: NSURL, error: Error): void;
  scannerDeviceViewDidScanToBandDataScanInfoError?(_: IKScannerDeviceView, didScanTo: ICScannerBandData, scanInfo: NSDictionary<any, any>, error: Error): void;
  scannerDeviceViewDidEncounterError?(_: IKScannerDeviceView, didEncounterError: Error): void;
}

declare var IKScannerDeviceViewDelegate: {
  prototype: IKScannerDeviceViewDelegate;
};

declare class IKSlideshow extends NSObject {
  static canExportToApplication(toApplication: string): boolean;
  static exportSlideshowItemToApplication(_: any, toApplication: string): void;
  static sharedSlideshow(): IKSlideshow;
  autoPlayDelay: number;
  setAutoPlayDelay(_: number)
  indexOfCurrentSlideshowItem(): number;
  reloadData(): void;
  reloadSlideshowItemAtIndex(at: number): void;
  runSlideshowWithDataSourceInModeOptions(with_: IKSlideshowDataSource, inMode: string, options: NSDictionary<any, any>): void;
  stopSlideshow(_: any): void;
}

declare var IKSlideshowAudioFile: string;

interface IKSlideshowDataSource {
  canExportSlideshowItemAtIndexToApplication?(at: number, toApplication: string): boolean;
  nameOfSlideshowItemAtIndex?(at: number): string;
  numberOfSlideshowItems(): number;
  slideshowDidChangeCurrentIndex?(_: number): void;
  slideshowDidStop?(): void;
  slideshowItemAtIndex(at: number): any;
  slideshowWillStart?(): void;
}

declare var IKSlideshowDataSource: {
  prototype: IKSlideshowDataSource;
};

declare var IKSlideshowModeImages: string;

declare var IKSlideshowModeOther: string;

declare var IKSlideshowModePDF: string;

declare var IKSlideshowPDFDisplayBox: string;

declare var IKSlideshowPDFDisplayMode: string;

declare var IKSlideshowPDFDisplaysAsBook: string;

declare var IKSlideshowScreen: string;

declare var IKSlideshowStartIndex: string;

declare var IKSlideshowStartPaused: string;

declare var IKSlideshowWrapAround: string;

declare var IKToolModeAnnotate: string;

declare var IKToolModeCrop: string;

declare var IKToolModeMove: string;

declare var IKToolModeNone: string;

declare var IKToolModeRotate: string;

declare var IKToolModeSelect: string;

declare var IKToolModeSelectEllipse: string;

declare var IKToolModeSelectLasso: string;

declare var IKToolModeSelectRect: string;

declare var IKUIFlavorAllowFallback: string;

declare var IKUISizeFlavor: string;

declare var IKUISizeMini: string;

declare var IKUISizeRegular: string;

declare var IKUISizeSmall: string;

declare var IKUImaxSize: string;

declare var IK_ApertureBundleIdentifier: string;

declare var IK_MailBundleIdentifier: string;

declare var IK_PhotosBundleIdentifier: string;

declare var IK_iPhotoBundleIdentifier: string;

declare var QCCompositionInputPaceKey: string;

interface QLPreviewItem extends NSObject {
  previewItemDisplayState?: any;
  previewItemTitle?: string;
  previewItemURL: NSURL;
}

declare var QLPreviewItem: {
  prototype: QLPreviewItem;
};

declare class QLPreviewPanel extends NSPanel {
  static sharedPreviewPanel(): QLPreviewPanel;
  static sharedPreviewPanelExists(): boolean;
  readonly currentController: any;
  readonly currentPreviewItem: QLPreviewItem;
  currentPreviewItemIndex: number;
  setCurrentPreviewItemIndex(_: number)
  dataSource: QLPreviewPanelDataSource;
  setDataSource(_: QLPreviewPanelDataSource)
  delegate: any;
  setDelegate(_: any)
  displayState: any;
  setDisplayState(_: any)
  readonly isInFullScreenMode: boolean;
  enterFullScreenModeWithOptions(_: NSScreen, withOptions: NSDictionary<any, any>): boolean;
  exitFullScreenModeWithOptions(options: NSDictionary<any, any>): void;
  refreshCurrentPreviewItem(): void;
  reloadData(): void;
  updateController(): void;
}

interface QLPreviewPanelDataSource {
  numberOfPreviewItemsInPreviewPanel(in_: QLPreviewPanel): number;
  previewPanelPreviewItemAtIndex(_: QLPreviewPanel, previewItemAt: number): QLPreviewItem;
}

declare var QLPreviewPanelDataSource: {
  prototype: QLPreviewPanelDataSource;
};

interface QLPreviewPanelDelegate extends NSWindowDelegate {
  previewPanelHandleEvent?(_: QLPreviewPanel, handle: NSEvent): boolean;
  previewPanelSourceFrameOnScreenForPreviewItem?(_: QLPreviewPanel, sourceFrameOnScreenFor: QLPreviewItem): NSRect;
  previewPanelTransitionImageForPreviewItemContentRect?(_: QLPreviewPanel, transitionImageFor: QLPreviewItem, contentRect: NSRect): any;
}

declare var QLPreviewPanelDelegate: {
  prototype: QLPreviewPanelDelegate;
};

declare class QLPreviewView extends NSView {
  autostarts: boolean;
  setAutostarts(_: boolean)
  displayState: any;
  setDisplayState(_: any)
  previewItem: QLPreviewItem;
  setPreviewItem(_: QLPreviewItem)
  shouldCloseWithWindow: boolean;
  setShouldCloseWithWindow(_: boolean)
  close(): void;
  static createWithFrameStyle(frame: NSRect, style: QLPreviewViewStyle): this;
  refreshPreviewItem(): void;
}

interface QLPreviewingController extends NSObject {
  preparePreviewOfFileAtURLCompletionHandler?(at: NSURL, completionHandler?: (p1: Error) => void): void;
  preparePreviewOfSearchableItemWithIdentifierQueryStringCompletionHandler?(identifier: string, queryString?: string, completionHandler?: (p1: Error) => void): void;
}

declare var QLPreviewingController: {
  prototype: QLPreviewingController;
};

declare class QuartzFilter extends NSObject {
  applyToContext(to: any): boolean;
  localizedName(): string;
  properties(): NSDictionary<any, any>;
  removeFromContext(from: any): void;
  url(): NSURL;
}

declare class QuartzFilterManager extends NSObject {
  static filtersInDomains(inDomains: NSArray<any>): NSArray<any>;
  delegate(): any;
  filterPanel(): NSPanel;
  filterView(): QuartzFilterView;
  importFilter(_: NSDictionary<any, any>): QuartzFilter;
  selectFilter(_: QuartzFilter): boolean;
  selectedFilter(): QuartzFilter;
  setDelegate(_: any): void;
}

declare class QuartzFilterView extends NSView {
  sizeToFit(): void;
}

declare var globalUpdateOK: boolean;

declare var kQuartzFilterApplicationDomain: string;

declare var kQuartzFilterManagerDidAddFilterNotification: string;

declare var kQuartzFilterManagerDidModifyFilterNotification: string;

declare var kQuartzFilterManagerDidRemoveFilterNotification: string;

declare var kQuartzFilterManagerDidSelectFilterNotification: string;

declare var kQuartzFilterPDFWorkflowDomain: string;

declare var kQuartzFilterPrintingDomain: string;

enum IKCameraDeviceViewDisplayMode {
    None = -1,
    Table = 0,
    Icon = 1
}

enum IKCameraDeviceViewTransferMode {
    FileBased = 0,
    MemoryBased = 1
}

enum IKDeviceBrowserViewDisplayMode {
    Table = 0,
    Outline = 1,
    Icon = 2
}

enum IKImageBrowserCellState {
    StateNoImage = 0,
    StateInvalid = 1,
    StateReady = 2
}

enum IKImageBrowserDropOperation {
    On = 0,
    Before = 1
}

enum IKScannerDeviceViewDisplayMode {
    None = -1,
    Simple = 0,
    Advanced = 1
}

enum IKScannerDeviceViewTransferMode {
    FileBased = 0,
    MemoryBased = 1
}

enum QCPlugInExecutionMode {
    kQCPlugInExecutionModeProvider = 1,
    kQCPlugInExecutionModeProcessor = 2,
    kQCPlugInExecutionModeConsumer = 3
}

enum QCPlugInTimeMode {
    kQCPlugInTimeModeNone = 0,
    kQCPlugInTimeModeIdle = 1,
    kQCPlugInTimeModeTimeBase = 2
}

enum QLPreviewViewStyle {
    Normal = 0,
    Compact = 1
}

