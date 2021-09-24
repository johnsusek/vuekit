globalThis.AVCaptureViewControlsStyle = globalThis.AVCaptureViewControlsStyle || {};

globalThis.AVCaptureViewControlsStyle = {
    Inline: 0,
    Floating: 1,
    InlineDeviceSelection: 2,
    Default: 0,
    '0': 'Inline',
    '1': 'Floating',
    '2': 'InlineDeviceSelection',
    '0': 'Default'
}

globalThis.AVPlayerViewControlsStyle = globalThis.AVPlayerViewControlsStyle || {};

globalThis.AVPlayerViewControlsStyle = {
    None: 0,
    Inline: 1,
    Floating: 2,
    Minimal: 3,
    Default: 1,
    '0': 'None',
    '1': 'Inline',
    '2': 'Floating',
    '3': 'Minimal',
    '1': 'Default'
}

globalThis.AVPlayerViewTrimResult = globalThis.AVPlayerViewTrimResult || {};

globalThis.AVPlayerViewTrimResult = {
    OKButton: 0,
    CancelButton: 1,
    '0': 'OKButton',
    '1': 'CancelButton'
}

globalThis.AVRoutePickerViewButtonState = globalThis.AVRoutePickerViewButtonState || {};

globalThis.AVRoutePickerViewButtonState = {
    Normal: 0,
    NormalHighlighted: 1,
    Active: 2,
    ActiveHighlighted: 3,
    '0': 'Normal',
    '1': 'NormalHighlighted',
    '2': 'Active',
    '3': 'ActiveHighlighted'
}

declare class AVCaptureView extends NSView {
  controlsStyle: AVCaptureViewControlsStyle;
  setControlsStyle(_: AVCaptureViewControlsStyle)
  delegate: AVCaptureViewDelegate;
  setDelegate(_: AVCaptureViewDelegate)
  readonly fileOutput: AVCaptureFileOutput;
  readonly session: AVCaptureSession;
  videoGravity: string;
  setVideoGravity(_: string)
  setSessionShowVideoPreviewShowAudioPreview(_?: AVCaptureSession, showVideoPreview: boolean, showAudioPreview: boolean): void;
}

interface AVCaptureViewDelegate extends NSObject {
  captureViewStartRecordingToFileOutput(_: AVCaptureView, startRecordingTo: AVCaptureFileOutput): void;
}

declare var AVCaptureViewDelegate: {
  prototype: AVCaptureViewDelegate;
};

declare class AVPictureInPictureController extends NSObject {
  static isPictureInPictureSupported(): boolean;
  delegate: AVPictureInPictureControllerDelegate;
  setDelegate(_: AVPictureInPictureControllerDelegate)
  readonly isPictureInPictureActive: boolean;
  readonly isPictureInPicturePossible: boolean;
  readonly isPictureInPictureSuspended: boolean;
  readonly playerLayer: AVPlayerLayer;
  static pictureInPictureButtonStartImage(): NSImage;
  static pictureInPictureButtonStopImage(): NSImage;
  static createWithPlayerLayer(playerLayer: AVPlayerLayer): this;
  startPictureInPicture(): void;
  stopPictureInPicture(): void;
}

interface AVPictureInPictureControllerDelegate extends NSObject {
  pictureInPictureControllerFailedToStartPictureInPictureWithError?(_: AVPictureInPictureController, failedToStartPictureInPictureWithError: Error): void;
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
  actionPopUpButtonMenu: NSMenu;
  setActionPopUpButtonMenu(_: NSMenu)
  allowsPictureInPicturePlayback: boolean;
  setAllowsPictureInPicturePlayback(_: boolean)
  readonly canBeginTrimming: boolean;
  readonly contentOverlayView: NSView;
  controlsStyle: AVPlayerViewControlsStyle;
  setControlsStyle(_: AVPlayerViewControlsStyle)
  pictureInPictureDelegate: AVPlayerViewPictureInPictureDelegate;
  setPictureInPictureDelegate(_: AVPlayerViewPictureInPictureDelegate)
  player: AVPlayer;
  setPlayer(_: AVPlayer)
  readonly isReadyForDisplay: boolean;
  showsFrameSteppingButtons: boolean;
  setShowsFrameSteppingButtons(_: boolean)
  showsFullScreenToggleButton: boolean;
  setShowsFullScreenToggleButton(_: boolean)
  showsSharingServiceButton: boolean;
  setShowsSharingServiceButton(_: boolean)
  showsTimecodes: boolean;
  setShowsTimecodes(_: boolean)
  updatesNowPlayingInfoCenter: boolean;
  setUpdatesNowPlayingInfoCenter(_: boolean)
  readonly videoBounds: NSRect;
  videoGravity: string;
  setVideoGravity(_: string)
  beginTrimmingWithCompletionHandler(completionHandler?: (p1: AVPlayerViewTrimResult) => void): void;
  flashChapterNumberChapterTitle(_: number, chapterTitle?: string): void;
}

interface AVPlayerViewPictureInPictureDelegate extends NSObject {
  playerViewFailedToStartPictureInPictureWithError?(_: AVPlayerView, failedToStartPictureInPictureWithError: Error): void;
  playerViewRestoreUserInterfaceForPictureInPictureStopWithCompletionHandler?(_: AVPlayerView, restoreUserInterfaceForPictureInPictureStopWithCompletionHandler: (p1: boolean) => void): void;
  playerViewDidStartPictureInPicture?(inPicture: AVPlayerView): void;
  playerViewDidStopPictureInPicture?(inPicture: AVPlayerView): void;
  playerViewShouldAutomaticallyDismissAtPictureInPictureStart?(inPictureStart: AVPlayerView): boolean;
  playerViewWillStartPictureInPicture?(inPicture: AVPlayerView): void;
  playerViewWillStopPictureInPicture?(inPicture: AVPlayerView): void;
}

declare var AVPlayerViewPictureInPictureDelegate: {
  prototype: AVPlayerViewPictureInPictureDelegate;
};

declare class AVRoutePickerView extends NSView {
  delegate: AVRoutePickerViewDelegate;
  setDelegate(_: AVRoutePickerViewDelegate)
  player: AVPlayer;
  setPlayer(_: AVPlayer)
  isRoutePickerButtonBordered: boolean;
  setRoutePickerButtonBordered(_: boolean)
  routePickerButtonColorForState(for_: AVRoutePickerViewButtonState): NSColor;
  setRoutePickerButtonColorForState(_?: NSColor, for_: AVRoutePickerViewButtonState): void;
}

interface AVRoutePickerViewDelegate extends NSObject {
  routePickerViewDidEndPresentingRoutes?(_: AVRoutePickerView): void;
  routePickerViewWillBeginPresentingRoutes?(_: AVRoutePickerView): void;
}

declare var AVRoutePickerViewDelegate: {
  prototype: AVRoutePickerViewDelegate;
};

enum AVCaptureViewControlsStyle {
    Inline = 0,
    Floating = 1,
    InlineDeviceSelection = 2,
    Default = 0
}

enum AVPlayerViewControlsStyle {
    None = 0,
    Inline = 1,
    Floating = 2,
    Minimal = 3,
    Default = 1
}

enum AVPlayerViewTrimResult {
    OKButton = 0,
    CancelButton = 1
}

enum AVRoutePickerViewButtonState {
    Normal = 0,
    NormalHighlighted = 1,
    Active = 2,
    ActiveHighlighted = 3
}

