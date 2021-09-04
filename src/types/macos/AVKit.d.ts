
declare class AVCaptureView extends NSView {

	setControlsStyle(_: AVCaptureViewControlsStyle)

	controlsStyle: AVCaptureViewControlsStyle;

	setDelegate(_: AVCaptureViewDelegate)

	delegate: AVCaptureViewDelegate;

	readonly fileOutput: AVCaptureFileOutput;

	readonly session: AVCaptureSession;

	setVideoGravity(_: string)

	videoGravity: string;

	setSessionShowVideoPreviewShowAudioPreview(_?: AVCaptureSession, showVideoPreview: boolean, showAudioPreview: boolean): void;
}

enum AVCaptureViewControlsStyle {

	Inline = 0,

	Floating = 1,

	InlineDeviceSelection = 2,

	Default = 0
}


interface AVCaptureViewDelegate extends NSObjectProtocol {

	captureViewStartRecordingToFileOutput(_: AVCaptureView, startRecordingToFileOutput: AVCaptureFileOutput): void;
}
declare var AVCaptureViewDelegate: {

	prototype: AVCaptureViewDelegate;
};

declare class AVPictureInPictureController extends NSObject {

	static isPictureInPictureSupported(): boolean;

	setDelegate(_: AVPictureInPictureControllerDelegate)

	delegate: AVPictureInPictureControllerDelegate;

	readonly isPictureInPictureActive: boolean;

	readonly isPictureInPicturePossible: boolean;

	readonly isPictureInPictureSuspended: boolean;

	readonly playerLayer: AVPlayerLayer;

	static pictureInPictureButtonStartImage(): NSImage;

	static pictureInPictureButtonStopImage(): NSImage;

	static create(playerLayer: AVPlayerLayer);

	startPictureInPicture(): void;

	stopPictureInPicture(): void;
}

interface AVPictureInPictureControllerDelegate extends NSObjectProtocol {

	pictureInPictureControllerFailedToStartPictureInPictureWithError?(_: AVPictureInPictureController, failedToStartPictureInPictureWithError: NSError): void;

	pictureInPictureControllerRestoreUserInterfaceForPictureInPictureStopWithCompletionHandler?(_: AVPictureInPictureController, restoreUserInterfaceForPictureInPictureStopWithCompletionHandler: (p1: boolean) => void): void;

	pictureInPictureControllerDidStartPictureInPicture?(_: AVPictureInPictureController): void;

	pictureInPictureControllerDidStopPictureInPicture?(_: AVPictureInPictureController): void;

	pictureInPictureControllerWillStartPictureInPicture?(_: AVPictureInPictureController): void;

	pictureInPictureControllerWillStopPictureInPicture?(_: AVPictureInPictureController): void;
}
declare var AVPictureInPictureControllerDelegate: {

	prototype: AVPictureInPictureControllerDelegate;
};

declare class AVPlayerView extends NSView {

	setActionPopUpButtonMenu(_: NSMenu)

	actionPopUpButtonMenu: NSMenu;

	setAllowsPictureInPicturePlayback(_: boolean)

	allowsPictureInPicturePlayback: boolean;

	readonly canBeginTrimming: boolean;

	readonly contentOverlayView: NSView;

	setControlsStyle(_: AVPlayerViewControlsStyle)

	controlsStyle: AVPlayerViewControlsStyle;

	setPictureInPictureDelegate(_: AVPlayerViewPictureInPictureDelegate)

	pictureInPictureDelegate: AVPlayerViewPictureInPictureDelegate;

	setPlayer(_: AVPlayer)

	player: AVPlayer;

	readonly isReadyForDisplay: boolean;

	setShowsFrameSteppingButtons(_: boolean)

	showsFrameSteppingButtons: boolean;

	setShowsFullScreenToggleButton(_: boolean)

	showsFullScreenToggleButton: boolean;

	setShowsSharingServiceButton(_: boolean)

	showsSharingServiceButton: boolean;

	setShowsTimecodes(_: boolean)

	showsTimecodes: boolean;

	setUpdatesNowPlayingInfoCenter(_: boolean)

	updatesNowPlayingInfoCenter: boolean;

	readonly videoBounds: CGRect;

	setVideoGravity(_: string)

	videoGravity: string;

	beginTrimmingWithCompletionHandler(_?: (p1: AVPlayerViewTrimResult) => void): void;

	flashChapterNumberChapterTitle(_: number, chapterTitle?: string): void;
}

enum AVPlayerViewControlsStyle {

	None = 0,

	Inline = 1,

	Floating = 2,

	Minimal = 3,

	Default = 1
}


interface AVPlayerViewPictureInPictureDelegate extends NSObjectProtocol {

	playerViewFailedToStartPictureInPictureWithError?(_: AVPlayerView, failedToStartPictureInPictureWithError: NSError): void;

	playerViewRestoreUserInterfaceForPictureInPictureStopWithCompletionHandler?(_: AVPlayerView, restoreUserInterfaceForPictureInPictureStopWithCompletionHandler: (p1: boolean) => void): void;

	playerViewDidStartPictureInPicture?(_: AVPlayerView): void;

	playerViewDidStopPictureInPicture?(_: AVPlayerView): void;

	playerViewShouldAutomaticallyDismissAtPictureInPictureStart?(_: AVPlayerView): boolean;

	playerViewWillStartPictureInPicture?(_: AVPlayerView): void;

	playerViewWillStopPictureInPicture?(_: AVPlayerView): void;
}
declare var AVPlayerViewPictureInPictureDelegate: {

	prototype: AVPlayerViewPictureInPictureDelegate;
};

enum AVPlayerViewTrimResult {

	OKButton = 0,

	CancelButton = 1
}


declare class AVRoutePickerView extends NSView {

	setDelegate(_: AVRoutePickerViewDelegate)

	delegate: AVRoutePickerViewDelegate;

	setPlayer(_: AVPlayer)

	player: AVPlayer;

	setRoutePickerButtonBordered(_: boolean)

	isRoutePickerButtonBordered: boolean;

	routePickerButtonColorForState(_: AVRoutePickerViewButtonState): NSColor;

	setRoutePickerButtonColorForState(_?: NSColor, forState: AVRoutePickerViewButtonState): void;
}

enum AVRoutePickerViewButtonState {

	Normal = 0,

	NormalHighlighted = 1,

	Active = 2,

	ActiveHighlighted = 3
}


interface AVRoutePickerViewDelegate extends NSObjectProtocol {

	routePickerViewDidEndPresentingRoutes?(_: AVRoutePickerView): void;

	routePickerViewWillBeginPresentingRoutes?(_: AVRoutePickerView): void;
}
declare var AVRoutePickerViewDelegate: {

	prototype: AVRoutePickerViewDelegate;
};
