
declare class IKCameraDeviceView extends NSView {

	setCameraDevice(_: ICCameraDevice)

	cameraDevice: ICCameraDevice;

	readonly canDeleteSelectedItems: boolean;

	readonly canDownloadSelectedItems: boolean;

	readonly canRotateSelectedItemsLeft: boolean;

	readonly canRotateSelectedItemsRight: boolean;

	setDelegate(_: IKCameraDeviceViewDelegate)

	delegate: IKCameraDeviceViewDelegate;

	setDisplaysDownloadsDirectoryControl(_: boolean)

	displaysDownloadsDirectoryControl: boolean;

	setDisplaysPostProcessApplicationControl(_: boolean)

	displaysPostProcessApplicationControl: boolean;

	setDownloadAllControlLabel(_: string)

	downloadAllControlLabel: string;

	setDownloadSelectedControlLabel(_: string)

	downloadSelectedControlLabel: string;

	setDownloadsDirectory(_: NSURL)

	downloadsDirectory: NSURL;

	setHasDisplayModeIcon(_: boolean)

	hasDisplayModeIcon: boolean;

	setHasDisplayModeTable(_: boolean)

	hasDisplayModeTable: boolean;

	setIconSize(_: number)

	iconSize: number;

	setMode(_: IKCameraDeviceViewDisplayMode)

	mode: IKCameraDeviceViewDisplayMode;

	setPostProcessApplication(_: NSURL)

	postProcessApplication: NSURL;

	setTransferMode(_: IKCameraDeviceViewTransferMode)

	transferMode: IKCameraDeviceViewTransferMode;

	deleteSelectedItems(_: any): void;

	downloadAllItems(_: any): void;

	downloadSelectedItems(_: any): void;

	rotateLeft(_: any): void;

	rotateRight(_: any): void;

	selectIndexesByExtendingSelection(_: NSIndexSet, byExtendingSelection: boolean): void;

	selectedIndexes(): NSIndexSet;
}

interface IKCameraDeviceViewDelegate {

	cameraDeviceViewDidDownloadFileLocationFileDataError?(_: IKCameraDeviceView, didDownloadFile: ICCameraFile, location: NSURL, fileData: NSData, error: NSError): void;

	cameraDeviceViewDidEncounterError?(_: IKCameraDeviceView, didEncounterError: NSError): void;

	cameraDeviceViewSelectionDidChange?(_: IKCameraDeviceView): void;
}
declare var IKCameraDeviceViewDelegate: {

	prototype: IKCameraDeviceViewDelegate;
};

enum IKCameraDeviceViewDisplayMode {

	None = -1,

	Table = 0,

	Icon = 1
}

globalThis.IKCameraDeviceViewDisplayMode = IKCameraDeviceViewDisplayMode;

enum IKCameraDeviceViewTransferMode {

	FileBased = 0,

	MemoryBased = 1
}

globalThis.IKCameraDeviceViewTransferMode = IKCameraDeviceViewTransferMode;

declare const IKCellsStyleNone: number;

declare const IKCellsStyleOutlined: number;

declare const IKCellsStyleShadowed: number;

declare const IKCellsStyleSubtitled: number;

declare const IKCellsStyleTitled: number;

declare class IKDeviceBrowserView extends NSView {

	setDelegate(_: IKDeviceBrowserViewDelegate)

	delegate: IKDeviceBrowserViewDelegate;

	setDisplaysLocalCameras(_: boolean)

	displaysLocalCameras: boolean;

	setDisplaysLocalScanners(_: boolean)

	displaysLocalScanners: boolean;

	setDisplaysNetworkCameras(_: boolean)

	displaysNetworkCameras: boolean;

	setDisplaysNetworkScanners(_: boolean)

	displaysNetworkScanners: boolean;

	setMode(_: IKDeviceBrowserViewDisplayMode)

	mode: IKDeviceBrowserViewDisplayMode;

	readonly selectedDevice: ICDevice;
}

interface IKDeviceBrowserViewDelegate {

	deviceBrowserViewDidEncounterError?(_: IKDeviceBrowserView, didEncounterError: NSError): void;

	deviceBrowserViewSelectionDidChange(_: IKDeviceBrowserView, selectionDidChange: ICDevice): void;
}
declare var IKDeviceBrowserViewDelegate: {

	prototype: IKDeviceBrowserViewDelegate;
};

enum IKDeviceBrowserViewDisplayMode {

	Table = 0,

	Outline = 1,

	Icon = 2
}

globalThis.IKDeviceBrowserViewDisplayMode = IKDeviceBrowserViewDisplayMode;

declare var IKFilterBrowserDefaultInputImage: string;

declare var IKFilterBrowserExcludeCategories: string;

declare var IKFilterBrowserExcludeFilters: string;

declare var IKFilterBrowserFilterDoubleClickNotification: string;

declare var IKFilterBrowserFilterSelectedNotification: string;

declare class IKFilterBrowserPanel extends NSPanel {

	static filterBrowserPanelWithStyleMask(_: number): any;

	static windowWithContentViewController(contentViewController: NSViewController): IKFilterBrowserPanel; // inherited from NSWindow

	beginSheetWithOptionsModalForWindowModalDelegateDidEndSelectorContextInfo(_: NSDictionary<any, any>, modalForWindow: NSWindow, modalDelegate: any, didEndSelector: string, contextInfo: any): void;

	beginWithOptionsModelessDelegateDidEndSelectorContextInfo(_: NSDictionary<any, any>, modelessDelegate: any, didEndSelector: string, contextInfo: any): void;

	filterBrowserViewWithOptions(_: NSDictionary<any, any>): IKFilterBrowserView;

	filterName(): string;

	finish(_: any): void;

	runModalWithOptions(_: NSDictionary<any, any>): number;
}

declare var IKFilterBrowserShowCategories: string;

declare var IKFilterBrowserShowPreview: string;

declare class IKFilterBrowserView extends NSView {

	filterName(): string;

	setPreviewState(_: boolean): void;
}

declare var IKFilterBrowserWillPreviewFilterNotification: string;

interface IKFilterCustomUIProvider {

	provideViewForUIConfigurationExcludedKeys(_: NSDictionary<any, any>, excludedKeys: NSArray<any>): IKFilterUIView;
}
declare var IKFilterCustomUIProvider: {

	prototype: IKFilterCustomUIProvider;
};

declare class IKFilterUIView extends NSView {

	static viewWithFrameFilter(_: CGRect, filter: CIFilter): any;

	static create(frame: CGRect, filter: CIFilter);

	filter(): CIFilter;

	objectController(): NSObjectController;
}

declare const IKGroupBezelStyle: number;

declare const IKGroupDisclosureStyle: number;

declare var IKImageBrowserBackgroundColorKey: string;

declare var IKImageBrowserCGImageRepresentationType: string;

declare var IKImageBrowserCGImageSourceRepresentationType: string;

declare class IKImageBrowserCell extends NSObject {

	cellState(): IKImageBrowserCellState;

	frame(): CGRect;

	imageAlignment(): NSImageAlignment;

	imageContainerFrame(): CGRect;

	imageFrame(): CGRect;

	indexOfRepresentedItem(): number;

	isSelected(): boolean;

	layerForType(_: string): CALayer;

	opacity(): number;

	representedItem(): any;

	selectionFrame(): CGRect;

	subtitleFrame(): CGRect;

	titleFrame(): CGRect;
}

declare var IKImageBrowserCellBackgroundLayer: string;

declare var IKImageBrowserCellForegroundLayer: string;

declare var IKImageBrowserCellPlaceHolderLayer: string;

declare var IKImageBrowserCellSelectionLayer: string;

enum IKImageBrowserCellState {

	StateNoImage = 0,

	StateInvalid = 1,

	StateReady = 2
}

globalThis.IKImageBrowserCellState = IKImageBrowserCellState;

declare var IKImageBrowserCellsHighlightedTitleAttributesKey: string;

declare var IKImageBrowserCellsOutlineColorKey: string;

declare var IKImageBrowserCellsSubtitleAttributesKey: string;

declare var IKImageBrowserCellsTitleAttributesKey: string;

enum IKImageBrowserDropOperation {

	On = 0,

	Before = 1
}

globalThis.IKImageBrowserDropOperation = IKImageBrowserDropOperation;

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

	static windowWithContentViewController(contentViewController: NSViewController): IKImageEditPanel; // inherited from NSWindow

	setDataSource(_: IKImageEditPanelDataSource)

	dataSource: IKImageEditPanelDataSource;

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

	thumbnailWithMaximumSize?(_: CGSize): any;
}
declare var IKImageEditPanelDataSource: {

	prototype: IKImageEditPanelDataSource;
};

declare class IKImageView extends NSView {

	setAutohidesScrollers(_: boolean)

	autohidesScrollers: boolean;

	setAutoresizes(_: boolean)

	autoresizes: boolean;

	setBackgroundColor(_: NSColor)

	backgroundColor: NSColor;

	setCurrentToolMode(_: string)

	currentToolMode: string;

	setDelegate(_: any)

	delegate: any;

	setDoubleClickOpensImageEditPanel(_: boolean)

	doubleClickOpensImageEditPanel: boolean;

	setEditable(_: boolean)

	editable: boolean;

	setHasHorizontalScroller(_: boolean)

	hasHorizontalScroller: boolean;

	setHasVerticalScroller(_: boolean)

	hasVerticalScroller: boolean;

	setImageCorrection(_: CIFilter)

	imageCorrection: CIFilter;

	setRotationAngle(_: number)

	rotationAngle: number;

	setSupportsDragAndDrop(_: boolean)

	supportsDragAndDrop: boolean;

	setZoomFactor(_: number)

	zoomFactor: number;

	convertImagePointToViewPoint(_: CGPoint): CGPoint;

	convertImageRectToViewRect(_: CGRect): CGRect;

	convertViewPointToImagePoint(_: CGPoint): CGPoint;

	convertViewRectToImageRect(_: CGRect): CGRect;

	crop(_: any): void;

	flipImageHorizontal(_: any): void;

	flipImageVertical(_: any): void;

	image(): any;

	imageProperties(): NSDictionary<any, any>;

	imageSize(): CGSize;

	overlayForType(_: string): CALayer;

	rotateImageLeft(_: any): void;

	rotateImageRight(_: any): void;

	scrollToPoint(_: CGPoint): void;

	scrollToRect(_: CGRect): void;

	setImageImageProperties(_: any, imageProperties: NSDictionary<any, any>): void;

	setImageWithURL(_: NSURL): void;

	setImageZoomFactorCenterPoint(_: number, centerPoint: CGPoint): void;

	setOverlayForType(_: CALayer, forType: string): void;

	setRotationAngleCenterPoint(_: number, centerPoint: CGPoint): void;

	zoomImageToActualSize(_: any): void;

	zoomImageToFit(_: any): void;

	zoomImageToRect(_: CGRect): void;

	zoomIn(_: any): void;

	zoomOut(_: any): void;
}

declare var IKOverlayTypeBackground: string;

declare var IKOverlayTypeImage: string;

declare class IKPictureTaker extends NSPanel {

	static pictureTaker(): IKPictureTaker;

	static windowWithContentViewController(contentViewController: NSViewController): IKPictureTaker; // inherited from NSWindow

	beginPictureTakerSheetForWindowWithDelegateDidEndSelectorContextInfo(_: NSWindow, withDelegate: any, didEndSelector: string, contextInfo: any): void;

	beginPictureTakerWithDelegateDidEndSelectorContextInfo(_: any, didEndSelector: string, contextInfo: any): void;

	inputImage(): NSImage;

	mirroring(): boolean;

	outputImage(): NSImage;

	popUpRecentsMenuForViewWithDelegateDidEndSelectorContextInfo(_: NSView, withDelegate: any, didEndSelector: string, contextInfo: any): void;

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

	setDelegate(_: any)

	delegate: any;

	readonly imageProperties: NSDictionary<any, any>;

	readonly imageUTType: string;

	readonly userSelection: NSDictionary<any, any>;

	static create(imageProperties: NSDictionary<any, any>, imageUTType: string);

	addSaveOptionsAccessoryViewToSavePanel(_: NSSavePanel): void;

	addSaveOptionsToView(_: NSView): void;
}

declare class IKScannerDeviceView extends NSView {

	setDelegate(_: IKScannerDeviceViewDelegate)

	delegate: IKScannerDeviceViewDelegate;

	setDisplaysDownloadsDirectoryControl(_: boolean)

	displaysDownloadsDirectoryControl: boolean;

	setDisplaysPostProcessApplicationControl(_: boolean)

	displaysPostProcessApplicationControl: boolean;

	setDocumentName(_: string)

	documentName: string;

	setDownloadsDirectory(_: NSURL)

	downloadsDirectory: NSURL;

	setHasDisplayModeAdvanced(_: boolean)

	hasDisplayModeAdvanced: boolean;

	setHasDisplayModeSimple(_: boolean)

	hasDisplayModeSimple: boolean;

	setMode(_: IKScannerDeviceViewDisplayMode)

	mode: IKScannerDeviceViewDisplayMode;

	setOverviewControlLabel(_: string)

	overviewControlLabel: string;

	setPostProcessApplication(_: NSURL)

	postProcessApplication: NSURL;

	setScanControlLabel(_: string)

	scanControlLabel: string;

	setScannerDevice(_: ICScannerDevice)

	scannerDevice: ICScannerDevice;

	setTransferMode(_: IKScannerDeviceViewTransferMode)

	transferMode: IKScannerDeviceViewTransferMode;
}

interface IKScannerDeviceViewDelegate {

	scannerDeviceViewDidEncounterError?(_: IKScannerDeviceView, didEncounterError: NSError): void;

	scannerDeviceViewDidScanToBandDataScanInfoError?(_: IKScannerDeviceView, didScanToBandData: ICScannerBandData, scanInfo: NSDictionary<any, any>, error: NSError): void;

	scannerDeviceViewDidScanToURLError?(_: IKScannerDeviceView, didScanToURL: NSURL, error: NSError): void;

	scannerDeviceViewDidScanToURLFileDataError?(_: IKScannerDeviceView, didScanToURL: NSURL, fileData: NSData, error: NSError): void;
}
declare var IKScannerDeviceViewDelegate: {

	prototype: IKScannerDeviceViewDelegate;
};

enum IKScannerDeviceViewDisplayMode {

	None = -1,

	Simple = 0,

	Advanced = 1
}

globalThis.IKScannerDeviceViewDisplayMode = IKScannerDeviceViewDisplayMode;

enum IKScannerDeviceViewTransferMode {

	FileBased = 0,

	MemoryBased = 1
}

globalThis.IKScannerDeviceViewTransferMode = IKScannerDeviceViewTransferMode;

declare class IKSlideshow extends NSObject {

	static canExportToApplication(_: string): boolean;

	static exportSlideshowItemToApplication(_: any, toApplication: string): void;

	static sharedSlideshow(): IKSlideshow;

	setAutoPlayDelay(_: number)

	autoPlayDelay: number;

	indexOfCurrentSlideshowItem(): number;

	reloadData(): void;

	reloadSlideshowItemAtIndex(_: number): void;

	runSlideshowWithDataSourceInModeOptions(_: IKSlideshowDataSource, inMode: string, options: NSDictionary<any, any>): void;

	stopSlideshow(_: any): void;
}

declare var IKSlideshowAudioFile: string;

interface IKSlideshowDataSource {

	canExportSlideshowItemAtIndexToApplication?(_: number, toApplication: string): boolean;

	nameOfSlideshowItemAtIndex?(_: number): string;

	numberOfSlideshowItems(): number;

	slideshowDidChangeCurrentIndex?(_: number): void;

	slideshowDidStop?(): void;

	slideshowItemAtIndex(_: number): any;

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

enum QCPlugInExecutionMode {

	kQCPlugInExecutionModeProvider = 1,

	kQCPlugInExecutionModeProcessor = 2,

	kQCPlugInExecutionModeConsumer = 3
}

globalThis.QCPlugInExecutionMode = QCPlugInExecutionMode;

enum QCPlugInTimeMode {

	kQCPlugInTimeModeNone = 0,

	kQCPlugInTimeModeIdle = 1,

	kQCPlugInTimeModeTimeBase = 2
}

globalThis.QCPlugInTimeMode = QCPlugInTimeMode;

interface QLPreviewItem extends NSObjectProtocol {

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

	static windowWithContentViewController(contentViewController: NSViewController): QLPreviewPanel; // inherited from NSWindow

	readonly currentController: any;

	readonly currentPreviewItem: QLPreviewItem;

	setCurrentPreviewItemIndex(_: number)

	currentPreviewItemIndex: number;

	setDataSource(_: QLPreviewPanelDataSource)

	dataSource: QLPreviewPanelDataSource;

	setDelegate(_: any)

	delegate: any;

	setDisplayState(_: any)

	displayState: any;

	readonly isInFullScreenMode: boolean;

	enterFullScreenModeWithOptions(_: NSScreen, withOptions: NSDictionary<any, any>): boolean;

	exitFullScreenModeWithOptions(_: NSDictionary<any, any>): void;

	refreshCurrentPreviewItem(): void;

	reloadData(): void;

	updateController(): void;
}

interface QLPreviewPanelDataSource {

	numberOfPreviewItemsInPreviewPanel(_: QLPreviewPanel): number;

	previewPanelPreviewItemAtIndex(_: QLPreviewPanel, previewItemAtIndex: number): QLPreviewItem;
}
declare var QLPreviewPanelDataSource: {

	prototype: QLPreviewPanelDataSource;
};

interface QLPreviewPanelDelegate extends NSWindowDelegate {

	previewPanelHandleEvent?(_: QLPreviewPanel, handleEvent: NSEvent): boolean;

	previewPanelSourceFrameOnScreenForPreviewItem?(_: QLPreviewPanel, sourceFrameOnScreenForPreviewItem: QLPreviewItem): CGRect;

	previewPanelTransitionImageForPreviewItemContentRect?(_: QLPreviewPanel, transitionImageForPreviewItem: QLPreviewItem, contentRect: CGRect): any;
}
declare var QLPreviewPanelDelegate: {

	prototype: QLPreviewPanelDelegate;
};

declare class QLPreviewView extends NSView {

	setAutostarts(_: boolean)

	autostarts: boolean;

	setDisplayState(_: any)

	displayState: any;

	setPreviewItem(_: QLPreviewItem)

	previewItem: QLPreviewItem;

	setShouldCloseWithWindow(_: boolean)

	shouldCloseWithWindow: boolean;

	static create(frame: CGRect, style: QLPreviewViewStyle);

	close(): void;

	refreshPreviewItem(): void;
}

enum QLPreviewViewStyle {

	Normal = 0,

	Compact = 1
}

globalThis.QLPreviewViewStyle = QLPreviewViewStyle;

interface QLPreviewingController extends NSObjectProtocol {

	preparePreviewOfFileAtURLCompletionHandler?(_: NSURL, completionHandler?: (p1: NSError) => void): void;

	preparePreviewOfSearchableItemWithIdentifierQueryStringCompletionHandler?(_: string, queryString?: string, completionHandler?: (p1: NSError) => void): void;
}
declare var QLPreviewingController: {

	prototype: QLPreviewingController;
};

declare class QuartzFilter extends NSObject {

	static quartzFilterWithOutputIntents(_: NSArray<any>): QuartzFilter;

	static quartzFilterWithProperties(_: NSDictionary<any, any>): QuartzFilter;

	static quartzFilterWithURL(_: NSURL): QuartzFilter;

	applyToContext(_: any): boolean;

	localizedName(): string;

	properties(): NSDictionary<any, any>;

	removeFromContext(_: any): void;

	url(): NSURL;
}

declare class QuartzFilterManager extends NSObject {

	static filterManager(): QuartzFilterManager;

	static filtersInDomains(_: NSArray<any>): NSArray<any>;

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
