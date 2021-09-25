globalThis.NSAccessibility = globalThis.NSAccessibility || {};

globalThis.NSAccessibility.AnnotationPosition = {
    FullRange: 0,
    Start: 1,
    End: 2,
    '0': 'FullRange',
    '1': 'Start',
    '2': 'End'
}

globalThis.NSAccessibilityCustomRotor = globalThis.NSAccessibilityCustomRotor || {};

globalThis.NSAccessibilityCustomRotor.SearchDirection = {
    Previous: 0,
    Next: 1,
    '0': 'Previous',
    '1': 'Next'
}

globalThis.NSAccessibilityCustomRotor.RotorType = {
    Custom: 0,
    Any: 1,
    Annotation: 2,
    BoldText: 3,
    Heading: 4,
    HeadingLevel1: 5,
    HeadingLevel2: 6,
    HeadingLevel3: 7,
    HeadingLevel4: 8,
    HeadingLevel5: 9,
    HeadingLevel6: 10,
    Image: 11,
    ItalicText: 12,
    Landmark: 13,
    Link: 14,
    List: 15,
    MisspelledWord: 16,
    Table: 17,
    TextField: 18,
    UnderlinedText: 19,
    VisitedLink: 20,
    '0': 'Custom',
    '1': 'Any',
    '2': 'Annotation',
    '3': 'BoldText',
    '4': 'Heading',
    '5': 'HeadingLevel1',
    '6': 'HeadingLevel2',
    '7': 'HeadingLevel3',
    '8': 'HeadingLevel4',
    '9': 'HeadingLevel5',
    '10': 'HeadingLevel6',
    '11': 'Image',
    '12': 'ItalicText',
    '13': 'Landmark',
    '14': 'Link',
    '15': 'List',
    '16': 'MisspelledWord',
    '17': 'Table',
    '18': 'TextField',
    '19': 'UnderlinedText',
    '20': 'VisitedLink'
}

globalThis.NSAccessibility.Orientation = {
    Unknown: 0,
    Vertical: 1,
    Horizontal: 2,
    '0': 'Unknown',
    '1': 'Vertical',
    '2': 'Horizontal'
}

globalThis.NSAccessibilityPriorityLevel = globalThis.NSAccessibilityPriorityLevel || {};

globalThis.NSAccessibilityPriorityLevel = {
    Low: 10,
    Medium: 50,
    High: 90,
    '10': 'Low',
    '50': 'Medium',
    '90': 'High'
}

globalThis.NSAccessibility.RulerMarkerType = {
    Unknown: 0,
    TabStopLeft: 1,
    TabStopRight: 2,
    TabStopCenter: 3,
    TabStopDecimal: 4,
    IndentHead: 5,
    IndentTail: 6,
    IndentFirstLine: 7,
    '0': 'Unknown',
    '1': 'TabStopLeft',
    '2': 'TabStopRight',
    '3': 'TabStopCenter',
    '4': 'TabStopDecimal',
    '5': 'IndentHead',
    '6': 'IndentTail',
    '7': 'IndentFirstLine'
}

globalThis.NSAccessibility.SortDirection = {
    Unknown: 0,
    Ascending: 1,
    Descending: 2,
    '0': 'Unknown',
    '1': 'Ascending',
    '2': 'Descending'
}

globalThis.NSAccessibility.Units = {
    Unknown: 0,
    Inches: 1,
    Centimeters: 2,
    Points: 3,
    Picas: 4,
    '0': 'Unknown',
    '1': 'Inches',
    '2': 'Centimeters',
    '3': 'Points',
    '4': 'Picas'
}

globalThis.NSAlert = globalThis.NSAlert || {};

globalThis.NSAlert.Style = {
    Warning: 0,
    Informational: 1,
    Critical: 2,
    '0': 'Warning',
    '1': 'Informational',
    '2': 'Critical'
}

globalThis.NSAnimation = globalThis.NSAnimation || {};

globalThis.NSAnimation.BlockingMode = {
    Blocking: 0,
    Nonblocking: 1,
    NonblockingThreaded: 2,
    '0': 'Blocking',
    '1': 'Nonblocking',
    '2': 'NonblockingThreaded'
}

globalThis.NSAnimation.Curve = {
    EaseInOut: 0,
    EaseIn: 1,
    EaseOut: 2,
    Linear: 3,
    '0': 'EaseInOut',
    '1': 'EaseIn',
    '2': 'EaseOut',
    '3': 'Linear'
}

globalThis.NSAnimationEffect = globalThis.NSAnimationEffect || {};

globalThis.NSAnimationEffect = {
    DisappearingItemDefault: 0,
    Poof: 10,
    '0': 'DisappearingItemDefault',
    '10': 'Poof'
}

globalThis.NSApplication = globalThis.NSApplication || {};

globalThis.NSApplication.ActivationOptions = {
    ActivateAllWindows: 1,
    ActivateIgnoringOtherApps: 2,
    '1': 'ActivateAllWindows',
    '2': 'ActivateIgnoringOtherApps'
}

globalThis.NSApplication.ActivationPolicy = {
    Regular: 0,
    Accessory: 1,
    Prohibited: 2,
    '0': 'Regular',
    '1': 'Accessory',
    '2': 'Prohibited'
}

globalThis.NSApplication.DelegateReply = {
    Success: 0,
    Cancel: 1,
    Failure: 2,
    '0': 'Success',
    '1': 'Cancel',
    '2': 'Failure'
}

globalThis.NSApplication.OcclusionState = {
    Visible: 2,
    '2': 'Visible'
}

globalThis.NSApplication.PresentationOptions = {
    Default: 0,
    AutoHideDock: 1,
    HideDock: 2,
    AutoHideMenuBar: 4,
    HideMenuBar: 8,
    DisableAppleMenu: 16,
    DisableProcessSwitching: 32,
    DisableForceQuit: 64,
    DisableSessionTermination: 128,
    DisableHideApplication: 256,
    DisableMenuBarTransparency: 512,
    FullScreen: 1024,
    AutoHideToolbar: 2048,
    DisableCursorLocationAssistance: 4096,
    '0': 'Default',
    '1': 'AutoHideDock',
    '2': 'HideDock',
    '4': 'AutoHideMenuBar',
    '8': 'HideMenuBar',
    '16': 'DisableAppleMenu',
    '32': 'DisableProcessSwitching',
    '64': 'DisableForceQuit',
    '128': 'DisableSessionTermination',
    '256': 'DisableHideApplication',
    '512': 'DisableMenuBarTransparency',
    '1024': 'FullScreen',
    '2048': 'AutoHideToolbar',
    '4096': 'DisableCursorLocationAssistance'
}

globalThis.NSApplication.PrintReply = {
    PrintingCancelled: 0,
    PrintingSuccess: 1,
    PrintingFailure: 3,
    PrintingReplyLater: 2,
    '0': 'PrintingCancelled',
    '1': 'PrintingSuccess',
    '3': 'PrintingFailure',
    '2': 'PrintingReplyLater'
}

globalThis.NSApplication.TerminateReply = {
    TerminateCancel: 0,
    TerminateNow: 1,
    TerminateLater: 2,
    '0': 'TerminateCancel',
    '1': 'TerminateNow',
    '2': 'TerminateLater'
}

globalThis.NSView = globalThis.NSView || {};

globalThis.NSView.AutoresizingMask = {
    ViewNotSizable: 0,
    ViewMinXMargin: 1,
    ViewWidthSizable: 2,
    ViewMaxXMargin: 4,
    ViewMinYMargin: 8,
    ViewHeightSizable: 16,
    ViewMaxYMargin: 32,
    '0': 'ViewNotSizable',
    '1': 'ViewMinXMargin',
    '2': 'ViewWidthSizable',
    '4': 'ViewMaxXMargin',
    '8': 'ViewMinYMargin',
    '16': 'ViewHeightSizable',
    '32': 'ViewMaxYMargin'
}

globalThis.NSView.BackgroundStyle = {
    Normal: 0,
    Emphasized: 1,
    Raised: 2,
    Lowered: 3,
    '0': 'Normal',
    '1': 'Emphasized',
    '2': 'Raised',
    '3': 'Lowered'
}

globalThis.NSWindow = globalThis.NSWindow || {};

globalThis.NSWindow.BackingStoreType = {
    Retained: 0,
    Nonretained: 1,
    Buffered: 2,
    '0': 'Retained',
    '1': 'Nonretained',
    '2': 'Buffered'
}

globalThis.NSButton = globalThis.NSButton || {};

globalThis.NSButton.BezelStyle = {
    Rounded: 1,
    RegularSquare: 2,
    Disclosure: 5,
    ShadowlessSquare: 6,
    Circular: 7,
    TexturedSquare: 8,
    HelpButton: 9,
    SmallSquare: 10,
    TexturedRounded: 11,
    RoundRect: 12,
    Recessed: 13,
    RoundedDisclosure: 14,
    Inline: 15,
    '1': 'Rounded',
    '2': 'RegularSquare',
    '5': 'Disclosure',
    '6': 'ShadowlessSquare',
    '7': 'Circular',
    '8': 'TexturedSquare',
    '9': 'HelpButton',
    '10': 'SmallSquare',
    '11': 'TexturedRounded',
    '12': 'RoundRect',
    '13': 'Recessed',
    '14': 'RoundedDisclosure',
    '15': 'Inline'
}

globalThis.NSBezierPath = globalThis.NSBezierPath || {};

globalThis.NSBezierPath.ElementType = {
    MoveTo: 0,
    LineTo: 1,
    CurveTo: 2,
    ClosePath: 3,
    '0': 'MoveTo',
    '1': 'LineTo',
    '2': 'CurveTo',
    '3': 'ClosePath'
}

globalThis.NSBitmapImageRep = globalThis.NSBitmapImageRep || {};

globalThis.NSBitmapImageRep.Format = {
    AlphaFirst: 1,
    AlphaNonpremultiplied: 2,
    FloatingPointSamples: 4,
    SixteenBitLittleEndian: 256,
    ThirtyTwoBitLittleEndian: 512,
    SixteenBitBigEndian: 1024,
    ThirtyTwoBitBigEndian: 2048,
    '1': 'AlphaFirst',
    '2': 'AlphaNonpremultiplied',
    '4': 'FloatingPointSamples',
    '256': 'SixteenBitLittleEndian',
    '512': 'ThirtyTwoBitLittleEndian',
    '1024': 'SixteenBitBigEndian',
    '2048': 'ThirtyTwoBitBigEndian'
}

globalThis.NSBitmapImageRep.FileType = {
    TIFF: 0,
    BMP: 1,
    GIF: 2,
    JPEG: 3,
    PNG: 4,
    JPEG2000: 5,
    '0': 'TIFF',
    '1': 'BMP',
    '2': 'GIF',
    '3': 'JPEG',
    '4': 'PNG',
    '5': 'JPEG2000'
}

globalThis.NSBorderType = globalThis.NSBorderType || {};

globalThis.NSBorderType = {
    NoBorder: 0,
    LineBorder: 1,
    BezelBorder: 2,
    GrooveBorder: 3,
    '0': 'NoBorder',
    '1': 'LineBorder',
    '2': 'BezelBorder',
    '3': 'GrooveBorder'
}

globalThis.NSBox = globalThis.NSBox || {};

globalThis.NSBox.BoxType = {
    Primary: 0,
    Separator: 2,
    Custom: 4,
    '0': 'Primary',
    '2': 'Separator',
    '4': 'Custom'
}

globalThis.NSBrowser = globalThis.NSBrowser || {};

globalThis.NSBrowser.ColumnResizingType = {
    NoColumnResizing: 0,
    AutoColumnResizing: 1,
    UserColumnResizing: 2,
    '0': 'NoColumnResizing',
    '1': 'AutoColumnResizing',
    '2': 'UserColumnResizing'
}

globalThis.NSBrowser.DropOperation = {
    On: 0,
    Above: 1,
    '0': 'On',
    '1': 'Above'
}

globalThis.NSButton.ButtonType = {
    MomentaryLight: 0,
    PushOnPushOff: 1,
    Toggle: 2,
    Switch: 3,
    Radio: 4,
    MomentaryChange: 5,
    OnOff: 6,
    MomentaryPushIn: 7,
    Accelerator: 8,
    MultiLevelAccelerator: 9,
    '0': 'MomentaryLight',
    '1': 'PushOnPushOff',
    '2': 'Toggle',
    '3': 'Switch',
    '4': 'Radio',
    '5': 'MomentaryChange',
    '6': 'OnOff',
    '7': 'MomentaryPushIn',
    '8': 'Accelerator',
    '9': 'MultiLevelAccelerator'
}

globalThis.NSCell = globalThis.NSCell || {};

globalThis.NSCell.Attribute = {
    CellDisabled: 0,
    CellState: 1,
    PushInCell: 2,
    CellEditable: 3,
    ChangeGrayCell: 4,
    CellHighlighted: 5,
    CellLightsByContents: 6,
    CellLightsByGray: 7,
    ChangeBackgroundCell: 8,
    CellLightsByBackground: 9,
    CellIsBordered: 10,
    CellHasOverlappingImage: 11,
    CellHasImageHorizontal: 12,
    CellHasImageOnLeftOrBottom: 13,
    CellChangesContents: 14,
    CellIsInsetButton: 15,
    CellAllowsMixedState: 16,
    '0': 'CellDisabled',
    '1': 'CellState',
    '2': 'PushInCell',
    '3': 'CellEditable',
    '4': 'ChangeGrayCell',
    '5': 'CellHighlighted',
    '6': 'CellLightsByContents',
    '7': 'CellLightsByGray',
    '8': 'ChangeBackgroundCell',
    '9': 'CellLightsByBackground',
    '10': 'CellIsBordered',
    '11': 'CellHasOverlappingImage',
    '12': 'CellHasImageHorizontal',
    '13': 'CellHasImageOnLeftOrBottom',
    '14': 'CellChangesContents',
    '15': 'CellIsInsetButton',
    '16': 'CellAllowsMixedState'
}

globalThis.NSCell.HitResult = {
    None: 0,
    ContentArea: 1,
    EditableTextArea: 2,
    TrackableArea: 4,
    '0': 'None',
    '1': 'ContentArea',
    '2': 'EditableTextArea',
    '4': 'TrackableArea'
}

globalThis.NSControl = globalThis.NSControl || {};

globalThis.NSControl.ImagePosition = {
    NoImage: 0,
    ImageOnly: 1,
    ImageLeft: 2,
    ImageRight: 3,
    ImageBelow: 4,
    ImageAbove: 5,
    ImageOverlaps: 6,
    ImageLeading: 7,
    ImageTrailing: 8,
    '0': 'NoImage',
    '1': 'ImageOnly',
    '2': 'ImageLeft',
    '3': 'ImageRight',
    '4': 'ImageBelow',
    '5': 'ImageAbove',
    '6': 'ImageOverlaps',
    '7': 'ImageLeading',
    '8': 'ImageTrailing'
}

globalThis.NSCell.StyleMask = {
    NoCellMask: 0,
    ContentsCellMask: 1,
    PushInCellMask: 2,
    ChangeGrayCellMask: 4,
    ChangeBackgroundCellMask: 8,
    '0': 'NoCellMask',
    '1': 'ContentsCellMask',
    '2': 'PushInCellMask',
    '4': 'ChangeGrayCellMask',
    '8': 'ChangeBackgroundCellMask'
}

globalThis.NSCell.CellType = {
    NullCellType: 0,
    TextCellType: 1,
    ImageCellType: 2,
    '0': 'NullCellType',
    '1': 'TextCellType',
    '2': 'ImageCellType'
}

globalThis.NSCharacterCollection = globalThis.NSCharacterCollection || {};

globalThis.NSCharacterCollection = {
    IdentityMappingCharacterCollection: 0,
    AdobeCNS1CharacterCollection: 1,
    AdobeGB1CharacterCollection: 2,
    AdobeJapan1CharacterCollection: 3,
    AdobeJapan2CharacterCollection: 4,
    AdobeKorea1CharacterCollection: 5,
    '0': 'IdentityMappingCharacterCollection',
    '1': 'AdobeCNS1CharacterCollection',
    '2': 'AdobeGB1CharacterCollection',
    '3': 'AdobeJapan1CharacterCollection',
    '4': 'AdobeJapan2CharacterCollection',
    '5': 'AdobeKorea1CharacterCollection'
}

globalThis.NSSharingService = globalThis.NSSharingService || {};

globalThis.NSSharingService.CloudKitOptions = {
    Standard: 0,
    AllowPublic: 1,
    AllowPrivate: 2,
    AllowReadOnly: 16,
    AllowReadWrite: 32,
    '0': 'Standard',
    '1': 'AllowPublic',
    '2': 'AllowPrivate',
    '16': 'AllowReadOnly',
    '32': 'AllowReadWrite'
}

globalThis.NSCollectionElementCategory = globalThis.NSCollectionElementCategory || {};

globalThis.NSCollectionElementCategory = {
    Item: 0,
    SupplementaryView: 1,
    DecorationView: 2,
    InterItemGap: 3,
    '0': 'Item',
    '1': 'SupplementaryView',
    '2': 'DecorationView',
    '3': 'InterItemGap'
}

globalThis.NSCollectionLayoutSectionOrthogonalScrollingBehavior = globalThis.NSCollectionLayoutSectionOrthogonalScrollingBehavior || {};

globalThis.NSCollectionLayoutSectionOrthogonalScrollingBehavior = {
    None: 0,
    Continuous: 1,
    ContinuousGroupLeadingBoundary: 2,
    Paging: 3,
    GroupPaging: 4,
    GroupPagingCentered: 5,
    '0': 'None',
    '1': 'Continuous',
    '2': 'ContinuousGroupLeadingBoundary',
    '3': 'Paging',
    '4': 'GroupPaging',
    '5': 'GroupPagingCentered'
}

globalThis.NSCollectionView = globalThis.NSCollectionView || {};

globalThis.NSCollectionView.UpdateAction = {
    Insert: 0,
    Delete: 1,
    Reload: 2,
    Move: 3,
    None: 4,
    '0': 'Insert',
    '1': 'Delete',
    '2': 'Reload',
    '3': 'Move',
    '4': 'None'
}

globalThis.NSCollectionView.DropOperation = {
    On: 0,
    Before: 1,
    '0': 'On',
    '1': 'Before'
}

globalThis.NSCollectionViewItem = globalThis.NSCollectionViewItem || {};

globalThis.NSCollectionViewItem.HighlightState = {
    None: 0,
    ForSelection: 1,
    ForDeselection: 2,
    AsDropTarget: 3,
    '0': 'None',
    '1': 'ForSelection',
    '2': 'ForDeselection',
    '3': 'AsDropTarget'
}

globalThis.NSCollectionView.ScrollDirection = {
    Vertical: 0,
    Horizontal: 1,
    '0': 'Vertical',
    '1': 'Horizontal'
}

globalThis.NSCollectionView.ScrollPosition = {
    None: 0,
    Top: 1,
    CenteredVertically: 2,
    Bottom: 4,
    NearestHorizontalEdge: 512,
    Left: 8,
    CenteredHorizontally: 16,
    Right: 32,
    LeadingEdge: 64,
    TrailingEdge: 128,
    NearestVerticalEdge: 256,
    '0': 'None',
    '1': 'Top',
    '2': 'CenteredVertically',
    '4': 'Bottom',
    '512': 'NearestHorizontalEdge',
    '8': 'Left',
    '16': 'CenteredHorizontally',
    '32': 'Right',
    '64': 'LeadingEdge',
    '128': 'TrailingEdge',
    '256': 'NearestVerticalEdge'
}

globalThis.NSColorPanel = globalThis.NSColorPanel || {};

globalThis.NSColorPanel.Mode = {
    None: -1,
    Gray: 0,
    RGB: 1,
    CMYK: 2,
    HSB: 3,
    CustomPalette: 4,
    ColorList: 5,
    Wheel: 6,
    Crayon: 7,
    '-1': 'None',
    '0': 'Gray',
    '1': 'RGB',
    '2': 'CMYK',
    '3': 'HSB',
    '4': 'CustomPalette',
    '5': 'ColorList',
    '6': 'Wheel',
    '7': 'Crayon'
}

globalThis.NSColorPanel.Options = {
    GrayModeMask: 1,
    RGBModeMask: 2,
    CMYKModeMask: 4,
    HSBModeMask: 8,
    CustomPaletteModeMask: 16,
    ColorListModeMask: 32,
    WheelModeMask: 64,
    CrayonModeMask: 128,
    AllModesMask: 65535,
    '1': 'GrayModeMask',
    '2': 'RGBModeMask',
    '4': 'CMYKModeMask',
    '8': 'HSBModeMask',
    '16': 'CustomPaletteModeMask',
    '32': 'ColorListModeMask',
    '64': 'WheelModeMask',
    '128': 'CrayonModeMask',
    '65535': 'AllModesMask'
}

globalThis.NSColorRenderingIntent = globalThis.NSColorRenderingIntent || {};

globalThis.NSColorRenderingIntent = {
    Default: 0,
    AbsoluteColorimetric: 1,
    RelativeColorimetric: 2,
    Perceptual: 3,
    Saturation: 4,
    '0': 'Default',
    '1': 'AbsoluteColorimetric',
    '2': 'RelativeColorimetric',
    '3': 'Perceptual',
    '4': 'Saturation'
}

globalThis.NSColorSpace = globalThis.NSColorSpace || {};

globalThis.NSColorSpace.Model = {
    Unknown: -1,
    Gray: 0,
    RGB: 1,
    CMYK: 2,
    LAB: 3,
    DeviceN: 4,
    Indexed: 5,
    Patterned: 6,
    '-1': 'Unknown',
    '0': 'Gray',
    '1': 'RGB',
    '2': 'CMYK',
    '3': 'LAB',
    '4': 'DeviceN',
    '5': 'Indexed',
    '6': 'Patterned'
}

globalThis.NSColor = globalThis.NSColor || {};

globalThis.NSColor.SystemEffect = {
    None: 0,
    Pressed: 1,
    DeepPressed: 2,
    Disabled: 3,
    Rollover: 4,
    '0': 'None',
    '1': 'Pressed',
    '2': 'DeepPressed',
    '3': 'Disabled',
    '4': 'Rollover'
}

globalThis.NSColor.ColorType = {
    ComponentBased: 0,
    Pattern: 1,
    Catalog: 2,
    '0': 'ComponentBased',
    '1': 'Pattern',
    '2': 'Catalog'
}

globalThis.NSCompositingOperation = globalThis.NSCompositingOperation || {};

globalThis.NSCompositingOperation = {
    Clear: 0,
    Copy: 1,
    SourceOver: 2,
    SourceIn: 3,
    SourceOut: 4,
    SourceAtop: 5,
    DestinationOver: 6,
    DestinationIn: 7,
    DestinationOut: 8,
    DestinationAtop: 9,
    XOR: 10,
    PlusDarker: 11,
    Highlight: 12,
    PlusLighter: 13,
    Multiply: 14,
    Screen: 15,
    Overlay: 16,
    Darken: 17,
    Lighten: 18,
    ColorDodge: 19,
    ColorBurn: 20,
    SoftLight: 21,
    HardLight: 22,
    Difference: 23,
    Exclusion: 24,
    Hue: 25,
    Saturation: 26,
    Color: 27,
    Luminosity: 28,
    '0': 'Clear',
    '1': 'Copy',
    '2': 'SourceOver',
    '3': 'SourceIn',
    '4': 'SourceOut',
    '5': 'SourceAtop',
    '6': 'DestinationOver',
    '7': 'DestinationIn',
    '8': 'DestinationOut',
    '9': 'DestinationAtop',
    '10': 'XOR',
    '11': 'PlusDarker',
    '12': 'Highlight',
    '13': 'PlusLighter',
    '14': 'Multiply',
    '15': 'Screen',
    '16': 'Overlay',
    '17': 'Darken',
    '18': 'Lighten',
    '19': 'ColorDodge',
    '20': 'ColorBurn',
    '21': 'SoftLight',
    '22': 'HardLight',
    '23': 'Difference',
    '24': 'Exclusion',
    '25': 'Hue',
    '26': 'Saturation',
    '27': 'Color',
    '28': 'Luminosity'
}

globalThis.NSLayoutManager = globalThis.NSLayoutManager || {};

globalThis.NSLayoutManager.ControlCharacterAction = {
    ZeroAdvancement: 1,
    Whitespace: 2,
    HorizontalTab: 4,
    LineBreak: 8,
    ParagraphBreak: 16,
    ContainerBreak: 32,
    '1': 'ZeroAdvancement',
    '2': 'Whitespace',
    '4': 'HorizontalTab',
    '8': 'LineBreak',
    '16': 'ParagraphBreak',
    '32': 'ContainerBreak'
}

globalThis.NSControl.ControlSize = {
    Regular: 0,
    Small: 1,
    Mini: 2,
    '0': 'Regular',
    '1': 'Small',
    '2': 'Mini'
}

globalThis.NSControlTint = globalThis.NSControlTint || {};

globalThis.NSControlTint = {
    DefaultControlTint: 0,
    BlueControlTint: 1,
    GraphiteControlTint: 6,
    ClearControlTint: 7,
    '0': 'DefaultControlTint',
    '1': 'BlueControlTint',
    '6': 'GraphiteControlTint',
    '7': 'ClearControlTint'
}

globalThis.NSSpellChecker = globalThis.NSSpellChecker || {};

globalThis.NSSpellChecker.CorrectionIndicatorType = {
    Default: 0,
    Reversion: 1,
    Guesses: 2,
    '0': 'Default',
    '1': 'Reversion',
    '2': 'Guesses'
}

globalThis.NSSpellChecker.CorrectionResponse = {
    None: 0,
    Accepted: 1,
    Rejected: 2,
    Ignored: 3,
    Edited: 4,
    Reverted: 5,
    '0': 'None',
    '1': 'Accepted',
    '2': 'Rejected',
    '3': 'Ignored',
    '4': 'Edited',
    '5': 'Reverted'
}

globalThis.NSDatePicker = globalThis.NSDatePicker || {};

globalThis.NSDatePicker.ElementFlags = {
    HourMinute: 12,
    HourMinuteSecond: 14,
    TimeZone: 16,
    YearMonth: 192,
    YearMonthDay: 224,
    Era: 256,
    '12': 'HourMinute',
    '14': 'HourMinuteSecond',
    '16': 'TimeZone',
    '192': 'YearMonth',
    '224': 'YearMonthDay',
    '256': 'Era'
}

globalThis.NSDatePicker.Mode = {
    Single: 0,
    Range: 1,
    '0': 'Single',
    '1': 'Range'
}

globalThis.NSDatePicker.Style = {
    TextFieldAndStepper: 0,
    ClockAndCalendar: 1,
    TextField: 2,
    '0': 'TextFieldAndStepper',
    '1': 'ClockAndCalendar',
    '2': 'TextField'
}

globalThis.NSDirectionalRectEdge = globalThis.NSDirectionalRectEdge || {};

globalThis.NSDirectionalRectEdge = {
    None: 0,
    Top: 1,
    Leading: 2,
    Bottom: 4,
    Trailing: 8,
    All: 15,
    '0': 'None',
    '1': 'Top',
    '2': 'Leading',
    '4': 'Bottom',
    '8': 'Trailing',
    '15': 'All'
}

globalThis.NSDisplayGamut = globalThis.NSDisplayGamut || {};

globalThis.NSDisplayGamut = {
    SRGB: 1,
    P3: 2,
    '1': 'SRGB',
    '2': 'P3'
}

globalThis.NSDocument = globalThis.NSDocument || {};

globalThis.NSDocument.ChangeType = {
    ChangeDone: 0,
    ChangeUndone: 1,
    ChangeRedone: 5,
    ChangeCleared: 2,
    ChangeReadOtherContents: 3,
    ChangeAutosaved: 4,
    ChangeDiscardable: 256,
    '0': 'ChangeDone',
    '1': 'ChangeUndone',
    '5': 'ChangeRedone',
    '2': 'ChangeCleared',
    '3': 'ChangeReadOtherContents',
    '4': 'ChangeAutosaved',
    '256': 'ChangeDiscardable'
}

globalThis.NSDragOperation = globalThis.NSDragOperation || {};

globalThis.NSDragOperation = {
    None: 0,
    Copy: 1,
    Link: 2,
    Generic: 4,
    Private: 8,
    Move: 16,
    Delete: 32,
    Every: -1,
    All_Obsolete: 15,
    All: 15,
    '0': 'None',
    '1': 'Copy',
    '2': 'Link',
    '4': 'Generic',
    '8': 'Private',
    '16': 'Move',
    '32': 'Delete',
    '-1': 'Every',
    '15': 'All_Obsolete',
    '15': 'All'
}

globalThis.NSDraggingContext = globalThis.NSDraggingContext || {};

globalThis.NSDraggingContext = {
    OutsideApplication: 0,
    WithinApplication: 1,
    '0': 'OutsideApplication',
    '1': 'WithinApplication'
}

globalThis.NSDraggingFormation = globalThis.NSDraggingFormation || {};

globalThis.NSDraggingFormation = {
    Default: 0,
    None: 1,
    Pile: 2,
    List: 3,
    Stack: 4,
    '0': 'Default',
    '1': 'None',
    '2': 'Pile',
    '3': 'List',
    '4': 'Stack'
}

globalThis.NSDraggingItemEnumerationOptions = globalThis.NSDraggingItemEnumerationOptions || {};

globalThis.NSDraggingItemEnumerationOptions = {
    Concurrent: 1,
    ClearNonenumeratedImages: 65536,
    '1': 'Concurrent',
    '65536': 'ClearNonenumeratedImages'
}

globalThis.NSDrawer = globalThis.NSDrawer || {};

globalThis.NSDrawer.State = {
    ClosedState: 0,
    OpeningState: 1,
    OpenState: 2,
    ClosingState: 3,
    '0': 'ClosedState',
    '1': 'OpeningState',
    '2': 'OpenState',
    '3': 'ClosingState'
}

globalThis.NSEvent = globalThis.NSEvent || {};

globalThis.NSEvent.ButtonMask = {
    PenTip: 1,
    PenLowerSide: 2,
    PenUpperSide: 4,
    '1': 'PenTip',
    '2': 'PenLowerSide',
    '4': 'PenUpperSide'
}

globalThis.NSEvent.GestureAxis = {
    None: 0,
    Horizontal: 1,
    Vertical: 2,
    '0': 'None',
    '1': 'Horizontal',
    '2': 'Vertical'
}

globalThis.NSEvent.EventTypeMask = {
    LeftMouseDown: 2,
    LeftMouseUp: 4,
    RightMouseDown: 8,
    RightMouseUp: 16,
    MouseMoved: 32,
    LeftMouseDragged: 64,
    RightMouseDragged: 128,
    MouseEntered: 256,
    MouseExited: 512,
    KeyDown: 1024,
    KeyUp: 2048,
    FlagsChanged: 4096,
    AppKitDefined: 8192,
    SystemDefined: 16384,
    ApplicationDefined: 32768,
    Periodic: 65536,
    CursorUpdate: 131072,
    ScrollWheel: 4194304,
    TabletPoint: 8388608,
    TabletProximity: 16777216,
    OtherMouseDown: 33554432,
    OtherMouseUp: 67108864,
    OtherMouseDragged: 134217728,
    Gesture: 536870912,
    Magnify: 1073741824,
    Swipe: 2147483648,
    Rotate: 262144,
    BeginGesture: 524288,
    EndGesture: 1048576,
    SmartMagnify: 4294967296,
    Pressure: 17179869184,
    DirectTouch: 137438953472,
    ChangeMode: 274877906944,
    Any: -1,
    '2': 'LeftMouseDown',
    '4': 'LeftMouseUp',
    '8': 'RightMouseDown',
    '16': 'RightMouseUp',
    '32': 'MouseMoved',
    '64': 'LeftMouseDragged',
    '128': 'RightMouseDragged',
    '256': 'MouseEntered',
    '512': 'MouseExited',
    '1024': 'KeyDown',
    '2048': 'KeyUp',
    '4096': 'FlagsChanged',
    '8192': 'AppKitDefined',
    '16384': 'SystemDefined',
    '32768': 'ApplicationDefined',
    '65536': 'Periodic',
    '131072': 'CursorUpdate',
    '4194304': 'ScrollWheel',
    '8388608': 'TabletPoint',
    '16777216': 'TabletProximity',
    '33554432': 'OtherMouseDown',
    '67108864': 'OtherMouseUp',
    '134217728': 'OtherMouseDragged',
    '536870912': 'Gesture',
    '1073741824': 'Magnify',
    '2147483648': 'Swipe',
    '262144': 'Rotate',
    '524288': 'BeginGesture',
    '1048576': 'EndGesture',
    '4294967296': 'SmartMagnify',
    '17179869184': 'Pressure',
    '137438953472': 'DirectTouch',
    '274877906944': 'ChangeMode',
    '-1': 'Any'
}

globalThis.NSEvent.ModifierFlags = {
    CapsLock: 65536,
    Shift: 131072,
    Control: 262144,
    Option: 524288,
    Command: 1048576,
    NumericPad: 2097152,
    Help: 4194304,
    Function: 8388608,
    DeviceIndependentFlagsMask: 4294901760,
    '65536': 'CapsLock',
    '131072': 'Shift',
    '262144': 'Control',
    '524288': 'Option',
    '1048576': 'Command',
    '2097152': 'NumericPad',
    '4194304': 'Help',
    '8388608': 'Function',
    '4294901760': 'DeviceIndependentFlagsMask'
}

globalThis.NSEvent.Phase = {
    None: 0,
    Began: 1,
    Stationary: 2,
    Changed: 4,
    Ended: 8,
    Cancelled: 16,
    MayBegin: 32,
    '0': 'None',
    '1': 'Began',
    '2': 'Stationary',
    '4': 'Changed',
    '8': 'Ended',
    '16': 'Cancelled',
    '32': 'MayBegin'
}

globalThis.NSEvent.EventSubtype = {
    WindowExposed: 0,
    ApplicationActivated: 1,
    ApplicationDeactivated: 2,
    WindowMoved: 4,
    ScreenChanged: 8,
    PowerOff: 1,
    MouseEvent: 0,
    TabletPoint: 1,
    TabletProximity: 2,
    Touch: 3,
    '0': 'WindowExposed',
    '1': 'ApplicationActivated',
    '2': 'ApplicationDeactivated',
    '4': 'WindowMoved',
    '8': 'ScreenChanged',
    '1': 'PowerOff',
    '0': 'MouseEvent',
    '1': 'TabletPoint',
    '2': 'TabletProximity',
    '3': 'Touch'
}

globalThis.NSEvent.SwipeTrackingOptions = {
    LockDirection: 1,
    ClampGestureAmount: 2,
    '1': 'LockDirection',
    '2': 'ClampGestureAmount'
}

globalThis.NSEvent.EventType = {
    LeftMouseDown: 1,
    LeftMouseUp: 2,
    RightMouseDown: 3,
    RightMouseUp: 4,
    MouseMoved: 5,
    LeftMouseDragged: 6,
    RightMouseDragged: 7,
    MouseEntered: 8,
    MouseExited: 9,
    KeyDown: 10,
    KeyUp: 11,
    FlagsChanged: 12,
    AppKitDefined: 13,
    SystemDefined: 14,
    ApplicationDefined: 15,
    Periodic: 16,
    CursorUpdate: 17,
    ScrollWheel: 22,
    TabletPoint: 23,
    TabletProximity: 24,
    OtherMouseDown: 25,
    OtherMouseUp: 26,
    OtherMouseDragged: 27,
    Gesture: 29,
    Magnify: 30,
    Swipe: 31,
    Rotate: 18,
    BeginGesture: 19,
    EndGesture: 20,
    SmartMagnify: 32,
    QuickLook: 33,
    Pressure: 34,
    DirectTouch: 37,
    ChangeMode: 38,
    '1': 'LeftMouseDown',
    '2': 'LeftMouseUp',
    '3': 'RightMouseDown',
    '4': 'RightMouseUp',
    '5': 'MouseMoved',
    '6': 'LeftMouseDragged',
    '7': 'RightMouseDragged',
    '8': 'MouseEntered',
    '9': 'MouseExited',
    '10': 'KeyDown',
    '11': 'KeyUp',
    '12': 'FlagsChanged',
    '13': 'AppKitDefined',
    '14': 'SystemDefined',
    '15': 'ApplicationDefined',
    '16': 'Periodic',
    '17': 'CursorUpdate',
    '22': 'ScrollWheel',
    '23': 'TabletPoint',
    '24': 'TabletProximity',
    '25': 'OtherMouseDown',
    '26': 'OtherMouseUp',
    '27': 'OtherMouseDragged',
    '29': 'Gesture',
    '30': 'Magnify',
    '31': 'Swipe',
    '18': 'Rotate',
    '19': 'BeginGesture',
    '20': 'EndGesture',
    '32': 'SmartMagnify',
    '33': 'QuickLook',
    '34': 'Pressure',
    '37': 'DirectTouch',
    '38': 'ChangeMode'
}

globalThis.NSFindPanelAction = globalThis.NSFindPanelAction || {};

globalThis.NSFindPanelAction = {
    ShowFindPanel: 1,
    Next: 2,
    Previous: 3,
    ReplaceAll: 4,
    Replace: 5,
    ReplaceAndFind: 6,
    SetFindString: 7,
    ReplaceAllInSelection: 8,
    SelectAll: 9,
    SelectAllInSelection: 10,
    '1': 'ShowFindPanel',
    '2': 'Next',
    '3': 'Previous',
    '4': 'ReplaceAll',
    '5': 'Replace',
    '6': 'ReplaceAndFind',
    '7': 'SetFindString',
    '8': 'ReplaceAllInSelection',
    '9': 'SelectAll',
    '10': 'SelectAllInSelection'
}

globalThis.NSFindPanelSubstringMatchType = globalThis.NSFindPanelSubstringMatchType || {};

globalThis.NSFindPanelSubstringMatchType = {
    Contains: 0,
    StartsWith: 1,
    FullWord: 2,
    EndsWith: 3,
    '0': 'Contains',
    '1': 'StartsWith',
    '2': 'FullWord',
    '3': 'EndsWith'
}

globalThis.NSFocusRingPlacement = globalThis.NSFocusRingPlacement || {};

globalThis.NSFocusRingPlacement = {
    Only: 0,
    Below: 1,
    Above: 2,
    '0': 'Only',
    '1': 'Below',
    '2': 'Above'
}

globalThis.NSFocusRingType = globalThis.NSFocusRingType || {};

globalThis.NSFocusRingType = {
    Default: 0,
    None: 1,
    Exterior: 2,
    '0': 'Default',
    '1': 'None',
    '2': 'Exterior'
}

globalThis.NSFontAction = globalThis.NSFontAction || {};

globalThis.NSFontAction = {
    NoFontChangeAction: 0,
    ViaPanelFontAction: 1,
    AddTraitFontAction: 2,
    SizeUpFontAction: 3,
    SizeDownFontAction: 4,
    HeavierFontAction: 5,
    LighterFontAction: 6,
    RemoveTraitFontAction: 7,
    '0': 'NoFontChangeAction',
    '1': 'ViaPanelFontAction',
    '2': 'AddTraitFontAction',
    '3': 'SizeUpFontAction',
    '4': 'SizeDownFontAction',
    '5': 'HeavierFontAction',
    '6': 'LighterFontAction',
    '7': 'RemoveTraitFontAction'
}

globalThis.NSFontAssetRequest = globalThis.NSFontAssetRequest || {};

globalThis.NSFontAssetRequest.Options = {
    UsesStandardUI: 1,
    '1': 'UsesStandardUI'
}

globalThis.NSFontCollectionOptions = globalThis.NSFontCollectionOptions || {};

globalThis.NSFontCollectionOptions = {
    ApplicationOnlyMask: 1,
    '1': 'ApplicationOnlyMask'
}

globalThis.NSFontCollection = globalThis.NSFontCollection || {};

globalThis.NSFontCollection.Visibility = {
    Process: 1,
    User: 2,
    Computer: 4,
    '1': 'Process',
    '2': 'User',
    '4': 'Computer'
}

globalThis.NSFontDescriptor = globalThis.NSFontDescriptor || {};

globalThis.NSFontDescriptor.SymbolicTraits = {
    TraitItalic: 1,
    TraitBold: 2,
    TraitExpanded: 32,
    TraitCondensed: 64,
    TraitMonoSpace: 1024,
    TraitVertical: 2048,
    TraitUIOptimized: 4096,
    TraitTightLeading: 32768,
    TraitLooseLeading: 65536,
    ClassMask: 4026531840,
    ClassUnknown: 0,
    ClassOldStyleSerifs: 268435456,
    ClassTransitionalSerifs: 536870912,
    ClassModernSerifs: 805306368,
    ClassClarendonSerifs: 1073741824,
    ClassSlabSerifs: 1342177280,
    ClassFreeformSerifs: 1879048192,
    ClassSansSerif: 2147483648,
    ClassOrnamentals: 2415919104,
    ClassScripts: 2684354560,
    ClassSymbolic: 3221225472,
    '1': 'TraitItalic',
    '2': 'TraitBold',
    '32': 'TraitExpanded',
    '64': 'TraitCondensed',
    '1024': 'TraitMonoSpace',
    '2048': 'TraitVertical',
    '4096': 'TraitUIOptimized',
    '32768': 'TraitTightLeading',
    '65536': 'TraitLooseLeading',
    '4026531840': 'ClassMask',
    '0': 'ClassUnknown',
    '268435456': 'ClassOldStyleSerifs',
    '536870912': 'ClassTransitionalSerifs',
    '805306368': 'ClassModernSerifs',
    '1073741824': 'ClassClarendonSerifs',
    '1342177280': 'ClassSlabSerifs',
    '1879048192': 'ClassFreeformSerifs',
    '2147483648': 'ClassSansSerif',
    '2415919104': 'ClassOrnamentals',
    '2684354560': 'ClassScripts',
    '3221225472': 'ClassSymbolic'
}

globalThis.NSFontPanel = globalThis.NSFontPanel || {};

globalThis.NSFontPanel.ModeMask = {
    ModeMaskFace: 1,
    ModeMaskSize: 2,
    ModeMaskCollection: 4,
    ModeMaskUnderlineEffect: 256,
    ModeMaskStrikethroughEffect: 512,
    ModeMaskTextColorEffect: 1024,
    ModeMaskDocumentColorEffect: 2048,
    ModeMaskShadowEffect: 4096,
    ModeMaskAllEffects: 1048320,
    ModesMaskStandardModes: 65535,
    ModesMaskAllModes: 4294967295,
    '1': 'ModeMaskFace',
    '2': 'ModeMaskSize',
    '4': 'ModeMaskCollection',
    '256': 'ModeMaskUnderlineEffect',
    '512': 'ModeMaskStrikethroughEffect',
    '1024': 'ModeMaskTextColorEffect',
    '2048': 'ModeMaskDocumentColorEffect',
    '4096': 'ModeMaskShadowEffect',
    '1048320': 'ModeMaskAllEffects',
    '65535': 'ModesMaskStandardModes',
    '4294967295': 'ModesMaskAllModes'
}

globalThis.NSFontRenderingMode = globalThis.NSFontRenderingMode || {};

globalThis.NSFontRenderingMode = {
    DefaultRenderingMode: 0,
    AntialiasedRenderingMode: 1,
    IntegerAdvancementsRenderingMode: 2,
    AntialiasedIntegerAdvancementsRenderingMode: 3,
    '0': 'DefaultRenderingMode',
    '1': 'AntialiasedRenderingMode',
    '2': 'IntegerAdvancementsRenderingMode',
    '3': 'AntialiasedIntegerAdvancementsRenderingMode'
}

globalThis.NSFontTraitMask = globalThis.NSFontTraitMask || {};

globalThis.NSFontTraitMask = {
    ItalicFontMask: 1,
    BoldFontMask: 2,
    UnboldFontMask: 4,
    NonStandardCharacterSetFontMask: 8,
    NarrowFontMask: 16,
    ExpandedFontMask: 32,
    CondensedFontMask: 64,
    SmallCapsFontMask: 128,
    PosterFontMask: 256,
    CompressedFontMask: 512,
    FixedPitchFontMask: 1024,
    UnitalicFontMask: 16777216,
    '1': 'ItalicFontMask',
    '2': 'BoldFontMask',
    '4': 'UnboldFontMask',
    '8': 'NonStandardCharacterSetFontMask',
    '16': 'NarrowFontMask',
    '32': 'ExpandedFontMask',
    '64': 'CondensedFontMask',
    '128': 'SmallCapsFontMask',
    '256': 'PosterFontMask',
    '512': 'CompressedFontMask',
    '1024': 'FixedPitchFontMask',
    '16777216': 'UnitalicFontMask'
}

globalThis.NSGestureRecognizer = globalThis.NSGestureRecognizer || {};

globalThis.NSGestureRecognizer.State = {
    Possible: 0,
    Began: 1,
    Changed: 2,
    Ended: 3,
    Cancelled: 4,
    Failed: 5,
    Recognized: 3,
    '0': 'Possible',
    '1': 'Began',
    '2': 'Changed',
    '3': 'Ended',
    '4': 'Cancelled',
    '5': 'Failed',
    '3': 'Recognized'
}

globalThis.NSLayoutManager.GlyphProperty = {
    Null: 1,
    ControlCharacter: 2,
    Elastic: 4,
    NonBaseCharacter: 8,
    '1': 'Null',
    '2': 'ControlCharacter',
    '4': 'Elastic',
    '8': 'NonBaseCharacter'
}

globalThis.NSGradient = globalThis.NSGradient || {};

globalThis.NSGradient.DrawingOptions = {
    DrawsBeforeStartingLocation: 1,
    DrawsAfterEndingLocation: 2,
    '1': 'DrawsBeforeStartingLocation',
    '2': 'DrawsAfterEndingLocation'
}

globalThis.NSGridCell = globalThis.NSGridCell || {};

globalThis.NSGridCell.Placement = {
    Inherited: 0,
    None: 1,
    Leading: 2,
    Top: 2,
    Trailing: 3,
    Bottom: 3,
    Center: 4,
    Fill: 5,
    '0': 'Inherited',
    '1': 'None',
    '2': 'Leading',
    '2': 'Top',
    '3': 'Trailing',
    '3': 'Bottom',
    '4': 'Center',
    '5': 'Fill'
}

globalThis.NSGridRow = globalThis.NSGridRow || {};

globalThis.NSGridRow.Alignment = {
    Inherited: 0,
    None: 1,
    FirstBaseline: 2,
    LastBaseline: 3,
    '0': 'Inherited',
    '1': 'None',
    '2': 'FirstBaseline',
    '3': 'LastBaseline'
}

globalThis.NSHapticFeedbackManager = globalThis.NSHapticFeedbackManager || {};

globalThis.NSHapticFeedbackManager.FeedbackPattern = {
    Generic: 0,
    Alignment: 1,
    LevelChange: 2,
    '0': 'Generic',
    '1': 'Alignment',
    '2': 'LevelChange'
}

globalThis.NSHapticFeedbackManager.PerformanceTime = {
    Default: 0,
    Now: 1,
    DrawCompleted: 2,
    '0': 'Default',
    '1': 'Now',
    '2': 'DrawCompleted'
}

globalThis.NSImageAlignment = globalThis.NSImageAlignment || {};

globalThis.NSImageAlignment = {
    Center: 0,
    Top: 1,
    TopLeft: 2,
    TopRight: 3,
    Left: 4,
    Bottom: 5,
    BottomLeft: 6,
    BottomRight: 7,
    Right: 8,
    '0': 'Center',
    '1': 'Top',
    '2': 'TopLeft',
    '3': 'TopRight',
    '4': 'Left',
    '5': 'Bottom',
    '6': 'BottomLeft',
    '7': 'BottomRight',
    '8': 'Right'
}

globalThis.NSImage = globalThis.NSImage || {};

globalThis.NSImage.CacheMode = {
    Default: 0,
    Always: 1,
    BySize: 2,
    Never: 3,
    '0': 'Default',
    '1': 'Always',
    '2': 'BySize',
    '3': 'Never'
}

globalThis.NSImageView = globalThis.NSImageView || {};

globalThis.NSImageView.FrameStyle = {
    None: 0,
    Photo: 1,
    GrayBezel: 2,
    Groove: 3,
    Button: 4,
    '0': 'None',
    '1': 'Photo',
    '2': 'GrayBezel',
    '3': 'Groove',
    '4': 'Button'
}

globalThis.NSImageInterpolation = globalThis.NSImageInterpolation || {};

globalThis.NSImageInterpolation = {
    Default: 0,
    None: 1,
    Low: 2,
    Medium: 4,
    High: 3,
    '0': 'Default',
    '1': 'None',
    '2': 'Low',
    '4': 'Medium',
    '3': 'High'
}

globalThis.NSImage.LayoutDirection = {
    Unspecified: -1,
    LeftToRight: 2,
    RightToLeft: 3,
    '-1': 'Unspecified',
    '2': 'LeftToRight',
    '3': 'RightToLeft'
}

globalThis.NSImage.LoadStatus = {
    Completed: 0,
    Cancelled: 1,
    InvalidData: 2,
    UnexpectedEOF: 3,
    ReadError: 4,
    '0': 'Completed',
    '1': 'Cancelled',
    '2': 'InvalidData',
    '3': 'UnexpectedEOF',
    '4': 'ReadError'
}

globalThis.NSBitmapImageRep.LoadStatus = {
    UnknownType: -1,
    ReadingHeader: -2,
    WillNeedAllData: -3,
    InvalidData: -4,
    UnexpectedEOF: -5,
    Completed: -6,
    '-1': 'UnknownType',
    '-2': 'ReadingHeader',
    '-3': 'WillNeedAllData',
    '-4': 'InvalidData',
    '-5': 'UnexpectedEOF',
    '-6': 'Completed'
}

globalThis.NSImage.ResizingMode = {
    Stretch: 0,
    Tile: 1,
    '0': 'Stretch',
    '1': 'Tile'
}

globalThis.NSImageScaling = globalThis.NSImageScaling || {};

globalThis.NSImageScaling = {
    ImageScaleProportionallyDown: 0,
    ImageScaleAxesIndependently: 1,
    ImageScaleNone: 2,
    ImageScaleProportionallyUpOrDown: 3,
    ScaleProportionally: 0,
    ScaleToFit: 1,
    ScaleNone: 2,
    '0': 'ImageScaleProportionallyDown',
    '1': 'ImageScaleAxesIndependently',
    '2': 'ImageScaleNone',
    '3': 'ImageScaleProportionallyUpOrDown',
    '0': 'ScaleProportionally',
    '1': 'ScaleToFit',
    '2': 'ScaleNone'
}

globalThis.NSLayoutConstraint = globalThis.NSLayoutConstraint || {};

globalThis.NSLayoutConstraint.Attribute = {
    Left: 1,
    Right: 2,
    Top: 3,
    Bottom: 4,
    Leading: 5,
    Trailing: 6,
    Width: 7,
    Height: 8,
    CenterX: 9,
    CenterY: 10,
    LastBaseline: 11,
    Baseline: 11,
    FirstBaseline: 12,
    NotAnAttribute: 0,
    '1': 'Left',
    '2': 'Right',
    '3': 'Top',
    '4': 'Bottom',
    '5': 'Leading',
    '6': 'Trailing',
    '7': 'Width',
    '8': 'Height',
    '9': 'CenterX',
    '10': 'CenterY',
    '11': 'LastBaseline',
    '11': 'Baseline',
    '12': 'FirstBaseline',
    '0': 'NotAnAttribute'
}

globalThis.NSLayoutConstraint.Orientation = {
    Horizontal: 0,
    Vertical: 1,
    '0': 'Horizontal',
    '1': 'Vertical'
}

globalThis.NSLayoutConstraint.FormatOptions = {
    AlignAllLeft: 2,
    AlignAllRight: 4,
    AlignAllTop: 8,
    AlignAllBottom: 16,
    AlignAllLeading: 32,
    AlignAllTrailing: 64,
    AlignAllCenterX: 512,
    AlignAllCenterY: 1024,
    AlignAllLastBaseline: 2048,
    AlignAllFirstBaseline: 4096,
    AlignAllBaseline: 2048,
    AlignmentMask: 65535,
    DirectionLeadingToTrailing: 0,
    DirectionLeftToRight: 65536,
    DirectionRightToLeft: 131072,
    DirectionMask: 196608,
    '2': 'AlignAllLeft',
    '4': 'AlignAllRight',
    '8': 'AlignAllTop',
    '16': 'AlignAllBottom',
    '32': 'AlignAllLeading',
    '64': 'AlignAllTrailing',
    '512': 'AlignAllCenterX',
    '1024': 'AlignAllCenterY',
    '2048': 'AlignAllLastBaseline',
    '4096': 'AlignAllFirstBaseline',
    '2048': 'AlignAllBaseline',
    '65535': 'AlignmentMask',
    '0': 'DirectionLeadingToTrailing',
    '65536': 'DirectionLeftToRight',
    '131072': 'DirectionRightToLeft',
    '196608': 'DirectionMask'
}

globalThis.NSLayoutConstraint.Relation = {
    LessThanOrEqual: -1,
    Equal: 0,
    GreaterThanOrEqual: 1,
    '-1': 'LessThanOrEqual',
    '0': 'Equal',
    '1': 'GreaterThanOrEqual'
}

globalThis.NSLevelIndicator = globalThis.NSLevelIndicator || {};

globalThis.NSLevelIndicator.PlaceholderVisibility = {
    Automatic: 0,
    Always: 1,
    WhileEditing: 2,
    '0': 'Automatic',
    '1': 'Always',
    '2': 'WhileEditing'
}

globalThis.NSLevelIndicator.Style = {
    Relevancy: 0,
    ContinuousCapacity: 1,
    DiscreteCapacity: 2,
    Rating: 3,
    '0': 'Relevancy',
    '1': 'ContinuousCapacity',
    '2': 'DiscreteCapacity',
    '3': 'Rating'
}

globalThis.NSLineBreakMode = globalThis.NSLineBreakMode || {};

globalThis.NSLineBreakMode = {
    ByWordWrapping: 0,
    ByCharWrapping: 1,
    ByClipping: 2,
    ByTruncatingHead: 3,
    ByTruncatingTail: 4,
    ByTruncatingMiddle: 5,
    '0': 'ByWordWrapping',
    '1': 'ByCharWrapping',
    '2': 'ByClipping',
    '3': 'ByTruncatingHead',
    '4': 'ByTruncatingTail',
    '5': 'ByTruncatingMiddle'
}

globalThis.NSBezierPath.LineCapStyle = {
    Butt: 0,
    Round: 1,
    Square: 2,
    '0': 'Butt',
    '1': 'Round',
    '2': 'Square'
}

globalThis.NSBezierPath.LineJoinStyle = {
    Miter: 0,
    Round: 1,
    Bevel: 2,
    '0': 'Miter',
    '1': 'Round',
    '2': 'Bevel'
}

globalThis.NSLineMovementDirection = globalThis.NSLineMovementDirection || {};

globalThis.NSLineMovementDirection = {
    DoesntMove: 0,
    MovesLeft: 1,
    MovesRight: 2,
    MovesDown: 3,
    MovesUp: 4,
    '0': 'DoesntMove',
    '1': 'MovesLeft',
    '2': 'MovesRight',
    '3': 'MovesDown',
    '4': 'MovesUp'
}

globalThis.NSLineSweepDirection = globalThis.NSLineSweepDirection || {};

globalThis.NSLineSweepDirection = {
    Left: 0,
    Right: 1,
    Down: 2,
    Up: 3,
    '0': 'Left',
    '1': 'Right',
    '2': 'Down',
    '3': 'Up'
}

globalThis.NSMatrix = globalThis.NSMatrix || {};

globalThis.NSMatrix.Mode = {
    RadioModeMatrix: 0,
    HighlightModeMatrix: 1,
    ListModeMatrix: 2,
    TrackModeMatrix: 3,
    '0': 'RadioModeMatrix',
    '1': 'HighlightModeMatrix',
    '2': 'ListModeMatrix',
    '3': 'TrackModeMatrix'
}

globalThis.NSMediaLibraryBrowserController = globalThis.NSMediaLibraryBrowserController || {};

globalThis.NSMediaLibraryBrowserController.Library = {
    Audio: 1,
    Image: 2,
    Movie: 4,
    '1': 'Audio',
    '2': 'Image',
    '4': 'Movie'
}

globalThis.NSMenu = globalThis.NSMenu || {};

globalThis.NSMenu.Properties = {
    PropertyItemTitle: 1,
    PropertyItemAttributedTitle: 2,
    PropertyItemKeyEquivalent: 4,
    PropertyItemImage: 8,
    PropertyItemEnabled: 16,
    PropertyItemAccessibilityDescription: 32,
    '1': 'PropertyItemTitle',
    '2': 'PropertyItemAttributedTitle',
    '4': 'PropertyItemKeyEquivalent',
    '8': 'PropertyItemImage',
    '16': 'PropertyItemEnabled',
    '32': 'PropertyItemAccessibilityDescription'
}

globalThis.NSPDFPanel = globalThis.NSPDFPanel || {};

globalThis.NSPDFPanel.Options = {
    ShowsPaperSize: 4,
    ShowsOrientation: 8,
    RequestsParentDirectory: 16777216,
    '4': 'ShowsPaperSize',
    '8': 'ShowsOrientation',
    '16777216': 'RequestsParentDirectory'
}

globalThis.NSPageController = globalThis.NSPageController || {};

globalThis.NSPageController.TransitionStyle = {
    StackHistory: 0,
    StackBook: 1,
    HorizontalStrip: 2,
    '0': 'StackHistory',
    '1': 'StackBook',
    '2': 'HorizontalStrip'
}

globalThis.NSPrintInfo = globalThis.NSPrintInfo || {};

globalThis.NSPrintInfo.PaperOrientation = {
    Portrait: 0,
    Landscape: 1,
    '0': 'Portrait',
    '1': 'Landscape'
}

globalThis.NSPasteboard = globalThis.NSPasteboard || {};

globalThis.NSPasteboard.ContentsOptions = {
    CurrentHostOnly: 1,
    '1': 'CurrentHostOnly'
}

globalThis.NSPasteboard.ReadingOptions = {
    AsData: 0,
    AsString: 1,
    AsPropertyList: 2,
    AsKeyedArchive: 4,
    '0': 'AsData',
    '1': 'AsString',
    '2': 'AsPropertyList',
    '4': 'AsKeyedArchive'
}

globalThis.NSPasteboard.WritingOptions = {
    Promised: 512,
    '512': 'Promised'
}

globalThis.NSPathControl = globalThis.NSPathControl || {};

globalThis.NSPathControl.Style = {
    Standard: 0,
    PopUp: 2,
    NavigationBar: 1,
    '0': 'Standard',
    '2': 'PopUp',
    '1': 'NavigationBar'
}

globalThis.NSPickerTouchBarItem = globalThis.NSPickerTouchBarItem || {};

globalThis.NSPickerTouchBarItem.ControlRepresentation = {
    Automatic: 0,
    Expanded: 1,
    Collapsed: 2,
    '0': 'Automatic',
    '1': 'Expanded',
    '2': 'Collapsed'
}

globalThis.NSPickerTouchBarItem.SelectionMode = {
    SelectOne: 0,
    SelectAny: 1,
    Momentary: 2,
    '0': 'SelectOne',
    '1': 'SelectAny',
    '2': 'Momentary'
}

globalThis.NSEvent.PointingDeviceType = {
    Unknown: 0,
    Pen: 1,
    Cursor: 2,
    Eraser: 3,
    '0': 'Unknown',
    '1': 'Pen',
    '2': 'Cursor',
    '3': 'Eraser'
}

globalThis.NSPopUpButton = globalThis.NSPopUpButton || {};

globalThis.NSPopUpButton.ArrowPosition = {
    NoArrow: 0,
    ArrowAtCenter: 1,
    ArrowAtBottom: 2,
    '0': 'NoArrow',
    '1': 'ArrowAtCenter',
    '2': 'ArrowAtBottom'
}

globalThis.NSPopover = globalThis.NSPopover || {};

globalThis.NSPopover.Behavior = {
    ApplicationDefined: 0,
    Transient: 1,
    Semitransient: 2,
    '0': 'ApplicationDefined',
    '1': 'Transient',
    '2': 'Semitransient'
}

globalThis.NSEvent.PressureBehavior = {
    Unknown: -1,
    PrimaryDefault: 0,
    PrimaryClick: 1,
    PrimaryGeneric: 2,
    PrimaryAccelerator: 3,
    PrimaryDeepClick: 5,
    PrimaryDeepDrag: 6,
    '-1': 'Unknown',
    '0': 'PrimaryDefault',
    '1': 'PrimaryClick',
    '2': 'PrimaryGeneric',
    '3': 'PrimaryAccelerator',
    '5': 'PrimaryDeepClick',
    '6': 'PrimaryDeepDrag'
}

globalThis.NSPrintPanel = globalThis.NSPrintPanel || {};

globalThis.NSPrintPanel.Options = {
    ShowsCopies: 1,
    ShowsPageRange: 2,
    ShowsPaperSize: 4,
    ShowsOrientation: 8,
    ShowsScaling: 16,
    ShowsPrintSelection: 32,
    ShowsPageSetupAccessory: 256,
    ShowsPreview: 131072,
    '1': 'ShowsCopies',
    '2': 'ShowsPageRange',
    '4': 'ShowsPaperSize',
    '8': 'ShowsOrientation',
    '16': 'ShowsScaling',
    '32': 'ShowsPrintSelection',
    '256': 'ShowsPageSetupAccessory',
    '131072': 'ShowsPreview'
}

globalThis.NSPrintOperation = globalThis.NSPrintOperation || {};

globalThis.NSPrintOperation.RenderingQuality = {
    Best: 0,
    Responsive: 1,
    '0': 'Best',
    '1': 'Responsive'
}

globalThis.NSPrinter = globalThis.NSPrinter || {};

globalThis.NSPrinter.TableStatus = {
    OK: 0,
    NotFound: 1,
    Error: 2,
    '0': 'OK',
    '1': 'NotFound',
    '2': 'Error'
}

globalThis.NSPrintOperation.PageOrder = {
    DescendingPageOrder: -1,
    SpecialPageOrder: 0,
    AscendingPageOrder: 1,
    UnknownPageOrder: 2,
    '-1': 'DescendingPageOrder',
    '0': 'SpecialPageOrder',
    '1': 'AscendingPageOrder',
    '2': 'UnknownPageOrder'
}

globalThis.NSPrintInfo.PaginationMode = {
    Automatic: 0,
    Fit: 1,
    Clip: 2,
    '0': 'Automatic',
    '1': 'Fit',
    '2': 'Clip'
}

globalThis.NSProgressIndicator = globalThis.NSProgressIndicator || {};

globalThis.NSProgressIndicator.Style = {
    Bar: 0,
    Spinning: 1,
    '0': 'Bar',
    '1': 'Spinning'
}

globalThis.NSRectAlignment = globalThis.NSRectAlignment || {};

globalThis.NSRectAlignment = {
    None: 0,
    Top: 1,
    TopLeading: 2,
    Leading: 3,
    BottomLeading: 4,
    Bottom: 5,
    BottomTrailing: 6,
    Trailing: 7,
    TopTrailing: 8,
    '0': 'None',
    '1': 'Top',
    '2': 'TopLeading',
    '3': 'Leading',
    '4': 'BottomLeading',
    '5': 'Bottom',
    '6': 'BottomTrailing',
    '7': 'Trailing',
    '8': 'TopTrailing'
}

globalThis.NSApplication.RemoteNotificationType = {
    None: 0,
    Badge: 1,
    Sound: 2,
    Alert: 4,
    '0': 'None',
    '1': 'Badge',
    '2': 'Sound',
    '4': 'Alert'
}

globalThis.NSApplication.RequestUserAttentionType = {
    CriticalRequest: 0,
    InformationalRequest: 10,
    '0': 'CriticalRequest',
    '10': 'InformationalRequest'
}

globalThis.NSRuleEditor = globalThis.NSRuleEditor || {};

globalThis.NSRuleEditor.NestingMode = {
    Single: 0,
    List: 1,
    Compound: 2,
    Simple: 3,
    '0': 'Single',
    '1': 'List',
    '2': 'Compound',
    '3': 'Simple'
}

globalThis.NSRuleEditor.RowType = {
    Simple: 0,
    Compound: 1,
    '0': 'Simple',
    '1': 'Compound'
}

globalThis.NSRulerView = globalThis.NSRulerView || {};

globalThis.NSRulerView.Orientation = {
    HorizontalRuler: 0,
    VerticalRuler: 1,
    '0': 'HorizontalRuler',
    '1': 'VerticalRuler'
}

globalThis.NSDocument.SaveOperationType = {
    SaveOperation: 0,
    SaveAsOperation: 1,
    SaveToOperation: 2,
    AutosaveInPlaceOperation: 4,
    AutosaveElsewhereOperation: 3,
    AutosaveAsOperation: 5,
    AutosaveOperation: 3,
    '0': 'SaveOperation',
    '1': 'SaveAsOperation',
    '2': 'SaveToOperation',
    '4': 'AutosaveInPlaceOperation',
    '3': 'AutosaveElsewhereOperation',
    '5': 'AutosaveAsOperation',
    '3': 'AutosaveOperation'
}

globalThis.NSScrollView = globalThis.NSScrollView || {};

globalThis.NSScrollView.Elasticity = {
    Automatic: 0,
    None: 1,
    Allowed: 2,
    '0': 'Automatic',
    '1': 'None',
    '2': 'Allowed'
}

globalThis.NSScrollView.FindBarPosition = {
    AboveHorizontalRuler: 0,
    AboveContent: 1,
    BelowContent: 2,
    '0': 'AboveHorizontalRuler',
    '1': 'AboveContent',
    '2': 'BelowContent'
}

globalThis.NSScroller = globalThis.NSScroller || {};

globalThis.NSScroller.KnobStyle = {
    Default: 0,
    Dark: 1,
    Light: 2,
    '0': 'Default',
    '1': 'Dark',
    '2': 'Light'
}

globalThis.NSScroller.Part = {
    NoPart: 0,
    DecrementPage: 1,
    Knob: 2,
    IncrementPage: 3,
    DecrementLine: 4,
    IncrementLine: 5,
    KnobSlot: 6,
    '0': 'NoPart',
    '1': 'DecrementPage',
    '2': 'Knob',
    '3': 'IncrementPage',
    '4': 'DecrementLine',
    '5': 'IncrementLine',
    '6': 'KnobSlot'
}

globalThis.NSScroller.Style = {
    Legacy: 0,
    Overlay: 1,
    '0': 'Legacy',
    '1': 'Overlay'
}

globalThis.NSScrubber = globalThis.NSScrubber || {};

globalThis.NSScrubber.Alignment = {
    None: 0,
    Leading: 1,
    Trailing: 2,
    Center: 3,
    '0': 'None',
    '1': 'Leading',
    '2': 'Trailing',
    '3': 'Center'
}

globalThis.NSScrubber.Mode = {
    Fixed: 0,
    Free: 1,
    '0': 'Fixed',
    '1': 'Free'
}

globalThis.NSSegmentedControl = globalThis.NSSegmentedControl || {};

globalThis.NSSegmentedControl.Distribution = {
    Fit: 0,
    Fill: 1,
    FillEqually: 2,
    FillProportionally: 3,
    '0': 'Fit',
    '1': 'Fill',
    '2': 'FillEqually',
    '3': 'FillProportionally'
}

globalThis.NSSegmentedControl.Style = {
    Automatic: 0,
    Rounded: 1,
    RoundRect: 3,
    TexturedSquare: 4,
    SmallSquare: 6,
    Separated: 8,
    TexturedRounded: 2,
    Capsule: 5,
    '0': 'Automatic',
    '1': 'Rounded',
    '3': 'RoundRect',
    '4': 'TexturedSquare',
    '6': 'SmallSquare',
    '8': 'Separated',
    '2': 'TexturedRounded',
    '5': 'Capsule'
}

globalThis.NSSegmentedControl.SwitchTracking = {
    SelectOne: 0,
    SelectAny: 1,
    Momentary: 2,
    MomentaryAccelerator: 3,
    '0': 'SelectOne',
    '1': 'SelectAny',
    '2': 'Momentary',
    '3': 'MomentaryAccelerator'
}

globalThis.NSSelectionAffinity = globalThis.NSSelectionAffinity || {};

globalThis.NSSelectionAffinity = {
    Upstream: 0,
    Downstream: 1,
    '0': 'Upstream',
    '1': 'Downstream'
}

globalThis.NSWindow.SelectionDirection = {
    DirectSelection: 0,
    SelectingNext: 1,
    SelectingPrevious: 2,
    '0': 'DirectSelection',
    '1': 'SelectingNext',
    '2': 'SelectingPrevious'
}

globalThis.NSSelectionGranularity = globalThis.NSSelectionGranularity || {};

globalThis.NSSelectionGranularity = {
    ByCharacter: 0,
    ByWord: 1,
    ByParagraph: 2,
    '0': 'ByCharacter',
    '1': 'ByWord',
    '2': 'ByParagraph'
}

globalThis.NSSharingService.SharingContentScope = {
    Item: 0,
    Partial: 1,
    Full: 2,
    '0': 'Item',
    '1': 'Partial',
    '2': 'Full'
}

globalThis.NSSlider = globalThis.NSSlider || {};

globalThis.NSSlider.SliderType = {
    Linear: 0,
    Circular: 1,
    '0': 'Linear',
    '1': 'Circular'
}

globalThis.NSSpeechSynthesizer = globalThis.NSSpeechSynthesizer || {};

globalThis.NSSpeechSynthesizer.Boundary = {
    ImmediateBoundary: 0,
    WordBoundary: 1,
    SentenceBoundary: 2,
    '0': 'ImmediateBoundary',
    '1': 'WordBoundary',
    '2': 'SentenceBoundary'
}

globalThis.NSAttributedString = globalThis.NSAttributedString || {};

globalThis.NSAttributedString.SpellingState = {
    SpellingFlag: 1,
    GrammarFlag: 2,
    '1': 'SpellingFlag',
    '2': 'GrammarFlag'
}

globalThis.NSSplitView = globalThis.NSSplitView || {};

globalThis.NSSplitView.DividerStyle = {
    Thick: 1,
    Thin: 2,
    PaneSplitter: 3,
    '1': 'Thick',
    '2': 'Thin',
    '3': 'PaneSplitter'
}

globalThis.NSSplitViewItem = globalThis.NSSplitViewItem || {};

globalThis.NSSplitViewItem.Behavior = {
    Default: 0,
    Sidebar: 1,
    ContentList: 2,
    '0': 'Default',
    '1': 'Sidebar',
    '2': 'ContentList'
}

globalThis.NSSplitViewItem.CollapseBehavior = {
    Default: 0,
    PreferResizingSplitViewWithFixedSiblings: 1,
    PreferResizingSiblingsWithFixedSplitView: 2,
    UseConstraints: 3,
    '0': 'Default',
    '1': 'PreferResizingSplitViewWithFixedSiblings',
    '2': 'PreferResizingSiblingsWithFixedSplitView',
    '3': 'UseConstraints'
}

globalThis.NSSpringLoadingHighlight = globalThis.NSSpringLoadingHighlight || {};

globalThis.NSSpringLoadingHighlight = {
    None: 0,
    Standard: 1,
    Emphasized: 2,
    '0': 'None',
    '1': 'Standard',
    '2': 'Emphasized'
}

globalThis.NSSpringLoadingOptions = globalThis.NSSpringLoadingOptions || {};

globalThis.NSSpringLoadingOptions = {
    Disabled: 0,
    Enabled: 1,
    ContinuousActivation: 2,
    NoHover: 8,
    '0': 'Disabled',
    '1': 'Enabled',
    '2': 'ContinuousActivation',
    '8': 'NoHover'
}

globalThis.NSStackView = globalThis.NSStackView || {};

globalThis.NSStackView.Distribution = {
    GravityAreas: -1,
    Fill: 0,
    FillEqually: 1,
    FillProportionally: 2,
    EqualSpacing: 3,
    EqualCentering: 4,
    '-1': 'GravityAreas',
    '0': 'Fill',
    '1': 'FillEqually',
    '2': 'FillProportionally',
    '3': 'EqualSpacing',
    '4': 'EqualCentering'
}

globalThis.NSStackView.Gravity = {
    Top: 1,
    Leading: 1,
    Center: 2,
    Bottom: 3,
    Trailing: 3,
    '1': 'Top',
    '1': 'Leading',
    '2': 'Center',
    '3': 'Bottom',
    '3': 'Trailing'
}

globalThis.NSStatusItem = globalThis.NSStatusItem || {};

globalThis.NSStatusItem.Behavior = {
    RemovalAllowed: 2,
    TerminationOnRemoval: 4,
    '2': 'RemovalAllowed',
    '4': 'TerminationOnRemoval'
}

globalThis.NSString = globalThis.NSString || {};

globalThis.NSString.DrawingOptions = {
    UsesLineFragmentOrigin: 1,
    UsesFontLeading: 2,
    UsesDeviceMetrics: 8,
    TruncatesLastVisibleLine: 32,
    DisableScreenFontSubstitution: 4,
    OneShot: 16,
    '1': 'UsesLineFragmentOrigin',
    '2': 'UsesFontLeading',
    '8': 'UsesDeviceMetrics',
    '32': 'TruncatesLastVisibleLine',
    '4': 'DisableScreenFontSubstitution',
    '16': 'OneShot'
}

globalThis.NSBitmapImageRep.TIFFCompression = {
    None: 1,
    CCITTFAX3: 3,
    CCITTFAX4: 4,
    LZW: 5,
    JPEG: 6,
    NEXT: 32766,
    PackBits: 32773,
    OldJPEG: 32865,
    '1': 'None',
    '3': 'CCITTFAX3',
    '4': 'CCITTFAX4',
    '5': 'LZW',
    '6': 'JPEG',
    '32766': 'NEXT',
    '32773': 'PackBits',
    '32865': 'OldJPEG'
}

globalThis.NSTabView = globalThis.NSTabView || {};

globalThis.NSTabView.TabPosition = {
    None: 0,
    Top: 1,
    Left: 2,
    Bottom: 3,
    Right: 4,
    '0': 'None',
    '1': 'Top',
    '2': 'Left',
    '3': 'Bottom',
    '4': 'Right'
}

globalThis.NSTabViewItem = globalThis.NSTabViewItem || {};

globalThis.NSTabViewItem.State = {
    SelectedTab: 0,
    BackgroundTab: 1,
    PressedTab: 2,
    '0': 'SelectedTab',
    '1': 'BackgroundTab',
    '2': 'PressedTab'
}

globalThis.NSTabView.TabViewBorderType = {
    None: 0,
    Line: 1,
    Bezel: 2,
    '0': 'None',
    '1': 'Line',
    '2': 'Bezel'
}

globalThis.NSTabViewController = globalThis.NSTabViewController || {};

globalThis.NSTabViewController.TabStyle = {
    SegmentedControlOnTop: 0,
    SegmentedControlOnBottom: 1,
    Toolbar: 2,
    Unspecified: -1,
    '0': 'SegmentedControlOnTop',
    '1': 'SegmentedControlOnBottom',
    '2': 'Toolbar',
    '-1': 'Unspecified'
}

globalThis.NSTabView.TabType = {
    TopTabsBezelBorder: 0,
    LeftTabsBezelBorder: 1,
    BottomTabsBezelBorder: 2,
    RightTabsBezelBorder: 3,
    NoTabsBezelBorder: 4,
    NoTabsLineBorder: 5,
    NoTabsNoBorder: 6,
    '0': 'TopTabsBezelBorder',
    '1': 'LeftTabsBezelBorder',
    '2': 'BottomTabsBezelBorder',
    '3': 'RightTabsBezelBorder',
    '4': 'NoTabsBezelBorder',
    '5': 'NoTabsLineBorder',
    '6': 'NoTabsNoBorder'
}

globalThis.NSTableColumn = globalThis.NSTableColumn || {};

globalThis.NSTableColumn.ResizingOptions = {
    NoResizing: 0,
    AutoresizingMask: 1,
    UserResizingMask: 2,
    '0': 'NoResizing',
    '1': 'AutoresizingMask',
    '2': 'UserResizingMask'
}

globalThis.NSTableView = globalThis.NSTableView || {};

globalThis.NSTableView.RowActionEdge = {
    Leading: 0,
    Trailing: 1,
    '0': 'Leading',
    '1': 'Trailing'
}

globalThis.NSTableView.AnimationOptions = {
    EffectNone: 0,
    EffectFade: 1,
    EffectGap: 2,
    SlideUp: 16,
    SlideDown: 32,
    SlideLeft: 48,
    SlideRight: 64,
    '0': 'EffectNone',
    '1': 'EffectFade',
    '2': 'EffectGap',
    '16': 'SlideUp',
    '32': 'SlideDown',
    '48': 'SlideLeft',
    '64': 'SlideRight'
}

globalThis.NSTableView.ColumnAutoresizingStyle = {
    NoColumnAutoresizing: 0,
    UniformColumnAutoresizingStyle: 1,
    SequentialColumnAutoresizingStyle: 2,
    ReverseSequentialColumnAutoresizingStyle: 3,
    LastColumnOnlyAutoresizingStyle: 4,
    FirstColumnOnlyAutoresizingStyle: 5,
    '0': 'NoColumnAutoresizing',
    '1': 'UniformColumnAutoresizingStyle',
    '2': 'SequentialColumnAutoresizingStyle',
    '3': 'ReverseSequentialColumnAutoresizingStyle',
    '4': 'LastColumnOnlyAutoresizingStyle',
    '5': 'FirstColumnOnlyAutoresizingStyle'
}

globalThis.NSTableView.DraggingDestinationFeedbackStyle = {
    None: -1,
    Regular: 0,
    SourceList: 1,
    Gap: 2,
    '-1': 'None',
    '0': 'Regular',
    '1': 'SourceList',
    '2': 'Gap'
}

globalThis.NSTableView.DropOperation = {
    On: 0,
    Above: 1,
    '0': 'On',
    '1': 'Above'
}

globalThis.NSTableView.GridLineStyle = {
    GridNone: 0,
    SolidVerticalGridLineMask: 1,
    SolidHorizontalGridLineMask: 2,
    DashedHorizontalGridLineMask: 8,
    '0': 'GridNone',
    '1': 'SolidVerticalGridLineMask',
    '2': 'SolidHorizontalGridLineMask',
    '8': 'DashedHorizontalGridLineMask'
}

globalThis.NSTableViewRowAction = globalThis.NSTableViewRowAction || {};

globalThis.NSTableViewRowAction.Style = {
    Regular: 0,
    Destructive: 1,
    '0': 'Regular',
    '1': 'Destructive'
}

globalThis.NSTableView.RowSizeStyle = {
    Default: -1,
    Custom: 0,
    Small: 1,
    Medium: 2,
    Large: 3,
    '-1': 'Default',
    '0': 'Custom',
    '1': 'Small',
    '2': 'Medium',
    '3': 'Large'
}

globalThis.NSTableView.SelectionHighlightStyle = {
    None: -1,
    Regular: 0,
    SourceList: 1,
    '-1': 'None',
    '0': 'Regular',
    '1': 'SourceList'
}

globalThis.NSTextAlignment = globalThis.NSTextAlignment || {};

globalThis.NSTextAlignment = {
    Left: 0,
    Right: 1,
    Center: 2,
    Justified: 3,
    Natural: 4,
    '0': 'Left',
    '1': 'Right',
    '2': 'Center',
    '3': 'Justified',
    '4': 'Natural'
}

globalThis.NSTextBlock = globalThis.NSTextBlock || {};

globalThis.NSTextBlock.Dimension = {
    Width: 0,
    MinimumWidth: 1,
    MaximumWidth: 2,
    Height: 4,
    MinimumHeight: 5,
    MaximumHeight: 6,
    '0': 'Width',
    '1': 'MinimumWidth',
    '2': 'MaximumWidth',
    '4': 'Height',
    '5': 'MinimumHeight',
    '6': 'MaximumHeight'
}

globalThis.NSTextBlock.Layer = {
    Padding: -1,
    Border: 0,
    Margin: 1,
    '-1': 'Padding',
    '0': 'Border',
    '1': 'Margin'
}

globalThis.NSTextBlock.ValueType = {
    AbsoluteValueType: 0,
    PercentageValueType: 1,
    '0': 'AbsoluteValueType',
    '1': 'PercentageValueType'
}

globalThis.NSTextBlock.VerticalAlignment = {
    TopAlignment: 0,
    MiddleAlignment: 1,
    BottomAlignment: 2,
    BaselineAlignment: 3,
    '0': 'TopAlignment',
    '1': 'MiddleAlignment',
    '2': 'BottomAlignment',
    '3': 'BaselineAlignment'
}

globalThis.NSTextField = globalThis.NSTextField || {};

globalThis.NSTextField.BezelStyle = {
    SquareBezel: 0,
    RoundedBezel: 1,
    '0': 'SquareBezel',
    '1': 'RoundedBezel'
}

globalThis.NSTextFinder = globalThis.NSTextFinder || {};

globalThis.NSTextFinder.Action = {
    ShowFindInterface: 1,
    NextMatch: 2,
    PreviousMatch: 3,
    ReplaceAll: 4,
    Replace: 5,
    ReplaceAndFind: 6,
    SetSearchString: 7,
    ReplaceAllInSelection: 8,
    SelectAll: 9,
    SelectAllInSelection: 10,
    HideFindInterface: 11,
    ShowReplaceInterface: 12,
    HideReplaceInterface: 13,
    '1': 'ShowFindInterface',
    '2': 'NextMatch',
    '3': 'PreviousMatch',
    '4': 'ReplaceAll',
    '5': 'Replace',
    '6': 'ReplaceAndFind',
    '7': 'SetSearchString',
    '8': 'ReplaceAllInSelection',
    '9': 'SelectAll',
    '10': 'SelectAllInSelection',
    '11': 'HideFindInterface',
    '12': 'ShowReplaceInterface',
    '13': 'HideReplaceInterface'
}

globalThis.NSTextFinder.MatchingType = {
    Contains: 0,
    StartsWith: 1,
    FullWord: 2,
    EndsWith: 3,
    '0': 'Contains',
    '1': 'StartsWith',
    '2': 'FullWord',
    '3': 'EndsWith'
}

globalThis.NSTextInputTraitType = globalThis.NSTextInputTraitType || {};

globalThis.NSTextInputTraitType = {
    Default: 0,
    No: 1,
    Yes: 2,
    '0': 'Default',
    '1': 'No',
    '2': 'Yes'
}

globalThis.NSLayoutManager.TextLayoutOrientation = {
    Horizontal: 0,
    Vertical: 1,
    '0': 'Horizontal',
    '1': 'Vertical'
}

globalThis.NSTextList = globalThis.NSTextList || {};

globalThis.NSTextList.Options = {
    PrependEnclosingMarker: 1,
    '1': 'PrependEnclosingMarker'
}

globalThis.NSTextMovement = globalThis.NSTextMovement || {};

globalThis.NSTextMovement = {
    Return: 16,
    Tab: 17,
    Backtab: 18,
    Left: 19,
    Right: 20,
    Up: 21,
    Down: 22,
    Cancel: 23,
    Other: 0,
    '16': 'Return',
    '17': 'Tab',
    '18': 'Backtab',
    '19': 'Left',
    '20': 'Right',
    '21': 'Up',
    '22': 'Down',
    '23': 'Cancel',
    '0': 'Other'
}

globalThis.NSTextScalingType = globalThis.NSTextScalingType || {};

globalThis.NSTextScalingType = {
    Standard: 0,
    iOS: 1,
    '0': 'Standard',
    '1': 'iOS'
}

globalThis.NSTextStorageEditActions = globalThis.NSTextStorageEditActions || {};

globalThis.NSTextStorageEditActions = {
    EditedAttributes: 1,
    EditedCharacters: 2,
    '1': 'EditedAttributes',
    '2': 'EditedCharacters'
}

globalThis.NSParagraphStyle = globalThis.NSParagraphStyle || {};

globalThis.NSParagraphStyle.TextTabType = {
    LeftTabStopType: 0,
    RightTabStopType: 1,
    CenterTabStopType: 2,
    DecimalTabStopType: 3,
    '0': 'LeftTabStopType',
    '1': 'RightTabStopType',
    '2': 'CenterTabStopType',
    '3': 'DecimalTabStopType'
}

globalThis.NSTextTable = globalThis.NSTextTable || {};

globalThis.NSTextTable.LayoutAlgorithm = {
    AutomaticLayoutAlgorithm: 0,
    FixedLayoutAlgorithm: 1,
    '0': 'AutomaticLayoutAlgorithm',
    '1': 'FixedLayoutAlgorithm'
}

globalThis.NSSlider.TickMarkPosition = {
    Below: 0,
    Above: 1,
    Leading: 1,
    Trailing: 0,
    '0': 'Below',
    '1': 'Above',
    '1': 'Leading',
    '0': 'Trailing'
}

globalThis.NSBox.TitlePosition = {
    NoTitle: 0,
    AboveTop: 1,
    AtTop: 2,
    BelowTop: 3,
    AboveBottom: 4,
    AtBottom: 5,
    BelowBottom: 6,
    '0': 'NoTitle',
    '1': 'AboveTop',
    '2': 'AtTop',
    '3': 'BelowTop',
    '4': 'AboveBottom',
    '5': 'AtBottom',
    '6': 'BelowBottom'
}

globalThis.NSTokenField = globalThis.NSTokenField || {};

globalThis.NSTokenField.TokenStyle = {
    Default: 0,
    None: 1,
    Rounded: 2,
    Squared: 3,
    PlainSquared: 4,
    '0': 'Default',
    '1': 'None',
    '2': 'Rounded',
    '3': 'Squared',
    '4': 'PlainSquared'
}

globalThis.NSToolbar = globalThis.NSToolbar || {};

globalThis.NSToolbar.DisplayMode = {
    Default: 0,
    IconAndLabel: 1,
    IconOnly: 2,
    LabelOnly: 3,
    '0': 'Default',
    '1': 'IconAndLabel',
    '2': 'IconOnly',
    '3': 'LabelOnly'
}

globalThis.NSToolbarItemGroup = globalThis.NSToolbarItemGroup || {};

globalThis.NSToolbarItemGroup.ControlRepresentation = {
    Automatic: 0,
    Expanded: 1,
    Collapsed: 2,
    '0': 'Automatic',
    '1': 'Expanded',
    '2': 'Collapsed'
}

globalThis.NSToolbarItemGroup.SelectionMode = {
    SelectOne: 0,
    SelectAny: 1,
    Momentary: 2,
    '0': 'SelectOne',
    '1': 'SelectAny',
    '2': 'Momentary'
}

globalThis.NSToolbar.SizeMode = {
    Default: 0,
    Regular: 1,
    Small: 2,
    '0': 'Default',
    '1': 'Regular',
    '2': 'Small'
}

globalThis.NSTouch = globalThis.NSTouch || {};

globalThis.NSTouch.Phase = {
    Began: 1,
    Moved: 2,
    Stationary: 4,
    Ended: 8,
    Cancelled: 16,
    Touching: 7,
    Any: -1,
    '1': 'Began',
    '2': 'Moved',
    '4': 'Stationary',
    '8': 'Ended',
    '16': 'Cancelled',
    '7': 'Touching',
    '-1': 'Any'
}

globalThis.NSTouch.TouchType = {
    Direct: 0,
    Indirect: 1,
    '0': 'Direct',
    '1': 'Indirect'
}

globalThis.NSTouch.TouchTypeMask = {
    Direct: 1,
    Indirect: 2,
    '1': 'Direct',
    '2': 'Indirect'
}

globalThis.NSTrackingArea = globalThis.NSTrackingArea || {};

globalThis.NSTrackingArea.Options = {
    MouseEnteredAndExited: 1,
    MouseMoved: 2,
    CursorUpdate: 4,
    ActiveWhenFirstResponder: 16,
    ActiveInKeyWindow: 32,
    ActiveInActiveApp: 64,
    ActiveAlways: 128,
    AssumeInside: 256,
    InVisibleRect: 512,
    EnabledDuringMouseDrag: 1024,
    '1': 'MouseEnteredAndExited',
    '2': 'MouseMoved',
    '4': 'CursorUpdate',
    '16': 'ActiveWhenFirstResponder',
    '32': 'ActiveInKeyWindow',
    '64': 'ActiveInActiveApp',
    '128': 'ActiveAlways',
    '256': 'AssumeInside',
    '512': 'InVisibleRect',
    '1024': 'EnabledDuringMouseDrag'
}

globalThis.NSLayoutManager.TypesetterBehavior = {
    LatestBehavior: -1,
    OriginalBehavior: 0,
    Behavior_10_2_WithCompatibility: 1,
    Behavior_10_2: 2,
    Behavior_10_3: 3,
    Behavior_10_4: 4,
    '-1': 'LatestBehavior',
    '0': 'OriginalBehavior',
    '1': 'Behavior_10_2_WithCompatibility',
    '2': 'Behavior_10_2',
    '3': 'Behavior_10_3',
    '4': 'Behavior_10_4'
}

globalThis.NSTypesetterControlCharacterAction = globalThis.NSTypesetterControlCharacterAction || {};

globalThis.NSTypesetterControlCharacterAction = {
    ZeroAdvancementAction: 1,
    WhitespaceAction: 2,
    HorizontalTabAction: 4,
    LineBreakAction: 8,
    ParagraphBreakAction: 16,
    ContainerBreakAction: 32,
    '1': 'ZeroAdvancementAction',
    '2': 'WhitespaceAction',
    '4': 'HorizontalTabAction',
    '8': 'LineBreakAction',
    '16': 'ParagraphBreakAction',
    '32': 'ContainerBreakAction'
}

globalThis.NSUnderlineStyle = globalThis.NSUnderlineStyle || {};

globalThis.NSUnderlineStyle = {
    None: 0,
    Single: 1,
    Thick: 2,
    Double: 9,
    PatternSolid: 0,
    PatternDot: 256,
    PatternDash: 512,
    PatternDashDot: 768,
    PatternDashDotDot: 1024,
    ByWord: 32768,
    '0': 'None',
    '1': 'Single',
    '2': 'Thick',
    '9': 'Double',
    '0': 'PatternSolid',
    '256': 'PatternDot',
    '512': 'PatternDash',
    '768': 'PatternDashDot',
    '1024': 'PatternDashDotDot',
    '32768': 'ByWord'
}

globalThis.NSScroller.UsableParts = {
    NoScrollerParts: 0,
    OnlyScrollerArrows: 1,
    AllScrollerParts: 2,
    '0': 'NoScrollerParts',
    '1': 'OnlyScrollerArrows',
    '2': 'AllScrollerParts'
}

globalThis.NSUserInterfaceLayoutDirection = globalThis.NSUserInterfaceLayoutDirection || {};

globalThis.NSUserInterfaceLayoutDirection = {
    LeftToRight: 0,
    RightToLeft: 1,
    '0': 'LeftToRight',
    '1': 'RightToLeft'
}

globalThis.NSUserInterfaceLayoutOrientation = globalThis.NSUserInterfaceLayoutOrientation || {};

globalThis.NSUserInterfaceLayoutOrientation = {
    Horizontal: 0,
    Vertical: 1,
    '0': 'Horizontal',
    '1': 'Vertical'
}

globalThis.NSViewController = globalThis.NSViewController || {};

globalThis.NSViewController.TransitionOptions = {
    None: 0,
    Crossfade: 1,
    SlideUp: 16,
    SlideDown: 32,
    SlideLeft: 64,
    SlideRight: 128,
    SlideForward: 320,
    SlideBackward: 384,
    AllowUserInteraction: 4096,
    '0': 'None',
    '1': 'Crossfade',
    '16': 'SlideUp',
    '32': 'SlideDown',
    '64': 'SlideLeft',
    '128': 'SlideRight',
    '320': 'SlideForward',
    '384': 'SlideBackward',
    '4096': 'AllowUserInteraction'
}

globalThis.NSView.LayerContentsPlacement = {
    ScaleAxesIndependently: 0,
    ScaleProportionallyToFit: 1,
    ScaleProportionallyToFill: 2,
    Center: 3,
    Top: 4,
    TopRight: 5,
    Right: 6,
    BottomRight: 7,
    Bottom: 8,
    BottomLeft: 9,
    Left: 10,
    TopLeft: 11,
    '0': 'ScaleAxesIndependently',
    '1': 'ScaleProportionallyToFit',
    '2': 'ScaleProportionallyToFill',
    '3': 'Center',
    '4': 'Top',
    '5': 'TopRight',
    '6': 'Right',
    '7': 'BottomRight',
    '8': 'Bottom',
    '9': 'BottomLeft',
    '10': 'Left',
    '11': 'TopLeft'
}

globalThis.NSView.LayerContentsRedrawPolicy = {
    Never: 0,
    OnSetNeedsDisplay: 1,
    DuringViewResize: 2,
    BeforeViewResize: 3,
    Crossfade: 4,
    '0': 'Never',
    '1': 'OnSetNeedsDisplay',
    '2': 'DuringViewResize',
    '3': 'BeforeViewResize',
    '4': 'Crossfade'
}

globalThis.NSVisualEffectView = globalThis.NSVisualEffectView || {};

globalThis.NSVisualEffectView.BlendingMode = {
    BehindWindow: 0,
    WithinWindow: 1,
    '0': 'BehindWindow',
    '1': 'WithinWindow'
}

globalThis.NSVisualEffectView.Material = {
    Titlebar: 3,
    Selection: 4,
    Menu: 5,
    Popover: 6,
    Sidebar: 7,
    HeaderView: 10,
    Sheet: 11,
    WindowBackground: 12,
    HUDWindow: 13,
    FullScreenUI: 15,
    ToolTip: 17,
    ContentBackground: 18,
    UnderWindowBackground: 21,
    UnderPageBackground: 22,
    AppearanceBased: 0,
    Light: 1,
    Dark: 2,
    MediumLight: 8,
    UltraDark: 9,
    '3': 'Titlebar',
    '4': 'Selection',
    '5': 'Menu',
    '6': 'Popover',
    '7': 'Sidebar',
    '10': 'HeaderView',
    '11': 'Sheet',
    '12': 'WindowBackground',
    '13': 'HUDWindow',
    '15': 'FullScreenUI',
    '17': 'ToolTip',
    '18': 'ContentBackground',
    '21': 'UnderWindowBackground',
    '22': 'UnderPageBackground',
    '0': 'AppearanceBased',
    '1': 'Light',
    '2': 'Dark',
    '8': 'MediumLight',
    '9': 'UltraDark'
}

globalThis.NSVisualEffectView.State = {
    FollowsWindowActiveState: 0,
    Active: 1,
    Inactive: 2,
    '0': 'FollowsWindowActiveState',
    '1': 'Active',
    '2': 'Inactive'
}

globalThis.NSBezierPath.WindingRule = {
    NonZero: 0,
    EvenOdd: 1,
    '0': 'NonZero',
    '1': 'EvenOdd'
}

globalThis.NSWindow.AnimationBehavior = {
    Default: 0,
    None: 2,
    DocumentWindow: 3,
    UtilityWindow: 4,
    AlertPanel: 5,
    '0': 'Default',
    '2': 'None',
    '3': 'DocumentWindow',
    '4': 'UtilityWindow',
    '5': 'AlertPanel'
}

globalThis.NSWindow.ButtonType = {
    CloseButton: 0,
    MiniaturizeButton: 1,
    ZoomButton: 2,
    ToolbarButton: 3,
    DocumentIconButton: 4,
    DocumentVersionsButton: 6,
    '0': 'CloseButton',
    '1': 'MiniaturizeButton',
    '2': 'ZoomButton',
    '3': 'ToolbarButton',
    '4': 'DocumentIconButton',
    '6': 'DocumentVersionsButton'
}

globalThis.NSWindow.CollectionBehavior = {
    Default: 0,
    CanJoinAllSpaces: 1,
    MoveToActiveSpace: 2,
    Managed: 4,
    Transient: 8,
    Stationary: 16,
    ParticipatesInCycle: 32,
    IgnoresCycle: 64,
    FullScreenPrimary: 128,
    FullScreenAuxiliary: 256,
    FullScreenNone: 512,
    FullScreenAllowsTiling: 2048,
    FullScreenDisallowsTiling: 4096,
    '0': 'Default',
    '1': 'CanJoinAllSpaces',
    '2': 'MoveToActiveSpace',
    '4': 'Managed',
    '8': 'Transient',
    '16': 'Stationary',
    '32': 'ParticipatesInCycle',
    '64': 'IgnoresCycle',
    '128': 'FullScreenPrimary',
    '256': 'FullScreenAuxiliary',
    '512': 'FullScreenNone',
    '2048': 'FullScreenAllowsTiling',
    '4096': 'FullScreenDisallowsTiling'
}

globalThis.NSWindow.Depth = {
    TwentyfourBitRGB: 520,
    SixtyfourBitRGB: 528,
    OnehundredtwentyeightBitRGB: 544,
    '520': 'TwentyfourBitRGB',
    '528': 'SixtyfourBitRGB',
    '544': 'OnehundredtwentyeightBitRGB'
}

globalThis.NSApplication.WindowListOptions = {
    OrderedFrontToBack: 1,
    '1': 'OrderedFrontToBack'
}

globalThis.NSWindow.NumberListOptions = {
    AllApplications: 1,
    AllSpaces: 16,
    '1': 'AllApplications',
    '16': 'AllSpaces'
}

globalThis.NSWindow.OcclusionState = {
    Visible: 2,
    '2': 'Visible'
}

globalThis.NSWindow.OrderingMode = {
    Above: 1,
    Below: -1,
    Out: 0,
    '1': 'Above',
    '-1': 'Below',
    '0': 'Out'
}

globalThis.NSWindow.SharingType = {
    None: 0,
    ReadOnly: 1,
    ReadWrite: 2,
    '0': 'None',
    '1': 'ReadOnly',
    '2': 'ReadWrite'
}

globalThis.NSWindow.StyleMask = {
    Borderless: 0,
    Titled: 1,
    Closable: 2,
    Miniaturizable: 4,
    Resizable: 8,
    TexturedBackground: 256,
    UnifiedTitleAndToolbar: 4096,
    FullScreen: 16384,
    FullSizeContentView: 32768,
    UtilityWindow: 16,
    DocModalWindow: 64,
    NonactivatingPanel: 128,
    HUDWindow: 8192,
    '0': 'Borderless',
    '1': 'Titled',
    '2': 'Closable',
    '4': 'Miniaturizable',
    '8': 'Resizable',
    '256': 'TexturedBackground',
    '4096': 'UnifiedTitleAndToolbar',
    '16384': 'FullScreen',
    '32768': 'FullSizeContentView',
    '16': 'UtilityWindow',
    '64': 'DocModalWindow',
    '128': 'NonactivatingPanel',
    '8192': 'HUDWindow'
}

globalThis.NSWindow.TabbingMode = {
    Automatic: 0,
    Preferred: 1,
    Disallowed: 2,
    '0': 'Automatic',
    '1': 'Preferred',
    '2': 'Disallowed'
}

globalThis.NSWindow.TitleVisibility = {
    Visible: 0,
    Hidden: 1,
    '0': 'Visible',
    '1': 'Hidden'
}

globalThis.NSWindow.UserTabbingPreference = {
    Manual: 0,
    Always: 1,
    InFullScreen: 2,
    '0': 'Manual',
    '1': 'Always',
    '2': 'InFullScreen'
}

globalThis.NSWorkspace = globalThis.NSWorkspace || {};

globalThis.NSWorkspace.AuthorizationType = {
    CreateSymbolicLink: 0,
    SetAttributes: 1,
    ReplaceFile: 2,
    '0': 'CreateSymbolicLink',
    '1': 'SetAttributes',
    '2': 'ReplaceFile'
}

globalThis.NSWorkspace.IconCreationOptions = {
    ExcludeQuickDrawElementsIconCreationOption: 2,
    Exclude10_4ElementsIconCreationOption: 4,
    '2': 'ExcludeQuickDrawElementsIconCreationOption',
    '4': 'Exclude10_4ElementsIconCreationOption'
}

globalThis.NSWorkspace.LaunchOptions = {
    AndPrint: 2,
    WithErrorPresentation: 64,
    InhibitingBackgroundOnly: 128,
    WithoutAddingToRecents: 256,
    WithoutActivation: 512,
    Async: 65536,
    NewInstance: 524288,
    AndHide: 1048576,
    AndHideOthers: 2097152,
    Default: 65536,
    AllowingClassicStartup: 131072,
    PreferringClassic: 262144,
    '2': 'AndPrint',
    '64': 'WithErrorPresentation',
    '128': 'InhibitingBackgroundOnly',
    '256': 'WithoutAddingToRecents',
    '512': 'WithoutActivation',
    '65536': 'Async',
    '524288': 'NewInstance',
    '1048576': 'AndHide',
    '2097152': 'AndHideOthers',
    '65536': 'Default',
    '131072': 'AllowingClassicStartup',
    '262144': 'PreferringClassic'
}

globalThis.NSWritingDirection = globalThis.NSWritingDirection || {};

globalThis.NSWritingDirection = {
    Natural: -1,
    LeftToRight: 0,
    RightToLeft: 1,
    '-1': 'Natural',
    '0': 'LeftToRight',
    '1': 'RightToLeft'
}

globalThis.NSWritingDirectionFormatType = globalThis.NSWritingDirectionFormatType || {};

globalThis.NSWritingDirectionFormatType = {
    Embedding: 0,
    Override: 2,
    '0': 'Embedding',
    '2': 'Override'
}

declare class NSATSTypesetter extends NSTypesetter {
  static sharedTypesetter(): NSATSTypesetter;
}

declare var NSAbortModalException: string;

declare var NSAbortPrintingException: string;

declare var NSAboutPanelOptionApplicationIcon: string;

declare var NSAboutPanelOptionApplicationName: string;

declare var NSAboutPanelOptionApplicationVersion: string;

declare var NSAboutPanelOptionCredits: string;

declare var NSAboutPanelOptionVersion: string;

interface NSAccessibility extends NSObject {
  accessibilityActivationPoint: NSPoint;
  setAccessibilityActivationPoint(_: NSPoint)
  accessibilityAllowedValues: NSArray<number>;
  setAccessibilityAllowedValues(_: NSArray<number>)
  isAccessibilityAlternateUIVisible: boolean;
  setAccessibilityAlternateUIVisible(_: boolean)
  accessibilityApplicationFocusedUIElement: any;
  setAccessibilityApplicationFocusedUIElement(_: any)
  accessibilityCancelButton: any;
  setAccessibilityCancelButton(_: any)
  accessibilityChildren: NSArray<any>;
  setAccessibilityChildren(_: NSArray<any>)
  accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;
  setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>)
  accessibilityClearButton: any;
  setAccessibilityClearButton(_: any)
  accessibilityCloseButton: any;
  setAccessibilityCloseButton(_: any)
  accessibilityColumnCount: number;
  setAccessibilityColumnCount(_: number)
  accessibilityColumnHeaderUIElements: NSArray<any>;
  setAccessibilityColumnHeaderUIElements(_: NSArray<any>)
  accessibilityColumnIndexRange: NSRange;
  setAccessibilityColumnIndexRange(_: NSRange)
  accessibilityColumns: NSArray<any>;
  setAccessibilityColumns(_: NSArray<any>)
  accessibilityColumnTitles: NSArray<any>;
  setAccessibilityColumnTitles(_: NSArray<any>)
  accessibilityContents: NSArray<any>;
  setAccessibilityContents(_: NSArray<any>)
  accessibilityCriticalValue: any;
  setAccessibilityCriticalValue(_: any)
  accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;
  setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>)
  accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;
  setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>)
  accessibilityDecrementButton: any;
  setAccessibilityDecrementButton(_: any)
  accessibilityDefaultButton: any;
  setAccessibilityDefaultButton(_: any)
  isAccessibilityDisclosed: boolean;
  setAccessibilityDisclosed(_: boolean)
  accessibilityDisclosedByRow: any;
  setAccessibilityDisclosedByRow(_: any)
  accessibilityDisclosedRows: any;
  setAccessibilityDisclosedRows(_: any)
  accessibilityDisclosureLevel: number;
  setAccessibilityDisclosureLevel(_: number)
  accessibilityDocument: string;
  setAccessibilityDocument(_: string)
  isAccessibilityEdited: boolean;
  setAccessibilityEdited(_: boolean)
  isAccessibilityElement: boolean;
  setAccessibilityElement(_: boolean)
  isAccessibilityEnabled: boolean;
  setAccessibilityEnabled(_: boolean)
  isAccessibilityExpanded: boolean;
  setAccessibilityExpanded(_: boolean)
  accessibilityExtrasMenuBar: any;
  setAccessibilityExtrasMenuBar(_: any)
  accessibilityFilename: string;
  setAccessibilityFilename(_: string)
  isAccessibilityFocused: boolean;
  setAccessibilityFocused(_: boolean)
  accessibilityFocusedWindow: any;
  setAccessibilityFocusedWindow(_: any)
  accessibilityFrame: NSRect;
  setAccessibilityFrame(_: NSRect)
  isAccessibilityFrontmost: boolean;
  setAccessibilityFrontmost(_: boolean)
  accessibilityFullScreenButton: any;
  setAccessibilityFullScreenButton(_: any)
  accessibilityGrowArea: any;
  setAccessibilityGrowArea(_: any)
  accessibilityHandles: NSArray<any>;
  setAccessibilityHandles(_: NSArray<any>)
  accessibilityHeader: any;
  setAccessibilityHeader(_: any)
  accessibilityHelp: string;
  setAccessibilityHelp(_: string)
  isAccessibilityHidden: boolean;
  setAccessibilityHidden(_: boolean)
  accessibilityHorizontalScrollBar: any;
  setAccessibilityHorizontalScrollBar(_: any)
  accessibilityHorizontalUnitDescription: string;
  setAccessibilityHorizontalUnitDescription(_: string)
  accessibilityHorizontalUnits: NSAccessibility.Units;
  setAccessibilityHorizontalUnits(_: NSAccessibility.Units)
  accessibilityIdentifier: string;
  setAccessibilityIdentifier(_: string)
  accessibilityIncrementButton: any;
  setAccessibilityIncrementButton(_: any)
  accessibilityIndex: number;
  setAccessibilityIndex(_: number)
  accessibilityInsertionPointLineNumber: number;
  setAccessibilityInsertionPointLineNumber(_: number)
  accessibilityLabel: string;
  setAccessibilityLabel(_: string)
  accessibilityLabelUIElements: NSArray<any>;
  setAccessibilityLabelUIElements(_: NSArray<any>)
  accessibilityLabelValue: number;
  setAccessibilityLabelValue(_: number)
  accessibilityLinkedUIElements: NSArray<any>;
  setAccessibilityLinkedUIElements(_: NSArray<any>)
  isAccessibilityMain: boolean;
  setAccessibilityMain(_: boolean)
  accessibilityMainWindow: any;
  setAccessibilityMainWindow(_: any)
  accessibilityMarkerGroupUIElement: any;
  setAccessibilityMarkerGroupUIElement(_: any)
  accessibilityMarkerTypeDescription: string;
  setAccessibilityMarkerTypeDescription(_: string)
  accessibilityMarkerUIElements: NSArray<any>;
  setAccessibilityMarkerUIElements(_: NSArray<any>)
  accessibilityMarkerValues: any;
  setAccessibilityMarkerValues(_: any)
  accessibilityMaxValue: any;
  setAccessibilityMaxValue(_: any)
  accessibilityMenuBar: any;
  setAccessibilityMenuBar(_: any)
  accessibilityMinimizeButton: any;
  setAccessibilityMinimizeButton(_: any)
  isAccessibilityMinimized: boolean;
  setAccessibilityMinimized(_: boolean)
  accessibilityMinValue: any;
  setAccessibilityMinValue(_: any)
  isAccessibilityModal: boolean;
  setAccessibilityModal(_: boolean)
  accessibilityNextContents: NSArray<any>;
  setAccessibilityNextContents(_: NSArray<any>)
  accessibilityNumberOfCharacters: number;
  setAccessibilityNumberOfCharacters(_: number)
  isAccessibilityOrderedByRow: boolean;
  setAccessibilityOrderedByRow(_: boolean)
  accessibilityOrientation: NSAccessibility.Orientation;
  setAccessibilityOrientation(_: NSAccessibility.Orientation)
  accessibilityOverflowButton: any;
  setAccessibilityOverflowButton(_: any)
  accessibilityParent: any;
  setAccessibilityParent(_: any)
  accessibilityPlaceholderValue: string;
  setAccessibilityPlaceholderValue(_: string)
  accessibilityPreviousContents: NSArray<any>;
  setAccessibilityPreviousContents(_: NSArray<any>)
  isAccessibilityProtectedContent: boolean;
  setAccessibilityProtectedContent(_: boolean)
  accessibilityProxy: any;
  setAccessibilityProxy(_: any)
  isAccessibilityRequired: boolean;
  setAccessibilityRequired(_: boolean)
  accessibilityRole: string;
  setAccessibilityRole(_: string)
  accessibilityRoleDescription: string;
  setAccessibilityRoleDescription(_: string)
  accessibilityRowCount: number;
  setAccessibilityRowCount(_: number)
  accessibilityRowHeaderUIElements: NSArray<any>;
  setAccessibilityRowHeaderUIElements(_: NSArray<any>)
  accessibilityRowIndexRange: NSRange;
  setAccessibilityRowIndexRange(_: NSRange)
  accessibilityRows: NSArray<any>;
  setAccessibilityRows(_: NSArray<any>)
  accessibilityRulerMarkerType: NSAccessibility.RulerMarkerType;
  setAccessibilityRulerMarkerType(_: NSAccessibility.RulerMarkerType)
  accessibilitySearchButton: any;
  setAccessibilitySearchButton(_: any)
  accessibilitySearchMenu: any;
  setAccessibilitySearchMenu(_: any)
  isAccessibilitySelected: boolean;
  setAccessibilitySelected(_: boolean)
  accessibilitySelectedCells: NSArray<any>;
  setAccessibilitySelectedCells(_: NSArray<any>)
  accessibilitySelectedChildren: NSArray<any>;
  setAccessibilitySelectedChildren(_: NSArray<any>)
  accessibilitySelectedColumns: NSArray<any>;
  setAccessibilitySelectedColumns(_: NSArray<any>)
  accessibilitySelectedRows: NSArray<any>;
  setAccessibilitySelectedRows(_: NSArray<any>)
  accessibilitySelectedText: string;
  setAccessibilitySelectedText(_: string)
  accessibilitySelectedTextRange: NSRange;
  setAccessibilitySelectedTextRange(_: NSRange)
  accessibilitySelectedTextRanges: NSArray<NSValue>;
  setAccessibilitySelectedTextRanges(_: NSArray<NSValue>)
  accessibilityServesAsTitleForUIElements: NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(_: NSArray<any>)
  accessibilitySharedCharacterRange: NSRange;
  setAccessibilitySharedCharacterRange(_: NSRange)
  accessibilitySharedFocusElements: NSArray<any>;
  setAccessibilitySharedFocusElements(_: NSArray<any>)
  accessibilitySharedTextUIElements: NSArray<any>;
  setAccessibilitySharedTextUIElements(_: NSArray<any>)
  accessibilityShownMenu: any;
  setAccessibilityShownMenu(_: any)
  accessibilitySortDirection: NSAccessibility.SortDirection;
  setAccessibilitySortDirection(_: NSAccessibility.SortDirection)
  accessibilitySplitters: NSArray<any>;
  setAccessibilitySplitters(_: NSArray<any>)
  accessibilitySubrole: string;
  setAccessibilitySubrole(_: string)
  accessibilityTabs: NSArray<any>;
  setAccessibilityTabs(_: NSArray<any>)
  accessibilityTitle: string;
  setAccessibilityTitle(_: string)
  accessibilityTitleUIElement: any;
  setAccessibilityTitleUIElement(_: any)
  accessibilityToolbarButton: any;
  setAccessibilityToolbarButton(_: any)
  accessibilityTopLevelUIElement: any;
  setAccessibilityTopLevelUIElement(_: any)
  accessibilityUnitDescription: string;
  setAccessibilityUnitDescription(_: string)
  accessibilityUnits: NSAccessibility.Units;
  setAccessibilityUnits(_: NSAccessibility.Units)
  accessibilityURL: NSURL;
  setAccessibilityURL(_: NSURL)
  accessibilityValue: any;
  setAccessibilityValue(_: any)
  accessibilityValueDescription: string;
  setAccessibilityValueDescription(_: string)
  accessibilityVerticalScrollBar: any;
  setAccessibilityVerticalScrollBar(_: any)
  accessibilityVerticalUnitDescription: string;
  setAccessibilityVerticalUnitDescription(_: string)
  accessibilityVerticalUnits: NSAccessibility.Units;
  setAccessibilityVerticalUnits(_: NSAccessibility.Units)
  accessibilityVisibleCells: NSArray<any>;
  setAccessibilityVisibleCells(_: NSArray<any>)
  accessibilityVisibleCharacterRange: NSRange;
  setAccessibilityVisibleCharacterRange(_: NSRange)
  accessibilityVisibleChildren: NSArray<any>;
  setAccessibilityVisibleChildren(_: NSArray<any>)
  accessibilityVisibleColumns: NSArray<any>;
  setAccessibilityVisibleColumns(_: NSArray<any>)
  accessibilityVisibleRows: NSArray<any>;
  setAccessibilityVisibleRows(_: NSArray<any>)
  accessibilityWarningValue: any;
  setAccessibilityWarningValue(_: any)
  accessibilityWindow: any;
  setAccessibilityWindow(_: any)
  accessibilityWindows: NSArray<any>;
  setAccessibilityWindows(_: NSArray<any>)
  accessibilityZoomButton: any;
  setAccessibilityZoomButton(_: any)
  accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;
  accessibilityCellForColumnRow(_: number, row: number): any;
  accessibilityFrameForRange(_: NSRange): NSRect;
  accessibilityLayoutPointForScreenPoint(_: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(_: NSSize): NSSize;
  accessibilityLineForIndex(_: number): number;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  accessibilityRangeForIndex(_: number): NSRange;
  accessibilityRangeForLine(_: number): NSRange;
  accessibilityRangeForPosition(_: NSPoint): NSRange;
  accessibilityRTFForRange(_: NSRange): Data;
  accessibilityScreenPointForLayoutPoint(_: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(_: NSSize): NSSize;
  accessibilityStringForRange(_: NSRange): string;
  accessibilityStyleRangeForIndex(_: number): NSRange;
  isAccessibilitySelectorAllowed(_: string): boolean;
}

declare var NSAccessibility: {
  prototype: NSAccessibility;
};

declare function NSAccessibilityActionDescription(action: string): string;
declare var NSAccessibilityActivationPointAttribute: string;

declare var NSAccessibilityAllowedValuesAttribute: string;

declare var NSAccessibilityAlternateUIVisibleAttribute: string;

declare var NSAccessibilityAnnotationElement: string;

declare var NSAccessibilityAnnotationLabel: string;

declare var NSAccessibilityAnnotationLocation: string;

declare var NSAccessibilityAnnotationTextAttribute: string;

declare var NSAccessibilityAnnouncementKey: string;

declare var NSAccessibilityAnnouncementRequestedNotification: string;

declare var NSAccessibilityApplicationActivatedNotification: string;

declare var NSAccessibilityApplicationDeactivatedNotification: string;

declare var NSAccessibilityApplicationHiddenNotification: string;

declare var NSAccessibilityApplicationRole: string;

declare var NSAccessibilityApplicationShownNotification: string;

declare var NSAccessibilityAscendingSortDirectionValue: string;

declare var NSAccessibilityAttachmentTextAttribute: string;

declare var NSAccessibilityAttributedStringForRangeParameterizedAttribute: string;

declare var NSAccessibilityAutocorrectedTextAttribute: string;

declare var NSAccessibilityBackgroundColorTextAttribute: string;

declare var NSAccessibilityBoundsForRangeParameterizedAttribute: string;

declare var NSAccessibilityBrowserRole: string;

declare var NSAccessibilityBusyIndicatorRole: string;

interface NSAccessibilityButton extends NSAccessibilityElementProtocol {
  accessibilityLabel(): string;
  accessibilityPerformPress(): boolean;
}

declare var NSAccessibilityButton: {
  prototype: NSAccessibilityButton;
};

declare var NSAccessibilityButtonRole: string;

declare var NSAccessibilityCancelAction: string;

declare var NSAccessibilityCancelButtonAttribute: string;

declare var NSAccessibilityCellForColumnAndRowParameterizedAttribute: string;

declare var NSAccessibilityCellRole: string;

declare var NSAccessibilityCenterTabStopMarkerTypeValue: string;

declare var NSAccessibilityCentimetersUnitValue: string;

interface NSAccessibilityCheckBox extends NSAccessibilityButton {
  accessibilityValue(): number;
}

declare var NSAccessibilityCheckBox: {
  prototype: NSAccessibilityCheckBox;
};

declare var NSAccessibilityCheckBoxRole: string;

declare var NSAccessibilityChildrenAttribute: string;

declare var NSAccessibilityClearButtonAttribute: string;

declare var NSAccessibilityCloseButtonAttribute: string;

declare var NSAccessibilityCloseButtonSubrole: string;

declare var NSAccessibilityCollectionListSubrole: string;

declare var NSAccessibilityColorWellRole: string;

declare var NSAccessibilityColumnCountAttribute: string;

declare var NSAccessibilityColumnHeaderUIElementsAttribute: string;

declare var NSAccessibilityColumnIndexRangeAttribute: string;

declare var NSAccessibilityColumnRole: string;

declare var NSAccessibilityColumnTitlesAttribute: string;

declare var NSAccessibilityColumnsAttribute: string;

declare var NSAccessibilityComboBoxRole: string;

declare var NSAccessibilityConfirmAction: string;

declare var NSAccessibilityContainsProtectedContentAttribute: string;

interface NSAccessibilityContainsTransientUI extends NSAccessibilityElementProtocol {
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  isAccessibilityAlternateUIVisible(): boolean;
}

declare var NSAccessibilityContainsTransientUI: {
  prototype: NSAccessibilityContainsTransientUI;
};

declare var NSAccessibilityContentListSubrole: string;

declare var NSAccessibilityContentsAttribute: string;

declare var NSAccessibilityCreatedNotification: string;

declare var NSAccessibilityCriticalValueAttribute: string;

declare class NSAccessibilityCustomAction extends NSObject {
  handler: () => boolean;
  setHandler(_: () => boolean)
  name: string;
  setName(_: string)
  selector: string;
  setSelector(_: string)
  target: NSObject;
  setTarget(_: NSObject)
  static createWithNameHandler(name: string, handler?: () => boolean): this;
  static createWithNameTargetSelector(name: string, target: NSObject, selector: string): this;
}

declare class NSAccessibilityCustomRotor extends NSObject {
  itemLoadingDelegate: NSAccessibilityElementLoading;
  setItemLoadingDelegate(_: NSAccessibilityElementLoading)
  itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate;
  setItemSearchDelegate(_: NSAccessibilityCustomRotorItemSearchDelegate)
  label: string;
  setLabel(_: string)
  type: NSAccessibilityCustomRotor.RotorType;
  setType(_: NSAccessibilityCustomRotor.RotorType)
  static createWithLabelItemSearchDelegate(label: string, itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate): this;
  static createWithRotorTypeItemSearchDelegate(rotorType: NSAccessibilityCustomRotor.RotorType, itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate): this;
}

declare class NSAccessibilityCustomRotorItemResult extends NSObject {
  customLabel: string;
  setCustomLabel(_: string)
  readonly itemLoadingToken: any;
  readonly targetElement: NSAccessibilityElementProtocol;
  targetRange: NSRange;
  setTargetRange(_: NSRange)
  static createWithItemLoadingTokenCustomLabel(itemLoadingToken: any, customLabel: string): this;
  static createWithTargetElement(targetElement: NSAccessibilityElementProtocol): this;
}

interface NSAccessibilityCustomRotorItemSearchDelegate extends NSObject {
  rotorResultForSearchParameters(_: NSAccessibilityCustomRotor, resultFor: NSAccessibilityCustomRotor.SearchParameters): NSAccessibilityCustomRotor.ItemResult;
}

declare var NSAccessibilityCustomRotorItemSearchDelegate: {
  prototype: NSAccessibilityCustomRotorItemSearchDelegate;
};

declare class NSAccessibilityCustomRotorSearchParameters extends NSObject {
  currentItem: NSAccessibilityCustomRotor.ItemResult;
  setCurrentItem(_: NSAccessibilityCustomRotor.ItemResult)
  filterString: string;
  setFilterString(_: string)
  searchDirection: NSAccessibilityCustomRotor.SearchDirection;
  setSearchDirection(_: NSAccessibilityCustomRotor.SearchDirection)
}

declare var NSAccessibilityCustomTextAttribute: string;

declare var NSAccessibilityDecimalTabStopMarkerTypeValue: string;

declare var NSAccessibilityDecrementAction: string;

declare var NSAccessibilityDecrementArrowSubrole: string;

declare var NSAccessibilityDecrementButtonAttribute: string;

declare var NSAccessibilityDecrementPageSubrole: string;

declare var NSAccessibilityDefaultButtonAttribute: string;

declare var NSAccessibilityDefinitionListSubrole: string;

declare var NSAccessibilityDeleteAction: string;

declare var NSAccessibilityDescendingSortDirectionValue: string;

declare var NSAccessibilityDescriptionAttribute: string;

declare var NSAccessibilityDescriptionListSubrole: string;

declare var NSAccessibilityDialogSubrole: string;

declare var NSAccessibilityDisclosedByRowAttribute: string;

declare var NSAccessibilityDisclosedRowsAttribute: string;

declare var NSAccessibilityDisclosingAttribute: string;

declare var NSAccessibilityDisclosureLevelAttribute: string;

declare var NSAccessibilityDisclosureTriangleRole: string;

declare var NSAccessibilityDocumentAttribute: string;

declare var NSAccessibilityDrawerCreatedNotification: string;

declare var NSAccessibilityDrawerRole: string;

declare var NSAccessibilityEditedAttribute: string;

declare class NSAccessibilityElement extends NSObject implements NSAccessibility {
  static accessibilityElementWithRoleFrameLabelParent(withRole: string, frame: NSRect, label?: string, parent?: any): any;
  accessibilityFrameInParentSpace: NSRect;
  setAccessibilityFrameInParentSpace(_: NSRect)
  accessibilityActivationPoint: NSPoint;
  setAccessibilityActivationPoint(_: NSPoint) // inherited from NSAccessibility
  accessibilityAllowedValues: NSArray<number>;
  setAccessibilityAllowedValues(_: NSArray<number>) // inherited from NSAccessibility
  isAccessibilityAlternateUIVisible: boolean;
  setAccessibilityAlternateUIVisible(_: boolean) // inherited from NSAccessibility
  accessibilityApplicationFocusedUIElement: any;
  setAccessibilityApplicationFocusedUIElement(_: any) // inherited from NSAccessibility
  accessibilityCancelButton: any;
  setAccessibilityCancelButton(_: any) // inherited from NSAccessibility
  accessibilityChildren: NSArray<any>;
  setAccessibilityChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;
  setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>) // inherited from NSAccessibility
  accessibilityClearButton: any;
  setAccessibilityClearButton(_: any) // inherited from NSAccessibility
  accessibilityCloseButton: any;
  setAccessibilityCloseButton(_: any) // inherited from NSAccessibility
  accessibilityColumnCount: number;
  setAccessibilityColumnCount(_: number) // inherited from NSAccessibility
  accessibilityColumnHeaderUIElements: NSArray<any>;
  setAccessibilityColumnHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumnIndexRange: NSRange;
  setAccessibilityColumnIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityColumnTitles: NSArray<any>;
  setAccessibilityColumnTitles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumns: NSArray<any>;
  setAccessibilityColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityContents: NSArray<any>;
  setAccessibilityContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityCriticalValue: any;
  setAccessibilityCriticalValue(_: any) // inherited from NSAccessibility
  accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;
  setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>) // inherited from NSAccessibility
  accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;
  setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>) // inherited from NSAccessibility
  accessibilityDecrementButton: any;
  setAccessibilityDecrementButton(_: any) // inherited from NSAccessibility
  accessibilityDefaultButton: any;
  setAccessibilityDefaultButton(_: any) // inherited from NSAccessibility
  isAccessibilityDisclosed: boolean;
  setAccessibilityDisclosed(_: boolean) // inherited from NSAccessibility
  accessibilityDisclosedByRow: any;
  setAccessibilityDisclosedByRow(_: any) // inherited from NSAccessibility
  accessibilityDisclosedRows: any;
  setAccessibilityDisclosedRows(_: any) // inherited from NSAccessibility
  accessibilityDisclosureLevel: number;
  setAccessibilityDisclosureLevel(_: number) // inherited from NSAccessibility
  accessibilityDocument: string;
  setAccessibilityDocument(_: string) // inherited from NSAccessibility
  isAccessibilityEdited: boolean;
  setAccessibilityEdited(_: boolean) // inherited from NSAccessibility
  isAccessibilityElement: boolean;
  setAccessibilityElement(_: boolean) // inherited from NSAccessibility
  isAccessibilityEnabled: boolean;
  setAccessibilityEnabled(_: boolean) // inherited from NSAccessibility
  isAccessibilityExpanded: boolean;
  setAccessibilityExpanded(_: boolean) // inherited from NSAccessibility
  accessibilityExtrasMenuBar: any;
  setAccessibilityExtrasMenuBar(_: any) // inherited from NSAccessibility
  accessibilityFilename: string;
  setAccessibilityFilename(_: string) // inherited from NSAccessibility
  isAccessibilityFocused: boolean;
  setAccessibilityFocused(_: boolean) // inherited from NSAccessibility
  accessibilityFocusedWindow: any;
  setAccessibilityFocusedWindow(_: any) // inherited from NSAccessibility
  accessibilityFrame: NSRect;
  setAccessibilityFrame(_: NSRect) // inherited from NSAccessibility
  isAccessibilityFrontmost: boolean;
  setAccessibilityFrontmost(_: boolean) // inherited from NSAccessibility
  accessibilityFullScreenButton: any;
  setAccessibilityFullScreenButton(_: any) // inherited from NSAccessibility
  accessibilityGrowArea: any;
  setAccessibilityGrowArea(_: any) // inherited from NSAccessibility
  accessibilityHandles: NSArray<any>;
  setAccessibilityHandles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityHeader: any;
  setAccessibilityHeader(_: any) // inherited from NSAccessibility
  accessibilityHelp: string;
  setAccessibilityHelp(_: string) // inherited from NSAccessibility
  isAccessibilityHidden: boolean;
  setAccessibilityHidden(_: boolean) // inherited from NSAccessibility
  accessibilityHorizontalScrollBar: any;
  setAccessibilityHorizontalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityHorizontalUnitDescription: string;
  setAccessibilityHorizontalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityHorizontalUnits: NSAccessibility.Units;
  setAccessibilityHorizontalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityIdentifier: string;
  setAccessibilityIdentifier(_: string) // inherited from NSAccessibility
  accessibilityIncrementButton: any;
  setAccessibilityIncrementButton(_: any) // inherited from NSAccessibility
  accessibilityIndex: number;
  setAccessibilityIndex(_: number) // inherited from NSAccessibility
  accessibilityInsertionPointLineNumber: number;
  setAccessibilityInsertionPointLineNumber(_: number) // inherited from NSAccessibility
  accessibilityLabel: string;
  setAccessibilityLabel(_: string) // inherited from NSAccessibility
  accessibilityLabelUIElements: NSArray<any>;
  setAccessibilityLabelUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityLabelValue: number;
  setAccessibilityLabelValue(_: number) // inherited from NSAccessibility
  accessibilityLinkedUIElements: NSArray<any>;
  setAccessibilityLinkedUIElements(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityMain: boolean;
  setAccessibilityMain(_: boolean) // inherited from NSAccessibility
  accessibilityMainWindow: any;
  setAccessibilityMainWindow(_: any) // inherited from NSAccessibility
  accessibilityMarkerGroupUIElement: any;
  setAccessibilityMarkerGroupUIElement(_: any) // inherited from NSAccessibility
  accessibilityMarkerTypeDescription: string;
  setAccessibilityMarkerTypeDescription(_: string) // inherited from NSAccessibility
  accessibilityMarkerUIElements: NSArray<any>;
  setAccessibilityMarkerUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityMarkerValues: any;
  setAccessibilityMarkerValues(_: any) // inherited from NSAccessibility
  accessibilityMaxValue: any;
  setAccessibilityMaxValue(_: any) // inherited from NSAccessibility
  accessibilityMenuBar: any;
  setAccessibilityMenuBar(_: any) // inherited from NSAccessibility
  accessibilityMinValue: any;
  setAccessibilityMinValue(_: any) // inherited from NSAccessibility
  accessibilityMinimizeButton: any;
  setAccessibilityMinimizeButton(_: any) // inherited from NSAccessibility
  isAccessibilityMinimized: boolean;
  setAccessibilityMinimized(_: boolean) // inherited from NSAccessibility
  isAccessibilityModal: boolean;
  setAccessibilityModal(_: boolean) // inherited from NSAccessibility
  accessibilityNextContents: NSArray<any>;
  setAccessibilityNextContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityNumberOfCharacters: number;
  setAccessibilityNumberOfCharacters(_: number) // inherited from NSAccessibility
  isAccessibilityOrderedByRow: boolean;
  setAccessibilityOrderedByRow(_: boolean) // inherited from NSAccessibility
  accessibilityOrientation: NSAccessibility.Orientation;
  setAccessibilityOrientation(_: NSAccessibility.Orientation) // inherited from NSAccessibility
  accessibilityOverflowButton: any;
  setAccessibilityOverflowButton(_: any) // inherited from NSAccessibility
  accessibilityParent: any;
  setAccessibilityParent(_: any) // inherited from NSAccessibility
  accessibilityPlaceholderValue: string;
  setAccessibilityPlaceholderValue(_: string) // inherited from NSAccessibility
  accessibilityPreviousContents: NSArray<any>;
  setAccessibilityPreviousContents(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityProtectedContent: boolean;
  setAccessibilityProtectedContent(_: boolean) // inherited from NSAccessibility
  accessibilityProxy: any;
  setAccessibilityProxy(_: any) // inherited from NSAccessibility
  isAccessibilityRequired: boolean;
  setAccessibilityRequired(_: boolean) // inherited from NSAccessibility
  accessibilityRole: string;
  setAccessibilityRole(_: string) // inherited from NSAccessibility
  accessibilityRoleDescription: string;
  setAccessibilityRoleDescription(_: string) // inherited from NSAccessibility
  accessibilityRowCount: number;
  setAccessibilityRowCount(_: number) // inherited from NSAccessibility
  accessibilityRowHeaderUIElements: NSArray<any>;
  setAccessibilityRowHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRowIndexRange: NSRange;
  setAccessibilityRowIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityRows: NSArray<any>;
  setAccessibilityRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRulerMarkerType: NSAccessibility.RulerMarkerType;
  setAccessibilityRulerMarkerType(_: NSAccessibility.RulerMarkerType) // inherited from NSAccessibility
  accessibilitySearchButton: any;
  setAccessibilitySearchButton(_: any) // inherited from NSAccessibility
  accessibilitySearchMenu: any;
  setAccessibilitySearchMenu(_: any) // inherited from NSAccessibility
  isAccessibilitySelected: boolean;
  setAccessibilitySelected(_: boolean) // inherited from NSAccessibility
  accessibilitySelectedCells: NSArray<any>;
  setAccessibilitySelectedCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedChildren: NSArray<any>;
  setAccessibilitySelectedChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedColumns: NSArray<any>;
  setAccessibilitySelectedColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedRows: NSArray<any>;
  setAccessibilitySelectedRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedText: string;
  setAccessibilitySelectedText(_: string) // inherited from NSAccessibility
  accessibilitySelectedTextRange: NSRange;
  setAccessibilitySelectedTextRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySelectedTextRanges: NSArray<NSValue>;
  setAccessibilitySelectedTextRanges(_: NSArray<NSValue>) // inherited from NSAccessibility
  accessibilityServesAsTitleForUIElements: NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedCharacterRange: NSRange;
  setAccessibilitySharedCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySharedFocusElements: NSArray<any>;
  setAccessibilitySharedFocusElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedTextUIElements: NSArray<any>;
  setAccessibilitySharedTextUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityShownMenu: any;
  setAccessibilityShownMenu(_: any) // inherited from NSAccessibility
  accessibilitySortDirection: NSAccessibility.SortDirection;
  setAccessibilitySortDirection(_: NSAccessibility.SortDirection) // inherited from NSAccessibility
  accessibilitySplitters: NSArray<any>;
  setAccessibilitySplitters(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySubrole: string;
  setAccessibilitySubrole(_: string) // inherited from NSAccessibility
  accessibilityTabs: NSArray<any>;
  setAccessibilityTabs(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityTitle: string;
  setAccessibilityTitle(_: string) // inherited from NSAccessibility
  accessibilityTitleUIElement: any;
  setAccessibilityTitleUIElement(_: any) // inherited from NSAccessibility
  accessibilityToolbarButton: any;
  setAccessibilityToolbarButton(_: any) // inherited from NSAccessibility
  accessibilityTopLevelUIElement: any;
  setAccessibilityTopLevelUIElement(_: any) // inherited from NSAccessibility
  accessibilityURL: NSURL;
  setAccessibilityURL(_: NSURL) // inherited from NSAccessibility
  accessibilityUnitDescription: string;
  setAccessibilityUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityUnits: NSAccessibility.Units;
  setAccessibilityUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityValue: any;
  setAccessibilityValue(_: any) // inherited from NSAccessibility
  accessibilityValueDescription: string;
  setAccessibilityValueDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalScrollBar: any;
  setAccessibilityVerticalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityVerticalUnitDescription: string;
  setAccessibilityVerticalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalUnits: NSAccessibility.Units;
  setAccessibilityVerticalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityVisibleCells: NSArray<any>;
  setAccessibilityVisibleCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleCharacterRange: NSRange;
  setAccessibilityVisibleCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilityVisibleChildren: NSArray<any>;
  setAccessibilityVisibleChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleColumns: NSArray<any>;
  setAccessibilityVisibleColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleRows: NSArray<any>;
  setAccessibilityVisibleRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityWarningValue: any;
  setAccessibilityWarningValue(_: any) // inherited from NSAccessibility
  accessibilityWindow: any;
  setAccessibilityWindow(_: any) // inherited from NSAccessibility
  accessibilityWindows: NSArray<any>;
  setAccessibilityWindows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityZoomButton: any;
  setAccessibilityZoomButton(_: any) // inherited from NSAccessibility
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityAddChildElement(_: NSAccessibilityElement): void;
  accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;
  accessibilityCellForColumnRow(_: number, row: number): any;
  accessibilityFrameForRange(_: NSRange): NSRect;
  accessibilityLayoutPointForScreenPoint(_: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(_: NSSize): NSSize;
  accessibilityLineForIndex(_: number): number;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  accessibilityRTFForRange(_: NSRange): Data;
  accessibilityRangeForIndex(_: number): NSRange;
  accessibilityRangeForLine(_: number): NSRange;
  accessibilityRangeForPosition(_: NSPoint): NSRange;
  accessibilityScreenPointForLayoutPoint(_: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(_: NSSize): NSSize;
  accessibilityStringForRange(_: NSRange): string;
  accessibilityStyleRangeForIndex(_: number): NSRange;
  conformsToProtocol(to: any /* Protocol */): boolean;
  isAccessibilitySelectorAllowed(_: string): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

interface NSAccessibilityElementLoading extends NSObject {
  accessibilityElementWithToken(withToken: any): NSAccessibilityElementProtocol;
  accessibilityRangeInTargetElementWithToken?(withToken: any): NSRange;
}

declare var NSAccessibilityElementLoading: {
  prototype: NSAccessibilityElementLoading;
};

interface NSAccessibilityElementProtocol extends NSObject {
  accessibilityFrame(): NSRect;
  accessibilityIdentifier?(): string;
  accessibilityParent(): any;
  isAccessibilityFocused?(): boolean;
}

declare var NSAccessibilityElementProtocol: {
  prototype: NSAccessibilityElementProtocol;
};

declare var NSAccessibilityEnabledAttribute: string;

declare var NSAccessibilityErrorCodeExceptionInfo: string;

declare var NSAccessibilityExpandedAttribute: string;

declare var NSAccessibilityExtrasMenuBarAttribute: string;

declare var NSAccessibilityFilenameAttribute: string;

declare var NSAccessibilityFirstLineIndentMarkerTypeValue: string;

declare var NSAccessibilityFloatingWindowSubrole: string;

declare var NSAccessibilityFocusedAttribute: string;

declare var NSAccessibilityFocusedUIElementAttribute: string;

declare var NSAccessibilityFocusedUIElementChangedNotification: string;

declare var NSAccessibilityFocusedWindowAttribute: string;

declare var NSAccessibilityFocusedWindowChangedNotification: string;

declare var NSAccessibilityFontFamilyKey: string;

declare var NSAccessibilityFontNameKey: string;

declare var NSAccessibilityFontSizeKey: string;

declare var NSAccessibilityFontTextAttribute: string;

declare var NSAccessibilityForegroundColorTextAttribute: string;

declare function NSAccessibilityFrameInView(parentView: NSView, frame: NSRect): NSRect;
declare var NSAccessibilityFrontmostAttribute: string;

declare var NSAccessibilityFullScreenButtonAttribute: string;

declare var NSAccessibilityFullScreenButtonSubrole: string;

declare var NSAccessibilityGridRole: string;

interface NSAccessibilityGroup extends NSAccessibilityElementProtocol {
}

declare var NSAccessibilityGroup: {
  prototype: NSAccessibilityGroup;
};

declare var NSAccessibilityGroupRole: string;

declare var NSAccessibilityGrowAreaAttribute: string;

declare var NSAccessibilityGrowAreaRole: string;

declare var NSAccessibilityHandleRole: string;

declare var NSAccessibilityHandlesAttribute: string;

declare var NSAccessibilityHeadIndentMarkerTypeValue: string;

declare var NSAccessibilityHeaderAttribute: string;

declare var NSAccessibilityHelpAttribute: string;

declare var NSAccessibilityHelpTagCreatedNotification: string;

declare var NSAccessibilityHelpTagRole: string;

declare var NSAccessibilityHiddenAttribute: string;

declare var NSAccessibilityHorizontalOrientationValue: string;

declare var NSAccessibilityHorizontalScrollBarAttribute: string;

declare var NSAccessibilityHorizontalUnitDescriptionAttribute: string;

declare var NSAccessibilityHorizontalUnitsAttribute: string;

declare var NSAccessibilityIdentifierAttribute: string;

interface NSAccessibilityImage extends NSAccessibilityElementProtocol {
  accessibilityLabel(): string;
}

declare var NSAccessibilityImage: {
  prototype: NSAccessibilityImage;
};

declare var NSAccessibilityImageRole: string;

declare var NSAccessibilityInchesUnitValue: string;

declare var NSAccessibilityIncrementAction: string;

declare var NSAccessibilityIncrementArrowSubrole: string;

declare var NSAccessibilityIncrementButtonAttribute: string;

declare var NSAccessibilityIncrementPageSubrole: string;

declare var NSAccessibilityIncrementorRole: string;

declare var NSAccessibilityIndexAttribute: string;

declare var NSAccessibilityInsertionPointLineNumberAttribute: string;

declare var NSAccessibilityLabelUIElementsAttribute: string;

declare var NSAccessibilityLabelValueAttribute: string;

declare var NSAccessibilityLanguageTextAttribute: string;

interface NSAccessibilityLayoutArea extends NSAccessibilityGroup {
  accessibilityFocusedUIElement: any;
  accessibilityChildren(): NSArray<any>;
  accessibilityLabel(): string;
  accessibilitySelectedChildren(): NSArray<any>;
}

declare var NSAccessibilityLayoutArea: {
  prototype: NSAccessibilityLayoutArea;
};

declare var NSAccessibilityLayoutAreaRole: string;

declare var NSAccessibilityLayoutChangedNotification: string;

interface NSAccessibilityLayoutItem extends NSAccessibilityGroup {
  setAccessibilityFrame?(_: NSRect): void;
}

declare var NSAccessibilityLayoutItem: {
  prototype: NSAccessibilityLayoutItem;
};

declare var NSAccessibilityLayoutItemRole: string;

declare var NSAccessibilityLayoutPointForScreenPointParameterizedAttribute: string;

declare var NSAccessibilityLayoutSizeForScreenSizeParameterizedAttribute: string;

declare var NSAccessibilityLeftTabStopMarkerTypeValue: string;

declare var NSAccessibilityLevelIndicatorRole: string;

declare var NSAccessibilityLineForIndexParameterizedAttribute: string;

declare var NSAccessibilityLinkRole: string;

declare var NSAccessibilityLinkTextAttribute: string;

declare var NSAccessibilityLinkedUIElementsAttribute: string;

interface NSAccessibilityList extends NSAccessibilityTable {
}

declare var NSAccessibilityList: {
  prototype: NSAccessibilityList;
};

declare var NSAccessibilityListItemIndexTextAttribute: string;

declare var NSAccessibilityListItemLevelTextAttribute: string;

declare var NSAccessibilityListItemPrefixTextAttribute: string;

declare var NSAccessibilityListRole: string;

declare var NSAccessibilityMainAttribute: string;

declare var NSAccessibilityMainWindowAttribute: string;

declare var NSAccessibilityMainWindowChangedNotification: string;

declare var NSAccessibilityMarkedMisspelledTextAttribute: string;

declare var NSAccessibilityMarkerGroupUIElementAttribute: string;

declare var NSAccessibilityMarkerTypeAttribute: string;

declare var NSAccessibilityMarkerTypeDescriptionAttribute: string;

declare var NSAccessibilityMarkerUIElementsAttribute: string;

declare var NSAccessibilityMarkerValuesAttribute: string;

declare var NSAccessibilityMatteRole: string;

declare var NSAccessibilityMaxValueAttribute: string;

declare var NSAccessibilityMenuBarAttribute: string;

declare var NSAccessibilityMenuBarItemRole: string;

declare var NSAccessibilityMenuBarRole: string;

declare var NSAccessibilityMenuButtonRole: string;

declare var NSAccessibilityMenuItemRole: string;

declare var NSAccessibilityMenuRole: string;

declare var NSAccessibilityMinValueAttribute: string;

declare var NSAccessibilityMinimizeButtonAttribute: string;

declare var NSAccessibilityMinimizeButtonSubrole: string;

declare var NSAccessibilityMinimizedAttribute: string;

declare var NSAccessibilityMisspelledTextAttribute: string;

declare var NSAccessibilityModalAttribute: string;

declare var NSAccessibilityMovedNotification: string;

interface NSAccessibilityNavigableStaticText extends NSAccessibilityStaticText {
  accessibilityFrameForRange(for_: NSRange): NSRect;
  accessibilityLineForIndex(for_: number): number;
  accessibilityRangeForLine(forLine: number): NSRange;
  accessibilityStringForRange(for_: NSRange): string;
}

declare var NSAccessibilityNavigableStaticText: {
  prototype: NSAccessibilityNavigableStaticText;
};

declare var NSAccessibilityNextContentsAttribute: string;

declare var NSAccessibilityNumberOfCharactersAttribute: string;

declare var NSAccessibilityOrderedByRowAttribute: string;

declare var NSAccessibilityOrientationAttribute: string;

interface NSAccessibilityOutline extends NSAccessibilityTable {
}

declare var NSAccessibilityOutline: {
  prototype: NSAccessibilityOutline;
};

declare var NSAccessibilityOutlineRole: string;

declare var NSAccessibilityOutlineRowSubrole: string;

declare var NSAccessibilityOverflowButtonAttribute: string;

declare var NSAccessibilityPageRole: string;

declare var NSAccessibilityParentAttribute: string;

declare var NSAccessibilityPicasUnitValue: string;

declare var NSAccessibilityPickAction: string;

declare var NSAccessibilityPlaceholderValueAttribute: string;

declare function NSAccessibilityPointInView(parentView: NSView, point: NSPoint): NSPoint;
declare var NSAccessibilityPointsUnitValue: string;

declare var NSAccessibilityPopUpButtonRole: string;

declare var NSAccessibilityPopoverRole: string;

declare var NSAccessibilityPositionAttribute: string;

declare function NSAccessibilityPostNotification(element: any, notification: string): void;
declare function NSAccessibilityPostNotificationWithUserInfo(element: any, notification: string, userInfo: NSDictionary<string, any>): void;
declare var NSAccessibilityPressAction: string;

declare var NSAccessibilityPreviousContentsAttribute: string;

declare var NSAccessibilityPriorityKey: string;

interface NSAccessibilityProgressIndicator extends NSAccessibilityGroup {
  accessibilityValue(): number;
}

declare var NSAccessibilityProgressIndicator: {
  prototype: NSAccessibilityProgressIndicator;
};

declare var NSAccessibilityProgressIndicatorRole: string;

declare var NSAccessibilityProxyAttribute: string;

declare var NSAccessibilityRTFForRangeParameterizedAttribute: string;

interface NSAccessibilityRadioButton extends NSAccessibilityButton {
  accessibilityValue(): number;
}

declare var NSAccessibilityRadioButton: {
  prototype: NSAccessibilityRadioButton;
};

declare var NSAccessibilityRadioButtonRole: string;

declare var NSAccessibilityRadioGroupRole: string;

declare var NSAccessibilityRaiseAction: string;

declare var NSAccessibilityRangeForIndexParameterizedAttribute: string;

declare var NSAccessibilityRangeForLineParameterizedAttribute: string;

declare var NSAccessibilityRangeForPositionParameterizedAttribute: string;

declare var NSAccessibilityRatingIndicatorSubrole: string;

declare var NSAccessibilityRelevanceIndicatorRole: string;

declare var NSAccessibilityRequiredAttribute: string;

declare var NSAccessibilityResizedNotification: string;

declare var NSAccessibilityRightTabStopMarkerTypeValue: string;

declare var NSAccessibilityRoleAttribute: string;

declare function NSAccessibilityRoleDescription(role: string, subrole: string): string;
declare var NSAccessibilityRoleDescriptionAttribute: string;

declare function NSAccessibilityRoleDescriptionForUIElement(element: any): string;
interface NSAccessibilityRow extends NSAccessibilityGroup {
  accessibilityDisclosureLevel?(): number;
  accessibilityIndex(): number;
}

declare var NSAccessibilityRow: {
  prototype: NSAccessibilityRow;
};

declare var NSAccessibilityRowCollapsedNotification: string;

declare var NSAccessibilityRowCountAttribute: string;

declare var NSAccessibilityRowCountChangedNotification: string;

declare var NSAccessibilityRowExpandedNotification: string;

declare var NSAccessibilityRowHeaderUIElementsAttribute: string;

declare var NSAccessibilityRowIndexRangeAttribute: string;

declare var NSAccessibilityRowRole: string;

declare var NSAccessibilityRowsAttribute: string;

declare var NSAccessibilityRulerMarkerRole: string;

declare var NSAccessibilityRulerRole: string;

declare var NSAccessibilityScreenPointForLayoutPointParameterizedAttribute: string;

declare var NSAccessibilityScreenSizeForLayoutSizeParameterizedAttribute: string;

declare var NSAccessibilityScrollAreaRole: string;

declare var NSAccessibilityScrollBarRole: string;

declare var NSAccessibilitySearchButtonAttribute: string;

declare var NSAccessibilitySearchFieldSubrole: string;

declare var NSAccessibilitySearchMenuAttribute: string;

declare var NSAccessibilitySectionListSubrole: string;

declare var NSAccessibilitySecureTextFieldSubrole: string;

declare var NSAccessibilitySelectedAttribute: string;

declare var NSAccessibilitySelectedCellsAttribute: string;

declare var NSAccessibilitySelectedCellsChangedNotification: string;

declare var NSAccessibilitySelectedChildrenAttribute: string;

declare var NSAccessibilitySelectedChildrenChangedNotification: string;

declare var NSAccessibilitySelectedChildrenMovedNotification: string;

declare var NSAccessibilitySelectedColumnsAttribute: string;

declare var NSAccessibilitySelectedColumnsChangedNotification: string;

declare var NSAccessibilitySelectedRowsAttribute: string;

declare var NSAccessibilitySelectedRowsChangedNotification: string;

declare var NSAccessibilitySelectedTextAttribute: string;

declare var NSAccessibilitySelectedTextChangedNotification: string;

declare var NSAccessibilitySelectedTextRangeAttribute: string;

declare var NSAccessibilitySelectedTextRangesAttribute: string;

declare var NSAccessibilityServesAsTitleForUIElementsAttribute: string;

declare function NSAccessibilitySetMayContainProtectedContent(flag: boolean): boolean;
declare var NSAccessibilityShadowTextAttribute: string;

declare var NSAccessibilitySharedCharacterRangeAttribute: string;

declare var NSAccessibilitySharedFocusElementsAttribute: string;

declare var NSAccessibilitySharedTextUIElementsAttribute: string;

declare var NSAccessibilitySheetCreatedNotification: string;

declare var NSAccessibilitySheetRole: string;

declare var NSAccessibilityShowAlternateUIAction: string;

declare var NSAccessibilityShowDefaultUIAction: string;

declare var NSAccessibilityShowMenuAction: string;

declare var NSAccessibilityShownMenuAttribute: string;

declare var NSAccessibilitySizeAttribute: string;

interface NSAccessibilitySlider extends NSAccessibilityElementProtocol {
  accessibilityLabel(): string;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityValue(): any;
}

declare var NSAccessibilitySlider: {
  prototype: NSAccessibilitySlider;
};

declare var NSAccessibilitySliderRole: string;

declare var NSAccessibilitySortButtonSubrole: string;

declare var NSAccessibilitySortDirectionAttribute: string;

declare var NSAccessibilitySplitGroupRole: string;

declare var NSAccessibilitySplitterRole: string;

declare var NSAccessibilitySplittersAttribute: string;

declare var NSAccessibilityStandardWindowSubrole: string;

interface NSAccessibilityStaticText extends NSAccessibilityElementProtocol {
  accessibilityAttributedStringForRange?(for_: NSRange): NSAttributedString;
  accessibilityValue(): string;
  accessibilityVisibleCharacterRange?(): NSRange;
}

declare var NSAccessibilityStaticText: {
  prototype: NSAccessibilityStaticText;
};

declare var NSAccessibilityStaticTextRole: string;

interface NSAccessibilityStepper extends NSAccessibilityElementProtocol {
  accessibilityLabel(): string;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityValue?(): any;
}

declare var NSAccessibilityStepper: {
  prototype: NSAccessibilityStepper;
};

declare var NSAccessibilityStrikethroughColorTextAttribute: string;

declare var NSAccessibilityStrikethroughTextAttribute: string;

declare var NSAccessibilityStringForRangeParameterizedAttribute: string;

declare var NSAccessibilityStyleRangeForIndexParameterizedAttribute: string;

declare var NSAccessibilitySubroleAttribute: string;

declare var NSAccessibilitySuperscriptTextAttribute: string;

interface NSAccessibilitySwitch extends NSAccessibilityButton {
  accessibilityPerformDecrement?(): boolean;
  accessibilityPerformIncrement?(): boolean;
  accessibilityValue(): string;
}

declare var NSAccessibilitySwitch: {
  prototype: NSAccessibilitySwitch;
};

declare var NSAccessibilitySwitchSubrole: string;

declare var NSAccessibilitySystemDialogSubrole: string;

declare var NSAccessibilitySystemFloatingWindowSubrole: string;

declare var NSAccessibilitySystemWideRole: string;

declare var NSAccessibilityTabButtonSubrole: string;

declare var NSAccessibilityTabGroupRole: string;

interface NSAccessibilityTable extends NSAccessibilityGroup {
  accessibilityColumnHeaderUIElements?(): NSArray<any>;
  accessibilityColumns?(): NSArray<any>;
  accessibilityLabel(): string;
  accessibilityRowHeaderUIElements?(): NSArray<any>;
  accessibilityRows(): NSArray<NSAccessibilityRow>;
  accessibilitySelectedCells?(): NSArray<any>;
  accessibilitySelectedColumns?(): NSArray<any>;
  accessibilitySelectedRows?(): NSArray<NSAccessibilityRow>;
  accessibilityVisibleCells?(): NSArray<any>;
  accessibilityVisibleColumns?(): NSArray<any>;
  accessibilityVisibleRows?(): NSArray<NSAccessibilityRow>;
  setAccessibilitySelectedRows?(_: NSArray<NSAccessibilityRow>): void;
}

declare var NSAccessibilityTable: {
  prototype: NSAccessibilityTable;
};

declare var NSAccessibilityTableRole: string;

declare var NSAccessibilityTableRowSubrole: string;

declare var NSAccessibilityTabsAttribute: string;

declare var NSAccessibilityTailIndentMarkerTypeValue: string;

declare var NSAccessibilityTextAlignmentAttribute: string;

declare var NSAccessibilityTextAreaRole: string;

declare var NSAccessibilityTextAttachmentSubrole: string;

declare var NSAccessibilityTextFieldRole: string;

declare var NSAccessibilityTextLinkSubrole: string;

declare var NSAccessibilityTimelineSubrole: string;

declare var NSAccessibilityTitleAttribute: string;

declare var NSAccessibilityTitleChangedNotification: string;

declare var NSAccessibilityTitleUIElementAttribute: string;

declare var NSAccessibilityToggleSubrole: string;

declare var NSAccessibilityToolbarButtonAttribute: string;

declare var NSAccessibilityToolbarButtonSubrole: string;

declare var NSAccessibilityToolbarRole: string;

declare var NSAccessibilityTopLevelUIElementAttribute: string;

declare var NSAccessibilityUIElementDestroyedNotification: string;

declare var NSAccessibilityUIElementsKey: string;

declare var NSAccessibilityURLAttribute: string;

declare var NSAccessibilityUnderlineColorTextAttribute: string;

declare var NSAccessibilityUnderlineTextAttribute: string;

declare function NSAccessibilityUnignoredAncestor(element: any): any;
declare function NSAccessibilityUnignoredChildren(originalChildren: NSArray<any> | any[]): NSArray<any>;
declare function NSAccessibilityUnignoredChildrenForOnlyChild(originalChild: any): NSArray<any>;
declare function NSAccessibilityUnignoredDescendant(element: any): any;
declare var NSAccessibilityUnitDescriptionAttribute: string;

declare var NSAccessibilityUnitsAttribute: string;

declare var NSAccessibilityUnitsChangedNotification: string;

declare var NSAccessibilityUnknownMarkerTypeValue: string;

declare var NSAccessibilityUnknownOrientationValue: string;

declare var NSAccessibilityUnknownRole: string;

declare var NSAccessibilityUnknownSortDirectionValue: string;

declare var NSAccessibilityUnknownSubrole: string;

declare var NSAccessibilityUnknownUnitValue: string;

declare var NSAccessibilityValueAttribute: string;

declare var NSAccessibilityValueChangedNotification: string;

declare var NSAccessibilityValueDescriptionAttribute: string;

declare var NSAccessibilityValueIndicatorRole: string;

declare var NSAccessibilityVerticalOrientationValue: string;

declare var NSAccessibilityVerticalScrollBarAttribute: string;

declare var NSAccessibilityVerticalUnitDescriptionAttribute: string;

declare var NSAccessibilityVerticalUnitsAttribute: string;

declare var NSAccessibilityVisibleCellsAttribute: string;

declare var NSAccessibilityVisibleCharacterRangeAttribute: string;

declare var NSAccessibilityVisibleChildrenAttribute: string;

declare var NSAccessibilityVisibleColumnsAttribute: string;

declare var NSAccessibilityVisibleNameKey: string;

declare var NSAccessibilityVisibleRowsAttribute: string;

declare var NSAccessibilityWarningValueAttribute: string;

declare var NSAccessibilityWindowAttribute: string;

declare var NSAccessibilityWindowCreatedNotification: string;

declare var NSAccessibilityWindowDeminiaturizedNotification: string;

declare var NSAccessibilityWindowMiniaturizedNotification: string;

declare var NSAccessibilityWindowMovedNotification: string;

declare var NSAccessibilityWindowResizedNotification: string;

declare var NSAccessibilityWindowRole: string;

declare var NSAccessibilityWindowsAttribute: string;

declare var NSAccessibilityZoomButtonAttribute: string;

declare var NSAccessibilityZoomButtonSubrole: string;

declare class NSActionCell extends NSCell {
}

declare class NSAlert extends NSObject {
  accessoryView: NSView;
  setAccessoryView(_: NSView)
  alertStyle: NSAlert.Style;
  setAlertStyle(_: NSAlert.Style)
  readonly buttons: NSArray<NSButton>;
  delegate: NSAlertDelegate;
  setDelegate(_: NSAlertDelegate)
  helpAnchor: string;
  setHelpAnchor(_: string)
  icon: NSImage;
  setIcon(_: NSImage)
  informativeText: string;
  setInformativeText(_: string)
  messageText: string;
  setMessageText(_: string)
  showsHelp: boolean;
  setShowsHelp(_: boolean)
  showsSuppressionButton: boolean;
  setShowsSuppressionButton(_: boolean)
  readonly suppressionButton: NSButton;
  readonly window: NSWindow;
  addButtonWithTitle(withTitle: string): NSButton;
  beginSheetModalForWindowCompletionHandler(for_: NSWindow, completionHandler?: (p1: number) => void): void;
  layout(): void;
  runModal(): number;
}

interface NSAlertDelegate extends NSObject {
  alertShowHelp?(_: NSAlert): boolean;
}

declare var NSAlertDelegate: {
  prototype: NSAlertDelegate;
};

declare var NSAlertFirstButtonReturn: number;

declare var NSAlertSecondButtonReturn: number;

declare var NSAlertThirdButtonReturn: number;

declare var NSAlignmentBinding: string;

declare class NSAlignmentFeedbackFilter extends NSObject {
  static inputEventMask(): NSEvent.EventTypeMask;
  alignmentFeedbackTokenForHorizontalMovementInViewPreviousXAlignedXDefaultX(in_?: NSView, previousX: number, alignedX: number, defaultX: number): NSAlignmentFeedbackToken;
  alignmentFeedbackTokenForMovementInViewPreviousPointAlignedPointDefaultPoint(in_?: NSView, previousPoint: NSPoint, alignedPoint: NSPoint, defaultPoint: NSPoint): NSAlignmentFeedbackToken;
  alignmentFeedbackTokenForVerticalMovementInViewPreviousYAlignedYDefaultY(in_?: NSView, previousY: number, alignedY: number, defaultY: number): NSAlignmentFeedbackToken;
  performFeedbackPerformanceTime(_: NSArray<NSAlignmentFeedbackToken>, performanceTime: NSHapticFeedbackManager.PerformanceTime): void;
  updateWithEvent(with_: NSEvent): void;
  updateWithPanRecognizer(withPanRecognizer: NSPanGestureRecognizer): void;
}

interface NSAlignmentFeedbackToken extends NSObject {
}

declare var NSAlignmentFeedbackToken: {
  prototype: NSAlignmentFeedbackToken;
};

declare var NSAllRomanInputSourcesLocaleIdentifier: string;

declare var NSAllowsEditingMultipleValuesSelectionBindingOption: string;

declare var NSAllowsNullArgumentBindingOption: string;

declare var NSAlternateImageBinding: string;

declare var NSAlternateTitleBinding: string;

declare var NSAlwaysPresentsApplicationModalAlertsBindingOption: string;

interface NSAnimatablePropertyContainer {
  animations: NSDictionary<string, any>;
  setAnimations(_: NSDictionary<string, any>)
  animationForKey(forKey: string): any;
  animator(): NSAnimatablePropertyContainer;
}

declare var NSAnimatablePropertyContainer: {
  prototype: NSAnimatablePropertyContainer;
   static defaultAnimationForKey(forKey: string): any;
};

declare var NSAnimateBinding: string;

declare class NSAnimation extends NSObject implements NSCoding, NSCopying {
  readonly isAnimating: boolean;
  animationBlockingMode: NSAnimation.BlockingMode;
  setAnimationBlockingMode(_: NSAnimation.BlockingMode)
  animationCurve: NSAnimation.Curve;
  setAnimationCurve(_: NSAnimation.Curve)
  currentProgress: number;
  setCurrentProgress(_: number)
  readonly currentValue: number;
  delegate: NSAnimationDelegate;
  setDelegate(_: NSAnimationDelegate)
  duration: number;
  setDuration(_: number)
  frameRate: number;
  setFrameRate(_: number)
  progressMarks: NSArray<number>;
  setProgressMarks(_: NSArray<number>)
  readonly runLoopModesForAnimating: NSArray<string>;
  addProgressMark(_: number): void;
  clearStartAnimation(): void;
  clearStopAnimation(): void;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithDurationAnimationCurve(duration: number, animationCurve: NSAnimation.Curve): this;
  removeProgressMark(_: number): void;
  startAnimation(): void;
  startWhenAnimationReachesProgress(when: NSAnimation, reachesProgress: number): void;
  stopAnimation(): void;
  stopWhenAnimationReachesProgress(when: NSAnimation, reachesProgress: number): void;
}

declare class NSAnimationContext extends NSObject {
  static beginGrouping(): void;
  static endGrouping(): void;
  static runAnimationGroup(_: (p1: NSAnimationContext) => void): void;
  static runAnimationGroupCompletionHandler(_: (p1: NSAnimationContext) => void, completionHandler?: () => void): void;
  allowsImplicitAnimation: boolean;
  setAllowsImplicitAnimation(_: boolean)
  completionHandler: () => void;
  setCompletionHandler(_: () => void)
  duration: number;
  setDuration(_: number)
  timingFunction: CAMediaTimingFunction;
  setTimingFunction(_: CAMediaTimingFunction)
  static currentContext(): NSAnimationContext;
}

declare var NSAnimationDelayBinding: string;

interface NSAnimationDelegate extends NSObject {
  animationDidReachProgressMark?(_: NSAnimation, didReachProgressMark: number): void;
  animationValueForProgress?(_: NSAnimation, valueForProgress: number): number;
  animationDidEnd?(_: NSAnimation): void;
  animationDidStop?(_: NSAnimation): void;
  animationShouldStart?(_: NSAnimation): boolean;
}

declare var NSAnimationDelegate: {
  prototype: NSAnimationDelegate;
};

declare var NSAnimationProgressMark: string;

declare var NSAnimationProgressMarkNotification: string;

declare var NSAnimationTriggerOrderIn: string;

declare var NSAnimationTriggerOrderOut: string;

declare var NSAntialiasThresholdChangedNotification: string;

declare var NSApp: NSApplication;

declare var NSAppKitIgnoredException: string;

declare var NSAppKitVersionNumber: number;

declare var NSAppKitVersionNumber10_0: number;

declare var NSAppKitVersionNumber10_1: number;

declare var NSAppKitVersionNumber10_10: number;

declare var NSAppKitVersionNumber10_10_2: number;

declare var NSAppKitVersionNumber10_10_3: number;

declare var NSAppKitVersionNumber10_10_4: number;

declare var NSAppKitVersionNumber10_10_5: number;

declare var NSAppKitVersionNumber10_10_Max: number;

declare var NSAppKitVersionNumber10_11: number;

declare var NSAppKitVersionNumber10_11_1: number;

declare var NSAppKitVersionNumber10_11_2: number;

declare var NSAppKitVersionNumber10_11_3: number;

declare var NSAppKitVersionNumber10_12: number;

declare var NSAppKitVersionNumber10_12_1: number;

declare var NSAppKitVersionNumber10_12_2: number;

declare var NSAppKitVersionNumber10_13: number;

declare var NSAppKitVersionNumber10_13_1: number;

declare var NSAppKitVersionNumber10_13_2: number;

declare var NSAppKitVersionNumber10_13_4: number;

declare var NSAppKitVersionNumber10_14: number;

declare var NSAppKitVersionNumber10_14_1: number;

declare var NSAppKitVersionNumber10_14_2: number;

declare var NSAppKitVersionNumber10_14_3: number;

declare var NSAppKitVersionNumber10_14_4: number;

declare var NSAppKitVersionNumber10_14_5: number;

declare var NSAppKitVersionNumber10_2: number;

declare var NSAppKitVersionNumber10_2_3: number;

declare var NSAppKitVersionNumber10_3: number;

declare var NSAppKitVersionNumber10_3_2: number;

declare var NSAppKitVersionNumber10_3_3: number;

declare var NSAppKitVersionNumber10_3_5: number;

declare var NSAppKitVersionNumber10_3_7: number;

declare var NSAppKitVersionNumber10_3_9: number;

declare var NSAppKitVersionNumber10_4: number;

declare var NSAppKitVersionNumber10_4_1: number;

declare var NSAppKitVersionNumber10_4_3: number;

declare var NSAppKitVersionNumber10_4_4: number;

declare var NSAppKitVersionNumber10_4_7: number;

declare var NSAppKitVersionNumber10_5: number;

declare var NSAppKitVersionNumber10_5_2: number;

declare var NSAppKitVersionNumber10_5_3: number;

declare var NSAppKitVersionNumber10_6: number;

declare var NSAppKitVersionNumber10_7: number;

declare var NSAppKitVersionNumber10_7_2: number;

declare var NSAppKitVersionNumber10_7_3: number;

declare var NSAppKitVersionNumber10_7_4: number;

declare var NSAppKitVersionNumber10_8: number;

declare var NSAppKitVersionNumber10_9: number;

declare var NSAppKitVersionNumberWithColumnResizingBrowser: number;

declare var NSAppKitVersionNumberWithContinuousScrollingBrowser: number;

declare var NSAppKitVersionNumberWithCursorSizeSupport: number;

declare var NSAppKitVersionNumberWithCustomSheetPosition: number;

declare var NSAppKitVersionNumberWithDeferredWindowDisplaySupport: number;

declare var NSAppKitVersionNumberWithDirectionalTabs: number;

declare var NSAppKitVersionNumberWithDockTilePlugInSupport: number;

declare var NSAppKitVersionNumberWithPatternColorLeakFix: number;

declare var NSAppKitVirtualMemoryException: string;

declare class NSAppearance extends NSObject implements NSSecureCoding {
  readonly allowsVibrancy: boolean;
  readonly name: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  bestMatchFromAppearancesWithNames(from: NSArray<string>): string;
  encodeWithCoder(with_: NSCoder): void;
  static createWithAppearanceNamedBundle(appearanceNamed: string, bundle?: Bundle): this;
  static createWithCoder(coder: NSCoder): this;
}

interface NSAppearanceCustomization extends NSObject {
  appearance: NSAppearance;
  setAppearance(_: NSAppearance)
  effectiveAppearance: NSAppearance;
}

declare var NSAppearanceCustomization: {
  prototype: NSAppearanceCustomization;
};

declare var NSAppearanceDocumentAttribute: string;

declare var NSAppearanceNameAccessibilityHighContrastAqua: string;

declare var NSAppearanceNameAccessibilityHighContrastDarkAqua: string;

declare var NSAppearanceNameAccessibilityHighContrastVibrantDark: string;

declare var NSAppearanceNameAccessibilityHighContrastVibrantLight: string;

declare var NSAppearanceNameAqua: string;

declare var NSAppearanceNameDarkAqua: string;

declare var NSAppearanceNameVibrantDark: string;

declare var NSAppearanceNameVibrantLight: string;

declare class NSApplication extends NSResponder implements NSAccessibility, NSAccessibilityElementProtocol, NSMenuItemValidation, NSUserInterfaceValidations, NSAppearanceCustomization {
  static detachDrawingThreadToTargetWithObject(_: string, toTarget: any, with_?: any): void;
  readonly isActive: boolean;
  applicationIconImage: NSImage;
  setApplicationIconImage(_: NSImage)
  isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;
  setAutomaticCustomizeTouchBarMenuItemEnabled(_: boolean)
  readonly currentEvent: NSEvent;
  readonly currentSystemPresentationOptions: NSApplication.PresentationOptions;
  delegate: NSApplicationDelegate;
  setDelegate(_: NSApplicationDelegate)
  readonly dockTile: NSDockTile;
  readonly enabledRemoteNotificationTypes: NSApplication.RemoteNotificationType;
  readonly isFullKeyboardAccessEnabled: boolean;
  helpMenu: NSMenu;
  setHelpMenu(_: NSMenu)
  readonly isHidden: boolean;
  readonly keyWindow: NSWindow;
  mainMenu: NSMenu;
  setMainMenu(_: NSMenu)
  readonly mainWindow: NSWindow;
  readonly modalWindow: NSWindow;
  readonly occlusionState: NSApplication.OcclusionState;
  readonly orderedDocuments: NSArray<NSDocument>;
  readonly orderedWindows: NSArray<NSWindow>;
  presentationOptions: NSApplication.PresentationOptions;
  setPresentationOptions(_: NSApplication.PresentationOptions)
  readonly isRegisteredForRemoteNotifications: boolean;
  readonly isRunning: boolean;
  servicesMenu: NSMenu;
  setServicesMenu(_: NSMenu)
  servicesProvider: any;
  setServicesProvider(_: any)
  readonly userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection;
  readonly windows: NSArray<NSWindow>;
  windowsMenu: NSMenu;
  setWindowsMenu(_: NSMenu)
  static sharedApplication(): NSApplication;
  accessibilityActivationPoint: NSPoint;
  setAccessibilityActivationPoint(_: NSPoint) // inherited from NSAccessibility
  accessibilityAllowedValues: NSArray<number>;
  setAccessibilityAllowedValues(_: NSArray<number>) // inherited from NSAccessibility
  isAccessibilityAlternateUIVisible: boolean;
  setAccessibilityAlternateUIVisible(_: boolean) // inherited from NSAccessibility
  accessibilityApplicationFocusedUIElement: any;
  setAccessibilityApplicationFocusedUIElement(_: any) // inherited from NSAccessibility
  accessibilityCancelButton: any;
  setAccessibilityCancelButton(_: any) // inherited from NSAccessibility
  accessibilityChildren: NSArray<any>;
  setAccessibilityChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;
  setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>) // inherited from NSAccessibility
  accessibilityClearButton: any;
  setAccessibilityClearButton(_: any) // inherited from NSAccessibility
  accessibilityCloseButton: any;
  setAccessibilityCloseButton(_: any) // inherited from NSAccessibility
  accessibilityColumnCount: number;
  setAccessibilityColumnCount(_: number) // inherited from NSAccessibility
  accessibilityColumnHeaderUIElements: NSArray<any>;
  setAccessibilityColumnHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumnIndexRange: NSRange;
  setAccessibilityColumnIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityColumnTitles: NSArray<any>;
  setAccessibilityColumnTitles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumns: NSArray<any>;
  setAccessibilityColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityContents: NSArray<any>;
  setAccessibilityContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityCriticalValue: any;
  setAccessibilityCriticalValue(_: any) // inherited from NSAccessibility
  accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;
  setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>) // inherited from NSAccessibility
  accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;
  setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>) // inherited from NSAccessibility
  accessibilityDecrementButton: any;
  setAccessibilityDecrementButton(_: any) // inherited from NSAccessibility
  accessibilityDefaultButton: any;
  setAccessibilityDefaultButton(_: any) // inherited from NSAccessibility
  isAccessibilityDisclosed: boolean;
  setAccessibilityDisclosed(_: boolean) // inherited from NSAccessibility
  accessibilityDisclosedByRow: any;
  setAccessibilityDisclosedByRow(_: any) // inherited from NSAccessibility
  accessibilityDisclosedRows: any;
  setAccessibilityDisclosedRows(_: any) // inherited from NSAccessibility
  accessibilityDisclosureLevel: number;
  setAccessibilityDisclosureLevel(_: number) // inherited from NSAccessibility
  accessibilityDocument: string;
  setAccessibilityDocument(_: string) // inherited from NSAccessibility
  isAccessibilityEdited: boolean;
  setAccessibilityEdited(_: boolean) // inherited from NSAccessibility
  isAccessibilityElement: boolean;
  setAccessibilityElement(_: boolean) // inherited from NSAccessibility
  isAccessibilityEnabled: boolean;
  setAccessibilityEnabled(_: boolean) // inherited from NSAccessibility
  isAccessibilityExpanded: boolean;
  setAccessibilityExpanded(_: boolean) // inherited from NSAccessibility
  accessibilityExtrasMenuBar: any;
  setAccessibilityExtrasMenuBar(_: any) // inherited from NSAccessibility
  accessibilityFilename: string;
  setAccessibilityFilename(_: string) // inherited from NSAccessibility
  isAccessibilityFocused: boolean;
  setAccessibilityFocused(_: boolean) // inherited from NSAccessibility
  accessibilityFocusedWindow: any;
  setAccessibilityFocusedWindow(_: any) // inherited from NSAccessibility
  accessibilityFrame: NSRect;
  setAccessibilityFrame(_: NSRect) // inherited from NSAccessibility
  isAccessibilityFrontmost: boolean;
  setAccessibilityFrontmost(_: boolean) // inherited from NSAccessibility
  accessibilityFullScreenButton: any;
  setAccessibilityFullScreenButton(_: any) // inherited from NSAccessibility
  accessibilityGrowArea: any;
  setAccessibilityGrowArea(_: any) // inherited from NSAccessibility
  accessibilityHandles: NSArray<any>;
  setAccessibilityHandles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityHeader: any;
  setAccessibilityHeader(_: any) // inherited from NSAccessibility
  accessibilityHelp: string;
  setAccessibilityHelp(_: string) // inherited from NSAccessibility
  isAccessibilityHidden: boolean;
  setAccessibilityHidden(_: boolean) // inherited from NSAccessibility
  accessibilityHorizontalScrollBar: any;
  setAccessibilityHorizontalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityHorizontalUnitDescription: string;
  setAccessibilityHorizontalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityHorizontalUnits: NSAccessibility.Units;
  setAccessibilityHorizontalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityIdentifier: string;
  setAccessibilityIdentifier(_: string) // inherited from NSAccessibility
  accessibilityIncrementButton: any;
  setAccessibilityIncrementButton(_: any) // inherited from NSAccessibility
  accessibilityIndex: number;
  setAccessibilityIndex(_: number) // inherited from NSAccessibility
  accessibilityInsertionPointLineNumber: number;
  setAccessibilityInsertionPointLineNumber(_: number) // inherited from NSAccessibility
  accessibilityLabel: string;
  setAccessibilityLabel(_: string) // inherited from NSAccessibility
  accessibilityLabelUIElements: NSArray<any>;
  setAccessibilityLabelUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityLabelValue: number;
  setAccessibilityLabelValue(_: number) // inherited from NSAccessibility
  accessibilityLinkedUIElements: NSArray<any>;
  setAccessibilityLinkedUIElements(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityMain: boolean;
  setAccessibilityMain(_: boolean) // inherited from NSAccessibility
  accessibilityMainWindow: any;
  setAccessibilityMainWindow(_: any) // inherited from NSAccessibility
  accessibilityMarkerGroupUIElement: any;
  setAccessibilityMarkerGroupUIElement(_: any) // inherited from NSAccessibility
  accessibilityMarkerTypeDescription: string;
  setAccessibilityMarkerTypeDescription(_: string) // inherited from NSAccessibility
  accessibilityMarkerUIElements: NSArray<any>;
  setAccessibilityMarkerUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityMarkerValues: any;
  setAccessibilityMarkerValues(_: any) // inherited from NSAccessibility
  accessibilityMaxValue: any;
  setAccessibilityMaxValue(_: any) // inherited from NSAccessibility
  accessibilityMenuBar: any;
  setAccessibilityMenuBar(_: any) // inherited from NSAccessibility
  accessibilityMinValue: any;
  setAccessibilityMinValue(_: any) // inherited from NSAccessibility
  accessibilityMinimizeButton: any;
  setAccessibilityMinimizeButton(_: any) // inherited from NSAccessibility
  isAccessibilityMinimized: boolean;
  setAccessibilityMinimized(_: boolean) // inherited from NSAccessibility
  isAccessibilityModal: boolean;
  setAccessibilityModal(_: boolean) // inherited from NSAccessibility
  accessibilityNextContents: NSArray<any>;
  setAccessibilityNextContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityNumberOfCharacters: number;
  setAccessibilityNumberOfCharacters(_: number) // inherited from NSAccessibility
  isAccessibilityOrderedByRow: boolean;
  setAccessibilityOrderedByRow(_: boolean) // inherited from NSAccessibility
  accessibilityOrientation: NSAccessibility.Orientation;
  setAccessibilityOrientation(_: NSAccessibility.Orientation) // inherited from NSAccessibility
  accessibilityOverflowButton: any;
  setAccessibilityOverflowButton(_: any) // inherited from NSAccessibility
  accessibilityParent: any;
  setAccessibilityParent(_: any) // inherited from NSAccessibility
  accessibilityPlaceholderValue: string;
  setAccessibilityPlaceholderValue(_: string) // inherited from NSAccessibility
  accessibilityPreviousContents: NSArray<any>;
  setAccessibilityPreviousContents(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityProtectedContent: boolean;
  setAccessibilityProtectedContent(_: boolean) // inherited from NSAccessibility
  accessibilityProxy: any;
  setAccessibilityProxy(_: any) // inherited from NSAccessibility
  isAccessibilityRequired: boolean;
  setAccessibilityRequired(_: boolean) // inherited from NSAccessibility
  accessibilityRole: string;
  setAccessibilityRole(_: string) // inherited from NSAccessibility
  accessibilityRoleDescription: string;
  setAccessibilityRoleDescription(_: string) // inherited from NSAccessibility
  accessibilityRowCount: number;
  setAccessibilityRowCount(_: number) // inherited from NSAccessibility
  accessibilityRowHeaderUIElements: NSArray<any>;
  setAccessibilityRowHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRowIndexRange: NSRange;
  setAccessibilityRowIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityRows: NSArray<any>;
  setAccessibilityRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRulerMarkerType: NSAccessibility.RulerMarkerType;
  setAccessibilityRulerMarkerType(_: NSAccessibility.RulerMarkerType) // inherited from NSAccessibility
  accessibilitySearchButton: any;
  setAccessibilitySearchButton(_: any) // inherited from NSAccessibility
  accessibilitySearchMenu: any;
  setAccessibilitySearchMenu(_: any) // inherited from NSAccessibility
  isAccessibilitySelected: boolean;
  setAccessibilitySelected(_: boolean) // inherited from NSAccessibility
  accessibilitySelectedCells: NSArray<any>;
  setAccessibilitySelectedCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedChildren: NSArray<any>;
  setAccessibilitySelectedChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedColumns: NSArray<any>;
  setAccessibilitySelectedColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedRows: NSArray<any>;
  setAccessibilitySelectedRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedText: string;
  setAccessibilitySelectedText(_: string) // inherited from NSAccessibility
  accessibilitySelectedTextRange: NSRange;
  setAccessibilitySelectedTextRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySelectedTextRanges: NSArray<NSValue>;
  setAccessibilitySelectedTextRanges(_: NSArray<NSValue>) // inherited from NSAccessibility
  accessibilityServesAsTitleForUIElements: NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedCharacterRange: NSRange;
  setAccessibilitySharedCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySharedFocusElements: NSArray<any>;
  setAccessibilitySharedFocusElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedTextUIElements: NSArray<any>;
  setAccessibilitySharedTextUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityShownMenu: any;
  setAccessibilityShownMenu(_: any) // inherited from NSAccessibility
  accessibilitySortDirection: NSAccessibility.SortDirection;
  setAccessibilitySortDirection(_: NSAccessibility.SortDirection) // inherited from NSAccessibility
  accessibilitySplitters: NSArray<any>;
  setAccessibilitySplitters(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySubrole: string;
  setAccessibilitySubrole(_: string) // inherited from NSAccessibility
  accessibilityTabs: NSArray<any>;
  setAccessibilityTabs(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityTitle: string;
  setAccessibilityTitle(_: string) // inherited from NSAccessibility
  accessibilityTitleUIElement: any;
  setAccessibilityTitleUIElement(_: any) // inherited from NSAccessibility
  accessibilityToolbarButton: any;
  setAccessibilityToolbarButton(_: any) // inherited from NSAccessibility
  accessibilityTopLevelUIElement: any;
  setAccessibilityTopLevelUIElement(_: any) // inherited from NSAccessibility
  accessibilityURL: NSURL;
  setAccessibilityURL(_: NSURL) // inherited from NSAccessibility
  accessibilityUnitDescription: string;
  setAccessibilityUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityUnits: NSAccessibility.Units;
  setAccessibilityUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityValue: any;
  setAccessibilityValue(_: any) // inherited from NSAccessibility
  accessibilityValueDescription: string;
  setAccessibilityValueDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalScrollBar: any;
  setAccessibilityVerticalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityVerticalUnitDescription: string;
  setAccessibilityVerticalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalUnits: NSAccessibility.Units;
  setAccessibilityVerticalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityVisibleCells: NSArray<any>;
  setAccessibilityVisibleCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleCharacterRange: NSRange;
  setAccessibilityVisibleCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilityVisibleChildren: NSArray<any>;
  setAccessibilityVisibleChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleColumns: NSArray<any>;
  setAccessibilityVisibleColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleRows: NSArray<any>;
  setAccessibilityVisibleRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityWarningValue: any;
  setAccessibilityWarningValue(_: any) // inherited from NSAccessibility
  accessibilityWindow: any;
  setAccessibilityWindow(_: any) // inherited from NSAccessibility
  accessibilityWindows: NSArray<any>;
  setAccessibilityWindows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityZoomButton: any;
  setAccessibilityZoomButton(_: any) // inherited from NSAccessibility
  appearance: NSAppearance;
  setAppearance(_: NSAppearance) // inherited from NSAppearanceCustomization
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly effectiveAppearance: NSAppearance; // inherited from NSAppearanceCustomization
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  abortModal(): void;
  accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;
  accessibilityCellForColumnRow(_: number, row: number): any;
  accessibilityFrame(): NSRect;
  accessibilityFrameForRange(_: NSRange): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLayoutPointForScreenPoint(_: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(_: NSSize): NSSize;
  accessibilityLineForIndex(_: number): number;
  accessibilityParent(): any;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  accessibilityRTFForRange(_: NSRange): Data;
  accessibilityRangeForIndex(_: number): NSRange;
  accessibilityRangeForLine(_: number): NSRange;
  accessibilityRangeForPosition(_: NSPoint): NSRange;
  accessibilityScreenPointForLayoutPoint(_: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(_: NSSize): NSSize;
  accessibilityStringForRange(_: NSRange): string;
  accessibilityStyleRangeForIndex(_: number): NSRange;
  activateContextHelpMode(_?: any): void;
  activateIgnoringOtherApps(ignoringOtherApps: boolean): void;
  activationPolicy(): NSApplication.ActivationPolicy;
  addWindowsItemTitleFilename(_: NSWindow, title: string, filename: boolean): void;
  arrangeInFront(_?: any): void;
  beginModalSessionForWindow(for_: NSWindow): any;
  cancelUserAttentionRequest(_: number): void;
  changeWindowsItemTitleFilename(_: NSWindow, title: string, filename: boolean): void;
  completeStateRestoration(): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  deactivate(): void;
  disableRelaunchOnLogin(): void;
  discardEventsMatchingMaskBeforeEvent(matching: NSEvent.EventTypeMask, before?: NSEvent): void;
  enableRelaunchOnLogin(): void;
  endModalSession(_: any): void;
  enumerateWindowsWithOptionsUsingBlock(options: NSApplication.WindowListOptions, using: (p1: NSWindow, p2: boolean) => void): void;
  extendStateRestoration(): void;
  finishLaunching(): void;
  hide(_?: any): void;
  hideOtherApplications(_?: any): void;
  isAccessibilityFocused(): boolean;
  isAccessibilitySelectorAllowed(_: string): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  miniaturizeAll(_?: any): void;
  nextEventMatchingMaskUntilDateInModeDequeue(matching: NSEvent.EventTypeMask, until?: Date, inMode: string, dequeue: boolean): NSEvent;
  orderFrontCharacterPalette(_?: any): void;
  orderFrontColorPanel(_?: any): void;
  orderFrontStandardAboutPanel(_?: any): void;
  orderFrontStandardAboutPanelWithOptions(options: NSDictionary<string, any>): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  postEventAtStart(_: NSEvent, atStart: boolean): void;
  preventWindowOrdering(): void;
  registerForRemoteNotificationTypes(matching: NSApplication.RemoteNotificationType): void;
  registerForRemoteNotifications(): void;
  registerServicesMenuSendTypesReturnTypes(_: NSArray<string>, returnTypes: NSArray<string>): void;
  registerUserInterfaceItemSearchHandler(_: NSUserInterfaceItemSearching): void;
  removeWindowsItem(_: NSWindow): void;
  replyToApplicationShouldTerminate(toApplicationShouldTerminate: boolean): void;
  replyToOpenOrPrint(toOpenOrPrint: NSApplication.DelegateReply): void;
  reportException(_: NSException): void;
  requestUserAttention(_: NSApplication.RequestUserAttentionType): number;
  respondsToSelector(_: string): boolean;
  restoreWindowWithIdentifierStateCompletionHandler(withIdentifier: string, state: NSCoder, completionHandler?: (p1: NSWindow, p2: Error) => void): boolean;
  run(): void;
  runModalForWindow(for_: NSWindow): number;
  runModalSession(_: any): number;
  runPageLayout(_?: any): void;
  searchStringInUserInterfaceItemStringSearchRangeFoundRange(_: string, inUserInterfaceItemString: string, range: NSRange, found?: NSRange): boolean;
  self(): this;
  sendActionToFrom(_: string, to?: any, from?: any): boolean;
  sendEvent(_: NSEvent): void;
  setActivationPolicy(_: NSApplication.ActivationPolicy): boolean;
  setWindowsNeedUpdate(_: boolean): void;
  showHelp(_?: any): void;
  stop(_?: any): void;
  stopModal(): void;
  stopModalWithCode(withCode: number): void;
  targetForAction(forAction: string): any;
  targetForActionToFrom(forAction: string, to?: any, from?: any): any;
  terminate(_?: any): void;
  toggleTouchBarCustomizationPalette(_?: any): void;
  unhide(_?: any): void;
  unhideAllApplications(_?: any): void;
  unhideWithoutActivation(): void;
  unregisterForRemoteNotifications(): void;
  unregisterUserInterfaceItemSearchHandler(_: NSUserInterfaceItemSearching): void;
  updateWindows(): void;
  updateWindowsItem(_: NSWindow): void;
  validateMenuItem(_: NSMenuItem): boolean;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
  windowWithWindowNumber(withWindowNumber: number): NSWindow;
}

interface NSApplicationDelegate extends NSObject {
  applicationContinueUserActivityRestorationHandler?(_: NSApplication, continue_: NSUserActivity, restorationHandler: (p1: NSArray<NSUserActivityRestoring>) => void): boolean;
  applicationOpenURLs?(_: NSApplication, open: NSArray<NSURL>): void;
  applicationUserDidAcceptCloudKitShareWithMetadata?(_: NSApplication, userDidAcceptCloudKitShareWith: CKShare.Metadata): void;
  applicationDidUpdateUserActivity?(_: NSApplication, didUpdate: NSUserActivity): void;
  applicationDelegateHandlesKey?(_: NSApplication, delegateHandlesKey: string): boolean;
  applicationDidDecodeRestorableState?(_: NSApplication, didDecodeRestorableState: NSCoder): void;
  applicationDidFailToContinueUserActivityWithTypeError?(_: NSApplication, didFailToContinueUserActivityWithType: string, error: Error): void;
  applicationDidFailToRegisterForRemoteNotificationsWithError?(_: NSApplication, didFailToRegisterForRemoteNotificationsWithError: Error): void;
  applicationDidReceiveRemoteNotification?(_: NSApplication, didReceiveRemoteNotification: NSDictionary<string, any>): void;
  applicationDidRegisterForRemoteNotificationsWithDeviceToken?(_: NSApplication, didRegisterForRemoteNotificationsWithDeviceToken: Data): void;
  applicationOpenFile?(_: NSApplication, openFile: string): boolean;
  applicationOpenFiles?(_: NSApplication, openFiles: NSArray<string>): void;
  applicationOpenFileWithoutUI?(_: any, openFileWithoutUI: string): boolean;
  applicationOpenTempFile?(_: NSApplication, openTempFile: string): boolean;
  applicationPrintFile?(_: NSApplication, printFile: string): boolean;
  applicationPrintFilesWithSettingsShowPrintPanels?(_: NSApplication, printFiles: NSArray<string>, withSettings: NSDictionary<string, any>, showPrintPanels: boolean): NSApplication.PrintReply;
  applicationWillContinueUserActivityWithType?(_: NSApplication, willContinueUserActivityWithType: string): boolean;
  applicationWillEncodeRestorableState?(_: NSApplication, willEncodeRestorableState: NSCoder): void;
  applicationWillPresentError?(_: NSApplication, willPresentError: Error): Error;
  applicationDidBecomeActive?(_: Notification): void;
  applicationDidChangeOcclusionState?(_: Notification): void;
  applicationDidChangeScreenParameters?(_: Notification): void;
  applicationDidFinishLaunching?(_: Notification): void;
  applicationDidHide?(_: Notification): void;
  applicationDidResignActive?(_: Notification): void;
  applicationDidUnhide?(_: Notification): void;
  applicationDidUpdate?(_: Notification): void;
  applicationDockMenu?(_: NSApplication): NSMenu;
  applicationOpenUntitledFile?(_: NSApplication): boolean;
  applicationShouldHandleReopenHasVisibleWindows?(_: NSApplication, hasVisibleWindows: boolean): boolean;
  applicationShouldOpenUntitledFile?(_: NSApplication): boolean;
  applicationShouldTerminate?(_: NSApplication): NSApplication.TerminateReply;
  applicationShouldTerminateAfterLastWindowClosed?(_: NSApplication): boolean;
  applicationWillBecomeActive?(_: Notification): void;
  applicationWillFinishLaunching?(_: Notification): void;
  applicationWillHide?(_: Notification): void;
  applicationWillResignActive?(_: Notification): void;
  applicationWillTerminate?(_: Notification): void;
  applicationWillUnhide?(_: Notification): void;
  applicationWillUpdate?(_: Notification): void;
}

declare var NSApplicationDelegate: {
  prototype: NSApplicationDelegate;
};

declare var NSApplicationDidBecomeActiveNotification: string;

declare var NSApplicationDidChangeOcclusionStateNotification: string;

declare var NSApplicationDidChangeScreenParametersNotification: string;

declare var NSApplicationDidFinishLaunchingNotification: string;

declare var NSApplicationDidFinishRestoringWindowsNotification: string;

declare var NSApplicationDidHideNotification: string;

declare var NSApplicationDidResignActiveNotification: string;

declare var NSApplicationDidUnhideNotification: string;

declare var NSApplicationDidUpdateNotification: string;

declare var NSApplicationLaunchIsDefaultLaunchKey: string;

declare var NSApplicationLaunchUserNotificationKey: string;

declare function NSApplicationLoad(): boolean;
declare function NSApplicationMain(argc: number, argv: string): never;
declare var NSApplicationWillBecomeActiveNotification: string;

declare var NSApplicationWillFinishLaunchingNotification: string;

declare var NSApplicationWillHideNotification: string;

declare var NSApplicationWillResignActiveNotification: string;

declare var NSApplicationWillTerminateNotification: string;

declare var NSApplicationWillUnhideNotification: string;

declare var NSApplicationWillUpdateNotification: string;

declare var NSArgumentBinding: string;

declare class NSArrayController extends NSObjectController {
  alwaysUsesMultipleValuesMarker: boolean;
  setAlwaysUsesMultipleValuesMarker(_: boolean)
  readonly arrangedObjects: any;
  readonly automaticRearrangementKeyPaths: NSArray<string>;
  automaticallyRearrangesObjects: boolean;
  setAutomaticallyRearrangesObjects(_: boolean)
  avoidsEmptySelection: boolean;
  setAvoidsEmptySelection(_: boolean)
  readonly canInsert: boolean;
  readonly canSelectNext: boolean;
  readonly canSelectPrevious: boolean;
  clearsFilterPredicateOnInsertion: boolean;
  setClearsFilterPredicateOnInsertion(_: boolean)
  filterPredicate: NSPredicate;
  setFilterPredicate(_: NSPredicate)
  preservesSelection: boolean;
  setPreservesSelection(_: boolean)
  readonly selectionIndex: number;
  readonly selectionIndexes: IndexSet;
  selectsInsertedObjects: boolean;
  setSelectsInsertedObjects(_: boolean)
  sortDescriptors: NSArray<NSSortDescriptor>;
  setSortDescriptors(_: NSArray<NSSortDescriptor>)
  addObjects(contentsOf: NSArray<any>): void;
  addSelectedObjects(_: NSArray<any>): boolean;
  addSelectionIndexes(_: IndexSet): boolean;
  arrangeObjects(_: NSArray<any>): NSArray<any>;
  didChangeArrangementCriteria(): void;
  insert(_?: any): void;
  insertObjectAtArrangedObjectIndex(_: any, atArrangedObjectIndex: number): void;
  insertObjectsAtArrangedObjectIndexes(contentsOf: NSArray<any>, atArrangedObjectIndexes: IndexSet): void;
  rearrangeObjects(): void;
  removeObjectAtArrangedObjectIndex(atArrangedObjectIndex: number): void;
  removeObjects(contentsOf: NSArray<any>): void;
  removeObjectsAtArrangedObjectIndexes(atArrangedObjectIndexes: IndexSet): void;
  removeSelectedObjects(_: NSArray<any>): boolean;
  removeSelectionIndexes(_: IndexSet): boolean;
  selectNext(_?: any): void;
  selectPrevious(_?: any): void;
  setSelectedObjects(_: NSArray<any>): boolean;
  setSelectionIndex(_: number): boolean;
  setSelectionIndexes(_: IndexSet): boolean;
}

declare var NSAttachmentAttributeName: string;


declare const NSAttachmentCharacter: number;
declare var NSAttributedStringBinding: string;

declare var NSAuthorDocumentAttribute: string;

declare var NSAutoPagination: NSPrintInfo.PaginationMode;

declare function NSAvailableWindowDepths(): NSWindow.Depth;

declare const NSBackTabCharacter: number;
declare var NSBackgroundColorAttributeName: string;

declare var NSBackgroundColorDocumentAttribute: string;

declare var NSBackgroundStyleDark: NSView.BackgroundStyle;

declare var NSBackgroundStyleLight: NSView.BackgroundStyle;

declare var NSBackingPropertyOldColorSpaceKey: string;

declare var NSBackingPropertyOldScaleFactorKey: string;


declare const NSBackspaceCharacter: number;

declare const NSBacktabTextMovement: number;
declare var NSBadBitmapParametersException: string;

declare var NSBadComparisonException: string;

declare var NSBadRTFColorTableException: string;

declare var NSBadRTFDirectiveException: string;

declare var NSBadRTFFontTableException: string;

declare var NSBadRTFStyleSheetException: string;

declare var NSBaseURLDocumentOption: string;

declare var NSBaselineOffsetAttributeName: string;

declare function NSBeep(): void;

declare const NSBeginFunctionKey: number;
declare function NSBestDepth(colorSpace: string, bps: number, bpp: number, planar: boolean, exactMatch: boolean): NSWindow.Depth;
declare var NSBevelLineJoinStyle: NSBezierPath.LineJoinStyle;

declare class NSBezierPath extends NSObject implements NSCopying, NSSecureCoding {
  static clipRect(_: NSRect): void;
  static drawPackedGlyphsAtPoint(_: string, at: NSPoint): void;
  static fillRect(_: NSRect): void;
  static strokeLineFromPointToPoint(from: NSPoint, to: NSPoint): void;
  static strokeRect(_: NSRect): void;
  readonly bezierPathByFlatteningPath: NSBezierPath;
  readonly bezierPathByReversingPath: NSBezierPath;
  readonly bounds: NSRect;
  readonly controlPointBounds: NSRect;
  readonly currentPoint: NSPoint;
  readonly elementCount: number;
  readonly isEmpty: boolean;
  flatness: number;
  setFlatness(_: number)
  lineCapStyle: NSBezierPath.LineCapStyle;
  setLineCapStyle(_: NSBezierPath.LineCapStyle)
  lineJoinStyle: NSBezierPath.LineJoinStyle;
  setLineJoinStyle(_: NSBezierPath.LineJoinStyle)
  lineWidth: number;
  setLineWidth(_: number)
  miterLimit: number;
  setMiterLimit(_: number)
  windingRule: NSBezierPath.WindingRule;
  setWindingRule(_: NSBezierPath.WindingRule)
  static defaultFlatness: number;
  setDefaultFlatness(_: number)
  static defaultLineCapStyle: NSBezierPath.LineCapStyle;
  setDefaultLineCapStyle(_: NSBezierPath.LineCapStyle)
  static defaultLineJoinStyle: NSBezierPath.LineJoinStyle;
  setDefaultLineJoinStyle(_: NSBezierPath.LineJoinStyle)
  static defaultLineWidth: number;
  setDefaultLineWidth(_: number)
  static defaultMiterLimit: number;
  setDefaultMiterLimit(_: number)
  static defaultWindingRule: NSBezierPath.WindingRule;
  setDefaultWindingRule(_: NSBezierPath.WindingRule)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  addClip(): void;
  appendBezierPath(_: NSBezierPath): void;
  appendBezierPathWithArcFromPointToPointRadius(from: NSPoint, to: NSPoint, radius: number): void;
  appendBezierPathWithArcWithCenterRadiusStartAngleEndAngle(withCenter: NSPoint, radius: number, startAngle: number, endAngle: number): void;
  appendBezierPathWithArcWithCenterRadiusStartAngleEndAngleClockwise(withCenter: NSPoint, radius: number, startAngle: number, endAngle: number, clockwise: boolean): void;
  appendBezierPathWithCGGlyphInFont(withCGGlyph: number, in_: NSFont): void;
  appendBezierPathWithCGGlyphsCountInFont(withCGGlyphs: number, count: number, in_: NSFont): void;
  appendBezierPathWithOvalInRect(in_: NSRect): void;
  appendBezierPathWithPointsCount(_: NSPoint, count: number): void;
  appendBezierPathWithRect(_: NSRect): void;
  appendBezierPathWithRoundedRectXRadiusYRadius(_: NSRect, xRadius: number, yRadius: number): void;
  closePath(): void;
  containsPoint(_: NSPoint): boolean;
  curveToPointControlPoint1ControlPoint2(to: NSPoint, controlPoint1: NSPoint, controlPoint2: NSPoint): void;
  elementAtIndex(at: number): NSBezierPath.ElementType;
  elementAtIndexAssociatedPoints(at: number, associatedPoints?: NSPoint): NSBezierPath.ElementType;
  encodeWithCoder(with_: NSCoder): void;
  fill(): void;
  getLineDashCountPhase(_?: number, count?: number, phase?: number): void;
  static createWithCoder(coder: NSCoder): this;
  lineToPoint(to: NSPoint): void;
  moveToPoint(to: NSPoint): void;
  relativeCurveToPointControlPoint1ControlPoint2(to: NSPoint, controlPoint1: NSPoint, controlPoint2: NSPoint): void;
  relativeLineToPoint(to: NSPoint): void;
  relativeMoveToPoint(to: NSPoint): void;
  removeAllPoints(): void;
  setAssociatedPointsAtIndex(_?: NSPoint, at: number): void;
  setClip(): void;
  setLineDashCountPhase(_?: number, count: number, phase: number): void;
  stroke(): void;
  transformUsingAffineTransform(using: AffineTransform): void;
}

declare class NSBindingSelectionMarker extends NSObject implements NSCopying {
  static defaultPlaceholderForMarkerOnClassWithBinding(for_?: NSBindingSelectionMarker, on: typeof NSObject, withBinding: string): any;
  static setDefaultPlaceholderForMarkerOnClassWithBinding(_?: any, for_?: NSBindingSelectionMarker, on: typeof NSObject, withBinding: string): void;
  static multipleValuesSelectionMarker(): NSBindingSelectionMarker;
  static noSelectionMarker(): NSBindingSelectionMarker;
  static notApplicableSelectionMarker(): NSBindingSelectionMarker;
}

declare class NSBitmapImageRep extends NSImageRep implements NSSecureCoding {
  static TIFFRepresentationOfImageRepsInArray(in_: NSArray<NSImageRep>): Data;
  static TIFFRepresentationOfImageRepsInArrayUsingCompressionFactor(in_: NSArray<NSImageRep>, using: NSBitmapImageRep.TIFFCompression, factor: number): Data;
  static getTIFFCompressionTypesCount(_?: NSBitmapImageRep.TIFFCompression, count: number): void;
  static imageRepsWithData(with_: Data): NSArray<NSImageRep>;
  static localizedNameForTIFFCompressionType(forTIFFCompressionType: NSBitmapImageRep.TIFFCompression): string;
  static representationOfImageRepsInArrayUsingTypeProperties(in_: NSArray<NSImageRep>, using: NSBitmapImageRep.FileType, properties: NSDictionary<string, any>): Data;
  readonly CGImage: any;
  readonly TIFFRepresentation: Data;
  readonly bitmapData: string;
  readonly bitmapFormat: NSBitmapImageRep.Format;
  readonly bitsPerPixel: number;
  readonly bytesPerPlane: number;
  readonly bytesPerRow: number;
  readonly colorSpace: NSColorSpace;
  readonly numberOfPlanes: number;
  readonly isPlanar: boolean;
  readonly samplesPerPixel: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  TIFFRepresentationUsingCompressionFactor(using: NSBitmapImageRep.TIFFCompression, factor: number): Data;
  bitmapImageRepByConvertingToColorSpaceRenderingIntent(to: NSColorSpace, renderingIntent: NSColorRenderingIntent): NSBitmapImageRep;
  bitmapImageRepByRetaggingWithColorSpace(with_: NSColorSpace): NSBitmapImageRep;
  canBeCompressedUsing(using: NSBitmapImageRep.TIFFCompression): boolean;
  colorAtXY(x: number, y: number): NSColor;
  colorizeByMappingGrayToColorBlackMappingWhiteMapping(byMappingGray: number, to?: NSColor, blackMapping?: NSColor, whiteMapping?: NSColor): void;
  encodeWithCoder(with_: NSCoder): void;
  getBitmapDataPlanes(_?: string): void;
  getCompressionFactor(_?: NSBitmapImageRep.TIFFCompression, factor?: number): void;
  getPixelAtXY(_: number, atX: number, y: number): void;
  incrementalLoadFromDataComplete(from: Data, complete: boolean): number;
  static createForIncrementalLoad(): this;
  static createWithBitmapDataPlanesPixelsWidePixelsHighBitsPerSampleSamplesPerPixelHasAlphaIsPlanarColorSpaceNameBitmapFormatBytesPerRowBitsPerPixel(bitmapDataPlanes?: string, pixelsWide: number, pixelsHigh: number, bitsPerSample: number, samplesPerPixel: number, hasAlpha: boolean, isPlanar: boolean, colorSpaceName: string, bitmapFormat: NSBitmapImageRep.Format, bytesPerRow: number, bitsPerPixel: number): this;
  static createWithBitmapDataPlanesPixelsWidePixelsHighBitsPerSampleSamplesPerPixelHasAlphaIsPlanarColorSpaceNameBytesPerRowBitsPerPixel(bitmapDataPlanes?: string, pixelsWide: number, pixelsHigh: number, bitsPerSample: number, samplesPerPixel: number, hasAlpha: boolean, isPlanar: boolean, colorSpaceName: string, bytesPerRow: number, bitsPerPixel: number): this;
  static createWithCGImage(CGImage: any): this;
  static createWithCIImage(CIImage: CIImage): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithData(data: Data): this;
  representationUsingTypeProperties(using: NSBitmapImageRep.FileType, properties: NSDictionary<string, any>): Data;
  setColorAtXY(_: NSColor, atX: number, y: number): void;
  setCompressionFactor(_: NSBitmapImageRep.TIFFCompression, factor: number): void;
  setPixelAtXY(_: number, atX: number, y: number): void;
  setPropertyWithValue(_: string, withValue?: any): void;
  valueForProperty(forProperty: string): any;
}

declare function NSBitsPerPixelFromDepth(depth: NSWindow.Depth): number;
declare function NSBitsPerSampleFromDepth(depth: NSWindow.Depth): number;
declare var NSBlack: number;

declare var NSBottomMarginDocumentAttribute: string;

declare class NSBox extends NSView {
  borderColor: NSColor;
  setBorderColor(_: NSColor)
  readonly borderRect: NSRect;
  borderWidth: number;
  setBorderWidth(_: number)
  boxType: NSBox.BoxType;
  setBoxType(_: NSBox.BoxType)
  contentView: NSView;
  setContentView(_: NSView)
  contentViewMargins: NSSize;
  setContentViewMargins(_: NSSize)
  cornerRadius: number;
  setCornerRadius(_: number)
  fillColor: NSColor;
  setFillColor(_: NSColor)
  title: string;
  setTitle(_: string)
  readonly titleCell: any;
  titleFont: NSFont;
  setTitleFont(_: NSFont)
  titlePosition: NSBox.TitlePosition;
  setTitlePosition(_: NSBox.TitlePosition)
  readonly titleRect: NSRect;
  isTransparent: boolean;
  setTransparent(_: boolean)
  setFrameFromContentFrame(_: NSRect): void;
  sizeToFit(): void;
}

declare var NSBoxOldStyle: NSBox.BoxType;

declare var NSBoxSecondary: NSBox.BoxType;


declare const NSBreakFunctionKey: number;
declare class NSBrowser extends NSControl {
  static removeSavedColumnsWithAutosaveName(withAutosaveName: string): void;
  allowsBranchSelection: boolean;
  setAllowsBranchSelection(_: boolean)
  allowsEmptySelection: boolean;
  setAllowsEmptySelection(_: boolean)
  allowsMultipleSelection: boolean;
  setAllowsMultipleSelection(_: boolean)
  allowsTypeSelect: boolean;
  setAllowsTypeSelect(_: boolean)
  autohidesScroller: boolean;
  setAutohidesScroller(_: boolean)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  cellPrototype: any;
  setCellPrototype(_: any)
  readonly clickedColumn: number;
  readonly clickedRow: number;
  columnResizingType: NSBrowser.ColumnResizingType;
  setColumnResizingType(_: NSBrowser.ColumnResizingType)
  columnsAutosaveName: string;
  setColumnsAutosaveName(_: string)
  delegate: NSBrowserDelegate;
  setDelegate(_: NSBrowserDelegate)
  doubleAction: string;
  setDoubleAction(_: string)
  readonly firstVisibleColumn: number;
  hasHorizontalScroller: boolean;
  setHasHorizontalScroller(_: boolean)
  lastColumn: number;
  setLastColumn(_: number)
  readonly lastVisibleColumn: number;
  readonly isLoaded: boolean;
  maxVisibleColumns: number;
  setMaxVisibleColumns(_: number)
  minColumnWidth: number;
  setMinColumnWidth(_: number)
  readonly numberOfVisibleColumns: number;
  pathSeparator: string;
  setPathSeparator(_: string)
  prefersAllColumnUserResizing: boolean;
  setPrefersAllColumnUserResizing(_: boolean)
  reusesColumns: boolean;
  setReusesColumns(_: boolean)
  rowHeight: number;
  setRowHeight(_: number)
  readonly selectedCell: any;
  readonly selectedCells: NSArray<NSCell>;
  readonly selectedColumn: number;
  selectionIndexPath: IndexPath;
  setSelectionIndexPath(_: IndexPath)
  selectionIndexPaths: NSArray<IndexPath>;
  setSelectionIndexPaths(_: NSArray<IndexPath>)
  sendsActionOnArrowKeys: boolean;
  setSendsActionOnArrowKeys(_: boolean)
  separatesColumns: boolean;
  setSeparatesColumns(_: boolean)
  takesTitleFromPreviousColumn: boolean;
  setTakesTitleFromPreviousColumn(_: boolean)
  readonly titleHeight: number;
  isTitled: boolean;
  setTitled(_: boolean)
  static cellClass(): typeof NSObject;
  addColumn(): void;
  canDragRowsWithIndexesInColumnWithEvent(with_: IndexSet, inColumn: number, with_: NSEvent): boolean;
  columnContentWidthForColumnWidth(forColumnWidth: number): number;
  columnWidthForColumnContentWidth(forColumnContentWidth: number): number;
  defaultColumnWidth(): number;
  doClick(_?: any): void;
  doDoubleClick(_?: any): void;
  draggingImageForRowsWithIndexesInColumnWithEventOffset(with_: IndexSet, inColumn: number, with_: NSEvent, offset?: NSPoint): NSImage;
  drawTitleOfColumnInRect(ofColumn: number, in_: NSRect): void;
  editItemAtIndexPathWithEventSelect(at: IndexPath, with_?: NSEvent, select: boolean): void;
  frameOfColumn(ofColumn: number): NSRect;
  frameOfInsideOfColumn(ofInsideOfColumn: number): NSRect;
  frameOfRowInColumn(ofRow: number, inColumn: number): NSRect;
  getRowColumnForPoint(_?: number, column?: number, for_: NSPoint): boolean;
  indexPathForColumn(forColumn: number): IndexPath;
  isLeafItem(_?: any): boolean;
  itemAtIndexPath(at: IndexPath): any;
  itemAtRowInColumn(atRow: number, inColumn: number): any;
  loadColumnZero(): void;
  loadedCellAtRowColumn(atRow: number, column: number): any;
  noteHeightOfRowsWithIndexesChangedInColumn(_: IndexSet, inColumn: number): void;
  parentForItemsInColumn(inColumn: number): any;
  path(): string;
  pathToColumn(toColumn: number): string;
  reloadColumn(_: number): void;
  reloadDataForRowIndexesInColumn(forRowIndexes: IndexSet, inColumn: number): void;
  scrollColumnToVisible(_: number): void;
  scrollColumnsLeftBy(by: number): void;
  scrollColumnsRightBy(by: number): void;
  scrollRowToVisibleInColumn(_: number, inColumn: number): void;
  selectRowInColumn(_: number, inColumn: number): void;
  selectRowIndexesInColumn(_: IndexSet, inColumn: number): void;
  selectedCellInColumn(inColumn: number): any;
  selectedRowInColumn(inColumn: number): number;
  selectedRowIndexesInColumn(inColumn: number): IndexSet;
  sendAction(): boolean;
  setCellClass(_: typeof NSObject): void;
  setDefaultColumnWidth(_: number): void;
  setDraggingSourceOperationMaskForLocal(_: NSDragOperation, forLocal: boolean): void;
  setPath(_: string): boolean;
  setTitleOfColumn(_: string, ofColumn: number): void;
  setWidthOfColumn(_: number, ofColumn: number): void;
  tile(): void;
  titleFrameOfColumn(ofColumn: number): NSRect;
  titleOfColumn(ofColumn: number): string;
  validateVisibleColumns(): void;
  widthOfColumn(ofColumn: number): number;
}

declare class NSBrowserCell extends NSCell {
  alternateImage: NSImage;
  setAlternateImage(_: NSImage)
  isLeaf: boolean;
  setLeaf(_: boolean)
  isLoaded: boolean;
  setLoaded(_: boolean)
  static branchImage(): NSImage;
  static highlightedBranchImage(): NSImage;
  highlightColorInView(in_: NSView): NSColor;
  reset(): void;
  set(): void;
}

declare var NSBrowserColumnConfigurationDidChangeNotification: string;

interface NSBrowserDelegate extends NSObject {
  browserCreateRowsForColumnInMatrix?(_: NSBrowser, createRowsForColumn: number, in_: NSMatrix): void;
  browserNextTypeSelectMatchFromRowToRowInColumnForString?(_: NSBrowser, nextTypeSelectMatchFromRow: number, toRow: number, inColumn: number, for_?: string): number;
  browserShouldTypeSelectForEventWithCurrentSearchString?(_: NSBrowser, shouldTypeSelectFor: NSEvent, withCurrentSearch?: string): boolean;
  browserSelectCellWithStringInColumn?(_: NSBrowser, selectCellWith: string, inColumn: number): boolean;
  browserDraggingImageForRowsWithIndexesInColumnWithEventOffset?(_: NSBrowser, draggingImageForRowsWith: IndexSet, inColumn: number, with_: NSEvent, offset: NSPoint): NSImage;
  browserCanDragRowsWithIndexesInColumnWithEvent?(_: NSBrowser, canDragRowsWith: IndexSet, inColumn: number, with_: NSEvent): boolean;
  browserWriteRowsWithIndexesInColumnToPasteboard?(_: NSBrowser, writeRowsWith: IndexSet, inColumn: number, to: NSPasteboard): boolean;
  browserAcceptDropAtRowColumnDropOperation?(_: NSBrowser, acceptDrop: NSDraggingInfo, atRow: number, column: number, dropOperation: NSBrowser.DropOperation): boolean;
  browserChildOfItem?(_: NSBrowser, child: number, ofItem?: any): any;
  browserDidChangeLastColumnToColumn?(_: NSBrowser, didChangeLastColumn: number, toColumn: number): void;
  browserHeaderViewControllerForItem?(_: NSBrowser, headerViewControllerForItem?: any): NSViewController;
  browserHeightOfRowInColumn?(_: NSBrowser, heightOfRow: number, inColumn: number): number;
  browserIsColumnValid?(_: NSBrowser, isColumnValid: number): boolean;
  browserIsLeafItem?(_: NSBrowser, isLeafItem?: any): boolean;
  browserNumberOfChildrenOfItem?(_: NSBrowser, numberOfChildrenOfItem?: any): number;
  browserNumberOfRowsInColumn?(_: NSBrowser, numberOfRowsInColumn: number): number;
  browserObjectValueForItem?(_: NSBrowser, objectValueForItem?: any): any;
  browserPreviewViewControllerForLeafItem?(_: NSBrowser, previewViewControllerForLeafItem: any): NSViewController;
  browserSelectionIndexesForProposedSelectionInColumn?(_: NSBrowser, selectionIndexesForProposedSelection: IndexSet, inColumn: number): IndexSet;
  browserSelectRowInColumn?(_: NSBrowser, selectRow: number, inColumn: number): boolean;
  browserSetObjectValueForItem?(_: NSBrowser, setObjectValue?: any, forItem?: any): void;
  browserShouldEditItem?(_: NSBrowser, shouldEditItem?: any): boolean;
  browserShouldShowCellExpansionForRowColumn?(_: NSBrowser, shouldShowCellExpansionForRow: number, column: number): boolean;
  browserShouldSizeColumnForUserResizeToWidth?(_: NSBrowser, shouldSizeColumn: number, forUserResize: boolean, toWidth: number): number;
  browserSizeToFitWidthOfColumn?(_: NSBrowser, sizeToFitWidthOfColumn: number): number;
  browserTitleOfColumn?(_: NSBrowser, titleOfColumn: number): string;
  browserTypeSelectStringForRowInColumn?(_: NSBrowser, typeSelectStringForRow: number, inColumn: number): string;
  browserValidateDropProposedRowColumnDropOperation?(_: NSBrowser, validateDrop: NSDraggingInfo, proposedRow: number, column: number, dropOperation: NSBrowser.DropOperation): NSDragOperation;
  browserWillDisplayCellAtRowColumn?(_: NSBrowser, willDisplayCell: any, atRow: number, column: number): void;
  browserColumnConfigurationDidChange?(_: Notification): void;
  browserDidScroll?(_: NSBrowser): void;
  browserWillScroll?(_: NSBrowser): void;
  rootItemForBrowser?(for_: NSBrowser): any;
}

declare var NSBrowserDelegate: {
  prototype: NSBrowserDelegate;
};

declare var NSBrowserIllegalDelegateException: string;

declare var NSButtLineCapStyle: NSBezierPath.LineCapStyle;

declare class NSButton extends NSControl implements NSAccessibilityButton, NSUserInterfaceCompression, NSUserInterfaceValidations {
  static checkboxWithTitleTargetAction(checkboxWithTitle: string, target?: any, action?: string): NSButton;
  static radioButtonWithTitleTargetAction(radioButtonWithTitle: string, target?: any, action?: string): NSButton;
  allowsMixedState: boolean;
  setAllowsMixedState(_: boolean)
  alternateImage: NSImage;
  setAlternateImage(_: NSImage)
  alternateTitle: string;
  setAlternateTitle(_: string)
  attributedAlternateTitle: NSAttributedString;
  setAttributedAlternateTitle(_: NSAttributedString)
  attributedTitle: NSAttributedString;
  setAttributedTitle(_: NSAttributedString)
  bezelColor: NSColor;
  setBezelColor(_: NSColor)
  bezelStyle: NSButton.BezelStyle;
  setBezelStyle(_: NSButton.BezelStyle)
  isBordered: boolean;
  setBordered(_: boolean)
  contentTintColor: NSColor;
  setContentTintColor(_: NSColor)
  image: NSImage;
  setImage(_: NSImage)
  imageHugsTitle: boolean;
  setImageHugsTitle(_: boolean)
  imagePosition: NSControl.ImagePosition;
  setImagePosition(_: NSControl.ImagePosition)
  imageScaling: NSImageScaling;
  setImageScaling(_: NSImageScaling)
  keyEquivalent: string;
  setKeyEquivalent(_: string)
  keyEquivalentModifierMask: NSEvent.ModifierFlags;
  setKeyEquivalentModifierMask(_: NSEvent.ModifierFlags)
  maxAcceleratorLevel: number;
  setMaxAcceleratorLevel(_: number)
  showsBorderOnlyWhileMouseInside: boolean;
  setShowsBorderOnlyWhileMouseInside(_: boolean)
  sound: NSSound;
  setSound(_: NSSound)
  isSpringLoaded: boolean;
  setSpringLoaded(_: boolean)
  state: number;
  setState(_: number)
  title: string;
  setTitle(_: string)
  isTransparent: boolean;
  setTransparent(_: boolean)
  readonly activeCompressionOptions: NSUserInterfaceCompressionOptions; // inherited from NSUserInterfaceCompression
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityFrame(): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLabel(): string;
  accessibilityParent(): any;
  accessibilityPerformPress(): boolean;
  compressWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  getPeriodicDelayInterval(_: number, interval: number): void;
  highlight(_: boolean): void;
  isAccessibilityFocused(): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  minimumSizeWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): NSSize;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  setButtonType(_: NSButton.ButtonType): void;
  setNextState(): void;
  setPeriodicDelayInterval(_: number, interval: number): void;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}

declare class NSButtonCell extends NSActionCell {
  alternateImage: NSImage;
  setAlternateImage(_: NSImage)
  alternateTitle: string;
  setAlternateTitle(_: string)
  attributedAlternateTitle: NSAttributedString;
  setAttributedAlternateTitle(_: NSAttributedString)
  attributedTitle: NSAttributedString;
  setAttributedTitle(_: NSAttributedString)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  bezelStyle: NSButton.BezelStyle;
  setBezelStyle(_: NSButton.BezelStyle)
  highlightsBy: NSCell.StyleMask;
  setHighlightsBy(_: NSCell.StyleMask)
  imageDimsWhenDisabled: boolean;
  setImageDimsWhenDisabled(_: boolean)
  imagePosition: NSControl.ImagePosition;
  setImagePosition(_: NSControl.ImagePosition)
  imageScaling: NSImageScaling;
  setImageScaling(_: NSImageScaling)
  keyEquivalent: string;
  setKeyEquivalent(_: string)
  keyEquivalentModifierMask: NSEvent.ModifierFlags;
  setKeyEquivalentModifierMask(_: NSEvent.ModifierFlags)
  showsBorderOnlyWhileMouseInside: boolean;
  setShowsBorderOnlyWhileMouseInside(_: boolean)
  showsStateBy: NSCell.StyleMask;
  setShowsStateBy(_: NSCell.StyleMask)
  sound: NSSound;
  setSound(_: NSSound)
  isTransparent: boolean;
  setTransparent(_: boolean)
  drawBezelWithFrameInView(withFrame: NSRect, in_: NSView): void;
  drawImageWithFrameInView(_: NSImage, withFrame: NSRect, in_: NSView): void;
  drawTitleWithFrameInView(_: NSAttributedString, withFrame: NSRect, in_: NSView): NSRect;
  mouseEntered(with_: NSEvent): void;
  mouseExited(with_: NSEvent): void;
  setButtonType(_: NSButton.ButtonType): void;
  setPeriodicDelayInterval(_: number, interval: number): void;
}

declare class NSButtonTouchBarItem extends NSTouchBarItem {
  action: string;
  setAction(_: string)
  bezelColor: NSColor;
  setBezelColor(_: NSColor)
  customizationLabel: string;
  setCustomizationLabel(_: string)
  isEnabled: boolean;
  setEnabled(_: boolean)
  image: NSImage;
  setImage(_: NSImage)
  target: any;
  setTarget(_: any)
  title: string;
  setTitle(_: string)
}

declare class NSCIImageRep extends NSImageRep {
  readonly CIImage: CIImage;
  static createWithCIImage(CIImage: CIImage): this;
}

declare var NSCalibratedRGBColorSpace: string;

declare var NSCalibratedWhiteColorSpace: string;


declare const NSCancelTextMovement: number;
declare class NSCandidateListTouchBarItem<CandidateType> extends NSTouchBarItem {
  allowsCollapsing: boolean;
  setAllowsCollapsing(_: boolean)
  allowsTextInputContextCandidates: boolean;
  setAllowsTextInputContextCandidates(_: boolean)
  attributedStringForCandidate: (p1: CandidateType, p2: number) => NSAttributedString;
  setAttributedStringForCandidate(_: (p1: CandidateType, p2: number) => NSAttributedString)
  readonly isCandidateListVisible: boolean;
  readonly candidates: NSArray<CandidateType>;
  client: NSView;
  setClient(_: NSView)
  isCollapsed: boolean;
  setCollapsed(_: boolean)
  customizationLabel: string;
  setCustomizationLabel(_: string)
  delegate: NSCandidateListTouchBarItemDelegate;
  setDelegate(_: NSCandidateListTouchBarItemDelegate)
  setCandidatesForSelectedRangeInString(_: NSArray<CandidateType>, forSelectedRange: NSRange, in_?: string): void;
  updateWithInsertionPointVisibility(withInsertionPointVisibility: boolean): void;
}

interface NSCandidateListTouchBarItemDelegate extends NSObject {
  candidateListTouchBarItemWith_BeginSelectingCandidateAt?(_: NSCandidateListTouchBarItem<any>, beginSelectingCandidateAt: number): void;
  candidateListTouchBarItemWith_ChangeSelectionFromCandidateAtTo?(_: NSCandidateListTouchBarItem<any>, changeSelectionFromCandidateAt: number, to: number): void;
  candidateListTouchBarItemWith_EndSelectingCandidateAt?(_: NSCandidateListTouchBarItem<any>, endSelectingCandidateAt: number): void;
  candidateListTouchBarItemWithChangedCandidateListVisibility?(_: NSCandidateListTouchBarItem<any>, changedCandidateListVisibility: boolean): void;
}

declare var NSCandidateListTouchBarItemDelegate: {
  prototype: NSCandidateListTouchBarItemDelegate;
};


declare const NSCarriageReturnCharacter: number;
declare var NSCategoryDocumentAttribute: string;

declare class NSCell extends NSObject implements NSAccessibility, NSAccessibilityElementProtocol, NSCoding, NSCopying, NSUserInterfaceItemIdentification {
  readonly acceptsFirstResponder: boolean;
  action: string;
  setAction(_: string)
  alignment: NSTextAlignment;
  setAlignment(_: NSTextAlignment)
  allowsEditingTextAttributes: boolean;
  setAllowsEditingTextAttributes(_: boolean)
  allowsMixedState: boolean;
  setAllowsMixedState(_: boolean)
  allowsUndo: boolean;
  setAllowsUndo(_: boolean)
  attributedStringValue: NSAttributedString;
  setAttributedStringValue(_: NSAttributedString)
  backgroundStyle: NSView.BackgroundStyle;
  setBackgroundStyle(_: NSView.BackgroundStyle)
  baseWritingDirection: NSWritingDirection;
  setBaseWritingDirection(_: NSWritingDirection)
  isBezeled: boolean;
  setBezeled(_: boolean)
  isBordered: boolean;
  setBordered(_: boolean)
  readonly cellSize: NSSize;
  isContinuous: boolean;
  setContinuous(_: boolean)
  controlSize: NSControl.ControlSize;
  setControlSize(_: NSControl.ControlSize)
  controlView: NSView;
  setControlView(_: NSView)
  doubleValue: number;
  setDoubleValue(_: number)
  isEditable: boolean;
  setEditable(_: boolean)
  isEnabled: boolean;
  setEnabled(_: boolean)
  floatValue: number;
  setFloatValue(_: number)
  focusRingType: NSFocusRingType;
  setFocusRingType(_: NSFocusRingType)
  font: NSFont;
  setFont(_: NSFont)
  formatter: Formatter;
  setFormatter(_: Formatter)
  readonly hasValidObjectValue: boolean;
  isHighlighted: boolean;
  setHighlighted(_: boolean)
  image: NSImage;
  setImage(_: NSImage)
  importsGraphics: boolean;
  setImportsGraphics(_: boolean)
  intValue: number;
  setIntValue(_: number)
  integerValue: number;
  setIntegerValue(_: number)
  readonly interiorBackgroundStyle: NSView.BackgroundStyle;
  readonly keyEquivalent: string;
  lineBreakMode: NSLineBreakMode;
  setLineBreakMode(_: NSLineBreakMode)
  menu: NSMenu;
  setMenu(_: NSMenu)
  readonly mouseDownFlags: number;
  readonly nextState: number;
  objectValue: any;
  setObjectValue(_: any)
  readonly isOpaque: boolean;
  refusesFirstResponder: boolean;
  setRefusesFirstResponder(_: boolean)
  representedObject: any;
  setRepresentedObject(_: any)
  isScrollable: boolean;
  setScrollable(_: boolean)
  isSelectable: boolean;
  setSelectable(_: boolean)
  sendsActionOnEndEditing: boolean;
  setSendsActionOnEndEditing(_: boolean)
  showsFirstResponder: boolean;
  setShowsFirstResponder(_: boolean)
  state: number;
  setState(_: number)
  stringValue: string;
  setStringValue(_: string)
  tag: number;
  setTag(_: number)
  target: any;
  setTarget(_: any)
  title: string;
  setTitle(_: string)
  truncatesLastVisibleLine: boolean;
  setTruncatesLastVisibleLine(_: boolean)
  type: NSCell.CellType;
  setType(_: NSCell.CellType)
  userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection;
  setUserInterfaceLayoutDirection(_: NSUserInterfaceLayoutDirection)
  usesSingleLineMode: boolean;
  setUsesSingleLineMode(_: boolean)
  readonly wantsNotificationForMarkedText: boolean;
  wraps: boolean;
  setWraps(_: boolean)
  static defaultFocusRingType(): NSFocusRingType;
  static defaultMenu(): NSMenu;
  static prefersTrackingUntilMouseUp(): boolean;
  accessibilityActivationPoint: NSPoint;
  setAccessibilityActivationPoint(_: NSPoint) // inherited from NSAccessibility
  accessibilityAllowedValues: NSArray<number>;
  setAccessibilityAllowedValues(_: NSArray<number>) // inherited from NSAccessibility
  isAccessibilityAlternateUIVisible: boolean;
  setAccessibilityAlternateUIVisible(_: boolean) // inherited from NSAccessibility
  accessibilityApplicationFocusedUIElement: any;
  setAccessibilityApplicationFocusedUIElement(_: any) // inherited from NSAccessibility
  accessibilityCancelButton: any;
  setAccessibilityCancelButton(_: any) // inherited from NSAccessibility
  accessibilityChildren: NSArray<any>;
  setAccessibilityChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;
  setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>) // inherited from NSAccessibility
  accessibilityClearButton: any;
  setAccessibilityClearButton(_: any) // inherited from NSAccessibility
  accessibilityCloseButton: any;
  setAccessibilityCloseButton(_: any) // inherited from NSAccessibility
  accessibilityColumnCount: number;
  setAccessibilityColumnCount(_: number) // inherited from NSAccessibility
  accessibilityColumnHeaderUIElements: NSArray<any>;
  setAccessibilityColumnHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumnIndexRange: NSRange;
  setAccessibilityColumnIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityColumnTitles: NSArray<any>;
  setAccessibilityColumnTitles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumns: NSArray<any>;
  setAccessibilityColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityContents: NSArray<any>;
  setAccessibilityContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityCriticalValue: any;
  setAccessibilityCriticalValue(_: any) // inherited from NSAccessibility
  accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;
  setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>) // inherited from NSAccessibility
  accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;
  setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>) // inherited from NSAccessibility
  accessibilityDecrementButton: any;
  setAccessibilityDecrementButton(_: any) // inherited from NSAccessibility
  accessibilityDefaultButton: any;
  setAccessibilityDefaultButton(_: any) // inherited from NSAccessibility
  isAccessibilityDisclosed: boolean;
  setAccessibilityDisclosed(_: boolean) // inherited from NSAccessibility
  accessibilityDisclosedByRow: any;
  setAccessibilityDisclosedByRow(_: any) // inherited from NSAccessibility
  accessibilityDisclosedRows: any;
  setAccessibilityDisclosedRows(_: any) // inherited from NSAccessibility
  accessibilityDisclosureLevel: number;
  setAccessibilityDisclosureLevel(_: number) // inherited from NSAccessibility
  accessibilityDocument: string;
  setAccessibilityDocument(_: string) // inherited from NSAccessibility
  isAccessibilityEdited: boolean;
  setAccessibilityEdited(_: boolean) // inherited from NSAccessibility
  isAccessibilityElement: boolean;
  setAccessibilityElement(_: boolean) // inherited from NSAccessibility
  isAccessibilityEnabled: boolean;
  setAccessibilityEnabled(_: boolean) // inherited from NSAccessibility
  isAccessibilityExpanded: boolean;
  setAccessibilityExpanded(_: boolean) // inherited from NSAccessibility
  accessibilityExtrasMenuBar: any;
  setAccessibilityExtrasMenuBar(_: any) // inherited from NSAccessibility
  accessibilityFilename: string;
  setAccessibilityFilename(_: string) // inherited from NSAccessibility
  isAccessibilityFocused: boolean;
  setAccessibilityFocused(_: boolean) // inherited from NSAccessibility
  accessibilityFocusedWindow: any;
  setAccessibilityFocusedWindow(_: any) // inherited from NSAccessibility
  accessibilityFrame: NSRect;
  setAccessibilityFrame(_: NSRect) // inherited from NSAccessibility
  isAccessibilityFrontmost: boolean;
  setAccessibilityFrontmost(_: boolean) // inherited from NSAccessibility
  accessibilityFullScreenButton: any;
  setAccessibilityFullScreenButton(_: any) // inherited from NSAccessibility
  accessibilityGrowArea: any;
  setAccessibilityGrowArea(_: any) // inherited from NSAccessibility
  accessibilityHandles: NSArray<any>;
  setAccessibilityHandles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityHeader: any;
  setAccessibilityHeader(_: any) // inherited from NSAccessibility
  accessibilityHelp: string;
  setAccessibilityHelp(_: string) // inherited from NSAccessibility
  isAccessibilityHidden: boolean;
  setAccessibilityHidden(_: boolean) // inherited from NSAccessibility
  accessibilityHorizontalScrollBar: any;
  setAccessibilityHorizontalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityHorizontalUnitDescription: string;
  setAccessibilityHorizontalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityHorizontalUnits: NSAccessibility.Units;
  setAccessibilityHorizontalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityIdentifier: string;
  setAccessibilityIdentifier(_: string) // inherited from NSAccessibility
  accessibilityIncrementButton: any;
  setAccessibilityIncrementButton(_: any) // inherited from NSAccessibility
  accessibilityIndex: number;
  setAccessibilityIndex(_: number) // inherited from NSAccessibility
  accessibilityInsertionPointLineNumber: number;
  setAccessibilityInsertionPointLineNumber(_: number) // inherited from NSAccessibility
  accessibilityLabel: string;
  setAccessibilityLabel(_: string) // inherited from NSAccessibility
  accessibilityLabelUIElements: NSArray<any>;
  setAccessibilityLabelUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityLabelValue: number;
  setAccessibilityLabelValue(_: number) // inherited from NSAccessibility
  accessibilityLinkedUIElements: NSArray<any>;
  setAccessibilityLinkedUIElements(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityMain: boolean;
  setAccessibilityMain(_: boolean) // inherited from NSAccessibility
  accessibilityMainWindow: any;
  setAccessibilityMainWindow(_: any) // inherited from NSAccessibility
  accessibilityMarkerGroupUIElement: any;
  setAccessibilityMarkerGroupUIElement(_: any) // inherited from NSAccessibility
  accessibilityMarkerTypeDescription: string;
  setAccessibilityMarkerTypeDescription(_: string) // inherited from NSAccessibility
  accessibilityMarkerUIElements: NSArray<any>;
  setAccessibilityMarkerUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityMarkerValues: any;
  setAccessibilityMarkerValues(_: any) // inherited from NSAccessibility
  accessibilityMaxValue: any;
  setAccessibilityMaxValue(_: any) // inherited from NSAccessibility
  accessibilityMenuBar: any;
  setAccessibilityMenuBar(_: any) // inherited from NSAccessibility
  accessibilityMinValue: any;
  setAccessibilityMinValue(_: any) // inherited from NSAccessibility
  accessibilityMinimizeButton: any;
  setAccessibilityMinimizeButton(_: any) // inherited from NSAccessibility
  isAccessibilityMinimized: boolean;
  setAccessibilityMinimized(_: boolean) // inherited from NSAccessibility
  isAccessibilityModal: boolean;
  setAccessibilityModal(_: boolean) // inherited from NSAccessibility
  accessibilityNextContents: NSArray<any>;
  setAccessibilityNextContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityNumberOfCharacters: number;
  setAccessibilityNumberOfCharacters(_: number) // inherited from NSAccessibility
  isAccessibilityOrderedByRow: boolean;
  setAccessibilityOrderedByRow(_: boolean) // inherited from NSAccessibility
  accessibilityOrientation: NSAccessibility.Orientation;
  setAccessibilityOrientation(_: NSAccessibility.Orientation) // inherited from NSAccessibility
  accessibilityOverflowButton: any;
  setAccessibilityOverflowButton(_: any) // inherited from NSAccessibility
  accessibilityParent: any;
  setAccessibilityParent(_: any) // inherited from NSAccessibility
  accessibilityPlaceholderValue: string;
  setAccessibilityPlaceholderValue(_: string) // inherited from NSAccessibility
  accessibilityPreviousContents: NSArray<any>;
  setAccessibilityPreviousContents(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityProtectedContent: boolean;
  setAccessibilityProtectedContent(_: boolean) // inherited from NSAccessibility
  accessibilityProxy: any;
  setAccessibilityProxy(_: any) // inherited from NSAccessibility
  isAccessibilityRequired: boolean;
  setAccessibilityRequired(_: boolean) // inherited from NSAccessibility
  accessibilityRole: string;
  setAccessibilityRole(_: string) // inherited from NSAccessibility
  accessibilityRoleDescription: string;
  setAccessibilityRoleDescription(_: string) // inherited from NSAccessibility
  accessibilityRowCount: number;
  setAccessibilityRowCount(_: number) // inherited from NSAccessibility
  accessibilityRowHeaderUIElements: NSArray<any>;
  setAccessibilityRowHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRowIndexRange: NSRange;
  setAccessibilityRowIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityRows: NSArray<any>;
  setAccessibilityRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRulerMarkerType: NSAccessibility.RulerMarkerType;
  setAccessibilityRulerMarkerType(_: NSAccessibility.RulerMarkerType) // inherited from NSAccessibility
  accessibilitySearchButton: any;
  setAccessibilitySearchButton(_: any) // inherited from NSAccessibility
  accessibilitySearchMenu: any;
  setAccessibilitySearchMenu(_: any) // inherited from NSAccessibility
  isAccessibilitySelected: boolean;
  setAccessibilitySelected(_: boolean) // inherited from NSAccessibility
  accessibilitySelectedCells: NSArray<any>;
  setAccessibilitySelectedCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedChildren: NSArray<any>;
  setAccessibilitySelectedChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedColumns: NSArray<any>;
  setAccessibilitySelectedColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedRows: NSArray<any>;
  setAccessibilitySelectedRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedText: string;
  setAccessibilitySelectedText(_: string) // inherited from NSAccessibility
  accessibilitySelectedTextRange: NSRange;
  setAccessibilitySelectedTextRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySelectedTextRanges: NSArray<NSValue>;
  setAccessibilitySelectedTextRanges(_: NSArray<NSValue>) // inherited from NSAccessibility
  accessibilityServesAsTitleForUIElements: NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedCharacterRange: NSRange;
  setAccessibilitySharedCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySharedFocusElements: NSArray<any>;
  setAccessibilitySharedFocusElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedTextUIElements: NSArray<any>;
  setAccessibilitySharedTextUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityShownMenu: any;
  setAccessibilityShownMenu(_: any) // inherited from NSAccessibility
  accessibilitySortDirection: NSAccessibility.SortDirection;
  setAccessibilitySortDirection(_: NSAccessibility.SortDirection) // inherited from NSAccessibility
  accessibilitySplitters: NSArray<any>;
  setAccessibilitySplitters(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySubrole: string;
  setAccessibilitySubrole(_: string) // inherited from NSAccessibility
  accessibilityTabs: NSArray<any>;
  setAccessibilityTabs(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityTitle: string;
  setAccessibilityTitle(_: string) // inherited from NSAccessibility
  accessibilityTitleUIElement: any;
  setAccessibilityTitleUIElement(_: any) // inherited from NSAccessibility
  accessibilityToolbarButton: any;
  setAccessibilityToolbarButton(_: any) // inherited from NSAccessibility
  accessibilityTopLevelUIElement: any;
  setAccessibilityTopLevelUIElement(_: any) // inherited from NSAccessibility
  accessibilityURL: NSURL;
  setAccessibilityURL(_: NSURL) // inherited from NSAccessibility
  accessibilityUnitDescription: string;
  setAccessibilityUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityUnits: NSAccessibility.Units;
  setAccessibilityUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityValue: any;
  setAccessibilityValue(_: any) // inherited from NSAccessibility
  accessibilityValueDescription: string;
  setAccessibilityValueDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalScrollBar: any;
  setAccessibilityVerticalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityVerticalUnitDescription: string;
  setAccessibilityVerticalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalUnits: NSAccessibility.Units;
  setAccessibilityVerticalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityVisibleCells: NSArray<any>;
  setAccessibilityVisibleCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleCharacterRange: NSRange;
  setAccessibilityVisibleCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilityVisibleChildren: NSArray<any>;
  setAccessibilityVisibleChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleColumns: NSArray<any>;
  setAccessibilityVisibleColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleRows: NSArray<any>;
  setAccessibilityVisibleRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityWarningValue: any;
  setAccessibilityWarningValue(_: any) // inherited from NSAccessibility
  accessibilityWindow: any;
  setAccessibilityWindow(_: any) // inherited from NSAccessibility
  accessibilityWindows: NSArray<any>;
  setAccessibilityWindows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityZoomButton: any;
  setAccessibilityZoomButton(_: any) // inherited from NSAccessibility
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  identifier: string;
  setIdentifier(_: string) // inherited from NSUserInterfaceItemIdentification
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;
  accessibilityCellForColumnRow(_: number, row: number): any;
  accessibilityFrame(): NSRect;
  accessibilityFrameForRange(_: NSRange): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLayoutPointForScreenPoint(_: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(_: NSSize): NSSize;
  accessibilityLineForIndex(_: number): number;
  accessibilityParent(): any;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  accessibilityRTFForRange(_: NSRange): Data;
  accessibilityRangeForIndex(_: number): NSRange;
  accessibilityRangeForLine(_: number): NSRange;
  accessibilityRangeForPosition(_: NSPoint): NSRange;
  accessibilityScreenPointForLayoutPoint(_: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(_: NSSize): NSSize;
  accessibilityStringForRange(_: NSRange): string;
  accessibilityStyleRangeForIndex(_: number): NSRange;
  calcDrawInfo(_: NSRect): void;
  cellAttribute(_: NSCell.Attribute): number;
  cellSizeForBounds(forBounds: NSRect): NSSize;
  compare(_: any): ComparisonResult;
  conformsToProtocol(to: any /* Protocol */): boolean;
  continueTrackingAtInView(last: NSPoint, current: NSPoint, in_: NSView): boolean;
  draggingImageComponentsWithFrameInView(withFrame: NSRect, in_: NSView): NSArray<NSDraggingImageComponent>;
  drawFocusRingMaskWithFrameInView(withFrame: NSRect, in_: NSView): void;
  drawInteriorWithFrameInView(withFrame: NSRect, in_: NSView): void;
  drawWithExpansionFrameInView(withExpansionFrame: NSRect, in_: NSView): void;
  drawWithFrameInView(withFrame: NSRect, in_: NSView): void;
  drawingRectForBounds(forBounds: NSRect): NSRect;
  editWithFrameInViewEditorDelegateEvent(withFrame: NSRect, in_: NSView, editor: NSText, delegate?: any, event?: NSEvent): void;
  encodeWithCoder(with_: NSCoder): void;
  endEditing(_: NSText): void;
  expansionFrameWithFrameInView(withFrame: NSRect, in_: NSView): NSRect;
  fieldEditorForView(for_: NSView): NSTextView;
  focusRingMaskBoundsForFrameInView(forFrame: NSRect, in_: NSView): NSRect;
  getPeriodicDelayInterval(_: number, interval: number): void;
  highlightWithFrameInView(_: boolean, withFrame: NSRect, in_: NSView): void;
  highlightColorWithFrameInView(withFrame: NSRect, in_: NSView): NSColor;
  hitTestForEventInRectOfView(for_: NSEvent, in_: NSRect, of: NSView): NSCell.HitResult;
  imageRectForBounds(forBounds: NSRect): NSRect;
  static createWithImageCell(imageCell?: NSImage): this;
  static createWithTextCell(textCell: string): this;
  static createWithCoder(coder: NSCoder): this;
  isAccessibilityFocused(): boolean;
  isAccessibilitySelectorAllowed(_: string): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  menuForEventInRectOfView(for_: NSEvent, in_: NSRect, of: NSView): NSMenu;
  performClick(_?: any): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  resetCursorRectInView(_: NSRect, in_: NSView): void;
  respondsToSelector(_: string): boolean;
  selectWithFrameInViewEditorDelegateStartLength(withFrame: NSRect, in_: NSView, editor: NSText, delegate?: any, start: number, length: number): void;
  self(): this;
  sendActionOn(on: NSEvent.EventTypeMask): number;
  setCellAttributeTo(_: NSCell.Attribute, to: number): void;
  setNextState(): void;
  setUpFieldEditorAttributes(_: NSText): NSText;
  startTrackingAtInView(at: NSPoint, in_: NSView): boolean;
  stopTrackingAtInViewMouseIsUp(last: NSPoint, current: NSPoint, in_: NSView, mouseIsUp: boolean): void;
  takeDoubleValueFrom(_?: any): void;
  takeFloatValueFrom(_?: any): void;
  takeIntValueFrom(_?: any): void;
  takeIntegerValueFrom(_?: any): void;
  takeObjectValueFrom(_?: any): void;
  takeStringValueFrom(_?: any): void;
  titleRectForBounds(forBounds: NSRect): NSRect;
  trackMouseInRectOfViewUntilMouseUp(with_: NSEvent, in_: NSRect, of: NSView, untilMouseUp: boolean): boolean;
}

interface NSChangeSpelling {
  changeSpelling(_?: any): void;
}

declare var NSChangeSpelling: {
  prototype: NSChangeSpelling;
};

declare var NSCharacterEncodingDocumentAttribute: string;

declare var NSCharacterEncodingDocumentOption: string;


declare const NSClearDisplayFunctionKey: number;

declare const NSClearLineFunctionKey: number;
declare class NSClickGestureRecognizer extends NSGestureRecognizer implements NSCoding {
  buttonMask: number;
  setButtonMask(_: number)
  numberOfClicksRequired: number;
  setNumberOfClicksRequired(_: number)
  numberOfTouchesRequired: number;
  setNumberOfTouchesRequired(_: number)
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var NSClipPagination: NSPrintInfo.PaginationMode;

declare class NSClipView extends NSView {
  automaticallyAdjustsContentInsets: boolean;
  setAutomaticallyAdjustsContentInsets(_: boolean)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  contentInsets: NSEdgeInsets;
  setContentInsets(_: NSEdgeInsets)
  documentCursor: NSCursor;
  setDocumentCursor(_: NSCursor)
  readonly documentRect: NSRect;
  documentView: NSView;
  setDocumentView(_: NSView)
  readonly documentVisibleRect: NSRect;
  drawsBackground: boolean;
  setDrawsBackground(_: boolean)
  constrainBoundsRect(_: NSRect): NSRect;
  scrollToPoint(to: NSPoint): void;
  viewBoundsChanged(_: Notification): void;
  viewFrameChanged(_: Notification): void;
}

declare var NSClockAndCalendarDatePickerStyle: NSDatePicker.Style;

declare var NSClosePathBezierPathElement: NSBezierPath.ElementType;

interface NSCloudSharingServiceDelegate extends NSSharingServiceDelegate {
  optionsForSharingServiceShareProvider?(for_: NSSharingService, share: NSItemProvider): NSSharingService.CloudKitOptions;
  sharingServiceDidSaveShare?(_: NSSharingService, didSave: CKShare): void;
  sharingServiceDidCompleteForItemsError?(_: NSSharingService, didCompleteForItems: NSArray<any>, error?: Error): void;
  sharingServiceDidStopSharing?(_: NSSharingService, didStopSharing: CKShare): void;
}

declare var NSCloudSharingServiceDelegate: {
  prototype: NSCloudSharingServiceDelegate;
};

interface NSCloudSharingValidation extends NSObject {
  cloudShareForUserInterfaceItem(for_: NSValidatedUserInterfaceItem): CKShare;
}

declare var NSCloudSharingValidation: {
  prototype: NSCloudSharingValidation;
};

declare var NSCocoaVersionDocumentAttribute: string;

declare var NSCollectionElementKindInterItemGapIndicator: string;

declare var NSCollectionElementKindSectionFooter: string;

declare var NSCollectionElementKindSectionHeader: string;

declare class NSCollectionLayoutAnchor extends NSObject implements NSCopying {
  static layoutAnchorWithEdges(edges: NSDirectionalRectEdge): NSCollectionLayoutAnchor;
  static layoutAnchorWithEdgesAbsoluteOffset(edges: NSDirectionalRectEdge, absoluteOffset: NSPoint): NSCollectionLayoutAnchor;
  static layoutAnchorWithEdgesFractionalOffset(edges: NSDirectionalRectEdge, fractionalOffset: NSPoint): NSCollectionLayoutAnchor;
  readonly edges: NSDirectionalRectEdge;
  readonly isAbsoluteOffset: boolean;
  readonly isFractionalOffset: boolean;
  readonly offset: NSPoint;
}

declare class NSCollectionLayoutBoundarySupplementaryItem extends NSCollectionLayoutSupplementaryItem implements NSCopying {
  static boundarySupplementaryItemWithLayoutSizeElementKindAlignment(layoutSize: NSCollectionLayoutSize, elementKind: string, alignment: NSRectAlignment): NSCollectionLayoutBoundarySupplementaryItem;
  static boundarySupplementaryItemWithLayoutSizeElementKindAlignmentAbsoluteOffset(layoutSize: NSCollectionLayoutSize, elementKind: string, alignment: NSRectAlignment, absoluteOffset: NSPoint): NSCollectionLayoutBoundarySupplementaryItem;
  static itemWithLayoutSize(layoutSize: NSCollectionLayoutSize): NSCollectionLayoutBoundarySupplementaryItem; // inherited from NSCollectionLayoutItem
  static itemWithLayoutSizeSupplementaryItems(layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>): NSCollectionLayoutBoundarySupplementaryItem; // inherited from NSCollectionLayoutItem
  static supplementaryItemWithLayoutSizeElementKindContainerAnchor(layoutSize: NSCollectionLayoutSize, elementKind: string, containerAnchor: NSCollectionLayoutAnchor): NSCollectionLayoutBoundarySupplementaryItem; // inherited from NSCollectionLayoutSupplementaryItem
  static supplementaryItemWithLayoutSizeElementKindContainerAnchorItemAnchor(layoutSize: NSCollectionLayoutSize, elementKind: string, containerAnchor: NSCollectionLayoutAnchor, itemAnchor: NSCollectionLayoutAnchor): NSCollectionLayoutBoundarySupplementaryItem; // inherited from NSCollectionLayoutSupplementaryItem
  readonly alignment: NSRectAlignment;
  extendsBoundary: boolean;
  setExtendsBoundary(_: boolean)
  readonly offset: NSPoint;
  pinToVisibleBounds: boolean;
  setPinToVisibleBounds(_: boolean)
}

interface NSCollectionLayoutContainer extends NSObject {
  contentInsets: NSDirectionalEdgeInsets;
  contentSize: NSSize;
  effectiveContentInsets: NSDirectionalEdgeInsets;
  effectiveContentSize: NSSize;
}

declare var NSCollectionLayoutContainer: {
  prototype: NSCollectionLayoutContainer;
};

declare class NSCollectionLayoutDecorationItem extends NSCollectionLayoutItem implements NSCopying {
  static backgroundDecorationItemWithElementKind(elementKind: string): NSCollectionLayoutDecorationItem;
  static itemWithLayoutSize(layoutSize: NSCollectionLayoutSize): NSCollectionLayoutDecorationItem; // inherited from NSCollectionLayoutItem
  static itemWithLayoutSizeSupplementaryItems(layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>): NSCollectionLayoutDecorationItem; // inherited from NSCollectionLayoutItem
  readonly elementKind: string;
  zIndex: number;
  setZIndex(_: number)
}

declare class NSCollectionLayoutDimension extends NSObject implements NSCopying {
  static absoluteDimension(_: number): NSCollectionLayoutDimension;
  static estimatedDimension(_: number): NSCollectionLayoutDimension;
  static fractionalHeightDimension(_: number): NSCollectionLayoutDimension;
  static fractionalWidthDimension(_: number): NSCollectionLayoutDimension;
  readonly dimension: number;
  readonly isAbsolute: boolean;
  readonly isEstimated: boolean;
  readonly isFractionalHeight: boolean;
  readonly isFractionalWidth: boolean;
}

declare class NSCollectionLayoutEdgeSpacing extends NSObject implements NSCopying {
  static spacingForLeadingTopTrailingBottom(leading?: NSCollectionLayoutSpacing, top?: NSCollectionLayoutSpacing, trailing?: NSCollectionLayoutSpacing, bottom?: NSCollectionLayoutSpacing): NSCollectionLayoutEdgeSpacing;
  readonly bottom: NSCollectionLayoutSpacing;
  readonly leading: NSCollectionLayoutSpacing;
  readonly top: NSCollectionLayoutSpacing;
  readonly trailing: NSCollectionLayoutSpacing;
}

interface NSCollectionLayoutEnvironment extends NSObject {
  container: NSCollectionLayoutContainer;
}

declare var NSCollectionLayoutEnvironment: {
  prototype: NSCollectionLayoutEnvironment;
};

declare class NSCollectionLayoutGroup extends NSCollectionLayoutItem implements NSCopying {
  static customGroupWithLayoutSizeItemProvider(layoutSize: NSCollectionLayoutSize, itemProvider: (p1: NSCollectionLayoutEnvironment) => NSArray<NSCollectionLayoutGroupCustomItem>): NSCollectionLayoutGroup;
  static horizontalGroupWithLayoutSizeSubitemCount(layoutSize: NSCollectionLayoutSize, subitem: NSCollectionLayoutItem, count: number): NSCollectionLayoutGroup;
  static horizontalGroupWithLayoutSizeSubitems(layoutSize: NSCollectionLayoutSize, subitems: NSArray<NSCollectionLayoutItem>): NSCollectionLayoutGroup;
  static itemWithLayoutSize(layoutSize: NSCollectionLayoutSize): NSCollectionLayoutGroup; // inherited from NSCollectionLayoutItem
  static itemWithLayoutSizeSupplementaryItems(layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>): NSCollectionLayoutGroup; // inherited from NSCollectionLayoutItem
  static verticalGroupWithLayoutSizeSubitemCount(layoutSize: NSCollectionLayoutSize, subitem: NSCollectionLayoutItem, count: number): NSCollectionLayoutGroup;
  static verticalGroupWithLayoutSizeSubitems(layoutSize: NSCollectionLayoutSize, subitems: NSArray<NSCollectionLayoutItem>): NSCollectionLayoutGroup;
  interItemSpacing: NSCollectionLayoutSpacing;
  setInterItemSpacing(_: NSCollectionLayoutSpacing)
  readonly subitems: NSArray<NSCollectionLayoutItem>;
  supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>;
  setSupplementaryItems(_: NSArray<NSCollectionLayoutSupplementaryItem>)
  visualDescription(): string;
}

declare class NSCollectionLayoutGroupCustomItem extends NSObject implements NSCopying {
  static customItemWithFrame(frame: NSRect): NSCollectionLayoutGroupCustomItem;
  static customItemWithFrameZIndex(frame: NSRect, zIndex: number): NSCollectionLayoutGroupCustomItem;
  readonly frame: NSRect;
  readonly zIndex: number;
}

declare class NSCollectionLayoutItem extends NSObject implements NSCopying {
  static itemWithLayoutSize(layoutSize: NSCollectionLayoutSize): NSCollectionLayoutItem;
  static itemWithLayoutSizeSupplementaryItems(layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>): NSCollectionLayoutItem;
  contentInsets: NSDirectionalEdgeInsets;
  setContentInsets(_: NSDirectionalEdgeInsets)
  edgeSpacing: NSCollectionLayoutEdgeSpacing;
  setEdgeSpacing(_: NSCollectionLayoutEdgeSpacing)
  readonly layoutSize: NSCollectionLayoutSize;
  readonly supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>;
}

declare class NSCollectionLayoutSection extends NSObject implements NSCopying {
  static sectionWithGroup(group: NSCollectionLayoutGroup): NSCollectionLayoutSection;
  boundarySupplementaryItems: NSArray<NSCollectionLayoutBoundarySupplementaryItem>;
  setBoundarySupplementaryItems(_: NSArray<NSCollectionLayoutBoundarySupplementaryItem>)
  contentInsets: NSDirectionalEdgeInsets;
  setContentInsets(_: NSDirectionalEdgeInsets)
  decorationItems: NSArray<NSCollectionLayoutDecorationItem>;
  setDecorationItems(_: NSArray<NSCollectionLayoutDecorationItem>)
  interGroupSpacing: number;
  setInterGroupSpacing(_: number)
  orthogonalScrollingBehavior: NSCollectionLayoutSectionOrthogonalScrollingBehavior;
  setOrthogonalScrollingBehavior(_: NSCollectionLayoutSectionOrthogonalScrollingBehavior)
  supplementariesFollowContentInsets: boolean;
  setSupplementariesFollowContentInsets(_: boolean)
  visibleItemsInvalidationHandler: (p1: NSArray<NSCollectionLayoutVisibleItem>, p2: NSPoint, p3: NSCollectionLayoutEnvironment) => void;
  setVisibleItemsInvalidationHandler(_: (p1: NSArray<NSCollectionLayoutVisibleItem>, p2: NSPoint, p3: NSCollectionLayoutEnvironment) => void)
}

declare class NSCollectionLayoutSize extends NSObject implements NSCopying {
  static sizeWithWidthDimensionHeightDimension(widthDimension: NSCollectionLayoutDimension, heightDimension: NSCollectionLayoutDimension): NSCollectionLayoutSize;
  readonly heightDimension: NSCollectionLayoutDimension;
  readonly widthDimension: NSCollectionLayoutDimension;
}

declare class NSCollectionLayoutSpacing extends NSObject implements NSCopying {
  static fixedSpacing(_: number): NSCollectionLayoutSpacing;
  static flexibleSpacing(_: number): NSCollectionLayoutSpacing;
  readonly isFixedSpacing: boolean;
  readonly isFlexibleSpacing: boolean;
  readonly spacing: number;
}

declare class NSCollectionLayoutSupplementaryItem extends NSCollectionLayoutItem implements NSCopying {
  static itemWithLayoutSize(layoutSize: NSCollectionLayoutSize): NSCollectionLayoutSupplementaryItem; // inherited from NSCollectionLayoutItem
  static itemWithLayoutSizeSupplementaryItems(layoutSize: NSCollectionLayoutSize, supplementaryItems: NSArray<NSCollectionLayoutSupplementaryItem>): NSCollectionLayoutSupplementaryItem; // inherited from NSCollectionLayoutItem
  static supplementaryItemWithLayoutSizeElementKindContainerAnchor(layoutSize: NSCollectionLayoutSize, elementKind: string, containerAnchor: NSCollectionLayoutAnchor): NSCollectionLayoutSupplementaryItem;
  static supplementaryItemWithLayoutSizeElementKindContainerAnchorItemAnchor(layoutSize: NSCollectionLayoutSize, elementKind: string, containerAnchor: NSCollectionLayoutAnchor, itemAnchor: NSCollectionLayoutAnchor): NSCollectionLayoutSupplementaryItem;
  readonly containerAnchor: NSCollectionLayoutAnchor;
  readonly elementKind: string;
  readonly itemAnchor: NSCollectionLayoutAnchor;
  zIndex: number;
  setZIndex(_: number)
}

interface NSCollectionLayoutVisibleItem extends NSObject {
  alpha: number;
  setAlpha(_: number)
  bounds: NSRect;
  center: NSPoint;
  setCenter(_: NSPoint)
  frame: NSRect;
  isHidden: boolean;
  setHidden(_: boolean)
  indexPath: IndexPath;
  name: string;
  representedElementCategory: NSCollectionElementCategory;
  representedElementKind: string;
  zIndex: number;
  setZIndex(_: number)
}

declare var NSCollectionLayoutVisibleItem: {
  prototype: NSCollectionLayoutVisibleItem;
};

declare class NSCollectionView extends NSView implements NSDraggingDestination, NSDraggingSource {
  allowsEmptySelection: boolean;
  setAllowsEmptySelection(_: boolean)
  allowsMultipleSelection: boolean;
  setAllowsMultipleSelection(_: boolean)
  backgroundColors: NSArray<NSColor>;
  setBackgroundColors(_: NSArray<NSColor>)
  backgroundView: NSView;
  setBackgroundView(_: NSView)
  backgroundViewScrollsWithContent: boolean;
  setBackgroundViewScrollsWithContent(_: boolean)
  collectionViewLayout: NSCollectionViewLayout;
  setCollectionViewLayout(_: NSCollectionViewLayout)
  content: NSArray<any>;
  setContent(_: NSArray<any>)
  dataSource: NSCollectionViewDataSource;
  setDataSource(_: NSCollectionViewDataSource)
  delegate: NSCollectionViewDelegate;
  setDelegate(_: NSCollectionViewDelegate)
  readonly isFirstResponder: boolean;
  readonly numberOfSections: number;
  prefetchDataSource: NSCollectionViewPrefetching;
  setPrefetchDataSource(_: NSCollectionViewPrefetching)
  isSelectable: boolean;
  setSelectable(_: boolean)
  selectionIndexPaths: Set<IndexPath>;
  setSelectionIndexPaths(_: Set<IndexPath>)
  selectionIndexes: IndexSet;
  setSelectionIndexes(_: IndexSet)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  concludeDragOperation(_?: NSDraggingInfo): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  deleteItemsWithAt(at: Set<IndexPath>): void;
  deleteSections(_: IndexSet): void;
  deselectAll(_?: any): void;
  deselectItemsWithAt(at: Set<IndexPath>): void;
  draggingEnded(_: NSDraggingInfo): void;
  draggingEntered(_: NSDraggingInfo): NSDragOperation;
  draggingExited(_?: NSDraggingInfo): void;
  draggingImageForItemsWithAtWithOffset(at: Set<IndexPath>, with_: NSEvent, offset: NSPoint): NSImage;
  draggingImageForItemsAtIndexesWithEventOffset(at: IndexSet, with_: NSEvent, offset: NSPoint): NSImage;
  draggingSessionEndedAtPointOperation(_: NSDraggingSession, endedAt: NSPoint, operation: NSDragOperation): void;
  draggingSessionMovedToPoint(_: NSDraggingSession, movedTo: NSPoint): void;
  draggingSessionSourceOperationMaskForDraggingContext(_: NSDraggingSession, sourceOperationMaskFor: NSDraggingContext): NSDragOperation;
  draggingSessionWillBeginAtPoint(_: NSDraggingSession, willBeginAt: NSPoint): void;
  draggingUpdated(_: NSDraggingInfo): NSDragOperation;
  frameForItemAtIndex(at: number): NSRect;
  frameForItemAtIndexWithNumberOfItems(at: number, withNumberOfItems: number): NSRect;
  ignoreModifierKeysForDraggingSession(for_: NSDraggingSession): boolean;
  indexPathForItem(for_: NSCollectionViewItem): IndexPath;
  indexPathForItemAtPoint(at: NSPoint): IndexPath;
  indexPathsForVisibleItems(): Set<IndexPath>;
  indexPathsForVisibleSupplementaryElementsOfKind(ofKind: string): Set<IndexPath>;
  insertItemsWithAt(at: Set<IndexPath>): void;
  insertSections(_: IndexSet): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  itemAtIndex(at: number): NSCollectionViewItem;
  itemAtIndexPath(at: IndexPath): NSCollectionViewItem;
  layoutAttributesForItemAtIndexPath(at: IndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForSupplementaryElementOfKindAtIndexPath(ofKind: string, at: IndexPath): NSCollectionViewLayoutAttributes;
  makeItemWithIdentifierForIndexPath(withIdentifier: string, for_: IndexPath): NSCollectionViewItem;
  makeSupplementaryViewOfKindWithIdentifierForIndexPath(ofKind: string, withIdentifier: string, for_: IndexPath): NSView;
  moveItemAtIndexPathToIndexPath(at: IndexPath, to: IndexPath): void;
  moveSectionToSection(_: number, toSection: number): void;
  numberOfItemsInSection(inSection: number): number;
  performBatchUpdatesCompletionHandler(_?: () => void, completionHandler?: (p1: boolean) => void): void;
  performDragOperation(_: NSDraggingInfo): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  prepareForDragOperation(_: NSDraggingInfo): boolean;
  registerClassForItemWithIdentifier(_?: typeof NSObject, forItemWithIdentifier: string): void;
  registerClassForSupplementaryViewOfKindWithIdentifier(_?: typeof NSObject, forSupplementaryViewOfKind: string, withIdentifier: string): void;
  registerNibForItemWithIdentifier(_?: NSNib, forItemWithIdentifier: string): void;
  registerNibForSupplementaryViewOfKindWithIdentifier(_?: NSNib, forSupplementaryViewOfKind: string, withIdentifier: string): void;
  reloadData(): void;
  reloadItemsWithAt(at: Set<IndexPath>): void;
  reloadSections(_: IndexSet): void;
  respondsToSelector(_: string): boolean;
  scrollToItemsWithAtScrollPosition(at: Set<IndexPath>, scrollPosition: NSCollectionView.ScrollPosition): void;
  selectItemsWithAtScrollPosition(at: Set<IndexPath>, scrollPosition: NSCollectionView.ScrollPosition): void;
  self(): this;
  setDraggingSourceOperationMaskForLocal(_: NSDragOperation, forLocal: boolean): void;
  supplementaryViewForElementKindAtIndexPath(forElementKind: string, at: IndexPath): NSView;
  toggleSectionCollapse(_: any): void;
  updateDraggingItemsForDrag(_?: NSDraggingInfo): void;
  visibleItems(): NSArray<NSCollectionViewItem>;
  visibleSupplementaryViewsOfKind(ofKind: string): NSArray<NSView>;
  wantsPeriodicDraggingUpdates(): boolean;
}

declare class NSCollectionViewCompositionalLayout extends NSCollectionViewLayout {
  configuration: NSCollectionViewCompositionalLayoutConfiguration;
  setConfiguration(_: NSCollectionViewCompositionalLayoutConfiguration)
  static createWithSection(section: NSCollectionLayoutSection): this;
  static createWithSectionConfiguration(section: NSCollectionLayoutSection, configuration: NSCollectionViewCompositionalLayoutConfiguration): this;
  static createWithSectionProvider(sectionProvider: (p1: number, p2: NSCollectionLayoutEnvironment) => NSCollectionLayoutSection): this;
  static createWithSectionProviderConfiguration(sectionProvider: (p1: number, p2: NSCollectionLayoutEnvironment) => NSCollectionLayoutSection, configuration: NSCollectionViewCompositionalLayoutConfiguration): this;
}

declare class NSCollectionViewCompositionalLayoutConfiguration extends NSObject implements NSCopying {
  boundarySupplementaryItems: NSArray<NSCollectionLayoutBoundarySupplementaryItem>;
  setBoundarySupplementaryItems(_: NSArray<NSCollectionLayoutBoundarySupplementaryItem>)
  interSectionSpacing: number;
  setInterSectionSpacing(_: number)
  scrollDirection: NSCollectionView.ScrollDirection;
  setScrollDirection(_: NSCollectionView.ScrollDirection)
}

interface NSCollectionViewDataSource extends NSObject {
  collectionViewItemForRepresentedObjectAtIndexPath(_: NSCollectionView, itemForRepresentedObjectAt: IndexPath): NSCollectionViewItem;
  collectionViewViewForSupplementaryElementOfKindAtIndexPath?(_: NSCollectionView, viewForSupplementaryElementOfKind: string, at: IndexPath): NSView;
  collectionViewNumberOfItemsInSection(_: NSCollectionView, numberOfItemsInSection: number): number;
  numberOfSectionsInCollectionView?(in_: NSCollectionView): number;
}

declare var NSCollectionViewDataSource: {
  prototype: NSCollectionViewDataSource;
};

interface NSCollectionViewDelegate extends NSObject {
  collectionViewWith_CanDragItemsAtWith?(_: NSCollectionView, canDragItemsAt: Set<IndexPath>, with_: NSEvent): boolean;
  collectionViewCanDragItemsAtIndexesWithEvent?(_: NSCollectionView, canDragItemsAt: IndexSet, with_: NSEvent): boolean;
  collectionViewWith_WriteItemsAtTo?(_: NSCollectionView, writeItemsAt: Set<IndexPath>, to: NSPasteboard): boolean;
  collectionViewWriteItemsAtIndexesToPasteboard?(_: NSCollectionView, writeItemsAt: IndexSet, to: NSPasteboard): boolean;
  collectionViewWith_DraggingImageForItemsAtWithOffset?(_: NSCollectionView, draggingImageForItemsAt: Set<IndexPath>, with_: NSEvent, offset: NSPoint): NSImage;
  collectionViewDraggingImageForItemsAtIndexesWithEventOffset?(_: NSCollectionView, draggingImageForItemsAt: IndexSet, with_: NSEvent, offset: NSPoint): NSImage;
  collectionViewPasteboardWriterForItemAtIndexPath?(_: NSCollectionView, pasteboardWriterForItemAt: IndexPath): NSPasteboardWriting;
  collectionViewPasteboardWriterForItemAtIndex?(_: NSCollectionView, pasteboardWriterForItemAt: number): NSPasteboardWriting;
  collectionViewWith_DraggingSessionWillBeginAtForItemsAt?(_: NSCollectionView, draggingSession: NSDraggingSession, willBeginAt: NSPoint, forItemsAt: Set<IndexPath>): void;
  collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexes?(_: NSCollectionView, draggingSession: NSDraggingSession, willBeginAt: NSPoint, forItemsAt: IndexSet): void;
  collectionViewDraggingSessionEndedAtPointDragOperation?(_: NSCollectionView, draggingSession: NSDraggingSession, endedAt: NSPoint, dragOperation: NSDragOperation): void;
  collectionViewWith_ShouldChangeItemsAtTo?(_: NSCollectionView, shouldChangeItemsAt: Set<IndexPath>, to: NSCollectionViewItem.HighlightState): Set<IndexPath>;
  collectionViewWith_DidChangeItemsAtTo?(_: NSCollectionView, didChangeItemsAt: Set<IndexPath>, to: NSCollectionViewItem.HighlightState): void;
  collectionViewWith_ShouldSelectItemsAt?(_: NSCollectionView, shouldSelectItemsAt: Set<IndexPath>): Set<IndexPath>;
  collectionViewWith_ShouldDeselectItemsAt?(_: NSCollectionView, shouldDeselectItemsAt: Set<IndexPath>): Set<IndexPath>;
  collectionViewWith_DidSelectItemsAt?(_: NSCollectionView, didSelectItemsAt: Set<IndexPath>): void;
  collectionViewWith_DidDeselectItemsAt?(_: NSCollectionView, didDeselectItemsAt: Set<IndexPath>): void;
  collectionViewWillDisplayItemForRepresentedObjectAtIndexPath?(_: NSCollectionView, willDisplay: NSCollectionViewItem, forRepresentedObjectAt: IndexPath): void;
  collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath?(_: NSCollectionView, willDisplaySupplementaryView: NSView, forElementKind: string, at: IndexPath): void;
  collectionViewDidEndDisplayingItemForRepresentedObjectAtIndexPath?(_: NSCollectionView, didEndDisplaying: NSCollectionViewItem, forRepresentedObjectAt: IndexPath): void;
  collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath?(_: NSCollectionView, didEndDisplayingSupplementaryView: NSView, forElementOfKind: string, at: IndexPath): void;
  collectionViewAcceptDropIndexDropOperation?(_: NSCollectionView, acceptDrop: NSDraggingInfo, index: number, dropOperation: NSCollectionView.DropOperation): boolean;
  collectionViewAcceptDropIndexPathDropOperation?(_: NSCollectionView, acceptDrop: NSDraggingInfo, indexPath: IndexPath, dropOperation: NSCollectionView.DropOperation): boolean;
  collectionViewTransitionLayoutForOldLayoutNewLayout?(_: NSCollectionView, transitionLayoutForOldLayout: NSCollectionViewLayout, newLayout: NSCollectionViewLayout): NSCollectionViewTransitionLayout;
  collectionViewUpdateDraggingItemsForDrag?(_: NSCollectionView, updateDraggingItemsForDrag: NSDraggingInfo): void;
  collectionViewValidateDropProposedIndexDropOperation?(_: NSCollectionView, validateDrop: NSDraggingInfo, proposedIndex: number, dropOperation: NSCollectionView.DropOperation): NSDragOperation;
  collectionViewValidateDropProposedIndexPathDropOperation?(_: NSCollectionView, validateDrop: NSDraggingInfo, proposedIndexPath: IndexPath, dropOperation: NSCollectionView.DropOperation): NSDragOperation;
}

declare var NSCollectionViewDelegate: {
  prototype: NSCollectionViewDelegate;
};

interface NSCollectionViewDelegateFlowLayout extends NSCollectionViewDelegate {
  collectionViewLayoutSizeForItemAtIndexPath?(_: NSCollectionView, layout: NSCollectionViewLayout, sizeForItemAt: IndexPath): NSSize;
  collectionViewLayoutInsetForSectionAtIndex?(_: NSCollectionView, layout: NSCollectionViewLayout, insetForSectionAt: number): NSEdgeInsets;
  collectionViewLayoutMinimumLineSpacingForSectionAtIndex?(_: NSCollectionView, layout: NSCollectionViewLayout, minimumLineSpacingForSectionAt: number): number;
  collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex?(_: NSCollectionView, layout: NSCollectionViewLayout, minimumInteritemSpacingForSectionAt: number): number;
  collectionViewLayoutReferenceSizeForFooterInSection?(_: NSCollectionView, layout: NSCollectionViewLayout, referenceSizeForFooterInSection: number): NSSize;
  collectionViewLayoutReferenceSizeForHeaderInSection?(_: NSCollectionView, layout: NSCollectionViewLayout, referenceSizeForHeaderInSection: number): NSSize;
}

declare var NSCollectionViewDelegateFlowLayout: {
  prototype: NSCollectionViewDelegateFlowLayout;
};

declare class NSCollectionViewDiffableDataSource<SectionIdentifierType, ItemIdentifierType> extends NSObject implements NSCollectionViewDataSource {
  supplementaryViewProvider: (p1: NSCollectionView, p2: string, p3: IndexPath) => NSView;
  setSupplementaryViewProvider(_: (p1: NSCollectionView, p2: string, p3: IndexPath) => NSView)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  applySnapshotWithAnimatingDifferences(_: NSDiffableDataSourceSnapshotReference<SectionIdentifierType, ItemIdentifierType>, animatingDifferences: boolean): void;
  collectionViewItemForRepresentedObjectAtIndexPath(_: NSCollectionView, itemForRepresentedObjectAt: IndexPath): NSCollectionViewItem;
  collectionViewNumberOfItemsInSection(_: NSCollectionView, numberOfItemsInSection: number): number;
  collectionViewViewForSupplementaryElementOfKindAtIndexPath(_: NSCollectionView, viewForSupplementaryElementOfKind: string, at: IndexPath): NSView;
  conformsToProtocol(to: any /* Protocol */): boolean;
  indexPathForItemIdentifier(_: ItemIdentifierType): IndexPath;
  static createWithCollectionViewItemProvider(collectionView: NSCollectionView, itemProvider: (p1: NSCollectionView, p2: IndexPath, p3: ItemIdentifierType) => NSCollectionViewItem): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  itemIdentifierForIndexPath(_: IndexPath): ItemIdentifierType;
  numberOfSectionsInCollectionView(in_: NSCollectionView): number;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  snapshot(): NSDiffableDataSourceSnapshotReference<SectionIdentifierType, ItemIdentifierType>;
}

interface NSCollectionViewElement extends NSObject, NSUserInterfaceItemIdentification {
  applyLayoutAttributes?(_: NSCollectionViewLayoutAttributes): void;
  didTransitionFromLayoutToLayout?(from: NSCollectionViewLayout, to: NSCollectionViewLayout): void;
  preferredLayoutAttributesFittingAttributes?(_: NSCollectionViewLayoutAttributes): NSCollectionViewLayoutAttributes;
  prepareForReuse?(): void;
  willTransitionFromLayoutToLayout?(from: NSCollectionViewLayout, to: NSCollectionViewLayout): void;
}

declare var NSCollectionViewElement: {
  prototype: NSCollectionViewElement;
};

declare class NSCollectionViewFlowLayout extends NSCollectionViewLayout {
  estimatedItemSize: NSSize;
  setEstimatedItemSize(_: NSSize)
  footerReferenceSize: NSSize;
  setFooterReferenceSize(_: NSSize)
  headerReferenceSize: NSSize;
  setHeaderReferenceSize(_: NSSize)
  itemSize: NSSize;
  setItemSize(_: NSSize)
  minimumInteritemSpacing: number;
  setMinimumInteritemSpacing(_: number)
  minimumLineSpacing: number;
  setMinimumLineSpacing(_: number)
  scrollDirection: NSCollectionView.ScrollDirection;
  setScrollDirection(_: NSCollectionView.ScrollDirection)
  sectionFootersPinToVisibleBounds: boolean;
  setSectionFootersPinToVisibleBounds(_: boolean)
  sectionHeadersPinToVisibleBounds: boolean;
  setSectionHeadersPinToVisibleBounds(_: boolean)
  sectionInset: NSEdgeInsets;
  setSectionInset(_: NSEdgeInsets)
  collapseSectionAtIndex(at: number): void;
  expandSectionAtIndex(at: number): void;
  sectionAtIndexIsCollapsed(atIndexIsCollapsed: number): boolean;
}

declare class NSCollectionViewFlowLayoutInvalidationContext extends NSCollectionViewLayoutInvalidationContext {
  invalidateFlowLayoutAttributes: boolean;
  setInvalidateFlowLayoutAttributes(_: boolean)
  invalidateFlowLayoutDelegateMetrics: boolean;
  setInvalidateFlowLayoutDelegateMetrics(_: boolean)
}

declare class NSCollectionViewGridLayout extends NSCollectionViewLayout {
  backgroundColors: NSArray<NSColor>;
  setBackgroundColors(_: NSArray<NSColor>)
  margins: NSEdgeInsets;
  setMargins(_: NSEdgeInsets)
  maximumItemSize: NSSize;
  setMaximumItemSize(_: NSSize)
  maximumNumberOfColumns: number;
  setMaximumNumberOfColumns(_: number)
  maximumNumberOfRows: number;
  setMaximumNumberOfRows(_: number)
  minimumInteritemSpacing: number;
  setMinimumInteritemSpacing(_: number)
  minimumItemSize: NSSize;
  setMinimumItemSize(_: NSSize)
  minimumLineSpacing: number;
  setMinimumLineSpacing(_: number)
}

declare class NSCollectionViewItem extends NSViewController implements NSCollectionViewElement, NSCopying {
  readonly collectionView: NSCollectionView;
  readonly draggingImageComponents: NSArray<NSDraggingImageComponent>;
  highlightState: NSCollectionViewItem.HighlightState;
  setHighlightState(_: NSCollectionViewItem.HighlightState)
  imageView: NSImageView;
  setImageView(_: NSImageView)
  isSelected: boolean;
  setSelected(_: boolean)
  textField: NSTextField;
  setTextField(_: NSTextField)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  identifier: string;
  setIdentifier(_: string) // inherited from NSUserInterfaceItemIdentification
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  applyLayoutAttributes(_: NSCollectionViewLayoutAttributes): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  didTransitionFromLayoutToLayout(from: NSCollectionViewLayout, to: NSCollectionViewLayout): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  preferredLayoutAttributesFittingAttributes(_: NSCollectionViewLayoutAttributes): NSCollectionViewLayoutAttributes;
  prepareForReuse(): void;
  respondsToSelector(_: string): boolean;
  self(): this;
  willTransitionFromLayoutToLayout(from: NSCollectionViewLayout, to: NSCollectionViewLayout): void;
}

declare class NSCollectionViewLayout extends NSObject implements NSCoding {
  readonly collectionView: NSCollectionView;
  readonly collectionViewContentSize: NSSize;
  static invalidationContextClass(): typeof NSObject;
  static layoutAttributesClass(): typeof NSObject;
  encodeWithCoder(with_: NSCoder): void;
  finalLayoutAttributesForDisappearingDecorationElementOfKindAtIndexPath(ofKind: string, at: IndexPath): NSCollectionViewLayoutAttributes;
  finalLayoutAttributesForDisappearingItemAtIndexPath(at: IndexPath): NSCollectionViewLayoutAttributes;
  finalLayoutAttributesForDisappearingSupplementaryElementOfKindAtIndexPath(ofKind: string, at: IndexPath): NSCollectionViewLayoutAttributes;
  finalizeAnimatedBoundsChange(): void;
  finalizeCollectionViewUpdates(): void;
  finalizeLayoutTransition(): void;
  indexPathsToDeleteForDecorationViewOfKind(ofKind: string): Set<IndexPath>;
  indexPathsToDeleteForSupplementaryViewOfKind(ofKind: string): Set<IndexPath>;
  indexPathsToInsertForDecorationViewOfKind(ofKind: string): Set<IndexPath>;
  indexPathsToInsertForSupplementaryViewOfKind(ofKind: string): Set<IndexPath>;
  static createWithCoder(coder: NSCoder): this;
  initialLayoutAttributesForAppearingDecorationElementOfKindAtIndexPath(ofKind: string, at: IndexPath): NSCollectionViewLayoutAttributes;
  initialLayoutAttributesForAppearingItemAtIndexPath(at: IndexPath): NSCollectionViewLayoutAttributes;
  initialLayoutAttributesForAppearingSupplementaryElementOfKindAtIndexPath(ofKind: string, at: IndexPath): NSCollectionViewLayoutAttributes;
  invalidateLayout(): void;
  invalidateLayoutWithContext(with_: NSCollectionViewLayoutInvalidationContext): void;
  invalidationContextForBoundsChange(forBoundsChange: NSRect): NSCollectionViewLayoutInvalidationContext;
  invalidationContextForPreferredLayoutAttributesWithOriginalAttributes(forPreferredLayoutAttributes: NSCollectionViewLayoutAttributes, withOriginalAttributes: NSCollectionViewLayoutAttributes): NSCollectionViewLayoutInvalidationContext;
  layoutAttributesForDecorationViewOfKindAtIndexPath(ofKind: string, at: IndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForDropTargetAtPoint(at: NSPoint): NSCollectionViewLayoutAttributes;
  layoutAttributesForElementsInRect(in_: NSRect): NSArray<NSCollectionViewLayoutAttributes>;
  layoutAttributesForInterItemGapBeforeIndexPath(before: IndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForItemAtIndexPath(at: IndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForSupplementaryViewOfKindAtIndexPath(ofKind: string, at: IndexPath): NSCollectionViewLayoutAttributes;
  prepareForAnimatedBoundsChange(forAnimatedBoundsChange: NSRect): void;
  prepareForCollectionViewUpdates(forCollectionViewUpdates: NSArray<NSCollectionViewUpdateItem>): void;
  prepareForTransitionFromLayout(from: NSCollectionViewLayout): void;
  prepareForTransitionToLayout(to: NSCollectionViewLayout): void;
  prepareLayout(): void;
  registerClassForDecorationViewOfKind(_?: typeof NSObject, forDecorationViewOfKind: string): void;
  registerNibForDecorationViewOfKind(_?: NSNib, forDecorationViewOfKind: string): void;
  shouldInvalidateLayoutForBoundsChange(forBoundsChange: NSRect): boolean;
  shouldInvalidateLayoutForPreferredLayoutAttributesWithOriginalAttributes(forPreferredLayoutAttributes: NSCollectionViewLayoutAttributes, withOriginalAttributes: NSCollectionViewLayoutAttributes): boolean;
  targetContentOffsetForProposedContentOffset(forProposedContentOffset: NSPoint): NSPoint;
  targetContentOffsetForProposedContentOffsetWithScrollingVelocity(forProposedContentOffset: NSPoint, withScrollingVelocity: NSPoint): NSPoint;
}

declare class NSCollectionViewLayoutAttributes extends NSObject implements NSCopying {
  static layoutAttributesForDecorationViewOfKindWithIndexPath(forDecorationViewOfKind: string, with_: IndexPath): NSCollectionViewLayoutAttributes;
  static layoutAttributesForInterItemGapBeforeIndexPath(forInterItemGapBefore: IndexPath): NSCollectionViewLayoutAttributes;
  static layoutAttributesForItemWithIndexPath(forItemWith: IndexPath): NSCollectionViewLayoutAttributes;
  static layoutAttributesForSupplementaryViewOfKindWithIndexPath(forSupplementaryViewOfKind: string, with_: IndexPath): NSCollectionViewLayoutAttributes;
  alpha: number;
  setAlpha(_: number)
  frame: NSRect;
  setFrame(_: NSRect)
  isHidden: boolean;
  setHidden(_: boolean)
  indexPath: IndexPath;
  setIndexPath(_: IndexPath)
  readonly representedElementCategory: NSCollectionElementCategory;
  readonly representedElementKind: string;
  size: NSSize;
  setSize(_: NSSize)
  zIndex: number;
  setZIndex(_: number)
}

declare class NSCollectionViewLayoutInvalidationContext extends NSObject {
  contentOffsetAdjustment: NSPoint;
  setContentOffsetAdjustment(_: NSPoint)
  contentSizeAdjustment: NSSize;
  setContentSizeAdjustment(_: NSSize)
  readonly invalidateDataSourceCounts: boolean;
  readonly invalidateEverything: boolean;
  readonly invalidatedDecorationIndexPaths: NSDictionary<string, Set<IndexPath>>;
  readonly invalidatedItemIndexPaths: Set<IndexPath>;
  readonly invalidatedSupplementaryIndexPaths: NSDictionary<string, Set<IndexPath>>;
  invalidateDecorationElementsOfKindAt(ofKind: string, at: Set<IndexPath>): void;
  invalidateItemsWithAt(at: Set<IndexPath>): void;
  invalidateSupplementaryElementsOfKindAt(ofKind: string, at: Set<IndexPath>): void;
}

interface NSCollectionViewPrefetching extends NSObject {
  collectionViewPrefetchItemsAtIndexPaths(_: NSCollectionView, prefetchItemsAt: NSArray<IndexPath>): void;
  collectionViewCancelPrefetchingForItemsAtIndexPaths?(_: NSCollectionView, cancelPrefetchingForItemsAt: NSArray<IndexPath>): void;
}

declare var NSCollectionViewPrefetching: {
  prototype: NSCollectionViewPrefetching;
};

interface NSCollectionViewSectionHeaderView extends NSCollectionViewElement {
  sectionCollapseButton?: NSButton;
  setSectionCollapseButton(_: NSButton)
}

declare var NSCollectionViewSectionHeaderView: {
  prototype: NSCollectionViewSectionHeaderView;
};

declare class NSCollectionViewTransitionLayout extends NSCollectionViewLayout {
  readonly currentLayout: NSCollectionViewLayout;
  readonly nextLayout: NSCollectionViewLayout;
  transitionProgress: number;
  setTransitionProgress(_: number)
  static createWithCurrentLayoutNextLayout(currentLayout: NSCollectionViewLayout, nextLayout: NSCollectionViewLayout): this;
  updateValueForAnimatedKey(_: number, forAnimatedKey: string): void;
  valueForAnimatedKey(forAnimatedKey: string): number;
}

declare class NSCollectionViewUpdateItem extends NSObject {
  readonly indexPathAfterUpdate: IndexPath;
  readonly indexPathBeforeUpdate: IndexPath;
  readonly updateAction: NSCollectionView.UpdateAction;
}

declare class NSColor extends NSObject implements NSCopying, NSPasteboardReading, NSPasteboardWriting, NSSecureCoding {
  static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.ReadingOptions;
  readonly CGColor: any;
  readonly alphaComponent: number;
  readonly blackComponent: number;
  readonly blueComponent: number;
  readonly brightnessComponent: number;
  readonly catalogNameComponent: string;
  readonly colorNameComponent: string;
  readonly colorSpace: NSColorSpace;
  readonly cyanComponent: number;
  readonly greenComponent: number;
  readonly hueComponent: number;
  readonly localizedCatalogNameComponent: string;
  readonly localizedColorNameComponent: string;
  readonly magentaComponent: number;
  readonly numberOfComponents: number;
  readonly patternImage: NSImage;
  readonly redComponent: number;
  readonly saturationComponent: number;
  readonly type: NSColor.ColorType;
  readonly whiteComponent: number;
  readonly yellowComponent: number;
  static alternateSelectedControlTextColor(): NSColor;
  static alternatingContentBackgroundColors(): NSArray<NSColor>;
  static blackColor(): NSColor;
  static blueColor(): NSColor;
  static brownColor(): NSColor;
  static clearColor(): NSColor;
  static controlAccentColor(): NSColor;
  static controlBackgroundColor(): NSColor;
  static controlColor(): NSColor;
  static controlTextColor(): NSColor;
  static currentControlTint(): NSControlTint;
  static cyanColor(): NSColor;
  static darkGrayColor(): NSColor;
  static disabledControlTextColor(): NSColor;
  static findHighlightColor(): NSColor;
  static grayColor(): NSColor;
  static greenColor(): NSColor;
  static gridColor(): NSColor;
  static headerTextColor(): NSColor;
  static highlightColor(): NSColor;
  static ignoresAlpha: boolean;
  setIgnoresAlpha(_: boolean)
  static keyboardFocusIndicatorColor(): NSColor;
  static labelColor(): NSColor;
  static lightGrayColor(): NSColor;
  static linkColor(): NSColor;
  static magentaColor(): NSColor;
  static orangeColor(): NSColor;
  static placeholderTextColor(): NSColor;
  static purpleColor(): NSColor;
  static quaternaryLabelColor(): NSColor;
  static redColor(): NSColor;
  static scrubberTexturedBackgroundColor(): NSColor;
  static secondaryLabelColor(): NSColor;
  static selectedContentBackgroundColor(): NSColor;
  static selectedControlColor(): NSColor;
  static selectedControlTextColor(): NSColor;
  static selectedMenuItemTextColor(): NSColor;
  static selectedTextBackgroundColor(): NSColor;
  static selectedTextColor(): NSColor;
  static separatorColor(): NSColor;
  static shadowColor(): NSColor;
  static systemBlueColor(): NSColor;
  static systemBrownColor(): NSColor;
  static systemGrayColor(): NSColor;
  static systemGreenColor(): NSColor;
  static systemIndigoColor(): NSColor;
  static systemOrangeColor(): NSColor;
  static systemPinkColor(): NSColor;
  static systemPurpleColor(): NSColor;
  static systemRedColor(): NSColor;
  static systemTealColor(): NSColor;
  static systemYellowColor(): NSColor;
  static tertiaryLabelColor(): NSColor;
  static textBackgroundColor(): NSColor;
  static textColor(): NSColor;
  static underPageBackgroundColor(): NSColor;
  static unemphasizedSelectedContentBackgroundColor(): NSColor;
  static unemphasizedSelectedTextBackgroundColor(): NSColor;
  static unemphasizedSelectedTextColor(): NSColor;
  static whiteColor(): NSColor;
  static windowBackgroundColor(): NSColor;
  static windowFrameTextColor(): NSColor;
  static yellowColor(): NSColor;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  blendedColorWithFractionOfColor(withFraction: number, of: NSColor): NSColor;
  colorUsingColorSpace(_: NSColorSpace): NSColor;
  colorUsingType(_: NSColor.ColorType): NSColor;
  colorWithAlphaComponent(_: number): NSColor;
  colorWithSystemEffect(_: NSColor.SystemEffect): NSColor;
  conformsToProtocol(to: any /* Protocol */): boolean;
  drawSwatchInRect(in_: NSRect): void;
  encodeWithCoder(with_: NSCoder): void;
  getComponents(_: number): void;
  getCyanMagentaYellowBlackAlpha(_?: number, magenta?: number, yellow?: number, black?: number, alpha?: number): void;
  getHueSaturationBrightnessAlpha(_?: number, saturation?: number, brightness?: number, alpha?: number): void;
  getRedGreenBlueAlpha(_?: number, green?: number, blue?: number, alpha?: number): void;
  getWhiteAlpha(_?: number, alpha?: number): void;
  highlightWithLevel(withLevel: number): NSColor;
  static createWithCoder(coder: NSCoder): this;
  static createWithPasteboardPropertyListOfType(pasteboardPropertyList: any, ofType: string): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  pasteboardPropertyListForType(forType: string): any;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  set(): void;
  setFill(): void;
  setStroke(): void;
  shadowWithLevel(withLevel: number): NSColor;
  writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  writeToPasteboard(to: NSPasteboard): void;
  writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.WritingOptions;
}

interface NSColorChanging extends NSObject {
  changeColor(_?: NSColorPanel): void;
}

declare var NSColorChanging: {
  prototype: NSColorChanging;
};

declare class NSColorList extends NSObject implements NSSecureCoding {
  readonly allKeys: NSArray<string>;
  readonly isEditable: boolean;
  readonly name: string;
  static availableColorLists(): NSArray<NSColorList>;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  colorWithKey(withKey: string): NSColor;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithName(name: string): this;
  static createWithNameFromFile(name: string, fromFile?: string): this;
  insertColorKeyAtIndex(_: NSColor, key: string, at: number): void;
  removeColorWithKey(withKey: string): void;
  removeFile(): void;
  setColorForKey(_: NSColor, forKey: string): void;
  writeToURLError(error?: NSURL): boolean;
}

declare var NSColorListDidChangeNotification: string;

declare var NSColorListIOException: string;

declare var NSColorListNotEditableException: string;

declare class NSColorPanel extends NSPanel {
  static dragColorWithEventFromView(_: NSColor, with_: NSEvent, from: NSView): boolean;
  static setPickerMask(_: NSColorPanel.Options): void;
  static setPickerMode(_: NSColorPanel.Mode): void;
  accessoryView: NSView;
  setAccessoryView(_: NSView)
  readonly alpha: number;
  color: NSColor;
  setColor(_: NSColor)
  isContinuous: boolean;
  setContinuous(_: boolean)
  mode: NSColorPanel.Mode;
  setMode(_: NSColorPanel.Mode)
  showsAlpha: boolean;
  setShowsAlpha(_: boolean)
  static sharedColorPanel(): NSColorPanel;
  static sharedColorPanelExists(): boolean;
  attachColorList(_: NSColorList): void;
  detachColorList(_: NSColorList): void;
  setAction(_?: string): void;
  setTarget(_?: any): void;
}

declare var NSColorPanelColorDidChangeNotification: string;

declare class NSColorPicker extends NSObject implements NSColorPickingDefault {
  readonly buttonToolTip: string;
  readonly colorPanel: NSColorPanel;
  readonly minContentSize: NSSize;
  readonly provideNewButtonImage: NSImage;
  alphaControlAddedOrRemoved(_?: any): void;
  attachColorList(_: NSColorList): void;
  detachColorList(_: NSColorList): void;
  static createWithPickerMaskColorPanel(pickerMask: number, colorPanel: NSColorPanel): this;
  insertNewButtonImageIn(_: NSImage, in_: NSButtonCell): void;
  setMode(_: NSColorPanel.Mode): void;
  viewSizeChanged(_?: any): void;
}

declare class NSColorPickerTouchBarItem extends NSTouchBarItem {
  static colorPickerWithIdentifier(withIdentifier: string): NSColorPickerTouchBarItem;
  static colorPickerWithIdentifierButtonImage(withIdentifier: string, buttonImage: NSImage): NSColorPickerTouchBarItem;
  static strokeColorPickerWithIdentifier(withIdentifier: string): NSColorPickerTouchBarItem;
  static textColorPickerWithIdentifier(withIdentifier: string): NSColorPickerTouchBarItem;
  action: string;
  setAction(_: string)
  allowedColorSpaces: NSArray<NSColorSpace>;
  setAllowedColorSpaces(_: NSArray<NSColorSpace>)
  color: NSColor;
  setColor(_: NSColor)
  colorList: NSColorList;
  setColorList(_: NSColorList)
  customizationLabel: string;
  setCustomizationLabel(_: string)
  isEnabled: boolean;
  setEnabled(_: boolean)
  showsAlpha: boolean;
  setShowsAlpha(_: boolean)
  target: any;
  setTarget(_: any)
}

interface NSColorPickingCustom extends NSColorPickingDefault {
  currentMode(): NSColorPanel.Mode;
  provideNewView(_: boolean): NSView;
  setColor(_: NSColor): void;
  supportsMode(_: NSColorPanel.Mode): boolean;
}

declare var NSColorPickingCustom: {
  prototype: NSColorPickingCustom;
};

interface NSColorPickingDefault {
  provideNewButtonImage: NSImage;
  buttonToolTip: string;
  minContentSize: NSSize;
  alphaControlAddedOrRemoved(_?: any): void;
  attachColorList(_: NSColorList): void;
  detachColorList(_: NSColorList): void;
  static createWithPickerMaskColorPanel?(pickerMask: number, colorPanel: NSColorPanel): NSColorPickingDefault;
  insertNewButtonImageIn(_: NSImage, in_: NSButtonCell): void;
  setMode(_: NSColorPanel.Mode): void;
  viewSizeChanged(_?: any): void;
}

declare var NSColorPickingDefault: {
  prototype: NSColorPickingDefault;
};

declare class NSColorSampler extends NSObject {
  showSamplerWithSelectionHandler(selectionHandler?: (p1: NSColor) => void): void;
}

declare class NSColorSpace extends NSObject implements NSSecureCoding {
  static availableColorSpacesWithModel(with_: NSColorSpace.Model): NSArray<NSColorSpace>;
  readonly CGColorSpace: any;
  readonly ICCProfileData: Data;
  readonly colorSpaceModel: NSColorSpace.Model;
  readonly colorSyncProfile: any;
  readonly localizedName: string;
  readonly numberOfColorComponents: number;
  static adobeRGB1998ColorSpace(): NSColorSpace;
  static deviceCMYKColorSpace(): NSColorSpace;
  static deviceGrayColorSpace(): NSColorSpace;
  static deviceRGBColorSpace(): NSColorSpace;
  static displayP3ColorSpace(): NSColorSpace;
  static extendedGenericGamma22GrayColorSpace(): NSColorSpace;
  static extendedSRGBColorSpace(): NSColorSpace;
  static genericCMYKColorSpace(): NSColorSpace;
  static genericGamma22GrayColorSpace(): NSColorSpace;
  static genericGrayColorSpace(): NSColorSpace;
  static genericRGBColorSpace(): NSColorSpace;
  static sRGBColorSpace(): NSColorSpace;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCGColorSpace(CGColorSpace: any): this;
  static createWithCoder(coder: NSCoder): this;
  static createColorSyncProfile(colorSyncProfile: any): this;
  static createICCProfileData(ICCProfileData: Data): this;
}

declare function NSColorSpaceFromDepth(depth: NSWindow.Depth): string;
declare class NSColorWell extends NSControl {
  readonly isActive: boolean;
  isBordered: boolean;
  setBordered(_: boolean)
  color: NSColor;
  setColor(_: NSColor)
  activate(_: boolean): void;
  deactivate(): void;
  drawWellInside(inside: NSRect): void;
  takeColorFrom(_?: any): void;
}

declare class NSComboBox extends NSTextField {
  static labelWithAttributedString(labelWithAttributedString: NSAttributedString): NSComboBox; // inherited from NSTextField
  static labelWithString(labelWithString: string): NSComboBox; // inherited from NSTextField
  static wrappingLabelWithString(wrappingLabelWithString: string): NSComboBox; // inherited from NSTextField
  isButtonBordered: boolean;
  setButtonBordered(_: boolean)
  completes: boolean;
  setCompletes(_: boolean)
  dataSource: NSComboBoxDataSource;
  setDataSource(_: NSComboBoxDataSource)
  delegate: NSComboBoxDelegate;
  setDelegate(_: NSComboBoxDelegate)
  hasVerticalScroller: boolean;
  setHasVerticalScroller(_: boolean)
  readonly indexOfSelectedItem: number;
  intercellSpacing: NSSize;
  setIntercellSpacing(_: NSSize)
  itemHeight: number;
  setItemHeight(_: number)
  readonly numberOfItems: number;
  numberOfVisibleItems: number;
  setNumberOfVisibleItems(_: number)
  readonly objectValueOfSelectedItem: any;
  readonly objectValues: NSArray<any>;
  usesDataSource: boolean;
  setUsesDataSource(_: boolean)
  addItemWithObjectValue(withObjectValue: any): void;
  addItemsWithObjectValues(withObjectValues: NSArray<any>): void;
  deselectItemAtIndex(at: number): void;
  indexOfItemWithObjectValue(withObjectValue: any): number;
  insertItemWithObjectValueAtIndex(withObjectValue: any, at: number): void;
  itemObjectValueAtIndex(at: number): any;
  noteNumberOfItemsChanged(): void;
  reloadData(): void;
  removeAllItems(): void;
  removeItemAtIndex(at: number): void;
  removeItemWithObjectValue(withObjectValue: any): void;
  scrollItemAtIndexToTop(_: number): void;
  scrollItemAtIndexToVisible(_: number): void;
  selectItemAtIndex(at: number): void;
  selectItemWithObjectValue(withObjectValue?: any): void;
}

declare class NSComboBoxCell extends NSTextFieldCell {
  isButtonBordered: boolean;
  setButtonBordered(_: boolean)
  completes: boolean;
  setCompletes(_: boolean)
  dataSource: NSComboBoxCellDataSource;
  setDataSource(_: NSComboBoxCellDataSource)
  hasVerticalScroller: boolean;
  setHasVerticalScroller(_: boolean)
  readonly indexOfSelectedItem: number;
  intercellSpacing: NSSize;
  setIntercellSpacing(_: NSSize)
  itemHeight: number;
  setItemHeight(_: number)
  readonly numberOfItems: number;
  numberOfVisibleItems: number;
  setNumberOfVisibleItems(_: number)
  readonly objectValueOfSelectedItem: any;
  readonly objectValues: NSArray<any>;
  usesDataSource: boolean;
  setUsesDataSource(_: boolean)
  addItemWithObjectValue(withObjectValue: any): void;
  addItemsWithObjectValues(withObjectValues: NSArray<any>): void;
  completedString(_: string): string;
  deselectItemAtIndex(at: number): void;
  indexOfItemWithObjectValue(withObjectValue: any): number;
  insertItemWithObjectValueAtIndex(withObjectValue: any, at: number): void;
  itemObjectValueAtIndex(at: number): any;
  noteNumberOfItemsChanged(): void;
  reloadData(): void;
  removeAllItems(): void;
  removeItemAtIndex(at: number): void;
  removeItemWithObjectValue(withObjectValue: any): void;
  scrollItemAtIndexToTop(_: number): void;
  scrollItemAtIndexToVisible(_: number): void;
  selectItemAtIndex(at: number): void;
  selectItemWithObjectValue(withObjectValue?: any): void;
}

interface NSComboBoxCellDataSource extends NSObject {
  comboBoxCellObjectValueForItemAtIndex?(_: NSComboBoxCell, objectValueForItemAt: number): any;
  comboBoxCellCompletedString?(_: NSComboBoxCell, completedString: string): string;
  comboBoxCellIndexOfItemWithStringValue?(_: NSComboBoxCell, indexOfItemWithStringValue: string): number;
  numberOfItemsInComboBoxCell?(in_: NSComboBoxCell): number;
}

declare var NSComboBoxCellDataSource: {
  prototype: NSComboBoxCellDataSource;
};

interface NSComboBoxDataSource extends NSObject {
  comboBoxObjectValueForItemAtIndex?(_: NSComboBox, objectValueForItemAt: number): any;
  comboBoxCompletedString?(_: NSComboBox, completedString: string): string;
  comboBoxIndexOfItemWithStringValue?(_: NSComboBox, indexOfItemWithStringValue: string): number;
  numberOfItemsInComboBox?(in_: NSComboBox): number;
}

declare var NSComboBoxDataSource: {
  prototype: NSComboBoxDataSource;
};

interface NSComboBoxDelegate extends NSTextFieldDelegate {
  comboBoxSelectionDidChange?(_: Notification): void;
  comboBoxSelectionIsChanging?(_: Notification): void;
  comboBoxWillDismiss?(_: Notification): void;
  comboBoxWillPopUp?(_: Notification): void;
}

declare var NSComboBoxDelegate: {
  prototype: NSComboBoxDelegate;
};

declare var NSComboBoxSelectionDidChangeNotification: string;

declare var NSComboBoxSelectionIsChangingNotification: string;

declare var NSComboBoxWillDismissNotification: string;

declare var NSComboBoxWillPopUpNotification: string;

declare var NSCommentDocumentAttribute: string;

declare var NSCompanyDocumentAttribute: string;

declare var NSConditionallySetsEditableBindingOption: string;

declare var NSConditionallySetsEnabledBindingOption: string;

declare var NSConditionallySetsHiddenBindingOption: string;

declare var NSContentArrayBinding: string;

declare var NSContentArrayForMultipleSelectionBinding: string;

declare var NSContentBinding: string;

declare var NSContentDictionaryBinding: string;

declare var NSContentHeightBinding: string;

declare var NSContentObjectBinding: string;

declare var NSContentObjectsBinding: string;

declare var NSContentPlacementTagBindingOption: string;

declare var NSContentSetBinding: string;

declare var NSContentValuesBinding: string;

declare var NSContentWidthBinding: string;

declare var NSContextHelpModeDidActivateNotification: string;

declare var NSContextHelpModeDidDeactivateNotification: string;

declare var NSContinuouslyUpdatesValueBindingOption: string;

declare class NSControl extends NSView {
  action: string;
  setAction(_: string)
  alignment: NSTextAlignment;
  setAlignment(_: NSTextAlignment)
  allowsExpansionToolTips: boolean;
  setAllowsExpansionToolTips(_: boolean)
  attributedStringValue: NSAttributedString;
  setAttributedStringValue(_: NSAttributedString)
  baseWritingDirection: NSWritingDirection;
  setBaseWritingDirection(_: NSWritingDirection)
  cell: NSCell;
  setCell(_: NSCell)
  isContinuous: boolean;
  setContinuous(_: boolean)
  controlSize: NSControl.ControlSize;
  setControlSize(_: NSControl.ControlSize)
  doubleValue: number;
  setDoubleValue(_: number)
  isEnabled: boolean;
  setEnabled(_: boolean)
  floatValue: number;
  setFloatValue(_: number)
  font: NSFont;
  setFont(_: NSFont)
  formatter: Formatter;
  setFormatter(_: Formatter)
  isHighlighted: boolean;
  setHighlighted(_: boolean)
  ignoresMultiClick: boolean;
  setIgnoresMultiClick(_: boolean)
  intValue: number;
  setIntValue(_: number)
  integerValue: number;
  setIntegerValue(_: number)
  lineBreakMode: NSLineBreakMode;
  setLineBreakMode(_: NSLineBreakMode)
  objectValue: any;
  setObjectValue(_: any)
  refusesFirstResponder: boolean;
  setRefusesFirstResponder(_: boolean)
  stringValue: string;
  setStringValue(_: string)
  tag: number;
  setTag(_: number)
  target: any;
  setTarget(_: any)
  usesSingleLineMode: boolean;
  setUsesSingleLineMode(_: boolean)
  static cellClass: typeof NSObject;
  setCellClass(_: typeof NSObject)
  abortEditing(): boolean;
  currentEditor(): NSText;
  drawCell(_: NSCell): void;
  drawCellInside(_: NSCell): void;
  drawWithExpansionFrameInView(withExpansionFrame: NSRect, in_: NSView): void;
  editWithFrameEditorDelegateEvent(withFrame: NSRect, editor: NSText, delegate?: any, event: NSEvent): void;
  endEditing(_: NSText): void;
  expansionFrameWithFrame(withFrame: NSRect): NSRect;
  invalidateIntrinsicContentSizeForCell(for_: NSCell): void;
  performClick(_?: any): void;
  selectCell(_: NSCell): void;
  selectWithFrameEditorDelegateStartLength(withFrame: NSRect, editor: NSText, delegate?: any, start: number, length: number): void;
  selectedCell(): NSCell;
  selectedTag(): number;
  sendActionTo(_?: string, to?: any): boolean;
  sendActionOn(on: NSEvent.EventTypeMask): number;
  sizeThatFits(_: NSSize): NSSize;
  sizeToFit(): void;
  takeDoubleValueFrom(_?: any): void;
  takeFloatValueFrom(_?: any): void;
  takeIntValueFrom(_?: any): void;
  takeIntegerValueFrom(_?: any): void;
  takeObjectValueFrom(_?: any): void;
  takeStringValueFrom(_?: any): void;
  updateCell(_: NSCell): void;
  updateCellInside(_: NSCell): void;
  validateEditing(): void;
}


declare const NSControlGlyph: number;
declare var NSControlStateValueMixed: number;

declare var NSControlStateValueOff: number;

declare var NSControlStateValueOn: number;

declare var NSControlTextDidBeginEditingNotification: string;

declare var NSControlTextDidChangeNotification: string;

declare var NSControlTextDidEndEditingNotification: string;

interface NSControlTextEditingDelegate extends NSObject {
  controlTextViewDoCommandBySelector?(_: NSControl, textView: NSTextView, doCommandBy: string): boolean;
  controlDidFailToFormatStringErrorDescription?(_: NSControl, didFailToFormatString: string, errorDescription?: string): boolean;
  controlDidFailToValidatePartialStringErrorDescription?(_: NSControl, didFailToValidatePartialString: string, errorDescription?: string): void;
  controlIsValidObject?(_: NSControl, isValidObject?: any): boolean;
  controlTextShouldBeginEditing?(_: NSControl, textShouldBeginEditing: NSText): boolean;
  controlTextShouldEndEditing?(_: NSControl, textShouldEndEditing: NSText): boolean;
  controlTextViewCompletionsForPartialWordRangeIndexOfSelectedItem?(_: NSControl, textView: NSTextView, completions: NSArray<string>, forPartialWordRange: NSRange, indexOfSelectedItem: number): NSArray<string>;
  controlTextDidBeginEditing?(_: Notification): void;
  controlTextDidChange?(_: Notification): void;
  controlTextDidEndEditing?(_: Notification): void;
}

declare var NSControlTextEditingDelegate: {
  prototype: NSControlTextEditingDelegate;
};

declare var NSControlTintDidChangeNotification: string;

declare class NSController extends NSObject implements NSCoding, NSEditor, NSEditorRegistration {
  readonly isEditing: boolean;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  commitEditing(): boolean;
  commitEditingAndReturnError(): boolean;
  commitEditingWithDelegateDidCommitSelectorContextInfo(withDelegate?: any, didCommit?: string, contextInfo?: any): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  discardEditing(): void;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  objectDidBeginEditing(_: NSEditor): void;
  objectDidEndEditing(_: NSEditor): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare var NSConvertedDocumentAttribute: string;

declare var NSCopyrightDocumentAttribute: string;

declare function NSCreateFileContentsPboardType(fileType: string): string;
declare function NSCreateFilenamePboardType(fileType: string): string;
declare var NSCreatesSortDescriptorBindingOption: string;

declare var NSCreationTimeDocumentAttribute: string;

declare var NSCriticalValueBinding: string;

declare class NSCursor extends NSObject implements NSCoding {
  static hide(): void;
  static pop(): void;
  static setHiddenUntilMouseMoves(_: boolean): void;
  static unhide(): void;
  readonly hotSpot: NSPoint;
  readonly image: NSImage;
  static IBeamCursor(): NSCursor;
  static IBeamCursorForVerticalLayout(): NSCursor;
  static arrowCursor(): NSCursor;
  static closedHandCursor(): NSCursor;
  static contextualMenuCursor(): NSCursor;
  static crosshairCursor(): NSCursor;
  static currentCursor(): NSCursor;
  static currentSystemCursor(): NSCursor;
  static disappearingItemCursor(): NSCursor;
  static dragCopyCursor(): NSCursor;
  static dragLinkCursor(): NSCursor;
  static openHandCursor(): NSCursor;
  static operationNotAllowedCursor(): NSCursor;
  static pointingHandCursor(): NSCursor;
  static resizeDownCursor(): NSCursor;
  static resizeLeftCursor(): NSCursor;
  static resizeLeftRightCursor(): NSCursor;
  static resizeRightCursor(): NSCursor;
  static resizeUpCursor(): NSCursor;
  static resizeUpDownCursor(): NSCursor;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithImageHotSpot(image: NSImage, hotSpot: NSPoint): this;
  pop(): void;
  push(): void;
  set(): void;
}

declare var NSCursorAttributeName: string;

declare var NSCurveToBezierPathElement: NSBezierPath.ElementType;

declare var NSCustomColorSpace: string;

declare class NSCustomImageRep extends NSImageRep {
  readonly delegate: any;
  readonly drawSelector: string;
  readonly drawingHandler: (p1: NSRect) => boolean;
  static createWithDrawSelectorDelegate(drawSelector: string, delegate: any): this;
  static createWithSizeFlippedDrawingHandler(size: NSSize, flipped: boolean, drawingHandler: (p1: NSRect) => boolean): this;
}

declare class NSCustomTouchBarItem extends NSTouchBarItem {
  customizationLabel: string;
  setCustomizationLabel(_: string)
  view: NSView;
  setView(_: NSView)
  viewController: NSViewController;
  setViewController(_: NSViewController)
}

declare var NSDarkGray: number;

declare class NSDataAsset extends NSObject implements NSCopying {
  readonly data: Data;
  readonly name: string;
  readonly typeIdentifier: string;
  static createWithName(name: string): this;
  static createWithNameBundle(name: string, bundle: Bundle): this;
}

declare var NSDataBinding: string;

declare class NSDatePicker extends NSControl {
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  isBezeled: boolean;
  setBezeled(_: boolean)
  isBordered: boolean;
  setBordered(_: boolean)
  calendar: NSCalendar;
  setCalendar(_: NSCalendar)
  datePickerElements: NSDatePicker.ElementFlags;
  setDatePickerElements(_: NSDatePicker.ElementFlags)
  datePickerMode: NSDatePicker.Mode;
  setDatePickerMode(_: NSDatePicker.Mode)
  datePickerStyle: NSDatePicker.Style;
  setDatePickerStyle(_: NSDatePicker.Style)
  dateValue: Date;
  setDateValue(_: Date)
  delegate: NSDatePickerCellDelegate;
  setDelegate(_: NSDatePickerCellDelegate)
  drawsBackground: boolean;
  setDrawsBackground(_: boolean)
  locale: Locale;
  setLocale(_: Locale)
  maxDate: Date;
  setMaxDate(_: Date)
  minDate: Date;
  setMinDate(_: Date)
  presentsCalendarOverlay: boolean;
  setPresentsCalendarOverlay(_: boolean)
  textColor: NSColor;
  setTextColor(_: NSColor)
  timeInterval: number;
  setTimeInterval(_: number)
  timeZone: NSTimeZone;
  setTimeZone(_: NSTimeZone)
}

declare class NSDatePickerCell extends NSActionCell {
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  calendar: NSCalendar;
  setCalendar(_: NSCalendar)
  datePickerElements: NSDatePicker.ElementFlags;
  setDatePickerElements(_: NSDatePicker.ElementFlags)
  datePickerMode: NSDatePicker.Mode;
  setDatePickerMode(_: NSDatePicker.Mode)
  datePickerStyle: NSDatePicker.Style;
  setDatePickerStyle(_: NSDatePicker.Style)
  dateValue: Date;
  setDateValue(_: Date)
  delegate: NSDatePickerCellDelegate;
  setDelegate(_: NSDatePickerCellDelegate)
  drawsBackground: boolean;
  setDrawsBackground(_: boolean)
  locale: Locale;
  setLocale(_: Locale)
  maxDate: Date;
  setMaxDate(_: Date)
  minDate: Date;
  setMinDate(_: Date)
  textColor: NSColor;
  setTextColor(_: NSColor)
  timeInterval: number;
  setTimeInterval(_: number)
  timeZone: NSTimeZone;
  setTimeZone(_: NSTimeZone)
}

interface NSDatePickerCellDelegate extends NSObject {
  datePickerCellValidateProposedDateValueTimeInterval?(_: NSDatePickerCell, validateProposedDateValue: Date, timeInterval?: number): void;
}

declare var NSDatePickerCellDelegate: {
  prototype: NSDatePickerCellDelegate;
};

declare var NSDefaultAttributesDocumentAttribute: string;

declare var NSDefaultAttributesDocumentOption: string;

declare var NSDefaultTabIntervalDocumentAttribute: string;

declare var NSDefinitionPresentationTypeDictionaryApplication: string;

declare var NSDefinitionPresentationTypeKey: string;

declare var NSDefinitionPresentationTypeOverlay: string;


declare const NSDeleteCharFunctionKey: number;

declare const NSDeleteCharacter: number;

declare const NSDeleteFunctionKey: number;

declare const NSDeleteLineFunctionKey: number;
declare var NSDeletesObjectsOnRemoveBindingsOption: string;

declare var NSDeviceBitsPerSample: string;

declare var NSDeviceCMYKColorSpace: string;

declare var NSDeviceColorSpaceName: string;

declare var NSDeviceIsPrinter: string;

declare var NSDeviceIsScreen: string;

declare var NSDeviceRGBColorSpace: string;

declare var NSDeviceResolution: string;

declare var NSDeviceSize: string;

declare var NSDeviceWhiteColorSpace: string;

declare class NSDictionaryController extends NSArrayController {
  excludedKeys: NSArray<string>;
  setExcludedKeys(_: NSArray<string>)
  includedKeys: NSArray<string>;
  setIncludedKeys(_: NSArray<string>)
  initialKey: string;
  setInitialKey(_: string)
  initialValue: any;
  setInitialValue(_: any)
  localizedKeyDictionary: NSDictionary<string, string>;
  setLocalizedKeyDictionary(_: NSDictionary<string, string>)
  localizedKeyTable: string;
  setLocalizedKeyTable(_: string)
  newObject(): NSDictionaryControllerKeyValuePair;
}

declare class NSDictionaryControllerKeyValuePair extends NSObject {
  readonly isExplicitlyIncluded: boolean;
  key: string;
  setKey(_: string)
  localizedKey: string;
  setLocalizedKey(_: string)
  value: any;
  setValue(_: any)
}

declare class NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType> extends NSObject implements NSCopying {
  readonly itemIdentifiers: NSArray<ItemIdentifierType>;
  readonly numberOfItems: number;
  readonly numberOfSections: number;
  readonly sectionIdentifiers: NSArray<SectionIdentifierType>;
  appendItemsWithIdentifiers(_: NSArray<ItemIdentifierType>): void;
  appendItemsWithIdentifiersIntoSectionWithIdentifier(_: NSArray<ItemIdentifierType>, intoSectionWithIdentifier: SectionIdentifierType): void;
  appendSectionsWithIdentifiers(_: NSArray<any>): void;
  deleteAllItems(): void;
  deleteItemsWithIdentifiers(_: NSArray<ItemIdentifierType>): void;
  deleteSectionsWithIdentifiers(_: NSArray<SectionIdentifierType>): void;
  indexOfItemIdentifier(_: ItemIdentifierType): number;
  indexOfSectionIdentifier(_: SectionIdentifierType): number;
  insertItemsWithIdentifiersAfterItemWithIdentifier(_: NSArray<ItemIdentifierType>, afterItemWithIdentifier: ItemIdentifierType): void;
  insertItemsWithIdentifiersBeforeItemWithIdentifier(_: NSArray<ItemIdentifierType>, beforeItemWithIdentifier: ItemIdentifierType): void;
  insertSectionsWithIdentifiersAfterSectionWithIdentifier(_: NSArray<SectionIdentifierType>, afterSectionWithIdentifier: SectionIdentifierType): void;
  insertSectionsWithIdentifiersBeforeSectionWithIdentifier(_: NSArray<SectionIdentifierType>, beforeSectionWithIdentifier: SectionIdentifierType): void;
  itemIdentifiersInSectionWithIdentifier(_: SectionIdentifierType): NSArray<ItemIdentifierType>;
  moveItemWithIdentifierAfterItemWithIdentifier(_: ItemIdentifierType, afterItemWithIdentifier: ItemIdentifierType): void;
  moveItemWithIdentifierBeforeItemWithIdentifier(_: ItemIdentifierType, beforeItemWithIdentifier: ItemIdentifierType): void;
  moveSectionWithIdentifierAfterSectionWithIdentifier(_: SectionIdentifierType, afterSectionWithIdentifier: SectionIdentifierType): void;
  moveSectionWithIdentifierBeforeSectionWithIdentifier(_: SectionIdentifierType, beforeSectionWithIdentifier: SectionIdentifierType): void;
  numberOfItemsInSection(_: SectionIdentifierType): number;
  reloadItemsWithIdentifiers(_: NSArray<ItemIdentifierType>): void;
  reloadSectionsWithIdentifiers(_: NSArray<SectionIdentifierType>): void;
  sectionIdentifierForSectionContainingItemIdentifier(_: ItemIdentifierType): SectionIdentifierType;
}

interface NSDirectionalEdgeInsets {
  top: number;
  leading: number;
  bottom: number;
  trailing: number;
}

declare var NSDirectionalEdgeInsets: NSDirectionalEdgeInsets;

declare var NSDirectionalEdgeInsetsZero: NSDirectionalEdgeInsets;

declare var NSDisplayNameBindingOption: string;

declare var NSDisplayPatternBindingOption: string;

declare var NSDisplayPatternTitleBinding: string;

declare var NSDisplayPatternValueBinding: string;


declare const NSDisplayWindowRunLoopOrdering: number;
declare var NSDocFormatTextDocumentType: string;

declare class NSDockTile extends NSObject {
  badgeLabel: string;
  setBadgeLabel(_: string)
  contentView: NSView;
  setContentView(_: NSView)
  readonly owner: any;
  showsApplicationBadge: boolean;
  setShowsApplicationBadge(_: boolean)
  readonly size: NSSize;
  display(): void;
}

interface NSDockTilePlugIn extends NSObject {
  dockMenu?(): NSMenu;
  setDockTile(_?: NSDockTile): void;
}

declare var NSDockTilePlugIn: {
  prototype: NSDockTilePlugIn;
};

declare class NSDocument extends NSObject implements NSEditorRegistration, NSFilePresenter, NSMenuItemValidation, NSUserInterfaceValidations, NSUserActivityRestoring {
  static canConcurrentlyReadDocumentsOfType(ofType: string): boolean;
  static isNativeType(_: string): boolean;
  readonly PDFPrintOperation: NSPrintOperation;
  readonly allowsDocumentSharing: boolean;
  autosavedContentsFileURL: NSURL;
  setAutosavedContentsFileURL(_: NSURL)
  readonly autosavingFileType: string;
  readonly autosavingIsImplicitlyCancellable: boolean;
  readonly backupFileURL: NSURL;
  readonly isBrowsingVersions: boolean;
  displayName: string;
  setDisplayName(_: string)
  readonly isDocumentEdited: boolean;
  isDraft: boolean;
  setDraft(_: boolean)
  readonly isEntireFileLoaded: boolean;
  fileModificationDate: Date;
  setFileModificationDate(_: Date)
  readonly fileNameExtensionWasHiddenInLastRunSavePanel: boolean;
  fileType: string;
  setFileType(_: string)
  readonly fileTypeFromLastRunSavePanel: string;
  fileURL: NSURL;
  setFileURL(_: NSURL)
  readonly hasUnautosavedChanges: boolean;
  hasUndoManager: boolean;
  setHasUndoManager(_: boolean)
  readonly isInViewingMode: boolean;
  readonly keepBackupFile: boolean;
  lastComponentOfFileName: string;
  setLastComponentOfFileName(_: string)
  readonly isLocked: boolean;
  printInfo: NSPrintInfo;
  setPrintInfo(_: NSPrintInfo)
  readonly shouldRunSavePanelWithAccessoryView: boolean;
  undoManager: UndoManager;
  setUndoManager(_: UndoManager)
  userActivity: NSUserActivity;
  setUserActivity(_: NSUserActivity)
  readonly windowControllers: NSArray<NSWindowController>;
  readonly windowForSheet: NSWindow;
  readonly windowNibName: string;
  static autosavesDrafts(): boolean;
  static autosavesInPlace(): boolean;
  static preservesVersions(): boolean;
  static readableTypes(): NSArray<string>;
  static restorableStateKeyPaths(): NSArray<string>;
  static usesUbiquitousStorage(): boolean;
  static writableTypes(): NSArray<string>;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly observedPresentedItemUbiquityAttributes: Set<string>; // inherited from NSFilePresenter
  readonly presentedItemOperationQueue: OperationQueue; // inherited from NSFilePresenter
  readonly presentedItemURL: NSURL; // inherited from NSFilePresenter
  readonly primaryPresentedItemURL: NSURL; // inherited from NSFilePresenter
  readonly superclass: typeof NSObject; // inherited from NSObject
  accommodatePresentedItemDeletionWithCompletionHandler(completionHandler?: (p1: Error) => void): void;
  accommodatePresentedSubitemDeletionAtURLCompletionHandler(at: NSURL, completionHandler?: (p1: Error) => void): void;
  addWindowController(_: NSWindowController): void;
  autosaveDocumentWithDelegateDidAutosaveSelectorContextInfo(withDelegate?: any, didAutosave?: string, contextInfo?: any): void;
  autosaveWithImplicitCancellabilityCompletionHandler(withImplicitCancellability: boolean, completionHandler?: (p1: Error) => void): void;
  browseDocumentVersions(_?: any): void;
  canAsynchronouslyWriteToURLOfTypeForSaveOperation(to: NSURL, ofType: string, for_: NSDocument.SaveOperationType): boolean;
  canCloseDocumentWithDelegateShouldCloseSelectorContextInfo(withDelegate: any, shouldClose?: string, contextInfo?: any): void;
  changeCountTokenForSaveOperation(for_: NSDocument.SaveOperationType): any;
  checkAutosavingSafetyAndReturnError(): boolean;
  close(): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  continueActivityUsingBlock(_: () => void): void;
  continueAsynchronousWorkOnMainThreadUsingBlock(_: () => void): void;
  dataOfTypeError(error: string): Data;
  defaultDraftName(): string;
  duplicateAndReturnError(): NSDocument;
  duplicateDocument(_?: any): void;
  duplicateDocumentWithDelegateDidDuplicateSelectorContextInfo(withDelegate?: any, didDuplicate?: string, contextInfo?: any): void;
  encodeRestorableStateWithCoder(with_: NSCoder): void;
  encodeRestorableStateWithCoderBackgroundQueue(with_: NSCoder, backgroundQueue: OperationQueue): void;
  fileAttributesToWriteToURLOfTypeForSaveOperationOriginalContentsURLError(ofType: NSURL, forSaveOperation: string, originalContentsURL: NSDocument.SaveOperationType, error?: NSURL): NSDictionary<string, any>;
  fileNameExtensionForTypeSaveOperation(forType: string, saveOperation: NSDocument.SaveOperationType): string;
  fileWrapperOfTypeError(error: string): FileWrapper;
  handleCloseScriptCommand(_: NSCloseCommand): any;
  handlePrintScriptCommand(_: NSScriptCommand): any;
  handleSaveScriptCommand(_: NSScriptCommand): any;
  static createForURLWithContentsOfURLOfType(forURL?: NSURL, withContentsOfURL: NSURL, ofType: string): this;
  static createWithContentsOfURLOfType(contentsOfURL: NSURL, ofType: string): this;
  static createWithType(type: string): this;
  invalidateRestorableState(): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  lockDocument(_?: any): void;
  lockDocumentWithCompletionHandler(completionHandler?: (p1: boolean) => void): void;
  lockWithCompletionHandler(completionHandler?: (p1: Error) => void): void;
  makeWindowControllers(): void;
  moveDocument(_?: any): void;
  moveDocumentToUbiquityContainer(_?: any): void;
  moveDocumentWithCompletionHandler(completionHandler?: (p1: boolean) => void): void;
  moveToURLCompletionHandler(to: NSURL, completionHandler?: (p1: Error) => void): void;
  objectDidBeginEditing(_: NSEditor): void;
  objectDidEndEditing(_: NSEditor): void;
  performActivityWithSynchronousWaitingUsingBlock(withSynchronousWaiting: boolean, using: (p1: () => void) => void): void;
  performAsynchronousFileAccessUsingBlock(_: (p1: () => void) => void): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  performSynchronousFileAccessUsingBlock(_: () => void): void;
  preparePageLayout(_: NSPageLayout): boolean;
  prepareSavePanel(_: NSSavePanel): boolean;
  prepareSharingServicePicker(_: NSSharingServicePicker): void;
  presentError(_: Error): boolean;
  presentErrorModalForWindowDelegateDidPresentSelectorContextInfo(_: Error, modalFor: NSWindow, delegate?: any, didPresent?: string, contextInfo?: any): void;
  presentedItemDidChange(): void;
  presentedItemDidChangeUbiquityAttributes(_: Set<string>): void;
  presentedItemDidGainVersion(_: NSFileVersion): void;
  presentedItemDidLoseVersion(_: NSFileVersion): void;
  presentedItemDidMoveToURL(to: NSURL): void;
  presentedItemDidResolveConflictVersion(_: NSFileVersion): void;
  presentedSubitemAtURLDidGainVersion(at: NSURL, didGain: NSFileVersion): void;
  presentedSubitemAtURLDidLoseVersion(at: NSURL, didLose: NSFileVersion): void;
  presentedSubitemAtURLDidMoveToURL(at: NSURL, didMoveTo: NSURL): void;
  presentedSubitemAtURLDidResolveConflictVersion(at: NSURL, didResolve: NSFileVersion): void;
  presentedSubitemDidAppearAtURL(at: NSURL): void;
  presentedSubitemDidChangeAtURL(at: NSURL): void;
  printDocument(_?: any): void;
  printDocumentWithSettingsShowPrintPanelDelegateDidPrintSelectorContextInfo(withSettings: NSDictionary<string, any>, showPrintPanel: boolean, delegate?: any, didPrint?: string, contextInfo?: any): void;
  printOperationWithSettingsError(error: NSDictionary<string, any>): NSPrintOperation;
  readFromDataOfTypeError(ofType: Data, error: string): boolean;
  readFromFileWrapperOfTypeError(ofType: FileWrapper, error: string): boolean;
  readFromURLOfTypeError(ofType: NSURL, error: string): boolean;
  relinquishPresentedItemToReader(toReader?: (p1: () => void) => void): void;
  relinquishPresentedItemToWriter(toWriter?: (p1: () => void) => void): void;
  removeWindowController(_: NSWindowController): void;
  renameDocument(_?: any): void;
  respondsToSelector(_: string): boolean;
  restoreDocumentWindowWithIdentifierStateCompletionHandler(withIdentifier: string, state: NSCoder, completionHandler?: (p1: NSWindow, p2: Error) => void): void;
  restoreStateWithCoder(with_: NSCoder): void;
  restoreUserActivityState(_: NSUserActivity): void;
  revertDocumentToSaved(_?: any): void;
  revertToContentsOfURLOfTypeError(ofType: NSURL, error: string): boolean;
  runModalPageLayoutWithPrintInfoDelegateDidRunSelectorContextInfo(with_: NSPrintInfo, delegate?: any, didRun?: string, contextInfo?: any): void;
  runModalPrintOperationDelegateDidRunSelectorContextInfo(_: NSPrintOperation, delegate?: any, didRun?: string, contextInfo?: any): void;
  runModalSavePanelForSaveOperationDelegateDidSaveSelectorContextInfo(for_: NSDocument.SaveOperationType, delegate?: any, didSave?: string, contextInfo?: any): void;
  runPageLayout(_?: any): void;
  saveDocument(_?: any): void;
  saveDocumentAs(_?: any): void;
  saveDocumentTo(_?: any): void;
  saveDocumentToPDF(_?: any): void;
  saveDocumentWithDelegateDidSaveSelectorContextInfo(withDelegate?: any, didSave?: string, contextInfo?: any): void;
  savePresentedItemChangesWithCompletionHandler(completionHandler?: (p1: Error) => void): void;
  saveToURLOfTypeForSaveOperationCompletionHandler(to: NSURL, ofType: string, for_: NSDocument.SaveOperationType, completionHandler?: (p1: Error) => void): void;
  saveToURLOfTypeForSaveOperationDelegateDidSaveSelectorContextInfo(to: NSURL, ofType: string, for_: NSDocument.SaveOperationType, delegate?: any, didSave?: string, contextInfo?: any): void;
  scheduleAutosaving(): void;
  self(): this;
  setDisplayName(_?: string): void;
  setWindow(_?: NSWindow): void;
  shareDocumentWithSharingServiceCompletionHandler(with_: NSSharingService, completionHandler?: (p1: boolean) => void): void;
  shouldChangePrintInfo(_: NSPrintInfo): boolean;
  shouldCloseWindowControllerDelegateShouldCloseSelectorContextInfo(_: NSWindowController, delegate?: any, shouldClose?: string, contextInfo?: any): void;
  showWindows(): void;
  stopBrowsingVersionsWithCompletionHandler(completionHandler?: () => void): void;
  unblockUserInteraction(): void;
  unlockDocument(_?: any): void;
  unlockDocumentWithCompletionHandler(completionHandler?: (p1: boolean) => void): void;
  unlockWithCompletionHandler(completionHandler?: (p1: Error) => void): void;
  updateChangeCount(_: NSDocument.ChangeType): void;
  updateChangeCountWithTokenForSaveOperation(withToken: any, for_: NSDocument.SaveOperationType): void;
  updateUserActivityState(_: NSUserActivity): void;
  validateMenuItem(_: NSMenuItem): boolean;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
  willNotPresentError(_: Error): void;
  willPresentError(_: Error): Error;
  windowControllerDidLoadNib(_: NSWindowController): void;
  windowControllerWillLoadNib(_: NSWindowController): void;
  writableTypesForSaveOperation(for_: NSDocument.SaveOperationType): NSArray<string>;
  writeSafelyToURLOfTypeForSaveOperationError(ofType: NSURL, forSaveOperation: string, error: NSDocument.SaveOperationType): boolean;
  writeToURLOfTypeError(ofType: NSURL, error: string): boolean;
  writeToURLOfTypeForSaveOperationOriginalContentsURLError(ofType: NSURL, forSaveOperation: string, originalContentsURL: NSDocument.SaveOperationType, error?: NSURL): boolean;
}

declare class NSDocumentController extends NSObject implements NSCoding, NSMenuItemValidation, NSUserInterfaceValidations, NSWindowRestoration {
  static restoreWindowWithIdentifierStateCompletionHandler(withIdentifier: string, state: NSCoder, completionHandler?: (p1: NSWindow, p2: Error) => void): void;
  readonly allowsAutomaticShareMenu: boolean;
  autosavingDelay: number;
  setAutosavingDelay(_: number)
  readonly currentDirectory: string;
  readonly currentDocument: NSDocument;
  readonly defaultType: string;
  readonly documentClassNames: NSArray<string>;
  readonly documents: NSArray<NSDocument>;
  readonly hasEditedDocuments: boolean;
  readonly maximumRecentDocumentCount: number;
  readonly recentDocumentURLs: NSArray<NSURL>;
  static sharedDocumentController(): NSDocumentController;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  URLsFromRunningOpenPanel(): NSArray<NSURL>;
  addDocument(_: NSDocument): void;
  beginOpenPanelForTypesCompletionHandler(_: NSOpenPanel, forTypes?: NSArray<string>, completionHandler: (p1: number) => void): void;
  beginOpenPanelWithCompletionHandler(completionHandler?: (p1: NSArray<NSURL>) => void): void;
  clearRecentDocuments(_?: any): void;
  closeAllDocumentsWithDelegateDidCloseAllSelectorContextInfo(withDelegate?: any, didCloseAllSelector?: string, contextInfo?: any): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  displayNameForType(forType: string): string;
  documentClassForType(forType: string): typeof NSObject;
  documentForURL(for_: NSURL): NSDocument;
  documentForWindow(for_: NSWindow): NSDocument;
  duplicateDocumentWithContentsOfURLCopyingDisplayNameError(copying: NSURL, displayName: boolean, error?: string): NSDocument;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  makeDocumentForURLWithContentsOfURLOfTypeError(withContentsOfURL?: NSURL, ofType: NSURL, error: string): NSDocument;
  makeDocumentWithContentsOfURLOfTypeError(ofType: NSURL, error: string): NSDocument;
  makeUntitledDocumentOfTypeError(error: string): NSDocument;
  newDocument(_?: any): void;
  noteNewRecentDocument(_: NSDocument): void;
  noteNewRecentDocumentURL(_: NSURL): void;
  openDocument(_?: any): void;
  openDocumentWithContentsOfURLDisplayCompletionHandler(withContentsOf: NSURL, display: boolean, completionHandler?: (p1: NSDocument, p2: boolean, p3: Error) => void): void;
  openUntitledDocumentAndDisplayError(error: boolean): NSDocument;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  presentError(_: Error): boolean;
  presentErrorModalForWindowDelegateDidPresentSelectorContextInfo(_: Error, modalFor: NSWindow, delegate?: any, didPresent?: string, contextInfo?: any): void;
  removeDocument(_: NSDocument): void;
  reopenDocumentForURLWithContentsOfURLDisplayCompletionHandler(for_?: NSURL, withContentsOf: NSURL, display: boolean, completionHandler?: (p1: NSDocument, p2: boolean, p3: Error) => void): void;
  respondsToSelector(_: string): boolean;
  reviewUnsavedDocumentsWithAlertTitleCancellableDelegateDidReviewAllSelectorContextInfo(withAlertTitle?: string, cancellable: boolean, delegate?: any, didReviewAllSelector?: string, contextInfo?: any): void;
  runModalOpenPanelForTypes(_: NSOpenPanel, forTypes?: NSArray<string>): number;
  saveAllDocuments(_?: any): void;
  self(): this;
  standardShareMenuItem(): NSMenuItem;
  typeForContentsOfURLError(error: NSURL): string;
  validateMenuItem(_: NSMenuItem): boolean;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
  willPresentError(_: Error): Error;
}

declare var NSDocumentEditedBinding: string;

declare var NSDocumentTypeDocumentAttribute: string;

declare var NSDocumentTypeDocumentOption: string;

declare function NSDottedFrameRect(rect: NSRect): void;
declare var NSDoubleClickArgumentBinding: string;

declare var NSDoubleClickTargetBinding: string;


declare const NSDownArrowFunctionKey: number;

declare const NSDownTextMovement: number;
interface NSDraggingDestination extends NSObject {
  concludeDragOperation?(_?: NSDraggingInfo): void;
  draggingEnded?(_: NSDraggingInfo): void;
  draggingEntered?(_: NSDraggingInfo): NSDragOperation;
  draggingExited?(_?: NSDraggingInfo): void;
  draggingUpdated?(_: NSDraggingInfo): NSDragOperation;
  performDragOperation?(_: NSDraggingInfo): boolean;
  prepareForDragOperation?(_: NSDraggingInfo): boolean;
  updateDraggingItemsForDrag?(_?: NSDraggingInfo): void;
  wantsPeriodicDraggingUpdates?(): boolean;
}

declare var NSDraggingDestination: {
  prototype: NSDraggingDestination;
};

declare var NSDraggingException: string;

declare class NSDraggingImageComponent extends NSObject {
  static draggingImageComponentWithKey(key: string): NSDraggingImageComponent;
  contents: any;
  setContents(_: any)
  frame: NSRect;
  setFrame(_: NSRect)
  key: string;
  setKey(_: string)
  static createWithKey(key: string): this;
}

declare var NSDraggingImageComponentIconKey: string;

declare var NSDraggingImageComponentLabelKey: string;

interface NSDraggingInfo extends NSObject {
  animatesToDestination: boolean;
  setAnimatesToDestination(_: boolean)
  draggedImage: NSImage;
  draggedImageLocation: NSPoint;
  draggingDestinationWindow: NSWindow;
  draggingFormation: NSDraggingFormation;
  setDraggingFormation(_: NSDraggingFormation)
  draggingLocation: NSPoint;
  draggingPasteboard: NSPasteboard;
  draggingSequenceNumber: number;
  draggingSource: any;
  draggingSourceOperationMask: NSDragOperation;
  numberOfValidItemsForDrop: number;
  setNumberOfValidItemsForDrop(_: number)
  springLoadingHighlight: NSSpringLoadingHighlight;
  enumerateDraggingItemsWithOptionsForViewClassesSearchOptionsUsingBlock(options: NSDraggingItemEnumerationOptions, for_?: NSView, classes: NSArray<typeof NSObject>, searchOptions: NSDictionary<string, any>, using: (p1: NSDraggingItem, p2: number, p3: boolean) => void): void;
  resetSpringLoading(): void;
  slideDraggedImageTo(to: NSPoint): void;
}

declare var NSDraggingInfo: {
  prototype: NSDraggingInfo;
};

declare class NSDraggingItem extends NSObject {
  draggingFrame: NSRect;
  setDraggingFrame(_: NSRect)
  readonly imageComponents: NSArray<NSDraggingImageComponent>;
  imageComponentsProvider: () => NSArray<NSDraggingImageComponent>;
  setImageComponentsProvider(_: () => NSArray<NSDraggingImageComponent>)
  readonly item: any;
  static createWithPasteboardWriter(pasteboardWriter: NSPasteboardWriting): this;
  setDraggingFrameContents(_: NSRect, contents?: any): void;
}

declare class NSDraggingSession extends NSObject {
  animatesToStartingPositionsOnCancelOrFail: boolean;
  setAnimatesToStartingPositionsOnCancelOrFail(_: boolean)
  draggingFormation: NSDraggingFormation;
  setDraggingFormation(_: NSDraggingFormation)
  draggingLeaderIndex: number;
  setDraggingLeaderIndex(_: number)
  readonly draggingLocation: NSPoint;
  readonly draggingPasteboard: NSPasteboard;
  readonly draggingSequenceNumber: number;
  enumerateDraggingItemsWithOptionsForViewClassesSearchOptionsUsingBlock(options: NSDraggingItemEnumerationOptions, for_?: NSView, classes: NSArray<typeof NSObject>, searchOptions: NSDictionary<string, any>, using: (p1: NSDraggingItem, p2: number, p3: boolean) => void): void;
}

interface NSDraggingSource extends NSObject {
  draggingSessionSourceOperationMaskForDraggingContext(_: NSDraggingSession, sourceOperationMaskFor: NSDraggingContext): NSDragOperation;
  draggingSessionWillBeginAtPoint?(_: NSDraggingSession, willBeginAt: NSPoint): void;
  draggingSessionMovedToPoint?(_: NSDraggingSession, movedTo: NSPoint): void;
  draggingSessionEndedAtPointOperation?(_: NSDraggingSession, endedAt: NSPoint, operation: NSDragOperation): void;
  ignoreModifierKeysForDraggingSession?(for_: NSDraggingSession): boolean;
}

declare var NSDraggingSource: {
  prototype: NSDraggingSource;
};

declare function NSDrawBitmap(rect: NSRect, width: number, height: number, bps: number, spp: number, bpp: number, bpr: number, isPlanar: boolean, hasAlpha: boolean, colorSpaceName: string, data: string): void;
declare function NSDrawButton(rect: NSRect, clipRect: NSRect): void;
declare function NSDrawColorTiledRects(boundsRect: NSRect, clipRect: NSRect, sides: NSRectEdge, colors: NSColor, count: number): NSRect;
declare function NSDrawDarkBezel(rect: NSRect, clipRect: NSRect): void;
declare function NSDrawGrayBezel(rect: NSRect, clipRect: NSRect): void;
declare function NSDrawGroove(rect: NSRect, clipRect: NSRect): void;
declare function NSDrawLightBezel(rect: NSRect, clipRect: NSRect): void;
declare function NSDrawNinePartImage(frame: NSRect, topLeftCorner: NSImage, topEdgeFill: NSImage, topRightCorner: NSImage, leftEdgeFill: NSImage, centerFill: NSImage, rightEdgeFill: NSImage, bottomLeftCorner: NSImage, bottomEdgeFill: NSImage, bottomRightCorner: NSImage, op: NSCompositingOperation, alphaFraction: number, flipped: boolean): void;
declare function NSDrawThreePartImage(frame: NSRect, startCap: NSImage, centerFill: NSImage, endCap: NSImage, vertical: boolean, op: NSCompositingOperation, alphaFraction: number, flipped: boolean): void;
declare function NSDrawTiledRects(boundsRect: NSRect, clipRect: NSRect, sides: NSRectEdge, grays: number, count: number): NSRect;
declare function NSDrawWhiteBezel(rect: NSRect, clipRect: NSRect): void;
declare function NSDrawWindowBackground(rect: NSRect): void;
interface NSDrawerDelegate extends NSObject {
}

declare var NSDrawerDelegate: {
  prototype: NSDrawerDelegate;
};

declare class NSEPSImageRep extends NSImageRep {
  readonly EPSRepresentation: Data;
  readonly boundingBox: NSRect;
  static createWithData(data: Data): this;
}

declare var NSEditableBinding: string;

interface NSEditor extends NSObject {
  commitEditing(): boolean;
  commitEditingWithDelegateDidCommitSelectorContextInfo(withDelegate?: any, didCommit?: string, contextInfo?: any): void;
  commitEditingAndReturnError(): boolean;
  discardEditing(): void;
}

declare var NSEditor: {
  prototype: NSEditor;
};

declare var NSEditorDocumentAttribute: string;

interface NSEditorRegistration extends NSObject {
  objectDidBeginEditing?(_: NSEditor): void;
  objectDidEndEditing?(_: NSEditor): void;
}

declare var NSEditorRegistration: {
  prototype: NSEditorRegistration;
};

declare var NSEnabledBinding: string;


declare const NSEndFunctionKey: number;

declare const NSEnterCharacter: number;
declare var NSEraDatePickerElementFlag: NSDatePicker.ElementFlags;

declare function NSEraseRect(rect: NSRect): void;
declare var NSEvenOddWindingRule: NSBezierPath.WindingRule;

declare class NSEvent extends NSObject implements NSCoding, NSCopying {
  static addGlobalMonitorForEventsMatchingMaskHandler(matching: NSEvent.EventTypeMask, handler: (p1: NSEvent) => void): any;
  static addLocalMonitorForEventsMatchingMaskHandler(matching: NSEvent.EventTypeMask, handler?: (p1: NSEvent) => NSEvent): any;
  static enterExitEventWithTypeLocationModifierFlagsTimestampWindowNumberContextEventNumberTrackingNumberUserData(with_: NSEvent.EventType, location: NSPoint, modifierFlags: NSEvent.ModifierFlags, timestamp: number, windowNumber: number, context?: NSGraphicsContext, eventNumber: number, trackingNumber: number, userData?: any): NSEvent;
  static keyEventWithTypeLocationModifierFlagsTimestampWindowNumberContextCharactersCharactersIgnoringModifiersIsARepeatKeyCode(with_: NSEvent.EventType, location: NSPoint, modifierFlags: NSEvent.ModifierFlags, timestamp: number, windowNumber: number, context?: NSGraphicsContext, characters: string, charactersIgnoringModifiers: string, isARepeat: boolean, keyCode: number): NSEvent;
  static mouseEventWithTypeLocationModifierFlagsTimestampWindowNumberContextEventNumberClickCountPressure(with_: NSEvent.EventType, location: NSPoint, modifierFlags: NSEvent.ModifierFlags, timestamp: number, windowNumber: number, context?: NSGraphicsContext, eventNumber: number, clickCount: number, pressure: number): NSEvent;
  static otherEventWithTypeLocationModifierFlagsTimestampWindowNumberContextSubtypeData1Data2(with_: NSEvent.EventType, location: NSPoint, modifierFlags: NSEvent.ModifierFlags, timestamp: number, windowNumber: number, context?: NSGraphicsContext, subtype: number, data1: number, data2: number): NSEvent;
  static removeMonitor(_: any): void;
  static startPeriodicEventsAfterDelayWithPeriod(afterDelay: number, withPeriod: number): void;
  static stopPeriodicEvents(): void;
  readonly isARepeat: boolean;
  readonly CGEvent: any;
  readonly absoluteX: number;
  readonly absoluteY: number;
  readonly absoluteZ: number;
  readonly associatedEventsMask: NSEvent.EventTypeMask;
  readonly buttonMask: NSEvent.ButtonMask;
  readonly buttonNumber: number;
  readonly capabilityMask: number;
  readonly characters: string;
  readonly charactersIgnoringModifiers: string;
  readonly clickCount: number;
  readonly data1: number;
  readonly data2: number;
  readonly deltaX: number;
  readonly deltaY: number;
  readonly deltaZ: number;
  readonly deviceID: number;
  readonly isDirectionInvertedFromDevice: boolean;
  readonly isEnteringProximity: boolean;
  readonly eventNumber: number;
  readonly eventRef: any;
  readonly hasPreciseScrollingDeltas: boolean;
  readonly keyCode: number;
  readonly locationInWindow: NSPoint;
  readonly magnification: number;
  readonly modifierFlags: NSEvent.ModifierFlags;
  readonly momentumPhase: NSEvent.Phase;
  readonly phase: NSEvent.Phase;
  readonly pointingDeviceID: number;
  readonly pointingDeviceSerialNumber: number;
  readonly pointingDeviceType: NSEvent.PointingDeviceType;
  readonly pressure: number;
  readonly pressureBehavior: NSEvent.PressureBehavior;
  readonly rotation: number;
  readonly scrollingDeltaX: number;
  readonly scrollingDeltaY: number;
  readonly stage: number;
  readonly stageTransition: number;
  readonly subtype: NSEvent.EventSubtype;
  readonly systemTabletID: number;
  readonly tabletID: number;
  readonly tangentialPressure: number;
  readonly tilt: NSPoint;
  readonly timestamp: number;
  readonly trackingArea: NSTrackingArea;
  readonly trackingNumber: number;
  readonly type: NSEvent.EventType;
  readonly uniqueID: number;
  readonly userData: any;
  readonly vendorDefined: any;
  readonly vendorID: number;
  readonly vendorPointingDeviceType: number;
  readonly window: NSWindow;
  readonly windowNumber: number;
  static doubleClickInterval(): number;
  static keyRepeatDelay(): number;
  static keyRepeatInterval(): number;
  static modifierFlags(): NSEvent.ModifierFlags;
  static isMouseCoalescingEnabled: boolean;
  setMouseCoalescingEnabled(_: boolean)
  static mouseLocation(): NSPoint;
  static pressedMouseButtons(): number;
  static isSwipeTrackingFromScrollEventsEnabled(): boolean;
  allTouches(): Set<NSTouch>;
  charactersByApplyingModifiers(byApplyingModifiers: NSEvent.ModifierFlags): string;
  coalescedTouchesForTouch(for_: NSTouch): NSArray<NSTouch>;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  touchesForView(for_: NSView): Set<NSTouch>;
  touchesMatchingPhaseInView(matching: NSTouch.Phase, in_?: NSView): Set<NSTouch>;
  trackSwipeEventWithOptionsDampenAmountThresholdMinMaxUsingHandler(options: NSEvent.SwipeTrackingOptions, dampenAmountThresholdMin: number, max: number, usingHandler: (p1: number, p2: NSEvent.Phase, p3: boolean, p4: boolean) => void): void;
}

declare var NSEventDurationForever: number;

declare var NSEventTrackingRunLoopMode: string;

declare var NSExcludedElementsDocumentAttribute: string;

declare var NSExcludedKeysBinding: string;


declare const NSExecuteFunctionKey: number;
declare var NSExpansionAttributeName: string;


declare const NSF10FunctionKey: number;

declare const NSF11FunctionKey: number;

declare const NSF12FunctionKey: number;

declare const NSF13FunctionKey: number;

declare const NSF14FunctionKey: number;

declare const NSF15FunctionKey: number;

declare const NSF16FunctionKey: number;

declare const NSF17FunctionKey: number;

declare const NSF18FunctionKey: number;

declare const NSF19FunctionKey: number;

declare const NSF1FunctionKey: number;

declare const NSF20FunctionKey: number;

declare const NSF21FunctionKey: number;

declare const NSF22FunctionKey: number;

declare const NSF23FunctionKey: number;

declare const NSF24FunctionKey: number;

declare const NSF25FunctionKey: number;

declare const NSF26FunctionKey: number;

declare const NSF27FunctionKey: number;

declare const NSF28FunctionKey: number;

declare const NSF29FunctionKey: number;

declare const NSF2FunctionKey: number;

declare const NSF30FunctionKey: number;

declare const NSF31FunctionKey: number;

declare const NSF32FunctionKey: number;

declare const NSF33FunctionKey: number;

declare const NSF34FunctionKey: number;

declare const NSF35FunctionKey: number;

declare const NSF3FunctionKey: number;

declare const NSF4FunctionKey: number;

declare const NSF5FunctionKey: number;

declare const NSF6FunctionKey: number;

declare const NSF7FunctionKey: number;

declare const NSF8FunctionKey: number;

declare const NSF9FunctionKey: number;

declare const NSFPCurrentField: number;

declare const NSFPPreviewButton: number;

declare const NSFPPreviewField: number;

declare const NSFPRevertButton: number;

declare const NSFPSetButton: number;

declare const NSFPSizeField: number;

declare const NSFPSizeTitle: number;
declare var NSFileContentsPboardType: string;

declare class NSFilePromiseProvider extends NSObject implements NSPasteboardWriting {
  delegate: NSFilePromiseProviderDelegate;
  setDelegate(_: NSFilePromiseProviderDelegate)
  fileType: string;
  setFileType(_: string)
  userInfo: any;
  setUserInfo(_: any)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  conformsToProtocol(to: any /* Protocol */): boolean;
  static createWithFileTypeDelegate(fileType: string, delegate: NSFilePromiseProviderDelegate): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  pasteboardPropertyListForType(forType: string): any;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.WritingOptions;
}

interface NSFilePromiseProviderDelegate extends NSObject {
  filePromiseProviderWritePromiseToURLCompletionHandler(_: NSFilePromiseProvider, writePromiseTo: NSURL, completionHandler?: (p1: Error) => void): void;
  filePromiseProviderFileNameForType(_: NSFilePromiseProvider, fileNameForType: string): string;
  operationQueueForFilePromiseProvider?(for_: NSFilePromiseProvider): OperationQueue;
}

declare var NSFilePromiseProviderDelegate: {
  prototype: NSFilePromiseProviderDelegate;
};

declare class NSFilePromiseReceiver extends NSObject implements NSPasteboardReading {
  static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.ReadingOptions;
  readonly fileNames: NSArray<string>;
  readonly fileTypes: NSArray<string>;
  static readableDraggedTypes(): NSArray<string>;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  conformsToProtocol(to: any /* Protocol */): boolean;
  static createWithPasteboardPropertyListOfType(pasteboardPropertyList: any, ofType: string): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  receivePromisedFilesAtDestinationOptionsOperationQueueReader(atDestination: NSURL, options: NSDictionary<any, any>, operationQueue: OperationQueue, reader?: (p1: NSURL, p2: Error) => void): void;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare var NSFileTypeDocumentAttribute: string;

declare var NSFileTypeDocumentOption: string;

declare var NSFilterPredicateBinding: string;


declare const NSFindFunctionKey: number;
declare var NSFindPanelCaseInsensitiveSearch: string;

declare var NSFindPanelSearchOptionsPboardType: string;

declare var NSFindPanelSubstringMatch: string;

declare var NSFitPagination: NSPrintInfo.PaginationMode;

declare var NSFloatingWindowLevel: number;

declare class NSFont extends NSObject implements NSCopying, NSSecureCoding {
  static boldSystemFontOfSize(ofSize: number): NSFont;
  static controlContentFontOfSize(ofSize: number): NSFont;
  static labelFontOfSize(ofSize: number): NSFont;
  static menuBarFontOfSize(ofSize: number): NSFont;
  static menuFontOfSize(ofSize: number): NSFont;
  static messageFontOfSize(ofSize: number): NSFont;
  static monospacedDigitSystemFontOfSizeWeight(ofSize: number, weight: number): NSFont;
  static monospacedSystemFontOfSizeWeight(ofSize: number, weight: number): NSFont;
  static paletteFontOfSize(ofSize: number): NSFont;
  static setUserFixedPitchFont(_?: NSFont): void;
  static setUserFont(_?: NSFont): void;
  static systemFontOfSize(ofSize: number): NSFont;
  static systemFontOfSizeWeight(ofSize: number, weight: number): NSFont;
  static systemFontSizeForControlSize(for_: NSControl.ControlSize): number;
  static titleBarFontOfSize(ofSize: number): NSFont;
  static toolTipsFontOfSize(ofSize: number): NSFont;
  static userFixedPitchFontOfSize(ofSize: number): NSFont;
  static userFontOfSize(ofSize: number): NSFont;
  readonly ascender: number;
  readonly boundingRectForFont: NSRect;
  readonly capHeight: number;
  readonly coveredCharacterSet: CharacterSet;
  readonly descender: number;
  readonly displayName: string;
  readonly familyName: string;
  readonly isFixedPitch: boolean;
  readonly fontDescriptor: NSFontDescriptor;
  readonly fontName: string;
  readonly italicAngle: number;
  readonly leading: number;
  readonly matrix: number;
  readonly maximumAdvancement: NSSize;
  readonly mostCompatibleStringEncoding: number;
  readonly numberOfGlyphs: number;
  readonly pointSize: number;
  readonly printerFont: NSFont;
  readonly renderingMode: NSFontRenderingMode;
  readonly screenFont: NSFont;
  readonly textTransform: AffineTransform;
  readonly underlinePosition: number;
  readonly underlineThickness: number;
  readonly isVertical: boolean;
  readonly verticalFont: NSFont;
  readonly xHeight: number;
  static labelFontSize(): number;
  static smallSystemFontSize(): number;
  static systemFontSize(): number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  advancementForCGGlyph(forCGGlyph: number): NSSize;
  advancementForGlyph(forGlyph: number): NSSize;
  boundingRectForCGGlyph(forCGGlyph: number): NSRect;
  boundingRectForGlyph(forGlyph: number): NSRect;
  encodeWithCoder(with_: NSCoder): void;
  getAdvancementsForCGGlyphsCount(_: NSSize, forCGGlyphs: number, count: number): void;
  getAdvancementsForGlyphsCount(_: NSSize, forGlyphs: number, count: number): void;
  getAdvancementsForPackedGlyphsLength(_: NSSize, forPackedGlyphs: any, length: number): void;
  getBoundingRectsForCGGlyphsCount(_: NSRect, forCGGlyphs: number, count: number): void;
  getBoundingRectsForGlyphsCount(_: NSRect, forGlyphs: number, count: number): void;
  glyphWithName(withName: string): number;
  static createWithCoder(coder: NSCoder): this;
  screenFontWithRenderingMode(with_: NSFontRenderingMode): NSFont;
  set(): void;
  setInContext(in_: NSGraphicsContext): void;
}


declare const NSFontAssetDownloadError: number;
declare class NSFontAssetRequest extends NSObject implements NSProgressReporting {
  readonly downloadedFontDescriptors: NSArray<NSFontDescriptor>;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly progress: Progress; // inherited from NSProgressReporting
  readonly superclass: typeof NSObject; // inherited from NSObject
  conformsToProtocol(to: any /* Protocol */): boolean;
  downloadFontAssetsWithCompletionHandler(withCompletionHandler?: (p1: Error) => boolean): void;
  static createWithFontDescriptorsOptions(fontDescriptors: NSArray<NSFontDescriptor>, options: NSFontAssetRequest.Options): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare var NSFontAttributeName: string;

declare var NSFontBinding: string;

declare var NSFontBoldBinding: string;


declare const NSFontBoldTrait: number;
declare var NSFontCascadeListAttribute: string;

interface NSFontChanging extends NSObject {
  changeFont?(_?: NSFontManager): void;
  validModesForFontPanel?(_: NSFontPanel): NSFontPanel.ModeMask;
}

declare var NSFontChanging: {
  prototype: NSFontChanging;
};

declare var NSFontCharacterSetAttribute: string;


declare const NSFontClarendonSerifsClass: number;
declare class NSFontCollection extends NSObject implements NSCoding, NSCopying, NSMutableCopying {
  static hideFontCollectionWithNameVisibilityError(visibility: string, error: NSFontCollection.Visibility): boolean;
  static renameFontCollectionWithNameVisibilityToNameError(fromName: string, visibility: NSFontCollection.Visibility, toName: string): boolean;
  static showFontCollectionWithNameVisibilityError(withName: NSFontCollection, visibility: string, error: NSFontCollection.Visibility): boolean;
  readonly exclusionDescriptors: NSArray<NSFontDescriptor>;
  readonly matchingDescriptors: NSArray<NSFontDescriptor>;
  readonly queryDescriptors: NSArray<NSFontDescriptor>;
  static allFontCollectionNames(): NSArray<string>;
  static fontCollectionWithAllAvailableDescriptors(): NSFontCollection;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  matchingDescriptorsForFamily(forFamily: string): NSArray<NSFontDescriptor>;
  matchingDescriptorsForFamilyOptions(forFamily: string, options?: NSDictionary<string, number>): NSArray<NSFontDescriptor>;
  matchingDescriptorsWithOptions(options?: NSDictionary<string, number>): NSArray<NSFontDescriptor>;
}

declare var NSFontCollectionActionKey: string;

declare var NSFontCollectionAllFonts: string;

declare var NSFontCollectionDidChangeNotification: string;

declare var NSFontCollectionDisallowAutoActivationOption: string;

declare var NSFontCollectionFavorites: string;

declare var NSFontCollectionIncludeDisabledFontsOption: string;

declare var NSFontCollectionNameKey: string;

declare var NSFontCollectionOldNameKey: string;

declare var NSFontCollectionRecentlyUsed: string;

declare var NSFontCollectionRemoveDuplicatesOption: string;

declare var NSFontCollectionUser: string;

declare var NSFontCollectionVisibilityKey: string;

declare var NSFontCollectionWasHidden: string;

declare var NSFontCollectionWasRenamed: string;

declare var NSFontCollectionWasShown: string;


declare const NSFontCondensedTrait: number;
declare class NSFontDescriptor extends NSObject implements NSCopying, NSSecureCoding {
  readonly fontAttributes: NSDictionary<string, any>;
  readonly matrix: AffineTransform;
  readonly pointSize: number;
  readonly postscriptName: string;
  readonly requiresFontAssetRequest: boolean;
  readonly symbolicTraits: NSFontDescriptor.SymbolicTraits;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  fontDescriptorByAddingAttributes(_: NSDictionary<string, any>): NSFontDescriptor;
  fontDescriptorWithDesign(_: string): this;
  fontDescriptorWithFace(_: string): NSFontDescriptor;
  fontDescriptorWithFamily(_: string): NSFontDescriptor;
  fontDescriptorWithMatrix(_: AffineTransform): NSFontDescriptor;
  fontDescriptorWithSize(_: number): NSFontDescriptor;
  fontDescriptorWithSymbolicTraits(_: NSFontDescriptor.SymbolicTraits): NSFontDescriptor;
  static createWithCoder(coder: NSCoder): this;
  static createWithFontAttributes(fontAttributes?: NSDictionary<string, any>): this;
  matchingFontDescriptorWithWithMandatoryKeys(withMandatoryKeys?: Set<string>): NSFontDescriptor;
  matchingFontDescriptorsWithWithMandatoryKeys(withMandatoryKeys?: Set<string>): NSArray<NSFontDescriptor>;
  objectForKey(forKey: string): any;
}

declare var NSFontDescriptorSystemDesignDefault: string;

declare var NSFontDescriptorSystemDesignMonospaced: string;

declare var NSFontDescriptorSystemDesignRounded: string;

declare var NSFontDescriptorSystemDesignSerif: string;


declare const NSFontErrorMaximum: number;

declare const NSFontErrorMinimum: number;

declare const NSFontExpandedTrait: number;
declare var NSFontFaceAttribute: string;

declare var NSFontFamilyAttribute: string;


declare const NSFontFamilyClassMask: number;
declare var NSFontFamilyNameBinding: string;

declare var NSFontFeatureSelectorIdentifierKey: string;

declare var NSFontFeatureSettingsAttribute: string;

declare var NSFontFeatureTypeIdentifierKey: string;

declare var NSFontFixedAdvanceAttribute: string;


declare const NSFontFreeformSerifsClass: number;
declare var NSFontIdentityMatrix: number;

declare var NSFontItalicBinding: string;


declare const NSFontItalicTrait: number;
declare class NSFontManager extends NSObject implements NSMenuItemValidation {
  static setFontManagerFactory(_?: typeof NSObject): void;
  static setFontPanelFactory(_?: typeof NSObject): void;
  action: string;
  setAction(_: string)
  readonly availableFontFamilies: NSArray<string>;
  readonly availableFonts: NSArray<string>;
  readonly currentFontAction: NSFontAction;
  isEnabled: boolean;
  setEnabled(_: boolean)
  readonly isMultiple: boolean;
  readonly selectedFont: NSFont;
  target: any;
  setTarget(_: any)
  static sharedFontManager(): NSFontManager;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  addFontTrait(_?: any): void;
  availableFontNamesWithTraits(with_: NSFontTraitMask): NSArray<string>;
  availableMembersOfFontFamily(ofFontFamily: string): NSArray<NSArray<any>>;
  conformsToProtocol(to: any /* Protocol */): boolean;
  convertAttributes(_: NSDictionary<string, any>): NSDictionary<string, any>;
  convertFont(_: NSFont): NSFont;
  convertFontToFace(_: NSFont, toFace: string): NSFont;
  convertFontToFamily(_: NSFont, toFamily: string): NSFont;
  convertFontToHaveTrait(_: NSFont, toHaveTrait: NSFontTraitMask): NSFont;
  convertFontToNotHaveTrait(_: NSFont, toNotHaveTrait: NSFontTraitMask): NSFont;
  convertFontToSize(_: NSFont, toSize: number): NSFont;
  convertFontTraits(_: NSFontTraitMask): NSFontTraitMask;
  convertWeightOfFont(_: boolean, of: NSFont): NSFont;
  fontMenu(_: boolean): NSMenu;
  fontNamedHasTraits(_: string, hasTraits: NSFontTraitMask): boolean;
  fontPanel(_: boolean): NSFontPanel;
  fontWithFamilyTraitsWeightSize(withFamily: string, traits: NSFontTraitMask, weight: number, size: number): NSFont;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  localizedNameForFamilyFace(forFamily: string, face?: string): string;
  modifyFont(_?: any): void;
  modifyFontViaPanel(_?: any): void;
  orderFrontFontPanel(_?: any): void;
  orderFrontStylesPanel(_?: any): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  removeFontTrait(_?: any): void;
  respondsToSelector(_: string): boolean;
  self(): this;
  sendAction(): boolean;
  setFontMenu(_: NSMenu): void;
  setSelectedAttributesIsMultiple(_: NSDictionary<string, any>, isMultiple: boolean): void;
  setSelectedFontIsMultiple(_: NSFont, isMultiple: boolean): void;
  traitsOfFont(of: NSFont): NSFontTraitMask;
  validateMenuItem(_: NSMenuItem): boolean;
  weightOfFont(of: NSFont): number;
}

declare var NSFontMatrixAttribute: string;


declare const NSFontModernSerifsClass: number;

declare const NSFontMonoSpaceTrait: number;
declare var NSFontNameAttribute: string;

declare var NSFontNameBinding: string;


declare const NSFontOldStyleSerifsClass: number;

declare const NSFontOrnamentalsClass: number;
declare class NSFontPanel extends NSPanel {
  accessoryView: NSView;
  setAccessoryView(_: NSView)
  isEnabled: boolean;
  setEnabled(_: boolean)
  static sharedFontPanel(): NSFontPanel;
  static sharedFontPanelExists(): boolean;
  panelConvertFont(_: NSFont): NSFont;
  reloadDefaultFontFamilies(): void;
  setPanelFontIsMultiple(_: NSFont, isMultiple: boolean): void;
}


declare const NSFontPanelAllEffectsModeMask: number;

declare const NSFontPanelAllModesMask: number;

declare const NSFontPanelCollectionModeMask: number;

declare const NSFontPanelDocumentColorEffectModeMask: number;

declare const NSFontPanelFaceModeMask: number;

declare const NSFontPanelShadowEffectModeMask: number;

declare const NSFontPanelSizeModeMask: number;

declare const NSFontPanelStandardModesMask: number;

declare const NSFontPanelStrikethroughEffectModeMask: number;

declare const NSFontPanelTextColorEffectModeMask: number;

declare const NSFontPanelUnderlineEffectModeMask: number;

declare const NSFontSansSerifClass: number;

declare const NSFontScriptsClass: number;
declare var NSFontSetChangedNotification: string;

declare var NSFontSizeAttribute: string;

declare var NSFontSizeBinding: string;


declare const NSFontSlabSerifsClass: number;
declare var NSFontSlantTrait: string;


declare const NSFontSymbolicClass: number;
declare var NSFontSymbolicTrait: string;

declare var NSFontTraitsAttribute: string;


declare const NSFontTransitionalSerifsClass: number;

declare const NSFontUIOptimizedTrait: number;
declare var NSFontUnavailableException: string;


declare const NSFontUnknownClass: number;
declare var NSFontVariationAttribute: string;

declare var NSFontVariationAxisDefaultValueKey: string;

declare var NSFontVariationAxisIdentifierKey: string;

declare var NSFontVariationAxisMaximumValueKey: string;

declare var NSFontVariationAxisMinimumValueKey: string;

declare var NSFontVariationAxisNameKey: string;


declare const NSFontVerticalTrait: number;
declare var NSFontVisibleNameAttribute: string;

declare var NSFontWeightBlack: number;

declare var NSFontWeightBold: number;

declare var NSFontWeightHeavy: number;

declare var NSFontWeightLight: number;

declare var NSFontWeightMedium: number;

declare var NSFontWeightRegular: number;

declare var NSFontWeightSemibold: number;

declare var NSFontWeightThin: number;

declare var NSFontWeightTrait: string;

declare var NSFontWeightUltraLight: number;

declare var NSFontWidthTrait: string;

declare var NSForegroundColorAttributeName: string;

declare class NSFormCell extends NSActionCell {
  attributedTitle: NSAttributedString;
  setAttributedTitle(_: NSAttributedString)
  placeholderAttributedString: NSAttributedString;
  setPlaceholderAttributedString(_: NSAttributedString)
  placeholderString: string;
  setPlaceholderString(_: string)
  preferredTextFieldWidth: number;
  setPreferredTextFieldWidth(_: number)
  titleAlignment: NSTextAlignment;
  setTitleAlignment(_: NSTextAlignment)
  titleBaseWritingDirection: NSWritingDirection;
  setTitleBaseWritingDirection(_: NSWritingDirection)
  titleFont: NSFont;
  setTitleFont(_: NSFont)
  titleWidth: number;
  setTitleWidth(_: number)
  titleWidth(_: NSSize): number;
}


declare const NSFormFeedCharacter: number;
declare function NSFrameRect(rect: NSRect): void;
declare function NSFrameRectWithWidth(rect: NSRect, frameWidth: number): void;
declare function NSFrameRectWithWidthUsingOperation(rect: NSRect, frameWidth: number, op: NSCompositingOperation): void;
declare var NSFullScreenModeAllScreens: string;

declare var NSFullScreenModeApplicationPresentationOptions: string;

declare var NSFullScreenModeSetting: string;

declare var NSFullScreenModeWindowLevel: string;

declare class NSGestureRecognizer extends NSObject implements NSCoding {
  action: string;
  setAction(_: string)
  allowedTouchTypes: NSTouch.TouchTypeMask;
  setAllowedTouchTypes(_: NSTouch.TouchTypeMask)
  delaysKeyEvents: boolean;
  setDelaysKeyEvents(_: boolean)
  delaysMagnificationEvents: boolean;
  setDelaysMagnificationEvents(_: boolean)
  delaysOtherMouseButtonEvents: boolean;
  setDelaysOtherMouseButtonEvents(_: boolean)
  delaysPrimaryMouseButtonEvents: boolean;
  setDelaysPrimaryMouseButtonEvents(_: boolean)
  delaysRotationEvents: boolean;
  setDelaysRotationEvents(_: boolean)
  delaysSecondaryMouseButtonEvents: boolean;
  setDelaysSecondaryMouseButtonEvents(_: boolean)
  delegate: NSGestureRecognizerDelegate;
  setDelegate(_: NSGestureRecognizerDelegate)
  isEnabled: boolean;
  setEnabled(_: boolean)
  pressureConfiguration: NSPressureConfiguration;
  setPressureConfiguration(_: NSPressureConfiguration)
  state: NSGestureRecognizer.State;
  setState(_: NSGestureRecognizer.State)
  target: any;
  setTarget(_: any)
  readonly view: NSView;
  canBePreventedByGestureRecognizer(by: NSGestureRecognizer): boolean;
  canPreventGestureRecognizer(_: NSGestureRecognizer): boolean;
  encodeWithCoder(with_: NSCoder): void;
  flagsChanged(with_: NSEvent): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithTargetAction(target?: any, action?: string): this;
  keyDown(with_: NSEvent): void;
  keyUp(with_: NSEvent): void;
  locationInView(in_?: NSView): NSPoint;
  magnifyWithEvent(with_: NSEvent): void;
  mouseDown(with_: NSEvent): void;
  mouseDragged(with_: NSEvent): void;
  mouseUp(with_: NSEvent): void;
  otherMouseDown(with_: NSEvent): void;
  otherMouseDragged(with_: NSEvent): void;
  otherMouseUp(with_: NSEvent): void;
  pressureChangeWithEvent(with_: NSEvent): void;
  reset(): void;
  rightMouseDown(with_: NSEvent): void;
  rightMouseDragged(with_: NSEvent): void;
  rightMouseUp(with_: NSEvent): void;
  rotateWithEvent(with_: NSEvent): void;
  shouldBeRequiredToFailByGestureRecognizer(by: NSGestureRecognizer): boolean;
  shouldRequireFailureOfGestureRecognizer(of: NSGestureRecognizer): boolean;
  tabletPoint(with_: NSEvent): void;
  touchesBeganWithEvent(with_: NSEvent): void;
  touchesCancelledWithEvent(with_: NSEvent): void;
  touchesEndedWithEvent(with_: NSEvent): void;
  touchesMovedWithEvent(with_: NSEvent): void;
}

interface NSGestureRecognizerDelegate extends NSObject {
  gestureRecognizerShouldAttemptToRecognizeWithEvent?(_: NSGestureRecognizer, shouldAttemptToRecognizeWith: NSEvent): boolean;
  gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer?(_: NSGestureRecognizer, shouldRecognizeSimultaneouslyWith: NSGestureRecognizer): boolean;
  gestureRecognizerShouldRequireFailureOfGestureRecognizer?(_: NSGestureRecognizer, shouldRequireFailureOf: NSGestureRecognizer): boolean;
  gestureRecognizerShouldBeRequiredToFailByGestureRecognizer?(_: NSGestureRecognizer, shouldBeRequiredToFailBy: NSGestureRecognizer): boolean;
  gestureRecognizerShouldReceiveTouch?(_: NSGestureRecognizer, shouldReceive: NSTouch): boolean;
  gestureRecognizerShouldBegin?(_: NSGestureRecognizer): boolean;
}

declare var NSGestureRecognizerDelegate: {
  prototype: NSGestureRecognizerDelegate;
};

declare function NSGetFileType(pboardType: string): string;
declare function NSGetFileTypes(pboardTypes: NSArray<string> | string[]): NSArray<string>;
declare class NSGlyphGenerator extends NSObject {
  static sharedGlyphGenerator(): NSGlyphGenerator;
  generateGlyphsForGlyphStorageDesiredNumberOfCharactersGlyphIndexCharacterIndex(for_: NSGlyphStorage, desiredNumberOfCharacters: number, glyphIndex?: number, characterIndex?: number): void;
}

declare class NSGlyphInfo extends NSObject implements NSCopying, NSSecureCoding {
  readonly baseString: string;
  readonly characterCollection: NSCharacterCollection;
  readonly characterIdentifier: number;
  readonly glyphID: number;
  readonly glyphName: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var NSGlyphInfoAttributeName: string;

interface NSGlyphStorage {
  attributedString(): NSAttributedString;
  insertGlyphsLengthForStartingGlyphAtIndexCharacterIndex(_: number, length: number, forStartingGlyphAt: number, characterIndex: number): void;
  layoutOptions(): number;
  setIntAttributeValueForGlyphAtIndex(_: number, value: number, forGlyphAt: number): void;
}

declare var NSGlyphStorage: {
  prototype: NSGlyphStorage;
};

declare class NSGradient extends NSObject implements NSCopying, NSSecureCoding {
  readonly colorSpace: NSColorSpace;
  readonly numberOfColorStops: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  drawFromCenterRadiusToCenterRadiusOptions(fromCenter: NSPoint, radius: number, toCenter: NSPoint, radius: number, options: NSGradient.DrawingOptions): void;
  drawFromPointToPointOptions(from: NSPoint, to: NSPoint, options: NSGradient.DrawingOptions): void;
  drawInBezierPathAngle(in_: NSBezierPath, angle: number): void;
  drawInBezierPathRelativeCenterPosition(in_: NSBezierPath, relativeCenterPosition: NSPoint): void;
  drawInRectAngle(in_: NSRect, angle: number): void;
  drawInRectRelativeCenterPosition(in_: NSRect, relativeCenterPosition: NSPoint): void;
  encodeWithCoder(with_: NSCoder): void;
  getColorLocationAtIndex(_?: NSColor, location?: number, at: number): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithColors(colors: NSArray<NSColor>): this;
  static createWithColorsAtLocationsColorSpace(colors: NSArray<NSColor>, atLocations?: number, colorSpace: NSColorSpace): this;
  static createWithColorsAndLocations(colorsAndLocations: NSColor): this;
  static createWithStartingColorEndingColor(startingColor: NSColor, endingColor: NSColor): this;
  interpolatedColorAtLocation(atLocation: number): NSColor;
}

declare class NSGraphicsContext extends NSObject {
  static currentContextDrawingToScreen(): boolean;
  static restoreGraphicsState(): void;
  static saveGraphicsState(): void;
  readonly CGContext: any;
  readonly CIContext: CIContext;
  readonly attributes: NSDictionary<string, any>;
  colorRenderingIntent: NSColorRenderingIntent;
  setColorRenderingIntent(_: NSColorRenderingIntent)
  compositingOperation: NSCompositingOperation;
  setCompositingOperation(_: NSCompositingOperation)
  readonly isDrawingToScreen: boolean;
  readonly isFlipped: boolean;
  imageInterpolation: NSImageInterpolation;
  setImageInterpolation(_: NSImageInterpolation)
  patternPhase: NSPoint;
  setPatternPhase(_: NSPoint)
  shouldAntialias: boolean;
  setShouldAntialias(_: boolean)
  static currentContext: NSGraphicsContext;
  setCurrentContext(_: NSGraphicsContext)
  flushGraphics(): void;
  restoreGraphicsState(): void;
  saveGraphicsState(): void;
}

declare var NSGraphicsContextDestinationAttributeName: string;

declare var NSGraphicsContextPDFFormat: string;

declare var NSGraphicsContextPSFormat: string;

declare var NSGraphicsContextRepresentationFormatAttributeName: string;

declare class NSGridCell extends NSObject implements NSCoding {
  readonly column: NSGridColumn;
  contentView: NSView;
  setContentView(_: NSView)
  customPlacementConstraints: NSArray<NSLayoutConstraint>;
  setCustomPlacementConstraints(_: NSArray<NSLayoutConstraint>)
  readonly row: NSGridRow;
  rowAlignment: NSGridRow.Alignment;
  setRowAlignment(_: NSGridRow.Alignment)
  xPlacement: NSGridCell.Placement;
  setXPlacement(_: NSGridCell.Placement)
  yPlacement: NSGridCell.Placement;
  setYPlacement(_: NSGridCell.Placement)
  static emptyContentView(): NSView;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSGridColumn extends NSObject implements NSCoding {
  readonly gridView: NSGridView;
  isHidden: boolean;
  setHidden(_: boolean)
  leadingPadding: number;
  setLeadingPadding(_: number)
  readonly numberOfCells: number;
  trailingPadding: number;
  setTrailingPadding(_: number)
  width: number;
  setWidth(_: number)
  xPlacement: NSGridCell.Placement;
  setXPlacement(_: NSGridCell.Placement)
  cellAtIndex(at: number): NSGridCell;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  mergeCellsInRange(in_: NSRange): void;
}

declare class NSGridRow extends NSObject implements NSCoding {
  bottomPadding: number;
  setBottomPadding(_: number)
  readonly gridView: NSGridView;
  height: number;
  setHeight(_: number)
  isHidden: boolean;
  setHidden(_: boolean)
  readonly numberOfCells: number;
  rowAlignment: NSGridRow.Alignment;
  setRowAlignment(_: NSGridRow.Alignment)
  topPadding: number;
  setTopPadding(_: number)
  yPlacement: NSGridCell.Placement;
  setYPlacement(_: NSGridCell.Placement)
  cellAtIndex(at: number): NSGridCell;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  mergeCellsInRange(in_: NSRange): void;
}

declare class NSGridView extends NSView {
  columnSpacing: number;
  setColumnSpacing(_: number)
  readonly numberOfColumns: number;
  readonly numberOfRows: number;
  rowAlignment: NSGridRow.Alignment;
  setRowAlignment(_: NSGridRow.Alignment)
  rowSpacing: number;
  setRowSpacing(_: number)
  xPlacement: NSGridCell.Placement;
  setXPlacement(_: NSGridCell.Placement)
  yPlacement: NSGridCell.Placement;
  setYPlacement(_: NSGridCell.Placement)
  addColumnWithViews(with_: NSArray<NSView>): NSGridColumn;
  addRowWithViews(with_: NSArray<NSView>): NSGridRow;
  cellAtColumnIndexRowIndex(atColumnIndex: number, rowIndex: number): NSGridCell;
  cellForView(for_: NSView): NSGridCell;
  columnAtIndex(at: number): NSGridColumn;
  indexOfColumn(of: NSGridColumn): number;
  indexOfRow(of: NSGridRow): number;
  insertColumnAtIndexWithViews(at: number, with_: NSArray<NSView>): NSGridColumn;
  insertRowAtIndexWithViews(at: number, with_: NSArray<NSView>): NSGridRow;
  mergeCellsInHorizontalRangeVerticalRange(inHorizontalRange: NSRange, verticalRange: NSRange): void;
  moveColumnAtIndexToIndex(at: number, to: number): void;
  moveRowAtIndexToIndex(at: number, to: number): void;
  removeColumnAtIndex(at: number): void;
  removeRowAtIndex(at: number): void;
  rowAtIndex(at: number): NSGridRow;
}

declare var NSGridViewSizeForContent: number;

declare class NSGroupTouchBarItem extends NSTouchBarItem {
  static alertStyleGroupItemWithIdentifier(alertStyleWithIdentifier: string): NSGroupTouchBarItem;
  static groupItemWithIdentifierItems(identifier: string, items: NSArray<NSTouchBarItem>): NSGroupTouchBarItem;
  static groupItemWithIdentifierItemsAllowedCompressionOptions(identifier: string, items: NSArray<NSTouchBarItem>, allowedCompressionOptions: NSUserInterfaceCompressionOptions): NSGroupTouchBarItem;
  customizationLabel: string;
  setCustomizationLabel(_: string)
  readonly effectiveCompressionOptions: NSUserInterfaceCompressionOptions;
  groupTouchBar: NSTouchBar;
  setGroupTouchBar(_: NSTouchBar)
  groupUserInterfaceLayoutDirection: NSUserInterfaceLayoutDirection;
  setGroupUserInterfaceLayoutDirection(_: NSUserInterfaceLayoutDirection)
  preferredItemWidth: number;
  setPreferredItemWidth(_: number)
  prefersEqualWidths: boolean;
  setPrefersEqualWidths(_: boolean)
  prioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>;
  setPrioritizedCompressionOptions(_: NSArray<NSUserInterfaceCompressionOptions>)
}

declare var NSHTMLTextDocumentType: string;

declare var NSHandlesContentAsCompoundValueBindingOption: string;

declare class NSHapticFeedbackManager extends NSObject {
  static defaultPerformer(): NSHapticFeedbackPerformer;
}

interface NSHapticFeedbackPerformer extends NSObject {
  performFeedbackPatternPerformanceTime(_: NSHapticFeedbackManager.FeedbackPattern, performanceTime: NSHapticFeedbackManager.PerformanceTime): void;
}

declare var NSHapticFeedbackPerformer: {
  prototype: NSHapticFeedbackPerformer;
};

declare var NSHeaderTitleBinding: string;


declare const NSHelpFunctionKey: number;
declare class NSHelpManager extends NSObject {
  static isContextHelpModeActive: boolean;
  setContextHelpModeActive(_: boolean)
  static sharedHelpManager(): NSHelpManager;
  contextHelpForObject(for_: any): NSAttributedString;
  findStringInBook(_: string, inBook?: string): void;
  openHelpAnchorInBook(_: string, inBook?: string): void;
  registerBooksInBundle(in_: Bundle): boolean;
  removeContextHelpForObject(for_: any): void;
  setContextHelpForObject(_: NSAttributedString, for_: any): void;
  showContextHelpForObjectLocationHint(for_: any, locationHint: NSPoint): boolean;
}

declare var NSHiddenBinding: string;


declare const NSHomeFunctionKey: number;
declare var NSHourMinuteDatePickerElementFlag: NSDatePicker.ElementFlags;

declare var NSHourMinuteSecondDatePickerElementFlag: NSDatePicker.ElementFlags;

declare var NSHyphenationFactorDocumentAttribute: string;

interface NSIgnoreMisspelledWords {
  ignoreSpelling(_?: any): void;
}

declare var NSIgnoreMisspelledWords: {
  prototype: NSIgnoreMisspelledWords;
};

declare var NSIllegalSelectorException: string;


declare const NSIllegalTextMovement: number;
declare class NSImage extends NSObject implements NSCopying, NSPasteboardReading, NSPasteboardWriting, NSSecureCoding {
  static canInitWithPasteboard(with_: NSPasteboard): boolean;
  static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.ReadingOptions;
  readonly TIFFRepresentation: Data;
  accessibilityDescription: string;
  setAccessibilityDescription(_: string)
  alignmentRect: NSRect;
  setAlignmentRect(_: NSRect)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  cacheMode: NSImage.CacheMode;
  setCacheMode(_: NSImage.CacheMode)
  capInsets: NSEdgeInsets;
  setCapInsets(_: NSEdgeInsets)
  delegate: NSImageDelegate;
  setDelegate(_: NSImageDelegate)
  matchesOnMultipleResolution: boolean;
  setMatchesOnMultipleResolution(_: boolean)
  matchesOnlyOnBestFittingAxis: boolean;
  setMatchesOnlyOnBestFittingAxis(_: boolean)
  prefersColorMatch: boolean;
  setPrefersColorMatch(_: boolean)
  readonly representations: NSArray<NSImageRep>;
  resizingMode: NSImage.ResizingMode;
  setResizingMode(_: NSImage.ResizingMode)
  size: NSSize;
  setSize(_: NSSize)
  isTemplate: boolean;
  setTemplate(_: boolean)
  usesEPSOnResolutionMismatch: boolean;
  setUsesEPSOnResolutionMismatch(_: boolean)
  readonly isValid: boolean;
  static imageTypes(): NSArray<string>;
  static imageUnfilteredTypes(): NSArray<string>;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  CGImageForProposedRectContextHints(forProposedRect?: NSRect, context?: NSGraphicsContext, hints?: NSDictionary<string, any>): any;
  TIFFRepresentationUsingCompressionFactor(using: NSBitmapImageRep.TIFFCompression, factor: number): Data;
  addRepresentation(_: NSImageRep): void;
  addRepresentations(_: NSArray<NSImageRep>): void;
  bestRepresentationForRectContextHints(for_: NSRect, context?: NSGraphicsContext, hints?: NSDictionary<string, any>): NSImageRep;
  cancelIncrementalLoad(): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  drawAtPointFromRectOperationFraction(at: NSPoint, from: NSRect, operation: NSCompositingOperation, fraction: number): void;
  drawInRect(in_: NSRect): void;
  drawInRectFromRectOperationFraction(in_: NSRect, from: NSRect, operation: NSCompositingOperation, fraction: number): void;
  drawInRectFromRectOperationFractionRespectFlippedHints(in_: NSRect, from: NSRect, operation: NSCompositingOperation, fraction: number, respectFlipped: boolean, hints?: NSDictionary<string, any>): void;
  drawRepresentationInRect(_: NSImageRep, in_: NSRect): boolean;
  encodeWithCoder(with_: NSCoder): void;
  hitTestRectWithImageDestinationRectContextHintsFlipped(_: NSRect, withDestinationRect: NSRect, context?: NSGraphicsContext, hints?: NSDictionary<string, any>, flipped: boolean): boolean;
  static createWithByReferencingFile(byReferencingFile: string): this;
  static createWithByReferencingURL(byReferencingURL: NSURL): this;
  static createWithCGImageSize(CGImage: any, size: NSSize): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithContentsOfFile(contentsOfFile: string): this;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  static createWithData(data: Data): this;
  static createWithDataIgnoringOrientation(dataIgnoringOrientation: Data): this;
  static createWithIconRef(iconRef: any): this;
  static createWithPasteboard(pasteboard: NSPasteboard): this;
  static createWithPasteboardPropertyListOfType(pasteboardPropertyList: any, ofType: string): this;
  static createWithSize(size: NSSize): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  layerContentsForContentsScale(forContentsScale: number): any;
  lockFocus(): void;
  lockFocusFlipped(_: boolean): void;
  name(): string;
  pasteboardPropertyListForType(forType: string): any;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  recache(): void;
  recommendedLayerContentsScale(_: number): number;
  removeRepresentation(_: NSImageRep): void;
  respondsToSelector(_: string): boolean;
  self(): this;
  setName(_?: string): boolean;
  unlockFocus(): void;
  writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.WritingOptions;
}

declare var NSImageBinding: string;

declare var NSImageCacheException: string;

declare class NSImageCell extends NSCell implements NSCoding, NSCopying {
  imageAlignment: NSImageAlignment;
  setImageAlignment(_: NSImageAlignment)
  imageFrameStyle: NSImageView.FrameStyle;
  setImageFrameStyle(_: NSImageView.FrameStyle)
  imageScaling: NSImageScaling;
  setImageScaling(_: NSImageScaling)
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var NSImageColorSyncProfileData: string;

declare var NSImageCompressionFactor: string;

declare var NSImageCompressionMethod: string;

declare var NSImageCurrentFrame: string;

declare var NSImageCurrentFrameDuration: string;

interface NSImageDelegate extends NSObject {
  imageDidLoadRepresentationWithStatus?(_: NSImage, didLoadRepresentation: NSImageRep, with_: NSImage.LoadStatus): void;
  imageDidLoadPartOfRepresentationWithValidRows?(_: NSImage, didLoadPartOfRepresentation: NSImageRep, withValidRows: number): void;
  imageDidLoadRepresentationHeader?(_: NSImage, didLoadRepresentationHeader: NSImageRep): void;
  imageWillLoadRepresentation?(_: NSImage, willLoadRepresentation: NSImageRep): void;
  imageDidNotDrawInRect?(_: NSImage, in_: NSRect): NSImage;
}

declare var NSImageDelegate: {
  prototype: NSImageDelegate;
};

declare var NSImageDitherTransparency: string;

declare var NSImageEXIFData: string;

declare var NSImageFallbackBackgroundColor: string;

declare var NSImageFrameCount: string;

declare var NSImageGamma: string;

declare var NSImageHintCTM: string;

declare var NSImageHintInterpolation: string;

declare var NSImageHintUserInterfaceLayoutDirection: string;

declare var NSImageInterlaced: string;

declare var NSImageLoopCount: string;

declare var NSImageNameActionTemplate: string;

declare var NSImageNameAddTemplate: string;

declare var NSImageNameAdvanced: string;

declare var NSImageNameApplicationIcon: string;

declare var NSImageNameBluetoothTemplate: string;

declare var NSImageNameBonjour: string;

declare var NSImageNameBookmarksTemplate: string;

declare var NSImageNameCaution: string;

declare var NSImageNameColorPanel: string;

declare var NSImageNameColumnViewTemplate: string;

declare var NSImageNameComputer: string;

declare var NSImageNameEnterFullScreenTemplate: string;

declare var NSImageNameEveryone: string;

declare var NSImageNameExitFullScreenTemplate: string;

declare var NSImageNameFlowViewTemplate: string;

declare var NSImageNameFolder: string;

declare var NSImageNameFolderBurnable: string;

declare var NSImageNameFolderSmart: string;

declare var NSImageNameFollowLinkFreestandingTemplate: string;

declare var NSImageNameFontPanel: string;

declare var NSImageNameGoBackTemplate: string;

declare var NSImageNameGoForwardTemplate: string;

declare var NSImageNameGoLeftTemplate: string;

declare var NSImageNameGoRightTemplate: string;

declare var NSImageNameHomeTemplate: string;

declare var NSImageNameIChatTheaterTemplate: string;

declare var NSImageNameIconViewTemplate: string;

declare var NSImageNameInfo: string;

declare var NSImageNameInvalidDataFreestandingTemplate: string;

declare var NSImageNameLeftFacingTriangleTemplate: string;

declare var NSImageNameListViewTemplate: string;

declare var NSImageNameLockLockedTemplate: string;

declare var NSImageNameLockUnlockedTemplate: string;

declare var NSImageNameMenuMixedStateTemplate: string;

declare var NSImageNameMenuOnStateTemplate: string;

declare var NSImageNameMobileMe: string;

declare var NSImageNameMultipleDocuments: string;

declare var NSImageNameNetwork: string;

declare var NSImageNamePathTemplate: string;

declare var NSImageNamePreferencesGeneral: string;

declare var NSImageNameQuickLookTemplate: string;

declare var NSImageNameRefreshFreestandingTemplate: string;

declare var NSImageNameRefreshTemplate: string;

declare var NSImageNameRemoveTemplate: string;

declare var NSImageNameRevealFreestandingTemplate: string;

declare var NSImageNameRightFacingTriangleTemplate: string;

declare var NSImageNameShareTemplate: string;

declare var NSImageNameSlideshowTemplate: string;

declare var NSImageNameSmartBadgeTemplate: string;

declare var NSImageNameStatusAvailable: string;

declare var NSImageNameStatusNone: string;

declare var NSImageNameStatusPartiallyAvailable: string;

declare var NSImageNameStatusUnavailable: string;

declare var NSImageNameStopProgressFreestandingTemplate: string;

declare var NSImageNameStopProgressTemplate: string;

declare var NSImageNameTouchBarAddDetailTemplate: string;

declare var NSImageNameTouchBarAddTemplate: string;

declare var NSImageNameTouchBarAlarmTemplate: string;

declare var NSImageNameTouchBarAudioInputMuteTemplate: string;

declare var NSImageNameTouchBarAudioInputTemplate: string;

declare var NSImageNameTouchBarAudioOutputMuteTemplate: string;

declare var NSImageNameTouchBarAudioOutputVolumeHighTemplate: string;

declare var NSImageNameTouchBarAudioOutputVolumeLowTemplate: string;

declare var NSImageNameTouchBarAudioOutputVolumeMediumTemplate: string;

declare var NSImageNameTouchBarAudioOutputVolumeOffTemplate: string;

declare var NSImageNameTouchBarBookmarksTemplate: string;

declare var NSImageNameTouchBarColorPickerFill: string;

declare var NSImageNameTouchBarColorPickerFont: string;

declare var NSImageNameTouchBarColorPickerStroke: string;

declare var NSImageNameTouchBarCommunicationAudioTemplate: string;

declare var NSImageNameTouchBarCommunicationVideoTemplate: string;

declare var NSImageNameTouchBarComposeTemplate: string;

declare var NSImageNameTouchBarDeleteTemplate: string;

declare var NSImageNameTouchBarDownloadTemplate: string;

declare var NSImageNameTouchBarEnterFullScreenTemplate: string;

declare var NSImageNameTouchBarExitFullScreenTemplate: string;

declare var NSImageNameTouchBarFastForwardTemplate: string;

declare var NSImageNameTouchBarFolderCopyToTemplate: string;

declare var NSImageNameTouchBarFolderMoveToTemplate: string;

declare var NSImageNameTouchBarFolderTemplate: string;

declare var NSImageNameTouchBarGetInfoTemplate: string;

declare var NSImageNameTouchBarGoBackTemplate: string;

declare var NSImageNameTouchBarGoDownTemplate: string;

declare var NSImageNameTouchBarGoForwardTemplate: string;

declare var NSImageNameTouchBarGoUpTemplate: string;

declare var NSImageNameTouchBarHistoryTemplate: string;

declare var NSImageNameTouchBarIconViewTemplate: string;

declare var NSImageNameTouchBarListViewTemplate: string;

declare var NSImageNameTouchBarMailTemplate: string;

declare var NSImageNameTouchBarNewFolderTemplate: string;

declare var NSImageNameTouchBarNewMessageTemplate: string;

declare var NSImageNameTouchBarOpenInBrowserTemplate: string;

declare var NSImageNameTouchBarPauseTemplate: string;

declare var NSImageNameTouchBarPlayPauseTemplate: string;

declare var NSImageNameTouchBarPlayTemplate: string;

declare var NSImageNameTouchBarPlayheadTemplate: string;

declare var NSImageNameTouchBarQuickLookTemplate: string;

declare var NSImageNameTouchBarRecordStartTemplate: string;

declare var NSImageNameTouchBarRecordStopTemplate: string;

declare var NSImageNameTouchBarRefreshTemplate: string;

declare var NSImageNameTouchBarRemoveTemplate: string;

declare var NSImageNameTouchBarRewindTemplate: string;

declare var NSImageNameTouchBarRotateLeftTemplate: string;

declare var NSImageNameTouchBarRotateRightTemplate: string;

declare var NSImageNameTouchBarSearchTemplate: string;

declare var NSImageNameTouchBarShareTemplate: string;

declare var NSImageNameTouchBarSidebarTemplate: string;

declare var NSImageNameTouchBarSkipAhead15SecondsTemplate: string;

declare var NSImageNameTouchBarSkipAhead30SecondsTemplate: string;

declare var NSImageNameTouchBarSkipAheadTemplate: string;

declare var NSImageNameTouchBarSkipBack15SecondsTemplate: string;

declare var NSImageNameTouchBarSkipBack30SecondsTemplate: string;

declare var NSImageNameTouchBarSkipBackTemplate: string;

declare var NSImageNameTouchBarSkipToEndTemplate: string;

declare var NSImageNameTouchBarSkipToStartTemplate: string;

declare var NSImageNameTouchBarSlideshowTemplate: string;

declare var NSImageNameTouchBarTagIconTemplate: string;

declare var NSImageNameTouchBarTextBoldTemplate: string;

declare var NSImageNameTouchBarTextBoxTemplate: string;

declare var NSImageNameTouchBarTextCenterAlignTemplate: string;

declare var NSImageNameTouchBarTextItalicTemplate: string;

declare var NSImageNameTouchBarTextJustifiedAlignTemplate: string;

declare var NSImageNameTouchBarTextLeftAlignTemplate: string;

declare var NSImageNameTouchBarTextListTemplate: string;

declare var NSImageNameTouchBarTextRightAlignTemplate: string;

declare var NSImageNameTouchBarTextStrikethroughTemplate: string;

declare var NSImageNameTouchBarTextUnderlineTemplate: string;

declare var NSImageNameTouchBarUserAddTemplate: string;

declare var NSImageNameTouchBarUserGroupTemplate: string;

declare var NSImageNameTouchBarUserTemplate: string;

declare var NSImageNameTouchBarVolumeDownTemplate: string;

declare var NSImageNameTouchBarVolumeUpTemplate: string;

declare var NSImageNameTrashEmpty: string;

declare var NSImageNameTrashFull: string;

declare var NSImageNameUser: string;

declare var NSImageNameUserAccounts: string;

declare var NSImageNameUserGroup: string;

declare var NSImageNameUserGuest: string;

declare var NSImageProgressive: string;

declare var NSImageRGBColorTable: string;

declare class NSImageRep extends NSObject implements NSCoding, NSCopying {
  static canInitWithData(with_: Data): boolean;
  static canInitWithPasteboard(with_: NSPasteboard): boolean;
  static imageRepClassForData(for_: Data): typeof NSObject;
  static imageRepClassForType(forType: string): typeof NSObject;
  static imageRepsWithContentsOfFile(withContentsOfFile: string): NSArray<NSImageRep>;
  static imageRepsWithContentsOfURL(withContentsOf: NSURL): NSArray<NSImageRep>;
  static imageRepsWithPasteboard(with_: NSPasteboard): NSArray<NSImageRep>;
  static registerImageRepClass(_: typeof NSObject): void;
  static unregisterImageRepClass(_: typeof NSObject): void;
  hasAlpha: boolean;
  setAlpha(_: boolean)
  bitsPerSample: number;
  setBitsPerSample(_: number)
  colorSpaceName: string;
  setColorSpaceName(_: string)
  layoutDirection: NSImage.LayoutDirection;
  setLayoutDirection(_: NSImage.LayoutDirection)
  isOpaque: boolean;
  setOpaque(_: boolean)
  pixelsHigh: number;
  setPixelsHigh(_: number)
  pixelsWide: number;
  setPixelsWide(_: number)
  size: NSSize;
  setSize(_: NSSize)
  static imageTypes(): NSArray<string>;
  static imageUnfilteredTypes(): NSArray<string>;
  static registeredImageRepClasses(): NSArray<typeof NSObject>;
  CGImageForProposedRectContextHints(forProposedRect?: NSRect, context?: NSGraphicsContext, hints?: NSDictionary<string, any>): any;
  draw(): boolean;
  drawAtPoint(at: NSPoint): boolean;
  drawInRect(in_: NSRect): boolean;
  drawInRectFromRectOperationFractionRespectFlippedHints(in_: NSRect, from: NSRect, operation: NSCompositingOperation, fraction: number, respectFlipped: boolean, hints?: NSDictionary<string, any>): boolean;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}


declare const NSImageRepMatchesDevice: number;
declare var NSImageRepRegistryDidChangeNotification: string;

declare class NSImageView extends NSControl implements NSAccessibilityImage, NSMenuItemValidation {
  allowsCutCopyPaste: boolean;
  setAllowsCutCopyPaste(_: boolean)
  animates: boolean;
  setAnimates(_: boolean)
  contentTintColor: NSColor;
  setContentTintColor(_: NSColor)
  isEditable: boolean;
  setEditable(_: boolean)
  image: NSImage;
  setImage(_: NSImage)
  imageAlignment: NSImageAlignment;
  setImageAlignment(_: NSImageAlignment)
  imageFrameStyle: NSImageView.FrameStyle;
  setImageFrameStyle(_: NSImageView.FrameStyle)
  imageScaling: NSImageScaling;
  setImageScaling(_: NSImageScaling)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityFrame(): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLabel(): string;
  accessibilityParent(): any;
  conformsToProtocol(to: any /* Protocol */): boolean;
  isAccessibilityFocused(): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  validateMenuItem(_: NSMenuItem): boolean;
}

declare var NSIncludedKeysBinding: string;

declare var NSInitialKeyBinding: string;

declare var NSInitialValueBinding: string;

interface NSInputServerMouseTracker {
}

declare var NSInputServerMouseTracker: {
  prototype: NSInputServerMouseTracker;
};

interface NSInputServiceProvider {
}

declare var NSInputServiceProvider: {
  prototype: NSInputServiceProvider;
};


declare const NSInsertCharFunctionKey: number;

declare const NSInsertFunctionKey: number;

declare const NSInsertLineFunctionKey: number;
declare var NSInsertsNullPlaceholderBindingOption: string;

declare var NSInvokesSeparatelyWithArrayObjectsBindingOption: string;

declare function NSIsControllerMarker(object_: any): boolean;
declare var NSIsIndeterminateBinding: string;

declare var NSKernAttributeName: string;

declare var NSKeywordsDocumentAttribute: string;

declare var NSLabelBinding: string;

declare class NSLayoutAnchor<AnchorType> extends NSObject implements NSCoding, NSCopying {
  readonly constraintsAffectingLayout: NSArray<NSLayoutConstraint>;
  readonly hasAmbiguousLayout: boolean;
  readonly item: any;
  readonly name: string;
  constraintWithEqualTo(equalTo: NSLayoutAnchor<AnchorType>): NSLayoutConstraint;
  constraintWithEqualToConstant(equalTo: NSLayoutAnchor<AnchorType>, constant: number): NSLayoutConstraint;
  constraintWithGreaterThanOrEqualTo(greaterThanOrEqualTo: NSLayoutAnchor<AnchorType>): NSLayoutConstraint;
  constraintWithGreaterThanOrEqualToConstant(greaterThanOrEqualTo: NSLayoutAnchor<AnchorType>, constant: number): NSLayoutConstraint;
  constraintWithLessThanOrEqualTo(lessThanOrEqualTo: NSLayoutAnchor<AnchorType>): NSLayoutConstraint;
  constraintWithLessThanOrEqualToConstant(lessThanOrEqualTo: NSLayoutAnchor<AnchorType>, constant: number): NSLayoutConstraint;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSLayoutConstraint extends NSObject implements NSAnimatablePropertyContainer {
  static activateConstraints(_: NSArray<NSLayoutConstraint>): void;
  static constraintsWithVisualFormatOptionsMetricsViews(withVisualFormat: string, options: NSLayoutConstraint.FormatOptions, metrics?: NSDictionary<string, any>, views: NSDictionary<string, any>): NSArray<NSLayoutConstraint>;
  static deactivateConstraints(_: NSArray<NSLayoutConstraint>): void;
  static defaultAnimationForKey(forKey: string): any;
  isActive: boolean;
  setActive(_: boolean)
  constant: number;
  setConstant(_: number)
  readonly firstAnchor: NSLayoutAnchor<any>;
  readonly firstAttribute: NSLayoutConstraint.Attribute;
  readonly firstItem: any;
  identifier: string;
  setIdentifier(_: string)
  readonly multiplier: number;
  priority: number;
  setPriority(_: number)
  readonly relation: NSLayoutConstraint.Relation;
  readonly secondAnchor: NSLayoutAnchor<any>;
  readonly secondAttribute: NSLayoutConstraint.Attribute;
  readonly secondItem: any;
  shouldBeArchived: boolean;
  setShouldBeArchived(_: boolean)
  animations: NSDictionary<string, any>;
  setAnimations(_: NSDictionary<string, any>) // inherited from NSAnimatablePropertyContainer
  animationForKey(forKey: string): any;
  animator(): this;
}

declare class NSLayoutDimension extends NSLayoutAnchor<NSLayoutDimension> {
  constraintEqualToAnchorMultiplier(equalTo: NSLayoutDimension, multiplier: number): NSLayoutConstraint;
  constraintEqualToAnchorMultiplierConstant(equalTo: NSLayoutDimension, multiplier: number, constant: number): NSLayoutConstraint;
  constraintEqualToConstant(equalToConstant: number): NSLayoutConstraint;
  constraintGreaterThanOrEqualToAnchorMultiplier(greaterThanOrEqualTo: NSLayoutDimension, multiplier: number): NSLayoutConstraint;
  constraintGreaterThanOrEqualToAnchorMultiplierConstant(greaterThanOrEqualTo: NSLayoutDimension, multiplier: number, constant: number): NSLayoutConstraint;
  constraintGreaterThanOrEqualToConstant(greaterThanOrEqualToConstant: number): NSLayoutConstraint;
  constraintLessThanOrEqualToAnchorMultiplier(lessThanOrEqualTo: NSLayoutDimension, multiplier: number): NSLayoutConstraint;
  constraintLessThanOrEqualToAnchorMultiplierConstant(lessThanOrEqualTo: NSLayoutDimension, multiplier: number, constant: number): NSLayoutConstraint;
  constraintLessThanOrEqualToConstant(lessThanOrEqualToConstant: number): NSLayoutConstraint;
}

declare class NSLayoutGuide extends NSObject implements NSCoding, NSUserInterfaceItemIdentification {
  readonly bottomAnchor: NSLayoutYAxisAnchor;
  readonly centerXAnchor: NSLayoutXAxisAnchor;
  readonly centerYAnchor: NSLayoutYAxisAnchor;
  readonly frame: NSRect;
  readonly hasAmbiguousLayout: boolean;
  readonly heightAnchor: NSLayoutDimension;
  readonly leadingAnchor: NSLayoutXAxisAnchor;
  readonly leftAnchor: NSLayoutXAxisAnchor;
  owningView: NSView;
  setOwningView(_: NSView)
  readonly rightAnchor: NSLayoutXAxisAnchor;
  readonly topAnchor: NSLayoutYAxisAnchor;
  readonly trailingAnchor: NSLayoutXAxisAnchor;
  readonly widthAnchor: NSLayoutDimension;
  identifier: string;
  setIdentifier(_: string) // inherited from NSUserInterfaceItemIdentification
  constraintsAffectingLayoutForOrientation(for_: NSLayoutConstraint.Orientation): NSArray<NSLayoutConstraint>;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSLayoutManager extends NSObject implements NSSecureCoding, NSGlyphStorage {
  allowsNonContiguousLayout: boolean;
  setAllowsNonContiguousLayout(_: boolean)
  backgroundLayoutEnabled: boolean;
  setBackgroundLayoutEnabled(_: boolean)
  defaultAttachmentScaling: NSImageScaling;
  setDefaultAttachmentScaling(_: NSImageScaling)
  delegate: NSLayoutManagerDelegate;
  setDelegate(_: NSLayoutManagerDelegate)
  readonly extraLineFragmentRect: NSRect;
  readonly extraLineFragmentTextContainer: NSTextContainer;
  readonly extraLineFragmentUsedRect: NSRect;
  readonly firstTextView: NSTextView;
  glyphGenerator: NSGlyphGenerator;
  setGlyphGenerator(_: NSGlyphGenerator)
  readonly hasNonContiguousLayout: boolean;
  limitsLayoutForSuspiciousContents: boolean;
  setLimitsLayoutForSuspiciousContents(_: boolean)
  readonly numberOfGlyphs: number;
  showsControlCharacters: boolean;
  setShowsControlCharacters(_: boolean)
  showsInvisibleCharacters: boolean;
  setShowsInvisibleCharacters(_: boolean)
  readonly textContainers: NSArray<NSTextContainer>;
  textStorage: NSTextStorage;
  setTextStorage(_: NSTextStorage)
  readonly textViewForBeginningOfSelection: NSTextView;
  typesetter: NSTypesetter;
  setTypesetter(_: NSTypesetter)
  typesetterBehavior: NSLayoutManager.TypesetterBehavior;
  setTypesetterBehavior(_: NSLayoutManager.TypesetterBehavior)
  usesDefaultHyphenation: boolean;
  setUsesDefaultHyphenation(_: boolean)
  usesFontLeading: boolean;
  setUsesFontLeading(_: boolean)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  CGGlyphAtIndex(at: number): number;
  CGGlyphAtIndexIsValidIndex(at: number, isValidIndex?: boolean): number;
  addTemporaryAttributeValueForCharacterRange(_: string, value: any, forCharacterRange: NSRange): void;
  addTemporaryAttributesForCharacterRange(_: NSDictionary<string, any>, forCharacterRange: NSRange): void;
  addTextContainer(_: NSTextContainer): void;
  attachmentSizeForGlyphAtIndex(forGlyphAt: number): NSSize;
  attributedString(): NSAttributedString;
  boundingRectForGlyphRangeInTextContainer(forGlyphRange: NSRange, in_: NSTextContainer): NSRect;
  boundsRectForTextBlockAtIndexEffectiveRange(for_: NSTextBlock, at: number, effectiveRange?: NSRange): NSRect;
  boundsRectForTextBlockGlyphRange(for_: NSTextBlock, glyphRange: NSRange): NSRect;
  characterIndexForGlyphAtIndex(at: number): number;
  characterIndexForPointInTextContainerFractionOfDistanceBetweenInsertionPoints(for_: NSPoint, in_: NSTextContainer, fractionOfDistanceBetweenInsertionPoints?: number): number;
  characterRangeForGlyphRangeActualGlyphRange(forGlyphRange: NSRange, actualGlyphRange?: NSRange): NSRange;
  defaultBaselineOffsetForFont(for_: NSFont): number;
  defaultLineHeightForFont(for_: NSFont): number;
  drawBackgroundForGlyphRangeAtPoint(forGlyphRange: NSRange, at: NSPoint): void;
  drawGlyphsForGlyphRangeAtPoint(forGlyphRange: NSRange, at: NSPoint): void;
  drawStrikethroughForGlyphRangeStrikethroughTypeBaselineOffsetLineFragmentRectLineFragmentGlyphRangeContainerOrigin(forGlyphRange: NSRange, strikethroughType: NSUnderlineStyle, baselineOffset: number, lineFragmentRect: NSRect, lineFragmentGlyphRange: NSRange, containerOrigin: NSPoint): void;
  drawUnderlineForGlyphRangeUnderlineTypeBaselineOffsetLineFragmentRectLineFragmentGlyphRangeContainerOrigin(forGlyphRange: NSRange, underlineType: NSUnderlineStyle, baselineOffset: number, lineFragmentRect: NSRect, lineFragmentGlyphRange: NSRange, containerOrigin: NSPoint): void;
  drawsOutsideLineFragmentForGlyphAtIndex(forGlyphAt: number): boolean;
  encodeWithCoder(with_: NSCoder): void;
  ensureGlyphsForCharacterRange(forCharacterRange: NSRange): void;
  ensureGlyphsForGlyphRange(forGlyphRange: NSRange): void;
  ensureLayoutForBoundingRectInTextContainer(forBoundingRect: NSRect, in_: NSTextContainer): void;
  ensureLayoutForCharacterRange(forCharacterRange: NSRange): void;
  ensureLayoutForGlyphRange(forGlyphRange: NSRange): void;
  ensureLayoutForTextContainer(for_: NSTextContainer): void;
  enumerateEnclosingRectsForGlyphRangeWithinSelectedGlyphRangeInTextContainerUsingBlock(forGlyphRange: NSRange, withinSelectedGlyphRange: NSRange, in_: NSTextContainer, using: (p1: NSRect, p2: boolean) => void): void;
  enumerateLineFragmentsForGlyphRangeUsingBlock(forGlyphRange: NSRange, using: (p1: NSRect, p2: NSRect, p3: NSTextContainer, p4: NSRange, p5: boolean) => void): void;
  fillBackgroundRectArrayCountForCharacterRangeColor(_: NSRect, count: number, forCharacterRange: NSRange, color: NSColor): void;
  firstUnlaidCharacterIndex(): number;
  firstUnlaidGlyphIndex(): number;
  fractionOfDistanceThroughGlyphForPointInTextContainer(for_: NSPoint, in_: NSTextContainer): number;
  getFirstUnlaidCharacterIndexGlyphIndex(_?: number, glyphIndex?: number): void;
  getGlyphsInRangeGlyphsPropertiesCharacterIndexesBidiLevels(in_: NSRange, glyphs?: number, properties?: NSLayoutManager.GlyphProperty, characterIndexes?: number, bidiLevels?: string): number;
  getLineFragmentInsertionPointsForCharacterAtIndexAlternatePositionsInDisplayOrderPositionsCharacterIndexes(forCharacterAt: number, alternatePositions: boolean, inDisplayOrder: boolean, positions?: number, characterIndexes?: number): number;
  glyphAtIndex(at: number): number;
  glyphAtIndexIsValidIndex(at: number, isValidIndex?: boolean): number;
  glyphIndexForCharacterAtIndex(at: number): number;
  glyphIndexForPointInTextContainer(for_: NSPoint, in_: NSTextContainer): number;
  glyphIndexForPointInTextContainerFractionOfDistanceThroughGlyph(for_: NSPoint, in_: NSTextContainer, fractionOfDistanceThroughGlyph?: number): number;
  glyphRangeForBoundingRectInTextContainer(forBoundingRect: NSRect, in_: NSTextContainer): NSRange;
  glyphRangeForBoundingRectWithoutAdditionalLayoutInTextContainer(forBoundingRectWithoutAdditionalLayout: NSRect, in_: NSTextContainer): NSRange;
  glyphRangeForCharacterRangeActualCharacterRange(forCharacterRange: NSRange, actualCharacterRange?: NSRange): NSRange;
  glyphRangeForTextContainer(for_: NSTextContainer): NSRange;
  static createWithCoder(coder: NSCoder): this;
  insertTextContainerAtIndex(_: NSTextContainer, at: number): void;
  invalidateDisplayForCharacterRange(forCharacterRange: NSRange): void;
  invalidateDisplayForGlyphRange(forGlyphRange: NSRange): void;
  invalidateGlyphsForCharacterRangeChangeInLengthActualCharacterRange(forCharacterRange: NSRange, changeInLength: number, actualCharacterRange?: NSRange): void;
  invalidateLayoutForCharacterRangeActualCharacterRange(forCharacterRange: NSRange, actualCharacterRange?: NSRange): void;
  isValidGlyphIndex(_: number): boolean;
  layoutManagerOwnsFirstResponderInWindow(in_: NSWindow): boolean;
  layoutOptions(): number;
  layoutRectForTextBlockAtIndexEffectiveRange(for_: NSTextBlock, at: number, effectiveRange?: NSRange): NSRect;
  layoutRectForTextBlockGlyphRange(for_: NSTextBlock, glyphRange: NSRange): NSRect;
  lineFragmentRectForGlyphAtIndexEffectiveRange(forGlyphAt: number, effectiveRange?: NSRange): NSRect;
  lineFragmentRectForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(forGlyphAt: number, effectiveRange?: NSRange, withoutAdditionalLayout: boolean): NSRect;
  lineFragmentUsedRectForGlyphAtIndexEffectiveRange(forGlyphAt: number, effectiveRange?: NSRange): NSRect;
  lineFragmentUsedRectForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(forGlyphAt: number, effectiveRange?: NSRange, withoutAdditionalLayout: boolean): NSRect;
  locationForGlyphAtIndex(forGlyphAt: number): NSPoint;
  notShownAttributeForGlyphAtIndex(forGlyphAt: number): boolean;
  processEditingForTextStorageEditedRangeChangeInLengthInvalidatedRange(for_: NSTextStorage, edited: NSTextStorageEditActions, range: NSRange, changeInLength: number, invalidatedRange: NSRange): void;
  propertyForGlyphAtIndex(at: number): NSLayoutManager.GlyphProperty;
  rangeOfNominallySpacedGlyphsContainingIndex(ofNominallySpacedGlyphsContaining: number): NSRange;
  rectArrayForCharacterRangeWithinSelectedCharacterRangeInTextContainerRectCount(forCharacterRange: NSRange, withinSelectedCharacterRange: NSRange, in_: NSTextContainer, rectCount: number): NSRect;
  rectArrayForGlyphRangeWithinSelectedGlyphRangeInTextContainerRectCount(forGlyphRange: NSRange, withinSelectedGlyphRange: NSRange, in_: NSTextContainer, rectCount: number): NSRect;
  removeTemporaryAttributeForCharacterRange(_: string, forCharacterRange: NSRange): void;
  removeTextContainerAtIndex(at: number): void;
  replaceTextStorage(_: NSTextStorage): void;
  rulerAccessoryViewForTextViewParagraphStyleRulerEnabled(for_: NSTextView, paragraphStyle: NSParagraphStyle, ruler: NSRulerView, enabled: boolean): NSView;
  rulerMarkersForTextViewParagraphStyleRuler(for_: NSTextView, paragraphStyle: NSParagraphStyle, ruler: NSRulerView): NSArray<NSRulerMarker>;
  setAttachmentSizeForGlyphRange(_: NSSize, forGlyphRange: NSRange): void;
  setBoundsRectForTextBlockGlyphRange(_: NSRect, for_: NSTextBlock, glyphRange: NSRange): void;
  setDrawsOutsideLineFragmentForGlyphAtIndex(_: boolean, forGlyphAt: number): void;
  setExtraLineFragmentRectUsedRectTextContainer(_: NSRect, usedRect: NSRect, textContainer: NSTextContainer): void;
  setGlyphsPropertiesCharacterIndexesFontForGlyphRange(_: number, properties: NSLayoutManager.GlyphProperty, characterIndexes: number, font: NSFont, forGlyphRange: NSRange): void;
  setLayoutRectForTextBlockGlyphRange(_: NSRect, for_: NSTextBlock, glyphRange: NSRange): void;
  setLineFragmentRectForGlyphRangeUsedRect(_: NSRect, forGlyphRange: NSRange, usedRect: NSRect): void;
  setLocationForStartOfGlyphRange(_: NSPoint, forStartOfGlyphRange: NSRange): void;
  setNotShownAttributeForGlyphAtIndex(_: boolean, forGlyphAt: number): void;
  setTemporaryAttributesForCharacterRange(_: NSDictionary<string, any>, forCharacterRange: NSRange): void;
  setTextContainerForGlyphRange(_: NSTextContainer, forGlyphRange: NSRange): void;
  showAttachmentCellInRectCharacterIndex(_: NSCell, in_: NSRect, characterIndex: number): void;
  showCGGlyphsPositionsCountFontTextMatrixAttributesInContext(_: number, positions: NSPoint, count: number, font: NSFont, textMatrix: CGAffineTransform, attributes: NSDictionary<string, any>, in_: any): void;
  strikethroughGlyphRangeStrikethroughTypeLineFragmentRectLineFragmentGlyphRangeContainerOrigin(_: NSRange, strikethroughType: NSUnderlineStyle, lineFragmentRect: NSRect, lineFragmentGlyphRange: NSRange, containerOrigin: NSPoint): void;
  temporaryAttributeAtCharacterIndexEffectiveRange(_: string, atCharacterIndex: number, effectiveRange?: NSRange): any;
  temporaryAttributeAtCharacterIndexLongestEffectiveRangeInRange(_: string, atCharacterIndex: number, longestEffectiveRange?: NSRange, in_: NSRange): any;
  temporaryAttributesAtCharacterIndexEffectiveRange(atCharacterIndex: number, effectiveRange?: NSRange): NSDictionary<string, any>;
  temporaryAttributesAtCharacterIndexLongestEffectiveRangeInRange(atCharacterIndex: number, longestEffectiveRange?: NSRange, in_: NSRange): NSDictionary<string, any>;
  textContainerChangedGeometry(_: NSTextContainer): void;
  textContainerChangedTextView(_: NSTextContainer): void;
  textContainerForGlyphAtIndexEffectiveRange(forGlyphAt: number, effectiveRange?: NSRange): NSTextContainer;
  textContainerForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout(forGlyphAt: number, effectiveRange?: NSRange, withoutAdditionalLayout: boolean): NSTextContainer;
  truncatedGlyphRangeInLineFragmentForGlyphAtIndex(inLineFragmentForGlyphAt: number): NSRange;
  underlineGlyphRangeUnderlineTypeLineFragmentRectLineFragmentGlyphRangeContainerOrigin(_: NSRange, underlineType: NSUnderlineStyle, lineFragmentRect: NSRect, lineFragmentGlyphRange: NSRange, containerOrigin: NSPoint): void;
  usedRectForTextContainer(for_: NSTextContainer): NSRect;
}

interface NSLayoutManagerDelegate extends NSObject {
  layoutManagerLineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(_: NSLayoutManager, lineSpacingAfterGlyphAt: number, withProposedLineFragmentRect: NSRect): number;
  layoutManagerParagraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect?(_: NSLayoutManager, paragraphSpacingBeforeGlyphAt: number, withProposedLineFragmentRect: NSRect): number;
  layoutManagerParagraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(_: NSLayoutManager, paragraphSpacingAfterGlyphAt: number, withProposedLineFragmentRect: NSRect): number;
  layoutManagerShouldUseActionForControlCharacterAtIndex?(_: NSLayoutManager, shouldUse: NSLayoutManager.ControlCharacterAction, forControlCharacterAt: number): NSLayoutManager.ControlCharacterAction;
  layoutManagerShouldBreakLineByWordBeforeCharacterAtIndex?(_: NSLayoutManager, shouldBreakLineByWordBeforeCharacterAt: number): boolean;
  layoutManagerShouldBreakLineByHyphenatingBeforeCharacterAtIndex?(_: NSLayoutManager, shouldBreakLineByHyphenatingBeforeCharacterAt: number): boolean;
  layoutManagerBoundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex?(_: NSLayoutManager, boundingBoxForControlGlyphAt: number, for_: NSTextContainer, proposedLineFragment: NSRect, glyphPosition: NSPoint, characterIndex: number): NSRect;
  layoutManagerShouldSetLineFragmentRectLineFragmentUsedRectBaselineOffsetInTextContainerForGlyphRange?(_: NSLayoutManager, shouldSetLineFragmentRect: NSRect, lineFragmentUsedRect: NSRect, baselineOffset: number, in_: NSTextContainer, forGlyphRange: NSRange): boolean;
  layoutManagerDidCompleteLayoutForTextContainerAtEnd?(_: NSLayoutManager, didCompleteLayoutFor?: NSTextContainer, atEnd: boolean): void;
  layoutManagerTextContainerDidChangeGeometryFromSize?(_: NSLayoutManager, textContainer: NSTextContainer, didChangeGeometryFrom: NSSize): void;
  layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange?(_: NSLayoutManager, shouldGenerateGlyphs: number, properties: NSLayoutManager.GlyphProperty, characterIndexes: number, font: NSFont, forGlyphRange: NSRange): number;
  layoutManagerShouldUseTemporaryAttributesForDrawingToScreenAtCharacterIndexEffectiveRange?(_: NSLayoutManager, shouldUseTemporaryAttributes: NSDictionary<string, any>, forDrawingToScreen: boolean, atCharacterIndex: number, effectiveRange?: NSRange): NSDictionary<string, any>;
  layoutManagerDidInvalidateLayout?(_: NSLayoutManager): void;
}

declare var NSLayoutManagerDelegate: {
  prototype: NSLayoutManagerDelegate;
};

declare var NSLayoutPriorityDefaultHigh: number;

declare var NSLayoutPriorityDefaultLow: number;

declare var NSLayoutPriorityDragThatCanResizeWindow: number;

declare var NSLayoutPriorityDragThatCannotResizeWindow: number;

declare var NSLayoutPriorityFittingSizeCompression: number;

declare var NSLayoutPriorityRequired: number;

declare var NSLayoutPriorityWindowSizeStayPut: number;

declare class NSLayoutXAxisAnchor extends NSLayoutAnchor<NSLayoutXAxisAnchor> {
  anchorWithOffsetToAnchor(to: NSLayoutXAxisAnchor): NSLayoutDimension;
}

declare class NSLayoutYAxisAnchor extends NSLayoutAnchor<NSLayoutYAxisAnchor> {
  anchorWithOffsetToAnchor(to: NSLayoutYAxisAnchor): NSLayoutDimension;
}


declare const NSLeftArrowFunctionKey: number;
declare var NSLeftMarginDocumentAttribute: string;


declare const NSLeftTextMovement: number;
declare class NSLevelIndicator extends NSControl {
  criticalFillColor: NSColor;
  setCriticalFillColor(_: NSColor)
  criticalValue: number;
  setCriticalValue(_: number)
  drawsTieredCapacityLevels: boolean;
  setDrawsTieredCapacityLevels(_: boolean)
  isEditable: boolean;
  setEditable(_: boolean)
  fillColor: NSColor;
  setFillColor(_: NSColor)
  levelIndicatorStyle: NSLevelIndicator.Style;
  setLevelIndicatorStyle(_: NSLevelIndicator.Style)
  maxValue: number;
  setMaxValue(_: number)
  minValue: number;
  setMinValue(_: number)
  numberOfMajorTickMarks: number;
  setNumberOfMajorTickMarks(_: number)
  numberOfTickMarks: number;
  setNumberOfTickMarks(_: number)
  placeholderVisibility: NSLevelIndicator.PlaceholderVisibility;
  setPlaceholderVisibility(_: NSLevelIndicator.PlaceholderVisibility)
  ratingImage: NSImage;
  setRatingImage(_: NSImage)
  ratingPlaceholderImage: NSImage;
  setRatingPlaceholderImage(_: NSImage)
  tickMarkPosition: NSSlider.TickMarkPosition;
  setTickMarkPosition(_: NSSlider.TickMarkPosition)
  warningFillColor: NSColor;
  setWarningFillColor(_: NSColor)
  warningValue: number;
  setWarningValue(_: number)
  rectOfTickMarkAtIndex(at: number): NSRect;
  tickMarkValueAtIndex(at: number): number;
}

declare class NSLevelIndicatorCell extends NSActionCell {
  criticalValue: number;
  setCriticalValue(_: number)
  levelIndicatorStyle: NSLevelIndicator.Style;
  setLevelIndicatorStyle(_: NSLevelIndicator.Style)
  maxValue: number;
  setMaxValue(_: number)
  minValue: number;
  setMinValue(_: number)
  numberOfMajorTickMarks: number;
  setNumberOfMajorTickMarks(_: number)
  numberOfTickMarks: number;
  setNumberOfTickMarks(_: number)
  tickMarkPosition: NSSlider.TickMarkPosition;
  setTickMarkPosition(_: NSSlider.TickMarkPosition)
  warningValue: number;
  setWarningValue(_: number)
  static createWithLevelIndicatorStyle(levelIndicatorStyle: NSLevelIndicator.Style): this;
  rectOfTickMarkAtIndex(at: number): NSRect;
  tickMarkValueAtIndex(at: number): number;
}

declare var NSLigatureAttributeName: string;

declare var NSLightGray: number;


declare const NSLineSeparatorCharacter: number;
declare var NSLineToBezierPathElement: NSBezierPath.ElementType;

declare var NSLinkAttributeName: string;

declare var NSLocalizedKeyDictionaryBinding: string;

declare var NSMacSimpleTextDocumentType: string;

declare class NSMagnificationGestureRecognizer extends NSGestureRecognizer {
  magnification: number;
  setMagnification(_: number)
}

declare var NSMainMenuWindowLevel: number;

declare var NSManagedObjectContextBinding: string;

declare var NSManagerDocumentAttribute: string;

declare var NSMarkedClauseSegmentAttributeName: string;

declare class NSMatrix extends NSControl implements NSUserInterfaceValidations, NSViewToolTipOwner {
  allowsEmptySelection: boolean;
  setAllowsEmptySelection(_: boolean)
  autorecalculatesCellSize: boolean;
  setAutorecalculatesCellSize(_: boolean)
  isAutoscroll: boolean;
  setAutoscroll(_: boolean)
  autosizesCells: boolean;
  setAutosizesCells(_: boolean)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  cellBackgroundColor: NSColor;
  setCellBackgroundColor(_: NSColor)
  cellClass: typeof NSObject;
  setCellClass(_: typeof NSObject)
  cellSize: NSSize;
  setCellSize(_: NSSize)
  readonly cells: NSArray<NSCell>;
  delegate: NSMatrixDelegate;
  setDelegate(_: NSMatrixDelegate)
  doubleAction: string;
  setDoubleAction(_: string)
  drawsBackground: boolean;
  setDrawsBackground(_: boolean)
  drawsCellBackground: boolean;
  setDrawsCellBackground(_: boolean)
  intercellSpacing: NSSize;
  setIntercellSpacing(_: NSSize)
  keyCell: NSCell;
  setKeyCell(_: NSCell)
  mode: NSMatrix.Mode;
  setMode(_: NSMatrix.Mode)
  readonly mouseDownFlags: number;
  readonly numberOfColumns: number;
  readonly numberOfRows: number;
  prototype: NSCell;
  setPrototype(_: NSCell)
  readonly selectedCell: NSCell;
  readonly selectedCells: NSArray<NSCell>;
  readonly selectedColumn: number;
  readonly selectedRow: number;
  isSelectionByRect: boolean;
  setSelectionByRect(_: boolean)
  tabKeyTraversesCells: boolean;
  setTabKeyTraversesCells(_: boolean)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  addColumn(): void;
  addColumnWithCells(with_: NSArray<NSCell>): void;
  addRow(): void;
  addRowWithCells(with_: NSArray<NSCell>): void;
  cellAtRowColumn(atRow: number, column: number): NSCell;
  cellFrameAtRowColumn(atRow: number, column: number): NSRect;
  cellWithTag(withTag: number): NSCell;
  conformsToProtocol(to: any /* Protocol */): boolean;
  deselectAllCells(): void;
  deselectSelectedCell(): void;
  drawCellAtRowColumn(atRow: number, column: number): void;
  getNumberOfRowsColumns(_?: number, columns?: number): void;
  getRowColumnForPoint(_: number, column: number, for_: NSPoint): boolean;
  getRowColumnOfCell(_: number, column: number, of: NSCell): boolean;
  highlightCellAtRowColumn(_: boolean, atRow: number, column: number): void;
  static createWithFrameModeCellClassNumberOfRowsNumberOfColumns(frame: NSRect, mode: NSMatrix.Mode, cellClass?: typeof NSObject, numberOfRows: number, numberOfColumns: number): this;
  static createWithFrameModePrototypeNumberOfRowsNumberOfColumns(frame: NSRect, mode: NSMatrix.Mode, prototype: NSCell, numberOfRows: number, numberOfColumns: number): this;
  insertColumn(_: number): void;
  insertColumnWithCells(_: number, with_?: NSArray<NSCell>): void;
  insertRow(_: number): void;
  insertRowWithCells(_: number, with_?: NSArray<NSCell>): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  makeCellAtRowColumn(atRow: number, column: number): NSCell;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  putCellAtRowColumn(_: NSCell, atRow: number, column: number): void;
  removeColumn(_: number): void;
  removeRow(_: number): void;
  renewRowsColumns(_: number, columns: number): void;
  respondsToSelector(_: string): boolean;
  scrollCellToVisibleAtRowColumn(atRow: number, column: number): void;
  selectCellAtRowColumn(atRow: number, column: number): void;
  selectCellWithTag(withTag: number): boolean;
  selectText(_?: any): void;
  selectTextAtRowColumn(atRow: number, column: number): NSCell;
  self(): this;
  sendAction(): boolean;
  sendActionToForAllCells(_: string, to: any, forAllCells: boolean): void;
  sendDoubleAction(): void;
  setScrollable(_: boolean): void;
  setSelectionFromToAnchorHighlight(_: number, to: number, anchor: number, highlight: boolean): void;
  setStateAtRowColumn(_: number, atRow: number, column: number): void;
  setToolTipForCell(_?: string, for_: NSCell): void;
  setValidateSize(_: boolean): void;
  sizeToCells(): void;
  sortUsingFunctionContext(using?: (p1: any, p2: any, p3: any) => number, context?: any): void;
  sortUsingSelector(using: string): void;
  textDidBeginEditing(_: Notification): void;
  textDidChange(_: Notification): void;
  textDidEndEditing(_: Notification): void;
  textShouldBeginEditing(_: NSText): boolean;
  textShouldEndEditing(_: NSText): boolean;
  toolTipForCell(for_: NSCell): string;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
  viewStringForToolTipPointUserData(_: NSView, stringForToolTip: number, point: NSPoint, userData?: any): string;
}

interface NSMatrixDelegate extends NSControlTextEditingDelegate {
}

declare var NSMatrixDelegate: {
  prototype: NSMatrixDelegate;
};

declare var NSMaxValueBinding: string;

declare var NSMaxWidthBinding: string;

declare var NSMaximumRecentsBinding: string;

declare class NSMediaLibraryBrowserController extends NSObject {
  frame: NSRect;
  setFrame(_: NSRect)
  mediaLibraries: NSMediaLibraryBrowserController.Library;
  setMediaLibraries(_: NSMediaLibraryBrowserController.Library)
  isVisible: boolean;
  setVisible(_: boolean)
  static sharedMediaLibraryBrowserController(): NSMediaLibraryBrowserController;
  togglePanel(_?: any): void;
}

declare class NSMenu extends NSObject implements NSAccessibility, NSAccessibilityElementProtocol, NSCoding, NSCopying, NSUserInterfaceItemIdentification {
  static menuBarVisible(): boolean;
  static popUpContextMenuWithEventForView(_: NSMenu, with_: NSEvent, for_: NSView): void;
  static popUpContextMenuWithEventForViewWithFont(_: NSMenu, with_: NSEvent, for_: NSView, with_?: NSFont): void;
  static setMenuBarVisible(_: boolean): void;
  allowsContextMenuPlugIns: boolean;
  setAllowsContextMenuPlugIns(_: boolean)
  autoenablesItems: boolean;
  setAutoenablesItems(_: boolean)
  delegate: NSMenuDelegate;
  setDelegate(_: NSMenuDelegate)
  font: NSFont;
  setFont(_: NSFont)
  readonly highlightedItem: NSMenuItem;
  itemArray: NSArray<NSMenuItem>;
  setItemArray(_: NSArray<NSMenuItem>)
  readonly menuBarHeight: number;
  minimumWidth: number;
  setMinimumWidth(_: number)
  readonly numberOfItems: number;
  readonly propertiesToUpdate: NSMenu.Properties;
  showsStateColumn: boolean;
  setShowsStateColumn(_: boolean)
  readonly size: NSSize;
  supermenu: NSMenu;
  setSupermenu(_: NSMenu)
  title: string;
  setTitle(_: string)
  userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection;
  setUserInterfaceLayoutDirection(_: NSUserInterfaceLayoutDirection)
  accessibilityActivationPoint: NSPoint;
  setAccessibilityActivationPoint(_: NSPoint) // inherited from NSAccessibility
  accessibilityAllowedValues: NSArray<number>;
  setAccessibilityAllowedValues(_: NSArray<number>) // inherited from NSAccessibility
  isAccessibilityAlternateUIVisible: boolean;
  setAccessibilityAlternateUIVisible(_: boolean) // inherited from NSAccessibility
  accessibilityApplicationFocusedUIElement: any;
  setAccessibilityApplicationFocusedUIElement(_: any) // inherited from NSAccessibility
  accessibilityCancelButton: any;
  setAccessibilityCancelButton(_: any) // inherited from NSAccessibility
  accessibilityChildren: NSArray<any>;
  setAccessibilityChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;
  setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>) // inherited from NSAccessibility
  accessibilityClearButton: any;
  setAccessibilityClearButton(_: any) // inherited from NSAccessibility
  accessibilityCloseButton: any;
  setAccessibilityCloseButton(_: any) // inherited from NSAccessibility
  accessibilityColumnCount: number;
  setAccessibilityColumnCount(_: number) // inherited from NSAccessibility
  accessibilityColumnHeaderUIElements: NSArray<any>;
  setAccessibilityColumnHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumnIndexRange: NSRange;
  setAccessibilityColumnIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityColumnTitles: NSArray<any>;
  setAccessibilityColumnTitles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumns: NSArray<any>;
  setAccessibilityColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityContents: NSArray<any>;
  setAccessibilityContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityCriticalValue: any;
  setAccessibilityCriticalValue(_: any) // inherited from NSAccessibility
  accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;
  setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>) // inherited from NSAccessibility
  accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;
  setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>) // inherited from NSAccessibility
  accessibilityDecrementButton: any;
  setAccessibilityDecrementButton(_: any) // inherited from NSAccessibility
  accessibilityDefaultButton: any;
  setAccessibilityDefaultButton(_: any) // inherited from NSAccessibility
  isAccessibilityDisclosed: boolean;
  setAccessibilityDisclosed(_: boolean) // inherited from NSAccessibility
  accessibilityDisclosedByRow: any;
  setAccessibilityDisclosedByRow(_: any) // inherited from NSAccessibility
  accessibilityDisclosedRows: any;
  setAccessibilityDisclosedRows(_: any) // inherited from NSAccessibility
  accessibilityDisclosureLevel: number;
  setAccessibilityDisclosureLevel(_: number) // inherited from NSAccessibility
  accessibilityDocument: string;
  setAccessibilityDocument(_: string) // inherited from NSAccessibility
  isAccessibilityEdited: boolean;
  setAccessibilityEdited(_: boolean) // inherited from NSAccessibility
  isAccessibilityElement: boolean;
  setAccessibilityElement(_: boolean) // inherited from NSAccessibility
  isAccessibilityEnabled: boolean;
  setAccessibilityEnabled(_: boolean) // inherited from NSAccessibility
  isAccessibilityExpanded: boolean;
  setAccessibilityExpanded(_: boolean) // inherited from NSAccessibility
  accessibilityExtrasMenuBar: any;
  setAccessibilityExtrasMenuBar(_: any) // inherited from NSAccessibility
  accessibilityFilename: string;
  setAccessibilityFilename(_: string) // inherited from NSAccessibility
  isAccessibilityFocused: boolean;
  setAccessibilityFocused(_: boolean) // inherited from NSAccessibility
  accessibilityFocusedWindow: any;
  setAccessibilityFocusedWindow(_: any) // inherited from NSAccessibility
  accessibilityFrame: NSRect;
  setAccessibilityFrame(_: NSRect) // inherited from NSAccessibility
  isAccessibilityFrontmost: boolean;
  setAccessibilityFrontmost(_: boolean) // inherited from NSAccessibility
  accessibilityFullScreenButton: any;
  setAccessibilityFullScreenButton(_: any) // inherited from NSAccessibility
  accessibilityGrowArea: any;
  setAccessibilityGrowArea(_: any) // inherited from NSAccessibility
  accessibilityHandles: NSArray<any>;
  setAccessibilityHandles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityHeader: any;
  setAccessibilityHeader(_: any) // inherited from NSAccessibility
  accessibilityHelp: string;
  setAccessibilityHelp(_: string) // inherited from NSAccessibility
  isAccessibilityHidden: boolean;
  setAccessibilityHidden(_: boolean) // inherited from NSAccessibility
  accessibilityHorizontalScrollBar: any;
  setAccessibilityHorizontalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityHorizontalUnitDescription: string;
  setAccessibilityHorizontalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityHorizontalUnits: NSAccessibility.Units;
  setAccessibilityHorizontalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityIdentifier: string;
  setAccessibilityIdentifier(_: string) // inherited from NSAccessibility
  accessibilityIncrementButton: any;
  setAccessibilityIncrementButton(_: any) // inherited from NSAccessibility
  accessibilityIndex: number;
  setAccessibilityIndex(_: number) // inherited from NSAccessibility
  accessibilityInsertionPointLineNumber: number;
  setAccessibilityInsertionPointLineNumber(_: number) // inherited from NSAccessibility
  accessibilityLabel: string;
  setAccessibilityLabel(_: string) // inherited from NSAccessibility
  accessibilityLabelUIElements: NSArray<any>;
  setAccessibilityLabelUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityLabelValue: number;
  setAccessibilityLabelValue(_: number) // inherited from NSAccessibility
  accessibilityLinkedUIElements: NSArray<any>;
  setAccessibilityLinkedUIElements(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityMain: boolean;
  setAccessibilityMain(_: boolean) // inherited from NSAccessibility
  accessibilityMainWindow: any;
  setAccessibilityMainWindow(_: any) // inherited from NSAccessibility
  accessibilityMarkerGroupUIElement: any;
  setAccessibilityMarkerGroupUIElement(_: any) // inherited from NSAccessibility
  accessibilityMarkerTypeDescription: string;
  setAccessibilityMarkerTypeDescription(_: string) // inherited from NSAccessibility
  accessibilityMarkerUIElements: NSArray<any>;
  setAccessibilityMarkerUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityMarkerValues: any;
  setAccessibilityMarkerValues(_: any) // inherited from NSAccessibility
  accessibilityMaxValue: any;
  setAccessibilityMaxValue(_: any) // inherited from NSAccessibility
  accessibilityMenuBar: any;
  setAccessibilityMenuBar(_: any) // inherited from NSAccessibility
  accessibilityMinValue: any;
  setAccessibilityMinValue(_: any) // inherited from NSAccessibility
  accessibilityMinimizeButton: any;
  setAccessibilityMinimizeButton(_: any) // inherited from NSAccessibility
  isAccessibilityMinimized: boolean;
  setAccessibilityMinimized(_: boolean) // inherited from NSAccessibility
  isAccessibilityModal: boolean;
  setAccessibilityModal(_: boolean) // inherited from NSAccessibility
  accessibilityNextContents: NSArray<any>;
  setAccessibilityNextContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityNumberOfCharacters: number;
  setAccessibilityNumberOfCharacters(_: number) // inherited from NSAccessibility
  isAccessibilityOrderedByRow: boolean;
  setAccessibilityOrderedByRow(_: boolean) // inherited from NSAccessibility
  accessibilityOrientation: NSAccessibility.Orientation;
  setAccessibilityOrientation(_: NSAccessibility.Orientation) // inherited from NSAccessibility
  accessibilityOverflowButton: any;
  setAccessibilityOverflowButton(_: any) // inherited from NSAccessibility
  accessibilityParent: any;
  setAccessibilityParent(_: any) // inherited from NSAccessibility
  accessibilityPlaceholderValue: string;
  setAccessibilityPlaceholderValue(_: string) // inherited from NSAccessibility
  accessibilityPreviousContents: NSArray<any>;
  setAccessibilityPreviousContents(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityProtectedContent: boolean;
  setAccessibilityProtectedContent(_: boolean) // inherited from NSAccessibility
  accessibilityProxy: any;
  setAccessibilityProxy(_: any) // inherited from NSAccessibility
  isAccessibilityRequired: boolean;
  setAccessibilityRequired(_: boolean) // inherited from NSAccessibility
  accessibilityRole: string;
  setAccessibilityRole(_: string) // inherited from NSAccessibility
  accessibilityRoleDescription: string;
  setAccessibilityRoleDescription(_: string) // inherited from NSAccessibility
  accessibilityRowCount: number;
  setAccessibilityRowCount(_: number) // inherited from NSAccessibility
  accessibilityRowHeaderUIElements: NSArray<any>;
  setAccessibilityRowHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRowIndexRange: NSRange;
  setAccessibilityRowIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityRows: NSArray<any>;
  setAccessibilityRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRulerMarkerType: NSAccessibility.RulerMarkerType;
  setAccessibilityRulerMarkerType(_: NSAccessibility.RulerMarkerType) // inherited from NSAccessibility
  accessibilitySearchButton: any;
  setAccessibilitySearchButton(_: any) // inherited from NSAccessibility
  accessibilitySearchMenu: any;
  setAccessibilitySearchMenu(_: any) // inherited from NSAccessibility
  isAccessibilitySelected: boolean;
  setAccessibilitySelected(_: boolean) // inherited from NSAccessibility
  accessibilitySelectedCells: NSArray<any>;
  setAccessibilitySelectedCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedChildren: NSArray<any>;
  setAccessibilitySelectedChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedColumns: NSArray<any>;
  setAccessibilitySelectedColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedRows: NSArray<any>;
  setAccessibilitySelectedRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedText: string;
  setAccessibilitySelectedText(_: string) // inherited from NSAccessibility
  accessibilitySelectedTextRange: NSRange;
  setAccessibilitySelectedTextRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySelectedTextRanges: NSArray<NSValue>;
  setAccessibilitySelectedTextRanges(_: NSArray<NSValue>) // inherited from NSAccessibility
  accessibilityServesAsTitleForUIElements: NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedCharacterRange: NSRange;
  setAccessibilitySharedCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySharedFocusElements: NSArray<any>;
  setAccessibilitySharedFocusElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedTextUIElements: NSArray<any>;
  setAccessibilitySharedTextUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityShownMenu: any;
  setAccessibilityShownMenu(_: any) // inherited from NSAccessibility
  accessibilitySortDirection: NSAccessibility.SortDirection;
  setAccessibilitySortDirection(_: NSAccessibility.SortDirection) // inherited from NSAccessibility
  accessibilitySplitters: NSArray<any>;
  setAccessibilitySplitters(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySubrole: string;
  setAccessibilitySubrole(_: string) // inherited from NSAccessibility
  accessibilityTabs: NSArray<any>;
  setAccessibilityTabs(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityTitle: string;
  setAccessibilityTitle(_: string) // inherited from NSAccessibility
  accessibilityTitleUIElement: any;
  setAccessibilityTitleUIElement(_: any) // inherited from NSAccessibility
  accessibilityToolbarButton: any;
  setAccessibilityToolbarButton(_: any) // inherited from NSAccessibility
  accessibilityTopLevelUIElement: any;
  setAccessibilityTopLevelUIElement(_: any) // inherited from NSAccessibility
  accessibilityURL: NSURL;
  setAccessibilityURL(_: NSURL) // inherited from NSAccessibility
  accessibilityUnitDescription: string;
  setAccessibilityUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityUnits: NSAccessibility.Units;
  setAccessibilityUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityValue: any;
  setAccessibilityValue(_: any) // inherited from NSAccessibility
  accessibilityValueDescription: string;
  setAccessibilityValueDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalScrollBar: any;
  setAccessibilityVerticalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityVerticalUnitDescription: string;
  setAccessibilityVerticalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalUnits: NSAccessibility.Units;
  setAccessibilityVerticalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityVisibleCells: NSArray<any>;
  setAccessibilityVisibleCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleCharacterRange: NSRange;
  setAccessibilityVisibleCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilityVisibleChildren: NSArray<any>;
  setAccessibilityVisibleChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleColumns: NSArray<any>;
  setAccessibilityVisibleColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleRows: NSArray<any>;
  setAccessibilityVisibleRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityWarningValue: any;
  setAccessibilityWarningValue(_: any) // inherited from NSAccessibility
  accessibilityWindow: any;
  setAccessibilityWindow(_: any) // inherited from NSAccessibility
  accessibilityWindows: NSArray<any>;
  setAccessibilityWindows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityZoomButton: any;
  setAccessibilityZoomButton(_: any) // inherited from NSAccessibility
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  identifier: string;
  setIdentifier(_: string) // inherited from NSUserInterfaceItemIdentification
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;
  accessibilityCellForColumnRow(_: number, row: number): any;
  accessibilityFrame(): NSRect;
  accessibilityFrameForRange(_: NSRange): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLayoutPointForScreenPoint(_: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(_: NSSize): NSSize;
  accessibilityLineForIndex(_: number): number;
  accessibilityParent(): any;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  accessibilityRTFForRange(_: NSRange): Data;
  accessibilityRangeForIndex(_: number): NSRange;
  accessibilityRangeForLine(_: number): NSRange;
  accessibilityRangeForPosition(_: NSPoint): NSRange;
  accessibilityScreenPointForLayoutPoint(_: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(_: NSSize): NSSize;
  accessibilityStringForRange(_: NSRange): string;
  accessibilityStyleRangeForIndex(_: number): NSRange;
  addItem(_: NSMenuItem): void;
  addItemWithTitleActionKeyEquivalent(withTitle: string, action?: string, keyEquivalent: string): NSMenuItem;
  cancelTracking(): void;
  cancelTrackingWithoutAnimation(): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  encodeWithCoder(with_: NSCoder): void;
  indexOfItem(of: NSMenuItem): number;
  indexOfItemWithRepresentedObject(withRepresentedObject?: any): number;
  indexOfItemWithSubmenu(withSubmenu?: NSMenu): number;
  indexOfItemWithTag(withTag: number): number;
  indexOfItemWithTargetAndAction(withTarget?: any, andAction?: string): number;
  indexOfItemWithTitle(withTitle: string): number;
  static createWithCoder(coder: NSCoder): this;
  static createWithTitle(title: string): this;
  insertItemAtIndex(_: NSMenuItem, at: number): void;
  insertItemWithTitleActionKeyEquivalentAtIndex(withTitle: string, action?: string, keyEquivalent: string, at: number): NSMenuItem;
  isAccessibilityFocused(): boolean;
  isAccessibilitySelectorAllowed(_: string): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  itemAtIndex(at: number): NSMenuItem;
  itemChanged(_: NSMenuItem): void;
  itemWithTag(withTag: number): NSMenuItem;
  itemWithTitle(withTitle: string): NSMenuItem;
  performActionForItemAtIndex(at: number): void;
  performKeyEquivalent(with_: NSEvent): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  popUpMenuPositioningItemAtLocationInView(positioning?: NSMenuItem, at: NSPoint, in_?: NSView): boolean;
  removeAllItems(): void;
  removeItem(_: NSMenuItem): void;
  removeItemAtIndex(at: number): void;
  respondsToSelector(_: string): boolean;
  self(): this;
  setSubmenuForItem(_?: NSMenu, for_: NSMenuItem): void;
  submenuAction(_?: any): void;
  update(): void;
}

interface NSMenuDelegate extends NSObject {
  confinementRectForMenuOnScreen?(for_: NSMenu, on?: NSScreen): NSRect;
  menuUpdateItemAtIndexShouldCancel?(_: NSMenu, update: NSMenuItem, at: number, shouldCancel: boolean): boolean;
  menuWillHighlightItem?(_: NSMenu, willHighlight?: NSMenuItem): void;
  menuDidClose?(_: NSMenu): void;
  menuHasKeyEquivalentForEventTargetAction?(_: NSMenu, for_: NSEvent, target?: any, action?: string): boolean;
  menuNeedsUpdate?(_: NSMenu): void;
  menuWillOpen?(_: NSMenu): void;
  numberOfItemsInMenu?(in_: NSMenu): number;
}

declare var NSMenuDelegate: {
  prototype: NSMenuDelegate;
};

declare var NSMenuDidAddItemNotification: string;

declare var NSMenuDidBeginTrackingNotification: string;

declare var NSMenuDidChangeItemNotification: string;

declare var NSMenuDidEndTrackingNotification: string;

declare var NSMenuDidRemoveItemNotification: string;

declare var NSMenuDidSendActionNotification: string;


declare const NSMenuFunctionKey: number;
declare class NSMenuItem extends NSObject implements NSAccessibility, NSAccessibilityElementProtocol, NSCoding, NSCopying, NSUserInterfaceItemIdentification, NSValidatedUserInterfaceItem {
  static separatorItem(): NSMenuItem;
  action: string;
  setAction(_: string)
  allowsKeyEquivalentWhenHidden: boolean;
  setAllowsKeyEquivalentWhenHidden(_: boolean)
  isAlternate: boolean;
  setAlternate(_: boolean)
  attributedTitle: NSAttributedString;
  setAttributedTitle(_: NSAttributedString)
  isEnabled: boolean;
  setEnabled(_: boolean)
  readonly hasSubmenu: boolean;
  isHidden: boolean;
  setHidden(_: boolean)
  readonly isHiddenOrHasHiddenAncestor: boolean;
  readonly isHighlighted: boolean;
  image: NSImage;
  setImage(_: NSImage)
  indentationLevel: number;
  setIndentationLevel(_: number)
  keyEquivalent: string;
  setKeyEquivalent(_: string)
  keyEquivalentModifierMask: NSEvent.ModifierFlags;
  setKeyEquivalentModifierMask(_: NSEvent.ModifierFlags)
  menu: NSMenu;
  setMenu(_: NSMenu)
  mixedStateImage: NSImage;
  setMixedStateImage(_: NSImage)
  offStateImage: NSImage;
  setOffStateImage(_: NSImage)
  onStateImage: NSImage;
  setOnStateImage(_: NSImage)
  readonly parentItem: NSMenuItem;
  representedObject: any;
  setRepresentedObject(_: any)
  readonly isSeparatorItem: boolean;
  state: number;
  setState(_: number)
  submenu: NSMenu;
  setSubmenu(_: NSMenu)
  tag: number;
  setTag(_: number)
  target: any;
  setTarget(_: any)
  title: string;
  setTitle(_: string)
  toolTip: string;
  setToolTip(_: string)
  readonly userKeyEquivalent: string;
  view: NSView;
  setView(_: NSView)
  static usesUserKeyEquivalents: boolean;
  setUsesUserKeyEquivalents(_: boolean)
  accessibilityActivationPoint: NSPoint;
  setAccessibilityActivationPoint(_: NSPoint) // inherited from NSAccessibility
  accessibilityAllowedValues: NSArray<number>;
  setAccessibilityAllowedValues(_: NSArray<number>) // inherited from NSAccessibility
  isAccessibilityAlternateUIVisible: boolean;
  setAccessibilityAlternateUIVisible(_: boolean) // inherited from NSAccessibility
  accessibilityApplicationFocusedUIElement: any;
  setAccessibilityApplicationFocusedUIElement(_: any) // inherited from NSAccessibility
  accessibilityCancelButton: any;
  setAccessibilityCancelButton(_: any) // inherited from NSAccessibility
  accessibilityChildren: NSArray<any>;
  setAccessibilityChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;
  setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>) // inherited from NSAccessibility
  accessibilityClearButton: any;
  setAccessibilityClearButton(_: any) // inherited from NSAccessibility
  accessibilityCloseButton: any;
  setAccessibilityCloseButton(_: any) // inherited from NSAccessibility
  accessibilityColumnCount: number;
  setAccessibilityColumnCount(_: number) // inherited from NSAccessibility
  accessibilityColumnHeaderUIElements: NSArray<any>;
  setAccessibilityColumnHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumnIndexRange: NSRange;
  setAccessibilityColumnIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityColumnTitles: NSArray<any>;
  setAccessibilityColumnTitles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumns: NSArray<any>;
  setAccessibilityColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityContents: NSArray<any>;
  setAccessibilityContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityCriticalValue: any;
  setAccessibilityCriticalValue(_: any) // inherited from NSAccessibility
  accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;
  setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>) // inherited from NSAccessibility
  accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;
  setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>) // inherited from NSAccessibility
  accessibilityDecrementButton: any;
  setAccessibilityDecrementButton(_: any) // inherited from NSAccessibility
  accessibilityDefaultButton: any;
  setAccessibilityDefaultButton(_: any) // inherited from NSAccessibility
  isAccessibilityDisclosed: boolean;
  setAccessibilityDisclosed(_: boolean) // inherited from NSAccessibility
  accessibilityDisclosedByRow: any;
  setAccessibilityDisclosedByRow(_: any) // inherited from NSAccessibility
  accessibilityDisclosedRows: any;
  setAccessibilityDisclosedRows(_: any) // inherited from NSAccessibility
  accessibilityDisclosureLevel: number;
  setAccessibilityDisclosureLevel(_: number) // inherited from NSAccessibility
  accessibilityDocument: string;
  setAccessibilityDocument(_: string) // inherited from NSAccessibility
  isAccessibilityEdited: boolean;
  setAccessibilityEdited(_: boolean) // inherited from NSAccessibility
  isAccessibilityElement: boolean;
  setAccessibilityElement(_: boolean) // inherited from NSAccessibility
  isAccessibilityEnabled: boolean;
  setAccessibilityEnabled(_: boolean) // inherited from NSAccessibility
  isAccessibilityExpanded: boolean;
  setAccessibilityExpanded(_: boolean) // inherited from NSAccessibility
  accessibilityExtrasMenuBar: any;
  setAccessibilityExtrasMenuBar(_: any) // inherited from NSAccessibility
  accessibilityFilename: string;
  setAccessibilityFilename(_: string) // inherited from NSAccessibility
  isAccessibilityFocused: boolean;
  setAccessibilityFocused(_: boolean) // inherited from NSAccessibility
  accessibilityFocusedWindow: any;
  setAccessibilityFocusedWindow(_: any) // inherited from NSAccessibility
  accessibilityFrame: NSRect;
  setAccessibilityFrame(_: NSRect) // inherited from NSAccessibility
  isAccessibilityFrontmost: boolean;
  setAccessibilityFrontmost(_: boolean) // inherited from NSAccessibility
  accessibilityFullScreenButton: any;
  setAccessibilityFullScreenButton(_: any) // inherited from NSAccessibility
  accessibilityGrowArea: any;
  setAccessibilityGrowArea(_: any) // inherited from NSAccessibility
  accessibilityHandles: NSArray<any>;
  setAccessibilityHandles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityHeader: any;
  setAccessibilityHeader(_: any) // inherited from NSAccessibility
  accessibilityHelp: string;
  setAccessibilityHelp(_: string) // inherited from NSAccessibility
  isAccessibilityHidden: boolean;
  setAccessibilityHidden(_: boolean) // inherited from NSAccessibility
  accessibilityHorizontalScrollBar: any;
  setAccessibilityHorizontalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityHorizontalUnitDescription: string;
  setAccessibilityHorizontalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityHorizontalUnits: NSAccessibility.Units;
  setAccessibilityHorizontalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityIdentifier: string;
  setAccessibilityIdentifier(_: string) // inherited from NSAccessibility
  accessibilityIncrementButton: any;
  setAccessibilityIncrementButton(_: any) // inherited from NSAccessibility
  accessibilityIndex: number;
  setAccessibilityIndex(_: number) // inherited from NSAccessibility
  accessibilityInsertionPointLineNumber: number;
  setAccessibilityInsertionPointLineNumber(_: number) // inherited from NSAccessibility
  accessibilityLabel: string;
  setAccessibilityLabel(_: string) // inherited from NSAccessibility
  accessibilityLabelUIElements: NSArray<any>;
  setAccessibilityLabelUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityLabelValue: number;
  setAccessibilityLabelValue(_: number) // inherited from NSAccessibility
  accessibilityLinkedUIElements: NSArray<any>;
  setAccessibilityLinkedUIElements(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityMain: boolean;
  setAccessibilityMain(_: boolean) // inherited from NSAccessibility
  accessibilityMainWindow: any;
  setAccessibilityMainWindow(_: any) // inherited from NSAccessibility
  accessibilityMarkerGroupUIElement: any;
  setAccessibilityMarkerGroupUIElement(_: any) // inherited from NSAccessibility
  accessibilityMarkerTypeDescription: string;
  setAccessibilityMarkerTypeDescription(_: string) // inherited from NSAccessibility
  accessibilityMarkerUIElements: NSArray<any>;
  setAccessibilityMarkerUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityMarkerValues: any;
  setAccessibilityMarkerValues(_: any) // inherited from NSAccessibility
  accessibilityMaxValue: any;
  setAccessibilityMaxValue(_: any) // inherited from NSAccessibility
  accessibilityMenuBar: any;
  setAccessibilityMenuBar(_: any) // inherited from NSAccessibility
  accessibilityMinValue: any;
  setAccessibilityMinValue(_: any) // inherited from NSAccessibility
  accessibilityMinimizeButton: any;
  setAccessibilityMinimizeButton(_: any) // inherited from NSAccessibility
  isAccessibilityMinimized: boolean;
  setAccessibilityMinimized(_: boolean) // inherited from NSAccessibility
  isAccessibilityModal: boolean;
  setAccessibilityModal(_: boolean) // inherited from NSAccessibility
  accessibilityNextContents: NSArray<any>;
  setAccessibilityNextContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityNumberOfCharacters: number;
  setAccessibilityNumberOfCharacters(_: number) // inherited from NSAccessibility
  isAccessibilityOrderedByRow: boolean;
  setAccessibilityOrderedByRow(_: boolean) // inherited from NSAccessibility
  accessibilityOrientation: NSAccessibility.Orientation;
  setAccessibilityOrientation(_: NSAccessibility.Orientation) // inherited from NSAccessibility
  accessibilityOverflowButton: any;
  setAccessibilityOverflowButton(_: any) // inherited from NSAccessibility
  accessibilityParent: any;
  setAccessibilityParent(_: any) // inherited from NSAccessibility
  accessibilityPlaceholderValue: string;
  setAccessibilityPlaceholderValue(_: string) // inherited from NSAccessibility
  accessibilityPreviousContents: NSArray<any>;
  setAccessibilityPreviousContents(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityProtectedContent: boolean;
  setAccessibilityProtectedContent(_: boolean) // inherited from NSAccessibility
  accessibilityProxy: any;
  setAccessibilityProxy(_: any) // inherited from NSAccessibility
  isAccessibilityRequired: boolean;
  setAccessibilityRequired(_: boolean) // inherited from NSAccessibility
  accessibilityRole: string;
  setAccessibilityRole(_: string) // inherited from NSAccessibility
  accessibilityRoleDescription: string;
  setAccessibilityRoleDescription(_: string) // inherited from NSAccessibility
  accessibilityRowCount: number;
  setAccessibilityRowCount(_: number) // inherited from NSAccessibility
  accessibilityRowHeaderUIElements: NSArray<any>;
  setAccessibilityRowHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRowIndexRange: NSRange;
  setAccessibilityRowIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityRows: NSArray<any>;
  setAccessibilityRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRulerMarkerType: NSAccessibility.RulerMarkerType;
  setAccessibilityRulerMarkerType(_: NSAccessibility.RulerMarkerType) // inherited from NSAccessibility
  accessibilitySearchButton: any;
  setAccessibilitySearchButton(_: any) // inherited from NSAccessibility
  accessibilitySearchMenu: any;
  setAccessibilitySearchMenu(_: any) // inherited from NSAccessibility
  isAccessibilitySelected: boolean;
  setAccessibilitySelected(_: boolean) // inherited from NSAccessibility
  accessibilitySelectedCells: NSArray<any>;
  setAccessibilitySelectedCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedChildren: NSArray<any>;
  setAccessibilitySelectedChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedColumns: NSArray<any>;
  setAccessibilitySelectedColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedRows: NSArray<any>;
  setAccessibilitySelectedRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedText: string;
  setAccessibilitySelectedText(_: string) // inherited from NSAccessibility
  accessibilitySelectedTextRange: NSRange;
  setAccessibilitySelectedTextRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySelectedTextRanges: NSArray<NSValue>;
  setAccessibilitySelectedTextRanges(_: NSArray<NSValue>) // inherited from NSAccessibility
  accessibilityServesAsTitleForUIElements: NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedCharacterRange: NSRange;
  setAccessibilitySharedCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySharedFocusElements: NSArray<any>;
  setAccessibilitySharedFocusElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedTextUIElements: NSArray<any>;
  setAccessibilitySharedTextUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityShownMenu: any;
  setAccessibilityShownMenu(_: any) // inherited from NSAccessibility
  accessibilitySortDirection: NSAccessibility.SortDirection;
  setAccessibilitySortDirection(_: NSAccessibility.SortDirection) // inherited from NSAccessibility
  accessibilitySplitters: NSArray<any>;
  setAccessibilitySplitters(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySubrole: string;
  setAccessibilitySubrole(_: string) // inherited from NSAccessibility
  accessibilityTabs: NSArray<any>;
  setAccessibilityTabs(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityTitle: string;
  setAccessibilityTitle(_: string) // inherited from NSAccessibility
  accessibilityTitleUIElement: any;
  setAccessibilityTitleUIElement(_: any) // inherited from NSAccessibility
  accessibilityToolbarButton: any;
  setAccessibilityToolbarButton(_: any) // inherited from NSAccessibility
  accessibilityTopLevelUIElement: any;
  setAccessibilityTopLevelUIElement(_: any) // inherited from NSAccessibility
  accessibilityURL: NSURL;
  setAccessibilityURL(_: NSURL) // inherited from NSAccessibility
  accessibilityUnitDescription: string;
  setAccessibilityUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityUnits: NSAccessibility.Units;
  setAccessibilityUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityValue: any;
  setAccessibilityValue(_: any) // inherited from NSAccessibility
  accessibilityValueDescription: string;
  setAccessibilityValueDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalScrollBar: any;
  setAccessibilityVerticalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityVerticalUnitDescription: string;
  setAccessibilityVerticalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalUnits: NSAccessibility.Units;
  setAccessibilityVerticalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityVisibleCells: NSArray<any>;
  setAccessibilityVisibleCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleCharacterRange: NSRange;
  setAccessibilityVisibleCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilityVisibleChildren: NSArray<any>;
  setAccessibilityVisibleChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleColumns: NSArray<any>;
  setAccessibilityVisibleColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleRows: NSArray<any>;
  setAccessibilityVisibleRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityWarningValue: any;
  setAccessibilityWarningValue(_: any) // inherited from NSAccessibility
  accessibilityWindow: any;
  setAccessibilityWindow(_: any) // inherited from NSAccessibility
  accessibilityWindows: NSArray<any>;
  setAccessibilityWindows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityZoomButton: any;
  setAccessibilityZoomButton(_: any) // inherited from NSAccessibility
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  identifier: string;
  setIdentifier(_: string) // inherited from NSUserInterfaceItemIdentification
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;
  accessibilityCellForColumnRow(_: number, row: number): any;
  accessibilityFrame(): NSRect;
  accessibilityFrameForRange(_: NSRange): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLayoutPointForScreenPoint(_: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(_: NSSize): NSSize;
  accessibilityLineForIndex(_: number): number;
  accessibilityParent(): any;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  accessibilityRTFForRange(_: NSRange): Data;
  accessibilityRangeForIndex(_: number): NSRange;
  accessibilityRangeForLine(_: number): NSRange;
  accessibilityRangeForPosition(_: NSPoint): NSRange;
  accessibilityScreenPointForLayoutPoint(_: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(_: NSSize): NSSize;
  accessibilityStringForRange(_: NSRange): string;
  accessibilityStyleRangeForIndex(_: number): NSRange;
  conformsToProtocol(to: any /* Protocol */): boolean;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithTitleActionKeyEquivalent(title: string, action?: string, keyEquivalent: string): this;
  isAccessibilityFocused(): boolean;
  isAccessibilitySelectorAllowed(_: string): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class NSMenuItemCell extends NSButtonCell {
  readonly imageWidth: number;
  readonly keyEquivalentWidth: number;
  menuItem: NSMenuItem;
  setMenuItem(_: NSMenuItem)
  needsDisplay: boolean;
  setNeedsDisplay(_: boolean)
  needsSizing: boolean;
  setNeedsSizing(_: boolean)
  readonly stateImageWidth: number;
  readonly titleWidth: number;
  calcSize(): void;
  drawBorderAndBackgroundWithFrameInView(withFrame: NSRect, in_: NSView): void;
  drawImageWithFrameInView(withFrame: NSRect, in_: NSView): void;
  drawKeyEquivalentWithFrameInView(withFrame: NSRect, in_: NSView): void;
  drawSeparatorItemWithFrameInView(withFrame: NSRect, in_: NSView): void;
  drawStateImageWithFrameInView(withFrame: NSRect, in_: NSView): void;
  drawTitleWithFrameInView(withFrame: NSRect, in_: NSView): void;
  keyEquivalentRectForBounds(forBounds: NSRect): NSRect;
  stateImageRectForBounds(forBounds: NSRect): NSRect;
}

declare var NSMenuItemImportFromDeviceIdentifier: string;

interface NSMenuItemValidation extends NSObject {
  validateMenuItem(_: NSMenuItem): boolean;
}

declare var NSMenuItemValidation: {
  prototype: NSMenuItemValidation;
};

declare class NSMenuToolbarItem extends NSToolbarItem {
  menu: NSMenu;
  setMenu(_: NSMenu)
  showsIndicator: boolean;
  setShowsIndicator(_: boolean)
}

declare var NSMenuWillSendActionNotification: string;

declare var NSMinValueBinding: string;

declare var NSMinWidthBinding: string;

declare var NSMiterLineJoinStyle: NSBezierPath.LineJoinStyle;

declare var NSMixedStateImageBinding: string;

declare var NSModalPanelRunLoopMode: string;

declare var NSModalPanelWindowLevel: number;

declare var NSModalResponseAbort: number;

declare var NSModalResponseCancel: number;

declare var NSModalResponseContinue: number;

declare var NSModalResponseOK: number;

declare var NSModalResponseStop: number;


declare const NSModeSwitchFunctionKey: number;
declare var NSModificationTimeDocumentAttribute: string;

declare var NSMoveToBezierPathElement: NSBezierPath.ElementType;

declare var NSMultipleValuesMarker: any;

declare var NSMultipleValuesPlaceholderBindingOption: string;

declare class NSMutableFontCollection extends NSFontCollection {
  exclusionDescriptors: NSArray<NSFontDescriptor>;
  setExclusionDescriptors(_: NSArray<NSFontDescriptor>)
  queryDescriptors: NSArray<NSFontDescriptor>;
  setQueryDescriptors(_: NSArray<NSFontDescriptor>)
  static fontCollectionWithAllAvailableDescriptors(): NSMutableFontCollection;
  addQueryForDescriptors(for_: NSArray<NSFontDescriptor>): void;
  removeQueryForDescriptors(for_: NSArray<NSFontDescriptor>): void;
}

declare class NSMutableParagraphStyle extends NSParagraphStyle {
  alignment: NSTextAlignment;
  setAlignment(_: NSTextAlignment)
  allowsDefaultTighteningForTruncation: boolean;
  setAllowsDefaultTighteningForTruncation(_: boolean)
  baseWritingDirection: NSWritingDirection;
  setBaseWritingDirection(_: NSWritingDirection)
  defaultTabInterval: number;
  setDefaultTabInterval(_: number)
  firstLineHeadIndent: number;
  setFirstLineHeadIndent(_: number)
  headIndent: number;
  setHeadIndent(_: number)
  headerLevel: number;
  setHeaderLevel(_: number)
  hyphenationFactor: number;
  setHyphenationFactor(_: number)
  lineBreakMode: NSLineBreakMode;
  setLineBreakMode(_: NSLineBreakMode)
  lineHeightMultiple: number;
  setLineHeightMultiple(_: number)
  lineSpacing: number;
  setLineSpacing(_: number)
  maximumLineHeight: number;
  setMaximumLineHeight(_: number)
  minimumLineHeight: number;
  setMinimumLineHeight(_: number)
  paragraphSpacing: number;
  setParagraphSpacing(_: number)
  paragraphSpacingBefore: number;
  setParagraphSpacingBefore(_: number)
  tabStops: NSArray<NSTextTab>;
  setTabStops(_: NSArray<NSTextTab>)
  tailIndent: number;
  setTailIndent(_: number)
  textBlocks: NSArray<NSTextBlock>;
  setTextBlocks(_: NSArray<NSTextBlock>)
  textLists: NSArray<NSTextList>;
  setTextLists(_: NSArray<NSTextList>)
  tighteningFactorForTruncation: number;
  setTighteningFactorForTruncation(_: number)
  addTabStop(_: NSTextTab): void;
  removeTabStop(_: NSTextTab): void;
  setParagraphStyle(_: NSParagraphStyle): void;
}

declare var NSNamedColorSpace: string;


declare const NSNewlineCharacter: number;

declare const NSNextFunctionKey: number;
declare class NSNib extends NSObject implements NSCoding {
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithNibDataBundle(nibData: Data, bundle?: Bundle): this;
  static createWithNibNamedBundle(nibNamed: string, bundle?: Bundle): this;
  instantiateWithOwnerTopLevelObjects(withOwner?: any, topLevelObjects?: NSArray<any>): boolean;
}

declare var NSNibLoadingException: string;

declare var NSNoSelectionMarker: any;

declare var NSNoSelectionPlaceholderBindingOption: string;

declare var NSNonZeroWindingRule: NSBezierPath.WindingRule;

declare var NSNormalWindowLevel: number;

declare var NSNotApplicableMarker: any;

declare var NSNotApplicablePlaceholderBindingOption: string;


declare const NSNullGlyph: number;
declare var NSNullPlaceholderBindingOption: string;

declare function NSNumberOfColorComponents(colorSpaceName: string): number;
declare class NSObjectController extends NSController {
  automaticallyPreparesContent: boolean;
  setAutomaticallyPreparesContent(_: boolean)
  readonly canAdd: boolean;
  readonly canRemove: boolean;
  content: any;
  setContent(_: any)
  isEditable: boolean;
  setEditable(_: boolean)
  entityName: string;
  setEntityName(_: string)
  fetchPredicate: NSPredicate;
  setFetchPredicate(_: NSPredicate)
  managedObjectContext: NSManagedObjectContext;
  setManagedObjectContext(_: NSManagedObjectContext)
  objectClass: typeof NSObject;
  setObjectClass(_: typeof NSObject)
  readonly selectedObjects: NSArray<any>;
  readonly selection: any;
  usesLazyFetching: boolean;
  setUsesLazyFetching(_: boolean)
  add(_?: any): void;
  addObject(_: any): void;
  defaultFetchRequest(): NSFetchRequest<any>;
  fetch(_?: any): void;
  fetchWithRequestWithMergeError(merge?: NSFetchRequest<any>, error: boolean): boolean;
  static createWithContent(content?: any): this;
  newObject(): any;
  prepareContent(): void;
  remove(_?: any): void;
  removeObject(_: any): void;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}

declare var NSObliquenessAttributeName: string;

declare var NSObservedKeyPathKey: string;

declare var NSObservedObjectKey: string;

declare var NSOffStateImageBinding: string;

declare var NSOfficeOpenXMLTextDocumentType: string;

declare var NSOnStateImageBinding: string;

declare var NSOpenDocumentTextDocumentType: string;

declare class NSOpenPanel extends NSSavePanel {
  readonly URLs: NSArray<NSURL>;
  isAccessoryViewDisclosed: boolean;
  setAccessoryViewDisclosed(_: boolean)
  allowsMultipleSelection: boolean;
  setAllowsMultipleSelection(_: boolean)
  canChooseDirectories: boolean;
  setCanChooseDirectories(_: boolean)
  canChooseFiles: boolean;
  setCanChooseFiles(_: boolean)
  canDownloadUbiquitousContents: boolean;
  setCanDownloadUbiquitousContents(_: boolean)
  canResolveUbiquitousConflicts: boolean;
  setCanResolveUbiquitousConflicts(_: boolean)
  resolvesAliases: boolean;
  setResolvesAliases(_: boolean)
}

interface NSOpenSavePanelDelegate extends NSObject {
  panelShouldEnableURL?(_: any, shouldEnable: NSURL): boolean;
  panelDidChangeToDirectoryURL?(_: any, didChangeToDirectoryURL?: NSURL): void;
  panelUserEnteredFilenameConfirmed?(_: any, userEnteredFilename: string, confirmed: boolean): string;
  panelValidateURLError?(validateURL: any, error: NSURL): boolean;
  panelWillExpand?(_: any, willExpand: boolean): void;
  panelSelectionDidChange?(_?: any): void;
}

declare var NSOpenSavePanelDelegate: {
  prototype: NSOpenSavePanelDelegate;
};

declare var NSOptionsKey: string;


declare const NSOtherTextMovement: number;
declare class NSOutlineView extends NSTableView implements NSAccessibilityOutline {
  autoresizesOutlineColumn: boolean;
  setAutoresizesOutlineColumn(_: boolean)
  autosaveExpandedItems: boolean;
  setAutosaveExpandedItems(_: boolean)
  dataSource: NSOutlineViewDataSource;
  setDataSource(_: NSOutlineViewDataSource)
  delegate: NSOutlineViewDelegate;
  setDelegate(_: NSOutlineViewDelegate)
  indentationMarkerFollowsCell: boolean;
  setIndentationMarkerFollowsCell(_: boolean)
  indentationPerLevel: number;
  setIndentationPerLevel(_: number)
  outlineTableColumn: NSTableColumn;
  setOutlineTableColumn(_: NSTableColumn)
  stronglyReferencesItems: boolean;
  setStronglyReferencesItems(_: boolean)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityColumnHeaderUIElements(): NSArray<any>;
  accessibilityColumns(): NSArray<any>;
  accessibilityFrame(): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLabel(): string;
  accessibilityParent(): any;
  accessibilityRowHeaderUIElements(): NSArray<any>;
  accessibilityRows(): NSArray<NSAccessibilityRow>;
  accessibilitySelectedCells(): NSArray<any>;
  accessibilitySelectedColumns(): NSArray<any>;
  accessibilitySelectedRows(): NSArray<NSAccessibilityRow>;
  accessibilityVisibleCells(): NSArray<any>;
  accessibilityVisibleColumns(): NSArray<any>;
  accessibilityVisibleRows(): NSArray<NSAccessibilityRow>;
  childOfItem(_: number, ofItem?: any): any;
  childIndexForItem(forItem: any): number;
  collapseItem(_?: any): void;
  collapseItemCollapseChildren(_?: any, collapseChildren: boolean): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  expandItem(_?: any): void;
  expandItemExpandChildren(_?: any, expandChildren: boolean): void;
  frameOfOutlineCellAtRow(atRow: number): NSRect;
  insertItemsAtIndexesInParentWithAnimation(at: IndexSet, inParent?: any, withAnimation: NSTableView.AnimationOptions): void;
  isAccessibilityFocused(): boolean;
  isEqual(_: any): boolean;
  isExpandable(_?: any): boolean;
  isItemExpanded(_?: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  itemAtRow(atRow: number): any;
  levelForItem(forItem?: any): number;
  levelForRow(forRow: number): number;
  moveItemAtIndexInParentToIndexInParent(at: number, inParent?: any, to: number, inParent?: any): void;
  numberOfChildrenOfItem(ofItem?: any): number;
  parentForItem(forItem?: any): any;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  reloadItem(_?: any): void;
  reloadItemReloadChildren(_?: any, reloadChildren: boolean): void;
  removeItemsAtIndexesInParentWithAnimation(at: IndexSet, inParent?: any, withAnimation: NSTableView.AnimationOptions): void;
  respondsToSelector(_: string): boolean;
  rowForItem(forItem?: any): number;
  self(): this;
  setAccessibilitySelectedRows(_: NSArray<NSAccessibilityRow>): void;
  setDropItemDropChildIndex(_?: any, dropChildIndex: number): void;
  shouldCollapseAutoExpandedItemsForDeposited(forDeposited: boolean): boolean;
}

declare var NSOutlineViewColumnDidMoveNotification: string;

declare var NSOutlineViewColumnDidResizeNotification: string;

interface NSOutlineViewDataSource extends NSObject {
  outlineViewObjectValueForTableColumnByItem?(_: NSOutlineView, objectValueFor?: NSTableColumn, byItem?: any): any;
  outlineViewSetObjectValueForTableColumnByItem?(_: NSOutlineView, setObjectValue?: any, for_?: NSTableColumn, byItem?: any): void;
  outlineViewDraggingSessionWillBeginAtPointForItems?(_: NSOutlineView, draggingSession: NSDraggingSession, willBeginAt: NSPoint, forItems: NSArray<any>): void;
  outlineViewDraggingSessionEndedAtPointOperation?(_: NSOutlineView, draggingSession: NSDraggingSession, endedAt: NSPoint, operation: NSDragOperation): void;
  outlineViewWriteItemsToPasteboard?(_: NSOutlineView, writeItems: NSArray<any>, to: NSPasteboard): boolean;
  outlineViewAcceptDropItemChildIndex?(_: NSOutlineView, acceptDrop: NSDraggingInfo, item?: any, childIndex: number): boolean;
  outlineViewChildOfItem?(_: NSOutlineView, child: number, ofItem?: any): any;
  outlineViewIsItemExpandable?(_: NSOutlineView, isItemExpandable: any): boolean;
  outlineViewItemForPersistentObject?(_: NSOutlineView, itemForPersistentObject: any): any;
  outlineViewNumberOfChildrenOfItem?(_: NSOutlineView, numberOfChildrenOfItem?: any): number;
  outlineViewPasteboardWriterForItem?(_: NSOutlineView, pasteboardWriterForItem: any): NSPasteboardWriting;
  outlineViewPersistentObjectForItem?(_: NSOutlineView, persistentObjectForItem?: any): any;
  outlineViewSortDescriptorsDidChange?(_: NSOutlineView, sortDescriptorsDidChange: NSArray<NSSortDescriptor>): void;
  outlineViewUpdateDraggingItemsForDrag?(_: NSOutlineView, updateDraggingItemsForDrag: NSDraggingInfo): void;
  outlineViewValidateDropProposedItemProposedChildIndex?(_: NSOutlineView, validateDrop: NSDraggingInfo, proposedItem?: any, proposedChildIndex: number): NSDragOperation;
}

declare var NSOutlineViewDataSource: {
  prototype: NSOutlineViewDataSource;
};

interface NSOutlineViewDelegate extends NSControlTextEditingDelegate {
  outlineViewViewForTableColumnItem?(_: NSOutlineView, viewFor?: NSTableColumn, item: any): NSView;
  outlineViewWillDisplayOutlineCellForTableColumnItem?(_: NSOutlineView, willDisplayOutlineCell: any, for_?: NSTableColumn, item: any): void;
  outlineViewDidAddRowViewForRow?(_: NSOutlineView, didAdd: NSTableRowView, forRow: number): void;
  outlineViewDidRemoveRowViewForRow?(_: NSOutlineView, didRemove: NSTableRowView, forRow: number): void;
  outlineViewWillDisplayCellForTableColumnItem?(_: NSOutlineView, willDisplayCell: any, for_?: NSTableColumn, item: any): void;
  outlineViewShouldEditTableColumnItem?(_: NSOutlineView, shouldEdit?: NSTableColumn, item: any): boolean;
  outlineViewDataCellForTableColumnItem?(_: NSOutlineView, dataCellFor?: NSTableColumn, item: any): NSCell;
  outlineViewShouldTrackCellForTableColumnItem?(_: NSOutlineView, shouldTrackCell: NSCell, for_?: NSTableColumn, item: any): boolean;
  outlineViewShouldShowCellExpansionForTableColumnItem?(_: NSOutlineView, shouldShowCellExpansionFor?: NSTableColumn, item: any): boolean;
  outlineViewShouldSelectTableColumn?(_: NSOutlineView, shouldSelect?: NSTableColumn): boolean;
  outlineViewMouseDownInHeaderOfTableColumn?(_: NSOutlineView, mouseDownInHeaderOf: NSTableColumn): void;
  outlineViewDidClickTableColumn?(_: NSOutlineView, didClick: NSTableColumn): void;
  outlineViewDidDragTableColumn?(_: NSOutlineView, didDrag: NSTableColumn): void;
  outlineViewToolTipForCellRectTableColumnItemMouseLocation?(_: NSOutlineView, toolTipFor: NSCell, rect: NSRect, tableColumn?: NSTableColumn, item: any, mouseLocation: NSPoint): string;
  outlineViewShouldTypeSelectForEventWithCurrentSearchString?(_: NSOutlineView, shouldTypeSelectFor: NSEvent, withCurrentSearch?: string): boolean;
  outlineViewTypeSelectStringForTableColumnItem?(_: NSOutlineView, typeSelectStringFor?: NSTableColumn, item: any): string;
  outlineViewNextTypeSelectMatchFromItemToItemForString?(_: NSOutlineView, nextTypeSelectMatchFromItem: any, toItem: any, for_: string): any;
  outlineViewHeightOfRowByItem?(_: NSOutlineView, heightOfRowByItem: any): number;
  outlineViewIsGroupItem?(_: NSOutlineView, isGroupItem: any): boolean;
  outlineViewRowViewForItem?(_: NSOutlineView, rowViewForItem: any): NSTableRowView;
  outlineViewSelectionIndexesForProposedSelection?(_: NSOutlineView, selectionIndexesForProposedSelection: IndexSet): IndexSet;
  outlineViewShouldCollapseItem?(_: NSOutlineView, shouldCollapseItem: any): boolean;
  outlineViewShouldExpandItem?(_: NSOutlineView, shouldExpandItem: any): boolean;
  outlineViewShouldReorderColumnToColumn?(_: NSOutlineView, shouldReorderColumn: number, toColumn: number): boolean;
  outlineViewShouldSelectItem?(_: NSOutlineView, shouldSelectItem: any): boolean;
  outlineViewShouldShowOutlineCellForItem?(_: NSOutlineView, shouldShowOutlineCellForItem: any): boolean;
  outlineViewSizeToFitWidthOfColumn?(_: NSOutlineView, sizeToFitWidthOfColumn: number): number;
  outlineViewColumnDidMove?(_: Notification): void;
  outlineViewColumnDidResize?(_: Notification): void;
  outlineViewItemDidCollapse?(_: Notification): void;
  outlineViewItemDidExpand?(_: Notification): void;
  outlineViewItemWillCollapse?(_: Notification): void;
  outlineViewItemWillExpand?(_: Notification): void;
  outlineViewSelectionDidChange?(_: Notification): void;
  outlineViewSelectionIsChanging?(_: Notification): void;
  selectionShouldChangeInOutlineView?(in_: NSOutlineView): boolean;
}

declare var NSOutlineViewDelegate: {
  prototype: NSOutlineViewDelegate;
};

declare var NSOutlineViewDisclosureButtonKey: string;


declare const NSOutlineViewDropOnItemIndex: number;
declare var NSOutlineViewItemDidCollapseNotification: string;

declare var NSOutlineViewItemDidExpandNotification: string;

declare var NSOutlineViewItemWillCollapseNotification: string;

declare var NSOutlineViewItemWillExpandNotification: string;

declare var NSOutlineViewSelectionDidChangeNotification: string;

declare var NSOutlineViewSelectionIsChangingNotification: string;

declare var NSOutlineViewShowHideButtonKey: string;

declare class NSPDFImageRep extends NSImageRep {
  readonly PDFRepresentation: Data;
  readonly bounds: NSRect;
  currentPage: number;
  setCurrentPage(_: number)
  readonly pageCount: number;
  static createWithData(data: Data): this;
}

declare class NSPDFInfo extends NSObject implements NSCoding, NSCopying {
  URL: NSURL;
  setURL(_: NSURL)
  readonly attributes: NSMutableDictionary<string, any>;
  isFileExtensionHidden: boolean;
  setFileExtensionHidden(_: boolean)
  orientation: NSPrintInfo.PaperOrientation;
  setOrientation(_: NSPrintInfo.PaperOrientation)
  paperSize: NSSize;
  setPaperSize(_: NSSize)
  tagNames: NSArray<string>;
  setTagNames(_: NSArray<string>)
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSPDFPanel extends NSObject {
  accessoryController: NSViewController;
  setAccessoryController(_: NSViewController)
  defaultFileName: string;
  setDefaultFileName(_: string)
  options: NSPDFPanel.Options;
  setOptions(_: NSPDFPanel.Options)
  beginSheetWithPDFInfoModalForWindowCompletionHandler(with_: NSPDFInfo, modalFor?: NSWindow, completionHandler: (p1: number) => void): void;
}

declare class NSPICTImageRep extends NSImageRep {
  readonly PICTRepresentation: Data;
  readonly boundingBox: NSRect;
  static createWithData(data: Data): this;
}

declare var NSPPDIncludeNotFoundException: string;

declare var NSPPDIncludeStackOverflowException: string;

declare var NSPPDIncludeStackUnderflowException: string;

declare var NSPPDParseException: string;

declare class NSPageController extends NSViewController implements NSAnimatablePropertyContainer, NSCoding {
  static defaultAnimationForKey(forKey: string): any;
  arrangedObjects: NSArray<any>;
  setArrangedObjects(_: NSArray<any>)
  delegate: NSPageControllerDelegate;
  setDelegate(_: NSPageControllerDelegate)
  selectedIndex: number;
  setSelectedIndex(_: number)
  readonly selectedViewController: NSViewController;
  transitionStyle: NSPageController.TransitionStyle;
  setTransitionStyle(_: NSPageController.TransitionStyle)
  animations: NSDictionary<string, any>;
  setAnimations(_: NSDictionary<string, any>) // inherited from NSAnimatablePropertyContainer
  animationForKey(forKey: string): any;
  animator(): this;
  completeTransition(): void;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  navigateBack(_?: any): void;
  navigateForward(_?: any): void;
  navigateForwardToObject(to: any): void;
  takeSelectedIndexFrom(_?: any): void;
}

interface NSPageControllerDelegate extends NSObject {
  pageControllerIdentifierForObject?(_: NSPageController, identifierFor: any): string;
  pageControllerFrameForObject?(_: NSPageController, frameFor?: any): NSRect;
  pageControllerPrepareViewControllerWithObject?(_: NSPageController, prepare: NSViewController, with_?: any): void;
  pageControllerDidTransitionToObject?(_: NSPageController, didTransitionTo: any): void;
  pageControllerViewControllerForIdentifier?(_: NSPageController, viewControllerForIdentifier: string): NSViewController;
  pageControllerDidEndLiveTransition?(_: NSPageController): void;
  pageControllerWillStartLiveTransition?(_: NSPageController): void;
}

declare var NSPageControllerDelegate: {
  prototype: NSPageControllerDelegate;
};


declare const NSPageDownFunctionKey: number;
declare class NSPageLayout extends NSObject {
  readonly accessoryControllers: NSArray<NSViewController>;
  readonly printInfo: NSPrintInfo;
  addAccessoryController(_: NSViewController): void;
  beginSheetWithPrintInfoModalForWindowDelegateDidEndSelectorContextInfo(with_: NSPrintInfo, modalFor: NSWindow, delegate?: any, didEnd?: string, contextInfo?: any): void;
  removeAccessoryController(_: NSViewController): void;
  runModal(): number;
  runModalWithPrintInfo(with_: NSPrintInfo): number;
}


declare const NSPageUpFunctionKey: number;
declare class NSPanGestureRecognizer extends NSGestureRecognizer implements NSCoding {
  buttonMask: number;
  setButtonMask(_: number)
  numberOfTouchesRequired: number;
  setNumberOfTouchesRequired(_: number)
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  setTranslationInView(_: NSPoint, in_?: NSView): void;
  translationInView(in_?: NSView): NSPoint;
  velocityInView(in_?: NSView): NSPoint;
}

declare class NSPanel extends NSWindow {
  becomesKeyOnlyIfNeeded: boolean;
  setBecomesKeyOnlyIfNeeded(_: boolean)
  isFloatingPanel: boolean;
  setFloatingPanel(_: boolean)
  worksWhenModal: boolean;
  setWorksWhenModal(_: boolean)
}

declare var NSPaperSizeDocumentAttribute: string;


declare const NSParagraphSeparatorCharacter: number;
declare class NSParagraphStyle extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {
  static defaultWritingDirectionForLanguage(forLanguage?: string): NSWritingDirection;
  readonly alignment: NSTextAlignment;
  readonly allowsDefaultTighteningForTruncation: boolean;
  readonly baseWritingDirection: NSWritingDirection;
  readonly defaultTabInterval: number;
  readonly firstLineHeadIndent: number;
  readonly headIndent: number;
  readonly headerLevel: number;
  readonly hyphenationFactor: number;
  readonly lineBreakMode: NSLineBreakMode;
  readonly lineHeightMultiple: number;
  readonly lineSpacing: number;
  readonly maximumLineHeight: number;
  readonly minimumLineHeight: number;
  readonly paragraphSpacing: number;
  readonly paragraphSpacingBefore: number;
  readonly tabStops: NSArray<NSTextTab>;
  readonly tailIndent: number;
  readonly textBlocks: NSArray<NSTextBlock>;
  readonly textLists: NSArray<NSTextList>;
  readonly tighteningFactorForTruncation: number;
  static defaultParagraphStyle(): NSParagraphStyle;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var NSParagraphStyleAttributeName: string;

declare class NSPasteboard extends NSObject {
  static pasteboardWithUniqueName(): NSPasteboard;
  static typesFilterableTo(filterableTo: string): NSArray<string>;
  readonly changeCount: number;
  readonly name: string;
  readonly pasteboardItems: NSArray<NSPasteboardItem>;
  readonly types: NSArray<string>;
  static generalPasteboard(): NSPasteboard;
  addTypesOwner(_: NSArray<string>, owner?: any): number;
  availableTypeFromArray(from: NSArray<string>): string;
  canReadItemWithDataConformingToTypes(withDataConformingToTypes: NSArray<string>): boolean;
  canReadObjectForClassesOptions(forClasses: NSArray<typeof NSObject>, options?: NSDictionary<string, any>): boolean;
  clearContents(): number;
  dataForType(forType: string): Data;
  declareTypesOwner(_: NSArray<string>, owner?: any): number;
  indexOfPasteboardItem(of: NSPasteboardItem): number;
  prepareForNewContentsWithOptions(with_: NSPasteboard.ContentsOptions): number;
  propertyListForType(forType: string): any;
  readFileContentsTypeToFile(_?: string, toFile: string): string;
  readFileWrapper(): FileWrapper;
  readObjectsForClassesOptions(forClasses: NSArray<typeof NSObject>, options?: NSDictionary<string, any>): NSArray<any>;
  releaseGlobally(): void;
  setDataForType(_?: Data, forType: string): boolean;
  setPropertyListForType(_: any, forType: string): boolean;
  setStringForType(_: string, forType: string): boolean;
  stringForType(forType: string): string;
  writeFileContents(_: string): boolean;
  writeFileWrapper(_: FileWrapper): boolean;
  writeObjects(_: NSArray<NSPasteboardWriting>): boolean;
}

declare var NSPasteboardCommunicationException: string;

declare class NSPasteboardItem extends NSObject implements NSPasteboardReading, NSPasteboardWriting {
  static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.ReadingOptions;
  readonly types: NSArray<string>;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  availableTypeFromArray(from: NSArray<string>): string;
  conformsToProtocol(to: any /* Protocol */): boolean;
  dataForType(forType: string): Data;
  static createWithPasteboardPropertyListOfType(pasteboardPropertyList: any, ofType: string): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  pasteboardPropertyListForType(forType: string): any;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  propertyListForType(forType: string): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  setDataForType(_: Data, forType: string): boolean;
  setDataProviderForTypes(_: NSPasteboardItemDataProvider, forTypes: NSArray<string>): boolean;
  setPropertyListForType(_: any, forType: string): boolean;
  setStringForType(_: string, forType: string): boolean;
  stringForType(forType: string): string;
  writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.WritingOptions;
}

interface NSPasteboardItemDataProvider extends NSObject {
  pasteboardItemProvideDataForType(_?: NSPasteboard, item: NSPasteboardItem, provideDataForType: string): void;
  pasteboardFinishedWithDataProvider?(_: NSPasteboard): void;
}

declare var NSPasteboardItemDataProvider: {
  prototype: NSPasteboardItemDataProvider;
};

declare var NSPasteboardNameDrag: string;

declare var NSPasteboardNameFind: string;

declare var NSPasteboardNameFont: string;

declare var NSPasteboardNameGeneral: string;

declare var NSPasteboardNameRuler: string;

interface NSPasteboardReading extends NSObject {
  static createWithPasteboardPropertyListOfType?(pasteboardPropertyList: any, ofType: string): NSPasteboardReading;
}

declare var NSPasteboardReading: {
  prototype: NSPasteboardReading;
   static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
   static readingOptionsForTypePasteboard?(forType: string, pasteboard: NSPasteboard): NSPasteboard.ReadingOptions;
};

declare var NSPasteboardTypeColor: string;

declare var NSPasteboardTypeFileURL: string;

declare var NSPasteboardTypeFont: string;

declare var NSPasteboardTypeHTML: string;

declare var NSPasteboardTypeMultipleTextSelection: string;

interface NSPasteboardTypeOwner extends NSObject {
  pasteboardProvideDataForType(_: NSPasteboard, provideDataForType: string): void;
  pasteboardChangedOwner?(_: NSPasteboard): void;
}

declare var NSPasteboardTypeOwner: {
  prototype: NSPasteboardTypeOwner;
};

declare var NSPasteboardTypePDF: string;

declare var NSPasteboardTypePNG: string;

declare var NSPasteboardTypeRTF: string;

declare var NSPasteboardTypeRTFD: string;

declare var NSPasteboardTypeRuler: string;

declare var NSPasteboardTypeSound: string;

declare var NSPasteboardTypeString: string;

declare var NSPasteboardTypeTIFF: string;

declare var NSPasteboardTypeTabularText: string;

declare var NSPasteboardTypeTextFinderOptions: string;

declare var NSPasteboardTypeURL: string;

declare var NSPasteboardURLReadingContentsConformToTypesKey: string;

declare var NSPasteboardURLReadingFileURLsOnlyKey: string;

interface NSPasteboardWriting extends NSObject {
  pasteboardPropertyListForType(forType: string): any;
  writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  writingOptionsForTypePasteboard?(forType: string, pasteboard: NSPasteboard): NSPasteboard.WritingOptions;
}

declare var NSPasteboardWriting: {
  prototype: NSPasteboardWriting;
};

declare class NSPathCell extends NSActionCell implements NSMenuItemValidation, NSOpenSavePanelDelegate {
  URL: NSURL;
  setURL(_: NSURL)
  allowedTypes: NSArray<string>;
  setAllowedTypes(_: NSArray<string>)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  readonly clickedPathComponentCell: NSPathComponentCell;
  delegate: NSPathCellDelegate;
  setDelegate(_: NSPathCellDelegate)
  doubleAction: string;
  setDoubleAction(_: string)
  pathComponentCells: NSArray<NSPathComponentCell>;
  setPathComponentCells(_: NSArray<NSPathComponentCell>)
  pathStyle: NSPathControl.Style;
  setPathStyle(_: NSPathControl.Style)
  placeholderAttributedString: NSAttributedString;
  setPlaceholderAttributedString(_: NSAttributedString)
  placeholderString: string;
  setPlaceholderString(_: string)
  static pathComponentCellClass(): typeof NSObject;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  conformsToProtocol(to: any /* Protocol */): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  mouseEnteredWithFrameInView(with_: NSEvent, frame: NSRect, in_: NSView): void;
  mouseExitedWithFrameInView(with_: NSEvent, frame: NSRect, in_: NSView): void;
  panelDidChangeToDirectoryURL(_: any, didChangeToDirectoryURL?: NSURL): void;
  panelShouldEnableURL(_: any, shouldEnable: NSURL): boolean;
  panelUserEnteredFilenameConfirmed(_: any, userEnteredFilename: string, confirmed: boolean): string;
  panelValidateURLError(validateURL: any, error: NSURL): boolean;
  panelWillExpand(_: any, willExpand: boolean): void;
  panelSelectionDidChange(_?: any): void;
  pathComponentCellAtPointWithFrameInView(at: NSPoint, withFrame: NSRect, in_: NSView): NSPathComponentCell;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  rectOfPathComponentCellWithFrameInView(of: NSPathComponentCell, withFrame: NSRect, in_: NSView): NSRect;
  respondsToSelector(_: string): boolean;
  self(): this;
  setObjectValue(_?: any): void;
  validateMenuItem(_: NSMenuItem): boolean;
}

interface NSPathCellDelegate extends NSObject {
  pathCellWillDisplayOpenPanel?(_: NSPathCell, willDisplay: NSOpenPanel): void;
  pathCellWillPopUpMenu?(_: NSPathCell, willPopUp: NSMenu): void;
}

declare var NSPathCellDelegate: {
  prototype: NSPathCellDelegate;
};

declare class NSPathComponentCell extends NSTextFieldCell {
  URL: NSURL;
  setURL(_: NSURL)
}

declare class NSPathControl extends NSControl {
  URL: NSURL;
  setURL(_: NSURL)
  allowedTypes: NSArray<string>;
  setAllowedTypes(_: NSArray<string>)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  readonly clickedPathItem: NSPathControlItem;
  delegate: NSPathControlDelegate;
  setDelegate(_: NSPathControlDelegate)
  doubleAction: string;
  setDoubleAction(_: string)
  isEditable: boolean;
  setEditable(_: boolean)
  pathItems: NSArray<NSPathControlItem>;
  setPathItems(_: NSArray<NSPathControlItem>)
  pathStyle: NSPathControl.Style;
  setPathStyle(_: NSPathControl.Style)
  placeholderAttributedString: NSAttributedString;
  setPlaceholderAttributedString(_: NSAttributedString)
  placeholderString: string;
  setPlaceholderString(_: string)
  setDraggingSourceOperationMaskForLocal(_: NSDragOperation, forLocal: boolean): void;
}

interface NSPathControlDelegate extends NSObject {
  pathControlShouldDragItemWithPasteboard?(_: NSPathControl, shouldDrag: NSPathControlItem, with_: NSPasteboard): boolean;
  pathControlShouldDragPathComponentCellWithPasteboard?(_: NSPathControl, shouldDrag: NSPathComponentCell, with_: NSPasteboard): boolean;
  pathControlWillDisplayOpenPanel?(_: NSPathControl, willDisplay: NSOpenPanel): void;
  pathControlWillPopUpMenu?(_: NSPathControl, willPopUp: NSMenu): void;
  pathControlAcceptDrop?(_: NSPathControl, acceptDrop: NSDraggingInfo): boolean;
  pathControlValidateDrop?(_: NSPathControl, validateDrop: NSDraggingInfo): NSDragOperation;
}

declare var NSPathControlDelegate: {
  prototype: NSPathControlDelegate;
};

declare class NSPathControlItem extends NSObject {
  readonly URL: NSURL;
  attributedTitle: NSAttributedString;
  setAttributedTitle(_: NSAttributedString)
  image: NSImage;
  setImage(_: NSImage)
  title: string;
  setTitle(_: string)
}

declare var NSPatternColorSpace: string;


declare const NSPauseFunctionKey: number;
declare function NSPerformService(itemName: string, pboard: NSPasteboard): boolean;
declare class NSPersistentDocument extends NSDocument {
  managedObjectContext: NSManagedObjectContext;
  setManagedObjectContext(_: NSManagedObjectContext)
  readonly managedObjectModel: NSManagedObjectModel;
  configurePersistentStoreCoordinatorForURLOfTypeModelConfigurationStoreOptionsError(ofType: NSURL, modelConfiguration: string, storeOptions?: string, error?: NSDictionary<string, any>): boolean;
  persistentStoreTypeForFileType(forFileType: string): string;
}

declare class NSPickerTouchBarItem extends NSTouchBarItem {
  action: string;
  setAction(_: string)
  collapsedRepresentationImage: NSImage;
  setCollapsedRepresentationImage(_: NSImage)
  collapsedRepresentationLabel: string;
  setCollapsedRepresentationLabel(_: string)
  controlRepresentation: NSPickerTouchBarItem.ControlRepresentation;
  setControlRepresentation(_: NSPickerTouchBarItem.ControlRepresentation)
  customizationLabel: string;
  setCustomizationLabel(_: string)
  isEnabled: boolean;
  setEnabled(_: boolean)
  numberOfOptions: number;
  setNumberOfOptions(_: number)
  selectedIndex: number;
  setSelectedIndex(_: number)
  selectionColor: NSColor;
  setSelectionColor(_: NSColor)
  selectionMode: NSPickerTouchBarItem.SelectionMode;
  setSelectionMode(_: NSPickerTouchBarItem.SelectionMode)
  target: any;
  setTarget(_: any)
  imageAtIndex(at: number): NSImage;
  isEnabledAtIndex(at: number): boolean;
  labelAtIndex(at: number): string;
  setEnabledAtIndex(_: boolean, at: number): void;
  setImageAtIndex(_?: NSImage, at: number): void;
  setLabelAtIndex(_: string, at: number): void;
}

declare var NSPlainTextDocumentType: string;

declare function NSPlanarFromDepth(depth: NSWindow.Depth): boolean;
declare class NSPopUpButton extends NSButton {
  static checkboxWithTitleTargetAction(checkboxWithTitle: string, target?: any, action?: string): NSPopUpButton; // inherited from NSButton
  static radioButtonWithTitleTargetAction(radioButtonWithTitle: string, target?: any, action?: string): NSPopUpButton; // inherited from NSButton
  autoenablesItems: boolean;
  setAutoenablesItems(_: boolean)
  readonly indexOfSelectedItem: number;
  readonly itemArray: NSArray<NSMenuItem>;
  readonly itemTitles: NSArray<string>;
  readonly lastItem: NSMenuItem;
  readonly numberOfItems: number;
  preferredEdge: NSRectEdge;
  setPreferredEdge(_: NSRectEdge)
  pullsDown: boolean;
  setPullsDown(_: boolean)
  readonly selectedItem: NSMenuItem;
  readonly selectedTag: number;
  readonly titleOfSelectedItem: string;
  addItemWithTitle(withTitle: string): void;
  addItemsWithTitles(withTitles: NSArray<string>): void;
  indexOfItem(of: NSMenuItem): number;
  indexOfItemWithRepresentedObject(withRepresentedObject?: any): number;
  indexOfItemWithTag(withTag: number): number;
  indexOfItemWithTargetAndAction(withTarget?: any, andAction?: string): number;
  indexOfItemWithTitle(withTitle: string): number;
  static createWithFramePullsDown(frame: NSRect, pullsDown: boolean): this;
  insertItemWithTitleAtIndex(withTitle: string, at: number): void;
  itemAtIndex(at: number): NSMenuItem;
  itemTitleAtIndex(at: number): string;
  itemWithTitle(withTitle: string): NSMenuItem;
  removeAllItems(): void;
  removeItemAtIndex(at: number): void;
  removeItemWithTitle(withTitle: string): void;
  selectItem(_?: NSMenuItem): void;
  selectItemAtIndex(at: number): void;
  selectItemWithTag(withTag: number): boolean;
  selectItemWithTitle(withTitle: string): void;
  setTitle(_: string): void;
  synchronizeTitleAndSelectedItem(): void;
}

declare class NSPopUpButtonCell extends NSMenuItemCell implements NSMenuItemValidation {
  altersStateOfSelectedItem: boolean;
  setAltersStateOfSelectedItem(_: boolean)
  arrowPosition: NSPopUpButton.ArrowPosition;
  setArrowPosition(_: NSPopUpButton.ArrowPosition)
  autoenablesItems: boolean;
  setAutoenablesItems(_: boolean)
  readonly indexOfSelectedItem: number;
  readonly itemArray: NSArray<NSMenuItem>;
  readonly itemTitles: NSArray<string>;
  readonly lastItem: NSMenuItem;
  readonly numberOfItems: number;
  preferredEdge: NSRectEdge;
  setPreferredEdge(_: NSRectEdge)
  pullsDown: boolean;
  setPullsDown(_: boolean)
  readonly selectedItem: NSMenuItem;
  readonly titleOfSelectedItem: string;
  usesItemFromMenu: boolean;
  setUsesItemFromMenu(_: boolean)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  addItemWithTitle(withTitle: string): void;
  addItemsWithTitles(withTitles: NSArray<string>): void;
  attachPopUpWithFrameInView(withFrame: NSRect, in_: NSView): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  dismissPopUp(): void;
  indexOfItem(of: NSMenuItem): number;
  indexOfItemWithRepresentedObject(withRepresentedObject?: any): number;
  indexOfItemWithTag(withTag: number): number;
  indexOfItemWithTargetAndAction(withTarget?: any, andAction?: string): number;
  indexOfItemWithTitle(withTitle: string): number;
  static createWithTextCellPullsDown(textCell: string, pullsDown: boolean): this;
  insertItemWithTitleAtIndex(withTitle: string, at: number): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  itemAtIndex(at: number): NSMenuItem;
  itemTitleAtIndex(at: number): string;
  itemWithTitle(withTitle: string): NSMenuItem;
  performClickWithFrameInView(withFrame: NSRect, in_: NSView): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  removeAllItems(): void;
  removeItemAtIndex(at: number): void;
  removeItemWithTitle(withTitle: string): void;
  respondsToSelector(_: string): boolean;
  selectItem(_?: NSMenuItem): void;
  selectItemAtIndex(at: number): void;
  selectItemWithTag(withTag: number): boolean;
  selectItemWithTitle(withTitle: string): void;
  self(): this;
  setTitle(_?: string): void;
  synchronizeTitleAndSelectedItem(): void;
  validateMenuItem(_: NSMenuItem): boolean;
}

declare var NSPopUpButtonCellWillPopUpNotification: string;

declare var NSPopUpButtonWillPopUpNotification: string;

declare var NSPopUpMenuWindowLevel: number;

declare class NSPopover extends NSResponder implements NSAccessibility, NSAccessibilityElementProtocol, NSAppearanceCustomization {
  animates: boolean;
  setAnimates(_: boolean)
  behavior: NSPopover.Behavior;
  setBehavior(_: NSPopover.Behavior)
  contentSize: NSSize;
  setContentSize(_: NSSize)
  contentViewController: NSViewController;
  setContentViewController(_: NSViewController)
  delegate: NSPopoverDelegate;
  setDelegate(_: NSPopoverDelegate)
  readonly isDetached: boolean;
  positioningRect: NSRect;
  setPositioningRect(_: NSRect)
  readonly isShown: boolean;
  accessibilityActivationPoint: NSPoint;
  setAccessibilityActivationPoint(_: NSPoint) // inherited from NSAccessibility
  accessibilityAllowedValues: NSArray<number>;
  setAccessibilityAllowedValues(_: NSArray<number>) // inherited from NSAccessibility
  isAccessibilityAlternateUIVisible: boolean;
  setAccessibilityAlternateUIVisible(_: boolean) // inherited from NSAccessibility
  accessibilityApplicationFocusedUIElement: any;
  setAccessibilityApplicationFocusedUIElement(_: any) // inherited from NSAccessibility
  accessibilityCancelButton: any;
  setAccessibilityCancelButton(_: any) // inherited from NSAccessibility
  accessibilityChildren: NSArray<any>;
  setAccessibilityChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;
  setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>) // inherited from NSAccessibility
  accessibilityClearButton: any;
  setAccessibilityClearButton(_: any) // inherited from NSAccessibility
  accessibilityCloseButton: any;
  setAccessibilityCloseButton(_: any) // inherited from NSAccessibility
  accessibilityColumnCount: number;
  setAccessibilityColumnCount(_: number) // inherited from NSAccessibility
  accessibilityColumnHeaderUIElements: NSArray<any>;
  setAccessibilityColumnHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumnIndexRange: NSRange;
  setAccessibilityColumnIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityColumnTitles: NSArray<any>;
  setAccessibilityColumnTitles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumns: NSArray<any>;
  setAccessibilityColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityContents: NSArray<any>;
  setAccessibilityContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityCriticalValue: any;
  setAccessibilityCriticalValue(_: any) // inherited from NSAccessibility
  accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;
  setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>) // inherited from NSAccessibility
  accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;
  setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>) // inherited from NSAccessibility
  accessibilityDecrementButton: any;
  setAccessibilityDecrementButton(_: any) // inherited from NSAccessibility
  accessibilityDefaultButton: any;
  setAccessibilityDefaultButton(_: any) // inherited from NSAccessibility
  isAccessibilityDisclosed: boolean;
  setAccessibilityDisclosed(_: boolean) // inherited from NSAccessibility
  accessibilityDisclosedByRow: any;
  setAccessibilityDisclosedByRow(_: any) // inherited from NSAccessibility
  accessibilityDisclosedRows: any;
  setAccessibilityDisclosedRows(_: any) // inherited from NSAccessibility
  accessibilityDisclosureLevel: number;
  setAccessibilityDisclosureLevel(_: number) // inherited from NSAccessibility
  accessibilityDocument: string;
  setAccessibilityDocument(_: string) // inherited from NSAccessibility
  isAccessibilityEdited: boolean;
  setAccessibilityEdited(_: boolean) // inherited from NSAccessibility
  isAccessibilityElement: boolean;
  setAccessibilityElement(_: boolean) // inherited from NSAccessibility
  isAccessibilityEnabled: boolean;
  setAccessibilityEnabled(_: boolean) // inherited from NSAccessibility
  isAccessibilityExpanded: boolean;
  setAccessibilityExpanded(_: boolean) // inherited from NSAccessibility
  accessibilityExtrasMenuBar: any;
  setAccessibilityExtrasMenuBar(_: any) // inherited from NSAccessibility
  accessibilityFilename: string;
  setAccessibilityFilename(_: string) // inherited from NSAccessibility
  isAccessibilityFocused: boolean;
  setAccessibilityFocused(_: boolean) // inherited from NSAccessibility
  accessibilityFocusedWindow: any;
  setAccessibilityFocusedWindow(_: any) // inherited from NSAccessibility
  accessibilityFrame: NSRect;
  setAccessibilityFrame(_: NSRect) // inherited from NSAccessibility
  isAccessibilityFrontmost: boolean;
  setAccessibilityFrontmost(_: boolean) // inherited from NSAccessibility
  accessibilityFullScreenButton: any;
  setAccessibilityFullScreenButton(_: any) // inherited from NSAccessibility
  accessibilityGrowArea: any;
  setAccessibilityGrowArea(_: any) // inherited from NSAccessibility
  accessibilityHandles: NSArray<any>;
  setAccessibilityHandles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityHeader: any;
  setAccessibilityHeader(_: any) // inherited from NSAccessibility
  accessibilityHelp: string;
  setAccessibilityHelp(_: string) // inherited from NSAccessibility
  isAccessibilityHidden: boolean;
  setAccessibilityHidden(_: boolean) // inherited from NSAccessibility
  accessibilityHorizontalScrollBar: any;
  setAccessibilityHorizontalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityHorizontalUnitDescription: string;
  setAccessibilityHorizontalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityHorizontalUnits: NSAccessibility.Units;
  setAccessibilityHorizontalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityIdentifier: string;
  setAccessibilityIdentifier(_: string) // inherited from NSAccessibility
  accessibilityIncrementButton: any;
  setAccessibilityIncrementButton(_: any) // inherited from NSAccessibility
  accessibilityIndex: number;
  setAccessibilityIndex(_: number) // inherited from NSAccessibility
  accessibilityInsertionPointLineNumber: number;
  setAccessibilityInsertionPointLineNumber(_: number) // inherited from NSAccessibility
  accessibilityLabel: string;
  setAccessibilityLabel(_: string) // inherited from NSAccessibility
  accessibilityLabelUIElements: NSArray<any>;
  setAccessibilityLabelUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityLabelValue: number;
  setAccessibilityLabelValue(_: number) // inherited from NSAccessibility
  accessibilityLinkedUIElements: NSArray<any>;
  setAccessibilityLinkedUIElements(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityMain: boolean;
  setAccessibilityMain(_: boolean) // inherited from NSAccessibility
  accessibilityMainWindow: any;
  setAccessibilityMainWindow(_: any) // inherited from NSAccessibility
  accessibilityMarkerGroupUIElement: any;
  setAccessibilityMarkerGroupUIElement(_: any) // inherited from NSAccessibility
  accessibilityMarkerTypeDescription: string;
  setAccessibilityMarkerTypeDescription(_: string) // inherited from NSAccessibility
  accessibilityMarkerUIElements: NSArray<any>;
  setAccessibilityMarkerUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityMarkerValues: any;
  setAccessibilityMarkerValues(_: any) // inherited from NSAccessibility
  accessibilityMaxValue: any;
  setAccessibilityMaxValue(_: any) // inherited from NSAccessibility
  accessibilityMenuBar: any;
  setAccessibilityMenuBar(_: any) // inherited from NSAccessibility
  accessibilityMinValue: any;
  setAccessibilityMinValue(_: any) // inherited from NSAccessibility
  accessibilityMinimizeButton: any;
  setAccessibilityMinimizeButton(_: any) // inherited from NSAccessibility
  isAccessibilityMinimized: boolean;
  setAccessibilityMinimized(_: boolean) // inherited from NSAccessibility
  isAccessibilityModal: boolean;
  setAccessibilityModal(_: boolean) // inherited from NSAccessibility
  accessibilityNextContents: NSArray<any>;
  setAccessibilityNextContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityNumberOfCharacters: number;
  setAccessibilityNumberOfCharacters(_: number) // inherited from NSAccessibility
  isAccessibilityOrderedByRow: boolean;
  setAccessibilityOrderedByRow(_: boolean) // inherited from NSAccessibility
  accessibilityOrientation: NSAccessibility.Orientation;
  setAccessibilityOrientation(_: NSAccessibility.Orientation) // inherited from NSAccessibility
  accessibilityOverflowButton: any;
  setAccessibilityOverflowButton(_: any) // inherited from NSAccessibility
  accessibilityParent: any;
  setAccessibilityParent(_: any) // inherited from NSAccessibility
  accessibilityPlaceholderValue: string;
  setAccessibilityPlaceholderValue(_: string) // inherited from NSAccessibility
  accessibilityPreviousContents: NSArray<any>;
  setAccessibilityPreviousContents(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityProtectedContent: boolean;
  setAccessibilityProtectedContent(_: boolean) // inherited from NSAccessibility
  accessibilityProxy: any;
  setAccessibilityProxy(_: any) // inherited from NSAccessibility
  isAccessibilityRequired: boolean;
  setAccessibilityRequired(_: boolean) // inherited from NSAccessibility
  accessibilityRole: string;
  setAccessibilityRole(_: string) // inherited from NSAccessibility
  accessibilityRoleDescription: string;
  setAccessibilityRoleDescription(_: string) // inherited from NSAccessibility
  accessibilityRowCount: number;
  setAccessibilityRowCount(_: number) // inherited from NSAccessibility
  accessibilityRowHeaderUIElements: NSArray<any>;
  setAccessibilityRowHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRowIndexRange: NSRange;
  setAccessibilityRowIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityRows: NSArray<any>;
  setAccessibilityRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRulerMarkerType: NSAccessibility.RulerMarkerType;
  setAccessibilityRulerMarkerType(_: NSAccessibility.RulerMarkerType) // inherited from NSAccessibility
  accessibilitySearchButton: any;
  setAccessibilitySearchButton(_: any) // inherited from NSAccessibility
  accessibilitySearchMenu: any;
  setAccessibilitySearchMenu(_: any) // inherited from NSAccessibility
  isAccessibilitySelected: boolean;
  setAccessibilitySelected(_: boolean) // inherited from NSAccessibility
  accessibilitySelectedCells: NSArray<any>;
  setAccessibilitySelectedCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedChildren: NSArray<any>;
  setAccessibilitySelectedChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedColumns: NSArray<any>;
  setAccessibilitySelectedColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedRows: NSArray<any>;
  setAccessibilitySelectedRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedText: string;
  setAccessibilitySelectedText(_: string) // inherited from NSAccessibility
  accessibilitySelectedTextRange: NSRange;
  setAccessibilitySelectedTextRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySelectedTextRanges: NSArray<NSValue>;
  setAccessibilitySelectedTextRanges(_: NSArray<NSValue>) // inherited from NSAccessibility
  accessibilityServesAsTitleForUIElements: NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedCharacterRange: NSRange;
  setAccessibilitySharedCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySharedFocusElements: NSArray<any>;
  setAccessibilitySharedFocusElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedTextUIElements: NSArray<any>;
  setAccessibilitySharedTextUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityShownMenu: any;
  setAccessibilityShownMenu(_: any) // inherited from NSAccessibility
  accessibilitySortDirection: NSAccessibility.SortDirection;
  setAccessibilitySortDirection(_: NSAccessibility.SortDirection) // inherited from NSAccessibility
  accessibilitySplitters: NSArray<any>;
  setAccessibilitySplitters(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySubrole: string;
  setAccessibilitySubrole(_: string) // inherited from NSAccessibility
  accessibilityTabs: NSArray<any>;
  setAccessibilityTabs(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityTitle: string;
  setAccessibilityTitle(_: string) // inherited from NSAccessibility
  accessibilityTitleUIElement: any;
  setAccessibilityTitleUIElement(_: any) // inherited from NSAccessibility
  accessibilityToolbarButton: any;
  setAccessibilityToolbarButton(_: any) // inherited from NSAccessibility
  accessibilityTopLevelUIElement: any;
  setAccessibilityTopLevelUIElement(_: any) // inherited from NSAccessibility
  accessibilityURL: NSURL;
  setAccessibilityURL(_: NSURL) // inherited from NSAccessibility
  accessibilityUnitDescription: string;
  setAccessibilityUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityUnits: NSAccessibility.Units;
  setAccessibilityUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityValue: any;
  setAccessibilityValue(_: any) // inherited from NSAccessibility
  accessibilityValueDescription: string;
  setAccessibilityValueDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalScrollBar: any;
  setAccessibilityVerticalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityVerticalUnitDescription: string;
  setAccessibilityVerticalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalUnits: NSAccessibility.Units;
  setAccessibilityVerticalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityVisibleCells: NSArray<any>;
  setAccessibilityVisibleCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleCharacterRange: NSRange;
  setAccessibilityVisibleCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilityVisibleChildren: NSArray<any>;
  setAccessibilityVisibleChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleColumns: NSArray<any>;
  setAccessibilityVisibleColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleRows: NSArray<any>;
  setAccessibilityVisibleRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityWarningValue: any;
  setAccessibilityWarningValue(_: any) // inherited from NSAccessibility
  accessibilityWindow: any;
  setAccessibilityWindow(_: any) // inherited from NSAccessibility
  accessibilityWindows: NSArray<any>;
  setAccessibilityWindows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityZoomButton: any;
  setAccessibilityZoomButton(_: any) // inherited from NSAccessibility
  appearance: NSAppearance;
  setAppearance(_: NSAppearance) // inherited from NSAppearanceCustomization
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly effectiveAppearance: NSAppearance; // inherited from NSAppearanceCustomization
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;
  accessibilityCellForColumnRow(_: number, row: number): any;
  accessibilityFrame(): NSRect;
  accessibilityFrameForRange(_: NSRange): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLayoutPointForScreenPoint(_: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(_: NSSize): NSSize;
  accessibilityLineForIndex(_: number): number;
  accessibilityParent(): any;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  accessibilityRTFForRange(_: NSRange): Data;
  accessibilityRangeForIndex(_: number): NSRange;
  accessibilityRangeForLine(_: number): NSRange;
  accessibilityRangeForPosition(_: NSPoint): NSRange;
  accessibilityScreenPointForLayoutPoint(_: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(_: NSSize): NSSize;
  accessibilityStringForRange(_: NSRange): string;
  accessibilityStyleRangeForIndex(_: number): NSRange;
  close(): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  isAccessibilityFocused(): boolean;
  isAccessibilitySelectorAllowed(_: string): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performClose(_?: any): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  showRelativeToRectOfViewPreferredEdge(relativeTo: NSRect, of: NSView, preferredEdge: NSRectEdge): void;
}

declare var NSPopoverCloseReasonDetachToWindow: string;

declare var NSPopoverCloseReasonKey: string;

declare var NSPopoverCloseReasonStandard: string;

interface NSPopoverDelegate extends NSObject {
  detachableWindowForPopover?(for_: NSPopover): NSWindow;
  popoverDidClose?(_: Notification): void;
  popoverDidDetach?(_: NSPopover): void;
  popoverDidShow?(_: Notification): void;
  popoverShouldClose?(_: NSPopover): boolean;
  popoverShouldDetach?(_: NSPopover): boolean;
  popoverWillClose?(_: Notification): void;
  popoverWillShow?(_: Notification): void;
}

declare var NSPopoverDelegate: {
  prototype: NSPopoverDelegate;
};

declare var NSPopoverDidCloseNotification: string;

declare var NSPopoverDidShowNotification: string;

declare class NSPopoverTouchBarItem extends NSTouchBarItem {
  collapsedRepresentation: NSView;
  setCollapsedRepresentation(_: NSView)
  collapsedRepresentationImage: NSImage;
  setCollapsedRepresentationImage(_: NSImage)
  collapsedRepresentationLabel: string;
  setCollapsedRepresentationLabel(_: string)
  customizationLabel: string;
  setCustomizationLabel(_: string)
  popoverTouchBar: NSTouchBar;
  setPopoverTouchBar(_: NSTouchBar)
  pressAndHoldTouchBar: NSTouchBar;
  setPressAndHoldTouchBar(_: NSTouchBar)
  showsCloseButton: boolean;
  setShowsCloseButton(_: boolean)
  dismissPopover(_?: any): void;
  makeStandardActivatePopoverGestureRecognizer(): NSGestureRecognizer;
  showPopover(_?: any): void;
}

declare var NSPopoverWillCloseNotification: string;

declare var NSPopoverWillShowNotification: string;

declare var NSPositioningRectBinding: string;

declare var NSPredicateBinding: string;

declare class NSPredicateEditor extends NSRuleEditor {
  rowTemplates: NSArray<NSPredicateEditorRowTemplate>;
  setRowTemplates(_: NSArray<NSPredicateEditorRowTemplate>)
}

declare class NSPredicateEditorRowTemplate extends NSObject implements NSCoding, NSCopying {
  static templatesWithAttributeKeyPathsInEntityDescription(withAttributeKeyPaths: NSArray<string>, in_: NSEntityDescription): NSArray<NSPredicateEditorRowTemplate>;
  readonly compoundTypes: NSArray<number>;
  readonly leftExpressions: NSArray<NSExpression>;
  readonly modifier: NSComparisonPredicate.Modifier;
  readonly operators: NSArray<number>;
  readonly options: number;
  readonly rightExpressionAttributeType: NSAttributeType;
  readonly rightExpressions: NSArray<NSExpression>;
  readonly templateViews: NSArray<NSView>;
  displayableSubpredicatesOfPredicate(of: NSPredicate): NSArray<NSPredicate>;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithCompoundTypes(compoundTypes: NSArray<number>): this;
  static createWithLeftExpressionsRightExpressionAttributeTypeModifierOperatorsOptions(leftExpressions: NSArray<NSExpression>, rightExpressionAttributeType: NSAttributeType, modifier: NSComparisonPredicate.Modifier, operators: NSArray<number>, options: number): this;
  static createWithLeftExpressionsRightExpressionsModifierOperatorsOptions(leftExpressions: NSArray<NSExpression>, rightExpressions: NSArray<NSExpression>, modifier: NSComparisonPredicate.Modifier, operators: NSArray<number>, options: number): this;
  matchForPredicate(for_: NSPredicate): number;
  predicateWithSubpredicates(withSubpredicates?: NSArray<NSPredicate>): NSPredicate;
  setPredicate(_: NSPredicate): void;
}

declare var NSPredicateFormatBindingOption: string;

declare var NSPreferredScrollerStyleDidChangeNotification: string;

declare var NSPrefixSpacesDocumentAttribute: string;

declare class NSPressGestureRecognizer extends NSGestureRecognizer implements NSCoding {
  allowableMovement: number;
  setAllowableMovement(_: number)
  buttonMask: number;
  setButtonMask(_: number)
  minimumPressDuration: number;
  setMinimumPressDuration(_: number)
  numberOfTouchesRequired: number;
  setNumberOfTouchesRequired(_: number)
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSPressureConfiguration extends NSObject {
  readonly pressureBehavior: NSEvent.PressureBehavior;
  static createWithPressureBehavior(pressureBehavior: NSEvent.PressureBehavior): this;
  set(): void;
}


declare const NSPrevFunctionKey: number;
declare var NSPrintAllPages: string;

declare var NSPrintAllPresetsJobStyleHint: string;

declare var NSPrintBottomMargin: string;

declare var NSPrintCancelJob: string;

declare var NSPrintCopies: string;

declare var NSPrintDetailedErrorReporting: string;

declare var NSPrintFaxNumber: string;

declare var NSPrintFirstPage: string;


declare const NSPrintFunctionKey: number;
declare var NSPrintHeaderAndFooter: string;

declare var NSPrintHorizontalPagination: string;

declare var NSPrintHorizontallyCentered: string;

declare class NSPrintInfo extends NSObject implements NSCoding, NSCopying {
  bottomMargin: number;
  setBottomMargin(_: number)
  horizontalPagination: NSPrintInfo.PaginationMode;
  setHorizontalPagination(_: NSPrintInfo.PaginationMode)
  isHorizontallyCentered: boolean;
  setHorizontallyCentered(_: boolean)
  readonly imageablePageBounds: NSRect;
  jobDisposition: string;
  setJobDisposition(_: string)
  leftMargin: number;
  setLeftMargin(_: number)
  readonly localizedPaperName: string;
  orientation: NSPrintInfo.PaperOrientation;
  setOrientation(_: NSPrintInfo.PaperOrientation)
  paperName: string;
  setPaperName(_: string)
  paperSize: NSSize;
  setPaperSize(_: NSSize)
  readonly printSettings: NSMutableDictionary<string, any>;
  printer: NSPrinter;
  setPrinter(_: NSPrinter)
  rightMargin: number;
  setRightMargin(_: number)
  scalingFactor: number;
  setScalingFactor(_: number)
  isSelectionOnly: boolean;
  setSelectionOnly(_: boolean)
  topMargin: number;
  setTopMargin(_: number)
  verticalPagination: NSPrintInfo.PaginationMode;
  setVerticalPagination(_: NSPrintInfo.PaginationMode)
  isVerticallyCentered: boolean;
  setVerticallyCentered(_: boolean)
  static defaultPrinter(): NSPrinter;
  static sharedPrintInfo: NSPrintInfo;
  setSharedPrintInfo(_: NSPrintInfo)
  PMPageFormat(): any;
  PMPrintSession(): any;
  PMPrintSettings(): any;
  dictionary(): NSMutableDictionary<string, any>;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithDictionary(dictionary: NSDictionary<string, any>): this;
  setUpPrintOperationDefaultValues(): void;
  takeSettingsFromPDFInfo(from: NSPDFInfo): void;
  updateFromPMPageFormat(): void;
  updateFromPMPrintSettings(): void;
}

declare var NSPrintJobDisposition: string;

declare var NSPrintJobSavingFileNameExtensionHidden: string;

declare var NSPrintJobSavingURL: string;

declare var NSPrintLastPage: string;

declare var NSPrintLeftMargin: string;

declare var NSPrintMustCollate: string;

declare var NSPrintNoPresetsJobStyleHint: string;

declare class NSPrintOperation extends NSObject {
  static EPSOperationWithViewInsideRectToData(with_: NSView, inside: NSRect, to?: NSMutableData): NSPrintOperation;
  static EPSOperationWithViewInsideRectToDataPrintInfo(with_: NSView, inside: NSRect, to: NSMutableData, printInfo: NSPrintInfo): NSPrintOperation;
  static EPSOperationWithViewInsideRectToPathPrintInfo(with_: NSView, inside: NSRect, toPath: string, printInfo: NSPrintInfo): NSPrintOperation;
  static PDFOperationWithViewInsideRectToData(with_: NSView, inside: NSRect, to: NSMutableData): NSPrintOperation;
  static PDFOperationWithViewInsideRectToDataPrintInfo(with_: NSView, inside: NSRect, to: NSMutableData, printInfo: NSPrintInfo): NSPrintOperation;
  static PDFOperationWithViewInsideRectToPathPrintInfo(with_: NSView, inside: NSRect, toPath: string, printInfo: NSPrintInfo): NSPrintOperation;
  PDFPanel: NSPDFPanel;
  setPDFPanel(_: NSPDFPanel)
  canSpawnSeparateThread: boolean;
  setCanSpawnSeparateThread(_: boolean)
  readonly context: NSGraphicsContext;
  readonly isCopyingOperation: boolean;
  readonly currentPage: number;
  jobTitle: string;
  setJobTitle(_: string)
  pageOrder: NSPrintOperation.PageOrder;
  setPageOrder(_: NSPrintOperation.PageOrder)
  readonly pageRange: NSRange;
  readonly preferredRenderingQuality: NSPrintOperation.RenderingQuality;
  printInfo: NSPrintInfo;
  setPrintInfo(_: NSPrintInfo)
  printPanel: NSPrintPanel;
  setPrintPanel(_: NSPrintPanel)
  showsPrintPanel: boolean;
  setShowsPrintPanel(_: boolean)
  showsProgressPanel: boolean;
  setShowsProgressPanel(_: boolean)
  readonly view: NSView;
  static currentOperation: NSPrintOperation;
  setCurrentOperation(_: NSPrintOperation)
  cleanUpOperation(): void;
  createContext(): NSGraphicsContext;
  deliverResult(): boolean;
  destroyContext(): void;
  runOperation(): boolean;
  runOperationModalForWindowDelegateDidRunSelectorContextInfo(for_: NSWindow, delegate?: any, didRun?: string, contextInfo?: any): void;
}

declare var NSPrintOperationExistsException: string;

declare var NSPrintOrientation: string;

declare var NSPrintPackageException: string;

declare var NSPrintPagesAcross: string;

declare var NSPrintPagesDown: string;

declare class NSPrintPanel extends NSObject {
  readonly accessoryControllers: NSArray<NSViewController>;
  helpAnchor: string;
  setHelpAnchor(_: string)
  jobStyleHint: string;
  setJobStyleHint(_: string)
  options: NSPrintPanel.Options;
  setOptions(_: NSPrintPanel.Options)
  readonly printInfo: NSPrintInfo;
  addAccessoryController(_: NSViewController): void;
  beginSheetWithPrintInfoModalForWindowDelegateDidEndSelectorContextInfo(with_: NSPrintInfo, modalFor: NSWindow, delegate?: any, didEnd?: string, contextInfo?: any): void;
  defaultButtonTitle(): string;
  removeAccessoryController(_: NSViewController): void;
  runModal(): number;
  runModalWithPrintInfo(with_: NSPrintInfo): number;
  setDefaultButtonTitle(_?: string): void;
}

interface NSPrintPanelAccessorizing {
  keyPathsForValuesAffectingPreview?(): Set<string>;
  localizedSummaryItems(): NSArray<NSDictionary<string, string>>;
}

declare var NSPrintPanelAccessorizing: {
  prototype: NSPrintPanelAccessorizing;
};

declare var NSPrintPanelAccessorySummaryItemDescriptionKey: string;

declare var NSPrintPanelAccessorySummaryItemNameKey: string;

declare var NSPrintPaperName: string;

declare var NSPrintPaperSize: string;

declare var NSPrintPhotoJobStyleHint: string;

declare var NSPrintPreviewJob: string;

declare var NSPrintPrinter: string;

declare var NSPrintPrinterName: string;

declare var NSPrintReversePageOrder: string;

declare var NSPrintRightMargin: string;

declare var NSPrintSaveJob: string;

declare var NSPrintScalingFactor: string;


declare const NSPrintScreenFunctionKey: number;
declare var NSPrintSelectionOnly: string;

declare var NSPrintSpoolJob: string;

declare var NSPrintTime: string;

declare var NSPrintTopMargin: string;

declare var NSPrintVerticalPagination: string;

declare var NSPrintVerticallyCentered: string;

declare class NSPrinter extends NSObject implements NSCoding, NSCopying {
  readonly deviceDescription: NSDictionary<string, any>;
  readonly languageLevel: number;
  readonly name: string;
  readonly type: string;
  static printerNames(): NSArray<string>;
  static printerTypes(): NSArray<string>;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  pageSizeForPaper(forPaper: string): NSSize;
}

declare var NSPrintingCommunicationException: string;

declare class NSProgressIndicator extends NSView implements NSAccessibilityProgressIndicator {
  isBezeled: boolean;
  setBezeled(_: boolean)
  controlSize: NSControl.ControlSize;
  setControlSize(_: NSControl.ControlSize)
  controlTint: NSControlTint;
  setControlTint(_: NSControlTint)
  isDisplayedWhenStopped: boolean;
  setDisplayedWhenStopped(_: boolean)
  doubleValue: number;
  setDoubleValue(_: number)
  isIndeterminate: boolean;
  setIndeterminate(_: boolean)
  maxValue: number;
  setMaxValue(_: number)
  minValue: number;
  setMinValue(_: number)
  style: NSProgressIndicator.Style;
  setStyle(_: NSProgressIndicator.Style)
  usesThreadedAnimation: boolean;
  setUsesThreadedAnimation(_: boolean)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityFrame(): NSRect;
  accessibilityIdentifier(): string;
  accessibilityParent(): any;
  accessibilityValue(): number;
  conformsToProtocol(to: any /* Protocol */): boolean;
  incrementBy(by: number): void;
  isAccessibilityFocused(): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  sizeToFit(): void;
  startAnimation(_?: any): void;
  stopAnimation(_?: any): void;
}

declare var NSRTFDTextDocumentType: string;

declare var NSRTFPropertyStackOverflowException: string;

declare var NSRTFTextDocumentType: string;

declare var NSRaisesForNotApplicableKeysBindingOption: string;

declare var NSRangeDateMode: NSDatePicker.Mode;

declare var NSReadOnlyDocumentAttribute: string;

declare var NSRecentSearchesBinding: string;

declare function NSRectClip(rect: NSRect): void;
declare function NSRectClipList(rects: NSRect, count: number): void;
declare function NSRectFill(rect: NSRect): void;
declare function NSRectFillList(rects: NSRect, count: number): void;
declare function NSRectFillListUsingOperation(rects: NSRect, count: number, op: NSCompositingOperation): void;
declare function NSRectFillListWithColors(rects: NSRect, colors: NSColor, num: number): void;
declare function NSRectFillListWithColorsUsingOperation(rects: NSRect, colors: NSColor, num: number, op: NSCompositingOperation): void;
declare function NSRectFillListWithGrays(rects: NSRect, grays: number, num: number): void;
declare function NSRectFillUsingOperation(rect: NSRect, op: NSCompositingOperation): void;

declare const NSRedoFunctionKey: number;
declare function NSRegisterServicesProvider(provider: any, name: string): void;
declare var NSRepresentedFilenameBinding: string;


declare const NSResetCursorRectsRunLoopOrdering: number;

declare const NSResetFunctionKey: number;
declare class NSResponder extends NSObject implements NSCoding, NSStandardKeyBindingResponding, NSUserActivityRestoring, NSTouchBarProvider {
  readonly acceptsFirstResponder: boolean;
  menu: NSMenu;
  setMenu(_: NSMenu)
  nextResponder: NSResponder;
  setNextResponder(_: NSResponder)
  touchBar: NSTouchBar;
  setTouchBar(_: NSTouchBar)
  readonly undoManager: UndoManager;
  userActivity: NSUserActivity;
  setUserActivity(_: NSUserActivity)
  static restorableStateKeyPaths(): NSArray<string>;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  becomeFirstResponder(): boolean;
  beginGestureWithEvent(with_: NSEvent): void;
  cancelOperation(_?: any): void;
  capitalizeWord(_?: any): void;
  centerSelectionInVisibleArea(_?: any): void;
  changeCaseOfLetter(_?: any): void;
  changeModeWithEvent(with_: NSEvent): void;
  complete(_?: any): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  cursorUpdate(with_: NSEvent): void;
  deleteBackward(_?: any): void;
  deleteBackwardByDecomposingPreviousCharacter(_?: any): void;
  deleteForward(_?: any): void;
  deleteToBeginningOfLine(_?: any): void;
  deleteToBeginningOfParagraph(_?: any): void;
  deleteToEndOfLine(_?: any): void;
  deleteToEndOfParagraph(_?: any): void;
  deleteToMark(_?: any): void;
  deleteWordBackward(_?: any): void;
  deleteWordForward(_?: any): void;
  doCommandBySelector(by: string): void;
  encodeRestorableStateWithCoder(with_: NSCoder): void;
  encodeRestorableStateWithCoderBackgroundQueue(with_: NSCoder, backgroundQueue: OperationQueue): void;
  encodeWithCoder(with_: NSCoder): void;
  endGestureWithEvent(with_: NSEvent): void;
  flagsChanged(with_: NSEvent): void;
  flushBufferedKeyEvents(): void;
  helpRequested(_: NSEvent): void;
  indent(_?: any): void;
  static createWithCoder(coder: NSCoder): this;
  insertBacktab(_?: any): void;
  insertContainerBreak(_?: any): void;
  insertDoubleQuoteIgnoringSubstitution(_?: any): void;
  insertLineBreak(_?: any): void;
  insertNewline(_?: any): void;
  insertNewlineIgnoringFieldEditor(_?: any): void;
  insertParagraphSeparator(_?: any): void;
  insertSingleQuoteIgnoringSubstitution(_?: any): void;
  insertTab(_?: any): void;
  insertTabIgnoringFieldEditor(_?: any): void;
  insertText(_: any): void;
  interpretKeyEvents(_: NSArray<NSEvent>): void;
  invalidateRestorableState(): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  keyDown(with_: NSEvent): void;
  keyUp(with_: NSEvent): void;
  lowercaseWord(_?: any): void;
  magnifyWithEvent(with_: NSEvent): void;
  makeBaseWritingDirectionLeftToRight(_?: any): void;
  makeBaseWritingDirectionNatural(_?: any): void;
  makeBaseWritingDirectionRightToLeft(_?: any): void;
  makeTextWritingDirectionLeftToRight(_?: any): void;
  makeTextWritingDirectionNatural(_?: any): void;
  makeTextWritingDirectionRightToLeft(_?: any): void;
  makeTouchBar(): NSTouchBar;
  mouseDown(with_: NSEvent): void;
  mouseDragged(with_: NSEvent): void;
  mouseEntered(with_: NSEvent): void;
  mouseExited(with_: NSEvent): void;
  mouseMoved(with_: NSEvent): void;
  mouseUp(with_: NSEvent): void;
  moveBackward(_?: any): void;
  moveBackwardAndModifySelection(_?: any): void;
  moveDown(_?: any): void;
  moveDownAndModifySelection(_?: any): void;
  moveForward(_?: any): void;
  moveForwardAndModifySelection(_?: any): void;
  moveLeft(_?: any): void;
  moveLeftAndModifySelection(_?: any): void;
  moveParagraphBackwardAndModifySelection(_?: any): void;
  moveParagraphForwardAndModifySelection(_?: any): void;
  moveRight(_?: any): void;
  moveRightAndModifySelection(_?: any): void;
  moveToBeginningOfDocument(_?: any): void;
  moveToBeginningOfDocumentAndModifySelection(_?: any): void;
  moveToBeginningOfLine(_?: any): void;
  moveToBeginningOfLineAndModifySelection(_?: any): void;
  moveToBeginningOfParagraph(_?: any): void;
  moveToBeginningOfParagraphAndModifySelection(_?: any): void;
  moveToEndOfDocument(_?: any): void;
  moveToEndOfDocumentAndModifySelection(_?: any): void;
  moveToEndOfLine(_?: any): void;
  moveToEndOfLineAndModifySelection(_?: any): void;
  moveToEndOfParagraph(_?: any): void;
  moveToEndOfParagraphAndModifySelection(_?: any): void;
  moveToLeftEndOfLine(_?: any): void;
  moveToLeftEndOfLineAndModifySelection(_?: any): void;
  moveToRightEndOfLine(_?: any): void;
  moveToRightEndOfLineAndModifySelection(_?: any): void;
  moveUp(_?: any): void;
  moveUpAndModifySelection(_?: any): void;
  moveWordBackward(_?: any): void;
  moveWordBackwardAndModifySelection(_?: any): void;
  moveWordForward(_?: any): void;
  moveWordForwardAndModifySelection(_?: any): void;
  moveWordLeft(_?: any): void;
  moveWordLeftAndModifySelection(_?: any): void;
  moveWordRight(_?: any): void;
  moveWordRightAndModifySelection(_?: any): void;
  newWindowForTab(_?: any): void;
  noResponderFor(for_: string): void;
  otherMouseDown(with_: NSEvent): void;
  otherMouseDragged(with_: NSEvent): void;
  otherMouseUp(with_: NSEvent): void;
  pageDown(_?: any): void;
  pageDownAndModifySelection(_?: any): void;
  pageUp(_?: any): void;
  pageUpAndModifySelection(_?: any): void;
  performKeyEquivalent(with_: NSEvent): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  performTextFinderAction(_?: any): void;
  presentError(_: Error): boolean;
  presentErrorModalForWindowDelegateDidPresentSelectorContextInfo(_: Error, modalFor: NSWindow, delegate?: any, didPresent?: string, contextInfo?: any): void;
  pressureChangeWithEvent(with_: NSEvent): void;
  quickLookPreviewItems(_?: any): void;
  quickLookWithEvent(with_: NSEvent): void;
  resignFirstResponder(): boolean;
  respondsToSelector(_: string): boolean;
  restoreStateWithCoder(with_: NSCoder): void;
  restoreUserActivityState(_: NSUserActivity): void;
  rightMouseDown(with_: NSEvent): void;
  rightMouseDragged(with_: NSEvent): void;
  rightMouseUp(with_: NSEvent): void;
  rotateWithEvent(with_: NSEvent): void;
  scrollLineDown(_?: any): void;
  scrollLineUp(_?: any): void;
  scrollPageDown(_?: any): void;
  scrollPageUp(_?: any): void;
  scrollToBeginningOfDocument(_?: any): void;
  scrollToEndOfDocument(_?: any): void;
  scrollWheel(with_: NSEvent): void;
  selectAll(_?: any): void;
  selectLine(_?: any): void;
  selectParagraph(_?: any): void;
  selectToMark(_?: any): void;
  selectWord(_?: any): void;
  self(): this;
  setMark(_?: any): void;
  shouldBeTreatedAsInkEvent(_: NSEvent): boolean;
  showContextHelp(_?: any): void;
  smartMagnifyWithEvent(with_: NSEvent): void;
  supplementalTargetForActionSender(forAction: string, sender?: any): any;
  swapWithMark(_?: any): void;
  swipeWithEvent(with_: NSEvent): void;
  tabletPoint(with_: NSEvent): void;
  tabletProximity(with_: NSEvent): void;
  touchesBeganWithEvent(with_: NSEvent): void;
  touchesCancelledWithEvent(with_: NSEvent): void;
  touchesEndedWithEvent(with_: NSEvent): void;
  touchesMovedWithEvent(with_: NSEvent): void;
  transpose(_?: any): void;
  transposeWords(_?: any): void;
  tryToPerformWith(_: string, with_?: any): boolean;
  updateUserActivityState(_: NSUserActivity): void;
  uppercaseWord(_?: any): void;
  validRequestorForSendTypeReturnType(forSendType?: string, returnType?: string): any;
  validateProposedFirstResponderForEvent(_: NSResponder, for_?: NSEvent): boolean;
  wantsForwardedScrollEventsForAxis(for_: NSEvent.GestureAxis): boolean;
  wantsScrollEventsForSwipeTrackingOnAxis(on: NSEvent.GestureAxis): boolean;
  willPresentError(_: Error): Error;
  yank(_?: any): void;
}


declare const NSReturnTextMovement: number;

declare const NSRightArrowFunctionKey: number;
declare var NSRightMarginDocumentAttribute: string;


declare const NSRightTextMovement: number;
declare class NSRotationGestureRecognizer extends NSGestureRecognizer {
  rotation: number;
  setRotation(_: number)
  rotationInDegrees: number;
  setRotationInDegrees(_: number)
}

declare var NSRoundLineCapStyle: NSBezierPath.LineCapStyle;

declare var NSRoundLineJoinStyle: NSBezierPath.LineJoinStyle;

declare var NSRowHeightBinding: string;

declare class NSRuleEditor extends NSControl {
  canRemoveAllRows: boolean;
  setCanRemoveAllRows(_: boolean)
  criteriaKeyPath: string;
  setCriteriaKeyPath(_: string)
  delegate: NSRuleEditorDelegate;
  setDelegate(_: NSRuleEditorDelegate)
  displayValuesKeyPath: string;
  setDisplayValuesKeyPath(_: string)
  isEditable: boolean;
  setEditable(_: boolean)
  formattingDictionary: NSDictionary<string, string>;
  setFormattingDictionary(_: NSDictionary<string, string>)
  formattingStringsFilename: string;
  setFormattingStringsFilename(_: string)
  nestingMode: NSRuleEditor.NestingMode;
  setNestingMode(_: NSRuleEditor.NestingMode)
  readonly numberOfRows: number;
  readonly predicate: NSPredicate;
  rowClass: typeof NSObject;
  setRowClass(_: typeof NSObject)
  rowHeight: number;
  setRowHeight(_: number)
  rowTypeKeyPath: string;
  setRowTypeKeyPath(_: string)
  readonly selectedRowIndexes: IndexSet;
  subrowsKeyPath: string;
  setSubrowsKeyPath(_: string)
  addRow(_?: any): void;
  criteriaForRow(forRow: number): NSArray<any>;
  displayValuesForRow(forRow: number): NSArray<any>;
  insertRowAtIndexWithTypeAsSubrowOfRowAnimate(at: number, with_: NSRuleEditor.RowType, asSubrowOfRow: number, animate: boolean): void;
  parentRowForRow(forRow: number): number;
  predicateForRow(forRow: number): NSPredicate;
  reloadCriteria(): void;
  reloadPredicate(): void;
  removeRowAtIndex(at: number): void;
  removeRowsAtIndexesIncludeSubrows(at: IndexSet, includeSubrows: boolean): void;
  rowForDisplayValue(forDisplayValue: any): number;
  rowTypeForRow(forRow: number): NSRuleEditor.RowType;
  selectRowIndexesByExtendingSelection(_: IndexSet, byExtendingSelection: boolean): void;
  setCriteriaAndDisplayValuesForRowAtIndex(_: NSArray<any>, andDisplayValues: NSArray<any>, forRowAt: number): void;
  subrowIndexesForRow(forRow: number): IndexSet;
}

interface NSRuleEditorDelegate extends NSObject {
  ruleEditorNumberOfChildrenForCriterionWithRowType(_: NSRuleEditor, numberOfChildrenForCriterion?: any, with_: NSRuleEditor.RowType): number;
  ruleEditorChildForCriterionWithRowType(_: NSRuleEditor, child: number, forCriterion?: any, with_: NSRuleEditor.RowType): any;
  ruleEditorDisplayValueForCriterionInRow(_: NSRuleEditor, displayValueForCriterion: any, inRow: number): any;
  ruleEditorPredicatePartsForCriterionWithDisplayValueInRow?(_: NSRuleEditor, predicatePartsForCriterion: any, withDisplayValue: any, inRow: number): NSDictionary<string, any>;
  ruleEditorRowsDidChange?(_: Notification): void;
}

declare var NSRuleEditorDelegate: {
  prototype: NSRuleEditorDelegate;
};

declare var NSRuleEditorPredicateComparisonModifier: string;

declare var NSRuleEditorPredicateCompoundType: string;

declare var NSRuleEditorPredicateCustomSelector: string;

declare var NSRuleEditorPredicateLeftExpression: string;

declare var NSRuleEditorPredicateOperatorType: string;

declare var NSRuleEditorPredicateOptions: string;

declare var NSRuleEditorPredicateRightExpression: string;

declare var NSRuleEditorRowsDidChangeNotification: string;

declare class NSRulerMarker extends NSObject implements NSCoding, NSCopying {
  readonly isDragging: boolean;
  image: NSImage;
  setImage(_: NSImage)
  imageOrigin: NSPoint;
  setImageOrigin(_: NSPoint)
  readonly imageRectInRuler: NSRect;
  markerLocation: number;
  setMarkerLocation(_: number)
  isMovable: boolean;
  setMovable(_: boolean)
  isRemovable: boolean;
  setRemovable(_: boolean)
  representedObject: any;
  setRepresentedObject(_: any)
  readonly ruler: NSRulerView;
  readonly thicknessRequiredInRuler: number;
  drawRect(_: NSRect): void;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithRulerViewMarkerLocationImageImageOrigin(rulerView: NSRulerView, markerLocation: number, image: NSImage, imageOrigin: NSPoint): this;
  trackMouseAdding(with_: NSEvent, adding: boolean): boolean;
}

declare class NSRulerView extends NSView {
  static registerUnitWithNameAbbreviationUnitToPointsConversionFactorStepUpCycleStepDownCycle(withName: string, abbreviation: string, unitToPointsConversionFactor: number, stepUpCycle: NSArray<number>, stepDownCycle: NSArray<number>): void;
  accessoryView: NSView;
  setAccessoryView(_: NSView)
  readonly baselineLocation: number;
  clientView: NSView;
  setClientView(_: NSView)
  markers: NSArray<NSRulerMarker>;
  setMarkers(_: NSArray<NSRulerMarker>)
  measurementUnits: string;
  setMeasurementUnits(_: string)
  orientation: NSRulerView.Orientation;
  setOrientation(_: NSRulerView.Orientation)
  originOffset: number;
  setOriginOffset(_: number)
  readonly requiredThickness: number;
  reservedThicknessForAccessoryView: number;
  setReservedThicknessForAccessoryView(_: number)
  reservedThicknessForMarkers: number;
  setReservedThicknessForMarkers(_: number)
  ruleThickness: number;
  setRuleThickness(_: number)
  scrollView: NSScrollView;
  setScrollView(_: NSScrollView)
  addMarker(_: NSRulerMarker): void;
  drawHashMarksAndLabelsInRect(in_: NSRect): void;
  drawMarkersInRect(in_: NSRect): void;
  static createWithScrollViewOrientation(scrollView?: NSScrollView, orientation: NSRulerView.Orientation): this;
  invalidateHashMarks(): void;
  moveRulerlineFromLocationToLocation(fromLocation: number, toLocation: number): void;
  removeMarker(_: NSRulerMarker): void;
  trackMarkerWithMouseEvent(_: NSRulerMarker, withMouseEvent: NSEvent): boolean;
}

declare var NSRulerViewUnitCentimeters: string;

declare var NSRulerViewUnitInches: string;

declare var NSRulerViewUnitPicas: string;

declare var NSRulerViewUnitPoints: string;

declare class NSRunningApplication extends NSObject {
  static runningApplicationsWithBundleIdentifier(withBundleIdentifier: string): NSArray<NSRunningApplication>;
  static terminateAutomaticallyTerminableApplications(): void;
  readonly activationPolicy: NSApplication.ActivationPolicy;
  readonly isActive: boolean;
  readonly bundleIdentifier: string;
  readonly bundleURL: NSURL;
  readonly executableArchitecture: number;
  readonly executableURL: NSURL;
  readonly isFinishedLaunching: boolean;
  readonly isHidden: boolean;
  readonly icon: NSImage;
  readonly launchDate: Date;
  readonly localizedName: string;
  readonly ownsMenuBar: boolean;
  readonly processIdentifier: number;
  readonly isTerminated: boolean;
  static currentApplication(): NSRunningApplication;
  activateWithOptions(options: NSApplication.ActivationOptions): boolean;
  forceTerminate(): boolean;
  hide(): boolean;
  terminate(): boolean;
  unhide(): boolean;
}

declare class NSSavePanel extends NSPanel {
  readonly URL: NSURL;
  accessoryView: NSView;
  setAccessoryView(_: NSView)
  allowsOtherFileTypes: boolean;
  setAllowsOtherFileTypes(_: boolean)
  canCreateDirectories: boolean;
  setCanCreateDirectories(_: boolean)
  canSelectHiddenExtension: boolean;
  setCanSelectHiddenExtension(_: boolean)
  delegate: NSOpenSavePanelDelegate;
  setDelegate(_: NSOpenSavePanelDelegate)
  directoryURL: NSURL;
  setDirectoryURL(_: NSURL)
  readonly isExpanded: boolean;
  isExtensionHidden: boolean;
  setExtensionHidden(_: boolean)
  message: string;
  setMessage(_: string)
  nameFieldLabel: string;
  setNameFieldLabel(_: string)
  nameFieldStringValue: string;
  setNameFieldStringValue(_: string)
  prompt: string;
  setPrompt(_: string)
  showsHiddenFiles: boolean;
  setShowsHiddenFiles(_: boolean)
  showsTagField: boolean;
  setShowsTagField(_: boolean)
  tagNames: NSArray<string>;
  setTagNames(_: NSArray<string>)
  treatsFilePackagesAsDirectories: boolean;
  setTreatsFilePackagesAsDirectories(_: boolean)
  beginSheetModalForWindowCompletionHandler(for_: NSWindow, completionHandler: (p1: number) => void): void;
  beginWithCompletionHandler(completionHandler: (p1: number) => void): void;
  cancel(_?: any): void;
  ok(_?: any): void;
  runModal(): number;
  validateVisibleColumns(): void;
}

declare class NSScreen extends NSObject {
  readonly backingScaleFactor: number;
  readonly colorSpace: NSColorSpace;
  readonly depth: NSWindow.Depth;
  readonly deviceDescription: NSDictionary<string, any>;
  readonly frame: NSRect;
  readonly localizedName: string;
  readonly maximumExtendedDynamicRangeColorComponentValue: number;
  readonly maximumPotentialExtendedDynamicRangeColorComponentValue: number;
  readonly maximumReferenceExtendedDynamicRangeColorComponentValue: number;
  readonly supportedWindowDepths: NSWindow.Depth;
  readonly visibleFrame: NSRect;
  static deepestScreen(): NSScreen;
  static mainScreen(): NSScreen;
  static screens(): NSArray<NSScreen>;
  static screensHaveSeparateSpaces(): boolean;
  backingAlignedRectOptions(_: NSRect, options: AlignmentOptions): NSRect;
  canRepresentDisplayGamut(_: NSDisplayGamut): boolean;
  convertRectFromBacking(_: NSRect): NSRect;
  convertRectToBacking(_: NSRect): NSRect;
}

declare var NSScreenColorSpaceDidChangeNotification: string;

declare var NSScreenSaverWindowLevel: number;


declare const NSScrollLockFunctionKey: number;
declare class NSScrollView extends NSView implements NSTextFinderBarContainer {
  static contentSizeForFrameSizeHorizontalScrollerClassVerticalScrollerClassBorderTypeControlSizeScrollerStyle(forFrameSize: NSSize, horizontalScrollerClass?: typeof NSObject, verticalScrollerClass?: typeof NSObject, borderType: NSBorderType, controlSize: NSControl.ControlSize, scrollerStyle: NSScroller.Style): NSSize;
  static frameSizeForContentSizeHorizontalScrollerClassVerticalScrollerClassBorderTypeControlSizeScrollerStyle(forContentSize: NSSize, horizontalScrollerClass?: typeof NSObject, verticalScrollerClass?: typeof NSObject, borderType: NSBorderType, controlSize: NSControl.ControlSize, scrollerStyle: NSScroller.Style): NSSize;
  allowsMagnification: boolean;
  setAllowsMagnification(_: boolean)
  autohidesScrollers: boolean;
  setAutohidesScrollers(_: boolean)
  automaticallyAdjustsContentInsets: boolean;
  setAutomaticallyAdjustsContentInsets(_: boolean)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  borderType: NSBorderType;
  setBorderType(_: NSBorderType)
  contentInsets: NSEdgeInsets;
  setContentInsets(_: NSEdgeInsets)
  readonly contentSize: NSSize;
  contentView: NSClipView;
  setContentView(_: NSClipView)
  documentCursor: NSCursor;
  setDocumentCursor(_: NSCursor)
  documentView: NSView;
  setDocumentView(_: NSView)
  readonly documentVisibleRect: NSRect;
  drawsBackground: boolean;
  setDrawsBackground(_: boolean)
  findBarPosition: NSScrollView.FindBarPosition;
  setFindBarPosition(_: NSScrollView.FindBarPosition)
  hasHorizontalRuler: boolean;
  setHasHorizontalRuler(_: boolean)
  hasHorizontalScroller: boolean;
  setHasHorizontalScroller(_: boolean)
  hasVerticalRuler: boolean;
  setHasVerticalRuler(_: boolean)
  hasVerticalScroller: boolean;
  setHasVerticalScroller(_: boolean)
  horizontalLineScroll: number;
  setHorizontalLineScroll(_: number)
  horizontalPageScroll: number;
  setHorizontalPageScroll(_: number)
  horizontalRulerView: NSRulerView;
  setHorizontalRulerView(_: NSRulerView)
  horizontalScrollElasticity: NSScrollView.Elasticity;
  setHorizontalScrollElasticity(_: NSScrollView.Elasticity)
  horizontalScroller: NSScroller;
  setHorizontalScroller(_: NSScroller)
  lineScroll: number;
  setLineScroll(_: number)
  magnification: number;
  setMagnification(_: number)
  maxMagnification: number;
  setMaxMagnification(_: number)
  minMagnification: number;
  setMinMagnification(_: number)
  pageScroll: number;
  setPageScroll(_: number)
  rulersVisible: boolean;
  setRulersVisible(_: boolean)
  scrollerInsets: NSEdgeInsets;
  setScrollerInsets(_: NSEdgeInsets)
  scrollerKnobStyle: NSScroller.KnobStyle;
  setScrollerKnobStyle(_: NSScroller.KnobStyle)
  scrollerStyle: NSScroller.Style;
  setScrollerStyle(_: NSScroller.Style)
  scrollsDynamically: boolean;
  setScrollsDynamically(_: boolean)
  usesPredominantAxisScrolling: boolean;
  setUsesPredominantAxisScrolling(_: boolean)
  verticalLineScroll: number;
  setVerticalLineScroll(_: number)
  verticalPageScroll: number;
  setVerticalPageScroll(_: number)
  verticalRulerView: NSRulerView;
  setVerticalRulerView(_: NSRulerView)
  verticalScrollElasticity: NSScrollView.Elasticity;
  setVerticalScrollElasticity(_: NSScrollView.Elasticity)
  verticalScroller: NSScroller;
  setVerticalScroller(_: NSScroller)
  static rulerViewClass: typeof NSObject;
  setRulerViewClass(_: typeof NSObject)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  findBarView: NSView;
  setFindBarView(_: NSView) // inherited from NSTextFinderBarContainer
  isFindBarVisible: boolean;
  setFindBarVisible(_: boolean) // inherited from NSTextFinderBarContainer
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  addFloatingSubviewForAxis(_: NSView, for_: NSEvent.GestureAxis): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  findBarViewDidChangeHeight(): void;
  flashScrollers(): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  magnifyToFitRect(toFit: NSRect): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  setMagnificationCenteredAtPoint(_: number, centeredAt: NSPoint): void;
  tile(): void;
}

declare var NSScrollViewDidEndLiveMagnifyNotification: string;

declare var NSScrollViewDidEndLiveScrollNotification: string;

declare var NSScrollViewDidLiveScrollNotification: string;

declare var NSScrollViewWillStartLiveMagnifyNotification: string;

declare var NSScrollViewWillStartLiveScrollNotification: string;

declare class NSScroller extends NSControl {
  static scrollerWidthForControlSizeScrollerStyle(for_: NSControl.ControlSize, scrollerStyle: NSScroller.Style): number;
  readonly hitPart: NSScroller.Part;
  knobProportion: number;
  setKnobProportion(_: number)
  knobStyle: NSScroller.KnobStyle;
  setKnobStyle(_: NSScroller.KnobStyle)
  scrollerStyle: NSScroller.Style;
  setScrollerStyle(_: NSScroller.Style)
  readonly usableParts: NSScroller.UsableParts;
  static isCompatibleWithOverlayScrollers(): boolean;
  static preferredScrollerStyle(): NSScroller.Style;
  checkSpaceForParts(): void;
  drawKnob(): void;
  drawKnobSlotInRectHighlight(in_: NSRect, highlight: boolean): void;
  rectForPart(for_: NSScroller.Part): NSRect;
  setKnobProportion(_: number): void;
  testPart(_: NSPoint): NSScroller.Part;
  trackKnob(with_: NSEvent): void;
}

declare class NSScrubber extends NSView {
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  backgroundView: NSView;
  setBackgroundView(_: NSView)
  isContinuous: boolean;
  setContinuous(_: boolean)
  dataSource: NSScrubberDataSource;
  setDataSource(_: NSScrubberDataSource)
  delegate: NSScrubberDelegate;
  setDelegate(_: NSScrubberDelegate)
  floatsSelectionViews: boolean;
  setFloatsSelectionViews(_: boolean)
  readonly highlightedIndex: number;
  itemAlignment: NSScrubber.Alignment;
  setItemAlignment(_: NSScrubber.Alignment)
  mode: NSScrubber.Mode;
  setMode(_: NSScrubber.Mode)
  readonly numberOfItems: number;
  scrubberLayout: NSScrubberLayout;
  setScrubberLayout(_: NSScrubberLayout)
  selectedIndex: number;
  setSelectedIndex(_: number)
  selectionBackgroundStyle: NSScrubberSelectionStyle;
  setSelectionBackgroundStyle(_: NSScrubberSelectionStyle)
  selectionOverlayStyle: NSScrubberSelectionStyle;
  setSelectionOverlayStyle(_: NSScrubberSelectionStyle)
  showsAdditionalContentIndicators: boolean;
  setShowsAdditionalContentIndicators(_: boolean)
  showsArrowButtons: boolean;
  setShowsArrowButtons(_: boolean)
  insertItemsAtIndexes(at: IndexSet): void;
  itemViewForItemAtIndex(at: number): NSScrubberItemView;
  makeItemWithIdentifierOwner(withIdentifier: string, owner?: any): NSScrubberItemView;
  moveItemAtIndexToIndex(at: number, to: number): void;
  performSequentialBatchUpdates(_: () => void): void;
  registerClassForItemIdentifier(_?: typeof NSObject, forItemIdentifier: string): void;
  registerNibForItemIdentifier(_?: NSNib, forItemIdentifier: string): void;
  reloadData(): void;
  reloadItemsAtIndexes(at: IndexSet): void;
  removeItemsAtIndexes(at: IndexSet): void;
  scrollItemAtIndexToAlignment(at: number, to: NSScrubber.Alignment): void;
}

declare class NSScrubberArrangedView extends NSView {
  isHighlighted: boolean;
  setHighlighted(_: boolean)
  isSelected: boolean;
  setSelected(_: boolean)
  applyLayoutAttributes(_: NSScrubberLayoutAttributes): void;
}

interface NSScrubberDataSource extends NSObject {
  numberOfItemsForScrubber(for_: NSScrubber): number;
  scrubberViewForItemAtIndex(_: NSScrubber, viewForItemAt: number): NSScrubberItemView;
}

declare var NSScrubberDataSource: {
  prototype: NSScrubberDataSource;
};

interface NSScrubberDelegate extends NSObject {
  didBeginInteractingWithScrubber?(with_: NSScrubber): void;
  didCancelInteractingWithScrubber?(with_: NSScrubber): void;
  didFinishInteractingWithScrubber?(with_: NSScrubber): void;
  scrubberDidSelectItemAtIndex?(_: NSScrubber, didSelectItemAt: number): void;
  scrubberDidHighlightItemAtIndex?(_: NSScrubber, didHighlightItemAt: number): void;
  scrubberDidChangeVisibleRange?(_: NSScrubber, didChangeVisibleRange: NSRange): void;
}

declare var NSScrubberDelegate: {
  prototype: NSScrubberDelegate;
};

declare class NSScrubberFlowLayout extends NSScrubberLayout {
  itemSize: NSSize;
  setItemSize(_: NSSize)
  itemSpacing: number;
  setItemSpacing(_: number)
  invalidateLayoutForItemsAtIndexes(at: IndexSet): void;
}

interface NSScrubberFlowLayoutDelegate extends NSScrubberDelegate {
  scrubberLayoutSizeForItemAtIndex?(_: NSScrubber, layout: NSScrubberFlowLayout, sizeForItemAt: number): NSSize;
}

declare var NSScrubberFlowLayoutDelegate: {
  prototype: NSScrubberFlowLayoutDelegate;
};

declare class NSScrubberImageItemView extends NSScrubberItemView {
  image: NSImage;
  setImage(_: NSImage)
  imageAlignment: NSImageAlignment;
  setImageAlignment(_: NSImageAlignment)
  readonly imageView: NSImageView;
}

declare class NSScrubberItemView extends NSScrubberArrangedView {
}

declare class NSScrubberLayout extends NSObject implements NSCoding {
  readonly automaticallyMirrorsInRightToLeftLayout: boolean;
  readonly scrubber: NSScrubber;
  readonly scrubberContentSize: NSSize;
  readonly shouldInvalidateLayoutForHighlightChange: boolean;
  readonly shouldInvalidateLayoutForSelectionChange: boolean;
  readonly visibleRect: NSRect;
  static layoutAttributesClass(): typeof NSObject;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  invalidateLayout(): void;
  layoutAttributesForItemAtIndex(at: number): NSScrubberLayoutAttributes;
  layoutAttributesForItemsInRect(in_: NSRect): Set<NSScrubberLayoutAttributes>;
  prepareLayout(): void;
  shouldInvalidateLayoutForChangeFromVisibleRectToVisibleRect(fromVisibleRect: NSRect, toVisibleRect: NSRect): boolean;
}

declare class NSScrubberLayoutAttributes extends NSObject implements NSCopying {
  static layoutAttributesForItemAtIndex(forItemAt: number): NSScrubberLayoutAttributes;
  alpha: number;
  setAlpha(_: number)
  frame: NSRect;
  setFrame(_: NSRect)
  itemIndex: number;
  setItemIndex(_: number)
}

declare class NSScrubberProportionalLayout extends NSScrubberLayout {
  numberOfVisibleItems: number;
  setNumberOfVisibleItems(_: number)
  static createWithNumberOfVisibleItems(numberOfVisibleItems: number): this;
}

declare class NSScrubberSelectionStyle extends NSObject implements NSCoding {
  static outlineOverlayStyle(): NSScrubberSelectionStyle;
  static roundedBackgroundStyle(): NSScrubberSelectionStyle;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  makeSelectionView(): NSScrubberSelectionView;
}

declare class NSScrubberSelectionView extends NSScrubberArrangedView {
}

declare class NSScrubberTextItemView extends NSScrubberItemView {
  readonly textField: NSTextField;
  title: string;
  setTitle(_: string)
}

declare class NSSearchField extends NSTextField {
  static labelWithAttributedString(labelWithAttributedString: NSAttributedString): NSSearchField; // inherited from NSTextField
  static labelWithString(labelWithString: string): NSSearchField; // inherited from NSTextField
  static wrappingLabelWithString(wrappingLabelWithString: string): NSSearchField; // inherited from NSTextField
  delegate: NSSearchFieldDelegate;
  setDelegate(_: NSSearchFieldDelegate)
  maximumRecents: number;
  setMaximumRecents(_: number)
  recentSearches: NSArray<string>;
  setRecentSearches(_: NSArray<string>)
  recentsAutosaveName: string;
  setRecentsAutosaveName(_: string)
  searchMenuTemplate: NSMenu;
  setSearchMenuTemplate(_: NSMenu)
  sendsSearchStringImmediately: boolean;
  setSendsSearchStringImmediately(_: boolean)
  sendsWholeSearchString: boolean;
  setSendsWholeSearchString(_: boolean)
}

declare class NSSearchFieldCell extends NSTextFieldCell {
  cancelButtonCell: NSButtonCell;
  setCancelButtonCell(_: NSButtonCell)
  maximumRecents: number;
  setMaximumRecents(_: number)
  recentSearches: NSArray<string>;
  setRecentSearches(_: NSArray<string>)
  recentsAutosaveName: string;
  setRecentsAutosaveName(_: string)
  searchButtonCell: NSButtonCell;
  setSearchButtonCell(_: NSButtonCell)
  searchMenuTemplate: NSMenu;
  setSearchMenuTemplate(_: NSMenu)
  sendsSearchStringImmediately: boolean;
  setSendsSearchStringImmediately(_: boolean)
  sendsWholeSearchString: boolean;
  setSendsWholeSearchString(_: boolean)
  cancelButtonRectForBounds(forBounds: NSRect): NSRect;
  resetCancelButtonCell(): void;
  resetSearchButtonCell(): void;
  searchButtonRectForBounds(forBounds: NSRect): NSRect;
  searchTextRectForBounds(forBounds: NSRect): NSRect;
}

declare var NSSearchFieldClearRecentsMenuItemTag: number;

interface NSSearchFieldDelegate extends NSTextFieldDelegate {
  searchFieldDidEndSearching?(_: NSSearchField): void;
  searchFieldDidStartSearching?(_: NSSearchField): void;
}

declare var NSSearchFieldDelegate: {
  prototype: NSSearchFieldDelegate;
};

declare var NSSearchFieldNoRecentsMenuItemTag: number;

declare var NSSearchFieldRecentsMenuItemTag: number;

declare var NSSearchFieldRecentsTitleMenuItemTag: number;

declare class NSSecureTextField extends NSTextField {
  static labelWithAttributedString(labelWithAttributedString: NSAttributedString): NSSecureTextField; // inherited from NSTextField
  static labelWithString(labelWithString: string): NSSecureTextField; // inherited from NSTextField
  static wrappingLabelWithString(wrappingLabelWithString: string): NSSecureTextField; // inherited from NSTextField
}

declare class NSSecureTextFieldCell extends NSTextFieldCell {
  echosBullets: boolean;
  setEchosBullets(_: boolean)
}

declare class NSSegmentedCell extends NSActionCell {
  segmentCount: number;
  setSegmentCount(_: number)
  segmentStyle: NSSegmentedControl.Style;
  setSegmentStyle(_: NSSegmentedControl.Style)
  selectedSegment: number;
  setSelectedSegment(_: number)
  trackingMode: NSSegmentedControl.SwitchTracking;
  setTrackingMode(_: NSSegmentedControl.SwitchTracking)
  drawSegmentInFrameWithView(_: number, inFrame: NSRect, with_: NSView): void;
  imageForSegment(forSegment: number): NSImage;
  imageScalingForSegment(forSegment: number): NSImageScaling;
  interiorBackgroundStyleForSegment(forSegment: number): NSView.BackgroundStyle;
  isEnabledForSegment(forSegment: number): boolean;
  isSelectedForSegment(forSegment: number): boolean;
  labelForSegment(forSegment: number): string;
  makeNextSegmentKey(): void;
  makePreviousSegmentKey(): void;
  menuForSegment(forSegment: number): NSMenu;
  selectSegmentWithTag(withTag: number): boolean;
  setEnabledForSegment(_: boolean, forSegment: number): void;
  setImageForSegment(_?: NSImage, forSegment: number): void;
  setImageScalingForSegment(_: NSImageScaling, forSegment: number): void;
  setLabelForSegment(_: string, forSegment: number): void;
  setMenuForSegment(_?: NSMenu, forSegment: number): void;
  setSelectedForSegment(_: boolean, forSegment: number): void;
  setTagForSegment(_: number, forSegment: number): void;
  setToolTipForSegment(_?: string, forSegment: number): void;
  setWidthForSegment(_: number, forSegment: number): void;
  tagForSegment(forSegment: number): number;
  toolTipForSegment(forSegment: number): string;
  widthForSegment(forSegment: number): number;
}

declare class NSSegmentedControl extends NSControl implements NSUserInterfaceCompression {
  readonly doubleValueForSelectedSegment: number;
  readonly indexOfSelectedItem: number;
  segmentCount: number;
  setSegmentCount(_: number)
  segmentDistribution: NSSegmentedControl.Distribution;
  setSegmentDistribution(_: NSSegmentedControl.Distribution)
  segmentStyle: NSSegmentedControl.Style;
  setSegmentStyle(_: NSSegmentedControl.Style)
  selectedSegment: number;
  setSelectedSegment(_: number)
  selectedSegmentBezelColor: NSColor;
  setSelectedSegmentBezelColor(_: NSColor)
  isSpringLoaded: boolean;
  setSpringLoaded(_: boolean)
  trackingMode: NSSegmentedControl.SwitchTracking;
  setTrackingMode(_: NSSegmentedControl.SwitchTracking)
  readonly activeCompressionOptions: NSUserInterfaceCompressionOptions; // inherited from NSUserInterfaceCompression
  alignmentForSegment(forSegment: number): NSTextAlignment;
  compressWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): void;
  imageForSegment(forSegment: number): NSImage;
  imageScalingForSegment(forSegment: number): NSImageScaling;
  isEnabledForSegment(forSegment: number): boolean;
  isSelectedForSegment(forSegment: number): boolean;
  labelForSegment(forSegment: number): string;
  menuForSegment(forSegment: number): NSMenu;
  minimumSizeWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): NSSize;
  selectSegmentWithTag(withTag: number): boolean;
  setAlignmentForSegment(_: NSTextAlignment, forSegment: number): void;
  setEnabledForSegment(_: boolean, forSegment: number): void;
  setImageForSegment(_?: NSImage, forSegment: number): void;
  setImageScalingForSegment(_: NSImageScaling, forSegment: number): void;
  setLabelForSegment(_: string, forSegment: number): void;
  setMenuForSegment(_?: NSMenu, forSegment: number): void;
  setSelectedForSegment(_: boolean, forSegment: number): void;
  setShowsMenuIndicatorForSegment(_: boolean, forSegment: number): void;
  setTagForSegment(_: number, forSegment: number): void;
  setToolTipForSegment(_?: string, forSegment: number): void;
  setWidthForSegment(_: number, forSegment: number): void;
  showsMenuIndicatorForSegment(forSegment: number): boolean;
  tagForSegment(forSegment: number): number;
  toolTipForSegment(forSegment: number): string;
  widthForSegment(forSegment: number): number;
}

interface NSSeguePerforming extends NSObject {
  performSegueWithIdentifierSender?(withIdentifier: string, sender?: any): void;
  prepareForSegueSender?(for_: NSStoryboardSegue, sender?: any): void;
  shouldPerformSegueWithIdentifierSender?(withIdentifier: string, sender?: any): boolean;
}

declare var NSSeguePerforming: {
  prototype: NSSeguePerforming;
};


declare const NSSelectFunctionKey: number;
declare var NSSelectedIdentifierBinding: string;

declare var NSSelectedIndexBinding: string;

declare var NSSelectedLabelBinding: string;

declare var NSSelectedObjectBinding: string;

declare var NSSelectedObjectsBinding: string;

declare var NSSelectedTagBinding: string;

declare var NSSelectedValueBinding: string;

declare var NSSelectedValuesBinding: string;

declare var NSSelectionIndexPathsBinding: string;

declare var NSSelectionIndexesBinding: string;

declare var NSSelectorNameBindingOption: string;

declare var NSSelectsAllWhenSettingContentBindingOption: string;


declare const NSServiceApplicationLaunchFailedError: number;

declare const NSServiceApplicationNotFoundError: number;

declare const NSServiceErrorMaximum: number;

declare const NSServiceErrorMinimum: number;

declare const NSServiceInvalidPasteboardDataError: number;

declare const NSServiceMalformedServiceDictionaryError: number;

declare const NSServiceMiscellaneousError: number;

declare const NSServiceRequestTimedOutError: number;
interface NSServicesMenuRequestor extends NSObject {
  readSelectionFromPasteboard?(from: NSPasteboard): boolean;
  writeSelectionToPasteboardTypes?(to: NSPasteboard, types: NSArray<string>): boolean;
}

declare var NSServicesMenuRequestor: {
  prototype: NSServicesMenuRequestor;
};

declare function NSSetFocusRingStyle(placement: NSFocusRingPlacement): void;
declare function NSSetShowsServicesMenuItem(itemName: string, enabled: boolean): number;
declare class NSShadow extends NSObject implements NSCopying, NSSecureCoding {
  shadowBlurRadius: number;
  setShadowBlurRadius(_: number)
  shadowColor: NSColor;
  setShadowColor(_: NSColor)
  shadowOffset: NSSize;
  setShadowOffset(_: NSSize)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  set(): void;
}

declare var NSShadowAttributeName: string;

declare class NSSharingService extends NSObject {
  static sharingServicesForItems(forItems: NSArray<any>): NSArray<NSSharingService>;
  readonly accountName: string;
  readonly alternateImage: NSImage;
  readonly attachmentFileURLs: NSArray<NSURL>;
  delegate: NSSharingServiceDelegate;
  setDelegate(_: NSSharingServiceDelegate)
  readonly image: NSImage;
  menuItemTitle: string;
  setMenuItemTitle(_: string)
  readonly messageBody: string;
  readonly permanentLink: NSURL;
  recipients: NSArray<string>;
  setRecipients(_: NSArray<string>)
  subject: string;
  setSubject(_: string)
  readonly title: string;
  canPerformWithItems(withItems?: NSArray<any>): boolean;
  static createWithTitleImageAlternateImageHandler(title: string, image: NSImage, alternateImage?: NSImage, handler: () => void): this;
  performWithItems(withItems: NSArray<any>): void;
}

interface NSSharingServiceDelegate extends NSObject {
  anchoringViewForSharingServiceShowRelativeToRectPreferredEdge?(for_: NSSharingService, showRelativeTo: NSRect, preferredEdge: NSRectEdge): NSView;
  sharingServiceDidFailToShareItemsError?(_: NSSharingService, didFailToShareItems: NSArray<any>, error: Error): void;
  sharingServiceDidShareItems?(_: NSSharingService, didShareItems: NSArray<any>): void;
  sharingServiceSourceFrameOnScreenForShareItem?(_: NSSharingService, sourceFrameOnScreenForShareItem: any): NSRect;
  sharingServiceSourceWindowForShareItemsSharingContentScope?(_: NSSharingService, sourceWindowForShareItems: NSArray<any>, sharingContentScope: NSSharingService.SharingContentScope): NSWindow;
  sharingServiceTransitionImageForShareItemContentRect?(_: NSSharingService, transitionImageForShareItem: any, contentRect: NSRect): NSImage;
  sharingServiceWillShareItems?(_: NSSharingService, willShareItems: NSArray<any>): void;
}

declare var NSSharingServiceDelegate: {
  prototype: NSSharingServiceDelegate;
};


declare const NSSharingServiceErrorMaximum: number;

declare const NSSharingServiceErrorMinimum: number;
declare var NSSharingServiceNameAddToAperture: string;

declare var NSSharingServiceNameAddToIPhoto: string;

declare var NSSharingServiceNameAddToSafariReadingList: string;

declare var NSSharingServiceNameCloudSharing: string;

declare var NSSharingServiceNameComposeEmail: string;

declare var NSSharingServiceNameComposeMessage: string;

declare var NSSharingServiceNameSendViaAirDrop: string;

declare var NSSharingServiceNameUseAsDesktopPicture: string;


declare const NSSharingServiceNotConfiguredError: number;
declare class NSSharingServicePicker extends NSObject {
  delegate: NSSharingServicePickerDelegate;
  setDelegate(_: NSSharingServicePickerDelegate)
  static createWithItems(items: NSArray<any>): this;
  showRelativeToRectOfViewPreferredEdge(relativeTo: NSRect, of: NSView, preferredEdge: NSRectEdge): void;
}

interface NSSharingServicePickerDelegate extends NSObject {
  sharingServicePickerDelegateForSharingService?(_: NSSharingServicePicker, delegateFor: NSSharingService): NSSharingServiceDelegate;
  sharingServicePickerDidChooseSharingService?(_: NSSharingServicePicker, didChoose?: NSSharingService): void;
  sharingServicePickerSharingServicesForItemsProposedSharingServices?(_: NSSharingServicePicker, sharingServicesForItems: NSArray<any>, proposedSharingServices: NSArray<NSSharingService>): NSArray<NSSharingService>;
}

declare var NSSharingServicePickerDelegate: {
  prototype: NSSharingServicePickerDelegate;
};

declare class NSSharingServicePickerToolbarItem extends NSToolbarItem {
  delegate: NSSharingServicePickerToolbarItemDelegate;
  setDelegate(_: NSSharingServicePickerToolbarItemDelegate)
}

interface NSSharingServicePickerToolbarItemDelegate extends NSSharingServicePickerDelegate {
  itemsForSharingServicePickerToolbarItem(for_: NSSharingServicePickerToolbarItem): NSArray<any>;
}

declare var NSSharingServicePickerToolbarItemDelegate: {
  prototype: NSSharingServicePickerToolbarItemDelegate;
};

declare class NSSharingServicePickerTouchBarItem extends NSTouchBarItem {
  buttonImage: NSImage;
  setButtonImage(_: NSImage)
  buttonTitle: string;
  setButtonTitle(_: string)
  delegate: NSSharingServicePickerTouchBarItemDelegate;
  setDelegate(_: NSSharingServicePickerTouchBarItemDelegate)
  isEnabled: boolean;
  setEnabled(_: boolean)
}

interface NSSharingServicePickerTouchBarItemDelegate extends NSSharingServicePickerDelegate {
  itemsForSharingServicePickerTouchBarItem(for_: NSSharingServicePickerTouchBarItem): NSArray<any>;
}

declare var NSSharingServicePickerTouchBarItemDelegate: {
  prototype: NSSharingServicePickerTouchBarItemDelegate;
};

declare function NSShowAnimationEffect(animationEffect: NSAnimationEffect, centerLocation: NSPoint, size: NSSize, animationDelegate: any, didEndSelector: string, contextInfo: any): void;

declare const NSShowControlGlyphs: number;

declare const NSShowInvisibleGlyphs: number;
declare function NSShowsServicesMenuItem(itemName: string): boolean;
declare var NSSingleDateMode: NSDatePicker.Mode;

declare class NSSlider extends NSControl implements NSAccessibilitySlider {
  allowsTickMarkValuesOnly: boolean;
  setAllowsTickMarkValuesOnly(_: boolean)
  altIncrementValue: number;
  setAltIncrementValue(_: number)
  readonly knobThickness: number;
  maxValue: number;
  setMaxValue(_: number)
  minValue: number;
  setMinValue(_: number)
  numberOfTickMarks: number;
  setNumberOfTickMarks(_: number)
  sliderType: NSSlider.SliderType;
  setSliderType(_: NSSlider.SliderType)
  tickMarkPosition: NSSlider.TickMarkPosition;
  setTickMarkPosition(_: NSSlider.TickMarkPosition)
  trackFillColor: NSColor;
  setTrackFillColor(_: NSColor)
  readonly isVertical: boolean;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityFrame(): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLabel(): string;
  accessibilityParent(): any;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityValue(): any;
  closestTickMarkValueToValue(toValue: number): number;
  conformsToProtocol(to: any /* Protocol */): boolean;
  indexOfTickMarkAtPoint(at: NSPoint): number;
  isAccessibilityFocused(): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  rectOfTickMarkAtIndex(at: number): NSRect;
  respondsToSelector(_: string): boolean;
  self(): this;
  tickMarkValueAtIndex(at: number): number;
}

declare class NSSliderAccessory extends NSObject implements NSCoding, NSAccessibility, NSAccessibilityElementProtocol {
  behavior: NSSliderAccessoryBehavior;
  setBehavior(_: NSSliderAccessoryBehavior)
  isEnabled: boolean;
  setEnabled(_: boolean)
  accessibilityActivationPoint: NSPoint;
  setAccessibilityActivationPoint(_: NSPoint) // inherited from NSAccessibility
  accessibilityAllowedValues: NSArray<number>;
  setAccessibilityAllowedValues(_: NSArray<number>) // inherited from NSAccessibility
  isAccessibilityAlternateUIVisible: boolean;
  setAccessibilityAlternateUIVisible(_: boolean) // inherited from NSAccessibility
  accessibilityApplicationFocusedUIElement: any;
  setAccessibilityApplicationFocusedUIElement(_: any) // inherited from NSAccessibility
  accessibilityCancelButton: any;
  setAccessibilityCancelButton(_: any) // inherited from NSAccessibility
  accessibilityChildren: NSArray<any>;
  setAccessibilityChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;
  setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>) // inherited from NSAccessibility
  accessibilityClearButton: any;
  setAccessibilityClearButton(_: any) // inherited from NSAccessibility
  accessibilityCloseButton: any;
  setAccessibilityCloseButton(_: any) // inherited from NSAccessibility
  accessibilityColumnCount: number;
  setAccessibilityColumnCount(_: number) // inherited from NSAccessibility
  accessibilityColumnHeaderUIElements: NSArray<any>;
  setAccessibilityColumnHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumnIndexRange: NSRange;
  setAccessibilityColumnIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityColumnTitles: NSArray<any>;
  setAccessibilityColumnTitles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumns: NSArray<any>;
  setAccessibilityColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityContents: NSArray<any>;
  setAccessibilityContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityCriticalValue: any;
  setAccessibilityCriticalValue(_: any) // inherited from NSAccessibility
  accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;
  setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>) // inherited from NSAccessibility
  accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;
  setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>) // inherited from NSAccessibility
  accessibilityDecrementButton: any;
  setAccessibilityDecrementButton(_: any) // inherited from NSAccessibility
  accessibilityDefaultButton: any;
  setAccessibilityDefaultButton(_: any) // inherited from NSAccessibility
  isAccessibilityDisclosed: boolean;
  setAccessibilityDisclosed(_: boolean) // inherited from NSAccessibility
  accessibilityDisclosedByRow: any;
  setAccessibilityDisclosedByRow(_: any) // inherited from NSAccessibility
  accessibilityDisclosedRows: any;
  setAccessibilityDisclosedRows(_: any) // inherited from NSAccessibility
  accessibilityDisclosureLevel: number;
  setAccessibilityDisclosureLevel(_: number) // inherited from NSAccessibility
  accessibilityDocument: string;
  setAccessibilityDocument(_: string) // inherited from NSAccessibility
  isAccessibilityEdited: boolean;
  setAccessibilityEdited(_: boolean) // inherited from NSAccessibility
  isAccessibilityElement: boolean;
  setAccessibilityElement(_: boolean) // inherited from NSAccessibility
  isAccessibilityEnabled: boolean;
  setAccessibilityEnabled(_: boolean) // inherited from NSAccessibility
  isAccessibilityExpanded: boolean;
  setAccessibilityExpanded(_: boolean) // inherited from NSAccessibility
  accessibilityExtrasMenuBar: any;
  setAccessibilityExtrasMenuBar(_: any) // inherited from NSAccessibility
  accessibilityFilename: string;
  setAccessibilityFilename(_: string) // inherited from NSAccessibility
  isAccessibilityFocused: boolean;
  setAccessibilityFocused(_: boolean) // inherited from NSAccessibility
  accessibilityFocusedWindow: any;
  setAccessibilityFocusedWindow(_: any) // inherited from NSAccessibility
  accessibilityFrame: NSRect;
  setAccessibilityFrame(_: NSRect) // inherited from NSAccessibility
  isAccessibilityFrontmost: boolean;
  setAccessibilityFrontmost(_: boolean) // inherited from NSAccessibility
  accessibilityFullScreenButton: any;
  setAccessibilityFullScreenButton(_: any) // inherited from NSAccessibility
  accessibilityGrowArea: any;
  setAccessibilityGrowArea(_: any) // inherited from NSAccessibility
  accessibilityHandles: NSArray<any>;
  setAccessibilityHandles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityHeader: any;
  setAccessibilityHeader(_: any) // inherited from NSAccessibility
  accessibilityHelp: string;
  setAccessibilityHelp(_: string) // inherited from NSAccessibility
  isAccessibilityHidden: boolean;
  setAccessibilityHidden(_: boolean) // inherited from NSAccessibility
  accessibilityHorizontalScrollBar: any;
  setAccessibilityHorizontalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityHorizontalUnitDescription: string;
  setAccessibilityHorizontalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityHorizontalUnits: NSAccessibility.Units;
  setAccessibilityHorizontalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityIdentifier: string;
  setAccessibilityIdentifier(_: string) // inherited from NSAccessibility
  accessibilityIncrementButton: any;
  setAccessibilityIncrementButton(_: any) // inherited from NSAccessibility
  accessibilityIndex: number;
  setAccessibilityIndex(_: number) // inherited from NSAccessibility
  accessibilityInsertionPointLineNumber: number;
  setAccessibilityInsertionPointLineNumber(_: number) // inherited from NSAccessibility
  accessibilityLabel: string;
  setAccessibilityLabel(_: string) // inherited from NSAccessibility
  accessibilityLabelUIElements: NSArray<any>;
  setAccessibilityLabelUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityLabelValue: number;
  setAccessibilityLabelValue(_: number) // inherited from NSAccessibility
  accessibilityLinkedUIElements: NSArray<any>;
  setAccessibilityLinkedUIElements(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityMain: boolean;
  setAccessibilityMain(_: boolean) // inherited from NSAccessibility
  accessibilityMainWindow: any;
  setAccessibilityMainWindow(_: any) // inherited from NSAccessibility
  accessibilityMarkerGroupUIElement: any;
  setAccessibilityMarkerGroupUIElement(_: any) // inherited from NSAccessibility
  accessibilityMarkerTypeDescription: string;
  setAccessibilityMarkerTypeDescription(_: string) // inherited from NSAccessibility
  accessibilityMarkerUIElements: NSArray<any>;
  setAccessibilityMarkerUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityMarkerValues: any;
  setAccessibilityMarkerValues(_: any) // inherited from NSAccessibility
  accessibilityMaxValue: any;
  setAccessibilityMaxValue(_: any) // inherited from NSAccessibility
  accessibilityMenuBar: any;
  setAccessibilityMenuBar(_: any) // inherited from NSAccessibility
  accessibilityMinValue: any;
  setAccessibilityMinValue(_: any) // inherited from NSAccessibility
  accessibilityMinimizeButton: any;
  setAccessibilityMinimizeButton(_: any) // inherited from NSAccessibility
  isAccessibilityMinimized: boolean;
  setAccessibilityMinimized(_: boolean) // inherited from NSAccessibility
  isAccessibilityModal: boolean;
  setAccessibilityModal(_: boolean) // inherited from NSAccessibility
  accessibilityNextContents: NSArray<any>;
  setAccessibilityNextContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityNumberOfCharacters: number;
  setAccessibilityNumberOfCharacters(_: number) // inherited from NSAccessibility
  isAccessibilityOrderedByRow: boolean;
  setAccessibilityOrderedByRow(_: boolean) // inherited from NSAccessibility
  accessibilityOrientation: NSAccessibility.Orientation;
  setAccessibilityOrientation(_: NSAccessibility.Orientation) // inherited from NSAccessibility
  accessibilityOverflowButton: any;
  setAccessibilityOverflowButton(_: any) // inherited from NSAccessibility
  accessibilityParent: any;
  setAccessibilityParent(_: any) // inherited from NSAccessibility
  accessibilityPlaceholderValue: string;
  setAccessibilityPlaceholderValue(_: string) // inherited from NSAccessibility
  accessibilityPreviousContents: NSArray<any>;
  setAccessibilityPreviousContents(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityProtectedContent: boolean;
  setAccessibilityProtectedContent(_: boolean) // inherited from NSAccessibility
  accessibilityProxy: any;
  setAccessibilityProxy(_: any) // inherited from NSAccessibility
  isAccessibilityRequired: boolean;
  setAccessibilityRequired(_: boolean) // inherited from NSAccessibility
  accessibilityRole: string;
  setAccessibilityRole(_: string) // inherited from NSAccessibility
  accessibilityRoleDescription: string;
  setAccessibilityRoleDescription(_: string) // inherited from NSAccessibility
  accessibilityRowCount: number;
  setAccessibilityRowCount(_: number) // inherited from NSAccessibility
  accessibilityRowHeaderUIElements: NSArray<any>;
  setAccessibilityRowHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRowIndexRange: NSRange;
  setAccessibilityRowIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityRows: NSArray<any>;
  setAccessibilityRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRulerMarkerType: NSAccessibility.RulerMarkerType;
  setAccessibilityRulerMarkerType(_: NSAccessibility.RulerMarkerType) // inherited from NSAccessibility
  accessibilitySearchButton: any;
  setAccessibilitySearchButton(_: any) // inherited from NSAccessibility
  accessibilitySearchMenu: any;
  setAccessibilitySearchMenu(_: any) // inherited from NSAccessibility
  isAccessibilitySelected: boolean;
  setAccessibilitySelected(_: boolean) // inherited from NSAccessibility
  accessibilitySelectedCells: NSArray<any>;
  setAccessibilitySelectedCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedChildren: NSArray<any>;
  setAccessibilitySelectedChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedColumns: NSArray<any>;
  setAccessibilitySelectedColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedRows: NSArray<any>;
  setAccessibilitySelectedRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedText: string;
  setAccessibilitySelectedText(_: string) // inherited from NSAccessibility
  accessibilitySelectedTextRange: NSRange;
  setAccessibilitySelectedTextRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySelectedTextRanges: NSArray<NSValue>;
  setAccessibilitySelectedTextRanges(_: NSArray<NSValue>) // inherited from NSAccessibility
  accessibilityServesAsTitleForUIElements: NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedCharacterRange: NSRange;
  setAccessibilitySharedCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySharedFocusElements: NSArray<any>;
  setAccessibilitySharedFocusElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedTextUIElements: NSArray<any>;
  setAccessibilitySharedTextUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityShownMenu: any;
  setAccessibilityShownMenu(_: any) // inherited from NSAccessibility
  accessibilitySortDirection: NSAccessibility.SortDirection;
  setAccessibilitySortDirection(_: NSAccessibility.SortDirection) // inherited from NSAccessibility
  accessibilitySplitters: NSArray<any>;
  setAccessibilitySplitters(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySubrole: string;
  setAccessibilitySubrole(_: string) // inherited from NSAccessibility
  accessibilityTabs: NSArray<any>;
  setAccessibilityTabs(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityTitle: string;
  setAccessibilityTitle(_: string) // inherited from NSAccessibility
  accessibilityTitleUIElement: any;
  setAccessibilityTitleUIElement(_: any) // inherited from NSAccessibility
  accessibilityToolbarButton: any;
  setAccessibilityToolbarButton(_: any) // inherited from NSAccessibility
  accessibilityTopLevelUIElement: any;
  setAccessibilityTopLevelUIElement(_: any) // inherited from NSAccessibility
  accessibilityURL: NSURL;
  setAccessibilityURL(_: NSURL) // inherited from NSAccessibility
  accessibilityUnitDescription: string;
  setAccessibilityUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityUnits: NSAccessibility.Units;
  setAccessibilityUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityValue: any;
  setAccessibilityValue(_: any) // inherited from NSAccessibility
  accessibilityValueDescription: string;
  setAccessibilityValueDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalScrollBar: any;
  setAccessibilityVerticalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityVerticalUnitDescription: string;
  setAccessibilityVerticalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalUnits: NSAccessibility.Units;
  setAccessibilityVerticalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityVisibleCells: NSArray<any>;
  setAccessibilityVisibleCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleCharacterRange: NSRange;
  setAccessibilityVisibleCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilityVisibleChildren: NSArray<any>;
  setAccessibilityVisibleChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleColumns: NSArray<any>;
  setAccessibilityVisibleColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleRows: NSArray<any>;
  setAccessibilityVisibleRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityWarningValue: any;
  setAccessibilityWarningValue(_: any) // inherited from NSAccessibility
  accessibilityWindow: any;
  setAccessibilityWindow(_: any) // inherited from NSAccessibility
  accessibilityWindows: NSArray<any>;
  setAccessibilityWindows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityZoomButton: any;
  setAccessibilityZoomButton(_: any) // inherited from NSAccessibility
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;
  accessibilityCellForColumnRow(_: number, row: number): any;
  accessibilityFrame(): NSRect;
  accessibilityFrameForRange(_: NSRange): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLayoutPointForScreenPoint(_: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(_: NSSize): NSSize;
  accessibilityLineForIndex(_: number): number;
  accessibilityParent(): any;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  accessibilityRTFForRange(_: NSRange): Data;
  accessibilityRangeForIndex(_: number): NSRange;
  accessibilityRangeForLine(_: number): NSRange;
  accessibilityRangeForPosition(_: NSPoint): NSRange;
  accessibilityScreenPointForLayoutPoint(_: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(_: NSSize): NSSize;
  accessibilityStringForRange(_: NSRange): string;
  accessibilityStyleRangeForIndex(_: number): NSRange;
  conformsToProtocol(to: any /* Protocol */): boolean;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  isAccessibilityFocused(): boolean;
  isAccessibilitySelectorAllowed(_: string): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class NSSliderAccessoryBehavior extends NSObject implements NSCoding, NSCopying {
  static behaviorWithHandler(handler: (p1: NSSliderAccessory) => void): NSSliderAccessoryBehavior;
  static behaviorWithTargetAction(target?: any, action: string): NSSliderAccessoryBehavior;
  static automaticBehavior(): NSSliderAccessoryBehavior;
  static valueResetBehavior(): NSSliderAccessoryBehavior;
  static valueStepBehavior(): NSSliderAccessoryBehavior;
  encodeWithCoder(with_: NSCoder): void;
  handleAction(_: NSSliderAccessory): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var NSSliderAccessoryWidthDefault: number;

declare var NSSliderAccessoryWidthWide: number;

declare class NSSliderCell extends NSActionCell {
  allowsTickMarkValuesOnly: boolean;
  setAllowsTickMarkValuesOnly(_: boolean)
  altIncrementValue: number;
  setAltIncrementValue(_: number)
  readonly knobThickness: number;
  maxValue: number;
  setMaxValue(_: number)
  minValue: number;
  setMinValue(_: number)
  numberOfTickMarks: number;
  setNumberOfTickMarks(_: number)
  sliderType: NSSlider.SliderType;
  setSliderType(_: NSSlider.SliderType)
  tickMarkPosition: NSSlider.TickMarkPosition;
  setTickMarkPosition(_: NSSlider.TickMarkPosition)
  readonly trackRect: NSRect;
  readonly isVertical: boolean;
  barRectFlipped(flipped: boolean): NSRect;
  closestTickMarkValueToValue(toValue: number): number;
  drawBarInsideFlipped(inside: NSRect, flipped: boolean): void;
  drawKnob(): void;
  drawKnob(_: NSRect): void;
  drawTickMarks(): void;
  indexOfTickMarkAtPoint(at: NSPoint): number;
  knobRectFlipped(flipped: boolean): NSRect;
  rectOfTickMarkAtIndex(at: number): NSRect;
  tickMarkValueAtIndex(at: number): number;
}

declare class NSSliderTouchBarItem extends NSTouchBarItem {
  action: string;
  setAction(_: string)
  customizationLabel: string;
  setCustomizationLabel(_: string)
  doubleValue: number;
  setDoubleValue(_: number)
  label: string;
  setLabel(_: string)
  maximumSliderWidth: number;
  setMaximumSliderWidth(_: number)
  maximumValueAccessory: NSSliderAccessory;
  setMaximumValueAccessory(_: NSSliderAccessory)
  minimumSliderWidth: number;
  setMinimumSliderWidth(_: number)
  minimumValueAccessory: NSSliderAccessory;
  setMinimumValueAccessory(_: NSSliderAccessory)
  slider: NSSlider;
  setSlider(_: NSSlider)
  target: any;
  setTarget(_: any)
  valueAccessoryWidth: number;
  setValueAccessoryWidth(_: number)
  readonly view: NSView;
}

declare var NSSortDescriptorsBinding: string;

declare class NSSound extends NSObject implements NSCopying, NSPasteboardReading, NSPasteboardWriting, NSSecureCoding {
  static canInitWithPasteboard(with_: NSPasteboard): boolean;
  static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.ReadingOptions;
  currentTime: number;
  setCurrentTime(_: number)
  delegate: NSSoundDelegate;
  setDelegate(_: NSSoundDelegate)
  readonly duration: number;
  loops: boolean;
  setLoops(_: boolean)
  readonly name: string;
  playbackDeviceIdentifier: string;
  setPlaybackDeviceIdentifier(_: string)
  readonly isPlaying: boolean;
  volume: number;
  setVolume(_: number)
  static soundUnfilteredTypes(): NSArray<string>;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  conformsToProtocol(to: any /* Protocol */): boolean;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithContentsOfFileByReference(contentsOfFile: string, byReference: boolean): this;
  static createWithContentsOfURLByReference(contentsOfURL: NSURL, byReference: boolean): this;
  static createWithData(data: Data): this;
  static createWithPasteboard(pasteboard: NSPasteboard): this;
  static createWithPasteboardPropertyListOfType(pasteboardPropertyList: any, ofType: string): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  pasteboardPropertyListForType(forType: string): any;
  pause(): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  play(): boolean;
  respondsToSelector(_: string): boolean;
  resume(): boolean;
  self(): this;
  setName(_?: string): boolean;
  stop(): boolean;
  writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  writeToPasteboard(to: NSPasteboard): void;
  writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.WritingOptions;
}

interface NSSoundDelegate extends NSObject {
  soundDidFinishPlaying?(_: NSSound, didFinishPlaying: boolean): void;
}

declare var NSSoundDelegate: {
  prototype: NSSoundDelegate;
};

declare var NSSoundPboardType: string;

declare var NSSourceTextScalingDocumentAttribute: string;

declare var NSSourceTextScalingDocumentOption: string;

declare var NSSpeechCharacterModeProperty: string;

declare var NSSpeechCommandDelimiterProperty: string;

declare var NSSpeechCommandPrefix: string;

declare var NSSpeechCommandSuffix: string;

declare var NSSpeechCurrentVoiceProperty: string;

declare var NSSpeechDictionaryAbbreviations: string;

declare var NSSpeechDictionaryEntryPhonemes: string;

declare var NSSpeechDictionaryEntrySpelling: string;

declare var NSSpeechDictionaryLocaleIdentifier: string;

declare var NSSpeechDictionaryModificationDate: string;

declare var NSSpeechDictionaryPronunciations: string;

declare var NSSpeechErrorCount: string;

declare var NSSpeechErrorNewestCharacterOffset: string;

declare var NSSpeechErrorNewestCode: string;

declare var NSSpeechErrorOldestCharacterOffset: string;

declare var NSSpeechErrorOldestCode: string;

declare var NSSpeechErrorsProperty: string;

declare var NSSpeechInputModeProperty: string;

declare var NSSpeechModeLiteral: string;

declare var NSSpeechModeNormal: string;

declare var NSSpeechModePhoneme: string;

declare var NSSpeechModeText: string;

declare var NSSpeechNumberModeProperty: string;

declare var NSSpeechOutputToFileURLProperty: string;

declare var NSSpeechPhonemeInfoExample: string;

declare var NSSpeechPhonemeInfoHiliteEnd: string;

declare var NSSpeechPhonemeInfoHiliteStart: string;

declare var NSSpeechPhonemeInfoOpcode: string;

declare var NSSpeechPhonemeInfoSymbol: string;

declare var NSSpeechPhonemeSymbolsProperty: string;

declare var NSSpeechPitchBaseProperty: string;

declare var NSSpeechPitchModProperty: string;

declare var NSSpeechRateProperty: string;

declare var NSSpeechRecentSyncProperty: string;

declare class NSSpeechRecognizer extends NSObject {
  blocksOtherRecognizers: boolean;
  setBlocksOtherRecognizers(_: boolean)
  commands: NSArray<string>;
  setCommands(_: NSArray<string>)
  delegate: NSSpeechRecognizerDelegate;
  setDelegate(_: NSSpeechRecognizerDelegate)
  displayedCommandsTitle: string;
  setDisplayedCommandsTitle(_: string)
  listensInForegroundOnly: boolean;
  setListensInForegroundOnly(_: boolean)
  startListening(): void;
  stopListening(): void;
}

interface NSSpeechRecognizerDelegate extends NSObject {
  speechRecognizerDidRecognizeCommand?(_: NSSpeechRecognizer, didRecognizeCommand: string): void;
}

declare var NSSpeechRecognizerDelegate: {
  prototype: NSSpeechRecognizerDelegate;
};

declare var NSSpeechResetProperty: string;

declare var NSSpeechStatusNumberOfCharactersLeft: string;

declare var NSSpeechStatusOutputBusy: string;

declare var NSSpeechStatusOutputPaused: string;

declare var NSSpeechStatusPhonemeCode: string;

declare var NSSpeechStatusProperty: string;

declare class NSSpeechSynthesizer extends NSObject {
  static attributesForVoice(forVoice: string): NSDictionary<string, any>;
  delegate: NSSpeechSynthesizerDelegate;
  setDelegate(_: NSSpeechSynthesizerDelegate)
  rate: number;
  setRate(_: number)
  readonly isSpeaking: boolean;
  usesFeedbackWindow: boolean;
  setUsesFeedbackWindow(_: boolean)
  volume: number;
  setVolume(_: number)
  static isAnyApplicationSpeaking(): boolean;
  static availableVoices(): NSArray<string>;
  static defaultVoice(): string;
  addSpeechDictionary(_: NSDictionary<string, any>): void;
  continueSpeaking(): void;
  static createWithVoice(voice?: string): this;
  objectForPropertyError(error: string): any;
  pauseSpeakingAtBoundary(at: NSSpeechSynthesizer.Boundary): void;
  phonemesFromText(from: string): string;
  setObjectForPropertyError(forProperty?: any, error: string): boolean;
  setVoice(_?: string): boolean;
  startSpeakingString(_: string): boolean;
  startSpeakingStringToURL(_: string, to: NSURL): boolean;
  stopSpeaking(): void;
  stopSpeakingAtBoundary(at: NSSpeechSynthesizer.Boundary): void;
  voice(): string;
}

interface NSSpeechSynthesizerDelegate extends NSObject {
  speechSynthesizerWillSpeakWordOfString?(_: NSSpeechSynthesizer, willSpeakWord: NSRange, of: string): void;
  speechSynthesizerDidEncounterErrorAtIndexOfStringMessage?(_: NSSpeechSynthesizer, didEncounterErrorAt: number, of: string, message: string): void;
  speechSynthesizerDidEncounterSyncMessage?(_: NSSpeechSynthesizer, didEncounterSyncMessage: string): void;
  speechSynthesizerDidFinishSpeaking?(_: NSSpeechSynthesizer, didFinishSpeaking: boolean): void;
  speechSynthesizerWillSpeakPhoneme?(_: NSSpeechSynthesizer, willSpeakPhoneme: number): void;
}

declare var NSSpeechSynthesizerDelegate: {
  prototype: NSSpeechSynthesizerDelegate;
};

declare var NSSpeechSynthesizerInfoIdentifier: string;

declare var NSSpeechSynthesizerInfoProperty: string;

declare var NSSpeechSynthesizerInfoVersion: string;

declare var NSSpeechVolumeProperty: string;

declare class NSSpellChecker extends NSObject {
  static uniqueSpellDocumentTag(): number;
  accessoryView: NSView;
  setAccessoryView(_: NSView)
  automaticallyIdentifiesLanguages: boolean;
  setAutomaticallyIdentifiesLanguages(_: boolean)
  readonly availableLanguages: NSArray<string>;
  readonly spellingPanel: NSPanel;
  readonly substitutionsPanel: NSPanel;
  substitutionsPanelAccessoryViewController: NSViewController;
  setSubstitutionsPanelAccessoryViewController(_: NSViewController)
  readonly userPreferredLanguages: NSArray<string>;
  readonly userReplacementsDictionary: NSDictionary<string, string>;
  static isAutomaticCapitalizationEnabled(): boolean;
  static isAutomaticDashSubstitutionEnabled(): boolean;
  static isAutomaticPeriodSubstitutionEnabled(): boolean;
  static isAutomaticQuoteSubstitutionEnabled(): boolean;
  static isAutomaticSpellingCorrectionEnabled(): boolean;
  static isAutomaticTextCompletionEnabled(): boolean;
  static isAutomaticTextReplacementEnabled(): boolean;
  static sharedSpellChecker(): NSSpellChecker;
  static sharedSpellCheckerExists(): boolean;
  checkGrammarOfStringStartingAtLanguageWrapInSpellDocumentWithTagDetails(of: string, startingAt: number, language?: string, wrap: boolean, inSpellDocumentWithTag: number, details?: NSArray<NSDictionary<string, any>>): NSRange;
  checkSpellingOfStringStartingAt(of: string, startingAt: number): NSRange;
  checkSpellingOfStringStartingAtLanguageWrapInSpellDocumentWithTagWordCount(of: string, startingAt: number, language?: string, wrap: boolean, inSpellDocumentWithTag: number, wordCount?: number): NSRange;
  checkStringRangeTypesOptionsInSpellDocumentWithTagOrthographyWordCount(_: string, range: NSRange, types: number, options?: NSDictionary<string, any>, inSpellDocumentWithTag: number, orthography?: NSOrthography, wordCount?: number): NSArray<NSTextCheckingResult>;
  closeSpellDocumentWithTag(withTag: number): void;
  completionsForPartialWordRangeInStringLanguageInSpellDocumentWithTag(forPartialWordRange: NSRange, in_: string, language?: string, inSpellDocumentWithTag: number): NSArray<string>;
  correctionForWordRangeInStringLanguageInSpellDocumentWithTag(forWordRange: NSRange, in_: string, language: string, inSpellDocumentWithTag: number): string;
  countWordsInStringLanguage(in_: string, language?: string): number;
  deletesAutospaceBetweenStringAndStringLanguage(_: string, andString: string, language?: string): boolean;
  dismissCorrectionIndicatorForView(for_: NSView): void;
  guessesForWordRangeInStringLanguageInSpellDocumentWithTag(forWordRange: NSRange, in_: string, language?: string, inSpellDocumentWithTag: number): NSArray<string>;
  hasLearnedWord(_: string): boolean;
  ignoreWordInSpellDocumentWithTag(_: string, inSpellDocumentWithTag: number): void;
  ignoredWordsInSpellDocumentWithTag(inSpellDocumentWithTag: number): NSArray<string>;
  language(): string;
  languageForWordRangeInStringOrthography(forWordRange: NSRange, in_: string, orthography?: NSOrthography): string;
  learnWord(_: string): void;
  menuForResultStringOptionsAtLocationInView(for_: NSTextCheckingResult, string: string, options?: NSDictionary<string, any>, atLocation: NSPoint, in_: NSView): NSMenu;
  preventsAutocorrectionBeforeStringLanguage(before: string, language?: string): boolean;
  recordResponseToCorrectionForWordLanguageInSpellDocumentWithTag(_: NSSpellChecker.CorrectionResponse, toCorrection: string, forWord: string, language?: string, inSpellDocumentWithTag: number): void;
  requestCandidatesForSelectedRangeInStringTypesOptionsInSpellDocumentWithTagCompletionHandler(forSelectedRange: NSRange, in_: string, types: number, options?: NSDictionary<string, any>, inSpellDocumentWithTag: number, completionHandler?: (p1: number, p2: NSArray<NSTextCheckingResult>) => void): number;
  requestCheckingOfStringRangeTypesOptionsInSpellDocumentWithTagCompletionHandler(of: string, range: NSRange, types: number, options?: NSDictionary<string, any>, inSpellDocumentWithTag: number, completionHandler?: (p1: number, p2: NSArray<NSTextCheckingResult>, p3: NSOrthography, p4: number) => void): number;
  setIgnoredWordsInSpellDocumentWithTag(_: NSArray<string>, inSpellDocumentWithTag: number): void;
  setLanguage(_: string): boolean;
  setWordFieldStringValue(_: string): void;
  showCorrectionIndicatorOfTypePrimaryStringAlternativeStringsForStringInRectViewCompletionHandler(of: NSSpellChecker.CorrectionIndicatorType, primaryString: string, alternativeStrings: NSArray<string>, forStringIn: NSRect, view: NSView, completionHandler?: (p1: string) => void): void;
  unlearnWord(_: string): void;
  updatePanels(): void;
  updateSpellingPanelWithGrammarStringDetail(withGrammarString: string, detail: NSDictionary<string, any>): void;
  updateSpellingPanelWithMisspelledWord(withMisspelledWord: string): void;
  userQuotesArrayForLanguage(forLanguage: string): NSArray<string>;
}

declare var NSSpellCheckerDidChangeAutomaticCapitalizationNotification: string;

declare var NSSpellCheckerDidChangeAutomaticDashSubstitutionNotification: string;

declare var NSSpellCheckerDidChangeAutomaticPeriodSubstitutionNotification: string;

declare var NSSpellCheckerDidChangeAutomaticQuoteSubstitutionNotification: string;

declare var NSSpellCheckerDidChangeAutomaticSpellingCorrectionNotification: string;

declare var NSSpellCheckerDidChangeAutomaticTextCompletionNotification: string;

declare var NSSpellCheckerDidChangeAutomaticTextReplacementNotification: string;

declare var NSSpellingStateAttributeName: string;

declare class NSSplitView extends NSView {
  readonly arrangedSubviews: NSArray<NSView>;
  arrangesAllSubviews: boolean;
  setArrangesAllSubviews(_: boolean)
  autosaveName: string;
  setAutosaveName(_: string)
  delegate: NSSplitViewDelegate;
  setDelegate(_: NSSplitViewDelegate)
  readonly dividerColor: NSColor;
  dividerStyle: NSSplitView.DividerStyle;
  setDividerStyle(_: NSSplitView.DividerStyle)
  readonly dividerThickness: number;
  isVertical: boolean;
  setVertical(_: boolean)
  addArrangedSubview(_: NSView): void;
  adjustSubviews(): void;
  drawDividerInRect(in_: NSRect): void;
  holdingPriorityForSubviewAtIndex(at: number): number;
  insertArrangedSubviewAtIndex(_: NSView, at: number): void;
  isSubviewCollapsed(_: NSView): boolean;
  maxPossiblePositionOfDividerAtIndex(at: number): number;
  minPossiblePositionOfDividerAtIndex(at: number): number;
  removeArrangedSubview(_: NSView): void;
  setHoldingPriorityForSubviewAtIndex(_: number, forSubviewAt: number): void;
  setPositionOfDividerAtIndex(_: number, ofDividerAt: number): void;
}

declare class NSSplitViewController extends NSViewController implements NSSplitViewDelegate, NSUserInterfaceValidations {
  minimumThicknessForInlineSidebars: number;
  setMinimumThicknessForInlineSidebars(_: number)
  splitView: NSSplitView;
  setSplitView(_: NSSplitView)
  splitViewItems: NSArray<NSSplitViewItem>;
  setSplitViewItems(_: NSArray<NSSplitViewItem>)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  addSplitViewItem(_: NSSplitViewItem): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  insertSplitViewItemAtIndex(_: NSSplitViewItem, at: number): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  removeSplitViewItem(_: NSSplitViewItem): void;
  respondsToSelector(_: string): boolean;
  self(): this;
  splitViewAdditionalEffectiveRectOfDividerAtIndex(_: NSSplitView, additionalEffectiveRectOfDividerAt: number): NSRect;
  splitViewCanCollapseSubview(_: NSSplitView, canCollapseSubview: NSView): boolean;
  splitViewConstrainMaxCoordinateOfSubviewAt(_: NSSplitView, constrainMaxCoordinate: number, ofSubviewAt: number): number;
  splitViewConstrainMinCoordinateOfSubviewAt(_: NSSplitView, constrainMinCoordinate: number, ofSubviewAt: number): number;
  splitViewConstrainSplitPositionOfSubviewAt(_: NSSplitView, constrainSplitPosition: number, ofSubviewAt: number): number;
  splitViewEffectiveRectForDrawnRectOfDividerAtIndex(_: NSSplitView, effectiveRect: NSRect, forDrawnRect: NSRect, ofDividerAt: number): NSRect;
  splitViewResizeSubviewsWithOldSize(_: NSSplitView, resizeSubviewsWithOldSize: NSSize): void;
  splitViewShouldAdjustSizeOfSubview(_: NSSplitView, shouldAdjustSizeOfSubview: NSView): boolean;
  splitViewShouldHideDividerAtIndex(_: NSSplitView, shouldHideDividerAt: number): boolean;
  splitViewDidResizeSubviews(_: Notification): void;
  splitViewItemForViewController(for_: NSViewController): NSSplitViewItem;
  splitViewWillResizeSubviews(_: Notification): void;
  toggleSidebar(_?: any): void;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}

declare var NSSplitViewControllerAutomaticDimension: number;

interface NSSplitViewDelegate extends NSObject {
  splitViewShouldHideDividerAtIndex?(_: NSSplitView, shouldHideDividerAt: number): boolean;
  splitViewEffectiveRectForDrawnRectOfDividerAtIndex?(_: NSSplitView, effectiveRect: NSRect, forDrawnRect: NSRect, ofDividerAt: number): NSRect;
  splitViewAdditionalEffectiveRectOfDividerAtIndex?(_: NSSplitView, additionalEffectiveRectOfDividerAt: number): NSRect;
  splitViewCanCollapseSubview?(_: NSSplitView, canCollapseSubview: NSView): boolean;
  splitViewConstrainMaxCoordinateOfSubviewAt?(_: NSSplitView, constrainMaxCoordinate: number, ofSubviewAt: number): number;
  splitViewConstrainMinCoordinateOfSubviewAt?(_: NSSplitView, constrainMinCoordinate: number, ofSubviewAt: number): number;
  splitViewConstrainSplitPositionOfSubviewAt?(_: NSSplitView, constrainSplitPosition: number, ofSubviewAt: number): number;
  splitViewResizeSubviewsWithOldSize?(_: NSSplitView, resizeSubviewsWithOldSize: NSSize): void;
  splitViewShouldAdjustSizeOfSubview?(_: NSSplitView, shouldAdjustSizeOfSubview: NSView): boolean;
  splitViewDidResizeSubviews?(_: Notification): void;
  splitViewWillResizeSubviews?(_: Notification): void;
}

declare var NSSplitViewDelegate: {
  prototype: NSSplitViewDelegate;
};

declare var NSSplitViewDidResizeSubviewsNotification: string;

declare class NSSplitViewItem extends NSObject implements NSAnimatablePropertyContainer, NSCoding {
  static contentListWithViewController(contentListWithViewController: NSViewController): NSSplitViewItem;
  static defaultAnimationForKey(forKey: string): any;
  static sidebarWithViewController(sidebarWithViewController: NSViewController): NSSplitViewItem;
  automaticMaximumThickness: number;
  setAutomaticMaximumThickness(_: number)
  readonly behavior: NSSplitViewItem.Behavior;
  canCollapse: boolean;
  setCanCollapse(_: boolean)
  collapseBehavior: NSSplitViewItem.CollapseBehavior;
  setCollapseBehavior(_: NSSplitViewItem.CollapseBehavior)
  isCollapsed: boolean;
  setCollapsed(_: boolean)
  holdingPriority: number;
  setHoldingPriority(_: number)
  maximumThickness: number;
  setMaximumThickness(_: number)
  minimumThickness: number;
  setMinimumThickness(_: number)
  preferredThicknessFraction: number;
  setPreferredThicknessFraction(_: number)
  isSpringLoaded: boolean;
  setSpringLoaded(_: boolean)
  viewController: NSViewController;
  setViewController(_: NSViewController)
  animations: NSDictionary<string, any>;
  setAnimations(_: NSDictionary<string, any>) // inherited from NSAnimatablePropertyContainer
  animationForKey(forKey: string): any;
  animator(): this;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var NSSplitViewItemUnspecifiedDimension: number;

declare var NSSplitViewWillResizeSubviewsNotification: string;

interface NSSpringLoadingDestination extends NSObject {
  draggingEnded?(_: NSDraggingInfo): void;
  springLoadingActivatedDraggingInfo(_: boolean, draggingInfo: NSDraggingInfo): void;
  springLoadingEntered?(_: NSDraggingInfo): NSSpringLoadingOptions;
  springLoadingExited?(_: NSDraggingInfo): void;
  springLoadingHighlightChanged(_: NSDraggingInfo): void;
  springLoadingUpdated?(_: NSDraggingInfo): NSSpringLoadingOptions;
}

declare var NSSpringLoadingDestination: {
  prototype: NSSpringLoadingDestination;
};

declare var NSSquareLineCapStyle: NSBezierPath.LineCapStyle;

declare var NSSquareStatusItemLength: number;

declare class NSStackView extends NSView {
  alignment: NSLayoutConstraint.Attribute;
  setAlignment(_: NSLayoutConstraint.Attribute)
  readonly arrangedSubviews: NSArray<NSView>;
  delegate: NSStackViewDelegate;
  setDelegate(_: NSStackViewDelegate)
  readonly detachedViews: NSArray<NSView>;
  detachesHiddenViews: boolean;
  setDetachesHiddenViews(_: boolean)
  distribution: NSStackView.Distribution;
  setDistribution(_: NSStackView.Distribution)
  edgeInsets: NSEdgeInsets;
  setEdgeInsets(_: NSEdgeInsets)
  orientation: NSUserInterfaceLayoutOrientation;
  setOrientation(_: NSUserInterfaceLayoutOrientation)
  spacing: number;
  setSpacing(_: number)
  readonly views: NSArray<NSView>;
  addArrangedSubview(_: NSView): void;
  addViewInGravity(_: NSView, in_: NSStackView.Gravity): void;
  clippingResistancePriorityForOrientation(for_: NSLayoutConstraint.Orientation): number;
  customSpacingAfterView(after: NSView): number;
  huggingPriorityForOrientation(for_: NSLayoutConstraint.Orientation): number;
  insertArrangedSubviewAtIndex(_: NSView, at: number): void;
  insertViewAtIndexInGravity(_: NSView, at: number, in_: NSStackView.Gravity): void;
  removeArrangedSubview(_: NSView): void;
  removeView(_: NSView): void;
  setClippingResistancePriorityForOrientation(_: number, for_: NSLayoutConstraint.Orientation): void;
  setCustomSpacingAfterView(_: number, after: NSView): void;
  setHuggingPriorityForOrientation(_: number, for_: NSLayoutConstraint.Orientation): void;
  setViewsInGravity(_: NSArray<NSView>, in_: NSStackView.Gravity): void;
  setVisibilityPriorityForView(_: number, for_: NSView): void;
  viewsInGravity(in_: NSStackView.Gravity): NSArray<NSView>;
  visibilityPriorityForView(for_: NSView): number;
}

interface NSStackViewDelegate extends NSObject {
  stackViewWillDetachViews?(_: NSStackView, willDetach: NSArray<NSView>): void;
  stackViewDidReattachViews?(_: NSStackView, didReattach: NSArray<NSView>): void;
}

declare var NSStackViewDelegate: {
  prototype: NSStackViewDelegate;
};

declare var NSStackViewSpacingUseDefault: number;

declare var NSStackViewVisibilityPriorityDetachOnlyIfNecessary: number;

declare var NSStackViewVisibilityPriorityMustHold: number;

declare var NSStackViewVisibilityPriorityNotVisible: number;

interface NSStandardKeyBindingResponding extends NSObject {
  cancelOperation?(_?: any): void;
  capitalizeWord?(_?: any): void;
  centerSelectionInVisibleArea?(_?: any): void;
  changeCaseOfLetter?(_?: any): void;
  complete?(_?: any): void;
  deleteBackward?(_?: any): void;
  deleteBackwardByDecomposingPreviousCharacter?(_?: any): void;
  deleteForward?(_?: any): void;
  deleteToBeginningOfLine?(_?: any): void;
  deleteToBeginningOfParagraph?(_?: any): void;
  deleteToEndOfLine?(_?: any): void;
  deleteToEndOfParagraph?(_?: any): void;
  deleteToMark?(_?: any): void;
  deleteWordBackward?(_?: any): void;
  deleteWordForward?(_?: any): void;
  doCommandBySelector?(by: string): void;
  indent?(_?: any): void;
  insertBacktab?(_?: any): void;
  insertContainerBreak?(_?: any): void;
  insertDoubleQuoteIgnoringSubstitution?(_?: any): void;
  insertLineBreak?(_?: any): void;
  insertNewline?(_?: any): void;
  insertNewlineIgnoringFieldEditor?(_?: any): void;
  insertParagraphSeparator?(_?: any): void;
  insertSingleQuoteIgnoringSubstitution?(_?: any): void;
  insertTab?(_?: any): void;
  insertTabIgnoringFieldEditor?(_?: any): void;
  insertText?(_: any): void;
  lowercaseWord?(_?: any): void;
  makeBaseWritingDirectionLeftToRight?(_?: any): void;
  makeBaseWritingDirectionNatural?(_?: any): void;
  makeBaseWritingDirectionRightToLeft?(_?: any): void;
  makeTextWritingDirectionLeftToRight?(_?: any): void;
  makeTextWritingDirectionNatural?(_?: any): void;
  makeTextWritingDirectionRightToLeft?(_?: any): void;
  moveBackward?(_?: any): void;
  moveBackwardAndModifySelection?(_?: any): void;
  moveDown?(_?: any): void;
  moveDownAndModifySelection?(_?: any): void;
  moveForward?(_?: any): void;
  moveForwardAndModifySelection?(_?: any): void;
  moveLeft?(_?: any): void;
  moveLeftAndModifySelection?(_?: any): void;
  moveParagraphBackwardAndModifySelection?(_?: any): void;
  moveParagraphForwardAndModifySelection?(_?: any): void;
  moveRight?(_?: any): void;
  moveRightAndModifySelection?(_?: any): void;
  moveToBeginningOfDocument?(_?: any): void;
  moveToBeginningOfDocumentAndModifySelection?(_?: any): void;
  moveToBeginningOfLine?(_?: any): void;
  moveToBeginningOfLineAndModifySelection?(_?: any): void;
  moveToBeginningOfParagraph?(_?: any): void;
  moveToBeginningOfParagraphAndModifySelection?(_?: any): void;
  moveToEndOfDocument?(_?: any): void;
  moveToEndOfDocumentAndModifySelection?(_?: any): void;
  moveToEndOfLine?(_?: any): void;
  moveToEndOfLineAndModifySelection?(_?: any): void;
  moveToEndOfParagraph?(_?: any): void;
  moveToEndOfParagraphAndModifySelection?(_?: any): void;
  moveToLeftEndOfLine?(_?: any): void;
  moveToLeftEndOfLineAndModifySelection?(_?: any): void;
  moveToRightEndOfLine?(_?: any): void;
  moveToRightEndOfLineAndModifySelection?(_?: any): void;
  moveUp?(_?: any): void;
  moveUpAndModifySelection?(_?: any): void;
  moveWordBackward?(_?: any): void;
  moveWordBackwardAndModifySelection?(_?: any): void;
  moveWordForward?(_?: any): void;
  moveWordForwardAndModifySelection?(_?: any): void;
  moveWordLeft?(_?: any): void;
  moveWordLeftAndModifySelection?(_?: any): void;
  moveWordRight?(_?: any): void;
  moveWordRightAndModifySelection?(_?: any): void;
  pageDown?(_?: any): void;
  pageDownAndModifySelection?(_?: any): void;
  pageUp?(_?: any): void;
  pageUpAndModifySelection?(_?: any): void;
  quickLookPreviewItems?(_?: any): void;
  scrollLineDown?(_?: any): void;
  scrollLineUp?(_?: any): void;
  scrollPageDown?(_?: any): void;
  scrollPageUp?(_?: any): void;
  scrollToBeginningOfDocument?(_?: any): void;
  scrollToEndOfDocument?(_?: any): void;
  selectAll?(_?: any): void;
  selectLine?(_?: any): void;
  selectParagraph?(_?: any): void;
  selectToMark?(_?: any): void;
  selectWord?(_?: any): void;
  setMark?(_?: any): void;
  swapWithMark?(_?: any): void;
  transpose?(_?: any): void;
  transposeWords?(_?: any): void;
  uppercaseWord?(_?: any): void;
  yank?(_?: any): void;
}

declare var NSStandardKeyBindingResponding: {
  prototype: NSStandardKeyBindingResponding;
};

declare class NSStatusBar extends NSObject {
  readonly thickness: number;
  readonly isVertical: boolean;
  static systemStatusBar(): NSStatusBar;
  removeStatusItem(_: NSStatusItem): void;
  statusItemWithLength(withLength: number): NSStatusItem;
}

declare class NSStatusBarButton extends NSButton {
  static checkboxWithTitleTargetAction(checkboxWithTitle: string, target?: any, action?: string): NSStatusBarButton; // inherited from NSButton
  static radioButtonWithTitleTargetAction(radioButtonWithTitle: string, target?: any, action?: string): NSStatusBarButton; // inherited from NSButton
  appearsDisabled: boolean;
  setAppearsDisabled(_: boolean)
}

declare class NSStatusItem extends NSObject {
  autosaveName: string;
  setAutosaveName(_: string)
  behavior: NSStatusItem.Behavior;
  setBehavior(_: NSStatusItem.Behavior)
  readonly button: NSStatusBarButton;
  length: number;
  setLength(_: number)
  menu: NSMenu;
  setMenu(_: NSMenu)
  readonly statusBar: NSStatusBar;
  isVisible: boolean;
  setVisible(_: boolean)
}

declare var NSStatusWindowLevel: number;

declare class NSStepper extends NSControl implements NSAccessibilityStepper {
  autorepeat: boolean;
  setAutorepeat(_: boolean)
  increment: number;
  setIncrement(_: number)
  maxValue: number;
  setMaxValue(_: number)
  minValue: number;
  setMinValue(_: number)
  valueWraps: boolean;
  setValueWraps(_: boolean)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityFrame(): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLabel(): string;
  accessibilityParent(): any;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityValue(): any;
  conformsToProtocol(to: any /* Protocol */): boolean;
  isAccessibilityFocused(): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class NSStepperCell extends NSActionCell {
  autorepeat: boolean;
  setAutorepeat(_: boolean)
  increment: number;
  setIncrement(_: number)
  maxValue: number;
  setMaxValue(_: number)
  minValue: number;
  setMinValue(_: number)
  valueWraps: boolean;
  setValueWraps(_: boolean)
}

declare class NSStepperTouchBarItem extends NSTouchBarItem {
  action: string;
  setAction(_: string)
  customizationLabel: string;
  setCustomizationLabel(_: string)
  increment: number;
  setIncrement(_: number)
  maxValue: number;
  setMaxValue(_: number)
  minValue: number;
  setMinValue(_: number)
  target: any;
  setTarget(_: any)
  value: number;
  setValue(_: number)
}


declare const NSStopFunctionKey: number;
declare class NSStoryboard extends NSObject {
  static mainStoryboard(): NSStoryboard;
  instantiateControllerWithIdentifier(withIdentifier: string): any;
  instantiateControllerWithIdentifierCreator(_: string, creator?: (p1: NSCoder) => any): any;
  instantiateInitialController(): any;
  instantiateInitialControllerWithCreator(_?: (p1: NSCoder) => any): any;
}

declare class NSStoryboardSegue extends NSObject {
  readonly destinationController: any;
  readonly identifier: string;
  readonly sourceController: any;
  static createWithIdentifierSourceDestination(identifier: string, source: any, destination: any): this;
  perform(): void;
}

declare var NSStrikethroughColorAttributeName: string;

declare var NSStrikethroughStyleAttributeName: string;

declare class NSStringDrawingContext extends NSObject {
  readonly actualScaleFactor: number;
  minimumScaleFactor: number;
  setMinimumScaleFactor(_: number)
  readonly totalBounds: NSRect;
}

declare var NSStrokeColorAttributeName: string;

declare var NSStrokeWidthAttributeName: string;

declare var NSSubjectDocumentAttribute: string;

declare var NSSubmenuWindowLevel: number;

declare var NSSuperscriptAttributeName: string;

declare class NSSwitch extends NSControl implements NSAccessibilitySwitch {
  state: number;
  setState(_: number)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityFrame(): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLabel(): string;
  accessibilityParent(): any;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityValue(): string;
  conformsToProtocol(to: any /* Protocol */): boolean;
  isAccessibilityFocused(): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}


declare const NSSysReqFunctionKey: number;
declare var NSSystemColorsDidChangeNotification: string;


declare const NSSystemFunctionKey: number;
declare var NSTIFFException: string;


declare const NSTabCharacter: number;
declare var NSTabColumnTerminatorsAttributeName: string;


declare const NSTabTextMovement: number;
declare class NSTabView extends NSView {
  allowsTruncatedLabels: boolean;
  setAllowsTruncatedLabels(_: boolean)
  readonly contentRect: NSRect;
  controlSize: NSControl.ControlSize;
  setControlSize(_: NSControl.ControlSize)
  delegate: NSTabViewDelegate;
  setDelegate(_: NSTabViewDelegate)
  drawsBackground: boolean;
  setDrawsBackground(_: boolean)
  font: NSFont;
  setFont(_: NSFont)
  readonly minimumSize: NSSize;
  readonly numberOfTabViewItems: number;
  readonly selectedTabViewItem: NSTabViewItem;
  tabPosition: NSTabView.TabPosition;
  setTabPosition(_: NSTabView.TabPosition)
  tabViewBorderType: NSTabView.TabViewBorderType;
  setTabViewBorderType(_: NSTabView.TabViewBorderType)
  tabViewItems: NSArray<NSTabViewItem>;
  setTabViewItems(_: NSArray<NSTabViewItem>)
  tabViewType: NSTabView.TabType;
  setTabViewType(_: NSTabView.TabType)
  addTabViewItem(_: NSTabViewItem): void;
  indexOfTabViewItem(_: NSTabViewItem): number;
  indexOfTabViewItemWithIdentifier(withIdentifier: any): number;
  insertTabViewItemAtIndex(_: NSTabViewItem, at: number): void;
  removeTabViewItem(_: NSTabViewItem): void;
  selectFirstTabViewItem(_?: any): void;
  selectLastTabViewItem(_?: any): void;
  selectNextTabViewItem(_?: any): void;
  selectPreviousTabViewItem(_?: any): void;
  selectTabViewItem(_?: NSTabViewItem): void;
  selectTabViewItemAtIndex(at: number): void;
  selectTabViewItemWithIdentifier(withIdentifier: any): void;
  tabViewItemAtIndex(at: number): NSTabViewItem;
  tabViewItemAtPoint(at: NSPoint): NSTabViewItem;
  takeSelectedTabViewItemFromSender(_?: any): void;
}

declare class NSTabViewController extends NSViewController implements NSTabViewDelegate, NSToolbarDelegate {
  canPropagateSelectedChildViewControllerTitle: boolean;
  setCanPropagateSelectedChildViewControllerTitle(_: boolean)
  selectedTabViewItemIndex: number;
  setSelectedTabViewItemIndex(_: number)
  tabStyle: NSTabViewController.TabStyle;
  setTabStyle(_: NSTabViewController.TabStyle)
  tabView: NSTabView;
  setTabView(_: NSTabView)
  tabViewItems: NSArray<NSTabViewItem>;
  setTabViewItems(_: NSArray<NSTabViewItem>)
  transitionOptions: NSViewController.TransitionOptions;
  setTransitionOptions(_: NSViewController.TransitionOptions)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  addTabViewItem(_: NSTabViewItem): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  insertTabViewItemAtIndex(_: NSTabViewItem, at: number): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  removeTabViewItem(_: NSTabViewItem): void;
  respondsToSelector(_: string): boolean;
  self(): this;
  tabViewDidSelectTabViewItem(_: NSTabView, didSelect?: NSTabViewItem): void;
  tabViewShouldSelectTabViewItem(_: NSTabView, shouldSelect?: NSTabViewItem): boolean;
  tabViewWillSelectTabViewItem(_: NSTabView, willSelect?: NSTabViewItem): void;
  tabViewDidChangeNumberOfTabViewItems(_: NSTabView): void;
  tabViewItemForViewController(for_: NSViewController): NSTabViewItem;
  toolbarItemForItemIdentifierWillBeInsertedIntoToolbar(_: NSToolbar, itemForItemIdentifier: string, willBeInsertedIntoToolbar: boolean): NSToolbarItem;
  toolbarAllowedItemIdentifiers(_: NSToolbar): NSArray<string>;
  toolbarDefaultItemIdentifiers(_: NSToolbar): NSArray<string>;
  toolbarDidRemoveItem(_: Notification): void;
  toolbarSelectableItemIdentifiers(_: NSToolbar): NSArray<string>;
  toolbarWillAddItem(_: Notification): void;
}

interface NSTabViewDelegate extends NSObject {
  tabViewShouldSelectTabViewItem?(_: NSTabView, shouldSelect?: NSTabViewItem): boolean;
  tabViewWillSelectTabViewItem?(_: NSTabView, willSelect?: NSTabViewItem): void;
  tabViewDidSelectTabViewItem?(_: NSTabView, didSelect?: NSTabViewItem): void;
  tabViewDidChangeNumberOfTabViewItems?(_: NSTabView): void;
}

declare var NSTabViewDelegate: {
  prototype: NSTabViewDelegate;
};

declare class NSTabViewItem extends NSObject implements NSCoding {
  color: NSColor;
  setColor(_: NSColor)
  identifier: any;
  setIdentifier(_: any)
  image: NSImage;
  setImage(_: NSImage)
  initialFirstResponder: NSView;
  setInitialFirstResponder(_: NSView)
  label: string;
  setLabel(_: string)
  readonly tabState: NSTabViewItem.State;
  readonly tabView: NSTabView;
  toolTip: string;
  setToolTip(_: string)
  view: NSView;
  setView(_: NSView)
  viewController: NSViewController;
  setViewController(_: NSViewController)
  drawLabelInRect(_: boolean, in_: NSRect): void;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithIdentifier(identifier?: any): this;
  sizeOfLabel(_: boolean): NSSize;
}

declare class NSTableCellView extends NSView {
  backgroundStyle: NSView.BackgroundStyle;
  setBackgroundStyle(_: NSView.BackgroundStyle)
  readonly draggingImageComponents: NSArray<NSDraggingImageComponent>;
  imageView: NSImageView;
  setImageView(_: NSImageView)
  objectValue: any;
  setObjectValue(_: any)
  rowSizeStyle: NSTableView.RowSizeStyle;
  setRowSizeStyle(_: NSTableView.RowSizeStyle)
  textField: NSTextField;
  setTextField(_: NSTextField)
}

declare class NSTableColumn extends NSObject implements NSCoding, NSUserInterfaceItemIdentification {
  dataCell: any;
  setDataCell(_: any)
  isEditable: boolean;
  setEditable(_: boolean)
  headerCell: NSTableHeaderCell;
  setHeaderCell(_: NSTableHeaderCell)
  headerToolTip: string;
  setHeaderToolTip(_: string)
  isHidden: boolean;
  setHidden(_: boolean)
  maxWidth: number;
  setMaxWidth(_: number)
  minWidth: number;
  setMinWidth(_: number)
  resizingMask: NSTableColumn.ResizingOptions;
  setResizingMask(_: NSTableColumn.ResizingOptions)
  sortDescriptorPrototype: NSSortDescriptor;
  setSortDescriptorPrototype(_: NSSortDescriptor)
  tableView: NSTableView;
  setTableView(_: NSTableView)
  title: string;
  setTitle(_: string)
  width: number;
  setWidth(_: number)
  identifier: string;
  setIdentifier(_: string) // inherited from NSUserInterfaceItemIdentification
  dataCellForRow(forRow: number): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithIdentifier(identifier: string): this;
  sizeToFit(): void;
}

declare class NSTableHeaderCell extends NSTextFieldCell {
  drawSortIndicatorWithFrameInViewAscendingPriority(withFrame: NSRect, in_: NSView, ascending: boolean, priority: number): void;
  sortIndicatorRectForBounds(forBounds: NSRect): NSRect;
}

declare class NSTableHeaderView extends NSView implements NSViewToolTipOwner {
  readonly draggedColumn: number;
  readonly draggedDistance: number;
  readonly resizedColumn: number;
  tableView: NSTableView;
  setTableView(_: NSTableView)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  columnAtPoint(at: NSPoint): number;
  conformsToProtocol(to: any /* Protocol */): boolean;
  headerRectOfColumn(ofColumn: number): NSRect;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  viewStringForToolTipPointUserData(_: NSView, stringForToolTip: number, point: NSPoint, userData?: any): string;
}

declare class NSTableRowView extends NSView implements NSAccessibilityRow {
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle;
  setDraggingDestinationFeedbackStyle(_: NSTableView.DraggingDestinationFeedbackStyle)
  isEmphasized: boolean;
  setEmphasized(_: boolean)
  isFloating: boolean;
  setFloating(_: boolean)
  isGroupRowStyle: boolean;
  setGroupRowStyle(_: boolean)
  indentationForDropOperation: number;
  setIndentationForDropOperation(_: number)
  readonly interiorBackgroundStyle: NSView.BackgroundStyle;
  isNextRowSelected: boolean;
  setNextRowSelected(_: boolean)
  readonly numberOfColumns: number;
  isPreviousRowSelected: boolean;
  setPreviousRowSelected(_: boolean)
  isSelected: boolean;
  setSelected(_: boolean)
  selectionHighlightStyle: NSTableView.SelectionHighlightStyle;
  setSelectionHighlightStyle(_: NSTableView.SelectionHighlightStyle)
  isTargetForDropOperation: boolean;
  setTargetForDropOperation(_: boolean)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityDisclosureLevel(): number;
  accessibilityFrame(): NSRect;
  accessibilityIdentifier(): string;
  accessibilityIndex(): number;
  accessibilityParent(): any;
  conformsToProtocol(to: any /* Protocol */): boolean;
  drawBackgroundInRect(in_: NSRect): void;
  drawDraggingDestinationFeedbackInRect(in_: NSRect): void;
  drawSelectionInRect(in_: NSRect): void;
  drawSeparatorInRect(in_: NSRect): void;
  isAccessibilityFocused(): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  viewAtColumn(atColumn: number): any;
}

declare class NSTableView extends NSControl implements NSAccessibilityTable, NSDraggingSource, NSTextViewDelegate, NSUserInterfaceValidations {
  allowsColumnReordering: boolean;
  setAllowsColumnReordering(_: boolean)
  allowsColumnResizing: boolean;
  setAllowsColumnResizing(_: boolean)
  allowsColumnSelection: boolean;
  setAllowsColumnSelection(_: boolean)
  allowsEmptySelection: boolean;
  setAllowsEmptySelection(_: boolean)
  allowsMultipleSelection: boolean;
  setAllowsMultipleSelection(_: boolean)
  allowsTypeSelect: boolean;
  setAllowsTypeSelect(_: boolean)
  autosaveName: string;
  setAutosaveName(_: string)
  autosaveTableColumns: boolean;
  setAutosaveTableColumns(_: boolean)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  readonly clickedColumn: number;
  readonly clickedRow: number;
  columnAutoresizingStyle: NSTableView.ColumnAutoresizingStyle;
  setColumnAutoresizingStyle(_: NSTableView.ColumnAutoresizingStyle)
  cornerView: NSView;
  setCornerView(_: NSView)
  dataSource: NSTableViewDataSource;
  setDataSource(_: NSTableViewDataSource)
  delegate: NSTableViewDelegate;
  setDelegate(_: NSTableViewDelegate)
  doubleAction: string;
  setDoubleAction(_: string)
  draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle;
  setDraggingDestinationFeedbackStyle(_: NSTableView.DraggingDestinationFeedbackStyle)
  readonly editedColumn: number;
  readonly editedRow: number;
  readonly effectiveRowSizeStyle: NSTableView.RowSizeStyle;
  floatsGroupRows: boolean;
  setFloatsGroupRows(_: boolean)
  gridColor: NSColor;
  setGridColor(_: NSColor)
  gridStyleMask: NSTableView.GridLineStyle;
  setGridStyleMask(_: NSTableView.GridLineStyle)
  headerView: NSTableHeaderView;
  setHeaderView(_: NSTableHeaderView)
  readonly hiddenRowIndexes: IndexSet;
  highlightedTableColumn: NSTableColumn;
  setHighlightedTableColumn(_: NSTableColumn)
  intercellSpacing: NSSize;
  setIntercellSpacing(_: NSSize)
  readonly numberOfColumns: number;
  readonly numberOfRows: number;
  readonly numberOfSelectedColumns: number;
  readonly numberOfSelectedRows: number;
  readonly registeredNibsByIdentifier: NSDictionary<string, NSNib>;
  rowActionsVisible: boolean;
  setRowActionsVisible(_: boolean)
  rowHeight: number;
  setRowHeight(_: number)
  rowSizeStyle: NSTableView.RowSizeStyle;
  setRowSizeStyle(_: NSTableView.RowSizeStyle)
  readonly selectedColumn: number;
  readonly selectedColumnIndexes: IndexSet;
  readonly selectedRow: number;
  readonly selectedRowIndexes: IndexSet;
  selectionHighlightStyle: NSTableView.SelectionHighlightStyle;
  setSelectionHighlightStyle(_: NSTableView.SelectionHighlightStyle)
  sortDescriptors: NSArray<NSSortDescriptor>;
  setSortDescriptors(_: NSArray<NSSortDescriptor>)
  readonly tableColumns: NSArray<NSTableColumn>;
  usesAlternatingRowBackgroundColors: boolean;
  setUsesAlternatingRowBackgroundColors(_: boolean)
  usesAutomaticRowHeights: boolean;
  setUsesAutomaticRowHeights(_: boolean)
  usesStaticContents: boolean;
  setUsesStaticContents(_: boolean)
  verticalMotionCanBeginDrag: boolean;
  setVerticalMotionCanBeginDrag(_: boolean)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityColumnHeaderUIElements(): NSArray<any>;
  accessibilityColumns(): NSArray<any>;
  accessibilityFrame(): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLabel(): string;
  accessibilityParent(): any;
  accessibilityRowHeaderUIElements(): NSArray<any>;
  accessibilityRows(): NSArray<NSAccessibilityRow>;
  accessibilitySelectedCells(): NSArray<any>;
  accessibilitySelectedColumns(): NSArray<any>;
  accessibilitySelectedRows(): NSArray<NSAccessibilityRow>;
  accessibilityVisibleCells(): NSArray<any>;
  accessibilityVisibleColumns(): NSArray<any>;
  accessibilityVisibleRows(): NSArray<NSAccessibilityRow>;
  addTableColumn(_: NSTableColumn): void;
  beginUpdates(): void;
  canDragRowsWithIndexesAtPoint(with_: IndexSet, at: NSPoint): boolean;
  columnAtPoint(at: NSPoint): number;
  columnForView(for_: NSView): number;
  columnIndexesInRect(in_: NSRect): IndexSet;
  columnWithIdentifier(withIdentifier: string): number;
  conformsToProtocol(to: any /* Protocol */): boolean;
  deselectAll(_?: any): void;
  deselectColumn(_: number): void;
  deselectRow(_: number): void;
  didAddRowViewForRow(_: NSTableRowView, forRow: number): void;
  didRemoveRowViewForRow(_: NSTableRowView, forRow: number): void;
  dragImageForRowsWithIndexesTableColumnsEventOffset(with_: IndexSet, tableColumns: NSArray<NSTableColumn>, event: NSEvent, offset: NSPoint): NSImage;
  draggingSessionEndedAtPointOperation(_: NSDraggingSession, endedAt: NSPoint, operation: NSDragOperation): void;
  draggingSessionMovedToPoint(_: NSDraggingSession, movedTo: NSPoint): void;
  draggingSessionSourceOperationMaskForDraggingContext(_: NSDraggingSession, sourceOperationMaskFor: NSDraggingContext): NSDragOperation;
  draggingSessionWillBeginAtPoint(_: NSDraggingSession, willBeginAt: NSPoint): void;
  drawBackgroundInClipRect(inClipRect: NSRect): void;
  drawGridInClipRect(inClipRect: NSRect): void;
  drawRowClipRect(_: number, clipRect: NSRect): void;
  editColumnRowWithEventSelect(_: number, row: number, with_?: NSEvent, select: boolean): void;
  endUpdates(): void;
  enumerateAvailableRowViewsUsingBlock(_: (p1: NSTableRowView, p2: number) => void): void;
  frameOfCellAtColumnRow(atColumn: number, row: number): NSRect;
  hideRowsAtIndexesWithAnimation(at: IndexSet, withAnimation: NSTableView.AnimationOptions): void;
  highlightSelectionInClipRect(inClipRect: NSRect): void;
  ignoreModifierKeysForDraggingSession(for_: NSDraggingSession): boolean;
  indicatorImageInTableColumn(in_: NSTableColumn): NSImage;
  insertRowsAtIndexesWithAnimation(at: IndexSet, withAnimation: NSTableView.AnimationOptions): void;
  isAccessibilityFocused(): boolean;
  isColumnSelected(_: number): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  isRowSelected(_: number): boolean;
  makeViewWithIdentifierOwner(withIdentifier: string, owner?: any): NSView;
  moveColumnToColumn(_: number, toColumn: number): void;
  moveRowAtIndexToIndex(at: number, to: number): void;
  noteHeightOfRowsWithIndexesChanged(withIndexesChanged: IndexSet): void;
  noteNumberOfRowsChanged(): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  rectOfColumn(ofColumn: number): NSRect;
  rectOfRow(ofRow: number): NSRect;
  registerNibForIdentifier(_?: NSNib, forIdentifier: string): void;
  reloadData(): void;
  reloadDataForRowIndexesColumnIndexes(forRowIndexes: IndexSet, columnIndexes: IndexSet): void;
  removeRowsAtIndexesWithAnimation(at: IndexSet, withAnimation: NSTableView.AnimationOptions): void;
  removeTableColumn(_: NSTableColumn): void;
  respondsToSelector(_: string): boolean;
  rowAtPoint(at: NSPoint): number;
  rowForView(for_: NSView): number;
  rowViewAtRowMakeIfNecessary(atRow: number, makeIfNecessary: boolean): NSTableRowView;
  rowsInRect(in_: NSRect): NSRange;
  scrollColumnToVisible(_: number): void;
  scrollRowToVisible(_: number): void;
  selectColumnIndexesByExtendingSelection(_: IndexSet, byExtendingSelection: boolean): void;
  selectRowIndexesByExtendingSelection(_: IndexSet, byExtendingSelection: boolean): void;
  self(): this;
  setAccessibilitySelectedRows(_: NSArray<NSAccessibilityRow>): void;
  setDraggingSourceOperationMaskForLocal(_: NSDragOperation, forLocal: boolean): void;
  setDropRowDropOperation(_: number, dropOperation: NSTableView.DropOperation): void;
  setIndicatorImageInTableColumn(_?: NSImage, in_: NSTableColumn): void;
  sizeLastColumnToFit(): void;
  tableColumnWithIdentifier(withIdentifier: string): NSTableColumn;
  textDidBeginEditing(_: Notification): void;
  textDidChange(_: Notification): void;
  textDidEndEditing(_: Notification): void;
  textShouldBeginEditing(_: NSText): boolean;
  textShouldEndEditing(_: NSText): boolean;
  textViewURLForContentsOfTextAttachmentAtIndex(_: NSTextView, urlForContentsOf: NSTextAttachment, at: number): NSURL;
  textViewCandidatesForSelectedRange(_: NSTextView, candidates: NSArray<NSTextCheckingResult>, forSelectedRange: NSRange): NSArray<NSTextCheckingResult>;
  textViewCandidatesForSelectedRange(_: NSTextView, candidatesForSelectedRange: NSRange): NSArray<any>;
  textViewClickedOnCellInRectAtIndex(_: NSTextView, clickedOn: NSTextAttachmentCellProtocol, in_: NSRect, at: number): void;
  textViewClickedOnLinkAtIndex(_: NSTextView, clickedOnLink: any, at: number): boolean;
  textViewCompletionsForPartialWordRangeIndexOfSelectedItem(_: NSTextView, completions: NSArray<string>, forPartialWordRange: NSRange, indexOfSelectedItem?: number): NSArray<string>;
  textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount(_: NSTextView, didCheckTextIn: NSRange, types: number, options: NSDictionary<string, any>, results: NSArray<NSTextCheckingResult>, orthography: NSOrthography, wordCount: number): NSArray<NSTextCheckingResult>;
  textViewDoCommandBySelector(_: NSTextView, doCommandBy: string): boolean;
  textViewDoubleClickedOnCellInRectAtIndex(_: NSTextView, doubleClickedOn: NSTextAttachmentCellProtocol, in_: NSRect, at: number): void;
  textViewDraggedCellInRectEventAtIndex(_: NSTextView, draggedCell: NSTextAttachmentCellProtocol, in_: NSRect, event: NSEvent, at: number): void;
  textViewMenuForEventAtIndex(_: NSTextView, menu: NSMenu, for_: NSEvent, at: number): NSMenu;
  textViewShouldChangeTextInRangeReplacementString(_: NSTextView, shouldChangeTextIn: NSRange, replacementString?: string): boolean;
  textViewShouldChangeTextInRangesReplacementStrings(_: NSTextView, shouldChangeTextInRanges: NSArray<NSValue>, replacementStrings?: NSArray<string>): boolean;
  textViewShouldChangeTypingAttributesToAttributes(_: NSTextView, shouldChangeTypingAttributes: NSDictionary<string, any>, toAttributes: NSDictionary<string, any>): NSDictionary<string, any>;
  textViewShouldSelectCandidateAtIndex(_: NSTextView, shouldSelectCandidateAt: number): boolean;
  textViewShouldSetSpellingStateRange(_: NSTextView, shouldSetSpellingState: number, range: NSRange): number;
  textViewShouldUpdateTouchBarItemIdentifiers(_: NSTextView, shouldUpdateTouchBarItemIdentifiers: NSArray<string>): NSArray<string>;
  textViewWillChangeSelectionFromCharacterRangeToCharacterRange(_: NSTextView, willChangeSelectionFromCharacterRange: NSRange, toCharacterRange: NSRange): NSRange;
  textViewWillChangeSelectionFromCharacterRangesToCharacterRanges(_: NSTextView, willChangeSelectionFromCharacterRanges: NSArray<NSValue>, toCharacterRanges: NSArray<NSValue>): NSArray<NSValue>;
  textViewWillCheckTextInRangeOptionsTypes(_: NSTextView, willCheckTextIn: NSRange, options: NSDictionary<string, any>, types: number): NSDictionary<string, any>;
  textViewWillDisplayToolTipForCharacterAtIndex(_: NSTextView, willDisplayToolTip: string, forCharacterAt: number): string;
  textViewWillShowSharingServicePickerForItems(_: NSTextView, willShow: NSSharingServicePicker, forItems: NSArray<any>): NSSharingServicePicker;
  textViewWritablePasteboardTypesForCellAtIndex(_: NSTextView, writablePasteboardTypesFor: NSTextAttachmentCellProtocol, at: number): NSArray<string>;
  textViewWriteCellAtIndexToPasteboardType(_: NSTextView, write: NSTextAttachmentCellProtocol, at: number, to: NSPasteboard, type: string): boolean;
  textViewDidChangeSelection(_: Notification): void;
  textViewDidChangeTypingAttributes(_: Notification): void;
  tile(): void;
  undoManagerForTextView(for_: NSTextView): UndoManager;
  unhideRowsAtIndexesWithAnimation(at: IndexSet, withAnimation: NSTableView.AnimationOptions): void;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
  viewAtColumnRowMakeIfNecessary(atColumn: number, row: number, makeIfNecessary: boolean): NSView;
}

declare var NSTableViewColumnDidMoveNotification: string;

declare var NSTableViewColumnDidResizeNotification: string;

interface NSTableViewDataSource extends NSObject {
  numberOfRowsInTableView?(in_: NSTableView): number;
  tableViewObjectValueForTableColumnRow?(_: NSTableView, objectValueFor?: NSTableColumn, row: number): any;
  tableViewSetObjectValueForTableColumnRow?(_: NSTableView, setObjectValue?: any, for_?: NSTableColumn, row: number): void;
  tableViewDraggingSessionWillBeginAtPointForRowIndexes?(_: NSTableView, draggingSession: NSDraggingSession, willBeginAt: NSPoint, forRowIndexes: IndexSet): void;
  tableViewDraggingSessionEndedAtPointOperation?(_: NSTableView, draggingSession: NSDraggingSession, endedAt: NSPoint, operation: NSDragOperation): void;
  tableViewWriteRowsWithIndexesToPasteboard?(_: NSTableView, writeRowsWith: IndexSet, to: NSPasteboard): boolean;
  tableViewAcceptDropRowDropOperation?(_: NSTableView, acceptDrop: NSDraggingInfo, row: number, dropOperation: NSTableView.DropOperation): boolean;
  tableViewPasteboardWriterForRow?(_: NSTableView, pasteboardWriterForRow: number): NSPasteboardWriting;
  tableViewSortDescriptorsDidChange?(_: NSTableView, sortDescriptorsDidChange: NSArray<NSSortDescriptor>): void;
  tableViewUpdateDraggingItemsForDrag?(_: NSTableView, updateDraggingItemsForDrag: NSDraggingInfo): void;
  tableViewValidateDropProposedRowProposedDropOperation?(_: NSTableView, validateDrop: NSDraggingInfo, proposedRow: number, proposedDropOperation: NSTableView.DropOperation): NSDragOperation;
}

declare var NSTableViewDataSource: {
  prototype: NSTableViewDataSource;
};

interface NSTableViewDelegate extends NSControlTextEditingDelegate {
  selectionShouldChangeInTableView?(in_: NSTableView): boolean;
  tableViewViewForTableColumnRow?(_: NSTableView, viewFor?: NSTableColumn, row: number): NSView;
  tableViewDidAddRowViewForRow?(_: NSTableView, didAdd: NSTableRowView, forRow: number): void;
  tableViewDidRemoveRowViewForRow?(_: NSTableView, didRemove: NSTableRowView, forRow: number): void;
  tableViewWillDisplayCellForTableColumnRow?(_: NSTableView, willDisplayCell: any, for_?: NSTableColumn, row: number): void;
  tableViewShouldEditTableColumnRow?(_: NSTableView, shouldEdit?: NSTableColumn, row: number): boolean;
  tableViewToolTipForCellRectTableColumnRowMouseLocation?(_: NSTableView, toolTipFor: NSCell, rect: NSRect, tableColumn?: NSTableColumn, row: number, mouseLocation: NSPoint): string;
  tableViewShouldShowCellExpansionForTableColumnRow?(_: NSTableView, shouldShowCellExpansionFor?: NSTableColumn, row: number): boolean;
  tableViewShouldTrackCellForTableColumnRow?(_: NSTableView, shouldTrackCell: NSCell, for_?: NSTableColumn, row: number): boolean;
  tableViewDataCellForTableColumnRow?(_: NSTableView, dataCellFor?: NSTableColumn, row: number): NSCell;
  tableViewShouldSelectTableColumn?(_: NSTableView, shouldSelect?: NSTableColumn): boolean;
  tableViewMouseDownInHeaderOfTableColumn?(_: NSTableView, mouseDownInHeaderOf: NSTableColumn): void;
  tableViewDidClickTableColumn?(_: NSTableView, didClick: NSTableColumn): void;
  tableViewDidDragTableColumn?(_: NSTableView, didDrag: NSTableColumn): void;
  tableViewTypeSelectStringForTableColumnRow?(_: NSTableView, typeSelectStringFor?: NSTableColumn, row: number): string;
  tableViewNextTypeSelectMatchFromRowToRowForString?(_: NSTableView, nextTypeSelectMatchFromRow: number, toRow: number, for_: string): number;
  tableViewShouldTypeSelectForEventWithCurrentSearchString?(_: NSTableView, shouldTypeSelectFor: NSEvent, withCurrentSearch?: string): boolean;
  tableViewHeightOfRow?(_: NSTableView, heightOfRow: number): number;
  tableViewIsGroupRow?(_: NSTableView, isGroupRow: number): boolean;
  tableViewRowActionsForRowEdge?(_: NSTableView, rowActionsForRow: number, edge: NSTableView.RowActionEdge): NSArray<NSTableViewRowAction>;
  tableViewRowViewForRow?(_: NSTableView, rowViewForRow: number): NSTableRowView;
  tableViewSelectionIndexesForProposedSelection?(_: NSTableView, selectionIndexesForProposedSelection: IndexSet): IndexSet;
  tableViewShouldReorderColumnToColumn?(_: NSTableView, shouldReorderColumn: number, toColumn: number): boolean;
  tableViewShouldSelectRow?(_: NSTableView, shouldSelectRow: number): boolean;
  tableViewSizeToFitWidthOfColumn?(_: NSTableView, sizeToFitWidthOfColumn: number): number;
  tableViewColumnDidMove?(_: Notification): void;
  tableViewColumnDidResize?(_: Notification): void;
  tableViewSelectionDidChange?(_: Notification): void;
  tableViewSelectionIsChanging?(_: Notification): void;
}

declare var NSTableViewDelegate: {
  prototype: NSTableViewDelegate;
};

declare class NSTableViewRowAction extends NSObject implements NSCopying {
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  image: NSImage;
  setImage(_: NSImage)
  readonly style: NSTableViewRowAction.Style;
  title: string;
  setTitle(_: string)
}

declare var NSTableViewRowViewKey: string;

declare var NSTableViewSelectionDidChangeNotification: string;

declare var NSTableViewSelectionIsChangingNotification: string;

declare var NSTargetBinding: string;

declare var NSTargetTextScalingDocumentOption: string;

declare class NSText extends NSView implements NSChangeSpelling, NSIgnoreMisspelledWords {
  alignment: NSTextAlignment;
  setAlignment(_: NSTextAlignment)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  baseWritingDirection: NSWritingDirection;
  setBaseWritingDirection(_: NSWritingDirection)
  delegate: NSTextDelegate;
  setDelegate(_: NSTextDelegate)
  drawsBackground: boolean;
  setDrawsBackground(_: boolean)
  isEditable: boolean;
  setEditable(_: boolean)
  isFieldEditor: boolean;
  setFieldEditor(_: boolean)
  font: NSFont;
  setFont(_: NSFont)
  isHorizontallyResizable: boolean;
  setHorizontallyResizable(_: boolean)
  importsGraphics: boolean;
  setImportsGraphics(_: boolean)
  maxSize: NSSize;
  setMaxSize(_: NSSize)
  minSize: NSSize;
  setMinSize(_: NSSize)
  isRichText: boolean;
  setRichText(_: boolean)
  readonly isRulerVisible: boolean;
  isSelectable: boolean;
  setSelectable(_: boolean)
  selectedRange: NSRange;
  setSelectedRange(_: NSRange)
  string: string;
  setString(_: string)
  textColor: NSColor;
  setTextColor(_: NSColor)
  usesFontPanel: boolean;
  setUsesFontPanel(_: boolean)
  isVerticallyResizable: boolean;
  setVerticallyResizable(_: boolean)
  RTFDFromRange(from: NSRange): Data;
  RTFFromRange(from: NSRange): Data;
  alignCenter(_?: any): void;
  alignLeft(_?: any): void;
  alignRight(_?: any): void;
  changeSpelling(_?: any): void;
  checkSpelling(_?: any): void;
  copy(_?: any): void;
  copyFont(_?: any): void;
  copyRuler(_?: any): void;
  cut(_?: any): void;
  delete(_?: any): void;
  ignoreSpelling(_?: any): void;
  paste(_?: any): void;
  pasteFont(_?: any): void;
  pasteRuler(_?: any): void;
  readRTFDFromFile(fromFile: string): boolean;
  replaceCharactersInRangeWithRTF(in_: NSRange, withRTF: Data): void;
  replaceCharactersInRangeWithRTFD(in_: NSRange, withRTFD: Data): void;
  replaceCharactersInRangeWithString(in_: NSRange, with_: string): void;
  scrollRangeToVisible(_: NSRange): void;
  setFontRange(_: NSFont, range: NSRange): void;
  setTextColorRange(_?: NSColor, range: NSRange): void;
  showGuessPanel(_?: any): void;
  sizeToFit(): void;
  subscript(_?: any): void;
  superscript(_?: any): void;
  toggleRuler(_?: any): void;
  underline(_?: any): void;
  unscript(_?: any): void;
  writeRTFDToFileAtomically(toFile: string, atomically: boolean): boolean;
}

declare class NSTextAlternatives extends NSObject implements NSSecureCoding {
  readonly alternativeStrings: NSArray<string>;
  readonly primaryString: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithPrimaryStringAlternativeStrings(primaryString: string, alternativeStrings: NSArray<string>): this;
  noteSelectedAlternativeString(_: string): void;
}

declare var NSTextAlternativesAttributeName: string;

declare var NSTextAlternativesSelectedAlternativeStringNotification: string;

declare class NSTextAttachment extends NSObject implements NSSecureCoding, NSTextAttachmentContainer {
  attachmentCell: NSTextAttachmentCellProtocol;
  setAttachmentCell(_: NSTextAttachmentCellProtocol)
  bounds: NSRect;
  setBounds(_: NSRect)
  contents: Data;
  setContents(_: Data)
  fileType: string;
  setFileType(_: string)
  fileWrapper: FileWrapper;
  setFileWrapper(_: FileWrapper)
  image: NSImage;
  setImage(_: NSImage)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  attachmentBoundsForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(for_?: NSTextContainer, proposedLineFragment: NSRect, glyphPosition: NSPoint, characterIndex: number): NSRect;
  conformsToProtocol(to: any /* Protocol */): boolean;
  encodeWithCoder(with_: NSCoder): void;
  imageForBoundsTextContainerCharacterIndex(forBounds: NSRect, textContainer?: NSTextContainer, characterIndex: number): NSImage;
  static createWithCoder(coder: NSCoder): this;
  static createWithDataOfType(data?: Data, ofType?: string): this;
  static createWithFileWrapper(fileWrapper?: FileWrapper): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class NSTextAttachmentCell extends NSCell implements NSTextAttachmentCellProtocol {
  attachment: NSTextAttachment;
  setAttachment(_: NSTextAttachment) // inherited from NSTextAttachmentCellProtocol
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  cellBaselineOffset(): NSPoint;
  cellFrameForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(_: NSTextContainer, proposedLineFragment: NSRect, glyphPosition: NSPoint, characterIndex: number): NSRect;
  cellSize(): NSSize;
  conformsToProtocol(to: any /* Protocol */): boolean;
  drawWithFrameInView(_: NSRect, inView?: NSView): void;
  drawWithFrameInViewCharacterIndex(_: NSRect, inView?: NSView, characterIndex: number): void;
  drawWithFrameInViewCharacterIndexLayoutManager(_: NSRect, inView?: NSView, characterIndex: number, layoutManager: NSLayoutManager): void;
  highlightWithFrameInView(_: boolean, withFrame: NSRect, inView?: NSView): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  trackMouseInRectOfViewAtCharacterIndexUntilMouseUp(_: NSEvent, inRect: NSRect, ofView?: NSView, atCharacterIndex: number, untilMouseUp: boolean): boolean;
  trackMouseInRectOfViewUntilMouseUp(_: NSEvent, inRect: NSRect, ofView?: NSView, untilMouseUp: boolean): boolean;
  wantsToTrackMouse(): boolean;
  wantsToTrackMouseForEventInRectOfViewAtCharacterIndex(_: NSEvent, inRect: NSRect, ofView?: NSView, atCharacterIndex: number): boolean;
}

interface NSTextAttachmentCellProtocol extends NSObject {
  attachment: NSTextAttachment;
  setAttachment(_: NSTextAttachment)
  cellBaselineOffset(): NSPoint;
  cellFrameForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(_: NSTextContainer, proposedLineFragment: NSRect, glyphPosition: NSPoint, characterIndex: number): NSRect;
  cellSize(): NSSize;
  drawWithFrameInView(_: NSRect, inView?: NSView): void;
  drawWithFrameInViewCharacterIndex(_: NSRect, inView?: NSView, characterIndex: number): void;
  drawWithFrameInViewCharacterIndexLayoutManager(_: NSRect, inView?: NSView, characterIndex: number, layoutManager: NSLayoutManager): void;
  highlightWithFrameInView(_: boolean, withFrame: NSRect, inView?: NSView): void;
  trackMouseInRectOfViewAtCharacterIndexUntilMouseUp(_: NSEvent, inRect: NSRect, ofView?: NSView, atCharacterIndex: number, untilMouseUp: boolean): boolean;
  trackMouseInRectOfViewUntilMouseUp(_: NSEvent, inRect: NSRect, ofView?: NSView, untilMouseUp: boolean): boolean;
  wantsToTrackMouse(): boolean;
  wantsToTrackMouseForEventInRectOfViewAtCharacterIndex(_: NSEvent, inRect: NSRect, ofView?: NSView, atCharacterIndex: number): boolean;
}

declare var NSTextAttachmentCellProtocol: {
  prototype: NSTextAttachmentCellProtocol;
};

interface NSTextAttachmentContainer extends NSObject {
  attachmentBoundsForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(for_?: NSTextContainer, proposedLineFragment: NSRect, glyphPosition: NSPoint, characterIndex: number): NSRect;
  imageForBoundsTextContainerCharacterIndex(forBounds: NSRect, textContainer?: NSTextContainer, characterIndex: number): NSImage;
}

declare var NSTextAttachmentContainer: {
  prototype: NSTextAttachmentContainer;
};

declare class NSTextBlock extends NSObject implements NSCopying, NSSecureCoding {
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  readonly contentWidth: number;
  readonly contentWidthValueType: NSTextBlock.ValueType;
  verticalAlignment: NSTextBlock.VerticalAlignment;
  setVerticalAlignment(_: NSTextBlock.VerticalAlignment)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  borderColorForEdge(for_: NSRectEdge): NSColor;
  boundsRectForContentRectInRectTextContainerCharacterRange(forContentRect: NSRect, in_: NSRect, textContainer: NSTextContainer, characterRange: NSRange): NSRect;
  drawBackgroundWithFrameInViewCharacterRangeLayoutManager(withFrame: NSRect, in_: NSView, characterRange: NSRange, layoutManager: NSLayoutManager): void;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  rectForLayoutAtPointInRectTextContainerCharacterRange(at: NSPoint, in_: NSRect, textContainer: NSTextContainer, characterRange: NSRange): NSRect;
  setBorderColor(_?: NSColor): void;
  setBorderColorForEdge(_?: NSColor, for_: NSRectEdge): void;
  setContentWidthType(_: number, type: NSTextBlock.ValueType): void;
  setValueTypeForDimension(_: number, type: NSTextBlock.ValueType, for_: NSTextBlock.Dimension): void;
  setWidthTypeForLayer(_: number, type: NSTextBlock.ValueType, for_: NSTextBlock.Layer): void;
  setWidthTypeForLayerEdge(_: number, type: NSTextBlock.ValueType, for_: NSTextBlock.Layer, edge: NSRectEdge): void;
  valueForDimension(for_: NSTextBlock.Dimension): number;
  valueTypeForDimension(for_: NSTextBlock.Dimension): NSTextBlock.ValueType;
  widthForLayerEdge(for_: NSTextBlock.Layer, edge: NSRectEdge): number;
  widthValueTypeForLayerEdge(for_: NSTextBlock.Layer, edge: NSRectEdge): NSTextBlock.ValueType;
}

interface NSTextCheckingClient extends NSTextInputClient, NSTextInputTraits {
  addAnnotationsRange(_: NSDictionary<string, string>, range: NSRange): void;
  annotatedSubstringForProposedRangeActualRange(forProposedRange: NSRange, actualRange?: NSRange): NSAttributedString;
  candidateListTouchBarItem(): NSCandidateListTouchBarItem<any>;
  removeAnnotationRange(_: string, range: NSRange): void;
  replaceCharactersInRangeWithAnnotatedString(in_: NSRange, withAnnotatedString: NSAttributedString): void;
  selectAndShowRange(_: NSRange): void;
  setAnnotationsRange(_: NSDictionary<string, string>, range: NSRange): void;
  viewForRangeFirstRectActualRange(for_: NSRange, firstRect?: NSRect, actualRange?: NSRange): NSView;
}

declare var NSTextCheckingClient: {
  prototype: NSTextCheckingClient;
};

declare class NSTextCheckingController extends NSObject {
  readonly client: NSTextCheckingClient;
  spellCheckerDocumentTag: number;
  setSpellCheckerDocumentTag(_: number)
  changeSpelling(_?: any): void;
  checkSpelling(_?: any): void;
  checkTextInDocument(_?: any): void;
  checkTextInRangeTypesOptions(in_: NSRange, types: number, options: NSDictionary<string, any>): void;
  checkTextInSelection(_?: any): void;
  considerTextCheckingForRange(for_: NSRange): void;
  didChangeSelectedRange(): void;
  didChangeTextInRange(in_: NSRange): void;
  ignoreSpelling(_?: any): void;
  static createWithClient(client: NSTextCheckingClient): this;
  insertedTextInRange(in_: NSRange): void;
  invalidate(): void;
  menuAtIndexClickedOnSelectionEffectiveRange(at: number, clickedOnSelection: boolean, effectiveRange: NSRange): NSMenu;
  orderFrontSubstitutionsPanel(_?: any): void;
  showGuessPanel(_?: any): void;
  updateCandidates(): void;
  validAnnotations(): NSArray<string>;
}

declare var NSTextCheckingDocumentAuthorKey: string;

declare var NSTextCheckingDocumentTitleKey: string;

declare var NSTextCheckingDocumentURLKey: string;

declare var NSTextCheckingOrthographyKey: string;

declare var NSTextCheckingQuotesKey: string;

declare var NSTextCheckingReferenceDateKey: string;

declare var NSTextCheckingReferenceTimeZoneKey: string;

declare var NSTextCheckingRegularExpressionsKey: string;

declare var NSTextCheckingReplacementsKey: string;

declare var NSTextCheckingSelectedRangeKey: string;

declare var NSTextColorBinding: string;

declare class NSTextContainer extends NSObject implements NSSecureCoding, NSTextLayoutOrientationProvider {
  containerSize: NSSize;
  setContainerSize(_: NSSize)
  exclusionPaths: NSArray<NSBezierPath>;
  setExclusionPaths(_: NSArray<NSBezierPath>)
  heightTracksTextView: boolean;
  setHeightTracksTextView(_: boolean)
  layoutManager: NSLayoutManager;
  setLayoutManager(_: NSLayoutManager)
  lineBreakMode: NSLineBreakMode;
  setLineBreakMode(_: NSLineBreakMode)
  lineFragmentPadding: number;
  setLineFragmentPadding(_: number)
  maximumNumberOfLines: number;
  setMaximumNumberOfLines(_: number)
  readonly isSimpleRectangularTextContainer: boolean;
  size: NSSize;
  setSize(_: NSSize)
  textView: NSTextView;
  setTextView(_: NSTextView)
  widthTracksTextView: boolean;
  setWidthTracksTextView(_: boolean)
  readonly layoutOrientation: NSLayoutManager.TextLayoutOrientation; // inherited from NSTextLayoutOrientationProvider
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithContainerSize(containerSize: NSSize): this;
  static createWithSize(size: NSSize): this;
  lineFragmentRectForProposedRectAtIndexWritingDirectionRemainingRect(forProposedRect: NSRect, at: number, writingDirection: NSWritingDirection, remaining?: NSRect): NSRect;
  lineFragmentRectForProposedRectSweepDirectionMovementDirectionRemainingRect(forProposedRect: NSRect, sweepDirection: NSLineSweepDirection, movementDirection: NSLineMovementDirection, remaining?: NSRect): NSRect;
  replaceLayoutManager(_: NSLayoutManager): void;
}

interface NSTextDelegate extends NSObject {
  textDidBeginEditing?(_: Notification): void;
  textDidChange?(_: Notification): void;
  textDidEndEditing?(_: Notification): void;
  textShouldBeginEditing?(_: NSText): boolean;
  textShouldEndEditing?(_: NSText): boolean;
}

declare var NSTextDelegate: {
  prototype: NSTextDelegate;
};

declare var NSTextDidBeginEditingNotification: string;

declare var NSTextDidChangeNotification: string;

declare var NSTextDidEndEditingNotification: string;

declare var NSTextEffectAttributeName: string;

declare var NSTextEffectLetterpressStyle: string;

declare var NSTextEncodingNameDocumentAttribute: string;

declare var NSTextEncodingNameDocumentOption: string;

declare class NSTextField extends NSControl implements NSAccessibilityNavigableStaticText, NSUserInterfaceValidations {
  static labelWithAttributedString(labelWithAttributedString: NSAttributedString): NSTextField;
  static labelWithString(labelWithString: string): NSTextField;
  static wrappingLabelWithString(wrappingLabelWithString: string): NSTextField;
  allowsCharacterPickerTouchBarItem: boolean;
  setAllowsCharacterPickerTouchBarItem(_: boolean)
  allowsDefaultTighteningForTruncation: boolean;
  setAllowsDefaultTighteningForTruncation(_: boolean)
  allowsEditingTextAttributes: boolean;
  setAllowsEditingTextAttributes(_: boolean)
  isAutomaticTextCompletionEnabled: boolean;
  setAutomaticTextCompletionEnabled(_: boolean)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  bezelStyle: NSTextField.BezelStyle;
  setBezelStyle(_: NSTextField.BezelStyle)
  isBezeled: boolean;
  setBezeled(_: boolean)
  isBordered: boolean;
  setBordered(_: boolean)
  delegate: NSTextFieldDelegate;
  setDelegate(_: NSTextFieldDelegate)
  drawsBackground: boolean;
  setDrawsBackground(_: boolean)
  isEditable: boolean;
  setEditable(_: boolean)
  importsGraphics: boolean;
  setImportsGraphics(_: boolean)
  maximumNumberOfLines: number;
  setMaximumNumberOfLines(_: number)
  placeholderAttributedString: NSAttributedString;
  setPlaceholderAttributedString(_: NSAttributedString)
  placeholderString: string;
  setPlaceholderString(_: string)
  preferredMaxLayoutWidth: number;
  setPreferredMaxLayoutWidth(_: number)
  isSelectable: boolean;
  setSelectable(_: boolean)
  textColor: NSColor;
  setTextColor(_: NSColor)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityAttributedStringForRange(for_: NSRange): NSAttributedString;
  accessibilityFrame(): NSRect;
  accessibilityFrameForRange(for_: NSRange): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLineForIndex(for_: number): number;
  accessibilityParent(): any;
  accessibilityRangeForLine(forLine: number): NSRange;
  accessibilityStringForRange(for_: NSRange): string;
  accessibilityValue(): string;
  accessibilityVisibleCharacterRange(): NSRange;
  conformsToProtocol(to: any /* Protocol */): boolean;
  isAccessibilityFocused(): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  selectText(_?: any): void;
  self(): this;
  textDidBeginEditing(_: Notification): void;
  textDidChange(_: Notification): void;
  textDidEndEditing(_: Notification): void;
  textShouldBeginEditing(_: NSText): boolean;
  textShouldEndEditing(_: NSText): boolean;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}

declare var NSTextFieldAndStepperDatePickerStyle: NSDatePicker.Style;

declare class NSTextFieldCell extends NSActionCell {
  allowedInputSourceLocales: NSArray<string>;
  setAllowedInputSourceLocales(_: NSArray<string>)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  bezelStyle: NSTextField.BezelStyle;
  setBezelStyle(_: NSTextField.BezelStyle)
  drawsBackground: boolean;
  setDrawsBackground(_: boolean)
  placeholderAttributedString: NSAttributedString;
  setPlaceholderAttributedString(_: NSAttributedString)
  placeholderString: string;
  setPlaceholderString(_: string)
  textColor: NSColor;
  setTextColor(_: NSColor)
  setWantsNotificationForMarkedText(_: boolean): void;
}

declare var NSTextFieldDatePickerStyle: NSDatePicker.Style;

interface NSTextFieldDelegate extends NSControlTextEditingDelegate {
  textFieldTextViewShouldSelectCandidateAtIndex?(_: NSTextField, textView: NSTextView, shouldSelectCandidateAt: number): boolean;
  textFieldTextViewCandidatesForSelectedRange?(_: NSTextField, textView: NSTextView, candidates: NSArray<NSTextCheckingResult>, forSelectedRange: NSRange): NSArray<NSTextCheckingResult>;
  textFieldTextViewCandidatesForSelectedRange?(_: NSTextField, textView: NSTextView, candidatesForSelectedRange: NSRange): NSArray<any>;
}

declare var NSTextFieldDelegate: {
  prototype: NSTextFieldDelegate;
};

declare class NSTextFinder extends NSObject implements NSCoding {
  static drawIncrementalMatchHighlightInRect(in_: NSRect): void;
  client: NSTextFinderClient;
  setClient(_: NSTextFinderClient)
  findBarContainer: NSTextFinderBarContainer;
  setFindBarContainer(_: NSTextFinderBarContainer)
  findIndicatorNeedsUpdate: boolean;
  setFindIndicatorNeedsUpdate(_: boolean)
  readonly incrementalMatchRanges: NSArray<NSValue>;
  isIncrementalSearchingEnabled: boolean;
  setIncrementalSearchingEnabled(_: boolean)
  incrementalSearchingShouldDimContentView: boolean;
  setIncrementalSearchingShouldDimContentView(_: boolean)
  cancelFindIndicator(): void;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  noteClientStringWillChange(): void;
  performAction(_: NSTextFinder.Action): void;
  validateAction(_: NSTextFinder.Action): boolean;
}

interface NSTextFinderBarContainer extends NSObject {
  findBarView: NSView;
  setFindBarView(_: NSView)
  isFindBarVisible: boolean;
  setFindBarVisible(_: boolean)
  contentView: NSView;
  findBarViewDidChangeHeight(): void;
}

declare var NSTextFinderBarContainer: {
  prototype: NSTextFinderBarContainer;
};

declare var NSTextFinderCaseInsensitiveKey: string;

interface NSTextFinderClient extends NSObject {
  allowsMultipleSelection?: boolean;
  isEditable?: boolean;
  firstSelectedRange?: NSRange;
  isSelectable?: boolean;
  selectedRanges?: NSArray<NSValue>;
  setSelectedRanges(_: NSArray<NSValue>)
  string?: string;
  visibleCharacterRanges?: NSArray<NSValue>;
  contentViewAtIndexEffectiveCharacterRange?(at: number, effectiveCharacterRange: NSRange): NSView;
  didReplaceCharacters?(): void;
  drawCharactersInRangeForContentView?(in_: NSRange, forContentView: NSView): void;
  rectsForCharacterRange?(forCharacterRange: NSRange): NSArray<NSValue>;
  replaceCharactersInRangeWithString?(in_: NSRange, with_: string): void;
  scrollRangeToVisible?(_: NSRange): void;
  shouldReplaceCharactersInRangesWithStrings?(inRanges: NSArray<NSValue>, with_: NSArray<string>): boolean;
  stringAtIndexEffectiveRangeEndsWithSearchBoundary?(at: number, effectiveRange: NSRange, endsWithSearchBoundary: boolean): string;
  stringLength?(): number;
}

declare var NSTextFinderClient: {
  prototype: NSTextFinderClient;
};

declare var NSTextFinderMatchingTypeKey: string;

interface NSTextInput {
}

declare var NSTextInput: {
  prototype: NSTextInput;
};

interface NSTextInputClient {
  attributedString?(): NSAttributedString;
  attributedSubstringForProposedRangeActualRange(forProposedRange: NSRange, actualRange?: NSRange): NSAttributedString;
  baselineDeltaForCharacterAtIndex?(at: number): number;
  characterIndexForPoint(for_: NSPoint): number;
  doCommandBySelector(by: string): void;
  drawsVerticallyForCharacterAtIndex?(at: number): boolean;
  firstRectForCharacterRangeActualRange(forCharacterRange: NSRange, actualRange?: NSRange): NSRect;
  fractionOfDistanceThroughGlyphForPoint?(for_: NSPoint): number;
  hasMarkedText(): boolean;
  insertTextReplacementRange(_: any, replacementRange: NSRange): void;
  markedRange(): NSRange;
  selectedRange(): NSRange;
  setMarkedTextSelectedRangeReplacementRange(_: any, selectedRange: NSRange, replacementRange: NSRange): void;
  unmarkText(): void;
  validAttributesForMarkedText(): NSArray<string>;
  windowLevel?(): number;
}

declare var NSTextInputClient: {
  prototype: NSTextInputClient;
};

declare class NSTextInputContext extends NSObject {
  static localizedNameForInputSource(forInputSource: string): string;
  acceptsGlyphInfo: boolean;
  setAcceptsGlyphInfo(_: boolean)
  allowedInputSourceLocales: NSArray<string>;
  setAllowedInputSourceLocales(_: NSArray<string>)
  readonly client: NSTextInputClient;
  readonly keyboardInputSources: NSArray<string>;
  selectedKeyboardInputSource: string;
  setSelectedKeyboardInputSource(_: string)
  static currentInputContext(): NSTextInputContext;
  activate(): void;
  deactivate(): void;
  discardMarkedText(): void;
  handleEvent(_: NSEvent): boolean;
  static createWithClient(client: NSTextInputClient): this;
  invalidateCharacterCoordinates(): void;
}

declare var NSTextInputContextKeyboardSelectionDidChangeNotification: string;

interface NSTextInputTraits {
  autocorrectionType?: NSTextInputTraitType;
  setAutocorrectionType(_: NSTextInputTraitType)
  dataDetectionType?: NSTextInputTraitType;
  setDataDetectionType(_: NSTextInputTraitType)
  grammarCheckingType?: NSTextInputTraitType;
  setGrammarCheckingType(_: NSTextInputTraitType)
  linkDetectionType?: NSTextInputTraitType;
  setLinkDetectionType(_: NSTextInputTraitType)
  smartDashesType?: NSTextInputTraitType;
  setSmartDashesType(_: NSTextInputTraitType)
  smartInsertDeleteType?: NSTextInputTraitType;
  setSmartInsertDeleteType(_: NSTextInputTraitType)
  smartQuotesType?: NSTextInputTraitType;
  setSmartQuotesType(_: NSTextInputTraitType)
  spellCheckingType?: NSTextInputTraitType;
  setSpellCheckingType(_: NSTextInputTraitType)
  textCompletionType?: NSTextInputTraitType;
  setTextCompletionType(_: NSTextInputTraitType)
  textReplacementType?: NSTextInputTraitType;
  setTextReplacementType(_: NSTextInputTraitType)
}

declare var NSTextInputTraits: {
  prototype: NSTextInputTraits;
};

interface NSTextLayoutOrientationProvider {
  layoutOrientation: NSLayoutManager.TextLayoutOrientation;
}

declare var NSTextLayoutOrientationProvider: {
  prototype: NSTextLayoutOrientationProvider;
};

declare var NSTextLayoutSectionOrientation: string;

declare var NSTextLayoutSectionRange: string;

declare var NSTextLayoutSectionsAttribute: string;

declare var NSTextLineTooLongException: string;

declare class NSTextList extends NSObject implements NSCopying, NSSecureCoding {
  readonly listOptions: NSTextList.Options;
  readonly markerFormat: string;
  startingItemNumber: number;
  setStartingItemNumber(_: number)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithMarkerFormatOptions(markerFormat: string, options: number): this;
  markerForItemNumber(forItemNumber: number): string;
}

declare var NSTextListMarkerBox: string;

declare var NSTextListMarkerCheck: string;

declare var NSTextListMarkerCircle: string;

declare var NSTextListMarkerDecimal: string;

declare var NSTextListMarkerDiamond: string;

declare var NSTextListMarkerDisc: string;

declare var NSTextListMarkerHyphen: string;

declare var NSTextListMarkerLowercaseAlpha: string;

declare var NSTextListMarkerLowercaseHexadecimal: string;

declare var NSTextListMarkerLowercaseLatin: string;

declare var NSTextListMarkerLowercaseRoman: string;

declare var NSTextListMarkerOctal: string;

declare var NSTextListMarkerSquare: string;

declare var NSTextListMarkerUppercaseAlpha: string;

declare var NSTextListMarkerUppercaseHexadecimal: string;

declare var NSTextListMarkerUppercaseLatin: string;

declare var NSTextListMarkerUppercaseRoman: string;

declare var NSTextMovementUserInfoKey: string;

declare var NSTextNoSelectionException: string;

declare var NSTextReadException: string;


declare const NSTextReadInapplicableDocumentTypeError: number;

declare const NSTextReadWriteErrorMaximum: number;

declare const NSTextReadWriteErrorMinimum: number;
declare var NSTextScalingDocumentAttribute: string;

declare var NSTextSizeMultiplierDocumentOption: string;

declare class NSTextStorage extends NSMutableAttributedString implements NSSecureCoding {
  attributeRuns: NSArray<NSTextStorage>;
  setAttributeRuns(_: NSArray<NSTextStorage>)
  readonly changeInLength: number;
  characters: NSArray<NSTextStorage>;
  setCharacters(_: NSArray<NSTextStorage>)
  delegate: NSTextStorageDelegate;
  setDelegate(_: NSTextStorageDelegate)
  readonly editedMask: NSTextStorageEditActions;
  readonly editedRange: NSRange;
  readonly fixesAttributesLazily: boolean;
  font: NSFont;
  setFont(_: NSFont)
  foregroundColor: NSColor;
  setForegroundColor(_: NSColor)
  readonly layoutManagers: NSArray<NSLayoutManager>;
  paragraphs: NSArray<NSTextStorage>;
  setParagraphs(_: NSArray<NSTextStorage>)
  words: NSArray<NSTextStorage>;
  setWords(_: NSArray<NSTextStorage>)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  addLayoutManager(_: NSLayoutManager): void;
  editedRangeChangeInLength(_: NSTextStorageEditActions, range: NSRange, changeInLength: number): void;
  encodeWithCoder(with_: NSCoder): void;
  ensureAttributesAreFixedInRange(in_: NSRange): void;
  static createWithCoder(coder: NSCoder): this;
  invalidateAttributesInRange(in_: NSRange): void;
  processEditing(): void;
  removeLayoutManager(_: NSLayoutManager): void;
}

interface NSTextStorageDelegate extends NSObject {
  textStorageDidProcessEditingRangeChangeInLength?(_: NSTextStorage, didProcessEditing: NSTextStorageEditActions, range: NSRange, changeInLength: number): void;
  textStorageWillProcessEditingRangeChangeInLength?(_: NSTextStorage, willProcessEditing: NSTextStorageEditActions, range: NSRange, changeInLength: number): void;
}

declare var NSTextStorageDelegate: {
  prototype: NSTextStorageDelegate;
};

declare var NSTextStorageDidProcessEditingNotification: string;

declare var NSTextStorageWillProcessEditingNotification: string;

declare class NSTextTab extends NSObject implements NSCoding, NSCopying, NSSecureCoding {
  static columnTerminatorsForLocale(for_?: Locale): CharacterSet;
  readonly alignment: NSTextAlignment;
  readonly location: number;
  readonly options: NSDictionary<string, any>;
  readonly tabStopType: NSParagraphStyle.TextTabType;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithTextAlignmentLocationOptions(textAlignment: NSTextAlignment, location: number, options: NSDictionary<string, any>): this;
  static createWithTypeLocation(type: NSParagraphStyle.TextTabType, location: number): this;
}

declare class NSTextTable extends NSTextBlock {
  collapsesBorders: boolean;
  setCollapsesBorders(_: boolean)
  hidesEmptyCells: boolean;
  setHidesEmptyCells(_: boolean)
  layoutAlgorithm: NSTextTable.LayoutAlgorithm;
  setLayoutAlgorithm(_: NSTextTable.LayoutAlgorithm)
  numberOfColumns: number;
  setNumberOfColumns(_: number)
  boundsRectForBlockContentRectInRectTextContainerCharacterRange(for_: NSTextTableBlock, contentRect: NSRect, in_: NSRect, textContainer: NSTextContainer, characterRange: NSRange): NSRect;
  drawBackgroundForBlockWithFrameInViewCharacterRangeLayoutManager(for_: NSTextTableBlock, withFrame: NSRect, in_: NSView, characterRange: NSRange, layoutManager: NSLayoutManager): void;
  rectForBlockLayoutAtPointInRectTextContainerCharacterRange(for_: NSTextTableBlock, layoutAt: NSPoint, in_: NSRect, textContainer: NSTextContainer, characterRange: NSRange): NSRect;
}

declare class NSTextTableBlock extends NSTextBlock {
  readonly columnSpan: number;
  readonly rowSpan: number;
  readonly startingColumn: number;
  readonly startingRow: number;
  readonly table: NSTextTable;
  static createWithTableStartingRowRowSpanStartingColumnColumnSpan(table: NSTextTable, startingRow: number, rowSpan: number, startingColumn: number, columnSpan: number): this;
}

declare class NSTextView extends NSText implements NSAccessibilityNavigableStaticText, NSColorChanging, NSDraggingSource, NSMenuItemValidation, NSStandardKeyBindingResponding, NSTextInput, NSTextInputClient, NSTextLayoutOrientationProvider, NSUserInterfaceValidations, NSCandidateListTouchBarItemDelegate, NSTouchBarDelegate {
  static fieldEditor(): NSTextView;
  static registerForServices(): void;
  static scrollableDocumentContentTextView(): NSScrollView;
  static scrollablePlainDocumentContentTextView(): NSScrollView;
  static scrollableTextView(): NSScrollView;
  readonly acceptableDragTypes: NSArray<string>;
  acceptsGlyphInfo: boolean;
  setAcceptsGlyphInfo(_: boolean)
  allowedInputSourceLocales: NSArray<string>;
  setAllowedInputSourceLocales(_: NSArray<string>)
  allowsCharacterPickerTouchBarItem: boolean;
  setAllowsCharacterPickerTouchBarItem(_: boolean)
  allowsDocumentBackgroundColorChange: boolean;
  setAllowsDocumentBackgroundColorChange(_: boolean)
  allowsImageEditing: boolean;
  setAllowsImageEditing(_: boolean)
  allowsUndo: boolean;
  setAllowsUndo(_: boolean)
  isAutomaticDashSubstitutionEnabled: boolean;
  setAutomaticDashSubstitutionEnabled(_: boolean)
  isAutomaticDataDetectionEnabled: boolean;
  setAutomaticDataDetectionEnabled(_: boolean)
  isAutomaticLinkDetectionEnabled: boolean;
  setAutomaticLinkDetectionEnabled(_: boolean)
  isAutomaticQuoteSubstitutionEnabled: boolean;
  setAutomaticQuoteSubstitutionEnabled(_: boolean)
  isAutomaticSpellingCorrectionEnabled: boolean;
  setAutomaticSpellingCorrectionEnabled(_: boolean)
  isAutomaticTextCompletionEnabled: boolean;
  setAutomaticTextCompletionEnabled(_: boolean)
  isAutomaticTextReplacementEnabled: boolean;
  setAutomaticTextReplacementEnabled(_: boolean)
  readonly isCoalescingUndo: boolean;
  isContinuousSpellCheckingEnabled: boolean;
  setContinuousSpellCheckingEnabled(_: boolean)
  defaultParagraphStyle: NSParagraphStyle;
  setDefaultParagraphStyle(_: NSParagraphStyle)
  delegate: NSTextViewDelegate;
  setDelegate(_: NSTextViewDelegate)
  displaysLinkToolTips: boolean;
  setDisplaysLinkToolTips(_: boolean)
  enabledTextCheckingTypes: number;
  setEnabledTextCheckingTypes(_: number)
  isGrammarCheckingEnabled: boolean;
  setGrammarCheckingEnabled(_: boolean)
  isIncrementalSearchingEnabled: boolean;
  setIncrementalSearchingEnabled(_: boolean)
  insertionPointColor: NSColor;
  setInsertionPointColor(_: NSColor)
  readonly layoutManager: NSLayoutManager;
  linkTextAttributes: NSDictionary<string, any>;
  setLinkTextAttributes(_: NSDictionary<string, any>)
  markedTextAttributes: NSDictionary<string, any>;
  setMarkedTextAttributes(_: NSDictionary<string, any>)
  readonly rangeForUserCharacterAttributeChange: NSRange;
  readonly rangeForUserCompletion: NSRange;
  readonly rangeForUserParagraphAttributeChange: NSRange;
  readonly rangeForUserTextChange: NSRange;
  readonly rangesForUserCharacterAttributeChange: NSArray<NSValue>;
  readonly rangesForUserParagraphAttributeChange: NSArray<NSValue>;
  readonly rangesForUserTextChange: NSArray<NSValue>;
  readonly readablePasteboardTypes: NSArray<string>;
  isRulerVisible: boolean;
  setRulerVisible(_: boolean)
  selectedRanges: NSArray<NSValue>;
  setSelectedRanges(_: NSArray<NSValue>)
  selectedTextAttributes: NSDictionary<string, any>;
  setSelectedTextAttributes(_: NSDictionary<string, any>)
  readonly selectionAffinity: NSSelectionAffinity;
  selectionGranularity: NSSelectionGranularity;
  setSelectionGranularity(_: NSSelectionGranularity)
  readonly shouldDrawInsertionPoint: boolean;
  smartInsertDeleteEnabled: boolean;
  setSmartInsertDeleteEnabled(_: boolean)
  readonly spellCheckerDocumentTag: number;
  textContainer: NSTextContainer;
  setTextContainer(_: NSTextContainer)
  textContainerInset: NSSize;
  setTextContainerInset(_: NSSize)
  readonly textContainerOrigin: NSPoint;
  readonly textStorage: NSTextStorage;
  typingAttributes: NSDictionary<string, any>;
  setTypingAttributes(_: NSDictionary<string, any>)
  usesAdaptiveColorMappingForDarkAppearance: boolean;
  setUsesAdaptiveColorMappingForDarkAppearance(_: boolean)
  usesFindBar: boolean;
  setUsesFindBar(_: boolean)
  usesFindPanel: boolean;
  setUsesFindPanel(_: boolean)
  usesInspectorBar: boolean;
  setUsesInspectorBar(_: boolean)
  usesRolloverButtonForSelection: boolean;
  setUsesRolloverButtonForSelection(_: boolean)
  usesRuler: boolean;
  setUsesRuler(_: boolean)
  readonly writablePasteboardTypes: NSArray<string>;
  static stronglyReferencesTextStorage(): boolean;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly layoutOrientation: NSLayoutManager.TextLayoutOrientation; // inherited from NSTextLayoutOrientationProvider
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityAttributedStringForRange(for_: NSRange): NSAttributedString;
  accessibilityFrame(): NSRect;
  accessibilityFrameForRange(for_: NSRange): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLineForIndex(for_: number): number;
  accessibilityParent(): any;
  accessibilityRangeForLine(forLine: number): NSRange;
  accessibilityStringForRange(for_: NSRange): string;
  accessibilityValue(): string;
  accessibilityVisibleCharacterRange(): NSRange;
  alignJustified(_?: any): void;
  attributedString(): NSAttributedString;
  attributedSubstringForProposedRangeActualRange(forProposedRange: NSRange, actualRange?: NSRange): NSAttributedString;
  baselineDeltaForCharacterAtIndex(at: number): number;
  breakUndoCoalescing(): void;
  cancelOperation(_?: any): void;
  candidateListTouchBarItemWith_BeginSelectingCandidateAt(_: NSCandidateListTouchBarItem<any>, beginSelectingCandidateAt: number): void;
  candidateListTouchBarItemWith_ChangeSelectionFromCandidateAtTo(_: NSCandidateListTouchBarItem<any>, changeSelectionFromCandidateAt: number, to: number): void;
  candidateListTouchBarItemWithChangedCandidateListVisibility(_: NSCandidateListTouchBarItem<any>, changedCandidateListVisibility: boolean): void;
  candidateListTouchBarItemWith_EndSelectingCandidateAt(_: NSCandidateListTouchBarItem<any>, endSelectingCandidateAt: number): void;
  capitalizeWord(_?: any): void;
  centerSelectionInVisibleArea(_?: any): void;
  changeAttributes(_?: any): void;
  changeCaseOfLetter(_?: any): void;
  changeColor(_?: NSColorPanel): void;
  changeDocumentBackgroundColor(_?: any): void;
  changeLayoutOrientation(_?: any): void;
  characterIndexForInsertionAtPoint(at: NSPoint): number;
  characterIndexForPoint(for_: NSPoint): number;
  checkTextInDocument(_?: any): void;
  checkTextInRangeTypesOptions(in_: NSRange, types: number, options: NSDictionary<string, any>): void;
  checkTextInSelection(_?: any): void;
  cleanUpAfterDragOperation(): void;
  clickedOnLinkAtIndex(onLink: any, at: number): void;
  complete(_?: any): void;
  completionsForPartialWordRangeIndexOfSelectedItem(forPartialWordRange: NSRange, indexOfSelectedItem: number): NSArray<string>;
  conformsToProtocol(to: any /* Protocol */): boolean;
  deleteBackward(_?: any): void;
  deleteBackwardByDecomposingPreviousCharacter(_?: any): void;
  deleteForward(_?: any): void;
  deleteToBeginningOfLine(_?: any): void;
  deleteToBeginningOfParagraph(_?: any): void;
  deleteToEndOfLine(_?: any): void;
  deleteToEndOfParagraph(_?: any): void;
  deleteToMark(_?: any): void;
  deleteWordBackward(_?: any): void;
  deleteWordForward(_?: any): void;
  didChangeText(): void;
  doCommandBySelector(by: string): void;
  dragImageForSelectionWithEventOrigin(with_: NSEvent, origin?: NSPoint): NSImage;
  dragOperationForDraggingInfoType(for_: NSDraggingInfo, type: string): NSDragOperation;
  dragSelectionWithEventOffsetSlideBack(with_: NSEvent, offset: NSSize, slideBack: boolean): boolean;
  draggingSessionEndedAtPointOperation(_: NSDraggingSession, endedAt: NSPoint, operation: NSDragOperation): void;
  draggingSessionMovedToPoint(_: NSDraggingSession, movedTo: NSPoint): void;
  draggingSessionSourceOperationMaskForDraggingContext(_: NSDraggingSession, sourceOperationMaskFor: NSDraggingContext): NSDragOperation;
  draggingSessionWillBeginAtPoint(_: NSDraggingSession, willBeginAt: NSPoint): void;
  drawInsertionPointInRectColorTurnedOn(in_: NSRect, color: NSColor, turnedOn: boolean): void;
  drawViewBackgroundInRect(in_: NSRect): void;
  drawsVerticallyForCharacterAtIndex(at: number): boolean;
  firstRectForCharacterRangeActualRange(forCharacterRange: NSRange, actualRange?: NSRange): NSRect;
  fractionOfDistanceThroughGlyphForPoint(for_: NSPoint): number;
  handleTextCheckingResultsForRangeTypesOptionsOrthographyWordCount(_: NSArray<NSTextCheckingResult>, forRange: NSRange, types: number, options: NSDictionary<string, any>, orthography: NSOrthography, wordCount: number): void;
  hasMarkedText(): boolean;
  ignoreModifierKeysForDraggingSession(for_: NSDraggingSession): boolean;
  indent(_?: any): void;
  static createWithFrameTextContainer(frame: NSRect, textContainer?: NSTextContainer): this;
  insertBacktab(_?: any): void;
  insertCompletionForPartialWordRangeMovementIsFinal(_: string, forPartialWordRange: NSRange, movement: number, isFinal: boolean): void;
  insertContainerBreak(_?: any): void;
  insertDoubleQuoteIgnoringSubstitution(_?: any): void;
  insertLineBreak(_?: any): void;
  insertNewline(_?: any): void;
  insertNewlineIgnoringFieldEditor(_?: any): void;
  insertParagraphSeparator(_?: any): void;
  insertSingleQuoteIgnoringSubstitution(_?: any): void;
  insertTab(_?: any): void;
  insertTabIgnoringFieldEditor(_?: any): void;
  insertTextReplacementRange(_: any, replacementRange: NSRange): void;
  invalidateTextContainerOrigin(): void;
  isAccessibilityFocused(): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  loosenKerning(_?: any): void;
  lowerBaseline(_?: any): void;
  lowercaseWord(_?: any): void;
  makeBaseWritingDirectionLeftToRight(_?: any): void;
  makeBaseWritingDirectionNatural(_?: any): void;
  makeBaseWritingDirectionRightToLeft(_?: any): void;
  makeTextWritingDirectionLeftToRight(_?: any): void;
  makeTextWritingDirectionNatural(_?: any): void;
  makeTextWritingDirectionRightToLeft(_?: any): void;
  markedRange(): NSRange;
  moveBackward(_?: any): void;
  moveBackwardAndModifySelection(_?: any): void;
  moveDown(_?: any): void;
  moveDownAndModifySelection(_?: any): void;
  moveForward(_?: any): void;
  moveForwardAndModifySelection(_?: any): void;
  moveLeft(_?: any): void;
  moveLeftAndModifySelection(_?: any): void;
  moveParagraphBackwardAndModifySelection(_?: any): void;
  moveParagraphForwardAndModifySelection(_?: any): void;
  moveRight(_?: any): void;
  moveRightAndModifySelection(_?: any): void;
  moveToBeginningOfDocument(_?: any): void;
  moveToBeginningOfDocumentAndModifySelection(_?: any): void;
  moveToBeginningOfLine(_?: any): void;
  moveToBeginningOfLineAndModifySelection(_?: any): void;
  moveToBeginningOfParagraph(_?: any): void;
  moveToBeginningOfParagraphAndModifySelection(_?: any): void;
  moveToEndOfDocument(_?: any): void;
  moveToEndOfDocumentAndModifySelection(_?: any): void;
  moveToEndOfLine(_?: any): void;
  moveToEndOfLineAndModifySelection(_?: any): void;
  moveToEndOfParagraph(_?: any): void;
  moveToEndOfParagraphAndModifySelection(_?: any): void;
  moveToLeftEndOfLine(_?: any): void;
  moveToLeftEndOfLineAndModifySelection(_?: any): void;
  moveToRightEndOfLine(_?: any): void;
  moveToRightEndOfLineAndModifySelection(_?: any): void;
  moveUp(_?: any): void;
  moveUpAndModifySelection(_?: any): void;
  moveWordBackward(_?: any): void;
  moveWordBackwardAndModifySelection(_?: any): void;
  moveWordForward(_?: any): void;
  moveWordForwardAndModifySelection(_?: any): void;
  moveWordLeft(_?: any): void;
  moveWordLeftAndModifySelection(_?: any): void;
  moveWordRight(_?: any): void;
  moveWordRightAndModifySelection(_?: any): void;
  orderFrontLinkPanel(_?: any): void;
  orderFrontListPanel(_?: any): void;
  orderFrontSharingServicePicker(_?: any): void;
  orderFrontSpacingPanel(_?: any): void;
  orderFrontSubstitutionsPanel(_?: any): void;
  orderFrontTablePanel(_?: any): void;
  outline(_?: any): void;
  pageDown(_?: any): void;
  pageDownAndModifySelection(_?: any): void;
  pageUp(_?: any): void;
  pageUpAndModifySelection(_?: any): void;
  pasteAsPlainText(_?: any): void;
  pasteAsRichText(_?: any): void;
  performFindPanelAction(_?: any): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  performValidatedReplacementInRangeWithAttributedString(in_: NSRange, with_: NSAttributedString): boolean;
  preferredPasteboardTypeFromArrayRestrictedToTypesFromArray(from: NSArray<string>, restrictedToTypesFrom?: NSArray<string>): string;
  quickLookPreviewItems(_?: any): void;
  quickLookPreviewableItemsInRanges(_: NSArray<NSValue>): NSArray<QLPreviewItem>;
  raiseBaseline(_?: any): void;
  readSelectionFromPasteboard(from: NSPasteboard): boolean;
  readSelectionFromPasteboardType(from: NSPasteboard, type: string): boolean;
  replaceTextContainer(_: NSTextContainer): void;
  respondsToSelector(_: string): boolean;
  scrollLineDown(_?: any): void;
  scrollLineUp(_?: any): void;
  scrollPageDown(_?: any): void;
  scrollPageUp(_?: any): void;
  scrollToBeginningOfDocument(_?: any): void;
  scrollToEndOfDocument(_?: any): void;
  selectAll(_?: any): void;
  selectLine(_?: any): void;
  selectParagraph(_?: any): void;
  selectToMark(_?: any): void;
  selectWord(_?: any): void;
  selectedRange(): NSRange;
  selectionRangeForProposedRangeGranularity(forProposedRange: NSRange, granularity: NSSelectionGranularity): NSRange;
  self(): this;
  setAlignmentRange(_: NSTextAlignment, range: NSRange): void;
  setBaseWritingDirectionRange(_: NSWritingDirection, range: NSRange): void;
  setConstrainedFrameSize(_: NSSize): void;
  setLayoutOrientation(_: NSLayoutManager.TextLayoutOrientation): void;
  setMark(_?: any): void;
  setMarkedTextSelectedRangeReplacementRange(_: any, selectedRange: NSRange, replacementRange: NSRange): void;
  setNeedsDisplayInRectAvoidAdditionalLayout(_: NSRect, avoidAdditionalLayout: boolean): void;
  setSelectedRange(_: NSRange): void;
  setSelectedRangeAffinityStillSelecting(_: NSRange, affinity: NSSelectionAffinity, stillSelecting: boolean): void;
  setSelectedRangesAffinityStillSelecting(_: NSArray<NSValue>, affinity: NSSelectionAffinity, stillSelecting: boolean): void;
  setSpellingStateRange(_: number, range: NSRange): void;
  shouldChangeTextInRangeReplacementString(in_: NSRange, replacementString?: string): boolean;
  shouldChangeTextInRangesReplacementStrings(inRanges: NSArray<NSValue>, replacementStrings?: NSArray<string>): boolean;
  showFindIndicatorForRange(for_: NSRange): void;
  smartDeleteRangeForProposedRange(forProposedRange: NSRange): NSRange;
  smartInsertAfterStringForStringReplacingRange(afterStringFor: string, replacing: NSRange): string;
  smartInsertBeforeStringForStringReplacingRange(beforeStringFor: string, replacing: NSRange): string;
  smartInsertForStringReplacingRangeBeforeStringAfterString(for_: string, replacing: NSRange, before?: string, after?: string): void;
  startSpeaking(_?: any): void;
  stopSpeaking(_?: any): void;
  swapWithMark(_?: any): void;
  tightenKerning(_?: any): void;
  toggleAutomaticDashSubstitution(_?: any): void;
  toggleAutomaticDataDetection(_?: any): void;
  toggleAutomaticLinkDetection(_?: any): void;
  toggleAutomaticQuoteSubstitution(_?: any): void;
  toggleAutomaticSpellingCorrection(_?: any): void;
  toggleAutomaticTextCompletion(_?: any): void;
  toggleAutomaticTextReplacement(_?: any): void;
  toggleContinuousSpellChecking(_?: any): void;
  toggleGrammarChecking(_?: any): void;
  toggleQuickLookPreviewPanel(_?: any): void;
  toggleSmartInsertDelete(_?: any): void;
  touchBarMakeItemForIdentifier(_: NSTouchBar, makeItemForIdentifier: string): NSTouchBarItem;
  transpose(_?: any): void;
  transposeWords(_?: any): void;
  turnOffKerning(_?: any): void;
  turnOffLigatures(_?: any): void;
  unmarkText(): void;
  updateCandidates(): void;
  updateDragTypeRegistration(): void;
  updateFontPanel(): void;
  updateInsertionPointStateAndRestartTimer(_: boolean): void;
  updateQuickLookPreviewPanel(): void;
  updateRuler(): void;
  updateTextTouchBarItems(): void;
  updateTouchBarItemIdentifiers(): void;
  uppercaseWord(_?: any): void;
  useAllLigatures(_?: any): void;
  useStandardKerning(_?: any): void;
  useStandardLigatures(_?: any): void;
  validAttributesForMarkedText(): NSArray<string>;
  validateMenuItem(_: NSMenuItem): boolean;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
  windowLevel(): number;
  writeSelectionToPasteboardType(to: NSPasteboard, type: string): boolean;
  writeSelectionToPasteboardTypes(to: NSPasteboard, types: NSArray<string>): boolean;
  yank(_?: any): void;
}

interface NSTextViewDelegate extends NSTextDelegate {
  textViewClickedOnLinkAtIndex?(_: NSTextView, clickedOnLink: any, at: number): boolean;
  textViewClickedOnCellInRectAtIndex?(_: NSTextView, clickedOn: NSTextAttachmentCellProtocol, in_: NSRect, at: number): void;
  textViewDoubleClickedOnCellInRectAtIndex?(_: NSTextView, doubleClickedOn: NSTextAttachmentCellProtocol, in_: NSRect, at: number): void;
  textViewDraggedCellInRectEventAtIndex?(_: NSTextView, draggedCell: NSTextAttachmentCellProtocol, in_: NSRect, event: NSEvent, at: number): void;
  textViewWritablePasteboardTypesForCellAtIndex?(_: NSTextView, writablePasteboardTypesFor: NSTextAttachmentCellProtocol, at: number): NSArray<string>;
  textViewWriteCellAtIndexToPasteboardType?(_: NSTextView, write: NSTextAttachmentCellProtocol, at: number, to: NSPasteboard, type: string): boolean;
  textViewWillDisplayToolTipForCharacterAtIndex?(_: NSTextView, willDisplayToolTip: string, forCharacterAt: number): string;
  textViewShouldChangeTextInRangeReplacementString?(_: NSTextView, shouldChangeTextIn: NSRange, replacementString?: string): boolean;
  textViewDoCommandBySelector?(_: NSTextView, doCommandBy: string): boolean;
  textViewMenuForEventAtIndex?(_: NSTextView, menu: NSMenu, for_: NSEvent, at: number): NSMenu;
  textViewWillCheckTextInRangeOptionsTypes?(_: NSTextView, willCheckTextIn: NSRange, options: NSDictionary<string, any>, types: number): NSDictionary<string, any>;
  textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount?(_: NSTextView, didCheckTextIn: NSRange, types: number, options: NSDictionary<string, any>, results: NSArray<NSTextCheckingResult>, orthography: NSOrthography, wordCount: number): NSArray<NSTextCheckingResult>;
  textViewURLForContentsOfTextAttachmentAtIndex?(_: NSTextView, urlForContentsOf: NSTextAttachment, at: number): NSURL;
  textViewWillShowSharingServicePickerForItems?(_: NSTextView, willShow: NSSharingServicePicker, forItems: NSArray<any>): NSSharingServicePicker;
  textViewShouldSelectCandidateAtIndex?(_: NSTextView, shouldSelectCandidateAt: number): boolean;
  textViewCandidatesForSelectedRange?(_: NSTextView, candidates: NSArray<NSTextCheckingResult>, forSelectedRange: NSRange): NSArray<NSTextCheckingResult>;
  textViewCandidatesForSelectedRange?(_: NSTextView, candidatesForSelectedRange: NSRange): NSArray<any>;
  textViewCompletionsForPartialWordRangeIndexOfSelectedItem?(_: NSTextView, completions: NSArray<string>, forPartialWordRange: NSRange, indexOfSelectedItem?: number): NSArray<string>;
  textViewShouldChangeTextInRangesReplacementStrings?(_: NSTextView, shouldChangeTextInRanges: NSArray<NSValue>, replacementStrings?: NSArray<string>): boolean;
  textViewShouldChangeTypingAttributesToAttributes?(_: NSTextView, shouldChangeTypingAttributes: NSDictionary<string, any>, toAttributes: NSDictionary<string, any>): NSDictionary<string, any>;
  textViewShouldSetSpellingStateRange?(_: NSTextView, shouldSetSpellingState: number, range: NSRange): number;
  textViewShouldUpdateTouchBarItemIdentifiers?(_: NSTextView, shouldUpdateTouchBarItemIdentifiers: NSArray<string>): NSArray<string>;
  textViewWillChangeSelectionFromCharacterRangeToCharacterRange?(_: NSTextView, willChangeSelectionFromCharacterRange: NSRange, toCharacterRange: NSRange): NSRange;
  textViewWillChangeSelectionFromCharacterRangesToCharacterRanges?(_: NSTextView, willChangeSelectionFromCharacterRanges: NSArray<NSValue>, toCharacterRanges: NSArray<NSValue>): NSArray<NSValue>;
  textViewDidChangeSelection?(_: Notification): void;
  textViewDidChangeTypingAttributes?(_: Notification): void;
  undoManagerForTextView?(for_: NSTextView): UndoManager;
}

declare var NSTextViewDelegate: {
  prototype: NSTextViewDelegate;
};

declare var NSTextViewDidChangeSelectionNotification: string;

declare var NSTextViewDidChangeTypingAttributesNotification: string;

declare var NSTextViewWillChangeNotifyingTextViewNotification: string;

declare var NSTextWriteException: string;


declare const NSTextWriteInapplicableDocumentTypeError: number;
declare var NSTimeZoneDatePickerElementFlag: NSDatePicker.ElementFlags;

declare var NSTimeoutDocumentOption: string;

declare var NSTitleBinding: string;

declare var NSTitleDocumentAttribute: string;

declare class NSTitlebarAccessoryViewController extends NSViewController implements NSAnimatablePropertyContainer, NSAnimationDelegate {
  static defaultAnimationForKey(forKey: string): any;
  fullScreenMinHeight: number;
  setFullScreenMinHeight(_: number)
  isHidden: boolean;
  setHidden(_: boolean)
  layoutAttribute: NSLayoutConstraint.Attribute;
  setLayoutAttribute(_: NSLayoutConstraint.Attribute)
  animations: NSDictionary<string, any>;
  setAnimations(_: NSDictionary<string, any>) // inherited from NSAnimatablePropertyContainer
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  animationDidReachProgressMark(_: NSAnimation, didReachProgressMark: number): void;
  animationValueForProgress(_: NSAnimation, valueForProgress: number): number;
  animationDidEnd(_: NSAnimation): void;
  animationDidStop(_: NSAnimation): void;
  animationForKey(forKey: string): any;
  animationShouldStart(_: NSAnimation): boolean;
  animator(): this;
  conformsToProtocol(to: any /* Protocol */): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class NSTokenField extends NSTextField {
  static labelWithAttributedString(labelWithAttributedString: NSAttributedString): NSTokenField; // inherited from NSTextField
  static labelWithString(labelWithString: string): NSTokenField; // inherited from NSTextField
  static wrappingLabelWithString(wrappingLabelWithString: string): NSTokenField; // inherited from NSTextField
  completionDelay: number;
  setCompletionDelay(_: number)
  delegate: NSTokenFieldDelegate;
  setDelegate(_: NSTokenFieldDelegate)
  tokenStyle: NSTokenField.TokenStyle;
  setTokenStyle(_: NSTokenField.TokenStyle)
  tokenizingCharacterSet: CharacterSet;
  setTokenizingCharacterSet(_: CharacterSet)
  static defaultCompletionDelay(): number;
  static defaultTokenizingCharacterSet(): CharacterSet;
}

declare class NSTokenFieldCell extends NSTextFieldCell {
  completionDelay: number;
  setCompletionDelay(_: number)
  delegate: NSTokenFieldCellDelegate;
  setDelegate(_: NSTokenFieldCellDelegate)
  tokenStyle: NSTokenField.TokenStyle;
  setTokenStyle(_: NSTokenField.TokenStyle)
  tokenizingCharacterSet: CharacterSet;
  setTokenizingCharacterSet(_: CharacterSet)
  static defaultCompletionDelay(): number;
  static defaultTokenizingCharacterSet(): CharacterSet;
}

interface NSTokenFieldCellDelegate extends NSObject {
  tokenFieldCellShouldAddObjectsAtIndex?(_: NSTokenFieldCell, shouldAdd: NSArray<any>, at: number): NSArray<any>;
  tokenFieldCellRepresentedObjectForEditingString?(_: NSTokenFieldCell, representedObjectForEditing: string): any;
  tokenFieldCellWriteRepresentedObjectsToPasteboard?(_: NSTokenFieldCell, writeRepresentedObjects: NSArray<any>, to: NSPasteboard): boolean;
  tokenFieldCellReadFromPasteboard?(_: NSTokenFieldCell, readFrom: NSPasteboard): NSArray<any>;
  tokenFieldCellCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(_: NSTokenFieldCell, completionsForSubstring: string, indexOfToken: number, indexOfSelectedItem: number): NSArray<any>;
  tokenFieldCellDisplayStringForRepresentedObject?(_: NSTokenFieldCell, displayStringForRepresentedObject: any): string;
  tokenFieldCellEditingStringForRepresentedObject?(_: NSTokenFieldCell, editingStringForRepresentedObject: any): string;
  tokenFieldCellHasMenuForRepresentedObject?(_: NSTokenFieldCell, hasMenuForRepresentedObject: any): boolean;
  tokenFieldCellMenuForRepresentedObject?(_: NSTokenFieldCell, menuForRepresentedObject: any): NSMenu;
  tokenFieldCellStyleForRepresentedObject?(_: NSTokenFieldCell, styleForRepresentedObject: any): NSTokenField.TokenStyle;
}

declare var NSTokenFieldCellDelegate: {
  prototype: NSTokenFieldCellDelegate;
};

interface NSTokenFieldDelegate extends NSTextFieldDelegate {
  tokenFieldShouldAddObjectsAtIndex?(_: NSTokenField, shouldAdd: NSArray<any>, at: number): NSArray<any>;
  tokenFieldRepresentedObjectForEditingString?(_: NSTokenField, representedObjectForEditing: string): any;
  tokenFieldWriteRepresentedObjectsToPasteboard?(_: NSTokenField, writeRepresentedObjects: NSArray<any>, to: NSPasteboard): boolean;
  tokenFieldReadFromPasteboard?(_: NSTokenField, readFrom: NSPasteboard): NSArray<any>;
  tokenFieldCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(_: NSTokenField, completionsForSubstring: string, indexOfToken: number, indexOfSelectedItem?: number): NSArray<any>;
  tokenFieldDisplayStringForRepresentedObject?(_: NSTokenField, displayStringForRepresentedObject: any): string;
  tokenFieldEditingStringForRepresentedObject?(_: NSTokenField, editingStringForRepresentedObject: any): string;
  tokenFieldHasMenuForRepresentedObject?(_: NSTokenField, hasMenuForRepresentedObject: any): boolean;
  tokenFieldMenuForRepresentedObject?(_: NSTokenField, menuForRepresentedObject: any): NSMenu;
  tokenFieldStyleForRepresentedObject?(_: NSTokenField, styleForRepresentedObject: any): NSTokenField.TokenStyle;
}

declare var NSTokenFieldDelegate: {
  prototype: NSTokenFieldDelegate;
};

declare var NSToolTipAttributeName: string;

declare var NSToolTipBinding: string;

declare class NSToolbar extends NSObject {
  allowsExtensionItems: boolean;
  setAllowsExtensionItems(_: boolean)
  allowsUserCustomization: boolean;
  setAllowsUserCustomization(_: boolean)
  autosavesConfiguration: boolean;
  setAutosavesConfiguration(_: boolean)
  centeredItemIdentifier: string;
  setCenteredItemIdentifier(_: string)
  readonly configurationDictionary: NSDictionary<string, any>;
  readonly customizationPaletteIsRunning: boolean;
  delegate: NSToolbarDelegate;
  setDelegate(_: NSToolbarDelegate)
  displayMode: NSToolbar.DisplayMode;
  setDisplayMode(_: NSToolbar.DisplayMode)
  readonly identifier: string;
  readonly items: NSArray<NSToolbarItem>;
  selectedItemIdentifier: string;
  setSelectedItemIdentifier(_: string)
  showsBaselineSeparator: boolean;
  setShowsBaselineSeparator(_: boolean)
  sizeMode: NSToolbar.SizeMode;
  setSizeMode(_: NSToolbar.SizeMode)
  isVisible: boolean;
  setVisible(_: boolean)
  readonly visibleItems: NSArray<NSToolbarItem>;
  static createWithIdentifier(identifier: string): this;
  insertItemWithItemIdentifierAtIndex(withItemIdentifier: string, at: number): void;
  removeItemAtIndex(at: number): void;
  runCustomizationPalette(_?: any): void;
  setConfigurationFromDictionary(_: NSDictionary<string, any>): void;
  validateVisibleItems(): void;
}

declare var NSToolbarCloudSharingItemIdentifier: string;

declare var NSToolbarCustomizeToolbarItemIdentifier: string;

interface NSToolbarDelegate extends NSObject {
  toolbarItemForItemIdentifierWillBeInsertedIntoToolbar?(_: NSToolbar, itemForItemIdentifier: string, willBeInsertedIntoToolbar: boolean): NSToolbarItem;
  toolbarAllowedItemIdentifiers?(_: NSToolbar): NSArray<string>;
  toolbarDefaultItemIdentifiers?(_: NSToolbar): NSArray<string>;
  toolbarDidRemoveItem?(_: Notification): void;
  toolbarSelectableItemIdentifiers?(_: NSToolbar): NSArray<string>;
  toolbarWillAddItem?(_: Notification): void;
}

declare var NSToolbarDelegate: {
  prototype: NSToolbarDelegate;
};

declare var NSToolbarDidRemoveItemNotification: string;

declare var NSToolbarFlexibleSpaceItemIdentifier: string;

declare class NSToolbarItem extends NSObject implements NSCopying, NSMenuItemValidation, NSValidatedUserInterfaceItem {
  action: string;
  setAction(_: string)
  readonly allowsDuplicatesInToolbar: boolean;
  autovalidates: boolean;
  setAutovalidates(_: boolean)
  isBordered: boolean;
  setBordered(_: boolean)
  isEnabled: boolean;
  setEnabled(_: boolean)
  image: NSImage;
  setImage(_: NSImage)
  readonly itemIdentifier: string;
  label: string;
  setLabel(_: string)
  menuFormRepresentation: NSMenuItem;
  setMenuFormRepresentation(_: NSMenuItem)
  paletteLabel: string;
  setPaletteLabel(_: string)
  tag: number;
  setTag(_: number)
  target: any;
  setTarget(_: any)
  title: string;
  setTitle(_: string)
  toolTip: string;
  setToolTip(_: string)
  readonly toolbar: NSToolbar;
  view: NSView;
  setView(_: NSView)
  visibilityPriority: number;
  setVisibilityPriority(_: number)
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  conformsToProtocol(to: any /* Protocol */): boolean;
  static createWithItemIdentifier(itemIdentifier: string): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  validate(): void;
  validateMenuItem(_: NSMenuItem): boolean;
}

declare class NSToolbarItemGroup extends NSToolbarItem {
  controlRepresentation: NSToolbarItemGroup.ControlRepresentation;
  setControlRepresentation(_: NSToolbarItemGroup.ControlRepresentation)
  selectedIndex: number;
  setSelectedIndex(_: number)
  selectionMode: NSToolbarItemGroup.SelectionMode;
  setSelectionMode(_: NSToolbarItemGroup.SelectionMode)
  subitems: NSArray<NSToolbarItem>;
  setSubitems(_: NSArray<NSToolbarItem>)
  isSelectedAtIndex(at: number): boolean;
  setSelectedAtIndex(_: boolean, at: number): void;
}

interface NSToolbarItemValidation extends NSObject {
  validateToolbarItem(_: NSToolbarItem): boolean;
}

declare var NSToolbarItemValidation: {
  prototype: NSToolbarItemValidation;
};

declare var NSToolbarItemVisibilityPriorityHigh: number;

declare var NSToolbarItemVisibilityPriorityLow: number;

declare var NSToolbarItemVisibilityPriorityStandard: number;

declare var NSToolbarItemVisibilityPriorityUser: number;

declare var NSToolbarPrintItemIdentifier: string;

declare var NSToolbarSeparatorItemIdentifier: string;

declare var NSToolbarShowColorsItemIdentifier: string;

declare var NSToolbarShowFontsItemIdentifier: string;

declare var NSToolbarSpaceItemIdentifier: string;

declare var NSToolbarToggleSidebarItemIdentifier: string;

declare var NSToolbarWillAddItemNotification: string;

declare var NSTopMarginDocumentAttribute: string;

declare var NSTornOffMenuWindowLevel: number;

declare class NSTouch extends NSObject implements NSCopying {
  readonly device: any;
  readonly deviceSize: NSSize;
  readonly identity: any;
  readonly normalizedPosition: NSPoint;
  readonly phase: NSTouch.Phase;
  readonly isResting: boolean;
  readonly type: NSTouch.TouchType;
  locationInView(in_?: NSView): NSPoint;
  previousLocationInView(in_?: NSView): NSPoint;
}

declare class NSTouchBar extends NSObject implements NSCoding {
  customizationAllowedItemIdentifiers: NSArray<string>;
  setCustomizationAllowedItemIdentifiers(_: NSArray<string>)
  customizationIdentifier: string;
  setCustomizationIdentifier(_: string)
  customizationRequiredItemIdentifiers: NSArray<string>;
  setCustomizationRequiredItemIdentifiers(_: NSArray<string>)
  defaultItemIdentifiers: NSArray<string>;
  setDefaultItemIdentifiers(_: NSArray<string>)
  delegate: NSTouchBarDelegate;
  setDelegate(_: NSTouchBarDelegate)
  escapeKeyReplacementItemIdentifier: string;
  setEscapeKeyReplacementItemIdentifier(_: string)
  readonly itemIdentifiers: NSArray<string>;
  principalItemIdentifier: string;
  setPrincipalItemIdentifier(_: string)
  templateItems: Set<NSTouchBarItem>;
  setTemplateItems(_: Set<NSTouchBarItem>)
  readonly isVisible: boolean;
  static isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;
  setAutomaticCustomizeTouchBarMenuItemEnabled(_: boolean)
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  itemForIdentifier(forIdentifier: string): NSTouchBarItem;
}

interface NSTouchBarDelegate extends NSObject {
  touchBarMakeItemForIdentifier?(_: NSTouchBar, makeItemForIdentifier: string): NSTouchBarItem;
}

declare var NSTouchBarDelegate: {
  prototype: NSTouchBarDelegate;
};

declare class NSTouchBarItem extends NSObject implements NSCoding {
  readonly customizationLabel: string;
  readonly identifier: string;
  readonly view: NSView;
  readonly viewController: NSViewController;
  visibilityPriority: number;
  setVisibilityPriority(_: number)
  readonly isVisible: boolean;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithIdentifier(identifier: string): this;
}

declare var NSTouchBarItemIdentifierCandidateList: string;

declare var NSTouchBarItemIdentifierCharacterPicker: string;

declare var NSTouchBarItemIdentifierFixedSpaceLarge: string;

declare var NSTouchBarItemIdentifierFixedSpaceSmall: string;

declare var NSTouchBarItemIdentifierFlexibleSpace: string;

declare var NSTouchBarItemIdentifierOtherItemsProxy: string;

declare var NSTouchBarItemIdentifierTextAlignment: string;

declare var NSTouchBarItemIdentifierTextColorPicker: string;

declare var NSTouchBarItemIdentifierTextFormat: string;

declare var NSTouchBarItemIdentifierTextList: string;

declare var NSTouchBarItemIdentifierTextStyle: string;

declare var NSTouchBarItemPriorityHigh: number;

declare var NSTouchBarItemPriorityLow: number;

declare var NSTouchBarItemPriorityNormal: number;

interface NSTouchBarProvider extends NSObject {
  touchBar: NSTouchBar;
}

declare var NSTouchBarProvider: {
  prototype: NSTouchBarProvider;
};

declare class NSTrackingArea extends NSObject implements NSCoding, NSCopying {
  readonly options: NSTrackingArea.Options;
  readonly owner: any;
  readonly rect: NSRect;
  readonly userInfo: NSDictionary<any, any>;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithRectOptionsOwnerUserInfo(rect: NSRect, options: NSTrackingArea.Options, owner?: any, userInfo?: NSDictionary<any, any>): this;
}

declare var NSTransparentBinding: string;

declare class NSTreeController extends NSObjectController {
  alwaysUsesMultipleValuesMarker: boolean;
  setAlwaysUsesMultipleValuesMarker(_: boolean)
  readonly arrangedObjects: NSTreeNode;
  avoidsEmptySelection: boolean;
  setAvoidsEmptySelection(_: boolean)
  readonly canAddChild: boolean;
  readonly canInsert: boolean;
  readonly canInsertChild: boolean;
  childrenKeyPath: string;
  setChildrenKeyPath(_: string)
  countKeyPath: string;
  setCountKeyPath(_: string)
  leafKeyPath: string;
  setLeafKeyPath(_: string)
  preservesSelection: boolean;
  setPreservesSelection(_: boolean)
  readonly selectedNodes: NSArray<NSTreeNode>;
  readonly selectionIndexPath: IndexPath;
  readonly selectionIndexPaths: NSArray<IndexPath>;
  selectsInsertedObjects: boolean;
  setSelectsInsertedObjects(_: boolean)
  sortDescriptors: NSArray<NSSortDescriptor>;
  setSortDescriptors(_: NSArray<NSSortDescriptor>)
  addChild(_?: any): void;
  addSelectionIndexPaths(_: NSArray<IndexPath>): boolean;
  childrenKeyPathForNode(for_: NSTreeNode): string;
  countKeyPathForNode(for_: NSTreeNode): string;
  insert(_?: any): void;
  insertChild(_?: any): void;
  insertObjectAtArrangedObjectIndexPath(_?: any, atArrangedObjectIndexPath: IndexPath): void;
  insertObjectsAtArrangedObjectIndexPaths(_: NSArray<any>, atArrangedObjectIndexPaths: NSArray<IndexPath>): void;
  leafKeyPathForNode(for_: NSTreeNode): string;
  moveNodeToIndexPath(_: NSTreeNode, to: IndexPath): void;
  moveNodesToIndexPath(_: NSArray<NSTreeNode>, to: IndexPath): void;
  rearrangeObjects(): void;
  removeObjectAtArrangedObjectIndexPath(atArrangedObjectIndexPath: IndexPath): void;
  removeObjectsAtArrangedObjectIndexPaths(atArrangedObjectIndexPaths: NSArray<IndexPath>): void;
  removeSelectionIndexPaths(_: NSArray<IndexPath>): boolean;
  setSelectionIndexPath(_?: IndexPath): boolean;
  setSelectionIndexPaths(_: NSArray<IndexPath>): boolean;
}

declare class NSTreeNode extends NSObject {
  readonly childNodes: NSArray<NSTreeNode>;
  readonly indexPath: IndexPath;
  readonly isLeaf: boolean;
  readonly mutableChildNodes: NSMutableArray<NSTreeNode>;
  readonly parentNode: NSTreeNode;
  readonly representedObject: any;
  descendantNodeAtIndexPath(at: IndexPath): NSTreeNode;
  static createWithRepresentedObject(representedObject?: any): this;
  sortWithSortDescriptorsRecursively(with_: NSArray<NSSortDescriptor>, recursively: boolean): void;
}

declare var NSTypeIdentifierAddressText: string;

declare var NSTypeIdentifierDateText: string;

declare var NSTypeIdentifierPhoneNumberText: string;

declare var NSTypeIdentifierTransitInformationText: string;

declare var NSTypedStreamVersionException: string;

declare class NSTypesetter extends NSObject {
  static printingAdjustmentInLayoutManagerForNominallySpacedGlyphRangePackedGlyphsCount(in_: NSLayoutManager, forNominallySpacedGlyphRange: NSRange, packedGlyphs: string, count: number): NSSize;
  static sharedSystemTypesetterForBehavior(for_: NSLayoutManager.TypesetterBehavior): any;
  attributedString: NSAttributedString;
  setAttributedString(_: NSAttributedString)
  readonly attributesForExtraLineFragment: NSDictionary<string, any>;
  bidiProcessingEnabled: boolean;
  setBidiProcessingEnabled(_: boolean)
  readonly currentParagraphStyle: NSParagraphStyle;
  readonly currentTextContainer: NSTextContainer;
  hyphenationFactor: number;
  setHyphenationFactor(_: number)
  readonly layoutManager: NSLayoutManager;
  lineFragmentPadding: number;
  setLineFragmentPadding(_: number)
  readonly paragraphCharacterRange: NSRange;
  readonly paragraphGlyphRange: NSRange;
  readonly paragraphSeparatorCharacterRange: NSRange;
  readonly paragraphSeparatorGlyphRange: NSRange;
  readonly textContainers: NSArray<NSTextContainer>;
  typesetterBehavior: NSLayoutManager.TypesetterBehavior;
  setTypesetterBehavior(_: NSLayoutManager.TypesetterBehavior)
  usesFontLeading: boolean;
  setUsesFontLeading(_: boolean)
  static defaultTypesetterBehavior(): NSLayoutManager.TypesetterBehavior;
  static sharedSystemTypesetter(): NSTypesetter;
  actionForControlCharacterAtIndex(at: number): NSTypesetterControlCharacterAction;
  baselineOffsetInLayoutManagerGlyphIndex(in_: NSLayoutManager, glyphIndex: number): number;
  beginLineWithGlyphAtIndex(withGlyphAt: number): void;
  beginParagraph(): void;
  boundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(forControlGlyphAt: number, for_: NSTextContainer, proposedLineFragment: NSRect, glyphPosition: NSPoint, characterIndex: number): NSRect;
  characterRangeForGlyphRangeActualGlyphRange(forGlyphRange: NSRange, actualGlyphRange?: NSRange): NSRange;
  endLineWithGlyphRange(withGlyphRange: NSRange): void;
  endParagraph(): void;
  getLineFragmentRectUsedRectForParagraphSeparatorGlyphRangeAtProposedOrigin(_: NSRect, usedRect: NSRect, forParagraphSeparatorGlyphRange: NSRange, atProposedOrigin: NSPoint): void;
  getLineFragmentRectUsedRectRemainingRectForStartingGlyphAtIndexProposedRectLineSpacingParagraphSpacingBeforeParagraphSpacingAfter(_: NSRect, usedRect: NSRect, remaining: NSRect, forStartingGlyphAt: number, proposedRect: NSRect, lineSpacing: number, paragraphSpacingBefore: number, paragraphSpacingAfter: number): void;
  glyphRangeForCharacterRangeActualCharacterRange(forCharacterRange: NSRange, actualCharacterRange?: NSRange): NSRange;
  hyphenCharacterForGlyphAtIndex(forGlyphAt: number): number;
  hyphenationFactorForGlyphAtIndex(forGlyphAt: number): number;
  layoutCharactersInRangeForLayoutManagerMaximumNumberOfLineFragments(in_: NSRange, for_: NSLayoutManager, maximumNumberOfLineFragments: number): NSRange;
  layoutGlyphsInLayoutManagerStartingAtGlyphIndexMaxNumberOfLineFragmentsNextGlyphIndex(in_: NSLayoutManager, startingAtGlyphIndex: number, maxNumberOfLineFragments: number, nextGlyphIndex: number): void;
  layoutParagraphAtPoint(at: NSPoint): number;
  lineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect(afterGlyphAt: number, withProposedLineFragmentRect: NSRect): number;
  paragraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect(afterGlyphAt: number, withProposedLineFragmentRect: NSRect): number;
  paragraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect(beforeGlyphAt: number, withProposedLineFragmentRect: NSRect): number;
  setAttachmentSizeForGlyphRange(_: NSSize, forGlyphRange: NSRange): void;
  setBidiLevelsForGlyphRange(_: string, forGlyphRange: NSRange): void;
  setDrawsOutsideLineFragmentForGlyphRange(_: boolean, forGlyphRange: NSRange): void;
  setHardInvalidationForGlyphRange(_: boolean, forGlyphRange: NSRange): void;
  setLineFragmentRectForGlyphRangeUsedRectBaselineOffset(_: NSRect, forGlyphRange: NSRange, usedRect: NSRect, baselineOffset: number): void;
  setLocationWithAdvancementsForStartOfGlyphRange(_: NSPoint, withAdvancements: number, forStartOfGlyphRange: NSRange): void;
  setNotShownAttributeForGlyphRange(_: boolean, forGlyphRange: NSRange): void;
  setParagraphGlyphRangeSeparatorGlyphRange(_: NSRange, separatorGlyphRange: NSRange): void;
  shouldBreakLineByHyphenatingBeforeCharacterAtIndex(byHyphenatingBeforeCharacterAt: number): boolean;
  shouldBreakLineByWordBeforeCharacterAtIndex(byWordBeforeCharacterAt: number): boolean;
  substituteFontForFont(for_: NSFont): NSFont;
  textTabForGlyphLocationWritingDirectionMaxLocation(forGlyphLocation: number, writingDirection: NSWritingDirection, maxLocation: number): NSTextTab;
  willSetLineFragmentRectForGlyphRangeUsedRectBaselineOffset(_: NSRect, forGlyphRange: NSRange, usedRect: NSRect, baselineOffset: number): void;
}

declare var NSUnderlineByWord: NSUnderlineStyle;

declare var NSUnderlineColorAttributeName: string;

declare var NSUnderlinePatternDash: NSUnderlineStyle;

declare var NSUnderlinePatternDashDot: NSUnderlineStyle;

declare var NSUnderlinePatternDashDotDot: NSUnderlineStyle;

declare var NSUnderlinePatternDot: NSUnderlineStyle;

declare var NSUnderlinePatternSolid: NSUnderlineStyle;

declare var NSUnderlineStyleAttributeName: string;


declare const NSUndoFunctionKey: number;
declare function NSUnregisterServicesProvider(name: string): void;

declare const NSUpArrowFunctionKey: number;

declare const NSUpTextMovement: number;
declare function NSUpdateDynamicServices(): void;

declare const NSUpdateWindowsRunLoopOrdering: number;
declare var NSUserActivityDocumentURLKey: string;

interface NSUserActivityRestoring extends NSObject {
  restoreUserActivityState(_: NSUserActivity): void;
}

declare var NSUserActivityRestoring: {
  prototype: NSUserActivityRestoring;
};

declare class NSUserDefaultsController extends NSController {
  appliesImmediately: boolean;
  setAppliesImmediately(_: boolean)
  readonly defaults: UserDefaults;
  readonly hasUnappliedChanges: boolean;
  initialValues: NSDictionary<string, any>;
  setInitialValues(_: NSDictionary<string, any>)
  readonly values: any;
  static sharedUserDefaultsController(): NSUserDefaultsController;
  static createWithDefaultsInitialValues(defaults?: UserDefaults, initialValues?: NSDictionary<string, any>): this;
  revert(_?: any): void;
  revertToInitialValues(_?: any): void;
  save(_?: any): void;
}


declare const NSUserFunctionKey: number;
interface NSUserInterfaceCompression {
  activeCompressionOptions: NSUserInterfaceCompressionOptions;
  compressWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): void;
  minimumSizeWithPrioritizedCompressionOptions(withPrioritizedCompressionOptions: NSArray<NSUserInterfaceCompressionOptions>): NSSize;
}

declare var NSUserInterfaceCompression: {
  prototype: NSUserInterfaceCompression;
};

declare class NSUserInterfaceCompressionOptions extends NSObject implements NSCoding, NSCopying {
  readonly isEmpty: boolean;
  static breakEqualWidthsOption(): NSUserInterfaceCompressionOptions;
  static hideImagesOption(): NSUserInterfaceCompressionOptions;
  static hideTextOption(): NSUserInterfaceCompressionOptions;
  static reduceMetricsOption(): NSUserInterfaceCompressionOptions;
  static standardOptions(): NSUserInterfaceCompressionOptions;
  containsOptions(_: NSUserInterfaceCompressionOptions): boolean;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithCompressionOptions(compressionOptions: Set<NSUserInterfaceCompressionOptions>): this;
  static createWithIdentifier(identifier: string): this;
  intersectsOptions(_: NSUserInterfaceCompressionOptions): boolean;
  optionsByAddingOptions(_: NSUserInterfaceCompressionOptions): NSUserInterfaceCompressionOptions;
  optionsByRemovingOptions(_: NSUserInterfaceCompressionOptions): NSUserInterfaceCompressionOptions;
}

interface NSUserInterfaceItemIdentification {
  identifier: string;
  setIdentifier(_: string)
}

declare var NSUserInterfaceItemIdentification: {
  prototype: NSUserInterfaceItemIdentification;
};

interface NSUserInterfaceItemSearching extends NSObject {
  localizedTitlesForItem(forItem: any): NSArray<string>;
  performActionForItem?(forItem: any): void;
  searchForItemsWithSearchStringResultLimitMatchedItemHandler(withSearch: string, resultLimit: number, matchedItemHandler: (p1: NSArray<any>) => void): void;
  showAllHelpTopicsForSearchString?(forSearch: string): void;
}

declare var NSUserInterfaceItemSearching: {
  prototype: NSUserInterfaceItemSearching;
};

interface NSUserInterfaceValidations {
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
}

declare var NSUserInterfaceValidations: {
  prototype: NSUserInterfaceValidations;
};

interface NSValidatedUserInterfaceItem {
  action: string;
  tag: number;
}

declare var NSValidatedUserInterfaceItem: {
  prototype: NSValidatedUserInterfaceItem;
};

declare var NSValidatesImmediatelyBindingOption: string;

declare var NSValueBinding: string;

declare var NSValuePathBinding: string;

declare var NSValueTransformerBindingOption: string;

declare var NSValueTransformerNameBindingOption: string;

declare var NSValueURLBinding: string;

declare var NSVariableStatusItemLength: number;

declare var NSVerticalGlyphFormAttributeName: string;

declare class NSView extends NSResponder implements NSAccessibility, NSAccessibilityElementProtocol, NSAnimatablePropertyContainer, NSAppearanceCustomization, NSDraggingDestination, NSUserInterfaceItemIdentification {
  static defaultAnimationForKey(forKey: string): any;
  readonly alignmentRectInsets: NSEdgeInsets;
  allowedTouchTypes: NSTouch.TouchTypeMask;
  setAllowedTouchTypes(_: NSTouch.TouchTypeMask)
  readonly allowsVibrancy: boolean;
  alphaValue: number;
  setAlphaValue(_: number)
  autoresizesSubviews: boolean;
  setAutoresizesSubviews(_: boolean)
  autoresizingMask: NSView.AutoresizingMask;
  setAutoresizingMask(_: NSView.AutoresizingMask)
  backgroundFilters: NSArray<CIFilter>;
  setBackgroundFilters(_: NSArray<CIFilter>)
  readonly baselineOffsetFromBottom: number;
  readonly bottomAnchor: NSLayoutYAxisAnchor;
  bounds: NSRect;
  setBounds(_: NSRect)
  boundsRotation: number;
  setBoundsRotation(_: number)
  readonly canBecomeKeyView: boolean;
  canDrawConcurrently: boolean;
  setCanDrawConcurrently(_: boolean)
  canDrawSubviewsIntoLayer: boolean;
  setCanDrawSubviewsIntoLayer(_: boolean)
  readonly candidateListTouchBarItem: NSCandidateListTouchBarItem<any>;
  readonly centerXAnchor: NSLayoutXAxisAnchor;
  readonly centerYAnchor: NSLayoutYAxisAnchor;
  compositingFilter: CIFilter;
  setCompositingFilter(_: CIFilter)
  readonly constraints: NSArray<NSLayoutConstraint>;
  contentFilters: NSArray<CIFilter>;
  setContentFilters(_: NSArray<CIFilter>)
  readonly isDrawingFindIndicator: boolean;
  readonly enclosingMenuItem: NSMenuItem;
  readonly enclosingScrollView: NSScrollView;
  readonly firstBaselineAnchor: NSLayoutYAxisAnchor;
  readonly firstBaselineOffsetFromTop: number;
  readonly fittingSize: NSSize;
  readonly isFlipped: boolean;
  readonly focusRingMaskBounds: NSRect;
  focusRingType: NSFocusRingType;
  setFocusRingType(_: NSFocusRingType)
  frame: NSRect;
  setFrame(_: NSRect)
  frameCenterRotation: number;
  setFrameCenterRotation(_: number)
  frameRotation: number;
  setFrameRotation(_: number)
  gestureRecognizers: NSArray<NSGestureRecognizer>;
  setGestureRecognizers(_: NSArray<NSGestureRecognizer>)
  readonly hasAmbiguousLayout: boolean;
  readonly heightAdjustLimit: number;
  readonly heightAnchor: NSLayoutDimension;
  isHidden: boolean;
  setHidden(_: boolean)
  readonly isHiddenOrHasHiddenAncestor: boolean;
  isHorizontalContentSizeConstraintActive: boolean;
  setHorizontalContentSizeConstraintActive(_: boolean)
  readonly isInFullScreenMode: boolean;
  readonly inLiveResize: boolean;
  readonly inputContext: NSTextInputContext;
  readonly intrinsicContentSize: NSSize;
  readonly lastBaselineAnchor: NSLayoutYAxisAnchor;
  readonly lastBaselineOffsetFromBottom: number;
  layer: CALayer;
  setLayer(_: CALayer)
  layerContentsPlacement: NSView.LayerContentsPlacement;
  setLayerContentsPlacement(_: NSView.LayerContentsPlacement)
  layerContentsRedrawPolicy: NSView.LayerContentsRedrawPolicy;
  setLayerContentsRedrawPolicy(_: NSView.LayerContentsRedrawPolicy)
  layerUsesCoreImageFilters: boolean;
  setLayerUsesCoreImageFilters(_: boolean)
  readonly layoutGuides: NSArray<NSLayoutGuide>;
  readonly leadingAnchor: NSLayoutXAxisAnchor;
  readonly leftAnchor: NSLayoutXAxisAnchor;
  readonly mouseDownCanMoveWindow: boolean;
  needsDisplay: boolean;
  setNeedsDisplay(_: boolean)
  needsLayout: boolean;
  setNeedsLayout(_: boolean)
  readonly needsPanelToBecomeKey: boolean;
  needsUpdateConstraints: boolean;
  setNeedsUpdateConstraints(_: boolean)
  nextKeyView: NSView;
  setNextKeyView(_: NSView)
  readonly nextValidKeyView: NSView;
  readonly isOpaque: boolean;
  readonly opaqueAncestor: NSView;
  readonly pageFooter: NSAttributedString;
  readonly pageHeader: NSAttributedString;
  postsBoundsChangedNotifications: boolean;
  setPostsBoundsChangedNotifications(_: boolean)
  postsFrameChangedNotifications: boolean;
  setPostsFrameChangedNotifications(_: boolean)
  preparedContentRect: NSRect;
  setPreparedContentRect(_: NSRect)
  readonly preservesContentDuringLiveResize: boolean;
  pressureConfiguration: NSPressureConfiguration;
  setPressureConfiguration(_: NSPressureConfiguration)
  readonly previousKeyView: NSView;
  readonly previousValidKeyView: NSView;
  readonly printJobTitle: string;
  readonly rectPreservedDuringLiveResize: NSRect;
  readonly registeredDraggedTypes: NSArray<string>;
  readonly rightAnchor: NSLayoutXAxisAnchor;
  readonly isRotatedFromBase: boolean;
  readonly isRotatedOrScaledFromBase: boolean;
  shadow: NSShadow;
  setShadow(_: NSShadow)
  subviews: NSArray<NSView>;
  setSubviews(_: NSArray<NSView>)
  readonly superview: NSView;
  readonly tag: number;
  toolTip: string;
  setToolTip(_: string)
  readonly topAnchor: NSLayoutYAxisAnchor;
  readonly trackingAreas: NSArray<NSTrackingArea>;
  readonly trailingAnchor: NSLayoutXAxisAnchor;
  translatesAutoresizingMaskIntoConstraints: boolean;
  setTranslatesAutoresizingMaskIntoConstraints(_: boolean)
  userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection;
  setUserInterfaceLayoutDirection(_: NSUserInterfaceLayoutDirection)
  isVerticalContentSizeConstraintActive: boolean;
  setVerticalContentSizeConstraintActive(_: boolean)
  readonly visibleRect: NSRect;
  readonly wantsDefaultClipping: boolean;
  wantsLayer: boolean;
  setWantsLayer(_: boolean)
  wantsRestingTouches: boolean;
  setWantsRestingTouches(_: boolean)
  readonly wantsUpdateLayer: boolean;
  readonly widthAdjustLimit: number;
  readonly widthAnchor: NSLayoutDimension;
  readonly window: NSWindow;
  static isCompatibleWithResponsiveScrolling(): boolean;
  static defaultFocusRingType(): NSFocusRingType;
  static defaultMenu(): NSMenu;
  static focusView(): NSView;
  static requiresConstraintBasedLayout(): boolean;
  accessibilityActivationPoint: NSPoint;
  setAccessibilityActivationPoint(_: NSPoint) // inherited from NSAccessibility
  accessibilityAllowedValues: NSArray<number>;
  setAccessibilityAllowedValues(_: NSArray<number>) // inherited from NSAccessibility
  isAccessibilityAlternateUIVisible: boolean;
  setAccessibilityAlternateUIVisible(_: boolean) // inherited from NSAccessibility
  accessibilityApplicationFocusedUIElement: any;
  setAccessibilityApplicationFocusedUIElement(_: any) // inherited from NSAccessibility
  accessibilityCancelButton: any;
  setAccessibilityCancelButton(_: any) // inherited from NSAccessibility
  accessibilityChildren: NSArray<any>;
  setAccessibilityChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;
  setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>) // inherited from NSAccessibility
  accessibilityClearButton: any;
  setAccessibilityClearButton(_: any) // inherited from NSAccessibility
  accessibilityCloseButton: any;
  setAccessibilityCloseButton(_: any) // inherited from NSAccessibility
  accessibilityColumnCount: number;
  setAccessibilityColumnCount(_: number) // inherited from NSAccessibility
  accessibilityColumnHeaderUIElements: NSArray<any>;
  setAccessibilityColumnHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumnIndexRange: NSRange;
  setAccessibilityColumnIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityColumnTitles: NSArray<any>;
  setAccessibilityColumnTitles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumns: NSArray<any>;
  setAccessibilityColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityContents: NSArray<any>;
  setAccessibilityContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityCriticalValue: any;
  setAccessibilityCriticalValue(_: any) // inherited from NSAccessibility
  accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;
  setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>) // inherited from NSAccessibility
  accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;
  setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>) // inherited from NSAccessibility
  accessibilityDecrementButton: any;
  setAccessibilityDecrementButton(_: any) // inherited from NSAccessibility
  accessibilityDefaultButton: any;
  setAccessibilityDefaultButton(_: any) // inherited from NSAccessibility
  isAccessibilityDisclosed: boolean;
  setAccessibilityDisclosed(_: boolean) // inherited from NSAccessibility
  accessibilityDisclosedByRow: any;
  setAccessibilityDisclosedByRow(_: any) // inherited from NSAccessibility
  accessibilityDisclosedRows: any;
  setAccessibilityDisclosedRows(_: any) // inherited from NSAccessibility
  accessibilityDisclosureLevel: number;
  setAccessibilityDisclosureLevel(_: number) // inherited from NSAccessibility
  accessibilityDocument: string;
  setAccessibilityDocument(_: string) // inherited from NSAccessibility
  isAccessibilityEdited: boolean;
  setAccessibilityEdited(_: boolean) // inherited from NSAccessibility
  isAccessibilityElement: boolean;
  setAccessibilityElement(_: boolean) // inherited from NSAccessibility
  isAccessibilityEnabled: boolean;
  setAccessibilityEnabled(_: boolean) // inherited from NSAccessibility
  isAccessibilityExpanded: boolean;
  setAccessibilityExpanded(_: boolean) // inherited from NSAccessibility
  accessibilityExtrasMenuBar: any;
  setAccessibilityExtrasMenuBar(_: any) // inherited from NSAccessibility
  accessibilityFilename: string;
  setAccessibilityFilename(_: string) // inherited from NSAccessibility
  isAccessibilityFocused: boolean;
  setAccessibilityFocused(_: boolean) // inherited from NSAccessibility
  accessibilityFocusedWindow: any;
  setAccessibilityFocusedWindow(_: any) // inherited from NSAccessibility
  accessibilityFrame: NSRect;
  setAccessibilityFrame(_: NSRect) // inherited from NSAccessibility
  isAccessibilityFrontmost: boolean;
  setAccessibilityFrontmost(_: boolean) // inherited from NSAccessibility
  accessibilityFullScreenButton: any;
  setAccessibilityFullScreenButton(_: any) // inherited from NSAccessibility
  accessibilityGrowArea: any;
  setAccessibilityGrowArea(_: any) // inherited from NSAccessibility
  accessibilityHandles: NSArray<any>;
  setAccessibilityHandles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityHeader: any;
  setAccessibilityHeader(_: any) // inherited from NSAccessibility
  accessibilityHelp: string;
  setAccessibilityHelp(_: string) // inherited from NSAccessibility
  isAccessibilityHidden: boolean;
  setAccessibilityHidden(_: boolean) // inherited from NSAccessibility
  accessibilityHorizontalScrollBar: any;
  setAccessibilityHorizontalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityHorizontalUnitDescription: string;
  setAccessibilityHorizontalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityHorizontalUnits: NSAccessibility.Units;
  setAccessibilityHorizontalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityIdentifier: string;
  setAccessibilityIdentifier(_: string) // inherited from NSAccessibility
  accessibilityIncrementButton: any;
  setAccessibilityIncrementButton(_: any) // inherited from NSAccessibility
  accessibilityIndex: number;
  setAccessibilityIndex(_: number) // inherited from NSAccessibility
  accessibilityInsertionPointLineNumber: number;
  setAccessibilityInsertionPointLineNumber(_: number) // inherited from NSAccessibility
  accessibilityLabel: string;
  setAccessibilityLabel(_: string) // inherited from NSAccessibility
  accessibilityLabelUIElements: NSArray<any>;
  setAccessibilityLabelUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityLabelValue: number;
  setAccessibilityLabelValue(_: number) // inherited from NSAccessibility
  accessibilityLinkedUIElements: NSArray<any>;
  setAccessibilityLinkedUIElements(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityMain: boolean;
  setAccessibilityMain(_: boolean) // inherited from NSAccessibility
  accessibilityMainWindow: any;
  setAccessibilityMainWindow(_: any) // inherited from NSAccessibility
  accessibilityMarkerGroupUIElement: any;
  setAccessibilityMarkerGroupUIElement(_: any) // inherited from NSAccessibility
  accessibilityMarkerTypeDescription: string;
  setAccessibilityMarkerTypeDescription(_: string) // inherited from NSAccessibility
  accessibilityMarkerUIElements: NSArray<any>;
  setAccessibilityMarkerUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityMarkerValues: any;
  setAccessibilityMarkerValues(_: any) // inherited from NSAccessibility
  accessibilityMaxValue: any;
  setAccessibilityMaxValue(_: any) // inherited from NSAccessibility
  accessibilityMenuBar: any;
  setAccessibilityMenuBar(_: any) // inherited from NSAccessibility
  accessibilityMinValue: any;
  setAccessibilityMinValue(_: any) // inherited from NSAccessibility
  accessibilityMinimizeButton: any;
  setAccessibilityMinimizeButton(_: any) // inherited from NSAccessibility
  isAccessibilityMinimized: boolean;
  setAccessibilityMinimized(_: boolean) // inherited from NSAccessibility
  isAccessibilityModal: boolean;
  setAccessibilityModal(_: boolean) // inherited from NSAccessibility
  accessibilityNextContents: NSArray<any>;
  setAccessibilityNextContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityNumberOfCharacters: number;
  setAccessibilityNumberOfCharacters(_: number) // inherited from NSAccessibility
  isAccessibilityOrderedByRow: boolean;
  setAccessibilityOrderedByRow(_: boolean) // inherited from NSAccessibility
  accessibilityOrientation: NSAccessibility.Orientation;
  setAccessibilityOrientation(_: NSAccessibility.Orientation) // inherited from NSAccessibility
  accessibilityOverflowButton: any;
  setAccessibilityOverflowButton(_: any) // inherited from NSAccessibility
  accessibilityParent: any;
  setAccessibilityParent(_: any) // inherited from NSAccessibility
  accessibilityPlaceholderValue: string;
  setAccessibilityPlaceholderValue(_: string) // inherited from NSAccessibility
  accessibilityPreviousContents: NSArray<any>;
  setAccessibilityPreviousContents(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityProtectedContent: boolean;
  setAccessibilityProtectedContent(_: boolean) // inherited from NSAccessibility
  accessibilityProxy: any;
  setAccessibilityProxy(_: any) // inherited from NSAccessibility
  isAccessibilityRequired: boolean;
  setAccessibilityRequired(_: boolean) // inherited from NSAccessibility
  accessibilityRole: string;
  setAccessibilityRole(_: string) // inherited from NSAccessibility
  accessibilityRoleDescription: string;
  setAccessibilityRoleDescription(_: string) // inherited from NSAccessibility
  accessibilityRowCount: number;
  setAccessibilityRowCount(_: number) // inherited from NSAccessibility
  accessibilityRowHeaderUIElements: NSArray<any>;
  setAccessibilityRowHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRowIndexRange: NSRange;
  setAccessibilityRowIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityRows: NSArray<any>;
  setAccessibilityRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRulerMarkerType: NSAccessibility.RulerMarkerType;
  setAccessibilityRulerMarkerType(_: NSAccessibility.RulerMarkerType) // inherited from NSAccessibility
  accessibilitySearchButton: any;
  setAccessibilitySearchButton(_: any) // inherited from NSAccessibility
  accessibilitySearchMenu: any;
  setAccessibilitySearchMenu(_: any) // inherited from NSAccessibility
  isAccessibilitySelected: boolean;
  setAccessibilitySelected(_: boolean) // inherited from NSAccessibility
  accessibilitySelectedCells: NSArray<any>;
  setAccessibilitySelectedCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedChildren: NSArray<any>;
  setAccessibilitySelectedChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedColumns: NSArray<any>;
  setAccessibilitySelectedColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedRows: NSArray<any>;
  setAccessibilitySelectedRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedText: string;
  setAccessibilitySelectedText(_: string) // inherited from NSAccessibility
  accessibilitySelectedTextRange: NSRange;
  setAccessibilitySelectedTextRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySelectedTextRanges: NSArray<NSValue>;
  setAccessibilitySelectedTextRanges(_: NSArray<NSValue>) // inherited from NSAccessibility
  accessibilityServesAsTitleForUIElements: NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedCharacterRange: NSRange;
  setAccessibilitySharedCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySharedFocusElements: NSArray<any>;
  setAccessibilitySharedFocusElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedTextUIElements: NSArray<any>;
  setAccessibilitySharedTextUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityShownMenu: any;
  setAccessibilityShownMenu(_: any) // inherited from NSAccessibility
  accessibilitySortDirection: NSAccessibility.SortDirection;
  setAccessibilitySortDirection(_: NSAccessibility.SortDirection) // inherited from NSAccessibility
  accessibilitySplitters: NSArray<any>;
  setAccessibilitySplitters(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySubrole: string;
  setAccessibilitySubrole(_: string) // inherited from NSAccessibility
  accessibilityTabs: NSArray<any>;
  setAccessibilityTabs(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityTitle: string;
  setAccessibilityTitle(_: string) // inherited from NSAccessibility
  accessibilityTitleUIElement: any;
  setAccessibilityTitleUIElement(_: any) // inherited from NSAccessibility
  accessibilityToolbarButton: any;
  setAccessibilityToolbarButton(_: any) // inherited from NSAccessibility
  accessibilityTopLevelUIElement: any;
  setAccessibilityTopLevelUIElement(_: any) // inherited from NSAccessibility
  accessibilityURL: NSURL;
  setAccessibilityURL(_: NSURL) // inherited from NSAccessibility
  accessibilityUnitDescription: string;
  setAccessibilityUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityUnits: NSAccessibility.Units;
  setAccessibilityUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityValue: any;
  setAccessibilityValue(_: any) // inherited from NSAccessibility
  accessibilityValueDescription: string;
  setAccessibilityValueDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalScrollBar: any;
  setAccessibilityVerticalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityVerticalUnitDescription: string;
  setAccessibilityVerticalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalUnits: NSAccessibility.Units;
  setAccessibilityVerticalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityVisibleCells: NSArray<any>;
  setAccessibilityVisibleCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleCharacterRange: NSRange;
  setAccessibilityVisibleCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilityVisibleChildren: NSArray<any>;
  setAccessibilityVisibleChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleColumns: NSArray<any>;
  setAccessibilityVisibleColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleRows: NSArray<any>;
  setAccessibilityVisibleRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityWarningValue: any;
  setAccessibilityWarningValue(_: any) // inherited from NSAccessibility
  accessibilityWindow: any;
  setAccessibilityWindow(_: any) // inherited from NSAccessibility
  accessibilityWindows: NSArray<any>;
  setAccessibilityWindows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityZoomButton: any;
  setAccessibilityZoomButton(_: any) // inherited from NSAccessibility
  animations: NSDictionary<string, any>;
  setAnimations(_: NSDictionary<string, any>) // inherited from NSAnimatablePropertyContainer
  appearance: NSAppearance;
  setAppearance(_: NSAppearance) // inherited from NSAppearanceCustomization
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly effectiveAppearance: NSAppearance; // inherited from NSAppearanceCustomization
  readonly hash: number; // inherited from NSObject
  identifier: string;
  setIdentifier(_: string) // inherited from NSUserInterfaceItemIdentification
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  acceptsFirstMouse(for_?: NSEvent): boolean;
  accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;
  accessibilityCellForColumnRow(_: number, row: number): any;
  accessibilityFrame(): NSRect;
  accessibilityFrameForRange(_: NSRange): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLayoutPointForScreenPoint(_: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(_: NSSize): NSSize;
  accessibilityLineForIndex(_: number): number;
  accessibilityParent(): any;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  accessibilityRTFForRange(_: NSRange): Data;
  accessibilityRangeForIndex(_: number): NSRange;
  accessibilityRangeForLine(_: number): NSRange;
  accessibilityRangeForPosition(_: NSPoint): NSRange;
  accessibilityScreenPointForLayoutPoint(_: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(_: NSSize): NSSize;
  accessibilityStringForRange(_: NSRange): string;
  accessibilityStyleRangeForIndex(_: number): NSRange;
  addConstraint(_: NSLayoutConstraint): void;
  addConstraints(_: NSArray<NSLayoutConstraint>): void;
  addCursorRectCursor(_: NSRect, cursor: NSCursor): void;
  addGestureRecognizer(_: NSGestureRecognizer): void;
  addLayoutGuide(_: NSLayoutGuide): void;
  addSubview(_: NSView): void;
  addSubviewPositionedRelativeTo(_: NSView, positioned: NSWindow.OrderingMode, relativeTo?: NSView): void;
  addToolTipRectOwnerUserData(_: NSRect, owner: any, userData?: any): number;
  addTrackingArea(_: NSTrackingArea): void;
  addTrackingRectOwnerUserDataAssumeInside(_: NSRect, owner: any, userData?: any, assumeInside: boolean): number;
  adjustPageHeightNewTopBottomLimit(_: number, top: number, bottom: number, limit: number): void;
  adjustPageWidthNewLeftRightLimit(_: number, left: number, right: number, limit: number): void;
  adjustScroll(_: NSRect): NSRect;
  alignmentRectForFrame(forFrame: NSRect): NSRect;
  ancestorSharedWithView(with_: NSView): NSView;
  animationForKey(forKey: string): any;
  animator(): this;
  autoscroll(with_: NSEvent): boolean;
  backingAlignedRectOptions(_: NSRect, options: AlignmentOptions): NSRect;
  beginDocument(): void;
  beginDraggingSessionWithItemsEventSource(with_: NSArray<NSDraggingItem>, event: NSEvent, source: NSDraggingSource): NSDraggingSession;
  beginPageInRectAtPlacement(in_: NSRect, atPlacement: NSPoint): void;
  bitmapImageRepForCachingDisplayInRect(in_: NSRect): NSBitmapImageRep;
  cacheDisplayInRectToBitmapImageRep(in_: NSRect, to: NSBitmapImageRep): void;
  centerScanRect(_: NSRect): NSRect;
  concludeDragOperation(_?: NSDraggingInfo): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  constraintsAffectingLayoutForOrientation(for_: NSLayoutConstraint.Orientation): NSArray<NSLayoutConstraint>;
  contentCompressionResistancePriorityForOrientation(for_: NSLayoutConstraint.Orientation): number;
  contentHuggingPriorityForOrientation(for_: NSLayoutConstraint.Orientation): number;
  convertPointFromView(_: NSPoint, from?: NSView): NSPoint;
  convertPointToView(_: NSPoint, to?: NSView): NSPoint;
  convertPointFromBacking(_: NSPoint): NSPoint;
  convertPointFromLayer(_: NSPoint): NSPoint;
  convertPointToBacking(_: NSPoint): NSPoint;
  convertPointToLayer(_: NSPoint): NSPoint;
  convertRectFromView(_: NSRect, from?: NSView): NSRect;
  convertRectToView(_: NSRect, to?: NSView): NSRect;
  convertRectFromBacking(_: NSRect): NSRect;
  convertRectFromLayer(_: NSRect): NSRect;
  convertRectToBacking(_: NSRect): NSRect;
  convertRectToLayer(_: NSRect): NSRect;
  convertSizeFromView(_: NSSize, from?: NSView): NSSize;
  convertSizeToView(_: NSSize, to?: NSView): NSSize;
  convertSizeFromBacking(_: NSSize): NSSize;
  convertSizeFromLayer(_: NSSize): NSSize;
  convertSizeToBacking(_: NSSize): NSSize;
  convertSizeToLayer(_: NSSize): NSSize;
  dataWithEPSInsideRect(inside: NSRect): Data;
  dataWithPDFInsideRect(inside: NSRect): Data;
  didAddSubview(_: NSView): void;
  didCloseMenuWithEvent(_: NSMenu, with_?: NSEvent): void;
  discardCursorRects(): void;
  display(): void;
  displayIfNeeded(): void;
  displayIfNeededIgnoringOpacity(): void;
  displayIfNeededInRect(_: NSRect): void;
  displayIfNeededInRectIgnoringOpacity(_: NSRect): void;
  displayRect(_: NSRect): void;
  displayRectIgnoringOpacity(_: NSRect): void;
  displayRectIgnoringOpacityInContext(_: NSRect, in_: NSGraphicsContext): void;
  draggingEnded(_: NSDraggingInfo): void;
  draggingEntered(_: NSDraggingInfo): NSDragOperation;
  draggingExited(_?: NSDraggingInfo): void;
  draggingUpdated(_: NSDraggingInfo): NSDragOperation;
  drawFocusRingMask(): void;
  drawPageBorderWithSize(with_: NSSize): void;
  drawRect(_: NSRect): void;
  endDocument(): void;
  endPage(): void;
  enterFullScreenModeWithOptions(_: NSScreen, withOptions?: NSDictionary<string, any>): boolean;
  exerciseAmbiguityInLayout(): void;
  exitFullScreenModeWithOptions(options?: NSDictionary<string, any>): void;
  frameForAlignmentRect(forAlignmentRect: NSRect): NSRect;
  getRectsBeingDrawnCount(_?: NSRect, count?: number): void;
  getRectsExposedDuringLiveResizeCount(_: NSRect, count: number): void;
  hitTest(_: NSPoint): NSView;
  static createWithFrame(frame: NSRect): this;
  invalidateIntrinsicContentSize(): void;
  isAccessibilityFocused(): boolean;
  isAccessibilitySelectorAllowed(_: string): boolean;
  isDescendantOf(of: NSView): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  knowsPageRange(_: NSRange): boolean;
  layout(): void;
  layoutSubtreeIfNeeded(): void;
  locationOfPrintRect(_: NSRect): NSPoint;
  makeBackingLayer(): CALayer;
  menuForEvent(for_: NSEvent): NSMenu;
  mouseInRect(_: NSPoint, in_: NSRect): boolean;
  needsToDrawRect(_: NSRect): boolean;
  noteFocusRingMaskChanged(): void;
  performDragOperation(_: NSDraggingInfo): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  prepareContentInRect(in_: NSRect): void;
  prepareForDragOperation(_: NSDraggingInfo): boolean;
  prepareForReuse(): void;
  print(_?: any): void;
  rectForPage(_: number): NSRect;
  rectForSmartMagnificationAtPointInRect(at: NSPoint, in_: NSRect): NSRect;
  reflectScrolledClipView(_: NSClipView): void;
  registerForDraggedTypes(_: NSArray<string>): void;
  removeAllToolTips(): void;
  removeConstraint(_: NSLayoutConstraint): void;
  removeConstraints(_: NSArray<NSLayoutConstraint>): void;
  removeCursorRectCursor(_: NSRect, cursor: NSCursor): void;
  removeFromSuperview(): void;
  removeFromSuperviewWithoutNeedingDisplay(): void;
  removeGestureRecognizer(_: NSGestureRecognizer): void;
  removeLayoutGuide(_: NSLayoutGuide): void;
  removeToolTip(_: number): void;
  removeTrackingArea(_: NSTrackingArea): void;
  removeTrackingRect(_: number): void;
  replaceSubviewWith(_: NSView, with_: NSView): void;
  resetCursorRects(): void;
  resizeSubviewsWithOldSize(withOldSize: NSSize): void;
  resizeWithOldSuperviewSize(withOldSuperviewSize: NSSize): void;
  respondsToSelector(_: string): boolean;
  rotateByAngle(byDegrees: number): void;
  rulerViewDidAddMarker(_: NSRulerView, didAdd: NSRulerMarker): void;
  rulerViewDidMoveMarker(_: NSRulerView, didMove: NSRulerMarker): void;
  rulerViewDidRemoveMarker(_: NSRulerView, didRemove: NSRulerMarker): void;
  rulerViewHandleMouseDown(_: NSRulerView, handleMouseDownWith: NSEvent): void;
  rulerViewLocationForPoint(_: NSRulerView, locationFor: NSPoint): number;
  rulerViewPointForLocation(_: NSRulerView, pointForLocation: number): NSPoint;
  rulerViewShouldAddMarker(_: NSRulerView, shouldAdd: NSRulerMarker): boolean;
  rulerViewShouldMoveMarker(_: NSRulerView, shouldMove: NSRulerMarker): boolean;
  rulerViewShouldRemoveMarker(_: NSRulerView, shouldRemove: NSRulerMarker): boolean;
  rulerViewWillAddMarkerAtLocation(_: NSRulerView, willAdd: NSRulerMarker, atLocation: number): number;
  rulerViewWillMoveMarkerToLocation(_: NSRulerView, willMove: NSRulerMarker, toLocation: number): number;
  rulerViewWillSetClientView(_: NSRulerView, willSetClientView: NSView): void;
  scaleUnitSquareToSize(to: NSSize): void;
  scrollClipViewToPoint(_: NSClipView, to: NSPoint): void;
  scrollPoint(_: NSPoint): void;
  scrollRectToVisible(_: NSRect): boolean;
  self(): this;
  setBoundsOrigin(_: NSPoint): void;
  setBoundsSize(_: NSSize): void;
  setContentCompressionResistancePriorityForOrientation(_: number, for_: NSLayoutConstraint.Orientation): void;
  setContentHuggingPriorityForOrientation(_: number, for_: NSLayoutConstraint.Orientation): void;
  setFrameOrigin(_: NSPoint): void;
  setFrameSize(_: NSSize): void;
  setKeyboardFocusRingNeedsDisplayInRect(_: NSRect): void;
  setNeedsDisplayInRect(_: NSRect): void;
  shouldDelayWindowOrderingForEvent(for_: NSEvent): boolean;
  showDefinitionForAttributedStringAtPoint(for_?: NSAttributedString, at: NSPoint): void;
  showDefinitionForAttributedStringRangeOptionsBaselineOriginProvider(for_?: NSAttributedString, range: NSRange, options?: NSDictionary<string, any>, baselineOriginProvider?: (p1: NSRange) => NSPoint): void;
  sortSubviewsUsingFunctionContext(_?: (p1: NSView, p2: NSView, p3: any) => ComparisonResult, context?: any): void;
  translateOriginToPoint(to: NSPoint): void;
  translateRectsNeedingDisplayInRectBy(in_: NSRect, by: NSSize): void;
  unregisterDraggedTypes(): void;
  updateConstraints(): void;
  updateConstraintsForSubtreeIfNeeded(): void;
  updateDraggingItemsForDrag(_?: NSDraggingInfo): void;
  updateLayer(): void;
  updateTrackingAreas(): void;
  viewDidChangeBackingProperties(): void;
  viewDidChangeEffectiveAppearance(): void;
  viewDidEndLiveResize(): void;
  viewDidHide(): void;
  viewDidMoveToSuperview(): void;
  viewDidMoveToWindow(): void;
  viewDidUnhide(): void;
  viewWillDraw(): void;
  viewWillMoveToSuperview(toSuperview?: NSView): void;
  viewWillMoveToWindow(toWindow?: NSWindow): void;
  viewWillStartLiveResize(): void;
  viewWithTag(_: number): NSView;
  wantsPeriodicDraggingUpdates(): boolean;
  willOpenMenuWithEvent(_: NSMenu, with_: NSEvent): void;
  willRemoveSubview(_: NSView): void;
  writeEPSInsideRectToPasteboard(inside: NSRect, to: NSPasteboard): void;
  writePDFInsideRectToPasteboard(inside: NSRect, to: NSPasteboard): void;
}

declare class NSViewAnimation extends NSAnimation {
  viewAnimations: NSArray<NSDictionary<string, any>>;
  setViewAnimations(_: NSArray<NSDictionary<string, any>>)
  static createWithViewAnimations(viewAnimations: NSArray<NSDictionary<string, any>>): this;
}

declare var NSViewAnimationEffectKey: string;

declare var NSViewAnimationEndFrameKey: string;

declare var NSViewAnimationFadeInEffect: string;

declare var NSViewAnimationFadeOutEffect: string;

declare var NSViewAnimationStartFrameKey: string;

declare var NSViewAnimationTargetKey: string;

declare var NSViewBoundsDidChangeNotification: string;

declare class NSViewController extends NSResponder implements NSEditor, NSSeguePerforming, NSUserInterfaceItemIdentification, NSExtensionRequestHandling {
  childViewControllers: NSArray<NSViewController>;
  setChildViewControllers(_: NSArray<NSViewController>)
  readonly extensionContext: NSExtensionContext;
  readonly nibBundle: Bundle;
  readonly nibName: string;
  readonly parentViewController: NSViewController;
  preferredContentSize: NSSize;
  setPreferredContentSize(_: NSSize)
  readonly preferredMaximumSize: NSSize;
  readonly preferredMinimumSize: NSSize;
  preferredScreenOrigin: NSPoint;
  setPreferredScreenOrigin(_: NSPoint)
  readonly presentedViewControllers: NSArray<NSViewController>;
  readonly presentingViewController: NSViewController;
  representedObject: any;
  setRepresentedObject(_: any)
  sourceItemView: NSView;
  setSourceItemView(_: NSView)
  readonly storyboard: NSStoryboard;
  title: string;
  setTitle(_: string)
  view: NSView;
  setView(_: NSView)
  readonly isViewLoaded: boolean;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  identifier: string;
  setIdentifier(_: string) // inherited from NSUserInterfaceItemIdentification
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  addChildViewController(_: NSViewController): void;
  beginRequestWithExtensionContext(with_: NSExtensionContext): void;
  commitEditing(): boolean;
  commitEditingAndReturnError(): boolean;
  commitEditingWithDelegateDidCommitSelectorContextInfo(withDelegate?: any, didCommit?: string, contextInfo?: any): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  discardEditing(): void;
  dismissController(_?: any): void;
  dismissViewController(_: NSViewController): void;
  static createWithNibNameBundle(nibName?: string, bundle?: Bundle): this;
  insertChildViewControllerAtIndex(_: NSViewController, at: number): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  loadView(): void;
  performSegueWithIdentifierSender(withIdentifier: string, sender?: any): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  preferredContentSizeDidChangeForViewController(for_: NSViewController): void;
  prepareForSegueSender(for_: NSStoryboardSegue, sender?: any): void;
  presentViewControllerAnimator(_: NSViewController, animator: NSViewControllerPresentationAnimator): void;
  presentViewControllerAsPopoverRelativeToRectOfViewPreferredEdgeBehavior(_: NSViewController, asPopoverRelativeTo: NSRect, of: NSView, preferredEdge: NSRectEdge, behavior: NSPopover.Behavior): void;
  presentViewControllerAsModalWindow(_: NSViewController): void;
  presentViewControllerAsSheet(_: NSViewController): void;
  removeChildViewControllerAtIndex(at: number): void;
  removeFromParentViewController(): void;
  respondsToSelector(_: string): boolean;
  self(): this;
  shouldPerformSegueWithIdentifierSender(withIdentifier: string, sender?: any): boolean;
  transitionFromViewControllerToViewControllerOptionsCompletionHandler(from: NSViewController, to: NSViewController, options: NSViewController.TransitionOptions, completionHandler?: () => void): void;
  updateViewConstraints(): void;
  viewDidAppear(): void;
  viewDidDisappear(): void;
  viewDidLayout(): void;
  viewDidLoad(): void;
  viewWillAppear(): void;
  viewWillDisappear(): void;
  viewWillLayout(): void;
  viewWillTransitionToSize(to: NSSize): void;
}

interface NSViewControllerPresentationAnimator extends NSObject {
  animateDismissalOfViewControllerFromViewController(of: NSViewController, from: NSViewController): void;
  animatePresentationOfViewControllerFromViewController(of: NSViewController, from: NSViewController): void;
}

declare var NSViewControllerPresentationAnimator: {
  prototype: NSViewControllerPresentationAnimator;
};

declare var NSViewDidUpdateTrackingAreasNotification: string;

declare var NSViewFrameDidChangeNotification: string;

interface NSViewLayerContentScaleDelegate extends NSObject {
  layerShouldInheritContentsScaleFromWindow?(_: CALayer, shouldInheritContentsScale: number, from: NSWindow): boolean;
}

declare var NSViewLayerContentScaleDelegate: {
  prototype: NSViewLayerContentScaleDelegate;
};

declare var NSViewModeDocumentAttribute: string;

declare var NSViewNoIntrinsicMetric: number;

declare var NSViewSizeDocumentAttribute: string;

interface NSViewToolTipOwner extends NSObject {
  viewStringForToolTipPointUserData(_: NSView, stringForToolTip: number, point: NSPoint, userData?: any): string;
}

declare var NSViewToolTipOwner: {
  prototype: NSViewToolTipOwner;
};

declare var NSViewZoomDocumentAttribute: string;

declare var NSVisibleBinding: string;

declare class NSVisualEffectView extends NSView {
  blendingMode: NSVisualEffectView.BlendingMode;
  setBlendingMode(_: NSVisualEffectView.BlendingMode)
  isEmphasized: boolean;
  setEmphasized(_: boolean)
  readonly interiorBackgroundStyle: NSView.BackgroundStyle;
  maskImage: NSImage;
  setMaskImage(_: NSImage)
  material: NSVisualEffectView.Material;
  setMaterial(_: NSVisualEffectView.Material)
  state: NSVisualEffectView.State;
  setState(_: NSVisualEffectView.State)
}

declare var NSVoiceAge: string;

declare var NSVoiceDemoText: string;

declare var NSVoiceGender: string;

declare var NSVoiceGenderFemale: string;

declare var NSVoiceGenderMale: string;

declare var NSVoiceGenderNeuter: string;

declare var NSVoiceIdentifier: string;

declare var NSVoiceIndividuallySpokenCharacters: string;

declare var NSVoiceLocaleIdentifier: string;

declare var NSVoiceName: string;

declare var NSVoiceSupportedCharacters: string;


declare const NSWantsBidiLevels: number;
declare var NSWarningValueBinding: string;

declare var NSWebArchiveTextDocumentType: string;

declare var NSWebPreferencesDocumentOption: string;

declare var NSWebResourceLoadDelegateDocumentOption: string;

declare var NSWhite: number;

declare var NSWidthBinding: string;

declare class NSWindow extends NSResponder implements NSAccessibility, NSAccessibilityElementProtocol, NSAnimatablePropertyContainer, NSAppearanceCustomization, NSMenuItemValidation, NSUserInterfaceItemIdentification, NSUserInterfaceValidations {
  static contentRectForFrameRectStyleMask(forFrameRect: NSRect, styleMask: NSWindow.StyleMask): NSRect;
  static defaultAnimationForKey(forKey: string): any;
  static frameRectForContentRectStyleMask(forContentRect: NSRect, styleMask: NSWindow.StyleMask): NSRect;
  static minFrameWidthWithTitleStyleMask(withTitle: string, styleMask: NSWindow.StyleMask): number;
  static removeFrameUsingName(usingName: string): void;
  static standardWindowButtonForStyleMask(_: NSWindow.ButtonType, for_: NSWindow.StyleMask): NSButton;
  static windowNumberAtPointBelowWindowWithWindowNumber(at: NSPoint, belowWindowWithWindowNumber: number): number;
  static windowNumbersWithOptions(options: NSWindow.NumberListOptions): NSArray<number>;
  acceptsMouseMovedEvents: boolean;
  setAcceptsMouseMovedEvents(_: boolean)
  allowsConcurrentViewDrawing: boolean;
  setAllowsConcurrentViewDrawing(_: boolean)
  allowsToolTipsWhenApplicationIsInactive: boolean;
  setAllowsToolTipsWhenApplicationIsInactive(_: boolean)
  alphaValue: number;
  setAlphaValue(_: number)
  animationBehavior: NSWindow.AnimationBehavior;
  setAnimationBehavior(_: NSWindow.AnimationBehavior)
  appearanceSource: NSObject;
  setAppearanceSource(_: NSObject)
  readonly areCursorRectsEnabled: boolean;
  aspectRatio: NSSize;
  setAspectRatio(_: NSSize)
  readonly attachedSheet: NSWindow;
  autorecalculatesKeyViewLoop: boolean;
  setAutorecalculatesKeyViewLoop(_: boolean)
  backgroundColor: NSColor;
  setBackgroundColor(_: NSColor)
  readonly backingScaleFactor: number;
  backingType: NSWindow.BackingStoreType;
  setBackingType(_: NSWindow.BackingStoreType)
  readonly canBecomeKeyWindow: boolean;
  readonly canBecomeMainWindow: boolean;
  canBecomeVisibleWithoutLogin: boolean;
  setCanBecomeVisibleWithoutLogin(_: boolean)
  canHide: boolean;
  setCanHide(_: boolean)
  readonly childWindows: NSArray<NSWindow>;
  collectionBehavior: NSWindow.CollectionBehavior;
  setCollectionBehavior(_: NSWindow.CollectionBehavior)
  colorSpace: NSColorSpace;
  setColorSpace(_: NSColorSpace)
  contentAspectRatio: NSSize;
  setContentAspectRatio(_: NSSize)
  readonly contentLayoutGuide: any;
  readonly contentLayoutRect: NSRect;
  contentMaxSize: NSSize;
  setContentMaxSize(_: NSSize)
  contentMinSize: NSSize;
  setContentMinSize(_: NSSize)
  contentResizeIncrements: NSSize;
  setContentResizeIncrements(_: NSSize)
  contentView: NSView;
  setContentView(_: NSView)
  contentViewController: NSViewController;
  setContentViewController(_: NSViewController)
  readonly currentEvent: NSEvent;
  readonly deepestScreen: NSScreen;
  defaultButtonCell: NSButtonCell;
  setDefaultButtonCell(_: NSButtonCell)
  delegate: NSWindowDelegate;
  setDelegate(_: NSWindowDelegate)
  depthLimit: NSWindow.Depth;
  setDepthLimit(_: NSWindow.Depth)
  readonly deviceDescription: NSDictionary<string, any>;
  displaysWhenScreenProfileChanges: boolean;
  setDisplaysWhenScreenProfileChanges(_: boolean)
  readonly dockTile: NSDockTile;
  isDocumentEdited: boolean;
  setDocumentEdited(_: boolean)
  isExcludedFromWindowsMenu: boolean;
  setExcludedFromWindowsMenu(_: boolean)
  readonly firstResponder: NSResponder;
  readonly isFloatingPanel: boolean;
  readonly frame: NSRect;
  readonly frameAutosaveName: string;
  readonly hasCloseBox: boolean;
  readonly hasDynamicDepthLimit: boolean;
  hasShadow: boolean;
  setHasShadow(_: boolean)
  readonly hasTitleBar: boolean;
  hidesOnDeactivate: boolean;
  setHidesOnDeactivate(_: boolean)
  ignoresMouseEvents: boolean;
  setIgnoresMouseEvents(_: boolean)
  readonly inLiveResize: boolean;
  initialFirstResponder: NSView;
  setInitialFirstResponder(_: NSView)
  readonly keyViewSelectionDirection: NSWindow.SelectionDirection;
  readonly isKeyWindow: boolean;
  level: number;
  setLevel(_: number)
  readonly isMainWindow: boolean;
  maxFullScreenContentSize: NSSize;
  setMaxFullScreenContentSize(_: NSSize)
  maxSize: NSSize;
  setMaxSize(_: NSSize)
  minFullScreenContentSize: NSSize;
  setMinFullScreenContentSize(_: NSSize)
  minSize: NSSize;
  setMinSize(_: NSSize)
  readonly isMiniaturizable: boolean;
  readonly isMiniaturized: boolean;
  miniwindowImage: NSImage;
  setMiniwindowImage(_: NSImage)
  miniwindowTitle: string;
  setMiniwindowTitle(_: string)
  readonly isModalPanel: boolean;
  readonly mouseLocationOutsideOfEventStream: NSPoint;
  isMovable: boolean;
  setMovable(_: boolean)
  isMovableByWindowBackground: boolean;
  setMovableByWindowBackground(_: boolean)
  readonly occlusionState: NSWindow.OcclusionState;
  readonly isOnActiveSpace: boolean;
  isOpaque: boolean;
  setOpaque(_: boolean)
  orderedIndex: number;
  setOrderedIndex(_: number)
  parentWindow: NSWindow;
  setParentWindow(_: NSWindow)
  preservesContentDuringLiveResize: boolean;
  setPreservesContentDuringLiveResize(_: boolean)
  preventsApplicationTerminationWhenModal: boolean;
  setPreventsApplicationTerminationWhenModal(_: boolean)
  isReleasedWhenClosed: boolean;
  setReleasedWhenClosed(_: boolean)
  representedFilename: string;
  setRepresentedFilename(_: string)
  representedURL: NSURL;
  setRepresentedURL(_: NSURL)
  readonly isResizable: boolean;
  readonly resizeFlags: NSEvent.ModifierFlags;
  resizeIncrements: NSSize;
  setResizeIncrements(_: NSSize)
  isRestorable: boolean;
  setRestorable(_: boolean)
  restorationClass: typeof NSObject;
  setRestorationClass(_: typeof NSObject)
  readonly screen: NSScreen;
  sharingType: NSWindow.SharingType;
  setSharingType(_: NSWindow.SharingType)
  readonly isSheet: boolean;
  readonly sheetParent: NSWindow;
  readonly sheets: NSArray<NSWindow>;
  showsResizeIndicator: boolean;
  setShowsResizeIndicator(_: boolean)
  showsToolbarButton: boolean;
  setShowsToolbarButton(_: boolean)
  readonly stringWithSavedFrame: string;
  styleMask: NSWindow.StyleMask;
  setStyleMask(_: NSWindow.StyleMask)
  readonly tab: NSWindowTab;
  readonly tabGroup: NSWindowTabGroup;
  readonly tabbedWindows: NSArray<NSWindow>;
  tabbingIdentifier: string;
  setTabbingIdentifier(_: string)
  tabbingMode: NSWindow.TabbingMode;
  setTabbingMode(_: NSWindow.TabbingMode)
  title: string;
  setTitle(_: string)
  titleVisibility: NSWindow.TitleVisibility;
  setTitleVisibility(_: NSWindow.TitleVisibility)
  titlebarAccessoryViewControllers: NSArray<NSTitlebarAccessoryViewController>;
  setTitlebarAccessoryViewControllers(_: NSArray<NSTitlebarAccessoryViewController>)
  titlebarAppearsTransparent: boolean;
  setTitlebarAppearsTransparent(_: boolean)
  toolbar: NSToolbar;
  setToolbar(_: NSToolbar)
  viewsNeedDisplay: boolean;
  setViewsNeedDisplay(_: boolean)
  readonly isVisible: boolean;
  windowController: NSWindowController;
  setWindowController(_: NSWindowController)
  readonly windowNumber: number;
  readonly windowRef: any;
  readonly windowTitlebarLayoutDirection: NSUserInterfaceLayoutDirection;
  readonly worksWhenModal: boolean;
  readonly isZoomable: boolean;
  readonly isZoomed: boolean;
  static allowsAutomaticWindowTabbing: boolean;
  setAllowsAutomaticWindowTabbing(_: boolean)
  static defaultDepthLimit(): NSWindow.Depth;
  static userTabbingPreference(): NSWindow.UserTabbingPreference;
  accessibilityActivationPoint: NSPoint;
  setAccessibilityActivationPoint(_: NSPoint) // inherited from NSAccessibility
  accessibilityAllowedValues: NSArray<number>;
  setAccessibilityAllowedValues(_: NSArray<number>) // inherited from NSAccessibility
  isAccessibilityAlternateUIVisible: boolean;
  setAccessibilityAlternateUIVisible(_: boolean) // inherited from NSAccessibility
  accessibilityApplicationFocusedUIElement: any;
  setAccessibilityApplicationFocusedUIElement(_: any) // inherited from NSAccessibility
  accessibilityCancelButton: any;
  setAccessibilityCancelButton(_: any) // inherited from NSAccessibility
  accessibilityChildren: NSArray<any>;
  setAccessibilityChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityChildrenInNavigationOrder: NSArray<NSAccessibilityElementProtocol>;
  setAccessibilityChildrenInNavigationOrder(_: NSArray<NSAccessibilityElementProtocol>) // inherited from NSAccessibility
  accessibilityClearButton: any;
  setAccessibilityClearButton(_: any) // inherited from NSAccessibility
  accessibilityCloseButton: any;
  setAccessibilityCloseButton(_: any) // inherited from NSAccessibility
  accessibilityColumnCount: number;
  setAccessibilityColumnCount(_: number) // inherited from NSAccessibility
  accessibilityColumnHeaderUIElements: NSArray<any>;
  setAccessibilityColumnHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumnIndexRange: NSRange;
  setAccessibilityColumnIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityColumnTitles: NSArray<any>;
  setAccessibilityColumnTitles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityColumns: NSArray<any>;
  setAccessibilityColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityContents: NSArray<any>;
  setAccessibilityContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityCriticalValue: any;
  setAccessibilityCriticalValue(_: any) // inherited from NSAccessibility
  accessibilityCustomActions: NSArray<NSAccessibilityCustomAction>;
  setAccessibilityCustomActions(_: NSArray<NSAccessibilityCustomAction>) // inherited from NSAccessibility
  accessibilityCustomRotors: NSArray<NSAccessibilityCustomRotor>;
  setAccessibilityCustomRotors(_: NSArray<NSAccessibilityCustomRotor>) // inherited from NSAccessibility
  accessibilityDecrementButton: any;
  setAccessibilityDecrementButton(_: any) // inherited from NSAccessibility
  accessibilityDefaultButton: any;
  setAccessibilityDefaultButton(_: any) // inherited from NSAccessibility
  isAccessibilityDisclosed: boolean;
  setAccessibilityDisclosed(_: boolean) // inherited from NSAccessibility
  accessibilityDisclosedByRow: any;
  setAccessibilityDisclosedByRow(_: any) // inherited from NSAccessibility
  accessibilityDisclosedRows: any;
  setAccessibilityDisclosedRows(_: any) // inherited from NSAccessibility
  accessibilityDisclosureLevel: number;
  setAccessibilityDisclosureLevel(_: number) // inherited from NSAccessibility
  accessibilityDocument: string;
  setAccessibilityDocument(_: string) // inherited from NSAccessibility
  isAccessibilityEdited: boolean;
  setAccessibilityEdited(_: boolean) // inherited from NSAccessibility
  isAccessibilityElement: boolean;
  setAccessibilityElement(_: boolean) // inherited from NSAccessibility
  isAccessibilityEnabled: boolean;
  setAccessibilityEnabled(_: boolean) // inherited from NSAccessibility
  isAccessibilityExpanded: boolean;
  setAccessibilityExpanded(_: boolean) // inherited from NSAccessibility
  accessibilityExtrasMenuBar: any;
  setAccessibilityExtrasMenuBar(_: any) // inherited from NSAccessibility
  accessibilityFilename: string;
  setAccessibilityFilename(_: string) // inherited from NSAccessibility
  isAccessibilityFocused: boolean;
  setAccessibilityFocused(_: boolean) // inherited from NSAccessibility
  accessibilityFocusedWindow: any;
  setAccessibilityFocusedWindow(_: any) // inherited from NSAccessibility
  accessibilityFrame: NSRect;
  setAccessibilityFrame(_: NSRect) // inherited from NSAccessibility
  isAccessibilityFrontmost: boolean;
  setAccessibilityFrontmost(_: boolean) // inherited from NSAccessibility
  accessibilityFullScreenButton: any;
  setAccessibilityFullScreenButton(_: any) // inherited from NSAccessibility
  accessibilityGrowArea: any;
  setAccessibilityGrowArea(_: any) // inherited from NSAccessibility
  accessibilityHandles: NSArray<any>;
  setAccessibilityHandles(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityHeader: any;
  setAccessibilityHeader(_: any) // inherited from NSAccessibility
  accessibilityHelp: string;
  setAccessibilityHelp(_: string) // inherited from NSAccessibility
  isAccessibilityHidden: boolean;
  setAccessibilityHidden(_: boolean) // inherited from NSAccessibility
  accessibilityHorizontalScrollBar: any;
  setAccessibilityHorizontalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityHorizontalUnitDescription: string;
  setAccessibilityHorizontalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityHorizontalUnits: NSAccessibility.Units;
  setAccessibilityHorizontalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityIdentifier: string;
  setAccessibilityIdentifier(_: string) // inherited from NSAccessibility
  accessibilityIncrementButton: any;
  setAccessibilityIncrementButton(_: any) // inherited from NSAccessibility
  accessibilityIndex: number;
  setAccessibilityIndex(_: number) // inherited from NSAccessibility
  accessibilityInsertionPointLineNumber: number;
  setAccessibilityInsertionPointLineNumber(_: number) // inherited from NSAccessibility
  accessibilityLabel: string;
  setAccessibilityLabel(_: string) // inherited from NSAccessibility
  accessibilityLabelUIElements: NSArray<any>;
  setAccessibilityLabelUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityLabelValue: number;
  setAccessibilityLabelValue(_: number) // inherited from NSAccessibility
  accessibilityLinkedUIElements: NSArray<any>;
  setAccessibilityLinkedUIElements(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityMain: boolean;
  setAccessibilityMain(_: boolean) // inherited from NSAccessibility
  accessibilityMainWindow: any;
  setAccessibilityMainWindow(_: any) // inherited from NSAccessibility
  accessibilityMarkerGroupUIElement: any;
  setAccessibilityMarkerGroupUIElement(_: any) // inherited from NSAccessibility
  accessibilityMarkerTypeDescription: string;
  setAccessibilityMarkerTypeDescription(_: string) // inherited from NSAccessibility
  accessibilityMarkerUIElements: NSArray<any>;
  setAccessibilityMarkerUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityMarkerValues: any;
  setAccessibilityMarkerValues(_: any) // inherited from NSAccessibility
  accessibilityMaxValue: any;
  setAccessibilityMaxValue(_: any) // inherited from NSAccessibility
  accessibilityMenuBar: any;
  setAccessibilityMenuBar(_: any) // inherited from NSAccessibility
  accessibilityMinValue: any;
  setAccessibilityMinValue(_: any) // inherited from NSAccessibility
  accessibilityMinimizeButton: any;
  setAccessibilityMinimizeButton(_: any) // inherited from NSAccessibility
  isAccessibilityMinimized: boolean;
  setAccessibilityMinimized(_: boolean) // inherited from NSAccessibility
  isAccessibilityModal: boolean;
  setAccessibilityModal(_: boolean) // inherited from NSAccessibility
  accessibilityNextContents: NSArray<any>;
  setAccessibilityNextContents(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityNumberOfCharacters: number;
  setAccessibilityNumberOfCharacters(_: number) // inherited from NSAccessibility
  isAccessibilityOrderedByRow: boolean;
  setAccessibilityOrderedByRow(_: boolean) // inherited from NSAccessibility
  accessibilityOrientation: NSAccessibility.Orientation;
  setAccessibilityOrientation(_: NSAccessibility.Orientation) // inherited from NSAccessibility
  accessibilityOverflowButton: any;
  setAccessibilityOverflowButton(_: any) // inherited from NSAccessibility
  accessibilityParent: any;
  setAccessibilityParent(_: any) // inherited from NSAccessibility
  accessibilityPlaceholderValue: string;
  setAccessibilityPlaceholderValue(_: string) // inherited from NSAccessibility
  accessibilityPreviousContents: NSArray<any>;
  setAccessibilityPreviousContents(_: NSArray<any>) // inherited from NSAccessibility
  isAccessibilityProtectedContent: boolean;
  setAccessibilityProtectedContent(_: boolean) // inherited from NSAccessibility
  accessibilityProxy: any;
  setAccessibilityProxy(_: any) // inherited from NSAccessibility
  isAccessibilityRequired: boolean;
  setAccessibilityRequired(_: boolean) // inherited from NSAccessibility
  accessibilityRole: string;
  setAccessibilityRole(_: string) // inherited from NSAccessibility
  accessibilityRoleDescription: string;
  setAccessibilityRoleDescription(_: string) // inherited from NSAccessibility
  accessibilityRowCount: number;
  setAccessibilityRowCount(_: number) // inherited from NSAccessibility
  accessibilityRowHeaderUIElements: NSArray<any>;
  setAccessibilityRowHeaderUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRowIndexRange: NSRange;
  setAccessibilityRowIndexRange(_: NSRange) // inherited from NSAccessibility
  accessibilityRows: NSArray<any>;
  setAccessibilityRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityRulerMarkerType: NSAccessibility.RulerMarkerType;
  setAccessibilityRulerMarkerType(_: NSAccessibility.RulerMarkerType) // inherited from NSAccessibility
  accessibilitySearchButton: any;
  setAccessibilitySearchButton(_: any) // inherited from NSAccessibility
  accessibilitySearchMenu: any;
  setAccessibilitySearchMenu(_: any) // inherited from NSAccessibility
  isAccessibilitySelected: boolean;
  setAccessibilitySelected(_: boolean) // inherited from NSAccessibility
  accessibilitySelectedCells: NSArray<any>;
  setAccessibilitySelectedCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedChildren: NSArray<any>;
  setAccessibilitySelectedChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedColumns: NSArray<any>;
  setAccessibilitySelectedColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedRows: NSArray<any>;
  setAccessibilitySelectedRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySelectedText: string;
  setAccessibilitySelectedText(_: string) // inherited from NSAccessibility
  accessibilitySelectedTextRange: NSRange;
  setAccessibilitySelectedTextRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySelectedTextRanges: NSArray<NSValue>;
  setAccessibilitySelectedTextRanges(_: NSArray<NSValue>) // inherited from NSAccessibility
  accessibilityServesAsTitleForUIElements: NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedCharacterRange: NSRange;
  setAccessibilitySharedCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilitySharedFocusElements: NSArray<any>;
  setAccessibilitySharedFocusElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySharedTextUIElements: NSArray<any>;
  setAccessibilitySharedTextUIElements(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityShownMenu: any;
  setAccessibilityShownMenu(_: any) // inherited from NSAccessibility
  accessibilitySortDirection: NSAccessibility.SortDirection;
  setAccessibilitySortDirection(_: NSAccessibility.SortDirection) // inherited from NSAccessibility
  accessibilitySplitters: NSArray<any>;
  setAccessibilitySplitters(_: NSArray<any>) // inherited from NSAccessibility
  accessibilitySubrole: string;
  setAccessibilitySubrole(_: string) // inherited from NSAccessibility
  accessibilityTabs: NSArray<any>;
  setAccessibilityTabs(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityTitle: string;
  setAccessibilityTitle(_: string) // inherited from NSAccessibility
  accessibilityTitleUIElement: any;
  setAccessibilityTitleUIElement(_: any) // inherited from NSAccessibility
  accessibilityToolbarButton: any;
  setAccessibilityToolbarButton(_: any) // inherited from NSAccessibility
  accessibilityTopLevelUIElement: any;
  setAccessibilityTopLevelUIElement(_: any) // inherited from NSAccessibility
  accessibilityURL: NSURL;
  setAccessibilityURL(_: NSURL) // inherited from NSAccessibility
  accessibilityUnitDescription: string;
  setAccessibilityUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityUnits: NSAccessibility.Units;
  setAccessibilityUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityValue: any;
  setAccessibilityValue(_: any) // inherited from NSAccessibility
  accessibilityValueDescription: string;
  setAccessibilityValueDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalScrollBar: any;
  setAccessibilityVerticalScrollBar(_: any) // inherited from NSAccessibility
  accessibilityVerticalUnitDescription: string;
  setAccessibilityVerticalUnitDescription(_: string) // inherited from NSAccessibility
  accessibilityVerticalUnits: NSAccessibility.Units;
  setAccessibilityVerticalUnits(_: NSAccessibility.Units) // inherited from NSAccessibility
  accessibilityVisibleCells: NSArray<any>;
  setAccessibilityVisibleCells(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleCharacterRange: NSRange;
  setAccessibilityVisibleCharacterRange(_: NSRange) // inherited from NSAccessibility
  accessibilityVisibleChildren: NSArray<any>;
  setAccessibilityVisibleChildren(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleColumns: NSArray<any>;
  setAccessibilityVisibleColumns(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityVisibleRows: NSArray<any>;
  setAccessibilityVisibleRows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityWarningValue: any;
  setAccessibilityWarningValue(_: any) // inherited from NSAccessibility
  accessibilityWindow: any;
  setAccessibilityWindow(_: any) // inherited from NSAccessibility
  accessibilityWindows: NSArray<any>;
  setAccessibilityWindows(_: NSArray<any>) // inherited from NSAccessibility
  accessibilityZoomButton: any;
  setAccessibilityZoomButton(_: any) // inherited from NSAccessibility
  animations: NSDictionary<string, any>;
  setAnimations(_: NSDictionary<string, any>) // inherited from NSAnimatablePropertyContainer
  appearance: NSAppearance;
  setAppearance(_: NSAppearance) // inherited from NSAppearanceCustomization
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly effectiveAppearance: NSAppearance; // inherited from NSAppearanceCustomization
  readonly hash: number; // inherited from NSObject
  identifier: string;
  setIdentifier(_: string) // inherited from NSUserInterfaceItemIdentification
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  accessibilityAttributedStringForRange(_: NSRange): NSAttributedString;
  accessibilityCellForColumnRow(_: number, row: number): any;
  accessibilityFrame(): NSRect;
  accessibilityFrameForRange(_: NSRange): NSRect;
  accessibilityIdentifier(): string;
  accessibilityLayoutPointForScreenPoint(_: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(_: NSSize): NSSize;
  accessibilityLineForIndex(_: number): number;
  accessibilityParent(): any;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  accessibilityRTFForRange(_: NSRange): Data;
  accessibilityRangeForIndex(_: number): NSRange;
  accessibilityRangeForLine(_: number): NSRange;
  accessibilityRangeForPosition(_: NSPoint): NSRange;
  accessibilityScreenPointForLayoutPoint(_: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(_: NSSize): NSSize;
  accessibilityStringForRange(_: NSRange): string;
  accessibilityStyleRangeForIndex(_: number): NSRange;
  addChildWindowOrdered(_: NSWindow, ordered: NSWindow.OrderingMode): void;
  addTabbedWindowOrdered(_: NSWindow, ordered: NSWindow.OrderingMode): void;
  addTitlebarAccessoryViewController(_: NSTitlebarAccessoryViewController): void;
  anchorAttributeForOrientation(for_: NSLayoutConstraint.Orientation): NSLayoutConstraint.Attribute;
  animationForKey(forKey: string): any;
  animationResizeTime(_: NSRect): number;
  animator(): this;
  autorecalculatesContentBorderThicknessForEdge(for_: NSRectEdge): boolean;
  backingAlignedRectOptions(_: NSRect, options: AlignmentOptions): NSRect;
  becomeKeyWindow(): void;
  becomeMainWindow(): void;
  beginCriticalSheetCompletionHandler(_: NSWindow, completionHandler?: (p1: number) => void): void;
  beginSheetCompletionHandler(_: NSWindow, completionHandler?: (p1: number) => void): void;
  canRepresentDisplayGamut(_: NSDisplayGamut): boolean;
  cascadeTopLeftFromPoint(from: NSPoint): NSPoint;
  center(): void;
  close(): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  constrainFrameRectToScreen(_: NSRect, to?: NSScreen): NSRect;
  contentBorderThicknessForEdge(for_: NSRectEdge): number;
  contentRectForFrameRect(forFrameRect: NSRect): NSRect;
  convertPointFromBacking(_: NSPoint): NSPoint;
  convertPointFromScreen(fromScreen: NSPoint): NSPoint;
  convertPointToBacking(_: NSPoint): NSPoint;
  convertPointToScreen(toScreen: NSPoint): NSPoint;
  convertRectFromBacking(_: NSRect): NSRect;
  convertRectFromScreen(_: NSRect): NSRect;
  convertRectToBacking(_: NSRect): NSRect;
  convertRectToScreen(_: NSRect): NSRect;
  dataWithEPSInsideRect(inside: NSRect): Data;
  dataWithPDFInsideRect(inside: NSRect): Data;
  deminiaturize(_?: any): void;
  disableCursorRects(): void;
  disableKeyEquivalentForDefaultButtonCell(): void;
  disableScreenUpdatesUntilFlush(): void;
  disableSnapshotRestoration(): void;
  discardCursorRects(): void;
  discardEventsMatchingMaskBeforeEvent(matching: NSEvent.EventTypeMask, before?: NSEvent): void;
  display(): void;
  displayIfNeeded(): void;
  dragImageAtOffsetEventPasteboardSourceSlideBack(_: NSImage, at: NSPoint, offset: NSSize, event: NSEvent, pasteboard: NSPasteboard, source: any, slideBack: boolean): void;
  enableCursorRects(): void;
  enableKeyEquivalentForDefaultButtonCell(): void;
  enableSnapshotRestoration(): void;
  endEditingFor(for_?: any): void;
  endSheet(_: NSWindow): void;
  endSheetReturnCode(_: NSWindow, returnCode: number): void;
  fieldEditorForObject(_: boolean, for_?: any): NSText;
  frameRectForContentRect(forContentRect: NSRect): NSRect;
  handleCloseScriptCommand(_: NSCloseCommand): any;
  handlePrintScriptCommand(_: NSScriptCommand): any;
  handleSaveScriptCommand(_: NSScriptCommand): any;
  static createWithContentRectStyleMaskBackingDefer(contentRect: NSRect, styleMask: NSWindow.StyleMask, backing: NSWindow.BackingStoreType, defer: boolean): this;
  static createWithContentRectStyleMaskBackingDeferScreen(contentRect: NSRect, styleMask: NSWindow.StyleMask, backing: NSWindow.BackingStoreType, defer: boolean, screen?: NSScreen): this;
  static createWithWindowRef(windowRef: any): this;
  insertTitlebarAccessoryViewControllerAtIndex(_: NSTitlebarAccessoryViewController, at: number): void;
  invalidateCursorRectsForView(for_: NSView): void;
  invalidateShadow(): void;
  isAccessibilityFocused(): boolean;
  isAccessibilitySelectorAllowed(_: string): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  layoutIfNeeded(): void;
  makeFirstResponder(_?: NSResponder): boolean;
  makeKeyAndOrderFront(_?: any): void;
  makeKeyWindow(): void;
  makeMainWindow(): void;
  mergeAllWindows(_?: any): void;
  miniaturize(_?: any): void;
  moveTabToNewWindow(_?: any): void;
  nextEventMatchingMask(matching: NSEvent.EventTypeMask): NSEvent;
  nextEventMatchingMaskUntilDateInModeDequeue(matching: NSEvent.EventTypeMask, until?: Date, inMode: string, dequeue: boolean): NSEvent;
  orderBack(_?: any): void;
  orderFront(_?: any): void;
  orderFrontRegardless(): void;
  orderOut(_?: any): void;
  orderWindowRelativeTo(_: NSWindow.OrderingMode, relativeTo: number): void;
  performClose(_?: any): void;
  performMiniaturize(_?: any): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  performWindowDragWithEvent(with_: NSEvent): void;
  performZoom(_?: any): void;
  postEventAtStart(_: NSEvent, atStart: boolean): void;
  print(_?: any): void;
  recalculateKeyViewLoop(): void;
  registerForDraggedTypes(_: NSArray<string>): void;
  removeChildWindow(_: NSWindow): void;
  removeTitlebarAccessoryViewControllerAtIndex(at: number): void;
  resetCursorRects(): void;
  resignKeyWindow(): void;
  resignMainWindow(): void;
  respondsToSelector(_: string): boolean;
  runToolbarCustomizationPalette(_?: any): void;
  saveFrameUsingName(usingName: string): void;
  selectKeyViewFollowingView(following: NSView): void;
  selectKeyViewPrecedingView(preceding: NSView): void;
  selectNextKeyView(_?: any): void;
  selectNextTab(_?: any): void;
  selectPreviousKeyView(_?: any): void;
  selectPreviousTab(_?: any): void;
  self(): this;
  sendEvent(_: NSEvent): void;
  setAnchorAttributeForOrientation(_: NSLayoutConstraint.Attribute, for_: NSLayoutConstraint.Orientation): void;
  setAutorecalculatesContentBorderThicknessForEdge(_: boolean, for_: NSRectEdge): void;
  setContentBorderThicknessForEdge(_: number, for_: NSRectEdge): void;
  setContentSize(_: NSSize): void;
  setDynamicDepthLimit(_: boolean): void;
  setFrameDisplay(_: NSRect, display: boolean): void;
  setFrameDisplayAnimate(_: NSRect, display: boolean, animate: boolean): void;
  setFrameAutosaveName(_: string): boolean;
  setFrameFromString(from: string): void;
  setFrameOrigin(_: NSPoint): void;
  setFrameTopLeftPoint(_: NSPoint): void;
  setFrameUsingName(_: string): boolean;
  setFrameUsingNameForce(_: string, force: boolean): boolean;
  setIsMiniaturized(_: boolean): void;
  setIsVisible(_: boolean): void;
  setIsZoomed(_: boolean): void;
  setTitleWithRepresentedFilename(_: string): void;
  standardWindowButton(_: NSWindow.ButtonType): NSButton;
  toggleFullScreen(_?: any): void;
  toggleTabBar(_?: any): void;
  toggleTabOverview(_?: any): void;
  toggleToolbarShown(_?: any): void;
  trackEventsMatchingMaskTimeoutModeHandler(matching: NSEvent.EventTypeMask, timeout: number, mode: string, handler?: (p1: NSEvent, p2: boolean) => void): void;
  unregisterDraggedTypes(): void;
  update(): void;
  updateConstraintsIfNeeded(): void;
  validateMenuItem(_: NSMenuItem): boolean;
  validateUserInterfaceItem(_: NSValidatedUserInterfaceItem): boolean;
  visualizeConstraints(_?: NSArray<NSLayoutConstraint>): void;
  zoom(_?: any): void;
}

declare class NSWindowController extends NSResponder implements NSSeguePerforming {
  contentViewController: NSViewController;
  setContentViewController(_: NSViewController)
  document: any;
  setDocument(_: any)
  readonly owner: any;
  shouldCascadeWindows: boolean;
  setShouldCascadeWindows(_: boolean)
  shouldCloseDocument: boolean;
  setShouldCloseDocument(_: boolean)
  readonly storyboard: NSStoryboard;
  window: NSWindow;
  setWindow(_: NSWindow)
  windowFrameAutosaveName: string;
  setWindowFrameAutosaveName(_: string)
  readonly isWindowLoaded: boolean;
  readonly windowNibName: string;
  readonly windowNibPath: string;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  close(): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  dismissController(_?: any): void;
  static createWithWindow(window?: NSWindow): this;
  static createWithWindowNibName(windowNibName: string): this;
  static createWithWindowNibNameOwner(windowNibName: string, owner: any): this;
  static createWithWindowNibPathOwner(windowNibPath: string, owner: any): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  loadWindow(): void;
  performSegueWithIdentifierSender(withIdentifier: string, sender?: any): void;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  prepareForSegueSender(for_: NSStoryboardSegue, sender?: any): void;
  respondsToSelector(_: string): boolean;
  self(): this;
  setDocumentEdited(_: boolean): void;
  shouldPerformSegueWithIdentifierSender(withIdentifier: string, sender?: any): boolean;
  showWindow(_?: any): void;
  synchronizeWindowTitleWithDocumentName(): void;
  windowDidLoad(): void;
  windowTitleForDocumentDisplayName(forDocumentDisplayName: string): string;
  windowWillLoad(): void;
}

interface NSWindowDelegate extends NSObject {
  customWindowsToEnterFullScreenForWindow?(for_: NSWindow): NSArray<NSWindow>;
  customWindowsToEnterFullScreenForWindowOnScreen?(for_: NSWindow, on: NSScreen): NSArray<NSWindow>;
  customWindowsToExitFullScreenForWindow?(for_: NSWindow): NSArray<NSWindow>;
  windowWillPositionSheetUsingRect?(_: NSWindow, willPositionSheet: NSWindow, using: NSRect): NSRect;
  windowShouldDragDocumentWithEventFromWithPasteboard?(_: NSWindow, shouldDragDocumentWith: NSEvent, from: NSPoint, with_: NSPasteboard): boolean;
  windowStartCustomAnimationToEnterFullScreenOnScreenWithDuration?(_: NSWindow, startCustomAnimationToEnterFullScreenOn: NSScreen, withDuration: number): void;
  windowDidDecodeRestorableState?(_: NSWindow, didDecodeRestorableState: NSCoder): void;
  windowShouldPopUpDocumentPathMenu?(_: NSWindow, shouldPopUpDocumentPathMenu: NSMenu): boolean;
  windowStartCustomAnimationToEnterFullScreenWithDuration?(_: NSWindow, startCustomAnimationToEnterFullScreenWithDuration: number): void;
  windowStartCustomAnimationToExitFullScreenWithDuration?(_: NSWindow, startCustomAnimationToExitFullScreenWithDuration: number): void;
  windowWillEncodeRestorableState?(_: NSWindow, willEncodeRestorableState: NSCoder): void;
  windowWillResizeForVersionBrowserWithMaxPreferredSizeMaxAllowedSize?(_: NSWindow, willResizeForVersionBrowserWithMaxPreferredSize: NSSize, maxAllowedSize: NSSize): NSSize;
  windowWillUseFullScreenContentSize?(_: NSWindow, willUseFullScreenContentSize: NSSize): NSSize;
  windowWillUseFullScreenPresentationOptions?(_: NSWindow, willUseFullScreenPresentationOptions: NSApplication.PresentationOptions): NSApplication.PresentationOptions;
  windowDidBecomeKey?(_: Notification): void;
  windowDidBecomeMain?(_: Notification): void;
  windowDidChangeBackingProperties?(_: Notification): void;
  windowDidChangeOcclusionState?(_: Notification): void;
  windowDidChangeScreen?(_: Notification): void;
  windowDidChangeScreenProfile?(_: Notification): void;
  windowDidDeminiaturize?(_: Notification): void;
  windowDidEndLiveResize?(_: Notification): void;
  windowDidEndSheet?(_: Notification): void;
  windowDidEnterFullScreen?(_: Notification): void;
  windowDidEnterVersionBrowser?(_: Notification): void;
  windowDidExitFullScreen?(_: Notification): void;
  windowDidExitVersionBrowser?(_: Notification): void;
  windowDidExpose?(_: Notification): void;
  windowDidFailToEnterFullScreen?(_: NSWindow): void;
  windowDidFailToExitFullScreen?(_: NSWindow): void;
  windowDidMiniaturize?(_: Notification): void;
  windowDidMove?(_: Notification): void;
  windowDidResignKey?(_: Notification): void;
  windowDidResignMain?(_: Notification): void;
  windowDidResize?(_: Notification): void;
  windowDidUpdate?(_: Notification): void;
  windowShouldClose?(_: NSWindow): boolean;
  windowShouldZoomToFrame?(_: NSWindow, toFrame: NSRect): boolean;
  windowWillBeginSheet?(_: Notification): void;
  windowWillClose?(_: Notification): void;
  windowWillEnterFullScreen?(_: Notification): void;
  windowWillEnterVersionBrowser?(_: Notification): void;
  windowWillExitFullScreen?(_: Notification): void;
  windowWillExitVersionBrowser?(_: Notification): void;
  windowWillMiniaturize?(_: Notification): void;
  windowWillMove?(_: Notification): void;
  windowWillResizeToSize?(_: NSWindow, to: NSSize): NSSize;
  windowWillReturnFieldEditorToObject?(_: NSWindow, to?: any): any;
  windowWillReturnUndoManager?(_: NSWindow): UndoManager;
  windowWillStartLiveResize?(_: Notification): void;
  windowWillUseStandardFrameDefaultFrame?(_: NSWindow, defaultFrame: NSRect): NSRect;
}

declare var NSWindowDelegate: {
  prototype: NSWindowDelegate;
};

declare var NSWindowDidBecomeKeyNotification: string;

declare var NSWindowDidBecomeMainNotification: string;

declare var NSWindowDidChangeBackingPropertiesNotification: string;

declare var NSWindowDidChangeOcclusionStateNotification: string;

declare var NSWindowDidChangeScreenNotification: string;

declare var NSWindowDidChangeScreenProfileNotification: string;

declare var NSWindowDidDeminiaturizeNotification: string;

declare var NSWindowDidEndLiveResizeNotification: string;

declare var NSWindowDidEndSheetNotification: string;

declare var NSWindowDidEnterFullScreenNotification: string;

declare var NSWindowDidEnterVersionBrowserNotification: string;

declare var NSWindowDidExitFullScreenNotification: string;

declare var NSWindowDidExitVersionBrowserNotification: string;

declare var NSWindowDidExposeNotification: string;

declare var NSWindowDidMiniaturizeNotification: string;

declare var NSWindowDidMoveNotification: string;

declare var NSWindowDidResignKeyNotification: string;

declare var NSWindowDidResignMainNotification: string;

declare var NSWindowDidResizeNotification: string;

declare var NSWindowDidUpdateNotification: string;

interface NSWindowRestoration extends NSObject {
}

declare var NSWindowRestoration: {
  prototype: NSWindowRestoration;
   static restoreWindowWithIdentifierStateCompletionHandler(withIdentifier: string, state: NSCoder, completionHandler?: (p1: NSWindow, p2: Error) => void): void;
};

declare var NSWindowServerCommunicationException: string;

declare class NSWindowTab extends NSObject {
  accessoryView: NSView;
  setAccessoryView(_: NSView)
  attributedTitle: NSAttributedString;
  setAttributedTitle(_: NSAttributedString)
  title: string;
  setTitle(_: string)
  toolTip: string;
  setToolTip(_: string)
}

declare class NSWindowTabGroup extends NSObject {
  readonly identifier: string;
  isOverviewVisible: boolean;
  setOverviewVisible(_: boolean)
  selectedWindow: NSWindow;
  setSelectedWindow(_: NSWindow)
  readonly isTabBarVisible: boolean;
  readonly windows: NSArray<NSWindow>;
  addWindow(_: NSWindow): void;
  insertWindowAtIndex(_: NSWindow, at: number): void;
  removeWindow(_: NSWindow): void;
}

declare var NSWindowWillBeginSheetNotification: string;

declare var NSWindowWillCloseNotification: string;

declare var NSWindowWillEnterFullScreenNotification: string;

declare var NSWindowWillEnterVersionBrowserNotification: string;

declare var NSWindowWillExitFullScreenNotification: string;

declare var NSWindowWillExitVersionBrowserNotification: string;

declare var NSWindowWillMiniaturizeNotification: string;

declare var NSWindowWillMoveNotification: string;

declare var NSWindowWillStartLiveResizeNotification: string;

declare var NSWordMLTextDocumentType: string;

declare var NSWordTablesReadException: string;

declare var NSWordTablesWriteException: string;

declare class NSWorkspace extends NSObject {
  readonly accessibilityDisplayShouldDifferentiateWithoutColor: boolean;
  readonly accessibilityDisplayShouldIncreaseContrast: boolean;
  readonly accessibilityDisplayShouldInvertColors: boolean;
  readonly accessibilityDisplayShouldReduceMotion: boolean;
  readonly accessibilityDisplayShouldReduceTransparency: boolean;
  readonly fileLabelColors: NSArray<NSColor>;
  readonly fileLabels: NSArray<string>;
  readonly frontmostApplication: NSRunningApplication;
  readonly menuBarOwningApplication: NSRunningApplication;
  readonly notificationCenter: NotificationCenter;
  readonly runningApplications: NSArray<NSRunningApplication>;
  readonly isSwitchControlEnabled: boolean;
  readonly isVoiceOverEnabled: boolean;
  static sharedWorkspace(): NSWorkspace;
  URLForApplicationToOpenURL(toOpen: NSURL): NSURL;
  URLForApplicationWithBundleIdentifier(withBundleIdentifier: string): NSURL;
  activateFileViewerSelectingURLs(_: NSArray<NSURL>): void;
  desktopImageOptionsForScreen(for_: NSScreen): NSDictionary<string, any>;
  desktopImageURLForScreen(for_: NSScreen): NSURL;
  duplicateURLsCompletionHandler(_: NSArray<NSURL>, completionHandler?: (p1: NSDictionary<NSURL, NSURL>, p2: Error) => void): void;
  extendPowerOffBy(by: number): number;
  getFileSystemInfoForPathIsRemovableIsWritableIsUnmountableDescriptionType(forPath: string, isRemovable?: boolean, isWritable?: boolean, isUnmountable?: boolean, description?: string, type?: string): boolean;
  hideOtherApplications(): void;
  iconForFile(forFile: string): NSImage;
  iconForFiles(forFiles: NSArray<string>): NSImage;
  isFilePackageAtPath(atPath: string): boolean;
  launchApplicationAtURLOptionsConfigurationError(options: NSURL, configuration: NSWorkspace.LaunchOptions, error: NSDictionary<string, any>): NSRunningApplication;
  noteFileSystemChanged(_: string): void;
  openApplicationAtURLConfigurationCompletionHandler(at: NSURL, configuration: NSWorkspace.OpenConfiguration, completionHandler?: (p1: NSRunningApplication, p2: Error) => void): void;
  openURL(_: NSURL): boolean;
  openURLConfigurationCompletionHandler(_: NSURL, configuration: NSWorkspace.OpenConfiguration, completionHandler?: (p1: NSRunningApplication, p2: Error) => void): void;
  openURLOptionsConfigurationError(options: NSURL, configuration: NSWorkspace.LaunchOptions, error: NSDictionary<string, any>): NSRunningApplication;
  openURLsWithApplicationAtURLConfigurationCompletionHandler(_: NSArray<NSURL>, withApplicationAt: NSURL, configuration: NSWorkspace.OpenConfiguration, completionHandler?: (p1: NSRunningApplication, p2: Error) => void): void;
  openURLsWithApplicationAtURLOptionsConfigurationError(withApplicationAtURL: NSArray<NSURL>, options: NSURL, configuration: NSWorkspace.LaunchOptions, error: NSDictionary<string, any>): NSRunningApplication;
  recycleURLsCompletionHandler(_: NSArray<NSURL>, completionHandler?: (p1: NSDictionary<NSURL, NSURL>, p2: Error) => void): void;
  requestAuthorizationOfTypeCompletionHandler(to: NSWorkspace.AuthorizationType, completionHandler?: (p1: NSWorkspace.Authorization, p2: Error) => void): void;
  selectFileInFileViewerRootedAtPath(_?: string, inFileViewerRootedAtPath: string): boolean;
  setDesktopImageURLForScreenOptionsError(forScreen: NSURL, options: NSScreen, error: NSDictionary<string, any>): boolean;
  setIconForFileOptions(_?: NSImage, forFile: string, options: NSWorkspace.IconCreationOptions): boolean;
  showSearchResultsForQueryString(forQueryString: string): boolean;
  typeOfFileError(error: string): string;
  unmountAndEjectDeviceAtPath(atPath: string): boolean;
  unmountAndEjectDeviceAtURLError(error: NSURL): boolean;
}

declare var NSWorkspaceAccessibilityDisplayOptionsDidChangeNotification: string;

declare var NSWorkspaceActiveSpaceDidChangeNotification: string;

declare var NSWorkspaceApplicationKey: string;

declare class NSWorkspaceAuthorization extends NSObject {
}


declare const NSWorkspaceAuthorizationInvalidError: number;
declare var NSWorkspaceDesktopImageAllowClippingKey: string;

declare var NSWorkspaceDesktopImageFillColorKey: string;

declare var NSWorkspaceDesktopImageScalingKey: string;

declare var NSWorkspaceDidActivateApplicationNotification: string;

declare var NSWorkspaceDidChangeFileLabelsNotification: string;

declare var NSWorkspaceDidDeactivateApplicationNotification: string;

declare var NSWorkspaceDidHideApplicationNotification: string;

declare var NSWorkspaceDidLaunchApplicationNotification: string;

declare var NSWorkspaceDidMountNotification: string;

declare var NSWorkspaceDidRenameVolumeNotification: string;

declare var NSWorkspaceDidTerminateApplicationNotification: string;

declare var NSWorkspaceDidUnhideApplicationNotification: string;

declare var NSWorkspaceDidUnmountNotification: string;

declare var NSWorkspaceDidWakeNotification: string;


declare const NSWorkspaceErrorMaximum: number;

declare const NSWorkspaceErrorMinimum: number;
declare var NSWorkspaceLaunchConfigurationAppleEvent: string;

declare var NSWorkspaceLaunchConfigurationArchitecture: string;

declare var NSWorkspaceLaunchConfigurationArguments: string;

declare var NSWorkspaceLaunchConfigurationEnvironment: string;

declare class NSWorkspaceOpenConfiguration extends NSObject implements NSCopying {
  static configuration(): NSWorkspaceOpenConfiguration;
  activates: boolean;
  setActivates(_: boolean)
  addsToRecentItems: boolean;
  setAddsToRecentItems(_: boolean)
  allowsRunningApplicationSubstitution: boolean;
  setAllowsRunningApplicationSubstitution(_: boolean)
  appleEvent: NSAppleEventDescriptor;
  setAppleEvent(_: NSAppleEventDescriptor)
  architecture: number;
  setArchitecture(_: number)
  arguments: NSArray<string>;
  setArguments(_: NSArray<string>)
  createsNewApplicationInstance: boolean;
  setCreatesNewApplicationInstance(_: boolean)
  environment: NSDictionary<string, string>;
  setEnvironment(_: NSDictionary<string, string>)
  isForPrinting: boolean;
  setForPrinting(_: boolean)
  hides: boolean;
  setHides(_: boolean)
  hidesOthers: boolean;
  setHidesOthers(_: boolean)
  promptsUserIfNeeded: boolean;
  setPromptsUserIfNeeded(_: boolean)
  requiresUniversalLinks: boolean;
  setRequiresUniversalLinks(_: boolean)
}

declare var NSWorkspaceScreensDidSleepNotification: string;

declare var NSWorkspaceScreensDidWakeNotification: string;

declare var NSWorkspaceSessionDidBecomeActiveNotification: string;

declare var NSWorkspaceSessionDidResignActiveNotification: string;

declare var NSWorkspaceVolumeLocalizedNameKey: string;

declare var NSWorkspaceVolumeOldLocalizedNameKey: string;

declare var NSWorkspaceVolumeOldURLKey: string;

declare var NSWorkspaceVolumeURLKey: string;

declare var NSWorkspaceWillLaunchApplicationNotification: string;

declare var NSWorkspaceWillPowerOffNotification: string;

declare var NSWorkspaceWillSleepNotification: string;

declare var NSWorkspaceWillUnmountNotification: string;

declare var NSWritingDirectionAttributeName: string;

declare var NSYearMonthDatePickerElementFlag: NSDatePicker.ElementFlags;

declare var NSYearMonthDayDatePickerElementFlag: NSDatePicker.ElementFlags;

interface _OVFlags {
  unused3: number;
  dataSourceObjectValueByItem: number;
  allowAutomaticAnimations: number;
  dontRedisplayOnFrameChange: number;
  _isSpringLoadingFlashing: number;
  unused2: number;
  delegateShouldAutoExpandItem: number;
  delegateAutoCollapseItem: number;
  delegateAutoExpandItem: number;
  delegateShouldShowOutlineCellForItem: number;
  dataSourceDraggedImageMovedTo: number;
  dataSourceDraggingEndedAt: number;
  reloadingData: number;
  validDataSourceMethods: number;
  numberOfRowsDataExpandEntered: number;
  delayRowEntryFreeDisabled: number;
  delegateHeightOfRowByItem: number;
  animateExpandAndCollapse: number;
  stronglyReferencesItems: number;
  selectionAdjustmentDisabled: number;
  subclassRowForItem: number;
  delegateWillDisplayOutlineCell: number;
  enableExpandNotifications: number;
  autoSaveExpandItems: number;
  autoresizesOutlineColumn: number;
  delegateShouldExpandItem: number;
  delegateShouldCollapseItem: number;
  delegateSelectionShouldChangeInOutlineView: number;
  delegateShouldSelectTableColumn: number;
  delegateShouldSelectItem: number;
  delegateShouldEditTableColumn: number;
  delegateWillDisplayCell: number;
}

declare var _OVFlags: _OVFlags;

module NSAccessibility {
  enum AnnotationPosition {
    FullRange = 0,
    Start = 1,
    End = 2
  }
  enum Orientation {
    Unknown = 0,
    Vertical = 1,
    Horizontal = 2
  }
  enum RulerMarkerType {
    Unknown = 0,
    TabStopLeft = 1,
    TabStopRight = 2,
    TabStopCenter = 3,
    TabStopDecimal = 4,
    IndentHead = 5,
    IndentTail = 6,
    IndentFirstLine = 7
  }
  enum SortDirection {
    Unknown = 0,
    Ascending = 1,
    Descending = 2
  }
  enum Units {
    Unknown = 0,
    Inches = 1,
    Centimeters = 2,
    Points = 3,
    Picas = 4
  }
}

module NSAccessibilityCustomRotor {
  enum RotorType {
    Custom = 0,
    Any = 1,
    Annotation = 2,
    BoldText = 3,
    Heading = 4,
    HeadingLevel1 = 5,
    HeadingLevel2 = 6,
    HeadingLevel3 = 7,
    HeadingLevel4 = 8,
    HeadingLevel5 = 9,
    HeadingLevel6 = 10,
    Image = 11,
    ItalicText = 12,
    Landmark = 13,
    Link = 14,
    List = 15,
    MisspelledWord = 16,
    Table = 17,
    TextField = 18,
    UnderlinedText = 19,
    VisitedLink = 20
  }
  enum SearchDirection {
    Previous = 0,
    Next = 1
  }
}

enum NSAccessibilityPriorityLevel {
    Low = 10,
    Medium = 50,
    High = 90
}

module NSAlert {
  enum Style {
    Warning = 0,
    Informational = 1,
    Critical = 2
  }
}

module NSAnimation {
  enum BlockingMode {
    Blocking = 0,
    Nonblocking = 1,
    NonblockingThreaded = 2
  }
  enum Curve {
    EaseInOut = 0,
    EaseIn = 1,
    EaseOut = 2,
    Linear = 3
  }
}

enum NSAnimationEffect {
    DisappearingItemDefault = 0,
    Poof = 10
}

module NSApplication {
  enum ActivationOptions {
    ActivateAllWindows = 1,
    ActivateIgnoringOtherApps = 2
  }
  enum ActivationPolicy {
    Regular = 0,
    Accessory = 1,
    Prohibited = 2
  }
  enum DelegateReply {
    Success = 0,
    Cancel = 1,
    Failure = 2
  }
  enum OcclusionState {
    Visible = 2
  }
  enum PresentationOptions {
    Default = 0,
    AutoHideDock = 1,
    HideDock = 2,
    AutoHideMenuBar = 4,
    HideMenuBar = 8,
    DisableAppleMenu = 16,
    DisableProcessSwitching = 32,
    DisableForceQuit = 64,
    DisableSessionTermination = 128,
    DisableHideApplication = 256,
    DisableMenuBarTransparency = 512,
    FullScreen = 1024,
    AutoHideToolbar = 2048,
    DisableCursorLocationAssistance = 4096
  }
  enum PrintReply {
    PrintingCancelled = 0,
    PrintingSuccess = 1,
    PrintingFailure = 3,
    PrintingReplyLater = 2
  }
  enum RemoteNotificationType {
    None = 0,
    Badge = 1,
    Sound = 2,
    Alert = 4
  }
  enum RequestUserAttentionType {
    CriticalRequest = 0,
    InformationalRequest = 10
  }
  enum TerminateReply {
    TerminateCancel = 0,
    TerminateNow = 1,
    TerminateLater = 2
  }
  enum WindowListOptions {
    OrderedFrontToBack = 1
  }
}

module NSAttributedString {
  enum SpellingState {
    SpellingFlag = 1,
    GrammarFlag = 2
  }
}

module NSBezierPath {
  enum ElementType {
    MoveTo = 0,
    LineTo = 1,
    CurveTo = 2,
    ClosePath = 3
  }
  enum LineCapStyle {
    Butt = 0,
    Round = 1,
    Square = 2
  }
  enum LineJoinStyle {
    Miter = 0,
    Round = 1,
    Bevel = 2
  }
  enum WindingRule {
    NonZero = 0,
    EvenOdd = 1
  }
}

module NSBitmapImageRep {
  enum FileType {
    TIFF = 0,
    BMP = 1,
    GIF = 2,
    JPEG = 3,
    PNG = 4,
    JPEG2000 = 5
  }
  enum Format {
    AlphaFirst = 1,
    AlphaNonpremultiplied = 2,
    FloatingPointSamples = 4,
    SixteenBitLittleEndian = 256,
    ThirtyTwoBitLittleEndian = 512,
    SixteenBitBigEndian = 1024,
    ThirtyTwoBitBigEndian = 2048
  }
  enum LoadStatus {
    UnknownType = -1,
    ReadingHeader = -2,
    WillNeedAllData = -3,
    InvalidData = -4,
    UnexpectedEOF = -5,
    Completed = -6
  }
  enum TIFFCompression {
    None = 1,
    CCITTFAX3 = 3,
    CCITTFAX4 = 4,
    LZW = 5,
    JPEG = 6,
    NEXT = 32766,
    PackBits = 32773,
    OldJPEG = 32865
  }
}

enum NSBorderType {
    NoBorder = 0,
    LineBorder = 1,
    BezelBorder = 2,
    GrooveBorder = 3
}

module NSBox {
  enum BoxType {
    Primary = 0,
    Separator = 2,
    Custom = 4
  }
  enum TitlePosition {
    NoTitle = 0,
    AboveTop = 1,
    AtTop = 2,
    BelowTop = 3,
    AboveBottom = 4,
    AtBottom = 5,
    BelowBottom = 6
  }
}

module NSBrowser {
  enum ColumnResizingType {
    NoColumnResizing = 0,
    AutoColumnResizing = 1,
    UserColumnResizing = 2
  }
  enum DropOperation {
    On = 0,
    Above = 1
  }
}

module NSButton {
  enum BezelStyle {
    Rounded = 1,
    RegularSquare = 2,
    Disclosure = 5,
    ShadowlessSquare = 6,
    Circular = 7,
    TexturedSquare = 8,
    HelpButton = 9,
    SmallSquare = 10,
    TexturedRounded = 11,
    RoundRect = 12,
    Recessed = 13,
    RoundedDisclosure = 14,
    Inline = 15
  }
  enum ButtonType {
    MomentaryLight = 0,
    PushOnPushOff = 1,
    Toggle = 2,
    Switch = 3,
    Radio = 4,
    MomentaryChange = 5,
    OnOff = 6,
    MomentaryPushIn = 7,
    Accelerator = 8,
    MultiLevelAccelerator = 9
  }
}

module NSCell {
  enum Attribute {
    CellDisabled = 0,
    CellState = 1,
    PushInCell = 2,
    CellEditable = 3,
    ChangeGrayCell = 4,
    CellHighlighted = 5,
    CellLightsByContents = 6,
    CellLightsByGray = 7,
    ChangeBackgroundCell = 8,
    CellLightsByBackground = 9,
    CellIsBordered = 10,
    CellHasOverlappingImage = 11,
    CellHasImageHorizontal = 12,
    CellHasImageOnLeftOrBottom = 13,
    CellChangesContents = 14,
    CellIsInsetButton = 15,
    CellAllowsMixedState = 16
  }
  enum CellType {
    NullCellType = 0,
    TextCellType = 1,
    ImageCellType = 2
  }
  enum HitResult {
    None = 0,
    ContentArea = 1,
    EditableTextArea = 2,
    TrackableArea = 4
  }
  enum StyleMask {
    NoCellMask = 0,
    ContentsCellMask = 1,
    PushInCellMask = 2,
    ChangeGrayCellMask = 4,
    ChangeBackgroundCellMask = 8
  }
}

enum NSCharacterCollection {
    IdentityMappingCharacterCollection = 0,
    AdobeCNS1CharacterCollection = 1,
    AdobeGB1CharacterCollection = 2,
    AdobeJapan1CharacterCollection = 3,
    AdobeJapan2CharacterCollection = 4,
    AdobeKorea1CharacterCollection = 5
}

enum NSCollectionElementCategory {
    Item = 0,
    SupplementaryView = 1,
    DecorationView = 2,
    InterItemGap = 3
}

enum NSCollectionLayoutSectionOrthogonalScrollingBehavior {
    None = 0,
    Continuous = 1,
    ContinuousGroupLeadingBoundary = 2,
    Paging = 3,
    GroupPaging = 4,
    GroupPagingCentered = 5
}

module NSCollectionView {
  enum DropOperation {
    On = 0,
    Before = 1
  }
  enum ScrollDirection {
    Vertical = 0,
    Horizontal = 1
  }
  enum ScrollPosition {
    None = 0,
    Top = 1,
    CenteredVertically = 2,
    Bottom = 4,
    NearestHorizontalEdge = 512,
    Left = 8,
    CenteredHorizontally = 16,
    Right = 32,
    LeadingEdge = 64,
    TrailingEdge = 128,
    NearestVerticalEdge = 256
  }
  enum UpdateAction {
    Insert = 0,
    Delete = 1,
    Reload = 2,
    Move = 3,
    None = 4
  }
}

module NSCollectionViewItem {
  enum HighlightState {
    None = 0,
    ForSelection = 1,
    ForDeselection = 2,
    AsDropTarget = 3
  }
}

module NSColor {
  enum ColorType {
    ComponentBased = 0,
    Pattern = 1,
    Catalog = 2
  }
  enum SystemEffect {
    None = 0,
    Pressed = 1,
    DeepPressed = 2,
    Disabled = 3,
    Rollover = 4
  }
}

module NSColorPanel {
  enum Mode {
    None = -1,
    Gray = 0,
    RGB = 1,
    CMYK = 2,
    HSB = 3,
    CustomPalette = 4,
    ColorList = 5,
    Wheel = 6,
    Crayon = 7
  }
  enum Options {
    GrayModeMask = 1,
    RGBModeMask = 2,
    CMYKModeMask = 4,
    HSBModeMask = 8,
    CustomPaletteModeMask = 16,
    ColorListModeMask = 32,
    WheelModeMask = 64,
    CrayonModeMask = 128,
    AllModesMask = 65535
  }
}

enum NSColorRenderingIntent {
    Default = 0,
    AbsoluteColorimetric = 1,
    RelativeColorimetric = 2,
    Perceptual = 3,
    Saturation = 4
}

module NSColorSpace {
  enum Model {
    Unknown = -1,
    Gray = 0,
    RGB = 1,
    CMYK = 2,
    LAB = 3,
    DeviceN = 4,
    Indexed = 5,
    Patterned = 6
  }
}

enum NSCompositingOperation {
    Clear = 0,
    Copy = 1,
    SourceOver = 2,
    SourceIn = 3,
    SourceOut = 4,
    SourceAtop = 5,
    DestinationOver = 6,
    DestinationIn = 7,
    DestinationOut = 8,
    DestinationAtop = 9,
    XOR = 10,
    PlusDarker = 11,
    Highlight = 12,
    PlusLighter = 13,
    Multiply = 14,
    Screen = 15,
    Overlay = 16,
    Darken = 17,
    Lighten = 18,
    ColorDodge = 19,
    ColorBurn = 20,
    SoftLight = 21,
    HardLight = 22,
    Difference = 23,
    Exclusion = 24,
    Hue = 25,
    Saturation = 26,
    Color = 27,
    Luminosity = 28
}

module NSControl {
  enum StateValue {
    mixed = 0,
    off = 1,
    on = 2
  }

  enum ControlSize {
    Regular = 0,
    Small = 1,
    Mini = 2
  }
  enum ImagePosition {
    NoImage = 0,
    ImageOnly = 1,
    ImageLeft = 2,
    ImageRight = 3,
    ImageBelow = 4,
    ImageAbove = 5,
    ImageOverlaps = 6,
    ImageLeading = 7,
    ImageTrailing = 8
  }
}

enum NSControlTint {
    DefaultControlTint = 0,
    BlueControlTint = 1,
    GraphiteControlTint = 6,
    ClearControlTint = 7
}

module NSDatePicker {
  enum ElementFlags {
    HourMinute = 12,
    HourMinuteSecond = 14,
    TimeZone = 16,
    YearMonth = 192,
    YearMonthDay = 224,
    Era = 256
  }
  enum Mode {
    Single = 0,
    Range = 1
  }
  enum Style {
    TextFieldAndStepper = 0,
    ClockAndCalendar = 1,
    TextField = 2
  }
}

enum NSDirectionalRectEdge {
    None = 0,
    Top = 1,
    Leading = 2,
    Bottom = 4,
    Trailing = 8,
    All = 15
}

enum NSDisplayGamut {
    SRGB = 1,
    P3 = 2
}

module NSDocument {
  enum ChangeType {
    ChangeDone = 0,
    ChangeUndone = 1,
    ChangeRedone = 5,
    ChangeCleared = 2,
    ChangeReadOtherContents = 3,
    ChangeAutosaved = 4,
    ChangeDiscardable = 256
  }
  enum SaveOperationType {
    SaveOperation = 0,
    SaveAsOperation = 1,
    SaveToOperation = 2,
    AutosaveInPlaceOperation = 4,
    AutosaveElsewhereOperation = 3,
    AutosaveAsOperation = 5,
    AutosaveOperation = 3
  }
}

enum NSDragOperation {
    None = 0,
    Copy = 1,
    Link = 2,
    Generic = 4,
    Private = 8,
    Move = 16,
    Delete = 32,
    Every = -1,
    All_Obsolete = 15,
    All = 15
}

enum NSDraggingContext {
    OutsideApplication = 0,
    WithinApplication = 1
}

enum NSDraggingFormation {
    Default = 0,
    None = 1,
    Pile = 2,
    List = 3,
    Stack = 4
}

enum NSDraggingItemEnumerationOptions {
    Concurrent = 1,
    ClearNonenumeratedImages = 65536
}

module NSDrawer {
  enum State {
    ClosedState = 0,
    OpeningState = 1,
    OpenState = 2,
    ClosingState = 3
  }
}

module NSEvent {
  enum ButtonMask {
    PenTip = 1,
    PenLowerSide = 2,
    PenUpperSide = 4
  }
  enum EventSubtype {
    WindowExposed = 0,
    ApplicationActivated = 1,
    ApplicationDeactivated = 2,
    WindowMoved = 4,
    ScreenChanged = 8,
    PowerOff = 1,
    MouseEvent = 0,
    TabletPoint = 1,
    TabletProximity = 2,
    Touch = 3
  }
  enum EventType {
    LeftMouseDown = 1,
    LeftMouseUp = 2,
    RightMouseDown = 3,
    RightMouseUp = 4,
    MouseMoved = 5,
    LeftMouseDragged = 6,
    RightMouseDragged = 7,
    MouseEntered = 8,
    MouseExited = 9,
    KeyDown = 10,
    KeyUp = 11,
    FlagsChanged = 12,
    AppKitDefined = 13,
    SystemDefined = 14,
    ApplicationDefined = 15,
    Periodic = 16,
    CursorUpdate = 17,
    ScrollWheel = 22,
    TabletPoint = 23,
    TabletProximity = 24,
    OtherMouseDown = 25,
    OtherMouseUp = 26,
    OtherMouseDragged = 27,
    Gesture = 29,
    Magnify = 30,
    Swipe = 31,
    Rotate = 18,
    BeginGesture = 19,
    EndGesture = 20,
    SmartMagnify = 32,
    QuickLook = 33,
    Pressure = 34,
    DirectTouch = 37,
    ChangeMode = 38
  }
  enum EventTypeMask {
    LeftMouseDown = 2,
    LeftMouseUp = 4,
    RightMouseDown = 8,
    RightMouseUp = 16,
    MouseMoved = 32,
    LeftMouseDragged = 64,
    RightMouseDragged = 128,
    MouseEntered = 256,
    MouseExited = 512,
    KeyDown = 1024,
    KeyUp = 2048,
    FlagsChanged = 4096,
    AppKitDefined = 8192,
    SystemDefined = 16384,
    ApplicationDefined = 32768,
    Periodic = 65536,
    CursorUpdate = 131072,
    ScrollWheel = 4194304,
    TabletPoint = 8388608,
    TabletProximity = 16777216,
    OtherMouseDown = 33554432,
    OtherMouseUp = 67108864,
    OtherMouseDragged = 134217728,
    Gesture = 536870912,
    Magnify = 1073741824,
    Swipe = 2147483648,
    Rotate = 262144,
    BeginGesture = 524288,
    EndGesture = 1048576,
    SmartMagnify = 4294967296,
    Pressure = 17179869184,
    DirectTouch = 137438953472,
    ChangeMode = 274877906944,
    Any = -1
  }
  enum GestureAxis {
    None = 0,
    Horizontal = 1,
    Vertical = 2
  }
  enum ModifierFlags {
    CapsLock = 65536,
    Shift = 131072,
    Control = 262144,
    Option = 524288,
    Command = 1048576,
    NumericPad = 2097152,
    Help = 4194304,
    Function = 8388608,
    DeviceIndependentFlagsMask = 4294901760
  }
  enum Phase {
    None = 0,
    Began = 1,
    Stationary = 2,
    Changed = 4,
    Ended = 8,
    Cancelled = 16,
    MayBegin = 32
  }
  enum PointingDeviceType {
    Unknown = 0,
    Pen = 1,
    Cursor = 2,
    Eraser = 3
  }
  enum PressureBehavior {
    Unknown = -1,
    PrimaryDefault = 0,
    PrimaryClick = 1,
    PrimaryGeneric = 2,
    PrimaryAccelerator = 3,
    PrimaryDeepClick = 5,
    PrimaryDeepDrag = 6
  }
  enum SwipeTrackingOptions {
    LockDirection = 1,
    ClampGestureAmount = 2
  }
}

enum NSFindPanelAction {
    ShowFindPanel = 1,
    Next = 2,
    Previous = 3,
    ReplaceAll = 4,
    Replace = 5,
    ReplaceAndFind = 6,
    SetFindString = 7,
    ReplaceAllInSelection = 8,
    SelectAll = 9,
    SelectAllInSelection = 10
}

enum NSFindPanelSubstringMatchType {
    Contains = 0,
    StartsWith = 1,
    FullWord = 2,
    EndsWith = 3
}

enum NSFocusRingPlacement {
    Only = 0,
    Below = 1,
    Above = 2
}

enum NSFocusRingType {
    Default = 0,
    None = 1,
    Exterior = 2
}

enum NSFontAction {
    NoFontChangeAction = 0,
    ViaPanelFontAction = 1,
    AddTraitFontAction = 2,
    SizeUpFontAction = 3,
    SizeDownFontAction = 4,
    HeavierFontAction = 5,
    LighterFontAction = 6,
    RemoveTraitFontAction = 7
}

module NSFontAssetRequest {
  enum Options {
    UsesStandardUI = 1
  }
}

module NSFontCollection {
  enum Visibility {
    Process = 1,
    User = 2,
    Computer = 4
  }
}

enum NSFontCollectionOptions {
    ApplicationOnlyMask = 1
}

module NSFontDescriptor {
  enum SymbolicTraits {
    TraitItalic = 1,
    TraitBold = 2,
    TraitExpanded = 32,
    TraitCondensed = 64,
    TraitMonoSpace = 1024,
    TraitVertical = 2048,
    TraitUIOptimized = 4096,
    TraitTightLeading = 32768,
    TraitLooseLeading = 65536,
    ClassMask = 4026531840,
    ClassUnknown = 0,
    ClassOldStyleSerifs = 268435456,
    ClassTransitionalSerifs = 536870912,
    ClassModernSerifs = 805306368,
    ClassClarendonSerifs = 1073741824,
    ClassSlabSerifs = 1342177280,
    ClassFreeformSerifs = 1879048192,
    ClassSansSerif = 2147483648,
    ClassOrnamentals = 2415919104,
    ClassScripts = 2684354560,
    ClassSymbolic = 3221225472
  }
}

module NSFontPanel {
  enum ModeMask {
    ModeMaskFace = 1,
    ModeMaskSize = 2,
    ModeMaskCollection = 4,
    ModeMaskUnderlineEffect = 256,
    ModeMaskStrikethroughEffect = 512,
    ModeMaskTextColorEffect = 1024,
    ModeMaskDocumentColorEffect = 2048,
    ModeMaskShadowEffect = 4096,
    ModeMaskAllEffects = 1048320,
    ModesMaskStandardModes = 65535,
    ModesMaskAllModes = 4294967295
  }
}

enum NSFontRenderingMode {
    DefaultRenderingMode = 0,
    AntialiasedRenderingMode = 1,
    IntegerAdvancementsRenderingMode = 2,
    AntialiasedIntegerAdvancementsRenderingMode = 3
}

enum NSFontTraitMask {
    ItalicFontMask = 1,
    BoldFontMask = 2,
    UnboldFontMask = 4,
    NonStandardCharacterSetFontMask = 8,
    NarrowFontMask = 16,
    ExpandedFontMask = 32,
    CondensedFontMask = 64,
    SmallCapsFontMask = 128,
    PosterFontMask = 256,
    CompressedFontMask = 512,
    FixedPitchFontMask = 1024,
    UnitalicFontMask = 16777216
}

module NSGestureRecognizer {
  enum State {
    Possible = 0,
    Began = 1,
    Changed = 2,
    Ended = 3,
    Cancelled = 4,
    Failed = 5,
    Recognized = 3
  }
}

module NSGradient {
  enum DrawingOptions {
    DrawsBeforeStartingLocation = 1,
    DrawsAfterEndingLocation = 2
  }
}

module NSGridCell {
  enum Placement {
    Inherited = 0,
    None = 1,
    Leading = 2,
    Top = 2,
    Trailing = 3,
    Bottom = 3,
    Center = 4,
    Fill = 5
  }
}

module NSGridRow {
  enum Alignment {
    Inherited = 0,
    None = 1,
    FirstBaseline = 2,
    LastBaseline = 3
  }
}

module NSHapticFeedbackManager {
  enum FeedbackPattern {
    Generic = 0,
    Alignment = 1,
    LevelChange = 2
  }
  enum PerformanceTime {
    Default = 0,
    Now = 1,
    DrawCompleted = 2
  }
}

module NSImage {
  enum CacheMode {
    Default = 0,
    Always = 1,
    BySize = 2,
    Never = 3
  }
  enum LayoutDirection {
    Unspecified = -1,
    LeftToRight = 2,
    RightToLeft = 3
  }
  enum LoadStatus {
    Completed = 0,
    Cancelled = 1,
    InvalidData = 2,
    UnexpectedEOF = 3,
    ReadError = 4
  }
  enum ResizingMode {
    Stretch = 0,
    Tile = 1
  }
}

enum NSImageAlignment {
    Center = 0,
    Top = 1,
    TopLeft = 2,
    TopRight = 3,
    Left = 4,
    Bottom = 5,
    BottomLeft = 6,
    BottomRight = 7,
    Right = 8
}

enum NSImageInterpolation {
    Default = 0,
    None = 1,
    Low = 2,
    Medium = 4,
    High = 3
}

enum NSImageScaling {
    ImageScaleProportionallyDown = 0,
    ImageScaleAxesIndependently = 1,
    ImageScaleNone = 2,
    ImageScaleProportionallyUpOrDown = 3,
    ScaleProportionally = 0,
    ScaleToFit = 1,
    ScaleNone = 2
}

module NSImageView {
  enum FrameStyle {
    None = 0,
    Photo = 1,
    GrayBezel = 2,
    Groove = 3,
    Button = 4
  }
}

module NSLayoutConstraint {
  enum Attribute {
    Left = 1,
    Right = 2,
    Top = 3,
    Bottom = 4,
    Leading = 5,
    Trailing = 6,
    Width = 7,
    Height = 8,
    CenterX = 9,
    CenterY = 10,
    LastBaseline = 11,
    Baseline = 11,
    FirstBaseline = 12,
    NotAnAttribute = 0
  }
  enum FormatOptions {
    AlignAllLeft = 2,
    AlignAllRight = 4,
    AlignAllTop = 8,
    AlignAllBottom = 16,
    AlignAllLeading = 32,
    AlignAllTrailing = 64,
    AlignAllCenterX = 512,
    AlignAllCenterY = 1024,
    AlignAllLastBaseline = 2048,
    AlignAllFirstBaseline = 4096,
    AlignAllBaseline = 2048,
    AlignmentMask = 65535,
    DirectionLeadingToTrailing = 0,
    DirectionLeftToRight = 65536,
    DirectionRightToLeft = 131072,
    DirectionMask = 196608
  }
  enum Orientation {
    Horizontal = 0,
    Vertical = 1
  }
  enum Relation {
    LessThanOrEqual = -1,
    Equal = 0,
    GreaterThanOrEqual = 1
  }
}

module NSLayoutManager {
  enum ControlCharacterAction {
    ZeroAdvancement = 1,
    Whitespace = 2,
    HorizontalTab = 4,
    LineBreak = 8,
    ParagraphBreak = 16,
    ContainerBreak = 32
  }
  enum GlyphProperty {
    Null = 1,
    ControlCharacter = 2,
    Elastic = 4,
    NonBaseCharacter = 8
  }
  enum TextLayoutOrientation {
    Horizontal = 0,
    Vertical = 1
  }
  enum TypesetterBehavior {
    LatestBehavior = -1,
    OriginalBehavior = 0,
    Behavior_10_2_WithCompatibility = 1,
    Behavior_10_2 = 2,
    Behavior_10_3 = 3,
    Behavior_10_4 = 4
  }
}

module NSLevelIndicator {
  enum PlaceholderVisibility {
    Automatic = 0,
    Always = 1,
    WhileEditing = 2
  }
  enum Style {
    Relevancy = 0,
    ContinuousCapacity = 1,
    DiscreteCapacity = 2,
    Rating = 3
  }
}

enum NSLineBreakMode {
    ByWordWrapping = 0,
    ByCharWrapping = 1,
    ByClipping = 2,
    ByTruncatingHead = 3,
    ByTruncatingTail = 4,
    ByTruncatingMiddle = 5
}

enum NSLineMovementDirection {
    DoesntMove = 0,
    MovesLeft = 1,
    MovesRight = 2,
    MovesDown = 3,
    MovesUp = 4
}

enum NSLineSweepDirection {
    Left = 0,
    Right = 1,
    Down = 2,
    Up = 3
}

module NSMatrix {
  enum Mode {
    RadioModeMatrix = 0,
    HighlightModeMatrix = 1,
    ListModeMatrix = 2,
    TrackModeMatrix = 3
  }
}

module NSMediaLibraryBrowserController {
  enum Library {
    Audio = 1,
    Image = 2,
    Movie = 4
  }
}

module NSMenu {
  enum Properties {
    PropertyItemTitle = 1,
    PropertyItemAttributedTitle = 2,
    PropertyItemKeyEquivalent = 4,
    PropertyItemImage = 8,
    PropertyItemEnabled = 16,
    PropertyItemAccessibilityDescription = 32
  }
}

module NSPDFPanel {
  enum Options {
    ShowsPaperSize = 4,
    ShowsOrientation = 8,
    RequestsParentDirectory = 16777216
  }
}

module NSPageController {
  enum TransitionStyle {
    StackHistory = 0,
    StackBook = 1,
    HorizontalStrip = 2
  }
}

module NSParagraphStyle {
  enum TextTabType {
    LeftTabStopType = 0,
    RightTabStopType = 1,
    CenterTabStopType = 2,
    DecimalTabStopType = 3
  }
}

module NSPasteboard {
  enum ContentsOptions {
    CurrentHostOnly = 1
  }
  enum ReadingOptions {
    AsData = 0,
    AsString = 1,
    AsPropertyList = 2,
    AsKeyedArchive = 4
  }
  enum WritingOptions {
    Promised = 512
  }
}

module NSPathControl {
  enum Style {
    Standard = 0,
    PopUp = 2,
    NavigationBar = 1
  }
}

module NSPickerTouchBarItem {
  enum ControlRepresentation {
    Automatic = 0,
    Expanded = 1,
    Collapsed = 2
  }
  enum SelectionMode {
    SelectOne = 0,
    SelectAny = 1,
    Momentary = 2
  }
}

module NSPopUpButton {
  enum ArrowPosition {
    NoArrow = 0,
    ArrowAtCenter = 1,
    ArrowAtBottom = 2
  }
}

module NSPopover {
  enum Behavior {
    ApplicationDefined = 0,
    Transient = 1,
    Semitransient = 2
  }
}

module NSPrintInfo {
  enum PaginationMode {
    Automatic = 0,
    Fit = 1,
    Clip = 2
  }
  enum PaperOrientation {
    Portrait = 0,
    Landscape = 1
  }
}

module NSPrintOperation {
  enum PageOrder {
    DescendingPageOrder = -1,
    SpecialPageOrder = 0,
    AscendingPageOrder = 1,
    UnknownPageOrder = 2
  }
  enum RenderingQuality {
    Best = 0,
    Responsive = 1
  }
}

module NSPrintPanel {
  enum Options {
    ShowsCopies = 1,
    ShowsPageRange = 2,
    ShowsPaperSize = 4,
    ShowsOrientation = 8,
    ShowsScaling = 16,
    ShowsPrintSelection = 32,
    ShowsPageSetupAccessory = 256,
    ShowsPreview = 131072
  }
}

module NSPrinter {
  enum TableStatus {
    OK = 0,
    NotFound = 1,
    Error = 2
  }
}

module NSProgressIndicator {
  enum Style {
    Bar = 0,
    Spinning = 1
  }
}

enum NSRectAlignment {
    None = 0,
    Top = 1,
    TopLeading = 2,
    Leading = 3,
    BottomLeading = 4,
    Bottom = 5,
    BottomTrailing = 6,
    Trailing = 7,
    TopTrailing = 8
}

module NSRuleEditor {
  enum NestingMode {
    Single = 0,
    List = 1,
    Compound = 2,
    Simple = 3
  }
  enum RowType {
    Simple = 0,
    Compound = 1
  }
}

module NSRulerView {
  enum Orientation {
    HorizontalRuler = 0,
    VerticalRuler = 1
  }
}

module NSScrollView {
  enum Elasticity {
    Automatic = 0,
    None = 1,
    Allowed = 2
  }
  enum FindBarPosition {
    AboveHorizontalRuler = 0,
    AboveContent = 1,
    BelowContent = 2
  }
}

module NSScroller {
  enum KnobStyle {
    Default = 0,
    Dark = 1,
    Light = 2
  }
  enum Part {
    NoPart = 0,
    DecrementPage = 1,
    Knob = 2,
    IncrementPage = 3,
    DecrementLine = 4,
    IncrementLine = 5,
    KnobSlot = 6
  }
  enum Style {
    Legacy = 0,
    Overlay = 1
  }
  enum UsableParts {
    NoScrollerParts = 0,
    OnlyScrollerArrows = 1,
    AllScrollerParts = 2
  }
}

module NSScrubber {
  enum Alignment {
    None = 0,
    Leading = 1,
    Trailing = 2,
    Center = 3
  }
  enum Mode {
    Fixed = 0,
    Free = 1
  }
}

module NSSegmentedControl {
  enum Distribution {
    Fit = 0,
    Fill = 1,
    FillEqually = 2,
    FillProportionally = 3
  }
  enum Style {
    Automatic = 0,
    Rounded = 1,
    RoundRect = 3,
    TexturedSquare = 4,
    SmallSquare = 6,
    Separated = 8,
    TexturedRounded = 2,
    Capsule = 5
  }
  enum SwitchTracking {
    SelectOne = 0,
    SelectAny = 1,
    Momentary = 2,
    MomentaryAccelerator = 3
  }
}

enum NSSelectionAffinity {
    Upstream = 0,
    Downstream = 1
}

enum NSSelectionGranularity {
    ByCharacter = 0,
    ByWord = 1,
    ByParagraph = 2
}

module NSSharingService {
  enum CloudKitOptions {
    Standard = 0,
    AllowPublic = 1,
    AllowPrivate = 2,
    AllowReadOnly = 16,
    AllowReadWrite = 32
  }
  enum SharingContentScope {
    Item = 0,
    Partial = 1,
    Full = 2
  }
}

module NSSlider {
  enum SliderType {
    Linear = 0,
    Circular = 1
  }
  enum TickMarkPosition {
    Below = 0,
    Above = 1,
    Leading = 1,
    Trailing = 0
  }
}

module NSSpeechSynthesizer {
  enum Boundary {
    ImmediateBoundary = 0,
    WordBoundary = 1,
    SentenceBoundary = 2
  }
}

module NSSpellChecker {
  enum CorrectionIndicatorType {
    Default = 0,
    Reversion = 1,
    Guesses = 2
  }
  enum CorrectionResponse {
    None = 0,
    Accepted = 1,
    Rejected = 2,
    Ignored = 3,
    Edited = 4,
    Reverted = 5
  }
}

module NSSplitView {
  enum DividerStyle {
    Thick = 1,
    Thin = 2,
    PaneSplitter = 3
  }
}

module NSSplitViewItem {
  enum Behavior {
    Default = 0,
    Sidebar = 1,
    ContentList = 2
  }
  enum CollapseBehavior {
    Default = 0,
    PreferResizingSplitViewWithFixedSiblings = 1,
    PreferResizingSiblingsWithFixedSplitView = 2,
    UseConstraints = 3
  }
}

enum NSSpringLoadingHighlight {
    None = 0,
    Standard = 1,
    Emphasized = 2
}

enum NSSpringLoadingOptions {
    Disabled = 0,
    Enabled = 1,
    ContinuousActivation = 2,
    NoHover = 8
}

module NSStackView {
  enum Distribution {
    GravityAreas = -1,
    Fill = 0,
    FillEqually = 1,
    FillProportionally = 2,
    EqualSpacing = 3,
    EqualCentering = 4
  }
  enum Gravity {
    Top = 1,
    Leading = 1,
    Center = 2,
    Bottom = 3,
    Trailing = 3
  }
}

module NSStatusItem {
  enum Behavior {
    RemovalAllowed = 2,
    TerminationOnRemoval = 4
  }
}

module NSString {
  enum DrawingOptions {
    UsesLineFragmentOrigin = 1,
    UsesFontLeading = 2,
    UsesDeviceMetrics = 8,
    TruncatesLastVisibleLine = 32,
    DisableScreenFontSubstitution = 4,
    OneShot = 16
  }
}

module NSTabView {
  enum TabPosition {
    None = 0,
    Top = 1,
    Left = 2,
    Bottom = 3,
    Right = 4
  }
  enum TabType {
    TopTabsBezelBorder = 0,
    LeftTabsBezelBorder = 1,
    BottomTabsBezelBorder = 2,
    RightTabsBezelBorder = 3,
    NoTabsBezelBorder = 4,
    NoTabsLineBorder = 5,
    NoTabsNoBorder = 6
  }
  enum TabViewBorderType {
    None = 0,
    Line = 1,
    Bezel = 2
  }
}

module NSTabViewController {
  enum TabStyle {
    SegmentedControlOnTop = 0,
    SegmentedControlOnBottom = 1,
    Toolbar = 2,
    Unspecified = -1
  }
}

module NSTabViewItem {
  enum State {
    SelectedTab = 0,
    BackgroundTab = 1,
    PressedTab = 2
  }
}

module NSTableColumn {
  enum ResizingOptions {
    NoResizing = 0,
    AutoresizingMask = 1,
    UserResizingMask = 2
  }
}

module NSTableView {
  enum AnimationOptions {
    EffectNone = 0,
    EffectFade = 1,
    EffectGap = 2,
    SlideUp = 16,
    SlideDown = 32,
    SlideLeft = 48,
    SlideRight = 64
  }
  enum ColumnAutoresizingStyle {
    NoColumnAutoresizing = 0,
    UniformColumnAutoresizingStyle = 1,
    SequentialColumnAutoresizingStyle = 2,
    ReverseSequentialColumnAutoresizingStyle = 3,
    LastColumnOnlyAutoresizingStyle = 4,
    FirstColumnOnlyAutoresizingStyle = 5
  }
  enum DraggingDestinationFeedbackStyle {
    None = -1,
    Regular = 0,
    SourceList = 1,
    Gap = 2
  }
  enum DropOperation {
    On = 0,
    Above = 1
  }
  enum GridLineStyle {
    GridNone = 0,
    SolidVerticalGridLineMask = 1,
    SolidHorizontalGridLineMask = 2,
    DashedHorizontalGridLineMask = 8
  }
  enum RowActionEdge {
    Leading = 0,
    Trailing = 1
  }
  enum RowSizeStyle {
    Default = -1,
    Custom = 0,
    Small = 1,
    Medium = 2,
    Large = 3
  }
  enum SelectionHighlightStyle {
    None = -1,
    Regular = 0,
    SourceList = 1
  }
}

module NSTableViewRowAction {
  enum Style {
    Regular = 0,
    Destructive = 1
  }
}

enum NSTextAlignment {
    Left = 0,
    Right = 1,
    Center = 2,
    Justified = 3,
    Natural = 4
}

module NSTextBlock {
  enum Dimension {
    Width = 0,
    MinimumWidth = 1,
    MaximumWidth = 2,
    Height = 4,
    MinimumHeight = 5,
    MaximumHeight = 6
  }
  enum Layer {
    Padding = -1,
    Border = 0,
    Margin = 1
  }
  enum ValueType {
    AbsoluteValueType = 0,
    PercentageValueType = 1
  }
  enum VerticalAlignment {
    TopAlignment = 0,
    MiddleAlignment = 1,
    BottomAlignment = 2,
    BaselineAlignment = 3
  }
}

module NSTextField {
  enum BezelStyle {
    SquareBezel = 0,
    RoundedBezel = 1
  }
}

module NSTextFinder {
  enum Action {
    ShowFindInterface = 1,
    NextMatch = 2,
    PreviousMatch = 3,
    ReplaceAll = 4,
    Replace = 5,
    ReplaceAndFind = 6,
    SetSearchString = 7,
    ReplaceAllInSelection = 8,
    SelectAll = 9,
    SelectAllInSelection = 10,
    HideFindInterface = 11,
    ShowReplaceInterface = 12,
    HideReplaceInterface = 13
  }
  enum MatchingType {
    Contains = 0,
    StartsWith = 1,
    FullWord = 2,
    EndsWith = 3
  }
}

enum NSTextInputTraitType {
    Default = 0,
    No = 1,
    Yes = 2
}

module NSTextList {
  enum Options {
    PrependEnclosingMarker = 1
  }
}

enum NSTextMovement {
    Return = 16,
    Tab = 17,
    Backtab = 18,
    Left = 19,
    Right = 20,
    Up = 21,
    Down = 22,
    Cancel = 23,
    Other = 0
}

enum NSTextScalingType {
    Standard = 0,
    iOS = 1
}

enum NSTextStorageEditActions {
    EditedAttributes = 1,
    EditedCharacters = 2
}

module NSTextTable {
  enum LayoutAlgorithm {
    AutomaticLayoutAlgorithm = 0,
    FixedLayoutAlgorithm = 1
  }
}

module NSTokenField {
  enum TokenStyle {
    Default = 0,
    None = 1,
    Rounded = 2,
    Squared = 3,
    PlainSquared = 4
  }
}

module NSToolbar {
  enum DisplayMode {
    Default = 0,
    IconAndLabel = 1,
    IconOnly = 2,
    LabelOnly = 3
  }
  enum SizeMode {
    Default = 0,
    Regular = 1,
    Small = 2
  }
}

module NSToolbarItemGroup {
  enum ControlRepresentation {
    Automatic = 0,
    Expanded = 1,
    Collapsed = 2
  }
  enum SelectionMode {
    SelectOne = 0,
    SelectAny = 1,
    Momentary = 2
  }
}

module NSTouch {
  enum Phase {
    Began = 1,
    Moved = 2,
    Stationary = 4,
    Ended = 8,
    Cancelled = 16,
    Touching = 7,
    Any = -1
  }
  enum TouchType {
    Direct = 0,
    Indirect = 1
  }
  enum TouchTypeMask {
    Direct = 1,
    Indirect = 2
  }
}

module NSTrackingArea {
  enum Options {
    MouseEnteredAndExited = 1,
    MouseMoved = 2,
    CursorUpdate = 4,
    ActiveWhenFirstResponder = 16,
    ActiveInKeyWindow = 32,
    ActiveInActiveApp = 64,
    ActiveAlways = 128,
    AssumeInside = 256,
    InVisibleRect = 512,
    EnabledDuringMouseDrag = 1024
  }
}

enum NSTypesetterControlCharacterAction {
    ZeroAdvancementAction = 1,
    WhitespaceAction = 2,
    HorizontalTabAction = 4,
    LineBreakAction = 8,
    ParagraphBreakAction = 16,
    ContainerBreakAction = 32
}

enum NSUnderlineStyle {
    None = 0,
    Single = 1,
    Thick = 2,
    Double = 9,
    PatternSolid = 0,
    PatternDot = 256,
    PatternDash = 512,
    PatternDashDot = 768,
    PatternDashDotDot = 1024,
    ByWord = 32768
}

enum NSUserInterfaceLayoutDirection {
    LeftToRight = 0,
    RightToLeft = 1
}

enum NSUserInterfaceLayoutOrientation {
    Horizontal = 0,
    Vertical = 1
}

module NSView {
  enum AutoresizingMask {
    ViewNotSizable = 0,
    ViewMinXMargin = 1,
    ViewWidthSizable = 2,
    ViewMaxXMargin = 4,
    ViewMinYMargin = 8,
    ViewHeightSizable = 16,
    ViewMaxYMargin = 32
  }
  enum BackgroundStyle {
    Normal = 0,
    Emphasized = 1,
    Raised = 2,
    Lowered = 3
  }
  enum LayerContentsPlacement {
    ScaleAxesIndependently = 0,
    ScaleProportionallyToFit = 1,
    ScaleProportionallyToFill = 2,
    Center = 3,
    Top = 4,
    TopRight = 5,
    Right = 6,
    BottomRight = 7,
    Bottom = 8,
    BottomLeft = 9,
    Left = 10,
    TopLeft = 11
  }
  enum LayerContentsRedrawPolicy {
    Never = 0,
    OnSetNeedsDisplay = 1,
    DuringViewResize = 2,
    BeforeViewResize = 3,
    Crossfade = 4
  }
}

module NSViewController {
  enum TransitionOptions {
    None = 0,
    Crossfade = 1,
    SlideUp = 16,
    SlideDown = 32,
    SlideLeft = 64,
    SlideRight = 128,
    SlideForward = 320,
    SlideBackward = 384,
    AllowUserInteraction = 4096
  }
}

module NSVisualEffectView {
  enum BlendingMode {
    BehindWindow = 0,
    WithinWindow = 1
  }
  enum Material {
    Titlebar = 3,
    Selection = 4,
    Menu = 5,
    Popover = 6,
    Sidebar = 7,
    HeaderView = 10,
    Sheet = 11,
    WindowBackground = 12,
    HUDWindow = 13,
    FullScreenUI = 15,
    ToolTip = 17,
    ContentBackground = 18,
    UnderWindowBackground = 21,
    UnderPageBackground = 22,
    AppearanceBased = 0,
    Light = 1,
    Dark = 2,
    MediumLight = 8,
    UltraDark = 9
  }
  enum State {
    FollowsWindowActiveState = 0,
    Active = 1,
    Inactive = 2
  }
}

module NSWindow {
  enum AnimationBehavior {
    Default = 0,
    None = 2,
    DocumentWindow = 3,
    UtilityWindow = 4,
    AlertPanel = 5
  }
  enum BackingStoreType {
    Retained = 0,
    Nonretained = 1,
    Buffered = 2
  }
  enum ButtonType {
    CloseButton = 0,
    MiniaturizeButton = 1,
    ZoomButton = 2,
    ToolbarButton = 3,
    DocumentIconButton = 4,
    DocumentVersionsButton = 6
  }
  enum CollectionBehavior {
    Default = 0,
    CanJoinAllSpaces = 1,
    MoveToActiveSpace = 2,
    Managed = 4,
    Transient = 8,
    Stationary = 16,
    ParticipatesInCycle = 32,
    IgnoresCycle = 64,
    FullScreenPrimary = 128,
    FullScreenAuxiliary = 256,
    FullScreenNone = 512,
    FullScreenAllowsTiling = 2048,
    FullScreenDisallowsTiling = 4096
  }
  enum Depth {
    TwentyfourBitRGB = 520,
    SixtyfourBitRGB = 528,
    OnehundredtwentyeightBitRGB = 544
  }
  enum NumberListOptions {
    AllApplications = 1,
    AllSpaces = 16
  }
  enum OcclusionState {
    Visible = 2
  }
  enum OrderingMode {
    Above = 1,
    Below = -1,
    Out = 0
  }
  enum SelectionDirection {
    DirectSelection = 0,
    SelectingNext = 1,
    SelectingPrevious = 2
  }
  enum SharingType {
    None = 0,
    ReadOnly = 1,
    ReadWrite = 2
  }
  enum StyleMask {
    Borderless = 0,
    Titled = 1,
    Closable = 2,
    Miniaturizable = 4,
    Resizable = 8,
    TexturedBackground = 256,
    UnifiedTitleAndToolbar = 4096,
    FullScreen = 16384,
    FullSizeContentView = 32768,
    UtilityWindow = 16,
    DocModalWindow = 64,
    NonactivatingPanel = 128,
    HUDWindow = 8192
  }
  enum TabbingMode {
    Automatic = 0,
    Preferred = 1,
    Disallowed = 2
  }
  enum TitleVisibility {
    Visible = 0,
    Hidden = 1
  }
  enum UserTabbingPreference {
    Manual = 0,
    Always = 1,
    InFullScreen = 2
  }
}

module NSWorkspace {
  enum AuthorizationType {
    CreateSymbolicLink = 0,
    SetAttributes = 1,
    ReplaceFile = 2
  }
  enum IconCreationOptions {
    ExcludeQuickDrawElementsIconCreationOption = 2,
    Exclude10_4ElementsIconCreationOption = 4
  }
  enum LaunchOptions {
    AndPrint = 2,
    WithErrorPresentation = 64,
    InhibitingBackgroundOnly = 128,
    WithoutAddingToRecents = 256,
    WithoutActivation = 512,
    Async = 65536,
    NewInstance = 524288,
    AndHide = 1048576,
    AndHideOthers = 2097152,
    Default = 65536,
    AllowingClassicStartup = 131072,
    PreferringClassic = 262144
  }
}

enum NSWritingDirection {
    Natural = -1,
    LeftToRight = 0,
    RightToLeft = 1
}

enum NSWritingDirectionFormatType {
    Embedding = 0,
    Override = 2
}

